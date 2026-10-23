// Usage: <OutlineCard accent className="max-w-[565px] p-[68px_60px]">…</OutlineCard>
// The "outline" Card__Wrapper used by OutroTout (product N5), SolutionOutroCta (solutions §4.2.7), the V1
// TemplateCard grid (product N10) and DarkResourceCard (company P8): 1px border color-mix(highlight 15%),
// transition border / background-color .25s cubic-bezier(.25,.1,.25,1); (hover: hover) → border 30% +
// background color-mix(highlight 10%) (also when the card is the direct child of a hovered <a>).
// accent: the 20px top-right corner tick (::before 20×1 + ::after 1×20, highlight 40%).
// Light: rgba(49,38,59,.15/.3/.1); dark: rgba(245,192,192,…). No radius; rest background = var(--outline-card-bg,
// transparent) so a caller can give it a fill and keep the hover tint (SolutionOutroCta passes var(--fg100)).

export default function OutlineCard({ as: Tag = 'div', accent = false, className = '', children, ...rest }) {
  return (
    <Tag className={`outline-card ${className}`} data-accent={accent ? '' : undefined} {...rest}>
      {children}
    </Tag>
  )
}
