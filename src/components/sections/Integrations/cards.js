// CLONE_SPEC §4.12 card copy (exact, from reference/dom/p2-02-IntegrationsTout__Wrapper.html) + ported illustration markup.
import card1 from './illustrations/card-1.html?raw'
import card2 from './illustrations/card-2.html?raw'
import card3 from './illustrations/card-3.html?raw'
import card4 from './illustrations/card-4.html?raw'
import card5 from './illustrations/card-5.html?raw'
import card6 from './illustrations/card-6.html?raw'

export const INTEGRATION_CARDS = [
  {
    title: 'Built for the warehouse',
    description:
      'Hex has built-in connections to the most popular data warehouses, lakehouses, and databases. It’s easy to set up data connections, and securely share them with your team.',
    illustration: card1,
    trackingLabel: 'Home page integrations data connections card',
  },
  {
    title: 'dbt metadata, docs, & metrics',
    description: 'Hex has a deep integration with dbt, including automatically enriching schemas with dbt docs.',
    illustration: card2,
    trackingLabel: 'Home page integrations dbt card',
  },
  {
    title: 'Connect to your warehouse with oAuth',
    description: 'Leverage the permissions set up in your data warehouse, by authenticating with oAuth',
    illustration: card3,
    trackingLabel: 'Home page integrations oauth card',
  },
  {
    title: 'Git it together',
    description: 'Export your projects to GitHub or GitLab to create an audit trail.',
    illustration: card4,
    trackingLabel: 'Home page integrations git card',
  },
  {
    title: 'Orchestration',
    description: 'You can include Hex projects in DAGs in Airflow, Dagster, or Prefect.',
    illustration: card5,
    trackingLabel: 'Home page integrations orchestration card',
  },
  {
    title: 'Hex API',
    description:
      "Want to connect to something we haven't thought of? Use our powerful public API to write your own integrations.",
    illustration: card6,
    trackingLabel: 'Home page integrations api card',
  },
]
