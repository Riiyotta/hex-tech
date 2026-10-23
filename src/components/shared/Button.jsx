// Usage: <Button variant="primary" size="lg" href="https://app.hex.tech/signup">Get started for free</Button>
// CLONE_SPEC §3.1. variant: 'primary' (gradient border + rose fill + corner circles) | 'secondary'
// (1px grid-500 border, transparent). size: 'lg' (48px, hero/CTA) | 'md' (40px, feature CTAs) | 'sm' (36px) | 'nav' (36px).
// Styles live in index.css (.hex-btn); dark values come from the [data-theme] vars (specs/product.md §1.1).
//
// Extension props (all optional, defaults render exactly as before):
//   icon          node, a leading icon (Button__Icon: 15×15 flex box, colour --fg1200, gap 10 from the label;
//                 company §2 / §4.1 "See open roles" headphones icon). Pass iconSize={24} for the solutions-hub
//                 filter chips (solutions §4.1.2) or 28 for the customers filter (company §2).
//   iconPosition  'start' (default) | 'end' (icon after the label, e.g. the InstallScript copy icon).
//   selected      boolean: filter-chip selected state (bg --fg1200, label/icon --bg300; solutions §4.1.2).
//                 Also sets aria-pressed on <button>s.
//   corners       force the hover corner-line brackets on/off. Default: on for lg/nav, off for md
//                 (the homepage md feature CTAs have none). Pass corners on md for the About/Careers/Story
//                 secondary md buttons (company §2).
//   block         stretch to the container width (solutions §4.2.2 full-width 375px feature CTA).
//   circles       force the primary corner circles on/off. Default: on for lg/nav primaries, off for md. Pass
//                 `circles` on md primaries that render CornerCircles live (V1 hero/panel CTAs, notebooks ForTeams,
//                 capability-ai hero, pricing Team CTA).
//   labelColor    'loud' (primary default) | 'body' (--fontColorDEFAULT, e.g. the pricing PlanHeader buttons).
//                 Secondary buttons are already 'body'.
//   labelSize     'default' (14/21.994) | 'small' (12/18.852: pricing comparison-table CTAs, template filter chips).
//   boxSizing     'content' (default: height/width exclude the 1px border, 40 + 2 = 42 tall at md) |
//                 'border' (the height includes the border: 40 tall at md; with `block` the width is 100%).
//   external      adds target="_blank" rel="noopener noreferrer".
// size also accepts 'sm' (36px, padding 0 20px: pricing comparison-table CTAs).

export default function Button({
  variant = 'primary',
  size = 'lg',
  href,
  external = false,
  icon,
  iconPosition = 'start',
  iconSize = 15,
  selected,
  corners,
  block = false,
  circles,
  labelColor,
  labelSize,
  boxSizing,
  className = '',
  children,
  ...rest
}) {
  const Tag = href ? 'a' : 'button'
  const linkProps = href
    ? { href, ...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {}) }
    : { type: rest.type ?? 'button', ...(selected !== undefined ? { 'aria-pressed': !!selected } : {}) }
  // The live 'md' feature-section CTAs (.knpLay) render without corner lines or circles.
  const showLines = corners ?? (size !== 'md' && size !== 'sm')
  const showCircles = variant === 'primary' && (circles ?? (size !== 'md' && size !== 'sm'))
  const iconNode = icon ? (
    <span className="hex-btn__icon" style={{ width: iconSize, height: iconSize }} aria-hidden="true">
      {icon}
    </span>
  ) : null

  return (
    <Tag
      className={`hex-btn ${className}`}
      data-variant={variant}
      data-size={size}
      data-selected={selected ? '' : undefined}
      data-block={block ? '' : undefined}
      data-label-color={labelColor}
      data-label-size={labelSize === 'small' ? 'small' : undefined}
      data-box={boxSizing === 'border' ? 'border' : undefined}
      {...linkProps}
      {...rest}
    >
      <div className="hex-btn__inner">
        {showLines && (
          <div className="hex-btn__lines" aria-hidden="true">
            <span data-corner="tl" />
            <span data-corner="tr" />
            <span data-corner="bl" />
            <span data-corner="br" />
          </div>
        )}
        {iconPosition === 'start' && iconNode}
        <div className="hex-btn__label">{children}</div>
        {iconPosition === 'end' && iconNode}
        {showCircles && (
          <div className="hex-btn__circles" data-which="corner-circles" aria-hidden="true">
            <span data-side="left" />
            <span data-side="right" />
          </div>
        )}
      </div>
    </Tag>
  )
}
