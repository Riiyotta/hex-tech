(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,296436,e=>{e.v(t=>Promise.all(["static/chunks/3m1bcb90s3oz8.js"].map(t=>e.l(t))).then(()=>t(416694)))},145512,e=>{"use strict";var t=e.i(843476),i=e.i(480985),a=e.i(876684),n=e.i(134700),o=e.i(284317);function r({header:e,subheader:i,paddingClass:a}){return(0,t.jsxs)(o.UseCaseH2.Panel,{className:a,children:[(0,t.jsx)(o.UseCaseH2.Header,{children:e}),(0,t.jsx)(o.UseCaseH2.Subheader,{children:i})]})}var d=e.i(706736),s=e.i(621248),l=e.i(665419);function c(){return(0,t.jsxs)(s.UseCaseHero.Panel,{children:[(0,t.jsx)(s.UseCaseHero.Header,{children:"The fastest way to why"}),(0,t.jsx)(s.UseCaseHero.Subheader,{children:"Go from quick question to deep dive to data app all in one place, all in the most complete workspace for exploratory analysis."}),(0,t.jsxs)(s.UseCaseHero.Actions,{children:[(0,t.jsx)(d.Button,{href:l.SIGNUP_LINK,stylez:"loud",text:"Get started for free"}),(0,t.jsx)(d.Button,{href:l.INTERNAL_LINKS.RequestADemo,text:"Request a demo"})]})]})}var p=e.i(253928),m=e.i(175742),h=e.i(901406);function x(){return(0,t.jsx)(m.UseCaseFadeIn,{className:"full-width",children:(0,t.jsx)(h.UseCaseQuote,{children:(0,t.jsx)(p.SocialTout,{customerQuotes:[{author:"Katie R.",authorTitle:"Head of Data",quote:"Hex is a fantastic tool for data exploration. We use it for everything from early exploration and experimentation to powering apps I feel good about sharing externally."}],includeG2Proof:!1})})})}var u=e.i(51566),g=e.i(423895),f=e.i(612599),w=e.i(9370),y=e.i(657688),I=e.i(244138),j=e.i(316113);let C=[{title:"Explore on your terms",description:"Hex combines SQL, Python, pivots, spreadsheet formulas, and no-code viz together. Use the best tool for the job or the best tool for you.",ctaText:"Learn More",link:l.INTERNAL_LINKS.Notebooks,media:(0,t.jsx)(w.DataExplorationVisual,{})},{title:"Data on-demand",description:"The data you need is never out of reach. Easily find trusted data for your project or instantly connect to new sources wherever they live.",ctaText:"Learn More",link:l.INTERNAL_LINKS.Integrations,media:(0,t.jsx)(function(){return(0,t.jsx)(y.default,{alt:"Integrations",height:1158,sizes:"(min-width: 800px) 50vw, 100vw",src:"/images/use-case/integrations_graphic.png",style:{width:"100%",height:"auto"},width:1232})},{})},{title:"Fast feedback loops",description:"Rapid iteration has a new standard. Comments, alerts, and snapshots meet multiplayer collaboration, so nothing’s lost to a screenshot or deck.",ctaText:"Learn More",link:l.INTERNAL_LINKS.ForTeams,media:(0,t.jsx)(j.TeamworkImage,{})},{title:"Get an AI assist",description:"Not a pythonista? Need to fix a bug? Want to shortcut a query? AI in Hex can help with that AND help you answer questions faster.",ctaText:"Learn More",link:l.INTERNAL_LINKS.Magic,media:(0,t.jsx)(I.MagicIllustration,{})},{title:"Go from analysis to data app in minutes",description:"Toggle the drag-and-drop builder to unleash your analysis to stakeholders. No crazy workarounds. No clunky dashboards. Just insights to drive business decisions.",ctaText:"Learn More",link:l.INTERNAL_LINKS.AppBuilder,media:(0,t.jsx)(f.ActionableAppsIllustration,{})}];function v(){return(0,t.jsx)(t.Fragment,{children:C.map(({media:e,...i})=>(0,t.jsxs)(g.TwoUp.Panel,{className:"alternate-even",children:[(0,t.jsx)(g.TwoUp.Media,{children:e}),(0,t.jsx)(g.TwoUp.Info,{...i})]},i.title))})}e.s(["ExploratoryAnalysisPageContent",0,function({recommendations:e}){return(0,t.jsx)(n.V1GridLines,{children:(0,t.jsx)(n.V1PageWrapper,{children:(0,t.jsxs)(a.UseCaseGrid,{children:[(0,t.jsx)(c,{}),(0,t.jsx)(x,{}),(0,t.jsx)(r,{header:"Goodbye fragmentation, hello insights",paddingClass:"pt--medium",subheader:"Hex has everything you need to keep pace with your organizationʼs toughest questions. Thereʼs no tool switching, no extra tabs, and no copying and pasting."}),(0,t.jsx)(v,{}),(0,t.jsx)(r,{header:"Get started fast with components and templates",paddingClass:"pt--large",subheader:"Start from commonly used query logic unique to your organization or use one of Hexʼs pre-built templates."}),(0,t.jsx)(u.Recommendations,{recommendations:e}),(0,t.jsx)(i.OutroTout,{className:"full-width"})]})})})}],145512)},612599,e=>{"use strict";var t=e.i(843476),i=e.i(657688),a=e.i(997053);let n=a.default.div.withConfig({displayName:"ActionableAppsIllustration__PaddingWrapper",componentId:"sc-1a6f10e7-0"})`
  padding-bottom: 48px;
`,o=a.default.div.withConfig({displayName:"ActionableAppsIllustration__Content",componentId:"sc-1a6f10e7-1"})`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    width: 100%;

    .main {
      width: 100%;
      height: auto;
    }
  }

  .drag-img {
    @keyframes animateDragImg {
      0% {
        transform: translate(0, 0);
      }

      50% {
        transform: translate(30px, -15px);
      }

      100% {
        transform: translate(0, 0);
      }
    }

    position: absolute;
    width: 400px;
    height: auto;
    bottom: -145px;
    left: -110px;
    animation: animateDragImg 7s infinite;
    animation-timing-function: ease-in-out;

    @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
      width: 200px;
      height: auto;
      bottom: -80px;
      left: -70px;
    }
  }
`;e.s(["ActionableAppsIllustration",0,function(){return(0,t.jsx)(n,{children:(0,t.jsxs)(o,{children:[(0,t.jsx)(i.default,{alt:"Actionable apps",className:"main",height:1328,sizes:"(min-width: 1240px) 830px, 100vw",src:"/images/home/product-overview/actionable-apps-main@2x.png",style:{maxWidth:"100%",height:"auto"},width:1538}),(0,t.jsx)(i.default,{alt:"Actionable apps",className:"drag-img",height:724,sizes:"(min-width: 800px) 400px, 200px",src:"/images/home/product-overview/actionable-apps-drag@2x.png",width:799})]})})}])},9370,e=>{"use strict";var t=e.i(843476),i=e.i(271645),a=e.i(657688),n=e.i(997053);let o=n.default.div.withConfig({displayName:"DataExplorationVisual__Content",componentId:"sc-8fcd97b1-0"})`
  height: 60vh;
  overflow: hidden;
  padding: 0 20px;
  flex: none;
  border-top: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
  border-bottom: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    width: 100%;
    min-width: 0;
    height: 30vh;
  }
`,r=n.default.div.withConfig({displayName:"DataExplorationVisual__Inner",componentId:"sc-8fcd97b1-1"})`
  @keyframes animateDataExp {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(calc(-${({$height:e})=>e}px + 60vh));
    }

    100% {
      transform: translateY(0);
    }
  }

  display: flex;
  flex-direction: column;
  padding: 40px 0;
  gap: 30px;
  animation: animateDataExp 45s infinite;
  animation-timing-function: ease-in-out;
`,d={width:"840px",maxWidth:"100%",height:"auto"},s="(max-width: 800px) 100vw, 840px",l="/images/home/product-overview";e.s(["DataExplorationVisual",0,function(){let e=(0,i.useRef)(null),[n,c]=(0,i.useState)(0);return(0,i.useEffect)(()=>{e.current&&c(e.current.clientHeight)},[]),(0,t.jsx)(o,{children:(0,t.jsxs)(r,{ref:e,$height:n,children:[(0,t.jsx)(a.default,{alt:"Pivot cell",height:804,sizes:s,src:`${l}/cell-pivot@2x.png`,style:d,width:1680}),(0,t.jsx)(a.default,{alt:"Chart cell",height:918,sizes:s,src:`${l}/cell-chart-1@2x.png`,style:d,width:1680}),(0,t.jsx)(a.default,{alt:"Filter cell",height:382,sizes:s,src:`${l}/cell-filter@2x.png`,style:d,width:1680}),(0,t.jsx)(a.default,{alt:"SQL cell",height:938,sizes:s,src:`${l}/cell-sql@2x.png`,style:d,width:1680}),(0,t.jsx)(a.default,{alt:"Python cell",height:384,sizes:s,src:`${l}/cell-python@2x.png`,style:d,width:1680}),(0,t.jsx)(a.default,{alt:"Chart cell 2",height:960,sizes:s,src:`${l}/cell-chart-2@2x.png`,style:d,width:1680})]})})}])},316113,e=>{"use strict";var t=e.i(843476),i=e.i(657688);e.s(["TeamworkImage",0,function(){return(0,t.jsx)(i.default,{alt:"Teamwork",height:1650,sizes:"(min-width: 800px) 50vw, 100vw",src:"/images/home/product-overview/team-work@2x.png",style:{width:"100%",height:"auto",transformOrigin:"center center",transform:"scale(1.1)"},width:1954})}])},765563,436016,e=>{"use strict";var t=e.i(843476),i=e.i(657688),a=e.i(650617),n=e.i(665419),o=e.i(997053),r=e.i(785191),d=e.i(258591),s=e.i(637804);let l=(0,o.default)(r.Card).attrs({interactive:!0}).withConfig({displayName:"sharedStyles__GridItemWrapper",componentId:"sc-5a06a102-0"})`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,c=(0,o.default)(d.Heading).attrs({renderAs:"h4"}).withConfig({displayName:"sharedStyles__Title",componentId:"sc-5a06a102-1"})`
  margin-bottom: 6px;
`,p=o.default.div.withConfig({displayName:"sharedStyles__Info",componentId:"sc-5a06a102-2"})`
  display: flex;
  flex: 1 1 auto;
  width: 100%;
  flex-direction: column;
`,m=(0,o.default)(p).withConfig({displayName:"sharedStyles__StyledInfo",componentId:"sc-5a06a102-3"})`
  padding: 15px 5px 5px;
`,h=o.default.div.withConfig({displayName:"sharedStyles__PreviewImage",componentId:"sc-5a06a102-4"})`
  margin-bottom: 0;
  border: none;
  position: relative;
  flex: none;
  overflow: hidden;
`,x=(0,o.default)(h).withConfig({displayName:"sharedStyles__StyledPreviewImage",componentId:"sc-5a06a102-5"})`
  width: 100%;
  height: 220px;
`,u=o.default.div.withConfig({displayName:"sharedStyles__Wrapper",componentId:"sc-5a06a102-6"})`
  padding: 10px;
`,g=(0,o.default)(l).withConfig({displayName:"sharedStyles__StyledGridWrapper",componentId:"sc-5a06a102-7"})`
  height: 100%;
`,f=o.default.div.withConfig({displayName:"sharedStyles__CategoryTag",componentId:"sc-5a06a102-8"})`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
  padding: 6px 10px;
  background: ${({theme:e})=>e.backgroundColor};
  font-family: ${({theme:e})=>e.fontFamily.MONO};
  font-weight: ${({theme:e})=>e.fontWeight.BOLD};
  font-size: ${({theme:e})=>e.fontSize.SMALL};
  letter-spacing: 1px;
`,w=o.default.div.withConfig({displayName:"sharedStyles__Author",componentId:"sc-5a06a102-9"})`
  color: ${({theme:e})=>e.fontColor.MUTED};
  font-size: ${({theme:e})=>e.fontSize.MEDIUM};
  margin-bottom: 10px;
`,y=(0,o.default)(s.SiteLink).withConfig({displayName:"sharedStyles__CardLink",componentId:"sc-5a06a102-10"})`
  text-decoration: none;
  border-bottom: none;
  color: inherit;
  display: block;
  height: 100%;
`;e.s(["Author",0,w,"CardLink",0,y,"CategoryTag",0,f,"StyledGridWrapper",0,g,"StyledInfo",0,m,"StyledPreviewImage",0,x,"Title",0,c,"Wrapper",0,u],436016),e.s(["UseCaseCard",0,function({item:e,search:o}){let r=e.slug??"",d=e.categorySlug??"",s=`${n.INTERNAL_LINKS.Templates}${d}/${r}${o}`;return(0,t.jsx)(u,{children:(0,t.jsx)(y,{href:s,children:(0,t.jsxs)(g,{children:[e.gridImageUrl&&(0,t.jsxs)(x,{children:[(0,t.jsx)(f,{children:"TEMPLATE"}),(0,t.jsx)(i.default,{alt:e.name??"",fill:!0,sizes:"(max-width: 768px) 100vw, 33vw",src:e.gridImageUrl})]}),(0,t.jsxs)(m,{children:[(0,t.jsx)(c,{renderAs:"h4",children:e.name}),e.author&&(0,t.jsx)(w,{children:e.author}),(0,t.jsx)(a.Text,{size:"medium",children:e.seoMetaDescription})]})]})})})}],765563)},51566,244138,e=>{"use strict";var t=e.i(843476),i=e.i(271645),a=e.i(618566),n=e.i(997053),o=e.i(657688),r=e.i(650617),d=e.i(665419),s=e.i(436016);function l({item:e,search:i}){let a=e.slug??"",n=`${d.INTERNAL_LINKS.Blog}${a}${i}`;return(0,t.jsx)(s.Wrapper,{children:(0,t.jsx)(s.CardLink,{href:n,children:(0,t.jsxs)(s.StyledGridWrapper,{children:[e.heroImageUrl&&(0,t.jsxs)(s.StyledPreviewImage,{children:[(0,t.jsx)(s.CategoryTag,{children:"BLOG"}),(0,t.jsx)(o.default,{alt:e.title??"",fill:!0,sizes:"(max-width: 768px) 100vw, 33vw",src:e.heroImageUrl})]}),(0,t.jsxs)(s.StyledInfo,{children:[(0,t.jsx)(s.Title,{renderAs:"h4",children:e.title}),(0,t.jsxs)(s.Author,{children:[e.author,e.date&&` \xb7 ${new Date(e.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric",timeZone:"UTC"})}`]}),(0,t.jsx)(r.Text,{size:"medium",children:e.seoMetaDescription})]})]})})})}var c=e.i(765563);function p({item:e,search:i}){let a=e.slug??"",n=`${d.INTERNAL_LINKS.Templates}${a}${i}`,l=e.gridImageUrl??e.socialShareImageUrl??"";return(0,t.jsx)(s.Wrapper,{children:(0,t.jsx)(s.CardLink,{href:n,children:(0,t.jsxs)(s.StyledGridWrapper,{children:[(0,t.jsxs)(s.StyledPreviewImage,{children:[(0,t.jsx)(s.CategoryTag,{children:"USE CASES"}),l&&(0,t.jsx)(o.default,{alt:e.title??"",fill:!0,sizes:"(max-width: 768px) 100vw, 33vw",src:l})]}),(0,t.jsxs)(s.StyledInfo,{children:[(0,t.jsx)(s.Title,{renderAs:"h4",children:e.title}),(0,t.jsx)(s.Author,{children:"Multiple contributors"}),(0,t.jsx)(r.Text,{size:"medium",children:e.seoMetaDescription})]})]})})})}function m({item:e,search:i}){switch(e._type){case"useCase":return(0,t.jsx)(c.UseCaseCard,{item:e,search:i});case"blogPost":return(0,t.jsx)(l,{item:e,search:i});case"useCaseCategory":return(0,t.jsx)(p,{item:e,search:i});default:return null}}let h=n.default.div.withConfig({displayName:"Recommendations__Grid",componentId:"sc-f7477c70-0"})`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 64px 0 120px 0;

  > * {
    width: auto;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    grid-template-columns: repeat(1, 1fr);
    gap: 0px;
    padding: 48px 0 80px 0;
  }
`;function x({recommendations:e}){let i=(0,a.useSearchParams)(),n=i?.toString()?`?${i.toString()}`:"";return(0,t.jsx)(u,{recommendations:e,search:n})}function u({recommendations:e,search:i}){return(0,t.jsx)(h,{children:e.map((e,a)=>(0,t.jsx)(m,{item:e,search:i},a))})}e.s(["Recommendations",0,function({recommendations:e}){return e.length?(0,t.jsx)(i.Suspense,{fallback:(0,t.jsx)(u,{recommendations:e,search:""}),children:(0,t.jsx)(x,{recommendations:e})}):null}],51566);let g=n.default.div.withConfig({displayName:"MagicIllustration__Wrapper",componentId:"sc-5a09ad51-0"})`
  padding: 24px 20px 0 20px;
  border-top: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
  border-bottom: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
`;e.s(["MagicIllustration",0,function(){return(0,t.jsx)(g,{children:(0,t.jsx)(o.default,{alt:"AI assist illustration",className:"main",height:1598,sizes:"(min-width: 1240px) 830px, 100vw",src:"/images/magic/magic_illustration@2x.png",style:{width:"100%",height:"auto"},width:1680})})}],244138)},939808,e=>{"use strict";var t=e.i(843476),i=e.i(271645),a=e.i(997053),n=e.i(430388),o=e.i(785191),r=e.i(650617);let d=i.memo(({logoPath:e,customerName:i,quote:a,authorAvatarPath:o,author:d,authorTitle:x})=>(0,t.jsx)(s,{children:(0,t.jsxs)(l,{children:[e&&(0,t.jsx)(m,{children:"string"==typeof e?(0,t.jsx)("img",{alt:i||"customer logo",loading:"lazy",src:e}):e}),(0,t.jsxs)(c,{children:[(0,t.jsx)(p,{children:(0,t.jsx)(n.QuoteIcon,{})}),(0,t.jsxs)("blockquote",{children:['"',a,"”"]})]}),d&&(0,t.jsxs)(h,{children:[o&&(0,t.jsx)("img",{alt:d,loading:"lazy",src:o}),(0,t.jsxs)(r.Text,{children:[d,(x||i)&&(0,t.jsxs)("span",{children:["  ",x&&`${x} `,i&&(0,t.jsxs)(t.Fragment,{children:["at ",i]})]})]})]})]})}));d.displayName="CustomerQuoteCard";let s=(0,a.default)(o.Card).attrs({effect:"glass"}).withConfig({displayName:"CustomerQuoteCard__Wrapper",componentId:"sc-5e534bf5-0"})`
  && {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    padding: 38px 45px;
    height: 100%;
  }
`,l=a.default.div.withConfig({displayName:"CustomerQuoteCard__Quote",componentId:"sc-5e534bf5-1"})`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  gap: 24px;
  line-height: 1.35;
  opacity: 1;
  width: 100%;
`,c=a.default.div.withConfig({displayName:"CustomerQuoteCard__QuoteTextWrapper",componentId:"sc-5e534bf5-2"})`
  display: flex;
  gap: 20px;

  blockquote {
    display: block;
    ${r.ExtraLargeTextStyles}
    margin-bottom: 0;
    color: ${({theme:e})=>e.fontColor.LOUD};
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    blockquote {
      font-size: 22px;
    }
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    blockquote::before {
      margin-left: -0.8rem;
    }
  }
`,p=a.default.div.withConfig({displayName:"CustomerQuoteCard__QuoteLine",componentId:"sc-5e534bf5-3"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: none;
  gap: 10px;
  padding-top: 8px;

  svg {
    flex: none;
    color: ${({theme:e})=>e.highlightColor};
  }

  &::after {
    content: '';
    display: flex;
    flex: 1 1 auto;
    width: 1px;
    background-color: ${({theme:e})=>e.highlightColor35};
  }
`,m=a.default.div.withConfig({displayName:"CustomerQuoteCard__Logo",componentId:"sc-5e534bf5-4"})`
  display: flex;
  align-items: start;

  img {
    max-height: 45px;
    object-fit: contain;
    filter: ${({theme:e})=>"dark"===e.name?"brightness(0) invert(1)":"invert(100%) sepia(0%) saturate(1%) hue-rotate(339deg) brightness(100%) contrast(101%)"};
  }
`,h=a.default.div.withConfig({displayName:"CustomerQuoteCard__Author",componentId:"sc-5e534bf5-5"})`
  display: flex;
  align-items: center;
  flex-direction: row;
  min-height: 45px;
  margin-top: auto;

  img {
    clip-path: circle();
    filter: none;
    object-fit: cover;
    margin-right: 12px;
    height: 35px;
    width: 35px;
  }

  p {
    font-weight: 400;
    margin-bottom: 0;
  }

  span {
    font-weight: 300;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    p:first-child {
      font-size: 14px;
    }
  }
`;e.s(["CustomerQuoteCard",0,d])},480985,e=>{"use strict";var t=e.i(843476),i=e.i(271645),a=e.i(846932),n=e.i(997053),o=e.i(706736),r=e.i(288839),d=e.i(991709),s=e.i(665419),l=e.i(785191),c=e.i(258591),p=e.i(650617),m=e.i(812488);let h=i.memo(({actions:e,className:a,title:l,copy:c,orientation:p="vertical"})=>{let h=(0,n.useTheme)(),j=(0,r.default)(h.mediaQueryString.SMALL)?"vertical":p;return(0,t.jsxs)(x,{...d.ANIMATIONS.SimpleFadeIn,className:a,children:[(0,t.jsx)(m.TronDivider,{}),(0,t.jsx)(u,{children:(0,t.jsxs)(g,{$orientation:j,children:[(0,t.jsxs)(f,{$orientation:j,children:[(0,t.jsx)(w,{renderAs:"h2",children:l||"Questions? Talk to us"}),(0,t.jsx)(y,{size:"large",children:c||"Get in touch with us to see a demo or find out which plan is right for you."})]}),e?(0,t.jsx)(I,{children:e.map((e,a)=>(0,t.jsx)(i.Fragment,{children:e},a))}):(0,t.jsx)(o.Button,{href:s.INTERNAL_LINKS.RequestADemo,size:"large",stylez:"loud",text:"Contact Sales"})]})})]})});h.displayName="OutroTout";let x=(0,n.default)(a.motion.div).withConfig({displayName:"OutroTout__Wrapper",componentId:"sc-fce71882-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
`,u=(0,n.default)(a.motion.div).withConfig({displayName:"OutroTout__Inner",componentId:"sc-fce71882-1"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 40px 40px 100px;
  margin: 0 auto;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    padding: 20px 30px 80px;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    padding: 0 30px 80px;
  }
`,g=(0,n.default)(l.Card).withConfig({displayName:"OutroTout__TopCard",componentId:"sc-fce71882-2"})`
  flex: 1;
  max-width: 565px;
  padding: 68px 60px;
  text-align: center;
  align-items: center;
  gap: 30px;
  cursor: default;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    padding: 40px 28px;
  }

  ${({$orientation:e})=>"horizontal"===e&&n.css`
      flex-direction: row;
      text-align: left;
      max-width: ${({theme:e})=>e.maxWidth.PAGE};
      width: 100%;
      justify-content: space-between;
    `}
`,f=n.default.div.withConfig({displayName:"OutroTout__TextWrapper",componentId:"sc-fce71882-3"})`
  display: flex;
  flex-direction: column;
  gap: 10px;

  ${({$orientation:e})=>"horizontal"===e&&n.css`
      align-items: flex-start;
    `}
`,w=(0,n.default)(c.Heading).withConfig({displayName:"OutroTout__StyledHeading",componentId:"sc-fce71882-4"})`
  text-wrap: balance;
`,y=(0,n.default)(p.Text).withConfig({displayName:"OutroTout__StyledText",componentId:"sc-fce71882-5"})`
  text-wrap: balance;
`,I=n.default.div.withConfig({displayName:"OutroTout__Actions",componentId:"sc-fce71882-6"})`
  display: flex;
  gap: 15px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MOBILE}) {
    flex-direction: column;
    width: 100%;
  }
`;e.s(["OutroTout",0,h])},253928,e=>{"use strict";var t=e.i(843476),i=e.i(271645),a=e.i(846932),n=e.i(997053),o=e.i(991709),r=e.i(939808),d=e.i(657688),s=e.i(637804),l=e.i(430388),c=e.i(258591),p=e.i(650617);let m=n.default.div.withConfig({displayName:"G2SocialProofCard__Wrapper",componentId:"sc-95f60257-0"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 24px;
  flex-grow: 1;
  justify-content: center;
  align-items: left;
  border: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
  height: 100%;
  padding: 38px 35px;
  max-width: 450px;

  p {
    text-align: left;
  }

  img {
    max-width: 280px;
    filter: none;
    padding-bottom: 0.5rem;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    width: 100%;
    max-width: none;
    padding: 30px;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    img {
      width: 90%;
    }
  }
`,h=n.default.div.withConfig({displayName:"G2SocialProofCard__Top",componentId:"sc-95f60257-1"})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  img {
    filter: none;
    max-width: 280px;
    object-fit: contain;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    img {
      width: 90%;
    }
  }
`,x=n.default.div.withConfig({displayName:"G2SocialProofCard__Bottom",componentId:"sc-95f60257-2"})`
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 4px;
  }
`,u=n.default.div.withConfig({displayName:"G2SocialProofCard__CardCopy",componentId:"sc-95f60257-3"})`
  display: flex;

  img {
    max-height: 35px;
    object-fit: contain;
  }
`,g=n.default.span.withConfig({displayName:"G2SocialProofCard__CheckThemOutLinkInline",componentId:"sc-95f60257-4"})`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`,f=i.memo(({trackingLabel:e})=>(0,t.jsxs)(m,{children:[(0,t.jsx)(h,{children:(0,t.jsx)(d.default,{alt:"Three G2 badges received by Hex for High Performer, Best Support, and Momentum Leader.",height:627,src:"/images/g2-awards.svg",style:{height:"auto"},width:838})}),(0,t.jsxs)(x,{children:[(0,t.jsx)(c.Heading,{renderAs:"h3",children:"Users love Hex"}),(0,t.jsx)(u,{children:(0,t.jsxs)(p.Text,{children:["Rated on G2 as an industry leader based on customer reviews."," ",(0,t.jsx)(s.SiteLink,{href:"https://www.g2.com/products/hex-technologies/reviews",trackingLabel:e,children:(0,t.jsxs)(g,{children:["Check them out",(0,t.jsx)(l.ArrowRightIcon,{})]})})]})})]})]}));f.displayName="G2SocialProofCard";let w=i.memo(({includeG2Proof:e=!1,customerQuotes:i,className:a,g2TrackingLabel:n})=>(0,t.jsx)(y,{...o.ANIMATIONS.SimpleFadeIn,className:a,children:(0,t.jsxs)(I,{children:[e?(0,t.jsx)(f,{trackingLabel:n}):null,i.map((e,i)=>(0,t.jsx)(r.CustomerQuoteCard,{...e},i))]})}));w.displayName="SocialTout";let y=(0,n.default)(a.motion.div).withConfig({displayName:"SocialTout__Wrapper",componentId:"sc-b502cc5e-0"})`
  position: relative;
  display: flex;
  flex-grow: 1;
  width: 100%;
  margin: 0 auto;
  padding: 100px 40px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    padding: 60px 40px;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    flex-direction: column;
    padding: 60px 30px;
  }
`,I=n.default.div.withConfig({displayName:"SocialTout__Inner",componentId:"sc-b502cc5e-1"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  margin: 0 auto;
  max-width: ${({theme:e})=>e.maxWidth.PAGE};

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    flex-direction: column;
  }
`;e.s(["SocialTout",0,w],253928)},423895,e=>{"use strict";var t=e.i(846932),i=e.i(997053),a=e.i(991709),n=e.i(162517);let o=i.default.div.withConfig({displayName:"TwoUp__Media",componentId:"sc-fba28e22-0"})`
  width: 680px;
  flex: none;
  position: relative;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    width: 100%;
    height: auto;
  }
`,r={Panel:(0,i.default)(t.motion.div).attrs(a.ANIMATIONS.SimpleFadeIn).withConfig({displayName:"TwoUp__Panel",componentId:"sc-fba28e22-1"})`
  padding: 96px 0;
  display: flex;
  align-items: center;
  gap: 72px;
  justify-content: space-between;

  @media screen and (min-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    &.alternate-even {
      &:nth-child(even) {
        flex-direction: row-reverse;
      }
    }

    &.alternate-odd {
      &:nth-child(odd) {
        flex-direction: row-reverse;
      }
    }

    &.row-reverse {
      flex-direction: row-reverse;
    }
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    flex-direction: column;
    gap: 48px;
    padding: 48px 0;
  }

  &.pb-last--large:last-child {
    padding-bottom: 180px;

    @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
      padding-bottom: 90px;
    }
  }
`,Media:o,Info:n.InfoText};e.s(["TwoUp",0,r])},175742,e=>{"use strict";var t=e.i(846932),i=e.i(997053),a=e.i(991709);let n=(0,i.default)(t.motion.div).attrs(a.ANIMATIONS.SimpleFadeIn).withConfig({displayName:"FadeIn__UseCaseFadeIn",componentId:"sc-5bd5ab86-0"})``;e.s(["UseCaseFadeIn",0,n])},876684,284317,621248,e=>{"use strict";var t=e.i(997053);let i=t.default.div.withConfig({displayName:"Grid__UseCaseGrid",componentId:"sc-2f7b5c36-0"})`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr min(90%, 1270px) 1fr;

  > * {
    grid-column: 2 / span 1;
  }

  .full-width {
    grid-column: 1 / -1;
  }
`;e.s(["UseCaseGrid",0,i],876684);var a=e.i(843476),n=e.i(846932),o=e.i(991709),r=e.i(273454),d=e.i(650617);let s=(0,t.default)(n.motion.div).attrs(o.ANIMATIONS.SimpleFadeIn).withConfig({displayName:"H2__FadeIn",componentId:"sc-16d4ba28-0"})``,l=(0,t.default)(d.Text).attrs({css:`text-align: center;
        max-width: 767px;
        margin: auto;`,size:"large"}).withConfig({displayName:"H2__Subheader",componentId:"sc-16d4ba28-1"})``,c=(0,t.default)(s).withConfig({displayName:"H2__Panel",componentId:"sc-16d4ba28-2"})`
  &.pt--medium {
    padding-top: 80px;
  }

  &.pt--large {
    padding-top: 160px;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    &.pt--medium {
      padding-top: 48px;
    }

    &.pt--large {
      padding-top: 80px;
    }
  }
`;var p=(0,t.default)(r.GradientHeader).withConfig({displayName:"H2___StyledGradientHeader",componentId:"sc-16d4ba28-3"})`
        font-size: 60px;
        margin-bottom: 20px;
        text-align: center;
        margin: auto;
        margin-bottom: 12px;
        max-width: 1000px;
      `;e.s(["UseCaseH2",0,{Panel:c,Header:function({children:e}){return(0,a.jsx)(p,{renderAs:"h2",children:e})},Subheader:l}],284317);let m=(0,t.default)(n.motion.div).attrs(o.ANIMATIONS.SimpleFadeIn).withConfig({displayName:"Hero__Panel",componentId:"sc-1db025e6-0"})`
  padding: 84px 0 84px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`,h=t.default.div.withConfig({displayName:"Hero__Actions",componentId:"sc-1db025e6-1"})`
  display: flex;
  gap: 15px;
  padding-top: 10px;
`;var x=(0,t.default)(r.GradientHeader).withConfig({displayName:"Hero___StyledGradientHeader",componentId:"sc-1db025e6-2"})`
        margin-bottom: 20px;
        text-align: center;
        max-width: 1200px;
      `,u=(0,t.default)(d.Text).withConfig({displayName:"Hero___StyledText",componentId:"sc-1db025e6-3"})`
        text-align: center;
        max-width: 800px;
      `;e.s(["UseCaseHero",0,{Panel:m,Header:function({children:e}){return(0,a.jsx)(x,{renderAs:"h0",children:e})},Subheader:function({children:e}){return(0,a.jsx)(u,{size:"large",children:e})},Actions:h}],621248)},901406,e=>{"use strict";var t=e.i(997053),i=e.i(175742);let a=(0,t.default)(i.UseCaseFadeIn).withConfig({displayName:"Quote__UseCaseQuote",componentId:"sc-e26d3d9-0"})`
  max-width: 816px;
  margin: auto;
`;e.s(["UseCaseQuote",0,a])},134700,e=>{"use strict";var t=e.i(843476),i=e.i(997053),a=e.i(739876),n=e.i(581444);let o=(0,i.default)(n.LayoutSubgrid).withConfig({displayName:"V1PageWrapper__V1Subgrid",componentId:"sc-cf85dce9-0"})`
  padding-top: ${({$noTopPadding:e})=>e?0:"12.5rem"};
  overflow-x: clip;
  position: relative;
  isolation: isolate;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    padding-top: ${({$noTopPadding:e})=>e?0:"9rem"};
  }

  & ~ & {
    padding-top: 0;
  }
`,r=(0,i.default)(a.GridRule).withConfig({displayName:"V1PageWrapper__ResponsiveGridRule",componentId:"sc-cf85dce9-1"})`
  @media (max-width: ${({theme:e})=>e.mediaQuery.MOBILE}) {
    display: none;
  }
`;e.s(["V1GridLines",0,function({children:e}){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.LayoutSubgrid,{"aria-hidden":"true","data-pile":!0,children:[(0,t.jsx)(r,{$column:4}),(0,t.jsx)(a.GridRule,{$column:7}),(0,t.jsx)(r,{$column:10})]}),(0,t.jsx)(n.LayoutSubgrid,{"data-pile":!0,children:e})]})},"V1PageWrapper",0,function({children:e,noTopPadding:i}){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.ContentMarginLine,{"data-v1-gridlines":!0}),(0,t.jsx)(o,{$noTopPadding:i,"data-content-grid":!0,children:e}),(0,t.jsx)(a.ContentMarginLine,{"data-right":!0,"data-v1-gridlines":!0})]})}])}]);