// Customer story template (company §4.7, T7) for /customers/:slug (chime, figma, langchain, mercor, neo-financial,
// notion, ramp, stubhub). Real title, dek, logo, metadata, detail cards, section headings and pull quotes (§7.8);
// body prose is neutral placeholder text sized from the live element/line structure (data/storyBodies.js).
// Other slugs render PagePending.
import { useParams } from 'react-router-dom'
import { BasicPageRow, Button, CartesianGrid, CustomerStoryCard, FooterRow, GlassCard, MetaRows } from '../../components/shared'
import PagePending from '../PagePending.jsx'
import { asset } from './common.jsx'
import RichText, { RtImage, placeholderText as ph } from './RichText.jsx'
import stories from './data/stories.js'
import bodies from './data/storyBodies.js'
import customers from './data/customers.js'

const FIGURES = {
  chime: { src: '/assets/pages/company/customer-story/three-levels-of-questions-for-chime-s-eval-set-30afce05.jpg', width: 1680, height: 990, caption: "Three levels of questions for Chime's eval set" },
  figma: { src: '/assets/pages/company/customer-story/img-6ebe3f58.png', width: 2764, height: 1536 },
}
const LOGO_RATIO = { w: 175, h: 50 }
// Header video variant (not in the spec; measured in the 1440 trees, embed URLs read from the live pages): the
// bottom-left cell spans the grid, dek + stacked metadata sit left (max 360) of a 16:9 glass video card.
const HEADER_VIDEOS = {
  chime: { src: 'https://www.youtube.com/embed/B5N7c6wwU5g?si=t_PcjFki7sRxIG5B&enablejsapi=1', title: 'Embedded media' },
  figma: { src: 'https://www.youtube.com/embed/_aoIu3TU4eY?si=wEwmrIMF6BTkQfGp&enablejsapi=1', title: 'Figma - Customer Audiogram' },
  langchain: { src: 'https://www.youtube.com/embed/-kok-Msj8cw?si=8YHVtc_hI7qSnKwk&enablejsapi=1', title: 'How LangChain Scaled Data Access for Their Company with Hex' },
  'neo-financial': { src: 'https://www.youtube.com/embed/76vf3CjIXxM?si=YTGT798tnRGr6BhX&enablejsapi=1', title: 'Neo Financial - Customer audiogram' },
}
const CPL = 84 // placeholder characters per 758px line

const metaRows = (meta) =>
  meta.map((m) => {
    const i = m.indexOf(' / ')
    return { label: m.slice(0, i + 2), value: m.slice(i + 3) }
  })

function StoryHeader({ story, slug }) {
  const video = HEADER_VIDEOS[slug]
  const meta = story.meta.map(([label, value]) => ({ label, value }))
  const dek = <p className="m-0 text-lead-l font-light text-ink">{story.dek.replace(/ Stage \/ \w+$/, '')}</p>
  const [w, h] = (story.logo.match(/-(\d+)x(\d+)\.svg/) ?? [0, LOGO_RATIO.w, LOGO_RATIO.h]).slice(1).map(Number)
  return (
    <div className="cc-story-header" data-section="StoryHeader">
      <div className="cc-story-header__inner">
        <div className="cc-story-header__top">
          <div className="cc-story-header__tl">
            <img src={asset(story.logoFile)} alt={story.title.split(' ')[0]} width={Math.round((w / h) * 90)} height={90} className="cc-story-header__logo" />
          </div>
          <div className="cc-story-header__tr bg-hatch" aria-hidden="true" />
          <div className="flex flex-col" style={video ? { gridColumn: '1 / -1' } : undefined}>
            <div className="cc-story-header__cell">
              <h1 className="m-0 font-display text-heading-1 font-bold text-ink-loud">{story.title}</h1>
            </div>
            <div className="cc-story-header__cell cc-story-header__summary">
              {video ? (
                <>
                  <div className="cc-story-header__summary-left">
                    {dek}
                    <MetaRows size={12} rows={meta} rowGap="10px" className="cc-story-meta-stack" />
                  </div>
                  <GlassCard className="cc-story-header__video">
                    <iframe src={video.src} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </GlassCard>
                </>
              ) : (
                dek
              )}
            </div>
          </div>
          {!video && <div className="cc-story-header__br" aria-hidden="true" />}
        </div>
        {!video && <MetaRows size={12} layout="inline-stack" rows={meta} className="cc-story-meta" />}
      </div>
    </div>
  )
}

function StoryDetails({ story }) {
  return (
    <div className="relative w-full" data-section="StoryDetails">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <CartesianGrid />
      </div>
      <div className="cc-story-details">
        {story.cards.map((c) => (
          <GlassCard key={c.h} className="cc-story-card">
            <h4 className="m-0 font-formula text-heading-4 font-semibold text-ink-loud">{c.h}</h4>
            {c.p && <p className="mb-[22px] mt-[20px] text-small font-light text-ink">{c.p}</p>}
            {c.li.length > 0 && (
              <ul className="cc-story-card__list">
                {c.li.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            )}
            {c.href && (
              <Button variant="secondary" size="md" corners href={c.href} external target="_blank">
                View website
              </Button>
            )}
          </GlassCard>
        ))}
      </div>
    </div>
  )
}

function StoryBody({ slug }) {
  let seed = 0
  const fig = FIGURES[slug]
  return (
    <div className="cc-story-body" data-section="StoryBody">
      <div className="cc-story-body__hatch bg-hatch" aria-hidden="true" />
      <RichText variant="story" className="cc-story-body__text">
        {bodies[slug].map((b, i) => {
          seed++
          if (b.t === 'h3')
            return (
              <h3 key={i}>
                <strong>{b.text}</strong>
              </h3>
            )
          if (b.t === 'figure') return fig ? <RtImage key={i} {...fig} /> : null
          if (b.t === 'ul' || b.t === 'ol') {
            const L = b.t
            return (
              <L key={i}>
                {b.items.map((n, j) => (
                  <li key={j}>{ph(n, seed + j, CPL, true)}</li>
                ))}
              </L>
            )
          }
          if (b.quote) return <p key={i}>{b.quote}</p>
          if (b.bold)
            return (
              <p key={i}>
                <strong>Placeholder subheading</strong>
              </p>
            )
          return <p key={i}>{ph(b.lines, seed, CPL, true)}</p>
        })}
      </RichText>
      <div className="cc-story-body__hatch bg-hatch" aria-hidden="true" />
    </div>
  )
}

function RelatedStories({ story }) {
  const cards = story.related.map((href) => customers.grid.find((c) => c.href === href)).filter(Boolean)
  return (
    <div className="cc-related" data-section="RelatedStories">
      <h2 className="m-0 font-formula text-heading-2 font-extrabold text-ink-loud">Related stories</h2>
      <div className="cc-related__grid">
        {cards.map((c) => (
          <CustomerStoryCard key={c.href} href={c.href} logo={{ src: asset(c.logoFile), alt: c.logo }} title={c.title} meta={metaRows(c.meta)} />
        ))}
      </div>
    </div>
  )
}

export default function CustomerStoryPage() {
  const { slug } = useParams()
  const story = stories[slug]
  if (!story) return <PagePending />
  return (
    <>
      <BasicPageRow inner="full" reveal={false}>
        <StoryHeader story={story} slug={slug} />
      </BasicPageRow>
      <BasicPageRow inner="full">
        <StoryDetails story={story} />
      </BasicPageRow>
      <BasicPageRow inner="full">
        <StoryBody slug={slug} />
      </BasicPageRow>
      <BasicPageRow bordered inner="full">
        <RelatedStories story={story} />
      </BasicPageRow>
      <FooterRow variant="checkered" />
    </>
  )
}
