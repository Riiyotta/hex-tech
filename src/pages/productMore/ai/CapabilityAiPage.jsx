// /capability/ai/ (specs/product.md §4.5, dark, T1). Rows: PromptHero → WorkflowSplit → quotes marquee
// (headshots) → DemoAccordion "BUILD & ANALYZE" → PerlinCallout (Slackbot) → DemoAccordion "SELF-SERVE &
// EXPLORE" → SecurityTout → OutroTout → FAQ ("FAQs") → footer. Sections 2–7 sit directly in grid-column
// 2 / -2 (plain margins), as measured.
import { BasicPageRow, Button, CustomerQuotesMarquee, FooterRow, GlassCard, OutroTout, PerlinCallout } from '../../../components/shared'
import Faq from '../../../components/sections/Faq.jsx'
import faqData from '../../../../specs/product-faq.json'
import PlainRow from '../shared/PlainRow.jsx'
import SvgIcon from '../shared/SvgIcon.jsx'
import { ICONS } from '../icons.js'
import PromptHero from './PromptHero.jsx'
import Workflows from './Workflows.jsx'
import DemoAccordion from './DemoAccordion.jsx'
import '../productMore.css'

const AI = '/assets/pages/product/capability-ai/'
const VID = (f) => AI + f

const QUOTES = [
  { logo: { src: '/assets/logos/customers/lovable.svg', alt: 'Lovable' }, quote: '"Hex’s notebook agent just works. I describe what I want and get working SQL back, without having to juggle between tools. It’s made us 10x faster at turning questions into insights.”', author: { name: 'Kristian K.', title: 'Product at Lovable', avatar: { src: AI + 'kristian-k-lovable-headshot.png', alt: 'Kristian K.' } } },
  { logo: { src: '/assets/logos/customers/ramp.svg', alt: 'Ramp' }, quote: '"The Hex agent really sped up exploratory analysis for me, especially when juggling multiple datasets. I love being able to make edits across the notebook without bouncing between tools.”', author: { name: 'Ian M.', title: 'Head of Analytics Engineering & Data Science at Ramp', avatar: { src: AI + 'ian-m-ramp-headshot.png', alt: 'Ian M.' } } },
  { logo: { src: '/assets/pages/product/_shared/product-hunt-0334d358-126x50.svg', alt: 'Product Hunt' }, quote: '"The Notebook Agent feels like the future. As a former data scientist, it feels like a junior version of myself, requiring a little guidance, but an immediate accelerant to my data work.”', author: { name: 'Rajiv A.', title: 'CEO at Product Hunt', avatar: { src: AI + 'rajiv-a-product-hunt-headshot.png', alt: 'Rajiv A.' } } },
  { logo: { src: '/assets/logos/customers/notion.svg', alt: 'Notion' }, quote: '"It\'s a time saver not having to write perfect syntax all the time, ‘how do I get all the unique rows versus if it\'s a single column’ is hard to remember.”', author: { name: 'Akshay B.', title: 'Threat Intel Lead at Notion', avatar: { src: AI + 'akshay-bhat-headshot.jpeg', alt: 'Akshay B.' } } },
  { logo: { src: '/assets/logos/customers/algolia.svg', alt: 'Algolia' }, quote: '"AI can do almost everything for you in Hex. I use it to scaffold entire apps and help me debug SQL queries. It makes me 10x faster.”', author: { name: 'Tom C.', title: 'Principal Engineer at Algolia', avatar: { src: AI + 'tom-clark-headshot.png', alt: 'Tom C.' } } },
]

const BUILD = [
  { title: 'Agentic workflows for data people', text: 'Start with any question, and get to a first draft in minutes. Agents in Hex abstract away the most tedious parts of data work.', cta: { label: 'Discover notebooks', href: '/product/notebooks/' }, video: VID('1-agentic-workflows-for-data-people.mp4') },
  { title: 'Share your answers in data apps', text: 'Publish your analysis as a data app that anyone can explore. End-users can chat with your app to ask their own follow-up questions', video: VID('2-share-your-answers-in-data-apps.mp4') },
  { title: 'The Hex Agent understands data work', text: 'The Hex agent is a pair programmer that can write and edit code, understands the upstream & downstream dependencies in your flow, and can debug your work.', video: VID('3-hex-agent-understands-data-work.mp4') },
]
const SELF_SERVE = [
  { title: 'Quick questions, deep answers', text: 'Ask questions in natural language and get thoughtful, in-depth answers you can trust — grounded in context from your data, the web, and the tools your team works in every day.', cta: { label: 'Discover Threads', href: '/product/threads/' }, video: VID('SelfServeQuickQuestions.mp4') },
  { title: 'Trust built in', text: 'Threads can leverage this context in your workspace to generate more accurate, reliable answers. The data team can create semantic models, endorse trusted data, and write AI guides to add a layer of governance.', cta: { label: 'Curate context for agentic analytics', href: '/blog/introducing-semantic-model-sync/' }, video: VID('SelfServeTrustBuiltIn.mp4') },
  { title: 'Pop open the hood', text: 'Every conversation in Threads becomes a Hex project that the data team can open as a notebook for help, inspection, or deeper analysis. Dig into the results with full transparency into the agent’s reasoning.', cta: { label: 'Deep-dive analysis in notebooks', href: '/product/notebooks/' }, video: VID('SelfServePopOpenTheHood.mp4') },
  { title: 'Chat with a dashboard', text: 'Hex’s data apps are great conversation starters, but it doesn’t end there. Type a follow-up question and get an answer based on the context in your app.', cta: { label: 'Learn more', href: 'https://learn.hex.tech/docs/explore-data/chat-with-app', external: true }, video: VID('SelfServeChatWithDashboard.mp4') },
]

const SECURITY = [
  { eyebrow: 'Security', title: 'Keeping your IP your IP', text: 'All metadata is stored in a secure database running inside Hex’s architecture. Hex’s model providers do not train on customer data. Hex’s use of AI session data is governed by your applicable Terms of Service.', cta: { label: 'Learn more', href: 'https://learn.hex.tech/docs/trust/data-privacy-and-usage-faq', external: true }, img: 'illustration-security@2x.png' },
  { eyebrow: 'Governance', title: 'Enriched with your organization’s context', text: 'AI in Hex can leverage context from semantic models, database metadata, external repositories, even existing dashboards. ', cta: { label: 'Explore Context Studio', href: '/product/context-studio/' }, img: 'illustration-context-studio@2x.png' },
  { eyebrow: 'CLI', title: 'Bring your own agent', text: 'Already analyzing data with Cursor or Claude Code? Integrate with the Hex CLI to publish your findings.', cta: { label: 'Check out the CLI', href: '/product/cli/' }, img: 'illustration-cli-suggestions@2x.png' },
]

function SecurityTout() {
  return (
    <div className="pm-sec" data-section="SecurityTout">
      <div className="pm-sec__inner">
        <div className="pm-sec__top">
          <h2 className="m-0 font-display text-heading-1 font-bold text-ink-loud">
            Accuracy <span aria-label="shaking hands" role="img">🤝</span> Privacy
          </h2>
          <p className="pm-text-xl text-ink">Combining cutting-edge approaches to AI, with our industry-leading commitment to security and privacy.</p>
        </div>
        <div className="pm-sec__content">
          <div className="pm-card-grid">
            {SECURITY.map((c) => (
              <GlassCard key={c.title} className="pm-img-card">
                <div className="pm-img-card__text">
                  <h6 className="m-0 font-plex-mono text-heading-6 font-bold uppercase text-ink-muted [text-wrap:balance]">{c.eyebrow}</h6>
                  <h3 className="m-0 font-formula text-heading-3 font-[800] text-ink-loud [text-wrap:balance]">{c.title}</h3>
                  <p className="text-body font-light text-ink">{c.text}</p>
                  <Button variant="secondary" size="md" href={c.cta.href} external={c.cta.external}>
                    {c.cta.label}
                  </Button>
                </div>
                <div className="pm-img-card__img">
                  <img src={AI + c.img} alt={c.title} width="400" height="350" loading="lazy" decoding="async" />
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CapabilityAiPage() {
  const faq = faqData['capability-ai'][0]
  return (
    <div className="pm-root">
      <PromptHero />
      <Workflows />
      <PlainRow>
        <CustomerQuotesMarquee quotes={QUOTES} />
      </PlainRow>
      <PlainRow>
        <DemoAccordion
          noTopPadding
          eyebrow="BUILD & ANALYZE"
          title="AI, meet the world’s best notebook"
          text="Powered by leading LLMs, Hex understands your data and your intent — speeding up analyses with a magical assist right where you’re already working."
          demo={{ time: '2 min', src: 'https://www.youtube.com/embed/utOLApsGvrU?autoplay=1&rel=0&enablejsapi=1' }}
          color="#5CB198"
          glow="rgba(92,177,152,0.24)"
          options={BUILD}
        />
      </PlainRow>
      <PerlinCallout
        variant="slackbot"
        icon={<SvgIcon svg={ICONS.slackEyebrow} />}
        eyebrow="THREADS"
        title="Insight right where the conversation is happening"
        description="Kick off or schedule a Thread wherever your team is asking data questions — Slack, Claude, Cursor, or Codex — and the Hex Agent brings the full context of your stack with it. Connect Hex to the tools your team works in so every answer reflects not just what the data shows, but what your team actually knows."
        cta={{ label: 'Learn more', href: 'https://learn.hex.tech/docs/share-insights/hex-agent-in-slack', external: true }}
        image={<img src={AI + 'illustration-slackbot-mcp.png'} alt="Slackbot" width="1396" height="878" loading="lazy" decoding="async" />}
      />
      <PlainRow>
        <DemoAccordion
          eyebrow="SELF-SERVE & EXPLORE"
          title="Conversational analytics for everyone"
          text="Hex is your organization’s first line of defense for quick questions, freeing up your data team to focus on what matters most."
          demo={{ time: '1 min', src: 'https://www.youtube.com/embed/Pwxsa2atlB8?autoplay=1&rel=0&enablejsapi=1' }}
          color="#A477B2"
          glow="rgba(164,119,178,0.24)"
          options={SELF_SERVE}
        />
      </PlainRow>
      <PlainRow>
        <SecurityTout />
      </PlainRow>
      <PlainRow>
        <OutroTout
          title="Ready to put AI to work on your data?"
          description="Hex is the AI analytics platform where your notebooks, agents, and self-serve all live together — and actually talk to each other."
          actions={[{ label: 'Contact Sales', href: '/request-a-demo/' }]}
        />
      </PlainRow>
      <BasicPageRow bordered>
        <Faq title={faq.heading} items={faq.items} answerStyle="page" tron={false} />
      </BasicPageRow>
      <FooterRow />
    </div>
  )
}
