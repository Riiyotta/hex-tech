// DEV ONLY: theme test bench. Routes /__theme-test (dark) and /__theme-test/light (light), registered in
// src/routes.jsx only when import.meta.env.DEV (never bundled in production builds).
// Renders the shared layer on one page so dark tokens can be compared against reference/pages/{product,solutions}.
import { ContentSection } from '../../components/shared/LayoutGrid.jsx'
import {
  AnimatedCta,
  AnnouncementPill,
  Button,
  Callout,
  CompareVs,
  CustomerStoryCard,
  DarkResourceCard,
  FullWidthQuote,
  G2Card,
  GlassCard,
  InfoText,
  OutlineCard,
  OutroTout,
  QuoteCard,
  ResourceCard,
  Rotator,
  SectionHeading,
  SocialTout,
  TronDivider,
} from '../../components/shared'
import CustomerBanner from '../../components/sections/CustomerBanner.jsx'
import CustomerStoriesTwoUp from '../../components/sections/CustomerStoriesTwoUp.jsx'
import Faq from '../../components/sections/Faq.jsx'
import Footer from '../../components/sections/Footer.jsx'
import Integrations from '../../components/sections/Integrations.jsx'

const MINIMAL_LOGOS = [
  { slug: 'reddit', name: 'Reddit', w: 115, h: 50 },
  {
    slug: 'notion',
    name: 'Notion',
    w: 39,
    h: 50,
    story: { href: '/customers/notion/', align: 'left', quote: '"Our vision for Notion’s data team…"', author: 'Aks Nemana', title: 'Data Scientist' },
  },
  { slug: 'anthropic', name: 'Anthropic', w: 132, h: 50 },
  { src: '/assets/pages/product/_shared/logo-seatgeek-b2ffbeef-51x50.svg', name: 'SeatGeek', w: 51, h: 50 },
  {
    src: '/assets/pages/product/_shared/logo-clickup-8ec37f23-119x50.svg',
    name: 'ClickUp',
    w: 119,
    h: 50,
    story: {
      href: '/customers/clickup/',
      align: 'left',
      quote: '"Hex lets us go from an ad-hoc analysis to a published data app with just a few clicks."',
      author: 'Sai Srigiriaju',
      title: 'Head of Growth Strategy & Ops at ClickUp',
    },
  },
  { src: '/assets/pages/product/_shared/logo-alltrails-22fd2415-151x50.svg', name: 'AllTrails', w: 151, h: 50 },
]

const PAGE_FAQ = [
  { q: 'Is Hex a BI tool?', answerHtml: '<p>Yes. Most companies today use Hex as a BI platform… <a href="/product/bi/">Learn more</a>.</p><ul><li>One</li><li>Two</li></ul>' },
  { question: 'How is Hex priced?', answer: 'Plans start free.' },
]

const WORDS = ['Product', 'Marketing', 'Sales', 'Customer success', 'Data teams', 'Data leaders']

function Label({ children }) {
  return <p className="m-0 mb-[12px] mt-[48px] font-mono text-label uppercase text-ink-muted">{children}</p>
}

export default function ThemeTest() {
  return (
    <>
      <ContentSection>
        <section className="flex flex-col px-[40px] pb-[60px] pt-[160px]">
          <Label>AnnouncementPill · SectionHeading (display)</Label>
          <AnnouncementPill href="/blog/introducing-the-hex-cli/" icon="/assets/svg/icons/nav/hex-cli.svg" label="The Hex CLI" text="Read the announcement" />
          <SectionHeading title="Time to look at BI," italic="differently" description="Answers your whole team can trust." maxWidth={800} />
          <SectionHeading variant="solution" title="See how teams use Hex" />

          <Label>Buttons</Label>
          <div className="flex flex-wrap items-center gap-[20px]">
            <Button variant="primary" size="lg" href="#">Primary lg</Button>
            <Button variant="secondary" size="lg" href="#">Secondary lg</Button>
            <Button variant="primary" size="md" href="#">Primary md</Button>
            <Button variant="secondary" size="md" corners href="#">Secondary md + corners</Button>
            <Button variant="primary" size="nav" href="#">Get started</Button>
            <Button variant="secondary" size="md" icon={<span className="mask-icon h-full w-full" style={{ '--icon': 'url(/assets/svg/icons/nav/docs.svg)' }} />}>
              Icon
            </Button>
            <Button variant="secondary" size="md" selected>Selected chip</Button>
          </div>
          <div className="mt-[20px] w-[375px]">
            <Button variant="secondary" size="md" block href="#">Block (full width)</Button>
          </div>

          <Label>AnimatedCta</Label>
          <div className="flex gap-[30px]">
            <AnimatedCta href="#" icon={<img src="/assets/pages/company/_shared/svg/icons/Cta-PrimaryCtaIconWrapper-2fe842f2.svg" alt="" />}>See open roles</AnimatedCta>
            <AnimatedCta href="#" color="default">Watch the video</AnimatedCta>
            <AnimatedCta variant="secondary" href="#">Request a demo</AnimatedCta>
          </div>

          <Label>Rotator (hub word)</Label>
          <Rotator
            items={WORDS}
            itemHeight={121}
            width="100%"
            fadeOutDuration="0.3636s"
            renderItem={(w) => <span className="gradient-heading block pt-[10px] font-display text-hero font-bold leading-[121px]">{w}</span>}
          />

          <Label>InfoText (h2 + description + secondary CTA)</Label>
          <InfoText size="h2" title="Drag, drop, data app" description="Hex’s classic app builder makes it easy." cta={{ label: 'Learn more', href: '#', variant: 'secondary' }} />

          <Label>GlassCard · OutlineCard · Callout</Label>
          <div className="flex gap-[20px]">
            <GlassCard interactive className="w-[300px] p-[40px]">Interactive glass card</GlassCard>
            <OutlineCard accent className="w-[300px] p-[40px]">Outline card</OutlineCard>
            <Callout icon="/assets/svg/icons/nav/docs.svg" className="max-w-[370px]">
              Don&apos;t see what you&apos;re looking for? Drop us a line at <a href="mailto:partnerships@hex.tech">partnerships@hex.tech</a>.
            </Callout>
          </div>

          <Label>ResourceCard · DarkResourceCard · CustomerStoryCard</Label>
          <div className="grid grid-cols-3 gap-[20px]">
            <ResourceCard href="#" type="Blog post" title="Your next BI tool shouldn't be a BI tool" tags={['Data leader']} readTime="4 min" image={{ src: '/assets/pages/solutions/hub/your-next-bi-tool-shouldn-t-be-a-bi-tool-76aeaf65.png' }} />
            <DarkResourceCard href="#" title="Prompt" cta="Register" image={{ src: '/assets/pages/solutions/hub/your-next-bi-tool-shouldn-t-be-a-bi-tool-76aeaf65.png', ratio: '1680 / 1040' }} />
            <DarkResourceCard variant="template" href="#" title="SQL Notebooks" tag="TEMPLATE" author="Izzy Miller · April 13, 2022" description="SQL finally gets literate programming" image={{ src: '/assets/pages/product/_shared/sql-notebooks-c492b4ae-1680x1020.png' }} />
            <CustomerStoryCard href="#" logo={{ src: '/assets/logos/customers/figma.svg', alt: 'Figma', width: 97, height: 50, className: 'logo-grayscale' }} title="Lowering barriers to insight" meta={[{ label: 'Industry /', value: 'Design' }]} />
          </div>

          <Label>CompareVs (horizontal + vertical)</Label>
          <CompareVs layout="horizontal" />
          <div className="mt-[20px] flex w-[440px]">
            <CompareVs />
          </div>
        </section>
      </ContentSection>

      <FullWidthQuote
        logo={{ src: '/assets/logos/customers/stubhub.svg', alt: 'StubHub' }}
        name="Nova Wang"
        title="Head of Analytics Engineering, StubHub"
        quote={<>“We're already seeing strong pull for Hex AI across StubHub. CLI is the next logical step — <strong>it lets our most technical users build Hex into the automated workflows.</strong>”</>}
      />

      <ContentSection>
        <CustomerBanner />
        <CustomerBanner variant="minimal" label="Trusted by leading data teams" logos={MINIMAL_LOGOS} />
        <SocialTout>
          <G2Card />
          <QuoteCard
            logo={{ src: '/assets/logos/customers/notion.svg', alt: 'Notion' }}
            quote="“Our vision for Notion's data team is that anyone… — and Hex enables that.”"
            author={{ name: 'Abhishek Modi', title: 'Software Engineer at Notion', avatar: { src: '/assets/images/misc/abhishek-modi-headshot.jpg' } }}
          />
        </SocialTout>
        <SocialTout>
          <QuoteCard
            variant="bordered"
            logo={{ src: '/assets/pages/product/_shared/logo-clickup-8ec37f23-119x50.svg', alt: 'ClickUp' }}
            quote="Hex has helped ClickUp save millions of dollars in churn.”"
            author={{ name: 'Sai Srigiriaju', title: 'Head of Growth Strategy & Ops', company: 'ClickUp' }}
          />
        </SocialTout>
      </ContentSection>

      <CustomerStoriesTwoUp />

      <ContentSection bordered>
        <Integrations />
        <OutroTout
          title="Want self-serve BI that actually sticks?"
          description="Learn why 2,000+ teams approach BI differently with Hex."
          actions={[
            { label: 'Request a demo', href: '/request-a-demo/' },
            { label: 'Get started for free', href: 'https://app.hex.tech/signup', variant: 'secondary', external: true },
          ]}
        />
        <OutroTout variant="band" title="Questions? Talk to us" description="Get in touch with us to see a demo." actions={[{ label: 'Contact Sales', href: '/request-a-demo/' }]} />
        <Faq items={PAGE_FAQ} answerStyle="page" title="FAQs" />
        <TronDivider flipped />
        <Footer />
      </ContentSection>
    </>
  )
}
