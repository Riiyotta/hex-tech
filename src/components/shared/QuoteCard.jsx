// Usage:
//   <QuoteCard logo={{ src: '/assets/logos/customers/notion.svg', alt: 'Notion' }} quote="…" author={{ name: 'Abhishek Modi', title: 'Software Engineer at Notion', avatar: { src: '…', alt: 'Abhishek Modi' } }} />
//   <QuoteCard variant="bordered" logo={{ src, alt }} quote="Hex has helped ClickUp save millions of dollars in churn.”" author={{ name: 'Sai Srigiriaju', title: 'Head of Growth Strategy & Ops', company: 'ClickUp' }} />
//
// variant 'glass' (default): CustomerQuoteCard (CLONE_SPEC §4.11, extracted verbatim from LovedByTeams' Notion
//   card). Radius-12 glass card (light glass / dark glass via theme vars), padding 38/45, logo max-h 45 (logo filter:
//   grayscale light, white dark), quote rail (15px quote glyph in --highlightColor + 1px 35% line), blockquote 24/36
//   300 loud (≤800 22/33), author row (min-h 45; optional 35×35 circular headshot, name 14/400 + title 300).
//   Used by: homepage LovedByTeams, product R-SocialTout + N6 CustomerQuotesMarquee (dark), company quotes.
// variant 'bordered': solutions §4.2.4 "bordered-dark" quote (sharedStyles__Wrapper/Quote/Logo/Author). 1px
//   grid-700 border (#6A565B dark), no radius/bg, padding 38/35 (≤800 30), stack gap 25 / lh 1.35, logo max-h 35,
//   blockquote 24px (≤800 22px) 400 body colour with a hanging “ (::before, -0.95rem; -0.8rem ≤600), author p 14px:
//   bold name + "  ·  " + title + " at Company"; optional 45×45 circular avatar (mr .9rem).
// Both: height 100%, flex 1 (they sit in a flex row; see SocialTout for the row wrapper).
import MaskIcon from './MaskIcon.jsx'

function GlassQuoteCard({ logo, quote, author, className }) {
  return (
    <div
      className={`relative flex h-full flex-auto cursor-default flex-col items-start rounded-card bg-[color:var(--home-glass-background-color)] bg-card px-[45px] py-[38px] text-left shadow-glass-card [backdrop-filter:var(--home-glass-backdrop-filter)]${className ? ` ${className}` : ''}`}
    >
      <div className="flex w-full grow flex-col gap-[24px] leading-[1.35]">
        {logo && (
          <div className="flex items-start">
            <img src={logo.src} alt={logo.alt ?? ''} loading="lazy" className="logo-grayscale max-h-[45px] object-contain" />
          </div>
        )}
        <div className="flex gap-[20px]">
          <div className="quote-card__rail flex flex-none flex-col items-center gap-[10px] pt-[8px]">
            <MaskIcon src="/assets/svg/icons/quote-mark.svg" size={15} className="text-highlight" />
          </div>
          <blockquote className="m-0 block text-lead-xl font-light text-ink-loud [quotes:none] stack:text-[22px] stack:leading-[33px]">
            {quote}
          </blockquote>
        </div>
        {author && (
          <div className="quote-card__author mt-auto flex min-h-[45px] flex-row items-center">
            {author.avatar && (
              <img
                src={author.avatar.src}
                alt={author.avatar.alt ?? author.name}
                loading="lazy"
                className="mr-[12px] h-[35px] w-[35px] object-cover"
              />
            )}
            <p className="m-0 text-small font-normal text-ink">
              {author.name}
              {author.title && <span className="font-light">{`  ${author.title}`}</span>}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

function BorderedQuoteCard({ logo, quote, author, className }) {
  return (
    <div
      className={`quote-card--bordered flex h-full flex-[1_1_0%] flex-col justify-center border border-grid-700 px-[35px] py-[38px] stack:p-[30px]${className ? ` ${className}` : ''}`}
    >
      <div className="flex h-full w-full flex-col items-stretch justify-between gap-[25px] leading-[1.35]">
        {logo && (
          <div className="flex items-start">
            <img src={logo.src} alt={logo.alt ?? ''} loading="lazy" className="logo-grayscale max-h-[35px] object-contain" />
          </div>
        )}
        <blockquote className="m-0 text-[24px] stack:text-[22px]">{quote}</blockquote>
        {author && (
          <div className="flex min-h-[45px] flex-row items-center">
            {author.avatar && (
              <img
                src={author.avatar.src}
                alt={author.avatar.alt ?? author.name}
                loading="lazy"
                className="quote-card__avatar mr-[0.9rem] h-[45px] w-[45px]"
              />
            )}
            <p className="m-0 mb-[5px] text-[14px] text-ink">
              <span className="font-semibold">{`${author.name}  ·  `}</span>
              {author.title && <span>{`${author.title} `}</span>}
              {author.company && <span>{`at ${author.company}`}</span>}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function QuoteCard({ variant = 'glass', logo, quote, author, className = '' }) {
  const Card = variant === 'bordered' ? BorderedQuoteCard : GlassQuoteCard
  return <Card logo={logo} quote={quote} author={author} className={className} />
}
