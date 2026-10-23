// BIHero__BIIllustration (reference/pages/product/dom/bi/00-BIHero.html): 1553×820 concentric line art.
// Also used rotated 180° behind the "Time to look at BI, differently" heading (02-BILookingAtItDifferently).
export default function BiIllustration({ className = '', id = 'a' }) {
  const mask = `illustration-bi-hero-bkg_svg__b-${id}`
  const grad = `illustration-bi-hero-bkg_svg__a-${id}`
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1553" height="820" fill="none" viewBox="0 0 1553 820" className={className} aria-hidden="true">
      <mask id={mask} width="1553" height="746" x="0" y="37" maskUnits="userSpaceOnUse" style={{ maskType: 'alpha' }}>
        <ellipse cx="776.5" cy="410" fill={`url(#${grad})`} rx="776.5" ry="373" />
      </mask>
      <g stroke="currentColor" strokeOpacity="0.2" mask={`url(#${mask})`}>
        <path d="M777-172.5V792" />
        <path strokeWidth="1.003" d="M1601.16 788c0-437.962-369.18-793-824.58-793C321.177-5-48 350.038-48 788" />
        <path strokeWidth="1.003" d="M1399 788c0-437.962-278.48-793-622-793-343.521 0-622 355.038-622 793" />
        <path strokeWidth="1.003" d="M1201 788c0-437.962-190.06-793-424.5-793C542.055-5 352 350.038 352 788" />
        <path strokeWidth="1.003" d="M1877 788C1877 350.038 1384.29-5 776.5-5S-324 350.038-324 788" />
      </g>
      <defs>
        <radialGradient id={grad} cx="0" cy="0" r="1" gradientTransform="matrix(776.5 0 0 415.544 776.5 410)" gradientUnits="userSpaceOnUse">
          <stop />
          <stop offset="1" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  )
}
