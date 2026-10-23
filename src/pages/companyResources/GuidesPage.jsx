// /resources/guides/ (company §4.8, T8 dark V1). dom/resources_guides--GuidesLanding__Wrapper.*
// V1PageLayout → GuidesLanding (max 1240, px 40, mb 200, flex col gap 80): V1Intro → grid 3 cols (2 ≤1000,
// 1 ≤800) gap 20 of EventAndGuideCards (CTA "Download now"). No filter. Footer row below.
import { Reveal, V1PageLayout } from '../../components/shared'
import { V1Intro } from './parts.jsx'
import { EventCardGrid } from './EventsPage.jsx'
import { GUIDES } from './data/events.js'

export default function GuidesPage() {
  return (
    <div className="cr-scope">
      <V1PageLayout footer>
        <Reveal className="mx-auto mb-[200px] flex w-full max-w-section flex-col gap-[80px] px-[40px]">
          <V1Intro title="Guides" copy="A collection of resources that help you learn how to do more with data, together." />
          <EventCardGrid items={GUIDES} className="grid w-full grid-cols-3 gap-[20px] tablet:grid-cols-2 stack:grid-cols-1" />
        </Reveal>
      </V1PageLayout>
    </div>
  )
}
