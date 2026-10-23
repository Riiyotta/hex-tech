// Runtime 2D canvas backdrop for the PromptHero glass (product §4.5 #0 / §8 gap 1: the live
// AiIllustrationCanvas has no asset; this is a redraw). 1700×1700 backing store, placed by CSS at
// translate(-50%, -34%) from the glass bottom-centre (so canvas (850, 578) = glass bottom-centre).
// Drawing: ~46 nested contour lines forming the dome seen on capability-ai-1440-full.png (outer contour
// spans the glass width at its bottom edge and peaks ~530px above it; inner contours shrink toward a point
// below the prompt), stroked 1px in a low-alpha lavender (sampled line pixels ≈ rgb(45,45,62) on #14141C).
// A slow wobble drifts the contours continuously; static under prefers-reduced-motion.
import { useEffect, useRef, useState } from 'react'

const SIZE = 1700
const BASE_X = 850
const BASE_Y = 578
const COUNT = 46

function contour(ctx, i, t) {
  const k = i / (COUNT - 1) // 0 outer → 1 inner
  const s = 1 - k * 0.92
  const W = 710 * s // half width at the glass bottom
  const H = 540 * (0.25 + 0.75 * s) // peak height above the glass bottom
  const topY = BASE_Y - H + k * 210 // inner contours sit lower (funnel toward the bottom centre)
  const bottom = BASE_Y + 140
  const p = 1.8 + k * 0.8 // bell profile outside (measured: 0.71 of the peak height at 61% of the half width), squarer inside
  ctx.beginPath()
  const steps = 120
  for (let j = 0; j <= steps; j++) {
    const u = -1 + (2 * j) / steps // -1 … 1 across the width
    const shape = Math.pow(Math.max(0, 1 - Math.pow(Math.abs(u), p)), 1 / p)
    const wobble = Math.sin(u * 3.1 + i * 0.37 + t) * 4 * (1 - k) + Math.sin(u * 7.3 - i * 0.21 + t * 0.6) * 1.5
    const x = BASE_X + u * W * (1 + 0.04 * Math.sin(t * 0.5 + i))
    const y = bottom - (bottom - topY) * shape + wobble
    if (j === 0) ctx.moveTo(x, bottom + 200)
    ctx.lineTo(x, y)
  }
  ctx.lineTo(BASE_X + W, bottom + 200)
  ctx.stroke()
}

export default function AiCanvas() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0
    let start = performance.now()
    const draw = (now) => {
      const t = reduced ? 0 : (now - start) / 4000
      ctx.clearRect(0, 0, SIZE, SIZE)
      ctx.lineWidth = 1
      for (let i = 0; i < COUNT; i++) {
        const k = i / (COUNT - 1)
        ctx.strokeStyle = `rgba(150, 150, 220, ${0.24 - k * 0.1})`
        contour(ctx, i, t)
      }
      if (!reduced) raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)
    const show = requestAnimationFrame(() => setVisible(true))
    return () => {
      cancelAnimationFrame(raf)
      cancelAnimationFrame(show)
    }
  }, [])

  return <canvas ref={ref} className="pm-ai-canvas" width={SIZE} height={SIZE} data-visible={visible ? 'true' : 'false'} aria-hidden="true" />
}
