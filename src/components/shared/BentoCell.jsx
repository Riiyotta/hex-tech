// Usage: <BentoGrid>{cells.map((c) => <BentoCell key={c.title} title={c.title} description={c.text} href={c.href} image={{ src, alt }} indicatorIcon={<svg…/>} />)}</BentoGrid>
// product §2.2 N12 BentoCell (threads "A modern approach to self-serve", data-pink cells). CSS: index.css "BentoCell".
// BentoGrid: 2 columns, gap clamp(8px…14px), margin-top 24 (1 column ≤800).
// BentoCell: #0F0F15 card, radius 8, 1px #14141C/white-12% border, layered drop shadow, paper texture ::before.
//   Info (padding clamp 32→40): <a> with an absolutely positioned Target span (whole card clickable) → H3 heading-4
//   (mb 8, balance) → P 16/24 (max 32rem). Illustration frame (margin auto 8 8, radius 6) → dot-grid masked
//   placeholder rgba(245,192,192,.055) + rose Perlin (opacity 0) → image 553×250. "Learn more" link indicator pill
//   (dashed #99797D) bottom-left. Hover (hover:hover) / :has(:focus-visible): translateY(-4px), border #4C3E44,
//   Perlin .24 running, indicator rotates in. 529.33ms hover spring.
// Props: title, description, href (external if it starts with http), image { src, alt, width (553), height (250) },
//   indicator ('Learn more'), indicatorIcon (node).
// Not used by /product/context-studio/ yet: that page renders the live BentoGrid partial (hero cell, ImageWrapper,
// jade tone) with its own ported CSS (productCore/contextStudio/bento.css).
export function BentoGrid({ className = '', children }) {
  return <div className={`bento-grid ${className}`}>{children}</div>
}

export default function BentoCell({ title, description, href, image, indicator = 'Learn more', indicatorIcon }) {
  const external = /^https?:\/\//.test(href ?? '')
  return (
    <div className="bento-cell">
      <div className="bento-cell__info">
        <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
          <span className="bento-cell__target" />
          <h3 className="bento-cell__title font-formula text-heading-4 font-semibold text-ink-loud">{title}</h3>
        </a>
        <p className="bento-cell__desc text-body text-ink">{description}</p>
      </div>
      <div className="bento-cell__illo">
        <div className="dot-grid-mask">
          <div className="bento-cell__placeholder" />
          <div className="bento-cell__perlin" />
        </div>
        {image && (
          <img src={image.src} alt={image.alt ?? title} width={image.width ?? 553} height={image.height ?? 250} loading="lazy" decoding="async" />
        )}
      </div>
      <div className="bento-cell__indicator">
        {indicator}
        {indicatorIcon}
      </div>
    </div>
  )
}
