// Usage: <CustomerStoryCard href="/customers/figma/" logo={{ src: '/assets/logos/customers/figma.svg', alt: 'Figma', width: 97, height: 50 }}
//          title="Lowering barriers to insight" meta={[{ label: 'Industry /', value: 'Design' }, { label: 'Use case /', value: 'AI agents' }]} />
// company §3.3 P5 (customers index grid, customer story "Related stories"): <a> (flex) → interactive GlassCard
// (padding 20, gap 20) → logo plate (height 150, full width, padding 20, centred, bg --fg100, 1px --grid500, radius 6;
// logo at natural size: max-width none, so the preflight img max-width:100% can't compress it in narrow plates) →
// content (flex col, gap 10): H4 heading-4 + MetaRows (10px, stacked, gap 2).
// Grid (caller): repeat(3, 1fr) gap 20; ≤800 2 cols; ≤600 1 col.
import GlassCard from './GlassCard.jsx'
import MetaRows from './MetaRows.jsx'

export default function CustomerStoryCard({ href, logo, title, meta = [], className = '' }) {
  return (
    <a href={href} className={`flex ${className}`}>
      <GlassCard interactive className="w-full gap-[20px] p-[20px]">
        <div className="flex h-[150px] w-full items-center justify-center rounded-window border border-grid-500 bg-fg-100 p-[20px]">
          {logo && <img src={logo.src} alt={logo.alt ?? ''} width={logo.width} height={logo.height} loading="lazy" className={`max-w-none${logo.className ? ` ${logo.className}` : ''}`} />}
        </div>
        <div className="flex flex-col gap-[10px]">
          <h4 className="m-0 font-formula text-heading-4 font-semibold text-ink-loud">{title}</h4>
          {meta.length > 0 && <MetaRows rows={meta} />}
        </div>
      </GlassCard>
    </a>
  )
}
