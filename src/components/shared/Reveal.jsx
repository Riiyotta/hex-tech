// Usage: <Reveal as="section" className="...">…</Reveal>  (fades in once: opacity 0→1, y 5→0)
// CLONE_SPEC §6.2 ANIMATIONS.SimpleFadeIn: Framer whileInView, viewport once, spring delay .2 / duration .45 / bounce 0.
// Pass `animateOnMount` for the hero, which runs the same transition on load instead of on scroll.
import { motion } from 'framer-motion'

export const SIMPLE_FADE_IN = {
  initial: { opacity: 0, y: 5 },
  visible: { opacity: 1, y: 0 },
  transition: { type: 'spring', delay: 0.2, duration: 0.45, bounce: 0 },
}

export default function Reveal({ as = 'div', animateOnMount = false, children, ...rest }) {
  const Component = motion[as] ?? motion.div
  const trigger = animateOnMount
    ? { animate: SIMPLE_FADE_IN.visible }
    : { whileInView: SIMPLE_FADE_IN.visible, viewport: { once: true } }

  return (
    <Component
      data-reveal=""
      initial={SIMPLE_FADE_IN.initial}
      transition={SIMPLE_FADE_IN.transition}
      {...trigger}
      {...rest}
    >
      {children}
    </Component>
  )
}
