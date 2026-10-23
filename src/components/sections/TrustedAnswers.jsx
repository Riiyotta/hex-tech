// CLONE_SPEC §4.4: "Ask a question, get a trusted answer".
// Content box (max 1240, padding-block 60) → SectionWrapper (row, gap 70): info column (330: agent-logo
// stack icon → H3 → "Explore self-serve insights", then the dashed LangChain quote) + illustration
// (agent chat window 588×672, then the Claude/Codex MCP, Slack and Hex CLI windows in a 360px column
// that runs past the right edge and is clipped by the page). ≤800 it stacks info → illustration → quote,
// like the live InteractiveFeatureSection. Reveal per §6.2; agent logos roll in per §6.5.
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { DashedLineQuote, InfoText, Reveal } from '../shared/index.js'
import AgentChatWindow from './TrustedAnswers/AgentChatWindow.jsx'
import McpWindow from './TrustedAnswers/McpWindow.jsx'
import SlackWindow from './TrustedAnswers/SlackWindow.jsx'
import CliWindow from './TrustedAnswers/CliWindow.jsx'
import './TrustedAnswers/TrustedAnswers.css'

const AGENT_LOGOS = [
  { alt: 'Codex', src: '/assets/icons/mcp/logo-chatgpt.svg' },
  { alt: 'Claude', src: '/assets/icons/mcp/logo-claude.svg' },
  { alt: 'Slack', src: '/assets/icons/mcp/logo-slack.svg' },
  { alt: 'CLI', src: '/assets/icons/mcp/logo-cli.svg' },
  { alt: 'MCP', src: '/assets/icons/mcp/logo-mcp.svg' },
]

function useIsStacked() {
  const query = '(max-width: 800px)'
  const [stacked, setStacked] = useState(() => typeof window !== 'undefined' && window.matchMedia(query).matches)
  useEffect(() => {
    const mql = window.matchMedia(query)
    const onChange = () => setStacked(mql.matches)
    onChange()
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])
  return stacked
}

// Agent logo roll-in stack (InfoText icon). Exported for product BI "Bring BI to where people work".
export function AgentLogoStack({ revealed }) {
  return (
    <div
      className={`AgentLogoStack-module__dryIqW__wrapper HomeTrustedAnswers-module__G5svba__agentLogos ${
        revealed ? 'HomeTrustedAnswers-module__G5svba__agentLogosRevealed' : ''
      }`}
    >
      {AGENT_LOGOS.map(({ alt, src }) => (
        <div key={alt} className="Card__Wrapper-sc-44e78466-0 KbzOF AgentLogo-module__GJXDVG__logo AgentLogoStack-module__dryIqW__logo">
          <img alt={alt} loading="lazy" decoding="async" width="20" height="20" src={src} className="block h-[20px] w-[20px]" />
        </div>
      ))}
    </div>
  )
}

function Quote() {
  return (
    <DashedLineQuote
      before={'"'}
      emphasis="The ability to use Hex in any way we choose"
      after={' is valuable because now we can connect into Hex via my favorite dev tools."'}
      logo={{ src: '/assets/logos/customers/langchain.svg', alt: 'LangChain', maxWidth: 86 }}
      name="Nithin Bose."
      title="VP of Customer Engineering"
    />
  )
}

function Illustration() {
  return (
    <div
      role="figure"
      aria-label="Example: asking the Hex Agent questions through chat, Slack, and developer tools using fictional data"
      data-direction="row"
      className="HomeTrustedAnswers-module__G5svba__illustration"
    >
      <AgentChatWindow />
      <div className="HomeTrustedAnswers-module__G5svba__agentTools">
        <div className="HomeTrustedAnswers-module__G5svba__agentToolWindow">
          <div aria-hidden="true" className="InteractiveFeatureWrapper-styles__DashedLines-sc-b5f0eae9-1 fbHGfk">
            <div data-left="true" className="InteractiveFeatureWrapper-styles__DashedLine-sc-b5f0eae9-2 cNvWGq" />
          </div>
          <McpWindow />
        </div>
        <div className="HomeTrustedAnswers-module__G5svba__agentToolWindow">
          <div aria-hidden="true" className="InteractiveFeatureWrapper-styles__DashedLines-sc-b5f0eae9-1 fbHGfk">
            <div data-top="true" className="InteractiveFeatureWrapper-styles__DashedLine-sc-b5f0eae9-2 cNvWGq" />
            <div data-left="true" className="InteractiveFeatureWrapper-styles__DashedLine-sc-b5f0eae9-2 cNvWGq" />
          </div>
          <div className="HomeTrustedAnswers-module__G5svba__agentToolSlack">
            <SlackWindow />
          </div>
        </div>
        <div className="HomeTrustedAnswers-module__G5svba__agentToolWindow">
          <div aria-hidden="true" className="InteractiveFeatureWrapper-styles__DashedLines-sc-b5f0eae9-1 fbHGfk">
            <div data-top="true" className="InteractiveFeatureWrapper-styles__DashedLine-sc-b5f0eae9-2 cNvWGq" />
            <div data-left="true" className="InteractiveFeatureWrapper-styles__DashedLine-sc-b5f0eae9-2 cNvWGq" />
          </div>
          <CliWindow />
        </div>
      </div>
    </div>
  )
}

export default function TrustedAnswers() {
  const contentRef = useRef(null)
  const inView = useInView(contentRef, { once: true })
  const stacked = useIsStacked()

  const info = (
    <div className="sharedStyles__InfoTextWrapper-sc-5d34891d-2 lpgDeW">
      <InfoText
        icon={<AgentLogoStack revealed={inView} />}
        title="Ask a question, get a trusted answer"
        cta={{ label: 'Explore self-serve insights', href: '/product/threads/' }}
        className="[word-break:break-word]"
      />
    </div>
  )
  const illustration = (
    <div className="sharedStyles__ProductIllustration-sc-5d34891d-3 bnzgvi">
      <Illustration />
    </div>
  )

  return (
    <Reveal data-section="TrustedAnswers" className="ta-root">
      <div ref={contentRef} className="HomeTrustedAnswers-module__G5svba__content">
        {stacked ? (
          <div className="sharedStyles__SectionWrapper-sc-5d34891d-0 jfDHer">
            {info}
            {illustration}
            <Quote />
          </div>
        ) : (
          <div className="sharedStyles__SectionWrapper-sc-5d34891d-0 jfDHer">
            <div className="sharedStyles__InfoWrapper-sc-5d34891d-1 dCffGk">
              {info}
              <Quote />
            </div>
            {illustration}
          </div>
        )}
      </div>
    </Reveal>
  )
}
