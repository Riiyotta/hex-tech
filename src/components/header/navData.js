// Nav content, copied from reference/dom/00-header.html and 00b-mobile-nav-open.html (CLONE_SPEC §4.0).
const ICON = (name) => `/assets/svg/icons/nav/${name}.svg`

export const TICKER_ITEMS = [
  { emoji: '📊', title: 'AI analytics use case:', text: 'how LangChain migrated from legacy BI and enabled 100% of their team to self-serve data', href: '/customers/langchain/' },
  { emoji: '🤯 ', title: 'Generative data apps:', text: 'Gorgeous, interactive dashboards and apps you can build with just a prompt', href: '/blog/introducing-generative-data-apps/' },
  { emoji: '📖', title: 'State of Data Teams 2026', text: 'discover key insights from data leaders ', href: '/state-of-data-teams/' },
  { emoji: '🙏', title: 'It\'s just "Hex"!', text: 'Not "HEX" or "Hex dot tech"', href: '/' },
]

const PRODUCTS = [
  { title: 'Agentic notebooks', description: 'Powerful, deep-dive analysis without the silos', href: '/product/notebooks/', icon: ICON('agentic-notebooks'), iconSize: 16 },
  { title: 'Conversational analytics', description: 'Ask and explore data in plain language', href: '/product/threads/', icon: ICON('conversational-analytics'), iconSize: 16 },
  { title: 'Context Studio', description: 'Build trust in data with semantic models and AI governance', href: '/product/context-studio/', icon: ICON('context-studio'), iconSize: 15 },
  { title: 'Data apps', description: 'Build and share interactive dashboards and reporting', href: '/product/data-apps/', icon: ICON('data-apps'), iconSize: 15 },
  { title: 'Hex CLI', description: 'Control your analytics from the terminal', href: '/product/cli/', icon: ICON('hex-cli'), iconSize: 15 },
]
const CAPABILITIES = [
  { title: 'Exploratory analysis', description: 'Go from quick question to deep analysis to data app in one place', href: '/capability/exploratory-analysis/', icon: ICON('exploratory-analysis'), iconSize: 16 },
  { title: 'Business intelligence', description: 'Governed self-serve and dashboards for the entire org', href: '/product/bi/', icon: ICON('business-intelligence'), iconSize: 16 },
  { title: 'Embedded analytics', description: 'Ship secure, customer-facing data experiences', href: '/product/embedded-analytics/', icon: ICON('embedded-analytics'), iconSize: 16 },
  { title: 'Integrations', description: 'Out-of-the-box connections and flexible APIs', href: '/product/integrations/', icon: ICON('integrations'), iconSize: 16 },
]
const BY_TEAM = [
  { title: 'Data leader', description: 'Focus your team and scale answers', href: '/solutions/data-leaders/', icon: ICON('data-leader'), iconSize: 24 },
  { title: 'Product', description: 'Build your product with data, not gut feels', href: '/solutions/product-analytics/', icon: ICON('product'), iconSize: 24 },
  { title: 'Marketing', description: 'Turn scattered data into clear growth opportunities', href: '/solutions/marketing/', icon: ICON('marketing'), iconSize: 24 },
  { title: 'Sales', description: 'Clear pipeline. Confident forecasts', href: '/solutions/sales-analytics/', icon: ICON('sales'), iconSize: 24 },
  { title: 'Customer success', description: 'Create a complete view of customer health', href: '/solutions/customer-success/', icon: ICON('customer-success'), iconSize: 24 },
]
const GET_STARTED = [
  { title: 'Switching to Hex', description: 'A guide to getting started on agentic analytics', href: '/product/switching-to-hex/', icon: ICON('switching-to-hex'), iconSize: 15 },
  { title: 'Templates', description: 'Jumpstart with pre-built projects', href: '/templates/', icon: ICON('templates'), iconSize: 16 },
  { title: 'Docs', description: 'Resources and product guides', href: 'https://learn.hex.tech', icon: ICON('docs'), iconSize: 15, external: true },
  { title: 'Changelog', description: 'Product updates', href: 'https://learn.hex.tech/changelog', icon: ICON('changelog'), iconSize: 16, external: true },
]
const INSPIRATION = [
  { title: 'Blog', description: 'From data teams to data teams', href: '/blog/', icon: ICON('blog'), iconSize: 16 },
  { title: 'Guides', description: 'Learn how to do more with data, together', href: '/resources/guides/', icon: ICON('guides'), iconSize: 16 },
  { title: 'Events', description: 'Learn and connect with peers', href: '/resources/events/', icon: ICON('events'), iconSize: 16 },
  { title: 'Customer stories', description: 'Empowering the best data teams', href: '/customers/', icon: ICON('customer-stories'), iconSize: 16 },
  { title: 'Partners', description: 'Learn more about our partnerships', href: '/partners/', icon: ICON('partners'), iconSize: 16 },
]

// Desktop mega-menus. `calloutFirst` mirrors the Solutions DOM order (callout above the list).
export const MENUS = {
  platform: {
    title: 'Platform',
    columns: [
      { title: 'Products', items: PRODUCTS },
      { title: 'Capabilities', items: CAPABILITIES },
    ],
    callout: {
      title: 'AI & agents',
      description: 'Agentic workflows to empower your entire team',
      href: '/capability/ai/',
      icon: ICON('callout-ai-agents'),
      illustration: 'ai-canvas',
    },
  },
  solutions: {
    title: 'Solutions',
    calloutFirst: true,
    columns: [{ title: 'By team', items: BY_TEAM }],
    callout: {
      title: 'Explore all solutions',
      description: 'One connected system - infinite data answers',
      href: '/solutions/',
      icon: ICON('callout-solutions'),
    },
  },
  resources: {
    title: 'Resources',
    columns: [
      { title: 'Get started', items: GET_STARTED },
      { title: 'Inspiration', items: INSPIRATION },
    ],
    callout: {
      eyebrow: 'Download',
      title: "The Data Leader's Guide to AI Analytics",
      description: 'A practical roadmap for understanding and implementing AI to accelerate your data team and enable true self-service.',
      href: '/resources/guides/ai-analytics/',
      icon: ICON('callout-download'),
      illustration: 'ai-analytics-guide',
    },
  },
}

export const LEFT_NAV = [
  { menu: 'platform' },
  { menu: 'solutions' },
  { title: 'Enterprise', href: '/enterprise/' },
]
export const RIGHT_NAV = [
  { menu: 'resources' },
  { title: 'Pricing', href: '/pricing/' },
]
export const LOGIN_HREF = 'https://app.hex.tech/login'
export const SIGNUP_HREF = 'https://app.hex.tech/signup?source=nav'

// Mobile menu (00b-mobile-nav-open.html): 3 titled sublists then plain links.
export const MOBILE_SECTIONS = [
  { title: 'Platform', items: [...PRODUCTS, ...CAPABILITIES] },
  { title: 'Solutions', items: BY_TEAM },
  { title: 'Resources', items: [...GET_STARTED, ...INSPIRATION] },
]
export const MOBILE_LINKS = [
  { title: 'Enterprise', href: '/enterprise/' },
  { title: 'Pricing', href: '/pricing/' },
]
