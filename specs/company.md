Source: https://hex.tech/

# Hex company / resources page group — clone spec (measured 2026-10-23)

Pages: `/about/`, `/careers/`, `/newsroom/`, `/blog/`, `/blog/introducing-generative-data-apps/`, `/customers/`, `/customers/{chime,figma,langchain,mercor,neo-financial,notion,ramp,stubhub}/`, `/resources/events/`, `/resources/guides/`, `/resources/guides/ai-analytics/`, `/state-of-data-teams/`, `/templates/`.

Method: isolated headless Chromium (Playwright 1.63, desktop Chrome UA) at 1440x900 and 390x844. Every page was scrolled top to bottom with instant scrolling so all `whileInView` reveals fired, then measured with `getComputedStyle` / `getBoundingClientRect`, `document.getAnimations()`, `document.styleSheets`, plus per-frame sampling of the Framer-driven animations. Coordinates are `[x, y, w, h]` in CSS px, page-absolute at 1440 unless stated. Everything not restated here is identical to the homepage spec (`CLONE_SPEC.md`). Read that first: tokens, fonts, buttons, header, footer, reveal presets.

## 0. Reference material (read these, don't re-derive)

| Path | What |
|---|---|
| `reference/pages/company/<slug>-1440-full.png` / `-390-full.png` | Full-page screenshots of every page in the group (19 at 1440; 1440+390 for one page per template). Slugs: `about`, `careers`, `newsroom`, `blog`, `blog_introducing-generative-data-apps`, `customers`, `customers_<story>`, `resources_events`, `resources_guides`, `resources_guides_ai-analytics`, `state-of-data-teams`, `templates`. |
| `reference/pages/company/careers-hero-viewport-1440.png`, `blog-masthead-1440.png` | Viewport / element captures. |
| `reference/pages/company/dom/<slug>--<Component>.html` + `.css` | **Rendered outerHTML of every NEW section**, plus **every CSS rule that matches a class inside it** (including `@media`, `:hover`, `[data-active]`, `::before/::after` and the `@keyframes` they use). The `.css` files are the source of truth for hover/responsive rules; the tables below summarize them. Also includes the dark-theme `Header__TickerWrapper`, `Nav__NavWrapper` and `Footer__Wrapper` from `/blog/`. |
| `reference/pages/company/measurements/<slug>@<width>.tree.txt` | Full computed-style tree per page and width. Format: `<TAG Component__Part> [x,y,w,h] «text» {non-default computed props}`. Grep a component name to get any value not listed here. |
| `reference/pages/company/measurements/summary-390.txt` | 390 px layout digest (section boxes, flex direction, grid columns, heading sizes). |
| `specs/company-assets.md` | Asset manifest (339 new files under `public/assets/pages/company/`). |

---

## 1. Templates

| # | Template | Pages | Theme | Page frame |
|---|---|---|---|---|
| T1 | **About** (marketing one-off) | `/about/` | light | BasicPageRow + checkered margins (ContentSection) |
| T2 | **Careers** | `/careers/` | light | BasicPageRow |
| T3 | **Newsroom index** | `/newsroom/` | light | single BasicPageRow (padding 80px 40px, max 1240) |
| T4 | **Blog index** | `/blog/` | **dark** | Blog-specific full-bleed subgrids |
| T5 | **Article (blog post)** | `/blog/introducing-generative-data-apps/` | **dark** header area + light content slab | BasicPageRow |
| T6 | **Customers index** | `/customers/` | light | BasicPageRow ×4 |
| T7 | **Customer story** (one template, 8 pages) | `/customers/{chime,figma,langchain,mercor,neo-financial,notion,ramp,stubhub}/` | light | BasicPageRow ×4 |
| T8 | **V1 resource index** (Events + Guides share it) | `/resources/events/`, `/resources/guides/` | **dark** | `V1PageWrapper__V1Subgrid` (padding-top 200) |
| T9 | **Templates index** (V1 family, sidebar variant) | `/templates/` | **dark** | `V1PageWrapper__V1Subgrid` |
| T10 | **Guide landing** (solutions-style landing) | `/resources/guides/ai-analytics/` | light | BasicPageRow |
| T11 | **Report microsite** | `/state-of-data-teams/` | light + pink gradient, **no global header/footer** | `PageShell` (own shell) |

Global chrome per page: Header + Footer = **REUSE** on T1–T10 (light on T1, T2, T3, T6, T7, T10; dark on T4, T5, T8, T9). T11 has neither header, ticker nor footer (only a Hex wordmark at top-left).

## 2. Reuse vs NEW summary

**Existing components reused** (13): `Header` (+Ticker/MegaMenu/MobileNav), `Footer`, `CustomerBanner`, `Button`, `Reveal`, `InfoText`, `PerlinNoise`, `Faq` (FaqItem), `TronDivider` (currently private inside `Faq.jsx`, export it), cartesian-grid CSS (`.cartesian-grid` from `Hero.jsx`/`index.css`, extract to a `CartesianGrid` component), `GrayscaleLogo`, `LayoutGrid`/`ContentSection`, `MaskIcon`.

Required non-breaking changes to reused components (props only, no rebuild):
- `Header`, `Footer`, `Button`: add `theme="dark"`, implemented as the CSS-variable swap in §3.1. The live site does nothing else: identical markup, only variables differ.
- `Button`: add an `icon` prop (15px leading icon, `Button__Icon`, gap 10px; or a 28px icon for filter chips), a `selected` state (customers filter), and allow `size="md"` with corner lines (secondary md buttons on About/Careers/Story render CornerLines; the homepage md variant didn't).
- `Faq`: accept `items`, `title` (string or node) and `borderColor` props (SOTD uses `rgba(0,0,0,.08)` dividers and an Editorial-italic "FAQs" title).
- `InfoText`: accept a `description` node and no CTA (ai-analytics podcasts).
- `CustomerBanner`: no change (About uses the identical banner and data).

**NEW shared primitives** (12, build once in `src/components/shared/`):

| # | Component | Used by | One line |
|---|---|---|---|
| P1 | `GlassCard` (`Card__Wrapper`) | almost every page | Radius 12 glass card with inset+drop shadow stack, blur 7.5, optional hover lift (-4px, 529ms spring). |
| P2 | `Callout` | careers (scam), newsroom (media kit), blog post body | Left-ruled tinted note with a 35px round icon badge straddling the rule. |
| P3 | `AnimatedCta` (`Cta__PrimaryCta` + `Accents`) | about hero, careers hero | 66px tall large CTA with a 36px icon circle; 4 corner circles scale out and corner lines sweep in on hover. |
| P4 | `NewsroomPostCard` | about, newsroom | Glass card: 350/180 thumbnail (radius 10), H4 20/26, outlet (strong) + date. |
| P5 | `CustomerStoryCard` | customers index, story "Related stories" | Glass card with a logo plate (150 tall, #FFFCFC, 1px border, radius 6), H4 title, mono metadata rows. |
| P6 | `RichText` (`RunningText__Wrapper`) | blog post, customer story body | IBM Plex Sans article typography (p 18/32, h2 28, h3 20, lists, blockquote, pre/code, figures, links). |
| P7 | `MetaRows` | story header, story cards | `Label /` + value rows in Cinetype Mono (10 or 12px), label `rgba(20,20,28,.447)`, value `#14141C`. |
| P8 | `DarkResourceCard` (`EventAndGuideCard` / `TemplatesCard`) | events, guides, templates | 1px rose-15% bordered dark card with image figure + copy; hover border/bg tint. |
| P9 | `DarkSectionHeader` (`SectionHeader`) | events, templates | Icon row (15–22px icon in 15px side margins) + H2 heading-2 (white) + optional 20/30 description. |
| P10 | `SidebarFilter` (`GridFilter` / `TemplatesNavigation`) | events, templates | Sticky left list, 30px rows, 1px rose-35% left rule "progress bar", active row opacity 1, others .6. |
| P11 | `V1Intro` (`EventsAndGuidesIntro`) | events, guides | H1 74/96.2 + 20/30 copy on the left, `events-and-guides-hero.svg` 663×402 on the right. |
| P12 | `SocialShare` | blog post (header + footer of body) | "SHARE:" label + X and LinkedIn 15px icon links (opacity hover .25s). |

**NEW page sections** (39): listed per page in §4, each marked NEW: About 4, Careers 3, Newsroom 3, Blog 4, Article 2, Customers 6, Story 4, Events 1, Guides 1, Templates 1, Guide landing 5, SOTD 5.

| Count | |
|---|---|
| Existing components reused | **13** (Header and Footer on 18 of 19 pages; CustomerBanner, Faq, TronDivider, InfoText, PerlinNoise, CartesianGrid, Button, Reveal, GrayscaleLogo, LayoutGrid/ContentSection, MaskIcon inside sections) |
| Section slots across the 12 templates (excl. header/footer) | **42** = 39 NEW + 3 REUSE (CustomerBanner on About, TronDivider on guide landing, Faq on SOTD) |
| NEW components to build | **51** = 39 sections + 12 shared primitives (plus 2 SOTD sub-components inside `SotdSection`) |

---

## 3. Global system additions

### 3.1 Dark theme (blog, blog post, events, guides, templates)
The page wrapper swaps CSS custom properties; component CSS is unchanged (`var(--fg1200)` etc.). Values resolved on `PageWrapper__PageLayoutGrid` (light → dark):

| Var | Light | Dark |
|---|---|---|
| page bg (`--fg100`) | `#FFFCFC` | `#14141C` |
| `--fontColorDEFAULT` / `--highlightColor` | `#31263B` | `#F5C0C0` |
| `--fontColorLOUD` / `--fgLoud` | `#14141C` | `#FFFFFF` |
| `--fontColorMUTED` / `--fg1100` | `#89828D` | `#99797D` |
| `--fg1200` (links, logo, nav "Log In", footer links) | `#43394C` | `#E3B2B3` |
| `--fg200` / `--fg300` / `--fg400` (ticker) | `#F8F5F6` / `#F4F1F2` / `#F0EDEE` | `#191820` / `#201D25` / `#252128` |
| `--fg500` / `--fg600` / `--fg700` / `--fg800` / `--fg900` / `--fg1000` | `#ECE8EA` / `#E8E4E6` / `#E2DEE0` / `#D1CCD1` / `#A49DA7` / `#9C959F` | `#2B252C` / `#312A31` / `#3A3138` / `#4C3E44` / `#6A565B` / `#786065` |
| `--grid200`..`--grid700` | `#EFEBED` `#E9E5E8` `#E4E0E3` `#DBD7DA` `#CBC6CB` `#AFA9B1` | `#252128` `#2B252C` `#312A31` `#3A3138` `#4C3E44` `#6A565B` |
| `--grid1200` (nav accent bars) | `#403649` | `#E3B2B3` |
| `--borderColorDEFAULT` / `MUTED` / `STRONG` | `#DBD7DA` / `#E9E5E8` / `#AFA9B1` | `#3A3138` / `#2B252C` / `#6A565B` |
| `--bg300` / `--bg400` / `--bg500` | `#FCF8F8` / `#F9F1F1` / `#EBCCCC` | `#0F0F15` / `#111118` / `#14141C` |
| `--fgA100..A1200` | `rgba(49,38,59,a)` | `rgba(245,192,192,a')` with a' = 0, .026, .056, .077, .103, .129, .172, .249, .386, .446, .592, .923 |
| `--texture-paper-img` / size / opacity | `light-bkg-noise.webp` / 256px / .06 | `bkg-noise.webp` / **200px** / **.0625** |
| `--texture-hatch-img` | 45deg 6px hatch `#EBCCCC` | same with `#14141C` |
| `--appUI-*` (product UI) | `#fff` bg, `#dadde6` border, `#01011b` text, primary `#254685` | `#1f1f29` bg, `#3f4257`, `#e4e6ec`, primary `#f5c0c0` (+ intent danger `#e54d62`, success `#2ba88a`, warning `#d4a032`) |

Dark chrome specifics (measured on /blog/): ticker strip `linear-gradient(to left, #252128, #201D25, #252128)` on `#252128`, inset shadow `0 1px 1px rgba(245,192,192,.173)`; ticker text `#F5C0C0`; nav background layer `#14141C`; nav items / Log In / Hex logo `#E3B2B3`; header margin rules `#2B252C`; **no checkered side margins** on dark pages (margin cells are plain with `1px solid #2B252C` rules). Footer: divider `#3A3138`, column titles `#FFFFFF`, links `#E3B2B3`, "Made with" `#99797D`, hit-counter digits lit `#F5C0C0`. **Primary button in dark**: border gradient `linear-gradient(to right,#14141C,#14141C), linear-gradient(45deg,#F5C0C0,#AD8EB6)`, label `#F5C0C0`, `::after` fill `linear-gradient(45deg, rgba(245,192,192,.85), rgba(71,57,130,.5))` (no inset shadow), hover bg `#2B252C` border `#6A565B`. Secondary dark: border `#3A3138`, label `#F5C0C0`. The DOM exports `dom/blog--Nav__NavWrapper.*`, `blog--Header__TickerWrapper.*`, `blog--Footer__Wrapper.*` contain the dark rules.

### 3.2 Page frames
- **BasicPageRow** (light pages): each section row is a full-width subgrid with checkered margins (= existing `ContentSection`); rows after the first have `border-top: 1px solid #DBD7DA`. Inner `LayoutGridCondensed` (12px gutters + 12 × 113.19px @1440). Content wrapper `BasicPageRow` = `display:flex; flex-direction:column; align-items:center; justify-content:center` and is a **SimpleFadeIn** reveal (`opacity 0, y 5` → visible; identical to homepage §6.2). First-row variants use `BasicPageRow__InnerStatic` (no reveal).
- **V1PageWrapper** (events, guides, templates): content column `grid-column: 2/-2; padding-top: 200px`; landing wrapper `max-width:1240px; padding:0 40px; margin-bottom:200px; flex column; gap:80px`. Dark theme.
- **PageShell** (SOTD): see §4.11.
- Footer row and the 32px grid-rule row below it: identical to homepage.

### 3.3 Shared primitives (NEW) — measured specs

**P1 GlassCard** (`Card__Wrapper`): `display:flex; flex-direction:column; align-items:flex-start; position:relative; text-align:left; border-radius:12px; background: linear-gradient(105deg, rgba(245,192,192,0) 10.56%, rgba(245,192,192,.02) 108.41%), rgba(253,253,253,.4); backdrop-filter: blur(7.5px); box-shadow: inset 0 0 11px 0 rgba(0,0,0,.05), 0 0 0 1px rgba(0,0,0,.06), 0 16px 24px -8px rgba(0,0,0,.05), 0 8px 12px -4px rgba(0,0,0,.05), 0 4px 6px -2px rgba(0,0,0,.05)`. Padding per use (10, 20, 40px). Interactive variant (cards that are links): `perspective:800px; transform:translateY(0); transition-property: border, transform, box-shadow; transition-duration: 529.33ms; transition-timing-function: <100-point spring linear()>` (copy verbatim from `dom/customers--CustomersIndexContent__List.css`, it overshoots to 1.0203 at 45%). Hover (`@media (hover:hover)`): `transform: translateY(-4px); box-shadow: inset 0 0 16px 0 rgba(0,0,0,.08), 0 0 0 1px rgba(0,0,0,.1), 0 20px 32px -8px rgba(0,0,0,.08), 0 12px 16px -4px rgba(0,0,0,.06), 0 6px 8px -2px rgba(0,0,0,.06), 0 2px 4px 0 rgba(0,0,0,.04), 0 1px 2px 0 rgba(0,0,0,.04)`. Static cards (About hero photo, data-nerd photos, story detail cards) have no hover.

**P2 Callout**: wrapper `display:flex; position:relative`; box `padding:25px 35px; background: rgba(49,38,59,.05); border-left:1px solid #DBD7DA; font: 300 16px/24px Cinetype (newsroom) or 14px/22 (careers); color #31263B`. Icon badge `35×35; position:absolute; left:-18px; top:21px; background:#FFF; border:1px solid #DBD7DA; border-radius:50%`; 15px icon colored `#473982`. Links inside: `#473982`, `border-bottom:1px solid #43394C`. Careers scam callout: box 773×260, `margin-bottom:40px`, H4 heading-4 (`margin-bottom:15px`) + 2 paragraphs (`margin-bottom:15px` between), inner max-width 702.

**P3 AnimatedCta**: `<a>` `display:flex; align-items:center; gap:16px; padding:14px 22px 14px 14px; font-size:18.8184px; line-height:28.2276px; color:#14141C; border:1px solid transparent; border-radius:1px; background-image: linear-gradient(to right,#FFFCFC,#FFFCFC), linear-gradient(45deg,#31263B,#AD8EB6); background-clip: padding-box, border-box; box-shadow: inset 0 0 34px 0 #EFEBED, 6px 27px 10px 0 rgba(100,63,63,.01), 4px 4px 10px 0 rgba(100,63,63,.04), 2px 13px 8px 0 rgba(100,63,63,.06), 1px 6px 6px 0 rgba(100,63,63,.06), 0 1px 3px 0 rgba(100,63,63,.18); transition: background-color .1s linear`. Box 220×66 ("See open roles"). `::after` fill opacity → .3 on hover; `filter: brightness(1.1)` on hover of the label element (`.bwiHfb:hover`). Icon circle `36×36; border:1px solid #43394C; border-radius:999px; color:#43394C; display:grid; place-content:center` with a 16px arrow (`_shared/svg/icons/Cta-PrimaryCtaIconWrapper-*.svg`). Accents: 4 circles `14×14, border:1px solid #9C959F, radius 999` centred on the 4 corners (offset -6px), `transition: scale .3s cubic-bezier(1,-.4,.35,.95)`; hover → `scale:0` with `transition-delay: calc(var(--i)*.04s)` (i = 0..3). 4 corner-line tracks (1px lines, `overflow:clip`, each track holds 3 copies of the line offset by ±100%), positions t/r/b/l at -4px outside the box, `opacity:0; transition: transform cubic-bezier(.645,.045,.355,1), opacity .4s cubic-bezier(.215,.61,.355,1)`; hover → `opacity:1; transition: transform .4s var(--out-cubic), opacity .4s var(--out-cubic)` and translate `t: translateX(100%)`, `r: translateY(100%)`, `b: translateX(-100%)`, `l: translateY(-100%)` (lines sweep around the box). Full markup/CSS: `dom/about--AboutHero__Actions.*`, `dom/careers--HeroCareers__Actions.*`.

**P4 NewsroomPostCard**: GlassCard `padding:10px`, 360×388 (about) / 370×393 (newsroom), interactive hover. Image box `aspect-ratio:350/180; border-radius:10px; background: rgba(49,38,59,.05); box-shadow: 0 0 0 1px rgba(49,38,59,.05); overflow:hidden`, img `object-fit:cover`. Info `padding:15px; flex column; z-index:2`: H4 heading-4 (PP Formula 600 20/26 -0.5px #14141C, `margin-bottom:15px`), then `<p>` Cinetype 300 14/22 flex column: `<strong>` outlet (weight inherits 300 visually; computed bold not applied) + `<span>` date. Whole card is a link to the external article.

**P5 CustomerStoryCard**: `<a>` (display flex) → GlassCard `padding:20px; gap:20px` interactive hover. Logo plate `height:150px; width:100%; padding:20px; display:flex; center; background:#FFFCFC; border:1px solid #DBD7DA; border-radius:6px`, logo img natural size (e.g. 128×50). Content `flex column; gap:10px`: H4 heading-4; MetaRows (P7, 10px variant, rows gap 2px). Grid: `repeat(3,1fr); gap:20px` (373.3 wide @1440); ≤800 2 cols; ≤600 1 col.

**P6 RichText** (`RunningText__Wrapper`, verbatim rules): `font-family:"IBM Plex Sans"`. `p { 18px/32px; margin-bottom:24px; weight 400 }`. `h1,h2 { 28px; padding-top:25px }`, `h3 { 20px; padding-top:15px }`, all headings `margin-bottom:24px; line-height:1.3; color: var(--fontColorLOUD)`; first-child heading `padding-top:0`; headings use PP Formula 800 (h2 letter-spacing -0.7px, h3 -0.5px). `ul,ol { 18px/32px; margin-bottom:24px; padding-left:24px; list-style: circle }`, `li { margin-bottom:8px }`. `strong,b { 600; color: var(--fontColorLOUD) }`. Links: `color: var(--highlightColor); border-bottom:1px solid` same; hover `background: color-mix(in srgb, var(--highlightColor) 30%, transparent)`. `blockquote { margin:10px 0 10px 30px; padding-left:15px; border-left:2px solid var(--highlightColor) }`. `pre { margin:0 0 24px; padding:10px 15px; background:#F8FAFB }`; `code { background:#F8FAFB; border:1px solid #C7D7DF; padding:2px 5px; color:#01011B; 16px; white-space:pre-wrap }` (tokens: keyword `#F5C0C0`, string/builtin `#AD8EB6`). `img { display:flex; max-width:100% }`; `figure` (InlineImage) `margin-bottom:24px`; `figcaption { text-align:center; margin:24px 0; opacity:.6; padding:0 10px }`. `::selection` tint 30%. Last child `margin-bottom:0`. Blog post column 740 wide; story column 758 (880 box − 2×60 padding). Story bodies use `PortableText__*` classes with the same values (h3 PP Formula **800** 20/26; bold `<strong>` 600 #14141C). Video blocks (`VideoFile__Wrapper`): `<figure>` 740×~416, `<video>` `object-fit:contain`, autoplay muted loop playsinline (see assets), `margin-bottom:24px`.

**P7 MetaRows**: row `display:flex; flex-wrap:wrap; gap:8px; font-family:"Cinetype Mono"; letter-spacing:.833px (10px) or .9996px (12px); line-height:21px; color: rgba(20,20,28,.447)`; label text ends with ` /`; value `<span>` `#14141C`. Story header uses 12px in a centred single row (`gap:40px; padding:20px 40px`); cards use 10px stacked rows (`gap:2px`).

**P8 DarkResourceCard**: `<a>` → `Card__Wrapper` (dark variant): `padding:10px; border:1px solid rgba(245,192,192,.15); border-radius:0; background:transparent; transition: border .25s cubic-bezier(.25,.1,.25,1), background-color .25s`; hover `border-color: color-mix(in srgb,#F5C0C0 30%,transparent); background-color: color-mix(in srgb,#F5C0C0 10%,transparent)`. Figure `background: rgba(245,192,192,.05); overflow:hidden; aspect-ratio` = source ratio (2400/1260, 1280/720, 1200/630, 3446/2352…), img cover. Events/guides copy `padding:15px; flex column`: H4 **PP Formula 700 28/36.4 -0.7px #FFFFFF** `margin-bottom:20px`; footer row `display:flex; justify-content:space-between; font-size:20px; line-height:31.42px` with CTA span `text-decoration: underline` (#F5C0C0) e.g. "Register", "Watch now", "Download now"; hover on CTA span opacity .8. Templates variant (`TemplatesCard`): preview image box 402×220 (`position:relative; overflow:hidden`, img absolute cover, a `#3A3138`-ish plum mat around screenshots is part of the image); info `padding:15px 5px 5px`: H4 heading-4 white `margin-bottom:6px`, optional author line, description 16/24 300 `#F5C0C0`.

**P9 DarkSectionHeader**: icon row `display:flex; align-items:center; margin-bottom:15px`, icon `margin:0 15px` (first icon x = left + 50); text wrapper `padding-right:40px; margin-bottom:20px`: H2 heading-2 (PP Formula 800 40/52 -1px #FFFFFF, `margin-bottom:10px`), optional p 20/30 300 #F5C0C0. Subsequent headers `margin-top:66px` (events).

**P10 SidebarFilter**: `position:sticky` (top offset follows header), width 255 (events) / 232 (templates). Optional H5 "FILTER" (IBM Plex Mono 600 14px -0.35px uppercase `#99797D`, `margin-bottom:8.4px`). Track: `border-left:1px solid rgba(245,192,192,.35)` (ProgressBar, absolute full height), options `padding-left:15px`, each 30px tall (`line-height:30px`; templates 16px text), `opacity:.6; transition: opacity .25s cubic-bezier(.25,.1,.25,1)`; active option `opacity:1` with a highlight bar `linear-gradient(90deg, rgba(245,192,192,.098) 0%, rgba(245,192,192,0) 100%)` behind it that slides (`transition: top .25s ease-in-out`). Templates options are links to `/templates/<category>/`.

**P11 V1Intro**: `display:flex; justify-content:space-between; align-items:center; gap:32px` (1160×402). Copy 465 wide `z-index:1`: H1 PP Formula SemiExtended 700 **74/96.2** -1.85px **white** (gradient-text class but white on dark), p 20/30 300 `max-width:488.68px; text-wrap:balance` #F5C0C0. Illustration img 663×402 (`events-and-guides-hero.svg`, aspect 840/510).

**P12 SocialShare**: `display:flex; align-items:center; gap:12px (header) / 16px (body end); font: 600 14px/22px Cinetype; color #99797D (dark header) / #43394C (light body)`; "SHARE:" uppercase; X + LinkedIn 15px icons, `transition: opacity .25s cubic-bezier(.25,.1,.25,1)`. Share URLs: `https://twitter.com/share?text=<title>&url=<url>`, `https://www.linkedin.com/shareArticle?mini=true&url=<url>&title=<title>`.

---

## 4. Pages

Conventions: **REUSE X** = existing component, with the listed prop/content differences. **NEW** = build; spec follows. Heights are section heights at 1440 / 390.

### 4.1 `/about/` (T1) — 4297 / 4688 px tall. 1 Header, 1 Footer, 1 CustomerBanner REUSE; 4 NEW.

| # | Section | y / h @1440 | Status |
|---|---|---|---|
| 0 | Header (light) | fixed | REUSE `Header` |
| 1 | About hero (Perlin + cartesian grid, H1, photo + copy + CTA) | 0 / 899 | NEW `AboutHero` (uses `PerlinNoise`, `CartesianGrid`, `GlassCard`, `AnimatedCta`) |
| 2 | "Trusted by leading data companies" banner | 899 / 189 | REUSE `CustomerBanner` (identical logos, popovers, copy) — sits inside the hero row (`AboutHero__Bg` grid row 2) |
| 3 | Backed by the best | 1088 / 480 | NEW `BackedByTheBest` |
| 4 | Elsewhere on the internet | 1568 / 1190 | NEW `ElsewhereOnTheInternet` (uses `NewsroomPostCard`) |
| 5 | A team of data nerds | 2757 / 953 | NEW `TeamOfDataNerds` |
| 6 | Footer (light) | 3710 / 555 | REUSE `Footer` |

**1 AboutHero** (`dom/about--AboutHero__Wrapper.*`): row `overflow: clip visible`, checkered margins. Backdrop: Perlin noise wrapper 1382×800 at top (same as homepage hero: eggplant texture, opacity .8, masked `linear-gradient(#000, transparent)`), cartesian grid 1382×899 (32px cells, radial tint `radial-gradient(circle, rgba(49,38,59,.05) 50%, rgba(49,38,59,.2))`). Text content `grid-column:2/-2; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:40px; padding:225px 80px 80px`.
- H1 [377,225,686,185] gradient heading-1: line 1 `<span>` "Changing the way" PP Editorial New 200 italic 78/101.4 (block), line 2 "the world uses data" PP Formula SemiExtended 700 60/78 -1.848px, centred; `padding:0 6px 6px; margin:0 -6px -6px`.
- Bottom content [167,444,1106,374] `display:flex; align-items:center; gap:50px; max-width:1240px`:
  - Left: GlassCard (no padding, `overflow:hidden`) 596×374 holding `about/about-hex-pic.jpg` (natural 2048-class original; rendered 596×374, aspect 596/375).
  - Right [813,484,460,296] `flex column; gap:25px; max-width:460px`: P1 (20/30) `<strong>` weight **500** "Hex builds the world's best tools for making sense of your world."; P2 20/30 300 "We started the company to build the product we had always wished we had – and now, 6 years in, our system supports over 2,000 customers globally, from leading AI labs to regulated banks."; actions: `AnimatedCta` "See open roles" → `/careers/` (220×66).
- 390: padding `150px 20px 50px`; H1 36.8/40.48 (italic line 36.8×1.3); bottom content stacks (column): image 310×195, copy 310 wide, CTA centred 189×54.

**3 BackedByTheBest** (`dom/about--ToutBackedByTheBest__Wrapper.*`): wrapper 1240 wide `flex column; align-items:center; overflow:hidden`. Background orbit SVG (`about/svg/ToutBackedByTheBest-Wrapper-*.svg`, 1553×820, `position:absolute; opacity:.75; transform: rotate(180deg)`, positioned at [-56,748] i.e. its centre sits on the row's top edge). Inner `display:flex; justify-content:center; align-items:center; gap:80px; padding:100px 60px`.
- Text 300 wide (`AboutTextLockup`: flex column gap 10): H2 heading-1 gradient, left-aligned: `<span>`"Backed by" italic 78/101.4 + "the best" 60/78; P 20/30 300 `text-wrap:balance` "We’ve raised a lot of money from great investors."
- Logo grid 740 wide `display:flex; flex-wrap:wrap; align-items:center; gap:20px 40px`; 13 logos, each a flex-centred box **80px tall**, inline SVG (files `about/svg/ToutBackedByTheBest-Logo-*.svg`, in DOM order): widths 80, 120, 137, 181 | 94, 68, 103, 108, 152 | 140, 81, 71, 157 (rows of 4/5/4). Visual order from the screenshot: a16z, Amplify, Sequoia, Redpoint | Avra, Operator Collective, Box Group, Vandelay Ventures, Databricks | Snowflake, XYZ, Tokyo Black, Next Legacy. Logos are full-colour (no grayscale filter).
- 390: stacks; text 314 wide, H2 measured 40px/40px (box 203×114), logos wrap centred.

**4 ElsewhereOnTheInternet**: row `border-top:1px solid #DBD7DA`; inner `flex column; align-items:center; gap:40px; padding:80px 0; max-width:1240`. H2 heading-1 centred: `<span style=display:inline-block>`"Elsewhere on" italic + " the internet". Main `padding:0 60px; gap:40px`: grid `repeat(3, 360px); gap:20px` of 6 `NewsroomPostCard`s (the 6 newest newsroom items, same data as /newsroom/ cards 1–6), then secondary `Button` lg "View more internet links" → `/newsroom/` (202×50).
- 390: H2 38/49.4; cards become a **horizontal scroller** (cards 267×392 laid in a row at x 38, 325, 612…, `overflow-x` on the main), button below.

**5 TeamOfDataNerds** (`dom/about--ToutATeamOfDataNerds__Wrapper.*`): wrapper `overflow:hidden`; inner `display:flex; align-items:center; gap:80px; padding:20px 80px 80px` (1472 wide, overflows right). Text block `position:absolute; left: 80px (x 109); padding-left:80px; max-width:500px`, vertically centred (y 3038): H2 heading-1 gradient left: `<span style="padding-left:16px">`"A team of" italic + "data nerds"; P 20/30 300 balance "Our team has centuries of combined experience in the data world. Our journey to world domination is just beginning!"; actions `display:flex; gap:10px; padding-top:10px`: secondary md Buttons with 15px leading icons: "See open roles" (headphones icon) → `/careers/`, "The Hex Handbook" (book icon) → Notion handbook URL.
- Photo collage `flex column; gap:20px` (1312 wide, right-aligned), three rows `display:flex; justify-content:flex-end; gap:20px`; every photo is a GlassCard (radius 12, no padding) with an `<img>` (`about/data-nerds-N.jpg`). Measured photo boxes `[x,y,w,h]` and wrapper margins:
  - Row 1 (`padding-right:91px`): #1 [109,2782,190,142]; #2 [319,2762,291,177] (`margin-top:-20px`); #3 [630,2772,310,182] (`margin-top:-10px`); #4 [960,2782,370,231].
  - Row 2: column A (`flex column; align-items:flex-end; gap:20px; margin-top:-60px`): #5 [715,2974,225,171], #8 [765,3165,175,142]; #6 [960,3034,290,312]; column B (`align-items:flex-start; gap:20px`): #7 [1270,3034,151,132], #9 [1270,3185,91,157].
  - Row 3 (`padding-right:91px`): #11 [129,3468,210,142] (`margin-top:102px`); #12 [359,3448,370,188] (`margin-top:82px`); #10 [749,3328,191,278] (`margin-top:-38px`); #13 [960,3366,370,197].
- 390: text block becomes static (314 wide) between two horizontally overflowing photo strips (120px tall rows: strip 1 = 5 photos at y 2831, strip 2 = 8 photos at y 3383); buttons stack vertically (189 wide).

### 4.2 `/careers/` (T2) — 6301 / 8463. Header, Footer REUSE; 3 NEW (+ Callout primitive).

| # | Section | y / h | Status |
|---|---|---|---|
| 1 | Photo-wall hero | 0 / 1099 | NEW `CareersHero` |
| 2 | A place to do your best work | 1099 / 467 | NEW `DoYourBestWork` |
| 3 | Open roles (sidebar + department lists + safety callout) | 1566 / 4149 | NEW `OpenRoles` (uses `Callout`) |
| 4 | Footer | 5714 / 555 | REUSE |

**1 CareersHero** (`dom/careers--HeroCareers__Wrapper.*`, viewport capture `careers-hero-viewport-1440.png`): row has cartesian grid (full 1382×1099) and no Perlin. Wrapper `display:flex; flex-direction:column; align-items:center; gap:20px; padding:180px 0 64px; overflow: clip visible`. A visually-hidden `HeroCareers__HiddenHeroPreload` renders all 38 `<img>` at 1×1 so they decode before the reveal.
- **Top wide row** [-250,180,1940,155] `display:flex; gap:20px` — 10 photos, all **155 tall**, widths 139,150,136,240,149,240,170,… (natural 2:? crops; files `careers/careers-hero-*.jpg`, natural 258–479 × 310 i.e. 2× of 155).
- **Main** [29,355,1382,505] `display:grid; grid-template-columns: 291.125px 740px 291.125px; align-items:center; padding:0 30px`. Left cell: 3 rows (`flex column; align-items:flex-end; gap:20px`), row paddings: top 0, middle `padding-right:90px`, bottom `padding-right:30px` (mirrored `padding-left` on the right cell); each row 155 tall with 2–4 photos, overflowing the viewport edges.
- Text centre [350,417,740,380] `flex column; align-items:center; gap:15px; padding:0 60px`: H1 heading-1 gradient centred: `<span>`"Make everyone" italic 78/101.4 + "a data person" 60/78. Info `flex column; align-items:center; gap:30px`: description 20/30 300 centred (620 wide): "At Hex, we build beloved tools that allow people and teams to make sense of their world." + `<span>` weight 500 "Our roadmap is full of big ideas and little details, and we want your help bringing them to life."; actions `gap:20px`: `AnimatedCta` "See open roles" (scrolls to #open roles section; not a link) + `AnimatedCta` "The Hex Handbook" (book icon) → Notion handbook.
- **Bottom wide row** [-212,880,1864,155], 10 photos.
- Photo: `HeroPhoto__PhotoShell` (`line-height:0`) → GlassCard radius 12 `overflow:hidden` → `<img>` cover. Hover: none.
- **Motion (measured)**: all 38 shells start `opacity:0; filter: blur(8px)` and stay there until the preloads finish, then animate to `opacity:1; filter: blur(0px)` with **duration 300ms, ease cubic-bezier(.22,1,.36,1)**, staggered ≈10ms per photo in row order: top wide row (left→right) → left-top, right-top → left-middle, right-middle → left-bottom, right-bottom → bottom wide row (38 photos over ≈356ms). Framer `animate` (not scroll-linked).
- 390: padding `140px 0 40px`; H1 40/44; photo rows remain (horizontally clipped); text column 326 wide; CTAs stack.

**2 DoYourBestWork** (`dom/careers--DoYourBestWorkTout__Wrapper.*`): same structure as BackedByTheBest (orbit SVG `careers/svg/DoYourBestWorkTout-Wrapper-*.svg` rotated 180deg, **opacity 1** here). Inner `display:flex; justify-content:center; align-items:center; gap:80px; padding:80px`, 3 columns:
- Side highlights (276 wide each, `ToutHighlight`): icon circle 48×48 `border:1px solid #DBD7DA; border-radius:50%; margin-bottom:10px` with 15px icon (#43394C); info `flex column; align-items:center; gap:10px`: title P 20/30 **500** centred; description paragraphs 14/22 300 centred, `gap:10px`; inline links #43394C underlined (1px border-bottom).
  - Left: icon headphones-ish; "Our culture is focused on quality, craft, and speed." / "We have very few meetings, bias toward action, and take care of each other through feedback and support." / "Check out our [changelog](https://learn.hex.tech/changelog)!"
  - Right: laptop icon; "We're hiring in San Francisco, New York, and remote." / "We have beautiful offices in both cities – and remote team members throughout US, Canada, and a few other countries." / "Learn more about [how we work](https://www.notion.so/hexhq/Working-at-Hex-4396aaae4827457c97739093a3d67340)."
- Centre (368 wide, `flex column; align-items:center; gap:10px; text-align:center`): H2 **heading-2** gradient: `<span>`"A place to do" italic 52/67.6 + "your best work" 40/52; P 16/24 300 `margin-bottom:20px` with leading `<span>` weight 500 "We’re a team of builders." + " We spend our days designing and developing beautiful products, growing and supporting our user base, and helping each other succeed and learn."; primary lg `Button` "Read our handbook" (book icon) → Notion handbook (194×50).
- 390: columns stack (centre first, then the two highlights at 314 wide); section 983 tall.

**3 OpenRoles** (`dom/careers--OpenRolesTout__Wrapper.*`, 141 KB markup): row `border-top:1px solid #DBD7DA`; `display:flex` full content width.
- **Sidebar** 349 wide, `padding:60px 0; border-right:1px solid #E9E5E8`; inner `position:sticky; flex column; gap:30px`:
  - Header `display:flex; align-items:flex-end; gap:10px; padding:0 60px`: H2 heading-2 gradient "Open roles" + count `[ 39 ]` (Cinetype Mono 12/18.85 ls .9996 #89828D, `position:absolute` right of the H2, `padding-bottom:10px`).
  - Sections "Department" and "Location" (`gap:16px`): label Cinetype Mono 12 #89828D `padding:0 60px`; items `+ Engineering [ 11 ]` … each 27px tall, `padding:4px 60px`, Cinetype Mono 12 ls .9996 #31263B, `transition: transform .18s cubic-bezier(.25,.1,.25,1), opacity .1s linear, background-color .1s ease-in`. Hover/focus bg `color-mix(#31263B 5%)`; active (`data-active=true`) bg `color-mix(#31263B 10%)`; siblings before the active item `translateY(-10px); opacity:.6`, siblings after `translateY(10px); opacity:.6` (the list "opens" around the active filter). Departments: Engineering 11, Product 2, Design 2, Marketing 1, Partnerships 2, Sales 10, Customer 4, People 4, University 2, Legal 1. Locations: SF 27, NYC 25, Remote 16.
- **List** `flex column; gap:60px; padding:60px` (1033 wide). Department block `display:flex; gap:50px; position:relative`:
  - Info (sticky, `max-width:260px; padding-top:10px; flex column; gap:8px`): H3 heading-3 (PP Formula 800 28/36.4 -0.7px #14141C); P 14/22 300; optional "Learn more" row (15px icon + link #43394C underlined, `gap:10px`).
  - Roles column 603 wide: role `<a>` rows `display:flex; align-items:center; gap:5px; padding:20px 0; border-bottom:1px solid #E9E5E8; transition: background-color .18s cubic-bezier(.25,.1,.25,1)` (71px tall single-line). Title wrapper `display:flex; align-items:center; gap:10px; margin-right:auto` → 15px "↳" icon (#43394C) + title Cinetype **500 20/30** #31263B. Location wrapper `gap:10px` → 15px pin icon + Cinetype Mono 12/18 ls .9996 #89828D (right aligned, wraps at ~240px). Both wrappers `transition: transform .18s cubic-bezier(.25,.1,.25,1)`. Hover/focus: row bg `color-mix(#31263B 5%)`, title `translateX(20px)`, location `translateX(-20px)`.
  - After the last department: `Callout` (safety) 773 wide.
- 390: sidebar becomes a 208px block on top (`padding:30px 0`); departments stack (info above roles); roles full width.
- Data: §7.3.

### 4.3 `/newsroom/` (T3) — 5807 / 13324. Header, Footer REUSE; 3 NEW (+ `NewsroomPostCard`, `Callout`).

Single row `BasicPageRow` (`padding:80px 40px; max-width:1240`) → `NewsroomContent` (`flex column; padding:0 5px`, 1150 wide).

| # | Section | y / h | Status |
|---|---|---|---|
| 1 | Header (H1 + media-kit callout) | 80 / 298 | NEW `NewsroomHeader` |
| 2 | Featured press card | 378 / 459 | NEW `FeaturedNewsroomCard` |
| 3 | Press grid (33 cards) | 877 / 4263 | NEW `NewsroomGrid` (of `NewsroomPostCard`) |

- **Header** `display:flex; align-items:center; padding:150px 0 40px`. Left (max 600): H1 heading-1 gradient "Newsroom" (left aligned); P 20/30 300 "For any media inquiries please reach out to [press@hex.tech](mailto:press@hex.tech?subject=Media inquiry)." Right (`margin-left:auto`): `Callout` 361×74 "Looking for our media kit? [Find it here.](notion media-kit URL)" (16/24).
- **Featured** GlassCard `margin-bottom:40px` (interactive hover) → `<a>` `display:flex` (external Fortune link): image 690×459 (`rgba(49,38,59,.05)` bg, cover, natural 640×426 → original saved), copy 460 wide `flex column; justify-content:space-between; padding:30px`: H2 heading-2 (PP Formula **800 40/52** -1px #14141C, `margin-bottom:30px`) "Hex raises a $70 million Series C to double down on data in the AI era"; meta `<p>` 14/22 300 #31263B: strong "Fortune", span "May 28, 2025".
- **Grid** `display:grid; grid-template-columns: repeat(3, 370px); gap:20px` — card heights vary with title length (393 / 367 / 341). 33 cards (list §7.4). **Cards are not anchors**: the card is clickable via JS and opens the article's external `url` (taken from the page's RSC payload, listed in §7.4); the featured card is a real `<a>`. Same for the 6 cards on /about/.
- 390: H1 38/49.4; header stacks (callout below); featured card stacks (image on top); grid 1 col 340 wide.

### 4.4 `/blog/` (T4, dark) — 4127 / 4883. Header (dark), Footer (dark) REUSE; 4 NEW.

| # | Section | y / h | Status |
|---|---|---|---|
| 1 | Masthead (title, category divider, search, commit graph, stats) | 0 / 330 | NEW `BlogMasthead` |
| 2 | Featured posts (1 primary + 2 secondary) | 347 / 1215 | NEW `BlogFeatured` |
| 3 | Recent posts (3-up full-bleed strip) | 1578 / 257 | NEW `BlogRecent` |
| 4 | Feed (category filter + 15 rows + "View more (15)") | 1852 / 1688 | NEW `BlogFeed` |
| 5 | Footer (dark) | 3540 / 555 | REUSE `Footer theme="dark"` |

All blog blocks use `postMeta__*` atoms: date row (`flex; gap:12px`; each item `flex; gap:4px; margin-bottom:12px; color: rgba(255,255,255,.447)`; 16px merge-arrow icon flipped vertically + Cinetype Mono 10/15.71 ls .833 date; clock icon + read time), title link, `postMeta__PostMeta` (Cinetype Mono 12, `rgba(255,255,255,.447)`, lines "Author/ Name" and "Tags/ Tag" 10/15.71, tag colored by category), and a **floating CTA circle** (`postMeta__Cta`: 40×40, `border-radius:999px; background:#111118; box-shadow: 4px 8px 12px -6px rgba(0,0,0,.64); color: rgba(255,255,255,.9); opacity:0; transform: rotate(90deg) scale(.88) translate(...)`, `transition: opacity .16s cubic-bezier(.175,.885,.32,1.1), transform .36s cubic-bezier(.175,.885,.32,1.1)`; on card hover it becomes visible and the meta lines slide right `translateX(56px)` with `transition: transform .28s cubic-bezier(.175,.885,.32,1.1)` delays .016s / .032s; the CTA icon also spins: `animation: rotate 12s linear infinite`).

Category colors (Filter + tags + mini tag bars): Product `#A477B2`, Company `#FFFFFF`, Data `#F5C0C0` (inherits), Security `#B55E60`, Data teams `#CDA849`, Design `#859850`, Engineering `#67B69E`, Friends of data `#8E7CD8`, Research `#6BA8D4`, Further reading `#717A94`.

- **Masthead** (`dom/blog--Masthead__Hero.*`, capture `blog-masthead-1440.png`): hero `grid-column:2/-2; margin:0 48px; padding-top:108.84px` (1286 wide). Command row `display:flex; gap:24px; margin-top:128px` at y 237: H1 "Blog" PP Formula 800 28/36.4 -0.7px white (lifted `translateY(-17.1px)` so it sits on the line); divider 974 wide `flex; gap:12px` with label "POSTS BY CATEGORY" (Cinetype Mono 12 ls .9996, `padding:0 24px; background:#14141C`, centred on the rule, color `#3A3138`); Search toggle 200×36 (`background: rgba(245,192,192,.055); border-radius:1px; padding:4px 6px; gap:4px; transition: background-color .08s linear`; 28px round icon cell + placeholder "Search posts" 14/22 `rgba(245,192,192,.384)`). Commit graph (`CommitGraph__ViewBox`, `aspect-ratio:480/20; margin:16px 0`, 1286×54) = a `<canvas>` of colored vertical ticks (one per post, category colors) — **runtime canvas**: use `blog/commit-graph-fallback@2x.png` or redraw. Bottom label "POSTS: 288 | AUTHORS: 84 | LAST UPDATED: 10.21.2026" (Cinetype Mono 12, `#3A3138` on `#14141C`, border-bottom 1px `#3A3138`, centred on the frame's bottom rule). Cross accents 8×8 at the frame's bottom corners (x 24 / 1408, y 327).
- **Featured** (`dom/blog--FeaturedPosts__Grid.*`): grid `repeat(2, 667.125px); gap:16px; margin:16px` (x 45). Vertical label "← FEATURED →" rotated -90deg at the left margin (Cinetype Mono 12 `#3A3138` on `#14141C`).
  - Primary card (spans 2 cols, 1350×542): `background:#0F0F15; border-radius:1px; box-shadow: 0 0 0 1px #2B252C; transition: background-color .08s linear, box-shadow .08s linear`. Layers: Perlin noise panel masked `radial-gradient(circle at 74% 50%, #fff 12%, transparent 72%)` (`blog/perlin-noise.png`, `background-color:#E3B2B3` multiply, opacity .16→**.72 on hover**, `animation: translate-bg 36s linear infinite`, `transition: .3s ease-out`; on hover bg-color → transparent). Grid `490.5px 771.75px; gap:24px; padding:32px`: info (`padding:32px 0 32px 32px; flex column; justify-content:space-between`): date row, H2 PP Formula 800 40/52 -1px white balance, description 20/30 300 (`margin-top:4px`), then meta + CTA (`margin-top:56px`); image 772×478 (`border-radius:4px; box-shadow: 0 4px 32px -12px rgba(0,0,0,.64)`). Corner accents (`Primary__PostCornerAccents`, color `--post-corner-accent-color` → `#99797D` on hover).
  - Secondary cards (667×657): `flex column; padding:32px`, image 603×373 (radius 4, same shadow), info `padding:32px`: date row, H2 PP Formula 800 28/36.4 -0.7px white title, 20/30 300 subtitle, meta row `margin-top:32px`.
- **Recent** (`dom/blog--RecentPosts__RecentGrid.*`): full-bleed row with `border-top/bottom:1px solid #3A3138`; `<ul>` grid `repeat(3, 1fr); gap:1px; background:#3A3138` (the 1px gaps draw the dividers), items `background:#14141C`, slot `flex column; justify-content:space-between; padding:32px`: date row, H2 PP Formula 600 20/26 -0.5px white balance (`margin-bottom:4px`), excerpt 14/22 (`.text-base`), meta + CTA row (`margin-top:32px`). Label "← RECENT →" sits on the top rule at x 77.
- **Feed** (`dom/blog--Feed__Wrapper.*`): row `padding:56px 0`. Left filter (grid cols 2–4, `padding:16px 8px 48px`, sticky): H2 "Feed" PP Formula SemiExtended 700 60/78 white `padding-left:16px` with superscript-style count "[288]" (Cinetype Mono 12, each char inline-block); categories list `flex column; padding:24px 0`, each link `padding:4px 4px 4px 22px; Cinetype Mono 12/18.85 ls .9996; border-radius:1px; color = category color`, 5px chevron indicator rotated 90deg; `transition: transform .18s cubic-bezier(.25,.1,.25,1), opacity .1s linear, color …`; hover/active bg `rgba(54,54,76,.44)`; active item pushes siblings ±24px with opacity .6 (same mechanism as careers sidebar). Right list (cols 5→end, `flex column; gap:8px; padding:8px`): 15 rows, each `Post__Detail` 1021×92 (`border-radius:1px; overflow:clip`, hover sets `--detail-hover`), summary `display:flex; align-items:center; padding:12px 16px`: info (max 800, `padding-right:32px`): date + mini category bars (5×15px, `aspect-ratio:1/3; opacity:.47`) + read time (Cinetype Mono 10, `rgba(255,255,255,.64)`); title PP Formula 600 14/22 -0.35px white `opacity:.8` (→1 on hover, `.08s linear`); synopsis 12/18 `#E3B2B3` `opacity:.8` single line (max 463). Right: author (Cinetype Mono 10 white .64, right aligned) + tags (category colored) + feaux CTA circle (40, `border:1px solid rgba(255,255,255,.24)`). Bottom: "View more ( 15 )" button (14/22) centred inside a framed cell.
- 390: masthead 271 tall (H1 20/26), featured cards single column (366 wide, primary info above image, titles 20/26), recent → 1 col (580 tall), feed filter collapses to a 49px "Feed" headline row, rows 358 wide (68 tall).
- Data: §7.5.

### 4.5 `/blog/introducing-generative-data-apps/` (T5, article template) — 7858 / 9957. Header (dark), Footer (dark) REUSE; 2 NEW (+ `RichText`, `Callout`, `SocialShare`).

| # | Section | y / h | Status |
|---|---|---|---|
| 1 | Dark article header (eyebrow, H1, dek, meta, share) + hero media | 200 / 715 (wrapper starts at `padding-top:200`) | NEW `ArticleHeader` |
| 2 | Light content slab: sticky TOC aside + rich text + share + kicker | 965 / 6306 | NEW `ArticleBody` |
| 3 | Footer (dark) | 7271 / 555 | REUSE |

- **ArticleHeader** (`dom/blog_…--BlogPostHeader__Wrapper.*`): wrapper `max-width:1010px; margin:0 auto 50px; flex column`. Info `max-width:770px; padding:0 40px; margin:0 120px` (text column 690 at x 375):
  - Eyebrow H6: IBM Plex Mono 700 12/18.85 ls **2.568px** uppercase `#99797D`, `margin-bottom:26px`, containing link "Blog" → `/blog/` (`#E3B2B3`, 1px bottom border).
  - H1 PP Formula SemiExtended 700 60/78 -1.848px **#FFFFFF** (solid, not gradient), `margin-bottom:10px`.
  - Dek P Cinetype 300 24/36 (#F5C0C0), `padding-bottom:25px; margin-bottom:30px; border-bottom:1px solid #3A3138`.
  - Meta row `display:flex; flex-wrap:wrap; justify-content:space-between; gap:16px; 16px/25.14`: left `flex; gap:12px; align-items:center`: author "Olivia Koshy" · category tag "Data teams" (`padding:0 6px; border:1px solid #2B252C`, 26 tall) · date "May 12, 2026"; right `SocialShare` (header variant, #99797D, links #E3B2B3).
  - Hero media `max-width:880px; padding:0 20px; margin:50px 65px -250px` (negative bottom margin overlaps the light slab): 16:9 box 840×473 `background:#14141C; box-shadow: <glass stack>` containing the YouTube iframe (`https://www.youtube.com/embed/2FjG6-mq3EA?enablejsapi=1`). Variant: image hero uses the same box.
- **ArticleBody** (`dom/blog_…--BlogPostContent__Content.*`): full content width slab `background:#FFFCFC; color:#14141C; box-shadow:<glass>; display:flex; justify-content:center; align-items:start; gap:45px; padding:250px 40px 40px` (the 250px top padding receives the overlapping hero). Light tokens apply inside the slab.
  - Aside (`position:sticky`, `max-width:320px`, 257 wide): box `padding:30px; background:#FFFCFC; border:1px solid #E9E5E8`; nav `flex column; gap:8px`: H5 "In this article" (Cinetype 600 14 -0.35px uppercase #89828D); `<ul>` (`margin-bottom:30px; box-shadow: inset 1px 0 1px 0 #E9E5E8` = left hairline) of anchor links (`padding:4px 12px; 14/22 #31263B`; li hover bg `color-mix(#31263B 5%)`, `.25s`); primary lg `Button` "Get started for free" (`https://app.hex.tech/signup?source=blog-toc`) full aside width.
  - Text column 740 (`RunningText` = P6; column `flex column; gap:40px; margin-right:260px` to balance the aside).
  - In-body `Callout` (98 tall): "Want to learn more about Generative data apps? Register for our [webinar on May 14th] to hear directly from Olivia & our CEO, Barry." (`margin-bottom:40px`, 16/24 #31263B).
  - End: `SocialShare` (body variant, #43394C, gap 16) then **BlogKicker** box `padding:25px; max-width:740px; 16px/25.14 #31263B; background: rgba(49,38,59,.05); border:1px solid rgba(49,38,59,.25)`: text (`margin-bottom:25px`, two paragraphs separated by `<br><br>`) + buttons row `gap:20px`: secondary md KickerButtons (40 tall, 14px): "✨ Get started for free" → `https://app.hex.tech/signup?source=blog-kicker`, "👩‍💻 Open roles" → `/careers/`. ≤450px buttons `width:100%`.
  - No related-posts block on this template (none rendered).
- 390: header column 294 (H1 38/49.4, dek 20/30), hero 334×188 (slab padding `180px 40px 40px`), **the TOC aside is not rendered** (absent from the 390 DOM), text column 294 wide, kicker 294 wide (448 tall, buttons full width ≤450).
- Content (title/dek/headings only): §7.6.

### 4.6 `/customers/` (T6) — 8425 / 21011. Header, Footer REUSE; 6 NEW (+ `CustomerStoryCard`, `GlassCard`).

| # | Section | y / h | Status |
|---|---|---|---|
| 1 | Hero: heart illustration + H1 + copy | 0 / 588 | NEW `CustomersHero` |
| 2 | Featured stories fan (5 square cards) | 588 / 276 (cards lifted up to -80px) | NEW `FeaturedStoriesFan` |
| 3 | User quotes marquee (2 rows, opposite directions) | 865 / 532 | NEW `QuotesMarquee` (+ `UserQuoteCard`) |
| 4 | Filter + sort nav | 1397 / 64 | NEW `CustomersFilterNav` |
| 5 | Stories grid (39 cards) | 1461 / 5835 | NEW `CustomerStoriesGrid` (of P5) |
| 6 | "And loved by many more" logo wall | 7296 / 543 | NEW `LovedByManyMore` |
| 7 | Footer | 7839 / 555 | REUSE |

- **Hero** (`dom/customers--CustomersIndexContent__Header.*`): `flex column; align-items:center; gap:5px; padding:250px 40px 40px; text-align:center` (829 wide). Heart line SVG (`customers/svg/CustomersIndexContent-Header-*.svg`, 510×466) absolutely behind at [465,140]. H1 gradient **74px** line: `<span>`"Beloved by users" PP Editorial New 200 italic **59.2/76.96** (block) + "Customer stories" PP Formula SemiExtended 700 74/96.2 -1.85px. P 20/30 300 `max-width:470px`: "Over **2,000 organizations** trust Hex to bring the magic of AI to data. Read their stories to learn how teams like yours are scaling insight and impact with AI analytics." (strong weight 500).
- **FeaturedStoriesFan** (`dom/customers--FeaturedCustomerStories__Wrapper.*`): `display:flex; gap:20px` row of 5 slots (1462 wide, overflows both sides by 11px), each slot `transform: translateY(var(--story-offset))` = **-80, -35, 0, -35, -80px** (static arc; not scroll-linked). Card 276×276: dashed guide lines around it (`1px dashed #DBD7DA`, extending 20px beyond each edge); `<a>` → GlassCard `aspect-ratio:1` interactive (hover lift -4px). Inside (`position:absolute; inset:0; background:#14141C; overflow:hidden`): hero photo `opacity:.8; object-fit:cover; mask-image: linear-gradient(#000, rgba(0,0,0,.6))`; centred info `flex column; gap:8px; padding:40px 30px`: white logo (`filter: brightness(0) invert(1); max-width:80%`), "FEATURED" pill (Cinetype Mono 10/15.71 ls .833 white, `padding:3px 12px 2px; background: rgba(20,20,28,.25); border-radius:16px`). Bottom "Read story →" strip (`padding:80px 0 15px; background: linear-gradient(transparent, rgba(0,0,0,.5)); opacity:0; transform: translateY(10px); transition: opacity .25s, transform .25s cubic-bezier(.25,.1,.25,1)`; hover → `opacity:1; translateY(0)`; text 14/22 300 white + 15px arrow #E3B2B3). Cards: Mercor, LangChain, HubSpot (centre), Reddit, Modal (§7.7).
- **QuotesMarquee** (`dom/customers--CustomersIndexContent__QuotesMarqueeWrapper.*`, 473 KB because the set is repeated 6×): wrapper `padding:40px 0`; `flex column; gap:20px`; two viewports (216 tall). Each track = 6 copies of a 4520px set (`gap:20px; padding-right:20px`); row 1 `animation: <ktjWaZ> 140s linear infinite`, row 2 `<qNDF> 140s linear -70s infinite` (opposite direction; keyframes in the CSS file). FadeShell `transition: opacity .55s ease-out` (fades in once mounted). `UserQuoteCard` = GlassCard `padding:20px 20px 16px; max-width:600px` (432 wide typical, 216 tall): inner `flex column; gap:20px`: quote row `flex; gap:12px` → line column 15px (quote glyph 15px #31263B + vertical rule, `gap:10px; padding-top:5px`) + text (16/24 300; **stat variant**: P 20/30 300 lead-in + H4 PP Editorial New 200 italic **38/45.6** #14141C, e.g. "Our data team is" / "2x more efficient"); footer `flex; align-items:center; gap:20px`: logo slot (grayscale filter, max 160×40) or **G2 stars** (5×16px stars + G2 logo 20px) for G2 reviews, attribution Cinetype Mono 12 ls .9996 `opacity:.6` (name / title on 2 lines). Hover lift as P1. 10 cards per set (§7.7).
- **CustomersFilterNav** (`dom/customers--CustomersNav__Wrapper.*`): `display:flex; justify-content:space-between; align-items:center; gap:20px; padding:0 40px 20px; max-width:1240`. Filter group `flex-wrap; gap:10px`: buttons 42 tall (secondary md style, `padding:0 15px` with 28px icon + label, or `0 20px` text only). Selected ("All stories"): `background:#43394C; color:#FCF8F8; border:1px solid #DBD7DA`; hover of selected `background: var(--fg1200)`. Labels: All stories, Startup stories, Growth stories, Enterprise stories (icons `customers/svg/Button-Icon-*.svg`). Sort control 485 wide with `border:1px dashed #DBD7DA` (top/right/bottom), trigger = ghost button "Sort by: Recently added" + 15px chevron (row-reverse), opens a dropdown (Recently added / alphabetical — options not rendered until open; see DOM).
- **CustomerStoriesGrid**: list wrapper `padding: clamp(10px, .2734rem + 1.25vw, 20px) 40px 60px; max-width:1240`; grid `repeat(3,1fr); gap:20px` (≤800: 2, ≤600: 1). 39 cards (§7.7). No pagination; filtering is client-side.
- **LovedByManyMore** (`dom/customers--CustomersLovedByManyMore__Wrapper.*`): row border-top; `flex column; align-items:center; gap:30px; padding:60px 40px; text-align:center`; H2 heading-2 (PP Formula 800 40/52, solid #14141C, balance) "And loved by many more"; logos `display:flex; flex-wrap:wrap; justify-content:center; gap:20px 40px` (1160 wide, 6 rows), each `<img>` **40px tall**, grayscale filter (`GrayscaleLogo`), 50 logos (§7.7).
- 390: H1 42/54.6; fan 454 wide (cards ≈ 145 tall, still offset); marquee unchanged speed; filter group 2×2 grid (142px each) above the sort; grid 1 col (311 wide); logo wall wraps.

### 4.7 Customer story template (T7) — mercor 6576, chime 9213, figma 6798, langchain 8579, neo-financial 7297, notion 6290, ramp 5463, stubhub 3400 (@1440); chime 18653 @390. Header, Footer REUSE; 4 NEW (+ `RichText`, `MetaRows`, `GlassCard`, `CustomerStoryCard`, `CartesianGrid`).

| # | Section | y / h (mercor) | Status |
|---|---|---|---|
| 1 | Story header grid (logo cell, hatched cell, H1, dek, metadata) | 150 / 746 (row 0–896) | NEW `StoryHeader` |
| 2 | Detail cards (About / Outcome / Scale achieved) over cartesian grid | 896 / 295 | NEW `StoryDetails` |
| 3 | Body with hatched side gutters | 1191 / 3721 | NEW `StoryBody` (RichText) |
| 4 | Related stories | 4912 / 1077 | NEW `RelatedStories` (P5 grid) |
| 5 | Footer | 5989 / 555 | REUSE |

- **StoryHeader** (`dom/customers_mercor--CustomerStoryHeader__Wrapper.*`): wrapper `margin-top:150px; border-top:1px solid #E9E5E8; overflow:hidden`; inner max 1240. Top grid `grid-template-columns: 990.39px 247.61px` (= 4fr 1fr) with `border-left/right:1px solid #E9E5E8`:
  - TL cell (151 tall) `padding:30px 40px; border-bottom:1px solid #E9E5E8`: color logo `<img>` **90px tall** (`object-fit:contain`, width from aspect e.g. Mercor 315).
  - TR cell: hatch `repeating-linear-gradient(45deg, transparent 0 5px, #EBCCCC 5px 6px)` + `border-bottom` + `border-left` `#E9E5E8`.
  - BL cell: H1 box `padding:40px`: PP Formula SemiExtended 700 **60/78** -1.848px #14141C (solid), 910 wide; summary row `padding:40px; gap:30px; border-top:1px solid #E9E5E8`: P 20/30 300 (dek).
  - BR cell: empty, `border-left:1px solid #E9E5E8`.
  - Metadata strip: `MetaRows` 12px, centred, `gap:40px; padding:20px 40px` (Stage / Features / Industry / Company size).
- **StoryDetails** (`…CustomerStoryDetails__Wrapper.*`): row with cartesian grid backdrop and `border-top:1px solid #E9E5E8`; inner `display:flex; gap:20px; padding:30px 40px; max-width:1320`. 3 GlassCards 400 wide (static), `padding:40px`: H4 heading-4; card 1 P 14/22 300 (`margin:20px 0 22px`) + secondary md Button "View website" (external company URL); cards 2–3 `<ul>` `flex column; gap:10px; padding-left:20px; margin-top:20px; list-style:circle` 14/22.
- **StoryBody** (`…CustomerStoryContent.*`, figma variant shows an inline image): `display:flex; border-top:1px solid #E9E5E8`: hatched gutters 251 wide left/right (`--texture-hatch-img`, opacity .5) + text column 880 (`padding:60px; border-left/right:1px solid #E9E5E8; font-family: IBM Plex Sans`) with RichText (P6). Section headings are H3 PP Formula 800 20/26 wrapped in `<strong>`; pull quotes are ordinary paragraphs starting with a quote mark (no blockquote styling on these 8 stories). Chime/Figma include one `InlineImage__Figure` (`margin-bottom:24px`).
- **RelatedStories** (`…CustomerStoryRelatedStories__Wrapper.*`): `flex column; align-items:center; gap:30px; padding:60px 40px; max-width:1240`; H2 heading-2 "Related stories"; grid of P5 cards `repeat(3, 1fr); gap:20px` (4–6 cards; StubHub has 1).
- 390: header grid single column (374): logo cell, H1 38/49.4 (chime 445 tall), dek, hatched cell, metadata wraps; detail cards stack (1171 tall); body `padding:40px` (gutters hidden); related grid 1 col (294).
- Per-story data: §7.8.

### 4.8 `/resources/events/` + `/resources/guides/` (T8, dark V1) — events 6498 / 10229, guides 5010 / 11012. Header, Footer (dark) REUSE; 1 NEW section each (composed from P8–P11).

- Events (`dom/resources_events--EventsLanding__Wrapper.*`): `EventsLanding` `flex column; gap:80px` → `V1Intro` (H1 "Events", copy "Connect with Hex to learn how to do more with data, together. Find upcoming virtual and in-person events near you.") → body `display:flex; align-items:flex-start`: `SidebarFilter` 255 wide (FILTER: All / Upcoming / On-demand) + content 905 wide: `DarkSectionHeader` (15px calendar icon, "Upcoming") → grid `repeat(2, 442.4px); gap:20px` of `DarkResourceCard` → `DarkSectionHeader` (20px play icon, "On-demand", `margin-top:66px`) → grid (19 cards). Icons use `color: #AD8EB6` inside a `#E3B2B3` wrapper.
- Guides (`dom/resources_guides--GuidesLanding__Wrapper.*`): `V1Intro` (H1 "Guides", "A collection of resources that help you learn how to do more with data, together.") → grid `repeat(3, 373.33px); gap:20px` of 21 `DarkResourceCard`s (image aspect 3446/2352, CTA "Download now"). No filter.
- 390: intro stacks (H1 42/54.6, illustration below), filter above content, grids 1 col (294).
- Data: §7.9.

### 4.9 `/templates/` (T9, dark V1) — 14011 / 25833. Header, Footer (dark) REUSE; 1 NEW section `TemplatesIndex` (composed from P8–P10 + Button).

`dom/templates--TemplatesIndexContent__HeroWrapper.*`. Wrapper max 1240 `padding:0 40px; margin-bottom:100px`. Heading block centred (696 wide, `margin-bottom:80px`): H1 PP Formula SemiExtended 700 60/78 white (`margin-bottom:16px`) "Templates"; P 20/30 300 "From complex ML forecasting to critical business dashboards, Hex lets data teams work together in Python, SQL, and no-code to do more with data, together." Content `display:flex; gap:60px`: `SidebarFilter` 232 (16px options, links: All + 13 categories) + grid column 868 (`flex column; gap:50px`): per category a section: heading row `display:flex; justify-content:space-between; align-items:center` = `DarkSectionHeader` (16px category icon img) + **dark primary Button lg "View all"** (93×50) → `/templates/<category>/`; then grid `repeat(2, 424px); gap:20px` of `TemplatesCard`s (2–4 per category). 13 categories, data §7.10.
- 390: sidebar becomes a 304px list on top; grid 1 col (294).

### 4.10 `/resources/guides/ai-analytics/` (T10, guide landing) — 4515 / 7791. Header, Footer REUSE; InfoText, TronDivider, CartesianGrid REUSE; 5 NEW.

This is a solutions-style landing page (same family as the `/solutions/*` pages being specced by the other recon agent: `SolutionResourceCard`, `sharedStyles__Section`, `CustomerGridItem`, `OutroTout`). If that spec defines them first, reuse those; values here are measured on this page.

| # | Section | y / h | Status |
|---|---|---|---|
| 1 | Hero (H1 two-line, copy) + dark guide-download card | 0 / 1006 | NEW `GuideHero` + `GuideDownloadCard` |
| 2 | Companion podcast (InfoText + 2 episode cards) | 1007 / 591 | NEW `PodcastEpisodes` (left = REUSE `InfoText` with description, icon `AbstractMark10`) |
| 3 | "We're obsessed with this stuff" resource cards | 1599 / 1173 | NEW `ResourceCardsGrid` (`SolutionResourceCard`) over REUSE `CartesianGrid` |
| 4 | "See it in action" customer quote tiles | 2773 / 585 | NEW `CustomerQuoteTiles` (`CustomerGridItem`) |
| 5 | Tron divider + "Questions? Talk to us" | 3358 / 571 | REUSE `TronDivider` + NEW `OutroCard` |
| 6 | Footer | 3929 / 555 | REUSE |

- **GuideHero** (`dom/resources_guides_ai-analytics--AIAnalyticsHero__Wrapper.*`): `flex column; align-items:center; gap:50px; padding:224px 0 80px`. Text 784 centred `gap:10px`: H1 gradient: "Stop fielding questions." SemiExtended 60/78 + `<span style="display:flex; align-items:center; gap:20px; margin-top:-11.2px">` "Start enabling answers." Editorial 200 italic 78/101.4 flanked by short rules (the gap holds decorative line pseudo-elements); P 20/30 300 `max-width:640px` "Conversational analytics is the next evolution of BI, but requires a different approach. Hex has created comprehensive resources to help your organization adopt and scale self-service."
- **GuideDownloadCard**: wrapper 1000 wide `padding:5px`, dashed guide lines (`1px dashed #DBD7DA`) extending 10px past each side; GlassCard → dark inner `background:#14141C; padding:20px` (dark tokens) with 21×21 corner ticks (`1px solid #3A3138`); grid `632px 316px / 145px 186.5px` bordered `1px solid #3A3138` (cell rules same): TL H2 heading-2 white gradient "The Data Leader's Guide to AI Analytics"; TR download icon 15px #E3B2B3 (top-right); BL P 16/24 300 #F5C0C0 "A practical roadmap for understanding and implementing AI to accelerate your data team and enable true self-service." + actions `gap:15px`: dark primary lg `<button>` "Download the guide" (opens a gated form modal; not cloneable, see Gaps) + dark secondary lg "Request a demo" → `/request-a-demo/`; BR art SVG (`guides-ai-analytics/svg/SectionGuideDownload-BottomRight-*.svg`, 16:9, rose).
- **PodcastEpisodes** (`…SectionPodcasts__Wrapper.*`): row `padding:80px 40px`; `display:flex; align-items:center; gap:60px`: InfoText 334 (icon 60, H3 heading-3 "Beyond the guide: A companion podcast", P 16/24 300 description) | vertical divider (0 wide, full height; border via CSS) | episodes `flex; gap:20px`: 2 GlassCards 343×431 (interactive): media 343×193 (episode jpg, natural 1920×1080) with centred `FloatyDarkButton` "Watch podcast" (179×50, `padding:0 22.5px; gap:8px; 16/25.14 white; background: rgba(20,20,28,.88); border-radius:60px; box-shadow:<glass>`; hover bg `#14141C`; 15px play icon #E3B2B3); content `padding:30px; gap:4px`: H4 heading-4 + P 16/24 300. Episodes: "Episode 1: Why conversational analytics is different" — "Understanding the fundamental shift from traditional BI — with Katie Bauer, Head of Data at Hex."; "Episode 2: What it takes to deploy AI analytics in the real world" — "Practical lessons from helping data teams navigate AI-powered workflows — with Tahlia, Customer Engineer at Hex."
- **ResourceCardsGrid** (`…SectionBlogPosts__ResourcesGrid.*`): section `flex column; align-items:center; gap:40px`; heading `gap:10px` H2 heading-2 "We're obsessed with this stuff" + P 20/30 balance (772) "More thinking on why self-service is finally real, how to evaluate AI tools, and why dashboards were never the destination."; cards `display:flex; flex-wrap:wrap; justify-content:center; gap:20px` (3 + 2), each `<a>` → GlassCard 373×403 (interactive, no padding): media 373×227 `padding:20px` with backdrop illustration SVG (opacity .35, top radius 12) and a 16:9 frame 333×187 (`background:#FCF8F8; border:1px solid rgba(92,177,152,.42)` = solution color) holding the post image; content `padding:24px; gap:10px`: type chip "Blog post" (Cinetype Mono 10, `padding:1px 4px; background:#FCF8F8; border:1px solid #D1CCD1`), H4 heading-4, metadata rows (Cinetype Mono 10 ls .833): "Solution/ Data leader" (tag `#5CB198`; "Product" tag uses its own color), read time "6 min". Cards: "You're probably evaluating AI analytics tools wrong" (6 min) `/blog/evaluating-ai-wrong/`; "Dashboards were never the destination" (4 min) `/blog/dashboards-were-never-the-destination/`; "Your data team is too slow (and accuracy won't save you)" (7 min) `/blog/your-data-team-is-too-slow/`; "Self-serve analytics is finally real (and that's terrifying)" and "How I used Hex's AI to get fully up to speed on our sales data" (see DOM for hrefs).
- **CustomerQuoteTiles** (`…SectionCustomerStories__CustomersGrid.*`): H2 "See it in action" + P "Leading data teams at Figma, PandaDoc, and Project0 share what changes when everyone can work alongside agents using natural language."; grid `repeat(3, 373.3px); gap:20px`, each tile = primary-button-styled `<a>` 373×263 (gradient border, rose fill, corner lines on hover, i.e. `Button` primary with custom children) → content `padding:30px; flex column; center`: grayscale logo 50 tall, quote divider (IBM Plex Mono 32 row with a 15px quote icon between rules, `margin:25px 0 15px`), quote 14/22 centred. Tiles: Figma → `/customers/figma/` "With Hex’s Notebook Agent, I never have to build another chart again? What a dream come true. - Molly Jane Nicholas, Senior Researcher"; PandaDoc "My favorite thing about Threads is that it writes out formulas for metrics and identifies any issues with the data."; Project0 "The Notebook Agent has been intelligent about writing the query and analyzing the outputs".
- **OutroCard** (`…OutroTout__Wrapper.*`): `TronDivider` (9 lines, 61 tall, `margin-bottom:30px`) then centred GlassCard-like box 565×340 `padding:68px 60px; gap:30px; border:1px solid rgba(49,38,59,.15)` with corner lines: H2 heading-2 "Questions? Talk to us" + P 20/30 balance "Get in touch with us to see a demo or find out which plan is right for you." + primary lg Button "Contact Sales" → `/request-a-demo/`.
- 390: hero padding-top 224, H1 48/62.4 (box 386 wide); download card stacks (grid columns become rows); podcasts stack; resource cards 1 col; tiles 1 col (350); outro 374.

### 4.11 `/state-of-data-teams/` (T11, report microsite) — 11085 / 14117. **No Header / Footer.** Faq REUSE; 5 NEW sections (+ `SurveyQuestion`, `SotdFullQuote` sub-components).

Shell (`dom/state-of-data-teams--PageShell.css`): `PageShell__Wrapper` `position:relative; min-height:100vh; background:#FFFCFC; color:#43394C`; `::before` (z 1) `linear-gradient(#F5C0C0, transparent 25%, transparent 75%, #F5C0C0)` over the whole page; `::after` paper texture `opacity:.1`. Vertical lines layer (`PageShell__VerticalLinesWrapper`, max 1500, z 1): 5 hairlines `1px rgba(0,0,0,.06)` at x 80, 400, 720, 1040, 1360 (every 320px). Content `PageShell` `flex column; gap:80px; padding:80px; max-width:1500px; z-index:2` (1280 wide). Every major block has `border-top:1px solid rgba(0,0,0,.08)`; sub-blocks `1px dashed rgba(0,0,0,.08)`.

| # | Section | y / h | Status |
|---|---|---|---|
| 1 | Hero: Hex logo, "The State of DATA TEAMS" artwork, "Issue 02" + about copy | 80 / 577 | NEW `SotdHero` |
| 2 | Intro (H2 + 6 paragraphs) + Key findings card | 737 / 842 | NEW `SotdIntro` |
| 3 | Table of contents (5 number cards) | 1659 / 389 | NEW `SotdToc` |
| 4–7 | Sections 01–04 (number header, two-ups with chart PNGs, survey question chips, full-width pull quote) | 2128–8295 | NEW `SotdSection` (+ `SurveyQuestion`, `SotdFullQuote`) ×4 |
| 8 | Section 05 outro text + "Questions? Talk to us." card | 9453 / 721 | NEW `SotdOutro` |
| 9 | FAQs | 10254 / 751 | REUSE `Faq` (title node "FAQs" Editorial 48/55.2 italic; dividers `rgba(0,0,0,.08)`; 7 items; footer "Can't find your answer here? Get in touch.") |

- Typography (sharedStyles): HeadingTwo **PP Editorial New 200 italic 64/64** #14141C (`padding-bottom:10px` when followed by text); HeadingThree Editorial 200 italic 48/55.2; Eyebrow Editorial 48/55.2 ("Issue 02", `padding:0 10px`, between 1px #31263B side rules); running text Cinetype 300 20/30 #31263B with `<span>` weight 600 emphasis; `RunningText` gap 20px.
- **SotdHero**: Hex wordmark 104×40 (`state-of-data-teams/svg/SectionHero-HexLogoWrapper-*.svg`, #31263B); row `display:flex; align-items:flex-end; gap:100px; margin-top:80px`: H1 (sr-only text "State of Data Teams 2026") with the 780×450 hatched wordmark SVG (`…SectionHero-LogoWrapper-*.svg`); context column 400 (`gap:40px`): eyebrow row (1px #31263B left/right rules) "Issue 02"; 2 paragraphs (about this survey; link "first State of Data Teams Report" → `/state-of-data-teams/2025/`).
- **SotdIntro**: `display:flex; gap:80px`: main 715 (H2 "Data teams are hitting the gas on AI – but trust remains a concern" + 6 paragraphs) | Key findings GlassCard 485 `padding:40px; gap:40px`: H3 "Key findings" + `<ul>` `gap:30px` of 6 items 16/24 300.
- **SotdToc**: H2 "Table of contents"; `<ol>` `display:flex; flex-wrap:wrap; gap:20px`: 5 GlassCards 240×284 `padding:30px; gap:10px` → number Editorial 200 italic 60/94.26 + title 20/30 300; hover: card bg `#14141C` (`::before` overlay opacity 1), number `#F5C0C0`, title `#FFFFFF` (`.25s cubic-bezier(.25,.1,.25,1)`) + GlassCard lift. Links `#section_1…5`.
- **SotdSection**: header `display:flex; align-items:center; gap:40px`: number card 120×120 (GlassCard with `background:#14141C`, H3 "01" Editorial 48 `#F5C0C0`) + H2 title (sr-only prefix "01 —"); lead P 20/30; two-ups `display:flex; align-items:center; gap:100px; border-top:1px dashed rgba(0,0,0,.08)`: text 472 (H3 48/55.2 + paragraphs) and chart 708 (alternating sides): optional `SurveyQuestion` chip (GlassCard `padding:10px 18px; font-style:italic`, Cinetype Mono 14/18.2 -0.7px #31263B) + caption (Cinetype Mono 14/18.2) above a chart PNG (`state-of-data-teams/sodt-chart-N.png`, natural ~1446×1264, max-width 723). Full quote (`padding-top:26px`): box max 800 `padding:50px 40px 40px; gap:10px; border-top:1px dotted rgba(0,0,0,.25)` centred, question chip absolutely on the top edge, quote Cinetype 300 **48/57.6** #31263B, author Cinetype Mono 12 ls .9996.
- **SotdOutro** (`dom/state-of-data-teams--Section5.*`): `display:flex; align-items:flex-start; gap:80px`: running text 840 (6 paragraphs) | GlassCard 360×388 `padding:40px; gap:20px`: H2 Editorial 64/64 balance "Questions? Talk to us." + P 20/30 + primary lg Button "Get started for free" → `https://app.hex.tech/signup`.
- 390: shell padding 30px; everything single column (330 wide); TOC cards wrap 2-up; FAQ 330.
- Data: §7.11.

---

## 5. Motion (all measured)

Technology as on the homepage: Framer Motion + CSS; no GSAP/Lottie/WebGL. Two runtime canvases (blog commit graph; nav callout from the homepage).

| What | Trigger | Spec |
|---|---|---|
| Row reveals (all BasicPageRow pages, Footer) | in view, once | Homepage `SimpleFadeIn`: `opacity 0, y 5` → `1, 0`, spring delay .2 duration .45 bounce 0 (measured `opacity:0; transform: translateY(5px)` before reveal on About rows 3–5). |
| Careers photo wall | after all hero images preload (≈ load + decode) | Per photo `opacity 0→1`, `filter blur(8px)→blur(0)`, **300ms `cubic-bezier(.22,1,.36,1)`**, ≈10ms stagger in row order (38 photos, ≈356ms spread). |
| AnimatedCta hover | hover | Corner circles `scale 1→0` `.3s cubic-bezier(1,-.4,.35,.95)`, delays 0/.04/.08/.12s; corner lines `opacity 0→1` + sweep (`translate ±100%`) `.4s var(--out-cubic)`; fill `::after` opacity .3. |
| GlassCard (interactive) hover | hover | `translateY(-4px)` + deeper shadow, 529.33ms spring `linear()` (overshoot 2%). |
| Customers featured fan | static | `--story-offset` -80/-35/0/-35/-80px (no scroll linkage, verified at scrollY 0/150/300/600). Hover: card lift + "Read story" strip `opacity 0→1, translateY(10→0)` .25s `cubic-bezier(.25,.1,.25,1)`. |
| Quotes marquee | always | Two tracks of 6 repeated sets (27120px), `140s linear infinite` (row 2 reversed, `-70s` delay). ≈ 4520px per 23.3s. |
| Blog primary card | hover | Perlin noise opacity .16→.72 (`.3s ease-out`), bg tint removed; `translate-bg 36s linear infinite` always running. |
| Blog CTA circles | hover of a post card | `opacity` .16s + `transform` .36s `cubic-bezier(.175,.885,.32,1.1)`; meta lines `translateX(56px)` .28s same easing, delays .016s/.032s; icon `rotate 12s linear infinite` (6 instances running). |
| Careers sidebar / blog category filter | click | active item highlight; earlier siblings `translateY(-10px | -24px)`, later `+10 | +24px`, opacity .6; `.18s cubic-bezier(.25,.1,.25,1)`. |
| Open-role rows | hover | bg tint; title `translateX(20px)`, location `translateX(-20px)`, `.18s cubic-bezier(.25,.1,.25,1)`. |
| SidebarFilter (V1) | click/route | highlight bar `top` `.25s ease-in-out`; options opacity `.25s cubic-bezier(.25,.1,.25,1)`. |
| SOTD TOC cards | hover | dark fill + color swap `.25s cubic-bezier(.25,.1,.25,1)` + card lift. |
| Footer emoji rotator, ticker, Perlin `noise 8s` | always | As homepage §6. |

All motion is disabled under `prefers-reduced-motion: reduce` (same global rule as homepage).

## 6. 390 px notes (summary)
Margins 7.8px, nav 56px + 12px top row (light and dark). Typical changes: heading-1 → 38/49.4 (italic spans 1.3em), hero H1s 36.8–48px, two/three-column layouts stack to one column at ≤800 (≤1000 for the blog post aside, careers sidebar, templates/events sidebar which move above content), card grids → 1 col (294–340 wide), photo collages become horizontally overflowing strips. Exact boxes: `reference/pages/company/measurements/summary-390.txt` and the `@390.tree.txt` files; full-page captures `*-390-full.png`.

## 7. Per-page data

### 7.1 About
Hero, banner, investors: see §4.1. Elsewhere cards = newsroom items 1–6 (§7.4). Data-nerd photos: `about/data-nerds-1..13.jpg` (originals; rendered sizes in §4.1).

### 7.2 Careers hero photos
38 photos (`careers/careers-hero-<name>.jpg`, 155px tall, natural 2×): top row lili, mon, debbie, angela, megha, thomas, sara-squared, …; side rows and bottom row per DOM order in `dom/careers--HeroCareers__Wrapper.html` (img `src` order = layout order).

### 7.3 Careers open roles
```json
[
 {
  "dept": "Engineering",
  "description": "Build and scale Hex: AI, notebooks, data apps, and core infrastructure - with a focus on reliability, performance, and shipping often.",
  "learnMore": null,
  "roles": [
   {
    "title": "AI Research Engineer",
    "location": "New York or San Francisco",
    "href": "/careers/ai-research-engineer/"
   },
   {
    "title": "Cloud Security Engineer",
    "location": "Remote - US, San Francisco or New York",
    "href": "/careers/cloud-security-engineer/"
   },
   {
    "title": "Data Person",
    "location": "San Francisco",
    "href": "/careers/data-person/"
   },
   {
    "title": "Engineering Director, AI Engineering",
    "location": "San Francisco or New York",
    "href": "/careers/engineering-director-ai-engineering/"
   },
   {
    "title": "Engineering Lead",
    "location": "San Francisco or New York",
    "href": "/careers/engineering-lead/"
   },
   {
    "title": "Senior IT Systems Engineer",
    "location": "San Francisco",
    "href": "/careers/senior-it-systems-engineer/"
   },
   {
    "title": "Software Engineer, AI Agent",
    "location": "San Francisco or New York",
    "href": "/careers/software-engineer-ai-agent/"
   },
   {
    "title": "Software Engineer, Backend (Product)",
    "location": "Remote - US, San Francisco or New York",
    "href": "/careers/software-engineer-backend-(product)/"
   },
   {
    "title": "Software Engineer, Foundations",
    "location": "Remote - US, San Francisco or New York",
    "href": "/careers/software-engineer-foundations/"
   },
   {
    "title": "Software Engineer, Fullstack",
    "location": "San Francisco or New York",
    "href": "/careers/software-engineer-fullstack/"
   },
   {
    "title": "Software Engineer, Infrastructure",
    "location": "Remote - US",
    "href": "/careers/software-engineer-infrastructure/"
   }
  ]
 },
 {
  "dept": "Product",
  "description": "PM e2e: understand users and the business, set strategy and priorities, shape the roadmap, and partner with designers and engineers to ship.",
  "learnMore": null,
  "roles": [
   {
    "title": "Product Manager (NYC)",
    "location": "New York",
    "href": "/careers/product-manager-(nyc)/"
   },
   {
    "title": "Product Manager (SF)",
    "location": "Remote - US",
    "href": "/careers/product-manager-(sf)/"
   }
  ]
 },
 {
  "dept": "Design",
  "description": "Product and brand design across the full Hex experience: shipping at a high bar for clarity and craft.",
  "learnMore": "https://hex.tech/design",
  "roles": [
   {
    "title": "Brand Designer",
    "location": "Remote - US, San Francisco or New York",
    "href": "/careers/brand-designer/"
   },
   {
    "title": "Web Designer",
    "location": "Remote - US, San Francisco or New York",
    "href": "/careers/web-designer/"
   }
  ]
 },
 {
  "dept": "Marketing",
  "description": "Brand, demand, and product marketing that introduce Hex to teams rethinking data and analytics.",
  "learnMore": null,
  "roles": [
   {
    "title": "Growth Marketing Manager - Paid Marketing",
    "location": "San Francisco or New York",
    "href": "/careers/growth-marketing-manager-paid-marketing/"
   }
  ]
 },
 {
  "dept": "Partnerships",
  "description": "Forge strategic alliances that expand Hex’s reach and create value for customers and partners.",
  "learnMore": null,
  "roles": [
   {
    "title": "Partner Manager, SIs",
    "location": "Remote - US",
    "href": "/careers/partner-manager-sis/"
   },
   {
    "title": "Partner Solutions Engineer",
    "location": "Remote - US",
    "href": "/careers/partner-solutions-engineer/"
   }
  ]
 },
 {
  "dept": "Sales",
  "description": "Consultative go-to-market: help teams evaluate and adopt Hex, then deepen partnerships as they scale.",
  "learnMore": null,
  "roles": [
   {
    "title": "Account Executive, Commercial",
    "location": "New York or San Francisco",
    "href": "/careers/account-executive-commercial/"
   },
   {
    "title": "Deal Desk Manager",
    "location": "Remote - US",
    "href": "/careers/deal-desk-manager/"
   },
   {
    "title": "Enterprise Account Executive",
    "location": "Remote - US, San Francisco or New York",
    "href": "/careers/enterprise-account-executive/"
   },
   {
    "title": "Founding Commercial Account Manager",
    "location": "New York",
    "href": "/careers/founding-commercial-account-manager-/"
   },
   {
    "title": "Founding Expansion Account Executive (Commercial)",
    "location": "New York",
    "href": "/careers/founding-expansion-account-executive-(commercial)/"
   },
   {
    "title": "Manager, Enterprise Sales",
    "location": "San Francisco",
    "href": "/careers/manager-enterprise-sales/"
   },
   {
    "title": "Mid-Market Account Executive",
    "location": "New York, Remote - US or San Francisco",
    "href": "/careers/midmarket-account-executive/"
   },
   {
    "title": "Revenue Operations Director",
    "location": "Remote - US",
    "href": "/careers/revenue-operations-director/"
   },
   {
    "title": "Revenue Systems",
    "location": "Remote - US",
    "href": "/careers/revenue-systems/"
   },
   {
    "title": "Sales Development Representative",
    "location": "San Francisco or New York",
    "href": "/careers/sales-development-representative/"
   }
  ]
 },
 {
  "dept": "Customer",
  "description": "Partnering with our prospects & customers at every phase to address their pre-sales evaluation, activation and ongoing support needs.",
  "learnMore": "https://hexhq.notion.site/the-customer-team-hex",
  "roles": [
   {
    "title": "Customer Engineer",
    "location": "San Francisco",
    "href": "/careers/customer-engineer/"
   },
   {
    "title": "Sales Engineer, Commercial Mid-Market",
    "location": "New York, Remote - US (EST), San Francisco or Remote - US (PST)",
    "href": "/careers/sales-engineer-commercial-midmarket/"
   },
   {
    "title": "Sales Engineer, Enterprise",
    "location": "Remote - US, San Francisco or New York",
    "href": "/careers/sales-engineer-enterprise/"
   },
   {
    "title": "Sales Engineering Manager, Commercial",
    "location": "New York",
    "href": "/careers/sales-engineering-manager-commercial/"
   }
  ]
 },
 {
  "dept": "People",
  "description": "Recruiting, people programs, and ops: the team behind hiring, growth, and day-to-day life at Hex.",
  "learnMore": null,
  "roles": [
   {
    "title": "Head of Talent",
    "location": "San Francisco or New York",
    "href": "/careers/head-of-talent/"
   },
   {
    "title": "Recruiting Coordinator",
    "location": "San Francisco",
    "href": "/careers/recruiting-coordinator/"
   },
   {
    "title": "Recruiting Operations Manager",
    "location": "New York or San Francisco",
    "href": "/careers/recruiting-operations-manager/"
   },
   {
    "title": "Technical Sourcer",
    "location": "New York or San Francisco",
    "href": "/careers/technical-sourcer/"
   }
  ]
 },
 {
  "dept": "University",
  "description": "Internships and early-career roles: learn the business and ship real product work alongside FT Hex folks.",
  "learnMore": null,
  "roles": [
   {
    "title": "AI Engineer Intern",
    "location": "San Francisco",
    "href": "/careers/ai-engineer-intern/"
   },
   {
    "title": "Product Engineer Intern",
    "location": "San Francisco",
    "href": "/careers/product-engineer-intern/"
   }
  ]
 },
 {
  "dept": "Legal",
  "description": null,
  "learnMore": null,
  "roles": [
   {
    "title": "Legal Ops",
    "location": "New York",
    "href": "/careers/legal-ops/"
   }
  ]
 }
]
```
Safety callout: H4 "Your safety matters to us" + 2 paragraphs (copy in `dom/careers--OpenRolesTout__Wrapper.html`).

### 7.4 Newsroom items (featured + 33 cards, newest first)
```json
{
 "featured": {
  "title": "Hex raises a $70 million Series C to double down on data in the AI era",
  "outlet": "Fortune",
  "date": "May 28, 2025",
  "href": "https://fortune.com/2025/05/28/exclusive-hex-raises-a-70-million-series-c-to-double-down-on-data-in-the-ai-era/",
  "image": "pages/company/newsroom/hex-raises-a-70-million-series-c-to-double-down--63e6d939.webp"
 },
 "cards": [
  {
   "title": "The Evolution of Data Teams with Hex and Rivian",
   "outlet": "Databricks Data + AI Summit",
   "date": "June 17, 2026",
   "href": "https://www.databricks.com/dataaisummit/session/sponsored-hex-evolution-data-teams-hex-and-rivian",
   "image": "pages/company/_shared/the-evolution-of-data-teams-with-hex-and-rivian-21ec0e8c.png"
  },
  {
   "title": "Welcome to Our Data Benchmark, Where Everything's Made Up and the Points Don't Matter",
   "outlet": "AI Council",
   "date": "June 17, 2026",
   "href": "https://www.aicouncil.com/talks/641020b9-2981-4941-abf3-49ccd44cc546",
   "image": "pages/company/_shared/welcome-to-our-data-benchmark-where-everything-s-7ceebe4c.jpg"
  },
  {
   "title": "How the World Cup Works with Hex",
   "outlet": "Sportsball",
   "date": "June 12, 2026",
   "href": "https://www.instagram.com/reel/DZc1E9PJWMZ/",
   "image": "pages/company/_shared/how-the-world-cup-works-with-hex-0f2ca755.jpg"
  },
  {
   "title": "Accelerating the Agentic Era: Celebrating the 2026 Snowflake Partner Award Winners",
   "outlet": "Snowflake",
   "date": "June 2, 2026",
   "href": "https://www.snowflake.com/en/blog/2026-summit-partner-awards/",
   "image": "pages/company/_shared/accelerating-the-agentic-era-celebrating-the-202-5f033010.png"
  },
  {
   "title": "Dashboards to decisions: How AI is closing the gap between insight & action",
   "outlet": "The Airwallex Podcast",
   "date": "May 18, 2026",
   "href": null,
   "image": "pages/company/_shared/dashboards-to-decisions-how-ai-is-closing-the-ga-9eb891e1.jpg"
  },
  {
   "title": "The Evolving Role of the Data Analyst",
   "outlet": "Powered by Data",
   "date": "April 21, 2026",
   "href": "https://www.poweredbydata.com/podcast/the-evolving-role-of-the-data-analyst",
   "image": "pages/company/_shared/the-evolving-role-of-the-data-analyst-d5b6cf41.png"
  },
  {
   "title": "The journey to Agentic BI",
   "outlet": "Thiago Baldim",
   "date": "April 15, 2026",
   "href": "https://medium.com/@thiagobaldim/the-journey-to-agentic-bi-617975c106b7",
   "image": "pages/company/newsroom/the-journey-to-agentic-bi-3421e8c9.jpg"
  },
  {
   "title": "How Hex builds AI agents that reason like human data analysts",
   "outlet": "Max Agency Podcast",
   "date": "April 9, 2026",
   "href": "https://www.youtube.com/watch?v=Xyh1EqcjGME",
   "image": "pages/company/newsroom/max-agency-podcast-logo-0130621e.jpg"
  },
  {
   "title": "Hex Acquires Hashboard to Accelerate the Future of Data Insights",
   "outlet": "Newswire",
   "date": "April 30, 2025",
   "href": "https://www.newswire.com/news/hex-acquires-hashboard-to-accelerate-the-future-of-data-insights-22564296",
   "image": "pages/company/newsroom/hex-acquires-hashboard-to-accelerate-the-future--0161c12c.png"
  },
  {
   "title": "Hex Launches Consulting Partner Program to Revolutionize Data Analytics Collaboration",
   "outlet": "Newswire",
   "date": "January 28, 2025",
   "href": "https://www.newswire.com/news/hex-launches-consulting-partner-program-to-revolutionize-data-22507184",
   "image": "pages/company/newsroom/hex-launches-consulting-partner-program-to-revol-59bd88e3.png"
  },
  {
   "title": "YC Continuity head targets $350M growth-stage fund",
   "outlet": "TechCrunch",
   "date": "November 14, 2023",
   "href": "https://techcrunch.com/2023/11/14/former-yc-continuity-head-targets-350-million-growth-stage-fund/",
   "image": "pages/company/newsroom/yc-continuity-head-targets-350m-growth-stage-fun-dc327444.jpg"
  },
  {
   "title": "The Stellar Big Data Startups to know in 2023",
   "outlet": "CRN",
   "date": "November 13, 2023",
   "href": "https://www.crn.com/news/software/these-are-the-stellar-big-data-startups-to-know-in-2023?page=7",
   "image": "pages/company/newsroom/the-stellar-big-data-startups-to-know-in-2023-331cc49a.jpg"
  },
  {
   "title": "Snowflake stresses app development in flurry of rollouts",
   "outlet": "Silicon Angle",
   "date": "June 27, 2023",
   "href": "https://siliconangle.com/2023/06/27/snowflake-stresses-app-development-flurry-rollouts/",
   "image": "pages/company/newsroom/snowflake-stresses-app-development-in-flurry-of--ef5c1afe.jpg"
  },
  {
   "title": "Run Hex Inside of Snowflake",
   "outlet": "NewsWire",
   "date": "June 27, 2023",
   "href": null,
   "image": "pages/company/newsroom/run-hex-inside-of-snowflake-576a90b2.jpg"
  },
  {
   "title": "Hex responds to a changing environment for data teams",
   "outlet": "Silicon angle",
   "date": "June 23, 2023",
   "href": "https://siliconangle.com/2023/06/08/hex-technologies-responds-changing-environment-data-teams-awsshowcases3e2/",
   "image": "pages/company/newsroom/hex-responds-to-a-changing-environment-for-data--6f11aac5.jpg"
  },
  {
   "title": "Starburst out-of-the-box connector to Hex",
   "outlet": "CRN",
   "date": "June 20, 2023",
   "href": "https://www.crn.com/news/software/starburst-makes-data-lake-analytics-push-with-galaxy-additions",
   "image": "pages/company/newsroom/starburst-out-of-the-box-connector-to-hex-25439e96.jpg"
  },
  {
   "title": "5 Founders on the future of data",
   "outlet": "a16z editorial",
   "date": "May 16, 2023",
   "href": "https://a16z.com/5-founders-on-the-future-of-data/",
   "image": "pages/company/newsroom/5-founders-on-the-future-of-data-b4d1002c.jpg"
  },
  {
   "title": "Hex is now Google Cloud Ready",
   "outlet": "NewsWire",
   "date": "March 29, 2023",
   "href": "https://www.newswire.com/news/hex-achieves-google-cloud-ready-bigquery-and-cloud-ready-alloydb-21990198",
   "image": "pages/company/newsroom/hex-is-now-google-cloud-ready-db2d5919.jpg"
  },
  {
   "title": "Expert Panel: Data Analytics in 2023 and Beyond",
   "outlet": "eWeek",
   "date": "December 11, 2022",
   "href": "https://www.eweek.com/big-data-and-analytics/expert-panel-data-analytics-2023/",
   "image": "pages/company/newsroom/expert-panel-data-analytics-in-2023-and-beyond-3f88fc76.jpg"
  },
  {
   "title": "The Future of Analytics is Polyglot",
   "outlet": "dbt Coalesce 2021",
   "date": "October 11, 2022",
   "href": "https://www.getdbt.com/coalesce-2021/toward-a-polyglot-environment-for-analytics/",
   "image": "pages/company/newsroom/the-future-of-analytics-is-polyglot-379607a8.jpg"
  },
  {
   "title": "Hex Wants to Build the Frontend for the Modern Data Stack",
   "outlet": "The New Stack",
   "date": "July 25, 2022",
   "href": "https://thenewstack.io/hex-wants-to-build-the-frontend-for-the-modern-data-stack/",
   "image": "pages/company/newsroom/hex-wants-to-build-the-frontend-for-the-modern-d-19ba2a19.jpg"
  },
  {
   "title": "Beyond Linear Notebooks: Implementing Reactivity with IPython",
   "outlet": "Data Council 2022",
   "date": "April 14, 2022",
   "href": "https://www.youtube.com/watch?v=Qm_LSlNC3r0",
   "image": "pages/company/newsroom/beyond-linear-notebooks-implementing-reactivity--9f9f8b11.jpg"
  },
  {
   "title": "Hex scores $52M Series B to grow data science collaboration platform",
   "outlet": "TechCrunch",
   "date": "March 22, 2022",
   "href": "https://techcrunch.com/2022/03/22/hex-scores-52m-series-b-to-grow-data-science-collaboration-platform/",
   "image": "pages/company/newsroom/hex-scores-52m-series-b-to-grow-data-science-col-a388e73e.jpg"
  },
  {
   "title": "Enterprise Tech 30 Interview",
   "outlet": "NASDAQ Spotlight",
   "date": "March 10, 2022",
   "href": "https://www.nasdaq.com/videos/enterprise-tech-30%3A-barry-mccardel",
   "image": "pages/company/newsroom/enterprise-tech-30-interview-2cda2846.jpg"
  },
  {
   "title": "Collaborating on Data Projects",
   "outlet": "Software Engineering Daily",
   "date": "February 17, 2022",
   "href": "https://softwareengineeringdaily.com/2022/02/17/hex-collaborative-data-workspace-with-barry-mccardel-and-caitlin-colgrove",
   "image": "pages/company/newsroom/collaborating-on-data-projects-319f7cec.jpg"
  },
  {
   "title": "Hex selected for Enterprise Tech 30",
   "outlet": "NASDAQ and WingVC",
   "date": "January 1, 2022",
   "href": "https://www.enterprisetech30.com",
   "image": "pages/company/newsroom/hex-selected-for-enterprise-tech-30-d97ebb9a.jpg"
  },
  {
   "title": "8 analytics startups to watch over the next year",
   "outlet": "TechTarget",
   "date": "December 13, 2021",
   "href": "https://www.techtarget.com/searchbusinessanalytics/feature/8-analytics-startups-to-watch-over-the-next-year",
   "image": "pages/company/newsroom/8-analytics-startups-to-watch-over-the-next-year-3c0947b9.jpg"
  },
  {
   "title": "Hex - The Best Product for the Technical Analyst",
   "outlet": "Tomasz Tunguz",
   "date": "October 19, 2021",
   "href": "https://tomtunguz.com/hex/",
   "image": "pages/company/newsroom/hex-the-best-product-for-the-technical-analyst-5baf24e0.jpg"
  },
  {
   "title": "Hex — A New Collaborative, Interactive Notebook for SQL and Python",
   "outlet": "Medium / Short Bit",
   "date": "October 18, 2021",
   "href": "https://medium.com/short-bits/hex-a-new-collaborative-interactive-notebook-for-sql-and-python-154b8e4170e1",
   "image": "pages/company/newsroom/hex-a-new-collaborative-interactive-notebook-for-e3c9b91e.jpg"
  },
  {
   "title": "Empowering the \"Analytically Technical\"",
   "outlet": "The New Normal Newsletter",
   "date": "October 13, 2021",
   "href": null,
   "image": "pages/company/newsroom/empowering-the-analytically-technical-f832dbf4.jpg"
  },
  {
   "title": "A Deep Dive into Hex and the Future of Data Apps",
   "outlet": "Hightouch",
   "date": "October 6, 2021",
   "href": "https://hightouch.io/blog/hex-data-and-the-future-of-apps/",
   "image": "pages/company/newsroom/a-deep-dive-into-hex-and-the-future-of-data-apps-0d227397.jpg"
  },
  {
   "title": "On the Magic of Building Data Apps Instead of Reports",
   "outlet": "The Analytics Engineering Podcast",
   "date": "September 9, 2021",
   "href": "https://roundup.getdbt.com/p/caitlin-colgrove-hex-collaborative-notebooks",
   "image": "pages/company/newsroom/on-the-magic-of-building-data-apps-instead-of-re-b785ea64.jpg"
  },
  {
   "title": "Turning Notebooks Into Collaborative And Dynamic Data Applications With Hex",
   "outlet": "Python Podcast",
   "date": "December 21, 2020",
   "href": "https://www.pythonpodcast.com/hex-collaborative-notebooks-episode-294/",
   "image": "pages/company/newsroom/turning-notebooks-into-collaborative-and-dynamic-164d74a4.jpg"
  }
 ]
}
```

### 7.5 Blog index — first page only
```json
{
 "masthead": {
  "title": "Blog",
  "divider": "POSTS BY CATEGORY",
  "search": "Search posts",
  "stats": "POSTS: 288 | AUTHORS: 84 | LAST UPDATED: 10.21.2026"
 },
 "featured": [
  {
   "title": "Hill climbing to glory: using evals to cut AI errors 7x",
   "href": "/blog/we-used-evals-to-improve-ai-feature/",
   "date": "Oct 8, 2026",
   "readTime": "7min",
   "excerpt": "How 1,800 evals showed us AI feature quality improvements go beyond prompting",
   "author": "David Wilson",
   "tags": "Research",
   "image": "pages/company/blog/hill-climbing-to-glory-using-evals-to-cut-ai-err-3a6f256c.png"
  },
  {
   "title": "The AI data sprawl",
   "href": "/blog/ai-data-sprawl/",
   "date": "Sep 9, 2026",
   "readTime": "2min",
   "excerpt": "Nobody can trace it. The data team still owns the mess.",
   "author": "Barry McCardel",
   "tags": "Data teams",
   "image": "pages/company/blog/the-ai-data-sprawl-57a71c86.png"
  },
  {
   "title": "Introducing DataBench",
   "href": "/blog/databench-agentic-analytics-benchmark/",
   "date": "Aug 13, 2026",
   "readTime": "16min",
   "excerpt": "A frontier benchmark for complex data work and analytical reasoning",
   "author": "Izzy Miller",
   "tags": "Research",
   "image": "pages/company/blog/introducing-databench-105fb1cd.jpg"
  }
 ],
 "recent": [
  {
   "title": "Meta joins the pack",
   "href": "/blog/muse-wonder-databench/",
   "date": "2 days ago",
   "readTime": "7min",
   "excerpt": "Muse Wonder is the first model from outside OpenAI and Anthropic to score alongside their recent models on DataBench.",
   "author": "Izzy Miller",
   "tags": "Research",
   "image": null
  },
  {
   "title": "Greenflash joins Hex",
   "href": "/blog/hex-greenflash/",
   "date": "4 days ago",
   "readTime": "1min",
   "excerpt": "Welcome, Greenflash!",
   "author": "Barry McCardel",
   "tags": null,
   "image": null
  },
  {
   "title": "Before you build that data agent, I have notes.",
   "href": "/blog/before-you-build-that-data-agent-i-have-notes/",
   "date": "Oct 15, 2026",
   "readTime": "7min",
   "excerpt": "Build vs. buy in data has never been hotter. But do you know what you’re signing up for?",
   "author": "Nick Pasquinzo",
   "tags": "Data teams",
   "image": null
  }
 ],
 "feedTitle": "Feed [288]",
 "categories": [
  {
   "name": "Product [87]",
   "href": "/blog/category/product/"
  },
  {
   "name": "Company [15]",
   "href": "/blog/category/company/"
  },
  {
   "name": "Data [66]",
   "href": "/blog/category/data/"
  },
  {
   "name": "Security [3]",
   "href": "/blog/category/security/"
  },
  {
   "name": "Data teams [69]",
   "href": "/blog/category/data-teams/"
  },
  {
   "name": "Design [3]",
   "href": "/blog/category/design/"
  },
  {
   "name": "Engineering [14]",
   "href": "/blog/category/engineering/"
  },
  {
   "name": "Friends of data [20]",
   "href": "/blog/category/friends-of-data/"
  },
  {
   "name": "Research [8]",
   "href": "/blog/category/research/"
  },
  {
   "name": "Further reading [29]",
   "href": "/blog/category/further-reading/"
  }
 ],
 "feed": [
  {
   "title": "Meta joins the pack",
   "href": "/blog/muse-wonder-databench/",
   "date": "2 days ago",
   "readTime": "7min",
   "excerpt": "Muse Wonder is the first model from outside OpenAI and Anthropic to score alongside their recent models on DataBench.",
   "author": "Izzy Miller",
   "tags": "Research"
  },
  {
   "title": "Greenflash joins Hex",
   "href": "/blog/hex-greenflash/",
   "date": "4 days ago",
   "readTime": "1min",
   "excerpt": "Welcome, Greenflash!",
   "author": "Barry McCardel",
   "tags": null
  },
  {
   "title": "Before you build that data agent, I have notes.",
   "href": "/blog/before-you-build-that-data-agent-i-have-notes/",
   "date": "Oct 15, 2026",
   "readTime": "7min",
   "excerpt": "Build vs. buy in data has never been hotter. But do you know what you’re signing up for?",
   "author": "Nick Pasquinzo",
   "tags": "Data teams"
  },
  {
   "title": "Hill climbing to glory: using evals to cut AI errors 7x",
   "href": "/blog/we-used-evals-to-improve-ai-feature/",
   "date": "Oct 8, 2026",
   "readTime": "7min",
   "excerpt": "How 1,800 evals showed us AI feature quality improvements go beyond prompting",
   "author": "David Wilson",
   "tags": "Research"
  },
  {
   "title": "You don't need to migrate those 300 dashboards",
   "href": "/blog/dont-migrate-300-dashboards/",
   "date": "Sep 10, 2026",
   "readTime": "4min",
   "excerpt": "Real self-service means migrating logic, not dashboard UI.",
   "author": "Rachel Herrera",
   "tags": "Data teams"
  },
  {
   "title": "The AI data sprawl",
   "href": "/blog/ai-data-sprawl/",
   "date": "Sep 9, 2026",
   "readTime": "2min",
   "excerpt": "Nobody can trace it. The data team still owns the mess.",
   "author": "Barry McCardel",
   "tags": "Data teams"
  },
  {
   "title": "Introducing: Generative Chart Controls",
   "href": "/blog/generative-chart-controls/",
   "date": "Aug 27, 2026",
   "readTime": "1min",
   "excerpt": "Breaking the tradeoff between code-gen visualization and last-mile precision",
   "author": "Olivia Koshy",
   "tags": "Product"
  },
  {
   "title": "Your next BI tool shouldn't be a BI tool",
   "href": "/blog/next-bi-tool/",
   "date": "Aug 20, 2026",
   "readTime": "4min",
   "excerpt": "BI as an industry has become defined by its ever-changing requirements. But what does it mean today?",
   "author": "Charles Schaefer",
   "tags": "Data"
  },
  {
   "title": "Introducing DataBench",
   "href": "/blog/databench-agentic-analytics-benchmark/",
   "date": "Aug 13, 2026",
   "readTime": "16min",
   "excerpt": "A frontier benchmark for complex data work and analytical reasoning",
   "author": "Izzy Miller",
   "tags": "Research"
  },
  {
   "title": "Introducing Evals",
   "href": "/blog/evals/",
   "date": "Aug 4, 2026",
   "readTime": "4min",
   "excerpt": "Measure Hex Agent performance and test context changes safely before they ship, all from the CLI.",
   "author": "Andrew Lee",
   "tags": "Data teams , Product"
  },
  {
   "title": "Trust used to be implied",
   "href": "/blog/trust-used-to-be-implied/",
   "date": "Jul 29, 2026",
   "readTime": "5min",
   "excerpt": "Evals aren't just how you fix your agent — they're how you convince people to trust it.",
   "author": "Rachel Herrera",
   "tags": "Data teams"
  },
  {
   "title": "Caching is all you need",
   "href": "/blog/caching-is-all-you-need/",
   "date": "Jul 29, 2026",
   "readTime": "7min",
   "excerpt": "Our cache hit rate looked great. Our cost data disagreed. Here's what we found when we stopped trusting the average.",
   "author": "Zach Kirby & Olivia Koshy",
   "tags": "Engineering"
  },
  {
   "title": "Accuracy and AI analytics: How the best data teams obsess over context",
   "href": "/blog/how-data-teams-use-context/",
   "date": "Jul 23, 2026",
   "readTime": "6min",
   "excerpt": "AI analytics depends on context for trusted answers. Here's how data teams at Ramp, Underdog, and Hover build and manage that context with Hex.",
   "author": "James Rajasingh",
   "tags": "Data teams"
  },
  {
   "title": "The life and times of data teams in the AI era",
   "href": "/blog/data-teams-in-ai-era/",
   "date": "Jul 17, 2026",
   "readTime": "12min",
   "excerpt": "When everyone is a data person, what does it mean to be a data team?",
   "author": "Katie Bauer",
   "tags": "Data teams"
  },
  {
   "title": "Building semantic models in Hex: A playbook for governed & trustworthy metrics",
   "href": "/blog/semantic-models-in-hex/",
   "date": "Jul 15, 2026",
   "readTime": "7min",
   "excerpt": "A practical build recipe for Hex admins and data leads",
   "author": "Rafa Carrasco",
   "tags": "Data"
  }
 ],
 "pagination": "single \"View more ( 15 )\" button (loads next 15); no numbered pagination"
}
```

### 7.6 Blog post (article template content skeleton)
```json
{
 "eyebrow": "BLOG (link to /blog/)",
 "title": "Introducing Generative Data Apps",
 "dek": "Code gen 🤝🏼 Hex’s governed platform = build whatever you want",
 "author": "Olivia Koshy",
 "category": "Data teams",
 "date": "May 12, 2026",
 "heroMedia": "YouTube iframe https://www.youtube.com/embed/2FjG6-mq3EA?enablejsapi=1 (16:9, 840x473)",
 "toc": [
  "Any data app, just a prompt away",
  "Backed by your trusted context and a real Hex project",
  "Built with first-class security, permissioning, and governance",
  "Access and pricing"
 ],
 "tldr": "first paragraph starts with bold \"tl;dr:\"",
 "callout": "Want to learn more about Generative data apps? Register for our webinar on May 14th to hear directly from Olivia & our CEO, Barry.",
 "sections": [
  {
   "heading": "(intro)",
   "p": 6,
   "li": 0,
   "media": [
    "video pages/company/blog-post/video-0f7089c9.mp4"
   ]
  },
  {
   "heading": "Any data app, just a prompt away",
   "level": "h2",
   "p": 5,
   "li": 0,
   "media": [
    "video pages/company/blog-post/video-85802d34.mp4",
    "video pages/company/blog-post/video-37d3248e.mp4"
   ]
  },
  {
   "heading": "Backed by your trusted context and a real Hex project",
   "level": "h2",
   "p": 3,
   "li": 5,
   "media": [
    "image pages/company/blog-post/an-image-showing-a-hex-generative-data-app-suppo-05f07ef0.png",
    "image pages/company/blog-post/img-b94e8e0e.jpg"
   ]
  },
  {
   "heading": "Built with first-class security, permissioning, and governance",
   "level": "h2",
   "p": 3,
   "li": 0,
   "media": [
    "video pages/company/blog-post/video-928c0b14.mp4"
   ]
  },
  {
   "heading": "Access and pricing",
   "level": "h2",
   "p": 2,
   "li": 0,
   "media": []
  }
 ],
 "share": [
  "X",
  "LinkedIn"
 ],
 "kicker": {
  "text": "This is something we think a lot about at Hex, where we're creating a platform that makes it easy to build and share interactive data products which can help teams be more impactful. / If this is is interesting, click below to get started, or to check out opportunities to join our team.",
  "buttons": [
   "✨ Get started for free → https://app.hex.tech/signup?source=blog-kicker",
   "👩‍💻 Open roles → /careers/"
  ]
 }
}
```

### 7.7 Customers index
```json
{
 "hero": {
  "italic": "Beloved by users",
  "title": "Customer stories",
  "copy": "Over 2,000 organizations trust Hex to bring the magic of AI to data. Read their stories to learn how teams like yours are scaling insight and impact with AI analytics."
 },
 "featured": [
  {
   "href": "/customers/mercor/",
   "photo": "pages/company/customers/img-ddd62b0d.jpg",
   "logo": "logos/customers/mercor.svg",
   "srTitle": "Mercor unlocked $100M in revenue, scaling dashboards across hundreds of projects"
  },
  {
   "href": "/customers/langchain/",
   "photo": "pages/company/customers/img-a1f5cd22.jpg",
   "logo": "logos/customers/langchain.svg",
   "srTitle": "LangChain Completed a 6-Week Migration, 90% by Hex's Agent"
  },
  {
   "href": "/customers/hubspot/",
   "photo": "pages/company/customers/img-ac0d4e16.jpg",
   "logo": "pages/company/customers/hubspot-030daaf2.svg",
   "srTitle": "Hubspot reduced the fragmented analytics experience, unlocking data accessibility across the org"
  },
  {
   "href": "/customers/reddit/",
   "photo": "pages/company/customers/img-905397b5.jpg",
   "logo": "logos/customers/reddit.svg",
   "srTitle": "Reddit simplified their data journey and increased deep dive insights across the org"
  },
  {
   "href": "/customers/modal/",
   "photo": "pages/company/customers/img-0daa9d7d.jpg",
   "logo": "pages/company/customers/modal-2c947462.svg",
   "srTitle": "Modal unlocked $100M+ in pipeline by using Hex's agent to turn an image into targeted outreach across 15 of the top AI neolabs"
  }
 ],
 "quoteCards(10 per set; row 2 uses its own set of 10, see DOM)": [
  {
   "text": "Threads taps into exactly our imagined value-add of agentic AI for self-serve analytics. We're already seeing immediate success across the company.",
   "attr": "Connor S. Director of Analytics Engineering",
   "logo": "StubHub",
   "stat": false
  },
  {
   "text": "With a 5-sentence prompt, the Notebook Agent was able to build an analysis in 10 minutes that would have taken me hours.",
   "attr": "Nate Almeida Staff Software Engineer",
   "logo": "Topline Pro",
   "stat": false
  },
  {
   "text": "Our data team is 2x more efficient",
   "attr": "Calendly’s data team with Hex",
   "logo": "Calendly",
   "stat": true
  },
  {
   "text": "Powerful analysis, auditable AI, and dashboards that stakeholders love.",
   "attr": "Sumner M. Database Architect - Mid-Market (51-1000 emp.)",
   "logo": null,
   "stat": false
  },
  {
   "text": "4 hours saved for every dashboard built",
   "attr": "Kong’s data team",
   "logo": "Kong",
   "stat": true
  },
  {
   "text": "Without Hex’s experiential layer, these programs couldn't take flight — no matter how good the data was.",
   "attr": "Rie McGwier AI Insights Researcher",
   "logo": "Figma",
   "stat": false
  },
  {
   "text": "Whenever I’ve needed support, whether for questions or to resolve bugs, customer support has always provided helpful answers or solutions.",
   "attr": "Pablo S. Data Engineer/Analyst - Small-Business (50 or fewer emp.)",
   "logo": null,
   "stat": false
  },
  {
   "text": "We spend a lot of time investigating edge cases in metrics. Just today, Threads saved me having to dig into the cause of a metric issue and saved me 20 minutes, it makes us so much faster at this type of work.",
   "attr": "Sumeet M. Head of Data",
   "logo": "Brex",
   "stat": false
  },
  {
   "text": "Hex’s notebook agent just works. I describe what I want and get working SQL back, without having to juggle between tools. It’s made us 10x faster at turning questions into insights.",
   "attr": "Kristian K. Product",
   "logo": "Lovable",
   "stat": false
  },
  {
   "text": "Hex feels like a true data partner for business outcomes.",
   "attr": "Guido V. Senior Product Manager - Mid-Market (51-1000 emp.)",
   "logo": null,
   "stat": false
  }
 ],
 "filters": [
  "All stories",
  "Startup stories",
  "Growth stories",
  "Enterprise stories",
  "Sort by: Recently added"
 ],
 "grid": [
  {
   "href": "/customers/parallel-web-systems/",
   "title": "How 75% of Parallel Web Systems’ team self-serves analytics with Hex",
   "logo": "Parallel Web Systems",
   "meta": [
    "Stage / Startup",
    "Features / Notebook Agent, Threads, Data Apps",
    "Industry / Technology & Software",
    "Company size / 150"
   ],
   "logoFile": "pages/company/_shared/parallel-web-systems-f52ad30d.svg"
  },
  {
   "href": "/customers/chime/",
   "title": "Chime® built a context workflow and eval set that drove 5K additional insights per month via the Hex Agent",
   "logo": "Chime",
   "meta": [
    "Stage / Enterprise",
    "Features / Notebook Agent, Threads",
    "Industry / Technology & Software",
    "Company size / 1,500"
   ],
   "logoFile": "pages/company/_shared/chime-3950f265.svg"
  },
  {
   "href": "/customers/clay/",
   "title": "Clay 3x'd growth, cut SLA by 80%, and increased sales velocity with Snowflake and Hex",
   "logo": "Clay",
   "meta": [
    "Stage / Growth",
    "Features / Notebook Agent, Threads",
    "Industry / Technology & Software",
    "Company size / 1,100"
   ],
   "logoFile": "pages/company/_shared/clay-764a0a59.svg"
  },
  {
   "href": "/customers/langchain/",
   "title": "LangChain Completed a 6-Week Migration, 90% by Hex's Agent",
   "logo": "LangChain",
   "meta": [
    "Stage / Startup",
    "Features / Notebook Agent, Data Apps",
    "Industry / Technology & Software",
    "Company size / 325"
   ],
   "logoFile": "pages/company/_shared/langchain-f556e262.svg"
  },
  {
   "href": "/customers/hubspot/",
   "title": "Hubspot reduced the fragmented analytics experience, unlocking data accessibility across the org",
   "logo": "Hubspot",
   "meta": [
    "Stage / Enterprise",
    "Industry / Technology & Software",
    "Company size / 8,880"
   ],
   "logoFile": "pages/company/_shared/hubspot-a59d0e75.svg"
  },
  {
   "href": "/customers/reddit/",
   "title": "Reddit simplified their data journey and increased deep dive insights across the org",
   "logo": "Reddit",
   "meta": [
    "Stage / Enterprise",
    "Industry / Technology & Software",
    "Company size / 2,600"
   ],
   "logoFile": "pages/company/_shared/reddit-66ef2139.svg"
  },
  {
   "href": "/customers/supabase/",
   "title": "Supabase built workflows in Hex, protecting $300K+ in revenue and resolving tickets 92% faster",
   "logo": "Supabase",
   "meta": [
    "Stage / Growth",
    "Features / Notebook Agent, Threads, Data Apps",
    "Industry / Technology & Software",
    "Company size / 298"
   ],
   "logoFile": "pages/company/_shared/supabase-ca4059dc.svg"
  },
  {
   "href": "/customers/eliseai/",
   "title": "EliseAI cut QBR prep time by 97% and raised the bar on customer conversations",
   "logo": "EliseAI",
   "meta": [
    "Stage / Growth",
    "Features / Notebook Agent, Threads, Data Apps",
    "Industry / Technology & Software",
    "Company size / 547"
   ],
   "logoFile": "pages/company/_shared/eliseai-20327191.svg"
  },
  {
   "href": "/customers/modal/",
   "title": "Modal unlocked $100M+ in pipeline by using Hex's agent to turn an image into targeted outreach across 15 of the top AI neolabs",
   "logo": "Modal",
   "meta": [
    "Stage / Growth",
    "Features / Notebook Agent, Threads",
    "Industry / Technology & Software",
    "Company size / 132"
   ],
   "logoFile": "pages/company/_shared/modal-605335d6.svg"
  },
  {
   "href": "/customers/notion/",
   "title": "Notion democratizes data access: 86% of Notebook Agent users are not data scientists",
   "logo": "Notion",
   "meta": [
    "Stage / Enterprise",
    "Features / Notebook Agent",
    "Industry / Technology & Software",
    "Company size / 1,200"
   ],
   "logoFile": "pages/company/_shared/notion-025b99a0.svg"
  },
  {
   "href": "/customers/kong/",
   "title": "Kong evolved its forecasting approach from guesswork to 36-month utilization forecasts in 30 minutes",
   "logo": "Kong",
   "meta": [
    "Stage / Growth",
    "Features / Notebook Agent, Data Apps",
    "Industry / Technology & Software",
    "Company size / 600"
   ],
   "logoFile": "pages/company/_shared/kong-89b354f9.svg"
  },
  {
   "href": "/customers/algolia/",
   "title": "Algolia saved 260+ hours by building apps to answer recurring questions",
   "logo": "Algolia",
   "meta": [
    "Stage / Growth",
    "Features / Data Apps",
    "Industry / Technology & Software",
    "Company size / 810"
   ],
   "logoFile": "pages/company/_shared/algolia-9192bbde.svg"
  },
  {
   "href": "/customers/neo-financial/",
   "title": "Neo Financial 10.6x their data exploration using Hex’s Slack integration",
   "logo": "Neo Financial",
   "meta": [
    "Stage / Growth",
    "Features / Threads",
    "Industry / Financial Services",
    "Company size / 865"
   ],
   "logoFile": "pages/company/_shared/neo-financial-9585c65f.svg"
  },
  {
   "href": "/customers/mercor/",
   "title": "Mercor unlocked $100M in revenue, scaling dashboards across hundreds of projects",
   "logo": "Mercor",
   "meta": [
    "Stage / Growth",
    "Features / Notebook Agent",
    "Industry / Technology & Software",
    "Company size / 30"
   ],
   "logoFile": "pages/company/_shared/mercor-ce99431b.svg"
  },
  {
   "href": "/customers/figma/",
   "title": "Figma transformed their data pipeline to mature UX research, tracking 2M+ data points",
   "logo": "Figma",
   "meta": [
    "Stage / Enterprise",
    "Features / Notebook Agent",
    "Industry / Technology & Software",
    "Company size / 1,886"
   ],
   "logoFile": "pages/company/_shared/figma-3d96b997.svg"
  },
  {
   "href": "/customers/ramp/",
   "title": "Ramp uses Hex to quickly analyze financial and product data to make faster, better decisions",
   "logo": "Ramp",
   "meta": [
    "Stage / Enterprise",
    "Features / Notebook Agent",
    "Industry / Financial Services",
    "Company size / 2,100"
   ],
   "logoFile": "pages/company/_shared/ramp-c773dfb6.svg"
  },
  {
   "href": "/customers/pandadoc/",
   "title": "PandaDoc uses Hex to quickly analyze data and make better decisions without engineering help",
   "logo": "PandaDoc",
   "meta": [
    "Stage / Growth",
    "Features / Threads",
    "Industry / Technology & Software",
    "Company size / 882"
   ],
   "logoFile": "pages/company/customers/pandadoc-213ba5f0.svg"
  },
  {
   "href": "/customers/whatnot/",
   "title": "Whatnot achieved a 4-8x increase in speed from idea to production with dbt and Hex",
   "logo": "Whatnot",
   "meta": [
    "Stage / Growth",
    "Features / Data Apps",
    "Industry / Retail & E-Commerce",
    "Company size / 979"
   ],
   "logoFile": "pages/company/customers/whatnot-4d062309.svg"
  },
  {
   "href": "/customers/huckberry/",
   "title": "Huckberry saved $1M in inventory with a forecasting app",
   "logo": "Huckberry",
   "meta": [
    "Stage / Startup",
    "Features / Data Apps",
    "Industry / Retail & E-Commerce",
    "Company size / 150"
   ],
   "logoFile": "pages/company/customers/huckberry-6b9102ba.svg"
  },
  {
   "href": "/customers/calendly/",
   "title": "Calendly's analytics team is 2x more efficient in Hex",
   "logo": "Calendly",
   "meta": [
    "Stage / Growth",
    "Features / Data Apps, Notebook Agent",
    "Industry / Technology & Software"
   ],
   "logoFile": "pages/company/_shared/calendly-70d9343d.svg"
  },
  {
   "href": "/customers/alltrails/",
   "title": "AllTrails' data team has churned out a steady stream of analysis, from internal benchmarking to evaluating the effectiveness of metrics",
   "logo": "AllTrails",
   "meta": [
    "Stage / Growth",
    "Features / Data Apps",
    "Industry / Technology & Software",
    "Company size / 378"
   ],
   "logoFile": "pages/company/_shared/alltrails-c5cb27f1.svg"
  },
  {
   "href": "/customers/clickup/",
   "title": "Hex has helped ClickUp save more than $1M in churn",
   "logo": "ClickUp",
   "meta": [
    "Stage / Growth",
    "Features / Data Apps",
    "Industry / Technology & Software",
    "Company size / 1,500"
   ],
   "logoFile": "pages/company/customers/clickup-fa22f2f8.svg"
  },
  {
   "href": "/customers/doximity/",
   "title": "Doximity completely transitioned off Jupyter Notebooks with Hex and Snowflake",
   "logo": "Doximity",
   "meta": [
    "Stage / Enterprise",
    "Features / Data Apps",
    "Industry / Healthcare & Life Sciences",
    "Company size / 915"
   ],
   "logoFile": "pages/company/customers/doximity-b28460d9.svg"
  },
  {
   "href": "/customers/orchard-insights/",
   "title": "Orchard Insights uses Hex for all KPI reporting and as their R&D platform for prototyping data products",
   "logo": "Orchard Insights",
   "meta": [
    "Stage / Startup",
    "Features / Data Apps",
    "Industry / Professional Services",
    "Company size / 30"
   ],
   "logoFile": "pages/company/customers/orchard-insights-4e79e199.svg"
  },
  {
   "href": "/customers/modern-treasury/",
   "title": "Modern Treasury empowered engineers to self-serve in Hex, freeing the data team to focus on strategic projects",
   "logo": "Modern Treasury",
   "meta": [
    "Stage / Startup",
    "Features / Data Apps",
    "Industry / Financial Services",
    "Company size / 160"
   ],
   "logoFile": "pages/company/_shared/modern-treasury-4babb234.svg"
  },
  {
   "href": "/customers/matter-labs/",
   "title": "Matter Labs went from getting started tutorials to production-ready dashboards in less than three days",
   "logo": "Matter Labs",
   "meta": [
    "Stage / Startup",
    "Features / Data Apps",
    "Industry / Technology & Software",
    "Company size / 150"
   ],
   "logoFile": "pages/company/_shared/matter-labs-cb4d69f5.svg"
  },
  {
   "href": "/customers/stubhub/",
   "title": "StubHub empowered business analysts to explore and dig into data on their own with Hex",
   "logo": "StubHub",
   "meta": [
    "Stage / Growth",
    "Features / Data Apps",
    "Industry / Media & Entertainment",
    "Company size / 895"
   ],
   "logoFile": "pages/company/_shared/stubhub-2e43c766.svg"
  },
  {
   "href": "/customers/topline-pro/",
   "title": "Topline Pro expanded data accessibility by 542% with Hex's Notebook Agent",
   "logo": "Topline Pro",
   "meta": [
    "Stage / Startup",
    "Features / Notebook Agent, Data Apps",
    "Industry / Technology & Software",
    "Company size / 41"
   ],
   "logoFile": "pages/company/_shared/topline-pro-9c7ec2de.svg"
  },
  {
   "href": "/customers/valon/",
   "title": "Valon's data team saves an entire week's worth of work each month with Hex",
   "logo": "Valon",
   "meta": [
    "Stage / Startup",
    "Features / Data Apps",
    "Industry / Financial Services",
    "Company size / 418"
   ],
   "logoFile": "pages/company/_shared/valon-05b94ba2.svg"
  },
  {
   "href": "/customers/project0/",
   "title": "Project 0 built a customer-facing app to increase transparency in the crypto space",
   "logo": "Project 0",
   "meta": [
    "Stage / Startup",
    "Features / Notebook Agent",
    "Industry / Technology & Software",
    "Company size / 20"
   ],
   "logoFile": "pages/company/_shared/project-0-230d6b8b.svg"
  },
  {
   "href": "/customers/the-zebra/",
   "title": "The Zebra transformed A/B testing with 50% less manual effort using Hex and Eppo",
   "logo": "The Zebra",
   "meta": [
    "Stage / Growth",
    "Features / Data Apps",
    "Industry / Financial Services",
    "Company size / 325"
   ],
   "logoFile": "pages/company/_shared/the-zebra-17de04a6.svg"
  },
  {
   "href": "/customers/infinite-lambda/",
   "title": "Infinite Lambda built transparent, interactive analytics for the World Health Organization to reduce emissions",
   "logo": "Infinite Lambda",
   "meta": [
    "Stage / Growth",
    "Features / Data Apps",
    "Industry / Professional Services",
    "Company size / 104"
   ],
   "logoFile": "pages/company/customers/infinite-lambda-bafc437f.svg"
  },
  {
   "href": "/customers/greenhouse/",
   "title": "Greenhouse levels up everybody's ability to answer questions using data and decentralize product analytics",
   "logo": "Greenhouse",
   "meta": [
    "Stage / Growth",
    "Features / Data Apps",
    "Industry / Technology & Software",
    "Company size / 800"
   ],
   "logoFile": "pages/company/customers/greenhouse-ed9b8e0b.svg"
  },
  {
   "href": "/customers/inventa/",
   "title": "Inventa built external-facing analytics for 1000s of suppliers, deploying customer-facing dashboards in days rather than weeks",
   "logo": "Inventa",
   "meta": [
    "Stage / Growth",
    "Features / Data Apps",
    "Industry / Professional Services",
    "Company size / 250"
   ],
   "logoFile": "pages/company/customers/inventa-2e08909d.svg"
  },
  {
   "href": "/customers/om1/",
   "title": "OM1 built a powerful data app in Hex that let sales and marketing self-serve on massive healthcare datasets",
   "logo": "OM1",
   "meta": [
    "Stage / Growth",
    "Features / Data Apps",
    "Industry / Healthcare & Life Sciences",
    "Company size / 200"
   ],
   "logoFile": "pages/company/customers/om1-f3c7346b.svg"
  },
  {
   "href": "/customers/recursion/",
   "title": "Recursion uses Hex to bridge the communication gap between biologists and data scientists, supercharging drug discovery",
   "logo": "Recursion",
   "meta": [
    "Stage / Enterprise",
    "Features / Data Apps",
    "Industry / Healthcare & Life Sciences",
    "Company size / 500"
   ],
   "logoFile": "pages/company/customers/recursion-fa2c141e.svg"
  },
  {
   "href": "/customers/inquirer/",
   "title": "The Philadelphia Inquirer uses Hex to create positive feedback loops within their data team and communicate with stakeholders in high fidelity",
   "logo": "The Philadelphia Inquirer",
   "meta": [
    "Stage / Growth",
    "Features / Data Apps",
    "Industry / Media & Entertainment",
    "Company size / 500"
   ],
   "logoFile": "pages/company/_shared/the-philadelphia-inquirer-8e293393.svg"
  },
  {
   "href": "/customers/trade-coffee/",
   "title": "Trade Coffee moves much faster as a data organization by accomplishing their entire analytics workflow in Hex",
   "logo": "Trade Coffee",
   "meta": [
    "Stage / Startup",
    "Features / Data Apps",
    "Industry / Retail & E-Commerce",
    "Company size / 30"
   ],
   "logoFile": "pages/company/customers/trade-coffee-479d70b2.svg"
  },
  {
   "href": "/customers/workrise/",
   "title": "Workrise consolidated their analytics tools with Hex, enabling SQL, Python, and no-code in a cloud-hosted notebook",
   "logo": "Workrise",
   "meta": [
    "Stage / Growth",
    "Features / Data Apps",
    "Industry / Energy & Manufacturing"
   ],
   "logoFile": "pages/company/customers/workrise-519a0035.svg"
  }
 ],
 "lovedByManyMore": [
  {
   "alt": "Vercel",
   "file": "pages/company/customers/vercel-6388e9e4.svg"
  },
  {
   "alt": "Literati",
   "file": "pages/company/customers/literati-2d3546b7.svg"
  },
  {
   "alt": "On Running",
   "file": "pages/company/customers/on-running-7eb6ce3f.svg"
  },
  {
   "alt": "Discover",
   "file": "pages/company/customers/discover-6af6c05b.svg"
  },
  {
   "alt": "Rec Room",
   "file": "pages/company/customers/rec-room-05565bde.svg"
  },
  {
   "alt": "Toast",
   "file": "pages/company/customers/toast-d4a63936.svg"
  },
  {
   "alt": "Anthropic",
   "file": "logos/customers/anthropic.svg"
  },
  {
   "alt": "Pure Storage",
   "file": "pages/company/customers/pure-storage-ebac2d1f.svg"
  },
  {
   "alt": "Loom",
   "file": "pages/company/customers/loom-62985bea.svg"
  },
  {
   "alt": "Booster Fuels",
   "file": "pages/company/customers/booster-fuels-bc327382.svg"
  },
  {
   "alt": "Mixpanel",
   "file": "pages/company/customers/mixpanel-b86219b2.svg"
  },
  {
   "alt": "Thimble",
   "file": "pages/company/customers/thimble-40b35fa1.svg"
  },
  {
   "alt": "TeamFlow",
   "file": "pages/company/customers/teamflow-6868718e.svg"
  },
  {
   "alt": "Opensea",
   "file": "pages/company/customers/opensea-14fda610.svg"
  },
  {
   "alt": "Within",
   "file": "pages/company/customers/within-b0ce35c4.svg"
  },
  {
   "alt": "AWS",
   "file": "logos/customers/aws.svg"
  },
  {
   "alt": "Surge AI",
   "file": "logos/customers/surge-ai.svg"
  },
  {
   "alt": "Glossier",
   "file": "pages/company/customers/glossier-2bb45784.svg"
  },
  {
   "alt": "SeatGeek",
   "file": "pages/company/customers/seatgeek-b2ffbeef.svg"
  },
  {
   "alt": "Newfront",
   "file": "pages/company/customers/newfront-7c487048.svg"
  },
  {
   "alt": "AppFolio",
   "file": "pages/company/customers/appfolio-c432ea12.svg"
  },
  {
   "alt": "Safety Culture",
   "file": "pages/company/customers/safety-culture-d433d861.svg"
  },
  {
   "alt": "Twilio",
   "file": "pages/company/customers/twilio-6aa802af.svg"
  },
  {
   "alt": "Babylist",
   "file": "pages/company/customers/babylist-d531d609.svg"
  },
  {
   "alt": "Spring Health",
   "file": "pages/company/customers/spring-health-fbdb9fac.svg"
  },
  {
   "alt": "Replicated",
   "file": "pages/company/customers/replicated-6c559bd2.svg"
  },
  {
   "alt": "Cursor",
   "file": "logos/customers/cursor.svg"
  },
  {
   "alt": "Ramp Network",
   "file": "pages/company/customers/ramp-network-5fa595ee.svg"
  },
  {
   "alt": "Duolingo",
   "file": "pages/company/customers/duolingo-b98c38f8.svg"
  },
  {
   "alt": "Sierra",
   "file": "logos/customers/sierra.svg"
  },
  {
   "alt": "Noom",
   "file": "pages/company/customers/noom-4b9db1c3.svg"
  },
  {
   "alt": "Avalara",
   "file": "pages/company/customers/avalara-0cb2a8f8.svg"
  },
  {
   "alt": "Rappi",
   "file": "pages/company/customers/rappi-336eb526.svg"
  },
  {
   "alt": "Dutchie",
   "file": "pages/company/customers/dutchie-fb5fb311.svg"
  },
  {
   "alt": "Bowery Farming",
   "file": "pages/company/customers/bowery-farming-1b63d638.svg"
  },
  {
   "alt": "Human Interest",
   "file": "pages/company/customers/human-interest-c033199c.svg"
  },
  {
   "alt": "Sedgwick",
   "file": "logos/customers/sedgwick.svg"
  },
  {
   "alt": "DevRev",
   "file": "pages/company/customers/devrev-073b2a30.svg"
  },
  {
   "alt": "Hightouch",
   "file": "pages/company/customers/hightouch-aa91d5c1.svg"
  },
  {
   "alt": "Brex",
   "file": "logos/customers/brex.svg"
  },
  {
   "alt": "Kandji",
   "file": "pages/company/customers/kandji-99a6c7d2.svg"
  },
  {
   "alt": "Imgur",
   "file": "pages/company/customers/imgur-139b94e4.svg"
  },
  {
   "alt": "AngelList",
   "file": "pages/company/customers/angellist-ae41acc6.svg"
  },
  {
   "alt": "Thinking Machines",
   "file": "logos/customers/thinking-machines.svg"
  },
  {
   "alt": "Fivetran",
   "file": "pages/company/customers/fivetran-799c57e1.svg"
  },
  {
   "alt": "Rivian",
   "file": "logos/customers/rivian.svg"
  },
  {
   "alt": "Bluecore",
   "file": "pages/company/customers/bluecore-08e46bbc.svg"
  },
  {
   "alt": "Hinge",
   "file": "pages/company/customers/hinge-501cefda.svg"
  },
  {
   "alt": "Gamma",
   "file": "pages/company/customers/gamma-528783f2.svg"
  },
  {
   "alt": "Cresta",
   "file": "pages/company/customers/cresta-a0a77056.svg"
  }
 ]
}
```

### 7.8 Customer stories (8)
Body paragraphs are NOT copied: `sections[].p` = paragraph count, `li` = list items, `quotes` = pull-quote paragraphs (truncated at 160 chars). Use placeholder copy in the RichText styles.
```json
{
 "chime": {
  "title": "Chime® built a context workflow and eval set that drove 5K additional insights per month via the Hex Agent",
  "dek": "Chime built an eval set to maintain trusted context for every new data domain launched, so 500+ users could self-serve business insights in conversational form with Hex's agent. Stage / Enterprise",
  "logo": "https://cdn.sanity.io/images/e92memrj/production/3950f2658ad5a70f487a955685af0bfdc634c6d8-94x50.svg",
  "meta": [
   [
    "Stage /",
    "Enterprise"
   ],
   [
    "Features /",
    "Notebook Agent, Threads"
   ],
   [
    "Industry /",
    "Technology & Software"
   ],
   [
    "Company size /",
    "~1,500 employees"
   ]
  ],
  "cards": [
   {
    "h": "About Chime",
    "p": "Chime® (NASDAQ: CHYM) is a financial technology company founded on the premise that core banking services should be helpful, easy, and free. Chime offers a broad range of low-cost banking, payments, lending, and investing products that address the most critical financial needs of everyday people, serving 10M+ members.",
    "li": [],
    "href": "https://www.chime.com/"
   },
   {
    "h": "Outcome",
    "p": null,
    "li": [
     "5K additional insights per month via the Hex agent",
     "96% of Threads conversations run with no user doubt",
     "60% of questions come from non-technical users",
     "500+ users self-serve data with Hex’s agent",
     "50+ data domains",
     "60% reduction domain launch time, from two and a half weeks down to five days"
    ],
    "href": null
   },
   {
    "h": "Scale achieved",
    "p": null,
    "li": [
     "Unlocking self-serve insights for the entire organization",
     "Trust and accuracy for data across the org",
     "A question flagged and context fixed before anyone had to ask again"
    ],
    "href": null
   }
  ],
  "sections": [
   {
    "h": "The challenge: a fintech serving 10M+ Americans that constantly launches new products & features needed reliable insights",
    "p": 3,
    "li": 0,
    "quotes": [
     "\"We have so many people and products that our context is never stagnant. Even when we launch a new data domain for the first time, it's already stale the next d…"
    ],
    "other": []
   },
   {
    "h": "The solution: 96% of Threads conversations run with no user doubt, a tribute to Chime's investment in context and regular evals",
    "p": 26,
    "li": 5,
    "quotes": [
     "\"We frequently run evals on our context library to maintain accuracy and trust in the answers the Hex agent gives. Having everything on Hex's platform provides …",
     "“There has always been an infinite number of questions people wanted to ask. Hex is what finally lets us answer them and dive deeper than we could before, makin…",
     "\"Building my own eval tooling was tedious, but Hex's CLI is what let me stop maintaining a second system and focus on the actual questions that judge our contex…",
     "\"Context Studio tells us exactly where to look before a bad answer persists. It's turned context maintenance from guesswork into a systematic process.\" — Connor…"
    ],
    "other": [
     "figure"
    ]
   },
   {
    "h": "The impact: an AI agent a regulated fintech is willing to trust",
    "p": 4,
    "li": 6,
    "quotes": [],
    "other": []
   }
  ],
  "related": [
   "/customers/figma/",
   "/customers/notion/",
   "/customers/hubspot/",
   "/customers/reddit/",
   "/customers/algolia/",
   "/customers/alltrails/"
  ],
  "images": 1,
  "iframes": [],
  "logoFile": "pages/company/_shared/chime-3950f265.svg"
 },
 "figma": {
  "title": "Figma transformed their data pipeline to mature UX research, tracking 2M+ data points",
  "dek": "Figma transformed their UX research pipeline by tracking 2M+ data points in Hex, using the Notebook Agent to automatically build charts and visualizations for researchers. Stage / Enterprise",
  "logo": "https://cdn.sanity.io/images/e92memrj/production/3d96b9970d0f7abda8c46834991de2ac0554ae1a-97x50.svg",
  "meta": [
   [
    "Stage /",
    "Enterprise"
   ],
   [
    "Features /",
    "Notebook Agent"
   ],
   [
    "Industry /",
    "Technology & Software"
   ],
   [
    "Company size /",
    "~1,886 employees"
   ]
  ],
  "cards": [
   {
    "h": "About Figma",
    "p": "Figma is where teams come together to turn ideas into the world’s best digital products and experiences. Figma is a connected, AI-powered platform that helps teams go from idea to shipped product. Whether you’re ideating, designing, building, or shipping, Figma makes the entire design and product development process more collaborative, efficient, and fun—while keeping everyone on the same page.",
    "li": [],
    "href": "https://www.figma.com/"
   },
   {
    "h": "Outcome",
    "p": null,
    "li": [
     "Enabled 2M+ data points to be tracked at scale",
     "20 minutes report builds",
     "Generated automated insights in hours instead of days",
     "Reduced the learning curve for Python and SQL from weeks to hours"
    ],
    "href": null
   },
   {
    "h": "Scale achieved",
    "p": null,
    "li": [
     "Built a reusable component that can feed 10+ dashboards",
     "Evolved data from simple fields to calculated metrics: Sign up date —> age of user at time of feedback"
    ],
    "href": null
   }
  ],
  "sections": [
   {
    "h": "The challenge: Pioneering at-scale product measurement",
    "p": 2,
    "li": 0,
    "quotes": [],
    "other": []
   },
   {
    "h": "The solution: Building world-class data infrastructure through AI-powered iteration",
    "p": 12,
    "li": 4,
    "quotes": [
     "\"Without Hex’s experiential layer, these programs couldn't take flight — no matter how good the data was.\" - Rie McGwier, AI Insights Researcher",
     "\"Hex's ability to develop a notebook view and place visuals in a dashboard is what made the productization of our insights possible,\" Rie explained.",
     "\"The dashboards have become an organic part of how teams are evaluating their products,\" Molly said. When teams identify problems on the dashboards, they move i…"
    ],
    "other": [
     "figure"
    ]
   },
   {
    "h": "The Impact: Best-in-class customer survey reporting",
    "p": 4,
    "li": 5,
    "quotes": [],
    "other": []
   }
  ],
  "related": [
   "/customers/chime/",
   "/customers/notion/",
   "/customers/hubspot/",
   "/customers/reddit/",
   "/customers/algolia/",
   "/customers/alltrails/"
  ],
  "images": 1,
  "iframes": [],
  "logoFile": "pages/company/_shared/figma-3d96b997.svg"
 },
 "langchain": {
  "title": "LangChain Completed a 6-Week Migration, 90% by Hex's Agent",
  "dek": "LangChain migrated off their legacy BI platform in 6 weeks, and gave every team trusted, self-serve access to data using Hex's agentic analytics. Stage / Startup",
  "logo": "https://cdn.sanity.io/images/e92memrj/production/f556e2627a040a94fb1a624744ae3a5c61926bc9-135x50.svg",
  "meta": [
   [
    "Stage /",
    "Startup"
   ],
   [
    "Features /",
    "Notebook Agent, Data Apps"
   ],
   [
    "Industry /",
    "Technology & Software"
   ],
   [
    "Company size /",
    "~325 employees"
   ]
  ],
  "cards": [
   {
    "h": "About LangChain",
    "p": "LangChain builds the tools that let engineering teams deploy AI agents they can trust. It helps teams evaluate if their agents are working correctly, debug them when they're not, and improve them over time without starting from scratch.",
    "li": [],
    "href": "https://www.langchain.com/"
   },
   {
    "h": "Outcome",
    "p": null,
    "li": [
     "6-week dashboard migration",
     "40% of dashboards migrated",
     "100% of company accesses data via Hex",
     "Double-digit adoption/retention gains",
     "88% report build time reduction",
     "~30% increased onboarding speed",
     "~50% increase in the team’s customer onboarding capacity"
    ],
    "href": null
   },
   {
    "h": "Scale achieved",
    "p": null,
    "li": [
     "90% migration by agent",
     "3 dashboards built in 1 week",
     "Analytics engineering team shifted focus to context curation",
     "Unlocked new data exploration capabilities"
    ],
    "href": null
   }
  ],
  "sections": [
   {
    "h": "The challenge: Legacy BI tooling couldn’t keep pace with exponential growth",
    "p": 4,
    "li": 0,
    "quotes": [],
    "other": []
   },
   {
    "h": "The solution: One platform that compounds context across the organization",
    "p": 22,
    "li": 0,
    "quotes": [
     "\"Context Studio changed how we manage agent performance. It surfaces gaps, proposes fixes, and suggests exactly where to add context. The agent improves without…",
     "\"Being able to copy YAML files and give them to the Hex Agent to fully rebuild the dashboards helped us complete 90% of the migration. It was the best migration…",
     "\"Hex's agent made our legacy BI migration seamless. It rebuilt dashboards automatically, reducing months of manual work to six weeks.\" — Bastian Gerstner, Analy…",
     "“Hex’s developer-first mentality has been awesome. Hex has great visual and design sensibility. The ability to use Hex in any way we choose is valuable because …",
     "\"It took me a week to make several changes in our legacy BI tool that were nowhere near as impactful as everything I built with Hex's agents in a week.\" — Neil …"
    ],
    "other": []
   },
   {
    "h": "The impact: from a data request queue to a data-fluent organization",
    "p": 5,
    "li": 8,
    "quotes": [
     "\"Hex’s agent increased data access for everyone at LangChain, while giving us the confidence that users were getting accurate answers with trusted data. — Emily…"
    ],
    "other": []
   }
  ],
  "related": [
   "/customers/matter-labs/",
   "/customers/parallel-web-systems/",
   "/customers/project0/",
   "/customers/topline-pro/",
   "/customers/algolia/",
   "/customers/alltrails/"
  ],
  "images": 0,
  "iframes": [],
  "logoFile": "pages/company/_shared/langchain-f556e262.svg"
 },
 "mercor": {
  "title": "Mercor unlocked $100M in revenue, scaling dashboards across hundreds of projects",
  "dek": "Mercor scaled from zero to $100M in revenue using Hex's Notebook Agent to build dashboards across hundreds of customer projects, turning days of reporting work into hours.",
  "logo": "https://cdn.sanity.io/images/e92memrj/production/ce99431b6ae8dcc17bfad1979b0176e8c9b97d9c-175x50.svg",
  "meta": [
   [
    "Stage /",
    "Growth"
   ],
   [
    "Features /",
    "Notebook Agent"
   ],
   [
    "Industry /",
    "Technology & Software"
   ],
   [
    "Company size /",
    "~30 employees"
   ]
  ],
  "cards": [
   {
    "h": "About Mercor",
    "p": "Mercor connects human expertise with leading AI labs and enterprises to train frontier models.",
    "li": [],
    "href": "https://www.mercor.com/"
   },
   {
    "h": "Outcome",
    "p": null,
    "li": [
     "$100M unlocked in one year",
     "100% self-service across functions",
     "230 employees company-wide use Hex"
    ],
    "href": null
   },
   {
    "h": "Scale achieved",
    "p": null,
    "li": [
     "60+ metrics tracked per project",
     "Hundreds of simultaneous active projects",
     "All departments on Hex: Ops, Finance, Product, Engineering, ML, Growth"
    ],
    "href": null
   }
  ],
  "sections": [
   {
    "h": "The challenge: Scaling operations at lightning speed",
    "p": 3,
    "li": 0,
    "quotes": [],
    "other": []
   },
   {
    "h": "The solution: Operational insights at scale, powered by Hex’s Notebook Agent and data apps",
    "p": 12,
    "li": 0,
    "quotes": [
     "\"What really excited me about Hex was that it allowed us to scale our data, giving non-technical folks the power to become technical.\" - Dhaval Patel, Account L…",
     "\"Now our team members can build reports themselves, which is faster than waiting for someone else to do it. This definitely would not have been possible without…",
     "\"You don't know what decision to make unless you're tracking the metric. Hex gave us the flexibility to build custom dashboards for hundreds of customer project…"
    ],
    "other": []
   },
   {
    "h": "The impact: $100M+ in revenue unlocked, and a company that runs on data",
    "p": 5,
    "li": 6,
    "quotes": [
     "\"If we didn’t have Hex, we might’ve left more than $100M on the table. That might even be an underestimate,\" Dhaval said.",
     "\"With Hex’s agentic capabilities, we can move faster and the Data team can concentrate on higher-leverage work that unlocks the entire company,\" Dhaval explaine…"
    ],
    "other": []
   }
  ],
  "related": [
   "/customers/calendly/",
   "/customers/clay/",
   "/customers/eliseai/",
   "/customers/kong/",
   "/customers/modal/",
   "/customers/supabase/"
  ],
  "images": 0,
  "iframes": [],
  "logoFile": "pages/company/_shared/mercor-ce99431b.svg"
 },
 "neo-financial": {
  "title": "Neo Financial 10.6x their data exploration using Hex’s Slack integration",
  "dek": "Neo Financial 10.6x'd data exploration using Hex's Threads Slack integration, unlocking data silos in governed ways and increasing trusted answers across the organization. Stage / Growth",
  "logo": "https://cdn.sanity.io/images/e92memrj/production/9585c65ff44e77e925aa68072ddbbaa281cb9983-76x50.svg",
  "meta": [
   [
    "Stage /",
    "Growth"
   ],
   [
    "Features /",
    "Threads"
   ],
   [
    "Industry /",
    "Financial Services"
   ],
   [
    "Company size /",
    "~865 employees"
   ]
  ],
  "cards": [
   {
    "h": "About Neo Financial",
    "p": "Neo Financial is Canada's fastest-growing financial technology company, providing credit cards, lending products, and banking services for approximately two million customers. The company's rapid growth trajectory is powered by a data-driven culture that empowers teams across the organization to make fast, informed decisions.",
    "li": [],
    "href": "https://www.neofinancial.com/"
   },
   {
    "h": "Outcome",
    "p": null,
    "li": [
     "139 employees use Hex",
     "10.6x growth in data exploration",
     "4,000 Threads messages"
    ],
    "href": null
   },
   {
    "h": "Scale achieved",
    "p": null,
    "li": [
     "139 employees use Hex",
     "Scaled data access org-wide without compromising security or governance",
     "Shift from answering ad hoc questions to monitoring quality"
    ],
    "href": null
   }
  ],
  "sections": [
   {
    "h": "The challenge: Unlocking rapid decision-making across a fast-growing fintech",
    "p": 3,
    "li": 0,
    "quotes": [
     "“Hex became our go-to data platform that could help us scale by providing one place for analysis, apps, and AI-powered self-serve,” said Brandon Rochon, VP of D…"
    ],
    "other": []
   },
   {
    "h": "The Solution: Self-service with trustworthy AI analytics",
    "p": 17,
    "li": 3,
    "quotes": [
     "\"In Hex, we could provide company-level context on products, and despite doing this with other tools, we could never give them enough context to be relevant,” B…",
     "\"I can have a thought, fire off a question through Hex's Slack integration, get an insight, and decide what to do — all in the time it takes to stand in line fo…"
    ],
    "other": []
   },
   {
    "h": "The impact: From 12 to 139 active users, 10.6x growth in data exploration",
    "p": 6,
    "li": 0,
    "quotes": [],
    "other": []
   }
  ],
  "related": [
   "/customers/the-zebra/",
   "/customers/modern-treasury/",
   "/customers/ramp/",
   "/customers/valon/"
  ],
  "images": 0,
  "iframes": [],
  "logoFile": "pages/company/_shared/neo-financial-9585c65f.svg"
 },
 "notion": {
  "title": "Notion democratizes data access: 86% of Notebook Agent users are not data scientists",
  "dek": "Notion uses Hex's Notebook Agent to democratize data access across the company, with 86% of Agent users being non-data scientists who now self-serve their own data questions.",
  "logo": "https://cdn.sanity.io/images/e92memrj/production/025b99a04166ce792e3e80bc7e4fd9eabafd4eae-105x50.svg",
  "meta": [
   [
    "Stage /",
    "Enterprise"
   ],
   [
    "Features /",
    "Notebook Agent"
   ],
   [
    "Industry /",
    "Technology & Software"
   ],
   [
    "Company size /",
    "~1,200 employees"
   ]
  ],
  "cards": [
   {
    "h": "About Notion",
    "p": "Notion is a single space where you can think, write, and plan. Capture thoughts, manage projects, or even run an entire company — and do it exactly the way you want.",
    "li": [],
    "href": "https://www.notion.so/"
   },
   {
    "h": "Outcome",
    "p": null,
    "li": [
     "86% of Notebook Agent users are not data scientists",
     "Hours of manual prep work saved —> Automated insights"
    ],
    "href": null
   },
   {
    "h": "Scale achieved",
    "p": null,
    "li": [
     "Notion’s data team is going from reactive to proactive",
     "Answering questions faster",
     "Building infrastructure that allows teams to self-serve"
    ],
    "href": null
   }
  ],
  "sections": [
   {
    "h": "The challenge: Keeping data insights accessible as Notion grew",
    "p": 2,
    "li": 0,
    "quotes": [],
    "other": []
   },
   {
    "h": "The solution: The Notebook Agent is a force multiplier for data teams",
    "p": 16,
    "li": 0,
    "quotes": [
     "\"Hex’s Notebook Agent accelerates our data exploration while maintaining security and access controls built into Hex.” - Aks Nemana, Data Scientist",
     "\"Hex's Notebook Agent can see our Snowflake tables, reference other analyses, and investigate issues on the spot.” Aks Nemana, Senior Data Scientist",
     "\"We are using the Notebook Agent a lot because we're not software engineers. The Agent helps us understand the nuances of working with Open AI and Notion’s APIs…"
    ],
    "other": []
   },
   {
    "h": "The impact: Distributing more insights by embracing AI-assisted workflows",
    "p": 5,
    "li": 3,
    "quotes": [],
    "other": []
   }
  ],
  "related": [
   "/customers/chime/",
   "/customers/figma/",
   "/customers/hubspot/",
   "/customers/reddit/",
   "/customers/algolia/",
   "/customers/alltrails/"
  ],
  "images": 0,
  "iframes": [],
  "logoFile": "pages/company/_shared/notion-025b99a0.svg"
 },
 "ramp": {
  "title": "Ramp uses Hex to quickly analyze financial and product data to make faster, better decisions",
  "dek": "Ramp embeds Hex dashboards where teams already work — Salesforce, Notion, and beyond — enabling analytics engineers to build ML-level data products like sentiment analysis and shrinking feedback loops from days to hours.",
  "logo": "https://cdn.sanity.io/images/e92memrj/production/c773dfb612a711164fa9f90e6b388d0e18cb59d1-120x50.svg",
  "meta": [
   [
    "Stage /",
    "Enterprise"
   ],
   [
    "Features /",
    "Notebook Agent"
   ],
   [
    "Industry /",
    "Financial Services"
   ],
   [
    "Company size /",
    "~2,100 employees"
   ]
  ],
  "cards": [
   {
    "h": "About Ramp",
    "p": "Ramp is a finance automation platform that helps businesses manage corporate cards, expenses, bill payments, and accounting in one place, saving companies time and money.",
    "li": [],
    "href": "https://ramp.com/"
   },
   {
    "h": "Outcome",
    "p": null,
    "li": [
     "Feedback loops shrunk from 2 days to hours",
     "Junior analytics engineers building sentiment analysis previously requiring ML specialists",
     "Data products embedded where teams already work, scaling decisions org-wide"
    ],
    "href": null
   },
   {
    "h": "Scale achieved",
    "p": null,
    "li": [
     "Embedded Hex dashboards in Salesforce, Notion, and other tools",
     "Analytics engineers building ML-level work (sentiment analysis) in SQL",
     "Customer Feedback 360 data app unifying Zendesk, surveys, Datadog, and more"
    ],
    "href": null
   }
  ],
  "sections": [
   {
    "h": "Challenge: Influencing strategic decisions across the org",
    "p": 3,
    "li": 0,
    "quotes": [],
    "other": []
   },
   {
    "h": "Tracking AI performance with a little help from... AI",
    "p": 2,
    "li": 0,
    "quotes": [],
    "other": []
   },
   {
    "h": "Prototyping and iterating fast on data products",
    "p": 3,
    "li": 0,
    "quotes": [
     "\"The number of iterations you can get in per day is extremely high,\" Ian says. That pace speeds learning and keeps teams from prematurely locking pipelines into…"
    ],
    "other": []
   },
   {
    "h": "Unifying data across multiple sources: Sentiment analysis isn’t just for ML specialists anymore",
    "p": 4,
    "li": 0,
    "quotes": [],
    "other": []
   },
   {
    "h": "Embedding data where teams work",
    "p": 1,
    "li": 0,
    "quotes": [],
    "other": []
   },
   {
    "h": "Impact: Driving Ramp 1% better every day",
    "p": 2,
    "li": 0,
    "quotes": [],
    "other": []
   }
  ],
  "related": [
   "/customers/modern-treasury/",
   "/customers/neo-financial/",
   "/customers/the-zebra/",
   "/customers/valon/"
  ],
  "images": 0,
  "iframes": [],
  "logoFile": "pages/company/_shared/ramp-c773dfb6.svg"
 },
 "stubhub": {
  "title": "StubHub empowered business analysts to explore and dig into data on their own with Hex",
  "dek": "StubHub uses Hex for ad-hoc exploratory analysis and self-serve data apps, empowering business analysts to independently explore ticket sales data and freeing the data team for complex work.",
  "logo": "https://cdn.sanity.io/images/e92memrj/production/2e43c7669b43c00cb6e05940b2e7431674ae8649-96x50.svg",
  "meta": [
   [
    "Stage /",
    "Growth"
   ],
   [
    "Features /",
    "Data Apps"
   ],
   [
    "Industry /",
    "Media & Entertainment"
   ],
   [
    "Company size /",
    "~895 employees"
   ]
  ],
  "cards": [
   {
    "h": "About StubHub",
    "p": "StubHub is the world's leading source of live sports, music, and entertainment tickets.",
    "li": [],
    "href": "https://www.stubhub.com/"
   },
   {
    "h": "Outcome",
    "p": null,
    "li": [
     "Culture of data literacy accelerated",
     "Data teams freed for complex predictive and prescriptive questions",
     "Eliminated siloed, one-off insights in spreadsheets"
    ],
    "href": null
   },
   {
    "h": "Scale achieved",
    "p": null,
    "li": [
     "Built a \"swiss army knife\" for investigating sales data",
     "Dynamically identify drivers of ticket sales",
     "Business analysts enabled to self-serve"
    ],
    "href": null
   }
  ],
  "sections": [
   {
    "h": "Challenge",
    "p": 1,
    "li": 3,
    "quotes": [],
    "other": []
   },
   {
    "h": "How they use Hex",
    "p": 2,
    "li": 3,
    "quotes": [],
    "other": []
   },
   {
    "h": "Impact",
    "p": 1,
    "li": 0,
    "quotes": [],
    "other": []
   }
  ],
  "related": [
   "/customers/inquirer/"
  ],
  "images": 0,
  "iframes": [],
  "logoFile": "pages/company/_shared/stubhub-2e43c766.svg"
 }
}
```

### 7.9 Events and guides cards
```json
{
 "events": {
  "upcoming": [
   {
    "title": "Prompt",
    "cta": "Register",
    "href": "https://hex.tech/prompt/",
    "image": "pages/company/events/prompt-443b90a2.png"
   },
   {
    "title": "Enterprise Context Management for Analytics",
    "cta": "Register for the workshop",
    "href": "https://maven.com/dataneighbor/enterprise-context-management-for-analytics?promoCode=CONTEXT25",
    "image": "pages/company/events/enterprise-context-management-for-analytics-548d1dee.jpg"
   }
  ],
  "onDemand": [
   {
    "title": "From Months to Weeks: BI Migrations with AI",
    "cta": "Watch the replay",
    "href": "https://app.sequel.io/hex/bi-migration-skill",
    "image": "pages/company/events/from-months-to-weeks-bi-migrations-with-ai-3f1de29c.png"
   },
   {
    "title": "DataBench Launch Event",
    "cta": "Watch now",
    "href": "https://hex.tech/resources/video/ai-data-analytics-benchmarks/",
    "image": "pages/company/events/databench-launch-event-a9c28974.jpg"
   },
   {
    "title": "Agent driven reporting with ClickUp",
    "cta": "Watch the recording",
    "href": "https://www.youtube.com/watch?v=-aiLWduiUwc",
    "image": "pages/company/events/agent-driven-reporting-with-clickup-f71ea3d9.png"
   },
   {
    "title": "The Hex Agent Advantage with Supabase",
    "cta": "Watch the recording",
    "href": "https://www.youtube.com/watch?v=qHUiKSP1S78",
    "image": "pages/company/events/the-hex-agent-advantage-with-supabase-0e73cfbd.png"
   },
   {
    "title": "Inside Modal's GTM Engine",
    "cta": "Watch the recording",
    "href": "https://www.youtube.com/watch?v=Px3qQ5mLDTI",
    "image": "pages/company/events/inside-modal-s-gtm-engine-a57fde80.png"
   },
   {
    "title": "Introducing Generative Data Apps",
    "cta": "Watch now",
    "href": "https://www.youtube.com/watch?v=eg-ie4EGKmE",
    "image": "pages/company/events/introducing-generative-data-apps-1edde4a3.png"
   },
   {
    "title": "Introducing Hex CLI",
    "cta": "Watch now",
    "href": "https://www.youtube.com/watch?v=H0m6UtYnvQo",
    "image": "pages/company/events/introducing-hex-cli-f2c87b64.png"
   },
   {
    "title": "Introducing the Context Studio: Virtual Launch Event",
    "cta": "Watch now",
    "href": "https://www.youtube.com/watch?v=EDo24GfND-c",
    "image": "pages/company/events/introducing-the-context-studio-virtual-launch-ev-4008ef01.png"
   },
   {
    "title": "How Neo Financial scaled AI-powered analytics in Slack",
    "cta": "Watch now",
    "href": "https://www.youtube.com/watch?v=_1TozcgCaCo",
    "image": "pages/company/events/how-neo-financial-scaled-ai-powered-analytics-in-85c2011a.png"
   },
   {
    "title": "Measuring product health with the Hex Agent",
    "cta": "Watch now",
    "href": "https://youtu.be/d5M4OvIx5ZE",
    "image": "pages/company/events/measuring-product-health-with-the-hex-agent-34bb57d4.png"
   },
   {
    "title": "Analytics where you work: Hex Agent in Slack",
    "cta": "Watch now",
    "href": "https://youtu.be/XyeGWrjuaDM",
    "image": "pages/company/events/analytics-where-you-work-hex-agent-in-slack-5bbac723.png"
   },
   {
    "title": "Grounding AI in trusted context",
    "cta": "Watch now",
    "href": "/resources/video/grounding-ai-in-trusted-context/",
    "image": "pages/company/events/grounding-ai-in-trusted-context-bbdc0e67.png"
   },
   {
    "title": "Fall 2025 Launch Demo",
    "cta": "Watch now",
    "href": "/resources/video/fall-2025-launch-demo-threads/",
    "image": "pages/company/events/fall-2025-launch-demo-1917eb39.png"
   },
   {
    "title": "Lessons from Ramp: Running AI-powered data teams",
    "cta": "Watch now",
    "href": "/resources/video/running-ai-powered-data-teams/",
    "image": "pages/company/events/lessons-from-ramp-running-ai-powered-data-teams-7bf07976.png"
   },
   {
    "title": "Welcome to Agentic Analytics",
    "cta": "Watch now",
    "href": "/resources/video/welcome-to-agentic-analytics/",
    "image": "pages/company/events/welcome-to-agentic-analytics-e4435e24.png"
   },
   {
    "title": "Curating your workspace for AI in Hex",
    "cta": "Watch now",
    "href": "/resources/video/curating-your-workspace-for-ai-in-hex/",
    "image": "pages/company/events/curating-your-workspace-for-ai-in-hex-3a241e7e.png"
   },
   {
    "title": "How data leaders are rethinking governance in 2025",
    "cta": "Watch now",
    "href": "/resources/video/how-data-leaders-are-rethinking-governance-in-2025/",
    "image": "pages/company/events/how-data-leaders-are-rethinking-governance-in-20-d6cbac3e.png"
   },
   {
    "title": "What every data leader needs to know about self-serve in 2025",
    "cta": "Watch now",
    "href": "/resources/video/what-every-data-leader-needs-to-know-about-self-serve-in-2025/",
    "image": "pages/company/events/what-every-data-leader-needs-to-know-about-self--01201c1f.png"
   },
   {
    "title": "AI is here. But is your data org ready?",
    "cta": "Watch now",
    "href": "/resources/video/ai-is-here-but-is-your-data-org-ready/",
    "image": "pages/company/events/ai-is-here-but-is-your-data-org-ready-e7d7c04e.png"
   }
  ]
 },
 "guides": [
  {
   "title": "The Snowflake + Hex guide to AI-ready data",
   "cta": "Download now",
   "href": "/resources/llms-snowflake-cortex/",
   "image": "pages/company/guides/the-snowflake-hex-guide-to-ai-ready-data-ecae8ae9.jpg"
  },
  {
   "title": "Should you replace your BI tool with an agent?",
   "cta": "Download now",
   "href": "/resources/bi-buying-guide/",
   "image": "pages/company/guides/should-you-replace-your-bi-tool-with-an-agent-d834e322.jpg"
  },
  {
   "title": "Context: How data leaders make it work for AI Analytics",
   "cta": "Download now",
   "href": "/resources/context-guide/",
   "image": "pages/company/guides/context-how-data-leaders-make-it-work-for-ai-ana-fb964aeb.jpg"
  },
  {
   "title": "Real stories of Business Transformation with Data and AI",
   "cta": "Download now",
   "href": "/resources/ai-in-action/",
   "image": "pages/company/guides/real-stories-of-business-transformation-with-dat-aa273159.jpg"
  },
  {
   "title": "The 10x data team for data leaders: How AI-powered notebook development is changing everything",
   "cta": "Download now",
   "href": "/resources/the-10x-data-team-for-data-leaders/",
   "image": "pages/company/guides/the-10x-data-team-for-data-leaders-how-ai-powere-9e62c84b.jpg"
  },
  {
   "title": "A guide for healthcare data teams",
   "cta": "Download now",
   "href": "/resources/health-life-science-data-teams/",
   "image": "pages/company/guides/a-guide-for-healthcare-data-teams-bd08975f.png"
  },
  {
   "title": "The data leader's guide to AI analytics",
   "cta": "Download now",
   "href": "/resources/data-leaders-playbook-for-agentic-analytics/",
   "image": "pages/company/guides/the-data-leader-s-guide-to-ai-analytics-a25e7a39.jpg"
  },
  {
   "title": "A guide to data governance",
   "cta": "Download now",
   "href": "/resources/data-team-governance-template/",
   "image": "pages/company/guides/a-guide-to-data-governance-7571aec1.jpg"
  },
  {
   "title": "The 10x data team: How AI-powered notebook development is changing everything",
   "cta": "Download now",
   "href": "/resources/ai-powered-notebook/",
   "image": "pages/company/guides/the-10x-data-team-for-data-leaders-how-ai-powere-9e62c84b.jpg"
  },
  {
   "title": "Candidly's playbook for evaluating embedded analytics",
   "cta": "Download now",
   "href": "/resources/candidly-evaluation-playbook-for-embedded-analytics/",
   "image": "pages/company/guides/candidly-s-playbook-for-evaluating-embedded-anal-211e4dd8.png"
  },
  {
   "title": "Calendly: 2x faster with Hex",
   "cta": "Download now",
   "href": "/resources/calendly-hex-one-pager/",
   "image": "pages/company/guides/calendly-2x-faster-with-hex-eab4fc0b.png"
  },
  {
   "title": "How HubSpot scales data trust across 8,000 employees",
   "cta": "Download now",
   "href": "/resources/scaling-data-at-hubspot/",
   "image": "pages/company/guides/how-hubspot-scales-data-trust-across-8-000-emplo-19de28b6.png"
  },
  {
   "title": "How OM1 is transforming self-serve with a data app",
   "cta": "Download now",
   "href": "/resources/data-app-om1/",
   "image": "pages/company/guides/how-om1-is-transforming-self-serve-with-a-data-a-c294a1e5.png"
  },
  {
   "title": "StubHub: How a data app revealed why ticket sales rise and fall",
   "cta": "Download now",
   "href": "/resources/data-app-stubhub/",
   "image": "pages/company/guides/stubhub-how-a-data-app-revealed-why-ticket-sales-4dc696d7.png"
  },
  {
   "title": "ClickUp: How a data app saved $1M in churn",
   "cta": "Download now",
   "href": "/resources/data-app-click-up/",
   "image": "pages/company/guides/clickup-how-a-data-app-saved-1m-in-churn-844d3244.png"
  },
  {
   "title": "Recursion: Speeding up drug discovery with Hex",
   "cta": "Download now",
   "href": "/resources/recursion-op/",
   "image": "pages/company/guides/recursion-speeding-up-drug-discovery-with-hex-a0ee3b67.jpg"
  },
  {
   "title": "The Multi-Modal Revolution for Data Teams",
   "cta": "Download now",
   "href": "/resources/multi-modal-revolution/",
   "image": "pages/company/guides/the-multi-modal-revolution-for-data-teams-cca97123.png"
  },
  {
   "title": "How Data Teams Drive Impact With Data Apps",
   "cta": "Download now",
   "href": "/resources/drive-impact-with-data-apps/",
   "image": "pages/company/guides/how-data-teams-drive-impact-with-data-apps-1089a9d0.png"
  },
  {
   "title": "Data Team Zen: A short guide to team efficiency",
   "cta": "Download now",
   "href": "/resources/data-team-zen/",
   "image": "pages/company/guides/data-team-zen-a-short-guide-to-team-efficiency-16a8c8c8.png"
  },
  {
   "title": "How to drive business impact by mastering ad hoc analysis",
   "cta": "Download now",
   "href": "/resources/mastering-ad-hoc-analysis/",
   "image": "pages/company/guides/how-to-drive-business-impact-by-mastering-ad-hoc-2a7c723b.png"
  }
 ]
}
```

### 7.10 Templates
```json
{
 "sidebar": [
  {
   "name": "All",
   "href": "/templates/"
  },
  {
   "name": "Data Clustering",
   "href": "/templates/data-clustering/"
  },
  {
   "name": "Data Modeling",
   "href": "/templates/data-modeling/"
  },
  {
   "name": "Data Science",
   "href": "/templates/data-science/"
  },
  {
   "name": "Data Visualization",
   "href": "/templates/data-visualization/"
  },
  {
   "name": "Exploratory Analysis",
   "href": "/templates/exploratory-analysis/"
  },
  {
   "name": "Feature Selection",
   "href": "/templates/feature-selection/"
  },
  {
   "name": "KPI Dashboards",
   "href": "/templates/kpi-dashboards/"
  },
  {
   "name": "Natural Language Processing",
   "href": "/templates/natural-language-processing/"
  },
  {
   "name": "Parameterized Queries",
   "href": "/templates/parameterized-query/"
  },
  {
   "name": "Reporting",
   "href": "/templates/reporting/"
  },
  {
   "name": "Sentiment Analysis",
   "href": "/templates/sentiment-analysis/"
  },
  {
   "name": "Snowpark",
   "href": "/templates/snowpark/"
  },
  {
   "name": "Time Series",
   "href": "/templates/time-series/"
  }
 ],
 "categories": [
  {
   "category": "Data Clustering",
   "description": "Unleash the power of data clustering—an unsupervised machine learning technique that uncovers patterns and groups similar data together without the need for labeled data.",
   "icon": "pages/company/templates/data-clustering-00c584bd.svg",
   "viewAll": "/templates/data-clustering/",
   "cards": [
    {
     "title": "Cluster analysis",
     "author": null,
     "description": "Build an interactive K-means clustering app in minutes with Hex. Scale, reduce, and encode your features using…",
     "href": "/templates/data-clustering/cluster-analysis/",
     "image": "pages/company/templates/cluster-analysis-1ca0c88b.png"
    },
    {
     "title": "Document Similarity with Embeddings",
     "author": null,
     "description": "Explore document similarity using embeddings, swiftly visualizing and interpreting text clusters from your SQL…",
     "href": "/templates/data-clustering/document-similarity/",
     "image": "pages/company/templates/document-similarity-with-embeddings-63126e0c.png"
    },
    {
     "title": "Clustering algorithms",
     "author": null,
     "description": "Group similar data points together to discover patterns, structures, or subgroups within a dataset.",
     "href": "/templates/data-clustering/clustering-algorithms/",
     "image": "pages/company/templates/clustering-algorithms-0e662dcb.png"
    },
    {
     "title": "Customer Segmentation",
     "author": "Izzy Miller",
     "description": "Group users by behavior or purchase history using clustering in Python. This Hex customer segmentation templat…",
     "href": "/templates/data-clustering/customer-segmentation/",
     "image": "pages/company/templates/customer-segmentation-b1bb2ab7.png"
    }
   ]
  },
  {
   "category": "Data Modeling",
   "description": "Take raw data and transform it into ready to use data sets for predictive models, interactive apps for exploration, or for company reporting.",
   "icon": "pages/company/templates/data-modeling-a10c948f.svg",
   "viewAll": "/templates/data-modeling/",
   "cards": [
    {
     "title": "Collaborative filtering",
     "author": "Izzy Miller",
     "description": "Build a recommendation engine with collaborative filtering in Python. Find similar users, make personalized re…",
     "href": "/templates/data-modeling/collaborative-filtering/",
     "image": "pages/company/templates/collaborative-filtering-98cef838.png"
    },
    {
     "title": "Market Basket Analysis",
     "author": null,
     "description": "Identify high-impact product pairings and optimize promotional strategies with apriori market basket analysis",
     "href": "/templates/data-modeling/market-basket-analysis/",
     "image": "pages/company/templates/market-basket-analysis-7fe4e380.png"
    },
    {
     "title": "Content based filtering",
     "author": null,
     "description": "Content-based filtering and collaborative filtering are two data modeling techniques for recommending items to…",
     "href": "/templates/data-modeling/content-based-filtering/",
     "image": "pages/company/templates/content-based-filtering-b58ff128.png"
    }
   ]
  },
  {
   "category": "Data Science",
   "description": "Unearth hidden insights and power business decisions with machine learning— or just good old applied statistics.",
   "icon": "pages/company/templates/data-modeling-a10c948f.svg",
   "viewAll": "/templates/data-science/",
   "cards": [
    {
     "title": "Anomaly Detection",
     "author": null,
     "description": "Detect anomalies in time series and tabular data using Python in Hex. This template covers statistical and ML-…",
     "href": "/templates/data-science/anomaly-detection/",
     "image": "pages/company/templates/anomaly-detection-b30cfb80.png"
    },
    {
     "title": "dbt Audit Helper",
     "author": null,
     "description": "Validate dbt PRs and document changes with a Hex UI",
     "href": "/templates/data-science/dbt-audit-helper/",
     "image": "pages/company/templates/dbt-audit-helper-18745a0a.png"
    },
    {
     "title": "A/B testing",
     "author": null,
     "description": "Run A/B tests and analyze results with Python in Hex. This template covers hypothesis testing, statistical sig…",
     "href": "/templates/data-science/a-b-testing/",
     "image": "pages/company/templates/a-b-testing-b0ad524a.png"
    },
    {
     "title": "Build, test, and deploy powerful ML models",
     "author": "Izzy Miller",
     "description": "Build, test, and deploy powerful ML models in Hex using Python and scikit-learn. Covers the full ML workflow f…",
     "href": "/templates/data-science/fab-testing/",
     "image": "pages/company/templates/build-test-and-deploy-powerful-ml-models-af239364.png"
    }
   ]
  },
  {
   "category": "Data Visualization",
   "description": "Transform raw data into actionable insights with interactive visualizations, dashboards, and data apps.",
   "icon": "pages/company/templates/data-visualization-b63a0c9b.svg",
   "viewAll": "/templates/data-visualization/",
   "cards": [
    {
     "title": "Python Data Visualization",
     "author": "Izzy Miller",
     "description": "Move from SQL results to interactive charts using Matplotlib, Plotly, Altair, and Seaborn — all in one Hex not…",
     "href": "/templates/data-visualization/python-visualization/",
     "image": "pages/company/templates/python-data-visualization-18c8a12e.png"
    },
    {
     "title": "Geospatial Data Analysis",
     "author": null,
     "description": "Use powerful GIS techniques alongside SQL and built-in mapping tools",
     "href": "/templates/data-visualization/geospatial-analysis/",
     "image": "pages/company/templates/geospatial-data-analysis-e7e29fda.png"
    },
    {
     "title": "Python mapping libraries",
     "author": "Izzy Miller",
     "description": "Explore Folium, Plotly, and more - all inside a Hex notebook, alongside your SQL and Python. Get mapping libra…",
     "href": "/templates/data-visualization/python-mapping-libraries/",
     "image": "pages/company/templates/python-mapping-libraries-c53ef9a6.png"
    }
   ]
  },
  {
   "category": "Exploratory Analysis",
   "description": "Deep dives, rabbit holes, side quests, and ad-hoc explorations.",
   "icon": "pages/company/templates/exploratory-analysis-afc22dfa.svg",
   "viewAll": "/templates/exploratory-analysis/",
   "cards": [
    {
     "title": "Interactive Data stories",
     "author": "Izzy Miller",
     "description": "Build narrative data stories that combine charts, text, and live data in one Hex document. Covers effective da…",
     "href": "/templates/exploratory-analysis/interactive-data-stories/",
     "image": "pages/company/templates/interactive-data-stories-64aa53c3.png"
    },
    {
     "title": "Exploratory Data Analysis",
     "author": "Izzy Miller",
     "description": "Understand your data before you model it. This Hex EDA template covers distributions, correlations, and outlie…",
     "href": "/templates/exploratory-analysis/exploratory-data-analysis/",
     "image": "pages/company/templates/exploratory-data-analysis-1b75379a.png"
    },
    {
     "title": "Ad-hoc exploration",
     "author": "Izzy Miller, Dev Advocate at Hex",
     "description": "Ad-hoc or deep-dive, Hex is the fastest path from question to insight.",
     "href": "/templates/exploratory-analysis/ad-hoc-exploration/",
     "image": "pages/company/templates/ad-hoc-exploration-5855c5e3.png"
    },
    {
     "title": "Text to SQL Chatbot",
     "author": "Jordan East",
     "description": "Learn how to build your own text to SQL chatbot in Hex using OpenAI and LangChain",
     "href": "/templates/exploratory-analysis/text-SQL-chatbot/",
     "image": "pages/company/templates/text-to-sql-chatbot-f495ba1c.png"
    }
   ]
  },
  {
   "category": "Feature Selection",
   "description": "Determine the most appropriate features of your Machine Learning model to make it easy to interpret, get accurate results, reduce overfitting, and optimize your computational resources.",
   "icon": "pages/company/templates/data-modeling-a10c948f.svg",
   "viewAll": "/templates/feature-selection/",
   "cards": [
    {
     "title": "Linear Dimensionality Reduction",
     "author": "Izzy Miller",
     "description": "Visualize high dimensional data using linear reduction techniques",
     "href": "/templates/feature-selection/linear-dimensionality-reduction/",
     "image": "pages/company/templates/linear-dimensionality-reduction-5b3697d5.png"
    },
    {
     "title": "Feature Selection",
     "author": null,
     "description": "Choose the right input variables for your ML model using filter, wrapper, and embedded methods. This Hex featu…",
     "href": "/templates/feature-selection/feature-selection/",
     "image": "pages/company/templates/market-basket-analysis-7fe4e380.png"
    },
    {
     "title": "Non-linear dimensionality reduction",
     "author": null,
     "description": "Visualize high dimensional data using non-linear reduction techniques",
     "href": "/templates/feature-selection/non-linear-dimensionality-reduction/",
     "image": "pages/company/templates/non-linear-dimensionality-reduction-330f05c4.png"
    }
   ]
  },
  {
   "category": "KPI Dashboards",
   "description": "Track and monitor business KPIs, offer insights into sales performance, customer satisfaction, and operational efficiency.",
   "icon": "pages/company/templates/data-visualization-b63a0c9b.svg",
   "viewAll": "/templates/kpi-dashboards/",
   "cards": [
    {
     "title": "Customer Health Dashboard",
     "author": null,
     "description": "Track customer health scores, usage signals, and risk indicators in Hex. Build an interactive customer health …",
     "href": "/templates/kpi-dashboards/customer-health-dash/",
     "image": "pages/company/templates/customer-health-dashboard-e5dc7765.png"
    },
    {
     "title": "Feature Success",
     "author": "Jo Engreitz",
     "description": "Measure Feature adoption, retention and satisfaction with this interactive Hex app.",
     "href": "/templates/kpi-dashboards/feature-success/",
     "image": "pages/company/templates/feature-success-47ba31fa.png"
    },
    {
     "title": "SQL Powered Dashboards",
     "author": null,
     "description": "Build flexible BI dashboards out of SQL queries",
     "href": "/templates/kpi-dashboards/sql-powered-dashboards/",
     "image": "pages/company/templates/sql-powered-dashboards-ef377881.png"
    },
    {
     "title": "Customer lifetime value Dashboard",
     "author": "Izzy Miller",
     "description": "Calculate and visualize customer lifetime value in Hex using SQL and Python. This template covers LTV modeling…",
     "href": "/templates/kpi-dashboards/customer-lifetime-value/",
     "image": "pages/company/templates/customer-lifetime-value-dashboard-a93ee58d.png"
    }
   ]
  },
  {
   "category": "Natural Language Processing",
   "description": "Empower your AI and ML applications to interpret, recognize, and generate human language with powerful Natural Language Processing (NLP) algorithms.",
   "icon": "pages/company/templates/data-modeling-a10c948f.svg",
   "viewAll": "/templates/natural-language-processing/",
   "cards": [
    {
     "title": "Using SpaCy for NLP",
     "author": null,
     "description": "Harness SpaCy for NLP to effortlessly analyze, extract insights, and visualize results from texts",
     "href": "/templates/natural-language-processing/nlp-spacy/",
     "image": "pages/company/templates/using-spacy-for-nlp-4076dc58.png"
    },
    {
     "title": "Natural Language Processing",
     "author": "Izzy Miller",
     "description": "Sentiment analysis, emotion detection, and text classification in one Hex notebook using HuggingFace and TF-ID…",
     "href": "/templates/natural-language-processing/natural-language-processing/",
     "image": "pages/company/templates/natural-language-processing-45b7c0fd.png"
    }
   ]
  },
  {
   "category": "Parameterized Queries",
   "description": "Upgrade your projects with parameterized SQL queries. Create interactive dashboards and exploratory data analysis with SQL queries that dynamically react to user input using Hex.",
   "icon": "pages/company/templates/data-clustering-00c584bd.svg",
   "viewAll": "/templates/parameterized-query/",
   "cards": [
    {
     "title": "Feature Success Interactive Dashboard",
     "author": "Jo Engreitz",
     "description": "Build feature success dashboards with Hex. Monitor usage metrics using parameterized SQL, create interactive v…",
     "href": "/templates/parameterized-query/feature-success-dashboard/",
     "image": "pages/company/templates/feature-success-interactive-dashboard-9ea2c94e.png"
    }
   ]
  },
  {
   "category": "Reporting",
   "description": "Bring your business data to life with interactive reports, beautiful dashboards, and rich data stories.",
   "icon": "pages/company/templates/data-visualization-b63a0c9b.svg",
   "viewAll": "/templates/reporting/",
   "cards": [
    {
     "title": "Period over period analysis",
     "author": "Izzy Miller",
     "description": "Compare MoM, QoQ, and YoY metrics in SQL with reusable logic. This Hex template covers period-over-period anal…",
     "href": "/templates/reporting/period-over-period-analysis/",
     "image": "pages/company/templates/period-over-period-analysis-c703d954.png"
    },
    {
     "title": "dbt Metrics",
     "author": null,
     "description": "Access trusted metrics with Hex's dbt integration",
     "href": "/templates/reporting/dbt-metrics/",
     "image": "pages/company/templates/dbt-metrics-69f338f7.png"
    },
    {
     "title": "Replace Google Analytics with Rudderstack & Hex",
     "author": null,
     "description": "Build a more in-depth and flexible analytics stack",
     "href": "/templates/reporting/replacing-google-analytics-rudderstack/",
     "image": "pages/company/templates/replace-google-analytics-with-rudderstack-hex-95d7ec27.png"
    },
    {
     "title": "Automating Quarterly Reviews",
     "author": "Izzy Miller",
     "description": "Connect your data between Hex, Google Sheets and Google Slides. Give your stakeholders access to data and char…",
     "href": "/templates/reporting/automating-quarterly-reviews/",
     "image": "pages/company/templates/automating-quarterly-reviews-58a8352c.webp"
    }
   ]
  },
  {
   "category": "Sentiment Analysis",
   "description": "Decipher subjective information in text to determine its polarity and subjectivity, explore advanced techniques and Python libraries for sentiment analysis.",
   "icon": "pages/company/templates/data-clustering-00c584bd.svg",
   "viewAll": "/templates/sentiment-analysis/",
   "cards": [
    {
     "title": "VADER sentiment analysis",
     "author": "Izzy Miller",
     "description": "Use VADER's rule-based sentiment model to analyze social media, customer reviews, and more. Learn how to score…",
     "href": "/templates/sentiment-analysis/vader-sentiment-analysis/",
     "image": "pages/company/templates/vader-sentiment-analysis-3b4c4a77.png"
    },
    {
     "title": "Social Media Sentiment Analysis",
     "author": "Izzy Miller",
     "description": "Parse tweets, posts, and comments to track brand sentiment over time. Hex template covers sentiment scoring, a…",
     "href": "/templates/sentiment-analysis/social-media-sentiment-analysis/",
     "image": "pages/company/templates/social-media-sentiment-analysis-65990d69.png"
    },
    {
     "title": "Named Entity Recognition",
     "author": null,
     "description": "Extract entities (people, places, orgs) from text using spaCy and HuggingFace in a Hex notebook. Named entity …",
     "href": "/templates/sentiment-analysis/named-entity-recognition/",
     "image": "pages/company/templates/named-entity-recognition-2cceb7b4.png"
    },
    {
     "title": "Sentiment Analysis",
     "author": null,
     "description": "Turn unstructured text — reviews, support tickets, and surveys — into sentiment scores using Python in Hex. Co…",
     "href": "/templates/sentiment-analysis/sentiment-analysis/",
     "image": "pages/company/templates/sentiment-analysis-216c7a1c.png"
    }
   ]
  },
  {
   "category": "Snowpark",
   "description": "Use Hex with Snowpark for Python to do complex data science on datasets of any scale",
   "icon": "pages/company/templates/exploratory-analysis-afc22dfa.svg",
   "viewAll": "/templates/snowpark/",
   "cards": [
    {
     "title": "Customer Behavior Analysis And New Product Sales Forecasting",
     "author": null,
     "description": "Analyze customer purchasing behavior and forecast new product sales in Hex. Covers segmentation, trend analysi…",
     "href": "/templates/snowpark/analysis-of-customer-purchasing-behavior/",
     "image": "pages/company/templates/customer-behavior-analysis-and-new-product-sales-28904a40.png"
    },
    {
     "title": "Time series analysis with Snowpark",
     "author": null,
     "description": "Forecast hourly restaurant traffic using UDTFs in Snowpark",
     "href": "/templates/snowpark/time-series-analysis-snowpark/",
     "image": "pages/company/templates/time-series-analysis-with-snowpark-85d7b059.png"
    },
    {
     "title": "Data Science with Snowpark",
     "author": null,
     "description": "The easy button for Snowpark",
     "href": "/templates/snowpark/data-science-with-snowpark/",
     "image": "pages/company/templates/data-science-with-snowpark-b79554b0.png"
    },
    {
     "title": "Snowpark ML using Stored Procedures",
     "author": null,
     "description": "Use Snowpark ML and stored procedures to build powerful machine learning pipelines that run entirely inside yo…",
     "href": "/templates/snowpark/snowpark-ml-stored-procedures/",
     "image": "pages/company/templates/snowpark-ml-using-stored-procedures-78a135da.png"
    }
   ]
  },
  {
   "category": "Time Series",
   "description": "Discover meaningful patterns and trends by visualizing data over time.",
   "icon": "pages/company/templates/data-visualization-b63a0c9b.svg",
   "viewAll": "/templates/time-series/",
   "cards": [
    {
     "title": "Time Series Forecasting with Prophet",
     "author": "Izzy Miller, Dev Advocate at Hex",
     "description": "Build time series forecasting models with Prophet in a Hex notebook — decompose trends, handle seasonality, an…",
     "href": "/templates/time-series/time-series-forecasting-prophet/",
     "image": "pages/company/templates/time-series-forecasting-with-prophet-e61193c8.png"
    },
    {
     "title": "Time series analysis in Snowpark",
     "author": null,
     "description": "Forecast hourly restaurant traffic using UDTFs in Snowpark",
     "href": "/templates/time-series/time-series-analysis-in-snowpark/",
     "image": "pages/company/templates/time-series-analysis-with-snowpark-85d7b059.png"
    },
    {
     "title": "Time Series Forecasting",
     "author": null,
     "description": "One workspace with everything you need to build complex time series models",
     "href": "/templates/time-series/time-series-forecasting/",
     "image": "pages/company/templates/time-series-forecasting-eae7b70f.png"
    }
   ]
  }
 ]
}
```

### 7.11 State of Data Teams
```json
{
 "hero": {
  "eyebrow": "Issue 02",
  "srTitle": "State of Data Teams 2026",
  "about": "About this survey: In December 2025, Hex re-surveyed 65+ data leaders — VPs of Data, directors, analytics engineers, and individual contributors — about their priorities, investments, and blockers. Respondents span company sizes from 80 to 1,000+ employees. / Just six months after our first State of Data Teams Report (link /state-of-data-teams/2025/), the shift was clear: attitudes toward AI moved fast."
 },
 "keyFindings": [
  "AI as a data team priority surged 575% in six months: only 4% of leaders cited it as a top goal in Spring 2025; 27% did by December 2025",
  "31% of data leaders cite trust and data accuracy as their #1 AI concern — nearly 2× the next most common barrier",
  "58% of data teams grew by late 2025, up from 52% in spring; only 4% reduced headcount (down from 9%)",
  "AI tooling jumped from 6th to 2nd in data team focus areas, a 24% increase in six months",
  "0% of data leaders predict they'll avoid AI entirely",
  "Semantic layers are now consensus: no respondent questioned their value in fall (vs. a minority of doubters in spring)"
 ],
 "toc": [
  "01 AI is a top priority for data teams",
  "02 Trust and data accuracy are the biggest concerns for AI",
  "03 Leaders and practitioners want different AI tools",
  "04 Data teams are still growing as AI adoption accelerates",
  "05 What does this all mean for 2026?"
 ],
 "headings": [
  [
   "h1",
   "State of Data Teams 2026"
  ],
  [
   "h2",
   "Data teams are hitting the gas on AI – but trust remains a concern"
  ],
  [
   "h3",
   "Key findings"
  ],
  [
   "h2",
   "Table of contents"
  ],
  [
   "h3",
   "01"
  ],
  [
   "h2",
   "01 — AI is a top priority for data teams"
  ],
  [
   "h3",
   "AI is one of the top goals for data teams"
  ],
  [
   "h3",
   "AI has gone from excitement to implementation"
  ],
  [
   "h3",
   "02"
  ],
  [
   "h2",
   "02 — Trust and data accuracy are the biggest concerns for AI"
  ],
  [
   "h3",
   "The majority of people feel positively about AI, but data quality is the biggest barrier to adopting it."
  ],
  [
   "h3",
   "Teams are using a variety of methods to build context."
  ],
  [
   "h3",
   "In a change from Spring, no one is questioning the value of semantic models now."
  ],
  [
   "h3",
   "03"
  ],
  [
   "h2",
   "03 — Leaders and practitioners want different AI tools"
  ],
  [
   "h3",
   "Data leaders envision more specialized AI-on-data tools"
  ],
  [
   "h3",
   "04"
  ],
  [
   "h2",
   "04 — Data teams are still growing as AI adoption accelerates"
  ],
  [
   "h3",
   "05"
  ],
  [
   "h2",
   "05 — What does this all mean for 2026?"
  ],
  [
   "h2",
   "Questions? Talk to us."
  ],
  [
   "h3",
   "FAQs"
  ]
 ],
 "surveyQuestions": [
  "On a scale of 1-5, how big of a priority is the following for you and your data team?",
  "What is one big goal you have for your team in the next year?",
  "What is one big goal you have for your team in the next year?",
  "What is the relationship between current and future AI tools (among data leaders)?",
  "What is one big goal you have for your team in the next year?",
  "What is the state of your data team?",
  "What is one big goal you have for your team in the next year?"
 ],
 "fullQuotes": [
  [
   "Move and build faster with AI.",
   "CEO, 300-person Tech company"
  ],
  [
   "Standing up our Intelligence product for AI/ML use cases internally and externally.",
   "CTO, 80-person data company"
  ],
  [
   "Enhance our user interface with data via an LLM.",
   "Marketing Director, 430-person data software company"
  ],
  [
   "Scale agentic solutions for high volume work.",
   "OD, 200-person web development agency"
  ]
 ],
 "charts": [
  "pages/company/state-of-data-teams/sodt-chart-1.1n989j91h0mhs.png",
  "pages/company/state-of-data-teams/sodt-chart-2.2sq2z760iot_j.png",
  "pages/company/state-of-data-teams/sodt-chart-3.3e9964ynaftan.png",
  "pages/company/state-of-data-teams/sodt-chart-4.3g9j5-1-i1fes.png",
  "pages/company/state-of-data-teams/sodt-chart-5.2m28fk0y5vd00.png",
  "pages/company/state-of-data-teams/sodt-chart-6.0nmsmk__i7qj7.png",
  "pages/company/state-of-data-teams/sodt-chart-7.29l3czotxuh15.png"
 ],
 "faq": [
  "How much has AI adoption changed for data teams in 2025?",
  "What challenges do data teams face when adopting AI?",
  "What is the biggest barrier to AI adoption for data teams?",
  "How are data teams building trusted AI context?",
  "What happened to semantic layer adoption in 2025?",
  "Are data teams growing or shrinking as AI adoption increases?",
  "What AI tools do data leaders expect to use more in the future?"
 ],
 "outroCard": {
  "title": "Questions? Talk to us.",
  "copy": "Get in touch with us to see a demo or find out which plan is right for you.",
  "cta": "Get started for free → https://app.hex.tech/signup"
 },
 "paragraphCounts": "intro 6; section 5 outro 6; each two-up 2–4 paragraphs (placeholder copy)"
}
```

## 8. Links
### 8.1 Header + footer (all pages except /state-of-data-teams/)
Identical to the homepage chrome (CLONE_SPEC §4.0 / §4.15). Internal: `/`, `/about/`, `/blog/`, `/blog/introducing-generative-data-apps/`, `/capability/ai/`, `/capability/exploratory-analysis/`, `/careers/`, `/compare/`, `/contact-us/`, `/customers/`, `/customers/langchain/`, `/enterprise/`, `/files/Hex_UK_Modern_Slavery_Act_Statement.pdf`, `/newsroom/`, `/partners/`, `/pricing/`, `/product/bi/`, `/product/cli/`, `/product/context-studio/`, `/product/data-apps/`, `/product/embedded-analytics/`, `/product/integrations/`, `/product/notebooks/`, `/product/switching-to-hex/`, `/product/threads/`, `/request-a-demo/`, `/resources/events/`, `/resources/guides/`, `/resources/guides/ai-analytics/`, `/solutions/`, `/solutions/customer-success/`, `/solutions/data-leaders/`, `/solutions/marketing/`, `/solutions/product-analytics/`, `/solutions/sales-analytics/`, `/state-of-data-teams/`, `/templates/`

External (plain hrefs): https://app.hex.tech/login, https://app.hex.tech/signup?source=nav, https://hexhq.notion.site/a091e1bb7bb34019bc4ccf2e3da8645f?v=bb640f9e0ef4499198673561e42a93f0, https://learn.hex.tech, https://learn.hex.tech/changelog, https://learn.hex.tech/docs/legal/terms-and-conditions, https://learn.hex.tech/docs/trust/privacy-policy, https://status.hex.tech, https://trust.hex.tech, https://www.linkedin.com/company/hex-technologies, https://www.youtube.com/@_hex_tech, https://x.com/hexanalytics, mailto:support@hex.tech

### 8.2 Internal links found in page bodies (paths on hex.tech), by page
- **/about/** (9): `/careers/`, `/customers/chime/`, `/customers/figma/`, `/customers/mercor/`, `/customers/neo-financial/`, `/customers/notion/`, `/customers/ramp/`, `/customers/stubhub/`, `/newsroom/`
- **/careers/** (40): `/careers/account-executive-commercial/`, `/careers/ai-engineer-intern/`, `/careers/ai-research-engineer/`, `/careers/brand-designer/`, `/careers/cloud-security-engineer/`, `/careers/customer-engineer/`, `/careers/data-person/`, `/careers/deal-desk-manager/`, `/careers/engineering-director-ai-engineering/`, `/careers/engineering-lead/`, `/careers/enterprise-account-executive/`, `/careers/founding-commercial-account-manager-/`, `/careers/founding-expansion-account-executive-(commercial)/`, `/careers/growth-marketing-manager-paid-marketing/`, `/careers/head-of-talent/`, `/careers/legal-ops/`, `/careers/manager-enterprise-sales/`, `/careers/midmarket-account-executive/`, `/careers/partner-manager-sis/`, `/careers/partner-solutions-engineer/`, `/careers/product-engineer-intern/`, `/careers/product-manager-(nyc)/`, `/careers/product-manager-(sf)/`, `/careers/recruiting-coordinator/`, `/careers/recruiting-operations-manager/`, `/careers/revenue-operations-director/`, `/careers/revenue-systems/`, `/careers/sales-development-representative/`, `/careers/sales-engineer-commercial-midmarket/`, `/careers/sales-engineer-enterprise/`, `/careers/sales-engineering-manager-commercial/`, `/careers/senior-it-systems-engineer/`, `/careers/software-engineer-ai-agent/`, `/careers/software-engineer-backend-(product)/`, `/careers/software-engineer-foundations/`, `/careers/software-engineer-fullstack/`, `/careers/software-engineer-infrastructure/`, `/careers/technical-sourcer/`, `/careers/web-designer/`, `/design/`
- **/blog/** (25): `/blog/ai-data-sprawl/`, `/blog/before-you-build-that-data-agent-i-have-notes/`, `/blog/caching-is-all-you-need/`, `/blog/category/company/`, `/blog/category/data-teams/`, `/blog/category/data/`, `/blog/category/design/`, `/blog/category/engineering/`, `/blog/category/friends-of-data/`, `/blog/category/further-reading/`, `/blog/category/product/`, `/blog/category/research/`, `/blog/category/security/`, `/blog/data-teams-in-ai-era/`, `/blog/databench-agentic-analytics-benchmark/`, `/blog/dont-migrate-300-dashboards/`, `/blog/evals/`, `/blog/generative-chart-controls/`, `/blog/hex-greenflash/`, `/blog/how-data-teams-use-context/`, `/blog/muse-wonder-databench/`, `/blog/next-bi-tool/`, `/blog/semantic-models-in-hex/`, `/blog/trust-used-to-be-implied/`, `/blog/we-used-evals-to-improve-ai-feature/`
- **/blog/introducing-generative-data-apps/** (4): `/blog/`, `/careers/`, `/product/cli/`, `/product/context-studio/`
- **/customers/** (39): `/customers/algolia/`, `/customers/alltrails/`, `/customers/calendly/`, `/customers/chime/`, `/customers/clay/`, `/customers/clickup/`, `/customers/doximity/`, `/customers/eliseai/`, `/customers/figma/`, `/customers/greenhouse/`, `/customers/hubspot/`, `/customers/huckberry/`, `/customers/infinite-lambda/`, `/customers/inquirer/`, `/customers/inventa/`, `/customers/kong/`, `/customers/langchain/`, `/customers/matter-labs/`, `/customers/mercor/`, `/customers/modal/`, `/customers/modern-treasury/`, `/customers/neo-financial/`, `/customers/notion/`, `/customers/om1/`, `/customers/orchard-insights/`, `/customers/pandadoc/`, `/customers/parallel-web-systems/`, `/customers/project0/`, `/customers/ramp/`, `/customers/recursion/`, `/customers/reddit/`, `/customers/stubhub/`, `/customers/supabase/`, `/customers/the-zebra/`, `/customers/topline-pro/`, `/customers/trade-coffee/`, `/customers/valon/`, `/customers/whatnot/`, `/customers/workrise/`
- **/customers/chime/** (6): `/customers/algolia/`, `/customers/alltrails/`, `/customers/figma/`, `/customers/hubspot/`, `/customers/notion/`, `/customers/reddit/`
- **/customers/figma/** (8): `/blog/introducing-notebook-agent/`, `/blog/introducing-threads/`, `/customers/algolia/`, `/customers/alltrails/`, `/customers/chime/`, `/customers/hubspot/`, `/customers/notion/`, `/customers/reddit/`
- **/customers/langchain/** (6): `/customers/algolia/`, `/customers/alltrails/`, `/customers/matter-labs/`, `/customers/parallel-web-systems/`, `/customers/project0/`, `/customers/topline-pro/`
- **/customers/mercor/** (6): `/customers/calendly/`, `/customers/clay/`, `/customers/eliseai/`, `/customers/kong/`, `/customers/modal/`, `/customers/supabase/`
- **/customers/neo-financial/** (5): `/blog/introducing-agent-in-slack-and-mcp/`, `/customers/modern-treasury/`, `/customers/ramp/`, `/customers/the-zebra/`, `/customers/valon/`
- **/customers/notion/** (9): `/blog/friends-of-data-daniel-sternberg/`, `/blog/introducing-notebook-agent/`, `/blog/introducing-threads/`, `/customers/algolia/`, `/customers/alltrails/`, `/customers/chime/`, `/customers/figma/`, `/customers/hubspot/`, `/customers/reddit/`
- **/customers/ramp/** (6): `/blog/friends-of-data-ian-macomber-ramp/`, `/blog/introducing-notebook-agent/`, `/customers/modern-treasury/`, `/customers/neo-financial/`, `/customers/the-zebra/`, `/customers/valon/`
- **/customers/stubhub/** (1): `/customers/inquirer/`
- **/resources/events/** (10): `/prompt/`, `/resources/video/ai-data-analytics-benchmarks/`, `/resources/video/ai-is-here-but-is-your-data-org-ready/`, `/resources/video/curating-your-workspace-for-ai-in-hex/`, `/resources/video/fall-2025-launch-demo-threads/`, `/resources/video/grounding-ai-in-trusted-context/`, `/resources/video/how-data-leaders-are-rethinking-governance-in-2025/`, `/resources/video/running-ai-powered-data-teams/`, `/resources/video/welcome-to-agentic-analytics/`, `/resources/video/what-every-data-leader-needs-to-know-about-self-serve-in-2025/`
- **/resources/guides/** (20): `/resources/ai-in-action/`, `/resources/ai-powered-notebook/`, `/resources/bi-buying-guide/`, `/resources/calendly-hex-one-pager/`, `/resources/candidly-evaluation-playbook-for-embedded-analytics/`, `/resources/context-guide/`, `/resources/data-app-click-up/`, `/resources/data-app-om1/`, `/resources/data-app-stubhub/`, `/resources/data-leaders-playbook-for-agentic-analytics/`, `/resources/data-team-governance-template/`, `/resources/data-team-zen/`, `/resources/drive-impact-with-data-apps/`, `/resources/health-life-science-data-teams/`, `/resources/llms-snowflake-cortex/`, `/resources/mastering-ad-hoc-analysis/`, `/resources/multi-modal-revolution/`, `/resources/recursion-op/`, `/resources/scaling-data-at-hubspot/`, `/resources/the-10x-data-team-for-data-leaders/`
- **/resources/guides/ai-analytics/** (9): `/blog/dashboards-were-never-the-destination/`, `/blog/evaluating-ai-wrong/`, `/blog/self-serve-is-finally-real/`, `/blog/using-threads-to-get-sales-team-data/`, `/blog/your-data-team-is-too-slow/`, `/customers/figma/`, `/customers/pandadoc/`, `/customers/project0/`, `/request-a-demo/`
- **/state-of-data-teams/** (2): `/request-a-demo/`, `/state-of-data-teams/2025/`
- **/templates/** (57): `/templates/`, `/templates/data-clustering/`, `/templates/data-clustering/cluster-analysis/`, `/templates/data-clustering/clustering-algorithms/`, `/templates/data-clustering/customer-segmentation/`, `/templates/data-clustering/document-similarity/`, `/templates/data-modeling/`, `/templates/data-modeling/collaborative-filtering/`, `/templates/data-modeling/content-based-filtering/`, `/templates/data-modeling/market-basket-analysis/`, `/templates/data-science/`, `/templates/data-science/a-b-testing/`, `/templates/data-science/anomaly-detection/`, `/templates/data-science/dbt-audit-helper/`, `/templates/data-science/fab-testing/`, `/templates/data-visualization/`, `/templates/data-visualization/geospatial-analysis/`, `/templates/data-visualization/python-mapping-libraries/`, `/templates/data-visualization/python-visualization/`, `/templates/exploratory-analysis/`, `/templates/exploratory-analysis/ad-hoc-exploration/`, `/templates/exploratory-analysis/exploratory-data-analysis/`, `/templates/exploratory-analysis/interactive-data-stories/`, `/templates/exploratory-analysis/text-SQL-chatbot/`, `/templates/feature-selection/`, `/templates/feature-selection/feature-selection/`, `/templates/feature-selection/linear-dimensionality-reduction/`, `/templates/feature-selection/non-linear-dimensionality-reduction/`, `/templates/kpi-dashboards/`, `/templates/kpi-dashboards/customer-health-dash/`, `/templates/kpi-dashboards/customer-lifetime-value/`, `/templates/kpi-dashboards/feature-success/`, `/templates/kpi-dashboards/sql-powered-dashboards/`, `/templates/natural-language-processing/`, `/templates/natural-language-processing/natural-language-processing/`, `/templates/natural-language-processing/nlp-spacy/`, `/templates/parameterized-query/`, `/templates/parameterized-query/feature-success-dashboard/`, `/templates/reporting/`, `/templates/reporting/automating-quarterly-reviews/`, `/templates/reporting/dbt-metrics/`, `/templates/reporting/period-over-period-analysis/`, `/templates/reporting/replacing-google-analytics-rudderstack/`, `/templates/sentiment-analysis/`, `/templates/sentiment-analysis/named-entity-recognition/`, `/templates/sentiment-analysis/sentiment-analysis/`, `/templates/sentiment-analysis/social-media-sentiment-analysis/`, `/templates/sentiment-analysis/vader-sentiment-analysis/`, `/templates/snowpark/`, `/templates/snowpark/analysis-of-customer-purchasing-behavior/`, `/templates/snowpark/data-science-with-snowpark/`, `/templates/snowpark/snowpark-ml-stored-procedures/`, `/templates/snowpark/time-series-analysis-snowpark/`, `/templates/time-series/`, `/templates/time-series/time-series-analysis-in-snowpark/`, `/templates/time-series/time-series-forecasting-prophet/`, `/templates/time-series/time-series-forecasting/`

Unique internal body paths: **208** (+37 chrome). Paths in the 8 customer-story/related-story sets, blog posts, `/careers/<role>/`, `/templates/<cat>/<slug>/` and `/resources/...` are NOT part of this group: route them to a 404 or keep as plain links until another group clones them.

### 8.3 External-domain links in page bodies (keep as plain `<a href>`; do not clone)
| Domain | URLs | Found on |
|---|---|---|
| app.hex.tech | https://app.hex.tech/signup<br>https://app.hex.tech/signup?source=blog-kicker<br>https://app.hex.tech/signup?source=blog-toc | /blog/introducing-generative-data-apps/, /state-of-data-teams/ |
| app.sequel.io | https://app.sequel.io/hex/bi-migration-skill | /resources/events/ |
| events.hex.tech | https://events.hex.tech/generative-apps-launch-event/<br>https://events.hex.tech/on-demand/17414725-a8db-4c83-ba58-ca3420e2ebc8 | /blog/introducing-generative-data-apps/, /customers/figma/ |
| fortune.com | https://fortune.com/2025/05/28/exclusive-hex-raises-a-70-million-series-c-to-double-down-on-data-in-the-ai-era/ | /newsroom/ |
| hexhq.notion.site | https://hexhq.notion.site/a091e1bb7bb34019bc4ccf2e3da8645f?v=bb640f9e0ef4499198673561e42a93f0<br>https://hexhq.notion.site/the-customer-team-hex | /careers/, /newsroom/ |
| learn.hex.tech | https://learn.hex.tech/changelog<br>https://learn.hex.tech/changelog/2024-10-18<br>https://learn.hex.tech/docs/agent-management/context-management/reference-repositories<br>https://learn.hex.tech/docs/connect-to-data/data-connections/data-connections-introduction#workspace-data-connection-permissions<br>https://learn.hex.tech/docs/connect-to-data/data-connections/snowpark<br>https://learn.hex.tech/docs/share-insights/apps/generative-apps<br>https://learn.hex.tech/docs/share-insights/hex-agent-in-slack | /blog/introducing-generative-data-apps/, /careers/, /customers/neo-financial/, /customers/notion/ |
| mailto | mailto:press@hex.tech<br>mailto:support@hex.tech | /blog/introducing-generative-data-apps/, /newsroom/ |
| maven.com | https://maven.com/dataneighbor/enterprise-context-management-for-analytics?promoCode=CONTEXT25 | /resources/events/ |
| ramp.com | https://ramp.com/ | /customers/ramp/ |
| twitter.com | https://twitter.com/share?text=Introducing%20Generative%20Data%20Apps&url=https%3A%2F%2Fhex.tech%2Fblog%2Fintroducing-generative-data-apps%2F | /blog/introducing-generative-data-apps/ |
| www.chime.com | https://www.chime.com/ | /customers/chime/ |
| www.figma.com | https://www.figma.com/ | /customers/figma/ |
| www.langchain.com | https://www.langchain.com/ | /customers/langchain/ |
| www.linkedin.com | https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fhex.tech%2Fblog%2Fintroducing-generative-data-apps%2F&title=Introducing%20Generative%20Data%20Apps | /blog/introducing-generative-data-apps/ |
| www.mercor.com | https://www.mercor.com/ | /customers/mercor/ |
| www.neofinancial.com | https://www.neofinancial.com/ | /customers/neo-financial/ |
| www.notion.so | https://www.notion.so/<br>https://www.notion.so/hexhq/Hex-Handbook-9fff0d42860e4f70815c599e0d1664d6<br>https://www.notion.so/hexhq/Working-at-Hex-4396aaae4827457c97739093a3d67340 | /about/, /careers/, /customers/notion/ |
| www.stubhub.com | https://www.stubhub.com/ | /customers/stubhub/ |
| www.youtube.com | https://www.youtube.com/watch?v=-aiLWduiUwc<br>https://www.youtube.com/watch?v=EDo24GfND-c<br>https://www.youtube.com/watch?v=H0m6UtYnvQo<br>https://www.youtube.com/watch?v=Px3qQ5mLDTI<br>https://www.youtube.com/watch?v=_1TozcgCaCo<br>https://www.youtube.com/watch?v=eg-ie4EGKmE<br>https://www.youtube.com/watch?v=kgki7iZMUbQ<br>https://www.youtube.com/watch?v=qHUiKSP1S78 | /customers/ramp/, /resources/events/ |
| youtu.be | https://youtu.be/XyeGWrjuaDM<br>https://youtu.be/d5M4OvIx5ZE | /resources/events/ |


## 9. Gaps / cannot be replicated exactly
1. **Blog commit graph** is a runtime `<canvas>` (one colored tick per post by category). Use `pages/company/blog/commit-graph-fallback@2x.png` (1286×54 CSS px) or redraw ticks with the category colors in §4.4.
2. **Blog search, category filtering, "View more", customers filter/sort, careers department/location filters, events Upcoming/On-demand filter**: client-side behaviors driven by CMS data. Visual states are specced; full datasets beyond the first page are not captured (by request).
3. **Guide download form** ("Download the guide" opens a HubSpot-style gated form modal) and **Sort-by dropdown options** were not opened; spec covers the closed state only.
4. **YouTube hero embed** (blog post) and Sanity-hosted videos: kept as iframe / local mp4s (4 files saved). Event/guide/template/press destinations are external or out of this group.
5. **Story/blog body copy** intentionally not copied (paragraph counts and headings only). Headings of the blog post are listed in §7.6.
6. Careers hero reveal timing depends on image preload time on the live site (≈5s on a cold headless load); the clone should start the 300ms staggered reveal after its own images load (or after mount if preloaded).
7. Customers marquee markup repeats each quote set 6 times (needed for the seamless loop); keep the repetition or use a 2-copy CSS marquee with the same 140s/4520px speed.
8. Hit counter number is dynamic (render static), as on the homepage.
9. SOTD chart images are PNGs (no live charts); the hatched "DATA TEAMS" artwork is an inline SVG (saved).
