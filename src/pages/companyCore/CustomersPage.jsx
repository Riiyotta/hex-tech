// /customers/ (company §4.6, T6): hero + featured fan · quotes marquee · filter/sort nav + 39 story cards · logo wall.
// Filter (stage) and sort run client-side over the captured data (§7.7). The sort dropdown options were not captured
// (spec §9.3): "Recently added" (data order) and "Alphabetical" are provided.
import { useEffect, useMemo, useRef, useState } from 'react'
import { BasicPageRow, Button, CustomerStoryCard, FooterRow, GlassCard, LOGO_GRAYSCALE_CLASS, MaskIcon } from '../../components/shared'
import { GradientHeading, ICON, asset } from './common.jsx'
import data from './data/customers.js'

const C = '/assets/pages/company/customers/'
const FAN_OFFSETS = [-80, -35, 0, -35, -80]
const FILTERS = [
  { label: 'All stories', stage: null },
  { label: 'Startup stories', stage: 'Startup', icon: `${C}svg/Button-Icon-8be78441.svg` },
  { label: 'Growth stories', stage: 'Growth', icon: `${C}svg/Button-Icon-4ebaec52.svg` },
  { label: 'Enterprise stories', stage: 'Enterprise', icon: `${C}svg/Button-Icon-2dd2d13c.svg` },
]
const SORTS = ['Recently added', 'Alphabetical']

const metaRows = (meta) =>
  meta.map((m) => {
    const i = m.indexOf(' / ')
    return { label: m.slice(0, i + 2), value: m.slice(i + 3) }
  })
const stageOf = (card) => metaRows(card.meta).find((r) => r.label === 'Stage /')?.value

function Hero() {
  return (
    <div className="cc-cust-hero" data-section="CustomersHero">
      <img src={`${C}svg/CustomersIndexContent-Header-e584dd86.svg`} alt="" width={510} height={466} className="cc-cust-hero__heart" aria-hidden="true" />
      <GradientHeading as="h1" size="hero" italic={data.hero.italic} className="cc-cust-hero__h1">
        {data.hero.title}
      </GradientHeading>
      <p className="cc-cust-hero__copy">
        Over <strong className="font-medium">2,000 organizations</strong> trust Hex to bring the magic of AI to data. Read their stories to learn how teams like yours are scaling insight and impact with AI analytics.
      </p>
    </div>
  )
}

function FeaturedFan() {
  return (
    <div className="cc-fan" data-section="FeaturedStoriesFan">
      <div className="cc-fan__grid">
        {data.featured.map((f, i) => (
          <div key={f.href} className="cc-fan__slot" data-outer={i === 0 || i === 4 ? '' : undefined} style={{ '--story-offset': `${FAN_OFFSETS[i]}px` }}>
            <div className="cc-fan__card-wrap">
              <div className="cc-fan__dashed" aria-hidden="true">
                <span data-top="" />
                <span data-bottom="" />
                <span data-left="" />
                <span data-right="" />
              </div>
              <a href={f.href} className="cc-fan__link" aria-label={f.srTitle}>
                <GlassCard interactive className="cc-fan__card">
                  <div className="cc-fan__media">
                    <img src={asset(f.photo)} alt="" loading="lazy" />
                  </div>
                  <div className="cc-fan__info">
                    <img src={asset(f.logo)} alt={f.href.split('/')[2]} className="cc-fan__logo" />
                    <div className="cc-fan__label">FEATURED</div>
                    <p className="cc-fan__title">{f.srTitle}</p>
                  </div>
                  <div className="cc-fan__read">
                    <p className="m-0 text-[14px] font-light leading-[1.571] text-white">Read story</p>
                    <MaskIcon src={ICON.arrowRight} size={15} className="text-[#E3B2B3]" />
                  </div>
                </GlassCard>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function UserQuoteCard({ q }) {
  const stat = !!q.stat
  return (
    <GlassCard interactive className="cc-uq" data-stat={stat ? '' : undefined}>
      <div className="flex flex-auto flex-col gap-[20px]">
        <div className="flex flex-auto items-stretch gap-[12px]">
          <div className="cc-uq__line">
            <MaskIcon src={ICON.quote} size={15} />
          </div>
          <div className="cc-uq__text">
            {stat ? (
              q.statFirst ? (
                <>
                  <h4>{q.stat}</h4>
                  <p>{q.lead}</p>
                </>
              ) : (
                <>
                  <p>{q.lead}</p>
                  <h4>{q.stat}</h4>
                </>
              )
            ) : (
              <p>{q.lead}</p>
            )}
          </div>
        </div>
        <div className="cc-uq__footer">
          {q.logo && (
            <span className="cc-uq__logo-slot">
              <img src={q.logo.src} alt={q.logo.alt} width={160} height={40} loading="lazy" className={`cc-uq__logo ${LOGO_GRAYSCALE_CLASS}`} />
            </span>
          )}
          <div className="cc-uq__attr">
            <span>{q.name}</span>
            {q.title && <span>{q.title}</span>}
          </div>
          {q.g2 && (
            <div className="flex items-center gap-[8px]">
              <img src={`${C}svg/icons/G2Stars-G2Footer-6f0b0896.svg`} alt="G2" width={20} height={20} />
              <div className="flex items-center" aria-label="5 out of 5 stars">
                {[0, 1, 2, 3, 4].map((s) => (
                  <MaskIcon key={s} src={`${C}svg/icons/G2Stars-StarSlot-8d3969f3.svg`} size={16} className="cc-uq__star" />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </GlassCard>
  )
}

// Two copies of each set (the live DOM repeats it 6×); translating -50% = one set per 140s cycle (spec §9.7).
function QuotesMarquee() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return (
    <div className="cc-marquee" data-section="QuotesMarquee">
      <div className="cc-marquee__shell" aria-label="User quotes marquee" style={{ opacity: mounted ? 1 : 0 }}>
        {data.quoteRows.map((row, r) => (
          <div key={r} className="cc-marquee__viewport">
            <div className="cc-marquee__track" data-dir={r === 0 ? 'left' : 'right'}>
              {[0, 1].map((copy) => (
                <div key={copy} className="cc-marquee__set" aria-hidden={copy ? 'true' : undefined}>
                  {row.map((q, i) => (
                    <UserQuoteCard key={i} q={q} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SortControl({ sort, setSort }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    if (!open) return
    const close = (e) => !ref.current?.contains(e.target) && setOpen(false)
    document.addEventListener('pointerdown', close)
    return () => document.removeEventListener('pointerdown', close)
  }, [open])
  return (
    <div className="cc-sort" ref={ref}>
      <div className="relative inline-flex">
        <Button
          variant="secondary"
          size="md"
          className="cc-sort__trigger"
          icon={<MaskIcon src={ICON.chevronDown} size={15} />}
          iconPosition="end"
          aria-haspopup="listbox"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          Sort by: {sort}
        </Button>
        {open && (
          <ul className="cc-sort__menu" role="listbox">
            {SORTS.map((s) => (
              <li key={s}>
                <button type="button" role="option" aria-selected={s === sort} data-active={s === sort ? '' : undefined} onClick={() => (setSort(s), setOpen(false))}>
                  {s}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

function StoriesSection() {
  const [stage, setStage] = useState(null)
  const [sort, setSort] = useState(SORTS[0])
  const cards = useMemo(() => {
    const list = data.grid.filter((c) => !stage || stageOf(c) === stage)
    return sort === 'Alphabetical' ? [...list].sort((a, b) => a.logo.localeCompare(b.logo)) : list
  }, [stage, sort])
  return (
    <>
      <nav className="cc-cust-nav" data-section="CustomersFilterNav">
        <div className="cc-cust-nav__filters">
          {FILTERS.map((f) => (
            <Button
              key={f.label}
              variant="secondary"
              size="md"
              selected={stage === f.stage}
              icon={f.icon ? <MaskIcon src={f.icon} size={28} /> : undefined}
              iconSize={28}
              className="cc-cust-nav__chip"
              data-has-icon={f.icon ? '' : undefined}
              onClick={() => setStage(f.stage)}
            >
              {f.label}
            </Button>
          ))}
        </div>
        <SortControl sort={sort} setSort={setSort} />
      </nav>
      <div className="cc-cust-list" data-section="CustomerStoriesGrid">
        <div className="cc-cust-grid">
          {cards.map((c) => (
            <CustomerStoryCard key={c.href} href={c.href} logo={{ src: asset(c.logoFile), alt: c.logo }} title={c.title} meta={metaRows(c.meta)} />
          ))}
        </div>
      </div>
    </>
  )
}

function LovedByManyMore() {
  return (
    <div className="cc-loved" data-section="LovedByManyMore">
      <h2 className="m-0 text-balance text-center font-formula text-heading-2 font-extrabold text-ink-loud">And loved by many more</h2>
      <div className="cc-loved__grid" data-set="desktop">
        {data.lovedByManyMore.map((l) => (
          <img key={l.file} src={asset(l.file)} alt={l.alt} loading="lazy" className={`cc-loved__logo ${LOGO_GRAYSCALE_CLASS}`} />
        ))}
      </div>
      {/* the live page renders a 20-logo subset in a different order at 390 (breakpoint not recorded; ≤600 assumed) */}
      <div className="cc-loved__grid" data-set="mobile">
        {data.lovedByManyMoreMobile.map((alt) => {
          const l = data.lovedByManyMore.find((x) => x.alt === alt)
          return <img key={alt} src={asset(l.file)} alt={l.alt} loading="lazy" className={`cc-loved__logo ${LOGO_GRAYSCALE_CLASS}`} />
        })}
      </div>
    </div>
  )
}

export default function CustomersPage() {
  return (
    <>
      <BasicPageRow inner="full" reveal={false} rowClassName="!overflow-x-clip">
        <Hero />
        <FeaturedFan />
      </BasicPageRow>
      <BasicPageRow inner="full">
        <QuotesMarquee />
      </BasicPageRow>
      <BasicPageRow inner="full">
        <StoriesSection />
      </BasicPageRow>
      <BasicPageRow bordered inner="full">
        <LovedByManyMore />
      </BasicPageRow>
      <FooterRow variant="checkered" />
    </>
  )
}
