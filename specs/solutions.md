Source: https://hex.tech/solutions/

# Solutions group: clone spec (measured 2026-10-23)

Pages: `/solutions/`, `/solutions/{customer-success,data-leaders,marketing,product-analytics,sales-analytics}/`, `/enterprise/`, `/pricing/`, `/compare/`, `/partners/`, `/request-a-demo/`, `/contact-us/`.

Measured live with Playwright at **1440x900** (primary) and **390x844**, using `getComputedStyle`, `getBoundingClientRect`, `document.getAnimations()`, `document.styleSheets` and time-sampling. Boxes are `[x, y, w, h]` in CSS px, page-absolute. The homepage spec (`CLONE_SPEC.md`) stays the source of truth for anything marked REUSE. This file only lists the differences and fully specs the NEW parts.

## 0. Reference material

| Path (under `reference/pages/solutions/`) | Contents |
|---|---|
| `solutions-hub-1440-full.jpg`, `solution-{data-leaders,customer-success,marketing,product-analytics,sales-analytics}-1440-full.jpg`, `enterprise-1440-full.jpg`, `pricing-1440-full.jpg`, `compare-1440-full.jpg`, `partners-1440-full.jpg`, `request-a-demo-1440-full.jpg`, `contact-us-1440-full.jpg` | Full-page screenshots at 1440, taken after a slow scroll so every reveal had fired. |
| `pricing-1440-table-scrolled.jpg`, `pricing-1440-compute-modal-open.jpg`, `pricing-390-full-team-expanded.jpg`, `request-a-demo-1440-form-error-state.jpg` | State screenshots: sticky comparison header, compute modal, mobile plan accordion, form validation. |
| `dom/*.html` | Rendered outerHTML of every NEW section: `hub-01-SolutionsHero`, `hub-02-SolutionsNav-filters`, `hub-03-SolutionResourceCard-x3`, `hub-filter-icons`, `hub-card-illustrations/*.svg` (6 variants), `solution-template` (hero, minimal banner, feature row, section heading, cards, outro), `solution-quote-card`, `solution-live-app-embed`, `enterprise-{hero,safe,gov,support,complete}`, `enterprise-icons.svg`, `pricing-plans-and-table`, `pricing-compute-modal`, `pricing-390-mobile-plans`, `compare-hero`, `partners-{hero,why,tiers,partners,register}`, `request-a-demo-form` (scripts stripped). |
| `dom/*.css` | Live CSS rules for those components, serialized from `document.styleSheets` and labelled with the styled-component display name: `hub-solutions.css`, `solution-template.css`, `solution-quote-and-livedemo.css`, `enterprise.css`, `pricing.css` (includes react-tooltip, Modal and FAQ rules), `compare.css` (includes the `CompareVs` CSS module), `partners.css`, `form-hubspot.css`. Long `linear()` spring curves are complete in these files. |
| `measurements/*.json` | Raw dumps: per-page outlines, computed-style trees, the 390 boxes, `hub-cards.json` (all 62 resource cards), `pricing-table-data.json`, `pricing-tooltips.json`, `dark-theme-tokens.json` (all 195 custom properties of the dark theme), `links.json`, `images-ssr.json`, `dl-plan.json`. |

Assets: `specs/solutions-assets.md` (110 new files under `public/assets/pages/solutions/`).

---

## 1. The big global difference: 11 of the 12 pages are DARK

Every page except **/request-a-demo/** uses the site's dark theme. The page wrapper is `#14141C` with pink text. Only `/request-a-demo/` uses the same light theme as the homepage.

How the live site does it: the dark palette is the **`:root` default** (all `--fg*`, `--grid*`, `--font*`, `--fgA*`, `--appUI-*` vars). The light theme is a class override on `PageWrapper__PageLayoutGrid`, which is what the homepage uses. Every shared component reads these vars, so it re-skins automatically.

**Clone implication (NEW infra, required before any REUSE works):** the existing components hard-code light colors through Tailwind classes such as `bg-fg-100` and `text-ink`. Add a theme layer, either a `data-theme="dark"` wrapper or CSS variables behind the Tailwind color tokens, so Header, Footer, Button, CustomerBanner, Faq, Integrations and TronDivider render dark. A page-level prop (`<Page theme="dark">`) is enough. Nothing else on these pages needs a theme switch at runtime.

### 1.1 Dark tokens (computed on the page wrapper, from `measurements/dark-theme-tokens.json`)
| Token | Dark value | (light value from CLONE_SPEC) |
|---|---|---|
| `--fg100` page bg, button inner | `#14141C` | #FFFCFC |
| `--fg200` / `--fg300` / `--fg400` / `--fg500` / `--fg600` | `#191820` / `#201d25` / `#252128` / `#2b252c` / `#312a31` (checker squares) | |
| `--fg700` / `--fg800` / `--fg900` / `--fg1000` | `#3a3138` / `#4c3e44` / `#6a565b` / `#786065` | |
| `--fg1100` = `--fontColorMUTED` | `#99797d` | #89828D |
| `--fg1200` (links, logo, Log In, footer links, active chip bg) | `#e3b2b3` | #43394C |
| `--fontColorDEFAULT` = `--highlightColor` (body text) | `#F5C0C0` | #31263B |
| `--fontColorLOUD` = `--fgLoud` (headings, nav items) | `#ffffff` | #14141C |
| `--grid200` / `--grid300` (= borderColorMUTED) / `--grid400` | `#252128` / `#2b252c` / `#312a31` | |
| `--grid500` = `--borderColorDEFAULT` | `#3a3138` | #DBD7DA |
| `--grid600` / `--grid700` = `--borderColorSTRONG` | `#4c3e44` / `#6a565b` | #AFA9B1 |
| `--grid1200` | `#e3b2b3` | |
| `--bg300` / `--bg400` / `--bg500` | `#0f0f15` / `#111118` / `#14141c` | |
| `--fgA100…1200` | `rgba(245,192,192, 0 / .026 / .056 / .077 / .103 / .129 / .172 / .249 / .386 / .446 / .592 / .923)` | rgba(49,38,59,…) |
| `--texture-paper-img` / size / opacity | `url(/images/bkg-noise.webp)` (local `textures/bkg-noise.webp`) / `200px 200px` / `.0625` | light-bkg-noise 256px .06 |
| `--texture-hatch-img` | `repeating-linear-gradient(45deg, transparent 0, transparent 5px, #14141c 5px, #14141c 6px)` | |
| `--appUI-*` (product mockups) | bg `#1f1f29`, muted `#191922`, border `#3f4257` / `#2a2a38`, text `#e4e6ec` / `#b1b6c4`, primary `#f5c0c0`, success `#2ba88a`, warning `#d4a032`, danger `#e54d62` | |
| body bg | `#14141C` | |

Fixed accent colors used across these pages: green tick `#43D59D` (stroke, 15px icon; used by pricing ticks and enterprise checklists); heading gradient `linear-gradient(55deg, #FFFFFF 20%, rgba(245,192,192,.8) 100%)` applied as background-clip text, with `background-color:#fff` fallback and the same `margin-inline:-6px; padding-inline:6px; padding-bottom:6px; margin-bottom:-6px` trick as the light GradientHeader. The light theme uses `linear-gradient(90deg,#31263B,#01011B)`.

### 1.2 Dark variants of shared chrome (REUSE, theme only)
- **Header** (`src/components/Header.jsx`): same structure and motion. Nav items `#FFFFFF`; Hex logo and "Log In" `#E3B2B3`; "Get started" label `#F5C0C0`. Ticker strip bg `#252128` + `linear-gradient(to left, #252128, #201D25, #252128)`, inset shadow `0 1px 1px rgba(245,192,192,.173)`, text `#F5C0C0`. Nav bg layer `#14141C`; root bottom border `#3A3138`; squished shadow `0 2px 8px -2px rgba(0,0,0,.56)`. Top-row grid rules `#2B252C`. Mega-menus use the same dark tokens.
- **Button**: primary uses border-image `linear-gradient(to right,#14141C,#14141C), linear-gradient(45deg,#F5C0C0,#AD8EB6)` and label `#F5C0C0`. The `::after` fill is `linear-gradient(45deg, rgba(245,192,192,.85), rgba(71,57,130,.5))` at opacity `.2`. Corner circles `1px solid rgba(245,192,192,.3)`; corner lines `1px solid #3A3138`. Secondary: transparent, `1px solid #3A3138`, label `#F5C0C0`; hover bg `#2B252C` + border `#6A565B`; active `#3A3138`. Focus outline `2px solid #F5C0C0`, offset 2px. Sizes are unchanged: lg 48 (+2 border = 50), md 40 (= 42).
- **Footer**: links `#E3B2B3`; column titles `#FFFFFF` (IBM Plex Mono 700 12px); legal `#99797D`; dividers `#3A3138`; hit counter box border `#F5C0C0`, digits pink. Layout identical.
- **CustomerBanner**: label `#E3B2B3`; rules `#3A3138`; frame bg `rgba(20,20,28,.3)`. Logos use `filter: brightness(0) invert(1)` (pure white) instead of the light grayscale filter. Story popover uses the dark glass `radial-gradient(circle at 66.66% 50%, #1D1D29 0%, #0F0F15 80%)` with shadow `inset 0 0 24px #111118, 0 .5px 0 .75px #2F2F41, 6px 37px 10px rgba(0,0,0,.01), 4px 24px 10px rgba(0,0,0,.04), 2px 13px 8px rgba(0,0,0,.14), 1px 6px 6px rgba(0,0,0,.24), 0 1px 3px rgba(0,0,0,.27)`. This shadow is the **dark glass shadow** used throughout these pages.
- **Faq / TronDivider**: TronDivider lines `linear-gradient(90deg, #6A565B 0%, #3A3138 50%, #6A565B 100%)` on `#14141C`. FAQ dividers `#3A3138`. The question text span (`FAQ__Question`) is Cinetype 400 **18px/24px**, ls -0.5px, **`#FFFFFF`** (same metrics as the homepage, white here); the button itself is 14px `#F5C0C0` with padding 20px. Chevron 15px `#E3B2B3`. **Answer paragraphs differ from the homepage**: Cinetype **400 14px/21.994** `#F5C0C0` (the homepage uses 300 16/24), answer box padding `10px 20px 20px`, gap 12. Footer line link `#E3B2B3` with `border-bottom:1px solid #E3B2B3`. Opening and closing are instant (no transition).
- **Integrations** (enterprise only): same six cards and copy as the homepage. The H2 uses the dark gradient. Body `#F5C0C0`. The card hatch panel uses `--texture-hatch-img` in the dark tone.

### 1.3 Grid frame on these pages
Every page here uses the same fixed header and LayoutGrid as the homepage. Two page frames are used:
- **"BasicPageRow" frame** (hub, enterprise, pricing, compare, partners, forms): checkered margins drawn with dark squares `#312A31` (2px checker). The light version of these pages uses `#E8E4E6`. Content rows have `border-top:1px solid #3A3138`.
- **"V1PageWrapper" frame** (the five solution pages): no checkered margins. Instead, three full-height 1px vertical **grid rules** in `#2B252C` sit at x=374, 720 and 1065 at 1440 (grid lines 4, 7 and 10), with `translateX(.5px)`. Rules 1 and 3 are hidden at ≤450. Content subgrid `padding-top:200px` (`144px` ≤800), `overflow-x:clip; isolation:isolate`.

---

## 2. Templates

| ID | Template | Pages | Theme |
|---|---|---|---|
| T1 | Solutions hub: rotating hero + filterable resource grid | `/solutions/` | dark |
| T2 | Solution detail ("V1 / SelfServe" page) | `/solutions/data-leaders/`, `/customer-success/`, `/marketing/`, `/product-analytics/`, `/sales-analytics/` | dark |
| T3 | Enterprise | `/enterprise/` | dark |
| T4 | Pricing | `/pricing/` | dark |
| T5 | Compare index | `/compare/` | dark |
| T6 | Partners program | `/partners/` | dark |
| T7 | HubSpot form page | `/request-a-demo/` (LIGHT), `/contact-us/` (dark) | per page |

Note: `/solutions/` once client-redirected to `/product/bi/` on the very first browser visit. The page itself (curl and later visits) returns 200 with the hub. This looked like a one-off and needs no handling.

### 2.1 Block to component map (all pages)

| Block | Used on | Mapping |
|---|---|---|
| Fixed header (ticker + nav + mega-menus) | all | **REUSE `Header`** (dark tokens on 11 pages) |
| Footer (+32px bottom grid row) | all | **REUSE `Footer`** (dark tokens) |
| Buttons (primary / secondary, lg 48 / md 40) | all | **REUSE `Button`** (dark tokens; new `block` prop for full-width 375px feature CTAs; new `as="button"` for hub filter chips with icon + count) |
| SimpleFadeIn reveals | all | **REUSE `Reveal`** (identical: `opacity 0, y 5 → 1, 0`, spring .45s, delay .2) |
| LayoutGrid / ContentSection / checkered margins | T1, T3–T7 | **REUSE `LayoutGrid`, `ContentSection`** (dark checker `#312A31`) |
| "Trusted by leading data companies" banner, default (framed) variant | T1, T5 | **REUSE `CustomerBanner`**: props `logos[]`, `label`, dark. T1 has one row of 6: Anthropic, Notion★, Ramp★, Reddit, Calendly★, StubHub★ (frame 125 tall). T5 has 13: Reddit, Notion★, Anthropic, SeatGeek, ClickUp★, AllTrails★, Modern Treasury★, Ramp★, Sedgwick, Calendly★, StubHub★ (2 rows, frame 188 tall, label "TRUSTED BY LEADING DATA TEAMS"). |
| Banner, **minimal** variant (title + one logo row, no frame) | T2, T3, T4, T7 | **REUSE `CustomerBanner`** with new `variant="minimal"`: see §3.2. On T4/T7 the ClickUp★, AllTrails★ and Notion★ logos keep the story-dot and popover. |
| Tron divider (9 lines) | T2 outro, T3, T4, T6 | **REUSE `TronDivider`** (currently private in `Faq.jsx`; export it). T4 also uses a vertically **flipped** copy (`transform: scaleY(-1)` / matrix3d(1,0,0,0,0,-1,…)) below the table. |
| FAQ accordion | T3, T4 | **REUSE `Faq`**: `items` prop, dark, answer text 14px/400 (§1.2), footer link "Get in touch" → `/request-a-demo/`. |
| "Instant integration with the whole stack" 6 cards | T3 | **REUSE `Integrations`** (dark, same copy and links) |
| Hex wordmark + "vs." | T5 | inline SVG from DOM (reuse `svg/logo/hex-logo-nav.svg` at 20px tall, pink) |
| Rotating word (hub hero) | T1 | **REUSE the `EmojiRotator` mechanism** (`Footer/EmojiRotator.jsx`): same `Rotator` component on the live site, same 1200ms rotation length, .8s transform and 1.76s/0.3636s opacity transitions. Generalize it into `<Rotator items itemHeight>`. |
| Dashed-border quote card (logo + 24px quote + author) | T2 | **REUSE-by-extraction**: lift the Notion quote card from `LovedByTeams` into a shared `QuoteCard` and add the `variant="bordered-dark"` described in §4.2.4 (1px `#6A565B` border, no glass) |
| Perlin noise texture (rose, 512px, 16s) | T4 Team cards | **REUSE `PerlinNoise`** (`texture="rose" size={512}`, duration 16s, masked; §4.4.2) |
| Everything else | | **NEW**, listed in §2.2 |

**Totals:** 12 REUSE components (Header, Footer, Button, Reveal, LayoutGrid/ContentSection, CustomerBanner, TronDivider, Faq, Integrations, Rotator←EmojiRotator, QuoteCard←LovedByTeams, PerlinNoise) and **26 NEW** components plus 1 NEW infra piece (dark theme layer).

### 2.2 NEW components (one line each)
0. **ThemeLayer (infra)**: dark token set from §1.1 applied via a wrapper; light stays the default for the homepage and `/request-a-demo/`.
1. **SolutionsHero** (T1): dark glass panel with a perspective "glass-enter" entrance, italic "Solutions for" and a rotating 74px word.
2. **HeroGridBackdrop** (T1): 156px top grid-lines row with L accents, plus the `#0C0C11` checker backdrop behind the glass panel.
3. **SolutionsFilterNav** (T1): 7 chip buttons (icon + label + count). Single-select, instant filtering.
4. **SolutionResourceCard** (T1): dark glass card with a tag-tinted decorative SVG, a 16:9 thumbnail, a type chip, a title and mono metadata.
5. **SolutionsGrid** (T1): 3/2/1-column grid of cards.
6. **SolutionHero** (T2): centered H1 (gradient), 20px subline and two CTAs.
7. **SolutionFeatureRow** (T2): image ↔ text row (media-left / media-right / media-bottom) with 40px H2, optional bold subline, body and an optional full-width secondary CTA.
8. **SectionHeading** (T2): centered 40px gradient H2 with large margins.
9. **LiveAppEmbed** (T2): "What you can build (app) / How it's built (logic)" tabs, a 16:9 white iframe frame and an "Explore this app" overlay link.
10. **ResourceCards** (T2): 3-up or 4-up (`data-size="Four Up"`) article cards with image, H3, text and a "Read more" button.
11. **SolutionOutroCta** (T2): tinted band with a TronDivider and a bordered centered CTA card with a corner tick. The same card style is reused by T3 #6 (`CtaCard`).
12. **EnterpriseHero** (T3): 2-column hero with a vertical "ENTERPRISE" eyebrow, a 68px H1, a 2-column green-tick checklist, a CTA and an absolutely positioned SVG.
13. **CheckList / CheckItem** (T3): 15px green tick at scale 1.5 plus 20px white label. Grid of 1 or 2 columns.
14. **NumberedFeatureGrid + LogoBlocks** (T3 "Your data is safe"): 01/02/03 mono numbers with H3 + text, and a staggered 3-box logo column.
15. **IllustratedChecklistTout** (T3 "Governance & Control"): SVG on the left, gradient H1, lead text, vertical checklist and a CTA.
16. **SupportTout** (T3 "Everything your team needs"): centered head, a 2x2 icon-text grid and a stair SVG.
17. **CtaSplitTout** (T3 "A complete solution"): checklist on the left and a bordered CTA card on the right.
18. **PricingHeader** (T4): H1 "Pricing" with a subline link.
19. **PlanSummaryGroups** (T4): two framed groups ("Individual plans" / "Team plans") holding 4 plan cards, with rails, corner accents and rose noise on the Team-group cards.
20. **PlanComparisonTable** (T4): 6 grouped sections with tick/text cells, column rules and a row-hover highlight.
21. **StickyPlanHeader** (T4): a plan-name + CTA row that sticks under the nav at `top:82px` and reveals a "Compare plan features:" label.
22. **FeatureTooltip** (T4): dotted-underline terms that open a dark react-tooltip with HTML and a "Learn more" link.
23. **ComputeProfilesModal** (T4): opened from compute links (`?modal=compute`); 9-row table.
24. **PlansMobileView** (T4, ≤800): stacked plan cards with a "See all X features" expander. Replaces 19–21 on mobile.
25. **CompareHero** (T5): 74px gradient H1 + CTAs, plus a hatched dashed "HEX vs." panel holding 4 competitor cards.
26. **Partners sections** (T6): `PartnersHero`, `PartnersWhy`, `PartnerTiers` (3 tinted flag panels + lists), `PartnersGrid` (12 logo cards with tier badges), `PartnerRegister` (form shell). Counted as one NEW group of five small components.
27. **HubSpotFormShell / FormFields** (T7 + T6 register): a visual-only form (HubSpot field markup and styling) with Hex's own submit button and error states. No endpoint.

(Item 26 covers 5 small partner components and item 0 is infra, which is how the total comes to 26 + 1.)

---

## 3. Shared NEW parts used by several templates

### 3.1 Dark glass surface (used by hub cards, the hub hero panel, compare cards and the story popover)
- Card (`Card__Wrapper`): `border-radius:12px; background-image: radial-gradient(circle at 66.66% 50%, rgba(26,26,37,.5) 0%, rgba(15,15,21,.5) 80%); box-shadow: <dark glass shadow §1.2>`. Hero panel variant: `radial-gradient(circle at 50% 130%, #1D1D29 0%, #0F0F15 80%)` (opaque).
- Hover (`@media (hover:hover)`): `transform: translateY(-4px); box-shadow: inset 0 0 24px rgba(255,255,255,.08), 0 .5px 0 .75px rgba(255,255,255,.15), <same 5 drop shadows>`. Transition `border, transform, box-shadow` over **529.33ms** with the 80-point spring `linear(0, .005892 1%, … 1.020313 45%, … .999989 80%)`. The full curve is in `dom/compare.css` → `Card__Wrapper`. Also set `perspective:800px`.

### 3.2 CustomerBanner `variant="minimal"`
`display:flex; flex-direction:column; align-items:center; padding:38px 0` (170 tall at 1440). Title `<p>` Cinetype **500** 14px/21.994 `#F5C0C0`, centered, `max-width:1165px; padding:0 30px; margin-bottom:22px`. Copy: "Trusted by leading data companies" (T2, T3) or "Trusted by leading data teams" (T4, T7). `<ul>`: `display:flex; gap:20px; justify-content:center; align-items:center; max-width:1000px`. ≤800 `gap:15px` and wraps (at 390: 3 rows; 300 tall incl. padding). Each `<li>` is 50 tall and contains a logo wrapper `padding:0 8px` with the `<img>` at **natural size** (height 50): Reddit 115, Notion 39, Anthropic 132, SeatGeek 51, ClickUp 119, AllTrails 151. Story logos (ClickUp, AllTrails, Notion on T4/T7) show the indicator dot and popover from the default variant. Their popover copy:
- ClickUp: "Hex lets us go from an ad-hoc analysis to a published data app with just a few clicks." — **Sai Srigiriaju**, Head of Growth Strategy & Ops at ClickUp
- AllTrails: "Since adopting Hex, the data team has churned out a steady stream of analysis, from internal benchmarking to evaluating the effectiveness of metrics." — **Matt Palmer**, Analytics Engineer
- Notion: same as the homepage.
- (T5 only) Modern Treasury: "With our engineers being able to self-serve in Hex, the data team is able to focus on long term, strategic projects. It minimizes the amount of time spent on things that don’t fundamentally move the needle and lets us focus on what matters." — **Chang Sun**, Analytics Engineer. Calendly: "We’re regarded as top performers because the work we are doing is deemed more credible and more widely surfaced than before Hex." — **Kate Urquiola**, Director, Go-to-Market Analytics. Ramp and StubHub use the homepage copy.

---

## 4. Templates in detail

### 4.1 T1: Solutions hub (`/solutions/`)
Document height 10712 at 1440 (26846 at 390). Title "Analytics Solutions for Product, Sales, and Data Teams | Hex".

Section list:
1. Header: **REUSE** (dark).
2. Hero row: **NEW** `HeroGridBackdrop` + `SolutionsHero` (§4.1.1). [0,0,1440,706]
3. Customer banner, default variant: **REUSE** (§2.1, 6 logos, one row) [0,706,1440,125]
4. Content row (`BasicPageRow`, border-top `#3A3138`, checkered margins): **NEW** `SolutionsFilterNav` + `SolutionsGrid`/`SolutionResourceCard` [0,831,1440,9294]
5. Footer: **REUSE**.

#### 4.1.1 HeroGridBackdrop + SolutionsHero (NEW)
- **Top grid-lines row** (`HeroAnimated__TopGridLines`): height **156px** (124 at ≤450), `border-bottom:1px solid #2B252C`. Margins are checkered `#312A31`. Grid rules (1px `#2B252C`) at x 374 and 1065. Two **L accents** (6x6, `border-bottom` + `border-left`/`border-right` 1px `#E3B2B3`, `position:absolute; bottom:-1px`) at the bottom-left and bottom-right corners of the content column (x 28 and 1406).
- **Backdrop** (`HeroAnimated__Bg`): `background-color:#0C0C11` with a 2px checker `rgba(245,192,192,.056)` (4x4 SVG, the same pattern as the checkered margins). Paper texture `::before`. `padding: clamp(12px, .3281rem + 1.5vw, 24px) clamp(0px, -.4219rem + 1.5vw, 12px) clamp(16px, .4375rem + 2vw, 32px)` (24/12/32 at 1440). `perspective:1000px`. Box [0,156,1440,550].
- **Glass panel** (`SolutionsHero__Wrapper`): content column [29,180,1382,494], `border-radius:12px; overflow:clip; max-width:1840px`, opaque dark glass (§3.1) with the dark glass shadow. `min-height:620px` at ≤450. `transform-origin: 50% 300%`. Entrance animation **`glass-enter` 673.93ms** with a spring `linear(0 0%, .003805 1%, … 1.02378 55%, … 1.00003 97%)` (full curve in `dom/hub-solutions.css`), `both`: `@keyframes glass-enter { 0% { opacity:.4; transform: translateZ(-120px) translateY(60px) rotateX(-3deg); } }`. It plays once on load.
- Inner (`SolutionsHero__Inner`): flex center, `padding:80px 40px 79px`. `::before` overlay: `background-image:url(/assets/pages/solutions/hub/illustration-solutions-hero-bkg.svg); background-size:246px auto; background-position:center 24px; background-repeat:repeat; mask-image: radial-gradient(circle, rgba(0,0,0,.62) 40%, rgba(0,0,0,.05) 100%); z-index:1`.
- Content column (z 2, centered text):
  - H1 "Solutions for": PP Editorial New 200 italic **60px/78px**, ls 0, `#F5C0C0` (box 286x78).
  - Rotator wrapper: `margin-bottom:20px`, 820x121. `::before` draws dashed top and bottom lines `1px dashed #3A3138` masked by `linear-gradient(to left, transparent, #fff 15%, #fff 85%, transparent)`. `overflow:hidden` window **121px** tall.
  - Rotating H2: PP Formula SemiExtended 700, `clamp(42px, 24px + 4vw, 74px)` → 74px, `line-height:121px; height:121px; padding-top:10px`, ls -0.025em (-1.85px). White→pink gradient text (55deg). ≤600: line-height/height **81px**, padding-top 5px. The "customer-success" item uses `font-size:min(42px, 8vw)`.
  - Words in order: **Product → Marketing → Sales → Customer success → Data teams → Data leaders** (loops).
  - Description: "One connected system - infinite data answers", 24px/36 300 `#F5C0C0`, `max-width:600px; margin-bottom:30px` (20px/30 at ≤450).
  - Actions: `display:flex; gap:16px`. Primary lg "Get started for free" → `https://app.hex.tech/signup` (170x50). Secondary lg "Request a demo" → `/request-a-demo/` (148x50).
- **Rotator motion** (measured by sampling every 50ms): cycle **≈2400ms**. The word holds ≈1225ms, then the column animates `translateY(0 → -121px)` over **800ms `cubic-bezier(.25,.1,.25,1)`**. During the slide the outgoing option fades `opacity 1 → 0` over 0.3636s and the incoming option fades in over 1.76s, same easing. After ≈360ms more, the first option moves to the end and the transform snaps back to 0 with no transition. This is exactly the homepage footer `EmojiRotator` logic with a different item height.
- 390: top row 124 tall; glass [8,136,374,478]; H1 60/78 (unchanged); rotating word 42px/81px; description 20/30 (294 wide); actions stay in a row (335 wide). Banner [0,630,390,233].

#### 4.1.2 SolutionsFilterNav (NEW)
- Container (`SolutionsContent__SolutionsWrapper`): `display:flex; flex-direction:column; align-items:center; gap:30px; max-width:1240px; padding:80px 40px; z-index:2` → [100,832,1240,…].
- Nav: `display:flex; gap:10px; width:100%`; children `flex:1 0 auto` (they stretch to fill 1160 at 1440). ≤1250 `flex-wrap:wrap; justify-content:center` and children `flex:0 0 auto`.
- Chip = `Button` as `<button>`, height 40 + 1px border (box 42), `padding:0 20px`, Cinetype 14px. Inner `gap:10px`: icon slot 24x24 (inline SVG per filter, `dom/hub-filter-icons.html`), then label + count in a `display:flex; gap:6px` span. The count sits in a `<span>` with `opacity:.4`.
  - Labels/counts: **All** (no count) · **Core data team 9** · **Data leader 28** · **Product 10** · **Marketing 13** · **Sales 9** · **Customer success 9**. Widths at 1440: 92, 192, 173, 148, 161, 125, 208.
  - Inactive: transparent, `border:1px solid #3A3138`, color `#F5C0C0`. Hover bg `#2B252C`, border `#6A565B`. Active (pressed) bg `#3A3138`. Transition `background-color .25s, border-color .25s cubic-bezier(.25,.1,.25,1)`.
  - Selected: bg `#E3B2B3`, color and icon `#0F0F15` (`--bg300`), border `#3A3138`. Hover keeps `#E3B2B3`. Focus-visible `2px solid #F5C0C0` offset 2px.
- Behavior: single-select. Clicking swaps the grid contents **instantly** (no animation, no URL change; measured over 480ms after click). "All" is the default. A card shows under every tag it carries. Live quirk: the chip count does not always match the number of cards shown (Sales says 9 but shows 10). Hard-code the counts as listed.
- 390: chips wrap centered (rows at y 949/1001/…, 52px pitch; nav 294x302).

#### 4.1.3 SolutionsGrid + SolutionResourceCard (NEW)
- Grid: `display:grid; grid-template-columns:repeat(3,1fr); gap:20px` (373.33 each at 1440). ≤1000 2 columns; ≤800 1 column (294 wide at 390). Row heights follow content (377–429 at 1440).
- Card link wrapper `display:flex`. The `<a>` is `display:block; flex:1`, no underline, hover bg transparent.
- Card (`Card__Wrapper SolutionResourceCard__Wrapper`): dark glass (§3.1) with hover lift. `display:flex; flex-direction:column; align-items:flex-start; padding:0; height:100%; text-align:left`.
  - **Media** (`MediaWrapper`): `position:relative; padding:20px; width:100%` (373x227).
    - Decorative illustration (`Illustration`): `position:absolute; inset:0; opacity:.35; overflow:hidden; border-radius:12px 12px 0 0`. Inline SVG fills it (`width/height 100%; object-fit:contain`). There are **6 variants**, chosen by the card's **first** solution tag: `dom/hub-card-illustrations/{data-leader,sales,marketing,product,core-data-team,customer-success}.svg`.
    - Image frame (`Image`): `width:100%; aspect-ratio:16/9` (333x187); `background:#0F0F15; border-radius:4px; border:1px solid <tag tint>; box-shadow:0 2px 12px rgba(0,0,0,.5); overflow:hidden; display:flex; center; z-index:1`. The `<img>` has `max-width:100%` and renders at its natural ratio, centered and clipped (≈331x205). Customer-story cards show a white logo SVG at natural size instead (Notion 39x50, OM1 94x50, Figma 97x50, Mercor 131x50, Valon 116x50, Algolia 97x50). Cards without an image show a placeholder label "Blog post" (Cinetype 10px `#4C3E44`) centered in the frame.
  - **Content**: `padding:24px; display:flex; flex-direction:column; gap:10px`.
    - Type chip: Cinetype Mono 10px/15.71 ls .833px, `#E3B2B3` on `#0F0F15`, `border:1px solid #4C3E44; border-radius:1px; padding:1px 4px; align-self:flex-start`. Values: Blog post, Customer story, Video, eBook, one-pager, Use case.
    - H4: PP Formula 600 20px/26px ls -0.5px `#FFFFFF`.
    - Metadata: `flex column; gap:4px`. Rows: `display:flex; flex-wrap:wrap; gap:2px 8px`, Cinetype Mono 10px/15.71 ls .833 `rgba(255,255,255,.447)`. Row 1 reads "Solution/" followed by tag names in tag color. Row 2 is the read time ("5 min"), omitted when absent.
  - Tag colors (text) / image-frame border tint: **Data leader** `#5CB198` / `rgba(92,177,152,.42)`; **Sales** `#CDA849` / `rgba(205,168,73,.39)`; **Marketing** `#5F509D` / `rgba(95,80,157,.53)`; **Product** `#717A94` / `rgba(113,122,148,.52)`; **Core data team** `#A477B2` / `rgba(164,119,178,.5)`; **Customer success** `#FBF9F9` / `rgba(251,249,249,.19)`.
- 390: card 294 wide, first card [48,1281,294,384].

#### 4.1.4 Hub card data (all 62, in DOM order, "All" filter)
| # | Type | Title | Solution tags (color) | Read time | href | Thumbnail |
|---|---|---|---|---|---|---|
| 1 | Blog post | You don't need to migrate those 300 dashboards | Data leader | 5 min | `/blog/dont-migrate-300-dashboards/` | `pages/solutions/hub/you-don-t-need-to-migrate-those-300-dashboards-c58b81b4.png` |
| 2 | Customer story | Customer story: Notion | Sales | 3 min | `/customers/notion/` | `logos/customers/notion.svg` (existing) |
| 3 | Customer story | Customer story: OM1 | Marketing, Sales |  | `/customers/om1/` | `pages/solutions/_shared/customer-story-om1-ea3c3c81.svg` |
| 4 | Customer story | Customer story: Figma | Product, Data leader | 3 min | `/customers/figma/` | `logos/customers/figma.svg` (existing) |
| 5 | Customer story | Customer story: Mercor | Core data team, Customer success |  | `/customers/mercor/` | `logos/customers/mercor.svg` (existing) |
| 6 | Customer story | Customer story: Valon | Customer success |  | `/customers/valon/` | `pages/solutions/hub/customer-story-valon-2c4ef1e2.svg` |
| 7 | Customer story | Customer story: Algolia | Sales, Marketing | 3 min | `/customers/algolia/` | `pages/solutions/_shared/customer-story-algolia-baea542d.svg` |
| 8 | Blog post | Your next BI tool shouldn't be a BI tool | Data leader | 4 min | `/blog/next-bi-tool/` | `pages/solutions/hub/your-next-bi-tool-shouldn-t-be-a-bi-tool-76aeaf65.png` |
| 9 | Blog post | The market is noisy. Here’s how pipeline intelligence can help. | Marketing, Sales |  | `/blog/how-we-solved-the-pipeline-crisis/` | `pages/solutions/hub/the-market-is-noisy-here-s-how-pipeline-intellig-8980b4c5.png` |
| 10 | Blog post | Dashboards were never the destination | Data leader | 4 min | `/blog/dashboards-were-never-the-destination/` | `pages/solutions/hub/dashboards-were-never-the-destination-fbaa3c83.png` |
| 11 | Video | How to Measure Pipeline Quality from Demo Requests with AI | Marketing | 1 min | `/resources/video/how-to-measure-pipeline-quality-from-demo-requests-with-ai-or-hex/` | `pages/solutions/hub/how-to-measure-pipeline-quality-from-demo-reques-51c78ce0.png` |
| 12 | Blog post | 3 ways Hex makes leading a support team less stressful | Customer success | 4 min | `/blog/how-ai-analytics-helps-with-support-decisions/` | `pages/solutions/hub/3-ways-hex-makes-leading-a-support-team-less-str-8e2b6472.png` |
| 13 | Blog post | The unwritten rules of being a head of data | Data leader | 5 min | `/blog/unspoken-rules-of-data-leadership/` | `pages/solutions/hub/the-unwritten-rules-of-being-a-head-of-data-4c11040e.png` |
| 14 | Blog post | You're probably evaluating AI analytics tools wrong | Data leader | 6 min | `/blog/evaluating-ai-wrong/` | `pages/solutions/hub/you-re-probably-evaluating-ai-analytics-tools-wr-0722bc63.png` |
| 15 | Blog post | Your data team is too slow (and accuracy won't save you) | Data leader | 7 min | `/blog/your-data-team-is-too-slow/` | `pages/solutions/hub/your-data-team-is-too-slow-and-accuracy-won-t-sa-633dec3d.png` |
| 16 | Video | Using AI to choose billboard locations | Marketing | 1 min | `/resources/video/using-ai-to-choose-billboard-locations/` | `pages/solutions/hub/using-ai-to-choose-billboard-locations-a36bf5ba.png` |
| 17 | Blog post | Why data apps confused the hell out of me (and probably confuse you too) | Core data team | 3 min | `/blog/difference-between-apps-and-dashboards/` | `pages/solutions/hub/why-data-apps-confused-the-hell-out-of-me-and-pr-3ab926d9.png` |
| 18 | Blog post | How I used Hex’s AI to get fully up to speed on our sales data | Data leader, Product, Sales | 6 min | `/blog/using-threads-to-get-sales-team-data/` | `pages/solutions/hub/how-i-used-hex-s-ai-to-get-fully-up-to-speed-on--d8e04122.png` |
| 19 | Blog post | Self-serve analytics is finally real (and that's terrifying) | Data leader | 5 min | `/blog/self-serve-is-finally-real/` | `pages/solutions/hub/self-serve-analytics-is-finally-real-and-that-s--1e964af7.png` |
| 20 | Blog post | How we built a forecasting data app that gets more accurate every quarter | Marketing | 3 min | `/blog/pipeline-forecast-data-app/` | `pages/solutions/hub/how-we-built-a-forecasting-data-app-that-gets-mo-de9be2ab.png` |
| 21 | Blog post | Hex in the Wild: October 2025 spotlights | Core data team | 3 min | `/blog/hex-in-the-wild-oct-2025-highlights/` | `pages/solutions/hub/hex-in-the-wild-october-2025-spotlights-18b21643.png` |
| 22 | Blog post | Lessons from Ramp: Running AI-powered data teams | Data leader, Core data team, Product |  | `/blog/how-data-teams-are-using-ai-ramp/` | `pages/solutions/hub/lessons-from-ramp-running-ai-powered-data-teams-0a134db6.png` |
| 23 | Blog post | Using AI thoughtfully: How our data team builds speed without losing depth | Data leader | 5 min | `/blog/ai-for-data-teams-boosting-speed-and-impact/` | `pages/solutions/hub/using-ai-thoughtfully-how-our-data-team-builds-s-93074be6.png` |
| 24 | Video | Helping your data team become faster with AI, not busier | Data leader, Core data team | 5 min | `https://www.youtube.com/shorts/FrMgS7i3lZ4` | `pages/solutions/hub/helping-your-data-team-become-faster-with-ai-not-00ea9d4a.png` |
| 25 | Blog post | The complete guide to prompting Hex's Notebook Agent | Core data team | 7 min | `/blog/notebook-agent-prompting-guide-agentic-analytics/` | `pages/solutions/hub/the-complete-guide-to-prompting-hex-s-notebook-a-2aacd093.png` |
| 26 | Blog post | Building metrics stakeholders need, not what they want | Core data team, Customer success |  | `/blog/building-actionable-metrics-framework/` | `pages/solutions/hub/building-metrics-stakeholders-need-not-what-they-3732a7e6.png` |
| 27 | Blog post | From “we think” to “we know”: Attribution that ties to revenue | Marketing |  | `/blog/marketing-attribution-data-app-revenue-tracking/` | `pages/solutions/hub/from-we-think-to-we-know-attribution-that-ties-t-816e142d.png` |
| 28 | Blog post | Customer retention analytics: Linking metrics to LTV and CAC | Customer success |  | `/blog/customer-retention-analytics/` | — |
| 29 | Blog post | AI is changing how our data team works, and that’s great | Data leader |  | `/blog/lessons-running-a-data-team-with-ai/` | `pages/solutions/_shared/ai-is-changing-how-our-data-team-works-and-that--de281fd8.png` |
| 30 | Blog post | 5 product metrics that change our decisions (and drive revenue) | Product |  | `/blog/product-metrics-that-drive-growth/` | `pages/solutions/_shared/5-product-metrics-that-change-our-decisions-and--576c2d0d.png` |
| 31 | Blog post | 6 Pipeline questions that RevOps teams can answer in minutes in Hex | Sales |  | `/blog/pipeline-questions-answered-in-minutes/` | `pages/solutions/hub/6-pipeline-questions-that-revops-teams-can-answe-f5f031d8.png` |
| 32 | Video | Measuring Hex's performance in Hex | Product |  | `/resources/video/measuring-hexs-performance-in-hex/` | `pages/solutions/hub/measuring-hex-s-performance-in-hex-b9a93ad1.png` |
| 33 | Video | How product teams make faster decisions | Product |  | `https://www.youtube.com/shorts/R52NB-F9B5c` | `pages/solutions/hub/how-product-teams-make-faster-decisions-a2085804.png` |
| 34 | Video | Building proactive product KPI updates | Product |  | `/resources/video/building-proactive-product-kpi-updates/` | `pages/solutions/hub/building-proactive-product-kpi-updates-5253f985.png` |
| 35 | Video | Turning traffic mysteries into marketing insights — with Hex | Marketing | 2 min | `https://www.linkedin.com/posts/cpschaefer_marketinganalytics-ai-analytics-activity-7348743298733228032-vQoR/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAYjyFYBfFMHD9yl1SoorLZd6KmlrHsH9Aw` | `pages/solutions/hub/turning-traffic-mysteries-into-marketing-insight-a8694b34.png` |
| 36 | Blog post | Account 360 in Hex: Your one-stop customer health command center | Customer success |  | `/blog/customer-health-data-app-account-360/` | `pages/solutions/_shared/account-360-in-hex-your-one-stop-customer-health-4a315add.png` |
| 37 | Blog post | Why data teams (almost) never have to answer the same customer question twice | Customer success | 4 min | `/blog/data-app-for-customer-success-analytics/` | `pages/solutions/_shared/why-data-teams-almost-never-have-to-answer-the-s-cf7b95be.png` |
| 38 | Blog post | How to figure out what actually impacts lead conversion | Marketing |  | `/blog/lead-conversion-in-hex/` | `pages/solutions/hub/how-to-figure-out-what-actually-impacts-lead-con-0a22ae6c.png` |
| 39 | Blog post | The State of Data Teams 2025: AI, self-serve, and the reality check | Data leader |  | `/blog/state-of-data-teams-2025/` | `pages/solutions/hub/the-state-of-data-teams-2025-ai-self-serve-and-t-7a562f13.jpg` |
| 40 | Blog post | How Candidly uses Hex Embedded Analytics to tackle the student loan debt crisis | Data leader | 7 min | `/blog/how-candidly-uses-hex-embedded-analytics/` | `pages/solutions/hub/how-candidly-uses-hex-embedded-analytics-to-tack-10287a66.png` |
| 41 | Blog post | The data app behind Huckberry’s $1M inventory savings | Marketing, Sales |  | `/blog/how-huckberry-forecasts-demand/` | `pages/solutions/hub/the-data-app-behind-huckberry-s-1m-inventory-sav-978f3420.jpg` |
| 42 | Blog post | Nick Hardy, Ro: The power of embedded data teams | Data leader | 4 min | `/blog/nick-hardy-ro/` | `pages/solutions/hub/nick-hardy-ro-the-power-of-embedded-data-teams-5aa35008.png` |
| 43 | Video | Three powerful workflows in one platform | Core data team, Data leader | 5 min | `/resources/video/three-powerful-workflows-in-one-platform/` | `pages/solutions/hub/three-powerful-workflows-in-one-platform-1b8e4abe.png` |
| 44 | Blog post | How Notion, HubSpot, and Ramp data teams think about ROI | Data leader |  | `/blog/notion-hubspot-ramp-data-team-roi/` | `pages/solutions/hub/how-notion-hubspot-and-ramp-data-teams-think-abo-8cde7164.jpg` |
| 45 | Blog post | The Accuracy / Agency matrix | Data leader |  | `/blog/accuracy-agency-matrix/` | `pages/solutions/hub/the-accuracy-agency-matrix-31cf6245.png` |
| 46 | Blog post | 4 Ways Kong is scaling analytics with Hex | Product |  | `/blog/how-kong-is-scaling-analytics-with-hex/` | `pages/solutions/_shared/4-ways-kong-is-scaling-analytics-with-hex-440f5624.jpg` |
| 47 | Blog post | Pedram Navid, Dagster: Why it's not enough to be right | Data leader | 5 min | `/blog/friends-of-data-pedram-navid-dagster/` | `pages/solutions/hub/pedram-navid-dagster-why-it-s-not-enough-to-be-r-43f56f63.png` |
| 48 | Blog post | Ian Macomber, Ramp: How a data team drives influence | Data leader | 5 min | `/blog/friends-of-data-ian-macomber-ramp/` | `pages/solutions/hub/ian-macomber-ramp-how-a-data-team-drives-influen-cec4cb73.png` |
| 49 | Blog post | Tony Avino, HubSpot: Keeping data updated and trusted | Data leader | 5 min | `/blog/friends-of-data-tony-avino-hubspot/` | — |
| 50 | Blog post | How GameChanger used LTV modeling to predict and prevent churn | Customer success |  | `/blog/how-gamechanger-determined-lifetime-value/` | `pages/solutions/hub/how-gamechanger-used-ltv-modeling-to-predict-and-dd884d14.png` |
| 51 | Blog post | Daniel Sternberg: How data drives craft at Notion | Data leader | 4 min | `/blog/friends-of-data-daniel-sternberg/` | `pages/solutions/hub/daniel-sternberg-how-data-drives-craft-at-notion-c1bacb6a.png` |
| 52 | Blog post | How to boost collaboration between product and data teams | Product |  | `/blog/boost-collaboration-between-product-and-data/` | `pages/solutions/hub/how-to-boost-collaboration-between-product-and-d-e7f928ed.png` |
| 53 | Blog post | Faster and Better Insights: Building a Big-Picture Data Team at StubHub | Marketing, Sales |  | `/blog/stubhub-building-a-big-picture-data-team/` | `pages/solutions/hub/faster-and-better-insights-building-a-big-pictur-d557d951.png` |
| 54 | Blog post | Make data-driven decisions with KPI dashboards | Data leader, Core data team | 5 min | `/blog/data-driven-decisions-with-kpi-dashboards/` | `pages/solutions/hub/make-data-driven-decisions-with-kpi-dashboards-89b097b7.jpg` |
| 55 | Blog post | How to build a sentiment analysis model in Python | Customer success |  | `/blog/sentiment-analysis/` | `pages/solutions/hub/how-to-build-a-sentiment-analysis-model-in-pytho-aba9da57.webp` |
| 56 | eBook | Should you replace your BI tool with an agent? | Data leader | 6 min | `/resources/bi-buying-guide/` | `pages/solutions/hub/should-you-replace-your-bi-tool-with-an-agent-d834e322.jpg` |
| 57 | eBook | A guide to data governance | Data leader |  | `/resources/data-team-governance-template/` | `pages/solutions/hub/a-guide-to-data-governance-7571aec1.jpg` |
| 58 | one-pager | Calendly: 2x faster with Hex | Marketing |  | `/resources/calendly-hex-one-pager/` | `pages/solutions/hub/calendly-2x-faster-with-hex-eab4fc0b.png` |
| 59 | Use case | Python Data Visualization | Product |  | `/templates/data-visualization/python-visualization/` | `pages/solutions/hub/python-data-visualization-18c8a12e.png` |
| 60 | eBook | The Snowflake + Hex guide to AI-ready data | Data leader |  | `/resources/llms-snowflake-cortex/` | `pages/solutions/_shared/the-snowflake-hex-guide-to-ai-ready-data-ecae8ae9.jpg` |
| 61 | eBook | How OM1 is transforming self-serve with a data app | Marketing, Sales |  | `/resources/data-app-om1/` | `pages/solutions/hub/how-om1-is-transforming-self-serve-with-a-data-a-c294a1e5.png` |
| 62 | eBook | The Snowflake + Hex guide to AI-ready data | Data leader |  | `/resources/llms-snowflake-cortex/` | `pages/solutions/_shared/the-snowflake-hex-guide-to-ai-ready-data-ecae8ae9.jpg` |

### 4.2 T2: Solution detail template (5 pages)

Section order (shared): Header → **SolutionHero** → *(minimal CustomerBanner, not on sales-analytics)* → N × **SolutionFeatureRow** (with optional **QuoteCard** between rows) → *(LiveAppEmbed row, not on data-leaders)* → **SectionHeading** → one "blog" **SolutionFeatureRow** (data-leaders and marketing only) → **ResourceCards** → **SolutionOutroCta** → Footer. Every block from SolutionHero down is wrapped in `Reveal` (SimpleFadeIn).

#### 4.2.1 SolutionHero (NEW)
- Wrapper `display:flex; justify-content:center; align-items:stretch; gap:70px; max-width:1240px; padding:0 40px; margin:0 auto; z-index:1` (≤800: column, padding 0 30px, gap 40).
- Info (`data-align="center"`): `display:flex; flex-direction:column; align-items:center; justify-content:center; gap:20px; max-width:1000px; padding:48px 0 120px`. All children are text-align center. 454 tall at 1440 (484 when the H1 wraps to 2 lines plus a 2-line subline).
- H1: PP Formula SemiExtended 700 `clamp(38px, 25.625px + 2.75vw, 60px)` lh 1.3 ls -0.0308em → **60/78, -1.848px** at 1440 and 38/49.4 at 390. Dark gradient text, `text-wrap:balance`.
- Description: `display:flex; flex-direction:column; gap:15px; max-width:90ch; text-wrap:balance`. `<p>` 20px/30px 300 `#F5C0C0`.
- Actions: `padding-top:10px`. Row `gap:20px`: primary lg "Request a demo" → `https://hex.tech/request-a-demo/` (sales-analytics appends UTM params; see §4.2.8) and secondary lg "Get started now" → `https://app.hex.tech/signup?source=nav&_gl=…` (148x50 each). ≤450: column, `gap:10px`, stretched (at 390 both are 148 wide, centered, y 530 and 590).
- 390: Info [38,144,314,616]; H1 326x204 (4 lines).

#### 4.2.2 SolutionFeatureRow (NEW)
- Outer (`StyledComponentWrapper`): `display:flex; flex-direction:column; padding:40px 40px 0; margin-bottom:40px; max-width:1240px` (≤800: padding 30px, margin 0). Inner `Features`: `display:flex; flex-direction:column; gap:80px; z-index:1` (≤800 gap 40, padding 20px 0; ≤600 padding 0).
- Row (`FeatureWrapper`): `display:flex; align-items:center; gap:80px; flex:1 1 auto` → 1126x513 at 1440. Classes: `media-left` = row (image left), `media-right` = row-reverse (≥800). ≤1000 `align-items:start`; ≤800 gap 40; **≤600 `flex-direction:column-reverse`** (text on top, image below).
- Media box (`AnimationWrapper`): **671x513** flex center, relative (≤1000 h 320; ≤800 w 100% h 360; ≤450 h 320). The image wrapper is absolute; the product illustration is **600px** wide (100% at ≤1000) and the `<img>` keeps its native aspect. These are static PNG screenshots of the product UI. No Rive, video or animation runs inside them.
- Info: `width:375px; flex:0 0 auto; font-size:20px; line-height:1.5` (≤800 300px; ≤600 100%).
  - H2: PP Formula 800 `clamp(30px, 24.375px + 1.25vw, 40px)` lh 1.3 ls -0.025em → **40/52, -1px**, `#FFFFFF` (solid, no gradient), `margin-bottom:15px`. 30/39 at 390.
  - Optional bold subline: a `<p>` whose content is a `<strong>`, e.g. "Dig in to root causes of renewals and churn". 20/30, `margin-bottom:22px`.
  - Body `<p>`: 20px/30px 300 `#F5C0C0`, `margin-bottom:22px`.
  - Optional CTA: secondary **md** Button stretched to the full info width (375x42), label 14px/21px. On data-leaders: "See how this saved ClickUp $1M+ in churn", "Learn more"; on blog rows: "Read more".
- `media-bottom` variant (used for "Explore a live data app"): `flex-direction:column-reverse; align-items:center; text-align:center; gap:0`; `p { margin-bottom:30px }`. Info is centered (`CenteredFeatureInfo`, margin 0 auto).

#### 4.2.3 SectionHeading (NEW, tiny)
Wrapper `margin:112px 0 64px; padding:0 56px` (≤800: `margin:88px 0 48px`, left aligned). H2 PP Formula 800 40/52 ls -1px, dark gradient text, `max-width:600px; margin:0 auto; text-align:center`. At 390: 30/39, `text-align:left`, margin-bottom 24.

#### 4.2.4 QuoteCard, `bordered-dark` variant (REUSE-by-extraction)
- Outer (`WrapperMotion`): `display:flex; padding:100px 40px` (≤800 60px 40px; ≤600 column, 60px 30px). Inner `display:flex; align-items:center; gap:30px; max-width:1240px; margin:0 auto`. The card is 713 wide at 1440 for short quotes and up to 1168 for long ones (marketing).
- Card: `display:flex; flex-direction:column; justify-content:center; padding:38px 35px; border:1px solid #6A565B` (≤800 padding 30px). No radius, no bg.
- Quote stack: `display:flex; flex-direction:column; gap:25px; line-height:1.35`.
  - Logo: `img { max-height:35px; object-fit:contain; filter:brightness(0) invert(1) }`, left aligned (ClickUp 83x35, OM1 66x35, Algolia 68x35, Kong 77x35).
  - `<blockquote>` 24px/32.4px (22px at ≤800) `#F5C0C0` weight 400. `::before { content:"“"; margin-left:-.95rem }` (-.8rem ≤600) hangs the opening quote mark; the closing ” is part of the text.
  - Author: `display:flex; align-items:center; min-height:45px`. `<p>` 14px `#F5C0C0`, `margin-bottom:5px`: `<span class=bold>` (weight 600) name, then "  ·  " + title + " at Company". An optional avatar `img` is 45x45 `clip-path:circle()`, `margin-right:.9rem`; none of the five pages uses one.

#### 4.2.5 LiveAppEmbed (NEW)
- Lives inside a `media-bottom` FeatureRow (wrapper 720 wide at x 360). H2 "Explore a live data app" + p with an inline link (`PortableText__StyledLink`: color `#F5C0C0`, `border-bottom:1px solid #F5C0C0`; hover bg `color-mix(in srgb,#F5C0C0 30%,transparent)`, no underline; transition `background-color .1s linear`).
- Full-bleed wrapper: `width:100vw; margin-left:calc(50% - 50vw); margin:10px 0 200px; padding:0 40px` (≤800 margin 10/40, padding 0 30px; ≤600 padding 0 20px) → [0,3303,1440,752].
- Column: flex, centered (≤600 `padding:60px 30px 0`).
- Tabs: `display:flex; gap:16px; margin-bottom:20px`, **hidden ≤600**. Tab `<button>`: `padding:8px 14px; font:14px Cinetype; line-height:normal; background:transparent`, 35 tall. Active tab: `border:1px solid #6A565B; color:#FFFFFF`. Inactive: `border:1px solid #3A3138; color:#F5C0C0`. Transition `color 120ms, border-color 120ms`. Labels: "What you can build (app)" (192w), "How it's built (logic)" (159w). Default: app.
- Frame: `position:relative; width:100%; max-width:1240px; margin:0 auto; aspect-ratio:16/9` (1240x698 at 1440; 16/10 ≤800; 16/12 ≤600 → 290x218 at 390); `background:#FFFFFF`. Two absolutely stacked slots (`inset:0`). The active one is `visibility:visible`; the other is `visibility:hidden; pointer-events:none`. Each holds an `<iframe>` (100%x100%, no border) pointing at an **external** `app.hex.tech/hex-public/…?embedded=true` URL.
- Overlay link "Explore this app" (`ExploreLink`): `position:absolute; bottom:10px; right:10px; z-index:2; background:#01011B; color:#FFFFFF; border:1px solid #6A565B; padding:10px 18px; font:600 14px Cinetype` (145x44). External href.
- Clone note: the iframes render blank white in headless Chromium (the live screenshot shows a white box). Keep them as plain external iframes with `loading="lazy"`, or show the white frame empty. Either matches the reference.

#### 4.2.6 ResourceCards (NEW)
- Wrapper: `max-width:1240px; margin:0 auto; padding:0 40px; display:flex; flex-wrap:wrap; justify-content:center; gap:40px`. Child width `calc((100% - 40px*(cols-1))/cols)` with `--cols:3` (360 each). 4-up (`data-size="Four Up"`, product-analytics) uses `--cols:4` (260 each). ≤1000 `--cols:1` (294 wide at 390).
- Card: `display:flex; flex-direction:column; justify-content:space-between; padding:40px 0`.
  - Image wrapper `margin-bottom:24px`; `img { width:100% }` at native ratio (360x≈245 for 3446x2352 sources, 360x223 for 1680x1040).
  - H3: PP Formula 800 `clamp(20px, 15.5px + 1vw, 28px)` → 28/36.4, ls -0.7px, `#FFFFFF`, left, `margin-bottom:16px`. Four Up: PP Formula **600 20px/26px**, ls -0.5px. At 390: 20/26.
  - P: 16px/25.136 (1.571) **400** `#F5C0C0`. Four-up cards have no paragraph.
  - Button: secondary md "Read more", `width:fit-content; margin-top:16px` (113x42).

#### 4.2.7 SolutionOutroCta (NEW)
- Wrapper `display:flex; flex-direction:column; width:100%; margin-top:132px` → full content column [29,…,1382,598].
- Band: `background: rgba(173,142,182,.08)`, flex column centered. A **TronDivider** (dark) sits at its top with `margin-bottom:30px`. Then a padding box `40px 40px 100px`.
- Card (`Card__Wrapper SelfServeOutroTout__TopCard`): `background:#14141C; max-width:565px; padding:68px 60px` (≤800 40px 28px); `display:flex; flex-direction:column; align-items:center; gap:20px; text-align:center; cursor:default`. Border `1px solid color-mix(in srgb, #F5C0C0 15%, transparent)`. **Corner tick** at top-right: `::before` 20x1 and `::after` 1x20, both `position:absolute; top:-1px; right:-1px; background: color-mix(in srgb,#F5C0C0 40%,transparent)`. Hover (`hover:hover`): border at 30% and `background-color: color-mix(in srgb,#F5C0C0 10%,transparent)`. Transition `border .25s, background-color .25s cubic-bezier(.25,.1,.25,1)`. Card box 565x367 at 1440.
  - H2 PP Formula 800 40/52 -1px `#FFFFFF` (solid), 2 lines at 1440.
  - P 20/30 300 `#F5C0C0`, `margin-bottom:5px`.
  - Primary lg button.
- 390: band [8,…,374,555], card 294x324, H2 30/39.

#### 4.2.8 Per-page content (T2)
Copy is verbatim. Image paths are relative to `public/assets/`. Row direction "row" means image left, text right; "row-reverse" means image right. Feature rows alternate row / row-reverse / row … starting with "row" on every page except product-analytics, which starts with row-reverse.

**/solutions/data-leaders/** (title "Hex for Data Leaders: Scale Teams and Govern AI | Hex"; doc height 5404). Feature directions: row, row-reverse, row; the blog row after the SectionHeading is row-reverse. SectionHeading text: **"Learn how other data leaders are driving influence"**. No quote and no live app.
- **sharedStyles__Info** [220, 200, 1000, 454]
  - H1: “Data leaders: Focus your team and scale answers”
  - P: “Turn “What’s taking so long?” into “How did you do that so fast?””
  - Link/button: “Request a demo” → `https://hex.tech/request-a-demo/`
  - Link/button: “Get started now” → `https://app.hex.tech/signup?source=nav&_gl=1*1gb4jmm*_gcl_au*MTE3NTA3ODUwNS4xNzQwNTk1ODUz`
- **CustomerBanner.logos** [220, 736, 1000, 50]
  - Img: `logos/customers/reddit.svg` (existing) (115x50)
  - Img: `logos/customers/notion.svg` (existing) (39x50)
  - Img: `logos/customers/anthropic.svg` (existing) (132x50)
  - Img: `pages/solutions/_shared/logo-seatgeek.svg` (51x50)
  - Img: `pages/solutions/_shared/logo-clickup.svg` (119x50)
  - Img: `pages/solutions/_shared/logo-alltrails.svg` (151x50)
- **sharedStyles__FeatureWrapper** [157, 864, 1126, 513]
  - H2: “Inform strategy with actual root cause”
  - P: “Our interactive notebooks let you explore data deeply, collaborate, and — with built-in sharing features — give consumers full context to make strategic decisions.”
  - Link/button: “See how this saved ClickUp $1M+ in churn” → `https://hex.tech/customers/clickup/`
  - Img: `pages/solutions/data-leaders/inform-strategy-with-actual-root-cause-8e147d73.png` (600x308)
- **sharedStyles__FeatureWrapper** [157, 1459, 1126, 513]
  - H2: “Governed self-serve, with AI enhancement”
  - P: “Connect your semantic layer for confident exploration without risking messy, manual duplication. Let AI unblock questions with trusted answers.”
  - Link/button: “Learn more” → `https://hex.tech/product/hex-for-teams/`
  - Img: `pages/solutions/_shared/governed-self-serve-with-ai-enhancement-591eb3c3.png` (600x416)
- **sharedStyles__FeatureWrapper** [157, 2055, 1126, 513]
  - H2: “Unify your data team's workflow”
  - P: “Hex lets you go from query to storytelling in one place. This lets your team focus on impact, not workarounds in patchwork data tools.”
  - Link/button: “Learn more” → `https://hex.tech/use-case/data-science/`
  - Img: `pages/solutions/data-leaders/unify-your-data-team-s-workflow-155eeaee.png` (600x447)
- **Heading__HeadingInternal** [420, 2720, 600, 162]
- **sharedStyles__FeatureWrapper** [157, 2986, 1126, 513]
  - H2: “AI is changing how our data team works, and that’s great”
  - P: “Lessons on thriving in the AI era.”
  - Link/button: “Read more” → `https://hex.tech/blog/lessons-running-a-data-team-with-ai/`
  - Img: `pages/solutions/_shared/ai-is-changing-how-our-data-team-works-and-that--de281fd8.png` (600x371)
- **Cards__Wrapper** [100, 3539, 1240, 553]
  - H3: “How to prepare your data strategy for LLMs”
  - H3: “A playbook for scaling data trust”
  - H3: “The myth of measuring “data team ROI””
  - P: “Every data team will need to hire an LLM. Here's what you need to know.”
  - P: “Here's some tips you may not have considered.”
  - P: “How do you measure data team ROI? You don’t.”
  - Link/button: “Read more” → `https://hex.tech/resources/llms-snowflake-cortext/`
  - Link/button: “Read more” → `https://hex.tech/resources/scaling-data-at-hubspot/`
  - Link/button: “Read more” → `https://hex.tech/blog/myth-of-data-team-roi/`
  - Img: `pages/solutions/_shared/the-snowflake-hex-guide-to-ai-ready-data-ecae8ae9.jpg` (360x246)
  - Img: `pages/solutions/data-leaders/a-playbook-for-scaling-data-trust-37318ae8.png` (360x246)
  - Img: `pages/solutions/data-leaders/the-myth-of-measuring-data-team-roi-2b32bb42.png` (360x246)
- **SelfServeOutroTout__Inner** [29, 4224, 1382, 598]
  - H2: “Learn why data leaders choose Hex”
  - P: “Contact sales”
  - Link/button: “Request a demo” → `https://hex.tech/request-a-demo/`

**/solutions/customer-success/** (title "Customer Success Analytics for CS Teams | Hex"; meta "Build customer health dashboards, track churn signals, and share account insights across your org in Hex. See how CS teams drive retention with better data."; doc 6251). Rows: row, row-reverse, row → QuoteCard (ClickUp logo; "Hex has helped ClickUp save millions of dollars in churn." — Sai Srigiriaju · Head of Growth Strategy & Ops at ClickUp) → LiveAppEmbed → ResourceCards (3-up; **no SectionHeading on this page**) → Outro.
- **sharedStyles__Info** [220, 200, 1000, 454]
  - H1: “All your customer success data in one place”
  - P: “Act early with dynamic health scores, churn predictors, and onboarding insights”
  - Link/button: “Request a demo” → `https://hex.tech/request-a-demo/`
  - Link/button: “Get started now” → `https://app.hex.tech/signup?source=nav&_gl=1*1gb4jmm*_gcl_au*MTE3NTA3ODUwNS4xNzQwNTk1ODUz`
- **CustomerBanner.logos** [220, 736, 1000, 50]
  - Img: `logos/customers/reddit.svg` (existing) (115x50 alt=Hex customer: Reddit)
  - Img: `logos/customers/notion.svg` (existing) (39x50 alt=Hex customer: Notion)
  - Img: `logos/customers/anthropic.svg` (existing) (132x50 alt=Hex customer: Anthropic)
  - Img: `pages/solutions/_shared/logo-seatgeek.svg` (51x50 alt=Hex customer: SeatGeek)
  - Img: `pages/solutions/_shared/logo-clickup.svg` (119x50 alt=Hex customer: ClickUp)
  - Img: `pages/solutions/_shared/logo-alltrails.svg` (151x50 alt=Hex customer: AllTrails)
- **sharedStyles__FeatureWrapper** [157, 864, 1126, 513]
  - H2: “Customer health, built from your relevant data sources”
  - P: “Dig in to root causes of renewals and churn”
  - P: “With Hex, bring together product usage, billing, support, and CRM data to surface the signals that matter. Identify renewal risks and prioritize accounts before it’s too late.”
  - Img: `pages/solutions/customer-success/customer-health-built-from-your-relevant-data-so-88471f87.png` (600x494 alt=Customer health, built from your relevant data sources)
- **sharedStyles__FeatureWrapper** [157, 1457, 1126, 513]
  - H2: “Proactive customer support”
  - P: “Predict churn and get ahead of expansion opportunities”
  - P: “React to problems before they happen, proactively identify growth with real-time signals like decreasing engagement or rising ticket volume.”
  - Img: `pages/solutions/customer-success/proactive-customer-support-d477dd08.png` (600x469 alt=Proactive customer support)
- **sharedStyles__FeatureWrapper** [157, 2050, 1126, 513]
  - H2: “One hub for all customer questions”
  - P: “Skip the data scavenger hunt”
  - P: “Answer business-critical questions like “Which customers are likely to renew?” or “Which features drive expansion?” in one place. No more stale dashboards. Just answers when you need them.”
  - Img: `pages/solutions/customer-success/one-hub-for-all-customer-questions-082c362c.png` (600x490 alt=One hub for all customer questions)
- **sharedStyles__Author** [399, 2860, 641, 45]
  - P: “Sai Srigiriaju  ·  Head of Growth Strategy & Ops at ClickUp”
- **sharedStyles__Wrapper** [360, 3084, 720, 1171] dir=column-reverse
  - H2: “Explore a live data app”
  - P: “Build your own Account 360, a one-stop customer health command center.”
  - Link/button: “a one-stop customer health command center” → `https://hex.tech/blog/customer-health-data-app-account-360/`
  - Link/button: “What you can build (app)” → `null`
  - Link/button: “How it's built (logic)” → `null`
  - Link/button: “Explore this app” → `https://app.hex.tech/hex-public/app/Account-360-Demo-030VDDvd5yRsH5VRNTl8dm/latest`
  - iframe: `https://app.hex.tech/hex-public/app/Account-360-Demo-030VDDvd5yRsH5VRNTl8dm/latest?embedded=true`
  - iframe: `https://app.hex.tech/hex-public/hex/Account-360-Demo-030VDDvd5yRsH5VRNTl8dm/draft/logic?embedded=true`
- **Cards__Wrapper** [100, 4295, 1240, 639]
  - H3: “ClickUp: How a data app saved $1M+ in churn”
  - H3: “Why data teams (almost) never have to answer the same customer question twice”
  - H3: “How we built a customer health command center in Hex”
  - P: “Data apps let multiple teams see the causes behind churn and get ahead.”
  - P: “How you can break free from repetitive customer questions.”
  - P: “Build your own Account 360: a complete customer health cockpit”
  - Link/button: “Read more” → `https://hex.tech/resources/data-app-click-up/`
  - Link/button: “Read more” → `https://hex.tech/blog/data-app-for-customer-success-analytics/`
  - Link/button: “Read more” → `https://hex.tech/blog/customer-health-data-app-account-360/`
  - Img: `pages/solutions/customer-success/clickup-how-a-data-app-saved-1m-in-churn-5546f440.png` (360x224 alt=figure - ClickUp: How a data app saved $1M+ in churn)
  - Img: `pages/solutions/_shared/why-data-teams-almost-never-have-to-answer-the-s-cf7b95be.png` (360x223 alt=figure - Why data teams (almost) never have to answer the sa)
  - Img: `pages/solutions/_shared/account-360-in-hex-your-one-stop-customer-health-4a315add.png` (360x223 alt=figure - How we built a customer health command center in He)
- **SelfServeOutroTout__Inner** [29, 5066, 1382, 598]
  - H2: “Learn why data leaders choose Hex”
  - P: “Contact sales”
  - Link/button: “Request a demo” → `https://hex.tech/request-a-demo/`

**/solutions/marketing/** (title "Marketing Analytics for Campaign and Attribution | Hex"; doc 8211). The H1 "Grow pipeline with clarity" is one line, so the Info box is 861x376. Rows alternate with a **QuoteCard after each of the 3 feature rows** (OM1, Algolia, ClickUp) → LiveAppEmbed → SectionHeading **"Why data and marketing teams choose Hex"** → blog FeatureRow → ResourceCards 3-up → Outro (H2 "Learn why data teams choose Hex for marketing analytics", 3 lines, card 702 tall band).
- **sharedStyles__Info** [290, 200, 861, 376]
  - H1: “Grow pipeline with clarity”
  - P: “Turn scattered marketing data into clear growth opportunities”
  - Link/button: “Request a demo” → `https://hex.tech/request-a-demo/`
  - Link/button: “Get started now” → `https://app.hex.tech/signup?source=nav&_gl=1*1gb4jmm*_gcl_au*MTE3NTA3ODUwNS4xNzQwNTk1ODUz`
- **CustomerBanner.logos** [220, 658, 1000, 50]
  - Img: `logos/customers/reddit.svg` (existing) (115x50 alt=Hex customer: Reddit)
  - Img: `logos/customers/notion.svg` (existing) (39x50 alt=Hex customer: Notion)
  - Img: `logos/customers/anthropic.svg` (existing) (132x50 alt=Hex customer: Anthropic)
  - Img: `pages/solutions/_shared/logo-seatgeek.svg` (51x50 alt=Hex customer: SeatGeek)
  - Img: `pages/solutions/_shared/logo-clickup.svg` (119x50 alt=Hex customer: ClickUp)
  - Img: `pages/solutions/_shared/logo-alltrails.svg` (151x50 alt=Hex customer: AllTrails)
- **sharedStyles__FeatureWrapper** [157, 786, 1126, 513]
  - H2: “When’s the last time you asked which attribution model is right?”
  - P: “When we are all working from the same context, the analysis doesn't drift.”
  - P: “Endorse your attribution model once in Hex, and every agent conversation, dashboard, and app pulls from that same definition.”
  - Img: `pages/solutions/marketing/when-s-the-last-time-you-asked-which-attribution-4f32b2ab.png` (600x458 alt=When’s the last time you asked which attribution model is ri)
- **sharedStyles__Quote** [136, 1478, 1168, 196]
  - P: “We built a self-serve data app in Hex that lets sales and marketing teams manage healthcare data mappings without SQL, saving the data team hours weekly on massive datasets.””
  - P: “Zach Bryant  ·  Associate Director of Data & Analytics at OM1”
  - Img: `pages/solutions/_shared/customer-story-om1-ea3c3c81.svg` (66x35 alt=OM1)
- **sharedStyles__FeatureWrapper** [157, 1853, 1126, 513]
  - H2: “Trying to answer on the spot questions about marketing-sourced pipeline?”
  - P: “Your next read out just got a lot easier.”
  - P: “Ask the agent and get a real, governed answer — delivered as a presentation-ready visual you can screen-share straight from Hex, not a query result you have to rebuild into slides.”
  - Img: `pages/solutions/marketing/trying-to-answer-on-the-spot-questions-about-mar-ae0c122e.png` (600x460 alt=Trying to answer on the spot questions about marketing-sourc)
- **sharedStyles__Quote** [136, 2545, 1168, 261]
  - P: “My Hex application gives marketing leaders the ability to analyze different lead qualifiers and see hypothetical results. Now they are generating higher quality leads. By removing over 1,100 low-quality demo requests, Sales avoided spending an estimated 140 hours manually qualifying leads in a singl”
  - P: “Jillian Lellis  ·  Senior Marketing Data Operations Manager at Algolia”
  - Img: `pages/solutions/_shared/customer-story-algolia-baea542d.svg` (68x35 alt=Algolia)
- **sharedStyles__FeatureWrapper** [157, 2984, 1126, 513]
  - H2: “Catching a conversion drop after it's already cost you the quarter?”
  - P: “Define what metrics matter and Hex watches the rest.”
  - P: “Set up Tasks to surface conversion drops, channel shifts, or pipeline anomalies right in Slack before anyone has to notice something's off and figure out why.”
  - Img: `pages/solutions/marketing/catching-a-conversion-drop-after-it-s-already-co-86fb1e8f.png` (600x609 alt=Catching a conversion drop after it's already cost you the q)
- **sharedStyles__Quote** [136, 3676, 1168, 228]
  - P: “Our marketing lifecycle teams could not use existing views to create a solution. We needed a tool with the flexibility for anyone to explore and build segments related to their part of the business. Hex unlocks that for ClickUp and has helped our teams save millions of dollars in churn.””
  - P: “Sai Srigiriaju  ·  Head of Growth Strategy & Ops at ClickUp”
  - Img: `pages/solutions/_shared/logo-clickup.svg` (83x35 alt=ClickUp)
- **sharedStyles__Wrapper** [360, 4084, 720, 1201] dir=column-reverse
  - H2: “Explore a live data app”
  - P: “Build your own Bottoms-up Pipeline dashboard to understand campaign performance against targets.”
  - Link/button: “What you can build (app)” → `null`
  - Link/button: “How it's built (logic)” → `null`
  - Link/button: “Explore this app” → `https://app.hex.tech/hex-public/app/034bMZkDGfvJGfA70QkjMY/latest`
  - iframe: `https://app.hex.tech/hex-public/app/034bMZkDGfvJGfA70QkjMY/latest?embedded=true`
  - iframe: `https://app.hex.tech/hex-public/hex/Sales-Account-Prioritization-Tool-034bMZkDGfvJGfA70QkjMY?threadId=01a112aa-657a-777f-83bd-f701e687b94f&threadLayout=collapsed&embedded=true`
- **Heading__HeadingInternal** [420, 5437, 600, 110]
- **sharedStyles__FeatureWrapper** [157, 5651, 1126, 513]
  - H2: “Tired of pipeline forecast panic? Here’s how we beat it”
  - P: “Here's why a data app is better than spreadsheets every time.”
  - Link/button: “Read more” → `https://hex.tech/blog/pipeline-forecast-data-app/?utm_source=marketing_site&utm_medium=solutions&utm_campaign=marketing_analytics`
  - Img: `pages/solutions/marketing/tired-of-pipeline-forecast-panic-here-s-how-we-b-459c3f67.png` (600x315 alt=Tired of pipeline forecast panic? Here’s how we beat it)
- **Cards__Wrapper** [100, 6204, 1240, 587]
  - H3: “How we cracked lead conversion by segment”
  - H3: “Why, when and how to use a first-touch attribution model”
  - H3: “ClickUp: How a data app saved $1M in churn”
  - P: “Here's how to see what leads are worth chasing and which aren’t.”
  - P: “First-touch attribution is a first-step to providing your marketing team value. Here’s how we did it in Hex.”
  - P: “ClickUp’s data app helped multiple marketing teams reduce churn, with reports they could explore on their own.”
  - Link/button: “Read more” → `https://hex.tech/blog/lead-conversion-in-hex/`
  - Link/button: “Read more” → `https://hex.tech/blog/building-a-first-touch-attribution-model/`
  - Link/button: “Read more” → `https://hex.tech/resources/data-app-click-up/`
  - Img: `pages/solutions/_shared/how-we-cracked-lead-conversion-by-segment-1b910ed6.png` (360x218 alt=figure - How we cracked lead conversion by segment)
  - Img: `pages/solutions/marketing/why-when-and-how-to-use-a-first-touch-attributio-80042e48.png` (360x218 alt=figure - Why, when and how to use a first-touch attribution )
  - Img: `pages/solutions/marketing/clickup-how-a-data-app-saved-1m-in-churn-55321389.jpg` (360x218 alt=figure - ClickUp: How a data app saved $1M in churn)
- **SelfServeOutroTout__Inner** [29, 6922, 1382, 702]
  - H2: “Learn why data teams choose Hex for marketing analytics”
  - P: “Contact sales”
  - Link/button: “Request a demo” → `https://hex.tech/request-a-demo/`

**/solutions/product-analytics/** (title "Product Analytics for Data-Driven Teams | Hex"; doc 7000). Row 1 is row-reverse and has a "Read more" CTA → `/customers/kong/`. Then a QuoteCard (Kong logo 77x35; "Hex has completely changed how we support PMs and other stakeholders.” — Snehal Karanjkar · Product Analytics at Kong) → rows 2–4 (row, row-reverse, row) → LiveAppEmbed → SectionHeading **"From product questions to data-backed answers"** → ResourceCards **Four Up** (4 cards, no paragraphs) → Outro with **H2 "Product and data teams, in lock-step"**, p "Start now with a free trial", **primary "Sign up now" → `https://app.hex.tech/signup?_gl=…`**.
- **sharedStyles__Info** [220, 200, 1000, 484]
  - H1: “Product moves faster when data is in the room”
  - P: “Explore, test, and learn, so that every launch is faster, and more connected to what users actually need.”
  - Link/button: “Request a demo” → `https://hex.tech/request-a-demo/`
  - Link/button: “Get started now” → `https://app.hex.tech/signup?source=nav&_gl=1*1gb4jmm*_gcl_au*MTE3NTA3ODUwNS4xNzQwNTk1ODUz`
- **CustomerBanner.logos** [220, 766, 1000, 50]
  - Img: `logos/customers/reddit.svg` (existing) (115x50 alt=Hex customer: Reddit)
  - Img: `logos/customers/notion.svg` (existing) (39x50 alt=Hex customer: Notion)
  - Img: `logos/customers/anthropic.svg` (existing) (132x50 alt=Hex customer: Anthropic)
  - Img: `pages/solutions/_shared/logo-seatgeek.svg` (51x50 alt=Hex customer: SeatGeek)
  - Img: `pages/solutions/_shared/logo-clickup.svg` (119x50 alt=Hex customer: ClickUp)
  - Img: `pages/solutions/_shared/logo-alltrails.svg` (151x50 alt=Hex customer: AllTrails)
- **sharedStyles__FeatureWrapper** [157, 894, 1126, 513] dir=row-reverse
  - H2: “Learn the reasons behind churn and expansion”
  - P: “With Hex, Kong identified a hidden nuance in customers with a fast product activation rate — which resulted in increased retention and revenue.”
  - Link/button: “Read more” → `https://hex.tech/customers/kong/`
  - Img: `pages/solutions/product-analytics/learn-the-reasons-behind-churn-and-expansion-2cab0d5e.png` (600x421 alt=Learn the reasons behind churn and expansion)
- **sharedStyles__Author** [297, 1704, 845, 45]
  - P: “Snehal Karanjkar  ·  Product Analytics at Kong”
- **sharedStyles__FeatureWrapper** [157, 1928, 1126, 513] dir=row
  - H2: “Know where to invest in your product next”
  - P: “Build your product roadmap with data analysis, not gut feels.”
  - P: “Do the deep, exploratory work needed to define a product strategy. Dive into user behavior, run experiments, and get to the root causes of growth — all in one place.”
  - Img: `pages/solutions/product-analytics/know-where-to-invest-in-your-product-next-761f1d60.png` (600x442 alt=Know where to invest in your product next)
- **sharedStyles__FeatureWrapper** [157, 2521, 1126, 513] dir=row-reverse
  - H2: “Show your work as you go”
  - P: “Every Hex workbook is a living guide.”
  - P: “Show your logic with a documented workbook that steps you through metric definitions, data sources, hypotheses, decisions — no detective work required.”
  - Img: `pages/solutions/product-analytics/show-your-work-as-you-go-d04db4ff.png` (600x461 alt=Show your work as you go)
- **sharedStyles__FeatureWrapper** [157, 3114, 1126, 513] dir=row
  - H2: “Close product feedback loops faster”
  - P: “Interactive workspaces mean faster feedback loops.”
  - P: “Collaborate in real time on analysis, accelerate feedback loops, and create alignment on decisions. With Hex you can explore, iterate, and decide in the same place.”
  - Img: `pages/solutions/product-analytics/close-product-feedback-loops-faster-e94af611.png` (600x414 alt=Close product feedback loops faster)
- **sharedStyles__Wrapper** [360, 3707, 720, 1201] dir=column-reverse
  - H2: “Explore a live data app”
  - P: “Build your own Product KPIs dashboard to dig into feature adoption and usage metrics.”
  - Link/button: “What you can build (app)” → `null`
  - Link/button: “How it's built (logic)” → `null`
  - Link/button: “Explore this app” → `https://app.hex.tech/hex-public/app/Product-KPIs-0311bZZ7yTSTefhjCF3cEV/latest`
  - iframe: `https://app.hex.tech/hex-public/app/Product-KPIs-0311bZZ7yTSTefhjCF3cEV/latest?embedded=true`
  - iframe: `https://app.hex.tech/hex-public/hex/Product-KPIs-0311bZZ7yTSTefhjCF3cEV/draft/logic?embedded=true`
- **Heading__HeadingInternal** [420, 5060, 600, 110]
  - H2: “From product questions to data-backed answers”
- **Cards__Wrapper** [100, 5234, 1240, 449]
  - H3: “How Kong's product analyst uses Hex to make product improvements”
  - H3: “Why warehouse-based product analytics tells you more”
  - H3: “How PMs can find their own business-impacting insights in Hex”
  - H3: “5 Product metrics that actually drive growth (not vanity metrics)”
  - Link/button: “Read more” → `https://hex.tech/blog/how-kong-is-scaling-analytics-with-hex/`
  - Link/button: “Read more” → `https://hex.tech/blog/measuring-feature-success/`
  - Link/button: “Read more” → `https://hex.tech/blog/exploratory-product-analysis-for-product-and-engineering-teams/`
  - Link/button: “Read more” → `https://hex.tech/blog/product-metrics-that-drive-growth/`
  - Img: `pages/solutions/_shared/4-ways-kong-is-scaling-analytics-with-hex-440f5624.jpg` (260x161 alt=figure - How Kong's product analyst uses Hex to make product)
  - Img: `pages/solutions/product-analytics/why-warehouse-based-product-analytics-tells-you--16d94d94.png` (260x158 alt=figure - Why warehouse-based product analytics tells you mor)
  - Img: `pages/solutions/product-analytics/how-pms-can-find-their-own-business-impacting-in-dc87784b.png` (260x158 alt=figure - How PMs can find their own business-impacting insig)
  - Img: `pages/solutions/_shared/5-product-metrics-that-change-our-decisions-and--576c2d0d.png` (260x161 alt=figure - 5 Product metrics that actually drive growth (not v)
- **SelfServeOutroTout__Inner** [29, 5815, 1382, 598]
  - H2: “Product and data teams, in lock-step”
  - P: “Start now with a free trial”
  - Link/button: “Sign up now” → `https://app.hex.tech/signup?_gl=1*ey9vmn*_gcl_au*MTE3NTA3ODUwNS4xNzQwNTk1ODUz`

**/solutions/sales-analytics/** (title "Sales Analytics for Revenue and GTM Teams | Hex"; doc 5924). **No customer banner**: the first feature row starts at y 694. Rows: row, row-reverse, row → LiveAppEmbed → SectionHeading **"How Hex frees data teams and fuels sales"** → ResourceCards 3-up → Outro ("Learn why data teams choose Hex for sales analytics"). Hero "Request a demo" href: `https://hex.tech/request-a-demo/?utm_id=h_7015f000000VLkDAAW&utm_campaign=sales&utm_medium=landpg%20link&utm_source=cta?utm_content=sales`.
- **sharedStyles__Info** [220, 200, 1000, 454]
  - H1: “Insights for sales. Sanity for your data team.”
  - P: “Help your team close more deals and hit their targets.”
  - Link/button: “Request a demo” → `https://hex.tech/request-a-demo/?utm_id=h_7015f000000VLkDAAW&utm_campaign=sales&utm_medium=landpg%20link&utm_source=cta?utm_content=sales`
  - Link/button: “Get started now” → `https://app.hex.tech/signup?source=nav&_gl=1*1gb4jmm*_gcl_au*MTE3NTA3ODUwNS4xNzQwNTk1ODUz`
- **sharedStyles__FeatureWrapper** [157, 694, 1126, 513] dir=row
  - H2: “Map the fastest plan to your revenue target”
  - P: “One platform for sales clarity.”
  - P: “Get total clarity on what drives your pipeline—and where deals slow down. Apply past and predictive insights to hit your targets with confidence.”
  - Img: `pages/solutions/sales-analytics/map-the-fastest-plan-to-your-revenue-target-3b701163.png` (600x508 alt=Map the fastest plan to your revenue target)
- **sharedStyles__FeatureWrapper** [157, 1287, 1126, 513] dir=row-reverse
  - H2: “Data views that keep your sales team two steps ahead”
  - P: “Explore, experiment, and forecast ahead.”
  - P: “Stop using tools that only look in the rear view mirror. Empower your sales team get ahead of opportunities with highly accurate, automated forecasts and insightful, forward-looking analysis.”
  - Img: `pages/solutions/sales-analytics/data-views-that-keep-your-sales-team-two-steps-a-39e4ac84.png` (600x406 alt=Data views that keep your sales team two steps ahead)
- **sharedStyles__FeatureWrapper** [157, 1880, 1126, 513] dir=row
  - H2: “Flexible for sales; reliable data for everyone”
  - P: “Provide trusted data exploration.”
  - P: “Say goodbye to non-trustworthy analyses in floating spreadsheets. Let everyone explore trusted sales data from AI-driven natural language and user-friendly apps.”
  - Img: `pages/solutions/_shared/governed-self-serve-with-ai-enhancement-591eb3c3.png` (600x416 alt=Flexible for sales; reliable data for everyone)
- **sharedStyles__Wrapper** [360, 2473, 720, 1201] dir=column-reverse
  - H2: “Explore a live data app”
  - P: “Build your own Sales Stage Conversion dashboard to understand and optimize pipeline health.”
  - Link/button: “What you can build (app)” → `null`
  - Link/button: “How it's built (logic)” → `null`
  - Link/button: “Explore this app” → `https://app.hex.tech/hex-public/app/Sales-Stage-Conversion-0313skUABWhY9e3i1fmFsZ/latest`
  - iframe: `https://app.hex.tech/hex-public/app/Sales-Stage-Conversion-0313skUABWhY9e3i1fmFsZ/latest?embedded=true`
  - iframe: `https://app.hex.tech/hex-public/hex/Sales-Stage-Conversion-0313skUABWhY9e3i1fmFsZ/draft/logic?embedded=true`
- **Heading__HeadingInternal** [420, 3826, 600, 110]
  - H2: “How Hex frees data teams and fuels sales”
- **Cards__Wrapper** [100, 4000, 1240, 556]
  - H3: “How StubHub pinpointed ticket sales trends”
  - H3: “Unlock funnel analysis with SQL and Python”
  - H3: “Predictive Lead Scoring with Python”
  - P: “Data apps let teams see the causes behind spikes or drops in ticket sales.”
  - P: “Identify exactly where your sales funnel is leaking with SQL and Python.”
  - P: “Learn how to prioritize prospects effectively with a predictive scoring model.”
  - Link/button: “Read more” → `https://hex.tech/resources/data-app-stubhub/`
  - Link/button: “Read more” → `https://hex.tech/blog/funnel-analysis/`
  - Link/button: “Read more” → `https://hex.tech/blog/predictive-lead-scoring-python/`
  - Img: `pages/solutions/sales-analytics/how-stubhub-pinpointed-ticket-sales-trends-a10a7690.png` (360x212 alt=figure - How StubHub pinpointed ticket sales trends)
  - Img: `pages/solutions/sales-analytics/unlock-funnel-analysis-with-sql-and-python-d726e793.png` (360x212 alt=figure - Unlock funnel analysis with SQL and Python)
  - Img: `pages/solutions/_shared/how-we-cracked-lead-conversion-by-segment-1b910ed6.png` (360x218 alt=figure - Predictive Lead Scoring with Python)
- **SelfServeOutroTout__Inner** [29, 4688, 1382, 650]
  - H2: “Learn why data teams choose Hex for sales analytics”
  - P: “Contact sales”
  - Link/button: “Request a demo” → `https://hex.tech/request-a-demo/`

#### 4.2.9 T2 at 390 (measured on customer-success)
Doc 7871. Subgrid padding-top 144. Hero Info [38,144,314,616]. Banner 300 tall, 3 rows of logos. Feature rows are `column-reverse` (text block first, then the 320-tall media box with the image at 314 wide). Wrapper padding 30px; H2 30/39 -0.75; body 20/30. QuoteCard 252 wide, blockquote 22/29.7, outer padding 60px 30px. LiveAppEmbed tabs hidden; frame [50,…,290,218]. Cards 1 column, 294 wide. Outro card 294 wide, padding 40px 28px.

### 4.3 T3: Enterprise (`/enterprise/`)
Title "Enterprise | Hex", meta "Connect to data, provision users, and enforce permissions with ease." Doc 7785 at 1440 (9485 at 390). The content sits in a `BasicPageRow` frame with checkered margins and starts at y 200.

Section list:
1. Header: **REUSE**.
2. **EnterpriseHero** (NEW) [100,200,1240,680]
3. Minimal CustomerBanner, "Trusted by leading data companies": **REUSE** (§3.2) [y 1064–1190]
4. **NumberedFeatureGrid + LogoBlocks**, "Your data is safe with us" (NEW) [100,1190,1240,838]
5. **IllustratedChecklistTout**, "Governance & Control" (NEW) [100,2227,1240,688]
6. **SupportTout**, "Everything your team needs to succeed" (NEW) [100,3115,1240,927]
7. **Integrations**: **REUSE** (dark, identical copy and links) [100,4312,1240,1062]
8. **CtaSplitTout**, "A complete solution for enterprise analytics" (NEW) [100,5525,1240,606]
9. TronDivider + **Faq**: **REUSE** (dark, items below) [29,6331,1382,868]
10. Footer: **REUSE**.

Common section shell: `display:flex; max-width:1240px; width:100%; padding:40px 40px 0; margin:0 auto 200px` (≤1000 margin-bottom 60; ≤800 column, padding 0 40px). Section H1s are PP Formula SemiExtended 700 60/78 -1.848px with dark gradient text and left alignment.

#### 4.3.1 EnterpriseHero (NEW)
- `display:grid; grid-template-columns:repeat(2,1fr)` (580/580); `padding:0 40px; margin:0 auto 140px` (≤1000 mb 60; ≤800 flex column, padding 0 16px).
- Left (`max-width:540px; position:relative`; its `p` are `width:92%`, 100% at ≤800):
  - Sideways eyebrow "ENTERPRISE": `position:absolute; left:-155px; top:118px; transform:rotate(270deg); opacity:.7; display:flex; align-items:center; gap:20px`. IBM Plex Mono 600 14px, ls 5px, uppercase, `#F5C0C0`. `::before` is a 100x1 line `rgba(173,142,182,.5)`. ≤1000 `top:120px; left:-142px`; hidden ≤800. It renders as a vertical label at x≈101–123, y 202–456, reading bottom→top.
  - H1 "Built for scale, security, and control": PP Formula SemiExtended 700 **68px/88.4px** ls -2.094px, `#FFFFFF` (solid), left, `margin-bottom:17px` (4 lines at 1440). ≤600: **54px/56px**.
  - P "Connect to data, provision users, and enforce permissions with ease.": 24/36 300 `#F5C0C0`, `margin-bottom:35px` (20/30 at ≤450).
  - CheckList: grid, 2 columns (270/270), `row-gap:16px; margin:30px 0 46px` (1 column ≤800). Items: "SSO and SCIM", "HIPAA BAA available", "Single tenant deploys", "OAuth and SSL data connections".
  - Actions `display:flex; gap:20px` (≤800 column, gap 10, stretched): primary lg "Get in touch" → `/request-a-demo/` (122x50).
- Right: `display:flex; align-items:center; justify-content:flex-start; position:relative`. `<img>` `pages/solutions/enterprise/illustration-enterprise-hero.svg`, `position:absolute`, rendered **624x523** at [720,278], overflowing the 580 column. ≤800: `position:relative; width:180%`, `margin-top:40px`, centered. The 390 measurement did not report the img box; treat it as decorative overflow.

#### 4.3.2 CheckItem (NEW, shared by 4.3.1 / 4.3.3 / 4.3.5)
`display:flex; align-items:center; gap:18px`. Icon: 15x15 SVG "green-tick" (`<path d="M1 7L5.5 11.5L14 3" stroke="#43D59D" stroke-linecap="square" fill="none"/>`, markup in `dom/enterprise-icons.svg.html`), wrapper `transform:scale(1.5)` (≤1000 `scale(1.25) translateX(2px)`). Text `<p>` 20px/30px 300 `#FFFFFF`.

#### 4.3.3 "Your data is safe with us" (NEW: NumberedFeatureGrid + LogoBlocks)
- Shell: `gap:80px; padding-top:160px` (≤800 40px).
- Left column (760): H1 "Your data is safe with us" (gradient, `max-width:500px; margin-bottom:50px`, 2 lines; ≤800 mb 0). Number grid: `display:grid; grid-template-columns:repeat(2,1fr); gap:30px 60px; margin-bottom:40px` (350 columns; ≤800 flex column, gap 30, mb 50).
  - Item: number `<p>` IBM Plex Mono **300** 16px/24 ls 2px uppercase `#AD8EB6`, `margin-bottom:10px` (4 at ≤800) → H3 PP Formula 800 28/36.4 -0.7 `#FFFFFF`, `margin-bottom:10px` → p 20/30 300 `#F5C0C0`.
  - 01 "Completely compliant" — "SOC2 Type II, HIPAA, GDPR."; 02 "Secure database connections" — "SSL and pass-through OAuth available."; 03 "Flexible deployment models" — "Multi-tenant HIPAA or EU and Single-Tenant options available."
  - Secondary md button "Learn more about security" → `/security/` (215x42).
- Right column (320): `LogoBlockWrapper` flex column. Three 160x160 boxes (`border:1px solid #F5C0C0`, flex center), staggered: box 1 `margin-left:160px` (x 1140), box 2 `margin-right:160px` (x 980), box 3 `margin-left:160px`. They stack with no gap (y 1350/1510/1670). Images: GDPR 74x72, AICPA SOC 87x86, HIPAA 108x54 (`pages/solutions/enterprise/logo-*.svg`).
- ≤800: logo wrapper becomes a row (`padding:30px 0`) of three flexible boxes 80 tall (`flex:1; margin-left:-1px`, img `scale:.5`). It sits between the title and the grid (y 1305 at 390).

#### 4.3.4 "Governance & Control" (NEW: IllustratedChecklistTout)
- Shell: `align-items:center; gap:120px` (≤600 gap 60; ≤800 column).
- `<img>` `pages/solutions/enterprise/illustration-governance-and-control.svg` 508x463 (≤600 width 100%).
- Right column (532): H1 "Governance & Control" (gradient, `margin-bottom:12px`) → p "Ensure compliance, mitigate risk, and optimize resources." 24/36 300, mb 25 → vertical CheckList (`flex column; gap:30px; padding:5px 0 30px`): "SSO support", "SCIM Directory sync from Okta, Active Directory, and Google", "Secure data connections using SSL and OAuth pass-through", "Audit logging and version control, so you know who did what when" → secondary md "Learn more about control" → `/security/`.
- 390: image first (294x268), then text.

#### 4.3.5 "Everything your team needs to succeed" (NEW: SupportTout)
- Shell: column. Top: `display:flex; flex-direction:column; align-items:center; padding:0 200px; margin-bottom:80px` (≤1000 padding 0, mb 40, left aligned). H1 (gradient, centered, 2 lines, mb 12; ≤800 left) → p "Our expert Support teams engage deeply with customers, from implementation to ongoing usage." 24/36 300, centered, mb 40 (≤1000 left) → primary lg "Get in touch" → `/request-a-demo/`.
- Bottom: `display:flex; padding:0 100px` (≤1000 column, padding 0). Grid 2x2 (`gap:50px`, 234.5 columns, rows 210.5; ≤800 1 column, gap 20) of IconText items: `display:flex; align-items:center; gap:15px`. Icon 15–16px SVG, color `#99797D` (`--fg1100`). Text 20px/30 **400** `#FFFFFF` (16px ≤450). Items: "Email and Slack support", "Priority SLAs and response times", "Dedicated Product Expert", "Customized learning sessions". Stair illustration `pages/solutions/_shared/support-section.svg` 441x471 on the right, **hidden ≤1000**.

#### 4.3.6 "A complete solution for enterprise analytics" (NEW: CtaSplitTout)
- Shell: `gap:40px; margin-top:90px` (≤1000 mt 10, gap 0).
- Left (`flex:1 1 50%`): H1 (gradient, left, 4 lines, mb 50; ≤800 mb 0) → CheckList, 2-column grid (row-gap 16; margin 30px 0 46px): "Unlimited users", "Dedicated support", "Unlimited projects", "Customized environments and more...", "Usage reports".
- Right (`flex:1 1 45%`): the **same bordered CTA card as §4.2.7** (corner tick, 15%/30% border, hover tint), `padding:68px 60px` (≤800 40px), centered column gap 20. H2 PP Formula 800 40/52 "Ready to get started?" → p 24/36 300 "Get in touch and find out which plan is right for you." mb 25 → primary lg "Contact Sales" → `/request-a-demo/`. Card 531x566.

#### 4.3.7 FAQ items (REUSE Faq)
Wrapper `EnterprisePageContent__FAQWrapper` (bg `#14141C`, z 1) = TronDivider (mb 30) + Faq. H2 "FAQ" PP Formula 800 40/52 white.
1. **What are Hex's security policies and controls?** — "Hex is built on industry-leading security and privacy standards that keep our customer's data secure while connecting, querying, analyzing, and sharing. Hex is committed to helping customers of all sizes meet their data protection and compliance requirements." / "As evidence of this, we have [obtained our SOC 2 Type II report](/blog/soc-2-type-II-for-you/), which attests to the effectiveness and our adherence to security controls and processes." / "[Read more](/security/)"
2. **What deployment models does Hex offer?** — "Hex has 2 options for deployment:" • Multi-tenant cloud, including separate HIPAA and EU stacks • Single-tenant VPCs, typically set up to securely peer to your existing infrastructure. These are fully-managed. / "Please feel free to [get in touch](/request-a-demo/) to discuss which might work best for you." (list: `display:flex; flex-direction:column; gap:5px; padding-left:18px`)
3. **Does Hex work with large data?** — "Hex is built to seamlessly handle cloud-scale workloads. Hex runs queries directly against the customer’s data warehouse, meaning workflows can scale as large as the underlying warehouse allows."
4. **What is Hex's pricing model?** — "Our Enterprise solution is a custom solution tailored to meet your needs. It includes advanced security, custom support packages, and a series of control features for large organizations." / "[Get in touch](/request-a-demo/)"
5. **How can we get started evaluating Hex?** — "Anyone can sign up for a free 14-day trial of Hex's Team plan. If you'll require more time to evaluate Hex or are curious about our Enterprise plan, please [reach out](/request-a-demo/) and we'll get you set up!"
6. **How is data stored in Hex?** — "Hex stores all cell output data, including previews of SQL results, in AWS RDS, and uploaded files are stored in AWS S3. Data in RDS and S3 persists indefinitely until the associated project is deleted or a deletion request is made. Caching of SQL cell output data is opt-in, configurable, and stored in S3 for up to 90 days."
7. **How do I manage who has access to data in Hex?** — "Hex supports SSO via OIDC within the product. Hex gives users the tools to implement role-based access control on all Hex artifacts. This gives customers fine-grained control over who in an organization has access to specific data. Administrators have control over what users have access to and can restrict access to databases, and the ability to view or edit projects."
Footer line: "Can't find your answer here? [Get in touch](/request-a-demo/)."

#### 4.3.8 Enterprise at 390
Hero [8,144,374,656] (column, padding 0 16): H1 54/56, checklist 1 column (342 wide), actions column. Banner 300 tall. Safe section [8,1160,374,817]: title 38/49.4 → logo row (3 boxes 94x80) → grid as column. Governance [8,2037,374,997]. Support [8,3099,374,652]: grid 1 column, illustration hidden. Integrations [8,3810,374,2604]. Complete [8,6465,374,889]: CTA card 294 wide, padding 40. FAQ inner 374 wide. Footer 1114.

### 4.4 T4: Pricing (`/pricing/`)
Title "Hex Pricing: Plans for Every Data Team | Hex". Doc 5549 at 1440 (3908 collapsed / 5002 with one expander open at 390).

**There is no billing-period toggle** (no monthly/annual switch) on the live page as of this capture. The interactive states are: feature tooltips, the compute-profiles modal, the sticky comparison header, row hover, the FAQ accordion, and the mobile "See all features" expanders.

Section list (all inside `PricingPageContent__Wrapper` [29,200,1382,4762], plain margin lines, no checker):
1. Header: **REUSE**.
2. **PricingHeader** (NEW) [100,200,1240,110]
3. **PlanSummaryGroups** (NEW) [68,350,1304,950]
4. Minimal CustomerBanner "Trusted by leading data teams" with story popovers on Notion, ClickUp and AllTrails: **REUSE** [29,1300,1382,170]
5. TronDivider: **REUSE** [29,1470,1382,61]
6. **PlanComparisonTable** + **StickyPlanHeader** + **FeatureTooltip** (NEW) [29,1531,1382,2658]
7. TronDivider, flipped vertically (`transform: scaleY(-1)`): **REUSE** [29,4189,1382,61]
8. **Faq**: **REUSE** (items in §4.4.6) [29,4250,1382,712]
9. Footer: **REUSE**.
Plus **ComputeProfilesModal** (NEW, portal) and, at ≤800, **PlansMobileView** (NEW) replacing 3 and 6.

#### 4.4.1 PricingHeader (NEW)
Inner `max-width:1240px; padding:0 16px; margin:0 auto 40px` (≤800 margin 32px 0 80px, padding 0). H1 "Pricing" PP Formula SemiExtended 700 60/78 -1.848px `#FFFFFF` (solid), left, mb 10 (38/49.4 at 390). P 14px/21.994 `#F5C0C0`: "Choose the right plan for you and your team. Don't know what you need? [Get in touch.](/request-a-demo/)". The link is `#E3B2B3` with `border-bottom:1px solid #E3B2B3`.

#### 4.4.2 PlanSummaryGroups (NEW)
- Row: `max-width:1304px; padding:0 16px; margin:0 auto` → `PlanSummaryRow` flex column, `padding:20px 0 60px`. Grid `grid-template-columns:620px 620px; gap:64px; z-index:2` (≤1000 1 column, gap 96, Team group first via `order:-1`).
- Group (`PricingGroup__PlanCategoryContainer`): `display:flex; position:relative; border:1px solid transparent` (Individual). Team group (`data-team=true`): `border-color:#3A3138`. ≤800: column, `max-width:420px; margin:0 auto`.
  - Rails: two 1px vertical dashed lines (`border-right:1px dashed #3A3138`) at the group's left and right edges, extending **56px above** (`inset:-56px auto 0 -1px`) with `mask-image: linear-gradient(transparent, red 56px)` so they fade in from the top.
  - Label pill on the top edge, centered (`translate(-50%,-50%)`): Cinetype Mono 12px/18.852 ls .9996px uppercase `#E3B2B3` on `#14141C`, `border:1px solid #3A3138; border-radius:1px; padding:4px 32px`, paper texture `::after`. Text "INDIVIDUAL PLANS" (205x29) or "TEAM PLANS" (153x29).
  - Corner accents: 12x12 L-brackets at all four corners (1px; color `#786065` on Individual, `#E3B2B3` on Team).
- Plan card (`PlanSummaryCard`, ≈310 wide each, 868 tall): `display:flex; flex-direction:column; align-items:flex-start; padding:48px 32px 32px`.
  - Team-group cards only: a rose Perlin layer. `LinearGradientMask` (absolute inset 0, `mask-image: linear-gradient(to top, rgba(0,0,0,.28), rgba(0,0,0,.28) 60%, transparent 105%)`) → dot mask (`radial-gradient(#fff, #fff 1px, transparent 1px, transparent)`, 6px grid from PerlinNoise) → `noise-rose-128x128.png` at `background-size:512px 512px; animation: noise 16s linear infinite`. **REUSE `PerlinNoise`** with these props.
  - Illustration: 28x28 inline line-art SVG, one per plan (in `dom/pricing-plans-and-table.html`), `margin-bottom:40px`.
  - Header (`PlanHeader`, flex column, `margin-bottom:52px`): H3 PP Formula 800 28/36.4 -0.7 `#FFFFFF` → description `<p>` 14/21.994 `#F5C0C0`, `padding-top:16px`, min-height so all four align (box 128 tall) → price row (`margin-bottom:20px`): price Cinetype **800 28px/43.988** `#F8FAFB` + detail Cinetype 16px/25.136 `#FFFFFF` `opacity:.75` ("per Editor / month") → full-width **primary md** button (40+2 tall, card width minus padding: 247/243/239/…).
  - Feature list (`FeatureSummary`, flex column): intro line 14/22 `#F5C0C0` with a bold plan name (`<strong>` weight 600), mb 12. Then items (`display:flex; margin-bottom:10px`): tick (15x11 SVG `M1 5L5.5 9.5L14 1`, stroke `#43D59D`, wrapper 15x20, `margin-right:10px`) + text 14px/18px `#FFFFFF`. Terms with tooltips get `border-bottom:2px dotted rgba(245,192,192,.5)` (§4.4.4).
- Plans (verbatim):
- **Community** — “For hobbyists completing small projects and showcasing work.” — price “Free” — CTA “Get started” → `https://app.hex.tech/signup?plan=community&source=pricing` — list intro “Features include:”
  - Hex agent trial
  - Connect any data source  [tooltip terms: data source]
  - Build with all cell types  [tooltip terms: cell types]
  - Small compute  [tooltip terms: Small]
- **Professional** — “For individuals accelerating data insights and solo workflows.” — price “$36 per Editor / month” + “ per Editor / month” — CTA “Get started” → `https://app.hex.tech/signup?plan=professional&source=pricing` — list intro “Everything in Community, plus:”
  - Hex agent
  - Standard credits
  - Up to 5 published apps  [tooltip terms: published apps]
  - 30-day version history
  - Medium compute  [tooltip terms: Medium]
- **Team** — “For companies collaborating with data and automating manual work.” — price “$75 per Editor / month” + “ per Editor / month” — CTA “Try 14 days free” → `https://app.hex.tech/signup?plan=team&source=pricing` — list intro “Everything in Professional, plus:”
  - Extended credits
  - Unlimited published apps  [tooltip terms: published apps]
  - Visual exploration and drill down  [tooltip terms: Visual exploration , drill down]
  - Unlimited version history
  - Scheduled runs and alerts
  - Shared components  [tooltip terms: components]
  - Shared collections  [tooltip terms: collections]
  - Advanced compute add-ons  [tooltip terms: Advanced]
- **Enterprise** — “For organizations requiring advanced security, governance, and support.” — price “Custom” — CTA “Contact Sales” → `/request-a-demo/` — list intro “Everything in Team, plus:”
  - Explorer seat add-on  [tooltip terms: Explorer seat]
  - Audit logs
  - Premium credits
  - OAuth database connections  [tooltip terms: OAuth database connections]
  - Observability API  [tooltip terms: Observability API]
  - OIDC SSO
  - Bring Your Own Key (BYOK)  [tooltip terms: Bring Your Own Key (BYOK)]
  - Single tenant add-on
  - HIPAA add-on
  - Embedded analytics add-on
  - Custom Docker image add-ons
  - Dedicated support

#### 4.4.3 PlanComparisonTable + StickyPlanHeader (NEW)
- Wrapper `padding-top:40px`. H2 "Compare plan features" PP Formula 800 40/52 -1px `#FFFFFF`, at x 68 (inside a 1304 inner).
- Grid container: `display:flex; flex-direction:column; padding:60px 0 100px; position:relative`.
- **Header row** (`StickyTableHeader__GridHeader`, `z-index:3`, wrapper height **122px**): inner `max-width:1304px; margin:0 auto`, children `width:20%` each (Spacer + 4 plan columns, 261 wide). Plan column: `display:flex; flex-direction:column; padding:20px 10px`; plan name H3 PP Formula **800 28px/36.4px** ls -0.7px `#FFFFFF`, centered, `margin-bottom:10px`; then a full-width md button with a **12px/18.852** label (secondary for Community/Professional/Enterprise, primary with corner circles for Team "Try 14 days free"), same CTAs and hrefs as the plan cards.
- **Sticky behavior** (react-stickynode pattern): once the header row's top passes 82px (header height), its content becomes `position:fixed`. `StickyTableWrapper` gets `position:absolute; top:var(--top, 80px)` with `--top:82px` measured (`top:76px` at ≤1000), `width:calc(100% + 2px); left:-1px; background:#14141C; border-bottom:1px solid #3A3138; border-left/right:1px solid #3A3138`, plus a paper-texture `::after`. Stuck it is 1384x125 at x 28, top 82. It un-sticks at the bottom of the table. While stuck, the Spacer's child, an H4 "Compare plan features:" (PP Formula **600 20px/26px** ls -0.5px `#FFFFFF`, wraps to 2 lines "Compare / plan features:"), fades from `opacity:0` to `1` (`transition: opacity .25s cubic-bezier(.25,.1,.25,1)`); it is `opacity:0` otherwise. Screenshot: `pricing-1440-table-scrolled.jpg`.
- **Sections** (`GridSection`): H4 section title PP Formula 600 20/26 `#FFFFFF`, `margin-bottom:10px` (the first section has an empty H4). Sections are separated by `gap:30px` (`GridContent`).
- **Row** (`FeatureComparisonGrid`): `display:flex; position:relative`; children `width:20%; padding:12px 10px` (first child `padding-left:0`); 46 tall for one line. Row hover: `::after` spanning `inset:0 -100vw` with bg `#F5C0C0`, `opacity:0 → .1`, `transition: opacity .25s cubic-bezier(.25,.1,.25,1)`, pointer-events none.
  - Label cell (`FeatureLabel`): 14/21.994 `#F5C0C0`, left. Labels with tooltips: dotted underline.
  - Plan cell (`PlanCell__ComparisonCell`): `display:flex; flex-direction:column; flex:1 1 0`. ≥800 a 1px vertical rule `::before` at the cell's left in `#6A565B` (full row height; adjacent rows join into continuous column rules, broken between sections). Content `PlanItem__CellItem` is centered: either the green tick (15x11) or text 14/21.994 `#FFFFFF` centered. Footnotes ("*Available but not offered in all cases") are 10px/18px `#E3B2B3`. Some cells contain underlined links ("Small", "Medium", "Advanced compute"): `<button>`s with `text-decoration:underline`, white, that open the compute modal.
- Full data ("✓" = green tick, "—" = empty cell, "{tip}" = label has a tooltip):
| Feature | Community | Professional | Team | Enterprise |
|---|---|---|---|---|
| **(top, no title)** | | | | |
| Unlimited users | ✓ | ✓ | ✓ | ✓ |
| Hex agent | ✓ | ✓ | ✓ | ✓ |
| Credits {tip} | Limited | Standard | Extended | Premium |
| Published apps {tip} | Up to 5 | Up to 5 | Unlimited | Unlimited |
| Explorer role {tip} | — | — | — | Per seat add-on |
| **Data** | | | | |
| Project connections | ✓ | ✓ | ✓ | ✓ |
| Workspace connections | ✓ | ✓ | ✓ | ✓ |
| Data permissions {tip} | — | Restrict editing | Restrict editing | Restrict editing & viewing |
| Custom SQL formatting | — | ✓ | ✓ | ✓ |
| Explore & View data {tip} | — | — | ✓ | ✓ |
| SSH | — | ✓ | ✓ | ✓ |
| Compute profiles | Small | Medium | Advanced compute add-ons | Advanced compute add-ons |
| Environment {tip} | Standard Python libraries | Standard Python libraries | Standard Python libraries | Custom Docker image add-ons |
| Semantic models {tip} | — | — | ✓ | ✓ |
| **Collaboration** | | | | |
| Collections {tip} | — | Up to 3 shared collections | Unlimited | Unlimited |
| Components {tip} | — | Up to 3 shared components | Unlimited | Unlimited |
| Auto-archive {tip} | — | — | ✓ | ✓ |
| Scheduled runs & alerts {tip} | — | — | ✓ | ✓ |
| Version history | 7-day | 30-day | Unlimited | Unlimited |
| Reviews {tip} | — | — | ✓ | ✓ |
| Custom labels {tip} | — | — | ✓ | ✓ |
| Custom branding {tip} | — | — | Up to 1 custom app theme | Up to 5 custom app themes |
| Snapshots {tip} | — | ✓ | ✓ | ✓ |
| Presentation mode | — | ✓ | ✓ | ✓ |
| Git project export and package import | — | — | ✓ | ✓ |
| **Administration** | | | | |
| User groups {tip} | — | — | ✓ | ✓ |
| Usage reports {tip} | — | — | ✓ | ✓ |
| Integrations {tip} | — | — | Airflow, Dagster, dbt | Airflow, Dagster, dbt |
| REST APIs {tip} | — | — | ✓ | ✓ |
| Observability API {tip} | — | — | — | ✓ |
| Marketplace offerings | — | — | — | AWS Marketplace / Snowflake Marketplace |
| **Security** | | | | |
| OIDC SSO | — | — | — | ✓ |
| OAuth {tip} | — | — | — | ✓ |
| Audit logging {tip} | — | — | — | ✓ |
| Bring Your Own Key (BYOK) {tip} | — | — | — | OpenAI and Anthropic |
| Deployment | Multi-tenant | Multi-tenant | EU Multi-tenant (contract only) or multi-tenant | Single, EU Multi-tenant or multi-tenant |
| **Support** | | | | |
| Support (9am-5pm PT M-F) | Email | Email | Email, in-product messenger* with priority SLA / *Available but not offered in all cases | Email, in-product messenger, Slack*, Microsoft Teams* with Enterprise SLA / *Available but not offered in all cases |
| Learning & training | Technical documentation, group learning sessions | Technical documentation, group learning sessions | Technical documentationgroup learning sessionslive training* / *Available but not offered in all cases | Technical documentationlive onboardingby-request product education sessionsdedicated Customer Engineer*dedicated Product Expert* / *Available but not offered in all cases |

#### 4.4.4 FeatureTooltip (NEW)
- Trigger: `<span data-tooltip-id="tooltip" data-tooltip-html="…" data-tooltip-place="top|right">`. Plan-card terms use `top`; table labels use `right`. Style: `border-bottom:2px dotted rgba(245,192,192,.5)`, cursor default.
- Bubble (react-tooltip v5, `#tooltip`, dark): `background:#14141C; color:#FFFFFF; font:14px/20px Cinetype; padding:8px 10px; border-radius:3px; border:1px solid #3A3138; max-width:215px; opacity:.9; z-index:2147483647; box-shadow: 0 4px 4px rgba(1,1,27,.25), 0 0 54px #01011B, 0 0 50px rgba(58,49,56,.25)`. Arrow 8x8 rotated square `#14141C`, `--rt-arrow-size:8px`. Show and hide on hover via `transition: opacity .15s ease-out`. The bubble is clickable, so the user can move into it to click links. Link inside: `#E3B2B3`, `border-bottom:1px solid #E3B2B3`. Example measured: "Credits" → 215x78 bubble to the right of the label.
- Tooltip texts (`term => html @placement`). `#compute-modal` opens the modal; `#faq-credits` jumps to the FAQ item:
- data source => Pull data from your warehouse, cloud storage provider, local files, or API. @top
- cell types => Combine SQL, Python, charts and spreadsheets in one project. @top
- Small => 4GB RAM, 0.5 CPU. <a href="#compute-modal">Learn more</a> @top
- published apps => Sharable dashboards, reports, or data apps, built right from your notebooks. @top
- Medium => Up to 8GB RAM, 1 CPU. <a href="#compute-modal">Learn more</a> @top
- Visual exploration => Explore data with point-and-click charts and pivots. @top
- drill down => Dive deeper into the underlying data from published apps. @top
- components => Create reusable groups of cells that can be shared across your workspace. @top
- collections => Organize projects into shareable groupings. @top
- Advanced => Up to 128GB RAM, 16 CPUs, and 1 GPU. <a href="#compute-modal">Learn more</a> @top
- Explorer seat => Dedicated licenses for exploring data with natural language chat or point-and-click visualizations. @top
- OAuth database connections => Configure user-specific access controls on shared data connections. @top
- Observability API => Understand which data tables a project queries for audits, lineage mapping, and impact analysis. @top
- Bring Your Own Key (BYOK) => BYOK is supported for OpenAI and Anthropic. @top
- Credits => Credits apply towards AI feature usage.<br /><a href="#faq-credits">Learn more</a> @right
- Published apps => Sharable dashboards, reports, or data apps, built right from your notebooks. @right
- Explorer role => Explorers can chat with Threads, drill-down or explore from published apps, and subscribe to conditional notifications.<br /><a target="_blank" href="https://learn.hex.tech/docs/collaborate/sharing-and-permissions/roles">Learn more</a> @right
- Data permissions => Manage and restrict access to projects that use sensitive data.<br /><a target="_blank" href="https://learn.hex.tech/docs/connect-to-data/data-connections/data-connections-introduction#workspace-data-connection-permissions">Learn more</a> @right
- Explore & View data => Drill down into the underlying data powering a chart or table in a published App.<br /><a target="_blank" href="https://learn.hex.tech/docs/share-insights/explore">Learn more</a> @right
- Environment => Leverage preset Python libraries or customize with Docker images.<br /><a target="_blank" href="https://learn.hex.tech/docs/explore-data/projects/environment-configuration/environment-views">Learn more</a> @right
- Semantic models => Connect semantic models from dbt, Snowflake, and Cube for governed metrics.<br /><a target="_blank" href="https://learn.hex.tech/docs/connect-to-data/semantic-models/intro-to-semantic-models">Learn more</a> @right
- Collections => Groups of projects that can be created, populated, and shared by users in a workspace<br /><a target="_blank" href="https://learn.hex.tech/docs/organize-content/collections">Learn more</a> @right
- Components => Create reusable groups of cells that can be shared with your workspace. All paid plans include unlimited personal components.<br /><a target="_blank" href="https://learn.hex.tech/docs/explore-data/components">Learn more</a> @right
- Auto-archive => Configure rules to automatically archive projects that are no longer used @right
- Scheduled runs & alerts => Schedule projects to run on a set cadence. Optionally subscribe to email or Slack notifications for run status or data-driven alerts.<br /><a target="_blank" href="https://learn.hex.tech/docs/share-insights/scheduled-runs">Learn more</a> @right
- Reviews => Protect business-critical projects with required reviews<br /><a target="_blank" href="https://learn.hex.tech/docs/collaborate/reviews">Learn more</a> @right
- Custom labels => Organize your app library for easy discoverability. @right
- Custom branding => Style published apps with custom logo, chart colors, background color, and accent color. @right
- Snapshots => Freeze an app in time for easy reference in the future. @right
- User groups => Create user groups to manage permissions @right
- Usage reports => Admins can view usage of data connections, secrets and projects @right
- Integrations => Integrations with your favorite orchestration and transformation tools @right
- REST APIs => Programmatic control and automation of projects and administrative workflows.<br /><a target="_blank" href="https://learn.hex.tech/docs/api/api-overview">Learn more</a> @right
- Observability API => Understand which data tables a project queries for audits, lineage mapping, and impact analysis<br /><a target="_blank" href="https://learn.hex.tech/docs/api/api-overview">Learn more</a> @right
- OAuth => Configure user-specific access controls on shared data connections.<br /><a target="_blank" href="https://learn.hex.tech/docs/connect-to-data/data-connections/oauth-data-connections">Learn more</a> @right
- Audit logging => Get a record of key actions within your workspace for security and compliance.<br /><a target="_blank" href="https://learn.hex.tech/docs/administration/workspace_settings/audit-logs/audit-logs-overview">Learn more</a> @right
- Bring Your Own Key (BYOK) => Use your own API key for Hex's AI features.<br /><a target="_blank" href="https://learn.hex.tech/docs/trust/ai-data-privacy#bring-your-own-key-byok">Learn more</a> @right

#### 4.4.5 ComputeProfilesModal (NEW)
- Opened by any "Small/Medium/Advanced compute" button or a `#compute-modal` link. It adds `?modal=compute` to the URL. Close via the × button or a click on the backdrop. **No enter/exit animation was found** (`getAnimations()` empty). Body overflow is unchanged.
- Wrapper: `position:fixed; inset:0; z-index:2147483647`. Backdrop `position:absolute; inset:0; background:rgba(0,0,0,.6)`.
- Panel: `position:fixed`, centered (640x611 at [400,144]); `background:#01011B; border:1px solid #3A3138; padding:60px` (40px 30px ≤600); `box-shadow: 0 4px 4px rgba(0,0,0,.25), 0 0 54px #01011B, 0 0 50px #3A3138`.
- Close: `position:absolute` top-right (47x38 at offset ≈11px/11px). Ghost button, 15px × icon `#E3B2B3`, padding 0 15px.
- Body: H2 "Compute profiles" PP Formula 800 40/52 `#FFFFFF` → p 14/21.994 `#F5C0C0` "Medium compute is included on all paid plans. Team and Enterprise can opt in to pay-as-you-go compute for advanced data science use cases. [Learn more](https://learn.hex.tech/docs/explore-data/projects/environment-configuration/environment-views#size)." → table (518 wide, Cinetype 16px/25.136 `#FFFFFF`; th/td `padding:4px 0`; thead `box-shadow:0 1px 0 #3A3138` and `padding-bottom:10px`; columns 130 each; the first column is left aligned and the others right aligned). Rows: Profile | GB | CPU | Price / hr * — Extra small 2 0.25 Free; Small 4 0.5 Free; Medium 8 1 Free; Large 16 2 $0.32; Extra large 32 4 $0.65; 2XL 64 8 $1.29; 4XL 128 16 $2.58; A10G GPU 27 6 $4.06; L4 GPU 27 6 $2.93 → footnote 12px/18 `#F5C0C0` "*Billed per minute of usage. Free trials are limited to Medium compute." Screenshot: `pricing-1440-compute-modal-open.jpg`.

#### 4.4.6 Pricing FAQ (REUSE Faq). Items carry `id`s used as anchors.
1. **How does the free trial work?** (`id=faq-free-trial`) — Anyone can try the Hex Team plan free for 14 days, no payment card required. At the end of your trial you can choose to continue on a paid plan. If you do nothing, you'll be downgraded to the free Community plan and lose access to premium features.
2. **How do I cancel or change my plan?** (`id=faq-cancel-change-plan`) — Professional and Team customers can cancel or change their plan anytime from Settings > Manage Plan. If you cancel, you will still have access to your paid plan until the end of your billing period. If you upgrade or downgrade, the change will apply right away and you’ll be charged or credited for the remainder of your billing cycle.  Enterprise customers can manage renewals and cancellations with their account representative.
3. **How do you handle security and compliance?** (`id=faq-security-compliance`) — We are audited annually for SOC 2 Type II and HIPAA compliance and are dedicated to safeguarding your data. Learn more here. Links: here -> https://trust.hex.tech/
4. **How do credits work?** (`id=faq-credits`) — AI features in Hex consume credits based on the effort required to complete the task. All paid plans include a credit grant, with the option to purchase add-on credits.Professional and Team plans include monthly per-seat credit grants that are assigned to each paid user, refresh monthly and don't roll over. Enterprise plan credit grants are custom as specified on your order form.See our docs article for more info. Links: article -> https://learn.hex.tech/docs/administration/credits
5. **Do you have a discount for students and educators?** (`id=faq-education-discount`) — Yes! Students and educators at universities and bootcamps can access the Hex Professional Plan for free. Contact support@hex.tech for details. Links: support@hex.tech -> mailto:support@hex.tech
6. **Do you have a discount for non-profits?** (`id=faq-nonprofit-discount`) — Yes - we have a discounted program for qualified non-profits - write to support@hex.tech to see if you qualify. Links: support@hex.tech -> mailto:support@hex.tech
Footer line: "Can't find your answer here? [Get in touch](/request-a-demo/)."

#### 4.4.7 PlansMobileView (NEW, ≤800 replaces the summary and the comparison table)
- The two groups stack, Team first ([28,359,334,766] collapsed), then Individual ([28,1221,…]). Each keeps its rail, label and accents. The 1440 comparison table, its H2 and its sticky header are **not rendered** at 390.
- Each plan block (`MobilePlanDetailsWrapper`): `padding:32px 24px 16px`. Blocks inside a group are separated by a `Divider` (1px line plus two 1x16 `#E3B2B3` "T" accents at the edges). Illustration (28px, mb 16) → header (H4 PP Formula 600 **20/26**; description 14/22 with margin 8px 0 32px; price 28px/44 800 + detail; full-width primary md button) mb 32 → **"See all {Plan} features"** toggle (`display:flex; padding:8px`, 14px `#F5C0C0`, 16px chevron `margin-left:6px`).
- Expanded: the toggle gets `background: rgba(245,192,192,.2)` and its label changes to "Hide {Plan} features". The chevron rotates 90° (`matrix(0,1,-1,0,0,0)`). Below it, `InnerMobilePlanDetails` (`padding-top:20px`): "Everything in **Professional**, plus..." (14px white, mb 15), then per section an H4 (PP Formula 600 20/26 white, mb 10) and rows (`display:flex; padding:5px 0`): title cell 137 wide, 14px/18px `#F5C0C0`, followed by a value cell (`padding-left:10px`, white, tick or text). Sections after the first have `margin-top:20px`. It expands **instantly** with no height animation. Screenshot: `pricing-390-full-team-expanded.jpg`.
- FAQ at 390: [28,2052,334,635].

### 4.5 T5: Compare (`/compare/`)
Title "Compare Hex Analytics Tools and BI Platforms | Hex"; meta "See how Hex compares to BI tools and standalone notebooks. Find out why data teams choose Hex for notebooks, self-serve, and AI in one connected system." Doc 1612 at 1440 (2657 at 390).

Sections: Header (REUSE) → **CompareHero** (NEW) [100,0,1240,836] → CustomerBanner default variant, 13 logos in 2 rows, label "TRUSTED BY LEADING DATA TEAMS" (REUSE) [29,836,1382,188] → Footer (REUSE).

#### 4.5.1 CompareHero (NEW)
- Row inner `display:flex; flex-direction:column; align-items:center; padding:80px 40px; max-width:1240px`. `TopInner`: `display:flex; align-items:center; gap:clamp(60px, 3.0469rem + 2.5vw, 80px)` (80 at 1440); `padding-top:150px`; ≤1250 column with `gap:clamp(40px, 1.0938rem + 5vw, 80px)`.
- Text (`max-width:640px; flex column; gap:10px`; p mb 0; ≤1250 max 100%):
  - H1 "Hex compared to traditional analytic tools": PP Formula SemiExtended 700 `clamp(42px, 24px + 4vw, 74px)` lh 1.3 ls -0.025em → **74/96.2** (3 lines, 652x295), dark gradient, left. 42/54.6 at 390.
  - P "Compare Hex and see why leading companies are choosing a new path to answer questions with data and AI.": 24/36 300 `#F5C0C0` (20/30 ≤450).
  - Actions `display:flex; gap:15px; padding-top:20px`: primary lg "Get started for free" → `https://app.hex.tech/signup`; secondary lg "Request a demo" → `/request-a-demo/`.
- "HEX vs." panel (`CompareVs-module__wrapper`, 440x526): `flex:1 1 auto; display:flex; flex-direction:column; align-items:center; gap:24px; padding:32px; border:1px dashed #6A565B; background-image: var(--texture-hatch-img)` (45° 1px hatch every 6px in `#14141C` over the page bg). ≤1250 `width:100%`.
  - Logo row (`gap:10px`): Hex wordmark SVG 52x20 (pink `#E3B2B3`) + "vs." in PP Editorial New 200 italic **31px/20px** `#FFFFFF` (`height:20px; padding-bottom:2px; align-items:flex-end`).
  - Card list (`grid`): flex column `gap:16px; width:100%` (≤1250 row; ≤800 column again). 4 links, each a dark-glass `Card__Wrapper` (§3.1, hover lift) with `padding:30px`, centered, 374x92. Competitor wordmark (inline SVG, 32px tall, `filter:brightness(0) invert(1)`): Looker 120w → `/compare/looker-vs-hex/`, Omni 81w → `/compare/omni-vs-hex/`, Sigma 100w → `/compare/sigma-vs-hex/`, Tableau 157w → `/compare/tableau-vs-hex/`. A 15px ↗ arrow icon `#E3B2B3` sits `position:absolute; top:10px; right:10px`.
- 390: TopInner column [20,40,350,1090]; panel [20,604,350,526] with cards 284 wide, stacked.

### 4.6 T6: Partners (`/partners/`)
Title "Consulting Partners Program | Hex"; meta "Hex's partnership program is designed for consulting firms and data strategy leaders who want to take their analytics game to the next level." Doc 4750 at 1440 (8179 at 390). Every section is `width:92%; margin:0 auto` (1272 at 1440).

Sections: Header → **PartnersHero** [84,200,1272,448] → **PartnersWhy** [84,648,1272,550] → TronDivider (REUSE) [29,1198,1382,61] → **PartnerTiers** [84,1289,1272,1025] → **PartnersGrid** [84,2314,1272,988] → **PartnerRegister** [84,3442,1272,582] → Footer.

- **PartnersHero**: `display:grid; place-items:center; padding:96px 0 64px` (≤600 48px 0). H1 "Become a Partner" PP Formula SemiExtended 700 60/78 `#FFFFFF` (solid), centered (left ≤450; 38/49.4 at 390). P (`max-width:58ch; margin:8px 0 40px`, 20/30 300, centered, left ≤450): "Hex is a complete workspace for data science and analytics, bringing exploration, analysis, and visualization together in one place. By partnering with us, you’ll help transform data workflows and leave outdated tools behind. Join us to redefine analytics!" CTAs (`gap:16px`, centered): primary **md** "Become a partner" → `#become-a-partner` (160x42); secondary md "Register a deal" → Google Form (external).
- **PartnersWhy**: `display:flex; justify-content:center; gap:80px; padding:64px 0 80px` (≤1000 column). Img `pages/solutions/_shared/support-section.svg` (`padding-left:60px; width:max(36%,380px); max-width:440px` → 440x406; ≤1000 `width:min(90%,340px)`, centered, no padding). Copy (`padding-top:24px`): H2 "Why become a partner" PP Formula 800 40/52 (30/39 at 390), mb 20 → p (`max-width:48ch`, 20/30 300, mb 30) "Partnering with Hex means joining a mission to transform how data teams work. Our program offers the tools, support, and collaboration to support customers on their data science and analytics journey." → CTAs gap 16: primary md "Integration partners" → `/product/integrations/`; secondary md "Consulting partners" → `#partners`.
- **PartnerTiers**: H2 "Partner tiers" (centered, `padding-top:32px; margin-bottom:20px`) → p (`max-width:35ch`, 24/36 300, centered, mb 72) "Hex’s program supports partners as they grow, offering tailored benefits at every stage of their journey." → grid `repeat(3,1fr); gap:24px; max-width:1200px; margin:0 auto 120px` (≤1000 1 column, gap 80, mb 80).
  - Tier image panel (384x263): `display:grid; grid-template-columns:1fr 80px 80px 1fr; grid-template-rows:32px min-content 24px; border:1px solid var(--primary); background-color:var(--secondary)`. Gigabyte: primary `rgba(92,177,152,.32)`, secondary `rgba(92,177,152,.056)`; Terabyte: `rgba(95,80,157,.32)` / `.056`; Petabyte: `rgba(205,168,73,.32)` / `.056`. Decorative lines: `.bar-h` (row 2, all columns, `height:75%`, top and bottom borders in `--primary`); `.bar-v-middle` (1px, columns 2–3, centered); `::before`/`::after` 1px verticals at the column-1 end and column-4 start. Flag `<img>` (`pages/solutions/partners/{gigabyte,terabyte,petabyte}-flag.png`) in grid area 2/2 spanning 2 columns, `aspect-ratio:430/550` → 160x205, z 2.
  - Text: H3 PP Formula 800 28/36.4 (`margin:32px 0 16px`) → p 20/30 300 mb 30 → H4 PP Formula 600 20/26 mb 8 → `ul` (`list-style: inside "• "`, 20/30 300 `#F5C0C0`).
  - **Gigabyte** — "For partners who are just getting started working with Hex." — *Why join*: Referral commission · Crossbeam data share · Free Hex account · Access to training resources.
  - **Terabyte** — "For partners who have a track record of deep Hex knowledge and closing Hex business." — *Everything in Gigabyte, plus:* Technical support · Marketing resources · Dedicated Slack channel · Access to Hex Partner Engineer.
  - **Petabyte** — "For partners who have demonstrated exceptional expertise and success in delivering Hex solutions." — *Everything in Terabyte, plus:* Dedicated Partner Manager · Co-branded marketing materials · Spotlight on our website · Dedicated Office Hours.
- **PartnersGrid** (`id="partners"`, `scroll-margin-top:120px`; mb 140, 0 at ≤800): H2 "Partners" (centered, pt 32, mb 20) → p (`max-width:40ch`, 24/36 300, centered, mb 72; mb 48 ≤800) "Our trusted consulting partners guide customers from Hex implementation to the deployment of production data applications." → `ul` `display:flex; flex-wrap:wrap; justify-content:center; gap:32px` (≤800 column, gap 16).
  - Card `li` (390x152, `aspect-ratio:390/152`; 100% wide ≤800 → 344x134): `display:grid; place-items:center; position:relative; border:1px solid #4C3E44`. Corner tick `::after`: 35x35 with `border-top` + `border-right` 1px `#99797D` at the top-right (`inset:-1px -1px auto auto`). Logo `<img>` at natural rendered size (table below). Badge: `position:absolute; right:0; bottom:0; padding:12px`, Cinetype Mono 14px uppercase. Tier colors: gigabyte `#5CB198` on `rgba(92,177,152,.16)`, terabyte `#998EC5` on `rgba(95,80,157,.16)`, petabyte `#CDA849` on `rgba(205,168,73,.16)` (badge ≈96x46).
  - Cards in order (logo, rendered size, tier): phData 140x56 PETABYTE · Brooklyn Data 153x32 TERABYTE · In516ht 114x32 GIGABYTE · Eon Collective 202x32 · Impactful Insights 128x128 · CVector 136x40 · Snowpack Data 183x40 · Clarity 100x104 · Analytics8 93x80 · Exvolve 188x40 · DAS42 158x32 · Datum Labs 99x32 (all GIGABYTE after the first three). Files: `pages/solutions/partners/*`.
- **PartnerRegister** (`id="become-a-partner"`, `scroll-margin-top:120px`): H2 "Become a partner" (centered, pt 32, mb 48) → form box `max-width:643px; margin:0 auto` using **HubSpotFormShell** (§4.7.2) in dark tokens. Fields in 3 rows of 2: First Name*, Last Name*, Work Email*, Company Name*, Job Title*, Country/Region* (placeholder "North America, LATAM, EMEA, or APAC"). Submit button, then the disclaimer. HubSpot portal 243040889, form `263542c6-65bb-4033-885b-e70f5d6a436b`.
- 390: hero [23,144,344,525]; why column (img 310x331); tiers 1 column (panels 344x263, 80 gap); cards 344x134 stacked with 16 gap; form box [23,6154,344,739], fields one per row.

### 4.7 T7: HubSpot form page (`/request-a-demo/` LIGHT, `/contact-us/` DARK)
Both pages share one layout. Only the theme, the copy and the HubSpot form id differ. Doc 1757 at 1440 (2690 at 390).

Sections: Header (REUSE; light on request-a-demo, dark on contact-us) → **HubSpotFormShell** page block [29,200,1382,970] → minimal CustomerBanner "Trusted by leading data teams" with story popovers (REUSE, inside the same block, below the form) → Footer.

#### 4.7.1 Copy
- **/request-a-demo/**: title "Get a demo | Hex". H1 **"Get a demo"**. P "We'll chat about how Hex fits into your stack and delivers trusted answers, grounded in your company's context." Form id `0-1` fields as below; HubSpot form id from the embed script (portal **243040889**).
- **/contact-us/**: title "Get in touch | Hex". H1 **"Get in touch"**. P "Thanks for your interest in Hex. Fill out this form and our team will reach out to you as soon as we can." HubSpot portal 243040889, form **15ebbca7-62a3-43c0-8e7a-3ff0c6154af6**.
- Fields (identical on both): row 1 **First Name\*** (`0-1/firstname`, text) | **Last Name\*** (`0-1/lastname`); row 2 **Work Email\*** (`0-1/email`, type email) | **Company Name\*** (`0-1/form_fill_company__c`); row 3 **What do you want to talk about?** (`0-1/person_notes__c`, textarea, optional, placeholder "Business Intelligence, Conversational Analytics, Context for Agents, etc."). There are also 9 hidden UTM/routing inputs; skip them in the clone. Then the **Submit** button and the disclaimer "By submitting this form you agree to the processing of your personal data as described in our [Terms](https://learn.hex.tech/docs/legal/terms-and-conditions) and our [Privacy policy](https://learn.hex.tech/docs/trust/privacy-policy)."

#### 4.7.2 HubSpotFormShell + FormFields (NEW; visual only, no submission)
**Provider:** HubSpot Forms, "developer embed" (`https://js-na2.hsforms.net/forms/embed/developer/243040889.js`). It renders `form.hsfc-Form` with `action="https://forms-na2.hsforms.com/submissions/v3/public/submit/formsnext/multipart/243040889/<formId>"`, `novalidate`. Hex hides HubSpot's navigation row (`.hubspot-form-own-submit .hsfc-NavigationRow { display:none }`) and renders its **own** Submit button below the form. **Do not wire this up.** Render plain React inputs with `onSubmit` preventDefault plus local validation.
- Page block: `display:flex; flex-direction:column; align-items:center; padding:0 40px 100px` → Inner `max-width:680px`.
- Top: `display:flex; flex-direction:column; align-items:center; gap:5px; max-width:580px; margin:0 auto 40px; padding:0 20px; text-align:center`. H1 PP Formula SemiExtended 700 60/78 -1.848px (solid: `#14141C` light, `#FFFFFF` dark; 38/49.4 at 390). P 20/30 300 (text color).
- Form box (`styles__Wrapper`, 680x517): `display:flex; flex-direction:column; gap:20px; padding:40px; border:1px solid var(--grid500)` (`#DBD7DA` light / `#3A3138` dark); `background: color-mix(in srgb, var(--highlightColor) 5%, transparent)` → light `rgba(49,38,59,.05)`, dark `rgba(245,192,192,.05)`.
- Step content: `display:flex; flex-direction:column; gap:20px`. Row: `display:grid; gap:30px`, 2 columns (284/284 at 1440). ≤ the HubSpot breakpoint (390: 212-wide inner) every field sits on its own line and each row is 161 tall.
- Label: IBM Plex Mono **700 12px/22px** uppercase, `text-align:justify`, color `var(--fontColorDEFAULT)` (`#31263B` light / `#F5C0C0` dark), `margin-bottom:10px`. Required asterisk `*` `#FF5C5C`, `padding-left:5px`.
- Input: `width:100%; height:38.5px; padding:10px 15px; font:400 14px Cinetype; line-height:normal; border:1px solid var(--grid500); border-radius:3px; background:var(--fg100)` (`#FFFCFC` light / `#14141C` dark); color = text color; `transition: box-shadow .2s`. Placeholder color `var(--fontColorMUTED)` (`#89828D` light / `#99797D` dark).
- Textarea: same, `height:100px; min-height:100px; resize:vertical; overflow:auto`.
- **Focus**: `outline:1px solid var(--grid700)` (`#AFA9B1` light / `#6A565B` dark), plus HubSpot's own `box-shadow: 0 0 3px rgb(3,93,106)` (teal glow, 0.2s). The border color is unchanged.
- **Error** (submit with empty required fields): HubSpot validates and focuses the **first** invalid field only (`aria-invalid=true`). It inserts below that input, after `margin-bottom:10px`, a `.hsfc-ErrorAlert` "Please complete this required field." in Cinetype 14px/21.994 **`#FF5C5C`**, with a visually hidden "Error: " prefix. The input border stays the same. Clone: show the same message under each invalid required field (or the first only, to match exactly). Use `#FF5C5C`. Do not rely on the native browser bubble that appears in the reference screenshot.
- Submit (Hex button, `styles__AutofillSubmitWrap`: flex column, `align-items:flex-start; gap:10px; margin-top:20px`): `height:40px; padding:0 20px; max-width:100px` (89x40); Cinetype 14px; `border:1px solid transparent`; **gradient border** `linear-gradient(to right, var(--fg100), var(--fg100)) padding-box, linear-gradient(45deg, var(--highlightColor), #AD8EB6) border-box` (light: `#31263B → #AD8EB6`; dark: `#F5C0C0 → #AD8EB6`). Color `var(--highlightColor)`. Focus-visible `outline:1px solid var(--grid700)`. Submitting state (`.submitted`): `opacity:.5; pointer-events:none` plus a 30px spinning ring `::after` (`border:3px solid #ccc; border-top-color:#333; animation: spin 1s linear infinite`).
- Disclaimer `<p>`: 12px/18px text color; links `var(--fg1200)` with a bottom border (light `#43394C`, dark `#E3B2B3`).
- Below the form box: the minimal CustomerBanner (§3.2), 680 wide here.
- Full CSS: `dom/form-hubspot.css`. Markup: `dom/request-a-demo-form.html`.

---

## 5. Motion summary for these pages (everything not covered by CLONE_SPEC §6)
| What | Trigger | Spec |
|---|---|---|
| Section reveals | in view, once | SimpleFadeIn (`Reveal`), same as the homepage, on every sharedStyles wrapper, Cards, Heading, Outro, FAQ, footer |
| Hub glass panel entrance | load | `glass-enter` 673.93ms spring `linear()`, `both`; from `opacity:.4; translateZ(-120px) translateY(60px) rotateX(-3deg)`; perspective 1000px on the parent; transform-origin 50% 300% |
| Hub rotating word | timer | 2.4s cycle; 0.8s `translateY(-121px)` `cubic-bezier(.25,.1,.25,1)`; opacity out .3636s, in 1.76s; first item moved to the end and transform reset (EmojiRotator logic) |
| Dark glass card hover (hub cards, compare cards) | hover | `translateY(-4px)` + lighter inset shadow; 529.33ms spring `linear()` on border/transform/box-shadow |
| Filter chips | hover/press | bg/border .25s `cubic-bezier(.25,.1,.25,1)`; filtering itself is instant |
| Outro / CTA card | hover | border 15%→30% `#F5C0C0` + 10% tint bg, .25s |
| Live demo tabs | click | color/border 120ms; slot swap via `visibility` (instant) |
| Pricing row highlight | hover | `::after` opacity 0→.1, .25s |
| Pricing sticky header | scroll | position:fixed under the nav; Spacer label opacity 0→1 .25s |
| Tooltip | hover | opacity .15s ease-out (react-tooltip) |
| Pricing Team-card noise | continuous | `noise` keyframes, 16s linear infinite, rose 512px |
| Compute modal, FAQ, mobile plan expander | click | instant (no transition measured) |
| Buttons | hover | as CLONE_SPEC §3.1, dark tokens |
No scroll-linked animations, IntersectionObserver class toggles, video, Lottie or canvas were found on any page in this group (the canvas in the nav "AI & agents" callout is the same one already covered in CLONE_SPEC §7).

---

## 6. Links (internal paths vs external domains)
External links stay as plain `href`s. Internal paths are hex.tech routes; most are not part of this clone group. Hrefs on the solution pages are absolute (`https://hex.tech/...`) on the live site; they are normalized to paths below.

Global chrome (header/mega-menus/footer, identical on every page; already built in Header/Footer):

- Internal: `/`, `/about/`, `/blog/`, `/blog/introducing-generative-data-apps/`, `/capability/ai/`, `/capability/exploratory-analysis/`, `/careers/`, `/compare/`, `/contact-us/`, `/customers/`, `/customers/langchain/`, `/enterprise/`, `/files/Hex_UK_Modern_Slavery_Act_Statement.pdf`, `/newsroom/`, `/pricing/`, `/product/bi/`, `/product/cli/`, `/product/context-studio/`, `/product/data-apps/`, `/product/embedded-analytics/`, `/product/integrations/`, `/product/notebooks/`, `/product/switching-to-hex/`, `/product/threads/`, `/request-a-demo/`, `/resources/events/`, `/solutions/`, `/state-of-data-teams/`, `/templates/`
- External: `https://hexhq.notion.site/a091e1bb7bb34019bc4ccf2e3da8645f`, `https://learn.hex.tech`, `https://learn.hex.tech/changelog`, `https://learn.hex.tech/docs/legal/terms-and-conditions`, `https://learn.hex.tech/docs/trust/privacy-policy`, `https://status.hex.tech`, `https://trust.hex.tech`, `https://www.linkedin.com/company/hex-technologies`, `https://www.youtube.com/@_hex_tech`, `https://x.com/hexanalytics`
- Other: `#main`, `mailto:support@hex.tech`

**/solutions/** (page body)
- Internal: `/blog/accuracy-agency-matrix/`, `/blog/ai-for-data-teams-boosting-speed-and-impact/`, `/blog/boost-collaboration-between-product-and-data/`, `/blog/building-actionable-metrics-framework/`, `/blog/customer-health-data-app-account-360/`, `/blog/customer-retention-analytics/`, `/blog/dashboards-were-never-the-destination/`, `/blog/data-app-for-customer-success-analytics/`, `/blog/data-driven-decisions-with-kpi-dashboards/`, `/blog/difference-between-apps-and-dashboards/`, `/blog/dont-migrate-300-dashboards/`, `/blog/evaluating-ai-wrong/`, `/blog/friends-of-data-daniel-sternberg/`, `/blog/friends-of-data-ian-macomber-ramp/`, `/blog/friends-of-data-pedram-navid-dagster/`, `/blog/friends-of-data-tony-avino-hubspot/`, `/blog/hex-in-the-wild-oct-2025-highlights/`, `/blog/how-ai-analytics-helps-with-support-decisions/`, `/blog/how-candidly-uses-hex-embedded-analytics/`, `/blog/how-data-teams-are-using-ai-ramp/`, `/blog/how-gamechanger-determined-lifetime-value/`, `/blog/how-huckberry-forecasts-demand/`, `/blog/how-kong-is-scaling-analytics-with-hex/`, `/blog/how-we-solved-the-pipeline-crisis/`, `/blog/lead-conversion-in-hex/`, `/blog/lessons-running-a-data-team-with-ai/`, `/blog/marketing-attribution-data-app-revenue-tracking/`, `/blog/next-bi-tool/`, `/blog/nick-hardy-ro/`, `/blog/notebook-agent-prompting-guide-agentic-analytics/`, `/blog/notion-hubspot-ramp-data-team-roi/`, `/blog/pipeline-forecast-data-app/`, `/blog/pipeline-questions-answered-in-minutes/`, `/blog/product-metrics-that-drive-growth/`, `/blog/self-serve-is-finally-real/`, `/blog/sentiment-analysis/`, `/blog/state-of-data-teams-2025/`, `/blog/stubhub-building-a-big-picture-data-team/`, `/blog/unspoken-rules-of-data-leadership/`, `/blog/using-threads-to-get-sales-team-data/`, `/blog/your-data-team-is-too-slow/`, `/customers/algolia/`, `/customers/calendly/`, `/customers/figma/`, `/customers/mercor/`, `/customers/notion/`, `/customers/om1/`, `/customers/ramp/`, `/customers/stubhub/`, `/customers/valon/`, `/request-a-demo/`, `/resources/bi-buying-guide/`, `/resources/calendly-hex-one-pager/`, `/resources/data-app-om1/`, `/resources/data-team-governance-template/`, `/resources/llms-snowflake-cortex/`, `/resources/video/building-proactive-product-kpi-updates/`, `/resources/video/how-to-measure-pipeline-quality-from-demo-requests-with-ai-or-hex/`, `/resources/video/measuring-hexs-performance-in-hex/`, `/resources/video/three-powerful-workflows-in-one-platform/`, `/resources/video/using-ai-to-choose-billboard-locations/`, `/templates/data-visualization/python-visualization/`
- External: `https://app.hex.tech/signup`, `https://www.linkedin.com/posts/cpschaefer_marketinganalytics-ai-analytics-activity-7348743298733228032-vQoR/`, `https://www.youtube.com/shorts/FrMgS7i3lZ4`, `https://www.youtube.com/shorts/R52NB-F9B5c`

**/solutions/customer-success/** (page body)
- Internal: `/blog/customer-health-data-app-account-360/`, `/blog/data-app-for-customer-success-analytics/`, `/request-a-demo/`, `/resources/data-app-click-up/`
- External: `https://app.hex.tech/hex-public/app/Account-360-Demo-030VDDvd5yRsH5VRNTl8dm/latest`, `https://app.hex.tech/signup`

**/solutions/data-leaders/** (page body)
- Internal: `/blog/lessons-running-a-data-team-with-ai/`, `/blog/myth-of-data-team-roi/`, `/customers/clickup/`, `/product/hex-for-teams/`, `/request-a-demo/`, `/resources/llms-snowflake-cortext/`, `/resources/scaling-data-at-hubspot/`, `/use-case/data-science/`
- External: `https://app.hex.tech/signup`

**/solutions/marketing/** (page body)
- Internal: `/blog/building-a-first-touch-attribution-model/`, `/blog/lead-conversion-in-hex/`, `/blog/pipeline-forecast-data-app/`, `/request-a-demo/`, `/resources/data-app-click-up/`
- External: `https://app.hex.tech/hex-public/app/034bMZkDGfvJGfA70QkjMY/latest`, `https://app.hex.tech/signup`

**/solutions/product-analytics/** (page body)
- Internal: `/blog/exploratory-product-analysis-for-product-and-engineering-teams/`, `/blog/how-kong-is-scaling-analytics-with-hex/`, `/blog/measuring-feature-success/`, `/blog/product-metrics-that-drive-growth/`, `/customers/kong/`, `/request-a-demo/`
- External: `https://app.hex.tech/hex-public/app/Product-KPIs-0311bZZ7yTSTefhjCF3cEV/latest`, `https://app.hex.tech/signup`

**/solutions/sales-analytics/** (page body)
- Internal: `/blog/funnel-analysis/`, `/blog/predictive-lead-scoring-python/`, `/request-a-demo/`, `/resources/data-app-stubhub/`
- External: `https://app.hex.tech/hex-public/app/Sales-Stage-Conversion-0313skUABWhY9e3i1fmFsZ/latest`, `https://app.hex.tech/signup`

**/enterprise/** (page body)
- Internal: `/blog/soc-2-type-II-for-you/`, `/product/integrations/airflow/`, `/product/integrations/athena/`, `/product/integrations/bigquery/`, `/product/integrations/clickhouse/`, `/product/integrations/dagster/`, `/product/integrations/databricks/`, `/product/integrations/dbt/`, `/product/integrations/dremio/`, `/product/integrations/github/`, `/product/integrations/mariadb/`, `/product/integrations/ms-sql-server/`, `/product/integrations/mysql/`, `/product/integrations/postgres/`, `/product/integrations/prefect/`, `/product/integrations/redshift/`, `/product/integrations/snowflake/`, `/product/integrations/trino/`, `/request-a-demo/`, `/security/`
- External: —

**/pricing/** (page body)
- Internal: `/customers/alltrails/`, `/customers/clickup/`, `/customers/notion/`, `/request-a-demo/`
- External: `https://app.hex.tech/signup`, `https://learn.hex.tech/docs/administration/credits`, `https://learn.hex.tech/docs/explore-data/projects/environment-configuration/environment-views`, `https://trust.hex.tech/`
- In-page / mailto: `mailto:support@hex.tech`

**/compare/** (page body)
- Internal: `/compare/looker-vs-hex/`, `/compare/omni-vs-hex/`, `/compare/sigma-vs-hex/`, `/compare/tableau-vs-hex/`, `/customers/alltrails/`, `/customers/calendly/`, `/customers/clickup/`, `/customers/modern-treasury/`, `/customers/notion/`, `/customers/ramp/`, `/customers/stubhub/`, `/request-a-demo/`
- External: `https://app.hex.tech/signup`

**/partners/** (page body)
- Internal: `/product/integrations/`
- External: `https://docs.google.com/forms/d/e/1FAIpQLSegPXa-9eP3rgCIg34v7wSWcyMq778LJnvMSASwCQ4Q3aEMbg/viewform`
- In-page / mailto: `#become-a-partner`, `#partners`

**/request-a-demo/** (page body)
- Internal: `/customers/alltrails/`, `/customers/clickup/`, `/customers/notion/`
- External: —

**/contact-us/** (page body)
- Internal: `/customers/alltrails/`, `/customers/clickup/`, `/customers/notion/`
- External: —


Additional links seen only in client-rendered parts (tooltips, modal, form), not in SSR `<main>`: `#compute-modal`, `#faq-credits`, `https://learn.hex.tech/docs/explore-data/projects/environment-configuration/environment-views#size`, the learn.hex.tech docs URLs listed in §4.4.4, `https://learn.hex.tech/docs/legal/terms-and-conditions`, `https://learn.hex.tech/docs/trust/privacy-policy`, the live-app iframes `https://app.hex.tech/hex-public/...` (external), and the HubSpot submission endpoint (external, do not use).

---

## 7. Gaps and caveats
1. **Live-app iframes** (`app.hex.tech/hex-public/...`, 4 pages) are external and authenticated or embedded. They render blank white in Playwright, and the reference screenshots show an empty white 16:9 box. Content inside them could not be measured.
2. **HubSpot form behavior** beyond what is listed above (server-side validation, email-domain checks, success message, redirect) was not exercised because nothing was submitted, by design. Only the empty-submit client validation was triggered. The success state is unknown.
3. **No billing toggle on /pricing/**: the brief mentions "plan toggles", but the live page has no monthly/annual switch. The only toggle-like controls are the mobile "See all X features" expanders and the live-demo app/logic tabs on T2.
4. **Hub filter counts** do not always equal the cards shown (live data quirk, e.g. Sales 9 vs 10 shown). Replicate the labels as-is.
5. **Hub thumbnails** were downloaded at original resolution (up to 3446x2352, 61 MB total for the group). Consider resizing to 800w for the clone; the live site serves `?w=800`.
6. **Customer-story logo popovers** on minimal banners (T4/T7) reuse the default-variant popover. Its exact position on the minimal variant was not separately measured; assume the same offsets as the homepage (`bottom:56px`, 300 wide).
7. **Enterprise hero illustration at 390**: the hero `<img>` box was not returned at 390 (CSS sets `position:relative; width:180%`, margin-top 40). Verify visually.
8. **First-visit client redirect** of `/solutions/` to `/product/bi/` happened once in the browser and did not reproduce. Ignore it.
9. **Fonts**: no new font files. These pages use the same Cinetype, PP Formula, PP Editorial New and IBM Plex Mono faces already in `public/assets/fonts`.
10. The decorative SVGs (hub card illustrations, filter icons, plan icons, competitor wordmarks, enterprise ticks) are inline on the live site. They are saved as markup under `reference/pages/solutions/dom/`, not as asset files.
