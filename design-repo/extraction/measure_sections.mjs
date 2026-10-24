#!/usr/bin/env node
/**
 * Optional measurement tool: renders the recipe routes of the RUNNING clone at 1440px and records how tall every section
 * instance is, then (with --write) stores the result in extraction/measured-values.json under `sectionHeights`.
 * extraction/wrapper_gate.py (run by verify_all.py) reads that ledger, so a standalone copy needs no browser;
 * this script is only needed to REFRESH the numbers after the clone changes.
 *
 *   (in the clone project)  npm ci && npx vite build --outDir <scratch dir> && npx vite preview --outDir <scratch dir> --port 5494
 *   PLAYWRIGHT_MODULE=<path to playwright/index.mjs, or leave unset when `playwright` is installed>
 *   node design-repo/extraction/measure_sections.mjs --base http://localhost:5494 --write
 *
 * Options: --base <url> (default http://localhost:4173)   --write   --route <path> (one route, dry run only)
 * How DOM regions map to section ids lives in extraction/measure-recipes.json (data, not code). The browser module is
 * taken from the PLAYWRIGHT_MODULE environment variable; no machine path is stored anywhere in this repo.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const arg = (n, d) => { const i = process.argv.indexOf(n); return i < 0 ? d : (process.argv[i + 1] ?? true); };
const BASE = String(arg('--base', 'http://localhost:4173')).replace(/\/$/, '');
const WRITE = process.argv.includes('--write');
const ONLY = arg('--route', null);

const J = (rel) => JSON.parse(fs.readFileSync(path.join(ROOT, rel), 'utf8'));
const recipes = J('extraction/measure-recipes.json');
const routes = J('templates/routes.json').routes;
const sectionFiles = fs.readdirSync(path.join(ROOT, 'sections')).filter((f) => f.endsWith('.json'));
const component = {};
for (const f of sectionFiles) {
  const c = JSON.parse(fs.readFileSync(path.join(ROOT, 'sections', f), 'utf8'));
  component[c.id] = String(c.implementedBy || '').split(' > ')[1] || null;
}

const pw = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
const chromium = pw.chromium || pw.default.chromium;
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: recipes.viewport });

/** Runs inside the page. */
const inPage = ({ entries, headerCss, components }) => {
  const main = document.querySelector('main');
  const docH = Math.round(document.documentElement.scrollHeight);
  const problems = [];
  const top = (e) => e.getBoundingClientRect().top + window.scrollY;
  const rootTag = (e, sid) => {
    const want = components[sid];
    const hit = want && (e.dataset.section === want ? e : e.querySelector(`[data-section="${want}"]`));
    return (hit || e).tagName.toLowerCase();
  };
  const found = [];
  entries.forEach((en, order) => {
    let el = null;
    if (en.path) {
      el = main;
      for (const i of en.path) { el = el && el.children[i - 1]; }
    } else if (en.css) {
      el = document.querySelectorAll(en.css)[en.nth || 0] || null;
    }
    if (!el) { problems.push(`${en.section}: element not found (${en.path ? 'path ' + en.path.join('.') : en.css + ' #' + en.nth})`); return; }
    found.push({ section: en.section, order, top: Math.round(top(el)), bottom: Math.round(top(el) + el.getBoundingClientRect().height), tag: rootTag(el, en.section), cont: !!en.continuation });
  });
  const hdr = document.querySelector(headerCss);
  const header = hdr ? { height: Math.round(hdr.getBoundingClientRect().height), tag: hdr.tagName.toLowerCase(), fixed: getComputedStyle(hdr).position === 'fixed' || !!hdr.closest('[class*="fixed"]') } : null;
  return { docH, found, header, problems };
};

const instances = [];
const problemsAll = [];
const recs = [];
for (const [route, rec] of Object.entries(recipes.routes)) {
  if (ONLY && route !== ONLY) continue;
  const r = routes.find((x) => x.path === route);
  if (!r) { problemsAll.push(`${route}: not a route in routes.json`); continue; }
  const url = BASE + (route === '*' ? '/page-not-built-yet/' : route);
  await page.goto(url, { waitUntil: 'load' });
  await page.waitForSelector('main', { timeout: 20000 });
  await page.waitForTimeout(1500);
  const entries = rec.entries.filter((e) => e.section !== 'shell.header');
  const res = await page.evaluate(inPage, { entries, headerCss: recipes.headerCss, components: component });
  for (const p of res.problems) problemsAll.push(`${route}: ${p}`);
  // a divider stack is a thin element that may sit at the very top of the next section: that section starts below it
  for (const d of res.found.filter((f) => f.section === 'divider.tron')) {
    for (const f of res.found) if (f !== d && f.section !== 'divider.tron' && f.top >= d.top && f.top < d.bottom) f.top = d.bottom;
  }
  // tile the page: each start runs to the next start; the first starts at 0, the last ends at the document end
  const sorted = [...res.found].sort((a, b) => a.top - b.top || a.order - b.order);
  const tiles = [];
  sorted.forEach((f, i) => {
    const start = i === 0 ? 0 : f.top;
    const end = i + 1 < sorted.length ? sorted[i + 1].top : res.docH;
    const h = end - start;
    if (f.cont) {
      const prev = [...tiles].reverse().find((t) => t.section === f.section);
      if (!prev) problemsAll.push(`${route}: continuation of ${f.section} has no earlier instance`); else prev.heightPx += h;
    } else tiles.push({ section: f.section, order: f.order, heightPx: h, tag: f.tag });
  });
  // the measured set must equal the observed sequence (in-flow nodes only)
  const want = r.observedSequence.map((x) => x[0]).filter((s) => !s.startsWith('shell.header')).sort().join('|');
  const got = tiles.map((t) => t.section).sort().join('|');
  if (want !== got) problemsAll.push(`${route}: measured sections differ from routes.json observedSequence\n      want ${want}\n      got  ${got}`);
  for (const t of tiles) if (!(t.heightPx > 0)) problemsAll.push(`${route}: ${t.section} measured ${t.heightPx}px`);
  const sum = tiles.reduce((a, t) => a + t.heightPx, 0);
  if (sum !== res.docH) problemsAll.push(`${route}: tiles sum to ${sum}px but the document is ${res.docH}px`);
  const out = tiles.map((t) => ({ section: t.section, heightPx: t.heightPx, tag: t.tag, inFlow: true }));
  if (rec.entries.some((e) => e.section === 'shell.header') || !r.observedSequence.every((x) => x[0] !== 'shell.header')) {
    if (res.header) out.unshift({ section: 'shell.header', heightPx: res.header.height, tag: res.header.tag, inFlow: false });
    else problemsAll.push(`${route}: shell.header expected but no <${recipes.headerCss}> element`);
  }
  recs.push({ route, template: r.template, pageHeightPx: res.docH, sections: out });
}
await browser.close();

// ---- aggregate
const sections = {};
for (const rt of recs) {
  for (const s of rt.sections) {
    const cur = sections[s.section] || (sections[s.section] = { maxHeightPx: -1, route: null, template: null, tag: s.tag, instances: 0 });
    cur.instances += 1;
    if (s.heightPx > cur.maxHeightPx) { cur.maxHeightPx = s.heightPx; cur.route = rt.route; cur.template = rt.template; cur.tag = s.tag; }
  }
}
const sorted = (o) => Object.fromEntries(Object.keys(o).sort().map((k) => [k, o[k]]));
const ledger = {
  description: 'Rendered heights at 1440px, written by extraction/measure_sections.mjs from the recipes in extraction/measure-recipes.json. routes = one entry per measured route (page height + the tiled sections in page order; shell.header is the fixed header and takes no page height); sections = per section the tallest instance. Heights include the margins between sections, so they sum to the document height. Read by extraction/wrapper_gate.py.',
  tool: 'extraction/measure_sections.mjs',
  viewport: recipes.viewport,
  routesMeasured: recs.length,
  measuredAt: new Date().toISOString().slice(0, 10),
  routes: recs,
  sections: sorted(sections),
};
console.log(`routes measured: ${recs.length}; sections: ${Object.keys(sections).length}; problems: ${problemsAll.length}`);
problemsAll.slice(0, 60).forEach((p) => console.log('  PROBLEM', p));
if (WRITE) {
  if (ONLY) { console.error('--write needs a full run (no --route)'); process.exit(2); }
  if (problemsAll.length) { console.error('refusing to write with problems'); process.exit(1); }
  const mvPath = path.join(ROOT, 'extraction', 'measured-values.json');
  const mv = JSON.parse(fs.readFileSync(mvPath, 'utf8'));
  mv.sectionHeights = ledger;
  fs.writeFileSync(mvPath, JSON.stringify(mv, null, 2) + '\n');
  console.log('wrote sectionHeights to extraction/measured-values.json');
} else {
  fs.writeFileSync(path.join(process.env.TMPDIR || '/tmp', 'hex-section-heights.preview.json'), JSON.stringify(ledger, null, 2));
  console.log('dry run: preview written to the OS temp dir (use --write to store it)');
}
process.exit(problemsAll.length ? 1 : 0);
