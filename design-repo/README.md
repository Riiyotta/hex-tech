# Hex clone design-repo

An AI-ready, machine-validated design-repo extracted from the local hex.tech clone in the parent folder.
It tells a generator **what it may use** (tokens, primitives, components, 106 section contracts),
**how pieces combine** (25 templates, a compatibility graph) and **how they behave** (closed motion
vocabulary, structured responsive rules, asset-role policies), and it proves all of it with a Draft-07 schema,
a semantic validator and an adversarial suite.

Status: **design-review-pending**, `productionApproved: false`. Not for publication (see "Real company" below).

## Layout

```
registry.manifest.json      status, versions, recomputed counts, entry points (all inside this folder)
tokens/00-foundation/       color, effect (theme-variant gradients/shadows/textures), typography, radius,
                            spacing, breakpoint, elevation, icon-size, motion
tokens/10-semantic/         one semantic token set (48 roles)
tokens/20-component/        component-scoped values
tokens/30-layout/           grid / container values
tokens/themes/              light.json + dark.json: every semantic role resolved per theme
tokens/llm/                 token-catalog.json, token-policy.json, component-allowlist.json (versioned)
primitives/ (13)        button, animated-cta, announcement-pill, code-pill, meta-rows, tron-divider, ...
components/ (18)        glass-card, outline-card, info-text, quote-card, product-window, ...
sections/ (106)          one contract per observed section type (semantic + source objects, retrievalEligible, content fields
                            + maxWords, constraints, motion, responsive, asset roles, evidence, implementing component)
templates/                  templates.json (25 page shapes) + routes.json (60 routes incl. '*' fallback,
                            2 redirects, 2 dev-only non-routes)
compatibility/              graph.json (27 rules with severity) + motion-patterns.json (10 patterns)
assets/asset-roles.json     closed assetRole enum (23 roles) with generation/licensing policy,
                            per-mode availability, substitutes and the sourceBrand patterns
schema/                     pagespec.schema.json (Draft-07), section-contract.schema.json (closed), example.pagespec.json,
                            semantic_validate.py,
                            tests/adversarial_test.py
extraction/                 measured-values.json (citation ledger + sectionHeights), verify_all.py, prove_drift.py,
                            wrapper_gate.py + wrapper-whitelist.json, measure_sections.mjs + measure-recipes.json,
                            generate_provenance.py + provenance-map.json
```

## Run the checks

```
pip install jsonschema            # the only dependency (Draft7Validator)
python3 extraction/verify_all.py
python3 schema/tests/adversarial_test.py
python3 schema/semantic_validate.py schema/example.pagespec.json
python3 extraction/prove_drift.py     # injects 73 defects into a scratch copy; verify_all.py must catch each
python3 extraction/wrapper_gate.py    # the whole-page-wrapper gate on its own (also run by verify_all.py)
python3 extraction/generate_provenance.py --check   # needs the clone's src/ next to design-repo/
```

`verify_all.py` checks: schema validity of the example, the semantic validator on the example and on every
route's observed sequence, allowlist parity (allowlist <-> contract files <-> schema), citation validity
(every `path:line` resolves and its anchor text is on that line), component links, token-reference resolution,
theme closure, pinned asset-role policies and pinned per-mode asset availability (both pinned in code as well as
in the registry), the reference/generated-mode contract (substitutes, shell brand fields, sourceBrand patterns, example
mode), graph-rule <-> validator parity, manifest count recompute, version
parity and a repo-wide absolute-path scan. Citations point at the sibling source project (the folder containing this
`design-repo/`); when that tree is absent the citation checks **warn instead of failing**.

Each section contract names the component that renders it: `implementedBy` (`"src/path/File.jsx > Name"`, relative
to the source project root) and, where other components render the same section elsewhere, `alsoImplementedBy`.
Every contract must have `implementedBy`. Each named definition must exist in its file, and both fields must equal
the same section's entries in the sibling `../ia.json`. Change them in both places together. The resolve and
parity checks warn instead of failing when the source tree is absent.

## How a PageSpec is checked

A PageSpec declares `mode` (required), `template`, `route`, `theme`, `layout`, `meta` and `nodes[]` (each node: `section`,
optional `variant`, `content`, `motion`). The validator matches `nodes[]` against **the declared template's real
node list** (required / repeatable / variants / bounded slots), then applies the graph rules (one hero, hero first,
chrome position, one-per-page, adjacency keyed on (section, variant), motion fallbacks and budget, word budgets,
asset policies, link hygiene, visual-only forms). Slot bounds are the min/max of the real member routes.

## Reference mode vs generated mode (brand safety)

`mode` is required and closed: `reference` or `generated`.

- **reference**: a clone or fidelity page for Hex itself. Every asset role is available, including the real Hex
  wordmark/logo (`brand.wordmark`, `must-reuse-exact`, only the three exact local files).
- **generated**: a new page for any other brand. The real wordmark/logo is **unavailable**: `brand.wordmark` and
  `image.capture-fallback` are `availability: reference-only` (the closed enum is `reference-only | generation-safe`)
  and each names generation-safe substitutes. The safe alternatives are `brand.placeholder` (a neutral, generated
  monogram or text mark; `placeholder-only`) and `brand.user-supplied` (the user's own logo, `user:<slug>`;
  `user-supplied-only`). `shell.header`, `shell.footer` and `hero.report` accept a brand mark; in generated mode the
  header and footer **must** carry `content.brand`, because the chrome would otherwise render the Hex wordmark.
  The validator also rejects any `src` under `/assets/` (those are Hex's files) and any route, meta, text, alt, `src`
  or `href` that names the source brand (`sourceBrand.patterns` in `assets/asset-roles.json`, plus the filename stems
  of the reference-only `allowedSources`, so a new mark file is covered automatically). Rules:
  `GENERATED_MODE_REFERENCE_ASSET`, `GENERATED_MODE_SOURCE_BRAND`, `GENERATED_MODE_BRAND_REQUIRED`.
- The availability of every role and the policy of every compliance-critical role are pinned in `verify_all.py`
  (`PINNED_AVAILABILITY`, `PINNED_POLICY`) independently of the registry, so flipping the wordmark to
  `generation-safe` fails even though that is a valid enum value. `extraction/prove_drift.py` proves it.
- `schema/example.pagespec.json` is the generation-safe example: `mode: generated`, fictional Quarry Lake content and a
  placeholder brand mark on the header and footer.

Limits, stated plainly: the matcher treats a bare "hex" as the brand unless a technical noun follows (hex code,
hex colour...), so a generated sentence such as "convert to hex" is flagged (conservative on purpose). The shell's
global nav, ticker and footer copy are still Hex data that a PageSpec cannot set; a generated site's renderer has to
supply its own chrome copy. Fonts remain local-only (see `nonPageAssets`). The validator only checks what a PageSpec
states: it cannot see pixels, so a renderer must honour `content.brand` instead of drawing the clone's own mark.

## Section contracts: provenance, taxonomy, retrieval, wrapper gate

Every `sections/*.json` validates against the closed `schema/section-contract.schema.json` (an invented key anywhere is an error).

- **`semantic` {id, category}** is what a generator sees: `id` equals the contract id (and the id in the sibling `ia.json`), `category`
  is one of 10 closed classes and the single taxonomy (the old free-form `category` field is gone; `semantic.category` equals the
  sibling `ia.json` category, which is checked when that file is present). Classing is checked, not trusted: `conversion.*` are
  CONVERSION, `hero.*` are HERO, anything with a submission or download behaviour is CONVERSION or HERO, editorial or story content is
  never FEATURE (`feature.podcast-episodes` and `feature.story-details` are CONTENT).
- **`source` {id, tag, file, lines, anchor}** is provenance and never decides the taxonomy: `id` is the implementing component, `file`/`lines`
  its definition in the real source file, `anchor` text that must lie inside that range, `tag` the rendered root element (measured).
  `verify_all.py` re-reads every range from the real files and `extraction/generate_provenance.py` produces both objects from
  `extraction/provenance-map.json` (the checker fails on any drift; without the source tree these checks warn).
- **`retrievalEligible`** (closed boolean, default true) is false only for `shell.header` (ticker plus mega-menu runtime chrome),
  `divider.tron` (layout-only hairline stack) and `hero.placeholder` (fallback stand-in), each with a reason of 30+ characters. The
  list is pinned in `verify_all.py` and in `schema/semantic_validate.py` separately, and the allowlist mirrors it.
- **Whole-page-wrapper gate** (`extraction/wrapper_gate.py`, run by `verify_all.py`): heights are measured at 1440px for 32 routes (a
  greedy route cover, so all 106 sections and all 25 templates are measured) by `extraction/measure_sections.mjs` and stored under
  `sectionHeights`. A HERO over 1800px warns and over 3000px fails; a section over 50% of a page of at least 3 body sections warns and over
  60% fails; shell sections never count; missing, zero or wrong-viewport measurements fail; the thresholds are pinned in code.
  Result on the current measurements: no hero over 1800px (the tallest is 1621px, the guide document hero), and five sections over 60% that are
  documented exceptions in `extraction/wrapper-whitelist.json` (a card grid or list that is the page's one collection, and the customer-story
  prose body). Each entry is an **agent attestation, not a human sign-off**, and carries a ceiling above the measured value, so growth fails.
  The measured heights tile the page (a section runs to the start of the next, margins included) and shift by a few dozen pixels between runs
  on pages with live-rendered parts; the gate's ceilings leave room for that.
- **Not decomposed, on purpose:** `content.story-body` and `content.article-body` are each one RichText column (the clone renders one ordered
  block list with subheadings as blocks, placeholder prose sized to the live line counts); their pages already split header, details and related
  content into separate sections. `/blog/...` has only two body sections, so the share rule does not apply to it (rule: pages with fewer than three);
  it is documented here instead of whitelisted, because a whitelist entry that covers nothing is itself a failure.
- To refresh the heights after the clone changes: build the clone to a scratch folder, preview it, then
  `PLAYWRIGHT_MODULE=<path to playwright/index.mjs> node design-repo/extraction/measure_sections.mjs --base http://localhost:<port> --write`
  (the browser path comes from the environment; no machine path is stored in the repo).

## Things that are structurally unusual (documented, not normalised away)

1. **Real company.** The source is a clone of a real company's live site. Real customer/investor/partner logos,
   real employee photos and trademarks are `placeholder-only` asset roles (pinned; verify_all fails if the policy
   changes), and the real Hex wordmark/logo is reference-only (never available in generated mode). The commercial fonts (GT Cinetype, PP Formula, PP Editorial New) are local-only and must never be
   redistributed. Do not publish this repo or make it public.
2. **Placeholder prose.** Long-form bodies (blog article, customer stories, Switching to Hex, State of Data Teams
   paragraphs, report FAQ answers) are neutral placeholders sized to the live line counts. Budgets here describe
   length and structure only, and the ledger stores six-word anchors, never long-form text. The example PageSpec
   uses invented content (a fictional "Quarry Lake" integration).
3. **Visual-only forms.** Demo/contact/partner forms and the gated guide download never submit
   (`submission: "none"`, rule FORM_NO_SUBMISSION, no endpoint field exists in the schema).
4. **External domains.** External links are plain https hrefs; external iframes may render blank; internal links
   are relative `/paths/` routed client-side.
5. **Theming.** One semantic token set, light and dark resolutions; most subpages are dark; the article body is a
   light slab inside a dark page.
6. **Standalone layout.** `/state-of-data-teams/` has no header, ticker or footer.
7. **Runtime canvases** (nav AI callout, /capability/ai/ hero) are redrawn approximations; the blog commit graph is
   a saved capture.
8. The saved browser snapshot and the stale `dist/` in the project root are not source.

## Corrections to the groundwork

See `extraction/measured-values.json -> correctionsToGroundwork` (10 items: guides 20 not 21, V1 grid-rule
breakpoint 450 not 800, dark nav item colour, banner logo height, templates sidebar not sticky, tooltip without
arrow, route counts, integration-detail URL count, commit-graph capture, unmeasured dark dropdown).

## Provisional parts

Primitive/component prop lists are **provisional**: a concurrent shared-component cleanup was editing
`src/components/shared/*` during this build. All contracts were re-synced against the files as they were at the
end of the build and every citation is re-checked by `verify_all.py`.
