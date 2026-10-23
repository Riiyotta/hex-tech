// product §4.5 #0 Prompt UI: underlay + surface + FocusAura, typed prompt loop, data-connection chip, send button.
// Typing loop (spec-sampled, ±10%): type ≈23 chars/s, hold ≈1.5s, delete ≈30 chars/s, pause ≈1.4s showing the
// placeholder, then the next prompt. `**x**` segments render as inline table-reference pills that pop in whole.
// Gaps: the table-pill 16px table icon is not in the DOM capture (text-only pill), and the bundle's per-prompt
// connection names are only known for two prompts (prompt 4 shows no chip).
import { useEffect, useMemo, useState } from 'react'
import SvgIcon from '../shared/SvgIcon.jsx'
import { ICONS } from '../icons.js'

const PROMPTS = [
  { text: 'What are the top drivers of revenue growth over the past 6 months?', conn: 'prod_sources.salesforce_opportunities' },
  { text: 'Using **cat_campaign_type** and **cat_channel_type**, how are lead conversion rates trending?', conn: 'prod_sources.salesforce_opportunities' },
  { text: 'Forecast patient readmission rates on the past 12 months of data', conn: 'prod_core.dim_admissions' },
  { text: 'Show me the first purchase per customer and list all product names in the order.', conn: null },
]
const TYPE_MS = 1000 / 23
const DELETE_MS = 1000 / 30
const HOLD_MS = 1500
const PAUSE_MS = 1400

function toUnits(text) {
  const units = []
  text.split(/(\*\*[^*]+\*\*)/).forEach((part) => {
    if (!part) return
    if (part.startsWith('**')) units.push({ ref: part.slice(2, -2) })
    else for (const ch of part) units.push({ ch })
  })
  return units
}

export default function PromptUI() {
  const prompts = useMemo(() => PROMPTS.map((p) => ({ ...p, units: toUnits(p.text) })), [])
  const [index, setIndex] = useState(0)
  const [count, setCount] = useState(0)
  const [phase, setPhase] = useState('pause') // pause → type → hold → delete

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(prompts[0].units.length)
      setPhase('hold-static')
      return undefined
    }
    let timer
    const total = prompts[index].units.length
    if (phase === 'pause') timer = setTimeout(() => setPhase('type'), PAUSE_MS)
    else if (phase === 'type') {
      if (count < total) timer = setTimeout(() => setCount((c) => c + 1), TYPE_MS)
      else timer = setTimeout(() => setPhase('hold'), 0)
    } else if (phase === 'hold') timer = setTimeout(() => setPhase('delete'), HOLD_MS)
    else if (phase === 'delete') {
      if (count > 0) timer = setTimeout(() => setCount((c) => c - 1), DELETE_MS)
      else
        timer = setTimeout(() => {
          setIndex((i) => (i + 1) % prompts.length)
          setPhase('pause')
        }, 0)
    }
    return () => clearTimeout(timer)
  }, [phase, count, index, prompts])

  const prompt = prompts[index]
  const empty = count === 0
  const typing = phase === 'type'
  const chipShown = !empty && !!prompt.conn

  return (
    <div className="pm-prompt-underlay" data-focused="true">
      <div className="pm-prompt-surface">
        {phase === 'type' && <div key={index} className="pm-aura" />}
        <div className="pm-prompt-top">
          <div className="pm-prompt-text">
            <div className="pm-prompt-placeholder" data-visible={empty ? 'true' : 'false'}>
              Ask a data question...
            </div>
            <div style={{ perspective: 600 }}>
              <span>
                {prompt.units.slice(0, count).map((u, i) =>
                  u.ref ? (
                    <span key={i} className="pm-prompt-ref">
                      {u.ref}
                    </span>
                  ) : (
                    u.ch
                  ),
                )}
              </span>
              <span className="pm-prompt-cursor" data-blink={typing ? 'false' : 'true'} />
            </div>
          </div>
        </div>
        <div className="pm-prompt-actions">
          <div className="pm-prompt-conn-wrap">
            <div className="pm-prompt-chip-surface pm-prompt-conn" data-shown={chipShown ? 'true' : 'false'}>
              <SvgIcon svg={ICONS.dataConnection} />
              {prompt.conn ?? ''}
              <SvgIcon svg={ICONS.chevronDown16} style={{ marginLeft: 4 }} />
            </div>
          </div>
          <div className="relative z-[1] ml-auto flex items-center gap-[8px]">
            <div className="pm-prompt-chip-surface pm-prompt-send" data-disabled={empty ? 'true' : 'false'}>
              <SvgIcon svg={ICONS.send} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
