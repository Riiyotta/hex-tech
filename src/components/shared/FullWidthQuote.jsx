// Usage: <FullWidthQuote logo={{ src: '/assets/pages/product/cli/…-81x50.svg', alt: 'StubHub' }} name="Nova Wang" title="Head of Analytics Engineering, StubHub" quote={<>“We're already seeing … — <strong>it lets our most technical users …</strong>”</>} />
// product §2.2 N4 (cli, context-studio, notebooks, threads; reference/pages/product/dom/cli/01-FullWidthQuote.*).
// Full-bleed LayoutGrid row: bg --bg300 (#0F0F15), 1px --grid500 top border. Margin cells hold 8×8 L ticks
// (top -8, inner side -7, --fg1200); the content column has 8×8 bottom ticks (translateY(100%), left/right -1, z 1).
// Desktop (>800): QuoteContainer width 90% / max 1270 / centred / flex items-center / gap 60 /
// padding clamp(30px, .8203rem + 3.75vw, 60px) 0 → Attribution (flex col, gap 20, no shrink: logo max 160×60
// contain left → name 20/30 300 loud + title Cinetype Mono 12px ls .0833em lh 1.571) → 1px --grid500 divider →
// blockquote clamp(20px, 17.75px + .5vw, 24px)/1.5 300 with <strong> 700 loud.
// ≤800: desktop hidden; mobile column (items-center, gap 20, padding 40 0): logo (max 100×40) → quote (20/30,
// centred, px 12, max 600) → attribution centred (name 14px 400, title 10px).
// Props: logo { src, alt }, name, title, quote (node), className.
import { LayoutGrid } from './LayoutGrid.jsx'

function Logo({ logo, mobile }) {
  if (!logo) return null
  return (
    <img
      src={logo.src}
      alt={logo.alt ?? ''}
      className={`h-auto w-auto object-contain object-left ${mobile ? 'max-h-[40px] max-w-[100px]' : 'max-h-[60px] max-w-[160px]'}`}
    />
  )
}

function Author({ name, title, mobile }) {
  return (
    <div className={`flex flex-col gap-[4px] ${mobile ? 'text-center' : ''}`}>
      <div className={mobile ? 'text-[14px] font-normal leading-[1.5] text-ink-loud' : 'text-lead-l font-light text-ink-loud'}>{name}</div>
      <div className={`font-mono leading-[1.571] tracking-[0.0833em] text-ink ${mobile ? 'text-[10px]' : 'text-[12px]'}`}>{title}</div>
    </div>
  )
}

export default function FullWidthQuote({ logo, name, title, quote, className = '' }) {
  return (
    <LayoutGrid as="section" className={`border-t border-grid-500 bg-surface-300 ${className}`} data-block="FullWidthQuote">
      <div className="relative" style={{ gridColumn: '1 / span 1', gridRow: 1 }}>
        <div className="fwq-tick" data-corner="margin-left" aria-hidden="true" />
      </div>
      <div className="block stack:hidden" style={{ gridColumn: '2 / -2', gridRow: 1 }}>
        <div className="relative flex">
          <div className="mx-auto flex w-[90%] max-w-[1270px] items-center gap-[60px] py-[clamp(30px,0.8203rem_+_3.75vw,60px)]">
            <div className="flex shrink-0 flex-col gap-[20px]">
              <Logo logo={logo} />
              <Author name={name} title={title} />
            </div>
            <div className="h-full w-px self-stretch bg-grid-500" aria-hidden="true" />
            <blockquote className="fwq-quote m-0 text-[clamp(20px,17.75px_+_0.5vw,24px)] font-light leading-[1.5] text-ink">{quote}</blockquote>
          </div>
          <div className="fwq-tick" data-corner="bottom-left" aria-hidden="true" />
          <div className="fwq-tick" data-corner="bottom-right" aria-hidden="true" />
        </div>
      </div>
      <div className="hidden flex-col items-center gap-[20px] py-[40px] stack:flex" style={{ gridColumn: '2 / -2', gridRow: 1 }}>
        <Logo logo={logo} mobile />
        <blockquote className="fwq-quote m-0 mx-auto max-w-[600px] px-[12px] text-center text-[20px] font-light leading-[1.5] text-ink">{quote}</blockquote>
        <div className="flex flex-col gap-[20px]">
          <Author name={name} title={title} mobile />
        </div>
      </div>
      <div className="relative" style={{ gridColumn: '-2 / span 1', gridRow: 1 }}>
        <div className="fwq-tick" data-corner="margin-right" aria-hidden="true" />
      </div>
    </LayoutGrid>
  )
}
