// /pricing/ content (specs/solutions.md §4.4, reference/pages/solutions/dom/pricing-plans-and-table.html,
// measurements/pricing-table-data.json, pricing-tooltips.json). Copy is verbatim from the spec.

// ---------- FeatureTooltip texts (§4.4.4): 14 plan-card terms (place "top") + 20 table labels (place "right") ----------
const LEARN = (href) => `<br /><a target="_blank" href="${href}">Learn more</a>`
const COMPUTE_LINK = '&nbsp;<a href="#compute-modal">Learn more</a>'

export const CARD_TIPS = {
  'data source': 'Pull data from your warehouse, cloud storage provider, local files, or API.',
  'cell types': 'Combine SQL, Python, charts and spreadsheets in one project.',
  Small: `4GB RAM, 0.5 CPU.${COMPUTE_LINK}`,
  'published apps': 'Sharable dashboards, reports, or data apps, built right from your notebooks.',
  Medium: `Up to 8GB RAM, 1 CPU.${COMPUTE_LINK}`,
  'Visual exploration': 'Explore data with point-and-click charts and pivots.',
  'drill down': 'Dive deeper into the underlying data from published apps.',
  components: 'Create reusable groups of cells that can be shared across your workspace.',
  collections: 'Organize projects into shareable groupings.',
  Advanced: `Up to 128GB RAM, 16 CPUs, and 1 GPU.${COMPUTE_LINK}`,
  'Explorer seat':
    'Dedicated licenses for exploring data with natural language chat or point-and-click visualizations.',
  'OAuth database connections': 'Configure user-specific access controls on shared data connections.',
  'Observability API':
    'Understand which data tables a project queries for audits, lineage mapping, and impact analysis.',
  'Bring Your Own Key (BYOK)': 'BYOK is supported for OpenAI and Anthropic.',
}

export const TABLE_TIPS = {
  Credits: 'Credits apply towards AI feature usage.<br /><a href="#faq-credits">Learn more</a>',
  'Published apps': 'Sharable dashboards, reports, or data apps, built right from your notebooks.',
  'Explorer role':
    'Explorers can chat with Threads, drill-down or explore from published apps, and subscribe to conditional notifications.' +
    LEARN('https://learn.hex.tech/docs/collaborate/sharing-and-permissions/roles'),
  'Data permissions':
    'Manage and restrict access to projects that use sensitive data.' +
    LEARN(
      'https://learn.hex.tech/docs/connect-to-data/data-connections/data-connections-introduction#workspace-data-connection-permissions',
    ),
  'Explore & View data':
    'Drill down into the underlying data powering a chart or table in a published App.' +
    LEARN('https://learn.hex.tech/docs/share-insights/explore'),
  Environment:
    'Leverage preset Python libraries or customize with Docker images.' +
    LEARN('https://learn.hex.tech/docs/explore-data/projects/environment-configuration/environment-views'),
  'Semantic models':
    'Connect semantic models from dbt, Snowflake, and Cube for governed metrics.' +
    LEARN('https://learn.hex.tech/docs/connect-to-data/semantic-models/intro-to-semantic-models'),
  Collections:
    'Groups of projects that can be created, populated, and shared by users in a workspace' +
    LEARN('https://learn.hex.tech/docs/organize-content/collections'),
  Components:
    'Create reusable groups of cells that can be shared with your workspace. All paid plans include unlimited personal components.' +
    LEARN('https://learn.hex.tech/docs/explore-data/components'),
  'Auto-archive': 'Configure rules to automatically archive projects that are no longer used',
  'Scheduled runs & alerts':
    'Schedule projects to run on a set cadence. Optionally subscribe to email or Slack notifications for run status or data-driven alerts.' +
    LEARN('https://learn.hex.tech/docs/share-insights/scheduled-runs'),
  Reviews:
    'Protect business-critical projects with required reviews' +
    LEARN('https://learn.hex.tech/docs/collaborate/reviews'),
  'Custom labels': 'Organize your app library for easy discoverability.',
  'Custom branding': 'Style published apps with custom logo, chart colors, background color, and accent color.',
  Snapshots: 'Freeze an app in time for easy reference in the future.',
  'User groups': 'Create user groups to manage permissions',
  'Usage reports': 'Admins can view usage of data connections, secrets and projects',
  Integrations: 'Integrations with your favorite orchestration and transformation tools',
  'REST APIs':
    'Programmatic control and automation of projects and administrative workflows.' +
    LEARN('https://learn.hex.tech/docs/api/api-overview'),
  'Observability API':
    'Understand which data tables a project queries for audits, lineage mapping, and impact analysis' +
    LEARN('https://learn.hex.tech/docs/api/api-overview'),
  OAuth:
    'Configure user-specific access controls on shared data connections.' +
    LEARN('https://learn.hex.tech/docs/connect-to-data/data-connections/oauth-data-connections'),
  'Audit logging':
    'Get a record of key actions within your workspace for security and compliance.' +
    LEARN('https://learn.hex.tech/docs/administration/workspace_settings/audit-logs/audit-logs-overview'),
  'Bring Your Own Key (BYOK)':
    "Use your own API key for Hex's AI features." +
    LEARN('https://learn.hex.tech/docs/trust/ai-data-privacy#bring-your-own-key-byok'),
}

// ---------- Plans (§4.4.2). Feature items: string, or an array of strings and { tip } segments ----------
export const PLANS = [
  {
    id: 'community',
    name: 'Community',
    group: 'individual',
    icon: 'community',
    description: 'For hobbyists completing small projects and showcasing work.',
    price: 'Free',
    cta: { label: 'Get started', href: 'https://app.hex.tech/signup?plan=community&source=pricing', external: true },
    intro: ['Features include:'],
    features: [
      'Hex agent trial',
      ['Connect any ', { tip: 'data source' }],
      ['Build with all ', { tip: 'cell types' }],
      [{ tip: 'Small' }, ' compute'],
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    group: 'individual',
    icon: 'professional',
    description: 'For individuals accelerating data insights and solo workflows.',
    price: '$36',
    priceDetail: ' per Editor / month',
    cta: { label: 'Get started', href: 'https://app.hex.tech/signup?plan=professional&source=pricing', external: true },
    intro: ['Everything in ', 'Community', ', plus:'],
    features: [
      'Hex agent',
      'Standard credits',
      ['Up to 5 ', { tip: 'published apps' }],
      '30-day version history',
      [{ tip: 'Medium' }, ' compute'],
    ],
  },
  {
    id: 'team',
    name: 'Team',
    group: 'team',
    icon: 'team',
    description: 'For companies collaborating with data and automating manual work.',
    price: '$75',
    priceDetail: ' per Editor / month',
    cta: { label: 'Try 14 days free', href: 'https://app.hex.tech/signup?plan=team&source=pricing', external: true, circles: true },
    intro: ['Everything in ', 'Professional', ', plus:'],
    features: [
      'Extended credits',
      ['Unlimited ', { tip: 'published apps' }],
      [{ tip: 'Visual exploration' }, ' and ', { tip: 'drill down' }],
      'Unlimited version history',
      'Scheduled runs and alerts',
      ['Shared ', { tip: 'components' }],
      ['Shared ', { tip: 'collections' }],
      [{ tip: 'Advanced' }, ' compute add-ons'],
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    group: 'team',
    icon: 'enterprise',
    description: 'For organizations requiring advanced security, governance, and support.',
    price: 'Custom',
    cta: { label: 'Contact Sales', href: '/request-a-demo/' },
    intro: ['Everything in ', 'Team', ', plus:'],
    features: [
      [{ tip: 'Explorer seat' }, ' add-on'],
      'Audit logs',
      'Premium credits',
      [{ tip: 'OAuth database connections' }],
      [{ tip: 'Observability API' }],
      'OIDC SSO',
      [{ tip: 'Bring Your Own Key (BYOK)' }],
      'Single tenant add-on',
      'HIPAA add-on',
      'Embedded analytics add-on',
      'Custom Docker image add-ons',
      'Dedicated support',
    ],
  },
]

export const GROUPS = [
  { id: 'individual', label: 'Individual plans', team: false },
  { id: 'team', label: 'Team plans', team: true },
]

// ---------- Comparison table (§4.4.3). Cell: true = tick, null = empty, string, { compute, suffix },
// { text, footnote } (rich: rendered empty on the live mobile view), { lines: [...] } ----------
const T = true
const _ = null
const FOOT = '*Available but not offered in all cases'

export const TABLE = [
  {
    title: '',
    rows: [
      ['Unlimited users', [T, T, T, T]],
      ['Hex agent', [T, T, T, T]],
      ['Credits', ['Limited', 'Standard', 'Extended', 'Premium'], true],
      ['Published apps', ['Up to 5', 'Up to 5', 'Unlimited', 'Unlimited'], true],
      ['Explorer role', [_, _, _, 'Per seat add-on'], true],
    ],
  },
  {
    title: 'Data',
    rows: [
      ['Project connections', [T, T, T, T]],
      ['Workspace connections', [T, T, T, T]],
      ['Data permissions', [_, 'Restrict editing', 'Restrict editing', 'Restrict editing & viewing'], true],
      ['Custom SQL formatting', [_, T, T, T]],
      ['Explore & View data', [_, _, T, T], true],
      ['SSH', [_, T, T, T]],
      [
        'Compute profiles',
        [
          { compute: 'Small' },
          { compute: 'Medium' },
          { compute: 'Advanced compute', suffix: ' add-ons' },
          { compute: 'Advanced compute', suffix: ' add-ons' },
        ],
      ],
      [
        'Environment',
        ['Standard Python libraries', 'Standard Python libraries', 'Standard Python libraries', 'Custom Docker image add-ons'],
        true,
      ],
      ['Semantic models', [_, _, T, T], true],
    ],
  },
  {
    title: 'Collaboration',
    rows: [
      ['Collections', [_, 'Up to 3 shared collections', 'Unlimited', 'Unlimited'], true],
      ['Components', [_, 'Up to 3 shared components', 'Unlimited', 'Unlimited'], true],
      ['Auto-archive', [_, _, T, T], true],
      ['Scheduled runs & alerts', [_, _, T, T], true],
      ['Version history', ['7-day', '30-day', 'Unlimited', 'Unlimited']],
      ['Reviews', [_, _, T, T], true],
      ['Custom labels', [_, _, T, T], true],
      ['Custom branding', [_, _, 'Up to 1 custom app theme', 'Up to 5 custom app themes'], true],
      ['Snapshots', [_, T, T, T], true],
      ['Presentation mode', [_, T, T, T]],
      ['Git project export and package import', [_, _, T, T]],
    ],
  },
  {
    title: 'Administration',
    rows: [
      ['User groups', [_, _, T, T], true],
      ['Usage reports', [_, _, T, T], true],
      ['Integrations', [_, _, 'Airflow, Dagster, dbt', 'Airflow, Dagster, dbt'], true],
      ['REST APIs', [_, _, T, T], true],
      ['Observability API', [_, _, _, T], true],
      ['Marketplace offerings', [_, _, _, { lines: ['AWS Marketplace', 'Snowflake Marketplace'] }]],
    ],
  },
  {
    title: 'Security',
    rows: [
      ['OIDC SSO', [_, _, _, T]],
      ['OAuth', [_, _, _, T], true],
      ['Audit logging', [_, _, _, T], true],
      ['Bring Your Own Key (BYOK)', [_, _, _, 'OpenAI and Anthropic'], true],
      [
        'Deployment',
        [
          'Multi-tenant',
          'Multi-tenant',
          'EU Multi-tenant (contract only) or multi-tenant',
          'Single, EU Multi-tenant or multi-tenant',
        ],
      ],
    ],
  },
  {
    title: 'Support',
    rows: [
      [
        'Support (9am-5pm PT M-F)',
        [
          'Email',
          'Email',
          { text: 'Email, in-product messenger* with priority SLA', footnote: FOOT },
          { text: 'Email, in-product messenger, Slack*, Microsoft Teams* with Enterprise SLA', footnote: FOOT },
        ],
      ],
      [
        'Learning & training',
        [
          'Technical documentation, group learning sessions',
          'Technical documentation, group learning sessions',
          { text: 'Technical documentation, group learning sessions, live training*', footnote: FOOT },
          {
            text: 'Technical documentation, live onboarding, by-request product education sessions, dedicated Customer Engineer*, dedicated Product Expert*',
            footnote: FOOT,
          },
        ],
      ],
    ],
  },
].map((section) => ({
  title: section.title,
  rows: section.rows.map(([label, cells, tip]) => ({ label, cells, tip: tip ? TABLE_TIPS[label] : undefined })),
}))

// ---------- Compute profiles modal (§4.4.5) ----------
export const COMPUTE_ROWS = [
  ['Extra small', '2', '0.25', 'Free'],
  ['Small', '4', '0.5', 'Free'],
  ['Medium', '8', '1', 'Free'],
  ['Large', '16', '2', '$0.32'],
  ['Extra large', '32', '4', '$0.65'],
  ['2XL', '64', '8', '$1.29'],
  ['4XL', '128', '16', '$2.58'],
  ['A10G GPU', '27', '6', '$4.06'],
  ['L4 GPU', '27', '6', '$2.93'],
]

// ---------- FAQ (§4.4.6), passed to the shared Faq via `items` ----------
export const PRICING_FAQ = [
  {
    id: 'faq-free-trial',
    q: 'How does the free trial work?',
    answerHtml:
      "<p>Anyone can try the Hex Team plan free for 14 days, no payment card required. At the end of your trial you can choose to continue on a paid plan. If you do nothing, you'll be downgraded to the free Community plan and lose access to premium features.</p>",
  },
  {
    id: 'faq-cancel-change-plan',
    q: 'How do I cancel or change my plan?',
    answerHtml:
      '<p>Professional and Team customers can cancel or change their plan anytime from Settings &gt; Manage Plan. If you cancel, you will still have access to your paid plan until the end of your billing period. If you upgrade or downgrade, the change will apply right away and you’ll be charged or credited for the remainder of your billing cycle.</p><p>Enterprise customers can manage renewals and cancellations with their account representative.</p>',
  },
  {
    id: 'faq-security-compliance',
    q: 'How do you handle security and compliance?',
    answerHtml:
      '<p>We are audited annually for SOC 2 Type II and HIPAA compliance and are dedicated to safeguarding your data. Learn more <a href="https://trust.hex.tech/" target="_blank" rel="noopener noreferrer">here</a>.</p>',
  },
  {
    id: 'faq-credits',
    q: 'How do credits work?',
    answerHtml:
      "<p>AI features in Hex consume credits based on the effort required to complete the task. All paid plans include a credit grant, with the option to purchase add-on credits.</p><p>Professional and Team plans include monthly per-seat credit grants that are assigned to each paid user, refresh monthly and don't roll over. Enterprise plan credit grants are custom as specified on your order form.</p><p>See our docs <a href=\"https://learn.hex.tech/docs/administration/credits\" target=\"_blank\" rel=\"noopener noreferrer\">article</a> for more info.</p>",
  },
  {
    id: 'faq-education-discount',
    q: 'Do you have a discount for students and educators?',
    answerHtml:
      '<p>Yes! Students and educators at universities and bootcamps can access the Hex Professional Plan for free. Contact <a href="mailto:support@hex.tech">support@hex.tech</a> for details.</p>',
  },
  {
    id: 'faq-nonprofit-discount',
    q: 'Do you have a discount for non-profits?',
    answerHtml:
      '<p>Yes - we have a discounted program for qualified non-profits - write to <a href="mailto:support@hex.tech">support@hex.tech</a> to see if you qualify.</p>',
  },
]
