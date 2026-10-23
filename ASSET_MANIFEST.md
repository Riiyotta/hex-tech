# Asset Manifest - hex.tech homepage

Source: https://hex.tech/

All paths relative to `public/assets/` (serve as `/assets/...`). 131 files. Rendered sizes measured at 1440px viewport unless noted.

Inline SVGs under `svg/` were serialized from the live DOM; several use `currentColor` (nav chevrons, icons, hex logo) so set `color` on the parent (e.g. logo color #43394C via the wrapping link, nav icons #43394C).

Integrations-card illustrations are HTML+SVG compositions, saved as markup in `reference/dom/illustrations-integrations-card-{1..6}.html` rather than single files.

| Local path | Original URL | Used where | Rendered size |
|---|---|---|---|
| `fonts/GT-Cinetype-Regular.woff2` | https://hex.tech/fonts/cinetype/GT-Cinetype-Regular.woff2 | font-family Cinetype 400 - nav, buttons, body 14px, links, footer | - |
| `fonts/GT-Cinetype-Light.woff2` | https://hex.tech/fonts/cinetype/GT-Cinetype-Light.woff2 | Cinetype 300 - all body copy/sub-heads (16/20/24px) | - |
| `fonts/GT-Cinetype-Bold.woff2` | https://hex.tech/fonts/cinetype/GT-Cinetype-Bold.woff2 | Cinetype 600/700 (declared weight 600) - bold <em> in two-up quotes | - |
| `fonts/GT-Cinetype-Mono.woff2` | https://hex.tech/fonts/cinetype/GT-Cinetype-Mono.woff2 | "Cinetype Mono" 400 - ticker, eyebrows, labels, quote authors, window titles | - |
| `fonts/PP-Formula-SemiExtendedBold.woff2` | https://hex.tech/fonts/formula/PP-Formula-SemiExtendedBold.woff2 | "PP Formula SemiExtended" 600 (renders 700) - H1 + heading-1 section titles | - |
| `fonts/PP-Formula-ExtraBold.woff2` | https://hex.tech/fonts/formula/PP-Formula-ExtraBold.woff2 | "PP Formula" 700 face (rendered weights 800/600) - heading-2/3/4 | - |
| `fonts/PP-Formula-Regular.woff2` | https://hex.tech/fonts/formula/PP-Formula-Regular.woff2 | "PP Formula" 400 - declared in @font-face, not requested on homepage (kept for completeness) | - |
| `fonts/PPEditorialNew-UltralightItalic.woff2` | https://hex.tech/fonts/editorial/PPEditorialNew-UltralightItalic.woff2 | "PP Editorial New" 200 italic - italic display words (hero line 2, "Loved", "Instant integration", "Get the most out of Hex") | - |
| `fonts/PPEditorialNew-Italic.woff2` | https://hex.tech/fonts/editorial/PPEditorialNew-Italic.woff2 | "PP Editorial New" 400 italic - declared, not requested on homepage | - |
| `fonts/PPEditorialNew-Regular.woff2` | https://hex.tech/fonts/editorial/PPEditorialNew-Regular.woff2 | "PP Editorial New" 400 normal - declared, not requested on homepage | - |
| `fonts/IBMPlexSans-Variable-latin.woff2` | https://hex.tech/_next/static/media/03fc1b4a8d284b5e-s.p.0wiir8udbzjvx.woff2 | "IBM Plex Sans" 300-700 (variable, latin subset) - product UI mockups (chat thread, dashboards, evals) | - |
| `fonts/IBMPlexMono-400-latin.woff2` | https://hex.tech/_next/static/media/99e609270109b47d-s.p.40sczeszzbjw1.woff2 | "IBM Plex Mono" 400 latin - terminal mockup | - |
| `fonts/IBMPlexMono-500-latin.woff2` | https://hex.tech/_next/static/media/effe91970fc4db64-s.p.0oace-s_gkfks.woff2 | "IBM Plex Mono" 500 latin | - |
| `fonts/IBMPlexMono-700-latin.woff2` | https://hex.tech/_next/static/media/a7e15459c1805da0-s.p.3y9b8znjr2455.woff2 | "IBM Plex Mono" 700 latin - footer column titles, "Read more"/"Learn more" | - |
| `fonts/Lato-400-latin.woff2` | https://fonts.gstatic.com/s/lato/v25/S6uyw4BMUTPHjx4wXiWtFCc.woff2 | Lato 400 - Slack mockup message text | - |
| `fonts/Lato-700-latin.woff2` | https://fonts.gstatic.com/s/lato/v25/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2 | Lato 700 - Slack mockup author names | - |
| `logos/customers/reddit.svg` | https://cdn.sanity.io/images/e92memrj/production/7bb676f30dbd80023b0c7af23e60ff630b4cdc4d-115x50.svg | Customer banner row 1. Rendered with CSS filter: invert(1) sepia(0) saturate(0.01) hue-rotate(339deg) brightness(1) contrast(1.01) (source SVGs are light/white) | 92x40 |
| `logos/customers/notion.svg` | https://cdn.sanity.io/images/e92memrj/production/6f211c674b14be69b85497264b1d654b138dce01-39x50.svg | Customer banner (story link) 31x40; popover logo 25x32; Social quote card logo 35x45. Rendered with CSS filter: invert(1) sepia(0) saturate(0.01) hue-rotate(339deg) brightness(1) contrast(1.01) (source SVGs are light/white) | 31x40 |
| `logos/customers/sierra.svg` | https://cdn.sanity.io/images/e92memrj/production/5783f604cc851deebb39d819edab6e8a82efba14-120x50.svg | Customer banner. Rendered with CSS filter: invert(1) sepia(0) saturate(0.01) hue-rotate(339deg) brightness(1) contrast(1.01) (source SVGs are light/white) | 96x40 |
| `logos/customers/anthropic.svg` | https://cdn.sanity.io/images/e92memrj/production/41a6cd8e000ffa2cf99de391f0104b2cbdd9072e-132x50.svg | Customer banner. Rendered with CSS filter: invert(1) sepia(0) saturate(0.01) hue-rotate(339deg) brightness(1) contrast(1.01) (source SVGs are light/white) | 106x40 |
| `logos/customers/lovable.svg` | https://cdn.sanity.io/images/e92memrj/production/d063f2a64adcd7869bc2fc81dbc971825be8b951-137x50.svg | Customer banner. Rendered with CSS filter: invert(1) sepia(0) saturate(0.01) hue-rotate(339deg) brightness(1) contrast(1.01) (source SVGs are light/white) | 110x40 |
| `logos/customers/ramp.svg` | https://cdn.sanity.io/images/e92memrj/production/892932e7f3dc3c66d3ae4a16e8bc51e37b7f59f4-120x50.svg | Customer banner (story) ; popover 77x32. Rendered with CSS filter: invert(1) sepia(0) saturate(0.01) hue-rotate(339deg) brightness(1) contrast(1.01) (source SVGs are light/white) | 96x40 |
| `logos/customers/rivian.svg` | https://cdn.sanity.io/images/e92memrj/production/bbdc4677c2d8318584c6b22af2f587930714bf2b-150x50.svg | Customer banner. Rendered with CSS filter: invert(1) sepia(0) saturate(0.01) hue-rotate(339deg) brightness(1) contrast(1.01) (source SVGs are light/white) | 120x40 |
| `logos/customers/figma.svg` | https://cdn.sanity.io/images/e92memrj/production/f7df402cfb3dac549c3f877c09425534abc7650b-97x50.svg | Customer banner (story) ; popover 62x32 ; Conversational-analytics quote logo 67x35. Rendered with CSS filter: invert(1) sepia(0) saturate(0.01) hue-rotate(339deg) brightness(1) contrast(1.01) (source SVGs are light/white) | 78x40 |
| `logos/customers/brex.svg` | https://cdn.sanity.io/images/e92memrj/production/797daac5d8ce0c8f853f32db64dddf44234caf15-110x50.svg | Customer banner. Rendered with CSS filter: invert(1) sepia(0) saturate(0.01) hue-rotate(339deg) brightness(1) contrast(1.01) (source SVGs are light/white) | 88x40 |
| `logos/customers/cursor.svg` | https://cdn.sanity.io/images/e92memrj/production/a615639dcd7fcba9003a57aa62a26c8b280d0a86-126x50.svg | Customer banner row 2. Rendered with CSS filter: invert(1) sepia(0) saturate(0.01) hue-rotate(339deg) brightness(1) contrast(1.01) (source SVGs are light/white) | 101x40 |
| `logos/customers/aws.svg` | https://cdn.sanity.io/images/e92memrj/production/c08ae57d05ad520fd55fe52545e318484031457a-63x50.svg | Customer banner. Rendered with CSS filter: invert(1) sepia(0) saturate(0.01) hue-rotate(339deg) brightness(1) contrast(1.01) (source SVGs are light/white) | 50x40 |
| `logos/customers/sedgwick.svg` | https://cdn.sanity.io/images/e92memrj/production/097bf80beeaf8d877aedf4ecade8b0d1dd087459-150x50.svg | Customer banner. Rendered with CSS filter: invert(1) sepia(0) saturate(0.01) hue-rotate(339deg) brightness(1) contrast(1.01) (source SVGs are light/white) | 120x40 |
| `logos/customers/stubhub.svg` | https://cdn.sanity.io/images/e92memrj/production/84cee8330df6df867d752ef0336d987b73845add-81x50.svg | Customer banner (story) ; popover 52x32. Rendered with CSS filter: invert(1) sepia(0) saturate(0.01) hue-rotate(339deg) brightness(1) contrast(1.01) (source SVGs are light/white) | 65x40 |
| `logos/customers/mercor.svg` | https://cdn.sanity.io/images/e92memrj/production/92b9cd2232a417db021ffe38f96d45a896e85cba-131x50.svg | Customer banner (story) ; popover 84x32 ; two-up left logo 136x52. Rendered with CSS filter: invert(1) sepia(0) saturate(0.01) hue-rotate(339deg) brightness(1) contrast(1.01) (source SVGs are light/white) | 105x40 |
| `logos/customers/thinking-machines.svg` | https://cdn.sanity.io/images/e92memrj/production/88569672b2f83cdf27122baa02120d638296051a-200x50.svg | Customer banner. Rendered with CSS filter: invert(1) sepia(0) saturate(0.01) hue-rotate(339deg) brightness(1) contrast(1.01) (source SVGs are light/white) | 160x40 |
| `logos/customers/surge-ai.svg` | https://cdn.sanity.io/images/e92memrj/production/77b9c8ba35fb128f05a08c7804d2f8e9a8e3f0a9-96x50.svg | Customer banner. Rendered with CSS filter: invert(1) sepia(0) saturate(0.01) hue-rotate(339deg) brightness(1) contrast(1.01) (source SVGs are light/white) | 77x40 |
| `logos/customers/neo-financial.svg` | https://cdn.sanity.io/images/e92memrj/production/ba0c09ff2b2ba796246ce69e4e971751bccaae37-76x50.svg | Customer banner (story) ; popover 49x32. Rendered with CSS filter: invert(1) sepia(0) saturate(0.01) hue-rotate(339deg) brightness(1) contrast(1.01) (source SVGs are light/white) | 61x40 |
| `logos/customers/chime.svg` | https://cdn.sanity.io/images/e92memrj/production/20bf8a6fe0ca725b28527c135c22f237938f5ef5-94x50.svg | Customer banner (story) ; popover 60x32 ; Context Studio quote logo 56x30. Rendered with CSS filter: invert(1) sepia(0) saturate(0.01) hue-rotate(339deg) brightness(1) contrast(1.01) (source SVGs are light/white) | 75x40 |
| `logos/customers/langchain.svg` | https://cdn.sanity.io/images/e92memrj/production/0b907ba3d40fe1012f1118d105620c7779a49949-135x50.svg | Trusted-answers inline quote logo. Rendered with CSS filter: invert(1) sepia(0) saturate(0.01) hue-rotate(339deg) brightness(1) contrast(1.01) (source SVGs are light/white) | 86x32 |
| `logos/customers/zoe.svg` | https://cdn.sanity.io/images/e92memrj/production/ac4cbae3f4b1d599f5d51d290bd183be0b16253a-114x50.svg | Org-context inline quote logo. Rendered with CSS filter: invert(1) sepia(0) saturate(0.01) hue-rotate(339deg) brightness(1) contrast(1.01) (source SVGs are light/white) | 50x22 |
| `logos/customers/algolia.svg` | https://cdn.sanity.io/images/e92memrj/production/643fb40019cd60627bf6f354c5bffdfd66017ce9-97x51.svg | Two-up right column logo. Rendered with CSS filter: invert(1) sepia(0) saturate(0.01) hue-rotate(339deg) brightness(1) contrast(1.01) (source SVGs are light/white) | 99x52 |
| `icons/mcp/arrow-up.svg` | https://hex.tech/images/interactive-features/mcp/arrow-up.svg | Trusted-answers section: agent logo stack (InfoText icon) + Claude/Codex MCP window chrome | 16x16 |
| `icons/mcp/chevron.svg` | https://hex.tech/images/interactive-features/mcp/chevron.svg | Trusted-answers section: agent logo stack (InfoText icon) + Claude/Codex MCP window chrome | 5x9 |
| `icons/mcp/logo-chatgpt.svg` | https://hex.tech/images/interactive-features/mcp/logo-chatgpt.svg | Trusted-answers section: agent logo stack (InfoText icon) + Claude/Codex MCP window chrome | 20x20 / 22x22 |
| `icons/mcp/logo-claude.svg` | https://hex.tech/images/interactive-features/mcp/logo-claude.svg | Trusted-answers section: agent logo stack (InfoText icon) + Claude/Codex MCP window chrome | 20x20 / 22x22 / 16x16 |
| `icons/mcp/logo-cli.svg` | https://hex.tech/images/interactive-features/mcp/logo-cli.svg | Trusted-answers section: agent logo stack (InfoText icon) + Claude/Codex MCP window chrome | 20x20 |
| `icons/mcp/logo-mcp.svg` | https://hex.tech/images/interactive-features/mcp/logo-mcp.svg | Trusted-answers section: agent logo stack (InfoText icon) + Claude/Codex MCP window chrome | 20x20 |
| `icons/mcp/logo-slack.svg` | https://hex.tech/images/interactive-features/mcp/logo-slack.svg | Trusted-answers section: agent logo stack (InfoText icon) + Claude/Codex MCP window chrome | 20x20 |
| `icons/mcp/microphone.svg` | https://hex.tech/images/interactive-features/mcp/microphone.svg | Trusted-answers section: agent logo stack (InfoText icon) + Claude/Codex MCP window chrome | 12x16 |
| `icons/mcp/sidebar.svg` | https://hex.tech/images/interactive-features/mcp/sidebar.svg | Trusted-answers section: agent logo stack (InfoText icon) + Claude/Codex MCP window chrome | 16x16 |
| `icons/mcp/traffic-lights.svg` | https://hex.tech/images/interactive-features/mcp/traffic-lights.svg | Trusted-answers section: agent logo stack (InfoText icon) + Claude/Codex MCP window chrome | 44x12 |
| `icons/evals/passed.svg` | https://hex.tech/images/interactive-features/evals/passed.svg | Context Studio > Evals window pass badges | 14x14 / 16x16 |
| `icons/evals/failed.svg` | https://hex.tech/images/interactive-features/evals/failed.svg | Context Studio > Evals window fail badges | 14x14 / 16x16 |
| `textures/noise-eggplant-128x128.png` | https://hex.tech/images/home-2025/textures/noise-eggplant-128x128.png | PerlinNoise texture: hero backdrop, use-cases backdrop, product-ethos illustration frames (bg-size 1024px, opacity .24, dot-grid mask 6px) | 128x128 tile |
| `textures/noise-jade-128x128.png` | https://hex.tech/images/home-2025/textures/noise-jade-128x128.png | Org cycle step 1 hover noise (256px) | 128x128 tile |
| `textures/noise-citrine-128x128.png` | https://hex.tech/images/home-2025/textures/noise-citrine-128x128.png | Org cycle step 2 hover noise (256px) | 128x128 tile |
| `textures/noise-amythyst-128x128.png` | https://hex.tech/images/home-2025/textures/noise-amythyst-128x128.png | Org cycle step 3 hover noise (256px) | 128x128 tile |
| `textures/noise-rose-128x128.png` | https://hex.tech/images/home-2025/textures/noise-rose-128x128.png | Nav dropdown callout ("AI & agents") hover noise (512px) | 128x128 tile |
| `textures/light-bkg-noise.webp` | https://hex.tech/images/light-bkg-noise.webp | --texture-paper-img (light theme): paper grain over page bg, nav bg, ticker, org steps; bg-size 256px, opacity .06 | 512x512 tile @256px |
| `textures/bkg-noise.webp` | https://hex.tech/images/bkg-noise.webp | Dark-theme paper texture default (:root); not visible on light homepage | 200x200 |
| `images/conversational-analytics/example-app-market-explorer-1.jpg` | https://hex.tech/images/home/fall-2026/conversational-analytics/example-app-market-explorer-1.jpg | Conversational-analytics project window 1 (top-left), frame 1 of 4 (cross-fades on a timer) | 1200x870 source; rendered 410x297 @1440 |
| `images/conversational-analytics/example-app-market-explorer-2.jpg` | https://hex.tech/images/home/fall-2026/conversational-analytics/example-app-market-explorer-2.jpg | Conversational-analytics project window 1 (top-left), frame 2 of 4 (cross-fades on a timer) | 1200x870 source; rendered 410x297 @1440 |
| `images/conversational-analytics/example-app-market-explorer-3.jpg` | https://hex.tech/images/home/fall-2026/conversational-analytics/example-app-market-explorer-3.jpg | Conversational-analytics project window 1 (top-left), frame 3 of 4 (cross-fades on a timer) | 1200x870 source; rendered 410x297 @1440 |
| `images/conversational-analytics/example-app-market-explorer-4.jpg` | https://hex.tech/images/home/fall-2026/conversational-analytics/example-app-market-explorer-4.jpg | Conversational-analytics project window 1 (top-left), frame 4 of 4 (cross-fades on a timer) | 1200x870 source; rendered 410x297 @1440 |
| `images/conversational-analytics/example-app-revenue-pulse-1.jpg` | https://hex.tech/images/home/fall-2026/conversational-analytics/example-app-revenue-pulse-1.jpg | Conversational-analytics project window 2 (top-right), frame 1 of 4 (cross-fades on a timer) | 1200x870 source; rendered 410x297 @1440 |
| `images/conversational-analytics/example-app-revenue-pulse-2.jpg` | https://hex.tech/images/home/fall-2026/conversational-analytics/example-app-revenue-pulse-2.jpg | Conversational-analytics project window 2 (top-right), frame 2 of 4 (cross-fades on a timer) | 1200x870 source; rendered 410x297 @1440 |
| `images/conversational-analytics/example-app-revenue-pulse-3.jpg` | https://hex.tech/images/home/fall-2026/conversational-analytics/example-app-revenue-pulse-3.jpg | Conversational-analytics project window 2 (top-right), frame 3 of 4 (cross-fades on a timer) | 1200x870 source; rendered 410x297 @1440 |
| `images/conversational-analytics/example-app-revenue-pulse-4.jpg` | https://hex.tech/images/home/fall-2026/conversational-analytics/example-app-revenue-pulse-4.jpg | Conversational-analytics project window 2 (top-right), frame 4 of 4 (cross-fades on a timer) | 1200x870 source; rendered 410x297 @1440 |
| `images/conversational-analytics/example-app-pricing-lab-1.jpg` | https://hex.tech/images/home/fall-2026/conversational-analytics/example-app-pricing-lab-1.jpg | Conversational-analytics project window 3 (bottom-left), frame 1 of 4 (cross-fades on a timer) | 1200x870 source; rendered 410x297 @1440 |
| `images/conversational-analytics/example-app-pricing-lab-2.jpg` | https://hex.tech/images/home/fall-2026/conversational-analytics/example-app-pricing-lab-2.jpg | Conversational-analytics project window 3 (bottom-left), frame 2 of 4 (cross-fades on a timer) | 1200x870 source; rendered 410x297 @1440 |
| `images/conversational-analytics/example-app-pricing-lab-3.jpg` | https://hex.tech/images/home/fall-2026/conversational-analytics/example-app-pricing-lab-3.jpg | Conversational-analytics project window 3 (bottom-left), frame 3 of 4 (cross-fades on a timer) | 1200x870 source; rendered 410x297 @1440 |
| `images/conversational-analytics/example-app-pricing-lab-4.jpg` | https://hex.tech/images/home/fall-2026/conversational-analytics/example-app-pricing-lab-4.jpg | Conversational-analytics project window 3 (bottom-left), frame 4 of 4 (cross-fades on a timer) | 1200x870 source; rendered 410x297 @1440 |
| `images/conversational-analytics/example-app-account-watch-1.jpg` | https://hex.tech/images/home/fall-2026/conversational-analytics/example-app-account-watch-1.jpg | Conversational-analytics project window 4 (bottom-right), frame 1 of 4 (cross-fades on a timer) | 1200x870 source; rendered 410x297 @1440 |
| `images/conversational-analytics/example-app-account-watch-2.jpg` | https://hex.tech/images/home/fall-2026/conversational-analytics/example-app-account-watch-2.jpg | Conversational-analytics project window 4 (bottom-right), frame 2 of 4 (cross-fades on a timer) | 1200x870 source; rendered 410x297 @1440 |
| `images/conversational-analytics/example-app-account-watch-3.jpg` | https://hex.tech/images/home/fall-2026/conversational-analytics/example-app-account-watch-3.jpg | Conversational-analytics project window 4 (bottom-right), frame 3 of 4 (cross-fades on a timer) | 1200x870 source; rendered 410x297 @1440 |
| `images/conversational-analytics/example-app-account-watch-4.jpg` | https://hex.tech/images/home/fall-2026/conversational-analytics/example-app-account-watch-4.jpg | Conversational-analytics project window 4 (bottom-right), frame 4 of 4 (cross-fades on a timer) | 1200x870 source; rendered 410x297 @1440 |
| `images/product-ethos/product-ethos-token-spend@2x.png` | https://hex.tech/images/home/fall-2026/product-ethos-token-spend@2x.png | Product ethos card 1 illustration ("Flexible by design") | 1176x512 source; 588x256 rendered |
| `images/product-ethos/product-ethos-trust@2x.png` | https://hex.tech/images/home/fall-2026/product-ethos-trust@2x.png | Product ethos card 2 illustration ("Control without compromise") | 1176x512 source; 588x256 rendered |
| `images/misc/g2-awards.svg` | https://hex.tech/images/g2-awards.svg | G2 social proof card (6 badges) | 280x217 (intrinsic 838x627) |
| `images/misc/abhishek-modi-headshot.jpg` | https://hex.tech/images/headshots/abhishek-modi-headshot.jpg | Notion quote card author avatar (round) | 35x35 (source 344x344) |
| `images/misc/slack-avatar-julia.png` | https://hex.tech/_next/static/media/slack-avatar-julia.2thz42wep-a-s.png | Slack mockup avatar "Julia" | 32x32 (source 64x64) |
| `icons/favicon.svg` | https://hex.tech/favicon.svg | <link rel=icon> | - |
| `svg/logo/hex-logo-nav.svg` | inline <svg> in DOM (extracted, no URL) | [class*=Nav__HomeNavLinkWrapper] svg | 64x25 |
| `svg/logo/hex-logo-footer.svg` | inline <svg> in DOM (extracted, no URL) | footer [class*=Footer__Left] > svg | 60x20 |
| `svg/hero/hero-sparkle.svg` | inline <svg> in DOM (extracted, no URL) | [class*=HomeSimplifiedHero-module__-rifNW__sparkle] svg | 51x52 |
| `svg/hero/icon-bi.svg` | inline <svg> in DOM (extracted, no URL) | hero subheading pill BI | 16x16 |
| `svg/illustrations/built-different-orbits.svg` | inline <svg> in DOM (extracted, no URL) | [class*=HomeBuiltDifferentIllustration-module__UDyiga__illustration] > svg | 1382x585 |
| `svg/illustrations/org-cycle-arrows.svg` | inline <svg> in DOM (extracted, no URL) | [class*=CycleArrows__Svg] | 543x543 |
| `svg/illustrations/use-cases-mark.svg` | inline <svg> in DOM (extracted, no URL) | [class*=HomeUseCases-module__7W7WPW__mark] | 60x60 |
| `svg/hero/icon-conversational-analytics.svg` | inline <svg> in DOM (extracted, no URL) | hero subheading pill Conversational analytics | 16x16 |
| `svg/hero/icon-context-management.svg` | inline <svg> in DOM (extracted, no URL) | hero subheading pill Context management | 16x16 |
| `svg/marks/infotext-icon-2.svg` | inline <svg> in DOM (extracted, no URL) | InfoText icon before heading: Ground every answer in your organization’s context | 60x60 |
| `svg/marks/infotext-icon-3.svg` | inline <svg> in DOM (extracted, no URL) | InfoText icon before heading: Share insights with generative dashboards and data apps | 60x60 |
| `svg/marks/infotext-icon-4.svg` | inline <svg> in DOM (extracted, no URL) | InfoText icon before heading: See what people are asking, and whether the answers are right | 60x60 |
| `svg/marks/use-case-1.svg` | inline <svg> in DOM (extracted, no URL) | Use case card illustration 1 | 60x60 |
| `svg/marks/use-case-2.svg` | inline <svg> in DOM (extracted, no URL) | Use case card illustration 2 | 60x60 |
| `svg/marks/use-case-3.svg` | inline <svg> in DOM (extracted, no URL) | Use case card illustration 3 | 60x60 |
| `svg/illustrations/org-step-1.svg` | inline <svg> in DOM (extracted, no URL) | Org cycle step illustration 1 | 71x62 |
| `svg/illustrations/org-step-2.svg` | inline <svg> in DOM (extracted, no URL) | Org cycle step illustration 2 | 95x95 |
| `svg/illustrations/org-step-3.svg` | inline <svg> in DOM (extracted, no URL) | Org cycle step illustration 3 | 95x89 |
| `svg/illustrations/org-step-label-1.svg` | inline <svg> in DOM (extracted, no URL) | Org cycle circular textPath label 1 | 173x173 |
| `svg/illustrations/org-step-label-2.svg` | inline <svg> in DOM (extracted, no URL) | Org cycle circular textPath label 2 | 173x173 |
| `svg/illustrations/org-step-label-3.svg` | inline <svg> in DOM (extracted, no URL) | Org cycle circular textPath label 3 | 173x173 |
| `svg/logos/story-notion.svg` | inline <svg> in DOM (extracted, no URL) | Customer story card logo 1 | 200x60 |
| `svg/logos/story-mercor.svg` | inline <svg> in DOM (extracted, no URL) | Customer story card logo 2 | 200x60 |
| `svg/logos/story-figma.svg` | inline <svg> in DOM (extracted, no URL) | Customer story card logo 3 | 200x60 |
| `svg/logos/story-neo.svg` | inline <svg> in DOM (extracted, no URL) | Customer story card logo 4 | 200x60 |
| `svg/icons/quote-mark.svg` | inline <svg> in DOM (extracted, no URL) | Inline quote icon | 15x15 |
| `svg/icons/arrow-up-right.svg` | inline <svg> in DOM (extracted, no URL) | Use case card arrow | 15x15 |
| `svg/icons/nav-chevron-down.svg` | inline <svg> in DOM (extracted, no URL) | Nav dropdown chevron | 15x15 |
| `svg/icons/faq-chevron.svg` | inline <svg> in DOM (extracted, no URL) | FAQ item chevron | 15x15 |
| `svg/icons/ticker-arrow.svg` | inline <svg> in DOM (extracted, no URL) | Ticker item arrow | 10x10 |
| `svg/icons/nav/agentic-notebooks.svg` | inline <svg> in DOM (extracted, no URL) | Nav dropdown item icon: Agentic notebooks | 16x16 |
| `svg/icons/nav/conversational-analytics.svg` | inline <svg> in DOM (extracted, no URL) | Nav dropdown item icon: Conversational analytics | 16x16 |
| `svg/icons/nav/context-studio.svg` | inline <svg> in DOM (extracted, no URL) | Nav dropdown item icon: Context Studio | 15x15 |
| `svg/icons/nav/data-apps.svg` | inline <svg> in DOM (extracted, no URL) | Nav dropdown item icon: Data apps | 15x15 |
| `svg/icons/nav/hex-cli.svg` | inline <svg> in DOM (extracted, no URL) | Nav dropdown item icon: Hex CLI | 15x15 |
| `svg/icons/nav/exploratory-analysis.svg` | inline <svg> in DOM (extracted, no URL) | Nav dropdown item icon: Exploratory analysis | 16x16 |
| `svg/icons/nav/business-intelligence.svg` | inline <svg> in DOM (extracted, no URL) | Nav dropdown item icon: Business intelligence | 16x16 |
| `svg/icons/nav/embedded-analytics.svg` | inline <svg> in DOM (extracted, no URL) | Nav dropdown item icon: Embedded analytics | 16x16 |
| `svg/icons/nav/integrations.svg` | inline <svg> in DOM (extracted, no URL) | Nav dropdown item icon: Integrations | 16x16 |
| `svg/icons/nav/data-leader.svg` | inline <svg> in DOM (extracted, no URL) | Nav dropdown item icon: Data leader | 24x24 |
| `svg/icons/nav/product.svg` | inline <svg> in DOM (extracted, no URL) | Nav dropdown item icon: Product | 24x24 |
| `svg/icons/nav/marketing.svg` | inline <svg> in DOM (extracted, no URL) | Nav dropdown item icon: Marketing | 24x24 |
| `svg/icons/nav/sales.svg` | inline <svg> in DOM (extracted, no URL) | Nav dropdown item icon: Sales | 24x24 |
| `svg/icons/nav/customer-success.svg` | inline <svg> in DOM (extracted, no URL) | Nav dropdown item icon: Customer success | 24x24 |
| `svg/icons/nav/switching-to-hex.svg` | inline <svg> in DOM (extracted, no URL) | Nav dropdown item icon: Switching to Hex | 15x15 |
| `svg/icons/nav/templates.svg` | inline <svg> in DOM (extracted, no URL) | Nav dropdown item icon: Templates | 16x16 |
| `svg/icons/nav/docs.svg` | inline <svg> in DOM (extracted, no URL) | Nav dropdown item icon: Docs | 15x15 |
| `svg/icons/nav/changelog.svg` | inline <svg> in DOM (extracted, no URL) | Nav dropdown item icon: Changelog | 16x16 |
| `svg/icons/nav/blog.svg` | inline <svg> in DOM (extracted, no URL) | Nav dropdown item icon: Blog | 16x16 |
| `svg/icons/nav/guides.svg` | inline <svg> in DOM (extracted, no URL) | Nav dropdown item icon: Guides | 16x16 |
| `svg/icons/nav/events.svg` | inline <svg> in DOM (extracted, no URL) | Nav dropdown item icon: Events | 16x16 |
| `svg/icons/nav/customer-stories.svg` | inline <svg> in DOM (extracted, no URL) | Nav dropdown item icon: Customer stories | 16x16 |
| `svg/icons/nav/partners.svg` | inline <svg> in DOM (extracted, no URL) | Nav dropdown item icon: Partners | 16x16 |

## Not downloaded (by design)
- Analytics/tracking: googletagmanager, rudderstack, launchdarkly, hubspot, linkedin, bing, facebook, contentsquare, vector.co, mgln.ai, claydar, tapad.
- `_next/image` resized variants (originals downloaded instead - largest available).
- Unloaded @font-face unicode-range subsets of IBM Plex Sans/Mono (cyrillic, greek, vietnamese, latin-ext) - only latin subsets are requested on this page.
- AiIllustrationCanvas (nav "AI & agents" callout) is drawn at runtime on a <canvas>; no file exists. See CLONE_SPEC.md gaps.
