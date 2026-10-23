// CLONE_SPEC §4.2: Customer logo banner ("Trusted by leading data companies").
// Frame (30% fg-100 + paper texture, 1px grid-500 bottom border) with the label riding its top edge,
// 18 grayscale logos (40px tall) and hover popovers on the 7 customer-story logos. Reveal per §6.2.
//
// Props (defaults = the homepage banner, unchanged):
//   label       heading text (default "Trusted by leading data companies")
//   logos       array of { slug | src, name, w, h, story?: { href, align: 'left'|'right', quote, author, title } }
//               `slug` resolves to /assets/logos/customers/<slug>.svg; pass `src` for page assets. w/h = source SVG size.
//               Default: CUSTOMERS (./CustomerBanner/customers.js). Story entries get the indicator dot + popover.
//   variant     'framed' (default, §4.2) | 'minimal' (solutions §3.2 / product §2.1 R-Banner: title + one centred
//               logo row, no frame; padding 38px 0, title Cinetype 500 14px, ul gap 20 (15 ≤800) max-w 1000,
//               li 50 tall, logo wrapper padding 0 8px)
//   logoHeight  minimal only: rendered logo height. Default 50 (natural size, solutions T2/T4/T7 measured);
//               product data-apps / embedded measured 40.
//   Dark pages: logo filter, label, rules, frame fill and popover glass all follow the [data-theme] vars.
import { Reveal, LOGO_GRAYSCALE_CLASS } from '../shared/index.js'
import { CUSTOMERS } from './CustomerBanner/customers.js'
import './CustomerBanner/CustomerBanner.css'

const logoSrc = (customer) => customer.src ?? `/assets/logos/customers/${customer.slug}.svg`

function QuoteGlyph() {
  return (
    <svg aria-hidden="true" fill="none" height="12" viewBox="0 0 15 15" width="12" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.91699 1.30798V6.30603L6.85352 6.41931L3.10938 13.139L2.85547 13.5951L2.41113 13.3217L1.16309 12.5541L0.770508 12.3119L0.979492 11.9008L3.45898 7.02576L1.7793 6.40466L1.45312 6.28455V1.30798H6.91699ZM13.8291 1.30798V6.30603L13.7656 6.41931L10.0215 13.139L9.76758 13.5951L9.32324 13.3217L8.0752 12.5541L7.68164 12.3119L7.8916 11.9008L10.3711 7.02576L8.69141 6.40466L8.36523 6.28455V1.30798H13.8291Z"
        stroke="currentColor"
      />
    </svg>
  )
}

function LogoImg({ customer, height, className = '' }) {
  return (
    <img
      alt={`Hex customer: ${customer.name}`}
      loading="lazy"
      decoding="async"
      width={customer.w}
      height={customer.h}
      src={logoSrc(customer)}
      className={`${LOGO_GRAYSCALE_CLASS} block ${height ? '' : 'h-[40px] '}w-auto ${className}`}
      style={{ aspectRatio: `${customer.w} / ${customer.h}`, ...(height ? { height } : {}) }}
    />
  )
}

function StoryLogo({ customer, height, padded = false }) {
  const { story } = customer
  const boxStyle = height ? { height } : undefined
  return (
    <div className={`cb-story relative flex${height ? '' : ' h-[40px]'}`} style={boxStyle}>
      <a
        href={story.href}
        className={`relative flex${height ? '' : ' h-[40px]'} items-center ${padded ? 'px-[8px]' : 'p-0'} text-inherit no-underline hover:bg-transparent`}
        style={boxStyle}
      >
        {/* CustomerStoryIndicator: 12px dot, top-right of the logo */}
        <span
          aria-hidden="true"
          className="cb-indicator absolute right-[-12px] top-[-8px] grid aspect-square h-[12px] place-items-center whitespace-nowrap rounded-[6px] text-[8px]"
        />
        <span className="grid place-content-center place-items-center">
          <LogoImg customer={customer} height={height} />
        </span>
      </a>
      <div
        data-align={story.align}
        className={`cb-popover pointer-events-none absolute bottom-[calc(100%+16px)] z-[2] flex w-[300px] flex-col leading-[1.571] rounded-popover bg-glass px-[16px] pb-[16px] pt-[8px] shadow-glass-popover ${
          story.align === 'right' ? 'right-0' : 'left-0'
        }`}
      >
        <img
          alt={`Hex customer: ${customer.name}`}
          src={logoSrc(customer)}
          className={`${LOGO_GRAYSCALE_CLASS} mx-auto mb-[8px] mt-[4px] block h-[32px] w-auto object-contain`}
        />
        <div className="cb-divider mb-[16px] flex items-center justify-center gap-[8px]">
          <QuoteGlyph />
        </div>
        <blockquote className="m-0 text-[14px] font-light text-ink">{story.quote}</blockquote>
        <p className="m-0 mt-[12px] flex flex-col gap-[2px] text-ink-muted">
          <strong className="text-[10px] font-[inherit]">{story.author}</strong>{' '}
          <span className="text-[10px] opacity-70">{story.title}</span>
        </p>
      </div>
    </div>
  )
}

function MinimalBanner({ label, logos, logoHeight }) {
  return (
    <Reveal data-section="CustomerBanner" data-variant="minimal" className="flex w-full flex-col items-center py-[38px]">
      <p className="m-0 mb-[22px] max-w-[1165px] px-[30px] text-center text-small font-medium text-ink">{label}</p>
      <ul
        role="list"
        className="m-0 flex w-full max-w-[1000px] list-none flex-wrap items-center justify-center gap-[20px] p-0 stack:gap-[15px]"
      >
        {logos.map((customer) => (
          <li key={customer.slug ?? customer.src} className="flex h-[50px] flex-none items-center">
            {customer.story ? (
              <StoryLogo customer={customer} height={logoHeight} padded />
            ) : (
              <div className="flex items-center px-[8px]">
                <LogoImg customer={customer} height={logoHeight} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </Reveal>
  )
}

export default function CustomerBanner({
  label = 'Trusted by leading data companies',
  logos = CUSTOMERS,
  variant = 'framed',
  logoHeight = 50,
}) {
  if (variant === 'minimal') return <MinimalBanner label={label} logos={logos} logoHeight={logoHeight} />
  return (
    <Reveal
      data-section="CustomerBanner"
      className="cb-frame relative z-[2] w-full border-b border-grid-500"
    >
      <div className="cb-accents pointer-events-none absolute top-0 z-[1] w-full" aria-hidden="true" />
      <div className="absolute left-0 top-0 z-[1] flex w-full -translate-y-1/2 items-center">
        <span aria-hidden="true" className="flex-auto border-t border-grid-500" />
        <h2 className="cb-label relative m-0 w-min flex-none whitespace-nowrap border-x border-fg-1200 px-[12px] text-center font-mono text-label uppercase text-fg-1200 stack:w-auto stack:max-w-[calc(100dvw-48px)] stack:whitespace-normal">
          {label}
        </h2>
        <span aria-hidden="true" className="flex-auto border-t border-grid-500" />
      </div>
      <ul
        role="list"
        className="m-0 flex w-full list-none flex-wrap items-center justify-center gap-x-[54px] gap-y-[24px] px-[32px] pb-[40px] pt-[44px] stack:gap-x-[39px] stack:gap-y-[14px]"
      >
        {logos.map((customer) => (
          <li key={customer.slug ?? customer.src} className="flex h-[40px] flex-none items-center">
            {customer.story ? (
              <StoryLogo customer={customer} />
            ) : (
              <div className="flex h-full items-center p-0">
                <LogoImg customer={customer} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </Reveal>
  )
}
