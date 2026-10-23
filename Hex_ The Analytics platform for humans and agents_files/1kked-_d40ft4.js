(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,909541,e=>{e.v({answerParagraph:"FAQ-module__E5gmgG__answerParagraph",questionHeading:"FAQ-module__E5gmgG__questionHeading"})},558202,e=>{"use strict";var i=e.i(843476),t=e.i(271645),a=e.i(846932),n=e.i(997053),o=e.i(258591),r=e.i(650617),d=e.i(430388),s=e.i(637804),l=e.i(991709),p=e.i(665419),c=e.i(909541);let m=t.memo(({footer:e,footerLinkTrackingLabel:t,heading:a="FAQ",items:n,noBkg:o=!1,noPadding:r=!1,questionHeadingLevel:d="h3",showFooter:c=!0,showHeader:m=!0,fullWidth:h=!1})=>(0,i.jsxs)(x,{...l.ANIMATIONS.SimpleFadeIn,$noBkg:o,$noPadding:r,id:"faq",children:[(0,i.jsx)("noscript",{children:(0,i.jsx)("style",{children:`.${x.styledComponentId} .${_.styledComponentId} { display: flex !important; }`})}),(0,i.jsxs)(u,{$fullWidth:h,children:[m&&(0,i.jsx)(y,{children:(0,i.jsx)(N,{renderAs:"h2",children:a})}),(0,i.jsx)(w,{children:n.map((e,t)=>(0,i.jsx)(g,{answer:e.answer,id:e.id,question:e.question,questionHeadingLevel:d},e.id??t))}),c&&(0,i.jsx)(f,{size:"medium",children:e??(0,i.jsxs)(i.Fragment,{children:["Can't find your answer here?"," ",(0,i.jsx)(s.SiteLink,{href:p.INTERNAL_LINKS.RequestADemo,trackingLabel:t,children:"Get in touch"}),"."]})})]})]}));m.displayName="FAQ";let h=(0,n.default)(d.ChevronDown).withConfig({displayName:"FAQ__ChevronIcon",componentId:"sc-c91ba0f9-0"})`
  transform: rotate(${({$isOpen:e})=>e?"0deg":"-90deg"});
`,g=t.memo(({question:e,answer:a,id:n,questionHeadingLevel:o})=>{let[r,d]=(0,t.useState)(!1),s=(0,t.useId)(),l=n??s,p=`${l}-question`,m=`${l}-answer`;return(0,t.useEffect)(()=>{let e=()=>{n&&window.location.hash===`#${n}`?setTimeout(()=>{d(!0)},50):window.location.hash&&window.location.hash.startsWith("#faq-")&&d(!1)};return e(),window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[n]),(0,i.jsxs)(b,{"data-name":"faq-item",id:n,children:[(0,i.jsx)(o,{className:c.default.questionHeading,children:(0,i.jsxs)(I,{$isOpen:r,"aria-controls":m,"aria-expanded":r,id:p,type:"button",onClick:()=>{let e=!r;d(e),e&&n?window.history.replaceState(null,"",`#${n}`):e||window.location.hash!==`#${n}`||window.history.replaceState(null,"",window.location.pathname+window.location.search)},children:[(0,i.jsx)($,{children:e}),(0,i.jsx)("span",{"aria-hidden":!0,children:(0,i.jsx)(h,{$isOpen:r})})]})}),(0,i.jsx)(_,{$isOpen:r,"aria-labelledby":p,id:m,role:"region",children:"string"==typeof a?(0,i.jsx)("p",{className:c.default.answerParagraph,children:a}):a})]})});g.displayName="FAQItem";let x=(0,n.default)(a.motion.div).withConfig({displayName:"FAQ__Wrapper",componentId:"sc-c91ba0f9-1"})`
  background: ${({$noBkg:e,theme:i})=>e?"transparent":i.backgroundColor};
  width: 100%;
  position: relative;
  z-index: 1;

  scroll-margin-top: 120px;

  ${({$noPadding:e})=>!e&&n.css`
      padding: 80px 0;

      @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
        padding-top: 60px;
      }
    `}

  ${({$noBkg:e})=>e?"":n.css`
          &::after {
            content: '';
            position: absolute;
            inset: 0;
            background-image: ${({theme:e})=>e.paperTextureCssVars.img};
            background-size: ${({theme:e})=>e.paperTextureCssVars.size};
            mix-blend-mode: ${({theme:e})=>e.paperTextureCssVars.mixBlendMode};
            opacity: ${({theme:e})=>e.paperTextureCssVars.opacity};
            pointer-events: none;
          }
        `}
`,f=(0,n.default)(r.Text).withConfig({displayName:"FAQ__DescText",componentId:"sc-c91ba0f9-2"})`
  margin-top: 35px;
  text-align: center;
`,u=n.default.div.withConfig({displayName:"FAQ__Inner",componentId:"sc-c91ba0f9-3"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 0;
  margin: 0 auto;
  ${({$fullWidth:e})=>!e&&n.css`
      max-width: 604px;
    `}
`,y=n.default.div.withConfig({displayName:"FAQ__Top",componentId:"sc-c91ba0f9-4"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
`,w=n.default.div.withConfig({displayName:"FAQ__List",componentId:"sc-c91ba0f9-5"})`
  display: flex;
  flex-direction: column;
`,b=n.default.div.withConfig({displayName:"FAQ__Item",componentId:"sc-c91ba0f9-6"})`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
  transition: background-color
    ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`};
  scroll-margin-top: 240px;

  &:hover {
    background: ${({theme:e})=>e.borderColor.MUTED};
  }
`,I=n.default.button.withConfig({displayName:"FAQ__ItemTop",componentId:"sc-c91ba0f9-7"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 20px ${({$isOpen:e})=>e?"0":"20px"};
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
`,$=n.default.span.withConfig({displayName:"FAQ__Question",componentId:"sc-c91ba0f9-8"})`
  color: ${({theme:e})=>e.fontColor.LOUD};
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.5px;
`,_=(0,n.default)(r.Text).attrs({size:"medium",as:"div"}).withConfig({displayName:"FAQ__Answer",componentId:"sc-c91ba0f9-9"})`
  display: ${({$isOpen:e})=>e?"flex":"none"};
  flex-direction: column;
  gap: 12px;
  padding: 10px 20px 20px;

  ul {
    list-style-type: circle;
    padding-left: 18px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  strong {
    font-weight: ${({theme:e})=>e.fontWeight.MEDIUM};
  }
`;var N=(0,n.default)(o.Heading).withConfig({displayName:"FAQ___StyledHeading",componentId:"sc-c91ba0f9-10"})`
                  margin: 15px 0px;
                `;e.s(["FAQ",0,m,"FAQ_ID",0,"faq"])},296436,e=>{e.v(i=>Promise.all(["static/chunks/3m1bcb90s3oz8.js"].map(i=>e.l(i))).then(()=>i(416694)))},32130,e=>{"use strict";var i=e.i(843476),t=e.i(271645),a=e.i(997053),n=e.i(430388),o=e.i(637804),r=e.i(154213);let d=a.default.div.withConfig({displayName:"GridItem__LearnMore",componentId:"sc-e99cb846-0"})`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-end;
  margin-top: auto;
  padding: 0 10px 10px;
  opacity: 0.4;
  color: ${({theme:e})=>e.highlightColor};
  transition: opacity
    ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`};

  span {
    font-family: ${({theme:e})=>e.fontFamily.MONO};
    font-size: ${({theme:e})=>e.fontSize.SMALL};
    font-weight: ${({theme:e})=>e.fontWeight.BOLD};
    text-transform: uppercase;
    line-height: 11px;
    opacity: 0;
    transition: opacity
      ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`};
  }
`,s=a.css`
  display: flex;
  flex: 1 1 0;
  padding: 0;
  position: relative;
  cursor: pointer;
  box-shadow: 0 0 0 1px transparent;
  border: none;

  transition:
    box-shadow
      ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`},
    background-color
      ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`};

  ${({$showBkgGradient:e})=>e&&a.css`
      &::before {
        content: '';
        top: 0;
        left: 0;
        right: 0;
        position: absolute;
        height: 165px;
        background: linear-gradient(
          349deg,
          transparent 30%,
          rgba(157, 123, 138, 0.822275) 92%
        );
      }
    `}

  &::after {
    content: '';
    background: ${({theme:e})=>e.highlightColor};
    opacity: 0.05;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    transition: opacity
      ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`};
  }

  &:hover {
    background: transparent;
    box-shadow: 0 0 0 1px ${({theme:e})=>e.highlightColor30};

    &::after {
      opacity: 0.1;
    }

    ${d} {
      opacity: 1;

      > span {
        opacity: 1;
      }
    }
  }

  &:active {
    box-shadow: 0 0 0 1px ${({theme:e})=>e.highlightColor40};

    &::after {
      opacity: 0.4;
    }
  }
`,l=a.default.div.withConfig({displayName:"GridItem__DivWrapper",componentId:"sc-e99cb846-1"})`
  ${s}
`,p=(0,a.default)(o.SiteLink).withConfig({displayName:"GridItem__LinkWrapper",componentId:"sc-e99cb846-2"})`
  ${s}
`,c=a.default.div.withConfig({displayName:"GridItem__Inner",componentId:"sc-e99cb846-3"})`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
`,m=t.memo(({showBkgGradient:e=!1,showLearnMore:t=!0,to:a,isExternal:o=!1,DANGEROUS_AS_DIV:s=!1,children:m,className:h,trackingLabel:g})=>{let x=(0,i.jsxs)(c,{children:[m,t&&(0,i.jsxs)(d,{children:[(0,i.jsx)("span",{children:"Learn more"}),(0,i.jsx)(n.ArrowRightIcon,{})]})]});return s?(0,i.jsx)(l,{$showBkgGradient:e,className:h,"data-tracking-label":g,onClick:e=>{let i=!1;if(e.target instanceof Element){let t=e.target.closest("a");i=e.currentTarget.contains(t)}i||((0,r.logTracking)({href:a,children:m,label:g}),window.open(a,"_blank","noopener noreferrer"))},children:x}):(0,i.jsx)(p,{$showBkgGradient:e,className:h,href:a,trackingLabel:g,...o?{rel:"noopener noreferrer",target:"_blank"}:{},children:x})});m.displayName="GridItem",e.s(["GridItem",0,m])},104185,e=>{"use strict";var i=e.i(843476),t=e.i(271645),a=e.i(846932),n=e.i(657688),o=e.i(193594),r=e.i(997053),d=e.i(706736),s=e.i(288839),l=e.i(991709),p=e.i(665419),c=e.i(273454),m=e.i(258591),h=e.i(650617);let g=r.default.div.withConfig({displayName:"HeroToutWithIllustration__BadgeWrapper",componentId:"sc-812a88b1-0"})`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 34px;
  padding: 0 20px 0 14px;
  margin-bottom: 16px;
  border-radius: 43px;
  background: linear-gradient(
      to bottom,
      rgba(245, 192, 192, 0.016) 0%,
      rgba(245, 195, 195, 0.1) 100%
    ),
    linear-gradient(
      114.368deg,
      rgba(166, 131, 134, 0.15) 0.30084%,
      rgba(70, 59, 65, 0.15) 99.867%
    );
  border: 0.78px solid #f5c3c0;
`,x=r.default.div.withConfig({displayName:"HeroToutWithIllustration__BadgeIconWrapper",componentId:"sc-812a88b1-1"})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
`,f=r.default.span.withConfig({displayName:"HeroToutWithIllustration__BadgeText",componentId:"sc-812a88b1-2"})`
  font-family: 'GT Cinetype', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.4px;
  color: #f5c3c3;
`,u=t.memo(({iconSrc:e,text:t})=>(0,i.jsxs)(g,{children:[e&&(0,i.jsx)(x,{children:(0,i.jsx)(n.default,{alt:"",height:16,src:e,style:{width:"100%",height:"100%"},width:16})}),(0,i.jsx)(f,{children:t})]}));u.displayName="Badge";let y=(0,r.default)(a.motion.div).withConfig({displayName:"HeroToutWithIllustration__Wrapper",componentId:"sc-812a88b1-3"})`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 40px;
  margin: 0 auto;
  margin-bottom: 140px;
  max-width: ${({theme:e})=>e.maxWidth.PAGE};
  width: 100%;

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    margin-bottom: 60px;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    display: flex;
    flex-direction: column;
    padding: 0 16px;
  }
`,w=r.default.div.withConfig({displayName:"HeroToutWithIllustration__SidewaysText",componentId:"sc-812a88b1-4"})`
  position: absolute;
  transform: rotate(270deg);
  opacity: 0.7;
  display: flex;
  align-items: center;
  gap: 20px;
  left: -155px;
  top: 118px;
  margin: 0;
  width: fit-content;
  color: ${({theme:e})=>e.colors.LIGHT_PINK};
  letter-spacing: 5px;
  font-weight: ${({theme:e})=>e.fontWeight.SEMI_BOLD};
  font-family: ${({theme:e})=>e.fontFamily.MONO};
  text-transform: uppercase;

  &::before {
    content: '';
    display: block;
    height: 1px;
    width: 100px;
    background-color: ${({theme:e})=>(0,o.rgba)(e.colors.LIGHT_PURPLE,.5)};
    flex: none;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    top: 120px;
    left: -142px;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    display: none;
  }
`,b=r.css`
  && {
    font-size: ${({$fontSize:e})=>e||"68px"};
    margin-bottom: 17px;
    text-align: left;

    @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
      font-size: 54px;
      line-height: 56px;
    }
  }
`,I=(0,r.default)(m.Heading).attrs({renderAs:"h1"}).withConfig({displayName:"HeroToutWithIllustration__Title",componentId:"sc-812a88b1-5"})`
  ${b}
`,$=(0,r.default)(c.GradientHeader).attrs({renderAs:"h1"}).withConfig({displayName:"HeroToutWithIllustration__GradientTitle",componentId:"sc-812a88b1-6"})`
  ${b}
`,_=r.default.div.withConfig({displayName:"HeroToutWithIllustration__Left",componentId:"sc-812a88b1-7"})`
  position: relative;
  max-width: 540px;

  p {
    width: 92%;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    p {
      width: 100%;
    }
  }
`,N=r.default.div.withConfig({displayName:"HeroToutWithIllustration__Actions",componentId:"sc-812a88b1-8"})`
  display: flex;
  gap: 20px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    gap: 10px;
    flex-direction: column;
    align-self: stretch;
  }
`,j=r.default.div.withConfig({displayName:"HeroToutWithIllustration__Right",componentId:"sc-812a88b1-9"})`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  img {
    position: absolute;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    margin-top: 40px;
    justify-content: center;

    img {
      position: relative;
      width: 180%;
      top: auto;
      left: auto;
    }
  }
`,A=t.memo(({badge:e,title:a,titleSize:n,description:o,className:c,customContent:m=null,gradientTitle:h=!1,showIllustrationOnCollapse:g=!1,illustration:x,subtitle:f,customActions:b})=>{let A=(0,r.useTheme)(),T=(0,s.default)(A.mediaQueryString.MEDIUM),v=(0,t.useMemo)(()=>b?(0,i.jsx)(N,{children:b}):(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(N,{children:[(0,i.jsx)(d.Button,{fill:T,href:p.SIGNUP_LINK,size:"large",stylez:"loud",text:"Get started for free"}),(0,i.jsx)(d.Button,{fill:T,href:p.INTERNAL_LINKS.ContactUs,size:"large",text:"Talk to us"})]})}),[b,T]);return(0,i.jsxs)(y,{className:c,...l.ANIMATIONS.SimpleFadeIn,children:[(0,i.jsxs)(_,{children:[f&&(0,i.jsx)(w,{children:f}),e&&(0,i.jsx)(u,{iconSrc:e.iconSrc,text:e.text}),h?(0,i.jsx)($,{$fontSize:n,renderAs:"h1",children:a}):(0,i.jsx)(I,{$fontSize:n,renderAs:"h1",children:a}),(0,i.jsx)(C,{size:"extra-large",children:o}),m,v]}),(!T||g)&&(0,i.jsx)(j,{children:x})]})});A.displayName="HeroToutWithIllustration";var C=(0,r.default)(h.Text).withConfig({displayName:"HeroToutWithIllustration___StyledText",componentId:"sc-812a88b1-10"})`
                margin-bottom: 35px;
              `;e.s(["HeroToutWithIllustration",0,A])},134700,e=>{"use strict";var i=e.i(843476),t=e.i(997053),a=e.i(739876),n=e.i(581444);let o=(0,t.default)(n.LayoutSubgrid).withConfig({displayName:"V1PageWrapper__V1Subgrid",componentId:"sc-cf85dce9-0"})`
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
`,r=(0,t.default)(a.GridRule).withConfig({displayName:"V1PageWrapper__ResponsiveGridRule",componentId:"sc-cf85dce9-1"})`
  @media (max-width: ${({theme:e})=>e.mediaQuery.MOBILE}) {
    display: none;
  }
`;e.s(["V1GridLines",0,function({children:e}){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.LayoutSubgrid,{"aria-hidden":"true","data-pile":!0,children:[(0,i.jsx)(r,{$column:4}),(0,i.jsx)(a.GridRule,{$column:7}),(0,i.jsx)(r,{$column:10})]}),(0,i.jsx)(n.LayoutSubgrid,{"data-pile":!0,children:e})]})},"V1PageWrapper",0,function({children:e,noTopPadding:t}){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.ContentMarginLine,{"data-v1-gridlines":!0}),(0,i.jsx)(o,{$noTopPadding:t,"data-content-grid":!0,children:e}),(0,i.jsx)(a.ContentMarginLine,{"data-right":!0,"data-v1-gridlines":!0})]})}])}]);