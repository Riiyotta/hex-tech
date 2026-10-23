// Usage:
//   <SectionHeading title="Time to look at BI," italic="differently" description="…" maxWidth={800} />      (product N2)
//   <SectionHeading variant="solution" title="See how teams use Hex" />                                      (solutions §4.2.3)
// One centred gradient section title, two measured variants:
//   variant 'display' (default): product §2.2 N2 (bi, cli). Wrapper flex col / items-center / gap 10 / text-center,
//     max-width 690 (CLI) or 800 (BI) via maxWidth. H2 = GradientHeader heading-1 (PP Formula SemiExtended 700,
//     60/78, ls -1.848px). Optional `italic` second line: PP Editorial 200 italic 1.3em, display flex / gap 20,
//     margin-top `italicOffset` ('-18px' BI default, '-1.7rem' CLI) with 12px checkered flanking rules
//     (--checker-img: #E8E4E6 light / #312A31 dark). ≤600: H2 30px; italic line-height 1, pb 5, mt -4.
//     Optional description: P 20/30 300 balance, width 80% (100% ≤800).
//   variant 'solution': solutions §4.2.3. Wrapper margin 112px 0 64px, padding 0 56px (≤800 margin 88px 0 48px,
//     left aligned, H2 mb 24 at 390). H2 PP Formula 800 heading-2 (40/52, -1px), gradient, max-w 600, centred.
// Props: title (node), italic (node), description (node), variant, as (heading tag, default 'h2'), maxWidth,
//   italicOffset, className.

export default function SectionHeading({
  title,
  italic,
  description,
  variant = 'display',
  as: Heading = 'h2',
  maxWidth = 690,
  italicOffset = '-18px',
  className = '',
}) {
  if (variant === 'solution') {
    return (
      <div className={`section-heading mx-0 mb-[64px] mt-[112px] px-[56px] stack:mb-[48px] stack:mt-[88px] ${className}`} data-variant="solution">
        <Heading className="gradient-heading mx-auto max-w-[600px] text-center font-formula text-heading-2 font-[800] stack:mb-[24px] stack:text-left">
          {title}
        </Heading>
      </div>
    )
  }
  return (
    <div
      className={`section-heading mx-auto flex flex-col items-center gap-[10px] text-center ${className}`}
      data-variant="display"
      style={{ maxWidth }}
    >
      <Heading className="gradient-heading mt-0 font-display text-heading-1 font-bold" style={italic ? { '--italic-offset': italicOffset } : undefined}>
        <span>{title}</span>
        {italic && (
          <span data-style="italic" className="section-heading__italic">
            {italic}
          </span>
        )}
      </Heading>
      {description && (
        <p className="m-0 w-4/5 text-lead-l font-light text-ink [text-wrap:balance] stack:w-full">{description}</p>
      )}
    </div>
  )
}
