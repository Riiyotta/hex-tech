// product §4.6 #6 ReactiveExecutionTout (DOM notebooks/06-*): InfoText + the reactive DAG image (1802×1000,
// left -394 / top -173, clipped by the row) with the "CONNECT TO ANYTHING" logo buttons, then a 3-up grid of
// the homepage IntegrationCard (sections/Integrations.jsx, infoPadding="compact"; Integrations.css supplies the
// 5% → 10% highlight panel). The live DAG layer is pointer-events:none, so its logo buttons are not clickable there
// either (kept as-is). Card illustrations are the DOM's inline SVGs, saved as files.
import { InfoText } from '../../../components/shared'
import { IntegrationCard } from '../../../components/sections/Integrations.jsx'
import SvgIcon from '../shared/SvgIcon.jsx'
import { ICONS } from '../icons.js'
import snowflake from '../assets/integ-snowflake.svg'
import redshift from '../assets/integ-redshift.svg'
import bigquery from '../assets/integ-bigquery.svg'
import databricks from '../assets/integ-databricks.svg'
import dbt from '../assets/integ-dbt.svg'
import cardScale from '../assets/card-infinite-data-scale.svg'
import cardHassle from '../assets/card-zero-hassle.svg'
import cardDocker from '../assets/card-custom-docker.svg'

const INTEGS = [
  ['snowflake', snowflake],
  ['redshift', redshift],
  ['bigquery', bigquery],
  ['databricks', databricks],
  ['dbt', dbt],
]

const CARDS = [
  { title: 'Infinite data scale', text: 'Work with all of your data, and push compute down to the warehouse without worrying about memory limits.', href: 'https://learn.hex.tech/docs/cell-types/sql-cells/overview#query-mode', img: cardScale },
  { title: 'Zero hassle', text: 'Hex is fully hosted, with securely-sharable connections, customized environments, and configurable compute.', href: 'https://learn.hex.tech/docs/explore-data/projects/environment-configuration/environment-views', img: cardHassle },
  { title: 'Custom Docker images', text: 'BYO from ECR or DockerHub, for consistent, reproducible environments.', href: 'https://learn.hex.tech/docs/administration/workspace_settings/custom-images', img: cardDocker },
]

export default function ExecutionDag() {
  return (
    <div className="pm-exec">
      <div className="pm-exec__top">
        <InfoText
          size="h2"
          className="[word-break:break-word]"
          icon={<SvgIcon svg={ICONS.autoRun} className="h-[15px] w-[15px] text-fg-1200" />}
          title="Intelligent execution"
          description="Hex's graph-based execution model makes projects more reproducible, explainable, and performant than traditional data science notebooks."
          cta={{
            label: 'Learn more',
            href: 'https://learn.hex.tech/docs/explore-data/projects/project-execution/execution-model#reactive-graph-based-execution-model',
            external: true,
            variant: 'secondary',
          }}
        />
        <div className="pm-exec__viz" aria-hidden="true">
          <div className="pm-exec__connect">
            <div className="pm-exec__logos">
              {INTEGS.map(([slug, src]) => (
                <a key={slug} className="pm-integ-btn" data-logo="" href={`/product/integrations/${slug}/`} tabIndex={-1}>
                  <img src={src} alt="" />
                </a>
              ))}
            </div>
            <a className="pm-integ-btn" data-more="" href="/product/integrations/" tabIndex={-1}>
              And more...
            </a>
          </div>
          <img
            className="pm-exec__dag"
            alt="Reactive DAG"
            src="/assets/pages/product/notebooks/reactive-dag.png"
            srcSet="/assets/pages/product/notebooks/reactive-dag.png 1x, /assets/pages/product/notebooks/reactive-dag@2x.png 2x"
          />
        </div>
      </div>
      <div className="integrations-tout w-full">
        <div className="pm-exec__grid">
          {CARDS.map((c) => (
            <IntegrationCard
              key={c.title}
              title={c.title}
              description={c.text}
              image={{ src: c.img, width: 300, height: 160 }}
              href={c.href}
              external
              infoPadding="compact"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
