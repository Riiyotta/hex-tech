# Shared layer: what is built (read before building any page)

Built 2026-10-23 on top of the verified homepage. Every component below is in `src/components/shared/` and exported from the barrel `src/components/shared/index.js` (`import { OutroTout, GlassCard } from '../components/shared'`), unless a different path is given. Section components that gained props stay in `src/components/sections/`.

Rules that still apply: no raw hex in JSX (use the tokens / CSS variables below), and don't rebuild anything listed here. Extend it with a prop instead and add the prop to this file.

Homepage regression after all changes (1440 / 390): document height 10662 / 18176 (unchanged), all 15 `[data-section]` boxes identical, 0 computed-style differences across 3,808 elements (colour, background, border, shadow, filter, font), no console errors.

---

## 1. Theme layer (dark = CSS-variable swap, identical markup)

| Piece | Where | What |
|---|---|---|
| Token values | `src/index.css`: `:root, [data-theme='light'] {…}` and `[data-theme='dark'] {…}` | Every `--fg100…1200`, `--fgA100…1200`, `--grid200…700/1200`, `--bg300/400/500`, `--fontColorDEFAULT/MUTED/LOUD`, `--fgLoud`, `--highlightColor` (+ `--highlight-rgb` channels), `--borderColor*`, `--texture-paper-*`, `--texture-hatch-img`, `--appUI-*`, `--magicColors-backgroundGradient/removingColor`. Light = CLONE_SPEC §2. Dark = product §1.1 / `_theme-tokens.css` / solutions `dark-theme-tokens.json`. |
| Component theme vars | same blocks | `--heading-gradient` / `--heading-gradient-color` (GradientHeader 90° eggplant→black / 55° white→rose), `--button-border-gradient`, `--button-fill`, `--button-fill-shadow`, `--button-fill-opacity` (1 light, .2 dark), `--checker-img` (#E8E4E6 / #312A31 checker SVG), `--logo-filter` (grayscale chain / `brightness(0) invert(1)`), `--nav-squished-shadow`, `--dropdown-bg`, `--glass-popover-bg/-shadow` (popover, hamburger, story popover = the dark glass), `--glass-card-color/-image/-shadow/-hover-shadow/-rest-shadow/-backdrop` (Card__Wrapper), `--home-glass-background-color` / `--home-glass-box-shadow`, `--window-bg-image/-shadow/-hover-shadow` (ProductWindow), `--callout-rule/-badge-bg/-badge-border/-icon/-link`, `--meta-color` (MetaRows label), `--story-indicator-rgb` (banner story dot). Theme-independent: palette (`--black`, `--white`, `--obsidian`, `--roseQuartz`, `--amethyst`, `--minsk`, `--eggplant`, `--jade`, `--citrine`, `--opal`, `--violetTopaz`, `--cement`, `--lightPurple` #AD8EB6), `--line-faint` rgba(0,0,0,.08), `--app-focus-outline`. |
| Tailwind tokens | `tailwind.config.cjs` | Same class names as before, now pointing at the vars: `fg-*`, `fg-a-*`, `ink` / `ink-muted` / `ink-loud` / `ink-link`, `grid-*`, `line` / `line-muted` / `line-strong`, `surface-300/400/500`, `app-*`. **New tokens:** `highlight` (supports opacity: `bg-highlight/30`, `text-highlight`), `ink-meta`, `line-faint`, `surface-dropdown`, `bg-hatch`, `shadow-glass-card-hover`, `shadow-resource-frame`. Re-pointed backgrounds/shadows: `bg-heading-gradient`, `bg-button-border`, `bg-ticker`, `bg-glass`, `bg-card`, `bg-tron`, `bg-checker`, `bg-graph-paper`, `bg-paper`, `bg-cartesian-tint` (now highlight-based: eggplant light, rose dark), `shadow-nav-squished`, `shadow-glass-popover`, `shadow-window(-hover)`, `shadow-glass-card`, `shadow-story-hover`, `shadow-integration-hover`, `shadow-ticker-inset`, `shadow-button-fill`. Removed: `bg-button-fill` (use `var(--button-fill)`). The brand palette (`eggplant`, `rose-quartz`, …) stays constant. Use `highlight` where the live CSS uses `--highlightColor`. |
| AbstractMark dark fills | `src/index.css` (end, unlayered) | `[data-theme='dark'] .abstract-mark [data-color=primary/secondary/highlight]` → white / rose / jade (product §1.1). |
| Route option | `src/routes.jsx` | `{ path: 'product/cli', theme: 'dark', element: <ProductCli /> }`. `theme` defaults to `'light'`. |
| Standalone layout | `src/routes.jsx` | `{ path: 'state-of-data-teams', layout: 'standalone', element: … }`: SiteShell renders no Header, ticker, nav or 32px bottom grid row (no Footer is rendered by the shell anyway). The page supplies its own shell. |
| SiteShell | `src/layouts/SiteShell.jsx` | Reads `theme`/`layout` from the matched route (`matchRoutes`), sets `data-theme` on the page wrapper **and on `<html>`** (so portals like the mobile menu follow), provides `ThemeContext`, wraps `<Outlet>` in `<Suspense>`. |
| ThemeScope / useTheme | `src/theme/Theme.jsx` (also re-exported from the shared barrel) | `<ThemeScope theme="light">…</ThemeScope>` re-scopes a subtree (renders a `div[data-theme]`, prop `as`). Use it for the light article slab inside the dark blog post (company §4.5). `useTheme()` returns `'light' \| 'dark'`. |

Dark values reached through tokens with no component change: Header (ticker strip, nav text white, logo + Log In `#E3B2B3`, nav hover `fgA500`, squished shadow, accent bars, hamburger glass), MegaMenu, MobileNav panel (`#111118`), Footer (links `#E3B2B3`, titles white, legal `#99797D`, dividers `#3A3138`, wordmark + hit-counter segments via `highlight`), Button, checkered margins, TronDivider, Faq, CustomerBanner, Integrations (svg + "Learn more" via `highlight`), CustomerStoriesTwoUp, ProductWindow shell, InlineQuote, HitCounter.

## 2. Existing components extended (defaults unchanged for the homepage)

### Button: `shared/Button.jsx`
`<Button variant size href external icon iconPosition iconSize selected corners block className …rest>`
- `variant` `'primary' | 'secondary'`, `size` `'lg' | 'md' | 'nav'` (unchanged).
- `icon` node: leading `Button__Icon` (15×15 box, `--fg1200`, gap 10). `iconSize` 15 default; 24 for solutions hub chips, 28 for the company customers filter. `iconPosition` `'start' | 'end'`.
- `selected` boolean: filter-chip selected state (bg `--fg1200`, label/icon `--bg300`, border `--grid500`, hover keeps the fill); sets `aria-pressed` on `<button>`.
- `corners` boolean: forces the hover corner-line brackets. Default stays: on for lg/nav, off for md. Pass `corners` for the company secondary md buttons.
- `block`: full width (`width: calc(100% - 42px)`, content-box). Solutions §4.2.2 375px feature CTA.
- Corner lines now honour `--button-cornerline-color`.
- Spec items: product R-Button, solutions §2.1 Button (block, chips), company §2 Button (icon, selected, md corners).

### InfoText: `shared/InfoText.jsx`
`<InfoText icon eyebrow title description cta size headingAs className>`
- `description` string (wrapped in a `<p>`) or node: 16/24 300 (20/30 when `size="h2"`), between the heading and the CTA.
- `size` `'h3'` (heading-3, default) or `'h2'` (heading-2 40/52, V1 TwoUp). The heading tag follows the size unless `headingAs` is given.
- `cta` `{ label, href, external, variant: 'primary' (default) | 'secondary', size: 'md', icon, corners }`. Omit it for no CTA.
- `eyebrow` node rendered first. The caller styles it.
- Spec items: product R-InfoText, company §2 InfoText (description, no CTA).

### CustomerBanner: `sections/CustomerBanner.jsx`
`<CustomerBanner label logos variant logoHeight>`
- `label` (default "Trusted by leading data companies"), `logos` (default `CUSTOMERS` from `sections/CustomerBanner/customers.js`): `[{ slug | src, name, w, h, story?: { href, align: 'left'|'right', quote, author, title } }]`. `slug` resolves to `/assets/logos/customers/<slug>.svg`.
- `variant` `'framed'` (default, §4.2) | `'minimal'` (solutions §3.2: padding 38/0, title Cinetype 500 14px, ul gap 20 / 15 ≤800, max-w 1000, li 50 tall, logo wrapper `px-8`; story logos keep dot + popover).
- `logoHeight` (minimal only): 50 by default (solutions T2/T4/T7 measured natural size). Pass 40 for product data-apps / embedded (measured 40).
- Dark: logo filter, label, rules, frame fill, popover glass and story dot are all token-driven.
- Spec items: product R-Banner, solutions §2.1 / §3.2, company About banner.

### Faq: `sections/Faq.jsx`
`<Faq title items answerStyle dividerColor showFooter contactHref tron id>`
- `title` `'FAQ'` (default) | string | node (rendered in place of the H2, e.g. the SOTD Editorial-italic "FAQs") | `null`.
- `items`: `[{ question, answer }]` or the `specs/product-faq.json` shape `[{ q, answerHtml }]`. Optional `id` per item for anchors (pricing).
- `answerStyle` `'home'` (16/24 300) | `'page'` (product/solutions `FAQ__Answer`: inherits 400 14/21.994; `ul` circle / pl 18 / gap 5; `strong` 500; links in the site `<a>` style).
- `dividerColor`: CSS colour for the heading and item rules. Default `var(--grid500)`; SOTD uses `'var(--line-faint)'`.
- `showFooter` (default true), `contactHref` (default `/request-a-demo/`), `tron` (default true), `id` (default `'faq'`).
- Also re-exports `TronDivider`.
- Spec items: product R-Faq, solutions §2.1 FAQ, company §4.11 SOTD FAQ.

### TronDivider: `shared/TronDivider.jsx` (moved out of `Faq.jsx`)
`<TronDivider flipped className>`: 9 rules (mb 3…10, opacity 1→.2) on `bg-fg-100 bg-tron`. `flipped` = `scaleY(-1)` (pricing). `className` replaces the wrapper margin (default `mb-[30px]`). Spec items: product R-Tron, solutions §2.1, company §4.10.

### G2Card: `shared/G2Card.jsx` (extracted from LovedByTeams)
`<G2Card title description link image className>`. All default to the homepage copy. `link` `{ label, href }` or null. `image` `{ src, alt, width, height }`. Spec items: product R-SocialTout.

### QuoteCard: `shared/QuoteCard.jsx` (extracted from LovedByTeams' Notion card)
`<QuoteCard variant logo quote author className>`
- `variant="glass"` (default): CustomerQuoteCard, radius-12 glass (light / dark glass via tokens), padding 38/45, logo max-h 45, quote rail, blockquote 24/36 300 loud (≤800 22/33), author `{ name, title, avatar: { src, alt } }` (35px circular headshot optional).
- `variant="bordered"`: solutions §4.2.4 "bordered-dark" (1px `--grid700` border, padding 38/35 / 30 ≤800, gap 25, logo max-h 35, blockquote 24px (22 ≤800) with a hanging “, author `{ name, title, company, avatar }` rendered as **name**  ·  title at Company; optional 45px avatar).
- `logo` `{ src, alt }`, `quote` node.
- Used by `sections/LovedByTeams.jsx`. Spec items: product R-SocialTout + N6 marquee cards, solutions §4.2.4.

### SocialTout: `shared/SocialTout.jsx` (new row wrapper for quote cards)
`<SocialTout padding inner className>`: Reveal row (padding 100/40, 60/40 ≤800, column + 60/30 ≤600) → inner (flex, items-center, gap 30, max-w 1240, column ≤800). `padding="none"` drops the padding. `inner` adds classes, e.g. `max-w-[816px]` for the exploratory single quote. Spec items: solutions §4.2.4 WrapperMotion/Inner, product R-SocialTout layouts.

### Rotator: `shared/Rotator.jsx` (generalized from the footer EmojiRotator)
`<Rotator items itemHeight width renderItem getKey interval moveDuration fadeOutDuration fadeInDuration className optionClassName>`
- Same mechanism: every `interval` (1200ms) it slides up one `itemHeight` (`moveDuration` .8s), fades the outgoing option over `fadeOutDuration` and the incoming over `fadeInDuration` (defaults are the footer vars .8s / 1.76s), then rotates the order and snaps back. Paused under reduced motion.
- `width` defaults to `itemHeight` (square). Use `'100%'` for words. Pass a module-level `items` array (its identity resets the cycle).
- Hub hero (solutions §4.1.1): `itemHeight={121}` (81 ≤600), `width="100%"`, `fadeOutDuration="0.3636s"`, `renderItem` = the 74px gradient H2.
- `sections/Footer/EmojiRotator.jsx` is now a thin wrapper around it.

### CustomerStoriesTwoUp: `sections/CustomerStoriesTwoUp.jsx`
`<CustomerStoriesTwoUp stories columns borderBottom nameSize logoClassName section>`
- `stories` `[{ logo: { src, alt }, before, emphasis, after, quote?, name, title }]` (`quote` replaces before/emphasis/after for plain quotes).
- `columns` 1 | 2 (default `min(stories.length, 2)`). 1 = centred single column, no centre rule.
- `borderBottom`: adds the bottom rule (integration QuotesMultiple).
- `nameSize` `'small'` (14) | `'body'` (16, context-studio).
- `logoClassName` overrides `'mx-auto h-[52px]'` (QuotesMultiple: `'mx-auto max-w-[200px] object-contain'`).
- `section` sets `data-section`.
- Dark bg `#0F0F15`, rule `#2B252C`, white logos come from tokens. Spec items: product R-TwoUpStories + §5 QuotesMultiple.

### PerlinNoise: `shared/PerlinNoise.jsx`
New props (existing ones unchanged):
- `duration`: CSS time for the drift (default global 8s). Use `'16s'` for the context-studio jade and pricing rose layers.
- `mask` `'dots' | 'none'`.
- `src`: custom texture URL (`/assets/pages/product/_shared/perlin-noise.png`, `/assets/pages/company/blog/perlin-noise.png`).
- `animation` `'drift' | 'translate'`. The new `translate-bg` keyframes run 0 0 → 0 -512px: 48s PerlinCallout, 36s blog card.
- `tint`: background-color under the texture.

Spec items: product R-Perlin, solutions §2.1 (rose 512 16s), company blog primary card.

### CartesianGrid: `shared/CartesianGrid.jsx` (extracted from `Hero.jsx`)
`<CartesianGrid className>`: the 32px unit grid + fade mask + radial tint. The tint is highlight-based (eggplant light, rose dark = product CLI). Put it inside an absolutely positioned backdrop. Spec items: company §2 CartesianGrid, product §4.2 HeroCLI.

### Other touched files (token swaps only, no behaviour change)
`components/header/MegaMenu.jsx` (dropdown bg → `bg-surface-dropdown`, illustration → `text-highlight`), `sections/Footer.jsx` (wordmark `text-highlight`), `sections/Footer/HitCounter.jsx` (`bg-highlight`, `/30`, `/10`), `sections/Integrations.jsx` (`text-highlight`), `sections/CustomerBanner/CustomerBanner.css` (story dot via `--story-indicator-rgb`), `sections/LovedByTeams.jsx` + `.css` (uses G2Card / QuoteCard; the card CSS moved to `index.css`), `sections/ContextStudio/ContextStudio.css` and `sections/TrustedAnswers/TrustedAnswers.css` (dropped local `--appUI-*` / `--bg500` re-declarations that would now be self-referential cycles; the global tokens supply the same values), `components/Hero.jsx` (uses CartesianGrid).

## 3. New cross-family shared blocks

All CSS for these is in `src/index.css` under `@layer components` ("Shared component CSS"), so `className` utilities you pass still win.

| Component (import) | Props | Variants / behaviour | Spec items it satisfies |
|---|---|---|---|
| `GlassCard` | `as` (default `'div'`), `interactive`, `className`, `…rest` | Card__Wrapper: radius 12, flex col / items-start / text-left, light glass or dark glass via tokens. Padding goes in `className`. `interactive`: perspective 800, 529.33ms spring on border/transform/box-shadow, `(hover:hover)` lift -4px + hover shadow (also when it is the direct child of a hovered `<a>`). | company P1; product §1.1 dark glass card, N7/N12 base; solutions §3.1 |
| `OutlineCard` | `as`, `accent`, `className`, `…rest` | 1px highlight-15% border, hover 30% + 10% fill (.25s). `accent` = 20px top-right tick. Rest fill via `--outline-card-bg` (default transparent). | product N5 / N10 card; solutions §4.2.7 card; company P8 / §4.10 |
| `OutroTout` | `title`, `description`, `actions` `[{label, href, variant, external}]`, `variant` `'default' \| 'band'`, `className` | Reveal → TronDivider → padded inner → accented OutlineCard (565 max, 68/60, gap 30) → H2 heading-2 + P 20/30 → lg buttons gap 15. `band` = solutions SolutionOutroCta: margin-top 132, rgba(173,142,182,.08) band, card fill `--fg100`, gap 20, P mb 5. | product N5 (8 pages); solutions §4.2.7 (5 pages); company §4.10 OutroCard. Also usable for enterprise CtaCard. |
| `SectionHeading` | `title`, `italic`, `description`, `variant` `'display' \| 'solution'`, `as`, `maxWidth` (690), `italicOffset` ('-18px'), `className` | `display`: heading-1 gradient H2 + optional italic line with 12px checker flanks + 20/30 description (product N2; BI `maxWidth={800}`, CLI `italicOffset="-1.7rem"`). `solution`: heading-2 gradient, margins 112/64, px 56, left-aligned ≤800 (solutions §4.2.3). | product N2; solutions §4.2.3 |
| `CompareVs` (+ `COMPARE_ITEMS`) | `layout` `'vertical' \| 'horizontal'`, `items` `[{ name, href, logo, ratio }]`, `className` | The CompareVs CSS module: dashed `--borderColorSTRONG` frame on `--texture-hatch-img`, Hex wordmark + "vs." row, interactive GlassCard links with white/grayscale competitor wordmarks (`public/assets/pages/compare/{looker,omni,sigma,tableau}.svg`, from the live DOM) and an arrow-top-right. Responsive rules as the module (vertical: row ≤1250, column ≤800; horizontal: 4 → 2 (≤1000) → 1 (≤600)). | product §4.1 #5 BI CompareVs (horizontal); solutions §4.5.1 CompareHero panel (vertical) |
| `V1PageLayout` | `className` (content column), `children` | V1PageWrapper: grid rules at outer cols 4/7/10 (`--grid300`, 4 and 10 hidden ≤450), margin lines (`--grid500` inner rule + 160px `--grid300` ticks), content column pt 200 (144 ≤800), 12-col grid, children span all columns. Use it as the page root and put the Footer inside. | product §1.5 (data-apps, embedded, exploratory, integrations + 17 details); solutions §1.3 (5 solution pages); company §3.2 (events, guides, templates) |
| `BasicPageRow` | `bordered`, `inner` `'padded' \| 'full' \| 'none'`, `reveal` (true), `as`, `className`, `rowClassName` | ContentSection row + live inner variants (padded: max 1240, 80/40, 60/0 ≤800, 40/0 ≤600; full: no padding). `reveal={false}` = InnerStatic first row. | product §1.4; company §3.2 |
| `Callout` | `icon` (SVG URL) or `iconNode`, `size` `'body' \| 'small'`, `className`, `children` | Left-ruled tinted note, 35px badge at left -18 / top 21. Light: grid-500 rule, white badge, minsk icon/links. Dark: rose rule/badge border, `#01011B` badge, `#E3B2B3` links. | company P2 (careers, newsroom, blog post); product §4.11 HeadingWithCallout |
| `AnimatedCta` | `href` (or none = `<button>`), `variant` `'primary' \| 'secondary'`, `color` `'loud' \| 'default'`, `icon`, `external`, `onClick`, `className`, `children` | Large CTA (clamp font 18.82px @1440, padding clamp…, gap 16) with the Accents: 4 × 14px corner circles that scale out (.3s, 40ms stagger) and 4 corner-line tracks that fade in and sweep (.4s) on hover. Primary: gradient border, glass shadow, fill ::after .2 → .3 → .6. Label loud (company) or `color="default"` (product Cta__PrimaryAnchor). `icon` → 36px round icon wrapper. Secondary (product): dashed muted border, `--bg300`, `--fg1200` label, paper texture, hover brightness 1.13. | company P3 (about, careers); product N8 Cta buttons (context-studio, threads) |
| `AnnouncementPill` | `href`, `icon` (nav icon SVG URL), `label`, `text`, `external`, `className` | Pill link with inner label pill, text + 16px chevron, hover shine (`announcement-pill-shine` 1s). | product N1 (bi, cli, context-studio, data-apps, notebooks, capability-ai) |
| `FullWidthQuote` | `logo` `{src, alt}`, `name`, `title`, `quote` (node; `<strong>` = bold loud), `className` | Full-bleed `--bg300` band, top rule, margin and bottom 8px ticks in `--fg1200`; desktop attribution / divider / quote row, mobile stacked layout ≤800. | product N4 (cli, context-studio, notebooks, threads) |
| `MetaRows` | `rows` `[{ label, value?, items?: [{text, color}] }]`, `size` 10 \| 12, `layout` `'stack' \| 'inline'`, `leading` ('21px'), `rowGap` ('2px'), `className` | Cinetype Mono rows; label `--meta-color` (rgba(20,20,28,.447) / rgba(255,255,255,.447)), values loud or item colour. `inline` = story header row (gap 40, padding 20/40). | company P7; solutions §4.1.3 card metadata; product BI resource cards |
| `ResourceCard` (+ `RESOURCE_TAGS`) | `href`, `type`, `title`, `tags` (keys of `RESOURCE_TAGS`), `readTime`, `image` `{src, alt, logo?}`, `placeholder` ('Blog post'), `external`, `className` | SolutionResourceCard: interactive GlassCard p-0 → media (tag illustration at .35 from `public/assets/pages/solutions/hub/illustrations/<tag>.svg`, chosen by the first tag) + 16:9 `--bg300` frame with a tag-tint border → type chip, H4 20/26, "Solution/" + coloured tags + read time. Tags: Data leader (jade), Sales (citrine), Marketing (violetTopaz), Product (cement), Core data team (amethyst), Customer success (opal). The caller builds the grid (hub `grid-cols-3 gap-[20px]`, BI `gap-[16px]`). | solutions §4.1.3 hub cards; product §4.1 #5 BI ResourceCards; company §4.10 ResourceCardsGrid |
| `DarkResourceCard` | `variant` `'event' \| 'template'`, `href`, `external`, `title`, `image` `{src, alt, ratio}`, `cta`, `footer`, `tag`, `author`, `description`, `className` | Accented OutlineCard (padding 10). `event`: figure (highlight 5%, aspect = `image.ratio`) + H4 PP Formula 700 28/36.4 + footer row with underlined CTA (hover .8). `template`: 220px preview with bottom-right tag (Plex Mono 700 12, `--fg100` bg) + H4 heading-4 / author (muted) / description 16/24 300. | company P8 (events, guides, templates); product N10 TemplateCard grid (data-apps, embedded, exploratory, notebooks) |
| `CustomerStoryCard` | `href`, `logo` `{src, alt, width, height, className}`, `title`, `meta` (MetaRows rows), `className` | `<a>` → interactive GlassCard (20 padding, gap 20) → 150px `--fg100` logo plate (1px `--grid500`, radius 6) → H4 + MetaRows. | company P5 (customers index, story related stories) |
| `ThemeScope`, `useTheme` | see §1 | | product §1.1, solutions §1, company §3.1 / §4.5 |

Icons: `shared/Icons.jsx` exports `ArrowRightIcon` and `ArrowTopRightIcon` (verbatim createIcon SVGs, currentColor).

## 4. Dev-only test route

`/__theme-test` (dark) and `/__theme-test/light` (light) render every shared piece above: `src/pages/__dev/ThemeTest.jsx`, registered in `src/routes.jsx` only under `import.meta.env.DEV` (lazy, not in production bundles). Checked against `reference/pages/product/cli-1440-full.png` (header/ticker/nav/primary button/pill), `reference/pages/solutions/compare-1440-full.jpg` (CompareVs, framed banner), `solution-data-leaders-1440-full.jpg` (band OutroTout, V1 rules, footer) and `enterprise-1440-full.jpg` (Integrations).

## 5. Spec conflicts and how they were resolved

1. **Dark nav item colour.** Company §3.1 says nav items are `#E3B2B3`. Product §1.2, solutions §1.2, the measured `nav` dump and the live CSS (`.fohAMM { color: var(--fgLoud) }`) say white. Resolved: white (`text-ink-loud`). Logo and Log In are `#E3B2B3`.
2. **Dark hit-counter border.** Solutions §1.2 measured `#F5C0C0`. Product §1.3 and the live rule (`.fKhwRR { border: 1px solid var(--grid500) }`) give `#3A3138`. Resolved: `--grid500` (the solutions value was most likely a hover/lit read). Lit segments use `--highlightColor`, unlit 30%, hover 10%, as in the live CSS.
3. **V1 responsive grid rules.** Product §1.5 says rules 4/10 hide ≤800. Solutions §1.3 and the live CSS (`V1PageWrapper__ResponsiveGridRule @media (max-width:450px)`) say ≤450. Resolved: ≤450. The V1 margin inner rule is `--grid500` (measured `rgb(58,49,56)`), not the minor colour.
4. **Minimal banner logo height.** Solutions measured natural 50px. Product data-apps measured 40px. Resolved: `logoHeight` prop, default 50, product passes 40.
5. **Rotator fade-out.** The homepage footer uses .8s and the hub measured .3636s. Resolved: `fadeOutDuration` prop. The default stays the homepage value.
6. **OutroTout vs SolutionOutroCta vs company OutroCard.** These are the same `Card__Wrapper iPCpvK` class in all three DOMs. Resolved: one component, with `variant="band"` for the solutions band, card fill, gap 20 and margin-top 132.
7. **Product BI "ResourceCards" vs solutions hub SolutionResourceCard vs company ResourceCardsGrid.** These are the same card. Resolved: `ResourceCard`. Token-driven chip, frame and meta colours reproduce both the light (BI, company) and dark (hub) measurements. The solutions T2 "ResourceCards" (§4.2.6: image + H3 + Read more, no card) is a different block and was **not** built (solutions-only).
8. **AnimatedCta label colour.** Company `Cta__PrimaryCta` uses `--fontColorLOUD` and product `Cta__PrimaryAnchor` uses `--fontColorDEFAULT`. Both are live rules. Resolved: `color` prop. Font size: product §2.2 says "20px @1440", but the shared clamp evaluates to 18.82px at 1440 (company measured 18.8184px). The clamp is used.
9. **DarkResourceCard corner accent.** Company P8 doesn't mention one, but the events/templates CSS has the same `iPCpvK` accent rules. Resolved: accent on.
10. **FullWidthQuote bottom ticks.** The spec says `left:0`, the live CSS says `left:-1px` / `right:-1px`. The CSS was used.
11. **AnnouncementPill label colour.** No colour rule exists, so the label inherits `--fg1200`. The spec's text colour (`rgb(67,57,76)` / `#E3B2B3`) is the same var.

## 6. Gaps (not measured; flagged, not guessed beyond what's noted)

- **Dark mega-menu dropdown background:** there's no dark capture. `--dropdown-bg` is `#FFFFFF` light (measured) and `#14141C` dark (unmeasured; chosen so the white dark-theme item text stays legible). Verify if a dark nav-open capture becomes available.
- **Dark ProductWindow hover shadow:** not measured, so it reuses the dark rest shadow. The dark window title (white @ .5) and traffic lights (product §1.1) aren't applied, because those are window-mock internals. The TrustedAnswers/ContextStudio mock CSS still hardcodes white backgrounds (`theme('colors.white')`). Page builders that reuse those windows on dark pages need to theme those mock rules.
- **Dark banner popover divider** (`.cb-divider` rgba(20,20,28,.16)): no dark value was measured. Left as is.
- **AnimatedCta rest transition:** both specs give no transform duration for the rest state, so it is `0s` (lines jump back while fading out over .4s). Confirm against the live site if possible.
- **FullWidthQuote divider height:** the live `height:100%` divider measured 133px (attribution height). The clone stretches it to the row height, which only differs when the quote is taller than the attribution.
- **CustomerStoryCard logo colouring on the light plate** isn't specified. The caller can pass `logo.className` (e.g. `'logo-grayscale'`).

## 7. Spec items deliberately left to page builders (single-family or page-specific)

Product: N3 CodePill, N6 CustomerQuotesMarquee (use `QuoteCard` for its cards), N7 ImageInfoCard (use `GlassCard`), N8 VideoHero Thumbnail + VideoModal (the CTAs are `AnimatedCta`), N9 InstallScript, N10 V1Hero / V1H2Panel / V1TwoUp (build on `V1PageLayout` + `InfoText size="h2"`), N11 PerlinCallout (use `PerlinNoise src/animation="translate"`), N12 BentoCell, and all §4/§5 page sections.
Solutions: CheckList/CheckItem (enterprise only), solutions T2 ResourceCards (§4.2.6), SolutionHero, SolutionFeatureRow, LiveAppEmbed, hub hero/filter/grid (use `Rotator`, `Button selected icon`, `ResourceCard`), pricing, partners, HubSpot forms.
Company: P4 NewsroomPostCard (use `GlassCard`), P6 RichText, P9 DarkSectionHeader, P10 SidebarFilter, P11 V1Intro, P12 SocialShare, SOTD sections (use `layout: 'standalone'` + `Faq title={node} dividerColor="var(--line-faint)"`), and all §4 page sections.

## 8. Motion status

Built and running: hover states and CSS transitions for GlassCard (529ms spring lift), OutlineCard, AnimatedCta accents, AnnouncementPill shine, Button chips, DarkResourceCard CTA, CompareVs cards; Rotator timer; PerlinNoise drift/translate; `Reveal` on OutroTout / SocialTout / BasicPageRow / CustomerBanner minimal.

Not built (need Animation): solutions hub `glass-enter` panel entrance, the marquees (product N6, company customers), the careers photo-wall blur-in, the blog CTA circles / meta slide, VideoHero thumbnail spring and play-ring rotation, BentoCell hover, SOTD TOC card hover, and the SidebarFilter highlight slide.
