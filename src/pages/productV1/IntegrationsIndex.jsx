// /product/integrations/ (specs/product.md §4.11, T4, dark, V1 layout): HeadingWithCallout + 6 category grids.
import { Button, Callout, Reveal, Rotator, V1PageLayout } from '../../components/shared'
import { ICONS } from './blocks.jsx'
import { INDEX } from './integrationsData.js'
import { useDocumentTitle } from './useDocumentTitle.js'
import './productV1.css'

const FILE_TYPES = ['.csv', '.json', '.parquet', '.avro', '.xlsx', '.txt']

// "+ local files" tile: not a link (pointer-events none, no corner lines); 80×50 Rotator of file extensions,
// step ≈1.25s, transform .8s ease. Live options keep opacity 1 (no fade: fade={false}).
function LocalFilesTile() {
  return (
    <div className="pv1-tile" data-static="">
      <Button variant="secondary" size="md" corners={false} tabIndex={-1} aria-disabled="true">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <div className="mb-[13px] pt-[14px] text-[12px]">+ local files</div>
          <div className="border-t border-grid-500 leading-[50px] text-ink-loud">
            <Rotator
              items={FILE_TYPES}
              itemHeight={50}
              width={80}
              interval={1250}
              moveDuration="0.8s"
              fade={false}
              optionClassName="justify-center"
              renderItem={(t) => <label className="flex h-full w-full items-center justify-center">{t}</label>}
            />
          </div>
        </div>
      </Button>
    </div>
  )
}

function Tile({ item }) {
  return (
    <div className="pv1-tile">
      <Button variant="secondary" size="md" corners href={item.href}>
        <div className="flex h-full w-full flex-col items-center justify-center">
          <img src={item.logo} alt={item.name} loading="lazy" />
        </div>
      </Button>
    </div>
  )
}

function Category({ c }) {
  return (
    <Reveal className="mb-[50px] flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[10px]">
        <h3 className="m-0 font-formula text-heading-3 font-extrabold text-ink-loud">{c.heading}</h3>
        {c.description && <p className="m-0 max-w-[90ch] text-body font-light text-ink [text-wrap:balance]">{c.description}</p>}
      </div>
      <div className="grid w-full grid-cols-4 gap-[20px] tablet:grid-cols-3 stack:grid-cols-2 phone:grid-cols-1">
        {c.items.map((item) => (item.logo ? <Tile key={item.name} item={item} /> : <LocalFilesTile key="local-files" />))}
      </div>
    </Reveal>
  )
}

export default function IntegrationsIndex() {
  useDocumentTitle('Data Integrations for Analytics and Data Teams | Hex')
  return (
    <V1PageLayout footer>
      <div className="mx-auto mb-[200px] w-full max-w-section px-[40px]">
        <div className="mb-[60px] flex items-center stack:flex-col stack:items-start">
          <div className="max-w-[600px] stack:mb-[20px]">
            <h1 className="m-0 mb-[20px] font-display text-heading-1 font-bold text-ink-loud">
              Integrate with <span className="block">your whole stack</span>
            </h1>
            <p className="m-0 text-lead-l font-light text-ink">
              Hex brings of all your favorite tools, languages, and data sources together in one platform.
            </p>
          </div>
          <div className="ml-auto stack:ml-0 stack:w-full">
            <Callout icon={`${ICONS}/knowledge.svg`} className="pv1-callout m-0 stack:w-full">
              Don't see what you're looking for? Drop us a line at <a href="mailto:partnerships@hex.tech">partnerships@hex.tech</a>.
            </Callout>
          </div>
        </div>
        {INDEX.categories.map((c) => (
          <Category key={c.heading} c={c} />
        ))}
      </div>
    </V1PageLayout>
  )
}
