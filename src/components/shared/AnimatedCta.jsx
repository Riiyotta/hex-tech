// Usage:
//   <AnimatedCta href="/careers/" icon={<ArrowTrendIcon />}>See open roles</AnimatedCta>             (company About / Careers hero)
//   <AnimatedCta href="#" color="default" onClick={openVideo}>Watch the video</AnimatedCta>          (product VideoHero primary)
//   <AnimatedCta variant="secondary" href="/request-a-demo/">Request a demo</AnimatedCta>             (product VideoHero secondary)
// One component for company §3.3 P3 AnimatedCta (Cta__PrimaryCta + Accents) and product §2.2 N8 Cta buttons
// (Cta__PrimaryAnchor / Cta__SecondaryAnchor + Cta__Accents): same accents DOM and CSS on the live site.
//   Anchor: flex / items-center / gap 16 / radius 1 / nowrap, font clamp(1rem, .7797rem + .4405vw, 1.25rem)
//   (18.82px @1440) line-height 1.5, padding clamp(8,…,14) clamp(18,…,22) clamp(8,…,14) clamp(6,…,14)
//   (symmetric when there is no icon). Box ≈220×66 with the 36px icon circle.
//   primary: gradient border (fg100 inner + 45° highlight → #AD8EB6), glass popover shadow (light) / dark glass
//     shadow (dark), ::after fill = the button fill at opacity .2 (hover .3, active .6, .25s); label colour
//     --fontColorLOUD (company) or --fontColorDEFAULT with color="default" (product Cta__PrimaryAnchor).
//   secondary (product only): 1px dashed --fontColorMUTED, bg --bg300, label --fg1200, ls .25px, drop shadow,
//     paper-texture ::after; hover filter brightness(1.13) (.3s). No accents.
//   Accents (primary only): four 14px circles (1px --fg1000: #9C959F / #786065) centred on the corners; on hover
//     they scale to 0 (.3s cubic-bezier(1,-.4,.35,.95), staggered by 40ms); four 1px corner-line tracks 4px outside
//     the box, each with three 14px dashes, fade in and sweep one track-length (.4s out-cubic) on hover.
//   icon: node shown in the 36px round icon wrapper (1px --fg1200 border, --fg1200 colour; hover brightness 1.1).
// Props: href, variant 'primary' | 'secondary', color 'loud' | 'default', icon, external, onClick, className, children.
const CIRCLES = ['tl', 'tr', 'bl', 'br']
const TRACKS = ['t', 'r', 'b', 'l']

function Anchor({ href, variant, color, icon, external, className = '', children, ...rest }) {
  const Tag = href ? 'a' : 'button'
  return (
    <Tag
      href={href}
      type={href ? undefined : 'button'}
      className={`animated-cta__anchor ${className}`}
      data-variant={variant}
      data-no-icon={icon ? undefined : ''}
      style={color === 'default' ? { '--cta-color': 'var(--fontColorDEFAULT)' } : undefined}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {icon && <span className="animated-cta__icon">{icon}</span>}
      <span>{children}</span>
    </Tag>
  )
}

export default function AnimatedCta({ variant = 'primary', color = 'loud', className = '', ...props }) {
  if (variant === 'secondary') {
    return (
      <div className={`animated-cta ${className}`}>
        <Anchor variant="secondary" color={color} {...props} />
      </div>
    )
  }
  return (
    <div className={`animated-cta ${className}`}>
      {CIRCLES.map((pos, i) => (
        <div key={pos} className="animated-cta__circle" data-position={pos} style={{ '--i': i }} aria-hidden="true" />
      ))}
      <div className="animated-cta">
        {TRACKS.map((pos, i) => (
          <div key={pos} className="animated-cta__track" data-position={pos} style={{ '--i': i }} aria-hidden="true">
            <div className="animated-cta__lines" data-position={pos}>
              <div className="animated-cta__line" data-order="1" />
              <div className="animated-cta__line" data-order="2" />
              <div className="animated-cta__line" data-order="3" />
            </div>
          </div>
        ))}
        <Anchor variant="primary" color={color} {...props} />
      </div>
    </div>
  )
}
