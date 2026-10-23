(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,904685,e=>{e.v({label:"CustomerBannerSectionLabel-module__1XCmuW__label"})},647255,e=>{e.v({author:"CustomerLogo-module__-F7ANW__author",popover:"CustomerLogo-module__-F7ANW__popover",story:"CustomerLogo-module__-F7ANW__story"})},590949,e=>{e.v({accents:"CustomerBanner-module__QGw5Ra__accents",frame:"CustomerBanner-module__QGw5Ra__frame",label:"CustomerBanner-module__QGw5Ra__label",logo:"CustomerBanner-module__QGw5Ra__logo",logoDefault:"CustomerBanner-module__QGw5Ra__logoDefault",logoMinimal:"CustomerBanner-module__QGw5Ra__logoMinimal",logos:"CustomerBanner-module__QGw5Ra__logos",logosDefault:"CustomerBanner-module__QGw5Ra__logosDefault",logosMinimal:"CustomerBanner-module__QGw5Ra__logosMinimal",minimal:"CustomerBanner-module__QGw5Ra__minimal",minimalTitle:"CustomerBanner-module__QGw5Ra__minimalTitle",rule:"CustomerBanner-module__QGw5Ra__rule",topEdge:"CustomerBanner-module__QGw5Ra__topEdge"})},321688,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(343794),r=e.i(846932),n=e.i(991709);e.i(726497);var a=e.i(778888),l=e.i(904685);function s({className:e,...i}){return(0,t.jsx)("h2",{...i,className:(0,o.default)("annotation",l.default.label,e)})}var d=e.i(373431),u=e.i(88653),c=e.i(63209),f=e.i(657688),m=e.i(522016),g=e.i(193594),p=e.i(997053),h=e.i(665419),y=e.i(647255);let _=({compact:e=!1,customer:o,showStory:n=!0,trackingLabel:a})=>{let l=o.quotes[0],s=o.slug,d=o.logoWidth??120,m=o.logoHeight??50,[g,p]=(0,i.useState)(!1);if(!n||!l||!s)return(0,t.jsx)(w,{$compact:e,$isTrustBand:!n,children:(0,t.jsx)(f.default,{alt:`Hex customer: ${o.name}`,height:m,src:o.logoUrl,style:{aspectRatio:`${d} / ${m}`,width:"auto"},unoptimized:!0,width:d})});let _=`story-hover-${s}`,M=`story-hover-inner-${s}`;return(0,t.jsx)(c.MotionConfig,{transition:{type:"spring",visualDuration:.22,bounce:.12},children:(0,t.jsxs)("div",{className:y.default.story,children:[(0,t.jsxs)($,{$compact:e,"data-tracking-label":a,href:`${h.INTERNAL_LINKS.Customers}${s}`,children:[(0,t.jsx)(u.AnimatePresence,{children:g?null:(0,t.jsx)(C,{as:r.motion.div,layout:!0,layoutId:_,style:{borderRadius:6},children:(0,t.jsx)(r.motion.div,{layout:"position",layoutId:M,style:{position:"absolute",inset:"auto 0 auto 0"}})})}),(0,t.jsxs)(S,{onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),children:[(0,t.jsx)(r.motion.div,{animate:{opacity:g?.32:1},children:(0,t.jsx)(f.default,{alt:`Hex customer: ${o.name}`,height:m,src:o.logoUrl,style:{aspectRatio:`${d} / ${m}`,width:"auto"},unoptimized:!0,width:d})}),(0,t.jsx)(j,{children:(0,t.jsx)(u.AnimatePresence,{children:g?(0,t.jsx)(L,{as:r.motion.div,layout:!0,layoutId:_,style:{borderRadius:12},children:(0,t.jsxs)(r.motion.div,{layout:"position",layoutId:M,style:{display:"flex",alignItems:"center",gap:12},children:["Read story ",(0,t.jsx)(b,{})]})}):null})})]})]}),(0,t.jsxs)(v,{className:y.default.popover,"data-customer-popover":"",children:[(0,t.jsx)(E,{alt:`Hex customer: ${o.name}`,"data-markdown-exclude":"",src:o.logoUrl}),(0,t.jsx)(R,{children:(0,t.jsx)(x,{})}),(0,t.jsxs)(I,{children:['"',l.quote,'"']}),(0,t.jsxs)(z,{children:[(0,t.jsx)(P,{as:"strong",className:y.default.author,children:l.author})," ",l.authorTitle?(0,t.jsx)(O,{children:l.authorTitle}):null]})]})]})})};function x(){return(0,t.jsx)("svg",{"aria-hidden":"true",fill:"none",height:"12",viewBox:"0 0 15 15",width:"12",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M6.91699 1.30798V6.30603L6.85352 6.41931L3.10938 13.139L2.85547 13.5951L2.41113 13.3217L1.16309 12.5541L0.770508 12.3119L0.979492 11.9008L3.45898 7.02576L1.7793 6.40466L1.45312 6.28455V1.30798H6.91699ZM13.8291 1.30798V6.30603L13.7656 6.41931L10.0215 13.139L9.76758 13.5951L9.32324 13.3217L8.0752 12.5541L7.68164 12.3119L7.8916 11.9008L10.3711 7.02576L8.69141 6.40466L8.36523 6.28455V1.30798H13.8291Z",stroke:"currentColor"})})}function b(){return(0,t.jsx)("svg",{"aria-hidden":"true",fill:"none",height:"10",viewBox:"0 0 16 10",width:"16",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M1 5h14M11 1l4 4-4 4",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})})}_.displayName="CustomerLogo";let w=p.default.div.withConfig({displayName:"CustomerLogo__PlainLogo",componentId:"sc-8dd4a870-0"})`
  padding: ${({$compact:e})=>e?"0":"0 8px"};
  height: 100%;
  display: flex;
  align-items: center;

  img {
    ${({theme:e})=>e.customerLogoColor};
    height: ${({$isTrustBand:e})=>e?"100%":"40px"};
    width: auto;
  }
`,v=p.default.div.withConfig({displayName:"CustomerLogo__CustomerStoryPopover",componentId:"sc-8dd4a870-1"})`
  position: absolute;
  width: 300px;
  bottom: calc(100% + 16px);
  left: 0;
  transform: translateY(-28px);
  opacity: 0;
  padding: 8px 16px 16px 16px;
  z-index: 2;
  transition:
    transform ${(0,d.spring)(.28,.24).toString()},
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
`,$=(0,p.default)(m.default).withConfig({displayName:"CustomerLogo__LogoLink",componentId:"sc-8dd4a870-2"})`
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
`,C=p.default.div.withConfig({displayName:"CustomerLogo__CustomerStoryIndicator",componentId:"sc-8dd4a870-3"})`
  position: absolute;
  top: -8px;
  right: -12px;
  height: 12px;
  aspect-ratio: 1 / 1;
  display: grid;
  place-items: center;
  border-radius: 999px;
  background-color: ${({theme:e})=>(0,g.rgba)((0,g.darken)(.08,e.palette.fgLoud),.16)};
  border: 1px solid
    ${({theme:e})=>(0,g.rgba)((0,g.darken)(.08,e.palette.fgLoud),.16)};
  white-space: nowrap;
  color: ${({theme:e})=>(0,g.rgba)((0,g.darken)(.08,e.palette.fgLoud),.8)};
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
`,S=p.default.div.withConfig({displayName:"CustomerLogo__Pile",componentId:"sc-8dd4a870-4"})`
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
`,j=p.default.div.withConfig({displayName:"CustomerLogo__CenterForSafari",componentId:"sc-8dd4a870-5"})`
  display: grid;
  place-items: center;
  place-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
`,L=p.default.div.withConfig({displayName:"CustomerLogo__StoryHoverIndicator",componentId:"sc-8dd4a870-6"})`
  border-radius: 999px;
  z-index: 1;
  white-space: nowrap;
  color: ${({theme:e})=>e.palette.fgLoud};
  line-height: 1.2;
  overflow: hidden;
  padding: 4px 12px 4px 16px;
  font-size: ${({theme:e})=>e.fontSize.SMALL};
  ${({theme:e})=>e.popover};
`,E=p.default.img.withConfig({displayName:"CustomerLogo__PopoverLogo",componentId:"sc-8dd4a870-7"})`
  height: 32px;
  width: auto;
  display: block;
  margin: 4px auto 8px auto;
  object-fit: contain;
  ${({theme:e})=>e.customerLogoColor};
`,R=p.default.div.withConfig({displayName:"CustomerLogo__PopoverDivider",componentId:"sc-8dd4a870-8"})`
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
    background-color: ${({theme:e})=>(0,g.rgba)(e.palette.fgLoud,.16)};
  }
`,I=p.default.blockquote.withConfig({displayName:"CustomerLogo__PopoverQuote",componentId:"sc-8dd4a870-9"})`
  margin: 0;
  font-weight: ${({theme:e})=>e.fontWeight.LIGHT};
  font-size: ${({theme:e})=>e.fontSize.DEFAULT};
  quotes: none;
`,z=p.default.p.withConfig({displayName:"CustomerLogo__PopoverAttribution",componentId:"sc-8dd4a870-10"})`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin: 12px 0 0;
  color: ${({theme:e})=>e.palette.fg1100};
`,P=p.default.span.withConfig({displayName:"CustomerLogo__PopoverAuthor",componentId:"sc-8dd4a870-11"})`
  font-size: ${({theme:e})=>e.fontSize.EXTRA_SMALL};
`,O=p.default.span.withConfig({displayName:"CustomerLogo__PopoverAuthorTitle",componentId:"sc-8dd4a870-12"})`
  font-size: ${({theme:e})=>e.fontSize.EXTRA_SMALL};
  opacity: 0.7;
`;var M=e.i(590949);e.s(["CustomerBanner",0,function({data:e,trackingLabelPrefix:l}){let d=(0,i.useRef)(null),u=e?.variant==="minimal"?"minimal":"default",c=e?.showStories!==!1;if((0,i.useEffect)(()=>{let e=d.current;if(!e||!c)return;function t(){if(!e)return;let t=e.querySelectorAll("[data-customer-popover]"),i=window.innerWidth-100;for(let e of t){let t=e.getBoundingClientRect(),o=e.parentElement?.getBoundingClientRect(),r=(o?.left??0)+t.width>i;e.setAttribute("data-align",r?"right":"left")}}let i=new ResizeObserver(()=>t());return t(),i.observe(e),()=>i.disconnect()},[e?.customers.length,c]),!e?.customers.length)return null;let f=e.eyebrow?.trim()||"Trusted by leading data companies",m=(0,t.jsx)("ul",{ref:d,className:(0,o.default)(M.default.logos,"minimal"===u?M.default.logosMinimal:M.default.logosDefault),role:"list",children:e.customers.map((e,i)=>(0,t.jsx)("li",{className:(0,o.default)(M.default.logo,"minimal"===u?M.default.logoMinimal:M.default.logoDefault),children:(0,t.jsx)(_,{compact:"default"===u,customer:e,showStory:c,trackingLabel:l?`${l} ${e.slug}`:void 0})},`${e.name}-${i}`))});return"minimal"===u?(0,t.jsxs)(r.motion.div,{...n.ANIMATIONS.SimpleFadeIn,className:M.default.minimal,children:[(0,t.jsx)("p",{className:(0,o.default)(a.textStyles.base,M.default.minimalTitle),children:f}),m]}):(0,t.jsxs)(r.motion.div,{...n.ANIMATIONS.SimpleFadeIn,className:M.default.frame,children:[(0,t.jsx)("div",{className:M.default.accents}),(0,t.jsxs)("div",{className:M.default.topEdge,children:[(0,t.jsx)("span",{"aria-hidden":"true",className:M.default.rule}),(0,t.jsx)(s,{className:M.default.label,children:f}),(0,t.jsx)("span",{"aria-hidden":"true",className:M.default.rule})]}),m]})}],321688)},258591,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(997053);let r=o.css`
  font-family: ${({theme:e})=>e.fontFamily.DISPLAY};
  color: ${({theme:e})=>e.fontColor.LOUD};
  font-weight: ${({theme:e})=>e.fontWeight.h0};
  line-height: ${({theme:e})=>e.lineHeight.h};
  letter-spacing: ${({theme:e})=>e.letterSpacing.h0};
  font-size: ${({theme:e})=>e.fontSize.h0};
`,n=o.css`
  font-family: ${({theme:e})=>e.fontFamily.DISPLAY};
  color: ${({theme:e})=>e.fontColor.LOUD};
  font-weight: ${({theme:e})=>e.fontWeight.h1};
  line-height: ${({theme:e})=>e.lineHeight.h};
  letter-spacing: ${({theme:e})=>e.letterSpacing.h1};
  font-size: ${({theme:e})=>e.fontSize.h1};
`,a=o.css`
  font-family: ${({theme:e})=>e.fontFamily.HEADING};
  color: ${({theme:e})=>e.fontColor.LOUD};
  font-weight: ${({theme:e})=>e.fontWeight.h2};
  line-height: ${({theme:e})=>e.lineHeight.h};
  letter-spacing: ${({theme:e})=>e.letterSpacing.h2};
  font-size: ${({theme:e})=>e.fontSize.h2};
`,l=o.css`
  font-family: ${({theme:e})=>e.fontFamily.HEADING};
  color: ${({theme:e})=>e.fontColor.LOUD};
  font-weight: ${({theme:e})=>e.fontWeight.h3};
  line-height: ${({theme:e})=>e.lineHeight.h};
  letter-spacing: ${({theme:e})=>e.letterSpacing.h3};
  font-size: ${({theme:e})=>e.fontSize.h3};
`,s=o.css`
  font-family: ${({theme:e})=>e.fontFamily.HEADING};
  color: ${({theme:e})=>e.fontColor.LOUD};
  font-weight: ${({theme:e})=>e.fontWeight.h4};
  line-height: ${({theme:e})=>e.lineHeight.h};
  letter-spacing: ${({theme:e})=>e.letterSpacing.h4};
  font-size: ${({theme:e})=>e.fontSize.h4};
`,d=o.css`
  font-family: ${({theme:e})=>e.fontFamily.SANS};
  color: ${({theme:e})=>e.fontColor.MUTED};
  text-transform: uppercase;
  font-weight: ${({theme:e})=>e.fontWeight.h5};
  line-height: ${({theme:e})=>e.lineHeight.h5};
  letter-spacing: ${({theme:e})=>e.letterSpacing.h5};
  font-size: ${({theme:e})=>e.fontSize.h5};
`,u=o.css`
  color: ${({theme:e})=>e.fontColor.MUTED};
  font-family: ${({theme:e})=>e.fontFamily.MONO};
  font-weight: ${({theme:e})=>e.fontWeight.h6};
  line-height: ${({theme:e})=>e.lineHeight.h6};
  letter-spacing: ${({theme:e})=>e.letterSpacing.h6};
  font-size: ${({theme:e})=>e.fontSize.h6};
  text-transform: uppercase;
`,c=o.default.h1.withConfig({displayName:"Heading__HeadingInternal",componentId:"sc-b33f802a-0"})`
  margin: 0;
  ${({$styleVariant:e})=>(function(e){switch(e){case"h0":return r;case"h1":default:return n;case"h2":return a;case"h3":return l;case"h4":return s;case"h5":return d;case"h6":return u}})(e)}
`;var f=(0,o.default)(c).withConfig({displayName:"Heading___StyledHeadingInternal",componentId:"sc-b33f802a-1"})`${e=>e.$_css}`;let m=i.forwardRef(function({children:e,css:i,id:o,renderAs:r,styleAs:n,...a},l){let s=n??r;return(0,t.jsx)(f,{ref:l,$styleVariant:s,as:"h0"===r?"h1":r,id:o,...a,$_css:i,children:e})});e.s(["Heading",0,m,"HeadingFiveStyles",0,d,"HeadingFourStyles",0,s,"HeadingOneStyles",0,n,"HeadingSixStyles",0,u,"HeadingThreeStyles",0,l,"HeadingTwoStyles",0,a,"HeadingZeroStyles",0,r])},650617,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(997053);let r=o.css`
  font-size: ${({theme:e})=>e.fontSize.SMALL};
  line-height: ${({theme:e})=>e.lineHeight.body.s};
  font-weight: ${({theme:e})=>e.fontWeight.NORMAL};
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`,n=o.css`
  font-size: ${({theme:e})=>e.fontSize.DEFAULT};
  line-height: ${({theme:e})=>e.lineHeight.body.base};
  font-weight: ${({theme:e})=>e.fontWeight.LIGHT};
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`,a=o.css`
  font-size: ${({theme:e})=>e.fontSize.MEDIUM};
  line-height: ${({theme:e})=>e.lineHeight.body.m};
  font-weight: ${({theme:e})=>e.fontWeight.LIGHT};
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`,l=o.css`
  font-size: ${({theme:e})=>e.fontSize.LARGE};
  line-height: ${({theme:e})=>e.lineHeight.body.l};
  font-weight: ${({theme:e})=>e.fontWeight.LIGHT};
  margin-bottom: 25px;

  &:last-child {
    margin-bottom: 0;
  }
`,s=o.css`
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
`,d=o.default.p.withConfig({displayName:"Text__TextWrapper",componentId:"sc-f5e7deee-0"})`
  margin: 0;

  ${({$size:e})=>{switch(e){case"small":return r;case"default":default:return n;case"medium":return a;case"large":return l;case"extra-large":return s}}}

  ${({$color:e})=>{switch(e){case"loud":return o.css`
          color: ${({theme:e})=>e.fontColor.LOUD};
        `;case"muted":return o.css`
          color: ${({theme:e})=>e.fontColor.MUTED};
        `;default:return o.css`
          color: ${({theme:e})=>e.fontColor.DEFAULT};
        `}}}
`;var u=(0,o.default)(d).withConfig({displayName:"Text___StyledTextWrapper",componentId:"sc-f5e7deee-1"})`${e=>e.$_css}`;let c=i.forwardRef(function({children:e,color:i,css:o,className:r,size:n,...a},l){return(0,t.jsx)(u,{ref:l,$color:i,$size:n,className:r,...a,$_css:o,children:e})});e.s(["DefaultTextStyles",0,n,"ExtraLargeTextStyles",0,s,"LargeTextStyles",0,l,"MediumTextStyles",0,a,"SmallTextStyles",0,r,"Text",0,c])},529376,e=>{"use strict";var t=e.i(271645);e.s(["useIsHydrated",0,function(){let[e,i]=(0,t.useReducer)(()=>!0,!1);return(0,t.useEffect)(()=>{i()},[]),e}])},288839,e=>{"use strict";var t=e.i(271645);e.s(["default",0,function(e,i=!1){let o=(0,t.useCallback)(t=>{let i=window.matchMedia(e);function o(e){t(e.matches)}return i.addEventListener("change",o),()=>{i.removeEventListener("change",o)}},[e]),r=(0,t.useCallback)(()=>window.matchMedia(e).matches,[e]),n=(0,t.useCallback)(()=>i,[i]);return(0,t.useSyncExternalStore)(o,r,n)}])},676662,e=>{"use strict";var t=e.i(287022),i=e.i(271645),o=e.i(737806);e.s(["useAnimationFrame",0,function(e){let r=(0,i.useRef)(0),{isStatic:n}=(0,i.useContext)(o.MotionConfigContext);(0,i.useEffect)(()=>{if(n)return;let i=({timestamp:t,delta:i})=>{r.current||(r.current=t),e(t-r.current,i)};return t.frame.update(i,!0),()=>(0,t.cancelFrame)(i)},[e])}])},605500,(e,t,i)=>{"use strict";e.i(247167),Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"Image",{enumerable:!0,get:function(){return w}});let o=e.r(555682),r=e.r(190809),n=e.r(843476),a=r._(e.r(271645)),l=o._(e.r(174080)),s=o._(e.r(325633)),d=e.r(908927),u=e.r(987690),c=e.r(918556),f=e.r(65856),m=o._(e.r(1948)),g=e.r(818581),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75,90],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e,t,i,o,r,n,a){let l=e?.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&r(!0),i?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let o=!1,r=!1;i.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>o,isPropagationStopped:()=>r,persist:()=>{},preventDefault:()=>{o=!0,t.preventDefault()},stopPropagation:()=>{r=!0,t.stopPropagation()}})}o?.current&&o.current(e)}}))}function y(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let _="u"<typeof window?a.useEffect:a.useLayoutEffect,x=(0,a.forwardRef)(({src:e,srcSet:t,sizes:i,height:o,width:r,decoding:l,className:s,style:d,fetchPriority:u,placeholder:c,loading:f,unoptimized:m,fill:p,onLoadRef:x,onLoadingCompleteRef:b,setBlurComplete:w,setShowAltText:v,sizesInput:$,onLoad:C,onError:S,...j},L)=>{let E=(0,a.useRef)(!1),R=(0,a.useRef)(null);_(()=>{let{current:e}=E,{current:t}=R;e||null===t||(S&&(t.src=t.src),t.complete&&h(t,c,x,b,w,m,$),E.current=!0)},[e,c,x,b,S,m,$]);let I=(0,g.useMergedRef)(L,R);return(0,n.jsx)("img",{...j,...y(u),loading:f,width:r,height:o,decoding:l,"data-nimg":p?"fill":"1",className:s,style:d,sizes:i,srcSet:t,src:e,ref:I,onLoad:e=>{h(e.currentTarget,c,x,b,w,m,$)},onError:e=>{v(!0),"empty"!==c&&w(!0),S&&S(e)}})});function b({isAppRouter:e,imgAttributes:t}){let i={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...y(t.fetchPriority)};return e&&l.default.preload?(l.default.preload(t.src,i),null):(0,n.jsx)(s.default,{children:(0,n.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...i},"__nimg-"+t.src+t.srcSet+t.sizes)})}let w=(0,a.forwardRef)((e,t)=>{let i=(0,a.useContext)(f.RouterContext),o=(0,a.useContext)(c.ImageConfigContext),r=(0,a.useMemo)(()=>{let e=p||o||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t),r=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:i,qualities:r,localPatterns:"u"<typeof window?o?.localPatterns:e.localPatterns}},[o]),{onLoad:l,onLoadingComplete:s}=e,g=(0,a.useRef)(l);(0,a.useEffect)(()=>{g.current=l},[l]);let h=(0,a.useRef)(s);(0,a.useEffect)(()=>{h.current=s},[s]);let[y,_]=(0,a.useState)(!1),[w,v]=(0,a.useState)(!1),{props:$,meta:C}=(0,d.getImgProps)(e,{defaultLoader:m.default,imgConf:r,blurComplete:y,showAltText:w});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(x,{...$,unoptimized:C.unoptimized,placeholder:C.placeholder,fill:C.fill,onLoadRef:g,onLoadingCompleteRef:h,setBlurComplete:_,setShowAltText:v,sizesInput:e.sizes,ref:t}),C.preload?(0,n.jsx)(b,{isAppRouter:!i,imgAttributes:$}):null]})});("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},670965,(e,t,i)=>{"use strict";function o(e,t){let i=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-i)<Math.abs(e-i)?t:e,t.qualities[0]):i}Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"findClosestQuality",{enumerable:!0,get:function(){return o}})},908927,(e,t,i)=>{"use strict";e.i(247167),Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"getImgProps",{enumerable:!0,get:function(){return d}});let o=e.r(543369),r=e.r(488143),n=e.r(987690),a=["-moz-initial","fill","none","scale-down",void 0];function l(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function d({src:e,sizes:t,unoptimized:i=!1,priority:u=!1,preload:c=!1,loading:f,className:m,quality:g,width:p,height:h,fill:y=!1,style:_,overrideSrc:x,onLoad:b,onLoadingComplete:w,placeholder:v="empty",blurDataURL:$,fetchPriority:C,decoding:S="async",layout:j,objectFit:L,objectPosition:E,lazyBoundary:R,lazyRoot:I,...z},P){var O;let M,N,T,{imgConf:A,showAltText:D,blurComplete:H,defaultLoader:k}=P,G=A||n.imageConfigDefault;if("allSizes"in G)M=G;else{let e=[...G.deviceSizes,...G.imageSizes].sort((e,t)=>e-t),t=G.deviceSizes.sort((e,t)=>e-t),i=G.qualities?.sort((e,t)=>e-t);M={...G,allSizes:e,deviceSizes:t,qualities:i}}if(void 0===k)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let B=z.loader||k;delete z.loader,delete z.srcSet;let U="__next_img_default"in B;if(U){if("custom"===M.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=B;B=t=>{let{config:i,...o}=t;return e(o)}}if(j){"fill"===j&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[j];e&&(_={..._,...e});let i={responsive:"100vw",fill:"100vw"}[j];i&&!t&&(t=i)}let W="",F=s(p),Q=s(h),q=!1;if((O=e)&&"object"==typeof O&&(l(O)||void 0!==O.src)){let t=l(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(N=t.blurWidth,T=t.blurHeight,$=$||t.blurDataURL,W=t.src,q=/\.avif(?:\?|$)/i.test(W),!y)if(F||Q){if(F&&!Q){let e=F/t.width;Q=Math.round(t.height*e)}else if(!F&&Q){let e=Q/t.height;F=Math.round(t.width*e)}}else F=t.width,Q=t.height}q&&"blur"===v&&!$&&(v="empty");let V=!u&&!c&&("lazy"===f||void 0===f);(!(e="string"==typeof e?e:W)||e.startsWith("data:")||e.startsWith("blob:"))&&(i=!0,V=!1),M.unoptimized&&(i=!0),U&&!M.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(i=!0);let X=s(g),Y=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:L,objectPosition:E}:{},D?{}:{color:"transparent"},_),K=H||"empty"===v?null:"blur"===v?`url("data:image/svg+xml;charset=utf-8,${(0,r.getImageBlurSvg)({widthInt:F,heightInt:Q,blurWidth:N,blurHeight:T,blurDataURL:$||"",objectFit:Y.objectFit})}")`:`url("${v}")`,Z=a.includes(Y.objectFit)?"fill"===Y.objectFit?"100% 100%":"cover":Y.objectFit,J=K?{backgroundSize:Z,backgroundPosition:Y.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:K}:{},ee=function({config:e,src:t,unoptimized:i,width:r,quality:n,sizes:a,loader:l}){if(i){if(t.startsWith("/")&&!t.startsWith("//")){let e=(0,o.getDeploymentId)();if(t.includes("/_next/static/immutable")&&!(0,o.getAssetToken)())e=void 0;else if(e){let i=t.indexOf("?");if(-1!==i){let o=new URLSearchParams(t.slice(i+1));o.get("dpl")||(o.append("dpl",e),t=t.slice(0,i)+"?"+o.toString())}else t+=`?dpl=${e}`}}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:s,kind:d}=function({deviceSizes:e,allSizes:t},i,o){if(o){let i=/(^|\s)(1?\d?\d)vw/g,r=[];for(let e;e=i.exec(o);)r.push(parseInt(e[2]));if(r.length){let i=.01*Math.min(...r);return{widths:t.filter(t=>t>=e[0]*i),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof i?{widths:e,kind:"w"}:{widths:[...new Set([i,2*i].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,r,a),u=s.length-1;return{sizes:a||"w"!==d?a:"100vw",srcSet:s.map((i,o)=>`${l({config:e,src:t,quality:n,width:i})} ${"w"===d?i:o+1}${d}`).join(", "),src:l({config:e,src:t,quality:n,width:s[u]})}}({config:M,src:e,unoptimized:i,width:F,quality:X,sizes:t,loader:B}),et=V?"lazy":f;return{props:{...z,loading:et,fetchPriority:C,width:F,height:Q,decoding:S,className:m,style:{...Y,...J},sizes:ee.sizes,srcSet:ee.srcSet,src:x||ee.src},meta:{unoptimized:i,preload:c||u,placeholder:v,fill:y}}}},325633,(e,t,i)=>{"use strict";e.i(247167),Object.defineProperty(i,"__esModule",{value:!0});var o={default:function(){return p},defaultHead:function(){return c}};for(var r in o)Object.defineProperty(i,r,{enumerable:!0,get:o[r]});let n=e.r(555682),a=e.r(190809),l=e.r(843476),s=a._(e.r(271645)),d=n._(e.r(898879)),u=e.r(742732);function c(){return[(0,l.jsx)("meta",{charSet:"utf-8"},"charset"),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}let m=["name","httpEquiv","charSet","itemProp"];function g(e){let t,i,o,r;return e.reduce(f,[]).reverse().concat(c().reverse()).filter((t=new Set,i=new Set,o=new Set,r={},e=>{let n=!0,a=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){a=!0;let i=e.key.slice(e.key.indexOf("$")+1);t.has(i)?n=!1:t.add(i)}switch(e.type){case"title":case"base":i.has(e.type)?n=!1:i.add(e.type);break;case"meta":for(let t=0,i=m.length;t<i;t++){let i=m[t];if(e.props.hasOwnProperty(i))if("charSet"===i)o.has(i)?n=!1:o.add(i);else{let t=e.props[i],o=r[i]||new Set;("name"!==i||!a)&&o.has(t)?n=!1:(o.add(t),r[i]=o)}}}return n})).reverse().map((e,t)=>{let i=e.key||t;return s.default.cloneElement(e,{key:i})})}let p=function({children:e}){let t=(0,s.useContext)(u.HeadManagerContext);return(0,l.jsx)(d.default,{reduceComponentsToState:g,headManager:t,children:e})};("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},488143,(e,t,i)=>{"use strict";function o({widthInt:e,heightInt:t,blurWidth:i,blurHeight:r,blurDataURL:n,objectFit:a}){let l=i?40*i:e,s=r?40*r:t,d=l&&s?`viewBox='0 0 ${l} ${s}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${d}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${d?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${n}'/%3E%3C/svg%3E`}Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"getImageBlurSvg",{enumerable:!0,get:function(){return o}})},918556,(e,t,i)=>{"use strict";e.i(247167),Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"ImageConfigContext",{enumerable:!0,get:function(){return n}});let o=e.r(555682)._(e.r(271645)),r=e.r(987690),n=o.default.createContext(r.imageConfigDefault)},65856,(e,t,i)=>{"use strict";e.i(247167),Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"RouterContext",{enumerable:!0,get:function(){return o}});let o=e.r(555682)._(e.r(271645)).default.createContext(null)},987690,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o={VALID_LOADERS:function(){return n},imageConfigDefault:function(){return a}};for(var r in o)Object.defineProperty(i,r,{enumerable:!0,get:o[r]});let n=["default","imgix","cloudinary","akamai","custom"],a={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumDiskCacheSize:void 0,maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1,customCacheHandler:!1}},794909,(e,t,i)=>{"use strict";e.i(247167),Object.defineProperty(i,"__esModule",{value:!0});var o={default:function(){return u},getImageProps:function(){return d}};for(var r in o)Object.defineProperty(i,r,{enumerable:!0,get:o[r]});let n=e.r(555682),a=e.r(908927),l=e.r(605500),s=n._(e.r(1948));function d(e){let{props:t}=(0,a.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75,90],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}}let u=l.Image},657688,(e,t,i)=>{t.exports=e.r(794909)},1948,(e,t,i)=>{"use strict";e.i(247167),Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return a}});let o=e.r(670965),r=e.r(543369);function n({config:e,src:t,width:i,quality:a}){let l=(0,r.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//"))if(t.includes("/_next/static/immutable")&&!(0,r.getAssetToken)())l=void 0;else{let e=t.indexOf("?");if(-1!==e){let i=new URLSearchParams(t.slice(e+1)),o=i.get("dpl");if(o){l=o,i.delete("dpl");let r=i.toString();t=t.slice(0,e)+(r?"?"+r:"")}}}if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let s=(0,o.findClosestQuality)(a,e);return`${e.path}?url=${encodeURIComponent(t)}&w=${i}&q=${s}${t.startsWith("/")&&l?`&dpl=${l}`:""}`}n.__next_img_default=!0;let a=n},898879,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return l}});let o=e.r(271645),r="u"<typeof window,n=r?()=>{}:o.useLayoutEffect,a=r?()=>{}:o.useEffect;function l(e){let{headManager:t,reduceComponentsToState:i}=e;function l(){if(t&&t.mountedInstances){let e=o.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(i(e))}}return r&&(t?.mountedInstances?.add(e.children),l()),n(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),n(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}}]);