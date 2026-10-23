// productV1 page blocks (specs/product.md §2.2 N10, §4.7–4.9). Built on shared components; nothing here
// duplicates src/components/shared. V1Hero / V1H2Panel / V1TwoUp / TemplateGrid / QuoteRow.
import { Button, DarkResourceCard, InfoText, QuoteCard, Reveal, SocialTout } from '../../components/shared'

export const SIGNUP = 'https://app.hex.tech/signup'
export const DEMO = '/request-a-demo/'
export const ICONS = '/assets/pages/product/productV1/icons'

// md Buttons on these pages render the lg chrome (live dFTwxo / kbIvAm: 42px boxes with CornerLines + CornerCircles):
// <Button size="md" corners circles>.

// GradientHeader (dark 55° white → rose via --heading-gradient). variant: 'h1' heading-1 60/78 SemiExtended 700,
// 'hero' 74/96.2 (-0.025em), 'h2-60' PP Formula 800 60/78 (-1.5px, V1H2Panel).
const GRADIENT_VARIANT = {
  h1: 'font-display text-heading-1 font-bold',
  hero: 'font-display text-hero-relaxed font-bold',
  panel: 'font-formula text-heading-2 font-extrabold',
}
export function GradientHeading({ as: Tag = 'h2', variant = 'h1', align = 'center', className = '', style, children }) {
  return (
    <Tag
      className={`gradient-heading pv1-gradient mt-0 text-ink-loud ${GRADIENT_VARIANT[variant]} ${className}`}
      data-align={align}
      style={style}
    >
      {children}
    </Tag>
  )
}

// N10 V1Hero (Hero__Panel): padding 84/0, H1 74/96.2 (max 1200, mb 20), P 20/30 (max 800), actions gap 15 / pt 10.
export function V1Hero({ title, description, actionsClassName = 'gap-[15px] pt-[10px]', children }) {
  return (
    <div className="flex flex-col items-center py-[84px]">
      <GradientHeading as="h1" variant="hero" className="mb-[20px] max-w-[1200px]">
        {title}
      </GradientHeading>
      <p className="pv1-text-20 max-w-[800px] text-center">{description}</p>
      <div className={`mt-[25px] flex phone-sm:flex-col phone-sm:self-stretch phone-sm:gap-[10px] ${actionsClassName}`}>
        <Button size="md" corners circles variant="primary" href={SIGNUP} external>
          Get started for free
        </Button>
        <Button size="md" corners circles variant="secondary" href={DEMO}>
          Request a demo
        </Button>
      </div>
      {children}
    </div>
  )
}

// N10 V1H2Panel (H2__Panel .pt--small/medium/large): H2 60/78 PP Formula 800 (max 1000, mb 12) + optional
// subheader 20/30 (max 767). pt: 'small' 0 | 'medium' 80 (48 ≤800) | 'large' 160 (80 ≤800).
export function V1H2Panel({ pt = 'small', title, subheader }) {
  return (
    <Reveal className="pv1-h2panel" data-pt={pt}>
      <GradientHeading variant="panel">{title}</GradientHeading>
      {subheader && <p className="pv1-text-20 mx-auto max-w-[767px] text-center">{subheader}</p>}
    </Reveal>
  )
}

// N10 V1TwoUp (TwoUp__Panel): media column 680 + R-InfoText (H2 heading-2, 20/30 description, secondary md CTA).
// reverse: row-reverse ≥1000 (the live nth-child alternation resolved per instance). lastLarge: pb 180 (90 ≤1000).
export function V1TwoUp({ media, eyebrow, title, description, cta, reverse = false, lastLarge = false }) {
  return (
    <Reveal className="pv1-twoup" data-reverse={reverse ? '' : undefined} data-last-large={lastLarge ? '' : undefined}>
      <div className="pv1-twoup__media">{media}</div>
      <InfoText
        className="info-text break-words"
        size="h2"
        eyebrow={eyebrow ? <h6 className="pv1-eyebrow">{eyebrow}</h6> : undefined}
        title={title}
        description={description}
        cta={cta ? { variant: 'secondary', size: 'md', corners: true, ...cta } : undefined}
      />
    </Reveal>
  )
}

// N10 TemplateCard grid (Recommendations__Grid): 3 cols / gap 16 / padding 64 0 120; ≤1000 2 cols; ≤800 1 col,
// gap 0, padding 48 0 80. Item wrapper padding 10 → DarkResourceCard variant="template".
export function TemplateGrid({ items }) {
  return (
    <Reveal className="grid grid-cols-3 gap-[16px] pb-[120px] pt-[64px] tablet:grid-cols-2 stack:grid-cols-1 stack:gap-0 stack:pb-[80px] stack:pt-[48px]">
      {items.map((t) => (
        <div key={t.href} className="p-[10px]">
          <DarkResourceCard
            variant="template"
            className="h-full"
            href={t.href}
            title={t.title}
            tag={t.tag}
            author={t.author}
            description={t.description}
            image={{ src: t.image, alt: t.title }}
          />
        </div>
      ))}
    </Reveal>
  )
}

// R-SocialTout quote row (SocialTout__Wrapper / __Inner + CustomerQuoteCard). `inner` max width per page.
export function QuoteRow({ quotes, inner = '' }) {
  return (
    <SocialTout inner={inner}>
      {quotes.map((q) => (
        <QuoteCard key={q.author.name} logo={q.logo} quote={q.quote} author={q.author} />
      ))}
    </SocialTout>
  )
}

// White product-cell frame (sharedStyles__CellIllustration), absolutely placed by the caller.
export function Cell({ src, alt, width, className = '', style, imgStyle }) {
  return (
    <div className={`pv1-cell ${className}`} style={style}>
      <img src={src} alt={alt} width={width} style={{ height: "auto", ...imgStyle }} />
    </div>
  )
}
