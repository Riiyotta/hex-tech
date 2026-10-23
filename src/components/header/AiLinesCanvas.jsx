// Usage: <AiLinesCanvas visible={isPlatformMenuOpen} />
// Stand-in for the live AiIllustrationCanvas (CLONE_SPEC §7 gap 1): a 1000×1000 2D canvas of nested
// rose (#F5C0C0) line curves forming the soft "peak" seen in hex-1440-nav-platform-open.png, with a slow
// wave drift. Placement/entrance mirror AiIllustrationCanvas__Canvas: left/top 50%, translate(-50%,-34%),
// hidden = opacity 0 + scale(.96) rotateZ(-14deg); transition delay .2s, 856.56ms spring linear().
import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

const SIZE = 1000
const LINE_COUNT = 60
const LINE_GAP = 5

// --ai-illo-transition-timing-function from AiIllustrationCanvas__Canvas, copied verbatim.
const AI_ILLO_EASING =
  'linear(0 0%, 0.002214 1%, 0.008544 2%, 0.018541 3%, 0.031789 4%, 0.047899 5%, 0.066508 6%, 0.087281 7.000000000000001%, 0.109907 8%, 0.134099 9%, 0.159592 10%, 0.186142 11%, 0.213526 12%, 0.24154 13%, 0.269997 14.000000000000002%, 0.298729 15%, 0.327583 16%, 0.356421 17%, 0.385118 18%, 0.413565 19%, 0.441663 20%, 0.469326 21%, 0.496477 22%, 0.523051 23%, 0.54899 24%, 0.574248 25%, 0.598782 26%, 0.622561 27%, 0.645557 28.000000000000004%, 0.667752 28.999999999999996%, 0.689129 30%, 0.709679 31%, 0.729397 32%, 0.748282 33%, 0.766337 34%, 0.783568 35%, 0.799983 36%, 0.815596 37%, 0.830419 38%, 0.844468 39%, 0.857762 40%, 0.87032 41%, 0.882161 42%, 0.893308 43%, 0.903782 44%, 0.913608 45%, 0.922807 46%, 0.931405 47%, 0.939424 48%, 0.946889 49%, 0.953825 50%, 0.960254 51%, 0.966201 52%, 0.971688 53%, 0.976739 54%, 0.981377 55.00000000000001%, 0.985623 56.00000000000001%, 0.989498 56.99999999999999%, 0.993024 57.99999999999999%, 0.996221 59%, 0.999108 60%, 1.001705 61%, 1.00403 62%, 1.0061 63%, 1.007933 64%, 1.009544 65%, 1.010949 66%, 1.012164 67%, 1.013202 68%, 1.014076 69%, 1.014801 70%, 1.015387 71%, 1.015846 72%, 1.016189 73%, 1.016428 74%, 1.01657 75%, 1.016626 76%, 1.016603 77%, 1.016511 78%, 1.016356 79%, 1.016146 80%, 1.015888 81%, 1.015586 82%, 1.015247 83%, 1.014877 84%, 1.014479 85%, 1.014059 86%, 1.013621 87%, 1.013168 88%, 1.012704 89%, 1.012232 90%, 1.011755 91%, 1.011276 92%, 1.010796 93%, 1.010318 94%, 1.009844 95%, 1.009376 96%, 1.008914 97%, 1.008461 98%, 1.008017 99%, 1.007584 100%)'

// rose-quartz token, read from the --roseQuartz custom property defined in index.css
function roseRgb() {
  const hex = getComputedStyle(document.documentElement).getPropertyValue('--roseQuartz').trim()
  const n = parseInt(hex.slice(1), 16)
  return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`
}

export default function AiLinesCanvas({ visible }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const rgb = roseRgb()
    let raf = 0
    let start = performance.now()

    const draw = (now) => {
      const t = reduced ? 0 : (now - start) / 1000
      ctx.clearRect(0, 0, SIZE, SIZE)
      ctx.lineWidth = 1
      for (let i = 0; i < LINE_COUNT; i++) {
        const k = i / (LINE_COUNT - 1)
        // nested softened "tents": each line's apex sits lower, so the flanks cross the visible band
        // (canvas y ≈ 290–390 inside the callout) at different x, producing the diagonal fans
        const apexY = 140 + i * LINE_GAP
        ctx.strokeStyle = `rgba(${rgb}, ${0.85 - k * 0.45})`
        ctx.beginPath()
        for (let x = -20; x <= SIZE + 20; x += 6) {
          const dx = x - SIZE / 2 - 40
          const tent = Math.sqrt(dx * dx + 90 * 90) - 90 // rounded peak
          const slope = dx < 0 ? 0.42 : 0.5
          const wave = Math.sin(x * 0.01 + t * 0.6 + i * 0.15) * (4 + k * 8)
          const y = apexY + tent * slope + wave
          if (x === -20) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.stroke()
      }
      if (!reduced && visible) raf = requestAnimationFrame(draw)
    }

    raf = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(raf)
  }, [visible, reduced])

  return (
    <div className="h-full w-full opacity-60">
      <canvas
        ref={ref}
        width={SIZE}
        height={SIZE}
        data-visible={visible ? 'true' : 'false'}
        className="absolute left-1/2 top-1/2"
        style={{
          width: SIZE,
          height: SIZE,
          transformOrigin: '50% 50%',
          opacity: visible ? 1 : 0,
          transform: visible
            ? 'translate(-50%, -34%) rotateZ(0deg)'
            : 'scale(0.96) translate(-50%, -34%) rotateZ(-14deg)',
          transitionProperty: 'opacity, transform',
          transitionDuration: '856.56ms',
          transitionTimingFunction: AI_ILLO_EASING,
          transitionDelay: '0.2s',
        }}
      />
    </div>
  )
}
