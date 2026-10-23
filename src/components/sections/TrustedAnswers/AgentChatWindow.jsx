// "Chat with the Hex Agent" window (InteractiveFeatureThreads). Static markup (project header, thread,
// charts) is the live DOM ported verbatim in ./partials; the behaviour is rebuilt here:
//  - 1s after mount the thread smooth-scrolls to the bottom (live: scrollTop 869.5 of 1417),
//  - Enter in the prompt bar appends the "hex-website-message" item and scrolls to it,
//  - the prompt bar keeps its focused ring after submit (live PromptBar quirk),
//  - intent-scroll pane + 8-bit cursor (see IntentScrollable / EightBitCursor).
import { useCallback, useEffect, useRef, useState } from 'react'
import { ProductWindow } from '../../shared/index.js'
import IntentScrollable from './IntentScrollable.jsx'
import EightBitCursor, { useHover } from './EightBitCursor.jsx'
import navbarHtml from './partials/agent-navbar.html?raw'
import threadHtml from './partials/agent-thread.html?raw'

const SIGNUP_LINK = 'https://app.hex.tech/signup'
const REQUEST_DEMO_LINK = '/request-a-demo/'

function WebsiteMessage() {
  return (
    <div className="ta-website-message">
      <div>
        If you'd like to use Threads,{' '}
        <a href={SIGNUP_LINK} rel="noopener noreferrer" target="_blank">
          get started for free
        </a>{' '}
        or <a href={REQUEST_DEMO_LINK}>request a demo.</a>
      </div>
    </div>
  )
}

function Icon({ name, children }) {
  return (
    <span data-icon="true" className="createIcon__Wrapper-sc-d80fed30-0 gLxMDc">
      <svg data-icon={name} height="15" viewBox="0 0 15 15" width="15">
        <desc>{name}</desc>
        <g strokeWidth="1">
          <g>{children}</g>
        </g>
      </svg>
    </span>
  )
}

function PromptBar({ onSubmit }) {
  const [focused, setFocused] = useState(false)
  const textareaRef = useRef(null)
  const justSubmitted = useRef(false)
  const submit = () => {
    onSubmit()
    if (textareaRef.current) {
      textareaRef.current.value = ''
      justSubmitted.current = true
      textareaRef.current.blur()
    }
  }
  return (
    <div className="PromptBar__Wrapper-sc-df69b08a-0 khIrzp">
      <div className="PromptBar__Inner-sc-df69b08a-1 csRjKI" data-focused={focused ? 'true' : 'false'}>
        <textarea
          ref={textareaRef}
          placeholder="Ask another question..."
          className="PromptBar__Textarea-sc-df69b08a-2 cvidKk"
          onFocus={() => setFocused(true)}
          onBlur={() => {
            if (!justSubmitted.current) setFocused(false)
            justSubmitted.current = false
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault()
              submit()
            }
          }}
        />
        <div className="PromptBar__BottomBar-sc-df69b08a-3 DNXBi">
          <div className="PromptBar__BottomBarGroup-sc-df69b08a-4 bbgAfD">
            <div className="HexTooltip__Wrapper-sc-a2fa5832-0 LqLin">
              <div className="HexButton__Wrapper-sc-2bf5efa3-0 kliXHe">
                <Icon name="plus">
                  <path d="M8 7H13V8H8V13H7V8H2V7H7V2H8V7Z" fill="currentColor" />
                </Icon>
              </div>
            </div>
          </div>
          <div className="PromptBar__BottomBarGroup-sc-df69b08a-4 bbgAfD">
            <div className="HexTooltip__Wrapper-sc-a2fa5832-0 LqLin">
              <div className="HexButton__Wrapper-sc-2bf5efa3-0 bFubij">
                <span>NexaCorp Galactic Warehouse</span>
                <Icon name="chevron-down">
                  <path
                    clipRule="evenodd"
                    d="M4.50001 5.79289L7.50001 8.79289L10.5 5.79289L11.2071 6.5L7.50001 10.2071L3.79291 6.5L4.50001 5.79289Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </Icon>
              </div>
            </div>
            <div className="HexButton__Wrapper-sc-2bf5efa3-0 kliXHe" onClick={submit}>
              <Icon name="enter">
                <path
                  clipRule="evenodd"
                  d="M9 3.5C9 3.22386 9.22386 3 9.5 3H13C13.5523 3 14 3.44772 14 4V9C14 9.55228 13.5523 10 13 10H3.70711L5.85355 12.1464C6.04882 12.3417 6.04882 12.6583 5.85355 12.8536C5.65829 13.0488 5.34171 13.0488 5.14645 12.8536L2.14645 9.85355C1.95118 9.65829 1.95118 9.34171 2.14645 9.14645L5.14645 6.14645C5.34171 5.95118 5.65829 5.95118 5.85355 6.14645C6.04882 6.34171 6.04882 6.65829 5.85355 6.85355L3.70711 9H13V4H9.5C9.22386 4 9 3.77614 9 3.5Z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </Icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Props: title (tab label, default 'Chat with the Hex Agent'; BI 'Conversational self-serve'), titleAlign ('left' | 'right').
export default function AgentChatWindow({ title = 'Chat with the Hex Agent', titleAlign = 'left' }) {
  const anchorRef = useRef(null)
  const scrollRef = useRef(null)
  const firstRender = useRef(true)
  const [messages, setMessages] = useState(0)
  const hovering = useHover(anchorRef, { parent: true })

  useEffect(() => {
    const t = setTimeout(() => {
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
    }, 1000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    requestAnimationFrame(() => {
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
    })
  }, [messages])

  const handleSubmit = useCallback(() => setMessages((n) => n + 1), [])

  return (
    <ProductWindow
      title={title}
      titleAlign={titleAlign}
      guides={['left', 'top']}
      interactive
      role="group"
      aria-label="Product demonstration of a Hex thread answering a revenue question"
      className="ta-mock HomeTrustedAnswers-module__G5svba__agentView h-full max-h-[1000px] w-full max-w-[1000px]"
    >
      <div className="contents" dangerouslySetInnerHTML={{ __html: navbarHtml }} />
      <IntentScrollable ref={scrollRef} className="InteractiveFeatureThreads__Content-sc-f034a8de-1 klgxGi">
        <div className="contents" dangerouslySetInnerHTML={{ __html: threadHtml }} />
        {Array.from({ length: messages }, (_, i) => (
          <WebsiteMessage key={i} />
        ))}
      </IntentScrollable>
      <PromptBar onSubmit={handleSubmit} />
      <span ref={anchorRef} hidden />
      <EightBitCursor isHovering={hovering} />
    </ProductWindow>
  )
}
