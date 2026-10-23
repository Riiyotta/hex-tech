// CLONE_SPEC §4.12: "Instant integration with the whole stack" — heading + 3×2 grid of integration cards.
// Card illustrations are the live rendered markup (reference/dom/illustrations-integrations-card-N.html),
// injected verbatim; their styled-components rules are ported in ./Integrations/Integrations.css.
import { Reveal } from '../shared'
import { INTEGRATION_CARDS } from './Integrations/cards.js'
import './Integrations/Integrations.css'

function ArrowRightIcon() {
  return (
    <svg data-icon="arrow-right" height="15" viewBox="0 0 15 15" width="15" aria-hidden="true">
      <g strokeWidth="1">
        <path d="M13.5 7.5H1M13.5 7.5L9.5 3.5L13.5 7.5ZM13.5 7.5L9.5 11.5L13.5 7.5Z" stroke="currentColor" />
      </g>
    </svg>
  )
}

// Info block per `infoPadding`: 'default' = homepage GridItem (padding 35/20/10, H4 mb 7, P 14/22 300);
// 'compact' = notebooks ReactiveExecutionTout (padding 22/20/10, H4 mb 6, description 14/22 400 in a div).
const INFO = {
  default: { wrap: 'pt-[35px]', title: 'mb-[7px]', Desc: 'p', desc: 'm-0 text-small font-light text-ink' },
  compact: { wrap: 'pt-[22px]', title: 'mb-[6px] mt-0', Desc: 'div', desc: 'text-small text-ink' },
}

// GridItem card (§4.12). Exported for reuse (product notebooks §4.6 #6).
// Props: title, description, illustration (inline SVG markup string, coloured --highlightColor) or image
//   ({ src, width, height, alt }), href (renders an <a>; without it a <div> like the homepage), external
//   (target _blank), infoPadding 'default' | 'compact', trackingLabel.
// Integrations.css (imported here) supplies the 5% → 10% highlight panel behind the card.
export function IntegrationCard({ title, description, illustration, image, href, external = false, infoPadding = 'default', trackingLabel }) {
  const Tag = href ? 'a' : 'div'
  const info = INFO[infoPadding] ?? INFO.default
  const Desc = info.Desc
  return (
    <Tag
      className="integration-card group relative flex flex-1 cursor-pointer p-[5px] shadow-[0_0_0_1px_transparent] transition-[box-shadow,background-color] duration-hex ease-hex hover:bg-transparent hover:shadow-integration-hover"
      data-tracking-label={trackingLabel}
      {...(href ? { href, ...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {}) } : {})}
    >
      <div className="relative z-[1] flex flex-auto flex-col">
        {illustration ? (
          <div
            className="flex h-[160px] w-full flex-none justify-center overflow-hidden transition-transform duration-hex ease-hex group-hover:[transform:scale(1.04)_translateY(-5px)] [&_svg]:text-highlight"
            dangerouslySetInnerHTML={{ __html: illustration }}
          />
        ) : (
          <div className="flex h-[160px] w-full flex-none justify-center overflow-hidden transition-transform duration-hex ease-hex group-hover:[transform:scale(1.04)_translateY(-5px)]">
            {image && <img src={image.src} alt={image.alt ?? ''} width={image.width} height={image.height} />}
          </div>
        )}
        <div className={`px-5 pb-2.5 ${info.wrap} transition-transform duration-hex ease-hex group-hover:-translate-y-[3px]`}>
          <h4 className={`${info.title} flex font-formula text-heading-4 font-semibold text-ink-loud`}>{title}</h4>
          <Desc className={info.desc}>{description}</Desc>
        </div>
        <div className="mt-auto flex items-center justify-end gap-2.5 px-2.5 pb-2.5 text-highlight opacity-40 transition-opacity duration-hex ease-hex group-hover:opacity-100">
          <span className="font-plex-mono text-read-more font-bold uppercase opacity-0 transition-opacity duration-hex ease-hex group-hover:opacity-100">
            Learn more
          </span>
          <span
            data-icon="true"
            className="flex h-[15px] w-[15px] font-plex-mono text-read-more font-bold uppercase text-fg-1200 opacity-0 transition-opacity duration-hex ease-hex group-hover:opacity-100"
          >
            <ArrowRightIcon />
          </span>
        </div>
      </div>
    </Tag>
  )
}

export default function Integrations() {
  return (
    <Reveal
      as="section"
      data-section="Integrations"
      className="integrations-tout relative flex w-full flex-col pb-[clamp(40px,1.7969rem_+_2.5vw,60px)] pt-[clamp(40px,1.4453rem_+_3.75vw,70px)]"
    >
      <div className="relative z-[1] mx-auto flex w-full max-w-section flex-col px-section-gutter">
        <div className="relative mb-[clamp(40px,1.4453rem_+_3.75vw,70px)] flex flex-col items-center justify-center gap-[15px] stack:mb-[30px]">
          <h2 className="gradient-heading mb-0 max-w-[800px] text-center font-display text-heading-1 font-bold text-ink-loud">
            <span data-style="italic">Instant integration</span> with the whole stack
          </h2>
          <p className="m-0 max-w-[500px] text-center text-lead-xl font-light text-ink phone-sm:text-lead-l">
            Out-of-the-box connections and flexible APIs make setup a breeze.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5 tablet:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] phone:flex phone:flex-col">
          {INTEGRATION_CARDS.map((card) => (
            <IntegrationCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </Reveal>
  )
}
