// Port of the live site's InteractiveFeatureSection + sharedStyles (CLONE_SPEC §3.2, §3.3, §4.5–4.7),
// shared by OrganizationContext, ConversationalAnalytics and ContextStudio.
// Desktop: SectionWrapper (row | row-reverse, gap 70) → InfoWrapper (InfoText + dashed quote, gap 40,
// min-width 330) + ProductIllustration. ≤800px the original swaps to a different JSX tree
// (InfoText → illustration → quote, column, gap 0); here the same order is produced with CSS
// (display: contents + order) so there is no hydration/resize flash. Styles: FeatureSection.css.
// Props: direction ('row' | 'row-reverse'), icon, title, description (InfoText description: product BI features),
//   cta (InfoText cta), headingClassName (InfoText heading hook), quote (DashedLineQuote props: before / emphasis / after
//   or children, logo, name, title), className, children (the illustration).
import { InfoText, DashedLineQuote } from '../../shared/index.js'
import './FeatureSection.css'

export default function FeatureSection({
  direction = 'row',
  icon,
  title,
  description,
  cta,
  headingClassName,
  quote,
  className = '',
  children,
}) {
  return (
    <div className={`feature-section ${className}`} data-direction={direction}>
      <div className="feature-section__info">
        <div className="feature-section__info-text">
          <InfoText
            icon={icon}
            title={title}
            description={description}
            cta={cta}
            headingClassName={headingClassName}
            className="feature-section__info-text-inner"
          />
        </div>
        {quote && <DashedLineQuote className="feature-section__quote" {...quote} />}
      </div>
      <div className="feature-section__illustration" data-markdown-exclude="">
        {children}
      </div>
    </div>
  )
}
