# hex.tech clone

A local React + Vite + Tailwind reference clone of https://hex.tech/, with its build spec (`CLONE_SPEC.md`, `specs/`),
asset manifest, reference captures (`reference/`), a machine-validated design-repo (`design-repo/`, see its own
README) and the information architecture described below.

**Private. Do not make this repository public.** It reproduces a real company's site, including its logos, employee
photos and commercial fonts.

```bash
npm ci
npm run dev
```

## Information architecture

`ia.json` is the only IA file to edit by hand. **`IA.md` and `matrix.csv` are generated from it. Don't edit them.**

```bash
node validate.mjs && node build.mjs
```

`validate.mjs` checks the route total, template count, section references and categories, and compares every number
in a section's `scope` text with the route count computed from the templates. `build.mjs` rewrites `IA.md` (readable
doc) and `matrix.csv` (section × template grid).

How it was built:

- Sections and their descriptions come from `design-repo/sections/*.json` (one contract per section; each IA
  section links to it via `contract`). Each template's section order is taken from the routes observed in
  `design-repo/templates/routes.json`.
- Templates are split by real composition. Five design-repo templates (integration detail, product feature, product
  legacy layout, solution detail, resource index) carry different section sets on different routes. Each distinct set
  is its own IA template, and its `family` field names the design-repo template. That's why there are 41 IA
  templates for the design-repo's 25. A section repeated on one page (e.g. several `feature.split` rows) is listed
  once.
- `chrome` is `full` (site header + footer) or `none` (the standalone report page). The header is rendered once by
  the site shell; the footer is rendered by each page.
- `implementedBy` names the component that renders each section. `alsoImplementedBy` lists other components that
  render the same section elsewhere. Every name is checked to be defined in the file it points at.
- The 60 routes include the `*` catch-all placeholder. The 2 redirects and 2 dev-only routes aren't counted.

Findings:

- 40% of routes (24 of 60) come from two families: integration detail (16) and customer story (8). The other 36
  routes need 39 IA templates, mostly one-off pages, so that's where the build effort is.
- 71 of 104 body sections (everything except header and footer) are used by only one template. They should stay
  page-local until a second page needs them. Of the 33 shared ones, 15 are shared only within one family (e.g. the
  integration hero); only 18 cross page families.
- The most reused body section is `proof.customer-banner`: 16 routes across 10 families. Next come `faq.accordion`
  (6 families) and `divider.tron` (20 routes, 5 families).
- 21 sections are rendered by more than one component (`alsoImplementedBy`), e.g. `feature.split` by seven
  page-specific wrappers. They're candidates for consolidation if the clone is refactored.
