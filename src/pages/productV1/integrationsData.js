// Data layer over specs/product-integrations.json (index + T5 pages). Normalizes the live-DOM extraction:
// absolute https://hex.tech/... links become relative paths (SiteShell routes them), "NameCompany" author strings
// are split, the AWS page is served for aws / athena / redshift, and placeholder logo notes are resolved.
import raw from '../../../specs/product-integrations.json'
import faq from '../../../specs/product-faq.json'

export const internalHref = (href) => (href ? href.replace(/^https:\/\/hex\.tech(?=\/)/, '') : href)
export const isExternal = (href) => /^https?:\/\//.test(href ?? '')

// QuotesMultiple author strings are "Name" + "Company" concatenated in the extraction.
const QUOTE_COMPANIES = ['Infinite Lambda', 'Whatnot', 'Notion', 'Opensea']
function splitAuthor(s) {
  const company = QUOTE_COMPANIES.find((c) => s.endsWith(c))
  return company ? { name: s.slice(0, -company.length), company } : { name: s, company: '' }
}

const LOGO_FIX = { 'existing: in ASSET_MANIFEST': '/assets/logos/customers/notion.svg' }

// Brand glyph shown in the DataConnectionIlly connection name (inline SVGs from the DOM, saved as files).
const CONNECTION_ICON = {
  databricks: 'databricks',
  dbt: 'snowflake',
  dremio: 'dremio',
  mariadb: 'mariadb',
  mysql: 'mysql',
  postgres: 'postgres',
  trino: 'trino',
}

export const INDEX = raw.index

export function getIntegration(slug) {
  const key = slug === 'aws' || slug === 'redshift' ? 'athena' : slug
  const p = raw.pages[key]
  if (!p) return null
  const card = p.howItWorks.right?.connectionCard
  return {
    ...p,
    slug: slug === 'athena' || slug === 'redshift' ? 'aws' : slug,
    heroCtas: p.heroCtas.map((c) => ({ ...c, href: internalHref(c.href) })),
    quotes: p.quotes.map((q) => ({
      ...q,
      logo: LOGO_FIX[q.logo] ?? q.logo,
      ...splitAuthor(q.author),
    })),
    howItWorks: {
      ...p.howItWorks,
      ctas: p.howItWorks.ctas.map((c) => ({ ...c, href: internalHref(c.href) })),
      connectionName: card ? card.split(' | ')[0] : null,
      connectionIcon: CONNECTION_ICON[slug] ?? null,
      dbtSchema: slug === 'dbt',
    },
    externalLinks: p.externalLinks.map((l) => ({ ...l, href: internalHref(l.href) })),
    faqItems: p.faq ? faq[`integrations-${key}`]?.[0]?.items ?? [] : [],
  }
}
