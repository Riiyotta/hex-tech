// hex.tech homepage (route /) (CLONE_SPEC §1.1, §1.3).
// PageWrapper (#FFFCFC, eggplant text, paper-texture overlay) → fixed Header → ContentSection with
// sections 1–8 (checkered margins) → full-bleed two-up stories → bordered ContentSection with 10–15
// → 32px bottom grid row.
import Hero from '../components/Hero.jsx'
import { ContentSection } from '../components/shared/LayoutGrid.jsx'
import CustomerBanner from '../components/sections/CustomerBanner.jsx'
import BuiltDifferent from '../components/sections/BuiltDifferent.jsx'
import TrustedAnswers from '../components/sections/TrustedAnswers.jsx'
import OrganizationContext from '../components/sections/OrganizationContext.jsx'
import ConversationalAnalytics from '../components/sections/ConversationalAnalytics.jsx'
import ContextStudio from '../components/sections/ContextStudio.jsx'
import ProductEthos from '../components/sections/ProductEthos.jsx'
import CustomerStoriesTwoUp from '../components/sections/CustomerStoriesTwoUp.jsx'
import UseCases from '../components/sections/UseCases.jsx'
import LovedByTeams from '../components/sections/LovedByTeams.jsx'
import Integrations from '../components/sections/Integrations.jsx'
import BottomCta from '../components/sections/BottomCta.jsx'
import Faq from '../components/sections/Faq.jsx'
import Footer from '../components/sections/Footer.jsx'

export default function Home() {
  return (
    <>
      <ContentSection>
        <div className="relative isolate">
          <Hero />
          <CustomerBanner />
          <BuiltDifferent />
          <TrustedAnswers />
          <OrganizationContext />
          <ConversationalAnalytics />
          <ContextStudio />
          <ProductEthos />
        </div>
      </ContentSection>
      <CustomerStoriesTwoUp />
      <ContentSection bordered>
        <UseCases />
        <LovedByTeams />
        <Integrations />
        <BottomCta />
        <Faq />
        <Footer />
      </ContentSection>
    </>
  )
}
