// /product/bi/ (light): specs/product.md §4.1. Doc height 8559 @1440 / 12624 @390.
import { OutroTout } from '../../../components/shared'
import { ContentSection } from '../../../components/shared/LayoutGrid.jsx'
import CustomerBanner from '../../../components/sections/CustomerBanner.jsx'
import Faq from '../../../components/sections/Faq.jsx'
import Footer from '../../../components/sections/Footer.jsx'
import faq from '../data/faq.json'
import { ApproachCards, BI_LOGOS, BiHero, LookingDifferently, Resources, ThreeFeatures } from './BiSections.jsx'
import '../shared/productCore.css'
import './bi.css'

export default function ProductBi() {
  return (
    <>
      <BiHero />
      <ContentSection>
        <CustomerBanner label="Behind the teams setting the standard" logos={BI_LOGOS} />
      </ContentSection>
      <LookingDifferently />
      <ThreeFeatures />
      <ApproachCards />
      <Resources />
      <ContentSection bordered>
        <Faq items={faq.bi[0].items} answerStyle="page" tron={false} />
      </ContentSection>
      <ContentSection>
        <OutroTout
          title="Want self-serve BI that actually sticks?"
          description="Learn why 2,000+ teams approach BI differently with Hex. Get in touch for a custom demo of Hex BI or start a free trial to see it for yourself."
          actions={[
            { label: 'Request a demo', href: '/request-a-demo/' },
            { label: 'Get started for free', href: 'https://app.hex.tech/signup', variant: 'secondary', external: true },
          ]}
        />
        <Footer />
      </ContentSection>
    </>
  )
}
