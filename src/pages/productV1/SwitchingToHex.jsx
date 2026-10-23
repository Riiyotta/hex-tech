// /product/switching-to-hex/ (specs/product.md §4.10, T3 GuideLayout, dark). Document cards with copy-link buttons,
// hero + TOC, chapters with sticky section headings, objections FAQ, then the N6 quotes marquee. Prose = placeholder.
import { Fragment, useState } from 'react'
import { BasicPageRow, ContentSection, CustomerQuotesMarquee, MaskIcon, QuoteCard } from '../../components/shared'
import Faq from '../../components/sections/Faq.jsx'
import Footer from '../../components/sections/Footer.jsx'
import { ICONS } from './blocks.jsx'
import { ARTICLE_QUOTES, CHAPTERS, MARQUEE, OBJECTIONS, ph } from './switchingData.js'
import { useDocumentTitle } from './useDocumentTitle.js'
import './productV1.css'

const MARQUEE_QUOTES = MARQUEE.map((q) => ({ logo: { src: q.logo, alt: 'customer logo' }, quote: q.quote }))

// CopyLinkButton: 56px glass disc + "Copy link" label; click copies the chapter URL (#anchor), label → "link copied".
function CopyLink({ anchor }) {
  const [copied, setCopied] = useState(false)
  const onClick = () => {
    const url = `${window.location.origin}${window.location.pathname}${anchor ? `#${anchor}` : ''}`
    navigator.clipboard?.writeText(url).catch(() => {})
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div className="pv1-copylink">
      <button type="button" className="pv1-copylink__btn" onClick={onClick} aria-label="Copy link">
        <MaskIcon src={`${ICONS}/${copied ? 'copylink-0' : 'copylink-1'}.svg`} size={16} />
      </button>
      <span className="pv1-copylink__label pv1-annotation !text-[10px]" aria-live="polite">
        {copied ? 'link copied' : 'Copy link'}
      </span>
    </div>
  )
}

function Doc({ id, topPad = true, children }) {
  return (
    <div id={id} className="pv1-doc-grid relative z-[1] w-full scroll-mt-[150px]">
      <div className="pv1-doc-margin" data-side="left" />
      <div className="pv1-doc" data-top-pad={topPad ? '' : undefined}>
        {['tl', 'tr', 'bl', 'br'].map((p) => (
          <div key={p} className="pv1-doc-accent" data-p={p} />
        ))}
        <div className="pv1-doc-container">{children}</div>
      </div>
      <div className="pv1-doc-margin" data-side="right" />
    </div>
  )
}

const ArrowDown = () => <MaskIcon src={`${ICONS}/ctx-Hero__SectionHeader.svg`} size={16} className="opacity-60" />

function HeroDoc() {
  return (
    <Doc topPad={false}>
      <div className="absolute left-[12px] top-[12px]">
        <ul className="pv1-fade-list m-0 list-none p-0">
          {['AI POWERED', 'POLYGLOT WORKFLOWS', 'REAL-TIME', 'COLLABORATIVE', 'NO-CODE'].map((f) => (
            <li key={f} className="pv1-annotation !text-[10px]">
              {f}
            </li>
          ))}
        </ul>
      </div>
      <CopyLink />
      <div className="pv1-headline">
        <h1 className="pv1-guide-h1 m-0 font-display font-bold leading-[1.3] tracking-[-0.0308em] text-ink-loud">Switching to Hex</h1>
        <p className="pv1-text-20">
          From fragmented tools to a unified, AI analytics platform: a guide to getting started on agentic analytics with Hex, from
          pitch to evaluation to migration.
        </p>
      </div>
      <ul className="pv1-toc m-0 flex list-none flex-col gap-[10px] px-0 pb-[70px] pt-[30px]">
        {CHAPTERS.map((c) => (
          <div key={c.id} className="flex flex-col gap-[10px]">
            <a
              href={`#${c.id}`}
              className="flex items-center gap-[16px] border-b border-fg-1200 pb-[16px] pt-[24px] font-plex-mono text-[14px] tracking-[0.05em] text-ink"
            >
              {c.toc}
              <ArrowDown />
            </a>
            <ul className="m-0 list-none p-0">
              {c.sections.map((s) => (
                <li key={s.id} className="relative">
                  <div className="pv1-toc__arrow" aria-hidden="true">
                    <MaskIcon src={`${ICONS}/ctx-Hero__ArrowIndicatorCirc.svg`} size={16} />
                  </div>
                  <a className="font-formula font-semibold leading-[1.3] tracking-[-0.025em]" href={`#${s.id}`}>
                    <span className="pv1-toc__text">{s.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    </Doc>
  )
}

function Block({ b }) {
  const [type, v] = b
  if (type === 'p') return <p>{ph(v)}</p>
  if (type === 'h4') return <h4 className="pv1-gsection__h4 font-formula text-heading-4 font-semibold text-ink-loud">{v}</h4>
  if (type === 'ul' || type === 'ol') {
    const L = type
    return (
      <L>
        {v.map((lines, i) => (
          <li key={i}>
            <p>
              <strong>Placeholder point.</strong> {ph(lines).slice(19)}
            </p>
          </li>
        ))}
      </L>
    )
  }
  if (type === 'quote') {
    const q = ARTICLE_QUOTES[v]
    return (
      <div className="pv1-gquote">
        <QuoteCard logo={q.logo} quote={q.quote} />
      </div>
    )
  }
  if (type === 'faq')
    return (
      <div>
        {/* objections FAQ: FAQ__Wrapper without padding, --fg100 fill, full-width column */}
        <Faq title={null} items={OBJECTIONS} answerStyle="page" showFooter={false} tron={false} padding="0" background="var(--fg100)" maxWidth="none" />
      </div>
    )
  if (type === 'links')
    return (
      <ul className="pv1-linklist">
        {v.map((l) => (
          <li key={l.title}>
            <a href={l.href}>
              <h4 className="pv1-gsection__h4 font-formula text-heading-4 font-semibold text-ink-loud">{l.title}</h4>
              <div>{ph(l.lines, 78)}</div>
            </a>
          </li>
        ))}
      </ul>
    )
  if (type === 'guides')
    return (
      <ul>
        {v.map((g) => (
          <li key={g.label}>
            <p>
              <a href={g.href} className="text-inherit">
                <strong>{g.label}</strong>
              </a>{' '}
              — {ph(2).slice(30)}
            </p>
          </li>
        ))}
      </ul>
    )
  return null
}

function Chapter({ c, last }) {
  return (
    <Doc id={c.id}>
      <CopyLink anchor={c.id} />
      <div className="flex flex-col items-start gap-[40px]">
        <h2 className="gradient-heading mt-0 pr-[70px] text-left font-display text-heading-1 font-bold text-ink-loud">{c.title}</h2>
        {c.sections.map((s) => (
          <section key={s.id} id={s.id} className="pv1-gsection">
            <div className="pv1-gsection__heading">
              <h3 className="m-0 font-formula text-[1.75rem] font-extrabold leading-[1.3] tracking-[-0.025em] text-ink-loud [text-wrap:balance]">
                {s.title}
              </h3>
            </div>
            <div className="pv1-gsection__content">
              {s.blocks.map((b, i) => (
                <Block key={i} b={b} />
              ))}
            </div>
          </section>
        ))}
      </div>
      {last && (
        <>
          <div style={{ height: 80 }} />
          <div className="absolute bottom-[12px] right-[12px]">
            <div className="pv1-fade-list">
              {['Yours truly ↴', 'the data team', 'xoxo'].map((t) => (
                <span key={t} className="pv1-annotation block text-right !text-[10px] uppercase">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </>
      )}
    </Doc>
  )
}

export default function SwitchingToHex() {
  useDocumentTitle('Switching to Hex: Evaluate, Pilot, and Migrate | Hex')
  return (
    <>
      <ContentSection className="pv1-guide-bg">
        <div className="flex flex-col gap-[50px] pb-[80px] phone:flex">
          {/* 152px top band: rules at every second content column (x 259 … 1411 @1440) */}
          <div className="grid h-[clamp(112px,5.5938rem+5vw,152px)] grid-cols-12" aria-hidden="true">
            {[2, 4, 6, 8, 10, 12].map((i) => (
              <div key={i} className="pv1-guide-rule" data-i={i} style={{ gridColumn: i }} />
            ))}
          </div>
          <HeroDoc />
          {CHAPTERS.map((c, i) => (
            <Fragment key={c.id}>
              <Chapter c={c} last={i === CHAPTERS.length - 1} />
            </Fragment>
          ))}
        </div>
      </ContentSection>
      <BasicPageRow bordered inner="full">
        <CustomerQuotesMarquee quotes={MARQUEE_QUOTES} />
      </BasicPageRow>
      <ContentSection>
        <Footer />
      </ContentSection>
    </>
  )
}
