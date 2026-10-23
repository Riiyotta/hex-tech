// Usage: <div className="pointer-events-none absolute inset-0 z-[-1]"><CartesianGrid /></div>
// CartesianGrid__UnitGrid (CLONE_SPEC §4.1 hero backdrop; extracted from Hero.jsx as company §2 asks; product §4.2
// CLI hero reuses it): absolutely filling 32px unit grid drawn by two 1px line masks (mask-size 32, position centre
// bottom) over a radial tint (highlight 5% → 20%: eggplant on light, rose on dark), faded in from 10% downward by
// the verbatim CartesianGrid__UnitGridMask ramp (.cartesian-grid / .cartesian-grid__fade in index.css).
// Props: className (extra classes on the .cartesian-grid root).
export default function CartesianGrid({ className = '' }) {
  return (
    <div className={`cartesian-grid${className ? ` ${className}` : ''}`}>
      <div className="cartesian-grid__fade">
        <div className="absolute inset-0 bg-cartesian-tint" />
      </div>
    </div>
  )
}
