// product §2.2 N9 InstallScript (cli hero + cli footer), from reference/pages/product/dom/cli/00-CartesianGrid.css
// and 05-SectionFooter.css: curl / brew tabs (Cinetype Mono 12, 4px 12px, active highlight 9.8% → 0 gradient,
// inactive .6) → R-Button primary lg (copy icon on the right, gap 15) holding the command in Cinetype Mono 16/1.571
// gradient text with ellipsis → "Copy script" / "Copied!" tooltip (hover: opacity 1, translateY(-10px), .25s) →
// misc links row (Read the docs, Get started with Hex).
// Props: align 'start' (hero) | 'center' (footer).
import { useState } from 'react'
import { Button } from '../../../components/shared'
import { ArrowRightStrokeIcon, DocsIcon, DuplicateIcon } from './Icons.jsx'

const SOURCES = [
  { id: 'curl', command: 'curl -fsSL https://hex.tech/install.sh | bash' },
  { id: 'brew', command: 'brew install hex-inc/hex-cli/hex' },
]

export default function InstallScript({ align = 'start' }) {
  const [active, setActive] = useState('curl')
  const [copied, setCopied] = useState(false)
  const command = SOURCES.find((s) => s.id === active).command

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command)
    } catch {
      /* clipboard unavailable (insecure context): still show the confirmation like the live tooltip */
    }
    setCopied(true)
  }

  return (
    <div className="pc-install" data-align={align}>
      <div className="pc-install__tabs" role="tablist" aria-label="Install method">
        {SOURCES.map((s) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={active === s.id}
            className="pc-install__tab"
            onClick={() => {
              setActive(s.id)
              setCopied(false)
            }}
          >
            {s.id}
          </button>
        ))}
      </div>
      <div className="pc-install__copy" onMouseLeave={() => setCopied(false)}>
        <div className="pc-install__tooltip" aria-hidden="true">
          <p>{copied ? 'Copied!' : 'Copy script'}</p>
        </div>
        <div className="flex w-full min-w-0 max-w-full">
          <Button
            variant="primary"
            size="lg"
            icon={<DuplicateIcon />}
            iconPosition="end"
            onClick={copy}
            aria-label={`Copy install script: ${command}`}
            className="pc-install__button"
          >
            <span className="pc-install__text">{command}</span>
          </Button>
        </div>
      </div>
      <div className="pc-install__links">
        <div className="pc-install__link">
          <DocsIcon />
          <a href="https://learn.hex.tech/docs/api-integrations/cli" rel="noopener noreferrer" target="_blank">
            Read the docs
          </a>
        </div>
        <div className="pc-install__link">
          <span className="flex h-[15px] w-[15px] text-fg-1200">
            <ArrowRightStrokeIcon />
          </span>
          <a href="https://app.hex.tech/signup" rel="noopener noreferrer" target="_blank">
            Get started with Hex
          </a>
        </div>
      </div>
    </div>
  )
}
