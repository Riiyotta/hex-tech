(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,904685,e=>{e.v({label:"CustomerBannerSectionLabel-module__1XCmuW__label"})},647255,e=>{e.v({author:"CustomerLogo-module__-F7ANW__author",popover:"CustomerLogo-module__-F7ANW__popover",story:"CustomerLogo-module__-F7ANW__story"})},590949,e=>{e.v({accents:"CustomerBanner-module__QGw5Ra__accents",frame:"CustomerBanner-module__QGw5Ra__frame",label:"CustomerBanner-module__QGw5Ra__label",logo:"CustomerBanner-module__QGw5Ra__logo",logoDefault:"CustomerBanner-module__QGw5Ra__logoDefault",logoMinimal:"CustomerBanner-module__QGw5Ra__logoMinimal",logos:"CustomerBanner-module__QGw5Ra__logos",logosDefault:"CustomerBanner-module__QGw5Ra__logosDefault",logosMinimal:"CustomerBanner-module__QGw5Ra__logosMinimal",minimal:"CustomerBanner-module__QGw5Ra__minimal",minimalTitle:"CustomerBanner-module__QGw5Ra__minimalTitle",rule:"CustomerBanner-module__QGw5Ra__rule",topEdge:"CustomerBanner-module__QGw5Ra__topEdge"})},321688,e=>{"use strict";var t=e.i(843476),i=e.i(271645),a=e.i(343794),o=e.i(846932),n=e.i(991709);e.i(726497);var d=e.i(778888),s=e.i(904685);function r({className:e,...i}){return(0,t.jsx)("h2",{...i,className:(0,a.default)("annotation",s.default.label,e)})}var l=e.i(373431),c=e.i(88653),m=e.i(63209),p=e.i(657688),u=e.i(522016),h=e.i(193594),f=e.i(997053),g=e.i(665419),x=e.i(647255);let y=({compact:e=!1,customer:a,showStory:n=!0,trackingLabel:d})=>{let s=a.quotes[0],r=a.slug,l=a.logoWidth??120,u=a.logoHeight??50,[h,f]=(0,i.useState)(!1);if(!n||!s||!r)return(0,t.jsx)(v,{$compact:e,$isTrustBand:!n,children:(0,t.jsx)(p.default,{alt:`Hex customer: ${a.name}`,height:u,src:a.logoUrl,style:{aspectRatio:`${l} / ${u}`,width:"auto"},unoptimized:!0,width:l})});let y=`story-hover-${r}`,P=`story-hover-inner-${r}`;return(0,t.jsx)(m.MotionConfig,{transition:{type:"spring",visualDuration:.22,bounce:.12},children:(0,t.jsxs)("div",{className:x.default.story,children:[(0,t.jsxs)(_,{$compact:e,"data-tracking-label":d,href:`${g.INTERNAL_LINKS.Customers}${r}`,children:[(0,t.jsx)(c.AnimatePresence,{children:h?null:(0,t.jsx)(j,{as:o.motion.div,layout:!0,layoutId:y,style:{borderRadius:6},children:(0,t.jsx)(o.motion.div,{layout:"position",layoutId:P,style:{position:"absolute",inset:"auto 0 auto 0"}})})}),(0,t.jsxs)(I,{onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),children:[(0,t.jsx)(o.motion.div,{animate:{opacity:h?.32:1},children:(0,t.jsx)(p.default,{alt:`Hex customer: ${a.name}`,height:u,src:a.logoUrl,style:{aspectRatio:`${l} / ${u}`,width:"auto"},unoptimized:!0,width:l})}),(0,t.jsx)(N,{children:(0,t.jsx)(c.AnimatePresence,{children:h?(0,t.jsx)(L,{as:o.motion.div,layout:!0,layoutId:y,style:{borderRadius:12},children:(0,t.jsxs)(o.motion.div,{layout:"position",layoutId:P,style:{display:"flex",alignItems:"center",gap:12},children:["Read story ",(0,t.jsx)(b,{})]})}):null})})]})]}),(0,t.jsxs)(C,{className:x.default.popover,"data-customer-popover":"",children:[(0,t.jsx)(A,{alt:`Hex customer: ${a.name}`,"data-markdown-exclude":"",src:a.logoUrl}),(0,t.jsx)(M,{children:(0,t.jsx)(w,{})}),(0,t.jsxs)(S,{children:['"',s.quote,'"']}),(0,t.jsxs)(T,{children:[(0,t.jsx)(E,{as:"strong",className:x.default.author,children:s.author})," ",s.authorTitle?(0,t.jsx)($,{children:s.authorTitle}):null]})]})]})})};function w(){return(0,t.jsx)("svg",{"aria-hidden":"true",fill:"none",height:"12",viewBox:"0 0 15 15",width:"12",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M6.91699 1.30798V6.30603L6.85352 6.41931L3.10938 13.139L2.85547 13.5951L2.41113 13.3217L1.16309 12.5541L0.770508 12.3119L0.979492 11.9008L3.45898 7.02576L1.7793 6.40466L1.45312 6.28455V1.30798H6.91699ZM13.8291 1.30798V6.30603L13.7656 6.41931L10.0215 13.139L9.76758 13.5951L9.32324 13.3217L8.0752 12.5541L7.68164 12.3119L7.8916 11.9008L10.3711 7.02576L8.69141 6.40466L8.36523 6.28455V1.30798H13.8291Z",stroke:"currentColor"})})}function b(){return(0,t.jsx)("svg",{"aria-hidden":"true",fill:"none",height:"10",viewBox:"0 0 16 10",width:"16",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M1 5h14M11 1l4 4-4 4",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})})}y.displayName="CustomerLogo";let v=f.default.div.withConfig({displayName:"CustomerLogo__PlainLogo",componentId:"sc-8dd4a870-0"})`
  padding: ${({$compact:e})=>e?"0":"0 8px"};
  height: 100%;
  display: flex;
  align-items: center;

  img {
    ${({theme:e})=>e.customerLogoColor};
    height: ${({$isTrustBand:e})=>e?"100%":"40px"};
    width: auto;
  }
`,C=f.default.div.withConfig({displayName:"CustomerLogo__CustomerStoryPopover",componentId:"sc-8dd4a870-1"})`
  position: absolute;
  width: 300px;
  bottom: calc(100% + 16px);
  left: 0;
  transform: translateY(-28px);
  opacity: 0;
  padding: 8px 16px 16px 16px;
  z-index: 2;
  transition:
    transform ${(0,l.spring)(.28,.24).toString()},
    opacity 0.14s ease-out;
  transition-delay: 0.012s;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  ${({theme:e})=>e.popover};

  &[data-align='right'] {
    left: auto;
    right: 0;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    display: none;
  }
`,_=(0,f.default)(u.default).withConfig({displayName:"CustomerLogo__LogoLink",componentId:"sc-8dd4a870-2"})`
  display: flex;
  align-items: center;
  position: relative;
  height: 40px;
  padding: ${({$compact:e})=>e?"0":"0 8px"};
  border-bottom: none;
  text-decoration: none;
  color: inherit;

  &:hover {
    background: transparent;
  }
`,j=f.default.div.withConfig({displayName:"CustomerLogo__CustomerStoryIndicator",componentId:"sc-8dd4a870-3"})`
  position: absolute;
  top: -8px;
  right: -12px;
  height: 12px;
  aspect-ratio: 1 / 1;
  display: grid;
  place-items: center;
  border-radius: 999px;
  background-color: ${({theme:e})=>(0,h.rgba)((0,h.darken)(.08,e.palette.fgLoud),.16)};
  border: 1px solid
    ${({theme:e})=>(0,h.rgba)((0,h.darken)(.08,e.palette.fgLoud),.16)};
  white-space: nowrap;
  color: ${({theme:e})=>(0,h.rgba)((0,h.darken)(.08,e.palette.fgLoud),.8)};
  font-size: 8px;

  &::before,
  &::after {
    content: '';
    height: 4px;
    width: 1px;
    background-color: currentColor;
    transform-origin: center center;
    grid-area: 1 / -1;
  }

  &::after {
    height: 1px;
    width: 4px;
  }
`,I=f.default.div.withConfig({displayName:"CustomerLogo__Pile",componentId:"sc-8dd4a870-4"})`
  display: grid;
  place-items: center;
  place-content: center;

  & > * {
    grid-area: 1 / -1;
  }

  img {
    ${({theme:e})=>e.customerLogoColor};
    display: block;
    height: 40px;
  }
`,N=f.default.div.withConfig({displayName:"CustomerLogo__CenterForSafari",componentId:"sc-8dd4a870-5"})`
  display: grid;
  place-items: center;
  place-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
`,L=f.default.div.withConfig({displayName:"CustomerLogo__StoryHoverIndicator",componentId:"sc-8dd4a870-6"})`
  border-radius: 999px;
  z-index: 1;
  white-space: nowrap;
  color: ${({theme:e})=>e.palette.fgLoud};
  line-height: 1.2;
  overflow: hidden;
  padding: 4px 12px 4px 16px;
  font-size: ${({theme:e})=>e.fontSize.SMALL};
  ${({theme:e})=>e.popover};
`,A=f.default.img.withConfig({displayName:"CustomerLogo__PopoverLogo",componentId:"sc-8dd4a870-7"})`
  height: 32px;
  width: auto;
  display: block;
  margin: 4px auto 8px auto;
  object-fit: contain;
  ${({theme:e})=>e.customerLogoColor};
`,M=f.default.div.withConfig({displayName:"CustomerLogo__PopoverDivider",componentId:"sc-8dd4a870-8"})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 16px;

  &::before,
  &::after {
    content: '';
    display: block;
    flex-grow: 1;
    height: 1px;
    background-color: ${({theme:e})=>(0,h.rgba)(e.palette.fgLoud,.16)};
  }
`,S=f.default.blockquote.withConfig({displayName:"CustomerLogo__PopoverQuote",componentId:"sc-8dd4a870-9"})`
  margin: 0;
  font-weight: ${({theme:e})=>e.fontWeight.LIGHT};
  font-size: ${({theme:e})=>e.fontSize.DEFAULT};
  quotes: none;
`,T=f.default.p.withConfig({displayName:"CustomerLogo__PopoverAttribution",componentId:"sc-8dd4a870-10"})`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin: 12px 0 0;
  color: ${({theme:e})=>e.palette.fg1100};
`,E=f.default.span.withConfig({displayName:"CustomerLogo__PopoverAuthor",componentId:"sc-8dd4a870-11"})`
  font-size: ${({theme:e})=>e.fontSize.EXTRA_SMALL};
`,$=f.default.span.withConfig({displayName:"CustomerLogo__PopoverAuthorTitle",componentId:"sc-8dd4a870-12"})`
  font-size: ${({theme:e})=>e.fontSize.EXTRA_SMALL};
  opacity: 0.7;
`;var P=e.i(590949);e.s(["CustomerBanner",0,function({data:e,trackingLabelPrefix:s}){let l=(0,i.useRef)(null),c=e?.variant==="minimal"?"minimal":"default",m=e?.showStories!==!1;if((0,i.useEffect)(()=>{let e=l.current;if(!e||!m)return;function t(){if(!e)return;let t=e.querySelectorAll("[data-customer-popover]"),i=window.innerWidth-100;for(let e of t){let t=e.getBoundingClientRect(),a=e.parentElement?.getBoundingClientRect(),o=(a?.left??0)+t.width>i;e.setAttribute("data-align",o?"right":"left")}}let i=new ResizeObserver(()=>t());return t(),i.observe(e),()=>i.disconnect()},[e?.customers.length,m]),!e?.customers.length)return null;let p=e.eyebrow?.trim()||"Trusted by leading data companies",u=(0,t.jsx)("ul",{ref:l,className:(0,a.default)(P.default.logos,"minimal"===c?P.default.logosMinimal:P.default.logosDefault),role:"list",children:e.customers.map((e,i)=>(0,t.jsx)("li",{className:(0,a.default)(P.default.logo,"minimal"===c?P.default.logoMinimal:P.default.logoDefault),children:(0,t.jsx)(y,{compact:"default"===c,customer:e,showStory:m,trackingLabel:s?`${s} ${e.slug}`:void 0})},`${e.name}-${i}`))});return"minimal"===c?(0,t.jsxs)(o.motion.div,{...n.ANIMATIONS.SimpleFadeIn,className:P.default.minimal,children:[(0,t.jsx)("p",{className:(0,a.default)(d.textStyles.base,P.default.minimalTitle),children:p}),u]}):(0,t.jsxs)(o.motion.div,{...n.ANIMATIONS.SimpleFadeIn,className:P.default.frame,children:[(0,t.jsx)("div",{className:P.default.accents}),(0,t.jsxs)("div",{className:P.default.topEdge,children:[(0,t.jsx)("span",{"aria-hidden":"true",className:P.default.rule}),(0,t.jsx)(r,{className:P.default.label,children:p}),(0,t.jsx)("span",{"aria-hidden":"true",className:P.default.rule})]}),u]})}],321688)},831177,e=>{"use strict";var t,i,a,o,n,d=e.i(843476),s=e.i(846932),r=e.i(657688),l=e.i(997053),c=e.i(321688),m=e.i(706736),p=e.i(480985),u=e.i(253928),h=e.i(423895),f=e.i(175742),g=e.i(876684),x=e.i(284317),y=e.i(621248),w=e.i(901406),b=e.i(134700),v=e.i(991709),C=e.i(998990),_=e.i(665419);e.i(726497);var j=e.i(778888),I=e.i(271645);function N(){return(N=Object.assign.bind()).apply(null,arguments)}let L=function(e){return I.createElement("svg",N({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none",viewBox:"0 0 20 20"},e),t||(t=I.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M11.878 3.094v.004zm-.014.031c-.027-.045-.102-.137-.297-.254-.34-.204-.892-.371-1.567-.371s-1.226.167-1.567.371c-.195.117-.27.209-.297.254.027.045.102.137.297.254.34.204.892.371 1.567.371s1.226-.167 1.567-.371c.195-.117.27-.209.297-.254m-3.742-.031v.004zM10 5c.704 0 1.353-.14 1.875-.375v1.382c-.057.05-.137.112-.243.176-.291.174-.804.38-1.632.38s-1.341-.206-1.632-.38a1.7 1.7 0 0 1-.243-.176V4.625C8.647 4.861 9.297 5 10 5m0-3.75c1.726 0 3.125.84 3.125 1.875v.368l4.05 2.208c.2.11.325.32.325.549v7.5c0 .229-.125.44-.326.549l-6.863 3.743a.62.62 0 0 1-.622 0L2.826 14.3a.63.63 0 0 1-.326-.549v-7.5c0-.229.125-.44.326-.549l4.049-2.208v-.368c0-1.036 1.4-1.875 3.125-1.875M6.875 4.916l-2.842 1.55L10 9.309l5.967-2.841-2.842-1.55V6.25a.63.63 0 0 1-.105.347l-.52-.347.52.347v.001l-.002.002-.002.003-.006.008-.014.02-.04.053q-.05.063-.141.154c-.12.121-.297.27-.54.417-.491.294-1.228.558-2.275.558s-1.784-.264-2.275-.558a2.8 2.8 0 0 1-.54-.417 2 2 0 0 1-.182-.208l-.013-.02-.006-.007-.002-.003-.001-.002c0-.001-.001-.001.519-.348l-.52.347a.63.63 0 0 1-.105-.347zm3.75 11.531 5.625-3.068V7.716l-5.625 2.679zM3.75 7.717v5.662l5.625 3.068v-6.052z",clipRule:"evenodd"})))};function A(){return(A=Object.assign.bind()).apply(null,arguments)}let M=function(e){return I.createElement("svg",A({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none",viewBox:"0 0 20 20"},e),i||(i=I.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.25 1.25H2.5V17.5h16.25v1.25H1.25z",clipRule:"evenodd"})),a||(a=I.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.25 2.5h1.25v13.75h-1.25zm-2.5 3.75v10H12.5v-10zM10 10v6.25H8.75V10zm-5 6.25V12.5h1.25v3.75z",clipRule:"evenodd"})))};function S(){return(S=Object.assign.bind()).apply(null,arguments)}let T=function(e){return I.createElement("svg",S({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none",viewBox:"0 0 20 20"},e),o||(o=I.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M11.047 2.134q.04-.063.085-.124a19 19 0 0 0-2.382-.135c-2.862 0-4.415.473-5.268 1.042-.899.6-.982 1.276-.982 1.458v9.981c0 .318.083.693.346 1.002.58.684 2.13 2.003 5.383 2.132a1.87 1.87 0 0 1-.008-1.208l.015-.043c-2.863-.124-4.078-1.267-4.437-1.69-.018-.021-.049-.077-.049-.194V11.48c.91.543 2.436 1.021 5 1.021q.383 0 .737-.014l.412-1.236H8.75c-2.427 0-3.711-.456-4.366-.848-.326-.196-.502-.38-.59-.493l-.044-.06V6.487c.782.49 2.017.884 3.974.986l.763-1.226c-2.565-.033-3.747-.55-4.275-.96-.268-.208-.378-.397-.424-.505a.6.6 0 0 1-.037-.114v-.255c.019-.06.104-.243.424-.456.553-.369 1.812-.833 4.575-.833.62 0 1.164.023 1.641.064zm-7.302 2.3.003-.012zM12.64 2.5a.63.63 0 0 0-.53.295l-3.89 6.25a.625.625 0 0 0 .53.955h2.884l-2.226 6.677a.625.625 0 0 0 1.088.579l7.69-10a.625.625 0 0 0-.496-1.006h-2.146l1.852-2.778a.625.625 0 0 0-.52-.972zM9.875 8.75l3.111-5h2.721l-1.852 2.778a.625.625 0 0 0 .52.972h2.045l-4.654 6.053 1.327-3.98a.625.625 0 0 0-.593-.823z",clipRule:"evenodd"})))};function E(){return(E=Object.assign.bind()).apply(null,arguments)}let $=function(e){return I.createElement("svg",E({xmlns:"http://www.w3.org/2000/svg",width:50,height:50,fill:"none",viewBox:"0 0 50 50"},e),n||(n=I.createElement("g",{stroke:"currentColor",strokeMiterlimit:10,strokeOpacity:.4},I.createElement("path",{d:"M11.758 29.852 1.052 40.382M21.514 33.9l-.82 14.893M30.636 30.011l10.531 10.706M34.574 20.843l15.115-.358M30.791 11.13 41.497.598","data-color":"secondary"}))))},P=l.default.div.withConfig({displayName:"EmbeddedAnalyticsPageContent__SplatMarkWrapper",componentId:"sc-f2701fb7-0"})`
  display: flex;
  width: auto !important;
  height: auto !important;

  [data-theme='dark'] & {
    [data-color='secondary'] {
      color: ${({theme:e})=>e.palette.roseQuartz};
    }
  }

  [data-theme='light'] & {
    [data-color='secondary'] {
      color: ${({theme:e})=>e.palette.eggplant};
    }
  }
`,Q=(0,l.default)(function({className:e}){return(0,d.jsx)(P,{className:e,children:(0,d.jsx)($,{})})}).withConfig({displayName:"EmbeddedAnalyticsPageContent__Splat",componentId:"sc-f2701fb7-1"})`
  position: absolute;
  bottom: 17%;
  right: 6%;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    bottom: 17%;
    right: 6%;
  }
`,R=(0,l.default)(s.motion.div).withConfig({displayName:"EmbeddedAnalyticsPageContent__MediaFadeInPosition",componentId:"sc-f2701fb7-2"})`
  position: relative;
  height: 400px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    height: 200px;
  }
`;function U({children:e}){return(0,d.jsx)(R,{...v.REVEAL_MARKER,initial:{opacity:0,y:40},transition:{type:"spring",delay:.3,duration:.6,bounce:0},viewport:{once:!0},whileInView:{opacity:1,y:0},children:e})}let k=l.default.div.withConfig({displayName:"EmbeddedAnalyticsPageContent__NotebookPosition",componentId:"sc-f2701fb7-3"})`
  position: absolute;
  top: 0;
  position: relative;
  width: 135%;
  transform-origin: top center;
  transform: translateX(-11%) translateY(-14%);

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    width: 120%;
    transform: translateY(-12%) translateX(-8%);
  }
`,z=l.default.div.withConfig({displayName:"EmbeddedAnalyticsPageContent__CustomizePosition",componentId:"sc-f2701fb7-4"})`
  position: absolute;
  top: 0;
  transform-origin: top center;
  transform: translateY(-6%);

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    width: 115%;
    transform: translateY(-10%) translateX(-10%);
  }
`,H=l.default.div.withConfig({displayName:"EmbeddedAnalyticsPageContent__EmbedPosition",componentId:"sc-f2701fb7-5"})`
  position: absolute;
  top: 0;
  width: 110%;
  transform-origin: top center;
  transform: translateX(-3%) translateY(-12%);

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    width: 105%;
    transform: translateY(-10%) translateX(-0.5%);
  }
`,G=l.default.div.withConfig({displayName:"EmbeddedAnalyticsPageContent__ScalePosition",componentId:"sc-f2701fb7-6"})`
  position: absolute;
  top: 0;
  width: 110%;
  transform: translateY(-3%) translateX(-8%);

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    width: 115%;
    transform: translateY(-16%) translateX(-6.5%);
  }
`,D=l.default.div.withConfig({displayName:"EmbeddedAnalyticsPageContent__Cards",componentId:"sc-f2701fb7-7"})`
  padding: 80px 0 120px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    grid-template-columns: repeat(1, 1fr);
  }
`,B=l.default.div.withConfig({displayName:"EmbeddedAnalyticsPageContent__Card",componentId:"sc-f2701fb7-8"})`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`,O=l.default.div.withConfig({displayName:"EmbeddedAnalyticsPageContent__CardLogo",componentId:"sc-f2701fb7-9"})`
  /* aspect-ratio: 1 / 1; */
  width: 20px;
  color: ${({theme:e})=>e.palette.fg1200};
`,F=l.default.h3.withConfig({displayName:"EmbeddedAnalyticsPageContent__CardTitle",componentId:"sc-f2701fb7-10"})``,W=l.default.p.withConfig({displayName:"EmbeddedAnalyticsPageContent__CardCopy",componentId:"sc-f2701fb7-11"})``,V=(0,l.default)(f.UseCaseFadeIn).withConfig({displayName:"EmbeddedAnalyticsPageContent__VideoWrapper",componentId:"sc-f2701fb7-12"})`
  position: relative;
  box-shadow: 0 16px 32px -14px rgba(0 0 0 / 0.32);
  overflow: hidden;
  border-radius: 4px;
  margin: 16px 0;
  aspect-ratio: 840 / 472.5;
  max-width: 840px;
  width: 100%;
  background-color: white;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-shadow: 0 0 2px 0 rgba(255 255 255 / 0.16) inset;
  }
`,q=l.default.video.withConfig({displayName:"EmbeddedAnalyticsPageContent__Video",componentId:"sc-f2701fb7-13"})`
  display: block;
  position: relative;
  max-width: 840px;
  width: 100%;
  margin: 0 auto;
`,K=l.default.div.withConfig({displayName:"EmbeddedAnalyticsPageContent__Actions",componentId:"sc-f2701fb7-14"})`
  display: flex;
  gap: 16px;
  margin-bottom: 48px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MOBILE}) {
    gap: 10px;
    flex-direction: column;
    align-self: stretch;
  }
`,X=[{smallTitle:"BUILD",title:"Ship faster",description:["Use Hex's fast, flexible notebook to deliver data insights to your customers in minutes instead of weeks or months.","With queries, code, and no-code living in one canvas, your data team can build stunning visualizations for your engineers to embed."],ctaText:"Discover Notebooks",link:_.INTERNAL_LINKS.Notebooks,media:(0,d.jsx)(U,{children:(0,d.jsx)(k,{children:(0,d.jsx)(r.default,{alt:"Teamwork",height:1382,sizes:"(min-width: 800px) 60vw, 100vw",src:"/images/embedded-analytics/notebooks-img.png",style:{width:"100%",height:"auto"},width:1876})})})},{smallTitle:"CUSTOMIZE",title:"Make it yours",description:["Customize your embedded app for a white-labeled user interface, indistinguishable from the rest of your product.","Easily preview and test your embedded experience to make sure it meets the quality bar your customers know and love."],ctaText:"Discover Data Apps",link:_.INTERNAL_LINKS.AppBuilder,media:(0,d.jsx)(U,{children:(0,d.jsxs)(z,{children:[(0,d.jsx)(r.default,{alt:"Teamwork",height:1108,sizes:"(min-width: 800px) 60vw, 100vw",src:"/images/embedded-analytics/customize.png",style:{width:"100%",height:"auto"},width:1448}),(0,d.jsx)(Q,{})]})})},{smallTitle:"EMBED",title:"Easy, breezy integration",description:["Light-weight and easy to use, the Hex Embed API is designed for developer-friendly implementation.","No bulky SDK integrations — just hand off your beautiful dashboards for deployment."],media:(0,d.jsx)(U,{children:(0,d.jsx)(H,{children:(0,d.jsx)(r.default,{alt:"Teamwork",height:1076,sizes:"(min-width: 800px) 60vw, 100vw",src:"/images/embedded-analytics/embed.png",style:{width:"100%",height:"auto"},width:1512})})})},{smallTitle:"SCALE",title:"Low floor, high ceiling",description:["Build one project to power tailored data apps for all your customers, without engineering overhead.","Start small, and scale as you grow new revenue streams from embedded experiences."],media:(0,d.jsx)(U,{children:(0,d.jsx)(G,{children:(0,d.jsx)(r.default,{alt:"Teamwork",height:1249,sizes:"(min-width: 800px) 60vw, 100vw",src:"/images/embedded-analytics/scale.png",style:{width:"100%",height:"auto"},width:1396})})})}];e.s(["EmbeddedAnalyticsPageContent",0,function({bannerData:e}){return(0,d.jsx)(b.V1GridLines,{children:(0,d.jsx)(b.V1PageWrapper,{children:(0,d.jsxs)(g.UseCaseGrid,{children:[(0,d.jsxs)(y.UseCaseHero.Panel,{children:[(0,d.jsxs)(y.UseCaseHero.Header,{children:["Embedded analytics, ",(0,d.jsx)("br",{}),"built for agility"]}),(0,d.jsx)(y.UseCaseHero.Subheader,{children:"Seamlessly embed powerful data experiences for your customers."}),(0,d.jsxs)(K,{children:[(0,d.jsx)(m.Button,{href:_.SIGNUP_LINK,size:"large",stylez:"loud",text:"Get started for free"}),(0,d.jsx)(m.Button,{href:_.INTERNAL_LINKS.RequestADemo,size:"large",text:"Request a demo"})]}),(0,d.jsx)(V,{children:(0,d.jsx)(q,{autoPlay:!0,controls:!1,loop:!0,muted:!0,playsInline:!0,poster:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",children:(0,d.jsx)("source",{src:"https://cdn.sanity.io/files/e92memrj/production/89579e06b29e2e978de3d902de7ec81ceb98d802.mp4",type:"video/mp4"})})}),(0,d.jsx)(c.CustomerBanner,{data:e})]}),(0,d.jsx)(x.UseCaseH2.Panel,{className:"pt--small",children:(0,d.jsxs)(x.UseCaseH2.Header,{children:["Drive growth",(0,d.jsx)("br",{}),"with stunning analytics"]})}),X.map(({media:e,...t})=>(0,d.jsxs)(h.TwoUp.Panel,{className:"alternate-odd",children:[(0,d.jsx)(h.TwoUp.Media,{children:e}),(0,d.jsx)(h.TwoUp.Info,{...t})]},t.title)),(0,d.jsx)(f.UseCaseFadeIn,{className:"full-width",children:(0,d.jsx)(w.UseCaseQuote,{style:{maxWidth:1200},children:(0,d.jsx)(u.SocialTout,{customerQuotes:[{author:"Ronald Miller",authorTitle:"Engineering Manager, Data at MedScout",quote:"Hex has completely transformed our analytics capabilities. We can now create new embedded analytics dashboards in minutes, and the platform's flexibility allows us to easily adapt to our customers' diverse needs.",logoPath:C.CUSTOMER_LOGOS_HOSTED.MedScout},{author:"Sam Martin",authorTitle:"Data Science Manager at Candidly",quote:"Before Hex embedded analytics, we dealt with authentication barriers that complicated our reporting workflow. Now, our clients have a seamless experience where their personalized analytics are baked right into our secure portal.",logoPath:C.CUSTOMER_LOGOS_HOSTED.Candidly}],includeG2Proof:!1})})}),(0,d.jsx)(x.UseCaseH2.Panel,{className:"pt--large",children:(0,d.jsx)(x.UseCaseH2.Header,{children:"Deliver a first-class user experience"})}),(0,d.jsxs)(D,{as:f.UseCaseFadeIn,children:[(0,d.jsxs)(B,{children:[(0,d.jsx)(O,{children:(0,d.jsx)(L,{})}),(0,d.jsx)(F,{className:j.headingStyles.h4,children:"Seamless authentication"}),(0,d.jsx)(W,{children:"A single API call handles pass-through authentication and row-level security, so your customers simply log in to your product for immediate access to only their own data."})]}),(0,d.jsxs)(B,{children:[(0,d.jsx)(O,{children:(0,d.jsx)(M,{})}),(0,d.jsx)(F,{className:j.headingStyles.h4,children:"Interactive analytics"}),(0,d.jsx)(W,{children:"Go beyond static dashboards, and build dynamic data apps that take in user inputs. Let your customers export CSVs and PDFs for their own analyses."})]}),(0,d.jsxs)(B,{children:[(0,d.jsx)(O,{children:(0,d.jsx)(T,{})}),(0,d.jsx)(F,{className:j.headingStyles.h4,children:"Real-time data"}),(0,d.jsx)(W,{children:"Keep your customers’ dashboards fresh with live queries against your cloud data warehouse for the latest and greatest data."})]})]}),(0,d.jsx)(p.OutroTout,{className:"full-width",copy:"Get in touch with us to see a demo or find out which plan is right for you.",title:"Monetize your data with embedded analytics"})]})})})}],831177)},939808,e=>{"use strict";var t=e.i(843476),i=e.i(271645),a=e.i(997053),o=e.i(430388),n=e.i(785191),d=e.i(650617);let s=i.memo(({logoPath:e,customerName:i,quote:a,authorAvatarPath:n,author:s,authorTitle:h})=>(0,t.jsx)(r,{children:(0,t.jsxs)(l,{children:[e&&(0,t.jsx)(p,{children:"string"==typeof e?(0,t.jsx)("img",{alt:i||"customer logo",loading:"lazy",src:e}):e}),(0,t.jsxs)(c,{children:[(0,t.jsx)(m,{children:(0,t.jsx)(o.QuoteIcon,{})}),(0,t.jsxs)("blockquote",{children:['"',a,"”"]})]}),s&&(0,t.jsxs)(u,{children:[n&&(0,t.jsx)("img",{alt:s,loading:"lazy",src:n}),(0,t.jsxs)(d.Text,{children:[s,(h||i)&&(0,t.jsxs)("span",{children:["  ",h&&`${h} `,i&&(0,t.jsxs)(t.Fragment,{children:["at ",i]})]})]})]})]})}));s.displayName="CustomerQuoteCard";let r=(0,a.default)(n.Card).attrs({effect:"glass"}).withConfig({displayName:"CustomerQuoteCard__Wrapper",componentId:"sc-5e534bf5-0"})`
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
    ${d.ExtraLargeTextStyles}
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
`,m=a.default.div.withConfig({displayName:"CustomerQuoteCard__QuoteLine",componentId:"sc-5e534bf5-3"})`
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
`,p=a.default.div.withConfig({displayName:"CustomerQuoteCard__Logo",componentId:"sc-5e534bf5-4"})`
  display: flex;
  align-items: start;

  img {
    max-height: 45px;
    object-fit: contain;
    filter: ${({theme:e})=>"dark"===e.name?"brightness(0) invert(1)":"invert(100%) sepia(0%) saturate(1%) hue-rotate(339deg) brightness(100%) contrast(101%)"};
  }
`,u=a.default.div.withConfig({displayName:"CustomerQuoteCard__Author",componentId:"sc-5e534bf5-5"})`
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
`;e.s(["CustomerQuoteCard",0,s])},480985,e=>{"use strict";var t=e.i(843476),i=e.i(271645),a=e.i(846932),o=e.i(997053),n=e.i(706736),d=e.i(288839),s=e.i(991709),r=e.i(665419),l=e.i(785191),c=e.i(258591),m=e.i(650617),p=e.i(812488);let u=i.memo(({actions:e,className:a,title:l,copy:c,orientation:m="vertical"})=>{let u=(0,o.useTheme)(),v=(0,d.default)(u.mediaQueryString.SMALL)?"vertical":m;return(0,t.jsxs)(h,{...s.ANIMATIONS.SimpleFadeIn,className:a,children:[(0,t.jsx)(p.TronDivider,{}),(0,t.jsx)(f,{children:(0,t.jsxs)(g,{$orientation:v,children:[(0,t.jsxs)(x,{$orientation:v,children:[(0,t.jsx)(y,{renderAs:"h2",children:l||"Questions? Talk to us"}),(0,t.jsx)(w,{size:"large",children:c||"Get in touch with us to see a demo or find out which plan is right for you."})]}),e?(0,t.jsx)(b,{children:e.map((e,a)=>(0,t.jsx)(i.Fragment,{children:e},a))}):(0,t.jsx)(n.Button,{href:r.INTERNAL_LINKS.RequestADemo,size:"large",stylez:"loud",text:"Contact Sales"})]})})]})});u.displayName="OutroTout";let h=(0,o.default)(a.motion.div).withConfig({displayName:"OutroTout__Wrapper",componentId:"sc-fce71882-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
`,f=(0,o.default)(a.motion.div).withConfig({displayName:"OutroTout__Inner",componentId:"sc-fce71882-1"})`
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
`,g=(0,o.default)(l.Card).withConfig({displayName:"OutroTout__TopCard",componentId:"sc-fce71882-2"})`
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

  ${({$orientation:e})=>"horizontal"===e&&o.css`
      flex-direction: row;
      text-align: left;
      max-width: ${({theme:e})=>e.maxWidth.PAGE};
      width: 100%;
      justify-content: space-between;
    `}
`,x=o.default.div.withConfig({displayName:"OutroTout__TextWrapper",componentId:"sc-fce71882-3"})`
  display: flex;
  flex-direction: column;
  gap: 10px;

  ${({$orientation:e})=>"horizontal"===e&&o.css`
      align-items: flex-start;
    `}
`,y=(0,o.default)(c.Heading).withConfig({displayName:"OutroTout__StyledHeading",componentId:"sc-fce71882-4"})`
  text-wrap: balance;
`,w=(0,o.default)(m.Text).withConfig({displayName:"OutroTout__StyledText",componentId:"sc-fce71882-5"})`
  text-wrap: balance;
`,b=o.default.div.withConfig({displayName:"OutroTout__Actions",componentId:"sc-fce71882-6"})`
  display: flex;
  gap: 15px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MOBILE}) {
    flex-direction: column;
    width: 100%;
  }
`;e.s(["OutroTout",0,u])},253928,e=>{"use strict";var t=e.i(843476),i=e.i(271645),a=e.i(846932),o=e.i(997053),n=e.i(991709),d=e.i(939808),s=e.i(657688),r=e.i(637804),l=e.i(430388),c=e.i(258591),m=e.i(650617);let p=o.default.div.withConfig({displayName:"G2SocialProofCard__Wrapper",componentId:"sc-95f60257-0"})`
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
`,u=o.default.div.withConfig({displayName:"G2SocialProofCard__Top",componentId:"sc-95f60257-1"})`
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
`,h=o.default.div.withConfig({displayName:"G2SocialProofCard__Bottom",componentId:"sc-95f60257-2"})`
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 4px;
  }
`,f=o.default.div.withConfig({displayName:"G2SocialProofCard__CardCopy",componentId:"sc-95f60257-3"})`
  display: flex;

  img {
    max-height: 35px;
    object-fit: contain;
  }
`,g=o.default.span.withConfig({displayName:"G2SocialProofCard__CheckThemOutLinkInline",componentId:"sc-95f60257-4"})`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`,x=i.memo(({trackingLabel:e})=>(0,t.jsxs)(p,{children:[(0,t.jsx)(u,{children:(0,t.jsx)(s.default,{alt:"Three G2 badges received by Hex for High Performer, Best Support, and Momentum Leader.",height:627,src:"/images/g2-awards.svg",style:{height:"auto"},width:838})}),(0,t.jsxs)(h,{children:[(0,t.jsx)(c.Heading,{renderAs:"h3",children:"Users love Hex"}),(0,t.jsx)(f,{children:(0,t.jsxs)(m.Text,{children:["Rated on G2 as an industry leader based on customer reviews."," ",(0,t.jsx)(r.SiteLink,{href:"https://www.g2.com/products/hex-technologies/reviews",trackingLabel:e,children:(0,t.jsxs)(g,{children:["Check them out",(0,t.jsx)(l.ArrowRightIcon,{})]})})]})})]})]}));x.displayName="G2SocialProofCard";let y=i.memo(({includeG2Proof:e=!1,customerQuotes:i,className:a,g2TrackingLabel:o})=>(0,t.jsx)(w,{...n.ANIMATIONS.SimpleFadeIn,className:a,children:(0,t.jsxs)(b,{children:[e?(0,t.jsx)(x,{trackingLabel:o}):null,i.map((e,i)=>(0,t.jsx)(d.CustomerQuoteCard,{...e},i))]})}));y.displayName="SocialTout";let w=(0,o.default)(a.motion.div).withConfig({displayName:"SocialTout__Wrapper",componentId:"sc-b502cc5e-0"})`
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
`,b=o.default.div.withConfig({displayName:"SocialTout__Inner",componentId:"sc-b502cc5e-1"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  margin: 0 auto;
  max-width: ${({theme:e})=>e.maxWidth.PAGE};

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    flex-direction: column;
  }
`;e.s(["SocialTout",0,y],253928)},423895,e=>{"use strict";var t=e.i(846932),i=e.i(997053),a=e.i(991709),o=e.i(162517);let n=i.default.div.withConfig({displayName:"TwoUp__Media",componentId:"sc-fba28e22-0"})`
  width: 680px;
  flex: none;
  position: relative;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    width: 100%;
    height: auto;
  }
`,d={Panel:(0,i.default)(t.motion.div).attrs(a.ANIMATIONS.SimpleFadeIn).withConfig({displayName:"TwoUp__Panel",componentId:"sc-fba28e22-1"})`
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
`,Media:n,Info:o.InfoText};e.s(["TwoUp",0,d])},175742,e=>{"use strict";var t=e.i(846932),i=e.i(997053),a=e.i(991709);let o=(0,i.default)(t.motion.div).attrs(a.ANIMATIONS.SimpleFadeIn).withConfig({displayName:"FadeIn__UseCaseFadeIn",componentId:"sc-5bd5ab86-0"})``;e.s(["UseCaseFadeIn",0,o])},876684,284317,621248,e=>{"use strict";var t=e.i(997053);let i=t.default.div.withConfig({displayName:"Grid__UseCaseGrid",componentId:"sc-2f7b5c36-0"})`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr min(90%, 1270px) 1fr;

  > * {
    grid-column: 2 / span 1;
  }

  .full-width {
    grid-column: 1 / -1;
  }
`;e.s(["UseCaseGrid",0,i],876684);var a=e.i(843476),o=e.i(846932),n=e.i(991709),d=e.i(273454),s=e.i(650617);let r=(0,t.default)(o.motion.div).attrs(n.ANIMATIONS.SimpleFadeIn).withConfig({displayName:"H2__FadeIn",componentId:"sc-16d4ba28-0"})``,l=(0,t.default)(s.Text).attrs({css:`text-align: center;
        max-width: 767px;
        margin: auto;`,size:"large"}).withConfig({displayName:"H2__Subheader",componentId:"sc-16d4ba28-1"})``,c=(0,t.default)(r).withConfig({displayName:"H2__Panel",componentId:"sc-16d4ba28-2"})`
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
`;var m=(0,t.default)(d.GradientHeader).withConfig({displayName:"H2___StyledGradientHeader",componentId:"sc-16d4ba28-3"})`
        font-size: 60px;
        margin-bottom: 20px;
        text-align: center;
        margin: auto;
        margin-bottom: 12px;
        max-width: 1000px;
      `;e.s(["UseCaseH2",0,{Panel:c,Header:function({children:e}){return(0,a.jsx)(m,{renderAs:"h2",children:e})},Subheader:l}],284317);let p=(0,t.default)(o.motion.div).attrs(n.ANIMATIONS.SimpleFadeIn).withConfig({displayName:"Hero__Panel",componentId:"sc-1db025e6-0"})`
  padding: 84px 0 84px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`,u=t.default.div.withConfig({displayName:"Hero__Actions",componentId:"sc-1db025e6-1"})`
  display: flex;
  gap: 15px;
  padding-top: 10px;
`;var h=(0,t.default)(d.GradientHeader).withConfig({displayName:"Hero___StyledGradientHeader",componentId:"sc-1db025e6-2"})`
        margin-bottom: 20px;
        text-align: center;
        max-width: 1200px;
      `,f=(0,t.default)(s.Text).withConfig({displayName:"Hero___StyledText",componentId:"sc-1db025e6-3"})`
        text-align: center;
        max-width: 800px;
      `;e.s(["UseCaseHero",0,{Panel:p,Header:function({children:e}){return(0,a.jsx)(h,{renderAs:"h0",children:e})},Subheader:function({children:e}){return(0,a.jsx)(f,{size:"large",children:e})},Actions:u}],621248)},901406,e=>{"use strict";var t=e.i(997053),i=e.i(175742);let a=(0,t.default)(i.UseCaseFadeIn).withConfig({displayName:"Quote__UseCaseQuote",componentId:"sc-e26d3d9-0"})`
  max-width: 816px;
  margin: auto;
`;e.s(["UseCaseQuote",0,a])},134700,e=>{"use strict";var t=e.i(843476),i=e.i(997053),a=e.i(739876),o=e.i(581444);let n=(0,i.default)(o.LayoutSubgrid).withConfig({displayName:"V1PageWrapper__V1Subgrid",componentId:"sc-cf85dce9-0"})`
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
`,d=(0,i.default)(a.GridRule).withConfig({displayName:"V1PageWrapper__ResponsiveGridRule",componentId:"sc-cf85dce9-1"})`
  @media (max-width: ${({theme:e})=>e.mediaQuery.MOBILE}) {
    display: none;
  }
`;e.s(["V1GridLines",0,function({children:e}){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.LayoutSubgrid,{"aria-hidden":"true","data-pile":!0,children:[(0,t.jsx)(d,{$column:4}),(0,t.jsx)(a.GridRule,{$column:7}),(0,t.jsx)(d,{$column:10})]}),(0,t.jsx)(o.LayoutSubgrid,{"data-pile":!0,children:e})]})},"V1PageWrapper",0,function({children:e,noTopPadding:i}){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.ContentMarginLine,{"data-v1-gridlines":!0}),(0,t.jsx)(n,{$noTopPadding:i,"data-content-grid":!0,children:e}),(0,t.jsx)(a.ContentMarginLine,{"data-right":!0,"data-v1-gridlines":!0})]})}])},998990,e=>{"use strict";e.s(["CUSTOMER_LOGOS_HOSTED",0,{Algolia:"https://cdn.sanity.io/images/e92memrj/production/643fb40019cd60627bf6f354c5bffdfd66017ce9-97x51.svg",Brex:"https://cdn.sanity.io/images/e92memrj/production/797daac5d8ce0c8f853f32db64dddf44234caf15-110x50.svg",Candidly:"https://cdn.sanity.io/images/e92memrj/production/5fb6f6dd0ff002808f2382c81a66cd28410a4ac9-166x50.svg",Chime:"https://cdn.sanity.io/images/e92memrj/production/20bf8a6fe0ca725b28527c135c22f237938f5ef5-94x50.svg",ClickUp:"https://cdn.sanity.io/images/e92memrj/production/8ec37f2330ffd132be12ea66bad243453af0d047-119x50.svg",CustomerIO:"https://cdn.sanity.io/images/e92memrj/production/fc46557c4677964c57351c9affa635d558fe8cd8-170x40.svg",Doximity:"https://cdn.sanity.io/images/e92memrj/production/17b8982db750bfc51b7aa08783c5e1f8d3432d63-125x50.svg",Figma:"https://cdn.sanity.io/images/e92memrj/production/f7df402cfb3dac549c3f877c09425534abc7650b-97x50.svg",Huckberry:"https://cdn.sanity.io/images/e92memrj/production/8194d2de15059f3f69d4fb8dbc03b2f7bfb04af4-134x50.svg",InfiniteLambda:"https://cdn.sanity.io/images/e92memrj/production/638503884c2ca511d9816fc46d5d13f05551bd26-110x50.svg",Inventa:"https://cdn.sanity.io/images/e92memrj/production/2b33cd7f123f50efbd8ea42ea9235382e207633e-132x50.svg",LangChain:"https://cdn.sanity.io/images/e92memrj/production/0b907ba3d40fe1012f1118d105620c7779a49949-135x50.svg",Lovable:"https://cdn.sanity.io/images/e92memrj/production/d063f2a64adcd7869bc2fc81dbc971825be8b951-137x50.svg",MedScout:"https://cdn.sanity.io/images/e92memrj/production/ab190c6c708ad1b738c3dd93e3c9d64718788935-168x50.svg",Mercor:"https://cdn.sanity.io/images/e92memrj/production/92b9cd2232a417db021ffe38f96d45a896e85cba-131x50.svg",NeoFinancial:"https://cdn.sanity.io/images/e92memrj/production/ba0c09ff2b2ba796246ce69e4e971751bccaae37-76x50.svg",Notion:"https://cdn.sanity.io/images/e92memrj/production/6f211c674b14be69b85497264b1d654b138dce01-39x50.svg",PandaDoc:"https://cdn.sanity.io/images/e92memrj/production/728e1e88c0a31f218d18971d3e9da2de81bad906-120x50.svg",ProductHunt:"https://cdn.sanity.io/images/e92memrj/production/0334d3583cd66c0361cd0c3b1bd28d92307cf01a-126x50.svg",Ramp:"https://cdn.sanity.io/images/e92memrj/production/892932e7f3dc3c66d3ae4a16e8bc51e37b7f59f4-120x50.svg",StubHub:"https://cdn.sanity.io/images/e92memrj/production/84cee8330df6df867d752ef0336d987b73845add-81x50.svg",WeightsAndBiases:"https://cdn.sanity.io/images/e92memrj/production/1eaf4b79b17b9f39d479a6cca9f8b60e06105d44-169x50.svg",Zoe:"https://cdn.sanity.io/images/e92memrj/production/ac4cbae3f4b1d599f5d51d290bd183be0b16253a-114x50.svg"}])}]);