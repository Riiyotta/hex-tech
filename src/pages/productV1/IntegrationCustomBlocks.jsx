// T5 custom blocks (specs/product.md §5 #5, copy from reference/pages/product/dom/integrations-{athena,snowflake}/).
// integrationTemplate-styles__CustomComponents: flex column, gap 40, ending with a TronDivider; each block sits in
// IntegrationComponentsWrapper (max 1240, padding 0 40).
import { Fragment } from 'react'
import { Button, TronDivider } from '../../components/shared'
import Faq from '../../components/sections/Faq.jsx'

const SF = '/assets/pages/product/integrations-snowflake'

export function CustomComponents({ children }) {
  return (
    <div className="flex flex-col gap-[40px]">
      {children}
      <TronDivider />
    </div>
  )
}

const Wrap = ({ children }) => <div className="mx-auto w-full max-w-section px-[40px]">{children}</div>

// TwoUpColumns: grid 1fr 1fr, gap 40, margin 48 0 (1 col ≤800), each a RunningText column.
const TwoUp = ({ children }) => <div className="my-[48px] grid grid-cols-2 gap-[40px] stack:grid-cols-1">{children}</div>

const H2 = ({ id, children }) => (
  <h2 id={id} className="font-formula text-[28px] font-extrabold tracking-[-0.025em]">
    {children}
  </h2>
)
// RunningText (.BsNpq h2/h3/p) outranks the heading/text classes: h2 28px, h3 20px, p IBM Plex Sans 18/32 400.
const H3 = ({ children }) => <h3 className="font-formula text-[20px] font-extrabold tracking-[-0.025em]">{children}</h3>
const P = ({ children }) => <p>{children}</p>
const Ext = ({ href, children }) => (
  <a href={href} rel="noopener noreferrer" target="_blank">
    {children}
  </a>
)

const AWS_ITEMS = [
  [
    'Athena',
    'Query data stored in S3 using SQL. Athena is a good fit when your data lives in flat files or object storage and you want to get to it fast, without managing a warehouse.',
    'https://learn.hex.tech/docs/connect-to-data/data-connections/setup-guides/connect-to-amazon-athena',
    'Learn more about Athena →',
  ],
  [
    'Redshift',
    "A columnar data warehouse built for complex analytics at scale. If you're deeply invested in the AWS ecosystem, Redshift's integrations with S3, Glue, and the rest of the stack make it a natural home base for large-scale data work.",
    'https://learn.hex.tech/docs/connect-to-data/data-connections/setup-guides/connect-to-amazon-redshift',
    'Learn more about Redshift →',
  ],
  [
    'RDS',
    "Connect to MySQL, PostgreSQL, or other relational databases running on Amazon's managed infrastructure. Good for transactional data you want to bring into an analysis alongside your warehouse.",
    'https://learn.hex.tech/docs/connect-to-data/data-connections/setup-guides/connect-to-amazon-rds',
    'Setup guide →',
  ],
  [
    'S3',
    'Import flat files from your S3 buckets directly into a Hex notebook. CSVs, Parquet, JSON — pull them in and start working without any manual downloads.',
    'https://learn.hex.tech/tutorials/connect-to-data/connect-to-s3',
    'S3 file integration docs →',
  ],
  [
    'ECR',
    "Register custom Docker images with Hex using Amazon Elastic Container Registry. Useful for teams that need specific Python packages or system dependencies beyond Hex's default environment.",
    'https://learn.hex.tech/docs/administration/workspace_settings/custom-images#amazon-ecr',
    'Custom images docs →',
  ],
]

export function AwsBlocks() {
  return (
    <CustomComponents>
      <Wrap>
        <TwoUp>
          <div className="pv1-running">
            <H2 id="aws-connections">AWS connections</H2>
            {AWS_ITEMS.map(([h, p, href, label]) => (
              <Fragment key={h}>
                <H3>{h}</H3>
                <P>{p}</P>
                <P>
                  <Ext href={href}>{label}</Ext>
                </P>
              </Fragment>
            ))}
          </div>
          <div className="pv1-running">
            <H2 id="iam-role-support-across-every-aws-connection">IAM role support across every AWS connection</H2>
            <P>
              Hex now supports IAM roles as an authentication method for all AWS integrations — Athena, Redshift, RDS, S3, and ECR.
              IAM roles issue short-lived, automatically rotating credentials, so there are no static access keys to store, audit,
              or rotate manually. More secure by default, with less ongoing maintenance.{' '}
              <Ext href="https://learn.hex.tech/changelog/2026-06-25">
                <u>Read the changelog →</u>
              </Ext>
            </P>
          </div>
        </TwoUp>
      </Wrap>
    </CustomComponents>
  )
}

// IntegrationComponentHeader: centred, gap 16, padding-top 40, max-width 80%.
function Header({ title, text }) {
  return (
    <Wrap>
      <div className="mx-auto flex max-w-[80%] flex-col items-center gap-[16px] pt-[40px] text-center">
        <h2 className="m-0 font-formula text-heading-2 font-extrabold text-ink-loud">{title}</h2>
        {text && <p className="pv1-text-20">{text}</p>}
      </div>
    </Wrap>
  )
}

// CardsGrid repeat(3,1fr) gap 24 (1 col ≤800); CardItem padding 24, 1px --grid500.
function Cards({ items }) {
  return (
    <Wrap>
      <div className="grid grid-cols-3 gap-[24px] stack:grid-cols-1">
        {items.map((c) => (
          <div key={c.title} className="border border-grid-500 p-[24px]">
            <img src={c.img} alt={c.title} width={c.w} height={c.h} className="mb-[16px] h-auto max-w-full" loading="lazy" />
            <h4 className="m-0 mb-[8px] font-formula text-heading-4 font-semibold text-ink-loud">{c.title}</h4>
            <p className="m-0 mb-[20px] text-body font-light text-ink last:mb-0">{c.text}</p>
            {c.cta && (
              <Button size="md" corners circles variant="secondary" href={c.cta.href} block>
                {c.cta.label}
              </Button>
            )}
          </div>
        ))}
      </div>
    </Wrap>
  )
}

const WHY = [
  { title: 'Data apps', text: 'Provide actionable analytics built into user workflows.', img: '/assets/pages/product/_shared/interactive-data-stories-64aa53c3-1680x1020.png', w: 1680, h: 1020 },
  { title: 'Data science', text: 'Surface complex and predictive insights. ', img: `${SF}/data-science-4d6a3f6c-1680x1020.png`, w: 1680, h: 1020 },
  { title: 'Enhanced self-service', text: 'Enable AI-enhanced, ad-hoc question-answering in a governed environment.', img: `${SF}/enhanced-self-service-f7b3b7c7-1680x1020.png`, w: 1680, h: 1020 },
]
const APPROACH_1 = [
  { title: 'Native data connection', text: 'Connect to your Snowflake data for SQL and Python workflows', img: `${SF}/native-data-connection-4529b388-480x99.png`, cta: { label: 'Discover notebooks', href: '/product/notebooks/' } },
  { title: 'No-code exploration', text: 'Perform drag-and-drop data exploration and create data apps', img: `${SF}/no-code-exploration-be6eb5e2-480x99.png`, cta: { label: 'Discover data apps', href: '/product/app-builder/' } },
  { title: 'AI code generation', text: 'Use Hex Magic to generate and debug Snowpark code', img: `${SF}/ai-code-generation-6a5edb7e-480x99.png`, cta: { label: 'Discover Magic AI', href: '/product/magic-ai/' } },
].map((c) => ({ ...c, w: 480, h: 99 }))
const APPROACH_2 = [
  { title: 'Governed data models', text: 'Sync your Snowflake Semantic Views for trusted self-service', img: `${SF}/governed-data-models-82d66b47-480x99.png`, cta: { label: 'Discover semantic models', href: '/product/semantic-models' } },
  { title: 'True AI model residency', text: 'Tap into Snowflake Cortex and AISQL to speed up your analysis', img: `${SF}/true-ai-model-residency-7487da07-480x99.png` },
  { title: 'Secure OAuth support', text: 'Configure OAuth for both Snowpark and Snowflake SQL', img: `${SF}/secure-oauth-support-72420a30-480x99.png` },
].map((c) => ({ ...c, w: 480, h: 99 }))

export function SnowflakeBlocks({ faqItems }) {
  return (
    <CustomComponents>
      <Header
        title="Why is Hex great for Snowflake?"
        text="Hex enables data teams to build advanced analytics, data applications, and enhanced self-service workflows that aren’t possible in any other tool."
      />
      <Cards items={WHY} />
      <Header title="Hex offers a new approach to data and analytics" />
      <Cards items={APPROACH_1} />
      <Cards items={APPROACH_2} />
      <Header title="How does Hex compare to Snowflake Notebooks?" />
      <Wrap>
        <TwoUp>
          <div className="pv1-running">
            <H3>Data Exploration in Snowflake</H3>
            <P>Multiple products</P>
            <P>
              Snowflake notebooks are best for one-off, individual projects for SQL or Python experts who work in Snowflake. Multiple
              tools are required when these projects need to be deployed at scale (such as Streamlit for apps or third-party BI tools
              for reporting).
            </P>
          </div>
          <div className="pv1-running">
            <H3>Hex</H3>
            <P>One Platform for all data workflows</P>
            <P>
              Hex is a platform designed for multiple personas - including data scientists and business stakeholders - to collaborate
              on data in one environment. It contains all the tools needed for data teams to create analysis, build apps and reports,
              govern data access and share with others.
            </P>
          </div>
        </TwoUp>
      </Wrap>
      <Wrap>
        <Faq items={faqItems} answerStyle="page" tron={false} />
      </Wrap>
    </CustomComponents>
  )
}
