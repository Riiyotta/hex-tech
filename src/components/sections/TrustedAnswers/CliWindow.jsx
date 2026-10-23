// Hex CLI window (InteractiveFeatureCLI + InteractiveTerminal), rebuilt from the live component:
// boot transcript, a hidden <input> mirrored into the prompt row with a blinking block cursor
// (§6.9 terminal-cursor-blink 1.06s; brighter while the shell has focus), Enter runs the command
// table from the live bundle (help / submenu / docs / list / magic, braille spinner while "loading"),
// ArrowUp/Down walk the history, and the pane stays scrolled to the bottom.
// Props: bootScript — the transcript rendered on mount: [{ type: 'line', text } | { type: 'wait', ms, showLoading }]
//   (default: the homepage BOOT_SCRIPT). Line text starting with PROMPT_PREFIX ('→ ~') gets the prompt glyphs; ids
//   like (019d4584) / "ID: <uuid>" render in the success green and URLs as links (product CLI hero passes its banner +
//   project create/run transcript). Dark pages theme the shell through the [data-theme='dark'] .ta-root vars in
//   TrustedAnswers.css.
import { Fragment, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import IntentScrollable from './IntentScrollable.jsx'
import {
  BOOT_SCRIPT,
  CLI_DOCS_LINK,
  COMMANDS,
  COMMAND_GROUPS,
  LINK_HREF_OVERRIDES,
  LISTS,
  LIST_LABELS,
  MAGIC_ART,
  PROMPT_PREFIX,
  SPINNER_FRAMES,
} from './cliData.js'

const wait = (ms) => new Promise((r) => window.setTimeout(r, ms))
const twoFrames = () => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(() => r())))

// --- box-drawing helpers (verbatim logic from the live terminal) ---
function boxRow(width, text) {
  const inner = width - 2 - 4
  let t = text
  if (t.length > inner) t = t.slice(0, Math.max(0, inner - 1)) + '…'
  return '│' + t.padEnd(inner) + ' '.repeat(4) + '│'
}
function boxTop(title, width) {
  const t = title.length > width ? title.slice(0, width) : title
  return '┌' + t + '─'.repeat(Math.max(0, width - t.length)) + '┐'
}
const boxBottom = (width) => '└' + '─'.repeat(Math.max(0, width - 2)) + '┘'
const boxWidth = (t1, rows1, t2, rows2) =>
  Math.max(t1.length, t2.length, Math.max(0, ...rows1.map((r) => r.length + 4), ...rows2.map((r) => r.length + 4)), 12)
function box(width, title, rows) {
  const top = boxTop(title, width)
  const w = top.length
  return [top, ...rows.map((r) => boxRow(w, r)), boxBottom(w)]
}
function usageAndCommands(appendLine, usage, commands) {
  const t1 = '─── Usage '
  const t2 = '─── Commands '
  const width = boxWidth(t1, usage, t2, commands)
  for (const l of box(width, t1, usage)) appendLine(l)
  for (const l of box(width, t2, commands)) appendLine(l)
  appendLine('')
}
function rootHelp(appendLine) {
  usageAndCommands(
    appendLine,
    ['  hex <command> [subcommand] [options]'],
    COMMAND_GROUPS.map((g) => `  ${g.id.padEnd(12)}${g.description}`),
  )
}
function runOutcome(cmd, appendLine) {
  switch (cmd.outcome.kind) {
    case 'rootHelp':
      rootHelp(appendLine)
      return
    case 'submenu': {
      if (!cmd.group) return
      const root = COMMANDS.find((c) => c.group === cmd.group && c.isGroupRoot && c.groupUsage)
      const usage = root?.groupUsage ?? `hex ${cmd.group} [command] [options]`
      const subs = COMMANDS.filter((c) => c.group === cmd.group && !c.isGroupRoot && c.subLabel && c.subHelp)
      const pad = Math.max(10, ...subs.map((c) => (c.subLabel ?? '').length + 2))
      usageAndCommands(
        appendLine,
        [`  ${usage}`],
        subs.map((c) => `  ${(c.subLabel ?? '').padEnd(pad)}${c.subHelp ?? ''}`),
      )
      return
    }
    case 'docs':
      appendLine('Check out our docs to learn more:')
      appendLine(CLI_DOCS_LINK)
      appendLine('')
      return
    case 'list': {
      const items = LISTS[cmd.outcome.list]
      const title = `─ ${LIST_LABELS[cmd.outcome.list]} - ${items.length} ─ `
      const rows = items.map((i) => ` ${i.name} (${i.id})`)
      const width = Math.max(46, title.length, ...rows.map((r) => r.length + 4))
      const top = boxTop(title, width)
      appendLine(top)
      for (const i of items) appendLine(boxRow(top.length, ` ${i.name} (${i.id})`))
      appendLine(boxBottom(top.length))
      appendLine('')
      return
    }
    case 'magic':
      for (const l of MAGIC_ART) appendLine(l)
      return
    default:
  }
}

// --- transcript line rendering: ids in success green, URLs as links ---
const ID_RE = /\(((?:conn_|col_|grp_|usr_)[a-z0-9]+|[0-9a-f]{8})\)|(ID:\s*)([0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}|[0-9a-f]{8})(?=\s*$|\s)/gi
const URL_RE = /https?:\/\/[^\s]+/gi

function highlightIds(text, key) {
  const out = []
  let last = 0
  let n = 0
  const re = new RegExp(ID_RE.source, ID_RE.flags)
  let m
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index))
    if (m[1] !== undefined) {
      out.push(<span key={`${key}-id-${n++}`} className="InteractiveTerminal-styles__TerminalId-sc-3ce23765-4 cpcPVx">{m[0]}</span>)
    } else if (m[3] !== undefined) {
      if (m[2]) out.push(m[2])
      out.push(<span key={`${key}-id-${n++}`} className="InteractiveTerminal-styles__TerminalId-sc-3ce23765-4 cpcPVx">{m[3]}</span>)
    }
    last = m.index + m[0].length
  }
  if (last < text.length) out.push(text.slice(last))
  return out
}
function linkify(part, key) {
  if (typeof part !== 'string') return part
  const out = []
  let last = 0
  let n = 0
  const re = new RegExp(URL_RE.source, URL_RE.flags)
  let m
  while ((m = re.exec(part)) !== null) {
    if (m.index > last) out.push(part.slice(last, m.index))
    const url = m[0]
    out.push(
      <a
        key={`${key}-url-${n++}`}
        href={LINK_HREF_OVERRIDES[url] ?? url}
        rel="noopener noreferrer"
        target="_blank"
        className="InteractiveTerminal-styles__TranscriptLink-sc-3ce23765-5 kusigZ"
      >
        {url}
      </a>,
    )
    last = m.index + url.length
  }
  if (last < part.length) out.push(part.slice(last))
  return out
}
function renderBody(text, key) {
  return highlightIds(text, key).map((p, i) => <Fragment key={i}>{linkify(p, `${key}-${i}`)}</Fragment>)
}
function PromptGlyphs() {
  return (
    <span className="InteractiveTerminal-styles__PromptGlyphs-sc-3ce23765-9 ilurOO">
      <span className="InteractiveTerminal-styles__PromptArrow-sc-3ce23765-10 JUUqY">→</span>{' '}
      <span className="InteractiveTerminal-styles__PromptTilde-sc-3ce23765-11 fmHVrY">~</span>{' '}
    </span>
  )
}
function renderLine(text, key) {
  if (!text || typeof text !== 'string') return text
  if (text.startsWith(PROMPT_PREFIX)) {
    return (
      <>
        <PromptGlyphs />
        {renderBody(text.slice(PROMPT_PREFIX.length), key)}
      </>
    )
  }
  return renderBody(text, key)
}

function useSpinner(active) {
  const [i, setI] = useState(0)
  useEffect(() => {
    if (!active) return undefined
    setI(0)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const id = window.setInterval(() => setI((n) => (n + 1) % SPINNER_FRAMES.length), 80)
    return () => window.clearInterval(id)
  }, [active])
  return active ? SPINNER_FRAMES[i] : SPINNER_FRAMES[0]
}

function InteractiveTerminal({ scrollRef, embedActive, inputRef, bootScript }) {
  const [lines, setLines] = useState([])
  const [input, setInput] = useState('')
  const [booting, setBooting] = useState(true)
  const [loading, setLoading] = useState(false)
  const [caret, setCaret] = useState(0)
  const [historyIndex, setHistoryIndex] = useState(null)
  const mounted = useRef(true)
  const busyRef = useRef(false)
  const history = useRef([])
  const draft = useRef('')
  const commandMap = useMemo(() => new Map(COMMANDS.map((c) => [c.match, c])), [])

  const appendLine = useCallback((l) => {
    if (mounted.current) setLines((prev) => [...prev, l])
  }, [])
  const syncCaret = useCallback(() => {
    const el = inputRef.current
    if (el && el.selectionEnd !== null) setCaret(Math.min(el.selectionEnd, el.value.length))
  }, [inputRef])
  const focus = useCallback(() => inputRef.current?.focus({ preventScroll: true }), [inputRef])

  useEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
    }
  }, [])

  // boot script
  useEffect(() => {
    let cancelled = false
    ;(async () => {
      busyRef.current = true
      setBooting(true)
      for (const step of bootScript) {
        if (cancelled) return
        if (step.type === 'line') setLines((prev) => [...prev, step.text])
        else {
          if (step.showLoading) {
            setLoading(true)
            await twoFrames()
          }
          await wait(step.ms)
          if (step.showLoading) setLoading(false)
        }
      }
      if (cancelled) return
      busyRef.current = false
      setBooting(false)
    })()
    return () => {
      cancelled = true
    }
  }, [])

  // keep pinned to the bottom
  useLayoutEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const pin = () => {
      el.scrollTop = Math.max(0, el.scrollHeight - el.clientHeight)
    }
    pin()
    requestAnimationFrame(pin)
  }, [lines, loading, booting, scrollRef])

  // the live terminal focuses its input once idle (preventScroll)
  useEffect(() => {
    if (booting || loading) return undefined
    const id = requestAnimationFrame(() => {
      focus()
      requestAnimationFrame(syncCaret)
    })
    return () => cancelAnimationFrame(id)
  }, [booting, loading, focus, syncCaret])

  const unknownCommand = useCallback(() => {
    appendLine('Command not recognized.')
    rootHelp(appendLine)
  }, [appendLine])

  const submit = useCallback(
    async (raw) => {
      const cmdText = raw.trim()
      if (busyRef.current || booting || loading || !cmdText) return
      const h = history.current
      if (!(h.length > 0 && h[h.length - 1] === cmdText)) history.current = [...h, cmdText].slice(-80)
      setHistoryIndex(null)
      draft.current = ''
      setInput('')
      setCaret(0)
      const cmd = commandMap.get(cmdText)
      if (!cmd) {
        appendLine(`${PROMPT_PREFIX}${cmdText}`)
        unknownCommand()
        return
      }
      busyRef.current = true
      setLoading(true)
      try {
        await twoFrames()
        await wait(cmd.loadingMs ?? 0)
        if (!mounted.current) return
        appendLine(`${PROMPT_PREFIX}${cmdText}`)
        setLoading(false)
        runOutcome(cmd, appendLine)
      } finally {
        busyRef.current = false
        if (mounted.current) setLoading(false)
      }
    },
    [appendLine, booting, commandMap, loading, unknownCommand],
  )

  const busy = booting || loading
  const onKeyDown = (e) => {
    const later = () => queueMicrotask(syncCaret)
    if (e.key === 'Enter') {
      e.preventDefault()
      submit(input)
      return
    }
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      if (busy) return
      const h = history.current
      if (h.length === 0) return later()
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        if (historyIndex === null) {
          draft.current = input
          const i = h.length - 1
          setHistoryIndex(i)
          setInput(h[i] ?? '')
          setCaret((h[i] ?? '').length)
        } else if (historyIndex > 0) {
          const i = historyIndex - 1
          setHistoryIndex(i)
          setInput(h[i] ?? '')
          setCaret((h[i] ?? '').length)
        }
        return
      }
      if (historyIndex === null) return later()
      e.preventDefault()
      if (historyIndex < h.length - 1) {
        const i = historyIndex + 1
        setHistoryIndex(i)
        setInput(h[i] ?? '')
        setCaret((h[i] ?? '').length)
      } else {
        setHistoryIndex(null)
        setInput(draft.current)
        setCaret(draft.current.length)
        draft.current = ''
      }
      return
    }
    later()
  }

  const spinner = useSpinner(loading)
  const c = Math.min(caret, input.length)
  const cursorChar = c < input.length ? input.charAt(c) : ' '

  return (
    <div
      aria-busy={busy || undefined}
      aria-label="CLI demo"
      role="region"
      tabIndex={-1}
      className="InteractiveTerminal-styles__Root-sc-3ce23765-0 cvGPMY"
      onMouseDown={focus}
    >
      <label htmlFor="interactive-terminal-input" className="InteractiveTerminal-styles__ScreenReaderLabel-sc-3ce23765-1 bWWpfm">
        Terminal demo: type a command and press Enter.
      </label>
      <div aria-live="polite" className="InteractiveTerminal-styles__Transcript-sc-3ce23765-2 jURkV">
        {lines.map((l, i) => (
          <div key={i} className="InteractiveTerminal-styles__TranscriptLine-sc-3ce23765-3 cjNdKt">
            {renderLine(l, i)}
          </div>
        ))}
      </div>
      {loading && (
        <div className="InteractiveTerminal-styles__PromptRow-sc-3ce23765-6 fQotlK">
          <span aria-hidden="true" className="InteractiveTerminal-styles__PromptPrefix-sc-3ce23765-8 fhOqGk">
            <span className="ta-terminal-loading">
              <span className="ta-terminal-braille">{spinner}</span>
              Loading…
            </span>
          </span>
        </div>
      )}
      {!booting && (
        <div className="InteractiveTerminal-styles__PromptRow-sc-3ce23765-6 fQotlK">
          <span aria-hidden="true" className="InteractiveTerminal-styles__PromptPrefix-sc-3ce23765-8 fhOqGk">
            <PromptGlyphs />
          </span>
          <div className="InteractiveTerminal-styles__InputArea-sc-3ce23765-14 eBxOBo">
            <input
              ref={inputRef}
              id="interactive-terminal-input"
              type="text"
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
              disabled={loading}
              value={input}
              className="InteractiveTerminal-styles__HiddenInput-sc-3ce23765-15 gkQNrO"
              onChange={(e) => {
                setInput(e.target.value)
                if (e.target.selectionEnd !== null) setCaret(Math.min(e.target.selectionEnd, e.target.value.length))
              }}
              onClick={syncCaret}
              onSelect={syncCaret}
              onKeyDown={onKeyDown}
            />
            <span aria-hidden="true" className="InteractiveTerminal-styles__VisibleInputMirror-sc-3ce23765-16 cYbYud">
              {input.slice(0, c)}
              <span className="InteractiveTerminal-styles__InputCursorSlot-sc-3ce23765-17 iVkqDG">
                <span className="InteractiveTerminal-styles__InputCursorCellChar-sc-3ce23765-18 hCGKDT">{cursorChar}</span>
                <span
                  aria-hidden="true"
                  data-embed-active={embedActive ? 'true' : 'false'}
                  className="InteractiveTerminal-styles__InputCursorBlock-sc-3ce23765-19 jsQixo"
                />
              </span>
              {input.slice(c + 1)}
            </span>
          </div>
        </div>
      )}
      <div aria-hidden="true" className="InteractiveTerminal-styles__ScrollEndSpacer-sc-3ce23765-7 jVfZsl" />
    </div>
  )
}

export default function CliWindow({ bootScript = BOOT_SCRIPT }) {
  const rootRef = useRef(null)
  const scrollRef = useRef(null)
  const inputRef = useRef(null)
  const [embedActive, setEmbedActive] = useState(false)

  // focus tracking: the cursor block is brighter while focus is inside the shell;
  // pointerdown outside blurs the input (live behaviour)
  useEffect(() => {
    const root = rootRef.current
    if (!root) return undefined
    const update = () => setEmbedActive(root.contains(document.activeElement))
    const onFocusOut = () => queueMicrotask(update)
    const onDocPointerDown = (e) => {
      if (!root.contains(e.target)) inputRef.current?.blur()
      queueMicrotask(update)
    }
    root.addEventListener('focusin', update)
    root.addEventListener('focusout', onFocusOut)
    document.addEventListener('pointerdown', onDocPointerDown)
    return () => {
      root.removeEventListener('focusin', update)
      root.removeEventListener('focusout', onFocusOut)
      document.removeEventListener('pointerdown', onDocPointerDown)
    }
  }, [])

  const onPointerDownCapture = (e) => {
    if (e.target instanceof HTMLInputElement && e.target.id === 'interactive-terminal-input') return
    const f = () => inputRef.current?.focus({ preventScroll: true })
    f()
    window.setTimeout(f, 0)
  }

  return (
    <div
      ref={rootRef}
      role="group"
      aria-label="Interactive demonstration of the Hex CLI"
      className="ta-mock InteractiveFeatureCLI__ShellRoot-sc-9db7323e-0 ldsHE HomeTrustedAnswers-module__G5svba__agentToolCLI"
      onPointerDownCapture={onPointerDownCapture}
    >
      <div className="Card__Wrapper-sc-44e78466-0 KbzOF InteractiveFeatureCLI__Shell-sc-9db7323e-1 dTAOke">
        <div className="InteractiveFeatureCLI__Toolbar-sc-9db7323e-4 bYgnRj">
          <div className="InteractiveFeatureWrapper-styles__BrowserWindowToolbar-sc-b5f0eae9-5 bJWoEx">
            <div className="InteractiveFeatureWrapper-styles__BrowserWindowButtons-sc-b5f0eae9-6 eZWbrp">
              <div className="InteractiveFeatureWrapper-styles__TrafficLight-sc-b5f0eae9-7 dERIju" />
              <div className="InteractiveFeatureWrapper-styles__TrafficLight-sc-b5f0eae9-7 dERIju" />
              <div className="InteractiveFeatureWrapper-styles__TrafficLight-sc-b5f0eae9-7 dERIju" />
            </div>
            <div className="InteractiveFeatureWrapper-styles__BrowserWindowTitle-sc-b5f0eae9-8 nlYtT annotation">Hex CLI</div>
            <div />
          </div>
        </div>
        <IntentScrollable ref={scrollRef} intentScroll={false} className="InteractiveFeatureCLI__Content-sc-9db7323e-2 dWPdTA">
          <div className="InteractiveFeatureCLI__TerminalScrollPad-sc-9db7323e-3 caVBZt">
            <InteractiveTerminal scrollRef={scrollRef} embedActive={embedActive} inputRef={inputRef} bootScript={bootScript} />
          </div>
        </IntentScrollable>
      </div>
      <div className="InteractiveFeatureWrapper-styles__DashedLines-sc-b5f0eae9-1 fbHGfk">
        <div data-top="true" className="InteractiveFeatureWrapper-styles__DashedLine-sc-b5f0eae9-2 cNvWGq" />
        <div data-left="true" className="InteractiveFeatureWrapper-styles__DashedLine-sc-b5f0eae9-2 cNvWGq" />
        <div data-right="true" className="InteractiveFeatureWrapper-styles__DashedLine-sc-b5f0eae9-2 cNvWGq" />
        <div data-bottom="true" className="InteractiveFeatureWrapper-styles__DashedLine-sc-b5f0eae9-2 cNvWGq" />
      </div>
    </div>
  )
}
