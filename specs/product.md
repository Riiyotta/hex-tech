Source: https://hex.tech/product/

# Hex product, capability and integration pages: clone spec (measured 2026-10-23)

Covers `/product/bi/`, `/product/cli/`, `/product/context-studio/`, `/product/data-apps/`, `/product/embedded-analytics/`, `/product/notebooks/`, `/product/threads/`, `/product/switching-to-hex/`, `/capability/ai/`, `/capability/exploratory-analysis/`, `/product/integrations/` and the 17 integration detail URLs (`airflow, athena, bigquery, clickhouse, dagster, databricks, dbt, dremio, github, mariadb, ms-sql-server, mysql, postgres, prefect, redshift, snowflake, trino`).

Method: a separate headless Chromium (Playwright 1.63) per page at 1440×900 and 390×844. Each page was scrolled top to bottom so reveals fired, then measured with `getComputedStyle` / `getBoundingClientRect`, `document.getAnimations()`, a full `document.styleSheets` serialization, an `IntersectionObserver` / `Element.animate` hook, network logging, and scripted clicks (video modals, tabs, accordion, clipboard). Coordinates are `[x, y, w, h]`, page-absolute, at 1440 unless stated. **The homepage spec (`CLONE_SPEC.md`) is the base: everything not restated here (tokens, fonts, header, footer, buttons, quotes, windows) is identical to it**, except for the dark theme (§1.1).

## 0. Reference files

| Path | Contents |
|---|---|
| `reference/pages/product/<page>-1440-full.png` | Full-page screenshot at 1440 for every page (including all 17 integration URLs). `<page>-390-full.png` for the 11 non-integration pages. |
| `reference/pages/product/dom/<page>/NN-<Name>.html` + `.css` | Rendered `outerHTML` of every top-level section (NEW and REUSE), with **every CSS rule whose selector matches a class used in that section** (incl. `@media`/`@supports` wrappers) plus referenced `@keyframes`. HTML and CSS come from the same page load, so hashed class names match. |
| `reference/pages/product/dom/_theme-tokens.css` | Light and dark `[data-theme]` token blocks. |
| `reference/pages/product/dom/_dark-header-footer.css` | All rules for the header/ticker/nav/footer on a dark page. |
| `reference/pages/product/dom/_keyframes.css` | Every `@keyframes` loaded on these pages. |
| `reference/pages/product/measurements/<page>-1440.txt` / `-390.txt` | Full computed-style tree of `main` (`<TAG Component> [x, y, w, h] «text» {non-default computed props}`). |
| `reference/pages/product/measurements/<page>-390-summary.txt` | 390 section boxes and text roles (font/size/line-height) per page. |
| `reference/pages/product/measurements/dark-header-footer-1440.txt` | Dark header and footer computed tree. |
| `specs/product-faq.json` | All FAQ questions and answer HTML (bi, context-studio, capability-ai, switching-to-hex objections, databricks, snowflake). |
| `specs/product-integrations.json` | Integrations index categories/tiles and per-detail-page data for T5. |
| `specs/product-data-apps-prompts.json` | The six copy-to-clipboard prompts on `/product/data-apps/`. |
| `specs/product-assets.md` | Asset manifest (163 downloaded files under `public/assets/pages/product/`, 28 reused from `public/assets/`). |

## Summary: reuse vs NEW

- **Templates:** T1 bespoke V2 product page (6 pages), T2 V1 marketing page (3), T3 long-form guide (1), T4 integrations index (1), T5 integration detail (17 URLs, one template). See §3.
- **REUSE (19 existing components, prop/content changes only):** `Header`, `Footer`, `Reveal`, `Button`, `InfoText` (+description, +secondary CTA, +H2 size), `InlineQuote`/`DashedLineQuote`, `FeatureSection`, `ProductWindow`, `PerlinNoise`, `CustomerBanner` (data-driven + minimal variant), `LovedByTeams` social row (extract `G2Card` + `CustomerQuoteCard`), `CustomerStoriesTwoUp` (props; also used for integration `QuotesMultiple`), `Faq` (props), `TronDivider` (extract from `Faq.jsx`), `TrustedAnswers` section and windows (`AgentChatWindow`, `McpWindow`, `SlackWindow`, `CliWindow`), `ContextStudio/DashboardWindow`, `Integrations` card (`IntegrationCard`), `ContentSection`/`LayoutGrid`, the hero `CartesianGrid` backdrop.
- **NEW shared (14):** dark theme token layer, `V1PageLayout`, N1 `AnnouncementPill`, N2 `SectionHeading`, N3 `CodePill`, N4 `FullWidthQuote`, N5 `OutroTout`, N6 `CustomerQuotesMarquee`, N7 `ImageInfoCard` grid, N8 `VideoHero` family (`Cta` buttons, `Thumbnail`, `VideoModal`), N9 `InstallScript`, N10 V1 blocks (`V1Hero`, `V1H2Panel`, `V1TwoUp`, `TemplateCard` grid), N11 `PerlinCallout`, N12 `BentoCell`.
- **NEW page-specific (41):** BI: `BIHero`, `AppGrid`, `WorkbenchWindow`, `ApproachCards`, `ResourceCards`, `CompareVs`. CLI: `HeroCLI`, `FeatureList`, `WorkflowTable`, `CliFooterCta`. Context Studio: `ContextStudioHero`, `PlatformOverview` (workflow cards + capability popovers), `SectionHeader`, `ObservatoryCallouts`. Threads: `ThreadsHero` (HeadlineTag + PegBoard), `ThreadsH2`. Capability AI: `PromptHero` (glass, typing prompt, canvas), `WorkflowSplit`, `DemoAccordion`, `SecurityTout`. Notebooks: `NotebooksHero` (Voronoi), `MagicFeature`, `CellCollage`, `ExecutionDag`, `WallpaperCta`, `UseCasesTout`. Data apps: `AppBuilderHeroTout`, `CodeGenGallery` (+ `GalleryCard` with clipboard), `SnakedSections` (+ `ConnectingLines`), `CollageCta`. Embedded: `IconFeatureRow`. Exploratory: `ScrollingCells`, `ActionableAppsIllustration`. Switching: `GuideLayout` (document cards, TOC, `CopyLinkButton`, sticky sections). Integrations index: `HeadingWithCallout` (+ `Callout`), `IntegrationCategory` + `IntegrationTile` (+ `Rotator`). Integration detail: `IntegrationHero` (label + cut-out logo box), `HowItWorks` (`RunningText`), `DataConnectionIlly`, `IntegrationCustomBlocks` (AWS, Snowflake, Databricks), `VideoEmbed`, `ExternalLinks`.

## 1. Global: page frame, dark theme, header and footer

### 1.1 Page frame: same as the homepage, but every page except BI is dark
- Every page in this group uses the same frame as the homepage (CLONE_SPEC §1.1): the 14-column `LayoutGrid` (`1fr repeat(12, calc(min(96%,1840px)/12)) 1fr`), checkered side margins, the condensed inner grid, the fixed header and the footer. **REUSE `ContentSection` / `LayoutGrid`**.
- **Theme:** the `PageWrapper__PageLayoutGrid` element carries `data-theme`. **Only `/product/bi/` is `light`** (identical tokens to the homepage). **Every other page (all 9 other product/capability pages, `/product/integrations/` and every integration detail page) is `data-theme="dark"`**, so the header, ticker, nav, mega-menus, footer, buttons, FAQ, cards and dividers all render dark.
- The dark theme is **token-only**. The site swaps CSS custom properties on `[data-theme="dark"]` and components read the variables; no component has dark-specific markup. Exception: `AbstractMark` icons get `[data-color=primary] #FFFFFF`, `[data-color=secondary] #F5C0C0`, `[data-color=highlight] #5CB198`.
- Full serialized token blocks (light and dark, including `appUI-*` and `magicColors-*`) are in `reference/pages/product/dom/_theme-tokens.css`. **Build action:** the clone's `tailwind.config.cjs` hardcodes the light hex values. To support these pages, define the tokens below as CSS variables on `:root` (light) and `[data-theme="dark"]`, and point the Tailwind colors at `var(--…)`. This is a **NEW global piece (`ThemeProvider` / `data-theme` on the page wrapper)**; it is not a component rebuild.

Measured light → dark token values (computed on the page wrapper; `/product/bi/` vs `/product/cli/`):

| Token | Light | Dark |
|---|---|---|
| `--fg100` (page bg, nav bg, button inner) | `#FFFCFC` | `#14141C` |
| `--fg200` / `--fg300` / `--fg400` | `#F8F5F6` / `#F4F1F2` / `#F0EDEE` | `#191820` / `#201D25` / `#252128` |
| `--fg500` / `--fg600` (checker) / `--fg700` / `--fg800` / `--fg900` / `--fg1000` | `#ECE8EA` / `#E8E4E6` / `#E2DEE0` / `#D1CCD1` / `#A49DA7` / `#9C959F` | `#2B252C` / `#312A31` / `#3A3138` / `#4C3E44` / `#6A565B` / `#786065` |
| `--fg1100` = `--fontColorMUTED` | `#89828D` | `#99797D` |
| `--fg1200` (links, Log In, logo, label) | `#43394C` | `#E3B2B3` |
| `--fontColorDEFAULT` = `--highlightColor` (body) | `#31263B` | `#F5C0C0` |
| `--fontColorLOUD` = `--fgLoud` (headings) | `#14141C` | `#FFFFFF` |
| `--grid200` / `--grid300` (= borderColorMUTED) / `--grid400` | `#EFEBED` / `#E9E5E8` / `#E4E0E3` | `#252128` / `#2B252C` / `#312A31` |
| `--grid500` (= borderColorDEFAULT) / `--grid600` / `--grid700` (= borderColorSTRONG) | `#DBD7DA` / `#CBC6CB` / `#AFA9B1` | `#3A3138` / `#4C3E44` / `#6A565B` |
| `--grid1200` (nav accent bars) | `#403649` | `#E3B2B3` |
| `--bg300` / `--bg400` / `--bg500` | `#FCF8F8` / `#F9F1F1` / `#EBCCCC` | `#0F0F15` / `#111118` / `#14141C` |
| `--fgA100…A1200` | `rgba(49,38,59,a)`, a = 0, .03, .05, .07, .09, .11, .14, .22, .44, .48, .57, .91 | `rgba(245,192,192,a)`, a = 0, .026, .056, .077, .103, .129, .172, .249, .386, .446, .592, .923 |
| `--texture-paper-img` / size / opacity | `/images/light-bkg-noise.webp` (`textures/light-bkg-noise.webp`) / 256px / .06 | `/images/bkg-noise.webp` (`textures/bkg-noise.webp`) / 200px 200px / .0625 |
| `--appUI-backgroundColor-default` / `-muted` | `#FFFFFF` / `#F8FAFB` | `#1F1F29` / `#191922` |
| `--appUI-borderColor-default` / `-muted` | `#DADDE6` / `#ECEDF2` | `#3F4257` / `#2A2A38` |
| `--appUI-fontColor-default` / `-muted` | `#01011B` / `#717A94` | `#E4E6EC` / `#B1B6C4` |
| `--appUI-primaryColor` / `intent-primary` | `#254685` / `#473982` | `#F5C0C0` / `#F5C0C0` |
| `--appUI-intent-success` / `warning` / `danger` | `#0F6B5B` / `#A67908` / `#B63245` | `#2BA88A` / `#D4A032` / `#E54D62` |
| `--appUI-outlinedBorderColor-default` / `-muted` | `#F5C0C066` / `#F5C0C033` | `#F5C0C04D` / `#F5C0C026` |
| `--magicColors-backgroundGradient` | `linear-gradient(90deg,#6646a80c 0%,#9757ab06 100%)` | `linear-gradient(90deg,#6646a81a 0%,#9757ab12 100%)` |
| `--magicColors-removingColor` | `#c84654` | `#e85a69` |
| `--texture-hatch-img` | `repeating-linear-gradient(45deg, transparent 0, transparent calc(6px - 1px), <grid300> …)` (see tokens file) | same pattern with dark grid colors |
| html/body background | `#14141C` | `#14141C` |

Dark-mode component values, measured on `/product/cli/` (everything else follows from the tokens):
- **Gradient headings** (`GradientHeader`, used for every H1/H2 that is gradient on light pages): `background-image: linear-gradient(55deg, #FFFFFF 20%, rgba(245,192,192,.8) 100%)` with `background-clip:text; -webkit-text-fill-color:transparent; background-color: var(--fontColorLOUD)`. Light pages keep `linear-gradient(90deg, #31263B 0%, #01011B 100%)`. The same dark gradient is applied to the install-script text (`InstallScript__CopyableText`) and `.gyzmjf p`.
- **Primary button, dark:** `background-image: linear-gradient(to right, #14141C, #14141C), linear-gradient(45deg, #F5C0C0, #AD8EB6)` (gradient border); label `#F5C0C0`; `::after` fill `linear-gradient(45deg, rgba(245,192,192,.85), rgba(71,57,130,.5))` at `opacity:.2` (hover .3, active .6); corner circles `1px solid rgba(245,192,192,.3)`, 13px. Hover bg `#2B252C`, border `#6A565B`; active bg `#3A3138`. Heights unchanged (48 lg / 40 md / 36 nav).
- **Secondary button, dark:** transparent, `1px solid #3A3138`, label `#F5C0C0`, hover bg `#2B252C` / border `#6A565B`.
- **Checkered margins, dark:** checker squares `%23312a31` (`#312A31`) and inner border `1px solid #3A3138`.
- **TronDivider, dark:** each 1px line is `linear-gradient(90deg, #6A565B 0%, #3A3138 50%, #6A565B 100%), #14141C` (light: `#AFA9B1 / #DBD7DA`).
- **Dark glass card** (`Card__Wrapper` dark, used by every card on dark pages): `border-radius:12px; padding:10px; background-image: radial-gradient(circle at 66.66% 50%, rgba(26,26,37,.5) 0%, rgba(15,15,21,.5) 80%); box-shadow: #111118 0 0 24px 0 inset, #2F2F41 0 .5px 0 .75px, rgba(0,0,0,.01) 6px 37px 10px 0, rgba(0,0,0,.04) 4px 24px 10px 0, rgba(0,0,0,.14) 2px 13px 8px 0, rgba(0,0,0,.24) 1px 6px 6px 0, rgba(0,0,0,.27) 0 1px 3px 0`. (Light equivalent = homepage `Card__Wrapper`, CLONE_SPEC §2.1 "Card wrapper".)
- **Dark product window** (e.g. the CLI terminal shell): `background-color:#1F1F29; background-image: radial-gradient(circle at 66.66% 50%, rgba(26,26,37,.5) 0%, rgba(15,15,21,.5) 80%); border-radius:6px; box-shadow: rgba(245,192,192,.3) 0 0 0 1px, rgba(0,0,0,.25) 0 103px 103px 0, rgba(0,0,0,.3) 0 26px 57px 0`. Traffic lights become 10×10 circles `linear-gradient(rgba(245,192,192,.25), rgba(245,192,192,.05))` with `1px solid rgba(245,192,192,.25)`. Window title is Cinetype Mono 11px, `#FFFFFF` at opacity .5.

### 1.2 Header (ticker, nav, mega-menus): REUSE `Header`, with theme only
Same structure, sizes, copy, links and motion as CLONE_SPEC §4.0 / §6.1 on every page. The dark values are in `reference/pages/product/measurements/dark-header-footer-1440.txt` and `reference/pages/product/dom/_dark-header-footer.css`:
- Top grid row and ticker wrapper bg `#14141C`. Ticker strip `linear-gradient(to left, #252128, #201D25, #252128)` on `#252128`, `box-shadow: rgba(245,192,192,.173) 0 1px 1px 0 inset`.
- Nav text `#FFFFFF` (loud); Log In `#E3B2B3`; hex logo `#E3B2B3` (renders rose-pink, see screenshots); nav hover bg `rgba(245,192,192,.103)`; nav background mask unchanged (`rgba(0 0 0/.48)` → opaque).
- "Get started" button: dark primary (above), 107×38.
- Ticker copy is the same 4 items as the homepage (it is a global component).

### 1.3 Footer: REUSE `Footer`, with theme only
Same grid, copy, links, emoji rotator and hit counter (CLONE_SPEC §4.15). Dark: link color `#E3B2B3`, column titles `#FFFFFF`, legal text `#99797D`, dividers `#3A3138`; hit-counter box `1px solid #3A3138`, lit segments `#F5C0C0`. The live counter value differs per load (6,530,352 / 4,084,687 / …); render a static value.

### 1.4 Page-row primitive `BasicPageRow`: REUSE `ContentSection` with three inner variants
Most sections on the V2 pages (BI, CLI, Context Studio, Notebooks, Threads, Capability AI, Switching) are wrapped in `BasicPageRow__Wrapper`, a full-bleed subgrid row with checkered margins (equivalent to `ContentSection`). Variants, from the stylesheet:
- Row `dCuzZe`: `overflow-x:clip` (no top border).
- Row `dcnVgA` / `fFmnxT`: `overflow-x:clip; border-top:1px solid var(--grid500)` (dark `#3A3138`, light `#DBD7DA`).
- Inner **Padded** (`xEjAC`): `display:flex; flex-direction:column; align-items:center; justify-content:center; max-width:1240px; width:100%; padding:80px 40px; justify-self:center`. `@media (max-width:800px) { padding:60px 0; grid-column:2/-2 }`. `@media (max-width:600px) { padding:40px 0 }`.
- Inner **Full** (`gNGsjY` / `fbJCiD`): same flex, but `max-width:none; padding:0; grid-column:1/-1`.
- Every padded inner is a `Reveal` (`data-reveal`, initial `opacity:0; transform:translateY(5px)`), so REUSE `Reveal` (SimpleFadeIn: spring, delay .2s, duration .45s, bounce 0; measured WAAPI duration 450ms, delay 200ms).

### 1.5 V1 page layout (`V1PageWrapper`): NEW wrapper, used by data-apps, embedded-analytics, exploratory-analysis, integrations index and all integration details
- `main` contains a pile of three full-height subgrids: (1) **vertical grid rules** `GridLines__GridRule` 1px wide, full height, at grid columns 4, 7 and 10 (x = 374, 720, 1065 @1440), color `var(--grid300)` = `#2B252C` dark. Columns 4 and 10 carry `V1PageWrapper__ResponsiveGridRule` (hidden ≤800px). (2) **Margin rules** `GridLines__ContentMarginLine` in both margins: `background-image: linear-gradient(transparent calc(100% - 1px), #2B252C calc(100% - 1px)); background-size: 100% 160px` (a 1px horizontal tick every 160px), plus a 1px vertical line on the inner edge. (3) the content subgrid `V1PageWrapper__V1Subgrid` with `padding-top:200px` (clears the fixed header).
- Unlike `BasicPageRow` pages there are **no checkered margins**; the margins are plain with 160px ticks. Visible in `reference/pages/product/data-apps-1440-full.png` as the faint vertical lines.
- Build as a NEW layout wrapper `V1PageLayout` that reuses `LayoutGrid`.

### 1.6 Section reveals on these pages
Same SimpleFadeIn as the homepage (REUSE `Reveal`). Measured on every page: elements start with inline `opacity: 0; transform: translateY(5px)`; on entering the viewport WAAPI runs `duration 450ms, delay 200ms, easing linear(0 0%, 0.0192 2.27%, 0.0669 4.5…)` (Framer spring). V1 pages use `FadeIn__*` wrappers with the same values. Applied per `BasicPageRow__Inner`, `FAQ__Wrapper`, `OutroTout__Wrapper`, `Footer__Wrapper`, `FadeIn__UseCaseFadeIn`, `H2__FadeIn`, `TwoUp__Panel`.
## 2. Shared component library for this page group

Each entry is either **REUSE** (an existing clone component, possibly needing new props) or **NEW** (a component used on two or more pages in this group, specced once here). Page sections in §4 and §5 refer to these IDs. Values are computed at 1440 unless stated. The full rule set for each block is in the per-section `.css` file under `reference/pages/product/dom/<page>/`.

### 2.1 REUSE components, with the prop or content changes they need

| ID | Existing component | Used on | Changes needed (props / content), no rebuild |
|---|---|---|---|
| R-Header | `Header` (+ `header/*`) | all | theme only (§1.2) |
| R-Footer | `Footer` | all | theme only (§1.3) |
| R-Reveal | `shared/Reveal` | all | none |
| R-Button | `shared/Button` | all | dark variant through tokens (§1.1). Secondary at `md` (40px) is used heavily (InfoText CTAs). Also `lg` buttons with `flex:1 0 0; min-width:140px` in hero action rows (BI). |
| R-InfoText | `shared/InfoText` | bi, notebooks, data-apps, threads, embedded, exploratory | **add `description` prop** (`InfoText__Description` → P 16/24 300, sits between H3 and CTA, `gap:20px` kept) and **`cta.variant`** ('primary' \| 'secondary'; most product pages use **secondary md**). On V1 TwoUp pages the heading is an **H2 at heading-2 size** (40/52, PP Formula 800, -1px) and the description is 20/30. Expose `headingAs` (already exists) and a `size` prop. |
| R-Quote | `shared/InlineQuote` / `DashedLineQuote` | bi, threads, notebooks | same markup. Logo `max-width:120px` on BI (`DashedLineQuote__Logo`). |
| R-Feature | `sections/ConversationalAnalytics/FeatureSection` (`sharedStyles__SectionWrapper` + `InfoWrapper` + `ProductIllustration`) | bi (2×), notebooks (3×), threads (3×), data-apps (5×) | same component. Pass `direction` 'row' \| 'row-reverse'. Info column 330px, gap 70 (BI); on Notebooks/Data apps/Threads the illustration is images (§4). |
| R-ProductWindow | `shared/ProductWindow` | bi, context-studio, cli | `title` labels: "Conversational self-serve", "Agent observability", "Semantic Model Workbench", "Chat with the Hex Agent". Dark variant through tokens. |
| R-Perlin | `shared/PerlinNoise` | cli, context-studio, capability-ai, notebooks, threads | textures `rose`/`jade`/`citrine`/`amethyst` at 256/512/1024px, opacity .24–.8 (per section) |
| R-Banner | `sections/CustomerBanner` | bi, capability-ai (framed); data-apps, embedded, notebooks (minimal) | **make data-driven**: `label`, `logos[]` (`{slug|src, w, h, href?, story?}`) and `variant`. See 2.3. |
| R-SocialTout | `sections/LovedByTeams` social row (G2 card + quote card) | notebooks, data-apps, embedded, exploratory | **extract** `G2Card` and `CustomerQuoteCard` from `LovedByTeams.jsx` into shared components with props. Layouts in 2.4. |
| R-TwoUpStories | `sections/CustomerStoriesTwoUp` | context-studio | **add props** (`stories[]`). Content in §4.3. Dark: bg `#0F0F15` (`--bg300`), center rule `#2B252C`, logo filter `brightness(0) invert(1)`. |
| R-Faq | `sections/Faq` (FAQ only) | bi, context-studio, capability-ai, switching-to-hex (objections), databricks, snowflake | **add props** `heading` ("FAQ" \| "FAQs" \| none), `items[]` (from `specs/product-faq.json`), `showFooter` (the "Can't find your answer here? Get in touch." line). Answers contain HTML (links, `<ul>`, `<ol>`). |
| R-Tron | the `TronDivider` inside `sections/Faq.jsx` | every OutroTout, integration pages | **extract** to `shared/TronDivider` (same 9 lines, mb 3…10, opacity 1→.2). Wrapper `margin-bottom:30px`. Dark colors in §1.1. |
| R-Window | `TrustedAnswers/*` windows (`AgentChatWindow`, `McpWindow`, `SlackWindow`, `CliWindow`) and `ContextStudio/*` (`DashboardWindow`, `EvalsWindow`) | bi, context-studio, cli | same mockups (the DOM is the same `InteractiveFeature*` components). Size and content deltas per page in §4. |

### 2.2 NEW shared components (used on 2+ pages)

#### N1 `AnnouncementPill`: hero eyebrow link (bi, cli, context-studio, data-apps, notebooks, capability-ai)
- `<a>` root: `display:flex; align-items:center; gap:12px; padding:2px; border:1px solid var(--grid500); border-radius:999px; background-color: color-mix(in srgb, var(--fg100) 50%, transparent); overflow:clip; width:fit-content; position:relative; transition: background-color .1s linear; color: var(--fg1200)`. Height 37. Measured: BI 316×37, CLI 303×37, Context Studio 360×37.
- Inner pill (`InnerPill`): `display:inline-flex; align-items:center; gap:8px; padding:8px 14px; border-radius:999px; background: var(--fg100); backdrop-filter: blur(3px); box-shadow: 0 -0.5px 0 .5px color-mix(in srgb, var(--highlightColor) 20%, transparent), 0 .5px 0 .5px color-mix(in srgb, var(--highlightColor) 40%, transparent), 0 1px 2px rgba(0,0,0,.32), 0 2px 5px rgba(0,0,0,.18)`. It holds a 15×15 product icon (same SVGs as the nav product icons `svg/icons/nav/*.svg`) and a label in **Cinetype 12px / 12px, weight 700**.
- Announcement text: `display:flex; gap:5px; align-items:center; padding-right:10px; font-size:12px; font-weight:300; line-height:1; color: rgb(67,57,76)` (light) / `#E3B2B3` (dark), followed by a 16×16 chevron-right.
- **Hover shine** (CSS): `::before { position:absolute; inset:0; border-radius:inherit; backdrop-filter: brightness(1.6) saturate(2); mask-image: linear-gradient(70deg, transparent, transparent calc(50% - 70px), red calc(50% - 3px), red calc(50% + 3px), transparent calc(50% + 30px)); transform: translateX(calc(-50% - 80px)) }`. On `:hover` runs `announcement-pill-shine 1s cubic-bezier(.25,.1,.25,1) both`, i.e. `@keyframes announcement-pill-shine { 0% { transform: translateX(calc(-50% - 40px)) } 100% { transform: translateX(calc(50% + 130px)) } }`.
- Instances: BI "Conversational analytics" | "Read the docs" → `https://learn.hex.tech/docs/explore-data/threads`; CLI "The Hex CLI" (icon `>_`) | "Read the announcement" → `/blog/introducing-the-hex-cli/`; Context Studio "Context management" | "Read the announcement" → `/blog/introducing-context-studio/`; Data apps "Data apps" | "Read the docs" → `https://learn.hex.tech/docs/share-insights/apps/app-builder`; Notebooks "Agentic notebooks" | "Read the docs" → `https://learn.hex.tech/docs/explore-data/notebook-view/notebook-agent`; Capability AI "AI analytics platform" | "Explore AI in Hex" → `https://learn.hex.tech/docs/getting-started/ai-overview`.
- Threads uses a simpler single pill `HeadlineTag` ("Threads: Conversational analytics for everyone"): see §4.7.

#### N2 `SectionHeading`: centered section title with an optional italic second line and checker rules (bi, cli)
- Wrapper `display:flex; flex-direction:column; align-items:center; gap:10px; max-width:690px` (CLI) / `800px` (BI `HeadingText`); `text-align:center`.
- H2 = heading-1 GradientHeader (PP Formula SemiExtended 700, `clamp(38px, 25.625px + 2.75vw, 60px)` → 60/78, ls -1.848px). Optional `<span data-style="italic">`: `display:flex; align-items:center; gap:20px; margin-top:-18px` (BI) or `-1.7rem` (CLI, measured -27.2px), PP Editorial New 200 italic 1.3em (78/101.4). The span has **checkered flanking rules**: `::before, ::after { content:""; flex:1 1 auto; height:12px; background-image: <4×4 checker svg> }` with checker fill `#E8E4E6` (light) / `#312A31` (dark). Visible as the grey bars either side of "differently", "your agent works", "real workflows".
- Description P: 20/30 Cinetype 300, `text-wrap:balance`, `width:80%` (100% ≤800). Gap to content below: 60px (CLI `SectionInner gap:60px`), 120px (BI `HeadingWrapper gap: clamp(80px, 3.59rem + 5vw, 120px)`).
- ≤600: H2 30px; italic span `line-height:1; padding-bottom:5px; margin-top:-4px`.

#### N3 `CodePill`: inline monospace token (cli, context-studio)
`display:inline; margin:0 .06em; padding:.15em .45em .12em; font: 500 .92em/1.35 "IBM Plex Mono"; border-radius:3px; border:1px solid var(--grid500); background: color-mix(in srgb, var(--highlightColor) 10%, transparent); color: var(--fontColorDEFAULT); white-space:nowrap`. Measured in 16px copy: 14.72px font, padding 2.208px 6.624px 1.7664px, h 25. Tokens: `hex project`, `hex app`, `hex cell`, `hex run`, `hex thread`, `hex guide`, `hex context`, `hex install skill --claude`.

#### N4 `FullWidthQuote`: full-bleed quote band (cli, context-studio, notebooks, threads)
- Full-bleed `LayoutGrid` row: `background-color:#0F0F15; border-top:1px solid var(--grid500)` (#3A3138). Height: CLI 254, Context Studio 265, Notebooks 229, Threads 234 @1440.
- Margin cells hold 8×8 **corner ticks** (`AccentL`: `top:-8px; right:-7px; border-bottom:1px solid #E3B2B3; border-left:1px solid #E3B2B3`, mirrored on the right). Inside the content column, 8×8 bottom ticks (`Accent`: `bottom:0; translateY(100%); border-top + border-left 1px #E3B2B3`, mirrored), `z-index:1`.
- `QuoteContainer`: `display:flex; align-items:center; gap:60px; width:90%; max-width:1270px; margin:0 auto; padding: clamp(30px, .82rem + 3.75vw, 60px) 0` (60px @1440).
- Left `Attribution` (`flex column; gap:20px; flex-shrink:0`, 330 wide): logo `max-width:160px; max-height:60px; object-fit:contain; object-position:left center` → author block (`gap:4px`): name `.text-l` 20/30 300 `#FFFFFF`; title `.annotation` Cinetype Mono 12px / 18.852 / ls .9996px (`#F5C0C0`).
- 1px vertical divider `var(--grid500)`, full height of the attribution (133px).
- `blockquote.text-xl`: `font-size: clamp(20px, 17.75px + .5vw, 24px)` (24/36 @1440) weight 300; `<strong>` = 700 `#FFFFFF`.
- ≤800: desktop wrapper hidden, mobile wrapper shown (`display:flex; flex-direction:column; align-items:center; gap:20px; padding:40px 0`), centered text, quote 20/30 with `padding:0 12px; max-width:600px`, logo max 100×40, name 14px 400, title 10px. Measured @390: band 382 tall, quote 20/30.
- Content: CLI StubHub (logo `cli`: `84cee833…-81x50.svg`, white), "Nova Wang", "Head of Analytics Engineering, StubHub"; Context Studio Zoe (`context-studio/zoe-logo.svg`), "Craig W.", "Staff Data Engineer, Zoe"; Notebooks Lovable (`notebooks/lovable-logo.svg`), "Kristian K.", "Product, Lovable"; Threads PandaDoc (`threads/pandadoc-logo.png`), "Hannah B.", "Data Product Manager, PandaDoc". Quote copy per page in §4.

#### N5 `OutroTout`: closing CTA card (bi, cli, context-studio, data-apps, embedded, threads, capability-ai, exploratory)
- Wrapper `display:flex; flex-direction:column; width:100%` (inside a `BasicPageRow`, or directly in the V1 grid with `.full-width`) → R-Tron divider (61 tall, `margin-bottom:30px`) → `Inner` (`display:flex; flex-direction:column; align-items:center; padding:40px 40px 100px`; ≤800 `20px 30px 80px`; ≤600 `0 30px 80px`).
- Card (`Card` outline variant): `display:flex; flex-direction:column; align-items:center; gap:30px; flex:1 1 0; max-width:565px; padding:68px 60px; text-align:center; border:1px solid color-mix(in srgb, var(--highlightColor) 15%, transparent)` (dark `rgba(245,192,192,.15)`, light `rgba(49,38,59,.15)`), `transition: border .25s cubic-bezier(.25,.1,.25,1), background-color .25s`. **Corner accent** top-right: `::before { top:-1px; right:-1px; width:20px; height:1px }` and `::after { width:1px; height:20px }`, both `background: color-mix(in srgb, var(--highlightColor) 40%, transparent)`. Hover (`hover:hover`): border 30%, background `color-mix(in srgb, var(--highlightColor) 10%, transparent)`. Measured 565×474 (CLI), 565×452 (BI). ≤800 padding `40px 28px`.
- Text block `flex column; gap:10px`: H2 heading-2 (PP Formula 800, `clamp(30px, 24.375px + 1.25vw, 40px)` → 40/52, ls -1px, `text-wrap:balance`, loud) + P 20/30 300 (`text-wrap:balance`).
- Actions: one primary `lg` button, or primary + secondary (BI), `gap:15px`.
- Copy per page:
  - BI: "Want self-serve BI that actually sticks?" / "Learn why 2,000+ teams approach BI differently with Hex. Get in touch for a custom demo of Hex BI or start a free trial to see it for yourself." / primary "Request a demo" `/request-a-demo/` + secondary "Get started for free" `https://app.hex.tech/signup`.
  - CLI: "Built for data teams who want more than a dashboard" / "Hex is the AI analytics platform where your notebooks, agents, and self-serve all live together — and actually talk to each other." / "Contact Sales" `/request-a-demo/`.
  - Context Studio: "Bring speed & trust together in Hex" / "Get in touch with us to see a demo or find out which plan is right for you." / "Contact Sales".
  - Data apps, Threads, Exploratory: "Questions? Talk to us" / Data apps & Exploratory: "Get in touch with us to see a demo or find out which plan is right for you."; Threads: "See a demo, or learn more about how we can help." / "Contact Sales".
  - Embedded: "Monetize your data with embedded analytics" / "Get in touch with us to see a demo or find out which plan is right for you." / "Contact Sales".
  - Capability AI: "Ready to put AI to work on your data?" / "Hex is the AI analytics platform where your notebooks, agents, and self-serve all live together — and actually talk to each other." / "Contact Sales".

#### N6 `CustomerQuotesMarquee`: infinite scroll of quote cards (threads, capability-ai, switching-to-hex)
- Wrapper `CustomerQuotesScrollingTout__Wrapper`: `display:flex; flex-grow:1; width:100%; padding:100px 0; position:relative` (≤800 `60px 40px`, ≤600 column `60px 30px`). Height 765–774 @1440.
- Marquee = **react-fast-marquee** (`.rfm-marquee-container`, `--pause-on-hover: running; --pause-on-click: paused`, so it does **not** pause on hover and pauses while pressed). The content row is rendered twice (`.rfm-marquee` ×2), each `animation: scroll 72s linear infinite` with `@keyframes scroll { 0% { transform: translateX(0%) } 100% { transform: translateX(-100%) } }`. One copy = 2160px (5 cards × 432) → **30 px/s**. Container `overflow-x: visible !important` (cards run into the margins; the page clips at the viewport).
- Each item: `MarqueeOption` `width:30vw; min-width:370px; padding-right:20px` (432 wide @1440, card 412) → **R-SocialTout `CustomerQuoteCard`** (dark glass card, `padding:38px 45px`, `height:100%`): logo (max-height 45px, `filter: brightness(0) invert(1)`) → quote row (`gap:20px`: 15px icon column with the quote glyph in `var(--highlightColor)` and a 1px line `color-mix(highlight 35%)`; blockquote Cinetype 300 24/36 `#FFFFFF`, ≤800 22px, ≤450 20px) → author row (`margin-top:auto; min-height:45px`; optional 35×35 circular headshot `margin-right:12px`; name 14px 400, title 14px 300).
- Card height is equalized to the tallest (574 on Threads).
- Quote sets: see §4 per page.

#### N7 `ImageInfoCard` + grid: card with copy on top and a screenshot bottom-aligned (cli, context-studio, capability-ai)
- Grid `InfoTextImageCardGrid`: `display:flex; gap:16px; padding:16px 0 60px` (Context Studio) / `SectionGrid: display:flex; gap:16px` (CLI). 2 or 3 cards, `flex:1 1 0`.
- Card = dark glass `Card__Wrapper` with `padding:0; overflow:hidden; min-width:0` (radius 12, glass shadow §1.1). ≤1000 the card becomes a row (`flex-direction:row`), ≤450 column again.
- `TextContent`: `display:flex; flex-direction:column; align-items:flex-start; gap:16px; padding:40px 40px 20px` (≤1000 `width:60%`). H3 heading-3 28/36.4 PP Formula 800 (`text-wrap:balance`) → P 16/24 300 (`margin-bottom:8px`, balance) → optional secondary md button.
- `ImageWrapper`: `display:flex; margin-top:auto` (image sits flush at the bottom-left, it may overflow the card's right edge and is clipped: CLI images 400×300 inside 376-wide cards; Context Studio 700×420 in 572 cards). ≤800 `img { width:400px; height:auto }`.
- Card sizes: CLI 376×569; Context Studio "Unified context" 572×646, "Improves with use" 376×637.

#### N8 `VideoHero` family: hero with a looping thumbnail that opens a YouTube modal (context-studio, threads)
- **`Cta` buttons** (hero CTAs, larger than `Button`):
  - Primary `PrimaryAnchor`: `display:flex; align-items:center; gap:16px; padding: clamp(8px, .289rem + .75vw, 14px) clamp(18px, .984rem + .5vw, 22px); font-size: clamp(1rem, .78rem + .44vw, 1.25rem)` (20px @1440, box 189×58); `border-radius:1px; border:1px solid transparent; color: var(--fontColorDEFAULT); box-shadow: #111118 0 0 24px 0 inset, …` (dark glass shadow); `::after` gradient `linear-gradient(45deg, color-mix(roseQuartz 85%), color-mix(minsk 50%))` opacity .2 (hover .3, active .6, .25s).
  - Secondary `SecondaryAnchor`: same metrics, `border:1px dashed #99797D; background:#0F0F15; color:#E3B2B3; letter-spacing:.25px; box-shadow: rgba(0,0,0,.64) 0 4px 8px -1px, …`; paper texture `::after`; hover `filter: brightness(1.13)`.
  - **Accents** around the primary: four 14×14 circles (`border:1px solid #786065; border-radius:999px`) centered on the corners (`-6px` offsets, transform-origin toward the button); and four 1px "corner lines" tracks (`--corner-line-outset:-4px`), each holding three 14px dashes (`--corner-line-color:#786065`) at `opacity:0`.
  - Hover (`hover:hover`): circles `scale:0` with `transition: scale .3s cubic-bezier(1,-.4,.35,.95)` and stagger `transition-delay: calc(var(--i) * .04s)`; line tracks `opacity:1` and slide (top `translateX(100%)`, right `translateY(100%)`, bottom `translateX(-100%)`, left `translateY(-100%)`) with `transition: transform .4s cubic-bezier(.215,.61,.355,1), opacity .4s` (marching-ants corner effect). Rest: `transition-delay:0s`, transform uses `cubic-bezier(.645,.045,.355,1)`.
- **Thumbnail button**: `<button>` (no chrome) with `--hover-transition-duration:529.33ms` and the 100-point spring `linear(…)` (`--hover-transition-timing-function`, same list as CLONE_SPEC §6). Contents: shadow frame `display:grid; place-items:center; aspect-ratio:128/72; background:#14141C; border-radius:4px; overflow:clip; box-shadow: rgba(0,0,0,.64) 0 0 1px, rgba(0,0,0,.56) 0 1px 1px, rgba(0,0,0,.48) 0 2px 1px, rgba(0,0,0,.32) 0 4px 2px, rgba(0,0,0,.16) 0 6px 2px` → `<video autoplay loop muted playsinline>` (`aspect-ratio:16/9; filter:brightness(.92); border-radius:1px`) → centered play button: glass ring (`padding:4px; border-radius:999px`, gradient border, layered drop shadows) around a 72×72 disc (`background: color-mix(in srgb, #14141C 92.5%, white 7.5%)`, color `#E3B2B3`, play svg 32px wide, `margin-left:5%`), whose `::before` is a `1px dashed #E3B2B3` ring rotating `rotate 7s linear infinite`, **paused** (`--play-indicator-state: paused`) until hover.
  - Hover / focus-visible: button `translateY(-4px)` (spring 529ms), frame `scale(.986)`, play ring `scale(1.1)` (`--indicator-transform`), dashed ring rotates. Threads also fades in a Perlin "pegboard" behind (`Hero__PerlinNoise` opacity 0 → 1, running) and adds `border: 1px solid rgba(245,192,192,.384)`.
- **Modal** on click: Threads `VideoModal`: `position:fixed; inset:0; z-index:2147483647; background-color: rgba(1,1,27,.8)` with a YouTube `<iframe>` 1400×860 @1440 (attrs `width=1280 height=721`, `allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"`, `allowfullscreen`), close button 40×40 (`aria-label="Close video"`, 15px × icon). Context Studio uses `FullScreenVideo` (same overlay, close is an R-Button 72×42 with a × icon). Videos: Context Studio `https://www.youtube.com/embed/1pml_nlfw80?autoplay=1&enablejsapi=1`; Threads `https://www.youtube.com/embed/Pwxsa2atlB8?autoplay=1&rel=0&enablejsapi=1`. Keep them as external iframes.

#### N9 `InstallScript`: tabbed copy-to-clipboard install command (cli hero and cli footer)
- Wrapper `flex column; gap:5px; align-items:flex-start` (footer instance centered). Width 528.
- `Tabs`: `display:flex; border-top:1px solid #4C3E44`. Options `curl` (active) / `brew`: Cinetype Mono 12px / 18.852 / ls .9996px, `padding:4px 12px !important; gap:8px`; active bg `linear-gradient(rgba(245,192,192,.098) 0%, rgba(245,192,192,0) 100%)`; inactive `opacity:.6` (hover 1); `transition: background .25s, opacity .25s cubic-bezier(.25,.1,.25,1)`; active `:active` bg `linear-gradient(rgba(245,192,192,.05) 0%, transparent 190%)`. 59×27 each.
- Command button: R-Button primary dark, full width, 528×50, `Inner` row-reversed so the 15px copy icon (`duplicate`) sits on the right (`gap:15px`); text `curl -fsSL https://hex.tech/install.sh | bash` (brew tab: `brew install hex-inc/hex-cli/hex`) in Cinetype Mono 16px / 25.136, dark gradient text, ellipsis. ≤600: 48px tall, padding 0 15px, font 12px.
- Tooltip "Copy script" (after click "Copied!"): `position:absolute; right:-10px; bottom:24px; padding:4px 8px; border-radius:4px; radial-gradient(circle at 66.66% 50%, #1D1D29 0%, #0F0F15 80%)` + dark glass shadow; text 12/18 `#FFFFFF`. Rest `opacity:0`; on wrapper hover `opacity:1; transform: translateY(-10px)`, `transition: opacity .25s, transform .25s cubic-bezier(.25,.1,.25,1)`.
- Misc links row (`padding-top:15px; gap:25px`): 16px icon + underlined link (`color:#E3B2B3; border-bottom:1px solid #E3B2B3`, 14px): "Read the docs" `https://learn.hex.tech/docs/api-integrations/cli`, "Get started with Hex" `https://app.hex.tech/signup`.

#### N10 V1 page blocks (data-apps, embedded-analytics, exploratory-analysis)
- **`V1Hero`** (`Hero__Panel`): `display:flex; flex-direction:column; align-items:center; padding:84px 0`. H1 GradientHeader, PP Formula SemiExtended 700 `clamp(42px, 24px + 4vw, 74px)` → 74/96.2, ls -1.85px, `max-width:1200px; margin-bottom:20px; text-align:center`. P 20/30 300 `max-width:800px; margin-bottom:25px`. Actions `display:flex; gap:15px; padding-top:10px`: primary md "Get started for free" (170×42) + secondary md "Request a demo" (148×42).
- **`V1H2Panel`** (`H2__Panel`, `.pt--small/medium/large`): `padding-top: 0 / 80px / 160px` (≤800 `48px` / `80px`). H2 GradientHeader PP Formula 800 60/78 ls -1.5px, `max-width:1000px; margin:auto auto 12px; text-align:center`. Optional subheader P 20/30 300 `max-width:767px; margin:auto`.
- **`V1TwoUp`** (`TwoUp__Panel`): `display:flex; align-items:center; justify-content:space-between; gap:72px; padding:96px 0`. Alternation: `.alternate-even:nth-child(2n)` or `.alternate-odd:nth-child(2n+1)` get `flex-direction: row-reverse` (≥1000 only). `.pb-last--large:last-child { padding-bottom:180px }` (≤1000 90px). ≤1000: column, `gap:48px; padding:48px 0`. Media column `width:680px; flex:0 0 auto` (≤800 100%). Copy column = R-InfoText with H2 at heading-2 (40/52) + 20/30 description (+ optional second paragraph) + secondary md CTA; optional eyebrow (`.annotation` uppercase, Cinetype Mono 10–12px, ls .833px, `#99797D`), e.g. "BUILD", "CUSTOMIZE", "EMBED", "SCALE" on Embedded.
- **`TemplateCard` grid** (`Recommendations__Grid` / notebooks `UseCasePreviewGrid`): `display:grid; grid-template-columns: repeat(3, 1fr) (404px); gap:16px; padding:64px 0 120px`. Item wrapper `padding:10px` → link → outline `Card` (same outline card as N5, with the 20px top-right corner accent and the 10% hover fill) `padding:10px` → preview image box 362×220 (`position:relative; overflow:hidden`, image `object-fit:cover`), category tag bottom-right (`TEMPLATE` / `BLOG`: IBM Plex Mono 700 12/18.852 ls 1px, `padding:6px 10px; background:#14141C`) → info `padding:15px 5px 5px`: H4 heading-4 20/26 (`margin-bottom:6px`), author 16/25.136 `#99797D` (`margin-bottom:10px`), description 16/24 300. Card 384×425.

#### N11 `PerlinCallout`: wide callout card on a hatched band (threads "Enable natural language…", capability-ai "Insight right where…")
- Full-bleed row (`CalloutWrapper`, subgrid) with a 45° hatch background (`repeating-linear-gradient(45deg, transparent 0 5px, #14141C 5px …)`, i.e. `--texture-hatch-img`) and dashed guide lines: two horizontal `1px dashed #4C3E44` lines 1492 wide (masked to fade 80px at both ends) on the card's top and bottom edges, and two vertical dashed lines at the margins. `Shared__GridLines` wrapper `margin:80px 0; padding:4px`.
- Card (`Shared__Card` / `SlackbotCallout__Card`, 1374 wide, `min-height:200px; border-radius:12px; padding:32px`, bg `#14141C` + `radial-gradient(circle at 66.66% 50%, #1D1D29 0%, #0F0F15 80%)`, dark glass shadow, plus an `InnerShadow` overlay `box-shadow: #111118 0 0 24px 0 inset; z-index:1`).
- Noise layer: `RadialDotGridMask` (`mask-image: radial-gradient(circle at 66.66% 50%, rgba(0,0,0,.12) 0%, transparent 40%)`) over `Shared__PerlinNoise` (`background-color: rgba(227,178,179,.16); background-image: url(/images/blog-2/perlin-noise.png)` → `pages/product/_shared/perlin-noise.png`, `background-size:512px; opacity:.72; animation: translate-bg 48s linear infinite` (`background-position: 0 0 → 0 -512px`), `transition: .3s ease-out`).
- Content (`z-index:2; flex column; gap:25px`): eyebrow (`display:flex; gap:12px; align-items:center; text-transform:uppercase; color:#E3B2B3`: 16px product icon + `.annotation` 12px "THREADS") → H2 heading-3 (28/36.4 PP Formula 800, `max-width:692px`, `#FFFFFF`) → optional P 16/24 300 (`margin-bottom:20px`) → secondary md "Learn more".
- Right side: Threads uses a decorative 600×600 inline SVG (a circle with two diagonal strokes) centered on a focal point at `66.66% / 50%` (`ThreadsDocs__FocalPoint`); Capability AI uses an image `RightContent` (`max-width:698px`, bottom-aligned: `Inner` is `display:flex; align-items:flex-end`), `pages/product/capability-ai/illustration-slackbot-mcp.png` (1396×878, shown 489×307).

#### N12 `BentoCell`: dark linked card with framed screenshot (context-studio "Build and manage context…", threads "A modern approach to self-serve")
- Grid `grid-template-columns: repeat(2, 1fr); gap:14px; margin-top:24px` (573 wide cells, 424–426 tall). ≤800 1 column.
- Cell: `position:relative; display:flex; flex-direction:column; border-radius:8px; background:#0F0F15; border:1px solid rgba(92,177,152,.2); box-shadow: rgba(0,0,0,.2) 1px 2px 4px, rgba(0,0,0,.17) 4px 6px 8px, rgba(0,0,0,.1) 10px 14px 10px, rgba(0,0,0,.03) 18px 25px 12px, transparent 28px …`; paper texture `::before`; `--hover-transition-duration:529.33ms` + spring for `transform`/`border`.
- Info `padding:40px`: the H3/H4 (heading-4 20/26, `margin-bottom:8–10px`, balance) sits inside an `<a>` whose `::after`-like `Target` span (`position:absolute; inset:0; z-index:1`) makes the whole card clickable → P (16/24, `max-width:512px`; Context Studio 300 weight).
- Illustration frame: `margin:0 8px 8px; border-radius:6px; overflow:hidden; border:1px solid rgb(48,48,55)` (555×252) → dot-grid-masked placeholder `rgba(245,192,192,.055)` + rose Perlin (512px) at `opacity:0` → image (553×250, `object-fit:contain`).
- Optional link indicator pill (Context Studio only, see §4.3 §6).
- Hover (`hover:hover`) and `:has(:focus-visible)`: `transform: translateY(-4px); border-color: rgba(92,177,152,.32)`; Perlin `opacity:.24`, running; indicator shown. Focus adds the 2px rose outline.
## 3. Templates (how the 28 URLs group)

| Template | Pages | Theme | Layout family |
|---|---|---|---|
| **T1 Bespoke product page (V2, `BasicPageRow` rows with checkered margins)** | `/product/bi/`, `/product/cli/`, `/product/context-studio/`, `/product/notebooks/`, `/product/threads/`, `/capability/ai/` | BI light, the rest dark | Each page has its own hero and middle sections, built from the shared library (§2) plus page-specific NEW sections. |
| **T2 V1 marketing page (`V1PageWrapper`, plain margins with 160px ticks, grid rules at cols 4/7/10)** | `/product/data-apps/`, `/product/embedded-analytics/`, `/capability/exploratory-analysis/` | dark | `V1Hero` / `V1H2Panel` / `V1TwoUp` blocks (N10) + bespoke sections. |
| **T3 Long-form guide** | `/product/switching-to-hex/` | dark | Single article layout with a sticky table of contents, chapter cards and a quotes marquee. |
| **T4 Integrations index** | `/product/integrations/` | dark | V1 wrapper; heading with callout + 6 categorized logo grids. |
| **T5 Integration detail (one template)** | `/product/integrations/{airflow, athena→aws, bigquery, clickhouse, dagster, databricks, dbt, dremio, github, mariadb, ms-sql-server, mysql, postgres, prefect, redshift→aws, snowflake, trino}/` | dark | V1 wrapper; data-driven blocks (banner, hero, quotes, How it works, optional custom blocks, FAQ, video, external links). Per-page data in `specs/product-integrations.json`. |

Each T1/T2 page is a distinct composition, so each is specced separately in §4. T5 is specced once in §5.

---

## 4. Pages

Format per section: **`#. Name`**, then a REUSE or NEW tag, the 1440 box `[x, y, w, h]` (page-absolute), the measured spec for NEW parts, the copy, and the reference files. "DOM" means `reference/pages/product/dom/<page>/<NN-Name>.html` plus the `.css` file next to it. "Tree" means `reference/pages/product/measurements/<page>-1440.txt` (full computed-style tree) and `<page>-390-summary.txt` (390 notes).

### 4.1 `/product/bi/`: "Business Intelligence (BI) for the AI Era | Hex" (light theme)
Meta description: "Hex is the AI analytics platform for BI: anyone can ask questions in plain language, get answers grounded in context, and build data apps in one prompt." Document height 8559 @1440 / 12624 @390. Screenshot `reference/pages/product/bi-1440-full.png`.

**0. BIHero: NEW** `[0, 0, 1440, 860]`. DOM `bi/00-BIHero.*`
- Row = `BasicPageRow` full (`overflow-x:clip`), with checkered margins. A decorative **inline SVG** (`BIHero__BIIllustration`, 1553×820, `position:absolute; top:0; left/right:-85.375px; bottom:40px; pointer-events:none; color: var(--fontColorDEFAULT)`) draws thin concentric line art behind the text. Copy the `<svg>` from the DOM file (it references a gradient `#illustration-bi-hero-bkg_svg__b`).
- Text column `BIHero__TextContent`: `display:flex; flex-direction:column; align-items:center; justify-content:center; gap:15px; text-align:center; margin:0 auto; padding: clamp(150px, 6.74rem + 9.375vw, 225px) clamp(0px, -0.7rem + 2.5vw, 20px) clamp(50px, 1.37rem + 6.25vw, 100px)` → 225/20/100 @1440 (box [350,0,740,860]).
- N1 AnnouncementPill "Conversational analytics" | "Read the docs" (316×37 at y 225).
- H1 (GradientHeader, light gradient; PP Formula SemiExtended 700 `clamp(42px, 24px + 4vw, 74px)` → 74px, **line-height 96.2px (1.3)**, ls -1.85px; `padding-top:15px`): "A new era of" / `<span data-style="italic">business intelligence</span>` (PP Editorial New 200 italic 96.2/125.06, `display:block; margin-top:-0.22em` = -21.16px) / "has arrived". Box [370,277,701,317].
- P (`BIHero__Description`, 24/36 300, `max-width:700px; margin:0 auto; text-wrap:pretty`; ≤800 `padding:0 20px`; ≤450 20/30): "With Hex, self-serve trusted answers and build dashboards in plain language. It's BI the way it was meant to be."
- Actions (`display:flex; gap:15px; padding-top:20px`; children `min-width:140px; flex:1 0 0`; ≤800 column): **primary lg** "Request a demo" `/request-a-demo/` (182×50) + **secondary lg** "Get started for free" `https://app.hex.tech/signup` (182×50).
- 390: hero 704 tall; H1 38/49.4 (ls -1.17), padding-top 150; spans inline (≤600 `span {display:inline}`); P 20/30; buttons stacked full width.

**1. CustomerBanner: REUSE R-Banner (framed variant)** `[0, 860, 1440, 125]`
- Label "Behind the teams setting the standard" (294×12). **5 logos**, all linked stories with the indicator dot and hover popover: StubHub (`logos/customers/stubhub.svg`, `/customers/stubhub/`), Figma (`/customers/figma/`), Modal (`pages/product/bi/logo-modal-2c947462-134x50.svg`, `/customers/modal/`), Clay (`pages/product/bi/logo-clay-48b16af5-52x50.svg`, `/customers/clay/`), ClickUp (`pages/product/_shared/logo-clickup-8ec37f23-119x50.svg`, `/customers/clickup/`). Logo boxes @1440: 65, 78, 107, 42, 95 wide × 40.
- Popover quotes: StubHub "Hex has helped us empower business analysts to explore and dig into data on their own" (Meghana Reddy, Head of Data at Stubhub); Figma (same as homepage); Modal "“Most data teams are stuck answering ad hoc questions. Hex flipped that for us. Now the business answers its own questions, and I focus on building systems that scale.” - Kenny Ning, Head of Data" (Kenny Ning and David Dorman, Head of Data and VP of Marketing and Growth); Clay "“Hex is where we go to understand the deep nuances of what's happening — and then act on them before anyone else sees it coming.”" (Joshua Hanson, Data Team Manager); ClickUp "Hex lets us go from an ad-hoc analysis to a published data app with just a few clicks." (Sai Srigiriaju, Head of Growth Strategy & Ops at ClickUp).
- 390: 233 tall.

**2. "Time to look at BI, differently" + Threads feature** `[0, 985, 1440, 1052]`, row with no top border. DOM `bi/02-BILookingAtItDifferently.*`
- Heading block (`HeadingWrapper`: `flex column; align-items:center; gap: clamp(80px, 3.59rem + 5vw, 120px); padding: clamp(50px, 1.37rem + 6.25vw, 100px) clamp(30px, .12rem + 6.25vw, 80px) clamp(30px, .12rem + 6.25vw, 80px)` → 100/80/80). Behind it, the same hero SVG **rotated 180°** (`transform: rotate(180deg); position:absolute; bottom:0`). **N2 SectionHeading**: H2 "Time to look at BI," + italic span "differently" with checker flank rules (`margin-top:-18px`); P (20/30, `width:80%`) "Legacy BI promised self-serve but gave us endless dashboards. Hex is an AI analytics platform delivering answers to everyone."
- Feature row (`BIInteractiveFeatures`: `max-width:1100px; margin:0 auto`; section `display:flex; gap:40px; align-items:flex-start; z-index:2`; ≤800 column gap 50 and illustration `width:140vw`). **REUSE R-Feature with these overrides**: info column `max-width:370px; min-width:320px; padding:30px 20px; gap:35px`.
  - R-InfoText: AbstractMark 60×60 (inline SVG in DOM, fill `rgb(173,142,182)` + shapes), H3 "Self-serve BI, but it actually works", description "Anyone can ask questions and explore data in plain language, without learning complex drag-and-drop UIs or waiting on the data team.", **secondary md** "Learn about conversational analytics" → `/product/threads/` (281×42).
  - R-Quote (dashed): "Hex’s agent increased data access for everyone at LangChain, while giving us the confidence that users were getting accurate answers with trusted data." — logo `pages/product/bi/langchain-logo.svg` (120×22), "Emily Hawkins" / "Head of Analytics Engineering".
  - Illustration: **REUSE `AgentChatWindow`** (`InteractiveFeatureThreads`) at 690×630 (`[580,1397]`), window title **"Conversational self-serve"** (tab on the right edge). Thread content is the "Galactic Revenue Insights" exchange (grouped bar chart "Galactic Revenue Distribution by Product Line (Q3)", "Thought for 11 seconds"); the full markup is in the DOM file.

**3. Three features** `[0, 2037, 1440, 2543]` (row with top border). Inner `BILookingAtItDifferently__Inner`: `flex column; gap:120px; padding:120px 80px`.
- **3a REUSE R-Feature, `row-reverse`** (`[109,2157,1222,646]`, gap 70, info 330 at right):
  - InfoText: AbstractMark, H3 "Pixel-perfect dashboards, from a prompt", "Turn insights into polished, customizable dashboards in just seconds. No more tinkering around with preset charts and layout controls.", secondary md "Explore AI-generated dashboards" → `/product/data-apps/`.
  - Quote: "Now our team members can build reports themselves, which is faster than waiting for someone else to do it. This definitely would not have been possible without Hex." — `pages/product/bi/mercor-logo.svg` (105×20), "Dhaval Patel" / "Head of Real Environments".
  - **Illustration NEW `AppGrid`** (`BICharts__ProjectWrapper`: `max-width:900px; max-height:605px; z-index:1`; grid `repeat(2,1fr); gap:12px` → 2×2 of 405×297). Each `img` `width:100%; height:100%; object-fit:cover; border-radius:6px; background:#FFF; box-shadow: rgba(49,38,59,.22) 0 0 0 1px, rgba(49,38,59,.09) 0 103px 103px 0, rgba(49,38,59,.1) 0 26px 57px 0`. Images: `pages/product/_shared/app-one@2x.png`, `app-two@2x.png`, `app-three@2x.png`, `app-four@2x.png` (1200×872 each, alt "Chart cell").
- **3b REUSE R-Feature, `row`** (`[109,2923,1222,609]`):
  - InfoText: AbstractMark, H3 "Trust and govern every answer", "Skip the months of upfront modeling. Ground agents in logic you already have, audit every answer, and automate improvements over time.", secondary md "See data governance for AI" → `/product/context-studio/`.
  - Quote: "I love Hex's Context Studio. I didn’t know how many people were using agents or what questions they were asking, now I'm able to proactively manage how people use our data." — `pages/product/bi/kong-logo.svg` (105×34), "Snehal Karanjkar" / "Data Science Leader".
  - Illustration (`BIContextStudio__IllustrationWrapper`, `display:flex; align-items:flex-start; position:relative`; ≤800 `padding-bottom:256px`): **REUSE `DashboardWindow`** 822×440 (`max-height:440px; min-width:800px`, title "Agent observability") + **NEW mock `WorkbenchWindow`** (`InteractiveFeatureCSWorkbench`, 600×387, `position:absolute; bottom:0; right:-120px; left: clamp(0px, -9.32rem + 33.125vw, 265px); z-index:2; max-width:600px`; ≤800 `min-width:800px; max-height:245px; left:0`), title tab **"Semantic Model Workbench"** at the top-right. Structure: `NavBar__Header` (37 tall, `padding:6px; gap:16px; border-bottom:1px solid #ECEDF2`: hex mark 31×12 + breadcrumb "Semantic Models / Galactic Sales Model" (`#717A94` / `#01011B`, IBM Plex Sans 12/15) + "Publish" `HexButton` 58×24, radius 3) → body row: `TabbedSidebar` 48 wide (`padding:4px 8px`, 3 icon tabs) + file list "Files" (`galactic_sales.yml` active, `product_lines.yml M`, `regions.yml A`, `customer_sectors.yml`, `rules.yml M`; M/A badges in warning/success colors) + code pane with tabs (`galactic_sales.yml ×`, `product_lines.yml M`, `regions…`) and a YAML listing in IBM Plex Mono 12px (comments `#717A94`, keys `#473982`). Port the exact markup from `bi/03-BILookingAtItDifferently.html`.
- **3c REUSE `TrustedAnswers` (the homepage "Ask a question" section) with different info copy** (`BIWherePeopleWork`: overrides `--home-section-gutter:0; --home-section-max-width:1100px; --home-section-padding-block:0`; content `[170,3652,1100,808]`, `row-reverse`):
  - Info (right): agent-logo stack 160×50 (same roll-in motion as homepage §6.5), H3 "Bring BI to where people work", "People already ask data questions in Slack, Claude, and ChatGPT. Ground those answers in the same trusted context and governance, without forcing everyone into a BI tool.", secondary md "Explore Hex MCP" → `https://learn.hex.tech/docs/api-integrations/mcp-server`.
  - Quote: "Through the Slack integration, I can ask Hex questions from my phone at the playground. Questions that would have gone unasked now get immediate answers." — Neo logo (`logos/customers/neo-financial.svg`), "David Adair" / "Director of Product".
  - Illustration: chat window 490×672 at x 0 ("Chat with the Hex Agent"; runs off the left edge and is clipped), Claude/Codex MCP window 360×280, Slack 360×285, Hex CLI 360×165 (column at x 510).

**4. BIApproach: NEW `ApproachCards`** `[0, 4580, 1440, 698]` (row with top border, padded inner `xEjAC`). DOM `bi/04-BIApproach.*`
- `section`: `flex column; align-items:center; gap:48px; padding:0 16px` (≤600 gap 32).
- H2 (heading-1 size but **solid, not gradient**: PP Formula SemiExtended 700 60/78, ls -1.848px, `#14141C`, `max-width:760px; text-align:center; text-wrap:balance`): "Rethink your BI approach with Hex".
- Grid `repeat(3, minmax(0,1fr)); gap:16px` (≤1000 1 col). Card = light glass `Card__Wrapper` (radius 12, `rgba(253,253,253,.4)` + 105° rose gradient, glass shadow, `backdrop-filter: blur(7.5px)`), overridden `padding:32px; gap:32px; justify-content:space-between`. 365×333.
  - Copy (`flex column; gap:16px`): 15×15 icon (`#43394C`, inline SVG) → H4 heading-4 (PP Formula 600 20/26 -0.5px) → P 16/24 300.
  - CTA: **primary md** button (rose fill).
  - Cards: "Built for every data user" / "Business users can explore data and build dashboards without code, while technical users can drop into SQL or Python for deeper analysis." / "See user roles" → `https://learn.hex.tech/docs/collaborate/sharing-and-permissions/roles#workspace-roles-and-paid-seats`. "Migrate without the rebuild" / "Agents automatically migrate Tableau and Looker dashboards into Hex, with inspectable SQL and logic behind every asset." / "Learn about migrations" → `https://learn.hex.tech/docs/migrate-to-hex`. "Point-and-click, when you need it" / "Explore, pivot, filter, and visualize data with familiar no-code workflows like drag-and-drop and spreadsheet-style analysis." / "Dive into no-code exploration" → `https://learn.hex.tech/docs/share-insights/explore#exploration-entry-points-and-data-sources`.
- 390: H2 38/49.4; cards stacked (each ~350 wide).

**5. BIResources: NEW `ResourceCards` + NEW `CompareVs`** `[0, 5278, 1440, 990]`. DOM `bi/05-BIResources.*`
- Same section wrapper as 4 (gap 48). H2 solid "Make the switch to BI for the AI era". Stack `flex column; gap:25px`.
- **ResourceCard grid** `repeat(3, minmax(0,1fr)); gap:16px` (≤1000 1 col). Each card is an `<a>` (`flex:1 1 auto; transition: background-color .1s linear`) → **hover glass card** (`Card__Wrapper` light glass with `padding:0`, 365×398; `transition: border, transform, box-shadow` over `--hover-transition-duration:529.33ms` with the 100-point spring; `@media (hover:hover) :hover { transform: translateY(-4px); box-shadow: rgba(0,0,0,.08) 0 0 16px 0 inset, rgba(0,0,0,.1) 0 0 0 1px, rgba(0,0,0,.08) 0 20px 32px -8px, rgba(0,0,0,.06) 0 12px 16px -4px, rgba(0,0,0,.06) 0 6px 8px -2px, rgba(0,0,0,.04) 0 2px 4px 0, rgba(0,0,0,.04) 0 1px 2px 0 }`; `perspective:800px`) → media (`padding:20px; position:relative`, 365×223): a decorative SVG pattern layer (`position:absolute; inset:0; opacity:.35; border-radius:12px 12px 0 0; overflow:hidden`) behind an image frame (`aspect-ratio:16/9; background:#FCF8F8; border-radius:4px; border:1px solid rgba(92,177,152,.42); box-shadow: rgba(0,0,0,.5) 0 2px 12px 0; overflow:hidden`, image `max-width:100%`) → content (`padding:24px; flex column; gap:10px`): type tag (`.annotation` Cinetype Mono 10/15.71 ls .833px, `#43394C` on `#FCF8F8`, `1px solid #D1CCD1`, radius 1, `padding:1px 4px`) → H4 heading-4 → metadata (`flex column; gap:4px`): row "Solution/" + tag `Data leader` (`#5CB198`), then read time; both 10px `rgba(20,20,28,.447)`.
  - Cards: eBook "Should you replace your BI tool with an agent?" · Data leader · 6 min → `/resources/bi-buying-guide/` (image `pages/product/bi/should-you-replace-your-bi-tool-with-an--d834e322-3446x2352.jpg`); Blog post "Your next BI tool shouldn't be a BI tool" · Data leader · 4 min → `/blog/next-bi-tool/` (`…your-next-bi-tool-shouldn-t-be-a-bi-tool-76aeaf65-1680x1040.png`); Blog post "You don't need to migrate those 300 dashboards" · Data leader · 5 min → `/blog/dont-migrate-300-dashboards/` (`…you-don-t-need-to-migrate-those-300-dash-c58b81b4-840x520.png`).
- **CompareVs** (horizontal variant, 1128×202): `display:flex; flex-direction:column; align-items:center; gap:24px; padding:32px; border:1px dashed var(--borderColorSTRONG) (#AFA9B1); background-image: var(--texture-hatch-img)` (45° 1px hatch). Logo row (`gap:10px`): Hex wordmark SVG 52×20 + "vs." in PP Editorial New 200 italic 31px / 20px line, `padding-bottom:2px`, `#14141C`. Grid `repeat(4, minmax(0,1fr)); gap:16px` (≤1000 2 col, ≤600 1 col). Each = link → light glass Card (`padding:30px; justify-content:center; align-items:center`) holding a competitor logo SVG (`height:32px`, grayscale filter) and an `arrow-top-right` 15px icon `position:absolute; top:10px; right:10px`. Hover = the same hover glass card as the resource cards (lift 4px, deeper shadow, 529ms spring). Links: Looker `/compare/looker-vs-hex/`, Omni `/compare/omni-vs-hex/`, Sigma `/compare/sigma-vs-hex/`, Tableau `/compare/tableau-vs-hex/`. Logos are inline SVG (copy from DOM).
- 390: cards stacked, compare grid 1 col.

**6. FAQ: REUSE R-Faq** `[0, 6269, 1440, 1021]`. Heading "FAQ", 10 items, footer line. Items and answers: `specs/product-faq.json` → `bi`. Questions: Is Hex a BI tool? / Is Hex a BI platform for AI teams? / Can non-technical users get answers in Hex without SQL? / How does Hex handle governance and trust for AI answers? / Does Hex work with dbt, Snowflake, or Cube semantic models? / What makes Hex different from traditional BI tools like Tableau, Looker, and Power BI? / Is Hex the best BI tool for small businesses? / How is Hex priced? / How do you stop AI analytics from giving wrong or hallucinated answers? / How do I switch to Hex from Tableau, Looker, or Power BI?. Chevron icon rests at `transform: rotate(-90deg)` (points right) on all product-page FAQs (`FAQ__ChevronIcon`).

**7. OutroTout: N5** `[0, 7290, 1440, 683]` (BI copy in N5).
### 4.2 `/product/cli/`: "Hex CLI — Control your analytics from the terminal | Hex" (dark)
Doc height 5619 @1440 / 8403 @390. Screenshot `cli-1440-full.png`.

**0. HeroCLI: NEW** `[0, 0, 1440, 875]`. DOM `cli/00-CartesianGrid.*`
- Row `BasicPageRow` (no top border) with a **CartesianGrid backdrop**: REUSE the homepage hero's 32px unit grid (`CartesianGrid__UnitGrid`: two 1px line masks, `mask-size:32px 32px; mask-position:center bottom`), fill `radial-gradient(circle, rgba(245,192,192,.05) 50%, rgba(245,192,192,.2))` (rose instead of eggplant), with the 10%→ramp vertical fade mask.
- Inner `HeroCLI__Inner`: `display:flex; align-items:center; justify-content:space-between; gap:30px; max-width:1436px; padding: clamp(150px, 6.91rem + 8.75vw, 220px) clamp(25px, 1.04rem + 1.875vw, 40px) clamp(80px, 4.12rem + 3.125vw, 105px)` → 220/40/105. ≤1250 column, `gap:60px`. Content row `display:flex; gap:80px` (≤800 column).
- Left text column (`max-width:600px; flex column; justify-content:center; gap:20px`):
  - N1 pill "The Hex CLI" (terminal icon) | "Read the announcement" → `/blog/introducing-the-hex-cli/`.
  - H1 dark GradientHeader, **heading-1 size** (60/78, ls -1.848px, `text-align:left`): "Command (line)" + italic block span "and conquer" (`margin-top:-1.7rem`). ≤800: `font-size:2.3rem; line-height:1.2`, span `margin-top:-.5rem` (measured @390: 36.8/44.16).
  - P 24/36 300 (`text-wrap:balance; margin-bottom:10px`; ≤450 20/30): "Create projects, write SQL, run analyses, and connect your agents… without leaving your terminal."
  - N9 InstallScript (left-aligned).
- Right: **REUSE `CliWindow`** as a large dark interactive terminal (`InteractiveFeatureCLI__ShellRoot`, `flex:1 1 600px; max-width:100%`, box [749,220,622,550]): dark product window (§1.1), toolbar `padding:12px 8px` with traffic lights + title "Hex CLI", scroll area 509 tall (`padding:10px 0 36px`), terminal root `padding-left:16px`, IBM Plex Mono line-height 21px, text `#E4E6EC`. Transcript: a 7-line block-character ASCII "HEX" banner with a smaller "cli" slash-font word, then "Welcome to the Hex CLI." / "Type a command and press Enter. Try `hex help` to get started." / `→ ~ hex project create “Galactic Revenue Insights”` / "✓ Created project" / "ID: (019d4584)" / "Title: Galactic Revenue Insights" / `→ ~ hex project run 019d4584` / "✓ Project run triggered" / "Project ID: (019d4584)" / "Run ID: (019d6376)" / "Status: Running" / prompt `→ ~ ▌`. Prompt arrow `#2BA88A`, tilde `#8ABBFF`, ids `#2BA88A`, prompt glyphs 18.76px. Block cursor blinks (`terminalCursorBlink 1.06s linear infinite`, same as homepage). The input is a hidden `<input>` mirrored into the transcript (it accepts typed commands like the homepage CLI window). Exact transcript markup: DOM file.
- 390: hero stacks (text, then terminal); H1 36.8/44.16; P 20/30; install box full width.

**1. FullWidthQuote: N4** `[0, 875, 1440, 254]`. StubHub logo, "Nova Wang", "Head of Analytics Engineering, StubHub". Quote: “We're already seeing strong pull for Hex AI across StubHub. CLI is the next logical step — **it lets our most technical users build Hex into the automated workflows where AI does its best work.**”

**2. "Analytics where your agent works": N2 + N7** `[0, 1129, 1440, 982]` (row with top border, padded inner)
- Inner `flex column; align-items:center; gap:60px`. N2 SectionHeading (max 690): H2 "Analytics where" + italic "your agent works" (checker flanks); P "Build locally, share and collaborate in Hex."
- N7 grid of 3 cards (`gap:16px`), 376×569 each, images 400×300:
  - "Works in any terminal" / "Interact directly with Hex from your terminal. Get projects, create cells, and manage users from the command line." / `pages/product/cli/illustration-any-terminal@2x.png`
  - "Plays nicely with coding agents" / "Use Claude Code or Cursor to generate an analysis, and have it move it across to Hex. Teach your agent how to use the CLI with our agent skill `hex install skill --claude`" (N3 code pill) / `illustration-claude-code@2x.png`
  - "Orchestrate and automate" / "The Hex CLI is a standard UNIX tool - trigger automations from GitHub Actions, or your own orchestration layer." / `illustration-github-actions@2x.png`
  - No CTAs. Cards 1 and 3 have `margin-top:24px` on the image wrapper (they are bottom-aligned by `margin-top:auto`).
- 390: H2 30/39; cards stacked, 270 text width.

**3. "Everything you need to control Hex with code": NEW `FeatureList`** `[0, 2111, 1440, 475]`. DOM `cli/03-SectionEverythingYouNeed.*`
- Inner Full row. Wrapper `display:flex; align-items:center; justify-content:center; padding:80px 100px; position:relative`. Backdrop R-Perlin rose (texture 1024px, opacity .24), wrapper `opacity:.8; mask-image: linear-gradient(to top, transparent, #000 100%)` (fades out toward the bottom).
- Inner `display:flex; gap:80px; align-items:center; max-width:1160px`.
  - Left (`max-width:340px; flex column; gap:30px`): AbstractMark 60×60 (inline SVG) → H2 heading-2 GradientHeader (PP Formula 800 40/52 ls -1px, left aligned) with a leading italic block span "Everything" (PP Editorial New 200 italic 52/67.6), then "you need to control Hex with code".
  - Right grid `grid-template-columns: repeat(2, 1fr); gap:40px` (386×134 cells). Each `SectionLine`: `flex column; gap:12px` → heading row (`display:flex; gap:10px; align-items:baseline`: 15px icon + H3 heading-4 20/26 PP Formula 600 `#FFFFFF`, balance) → P 16/24 300 with N3 code pills.
  - Items: "Create & manage projects" / "Spin up Hex projects in seconds. Use `hex project`, `hex app`, and `hex cell` to build analyses from your terminal — and make changes across many projects in one scripted pass." · "Run & validate" / "Execute projects and apps programmatically with `hex run`. Integrate it into CI pipelines to catch errors and keep analyses in sync with changes to your business." · "Put the agent to work" / "Kick off the Hex Agent from where your team already works. Use `hex thread` to ask a question, run the analysis in Hex, and bring the answer back into your existing workflow." · "Keep context up to date" / "Keep your context in line with how the business evolves. Use `hex guide` to manage business logic and `hex context` to preview and publish changes to guides and semantic models."
- 390: stacks (heading block then 1-column list), H2 30/39.

**4. "Built for real workflows": NEW `WorkflowTable`** `[0, 2586, 1440, 916]`. DOM `cli/04-SectionBuiltFor.*`
- Padded inner; `flex column; align-items:center; gap:60px`. N2 SectionHeading: "Built for" + italic "real workflows" (no description).
- Table (`SectionBuiltFor__Content`, 1160 wide, `position:relative`): grid `grid-template-columns: minmax(0,1fr) minmax(0,2fr) minmax(0,2fr)` (232/464/464); `grid-auto-flow:column`; 4 rows (header 60, then 153 / 201 / 129). Every cell `padding:20px; border-bottom:1px solid var(--grid500)` (#3A3138); first column `padding-left:0`.
  - Header cells: `.annotation` Cinetype Mono 12px / 18.852 / ls .9996px (`#F5C0C0`): "Task", "Prompt", "Result".
  - Task cells: H3 heading-4 (20/26, `#FFFFFF`): "BI migrations", "Bulk schema updates", "Generate locally, ship to Hex".
  - Prompt cells: P 16/24 300 in a chat-bubble chip `background: color-mix(in srgb, var(--highlightColor) 10%, transparent); border-radius:10px 10px 0 10px` (measured `10px 10px 0px` = TL/TR 10, BR 0, BL 10); `padding:8px 12px; word-break:break-word`.
  - Result cells: P 16/24 300 with the dark gradient text (white → rose).
  - **Highlighted Result column** (`FloatingHighlightContainer`, `position:absolute; left:696px; top:0`, 464×553, `background:#14141C; border:1px solid #6A565B; z-index:0`, behind the grid) holds a rose R-Perlin (512px texture, wrapper `opacity:.6`, hover-duration 500ms) and four 12×12 corner brackets (`1px solid #F5C0C0` on two sides each).
  - Copy (prompt → result): BI migrations: "Pull all the .sql files from /legacy-bi/hyperdrive-analysis and create a new project in Hex called "Galactic Hyperdrive Performance". When done importing them, run all cells." → "In one script, fetch the SQL powering the most popular dashboards, push into new Hex projects and bootstrap your AI analytics migration." · Bulk schema updates: "I just pushed a new PR, search across all my Hex projects for anything that uses the "hyperdrive_performance" table and the "hyperdrive_model" column. We need to update the column name to "hyperdrive_model_sku". When you're done, run all cells." → "List all projects, scan all SQL cells for the old column name, update in place, and rerun to validate. From a day-long project to a simple script." · Generate locally, ship to Hex: "Find "hyperdrive_maintenance_churn_v2.ipynb" and use the Hex CLI to import it into my workspace, then open it in my browser." → "Use any AI tool to write SQL and Python, push the finished analysis to Hex as a shareable, versioned project."
- ≤800: each body column becomes `flex column; gap:15px` with no cell borders/vertical padding (rows stack task → prompt → result). Measured section 1274 tall @390.

**5. "Control Hex from your terminal": NEW `CliFooterCta`** `[0, 3502, 1440, 826]`. DOM `cli/05-SectionFooter.*`
- Padded inner; `SectionFooter__Inner`: `flex column; align-items:center; gap:50px; padding:0 40px`.
- ASCII art `<pre>` (IBM Plex Mono, line-height 18.2px, letter-spacing .48px, `white-space:pre`): a pink block-character "HEX" with a darker drop shadow plus a slanted "cli" word (463×146). Port the `<pre>` and its colored spans verbatim from the DOM file.
- N2 SectionHeading: "Control Hex" + italic "from your terminal" (the italic wraps to 2 lines at 1440: box 555×203); P "Install the CLI and start building today".
- N9 InstallScript (centered variant) + the same two links.

**6. OutroTout: N5** `[29, 4328, 1382, 705]` (CLI copy in N5).
### 4.3 `/product/context-studio/`: "Context Studio: Observe, Test, and Deploy AI Agents | Hex" (dark)
Doc height 8675 @1440 / 12735 @390. Screenshot `context-studio-1440-full.png`.

**0. ContextStudioHero: NEW (built on N8 VideoHero)** `[0, 0, 1440, 850]`. DOM `context-studio/00-ContextStudioHero.*`
- Row background: `background-image: radial-gradient(circle at left top, #16161F 300px, #0F0F15)` + paper texture `::after`; `overflow-x:clip`.
- Backdrop: R-Perlin **jade** (`noise-jade-128x128.png`, 1024px, `opacity:.4`, `animation: noise 16s linear infinite`, i.e. half speed) inside a 6px dot-grid mask, masked by `radial-gradient(circle at 70% 46vh, #fff 30vh, transparent 50vh)` (≤1250 `circle at 50% 68vh, #fff 40vw, transparent 60vw`).
- Layout `ContentThumbnail`: `display:flex; align-items:center; justify-content:space-between; gap:30px; padding: clamp(150px, 6.74rem + 9.375vw, 225px) clamp(12px, .05rem + 2.5vw, 32px) 128px`. ≤1250 column (`padding-top:240px; padding-bottom:80px; gap:60px`); ≤600 `180px 0 48px`.
- Left content (`flex:1 1 0; flex column; gap: clamp(20px, .9rem + 1.25vw, 30px)`, 506 wide):
  - N1 pill "Context management" | "Read the announcement" → `/blog/introducing-context-studio/` (360×37).
  - H1 dark GradientHeader, heading-1 60/78 left-aligned, `text-wrap:balance`: "Accuracy that improves with every answer" (3 lines, 518×240).
  - P `.text-xl` at `font-size: clamp(1rem, .56rem + .88vw, 1.5rem)` (21.64/32.46 @1440), `max-width:50ch`: "Skip the months-long modeling project. Hex’s Context Studio activates the logic you already have and learns from every answer."
  - Actions (`display:flex; gap:16px`): N8 primary Cta "Request a demo" → `/request-a-demo/` (189×58, with corner circles and lines) + N8 secondary Cta "Learn more" → `https://learn.hex.tech/docs/administration/context-studio`.
- Right: N8 Thumbnail (`flex:1.5 1 0`, 759×427 at x 609, y 260). Video `pages/product/context-studio/thumbnail-9cb76238.mp4` (1920×1080, autoplay/loop/muted/playsinline). Click opens the `FullScreenVideo` modal with YouTube `1pml_nlfw80`.

**1. SectionPurposeBuilt: NEW `PlatformOverview`** `[0, 850, 1440, 797]`. DOM `context-studio/01-SectionPurposeBuilt.*`
- Two stacked subgrid rows. Margin cells are plain lines (`GridLines__ContentMarginLine`, `border-right/left:1px solid #3A3138`), not checkered.
- Title row (260 tall): 6×6 corner ticks (`1px solid #E3B2B3`, top-left and top-right of the content column). `Headlines` `max-width:980px; padding:80px 16px 24px`. H2 dark GradientHeader 60/78 centered: "The fastest way to sharpen agents on your data" (960×162).
- Workflow row (536 tall): a full-width 1px horizontal rule at y+160 (`WorkflowHRule`, `margin-top:160px; background:#312A31`) with 8×8 rose `+` marks (`AccentPlus`, `#E3B2B3`) where it meets the margins; a 1px vertical rule at the center column from y+100 (`#2B252C`).
- `WorkflowItemsGrid`: `display:grid; max-width:1230px; padding:0 32px; column-gap:32px; grid-template-columns: repeat(6, 1fr)` (167.66 each); three cards each spanning 2 columns.
- **Workflow card** (`<a href="#unified-context|#observable-everywhere|#improves-with-use">`, 367×289, `margin-top:40px`): `display:flex; flex-direction:column; align-items:center; gap:16px; padding:24px; background:#14141C; border-radius:1px; color:#E3B2B3; transition: border 529ms <spring>`.
  - Background layers (masked by a 6px dot grid and `linear-gradient(rgba(255,255,255,.8), rgba(255,255,255,.1) 60%)`): `BgUnhover` solid `#4C3E44` (`transition: opacity .1s linear`) and a Perlin layer at `opacity:0` (`--workflow-noise`: jade / citrine / amythyst per card, 256px, `animation: translate-noise 4s linear infinite` = bg-position `50% 0 → 50% 256px`, `transition: opacity 529ms <spring>`).
  - Illustration (`IllustrationContainer`, `margin:28px 0 -32px; z-index:2`, 317×110): isometric line-art SVG (green bars / yellow charts / purple card), inline in the DOM.
  - Content (`padding-top:35px; flex column; gap:12px; max-width:414px`): H3 heading-4 20/26 `#FFFFFF`; P 14/22 300 `#F5C0C0`.
  - Arrow button (`ArrowIndicatorCirc`): 48×48 circle `#0F0F15`, `position:absolute; bottom:16px; right:16px; box-shadow: #000 0 4px 16px -3px, #000 0 1px 4px -1px; color:#FFF`; rest `transform: translateX(56px) rotate(.25turn); opacity:0` (hidden off the card's right edge).
  - Hover/focus (≥800): Perlin layer `opacity:1`; arrow `transform:none; opacity:1` (529ms spring).
  - Copy: "Unified context" / "Activate logic from dbt, Git repos, and docs, then build on it in Hex or throughout your stack." · "Observable everywhere" / "Track and audit any answer no matter where questions are asked: Hex, Slack, MCP, CLI." · "Improves with use" / "Hex learns from every interaction, sharpening context and improving accuracy on the fly."
- `OnePlatform` bracket under the cards (767×56, `border:1px solid #3A3138; border-top:none; border-radius:0 0 4px 4px`) with a centered label "IMPROVE AGENT ACCURACY" (`.annotation` 10/15.71 ls .833px `#99797D`, `padding:4px 12px`, bg `#14141C`, `1px solid #3A3138`, paper texture, `translate(-50%, 50%)` on the bottom edge).
- `PlatformCapabilities` row (`display:grid; grid-template-columns: repeat(5, 39px); gap:100px; padding:48px 0; margin-bottom:16px`, centered, 595 wide): a dashed through-line (`border-bottom:1px dashed #3A3138`) behind five 39×39 icon tiles (`padding:12px; background:#14141C`, paper texture), each with a label below (`.annotation` 10px `#99797D`, `translate(-50%, 50%)`): Notebook, Threads, Workbench, Apps, CLI. Hovering a tile shows a popover above it (glass popover like the homepage logo popover: `position:absolute; bottom:100%; left:50%; padding:8px 16px; width:fit-content` (202 wide); rest `opacity:0; transform: translate(-50%, 16px)`; hover `opacity:1; transform: translate(-50%, 0)`; `transition: transform 500ms <spring> .012s, opacity .14s ease-out`) with P 12/18:
  - Notebook "AI-powered assistance directly into your Hex projects. Write and edit code, ask questions, and get answers all in one place." · Threads "Ask natural language questions and get AI-powered insights based on semantic models and warehouse tables" · Workbench "Write and edit semantic resources using natural language. Describe the model you want and let the agent generate or update it." · Apps "Chat with App enables users to ask natural language questions and get AI-powered insights from published apps." · CLI "Interact directly with Hex from your terminal. Get projects, create cells, and manage users from the command line."
- 390: cards stack (the hover states are disabled under 800).

**2. "Unified context": NEW `SectionHeader` (simple) + N7** `[0, 1647, 1440, 1095]` (row with top border). Anchor `#unified-context`.
- `SectionHeader__Wrapper`: `flex column; align-items:center; gap:10px; max-width:900px; padding:32px; text-align:center`. H2 dark GradientHeader 60/78 "Unified context"; P 20/30 300 balance: "Hex turns definitions and logic into trusted business context for agents to reason from, without locking you in." (The same header block is used by sections 3, 4 and 6.)
- N7, 2 cards 572×646, images 700×420 (`illustration-guides@2x.png`, `illustration-workbench@2x.png`):
  - "Activate existing logic" / "Markdown, code, table metadata. Hex ingests and understands it for trusted answers without exhaustive modeling." / secondary md "Explore context management" → `https://learn.hex.tech/docs/agent-management/context-management`
  - "Build from anywhere" / "Layer in new logic in Hex, dbt, or your warehouse. Hex keeps it synced and versioned, without locking you into one tool." / "Explore semantic models" → `https://learn.hex.tech/docs/connect-to-data/semantic-models/intro-to-semantic-models`

**3. "Observable everywhere": NEW `ObservatoryCallouts` around REUSE `DashboardWindow`** `[0, 2742, 1440, 877]`. Anchor `#observable-everywhere`.
- SectionHeader: "Observable everywhere" / "Questions get asked everywhere: Slack, Claude, Cursor. Hex gives you visibility into every answer and every step the agent took."
- `SectionObserve__Inner`: `display:flex; align-items:center; justify-content:center; gap:50px; padding-top:50px; position:relative`. **REUSE `DashboardWindow`** (dark, 890×454, `max-width:890px`, title "Agent observability", dashed guides extending 200px left/right and 50px top/bottom).
- Callouts (`position:absolute; left:-250px; right:-250px; top:174px`, `display:flex; justify-content:space-between`), each `max-width:200px; flex column; gap:12px`, with a 15px icon above:
  - Left (right-aligned text): H4 "Trends surfaced automatically" / P 14/22 300 "Track agent adoption across all of Hex surfaces. See question domains that are growing, trending, or newly emerging with Topics."
  - Right (left-aligned): H4 "The agent suggests improvements" / P "Warnings surface agent confusion, missing context, or user doubt. The Review Agent tells you exactly what to fix."
- 390: callouts flow under the window.

**4. "Improves with use": SectionHeader + N7** `[0, 3619, 1440, 1086]`. Anchor `#improves-with-use`.
- Header: "Improves with use" / "Hex learns from every question asked and every answer published, so you’re always ahead of drifting business logic and emerging domains."
- 3 cards 376×637, images 400×350 (`illustration-ui-suggestions@2x.png`, `illustration-ui-eval-detail@2x.png`, `illustration-ui-work-is-context@2x.png`), each with a secondary md "Learn more": "Fixes find you" / "The Review Agent analyzes interactions for you to find context gaps and suggest fixes." → `https://learn.hex.tech/docs/agent-management/suggestions` · "Every change, evaluated" / "Improve context with evidence, not instinct. Test changes with evals, ship what passes and catch what breaks." → `https://learn.hex.tech/docs/agent-management/evals` · "Your work is context" / "The logic and queries behind every published app are reusable context for future questions." → `/blog/introducing-projects-as-context/`

**5. FullWidthQuote: N4** `[0, 4704, 1440, 265]`. Zoe logo, "Craig W.", "Staff Data Engineer, Zoe". “**Context Studio gives us the confidence to roll out agents on our data.** It's something I check every day — seeing context gaps and suggested improvements surfaced automatically provides a practical way for us to bring trusted AI self-service to the business.”

**6. "Build and manage context on your terms": NEW `BentoCells`** `[0, 4969, 1440, 1340]`. DOM `context-studio/06-SectionHeader.*`
- SectionHeader: "Build and manage context on your terms" / "Context curation in Hex is intentionally flexible, so it can adapt to the way your team already works."
- Grid `grid-template-columns: repeat(2, 1fr); gap:14px; margin-top:24px` (573×426 cells).
- **NotebookCell** card: `<div>` with a full-card link target; `display:flex; flex-direction:column; position:relative; border-radius:8px; background:#0F0F15; border:1px solid rgba(92,177,152,.2); box-shadow: rgba(0,0,0,.2) 1px 2px 4px, rgba(0,0,0,.17) 4px 6px 8px, rgba(0,0,0,.1) 10px 14px 10px, rgba(0,0,0,.03) 18px 25px 12px, …`; paper texture `::before`; `--hover-transition-duration:529.33ms` + spring.
  - Info `padding:40px`: H4 heading-4 inside the link (`margin-bottom:10px`) → P 16/24 300.
  - Illustration frame (`margin:0 8px 8px; border-radius:6px; overflow:hidden; border:1px solid rgb(48,48,55)`, 555×252): dot-grid mask over a placeholder (`rgba(245,192,192,.055)`) and a rose Perlin at `opacity:0`; image `object-fit:contain` (553×250).
  - Link indicator (`position:absolute; bottom:24px; left:24px; padding:14px 20px 14px 26px; gap:18px; background:#0F0F15; color:#FFF; border:1px dashed #99797D; border-radius:1px; box-shadow: rgba(0,0,0,.12) 0 2px 3px, rgba(0,0,0,.8) 0 4px 12px -2px`, paper texture; `.text-base` 16px) with an arrow; rest hidden (opacity 0 and shifted), shown on hover.
  - Hover (`hover:hover`) and `:has(:focus-visible)`: card `translateY(-4px)`, border `rgba(92,177,152,.32)`; Perlin `opacity:.24` and running; link indicator `transform:none; opacity:1`. Focus adds `outline: 2px solid rgba(245,192,192,.386); outline-offset:2px`.
  - Cells (title / text / indicator / href / image): "Pull knowledge from your tools" / "Connect Notion, Linear, or any MCP server to bring tickets, wikis, and more into Hex, so answers capture what your team knows." / "See connected apps" / `/blog/mcp-client/` / `illustration-pull-knowledge@2x.png` · "Manage context from the terminal" / "Use the Hex CLI to version context from Git, pull agent suggestions into PRs, and run evals before shipping changes." / "Explore the Hex CLI" / `/product/cli/` / `illustration-hex-cli-suggestions@2x.png` · "Bring your semantic models" / "Sync semantic models from dbt MetricFlow, Cube, or Snowflake. Definitions stay versioned in your stack while Hex stays in sync." / "Discover semantic model sync" / `https://learn.hex.tech/docs/connect-to-data/semantic-models/semantic-model-sync/intro` / `illustration-open-standards@2x.png` · "Model only what you need" / "Go off-road in the Hex notebook for flexible exploration, without turning every one-off idea into permanent logic." / "Discover exploratory analysis" / `/product/notebooks/` / `illustration-notebook@2x.png`.
- 390: 1 column.

**7. CustomerStoriesTwoUp: REUSE R-TwoUpStories (dark)** `[0, 6310, 1440, 300]`. Left: Notion logo (`logos/customers/notion.svg`), “Development and deployment **is so speedy.** Seeing my semantic model changes immediately rendered in Hex was a joy.” — Peter R., Data Engineer at Notion. Right: Weights & Biases logo (`pages/product/context-studio/customerstoriestwoup-1eaf4b79-169x50.svg`, 176×52), “Hex made setting up a connection to MetricFlow a breeze! The intuitive click-and-drag UI **empowers our stakeholders** to perform self-serve analysis.” — Mercedes W., Data Scientist at Weights & Biases. Name in `.text-base` 16px, title `.annotation`.

**8. OutroTout: N5** `[0, 6610, 1440, 623]`.

**9. FAQ: REUSE R-Faq** `[0, 7233, 1440, 856]`. "FAQ", 5 items with list-heavy answers (`specs/product-faq.json` → `context-studio`): What can I actually use as context? Can I connect existing sources? / Do I have to build my context in Hex? Or can it be synced in? / How does Hex decide which context to use? Can I see what Hex used as context? / Do I need to build semantic models for accurate and consistent answers? / How much work is it to maintain context as our business changes?
### 4.4 `/product/threads/`: "Threads: Conversational Analytics for Everyone | Hex" (dark)
Doc height 6884 @1440 / 8709 @390. Screenshot `threads-1440-full.png`.

**0. Hero: NEW (built on N8)** `[0, 0, 1440, 899]`. DOM `threads/00-Hero.*`
- Same shell as the Context Studio hero (dark radial background, paper texture, dot-grid backdrop `Hero__DotGridBg`). `ContentThumbnail`: `display:flex; align-items:center; justify-content:center; gap:64px; padding:224px 32px 128px`.
- Left (`Hero__Content`, 639 wide; `Hero__Text padding-bottom:40px`):
  - **HeadlineTag** (single pill, not N1): `display:inline-flex; align-items:center; margin-bottom:24px; padding-right:12.8px; border-radius:999px; background: rgba(113,122,148,.1); box-shadow: rgba(245,192,192,.2) 0 …` (303×29); 29×29 icon spot (`padding:6.4px`, radius 999) + text Cinetype 12/18.852 "Threads: Conversational analytics for everyone".
  - H1 `.heading-0` PP Formula SemiExtended 700 **74/96.2**, ls -1.85px, `#FFFFFF` with the dark text gradient, manual `<br>`s: "Conversational" / "analytics for" / "everyone" (639×289, `margin-bottom:10px`).
  - P `.text-xl` 21.64/32.46 300 balance, `max-width:556px`: "Threads is a new way to do self-serve analytics. Anyone can ask questions in plain language and get detailed, trustworthy answers".
  - Actions (`gap:16px`): N8 primary Cta "Request a demo" → `/request-a-demo/` (189×58) + N8 secondary Cta "Learn more" → `https://learn.hex.tech/docs/explore-data/threads` (149×58).
- Right: `ThumbnailArea` (`display:grid; max-width:705px; flex:1 1 auto`, 592×370) holding the **PegBoard** button (`padding:16px; background:#0F0F15; border-radius:8px; box-shadow` = the BentoCell shadow; a feather-edge mask `linear-gradient(to right, transparent, #fff 16px, #fff calc(100% - 16px), transparent)` × vertical) over a rose Perlin (512px, opacity 0 → 1 on hover) → N8 Thumbnail frame 558×336 with video `pages/product/threads/thumbnail-e09e0616.mp4` (1920×1160, `aspect-ratio: 639/385`). Click → `VideoModal` (YouTube `Pwxsa2atlB8`). Hover: `translateY(-4px)`, `border: 1px solid rgba(245,192,192,.384)`, Perlin on, play ring scales 1.1.

**1. FullWidthQuote: N4** `[0, 899, 1440, 234]`. PandaDoc. “We're really excited by how stakeholders have been using Threads **for self-serve analytics**. The text-to-answer results leverage our semantic layer, and we can **share every step of the reasoning** with the relevant audience.” Followed by a 1px bottom-border row (`ThreadsPageContent__BottomBorder`).

**2. "Ask anything": NEW `ThreadsH2` + REUSE R-InfoText in a TwoUp** `[0, 1134, 1440, 884]` (no top border)
- `H2Wrapper`: `flex column; align-items:center; gap:12px; padding:40px 0 32px`. H2 `.heading-1` 60/78 **solid white** (no gradient), `max-width:820px; text-wrap:balance`: "Ask anything". Subheadline `.text-xl` 24/36 300 `max-width:750px`: "Type a question, get answers you can trust."
- TwoUp (`max-width:1000px; padding:64px 0; gap:72px; row-reverse`): image `pages/product/threads/threads-overview-illustration.png` (490×392, `max-width:490px`) right; InfoText left (438 wide): H2 heading-2 40/52 with a gradient `linear-gradient(to right, #FFFFFF, #F9…)` "Deep reasoning, not one-shot answers", P 20/30 "Threads can explore multiple lines of inquiry, fix its own errors, and go beyond surface-level insights.", secondary md "Learn more about agentic analytics" → `/capability/ai/`.

**3. "Fully integrated into Hex"** `[0, 2018, 1440, 1206]` (top border)
- ThreadsH2: "Fully integrated into Hex" / "Threads uses your existing data connections, projects, and semantic models for accurate context."
- `FullyIntegratedSection` (`max-width:900px; flex column; gap:20px`) with two TwoUps:
  - InfoText (360) + image `threads-audit-ready-illustration.png` (540×429), `gap:0`: H2 "Get under" `<br>` "the hood" / "Every Thread is backed by a Hex project that the data team can open as a Notebook for deeper analysis." / "Learn more about notebooks" → `/product/notebooks/`.
  - Image `threads-semantic-models-only-illustration.png` (490×351, natural 660×472) + InfoText (338), `gap:72px`: "Keep the data team in control" / "Focus Threads just on endorsed, modeled data for trusted, accurate answers." / "Learn more about trusted data" → `/product/context-studio/`.

**4. "A modern approach to self-serve": ThreadsH2 + N12 BentoCell ×4** `[0, 3224, 1440, 1274]` (top border). Cells (title / text / href / image, all `pages/product/threads/`): "Threads, everywhere" / "Start a thread from Slack by mentioning @Hex, or use our MCP server for answers in third-party tools." / `https://learn.hex.tech/docs/share-insights/hex-agent-in-slack` / `threads-everywhere.png` · "Surface existing answers" / "When a question has been answered before, Threads redirects users to existing apps." / `https://learn.hex.tech/docs/share-insights/apps/app-builder` / `threads-self-serve-surface-existing-answers.png` · "Visual exploration built in" / "Tables and charts created in Threads can be instantly opened in Explore for no-code visualization." / `https://learn.hex.tech/docs/share-insights/explore` / `threads-self-serve-visual-exploration.png` · "Collaboration-first" / "Threads users can share threads with the data team for help or inspection." / `/capability/hex-for-teams/` / `threads-self-serve-collaboration-first.png`.

**5. N6 CustomerQuotesMarquee** `[0, 4499, 1440, 774]`. 5 cards (no headshots), logo then quote then author:
- StubHub: "Threads taps into exactly our imagined value-add of agentic AI for self-serve analytics. This will allow us to accelerate many of our core analytics roadmap items, and we're already seeing immediate success across the company.” — Connor S., Director of Analytics Engineering at StubHub
- Brex: "We spend a lot of time investigating edge cases in metrics. Just today, Threads saved me having to dig into the cause of a metric issue and saved me 20 minutes, it makes us so much faster at this type of work.” — Sumeet M., Head of Data at Brex
- PandaDoc (`pages/product/_shared/customer-logo-728e1e88-120x50.svg`): "We're really excited by how stakeholders have been using Threads for self-serve analytics. The text-to-answer results leverage our semantic layer, and we can share every step of the reasoning with the relevant audience.” — Hannah B., Data Product Manager at PandaDoc
- Neo Financial: "I haven’t slept much the past two days as I’ve been firing off thread after thread after thread with the Hex Agent in Slack.” — David A., Group Product Manager at Neo Financial
- Customer.io (`pages/product/_shared/customer-logo-fc46557c-170x40.svg`): "Hex is bridging the gap between self-service data access and self-service data analytics. Threads allows my users to discover data, create charts, and even perform analysis — all via natural language.” — Michael G., Head of Data & Analytics at Customer.io

**6. N11 PerlinCallout (ThreadsDocs)** `[0, 5273, 1440, 454]`. Eyebrow "THREADS"; H2 "Enable natural language questions" `<br>` "and trusted, AI-powered answers" `<br>` "from your data." (`AI-powered` is `nowrap`); secondary md "Learn more" → `https://learn.hex.tech/docs/explore-data/threads`. Decorative circle SVG right.

**7. OutroTout: N5** (in a V1 subgrid row) `[29, 5727, 1382, 571]`.

### 4.5 `/capability/ai/`: "AI Analytics Platform Built for Modern Data Teams | Hex" (dark)
Doc height 8045 @1440 / 11932 @390. Screenshot `capability-ai-1440-full.png`.

**0. PromptHero: NEW** `[0, 0, 1440, 993]`. DOM `capability-ai/00-PromptHero.*`
- Top grid row 156 tall (`PromptHero__TopGridLines`, `border-bottom:1px solid #2B252C`) with vertical rules at grid columns 4 and 10 (x 374 / 1065, `#2B252C`) and 6×6 rose corner ticks at the bottom corners.
- **HeroGlass** card (`grid-column: 2/-2; max-width:1840px; min-height:656px; border-radius:12px; overflow:clip; padding: clamp(12px, -.23rem + 3.5vw, 40px) clamp(8px, -.91rem + 5vw, 48px)` → 40/48; `background-image: radial-gradient(circle at 50% 130%, #1D1D29 0%, #0F0F15 80%)`; dark glass shadow; `transform-origin: 50% 300%`), box [29,180,1382,656]. Entrance: `glass-enter` (`0% { opacity:.4; transform: translateZ(-120px) translateY(60px) rotateX(-3deg) }`) over **673.93ms** with a 100-point spring `linear(…)`.
- Background inside the glass: (a) **canvas line field** `AiIllustrationCanvas` (1700×1700 backing store, `position:absolute`, centered at the bottom center of the glass with `transform: translate(-850px, -578px)`; opacity fades in over 856.56ms spring) — the same runtime 2D canvas as the nav "AI & agents" callout (CLONE_SPEC §7 gap 1); and (b) a rose Perlin (512px) masked by `radial-gradient(circle at 50% 80%, rgba(0,0,0,.12) 80px, transparent 300px)`, paused until hover.
- N1 pill "AI analytics platform" | "Explore AI in Hex" → `https://learn.hex.tech/docs/getting-started/ai-overview`, `position:absolute; top: clamp(24px, .94rem + 2vw, 40px); left: clamp(14px, -.25rem + 4vw, 46px)`; entrance `prompt-hero-announcement-enter .8s ease .1s both` (`0% { opacity:0; filter: blur(4px) }`).
- **Prompt UI** (`PromptPosition`: `position:absolute; top:33%; left:50%; width:100%; transform: translate(-50%,-50%); transform-origin: 50% 800px; z-index:1`; entrance `enter 584.78ms <spring> .1s both` = `0% { opacity:0; filter: blur(1px); transform: translate(-50%,-50%) scale(.96) translateY(32px) }`):
  - Underlay `max-width:720px; padding:4px; border-radius:12px` → surface (712×104, `border-radius:12px; background-image: radial-gradient(circle at 66% 420%, #463B43 0%, #191820 80%)`, rose hairline shadow) with a **focus aura** (`FocusAura`: conic gradient border via `--gradient-image`, `::before` blurred 60px border-image glow, `::after` 1px masked border; animations `aura-position 1s cubic-bezier(.25,.1,.25,1) both`, `aura-angle 1s cubic-bezier(.25,.46,.45,.94) both` (`--angle: -.295turn → -.0575turn`), `aura-enter-exit` (opacity .18 → 0) and `border-enter-exit` (1 → 0)).
  - Top (`padding:12px 16px 24px`): text area (white, Cinetype 14/22) showing the placeholder "Ask a data question..." and the typed prompt (`Type` component) with a blinking cursor (`blink .8s steps(2, jump-none) infinite`). **Typing loop (measured)**: type ≈23 chars/s, hold ≈1.5 s, delete ≈30 chars/s, pause ≈1.4 s with the placeholder, next prompt. Prompts in order (from the bundle; `**x**` renders as an inline table-reference pill with a 16px table icon, which pops in with `data-reveal`): 1 "What are the top drivers of revenue growth over the past 6 months?" · 2 "Using **cat_campaign_type** and **cat_channel_type**, how are lead conversion rates trending?" · 3 "Forecast patient readmission rates on the past 12 months of data" · 4 "Show me the first purchase per customer and list all product names in the order." (the measured cycle started at prompt 2).
  - Actions row (`padding:7px; gap:4px; align-items:flex-end`): data-connection chip(s) (e.g. `prod_sources.salesforce_opportunities`, `prod_core.dim_admissions`, with Snowflake/BigQuery-style icons; chips fade in with `opacity:1; transform:none`) + 32×32 send button.
- **Info row** (`PromptHero__Info`: `margin-top:auto` (262px); `display:flex; align-items:flex-end; justify-content:space-between; padding:8px`; entrance `hero-info-enter 584.78ms <spring> .2s both` = `0% { opacity:.001; filter: blur(2px); transform: scale(.99) translateY(12px) }`): H1 `.heading-1` 60/78 `#FFFFFF` (solid), `max-width:601px`: "Anyone can analyze with Hex"; P `.text-l` 20/30 300 `max-width:643px; margin-bottom:30px`: "Ask questions in natural language. Analyze with or without code. Trusted answers grounded in your organization’s context."; primary md "Get started for free" → `https://app.hex.tech/signup` (170×42) + secondary md "Request a demo" → `/request-a-demo/` (148×42), `gap:16px`.
- **CustomerBanner** (R-Banner framed, attached under the glass, `[12, 836, 1416, 125]`, frame bg `rgba(20,20,28,.3)`): label "How data teams at leading AI companies do their best work"; 6 logos: Anthropic, Notion (story popover), Ramp (popover "We like to embed Hex dashboards where teams work." — Ian Macomber), Lovable, Reddit, Brex (all existing in `logos/customers/`).
- 390: glass full-bleed with smaller padding; prompt UI on top, H1 30–38px below; banner wraps to 2 rows.

**1. Workflows: NEW `WorkflowSplit`** `[0, 993, 1440, 519]`. DOM `capability-ai/01-Workflows.*`
- Masthead (`padding:56px 0 48px; border-bottom:1px solid #3A3138`): H2 GradientHeader heading-2 (40/52, `max-width:840px`, centered): "Supercharge everyday workflows".
- Grid `grid-template-columns: 1fr 1px 1fr` (719.5 / 1 / 719.5) with an `<hr>` divider column `#3A3138`. Each half: description block (`padding:40px 0 56px; gap:16px; border-bottom:1px solid #3A3138`) → container (`max-width:672px; margin:0 36px; gap:15px`): H5 eyebrow (`display:flex; gap:8px; align-items:center`, icon + `.annotation` uppercase ls 1.1662px; left `#5CB198` jade, right `#A477B2` amethyst) → P 24/36 300 with a white lead-in span.
- Feature list (`padding:32px 0; gap:32px; display:flex`, color = the half's accent for the icons): 3 `li` (`gap:12px`, icon + `.text-m` 16/24 300 `#FFFFFF`).
- 8×6 "T" accents (`Workflows__AccentT`) at the divider's top and bottom.
- Copy: left "ADVANCED ANALYTICS" / "**Deep-dive analysis:** Explore the new, novel, and gnarly in an AI-powered, multiplayer notebook where Python, SQL, and no-code live together." / Agentic data exploration · Generative app-builder · Create and edit code. Right "CONVERSATIONAL SELF-SERVE" / "**Self-serve and explore.** Ask Hex a question in natural language, get a complete analysis, and keep going." / Get quick answers · Ask follow-up questions · Governed insights.
- 390: halves stack.

**2. N6 CustomerQuotesMarquee** `[29, 1512, 1382, 738]`, 5 cards **with headshots** (35×35, `pages/product/capability-ai/`): Lovable "Hex’s notebook agent just works. I describe what I want and get working SQL back, without having to juggle between tools. It’s made us 10x faster at turning questions into insights.” — Kristian K., Product at Lovable (`kristian-k-lovable-headshot.png`) · Ramp "The Hex agent really sped up exploratory analysis for me, especially when juggling multiple datasets. I love being able to make edits across the notebook without bouncing between tools.” — Ian M., Head of Analytics Engineering & Data Science at Ramp (`ian-m-ramp-headshot.png`) · Product Hunt (`pages/product/_shared/product-hunt-0334d358-126x50.svg`) "The Notebook Agent feels like the future. As a former data scientist, it feels like a junior version of myself, requiring a little guidance, but an immediate accelerant to my data work.” — Rajiv A., CEO at Product Hunt · Notion "It's a time saver not having to write perfect syntax all the time, ‘how do I get all the unique rows versus if it's a single column’ is hard to remember.” — Akshay B., Threat Intel Lead at Notion (`akshay-bhat-headshot.jpeg`) · Algolia "AI can do almost everything for you in Hex. I use it to scaffold entire apps and help me debug SQL queries. It makes me 10x faster.” — Tom C., Principal Engineer at Algolia (`tom-clark-headshot.png`).

**3 and 5. WorkflowSectionShared: NEW `DemoAccordion`** (two instances) `[29, 2250, 1382, 1031]` and `[29, 3785, 1382, 1151]`. DOM `capability-ai/03-…` / `05-…`
- Wrapper `flex column; padding-bottom:120px; border-bottom:1px solid #3A3138`.
- Masthead (`margin-bottom:96px; flex column; align-items:center`): `.annotation` eyebrow uppercase (`margin-bottom:20px`) → H2 GradientHeader heading-1 60/78 `max-width:800px; margin-bottom:20px` → P `.text-xl` 24/36 `max-width:900px; margin-bottom:32px; text-align:center` → **"Watch demo" pill** (`DemoVideo__FloatyDarkButton`: 212×50, `display:flex; gap:8px; align-items:center; padding:0 22.5px; border-radius:60px; background:#14141C; color:#FFF; font 16/25.136`; play icon + label + duration span `opacity:.5`; `data-theme="dark"` floaty shadow). Click → YouTube modal (instance 1 `utOLApsGvrU` "2 min"; instance 2 `Pwxsa2atlB8` "7 min").
- Body (`WorkflowArea`: `display:flex; gap:40px; align-items:center; justify-content:center`):
  - **Selector** `<fieldset>` (471 wide, `margin-top:16px`) of radio `<label>`s (the native radio is `opacity:0`): container `padding:16px 32px; border-left:1px solid rgba(255,255,255,.24)` (active border is brighter); title `.heading-4` 20/26 (`max-width:416px`), active `#FFFFFF`, inactive `rgba(255,255,255,.32)`, `transition: color .08s`. Expander `display:grid; grid-template-rows: 0px → 1fr (measured 132px); transition: grid-template-rows .28s cubic-bezier(.25,.1,.25,1); overflow:hidden`; content `opacity 0 → 1` (`.6s cubic-bezier(.25,.1,.25,1)`) and `translateY(12px) → 0` (`.28s`). Content: `.text-base` 16px (`max-width:352px; padding-top:8px`) + secondary md option button.
  - **Media** (`ThumbnailArea`: `display:grid; max-width:780px; aspect-ratio:16/9`, 780×439): one `MediaWrapper` per option, stacked in the same grid cell, each an autoplay/loop/muted `<video>` (`filter: brightness(.96)`). Selected media enters with `fadeIn .38s cubic-bezier(.175,.885,.32,1.1) .16s forwards` (`0% { opacity:.8; transform: translateY(40px) }`), previous leaves with `fadeOut` (`opacity 1→0; scale .98`) / `transformOut` (`translateY(-40px) rotateX(3deg)`). Inactive wrappers `opacity:0`.
  - Interaction: click-only (no auto-advance in 20 s of observation).
- Instance 1 "BUILD & ANALYZE" / "AI, meet the world’s best notebook" / "Powered by leading LLMs, Hex understands your data and your intent — speeding up analyses with a magical assist right where you’re already working." Options (title / text / CTA / video in `pages/product/capability-ai/`): "Agentic workflows for data people" / "Start with any question, and get to a first draft in minutes. Agents in Hex abstract away the most tedious parts of data work." / "Discover notebooks" → `/product/notebooks/` / `1-agentic-workflows-for-data-people.mp4` · "Share your answers in data apps" / "Publish your analysis as a data app that anyone can explore. End-users can chat with your app to ask their own follow-up questions" / (no CTA) / `2-share-your-answers-in-data-apps.mp4` · "The Hex Agent understands data work" / "The Hex agent is a pair programmer that can write and edit code, understands the upstream & downstream dependencies in your flow, and can debug your work." / (no CTA) / `3-hex-agent-understands-data-work.mp4`.
- Instance 2 "SELF-SERVE & EXPLORE" / "Conversational analytics for everyone" / "Hex is your organization’s first line of defense for quick questions, freeing up your data team to focus on what matters most." Options: "Quick questions, deep answers" / "Ask questions in natural language and get thoughtful, in-depth answers you can trust — grounded in context from your data, the web, and the tools your team works in every day." / "Discover Threads" → `/product/threads/` / `SelfServeQuickQuestions.mp4` · "Trust built in" / "Threads can leverage this context in your workspace to generate more accurate, reliable answers. The data team can create semantic models, endorse trusted data, and write AI guides to add a layer of governance." / "Curate context for agentic analytics" → `/blog/introducing-semantic-model-sync/` / `SelfServeTrustBuiltIn.mp4` · "Pop open the hood" / "Every conversation in Threads becomes a Hex project that the data team can open as a notebook for help, inspection, or deeper analysis. Dig into the results with full transparency into the agent’s reasoning." / "Deep-dive analysis in notebooks" → `/product/notebooks/` / `SelfServePopOpenTheHood.mp4` · "Chat with a dashboard" / "Hex’s data apps are great conversation starters, but it doesn’t end there. Type a follow-up question and get an answer based on the context in your app." / "Learn more" → `https://learn.hex.tech/docs/explore-data/chat-with-app` / `SelfServeChatWithDashboard.mp4`.
- 390: selector above media; media full width.

**4. N11 PerlinCallout (Slackbot)** `[0, 3281, 1440, 505]`. "THREADS" / "Insight right where the conversation is happening" / "Kick off or schedule a Thread wherever your team is asking data questions — Slack, Claude, Cursor, or Codex — and the Hex Agent brings the full context of your stack with it. Connect Hex to the tools your team works in so every answer reflects not just what the data shows, but what your team actually knows." / "Learn more" → `https://learn.hex.tech/docs/share-insights/hex-agent-in-slack`. Right image `pages/product/capability-ai/illustration-slackbot-mcp.png`.

**6. SecurityTout: NEW wrapper + N7 cards with eyebrows** `[29, 4936, 1382, 1257]`
- Wrapper `padding:100px 40px; background-image: linear-gradient(transparent 0%, rgba(245,192,192,.015) 20%, rgba(245,192,192,.05) 100%)` (a faint rose wash toward the bottom). Top (`max-width:700px; margin-bottom:50px; gap:5px; align-items:center`): H2 heading-1 solid white "Accuracy 🤝 Privacy" (the emoji is a 58×74 span), P `.text-xl` 24/36 `max-width:620px; margin:8px auto 24px`: "Combining cutting-edge approaches to AI, with our industry-leading commitment to security and privacy."
- N7 grid (`max-width:1232px`), 3 cards 400×744 with an **eyebrow H6** above the H3 (IBM Plex Mono 700 12/18.852, ls 2.568px, uppercase, `#99797D`): "Security" / "Keeping your IP your IP" / "All metadata is stored in a secure database running inside Hex’s architecture. Hex’s model providers do not train on customer data. Hex’s use of AI session data is governed by your applicable Terms of Service." / "Learn more" → `https://learn.hex.tech/docs/trust/data-privacy-and-usage-faq` / `illustration-security@2x.png` · "Governance" / "Enriched with your organization’s context" / "AI in Hex can leverage context from semantic models, database metadata, external repositories, even existing dashboards." / "Explore Context Studio" → `/product/context-studio/` / `illustration-context-studio@2x.png` · "CLI" / "Bring your own agent" / "Already analyzing data with Cursor or Claude Code? Integrate with the Hex CLI to publish your findings." / "Check out the CLI" → `/product/cli/` / `illustration-cli-suggestions@2x.png` (all 640×560, shown 400×350; files in `pages/product/capability-ai/`).

**7. OutroTout: N5** `[29, 6192, 1382, 653]`.

**8. FAQ: REUSE R-Faq** `[0, 6845, 1440, 613]`, heading **"FAQs"**, 2 items (`specs/product-faq.json` → `capability-ai`): What is an AI Analytics Platform? / How is Hex different from other AI Analytics platforms?
### 4.6 `/product/notebooks/`: "Agentic Data Notebook: SQL, Python, React, and AI | Hex" (dark)
Doc height 8870 @1440 / 11930 @390. Screenshot `notebooks-1440-full.png`.

**0. NotebooksHero: NEW** `[0, 0, 1440, 919]`. DOM `notebooks/00-NotebooksHero.*`
- Row bg `radial-gradient(circle at 0% 0%, #14141C 300px, #0F0F15 …)`. Backdrop: a **Voronoi line-cell SVG** (`Voronoi__VoronoiWrapper`: 2240×929 inline SVG, `position:absolute; top:0; left:50%; transform: translateX(-50%); opacity:.3; pointer-events:none`); static (no animation found). Copy the SVG from the DOM file.
- Content (`ContentThumbnail`: `flex column; align-items:center; justify-content:center; gap:64px; padding:225px 32px 58px`) → `TextWrapper` (`max-width:800px; padding-bottom:40px; gap:20px; text-align:center; text-wrap:balance`): N1 pill "Agentic notebooks" | "Read the docs" → H1 dark GradientHeader heading-1 60/78: "The agentic notebook for the next era of data work" (812×240) → P 21.64/32.46 300 (`max-width:695px`): "Hex lets the data team focus on data work. Combine code, no-code, queries, and visuals in a flexible notebook."
- Actions (`gap:20px`): primary **lg** "Get started for free" → `https://app.hex.tech/signup` (170×50) + secondary lg "Request a demo" → `/request-a-demo/` (148×50).
- **CustomerBanner minimal variant** (R-Banner `variant="minimal"`, 1358×170): `flex column; align-items:center; padding:38px 0`; title P `.text-base` 16px **weight 500** "Trusted by leading data companies" (`margin-bottom:22px; padding:0 30px`); logos `max-width:1000px; gap:20px` (≤800 15), each **50px tall**: Reddit, Notion, Anthropic, SeatGeek (`_shared/logo-seatgeek-b2ffbeef-51x50.svg`), ClickUp, AllTrails (`_shared/logo-alltrails-22fd2415-151x50.svg`). No popovers on this page (Notion/ClickUp/AllTrails have popovers on data-apps and embedded).

**1. SectionMagic: NEW `MagicFeature`** `[0, 919, 1440, 594]` (top border). DOM `notebooks/01-SectionMagic.*`
- `display:flex; align-items:center; justify-content:space-between; position:relative`.
- Background `MagicBkg` (`position:absolute; top:-270px; bottom:-1303px`, 2000 wide, masked `linear-gradient(0deg, transparent 50%, #fff 100%)`): a 2819×2819 line-art SVG at `opacity:.55`, rotating `animation: dGOzbh 120s linear infinite` (`0% { rotate(0) } 100% { rotate(360deg) }`).
- InfoText (`max-width:420px; z-index:1`): icon = **MagicButton** (45×45 animated AI glyph: two circle groups rotating, horizontal `2s linear infinite`, vertical `3s linear infinite`, same keyframes) → H2 heading-2 40/52 "Agentic capabilities built right in" → P 20/30 "The most intelligent AI agent ever made for data analytics — now deeply integrated into your workflows. Hex uses top-tier LLMs to help with every step, from generating SQL to charts to entire analyses." → secondary md "Learn more about AI" → `/capability/ai/`.
- Image right (`max-width:696px`): `pages/product/notebooks/notebook-agent.png` (475×433).

**2. FullWidthQuote: N4** `[0, 1513, 1440, 229]`. Lovable logo, "Kristian K.", "Product, Lovable". “Hex's notebook agent just works. I describe what I want and get working SQL back, without having to juggle between tools. **It's made us 10x faster at turning questions into insights.**”

**3–5. Three "cell collage" features: NEW `CellCollage`** (sections `sharedStyles__Section`). DOM `notebooks/03-…`, `04-…`, `05-…`
- Pattern: a positioned InfoText (`floating-text`, `position:absolute`, `max-width:440px; z-index:2`; 15px icon → H2 heading-2 40/52 → P 20/30 → secondary md "Learn more") plus several **cell screenshots** absolutely positioned around it. Each cell = `ProductIllustration__Wrapper` (`flex column; gap:5px; position:absolute`) → `CellHeader` (24px: label Cinetype 12px `opacity:.5` e.g. "SQL cell", and 2–3 outlined 25×24 icon buttons at `opacity:.4`) → `ProductIllustration__Inner` (`background:#FFF; border-radius:4px; overflow:hidden; box-shadow: rgba(2,2,27,.07) -1px 0 0, rgba(2,2,27,.07) 1px 0 0, rgba(2,2,27,.07) 0 -1px 0, rgba(2,2,27,.07) 0 1px 0, rgba(1,1,27,.3) 0 54px 74px, rgba(0,0,0,.25) 0 14px 74px`) → `<img>`. Some cells add a green "dataframe" output chip (`CellFooter`). Boxes @1440 (page-absolute):
  - **3 "SQL and Python, together in harmony"** `[0, 1742, 1440, 834]`: text at [140,1823]; Python cell `notebooks/python-cell@2x.png` [700,1882,540,278]; SQL cell `sql-cell@2x.png` [380,2132,544,365] with a typeahead popup `sql-typeahead@2x.png` [812,2307,143,67]; sub-copy blocks (`max-width:220px`): "SQL superpowers" / "A first-class query editor, right in your notebook, including:" / list (`padding-left:18px`) Jinja support · dbt integration · Schema browser · Typeahead · Syntax highlighting (left, at y 2203); "IDE-class Python and R" / "Integrated package management, formatting, and AI typeahead and code fixes make editing a breeze." (right, with a small rose dot connector). P: "With Hex, you don't have to choose. Use SQL for what it's great at, and then layer in Python for extra flexibility and power." CTA → `https://learn.hex.tech/docs/getting-started/develop-your-notebook`.
  - **4 "No-code tools for everyone"** `[0, 2576, 1440, 952]`: Table cell `table-cell@2x.png` [668,2705,792,518] (bleeds past the right edge), Pivot cell `pivot-cell@2x.png` [140,3063,680,392], Filter cell `filter-cell@2x.png` [740,3260,484,137]. P: "Browse for data, explore it, and visualize it. Hex supports end-to-end data exploration without queries, code, or any technical requirements." CTA → `https://learn.hex.tech/docs/explore-data/cells/calculations`.
  - **5 "Beautiful, built-in viz"** `[0, 3528, 1440, 1012]`: Map cell `_shared/map-cell@2x.png` [707,3817,573,380], Chart cell `chart-cell@2x.png` [100,3933,742,375], Single Value cell `single-value-cell@2x.png` [1022,4099,288,197], Table Display cell `table-display-cell@2x.png` [470,4144,610,315]. P: "Powerful cells to create interactive charts, maps, and conditionally-formatted tables." CTA → `/product/data-apps/`.
- ≤800: the collage collapses to the copy followed by the cells in normal flow (see `notebooks-390-full.png`).

**6. ReactiveExecutionTout: NEW `ExecutionDag` + REUSE homepage integration card** `[0, 4540, 1440, 1164]`
- Top (`max-width:480px; margin-bottom:390px; position:relative`): InfoText: 15px icon, H2 "Intelligent execution", P "Hex's graph-based execution model makes projects more reproducible, explainable, and performant than traditional data science notebooks.", secondary md "Learn more" → `https://learn.hex.tech/docs/explore-data/projects/project-execution/execution-model#reactive-graph-based-execution-model`.
- DAG illustration: `<img>` `pages/product/notebooks/reactive-dag.png` (1802×1000; `srcset` 2x `reactive-dag@2x.png`), `position:absolute; top:-173px; left:-394px` relative to the top block (spans [-254,4447] → bleeds off both sides, clipped by the row). Over it, "CONNECT TO ANYTHING" chip group at [999,4712]: 5 logo buttons (28×38, R-Button tiny) → `/product/integrations/{snowflake,redshift,bigquery,databricks,dbt}/` and an "And more..." button (168×26, 12px) → `/product/integrations/`.
- Grid (`repeat(3,1fr); gap:20px; max-width:1240px`) of 3 **REUSE `IntegrationCard`** (homepage §4.12 GridItem: illustration 160 tall + H4 + P 14/22 + "LEARN MORE" row, hover lift) in dark: "Infinite data scale" / "Work with all of your data, and push compute down to the warehouse without worrying about memory limits." → `https://learn.hex.tech/docs/cell-types/sql-cells/overview#query-mode` · "Zero hassle" / "Hex is fully hosted, with securely-sharable connections, customized environments, and configurable compute." → `https://learn.hex.tech/docs/explore-data/projects/environment-configuration/environment-views` · "Custom Docker images" / "BYO from ECR or DockerHub, for consistent, reproducible environments." → `https://learn.hex.tech/docs/administration/workspace_settings/custom-images`. Illustrations are inline SVG line drawings (infinity loop, stacked plates, docker crane); copy from DOM.

**7. ForTeamsTout: NEW `WallpaperCta`** `[0, 5704, 1440, 451]`. DOM `notebooks/07-ForTeamsTout.*`
- Wallpaper: inline SVG pattern of tiny comment/cursor/pin glyphs (`ForTeamsTout__Wallpaper`, 2004×1274, `position:absolute; inset:-411px -382px`; uses gradient `#for-teams-wallpaper_svg__b` to fade it).
- Info (`max-width:590px; padding:0 40px; flex column; align-items:center`): 40×30 collaboration icon (`margin-bottom:15px`) → H2 dark GradientHeader 60/78 "Built for teams" (`margin-bottom:5px`) → P 20/30 centered (`margin-bottom:25px`): "Hex is collaborative by default, and makes it easy to share your work as a beautiful report or data app anyone can use." → **primary md** "Learn more" → `/capability/hex-for-teams/`.

**8. SocialTout: REUSE R-SocialTout (G2 + quote)** `[0, 6155, 1440, 764]`. Inner `max-width:1240px; gap:30px; align-items:center; padding:100px 40px`. G2 card 352×404 (`border:1px solid #3A3138; padding:38px 35px; gap:24px; max-width:450px`): `images/misc/g2-awards.svg` (280 wide), H3 "Users love Hex", P "Rated on G2 as an industry leader based on customer reviews. [Check them out →]" (`https://www.g2.com/products/hex-technologies/reviews`). Quote card 698×404: Doximity logo (`pages/product/notebooks/doximity-17b8982d-125x50.svg`), "With Hex and Snowflake, Doximity was able to completely transition off of Jupyter Notebooks.” — headshot `pages/product/notebooks/erik-selin-headshot.jpeg`, "Erik Selin", "Engineering Director, Data Platform at Doximity". ≤800 column.

**9. UseCasesTout: NEW wrapper + N10 TemplateCard grid** `[0, 6919, 1440, 1365]`
- Wrapper `padding:100px 40px 120px; background-color: rgba(245,192,192,.02); background-image: linear-gradient(183.89deg, rgba(245,192,192,.02) 3.22%, rgba(0,0,0,.2) 240…)`. Top (`max-width:860px; margin-bottom:50px; flex column; align-items:center`): H2 dark GradientHeader 60/78 "Build anything with data" (`padding:0 20px 5px`) → P 24/36 300 "Get started with examples of our most powerful notebooks." → link-style button (`margin-top:15px`, 225×50, 16/25 text, arrow-right icon) "Explore all templates" → `/templates/`.
- Grid `repeat(3, 400px); gap:20px` of 6 TemplateCards (category "TEMPLATE"): Ad-hoc exploration (Izzy Miller, Dev Advocate at Hex) · Exploratory Data Analysis (Izzy Miller) · Interactive Data stories (Izzy Miller) · No-code Notebooks · Polyglot Notebooks · SQL Notebooks (Izzy Miller). Descriptions and links (`/templates/exploratory-analysis/<slug>/`) in the DOM; images `_shared/ad-hoc-exploration-5855c5e3-1680x1020.png`, `notebooks/exploratory-data-analysis-1b75379a-1680x1020.png`, `_shared/interactive-data-stories-64aa53c3-1680x1020.png`, `_shared/no-code-notebooks-469fd722-1680x1020.png`, `_shared/polyglot-notebooks-cdd8b6df-1680x1020.png`, `_shared/sql-notebooks-c492b4ae-1680x1020.png`.

No FAQ or OutroTout on this page (it ends with the template grid, then the footer).
### 4.7 `/product/data-apps/`: "Generative Data Apps and Interactive Dashboards | Hex" (dark, V1 layout)
Doc height 9902 @1440 / 12801 @390. Screenshot `data-apps-1440-full.png`. Layout wrapper = §1.5 `V1PageLayout` (content starts at y 200).

**0. AppBuilderHeroTout: NEW** `[29, 200, 1382, 1111]`. DOM `data-apps/00-AppBuilderHeroTout.*`
- Wrapper `flex column; padding-top:50px; position:relative; z-index:1; background-image: radial-gradient(at 50% 100%, rgba(173,142,182,.4), transparent 70%)` (an amethyst glow rising from the bottom behind the app strip).
- Content (`max-width:1000px; padding:0 40px 60px; flex column; align-items:center; gap:20px`): N1 pill "Data apps" | "Read the docs" → H1 dark GradientHeader heading-1 60/78 centered "Share your data in beautiful, governed data apps" (932×240) → P 24/36 300 centered: "For too long, data has been stuck in boring, static dashboards, and locked in complex, technical builders’ tools. Hex brings the speed and power of vibe-coding to your data, without sacrificing trust." → actions (`padding-top:15px; gap:15px`): primary lg "Get started for free" → `https://app.hex.tech/signup` + secondary lg "Request a demo" → `/request-a-demo/`.
- R-Banner minimal: "Trusted by leading data teams"; logos (white, `filter: brightness(0) invert(1)`, 40px tall inside 50px rows): Reddit, Notion (popover), Anthropic, SeatGeek, ClickUp (popover), AllTrails (popover "Since adopting Hex, the data team has churned out a steady stream of analysis, from internal benchmarking to evaluating the effectiveness of metrics." — Matt Palmer, Analytics Engineer; `/customers/alltrails/`).
- **App strip** (`AppGrid`: `display:flex; gap:12px; justify-content:center; transform: translateY(40px); z-index:2`): 5 screenshots 450×327 (`flex:0 0 auto; background:#FFF; border-radius:4px; box-shadow: rgba(2,2,27,.07) ±1px hairlines, rgba(1,1,27,.3) 0 54px 74px, rgba(0,0,0,.25) 0 14px 74px`), centered so the 1st and 5th are cut by the viewport (x = -429, 33, 495, 957, 1419). Static: no scroll or time animation measured. Images: `_shared/app-one@2x.png`, `app-two@2x.png`, `app-three@2x.png`, `app-four@2x.png`, `data-apps/app-five@2x.png` (1200×872).

**1. CodeGenGallery: NEW** `[29, 1311, 1382, 2401]`. DOM `data-apps/01-CodeGenGallery.*`
- Wrapper `max-width:1520px; padding:150px 40px 100px; flex column; gap:100px`.
- Header (`max-width:800px; gap:10px; text-align:center`): H2 dark GradientHeader 60/78 "Prompt, build, share" → P 20/30 (`margin-bottom:25px`): "Hex's agent can build entirely custom generative apps (in beta), backed by your organization's context. Confidently share using Hex's built-in permissions." → links row (`gap:10px`): primary md with a 16px docs icon "Read the docs" → `https://learn.hex.tech/docs/share-insights/apps/generative-apps` (161×42) + secondary md with arrow-right "Get started with Hex" → `https://app.hex.tech/signup` (204×42).
- Hero image frame (`margin-top:50px` via gap; 1302×785; `background:#FFF; border-radius:4px`; the same white-cell shadow as the app strip): `pages/product/data-apps/code-gen-app-builder@2x.jpg` (1920×1157), the App builder UI showing "Strong Growth, Shifting Patterns" with the agent side panel.
- Grid section (`max-width:1240px; padding:0 40px; flex column; gap:20px`): sub-header row (`display:flex; gap:20px; align-items:baseline`): H3 heading-3 28/36.4 "Not sure what to build?" + P 14/22 300 "Here are six copy-and-paste prompts to build stunning generative data apps in Hex."
- Grid `repeat(3,1fr); gap:15px` (377×460 cards). **GalleryCard**: dark glass `Card` with `padding:12px; gap:12px; align-items:center` and the hover-lift behaviour (`transition: border, transform, box-shadow` 529ms spring; hover `translateY(-4px)` + `box-shadow: rgba(255,255,255,.08) 0 0 24px 0 inset, rgba(255,255,255,.15) 0 .5px 0 .75px, …`). Image frame 353×264 (`background:#FFF; border-radius:4px; overflow:hidden; box-shadow: rgba(245,192,192,.1) 0 0 0 1px, rgba(2,2,27,.12) 0 8px 24px 0`, image `object-fit:cover`) → content `padding:12px; gap:4px`: tag (`.annotation` 10/15.71, `#E3B2B3`, 1px border, `padding:1px 4px; margin-bottom:12px`) → H4 heading-4 → P 14/22 300.
  - **Click copies a long prompt to the clipboard**; a cursor tooltip "Copy prompt" (duplicate icon) shows on hover and changes to "Copied!" after click. The six prompts (1.6–2.1k chars each) are in `specs/product-data-apps-prompts.json`.
  - Cards (tag / title / use case / image in `pages/product/data-apps/`): Dashboard / "Revenue (or any KPI) command center" / "Weekly business reviews where leadership wants the full story on one screen" / `gen-app-revenue-command-center@2x.jpg` · Editorial style / "Lifecycle explorer with global time grain" / "Lifecycle deep dives where every chart and table needs to roll up to the same period" / `gen-app-lifecycle-explorer@2x.jpg` · Interactive / planning / "Forecast vs. actuals storyboard" / "Board-ready reporting where you need to explain why you missed (or beat) the number" / `gen-app-forecast-vs-actuals@2x.jpg` · Interactive / planning / "What-if scenario simulator" / "Planning meetings where someone asks "but what if we changed X by 5%"" / `gen-app-what-if@2x.jpg` · D3 visualization / "Animated network or flow visualization" / "Showing relationships, paths, or movement that a bar chart can't capture" / `gen-app-flow-viz@2x.jpg` · Audio / playful / "Sonify your metric" / "Conference demos, executive offsites, the moment in the keynote where you need a laugh" / `gen-app-sonify@2x.jpg`.
- ≤1000 2 columns, ≤600 1 column.

**2. FeaturesTout: NEW `SnakedSections`** `[29, 3712, 1382, 3382]` (top border `#3A3138`). DOM `data-apps/02-FeaturesTout.*`
- Inner `max-width:1240px; padding:100px 40px 120px`. Five rows (`SnakedSections__Section`: `display:flex; gap:80px; align-items:center; justify-content:space-between`, alternating `row` / `row-reverse`) separated by **ConnectingLines** (543×121, centered, `position:relative`): a 1px horizontal `WideLine` `#3A3138` at `top:60px`, plus two 1×60 vertical stubs from pseudo-elements: `::before` at the right end (`left:542px; top:0`) and `::after` at the left end (`left:0; top:61px`). Together they draw an S-shaped connector from one row to the next (mirror it when the row direction flips). Each row: R-InfoText (15px icon, H2 heading-2 40/52 — the first line can be a span, e.g. "Drag, drop," / "data app", P 20/30, secondary md "Learn more") + an illustration made of absolutely positioned white cells (same `sharedStyles__CellIllustration` frame and shadow as the Notebooks collage).
  - "Drag, drop, data app" / "Hex’s classic app builder and complete set of components make it easy to build interactive experiences." → `https://learn.hex.tech/docs/share-insights/apps/app-builder`. Cells: `add-to-row@2x.png` [601,3813,699,409], `chart-drag@2x.png` [944,4107,296,250] (overlapping, static).
  - "Beautiful visualizations" / "Interactive charts, tables, and maps bring your data to life— no coding required." → `https://learn.hex.tech/docs/explore-data/cells/visualization-cells/chart-cells`. Cells: `_shared/map-cell@2x.png` [267,4517,573,380], `data-apps/table-display-cell@2x.png` [140,4753,570,249].
  - "Follow-up question? Just ask." / "Hex's agent can explore, summarize, and interact with your apps, so you can get the details you need." → `https://learn.hex.tech/docs/explore-data/chat-with-app`. Cell: `chat-with-app@2x.png` [550,5163,750,524].
  - "Explore, drill, filter" / "Hex native charts and tables automatically come ready to be drilled down, filtered, or used as a starting point for a completely new exploration." → `https://learn.hex.tech/docs/share-insights/explore`. Cells: `explore-view@2x.png` [140,5848,749,424], `explore-view-dropdown@2x.png` [261,6064,173,217].
  - "Answers right where you need them" / "Reports are always up to date with automatic upstream data syncs and scheduled runs via Slack or email." → `https://learn.hex.tech/docs/share-insights/scheduled-runs`. Cells: `scheduled-run-slack@2x.png` [608,6434,692,364], `scheduled-run@2x.png` [688,6630,347,344].
- ≤800 rows stack (copy then illustration), connecting lines hidden.

**3. SocialTout: REUSE R-SocialTout (two quote cards)** `[29, 7099, 1382, 558]`. Inner `max-width:1240px; gap:30px`. Cards 685×358 each: Infinite Lambda (`_shared/infinite-lambda-63850388-110x50.svg`) "Hex helped us provide a transparent and intuitive experience for the World Health Organization to make more informed decisions about how to reduce emissions.” — Nina Anderson (`data-apps/nina-anderson-headshot.jpeg`), Head of Pre-Sales Engineering at Infinite Lambda · Inventa (`_shared/inventa-2b33cd7f-132x50.svg`) "Hex enables us to deploy customer-facing analytics in days rather than weeks or months. Hex gives us super powers.” — Daniel McAuley (`data-apps/daniel-mcauley-headshot.jpg`), Data Lead at Inventa.

**4. FeedbackLoopTout: NEW `CollageCta`** `[100, 7657, 1240, 1092]`. DOM `data-apps/04-FeedbackLoopTout.*`
- Centered copy: H2 dark GradientHeader 60/78 "Tighten the" / "feedback loop" → P 20/30 centered: "When it's time to share your masterpiece, one URL keeps everyone on the same page — literally. Edits, comments, and revisions are fast and easy with real-time multiplayer and live updates." → primary md "Explore collaboration" → `/capability/hex-for-teams/`.
- Collage of 4 white cells (same frame/shadow), absolutely positioned: `app-builder-with-chart@2x.png` [261,8244,919,500] (base), `share-modal@2x.png` [764,8144,416,264] (top right), `comment-popup@2x.png` [120,8412,280,282] (left), `code-diff@2x.png` [840,8552,480,222] (bottom right). The bottom of the collage overlaps the TronDivider of the next section.

**5. OutroTout: N5** `[29, 8749, 1382, 571]`.
### 4.8 `/product/embedded-analytics/`: "Embedded Analytics for Product Teams and Builders | Hex" (dark, V1 layout)
Doc height 6551 @1440 / 9135 @390. Screenshot `embedded-analytics-1440-full.png`.

**0. Hero: N10 `V1Hero` + video + R-Banner minimal** `[98, 200, 1244, 1214]`
- `Hero__Panel` (`padding:84px 0`): H1 74/96.2 "Embedded **analytics,**" / "built for **agility**" (the second word of each line picks up the rose end of the 55° dark gradient) → P 20/30 "Seamlessly embed powerful data experiences for your customers." → primary md "Get started for free" (`https://app.hex.tech/signup`) + secondary md "Request a demo".
- Video (`EmbeddedAnalyticsPageContent__VideoWrapper`, 840×473 at [300,671]): `<video autoplay loop muted playsinline>` `pages/product/embedded-analytics/embeddedanalyticspagecontent-89579e06.mp4` (1920×1080) showing the embedded "Sales by Brand" app. Frame `max-width:840px; margin:16px 0; aspect-ratio:840/472.5; background:#FFF; border-radius:4px; overflow:hidden; box-shadow: rgba(0,0,0,.32) 0 16px 32px -14px`; video `object-fit:contain`.
- R-Banner minimal "Trusted by leading data teams" (same 6 logos as data apps, with Notion/ClickUp/AllTrails popovers).

**1. V1H2Panel `.pt--small`** `[98, 1414, 1244, 174]`: H2 "Drive growth" `<br>` "with stunning analytics" (60/78 PP Formula 800, ls -1.5px).

**2–5. V1TwoUp ×4, `.alternate-odd`** (each 592 tall; odd rows reversed). Copy column = R-InfoText with an **H6 eyebrow** (IBM Plex Mono 700 12/18.852, ls 2.568px, uppercase, `#99797D`), H2 heading-2 40/52, two 20/30 paragraphs, optional secondary md CTA. Media = single flat PNG composite (no animation):
- `BUILD` / "Ship faster" / "Use Hex's fast, flexible notebook to deliver data insights to your customers in minutes instead of weeks or months." / "With queries, code, and no-code living in one canvas, your data team can build stunning visualizations for your engineers to embed." / "Discover Notebooks" → `/product/notebooks/` / `embedded-analytics/notebooks-img.png` (864×636, shown 918×676, bleeds right).
- `CUSTOMIZE` / "Make it yours" / "Customize your embedded app for a white-labeled user interface, indistinguishable from the rest of your product." / "Easily preview and test your embedded experience to make sure it meets the quality bar your customers know and love." / "Discover Data Apps" → `/product/data-apps/` / `customize.png` (680×520, left).
- `EMBED` / "Easy, breezy integration" / "Light-weight and easy to use, the Hex Embed API is designed for developer-friendly implementation." / "No bulky SDK integrations — just hand off your beautiful dashboards for deployment." / (no CTA) / `embed.png` (748×532, right).
- `SCALE` / "Low floor, high ceiling" / "Build one project to power tailored data apps for all your customers, without engineering overhead." / "Start small, and scale as you grow new revenue streams from embedded experiences." / (no CTA) / `scale.png` (748×669, left).

**6. R-SocialTout (two quote cards, no headshots)** `[29, 3956, 1382, 666]`: MedScout (`embedded-analytics/customer-logo-ab190c6c-168x50.svg`) "Hex has completely transformed our analytics capabilities. We can now create new embedded analytics dashboards in minutes, and the platform's flexibility allows us to easily adapt to our customers' diverse needs.” — Ronald Miller, Engineering Manager, Data at MedScout · Candidly (`customer-logo-5fb6f6dd-166x50.svg`) "Before Hex embedded analytics, we dealt with authentication barriers that complicated our reporting workflow. Now, our clients have a seamless experience where their personalized analytics are baked right into our secure portal.” — Sam Martin, Data Science Manager at Candidly.

**7. V1H2Panel `.pt--large`** `[98, 4622, 1244, 334]`: "Deliver a first-class user experience".

**8. NEW `IconFeatureRow`** (`EmbeddedAnalyticsPageContent__Cards`) `[98, 4961, 1244, 334]`: grid `repeat(3,1fr); gap:48px; padding:80px 0 120px` (383 wide columns), each `flex column; align-items:center; gap:8px; text-align:center`: 20×20 icon (`#E3B2B3`, 26 tall box) → H3 `.heading-4` 20/26 `#FFFFFF` → P 14/22 300. "Seamless authentication" / "A single API call handles pass-through authentication and row-level security, so your customers simply log in to your product for immediate access to only their own data." · "Interactive analytics" / "Go beyond static dashboards, and build dynamic data apps that take in user inputs. Let your customers export CSVs and PDFs for their own analyses." · "Real-time data" / "Keep your customers’ dashboards fresh with live queries against your cloud data warehouse for the latest and greatest data." (≤800 1 column.)

**9. OutroTout: N5** `[29, 5295, 1382, 675]` ("Monetize your data with embedded analytics").

### 4.9 `/capability/exploratory-analysis/`: "Exploratory Data Analysis Tool for Data Teams | Hex" (dark, V1 layout)
Doc height 8072 @1440 / 10349 @390. Screenshot `capability-exploratory-analysis-1440-full.png`.

**0. N10 V1Hero** `[98, 200, 1244, 427]`: H1 "The fastest way to why" (74/96.2, 1001×102) / P "Go from quick question to deep dive to data app all in one place, all in the most complete workspace for exploratory analysis." / primary md "Get started for free" + secondary md "Request a demo". No banner.

**1. R-SocialTout single quote card, centered** (`Quote__UseCaseQuote`, `max-width:816px; margin:auto`) `[29, 627, 1382, 489]`: card 736×289 "Hex is a fantastic tool for data exploration. We use it for everything from early exploration and experimentation to powering apps I feel good about sharing externally.” — Katie R., Head of Data (no logo, no headshot).

**2. V1H2Panel `.pt--medium`**: "Goodbye fragmentation, hello insights" / "Hex has everything you need to keep pace with your organizationʼs toughest questions. Thereʼs no tool switching, no extra tabs, and no copying and pasting."

**3–7. V1TwoUp ×5, `.alternate-even`** (even rows reversed: 1st row has media right). Copy = R-InfoText H2 40/52 + P 20/30 + secondary md "Learn More".
- 3 "Explore on your terms" / "Hex combines SQL, Python, pivots, spreadsheet formulas, and no-code viz together. Use the best tool for the job or the best tool for you." → `/product/notebooks/`. **Media NEW `ScrollingCells`** (`DataExplorationVisual__Content`, 680×540, `padding:0 20px; border-top/bottom:1px solid #3A3138; overflow:hidden`) → inner column (`flex column; gap:30px; padding:40px 0`) of 6 cell screenshots 640 wide (`cell-pivot`, `cell-chart-1`, `cell-filter`, `cell-sql`, `cell-python`, `cell-chart-2` @2x, in `pages/product/capability-exploratory-analysis/`), auto-scrolling: `animation: animateDataExp 45s ease-in-out infinite` with the effective keyframes `0% { translateY(0) } 50% { translateY(calc(-1900px + 60vh)) } 100% { translateY(0) }` (a second, shadowed definition with `+60vh` exists in the stylesheet; the later one wins).
- 4 "Data on-demand" / "The data you need is never out of reach. Easily find trusted data for your project or instantly connect to new sources wherever they live." → `/product/integrations/`. Media `integrations_graphic.png` (720×675, shown 680×638).
- 5 "Fast feedback loops" / "Rapid iteration has a new standard. Comments, alerts, and snapshots meet multiplayer collaboration, so nothing’s lost to a screenshot or deck." → `/capability/hex-for-teams/`. Media `team-work@2x.png` (748×631).
- 6 "Get an AI assist" / "Not a pythonista? Need to fix a bug? Want to shortcut a query? AI in Hex can help with that AND help you answer questions faster." → `/capability/ai/`. Media `magic_illustration@2x.png` (640×609).
- 7 "Go from analysis to data app in minutes" / "Toggle the drag-and-drop builder to unleash your analysis to stakeholders. No crazy workarounds. No clunky dashboards. Just insights to drive business decisions." → `/product/data-apps/`. **Media `ActionableAppsIllustration`**: `actionable-apps-main@2x.png` (680×587) with a floating chart `actionable-apps-drag@2x.png` (`.drag-img { position:absolute; width:400px; bottom:-145px; left:-110px; animation: animateDragImg 7s ease-in-out infinite }`, `@keyframes animateDragImg { 0% { translate(0,0) } 50% { translate(30px,-15px) } 100% { translate(0,0) } }`).

**8. V1H2Panel `.pt--large`**: "Get started fast with components and templates" / "Start from commonly used query logic unique to your organization or use one of Hexʼs pre-built templates."

**9. N10 TemplateCard grid** (`Recommendations__Grid`, `padding:64px 0 120px`) `[98, 5824, 1244, 1090]`: Ad-hoc exploration · Interactive Data stories · No-code Notebooks · Polyglot Notebooks · SQL Notebooks (all TEMPLATE, `/templates/exploratory-analysis/<slug>/`) · **SQL Notebooks > SQL Runners** (tag `BLOG`, author line "Izzy Miller · April 13, 2022", "SQL finally gets literate programming", → `/blog/sql-notebooks/`, image `pages/product/capability-exploratory-analysis/sql-notebooks-sql-runners-79c7859e-1680x1020.jpg`).

**10. OutroTout: N5** `[29, 6919, 1382, 571]`.
### 4.10 `/product/switching-to-hex/`: "Switching to Hex: Evaluate, Pilot, and Migrate | Hex" (dark, T3 long-form guide)
Doc height 10622 @1440 / 18185 @390. Screenshot `switching-to-hex-1440-full.png`. About 2,365 words of article prose; per the brief, only the structure is specced below. Full markup and copy are in `reference/pages/product/dom/switching-to-hex/00-SwitchingToHexPageContent.html`.

**Page shell: NEW `GuideLayout`** (`SwitchingToHexPageContent`, 1440×9365)
- Row bg `#14141C` + gradient; subgrid `padding-bottom:80px; gap:50px` (between chapter cards). A 152px top band with 1px vertical rules every 2 grid columns (x = 259, 489, 720, 950, 1180, 1411; `#2B252C`).
- Each chapter is a **document card**: condensed grid with 51px document margins on both sides (`Layout__DocumentMargin`: `repeating-linear-gradient(transparent 0 255px, #2B252C 255px 256px)` = a tick every 256px, plus a 1px inner border) around `DocumentGrid` (1280 wide; `background:#14141C; border-top/bottom:1px solid #3A3138; padding-top:56px`) with four 8×8 rose corner brackets (`1px solid #E3B2B3`). Inner `DocumentContainer` grid `56px 1fr 56px`.
- **CopyLinkButton** at each card's top-right (`position:absolute; top:0; right:0; padding:12px; z-index:1`, box `#0F0F15` with a checker background, left/bottom 1px `#3A3138` borders, paper texture, a 6×6 rose bracket at its bottom-left): 56×56 round glass button (`radial-gradient(circle at 66.66% 200%, #1D1D29 0%, #0F0F15 190%)`, dark glass shadow, link icon `#E3B2B3`) + label below (`.annotation` 10px uppercase `#99797D`, right-aligned) "Copy link"; after click the label swaps to "link copied" and the chapter URL (with `#anchor`) is copied.

**Chapter 0: hero + table of contents** `[80, 202, 1280, 1312]`
- Top-left `Features` list (`position:absolute; top:12px; left:12px`): `.annotation` 10px uppercase lines "AI POWERED / POLYGLOT WORKFLOWS / REAL-TIME / COLLABORATIVE / NO-CODE", masked `linear-gradient(rgba(0,0,0,.6) 12px, transparent 80px)` so lower lines fade out.
- H1 `.heading-1` at **100px / 130px**, ls -3.08px, dark 55° gradient: "Switching to Hex" (`margin-top:115px`). P 20/30: "From fragmented tools to a unified, AI analytics platform: a guide to getting started on agentic analytics with Hex, from pitch to evaluation to migration."
- TOC: 3 groups (`flex column; gap:10px`), each a group header link (IBM Plex Mono 14px ls .05em `#F5C0C0`, `padding:24px 0 16px; gap:16px`, 16px down-arrow icon at `opacity:.6`, `border-bottom:1px solid #E3B2B3`) followed by H4-style anchor rows (`.heading-4` 20/26 `#FFFFFF`, `padding:16px 0 12px`, dividers). Row hover: the text slides `translateX(48px)` (529ms spring) and a 32×32 round arrow button (`#0F0F15`, dashed rotating ring `rotate 8s linear infinite`, paper texture) slides in from the left (`translate(-48px,-50%) rotate(-.25turn)` → `translate(0,-50%)`, opacity 0 → 1). Hidden ≤800.
  - "Why data teams switch to Hex" (`#why-data-teams-switch`): What is Hex? · Why data teams are looking for a change · Why data teams love Hex · Common objections (and why teams switch anyway)
  - "How to POC Hex" (`#how-to-poc-hex`): What is a POC with Hex? · How it works · What success looks like · Why teams love running pilots with Hex · Getting started today
  - "Migrate to Hex" (`#migrate-to-hex`): Set up for AI analytics · What migration looks like · Think through your migration

**Chapters 1–3: article sections** (`[80, 1564, 1280, 3735]`, `[80, 5349, 1280, 2251]`, `[80, 7650, 1280, 1635]`)
- Chapter H2 (`.heading-1`-scale 60/78 dark gradient): "Why data teams switch to Hex", "How to POC Hex", "Migrate to Hex".
- Each sub-section (`Section`, `id` = anchor, `scroll-margin-top:82px`): grid `grid-template-columns: minmax(0,300px) 1fr; gap: clamp(16px, -.41rem + 5vw, 56px); padding-bottom:40px` (≤800 1 column). Left = **sticky** H3 (`position:sticky; top:81px; border-top:1px solid #3A3138; padding-top:35px`; `.heading-3` at 1.75rem (28/36.4), balance). Right = content column (`border-top:1px solid #3A3138; padding-top:28px; flex column; gap:20px`): paragraphs 16/24 300 (`max-width:75ch`, `<strong>` 500 white), bulleted lists (`disc; padding-left:20px; gap:15px`), numbered lists (`decimal`, same), H4 sub-heads (heading-4), embedded **R-SocialTout `CustomerQuoteCard`s** (4 inside the article: Lovable, Customer.io, Uken Games (`/images/logos/uken-games-logo.svg`), PandaDoc; wrapper `margin:15px -20px 15px -45px`), and a link-list block (dotted `2px dotted #3A3138` rows, 230px label column + text).
- Structure and approximate length (words of body prose):
  - **Why data teams switch to Hex**: What is Hex? (2 paragraphs, ~80 words) · Why data teams are looking for a change (2 paragraphs + 4-item bullet list, ~230) · Why data teams love Hex (4 H4 blocks: Deeper insights, 10x faster / Self-serve in plain, natural language / Observe agent responses and improve context over time / The power of an integrated platform; each 1–2 paragraphs + a quote card, ~350) · Common objections (and why teams switch anyway): a 6-item **R-Faq accordion without heading** (objection quotes as questions; answers in `specs/product-faq.json` → `switching-to-hex`).
  - **How to POC Hex**: What is a POC with Hex? (3 paragraphs + 3-item numbered list, ~150) · How it works (2 paragraphs + 5-step numbered list, ~150) · What success looks like (2 paragraphs + 4-item bullet list, ~170) · Why teams love running pilots with Hex (H4 "Fast to start. Structured for success. An immersive experience." + 2 paragraphs, ~110) · Getting started today (H4 "Start a trial" / H4 "Contact Sales" with CTA buttons, ~60).
  - **Migrate to Hex**: Set up for AI analytics (H4 lead sentence + paragraphs/list with links to learn.hex.tech tutorials, ~250) · What migration looks like (paragraphs + list, ~200) · Think through your migration (H4 "Want to get an early sense of what migration looks like?" + CTA, ~80). A handwritten-style sign-off annotation (`RightAnnotation`: "Yours truly ↴" / "the data team" / "xoxo", 10px uppercase right-aligned) closes the article.
- External/internal links in the prose: `https://learn.hex.tech/docs/explore-data/threads#threads-quickstart-guide`, `https://learn.hex.tech/tutorials/connect-to-data/setup-for-ai-agents`, `https://learn.hex.tech/tutorials/develop-notebooks/notebook-agent-best-practices`, `https://learn.hex.tech/tutorials/quickstart/admin-101`, `https://trust.hex.tech/`, `/request-a-demo/`, `https://app.hex.tech/signup`.

**After the article: N6 CustomerQuotesMarquee** `[0, 9365, 1440, 670]` (top border). 6 cards → one copy 2592px, `animation: scroll 86.4s linear infinite` (the same 30 px/s). Cards show **logo + quote only (no author row)**. Pairings exactly as rendered on the live page (the CMS pairs some logos with other customers' quotes; reproduce as-is): Notion logo / "Our vision for Notion's data team is that anyone, regardless of technical proficiency, is comfortable using data to answer their own questions — and Hex enables that.” · Inventa logo / "Hex's notebook agent just works. I describe what I want and get working SQL back, without having to juggle between tools. It's made us 10x faster at turning questions into insights.” · Brex logo / "Hex enables us to deploy customer-facing analytics in days rather than weeks or months. Hex gives us super powers.” · Ramp logo / "Hex is bridging the gap between self-service data access and self-service data analytics. Threads allows my users to discover data, create charts, and even perform analysis — all via natural language.” · Product Hunt logo / "The Hex agent really sped up exploratory analysis for me, especially when juggling multiple datasets. I love being able to make edits across the notebook without bouncing between tools.” · Algolia logo / "The Notebook Agent feels like the future. As a former data scientist, it feels like a junior version of myself, requiring a little guidance, but an immediate accelerant to my data work.”

No OutroTout or FAQ section after the marquee (the footer follows).
### 4.11 `/product/integrations/`: "Data Integrations for Analytics and Data Teams | Hex" (dark, T4)
Doc height 4001 @1440 / 6587 @390. Screenshot `integrations-1440-full.png`. V1 layout (§1.5). Content column `[140, 200, 1160, …]`.

**0. HeadingWithCallout: NEW** `[140, 200, 1160, 236]` (`display:flex; align-items:center; margin-bottom:60px`)
- Left (`max-width:600px`): H1 heading-1 60/78 **solid white** "Integrate with" + block span "your whole stack" (`margin-bottom:20px`) → P 20/30 300: "Hex brings of all your favorite tools, languages, and data sources together in one platform." (sic, copy as-is).
- Right (`margin-left:190px`): **Callout** (`max-width:370px; position:relative`): inner `padding:25px 35px; font-size:16px; line-height:24px; background: color-mix(in srgb, var(--highlightColor) 5%, transparent); border-left:1px solid var(--highlightColor)` (`#F5C0C0`); text "Don't see what you're looking for? Drop us a line at [partnerships@hex.tech](mailto:partnerships@hex.tech)." (link underlined `#E3B2B3`). Icon bubble 35×35 (`position:absolute; top:21px; left:-18px; border-radius:50%; background:#01011B; border:1px solid #F5C0C0`) with a 15px lightbulb in `#F5C0C0`.

**1–6. Category lists: NEW `IntegrationCategory` + NEW `IntegrationTile`** (`IntegrationsPageContent__List`: `flex column; gap:30px; margin-bottom:50px`)
- Heading block (`gap:10px`): H3 heading-3 28/36.4 → P 16/24 300 balance (`max-width:926px`).
- Grid `repeat(4, 1fr); gap:20px` (275×200 tiles; tile height 180 ≤1000, 150 ≤800, 120 ≤600; ≤800 fewer columns).
- **Tile**: `display:flex; flex:1 1 0; height:200px; background: color-mix(in srgb, var(--fg100) 75%, transparent)` → full-size R-Button secondary (`width:100%; height:100%; padding:0; border:1px solid color-mix(in srgb, #AD8EB6 30%, transparent 70%)`, hover bg `#2B252C` + border `#6A565B`, with the corner-line hover brackets) → centered logo `<img>` (Sanity SVGs, white versions, ~40–60px tall).
- Special tile "+ local files": not a link; label "+ local files", a 1px rule, then a **Rotator** of file extensions (`.csv .json .parquet .avro .xlsx .txt`): a 50px-tall overflow-hidden window whose inner list moves `translateY(0 → -50px)` with `transition: transform .8s cubic-bezier(.25,.1,.25,1)`, then the first item is moved to the end and the transform resets without transition. Measured step every **≈1.25 s** (same mechanism as the footer emoji rotator).
- Categories (full data incl. logo paths and hrefs in `specs/product-integrations.json` → `index.categories`):
  - Storage & compute — "Hex sits right on top of your data warehouse. Data can be queried in-database or cached in a Hex dataframe." — AWS (`/product/integrations/aws/`), ClickHouse, Databricks, Dremio, Google BigQuery, MariaDB, Materialize, MotherDuck, MS SQL Server, MySQL, Postgres, Snowflake, Trino, + local files.
  - Metadata & metrics — "Hex syncs with metadata and semantic layer tools. Define metrics and data models wherever you like, and Hex can read them." — AtScale, Cube, dbt.
  - Data catalogs & observability — "Enterprise observability and cataloging tools can read Hex metadata for lineage and monitoring." — Elementary, Monte Carlo, Select Star.
  - Code sync & versioning — GitHub, GitLab.
  - Machine Learning — Snowpark ML.
  - Orchestration & workflows — Airflow, Dagster, Prefect.
- Detail pages that exist on hex.tech but are **outside this recon group** (linked from the index): `/product/integrations/{aws, atscale, cube, elementary, gitlab, materialize, monte-carlo, motherduck, select-star, snowpark-ml}/` (plus `snowpark-container-services` from Snowflake). `aws` is the page `athena`/`redshift` redirect to and is specced here via those two slugs.

---

## 5. Template T5: integration detail page (one template, 17 URLs)

Route `/product/integrations/:slug/`. Dark V1 layout (§1.5). All per-page values (title, meta, logo, H1, description, CTAs, quotes, How-it-works HTML, right-side illustration, custom blocks, FAQ, video, external links) are in **`specs/product-integrations.json` → `pages.<slug>`**. `athena` and `redshift` **301-redirect to `/product/integrations/aws/`** (same document, H1 "AWS Data, meet Hex"); route both to one AWS page or issue a redirect.

Screenshots: `integrations-bigquery-1440-full.png` (two-column + quote + links), `integrations-airflow-1440-full.png` (single-column + video), `integrations-snowflake-1440-full.png` (all optional blocks), `integrations-athena-1440-full.png` (AWS custom blocks); the other 13 are in the same folder.

Block order (each optional except 1, 3, 4):

**1. Info (hero)** (`integrationTemplate-styles__Info`: `flex column; align-items:center; max-width:950px; padding:0 40px; margin:0 auto 80px`)
- Banner label link `Integration` → `/product/integrations/` (`Banner__LinkWrapper`: `align-self:center; margin-bottom:-10px; padding:0 3px; z-index:1`; Cinetype Mono 12px/12px capitalize `#E3B2B3`; preceded by a small reversed arrow svg `rotate(180deg)` filled `#F5C0C0`). It sits on the top edge of:
- Logo box (`--cutout-width:7ch`; `padding:27px 35px 17px; margin-bottom:40px; position:relative`): `::before` 1px `#3A3138` border clipped by a polygon to leave a 7ch gap at the top center for the label; `::after` 8px-tall tick marks (`border-left/right:1px solid #6A565B`) at the gap edges, `translateY(-50%)`. Logo `img { height:60px }` (e.g. BigQuery 132×60; Airflow inline SVG).
- H1 PP Formula SemiExtended 700 60/78 (ls -1.848px) solid white, centered, `margin-bottom:20px`.
- P 20/30 300 centered, `max-width:530px; margin-bottom:25px`.
- Actions (`padding-top:20px; gap:15px`): usually primary md "Get started" → `https://app.hex.tech/signup`. Snowflake: primary "Talk to sales" + secondary "Learn more"; ClickHouse: "Try Hex free for 30 days" (`https://app.hex.tech/signup/clickhouse-30`) + "Try ClickHouse free for 30 days" (`https://clickhou.se/hex-2026`).

**2. QuotesMultiple** (optional; bigquery, dbt, snowflake) (`[29, 876, 1382, 308]`): full-bleed band `background:#0F0F15; border-top/bottom:1px solid #3A3138`. One quote = centered single column; two quotes = 2 columns with a vertical `GridLines__GridRule` (`#2B252C`) between. Each: logo (`max-width:200px; object-fit:contain; margin-bottom:16px`, white) → `<q>` `.text-l` 20/30 300 centered balance (`max-width:576px`) → attribution (`padding:0 32px`): name 14/22 400 + company `.annotation` (`margin-top:16px`). This is the same visual as **R-TwoUpStories** (homepage two-up) minus the bold emphasis, so REUSE it with a `columns` prop.

**3. TronDivider** (R-Tron, dark) then **4. How it works** (`integrationTemplate-styles__Content`: `margin-bottom:100px`; inner `padding-top:80px; flex column; gap:100px`)
- `MainContent`: `display:flex; max-width:1240px; padding:0 40px; margin:0 auto` (≤1000 column).
  - Text column (`flex:1 1 0`): H2 heading-2 40/52 "How it works" (`margin-bottom:20px`) → **RunningText** rich text: **IBM Plex Sans 18px / 32px**, paragraphs `margin-bottom:24px`, links underlined, lists as authored (Airflow/Dagster/Prefect write bullets as "- " text inside one paragraph; keep as-is) → CTA row (`padding-top:20px; gap:15px`) usually primary md "Get started"; Snowflake "See marketplace listing" (`https://app.snowflake.com/marketplace/providers/GZTYZASX5BX/Hex`).
  - Right column (`flex:1.5 1 0; margin-left:50px; position:relative`; ≤1000 full width, `margin-top:60px`), one of:
    - **`DataConnectionIlly`: NEW mock** (bigquery, databricks, dbt, dremio, mariadb, ms-sql-server, mysql, postgres, trino): `flex column; align-items:center; gap:60px` (666×310). (a) Stack of 3 white connection cards (front 280×72, `padding:15px; border-radius:3px; background:#FFF; box-shadow: rgba(1,1,27,.1) 0 4px 12px 0; color:#01011B`; two smaller cards behind offset 8/16px up and inset 10/20px, fading): row = connection name (IBM Plex Mono 12px, with the warehouse icon) + "2 cells" badge (`#3E277A` on `#EFEBFF`, radius 2, `padding:0 5px`, 12/20) → meta "Atriedes, Inc. | Last updated: 3 min ago" (12px `#717A94`, 1×12 divider `#3F4257`). (b) A rose highlight frame (`background: rgba(245,192,192,.2)` with `1px solid #F5C0C0` on three sides, `±15px` outside) joins the card to (c) a 500-wide SQL cell (white card, `SQLCell__Source` badge top-right on `#F8FAFB`; code IBM Plex Mono 12/19, `padding:12px 0`, keyword spans blue/pink/teal) with a `dataframe` output pill (IBM Plex Mono 11/14 `#43D59D` on `rgba(67,213,157,.2)`). dbt adds a schema table card ("vehicle_destinations · 16 cols, 192 rows", Model/Tests tabs, columns VEHICLE_ID string, MODEL string, SPEED number, BUILD_DATE datetime). dremio, postgres and trino show only the card stack. SQL text per page is in the JSON (`howItWorks.right.sql`); the default is `select / cast({{timeframe}} as timestamp) as month, / ship, destination, / sum(spice_tons) as spice_tons / from atreides.vehicle_destinations / group by 1,2,3`.
    - **Image**: clickhouse (`pages/product/integrations-clickhouse/clickhouse-…gif`, an animated GIF 1728×1080 shown 651×407), snowflake (`integrations-snowflake/snowflake-98c60e5e-1587x1026.png`, a product collage), aws (`_shared/aws-a9c1a748-1280x1312.png`, the hub diagram with Athena/Redshift/RDS/S3/ECR/IAM around a Hex disc).
    - **None** (airflow, dagster, prefect, github): `layout: single-column-centered`, the text column is centered at ~444px wide.
  
**5. Custom blocks** (optional; `integrationTemplate-styles__CustomComponents`):
- **AWS** ("AWS connections" left column with H4 sub-sections Athena / Redshift / RDS / S3 / ECR, each P 18/32 + an underlined "Learn more about … →" link; right column "IAM role support across every AWS connection" + paragraph + "Read the changelog →" `https://learn.hex.tech/changelog/2026-06-25`). Uses `TwoUpColumns` (`grid 1fr 1fr; gap:40px; margin:48px 0`).
- **Snowflake**: "Why is Hex great for Snowflake?" (centered header `IntegrationComponentHeader`: `max-width:80%; padding-top:40px; gap:16px`) + 3 outline cards with screenshots (Data apps / Data science / Enhanced self-service; images `integrations-snowflake/data-science-4d6a3f6c-1680x1020.png`, `enhanced-self-service-f7b3b7c7-1680x1020.png`, Data apps from the DOM; N10 TemplateCard look); "Hex offers a new approach to data and analytics" + 6 cards (`CardsGrid`: `repeat(3,1fr); gap:24px`; `CardItem`: `padding:24px; border:1px solid #3A3138`; a 480×99 header PNG (icon art, e.g. `integrations-snowflake/native-data-connection-4529b388-480x99.png`), H4, P 14/22, full-width secondary md button): Native data connection / No-code exploration / AI code generation / Governed data models / True AI model residency / Secure OAuth support (buttons "Discover notebooks", "Discover data apps", "Discover Magic AI", "Discover semantic models"); "How does Hex compare to Snowflake Notebooks?" two-column comparison (Data Exploration in Snowflake / Multiple products vs Hex / One Platform for all data workflows, each with a paragraph).
- **Databricks**: 2 headings of custom content (see DOM `integrations-databricks/`).
- Exact copy for all custom blocks is in the DOM files; headings list in the JSON (`customBlocks.headings`).

**6. FAQ** (optional; databricks, snowflake): R-Faq, heading "FAQ", 1 item each ("How is Hex different from what Databricks offers?" / "How is Hex different from what Snowflake offers?"); answers in `specs/product-faq.json`.

**7. See it in action** (optional; airflow, dagster → Loom `63b97765da0942ae8fc3a208490d31a4`; snowflake → Loom `35f54d87168a4fb6a15b93e123f002d0`; clickhouse → YouTube `JS_MKfeNOP0`) (`VideoWrapper`: `max-width:1240px; padding:0 40px; margin:0 auto; flex column`): H2 heading-2 "See it in action" → frame `height:550px; width:100%` (≤600 250px) with dashed corner guides → `MediaEmbed` (`display:flex; margin-bottom:24px`) holding the `<iframe>` (keep the external embed src).

**8. ExternalLinks "Learn more"** (optional; bigquery 2, clickhouse 4, databricks 1, dbt 5, snowflake 12 links) (`ExternalLinksWrapper`: `max-width:1240px; padding:0 40px; margin:0 auto`):
- Box (`ExternalLinks__Inside`, `--cutout-width:16ch`): `::before` 1px `rgba(248,250,251,.15)` border clipped to leave a 16ch top-center gap; banner H6 "Learn more" on the top edge (`position:absolute; top:-12px`; IBM Plex Mono 700 `clamp(12px, 15.125px - .25vw, 14px)` ls .214em `#99797D`, `padding:0 10px`).
- List `display:flex; flex-wrap:wrap; padding:30px 25px 20px`; each item a link-styled R-Button (`flex:0 1 25%` → 33% ≤1000, 50% ≤800, 100% ≤600; `padding:10px; height:auto`, left-aligned): title Cinetype 14/20 `#FFFFFF` (`margin-bottom:5px`) + source 14/20 `#F5C0C0` (e.g. "Customer spotlight", "Hex blog").

**9. Footer** (R-Footer). No OutroTout on integration pages.

Per-page summary (full data in the JSON):

| slug | H1 | quotes | How-it-works right | extras |
|---|---|---|---|---|
| airflow | Add Hex apps to your Airflow DAGs | – | none (centered) | Loom video |
| athena → aws | AWS Data, meet Hex | – | image (AWS hub) | AWS custom blocks |
| bigquery | Power interactive insights with data from Google BigQuery | 1 (Infinite Lambda) | DataConnectionIlly | 2 links |
| clickhouse | The fastest warehouse meets the smartest AI analytics workspace | – | GIF | YouTube video, 4 links, 2 CTAs |
| dagster | Add Hex apps to your Dagster pipelines and dataflows | – | none | Loom video |
| databricks | A flexible workspace for your data lakehouse | – | DataConnectionIlly | custom (2), FAQ (1), 1 link |
| dbt | Bringing trust, governance, and speed to the data stack | 1 | DataConnectionIlly (+schema card) | 5 links |
| dremio | Run fast & interactive queries directly on your data lake | – | cards only | – |
| github | Use custom Python packages from GitHub in Hex | – | none | – |
| mariadb | Connect MariaDB directly to a flexible data notebook | – | DataConnectionIlly | – |
| ms-sql-server | Bring SQL Server data to life with a powerful and flexible data platform | – | DataConnectionIlly | – |
| mysql | Connect MySQL directly to a flexible data notebook | – | DataConnectionIlly | – |
| postgres | Build interactive data applications with PostgreSQL data | – | cards only | – |
| prefect | Add Hex apps to your Prefect pipelines and dataflows | – | none | – |
| redshift → aws | (same as athena) | – | – | – |
| snowflake | The best front-end for the AI Data Cloud | 2 (Notion, OpenSea) | image collage | custom (16 headings), FAQ, Loom, 12 links |
| trino | Interactive data apps that run lightning fast | – | cards only | – |

390: hero stacks; logo box scales; How it works becomes one column (illustration below the text); QuotesMultiple stacks; external links 1 column (see `integrations-*-390` trees in `reference/pages/product/measurements/`).
## 6. Links

Header and footer links are unchanged from the homepage (CLONE_SPEC §4.0 and §4.15) and are not repeated here. Below are the links found inside `main` on the 28 pages (anchors `#…` within a page and `mailto:` excluded from the internal list).

### 6.1 Internal links to pages in this group (route these)

| Path | Linked from |
|---|---|
| `/capability/ai/` | capability-exploratory-analysis, notebooks, threads |
| `/product/cli/` | capability-ai, context-studio |
| `/product/context-studio/` | bi, capability-ai, threads |
| `/product/data-apps/` | bi, capability-exploratory-analysis, embedded-analytics, notebooks |
| `/product/integrations/` | 19 pages |
| `/product/integrations/airflow/` | integrations |
| `/product/integrations/bigquery/` | integrations, notebooks |
| `/product/integrations/clickhouse/` | integrations |
| `/product/integrations/dagster/` | integrations |
| `/product/integrations/databricks/` | integrations, notebooks |
| `/product/integrations/dbt/` | integrations, notebooks |
| `/product/integrations/dremio/` | integrations |
| `/product/integrations/github/` | integrations |
| `/product/integrations/mariadb/` | integrations |
| `/product/integrations/ms-sql-server/` | integrations |
| `/product/integrations/mysql/` | integrations |
| `/product/integrations/postgres/` | integrations |
| `/product/integrations/prefect/` | integrations |
| `/product/integrations/redshift/` | notebooks |
| `/product/integrations/snowflake/` | integrations, notebooks |
| `/product/integrations/trino/` | integrations |
| `/product/notebooks/` | 6 pages |
| `/product/switching-to-hex/` | bi |
| `/product/threads/` | bi, capability-ai |
| `/product/integrations/aws/` | integrations (index tile). Also the redirect target of `/product/integrations/athena/` and `/product/integrations/redshift/`. |

Same-page anchors: Context Studio `#unified-context`, `#observable-everywhere`, `#improves-with-use`; Switching to Hex: `#why-data-teams-switch`, `#what-is-hex`, `#why-data-teams-are-looking-for-a-change`, `#why-data-teams-love-hex`, `#common-objections`, `#how-to-poc-hex`, `#what-is-a-poc`, `#how-it-works`, `#what-success-looks-like`, `#why-teams-love-pilots`, `#getting-started-today`, `#migrate-to-hex`, `#set-up-for-ai-analytics`, `#what-migration-looks-like`, `#think-through-your-migration`.

### 6.2 Internal hex.tech links to pages outside this group (keep as internal paths; another builder or a 404)

| Path | Linked from |
|---|---|
| `/blog/bluecore-qa/` | integrations-dbt |
| `/blog/databricks-integration/` | integrations-databricks |
| `/blog/dbt-integration/` | integrations-dbt |
| `/blog/dbt-partnership/` | integrations-dbt |
| `/blog/dbt-semantic-layer-integration/` | integrations-dbt |
| `/blog/dont-migrate-300-dashboards/` | bi |
| `/blog/google-cloud-partnership/` | integrations-bigquery |
| `/blog/introducing-context-studio/` | context-studio |
| `/blog/introducing-projects-as-context/` | context-studio |
| `/blog/introducing-semantic-model-sync/` | capability-ai |
| `/blog/introducing-the-hex-cli/` | cli |
| `/blog/mcp-client/` | context-studio |
| `/blog/modelbit/` | integrations-snowflake |
| `/blog/modernizing-jupyter-notebooks-snowflake/` | integrations-snowflake |
| `/blog/next-bi-tool/` | bi |
| `/blog/snowflake-hex/` | integrations-snowflake |
| `/blog/snowpark-hex/` | integrations-snowflake |
| `/blog/sql-notebooks/` | capability-exploratory-analysis |
| `/capability/hex-for-teams/` | capability-exploratory-analysis, data-apps, notebooks, threads |
| `/compare/looker-vs-hex/` | bi |
| `/compare/omni-vs-hex/` | bi |
| `/compare/sigma-vs-hex/` | bi |
| `/compare/tableau-vs-hex/` | bi |
| `/customers/alltrails/` | data-apps, embedded-analytics, integrations-bigquery |
| `/customers/clay/` | bi |
| `/customers/clickup/` | bi, data-apps, embedded-analytics |
| `/customers/figma/` | bi |
| `/customers/modal/` | bi |
| `/customers/notion/` | capability-ai, data-apps, embedded-analytics, integrations-snowflake |
| `/customers/ramp/` | capability-ai |
| `/customers/stubhub/` | bi |
| `/customers/whatnot/` | integrations-dbt, integrations-snowflake |
| `/pricing/` | bi |
| `/product/app-builder/` | integrations-snowflake |
| `/product/integrations/atscale/` | integrations |
| `/product/integrations/cube/` | integrations |
| `/product/integrations/elementary/` | integrations |
| `/product/integrations/gitlab/` | integrations |
| `/product/integrations/materialize/` | integrations |
| `/product/integrations/monte-carlo/` | integrations |
| `/product/integrations/motherduck/` | integrations |
| `/product/integrations/select-star/` | integrations |
| `/product/integrations/snowpark-container-services/` | integrations-snowflake |
| `/product/integrations/snowpark-ml/` | integrations |
| `/product/magic-ai/` | integrations-snowflake |
| `/product/semantic-models` | integrations-snowflake |
| `/request-a-demo/` | 12 pages |
| `/resources/bi-buying-guide/` | bi |
| `/snowflake22/` | integrations-snowflake |
| `/templates/` | notebooks |
| `/templates/exploratory-analysis/ad-hoc-exploration/` | capability-exploratory-analysis, notebooks |
| `/templates/exploratory-analysis/exploratory-data-analysis/` | notebooks |
| `/templates/exploratory-analysis/interactive-data-stories/` | capability-exploratory-analysis, notebooks |
| `/templates/exploratory-analysis/no-code-notebooks/` | capability-exploratory-analysis, notebooks |
| `/templates/exploratory-analysis/polyglot-notebooks/` | capability-exploratory-analysis, notebooks |
| `/templates/exploratory-analysis/sql-notebooks/` | capability-exploratory-analysis, notebooks |

### 6.3 External links (plain `href`, do not clone)

| URL | Linked from |
|---|---|
| https://app.hex.tech/signup | 23 pages |
| https://app.hex.tech/signup/clickhouse-30 | integrations-clickhouse |
| https://app.snowflake.com/marketplace/providers/GZTYZASX5BX/Hex | integrations-snowflake |
| https://clickhou.se/hex-2026 | integrations-clickhouse |
| https://clickhouse.com/blog/building-real-time-applications-with-clickhouse-and-hex-notebook-keeper-engine | integrations-clickhouse |
| https://clickhouse.com/blog/chdb.4-0-pandas-hex | integrations-clickhouse |
| https://clickhouse.com/chdb | integrations-clickhouse |
| https://clickhouse.com/integrations/hex | integrations-clickhouse |
| https://cube.dev/blog/hex-integration-collaborative-data-notebooks | integrations-postgres |
| https://github.com/PrefectHQ/prefect-hex | integrations-prefect |
| https://learn.hex.tech/changelog/2026-06-25 | integrations-athena, integrations-redshift |
| https://learn.hex.tech/docs/administration/context-studio | context-studio |
| https://learn.hex.tech/docs/administration/workspace_settings/custom-images | notebooks |
| https://learn.hex.tech/docs/administration/workspace_settings/custom-images#amazon-ecr | integrations-athena, integrations-redshift |
| https://learn.hex.tech/docs/agent-management/context-management | context-studio |
| https://learn.hex.tech/docs/agent-management/evals | context-studio |
| https://learn.hex.tech/docs/agent-management/suggestions | context-studio |
| https://learn.hex.tech/docs/api-integrations/cli | cli |
| https://learn.hex.tech/docs/api-integrations/mcp-server | bi |
| https://learn.hex.tech/docs/cell-types/sql-cells/overview#query-mode | notebooks |
| https://learn.hex.tech/docs/collaborate/sharing-and-permissions/roles#workspace-roles-and-paid-seats | bi |
| https://learn.hex.tech/docs/connect-to-data/data-connections/overview | integrations-snowflake |
| https://learn.hex.tech/docs/connect-to-data/data-connections/setup-guides/connect-to-amazon-athena | integrations-athena, integrations-redshift |
| https://learn.hex.tech/docs/connect-to-data/data-connections/setup-guides/connect-to-amazon-rds | integrations-athena, integrations-redshift |
| https://learn.hex.tech/docs/connect-to-data/data-connections/setup-guides/connect-to-amazon-redshift | integrations-athena, integrations-redshift |
| https://learn.hex.tech/docs/connect-to-data/semantic-models/intro-to-semantic-models | context-studio |
| https://learn.hex.tech/docs/connect-to-data/semantic-models/semantic-model-sync/intro | context-studio |
| https://learn.hex.tech/docs/explore-data/cells/calculations | notebooks |
| https://learn.hex.tech/docs/explore-data/cells/visualization-cells/chart-cells | data-apps |
| https://learn.hex.tech/docs/explore-data/chat-with-app | capability-ai, data-apps |
| https://learn.hex.tech/docs/explore-data/notebook-view/notebook-agent | notebooks |
| https://learn.hex.tech/docs/explore-data/projects/environment-configuration/environment-views | notebooks |
| https://learn.hex.tech/docs/explore-data/projects/project-execution/execution-model#reactive-graph-based-execution-model | notebooks |
| https://learn.hex.tech/docs/explore-data/threads | bi, threads |
| https://learn.hex.tech/docs/explore-data/threads#threads-quickstart-guide | switching-to-hex |
| https://learn.hex.tech/docs/getting-started/ai-overview | capability-ai |
| https://learn.hex.tech/docs/getting-started/develop-your-notebook | notebooks |
| https://learn.hex.tech/docs/migrate-to-hex | bi |
| https://learn.hex.tech/docs/share-insights/apps/app-builder | data-apps, threads |
| https://learn.hex.tech/docs/share-insights/apps/generative-apps | data-apps |
| https://learn.hex.tech/docs/share-insights/explore | data-apps, threads |
| https://learn.hex.tech/docs/share-insights/explore#exploration-entry-points-and-data-sources | bi |
| https://learn.hex.tech/docs/share-insights/hex-agent-in-slack | capability-ai, threads |
| https://learn.hex.tech/docs/share-insights/scheduled-runs | data-apps |
| https://learn.hex.tech/docs/trust/data-privacy-and-usage-faq | capability-ai |
| https://learn.hex.tech/tutorials/connect-to-data/connect-to-s3 | integrations-athena, integrations-redshift |
| https://learn.hex.tech/tutorials/connect-to-data/setup-for-ai-agents | switching-to-hex |
| https://learn.hex.tech/tutorials/develop-notebooks/notebook-agent-best-practices | switching-to-hex |
| https://learn.hex.tech/tutorials/quickstart/admin-101 | switching-to-hex |
| https://materialize.com/docs/integrations/ | integrations-postgres |
| https://quickstarts.snowflake.com/guide/hex/index.html?index=../..index#0 | integrations-snowflake |
| https://trust.hex.tech/ | switching-to-hex |
| https://www.g2.com/products/hex-technologies/reviews | notebooks |
| https://www.newswire.com/news/hex-brings-cloud-native-notebooks-to-snowpark-21739577 | integrations-snowflake |
| https://www.snowflake.com/en/resources/solution-brief/snowflake-hex-accelerate-data-science-and-analytics-in-the-data-cloud/ | integrations-snowflake |
| https://www.youtube.com/watch?v=TRmuEU_lRKk | integrations-snowflake |
| mailto:partnerships@hex.tech | integrations |
| https://www.youtube.com/embed/1pml_nlfw80 · /Pwxsa2atlB8 · /utOLApsGvrU · /JS_MKfeNOP0 (iframes) | context-studio, threads, capability-ai, integrations-clickhouse |
| https://www.loom.com/embed/63b97765da0942ae8fc3a208490d31a4 · /35f54d87168a4fb6a15b93e123f002d0 (iframes) | integrations-airflow, integrations-dagster, integrations-snowflake |
| mailto:partnerships@hex.tech | integrations |
## 7. Motion index (all measured; Framer Motion + CSS, no GSAP/Lottie/WebGL)

| What | Where | Trigger | Timing |
|---|---|---|---|
| Section fade-up (`Reveal`) | every page | in view, once | opacity 0→1, y 5→0; WAAPI 450ms, delay 200ms, Framer spring (bounce 0) |
| Announcement pill shine | N1 | hover | `announcement-pill-shine` 1s `cubic-bezier(.25,.1,.25,1)` both |
| Quote marquee | N6 | continuous | `scroll` linear infinite, 30 px/s (72s for 5 cards, 86.4s for 6); pauses only while pressed |
| Perlin noise drift | CLI §3/§4, Context Studio hero (16s, jade), cards | continuous / hover | `noise 8s linear infinite` (bg-position -512→0); hover-revealed layers fade over 500–529ms spring |
| Workflow-card noise | Context Studio §1 | hover ≥800 | `translate-noise 4s linear infinite`; layer opacity 0→1 over 529.33ms spring; arrow `translateX(56px) rotate(.25turn)` → none |
| Capability popover | Context Studio §1 | hover | transform 500ms spring delay 12ms, opacity .14s ease-out |
| Hero CTA accents (`Cta`) | Context Studio, Threads | hover | circles `scale 0` .3s `cubic-bezier(1,-.4,.35,.95)` staggered 40ms; corner lines .4s `cubic-bezier(.215,.61,.355,1)` |
| Video thumbnail | Context Studio, Threads | hover / click | lift 4px over 529.33ms spring; play ring scale 1.1; dashed ring `rotate 7s linear infinite` (paused until hover); click opens YouTube modal |
| Bento / gallery / resource card lift | Context Studio, Threads, Data apps, BI | hover | translateY(-4px), 529.33ms spring |
| Install-script tooltip | CLI | hover / click | opacity + translateY(-10px) .25s `cubic-bezier(.25,.1,.25,1)`; "Copy script" → "Copied!" |
| Terminal cursor | CLI hero | continuous | `terminalCursorBlink 1.06s linear infinite` |
| Hero glass entrance | Capability AI | load | `glass-enter` 673.93ms spring |
| Prompt UI entrance | Capability AI | load | `enter` 584.78ms spring, delay 100ms |
| Info row entrance | Capability AI | load | `hero-info-enter` 584.78ms spring, delay 200ms |
| Pill entrance | Capability AI | load | `prompt-hero-announcement-enter` .8s ease .1s |
| Prompt focus aura | Capability AI | load / per prompt | `aura-position` 1s, `aura-angle` 1s `cubic-bezier(.25,.46,.45,.94)`, `aura-enter-exit`, `border-enter-exit` |
| Typing prompt | Capability AI | continuous | ~23 chars/s type, ~1.5s hold, ~30 chars/s delete, ~1.4s pause; cursor `blink .8s steps(2, jump-none) infinite` |
| Canvas line field | Capability AI hero | continuous | runtime 2D canvas, opacity fade-in 856.56ms spring (see Gaps) |
| Demo accordion | Capability AI | click | rows `grid-template-rows` .28s; content opacity .6s / translateY(12px→0) .28s; title color .08s; video `fadeIn .38s cubic-bezier(.175,.885,.32,1.1) .16s` / `fadeOut` / `transformOut` |
| Magic background rotation | Notebooks §1 | continuous | `rotate` 120s linear infinite (MagicButton glyph rings 2s / 3s) |
| Scrolling cells | Exploratory §3 | continuous | `animateDataExp 45s ease-in-out infinite` |
| Floating drag image | Exploratory §7 | continuous | `animateDragImg 7s ease-in-out infinite` (30px, -15px) |
| PerlinCallout noise | Threads §6, Capability AI §4 | continuous | `translate-bg 48s linear infinite` |
| File-type rotator | Integrations index | continuous | step ≈1.25s, transform .8s `cubic-bezier(.25,.1,.25,1)` |
| TOC row hover | Switching to Hex | hover | text translateX(48px) and arrow slide-in, 529.33ms spring; arrow ring `rotate 8s linear infinite` |
| Agent logo roll-in, chat/MCP/Slack/CLI windows | BI §3c | in view | same as homepage CLONE_SPEC §6.5 |

All Framer springs: use `framer-motion` with the same options, or the `linear(…)` strings in the per-section CSS files. Respect `prefers-reduced-motion: reduce` (the site disables noise drift, card lifts and entrances).

## 8. Gaps and caveats

1. **Runtime canvas** on `/capability/ai/` hero (`AiIllustrationCanvas`, 1700×1700, the same particle/line-field canvas as the nav "AI & agents" callout, CLONE_SPEC §7 gap 1). No asset exists; recreate with a 2D canvas sine-line field in rose at low opacity, or use a static crop of `capability-ai-1440-full.png`.
2. **Embeds**: YouTube (video modals on Context Studio / Threads / Capability AI, ClickHouse inline) and Loom (Airflow, Dagster, Snowflake) are third-party iframes; keep them as iframes. Loom players render blank in headless capture, so the screenshots show an empty 1160×550 frame where the video sits.
3. **Interactive mockups** reused from the homepage (agent chat, MCP/Slack/CLI windows, Context Studio dashboard) and the CLI hero terminal accept input; port the static markup from the DOM files; deep interactivity is optional.
4. **Clipboard actions**: CLI install command, Data apps prompt cards (prompts captured in `specs/product-data-apps-prompts.json`), Switching to Hex "Copy link".
5. **Typing prompts** on Capability AI come from a JS bundle; the 4 prompts are listed in §4.5, and the timings are sampled (±10%), not read from source constants.
6. **CMS quirk**: on `/product/switching-to-hex/` the marquee pairs some logos with other customers' quotes; recorded as rendered.
7. **Redirects**: `/product/integrations/athena/` and `/redshift/` answer **301 Moved Permanently** with `location: /product/integrations/aws/` (verified with curl).
8. **No forms, no auth-gated content** on any of these pages. "Request a demo" / "Contact Sales" are links to `/request-a-demo/` (outside this group). The hit counter value is dynamic (render static).
9. **390 coverage**: 390 values are given as notes plus `*-390-summary.txt` and full 390 trees; 390 screenshots exist for the 11 non-integration pages only.
10. **Screenshot artifact**: the ticker marquee makes `scrollWidth` exceed the viewport on `/capability/ai/`; the live page clips it (`overflow-x: clip` on html/body). The saved screenshot was retaken clipped to 1440.
11. **Fonts**: commercial faces (GT Cinetype, PP Formula, PP Editorial New) are the same files already in `public/assets/fonts/`; no new fonts.
