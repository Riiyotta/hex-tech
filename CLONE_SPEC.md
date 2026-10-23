Source: https://hex.tech/

# Hex homepage — clone spec (measured 2026-10-23)

Everything below was read from the live page with Playwright (`getComputedStyle`, `getBoundingClientRect`, `document.getAnimations()`, `document.styleSheets`, inline-style sampling over time) plus the page's own JS bundles (saved copy in `Hex_ The Analytics platform for humans and agents_files/`). Primary viewport 1440x900, also 1280x800, with notes for 768 and 390. Coordinates are `[x, y, w, h]` in CSS px, page-absolute (y includes scroll) at 1440 unless stated.

## 0. Reference material (read these, don't re-derive)

| File | What it is |
|---|---|
| `reference/hex-1440-full.png`, `reference/hex-1280-full.png`, `reference/hex-390-full.png` | Full-page screenshots (after scrolling the whole page so reveals fired) |
| `reference/hex-1440-nav-platform-open.png` | Platform mega-menu open |
| `reference/hex-390-mobile-menu-open.png` | Mobile menu open |
| `reference/dom/*.html` | **Live rendered outerHTML per section** (header incl. all 3 mega-menus, hero, banner, each feature section, footer, mobile nav). Use it to port the product-UI mockups (chat thread, Claude/Slack/CLI windows, Context Studio dashboard, Evals table, charts): they are plain HTML+SVG, not images. |
| `reference/dom/computed-stylesheets.css` | Every CSS rule the page loaded (4 CSS chunks + all styled-components rules), serialized from `document.styleSheets` (CSS vars resolved where the browser keeps them). |
| `reference/dom/home-module-rules.css` | Subset: CSS-module rules for `Home*`, `CustomerBanner`, `CustomerLogo`, `InlineQuote`, `sharedStyles`, `FloatingPrompt`, `TypingText`, `.heading-*`, `@font-face`, `@keyframes`, `:root`. |
| `reference/dom/styled-component-rules.css` | Every styled-components rule used by the homepage DOM, grouped by component display name (e.g. `Nav__NavWrapper`, `Button__LinkWrapperBase`, `Footer__Inner`, `FAQ__Item`, `IntegrationsTout__*`). |
| `reference/dom/hover-and-state-rules.css` | All `:hover` / state rules. |
| `reference/measurements/*` | Raw measurement dumps (computed-style trees per section at 1440, per-breakpoint boxes). |
| `Hex_ The Analytics platform for humans and agents.html` (saved copy) | Contains the Next.js RSC payload with all section data (quotes, prompts, image lists). Search for strings like `projectWindows`, `dashedLineQuoteProps`. |

Assets are in `public/assets/` — see `ASSET_MANIFEST.md` (131 files).

---

## 1. Global layout system

### 1.1 Page frame (all widths)
- `html`, `body`: background `#14141C` (dark — never visible because the page wrapper covers it), `overflow-x: clip`, `scroll-behavior: smooth`, `-webkit-font-smoothing: antialiased` on body.
- **Page wrapper** (`PageWrapper__PageLayoutGrid`): `min-height: 100vh; background-color: #FFFCFC; color: #31263B`. Sets the light paper texture vars: `--texture-paper-img: url(/assets/textures/light-bkg-noise.webp); --texture-paper-size: 256px 256px; --texture-paper-opacity: .06; mix-blend-mode: normal`.
- A full-page **paper-texture overlay** layer (`PageWrapper__PaperTexture`) sits over the whole page grid: `background-image: light-bkg-noise.webp; background-repeat: repeat; background-size: 256px 256px; opacity: .06; pointer-events: none`.
- **Outer grid** (`LayoutGrid`): `display:grid; grid-template-columns: 1fr repeat(12, calc(min(96%, 1840px)/12)) 1fr; gap:0`. Children default to `grid-column: 2 / -2`.
  - 1440: content column = 1382.4px (x 28.8 → 1411.2), each of 12 cols 115.2px; side margins 28.8px.
  - 1280: content 1228.8px, margins 25.6px. 768: margins 15.36px. 390: margins 7.8px.
- **Side margins are "checkered"** (`GridLines__CheckeredMargin`) beside every content section: background-image `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4"><rect width="2" height="2" fill="%23e8e4e6"/><rect x="2" y="2" width="2" height="2" fill="%23e8e4e6"/></svg>` (2px checkerboard #E8E4E6) with `border-right: 1px solid #DBD7DA` on the left margin / `border-left` on the right margin. In the header rows the margin cells are plain with `1px solid #E9E5E8` (`GridLines__ContentMarginLine`, `data-minor`).
- **Condensed inner grid** (`LayoutGridCondensed`) inside content sections: `--content-width: min(calc(100% - 2*12px), 1536px)` → 12px gutter columns each side + 12 columns (113.195px each at 1440).
- **Home section container vars** (`.HomePageFall2026Content-module__page`): `--home-section-max-width: 1240px; --home-section-gutter: 40px; --home-section-padding-block: 60px; --home-section-row-gap: 60px; --home-section-column-gap: 80px; --home-section-copy-max-width: 425px; --home-glass-backdrop-filter: blur(7.5px); --home-glass-surface-color: #fdfdfd; --home-glass-background-color: color-mix(in srgb, #fdfdfd 40%, transparent); --home-glass-box-shadow: 0 16px 24px -8px #0000000d, 0 8px 12px -4px #0000000d, 0 4px 6px -2px #0000000d, 0 0 0 1px #0000000f, inset 0 0 11px 0 #0000000d; isolation:isolate`. Feature sections are centered `max-width:1240px` (x 100 → 1340 at 1440; x 66 → 1215 at 1280, i.e. 1149 wide = content minus 2×40 gutter).
- Below the footer: a 2rem (32px) tall grid row with minor margin lines and 1px `#E9E5E8` grid rules at grid columns 4 and 10 (x≈374 and x≈1065 at 1440). The same two rules appear in the header's top 20px row.

### 1.2 Breakpoints (from the stylesheets)
`max-width: 1250px`, `1000px` (nav → hamburger; use-cases stack; Context Studio windows restack), `800px` (feature sections stack vertically; banner logos tighten; ethos → 1 col; org cycle shrinks), `600px` (project windows → 1 col & only first 2 shown; ethos card padding), `450px`, `420px`, `360px`; container query `simplifiedHeroHeading (max-width: 800px)`.

### 1.3 Section map (top → bottom), y / height
| # | Section | 1440: y / h | 1280: y / h | 768: y / h | 390: y / h |
|---|---|---|---|---|---|
| 0 | Fixed header (top grid row 20 + ticker 27 + nav 62) | fixed, 82 tall | fixed | ticker+56px nav | 12px row + ticker + 56px nav |
| 1 | Hero stage (backdrop + headline + CTAs) | 0 / 700 | 0 / 697 | 0 / 710 | 0 / 941 |
| 2 | Customer logo banner ("Trusted by…") | 700 / 189 | 697 / 253 | 710 / 287 | 941 / 503 |
| 3 | "A different approach to Analytics and BI" | 889 / 362 | 950 / 362 | 997 / 268 | 1444 / 444 |
| 4 | Ask a question, get a trusted answer (agent chat + Claude/Slack/CLI) | 1251 / 928 | 1312 / 928 | 1265 / 1291 | 1888 / 1327 |
| 5 | Ground every answer… (compounding-context cycle) | 2179 / 575 | 2245 / 575 | 2556 / 1040 | 3215 / 891 |
| 6 | Share insights with generative dashboards (4 project windows) | 2754 / 735 | 2820 / 668 | 3596 / 992 | 4106 / 972 |
| 7 | See what people are asking (Context Studio + Evals) | 3488 / 884 | 3488 / 806 | 4588 / 1308 | 5077 / 1366 |
| 8 | Product ethos (2 glass cards) | 4377 / 855 | 4295 / 859 | 5896 / 1539 | 6443 / 1456 |
| 9 | Customer stories two-up (Mercor / Algolia quotes) | 5228 / 300 | 5149 / 300 | 7435 / 570 | 7899 / 660 |
| 10 | Use cases | 5533 / 657 | 5455 / 657 | 8011 / 834 | 8560 / 1352 |
| 11 | "Loved by the best data teams" + 4 story cards + G2 + Notion quote | 6190 / 1344 | 6112 / 1344 | 8927 / 1721 | 9982 / 2726 |
| 12 | "Instant integration with the whole stack" (6 cards) | 7534 / 1192 | 7456 / 1192 | 10782 / 1412 | 12818 / 2604 |
| 13 | Bottom CTA "Getting started is easy." | 8727 / 463 | 8648 / 463 | 12325 / 422 | 15539 / 472 |
| 14 | Tron divider + FAQ | 9185 / 892 | 9202 / 801 | ~12950 | 16233 / 724 |
| 15 | Footer | 10082 / 555 | 10003 / 555 | 13694 / 1114 | 17037 / 1114 |
| | Document height | 10664 | 10585 | 14835 | 18178 |

Sections 1–8 live in the first `ContentSection` (checkered margins, height 5228 @1440); section 9 is full-bleed; sections 10–14 are in a second `ContentSection` (top border `1px solid #DBD7DA`, class `afterCustomerStories`).

---

## 2. Design tokens

### 2.1 Colors (light theme, resolved on the page wrapper)
Neutrals / text
| Token | Value | Used for |
|---|---|---|
| `--fg100` | `#FFFCFC` | page bg, nav bg, ticker strip bg, primary-button inner |
| `--fg200` | `#F8F5F6` | ticker item hover bg |
| `--fg300` | `#F4F1F2` | ticker gradient center |
| `--fg400` | `#F0EDEE` | ticker strip bg |
| `--fg500` / `--fg600` / `--fg700` / `--fg800` / `--fg900` / `--fg1000` | `#ECE8EA` / `#E8E4E6` (checker) / `#E2DEE0` / `#D1CCD1` / `#A49DA7` / `#9C959F` | |
| `--fg1100` = `--fontColorMUTED` | `#89828D` rgb(137,130,141) | muted text: quote author titles, footer legal, "Made with" |
| `--fg1200` | `#43394C` rgb(67,57,76) | links, Log In, footer links, section label, logo color |
| `--fontColorDEFAULT` = eggplant | `#31263B` rgb(49,38,59) | body copy |
| `--fontColorLOUD` = `--fgLoud` = obsidian | `#14141C` rgb(20,20,28) | headings, nav items, button text |
| `--black` | `#01011B` | gradient end, product UI text |
| `--bg300` | `#FCF8F8` | two-up customer stories bg |
| `--bg400` / `--bg500` | `#F9F1F1` (mobile menu bg) / `#EBCCCC` | |
| `--fgA*` | `rgba(49,38,59, a)` with a = 0, .03, .05, .07, .09 (A500, nav hover bg), .11, .14 (A700, ticker inset shadow), .22, .44, .48, .57 (A1100, ticker arrow), .91 (A1200, dropdown description) | |

Lines
| Token | Value |
|---|---|
| `--grid200` | `#EFEBED` |
| `--grid300` = `--borderColorMUTED` | `#E9E5E8` (minor rules, use-case dividers, stories grid lines, button hover bg) |
| `--grid400` | `#E4E0E3` |
| `--grid500` = `--borderColorDEFAULT` | `#DBD7DA` (major borders, secondary button border, FAQ dividers, footer divider) |
| `--grid600` | `#CBC6CB` |
| `--grid700` = `--borderColorSTRONG` | `#AFA9B1` (hover borders) |
| `--grid1200` | `#403649` (nav accent bars) |

Brand palette: roseQuartz `#F5C0C0`, amethyst `#A477B2`, minsk `#473982`, eggplant `#31263B`, jade `#5CB198`, citrine `#CDA849`, opal `#FBF9F9`, violetTopaz `#5F509D`, cement `#717A94`, black `#01011B`, obsidian `#14141C`. Extra measured: hero "Context management" icon `#7B8BE0`; ethos eyebrow 1 text `#A98529` on `rgba(169,133,41,.07)`; ethos eyebrow 2 text `#4250A0` on `rgba(66,80,160,.07)`; org step 2 hover color `color-mix(in srgb, #CDA849 40%, #14141C)`.

Product-UI ("appUI", light): bg `#FFFFFF`, muted bg `#F8FAFB`, border `#DADDE6`, muted border `#ECEDF2`, text `#01011B`, muted text `#717A94`, primary `#254685`, intent primary `#473982`, success `#0F6B5B`, warning `#A67908`, danger `#B63245`. Terminal id color `rgb(15,107,91)`, link `rgb(71,57,130)`, tilde `#8ABBFF`. Slack mock: name `rgb(28,27,28)`, timestamp `rgb(123,122,123)`, mention `rgb(19,89,153)`. Claude mock text `rgb(20,20,19)`, muted `rgb(115,113,108)`.

Gradients
- Heading text gradient (all `GradientHeader`s: H1, heading-1 H2s, ethos H2s, CTA H3): `background-image: linear-gradient(90deg, #31263B 0%, #01011B 100%); background-clip: text; -webkit-text-fill-color: transparent; background-size: 100% auto;` plus `margin-inline:-6px; padding-inline:6px; padding-bottom:6px; margin-bottom:-6px`.
- Primary button border: `background-image: linear-gradient(to right, #FFFCFC, #FFFCFC), linear-gradient(45deg, #CDA0A5, #31263B); background-clip: padding-box, border-box; background-origin: padding-box, border-box; border: 1px solid transparent`.
- Primary button fill (`::after`, inset 1px, z-index 1): `background: linear-gradient(135deg, rgba(245,192,192,.23) 0%, rgba(245,192,192,.12) 100%), #FFFCFC; box-shadow: inset 0 0 0 1px rgba(71,12,12,.15)`.
- Ticker strip: `linear-gradient(to left, #F0EDEE, #F4F1F2, #F0EDEE)` on `#F0EDEE`, `box-shadow: inset 0 1px 1px 0 rgba(49,38,59,.14)`.
- Popover/hamburger glass: `radial-gradient(circle at 66.66% 50%, #FFFFFF 0%, #F8F5F6 80%)`.
- Card wrapper (use-case icon tile, quote card): bg `rgba(253,253,253,.4)` + `linear-gradient(105deg, rgba(245,192,192,0) 10.56%, rgba(245,192,192,.02) 108.41%)`.
- Floating prompt pill: `#FFFFFF` + `linear-gradient(79deg, rgba(245,192,192,.13), rgba(49,38,59,.05))`.
- Tron divider line: `linear-gradient(90deg, #AFA9B1 0%, #DBD7DA 50%, #AFA9B1 100%)`.
- Hero cartesian grid tint: `radial-gradient(circle at 50% 50%, color-mix(in srgb, #31263B 5%, transparent) 50%, color-mix(in srgb, #31263B 20%, transparent))`.

### 2.2 Shadows
| Name | Value |
|---|---|
| Nav squished shadow (`::after`) | `0px 3px 12px -3px rgba(100,63,63,.32)` |
| Nav dropdown viewport | `0 4px 24px -4px rgba(0,0,0,.15)`, border `1px solid #DBD7DA`, radius 5px, bg #FFFFFF |
| Glass popover / hamburger | `inset 0 0 34px 0 #EFEBED, 6px 27px 10px 0 rgba(100,63,63,.01), 4px 4px 10px 0 rgba(100,63,63,.04), 2px 13px 8px 0 rgba(100,63,63,.06), 1px 6px 6px 0 rgba(100,63,63,.06), 0 1px 3px 0 rgba(100,63,63,.18)` |
| Product window (InteractiveFeatureWrapper) | `0 0 0 1px rgba(49,38,59,.22), 0 103px 103px 0 rgba(49,38,59,.03), 0 26px 57px 0 rgba(49,38,59,.05)`; hover: `0 0 0 1px rgba(49,38,59,.32), 0 103px 103px 0 rgba(49,38,59,.12), 0 26px 57px 0 rgba(49,38,59,.15)`; transition `box-shadow .2s ease-in-out, transform .2s ease-in-out`; radius 6px |
| Glass card (ethos) | `0 16px 24px -8px rgba(0,0,0,.05), 0 8px 12px -4px rgba(0,0,0,.05), 0 4px 6px -2px rgba(0,0,0,.05), 0 0 0 1px rgba(0,0,0,.06), inset 0 0 11px 0 rgba(0,0,0,.05)` + `backdrop-filter: blur(7.5px)` |
| Org disc | `0 26px 57px 0 rgba(0,0,0,.1)`; org step: `0 16px 24px -8px rgba(0,0,0,.08), 0 4px 6px -2px rgba(0,0,0,.05)` |
| Hero pill links / icon spots | `0 2px 4px color-mix(in srgb, #01011B 6%, transparent)` |
| Story card hover | `0 0 0 1px color-mix(in srgb,#31263B 10%,transparent), 0 4px 50px 0 color-mix(in srgb,#31263B 10%,transparent)` |
| Integration card hover | `0 0 0 1px color-mix(in srgb,#31263B 30%,transparent)` |

### 2.3 Radii
1px (nav items, dropdown links), 2px (ticker items), 3px (ethos eyebrow, nav callout), 4px (logo popover), 5px (dropdown viewport), 6px (product windows, ethos cards & frames, logo story indicator), 12px (Card wrapper: use-case tiles, Notion quote card), 30px (hero pill links), 50% / 999px (icon spots, org disc & steps, hamburger, avatars).

### 2.4 Spacing rhythm (measured)
4, 6, 8, 10, 12, 15, 16, 20, 24, 25, 30, 32, 40, 44, 50, 54, 60, 70, 80, 100 px. Feature sections: padding 60px 0; info column 330px wide, gap to illustration 70px; quote block separated by a `1px dashed #DBD7DA` top border with `padding: 30px 70px; margin: 0 -70px`.

### 2.5 Typography

Font stacks (exact computed):
- `Cinetype, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", sans-serif` — body default 14px / 21.994px (1.571), weight 400.
- `"Cinetype Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`
- `"PP Formula SemiExtended", ui-sans-serif, system-ui, sans-serif, …emoji` (heading-1 / H1)
- `"PP Formula", ui-sans-serif, system-ui, sans-serif, …emoji` (heading-2/3/4)
- `"PP Editorial New", Georgia, "Times New Roman", serif` (`--home-font-family-editorial`; in headers declared as `"PP Editorial New", sans-serif`)
- `"IBM Plex Sans", "IBM Plex Sans Fallback"` (product UI), `"IBM Plex Mono", "IBM Plex Mono Fallback"` / `"IBM Plex Mono", ui-monospace, …` (footer titles, terminal, "Read more")
- `Lato` (Slack mock only), `ui-serif` (Claude mock answer text).

Global: `-webkit-font-smoothing: antialiased`, `font-kerning: auto`, no `font-feature-settings` anywhere except the terminal mock: `font-feature-settings: "calt" 0, "liga" 0`. Body paragraphs inside sections use `text-wrap: balance` (`.HomeSimplifiedHero subheading`, center copy).

Type scale (CSS source → computed at 1440 / 768 / 390):
| Role | Family / weight | Size / line-height / letter-spacing | Color |
|---|---|---|---|
| Hero H1 line 1 | PP Formula SemiExtended 700 | `clamp(42px, 24px + 4vw, 74px)` lh 1.2 (88.8px) ls -0.025em → 74/88.8/-1.85px @1440 & 1280; 54.72/65.66 @768; 42/50.4/-1.05 @390 | gradient text |
| Hero H1 line 2 (`span[data-style=italic]`, display block) | PP Editorial New 200 italic | 1.3em (96.2px), lh 0.75 (72.15px) | gradient text |
| heading-1 (section H2: "A different approach…", "best data teams", "with the whole stack") | PP Formula SemiExtended 700 | `clamp(38px, 25.625px + 2.75vw, 60px)` lh 1.3 ls -0.0308em → 60/78/-1.848 @≥1280; 46.745/60.77 @768; 38/49.4 @390 | gradient |
| heading-1 italic word ("Loved", "Instant integration") | PP Editorial New 200 italic | 1.3em → 78/101.4 | gradient |
| heading-2 ("Use cases", "FAQ") | PP Formula 800 | `clamp(30px, 24.375px + 1.25vw, 40px)` lh 1.3 ls -0.025em → 40/52/-1px; 33.98 @768; 30/39 @390 | #14141C |
| Use-cases italic subheading | PP Editorial New 200 italic | 1.3em → 52/67.6 | gradient |
| heading-3 (feature H3s, ethos H2s, "Users love Hex", "Getting started is easy.") | PP Formula 800 | `clamp(20px, 15.5px + 1vw, 28px)` lh 1.3 ls -0.025em → 28/36.4/-0.7; 23.18 @768; 20/26/-0.5 @390 | #14141C |
| heading-4 (card titles) | PP Formula 600 | 20px / 26px / -0.5px | #14141C |
| Org-cycle center title | PP Formula 600 (heading-4 class) | `clamp(14px, var(--cycle-size)*20/560, 20px)` → 19.4px / lh 1.4 | #14141C |
| heading-5 | Cinetype 600 | 14px / 1.571 / -0.025em | |
| heading-6 | IBM Plex Mono 700 | `clamp(12px, 15.125px - .25vw, 14px)` / 1.571 / 0.214em | |
| Lead XL (hero sub, integrations sub, Notion quote) | Cinetype 300 | 24px / 36px (hero sub at 390: 20/30) | #31263B (quote #14141C) |
| Lead L (built-different sub, two-up quotes, stories sub, CTA copy) | Cinetype 300 | 20px / 30px | #31263B |
| Body (descriptions, inline quotes) | Cinetype 300 | 16px / 24px | #31263B (inline quote text #14141C) |
| Small body (integration descs, G2 copy, popover quote) | Cinetype 300 | 14px / 21.994px | #31263B |
| Nav item / button label | Cinetype 400 | 14px / 14px (nav), 21.994px (button) | #14141C (secondary #31263B) |
| FAQ question | Cinetype 400 | 18px / 24px / -0.5px | #14141C |
| Footer link | Cinetype 400 | 14px / 21.994px | #43394C; legal #89828D |
| Footer column title | IBM Plex Mono 700 | 12px / 18.852px / 0.7px uppercase | #14141C |
| Section label "Trusted by…" | Cinetype Mono 400 | 10px / 12px / 0.833px uppercase | #43394C |
| Ticker | Cinetype Mono 400 | 12px / 18.852px | #31263B, title span #14141C |
| Window titles / dropdown list titles | Cinetype Mono 400 | 11px / 17.281px (28px in window tab) / 0.9163px; dropdown titles opacity .5 | #14141C / #31263B |
| Quote author | Cinetype Mono 400 | 12px / 18.852px / 0.9996px; name #31263B, title #89828D | |
| Ethos eyebrow | Cinetype Mono 400 | 13px / 13px / 1.0829px, padding 4px 6px, radius 3px | see colors |
| Read more / Learn more | IBM Plex Mono 700 | 12px / 11px uppercase | #89828D / #43394C |
| Logo popover author | Cinetype 400 10px / 15.71px | #89828D |
| Nav dropdown item title / desc | Cinetype 14px/21.994 #14141C ; 12px/18px rgba(49,38,59,.91) | |
| Product UI | IBM Plex Sans 12px/16.8px (chart ticks 10px) | #01011B |

### 2.6 Fonts — files and @font-face (exact)
Local copies in `public/assets/fonts/`. Declarations as served (update the `src` paths to `/assets/fonts/…`):
```css
@font-face { font-family: Cinetype; src: url("/fonts/cinetype/GT-Cinetype-Regular.woff2") format("woff2"), url("/fonts/cinetype/GT-Cinetype-Regular.woff") format("woff"); font-style: normal; font-weight: 400; font-display: swap; }
@font-face { font-family: Cinetype; src: url("/fonts/cinetype/GT-Cinetype-Light.woff2") format("woff2"), …woff; font-style: normal; font-weight: 300; font-display: swap; }
@font-face { font-family: Cinetype; src: url("/fonts/cinetype/GT-Cinetype-Bold.woff2") format("woff2"), …woff; font-style: normal; font-weight: 600; font-display: swap; }
@font-face { font-family: "Cinetype Mono"; src: url("/fonts/cinetype/GT-Cinetype-Mono.woff2") format("woff2"), …woff; font-style: normal; font-weight: 400; font-display: swap; }
@font-face { font-family: "PP Formula SemiExtended"; src: url("/fonts/formula/PP-Formula-SemiExtendedBold.woff2") format("woff2"), …woff; font-style: normal; font-weight: 600; font-display: swap; }
@font-face { font-family: "PP Formula"; src: url("/fonts/formula/PP-Formula-ExtraBold.woff2") format("woff2"), …woff; font-style: normal; font-weight: 700; font-display: swap; }
@font-face { font-family: "PP Formula"; src: url("/fonts/formula/PP-Formula-Regular.woff2") format("woff2"), …woff; font-style: normal; font-weight: 400; font-display: swap; }
@font-face { font-family: "PP Editorial New"; src: url("/fonts/editorial/PPEditorialNew-UltralightItalic.woff2") format("woff2"), …woff; font-style: italic; font-weight: 200; font-display: fallback; }
@font-face { font-family: "PP Editorial New"; src: url("/fonts/editorial/PPEditorialNew-Italic.woff2") format("woff2"), …woff; font-style: italic; font-weight: 400; font-display: fallback; }
@font-face { font-family: "PP Editorial New"; src: url("/fonts/editorial/PPEditorialNew-Regular.woff2") format("woff2"), …woff; font-style: normal; font-weight: 400; font-display: fallback; }
/* next/font (latin subsets actually requested) */
@font-face { font-family: "IBM Plex Sans"; font-style: normal; font-weight: 300 700; font-stretch: 100%; font-display: swap; src: url(/_next/static/media/03fc1b4a8d284b5e-s.p.0wiir8udbzjvx.woff2) format("woff2"); unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+304, U+308, U+329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }  /* same file declared for 300/400/500/600/700 */
@font-face { font-family: "IBM Plex Mono"; font-weight: 400; src: url(/_next/static/media/99e609270109b47d-s.p.40sczeszzbjw1.woff2) format("woff2"); unicode-range: (same latin range); font-display: swap; }
@font-face { font-family: "IBM Plex Mono"; font-weight: 500; src: url(/_next/static/media/effe91970fc4db64-s.p.0oace-s_gkfks.woff2) format("woff2"); … }
@font-face { font-family: "IBM Plex Mono"; font-weight: 700; src: url(/_next/static/media/a7e15459c1805da0-s.p.3y9b8znjr2455.woff2) format("woff2"); … }
@font-face { font-family: "IBM Plex Sans Fallback"; src: local("Arial"); ascent-override: 101.32%; descent-override: 27.18%; line-gap-override: 0%; size-adjust: 101.17%; }
@font-face { font-family: "IBM Plex Mono Fallback"; src: local("Arial"); ascent-override: 76.16%; descent-override: 20.43%; line-gap-override: 0%; size-adjust: 134.59%; }
/* Lato via https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap (Slack mock) */
```
Weight-mapping quirk to reproduce: headings request weight 700/800 from faces declared 600/700, so the browser uses the single bold face without faux-bold (keep the declared weights exactly as above, and request `font-weight: 700` for SemiExtended and `800`/`600` for PP Formula, or the clone will look identical only if the same faces are declared).
Network-verified woff2 actually loaded on the homepage: GT-Cinetype-Regular, -Light, -Bold, -Mono; PP-Formula-SemiExtendedBold, PP-Formula-ExtraBold; PPEditorialNew-UltralightItalic; the 4 next/font latin files above; Lato 400/700 (fonts.gstatic.com `S6uyw4BMUTPHjx4wXiWtFCc.woff2`, `S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2`). `.woff` fallbacks were not fetched.

---

## 3. Components shared across sections

### 3.1 Buttons (`Button__LinkWrapperBase`)
- **Primary** (`cWLumj`; e.g. "Get started for free", "Explore …" CTAs): `box-sizing: content-box; display:flex; height:48px; padding:0 20px; font-size:14px; color:#01011B; border:1px solid transparent;` gradient border + `::after` fill (see 2.1). Measured box 170×50 ("Get started for free"); feature CTAs use the same component at height 40 (box 42 incl. border, e.g. "Explore self-serve insights" 218×42). Inner `display:flex; gap:10px; align-items:center; justify-content:center; white-space:nowrap`; label `z-index:2; position:relative`.
  - Corner circles (`CornerCircles`, visible at rest): four 13×13 circles, `border:1px solid color-mix(in srgb, #31263B 30%, transparent)`, `border-radius:50%`, positioned at `top/bottom -7px; left/right -7px` (centred on each corner). `transition: opacity .25s cubic-bezier(.25,.1,.25,1)`; hidden on hover (`opacity:0`).
  - Corner lines (`CornerLines`, `opacity:0`, revealed on hover of the overlay): four 15×15 L-brackets, `1px solid #DBD7DA` (two sides each) at `-1px` offsets; on hover `opacity:1` and each `::before` translates outward 5px (`translate(±5px, ±5px)`), `transition: transform .25s cubic-bezier(.25,.1,.25,1), opacity .25s`.
  - Hover: `background-color: #E9E5E8; border-color: #AFA9B1;` `::after` opacity → .3; active: bg `#DBD7DA`, `::after` .6. Focus-visible: `outline: 2px solid rgba(245,192,192,.386); outline-offset: 2px`. Transition `background-color .25s cubic-bezier(.25,.1,.25,1), border-color .25s …`.
- **Secondary** (`hPTMsm`; "Request a demo", "Talk to us", "See our plans"): same metrics, `background: transparent; border: 1px solid #DBD7DA; color: #31263B`; hover bg `#E9E5E8`, border `#AFA9B1`; active `#DBD7DA`. Has corner lines, no corner circles.
- **Nav "Get started"** (`ehDRYy`): primary styling but `height:36px; padding:0 15px; font-size:14px; margin-left:12px`, box 107×38, with corner circles.

### 3.2 InfoText block (feature sections 4–7)
`flex column; gap:20px; align-items:flex-start;` icon (60×60 AbstractMark SVG or agent-logo stack 160×50) → H3 (heading-3) → primary button (h 40). Info column `width:330px` (`max-width` on wrapper), `justify-content:center`, `gap:40px` between InfoText and quote.

### 3.3 Dashed-line inline quote (`InlineQuote` + `DashedLineQuote`)
`<figure>`: `display:flex; flex-direction:column; gap:20px; padding:30px 70px; margin:0 -70px; border-top:1px dashed #DBD7DA`. Body: `display:flex; gap:12px` → icon column (15px wide, quote-mark SVG 15×15 color `#89828D`, then a vertical line, `padding-top:5px; gap:5px`) + text (Cinetype 300 16/24 #14141C; the emphasized middle clause is a `<span>`). Attribution `display:flex; gap:20px; align-items:center`: grayscale customer logo (filter `invert(1) sepia(0) saturate(.01) hue-rotate(339deg) brightness(1) contrast(1.01)`) + author (`Cinetype Mono 12px ls .9996px`, name #31263B, title #89828D).

### 3.4 Product window shell (`InteractiveFeatureWrapper`)
White `#FFFFFF`, radius 6px, shadow per 2.2, font IBM Plex Sans 12px/15.6 #01011B. Optional tab label above (`WindowTitle`: absolutely positioned `top:-29px; left:12px; padding:0 12px; height 29px; Cinetype Mono 11px/28px ls .9163px #31263B; border-top & border-right 1px dashed #DBD7DA, border-left 1px solid #DBD7DA; opacity .9`), e.g. "Chat with the Hex Agent", "Agent observability", "Evals". Dashed guide lines extend 50px above/below windows (`border-left/right: 1px dashed #DBD7DA`). Window chrome variants (traffic lights 44×12 svg, title "Slack"/"Hex CLI" in Cinetype Mono 11px).

### 3.5 Perlin-noise texture panel (`PerlinNoise`)
Wrapper (`--hover-transition-duration: 50ms; --hover-transition-timing-function: linear(<100-point spring>)`, perspective 800px) → `DotGridMask` (`mask-image: radial-gradient(#fff, #fff 1px, transparent 1px, transparent); mask-size: 6px 6px`) → texture div (`background-image: noise-eggplant-128x128.png; background-size: 1024px 1024px; opacity: .24; animation: noise 8s linear infinite running` where the effective `@keyframes noise { from { background-position: -512px -512px } to { background-position: 0 0 } }`). Used in: hero backdrop (container `opacity:.8; mask-image: linear-gradient(#000, transparent)`), use-cases backdrop (same mask, opacity .8), ethos illustration frames (opacity .8), org-cycle disc, nav "AI & agents" callout (rose texture, 512px, paused until hover → opacity .25 running).

### 3.6 Grayscale logo filter
All customer logos (`<img>` SVGs from Sanity, white-on-transparent sources): `filter: invert(1) sepia(0) saturate(0.01) hue-rotate(339deg) brightness(1) contrast(1.01)`.

---

## 4. Section-by-section

### 4.0 Header (fixed)
Structure: fixed `LayoutGrid` at top 0 (`z-index:3`, h 82 @1440), three stacked rows sharing the 14-col grid:
1. **Top grid row** (`Header__TopGridLines`): height 1.25rem (20px; 12px measured offset at 390), bg `#FFFCFC` + paper texture `::after`; margin cells with 1px `#E9E5E8` rules; vertical 1px `#E9E5E8` rules at grid cols 4 and 10.
2. **Announcement ticker** (`Header__TickerWrapper`, h 26.85px, bg #FFFCFC): inside the content column a strip `Ticker__Bg` (ticker gradient + inset shadow, `overflow:hidden; isolation:isolate`). `role="group" aria-label="Announcements"`. Marquee track `Ticker__InstanceAnim`: `display:flex; width:fit-content; animation: ticker 56s linear infinite` with `@keyframes ticker { from { transform: translateX(0%) } to { transform: translateX(-20%) } }`; the item set is rendered **5 times** (each copy 2701px wide @1440), so -20% = exactly one copy (≈48.2 px/s). `animation-play-state: paused` while any link inside is hovered/focused (`:has(a:hover, a:focus-visible)`). Each copy: `display:flex; gap:16px; padding:4px 16px 4px 0`. Item `<a>`: `display:flex; align-items:center; padding:0 8px; border-radius:2px; white-space:nowrap; Cinetype Mono 12px; transition: background-color .1s linear; hover bg #F8F5F6`; content = emoji + `&nbsp;` + title span (#14141C) + `&nbsp;`text + arrow circle (`Ticker__Circle`: 1.25em square, margin-left 4px, radius 9999px, color rgba(49,38,59,.57), arrow svg `svg/icons/ticker-arrow.svg`). Items (in order):
   - 📊 **AI analytics use case:** how LangChain migrated from legacy BI and enabled 100% of their team to self-serve data → `/customers/langchain/`
   - 🤯 **Generative data apps:** Gorgeous, interactive dashboards and apps you can build with just a prompt → `/blog/introducing-generative-data-apps/`
   - 📖 **State of Data Teams 2026** discover key insights from data leaders → `/state-of-data-teams/`
   - 🙏 **It's just "Hex"!** Not "HEX" or "Hex dot tech" → `/`
3. **Nav** (`nav[aria-label=Main]`, row height 62px): `Nav__NavigationRootEl` `display:grid; grid-template-columns: 1fr 64px 1fr; align-items:center; padding:12px 0` spanning the content column.
   - Left list (`justify-content:flex-end; padding-right:36px`): **Platform ▾**, **Solutions ▾**, **Enterprise** (`/enterprise/`). Center: Hex wordmark SVG 64×25 (`svg/logo/hex-logo-nav.svg`, color #43394C) link to `/`. Right list (`padding-left:28px; align-items:center`): **Resources ▾**, **Pricing** (`/pricing/`), **Log In** (`https://app.hex.tech/login`), **Get started** button (`https://app.hex.tech/signup?source=nav`).
   - Nav item (`fohAMM`): `display:flex; align-items:center; padding:.6rem .85rem (9.6px 13.6px); font: 400 14px/1 Cinetype; color:#14141C; border-radius:1px; transition:none`; dropdown triggers have `padding-right:.6rem` and a 15×15 chevron (`svg/icons/nav-chevron-down.svg`, `margin-left` via gap, color #43394C) that flips when open. Hover/focus/open: `background-color: rgba(49,38,59,.09)`. Measured boxes: Platform 100×34 @x353, Solutions 104×34 @x453, Enterprise 95×33 @x557, Resources 110×34 @x780, Pricing 72×33 @x890, Log In 63×36 @x962 (`padding .6rem .75rem; color #43394C; transition background-color .2s`), Get started 107×38 @x1037.
   - Scroll states — see Motion 6.1 (nav slides up over the ticker, shadow + bottom border + corner accents appear).
   - Bottom border of nav row (`Nav__NavRootBorder`): absolute `bottom:0; height:1px; bg #DBD7DA`, scaled `scaleX(0→1)`; margin-cell borders `Nav__NavBorderBottom` 1px `#E9E5E8`. Corner accents (`Accent__LContainer`, 4× 16×16 at the nav row corners at x≈20/1404): 1px×16px bars with `linear-gradient(var(--dir), #403649 50%, rgba(49,38,59,0))`, opacity tied to squish progress.
   - Nav background layer (`Nav__BackgroundInner`): `::before` bg `#FFFCFC`, `::after` paper texture (bg-position 13px 27px); masked `linear-gradient(to bottom, var(--stop-1) 30%, var(--stop-2))` where stops animate from `rgba(0 0 0/.48)`/`rgba(0 0 0/0)` (top) to opaque (squished).

**Mega-menus** (Radix NavigationMenu; open on hover/focus of trigger; one shared viewport that morphs between menus):
- Viewport container: `position:absolute; top:-6px` under nav, white `#FFFFFF`, `border:1px solid #DBD7DA; border-radius:5px; box-shadow:0 4px 24px -4px rgba(0,0,0,.15); overflow:clip`; translated horizontally under the active trigger (Platform: `translateX(294.6px)` → left edge x=295 @1440, top y=123). Inner padding 8px. Sizes: Platform 772×451, Solutions 394×433, Resources 772×436.
- Column title: Cinetype Mono 11px/17.28 ls .9163px, `padding:10px 0 6px 16px; opacity:.5`.
- Item link: `display:block; border-radius:1px; transition: background-color .1s linear; hover bg rgba(49,38,59,.09)`; inner `padding:8px` grid: icon wrapper 32×32 (`padding:0 14px 0 18px`) + title (Cinetype 14/21.994 #14141C) + description (12/18 rgba(49,38,59,.91)). Two-column lists 378px each.
- External-link items (Docs, Changelog) show an arrow that animates in on hover (Framer variants: from `opacity 0; filter: blur(2px); translateX(-20px) translateY(20px) scale(.8)` → visible), inside `MotionConfig {type:"spring", duration:.4, bounce:.32}`.
- Callout (bottom of Platform, right/bottom of Resources): `border:1px solid #DBD7DA; border-radius:3px; bg #FFFCFC; transition: border .25s cubic-bezier(.25,.1,.25,1)`; hover border `#AFA9B1` + rose Perlin noise fades to .25 and starts drifting. "AI & agents" callout contains a runtime `<canvas>` line illustration (`AiIllustrationCanvas`, 1000×1000 backing store) — see Gaps.
- Content (exact copy):
  - **Platform** — *Products*: Agentic notebooks — Powerful, deep-dive analysis without the silos (`/product/notebooks/`); Conversational analytics — Ask and explore data in plain language (`/product/threads/`); Context Studio — Build trust in data with semantic models and AI governance (`/product/context-studio/`); Data apps — Build and share interactive dashboards and reporting (`/product/data-apps/`); Hex CLI — Control your analytics from the terminal (`/product/cli/`). *Capabilities*: Exploratory analysis — Go from quick question to deep analysis to data app in one place (`/capability/exploratory-analysis/`); Business intelligence — Governed self-serve and dashboards for the entire org (`/product/bi/`); Embedded analytics — Ship secure, customer-facing data experiences (`/product/embedded-analytics/`); Integrations — Out-of-the-box connections and flexible APIs (`/product/integrations/`). Callout: **AI & agents** — Agentic workflows to empower your entire team (`/capability/ai/`).
  - **Solutions** — callout first: **Explore all solutions** — One connected system - infinite data answers (`/solutions/`). *By team*: Data leader — Focus your team and scale answers; Product — Build your product with data, not gut feels; Marketing — Turn scattered data into clear growth opportunities; Sales — Clear pipeline. Confident forecasts; Customer success — Create a complete view of customer health (`/solutions/data-leaders/`, `/solutions/product-analytics/`, `/solutions/marketing/`, `/solutions/sales-analytics/`, `/solutions/customer-success/`). Icons 24×24.
  - **Resources** — *Get started*: Switching to Hex — A guide to getting started on agentic analytics; Templates — Jumpstart with pre-built projects; Docs — Resources and product guides (`https://learn.hex.tech`); Changelog — Product updates (`https://learn.hex.tech/changelog`). *Inspiration*: Blog — From data teams to data teams; Guides — Learn how to do more with data, together; Events — Learn and connect with peers; Customer stories — Empowering the best data teams; Partners — Learn more about our partnerships. Callout: eyebrow **Download**, **The Data Leader's Guide to AI Analytics**, "A practical roadmap for understanding and implementing AI to accelerate your data team and enable true self-service." (`/resources/guides/ai-analytics/`).
  - Item icons: `public/assets/svg/icons/nav/*.svg`.

**Mobile nav (≤1000px)**: left/right lists hidden; grid becomes `1fr 0 1fr`, row 56px (`padding:8px 0`), logo at left; hamburger button 40×40 at right (`margin-right:8px`, radius 999px, glass gradient + glass shadow, inner bg #FFFCFC). Open state: full-height panel `position:fixed; top:66px (nav bottom); inset: 66px 0 0`, bg `#F9F1F1` + paper texture, scroll inside; enters with Framer `opacity 0→1` (spring, bounce 0, duration .1s) under `MotionConfig {spring, bounce 0, duration .3}`; body scroll locked (`removeScrollBar`). Button shows × when open. List `padding:32px 9.6px 64px`: sections **PLATFORM** (9 items), **SOLUTIONS** (5, with 24px icons), **RESOURCES** (9), then **Enterprise**, **Pricing** (and auth links — see `reference/dom/00b-mobile-nav-open.html`). Section title Cinetype Mono 10px/15.71 ls .32px uppercase, `padding-left:6.4px; margin-bottom:4px`; each sublist ends with `1px dashed` bottom border, `padding-bottom:8px; margin-bottom:8px`. Row link `display:flex; padding:12px 11.2px 12px 6.4px` (47px tall), icon + title gap 8px, title #14141C 14px, right chevron 16px rotated −90°.

### 4.1 Hero (stage)
- Stage: `position:relative; padding-top:102px; overflow:hidden; height 700 @1440`.
- **Backdrop** (absolute, `z-index:-1`, `pointer-events:none`): (a) Perlin noise layer (see 3.5) masked top→bottom; (b) **Cartesian grid** `CartesianGrid__UnitGrid`: full-size div masked by two 1px-line linear-gradients (`mask-image: linear-gradient(to right, transparent, transparent calc(100% - 1px), #fff calc(100% - 1px), #fff), linear-gradient(transparent, transparent calc(100% - 1px), #fff calc(100% - 1px), #fff); mask-size: 32px 32px; mask-position: center bottom`) → produces a 32px grid; its fill is the radial tint gradient (2.1), and an extra mask fades it in from 10% downward (`linear-gradient(rgba(255,255,255,0) 10%, … ramps to opaque)`).
- **Hero section** `HomeSimplifiedHero__hero`: `display:flex; flex-direction:column; align-items:center; gap:40px; max-width:1080px; margin:0 auto; text-align:center; padding: clamp(100px, 80px + 2dvw, 140px) 32px clamp(80px, 80px + 2dvw, 100px)` → 108.8px top / 100px bottom @1440 (box [180,102,1080,598]).
- Heading container: `flex column; align-items:center; gap:20px; container: simplifiedHeroHeading / inline-size`.
- **H1** box [206,211,1028,190]: "The Analytics platform" + `<span data-style="italic">for humans and agents</span>` (block, Editorial italic). `padding: 4px 6px 25px; margin: 0 -6px -6px`. Sparkle SVG 51×52 (`svg/hero/hero-sparkle.svg`, color #F5C0C0) absolutely at `top:-12px; right:8px` (x 1175, y 199).
- **Sub-headline** (`content`): `display:flex; flex-wrap:wrap; justify-content:center; align-items:center; gap:1ch (9px); max-width:580px`. Sequence: "Rethinking" · [pill BI] · [pill Conversational analytics] · "and" · [pill Context management] · "for the agentic era." Text Cinetype 300 24px/36px #31263B (`text-wrap:balance`).
  - Pill link: `display:inline-flex; align-items:center; gap:8px; padding:6px 12px 6px 6px; border:1px solid #DBD7DA; border-radius:30px; background: color-mix(in srgb, #FFFCFC 70%, transparent); box-shadow: 0 2px 4px color-mix(in srgb,#01011B 6%,transparent); transition: border-color .25s cubic-bezier(.25,.1,.25,1)`; hover bg `#FFFCFC`, border `#AFA9B1`. Height 43. Label 24px, `line-height:normal`.
  - Icon spot 28×28 circle: `border:1px solid color-mix(in srgb, currentColor 49%, transparent); background: color-mix(in srgb, currentColor 13%, #fff)`, icon 16×16. Colors: BI = jade `#5CB198` (icon fill #35705D), Conversational analytics = amethyst `#A477B2` (icon fill #9263A1), Context management = `rgb(123,139,224)`.
  - Links: BI → `/product/bi/`, Conversational analytics → `/product/threads/`, Context management → `/product/context-studio/`.
- **Actions**: `flex; gap:20px; justify-content:center; flex-wrap:wrap` at y 550: primary "Get started for free" (170×50, `https://app.hex.tech/signup?source=home-hero`) + secondary "Request a demo" (148×50, `/request-a-demo/?source=homepage`).

### 4.2 Customer banner
- Frame: full content width, `background: color-mix(in srgb, #FFFCFC 30%, transparent)` (i.e. rgba(255,252,252,.3)), `border-bottom:1px solid #DBD7DA`, `z-index:2`.
- Top edge (sits on the frame's top edge, `translateY(-6px)`, h 12): rule `1px solid #DBD7DA` — label — rule. Label `<h2>` "TRUSTED BY LEADING DATA COMPANIES": Cinetype Mono 10px/12px ls .833px uppercase #43394C, `padding:0 12px`, `border-left/right: 1px solid #43394C` (tick marks), box 265×12 centered (x 588). Small corner tick marks also at the frame's outer corners (visible in screenshot at x≈29/1411).
- Logos `<ul>`: `display:flex; flex-wrap:wrap; justify-content:center; align-items:center; gap:24px 54px; padding:44px 32px 40px`. Every logo is 40px tall (width from aspect). Order & widths @1440: Reddit 92, Notion 31★, Sierra 96, Anthropic 106, Lovable 110, Ramp 96★, Rivian 120, Figma 78★, Brex 88 | Cursor 101, AWS 50, Sedgwick 120, StubHub 65★, Mercor 105★, Thinking Machines 160, Surge AI 77, Neo 61★, Chime 75★ (2 rows of 9; ★ = has customer story).
- ★ logos are links (`/customers/<slug>/`) with a 12×12 indicator dot (top-right, `top:-8px; right:-12px`, `border-radius:6px; background: rgba(3,3,4,.16); border:1px solid rgba(3,3,4,.16)`) and a **hover popover**: 300px wide, `padding:8px 16px 16px; border-radius:4px;` glass gradient + glass shadow, `position:absolute; bottom:56px` (above the logo), content = logo 32px tall centered (`margin: 4px auto 8px`), divider (quote icon 12px between lines, `margin-bottom:16px`), blockquote Cinetype 300 14/21.994 #31263B, attribution (`margin-top:12px`, strong name + title Cinetype 10/15.71 #89828D). Rest: `opacity:0; transform: translateY(-28px)`; hover (`@media (hover:hover)`): `opacity:1; transform:none`; `transition: transform .5s linear(<spring>) .012s, opacity .14s ease-out .012s`. Popover copy:
  - Notion: "Our vision for Notion’s data team is that anyone, regardless of technical proficiency, is comfortable using data to answer their own questions – and Hex enables that." — **Aks Nemana**, Data Scientist & Abhishek Modi, AI Software Engineer
  - Ramp: "We like to embed Hex dashboards where teams work." — **Ian Macomber**, Head of Data and Analytics Engineering
  - Figma: "With Hex’s Notebook Agent, I never have to build another chart again? What a dream come true." — **Rie McGiwer**, AI Insights Researcher and Molly Jane Nicholas, Senior Researcher
  - StubHub: "Hex has helped us empower business analysts to explore and dig into data on their own" — **Meghana Reddy**, Head of Data at Stubhub
  - Mercor: "Hex’s Notebook Agent’s ability to build reports increases our operational speed — days into hours, which for our business, is millions of dollars." — **Dhaval Patel**, Account Lead
  - Neo Financial: "Hex’s Slack integration unlocked silos of data, in governed ways, increasing trusted answers and insights." — **Brandon Rochon**, VP of Data & Analytics and David Adair, Group Product Manager for Cards and Lending
  - Chime: "Hex’s Context Studio and Evals give us the visibility needed to manage our context at scale." — **Jordan Farrer**, Director of Data Science & Analytics
- Responsive: ≤800 logos gap `14px 39px` (wraps to 3–4 per row at 768, 2–3 per row at 390; frame 503 tall at 390).

### 4.3 "A different approach to Analytics and BI"
- `<section>` `display:flex; justify-content:center; position:relative; overflow:hidden`, h 362 @1440.
- Background illustration: inline SVG 1382×585 (`svg/illustrations/built-different-orbits.svg`), absolutely centered (y 777–1362, overflows top/bottom, clipped): concentric thin arcs with small app-icon bubbles (OpenAI, Claude asterisk, Slack, chat, layout, "?" marks, little squares). Bubbles are `g[filter]` groups that **pop in** when revealed (Motion 6.4).
- Content: `max-width:996px; padding:100px 40px 0; flex column; gap:16px; align-items:center; text-align:center; z-index:1`.
  - H2 (heading-1, gradient) "A different approach to Analytics and BI" — box 928×162 (2 lines: "A different approach" / "to Analytics and BI").
  - P (20/30, 300, `max-width:760px`): "BI tools, chat apps, and vibe-coding only give you inconsistent answers and poor user experience. Hex is built with a full suite of tools to unlock your team's curiosity while maintaining trust and governance."

### 4.4 Ask a question, get a trusted answer
- Container `max-width:1240px; padding:60px 0`; `SectionWrapper` `display:flex; gap:70px` (row). Info column 330 (x 100), illustration 840 (x 500).
- Info: agent-logo stack icon (160×50: five 20px logos — ChatGPT/Codex, Claude, Slack, CLI, MCP — each in a small round card, overlapping) → H3 "Ask a question, get a trusted answer" → primary "Explore self-serve insights" (`/product/threads/` area link; 218×42).
- Quote: "The ability to use Hex in any way we choose is valuable because now we can connect into Hex via my favorite dev tools." (span = "The ability to use Hex in any way we choose") — LangChain logo 86×32, **Nithin Bose.** VP of Customer Engineering.
- Illustration (`display:flex; gap:20px; align-items:center`):
  - **Agent chat window** 588×672 at [500,1379] (max-width 590), tab label "Chat with the Hex Agent". Header bar (`NavBar__Header`, grid 3 cols, `padding:6px; gap:16px; border-bottom:1px solid #ECEDF2`): Hex mark + "Galactic Revenue I…", segmented tabs **Agent** (active, #473982) / Notebook / App, "Share" button. Scroll area 548px tall containing the thread (user bubbles #473982 text on light purple; agent messages; "Thought for 23 seconds" collapsibles; two HTML/SVG charts: "Revenue by Product Line Over Time (Q1-Q3)" stacked bars Q1–Q3, "Account Revenue vs Growth (Q3)" scatter; second exchange "Can you break this out by region too?…", "Thought for 11 seconds", "Galactic Revenue Distribution by Product Line (Q3)" 100% stacked horizontal bars (purple #6F5FB3-ish / blue / lavender — copy colors from DOM), "Quick insight: …"). Initially scrolled to the bottom (scrollTop 869.5 of 1417). Prompt bar at bottom: "Ask another question…", "+" button, "NexaCorp Galactic Warehouse ▾", enter button. Full markup: `reference/dom/p1-03--HomeTrustedAnswers.html`.
  - **Agent tools column** (x 1108, w 360, `gap:20px`; overflows the right edge of the 1440 viewport and is clipped by the page): (1) Claude/Codex MCP window 360×318 — toggle chips "Claude" (active) / "Codex" (Cinetype Mono 11px, 88×30 / 80×30) above a Claude-styled chat ("Show NexaCorp Q3 sales", user bubble "Get me NexaCorp’s Q3 sales by product line", "Thought for 27s", tool call "Hex  Search projects", serif answer "NexaCorp Q3 sales by product line…", input "How can I help you today?" with mic + orange send); (2) Slack window 360×285 (title "Slack", Julia 4 min ago "@Hex get me NexaCorp's Q3 sales by product line", "3 replies", Hex bot reply + "View in Hex" button + "NexaCorp Q3 revenue trends by product line"); (3) Hex CLI window 360×165 (`hex thread create "Get me NexaCorp’s Q3 sales by product line"`, Thread ID `019fb3c7-0dbe-7550-b735-7590006ecc27`, Created `2026-07-30T16:06:34.601Z`, URL link, prompt `→ ~ ▌` with blinking block cursor).
- Responsive: ≤800 the section stacks (info above illustration; quote moves below illustration), tool windows 2 and 3 hidden/reflowed per `HomeTrustedAnswers` media rules in `home-module-rules.css`.

### 4.5 Ground every answer in your organization’s context
- `<section>` `max-width: min(100% - 80px, 900px)` (900 @1440, x 270); `SectionWrapper` `flex-direction: row-reverse; gap:10px`. Info column 330 at right (x 840), illustration 560 at left.
- Info: AbstractMark icon 60×60 (`svg/marks/infotext-icon-2.svg`) → H3 "Ground every answer in your organization’s context" → primary "Explore the Context Engine" (`/product/context-studio/`).
- Quote: "It's something I check every day — seeing context gaps and suggested improvements surfaced automatically provides a practical way for us to bring trusted AI self-service to the business." (span = "seeing context gaps and suggested improvements surfaced automatically") — Zoe logo 50×22, **Craig W.** Staff Data Engineer.
- **Compounding-context cycle** (`--cycle-size: min(560px, 97cqw)` → 543.2px; disc = size×430/560 = 417; step radius = size×210/560 = 203.7; step = size×156/560 = 151; label ring = size×178/560 = 173): grid pile, `margin:16px auto`.
  - Disc 417 circle: `border:1px solid #DBD7DA; box-shadow: 0 26px 57px rgba(0,0,0,.1); overflow:clip`, filled with Perlin noise (hover-duration 500ms variant).
  - Arrows SVG 543×543 (`svg/illustrations/org-cycle-arrows.svg`) — three curved arrows around the ring.
  - Center text (max-width size×190/560): default "Compounding context" (heading-4, 19.4px, #14141C). On hover/focus of a step it swaps (Framer, see 6.6) to that step's title + description (Cinetype 14px #43394C, `text-wrap: balance`).
  - 3 step buttons (151×151, white, `border:1px solid #DBD7DA`, radius 50%, step shadow, paper-texture `::after`), positioned by `transform: translate(normalX*radius, normalY*radius)`: top (0,-1), bottom-right (0.866,0.5), bottom-left (-0.866,0.5). Each has an illustration SVG (`svg/illustrations/org-step-{1,2,3}.svg`, width = size×ratio: .1304 / .175 / .175, centered `translate(-50%,-54%)`) and a circular **textPath label** 173×173 (`svg/illustrations/org-step-label-*.svg`, Cinetype Mono 10px uppercase) whose text fills with the step color when active (`transition: fill .16s linear`). Active (`data-active=true`, set on hover/focus): noise overlay fades to 1 (texture jade / citrine / amythyst, 256px, `animation: translate-step-noise 4s linear infinite` = bg-position 50% 0 → 50% 256px; masked dot-grid 6px ∩ linear-gradient(rgba(255,255,255,.8), rgba(255,255,255,.1) 60%)).
  - Steps: 1 "Build apps + ask questions" — "Ask questions and publish apps and dashboards grounded in your organization’s shared context." (color jade #5CB198); 2 "Auto-detect gaps" — "Hex learns from every interaction, flagging missing or thin context and suggesting concrete fixes." (color `color-mix(in srgb, #CDA849 40%, #14141C)`); 3 "Sharpen the context" — "Review and apply suggested fixes to guides, endorsements, and models, strengthening context for the next answer." (color violetTopaz #5F509D).

### 4.6 Share insights with generative dashboards and data apps
- Same row layout as 4.4 (info left 330, illustration right 840, gap 70).
- Info: AbstractMark icon (`svg/marks/infotext-icon-3.svg`) → H3 "Share insights with generative dashboards and data apps" → primary "Explore AI app building" (`/product/data-apps/`).
- Quote: "With Hex's Notebook Agent, I never have to build another chart again? What a dream come true." (span = "I never have to build another chart again?") — Figma logo 67×35, **Molly Jane Nicholas.** Senior Researcher.
- **Project windows** grid: `grid-template-columns: 410px 410px; gap:20px` (2×2), each `<figure>` `aspect-ratio:1200/870` (410×297.25), window shell (3.4) containing stacked `<img>` frames (`object-fit` cover, 1200×870 sources) and a **floating prompt pill** overlapping the bottom-left corner (`position:absolute; left:-7px; bottom:-7px; min-height:42px; padding:0 15px; gap:10px;` pill gradient bg, Cinetype 14px/14px #31263B, trailing ↵ glyph). Dashed guide lines at the grid's left/right edges (extend 50px).
- Image/prompt sequences (from RSC payload; local files `images/conversational-analytics/`):
  - Window 1 market-explorer 1→4: "Explore customer demand across the US" (wpm [331,344,334,330,311]) · "Show demand as a heatmap" · "Make it easy to compare three locations" · "Give this a dark, high-contrast control-room look"
  - Window 2 revenue-pulse: "Track revenue across the business" · "Style this like an editorial business report" · "Use bars instead, and label the values" · "Put the key takeaway first"
  - Window 3 pricing-lab: "See next quarter’s revenue forecast" · "Turn this forecast into an interactive pricing tool" · "Make the forecast range easier to read" · "Compare the scenarios side by side"
  - Window 4 account-watch: "Keep an eye on customer accounts" · "Organize these accounts into a follow-up board" · "Make it feel warmer and more approachable" · "Make the usage trends easier to scan"
  - (all others `promptWordsPerMinute: [420]`). Alt texts are in the RSC payload.
- Animation: see 6.5. Responsive: ≤600 one column and only the first two windows shown (`projectWindow:nth-of-type(n+3)` hidden; 390: grid 334 wide, gap 12).

### 4.7 See what people are asking, and whether the answers are right
- Row-reverse layout (info right at x 1010, illustration left 840).
- Info: icon `svg/marks/infotext-icon-4.svg` → H3 "See what people are asking, and whether the answers are right" → primary "Explore the Context Studio" (`/product/context-studio/`).
- Quote: "We have so many people and products that our context is never stagnant. Even when we launch a new data domain for the first time, it's already stale the next day. Hex’s Context Studio and Evals give us the visibility needed to manage our context at scale." (span = last sentence) — Chime logo 56×30, **Jordan Farrer.** Director of Data Science & Analytics.
- Windows: grid pile `aspect-ratio: 2/1.7`, `margin-top:50px` (840×714):
  - Dashboard window ("Agent observability" tab), `aspect-ratio: 820/391` (840×401) at top: "Context Studio" app chrome, filters (All roles, All users, All topics, All warnings, All sources, Last 7 days), sidebar (OBSERVABILITY › Overview; MANAGEMENT › Suggestions, Endorsements, Guides…), KPI sparklines (Agent conversations **461**, Unique users **55**, Warnings **12** — IBM Plex Sans 24px/31.2 700), stacked bar chart "Conversation volume", horizontal bars "Top conversation topics", table (warnings / source). Hover tooltips (`HexTooltip`).
  - Evals window ("Evals" tab), `aspect-ratio: 790/441` (840×469) overlapping bottom-left, `transform: translate(-159.5px, 202px)` (CSS percentages; spills past the section's left edge), `z-index:2`: "Enterprise Launch Readiness", "Completed 19 min ago, Maya Patel", "10m 39s total  141.2 credits", pass/fail bars, table rows with Passed/Failed badges (`icons/evals/*.svg`), rubric rows. Clicking rows opens a slide-in drawer (`DataBenchExpansionDrawer`: backdrop fade .134s / drawer translate(100%→0) .268s ease-in-out).
  - Full markup: `reference/dom/p1-06--HomeContextStudio.html`.
- ≤1000: windows restack per `HomeContextStudio` media rules.

### 4.8 Product ethos (two glass cards)
- `<section>` `display:grid; grid-template-columns: 1fr 1fr (610/610); gap:20px; padding-bottom:60px; max-width:1240px`.
- Card (`<article>`): `display:flex; flex-direction:column; padding:11px 11px 40px; border-radius:6px; background: rgba(253,253,253,.4); backdrop-filter: blur(7.5px); box-shadow: glass (2.2); overflow:hidden`. Height 795.
  - Illustration frame 588×256 (`aspect-ratio:588/256; margin-bottom:29px; radius 6px; bg rgba(253,253,253,.4); box-shadow: 0 0 0 1px rgba(0,0,0,.06); overflow:hidden`) with Perlin-noise underlay (opacity .8) and the PNG on top (`images/product-ethos/*.png`).
  - Content `padding:0 29px; flex column; gap:25px`; copy `gap:15px`: eyebrow pill → H2 (heading-3, gradient) → body (16/24 300, paragraphs `margin-bottom:20px`; bullet list `padding-left:24px`) → primary button.
  - Card 1: eyebrow **Flexible by design** (citrine); H2 "Work with any data, any AI model, and any context, so you aren’t locked in"; "Your AI bill is getting big – but you don’t know who is spending how much on what things, and whether they’re actually valuable." / "Hex helps you get control of this:" / • Model choice, including open source models • Thread-level observability into token spend, so you can see who is spending what on which projects • Eval sweeps that let you dial in the price / quality frontier across models; button "Explore how Hex keeps you flexible".
  - Card 2: eyebrow **Control without compromise** (blue); H2 "Secure your data, with enterprise-grade permissions and trust"; "Hex is built so organizations can open up access without giving up control." / "Bring AI and data work onto a platform backed by enterprise-grade security, governance, organization controls, and visibility into how your data is being used." / "The infrastructure stays rigorous so the people using it don’t have to think about it."; button "Explore Trust Center".
- ≤800: single column.

### 4.9 Customer stories two-up (full bleed)
- Full-width grid row, `background:#FCF8F8; border-top:1px solid #DBD7DA`, h 300; vertical center rule 1px `#E9E5E8` at grid col 6 boundary (x 720).
- Two columns (691 each), each `padding:12px 0` → `QuoteWrapper` `flex column; align-items:center; justify-content:center; padding:24px 32px 40px`: logo (Mercor 136×52 / Algolia 99×52) → `<q>` 20/30 300 #31263B centered `max-width:576px; margin-top:12px` with bold `<em>` (Cinetype 700, #14141C, not italic) → author (`margin-top:16px`, name Cinetype 14/22 #14141C, title Cinetype Mono 12px ls .9996 #89828D).
  - Left: "If we didn’t have Hex, **we might’ve left more than $100M on the table.** That might even be an underestimate." — Dhaval P., Account Lead
  - Right: "AI can do almost everything for you in Hex. I use it to scaffold entire apps and help me debug SQL queries. **It makes me 10x faster.**" — Tom C., Principal Engineer
- ≤800 stacks (570 tall @768, 660 @390).

### 4.10 Use cases
- `<section>` `padding:100px 0 75px; position:relative`; Perlin noise backdrop (opacity .8, masked to fade downward).
- Content `display:flex; gap:80px; align-items:center; max-width:1240px; padding:0 40px`.
- Left copy (`max-width:240px; flex column; gap:20px`): mark SVG 60×60 (`svg/illustrations/use-cases-mark.svg`) → H2 heading-2 "Use cases" with italic subheading span "Get the most out of Hex" (Editorial 200 italic 52/67.6, gradient).
- Right list (840 wide), 3 card links (`HomeUseCaseCard`): `display:flex; gap:25px; align-items:center; padding:30px 0; border-bottom:1px solid #E9E5E8 (last none); color:#43394C; transition: border-color .25s`. Tile 100×100 (Card wrapper, radius 12px, padding 10px, glass shadow) with 60×60 mark (`svg/marks/use-case-{1,2,3}.svg`); copy `gap:8px`: title row (H3 heading-4 + arrow-up-right 15px at `opacity:.5`), description 16/24 300 #31263B.
  - "Migrate from traditional BI to modern AI-powered self-serve" — "Move beyond static dashboards and give teams trusted, AI-powered access to the data they need while keeping your data team in control of the foundation."
  - "Build a Context Layer for AI on data" — "Bring business logic, definitions, models, and institutional knowledge together so agents can reason from shared, trusted context and improve as that context grows."
  - "Make chat apps work with data" — "Let teams work from Claude, Codex, Cursor, or wherever they’re most productive while Hex provides a consistent layer of trusted data and organizational context underneath."
  - Hover: border-bottom transparent (and the previous card's too via `:has(+ :hover)`), `::before` overlay opacity .05, arrow opacity 1.
- ≤1000 stacks (copy above list).

### 4.11 Loved by the best data teams (customer stories tout)
- Wrapper `padding:100px 0` (ToutWrapper). Inner `max-width:1240px; padding:0 32px; flex column` (1176 inner width @1440, x 132).
- **Title block** (h 384): `border:1px solid #E9E5E8` (top/left/right). Left & right 128px columns and 64px rows above/below the heading are a 64px **graph-paper grid** (`background-image: linear-gradient(#E9E5E8 1px, transparent 1px), linear-gradient(to right, #E9E5E8 1px, transparent 1px); background-size: 64px 64px`). Corner "anchor" brackets (AnchorLines) at the block corners. Heading area `padding:20px 30px; flex column; centered`:
  - H2 (heading-1, `max-width:600px`): line 1 `<span>Loved</span>` (Editorial italic 78px) + " by the", line 2 "best data teams" (SemiExtended 60/78) — gradient.
  - P 20/30 300 centered: "Hex helps companies of all sizes do more with their data."
- **Stories grid** (h 316): `border:1px solid #E9E5E8`; 4 equal card links (294 wide) separated by `border-right:1px solid #E9E5E8`; card `padding:30px; flex column; gap:15px; transition: box-shadow .25s`. Top block (`gap:15px; transition: transform .25s`): logo SVG 200×60 (`svg/logos/story-*.svg`, `margin-bottom:10px`), H4 heading-4, P 16/24 300. Bottom row (`justify-content:flex-end; gap:10px; opacity:.4`): "READ MORE" (IBM Plex Mono 700 12px uppercase #89828D) + arrow 15px, both `opacity:0` at rest.
  - Notion — "One place for insights" — "Notion made Hex the one place for everyone, from data science to CX and sales, to make decisions with data." (`/customers/notion/`)
  - Mercor — "Scaling self-serve AI analytics" — "Mercor democratizes analysis across their org with Notebook Agent."
  - Figma — "Lowering barriers to insight" — "Figma's team focuses on strategy over syntax using Hex's AI agents."
  - Neo — "Breaking data silos" — "Neo drives insights right where they work using Threads and Slack integration."
  - Hover: card bg transparent + story-hover shadow, top block `translateY(-2px)`, bottom row and its spans opacity 1.
- **Social row** (`padding-top:40px`; inner `flex; gap:30px; align-items:center`; has its own SimpleFadeIn):
  - G2 card 352×404: `border:1px solid #DBD7DA; padding:38px 35px; flex column; gap:24px; max-width:450px`; G2 badges image 280×217 (`images/misc/g2-awards.svg`, `padding-bottom:8px`); H3 heading-3 "Users love Hex" (`margin-bottom:4px`); P 14/22 300 "Rated on G2 as an industry leader based on customer reviews. [Check them out →]" (inline link #43394C underlined).
  - Notion quote card 794×404 (Card wrapper: radius 12px, `padding:38px 45px`, glass-ish shadow): Notion logo 35×45 → quote row (`gap:20px`: quote-mark + vertical line column 15px, blockquote Cinetype 300 24/36 #14141C) "Our vision for Notion's data team is that anyone, regardless of technical proficiency, is comfortable using data to answer their own questions — and Hex enables that.” → author row (`margin-top:≈46px; min-height:45px`): 35×35 round headshot (`margin-right:12px`) + "Abhishek Modi" (14px 400 #31263B) + "Software Engineer at Notion" (14px 300).
- 768: stories grid 2×2; social row stacks. 390: everything 1 column (stories grid 308 wide), quote 22/33.

### 4.12 Instant integration with the whole stack
- Wrapper `padding:70px 0 60px`; inner `max-width:1240px; padding:0 40px; flex column`.
- Top (`margin-bottom:70px; gap:15px; centered`): H2 heading-1 `max-width:800px`: italic `<span>Instant integration</span>` (Editorial 78/101.4) line 1, "with the whole stack" line 2 — gradient; P 24/36 300 `max-width:500px` centered "Out-of-the-box connections and flexible APIs make setup a breeze."
- Grid `grid-template-columns: repeat(3, 1fr) (373.3 each); gap:20px`; rows 361 / 339. Card (`GridItem__DivWrapper`): `padding:5px; position:relative; box-shadow: 0 0 0 1px transparent; transition: box-shadow .25s, background-color .25s`; background is a light hatch/grain panel (`::after`, opacity rises to .1 on hover; see `styled-component-rules.css` › GridItem). Inner: Illustration 363×160 (`overflow:hidden; transition: transform .25s`) → Info (`padding:35px 20px 10px; transition: transform .25s`): H4 heading-4 (`margin-bottom:7px`) + P 14/22 300 → "LEARN MORE" row (`padding:0 10px 10px; justify-content:flex-end; opacity:.4`, label+icon opacity 0 at rest).
  - Hover: card bg transparent + 1px ring `color-mix(#31263B 30%)`; illustration `scale(1.04) translateY(-5px)`; info `translateY(-3px)`; learn-more row + spans opacity 1.
  - Cards (illustration markup in `reference/dom/illustrations-integrations-card-N.html`; logo chips are Cinetype 16/24 300 text + inline SVG logos, chip h 36):
    1. Snowflake / Amazon Redshift / Google BigQuery / Databricks logos above an isometric "warehouse grid" with small db icons — **Built for the warehouse** — "Hex has built-in connections to the most popular data warehouses, lakehouses, and databases. It’s easy to set up data connections, and securely share them with your team."
    2. "dbt" chip over a doc/table line drawing — **dbt metadata, docs, & metrics** — "Hex has a deep integration with dbt, including automatically enriching schemas with dbt docs."
    3. Snowflake · BigQuery · Databricks chips over isometric pin/plate drawing — **Connect to your warehouse with oAuth** — "Leverage the permissions set up in your data warehouse, by authenticating with oAuth"
    4. GitHub · GitLab chips over a git-branch line drawing — **Git it together** — "Export your projects to GitHub or GitLab to create an audit trail."
    5. Airflow · Dagster · Prefect chips over a DAG drawing — **Orchestration** — "You can include Hex projects in DAGs in Airflow, Dagster, or Prefect."
    6. HEX + API wordmarks with converging line bundle — **Hex API** — "Want to connect to something we haven't thought of? Use our powerful public API to write your own integrations."
  - Links: integration pages (`/product/integrations/snowflake/`, etc. — see DOM).
- 768: 2 columns (318.6). 390: 1 column flex (294 wide).

### 4.13 Bottom CTA
- Wrapper `padding:100px 0`; inner full content width with `border-top:1px dashed #E9E5E8; border-bottom:1px dashed #E9E5E8`; content `max-width:940px` centered (x 250 @1440), `display:flex`.
- Left column (593): `padding:40px 60px 40px 40px; flex column; align-items:flex-start; justify-content:center`: H3 heading-3 gradient "Getting started is easy." (`margin:0 -6px 10px`) → P 20/30 300 "Connect Hex to your data warehouse and do more with it immediately." (`margin-bottom:25px`) → actions (`gap:20px`): primary "Get started for free" + secondary "Talk to us".
- Right column (347): same padding, `border-left:1px dashed #E9E5E8`: P 16/24 300 "Check out all of our plans to fit your team or organization." (`margin-bottom:20px`) → secondary "See our plans" (h 40; `/pricing/`).
- ≤800 columns stack.

### 4.14 Tron divider + FAQ
- **Tron divider**: 9 full-width 1px lines with the tron gradient on #FFFCFC, increasing gaps (margin-bottom 3,4,5,6,7,8,9,10,0 px) and decreasing opacity (1, .9, .8, .7, .6, .5, .4, .3, .2); block `margin-bottom:30px` (h 61).
- FAQ wrapper `padding:80px 0` (SimpleFadeIn). Inner `max-width:604px; margin:0 auto; flex column`.
  - Top: H2 heading-2 "FAQ" (`margin:15px 0`) centered, `padding-bottom:20px; border-bottom:1px solid #DBD7DA`.
  - Items: `border-bottom:1px solid #DBD7DA; transition: background-color .25s; hover bg #E9E5E8; scroll-margin-top:240px`. Question button `display:flex; justify-content:space-between; align-items:center; padding:20px; text-align:left` — text Cinetype 400 18/24 -0.5px #14141C (h 64 per single-line item), chevron 15px rotates when open. Answer `display:none` → shown when open (`padding:10px 20px 20px; flex column; gap:12px`; Cinetype 16/24 300). Only one open at a time is not enforced in CSS — follow DOM (independent toggles).
  - Q/A copy:
    1. **What is Hex?** — Hex is the AI Analytics Platform where trust meets insight: a single, connected workspace where data practitioners run deep analysis, business users ask questions in plain language, and everyone collaborates on the same data. A shared context engine ensures every AI-generated insight is accurate and consistent.
    2. **Who uses Hex?** — Hex allows anyone to get answers from data with AI. Whether you’re a member of the data team running code-based experiments or a business user looking to self-serve a one-off question, Hex provides tailored AI-workflows for you to find answers from data, faster.
    3. **Why do data teams switch to Hex?** — Data teams switch to Hex because it gives them one connected, AI-native workspace for everything they do with data. Deep analysis, one-off questions, and critical business dashboards all happen on the same trusted context. Instead of juggling separate notebooks, BI tools, and ad-hoc Slack requests, Hex brings data work & AI together in one place.
    4. **Can business users access data without knowing SQL or Python?** — Yes. Hex lets anyone ask questions in plain language in Hex, Slack, or via MCP and get AI-generated analysis backed by your actual data, metrics, and business rules. No SQL, no Python, no ticket to the data team. And when a question needs deeper investigation, a data practitioner can jump directly into the same workflow without switching context.
    5. **How does Hex ensure AI answers are accurate and trustworthy?** — Hex's context engine combines database descriptions, semantic models, business rules, and analytical logic into one curated layer that powers every AI answer. Data teams can observe what’s being asked, catch inconsistencies, and continuously improve context over time. The result: business users get answers they can act on, and data teams maintain visibility and control over every insight.
    6. **How is Hex different from just using ChatGPT, Claude, Codex, or any other AI assistant?** — ChatGPT, Claude, Codex, and other AI assistants can generate answers. Hex helps teams build more trustworthy, repeatable AI-powered analysis by grounding it in the organization's data, business context, and definitions. Context Studio makes it easier to inspect and improve that context, while built-in evals let teams test changes before production and measure their impact on agent accuracy.
    7. **How is Hex different than point solution analytics tools?** — Hex enables you to bring all your business’s critical data context into one workspace. Solution-specific analytics platforms exacerbate tool sprawl and siloed workflows between teams, while creating governance gaps leading to poor decisions and thrash.
  - Footer line: "Can't find your answer here? [Get in touch]." (16/24 300 centered; link #43394C underlined, `/contact-us/`).

### 4.15 Footer
- `Footer__Wrapper` flex column (SimpleFadeIn), 1px `#DBD7DA` dividers above and below (full content width). Inner `display:grid; grid-template-columns: minmax(0,1fr) auto minmax(0,1fr)` (190 / 800 / 190 @1440); `max-width:1240px; padding:50px 30px; margin:0 auto`.
- Left (`flex column; gap:15px`): Hex wordmark SVG 60×20 with ® (`svg/logo/hex-logo-footer.svg`), then "Made with [emoji rotator] on 🌎." (Cinetype 14px #89828D). Rotator 20×20 window cycling emojis: 🥖 🍷 🛌 💜 🥨 🛹 🍤 🧄 🍞 🥥 ⛳ 🤞 ✨ 🔊 🎧 🌊 🍀 🤠 🎷 🍩 ☕ 🥟 🍺 🍰 🔮 🔒 (Motion 6.8).
- Center (`flex column; gap:60px; align-items:center`): link grid `grid-template-columns: repeat(4, 155px); gap:60px; max-width:800px`; column `flex column; gap:10px`, links `white-space:nowrap`, 14/22 #43394C, `transition: background-color .1s linear`.
  - PLATFORM: AI and agents `/capability/ai/`, Agentic notebooks, Conversational analytics, Context Studio, Data apps, Hex CLI, Business intelligence, Exploratory analysis, Embedded analytics, Integrations, Changelog (`https://learn.hex.tech/changelog`)
  - RESOURCES: Pricing, Switching to Hex, Enterprise, Docs (`https://learn.hex.tech`), Blog, Events, Templates, Compare (`/compare/`), Trust Center (`https://trust.hex.tech`), Status (`https://status.hex.tech`)
  - COMPANY: About, Careers, Customers, Solutions, Media kit (Notion URL in DOM), Newsroom
  - CONNECT: Request a demo, Technical support (`mailto:support@hex.tech`), Contact us, LinkedIn, X (Twitter), YouTube
  - Bottom row (`flex; flex-wrap:wrap; gap:14px 20px; justify-content:center`), all #89828D 14px: "© 2026 Hex Technologies Inc." · Privacy policy · Terms & conditions · Modern slavery statement (`/files/Hex_UK_Modern_Slavery_Act_Statement.pdf`) · "Opt out of tracking" (button; hover bg rgba(49,38,59,.09)).
- Right (`align-items:flex-end`): **hit counter** 126×42 (`title="You are visitor: 6,530,352"`): box `border:1px solid #DBD7DA; padding:5px; gap:5px; transition: background-color .25s; hover bg color-mix(#31263B 10%)`; 7 seven-segment digits, each 12×20 built from 1px lines (lit `#31263B`, unlit `rgba(49,38,59,.3)`). Number is dynamic on the live site — render the static value.
- ≤1250/≤800: inner becomes flex column `gap:45px` (737 wide @768, 374 @390), link grid wraps.

---

## 5. Responsive summary (768 & 390)
- **≤1000**: hamburger nav (56px row). Header at 390: 12px top grid row, ticker 27px, nav 56px.
- **768**: margins 15.36px; feature sections stack vertically (info → illustration → quote), container padding 40px 0 (sections 4,6,7) and side inset 30px (x 45, w 677). Hero H1 54.72/65.66, sub 24/36 (pills wrap 2 lines). heading-1 46.745/60.77; heading-3 23.18/30.13; heading-2 33.98/44.17. Customer banner 287 tall, logos gap 14px 39px. Project windows 2 cols (328.6). Ethos 1 col. Two-up stacks. Stories grid 2×2 (335.6). Integrations 2 cols. FAQ stays 604 wide centered. Footer stacks (flex column, gap 45).
- **390**: margins 7.8px; section side inset 20px (x 28, w 334). Hero padding 100px 32px 87.8px; H1 42/50.4/-1.05 (box 322×294); sub 20/30, pills 42 tall, items wrap; CTAs stack vertically (y 747 and 817). Built-different H2 38/49.4 (204 tall), copy 20/30. heading-3 20/26. Use-cases H2 30/39 with italic 39/50.7. Two-up quotes 20/30 (each 330 tall). Stories 1 col; Notion quote 22/33 inside a narrow card. Integrations 1 col 294 wide. FAQ full width (374), questions wrap (88–112px tall). Footer 1114 tall.
- Exact per-element boxes: `reference/measurements/summary{390,768,1280}.json`; full computed-style trees at 1440: `reference/measurements/header.txt` (header/ticker/nav), `s1.txt` (hero, banner, built-different), `s2.txt` (sections 4–9), `s3.txt` (use cases → footer); every text node with font/size/color at 1440: `text1440.txt`. Tree format: `<TAG Component> [x, y, w, h] «text» {non-default computed props}`.

---

## 6. Motion (all measured; technology = Framer Motion (bundled `motion`) + CSS; **no GSAP, Lottie, Rive, video, or WebGL** on the page; one 2D `<canvas>` in the nav callout)

Global easing tokens: `--animation-duration: .25s; --animation-easing: cubic-bezier(.25,.1,.25,1)`; `--spring-easing: linear(0, .0007 .36%, .0058 1.08%, .0217, .0454 3.23%, .086 4.66%, .1594 6.81%, .4654 15.05%, .5681 18.28%, .6468 21.15%, .7212, .782 27.6%, .8355, .8769 34.77%, .8968, .9137, .928 41.22%, .9419, .9531 46.24%, .9635 49.1%, .9786 55.2%, .9888 62.36%, .9949 70.97%, .9982 82.44%, .9997 100%); --spring-duration: .747s`. A 100-point `linear(0 0%, 0.005892 1%, 0.022227 2%, …)` spring is used as `--hover-transition-timing-function` (copy from `home-module-rules.css`/`computed-stylesheets.css`). All motion is disabled under `prefers-reduced-motion: reduce`.

### 6.1 Nav squish on scroll (Framer `useScroll` + `useSpring`)
- Trigger: `scrollY >= 40` → squished; `< 40` → expanded (also forced squished when mobile menu open). `smoothSquishProgress = useSpring(0|1, { bounce: 0, duration: 400 })` (measured settle ≈375ms; reverse ≈400ms).
- Driven values (`useTransform(progress, [0,1], …)`):
  - Nav wrapper `y`: tickerHeight (26.85px) → 0; inner subgrid `y`: `1.25rem` → `0rem` (i.e. at rest nav sits 46.85px lower, below the ticker; squished it covers the ticker row).
  - Ticker strip: `opacity 1 → 0`, `y 0rem → .5rem`.
  - Nav shadow layer opacity 0 → 1 (shadow `0 3px 12px -3px rgba(100,63,63,.32)`); margin border cells opacity 0 → 1; root bottom border `scaleX 0 → 1` + opacity 0 → 1; corner accent bars opacity 0 → 1 (`--progress` -1 → .5).
  - Background mask stops: `--stop-1` `rgba(0 0 0/.48)` → `rgba(0 0 0/1)`, `--stop-2` `rgba(0 0 0/0)` → `rgba(0 0 0/1)` (bg becomes solid paper).
- Header itself is `position: fixed` (z-index 3) — content scrolls underneath.

### 6.2 Section reveals (Framer `whileInView`, `viewport: { once: true }`)
- `ANIMATIONS.SimpleFadeIn` (marked `data-reveal`): `initial { opacity: 0, y: 5 }` → `whileInView { opacity: 1, y: 0 }`, `transition { type: "spring", delay: .2, duration: .45, bounce: 0 }`. Applied to: hero section wrapper, customer banner frame, built-different, trusted-answers, org-context, conversational-analytics, context-studio, product-ethos, use-cases, customer-stories tout, social tout (separately), integrations tout, bottom CTA, FAQ, footer. Observed: starts ≈200ms after entering view, y 5→0 settles in ≈450–690ms (spring tail), opacity animates via WAAPI over the same spring.
- Other presets in the bundle: `Popover { initial {opacity 0, y 5}, tween .25s ease [.25,1,.25,1] }`, `Cell { initial {opacity 0, y 25}, tween delay .15 duration .65 ease [.25,1,.25,1] }`, default tween `{ ease: [.25,1,.25,1], duration: .5 }`.
- Hero on load: same SimpleFadeIn (y 5 → 0, opacity 0 → 1) starting ~200ms after hydration. There is also a CSS utility `@keyframes hero-fade-in { 0% { opacity:.0001; transform: translateY(var(--y, 32px)) } 100% { opacity:1; transform:none } }` with `animation-fill-mode: both` (not applied on the current homepage DOM).

### 6.3 Ticker marquee — CSS
`animation: ticker 56s linear infinite` (`translateX(0% → -20%)` over 5 copies), paused on hover/focus of any item. Item hover bg `#F8F5F6` (`transition: background-color .1s linear`).

### 6.4 Built-different bubbles — CSS, IntersectionObserver class toggle
When the illustration enters view it gets `.illustrationRevealed`; each `g[filter]` bubble runs `bubblePop` (`0% { opacity:0; transform: scale(0) } 100% { opacity:1; transform: scale(1) }`), `.45s cubic-bezier(.34,1.56,.64,1) both`, `animation-delay: calc(.6s + var(--bubble-pop-order, 0) * 90ms)` — measured delays 600, 690, 780, 870, 960, 1050, 1140, 1230, 1320 ms (9 bubbles). Set `transform-box: fill-box; transform-origin: center` on the groups.

### 6.5 Agent logo roll-in (trusted answers icon) — CSS
On reveal (`.agentLogosRevealed > *`): `agentLogoRollIn` `0% { opacity:0; transform: translate(-24px) rotate(-90deg) } 30% { opacity:1 } 100% { opacity:1; transform:none }`, `.2s cubic-bezier(.34,1.56,.64,1) both`, `animation-delay: calc(.5s + var(--agent-logo-order,0) * .125s)` → 500/625/750/875/1000 ms.

### 6.6 Conversational-analytics project windows — Framer + JS timers
- One window animates at a time, round-robin in order 4 → 1 → 2 → 3 → 4… (after the initial pass, each window steps to its next frame, wrapping 4 → 1).
- Per step: the floating prompt **types** the next prompt character-by-character (TypingText; at 420 wpm ≈ 33 ms/char; blinking cursor `blinkCursor` `50% { opacity:0 }` `.8s step-end infinite`), then the new frame image fades in on top: `initial { filter: blur(8px), opacity: 0 }` → `animate { filter: blur(0px), opacity: 1 }`, `transition { type: "tween", duration: .3, delay: .2, ease: [.22,1,.36,1] }`; previous frame stays underneath and is removed afterwards. Then wait 1100 ms (500 ms in the faster mode) before the next window starts. Measured full step ≈2.4–2.6 s per window.
- Prompt pill has a placeholder span (full text, for width) and a typed span overlaid.

### 6.7 Org cycle
- Hover/focus on a step: center content swaps via `AnimatePresence` — enter `initial { opacity:0, filter: blur(3px), transform: translateY(4px) }` → `animate { opacity:1, filter: blur(0px), transform: translateY(0px) }` (default Framer spring), exit `{ opacity:0, filter: blur(3px), transition { duration: 0 } }`.
- Step noise overlay: `transition: opacity var(--hover-transition-duration) var(--hover-transition-timing-function)` (500 ms spring), noise drifts with `translate-step-noise 4s linear infinite` (bg-position-y 0 → 256px). Label text fill `transition: fill .16s linear`.
- Disc noise: continuous `noise 8s linear infinite`.
- No auto-rotation; steps are static.

### 6.8 Footer emoji rotator — React + CSS transition
Every 1200 ms (`rotationLength` default) the column translates `translateY(0 → -20px)` with `transition: transform .8s cubic-bezier(.25,.1,.25,1)`; outgoing emoji fades `opacity → 0` (.8s), incoming `opacity → 1` over 1.76s (`.8s * 2.2`); after another 1200 ms the first option is moved to the end and the transform resets to 0 without transition. Measured cycle ≈2.25–2.5 s.

### 6.9 Other continuous animations
- Perlin noise drift: `noise` keyframes (bg-position -512,-512 → 0,0) `8s linear infinite` on hero/use-cases/ethos/disc textures.
- Terminal cursor: `terminalCursorBlink` `0%,49.999% { opacity: var(--terminal-cursor-on-opacity) } 50%,100% { opacity:0 }`, `1.06s linear infinite` (block cursor bg `color-mix(in srgb, #01011B 44%, transparent)`, on-opacity 1).
- Loading glyph spin `2s linear infinite` (`HomeLoadingIndicator`).
- Chat pulse overlays (`IntentScrollable2__PulseOverlay`, opacity 0 at rest) — scroll-affordance hints in the chat/Slack panes.

### 6.10 Hover / interactive states (all CSS unless noted)
- Nav items: instant bg `rgba(49,38,59,.09)` (transition none). Log In: bg transition .2s.
- Mega-menu (Radix + Framer): viewport variants `hidden { opacity:0, transform:"translateY(-0.5rem)" }` ↔ `visible { opacity:1, transform:"translateY(0rem)" }`; inner box animates `transform: translateX(<trigger offset>)`, `width`, `height` to the active content's bounding box — `MotionConfig { type: "spring", duration: .32, bounce: 0 }` (measured ~300 ms width/height morph when switching Resources → Solutions). Content panels fade (`opacity` 0 ↔ 1). Close after pointer leaves: ≈300–350 ms.
- Buttons, hero pills, use-case cards, story cards, integration cards, FAQ rows, logo popovers, ticker items, footer links, hit counter: as described in sections 3–4 (durations .25s `cubic-bezier(.25,.1,.25,1)` unless noted; links .1s linear).
- Product windows: hover shadow intensifies (.2s ease-in-out); custom cursor (`cursor:none`) inside interactive windows.
- Interactive demos: Claude/Codex toggle switches the MCP window content; terminal accepts typed commands; chat panes scroll; evals rows open a drawer; dashboard shows tooltips.

---

## 7. Gaps / cannot be replicated exactly (and closest faithful approach)
1. **Nav "AI & agents" callout canvas** (`AiIllustrationCanvas`, dynamically imported `ParticleCanvas`, 2D canvas drawing animated wavy line fields). No asset exists. Closest: screenshot the callout from `reference/hex-1440-nav-platform-open.png` region and use it as a static background, or re-draw with a small 2D-canvas sine-line field in rose `#F5C0C0` at low opacity.
2. **Interactive product mockups** (agent chat, Claude/Codex MCP window, Slack, interactive terminal, Context Studio dashboard with tooltips, Evals table with drawer). They are real React components, not images. Closest: port the static rendered markup from `reference/dom/p1-03--HomeTrustedAnswers.html` and `p1-06--HomeContextStudio.html` with the CSS from `styled-component-rules.css` / `home-module-rules.css`; implement only the visible micro-interactions (Claude/Codex toggle, cursor blink, row hover). Pixel output will match; deep interactivity (typing real commands, drawer content) is optional.
3. **Hit counter value** is fetched dynamically (title "You are visitor: 6,530,352" at capture). Render static.
4. **Framer Motion springs**: durations/bounce are known (above); reproduce with `framer-motion` (same API) for identical curves, or CSS `linear()` approximations (`--spring-easing`, 0.747s).
5. **Font licensing**: GT Cinetype, PP Formula, PP Editorial New are commercial fonts served from hex.tech; local copies were downloaded for the clone as requested — fine for a local reference clone, not for redistribution.
6. **Emoji glyphs** render with the OS emoji font (Apple Color Emoji on macOS) — will differ on other OSes, same as the original.
7. Analytics/consent/tracking scripts intentionally excluded; no auth-gated content on this page.
