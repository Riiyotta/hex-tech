// Usage: <G2Card />  (homepage SocialTout, product notebooks/data-apps/embedded/exploratory R-SocialTout)
// CLONE_SPEC §4.11 G2SocialProofCard: 1px grid-500 bordered card (max 450, padding 38/35; ≤800 full width, 30),
// G2 badges image (max 280) → H3 heading-3 "Users love Hex" → 14px 300 copy + underlined "Check them out →" link.
// Extracted verbatim from sections/LovedByTeams.jsx. All props default to the homepage copy.
import { ArrowRightIcon } from './Icons.jsx'

const G2_IMAGE = {
  src: '/assets/images/misc/g2-awards.svg',
  alt: 'Three G2 badges received by Hex for High Performer, Best Support, and Momentum Leader.',
  width: 838,
  height: 627,
}

export default function G2Card({
  title = 'Users love Hex',
  description = 'Rated on G2 as an industry leader based on customer reviews.',
  link = { label: 'Check them out', href: 'https://www.g2.com/products/hex-technologies/reviews' },
  image = G2_IMAGE,
  className = '',
}) {
  return (
    <div
      className={`flex h-full max-w-[450px] flex-[1_1_0%] flex-col justify-center gap-[24px] border border-grid-500 px-[35px] py-[38px] stack:w-full stack:max-w-none stack:p-[30px]${className ? ` ${className}` : ''}`}
    >
      <div className="flex w-full items-center justify-center">
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading="lazy"
          decoding="async"
          className="h-auto max-w-[280px] object-contain pb-[8px] phone:w-[90%]"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="m-0 mb-[4px] font-formula text-heading-3 font-[800] text-ink-loud">{title}</h3>
        <div className="flex">
          <p className="m-0 text-left text-small font-light text-ink">
            {description}{' '}
            {link && (
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="g2-card__link">
                <span className="inline-flex items-center gap-[4px]">
                  {link.label}
                  <span className="text-fg-1200">
                    <ArrowRightIcon />
                  </span>
                </span>
              </a>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}
