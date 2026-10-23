// /resources/events/ (company §4.8, T8 dark V1). dom/resources_events--EventsLanding__Wrapper.*
// V1PageLayout → EventsLanding (max 1240, px 40, mb 200, flex col gap 80): V1Intro → body (flex, items-start):
// sticky GridFilter (22% = 255, FILTER / All / Upcoming / On-demand, client-side) + content (905):
// SectionHeader "Upcoming" + 2-col grid, SectionHeader "On-demand" (mt 66) + 2-col grid. Footer row below.
import { useState } from 'react'
import { DarkResourceCard, Reveal, V1PageLayout } from '../../components/shared'
import { DarkSectionHeader, V1Intro } from './parts.jsx'
import { ON_DEMAND, UPCOMING } from './data/events.js'

const isExternal = (href) => /^https?:/.test(href)

function CalendarIcon() {
  return (
    <span data-icon="true" className="flex h-[15px] w-[15px] text-fg-1200">
      <svg data-icon="calendar" viewBox="0 0 12 12" width="15" height="15" aria-hidden="true">
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.25,0v1.5H1.12c-0.3,0-0.58,0.12-0.8,0.33C0.12,2.04,0,2.33,0,2.62v8.25c0,0.3,0.12,0.58,0.33,0.8C0.54,11.88,0.83,12,1.12,12h9.75c0.3,0,0.58-0.12,0.8-0.33c0.21-0.21,0.33-0.5,0.33-0.8V2.62c0-0.3-0.12-0.58-0.33-0.8c-0.21-0.21-0.5-0.33-0.8-0.33H9.75V0H9v1.5H3V0H2.25z M1.12,2.25h1.12v1.5H3v-1.5h6v1.5h0.75v-1.5h1.12c0.1,0,0.19,0.04,0.27,0.11c0.07,0.07,0.11,0.17,0.11,0.27v2.62H0.75V2.62c0-0.1,0.04-0.19,0.11-0.27C0.93,2.29,1.03,2.25,1.12,2.25z M0.75,6v4.88c0,0.1,0.04,0.19,0.11,0.27c0.07,0.07,0.17,0.11,0.27,0.11h9.75c0.1,0,0.19-0.04,0.27-0.11c0.07-0.07,0.11-0.17,0.11-0.27V6H0.75z"
        />
      </svg>
    </span>
  )
}

function VirtualIcon() {
  return (
    <span data-icon="true" className="flex h-[20px] w-[20px] text-fg-1200">
      <svg data-icon="virtual" viewBox="0 0 16 16" width="20" height="20" aria-hidden="true">
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.93782 3.6204L8.26077 6.50237L8.25077 6.52237L8.96722 7L8.25078 7.47763L8.26078 7.49763L3.93783 10.3796L3.92783 10.3596L3 10.9781V3.02185L3.92782 3.6404L3.93782 3.6204ZM3.55 11.84L9.55 7.84L9.54 7.82C9.81 7.64 10 7.35 10 7C10 6.65 9.81 6.36 9.54 6.18L9.55 6.16L3.55 2.16L3.54 2.18L3.53769 2.17846C3.45659 2.12462 3.36676 2.07669 3.26819 2.04409C3.18501 2.01658 3.09561 2 3 2C2.45 2 2 2.45 2 3V11C2 11.55 2.45 12 3 12C3.09561 12 3.18499 11.9834 3.26816 11.9559C3.36674 11.9233 3.45658 11.8754 3.53769 11.8215L3.54 11.82L3.55 11.84ZM11 2.04028V12.0016H12V2.04028L11 2.04028Z"
        />
      </svg>
    </span>
  )
}

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'upcoming', label: 'Upcoming' },
  { key: 'onDemand', label: 'On-demand' },
]

export function EventCardGrid({ items, className = 'grid grid-cols-2 gap-[20px] stack:grid-cols-1' }) {
  return (
    <div className={className}>
      {items.map((e) => (
        <DarkResourceCard
          key={e.title}
          className="h-full"
          href={e.href}
          external={isExternal(e.href)}
          title={e.title}
          cta={e.cta}
          image={{ src: e.image, alt: e.title, ratio: e.ratio }}
        />
      ))}
    </div>
  )
}

function GridFilter({ value, onChange }) {
  const index = FILTERS.findIndex((f) => f.key === value)
  return (
    <div className="cr-grid-filter" style={{ '--top': '90.4px' }}>
      <h5 className="m-0 mb-[0.6em] font-plex-mono text-heading-5 font-semibold uppercase text-ink-muted">FILTER</h5>
      <div className="relative">
        <div className="cr-grid-filter__bar" style={{ '--bar-top': `${index * 30}px` }} aria-hidden="true" />
        <div className="pl-[15px]">
          {FILTERS.map((f) => (
            <button key={f.key} type="button" className="cr-grid-filter__option" aria-pressed={f.key === value} onClick={() => onChange(f.key)}>
              {f.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function EventsPage() {
  const [filter, setFilter] = useState('all')
  return (
    <div className="cr-scope">
      <V1PageLayout footer>
        <Reveal className="mx-auto mb-[200px] flex w-full max-w-section flex-col gap-[80px] px-[40px]">
          <V1Intro
            title="Events"
            copy="Connect with Hex to learn how to do more with data, together. Find upcoming virtual and in-person events near you."
          />
          <div className="flex w-full items-start stack:flex-col">
            <GridFilter value={filter} onChange={setFilter} />
            <div className="min-w-0 flex-1">
              {filter !== 'onDemand' && (
                <>
                  <DarkSectionHeader icon={<CalendarIcon />} title="Upcoming" />
                  <EventCardGrid items={UPCOMING} />
                </>
              )}
              {filter !== 'upcoming' && (
                <>
                  <DarkSectionHeader icon={<VirtualIcon />} title="On-demand" />
                  <EventCardGrid items={ON_DEMAND} />
                </>
              )}
            </div>
          </div>
        </Reveal>
      </V1PageLayout>
    </div>
  )
}
