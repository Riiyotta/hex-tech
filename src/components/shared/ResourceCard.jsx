// Usage: <ResourceCard href="/blog/next-bi-tool/" type="Blog post" title="Your next BI tool shouldn't be a BI tool"
//          tags={['Data leader']} readTime="4 min" image={{ src: '/assets/pages/solutions/hub/…png', alt: '' }} />
// The SolutionResourceCard, shared by three families:
//   solutions §4.1.3 hub grid (dark), product §4.1 #5 BI ResourceCards (light), company §4.10 ResourceCardsGrid (light).
// <a> (block, flex 1) inside a flex wrapper → interactive GlassCard (padding 0, height 100%, 529ms hover lift) →
//   Media (relative, padding 20, full width): decorative tag illustration (absolute inset 0, opacity .35, top radius 12,
//   chosen by the FIRST tag) behind a 16:9 frame (bg --bg300, radius 4, 1px tag-tint border, 0 2px 12px rgba(0,0,0,.5),
//   overflow hidden, z 1) holding the image (max-width 100%, centred) — or a logo at natural size (logo: true) — or a
//   "Blog post"-style placeholder (Cinetype 10px --fg800).
//   Content (padding 24, flex col, gap 10): type chip (Cinetype Mono 10/15.71 ls .833, --fg1200 on --bg300, 1px --fg800,
//   radius 1, padding 1px 4px) → H4 heading-4 (PP Formula 600 20/26 -0.5px, loud) → MetaRows (gap 4): "Solution/" +
//   tag names in tag colour, then the read time.
// Props: href, type, title, tags (keys of RESOURCE_TAGS), readTime, image { src, alt, logo?: boolean }, placeholder,
//   external, className (outer wrapper).
import GlassCard from './GlassCard.jsx'
import MetaRows from './MetaRows.jsx'
import { LOGO_GRAYSCALE_CLASS } from './LogoFilter.jsx'

const tint = (v, pct) => `color-mix(in srgb, var(${v}) ${pct}%, transparent)`

// solutions §4.1.3 tag text colour / image-frame border tint / illustration
export const RESOURCE_TAGS = {
  'Data leader': { color: 'var(--jade)', border: tint('--jade', 42), illustration: 'data-leader' },
  Sales: { color: 'var(--citrine)', border: tint('--citrine', 39), illustration: 'sales' },
  Marketing: { color: 'var(--violetTopaz)', border: tint('--violetTopaz', 53), illustration: 'marketing' },
  Product: { color: 'var(--cement)', border: tint('--cement', 52), illustration: 'product' },
  'Core data team': { color: 'var(--amethyst)', border: tint('--amethyst', 50), illustration: 'core-data-team' },
  'Customer success': { color: 'var(--opal)', border: tint('--opal', 19), illustration: 'customer-success' },
}

export default function ResourceCard({
  href,
  type,
  title,
  tags = [],
  readTime,
  image,
  placeholder = 'Blog post',
  external = false,
  className = '',
}) {
  const primary = RESOURCE_TAGS[tags[0]]
  const rows = [
    { label: 'Solution/', items: tags.map((t) => ({ text: t, color: RESOURCE_TAGS[t]?.color })) },
    ...(readTime ? [{ label: readTime }] : []),
  ]
  return (
    <div className={`flex ${className}`}>
      <a href={href} className="block flex-1" {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        <GlassCard interactive className="h-full p-0">
          <div className="relative w-full p-[20px]">
            {primary && (
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-t-[12px] opacity-35" aria-hidden="true">
                <img src={`/assets/pages/solutions/hub/illustrations/${primary.illustration}.svg`} alt="" className="h-full w-full object-contain" />
              </div>
            )}
            <div
              className="relative z-[1] flex aspect-video w-full items-center justify-center overflow-hidden rounded-[4px] border bg-surface-300 shadow-resource-frame"
              style={{ borderColor: primary?.border ?? 'var(--grid500)' }}
            >
              {image ? (
                <img src={image.src} alt={image.alt ?? ''} className={image.logo ? LOGO_GRAYSCALE_CLASS : 'max-w-full'} />
              ) : (
                <span className="text-[10px] text-fg-800">{placeholder}</span>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-[10px] p-[24px]">
            {type && (
              <span className="self-start rounded-[1px] border border-fg-800 bg-surface-300 px-[4px] py-[1px] font-mono text-[10px] leading-[15.71px] tracking-[0.833px] text-fg-1200">
                {type}
              </span>
            )}
            <h4 className="m-0 font-formula text-heading-4 font-semibold text-ink-loud">{title}</h4>
            <MetaRows rows={rows} leading="15.71px" rowGap="4px" />
          </div>
        </GlassCard>
      </a>
    </div>
  )
}
