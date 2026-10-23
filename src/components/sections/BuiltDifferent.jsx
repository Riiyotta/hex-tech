// CLONE_SPEC §4.3: "A different approach to Analytics and BI".
// Section (overflow hidden, h 362 @1440) with the 2220×585 orbit SVG centred behind the copy
// (preserveAspectRatio slice → cropped to the 1382px column). The SVG markup is the live inline
// SVG, injected as-is so the bubble `g[filter]` groups can pop in (§6.4) once the illustration
// enters view. The whole block uses the §6.2 Reveal.
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { Reveal } from '../shared/index.js'
import orbitsSvg from './BuiltDifferent/orbits.svg?raw'
import './BuiltDifferent/BuiltDifferent.css'

export default function BuiltDifferent() {
  const illustrationRef = useRef(null)
  const revealed = useInView(illustrationRef, { once: true })

  return (
    <Reveal>
      <section
        data-section="BuiltDifferent"
        className="bd-section relative flex w-full justify-center overflow-hidden"
      >
        <div
          ref={illustrationRef}
          aria-hidden="true"
          data-revealed={revealed ? 'true' : 'false'}
          className="bd-illustration pointer-events-none absolute inset-0 flex items-center [&>svg]:block"
          dangerouslySetInnerHTML={{ __html: orbitsSvg }}
        />
        <div className="bd-content relative z-[1] mx-auto flex max-w-[996px] flex-col items-center gap-[16px] text-center">
          <h2 className="gradient-heading text-balance font-display text-heading-1 font-bold text-ink-loud">
            A different approach to Analytics and BI
          </h2>
          <p className="m-0 max-w-[760px] text-pretty text-lead-l font-light">
            BI tools, chat apps, and vibe-coding only give you inconsistent answers and poor user experience. Hex is
            built with a full suite of tools to unlock your team's curiosity while maintaining trust and governance.
          </p>
        </div>
      </section>
    </Reveal>
  )
}
