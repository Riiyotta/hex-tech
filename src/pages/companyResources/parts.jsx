// Page-family building blocks for companyResources (company §3.3 P9–P11, §3.2 V1 frame).
// Composed from shared pieces; nothing here duplicates a shared component.
import { Reveal } from '../../components/shared'
import './companyResources.css'

// P11 V1Intro (EventsAndGuidesIntro): flex space-between, gap 2rem; H1 hero clamp(42…74)/1.3 white→rose gradient,
// left aligned; P 20/30 300 max 38ch balance; illustration 60% (840/510 svg). ≤1000 column, illustration 110%.
export function V1Intro({ title, copy }) {
  return (
    <Reveal className="cr-intro">
      <div className="z-[1]">
        <h1 className="gradient-heading mt-0 text-left font-display text-hero-relaxed font-bold text-ink-loud">{title}</h1>
        <p className="m-0 max-w-[38ch] text-lead-l font-light text-ink [text-wrap:balance]">{copy}</p>
      </div>
      <div className="cr-intro__illustration">
        <img src="/assets/pages/company/_shared/events-and-guides-hero.svg" alt="" role="presentation" width="840" height="510" />
      </div>
    </Reveal>
  )
}

// P9 DarkSectionHeader (SectionHeader): icon row (35px lightPurple .3 rules either side, icon in 15px margins) →
// text wrapper (mb 20, pr 40 / 0 ≤600): H2 heading-2 PP Formula 800 loud mb 10 + optional P 20/30 300.
export function DarkSectionHeader({ icon, title, description, className = '', id }) {
  return (
    <div className={`cr-section-header ${className}`} id={id}>
      <div className="cr-section-header__icons">
        <div className="cr-section-header__icon">{icon}</div>
      </div>
      <div className="cr-section-header__text">
        <h2 className="m-0 mb-[10px] font-formula text-heading-2 font-[800] text-ink-loud">{title}</h2>
        {description && <p className="m-0 text-lead-l font-light text-ink">{description}</p>}
      </div>
    </div>
  )
}

// SOTD / report placeholder copy: neutral filler in the live typographic style (the report prose was not recorded).
const FILLER = [
  'Placeholder copy for this part of the report.',
  'The finished text summarises the survey responses behind this finding.',
  'It explains what changed between the two survey rounds and why it matters for data teams.',
  'Supporting detail and context sit here in the same running-text style.',
  'A closing sentence connects the result to the next chart or section.',
]
export function placeholder(sentences = 3, offset = 0) {
  const out = []
  for (let i = 0; i < sentences; i += 1) out.push(FILLER[(i + offset) % FILLER.length])
  return out.join(' ')
}
