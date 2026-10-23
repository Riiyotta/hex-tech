// /product/cli/ (dark): specs/product.md §4.2. Doc height 5619 @1440 / 8403 @390.
import { FullWidthQuote, OutroTout } from '../../../components/shared'
import { ContentSection } from '../../../components/shared/LayoutGrid.jsx'
import Footer from '../../../components/sections/Footer.jsx'
import { AnalyticsAgentWork, CliFooterCta, FeatureList, HeroCli, WorkflowTable } from './CliSections.jsx'
import '../shared/productCore.css'
import './cli.css'

export default function ProductCli() {
  return (
    <>
      <HeroCli />
      <FullWidthQuote
        logo={{ src: '/assets/logos/customers/stubhub.svg', alt: 'StubHub' }}
        name="Nova Wang"
        title="Head of Analytics Engineering, StubHub"
        quote={
          <>
            “We're already seeing strong pull for Hex AI across StubHub. CLI is the next logical step —{' '}
            <strong>it lets our most technical users build Hex into the automated workflows where AI does its best work.</strong>”
          </>
        }
      />
      <AnalyticsAgentWork />
      <FeatureList />
      <WorkflowTable />
      <CliFooterCta />
      <ContentSection>
        <OutroTout
          title="Built for data teams who want more than a dashboard"
          description="Hex is the AI analytics platform where your notebooks, agents, and self-serve all live together — and actually talk to each other."
          actions={[{ label: 'Contact Sales', href: '/request-a-demo/' }]}
        />
        <Footer />
      </ContentSection>
    </>
  )
}
