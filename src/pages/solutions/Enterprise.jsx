// /enterprise/ (specs/solutions.md T3 §4.3). BasicPageRow frame (checkered margins), content from y 200:
// EnterpriseHero → minimal CustomerBanner → "Your data is safe" → "Governance & Control" → "Everything your team needs"
// → Integrations (REUSE) → "A complete solution" (CtaSplitTout) → TronDivider + Faq (REUSE) → Footer.
import { useEffect } from 'react'
import { Button, ContentSection, OutlineCard, Reveal } from '../../components/shared'
import CustomerBanner from '../../components/sections/CustomerBanner.jsx'
import Integrations from '../../components/sections/Integrations.jsx'
import Faq from '../../components/sections/Faq.jsx'
import Footer from '../../components/sections/Footer.jsx'
import './solutions.css'

const A = '/assets/pages/solutions'
const LOGOS = [
  { slug: 'reddit', name: 'Reddit', w: 115, h: 50 },
  { slug: 'notion', name: 'Notion', w: 39, h: 50 },
  { slug: 'anthropic', name: 'Anthropic', w: 132, h: 50 },
  { src: `${A}/_shared/logo-seatgeek.svg`, name: 'SeatGeek', w: 51, h: 50 },
  { src: `${A}/_shared/logo-clickup.svg`, name: 'ClickUp', w: 119, h: 50 },
  { src: `${A}/_shared/logo-alltrails.svg`, name: 'AllTrails', w: 151, h: 50 },
]

// Section H1s: PP Formula SemiExtended 700 60/78 -1.848px, dark gradient, left
const SECTION_H1 = 'gradient-heading mt-0 text-left font-display text-heading-1 font-bold'
const LEAD = 'm-0 text-lead-xl font-light text-ink phone-sm:text-lead-l'
// common shell: flex, max 1240, padding 40 40 0, mb 200 (60 ≤1000), ≤800 column + padding 0 40
const SHELL = 'mx-auto flex w-full max-w-section px-[40px] pt-[40px] mb-[200px] tablet:mb-[60px] stack:flex-col stack:px-[40px] stack:pt-0'

function GreenTick() {
  return (
    <svg data-icon="green-tick" height="15" viewBox="0 0 15 15" width="15" aria-hidden="true">
      <path d="M1 7L5.5 11.5L14 3" fill="none" stroke="var(--sol-tick)" strokeLinecap="square" />
    </svg>
  )
}

function CheckItem({ children }) {
  return (
    <div className="sol-check">
      <span className="sol-check__icon">
        <GreenTick />
      </span>
      <p className="m-0 text-lead-l font-light text-ink-loud">{children}</p>
    </div>
  )
}

function CheckGrid({ items, className = '' }) {
  return (
    <div className={`grid grid-cols-2 gap-y-[16px] stack:grid-cols-1 ${className}`}>
      {items.map((t) => (
        <CheckItem key={t}>{t}</CheckItem>
      ))}
    </div>
  )
}

function EnterpriseHero() {
  return (
    <Reveal className="mx-auto mb-[140px] grid w-full max-w-section grid-cols-2 px-[40px] tablet:mb-[60px] stack:flex stack:flex-col stack:px-[16px]">
      <div className="relative max-w-[540px] [&_p]:w-[92%] stack:[&_p]:w-full">
        <div className="sol-ent-eyebrow">Enterprise</div>
        <h1 className="m-0 mb-[17px] text-left font-display text-[68px] font-bold leading-[1.3] tracking-[-0.0308em] text-ink-loud phone:text-[54px] phone:leading-[56px]">
          Built for scale, security, and control
        </h1>
        <p className={`${LEAD} mb-[35px]`}>Connect to data, provision users, and enforce permissions with ease.</p>
        <CheckGrid
          className="mb-[46px] mt-[30px]"
          items={['SSO and SCIM', 'HIPAA BAA available', 'Single tenant deploys', 'OAuth and SSL data connections']}
        />
        <div className="flex gap-[20px] stack:flex-col stack:gap-[10px] stack:self-stretch">
          <Button variant="primary" size="lg" href="/request-a-demo/">
            Get in touch
          </Button>
        </div>
      </div>
      <div className="sol-ent-hero-right relative flex items-center justify-start stack:mt-[40px] stack:justify-center">
        <img src={`${A}/enterprise/illustration-enterprise-hero.svg`} alt="Enterprise Digital Illustration" width="624" height="523" className="h-auto" />
      </div>
    </Reveal>
  )
}

const SAFE_ITEMS = [
  ['01', 'Completely compliant', 'SOC2 Type II, HIPAA, GDPR.'],
  ['02', 'Secure database connections', 'SSL and pass-through OAuth available.'],
  ['03', 'Flexible deployment models', 'Multi-tenant HIPAA or EU and Single-Tenant options available.'],
]

function DataIsSafe() {
  return (
    // ≤800 the live order is title → logo row → numbered grid → button (§4.3.3), no gap: the left column
    // becomes display:contents and its children are re-ordered around the logo row.
    <Reveal className={`${SHELL} gap-[80px] !pt-[160px] stack:gap-0 stack:!pt-[40px]`}>
      <div className="flex min-w-0 flex-1 flex-col items-start stack:contents">
        <h1 className={`${SECTION_H1} mb-[50px] max-w-[500px] stack:order-1 stack:mb-0`}>Your data is safe with us</h1>
        <div className="mb-[40px] grid grid-cols-2 gap-x-[60px] gap-y-[30px] stack:order-3 stack:mb-[50px] stack:flex stack:flex-col stack:gap-[30px]">
          {SAFE_ITEMS.map(([n, h, p]) => (
            <div key={n}>
              <p className="m-0 mb-[10px] font-plex-mono text-[16px] font-light uppercase leading-[1.5] tracking-[2px] text-[color:var(--lightPurple)] stack:mb-[4px]">{n}</p>
              <h3 className="m-0 mb-[10px] font-formula text-heading-3 font-[800] text-ink-loud stack:mb-[4px]">{h}</h3>
              <p className="m-0 text-lead-l font-light text-ink">{p}</p>
            </div>
          ))}
        </div>
        <Button variant="secondary" size="md" href="/security/" className="stack:order-4 stack:self-start">
          Learn more about security
        </Button>
      </div>
      <div className="flex flex-col items-start stack:order-2 stack:w-full">
        <div className="flex w-[320px] flex-col stack:w-full stack:flex-row stack:py-[30px]">
          <div className="sol-logo-block ml-auto">
            <img src={`${A}/enterprise/logo-gdpr.svg`} alt="GDPR Logo" width="74" height="72" loading="lazy" />
          </div>
          <div className="sol-logo-block mr-auto">
            <img src={`${A}/enterprise/logo-aicpa-soc.svg`} alt="AICPA SOC Logo" width="87" height="86" loading="lazy" />
          </div>
          <div className="sol-logo-block ml-auto">
            <img src={`${A}/enterprise/logo-hipaa.svg`} alt="HIPAA Logo" width="108" height="54" loading="lazy" />
          </div>
        </div>
      </div>
    </Reveal>
  )
}

function Governance() {
  return (
    <Reveal className={`${SHELL} items-center gap-[120px] phone:gap-[60px]`}>
      <img
        src={`${A}/enterprise/illustration-governance-and-control.svg`}
        alt="Governance and Control Digital Illustration"
        width="508"
        height="463"
        loading="lazy"
        className="phone:w-full"
      />
      <div className="flex flex-col items-start">
        <h1 className={`${SECTION_H1} mb-[12px]`}>Governance &amp; Control</h1>
        <p className={`${LEAD} mb-[25px]`}>Ensure compliance, mitigate risk, and optimize resources.</p>
        <div className="flex flex-col gap-[30px] pb-[30px] pt-[5px]">
          {[
            'SSO support',
            'SCIM Directory sync from Okta, Active Directory, and Google',
            'Secure data connections using SSL and OAuth pass-through',
            'Audit logging and version control, so you know who did what when',
          ].map((t) => (
            <CheckItem key={t}>{t}</CheckItem>
          ))}
        </div>
        <Button variant="secondary" size="md" href="/security/">
          Learn more about control
        </Button>
      </div>
    </Reveal>
  )
}

// IconText icons from dom/enterprise-support.html (comment 15, clock 16, user 15, learn 15), colour --fg1100
const SUPPORT_ICONS = {
  comment: { size: 15, d: 'M0 1.5C0 0.671572 0.671573 0 1.5 0H13.5C14.3284 0 15 0.671573 15 1.5V10.5C15 11.3284 14.3284 12 13.5 12H13V14.2826C13 14.7952 12.3987 15.0717 12.0095 14.7381L8.81504 12H1.5C0.671573 12 0 11.3284 0 10.5V1.5ZM1.5 1C1.22386 1 1 1.22386 1 1.5V10.5C1 10.7761 1.22386 11 1.5 11H9.18496L12 13.4129V11H13.5C13.7761 11 14 10.7761 14 10.5V1.5C14 1.22386 13.7761 1 13.5 1H1.5Z' },
  clock: { size: 16, d: 'M0.5 8.00003C0.5 3.85789 3.85786 0.500031 8 0.500031C12.1421 0.500031 15.5 3.85789 15.5 8.00003C15.5 12.1422 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1422 0.5 8.00003ZM8 1.50003C4.41015 1.50003 1.5 4.41018 1.5 8.00003C1.5 11.5899 4.41015 14.5 8 14.5C11.5899 14.5 14.5 11.5899 14.5 8.00003C14.5 4.41018 11.5899 1.50003 8 1.50003ZM7.5 8.00003V3.50003H8.5V7.79292L11.3536 10.6465L10.6464 11.3536L7.64645 8.35358C7.55268 8.25982 7.5 8.13264 7.5 8.00003Z' },
  user: { size: 15, d: 'M8.9581 2.19055C8.50153 2.00125 7.99908 1.95159 7.51429 2.04786C7.0295 2.14412 6.58414 2.38198 6.23453 2.73135C5.88492 3.08073 5.64677 3.52593 5.55018 4.01065C5.4536 4.49538 5.50292 4.99786 5.69191 5.45456C5.8809 5.91125 6.20107 6.30165 6.61194 6.57638C7.0228 6.85111 7.50591 6.99784 8.00017 6.998C8.32834 6.99811 8.65332 6.93358 8.95656 6.80809C9.25979 6.68261 9.53534 6.49863 9.76747 6.26665C9.9996 6.03467 10.1838 5.75925 10.3095 5.4561C10.4351 5.15295 10.4999 4.82801 10.5 4.49984C10.5002 4.00558 10.3538 3.52237 10.0793 3.11132C9.80485 2.70027 9.41467 2.37984 8.9581 2.19055ZM7.31952 1.06701C7.99831 0.932223 8.70182 1.00175 9.34109 1.26679C9.98036 1.53184 10.5267 1.9805 10.911 2.55603C11.2952 3.13157 11.5002 3.80813 11.5 4.50017C11.4999 4.95966 11.4092 5.41463 11.2332 5.83909C11.0572 6.26355 10.7994 6.64919 10.4743 6.97399C10.1493 7.2988 9.76351 7.5564 9.33893 7.7321C8.91436 7.9078 8.45933 7.99815 7.99983 7.998C7.3078 7.99777 6.63137 7.79233 6.05609 7.40767C5.48081 7.023 5.03252 6.47638 4.7679 5.83693C4.50328 5.19749 4.43423 4.49393 4.56946 3.81524C4.7047 3.13654 5.03815 2.51319 5.52766 2.02401C6.01717 1.53483 6.64074 1.20179 7.31952 1.06701ZM5.5076 9.996C4.84456 9.996 4.20867 10.2594 3.73983 10.7282C3.27099 11.1971 3.0076 11.833 3.0076 12.496V13.992H13V12.496C13 11.833 12.7366 11.1971 12.2678 10.7282C11.7989 10.2594 11.163 9.996 10.5 9.996H5.5076ZM14 12.496C14 11.5677 13.6313 10.6775 12.9749 10.0211C12.3185 9.36475 11.4283 8.996 10.5 8.996H5.5076C4.57934 8.996 3.6891 9.36475 3.03273 10.0211C2.37635 10.6775 2.0076 11.5677 2.0076 12.496V14.992H13H14V14.493V12.496Z' },
  learn: { size: 15, d: 'M0.509073 0.5V0C0.374058 0 0.244574 0.0526784 0.149104 0.146447C0.0536343 0.240215 0 0.367392 0 0.5H0.509073ZM0.509073 13.5H0C0 13.6326 0.0536343 13.7598 0.149104 13.8536C0.244574 13.9473 0.374058 14 0.509073 14V13.5ZM3 0V15H4V0H3ZM0.509073 1H11.7087V0H0.509073V1ZM13.2359 2.5V11.5H14.254V2.5H13.2359ZM11.7087 13H0.509073V14H11.7087V13ZM1 13.5V0.5H0V13.5H1ZM13.2359 11.5C13.2359 11.8978 13.075 12.2794 12.7886 12.5607C12.5022 12.842 12.1137 13 11.7087 13V14C12.3837 14 13.0312 13.7366 13.5085 13.2678C13.9859 12.7989 14.254 12.163 14.254 11.5H13.2359ZM11.7087 1C12.1137 1 12.5022 1.15804 12.7886 1.43934C13.075 1.72064 13.2359 2.10218 13.2359 2.5H14.254C14.254 1.83696 13.9859 1.20107 13.5085 0.732233C13.0312 0.263392 12.3837 0 11.7087 0V1ZM6 5H11V4H6V5Z', evenodd: false },
}
const SUPPORT_ITEMS = [
  ['comment', 'Email and Slack support'],
  ['clock', 'Priority SLAs and response times'],
  ['user', 'Dedicated Product Expert'],
  ['learn', 'Customized learning sessions'],
]

function Support() {
  return (
    <Reveal className={`${SHELL} flex-col stack:mb-[20px]`}>
      <div className="mb-[80px] flex flex-col items-center px-[200px] tablet:mb-[40px] tablet:items-start tablet:px-0">
        <h1 className="gradient-heading mt-0 mb-[12px] text-center font-display text-heading-1 font-bold stack:text-left">
          Everything your team needs to succeed
        </h1>
        <p className={`${LEAD} mb-[40px] text-center tablet:text-left`}>
          Our expert Support teams engage deeply with customers, from implementation to ongoing usage.
        </p>
        <Button variant="primary" size="lg" href="/request-a-demo/">
          Get in touch
        </Button>
      </div>
      <div className="flex px-[100px] tablet:flex-col tablet:px-0">
        <div className="grid flex-1 grid-cols-2 items-start gap-[50px] stack:grid-cols-1 stack:gap-[20px]">
          {SUPPORT_ITEMS.map(([icon, text]) => {
            const ic = SUPPORT_ICONS[icon]
            return (
              <div key={text} className="flex items-center gap-[15px]">
                <div className="flex text-fg-1100">
                  <svg data-icon={icon} width={ic.size} height={ic.size} viewBox={`0 0 ${ic.size} ${ic.size}`} aria-hidden="true">
                    <path d={ic.d} fill="currentColor" fillRule={ic.evenodd === false ? undefined : 'evenodd'} clipRule={ic.evenodd === false ? undefined : 'evenodd'} />
                  </svg>
                </div>
                <p className="m-0 text-lead-l font-normal text-ink-loud phone-sm:text-[16px] phone-sm:leading-[1.5]">{text}</p>
              </div>
            )
          })}
        </div>
        <img src={`${A}/_shared/support-section.svg`} alt="Customer Support Digital Illustration" width="441" height="471" loading="lazy" className="tablet:hidden" />
      </div>
    </Reveal>
  )
}

function CompleteSolution() {
  return (
    <Reveal className={`${SHELL} mt-[90px] gap-[40px] tablet:mt-[10px] tablet:gap-0`}>
      <div className="flex-[1_1_50%]">
        <h1 className={`${SECTION_H1} mb-[50px] stack:mb-0`}>A complete solution for enterprise analytics</h1>
        <CheckGrid
          className="mb-[46px] mt-[30px]"
          items={['Unlimited users', 'Dedicated support', 'Unlimited projects', 'Customized environments and more...', 'Usage reports']}
        />
      </div>
      <OutlineCard
        accent
        className="flex flex-[1_1_45%] cursor-default flex-col items-center justify-center gap-[20px] px-[60px] py-[68px] text-center stack:p-[40px]"
      >
        <h2 className="m-0 font-formula text-heading-2 font-[800] text-ink-loud">Ready to get started?</h2>
        <p className={`${LEAD} mb-[25px]`}>Get in touch and find out which plan is right for you.</p>
        <Button variant="primary" size="lg" href="/request-a-demo/">
          Contact Sales
        </Button>
      </OutlineCard>
    </Reveal>
  )
}

// §4.3.7 (answer copy as recorded in the spec)
const FAQ_ITEMS = [
  {
    q: "What are Hex's security policies and controls?",
    answerHtml:
      "<p>Hex is built on industry-leading security and privacy standards that keep our customer's data secure while connecting, querying, analyzing, and sharing. Hex is committed to helping customers of all sizes meet their data protection and compliance requirements.</p><p>As evidence of this, we have <a href=\"/blog/soc-2-type-II-for-you/\">obtained our SOC 2 Type II report</a>, which attests to the effectiveness and our adherence to security controls and processes.</p><p><a href=\"/security/\">Read more</a></p>",
  },
  {
    q: 'What deployment models does Hex offer?',
    answerHtml:
      '<p>Hex has 2 options for deployment:</p><ul><li>Multi-tenant cloud, including separate HIPAA and EU stacks</li><li>Single-tenant VPCs, typically set up to securely peer to your existing infrastructure. These are fully-managed.</li></ul><p>Please feel free to <a href="/request-a-demo/">get in touch</a> to discuss which might work best for you.</p>',
  },
  {
    q: 'Does Hex work with large data?',
    answerHtml:
      '<p>Hex is built to seamlessly handle cloud-scale workloads. Hex runs queries directly against the customer’s data warehouse, meaning workflows can scale as large as the underlying warehouse allows.</p>',
  },
  {
    q: "What is Hex's pricing model?",
    answerHtml:
      '<p>Our Enterprise solution is a custom solution tailored to meet your needs. It includes advanced security, custom support packages, and a series of control features for large organizations.</p><p><a href="/request-a-demo/">Get in touch</a></p>',
  },
  {
    q: 'How can we get started evaluating Hex?',
    answerHtml:
      "<p>Anyone can sign up for a free 14-day trial of Hex's Team plan. If you'll require more time to evaluate Hex or are curious about our Enterprise plan, please <a href=\"/request-a-demo/\">reach out</a> and we'll get you set up!</p>",
  },
  {
    q: 'How is data stored in Hex?',
    answerHtml:
      '<p>Hex stores all cell output data, including previews of SQL results, in AWS RDS, and uploaded files are stored in AWS S3. Data in RDS and S3 persists indefinitely until the associated project is deleted or a deletion request is made. Caching of SQL cell output data is opt-in, configurable, and stored in S3 for up to 90 days.</p>',
  },
  {
    q: 'How do I manage who has access to data in Hex?',
    answerHtml:
      '<p>Hex supports SSO via OIDC within the product. Hex gives users the tools to implement role-based access control on all Hex artifacts. This gives customers fine-grained control over who in an organization has access to specific data. Administrators have control over what users have access to and can restrict access to databases, and the ability to view or edit projects.</p>',
  },
]

export default function Enterprise() {
  useEffect(() => {
    document.title = 'Enterprise | Hex'
  }, [])
  return (
    <div className="sol-scope">
      <ContentSection>
        <div className="flex w-full flex-col items-center pt-[200px] stack:pt-[144px]">
          <EnterpriseHero />
          <CustomerBanner variant="minimal" logos={LOGOS} />
          <DataIsSafe />
          <Governance />
          <Support />
          <div className="w-full max-w-section">
            <Integrations />
          </div>
          <CompleteSolution />
          <div className="relative z-[1] w-full bg-fg-100">
            <Faq items={FAQ_ITEMS} answerStyle="page" />
          </div>
        </div>
      </ContentSection>
      <ContentSection>
        <Footer />
      </ContentSection>
    </div>
  )
}
