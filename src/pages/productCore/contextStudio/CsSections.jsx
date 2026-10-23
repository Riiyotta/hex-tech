// /product/context-studio/ sections (dark): specs/product.md §4.3; reference/pages/product/dom/context-studio/*.
import { useCallback, useState } from 'react'
import { AnimatedCta, AnnouncementPill, BasicPageRow, PerlinNoise, VideoModal } from '../../../components/shared'
import { LayoutGrid } from '../../../components/shared/LayoutGrid.jsx'
import DashboardWindow from '../../../components/sections/ContextStudio/DashboardWindow.jsx'
import ImageInfoCard, { ImageInfoCardGrid } from '../shared/ImageInfoCard.jsx'
import platformHtml from './partials/platform.html?raw'
import bentoHtml from './partials/bento.html?raw'
import '../../../components/sections/ConversationalAnalytics/FeatureSection.css'
import '../../../components/sections/ContextStudio/ContextStudio.css'
import './platform.css'
import './bento.css'

const VIDEO_EMBED = 'https://www.youtube.com/embed/1pml_nlfw80?autoplay=1&enablejsapi=1'

// §4.3 #0 ContextStudioHero [0,0,1440,850]
export function CsHero() {
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])
  return (
    <LayoutGrid className="pc-cs-hero" data-section="ContextStudioHero">
      <div className="checkered-margin" data-side="left" style={{ gridRow: 1 }} aria-hidden="true" />
      <div className="pc-cs-hero__noise" aria-hidden="true" style={{ gridColumn: '1 / -1', gridRow: 1 }}>
        <PerlinNoise texture="jade" size={1024} opacity={0.4} duration="16s" />
      </div>
      <div className="relative z-[1] min-w-0" style={{ gridColumn: '2 / -2', gridRow: 1 }}>
        <div className="pc-cs-hero__layout">
          <div className="pc-cs-hero__content">
            <AnnouncementPill
              href="/blog/introducing-context-studio/"
              icon="/assets/svg/icons/nav/context-studio.svg"
              label="Context management"
              text="Read the announcement"
            />
            <div className="flex flex-col gap-[10px]">
              <h1 className="gradient-heading text-left font-display text-heading-1 font-bold [text-wrap:balance]">
                Accuracy that improves with every answer
              </h1>
              <p className="pc-cs-hero__lead m-0 font-light leading-[1.5] text-ink">
                Skip the months-long modeling project. Hex’s Context Studio activates the logic you already have and learns from every answer.
              </p>
            </div>
            <div className="flex h-min gap-[16px]">
              <AnimatedCta href="/request-a-demo/" variant="primary" color="default">
                Request a demo
              </AnimatedCta>
              <AnimatedCta href="https://learn.hex.tech/docs/administration/context-studio" variant="secondary" external>
                Learn more
              </AnimatedCta>
            </div>
          </div>
          <div className="pc-cs-hero__thumb-area">
            <button type="button" className="pc-cs-thumb" aria-label="Play the Context Studio video" onClick={() => setOpen(true)}>
              <div className="pc-cs-thumb__frame">
                <video className="pc-cs-thumb__video" src="/assets/pages/product/context-studio/thumbnail-9cb76238.mp4" autoPlay loop muted playsInline />
                <span className="pc-cs-thumb__glass">
                  <span className="pc-cs-thumb__disc">
                    <svg fill="none" height="17" viewBox="0 0 15 17" width="15" aria-hidden="true">
                      <path d="M12.7007 7.50366C13.5359 7.9859 13.5887 9.14654 12.8579 9.71362L12.7007 9.81909L2.84131 15.5115C1.95038 16.0254 0.837402 15.3819 0.837402 14.3533L0.837402 2.96948C0.837402 2.00499 1.81587 1.37891 2.67236 1.72827L2.84131 1.81128L12.7007 7.50366Z" stroke="currentColor" strokeWidth="1.32" />
                    </svg>
                  </span>
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="checkered-margin" data-side="right" style={{ gridRow: 1 }} aria-hidden="true" />
      {open && <VideoModal variant="fullscreen" src={VIDEO_EMBED} title="Context Studio video" onClose={close} />}
    </LayoutGrid>
  )
}

// §4.3 #1 PlatformOverview [0,850,1440,797]: live markup + CSS ported verbatim (workflow cards with hover noise and
// arrow, OnePlatform bracket, capability tiles with hover popovers: all CSS states).
export function PlatformOverview() {
  return <LayoutGrid className="pc-cs-platform" data-section="SectionPurposeBuilt" dangerouslySetInnerHTML={{ __html: platformHtml }} />
}

// SectionHeader (kedvpN): flex col / gap 10 / padding 32 / max 900 / centred: H2 heading-1 gradient + P 20/30 balance.
function SectionHeader({ id, title, text }) {
  return (
    <div className="mx-auto flex max-w-[900px] flex-col items-center gap-[10px] p-[32px] text-center stack:px-0">
      <h2 id={id} className="gradient-heading scroll-mt-[140px] font-display text-heading-1 font-bold">
        {title}
      </h2>
      <p className="m-0 text-lead-l font-light text-ink [text-wrap:balance]">{text}</p>
    </div>
  )
}

const img = (name, w, h, alt) => ({ src: `/assets/pages/product/context-studio/${name}@2x.png`, width: w, height: h, alt })

// §4.3 #2 Unified context [0,1647,1440,1095]
export function UnifiedContext() {
  return (
    <BasicPageRow bordered>
      <SectionHeader
        id="unified-context"
        title="Unified context"
        text="Hex turns definitions and logic into trusted business context for agents to reason from, without locking you in."
      />
      <ImageInfoCardGrid className="pc-cs-cards">
        <ImageInfoCard
          title="Activate existing logic"
          text="Markdown, code, table metadata. Hex ingests and understands it for trusted answers without exhaustive modeling."
          cta={{ label: 'Explore context management', href: 'https://learn.hex.tech/docs/agent-management/context-management', external: true }}
          image={img('illustration-guides', 700, 420, 'Activate existing logic')}
        />
        <ImageInfoCard
          title="Build from anywhere"
          text="Layer in new logic in Hex, dbt, or your warehouse. Hex keeps it synced and versioned, without locking you into one tool."
          cta={{ label: 'Explore semantic models', href: 'https://learn.hex.tech/docs/connect-to-data/semantic-models/intro-to-semantic-models', external: true }}
          image={img('illustration-workbench', 700, 420, 'Build from anywhere')}
        />
      </ImageInfoCardGrid>
    </BasicPageRow>
  )
}

const LibraryIcon = () => (
  <svg data-icon="library" height="15" viewBox="0 0 15 15" width="15" aria-hidden="true"><path d="M11.3584 2C11.4876 1.99993 11.5989 2.00024 11.6992 2.01367C12.3692 2.10366 12.8963 2.63081 12.9863 3.30078C12.9998 3.40113 13.0001 3.51235 13 3.6416V11.3584C13.0001 11.4878 12.9998 11.5998 12.9863 11.7002C12.8961 12.3699 12.369 12.8964 11.6992 12.9863C11.5989 12.9998 11.4876 13.0001 11.3584 13H6C6 13.2761 5.77614 13.5 5.5 13.5C5.22386 13.5 5 13.2761 5 13H2.5C2.22386 13 2 12.7761 2 12.5V2.5C2.00002 2.22388 2.22387 2 2.5 2H11.3584ZM3 12H5V3H3V12ZM6 12H11.3301C11.5039 12 11.5416 11.9984 11.5664 11.9951C11.7897 11.9651 11.9651 11.7897 11.9951 11.5664C11.9984 11.5416 12 11.5039 12 11.3301V3.66992C12 3.49604 11.9984 3.45837 11.9951 3.43359C11.9651 3.21027 11.7897 3.03488 11.5664 3.00488C11.5416 3.00157 11.5039 3 11.3301 3H6V12ZM9.5 5.5C9.77613 5.5 9.99998 5.72388 10 6C10 6.27614 9.77614 6.5 9.5 6.5H8.5C8.22386 6.5 8 6.27614 8 6C8.00002 5.72388 8.22387 5.5 8.5 5.5H9.5Z" fill="currentColor" /></svg>
)
const SuccessIcon = () => (
  <svg data-icon="success" height="15" viewBox="0 0 15 15" width="15" aria-hidden="true"><path d="M7.5 2C10.5376 2 13 4.46243 13 7.5C13 10.5376 10.5376 13 7.5 13C4.46243 13 2 10.5376 2 7.5C2 4.46243 4.46243 2 7.5 2ZM7.5 2.91699C4.9687 2.91699 2.91699 4.9687 2.91699 7.5C2.91699 10.0313 4.9687 12.083 7.5 12.083C10.0313 12.083 12.083 10.0313 12.083 7.5C12.083 4.9687 10.0313 2.91699 7.5 2.91699ZM9.20215 5.8418C9.35855 5.6428 9.64668 5.60827 9.8457 5.76465C10.0447 5.92104 10.0792 6.20917 9.92285 6.4082L7.40234 9.61621C7.32522 9.71437 7.21113 9.77674 7.08691 9.78906C6.96257 9.8013 6.83803 9.76295 6.74316 9.68164L5.13965 8.30664C4.94746 8.14191 4.92511 7.85235 5.08984 7.66016C5.25452 7.46816 5.5432 7.44589 5.73535 7.61035L6.97656 8.67383L9.20215 5.8418Z" fill="currentColor" /></svg>
)

function Callout({ icon, title, text, side }) {
  return (
    <div className="pc-cs-callout" data-side={side}>
      <span className="flex h-[15px] w-[15px] text-fg-1200">{icon}</span>
      <h4 className="m-0 font-formula text-heading-4 font-semibold text-ink-loud">{title}</h4>
      <p className="m-0 text-[14px] font-light leading-[1.571] text-ink">{text}</p>
    </div>
  )
}

// §4.3 #3 Observable everywhere [0,2742,1440,877]: REUSE DashboardWindow (dark-themed in context-studio.css).
export function ObservableEverywhere() {
  return (
    <BasicPageRow bordered>
      <SectionHeader
        id="observable-everywhere"
        title="Observable everywhere"
        text="Questions get asked everywhere: Slack, Claude, Cursor. Hex gives you visibility into every answer and every step the agent took."
      />
      <div className="pc-cs-observe">
        <div className="pc-cs-observe__callouts">
          <Callout
            side="left"
            icon={<LibraryIcon />}
            title="Trends surfaced automatically"
            text="Track agent adoption across all of Hex surfaces. See question domains that are growing, trending, or newly emerging with Topics."
          />
          <Callout
            side="right"
            icon={<SuccessIcon />}
            title="The agent suggests improvements"
            text="Warnings surface agent confusion, missing context, or user doubt. The Review Agent tells you exactly what to fix."
          />
        </div>
        <div className="pc-cs-observe__window cs-scope">
          <DashboardWindow />
          <div className="product-window__guides pc-cs-observe__guides" aria-hidden="true">
            {['top', 'bottom', 'left', 'right'].map((e) => (
              <div key={e} className="product-window__guide" data-edge={e} />
            ))}
          </div>
        </div>
      </div>
    </BasicPageRow>
  )
}

// §4.3 #4 Improves with use [0,3619,1440,1086]
export function ImprovesWithUse() {
  return (
    <BasicPageRow bordered>
      <SectionHeader
        id="improves-with-use"
        title="Improves with use"
        text="Hex learns from every question asked and every answer published, so you’re always ahead of drifting business logic and emerging domains."
      />
      <ImageInfoCardGrid className="pc-cs-cards" data-img="400">
        <ImageInfoCard
          title="Fixes find you"
          text="The Review Agent analyzes interactions for you to find context gaps and suggest fixes."
          cta={{ label: 'Learn more', href: 'https://learn.hex.tech/docs/agent-management/suggestions', external: true }}
          image={img('illustration-ui-suggestions', 400, 350, 'Fixes find you')}
        />
        <ImageInfoCard
          title="Every change, evaluated"
          text="Improve context with evidence, not instinct. Test changes with evals, ship what passes and catch what breaks."
          cta={{ label: 'Learn more', href: 'https://learn.hex.tech/docs/agent-management/evals', external: true }}
          image={img('illustration-ui-eval-detail', 400, 350, 'Every change, evaluated')}
        />
        <ImageInfoCard
          title="Your work is context"
          text="The logic and queries behind every published app are reusable context for future questions."
          cta={{ label: 'Learn more', href: '/blog/introducing-projects-as-context/' }}
          image={img('illustration-ui-work-is-context', 400, 350, 'Your work is context')}
        />
      </ImageInfoCardGrid>
    </BasicPageRow>
  )
}

// §4.3 #6 Build and manage context on your terms [0,4969,1440,1340]: N12 BentoCells (live markup + CSS hover states).
export function BentoSection() {
  return (
    <BasicPageRow bordered>
      <SectionHeader
        title="Build and manage context on your terms"
        text="Context curation in Hex is intentionally flexible, so it can adapt to the way your team already works."
      />
      <div className="pc-cs-bento w-full" dangerouslySetInnerHTML={{ __html: bentoHtml }} />
    </BasicPageRow>
  )
}

