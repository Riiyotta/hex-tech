// product §2.2 N7 ImageInfoCard (cli, context-studio): dark glass Card__Wrapper with padding 0 / overflow hidden →
// TextContent (flex col, gap 16, padding 40 40 20: H3 heading-3 balance → P 16/24 300 balance (mb 8 unless last)
// → optional secondary md button) → ImageWrapper (flex, margin-top auto: screenshot flush bottom-left, clipped).
// ≤1000 the card is a row (text 60%), ≤450 a column again; ≤800 images are 400px wide.
// Props: title, text (node), cta { label, href, external }, image { src, alt, width, height }, className.
import { Button, GlassCard } from '../../../components/shared'

export function ImageInfoCardGrid({ className = '', children, ...rest }) {
  return (
    <div className={`pc-iic-grid ${className}`} {...rest}>
      {children}
    </div>
  )
}

export default function ImageInfoCard({ title, text, cta, image, className = '' }) {
  return (
    <GlassCard className={`pc-iic ${className}`}>
      <div className="pc-iic__text">
        <h3 className="m-0 font-formula text-heading-3 font-[800] text-ink-loud [text-wrap:balance]">{title}</h3>
        <p className="m-0 text-body font-light text-ink [text-wrap:balance]">{text}</p>
        {cta && (
          <Button variant="secondary" size="md" href={cta.href} external={cta.external}>
            {cta.label}
          </Button>
        )}
      </div>
      <div className="pc-iic__image">
        <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" />
      </div>
    </GlassCard>
  )
}
