(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,904685,e=>{e.v({label:"CustomerBannerSectionLabel-module__1XCmuW__label"})},647255,e=>{e.v({author:"CustomerLogo-module__-F7ANW__author",popover:"CustomerLogo-module__-F7ANW__popover",story:"CustomerLogo-module__-F7ANW__story"})},590949,e=>{e.v({accents:"CustomerBanner-module__QGw5Ra__accents",frame:"CustomerBanner-module__QGw5Ra__frame",label:"CustomerBanner-module__QGw5Ra__label",logo:"CustomerBanner-module__QGw5Ra__logo",logoDefault:"CustomerBanner-module__QGw5Ra__logoDefault",logoMinimal:"CustomerBanner-module__QGw5Ra__logoMinimal",logos:"CustomerBanner-module__QGw5Ra__logos",logosDefault:"CustomerBanner-module__QGw5Ra__logosDefault",logosMinimal:"CustomerBanner-module__QGw5Ra__logosMinimal",minimal:"CustomerBanner-module__QGw5Ra__minimal",minimalTitle:"CustomerBanner-module__QGw5Ra__minimalTitle",rule:"CustomerBanner-module__QGw5Ra__rule",topEdge:"CustomerBanner-module__QGw5Ra__topEdge"})},321688,e=>{"use strict";var t=e.i(843476),i=e.i(271645),a=e.i(343794),o=e.i(846932),n=e.i(991709);e.i(726497);var r=e.i(778888),d=e.i(904685);function l({className:e,...i}){return(0,t.jsx)("h2",{...i,className:(0,a.default)("annotation",d.default.label,e)})}var s=e.i(373431),p=e.i(88653),c=e.i(63209),m=e.i(657688),u=e.i(522016),h=e.i(193594),g=e.i(997053),f=e.i(665419),x=e.i(647255);let y=({compact:e=!1,customer:a,showStory:n=!0,trackingLabel:r})=>{let d=a.quotes[0],l=a.slug,s=a.logoWidth??120,u=a.logoHeight??50,[h,g]=(0,i.useState)(!1);if(!n||!d||!l)return(0,t.jsx)(C,{$compact:e,$isTrustBand:!n,children:(0,t.jsx)(m.default,{alt:`Hex customer: ${a.name}`,height:u,src:a.logoUrl,style:{aspectRatio:`${s} / ${u}`,width:"auto"},unoptimized:!0,width:s})});let y=`story-hover-${l}`,P=`story-hover-inner-${l}`;return(0,t.jsx)(c.MotionConfig,{transition:{type:"spring",visualDuration:.22,bounce:.12},children:(0,t.jsxs)("div",{className:x.default.story,children:[(0,t.jsxs)(I,{$compact:e,"data-tracking-label":r,href:`${f.INTERNAL_LINKS.Customers}${l}`,children:[(0,t.jsx)(p.AnimatePresence,{children:h?null:(0,t.jsx)(_,{as:o.motion.div,layout:!0,layoutId:y,style:{borderRadius:6},children:(0,t.jsx)(o.motion.div,{layout:"position",layoutId:P,style:{position:"absolute",inset:"auto 0 auto 0"}})})}),(0,t.jsxs)(j,{onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1),children:[(0,t.jsx)(o.motion.div,{animate:{opacity:h?.32:1},children:(0,t.jsx)(m.default,{alt:`Hex customer: ${a.name}`,height:u,src:a.logoUrl,style:{aspectRatio:`${s} / ${u}`,width:"auto"},unoptimized:!0,width:s})}),(0,t.jsx)(L,{children:(0,t.jsx)(p.AnimatePresence,{children:h?(0,t.jsx)($,{as:o.motion.div,layout:!0,layoutId:y,style:{borderRadius:12},children:(0,t.jsxs)(o.motion.div,{layout:"position",layoutId:P,style:{display:"flex",alignItems:"center",gap:12},children:["Read story ",(0,t.jsx)(w,{})]})}):null})})]})]}),(0,t.jsxs)(v,{className:x.default.popover,"data-customer-popover":"",children:[(0,t.jsx)(N,{alt:`Hex customer: ${a.name}`,"data-markdown-exclude":"",src:a.logoUrl}),(0,t.jsx)(A,{children:(0,t.jsx)(b,{})}),(0,t.jsxs)(k,{children:['"',d.quote,'"']}),(0,t.jsxs)(S,{children:[(0,t.jsx)(T,{as:"strong",className:x.default.author,children:d.author})," ",d.authorTitle?(0,t.jsx)(M,{children:d.authorTitle}):null]})]})]})})};function b(){return(0,t.jsx)("svg",{"aria-hidden":"true",fill:"none",height:"12",viewBox:"0 0 15 15",width:"12",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M6.91699 1.30798V6.30603L6.85352 6.41931L3.10938 13.139L2.85547 13.5951L2.41113 13.3217L1.16309 12.5541L0.770508 12.3119L0.979492 11.9008L3.45898 7.02576L1.7793 6.40466L1.45312 6.28455V1.30798H6.91699ZM13.8291 1.30798V6.30603L13.7656 6.41931L10.0215 13.139L9.76758 13.5951L9.32324 13.3217L8.0752 12.5541L7.68164 12.3119L7.8916 11.9008L10.3711 7.02576L8.69141 6.40466L8.36523 6.28455V1.30798H13.8291Z",stroke:"currentColor"})})}function w(){return(0,t.jsx)("svg",{"aria-hidden":"true",fill:"none",height:"10",viewBox:"0 0 16 10",width:"16",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M1 5h14M11 1l4 4-4 4",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})})}y.displayName="CustomerLogo";let C=g.default.div.withConfig({displayName:"CustomerLogo__PlainLogo",componentId:"sc-8dd4a870-0"})`
  padding: ${({$compact:e})=>e?"0":"0 8px"};
  height: 100%;
  display: flex;
  align-items: center;

  img {
    ${({theme:e})=>e.customerLogoColor};
    height: ${({$isTrustBand:e})=>e?"100%":"40px"};
    width: auto;
  }
`,v=g.default.div.withConfig({displayName:"CustomerLogo__CustomerStoryPopover",componentId:"sc-8dd4a870-1"})`
  position: absolute;
  width: 300px;
  bottom: calc(100% + 16px);
  left: 0;
  transform: translateY(-28px);
  opacity: 0;
  padding: 8px 16px 16px 16px;
  z-index: 2;
  transition:
    transform ${(0,s.spring)(.28,.24).toString()},
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
`,I=(0,g.default)(u.default).withConfig({displayName:"CustomerLogo__LogoLink",componentId:"sc-8dd4a870-2"})`
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
`,_=g.default.div.withConfig({displayName:"CustomerLogo__CustomerStoryIndicator",componentId:"sc-8dd4a870-3"})`
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
`,j=g.default.div.withConfig({displayName:"CustomerLogo__Pile",componentId:"sc-8dd4a870-4"})`
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
`,L=g.default.div.withConfig({displayName:"CustomerLogo__CenterForSafari",componentId:"sc-8dd4a870-5"})`
  display: grid;
  place-items: center;
  place-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
`,$=g.default.div.withConfig({displayName:"CustomerLogo__StoryHoverIndicator",componentId:"sc-8dd4a870-6"})`
  border-radius: 999px;
  z-index: 1;
  white-space: nowrap;
  color: ${({theme:e})=>e.palette.fgLoud};
  line-height: 1.2;
  overflow: hidden;
  padding: 4px 12px 4px 16px;
  font-size: ${({theme:e})=>e.fontSize.SMALL};
  ${({theme:e})=>e.popover};
`,N=g.default.img.withConfig({displayName:"CustomerLogo__PopoverLogo",componentId:"sc-8dd4a870-7"})`
  height: 32px;
  width: auto;
  display: block;
  margin: 4px auto 8px auto;
  object-fit: contain;
  ${({theme:e})=>e.customerLogoColor};
`,A=g.default.div.withConfig({displayName:"CustomerLogo__PopoverDivider",componentId:"sc-8dd4a870-8"})`
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
`,k=g.default.blockquote.withConfig({displayName:"CustomerLogo__PopoverQuote",componentId:"sc-8dd4a870-9"})`
  margin: 0;
  font-weight: ${({theme:e})=>e.fontWeight.LIGHT};
  font-size: ${({theme:e})=>e.fontSize.DEFAULT};
  quotes: none;
`,S=g.default.p.withConfig({displayName:"CustomerLogo__PopoverAttribution",componentId:"sc-8dd4a870-10"})`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin: 12px 0 0;
  color: ${({theme:e})=>e.palette.fg1100};
`,T=g.default.span.withConfig({displayName:"CustomerLogo__PopoverAuthor",componentId:"sc-8dd4a870-11"})`
  font-size: ${({theme:e})=>e.fontSize.EXTRA_SMALL};
`,M=g.default.span.withConfig({displayName:"CustomerLogo__PopoverAuthorTitle",componentId:"sc-8dd4a870-12"})`
  font-size: ${({theme:e})=>e.fontSize.EXTRA_SMALL};
  opacity: 0.7;
`;var P=e.i(590949);e.s(["CustomerBanner",0,function({data:e,trackingLabelPrefix:d}){let s=(0,i.useRef)(null),p=e?.variant==="minimal"?"minimal":"default",c=e?.showStories!==!1;if((0,i.useEffect)(()=>{let e=s.current;if(!e||!c)return;function t(){if(!e)return;let t=e.querySelectorAll("[data-customer-popover]"),i=window.innerWidth-100;for(let e of t){let t=e.getBoundingClientRect(),a=e.parentElement?.getBoundingClientRect(),o=(a?.left??0)+t.width>i;e.setAttribute("data-align",o?"right":"left")}}let i=new ResizeObserver(()=>t());return t(),i.observe(e),()=>i.disconnect()},[e?.customers.length,c]),!e?.customers.length)return null;let m=e.eyebrow?.trim()||"Trusted by leading data companies",u=(0,t.jsx)("ul",{ref:s,className:(0,a.default)(P.default.logos,"minimal"===p?P.default.logosMinimal:P.default.logosDefault),role:"list",children:e.customers.map((e,i)=>(0,t.jsx)("li",{className:(0,a.default)(P.default.logo,"minimal"===p?P.default.logoMinimal:P.default.logoDefault),children:(0,t.jsx)(y,{compact:"default"===p,customer:e,showStory:c,trackingLabel:d?`${d} ${e.slug}`:void 0})},`${e.name}-${i}`))});return"minimal"===p?(0,t.jsxs)(o.motion.div,{...n.ANIMATIONS.SimpleFadeIn,className:P.default.minimal,children:[(0,t.jsx)("p",{className:(0,a.default)(r.textStyles.base,P.default.minimalTitle),children:m}),u]}):(0,t.jsxs)(o.motion.div,{...n.ANIMATIONS.SimpleFadeIn,className:P.default.frame,children:[(0,t.jsx)("div",{className:P.default.accents}),(0,t.jsxs)("div",{className:P.default.topEdge,children:[(0,t.jsx)("span",{"aria-hidden":"true",className:P.default.rule}),(0,t.jsx)(l,{className:P.default.label,children:m}),(0,t.jsx)("span",{"aria-hidden":"true",className:P.default.rule})]}),u]})}],321688)},310869,e=>{"use strict";var t=e.i(843476),i=e.i(846932),a=e.i(997053),o=e.i(480985),n=e.i(253928),r=e.i(134700),d=e.i(991709),l=e.i(998990),s=e.i(271645),p=e.i(657688),c=e.i(321688),m=e.i(706736),u=e.i(316983),h=e.i(273454),g=e.i(650617),f=e.i(430388),x=e.i(665419);let y=s.memo(({bannerData:e})=>(0,t.jsxs)(b,{children:[(0,t.jsxs)(w,{children:[(0,t.jsx)(u.AnnouncementPillLink,{icon:(0,t.jsx)(f.AppBuilderIcon,{}),pillLabel:"Data apps",subCopy:"Read the docs",to:x.DOCS_LINKS.AppBuilder}),(0,t.jsx)(h.GradientHeader,{$alignText:"center",renderAs:"h1",style:{textWrap:"balance"},children:"Share your data in beautiful, governed data apps"}),(0,t.jsx)(v,{children:"For too long, data has been stuck in boring, static dashboards, and locked in complex, technical builders’ tools. Hex brings the speed and power of vibe-coding to your data, without sacrificing trust."}),(0,t.jsxs)(I,{children:[(0,t.jsx)(m.Button,{href:x.SIGNUP_LINK,size:"large",stylez:"loud",text:"Get started for free"}),(0,t.jsx)(m.Button,{href:x.INTERNAL_LINKS.RequestADemo,size:"large",text:"Request a demo"})]})]}),(0,t.jsx)(c.CustomerBanner,{data:e}),(0,t.jsxs)(C,{children:[(0,t.jsx)(p.default,{alt:"Chart cell",height:872,loading:"eager",src:"/images/app-builder/app-one@2x.png",width:1200}),(0,t.jsx)(p.default,{alt:"Chart cell",height:872,loading:"eager",src:"/images/app-builder/app-two@2x.png",width:1200}),(0,t.jsx)(p.default,{alt:"Chart cell",height:872,loading:"eager",src:"/images/app-builder/app-three@2x.png",width:1200}),(0,t.jsx)(p.default,{alt:"Chart cell",height:872,loading:"eager",src:"/images/app-builder/app-four@2x.png",width:1200}),(0,t.jsx)(p.default,{alt:"Chart cell",height:872,loading:"eager",src:"/images/app-builder/app-five@2x.png",width:1200})]})]}));y.displayName="AppBuilderHeroTout";let b=a.default.div.withConfig({displayName:"AppBuilderHeroTout__Wrapper",componentId:"sc-95365f24-0"})`
  display: flex;
  flex-direction: column;
  flex: auto;
  width: 100%;
  position: relative;
  padding-top: 50px;
  z-index: 1;
  background: radial-gradient(
    at center bottom,
    rgba(173, 142, 182, 0.4),
    transparent 70%
  );

  &::after {
    content: '';
    display: block;
    height: 1px;
    left: 0;
    bottom: 0;
    right: 0;
    background: ${({theme:e})=>e.colors.LIGHT_PURPLE};
    position: absolute;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    padding-top: 0;
  }
`,w=a.default.div.withConfig({displayName:"AppBuilderHeroTout__Content",componentId:"sc-95365f24-1"})`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  padding: 0 40px 60px;
  margin: 0 auto;
  gap: 20px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    padding: 30px 40px 40px;
  }
`,C=a.default.div.withConfig({displayName:"AppBuilderHeroTout__AppGrid",componentId:"sc-95365f24-2"})`
  display: flex;
  gap: 12px;
  justify-content: center;
  transform: translateY(40px);
  z-index: 2;

  img {
    display: block;
    flex: none;
    background: white;
    box-shadow:
      -1px 0px 0px rgba(2, 2, 27, 0.07),
      1px 0px 0px rgba(2, 2, 27, 0.07),
      0px -1px 0px rgba(2, 2, 27, 0.07),
      0px 1px 0px rgba(2, 2, 27, 0.07),
      0px 54px 74px rgba(1, 1, 27, 0.3),
      0px 14px 74px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    overflow: hidden;
    z-index: 2;
    width: 450px;
    height: auto;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    gap: 10px;

    img {
      width: 200px;
    }
  }
`,v=(0,a.default)(g.Text).attrs({size:"extra-large"}).withConfig({displayName:"AppBuilderHeroTout__HeroDescription",componentId:"sc-95365f24-3"})`
  && {
    width: 85%;
    text-align: center;
    margin-bottom: 0;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    width: 100%;
  }
`,I=a.default.div.withConfig({displayName:"AppBuilderHeroTout__Actions",componentId:"sc-95365f24-4"})`
  display: flex;
  gap: 15px;
  padding-top: 15px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MOBILE}) {
    gap: 10px;
    flex-direction: column;
    align-self: stretch;
  }
`;var _=e.i(258591),j=e.i(279897),L=e.i(360571),$=e.i(174080),N=e.i(785191);e.i(726497);var A=e.i(778888);let k=s.memo(({bestFor:e,imgPath:i,title:a,type:o,prompt:n})=>{let[r,d]=s.useState(!1),[l,c]=s.useState(!1),[m,u]=s.useState(!1),h=s.useRef(null),x=s.useRef({x:0,y:0}),y=s.useRef();s.useEffect(()=>{u(!0)},[]),s.useEffect(()=>()=>{void 0!==y.current&&clearTimeout(y.current)},[]);let b=s.useCallback((e,t)=>{let i=h.current;i&&(i.style.transform=`translate(calc(${e+12}px - 50%), ${t+12}px)`)},[]);return s.useLayoutEffect(()=>{if(!l)return;let{x:e,y:t}=x.current;b(e,t)},[l,r,b]),(0,t.jsx)(S,{onMouseEnter:e=>{x.current={x:e.clientX,y:e.clientY},c(!0)},onMouseLeave:()=>{c(!1)},onMouseMove:e=>{x.current={x:e.clientX,y:e.clientY},b(e.clientX,e.clientY)},children:(0,t.jsxs)(B,{interactive:!0,onClick:()=>{void 0!==y.current&&clearTimeout(y.current),d(!0),navigator.clipboard.writeText(n),y.current=setTimeout(()=>{y.current=void 0,d(!1)},2e3)},children:[m&&l&&$.createPortal((0,t.jsxs)(G,{ref:h,children:[r?(0,t.jsx)(f.GreenTickIcon,{}):(0,t.jsx)(f.DuplicateIcon,{}),(0,t.jsx)(g.Text,{size:"medium",children:r?"Prompt copied!":"Copy prompt"})]}),document.body),(0,t.jsx)(T,{children:(0,t.jsx)(p.default,{alt:a,height:320,src:`/images/${i}@2x.jpg`,width:350})}),(0,t.jsxs)(M,{children:[(0,t.jsx)(P,{className:A.textStyles.annotation,children:o}),(0,t.jsx)(_.Heading,{renderAs:"h4",children:a}),(0,t.jsx)(E,{children:(0,t.jsx)(D,{children:e})})]})]})})});k.displayName="CodeGenGalleryCard";let S=a.default.div.withConfig({displayName:"CodeGenGalleryCard__CardHoverRoot",componentId:"sc-af5861ad-0"})`
  display: flex;
  width: 100%;
  position: relative;
`,T=a.default.div.withConfig({displayName:"CodeGenGalleryCard__ImageFrame",componentId:"sc-af5861ad-1"})`
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 4px;
  overflow: hidden;
  background: ${({theme:e})=>e.colors.WHITE};
  box-shadow:
    0 0 0 1px ${({theme:e})=>e.highlightColor10},
    0 8px 24px rgba(2, 2, 27, 0.12);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top left;
    display: block;
  }
`,M=a.default.div.withConfig({displayName:"CodeGenGalleryCard__Content",componentId:"sc-af5861ad-2"})`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,P=a.default.div.withConfig({displayName:"CodeGenGalleryCard__ContentType",componentId:"sc-af5861ad-3"})`
  font-size: ${({theme:e})=>e.fontSize.EXTRA_SMALL};
  color: ${({theme:e})=>e.palette.fg1200};
  background-color: ${({theme:e})=>e.palette.bg300};
  border: 1px solid ${({theme:e})=>e.palette.fg800};
  padding: 1px 4px;
  border-radius: 1px;
  align-self: flex-start;
  margin-bottom: 12px;
`,E=a.default.div.withConfig({displayName:"CodeGenGalleryCard__Metadata",componentId:"sc-af5861ad-4"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,D=(0,a.default)(g.Text).attrs({size:"default"}).withConfig({displayName:"CodeGenGalleryCard__MetadataRow",componentId:"sc-af5861ad-5"})`
  margin: 0;
`,G=a.default.div.withConfig({displayName:"CodeGenGalleryCard__CopyToClipboardTooltip",componentId:"sc-af5861ad-6"})`
  ${({theme:e})=>e.popover};
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 10000;
  border-radius: 4px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  white-space: nowrap;
  will-change: transform;

  p {
    color: ${({theme:e})=>e.fontColor.LOUD};
  }
`,B=(0,a.default)(N.Card).attrs({effect:"glass"}).withConfig({displayName:"CodeGenGalleryCard__AppCard",componentId:"sc-af5861ad-7"})`
  && {
    padding: 12px;
    gap: 12px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
`,F=[{title:"Revenue (or any KPI) command center",imgPath:"app-builder/gen-app-revenue-command-center",type:"Dashboard",bestFor:"Weekly business reviews where leadership wants the full story on one screen",prompt:`Build a command-center dashboard for a single primary KPI.

Use what you know about my data, my workspace, and the projects I've built
before to pick the most important business metric to anchor on — revenue,
MRR, signups, leads, units sold, tickets resolved, anything that accumulates
over time and matters to leadership. Make a confident choice based on
context and only ask me if there's genuine ambiguity you can't resolve.

The dashboard should feature:
- A pacing chart showing actual vs. target over the current period, with a
  draggable horizontal reference line for the target. The user should be able
  to grab and move the line to test scenarios.
- A second reference line for last period's average, dashed.
- A breakdown of the primary KPI by the most useful categorical dimension in
  the data (region, segment, channel, product — you decide based on what's
  available).
- A clickable annotation layer on the main chart so the user can attach notes
  to specific dates (launches, outages, anomalies). Annotations persist as
  markers on the chart.
- KPI tiles for period-to-date total, % to target, and pace vs. last period.

For target value and pacing period (month / quarter / year), infer reasonable
defaults from my data and context. Only ask if you truly can't tell.

Before declaring done, verify every interactive element. Click each input
(reference line drag, dropdowns, annotation layer, date filters) and confirm
the chart updates correctly with no console errors. Test default load, min and
max values, and combinations. Don't tell me it's ready until this passes.`},{title:"Lifecycle explorer with global time grain",imgPath:"app-builder/gen-app-lifecycle-explorer",type:"Editorial style",bestFor:"Lifecycle deep dives where every chart and table needs to roll up to the same period",prompt:`Build a pastel editorial-style data app with a cohort lifecycle explorer that tells the story of who stays, how long, and how that varies across the customer base.

Pick a sensible "first event" to define a cohort (signup, first purchase, first product event — whatever fits the data) and a "continued activity" event that signals retention. Use confident defaults; only ask if there's real ambiguity.

Aesthetic — editorial, not dashboard:

Single-column magazine-feature layout with a pastel washed background (cream / blush / lavender), not white
Serif headlines, clean sans body, generous whitespace
Prose paragraphs introduce and frame each visualization — charts live inside the story, not in a grid of widgets
Frame chart titles around what stays, holds, sticks, or plateaus — not loss, decay, or fall-off. Stay analytical, not saccharine
Controls sit in a quiet sticky strip up top — the story is the focus
One global control strip that re-rolls everything below:

Time-grain selector (Day / Week / Month / Quarter) — every title, axis, unit label, and number format rewrites itself
Cohorts on/after date picker (applied to the bucketed cohort start)
Show up to N periods out
Min cohort size threshold (default ~100) — cohorts below it are hidden entirely
Customer multi-select and segment multi-select
Group by toggle: Cohort period | Segment — flips rows in the triangle, lines in the curves, and rollups in the KPIs and table
Visualizations, in narrative order:

Cohort retention triangle (heatmap) with a pastel sequential ramp — darker = more of the cohort still active; dashed empty cells where a cohort isn't yet old enough
Retention curves below the triangle, full width
LTV KPI strip
Summary table
Handle empty states and sparse/degenerate cases gracefully. Anchor "today" to the latest period in the data, not the real calendar.

Verify every interactive element before declaring done — change every control, combine filters, flip the group-by, check the browser console.`},{title:"Forecast vs. actuals storyboard",imgPath:"app-builder/gen-app-forecast-vs-actuals",type:"Interactive / planning",bestFor:"Board-ready reporting where you need to explain why you missed (or beat) the number",prompt:`Build a data app with a forecast vs. actuals storyboard that helps leadership understand performance gaps.

Use what you know about my data and workspace to identify a time-series metric to track and a forecast to compare against. If no forecast exists in the data, fit one from history and label it as model-generated. Look for events or annotations — anything dated and labeled — and use it. Make confident defaults; only ask if truly ambiguous.

The app should feature:

A main chart showing forecast vs. actuals as clearly distinct lines (actuals in a strong dark color, forecast in a contrasting color; dashed for out-of-sample).
Shaded confidence bands around the forecast at 80% and 95%, kept subtle so they don't dominate.
Green fill between the actuals and forecast lines where actuals beat forecast (celebrate), and red fill where actuals fell below (needs attention).
Vertical event annotations on the chart with hover tooltips, plus the ability to filter event categories on/off.
Two separate tables for beats and shortfalls:
"Biggest beats" — top 5 days where actuals most exceeded forecast (positive, framed as wins).
"Biggest shortfalls" — top 5 days where actuals most underperformed forecast (negative, framed as needing attention).
Each table should show whether the day fell outside the 95% prediction band so the reader can distinguish signal from noise.
The tables must be reactive / responsive: stack vertically on narrow viewports so they never get squished side-by-side, and only sit side-by-side when the screen is wide enough for both to remain fully readable.
Forecast accuracy stats: MAPE, % of days inside 80% band, % inside 95%.
Before declaring done, verify every interactive element. Click each event-type filter and confirm annotations toggle on the chart. Hover events to confirm tooltips render. Test default load, min and max date ranges, and filter combinations. Check the browser console for errors. Don't tell me it's ready until this passes.`},{title:"What-if scenario simulator",imgPath:"app-builder/gen-app-what-if",type:"Interactive / planning",bestFor:'Planning meetings where someone asks "but what if we changed X by 5%"',prompt:`Build a data app with a what-if simulator where the user moves sliders on key inputs and sees
projected outputs change live.

Use what you know about my data and workspace to propose 3-4 input variables
and 2-3 output metrics worth modeling. Pick relationships that fit my domain.
Examples:
- Pricing: inputs = price change %, discount depth, ad spend; outputs =
  revenue, margin, units
- SaaS growth: inputs = trial conversion %, churn %, signup rate; outputs =
  MRR, customer count, runway
- Support ops: inputs = headcount, avg handle time, ticket volume growth;
  outputs = backlog, response time, cost
- Marketing: inputs = budget, channel mix, CPM; outputs = leads, CAC, pipeline

If you can estimate input-output relationships from history (a simple
regression), do so and proceed. Only ask for assumptions if the data genuinely
can't support a reasonable estimate.

The app should feature:
- 3-4 sliders for the inputs you propose, with sensible default ranges.
- A time horizon selector (1 / 3 / 6 / 12 periods).
- A baseline-vs-scenario comparison chart that updates live as sliders move.
- Result tiles for each output showing delta vs. baseline, both absolute and %.
- A "Save scenario" button that snapshots current settings + outputs to a
  list, so the user can compare 3-4 scenarios side by side.
- A breakdown table showing which segments gain or lose under the scenario.

Before declaring done, verify every interactive element. Drag every slider
through its full range and confirm the chart, KPI tiles, and breakdown table
all update live. Click "Save scenario" multiple times and confirm scenarios
accumulate correctly. Test default load, slider min and max, and combinations.
Check the browser console for errors. Don't tell me it's ready until this
passes.`},{title:"Animated network or flow visualization",imgPath:"app-builder/gen-app-flow-viz",type:"D3 visualization",bestFor:"Showing relationships, paths, or movement that a bar chart can't capture",prompt:`Build a data app with a custom D3 visualization with rich animation that shows relationships
or flow in my data.

Use what you know about my data and workspace to find the most interesting
"things connecting to other things" pattern. Good candidates:
- Customer journey: how users move from one product/page/state to another
  (Sankey diagram with animated flow)
- Account relationships: companies connected by shared contacts, deals, or
  parent-subsidiary structure (force-directed network)
- Geographic flow: orders, shipments, or migrations between regions
  (animated arc map or chord diagram)
- Funnel paths: how users progress through stages, including loops and
  drop-offs (animated Sankey)
- Co-occurrence: products bought together, tags used together, topics
  discussed together (force-directed network with edge weights)

Pick the strongest fit confidently. Only surface options if two patterns are
genuinely tied for best.

The visualization should feature:
- Smooth entry animations when the page loads — nodes fade and scale in,
  edges draw themselves in sequence.
- Live transitions when the user changes a filter or time range — nodes
  reposition smoothly, never jump.
- Hover interactions: hovering a node should highlight its connections and
  fade unrelated elements. Tooltips should appear with relevant detail.
- For force-directed networks: physics simulation with draggable nodes.
- For Sankey/flow: animated particles or pulses traveling along the paths to
  show movement.
- A timeline scrubber or play/pause control if the data has a time dimension —
  hit play and watch the network evolve.

Use D3 directly (not a wrapper library). The animation quality is the whole
point of this app, so spend the effort there.

Before declaring done, verify every interactive element. Hover nodes to
confirm highlight states. Drag nodes (if force-directed) to confirm physics.
Click filters and confirm transitions are smooth, not jumpy. Play through any
timeline. Test default load and edge cases (empty filter, single node). Check
the browser console for errors. Don't tell me it's ready until this passes.`},{title:"Sonify your metric",imgPath:"app-builder/gen-app-sonify",type:"Audio / playful",bestFor:"Conference demos, executive offsites, the moment in the keynote where you need a laugh",prompt:`Build a sonification app that turns a time-series metric into music using
Tone.js, plus a few visual extras to make the experience feel rich.

Use what you know about my data and workspace to pick a metric with 12-24
periods of history and a clear up-and-down pattern: revenue, signups, churn,
MRR, traffic, ticket volume. Aggregate to the right grain (months usually
work best). Make the call confidently — only ask if multiple metrics are
genuinely equally compelling.

Audio mapping:
- Higher value = higher pitch, mapped to a musical scale (C major across two
  octaves is a safe default).
- Faster period-over-period growth = faster tempo.
- Larger absolute delta = louder note.
- Positive growth = major chord, negative growth = minor chord.

The app should feature:
- A timeline of period tiles (one per month/week/quarter), each with the
  period label, value, and a play button. Tiles light up as they play.
- A big "Play full series" button that sequences all periods back to back.
- A live audio visualizer (animated bars or waveform) that pulses with the
  audio.
- A "Best period" and "Worst period" callout that auto-detects extremes and
  lets the user play just those highlights.
- Three instrument presets to pick from (piano, synth pad, marimba) so the
  same data can sound completely different.
- A tempo override slider so the user can speed up or slow down the playback.
- A "share" button that copies a permalink or generates a shareable summary
  ("Q3 sounded like this 🎵").

Before declaring done, verify every interactive element. Click each period
tile and confirm audio plays. Click "Play full series" and confirm the full
sequence runs without skipping. Switch between all three instruments mid-
playback. Drag the tempo slider through its range. Click the "Best" and
"Worst" callouts. Test default load. Check the browser console for errors —
audio bugs often show up as warnings before they break. Don't tell me it's
ready until this passes.`}],R=s.memo(()=>(0,t.jsxs)(Q,{...d.ANIMATIONS.SimpleFadeIn,children:[(0,t.jsxs)(U,{children:[(0,t.jsxs)(z,{children:[(0,t.jsx)(h.GradientHeader,{renderAs:"h2",styleAs:"h1",children:"Prompt, build, share"}),(0,t.jsx)(g.Text,{size:"large",children:"Hex's agent can build entirely custom generative apps (in beta), backed by your organization's context. Confidently share using Hex's built-in permissions."}),(0,t.jsxs)(H,{children:[(0,t.jsx)(m.Button,{href:x.DOCS_LINKS.GenerativeApps,icon:(0,t.jsx)(j.IconDocs,{}),stylez:"loud",text:"Read the docs"}),(0,t.jsx)(m.Button,{href:x.SIGNUP_LINK,icon:(0,t.jsx)(f.ArrowRightIcon,{}),iconPos:"right",text:"Get started with Hex"})]})]}),(0,t.jsx)(q,{children:(0,t.jsx)(p.default,{alt:"Chart cell",height:868,src:"/images/app-builder/code-gen-app-builder@2x.jpg",width:1440})})]}),(0,t.jsxs)(O,{id:"gallery",children:[(0,t.jsxs)(W,{children:[(0,t.jsx)(_.Heading,{renderAs:"h3",children:"Not sure what to build?"}),(0,t.jsx)(g.Text,{children:"Here are six copy-and-paste prompts to build stunning generative data apps in Hex."})]}),(0,t.jsx)(K,{children:F.map(e=>(0,t.jsx)(k,{...e},e.title))})]})]}));R.displayName="CodeGenGallery";let Q=(0,a.default)(i.motion.div).withConfig({displayName:"CodeGenGallery__Wrapper",componentId:"sc-764163e2-0"})`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 1520px;
  width: 100%;
  margin: 0 auto;
  padding-top: ${(0,L.generateFluidPxScale)(100,150)};
  padding-left: ${(0,L.generateFluidPxScale)(30,40)};
  padding-right: ${(0,L.generateFluidPxScale)(30,40)};
  padding-bottom: ${(0,L.generateFluidPxScale)(50,100)};
  gap: ${(0,L.generateFluidPxScale)(50,100)};
  z-index: 1;
`,U=a.default.div.withConfig({displayName:"CodeGenGallery__TopSection",componentId:"sc-764163e2-1"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 50px;
`,z=a.default.div.withConfig({displayName:"CodeGenGallery__Header",componentId:"sc-764163e2-2"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  gap: 10px;
  max-width: 800px;
`,H=a.default.div.withConfig({displayName:"CodeGenGallery__MiscActionsLinkWrapper",componentId:"sc-764163e2-3"})`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    flex-direction: column;
  }
`,O=a.default.div.withConfig({displayName:"CodeGenGallery__GridSection",componentId:"sc-764163e2-4"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  padding: 0 ${(0,L.generateFluidPxScale)(30,40)};
  max-width: ${({theme:e})=>e.maxWidth.PAGE};
  margin: 0 auto;
  scroll-margin-top: 100px;
`,W=a.default.div.withConfig({displayName:"CodeGenGallery__SubHeader",componentId:"sc-764163e2-5"})`
  display: flex;
  align-items: baseline;
  gap: 20px;
  width: 100%;

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
    text-align: center;
  }
`,K=a.default.div.withConfig({displayName:"CodeGenGallery__Grid",componentId:"sc-764163e2-6"})`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  width: 100%;

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`,q=a.default.div.withConfig({displayName:"CodeGenGallery__HeroImage",componentId:"sc-764163e2-7"})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  position: relative;

  background: white;
  box-shadow:
    -1px 0px 0px rgba(2, 2, 27, 0.07),
    1px 0px 0px rgba(2, 2, 27, 0.07),
    0px -1px 0px rgba(2, 2, 27, 0.07),
    0px 1px 0px rgba(2, 2, 27, 0.07),
    0px 54px 74px rgba(1, 1, 27, 0.3),
    0px 14px 74px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  overflow: hidden;

  min-width: 600px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    align-self: flex-end;
  }

  img {
    display: block;
    flex: none;
    width: 100%;
    height: auto;
  }
`;var V=e.i(864220),X=e.i(676649);let Y=(0,a.default)(i.motion.div).withConfig({displayName:"FeaturesTout__Wrapper",componentId:"sc-27927faf-0"})`
  position: relative;
  display: flex;
  width: 100%;
  border-top: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    flex-direction: column;
  }
`,Z=a.default.div.withConfig({displayName:"FeaturesTout__Inner",componentId:"sc-27927faf-1"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 100px 40px 120px;
  max-width: ${({theme:e})=>e.maxWidth.PAGE};

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    padding: 100px 40px 60px;
  }
`,J=a.default.div.withConfig({displayName:"FeaturesTout__Illustration",componentId:"sc-27927faf-2"})`
  display: flex;
  position: relative;
  flex: none;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    && {
      width: 100%;
    }
  }
`,ee=(0,a.default)(J).withConfig({displayName:"FeaturesTout__IllustrationDragDrop",componentId:"sc-27927faf-3"})`
  width: 699px;
  height: 543px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    height: 360px;
  }
`,et=(0,a.default)(V.CellIllustration).withConfig({displayName:"FeaturesTout__DragDropIllustration",componentId:"sc-27927faf-4"})`
  top: 0;
  left: 0;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    img {
      width: 525px;
    }
  }
`,ei=(0,a.default)(V.CellIllustration).withConfig({displayName:"FeaturesTout__ChartCellIllustration",componentId:"sc-27927faf-5"})`
  bottom: 0;
  right: 60px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    right: 0;

    img {
      width: 200px;
    }
  }
`,ea=(0,a.default)(J).withConfig({displayName:"FeaturesTout__IllustrationChatWithApp",componentId:"sc-27927faf-6"})`
  width: 750px;
  height: 524px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    height: 295px;
  }
`,eo=(0,a.default)(V.CellIllustration).withConfig({displayName:"FeaturesTout__ChatWithAppIllustration",componentId:"sc-27927faf-7"})`
  top: 0;
  right: 0;
  height: 100%;

  img {
    height: 100%;
  }
`,en=(0,a.default)(J).withConfig({displayName:"FeaturesTout__IllustrationExplore",componentId:"sc-27927faf-8"})`
  width: 749px;
  height: 425px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    height: 295px;
  }
`,er=(0,a.default)(V.CellIllustration).withConfig({displayName:"FeaturesTout__ExploreChartIllustration",componentId:"sc-27927faf-9"})`
  top: 0;
  left: 0;

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    left: 0;

    img {
      width: 562px;
    }
  }
`,ed=(0,a.default)(V.CellIllustration).withConfig({displayName:"FeaturesTout__ExplorePopoverIllustration",componentId:"sc-27927faf-10"})`
  top: 216px;
  left: 121px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    left: 91px;
    top: 162px;

    img {
      width: 125px;
    }
  }
`,el=(0,a.default)(J).withConfig({displayName:"FeaturesTout__IllustrationsDataFreshness",componentId:"sc-27927faf-11"})`
  width: 692px;
  height: 540px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    height: 400px;
  }
`,es=(0,a.default)(J).withConfig({displayName:"FeaturesTout__IllustrationScheduling",componentId:"sc-27927faf-12"})`
  width: 100%;

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    height: 400px;
  }
`,ep=(0,a.default)(V.CellIllustration).withConfig({displayName:"FeaturesTout__SchedulingIllustration",componentId:"sc-27927faf-13"})`
  background: transparent;
  bottom: 0;
  left: 80px;
  z-index: 2;

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    img {
      max-width: 260px;
    }
  }
`,ec=(0,a.default)(V.CellIllustration).withConfig({displayName:"FeaturesTout__SchedulingSlackIllustration",componentId:"sc-27927faf-14"})`
  border-radius: 7px;
  top: 0;
  right: 0;
  z-index: 1;

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    img {
      width: 519px;
    }
  }
`,em=(0,a.default)(J).withConfig({displayName:"FeaturesTout__IllustrationBeautifulViz",componentId:"sc-27927faf-15"})`
  width: 720px;
  height: 485px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    height: 280px;
  }
`,eu=(0,a.default)(V.CellIllustration).withConfig({displayName:"FeaturesTout__TableDisplayCellIllustration",componentId:"sc-27927faf-16"})`
  bottom: 0;
  left: 0;
  z-index: 2;

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    left: auto;
    right: -10px;

    img {
      width: 285px;
    }
  }
`,eh=(0,a.default)(V.CellIllustration).withConfig({displayName:"FeaturesTout__MapCellIllustration",componentId:"sc-27927faf-17"})`
  top: 0;
  right: 20px;
  z-index: 1;

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    top: 0;

    img {
      width: 350px;
    }
  }
`,eg=[{icon:(0,t.jsx)(f.InteractiveIcon,{}),title:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:"Drag, drop,"})," data app"]}),shouldReverse:!1,description:"Hex’s classic app builder and complete set of components make it easy to build interactive experiences.",illustration:(0,t.jsxs)(ee,{children:[(0,t.jsx)(et,{...d.ANIMATIONS.Cell,children:(0,t.jsx)(p.default,{alt:"Hex app view where a chart cell is being dragged and dropped into place.",height:410,src:"/images/app-builder/add-to-row@2x.png",style:{height:"auto"},width:699})}),(0,t.jsx)(ei,{...d.ANIMATIONS.Cell,children:(0,t.jsx)(p.default,{alt:"Chart cell",height:250,src:"/images/app-builder/chart-drag@2x.png",style:{height:"auto"},width:296})})]}),ctaText:"Learn more",link:x.DOCS_LINKS.AppBuilder},{icon:(0,t.jsx)(f.ChartIcon,{}),title:"Beautiful visualizations",shouldReverse:!0,description:"Interactive charts, tables, and maps bring your data to life— no coding required.",illustration:(0,t.jsxs)(em,{children:[(0,t.jsx)(eu,{...d.ANIMATIONS.Cell,children:(0,t.jsx)(p.default,{alt:"Table Display cell",height:250,src:"/images/home/table-display-cell@2x.png",style:{height:"auto"},width:570})}),(0,t.jsx)(eh,{...d.ANIMATIONS.Cell,children:(0,t.jsx)(p.default,{alt:"Map Display cell",height:380,src:"/images/notebooks/map-cell@2x.png",style:{height:"auto"},width:573})})]}),ctaText:"Learn more",link:x.DOCS_LINKS.ChartCells},{icon:(0,t.jsx)(f.MagicIcon,{}),shouldReverse:!1,title:(0,t.jsxs)(t.Fragment,{children:["Follow-up question? ",(0,t.jsx)("span",{children:"Just ask."})]}),description:"Hex's agent can explore, summarize, and interact with your apps, so you can get the details you need.",illustration:(0,t.jsx)(ea,{children:(0,t.jsx)(eo,{...d.ANIMATIONS.Cell,children:(0,t.jsx)(p.default,{alt:"A chart view in Explore mode",height:524,src:"/images/app-builder/chat-with-app@2x.png",style:{width:"auto"},width:750})})}),ctaText:"Learn more",link:x.DOCS_LINKS.ChatWithApp},{icon:(0,t.jsx)(f.ExploreIcon,{}),title:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:"Explore,"})," drill, filter"]}),shouldReverse:!0,description:"Hex native charts and tables automatically come ready to be drilled down, filtered, or used as a starting point for a completely new exploration.",illustration:(0,t.jsxs)(en,{children:[(0,t.jsx)(er,{...d.ANIMATIONS.Cell,children:(0,t.jsx)(p.default,{alt:"A chart view in Explore mode",height:425,src:"/images/app-builder/explore-view@2x.png",style:{height:"auto"},width:749})}),(0,t.jsx)(ed,{...d.ANIMATIONS.Cell,children:(0,t.jsx)(p.default,{alt:"A dropdown menu showing units of time",height:217,src:"/images/app-builder/explore-view-dropdown@2x.png",style:{height:"auto"},width:173})})]}),ctaText:"Learn more",link:x.DOCS_LINKS.Explore},{icon:(0,t.jsx)(f.DataRefreshIcon,{}),title:"Answers right where you need them",shouldReverse:!1,description:"Reports are always up to date with automatic upstream data syncs and scheduled runs via Slack or email.",illustration:(0,t.jsx)(el,{children:(0,t.jsxs)(es,{children:[(0,t.jsx)(ep,{...d.ANIMATIONS.Cell,children:(0,t.jsx)(p.default,{alt:"Scheduled run prompt",height:345,src:"/images/app-builder/scheduled-run@2x.png",style:{height:"auto"},width:347})}),(0,t.jsx)(ec,{...d.ANIMATIONS.Cell,children:(0,t.jsx)(p.default,{alt:"Slack app view with a scheduled run notification",height:364,src:"/images/app-builder/scheduled-run-slack@2x.png",style:{height:"auto"},width:692})})]})}),ctaText:"Learn more",link:x.DOCS_LINKS.ScheduledRuns}],ef=s.memo(()=>(0,t.jsx)(Y,{...d.ANIMATIONS.SimpleFadeIn,children:(0,t.jsx)(Z,{children:(0,t.jsx)(X.SnakedSections,{sections:eg})})}));ef.displayName="FeaturesTout";var ex=e.i(810832);let ey=(0,a.default)(i.motion.div).withConfig({displayName:"FeedbackLoopTout__Wrapper",componentId:"sc-6c748dca-0"})`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: ${({theme:e})=>e.maxWidth.PAGE};
  width: 100%;
  gap: 60px;
  margin: 0 auto;
  z-index: 1;
  padding: 80px 40px 0;

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    flex-direction: column;
    padding-bottom: 100px;
  }
`,eb=a.default.div.withConfig({displayName:"FeedbackLoopTout__Inner",componentId:"sc-6c748dca-1"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
`,ew=(0,a.default)(h.GradientHeader).attrs({renderAs:"h2"}).withConfig({displayName:"FeedbackLoopTout__StyledHeading",componentId:"sc-6c748dca-2"})`
  && {
    margin-bottom: 20px;
    max-width: 500px;
  }
`,eC=(0,a.default)(g.Text).withConfig({displayName:"FeedbackLoopTout__StyledText",componentId:"sc-6c748dca-3"})`
  margin-bottom: 30px;
  max-width: 645px;
  text-align: center;
`,ev=(0,a.default)(V.Illustrations).withConfig({displayName:"FeedbackLoopTout__Illustration",componentId:"sc-6c748dca-4"})`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    height: 300px;
  }
`,eI=(0,a.default)(ex.ProductIllustration).withConfig({displayName:"FeedbackLoopTout__ReportIllustration",componentId:"sc-6c748dca-5"})`
  top: auto;
  left: auto;
  right: auto;
  bottom: auto;

  & > div {
    border-radius: 4px 4px 0 0;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    width: 100%;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    width: 105%;

    & > div {
      border-radius: 4px;
    }

    img {
      height: 250px;
    }
  }
`,e_=(0,a.default)(ex.ProductIllustration).withConfig({displayName:"FeedbackLoopTout__CommentsIllustration",componentId:"sc-6c748dca-6"})`
  bottom: 50px;
  left: -20px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    left: -45px;

    img {
      height: 240px;
    }
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    img {
      height: 141px;
    }
  }
`,ej=(0,a.default)(ex.ProductIllustration).withConfig({displayName:"FeedbackLoopTout__ShareModalIllustration",componentId:"sc-6c748dca-7"})`
  top: 0;
  right: 120px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    right: -80px;

    img {
      height: 220px;
    }
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    img {
      height: 132px;
    }
  }
`,eL=(0,a.default)(ex.ProductIllustration).withConfig({displayName:"FeedbackLoopTout__DiffIllustration",componentId:"sc-6c748dca-8"})`
  bottom: -30px;
  right: -20px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    right: -80px;

    img {
      height: 185px;
    }
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    img {
      height: 111px;
    }
  }
`,e$=s.memo(()=>(0,t.jsxs)(ey,{...d.ANIMATIONS.SimpleFadeIn,children:[(0,t.jsxs)(eb,{children:[(0,t.jsx)(ew,{renderAs:"h2",styleAs:"h1",children:"Tighten the feedback loop"}),(0,t.jsx)(eC,{size:"large",children:"When it's time to share your masterpiece, one URL keeps everyone on the same page — literally. Edits, comments, and revisions are fast and easy with real-time multiplayer and live updates."}),(0,t.jsx)(m.Button,{href:x.INTERNAL_LINKS.ForTeams,size:"large",stylez:"loud",text:"Explore collaboration"})]}),(0,t.jsxs)(ev,{children:[(0,t.jsx)(eI,{cellLabel:"Hex app builder with a graph",hideHeader:!0,imgHeight:500,imgPath:"app-builder/app-builder-with-chart",imgWidth:919}),(0,t.jsx)(eL,{cellLabel:"Diff cell",hideHeader:!0,imgHeight:222,imgPath:"for-teams/code-diff",imgWidth:480}),(0,t.jsx)(e_,{cellLabel:"Comments popup",hideHeader:!0,imgHeight:282,imgPath:"for-teams/comment-popup",imgWidth:280}),(0,t.jsx)(ej,{cellLabel:"Share modal",hideHeader:!0,imgHeight:264,imgPath:"app-builder/share-modal",imgWidth:416})]})]}));e$.displayName="FeedbackLoopTout";let eN=(0,a.default)(i.motion.div).withConfig({displayName:"DataAppsPageContent__Wrapper",componentId:"sc-8f412dc7-0"})`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;e.s(["DataAppsPageContent",0,function({bannerData:e}){return(0,t.jsx)(r.V1GridLines,{children:(0,t.jsx)(r.V1PageWrapper,{children:(0,t.jsxs)(eN,{...d.ANIMATIONS.SimpleFadeIn,children:[(0,t.jsx)(y,{bannerData:e}),(0,t.jsx)(R,{}),(0,t.jsx)(ef,{}),(0,t.jsx)(n.SocialTout,{customerQuotes:[{author:"Nina Anderson",authorAvatarPath:"/images/headshots/nina-anderson-headshot.jpeg",authorTitle:"Head of Pre-Sales Engineering",customerName:"Infinite Lambda",logoPath:l.CUSTOMER_LOGOS_HOSTED.InfiniteLambda,quote:"Hex helped us provide a transparent and intuitive experience for the World Health Organization to make more informed decisions about how to reduce emissions."},{author:"Daniel McAuley",authorAvatarPath:"/images/headshots/daniel-mcauley-headshot.jpg",authorTitle:"Data Lead",customerName:"Inventa",logoPath:l.CUSTOMER_LOGOS_HOSTED.Inventa,quote:"Hex enables us to deploy customer-facing analytics in days rather than weeks or months. Hex gives us super powers."}]}),(0,t.jsx)(e$,{}),(0,t.jsx)(o.OutroTout,{})]})})})}],310869)},214279,364299,108266,245883,e=>{"use strict";var t=e.i(843476),i=e.i(271645),a=e.i(997053),o=e.i(430388),n=e.i(193594);let r=a.default.div.withConfig({displayName:"CellStyles__Card",componentId:"sc-9508fabf-0"})`
  background: ${({theme:e})=>e.colors.WHITE};
  box-shadow: 0 4px 12px ${({theme:e})=>(0,n.rgba)(e.colors.BLACK,.1)};
  border-radius: 3px;
  color: ${({theme:e})=>e.colors.BLACK};
  padding: 15px;
  overflow: hidden;
  min-width: 0;
`,d=a.default.div.withConfig({displayName:"CellStyles__OutlinedButton",componentId:"sc-9508fabf-1"})`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1px;
  padding: 0 10px;
  height: 30px;
  gap: 6px;
  background-color: ${({theme:e})=>e.highlightColor20};
  box-shadow: inset 0 0 0 1px ${({theme:e})=>e.highlightColor40};
  cursor: pointer;
  transition: background-color ${({theme:e})=>e.animation.DURATION}
    ${({theme:e})=>e.animation.EASING};

  &:hover {
    background-color: ${({theme:e})=>e.highlightColor40};
  }

  &:active {
    background-color: ${({theme:e})=>e.highlightColor50};
  }

  ${({$small:e})=>e&&a.css`
      height: 24px;
      gap: 6px;
      padding: 0 5px;
    `}

  ${({$minimal:e})=>e&&a.css`
      background-color: transparent;
      box-shadow: none;

      &:hover {
        background-color: ${({theme:e})=>e.highlightColor20};
      }

      &:active {
        background-color: ${({theme:e})=>e.highlightColor40};
      }
    `}

  ${({$active:e,theme:t})=>e&&a.css`
      background-color: ${t.highlightColor20};
    `}

    ${({$disabled:e})=>e&&a.css`
      opacity: 0.4;
      pointer-events: none;
    `}
`,l=a.default.div.withConfig({displayName:"CellStyles__MinimalButton",componentId:"sc-9508fabf-2"})`
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  border-radius: ${({theme:e})=>e.borderRadius};
  padding: 0 10px;
  height: 28px;
  color: ${({theme:e})=>e.appUI.fontColor.DEFAULT};
  line-height: 20px;
  cursor: pointer;
  transition:
    background-color ${({theme:e})=>e.animation.DURATION}
      ${({theme:e})=>e.animation.EASING},
    color ${({theme:e})=>e.animation.DURATION}
      ${({theme:e})=>e.animation.EASING};

  svg {
    color: ${({theme:e})=>e.appUI.fontColor.MUTED};
  }

  &:hover {
    background-color: ${({theme:e})=>(0,n.rgba)(e.colors.BLACK,.05)};
    color: ${({theme:e})=>e.colors.BLACK};
  }

  ${({$selected:e,theme:t})=>e&&a.css`
      background-color: ${(0,n.rgba)(t.colors.BLACK,.1)};
      color: ${t.colors.BLACK};

      &:hover {
        background-color: ${(0,n.rgba)(t.colors.BLACK,.1)};
      }
    `};

  ${({$small:e,theme:t})=>e&&a.css`
      padding: 0 5px;
      height: 20px;
      color: ${t.appUI.fontColor.MUTED};
    `};
`;a.default.div.withConfig({displayName:"CellStyles__SimpleButton",componentId:"sc-9508fabf-3"})`
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: space-between;
  gap: 3px;
  height: 24px;
  padding: 0 7px;
  line-height: initial;
  font-size: ${({theme:e})=>e.fontSize.SMALL};
  color: ${({theme:e})=>e.appUI.fontColor.MUTED};
  box-shadow:
    0 0 0 1px ${({theme:e})=>e.appUI.borderColor.DEFAULT},
    0 1px 2px 1px ${({theme:e})=>e.appUI.borderColor.DEFAULT};
  border-radius: 1px;

  svg {
    color: ${({theme:e})=>e.appUI.fontColor.MUTED};
  }

  ${({$isVar:e,theme:t})=>e&&a.css`
      font-family: ${t.fontFamily.MONO};
      font-size: 11px;
    `}

  ${({$noPadding:e})=>e&&a.css`
      padding-left: 3px;
    `}
`;let s=a.default.div.withConfig({displayName:"CellStyles__Pill",componentId:"sc-9508fabf-4"})`
  border-radius: 2px;
  background: ${({theme:e})=>(0,n.rgba)(e.colors.LIGHT_GREEN,.2)};
  color: ${({$lightBkg:e,theme:t})=>e?t.colors.DARK_GREEN:t.colors.LIGHT_GREEN};
  padding: 2px 4px;
  font-size: ${({theme:e})=>e.fontSize.SMALL};
  line-height: 14px;
  font-family: ${({theme:e})=>e.fontFamily.MONO};
  font-size: 11px;

  ${({$color:e,$lightBkg:t,theme:i})=>"blue"===e&&a.css`
      background: ${(0,n.rgba)(i.colors.LIGHT_BLUE,.2)};
      color: ${t?i.colors.DARK_BLUE:i.colors.LIGHT_BLUE};
    `}
`;e.s(["Card",0,r,"MinimalButton",0,l,"OutlinedButton",0,d,"Pill",0,s],364299);let p=a.default.div.withConfig({displayName:"CellFooter__Wrapper",componentId:"sc-31c9c1b5-0"})`
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    color: ${({theme:e})=>e.highlightColor50};
  }
`,c=i.memo(({outputName:e,outputColor:i="green"})=>{let a=e.split(",");return(0,t.jsxs)(p,{children:[(0,t.jsx)(o.OutputArrowIcon,{}),a.map((e,a)=>(0,t.jsx)(s,{$color:i,$lightBkg:!1,children:e},a))]})});c.displayName="CellFooter",e.s(["CellFooter",0,c],214279);var m=e.i(815659),u=e.i(88653),h=e.i(991709),g=e.i(657688);let f=a.default.div.withConfig({displayName:"Avatar__Wrapper",componentId:"sc-264996e1-0"})`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  height: 30px;
  width: 30px;
  flex: none;
  overflow: hidden;
  border-radius: ${({theme:e})=>e.borderRadius};

  img {
    width: 100%;
    height: 100%;
  }
`,x=i.memo(({slug:e})=>(0,t.jsx)(f,{children:(0,t.jsx)(g.default,{alt:e,height:30,src:`/images/atreides/${e}.jpg`,width:30})}));x.displayName="Avatar";var y=e.i(846932);let b=(0,a.default)(y.motion.div).withConfig({displayName:"Popover__PopoverContainer",componentId:"sc-8c317844-0"})`
  position: relative;
  color: ${({theme:e})=>e.appUI.fontColor.DEFAULT};
  background: ${({theme:e})=>e.appUI.backgroundColor.DEFAULT};
  min-width: 0;

  background: white;
  box-shadow:
    -1px 0px 0px rgba(2, 2, 27, 0.07),
    1px 0px 0px rgba(2, 2, 27, 0.07),
    0px -1px 0px rgba(2, 2, 27, 0.07),
    0px 1px 0px rgba(2, 2, 27, 0.07),
    0px 54px 74px rgba(1, 1, 27, 0.3),
    0px 14px 74px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  &::after {
    content: '';
    display: block;
    position: absolute;

    height: 12px;
    width: 12px;
    background: ${({theme:e})=>e.appUI.backgroundColor.DEFAULT};
    border-radius: 2px;

    ${({$position:e})=>"right-top"===e&&a.css`
        right: 0;
        top: 0;
        transform: translate(40%, 50%) rotate(45deg);
      `}

    ${({$position:e})=>"top-right"===e&&a.css`
        right: 15px;
        top: 0;
        transform: translate(-40%, -50%) rotate(45deg);
      `}

      ${({$position:e})=>"top-left"===e&&a.css`
        left: 15px;
        top: 0;
        transform: translate(-40%, -50%) rotate(45deg);
      `}

      ${({$position:e})=>"right-center"===e&&a.css`
        right: 0;
        top: calc(50% - 12px);
        transform: translate(40%, 50%) rotate(45deg);
      `}

      ${({$position:e})=>"none"===e&&a.css`
        display: none;
      `}
  }
`;e.s(["PopoverContainer",0,b],108266);var w=e.i(102898);let C=(0,a.default)(b).withConfig({displayName:"CommentButton__StyledPopoverContainer",componentId:"sc-969be2d6-0"})`
  max-width: 320px;
  min-width: 250px;
`,v=a.default.div.withConfig({displayName:"CommentButton__Comments",componentId:"sc-969be2d6-1"})`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`,I=a.default.div.withConfig({displayName:"CommentButton__AddComment",componentId:"sc-969be2d6-2"})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  border-top: 1px solid ${({theme:e})=>e.appUI.borderColor.MUTED};
  padding: 5px;
`,_=(0,a.default)(l).withConfig({displayName:"CommentButton__AddCommentButton",componentId:"sc-969be2d6-3"})`
  flex: 1 1 auto;
`,j=a.default.div.withConfig({displayName:"CommentButton__Comment",componentId:"sc-969be2d6-4"})`
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${({$isReply:e})=>e&&a.css`
      padding-left: 20px;
      border-left: 1px solid ${({theme:e})=>e.appUI.borderColor.MUTED};
    `}
`,L=a.default.div.withConfig({displayName:"CommentButton__CommentTop",componentId:"sc-969be2d6-5"})`
  display: flex;
  align-items: center;
`,$=a.default.div.withConfig({displayName:"CommentButton__AvatarWrapper",componentId:"sc-969be2d6-6"})`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({theme:e})=>e.colors.LIGHT_PURPLE};
  border-radius: 50%;
  overflow: hidden;
  margin-right: 8px;

  > div {
    width: 100%;
    height: 100%;
  }
`,N=a.default.div.withConfig({displayName:"CommentButton__Name",componentId:"sc-969be2d6-7"})`
  font-weight: 500;
`,A=a.default.div.withConfig({displayName:"CommentButton__Time",componentId:"sc-969be2d6-8"})`
  font-size: ${({theme:e})=>e.fontSize.SMALL};
  color: ${({theme:e})=>e.appUI.fontColor.MUTED};
  margin-left: auto;
`,k=a.default.p.withConfig({displayName:"CommentButton__CommentBody",componentId:"sc-969be2d6-9"})``,S=a.default.div.withConfig({displayName:"CommentButton__Emojis",componentId:"sc-969be2d6-10"})`
  display: flex;
  gap: 3px;

  > div {
    display: flex;
    align-items: center;
    gap: 3px;
    padding: 0 6px 0 3px;
    border-radius: ${({theme:e})=>e.borderRadius};
    color: ${({theme:e})=>e.appUI.fontColor.MUTED};
    font-size: ${({theme:e})=>e.fontSize.SMALL};
    border: 1px solid ${({theme:e})=>e.appUI.borderColor.MUTED};
  }
`,T=[{image:(0,t.jsx)(x,{slug:"lady"}),name:"Jessica",time:"12 min ago",content:"We should refactor this to use the new rollup table to improve performance.",emojis:[(0,t.jsx)("span",{className:w.default.emojiGlyph,children:"➕"},"plus-sign"),(0,t.jsx)("span",{className:w.default.emojiGlyph,children:"💯"},"hundred")]},{image:(0,t.jsx)(x,{slug:"duncan"}),name:"Duncan",time:"11 min ago",isReply:!0,content:"Great idea. I'll handle this on the next pass.",emojis:[(0,t.jsx)("span",{className:w.default.emojiGlyph,children:"👍"},"thumbs-up")]}],M=i.memo(({showCommentCount:e=!1,disabled:a=!1,popupOverride:n})=>{let[r,l]=(0,i.useState)(!1),s=n??r,p=(0,i.useCallback)(()=>{void 0!==n||a||l(e=>!e)},[a,n]);return(0,t.jsx)(m.Popover,{align:"center",containerStyle:{zIndex:"99999"},content:(0,t.jsx)(P,{arrowPosition:"right-center"}),isOpen:s,padding:10,positions:["left"],onClickOutside:p,children:(0,t.jsxs)(d,{$active:s,$disabled:!s,$minimal:!0,$small:!0,onClick:p,children:[(0,t.jsx)(o.CommentIcon,{})," ",e?T.length:null]})})});M.displayName="CommentButton";let P=i.memo(({arrowPosition:e})=>(0,t.jsx)(u.AnimatePresence,{children:(0,t.jsxs)(C,{$position:e,...h.ANIMATIONS.Popover,children:[(0,t.jsx)(v,{children:T.map((e,i)=>(0,t.jsxs)(j,{$isReply:e.isReply,children:[(0,t.jsxs)(L,{children:[(0,t.jsx)($,{children:e.image}),(0,t.jsx)(N,{children:e.name}),(0,t.jsx)(A,{children:e.time})]}),(0,t.jsx)(k,{children:e.content}),e.emojis&&e.emojis.length>0&&(0,t.jsx)(S,{children:e.emojis.map((e,i)=>(0,t.jsxs)("div",{children:[e," 1"]},i))})]},i))}),(0,t.jsx)(I,{children:(0,t.jsxs)(_,{children:[(0,t.jsx)(o.PlusIcon,{}),"Add comment"]})})]})}));P.displayName="CommentButtonPopover";let E=a.default.div.withConfig({displayName:"CellHeader__CellLabel",componentId:"sc-ff52df98-0"})`
  color: ${({theme:e})=>e.fontColor.DEFAULT};
  font-size: ${({theme:e})=>e.fontSize.SMALL};
  line-height: initial;
  opacity: 0.5;
`,D=a.default.div.withConfig({displayName:"CellHeader__CellActions",componentId:"sc-ff52df98-1"})`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 3px;
`,G=a.default.div.withConfig({displayName:"CellHeader__Header",componentId:"sc-ff52df98-2"})`
  display: flex;
  align-items: center;
  height: 24px;

  ${({$style:e})=>"floating"===e&&a.css`
      position: absolute;
      left: calc(100% + 5px);
      flex-direction: column;

      ${E} {
        display: none;
      }

      ${D} {
        flex-direction: column-reverse;
      }
    `}
`,B=i.memo(({commentPopupOverride:e,label:i,disabled:a=!0,headerStyle:n="top",showCommentCount:r=!1,hideHeaderActions:l=!1})=>(0,t.jsxs)(G,{$style:n,children:[(0,t.jsx)(E,{children:i}),!l&&(0,t.jsxs)(D,{children:[(0,t.jsx)(M,{disabled:a,popupOverride:e,showCommentCount:r}),(0,t.jsx)(d,{$disabled:a,$minimal:!0,$small:!0,children:(0,t.jsx)(o.AppBuilderIcon,{})}),(0,t.jsx)(d,{$active:!0,$disabled:a,$minimal:!0,$small:!0,children:(0,t.jsx)(o.AutoRunIcon,{})})]})]}));B.displayName="CellHeader",e.s(["CellHeader",0,B],245883)},810832,e=>{"use strict";var t=e.i(843476),i=e.i(271645),a=e.i(846932),o=e.i(657688),n=e.i(997053),r=e.i(991709),d=e.i(214279),l=e.i(245883);let s=(0,n.default)(a.motion.div).withConfig({displayName:"ProductIllustration__Wrapper",componentId:"sc-3d29e619-0"})`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: absolute;
  z-index: 2;
`,p=n.default.div.withConfig({displayName:"ProductIllustration__Inner",componentId:"sc-3d29e619-1"})`
  display: flex;
  align-items: flex-start;
  background: white;
  box-shadow:
    -1px 0px 0px rgba(2, 2, 27, 0.07),
    1px 0px 0px rgba(2, 2, 27, 0.07),
    0px -1px 0px rgba(2, 2, 27, 0.07),
    0px 1px 0px rgba(2, 2, 27, 0.07),
    0px 54px 74px rgba(1, 1, 27, 0.3),
    0px 14px 74px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  overflow: hidden;

  img {
    flex: none;
  }
`,c=i.memo(({cellLabel:e,commentPopupOverride:i=!1,className:a,imgHeight:n,imgPath:c,imgWidth:m,outputName:u,outputColor:h,showCommentCount:g=!1,hideHeader:f=!1,hideHeaderActions:x=!1})=>(0,t.jsxs)(s,{...r.ANIMATIONS.Cell,className:a,children:[!f&&(0,t.jsx)(l.CellHeader,{commentPopupOverride:i,disabled:!0,hideHeaderActions:x,label:e,showCommentCount:g}),(0,t.jsx)(p,{children:(0,t.jsx)(o.default,{alt:e,height:n,src:`/images/${c}@2x.png`,width:m})}),u&&(0,t.jsx)(d.CellFooter,{outputColor:h,outputName:u})]}));c.displayName="ProductIllustration",e.s(["ProductIllustration",0,c])},316983,e=>{"use strict";var t=e.i(843476),i=e.i(271645),a=e.i(997053),o=e.i(537193),n=e.i(598043);let r=a.default.a.withConfig({displayName:"AnnouncementPillLink__Root",componentId:"sc-3e6e3317-0"})`
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
`,d=a.default.span.withConfig({displayName:"AnnouncementPillLink__Announcement",componentId:"sc-3e6e3317-1"})`
  display: flex;
  align-items: center;
  gap: 5px;
  padding-right: 10px;
  font-size: ${({theme:e})=>e.fontSize.SMALL};
  color: ${({theme:e})=>e.palette.fg1200};
  font-weight: ${({theme:e})=>e.fontWeight.LIGHT};
  line-height: 1;
`,l=a.default.span.withConfig({displayName:"AnnouncementPillLink__InnerPill",componentId:"sc-3e6e3317-2"})`
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
`,s=a.default.span.withConfig({displayName:"AnnouncementPillLink__IconPill",componentId:"sc-3e6e3317-3"})`
  border-radius: 999px;

  > svg {
    display: block;
  }
`,p=a.default.span.withConfig({displayName:"AnnouncementPillLink__PillLabel",componentId:"sc-3e6e3317-4"})`
  font-size: ${({theme:e})=>e.fontSize.SMALL};
  font-weight: ${({theme:e})=>e.fontWeight.BOLD};
  line-height: 1;
`;function c(){return(0,t.jsx)("svg",{fill:"none",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{clipRule:"evenodd",d:"M9.11611 8.00001L5.46967 11.6465L6.17677 12.3536L10.5303 8.00001L6.17677 3.64645L5.46967 4.35356L9.11611 8.00001Z",fill:"currentColor",fillRule:"evenodd"})})}let m=i.memo(({subCopy:e,className:i,icon:a,pillLabel:m,to:u})=>(0,t.jsxs)(r,{className:i,href:u,onClick:()=>{(0,o.trackAnnouncementPillClicked)((0,n.reactNodeToPlainTextNormalized)(m),u)},children:[(0,t.jsxs)(l,{children:[(0,t.jsx)(s,{children:a}),(0,t.jsx)(p,{children:m})]}),e&&(0,t.jsxs)(d,{children:["string"==typeof e?(0,t.jsx)("span",{children:e}):e,(0,t.jsx)(c,{})]})]}));m.displayName="AnnouncementPillLink",e.s(["AnnouncementPillLink",0,m])},939808,e=>{"use strict";var t=e.i(843476),i=e.i(271645),a=e.i(997053),o=e.i(430388),n=e.i(785191),r=e.i(650617);let d=i.memo(({logoPath:e,customerName:i,quote:a,authorAvatarPath:n,author:d,authorTitle:h})=>(0,t.jsx)(l,{children:(0,t.jsxs)(s,{children:[e&&(0,t.jsx)(m,{children:"string"==typeof e?(0,t.jsx)("img",{alt:i||"customer logo",loading:"lazy",src:e}):e}),(0,t.jsxs)(p,{children:[(0,t.jsx)(c,{children:(0,t.jsx)(o.QuoteIcon,{})}),(0,t.jsxs)("blockquote",{children:['"',a,"”"]})]}),d&&(0,t.jsxs)(u,{children:[n&&(0,t.jsx)("img",{alt:d,loading:"lazy",src:n}),(0,t.jsxs)(r.Text,{children:[d,(h||i)&&(0,t.jsxs)("span",{children:["  ",h&&`${h} `,i&&(0,t.jsxs)(t.Fragment,{children:["at ",i]})]})]})]})]})}));d.displayName="CustomerQuoteCard";let l=(0,a.default)(n.Card).attrs({effect:"glass"}).withConfig({displayName:"CustomerQuoteCard__Wrapper",componentId:"sc-5e534bf5-0"})`
  && {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    padding: 38px 45px;
    height: 100%;
  }
`,s=a.default.div.withConfig({displayName:"CustomerQuoteCard__Quote",componentId:"sc-5e534bf5-1"})`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  gap: 24px;
  line-height: 1.35;
  opacity: 1;
  width: 100%;
`,p=a.default.div.withConfig({displayName:"CustomerQuoteCard__QuoteTextWrapper",componentId:"sc-5e534bf5-2"})`
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
`,c=a.default.div.withConfig({displayName:"CustomerQuoteCard__QuoteLine",componentId:"sc-5e534bf5-3"})`
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
`;e.s(["CustomerQuoteCard",0,d])},480985,e=>{"use strict";var t=e.i(843476),i=e.i(271645),a=e.i(846932),o=e.i(997053),n=e.i(706736),r=e.i(288839),d=e.i(991709),l=e.i(665419),s=e.i(785191),p=e.i(258591),c=e.i(650617),m=e.i(812488);let u=i.memo(({actions:e,className:a,title:s,copy:p,orientation:c="vertical"})=>{let u=(0,o.useTheme)(),C=(0,r.default)(u.mediaQueryString.SMALL)?"vertical":c;return(0,t.jsxs)(h,{...d.ANIMATIONS.SimpleFadeIn,className:a,children:[(0,t.jsx)(m.TronDivider,{}),(0,t.jsx)(g,{children:(0,t.jsxs)(f,{$orientation:C,children:[(0,t.jsxs)(x,{$orientation:C,children:[(0,t.jsx)(y,{renderAs:"h2",children:s||"Questions? Talk to us"}),(0,t.jsx)(b,{size:"large",children:p||"Get in touch with us to see a demo or find out which plan is right for you."})]}),e?(0,t.jsx)(w,{children:e.map((e,a)=>(0,t.jsx)(i.Fragment,{children:e},a))}):(0,t.jsx)(n.Button,{href:l.INTERNAL_LINKS.RequestADemo,size:"large",stylez:"loud",text:"Contact Sales"})]})})]})});u.displayName="OutroTout";let h=(0,o.default)(a.motion.div).withConfig({displayName:"OutroTout__Wrapper",componentId:"sc-fce71882-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
`,g=(0,o.default)(a.motion.div).withConfig({displayName:"OutroTout__Inner",componentId:"sc-fce71882-1"})`
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
`,f=(0,o.default)(s.Card).withConfig({displayName:"OutroTout__TopCard",componentId:"sc-fce71882-2"})`
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
`,y=(0,o.default)(p.Heading).withConfig({displayName:"OutroTout__StyledHeading",componentId:"sc-fce71882-4"})`
  text-wrap: balance;
`,b=(0,o.default)(c.Text).withConfig({displayName:"OutroTout__StyledText",componentId:"sc-fce71882-5"})`
  text-wrap: balance;
`,w=o.default.div.withConfig({displayName:"OutroTout__Actions",componentId:"sc-fce71882-6"})`
  display: flex;
  gap: 15px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MOBILE}) {
    flex-direction: column;
    width: 100%;
  }
`;e.s(["OutroTout",0,u])},253928,e=>{"use strict";var t=e.i(843476),i=e.i(271645),a=e.i(846932),o=e.i(997053),n=e.i(991709),r=e.i(939808),d=e.i(657688),l=e.i(637804),s=e.i(430388),p=e.i(258591),c=e.i(650617);let m=o.default.div.withConfig({displayName:"G2SocialProofCard__Wrapper",componentId:"sc-95f60257-0"})`
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
`,g=o.default.div.withConfig({displayName:"G2SocialProofCard__CardCopy",componentId:"sc-95f60257-3"})`
  display: flex;

  img {
    max-height: 35px;
    object-fit: contain;
  }
`,f=o.default.span.withConfig({displayName:"G2SocialProofCard__CheckThemOutLinkInline",componentId:"sc-95f60257-4"})`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`,x=i.memo(({trackingLabel:e})=>(0,t.jsxs)(m,{children:[(0,t.jsx)(u,{children:(0,t.jsx)(d.default,{alt:"Three G2 badges received by Hex for High Performer, Best Support, and Momentum Leader.",height:627,src:"/images/g2-awards.svg",style:{height:"auto"},width:838})}),(0,t.jsxs)(h,{children:[(0,t.jsx)(p.Heading,{renderAs:"h3",children:"Users love Hex"}),(0,t.jsx)(g,{children:(0,t.jsxs)(c.Text,{children:["Rated on G2 as an industry leader based on customer reviews."," ",(0,t.jsx)(l.SiteLink,{href:"https://www.g2.com/products/hex-technologies/reviews",trackingLabel:e,children:(0,t.jsxs)(f,{children:["Check them out",(0,t.jsx)(s.ArrowRightIcon,{})]})})]})})]})]}));x.displayName="G2SocialProofCard";let y=i.memo(({includeG2Proof:e=!1,customerQuotes:i,className:a,g2TrackingLabel:o})=>(0,t.jsx)(b,{...n.ANIMATIONS.SimpleFadeIn,className:a,children:(0,t.jsxs)(w,{children:[e?(0,t.jsx)(x,{trackingLabel:o}):null,i.map((e,i)=>(0,t.jsx)(r.CustomerQuoteCard,{...e},i))]})}));y.displayName="SocialTout";let b=(0,o.default)(a.motion.div).withConfig({displayName:"SocialTout__Wrapper",componentId:"sc-b502cc5e-0"})`
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
`,w=o.default.div.withConfig({displayName:"SocialTout__Inner",componentId:"sc-b502cc5e-1"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  margin: 0 auto;
  max-width: ${({theme:e})=>e.maxWidth.PAGE};

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    flex-direction: column;
  }
`;e.s(["SocialTout",0,y],253928)},134700,e=>{"use strict";var t=e.i(843476),i=e.i(997053),a=e.i(739876),o=e.i(581444);let n=(0,i.default)(o.LayoutSubgrid).withConfig({displayName:"V1PageWrapper__V1Subgrid",componentId:"sc-cf85dce9-0"})`
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
`;e.s(["V1GridLines",0,function({children:e}){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.LayoutSubgrid,{"aria-hidden":"true","data-pile":!0,children:[(0,t.jsx)(r,{$column:4}),(0,t.jsx)(a.GridRule,{$column:7}),(0,t.jsx)(r,{$column:10})]}),(0,t.jsx)(o.LayoutSubgrid,{"data-pile":!0,children:e})]})},"V1PageWrapper",0,function({children:e,noTopPadding:i}){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.ContentMarginLine,{"data-v1-gridlines":!0}),(0,t.jsx)(n,{$noTopPadding:i,"data-content-grid":!0,children:e}),(0,t.jsx)(a.ContentMarginLine,{"data-right":!0,"data-v1-gridlines":!0})]})}])},676649,e=>{"use strict";var t=e.i(843476),i=e.i(271645),a=e.i(997053),o=e.i(162517),n=e.i(193594);let r=a.default.div.withConfig({displayName:"ConnectingLines__Lines",componentId:"sc-86e7390c-0"})`
  display: flex;
  align-items: center;
  position: relative;
  height: 121px;
  bottom: 0;
  width: 100%;
  max-width: 543px;
  margin: 0 auto;

  &::before,
  &::after {
    content: '';
    display: block;
    height: 60px;
    width: 1px;
    background-color: ${({theme:e})=>e.borderColor.DEFAULT};
    position: absolute;
  }

  &::before {
    left: 0;
    top: 0;
    right: auto;
    bottom: auto;
    background: linear-gradient(
      180deg,
      ${({theme:e})=>(0,n.rgba)(e.colors.BLACK,0)} 0%,
      ${({theme:e})=>e.borderColor.DEFAULT} 100%
    );
  }

  &::after {
    right: 0;
    bottom: 0;
    top: auto;
    left: auto;
    background: linear-gradient(
      0deg,
      ${({theme:e})=>(0,n.rgba)(e.colors.BLACK,0)} 0%,
      ${({theme:e})=>e.borderColor.DEFAULT} 100%
    );
  }

  ${({$reverse:e})=>e&&a.css`
      &::before {
        top: 0;
        right: 0;
        left: auto;
        bottom: auto;
      }

      &::after {
        left: 0;
        bottom: 0;
        right: auto;
        top: auto;
      }
    `};

  ${({$centerTop:e,$reverse:t})=>e&&!t&&a.css`
      &::before {
        left: calc(50% - 1px);
      }

      ${d} {
        left: calc(50% - 1px);
      }
    `};

  ${({$centerTop:e,$reverse:t})=>e&&t&&a.css`
      &::before {
        left: calc(50% - 1px);
      }

      ${d} {
        right: calc(50% - 1px);
      }
    `};

  ${({$centerBtm:e})=>e&&a.css`
      &::after {
        left: calc(50% - 1px);
      }

      ${d} {
        left: calc(50% - 1px);
      }
    `};

  @media (max-width: ${({theme:e})=>e.mediaQuery.MOBILE}) {
    display: none;

    &::before,
    &::after,
    * {
      display: none;
    }
  }
`,d=a.default.div.withConfig({displayName:"ConnectingLines__WideLine",componentId:"sc-86e7390c-1"})`
  height: 1px;
  position: absolute;
  left: 0;
  right: 0;
  background-color: ${({theme:e})=>e.borderColor.DEFAULT};
`,l=i.memo(({reverse:e=!1,topPos:i="default",btmPos:a="default"})=>(0,t.jsx)(r,{$centerBtm:"center"===a,$centerTop:"center"===i,$reverse:e,children:(0,t.jsx)(d,{})}));l.displayName="ConnectingLines";let s=a.default.div.withConfig({displayName:"SnakedSections__Wrapper",componentId:"sc-192dc8ab-0"})`
  display: flex;
  flex-direction: column;
  gap: ${({$hideConnectingLines:e})=>e?"110px":"20px"};
  width: 100%;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    gap: 80px;
  }
`,p=a.default.div.withConfig({displayName:"SnakedSections__Section",componentId:"sc-192dc8ab-1"})`
  display: flex;
  align-items: center;
  gap: 80px;
  justify-content: space-between;

  .info-text {
    min-width: 0;
  }

  ${({$reverse:e})=>e&&a.css`
      flex-direction: row-reverse;
    `}

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    flex-direction: column;
    gap: 30px;
  }
`,c=i.memo(({hideConnectingLines:e=!1,sections:a})=>(0,t.jsx)(s,{$hideConnectingLines:e,children:a.map((n,r)=>(0,t.jsxs)(i.Fragment,{children:[(0,t.jsxs)(p,{$reverse:n.shouldReverse,children:[(0,t.jsx)(o.InfoText,{ctaText:n.ctaText,description:n.description,icon:n.icon,link:n.link,title:n.title}),n.illustration]}),r<a.length-1&&!e&&(0,t.jsx)(l,{reverse:!n.shouldReverse})]},r))}));c.displayName="SnakedSections",e.s(["SnakedSections",0,c],676649)},864220,e=>{"use strict";var t=e.i(846932),i=e.i(997053);let a=i.default.div.withConfig({displayName:"sharedStyles__Section",componentId:"sc-cb18e764-0"})`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`,o=i.default.div.attrs({className:"floating-text"}).withConfig({displayName:"sharedStyles__FloatingText",componentId:"sc-cb18e764-1"})`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    && {
      position: static;
    }
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    && {
      .info-text {
        max-width: 100%;
      }
    }
  }
`,n=i.default.div.withConfig({displayName:"sharedStyles__Illustrations",componentId:"sc-cb18e764-2"})`
  width: 100%;
  position: relative;
`,r=(0,i.default)(t.motion.div).withConfig({displayName:"sharedStyles__CellIllustration",componentId:"sc-cb18e764-3"})`
  display: flex;
  align-items: flex-start;
  background: white;
  box-shadow:
    -1px 0px 0px rgba(2, 2, 27, 0.07),
    1px 0px 0px rgba(2, 2, 27, 0.07),
    0px -1px 0px rgba(2, 2, 27, 0.07),
    0px 1px 0px rgba(2, 2, 27, 0.07),
    0px 54px 74px rgba(1, 1, 27, 0.3),
    0px 14px 74px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  overflow: hidden;
  position: absolute;
  z-index: 2;

  img {
    flex: none;
  }
`;e.s(["CellIllustration",0,r,"FloatingText",0,o,"Illustrations",0,n,"Section",0,a])},998990,e=>{"use strict";e.s(["CUSTOMER_LOGOS_HOSTED",0,{Algolia:"https://cdn.sanity.io/images/e92memrj/production/643fb40019cd60627bf6f354c5bffdfd66017ce9-97x51.svg",Brex:"https://cdn.sanity.io/images/e92memrj/production/797daac5d8ce0c8f853f32db64dddf44234caf15-110x50.svg",Candidly:"https://cdn.sanity.io/images/e92memrj/production/5fb6f6dd0ff002808f2382c81a66cd28410a4ac9-166x50.svg",Chime:"https://cdn.sanity.io/images/e92memrj/production/20bf8a6fe0ca725b28527c135c22f237938f5ef5-94x50.svg",ClickUp:"https://cdn.sanity.io/images/e92memrj/production/8ec37f2330ffd132be12ea66bad243453af0d047-119x50.svg",CustomerIO:"https://cdn.sanity.io/images/e92memrj/production/fc46557c4677964c57351c9affa635d558fe8cd8-170x40.svg",Doximity:"https://cdn.sanity.io/images/e92memrj/production/17b8982db750bfc51b7aa08783c5e1f8d3432d63-125x50.svg",Figma:"https://cdn.sanity.io/images/e92memrj/production/f7df402cfb3dac549c3f877c09425534abc7650b-97x50.svg",Huckberry:"https://cdn.sanity.io/images/e92memrj/production/8194d2de15059f3f69d4fb8dbc03b2f7bfb04af4-134x50.svg",InfiniteLambda:"https://cdn.sanity.io/images/e92memrj/production/638503884c2ca511d9816fc46d5d13f05551bd26-110x50.svg",Inventa:"https://cdn.sanity.io/images/e92memrj/production/2b33cd7f123f50efbd8ea42ea9235382e207633e-132x50.svg",LangChain:"https://cdn.sanity.io/images/e92memrj/production/0b907ba3d40fe1012f1118d105620c7779a49949-135x50.svg",Lovable:"https://cdn.sanity.io/images/e92memrj/production/d063f2a64adcd7869bc2fc81dbc971825be8b951-137x50.svg",MedScout:"https://cdn.sanity.io/images/e92memrj/production/ab190c6c708ad1b738c3dd93e3c9d64718788935-168x50.svg",Mercor:"https://cdn.sanity.io/images/e92memrj/production/92b9cd2232a417db021ffe38f96d45a896e85cba-131x50.svg",NeoFinancial:"https://cdn.sanity.io/images/e92memrj/production/ba0c09ff2b2ba796246ce69e4e971751bccaae37-76x50.svg",Notion:"https://cdn.sanity.io/images/e92memrj/production/6f211c674b14be69b85497264b1d654b138dce01-39x50.svg",PandaDoc:"https://cdn.sanity.io/images/e92memrj/production/728e1e88c0a31f218d18971d3e9da2de81bad906-120x50.svg",ProductHunt:"https://cdn.sanity.io/images/e92memrj/production/0334d3583cd66c0361cd0c3b1bd28d92307cf01a-126x50.svg",Ramp:"https://cdn.sanity.io/images/e92memrj/production/892932e7f3dc3c66d3ae4a16e8bc51e37b7f59f4-120x50.svg",StubHub:"https://cdn.sanity.io/images/e92memrj/production/84cee8330df6df867d752ef0336d987b73845add-81x50.svg",WeightsAndBiases:"https://cdn.sanity.io/images/e92memrj/production/1eaf4b79b17b9f39d479a6cca9f8b60e06105d44-169x50.svg",Zoe:"https://cdn.sanity.io/images/e92memrj/production/ac4cbae3f4b1d599f5d51d290bd183be0b16253a-114x50.svg"}])}]);