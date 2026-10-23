// T2 per-page content (specs/solutions.md §4.2.8). Copy verbatim; hex.tech absolute hrefs normalised to paths (§6).
// Block kinds: feature (media 'left' = row / 'right' = row-reverse), quote, live (LiveAppEmbed row), heading (SectionHeading).
const A = '/assets/pages/solutions'
const SIGNUP = 'https://app.hex.tech/signup?source=nav&_gl=1*1gb4jmm*_gcl_au*MTE3NTA3ODUwNS4xNzQwNTk1ODUz'
const DEMO = '/request-a-demo/'

const CLICKUP_LOGO = { src: `${A}/_shared/logo-clickup.svg`, alt: 'ClickUp' }
const SAI = { name: 'Sai Srigiriaju', title: 'Head of Growth Strategy & Ops', company: 'ClickUp' }
const CONTACT_OUTRO = (title) => ({ title, description: 'Contact sales', action: { label: 'Request a demo', href: DEMO } })

export const SOLUTION_PAGES = {
  'data-leaders': {
    title: 'Hex for Data Leaders: Scale Teams and Govern AI | Hex',
    hero: {
      title: 'Data leaders: Focus your team and scale answers',
      description: 'Turn “What’s taking so long?” into “How did you do that so fast?”',
    },
    banner: true,
    blocks: [
      {
        kind: 'feature',
        media: 'left',
        title: 'Inform strategy with actual root cause',
        body: 'Our interactive notebooks let you explore data deeply, collaborate, and — with built-in sharing features — give consumers full context to make strategic decisions. ',
        cta: { label: 'See how this saved ClickUp $1M+ in churn', href: '/customers/clickup/' },
        image: { src: `${A}/data-leaders/inform-strategy-with-actual-root-cause-8e147d73.png`, alt: 'Inform strategy with actual root cause', w: 1316, h: 677 },
      },
      {
        kind: 'feature',
        media: 'right',
        title: 'Governed self-serve, with AI enhancement',
        body: 'Connect your semantic layer for confident exploration without risking messy, manual duplication. Let AI unblock questions with trusted answers.',
        cta: { label: 'Learn more', href: '/product/hex-for-teams/' },
        image: { src: `${A}/_shared/governed-self-serve-with-ai-enhancement-591eb3c3.png`, alt: 'Governed self-serve, with AI enhancement', w: 1311, h: 910 },
      },
      {
        kind: 'feature',
        media: 'left',
        title: "Unify your data team's workflow",
        body: 'Hex lets you go from query to storytelling in one place. This lets your team focus on impact, not workarounds in patchwork data tools.',
        cta: { label: 'Learn more', href: '/use-case/data-science/' },
        image: { src: `${A}/data-leaders/unify-your-data-team-s-workflow-155eeaee.png`, alt: "Unify your data team's workflow", w: 1340, h: 1000 },
      },
      { kind: 'heading', title: 'Learn how other data leaders are driving influence' },
      {
        kind: 'feature',
        media: 'right',
        title: 'AI is changing how our data team works, and that’s great',
        body: 'Lessons on thriving in the AI era.',
        cta: { label: 'Read more', href: '/blog/lessons-running-a-data-team-with-ai/' },
        image: { src: `${A}/_shared/ai-is-changing-how-our-data-team-works-and-that--de281fd8.png`, alt: 'AI is changing how our data team works, and that’s great', w: 1680, h: 1040 },
      },
    ],
    cards: {
      items: [
        {
          title: 'How to prepare your data strategy for LLMs',
          text: "Every data team will need to hire an LLM. Here's what you need to know.",
          href: '/resources/llms-snowflake-cortext/',
          image: { src: `${A}/_shared/the-snowflake-hex-guide-to-ai-ready-data-ecae8ae9.jpg`, alt: 'figure - How to prepare your data strategy for LLMs', w: 3446, h: 2352 },
        },
        {
          title: 'A playbook for scaling data trust',
          text: "Here's some tips you may not have considered.",
          href: '/resources/scaling-data-at-hubspot/',
          image: { src: `${A}/data-leaders/a-playbook-for-scaling-data-trust-37318ae8.png`, alt: 'figure - A playbook for scaling data trust', w: 3446, h: 2352 },
        },
        {
          title: 'The myth of measuring “data team ROI”',
          text: 'How do you measure data team ROI? You don’t.',
          href: '/blog/myth-of-data-team-roi/',
          image: { src: `${A}/data-leaders/the-myth-of-measuring-data-team-roi-2b32bb42.png`, alt: 'figure - The myth of measuring “data team ROI”', w: 1240, h: 846 },
        },
      ],
    },
    outro: CONTACT_OUTRO('Learn why data leaders choose Hex'),
  },

  'customer-success': {
    title: 'Customer Success Analytics for CS Teams | Hex',
    hero: {
      title: 'All your customer success data in one place',
      description: 'Act early with dynamic health scores, churn predictors, and onboarding insights',
    },
    banner: true,
    blocks: [
      {
        kind: 'feature',
        media: 'left',
        title: 'Customer health, built from your relevant data sources',
        subline: 'Dig in to root causes of renewals and churn',
        body: 'With Hex, bring together product usage, billing, support, and CRM data to surface the signals that matter. Identify renewal risks and prioritize accounts before it’s too late.',
        image: { src: `${A}/customer-success/customer-health-built-from-your-relevant-data-so-88471f87.png`, alt: 'Customer health, built from your relevant data sources', w: 2088, h: 1720 },
      },
      {
        kind: 'feature',
        media: 'right',
        title: 'Proactive customer support',
        subline: 'Predict churn and get ahead of expansion opportunities',
        body: 'React to problems before they happen, proactively identify growth with real-time signals like decreasing engagement or rising ticket volume.',
        image: { src: `${A}/customer-success/proactive-customer-support-d477dd08.png`, alt: 'Proactive customer support', w: 2496, h: 1952 },
      },
      {
        kind: 'feature',
        media: 'left',
        title: 'One hub for all customer questions',
        subline: 'Skip the data scavenger hunt',
        body: 'Answer business-critical questions like “Which customers are likely to renew?” or “Which features drive expansion?” in one place. No more stale dashboards. Just answers when you need them.',
        leadingBreak: true, // the live <p> starts with a <br>
        image: { src: `${A}/customer-success/one-hub-for-all-customer-questions-082c362c.png`, alt: 'One hub for all customer questions', w: 2588, h: 2116 },
      },
      { kind: 'quote', logo: CLICKUP_LOGO, quote: 'Hex has helped ClickUp save millions of dollars in churn.”', author: SAI },
      {
        kind: 'live',
        description: ['Build your own Account 360, ', { text: 'a one-stop customer health command center', href: '/blog/customer-health-data-app-account-360/' }, '.'],
        explore: 'https://app.hex.tech/hex-public/app/Account-360-Demo-030VDDvd5yRsH5VRNTl8dm/latest',
        app: 'https://app.hex.tech/hex-public/app/Account-360-Demo-030VDDvd5yRsH5VRNTl8dm/latest?embedded=true',
        logic: 'https://app.hex.tech/hex-public/hex/Account-360-Demo-030VDDvd5yRsH5VRNTl8dm/draft/logic?embedded=true',
      },
    ],
    cards: {
      items: [
        {
          title: 'ClickUp: How a data app saved $1M+ in churn',
          text: 'Data apps let multiple teams see the causes behind churn and get ahead.',
          href: '/resources/data-app-click-up/',
          image: { src: `${A}/customer-success/clickup-how-a-data-app-saved-1m-in-churn-5546f440.png`, alt: 'figure - ClickUp: How a data app saved $1M+ in churn', w: 1845, h: 1148 },
        },
        {
          title: 'Why data teams (almost) never have to answer the same customer question twice',
          text: 'How you can break free from repetitive customer questions.',
          href: '/blog/data-app-for-customer-success-analytics/',
          image: { src: `${A}/_shared/why-data-teams-almost-never-have-to-answer-the-s-cf7b95be.png`, alt: 'figure - Why data teams (almost) never have to answer the same customer question twice', w: 1680, h: 1040 },
        },
        {
          title: 'How we built a customer health command center in Hex',
          text: 'Build your own Account 360: a complete customer health cockpit',
          href: '/blog/customer-health-data-app-account-360/',
          image: { src: `${A}/_shared/account-360-in-hex-your-one-stop-customer-health-4a315add.png`, alt: 'figure - How we built a customer health command center in Hex', w: 1680, h: 1040 },
        },
      ],
    },
    outro: CONTACT_OUTRO('Learn why data leaders choose Hex'),
  },

  marketing: {
    title: 'Marketing Analytics for Campaign and Attribution | Hex',
    hero: {
      title: 'Grow pipeline with clarity',
      description: 'Turn scattered marketing data into clear growth opportunities',
    },
    banner: true,
    blocks: [
      {
        kind: 'feature',
        media: 'left',
        title: 'When’s the last time you asked which attribution model is right?',
        subline: "When we are all working from the same context, the analysis doesn't drift.",
        body: 'Endorse your attribution model once in Hex, and every agent conversation, dashboard, and app pulls from that same definition.',
        image: { src: `${A}/marketing/when-s-the-last-time-you-asked-which-attribution-4f32b2ab.png`, alt: 'When’s the last time you asked which attribution model is right?', w: 1569, h: 1200 },
      },
      {
        kind: 'quote',
        logo: { src: `${A}/_shared/customer-story-om1-ea3c3c81.svg`, alt: 'OM1' },
        quote: 'We built a self-serve data app in Hex that lets sales and marketing teams manage healthcare data mappings without SQL, saving the data team hours weekly on massive datasets.”',
        author: { name: 'Zach Bryant', title: 'Associate Director of Data & Analytics', company: 'OM1' },
      },
      {
        kind: 'feature',
        media: 'right',
        title: 'Trying to answer on the spot questions about marketing-sourced pipeline?',
        subline: 'Your next read out just got a lot easier.',
        body: 'Ask the agent and get a real, governed answer — delivered as a presentation-ready visual you can screen-share straight from Hex, not a query result you have to rebuild into slides.',
        image: { src: `${A}/marketing/trying-to-answer-on-the-spot-questions-about-mar-ae0c122e.png`, alt: 'Trying to answer on the spot questions about marketing-sourced pipeline?', w: 1581, h: 1215 },
      },
      {
        kind: 'quote',
        logo: { src: `${A}/_shared/customer-story-algolia-baea542d.svg`, alt: 'Algolia' },
        // GAP: the spec recorded this quote truncated at 200 characters ("…in a singl"). The remainder was not captured.
        quote: 'My Hex application gives marketing leaders the ability to analyze different lead qualifiers and see hypothetical results. Now they are generating higher quality leads. By removing over 1,100 low-quality demo requests, Sales avoided spending an estimated 140 hours manually qualifying leads in a singl…”',
        author: { name: 'Jillian Lellis', title: 'Senior Marketing Data Operations Manager', company: 'Algolia' },
      },
      {
        kind: 'feature',
        media: 'left',
        title: "Catching a conversion drop after it's already cost you the quarter?",
        subline: 'Define what metrics matter and Hex watches the rest.',
        body: "Set up Tasks to surface conversion drops, channel shifts, or pipeline anomalies right in Slack before anyone has to notice something's off and figure out why.",
        image: { src: `${A}/marketing/catching-a-conversion-drop-after-it-s-already-co-86fb1e8f.png`, alt: "Catching a conversion drop after it's already cost you the quarter?", w: 779, h: 792 },
      },
      {
        kind: 'quote',
        logo: CLICKUP_LOGO,
        quote: 'Our marketing lifecycle teams could not use existing views to create a solution. We needed a tool with the flexibility for anyone to explore and build segments related to their part of the business. Hex unlocks that for ClickUp and has helped our teams save millions of dollars in churn.”',
        author: SAI,
      },
      {
        kind: 'live',
        description: ['Build your own Bottoms-up Pipeline dashboard to understand campaign performance against targets.'],
        explore: 'https://app.hex.tech/hex-public/app/034bMZkDGfvJGfA70QkjMY/latest',
        app: 'https://app.hex.tech/hex-public/app/034bMZkDGfvJGfA70QkjMY/latest?embedded=true',
        logic: 'https://app.hex.tech/hex-public/hex/Sales-Account-Prioritization-Tool-034bMZkDGfvJGfA70QkjMY?threadId=01a112aa-657a-777f-83bd-f701e687b94f&threadLayout=collapsed&embedded=true',
      },
      { kind: 'heading', title: 'Why data and marketing teams choose Hex' },
      {
        kind: 'feature',
        media: 'right',
        title: 'Tired of pipeline forecast panic? Here’s how we beat it',
        body: "Here's why a data app is better than spreadsheets every time.",
        cta: { label: 'Read more', href: '/blog/pipeline-forecast-data-app/?utm_source=marketing_site&utm_medium=solutions&utm_campaign=marketing_analytics' },
        image: { src: `${A}/marketing/tired-of-pipeline-forecast-panic-here-s-how-we-b-459c3f67.png`, alt: 'Tired of pipeline forecast panic? Here’s how we beat it', w: 2400, h: 1260 },
      },
    ],
    cards: {
      items: [
        {
          title: 'How we cracked lead conversion by segment',
          text: "Here's how to see what leads are worth chasing and which aren’t.",
          href: '/blog/lead-conversion-in-hex/',
          image: { src: `${A}/_shared/how-we-cracked-lead-conversion-by-segment-1b910ed6.png`, alt: 'figure - How we cracked lead conversion by segment', w: 1680, h: 1020 },
        },
        {
          title: 'Why, when and how to use a first-touch attribution model',
          text: 'First-touch attribution is a first-step to providing your marketing team value. Here’s how we did it in Hex.',
          href: '/blog/building-a-first-touch-attribution-model/',
          image: { src: `${A}/marketing/why-when-and-how-to-use-a-first-touch-attributio-80042e48.png`, alt: 'figure - Why, when and how to use a first-touch attribution model', w: 1680, h: 1020 },
        },
        {
          title: 'ClickUp: How a data app saved $1M in churn',
          text: 'ClickUp’s data app helped multiple marketing teams reduce churn, with reports they could explore on their own.',
          href: '/resources/data-app-click-up/',
          image: { src: `${A}/marketing/clickup-how-a-data-app-saved-1m-in-churn-55321389.jpg`, alt: 'figure - ClickUp: How a data app saved $1M in churn', w: 1680, h: 1020 },
        },
      ],
    },
    outro: CONTACT_OUTRO('Learn why data teams choose Hex for marketing analytics'),
  },

  'product-analytics': {
    title: 'Product Analytics for Data-Driven Teams | Hex',
    hero: {
      title: 'Product moves faster when data is in the room',
      description: 'Explore, test, and learn, so that every launch is faster, and more connected to what users actually need.',
    },
    banner: true,
    blocks: [
      {
        kind: 'feature',
        media: 'right',
        title: 'Learn the reasons behind churn and expansion',
        body: 'With Hex, Kong identified a hidden nuance in customers with a fast product activation rate — which resulted in increased retention and revenue.',
        cta: { label: 'Read more', href: '/customers/kong/' },
        image: { src: `${A}/product-analytics/learn-the-reasons-behind-churn-and-expansion-2cab0d5e.png`, alt: 'Learn the reasons behind churn and expansion', w: 1340, h: 940 },
      },
      {
        kind: 'quote',
        logo: { src: `${A}/product-analytics/kong-5676894e.svg`, alt: 'Kong' },
        quote: 'Hex has completely changed how we support PMs and other stakeholders.”',
        author: { name: 'Snehal Karanjkar', title: 'Product Analytics', company: 'Kong' },
      },
      {
        kind: 'feature',
        media: 'left',
        title: 'Know where to invest in your product next',
        subline: 'Build your product roadmap with data analysis, not gut feels.',
        body: 'Do the deep, exploratory work needed to define a product strategy. Dive into user behavior, run experiments, and get to the root causes of growth — all in one place.',
        image: { src: `${A}/product-analytics/know-where-to-invest-in-your-product-next-761f1d60.png`, alt: 'Know where to invest in your product next', w: 1216, h: 896 },
      },
      {
        kind: 'feature',
        media: 'right',
        title: 'Show your work as you go',
        subline: 'Every Hex workbook is a living guide.',
        body: 'Show your logic with a documented workbook that steps you through metric definitions, data sources, hypotheses, decisions — no detective work required.',
        image: { src: `${A}/product-analytics/show-your-work-as-you-go-d04db4ff.png`, alt: 'Show your work as you go', w: 1233, h: 948 },
      },
      {
        kind: 'feature',
        media: 'left',
        title: 'Close product feedback loops faster',
        subline: 'Interactive workspaces mean faster feedback loops.',
        body: 'Collaborate in real time on analysis, accelerate feedback loops, and create alignment on decisions. With Hex you can explore, iterate, and decide in the same place.',
        image: { src: `${A}/product-analytics/close-product-feedback-loops-faster-e94af611.png`, alt: 'Close product feedback loops faster', w: 1788, h: 1236 },
      },
      {
        kind: 'live',
        description: ['Build your own Product KPIs dashboard to dig into feature adoption and usage metrics.'],
        explore: 'https://app.hex.tech/hex-public/app/Product-KPIs-0311bZZ7yTSTefhjCF3cEV/latest',
        app: 'https://app.hex.tech/hex-public/app/Product-KPIs-0311bZZ7yTSTefhjCF3cEV/latest?embedded=true',
        logic: 'https://app.hex.tech/hex-public/hex/Product-KPIs-0311bZZ7yTSTefhjCF3cEV/draft/logic?embedded=true',
      },
      { kind: 'heading', title: 'From product questions to data-backed answers' },
    ],
    cards: {
      size: 'four',
      items: [
        {
          title: "How Kong's product analyst uses Hex to make product improvements",
          href: '/blog/how-kong-is-scaling-analytics-with-hex/',
          image: { src: `${A}/_shared/4-ways-kong-is-scaling-analytics-with-hex-440f5624.jpg`, alt: "figure - How Kong's product analyst uses Hex to make product improvements", w: 1680, h: 1040 },
        },
        {
          title: 'Why warehouse-based product analytics tells you more',
          href: '/blog/measuring-feature-success/',
          image: { src: `${A}/product-analytics/why-warehouse-based-product-analytics-tells-you--16d94d94.png`, alt: 'figure - Why warehouse-based product analytics tells you more', w: 1680, h: 1020 },
        },
        {
          title: 'How PMs can find their own business-impacting insights in Hex',
          href: '/blog/exploratory-product-analysis-for-product-and-engineering-teams/',
          image: { src: `${A}/product-analytics/how-pms-can-find-their-own-business-impacting-in-dc87784b.png`, alt: 'figure - How PMs can find their own business-impacting insights in Hex', w: 1680, h: 1020 },
        },
        {
          title: '5 Product metrics that actually drive growth (not vanity metrics)',
          href: '/blog/product-metrics-that-drive-growth/',
          image: { src: `${A}/_shared/5-product-metrics-that-change-our-decisions-and--576c2d0d.png`, alt: 'figure - 5 Product metrics that actually drive growth (not vanity metrics)', w: 1680, h: 1040 },
        },
      ],
    },
    outro: {
      title: 'Product and data teams, in lock-step',
      description: 'Start now with a free trial',
      action: { label: 'Sign up now', href: 'https://app.hex.tech/signup?_gl=1*ey9vmn*_gcl_au*MTE3NTA3ODUwNS4xNzQwNTk1ODUz', external: true },
    },
  },

  'sales-analytics': {
    title: 'Sales Analytics for Revenue and GTM Teams | Hex',
    hero: {
      title: 'Insights for sales. Sanity for your data team.',
      description: 'Help your team close more deals and hit their targets.',
      demoHref: '/request-a-demo/?utm_id=h_7015f000000VLkDAAW&utm_campaign=sales&utm_medium=landpg%20link&utm_source=cta?utm_content=sales',
    },
    banner: false,
    blocks: [
      {
        kind: 'feature',
        media: 'left',
        title: 'Map the fastest plan to your revenue target',
        subline: 'One platform for sales clarity.',
        body: 'Get total clarity on what drives your pipeline—and where deals slow down. Apply past and predictive insights to hit your targets with confidence.',
        image: { src: `${A}/sales-analytics/map-the-fastest-plan-to-your-revenue-target-3b701163.png`, alt: 'Map the fastest plan to your revenue target', w: 1412, h: 1198 },
      },
      {
        kind: 'feature',
        media: 'right',
        title: 'Data views that keep your sales team two steps ahead',
        subline: 'Explore, experiment, and forecast ahead.',
        body: 'Stop using tools that only look in the rear view mirror. Empower your sales team get ahead of opportunities with highly accurate, automated forecasts and insightful, forward-looking analysis.',
        image: { src: `${A}/sales-analytics/data-views-that-keep-your-sales-team-two-steps-a-39e4ac84.png`, alt: 'Data views that keep your sales team two steps ahead', w: 1204, h: 816 },
      },
      {
        kind: 'feature',
        media: 'left',
        title: 'Flexible for sales; reliable data for everyone',
        subline: 'Provide trusted data exploration.',
        body: 'Say goodbye to non-trustworthy analyses in floating spreadsheets. Let everyone explore trusted sales data from AI-driven natural language and user-friendly apps.',
        image: { src: `${A}/_shared/governed-self-serve-with-ai-enhancement-591eb3c3.png`, alt: 'Flexible for sales; reliable data for everyone', w: 1311, h: 910 },
      },
      {
        kind: 'live',
        description: ['Build your own Sales Stage Conversion dashboard to understand and optimize pipeline health.'],
        explore: 'https://app.hex.tech/hex-public/app/Sales-Stage-Conversion-0313skUABWhY9e3i1fmFsZ/latest',
        app: 'https://app.hex.tech/hex-public/app/Sales-Stage-Conversion-0313skUABWhY9e3i1fmFsZ/latest?embedded=true',
        logic: 'https://app.hex.tech/hex-public/hex/Sales-Stage-Conversion-0313skUABWhY9e3i1fmFsZ/draft/logic?embedded=true',
      },
      { kind: 'heading', title: 'How Hex frees data teams and fuels sales' },
    ],
    cards: {
      items: [
        {
          title: 'How StubHub pinpointed ticket sales trends',
          text: 'Data apps let teams see the causes behind spikes or drops in ticket sales.',
          href: '/resources/data-app-stubhub/',
          image: { src: `${A}/sales-analytics/how-stubhub-pinpointed-ticket-sales-trends-a10a7690.png`, alt: 'figure - How StubHub pinpointed ticket sales trends', w: 3446, h: 2032 },
        },
        {
          title: 'Unlock funnel analysis with SQL and Python',
          text: 'Identify exactly where your sales funnel is leaking with SQL and Python.',
          href: '/blog/funnel-analysis/',
          image: { src: `${A}/sales-analytics/unlock-funnel-analysis-with-sql-and-python-d726e793.png`, alt: 'figure - Unlock funnel analysis with SQL and Python', w: 1680, h: 990 },
        },
        {
          title: 'Predictive Lead Scoring with Python',
          text: 'Learn how to prioritize prospects effectively with a predictive scoring model.',
          href: '/blog/predictive-lead-scoring-python/',
          image: { src: `${A}/_shared/how-we-cracked-lead-conversion-by-segment-1b910ed6.png`, alt: 'figure - Predictive Lead Scoring with Python', w: 1680, h: 1020 },
        },
      ],
    },
    outro: CONTACT_OUTRO('Learn why data teams choose Hex for sales analytics'),
  },
}

export { SIGNUP as SOLUTION_SIGNUP, DEMO as SOLUTION_DEMO }
