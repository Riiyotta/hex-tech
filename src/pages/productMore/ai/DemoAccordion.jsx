// product §4.5 #3 / #5 DemoAccordion (WorkflowSectionShared, DOM capability-ai/03-*, 05-*): masthead
// (annotation eyebrow, gradient heading-1 H2, text-xl P, "Watch demo" floaty pill → YouTube modal) and a
// radio-group selector (click only, no auto-advance) beside stacked looping videos (fadeIn .38s / fadeOut .16s).
import { useCallback, useId, useState } from 'react'
import { Button, Reveal, VideoModal } from '../../../components/shared'
import SvgIcon from '../shared/SvgIcon.jsx'
import { ICONS } from '../icons.js'

export default function DemoAccordion({ eyebrow, title, text, demo, color, glow, options, noTopPadding = false }) {
  const [active, setActive] = useState(0)
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])
  const name = useId()
  return (
    <Reveal className="pm-demo" data-no-top-padding={noTopPadding ? '' : undefined}>
      <div className="pm-demo__masthead">
        <p className="pm-demo__eyebrow font-mono text-annotation text-ink">{eyebrow}</p>
        <h2 className="pm-demo__h2 gradient-heading text-center font-display text-heading-1 font-bold text-ink-loud">{title}</h2>
        <p className="pm-demo__p pm-text-xl text-ink">{text}</p>
        <Reveal className="flex cursor-pointer items-center justify-center">
          <button type="button" className="pm-demo-btn" data-theme="dark" onClick={() => setOpen(true)}>
            <SvgIcon svg={ICONS.playSmall} />
            Watch demo<span className="opacity-50">{demo.time}</span>
          </button>
        </Reveal>
      </div>
      <div className="px-[12px]">
        <div className="pm-demo__area">
          <fieldset className="pm-demo__selector" style={{ '--radio-group-selection-color': color, '--radio-group-selection-glow-color': glow }}>
            {options.map((o, i) => (
              <label key={o.title} className="pm-demo__label" style={{ '--progress': i === active ? 1 : 0 }}>
                <input className="pm-demo__radio" type="radio" name={name} value={i} checked={i === active} onChange={() => setActive(i)} />
                <span className="pm-demo__container">
                  <span className="pm-demo__title font-formula text-heading-4 font-semibold">{o.title}</span>
                  <span className="pm-demo__expander">
                    <span className="pm-demo__expander-content">
                      <span className="pm-demo__text text-ink">
                        {o.text}
                        {o.cta && (
                          <Button variant="secondary" size="md" className="pm-demo__cta" href={o.cta.href} external={o.cta.external}>
                            {o.cta.label}
                          </Button>
                        )}
                      </span>
                    </span>
                  </span>
                </span>
              </label>
            ))}
          </fieldset>
          <div className="pm-demo__media">
            {options.map((o, i) => (
              <div key={o.video} className="pm-demo__mw" data-active={i === active ? 'true' : 'false'}>
                <video loop muted playsInline autoPlay src={o.video} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {open && <VideoModal src={demo.src} title={title} onClose={close} />}
    </Reveal>
  )
}
