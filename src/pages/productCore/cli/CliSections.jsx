// /product/cli/ page sections (specs/product.md §4.2; reference/pages/product/dom/cli/*).
import { AnnouncementPill, BasicPageRow, CartesianGrid, PerlinNoise, SectionHeading } from '../../../components/shared'
import { ContentSection } from '../../../components/shared/LayoutGrid.jsx'
import CodePill from '../shared/CodePill.jsx'
import InstallScript from '../shared/InstallScript.jsx'
import ImageInfoCard, { ImageInfoCardGrid } from '../shared/ImageInfoCard.jsx'
import { AsteriskIcon, AutoRunIcon, PlusIcon, SemanticModelsIcon } from '../shared/Icons.jsx'
import HeroTerminal from './HeroTerminal.jsx'

// §4.2 #0 HeroCLI [0,0,1440,875]: CartesianGrid backdrop (rose tint on dark) → Inner (max 1436, padding
// 220/40/105, ≤1250 column gap 60) → Content (gap 80, ≤800 column): text column (max 600, gap 20) + terminal.
export function HeroCli() {
  return (
    <ContentSection data-section="HeroCLI">
      <div className="relative flex w-full flex-col items-center">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <CartesianGrid />
        </div>
        <div className="pc-cli-hero">
          <div className="pc-cli-hero__content">
            <div className="flex max-w-[600px] flex-col justify-center gap-[20px]">
              <AnnouncementPill
                href="/blog/introducing-the-hex-cli/"
                icon="/assets/svg/icons/nav/hex-cli.svg"
                label="The Hex CLI"
                text="Read the announcement"
              />
              <h1 className="pc-cli-hero__title gradient-heading font-display text-heading-1 font-bold">
                Command (line) <span data-style="italic">and conquer</span>
              </h1>
              <p className="m-0 mb-[10px] text-lead-xl font-light text-ink [text-wrap:balance] phone-sm:text-lead-l">
                Create projects, write SQL, run analyses, and connect your agents… without leaving your terminal.
              </p>
              <div className="flex h-min gap-[16px] phone:justify-center phone:gap-[12px]">
                <InstallScript />
              </div>
            </div>
            <HeroTerminal />
          </div>
        </div>
      </div>
    </ContentSection>
  )
}

const CARDS = [
  {
    title: 'Works in any terminal',
    text: 'Interact directly with Hex from your terminal. Get projects, create cells, and manage users from the command line.',
    image: 'illustration-any-terminal@2x.png',
  },
  {
    title: 'Plays nicely with coding agents',
    text: (
      <>
        Use Claude Code or Cursor to generate an analysis, and have it move it across to Hex. Teach your agent how to use the CLI with our agent skill{' '}
        <CodePill>hex install skill --claude</CodePill>
      </>
    ),
    image: 'illustration-claude-code@2x.png',
  },
  {
    title: 'Orchestrate and automate',
    text: 'The Hex CLI is a standard UNIX tool - trigger automations from GitHub Actions, or your own orchestration layer.',
    image: 'illustration-github-actions@2x.png',
  },
]

// §4.2 #2 "Analytics where your agent works" [0,1129,1440,982]: N2 + N7 (3 cards 376×569, images 400×300).
export function AnalyticsAgentWork() {
  return (
    <BasicPageRow bordered>
      <div className="flex min-w-0 max-w-full flex-col items-center gap-[clamp(30px,0.8203rem_+_3.75vw,60px)]" data-section="SectionAnalyticsAgentWork">
        <SectionHeading title="Analytics where" italic="your agent works" italicOffset="-1.7rem" description="Build locally, share and collaborate in Hex." />
        <ImageInfoCardGrid>
          {CARDS.map((c) => (
            <ImageInfoCard
              key={c.title}
              title={c.title}
              text={c.text}
              image={{ src: `/assets/pages/product/cli/${c.image}`, alt: c.title, width: 400, height: 300 }}
            />
          ))}
        </ImageInfoCardGrid>
      </div>
    </BasicPageRow>
  )
}

const FEATURES = [
  {
    icon: <PlusIcon />,
    title: 'Create & manage projects',
    text: (
      <>
        Spin up Hex projects in seconds. Use <CodePill>hex project</CodePill>, <CodePill>hex app</CodePill>, and <CodePill>hex cell</CodePill> to build analyses from your terminal — and make changes across many projects in one scripted pass.
      </>
    ),
  },
  {
    icon: <AutoRunIcon />,
    title: 'Run & validate',
    text: (
      <>
        Execute projects and apps programmatically with <CodePill>hex run</CodePill>. Integrate it into CI pipelines to catch errors and keep analyses in sync with changes to your business.
      </>
    ),
  },
  {
    icon: <AsteriskIcon />,
    title: 'Put the agent to work',
    text: (
      <>
        Kick off the Hex Agent from where your team already works. Use <CodePill>hex thread</CodePill> to ask a question, run the analysis in Hex, and bring the answer back into your existing workflow.
      </>
    ),
  },
  {
    icon: <SemanticModelsIcon />,
    title: 'Keep context up to date',
    text: (
      <>
        Keep your context in line with how the business evolves. Use <CodePill>hex guide</CodePill> to manage business logic and <CodePill>hex context</CodePill> to preview and publish changes to guides and semantic models.
      </>
    ),
  },
]

function EverythingMark() {
  return (
    <div className="pc-mark" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="none" viewBox="0 0 60 60"><path stroke="currentColor" d="M.5 16.5h19v19H.5zM34.5 28.5h19v19h-19zM.5 40.5h19v19H.5z" data-color="secondary" /><path stroke="currentColor" strokeLinecap="square" d="M10.532 15.117a8.75 8.75 0 0 1 8.747-8.748h38.793" data-color="primary" /><path stroke="currentColor" strokeLinecap="square" d="M44.406 27.117V13.495a7.126 7.126 0 0 1 7.126-7.126" data-color="primary" /><circle cx="10" cy="26" r="3" fill="currentColor" data-color="highlight" /><circle cx="10" cy="50" r="3" fill="currentColor" data-color="highlight" /><circle cx="44" cy="38" r="3" fill="currentColor" data-color="highlight" /><path stroke="currentColor" strokeDasharray="1 4" strokeLinecap="square" d="M20.694 50.19a8.135 8.135 0 0 0 8.135-8.136V16.37c0-5.522 4.477-10 10-10h5.135" data-color="primary" /><path fill="currentColor" d="M53.817 12v-1.414l4.413-4.412-4.413-4.413V.347l5.828 5.827z" data-color="primary" /></svg>
    </div>
  )
}

// §4.2 #3 FeatureList [0,2111,1440,475]: full inner, rose Perlin backdrop (1024px, .24, wrapper .8, fading out
// toward the bottom) → heading block (max 340) + 2×2 SectionLine grid (gap 40).
export function FeatureList() {
  return (
    <BasicPageRow bordered inner="full">
      <div className="pc-cli-features" data-section="SectionEverythingYouNeed">
        <div className="pc-cli-features__noise" aria-hidden="true">
          <PerlinNoise texture="rose" size={1024} opacity={0.24} />
        </div>
        <div className="pc-cli-features__inner">
          <div className="flex w-[267px] min-w-[200px] max-w-[340px] shrink-0 flex-col items-start gap-[30px] tablet:w-auto tablet:max-w-full">
            <EverythingMark />
            <h2 className="pc-cli-features__title gradient-heading text-left font-formula text-heading-2 font-[800]">
              <span data-style="italic">Everything</span> you need to control Hex with code
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-[40px] phone:grid-cols-1">
            {FEATURES.map((f) => (
              <div key={f.title} className="flex flex-col items-start gap-[12px]">
                <div className="flex items-baseline gap-[10px]">
                  <span className="flex h-[15px] w-[15px] shrink-0 text-fg-1200">{f.icon}</span>
                  <h3 className="m-0 font-formula text-heading-4 font-semibold text-ink-loud [text-wrap:balance]">{f.title}</h3>
                </div>
                <p className="m-0 text-body font-light text-ink">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BasicPageRow>
  )
}

const WORKFLOWS = [
  {
    task: 'BI migrations',
    prompt: 'Pull all the .sql files from /legacy-bi/hyperdrive-analysis and create a new project in Hex called "Galactic Hyperdrive Performance". When done importing them, run all cells.',
    result: 'In one script, fetch the SQL powering the most popular dashboards, push into new Hex projects and bootstrap your AI analytics migration.',
  },
  {
    task: 'Bulk schema updates',
    prompt: 'I just pushed a new PR, search across all my Hex projects for anything that uses the "hyperdrive_performance" table and the "hyperdrive_model" column. We need to update the column name to "hyperdrive_model_sku". When you\'re done, run all cells.',
    result: 'List all projects, scan all SQL cells for the old column name, update in place, and rerun to validate. From a day-long project to a simple script.',
  },
  {
    task: 'Generate locally, ship to Hex',
    prompt: 'Find "hyperdrive_maintenance_churn_v2.ipynb" and use the Hex CLI to import it into my workspace, then open it in my browser.',
    result: 'Use any AI tool to write SQL and Python, push the finished analysis to Hex as a shareable, versioned project.',
  },
]

// §4.2 #4 WorkflowTable [0,2586,1440,916]: 1fr/2fr/2fr grid, column flow, header row + 3 rows; the Result column
// sits on a highlighted panel (left 60%, #14141C, 1px --grid700, rose Perlin 512 at .6, 12px rose corner brackets).
export function WorkflowTable() {
  return (
    <BasicPageRow bordered>
      <div className="flex min-w-0 max-w-full flex-col items-center gap-[60px]" data-section="SectionBuiltFor">
        <SectionHeading title="Built for" italic="real workflows" italicOffset="-1.7rem" />
        <div className="pc-cli-table">
          <div className="pc-cli-table__highlight" aria-hidden="true">
            {['tl', 'tr', 'bl', 'br'].map((p) => (
              <div key={p} className="pc-cli-table__accent" data-position={p} />
            ))}
            <div className="absolute inset-0 opacity-60">
              <PerlinNoise texture="rose" size={512} opacity={0.24} hoverDuration="500ms" />
            </div>
          </div>
          <div className="pc-cli-table__grid">
            <div className="pc-cli-table__head annotation" style={{ gridArea: '1 / 1' }} data-first="">Task</div>
            <div className="pc-cli-table__head annotation" style={{ gridArea: '1 / 2' }}>Prompt</div>
            <div className="pc-cli-table__head annotation" style={{ gridArea: '1 / 3' }}>Result</div>
            <div className="pc-cli-table__col" data-col="task">
              {WORKFLOWS.map((w, i) => (
                <div key={w.task} className="pc-cli-table__cell" style={{ '--o': i * 3 }}>
                  <h3 className="m-0 font-formula text-heading-4 font-semibold text-ink-loud">{w.task}</h3>
                </div>
              ))}
            </div>
            <div className="pc-cli-table__col" data-col="prompt">
              {WORKFLOWS.map((w, i) => (
                <div key={w.task} className="pc-cli-table__cell" style={{ '--o': i * 3 + 1 }}>
                  <p className="pc-cli-table__prompt m-0 text-body font-light text-ink">{w.prompt}</p>
                </div>
              ))}
            </div>
            <div className="pc-cli-table__col" data-col="result">
              {WORKFLOWS.map((w, i) => (
                <div key={w.task} className="pc-cli-table__cell" style={{ '--o': i * 3 + 2 }}>
                  {['tl', 'tr', 'bl', 'br'].map((p) => (
                    <div key={p} className="pc-cli-table__accent pc-cli-table__accent--mobile" data-position={p} aria-hidden="true" />
                  ))}
                  <p className="pc-cli-table__result m-0 text-body font-light">{w.result}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BasicPageRow>
  )
}

const FOOTER_ART = `
███╗  ███╗ ████████╗ ███╗  ███╗
███║  ███║ ███╔═███║ ╚███╗███╔╝    _____  __    ____
█████████║ ████████║  ╚█████╔╝    / ___/ / /   /  _/
███╔══███║ ███╔════╝  ███╔███╗   / /    / /    / /
███║  ███║ ███║ ███╗ ███╔╝╚███╗ / /___ / /__ _/ /
███║  ███║ ████████║ ███║  ███║ \\____//____//___/
╚══╝  ╚══╝ ╚═══════╝ ╚══╝  ╚══╝
`

// §4.2 #5 CliFooterCta [0,3502,1440,826]: ASCII art <pre> → N2 heading → centred InstallScript.
export function CliFooterCta() {
  return (
    <BasicPageRow bordered>
      <div className="pc-cli-footer" data-section="SectionFooter">
        <pre aria-hidden="true" className="pc-cli-footer__art">{FOOTER_ART}</pre>
        <SectionHeading title="Control Hex" italic="from your terminal" italicOffset="-1.7rem" maxWidth={567} description="Install the CLI and start building today" />
        <InstallScript align="center" />
      </div>
    </BasicPageRow>
  )
}

