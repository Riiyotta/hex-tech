// Usage: <div className="absolute inset-0 opacity-80"><PerlinNoise /></div>   (hero/use-cases/ethos/disc: always drifting)
// CLONE_SPEC §3.5: wrapper (perspective 800, hover spring) → 6px dot-grid mask → texture div
// (noise-eggplant 128px tile at 1024px, opacity .24, `noise-drift 8s linear infinite`).
// Props: texture ('eggplant'|'rose'|'jade'|'citrine'|'amethyst'), size (background-size px), opacity,
// active ('always' | 'hover' – paused & hidden until hover/focus), hoverDuration (50ms default, 500ms for the org disc).
//
// Extension props (defaults render exactly as before):
//   duration   drift cycle (CSS time). Default: the global --noise-duration (8s). '16s' = half speed:
//              product context-studio hero jade (§4.3 #0), solutions pricing Team cards rose 512px (§4.4.2).
//   mask       'dots' (default, 6px dot grid) | 'none' (texture straight onto the wrapper; the caller masks it).
//   src        custom texture image URL instead of a `texture` tile, e.g. the product/blog Perlin sheet
//              '/assets/pages/product/_shared/perlin-noise.png' (N11 PerlinCallout) or
//              '/assets/pages/company/blog/perlin-noise.png' (blog primary card).
//   animation  'drift' (default: noise-drift, bg-position -512px -512px → 0 0) | 'translate'
//              (translate-bg: 0 0 → 0 -512px; PerlinCallout 48s, blog primary card 36s).
//   tint       optional background-color under the texture (PerlinCallout: 'color-mix(in srgb, var(--fg1200) 16%, transparent)').

const TEXTURES = {
  eggplant: 'bg-noise-eggplant',
  rose: 'bg-noise-rose',
  jade: 'bg-noise-jade',
  citrine: 'bg-noise-citrine',
  amethyst: 'bg-noise-amethyst',
}

export default function PerlinNoise({
  texture = 'eggplant',
  size = 1024,
  opacity = 0.24,
  active = 'always',
  hoverDuration = '50ms',
  duration,
  mask = 'dots',
  src,
  animation = 'drift',
  tint,
  className = '',
  children,
}) {
  const textureStyle = { backgroundSize: `${size}px ${size}px` }
  if (src) textureStyle.backgroundImage = `url(${src})`
  if (tint) textureStyle.backgroundColor = tint
  if (animation === 'translate') textureStyle.animationName = 'translate-bg'
  const textureEl = (
    <div className={`perlin-noise__texture ${src ? '' : TEXTURES[texture]}`} style={textureStyle} />
  )
  const wrapperStyle = { '--hover-transition-duration': hoverDuration, '--noise-opacity': opacity }
  if (duration) wrapperStyle['--noise-duration'] = duration

  return (
    <div className={`perlin-noise ${className}`} data-active={active} style={wrapperStyle}>
      {mask === 'dots' ? <div className="dot-grid-mask">{textureEl}</div> : textureEl}
      {children}
    </div>
  )
}
