// Minimal CustomerBanner logos for T4 / T7 (specs/solutions.md §3.2): Reddit, Notion★, Anthropic, SeatGeek,
// ClickUp★, AllTrails★. ★ = story link + popover. Notion reuses the homepage entry (same copy).
import { CUSTOMERS } from '../../components/sections/CustomerBanner/customers.js'

const SHARED = '/assets/pages/solutions/_shared'
const notion = CUSTOMERS.find((c) => c.slug === 'notion')

export const BANNER_LABEL = 'Trusted by leading data teams'

export const BANNER_LOGOS = [
  { slug: 'reddit', name: 'Reddit', w: 115, h: 50 },
  notion,
  { slug: 'anthropic', name: 'Anthropic', w: 132, h: 50 },
  { src: `${SHARED}/logo-seatgeek.svg`, name: 'SeatGeek', w: 51, h: 50 },
  {
    src: `${SHARED}/logo-clickup.svg`,
    name: 'ClickUp',
    w: 119,
    h: 50,
    story: {
      href: '/customers/clickup/',
      align: 'right',
      quote: '"Hex lets us go from an ad-hoc analysis to a published data app with just a few clicks."',
      author: 'Sai Srigiriaju',
      title: 'Head of Growth Strategy & Ops at ClickUp',
    },
  },
  {
    src: `${SHARED}/logo-alltrails.svg`,
    name: 'AllTrails',
    w: 151,
    h: 50,
    story: {
      href: '/customers/alltrails/',
      align: 'right',
      quote:
        '"Since adopting Hex, the data team has churned out a steady stream of analysis, from internal benchmarking to evaluating the effectiveness of metrics."',
      author: 'Matt Palmer',
      title: 'Analytics Engineer',
    },
  },
]

// Live renders these logos 40px tall on /pricing/, /request-a-demo/ and /contact-us/ (measured 92x40 Reddit etc.)
export const BANNER_LOGO_HEIGHT = 40
