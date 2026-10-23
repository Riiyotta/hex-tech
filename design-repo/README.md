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
sections/ (106)          one contract per observed section type (content fields + maxWords, constraints,
                            motion, responsive, asset roles, evidence)
templates/                  templates.json (25 page shapes) + routes.json (60 routes incl. '*' fallback,
                            2 redirects, 2 dev-only non-routes)
compatibility/              graph.json (22 rules with severity) + motion-patterns.json (10 patterns)
assets/asset-roles.json     closed assetRole enum (21 roles) with generation/licensing policy
schema/                     pagespec.schema.json (Draft-07), example.pagespec.json, semantic_validate.py,
                            tests/adversarial_test.py
extraction/                 measured-values.json (citation ledger), verify_all.py
```

## Run the checks

```
pip install jsonschema            # the only dependency (Draft7Validator)
python3 extraction/verify_all.py
python3 schema/tests/adversarial_test.py
python3 schema/semantic_validate.py schema/example.pagespec.json
```

`verify_all.py` checks: schema validity of the example, the semantic validator on the example and on every
route's observed sequence, allowlist parity (allowlist <-> contract files <-> schema), citation validity
(every `path:line` resolves and its anchor text is on that line), token-reference resolution, theme closure,
pinned asset-role policies, graph-rule <-> validator parity, manifest count recompute, version parity and a
repo-wide absolute-path scan. Citations point at the sibling source project (the folder containing this
`design-repo/`); when that tree is absent the citation checks **warn instead of failing**.

## How a PageSpec is checked

A PageSpec declares `template`, `route`, `theme`, `layout`, `meta` and `nodes[]` (each node: `section`,
optional `variant`, `content`, `motion`). The validator matches `nodes[]` against **the declared template's real
node list** (required / repeatable / variants / bounded slots), then applies the graph rules (one hero, hero first,
chrome position, one-per-page, adjacency keyed on (section, variant), motion fallbacks and budget, word budgets,
asset policies, link hygiene, visual-only forms). Slot bounds are the min/max of the real member routes.

## Things that are structurally unusual (documented, not normalised away)

1. **Real company.** The source is a clone of a real company's live site. Real customer/investor/partner logos,
   real employee photos and trademarks are `placeholder-only` asset roles (pinned; verify_all fails if the policy
   changes). The commercial fonts (GT Cinetype, PP Formula, PP Editorial New) are local-only and must never be
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
