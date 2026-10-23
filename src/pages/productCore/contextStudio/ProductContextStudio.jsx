// /product/context-studio/ (dark): specs/product.md §4.3. Doc height 8675 @1440 / 12735 @390.
import { BasicPageRow, FullWidthQuote, OutroTout } from '../../../components/shared'
import { ContentSection, LayoutGrid } from '../../../components/shared/LayoutGrid.jsx'
import CustomerStoriesTwoUp from '../../../components/sections/CustomerStoriesTwoUp.jsx'
import Faq from '../../../components/sections/Faq.jsx'
import Footer from '../../../components/sections/Footer.jsx'
import faq from '../data/faq.json'
import { BentoSection, CsHero, ImprovesWithUse, ObservableEverywhere, PlatformOverview, UnifiedContext } from './CsSections.jsx'
import '../shared/productCore.css'
import './context-studio.css'

const STORIES = [
  {
    logo: { src: '/assets/logos/customers/notion.svg', alt: 'Notion' },
    before: '“Development and deployment ',
    emphasis: 'is so speedy.',
    after: ' Seeing my semantic model changes immediately rendered in Hex was a joy.”',
    name: 'Peter R.',
    title: 'Data Engineer at Notion',
  },
  {
    logo: { src: '/assets/pages/product/context-studio/customerstoriestwoup-1eaf4b79-169x50.svg', alt: 'Weights & Biases' },
    before: '“Hex made setting up a connection to MetricFlow a breeze! The intuitive click-and-drag UI ',
    emphasis: 'empowers our stakeholders',
    after: ' to perform self-serve analysis.”',
    name: 'Mercedes W.',
    title: 'Data Scientist at Weights & Biases',
  },
]

export default function ProductContextStudio() {
  return (
    <>
      <CsHero />
      <PlatformOverview />
      <UnifiedContext />
      <ObservableEverywhere />
      <ImprovesWithUse />
      <FullWidthQuote
        logo={{ src: '/assets/pages/product/context-studio/zoe-logo.svg', alt: 'Craig W. quote' }}
        name="Craig W."
        title="Staff Data Engineer, Zoe"
        quote={
          <>
            “<strong>Context Studio gives us the confidence to roll out agents on our data.</strong> It's something I check every day — seeing context gaps and suggested improvements surfaced automatically provides a practical way for us to bring trusted AI self-service to the business.”
          </>
        }
      />
      <BentoSection />
      <CustomerStoriesTwoUp stories={STORIES} nameSize="body" />
      <LayoutGrid>
        <div style={{ gridColumn: '1 / -1' }}>
          <OutroTout
            title="Bring speed & trust together in Hex"
            description="Get in touch with us to see a demo or find out which plan is right for you."
            actions={[{ label: 'Contact Sales', href: '/request-a-demo/' }]}
          />
        </div>
      </LayoutGrid>
      {/* live FAQ__Wrapper gsSzNy keeps its own 80px padding inside the padded BasicPageRow (row 856 tall) */}
      <BasicPageRow bordered>
        <Faq items={faq['context-studio'][0].items} answerStyle="page" tron={false} />
      </BasicPageRow>
      <ContentSection>
        <Footer />
      </ContentSection>
    </>
  )
}
