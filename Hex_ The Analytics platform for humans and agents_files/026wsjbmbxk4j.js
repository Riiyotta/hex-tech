(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,296436,e=>{e.v(t=>Promise.all(["static/chunks/3m1bcb90s3oz8.js"].map(t=>e.l(t))).then(()=>t(416694)))},708194,e=>{"use strict";var t=e.i(843476),i=e.i(846932),n=e.i(997053),o=e.i(620363),a=e.i(258591),r=e.i(271645),l=e.i(561037),s=e.i(650617);let d=(0,n.default)(l.Callout).withConfig({displayName:"HeadingWithCallout__AddMoreCallout",componentId:"sc-55dbd903-0"})`
  margin: 0;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    width: 100%;
  }

  @media (min-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    max-width: 370px;
  }
`,c=n.default.div.withConfig({displayName:"HeadingWithCallout__Top",componentId:"sc-55dbd903-1"})`
  display: flex;
  align-items: center;
  margin-bottom: 60px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    flex-direction: column;
    align-items: flex-start;
  }
`,h=n.default.div.withConfig({displayName:"HeadingWithCallout__Left",componentId:"sc-55dbd903-2"})`
  max-width: 600px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    margin-bottom: 20px;
  }
`,m=n.default.div.withConfig({displayName:"HeadingWithCallout__Right",componentId:"sc-55dbd903-3"})`
  margin-left: auto;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    margin-left: 0;
    width: 100%;
  }
`,g=(0,n.default)(a.Heading).attrs({renderAs:"h1"}).withConfig({displayName:"HeadingWithCallout__StyledHeading",componentId:"sc-55dbd903-4"})`
  margin-bottom: 20px;

  span {
    display: block;
  }
`,f=r.memo(function({calloutCopy:e,heading:i,subheading:n}){return(0,t.jsxs)(c,{children:[(0,t.jsxs)(h,{children:[(0,t.jsx)(g,{renderAs:"h1",children:i}),(0,t.jsx)(s.Text,{size:"large",children:n})]}),(0,t.jsx)(m,{children:(0,t.jsx)(d,{dark:!0,children:e})})]})});var p=e.i(730790),u=e.i(134700),x=e.i(991709);let $=(0,n.default)(i.motion.div).withConfig({displayName:"IntegrationsPageContent__Wrapper",componentId:"sc-cabb5c89-0"})`
  padding: 0 40px;
  width: 100%;
  max-width: ${({theme:e})=>e.maxWidth.PAGE};
  margin: 0 auto;
  margin-bottom: 200px;
`,y=n.default.div.withConfig({displayName:"IntegrationsPageContent__SectionHeadingContainer",componentId:"sc-cabb5c89-1"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,I=(0,n.default)(a.Heading).attrs({renderAs:"h3"}).withConfig({displayName:"IntegrationsPageContent__SectionHeading",componentId:"sc-cabb5c89-2"})``,b=(0,n.default)(s.Text).attrs({size:"medium"}).withConfig({displayName:"IntegrationsPageContent__SectionDescription",componentId:"sc-cabb5c89-3"})`
  max-width: 90ch;
  text-wrap: balance;
`,w=n.default.div.withConfig({displayName:"IntegrationsPageContent__List",componentId:"sc-cabb5c89-4"})`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  gap: 30px;
`,C=n.default.div.withConfig({displayName:"IntegrationsPageContent__Grid",componentId:"sc-cabb5c89-5"})`
  display: grid;
  grid-gap: 20px;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  flex: 1 1 auto;
  max-width: none;
  padding-top: 0;

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    grid-template-columns: repeat(1, 1fr);
  }
`,S=n.default.div.withConfig({displayName:"IntegrationsPageContent__LocalFileHeader",componentId:"sc-cabb5c89-6"})`
  font-size: ${({theme:e})=>e.fontSize.SMALL};
  margin-bottom: 13px;
  padding-top: 14px;
`,L=n.default.div.withConfig({displayName:"IntegrationsPageContent__LocalFileRotator",componentId:"sc-cabb5c89-7"})`
  color: ${({theme:e})=>e.fontColor.LOUD};
  border-top: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
  line-height: 50px;
`,_=[".txt",".csv",".json",".parquet",".avro",".xlsx"],H=()=>(0,t.jsx)(p.GridItem,{children:(0,t.jsx)(p.GridItemButton,{disabled:!0,stylez:"minimal",text:(0,t.jsxs)(p.GridItemInner,{children:[(0,t.jsx)(S,{children:"+ local files"}),(0,t.jsx)(L,{children:(0,t.jsx)(o.Rotator,{itemHeight:50,itemWidth:80,noFade:!0,options:_})})]})})});e.s(["IntegrationsPageContent",0,function({integrations:e}){let i=Array.from(new Map(e.filter(e=>e.category?.name).map(e=>[e.category.name,{description:e.category.description,order:e.category.order}])).entries()).sort((e,t)=>e[1].order-t[1].order).map(([e,t])=>({name:e,...t})),n=e.some(e=>!e.category?.name),o=i.length>0?[...i,...n?[{description:"",name:"Integrations",order:0}]:[]]:e.length>0?[{description:"",name:"Integrations",order:0}]:[],a=o.reduce((t,i)=>(t[i.name]="Integrations"===i.name?e.filter(e=>!e.category?.name).sort((e,t)=>e.name.localeCompare(t.name)):e.filter(e=>e.category?.name===i.name).sort((e,t)=>e.name.localeCompare(t.name)),t),{});return(0,t.jsx)(u.V1GridLines,{children:(0,t.jsx)(u.V1PageWrapper,{children:(0,t.jsxs)($,{...x.ANIMATIONS.SimpleFadeIn,children:[(0,t.jsx)(f,{calloutCopy:(0,t.jsxs)(t.Fragment,{children:["Don't see what you're looking for? Drop us a line at          ",(0,t.jsx)("a",{href:"mailto:partnerships@hex.tech",children:"partnerships@hex.tech"}),"."]}),heading:(0,t.jsxs)(t.Fragment,{children:["Integrate with",(0,t.jsx)("span",{children:"your whole stack"})]}),subheading:"Hex brings of all your favorite tools, languages, and data sources together in one platform."}),o.map(e=>(0,t.jsxs)(w,{children:[(0,t.jsxs)(y,{children:[(0,t.jsx)(I,{renderAs:"h3",children:e.name}),e.description&&(0,t.jsx)(b,{children:e.description})]}),(0,t.jsxs)(C,{children:[a[e.name].map(e=>(0,t.jsx)(p.IntegrationGridItem,{logoUrl:e.logoUrl,name:e.name,slug:e.slug},e.slug||e.name)),"Storage & compute"===e.name&&(0,t.jsx)(H,{})]})]},e.name))]})})})}],708194)},561037,e=>{"use strict";var t=e.i(843476),i=e.i(271645),n=e.i(997053),o=e.i(430388);let a=n.default.div.withConfig({displayName:"Callout__Inner",componentId:"sc-207f69f3-0"})`
  background-color: ${({theme:e})=>e.highlightColor05};
  padding: 25px 35px;
  border-left: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
  color: ${({theme:e})=>e.fontColor.DEFAULT};
  font-size: ${({theme:e})=>e.fontSize.MEDIUM};
  line-height: ${({theme:e})=>e.lineHeight.body.l};

  *:last-child {
    margin-bottom: 0 !important;
  }

  p,
  ul,
  li {
    font-size: ${({theme:e})=>e.fontSize.MEDIUM} !important;
    line-height: ${({theme:e})=>e.lineHeight.body.l} !important;
    margin-bottom: 20px;
  }

  code {
    background-color: ${({theme:e})=>e.highlightColor15} !important;
    color: ${({theme:e})=>e.colors.PURPLE} !important;
    font-size: ${({theme:e})=>e.fontSize.SMALL} !important;
  }

  a {
    color: ${({theme:e})=>e.colors.PURPLE} !important;
  }

  ${({$small:e})=>e&&n.css`
      font-size: ${({theme:e})=>e.fontSize.DEFAULT};
      line-height: ${({theme:e})=>e.lineHeight.body.base};

      p,
      ul,
      li {
        font-size: ${({theme:e})=>e.fontSize.DEFAULT} !important;
        line-height: ${({theme:e})=>e.lineHeight.body.base} !important;
      }
    `};
`,r=n.default.div.withConfig({displayName:"Callout__Icon",componentId:"sc-207f69f3-1"})`
  position: absolute;
  top: 21px;
  left: -18px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  background-color: ${({theme:e})=>e.colors.WHITE};
  border-radius: 50%;
  border: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
  box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.WHITE} 0 0 0 3px
    ${({theme:e})=>e.colors.LIGHT_PURPLE};

  svg {
    color: ${({theme:e})=>e.colors.PURPLE};
  }
`,l=n.default.div.withConfig({displayName:"Callout__Wrapper",componentId:"sc-207f69f3-2"})`
  display: flex;
  position: relative;
  margin: 0 0 40px;

  ${({$dark:e,$loud:t})=>e&&n.css`
      && {
        ${a} {
          color: ${({theme:e})=>e.fontColor.DEFAULT};
          background-color: ${({theme:e})=>e.highlightColor05};
          border-left: 1px solid ${({theme:e})=>e.highlightColor};

          ${t&&n.css`
            color: ${({theme:e})=>e.colors.WHITE};
            border: 1px solid ${({theme:e})=>e.highlightColor};
          `}
        }

        ${r} {
          background-color: ${({theme:e})=>e.colors.BLACK};
          border: 1px solid ${({theme:e})=>e.highlightColor};

          svg {
            color: ${({theme:e})=>e.highlightColor};
          }
        }

        a {
          color: ${({theme:e})=>e.highlightColor} !important;
        }
      }
    `};
`,s=i.memo(function({children:e,className:i,dark:n=!1,loud:s=!1,icon:d,small:c=!1}){return(0,t.jsx)(l,{$dark:n,$loud:s,className:i,children:(0,t.jsxs)(a,{$small:c,children:[(0,t.jsx)(r,{children:d||(0,t.jsx)(o.KnowledgeIcon,{})}),e]})})});e.s(["Callout",0,s])},258591,e=>{"use strict";var t=e.i(843476),i=e.i(271645),n=e.i(997053);let o=n.css`
  font-family: ${({theme:e})=>e.fontFamily.DISPLAY};
  color: ${({theme:e})=>e.fontColor.LOUD};
  font-weight: ${({theme:e})=>e.fontWeight.h0};
  line-height: ${({theme:e})=>e.lineHeight.h};
  letter-spacing: ${({theme:e})=>e.letterSpacing.h0};
  font-size: ${({theme:e})=>e.fontSize.h0};
`,a=n.css`
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
`,l=n.css`
  font-family: ${({theme:e})=>e.fontFamily.HEADING};
  color: ${({theme:e})=>e.fontColor.LOUD};
  font-weight: ${({theme:e})=>e.fontWeight.h3};
  line-height: ${({theme:e})=>e.lineHeight.h};
  letter-spacing: ${({theme:e})=>e.letterSpacing.h3};
  font-size: ${({theme:e})=>e.fontSize.h3};
`,s=n.css`
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
`,h=n.default.h1.withConfig({displayName:"Heading__HeadingInternal",componentId:"sc-b33f802a-0"})`
  margin: 0;
  ${({$styleVariant:e})=>(function(e){switch(e){case"h0":return o;case"h1":default:return a;case"h2":return r;case"h3":return l;case"h4":return s;case"h5":return d;case"h6":return c}})(e)}
`;var m=(0,n.default)(h).withConfig({displayName:"Heading___StyledHeadingInternal",componentId:"sc-b33f802a-1"})`${e=>e.$_css}`;let g=i.forwardRef(function({children:e,css:i,id:n,renderAs:o,styleAs:a,...r},l){let s=a??o;return(0,t.jsx)(m,{ref:l,$styleVariant:s,as:"h0"===o?"h1":o,id:n,...r,$_css:i,children:e})});e.s(["Heading",0,g,"HeadingFiveStyles",0,d,"HeadingFourStyles",0,s,"HeadingOneStyles",0,a,"HeadingSixStyles",0,c,"HeadingThreeStyles",0,l,"HeadingTwoStyles",0,r,"HeadingZeroStyles",0,o])},650617,e=>{"use strict";var t=e.i(843476),i=e.i(271645),n=e.i(997053);let o=n.css`
  font-size: ${({theme:e})=>e.fontSize.SMALL};
  line-height: ${({theme:e})=>e.lineHeight.body.s};
  font-weight: ${({theme:e})=>e.fontWeight.NORMAL};
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`,a=n.css`
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
`,l=n.css`
  font-size: ${({theme:e})=>e.fontSize.LARGE};
  line-height: ${({theme:e})=>e.lineHeight.body.l};
  font-weight: ${({theme:e})=>e.fontWeight.LIGHT};
  margin-bottom: 25px;

  &:last-child {
    margin-bottom: 0;
  }
`,s=n.css`
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

  ${({$size:e})=>{switch(e){case"small":return o;case"default":default:return a;case"medium":return r;case"large":return l;case"extra-large":return s}}}

  ${({$color:e})=>{switch(e){case"loud":return n.css`
          color: ${({theme:e})=>e.fontColor.LOUD};
        `;case"muted":return n.css`
          color: ${({theme:e})=>e.fontColor.MUTED};
        `;default:return n.css`
          color: ${({theme:e})=>e.fontColor.DEFAULT};
        `}}}
`;var c=(0,n.default)(d).withConfig({displayName:"Text___StyledTextWrapper",componentId:"sc-f5e7deee-1"})`${e=>e.$_css}`;let h=i.forwardRef(function({children:e,color:i,css:n,className:o,size:a,...r},l){return(0,t.jsx)(c,{ref:l,$color:i,$size:a,className:o,...r,$_css:n,children:e})});e.s(["DefaultTextStyles",0,a,"ExtraLargeTextStyles",0,s,"LargeTextStyles",0,l,"MediumTextStyles",0,r,"SmallTextStyles",0,o,"Text",0,h])},730790,e=>{"use strict";var t=e.i(843476),i=e.i(271645),n=e.i(997053),o=e.i(706736),a=e.i(653272),r=e.i(665419);let l=n.default.div.withConfig({displayName:"IntegrationGridItem__GridItem",componentId:"sc-1911de4a-0"})`
  display: flex;
  position: relative;
  flex: 1 1 0;
  align-items: flex-start;
  flex-direction: column;
  margin: 0;
  height: 200px;
  background-color: ${({theme:e})=>e.backgroundColor75};

  ${({$small:e,theme:t})=>e?n.css`
          height: 80px;
        `:n.css`
          @media (max-width: ${t.mediaQuery.LARGE}) {
            height: 180px;
          }

          @media (max-width: ${t.mediaQuery.MEDIUM}) {
            height: 150px;
          }

          @media (max-width: ${t.mediaQuery.SMALL}) {
            height: 120px;
          }
        `}

  > a {
    display: flex;

    > div {
      width: 100%;
      min-width: 0;

      > div {
        width: 100%;
        min-width: 0;
        height: 100%;
      }
    }
  }
`,s=n.default.div.withConfig({displayName:"IntegrationGridItem__HoverInfo",componentId:"sc-1911de4a-1"})`
  position: absolute;
  top: 50%;
  margin-top: -11px;
  transform: translateY(35px);
  opacity: 0;
  transition:
    opacity
      ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`},
    transform
      ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`};
`,d=(0,n.default)(o.Button).withConfig({displayName:"IntegrationGridItem__GridItemButton",componentId:"sc-1911de4a-2"})`
  &&& {
    width: 100%;
    height: 100%;
    border: 1px solid
      color-mix(
        in srgb,
        ${({theme:e})=>e.colors.LIGHT_PURPLE} 30%,
        transparent
      );
    padding: 0;

    ${({$showParentConnectionOnHover:e})=>e&&n.css`
        img {
          transition: transform
            ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`};
        }

        &:hover {
          img {
            transform: translateY(-15px);
          }

          ${s} {
            transform: translateY(20px);
            opacity: 1;
          }
        }
      `}
  }
`,c=n.default.div.withConfig({displayName:"IntegrationGridItem__GridItemInner",componentId:"sc-1911de4a-3"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: center;
`,h=i.memo(function({className:e,overrideUrl:n,logoUrl:o,name:h,parentIntegration:m,slug:g}){let f=Array.isArray(m)&&m.length>0,p=f?m[0]:null,u=f&&void 0===n,x=(0,i.useMemo)(()=>f&&p?n||`${r.INTERNAL_LINKS.Integrations}${p.slug}`:`${r.INTERNAL_LINKS.Integrations}${g}`,[f,p,g,n]);return(0,t.jsx)(l,{$small:void 0!==n,className:e,children:(0,t.jsx)(d,{$showParentConnectionOnHover:u,href:x,isExternal:!(0,a.isInternalLink)(x),stylez:"minimal",text:(0,t.jsxs)(c,{children:[o?(0,t.jsx)("img",{alt:h,src:o}):(0,t.jsx)("span",{"aria-hidden":"true",children:h.slice(0,1)}),u&&p&&(0,t.jsxs)(s,{children:["+ ",p.name]})]})})})});e.s(["GridItem",0,l,"GridItemButton",0,d,"GridItemInner",0,c,"IntegrationGridItem",0,h])},134700,e=>{"use strict";var t=e.i(843476),i=e.i(997053),n=e.i(739876),o=e.i(581444);let a=(0,i.default)(o.LayoutSubgrid).withConfig({displayName:"V1PageWrapper__V1Subgrid",componentId:"sc-cf85dce9-0"})`
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
`,r=(0,i.default)(n.GridRule).withConfig({displayName:"V1PageWrapper__ResponsiveGridRule",componentId:"sc-cf85dce9-1"})`
  @media (max-width: ${({theme:e})=>e.mediaQuery.MOBILE}) {
    display: none;
  }
`;e.s(["V1GridLines",0,function({children:e}){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.LayoutSubgrid,{"aria-hidden":"true","data-pile":!0,children:[(0,t.jsx)(r,{$column:4}),(0,t.jsx)(n.GridRule,{$column:7}),(0,t.jsx)(r,{$column:10})]}),(0,t.jsx)(o.LayoutSubgrid,{"data-pile":!0,children:e})]})},"V1PageWrapper",0,function({children:e,noTopPadding:i}){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.ContentMarginLine,{"data-v1-gridlines":!0}),(0,t.jsx)(a,{$noTopPadding:i,"data-content-grid":!0,children:e}),(0,t.jsx)(n.ContentMarginLine,{"data-right":!0,"data-v1-gridlines":!0})]})}])},529376,e=>{"use strict";var t=e.i(271645);e.s(["useIsHydrated",0,function(){let[e,i]=(0,t.useReducer)(()=>!0,!1);return(0,t.useEffect)(()=>{i()},[]),e}])},288839,e=>{"use strict";var t=e.i(271645);e.s(["default",0,function(e,i=!1){let n=(0,t.useCallback)(t=>{let i=window.matchMedia(e);function n(e){t(e.matches)}return i.addEventListener("change",n),()=>{i.removeEventListener("change",n)}},[e]),o=(0,t.useCallback)(()=>window.matchMedia(e).matches,[e]),a=(0,t.useCallback)(()=>i,[i]);return(0,t.useSyncExternalStore)(n,o,a)}])},676662,e=>{"use strict";var t=e.i(287022),i=e.i(271645),n=e.i(737806);e.s(["useAnimationFrame",0,function(e){let o=(0,i.useRef)(0),{isStatic:a}=(0,i.useContext)(n.MotionConfigContext);(0,i.useEffect)(()=>{if(a)return;let i=({timestamp:t,delta:i})=>{o.current||(o.current=t),e(t-o.current,i)};return t.frame.update(i,!0),()=>(0,t.cancelFrame)(i)},[e])}])}]);