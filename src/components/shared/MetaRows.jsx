// Usage: <MetaRows rows={[{ label: 'Industry /', value: 'Fintech' }, { label: 'Use case /', value: 'Self-serve' }]} />
//        <MetaRows size={12} layout="inline" rows={…} />                       (customer story header)
// company §3.3 P7: each row flex / wrap / gap 8, Cinetype Mono, letter-spacing .833px (10px) / .9996px (12px),
// line-height 21px; label in --meta-color (rgba(20,20,28,.447) light / rgba(255,255,255,.447) dark), value spans
// in --fontColorLOUD unless an item colour is given. Labels are rendered as passed ("Industry /", "Solution/").
// layout 'stack' (default: rows in a column, gap 2 — cards) | 'inline' (one centred row, items centred, gap 40,
//   padding 20px 40px) | 'inline-stack' (inline, then stacked ≤800: column, start-aligned, no gap — the customer
//   story metadata strip at 390).
// Props: rows [{ label, value?: node, items?: [{ text, color }] }], size 10 | 12, layout, leading (CSS line-height,
//   default '21px'; ResourceCard uses '15.71px'), rowGap (stack gap, default '2px'), className.
const LAYOUT = {
  inline: 'flex-wrap items-center justify-center gap-[40px] px-[40px] py-[20px]',
  'inline-stack': 'flex-wrap items-center justify-center gap-[40px] px-[40px] py-[20px] stack:flex-col stack:items-start stack:gap-0',
}

export default function MetaRows({ rows, size = 10, layout = 'stack', leading = '21px', rowGap = '2px', className = '' }) {
  const inline = layout === 'inline' || layout === 'inline-stack'
  const type = {
    fontSize: size,
    lineHeight: leading,
    letterSpacing: size === 12 ? '0.9996px' : '0.833px',
  }
  return (
    <div
      className={`flex font-mono ${inline ? LAYOUT[layout] : 'flex-col'} ${className}`}
      style={inline ? undefined : { gap: rowGap }}
    >
      {rows.map((row, i) => (
        <div key={i} className="flex flex-wrap gap-x-[8px] gap-y-[2px] text-ink-meta" style={type}>
          {row.label && <span>{row.label}</span>}
          {row.value != null && <span className="text-ink-loud">{row.value}</span>}
          {row.items?.map((item) => (
            <span key={item.text} style={item.color ? { color: item.color } : undefined} className={item.color ? undefined : 'text-ink-loud'}>
              {item.text}
            </span>
          ))}
        </div>
      ))}
    </div>
  )
}
