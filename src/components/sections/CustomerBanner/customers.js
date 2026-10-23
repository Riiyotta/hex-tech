// CLONE_SPEC §4.2: banner logos in DOM order (2 rows of 9 @1440). `w`/`h` are the source SVG
// dimensions (the img renders 40px tall, width from aspect ratio). Entries with `story` are links
// to the customer story and carry the hover popover; `align` mirrors the DOM's data-align.
export const CUSTOMERS = [
  { slug: 'reddit', name: 'Reddit', w: 115, h: 50 },
  {
    slug: 'notion',
    name: 'Notion',
    w: 39,
    h: 50,
    story: {
      href: '/customers/notion/',
      align: 'left',
      quote:
        '"Our vision for Notion’s data team is that anyone, regardless of technical proficiency, is comfortable using data to answer their own questions – and Hex enables that."',
      author: 'Aks Nemana',
      title: 'Data Scientist & Abhishek Modi, AI Software Engineer',
    },
  },
  { slug: 'sierra', name: 'Sierra', w: 120, h: 50 },
  { slug: 'anthropic', name: 'Anthropic', w: 132, h: 50 },
  { slug: 'lovable', name: 'Lovable', w: 137, h: 50 },
  {
    slug: 'ramp',
    name: 'Ramp',
    w: 120,
    h: 50,
    story: {
      href: '/customers/ramp/',
      align: 'left',
      quote: '"We like to embed Hex dashboards where teams work."',
      author: 'Ian Macomber',
      title: 'Head of Data and Analytics Engineering',
    },
  },
  { slug: 'rivian', name: 'Rivian', w: 150, h: 50 },
  {
    slug: 'figma',
    name: 'Figma',
    w: 97,
    h: 50,
    story: {
      href: '/customers/figma/',
      align: 'right',
      quote: '"With Hex’s Notebook Agent, I never have to build another chart again? What a dream come true."',
      author: 'Rie McGiwer',
      title: 'AI Insights Researcher and Molly Jane Nicholas, Senior Researcher',
    },
  },
  { slug: 'brex', name: 'Brex', w: 110, h: 50 },
  { slug: 'cursor', name: 'Cursor', w: 126, h: 50 },
  { slug: 'aws', name: 'AWS', w: 63, h: 50 },
  { slug: 'sedgwick', name: 'Sedgwick', w: 150, h: 50 },
  {
    slug: 'stubhub',
    name: 'StubHub',
    w: 81,
    h: 50,
    story: {
      href: '/customers/stubhub/',
      align: 'left',
      quote: '"Hex has helped us empower business analysts to explore and dig into data on their own"',
      author: 'Meghana Reddy',
      title: 'Head of Data at Stubhub',
    },
  },
  {
    slug: 'mercor',
    name: 'Mercor',
    w: 131,
    h: 50,
    story: {
      href: '/customers/mercor/',
      align: 'left',
      quote:
        '"Hex’s Notebook Agent’s ability to build reports increases our operational speed — days into hours, which for our business, is millions of dollars."',
      author: 'Dhaval Patel',
      title: 'Account Lead',
    },
  },
  { slug: 'thinking-machines', name: 'Thinking Machines', w: 200, h: 50 },
  { slug: 'surge-ai', name: 'Surge AI', w: 96, h: 50 },
  {
    slug: 'neo-financial',
    name: 'Neo Financial',
    w: 76,
    h: 50,
    story: {
      href: '/customers/neo-financial/',
      align: 'right',
      quote:
        '"Hex’s Slack integration unlocked silos of data, in governed ways, increasing trusted answers and insights."',
      author: 'Brandon Rochon',
      title: 'VP of Data & Analytics and David Adair, Group Product Manager for Cards and Lending',
    },
  },
  {
    slug: 'chime',
    name: 'Chime',
    w: 94,
    h: 50,
    story: {
      href: '/customers/chime/',
      align: 'right',
      quote: '"Hex’s Context Studio and Evals give us the visibility needed to manage our context at scale."',
      author: 'Jordan Farrer',
      title: 'Director of Data Science & Analytics',
    },
  },
]
