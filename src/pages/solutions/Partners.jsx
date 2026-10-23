// /partners/ (specs/solutions.md T6 §4.6): PartnersHero → PartnersWhy → TronDivider → PartnerTiers → PartnersGrid →
// PartnerRegister (visual-only HubSpotFormShell, §4.7.2: local validation, no submission endpoint) → Footer.
// Every section is width 92% of the content column, margin 0 auto.
import { useEffect, useState } from 'react'
import { Button, ContentSection, Reveal, TronDivider } from '../../components/shared'
import Footer from '../../components/sections/Footer.jsx'
import './solutions.css'

const P = '/assets/pages/solutions/partners'
const H1 = 'm-0 font-display text-heading-1 font-bold text-ink-loud'
const H2 = 'm-0 font-formula text-heading-2 font-[800] text-ink-loud'
const TEXT_L = 'text-lead-l font-light text-ink'
const TEXT_XL = 'text-lead-xl font-light text-ink'
const DEAL_FORM = 'https://docs.google.com/forms/d/e/1FAIpQLSegPXa-9eP3rgCIg34v7wSWcyMq778LJnvMSASwCQ4Q3aEMbg/viewform'

function PartnersHero() {
  return (
    <Reveal className="mx-auto grid w-[92%] place-items-center pb-[64px] pt-[96px] phone:py-[48px]">
      <h1 className={`${H1} text-center phone-sm:text-left`}>Become a Partner</h1>
      <p className={`${TEXT_L} mx-0 mb-[40px] mt-[8px] max-w-[58ch] text-center phone-sm:text-left`}>
        Hex is a complete workspace for data science and analytics, bringing exploration, analysis, and visualization together in one
        place. By partnering with us, you’ll help transform data workflows and leave outdated tools behind. Join us to redefine
        analytics!
      </p>
      <div className="flex justify-center gap-[16px]">
        <Button variant="primary" size="md" href="#become-a-partner">
          Become a partner
        </Button>
        <Button variant="secondary" size="md" href={DEAL_FORM} external target="_blank">
          Register a deal
        </Button>
      </div>
    </Reveal>
  )
}

function PartnersWhy() {
  return (
    <Reveal className="mx-auto flex w-[92%] justify-center gap-[80px] pb-[80px] pt-[64px] tablet:flex-col">
      <img
        src="/assets/pages/solutions/_shared/support-section.svg"
        alt="Partner Illustration"
        loading="lazy"
        className="w-[max(36%,380px)] max-w-[440px] pl-[60px] tablet:mx-auto tablet:w-[min(90%,340px)] tablet:p-0"
      />
      <div className="pt-[24px] tablet:p-0">
        <h2 className={`${H2} mb-[20px]`}>Why become a partner</h2>
        <p className={`${TEXT_L} m-0 mb-[30px] max-w-[48ch]`}>
          Partnering with Hex means joining a mission to transform how data teams work. Our program offers the tools, support, and
          collaboration to support customers on their data science and analytics journey.
        </p>
        <div className="flex gap-[16px]">
          <Button variant="primary" size="md" href="/product/integrations/">
            Integration partners
          </Button>
          <Button variant="secondary" size="md" href="#partners">
            Consulting partners
          </Button>
        </div>
      </div>
    </Reveal>
  )
}

const TIERS = [
  {
    tier: 'gigabyte',
    name: 'Gigabyte',
    text: 'For partners who are just getting started working with Hex.',
    listTitle: 'Why join',
    items: ['Referral commission', 'Crossbeam data share', 'Free Hex account', 'Access to training resources'],
  },
  {
    tier: 'terabyte',
    name: 'Terabyte',
    text: 'For partners who have a track record of deep Hex knowledge and closing Hex business.',
    listTitle: 'Everything in Gigabyte, plus:',
    items: ['Technical support', 'Marketing resources', 'Dedicated Slack channel', 'Access to Hex Partner Engineer'],
  },
  {
    tier: 'petabyte',
    name: 'Petabyte',
    text: 'For partners who have demonstrated exceptional expertise and success in delivering Hex solutions.',
    listTitle: 'Everything in Terabyte, plus:',
    items: ['Dedicated Partner Manager', 'Co-branded marketing materials', 'Spotlight on our website', 'Dedicated Office Hours'],
  },
]

function PartnerTiers() {
  return (
    <Reveal className="mx-auto w-[92%]">
      <h2 className={`${H2} mb-[20px] pt-[32px] text-center`}>Partner tiers</h2>
      <p className={`${TEXT_XL} mx-auto mb-[72px] mt-0 max-w-[35ch] text-center`}>
        Hex’s program supports partners as they grow, offering tailored benefits at every stage of their journey.
      </p>
      <div className="mx-auto mb-[120px] grid max-w-[1200px] grid-cols-3 gap-[24px] tablet:mb-[80px] tablet:grid-cols-1 tablet:gap-[80px]">
        {TIERS.map((t) => (
          <div key={t.tier}>
            <div className="sol-tier-image" data-tier={t.tier}>
              <span className="bar-h" />
              <span className="bar-v-middle" />
              <img src={`${P}/${t.tier}-flag.png`} alt={`${t.name} Partner Image`} width="430" height="550" loading="lazy" />
            </div>
            <h3 className="mx-0 mb-[16px] mt-[32px] font-formula text-heading-3 font-[800] text-ink-loud">{t.name}</h3>
            <p className={`${TEXT_L} m-0 mb-[30px]`}>{t.text}</p>
            <h4 className="m-0 mb-[8px] font-formula text-heading-4 font-semibold text-ink-loud">{t.listTitle}</h4>
            <ul className={`sol-tier-list m-0 p-0 ${TEXT_L}`}>
              {t.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Reveal>
  )
}

// §4.6 cards in order: logo file, rendered size, tier
const PARTNERS = [
  ['phdata-logo.png', 'phData Logo', 140, 56, 'petabyte'],
  ['brooklyn-data.png', 'Brooklyn Data Logo', 153, 32, 'terabyte'],
  ['in516ht.png', 'In516ht Logo', 114, 32, 'gigabyte'],
  ['eoncollective-logo.png', 'Eon Collective', 202, 32, 'gigabyte'],
  ['impactful-insights.png', 'Impactful Insights', 128, 128, 'gigabyte'],
  ['cvector-alt.svg', 'cvector', 136, 40, 'gigabyte'],
  ['snowpack-data-logo.svg', 'Snowpack Data Logo', 183, 40, 'gigabyte'],
  ['clarity.svg', 'clarity', 100, 104, 'gigabyte'],
  ['analytics8.svg', 'analytics8', 93, 80, 'gigabyte'],
  ['exvolve-logo.png', 'exvolve', 188, 40, 'gigabyte'],
  ['das42-logo.svg', 'DAS42', 158, 32, 'gigabyte'],
  ['datum-labs-logo.svg', 'Datum Labs', 99, 32, 'gigabyte'],
]

function PartnersGrid() {
  return (
    <Reveal id="partners" className="relative mx-auto mb-[140px] w-[92%] scroll-mt-[120px] stack:mb-0">
      <h2 className={`${H2} mb-[20px] pt-[32px] text-center`}>Partners</h2>
      <p className={`${TEXT_XL} mx-auto mb-[72px] mt-0 max-w-[40ch] text-center stack:mb-[48px]`}>
        Our trusted consulting partners guide customers from Hex implementation to the deployment of production data applications.
      </p>
      <ul className="m-0 flex list-none flex-wrap justify-center gap-[32px] p-0 stack:flex-col stack:gap-[16px]">
        {PARTNERS.map(([file, alt, w, h, tier]) => (
          <li key={file} className="sol-partner-card">
            <img src={`${P}/${file}`} alt={alt} width={w} height={h} loading="lazy" style={{ width: w, height: h }} />
            <div className="sol-partner-badge" data-tier={tier}>
              {tier}
            </div>
          </li>
        ))}
      </ul>
    </Reveal>
  )
}

const FIELDS = [
  [
    { name: 'firstname', label: 'First Name' },
    { name: 'lastname', label: 'Last Name' },
  ],
  [
    { name: 'email', label: 'Work Email', type: 'email' },
    { name: 'company', label: 'Company Name' },
  ],
  [
    { name: 'jobtitle', label: 'Job Title' },
    { name: 'region', label: 'Country/Region', placeholder: 'North America, LATAM, EMEA, or APAC' },
  ],
]

// HubSpotFormShell (§4.7.2): visual only. Empty required fields get the HubSpot error line; nothing is submitted.
function RegisterForm() {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const onSubmit = (e) => {
    e.preventDefault()
    const next = {}
    FIELDS.flat().forEach((f) => {
      if (!values[f.name]?.trim()) next[f.name] = true
    })
    setErrors(next)
    const first = FIELDS.flat().find((f) => next[f.name])
    if (first) e.currentTarget.querySelector(`[name="${first.name}"]`)?.focus()
  }
  return (
    <form noValidate onSubmit={onSubmit} className="sol-form">
      <div className="flex flex-col gap-[20px]">
        {FIELDS.map((row, i) => (
          <div key={i} className="sol-form-row">
            {row.map((f) => {
              const id = `partner-${f.name}`
              return (
                <div key={f.name}>
                  <label htmlFor={id}>
                    {f.label}
                    <span className="req" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <input
                    id={id}
                    name={f.name}
                    type={f.type ?? 'text'}
                    placeholder={f.placeholder}
                    required
                    aria-invalid={errors[f.name] ? true : undefined}
                    value={values[f.name] ?? ''}
                    onChange={(e) => {
                      setValues((v) => ({ ...v, [f.name]: e.target.value }))
                      if (errors[f.name]) setErrors((er) => ({ ...er, [f.name]: false }))
                    }}
                  />
                  {errors[f.name] && (
                    <div className="sol-form-error" role="alert">
                      <span className="sr-only">Error: </span>Please complete this required field.
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        ))}
      </div>
      <div className="flex flex-col items-start gap-[10px]">
        <button type="submit" className="sol-form-submit">
          Submit
        </button>
      </div>
      <p className="sol-form-legal text-ink">
        By submitting this form you agree to the processing of your personal data as described in our{' '}
        <a href="https://learn.hex.tech/docs/legal/terms-and-conditions" rel="noopener noreferrer" target="_blank">
          Terms
        </a>{' '}
        and our{' '}
        <a href="https://learn.hex.tech/docs/trust/privacy-policy" rel="noopener noreferrer" target="_blank">
          Privacy policy
        </a>
        .
      </p>
    </form>
  )
}

function PartnerRegister() {
  return (
    <Reveal id="become-a-partner" className="relative mx-auto mb-[140px] w-[92%] scroll-mt-[120px]">
      <h2 className={`${H2} mb-[48px] pt-[32px] text-center`}>Become a partner</h2>
      <div className="mx-auto max-w-[643px]">
        <RegisterForm />
      </div>
    </Reveal>
  )
}

export default function Partners() {
  useEffect(() => {
    document.title = 'Consulting Partners Program | Hex'
  }, [])
  return (
    <div className="sol-scope">
      <ContentSection>
        <div className="flex w-full flex-col pt-[200px] stack:pt-[144px]">
          <PartnersHero />
          <PartnersWhy />
          <TronDivider />
          <PartnerTiers />
          <PartnersGrid />
          <PartnerRegister />
        </div>
      </ContentSection>
      <ContentSection>
        <Footer />
      </ContentSection>
    </div>
  )
}
