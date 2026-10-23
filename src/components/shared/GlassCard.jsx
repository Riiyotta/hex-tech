// Usage: <GlassCard className="p-[20px] gap-[20px]" interactive>…</GlassCard>
//        <a href="/customers/figma/" className="flex"><GlassCard interactive className="p-[20px]">…</GlassCard></a>
// Card__Wrapper (company §3.3 P1 light glass; product §1.1 + solutions §3.1 dark glass, chosen by [data-theme]):
// radius 12, flex column / items-start / text-left, light: rose 105° gradient over rgba(253,253,253,.4) + blur 7.5 +
// inset/ring/drop shadow stack; dark: radial rgba(26,26,37,.5)→rgba(15,15,21,.5) + the dark glass shadow.
// Padding is per use (10 / 20 / 30 / 40px): pass it in className.
// interactive: perspective 800, transition border/transform/box-shadow 529.33ms on the hover spring
// (--hover-transition-timing-function); (hover: hover) → translateY(-4px) + deeper shadow (light: company P1 hover
// stack; dark: inset rgba(255,255,255,.08) + 0 .5px 0 .75px rgba(255,255,255,.15) + drops). The lift also fires when
// the card is the direct child of a hovered <a>.
// as: element/tag (default 'div'); other props are passed through (href when as="a").

export default function GlassCard({ as: Tag = 'div', interactive = false, className = '', children, ...rest }) {
  return (
    <Tag className={`glass-card ${className}`} data-interactive={interactive ? '' : undefined} {...rest}>
      {children}
    </Tag>
  )
}
