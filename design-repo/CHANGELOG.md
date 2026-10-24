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
- routes.json: removed feature.integration-custom-blocks from /product/integrations/databricks/. On that page the live "custom blocks" area holds only the FAQ (specs/product-integrations.json pages.databricks.customBlocks), which was already recorded as faq.accordion; the clone renders no custom-blocks component for that slug (src/pages/productV1/IntegrationDetail.jsx:176).

## 1.1.0

- Section contracts: added `implementedBy` (all 106) and `alsoImplementedBy` (21) naming the clone components that render each section, copied from the sibling ia.json where each name was checked against its file.
- verify_all.py: two new checks (15 total). Every contract names its component; every named definition exists in its source file and matches ../ia.json (warns when the source tree is absent).

## 1.2.0

- Reference/generated mode. `PageSpec.mode` (`reference` | `generated`) is now required, so `pageSpecVersion` is 1.1.0 (breaking for existing PageSpecs: add `"mode": "reference"`) and `allowlistVersion` is 1.1.0.
- Before this change `brand.wordmark` (the real Hex wordmark/logo files) was `must-reuse-exact` with no notion of mode, so a generated page could carry it. It is now `availability: reference-only` (new closed enum `reference-only | generation-safe` on all roles); its `must-reuse-exact` policy applies to reference mode only. `image.capture-fallback` (a saved Hex capture) is reference-only too.
- New safe roles: `brand.placeholder` (`placeholder-only`) and `brand.user-supplied` (new policy `user-supplied-only`, src `user:<slug>`). 23 asset roles. `shell.header` and `shell.footer` gain an optional `brand` media field; `hero.report.wordmark` also accepts the two safe roles.
- Validator: three new error rules (25 graph rules): GENERATED_MODE_REFERENCE_ASSET (reference-only roles and any `/assets/` src), GENERATED_MODE_SOURCE_BRAND (name, domain, mark-file stems in any route/meta/text/alt/src/href), GENERATED_MODE_BRAND_REQUIRED (generated header/footer must carry a brand mark). New `user-supplied-only` policy check.
- Example PageSpec is now the generation-safe example (`mode: generated`, placeholder brand on header and footer).
- verify_all.py: availability and compliance policies pinned in code (`PINNED_AVAILABILITY`, `PINNED_POLICY`), plus a mode-contract check (16 checks). New extraction/prove_drift.py: 30 injected defects incl. valid-but-wrong pin flips, each caught.
- Adversarial suite: Hex wordmark and logo leakage mutations, name/domain/route/meta leakage, missing-brand and mode cases, generated per-template controls, and reference-mode controls with the real wordmark.
- Not changed: the clone's own `src/`, the IA files (the shell and report sections keep their ia.json descriptions).

## 1.3.0

- Section contracts now carry two distinct closed objects: `semantic` {id, category} (taxonomy, 10 classes, equal to the sibling ia.json category) and `source` {id, tag, file, lines, anchor} (provenance, resolved against the real files). The old free-form `category` field is removed. New closed `schema/section-contract.schema.json`; `extraction/generate_provenance.py` and `extraction/provenance-map.json` produce and re-check both objects; the allowlist mirrors `semanticCategory` and `retrievalEligible`.
- `retrievalEligible` (closed boolean, default true) is false for `shell.header`, `divider.tron` and `hero.placeholder` (reason 30+ characters each), pinned independently in `verify_all.py` and `schema/semantic_validate.py`. Two new graph rules (27 total): RETRIEVAL_ELIGIBILITY_PINNED and SEMANTIC_CATEGORY_CLOSED (conversion/hero/submission/editorial classing).
- Reclassified in ia.json (and IA.md / matrix.csv regenerated with build.mjs): `feature.podcast-episodes` and `feature.story-details` FEATURE -> CONTENT, because editorial and story content is not a capability.
- Whole-page-wrapper gate: `extraction/wrapper_gate.py` (HERO 1800/3000px, section share 50/60% on pages with at least 3 body sections, shell excluded, missing or wrong-viewport measurements fail, thresholds pinned in verify_all.py), real 1440px measurements of 32 routes in `measured-values.json` (`sectionHeights`, written by `extraction/measure_sections.mjs` with the recipes in `extraction/measure-recipes.json`), and `extraction/wrapper-whitelist.json` with five reviewed exceptions (agent attestations, not human sign-offs). Nothing was decomposed: the tallest hero is 1621px; the five over-60% sections are single card grids/lists or one prose body, with ceilings.
- verify_all.py: 20 checks (contract schema + split + classing + retrieval pin, source ranges, provenance sync, wrapper gate), manifest counts for retrievalIneligibleSections, semanticCategories, measuredRoutes and wrapperWhitelistEntries.
- Adversarial suite: contract-level retrieval/semantic pins (contract, allowlist and node level), closed contract schema cases, and 21 wrapper-gate cases (HERO 1900/3100px, share 55%/over 60%, whitelist hygiene, missing/wrong-viewport measurements). prove_drift.py now injects 73 defects (the pins in wrapper_gate.py and semantic_validate.py, retrieval flips, schema opened up, provenance drift against the real source, gate and whitelist drift).
- Known limits: one route per route-set was measured (not all 60); measured page heights vary by a few dozen pixels between runs on pages with live parts; the DOM-to-section recipes are hand-written data and must be revisited when the clone's markup changes.

