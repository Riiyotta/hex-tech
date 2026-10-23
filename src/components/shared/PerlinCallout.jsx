// Usage: <PerlinCallout icon={<svg…/>} eyebrow="Threads + docs" title="…" description="…" cta={{ label, href, external }} focal={<img…/>} />
// product §2.2 N11 PerlinCallout (threads ThreadsDocs, capability-ai SlackbotCallout).
// Full-bleed hatched row (--texture-hatch-img, 1px --grid500 top/bottom) → content grid (overflow-x clip) →
// GridLines (margin 80 0, padding 4) with 4 dashed #4C3E44 guide lines (+110px, 80px fade masks) → Card
// (radius 12, #14141C + radial #1D1D29→#0F0F15, dark glass shadow, min-h 200) → grid pile: dot-grid Perlin
// sheet (perlin-noise.png 512, rgba(227,178,179,.16), .72, translate-bg 48s, radial mask at 66.66% 50%),
// optional focal art, content, InnerShadow overlay. CSS: index.css "PerlinCallout".
// variant 'threads': card padding 32, content column gap 25, `focal` node centred at 66.66% / 50%.
// variant 'slackbot': card padding 0, Inner flex items-end → left column (padding 32, gap 15) + `image` (max 698).
// Props: variant, icon (node, 15px eyebrow glyph), eyebrow, title, description, cta { label, href, external }, focal, image.
import Button from './Button.jsx'
import { LayoutGrid } from './LayoutGrid.jsx'

export default function PerlinCallout({ variant = 'threads', icon, eyebrow, title, description, cta, focal, image }) {
  const eyebrowNode = (
    <div className="perlin-callout__eyebrow">
      {icon}
      <span className="font-mono text-annotation">{eyebrow}</span>
    </div>
  )
  const ctaNode = cta && (
    <Button variant="secondary" size="md" href={cta.href} external={cta.external} className="w-fit stack:w-auto">
      {cta.label}
    </Button>
  )
  const heading = (
    <h2 className="perlin-callout__h2 m-0 font-formula text-heading-3 font-[800] text-ink-loud" style={{ textWrap: 'initial' }}>
      {title}
    </h2>
  )
  return (
    <LayoutGrid as="section" className="perlin-callout-row" data-block="PerlinCallout">
      <div className="min-w-0 overflow-x-clip" style={{ gridColumn: '2 / -2' }}>
        <div className="perlin-callout__lines">
          <div className="perlin-callout__line" data-position="top" />
          <div className="perlin-callout__line" data-position="bottom" />
          <div className="perlin-callout__line" data-position="left" />
          <div className="perlin-callout__line" data-position="right" />
          <div className="perlin-callout__card" data-variant={variant}>
            <div className="perlin-callout__layout">
              <div className="perlin-callout__mask">
                <div className="perlin-callout__perlin" />
              </div>
              {variant === 'threads' ? (
                <>
                  {focal && <div className="perlin-callout__focal">{focal}</div>}
                  <div className="perlin-callout__content">
                    {eyebrowNode}
                    {heading}
                    {description && <p className="m-0 mb-[20px] text-body font-light text-ink">{description}</p>}
                    {ctaNode}
                  </div>
                </>
              ) : (
                <div className="perlin-callout__inner">
                  <div className="perlin-callout__left">
                    {eyebrowNode}
                    {heading}
                    {description && <p className="m-0 mb-[20px] text-body font-light text-ink">{description}</p>}
                    {ctaNode}
                  </div>
                  {image && <div className="perlin-callout__right">{image}</div>}
                </div>
              )}
              <div className="perlin-callout__inner-shadow" />
            </div>
          </div>
        </div>
      </div>
    </LayoutGrid>
  )
}
