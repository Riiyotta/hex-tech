(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,909541,e=>{e.v({answerParagraph:"FAQ-module__E5gmgG__answerParagraph",questionHeading:"FAQ-module__E5gmgG__questionHeading"})},558202,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(846932),a=e.i(997053),n=e.i(258591),r=e.i(650617),d=e.i(430388),s=e.i(637804),l=e.i(991709),c=e.i(665419),p=e.i(909541);let m=i.memo(({footer:e,footerLinkTrackingLabel:i,heading:o="FAQ",items:a,noBkg:n=!1,noPadding:r=!1,questionHeadingLevel:d="h3",showFooter:p=!0,showHeader:m=!0,fullWidth:u=!1})=>(0,t.jsxs)(h,{...l.ANIMATIONS.SimpleFadeIn,$noBkg:n,$noPadding:r,id:"faq",children:[(0,t.jsx)("noscript",{children:(0,t.jsx)("style",{children:`.${h.styledComponentId} .${C.styledComponentId} { display: flex !important; }`})}),(0,t.jsxs)(x,{$fullWidth:u,children:[m&&(0,t.jsx)(b,{children:(0,t.jsx)($,{renderAs:"h2",children:o})}),(0,t.jsx)(w,{children:a.map((e,i)=>(0,t.jsx)(f,{answer:e.answer,id:e.id,question:e.question,questionHeadingLevel:d},e.id??i))}),p&&(0,t.jsx)(g,{size:"medium",children:e??(0,t.jsxs)(t.Fragment,{children:["Can't find your answer here?"," ",(0,t.jsx)(s.SiteLink,{href:c.INTERNAL_LINKS.RequestADemo,trackingLabel:i,children:"Get in touch"}),"."]})})]})]}));m.displayName="FAQ";let u=(0,a.default)(d.ChevronDown).withConfig({displayName:"FAQ__ChevronIcon",componentId:"sc-c91ba0f9-0"})`
  transform: rotate(${({$isOpen:e})=>e?"0deg":"-90deg"});
`,f=i.memo(({question:e,answer:o,id:a,questionHeadingLevel:n})=>{let[r,d]=(0,i.useState)(!1),s=(0,i.useId)(),l=a??s,c=`${l}-question`,m=`${l}-answer`;return(0,i.useEffect)(()=>{let e=()=>{a&&window.location.hash===`#${a}`?setTimeout(()=>{d(!0)},50):window.location.hash&&window.location.hash.startsWith("#faq-")&&d(!1)};return e(),window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[a]),(0,t.jsxs)(y,{"data-name":"faq-item",id:a,children:[(0,t.jsx)(n,{className:p.default.questionHeading,children:(0,t.jsxs)(I,{$isOpen:r,"aria-controls":m,"aria-expanded":r,id:c,type:"button",onClick:()=>{let e=!r;d(e),e&&a?window.history.replaceState(null,"",`#${a}`):e||window.location.hash!==`#${a}`||window.history.replaceState(null,"",window.location.pathname+window.location.search)},children:[(0,t.jsx)(v,{children:e}),(0,t.jsx)("span",{"aria-hidden":!0,children:(0,t.jsx)(u,{$isOpen:r})})]})}),(0,t.jsx)(C,{$isOpen:r,"aria-labelledby":c,id:m,role:"region",children:"string"==typeof o?(0,t.jsx)("p",{className:p.default.answerParagraph,children:o}):o})]})});f.displayName="FAQItem";let h=(0,a.default)(o.motion.div).withConfig({displayName:"FAQ__Wrapper",componentId:"sc-c91ba0f9-1"})`
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
`,b=a.default.div.withConfig({displayName:"FAQ__Top",componentId:"sc-c91ba0f9-4"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
`,w=a.default.div.withConfig({displayName:"FAQ__List",componentId:"sc-c91ba0f9-5"})`
  display: flex;
  flex-direction: column;
`,y=a.default.div.withConfig({displayName:"FAQ__Item",componentId:"sc-c91ba0f9-6"})`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
  transition: background-color
    ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`};
  scroll-margin-top: 240px;

  &:hover {
    background: ${({theme:e})=>e.borderColor.MUTED};
  }
`,I=a.default.button.withConfig({displayName:"FAQ__ItemTop",componentId:"sc-c91ba0f9-7"})`
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
`,v=a.default.span.withConfig({displayName:"FAQ__Question",componentId:"sc-c91ba0f9-8"})`
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
`;var $=(0,a.default)(n.Heading).withConfig({displayName:"FAQ___StyledHeading",componentId:"sc-c91ba0f9-10"})`
                  margin: 15px 0px;
                `;e.s(["FAQ",0,m,"FAQ_ID",0,"faq"])},194547,e=>{"use strict";var t=e.i(997053),i=e.i(739876);let o=t.default.div.withConfig({displayName:"InteractiveFeatureWrapper.styles__WindowTitle",componentId:"sc-b5f0eae9-0"})`
  position: absolute;
  bottom: 100%;
  font-size: 11px;
  line-height: 28px;
  padding: 0 12px;
  opacity: 0.9;
  border-left: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
  border-right: 1px dashed ${({theme:e})=>e.borderColor.DEFAULT};
  border-top: 1px dashed ${({theme:e})=>e.borderColor.DEFAULT};
  color: ${({theme:e})=>e.fontColor.DEFAULT};
  backdrop-filter: blur(15px);
  mask-image: linear-gradient(to bottom, black 0%, black 90%, transparent 100%);
  transition:
    transform 0.2s ease-in-out,
    opacity 0.2s ease-in-out,
    border-color 0.2s ease-in-out,
    color 0.2s ease-in-out;

  ${({$canClick:e})=>e&&t.css`
      cursor: pointer;
    `}

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: ${({theme:e})=>(0,i.backgroundImageHatched)(e)};
    opacity: 0.3;
  }

  span {
    position: relative;
    z-index: 1;
  }

  ${({$position:e})=>"left"===e?t.css`
          left: 12px;
        `:t.css`
          right: 12px;
        `}
`,a=t.default.div.withConfig({displayName:"InteractiveFeatureWrapper.styles__DashedLines",componentId:"sc-b5f0eae9-1"})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`,n=t.default.div.withConfig({displayName:"InteractiveFeatureWrapper.styles__DashedLine",componentId:"sc-b5f0eae9-2"})`
  position: absolute;

  &[data-top] {
    top: -1px;
    left: -200px;
    right: -200px;
    height: 0;
    border-top: 1px dashed ${({theme:e})=>e.borderColor.DEFAULT};
  }

  &[data-bottom] {
    bottom: -1px;
    left: -200px;
    right: -200px;
    height: 0;
    border-bottom: 1px dashed ${({theme:e})=>e.borderColor.DEFAULT};
  }

  &[data-left] {
    top: -50px;
    left: -1px;
    bottom: -50px;
    width: 0;
    border-left: 1px dashed ${({theme:e})=>e.borderColor.DEFAULT};
  }

  &[data-right] {
    top: -50px;
    right: -1px;
    bottom: -50px;
    width: 0;
    border-right: 1px dashed ${({theme:e})=>e.borderColor.DEFAULT};
  }
`,r=t.default.div.withConfig({displayName:"InteractiveFeatureWrapper.styles__Wrapper",componentId:"sc-b5f0eae9-3"})`
  display: flex;
  flex-direction: column;
  position: relative;
  font-family: ${({theme:e})=>e.appUI.fontFamily.DEFAULT};
  font-size: ${({theme:e})=>e.appUI.fontSize.DEFAULT};
  line-height: 1.3;
  color: ${({theme:e})=>e.appUI.fontColor.DEFAULT};
  border-radius: 6px;
  background-color: ${({theme:e})=>e.appUI.backgroundColor.DEFAULT};
  max-width: 1000px;
  max-height: 1000px;
  width: 100%;
  height: 100%;
  box-shadow: ${({$shadowStyle:e,theme:t})=>"default"===e?t.appUI.windowShadow.DEFAULT:t.appUI.windowShadow.LIGHT};
  transition:
    box-shadow 0.2s ease-in-out,
    transform 0.2s ease-in-out;

  /* Hide native cursor - we show custom 8-bit cursor instead */
  &:hover {
    cursor: none;

    * {
      cursor: none !important;
    }
  }

  &:hover {
    box-shadow: ${({$shadowStyle:e,theme:t})=>"default"===e?t.appUI.windowShadow.HOVER:t.appUI.windowShadow.LIGHT_HOVER};

    ${o} {
      opacity: 1;
      transform: translateY(-2px);
      color: ${({theme:e})=>e.fontColor.LOUD};
      border-color: ${({theme:e})=>e.borderColor.STRONG};
    }
  }

  /* Disable pointer events to avoid scrolling issues on mobile */
  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    pointer-events: none;
  }
`,d=(0,t.default)(r).withConfig({displayName:"InteractiveFeatureWrapper.styles__OuterBrowserWindow",componentId:"sc-b5f0eae9-4"})`
  display: flex;
  flex-direction: column;
  padding: 6px;
  align-items: stretch;
  gap: 7px;
  border-radius: 10px;
  background: ${({theme:e})=>e.appUI.outerBrowserWindow.chromeGradient};
`,s=t.default.div.withConfig({displayName:"InteractiveFeatureWrapper.styles__BrowserWindowToolbar",componentId:"sc-b5f0eae9-5"})`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`,l=t.default.div.withConfig({displayName:"InteractiveFeatureWrapper.styles__BrowserWindowButtons",componentId:"sc-b5f0eae9-6"})`
  display: flex;
  padding: 1px 2px;
  align-items: center;
  gap: 5px;
`,c=t.default.div.withConfig({displayName:"InteractiveFeatureWrapper.styles__TrafficLight",componentId:"sc-b5f0eae9-7"})`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: ${({theme:e})=>e.appUI.outerBrowserWindow.trafficLightButton.border};
  background: ${({theme:e})=>e.appUI.outerBrowserWindow.trafficLightButton.background};
`,p=t.default.div.withConfig({displayName:"InteractiveFeatureWrapper.styles__BrowserWindowTitle",componentId:"sc-b5f0eae9-8"})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 11px;
  opacity: 0.5;
  text-align: center;
  color: ${({theme:e})=>e.fontColor.LOUD};

  svg {
    color: ${({theme:e})=>e.fontColor.LOUD};
  }
`,m=(0,t.default)(r).withConfig({displayName:"InteractiveFeatureWrapper.styles__InnerBrowserWindow",componentId:"sc-b5f0eae9-9"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 0;
  box-shadow:
    0 0 0 1px rgba(49, 38, 59, 0.22),
    0 26px 57px 0 rgba(49, 38, 59, 0.1);

  &:hover {
    box-shadow:
      0 0 0 1px rgba(49, 38, 59, 0.22),
      0 26px 57px 0 rgba(49, 38, 59, 0.1);
  }
`;e.s(["BrowserWindowButtons",0,l,"BrowserWindowTitle",0,p,"BrowserWindowToolbar",0,s,"DashedLine",0,n,"DashedLines",0,a,"InnerBrowserWindow",0,m,"OuterBrowserWindow",0,d,"TrafficLight",0,c,"WindowTitle",0,o,"Wrapper",0,r])},482847,e=>{"use strict";var t=e.i(843476);e.s(["Cursor8BitArrow",0,function({outlineColor:e,shadowColor:i}){let o=[[1,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,0,0,0,0,0,0,0,0,0,0,0],[1,2,1,0,0,0,0,0,0,0,0,0,0],[1,2,2,1,3,0,0,0,0,0,0,0,0],[1,2,2,2,1,3,0,0,0,0,0,0,0],[1,2,2,2,2,1,3,0,0,0,0,0,0],[1,2,2,2,2,2,1,3,0,0,0,0,0],[1,2,2,2,2,2,2,1,3,0,0,0,0],[1,2,2,2,2,2,2,2,1,3,0,0,0],[1,2,2,2,2,2,2,2,2,1,3,0,0],[1,2,2,2,2,2,1,1,1,1,1,3,0],[1,2,2,1,2,2,1,3,3,3,3,3,0],[1,2,1,3,1,2,2,1,3,0,0,0,0],[1,1,3,0,1,2,2,1,3,0,0,0,0],[1,3,0,0,3,1,2,2,1,3,0,0,0],[3,0,0,0,0,1,2,2,1,3,0,0,0],[0,0,0,0,0,3,1,1,3,0,0,0,0],[0,0,0,0,0,0,3,3,0,0,0,0,0]],a=+o[0].length,n=+o.length;return(0,t.jsx)("svg",{height:n,style:{imageRendering:"pixelated"},viewBox:`0 0 ${a} ${n}`,width:a,children:o.map((o,a)=>o.map((o,n)=>{let r;return 0===o?null:(r=1===o?e:2===o?"#FFFFFF":i,(0,t.jsx)("rect",{fill:r,height:1,width:1,x:+n,y:+a},`${n}-${a}`))}))})},"Cursor8BitPointer",0,function({outlineColor:e,shadowColor:i}){let o=[[0,0,0,0,0,1,1,0,0,0,0,0,0,0],[0,0,0,0,1,2,2,1,3,0,0,0,0,0],[0,0,0,0,1,2,2,1,3,0,0,0,0,0],[0,0,0,0,1,2,2,1,3,0,0,0,0,0],[0,0,0,0,1,2,2,1,1,1,0,0,0,0],[0,0,0,0,1,2,2,1,2,2,1,3,0,0],[0,1,1,0,1,2,2,1,2,2,1,1,3,0],[1,2,2,1,1,2,2,1,2,2,1,2,1,3],[1,2,2,2,1,2,2,2,2,2,2,2,1,3],[3,1,2,2,2,2,2,2,2,2,2,2,1,3],[0,3,1,2,2,2,2,2,2,2,2,2,1,3],[0,0,1,2,2,2,2,2,2,2,2,1,3,0],[0,0,3,1,2,2,2,2,2,2,2,1,3,0],[0,0,0,1,2,2,2,2,2,2,1,3,0,0],[0,0,0,3,1,2,2,2,2,2,1,3,0,0],[0,0,0,0,1,2,2,2,2,1,3,0,0,0],[0,0,0,0,3,1,1,1,1,3,0,0,0,0],[0,0,0,0,0,3,3,3,3,0,0,0,0,0]],a=+o[0].length,n=+o.length;return(0,t.jsx)("svg",{height:n,style:{imageRendering:"pixelated"},viewBox:`0 0 ${a} ${n}`,width:a,children:o.map((o,a)=>o.map((o,n)=>{let r;return 0===o?null:(r=1===o?e:2===o?"#FFFFFF":i,(0,t.jsx)("rect",{fill:r,height:1,width:1,x:+n,y:+a},`${n}-${a}`))}))})},"UnlockProgressIndicator",0,function({filledColor:e,unfilledColor:i,progress:o}){let a=Math.floor(10*o);return(0,t.jsxs)("svg",{height:20,style:{position:"absolute",left:14,top:2},viewBox:"0 0 50 20",width:50,children:[(0,t.jsx)("rect",{fill:i,height:20,rx:1,width:6,x:0,y:0}),a>0&&(0,t.jsx)("rect",{fill:e,height:2*a,rx:1,width:6,x:0,y:(10-a)*2}),(0,t.jsx)("text",{fill:e,fontFamily:"system-ui, sans-serif",fontSize:7,fontWeight:600,x:10,y:9,children:"ENABLE"}),(0,t.jsx)("text",{fill:e,fontFamily:"system-ui, sans-serif",fontSize:7,fontWeight:600,x:10,y:17,children:"SCROLL"})]})}])},238108,e=>{"use strict";var t=e.i(843476),i=e.i(193594),o=e.i(997053);let a=o.styled.div.withConfig({displayName:"HexButton__Wrapper",componentId:"sc-2bf5efa3-0"})`
  flex: none;
  display: inline-flex;
  align-items: center;
  border-radius: ${({theme:e})=>e.appUI.borderRadius};
  font-size: ${({theme:e})=>e.appUI.fontSize.DEFAULT};
  gap: 4px;
  justify-content: center;
  padding: 0 8px;
  height: 24px;
  line-height: 15px;
  border: 1px solid ${({theme:e})=>e.appUI.borderColor.MUTED};
  font-family: ${({theme:e})=>e.appUI.fontFamily.DEFAULT};
  color: ${({theme:e})=>e.appUI.fontColor.DEFAULT};
  cursor: pointer;
  transition:
    border-color
      ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`},
    background-color
      ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`};

  [data-icon] {
    color: ${({theme:e})=>e.appUI.fontColor.MUTED};
  }

  ${({$variant:e})=>"default"===e&&o.css`
      &:hover {
        border: 1px solid ${({theme:e})=>e.appUI.borderColor.DEFAULT};
      }
    `}

  ${({$variant:e})=>"minimal"===e&&o.css`
      border: none;
      color: ${({theme:e})=>e.appUI.fontColor.MUTED};

      &:hover {
        background-color: ${({theme:e})=>e.appUI.backgroundColor.MUTED};
      }
    `}

  ${({$active:e})=>e&&o.css`
      background-color: ${({theme:e})=>(0,i.rgba)(e.appUI.intent.PRIMARY,.07)};
      color: ${({theme:e})=>e.appUI.intent.PRIMARY};

      [data-icon] {
        color: ${({theme:e})=>e.appUI.intent.PRIMARY};
      }
    `}

  ${({$iconOnly:e})=>e&&o.css`
      padding: 0;
      width: 24px;
    `}
`;e.s(["HexButton",0,({onClick:e,icon:i,iconPos:o="left",text:n,variant:r="default",active:d=!1,className:s})=>(0,t.jsxs)(a,{$active:d,$iconOnly:!n&&void 0!==i,$variant:r,className:s,onClick:e,children:[i&&"left"===o&&i,n&&(0,t.jsx)("span",{children:n}),i&&"right"===o&&i]})])},674216,e=>{"use strict";var t=e.i(843476),i=e.i(997053),o=e.i(739876),a=e.i(581444),n=e.i(360571),r=e.i(998990);let d=(0,i.default)(a.LayoutSubgrid).withConfig({displayName:"CustomerStoriesTwoUp__Section",componentId:"sc-3a58b311-0"})`
  position: relative;
  background-color: ${({theme:e})=>e.palette.bg300};
  border-top: 1px solid ${({theme:e})=>(0,o.gridColorSelector)(e,"major")};

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background-image: ${({theme:e})=>e.paperTextureCssVars.img};
    background-size: ${({theme:e})=>e.paperTextureCssVars.size};
    mix-blend-mode: ${({theme:e})=>e.paperTextureCssVars.mixBlendMode};
    opacity: ${({theme:e})=>e.paperTextureCssVars.opacity};
    pointer-events: none;
  }
`,s=(0,i.default)(a.LayoutSubgrid).withConfig({displayName:"CustomerStoriesTwoUp__CustomerStoriesGrid",componentId:"sc-3a58b311-1"})`
  display: grid;
  grid-template-columns: repeat(2, 1fr) !important;

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    grid-template-columns: 1fr !important;
  }
`,l=i.default.div.withConfig({displayName:"CustomerStoriesTwoUp__CustomerStory",componentId:"sc-3a58b311-2"})`
  grid-column: auto !important;
  display: flex;
  flex-direction: column;
  padding: 12px 0;

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    &:not(:last-child) {
      border-bottom: 1px solid
        ${({theme:e})=>(0,o.gridColorSelector)(e,"major")};
    }
  }
`,c=i.default.div.withConfig({displayName:"CustomerStoriesTwoUp__QuoteWrapper",componentId:"sc-3a58b311-3"})`
  padding: 24px ${(0,n.generateFluidPxScale)(12,32)} 40px
    ${(0,n.generateFluidPxScale)(12,32)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  place-content: center;
  flex-grow: 1;
`,p=i.default.q.withConfig({displayName:"CustomerStoriesTwoUp__Quote",componentId:"sc-3a58b311-4"})`
  text-align: center;
  max-width: 36rem;
  text-wrap: balance;
  margin-top: 12px;
`,m=i.default.em.withConfig({displayName:"CustomerStoriesTwoUp__Em",componentId:"sc-3a58b311-5"})`
  font-weight: ${({theme:e})=>e.fontWeight.BOLD};
  color: ${({theme:e})=>e.fontColor.LOUD};
`,u=i.default.div.withConfig({displayName:"CustomerStoriesTwoUp__Attribution",componentId:"sc-3a58b311-6"})`
  display: flex;
  justify-content: center;
  padding: 0 32px;
`,f=i.default.div.withConfig({displayName:"CustomerStoriesTwoUp__Author",componentId:"sc-3a58b311-7"})`
  display: flex;
  align-items: center;
  gap: 12px;
`,h=i.default.div.withConfig({displayName:"CustomerStoriesTwoUp__Info",componentId:"sc-3a58b311-8"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;

  p {
    margin: 0;
    text-align: center;
  }

  p:first-child {
    color: ${({theme:e})=>e.fontColor.LOUD};
  }

  p:last-child {
    color: ${({theme:e})=>e.fontColor.MUTED};
  }
`,g=i.default.img.withConfig({displayName:"CustomerStoriesTwoUp__Logo",componentId:"sc-3a58b311-9"})`
  margin: 0 auto 0 auto;
  height: 52px;
  ${({theme:e})=>e.customerLogoColor??"filter: brightness(0) invert(1);"};
`,x=(0,i.default)(o.GridRule).withConfig({displayName:"CustomerStoriesTwoUp__StyledGridRule",componentId:"sc-3a58b311-10"})`
  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    display: none;
  }
`;e.s(["Attribution",0,u,"Author",0,f,"CustomerStoriesGrid",0,s,"CustomerStoriesTwoUp",0,function(){return(0,t.jsxs)(d,{children:[(0,t.jsx)(a.LayoutSubgrid,{"data-content-grid":!0,"data-pile":!0,children:(0,t.jsx)(x,{$column:6})}),(0,t.jsxs)(s,{"data-content-grid":!0,"data-pile":!0,children:[(0,t.jsx)(l,{children:(0,t.jsxs)(c,{children:[(0,t.jsx)(g,{src:r.CUSTOMER_LOGOS_HOSTED.Mercor}),(0,t.jsxs)(p,{className:"text-l",children:['"If we didn’t have Hex,'," ",(0,t.jsx)(m,{children:"we might’ve left more than $100M on the table."}),' That might even be an underestimate."']}),(0,t.jsx)(u,{children:(0,t.jsx)(f,{children:(0,t.jsxs)(h,{children:[(0,t.jsx)("p",{className:"text-base",children:"Dhaval P."}),(0,t.jsx)("p",{className:"annotation",children:"Account Lead"})]})})})]})}),(0,t.jsx)(l,{children:(0,t.jsxs)(c,{children:[(0,t.jsx)(g,{src:r.CUSTOMER_LOGOS_HOSTED.Algolia}),(0,t.jsxs)(p,{className:"text-l",children:['"AI can do almost everything for you in Hex. I use it to scaffold entire apps and help me debug SQL queries.'," ",(0,t.jsx)(m,{children:"It makes me 10x faster."}),'"']}),(0,t.jsx)(u,{children:(0,t.jsx)(f,{children:(0,t.jsxs)(h,{children:[(0,t.jsx)("p",{className:"text-base",children:"Tom C."}),(0,t.jsx)("p",{className:"annotation",children:"Principal Engineer"})]})})})]})})]})]})},"CustomerStory",0,l,"Em",0,m,"Info",0,h,"Logo",0,g,"Quote",0,p,"QuoteWrapper",0,c,"Section",0,d,"StyledGridRule",0,x])},168087,306213,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(174080),a=e.i(88653),n=e.i(846932),r=e.i(997053),d=e.i(706736),s=e.i(529376),l=e.i(430388),c=e.i(991709),p=e.i(850034);let m=(0,r.default)(n.motion.div).withConfig({displayName:"DemoVideo__ButtonWrapper",componentId:"sc-ccf86814-0"})`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,u=r.default.div.withConfig({displayName:"DemoVideo__FloatyDarkButton",componentId:"sc-ccf86814-1"})`
  --radius: 60px;

  position: relative;
  cursor: pointer;
  z-index: 2;
  border-radius: var(--radius);
  overflow: hidden;
  height: 50px;
  display: flex;
  align-items: center;
  font-size: ${({theme:e})=>e.fontSize.MEDIUM};
  padding: 0 calc(0.5 * var(--radius) - 0.5 * 15px);
  gap: 8px;
  color: #fff;
  background-color: var(--fg100);
  border: 1px dashed var(--fg1100);
  box-shadow:
    0 8px 7px -2px rgba(0 0 0 / 0.36),
    0px 14px 20px -10px rgba(0 0 0 / 0.24),
    0px 24px 36px -12px rgba(0 0 0 / 0.13);
  backdrop-filter: blur(10px);
  transition: filter
    ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`};

  &::before {
    content: '';
    border-radius: inherit;
    position: absolute;
    inset: 0;
    background-image: url('/images/bkg-noise.webp');
    background-size: 200px 200px;
    opacity: 0.08;
    pointer-events: none;
  }

  &:hover {
    filter: brightness(1.2);
  }
`,f=r.default.span.withConfig({displayName:"DemoVideo__DemoTime",componentId:"sc-ccf86814-2"})`
  opacity: 0.5;
`,h=(0,r.default)(n.motion.div).withConfig({displayName:"DemoVideo__VideoOverlay",componentId:"sc-ccf86814-3"})`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 99999999999;
  padding: 20px;

  iframe {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    outline: none;
    z-index: 1;
    position: relative;
  }

  .bkg {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    inset: 0;
  }
`,g=(0,r.default)(d.Button).withConfig({displayName:"DemoVideo__CloseButton",componentId:"sc-ccf86814-4"})`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    position: absolute;
    z-index: 2;
    top: 10px;
    right: 10px;
    background-color: #000;
    border-left: 1px solid var(--highlightColor);
    border-bottom: 1px solid var(--highlightColor);
    cursor: pointer;
  }
`;e.s(["DemoVideo",0,function({src:e,duration:n}){let[r,d]=(0,i.useState)(!1),x=(0,s.useIsHydrated)(),b=(0,i.useCallback)(()=>{d(!0)},[]),w=(0,i.useCallback)(()=>{d(!1)},[]),y={...c.REVEAL_MARKER,initial:{opacity:0},transition:{...c.DEFAULT_TRANSITION,delay:.2},viewport:{once:!0},whileInView:{opacity:1}};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m,{...y,onClick:b,children:(0,t.jsxs)(u,{"data-theme":"dark",children:[(0,t.jsx)(l.PlayIcon,{}),"Watch demo",(0,t.jsx)(f,{children:n||"2 min"})]})}),x&&(0,o.createPortal)((0,t.jsx)(a.AnimatePresence,{children:r&&(0,t.jsxs)(h,{animate:{opacity:1},"data-theme":"dark",exit:{opacity:0},initial:{opacity:0},transition:{...c.DEFAULT_TRANSITION},children:[(0,t.jsx)(g,{icon:(0,t.jsx)(l.CloseIcon,{}),size:"small",stylez:"bold",onClick:w}),(0,t.jsx)(p.VideoIframe,{allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0,height:"721",referrerPolicy:"strict-origin-when-cross-origin",src:e||"https://www.youtube.com/embed/Gvq7M0Cd9HQ?autoplay=1",title:"Magic AI overview",width:"1280"}),(0,t.jsx)("div",{className:"bkg",onClick:w})]})}),document.body)]})}],168087);let x=r.default.div.withConfig({displayName:"InfoTextImageCardGrid",componentId:"sc-a4879c6d-0"})`
  position: relative;
  display: flex;
  padding-top: 16px;
  padding-bottom: 60px;
  gap: 16px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    flex-direction: column;

    > * {
      flex: 1 1 auto;
    }
  }
`;e.s(["InfoTextImageCardGrid",0,x],306213)},316983,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(997053),a=e.i(537193),n=e.i(598043);let r=o.default.a.withConfig({displayName:"AnnouncementPillLink__Root",componentId:"sc-3e6e3317-0"})`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
  background-color: ${({theme:e})=>e.backgroundColor50};
  padding: 2px;
  border-radius: 999px;
  overflow: clip;
  width: fit-content;

  &::before {
    position: absolute;
    inset: 0;
    content: '';
    border-radius: inherit;
    backdrop-filter: brightness(1.6) saturate(2);
    mask-image: linear-gradient(
      70deg,
      transparent,
      transparent calc(50% - 70px),
      red calc(50% - 3px),
      red calc(50% + 3px),
      transparent calc(50% + 30px)
    );

    transform: translateX(calc(-50% - 80px));
    opacity: 1;

    @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
      margin-left: auto;
      margin-right: auto;
    }
  }

  &:hover::before {
    animation: announcement-pill-shine;
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  }

  @keyframes announcement-pill-shine {
    from {
      transform: translateX(calc(-50% - 40px));
    }
    to {
      transform: translateX(calc(50% + 130px));
    }
  }
`,d=o.default.span.withConfig({displayName:"AnnouncementPillLink__Announcement",componentId:"sc-3e6e3317-1"})`
  display: flex;
  align-items: center;
  gap: 5px;
  padding-right: 10px;
  font-size: ${({theme:e})=>e.fontSize.SMALL};
  color: ${({theme:e})=>e.palette.fg1200};
  font-weight: ${({theme:e})=>e.fontWeight.LIGHT};
  line-height: 1;
`,s=o.default.span.withConfig({displayName:"AnnouncementPillLink__InnerPill",componentId:"sc-3e6e3317-2"})`
  border-radius: 999px;
  background-color: ${({theme:e})=>e.backgroundColor};
  padding: 8px 14px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  -webkit-backdrop-filter: blur(1px);
  backdrop-filter: blur(3px);
  box-shadow: ${({theme:e})=>{let t=e.highlightColor20,i=e.highlightColor40;return`0px -0.5px 0 0.5px ${t},
      0 0.5px 0 0.5px ${i}, 0px 1px 2px rgba(0 0 0 / 0.32), 0px 2px 5px rgba(0 0 0 / 0.18)`}};
`,l=o.default.span.withConfig({displayName:"AnnouncementPillLink__IconPill",componentId:"sc-3e6e3317-3"})`
  border-radius: 999px;

  > svg {
    display: block;
  }
`,c=o.default.span.withConfig({displayName:"AnnouncementPillLink__PillLabel",componentId:"sc-3e6e3317-4"})`
  font-size: ${({theme:e})=>e.fontSize.SMALL};
  font-weight: ${({theme:e})=>e.fontWeight.BOLD};
  line-height: 1;
`;function p(){return(0,t.jsx)("svg",{fill:"none",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{clipRule:"evenodd",d:"M9.11611 8.00001L5.46967 11.6465L6.17677 12.3536L10.5303 8.00001L6.17677 3.64645L5.46967 4.35356L9.11611 8.00001Z",fill:"currentColor",fillRule:"evenodd"})})}let m=i.memo(({subCopy:e,className:i,icon:o,pillLabel:m,to:u})=>(0,t.jsxs)(r,{className:i,href:u,onClick:()=>{(0,a.trackAnnouncementPillClicked)((0,n.reactNodeToPlainTextNormalized)(m),u)},children:[(0,t.jsxs)(s,{children:[(0,t.jsx)(l,{children:o}),(0,t.jsx)(c,{children:m})]}),e&&(0,t.jsxs)(d,{children:["string"==typeof e?(0,t.jsx)("span",{children:e}):e,(0,t.jsx)(p,{})]})]}));m.displayName="AnnouncementPillLink",e.s(["AnnouncementPillLink",0,m])},809132,e=>{"use strict";var t=e.i(997053);let i=t.default.div.withConfig({displayName:"DotGridMask",componentId:"sc-8c154ead-0"})`
  position: absolute;
  inset: 0;
  mask-image: radial-gradient(white, white 1px, transparent 1px, transparent);
  mask-size: 6px 6px;
`;e.s(["DotGridMask",0,i])},237673,e=>{"use strict";var t=e.i(843476),i=e.i(997053),o=e.i(739876),a=e.i(581444),n=e.i(360571);let r=(0,i.default)(a.LayoutSubgrid).withConfig({displayName:"FullWidthQuote__Section",componentId:"sc-1b6d6d80-0"})`
  border-top: 1px solid ${({theme:e})=>(0,o.gridColorSelector)(e,"major")};
  background-color: ${({theme:e})=>e.palette.bg300};
`,d=i.default.div.withConfig({displayName:"FullWidthQuote__Container",componentId:"sc-1b6d6d80-1"})`
  display: flex;
  position: relative;
`,s=i.default.div.withConfig({displayName:"FullWidthQuote__Accent",componentId:"sc-1b6d6d80-2"})`
  position: absolute;
  bottom: 0px;
  height: 8px;
  width: 8px;
  border-top: 1px solid ${({theme:e})=>e.palette.fg1200};
  border-left: 1px solid ${({theme:e})=>e.palette.fg1200};
  left: -1px;
  transform: translateY(100%);
  z-index: 1;

  &[data-right] {
    border-left: none;
    border-right: 1px solid ${({theme:e})=>e.palette.fg1200};
    grid-column: -1 !important;
    left: auto;
    right: -1px;
  }
`,l=i.default.div.withConfig({displayName:"FullWidthQuote__QuoteContainer",componentId:"sc-1b6d6d80-3"})`
  width: 90%;
  max-width: 1270px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 60px;
  padding: ${(0,n.generateFluidPxScale)(30,60)} 0;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    flex-direction: column;
    align-items: flex-start;
  }
`,c=i.default.img.withConfig({displayName:"FullWidthQuote__Logo",componentId:"sc-1b6d6d80-4"})`
  max-width: 160px;
  max-height: 60px;
  width: auto;
  height: auto;
  object-fit: contain;
  object-position: left;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    max-width: 100px;
    max-height: 40px;
  }
`,p=i.default.div.withConfig({displayName:"FullWidthQuote__Attribution",componentId:"sc-1b6d6d80-5"})`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-shrink: 0;
`,m=i.default.div.withConfig({displayName:"FullWidthQuote__Divider",componentId:"sc-1b6d6d80-6"})`
  background: ${({theme:e})=>(0,o.gridColorSelector)(e,"major")};
  width: 1px;
  height: 100%;
`,u=i.default.div.withConfig({displayName:"FullWidthQuote__Author",componentId:"sc-1b6d6d80-7"})`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    text-align: center;
  }
`,f=i.default.div.withConfig({displayName:"FullWidthQuote__AuthorName",componentId:"sc-1b6d6d80-8"})`
  color: ${({theme:e})=>e.palette.fgLoud};

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    font-size: ${({theme:e})=>e.fontSize.body.base};
    font-weight: ${({theme:e})=>e.fontWeight.NORMAL};
  }
`,h=i.default.div.withConfig({displayName:"FullWidthQuote__AuthorTitle",componentId:"sc-1b6d6d80-9"})`
  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    font-size: ${({theme:e})=>e.fontSize.body.xs};
  }
`,g=i.default.blockquote.withConfig({displayName:"FullWidthQuote__QuoteText",componentId:"sc-1b6d6d80-10"})`
  strong {
    font-weight: ${({theme:e})=>e.fontWeight.BOLD};
    color: ${({theme:e})=>e.palette.fgLoud};
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    padding-left: 0;
    text-align: center;
    padding: 0 12px;
    font-size: ${({theme:e})=>e.fontSize.body.l};
    line-height: ${({theme:e})=>e.lineHeight.body.l};
    max-width: 600px;
    margin: 0 auto;
  }
`,x=i.default.div.withConfig({displayName:"FullWidthQuote__MobileWrapper",componentId:"sc-1b6d6d80-11"})`
  display: none;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 40px 0;
  }
`,b=i.default.div.withConfig({displayName:"FullWidthQuote__DesktopWrapper",componentId:"sc-1b6d6d80-12"})`
  display: block;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    display: none;
  }
`,w=i.default.div.withConfig({displayName:"FullWidthQuote__Margin",componentId:"sc-1b6d6d80-13"})`
  position: relative;
  grid-column: 1 / span 1;

  &[data-right] {
    grid-column: -2 / span 1;
  }
`,y=i.default.div.withConfig({displayName:"FullWidthQuote__AccentL",componentId:"sc-1b6d6d80-14"})`
  height: 8px;
  width: 8px;
  position: absolute;
  top: -8px;
  right: -7px;
  border-bottom: 1px solid ${({theme:e})=>e.palette.fg1200};
  border-left: 1px solid ${({theme:e})=>e.palette.fg1200};

  &[data-right] {
    border-right: 1px solid ${({theme:e})=>e.palette.fg1200};
    border-left: none;
    right: auto;
    left: -7px;
  }
`;e.s(["FullWidthQuote",0,function({logoPath:e,quote:i,authorName:o,authorTitle:a,authorCompany:n}){let I=(0,t.jsx)(c,{alt:`${o} quote`,loading:"lazy",src:e}),v=(0,t.jsx)(g,{className:"text-xl",children:i}),C=(0,t.jsxs)(u,{children:[(0,t.jsx)(f,{className:"text-l",children:o}),(0,t.jsxs)(h,{className:"annotation",children:[a,", ",n]})]});return(0,t.jsxs)(r,{children:[(0,t.jsx)(w,{children:(0,t.jsx)(y,{})}),(0,t.jsx)(b,{children:(0,t.jsxs)(d,{children:[(0,t.jsxs)(l,{children:[(0,t.jsxs)(p,{children:[I,C]}),(0,t.jsx)(m,{}),v]}),(0,t.jsx)(s,{}),(0,t.jsx)(s,{"data-right":!0})]})}),(0,t.jsxs)(x,{children:[I,v,(0,t.jsx)(p,{children:C})]}),(0,t.jsx)(w,{"data-right":!0,children:(0,t.jsx)(y,{"data-right":!0})})]})}])},600376,e=>{"use strict";var t=e.i(843476),i=e.i(657688),o=e.i(997053),a=e.i(706736),n=e.i(653272),r=e.i(785191),d=e.i(258591),s=e.i(650617);let l=(0,o.default)(r.Card).withConfig({displayName:"InfoTextImageCard__StyledCard",componentId:"sc-3c8c3853-0"})`
  padding: 0;
  flex: 1 1 0;
  min-width: 0;
  overflow: hidden;

  ${({$imageAlign:e})=>"right"===e&&o.css`
      align-items: flex-end;
    `}

  ${({$size:e})=>"small"===e&&o.css`
      @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
        flex: 1 1 auto;
        flex-direction: row;
      }

      @media (max-width: ${({theme:e})=>e.mediaQuery.MOBILE}) {
        flex-direction: column;
      }
    `}
`,c=o.default.div.withConfig({displayName:"InfoTextImageCard__TextContent",componentId:"sc-3c8c3853-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 40px 40px 20px 40px;
  align-items: flex-start;

  p {
    margin-bottom: 8px;
  }

  ${({$size:e})=>"small"===e&&o.css`
      @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
        width: 60%;
        flex: none;
      }

      @media (max-width: ${({theme:e})=>e.mediaQuery.MOBILE}) {
        width: 100%;
      }
    `}
`,p=(0,o.default)(d.Heading).withConfig({displayName:"InfoTextImageCard__Eyebrow",componentId:"sc-3c8c3853-2"})`
  text-wrap: balance;
`,m=(0,o.default)(d.Heading).withConfig({displayName:"InfoTextImageCard__StyledHeading",componentId:"sc-3c8c3853-3"})`
  text-wrap: balance;
`,u=(0,o.default)(s.Text).withConfig({displayName:"InfoTextImageCard__StyledText",componentId:"sc-3c8c3853-4"})`
  text-wrap: balance;
`,f=o.default.div.withConfig({displayName:"InfoTextImageCard__ImageWrapper",componentId:"sc-3c8c3853-5"})`
  display: flex;
  margin-top: auto;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    img {
      width: ${({$size:e})=>"small"===e?"400px":"500px"};
      height: auto;
    }
  }
`;e.s(["InfoTextImageCard",0,function({title:e,description:o,buttonText:r,buttonLink:d,image:s,imageHeight:h,imageWidth:g,size:x="default",imageAlign:b="left",smallTitle:w}){let y=Array.isArray(o)?(0,t.jsx)(t.Fragment,{children:o.map((e,i)=>(0,t.jsx)(u,{size:"medium",children:e},i))}):(0,t.jsx)(u,{size:"medium",children:o}),I=!!(r&&d);return(0,t.jsxs)(l,{$imageAlign:b,$size:x,effect:"glass",children:[(0,t.jsxs)(c,{$size:x,children:[w?(0,t.jsx)(p,{renderAs:"h6",children:w}):null,(0,t.jsx)(m,{renderAs:"h3",children:e}),y,I?(0,t.jsx)(a.Button,{href:d,isExternal:!(0,n.isInternalLink)(d),text:r}):null]}),(0,t.jsx)(f,{$size:x,children:(0,t.jsx)(i.default,{alt:e,height:h,src:`/images/${s.replace(/\.([^.]+)$/,"@2x.$1")}`,width:g})})]})}])},613938,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(846932),a=e.i(997053),n=e.i(991709),r=e.i(739876),d=e.i(581444);let s=(0,a.default)(d.LayoutSubgrid).withConfig({displayName:"BasicPageRow__Wrapper",componentId:"sc-811624ad-0"})`
  overflow-x: clip;

  ${({$topBorder:e})=>e&&a.css`
      border-top: 1px solid ${({theme:e})=>(0,r.gridColorSelector)(e,"major")};
    `}
`,l=a.css`
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
`,c=(0,a.default)(o.motion.div).withConfig({displayName:"BasicPageRow__Inner",componentId:"sc-811624ad-1"})`
  ${l}
`,p=a.default.div.withConfig({displayName:"BasicPageRow__InnerStatic",componentId:"sc-811624ad-2"})`
  ${l}
`,m=(0,a.default)(d.LayoutGridCondensed).withConfig({displayName:"BasicPageRow__StyledLayoutGridCondensed",componentId:"sc-811624ad-3"})`
  position: relative;
`,u=i.memo(function({animateEntrance:e=!0,children:i,fullWidth:o=!1,topBorder:a=!1,className:d,CartesianGridComponent:l}){return(0,t.jsxs)(s,{$topBorder:a,children:[(0,t.jsx)(r.CheckeredMargin,{}),(0,t.jsxs)(m,{className:d,children:[l&&(0,t.jsx)(l,{fadeDirection:"in"}),e?(0,t.jsx)(c,{...n.ANIMATIONS.SimpleFadeIn,$fullWidth:o,children:i}):(0,t.jsx)(p,{$fullWidth:o,children:i})]}),(0,t.jsx)(r.CheckeredMargin,{"data-right":!0})]})});e.s(["BasicPageRow",0,u])},850034,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(53496),a=e.i(656871),n=e.i(627871),r=e.i(35820),d=e.i(182180),s=e.i(472945);let l=["ended","play","timeupdate"];var c=e.i(806406);let p=i.forwardRef(function({src:e="",title:p,...m},u){let f,h=(0,i.useMemo)(()=>(function(e){try{let t=new URL(e,"https://hex.tech"),i="youtube"===(0,a.getVideoProviderFromHostname)(t.hostname);if(!i)return{isYouTube:i,src:e};return t.searchParams.set("enablejsapi","1"),{isYouTube:i,src:t.href}}catch{return{isYouTube:!1,src:e}}})(e),[e]),g=(0,i.useMemo)(()=>(0,n.getVideoMetadata)(e,p),[e,p]),x=(0,c.useYouTubeVideoTracking)(e,p),b=(f=(0,i.useRef)(null),(0,i.useEffect)(()=>{let t=f.current;if(!t)return;let i=!1,o=new Set,a=new URL(e,window.location.href).origin,n=()=>{l.forEach(e=>{t.contentWindow?.postMessage(JSON.stringify({context:"player.js",method:"addEventListener",value:e,version:"0.0.11"}),a)})},c=l=>{if(l.origin!==a||l.source!==t.contentWindow)return;let c=function(e){try{let t="string"==typeof e?JSON.parse(e):e;return"object"==typeof t&&null!==t?t:void 0}catch{return}}(l.data);if(c?.context==="player.js")if("ready"===c.event)n();else if("play"!==c.event||i)if("timeupdate"===c.event){let{duration:t,seconds:i}=c.value??{};if("number"!=typeof t||"number"!=typeof i||t<=0)return;(0,r.getNewVideoProgressThresholds)(i/t*100,o).forEach(t=>{o.add(t),(0,s.trackVideoProgress)(e,t,p)})}else"ended"===c.event&&((0,r.getNewVideoProgressThresholds)(100,o).forEach(t=>{o.add(t),(0,s.trackVideoProgress)(e,t,p)}),i=!1);else i=!0,(0,d.trackVideoPlayed)(e,p)};return t.addEventListener("load",n),window.addEventListener("message",c),()=>{t.removeEventListener("load",n),window.removeEventListener("message",c)}},[p,e]),f),w=h.isYouTube?x:"loom"===g.videoProvider?b:null,y=(0,i.useMemo)(()=>(0,o.combineRefs)(u,w),[u,w]);return(0,t.jsx)("iframe",{...m,ref:y,src:h.src,title:p})});e.s(["VideoIframe",0,p],850034)},429625,e=>{"use strict";var t=e.i(271645),i=e.i(35820),o=e.i(182180),a=e.i(472945);e.s(["useNativeVideoTracking",0,function(e,n,r){let d=(0,t.useRef)(!1),s=(0,t.useRef)(new Set);(0,t.useEffect)(()=>{d.current=!1,s.current.clear()},[e]),(0,t.useEffect)(()=>{d.current=!1},[r]);let l=(0,t.useCallback)(()=>{d.current||(d.current=!0,(0,o.trackVideoPlayed)(e,n))},[n,e]),c=(0,t.useCallback)(t=>{let{currentTime:o,duration:r}=t.currentTarget;!Number.isFinite(r)||r<=0||(0,i.getNewVideoProgressThresholds)(o/r*100,s.current).forEach(t=>{s.current.add(t),(0,a.trackVideoProgress)(e,t,n)})},[n,e]);return{handleEnded:(0,t.useCallback)(()=>{(0,i.getNewVideoProgressThresholds)(100,s.current).forEach(t=>{s.current.add(t),(0,a.trackVideoProgress)(e,t,n)}),d.current=!1},[n,e]),handlePlay:l,handleTimeUpdate:c}}])},806406,e=>{"use strict";let t;var i=e.i(271645),o=e.i(35820),a=e.i(182180),n=e.i(472945);e.s(["useYouTubeVideoTracking",0,function(e,r,d){let s=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let i,d,l=s.current;if(!l)return;let c=!1,p=!1,m=new Set,u=()=>{void 0!==i&&window.clearInterval(i),i=void 0},f=()=>{if(!d)return;let t=d.getDuration();if(!Number.isFinite(t)||t<=0)return;let i=d.getCurrentTime()/t*100;(0,o.getNewVideoProgressThresholds)(i,m).forEach(t=>{m.add(t),(0,n.trackVideoProgress)(e,t,r)})},h=t=>{1===t?(p||(p=!0,(0,a.trackVideoPlayed)(e,r)),void 0===i&&(i=window.setInterval(f,1e3))):(0===t||2===t)&&(f(),u(),0===t&&(p=!1))};return(window.YT?.Player?Promise.resolve(window.YT):t||(t=new Promise(e=>{let t=window.onYouTubeIframeAPIReady;if(window.onYouTubeIframeAPIReady=()=>{t?.(),window.YT&&e(window.YT)},!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')){let e=document.createElement("script");e.src="https://www.youtube.com/iframe_api",document.head.appendChild(e)}}))).then(e=>{c||(d=new e.Player(l,{events:{onReady:()=>h(d?.getPlayerState()??-1),onStateChange:e=>h(e.data)}}))}),()=>{c=!0,u(),d?.destroy()}},[d,r,e]),s}],806406)},53496,e=>{"use strict";e.s(["combineRefs",0,function(...e){return function(t){e.forEach(e=>{if(null!==e){if("function"==typeof e)return void e(t);e.current=t}})}}])},35820,472945,e=>{"use strict";let t=[25,50,75,90];e.s(["getNewVideoProgressThresholds",0,function(e,i){return t.filter(t=>e>=t&&!i.has(t))}],35820);var i=e.i(395967),o=e.i(924837),a=e.i(759609),n=e.i(627871);e.s(["trackVideoProgress",0,function(e,t,r){let d=(0,n.getVideoMetadata)(e,r),s={page_path:(0,a.getCurrentPagePath)(),progress_pct:t,video_id:d.videoId,video_title:d.videoTitle,video_url:d.videoUrl};(0,i.trackRudderstack)(o.TRACKING_EVENTS.VideoProgress,s)}],472945)},998990,e=>{"use strict";e.s(["CUSTOMER_LOGOS_HOSTED",0,{Algolia:"https://cdn.sanity.io/images/e92memrj/production/643fb40019cd60627bf6f354c5bffdfd66017ce9-97x51.svg",Brex:"https://cdn.sanity.io/images/e92memrj/production/797daac5d8ce0c8f853f32db64dddf44234caf15-110x50.svg",Candidly:"https://cdn.sanity.io/images/e92memrj/production/5fb6f6dd0ff002808f2382c81a66cd28410a4ac9-166x50.svg",Chime:"https://cdn.sanity.io/images/e92memrj/production/20bf8a6fe0ca725b28527c135c22f237938f5ef5-94x50.svg",ClickUp:"https://cdn.sanity.io/images/e92memrj/production/8ec37f2330ffd132be12ea66bad243453af0d047-119x50.svg",CustomerIO:"https://cdn.sanity.io/images/e92memrj/production/fc46557c4677964c57351c9affa635d558fe8cd8-170x40.svg",Doximity:"https://cdn.sanity.io/images/e92memrj/production/17b8982db750bfc51b7aa08783c5e1f8d3432d63-125x50.svg",Figma:"https://cdn.sanity.io/images/e92memrj/production/f7df402cfb3dac549c3f877c09425534abc7650b-97x50.svg",Huckberry:"https://cdn.sanity.io/images/e92memrj/production/8194d2de15059f3f69d4fb8dbc03b2f7bfb04af4-134x50.svg",InfiniteLambda:"https://cdn.sanity.io/images/e92memrj/production/638503884c2ca511d9816fc46d5d13f05551bd26-110x50.svg",Inventa:"https://cdn.sanity.io/images/e92memrj/production/2b33cd7f123f50efbd8ea42ea9235382e207633e-132x50.svg",LangChain:"https://cdn.sanity.io/images/e92memrj/production/0b907ba3d40fe1012f1118d105620c7779a49949-135x50.svg",Lovable:"https://cdn.sanity.io/images/e92memrj/production/d063f2a64adcd7869bc2fc81dbc971825be8b951-137x50.svg",MedScout:"https://cdn.sanity.io/images/e92memrj/production/ab190c6c708ad1b738c3dd93e3c9d64718788935-168x50.svg",Mercor:"https://cdn.sanity.io/images/e92memrj/production/92b9cd2232a417db021ffe38f96d45a896e85cba-131x50.svg",NeoFinancial:"https://cdn.sanity.io/images/e92memrj/production/ba0c09ff2b2ba796246ce69e4e971751bccaae37-76x50.svg",Notion:"https://cdn.sanity.io/images/e92memrj/production/6f211c674b14be69b85497264b1d654b138dce01-39x50.svg",PandaDoc:"https://cdn.sanity.io/images/e92memrj/production/728e1e88c0a31f218d18971d3e9da2de81bad906-120x50.svg",ProductHunt:"https://cdn.sanity.io/images/e92memrj/production/0334d3583cd66c0361cd0c3b1bd28d92307cf01a-126x50.svg",Ramp:"https://cdn.sanity.io/images/e92memrj/production/892932e7f3dc3c66d3ae4a16e8bc51e37b7f59f4-120x50.svg",StubHub:"https://cdn.sanity.io/images/e92memrj/production/84cee8330df6df867d752ef0336d987b73845add-81x50.svg",WeightsAndBiases:"https://cdn.sanity.io/images/e92memrj/production/1eaf4b79b17b9f39d479a6cca9f8b60e06105d44-169x50.svg",Zoe:"https://cdn.sanity.io/images/e92memrj/production/ac4cbae3f4b1d599f5d51d290bd183be0b16253a-114x50.svg"}])},232189,(e,t,i)=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},865156,(e,t,i)=>{"use strict";var o=e.r(232189);function a(){}function n(){}n.resetWarningCache=a,t.exports=function(){function e(e,t,i,a,n,r){if(r!==o){var d=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}function t(){return e}e.isRequired=e;var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:n,resetWarningCache:a};return i.PropTypes=i,i}},745009,(e,t,i)=>{e.i(247167),t.exports=e.r(865156)()}]);