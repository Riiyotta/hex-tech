// /careers/ (company §4.2, T2): photo-wall hero · A place to do your best work · Open roles · Footer.
import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { AnimatedCta, BasicPageRow, Button, Callout, CartesianGrid, ContentSection, FooterRow, GlassCard, MaskIcon, Reveal } from '../../components/shared'
import { GradientHeading, HANDBOOK_URL, ICON } from './common.jsx'
import photos from './data/careersPhotos.js'
import departments from './data/careers.js'

const PHOTO_DIR = '/assets/pages/company/careers/'
// Reveal order (§5): top wide row → left-top, right-top → left-middle, right-middle → left-bottom, right-bottom → bottom row.
const ORDER = ['top', 'leftTop', 'rightTop', 'leftMiddle', 'rightMiddle', 'leftBottom', 'rightBottom', 'bottom']
const ALL_PHOTOS = Object.values(photos).flat()
const STAGGER = 0.0096 // ≈10ms per photo, 38 photos over ≈356ms

function usePhotosReady() {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    let alive = true
    Promise.all(
      ALL_PHOTOS.map(
        (p) =>
          new Promise((resolve) => {
            const img = new Image()
            img.onload = img.onerror = resolve
            img.src = `${PHOTO_DIR}careers-hero-${p.name}.jpg`
            if (img.complete) resolve()
          }).then(() => undefined),
      ),
    ).then(() => alive && setReady(true))
    return () => {
      alive = false
    }
  }, [])
  return ready
}

function HeroPhoto({ photo, index, ready }) {
  return (
    <motion.div
      className="cc-hero-photo"
      initial={{ opacity: 0, filter: 'blur(8px)' }}
      animate={ready ? { opacity: 1, filter: 'blur(0px)' } : { opacity: 0, filter: 'blur(8px)' }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], delay: index * STAGGER }}
    >
      <GlassCard className="cc-hero-photo__card">
        <img
          src={`${PHOTO_DIR}careers-hero-${photo.name}.jpg`}
          alt={photo.alt}
          width={photo.w}
          height={155}
          decoding="async"
          style={{ cursor: photo.cursor }}
        />
      </GlassCard>
    </motion.div>
  )
}

function CareersHero() {
  const ready = usePhotosReady()
  // global reveal index per photo, in the measured order
  const indexOf = useMemo(() => {
    const map = new Map()
    let i = 0
    ORDER.forEach((group) => photos[group].forEach((p) => map.set(`${group}:${p.name}`, i++)))
    return map
  }, [])
  const row = (group, extra = '') => (
    <div className={`cc-hero-photos__row ${extra}`} data-group={group}>
      {photos[group].map((p) => (
        <HeroPhoto key={p.name} photo={p} index={indexOf.get(`${group}:${p.name}`)} ready={ready} />
      ))}
    </div>
  )
  const scrollToRoles = () => document.getElementById('open-roles')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="relative" data-section="CareersHero">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <CartesianGrid />
      </div>
      <div className="cc-careers-hero">
        {row('top', 'cc-hero-photos__wide')}
        <div className="cc-careers-hero__main">
          <div className="cc-careers-hero__cell" data-side="left">
            <div className="cc-careers-hero__side" data-side="left">
              {row('leftTop')}
              {row('leftMiddle')}
              {row('leftBottom')}
            </div>
          </div>
          <Reveal animateOnMount className="cc-careers-hero__text">
            <GradientHeading as="h1" italic="Make everyone" className="cc-careers-h">
              a data person
            </GradientHeading>
            <div className="flex flex-col items-center gap-[30px]">
              <div className="cc-careers-hero__desc">
                <p className="m-0 text-lead-l font-light text-ink">
                  At Hex, we build beloved tools that allow people and teams to make sense of their world.{' '}
                  <strong className="font-medium">Our roadmap is full of big ideas and little details, and we want your help bringing them to life.</strong>
                </p>
              </div>
              <div className="cc-careers-hero__actions">
                <AnimatedCta onClick={scrollToRoles} icon={<MaskIcon src={ICON.ctaArrow} size={16} />}>
                  See open roles
                </AnimatedCta>
                <AnimatedCta href={HANDBOOK_URL} external icon={<MaskIcon src={ICON.library} size={15} />}>
                  The Hex Handbook
                </AnimatedCta>
              </div>
            </div>
          </Reveal>
          <div className="cc-careers-hero__cell" data-side="right">
            <div className="cc-careers-hero__side" data-side="right">
              {row('rightTop')}
              {row('rightMiddle')}
              {row('rightBottom')}
            </div>
          </div>
        </div>
        {row('bottom', 'cc-hero-photos__wide')}
      </div>
    </div>
  )
}

function Highlight({ icon, title, children }) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center">
        <div className="mb-[10px] flex h-[48px] w-[48px] flex-none items-center justify-center rounded-full border border-grid-500 text-fg-1200">
          <MaskIcon src={icon} size={15} />
        </div>
      </div>
      <div className="cc-highlight__info">
        <p className="text-lead-l font-medium text-ink">{title}</p>
        <div className="flex flex-col gap-[10px]">{children}</div>
      </div>
    </div>
  )
}

function DoYourBestWork() {
  return (
    <div className="cc-backed" data-section="DoYourBestWork">
      <MaskIcon src="/assets/pages/company/careers/svg/DoYourBestWorkTout-Wrapper-7e5aee8d.svg" width={1553} height={820} className="cc-orbit text-ink" />
      <div className="cc-best__inner">
        <div className="cc-best__side">
          <Highlight icon={ICON.headphones} title="Our culture is focused on quality, craft, and speed.">
            <p className="text-small font-light text-ink">We have very few meetings, bias toward action, and take care of each other through feedback and support.</p>
            <p className="text-small font-light text-ink">
              Check out our <a href="https://learn.hex.tech/changelog" target="_blank" rel="noopener noreferrer" className="cc-link">changelog</a>!
            </p>
          </Highlight>
        </div>
        <div className="cc-best__center">
          <GradientHeading size="h2" italic="A place to do" className="cc-careers-h">
            your best work
          </GradientHeading>
          <p className="mb-[20px] text-body font-light text-ink">
            <span className="font-medium">We’re a team of builders.</span> We spend our days designing and developing beautiful products, growing and supporting our user base, and helping each other succeed and learn.
          </p>
          <Button variant="primary" size="lg" href={HANDBOOK_URL} external target="_blank" icon={<MaskIcon src={ICON.library} size={15} />}>
            Read our handbook
          </Button>
        </div>
        <div className="cc-best__side">
          <Highlight icon={ICON.remoteWork} title="We're hiring in San Francisco, New York, and remote.">
            <p className="text-small font-light text-ink">We have beautiful offices in both cities – and remote team members throughout US, Canada, and a few other countries.</p>
            <p className="text-small font-light text-ink">
              Learn more about{' '}
              <a href="https://www.notion.so/hexhq/Working-at-Hex-4396aaae4827457c97739093a3d67340" target="_blank" rel="noopener noreferrer" className="cc-link">
                how we work
              </a>
              .
            </p>
          </Highlight>
        </div>
      </div>
    </div>
  )
}

const LOCATIONS = [
  { key: 'SF', match: 'San Francisco' },
  { key: 'NYC', match: 'New York' },
  { key: 'Remote', match: 'Remote' },
]

function SidebarList({ items, active, onSelect }) {
  return (
    <div className="cc-roles-sidebar__list">
      {items.map((it) => (
        <div
          key={it.key}
          role="button"
          tabIndex={0}
          data-active={active === it.key ? 'true' : 'false'}
          className="cc-roles-sidebar__item"
          onClick={() => onSelect(active === it.key ? null : it.key)}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelect(active === it.key ? null : it.key)}
        >
          + {it.key} [{it.count}]
        </div>
      ))}
    </div>
  )
}

// ≤1000: the sidebar lists collapse into native select pickers (NativePickerSelect, measured on the 390 tree)
function NativePicker({ items, active, allLabel, onSelect, label }) {
  const current = items.find((it) => it.key === active)
  return (
    <div className="cc-picker">
      <div className="cc-picker__toggle">
        <span className="text-left">{current ? `${current.key} [ ${current.count} ]` : allLabel}</span>
        <MaskIcon src={ICON.chevronRightMedium} size={16} className="rotate-90" />
      </div>
      <select aria-label={label} className="cc-picker__select" value={active ?? ''} onChange={(e) => onSelect(e.target.value || null)}>
        <option value="">{allLabel}</option>
        {items.map((it) => (
          <option key={it.key} value={it.key}>
            {it.key} [{it.count}]
          </option>
        ))}
      </select>
    </div>
  )
}

function OpenRoles() {
  const [filter, setFilter] = useState({ dept: null, loc: null })
  const total = departments.reduce((n, d) => n + d.roles.length, 0)
  const deptItems = departments.map((d) => ({ key: d.dept, count: d.roles.length }))
  const locItems = LOCATIONS.map((l) => ({
    key: l.key,
    count: departments.reduce((n, d) => n + d.roles.filter((r) => r.location.includes(l.match)).length, 0),
  }))
  const locMatch = LOCATIONS.find((l) => l.key === filter.loc)?.match
  const visible = departments
    .filter((d) => !filter.dept || d.dept === filter.dept)
    .map((d) => ({ ...d, roles: d.roles.filter((r) => !locMatch || r.location.includes(locMatch)) }))
    .filter((d) => d.roles.length)

  return (
    <div id="open-roles" className="cc-roles" data-section="OpenRoles">
      <div className="cc-roles-sidebar">
        <div className="cc-roles-sidebar__inner">
          <div className="cc-roles-sidebar__header">
            <GradientHeading size="h2" align="left">Open roles</GradientHeading>
            <div className="cc-roles-sidebar__count font-mono text-ink-muted">[{total}]</div>
          </div>
          <div className="cc-roles-sidebar__section">
            <div className="cc-roles-sidebar__label cc-desktop-only">Department</div>
            <SidebarList items={deptItems} active={filter.dept} onSelect={(dept) => setFilter((f) => ({ ...f, dept }))} />
            <NativePicker label="Department" items={deptItems} active={filter.dept} allLabel={`All departments [ ${total} ]`} onSelect={(dept) => setFilter((f) => ({ ...f, dept }))} />
          </div>
          <div className="cc-roles-sidebar__section">
            <div className="cc-roles-sidebar__label cc-desktop-only">Location</div>
            <SidebarList items={locItems} active={filter.loc} onSelect={(loc) => setFilter((f) => ({ ...f, loc }))} />
            <NativePicker label="Location" items={locItems} active={filter.loc} allLabel="All locations" onSelect={(loc) => setFilter((f) => ({ ...f, loc }))} />
          </div>
        </div>
      </div>
      <div className="cc-roles__list">
        {visible.map((d) => (
          <div key={d.dept} className="cc-roles__dept">
            <div className="cc-roles__info">
              <h3 className="m-0 font-formula text-heading-3 font-extrabold text-ink-loud">{d.dept}</h3>
              {d.description && <p className="m-0 text-small font-light text-ink">{d.description}</p>}
              {d.learnMore && (
                <div className="flex items-center gap-[10px] text-small">
                  <MaskIcon src={ICON.arrowRight} size={15} className="text-fg-1200" />
                  <a
                    href={d.learnMore.startsWith('https://hex.tech') ? d.learnMore.replace('https://hex.tech', '') + '/' : d.learnMore}
                    {...(d.learnMore.startsWith('https://hex.tech') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                    className="cc-link"
                  >
                    Learn more
                  </a>
                </div>
              )}
            </div>
            <div className="flex flex-auto flex-col">
              {d.roles.map((r) => (
                <a key={r.href} href={r.href} className="cc-role">
                  <div className="cc-role__title">
                    <MaskIcon src={ICON.outputArrow} size={15} className="text-fg-1200" />
                    <p className="cc-role__title-text">{r.title}</p>
                  </div>
                  <div className="cc-role__loc">
                    <MaskIcon src={ICON.location} size={15} className="text-fg-1200" data-icon="" />
                    <p className="cc-role__loc-text">{r.location}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
        <Callout icon={ICON.knowledge} size="small" className="mb-[40px]">
          <div className="cc-scam">
            <h4 className="m-0 font-formula text-heading-4 font-semibold text-ink-loud">Your safety matters to us</h4>
            <p>
              To protect yourself from potential scams, remember that Hex recruiters only contact you from @hex.tech email addresses or through official Hex LinkedIn accounts. In some cases, we may partner with vetted recruiting agencies who will identify themselves as working on behalf of Hex.
            </p>
            <p>
              Be cautious of messages from other sources. Legitimate Hex recruiters will never ask for money, fees, or banking information before your first day. Hex will never extend a job offer without a live interview with a member of our team. If you're ever unsure about a communication, don't click any links. Visit hex.tech/careers directly for confirmed position openings.
            </p>
          </div>
        </Callout>
      </div>
    </div>
  )
}

export default function CareersPage() {
  return (
    <>
      <ContentSection>
        <CareersHero />
      </ContentSection>
      <BasicPageRow bordered inner="full">
        <DoYourBestWork />
      </BasicPageRow>
      <BasicPageRow bordered inner="full" className="!items-stretch">
        <OpenRoles />
      </BasicPageRow>
      <FooterRow variant="checkered" />
    </>
  )
}
