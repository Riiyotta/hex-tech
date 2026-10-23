// /about/ (company §4.1, T1). Rows: hero (+ CustomerBanner in the same row) · Backed by the best ·
// Elsewhere on the internet · A team of data nerds · Footer.
import { AnimatedCta, BasicPageRow, Button, CartesianGrid, ContentSection, FooterRow, GlassCard, MaskIcon, PerlinNoise, Reveal } from '../../components/shared'
import CustomerBanner from '../../components/sections/CustomerBanner.jsx'
import { GradientHeading, HANDBOOK_URL, ICON, NewsroomPostCard } from './common.jsx'
import newsroom from './data/newsroom.js'

const A = '/assets/pages/company/about/'

// DOM order (widths 80,120,137,181 | 94,68,103,108,152 | 140,81,71,157)
const INVESTORS = [
  ['2a450aa6', 80, 'a16z'], ['cb9cdee7', 120, 'Amplify'], ['24274196', 137, 'Sequoia'], ['39995c70', 181, 'Redpoint'],
  ['7e0133af', 94, 'Avra'], ['a397b6d7', 68, 'Operator Collective'], ['53bb1164', 103, 'Box Group'], ['bd44980d', 108, 'Vandelay Ventures'], ['cd289ac3', 152, 'Databricks'],
  ['b4c5de21', 140, 'Snowflake'], ['5d6fa0aa', 81, 'XYZ'], ['9926ad1c', 71, 'Tokyo Black'], ['bb045d8d', 157, 'Next Legacy'],
]

const NERDS = {
  1: [190, 142, 'Hex team members looking down through a stairwell, photographed from below'],
  2: [291, 178, 'Hex team members on a group hike, taking a trail selfie with a long line of backpackers behind them'],
  3: [310, 182, 'Five Hex team members at a conference booth in front of a banner reading "The unified AI-powered platform for data impact"'],
  4: [370, 232, 'Behind-the-scenes video shoot: a person poses at a large window overlooking a city building while a camera operator films nearby'],
  5: [225, 172, 'Hex team members playing a tower-building challenge on a lawn during a company offsite'],
  6: [290, 312, 'Hex team member in a green Hex sweatshirt on a beach at sunset, playfully holding tiny teammates in her outstretched palm'],
  7: [151, 132, 'Hex team member trying glassblowing, using a blowpipe at a furnace'],
  8: [175, 142, 'Three Hex team members holding colorful balloon flower animals at an event'],
  9: [91, 158, "Custom rhinestone-encrusted disco ball with a person's face depicted in mosaic"],
  10: [191, 278, 'Person photographing a Hex out-of-home ad — a tall pink column with "fastest way to apply" and Hex branding — in an airport or transit hall'],
  11: [210, 142, 'Two Hex team members with backpacks hiking through arid mountain terrain'],
  12: [370, 188, 'Three Hex team members posed in a dramatically lit room filled with multiple monitors, vintage tech gear, and audio equipment'],
  13: [370, 197, 'Hex team members posing with the Brooklyn Cyclones mascot at a baseball game at sunset'],
}

function Photo({ n, style }) {
  const [w, h, alt] = NERDS[n]
  return (
    <div className="cc-nerds__item" style={style}>
      <GlassCard className="cc-nerds__photo">
        <img src={`${A}data-nerds-${n}.jpg`} alt={alt} width={w} height={h} loading="lazy" />
      </GlassCard>
    </div>
  )
}

function AboutHero() {
  return (
    <div className="cc-condensed relative" data-section="AboutHero">
      <div className="cc-about-hero__perlin" aria-hidden="true">
        <PerlinNoise texture="eggplant" size={1024} opacity={0.24} />
      </div>
      <div className="pointer-events-none absolute inset-0" style={{ gridColumn: '1 / -1' }} aria-hidden="true">
        <CartesianGrid />
      </div>
      <Reveal animateOnMount className="cc-about-hero__text">
        <GradientHeading as="h1" italic="Changing the way" className="cc-about-hero__h1">
          the world uses data
        </GradientHeading>
        <div className="cc-about-hero__bottom">
          <div className="min-w-0 flex-none">
            <GlassCard className="cc-about-hero__image">
              <img src={`${A}about-hex-pic.jpg`} alt="Hex team members posing together in front of large HEX letters at a company event" width={596} height={375} />
            </GlassCard>
          </div>
          <div className="cc-about-hero__right">
            <p className="m-0 text-lead-l font-light text-ink">
              <strong className="font-medium">Hex builds the world's best tools for making sense of your world.</strong>
            </p>
            <p className="m-0 text-lead-l font-light text-ink">
              We started the company to build the product we had always wished we had – and now, 6 years in, our system supports over 2,000 customers globally, from leading AI labs to regulated banks.
            </p>
            <div className="flex">
              <AnimatedCta href="/careers/" icon={<MaskIcon src={ICON.ctaArrow} size={16} />}>
                See open roles
              </AnimatedCta>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  )
}

function Lockup({ italic, title, text, actions, italicStyle }) {
  return (
    <div className="cc-lockup">
      <GradientHeading italic={italic} align="left" className="cc-lockup__h2" italicStyle={italicStyle}>
        {title}
      </GradientHeading>
      <p className="text-lead-l font-light text-ink">{text}</p>
      {actions && <div className="cc-lockup__actions">{actions}</div>}
    </div>
  )
}

function BackedByTheBest() {
  return (
    <div className="cc-backed" data-section="BackedByTheBest">
      <MaskIcon src={`${A}svg/ToutBackedByTheBest-Wrapper-92d18a0d.svg`} width={1553} height={820} className="cc-orbit text-ink opacity-75" />
      <div className="cc-backed__inner">
        <div className="cc-backed__text">
          <Lockup italic="Backed by" title="the best" text="We’ve raised a lot of money from great investors." />
        </div>
        <div className="cc-backed__logos">
          {INVESTORS.map(([hash, w, alt]) => (
            <div key={hash} className="cc-backed__logo">
              <img src={`${A}svg/ToutBackedByTheBest-Logo-${hash}.svg`} alt={alt} width={w} height={80} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ElsewhereOnTheInternet() {
  const items = newsroom.cards.slice(0, 6)
  return (
    <div className="flex w-full flex-col items-center" data-section="ElsewhereOnTheInternet">
      <div className="cc-elsewhere__inner">
        <div className="flex w-full justify-center px-[clamp(30px,0.8203rem+3.75vw,60px)]">
          <GradientHeading italic="Elsewhere on" className="cc-elsewhere__h2">
            {' '}the internet
          </GradientHeading>
        </div>
        <div className="cc-elsewhere__main">
          <div className="cc-elsewhere__grid">
            {items.map((item) => (
              <NewsroomPostCard key={item.title} item={item} />
            ))}
          </div>
          <div className="cc-elsewhere__track">
            {items.map((item) => (
              <div key={item.title}>
                <NewsroomPostCard item={item} />
              </div>
            ))}
          </div>
          <Button variant="secondary" size="lg" href="/newsroom/">
            View more internet links
          </Button>
        </div>
      </div>
    </div>
  )
}

function TeamOfDataNerds() {
  const actions = (
    <>
      <Button variant="secondary" size="md" corners href="/careers/" icon={<MaskIcon src={ICON.headphones} size={15} />}>
        See open roles
      </Button>
      <Button variant="secondary" size="md" corners href={HANDBOOK_URL} external target="_blank" icon={<MaskIcon src={ICON.library} size={15} />}>
        The Hex Handbook
      </Button>
    </>
  )
  return (
    <div className="cc-nerds" data-section="TeamOfDataNerds">
      <div className="cc-nerds__inner">
        <div className="cc-nerds__strip">
          {[1, 2, 3, 4, 5].map((n) => (
            <Photo key={n} n={n} />
          ))}
        </div>
        <div className="cc-nerds__text">
          <Lockup
            italic="A team of"
            title="data nerds"
            text="Our team has centuries of combined experience in the data world. Our journey to world domination is just beginning!"
            actions={actions}
          />
        </div>
        <div className="cc-nerds__strip">
          {[6, 7, 8, 9, 10, 11, 12, 13].map((n) => (
            <Photo key={n} n={n} />
          ))}
        </div>
        <div className="cc-nerds__grid" data-desktop="">
          <div className="cc-nerds__row" data-pad="">
            <Photo n={1} />
            <Photo n={2} style={{ marginTop: -20 }} />
            <Photo n={3} style={{ marginTop: -10 }} />
            <Photo n={4} />
          </div>
          <div className="cc-nerds__row">
            <div className="cc-nerds__col" style={{ alignItems: 'flex-end', marginTop: -60 }}>
              <Photo n={5} />
              <Photo n={8} />
            </div>
            <Photo n={6} />
            <div className="cc-nerds__col">
              <Photo n={7} />
              <Photo n={9} />
            </div>
          </div>
          <div className="cc-nerds__row" data-pad="">
            <Photo n={11} style={{ marginTop: 102 }} />
            <Photo n={12} style={{ marginTop: 82 }} />
            <Photo n={10} style={{ marginTop: -38 }} />
            <Photo n={13} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <>
      <ContentSection>
        <AboutHero />
        <CustomerBanner />
      </ContentSection>
      <BasicPageRow inner="full">
        <BackedByTheBest />
      </BasicPageRow>
      <BasicPageRow bordered inner="full">
        <ElsewhereOnTheInternet />
      </BasicPageRow>
      <BasicPageRow inner="full">
        <TeamOfDataNerds />
      </BasicPageRow>
      <FooterRow variant="checkered" />
    </>
  )
}
