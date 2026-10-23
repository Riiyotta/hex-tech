// CycleArrows (CLONE_SPEC §4.5): 8 concentric 3/4-arcs (r = 260 × 0.86…1 in a 560 viewBox) with an arrowhead
// marker at the start. Ported from the live bundle: each arc loops pathLength .05 ↔ .15 (15–20s, reverse
// repeat) while rotating 0 → 360° (12–18s), both linear with negative delays so the arcs start out of phase.
// The static svg/illustrations/org-cycle-arrows.svg asset is a single frame of this animation.
import { useId } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const GOLDEN = 0.6180339887498949
const lerp = (v, [a, b]) => a + (b - a) * v

const ARCS = Array.from({ length: 8 }, (_, i) => ({
  i,
  p: i / 7,
  r: lerp(i / 7, [0.86, 1]),
  v: ((i + 1) * GOLDEN) % 1,
}))

function arcPath(radius) {
  const tau = Math.PI * 2
  return `
    M ${Math.cos(0) * radius + 280} ${Math.sin(0) * radius + 280}
    A ${radius},${radius} 0 1 0 ${Math.cos(0.25 * tau) * radius + 280} ${Math.sin(0.25 * tau) * radius + 280}
  `
}

export default function CycleArrows({ className = '' }) {
  const reduce = useReducedMotion()
  const markerId = `cycle-arrow-${useId().replace(/:/g, '')}`

  return (
    <svg className={`cycle-arrows ${className}`} height="560" viewBox="0 0 560 560" width="560" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <marker
          className="cycle-arrows__marker"
          fill="none"
          id={markerId}
          markerHeight="6"
          markerWidth="6"
          orient="auto-start-reverse"
          refX="5"
          refY="5"
          viewBox="0 0 10 10"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" />
        </marker>
      </defs>
      {ARCS.map((arc) => {
        const rotateDuration = lerp(arc.v, [12, 18])
        return (
          <motion.path
            key={arc.i}
            className="cycle-arrows__path"
            d={arcPath(260 * arc.r)}
            fill="none"
            markerStart={`url(#${markerId})`}
            strokeWidth="1"
            animate={reduce ? { pathLength: 0.15, rotate: 360 * arc.p } : { pathLength: [0.05, 0.15], rotate: [0, 360] }}
            transition={
              reduce
                ? { duration: 0 }
                : {
                    duration: lerp(arc.v, [15, 20]),
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'linear',
                    delay: -1 * arc.v,
                    rotate: { duration: rotateDuration, repeat: Infinity, ease: 'linear', delay: -arc.p * rotateDuration },
                  }
            }
          />
        )
      })}
    </svg>
  )
}
