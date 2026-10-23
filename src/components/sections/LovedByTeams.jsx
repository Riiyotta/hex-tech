// CLONE_SPEC §4.11: "Loved by the best data teams" customer stories tout (1344 tall @1440).
// Ported from reference/dom/p2-01-ToutWrapper__Wrapper.html: ToutWrapper (Reveal) → Inner (1240, padding 0 32)
// → title block (graph-paper side/top/bottom grids + anchor brackets) → 4 story cards → SocialTout
// (its own Reveal): shared G2Card + QuoteCard (Notion quote).
import { G2Card, QuoteCard, Reveal } from '../shared'
import './LovedByTeams/LovedByTeams.css'

const STORIES = [
  {
    href: '/customers/notion/',
    logo: '/assets/svg/logos/story-notion.svg',
    alt: 'Notion',
    title: 'One place for insights',
    description:
      'Notion made Hex the one place for everyone, from data science to CX and sales, to make decisions with data.',
  },
  {
    href: '/customers/mercor/',
    logo: '/assets/svg/logos/story-mercor.svg',
    alt: 'Mercor',
    title: 'Scaling self-serve AI analytics',
    description: 'Mercor democratizes analysis across their org with Notebook Agent.',
  },
  {
    href: '/customers/figma/',
    logo: '/assets/svg/logos/story-figma.svg',
    alt: 'Figma',
    title: 'Lowering barriers to insight',
    description: "Figma's team focuses on strategy over syntax using Hex's AI agents.",
  },
  {
    href: '/customers/neo-financial/',
    logo: '/assets/svg/logos/story-neo.svg',
    alt: 'Neo Financial',
    title: 'Breaking data silos',
    description: 'Neo drives insights right where they work using Threads and Slack integration.',
  },
]

// createIcon "arrow-right" (15×15, stroke currentColor), verbatim from the reference DOM
function ArrowRightIcon() {
  return (
    <span data-icon="true" className="flex h-[15px] w-[15px]">
      <svg data-icon="arrow-right" height="15" viewBox="0 0 15 15" width="15" aria-hidden="true">
        <g strokeWidth="1">
          <path d="M13.5 7.5H1M13.5 7.5L9.5 3.5L13.5 7.5ZM13.5 7.5L9.5 11.5L13.5 7.5Z" stroke="currentColor" />
        </g>
      </svg>
    </span>
  )
}

function AnchorLines({ corner, extend = false }) {
  return <div className="anchor-lines" data-corner={corner} data-extend={extend ? '' : undefined} aria-hidden="true" />
}

// CustomerStoriesTout__GridBkg: 64px graph paper (#E9E5E8 1px lines)
const GRID_BKG = 'pointer-events-none relative flex-none bg-graph-paper'
const TALL_GRID = `${GRID_BKG} h-[383px] w-[128px] tablet:w-[64px] stack:hidden`
const WIDE_GRID = `${GRID_BKG} h-[64px] w-full`

function TitleBlock() {
  return (
    <div className="relative flex border-x border-t border-grid-300">
      <AnchorLines corner="tl" />
      <AnchorLines corner="tr" />
      <AnchorLines corner="bl" extend />
      <AnchorLines corner="br" extend />
      <div className={`${TALL_GRID} bg-[position:-1px_-1px]`} aria-hidden="true" />
      <div className="flex flex-auto flex-col">
        <div className={`${WIDE_GRID} mb-auto bg-[position:center_-1px]`} aria-hidden="true" />
        <div className="flex flex-col items-center justify-center px-[30px] py-[20px]">
          <h2 className="stories-tout__heading gradient-heading max-w-[600px] text-center font-display text-heading-1 font-[700] text-ink-loud">
            <div>
              <span data-style="italic">Loved</span> by the
            </div>
            <div>best data teams</div>
          </h2>
          <p className="m-0 text-center text-lead-l font-light text-ink">
            Hex helps companies of all sizes do more with their data.
          </p>
        </div>
        <div className={`${WIDE_GRID} mt-auto bg-[position:center_0px]`} aria-hidden="true" />
      </div>
      <div className={`${TALL_GRID} bg-[position:0px_-1px]`} aria-hidden="true" />
    </div>
  )
}

function StoryCard({ href, logo, alt, title, description }) {
  return (
    <a href={href} className="story-card">
      <div className="story-card__top">
        <img src={logo} alt={alt} width="200" height="60" className="h-[60px] w-[200px]" />
        <h4 className="m-0 font-formula text-heading-4 font-[600] text-ink-loud">{title}</h4>
        <p className="m-0 text-body font-light text-ink">{description}</p>
      </div>
      <div className="story-card__bottom">
        <span>Read more</span>
        <ArrowRightIcon />
      </div>
    </a>
  )
}

function StoriesGrid() {
  return (
    <div className="relative flex border border-grid-300">
      <AnchorLines corner="bl" />
      <AnchorLines corner="br" />
      <div className="flex w-full laptop:grid laptop:grid-cols-2 phone:grid-cols-1">
        {STORIES.map((story) => (
          <StoryCard key={story.href} {...story} />
        ))}
      </div>
    </div>
  )
}

// SocialTout cards: shared G2Card + QuoteCard (extracted from this file; src/components/shared/)
const NOTION_QUOTE = {
  logo: { src: '/assets/logos/customers/notion.svg', alt: 'Notion' },
  quote:
    '"Our vision for Notion\'s data team is that anyone, regardless of technical proficiency, is comfortable using data to answer their own questions — and Hex enables that.”',
  author: {
    name: 'Abhishek Modi',
    title: 'Software Engineer at Notion',
    avatar: { src: '/assets/images/misc/abhishek-modi-headshot.jpg', alt: 'Abhishek Modi' },
  },
}

export default function LovedByTeams() {
  return (
    <Reveal
      as="section"
      data-section="LovedByTeams"
      className="relative flex w-full flex-col py-[clamp(70px,3.3203rem_+_3.75vw,100px)]"
    >
      <div className="relative z-[1] mx-auto flex w-full max-w-section flex-col px-[32px]">
        <TitleBlock />
        <StoriesGrid />
        {/* SocialTout: separate SimpleFadeIn (§6.2) */}
        <Reveal className="relative mx-auto flex w-full grow pt-[40px] phone:flex-col">
          <div className="mx-auto flex max-w-section flex-row items-center gap-[30px] stack:flex-col">
            <G2Card />
            <QuoteCard {...NOTION_QUOTE} />
          </div>
        </Reveal>
      </div>
    </Reveal>
  )
}
