(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,909541,e=>{e.v({answerParagraph:"FAQ-module__E5gmgG__answerParagraph",questionHeading:"FAQ-module__E5gmgG__questionHeading"})},558202,e=>{"use strict";var t=e.i(843476),i=e.i(271645),n=e.i(846932),a=e.i(997053),o=e.i(258591),r=e.i(650617),s=e.i(430388),l=e.i(637804),d=e.i(991709),c=e.i(665419),f=e.i(909541);let m=i.memo(({footer:e,footerLinkTrackingLabel:i,heading:n="FAQ",items:a,noBkg:o=!1,noPadding:r=!1,questionHeadingLevel:s="h3",showFooter:f=!0,showHeader:m=!0,fullWidth:u=!1})=>(0,t.jsxs)(p,{...d.ANIMATIONS.SimpleFadeIn,$noBkg:o,$noPadding:r,id:"faq",children:[(0,t.jsx)("noscript",{children:(0,t.jsx)("style",{children:`.${p.styledComponentId} .${C.styledComponentId} { display: flex !important; }`})}),(0,t.jsxs)(x,{$fullWidth:u,children:[m&&(0,t.jsx)(y,{children:(0,t.jsx)(S,{renderAs:"h2",children:n})}),(0,t.jsx)(b,{children:a.map((e,i)=>(0,t.jsx)(h,{answer:e.answer,id:e.id,question:e.question,questionHeadingLevel:s},e.id??i))}),f&&(0,t.jsx)(g,{size:"medium",children:e??(0,t.jsxs)(t.Fragment,{children:["Can't find your answer here?"," ",(0,t.jsx)(l.SiteLink,{href:c.INTERNAL_LINKS.RequestADemo,trackingLabel:i,children:"Get in touch"}),"."]})})]})]}));m.displayName="FAQ";let u=(0,a.default)(s.ChevronDown).withConfig({displayName:"FAQ__ChevronIcon",componentId:"sc-c91ba0f9-0"})`
  transform: rotate(${({$isOpen:e})=>e?"0deg":"-90deg"});
`,h=i.memo(({question:e,answer:n,id:a,questionHeadingLevel:o})=>{let[r,s]=(0,i.useState)(!1),l=(0,i.useId)(),d=a??l,c=`${d}-question`,m=`${d}-answer`;return(0,i.useEffect)(()=>{let e=()=>{a&&window.location.hash===`#${a}`?setTimeout(()=>{s(!0)},50):window.location.hash&&window.location.hash.startsWith("#faq-")&&s(!1)};return e(),window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[a]),(0,t.jsxs)(v,{"data-name":"faq-item",id:a,children:[(0,t.jsx)(o,{className:f.default.questionHeading,children:(0,t.jsxs)(w,{$isOpen:r,"aria-controls":m,"aria-expanded":r,id:c,type:"button",onClick:()=>{let e=!r;s(e),e&&a?window.history.replaceState(null,"",`#${a}`):e||window.location.hash!==`#${a}`||window.history.replaceState(null,"",window.location.pathname+window.location.search)},children:[(0,t.jsx)($,{children:e}),(0,t.jsx)("span",{"aria-hidden":!0,children:(0,t.jsx)(u,{$isOpen:r})})]})}),(0,t.jsx)(C,{$isOpen:r,"aria-labelledby":c,id:m,role:"region",children:"string"==typeof n?(0,t.jsx)("p",{className:f.default.answerParagraph,children:n}):n})]})});h.displayName="FAQItem";let p=(0,a.default)(n.motion.div).withConfig({displayName:"FAQ__Wrapper",componentId:"sc-c91ba0f9-1"})`
  background: ${({$noBkg:e,theme:t})=>e?"transparent":t.backgroundColor};
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
`,g=(0,a.default)(r.Text).withConfig({displayName:"FAQ__DescText",componentId:"sc-c91ba0f9-2"})`
  margin-top: 35px;
  text-align: center;
`,x=a.default.div.withConfig({displayName:"FAQ__Inner",componentId:"sc-c91ba0f9-3"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 0;
  margin: 0 auto;
  ${({$fullWidth:e})=>!e&&a.css`
      max-width: 604px;
    `}
`,y=a.default.div.withConfig({displayName:"FAQ__Top",componentId:"sc-c91ba0f9-4"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
`,b=a.default.div.withConfig({displayName:"FAQ__List",componentId:"sc-c91ba0f9-5"})`
  display: flex;
  flex-direction: column;
`,v=a.default.div.withConfig({displayName:"FAQ__Item",componentId:"sc-c91ba0f9-6"})`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
  transition: background-color
    ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`};
  scroll-margin-top: 240px;

  &:hover {
    background: ${({theme:e})=>e.borderColor.MUTED};
  }
`,w=a.default.button.withConfig({displayName:"FAQ__ItemTop",componentId:"sc-c91ba0f9-7"})`
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
`,$=a.default.span.withConfig({displayName:"FAQ__Question",componentId:"sc-c91ba0f9-8"})`
  color: ${({theme:e})=>e.fontColor.LOUD};
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.5px;
`,C=(0,a.default)(r.Text).attrs({size:"medium",as:"div"}).withConfig({displayName:"FAQ__Answer",componentId:"sc-c91ba0f9-9"})`
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
`;var S=(0,a.default)(o.Heading).withConfig({displayName:"FAQ___StyledHeading",componentId:"sc-c91ba0f9-10"})`
                  margin: 15px 0px;
                `;e.s(["FAQ",0,m,"FAQ_ID",0,"faq"])},785191,e=>{"use strict";var t=e.i(843476),i=e.i(271645),n=e.i(997053);let a=n.css`
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
  ${({$effect:e,theme:t})=>"glass"===e&&t.card.GLASS}
  ${({$effect:e,$interactive:t})=>"glass"===e&&t&&a}
`,s=i.memo(function({children:e,className:i,onClick:n,effect:a="lines",interactive:o}){return(0,t.jsx)(r,{$effect:a,$interactive:o??void 0!==n,className:i,onClick:n,children:e})});e.s(["Card",0,s])},939808,e=>{"use strict";var t=e.i(843476),i=e.i(271645),n=e.i(997053),a=e.i(430388),o=e.i(785191),r=e.i(650617);let s=i.memo(({logoPath:e,customerName:i,quote:n,authorAvatarPath:o,author:s,authorTitle:h})=>(0,t.jsx)(l,{children:(0,t.jsxs)(d,{children:[e&&(0,t.jsx)(m,{children:"string"==typeof e?(0,t.jsx)("img",{alt:i||"customer logo",loading:"lazy",src:e}):e}),(0,t.jsxs)(c,{children:[(0,t.jsx)(f,{children:(0,t.jsx)(a.QuoteIcon,{})}),(0,t.jsxs)("blockquote",{children:['"',n,"”"]})]}),s&&(0,t.jsxs)(u,{children:[o&&(0,t.jsx)("img",{alt:s,loading:"lazy",src:o}),(0,t.jsxs)(r.Text,{children:[s,(h||i)&&(0,t.jsxs)("span",{children:["  ",h&&`${h} `,i&&(0,t.jsxs)(t.Fragment,{children:["at ",i]})]})]})]})]})}));s.displayName="CustomerQuoteCard";let l=(0,n.default)(o.Card).attrs({effect:"glass"}).withConfig({displayName:"CustomerQuoteCard__Wrapper",componentId:"sc-5e534bf5-0"})`
  && {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    padding: 38px 45px;
    height: 100%;
  }
`,d=n.default.div.withConfig({displayName:"CustomerQuoteCard__Quote",componentId:"sc-5e534bf5-1"})`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  gap: 24px;
  line-height: 1.35;
  opacity: 1;
  width: 100%;
`,c=n.default.div.withConfig({displayName:"CustomerQuoteCard__QuoteTextWrapper",componentId:"sc-5e534bf5-2"})`
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
`,f=n.default.div.withConfig({displayName:"CustomerQuoteCard__QuoteLine",componentId:"sc-5e534bf5-3"})`
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
`,m=n.default.div.withConfig({displayName:"CustomerQuoteCard__Logo",componentId:"sc-5e534bf5-4"})`
  display: flex;
  align-items: start;

  img {
    max-height: 45px;
    object-fit: contain;
    filter: ${({theme:e})=>"dark"===e.name?"brightness(0) invert(1)":"invert(100%) sepia(0%) saturate(1%) hue-rotate(339deg) brightness(100%) contrast(101%)"};
  }
`,u=n.default.div.withConfig({displayName:"CustomerQuoteCard__Author",componentId:"sc-5e534bf5-5"})`
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
`;e.s(["CustomerQuoteCard",0,s])},809573,e=>{"use strict";var t=e.i(843476),i=e.i(271645),n=e.i(922998),a=e.i(846932),o=e.i(997053),r=e.i(991709),s=e.i(288839),l=e.i(939808);let d=(0,o.default)(a.motion.div).withConfig({displayName:"CustomerQuotesScrollingTout__Wrapper",componentId:"sc-8e09488a-0"})`
  position: relative;
  display: flex;
  flex-grow: 1;
  width: 100%;
  margin: 0 auto;
  padding: 100px 0;

  .rfm-marquee-container {
    overflow-x: visible !important;
  }

  .rfm-marquee {
    .rfm-initial-child-container {
      height: 100%;

      .rfm-child {
        height: 100%;
      }
    }
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    padding: 60px 40px;
    gap: 30px;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    flex-direction: column;
    padding: 60px 30px;
  }
`,c=o.default.div.withConfig({displayName:"CustomerQuotesScrollingTout__MarqueeOption",componentId:"sc-8e09488a-1"})`
  width: 30vw;
  min-width: 370px;
  height: 100%;
  padding-right: 20px;
  flex-grow: 1;
`,f=(0,o.default)(n.default).withConfig({displayName:"CustomerQuotesScrollingTout__StyledMarquee",componentId:"sc-8e09488a-2"})`
  align-items: stretch;
  justify-content: stretch;

  .rfm-marquee {
    flex-grow: 1;
    display: flex;
    align-items: stretch;
    justify-content: stretch;
  }
`,m=i.memo(function({customerQuotes:e}){let i=(0,o.useTheme)(),n=(0,s.default)(i.mediaQueryString.MEDIUM),a=(0,s.default)("(prefers-reduced-motion: reduce)");return n?(0,t.jsx)(d,{...r.ANIMATIONS.SimpleFadeIn,children:e.slice(0,2).map((e,i)=>(0,t.jsx)(l.CustomerQuoteCard,{...e},i))}):(0,t.jsx)(d,{...r.ANIMATIONS.SimpleFadeIn,children:(0,t.jsx)(f,{gradient:!1,pauseOnClick:!0,play:!a,speed:30,children:e.map((e,i)=>(0,t.jsx)(c,{children:(0,t.jsx)(l.CustomerQuoteCard,{...e})},i))})})});e.s(["CustomerQuotesScrollingTout",0,m])},273454,e=>{"use strict";var t=e.i(997053),i=e.i(258591);let n=(0,t.default)(i.Heading).withConfig({displayName:"GradientHeader",componentId:"sc-aa6c34e2-0"})`
  margin-inline: -6px;
  padding-inline: 6px;
  padding-bottom: 6px;
  margin-bottom: -6px;

  && {
    text-align: ${({$alignText:e})=>e||"center"};
    background-color: ${({theme:e})=>e.fontColor.LOUD};

    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;

    ${({$twoStop:e,theme:t})=>e?t.gradientText.TWOSTOP:t.gradientText.DEFAULT}

    span {
      display: block;

      &[data-style='italic'] {
        font-family: 'PP Editorial New', sans-serif;
        font-weight: 200;
        font-style: italic;
        line-height: inherit;
        font-size: 1.3em;
      }
    }

    @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
      span {
        display: inline;
      }
    }
  }
`;e.s(["GradientHeader",0,n])},258591,e=>{"use strict";var t=e.i(843476),i=e.i(271645),n=e.i(997053);let a=n.css`
  font-family: ${({theme:e})=>e.fontFamily.DISPLAY};
  color: ${({theme:e})=>e.fontColor.LOUD};
  font-weight: ${({theme:e})=>e.fontWeight.h0};
  line-height: ${({theme:e})=>e.lineHeight.h};
  letter-spacing: ${({theme:e})=>e.letterSpacing.h0};
  font-size: ${({theme:e})=>e.fontSize.h0};
`,o=n.css`
  font-family: ${({theme:e})=>e.fontFamily.DISPLAY};
  color: ${({theme:e})=>e.fontColor.LOUD};
  font-weight: ${({theme:e})=>e.fontWeight.h1};
  line-height: ${({theme:e})=>e.lineHeight.h};
  letter-spacing: ${({theme:e})=>e.letterSpacing.h1};
  font-size: ${({theme:e})=>e.fontSize.h1};
`,r=n.css`
  font-family: ${({theme:e})=>e.fontFamily.HEADING};
  color: ${({theme:e})=>e.fontColor.LOUD};
  font-weight: ${({theme:e})=>e.fontWeight.h2};
  line-height: ${({theme:e})=>e.lineHeight.h};
  letter-spacing: ${({theme:e})=>e.letterSpacing.h2};
  font-size: ${({theme:e})=>e.fontSize.h2};
`,s=n.css`
  font-family: ${({theme:e})=>e.fontFamily.HEADING};
  color: ${({theme:e})=>e.fontColor.LOUD};
  font-weight: ${({theme:e})=>e.fontWeight.h3};
  line-height: ${({theme:e})=>e.lineHeight.h};
  letter-spacing: ${({theme:e})=>e.letterSpacing.h3};
  font-size: ${({theme:e})=>e.fontSize.h3};
`,l=n.css`
  font-family: ${({theme:e})=>e.fontFamily.HEADING};
  color: ${({theme:e})=>e.fontColor.LOUD};
  font-weight: ${({theme:e})=>e.fontWeight.h4};
  line-height: ${({theme:e})=>e.lineHeight.h};
  letter-spacing: ${({theme:e})=>e.letterSpacing.h4};
  font-size: ${({theme:e})=>e.fontSize.h4};
`,d=n.css`
  font-family: ${({theme:e})=>e.fontFamily.SANS};
  color: ${({theme:e})=>e.fontColor.MUTED};
  text-transform: uppercase;
  font-weight: ${({theme:e})=>e.fontWeight.h5};
  line-height: ${({theme:e})=>e.lineHeight.h5};
  letter-spacing: ${({theme:e})=>e.letterSpacing.h5};
  font-size: ${({theme:e})=>e.fontSize.h5};
`,c=n.css`
  color: ${({theme:e})=>e.fontColor.MUTED};
  font-family: ${({theme:e})=>e.fontFamily.MONO};
  font-weight: ${({theme:e})=>e.fontWeight.h6};
  line-height: ${({theme:e})=>e.lineHeight.h6};
  letter-spacing: ${({theme:e})=>e.letterSpacing.h6};
  font-size: ${({theme:e})=>e.fontSize.h6};
  text-transform: uppercase;
`,f=n.default.h1.withConfig({displayName:"Heading__HeadingInternal",componentId:"sc-b33f802a-0"})`
  margin: 0;
  ${({$styleVariant:e})=>(function(e){switch(e){case"h0":return a;case"h1":default:return o;case"h2":return r;case"h3":return s;case"h4":return l;case"h5":return d;case"h6":return c}})(e)}
`;var m=(0,n.default)(f).withConfig({displayName:"Heading___StyledHeadingInternal",componentId:"sc-b33f802a-1"})`${e=>e.$_css}`;let u=i.forwardRef(function({children:e,css:i,id:n,renderAs:a,styleAs:o,...r},s){let l=o??a;return(0,t.jsx)(m,{ref:s,$styleVariant:l,as:"h0"===a?"h1":a,id:n,...r,$_css:i,children:e})});e.s(["Heading",0,u,"HeadingFiveStyles",0,d,"HeadingFourStyles",0,l,"HeadingOneStyles",0,o,"HeadingSixStyles",0,c,"HeadingThreeStyles",0,s,"HeadingTwoStyles",0,r,"HeadingZeroStyles",0,a])},650617,e=>{"use strict";var t=e.i(843476),i=e.i(271645),n=e.i(997053);let a=n.css`
  font-size: ${({theme:e})=>e.fontSize.SMALL};
  line-height: ${({theme:e})=>e.lineHeight.body.s};
  font-weight: ${({theme:e})=>e.fontWeight.NORMAL};
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`,o=n.css`
  font-size: ${({theme:e})=>e.fontSize.DEFAULT};
  line-height: ${({theme:e})=>e.lineHeight.body.base};
  font-weight: ${({theme:e})=>e.fontWeight.LIGHT};
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`,r=n.css`
  font-size: ${({theme:e})=>e.fontSize.MEDIUM};
  line-height: ${({theme:e})=>e.lineHeight.body.m};
  font-weight: ${({theme:e})=>e.fontWeight.LIGHT};
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`,s=n.css`
  font-size: ${({theme:e})=>e.fontSize.LARGE};
  line-height: ${({theme:e})=>e.lineHeight.body.l};
  font-weight: ${({theme:e})=>e.fontWeight.LIGHT};
  margin-bottom: 25px;

  &:last-child {
    margin-bottom: 0;
  }
`,l=n.css`
  font-size: ${({theme:e})=>e.fontSize.EXTRA_LARGE};
  line-height: ${({theme:e})=>e.lineHeight.body.xl};
  font-weight: ${({theme:e})=>e.fontWeight.LIGHT};
  margin-bottom: 25px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MOBILE}) {
    font-size: ${({theme:e})=>e.fontSize.LARGE};
    line-height: ${({theme:e})=>e.lineHeight.body.l};
  }
`,d=n.default.p.withConfig({displayName:"Text__TextWrapper",componentId:"sc-f5e7deee-0"})`
  margin: 0;

  ${({$size:e})=>{switch(e){case"small":return a;case"default":default:return o;case"medium":return r;case"large":return s;case"extra-large":return l}}}

  ${({$color:e})=>{switch(e){case"loud":return n.css`
          color: ${({theme:e})=>e.fontColor.LOUD};
        `;case"muted":return n.css`
          color: ${({theme:e})=>e.fontColor.MUTED};
        `;default:return n.css`
          color: ${({theme:e})=>e.fontColor.DEFAULT};
        `}}}
`;var c=(0,n.default)(d).withConfig({displayName:"Text___StyledTextWrapper",componentId:"sc-f5e7deee-1"})`${e=>e.$_css}`;let f=i.forwardRef(function({children:e,color:i,css:n,className:a,size:o,...r},s){return(0,t.jsx)(c,{ref:s,$color:i,$size:o,className:a,...r,$_css:n,children:e})});e.s(["DefaultTextStyles",0,o,"ExtraLargeTextStyles",0,l,"LargeTextStyles",0,s,"MediumTextStyles",0,r,"SmallTextStyles",0,a,"Text",0,f])},613938,e=>{"use strict";var t=e.i(843476),i=e.i(271645),n=e.i(846932),a=e.i(997053),o=e.i(991709),r=e.i(739876),s=e.i(581444);let l=(0,a.default)(s.LayoutSubgrid).withConfig({displayName:"BasicPageRow__Wrapper",componentId:"sc-811624ad-0"})`
  overflow-x: clip;

  ${({$topBorder:e})=>e&&a.css`
      border-top: 1px solid ${({theme:e})=>(0,r.gridColorSelector)(e,"major")};
    `}
`,d=a.css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: ${({theme:e})=>e.maxWidth.PAGE};
  width: 100%;
  padding: 80px 40px;
  min-width: 0;
  position: relative;
  justify-self: center;

  ${({$fullWidth:e})=>e&&a.css`
      max-width: none;
      padding: 0;
      grid-column: 1 / -1;
    `}

  ${({$fullWidth:e})=>!e&&a.css`
      @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
        padding: 60px 0;
        grid-column: 2 / -2;
      }

      @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
        padding: 40px 0;
      }
    `}
`,c=(0,a.default)(n.motion.div).withConfig({displayName:"BasicPageRow__Inner",componentId:"sc-811624ad-1"})`
  ${d}
`,f=a.default.div.withConfig({displayName:"BasicPageRow__InnerStatic",componentId:"sc-811624ad-2"})`
  ${d}
`,m=(0,a.default)(s.LayoutGridCondensed).withConfig({displayName:"BasicPageRow__StyledLayoutGridCondensed",componentId:"sc-811624ad-3"})`
  position: relative;
`,u=i.memo(function({animateEntrance:e=!0,children:i,fullWidth:n=!1,topBorder:a=!1,className:s,CartesianGridComponent:d}){return(0,t.jsxs)(l,{$topBorder:a,children:[(0,t.jsx)(r.CheckeredMargin,{}),(0,t.jsxs)(m,{className:s,children:[d&&(0,t.jsx)(d,{fadeDirection:"in"}),e?(0,t.jsx)(c,{...o.ANIMATIONS.SimpleFadeIn,$fullWidth:n,children:i}):(0,t.jsx)(f,{$fullWidth:n,children:i})]}),(0,t.jsx)(r.CheckeredMargin,{"data-right":!0})]})});e.s(["BasicPageRow",0,u])},529376,e=>{"use strict";var t=e.i(271645);e.s(["useIsHydrated",0,function(){let[e,i]=(0,t.useReducer)(()=>!0,!1);return(0,t.useEffect)(()=>{i()},[]),e}])},288839,e=>{"use strict";var t=e.i(271645);e.s(["default",0,function(e,i=!1){let n=(0,t.useCallback)(t=>{let i=window.matchMedia(e);function n(e){t(e.matches)}return i.addEventListener("change",n),()=>{i.removeEventListener("change",n)}},[e]),a=(0,t.useCallback)(()=>window.matchMedia(e).matches,[e]),o=(0,t.useCallback)(()=>i,[i]);return(0,t.useSyncExternalStore)(n,a,o)}])},998990,e=>{"use strict";e.s(["CUSTOMER_LOGOS_HOSTED",0,{Algolia:"https://cdn.sanity.io/images/e92memrj/production/643fb40019cd60627bf6f354c5bffdfd66017ce9-97x51.svg",Brex:"https://cdn.sanity.io/images/e92memrj/production/797daac5d8ce0c8f853f32db64dddf44234caf15-110x50.svg",Candidly:"https://cdn.sanity.io/images/e92memrj/production/5fb6f6dd0ff002808f2382c81a66cd28410a4ac9-166x50.svg",Chime:"https://cdn.sanity.io/images/e92memrj/production/20bf8a6fe0ca725b28527c135c22f237938f5ef5-94x50.svg",ClickUp:"https://cdn.sanity.io/images/e92memrj/production/8ec37f2330ffd132be12ea66bad243453af0d047-119x50.svg",CustomerIO:"https://cdn.sanity.io/images/e92memrj/production/fc46557c4677964c57351c9affa635d558fe8cd8-170x40.svg",Doximity:"https://cdn.sanity.io/images/e92memrj/production/17b8982db750bfc51b7aa08783c5e1f8d3432d63-125x50.svg",Figma:"https://cdn.sanity.io/images/e92memrj/production/f7df402cfb3dac549c3f877c09425534abc7650b-97x50.svg",Huckberry:"https://cdn.sanity.io/images/e92memrj/production/8194d2de15059f3f69d4fb8dbc03b2f7bfb04af4-134x50.svg",InfiniteLambda:"https://cdn.sanity.io/images/e92memrj/production/638503884c2ca511d9816fc46d5d13f05551bd26-110x50.svg",Inventa:"https://cdn.sanity.io/images/e92memrj/production/2b33cd7f123f50efbd8ea42ea9235382e207633e-132x50.svg",LangChain:"https://cdn.sanity.io/images/e92memrj/production/0b907ba3d40fe1012f1118d105620c7779a49949-135x50.svg",Lovable:"https://cdn.sanity.io/images/e92memrj/production/d063f2a64adcd7869bc2fc81dbc971825be8b951-137x50.svg",MedScout:"https://cdn.sanity.io/images/e92memrj/production/ab190c6c708ad1b738c3dd93e3c9d64718788935-168x50.svg",Mercor:"https://cdn.sanity.io/images/e92memrj/production/92b9cd2232a417db021ffe38f96d45a896e85cba-131x50.svg",NeoFinancial:"https://cdn.sanity.io/images/e92memrj/production/ba0c09ff2b2ba796246ce69e4e971751bccaae37-76x50.svg",Notion:"https://cdn.sanity.io/images/e92memrj/production/6f211c674b14be69b85497264b1d654b138dce01-39x50.svg",PandaDoc:"https://cdn.sanity.io/images/e92memrj/production/728e1e88c0a31f218d18971d3e9da2de81bad906-120x50.svg",ProductHunt:"https://cdn.sanity.io/images/e92memrj/production/0334d3583cd66c0361cd0c3b1bd28d92307cf01a-126x50.svg",Ramp:"https://cdn.sanity.io/images/e92memrj/production/892932e7f3dc3c66d3ae4a16e8bc51e37b7f59f4-120x50.svg",StubHub:"https://cdn.sanity.io/images/e92memrj/production/84cee8330df6df867d752ef0336d987b73845add-81x50.svg",WeightsAndBiases:"https://cdn.sanity.io/images/e92memrj/production/1eaf4b79b17b9f39d479a6cca9f8b60e06105d44-169x50.svg",Zoe:"https://cdn.sanity.io/images/e92memrj/production/ac4cbae3f4b1d599f5d51d290bd183be0b16253a-114x50.svg"}])},449492,e=>{"use strict";class t{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>e.finished))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=t}attachTimeline(e){let t=this.animations.map(t=>t.attachTimeline(e));return()=>{t.forEach((e,t)=>{e&&e(),this.animations[t].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return i(this.animations,"duration")}get iterationDuration(){return i(this.animations,"iterationDuration")}runAll(e){this.animations.forEach(t=>t[e]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function i(e,t){let i=0;for(let n=0;n<e.length;n++){let a=e[n][t];null!==a&&a>i&&(i=a)}return i}class n extends t{then(e,t){return this.finished.finally(e).then(()=>{})}}var a=e.i(133887),o=e.i(373431),r=e.i(83411),s=e.i(515923),l=e.i(997307),d=e.i(721748),c=e.i(215932),f=e.i(783920),m=e.i(763074),u=e.i(965566),h=e.i(893544);function p(e,t){var i;let n;return(0,h.isEasingArray)(e)?e[i=e.length,((t-0)%(n=i-0)+n)%n+0]:e}var g=e.i(749652);function x(e){return"object"==typeof e&&!Array.isArray(e)}function y(e,t,i,n){return null==e?[]:"string"==typeof e&&x(t)?(0,g.resolveElements)(e,i,n):e instanceof NodeList?Array.from(e):Array.isArray(e)?e.filter(e=>null!=e):[e]}function b(e,t,i,n){return"number"==typeof t?t:t.startsWith("-")||t.startsWith("+")?Math.max(0,e+parseFloat(t)):"<"===t?i:t.startsWith("<")?Math.max(0,i+parseFloat(t.slice(1))):n.get(t)??e}var v=e.i(100706);function w(e,t){return e.at!==t.at?e.at-t.at:null===e.value?1:null===t.value?-1:0}function $(e,t){return t.has(e)||t.set(e,{}),t.get(e)}function C(e,t){return t[e]||(t[e]=[]),t[e]}let S=e=>"number"==typeof e,A=e=>e.every(S);var I=e.i(768705),j=e.i(472094),_=e.i(372323),E=e.i(889026),N=e.i(836331),T=e.i(275737),M=e.i(386783),L=e.i(130162),k=e.i(617218);class H extends k.VisualElement{constructor(){super(...arguments),this.type="object"}readValueFromInstance(e,t){if(t in e){let i=e[t];if("string"==typeof i||"number"==typeof i)return i}}getBaseTargetFromProps(){}removeValueFromRenderState(e,t){delete t.output[e]}measureInstanceViewportBox(){return(0,L.createBox)()}build(e,t){Object.assign(e.output,t)}renderInstance(e,{output:t}){Object.assign(e,t)}sortInstanceNodePosition(){return 0}}function F(e){let t={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},i=(0,E.isSVGElement)(e)&&!(0,N.isSVGSVGElement)(e)?new T.SVGVisualElement(t):new M.HTMLVisualElement(t);i.mount(e),j.visualElementStore.set(e,i)}function O(e){let t=new H({presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}});t.mount(e),j.visualElementStore.set(e,t)}function Q(e,t,i,n){let a=[];if((0,r.isMotionValue)(e)||"number"==typeof e||"string"==typeof e&&!x(t))a.push((0,I.animateSingleValue)(e,x(t)&&t.default||t,i&&i.default||i));else{if(null==e)return a;let o=y(e,t,n),r=o.length;(0,u.invariant)(!!r,"No valid elements provided.","no-valid-elements");for(let e=0;e<r;e++){let n=o[e],s=n instanceof Element?F:O;j.visualElementStore.has(n)||s(n);let l=j.visualElementStore.get(n),d={...i};"delay"in d&&"function"==typeof d.delay&&(d.delay=d.delay(e,r)),a.push(...(0,_.animateTarget)(l,{...t,transition:d},{}))}}return a}function z(e){return function(t,i,h){let g,x=[];if(Array.isArray(t)&&t.some(Array.isArray)){let n;n=[],(function(e,{defaultTransition:t={},...i}={},n,o){let h=t.duration||.3,g=new Map,x=new Map,S={},I=new Map,j=0,_=0,E=0;for(let i=0;i<e.length;i++){let f=e[i];if("string"==typeof f){I.set(f,_);continue}if(!Array.isArray(f)){I.set(f.name,b(_,f.at,j,I));continue}let[g,w,M={}]=f;void 0!==M.at&&(_=b(_,M.at,j,I));let L=0,k=(e,i,n,r=0,f=0)=>{var g;let x=Array.isArray(g=e)?g:[g],{delay:y=0,times:b=(0,s.defaultOffset)(x),type:w=t.type||"keyframes",repeat:$,repeatType:C,repeatDelay:S=0,...I}=i,{ease:j=t.ease||"easeOut",duration:N}=i,T="function"==typeof y?y(r,f):y,M=x.length,k=(0,l.isGenerator)(w)?w:o?.[w||"keyframes"];if(M<=2&&k){let e=100;2===M&&A(x)&&(e=Math.abs(x[1]-x[0]));let i={...t,...I};void 0!==N&&(i.duration=(0,m.secondsToMilliseconds)(N));let n=(0,d.createGeneratorEasing)(i,e,k);j=n.ease,N=n.duration}N??(N=h);let H=_+T;1===b.length&&0===b[0]&&(b[1]=1);let F=b.length-x.length;if(F>0&&(0,c.fillOffset)(b,F),1===x.length&&x.unshift(null),$){(0,u.invariant)($<20,"Repeat count too high, must be less than 20","repeat-count-high"),N*=$+1;let e=[...x],t=[...b],i=[...j=Array.isArray(j)?[...j]:[j]];for(let n=0;n<$;n++){x.push(...e);for(let a=0;a<e.length;a++)b.push(t[a]+(n+1)),j.push(0===a?"linear":p(i,a-1))}for(let e=0;e<b.length;e++)b[e]=b[e]/($+1)}let O=H+N;!function(e,t,i,n,o,r){for(let t=0;t<e.length;t++){let i=e[t];i.at>o&&i.at<r&&((0,a.removeItem)(e,i),t--)}for(let a=0;a<t.length;a++)e.push({value:t[a],at:(0,v.mixNumber)(o,r,n[a]),easing:p(i,a)})}(n,x,j,b,H,O),L=Math.max(T+N,L),E=Math.max(O,E)};if((0,r.isMotionValue)(g))k(w,M,C("default",$(g,x)));else{let e=y(g,w,n,S),t=e.length;for(let i=0;i<t;i++){let n=$(e[i],x);for(let e in w){var N,T;k(w[e],(N=M,T=e,N&&N[T]?{...N,...N[T]}:{...N}),C(e,n),i,t)}}}j=_,_+=L}return x.forEach((e,n)=>{for(let a in e){let o=e[a];o.sort(w);let r=[],s=[],l=[];for(let e=0;e<o.length;e++){let{at:t,value:i,easing:n}=o[e];r.push(i),s.push((0,f.progress)(0,E,t)),l.push(n||"easeOut")}0!==s[0]&&(s.unshift(0),r.unshift(r[0]),l.unshift("easeInOut")),1!==s[s.length-1]&&(s.push(1),r.push(null)),g.has(n)||g.set(n,{keyframes:{},transition:{}});let d=g.get(n);d.keyframes[a]=r;let{type:c,...m}=t;d.transition[a]={...m,duration:E,ease:l,times:s,...i}}}),g})(t,i,e,{spring:o.spring}).forEach(({keyframes:e,transition:t},i)=>{n.push(...Q(i,e,t))}),x=n}else{let{onComplete:n,...a}=h||{};"function"==typeof n&&(g=n),x=Q(t,i,a,e)}let S=new n(x);return g&&S.finished.then(g),e&&(e.animations.push(S),S.finished.then(()=>{(0,a.removeItem)(e.animations,S)})),S}}let D=z();e.s(["animate",0,D,"createScopedAnimate",0,z],449492)},689573,e=>{"use strict";var t=e.i(947414),i=e.i(271645),n=e.i(449492);e.s(["useAnimate",0,function(){var e;let a=(0,t.useConstant)(()=>({current:null,animations:[]})),o=(0,t.useConstant)(()=>(0,n.createScopedAnimate)(a));return e=()=>{a.animations.forEach(e=>e.stop()),a.animations.length=0},(0,i.useEffect)(()=>()=>e(),[]),[a,o]}],689573)},676662,e=>{"use strict";var t=e.i(287022),i=e.i(271645),n=e.i(737806);e.s(["useAnimationFrame",0,function(e){let a=(0,i.useRef)(0),{isStatic:o}=(0,i.useContext)(n.MotionConfigContext);(0,i.useEffect)(()=>{if(o)return;let i=({timestamp:t,delta:i})=>{a.current||(a.current=t),e(t-a.current,i)};return t.frame.update(i,!0),()=>(0,t.cancelFrame)(i)},[e])}])},922998,(e,t,i)=>{Object.defineProperty(i,"__esModule",{value:!0});var n=e.r(271645),a=n&&"object"==typeof n&&"default"in n?n:{default:n};!function(e){if(!e||"u"<typeof window)return;let t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t)}('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}'),i.default=n.forwardRef(function({style:e={},className:t="",autoFill:i=!1,play:o=!0,pauseOnHover:r=!1,pauseOnClick:s=!1,direction:l="left",speed:d=50,delay:c=0,loop:f=0,gradient:m=!1,gradientColor:u="white",gradientWidth:h=200,onFinish:p,onCycleComplete:g,onMount:x,children:y},b){let[v,w]=n.useState(0),[$,C]=n.useState(0),[S,A]=n.useState(1),[I,j]=n.useState(!1),_=n.useRef(null),E=b||_,N=n.useRef(null),T=n.useCallback(()=>{if(N.current&&E.current){let e=E.current.getBoundingClientRect(),t=N.current.getBoundingClientRect(),n=e.width,a=t.width;("up"===l||"down"===l)&&(n=e.height,a=t.height),i&&n&&a?A(a<n?Math.ceil(n/a):1):A(1),w(n),C(a)}},[i,E,l]);n.useEffect(()=>{if(I&&(T(),N.current&&E.current)){let e=new ResizeObserver(()=>T());return e.observe(E.current),e.observe(N.current),()=>{e&&e.disconnect()}}},[T,E,I]),n.useEffect(()=>{T()},[T,y]),n.useEffect(()=>{j(!0)},[]),n.useEffect(()=>{"function"==typeof x&&x()},[]);let M=n.useMemo(()=>i?$*S/d:$<v?v/d:$/d,[i,v,$,S,d]),L=n.useMemo(()=>Object.assign(Object.assign({},e),{"--pause-on-hover":!o||r?"paused":"running","--pause-on-click":!o||r&&!s||s?"paused":"running","--width":"up"===l||"down"===l?"100vh":"100%","--transform":"up"===l?"rotate(-90deg)":"down"===l?"rotate(90deg)":"none"}),[e,o,r,s,l]),k=n.useMemo(()=>({"--gradient-color":u,"--gradient-width":"number"==typeof h?`${h}px`:h}),[u,h]),H=n.useMemo(()=>({"--play":o?"running":"paused","--direction":"left"===l?"normal":"reverse","--duration":`${M}s`,"--delay":`${c}s`,"--iteration-count":f?`${f}`:"infinite","--min-width":i?"auto":"100%"}),[o,l,M,c,f,i]),F=n.useMemo(()=>({"--transform":"up"===l?"rotate(90deg)":"down"===l?"rotate(-90deg)":"none"}),[l]),O=n.useCallback(e=>[...Array(Number.isFinite(e)&&e>=0?e:0)].map((e,t)=>a.default.createElement(n.Fragment,{key:t},n.Children.map(y,e=>a.default.createElement("div",{style:F,className:"rfm-child"},e)))),[F,y]);return I?a.default.createElement("div",{ref:E,style:L,className:"rfm-marquee-container "+t},m&&a.default.createElement("div",{style:k,className:"rfm-overlay"}),a.default.createElement("div",{className:"rfm-marquee",style:H,onAnimationIteration:g,onAnimationEnd:p},a.default.createElement("div",{className:"rfm-initial-child-container",ref:N},n.Children.map(y,e=>a.default.createElement("div",{style:F,className:"rfm-child"},e))),O(S-1)),a.default.createElement("div",{className:"rfm-marquee",style:H},O(S))):null})}]);