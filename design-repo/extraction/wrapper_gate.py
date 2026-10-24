#!/usr/bin/env python3
"""wrapper_gate.py: automated whole-page-wrapper quality gate (a check of verify_all.py; also runnable alone).

A section contract must describe ONE part of a page, never a whole page or article. The gate reads the rendered heights
recorded at 1440px in extraction/measured-values.json (`sectionHeights`, refreshed by extraction/measure_sections.mjs) and applies:

  HERO height    a section whose contract is classed semantic.category HERO and is taller than 1800px WARNS; taller than 3000px
                 FAILS unless a reviewed hero-height whitelist entry (route + section, maxHeightPx above the measured height) covers it.
  page share     on a page with at least 3 in-flow non-SHELL sections, one section holding more than 50% of the document height
                 WARNS; more than 60% FAILS unless a reviewed page-share whitelist entry (route + section, maxSharePct and
                 maxHeightPx above the measured values) covers it. SHELL sections never count; pages with fewer than 3 are skipped.
  missing data   a section contract, a template, a route sequence node or a height that has no measurement is an ERROR.
                 Measurements taken at any viewport other than 1440px are an ERROR. No guessing, no default.
  accounting     the in-flow heights of a page add up to its document height; shell.header (fixed) takes no page height.
  stale entries  a whitelist entry that no longer covers a real finding FAILS, so the whitelist cannot grow silently.

The thresholds are pinned HERE and are not read from the data. A whitelisted finding still prints as a warning.

Whitelist: extraction/wrapper-whitelist.json. Every entry needs reviewedBy, attestation ("agent" or "human"), reviewedOn and a
justification of 30+ characters. attestation "agent" means an automated reviewer working from the render measurements: it is
NOT a human sign-off and the entry must say so in reviewedBy.

Usage:  python3 extraction/wrapper_gate.py [--root <design-repo dir>]      (exit 1 on any failure)
"""
import glob
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)

HERO_WARN_PX = 1800
HERO_FAIL_PX = 3000
SHARE_WARN_PCT = 50.0
SHARE_FAIL_PCT = 60.0
MIN_SECTIONS = 3
VIEWPORT_WIDTH = 1440
ENTRY_KEYS = {'kind', 'route', 'section', 'maxHeightPx', 'maxSharePct', 'reviewedBy', 'attestation', 'reviewedOn', 'justification'}
DATE_RE = re.compile(r'^\d{4}-\d{2}-\d{2}$')


def _j(root, rel):
    with open(os.path.join(root, rel), encoding='utf-8') as f:
        return json.load(f)


def _contracts(root):
    out = {}
    for p in sorted(glob.glob(os.path.join(root, 'sections', '*.json'))):
        d = json.load(open(p, encoding='utf-8'))
        out[d['id']] = d
    return out


def _int(x):
    return isinstance(x, int) and not isinstance(x, bool)


def validate_whitelist(wl):
    """Structural errors of the whitelist file itself."""
    F = []
    if not isinstance(wl, dict) or not isinstance(wl.get('entries'), list):
        return ['wrapper-whitelist.json must be an object with an entries list']
    seen = set()
    for i, e in enumerate(wl['entries']):
        where = 'whitelist entry %d' % i
        if not isinstance(e, dict):
            F.append('%s is not an object' % where)
            continue
        extra = set(e) - ENTRY_KEYS
        if extra:
            F.append('%s has unknown keys %s' % (where, sorted(extra)))
        kind = e.get('kind')
        if kind not in ('hero-height', 'page-share'):
            F.append('%s: kind must be hero-height or page-share' % where)
            continue
        need = ['route', 'section', 'maxHeightPx', 'reviewedBy', 'attestation', 'reviewedOn', 'justification'] + (['maxSharePct'] if kind == 'page-share' else [])
        for k in need:
            if k not in e:
                F.append('%s (%s) is missing %s' % (where, kind, k))
        if kind == 'hero-height' and 'maxSharePct' in e:
            F.append('%s: hero-height entries have no maxSharePct' % where)
        if not isinstance(e.get('reviewedBy'), str) or not e.get('reviewedBy', '').strip():
            F.append('%s: reviewedBy must be a non-empty string' % where)
        if e.get('attestation') not in ('agent', 'human'):
            F.append('%s: attestation must be "agent" or "human"' % where)
        elif e.get('attestation') == 'agent' and 'not a human sign-off' not in str(e.get('reviewedBy', '')):
            F.append('%s: an agent attestation must say "not a human sign-off" in reviewedBy' % where)
        if not isinstance(e.get('justification'), str) or len(e['justification'].strip()) < 30:
            F.append('%s: justification must be at least 30 characters' % where)
        if not isinstance(e.get('reviewedOn'), str) or not DATE_RE.match(e.get('reviewedOn', '')):
            F.append('%s: reviewedOn must be YYYY-MM-DD' % where)
        if not _int(e.get('maxHeightPx')) or e.get('maxHeightPx', 0) <= 0:
            F.append('%s: maxHeightPx must be a positive integer' % where)
        if kind == 'page-share' and (not isinstance(e.get('maxSharePct'), (int, float)) or isinstance(e.get('maxSharePct'), bool) or not 0 < e.get('maxSharePct', 0) <= 100):
            F.append('%s: maxSharePct must be a number in (0, 100]' % where)
        key = (kind, e.get('route'), e.get('section'))
        if key in seen:
            F.append('%s: duplicate of an earlier entry %s' % (where, key))
        seen.add(key)
    return F


def check_wrapper_gate(root):
    """Return (failures, warnings) for the design-repo at `root`."""
    F, W = [], []
    contracts = _contracts(root)
    try:
        sh = _j(root, 'extraction/measured-values.json').get('sectionHeights')
    except (OSError, ValueError) as e:
        return ['measured-values.json unreadable: %s' % e], W
    if not isinstance(sh, dict):
        return ['no sectionHeights in extraction/measured-values.json: a missing measurement is an error (run extraction/measure_sections.mjs --write)'], W
    try:
        wl = _j(root, 'extraction/wrapper-whitelist.json')
    except (OSError, ValueError) as e:
        return ['wrapper-whitelist.json unreadable: %s' % e], W
    F.extend(validate_whitelist(wl))
    entries = wl.get('entries', []) if isinstance(wl, dict) and isinstance(wl.get('entries'), list) else []
    templates = _j(root, 'templates/templates.json')['templates']
    route_tpl = {r['path']: r for r in _j(root, 'templates/routes.json')['routes']}
    if (sh.get('viewport') or {}).get('width') != VIEWPORT_WIDTH:
        F.append('sectionHeights must be measured at a %dpx viewport, found %r' % (VIEWPORT_WIDTH, (sh.get('viewport') or {}).get('width')))
    routes = sh.get('routes')
    sections = sh.get('sections') or {}
    if not isinstance(routes, list) or not routes:
        return F + ['sectionHeights.routes is missing or empty: no page was measured'], W

    # ---- missing data is an error
    for sid in sorted(contracts):
        s = sections.get(sid)
        if not isinstance(s, dict) or not _int(s.get('maxHeightPx')) or s['maxHeightPx'] <= 0:
            F.append('no measurement for section %s (sectionHeights.sections): a missing measurement is an error' % sid)
    for sid in sorted(set(sections) - set(contracts)):
        F.append('sectionHeights measures %s, which has no contract' % sid)
    measured_tpl = set()
    inst_max = {}
    for rt in routes:
        route = rt.get('route') if isinstance(rt, dict) else None
        r = route_tpl.get(route)
        if r is None:
            F.append('measured route %r is not a route in templates/routes.json' % route)
            continue
        if rt.get('template') != r['template']:
            F.append('%s: measured template %r != routes.json %r' % (route, rt.get('template'), r['template']))
        measured_tpl.add(r['template'])
        secs = rt.get('sections')
        if not _int(rt.get('pageHeightPx')) or rt['pageHeightPx'] <= 0 or not isinstance(secs, list) or not secs:
            F.append('%s: no valid pageHeightPx / sections (missing measurement)' % route)
            continue
        want = sorted(x[0] for x in r['observedSequence'])
        got = sorted(x.get('section') for x in secs if isinstance(x, dict))
        if want != got:
            F.append('%s: measured sections differ from the route\'s observed sequence (missing: %s; extra: %s)' % (
                route, sorted(set(want) - set(got)), sorted(set(got) - set(want))))
        for x in secs:
            if not isinstance(x, dict) or not _int(x.get('heightPx')) or x['heightPx'] < 0 or not isinstance(x.get('inFlow'), bool):
                F.append('%s: a section instance has no valid heightPx/inFlow: %s' % (route, x))
                continue
            if x['inFlow'] and x['heightPx'] <= 0:
                F.append('%s: in-flow section %s has no height (missing measurement)' % (route, x.get('section')))
            inst_max[x['section']] = max(inst_max.get(x['section'], 0), x['heightPx'])
        flow = sum(x['heightPx'] for x in secs if isinstance(x, dict) and x.get('inFlow') and _int(x.get('heightPx')))
        if abs(flow - rt['pageHeightPx']) > 2:
            F.append('%s: in-flow section heights add up to %dpx but the page is %dpx' % (route, flow, rt['pageHeightPx']))
    for tid in sorted(set(templates) - measured_tpl):
        F.append('no measured route for template %s' % tid)
    for sid, s in sorted(sections.items()):
        if sid in inst_max and isinstance(s, dict) and s.get('maxHeightPx') != inst_max[sid]:
            F.append('sectionHeights.sections.%s.maxHeightPx %r != the tallest measured instance %d' % (sid, s.get('maxHeightPx'), inst_max[sid]))
    if F:
        return F, W   # thresholds are meaningless on incomplete data: report what is missing and stop

    used = set()

    def entry_for(kind, route, section):
        for i, e in enumerate(entries):
            if isinstance(e, dict) and (e.get('kind'), e.get('route'), e.get('section')) == (kind, route, section):
                return i, e
        return None, None

    for rt in routes:
        route, total = rt['route'], rt['pageHeightPx']
        flow = [x for x in rt['sections'] if x['inFlow']]
        # ---- HERO height
        for x in flow:
            c = contracts.get(x['section'])
            if c is None or c['semantic']['category'] != 'HERO':
                continue
            h = x['heightPx']
            i, e = entry_for('hero-height', route, x['section'])
            if h > HERO_FAIL_PX:
                if e is None:
                    F.append('HERO %s is %dpx tall on %s (> %d): a whole-page wrapper, not a hero. Decompose it or add a reviewed hero-height whitelist entry' % (x['section'], h, route, HERO_FAIL_PX))
                elif h >= e['maxHeightPx']:
                    used.add(i)
                    F.append('HERO %s is %dpx tall on %s but its whitelist maxHeightPx is %d: the reviewed ceiling is exceeded' % (x['section'], h, route, e['maxHeightPx']))
                else:
                    used.add(i)
                    W.append('HERO %s is %dpx tall on %s (> %d) but whitelisted up to %dpx by %s (%s)' % (x['section'], h, route, HERO_FAIL_PX, e['maxHeightPx'], e['reviewedBy'], e['attestation']))
            elif h > HERO_WARN_PX:
                W.append('HERO %s is %dpx tall on %s (> %d)' % (x['section'], h, route, HERO_WARN_PX))
                if e is not None:
                    used.add(i)
        # ---- page share
        body = [x for x in flow if not x['section'].startswith('shell.')]
        if len(body) < MIN_SECTIONS:
            continue
        for x in body:
            share = 100.0 * x['heightPx'] / total
            if share <= SHARE_WARN_PCT:
                continue
            i, e = entry_for('page-share', route, x['section'])
            msg = '%s is %dpx of the %dpx page %s: %.1f%% of the page height' % (x['section'], x['heightPx'], total, route, share)
            if share > SHARE_FAIL_PCT:
                if e is None:
                    F.append('%s (> %d%%): a whole-page wrapper. Decompose it or add a reviewed page-share whitelist entry' % (msg, SHARE_FAIL_PCT))
                elif share >= e['maxSharePct'] or x['heightPx'] >= e['maxHeightPx']:
                    used.add(i)
                    F.append('%s, over the whitelisted ceiling (%s%% / %dpx)' % (msg, e['maxSharePct'], e['maxHeightPx']))
                else:
                    used.add(i)
                    W.append('%s (> %d%%), whitelisted by %s (%s)' % (msg, SHARE_FAIL_PCT, e['reviewedBy'], e['attestation']))
            else:
                W.append('%s (> %d%%)' % (msg, SHARE_WARN_PCT))
                if e is not None:
                    used.add(i)

    for i, e in enumerate(entries):
        if isinstance(e, dict) and i not in used:
            F.append('stale whitelist entry %d (%s %s %s): it no longer covers a real finding; remove it' % (i, e.get('kind'), e.get('route'), e.get('section')))
    return F, W


def main(argv):
    root = ROOT
    if '--root' in argv:
        root = os.path.abspath(argv[argv.index('--root') + 1])
    F, W = check_wrapper_gate(root)
    for x in F:
        print('FAIL', x)
    for x in W:
        print('warn', x)
    print('wrapper gate: %d failure(s), %d warning(s)' % (len(F), len(W)))
    return 1 if F else 0


if __name__ == '__main__':
    sys.exit(main(sys.argv))
