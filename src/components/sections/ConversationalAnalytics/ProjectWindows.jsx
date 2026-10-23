// §4.6 / §6.6 project windows, ported from the live bundle (HomeConversationalAnalyticsProjectWindows,
// FloatingPrompt, TypingText, HomeLoadingIndicator).
//
// Sequencing: one window has the "typing turn" at a time, round-robin over the windows that have >1 frame
// (1 → 2 → 3 → 4 → 1 …). When the section has entered view and a window gets its turn it waits 1100ms
// (500ms on later passes), advances to its next frame (wrapping 4 → 1), types that frame's prompt
// (60000 / (wpm × 5) ms per grapheme, wpm per word from the data, 420 by default), then — once the image has
// loaded — fades the new frame in on top of the old one (blur 8px/opacity 0 → blur 0/opacity 1, tween .3s,
// delay .2s, ease [.22,1,.36,1]). When that animation completes the old frame is dropped and the turn
// passes to the next window. ≤600px only the first two windows render.
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { ProductWindow } from '../../shared/index.js'
import Icon from '../ContextStudio/Icon.jsx'

function useMediaQuery(query) {
  const get = () => (typeof window !== 'undefined' ? window.matchMedia(query).matches : false)
  const [matches, setMatches] = useState(get)
  useEffect(() => {
    const mql = window.matchMedia(query)
    const onChange = () => setMatches(mql.matches)
    onChange()
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [query])
  return matches
}

const segmenter = typeof Intl !== 'undefined' && Intl.Segmenter ? new Intl.Segmenter(undefined, { granularity: 'grapheme' }) : null
const toGraphemes = (text) => (segmenter ? Array.from(segmenter.segment(text), ({ segment }) => segment) : Array.from(text))

// TypingText (cursor "typing": solid caret while typing, removed when done)
function TypingText({ cursor = 'hidden', onComplete, startAnimation = true, text, wordsPerMinute }) {
  const prefersReduced = useMediaQuery('(prefers-reduced-motion: reduce)')
  const onCompleteRef = useRef(onComplete)
  useEffect(() => {
    onCompleteRef.current = onComplete
  }, [onComplete])

  const graphemes = useMemo(() => toGraphemes(text), [text])
  const rates = useMemo(() => {
    let rate = 100
    let inWord = false
    let word = -1
    return graphemes.map((g) => {
      if (/\s/u.test(g)) {
        inWord = false
        return rate
      }
      if (!inWord) {
        word += 1
        inWord = true
        const next = wordsPerMinute?.[word]
        if (next !== undefined && Number.isFinite(next) && next > 0) rate = next
      }
      return rate
    })
  }, [graphemes, wordsPerMinute])

  const [state, setState] = useState({ startAnimation, text, visibleGraphemeCount: 0 })
  const isSameRun = state.startAnimation === startAnimation && state.text === text
  if (!isSameRun) setState({ startAnimation, text, visibleGraphemeCount: 0 })
  const count = isSameRun ? state.visibleGraphemeCount : 0
  const delay = 60000 / ((rates[count] ?? 100) * 5)

  const completion = useRef({ hasCompleted: false, startAnimation, text })

  useEffect(() => {
    if (!startAnimation || prefersReduced || count >= graphemes.length) return undefined
    const id = window.setTimeout(() => {
      setState((s) => ({
        startAnimation,
        text,
        visibleGraphemeCount: s.startAnimation === startAnimation && s.text === text ? s.visibleGraphemeCount + 1 : 1,
      }))
    }, delay)
    return () => window.clearTimeout(id)
  }, [graphemes.length, delay, prefersReduced, startAnimation, text, count])

  useEffect(() => {
    if (completion.current.startAnimation !== startAnimation || completion.current.text !== text) {
      completion.current = { hasCompleted: false, startAnimation, text }
    }
    if (!(startAnimation && (prefersReduced || count >= graphemes.length)) || completion.current.hasCompleted) return undefined
    completion.current.hasCompleted = true
    let second
    const first = window.requestAnimationFrame(() => {
      second = window.requestAnimationFrame(() => onCompleteRef.current?.())
    })
    return () => {
      window.cancelAnimationFrame(first)
      if (second !== undefined) window.cancelAnimationFrame(second)
    }
  }, [graphemes.length, prefersReduced, startAnimation, text, count])

  const visible = prefersReduced ? text : startAnimation ? graphemes.slice(0, count).join('') : ''
  const done = prefersReduced || count >= graphemes.length
  const showCursor = cursor !== 'hidden' && (prefersReduced || startAnimation) && (cursor === 'persistent' || !done)

  if (cursor === 'hidden') return <>{visible}</>
  return (
    <span className="typing-text">
      <span className="typing-text__visible">{visible}</span>
      {showCursor ? <span aria-hidden="true" className={`typing-text__cursor${done ? ' is-blinking' : ''}`} /> : null}
    </span>
  )
}

// FloatingPrompt: hidden full-text placeholder sizes the pill; the typed text overlays it and the label
// scrolls so the newest characters stay visible when the prompt is wider than the window.
function FloatingPrompt({ className = '', hasCompleted = false, onComplete, startAnimation, text, wordsPerMinute }) {
  const labelRef = useRef(null)
  const typedRef = useRef(null)

  useEffect(() => {
    const label = labelRef.current
    const typed = typedRef.current
    if (!label || !typed) return undefined
    const sync = () => {
      label.scrollLeft = typed.offsetWidth - label.clientWidth
    }
    sync()
    const observer = new ResizeObserver(sync)
    observer.observe(typed)
    observer.observe(label)
    return () => observer.disconnect()
  }, [text])

  return (
    <div className={`floating-prompt ${className}`}>
      <span ref={labelRef} aria-hidden="true" className="floating-prompt__label">
        <span className="floating-prompt__placeholder">{text}</span>
        <span ref={typedRef} className="floating-prompt__typed">
          {hasCompleted ? (
            text
          ) : (
            <TypingText cursor="typing" startAnimation={startAnimation} text={text} wordsPerMinute={wordsPerMinute} onComplete={onComplete} />
          )}
        </span>
      </span>
      <span className="floating-prompt__sr">{text}</span>
      <span aria-hidden="true" className="floating-prompt__icon">
        <Icon name="enter" />
      </span>
    </div>
  )
}

function LoadingIndicator({ className = '' }) {
  return (
    <span aria-hidden="true" className={`home-loading-indicator ${className}`}>
      <svg className="home-loading-indicator__glyph" fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="2" r="1.5" stroke="currentColor" />
        <circle cx="8" cy="14" r="1.5" stroke="currentColor" />
        <circle cx="3" cy="11" r="1.5" stroke="currentColor" />
        <circle cx="3" cy="5" r="1.5" stroke="currentColor" />
        <circle cx="13" cy="11" r="1.5" stroke="currentColor" />
        <circle cx="13" cy="5" r="1.5" stroke="currentColor" />
      </svg>
    </span>
  )
}

const FRAME_SHOWN = { filter: 'blur(0px)', opacity: 1 }
const FRAME_HIDDEN = { filter: 'blur(8px)', opacity: 0 }

function ProjectWindow({ hasSectionEnteredView, hasTypingTurn, prefersReducedMotion, sequence, onTypingTurnComplete }) {
  const [current, setCurrent] = useState(0)
  const [loadedSrc, setLoadedSrc] = useState(undefined)
  const [erroredSrc, setErroredSrc] = useState(undefined)
  const [typedSrcs, setTypedSrcs] = useState(() => (sequence[0]?.src ? [sequence[0].src] : []))
  const [hasStarted, setHasStarted] = useState(false)
  const [isReadyForTurn, setIsReadyForTurn] = useState(true)
  const [revealed, setRevealed] = useState(0)
  const completedSrcRef = useRef(undefined)
  const timerRef = useRef(undefined)

  const { prompt, promptWordsPerMinute, src } = sequence[current] ?? {}
  const isTyped = !!src && typedSrcs.includes(src)
  const isTransitioning = revealed !== current
  const isLoaded = loadedSrc === src
  const isErrored = erroredSrc === src
  const showCurrent = !isTransitioning || ((!prompt || isTyped) && isLoaded)
  const frames = isTransitioning ? [revealed, current] : [current]

  const advanceTo = useCallback(
    (index) => {
      const nextSrc = sequence[index]?.src
      if (!nextSrc) return
      setHasStarted(true)
      setIsReadyForTurn(false)
      setErroredSrc(undefined)
      setLoadedSrc(undefined)
      setTypedSrcs((list) => list.filter((s) => s !== nextSrc))
      setCurrent(index)
    },
    [sequence],
  )

  const completeTurn = useCallback(
    (settle) => {
      if (
        hasStarted &&
        hasTypingTurn &&
        src &&
        completedSrcRef.current !== src &&
        prefersReducedMotion === false &&
        !(sequence.length <= 1)
      ) {
        if (settle) setRevealed(current)
        completedSrcRef.current = src
        setIsReadyForTurn(true)
        onTypingTurnComplete()
      }
    },
    [hasStarted, hasTypingTurn, onTypingTurnComplete, prefersReducedMotion, current, sequence.length, src],
  )

  const onPromptTyped = useCallback(
    (typedSrc) => {
      setTypedSrcs((list) => (list.includes(typedSrc) ? list : [...list, typedSrc]))
      if (isErrored || !isTransitioning) completeTurn(!isErrored)
    },
    [completeTurn, isErrored, isTransitioning],
  )

  useEffect(() => {
    if (!(hasSectionEnteredView && hasTypingTurn && isReadyForTurn && prefersReducedMotion === false && !(sequence.length <= 1))) {
      return undefined
    }
    timerRef.current = window.setTimeout(
      () => {
        timerRef.current = undefined
        advanceTo((current + 1) % sequence.length)
      },
      hasStarted ? 500 : 1100,
    )
    return () => {
      if (timerRef.current !== undefined) {
        window.clearTimeout(timerRef.current)
        timerRef.current = undefined
      }
    }
  }, [hasSectionEnteredView, hasStarted, hasTypingTurn, isReadyForTurn, advanceTo, prefersReducedMotion, current, sequence.length])

  if (!src) return null

  return (
    <figure className="project-window">
      <ProductWindow className="feature-window project-window__shell">
        {frames.map((index) => {
          const frame = sequence[index]
          const isCurrent = index === current
          const isVisible = !isCurrent || showCurrent
          const target = isVisible ? FRAME_SHOWN : FRAME_HIDDEN
          return (
            <motion.div
              key={frame.src}
              data-reveal=""
              className={isCurrent ? 'project-window__frame' : 'project-window__frame-revealed'}
              initial={target}
              animate={target}
              transition={{ delay: isVisible ? 0.2 : 0, duration: 0.3, ease: [0.22, 1, 0.36, 1], type: 'tween' }}
              onAnimationComplete={
                isCurrent && !prefersReducedMotion && hasStarted && isTyped && isLoaded ? () => completeTurn(true) : undefined
              }
            >
              <img
                alt={frame.alt ?? ''}
                className="project-window__image"
                height="870"
                width="1200"
                decoding="async"
                loading={hasSectionEnteredView ? 'eager' : 'lazy'}
                src={frame.src}
                onLoad={isCurrent ? () => setLoadedSrc(frame.src) : undefined}
                onError={
                  isCurrent
                    ? () => {
                        setErroredSrc(frame.src)
                        if (!prompt || isTyped) completeTurn(false)
                      }
                    : undefined
                }
              />
            </motion.div>
          )
        })}
        {isTyped && isTransitioning && !isLoaded && !isErrored ? <LoadingIndicator className="project-window__loading" /> : null}
      </ProductWindow>
      {prompt ? (
        <FloatingPrompt
          key={src}
          className="project-window__prompt"
          hasCompleted={isTyped}
          startAnimation={hasSectionEnteredView && !isTyped}
          text={prompt}
          wordsPerMinute={promptWordsPerMinute}
          onComplete={() => onPromptTyped(src)}
        />
      ) : null}
    </figure>
  )
}

function ProjectWindowGrid({ projectWindows, visibleCount }) {
  const prefersReducedMotion = !!useReducedMotion()
  const ref = useRef(null)
  const hasSectionEnteredView = useInView(ref, { once: true })
  const [turn, setTurn] = useState(0)
  const visible = projectWindows.slice(0, visibleCount)
  const animatable = visible.reduce((acc, sequence, index) => (sequence.length > 1 ? [...acc, index] : acc), [])
  const activeIndex = animatable.length ? animatable[turn % animatable.length] : undefined
  const onTypingTurnComplete = useCallback(() => setTurn((t) => t + 1), [])

  return (
    <div ref={ref} className="project-windows">
      <div aria-hidden="true" className="feature-dashed-lines">
        <div data-left="" className="feature-dashed-line" />
        <div data-right="" className="feature-dashed-line" />
      </div>
      {visible.map((sequence, index) => (
        <ProjectWindow
          key={index}
          hasSectionEnteredView={hasSectionEnteredView}
          hasTypingTurn={index === activeIndex}
          prefersReducedMotion={prefersReducedMotion}
          sequence={sequence}
          onTypingTurnComplete={onTypingTurnComplete}
        />
      ))}
    </div>
  )
}

export default function ProjectWindows({ projectWindows }) {
  const isSmall = useMediaQuery('(max-width: 600px)')
  const visibleCount = isSmall ? 2 : 4
  // keyed like the original so the sequence restarts cleanly when crossing the 600px breakpoint
  return <ProjectWindowGrid key={visibleCount} projectWindows={projectWindows} visibleCount={visibleCount} />
}
