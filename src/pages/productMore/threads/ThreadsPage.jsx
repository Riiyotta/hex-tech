// /product/threads/ (specs/product.md §4.4, dark, template T1). Rows: hero → FullWidthQuote (PandaDoc) →
// 1px bottom-border row → "Ask anything" → "Fully integrated into Hex" → "A modern approach to self-serve"
// (BentoCells) → quotes marquee → PerlinCallout → OutroTout → footer.
import { BasicPageRow, BentoCell, BentoGrid, CustomerQuotesMarquee, FooterRow, FullWidthQuote, InfoText, LayoutGrid, OutroTout, PerlinCallout, Reveal } from '../../../components/shared'
import ThreadsHero from './ThreadsHero.jsx'
import PlainRow from '../shared/PlainRow.jsx'
import SvgIcon from '../shared/SvgIcon.jsx'
import { ICONS } from '../icons.js'
import circleArt from '../assets/threads-docs-circle.svg'
import '../productMore.css'

const IMG = '/assets/pages/product/threads/'

// ThreadsH2: H2Wrapper (Reveal) with the solid-white heading-1 H2 and optional text-xl subheadline.
function ThreadsH2({ title, sub }) {
  return (
    <Reveal className="pm-th-h2wrap">
      <h2 className="pm-th-h2 font-display text-heading-1 font-bold text-ink-loud">{title}</h2>
      {sub && <p className="pm-th-sub pm-text-xl text-ink">{sub}</p>}
    </Reveal>
  )
}

function TwoUp({ variant, reverse, media, mediaFirst = true, title, description, cta }) {
  const mediaNode = (
    <div className="pm-twoup__media">
      <img src={media.src} alt={media.alt} width={media.w} height={media.h} loading="lazy" decoding="async" />
    </div>
  )
  const info = (
    <InfoText
      size="h2"
      className="pm-twoup-info [word-break:break-word]"
      title={title}
      description={description}
      cta={{ ...cta, variant: 'secondary', size: 'md' }}
    />
  )
  return (
    <Reveal className="pm-twoup" data-variant={variant} data-reverse={reverse ? '' : undefined}>
      {mediaFirst ? (
        <>
          {mediaNode}
          {info}
        </>
      ) : (
        <>
          {info}
          {mediaNode}
        </>
      )}
    </Reveal>
  )
}

const BENTO = [
  { title: 'Threads, everywhere', text: 'Start a thread from Slack by mentioning @Hex, or use our MCP server for answers in third-party tools.', href: 'https://learn.hex.tech/docs/share-insights/hex-agent-in-slack', img: 'threads-everywhere.png' },
  { title: 'Surface existing answers', text: 'When a question has been answered before, Threads redirects users to existing apps.', href: 'https://learn.hex.tech/docs/share-insights/apps/app-builder', img: 'threads-self-serve-surface-existing-answers.png' },
  { title: 'Visual exploration built in', text: 'Tables and charts created in Threads can be instantly opened in Explore for no-code visualization.', href: 'https://learn.hex.tech/docs/share-insights/explore', img: 'threads-self-serve-visual-exploration.png' },
  { title: 'Collaboration-first', text: 'Threads users can share threads with the data team for help or inspection.', href: '/capability/hex-for-teams/', img: 'threads-self-serve-collaboration-first.png' },
]

const QUOTES = [
  {
    logo: { src: '/assets/logos/customers/stubhub.svg', alt: 'StubHub' },
    quote: '"Threads taps into exactly our imagined value-add of agentic AI for self-serve analytics. This will allow us to accelerate many of our core analytics roadmap items, and we\'re already seeing immediate success across the company.”',
    author: { name: 'Connor S.', title: 'Director of Analytics Engineering at StubHub' },
  },
  {
    logo: { src: '/assets/logos/customers/brex.svg', alt: 'Brex' },
    quote: '"We spend a lot of time investigating edge cases in metrics. Just today, Threads saved me having to dig into the cause of a metric issue and saved me 20 minutes, it makes us so much faster at this type of work.”',
    author: { name: 'Sumeet M.', title: 'Head of Data at Brex' },
  },
  {
    logo: { src: '/assets/pages/product/_shared/customer-logo-728e1e88-120x50.svg', alt: 'customer logo' },
    quote: '"We\'re really excited by how stakeholders have been using Threads for self-serve analytics. The text-to-answer results leverage our semantic layer, and we can share every step of the reasoning with the relevant audience.”',
    author: { name: 'Hannah B.', title: 'Data Product Manager at PandaDoc' },
  },
  {
    logo: { src: '/assets/logos/customers/neo-financial.svg', alt: 'Neo Financial' },
    quote: '"I haven’t slept much the past two days as I’ve been firing off thread after thread after thread with the Hex Agent in Slack.”',
    author: { name: 'David A.', title: 'Group Product Manager at Neo Financial' },
  },
  {
    logo: { src: '/assets/pages/product/_shared/customer-logo-fc46557c-170x40.svg', alt: 'customer logo' },
    quote: '"Hex is bridging the gap between self-service data access and self-service data analytics. Threads allows my users to discover data, create charts, and even perform analysis — all via natural language.”',
    author: { name: 'Michael G.', title: 'Head of Data & Analytics at Customer.io' },
  },
]

export default function ThreadsPage() {
  return (
    <div className="pm-root">
      <ThreadsHero />
      <FullWidthQuote
        logo={{ src: IMG + 'pandadoc-logo.png', alt: 'Hannah B. quote' }}
        name="Hannah B."
        title="Data Product Manager, PandaDoc"
        quote={
          <>
            “We're really excited by how stakeholders have been using Threads <strong>for self-serve analytics</strong>. The text-to-answer results leverage our semantic layer, and we can <strong>share every step of the reasoning</strong> with the relevant audience.”
          </>
        }
      />
      <LayoutGrid className="border-t border-grid-500" aria-hidden="true" />

      <BasicPageRow>
        <ThreadsH2 title="Ask anything" sub="Type a question, get answers you can trust." />
        <TwoUp
          variant="deep"
          reverse
          media={{ src: IMG + 'threads-overview-illustration.png', alt: 'threads overview illustration', w: 700, h: 560 }}
          title="Deep reasoning, not one-shot answers"
          description="Threads can explore multiple lines of inquiry, fix its own errors, and go beyond surface-level insights."
          cta={{ label: 'Learn more about agentic analytics', href: '/capability/ai/' }}
        />
      </BasicPageRow>

      <BasicPageRow bordered>
        <ThreadsH2 title="Fully integrated into Hex" sub="Threads uses your existing data connections, projects, and semantic models for accurate context." />
        <div className="pm-th-fully">
          <TwoUp
            variant="audit"
            mediaFirst={false}
            media={{ src: IMG + 'threads-audit-ready-illustration.png', alt: 'threads audit-ready illustration', w: 540, h: 429 }}
            title={
              <>
                Get under
                <br />
                the hood
              </>
            }
            description="Every Thread is backed by a Hex project that the data team can open as a Notebook for deeper analysis."
            cta={{ label: 'Learn more about notebooks', href: '/product/notebooks/' }}
          />
          <TwoUp
            variant="semantic"
            media={{ src: IMG + 'threads-semantic-models-only-illustration.png', alt: 'threads insights you can trust illustration', w: 490, h: 351 }}
            title="Keep the data team in control"
            description="Focus Threads just on endorsed, modeled data for trusted, accurate answers."
            cta={{ label: 'Learn more about trusted data', href: '/product/context-studio/' }}
          />
        </div>
      </BasicPageRow>

      <BasicPageRow bordered>
        <ThreadsH2 title="A modern approach to self-serve" />
        <BentoGrid>
          {BENTO.map((c) => (
            <BentoCell
              key={c.title}
              title={c.title}
              description={c.text}
              href={c.href}
              image={{ src: IMG + c.img, alt: c.title }}
              indicatorIcon={<SvgIcon svg={ICONS.chevronSmall} />}
            />
          ))}
        </BentoGrid>
      </BasicPageRow>

      <BasicPageRow inner="full">
        <Reveal className="w-full">
          <CustomerQuotesMarquee quotes={QUOTES} />
        </Reveal>
      </BasicPageRow>

      <PerlinCallout
        icon={<SvgIcon svg={ICONS.threads16} />}
        eyebrow="THREADS"
        title={
          <>
            Enable natural language questions <br className="pm-desktop-break" />
            and trusted, <span style={{ whiteSpace: 'nowrap' }}>AI-powered</span> answers
            <br className="pm-desktop-break" /> from your data.
          </>
        }
        cta={{ label: 'Learn more', href: 'https://learn.hex.tech/docs/explore-data/threads', external: true }}
        focal={<img src={circleArt} alt="" width="777" height="473" />}
      />

      <PlainRow>
        <OutroTout
          title="Questions? Talk to us"
          description="See a demo, or learn more about how we can help."
          actions={[{ label: 'Contact Sales', href: '/request-a-demo/' }]}
        />
      </PlainRow>
      <FooterRow />
    </div>
  )
}
