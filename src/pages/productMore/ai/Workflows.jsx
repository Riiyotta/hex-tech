// product §4.5 #1 WorkflowSplit (DOM capability-ai/01-Workflows.*): full-bleed bordered block → masthead H2 →
// 1fr | 1px | 1fr grid (description + feature list per half; jade / amethyst accents) with rose T and L accents.

import SvgIcon from '../shared/SvgIcon.jsx'
import { ICONS } from '../icons.js'

const HALVES = [
  {
    key: 1,
    color: '#5CB198',
    icon: ICONS.wfNotebookView,
    label: 'ADVANCED ANALYTICS',
    lead: 'Deep-dive analysis:',
    text: ' Explore the new, novel, and gnarly in an AI-powered, multiplayer notebook where Python, SQL, and no-code live together.',
    features: [
      [ICONS.wfAgentic, 'Agentic data exploration'],
      [ICONS.wfAppBuilder, 'Generative app-builder'],
      [ICONS.wfCode, 'Create and edit code'],
    ],
  },
  {
    key: 2,
    color: '#A477B2',
    icon: ICONS.wfExplore,
    label: 'CONVERSATIONAL SELF-SERVE',
    lead: 'Self-serve and explore.',
    text: ' Ask Hex a question in natural language, get a complete analysis, and keep going.',
    features: [
      [ICONS.wfQuick, 'Get quick answers'],
      [ICONS.wfFollowUp, 'Ask follow-up questions'],
      [ICONS.wfGoverned, 'Governed insights'],
    ],
  },
]

export default function Workflows() {
  return (
    <section className="pm-wf" data-section="Workflows">
      <div className="pm-wf__masthead">
        <h2 className="pm-wf__h2 gradient-heading font-formula text-heading-2 font-[800] text-ink-loud">Supercharge everyday workflows</h2>
      </div>
      <div className="pm-wf__grid">
        {HALVES.map((h) => [
          <div key={`d${h.key}`} className="pm-wf__desc" data-first={h.key === 1 ? '' : undefined} style={{ gridArea: `description${h.key}` }}>
            {h.key === 1 && <div className="pm-wf__accent-t" data-position="top" />}
            <div className="pm-wf__container">
              <h5 className="pm-wf__eyebrow" style={{ color: h.color }}>
                <SvgIcon svg={h.icon} className="h-[15px] w-[15px]" />
                <span className="pm-wf__label">{h.label}</span>
              </h5>
              <p className="pm-wf__p">
                <span>{h.lead}</span>
                {h.text}
              </p>
            </div>
          </div>,
          <div key={`f${h.key}`} className="pm-wf__features-area" style={{ gridArea: `features${h.key}` }}>
            <div className="pm-wf__container">
              <ul className="pm-wf__features" style={{ color: h.color }}>
                {h.features.map(([icon, label]) => (
                  <li key={label}>
                    <SvgIcon svg={icon} />
                    <span className="pm-wf__feature">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
            {h.key === 1 && <div className="pm-wf__accent-t" data-position="bottom" />}
          </div>,
          h.key === 1 ? <hr key="hr" className="pm-wf__hr" /> : null,
        ])}
      </div>
      <div className="pm-wf__accent-l" data-position="tl" />
      <div className="pm-wf__accent-l" data-position="tr" />
      <div className="pm-wf__accent-l" data-position="bl" />
      <div className="pm-wf__accent-l" data-position="br" />
    </section>
  )
}
