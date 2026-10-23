// Usage: <Rotator items={['Product', 'Marketing', …]} itemHeight={121} width="100%" renderItem={(w) => <h2 …>{w}</h2>} />
// The live site's Rotator (Rotator__Wrapper / __Inner / __Option), generalized from the footer EmojiRotator
// (CLONE_SPEC §6.8; solutions §4.1.1 hub hero word rotator measured with the same mechanism):
// every `interval` ms (1200) the column slides up one `itemHeight` slot (transform `moveDuration`, --animation-easing);
// the outgoing option fades out over `fadeOutDuration` and the incoming one fades in over `fadeInDuration`.
// `interval` ms later the first option moves to the end and the transform snaps back to 0 (no transition).
// Paused under prefers-reduced-motion.
//
// Props: items (array), itemHeight (px), width (px | CSS length; default = itemHeight, i.e. a square window),
//   renderItem(item, index) → node (default: the item itself), getKey(item) (default String(item)),
//   interval (ms, default 1200), moveDuration / fadeOutDuration / fadeInDuration (CSS times; defaults are the
//   footer vars .8s / .8s / 1.76s; the hub hero measured fadeOutDuration "0.3636s"),
//   className (wrapper), optionClassName (each option).
//   measureRef + maxWidth: container-measured width. The window takes min(maxWidth, floor(measureRef.current.clientWidth))
//     and follows it with a ResizeObserver (hub hero: the 820px window capped to the content column); `width` is
//     ignored when measureRef is given. Initial width = maxWidth.
//   fade (default true): false keeps every option at opacity 1 (no fade, slide only: integrations "+ local files").
import { useEffect, useState } from 'react'

function useMeasuredWidth(ref, maxWidth) {
  const [w, setW] = useState(maxWidth)
  useEffect(() => {
    const el = ref?.current
    if (!el) return undefined
    const cap = maxWidth ?? Infinity
    const ro = new ResizeObserver(() => setW(Math.min(cap, Math.floor(el.clientWidth))))
    ro.observe(el)
    return () => ro.disconnect()
  }, [ref, maxWidth])
  return w
}

export default function Rotator({
  items,
  itemHeight,
  width: widthProp = itemHeight,
  measureRef,
  maxWidth,
  fade = true,
  renderItem = (item) => item,
  getKey = (item) => String(item),
  interval = 1200,
  moveDuration = 'var(--emoji-rotate-duration)',
  fadeOutDuration = 'var(--emoji-rotate-duration)',
  fadeInDuration = 'var(--emoji-fade-in-duration)',
  className = '',
  optionClassName = '',
}) {
  const measured = useMeasuredWidth(measureRef, maxWidth)
  const width = measureRef ? measured : widthProp
  const [order, setOrder] = useState(items)
  const [moving, setMoving] = useState(false)

  useEffect(() => {
    setOrder(items)
    setMoving(false)
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined
    let timer
    const schedule = (isMoving) => {
      timer = setTimeout(() => {
        if (isMoving) {
          setOrder((o) => [...o.slice(1), o[0]])
          setMoving(false)
        } else {
          setMoving(true)
        }
        schedule(!isMoving)
      }, interval)
    }
    schedule(false)
    return () => clearTimeout(timer)
    // items identity is the caller's responsibility (pass a module-level array)
  }, [items, interval])

  const optionStyle = (i) => {
    if (!fade) return { opacity: 1, transition: 'none' }
    if (i === 0) {
      return {
        opacity: moving ? 0 : 1,
        transition: moving ? `opacity ${fadeOutDuration} var(--animation-easing)` : 'none',
      }
    }
    if (i === 1) {
      return {
        opacity: moving ? 1 : 0,
        transition: moving ? `opacity ${fadeInDuration} var(--animation-easing)` : 'none',
      }
    }
    return { opacity: 0, transition: 'none' }
  }

  return (
    <div className={`relative flex flex-none overflow-hidden${className ? ` ${className}` : ''}`} style={{ width, height: itemHeight }}>
      <div
        className="flex h-auto min-h-0 w-auto min-w-0 flex-col"
        style={{
          transform: `translateY(${moving ? -itemHeight : 0}px)`,
          transition: moving ? `transform ${moveDuration} var(--animation-easing)` : 'none',
        }}
      >
        {order.map((item, i) => (
          <div
            key={getKey(item)}
            aria-hidden={i === 0 ? undefined : true}
            className={`${optionClassName ? `${optionClassName} ` : ''}flex min-h-0 min-w-0 flex-none items-center overflow-hidden`}
            style={{ width, height: itemHeight, ...optionStyle(i) }}
          >
            {renderItem(item, i)}
          </div>
        ))}
      </div>
    </div>
  )
}
