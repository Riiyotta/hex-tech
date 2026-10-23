// Usage: <TronDivider />  ·  <TronDivider flipped />  (pricing: mirrored copy below the table)
// CLONE_SPEC §4.14 / TronDivider__Wrapper: 9 × 1px gradient rules (grid-700 → grid-500 → grid-700 on fg-100),
// margin-bottom 3…10px, opacity 1 → .2; wrapper margin-bottom 30px (61px tall). Dark colours come from the
// theme vars (#6A565B / #3A3138 on #14141C; specs/product.md §1.1). Moved here from sections/Faq.jsx.
//   flipped    transform: scaleY(-1) (solutions §2.1, T4 pricing)
//   className  replaces the wrapper margin (default 'mb-[30px]')
const TRON_LINES = [
  { mb: 3, opacity: 1 },
  { mb: 4, opacity: 0.9 },
  { mb: 5, opacity: 0.8 },
  { mb: 6, opacity: 0.7 },
  { mb: 7, opacity: 0.6 },
  { mb: 8, opacity: 0.5 },
  { mb: 9, opacity: 0.4 },
  { mb: 10, opacity: 0.3 },
  { mb: 0, opacity: 0.2 },
]

export default function TronDivider({ flipped = false, className = 'mb-[30px]' }) {
  return (
    <div className={`${className} w-full`} style={flipped ? { transform: 'scaleY(-1)' } : undefined} aria-hidden="true">
      {TRON_LINES.map(({ mb, opacity }, i) => (
        <div key={i} className="h-px w-full bg-fg-100 bg-tron" style={{ marginBottom: mb, opacity }} />
      ))}
    </div>
  )
}
