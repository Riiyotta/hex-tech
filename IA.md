# Local React clone of https://hex.tech/ (this folder); route table src/routes.jsx

Source: Local React clone of https://hex.tech/ (this folder); route table src/routes.jsx
Status: **measured-from-clone** · production approved: **false**
60 routes · 41 templates · 106 unique sections

> Generated from `ia.json` by `build.mjs`. Edit the JSON, not this file.

## Shape of the site

The largest 3 templates (Integration detail — base, Customer story, Solution detail — with quote and live app) account for 19 of 60 routes (32%). The remaining 41 routes span 38 templates.

| template | routes | share |
|---|---:|---:|
| Integration detail — base | 8 | 13% |
| Customer story | 8 | 13% |
| Solution detail — with quote and live app | 3 | 5% |
| Integration detail — with video | 2 | 3% |
| Integration detail — with stories and links | 2 | 3% |
| Form page | 2 | 3% |
| Integration detail — with custom blocks | 1 | 2% |
| Integration detail — with video and links | 1 | 2% |
| Integration detail — with custom blocks, FAQ and links | 1 | 2% |
| Integration detail — everything | 1 | 2% |
| Product feature — BI | 1 | 2% |
| Product feature — CLI | 1 | 2% |
| Product feature — Context studio | 1 | 2% |
| Product feature — Threads | 1 | 2% |
| Product feature — Notebooks | 1 | 2% |
| Product feature — AI | 1 | 2% |
| Solution detail — Data leaders | 1 | 2% |
| Solution detail — Sales analytics | 1 | 2% |
| Product (legacy layout) — Data apps | 1 | 2% |
| Product (legacy layout) — Embedded analytics | 1 | 2% |
| Product (legacy layout) — Exploratory analysis | 1 | 2% |
| Resource index (legacy layout) — Events | 1 | 2% |
| Resource index (legacy layout) — Guides | 1 | 2% |
| About | 1 | 2% |
| Blog article | 1 | 2% |
| Blog index | 1 | 2% |
| Careers | 1 | 2% |
| Compare | 1 | 2% |
| Customers index | 1 | 2% |
| Enterprise | 1 | 2% |
| Gated guide landing | 1 | 2% |
| Homepage | 1 | 2% |
| Integrations index | 1 | 2% |
| Long-form guide | 1 | 2% |
| Newsroom | 1 | 2% |
| Partners | 1 | 2% |
| Placeholder (catch-all) | 1 | 2% |
| Pricing | 1 | 2% |
| Report | 1 | 2% |
| Solutions hub | 1 | 2% |
| Templates index | 1 | 2% |

## Page chrome

**59 routes carry chrome = `full`** — Integration detail — base, Integration detail — with video, Integration detail — with stories and links, Integration detail — with custom blocks, Integration detail — with video and links, Integration detail — with custom blocks, FAQ and links, Integration detail — everything, Customer story, Product feature — BI, Product feature — CLI, Product feature — Context studio, Product feature — Threads, Product feature — Notebooks, Product feature — AI, Solution detail — with quote and live app, Solution detail — Data leaders, Solution detail — Sales analytics, Product (legacy layout) — Data apps, Product (legacy layout) — Embedded analytics, Product (legacy layout) — Exploratory analysis, Form page, Resource index (legacy layout) — Events, Resource index (legacy layout) — Guides, About, Blog article, Blog index, Careers, Compare, Customers index, Enterprise, Gated guide landing, Homepage, Integrations index, Long-form guide, Newsroom, Partners, Placeholder (catch-all), Pricing, Solutions hub, Templates index.

**1 routes carry chrome = `none`** — Report.

## Sections by reuse

How widely a section is shared determines whether it belongs in a shared
component library or stays local to its page.

| section | category | templates | routes | scope |
|---|---|---:|---:|---|
| `shell.footer` | SHELL | 40 | 59 | On every full-chrome route (all 59); the layout renders it, not the page. |
| `shell.header` | SHELL | 40 | 59 | On every full-chrome route (all 59); the layout renders it, not the page. |
| `divider.tron` | DIVIDER | 11 | 20 | On 20 routes: Integration detail, Enterprise, Homepage, Partners, Pricing. |
| `proof.customer-banner` | PROOF | 13 | 16 | On 16 routes: some Product feature pages, some Solution detail pages, some Product (legacy layout) pages, Form page, About, Compare, Enterprise, Homepage, Pricing, Solutions hub. |
| `hero.integration` | HERO | 7 | 16 | On 16 routes: Integration detail. |
| `feature.how-it-works` | FEATURE | 7 | 16 | On 16 routes: Integration detail. |
| `conversion.outro-tout` | CONVERSION | 12 | 14 | On 14 routes: some Product feature pages, Solution detail, Product (legacy layout), Gated guide landing. |
| `faq.accordion` | FAQ | 9 | 9 | On 9 routes: some Integration detail pages, some Product feature pages, Enterprise, Homepage, Pricing, Report. |
| `feature.section-heading` | FEATURE | 7 | 9 | On 9 routes: some Product feature pages, Solution detail, some Product (legacy layout) pages. |
| `collection.customer-stories` | COLLECTION | 2 | 9 | On 9 routes: Customer story, Customers index. |
| `collection.resource-cards` | COLLECTION | 6 | 8 | On 8 routes: some Product feature pages, Solution detail, Gated guide landing, Solutions hub. |
| `hero.story` | HERO | 1 | 8 | On 8 routes: Customer story. |
| `feature.story-details` | FEATURE | 1 | 8 | On 8 routes: Customer story. |
| `content.story-body` | CONTENT | 1 | 8 | On 8 routes: Customer story. |
| `proof.social-tout` | PROOF | 5 | 7 | On 7 routes: some Product feature pages, some Solution detail pages, Product (legacy layout). |
| `hero.product` | HERO | 6 | 6 | On 6 routes: Product feature. |
| `proof.stories-two-up` | PROOF | 4 | 5 | On 5 routes: some Integration detail pages, some Product feature pages, Homepage. |
| `collection.external-links` | COLLECTION | 4 | 5 | On 5 routes: some Integration detail pages. |
| `hero.solution` | HERO | 3 | 5 | On 5 routes: Solution detail. |
| `feature.solution-row` | FEATURE | 3 | 5 | On 5 routes: Solution detail. |
| `proof.full-width-quote` | PROOF | 4 | 4 | On 4 routes: some Product feature pages. |
| `proof.quotes-marquee` | PROOF | 4 | 4 | On 4 routes: some Product feature pages, Customers index, Long-form guide. |
| `feature.video-embed` | FEATURE | 3 | 4 | On 4 routes: some Integration detail pages. |
| `feature.live-app-embed` | FEATURE | 2 | 4 | On 4 routes: some Solution detail pages. |
| `hero.v1` | HERO | 3 | 3 | On 3 routes: Product (legacy layout). |
| `hero.v1-intro` | HERO | 3 | 3 | On 3 routes: Resource index (legacy layout), Templates index. |
| `feature.info-card-grid` | FEATURE | 3 | 3 | On 3 routes: some Product feature pages. |
| `feature.integration-custom-blocks` | FEATURE | 3 | 3 | On 3 routes: some Integration detail pages. |
| `feature.split` | FEATURE | 3 | 3 | On 3 routes: some Product feature pages, Homepage. |
| `conversion.form-shell` | CONVERSION | 2 | 3 | On 3 routes: Form page, Partners. |
| `proof.logo-wall` | PROOF | 2 | 2 | On 2 routes: About, Customers index. |
| `feature.bento-cells` | FEATURE | 2 | 2 | On 2 routes: some Product feature pages. |
| `feature.integrations-grid` | FEATURE | 2 | 2 | On 2 routes: Enterprise, Homepage. |
| `feature.perlin-callout` | FEATURE | 2 | 2 | On 2 routes: some Product feature pages. |
| `feature.v1-two-up` | FEATURE | 2 | 2 | On 2 routes: some Product (legacy layout) pages. |
| `collection.newsroom-cards` | COLLECTION | 2 | 2 | On 2 routes: About, Newsroom. |
| `collection.template-cards` | COLLECTION | 2 | 2 | On 2 routes: some Product feature pages, some Product (legacy layout) pages. |
| `navigation.filter-chips` | NAVIGATION | 2 | 2 | On 2 routes: Customers index, Solutions hub. |
| `hero.form` | HERO | 1 | 2 | On 2 routes: Form page. |
| `hero.about` | HERO | 1 | 1 | Only on /about/. |
| `hero.article` | HERO | 1 | 1 | Only on /blog/introducing-generative-data-apps/. |
| `hero.blog-masthead` | HERO | 1 | 1 | Only on /blog/. |
| `hero.careers` | HERO | 1 | 1 | Only on /careers/. |
| `hero.compare` | HERO | 1 | 1 | Only on /compare/. |
| `hero.customers` | HERO | 1 | 1 | Only on /customers/. |
| `hero.enterprise` | HERO | 1 | 1 | Only on /enterprise/. |
| `hero.guide-document` | HERO | 1 | 1 | Only on /product/switching-to-hex/. |
| `hero.guide-landing` | HERO | 1 | 1 | Only on /resources/guides/ai-analytics/. |
| `hero.heading-with-callout` | HERO | 1 | 1 | Only on /product/integrations/. |
| `hero.home` | HERO | 1 | 1 | Only on /. |
| `hero.newsroom` | HERO | 1 | 1 | Only on /newsroom/. |
| `hero.partners` | HERO | 1 | 1 | Only on /partners/. |
| `hero.placeholder` | HERO | 1 | 1 | Only on *. |
| `hero.pricing` | HERO | 1 | 1 | Only on /pricing/. |
| `hero.report` | HERO | 1 | 1 | Only on /state-of-data-teams/. |
| `hero.solutions-hub` | HERO | 1 | 1 | Only on /solutions/. |
| `proof.featured-stories-fan` | PROOF | 1 | 1 | Only on /customers/. |
| `proof.quote-tiles` | PROOF | 1 | 1 | Only on /resources/guides/ai-analytics/. |
| `proof.story-tout` | PROOF | 1 | 1 | Only on /. |
| `feature.approach-cards` | FEATURE | 1 | 1 | Only on /product/bi/. |
| `feature.built-different` | FEATURE | 1 | 1 | Only on /. |
| `feature.cell-collage` | FEATURE | 1 | 1 | Only on /product/notebooks/. |
| `feature.codegen-gallery` | FEATURE | 1 | 1 | Only on /product/data-apps/. |
| `feature.command-list` | FEATURE | 1 | 1 | Only on /product/cli/. |
| `feature.demo-accordion` | FEATURE | 1 | 1 | Only on /capability/ai/. |
| `feature.ethos-cards` | FEATURE | 1 | 1 | Only on /. |
| `feature.execution-dag` | FEATURE | 1 | 1 | Only on /product/notebooks/. |
| `feature.highlights` | FEATURE | 1 | 1 | Only on /careers/. |
| `feature.icon-row` | FEATURE | 1 | 1 | Only on /product/embedded-analytics/. |
| `feature.illustrated-checklist` | FEATURE | 1 | 1 | Only on /enterprise/. |
| `feature.magic` | FEATURE | 1 | 1 | Only on /product/notebooks/. |
| `feature.numbered-grid` | FEATURE | 1 | 1 | Only on /enterprise/. |
| `feature.observability-callouts` | FEATURE | 1 | 1 | Only on /product/context-studio/. |
| `feature.partner-tiers` | FEATURE | 1 | 1 | Only on /partners/. |
| `feature.partners-why` | FEATURE | 1 | 1 | Only on /partners/. |
| `feature.photo-collage` | FEATURE | 1 | 1 | Only on /about/. |
| `feature.plan-comparison` | FEATURE | 1 | 1 | Only on /pricing/. |
| `feature.plan-summary` | FEATURE | 1 | 1 | Only on /pricing/. |
| `feature.platform-overview` | FEATURE | 1 | 1 | Only on /product/context-studio/. |
| `feature.podcast-episodes` | FEATURE | 1 | 1 | Only on /resources/guides/ai-analytics/. |
| `feature.snaked-rows` | FEATURE | 1 | 1 | Only on /product/data-apps/. |
| `feature.support-grid` | FEATURE | 1 | 1 | Only on /enterprise/. |
| `feature.use-cases` | FEATURE | 1 | 1 | Only on /. |
| `feature.workflow-split` | FEATURE | 1 | 1 | Only on /capability/ai/. |
| `feature.workflow-table` | FEATURE | 1 | 1 | Only on /product/cli/. |
| `collection.blog-featured` | COLLECTION | 1 | 1 | Only on /blog/. |
| `collection.blog-feed` | COLLECTION | 1 | 1 | Only on /blog/. |
| `collection.blog-recent` | COLLECTION | 1 | 1 | Only on /blog/. |
| `collection.events` | COLLECTION | 1 | 1 | Only on /resources/events/. |
| `collection.guides` | COLLECTION | 1 | 1 | Only on /resources/guides/. |
| `collection.integration-category` | COLLECTION | 1 | 1 | Only on /product/integrations/. |
| `collection.newsroom-featured` | COLLECTION | 1 | 1 | Only on /newsroom/. |
| `collection.open-roles` | COLLECTION | 1 | 1 | Only on /careers/. |
| `collection.partners-grid` | COLLECTION | 1 | 1 | Only on /partners/. |
| `collection.templates-catalog` | COLLECTION | 1 | 1 | Only on /templates/. |
| `content.article-body` | CONTENT | 1 | 1 | Only on /blog/introducing-generative-data-apps/. |
| `content.guide-chapter` | CONTENT | 1 | 1 | Only on /product/switching-to-hex/. |
| `content.report-intro` | CONTENT | 1 | 1 | Only on /state-of-data-teams/. |
| `content.report-outro` | CONTENT | 1 | 1 | Only on /state-of-data-teams/. |
| `content.report-section` | CONTENT | 1 | 1 | Only on /state-of-data-teams/. |
| `content.report-toc` | CONTENT | 1 | 1 | Only on /state-of-data-teams/. |
| `conversion.bottom-cta` | CONVERSION | 1 | 1 | Only on /. |
| `conversion.collage-cta` | CONVERSION | 1 | 1 | Only on /product/data-apps/. |
| `conversion.cta-split` | CONVERSION | 1 | 1 | Only on /enterprise/. |
| `conversion.install-cta` | CONVERSION | 1 | 1 | Only on /product/cli/. |
| `conversion.wallpaper-cta` | CONVERSION | 1 | 1 | Only on /product/notebooks/. |

**35 shared sections** appear in more than one template and belong in a component library.

**71 single-use sections** appear in exactly one template. Building these
as "reusable" components up front would be speculative — keep them page-local
until a second caller actually appears.

## Templates

### Integration detail — base — `template.integration-detail--base`

8 routes · `/product/integrations/dremio/`, `/product/integrations/github/`, `/product/integrations/mariadb/`, `/product/integrations/ms-sql-server/`, `/product/integrations/mysql/`, `/product/integrations/postgres/`, `/product/integrations/prefect/`, `/product/integrations/trino/` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×40 |
| 2 | HERO | `hero.integration` | shared ×7 |
| 3 | DIVIDER | `divider.tron` | shared ×11 |
| 4 | FEATURE | `feature.how-it-works` | shared ×7 |
| 5 | SHELL | `shell.footer` | shared ×40 |

### Integration detail — with video — `template.integration-detail--with-video`

2 routes · `/product/integrations/airflow/`, `/product/integrations/dagster/` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×40 |
| 2 | HERO | `hero.integration` | shared ×7 |
| 3 | DIVIDER | `divider.tron` | shared ×11 |
| 4 | FEATURE | `feature.how-it-works` | shared ×7 |
| 5 | FEATURE | `feature.video-embed` | shared ×3 |
| 6 | SHELL | `shell.footer` | shared ×40 |

### Integration detail — with stories and links — `template.integration-detail--with-stories-links`

2 routes · `/product/integrations/bigquery/`, `/product/integrations/dbt/` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×40 |
| 2 | HERO | `hero.integration` | shared ×7 |
| 3 | PROOF | `proof.stories-two-up` | shared ×4 |
| 4 | DIVIDER | `divider.tron` | shared ×11 |
| 5 | FEATURE | `feature.how-it-works` | shared ×7 |
| 6 | COLLECTION | `collection.external-links` | shared ×4 |
| 7 | SHELL | `shell.footer` | shared ×40 |

### Integration detail — with custom blocks — `template.integration-detail--with-custom-blocks`

1 route · `/product/integrations/aws/` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×40 |
| 2 | HERO | `hero.integration` | shared ×7 |
| 3 | DIVIDER | `divider.tron` | shared ×11 |
| 4 | FEATURE | `feature.how-it-works` | shared ×7 |
| 5 | FEATURE | `feature.integration-custom-blocks` | shared ×3 |
| 6 | SHELL | `shell.footer` | shared ×40 |

### Integration detail — with video and links — `template.integration-detail--with-video-links`

1 route · `/product/integrations/clickhouse/` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×40 |
| 2 | HERO | `hero.integration` | shared ×7 |
| 3 | DIVIDER | `divider.tron` | shared ×11 |
| 4 | FEATURE | `feature.how-it-works` | shared ×7 |
| 5 | FEATURE | `feature.video-embed` | shared ×3 |
| 6 | COLLECTION | `collection.external-links` | shared ×4 |
| 7 | SHELL | `shell.footer` | shared ×40 |

### Integration detail — with custom blocks, FAQ and links — `template.integration-detail--with-custom-blocks-faq-links`

1 route · `/product/integrations/databricks/` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×40 |
| 2 | HERO | `hero.integration` | shared ×7 |
| 3 | DIVIDER | `divider.tron` | shared ×11 |
| 4 | FEATURE | `feature.how-it-works` | shared ×7 |
| 5 | FEATURE | `feature.integration-custom-blocks` | shared ×3 |
| 6 | FAQ | `faq.accordion` | shared ×9 |
| 7 | COLLECTION | `collection.external-links` | shared ×4 |
| 8 | SHELL | `shell.footer` | shared ×40 |

### Integration detail — everything — `template.integration-detail--everything`

1 route · `/product/integrations/snowflake/` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×40 |
| 2 | HERO | `hero.integration` | shared ×7 |
| 3 | PROOF | `proof.stories-two-up` | shared ×4 |
| 4 | DIVIDER | `divider.tron` | shared ×11 |
| 5 | FEATURE | `feature.how-it-works` | shared ×7 |
| 6 | FEATURE | `feature.integration-custom-blocks` | shared ×3 |
| 7 | FAQ | `faq.accordion` | shared ×9 |
| 8 | FEATURE | `feature.video-embed` | shared ×3 |
| 9 | COLLECTION | `collection.external-links` | shared ×4 |
| 10 | SHELL | `shell.footer` | shared ×40 |

### Customer story — `template.customer-story`

8 routes · `/customers/chime/`, `/customers/figma/`, `/customers/langchain/`, `/customers/mercor/`, `/customers/neo-financial/`, `/customers/notion/`, `/customers/ramp/`, `/customers/stubhub/` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×40 |
| 2 | HERO | `hero.story` | page-local |
| 3 | FEATURE | `feature.story-details` | page-local |
| 4 | CONTENT | `content.story-body` | page-local |
| 5 | COLLECTION | `collection.customer-stories` | shared ×2 |
| 6 | SHELL | `shell.footer` | shared ×40 |

### Product feature — BI — `template.product-feature--bi`

1 route · `/product/bi/` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×40 |
| 2 | HERO | `hero.product` | shared ×6 |
| 3 | PROOF | `proof.customer-banner` | shared ×13 |
| 4 | FEATURE | `feature.section-heading` | shared ×7 |
| 5 | FEATURE | `feature.split` | shared ×3 |
| 6 | FEATURE | `feature.approach-cards` | page-local |
| 7 | COLLECTION | `collection.resource-cards` | shared ×6 |
| 8 | FAQ | `faq.accordion` | shared ×9 |
| 9 | CONVERSION | `conversion.outro-tout` | shared ×12 |
| 10 | SHELL | `shell.footer` | shared ×40 |

### Product feature — CLI — `template.product-feature--cli`

1 route · `/product/cli/` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×40 |
| 2 | HERO | `hero.product` | shared ×6 |
| 3 | PROOF | `proof.full-width-quote` | shared ×4 |
| 4 | FEATURE | `feature.section-heading` | shared ×7 |
| 5 | FEATURE | `feature.info-card-grid` | shared ×3 |
| 6 | FEATURE | `feature.command-list` | page-local |
| 7 | FEATURE | `feature.workflow-table` | page-local |
| 8 | CONVERSION | `conversion.install-cta` | page-local |
| 9 | CONVERSION | `conversion.outro-tout` | shared ×12 |
| 10 | SHELL | `shell.footer` | shared ×40 |

### Product feature — Context studio — `template.product-feature--context-studio`

1 route · `/product/context-studio/` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×40 |
| 2 | HERO | `hero.product` | shared ×6 |
| 3 | FEATURE | `feature.platform-overview` | page-local |
| 4 | FEATURE | `feature.info-card-grid` | shared ×3 |
| 5 | FEATURE | `feature.observability-callouts` | page-local |
| 6 | PROOF | `proof.full-width-quote` | shared ×4 |
| 7 | FEATURE | `feature.bento-cells` | shared ×2 |
| 8 | PROOF | `proof.stories-two-up` | shared ×4 |
| 9 | CONVERSION | `conversion.outro-tout` | shared ×12 |
| 10 | FAQ | `faq.accordion` | shared ×9 |
| 11 | SHELL | `shell.footer` | shared ×40 |

### Product feature — Threads — `template.product-feature--threads`

1 route · `/product/threads/` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×40 |
| 2 | HERO | `hero.product` | shared ×6 |
| 3 | PROOF | `proof.full-width-quote` | shared ×4 |
| 4 | FEATURE | `feature.split` | shared ×3 |
| 5 | FEATURE | `feature.bento-cells` | shared ×2 |
| 6 | PROOF | `proof.quotes-marquee` | shared ×4 |
| 7 | FEATURE | `feature.perlin-callout` | shared ×2 |
| 8 | CONVERSION | `conversion.outro-tout` | shared ×12 |
| 9 | SHELL | `shell.footer` | shared ×40 |

### Product feature — Notebooks — `template.product-feature--notebooks`

1 route · `/product/notebooks/` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×40 |
| 2 | HERO | `hero.product` | shared ×6 |
| 3 | PROOF | `proof.customer-banner` | shared ×13 |
| 4 | FEATURE | `feature.magic` | page-local |
| 5 | PROOF | `proof.full-width-quote` | shared ×4 |
| 6 | FEATURE | `feature.cell-collage` | page-local |
| 7 | FEATURE | `feature.execution-dag` | page-local |
| 8 | CONVERSION | `conversion.wallpaper-cta` | page-local |
| 9 | PROOF | `proof.social-tout` | shared ×5 |
| 10 | COLLECTION | `collection.template-cards` | shared ×2 |
| 11 | SHELL | `shell.footer` | shared ×40 |

### Product feature — AI — `template.product-feature--ai`

1 route · `/capability/ai/` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×40 |
| 2 | HERO | `hero.product` | shared ×6 |
| 3 | FEATURE | `feature.workflow-split` | page-local |
| 4 | PROOF | `proof.quotes-marquee` | shared ×4 |
| 5 | FEATURE | `feature.demo-accordion` | page-local |
| 6 | FEATURE | `feature.perlin-callout` | shared ×2 |
| 7 | FEATURE | `feature.info-card-grid` | shared ×3 |
| 8 | CONVERSION | `conversion.outro-tout` | shared ×12 |
| 9 | FAQ | `faq.accordion` | shared ×9 |
| 10 | SHELL | `shell.footer` | shared ×40 |

### Solution detail — with quote and live app — `template.solution-detail--with-quote-live-app`

3 routes · `/solutions/customer-success/`, `/solutions/marketing/`, `/solutions/product-analytics/` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×40 |
| 2 | HERO | `hero.solution` | shared ×3 |
| 3 | PROOF | `proof.customer-banner` | shared ×13 |
| 4 | FEATURE | `feature.solution-row` | shared ×3 |
| 5 | PROOF | `proof.social-tout` | shared ×5 |
| 6 | FEATURE | `feature.live-app-embed` | shared ×2 |
| 7 | FEATURE | `feature.section-heading` | shared ×7 |
| 8 | COLLECTION | `collection.resource-cards` | shared ×6 |
| 9 | CONVERSION | `conversion.outro-tout` | shared ×12 |
| 10 | SHELL | `shell.footer` | shared ×40 |

### Solution detail — Data leaders — `template.solution-detail--data-leaders`

1 route · `/solutions/data-leaders/` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×40 |
| 2 | HERO | `hero.solution` | shared ×3 |
| 3 | PROOF | `proof.customer-banner` | shared ×13 |
| 4 | FEATURE | `feature.solution-row` | shared ×3 |
| 5 | FEATURE | `feature.section-heading` | shared ×7 |
| 6 | COLLECTION | `collection.resource-cards` | shared ×6 |
| 7 | CONVERSION | `conversion.outro-tout` | shared ×12 |
| 8 | SHELL | `shell.footer` | shared ×40 |

### Solution detail — Sales analytics — `template.solution-detail--sales-analytics`

1 route · `/solutions/sales-analytics/` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×40 |
| 2 | HERO | `hero.solution` | shared ×3 |
| 3 | FEATURE | `feature.solution-row` | shared ×3 |
| 4 | FEATURE | `feature.live-app-embed` | shared ×2 |
| 5 | FEATURE | `feature.section-heading` | shared ×7 |
| 6 | COLLECTION | `collection.resource-cards` | shared ×6 |
| 7 | CONVERSION | `conversion.outro-tout` | shared ×12 |
| 8 | SHELL | `shell.footer` | shared ×40 |

### Product (legacy layout) — Data apps — `template.product-v1--data-apps`

1 route · `/product/data-apps/` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×40 |
| 2 | HERO | `hero.v1` | shared ×3 |
| 3 | PROOF | `proof.customer-banner` | shared ×13 |
| 4 | FEATURE | `feature.codegen-gallery` | page-local |
| 5 | FEATURE | `feature.snaked-rows` | page-local |
| 6 | PROOF | `proof.social-tout` | shared ×5 |
| 7 | CONVERSION | `conversion.collage-cta` | page-local |
| 8 | CONVERSION | `conversion.outro-tout` | shared ×12 |
| 9 | SHELL | `shell.footer` | shared ×40 |

### Product (legacy layout) — Embedded analytics — `template.product-v1--embedded-analytics`

1 route · `/product/embedded-analytics/` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×40 |
| 2 | HERO | `hero.v1` | shared ×3 |
| 3 | PROOF | `proof.customer-banner` | shared ×13 |
| 4 | FEATURE | `feature.section-heading` | shared ×7 |
| 5 | FEATURE | `feature.v1-two-up` | shared ×2 |
| 6 | PROOF | `proof.social-tout` | shared ×5 |
| 7 | FEATURE | `feature.icon-row` | page-local |
| 8 | CONVERSION | `conversion.outro-tout` | shared ×12 |
| 9 | SHELL | `shell.footer` | shared ×40 |

### Product (legacy layout) — Exploratory analysis — `template.product-v1--exploratory-analysis`

1 route · `/capability/exploratory-analysis/` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×40 |
| 2 | HERO | `hero.v1` | shared ×3 |
| 3 | PROOF | `proof.social-tout` | shared ×5 |
| 4 | FEATURE | `feature.section-heading` | shared ×7 |
| 5 | FEATURE | `feature.v1-two-up` | shared ×2 |
| 6 | COLLECTION | `collection.template-cards` | shared ×2 |
| 7 | CONVERSION | `conversion.outro-tout` | shared ×12 |
| 8 | SHELL | `shell.footer` | shared ×40 |

### Form page — `template.form-page`

2 routes · `/request-a-demo/`, `/contact-us/` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×40 |
| 2 | HERO | `hero.form` | page-local |
| 3 | CONVERSION | `conversion.form-shell` | shared ×2 |
| 4 | PROOF | `proof.customer-banner` | shared ×13 |
| 5 | SHELL | `shell.footer` | shared ×40 |

### Resource index (legacy layout) — Events — `template.v1-resource-index--events`

1 route · `/resources/events/` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×40 |
| 2 | HERO | `hero.v1-intro` | shared ×3 |
| 3 | COLLECTION | `collection.events` | page-local |
| 4 | SHELL | `shell.footer` | shared ×40 |

### Resource index (legacy layout) — Guides — `template.v1-resource-index--guides`

1 route · `/resources/guides/` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×40 |
| 2 | HERO | `hero.v1-intro` | shared ×3 |
| 3 | COLLECTION | `collection.guides` | page-local |
| 4 | SHELL | `shell.footer` | shared ×40 |

### About — `template.about`

1 route · `/about/` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×40 |
| 2 | HERO | `hero.about` | page-local |
| 3 | PROOF | `proof.customer-banner` | shared ×13 |
| 4 | PROOF | `proof.logo-wall` | shared ×2 |
| 5 | COLLECTION | `collection.newsroom-cards` | shared ×2 |
| 6 | FEATURE | `feature.photo-collage` | page-local |
| 7 | SHELL | `shell.footer` | shared ×40 |

### Blog article — `template.article`

1 route · `/blog/introducing-generative-data-apps/` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×40 |
| 2 | HERO | `hero.article` | page-local |
| 3 | CONTENT | `content.article-body` | page-local |
| 4 | SHELL | `shell.footer` | shared ×40 |

### Blog index — `template.blog-index`

1 route · `/blog/` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×40 |
| 2 | HERO | `hero.blog-masthead` | page-local |
| 3 | COLLECTION | `collection.blog-featured` | page-local |
| 4 | COLLECTION | `collection.blog-recent` | page-local |
| 5 | COLLECTION | `collection.blog-feed` | page-local |
| 6 | SHELL | `shell.footer` | shared ×40 |

### Careers — `template.careers`

1 route · `/careers/` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×40 |
| 2 | HERO | `hero.careers` | page-local |
| 3 | FEATURE | `feature.highlights` | page-local |
| 4 | COLLECTION | `collection.open-roles` | page-local |
| 5 | SHELL | `shell.footer` | shared ×40 |

### Compare — `template.compare`

1 route · `/compare/` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×40 |
| 2 | HERO | `hero.compare` | page-local |
| 3 | PROOF | `proof.customer-banner` | shared ×13 |
| 4 | SHELL | `shell.footer` | shared ×40 |

### Customers index — `template.customers-index`

1 route · `/customers/` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×40 |
| 2 | HERO | `hero.customers` | page-local |
| 3 | PROOF | `proof.featured-stories-fan` | page-local |
| 4 | PROOF | `proof.quotes-marquee` | shared ×4 |
| 5 | NAVIGATION | `navigation.filter-chips` | shared ×2 |
| 6 | COLLECTION | `collection.customer-stories` | shared ×2 |
| 7 | PROOF | `proof.logo-wall` | shared ×2 |
| 8 | SHELL | `shell.footer` | shared ×40 |

### Enterprise — `template.enterprise`

1 route · `/enterprise/` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×40 |
| 2 | HERO | `hero.enterprise` | page-local |
| 3 | PROOF | `proof.customer-banner` | shared ×13 |
| 4 | FEATURE | `feature.numbered-grid` | page-local |
| 5 | FEATURE | `feature.illustrated-checklist` | page-local |
| 6 | FEATURE | `feature.support-grid` | page-local |
| 7 | FEATURE | `feature.integrations-grid` | shared ×2 |
| 8 | CONVERSION | `conversion.cta-split` | page-local |
| 9 | DIVIDER | `divider.tron` | shared ×11 |
| 10 | FAQ | `faq.accordion` | shared ×9 |
| 11 | SHELL | `shell.footer` | shared ×40 |

### Gated guide landing — `template.guide-landing`

1 route · `/resources/guides/ai-analytics/` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×40 |
| 2 | HERO | `hero.guide-landing` | page-local |
| 3 | FEATURE | `feature.podcast-episodes` | page-local |
| 4 | COLLECTION | `collection.resource-cards` | shared ×6 |
| 5 | PROOF | `proof.quote-tiles` | page-local |
| 6 | CONVERSION | `conversion.outro-tout` | shared ×12 |
| 7 | SHELL | `shell.footer` | shared ×40 |

### Homepage — `template.home`

1 route · `/` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×40 |
| 2 | HERO | `hero.home` | page-local |
| 3 | PROOF | `proof.customer-banner` | shared ×13 |
| 4 | FEATURE | `feature.built-different` | page-local |
| 5 | FEATURE | `feature.split` | shared ×3 |
| 6 | FEATURE | `feature.ethos-cards` | page-local |
| 7 | PROOF | `proof.stories-two-up` | shared ×4 |
| 8 | FEATURE | `feature.use-cases` | page-local |
| 9 | PROOF | `proof.story-tout` | page-local |
| 10 | FEATURE | `feature.integrations-grid` | shared ×2 |
| 11 | CONVERSION | `conversion.bottom-cta` | page-local |
| 12 | DIVIDER | `divider.tron` | shared ×11 |
| 13 | FAQ | `faq.accordion` | shared ×9 |
| 14 | SHELL | `shell.footer` | shared ×40 |

### Integrations index — `template.integrations-index`

1 route · `/product/integrations/` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×40 |
| 2 | HERO | `hero.heading-with-callout` | page-local |
| 3 | COLLECTION | `collection.integration-category` | page-local |
| 4 | SHELL | `shell.footer` | shared ×40 |

### Long-form guide — `template.long-form-guide`

1 route · `/product/switching-to-hex/` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×40 |
| 2 | HERO | `hero.guide-document` | page-local |
| 3 | CONTENT | `content.guide-chapter` | page-local |
| 4 | PROOF | `proof.quotes-marquee` | shared ×4 |
| 5 | SHELL | `shell.footer` | shared ×40 |

### Newsroom — `template.newsroom`

1 route · `/newsroom/` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×40 |
| 2 | HERO | `hero.newsroom` | page-local |
| 3 | COLLECTION | `collection.newsroom-featured` | page-local |
| 4 | COLLECTION | `collection.newsroom-cards` | shared ×2 |
| 5 | SHELL | `shell.footer` | shared ×40 |

### Partners — `template.partners`

1 route · `/partners/` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×40 |
| 2 | HERO | `hero.partners` | page-local |
| 3 | FEATURE | `feature.partners-why` | page-local |
| 4 | DIVIDER | `divider.tron` | shared ×11 |
| 5 | FEATURE | `feature.partner-tiers` | page-local |
| 6 | COLLECTION | `collection.partners-grid` | page-local |
| 7 | CONVERSION | `conversion.form-shell` | shared ×2 |
| 8 | SHELL | `shell.footer` | shared ×40 |

### Placeholder (catch-all) — `template.placeholder`

1 route · `*` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×40 |
| 2 | HERO | `hero.placeholder` | page-local |
| 3 | SHELL | `shell.footer` | shared ×40 |

### Pricing — `template.pricing`

1 route · `/pricing/` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×40 |
| 2 | HERO | `hero.pricing` | page-local |
| 3 | FEATURE | `feature.plan-summary` | page-local |
| 4 | PROOF | `proof.customer-banner` | shared ×13 |
| 5 | DIVIDER | `divider.tron` | shared ×11 |
| 6 | FEATURE | `feature.plan-comparison` | page-local |
| 7 | FAQ | `faq.accordion` | shared ×9 |
| 8 | SHELL | `shell.footer` | shared ×40 |

### Report — `template.report`

1 route · `/state-of-data-teams/` · chrome: **none**

| # | category | section | |
|---:|---|---|---|
| 1 | HERO | `hero.report` | page-local |
| 2 | CONTENT | `content.report-intro` | page-local |
| 3 | CONTENT | `content.report-toc` | page-local |
| 4 | CONTENT | `content.report-section` | page-local |
| 5 | CONTENT | `content.report-outro` | page-local |
| 6 | FAQ | `faq.accordion` | shared ×9 |

### Solutions hub — `template.solutions-hub`

1 route · `/solutions/` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×40 |
| 2 | HERO | `hero.solutions-hub` | page-local |
| 3 | PROOF | `proof.customer-banner` | shared ×13 |
| 4 | NAVIGATION | `navigation.filter-chips` | shared ×2 |
| 5 | COLLECTION | `collection.resource-cards` | shared ×6 |
| 6 | SHELL | `shell.footer` | shared ×40 |

### Templates index — `template.templates-index`

1 route · `/templates/` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×40 |
| 2 | HERO | `hero.v1-intro` | shared ×3 |
| 3 | COLLECTION | `collection.templates-catalog` | page-local |
| 4 | SHELL | `shell.footer` | shared ×40 |

## Section reference

### SHELL

_Site chrome rendered by the layout around every full-chrome page: header (with ticker and nav) and footer._

**`shell.footer`** — Global footer: wordmark + emoji rotator, four link columns, legal row, static hit counter.

· On every full-chrome route (all 59); the layout renders it, not the page. · appears on 59 routes

**`shell.header`** — Global fixed chrome: announcement ticker + main nav with mega-menus; identical on every site-layout page, themed only.

· On every full-chrome route (all 59); the layout renders it, not the page. · appears on 59 routes

### HERO

_The page-opening block; exactly one per page, always the first content section._

**`hero.about`** — About hero: italic + display two-line H1 over Perlin/cartesian backdrop, team photo card beside lead copy and an animated CTA.

· Only on /about/. · appears on 1 routes

**`hero.article`** — Dark article header: eyebrow link, solid H1, dek, author/category/date meta, share links and hero media that overlaps the light body slab.

· Only on /blog/introducing-generative-data-apps/. · appears on 1 routes

**`hero.blog-masthead`** — Blog masthead: small H1 on a category divider, search toggle, commit-graph strip and a stats line.

· Only on /blog/. · appears on 1 routes

**`hero.careers`** — Careers hero: centred two-line H1, lead + emphasis and CTAs framed by a wall of team photos that blur in.

· Only on /careers/. · appears on 1 routes

**`hero.compare`** — Compare hero: 74px gradient H1, lead, two CTAs and a dashed hatched 'vs.' panel of competitor cards.

· Only on /compare/. · appears on 1 routes

**`hero.customers`** — Customers index hero: heart line illustration behind an italic+display H1 and a short lead.

· Only on /customers/. · appears on 1 routes

**`hero.enterprise`** — Enterprise hero: vertical eyebrow, 68px solid H1, lead, two-column tick checklist and CTA beside an illustration.

· Only on /enterprise/. · appears on 1 routes

**`hero.form`** — Form page heading: centred solid H1 and lead above the visual-only form shell.

· On 2 routes: Form page. · appears on 2 routes

**`hero.guide-document`** — Long-form guide cover card: fading feature-tag list, oversized H1, lead and a three-group table of contents.

· Only on /product/switching-to-hex/. · appears on 1 routes

**`hero.guide-landing`** — Guide landing hero: two-line H1 with flanked italic line, lead, and a dark gated-download card.

· Only on /resources/guides/ai-analytics/. · appears on 1 routes

**`hero.heading-with-callout`** — Index heading: two-line solid H1 + lead on the left, ruled tinted callout with a mail link on the right.

· Only on /product/integrations/. · appears on 1 routes

**`hero.home`** — Homepage stage: two-line display headline, pill-linked lead and two CTAs over Perlin + cartesian backdrop.

· Only on /. · appears on 1 routes

**`hero.integration`** — Integration detail hero: label tab cut into a logo box, solid H1, lead and 1-2 md CTAs.

· On 16 routes: Integration detail. · appears on 16 routes

**`hero.newsroom`** — Newsroom header: left gradient H1 + press-contact line, media-kit callout on the right.

· Only on /newsroom/. · appears on 1 routes

**`hero.partners`** — Partners hero: centred solid H1, paragraph lead and two md CTAs (anchor + external form link).

· Only on /partners/. · appears on 1 routes

**`hero.placeholder`** — Fallback 'page still being built' placeholder for unrouted internal paths: path label, H1 and a back-home button.

· Only on *. · appears on 1 routes

**`hero.pricing`** — Pricing header: solid H1 and a 14px subline with an inline contact link.

· Only on /pricing/. · appears on 1 routes

**`hero.product`** — Product/capability hero: optional announcement pill, gradient H1 (+ italic line), lead and CTAs beside a product visual.

· On 6 routes: Product feature. · appears on 6 routes

**`hero.report`** — Report microsite hero: wordmark, hatched report artwork as H1 (screen-reader title), issue eyebrow and about copy.

· Only on /state-of-data-teams/. · appears on 1 routes

**`hero.solution`** — Solution-detail hero: centred gradient H1, one-line lead, primary + secondary lg CTAs.

· On 5 routes: Solution detail. · appears on 5 routes

**`hero.solutions-hub`** — Hub hero: opaque glass panel with italic lead and a rotating 74px word, lead and two CTAs.

· Only on /solutions/. · appears on 1 routes

**`hero.story`** — Customer story header grid: logo cell, hatched cell, solid H1, dek and a centred metadata strip.

· On 8 routes: Customer story. · appears on 8 routes

**`hero.v1`** — V1 marketing hero: centred 74px gradient H1, lead and two md CTAs; app-builder variant adds pill + app strip.

· On 3 routes: Product (legacy layout). · appears on 3 routes

**`hero.v1-intro`** — Dark V1 resource intro: white 74px H1 + lead, with the line illustration beside it (split) or centred (catalog).

· On 3 routes: Resource index (legacy layout), Templates index. · appears on 3 routes

### PROOF

_Social proof: customer logos, quotes, stories, review badges._

**`proof.customer-banner`** — Logo band proving adoption: label + customer logo row; story logos get an indicator dot and a quote popover.

· On 16 routes: some Product feature pages, some Solution detail pages, some Product (legacy layout) pages, Form page, About, Compare, Enterprise, Homepage, Pricing, Solutions hub. · appears on 16 routes

**`proof.featured-stories-fan`** — Static arc of five square story cards lifted on a -80/-35/0/-35/-80px curve.

· Only on /customers/. · appears on 1 routes

**`proof.full-width-quote`** — Full-bleed quote band: logo + name/title attribution, vertical divider and a 24px quote with bold emphasis.

· On 4 routes: some Product feature pages. · appears on 4 routes

**`proof.logo-wall`** — Wrapped wall of logos with a heading: customer wall (grayscale) or investor grid with a text lockup.

· On 2 routes: About, Customers index. · appears on 2 routes

**`proof.quote-tiles`** — Grid of primary-button-styled quote tiles: grayscale logo, quote divider and a short quote.

· Only on /resources/guides/ai-analytics/. · appears on 1 routes

**`proof.quotes-marquee`** — Continuously scrolling row(s) of glass quote cards (logo, quote, optional headshot and author).

· On 4 routes: some Product feature pages, Customers index, Long-form guide. · appears on 4 routes

**`proof.social-tout`** — Social proof row: G2 awards card and/or glass quote card(s).

· On 7 routes: some Product feature pages, some Solution detail pages, Product (legacy layout). · appears on 7 routes

**`proof.stories-two-up`** — Sunken band of one or two centred customer quotes (logo, quote with bold emphasis, name + title).

· On 5 routes: some Integration detail pages, some Product feature pages, Homepage. · appears on 5 routes

**`proof.story-tout`** — Homepage 'Loved by the best data teams' tout: graph-paper title block, four story cards and the social row.

· Only on /. · appears on 1 routes

### FEATURE

_Product and capability explanation: splits, card grids, demos, comparison tables._

**`feature.approach-cards`** — Solid H2 over a 3-up grid of light glass cards (icon, H4, text, primary md CTA).

· Only on /product/bi/. · appears on 1 routes

**`feature.bento-cells`** — Two-column bento of linked dark cells: title + text over a framed screenshot; hover lift with Perlin.

· On 2 routes: some Product feature pages. · appears on 2 routes

**`feature.built-different`** — Centred statement: gradient two-line H2 + lead over an orbit illustration whose bubbles pop in.

· Only on /. · appears on 1 routes

**`feature.cell-collage`** — Floating InfoText (icon, H2, text, CTA) surrounded by absolutely positioned product cell screenshots.

· Only on /product/notebooks/. · appears on 1 routes

**`feature.codegen-gallery`** — Gradient H2 + lead + links, a large app-builder screenshot, then a 3-column gallery of copy-a-prompt cards.

· Only on /product/data-apps/. · appears on 1 routes

**`feature.command-list`** — Mark + gradient H2 with italic lead word beside a 2-column list of command features with inline code pills, over rose Perlin.

· Only on /product/cli/. · appears on 1 routes

**`feature.demo-accordion`** — Demo section: eyebrow, gradient H2, lead, 'Watch demo' pill, radio option list driving a media panel.

· Only on /capability/ai/. · appears on 1 routes

**`feature.ethos-cards`** — Two glass cards with eyebrow pill, gradient H2, body + bullets and a CTA over a framed illustration.

· Only on /. · appears on 1 routes

**`feature.execution-dag`** — InfoText over a bleeding DAG illustration with a logo chip group, then three integration cards.

· Only on /product/notebooks/. · appears on 1 routes

**`feature.highlights`** — Three-column tout: centred italic+display H2, lead and CTA flanked by two icon highlights with inline links.

· Only on /careers/. · appears on 1 routes

**`feature.how-it-works`** — Integration 'How it works': H2 + rich text + CTA row beside a connection illustration, image or nothing (centred).

· On 16 routes: Integration detail. · appears on 16 routes

**`feature.icon-row`** — Three centred icon + H3 + text columns.

· Only on /product/embedded-analytics/. · appears on 1 routes

**`feature.illustrated-checklist`** — Illustration beside gradient title, lead, vertical tick checklist and CTA.

· Only on /enterprise/. · appears on 1 routes

**`feature.info-card-grid`** — Grid of 2-3 glass cards: copy (optional eyebrow, H3, text, optional CTA) on top, screenshot bottom-aligned.

· On 3 routes: some Product feature pages. · appears on 3 routes

**`feature.integration-custom-blocks`** — Integration-specific extra blocks: two-up connection columns or centred header + outline card grids.

· On 3 routes: some Integration detail pages. · appears on 3 routes

**`feature.integrations-grid`** — 'Instant integration' tout: italic+display H2, lead and a 3x2 grid of illustrated integration cards.

· On 2 routes: Enterprise, Homepage. · appears on 2 routes

**`feature.live-app-embed`** — Centred H2 + text with inline link over tabbed external app embeds in a 16:9 white frame with an 'Explore this app' overlay link.

· On 4 routes: some Solution detail pages. · appears on 4 routes

**`feature.magic`** — Animated AI glyph + H2 + lead beside a product image, over a slowly rotating line-art background.

· Only on /product/notebooks/. · appears on 1 routes

**`feature.numbered-grid`** — Gradient H1-scale title, 2-column numbered feature grid with a CTA, beside a staggered column of compliance badge boxes.

· Only on /enterprise/. · appears on 1 routes

**`feature.observability-callouts`** — Section header + a large product dashboard window with two text callouts floating left and right.

· Only on /product/context-studio/. · appears on 1 routes

**`feature.partner-tiers`** — Centred H2 + lead over three tier columns: tinted flag panel, H3, text, H4 and bullet list.

· Only on /partners/. · appears on 1 routes

**`feature.partners-why`** — Illustration beside an H2, text and two md CTAs (integration / consulting partners).

· Only on /partners/. · appears on 1 routes

**`feature.perlin-callout`** — Wide dark callout card on a hatched band: eyebrow, H2, optional text and secondary CTA, decorative art right.

· On 2 routes: some Product feature pages. · appears on 2 routes

**`feature.photo-collage`** — Italic+display H2 and lead positioned over a right-aligned collage of team photo cards.

· Only on /about/. · appears on 1 routes

**`feature.plan-comparison`** — Feature comparison table with sticky plan header, grouped sections, tick/text cells, tooltips and a compute-profiles modal.

· Only on /pricing/. · appears on 1 routes

**`feature.plan-summary`** — Two framed plan groups (individual / team) of plan cards: line icon, H3, description, price, CTA and tick list; team cards over rose Perlin.

· Only on /pricing/. · appears on 1 routes

**`feature.platform-overview`** — Centred H2, three linked workflow cards with isometric art and hover Perlin, a bracket label and a capability icon row.

· Only on /product/context-studio/. · appears on 1 routes

**`feature.podcast-episodes`** — InfoText (mark, H3, description) | divider | two interactive episode cards with a floating 'Watch podcast' button.

· Only on /resources/guides/ai-analytics/. · appears on 1 routes

**`feature.section-heading`** — Centred section heading: gradient H2 with optional checker-flanked italic line and description (display), solution-sized H2, or V1 panel H2 + subheader.

· On 9 routes: some Product feature pages, Solution detail, some Product (legacy layout) pages. · appears on 9 routes

**`feature.snaked-rows`** — Five alternating feature rows joined by connecting lines, each a title, text, link and overlapping product cells.

· Only on /product/data-apps/. · appears on 1 routes

**`feature.solution-row`** — Solution feature row: 671px media box beside a 375px info column (solid 40px H2, optional bold subline, body, full-width secondary CTA).

· On 5 routes: Solution detail. · appears on 5 routes

**`feature.split`** — Feature row: InfoText (icon, H3, optional description, CTA) + dashed inline quote beside an illustration or product mock; row or row-reverse.

· On 3 routes: some Product feature pages, Homepage. · appears on 3 routes

**`feature.story-details`** — Three static glass detail cards (About / Outcome / Scale achieved) over a cartesian grid.

· On 8 routes: Customer story. · appears on 8 routes

**`feature.support-grid`** — Centred gradient title + lead over a 2x2 icon-text grid beside a stair illustration.

· Only on /enterprise/. · appears on 1 routes

**`feature.use-cases`** — Use-case list: mark + H2 with italic subheading on the left, three linked use-case rows on the right.

· Only on /. · appears on 1 routes

**`feature.v1-two-up`** — V1 two-up row: InfoText with optional mono eyebrow, 40px H2, 1-2 paragraphs and optional CTA beside a 680px media column; alternating.

· On 2 routes: some Product (legacy layout) pages. · appears on 2 routes

**`feature.video-embed`** — 'See it in action' H2 over a fixed-height frame with dashed corner guides holding an external video embed.

· On 4 routes: some Integration detail pages. · appears on 4 routes

**`feature.workflow-split`** — Gradient H2 masthead over two divided halves (eyebrow, bold-lead description, three-item icon list).

· Only on /capability/ai/. · appears on 1 routes

**`feature.workflow-table`** — Three-column task / prompt / result table with chat-bubble prompts and a highlighted result column.

· Only on /product/cli/. · appears on 1 routes

### COLLECTION

_Repeating card lists of other content: posts, stories, guides, events, templates, roles, links._

**`collection.blog-featured`** — Featured posts: one wide primary card (Perlin hover) + two secondary cards with image, date row, H2, subtitle and meta.

· Only on /blog/. · appears on 1 routes

**`collection.blog-feed`** — Sticky category filter with count beside a list of post rows and a 'View more' button.

· Only on /blog/. · appears on 1 routes

**`collection.blog-recent`** — Full-bleed 3-up strip of recent posts divided by 1px rules.

· Only on /blog/. · appears on 1 routes

**`collection.customer-stories`** — Grid of glass customer-story cards (logo plate, H4, mono meta rows); index variant shows the full filterable grid, related variant a short list with H2.

· On 9 routes: Customer story, Customers index. · appears on 9 routes

**`collection.events`** — Sticky filter sidebar beside grouped event-card grids under dark section headers (upcoming / on-demand).

· Only on /resources/events/. · appears on 1 routes

**`collection.external-links`** — 'Learn more' cut-out box of external resource links (title + source).

· On 5 routes: some Integration detail pages. · appears on 5 routes

**`collection.guides`** — Three-column grid of dark guide cards (image, H4, 'Download now').

· Only on /resources/guides/. · appears on 1 routes

**`collection.integration-category`** — Integration category: H3 + description over a 4-column grid of logo tiles (one special rotating local-files tile).

· Only on /product/integrations/. · appears on 1 routes

**`collection.newsroom-cards`** — Grid of glass press cards (thumbnail, H4, outlet + date) linking out; teaser variant adds an H2 and a 'view more' button.

· On 2 routes: About, Newsroom. · appears on 2 routes

**`collection.newsroom-featured`** — One featured press card: large image beside H2 and outlet/date meta, linking to the external article.

· Only on /newsroom/. · appears on 1 routes

**`collection.open-roles`** — Open roles: sticky department/location filter sidebar beside department blocks of role rows, closed by a safety callout.

· Only on /careers/. · appears on 1 routes

**`collection.partners-grid`** — Partners: centred H2 + lead over wrapped logo cards with tier badges.

· Only on /partners/. · appears on 1 routes

**`collection.resource-cards`** — Resource card grid: glass cards with tag-tinted illustration, 16:9 frame, type chip, H4 and solution/read-time meta; solution variant uses plain article cards with 'Read more'.

· On 8 routes: some Product feature pages, Solution detail, Gated guide landing, Solutions hub. · appears on 8 routes

**`collection.template-cards`** — Optional heading over a 3-column grid of outline template cards (preview, tag, H4, author, description).

· On 2 routes: some Product feature pages, some Product (legacy layout) pages. · appears on 2 routes

**`collection.templates-catalog`** — Category sidebar (position: relative, not sticky) beside per-category sections: dark header with 'View all' button and a 2-column template-card grid.

· Only on /templates/. · appears on 1 routes

### CONTENT

_Long-form body content: article, story, guide chapters, report sections._

**`content.article-body`** — Light content slab inside a dark page: sticky 'In this article' TOC aside with CTA, rich text column, in-body callout, share row and kicker.

· Only on /blog/introducing-generative-data-apps/. · appears on 1 routes

**`content.guide-chapter`** — Long-form guide chapter card: chapter H2 then sub-sections with sticky H3s and a prose column (paragraphs, lists, quote cards, objection accordion).

· Only on /product/switching-to-hex/. · appears on 1 routes

**`content.report-intro`** — Report intro: H2 + paragraphs beside a glass 'Key findings' card.

· Only on /state-of-data-teams/. · appears on 1 routes

**`content.report-outro`** — Report outro: running text beside a glass 'Questions? Talk to us.' card with a primary CTA.

· Only on /state-of-data-teams/. · appears on 1 routes

**`content.report-section`** — Numbered report section: number card + H2, lead, alternating two-ups (text vs. chart with survey-question chip) and a full-width pull quote.

· Only on /state-of-data-teams/. · appears on 1 routes

**`content.report-toc`** — Report table of contents: H2 + five numbered glass cards linking to section anchors.

· Only on /state-of-data-teams/. · appears on 1 routes

**`content.story-body`** — Customer story body: rich text column between hatched gutters; section headings and pull quotes are real, other prose is placeholder.

· On 8 routes: Customer story. · appears on 8 routes

### CONVERSION

_Calls to action and (visual-only) forms that close a page._

**`conversion.bottom-cta`** — Homepage dashed two-column CTA: gradient H3 + text + two buttons | plans text + secondary button.

· Only on /. · appears on 1 routes

**`conversion.collage-cta`** — Centred two-line gradient H2, text and md CTA above a collage of overlapping product cells.

· Only on /product/data-apps/. · appears on 1 routes

**`conversion.cta-split`** — Gradient title + two-column tick checklist beside the bordered outline CTA card.

· Only on /enterprise/. · appears on 1 routes

**`conversion.form-shell`** — Visual-only lead form: tinted bordered box of labelled fields (2-column rows), local validation states, gradient submit and disclaimer. Never submits.

· On 3 routes: Form page, Partners. · appears on 3 routes

**`conversion.install-cta`** — Terminal-style closing CTA: ASCII art, heading with italic line, lead, tabbed copy-to-clipboard install command and doc links.

· Only on /product/cli/. · appears on 1 routes

**`conversion.outro-tout`** — Closing CTA: tron divider then a centred outline card with corner accent (H2, text, 1-2 lg buttons); band variant on a tinted band.

· On 14 routes: some Product feature pages, Solution detail, Product (legacy layout), Gated guide landing. · appears on 14 routes

**`conversion.wallpaper-cta`** — Centred CTA over a faded glyph wallpaper: small icon, gradient H2, text and a button.

· Only on /product/notebooks/. · appears on 1 routes

### FAQ

_Question-and-answer accordion._

**`faq.accordion`** — FAQ accordion: optional heading, independent toggle rows (question + answer), optional 'Can't find your answer' footer link.

· On 9 routes: some Integration detail pages, some Product feature pages, Enterprise, Homepage, Pricing, Report. · appears on 9 routes

### DIVIDER

_Decorative separator between sections._

**`divider.tron`** — Nine 1px gradient rules with increasing gaps and decreasing opacity separating major blocks; optionally flipped.

· On 20 routes: Integration detail, Enterprise, Homepage, Partners, Pricing. · appears on 20 routes

### NAVIGATION

_In-page navigation controls that filter or jump within a page's content._

**`navigation.filter-chips`** — Single-select filter chip row (icon + label + optional count) with optional sort control; filters client-side.

· On 2 routes: Customers index, Solutions hub. · appears on 2 routes
