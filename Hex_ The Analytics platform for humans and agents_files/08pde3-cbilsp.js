(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,904685,e=>{e.v({label:"CustomerBannerSectionLabel-module__1XCmuW__label"})},647255,e=>{e.v({author:"CustomerLogo-module__-F7ANW__author",popover:"CustomerLogo-module__-F7ANW__popover",story:"CustomerLogo-module__-F7ANW__story"})},590949,e=>{e.v({accents:"CustomerBanner-module__QGw5Ra__accents",frame:"CustomerBanner-module__QGw5Ra__frame",label:"CustomerBanner-module__QGw5Ra__label",logo:"CustomerBanner-module__QGw5Ra__logo",logoDefault:"CustomerBanner-module__QGw5Ra__logoDefault",logoMinimal:"CustomerBanner-module__QGw5Ra__logoMinimal",logos:"CustomerBanner-module__QGw5Ra__logos",logosDefault:"CustomerBanner-module__QGw5Ra__logosDefault",logosMinimal:"CustomerBanner-module__QGw5Ra__logosMinimal",minimal:"CustomerBanner-module__QGw5Ra__minimal",minimalTitle:"CustomerBanner-module__QGw5Ra__minimalTitle",rule:"CustomerBanner-module__QGw5Ra__rule",topEdge:"CustomerBanner-module__QGw5Ra__topEdge"})},321688,e=>{"use strict";var t=e.i(843476),i=e.i(271645),n=e.i(343794),o=e.i(846932),a=e.i(991709);e.i(726497);var r=e.i(778888),d=e.i(904685);function s({className:e,...i}){return(0,t.jsx)("h2",{...i,className:(0,n.default)("annotation",d.default.label,e)})}var l=e.i(373431),c=e.i(88653),m=e.i(63209),u=e.i(657688),p=e.i(522016),f=e.i(193594),g=e.i(997053),h=e.i(665419),x=e.i(647255);let y=({compact:e=!1,customer:n,showStory:a=!0,trackingLabel:r})=>{let d=n.quotes[0],s=n.slug,l=n.logoWidth??120,p=n.logoHeight??50,[f,g]=(0,i.useState)(!1);if(!a||!d||!s)return(0,t.jsx)(v,{$compact:e,$isTrustBand:!a,children:(0,t.jsx)(u.default,{alt:`Hex customer: ${n.name}`,height:p,src:n.logoUrl,style:{aspectRatio:`${l} / ${p}`,width:"auto"},unoptimized:!0,width:l})});let y=`story-hover-${s}`,E=`story-hover-inner-${s}`;return(0,t.jsx)(m.MotionConfig,{transition:{type:"spring",visualDuration:.22,bounce:.12},children:(0,t.jsxs)("div",{className:x.default.story,children:[(0,t.jsxs)(C,{$compact:e,"data-tracking-label":r,href:`${h.INTERNAL_LINKS.Customers}${s}`,children:[(0,t.jsx)(c.AnimatePresence,{children:f?null:(0,t.jsx)(j,{as:o.motion.div,layout:!0,layoutId:y,style:{borderRadius:6},children:(0,t.jsx)(o.motion.div,{layout:"position",layoutId:E,style:{position:"absolute",inset:"auto 0 auto 0"}})})}),(0,t.jsxs)(I,{onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1),children:[(0,t.jsx)(o.motion.div,{animate:{opacity:f?.32:1},children:(0,t.jsx)(u.default,{alt:`Hex customer: ${n.name}`,height:p,src:n.logoUrl,style:{aspectRatio:`${l} / ${p}`,width:"auto"},unoptimized:!0,width:l})}),(0,t.jsx)($,{children:(0,t.jsx)(c.AnimatePresence,{children:f?(0,t.jsx)(N,{as:o.motion.div,layout:!0,layoutId:y,style:{borderRadius:12},children:(0,t.jsxs)(o.motion.div,{layout:"position",layoutId:E,style:{display:"flex",alignItems:"center",gap:12},children:["Read story ",(0,t.jsx)(b,{})]})}):null})})]})]}),(0,t.jsxs)(_,{className:x.default.popover,"data-customer-popover":"",children:[(0,t.jsx)(L,{alt:`Hex customer: ${n.name}`,"data-markdown-exclude":"",src:n.logoUrl}),(0,t.jsx)(k,{children:(0,t.jsx)(w,{})}),(0,t.jsxs)(A,{children:['"',d.quote,'"']}),(0,t.jsxs)(T,{children:[(0,t.jsx)(S,{as:"strong",className:x.default.author,children:d.author})," ",d.authorTitle?(0,t.jsx)(M,{children:d.authorTitle}):null]})]})]})})};function w(){return(0,t.jsx)("svg",{"aria-hidden":"true",fill:"none",height:"12",viewBox:"0 0 15 15",width:"12",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M6.91699 1.30798V6.30603L6.85352 6.41931L3.10938 13.139L2.85547 13.5951L2.41113 13.3217L1.16309 12.5541L0.770508 12.3119L0.979492 11.9008L3.45898 7.02576L1.7793 6.40466L1.45312 6.28455V1.30798H6.91699ZM13.8291 1.30798V6.30603L13.7656 6.41931L10.0215 13.139L9.76758 13.5951L9.32324 13.3217L8.0752 12.5541L7.68164 12.3119L7.8916 11.9008L10.3711 7.02576L8.69141 6.40466L8.36523 6.28455V1.30798H13.8291Z",stroke:"currentColor"})})}function b(){return(0,t.jsx)("svg",{"aria-hidden":"true",fill:"none",height:"10",viewBox:"0 0 16 10",width:"16",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M1 5h14M11 1l4 4-4 4",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})})}y.displayName="CustomerLogo";let v=g.default.div.withConfig({displayName:"CustomerLogo__PlainLogo",componentId:"sc-8dd4a870-0"})`
  padding: ${({$compact:e})=>e?"0":"0 8px"};
  height: 100%;
  display: flex;
  align-items: center;

  img {
    ${({theme:e})=>e.customerLogoColor};
    height: ${({$isTrustBand:e})=>e?"100%":"40px"};
    width: auto;
  }
`,_=g.default.div.withConfig({displayName:"CustomerLogo__CustomerStoryPopover",componentId:"sc-8dd4a870-1"})`
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
`,C=(0,g.default)(p.default).withConfig({displayName:"CustomerLogo__LogoLink",componentId:"sc-8dd4a870-2"})`
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
`,j=g.default.div.withConfig({displayName:"CustomerLogo__CustomerStoryIndicator",componentId:"sc-8dd4a870-3"})`
  position: absolute;
  top: -8px;
  right: -12px;
  height: 12px;
  aspect-ratio: 1 / 1;
  display: grid;
  place-items: center;
  border-radius: 999px;
  background-color: ${({theme:e})=>(0,f.rgba)((0,f.darken)(.08,e.palette.fgLoud),.16)};
  border: 1px solid
    ${({theme:e})=>(0,f.rgba)((0,f.darken)(.08,e.palette.fgLoud),.16)};
  white-space: nowrap;
  color: ${({theme:e})=>(0,f.rgba)((0,f.darken)(.08,e.palette.fgLoud),.8)};
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
`,I=g.default.div.withConfig({displayName:"CustomerLogo__Pile",componentId:"sc-8dd4a870-4"})`
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
`,$=g.default.div.withConfig({displayName:"CustomerLogo__CenterForSafari",componentId:"sc-8dd4a870-5"})`
  display: grid;
  place-items: center;
  place-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
`,N=g.default.div.withConfig({displayName:"CustomerLogo__StoryHoverIndicator",componentId:"sc-8dd4a870-6"})`
  border-radius: 999px;
  z-index: 1;
  white-space: nowrap;
  color: ${({theme:e})=>e.palette.fgLoud};
  line-height: 1.2;
  overflow: hidden;
  padding: 4px 12px 4px 16px;
  font-size: ${({theme:e})=>e.fontSize.SMALL};
  ${({theme:e})=>e.popover};
`,L=g.default.img.withConfig({displayName:"CustomerLogo__PopoverLogo",componentId:"sc-8dd4a870-7"})`
  height: 32px;
  width: auto;
  display: block;
  margin: 4px auto 8px auto;
  object-fit: contain;
  ${({theme:e})=>e.customerLogoColor};
`,k=g.default.div.withConfig({displayName:"CustomerLogo__PopoverDivider",componentId:"sc-8dd4a870-8"})`
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
    background-color: ${({theme:e})=>(0,f.rgba)(e.palette.fgLoud,.16)};
  }
`,A=g.default.blockquote.withConfig({displayName:"CustomerLogo__PopoverQuote",componentId:"sc-8dd4a870-9"})`
  margin: 0;
  font-weight: ${({theme:e})=>e.fontWeight.LIGHT};
  font-size: ${({theme:e})=>e.fontSize.DEFAULT};
  quotes: none;
`,T=g.default.p.withConfig({displayName:"CustomerLogo__PopoverAttribution",componentId:"sc-8dd4a870-10"})`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin: 12px 0 0;
  color: ${({theme:e})=>e.palette.fg1100};
`,S=g.default.span.withConfig({displayName:"CustomerLogo__PopoverAuthor",componentId:"sc-8dd4a870-11"})`
  font-size: ${({theme:e})=>e.fontSize.EXTRA_SMALL};
`,M=g.default.span.withConfig({displayName:"CustomerLogo__PopoverAuthorTitle",componentId:"sc-8dd4a870-12"})`
  font-size: ${({theme:e})=>e.fontSize.EXTRA_SMALL};
  opacity: 0.7;
`;var E=e.i(590949);e.s(["CustomerBanner",0,function({data:e,trackingLabelPrefix:d}){let l=(0,i.useRef)(null),c=e?.variant==="minimal"?"minimal":"default",m=e?.showStories!==!1;if((0,i.useEffect)(()=>{let e=l.current;if(!e||!m)return;function t(){if(!e)return;let t=e.querySelectorAll("[data-customer-popover]"),i=window.innerWidth-100;for(let e of t){let t=e.getBoundingClientRect(),n=e.parentElement?.getBoundingClientRect(),o=(n?.left??0)+t.width>i;e.setAttribute("data-align",o?"right":"left")}}let i=new ResizeObserver(()=>t());return t(),i.observe(e),()=>i.disconnect()},[e?.customers.length,m]),!e?.customers.length)return null;let u=e.eyebrow?.trim()||"Trusted by leading data companies",p=(0,t.jsx)("ul",{ref:l,className:(0,n.default)(E.default.logos,"minimal"===c?E.default.logosMinimal:E.default.logosDefault),role:"list",children:e.customers.map((e,i)=>(0,t.jsx)("li",{className:(0,n.default)(E.default.logo,"minimal"===c?E.default.logoMinimal:E.default.logoDefault),children:(0,t.jsx)(y,{compact:"default"===c,customer:e,showStory:m,trackingLabel:d?`${d} ${e.slug}`:void 0})},`${e.name}-${i}`))});return"minimal"===c?(0,t.jsxs)(o.motion.div,{...a.ANIMATIONS.SimpleFadeIn,className:E.default.minimal,children:[(0,t.jsx)("p",{className:(0,n.default)(r.textStyles.base,E.default.minimalTitle),children:u}),p]}):(0,t.jsxs)(o.motion.div,{...a.ANIMATIONS.SimpleFadeIn,className:E.default.frame,children:[(0,t.jsx)("div",{className:E.default.accents}),(0,t.jsxs)("div",{className:E.default.topEdge,children:[(0,t.jsx)("span",{"aria-hidden":"true",className:E.default.rule}),(0,t.jsx)(s,{className:E.default.label,children:u}),(0,t.jsx)("span",{"aria-hidden":"true",className:E.default.rule})]}),p]})}],321688)},909541,e=>{e.v({answerParagraph:"FAQ-module__E5gmgG__answerParagraph",questionHeading:"FAQ-module__E5gmgG__questionHeading"})},558202,e=>{"use strict";var t=e.i(843476),i=e.i(271645),n=e.i(846932),o=e.i(997053),a=e.i(258591),r=e.i(650617),d=e.i(430388),s=e.i(637804),l=e.i(991709),c=e.i(665419),m=e.i(909541);let u=i.memo(({footer:e,footerLinkTrackingLabel:i,heading:n="FAQ",items:o,noBkg:a=!1,noPadding:r=!1,questionHeadingLevel:d="h3",showFooter:m=!0,showHeader:u=!0,fullWidth:p=!1})=>(0,t.jsxs)(g,{...l.ANIMATIONS.SimpleFadeIn,$noBkg:a,$noPadding:r,id:"faq",children:[(0,t.jsx)("noscript",{children:(0,t.jsx)("style",{children:`.${g.styledComponentId} .${C.styledComponentId} { display: flex !important; }`})}),(0,t.jsxs)(x,{$fullWidth:p,children:[u&&(0,t.jsx)(y,{children:(0,t.jsx)(j,{renderAs:"h2",children:n})}),(0,t.jsx)(w,{children:o.map((e,i)=>(0,t.jsx)(f,{answer:e.answer,id:e.id,question:e.question,questionHeadingLevel:d},e.id??i))}),m&&(0,t.jsx)(h,{size:"medium",children:e??(0,t.jsxs)(t.Fragment,{children:["Can't find your answer here?"," ",(0,t.jsx)(s.SiteLink,{href:c.INTERNAL_LINKS.RequestADemo,trackingLabel:i,children:"Get in touch"}),"."]})})]})]}));u.displayName="FAQ";let p=(0,o.default)(d.ChevronDown).withConfig({displayName:"FAQ__ChevronIcon",componentId:"sc-c91ba0f9-0"})`
  transform: rotate(${({$isOpen:e})=>e?"0deg":"-90deg"});
`,f=i.memo(({question:e,answer:n,id:o,questionHeadingLevel:a})=>{let[r,d]=(0,i.useState)(!1),s=(0,i.useId)(),l=o??s,c=`${l}-question`,u=`${l}-answer`;return(0,i.useEffect)(()=>{let e=()=>{o&&window.location.hash===`#${o}`?setTimeout(()=>{d(!0)},50):window.location.hash&&window.location.hash.startsWith("#faq-")&&d(!1)};return e(),window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[o]),(0,t.jsxs)(b,{"data-name":"faq-item",id:o,children:[(0,t.jsx)(a,{className:m.default.questionHeading,children:(0,t.jsxs)(v,{$isOpen:r,"aria-controls":u,"aria-expanded":r,id:c,type:"button",onClick:()=>{let e=!r;d(e),e&&o?window.history.replaceState(null,"",`#${o}`):e||window.location.hash!==`#${o}`||window.history.replaceState(null,"",window.location.pathname+window.location.search)},children:[(0,t.jsx)(_,{children:e}),(0,t.jsx)("span",{"aria-hidden":!0,children:(0,t.jsx)(p,{$isOpen:r})})]})}),(0,t.jsx)(C,{$isOpen:r,"aria-labelledby":c,id:u,role:"region",children:"string"==typeof n?(0,t.jsx)("p",{className:m.default.answerParagraph,children:n}):n})]})});f.displayName="FAQItem";let g=(0,o.default)(n.motion.div).withConfig({displayName:"FAQ__Wrapper",componentId:"sc-c91ba0f9-1"})`
  background: ${({$noBkg:e,theme:t})=>e?"transparent":t.backgroundColor};
  width: 100%;
  position: relative;
  z-index: 1;

  scroll-margin-top: 120px;

  ${({$noPadding:e})=>!e&&o.css`
      padding: 80px 0;

      @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
        padding-top: 60px;
      }
    `}

  ${({$noBkg:e})=>e?"":o.css`
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
`,h=(0,o.default)(r.Text).withConfig({displayName:"FAQ__DescText",componentId:"sc-c91ba0f9-2"})`
  margin-top: 35px;
  text-align: center;
`,x=o.default.div.withConfig({displayName:"FAQ__Inner",componentId:"sc-c91ba0f9-3"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 0;
  margin: 0 auto;
  ${({$fullWidth:e})=>!e&&o.css`
      max-width: 604px;
    `}
`,y=o.default.div.withConfig({displayName:"FAQ__Top",componentId:"sc-c91ba0f9-4"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
`,w=o.default.div.withConfig({displayName:"FAQ__List",componentId:"sc-c91ba0f9-5"})`
  display: flex;
  flex-direction: column;
`,b=o.default.div.withConfig({displayName:"FAQ__Item",componentId:"sc-c91ba0f9-6"})`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
  transition: background-color
    ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`};
  scroll-margin-top: 240px;

  &:hover {
    background: ${({theme:e})=>e.borderColor.MUTED};
  }
`,v=o.default.button.withConfig({displayName:"FAQ__ItemTop",componentId:"sc-c91ba0f9-7"})`
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
`,_=o.default.span.withConfig({displayName:"FAQ__Question",componentId:"sc-c91ba0f9-8"})`
  color: ${({theme:e})=>e.fontColor.LOUD};
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.5px;
`,C=(0,o.default)(r.Text).attrs({size:"medium",as:"div"}).withConfig({displayName:"FAQ__Answer",componentId:"sc-c91ba0f9-9"})`
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
`;var j=(0,o.default)(a.Heading).withConfig({displayName:"FAQ___StyledHeading",componentId:"sc-c91ba0f9-10"})`
                  margin: 15px 0px;
                `;e.s(["FAQ",0,u,"FAQ_ID",0,"faq"])},168087,306213,e=>{"use strict";var t=e.i(843476),i=e.i(271645),n=e.i(174080),o=e.i(88653),a=e.i(846932),r=e.i(997053),d=e.i(706736),s=e.i(529376),l=e.i(430388),c=e.i(991709),m=e.i(850034);let u=(0,r.default)(a.motion.div).withConfig({displayName:"DemoVideo__ButtonWrapper",componentId:"sc-ccf86814-0"})`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,p=r.default.div.withConfig({displayName:"DemoVideo__FloatyDarkButton",componentId:"sc-ccf86814-1"})`
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
`,g=(0,r.default)(a.motion.div).withConfig({displayName:"DemoVideo__VideoOverlay",componentId:"sc-ccf86814-3"})`
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
`,h=(0,r.default)(d.Button).withConfig({displayName:"DemoVideo__CloseButton",componentId:"sc-ccf86814-4"})`
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
`;e.s(["DemoVideo",0,function({src:e,duration:a}){let[r,d]=(0,i.useState)(!1),x=(0,s.useIsHydrated)(),y=(0,i.useCallback)(()=>{d(!0)},[]),w=(0,i.useCallback)(()=>{d(!1)},[]),b={...c.REVEAL_MARKER,initial:{opacity:0},transition:{...c.DEFAULT_TRANSITION,delay:.2},viewport:{once:!0},whileInView:{opacity:1}};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u,{...b,onClick:y,children:(0,t.jsxs)(p,{"data-theme":"dark",children:[(0,t.jsx)(l.PlayIcon,{}),"Watch demo",(0,t.jsx)(f,{children:a||"2 min"})]})}),x&&(0,n.createPortal)((0,t.jsx)(o.AnimatePresence,{children:r&&(0,t.jsxs)(g,{animate:{opacity:1},"data-theme":"dark",exit:{opacity:0},initial:{opacity:0},transition:{...c.DEFAULT_TRANSITION},children:[(0,t.jsx)(h,{icon:(0,t.jsx)(l.CloseIcon,{}),size:"small",stylez:"bold",onClick:w}),(0,t.jsx)(m.VideoIframe,{allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0,height:"721",referrerPolicy:"strict-origin-when-cross-origin",src:e||"https://www.youtube.com/embed/Gvq7M0Cd9HQ?autoplay=1",title:"Magic AI overview",width:"1280"}),(0,t.jsx)("div",{className:"bkg",onClick:w})]})}),document.body)]})}],168087);let x=r.default.div.withConfig({displayName:"InfoTextImageCardGrid",componentId:"sc-a4879c6d-0"})`
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
`;e.s(["InfoTextImageCardGrid",0,x],306213)},316983,e=>{"use strict";var t=e.i(843476),i=e.i(271645),n=e.i(997053),o=e.i(537193),a=e.i(598043);let r=n.default.a.withConfig({displayName:"AnnouncementPillLink__Root",componentId:"sc-3e6e3317-0"})`
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
`,d=n.default.span.withConfig({displayName:"AnnouncementPillLink__Announcement",componentId:"sc-3e6e3317-1"})`
  display: flex;
  align-items: center;
  gap: 5px;
  padding-right: 10px;
  font-size: ${({theme:e})=>e.fontSize.SMALL};
  color: ${({theme:e})=>e.palette.fg1200};
  font-weight: ${({theme:e})=>e.fontWeight.LIGHT};
  line-height: 1;
`,s=n.default.span.withConfig({displayName:"AnnouncementPillLink__InnerPill",componentId:"sc-3e6e3317-2"})`
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
`,l=n.default.span.withConfig({displayName:"AnnouncementPillLink__IconPill",componentId:"sc-3e6e3317-3"})`
  border-radius: 999px;

  > svg {
    display: block;
  }
`,c=n.default.span.withConfig({displayName:"AnnouncementPillLink__PillLabel",componentId:"sc-3e6e3317-4"})`
  font-size: ${({theme:e})=>e.fontSize.SMALL};
  font-weight: ${({theme:e})=>e.fontWeight.BOLD};
  line-height: 1;
`;function m(){return(0,t.jsx)("svg",{fill:"none",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{clipRule:"evenodd",d:"M9.11611 8.00001L5.46967 11.6465L6.17677 12.3536L10.5303 8.00001L6.17677 3.64645L5.46967 4.35356L9.11611 8.00001Z",fill:"currentColor",fillRule:"evenodd"})})}let u=i.memo(({subCopy:e,className:i,icon:n,pillLabel:u,to:p})=>(0,t.jsxs)(r,{className:i,href:p,onClick:()=>{(0,o.trackAnnouncementPillClicked)((0,a.reactNodeToPlainTextNormalized)(u),p)},children:[(0,t.jsxs)(s,{children:[(0,t.jsx)(l,{children:n}),(0,t.jsx)(c,{children:u})]}),e&&(0,t.jsxs)(d,{children:["string"==typeof e?(0,t.jsx)("span",{children:e}):e,(0,t.jsx)(m,{})]})]}));u.displayName="AnnouncementPillLink",e.s(["AnnouncementPillLink",0,u])},939808,e=>{"use strict";var t=e.i(843476),i=e.i(271645),n=e.i(997053),o=e.i(430388),a=e.i(785191),r=e.i(650617);let d=i.memo(({logoPath:e,customerName:i,quote:n,authorAvatarPath:a,author:d,authorTitle:f})=>(0,t.jsx)(s,{children:(0,t.jsxs)(l,{children:[e&&(0,t.jsx)(u,{children:"string"==typeof e?(0,t.jsx)("img",{alt:i||"customer logo",loading:"lazy",src:e}):e}),(0,t.jsxs)(c,{children:[(0,t.jsx)(m,{children:(0,t.jsx)(o.QuoteIcon,{})}),(0,t.jsxs)("blockquote",{children:['"',n,"”"]})]}),d&&(0,t.jsxs)(p,{children:[a&&(0,t.jsx)("img",{alt:d,loading:"lazy",src:a}),(0,t.jsxs)(r.Text,{children:[d,(f||i)&&(0,t.jsxs)("span",{children:["  ",f&&`${f} `,i&&(0,t.jsxs)(t.Fragment,{children:["at ",i]})]})]})]})]})}));d.displayName="CustomerQuoteCard";let s=(0,n.default)(a.Card).attrs({effect:"glass"}).withConfig({displayName:"CustomerQuoteCard__Wrapper",componentId:"sc-5e534bf5-0"})`
  && {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    padding: 38px 45px;
    height: 100%;
  }
`,l=n.default.div.withConfig({displayName:"CustomerQuoteCard__Quote",componentId:"sc-5e534bf5-1"})`
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
`,m=n.default.div.withConfig({displayName:"CustomerQuoteCard__QuoteLine",componentId:"sc-5e534bf5-3"})`
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
`,u=n.default.div.withConfig({displayName:"CustomerQuoteCard__Logo",componentId:"sc-5e534bf5-4"})`
  display: flex;
  align-items: start;

  img {
    max-height: 45px;
    object-fit: contain;
    filter: ${({theme:e})=>"dark"===e.name?"brightness(0) invert(1)":"invert(100%) sepia(0%) saturate(1%) hue-rotate(339deg) brightness(100%) contrast(101%)"};
  }
`,p=n.default.div.withConfig({displayName:"CustomerQuoteCard__Author",componentId:"sc-5e534bf5-5"})`
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
`;e.s(["CustomerQuoteCard",0,d])},809573,e=>{"use strict";var t=e.i(843476),i=e.i(271645),n=e.i(922998),o=e.i(846932),a=e.i(997053),r=e.i(991709),d=e.i(288839),s=e.i(939808);let l=(0,a.default)(o.motion.div).withConfig({displayName:"CustomerQuotesScrollingTout__Wrapper",componentId:"sc-8e09488a-0"})`
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
`,c=a.default.div.withConfig({displayName:"CustomerQuotesScrollingTout__MarqueeOption",componentId:"sc-8e09488a-1"})`
  width: 30vw;
  min-width: 370px;
  height: 100%;
  padding-right: 20px;
  flex-grow: 1;
`,m=(0,a.default)(n.default).withConfig({displayName:"CustomerQuotesScrollingTout__StyledMarquee",componentId:"sc-8e09488a-2"})`
  align-items: stretch;
  justify-content: stretch;

  .rfm-marquee {
    flex-grow: 1;
    display: flex;
    align-items: stretch;
    justify-content: stretch;
  }
`,u=i.memo(function({customerQuotes:e}){let i=(0,a.useTheme)(),n=(0,d.default)(i.mediaQueryString.MEDIUM),o=(0,d.default)("(prefers-reduced-motion: reduce)");return n?(0,t.jsx)(l,{...r.ANIMATIONS.SimpleFadeIn,children:e.slice(0,2).map((e,i)=>(0,t.jsx)(s.CustomerQuoteCard,{...e},i))}):(0,t.jsx)(l,{...r.ANIMATIONS.SimpleFadeIn,children:(0,t.jsx)(m,{gradient:!1,pauseOnClick:!0,play:!o,speed:30,children:e.map((e,i)=>(0,t.jsx)(c,{children:(0,t.jsx)(s.CustomerQuoteCard,{...e})},i))})})});e.s(["CustomerQuotesScrollingTout",0,u])},809132,e=>{"use strict";var t=e.i(997053);let i=t.default.div.withConfig({displayName:"DotGridMask",componentId:"sc-8c154ead-0"})`
  position: absolute;
  inset: 0;
  mask-image: radial-gradient(white, white 1px, transparent 1px, transparent);
  mask-size: 6px 6px;
`;e.s(["DotGridMask",0,i])},600376,e=>{"use strict";var t=e.i(843476),i=e.i(657688),n=e.i(997053),o=e.i(706736),a=e.i(653272),r=e.i(785191),d=e.i(258591),s=e.i(650617);let l=(0,n.default)(r.Card).withConfig({displayName:"InfoTextImageCard__StyledCard",componentId:"sc-3c8c3853-0"})`
  padding: 0;
  flex: 1 1 0;
  min-width: 0;
  overflow: hidden;

  ${({$imageAlign:e})=>"right"===e&&n.css`
      align-items: flex-end;
    `}

  ${({$size:e})=>"small"===e&&n.css`
      @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
        flex: 1 1 auto;
        flex-direction: row;
      }

      @media (max-width: ${({theme:e})=>e.mediaQuery.MOBILE}) {
        flex-direction: column;
      }
    `}
`,c=n.default.div.withConfig({displayName:"InfoTextImageCard__TextContent",componentId:"sc-3c8c3853-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 40px 40px 20px 40px;
  align-items: flex-start;

  p {
    margin-bottom: 8px;
  }

  ${({$size:e})=>"small"===e&&n.css`
      @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
        width: 60%;
        flex: none;
      }

      @media (max-width: ${({theme:e})=>e.mediaQuery.MOBILE}) {
        width: 100%;
      }
    `}
`,m=(0,n.default)(d.Heading).withConfig({displayName:"InfoTextImageCard__Eyebrow",componentId:"sc-3c8c3853-2"})`
  text-wrap: balance;
`,u=(0,n.default)(d.Heading).withConfig({displayName:"InfoTextImageCard__StyledHeading",componentId:"sc-3c8c3853-3"})`
  text-wrap: balance;
`,p=(0,n.default)(s.Text).withConfig({displayName:"InfoTextImageCard__StyledText",componentId:"sc-3c8c3853-4"})`
  text-wrap: balance;
`,f=n.default.div.withConfig({displayName:"InfoTextImageCard__ImageWrapper",componentId:"sc-3c8c3853-5"})`
  display: flex;
  margin-top: auto;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    img {
      width: ${({$size:e})=>"small"===e?"400px":"500px"};
      height: auto;
    }
  }
`;e.s(["InfoTextImageCard",0,function({title:e,description:n,buttonText:r,buttonLink:d,image:s,imageHeight:g,imageWidth:h,size:x="default",imageAlign:y="left",smallTitle:w}){let b=Array.isArray(n)?(0,t.jsx)(t.Fragment,{children:n.map((e,i)=>(0,t.jsx)(p,{size:"medium",children:e},i))}):(0,t.jsx)(p,{size:"medium",children:n}),v=!!(r&&d);return(0,t.jsxs)(l,{$imageAlign:y,$size:x,effect:"glass",children:[(0,t.jsxs)(c,{$size:x,children:[w?(0,t.jsx)(m,{renderAs:"h6",children:w}):null,(0,t.jsx)(u,{renderAs:"h3",children:e}),b,v?(0,t.jsx)(o.Button,{href:d,isExternal:!(0,a.isInternalLink)(d),text:r}):null]}),(0,t.jsx)(f,{$size:x,children:(0,t.jsx)(i.default,{alt:e,height:g,src:`/images/${s.replace(/\.([^.]+)$/,"@2x.$1")}`,width:h})})]})}])},21066,e=>{"use strict";var t=e.i(843476),i=e.i(997053),n=e.i(809132);let o={dark:"/images/home-2025/textures/noise-rose-128x128.png",light:"/images/home-2025/textures/noise-eggplant-128x128.png",pink:"/images/home-2025/textures/noise-eggplant-128x128.png"},a={small:256,medium:512,large:1024},r={small:"1s",medium:"500ms",large:"50ms"},d=i.default.div.withConfig({displayName:"PerlinNoise__NoiseTexture",componentId:"sc-3b6e388f-0"})`
  position: absolute;
  inset: 0;
  background-image: ${({theme:e})=>`url(${o[e.name]})`};
  background-size: ${({$size:e})=>`${a[e]}px ${a[e]}px`};
  opacity: 0;
  transition: opacity;
  transition-duration: var(--hover-transition-duration);
  transition-timing-function: var(--hover-transition-timing-function);

  animation: noise 8s linear infinite;
  animation-play-state: paused;

  @keyframes noise {
    from {
      background-position: ${({$size:e})=>`-${a[e]}px -${a[e]}px`};
    }
    to {
      background-position: 0px 0px;
    }
  }
`,s=i.css`
  ${d} {
    opacity: 0.24;
    animation-play-state: running;
  }
`,l=i.default.div.withConfig({displayName:"PerlinNoise__Wrapper",componentId:"sc-3b6e388f-1"})`
  --hover-transition-duration: ${({$size:e})=>r[e]};
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

  position: relative;
  display: flex;
  width: 100%;
  height: 100%;

  transition-duration: var(--hover-transition-duration);
  transition-timing-function: var(--hover-transition-timing-function);
  perspective: 800px;

  &:has(*:focus-visible) {
    ${s}
  }

  @media (hover: hover) {
    &:hover {
      ${s}
    }
  }

  ${({$isRunning:e})=>e&&i.css`
      ${s}
    `}

  @media (prefers-reduced-motion: reduce) {
    ${d} {
      animation: none;
      transition: none;
    }
  }
`;e.s(["PerlinNoise",0,function({className:e,isRunning:i=!1,size:o="medium"}){return(0,t.jsx)(l,{$isRunning:i,$size:o,className:e,children:(0,t.jsx)(n.DotGridMask,{children:(0,t.jsx)(d,{$size:o})})})}])},613938,e=>{"use strict";var t=e.i(843476),i=e.i(271645),n=e.i(846932),o=e.i(997053),a=e.i(991709),r=e.i(739876),d=e.i(581444);let s=(0,o.default)(d.LayoutSubgrid).withConfig({displayName:"BasicPageRow__Wrapper",componentId:"sc-811624ad-0"})`
  overflow-x: clip;

  ${({$topBorder:e})=>e&&o.css`
      border-top: 1px solid ${({theme:e})=>(0,r.gridColorSelector)(e,"major")};
    `}
`,l=o.css`
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

  ${({$fullWidth:e})=>e&&o.css`
      max-width: none;
      padding: 0;
      grid-column: 1 / -1;
    `}

  ${({$fullWidth:e})=>!e&&o.css`
      @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
        padding: 60px 0;
        grid-column: 2 / -2;
      }

      @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
        padding: 40px 0;
      }
    `}
`,c=(0,o.default)(n.motion.div).withConfig({displayName:"BasicPageRow__Inner",componentId:"sc-811624ad-1"})`
  ${l}
`,m=o.default.div.withConfig({displayName:"BasicPageRow__InnerStatic",componentId:"sc-811624ad-2"})`
  ${l}
`,u=(0,o.default)(d.LayoutGridCondensed).withConfig({displayName:"BasicPageRow__StyledLayoutGridCondensed",componentId:"sc-811624ad-3"})`
  position: relative;
`,p=i.memo(function({animateEntrance:e=!0,children:i,fullWidth:n=!1,topBorder:o=!1,className:d,CartesianGridComponent:l}){return(0,t.jsxs)(s,{$topBorder:o,children:[(0,t.jsx)(r.CheckeredMargin,{}),(0,t.jsxs)(u,{className:d,children:[l&&(0,t.jsx)(l,{fadeDirection:"in"}),e?(0,t.jsx)(c,{...a.ANIMATIONS.SimpleFadeIn,$fullWidth:n,children:i}):(0,t.jsx)(m,{$fullWidth:n,children:i})]}),(0,t.jsx)(r.CheckeredMargin,{"data-right":!0})]})});e.s(["BasicPageRow",0,p])},850034,e=>{"use strict";var t=e.i(843476),i=e.i(271645),n=e.i(53496),o=e.i(656871),a=e.i(627871),r=e.i(35820),d=e.i(182180),s=e.i(472945);let l=["ended","play","timeupdate"];var c=e.i(806406);let m=i.forwardRef(function({src:e="",title:m,...u},p){let f,g=(0,i.useMemo)(()=>(function(e){try{let t=new URL(e,"https://hex.tech"),i="youtube"===(0,o.getVideoProviderFromHostname)(t.hostname);if(!i)return{isYouTube:i,src:e};return t.searchParams.set("enablejsapi","1"),{isYouTube:i,src:t.href}}catch{return{isYouTube:!1,src:e}}})(e),[e]),h=(0,i.useMemo)(()=>(0,a.getVideoMetadata)(e,m),[e,m]),x=(0,c.useYouTubeVideoTracking)(e,m),y=(f=(0,i.useRef)(null),(0,i.useEffect)(()=>{let t=f.current;if(!t)return;let i=!1,n=new Set,o=new URL(e,window.location.href).origin,a=()=>{l.forEach(e=>{t.contentWindow?.postMessage(JSON.stringify({context:"player.js",method:"addEventListener",value:e,version:"0.0.11"}),o)})},c=l=>{if(l.origin!==o||l.source!==t.contentWindow)return;let c=function(e){try{let t="string"==typeof e?JSON.parse(e):e;return"object"==typeof t&&null!==t?t:void 0}catch{return}}(l.data);if(c?.context==="player.js")if("ready"===c.event)a();else if("play"!==c.event||i)if("timeupdate"===c.event){let{duration:t,seconds:i}=c.value??{};if("number"!=typeof t||"number"!=typeof i||t<=0)return;(0,r.getNewVideoProgressThresholds)(i/t*100,n).forEach(t=>{n.add(t),(0,s.trackVideoProgress)(e,t,m)})}else"ended"===c.event&&((0,r.getNewVideoProgressThresholds)(100,n).forEach(t=>{n.add(t),(0,s.trackVideoProgress)(e,t,m)}),i=!1);else i=!0,(0,d.trackVideoPlayed)(e,m)};return t.addEventListener("load",a),window.addEventListener("message",c),()=>{t.removeEventListener("load",a),window.removeEventListener("message",c)}},[m,e]),f),w=g.isYouTube?x:"loom"===h.videoProvider?y:null,b=(0,i.useMemo)(()=>(0,n.combineRefs)(p,w),[p,w]);return(0,t.jsx)("iframe",{...u,ref:b,src:g.src,title:m})});e.s(["VideoIframe",0,m],850034)},806406,e=>{"use strict";let t;var i=e.i(271645),n=e.i(35820),o=e.i(182180),a=e.i(472945);e.s(["useYouTubeVideoTracking",0,function(e,r,d){let s=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let i,d,l=s.current;if(!l)return;let c=!1,m=!1,u=new Set,p=()=>{void 0!==i&&window.clearInterval(i),i=void 0},f=()=>{if(!d)return;let t=d.getDuration();if(!Number.isFinite(t)||t<=0)return;let i=d.getCurrentTime()/t*100;(0,n.getNewVideoProgressThresholds)(i,u).forEach(t=>{u.add(t),(0,a.trackVideoProgress)(e,t,r)})},g=t=>{1===t?(m||(m=!0,(0,o.trackVideoPlayed)(e,r)),void 0===i&&(i=window.setInterval(f,1e3))):(0===t||2===t)&&(f(),p(),0===t&&(m=!1))};return(window.YT?.Player?Promise.resolve(window.YT):t||(t=new Promise(e=>{let t=window.onYouTubeIframeAPIReady;if(window.onYouTubeIframeAPIReady=()=>{t?.(),window.YT&&e(window.YT)},!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')){let e=document.createElement("script");e.src="https://www.youtube.com/iframe_api",document.head.appendChild(e)}}))).then(e=>{c||(d=new e.Player(l,{events:{onReady:()=>g(d?.getPlayerState()??-1),onStateChange:e=>g(e.data)}}))}),()=>{c=!0,p(),d?.destroy()}},[d,r,e]),s}],806406)},53496,e=>{"use strict";e.s(["combineRefs",0,function(...e){return function(t){e.forEach(e=>{if(null!==e){if("function"==typeof e)return void e(t);e.current=t}})}}])},35820,472945,e=>{"use strict";let t=[25,50,75,90];e.s(["getNewVideoProgressThresholds",0,function(e,i){return t.filter(t=>e>=t&&!i.has(t))}],35820);var i=e.i(395967),n=e.i(924837),o=e.i(759609),a=e.i(627871);e.s(["trackVideoProgress",0,function(e,t,r){let d=(0,a.getVideoMetadata)(e,r),s={page_path:(0,o.getCurrentPagePath)(),progress_pct:t,video_id:d.videoId,video_title:d.videoTitle,video_url:d.videoUrl};(0,i.trackRudderstack)(n.TRACKING_EVENTS.VideoProgress,s)}],472945)},998990,e=>{"use strict";e.s(["CUSTOMER_LOGOS_HOSTED",0,{Algolia:"https://cdn.sanity.io/images/e92memrj/production/643fb40019cd60627bf6f354c5bffdfd66017ce9-97x51.svg",Brex:"https://cdn.sanity.io/images/e92memrj/production/797daac5d8ce0c8f853f32db64dddf44234caf15-110x50.svg",Candidly:"https://cdn.sanity.io/images/e92memrj/production/5fb6f6dd0ff002808f2382c81a66cd28410a4ac9-166x50.svg",Chime:"https://cdn.sanity.io/images/e92memrj/production/20bf8a6fe0ca725b28527c135c22f237938f5ef5-94x50.svg",ClickUp:"https://cdn.sanity.io/images/e92memrj/production/8ec37f2330ffd132be12ea66bad243453af0d047-119x50.svg",CustomerIO:"https://cdn.sanity.io/images/e92memrj/production/fc46557c4677964c57351c9affa635d558fe8cd8-170x40.svg",Doximity:"https://cdn.sanity.io/images/e92memrj/production/17b8982db750bfc51b7aa08783c5e1f8d3432d63-125x50.svg",Figma:"https://cdn.sanity.io/images/e92memrj/production/f7df402cfb3dac549c3f877c09425534abc7650b-97x50.svg",Huckberry:"https://cdn.sanity.io/images/e92memrj/production/8194d2de15059f3f69d4fb8dbc03b2f7bfb04af4-134x50.svg",InfiniteLambda:"https://cdn.sanity.io/images/e92memrj/production/638503884c2ca511d9816fc46d5d13f05551bd26-110x50.svg",Inventa:"https://cdn.sanity.io/images/e92memrj/production/2b33cd7f123f50efbd8ea42ea9235382e207633e-132x50.svg",LangChain:"https://cdn.sanity.io/images/e92memrj/production/0b907ba3d40fe1012f1118d105620c7779a49949-135x50.svg",Lovable:"https://cdn.sanity.io/images/e92memrj/production/d063f2a64adcd7869bc2fc81dbc971825be8b951-137x50.svg",MedScout:"https://cdn.sanity.io/images/e92memrj/production/ab190c6c708ad1b738c3dd93e3c9d64718788935-168x50.svg",Mercor:"https://cdn.sanity.io/images/e92memrj/production/92b9cd2232a417db021ffe38f96d45a896e85cba-131x50.svg",NeoFinancial:"https://cdn.sanity.io/images/e92memrj/production/ba0c09ff2b2ba796246ce69e4e971751bccaae37-76x50.svg",Notion:"https://cdn.sanity.io/images/e92memrj/production/6f211c674b14be69b85497264b1d654b138dce01-39x50.svg",PandaDoc:"https://cdn.sanity.io/images/e92memrj/production/728e1e88c0a31f218d18971d3e9da2de81bad906-120x50.svg",ProductHunt:"https://cdn.sanity.io/images/e92memrj/production/0334d3583cd66c0361cd0c3b1bd28d92307cf01a-126x50.svg",Ramp:"https://cdn.sanity.io/images/e92memrj/production/892932e7f3dc3c66d3ae4a16e8bc51e37b7f59f4-120x50.svg",StubHub:"https://cdn.sanity.io/images/e92memrj/production/84cee8330df6df867d752ef0336d987b73845add-81x50.svg",WeightsAndBiases:"https://cdn.sanity.io/images/e92memrj/production/1eaf4b79b17b9f39d479a6cca9f8b60e06105d44-169x50.svg",Zoe:"https://cdn.sanity.io/images/e92memrj/production/ac4cbae3f4b1d599f5d51d290bd183be0b16253a-114x50.svg"}])},922998,(e,t,i)=>{Object.defineProperty(i,"__esModule",{value:!0});var n=e.r(271645),o=n&&"object"==typeof n&&"default"in n?n:{default:n};!function(e){if(!e||"u"<typeof window)return;let t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t)}('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}'),i.default=n.forwardRef(function({style:e={},className:t="",autoFill:i=!1,play:a=!0,pauseOnHover:r=!1,pauseOnClick:d=!1,direction:s="left",speed:l=50,delay:c=0,loop:m=0,gradient:u=!1,gradientColor:p="white",gradientWidth:f=200,onFinish:g,onCycleComplete:h,onMount:x,children:y},w){let[b,v]=n.useState(0),[_,C]=n.useState(0),[j,I]=n.useState(1),[$,N]=n.useState(!1),L=n.useRef(null),k=w||L,A=n.useRef(null),T=n.useCallback(()=>{if(A.current&&k.current){let e=k.current.getBoundingClientRect(),t=A.current.getBoundingClientRect(),n=e.width,o=t.width;("up"===s||"down"===s)&&(n=e.height,o=t.height),i&&n&&o?I(o<n?Math.ceil(n/o):1):I(1),v(n),C(o)}},[i,k,s]);n.useEffect(()=>{if($&&(T(),A.current&&k.current)){let e=new ResizeObserver(()=>T());return e.observe(k.current),e.observe(A.current),()=>{e&&e.disconnect()}}},[T,k,$]),n.useEffect(()=>{T()},[T,y]),n.useEffect(()=>{N(!0)},[]),n.useEffect(()=>{"function"==typeof x&&x()},[]);let S=n.useMemo(()=>i?_*j/l:_<b?b/l:_/l,[i,b,_,j,l]),M=n.useMemo(()=>Object.assign(Object.assign({},e),{"--pause-on-hover":!a||r?"paused":"running","--pause-on-click":!a||r&&!d||d?"paused":"running","--width":"up"===s||"down"===s?"100vh":"100%","--transform":"up"===s?"rotate(-90deg)":"down"===s?"rotate(90deg)":"none"}),[e,a,r,d,s]),E=n.useMemo(()=>({"--gradient-color":p,"--gradient-width":"number"==typeof f?`${f}px`:f}),[p,f]),Q=n.useMemo(()=>({"--play":a?"running":"paused","--direction":"left"===s?"normal":"reverse","--duration":`${S}s`,"--delay":`${c}s`,"--iteration-count":m?`${m}`:"infinite","--min-width":i?"auto":"100%"}),[a,s,S,c,m,i]),P=n.useMemo(()=>({"--transform":"up"===s?"rotate(90deg)":"down"===s?"rotate(-90deg)":"none"}),[s]),R=n.useCallback(e=>[...Array(Number.isFinite(e)&&e>=0?e:0)].map((e,t)=>o.default.createElement(n.Fragment,{key:t},n.Children.map(y,e=>o.default.createElement("div",{style:P,className:"rfm-child"},e)))),[P,y]);return $?o.default.createElement("div",{ref:k,style:M,className:"rfm-marquee-container "+t},u&&o.default.createElement("div",{style:E,className:"rfm-overlay"}),o.default.createElement("div",{className:"rfm-marquee",style:Q,onAnimationIteration:h,onAnimationEnd:g},o.default.createElement("div",{className:"rfm-initial-child-container",ref:A},n.Children.map(y,e=>o.default.createElement("div",{style:P,className:"rfm-child"},e))),R(j-1)),o.default.createElement("div",{className:"rfm-marquee",style:Q},R(j))):null})}]);