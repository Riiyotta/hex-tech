// /product/bi/ page sections (light): specs/product.md §4.1; reference/pages/product/dom/bi/*.
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import {
  AnnouncementPill,
  BasicPageRow,
  Button,
  CompareVs,
  DashedLineQuote,
  GlassCard,
  InfoText,
  Reveal,
  ResourceCard,
  SectionHeading,
} from '../../../components/shared'
import { ContentSection } from '../../../components/shared/LayoutGrid.jsx'
import { ConversationalAnalyticsMark, ContextStudioMark } from '../../../components/sections/ConversationalAnalytics/AbstractMarks.jsx'
import AgentChatWindow from '../../../components/sections/TrustedAnswers/AgentChatWindow.jsx'
import McpWindow from '../../../components/sections/TrustedAnswers/McpWindow.jsx'
import SlackWindow from '../../../components/sections/TrustedAnswers/SlackWindow.jsx'
import CliWindow from '../../../components/sections/TrustedAnswers/CliWindow.jsx'
import DashboardWindow from '../../../components/sections/ContextStudio/DashboardWindow.jsx'
import FeatureSection from '../../../components/sections/ConversationalAnalytics/FeatureSection.jsx'
import { AgentLogoStack } from '../../../components/sections/TrustedAnswers.jsx'
import BiIllustration from './BiIllustration.jsx'
import workbenchHtml from './partials/workbench.html?raw'
import '../../../components/sections/TrustedAnswers/TrustedAnswers.css'
import '../../../components/sections/ContextStudio/ContextStudio.css'
import './workbench.css'

// §4.1 #0 BIHero [0,0,1440,860]
export function BiHero() {
  return (
    <ContentSection data-section="BIHero">
      <div className="pc-bi-hero">
        <BiIllustration id="hero" className="pc-bi-hero__art" />
        <Reveal animateOnMount className="pc-bi-hero__text">
          <AnnouncementPill
            href="https://learn.hex.tech/docs/explore-data/threads"
            external
            icon="/assets/svg/icons/nav/conversational-analytics.svg"
            label="Conversational analytics"
            text="Read the docs"
          />
          <h1 className="pc-bi-hero__title gradient-heading text-center font-display text-hero font-bold">
            A new era of <span data-style="italic">business intelligence</span> has arrived
          </h1>
          <p className="pc-bi-hero__desc m-0 text-lead-xl font-light text-ink phone-sm:text-lead-l">
            With Hex, self-serve trusted answers and build dashboards in plain language. It's BI the way it was meant to be.
          </p>
          <div className="pc-bi-hero__actions">
            <Button variant="primary" size="lg" href="/request-a-demo/">
              Request a demo
            </Button>
            <Button variant="secondary" size="lg" href="https://app.hex.tech/signup" external>
              Get started for free
            </Button>
          </div>
        </Reveal>
      </div>
    </ContentSection>
  )
}

const story = (href, quote, author, title) => ({ href, align: 'left', quote, author, title })
export const BI_LOGOS = [
  {
    slug: 'stubhub',
    name: 'StubHub',
    w: 81,
    h: 50,
    story: story('/customers/stubhub/', '"Hex has helped us empower business analysts to explore and dig into data on their own"', 'Meghana Reddy', 'Head of Data at Stubhub'),
  },
  {
    slug: 'figma',
    name: 'Figma',
    w: 97,
    h: 50,
    story: story('/customers/figma/', '"With Hex’s Notebook Agent, I never have to build another chart again? What a dream come true."', 'Rie McGiwer', 'AI Insights Researcher and Molly Jane Nicholas, Senior Researcher'),
  },
  {
    src: '/assets/pages/product/bi/logo-modal-2c947462-134x50.svg',
    name: 'Modal',
    w: 134,
    h: 50,
    story: story(
      '/customers/modal/',
      '“Most data teams are stuck answering ad hoc questions. Hex flipped that for us. Now the business answers its own questions, and I focus on building systems that scale.” - Kenny Ning, Head of Data',
      'Kenny Ning and David Dorman',
      'Head of Data and VP of Marketing and Growth',
    ),
  },
  {
    src: '/assets/pages/product/bi/logo-clay-48b16af5-52x50.svg',
    name: 'Clay',
    w: 52,
    h: 50,
    story: story('/customers/clay/', '“Hex is where we go to understand the deep nuances of what\'s happening — and then act on them before anyone else sees it coming.”', 'Joshua Hanson', 'Data Team Manager'),
  },
  {
    src: '/assets/pages/product/_shared/logo-clickup-8ec37f23-119x50.svg',
    name: 'ClickUp',
    w: 119,
    h: 50,
    story: story('/customers/clickup/', '"Hex lets us go from an ad-hoc analysis to a published data app with just a few clicks."', 'Sai Srigiriaju', 'Head of Growth Strategy & Ops at ClickUp'),
  },
]

// BI feature rows: the homepage FeatureSection with a description, secondary CTA and balanced headings.
const featureCta = (cta) => ({ ...cta, variant: 'secondary' })
const BALANCE = '[text-wrap:balance]'

// §4.1 #2 "Time to look at BI, differently" + Threads feature [0,985,1440,1052]
export function LookingDifferently() {
  return (
    <BasicPageRow inner="full" reveal={false}>
      <div className="pc-bi-heading" data-section="BILookingAtItDifferently">
        <BiIllustration id="heading" className="pc-bi-heading__art" />
        <SectionHeading
          title="Time to look at BI,"
          italic="differently"
          maxWidth={800}
          description="Legacy BI promised self-serve but gave us endless dashboards. Hex is an AI analytics platform delivering answers to everyone."
        />
      </div>
      <div className="pc-bi-threads">
        <div className="pc-bi-threads__inner">
          <div className="pc-bi-threads__section">
            <div className="pc-bi-threads__info">
              <InfoText
                icon={<ConversationalAnalyticsMark />}
                title="Self-serve BI, but it actually works"
                description="Anyone can ask questions and explore data in plain language, without learning complex drag-and-drop UIs or waiting on the data team."
                cta={{ label: 'Learn about conversational analytics', href: '/product/threads/', variant: 'secondary' }}
                className="[word-break:break-word] [&_h3]:[text-wrap:balance]"
              />
              <DashedLineQuote
                logo={{ src: '/assets/pages/product/bi/langchain-logo.svg', alt: 'langchain-logo', maxWidth: 120 }}
                name="Emily Hawkins"
                title="Head of Analytics Engineering"
              >
                "Hex’s agent increased data access for everyone at LangChain, while giving us the confidence that users were getting accurate answers with trusted data."
              </DashedLineQuote>
            </div>
            <div className="pc-bi-threads__window ta-root">
              <AgentChatWindow title="Conversational self-serve" titleAlign="right" />
            </div>
          </div>
        </div>
      </div>
    </BasicPageRow>
  )
}

function DashboardMark() {
  return (
    <div className="abstract-mark" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="none" viewBox="0 0 60 60"><path stroke="currentColor" d="M1.5 18.5h47v35h-47z" data-color="primary" /><path stroke="currentColor" strokeDasharray="1 4" strokeLinecap="square" d="M11.5 6.5h47v35h-47z" data-color="secondary" /><path stroke="currentColor" d="M41.301 25.9 58.235 6.356" data-color="secondary" /><circle cx="38.707" cy="28.816" r="4.273" fill="currentColor" data-color="highlight" /></svg>
    </div>
  )
}

function DashedLines({ edges }) {
  return (
    <div aria-hidden="true" className="InteractiveFeatureWrapper-styles__DashedLines-sc-b5f0eae9-1 fbHGfk">
      {edges.map((e) => (
        <div key={e} {...{ [`data-${e}`]: 'true' }} className="InteractiveFeatureWrapper-styles__DashedLine-sc-b5f0eae9-2 cNvWGq" />
      ))}
    </div>
  )
}

// §4.1 #3c: REUSE the homepage TrustedAnswers windows with the BI info copy (BIWherePeopleWork overrides).
function WherePeopleWork() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <div className="ta-root pc-bi-where" ref={ref}>
      <div className="HomeTrustedAnswers-module__G5svba__content">
        <FeatureSection
          direction="row-reverse"
          icon={<AgentLogoStack revealed={inView} />}
          title="Bring BI to where people work"
          description="People already ask data questions in Slack, Claude, and ChatGPT. Ground those answers in the same trusted context and governance, without forcing everyone into a BI tool."
          cta={featureCta({ label: 'Explore Hex MCP', href: 'https://learn.hex.tech/docs/api-integrations/mcp-server', external: true })}
          headingClassName={BALANCE}
          quote={{
            children: '"Through the Slack integration, I can ask Hex questions from my phone at the playground. Questions that would have gone unasked now get immediate answers."',
            logo: { src: '/assets/logos/customers/neo-financial.svg', alt: 'NeoFinancial', maxWidth: 76 },
            name: 'David Adair',
            title: 'Director of Product',
          }}
        >
            <div
              role="figure"
              aria-label="Example: asking the Hex Agent questions through chat, Slack, and developer tools using fictional data"
              data-direction="row-reverse"
              className="HomeTrustedAnswers-module__G5svba__illustration"
            >
              <AgentChatWindow />
              <div className="HomeTrustedAnswers-module__G5svba__agentTools">
                <div className="HomeTrustedAnswers-module__G5svba__agentToolWindow">
                  <DashedLines edges={['left']} />
                  <McpWindow />
                </div>
                <div className="HomeTrustedAnswers-module__G5svba__agentToolWindow">
                  <DashedLines edges={['top', 'left']} />
                  <div className="HomeTrustedAnswers-module__G5svba__agentToolSlack">
                    <SlackWindow />
                  </div>
                </div>
                <div className="HomeTrustedAnswers-module__G5svba__agentToolWindow">
                  <DashedLines edges={['top', 'left']} />
                  <CliWindow />
                </div>
              </div>
            </div>
        </FeatureSection>
      </div>
    </div>
  )
}

const APPS = ['app-one', 'app-two', 'app-three', 'app-four']

// §4.1 #3 Three features [0,2037,1440,2543] (row with top border)
export function ThreeFeatures() {
  return (
    <BasicPageRow bordered inner="full">
      <div className="pc-bi-features">
        <FeatureSection
          direction="row-reverse"
          icon={<DashboardMark />}
          title="Pixel-perfect dashboards, from a prompt"
          description="Turn insights into polished, customizable dashboards in just seconds. No more tinkering around with preset charts and layout controls."
          cta={featureCta({ label: 'Explore AI-generated dashboards', href: '/product/data-apps/' })}
          headingClassName={BALANCE}
          quote={{
            children: '"Now our team members can build reports themselves, which is faster than waiting for someone else to do it. This definitely would not have been possible without Hex."',
            logo: { src: '/assets/pages/product/bi/mercor-logo.svg', alt: 'mercor-logo', maxWidth: 105 },
            name: 'Dhaval Patel',
            title: 'Head of Real Environments',
          }}
        >
          <div className="pc-bi-apps">
            <div className="pc-bi-apps__grid">
              {APPS.map((a) => (
                <img key={a} alt="Chart cell" loading="lazy" decoding="async" width="1200" height="872" src={`/assets/pages/product/_shared/${a}@2x.png`} />
              ))}
            </div>
          </div>
        </FeatureSection>

        <FeatureSection
          direction="row"
          icon={<ContextStudioMark />}
          title="Trust and govern every answer"
          description="Skip the months of upfront modeling. Ground agents in logic you already have, audit every answer, and automate improvements over time."
          cta={featureCta({ label: 'See data governance for AI', href: '/product/context-studio/' })}
          headingClassName={BALANCE}
          quote={{
            children: '"I love Hex\'s Context Studio. I didn’t know how many people were using agents or what questions they were asking, now I\'m able to proactively manage how people use our data."',
            logo: { src: '/assets/pages/product/bi/kong-logo.svg', alt: 'kong-logo', maxWidth: 105 },
            name: 'Snehal Karanjkar',
            title: 'Data Science Leader',
          }}
        >
          <div className="pc-bi-cs">
            <div className="pc-bi-cs__dashboard cs-scope">
              <DashboardWindow />
            </div>
            <div className="pc-bi-workbench" dangerouslySetInnerHTML={{ __html: workbenchHtml }} />
          </div>
        </FeatureSection>

        <WherePeopleWork />
      </div>
    </BasicPageRow>
  )
}

const UserIcon = () => (
  <svg data-icon="user" height="15" viewBox="0 0 15 15" width="15" aria-hidden="true"><path clipRule="evenodd" d="M8.9581 2.19055C8.50153 2.00125 7.99908 1.95159 7.51429 2.04786C7.0295 2.14412 6.58414 2.38198 6.23453 2.73135C5.88492 3.08073 5.64677 3.52593 5.55018 4.01065C5.4536 4.49538 5.50292 4.99786 5.69191 5.45456C5.8809 5.91125 6.20107 6.30165 6.61194 6.57638C7.0228 6.85111 7.50591 6.99784 8.00017 6.998C8.32834 6.99811 8.65332 6.93358 8.95656 6.80809C9.25979 6.68261 9.53534 6.49863 9.76747 6.26665C9.9996 6.03467 10.1838 5.75925 10.3095 5.4561C10.4351 5.15295 10.4999 4.82801 10.5 4.49984C10.5002 4.00558 10.3538 3.52237 10.0793 3.11132C9.80485 2.70027 9.41467 2.37984 8.9581 2.19055ZM7.31952 1.06701C7.99831 0.932223 8.70182 1.00175 9.34109 1.26679C9.98036 1.53184 10.5267 1.9805 10.911 2.55603C11.2952 3.13157 11.5002 3.80813 11.5 4.50017C11.4999 4.95966 11.4092 5.41463 11.2332 5.83909C11.0572 6.26355 10.7994 6.64919 10.4743 6.97399C10.1493 7.2988 9.76351 7.5564 9.33893 7.7321C8.91436 7.9078 8.45933 7.99815 7.99983 7.998C7.3078 7.99777 6.63137 7.79233 6.05609 7.40767C5.48081 7.023 5.03252 6.47638 4.7679 5.83693C4.50328 5.19749 4.43423 4.49393 4.56946 3.81524C4.7047 3.13654 5.03815 2.51319 5.52766 2.02401C6.01717 1.53483 6.64074 1.20179 7.31952 1.06701ZM5.5076 9.996C4.84456 9.996 4.20867 10.2594 3.73983 10.7282C3.27099 11.1971 3.0076 11.833 3.0076 12.496V13.992H13V12.496C13 11.833 12.7366 11.1971 12.2678 10.7282C11.7989 10.2594 11.163 9.996 10.5 9.996H5.5076ZM14 12.496C14 11.5677 13.6313 10.6775 12.9749 10.0211C12.3185 9.36475 11.4283 8.996 10.5 8.996H5.5076C4.57934 8.996 3.6891 9.36475 3.03273 10.0211C2.37635 10.6775 2.0076 11.5677 2.0076 12.496V14.992H13H14V14.493V12.496Z" fill="currentColor" fillRule="evenodd" /></svg>
)
const DataSourcesIcon = () => (
  <svg data-icon="data-sources" height="15" viewBox="0 0 15 15" width="15" aria-hidden="true"><path d="M11 2.5L5.5 9.5H9.5L9 12.5L14 6.5H10.5L11 2.5Z" fill="currentColor" opacity="0.2" /><path clipRule="evenodd" d="M2.14914 0.609383L2.19234 0.595681C3.37179 0.221591 4.07044 0 7 0C8.04628 0 9.01165 0.0642082 9.8677 0.181908L9.19429 1.10785C8.52823 1.03836 7.79287 1 7 1C4.21744 1 3.57924 1.20334 2.58084 1.52143L2.45136 1.56262C1.90997 1.73427 1.52165 1.92749 1.2791 2.1163C1.03316 2.30775 1 2.44121 1 2.5C1 2.55791 1.03273 2.69091 1.2788 2.88216C1.52136 3.07068 1.90973 3.26364 2.45118 3.43507L2.58077 3.47624C3.57918 3.7939 4.21751 3.997 7 3.997L7.09322 3.99682L6.36859 4.99318C3.96155 4.96242 3.28225 4.74726 2.19282 4.4022L2.14932 4.38843C1.71286 4.25024 1.32321 4.08702 1 3.89705V7.496C1 7.55479 1.03316 7.68825 1.2791 7.8797C1.52165 8.06851 1.90997 8.26173 2.45136 8.43338L2.58084 8.47457L2.58085 8.47457C2.93657 8.5879 3.24656 8.68667 3.6241 8.76686L2.98878 9.64043C2.72618 9.56964 2.47286 9.48929 2.19234 9.40032L2.14914 9.38662C1.71276 9.24826 1.32318 9.08485 1 8.89466V12.492C1 12.5507 1.03312 12.6841 1.27903 12.8755C1.52155 13.0642 1.90987 13.2573 2.45127 13.4289L2.58047 13.4699C3.47562 13.7549 4.08109 13.9477 6.20154 13.9846L6.10171 14.9829C3.90892 14.9399 3.24056 14.728 2.19209 14.3957L2.14923 14.3821C1.54888 14.1919 1.03707 13.9543 0.66491 13.6647C0.296134 13.3777 0 12.9853 0 12.492V2.5C0 2.00679 0.296094 1.61425 0.664835 1.3272C1.03698 1.03751 1.54878 0.79973 2.14914 0.609383ZM4 10L12 0L11 6H15L8 15L9 10H4ZM9.81954 7H12.9194L9.61759 11.3772L10.1805 9H6.08062L10.3824 3.62277L9.81954 7Z" fill="currentColor" fillRule="evenodd" /></svg>
)
const InteractiveIcon = () => (
  <svg data-icon="interactive" height="15" viewBox="0 0 15 15" width="15" aria-hidden="true"><path clipRule="evenodd" d="M7.5 1C6.2994 1 5.14971 1.47625 4.3034 2.32118C3.4574 3.16582 2.98377 4.30946 2.98377 5.5V9.5C2.98377 10.6905 3.4574 11.8342 4.3034 12.6788C5.14971 13.5238 6.2994 14 7.5 14C8.0943 14 8.68257 13.8831 9.23116 13.6563C9.77974 13.4294 10.2776 13.0971 10.6966 12.6788C11.1156 12.2605 11.4474 11.7644 11.6737 11.2191C11.8999 10.6738 12.0162 10.0897 12.0162 9.5V5.5C12.0162 4.30946 11.5426 3.16582 10.6966 2.32118C9.85029 1.47625 8.7006 1 7.5 1ZM3.61405 1.60775C4.64616 0.577319 6.04414 0 7.5 0C8.95586 0 10.3538 0.577319 11.3859 1.60775C12.4183 2.63848 13 4.03838 13 5.5V9.5C13 10.2235 12.8572 10.9398 12.5801 11.6077C12.303 12.2756 11.8971 12.8819 11.3859 13.3923C10.8748 13.9025 10.2685 14.3068 9.60188 14.5825C8.93525 14.8582 8.22106 15 7.5 15C6.04414 15 4.64616 14.4227 3.61405 13.3923C2.58165 12.3615 2 10.9616 2 9.5V5.5C2 4.03838 2.58165 2.63848 3.61405 1.60775ZM7.99189 4V7H7.00811V4H7.99189Z" fill="currentColor" fillRule="evenodd" /></svg>
)

const APPROACH = [
  {
    icon: <UserIcon />,
    title: 'Built for every data user',
    text: 'Business users can explore data and build dashboards without code, while technical users can drop into SQL or Python for deeper analysis.',
    cta: 'See user roles',
    href: 'https://learn.hex.tech/docs/collaborate/sharing-and-permissions/roles#workspace-roles-and-paid-seats',
  },
  {
    icon: <DataSourcesIcon />,
    title: 'Migrate without the rebuild',
    text: 'Agents automatically migrate Tableau and Looker dashboards into Hex, with inspectable SQL and logic behind every asset.',
    cta: 'Learn about migrations',
    href: 'https://learn.hex.tech/docs/migrate-to-hex',
  },
  {
    icon: <InteractiveIcon />,
    title: 'Point-and-click, when you need it',
    text: 'Explore, pivot, filter, and visualize data with familiar no-code workflows like drag-and-drop and spreadsheet-style analysis.',
    cta: 'Dive into no-code exploration',
    href: 'https://learn.hex.tech/docs/share-insights/explore#exploration-entry-points-and-data-sources',
  },
]

const SOLID_H2 = 'm-0 mx-auto max-w-[760px] text-center font-display text-heading-1 font-bold text-ink-loud [text-wrap:balance]'

// §4.1 #4 ApproachCards [0,4580,1440,698]
export function ApproachCards() {
  return (
    <BasicPageRow bordered>
      <section className="pc-bi-stack" data-section="BIApproach">
        <h2 className={SOLID_H2}>Rethink your BI approach with Hex</h2>
        <div className="pc-bi-grid">
          {APPROACH.map((c) => (
            <GlassCard key={c.title} className="justify-between gap-[32px] p-[32px]">
              <div className="flex flex-col gap-[16px]">
                <span className="flex h-[15px] w-[15px] text-fg-1200">{c.icon}</span>
                <h4 className="m-0 font-formula text-heading-4 font-semibold text-ink-loud">{c.title}</h4>
                <p className="m-0 text-body font-light text-ink">{c.text}</p>
              </div>
              <Button variant="primary" size="md" href={c.href} external target="_blank">
                {c.cta}
              </Button>
            </GlassCard>
          ))}
        </div>
      </section>
    </BasicPageRow>
  )
}

const RESOURCES = [
  {
    type: 'eBook',
    title: 'Should you replace your BI tool with an agent?',
    readTime: '6 min',
    href: '/resources/bi-buying-guide/',
    image: 'should-you-replace-your-bi-tool-with-an--d834e322-3446x2352.jpg',
  },
  {
    type: 'Blog post',
    title: "Your next BI tool shouldn't be a BI tool",
    readTime: '4 min',
    href: '/blog/next-bi-tool/',
    image: 'your-next-bi-tool-shouldn-t-be-a-bi-tool-76aeaf65-1680x1040.png',
  },
  {
    type: 'Blog post',
    title: "You don't need to migrate those 300 dashboards",
    readTime: '5 min',
    href: '/blog/dont-migrate-300-dashboards/',
    image: 'you-don-t-need-to-migrate-those-300-dash-c58b81b4-840x520.png',
  },
]

// §4.1 #5 BIResources [0,5278,1440,990]: ResourceCards + horizontal CompareVs
export function Resources() {
  return (
    <BasicPageRow>
      <section className="pc-bi-stack" data-section="BIResources">
        <h2 className={SOLID_H2}>Make the switch to BI for the AI era</h2>
        <div className="flex w-full flex-col gap-[25px]">
          <div className="pc-bi-grid">
            {RESOURCES.map((r) => (
              <ResourceCard
                key={r.title}
                href={r.href}
                type={r.type}
                title={r.title}
                tags={['Data leader']}
                readTime={r.readTime}
                image={{ src: `/assets/pages/product/bi/${r.image}`, alt: r.title }}
              />
            ))}
          </div>
          <CompareVs layout="horizontal" />
        </div>
      </section>
    </BasicPageRow>
  )
}
