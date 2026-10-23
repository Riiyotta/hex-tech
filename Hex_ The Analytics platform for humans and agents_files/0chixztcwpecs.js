(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,172441,e=>{"use strict";var i=e.i(843476),t=e.i(165425);e.i(726497);var n=e.i(500638),a=e.i(212980),o=e.i(778888);let r=({children:e,theme:r="dark"})=>(0,i.jsxs)(a.ThemeProvider,{forcedTheme:r,children:[(0,i.jsx)(n.GlobalStyles,{}),(0,i.jsx)(o.UtilityCss,{}),(0,i.jsx)(t.HeaderUIProvider,{initialTickerHeight:0,children:e})]});r.displayName="BlankPageLayout",e.s(["BlankPageLayout",0,r])},909541,e=>{e.v({answerParagraph:"FAQ-module__E5gmgG__answerParagraph",questionHeading:"FAQ-module__E5gmgG__questionHeading"})},558202,e=>{"use strict";var i=e.i(843476),t=e.i(271645),n=e.i(846932),a=e.i(997053),o=e.i(258591),r=e.i(650617),s=e.i(430388),d=e.i(637804),l=e.i(991709),c=e.i(665419),p=e.i(909541);let h=t.memo(({footer:e,footerLinkTrackingLabel:t,heading:n="FAQ",items:a,noBkg:o=!1,noPadding:r=!1,questionHeadingLevel:s="h3",showFooter:p=!0,showHeader:h=!0,fullWidth:m=!1})=>(0,i.jsxs)(x,{...l.ANIMATIONS.SimpleFadeIn,$noBkg:o,$noPadding:r,id:"faq",children:[(0,i.jsx)("noscript",{children:(0,i.jsx)("style",{children:`.${x.styledComponentId} .${_.styledComponentId} { display: flex !important; }`})}),(0,i.jsxs)(f,{$fullWidth:m,children:[h&&(0,i.jsx)(b,{children:(0,i.jsx)(C,{renderAs:"h2",children:n})}),(0,i.jsx)(v,{children:a.map((e,t)=>(0,i.jsx)(g,{answer:e.answer,id:e.id,question:e.question,questionHeadingLevel:s},e.id??t))}),p&&(0,i.jsx)(u,{size:"medium",children:e??(0,i.jsxs)(i.Fragment,{children:["Can't find your answer here?"," ",(0,i.jsx)(d.SiteLink,{href:c.INTERNAL_LINKS.RequestADemo,trackingLabel:t,children:"Get in touch"}),"."]})})]})]}));h.displayName="FAQ";let m=(0,a.default)(s.ChevronDown).withConfig({displayName:"FAQ__ChevronIcon",componentId:"sc-c91ba0f9-0"})`
  transform: rotate(${({$isOpen:e})=>e?"0deg":"-90deg"});
`,g=t.memo(({question:e,answer:n,id:a,questionHeadingLevel:o})=>{let[r,s]=(0,t.useState)(!1),d=(0,t.useId)(),l=a??d,c=`${l}-question`,h=`${l}-answer`;return(0,t.useEffect)(()=>{let e=()=>{a&&window.location.hash===`#${a}`?setTimeout(()=>{s(!0)},50):window.location.hash&&window.location.hash.startsWith("#faq-")&&s(!1)};return e(),window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[a]),(0,i.jsxs)(w,{"data-name":"faq-item",id:a,children:[(0,i.jsx)(o,{className:p.default.questionHeading,children:(0,i.jsxs)($,{$isOpen:r,"aria-controls":h,"aria-expanded":r,id:c,type:"button",onClick:()=>{let e=!r;s(e),e&&a?window.history.replaceState(null,"",`#${a}`):e||window.location.hash!==`#${a}`||window.history.replaceState(null,"",window.location.pathname+window.location.search)},children:[(0,i.jsx)(y,{children:e}),(0,i.jsx)("span",{"aria-hidden":!0,children:(0,i.jsx)(m,{$isOpen:r})})]})}),(0,i.jsx)(_,{$isOpen:r,"aria-labelledby":c,id:h,role:"region",children:"string"==typeof n?(0,i.jsx)("p",{className:p.default.answerParagraph,children:n}):n})]})});g.displayName="FAQItem";let x=(0,a.default)(n.motion.div).withConfig({displayName:"FAQ__Wrapper",componentId:"sc-c91ba0f9-1"})`
  background: ${({$noBkg:e,theme:i})=>e?"transparent":i.backgroundColor};
  width: 100%;
  position: relative;
  z-index: 1;

  scroll-margin-top: 120px;

  ${({$noPadding:e})=>!e&&a.css`
      padding: 80px 0;

      @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
        padding-top: 60px;
      }
    `}

  ${({$noBkg:e})=>e?"":a.css`
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
`,u=(0,a.default)(r.Text).withConfig({displayName:"FAQ__DescText",componentId:"sc-c91ba0f9-2"})`
  margin-top: 35px;
  text-align: center;
`,f=a.default.div.withConfig({displayName:"FAQ__Inner",componentId:"sc-c91ba0f9-3"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 0;
  margin: 0 auto;
  ${({$fullWidth:e})=>!e&&a.css`
      max-width: 604px;
    `}
`,b=a.default.div.withConfig({displayName:"FAQ__Top",componentId:"sc-c91ba0f9-4"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
`,v=a.default.div.withConfig({displayName:"FAQ__List",componentId:"sc-c91ba0f9-5"})`
  display: flex;
  flex-direction: column;
`,w=a.default.div.withConfig({displayName:"FAQ__Item",componentId:"sc-c91ba0f9-6"})`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
  transition: background-color
    ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`};
  scroll-margin-top: 240px;

  &:hover {
    background: ${({theme:e})=>e.borderColor.MUTED};
  }
`,$=a.default.button.withConfig({displayName:"FAQ__ItemTop",componentId:"sc-c91ba0f9-7"})`
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
`,y=a.default.span.withConfig({displayName:"FAQ__Question",componentId:"sc-c91ba0f9-8"})`
  color: ${({theme:e})=>e.fontColor.LOUD};
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.5px;
`,_=(0,a.default)(r.Text).attrs({size:"medium",as:"div"}).withConfig({displayName:"FAQ__Answer",componentId:"sc-c91ba0f9-9"})`
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
`;var C=(0,a.default)(o.Heading).withConfig({displayName:"FAQ___StyledHeading",componentId:"sc-c91ba0f9-10"})`
                  margin: 15px 0px;
                `;e.s(["FAQ",0,h,"FAQ_ID",0,"faq"])},785191,e=>{"use strict";var i=e.i(843476),t=e.i(271645),n=e.i(997053);let a=n.css`
  --hover-transition-duration: 529.33ms;
  --hover-transition-timing-function: linear(
    0 0%,
    0.005892 1%,
    0.022227 2%,
    0.047151 3%,
    0.079006 4%,
    0.116321 5%,
    0.157797 6%,
    0.202293 7.000000000000001%,
    0.248818 8%,
    0.296516 9%,
    0.344652 10%,
    0.392606 11%,
    0.439857 12%,
    0.485977 13%,
    0.530617 14.000000000000002%,
    0.573504 15%,
    0.614426 16%,
    0.653228 17%,
    0.689804 18%,
    0.724091 19%,
    0.756062 20%,
    0.785721 21%,
    0.813097 22%,
    0.838242 23%,
    0.861223 24%,
    0.882123 25%,
    0.901035 26%,
    0.918061 27%,
    0.933305 28.000000000000004%,
    0.946879 28.999999999999996%,
    0.958894 30%,
    0.96946 31%,
    0.978689 32%,
    0.986687 33%,
    0.993561 34%,
    0.999411 35%,
    1.004333 36%,
    1.00842 37%,
    1.011758 38%,
    1.014427 39%,
    1.016506 40%,
    1.018063 41%,
    1.019165 42%,
    1.019871 43%,
    1.020237 44%,
    1.020313 45%,
    1.020144 46%,
    1.019771 47%,
    1.019232 48%,
    1.018558 49%,
    1.01778 50%,
    1.016922 51%,
    1.016007 52%,
    1.015055 53%,
    1.014083 54%,
    1.013105 55.00000000000001%,
    1.012133 56.00000000000001%,
    1.011177 56.99999999999999%,
    1.010246 57.99999999999999%,
    1.009346 59%,
    1.008483 60%,
    1.00766 61%,
    1.006882 62%,
    1.006148 63%,
    1.005462 64%,
    1.004822 65%,
    1.00423 66%,
    1.003683 67%,
    1.003182 68%,
    1.002725 69%,
    1.002309 70%,
    1.001933 71%,
    1.001595 72%,
    1.001293 73%,
    1.001024 74%,
    1.000786 75%,
    1.000578 76%,
    1.000396 77%,
    1.000238 78%,
    1.000103 79%,
    0.999989 80%
  );

  transition-property: border, transform, box-shadow;
  transition-duration: var(--hover-transition-duration);
  transition-timing-function: var(--hover-transition-timing-function);
  perspective: 800px;
  transform: translateY(0);

  @media (hover: hover) {
    &:hover {
      transform: translateY(-4px);
      box-shadow: ${({theme:e})=>e.card.GLASS_HOVER};
    }
  }
`,o=n.css`
  border: 1px solid ${({theme:e})=>e.highlightColor15};
  transition:
    border
      ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`},
    background-color
      ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`};

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: -1px;
    right: -1px;
    background: ${({theme:e})=>e.highlightColor40};
  }

  &::before {
    width: 20px;
    height: 1px;
  }

  &::after {
    height: 20px;
    width: 1px;
  }

  @media (hover: hover) {
    &:hover {
      border: 1px solid ${({theme:e})=>e.highlightColor30};
      background-color: ${({theme:e})=>e.highlightColor10};
    }
  }

  [data-theme='pink'] & {
    border: 1px solid ${({theme:e})=>e.paletteCssVars.grid700};
    color: ${({theme:e})=>e.paletteCssVars.fg1200};

    &::before {
      height: auto;
      width: auto;
      position: absolute;
      inset: 0;
      pointer-events: none;
      background: ${({theme:e})=>e.paletteCssVars.bg300};
      opacity: 0.1;
      z-index: -1;

      transition: background-color 0.2s ease-out;
    }

    &::after {
      height: 20px;
      width: 20px;
      background: transparent;
      border-right: 1px solid ${({theme:e})=>e.paletteCssVars.grid1200};
      border-top: 1px solid ${({theme:e})=>e.paletteCssVars.grid1200};
    }

    &:hover::before {
      opacity: 0.3;
    }
  }
`,r=n.default.div.withConfig({displayName:"Card__Wrapper",componentId:"sc-44e78466-0"})`
  align-items: flex-start;
  cursor: ${({$interactive:e})=>e?"pointer":"default"};
  display: flex;
  flex-direction: column;
  padding: 10px;
  position: relative;
  text-align: left;

  ${({$effect:e})=>"lines"===e&&o}
  ${({$effect:e,theme:i})=>"glass"===e&&i.card.GLASS}
  ${({$effect:e,$interactive:i})=>"glass"===e&&i&&a}
`,s=t.memo(function({children:e,className:t,onClick:n,effect:a="lines",interactive:o}){return(0,i.jsx)(r,{$effect:a,$interactive:o??void 0!==n,className:t,onClick:n,children:e})});e.s(["Card",0,s])},99871,e=>{"use strict";var i,t=e.i(271645);function n(){return(n=Object.assign.bind()).apply(null,arguments)}e.s(["default",0,function(e){return t.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 52 20"},e),i||(i=t.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9 0v6.973H7V0H0v20h7V10h2v10h7V0zm9 20h16v-8h-7v5h-2v-7h9V0H18zm7-13V3h2v4zm20 0V0h7v5l-3 3.5 3 3.5v8h-7V9.973h-2V20h-7v-8l3-3.5L36 5V0h7v7z",clipRule:"evenodd"})))}])},763834,e=>{e.q("/_next/static/media/sodt-chart-1.1n989j91h0mhs.png")},120952,e=>{e.q("/_next/static/media/sodt-chart-2.2sq2z760iot_j.png")},647981,e=>{e.q("/_next/static/media/sodt-chart-3.3e9964ynaftan.png")},599873,e=>{e.q("/_next/static/media/sodt-chart-4.3g9j5-1-i1fes.png")},376700,e=>{e.q("/_next/static/media/sodt-chart-5.2m28fk0y5vd00.png")},290619,e=>{e.q("/_next/static/media/sodt-chart-6.0nmsmk__i7qj7.png")},936061,e=>{e.q("/_next/static/media/sodt-chart-7.29l3czotxuh15.png")}]);