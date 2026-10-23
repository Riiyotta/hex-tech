// Claude / Codex MCP demo (InteractiveFeatureMCP). Markup ported from the live DOM (Claude panel) and
// the live component source (Codex panel, not in the captured DOM because Claude is selected by default).
// The client chips toggle which panel is shown (§6.10 "Claude/Codex toggle switches the MCP window content").
import { useId, useRef, useState } from 'react'
import { ProductWindow } from '../../shared/index.js'
import IntentScrollable from './IntentScrollable.jsx'
import EightBitCursor, { useHover } from './EightBitCursor.jsx'

const ICONS = '/assets/icons/mcp'
const CLIENTS = [
  { id: 'claude', label: 'Claude', iconSrc: `${ICONS}/logo-claude.svg` },
  { id: 'codex', label: 'Codex', iconSrc: `${ICONS}/logo-chatgpt.svg` },
]
const REVENUE = { One: 42.3, Two: 38.7, Three: 33.1 }

export function HexLogo() {
  return (
    <svg fill="none" viewBox="0 0 52 20" xmlns="http://www.w3.org/2000/svg">
      <path
        clipRule="evenodd"
        d="M9 0V6.97333H7V0H0V5.65333V5.67333V12.3267V20H7V10H9V20H16V0H9ZM18 20H34V12H27V17H25V10H34V0H18V20ZM25 7V3H27V7H25ZM45 7V0H52V5L49 8.5L52 12V20H45V9.97333H43V20H36V12L39 8.5L36 5V0H43V7H45Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

// next/image renders with its width/height attributes as the used size; Tailwind preflight's
// `img { height: auto }` would otherwise let flex rows stretch these icons, so pin them.
function Img({ src, width, height, className }) {
  return (
    <img alt="" loading="eager" decoding="async" width={width} height={height} src={src} className={className} style={{ width, height }} />
  )
}

function Products({ prefix }) {
  return (
    <ul className={`${prefix}products`}>
      <li className={`${prefix}product`}>
        Teleportation field extenders — <strong>${REVENUE.One}M</strong>
      </li>
      <li className={`${prefix}product`}>
        Quantum drives — <strong>${REVENUE.Two}M</strong>
      </li>
      <li className={`${prefix}product`}>
        Wormhole initiators — <strong>${REVENUE.Three}M</strong>
      </li>
    </ul>
  )
}

function PromptBar({ prefix, placeholder }) {
  return (
    <div aria-hidden="true" className={`${prefix}promptBar`}>
      <div className={`${prefix}promptBarContent`}>
        <span className={`${prefix}placeholder`}>{placeholder}</span>
        <Img src={`${ICONS}/microphone.svg`} width={12} height={16} />
        <span className={`${prefix}sendIcon`}>
          <Img src={`${ICONS}/arrow-up.svg`} width={16} height={16} />
        </span>
      </div>
    </div>
  )
}

function Header({ prefix }) {
  return (
    <div className={`${prefix}header`}>
      <Img src={`${ICONS}/traffic-lights.svg`} width={44} height={12} />
      <span className={`${prefix}title`}>Show NexaCorp Q3 sales</span>
      <Img src={`${ICONS}/sidebar.svg`} width={16} height={16} />
    </div>
  )
}

const C = 'InteractiveFeatureMCPClaude-module__JqFSgW__'
function ClaudePanel() {
  return (
    <div className={`${C}surface`}>
      <Header prefix={C} />
      <div className={`${C}content`}>
        <IntentScrollable>
          <div className={`${C}conversation`}>
            <p className={`${C}userPrompt`}>Get me NexaCorp’s Q3 sales by product line</p>
            <div className={`${C}thoughtFor`}>
              Thought for 27s
              <Img src={`${ICONS}/chevron.svg`} width={9} height={5} className={`${C}chevron`} />
            </div>
            <div className={`${C}toolCall`}>
              <span aria-hidden="true" className={`${C}toolLogo`}>
                <HexLogo />
              </span>
              <span className={`${C}toolName`}>Hex</span>
              <span className={`${C}toolAction`}>Search projects</span>
            </div>
            <div className={`${C}answer`}>
              <span aria-hidden="true" className={`${C}assistantLogo`}>
                <Img src={`${ICONS}/logo-claude.svg`} width={16} height={16} />
              </span>
              <div className={`${C}answerBody`}>
                <p className={`${C}answerTitle`}>NexaCorp Q3 sales by product line</p>
                <p className={`${C}answerIntro`}>Here’s what I found in the “nexacorp_sales” tables:</p>
                <Products prefix={C} />
              </div>
            </div>
          </div>
        </IntentScrollable>
        <PromptBar prefix={C} placeholder="How can I help you today?" />
      </div>
    </div>
  )
}

const X = 'InteractiveFeatureMCPCodex-module__hZzWta__'
function CodexPanel() {
  return (
    <>
      <Header prefix={X} />
      <div className={`${X}content`}>
        <IntentScrollable>
          <div className={`${X}conversation`}>
            <p className={`${X}userPrompt`}>
              <span aria-hidden="true" className={`${X}promptLogo`}>
                <HexLogo />
              </span>
              <strong>Hex</strong> get me NexaCorp’s Q3 sales by product line
            </p>
            <div className={`${X}workedFor`}>
              Worked for 27s
              <Img src={`${ICONS}/chevron.svg`} width={9} height={5} className={`${X}chevron`} />
            </div>
            <div className={`${X}searchProjects`}>
              <span aria-hidden="true" className={`${X}toolLogo`}>
                <HexLogo />
              </span>
              Search projects
            </div>
            <div className={`${X}answer`}>
              <p className={`${X}answerTitle`}>NexaCorp Q3 sales by product line</p>
              <p className={`${X}answerIntro`}>Here’s what I found in the “nexacorp_sales” tables:</p>
              <Products prefix={X} />
            </div>
          </div>
        </IntentScrollable>
        <PromptBar prefix={X} placeholder="Do anything" />
      </div>
    </>
  )
}

export default function McpWindow() {
  const [client, setClient] = useState('claude')
  const panelId = useId()
  const anchorRef = useRef(null)
  const hovering = useHover(anchorRef, { parent: true })

  return (
    <div className="InteractiveFeatureMCP-module__zikdgW__demo">
      <div aria-label="MCP client" role="group" className="annotation InteractiveFeatureMCP-module__zikdgW__clients">
        {CLIENTS.map(({ id, label, iconSrc }) => {
          const selected = client === id
          return (
            <button
              key={id}
              type="button"
              aria-controls={panelId}
              aria-pressed={selected}
              className={`InteractiveFeatureMCP-module__zikdgW__client ${selected ? 'InteractiveFeatureMCP-module__zikdgW__selectedClient' : ''}`}
              onClick={() => setClient(id)}
            >
              <Img src={iconSrc} width={22} height={22} />
              {label}
            </button>
          )
        })}
      </div>
      <ProductWindow
        interactive
        role="group"
        aria-label="Codex and Claude asking Hex for NexaCorp’s Q3 sales by product line"
        className="ta-mock InteractiveFeatureMCP-module__zikdgW__window h-full max-h-[1000px] w-full"
      >
        <div className="InteractiveFeatureMCP-module__zikdgW__panel" id={panelId}>
          {client === 'codex' ? <CodexPanel /> : <ClaudePanel />}
        </div>
        <span ref={anchorRef} hidden />
        <EightBitCursor isHovering={hovering} />
      </ProductWindow>
    </div>
  )
}
