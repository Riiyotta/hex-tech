# Changelog

## 1.0.0 (initial build)

- Built from scratch from CLONE_SPEC.md, specs/*.md / *.json, reference/ captures and the clone's source.
- Tokens: 343 foundation/component/layout tokens, 48 semantic roles resolved in 2 themes.
- 13 primitives, 18 components (provisional prop lists, re-synced at the end of the build).
- 106 section contracts, 25 templates, 60 routes (59 concrete + '*' fallback), 2 redirects, 2 dev-only non-routes.
- Compatibility graph with 22 rules (error/warn), 10 closed motion patterns, 21 asset roles (compliance roles pinned).
- Draft-07 PageSpec schema generated from the section contracts; semantic validator cross-references the declared template.
- Adversarial suite: per-template and per-route controls plus mutation cases; verify_all with drift-proofed parity/citation/count checks.
- 10 corrections to the groundwork recorded in extraction/measured-values.json.

## 1.0.1

- Added extraction/verify_all.py (13 checks). Citation anchors are compared after dropping markdown marks and folding typographic punctuation to ASCII, matching how they were recorded.
- Ledger: added the 5 package.json citations used by the manifest's sourceStack; fixed two copy anchors that joined headings split across spans (specs/company.md:165, specs/product.md:567).
- Adversarial suite: the adjacency warn case is now count-neutral (/product/bi/ is already at its body slot maximum).
