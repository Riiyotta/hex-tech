// CLONE_SPEC §4.15: Footer (reference/dom/99-footer.html) — wordmark + "Made with [emoji rotator] on 🌎.",
// 4 link columns + legal row, and the hit counter. Rotator motion per §6.8.
import { Reveal } from '../shared'
import EmojiRotator from './Footer/EmojiRotator.jsx'
import HitCounter from './Footer/HitCounter.jsx'
import './Footer/Footer.css'

const COLUMNS = [
  {
    title: 'Platform',
    links: [
      ['AI and agents', '/capability/ai/'],
      ['Agentic notebooks', '/product/notebooks/'],
      ['Conversational analytics', '/product/threads/'],
      ['Context Studio', '/product/context-studio/'],
      ['Data apps', '/product/data-apps/'],
      ['Hex CLI', '/product/cli/'],
      ['Business intelligence', '/product/bi/'],
      ['Exploratory analysis', '/capability/exploratory-analysis/'],
      ['Embedded analytics', '/product/embedded-analytics/'],
      ['Integrations', '/product/integrations/'],
      ['Changelog', 'https://learn.hex.tech/changelog', true],
    ],
  },
  {
    title: 'Resources',
    links: [
      ['Pricing', '/pricing/'],
      ['Switching to Hex', '/product/switching-to-hex/'],
      ['Enterprise', '/enterprise/'],
      ['Docs', 'https://learn.hex.tech', true],
      ['Blog', '/blog/'],
      ['Events', '/resources/events/'],
      ['Templates', '/templates/'],
      ['Compare', '/compare/'],
      ['Trust Center', 'https://trust.hex.tech', true],
      ['Status', 'https://status.hex.tech', true],
    ],
  },
  {
    title: 'Company',
    links: [
      ['About', '/about/'],
      ['Careers', '/careers/'],
      ['Customers', '/customers/'],
      ['Solutions', '/solutions/'],
      ['Media kit', 'https://hexhq.notion.site/a091e1bb7bb34019bc4ccf2e3da8645f?v=bb640f9e0ef4499198673561e42a93f0', true],
      ['Newsroom', '/newsroom/'],
    ],
  },
  {
    title: 'Connect',
    links: [
      ['Request a demo', '/request-a-demo/'],
      ['Technical support', 'mailto:support@hex.tech'],
      ['Contact us', '/contact-us/'],
      ['LinkedIn', 'https://www.linkedin.com/company/hex-technologies', true],
      ['X (Twitter)', 'https://x.com/hexanalytics', true],
      ['YouTube', 'https://www.youtube.com/@_hex_tech', true],
    ],
  },
]

const LEGAL_LINKS = [
  ['Privacy policy', 'https://learn.hex.tech/docs/trust/privacy-policy'],
  ['Terms & conditions', 'https://learn.hex.tech/docs/legal/terms-and-conditions'],
  ['Modern slavery statement', '/files/Hex_UK_Modern_Slavery_Act_Statement.pdf'],
]

// global `a` behaviour from the site stylesheet: bg rgba(49,38,59,.09) on hover, .14 active, .1s linear
const LINK_STATES = 'transition-colors duration-link ease-linear hover:bg-fg-a-500 active:bg-fg-a-700'

function FooterLink({ href, external, className = '', children }) {
  const target = external || href.endsWith('.pdf') ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <a href={href} data-tracking-label="Footer Link Clicked" className={`whitespace-nowrap ${LINK_STATES} ${className}`} {...target}>
      {children}
    </a>
  )
}

function HexWordmark() {
  return (
    <svg fill="none" viewBox="0 0 60 20" xmlns="http://www.w3.org/2000/svg" className="h-5 w-auto text-highlight" aria-label="Hex">
      <path
        d="M6.67285 6.6543H8.35938V0H15.0322V20H8.35938V10.0283H6.67285V20H0V0H6.67285V6.6543ZM31.751 10.0234H23.3916V16.627H25.0781V11.6592H31.751V20H16.7188V0H31.751V10.0234ZM40.1299 6.60352H41.8164V0H48.4893V5L45.1533 8.33691L48.4893 11.6729V20H41.8164V9.97656H40.1299V20H33.457V11.6729L36.7939 8.33691L33.457 5V0H40.1299V6.60352ZM55.5 11C56.0909 11 56.6758 11.1167 57.2217 11.3428C57.7676 11.5689 58.2638 11.9005 58.6816 12.3184C59.0995 12.7362 59.4311 13.2324 59.6572 13.7783C59.8833 14.3242 60 14.9091 60 15.5C60 16.39 59.7357 17.26 59.2412 18C58.7467 18.74 58.0439 19.3167 57.2217 19.6572C56.3995 19.9977 55.4949 20.0867 54.6221 19.9131C53.7492 19.7394 52.9477 19.311 52.3184 18.6816C51.689 18.0523 51.2606 17.2508 51.0869 16.3779C50.9133 15.5051 51.0023 14.6005 51.3428 13.7783C51.6833 12.9561 52.26 12.2533 53 11.7588C53.74 11.2643 54.61 11 55.5 11ZM56.8779 12.1738C56.2202 11.9014 55.4961 11.8299 54.7979 11.9688C54.0995 12.1077 53.4576 12.4506 52.9541 12.9541C52.4506 13.4576 52.1077 14.0995 51.9688 14.7979C51.8299 15.4961 51.9014 16.2202 52.1738 16.8779C52.4463 17.5357 52.908 18.0976 53.5 18.4932C54.092 18.8887 54.788 19.0996 55.5 19.0996C56.4548 19.0996 57.3708 18.721 58.0459 18.0459C58.721 17.3708 59.0996 16.4548 59.0996 15.5C59.0996 14.788 58.8887 14.092 58.4932 13.5C58.0976 12.908 57.5357 12.4463 56.8779 12.1738ZM55.6172 13.5693C56.0021 13.5457 56.3837 13.6554 56.6973 13.8799C56.8267 13.9894 56.9285 14.1279 56.9941 14.2842C57.0598 14.4406 57.0876 14.6111 57.0752 14.7803C57.0839 15.0175 57.0226 15.2521 56.8994 15.4551C56.7724 15.6556 56.5868 15.8129 56.3682 15.9053L57.2236 17.5205V17.5654H56.3506L55.6123 16.1123L54.9648 16.0713V17.5254H54.1504V13.5693H55.6172ZM54.9648 15.4551H55.6211C55.7928 15.4647 55.9621 15.4085 56.0938 15.2979C56.1532 15.24 56.1997 15.1695 56.2285 15.0918C56.2573 15.014 56.2682 14.9303 56.2607 14.8477C56.2676 14.7658 56.2566 14.683 56.2295 14.6055C56.2023 14.528 56.1588 14.4571 56.1025 14.3975C56.0366 14.3395 55.9594 14.2956 55.876 14.2686C55.7925 14.2415 55.7045 14.232 55.6172 14.2402H54.9648V15.4551ZM23.3916 6.65039L25.0781 6.64941V3.37402H23.3916V6.65039Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <Reveal as="footer" data-section="Footer" className="flex w-full flex-col">
      <div className="h-px flex-auto bg-grid-500" />
      <div className="mx-auto grid w-full max-w-section grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-0 px-[30px] py-[50px] laptop:flex laptop:flex-col laptop:gap-[45px]">
        {/* Left */}
        <div className="flex flex-col items-start gap-[15px] laptop:items-center">
          <HexWordmark />
          <div data-markdown-exclude="" className="flex items-center text-ink-muted">
            <span className="mr-1">Made with</span>
            <EmojiRotator />
            <span className="ml-1">
              on <span className="emoji-glyph">🌎</span>.
            </span>
          </div>
        </div>

        {/* Center */}
        <div className="flex flex-col items-center gap-[60px]">
          <div className="grid w-full max-w-[800px] flex-[1_1_100%] grid-cols-[repeat(4,minmax(0,1fr))] gap-[60px] stack:w-auto stack:grid-cols-2 stack:justify-center stack:gap-[30px]">
            {COLUMNS.map((col) => (
              <div key={col.title} className="flex flex-1 flex-col items-start gap-2.5 stack:items-center">
                <div className="font-plex-mono text-footer-title font-bold uppercase text-ink-loud">{col.title}</div>
                {col.links.map(([label, href, external]) => (
                  <FooterLink key={label} href={href} external={external} className="text-fg-1200">
                    {label}
                  </FooterLink>
                ))}
              </div>
            ))}
          </div>
          <div className="flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-[14px] stack:flex-col stack:gap-2.5">
            <div className="text-ink-muted">© 2026 Hex Technologies Inc.</div>
            {LEGAL_LINKS.map(([label, href]) => (
              <FooterLink key={label} href={href} external={href.startsWith('http')} className="text-ink-muted">
                {label}
              </FooterLink>
            ))}
            <button
              type="button"
              aria-live="polite"
              aria-atomic="true"
              className={`cursor-pointer whitespace-nowrap border-0 bg-transparent p-0 text-ink-muted ${LINK_STATES}`}
            >
              Opt out of tracking
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col items-end laptop:items-center">
          <HitCounter count={6530352} />
        </div>
      </div>
      <div className="h-px flex-auto bg-grid-500" />
    </Reveal>
  )
}
