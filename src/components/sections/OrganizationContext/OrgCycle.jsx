// Compounding-context cycle (CLONE_SPEC §4.5, motion §6.7). Ported from HomeOrganizationContextCycle:
// disc with always-on Perlin noise, animated CycleArrows, centre copy that swaps through AnimatePresence
// (enter: opacity 0 / blur 3px / translateY 4px → rest with Framer's default transition; exit instant),
// and three step buttons placed on the ring. Hover/focus/click activates a step (noise overlay fades in
// over the 500ms hover spring, label fill turns the step colour over .16s); leave/blur clears it.
import { useId, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { PerlinNoise } from '../../shared/index.js'
import CycleArrows from './CycleArrows.jsx'

const STEPS = [
  {
    title: 'Build apps + ask questions',
    label: 'Build apps + ask questions',
    description: 'Ask questions and publish apps and dashboards grounded in your organization’s shared context.',
    hoverColor: 'var(--jade)',
    hoverNoise: 'url(/assets/textures/noise-jade-128x128.png)',
    illustration: '/assets/svg/illustrations/org-step-1.svg',
    illustrationWidth: 73,
  },
  {
    title: 'Auto-detect gaps',
    label: 'Auto-detect gaps',
    description: 'Hex learns from every interaction, flagging missing or thin context and suggesting concrete fixes.',
    hoverColor: 'color-mix(in srgb, var(--citrine) 40%, var(--obsidian))',
    hoverNoise: 'url(/assets/textures/noise-citrine-128x128.png)',
    illustration: '/assets/svg/illustrations/org-step-2.svg',
    illustrationWidth: 98,
  },
  {
    title: 'Sharpen the context',
    label: 'Sharpen the context',
    description:
      'Review and apply suggested fixes to guides, endorsements, and models, strengthening context for the next answer.',
    hoverColor: 'var(--violetTopaz)',
    hoverNoise: 'url(/assets/textures/noise-amythyst-128x128.png)',
    illustration: '/assets/svg/illustrations/org-step-3.svg',
    illustrationWidth: 98,
  },
]

// TextOnPath (diameter 178): text runs along a circle of r = d/2 − 20, centred at the bottom (startOffset 75%).
function StepLabel({ children }) {
  const id = `step-label-${useId().replace(/:/g, '')}`
  const diameter = 178
  const r = 0.5 * diameter - 20
  const c = diameter / 2
  return (
    <svg className="org-cycle__step-label-path" height={diameter} viewBox={`0 0 ${diameter} ${diameter}`} width={diameter}>
      <defs>
        <path
          d={`
              M ${c},${c}
              m ${r}, 0
              a ${r},${r} 0 1,0 -${2 * r},0
              a ${r},${r} 0 1,0  ${2 * r},0`}
          id={id}
        />
      </defs>
      <text className="org-cycle__step-label-text">
        <textPath startOffset="75%" textAnchor="middle" href={`#${id}`}>
          {children}
        </textPath>
      </text>
    </svg>
  )
}

export default function OrgCycle() {
  const reduce = useReducedMotion()
  const [active, setActive] = useState(null)
  const step = active === null ? null : STEPS[active]
  const clear = (index) => setActive((current) => (current === index ? null : current))

  return (
    <div className="org-cycle">
      <div className="org-cycle__disc">
        <PerlinNoise size={512} hoverDuration="500ms" />
      </div>
      <div aria-live="polite" className="org-cycle__center">
        <AnimatePresence>
          <motion.div
            key={active ?? 'default'}
            data-reveal=""
            className="org-cycle__center-content"
            initial={{ opacity: 0, filter: 'blur(3px)', transform: 'translateY(4px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)', transform: 'translateY(0px)' }}
            exit={{ opacity: 0, filter: 'blur(3px)', transition: { duration: 0 } }}
            transition={reduce ? { duration: 0 } : undefined}
          >
            <span className="org-cycle__center-title">{step ? step.title : 'Compounding context'}</span>
            {step ? <span className="org-cycle__center-description">{step.description}</span> : null}
          </motion.div>
        </AnimatePresence>
      </div>
      <CycleArrows className="org-cycle__arrows" />
      {STEPS.map((s, index) => {
        const angle = (index / STEPS.length) * Math.PI * 2 + Math.PI
        const isActive = active === index
        return (
          <button
            key={s.title}
            type="button"
            className="org-cycle__step"
            aria-label={`${s.title}: ${s.label}`}
            aria-pressed={isActive}
            data-active={isActive ? 'true' : 'false'}
            style={{
              '--step-normal-x': Math.sin(-angle),
              '--step-normal-y': Math.cos(-angle),
              '--step-hover-color': s.hoverColor,
              '--step-hover-noise': s.hoverNoise,
              '--step-illustration-ratio': s.illustrationWidth / 560,
            }}
            onBlur={() => clear(index)}
            onClick={() => setActive(index)}
            onFocus={() => setActive(index)}
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => clear(index)}
          >
            <span className="org-cycle__step-noise" />
            <span className="org-cycle__step-illustration">
              <img src={s.illustration} alt="" draggable="false" />
            </span>
            <span aria-hidden="true" className="org-cycle__step-label">
              <StepLabel>{s.label}</StepLabel>
            </span>
          </button>
        )
      })}
    </div>
  )
}
