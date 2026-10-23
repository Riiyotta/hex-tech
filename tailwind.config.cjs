/** @type {import('tailwindcss').Config} */
// CommonJS on purpose: with "type": "module" + Node ≥20.19, an ESM tailwind.config.js is loaded via
// require(esm) and never invalidated, so a running `vite` dev server would keep a stale config.
// Design tokens for the hex.tech homepage clone. Every value is taken from
// CLONE_SPEC.md §1–2 (light theme, resolved on the page wrapper). Use these
// names in JSX; do not hardcode hex values in components.

const sansFallback = ['ui-sans-serif', 'system-ui', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"']
const monoFallback = ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace']

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    // §1.2 breakpoints. The original site is desktop-first (all max-width
    // queries), so screens are max-width and ordered large → small.
    screens: {
      laptop: { max: '1250px' }, // column gaps tighten, footer reflows
      tablet: { max: '1000px' }, // nav → hamburger, use cases stack, Context Studio restacks
      stack: { max: '800px' }, // feature sections stack, banner logos tighten, ethos 1 col
      phone: { max: '600px' }, // project windows 1 col, heading spans inline
      'phone-sm': { max: '450px' }, // lead text 24 → 20px, gutter 20px
      'phone-xs': { max: '420px' },
      'phone-xxs': { max: '360px' },
      'can-hover': { raw: '(hover: hover)' }, // logo popovers, Perlin noise hover
    },
    extend: {
      colors: {
        // Themed tokens: every value is a CSS variable defined in src/index.css (light at
        // :root / [data-theme="light"], dark under [data-theme="dark"]; values from
        // specs/product.md §1.1, reference/pages/product/dom/_theme-tokens.css). The light values are
        // the CLONE_SPEC §2.1 ones the comments list, so homepage rendering is unchanged.
        // §2.1 neutrals (fg scale)
        fg: {
          100: 'var(--fg100)', // #FFFCFC page bg, nav bg, primary-button inner (dark #14141C)
          200: 'var(--fg200)', // #F8F5F6 ticker item hover
          300: 'var(--fg300)', // #F4F1F2 ticker gradient center
          400: 'var(--fg400)', // #F0EDEE ticker strip
          500: 'var(--fg500)', // #ECE8EA
          600: 'var(--fg600)', // #E8E4E6 checkered margin squares
          700: 'var(--fg700)', // #E2DEE0
          800: 'var(--fg800)', // #D1CCD1
          900: 'var(--fg900)', // #A49DA7
          1000: 'var(--fg1000)', // #9C959F
          1100: 'var(--fg1100)', // #89828D = ink.muted
          1200: 'var(--fg1200)', // #43394C links, Log In, logo, nav icons (dark #E3B2B3)
        },
        // §2.1 fgA*: eggplant rgba(49,38,59,a) light, rose rgba(245,192,192,a') dark
        'fg-a': {
          100: 'var(--fgA100)',
          200: 'var(--fgA200)',
          300: 'var(--fgA300)',
          400: 'var(--fgA400)',
          500: 'var(--fgA500)', // nav / dropdown hover bg
          600: 'var(--fgA600)',
          700: 'var(--fgA700)', // ticker inset shadow, callout dot grid
          800: 'var(--fgA800)',
          900: 'var(--fgA900)',
          1000: 'var(--fgA1000)',
          1100: 'var(--fgA1100)', // ticker arrow circle
          1200: 'var(--fgA1200)', // dropdown description
        },
        ink: {
          DEFAULT: 'var(--fontColorDEFAULT)', // #31263B body copy (dark #F5C0C0)
          muted: 'var(--fontColorMUTED)', // #89828D (dark #99797D)
          loud: 'var(--fontColorLOUD)', // #14141C headings, nav, button labels (dark #FFFFFF)
          link: 'var(--fg1200)', // #43394C
          meta: 'var(--meta-color)', // rgba(20,20,28,.447) light / rgba(255,255,255,.447) dark: MetaRows labels
        },
        // --highlightColor (eggplant light, rose dark) as channels so opacity modifiers work (bg-highlight/30)
        highlight: 'rgb(var(--highlight-rgb) / <alpha-value>)',
        // §2.1 lines
        grid: {
          200: 'var(--grid200)', // #EFEBED
          300: 'var(--grid300)', // #E9E5E8 minor rules, button hover bg
          400: 'var(--grid400)', // #E4E0E3
          500: 'var(--grid500)', // #DBD7DA major borders, secondary button border
          600: 'var(--grid600)', // #CBC6CB
          700: 'var(--grid700)', // #AFA9B1 hover borders
          1200: 'var(--grid1200)', // #403649 nav accent bars
        },
        line: {
          muted: 'var(--grid300)', // borderColorMUTED
          DEFAULT: 'var(--grid500)', // borderColorDEFAULT
          strong: 'var(--grid700)', // borderColorSTRONG
          faint: 'var(--line-faint)', // rgba(0,0,0,.08): State of Data Teams rules / FAQ dividers
        },
        surface: {
          300: 'var(--bg300)', // #FCF8F8 customer stories two-up (dark #0F0F15)
          400: 'var(--bg400)', // #F9F1F1 mobile menu (dark #111118)
          500: 'var(--bg500)', // #EBCCCC (dark #14141C)
          dropdown: 'var(--dropdown-bg)', // mega-menu viewport #FFFFFF (dark value not measured)
        },
        // Brand palette
        'rose-quartz': '#F5C0C0',
        amethyst: '#A477B2',
        minsk: '#473982',
        eggplant: '#31263B',
        jade: '#5CB198',
        citrine: '#CDA849',
        opal: '#FBF9F9',
        'violet-topaz': '#5F509D',
        cement: '#717A94',
        black: '#01011B',
        obsidian: '#14141C',
        white: '#FFFFFF',
        // Extra measured accents
        accent: {
          'context-management': '#7B8BE0', // hero pill icon spot rgb(123,139,224)
          'bi-icon': '#35705D', // hero BI icon fill
          'conversational-icon': '#9263A1', // hero conversational icon fill
          'context-icon': '#4250A0', // hero context-management icon fill
          'ethos-flexible': '#A98529', // ethos eyebrow 1 text (bg = 7% of this)
          'ethos-flexible-bg': 'rgba(169, 133, 41, 0.07)',
          'ethos-control': '#4250A0', // ethos eyebrow 2 text
          'ethos-control-bg': 'rgba(66, 80, 160, 0.07)',
          'button-border-start': '#CDA0A5', // primary button gradient border start
        },
        // Product UI ("appUI"): themed
        app: {
          bg: 'var(--appUI-backgroundColor-default)', // #FFFFFF
          'bg-muted': 'var(--appUI-backgroundColor-muted)', // #F8FAFB
          border: 'var(--appUI-borderColor-default)', // #DADDE6
          'border-muted': 'var(--appUI-borderColor-muted)', // #ECEDF2
          text: 'var(--appUI-fontColor-default)', // #01011B
          'text-muted': 'var(--appUI-fontColor-muted)', // #717A94
          primary: 'var(--appUI-primaryColor)', // #254685
          'intent-primary': 'var(--appUI-intent-primary)', // #473982
          success: 'var(--appUI-intent-success)', // #0F6B5B
          warning: 'var(--appUI-intent-warning)', // #A67908
          danger: 'var(--appUI-intent-danger)', // #B63245
          'terminal-id': 'rgb(15, 107, 91)',
          link: 'rgb(71, 57, 130)',
          tilde: '#8ABBFF',
        },
        slack: {
          name: 'rgb(28, 27, 28)',
          timestamp: 'rgb(123, 122, 123)',
          mention: 'rgb(19, 89, 153)',
        },
        claude: {
          text: 'rgb(20, 20, 19)',
          muted: 'rgb(115, 113, 108)',
        },
      },

      // §2.5 font stacks (exact computed)
      fontFamily: {
        sans: ['Cinetype', ...sansFallback, 'sans-serif'],
        mono: ['"Cinetype Mono"', ...monoFallback],
        display: ['"PP Formula SemiExtended"', ...sansFallback], // H1, heading-1
        formula: ['"PP Formula"', ...sansFallback], // heading-2/3/4
        editorial: ['"PP Editorial New"', 'Georgia', '"Times New Roman"', 'serif'], // --home-font-family-editorial
        'editorial-heading': ['"PP Editorial New"', 'sans-serif'], // as declared inside GradientHeader spans
        'plex-sans': ['"IBM Plex Sans"', '"IBM Plex Sans Fallback"'],
        'plex-mono': ['"IBM Plex Mono"', '"IBM Plex Mono Fallback"', ...monoFallback],
        // live stack used by the terminal / CLI art / CodePill / workbench rules: no metric fallback face, so glyphs no
        // Plex subset covers (box drawing U+2500-257F, blocks U+2580-259F) fall back to the system monospace at its
        // natural width (with the Arial-based fallback face the CLI banner renders 347.5px instead of 244.2px)
        'plex-mono-system': ['"IBM Plex Mono"', ...monoFallback],
        lato: ['Lato'],
        'ui-serif': ['ui-serif'],
      },

      // §2.5 type scale. [size, { lineHeight, letterSpacing }]
      fontSize: {
        hero: ['clamp(42px, 24px + 4vw, 74px)', { lineHeight: '1.2', letterSpacing: '-0.025em' }],
        'hero-relaxed': ['clamp(42px, 24px + 4vw, 74px)', { lineHeight: '1.3', letterSpacing: '-0.025em' }], // V1 / company / compare / threads heroes (74/96.2)
        'heading-1': ['clamp(38px, 25.625px + 2.75vw, 60px)', { lineHeight: '1.3', letterSpacing: '-0.0308em' }],
        'heading-2': ['clamp(30px, 24.375px + 1.25vw, 40px)', { lineHeight: '1.3', letterSpacing: '-0.025em' }],
        'heading-3': ['clamp(20px, 15.5px + 1vw, 28px)', { lineHeight: '1.3', letterSpacing: '-0.025em' }],
        'heading-4': ['20px', { lineHeight: '26px', letterSpacing: '-0.5px' }],
        'heading-5': ['14px', { lineHeight: '1.571', letterSpacing: '-0.025em' }],
        'heading-6': ['clamp(12px, 15.125px - .25vw, 14px)', { lineHeight: '1.571', letterSpacing: '0.214em' }],
        'italic-display': ['1.3em', { lineHeight: 'inherit' }], // PP Editorial italic spans inside headings
        'lead-xl': ['24px', { lineHeight: '36px' }],
        'lead-l': ['20px', { lineHeight: '30px' }],
        body: ['16px', { lineHeight: '24px' }],
        small: ['14px', { lineHeight: '21.994px' }],
        nav: ['14px', { lineHeight: '14px' }],
        button: ['14px', { lineHeight: '21.994px' }],
        faq: ['18px', { lineHeight: '24px', letterSpacing: '-0.5px' }],
        label: ['10px', { lineHeight: '12px', letterSpacing: '0.833px' }], // "TRUSTED BY…"
        ticker: ['12px', { lineHeight: '18.852px' }],
        annotation: ['12px', { lineHeight: '1.571', letterSpacing: '0.0833em' }],
        'window-title': ['11px', { lineHeight: '17.281px', letterSpacing: '0.9163px' }], // also dropdown list titles
        'quote-author': ['12px', { lineHeight: '18.852px', letterSpacing: '0.9996px' }],
        eyebrow: ['13px', { lineHeight: '13px', letterSpacing: '1.0829px' }],
        'read-more': ['12px', { lineHeight: '11px' }],
        'popover-author': ['10px', { lineHeight: '15.71px' }],
        'dropdown-desc': ['12px', { lineHeight: '18px' }],
        'footer-title': ['12px', { lineHeight: '18.852px', letterSpacing: '0.7px' }],
        'mobile-section-title': ['10px', { lineHeight: '15.71px', letterSpacing: '0.32px' }],
        'app-ui': ['12px', { lineHeight: '16.8px' }],
        'app-tick': ['10px', { lineHeight: '13px' }],
      },

      // §2.2 shadows
      boxShadow: {
        'nav-squished': 'var(--nav-squished-shadow)', // light 0px 3px 12px -3px rgba(100,63,63,.32)
        dropdown: '0 4px 24px -4px rgba(0, 0, 0, 0.15)',
        'glass-popover': 'var(--glass-popover-shadow)', // popover / hamburger glass (dark = the dark glass shadow)
        window: 'var(--window-shadow)',
        'window-hover': 'var(--window-hover-shadow)',
        'glass-card': 'var(--glass-card-shadow)', // Card__Wrapper (light glass / dark glass)
        'glass-card-hover': 'var(--glass-card-hover-shadow)', // interactive Card__Wrapper hover
        'glass-ring': '0 0 0 1px rgba(0, 0, 0, 0.06)', // ethos illustration frame
        'org-disc': '0 26px 57px 0 rgba(0, 0, 0, 0.1)',
        'org-step': '0 16px 24px -8px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        pill: '0 2px 4px color-mix(in srgb, #01011B 6%, transparent)', // hero pills + icon spots
        'story-hover':
          '0 0 0 1px color-mix(in srgb, var(--highlightColor) 10%, transparent), 0 4px 50px 0 color-mix(in srgb, var(--highlightColor) 10%, transparent)',
        'integration-hover': '0 0 0 1px color-mix(in srgb, var(--highlightColor) 30%, transparent)',
        'ticker-inset': 'inset 0 1px 1px 0 var(--fgA700)',
        'button-fill': 'var(--button-fill-shadow)', // light inset 0 0 0 1px rgba(71,12,12,.15), dark none
        'resource-frame': '0 2px 12px 0 rgba(0, 0, 0, 0.5)', // ResourceCard 16:9 image frame (solutions §4.1.3, product §4.1 #5)
      },

      // §2.3 radii
      borderRadius: {
        'nav-item': '1px', // nav items, dropdown links
        ticker: '2px',
        eyebrow: '3px', // ethos eyebrow, nav callout
        popover: '4px', // logo popover
        dropdown: '5px',
        window: '6px', // product windows, ethos cards & frames
        card: '12px', // Card wrapper
        pill: '30px', // hero pill links
        round: '999px',
      },

      // §1.1 / §4 layout constants that recur across sections
      spacing: {
        'header-row': '1.25rem', // 20px top grid row
        'header-row-mobile': '12px',
        ticker: '26.85px',
        'nav-row': '62px',
        'nav-row-mobile': '56px',
        'stage-top': '102px', // hero stage padding-top
        'section-gutter': '40px', // --home-section-gutter
        'section-block': '60px', // --home-section-padding-block
      },
      maxWidth: {
        section: '1240px', // --home-section-max-width
        hero: '1080px',
        copy: '425px', // --home-section-copy-max-width
        'info-column': '330px',
        'hero-sub': '580px',
        faq: '604px',
        content: '1840px',
      },

      backgroundImage: {
        'heading-gradient': 'var(--heading-gradient)',
        'button-border': 'linear-gradient(to right, var(--fg100), var(--fg100)), var(--button-border-gradient)',
        ticker: 'linear-gradient(to left, var(--fg400), var(--fg300), var(--fg400))',
        glass: 'var(--glass-popover-bg)',
        card: 'var(--glass-card-image)',
        hatch: 'var(--texture-hatch-img)', // 45° 1px hatch every 6px in --bg500
        'floating-prompt': 'linear-gradient(79deg, rgba(245, 192, 192, 0.13), rgba(49, 38, 59, 0.05))',
        tron: 'linear-gradient(90deg, var(--grid700) 0%, var(--grid500) 50%, var(--grid700) 100%)',
        'cartesian-tint':
          'radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--highlightColor) 5%, transparent) 50%, color-mix(in srgb, var(--highlightColor) 20%, transparent))', // eggplant light, rose dark (product §4.2 CLI)
        checker: 'var(--checker-img)', // 4×4 svg, 2px squares in --fg600 (data URI can't take a var, so one per theme)
        'checker-hero': 'var(--hero-checker-img)', // dark only: 2px rose --fgA300 squares (hero backgrounds)
        'graph-paper':
          'linear-gradient(var(--grid300) 1px, transparent 1px), linear-gradient(to right, var(--grid300) 1px, transparent 1px)',
        paper: 'var(--texture-paper-img)',
        'noise-eggplant': 'url(/assets/textures/noise-eggplant-128x128.png)',
        'noise-rose': 'url(/assets/textures/noise-rose-128x128.png)',
        'noise-jade': 'url(/assets/textures/noise-jade-128x128.png)',
        'noise-citrine': 'url(/assets/textures/noise-citrine-128x128.png)',
        'noise-amethyst': 'url(/assets/textures/noise-amythyst-128x128.png)',
      },
      backgroundSize: {
        paper: 'var(--texture-paper-size)',
        'noise-lg': '1024px 1024px',
        'noise-md': '512px 512px',
        'noise-sm': '256px 256px',
        'graph-paper': '64px 64px',
      },

      // §6 motion tokens
      transitionTimingFunction: {
        hex: 'cubic-bezier(0.25, 0.1, 0.25, 1)', // --animation-easing
        spring: 'var(--spring-easing)',
        'hover-spring': 'var(--hover-transition-timing-function)',
        pop: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'out-quint': 'cubic-bezier(0.22, 1, 0.36, 1)',
        popover: 'cubic-bezier(0.25, 1, 0.25, 1)',
      },
      transitionDuration: {
        hex: '250ms', // --animation-duration
        spring: '747ms', // --spring-duration
        link: '100ms',
        window: '200ms',
      },
      animation: {
        ticker: 'ticker-scroll var(--ticker-duration) linear infinite',
        noise: 'noise-drift var(--noise-duration) linear infinite',
        'step-noise': 'step-noise-drift 4s linear infinite',
        'bubble-pop': 'bubble-pop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) both',
        'agent-logo-roll-in': 'agent-logo-roll-in 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) both',
        'typing-cursor': 'typing-cursor-blink 0.8s step-end infinite',
        'terminal-cursor': 'terminal-cursor-blink 1.06s linear infinite',
        'loading-spin': 'loading-spin 2s linear infinite',
      },
    },
  },
  plugins: [],
}
