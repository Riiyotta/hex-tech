// /product/embedded-analytics/ (specs/product.md §4.8, dark, V1 layout).
import { MaskIcon, OutroTout, Reveal, V1PageLayout } from '../../components/shared'
import CustomerBanner from '../../components/sections/CustomerBanner.jsx'
import { DEMO, ICONS, QuoteRow, V1H2Panel, V1Hero, V1TwoUp } from './blocks.jsx'
import { MINIMAL_LOGOS } from './DataApps.jsx'
import { useDocumentTitle } from './useDocumentTitle.js'
import './productV1.css'

const A = '/assets/pages/product/embedded-analytics'

function Media({ src, width, height, pos, splat = false }) {
  return (
    <div className="pv1-embed-media">
      <div className={pos}>
        <img src={src} alt="Teamwork" width={width} height={height} style={{ width: '100%', height: 'auto' }} loading="lazy" />
        {splat && (
          <div className="pv1-splat" aria-hidden="true">
            <MaskIcon src={`${ICONS}/ctx-EmbeddedAnalyticsPageContent__SplatMarkWrapper.svg`} size={50} />
          </div>
        )}
      </div>
    </div>
  )
}

const TWO_UPS = [
  {
    eyebrow: 'BUILD',
    title: 'Ship faster',
    p: [
      "Use Hex's fast, flexible notebook to deliver data insights to your customers in minutes instead of weeks or months.",
      'With queries, code, and no-code living in one canvas, your data team can build stunning visualizations for your engineers to embed.',
    ],
    cta: { label: 'Discover Notebooks', href: '/product/notebooks/' },
    media: <Media src={`${A}/notebooks-img.png`} width={1876} height={1382} pos="pv1-pos-notebook" />,
  },
  {
    eyebrow: 'CUSTOMIZE',
    title: 'Make it yours',
    p: [
      'Customize your embedded app for a white-labeled user interface, indistinguishable from the rest of your product.',
      'Easily preview and test your embedded experience to make sure it meets the quality bar your customers know and love.',
    ],
    cta: { label: 'Discover Data Apps', href: '/product/data-apps/' },
    media: <Media src={`${A}/customize.png`} width={1448} height={1108} pos="pv1-pos-customize" splat />,
  },
  {
    eyebrow: 'EMBED',
    title: 'Easy, breezy integration',
    p: [
      'Light-weight and easy to use, the Hex Embed API is designed for developer-friendly implementation.',
      'No bulky SDK integrations — just hand off your beautiful dashboards for deployment.',
    ],
    media: <Media src={`${A}/embed.png`} width={1512} height={1076} pos="pv1-pos-embed" />,
  },
  {
    eyebrow: 'SCALE',
    title: 'Low floor, high ceiling',
    p: [
      'Build one project to power tailored data apps for all your customers, without engineering overhead.',
      'Start small, and scale as you grow new revenue streams from embedded experiences.',
    ],
    media: <Media src={`${A}/scale.png`} width={1396} height={1249} pos="pv1-pos-scale" />,
  },
]

const QUOTES = [
  {
    logo: { src: `${A}/customer-logo-ab190c6c-168x50.svg`, alt: 'customer logo' },
    quote:
      "\"Hex has completely transformed our analytics capabilities. We can now create new embedded analytics dashboards in minutes, and the platform's flexibility allows us to easily adapt to our customers' diverse needs.”",
    author: { name: 'Ronald Miller', title: 'Engineering Manager, Data at MedScout' },
  },
  {
    logo: { src: `${A}/customer-logo-5fb6f6dd-166x50.svg`, alt: 'customer logo' },
    quote:
      '"Before Hex embedded analytics, we dealt with authentication barriers that complicated our reporting workflow. Now, our clients have a seamless experience where their personalized analytics are baked right into our secure portal.”',
    author: { name: 'Sam Martin', title: 'Data Science Manager at Candidly' },
  },
]

const CARDS = [
  {
    title: 'Seamless authentication',
    text: 'A single API call handles pass-through authentication and row-level security, so your customers simply log in to your product for immediate access to only their own data.',
  },
  {
    title: 'Interactive analytics',
    text: 'Go beyond static dashboards, and build dynamic data apps that take in user inputs. Let your customers export CSVs and PDFs for their own analyses.',
  },
  {
    title: 'Real-time data',
    text: 'Keep your customers’ dashboards fresh with live queries against your cloud data warehouse for the latest and greatest data.',
  },
]

export default function EmbeddedAnalytics() {
  useDocumentTitle('Embedded Analytics for Product Teams and Builders | Hex')
  return (
    <V1PageLayout footer>
      <div className="pv1-usecase-grid">
        <V1Hero
          title={
            <>
              Embedded analytics,
              <br />
              built for agility
            </>
          }
          description="Seamlessly embed powerful data experiences for your customers."
          actionsClassName="gap-[16px] mb-[48px]"
        >
          <Reveal className="pv1-video-frame">
            <video className="relative mx-auto block w-full max-w-[840px]" autoPlay loop muted playsInline>
              <source src={`${A}/embeddedanalyticspagecontent-89579e06.mp4`} />
            </video>
          </Reveal>
          <CustomerBanner variant="minimal" label="Trusted by leading data teams" logos={MINIMAL_LOGOS} logoHeight={40} />
        </V1Hero>
        <V1H2Panel
          pt="small"
          title={
            <>
              Drive growth
              <br />
              with stunning analytics
            </>
          }
        />
        {TWO_UPS.map((t, i) => (
          <V1TwoUp
            key={t.title}
            reverse={i % 2 === 0}
            media={t.media}
            eyebrow={t.eyebrow}
            title={t.title}
            description={
              <>
                {t.p.map((x) => (
                  <p key={x} className="pv1-text-20">
                    {x}
                  </p>
                ))}
              </>
            }
            cta={t.cta}
          />
        ))}
        <div className="full-width">
          <div className="mx-auto max-w-[1200px]">
            <QuoteRow quotes={QUOTES} />
          </div>
        </div>
        <V1H2Panel pt="large" title="Deliver a first-class user experience" />
        <Reveal className="grid grid-cols-3 gap-[48px] pb-[120px] pt-[80px] stack:grid-cols-1">
          {CARDS.map((c, i) => (
            <div key={c.title} className="flex flex-col items-center gap-[8px] text-center">
              <div className="w-[20px] text-fg-1200">
                <MaskIcon src={`${ICONS}/embedded-card-${i}.svg`} size={20} />
              </div>
              <h3 className="m-0 font-formula text-heading-4 font-semibold text-ink-loud">{c.title}</h3>
              <p className="m-0 text-[14px] font-light leading-[22px] text-ink">{c.text}</p>
            </div>
          ))}
        </Reveal>
        <OutroTout
          className="full-width"
          title="Monetize your data with embedded analytics"
          description="Get in touch with us to see a demo or find out which plan is right for you."
          actions={[{ label: 'Contact Sales', href: DEMO }]}
        />
      </div>
    </V1PageLayout>
  )
}
