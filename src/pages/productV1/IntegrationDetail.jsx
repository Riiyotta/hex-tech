// T5 integration detail (specs/product.md §5), driven by specs/product-integrations.json via integrationsData.js.
// Block order: Info hero → QuotesMultiple → TronDivider + How it works → custom blocks → FAQ → video → external links.
import { useParams } from 'react-router-dom'
import { Button, TronDivider, V1PageLayout } from '../../components/shared'
import CustomerStoriesTwoUp from '../../components/sections/CustomerStoriesTwoUp.jsx'
import Faq from '../../components/sections/Faq.jsx'
import PagePending from '../PagePending.jsx'
import DataConnectionIlly from './DataConnectionIlly.jsx'
import { AwsBlocks, SnowflakeBlocks } from './IntegrationCustomBlocks.jsx'
import { getIntegration, isExternal } from './integrationsData.js'
import { useDocumentTitle } from './useDocumentTitle.js'
import './productV1.css'

function Ctas({ ctas }) {
  return (
    <div className="flex gap-[15px] pt-[20px] phone:flex-col">
      {ctas.map((c, i) => (
        <Button size="md" corners circles key={c.label} variant={i === 0 ? 'primary' : 'secondary'} href={c.href} external={isExternal(c.href)}>
          {c.label}
        </Button>
      ))}
    </div>
  )
}

// §5 #1 Info: "Integration" label on the cut-out logo box, H1 60/78 solid white, P 20/30 (max 530), CTAs.
function Info({ p }) {
  return (
    <div className="mx-auto mb-[80px] flex w-full max-w-[950px] flex-col items-center px-[40px]">
      <div className="flex flex-col items-center justify-center">
        <a href="/product/integrations/" className="z-[1] mb-[-10px] flex h-[20px] items-center self-center px-[3px]">
          <span className="flex h-[12px] font-mono text-[12px] font-normal capitalize leading-[12px] text-fg-1200">Integration</span>
        </a>
        <div className="pv1-logo-box">
          <img src={p.logo.src} alt={p.logo.alt} width={p.logo.natural[0]} height={p.logo.natural[1]} />
        </div>
      </div>
      <h1 className="m-0 mb-[20px] text-center font-display text-heading-1 font-bold text-ink-loud">{p.h1}</h1>
      <p className="m-0 mb-[25px] max-w-[530px] text-center text-lead-l font-light text-ink">{p.description}</p>
      <Ctas ctas={p.heroCtas} />
    </div>
  )
}

// §5 #2 QuotesMultiple → R-TwoUpStories with columns / borderBottom (no emphasis).
function QuotesMultiple({ quotes }) {
  return (
    <div className="col-span-full">
      <CustomerStoriesTwoUp
        section="QuotesMultiple"
        borderBottom
        nested
        storyPadding="none"
        companySize="small"
        columns={quotes.length > 1 ? 2 : 1}
        logoClassName="mx-auto h-[52px] max-w-[200px] object-contain mb-[4px]"
        stories={quotes.map((q) => ({
          logo: { src: q.logo, alt: q.logoAlt },
          quote: q.quote,
          name: q.name,
          title: q.company,
        }))}
      />
    </div>
  )
}

// §5 #4 How it works: text column (heading-2, RunningText IBM Plex Sans 18/32, CTAs) + right column.
function HowItWorks({ p }) {
  const h = p.howItWorks
  const centered = h.layout === 'single-column-centered'
  const right = h.right
  return (
    <div className={`pv1-howmain mx-auto flex w-full max-w-section px-[40px] tablet:flex-col ${centered ? 'justify-center' : ''}`}>
      <div className={centered ? 'max-w-[444px] flex-none' : 'flex-[1_1_0px]'}>
        <h2 className="m-0 mb-[20px] font-formula text-heading-2 font-extrabold text-ink-loud">{h.heading}</h2>
        <div className="pv1-running" dangerouslySetInnerHTML={{ __html: h.bodyHtml }} />
        <Ctas ctas={h.ctas} />
      </div>
      {right && !centered && (
        <div className="relative ml-[50px] flex-[1.5_1_0px] tablet:ml-0 tablet:mt-[60px] tablet:w-full tablet:flex-none">
          {right.kind === 'DataConnectionIlly' ? (
            <>
              <DataConnectionIlly name={h.connectionName} icon={h.connectionIcon} sql={right.sql ?? DEFAULT_SQL} dbt={h.dbtSchema} />
              {p.slug === 'postgres' && <ThirdParty />}
            </>
          ) : (
            <img src={right.image} alt={right.imageAlt} style={{ width: '100%', height: 'auto' }} />
          )}
        </div>
      )}
    </div>
  )
}

// Postgres only: ThirdPartyIntegrations (margin-top 50, padding 0 40, gap 25): H4 + two 80px tiles (gap 20).
const THIRD_PARTY = [
  { name: 'Materialize', logo: '/assets/pages/product/_shared/materialize-f9729cc2-142x50.svg', href: 'https://materialize.com/docs/integrations/' },
  { name: 'Cube', logo: '/assets/pages/product/_shared/cube-53d2695a-95x50.svg', href: 'https://cube.dev/blog/hex-integration-collaborative-data-notebooks' },
]
function ThirdParty() {
  return (
    <div className="mt-[50px] flex flex-col items-center gap-[25px] px-[40px]">
      <h4 className="m-0 font-formula text-heading-4 font-semibold text-ink-loud">Wire-compatible with Postgres</h4>
      <div className="flex w-full items-center gap-[20px]">
        {THIRD_PARTY.map((t) => (
          <div key={t.name} className="pv1-tile !h-[80px]">
            <Button variant="secondary" size="md" corners href={t.href} external>
              <div className="flex h-full w-full flex-col items-center justify-center">
                <img src={t.logo} alt={t.name} />
              </div>
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

const DEFAULT_SQL =
  'select\ncast({{timeframe}} as timestamp) as month,\nship, destination,\nsum(spice_tons) as spice_tons\nfrom atreides.vehicle_destinations\ngroup by 1,2,3'

// §5 #7 See it in action: heading-2 (mb 30) + 550px frame (250 ≤600) with the external iframe.
function Video({ video }) {
  return (
    <div className="mx-auto flex w-full max-w-section flex-col px-[40px]">
      <h2 className="m-0 mb-[30px] font-formula text-heading-2 font-extrabold text-ink-loud">{video.heading}</h2>
      <div className="relative h-[550px] w-full phone:h-[250px]">
        <div className="mb-[24px] flex h-full">
          <div className="relative h-full w-full">
            <iframe
              src={video.iframe}
              title={video.heading}
              className="absolute left-0 top-0 h-full w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// §5 #8 ExternalLinks "Learn more"
function ExternalLinks({ banner, links }) {
  return (
    <div className="mx-auto w-full max-w-section px-[40px]">
      <div className="relative flex w-full flex-auto">
        <div className="pv1-links-box">
          <div className="absolute top-[-12px] flex w-full flex-auto items-center justify-center">
            <h6 className="m-0 flex px-[10px] font-plex-mono text-heading-6 font-bold uppercase text-ink-muted">{banner}</h6>
          </div>
          <div className="flex w-full flex-wrap px-[25px] pb-[20px] pt-[30px]">
            {links.map((l) => (
              <Button key={l.href} variant="secondary" size="md" corners={false} href={l.href} external={isExternal(l.href)} className="pv1-link-item">
                <span className="flex h-full min-w-0 flex-col items-start justify-start whitespace-normal text-left font-normal">
                  <span className="mb-[5px] min-w-0 text-[14px] leading-[20px] text-ink-loud">{l.title}</span>
                  <span className="leading-[20px] text-ink">{l.source}</span>
                </span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function IntegrationDetail() {
  const { slug } = useParams()
  const p = getIntegration(slug)
  useDocumentTitle(p?.title)
  if (!p) return <PagePending />
  const custom = p.slug === 'aws' ? <AwsBlocks /> : p.slug === 'snowflake' ? <SnowflakeBlocks faqItems={p.faqItems} /> : null
  return (
    <V1PageLayout footer>
      <Info p={p} />
      {p.quotes.length > 0 && <QuotesMultiple quotes={p.quotes} />}
      <div className="relative mb-[100px]">
        {/* The top divider only renders when the page has no custom blocks (aws / snowflake / databricks end theirs with one). */}
        {!p.customBlocks && <TronDivider />}
        <div className="flex flex-col gap-[100px] pt-[80px] phone:gap-[50px]">
          <HowItWorks p={p} />
          {custom}
          {p.slug === 'databricks' && p.faqItems.length > 0 && (
            <div className="flex flex-col gap-[40px]">
              <div className="mx-auto w-full max-w-section px-[40px]">
                <Faq items={p.faqItems} answerStyle="page" tron={false} />
              </div>
              <TronDivider />
            </div>
          )}
          {p.video && <Video video={p.video} />}
          {p.externalLinks.length > 0 && <ExternalLinks banner={p.externalLinksBanner} links={p.externalLinks} />}
        </div>
      </div>
    </V1PageLayout>
  )
}

