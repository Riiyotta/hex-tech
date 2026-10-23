(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,904685,e=>{e.v({label:"CustomerBannerSectionLabel-module__1XCmuW__label"})},647255,e=>{e.v({author:"CustomerLogo-module__-F7ANW__author",popover:"CustomerLogo-module__-F7ANW__popover",story:"CustomerLogo-module__-F7ANW__story"})},590949,e=>{e.v({accents:"CustomerBanner-module__QGw5Ra__accents",frame:"CustomerBanner-module__QGw5Ra__frame",label:"CustomerBanner-module__QGw5Ra__label",logo:"CustomerBanner-module__QGw5Ra__logo",logoDefault:"CustomerBanner-module__QGw5Ra__logoDefault",logoMinimal:"CustomerBanner-module__QGw5Ra__logoMinimal",logos:"CustomerBanner-module__QGw5Ra__logos",logosDefault:"CustomerBanner-module__QGw5Ra__logosDefault",logosMinimal:"CustomerBanner-module__QGw5Ra__logosMinimal",minimal:"CustomerBanner-module__QGw5Ra__minimal",minimalTitle:"CustomerBanner-module__QGw5Ra__minimalTitle",rule:"CustomerBanner-module__QGw5Ra__rule",topEdge:"CustomerBanner-module__QGw5Ra__topEdge"})},321688,e=>{"use strict";var t=e.i(843476),r=e.i(271645),o=e.i(343794),a=e.i(846932),n=e.i(991709);e.i(726497);var i=e.i(778888),l=e.i(904685);function s({className:e,...r}){return(0,t.jsx)("h2",{...r,className:(0,o.default)("annotation",l.default.label,e)})}var c=e.i(373431),d=e.i(88653),m=e.i(63209),h=e.i(657688),u=e.i(522016),p=e.i(193594),g=e.i(997053),v=e.i(665419),f=e.i(647255);let x=({compact:e=!1,customer:o,showStory:n=!0,trackingLabel:i})=>{let l=o.quotes[0],s=o.slug,c=o.logoWidth??120,u=o.logoHeight??50,[p,g]=(0,r.useState)(!1);if(!n||!l||!s)return(0,t.jsx)(C,{$compact:e,$isTrustBand:!n,children:(0,t.jsx)(h.default,{alt:`Hex customer: ${o.name}`,height:u,src:o.logoUrl,style:{aspectRatio:`${c} / ${u}`,width:"auto"},unoptimized:!0,width:c})});let x=`story-hover-${s}`,S=`story-hover-inner-${s}`;return(0,t.jsx)(m.MotionConfig,{transition:{type:"spring",visualDuration:.22,bounce:.12},children:(0,t.jsxs)("div",{className:f.default.story,children:[(0,t.jsxs)(_,{$compact:e,"data-tracking-label":i,href:`${v.INTERNAL_LINKS.Customers}${s}`,children:[(0,t.jsx)(d.AnimatePresence,{children:p?null:(0,t.jsx)(b,{as:a.motion.div,layout:!0,layoutId:x,style:{borderRadius:6},children:(0,t.jsx)(a.motion.div,{layout:"position",layoutId:S,style:{position:"absolute",inset:"auto 0 auto 0"}})})}),(0,t.jsxs)(M,{onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1),children:[(0,t.jsx)(a.motion.div,{animate:{opacity:p?.32:1},children:(0,t.jsx)(h.default,{alt:`Hex customer: ${o.name}`,height:u,src:o.logoUrl,style:{aspectRatio:`${c} / ${u}`,width:"auto"},unoptimized:!0,width:c})}),(0,t.jsx)(j,{children:(0,t.jsx)(d.AnimatePresence,{children:p?(0,t.jsx)(E,{as:a.motion.div,layout:!0,layoutId:x,style:{borderRadius:12},children:(0,t.jsxs)(a.motion.div,{layout:"position",layoutId:S,style:{display:"flex",alignItems:"center",gap:12},children:["Read story ",(0,t.jsx)(w,{})]})}):null})})]})]}),(0,t.jsxs)(z,{className:f.default.popover,"data-customer-popover":"",children:[(0,t.jsx)($,{alt:`Hex customer: ${o.name}`,"data-markdown-exclude":"",src:o.logoUrl}),(0,t.jsx)(k,{children:(0,t.jsx)(y,{})}),(0,t.jsxs)(L,{children:['"',l.quote,'"']}),(0,t.jsxs)(N,{children:[(0,t.jsx)(I,{as:"strong",className:f.default.author,children:l.author})," ",l.authorTitle?(0,t.jsx)(A,{children:l.authorTitle}):null]})]})]})})};function y(){return(0,t.jsx)("svg",{"aria-hidden":"true",fill:"none",height:"12",viewBox:"0 0 15 15",width:"12",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M6.91699 1.30798V6.30603L6.85352 6.41931L3.10938 13.139L2.85547 13.5951L2.41113 13.3217L1.16309 12.5541L0.770508 12.3119L0.979492 11.9008L3.45898 7.02576L1.7793 6.40466L1.45312 6.28455V1.30798H6.91699ZM13.8291 1.30798V6.30603L13.7656 6.41931L10.0215 13.139L9.76758 13.5951L9.32324 13.3217L8.0752 12.5541L7.68164 12.3119L7.8916 11.9008L10.3711 7.02576L8.69141 6.40466L8.36523 6.28455V1.30798H13.8291Z",stroke:"currentColor"})})}function w(){return(0,t.jsx)("svg",{"aria-hidden":"true",fill:"none",height:"10",viewBox:"0 0 16 10",width:"16",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M1 5h14M11 1l4 4-4 4",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})})}x.displayName="CustomerLogo";let C=g.default.div.withConfig({displayName:"CustomerLogo__PlainLogo",componentId:"sc-8dd4a870-0"})`
  padding: ${({$compact:e})=>e?"0":"0 8px"};
  height: 100%;
  display: flex;
  align-items: center;

  img {
    ${({theme:e})=>e.customerLogoColor};
    height: ${({$isTrustBand:e})=>e?"100%":"40px"};
    width: auto;
  }
`,z=g.default.div.withConfig({displayName:"CustomerLogo__CustomerStoryPopover",componentId:"sc-8dd4a870-1"})`
  position: absolute;
  width: 300px;
  bottom: calc(100% + 16px);
  left: 0;
  transform: translateY(-28px);
  opacity: 0;
  padding: 8px 16px 16px 16px;
  z-index: 2;
  transition:
    transform ${(0,c.spring)(.28,.24).toString()},
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
`,_=(0,g.default)(u.default).withConfig({displayName:"CustomerLogo__LogoLink",componentId:"sc-8dd4a870-2"})`
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
`,b=g.default.div.withConfig({displayName:"CustomerLogo__CustomerStoryIndicator",componentId:"sc-8dd4a870-3"})`
  position: absolute;
  top: -8px;
  right: -12px;
  height: 12px;
  aspect-ratio: 1 / 1;
  display: grid;
  place-items: center;
  border-radius: 999px;
  background-color: ${({theme:e})=>(0,p.rgba)((0,p.darken)(.08,e.palette.fgLoud),.16)};
  border: 1px solid
    ${({theme:e})=>(0,p.rgba)((0,p.darken)(.08,e.palette.fgLoud),.16)};
  white-space: nowrap;
  color: ${({theme:e})=>(0,p.rgba)((0,p.darken)(.08,e.palette.fgLoud),.8)};
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
`,M=g.default.div.withConfig({displayName:"CustomerLogo__Pile",componentId:"sc-8dd4a870-4"})`
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
`,j=g.default.div.withConfig({displayName:"CustomerLogo__CenterForSafari",componentId:"sc-8dd4a870-5"})`
  display: grid;
  place-items: center;
  place-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
`,E=g.default.div.withConfig({displayName:"CustomerLogo__StoryHoverIndicator",componentId:"sc-8dd4a870-6"})`
  border-radius: 999px;
  z-index: 1;
  white-space: nowrap;
  color: ${({theme:e})=>e.palette.fgLoud};
  line-height: 1.2;
  overflow: hidden;
  padding: 4px 12px 4px 16px;
  font-size: ${({theme:e})=>e.fontSize.SMALL};
  ${({theme:e})=>e.popover};
`,$=g.default.img.withConfig({displayName:"CustomerLogo__PopoverLogo",componentId:"sc-8dd4a870-7"})`
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
    background-color: ${({theme:e})=>(0,p.rgba)(e.palette.fgLoud,.16)};
  }
`,L=g.default.blockquote.withConfig({displayName:"CustomerLogo__PopoverQuote",componentId:"sc-8dd4a870-9"})`
  margin: 0;
  font-weight: ${({theme:e})=>e.fontWeight.LIGHT};
  font-size: ${({theme:e})=>e.fontSize.DEFAULT};
  quotes: none;
`,N=g.default.p.withConfig({displayName:"CustomerLogo__PopoverAttribution",componentId:"sc-8dd4a870-10"})`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin: 12px 0 0;
  color: ${({theme:e})=>e.palette.fg1100};
`,I=g.default.span.withConfig({displayName:"CustomerLogo__PopoverAuthor",componentId:"sc-8dd4a870-11"})`
  font-size: ${({theme:e})=>e.fontSize.EXTRA_SMALL};
`,A=g.default.span.withConfig({displayName:"CustomerLogo__PopoverAuthorTitle",componentId:"sc-8dd4a870-12"})`
  font-size: ${({theme:e})=>e.fontSize.EXTRA_SMALL};
  opacity: 0.7;
`;var S=e.i(590949);e.s(["CustomerBanner",0,function({data:e,trackingLabelPrefix:l}){let c=(0,r.useRef)(null),d=e?.variant==="minimal"?"minimal":"default",m=e?.showStories!==!1;if((0,r.useEffect)(()=>{let e=c.current;if(!e||!m)return;function t(){if(!e)return;let t=e.querySelectorAll("[data-customer-popover]"),r=window.innerWidth-100;for(let e of t){let t=e.getBoundingClientRect(),o=e.parentElement?.getBoundingClientRect(),a=(o?.left??0)+t.width>r;e.setAttribute("data-align",a?"right":"left")}}let r=new ResizeObserver(()=>t());return t(),r.observe(e),()=>r.disconnect()},[e?.customers.length,m]),!e?.customers.length)return null;let h=e.eyebrow?.trim()||"Trusted by leading data companies",u=(0,t.jsx)("ul",{ref:c,className:(0,o.default)(S.default.logos,"minimal"===d?S.default.logosMinimal:S.default.logosDefault),role:"list",children:e.customers.map((e,r)=>(0,t.jsx)("li",{className:(0,o.default)(S.default.logo,"minimal"===d?S.default.logoMinimal:S.default.logoDefault),children:(0,t.jsx)(x,{compact:"default"===d,customer:e,showStory:m,trackingLabel:l?`${l} ${e.slug}`:void 0})},`${e.name}-${r}`))});return"minimal"===d?(0,t.jsxs)(a.motion.div,{...n.ANIMATIONS.SimpleFadeIn,className:S.default.minimal,children:[(0,t.jsx)("p",{className:(0,o.default)(i.textStyles.base,S.default.minimalTitle),children:h}),u]}):(0,t.jsxs)(a.motion.div,{...n.ANIMATIONS.SimpleFadeIn,className:S.default.frame,children:[(0,t.jsx)("div",{className:S.default.accents}),(0,t.jsxs)("div",{className:S.default.topEdge,children:[(0,t.jsx)("span",{"aria-hidden":"true",className:S.default.rule}),(0,t.jsx)(s,{className:S.default.label,children:h}),(0,t.jsx)("span",{"aria-hidden":"true",className:S.default.rule})]}),u]})}],321688)},909541,e=>{e.v({answerParagraph:"FAQ-module__E5gmgG__answerParagraph",questionHeading:"FAQ-module__E5gmgG__questionHeading"})},558202,e=>{"use strict";var t=e.i(843476),r=e.i(271645),o=e.i(846932),a=e.i(997053),n=e.i(258591),i=e.i(650617),l=e.i(430388),s=e.i(637804),c=e.i(991709),d=e.i(665419),m=e.i(909541);let h=r.memo(({footer:e,footerLinkTrackingLabel:r,heading:o="FAQ",items:a,noBkg:n=!1,noPadding:i=!1,questionHeadingLevel:l="h3",showFooter:m=!0,showHeader:h=!0,fullWidth:u=!1})=>(0,t.jsxs)(g,{...c.ANIMATIONS.SimpleFadeIn,$noBkg:n,$noPadding:i,id:"faq",children:[(0,t.jsx)("noscript",{children:(0,t.jsx)("style",{children:`.${g.styledComponentId} .${_.styledComponentId} { display: flex !important; }`})}),(0,t.jsxs)(f,{$fullWidth:u,children:[h&&(0,t.jsx)(x,{children:(0,t.jsx)(b,{renderAs:"h2",children:o})}),(0,t.jsx)(y,{children:a.map((e,r)=>(0,t.jsx)(p,{answer:e.answer,id:e.id,question:e.question,questionHeadingLevel:l},e.id??r))}),m&&(0,t.jsx)(v,{size:"medium",children:e??(0,t.jsxs)(t.Fragment,{children:["Can't find your answer here?"," ",(0,t.jsx)(s.SiteLink,{href:d.INTERNAL_LINKS.RequestADemo,trackingLabel:r,children:"Get in touch"}),"."]})})]})]}));h.displayName="FAQ";let u=(0,a.default)(l.ChevronDown).withConfig({displayName:"FAQ__ChevronIcon",componentId:"sc-c91ba0f9-0"})`
  transform: rotate(${({$isOpen:e})=>e?"0deg":"-90deg"});
`,p=r.memo(({question:e,answer:o,id:a,questionHeadingLevel:n})=>{let[i,l]=(0,r.useState)(!1),s=(0,r.useId)(),c=a??s,d=`${c}-question`,h=`${c}-answer`;return(0,r.useEffect)(()=>{let e=()=>{a&&window.location.hash===`#${a}`?setTimeout(()=>{l(!0)},50):window.location.hash&&window.location.hash.startsWith("#faq-")&&l(!1)};return e(),window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[a]),(0,t.jsxs)(w,{"data-name":"faq-item",id:a,children:[(0,t.jsx)(n,{className:m.default.questionHeading,children:(0,t.jsxs)(C,{$isOpen:i,"aria-controls":h,"aria-expanded":i,id:d,type:"button",onClick:()=>{let e=!i;l(e),e&&a?window.history.replaceState(null,"",`#${a}`):e||window.location.hash!==`#${a}`||window.history.replaceState(null,"",window.location.pathname+window.location.search)},children:[(0,t.jsx)(z,{children:e}),(0,t.jsx)("span",{"aria-hidden":!0,children:(0,t.jsx)(u,{$isOpen:i})})]})}),(0,t.jsx)(_,{$isOpen:i,"aria-labelledby":d,id:h,role:"region",children:"string"==typeof o?(0,t.jsx)("p",{className:m.default.answerParagraph,children:o}):o})]})});p.displayName="FAQItem";let g=(0,a.default)(o.motion.div).withConfig({displayName:"FAQ__Wrapper",componentId:"sc-c91ba0f9-1"})`
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
`,v=(0,a.default)(i.Text).withConfig({displayName:"FAQ__DescText",componentId:"sc-c91ba0f9-2"})`
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
`,x=a.default.div.withConfig({displayName:"FAQ__Top",componentId:"sc-c91ba0f9-4"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
`,y=a.default.div.withConfig({displayName:"FAQ__List",componentId:"sc-c91ba0f9-5"})`
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
`,C=a.default.button.withConfig({displayName:"FAQ__ItemTop",componentId:"sc-c91ba0f9-7"})`
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
`,z=a.default.span.withConfig({displayName:"FAQ__Question",componentId:"sc-c91ba0f9-8"})`
  color: ${({theme:e})=>e.fontColor.LOUD};
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.5px;
`,_=(0,a.default)(i.Text).attrs({size:"medium",as:"div"}).withConfig({displayName:"FAQ__Answer",componentId:"sc-c91ba0f9-9"})`
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
`;var b=(0,a.default)(n.Heading).withConfig({displayName:"FAQ___StyledHeading",componentId:"sc-c91ba0f9-10"})`
                  margin: 15px 0px;
                `;e.s(["FAQ",0,h,"FAQ_ID",0,"faq"])},986740,e=>{"use strict";var t,r,o,a,n,i,l,s,c,d,m,h,u,p,g,v,f,x,y,w,C,z,_,b,M,j,E,$,k,L,N,I,A,S,B,D,Q,R,T,F,H,O,P,q,G,V,W,U,Z,K,J,X,Y,ee,et,er,eo,ea=e.i(843476),en=e.i(271645),ei=e.i(997053);function el(){return(el=Object.assign.bind()).apply(null,arguments)}function es(){return(es=Object.assign.bind()).apply(null,arguments)}function ec(){return(ec=Object.assign.bind()).apply(null,arguments)}function ed(){return(ed=Object.assign.bind()).apply(null,arguments)}function em(){return(em=Object.assign.bind()).apply(null,arguments)}function eh(){return(eh=Object.assign.bind()).apply(null,arguments)}function eu(){return(eu=Object.assign.bind()).apply(null,arguments)}function ep(){return(ep=Object.assign.bind()).apply(null,arguments)}function eg(){return(eg=Object.assign.bind()).apply(null,arguments)}function ev(){return(ev=Object.assign.bind()).apply(null,arguments)}let ef={1:function(e){return en.createElement("svg",el({xmlns:"http://www.w3.org/2000/svg",width:60,height:60,fill:"none",viewBox:"0 0 60 60"},e),t||(t=en.createElement("path",{stroke:"currentColor",d:"M3 25.5h55","data-color":"primary"})),r||(r=en.createElement("path",{stroke:"currentColor",strokeDasharray:"1 2",d:"M11.5 57.36V3","data-color":"primary"})),o||(o=en.createElement("path",{stroke:"currentColor",d:"M3 36.6h55","data-color":"primary"})),a||(a=en.createElement("path",{stroke:"currentColor",strokeDasharray:"1 2",d:"M21.5 57.36V3","data-color":"primary"})),n||(n=en.createElement("circle",{cx:38.357,cy:47.786,r:3.929,fill:"currentColor","data-color":"highlight"})),i||(i=en.createElement("path",{stroke:"currentColor",d:"M3.5 13.5h44v44h-44z","data-color":"secondary"})))},2:function(e){return en.createElement("svg",es({xmlns:"http://www.w3.org/2000/svg",width:60,height:60,fill:"none",viewBox:"0 0 60 60"},e),l||(l=en.createElement("path",{stroke:"currentColor",d:"M.5 16.5h19v19H.5zM34.5 28.5h19v19h-19zM.5 40.5h19v19H.5z","data-color":"secondary"})),s||(s=en.createElement("path",{stroke:"currentColor",strokeLinecap:"square",d:"M10.532 15.117a8.75 8.75 0 0 1 8.747-8.748h38.793","data-color":"primary"})),c||(c=en.createElement("path",{stroke:"currentColor",strokeLinecap:"square",d:"M44.406 27.117V13.495a7.126 7.126 0 0 1 7.126-7.126","data-color":"primary"})),d||(d=en.createElement("circle",{cx:10,cy:26,r:3,fill:"currentColor","data-color":"highlight"})),m||(m=en.createElement("circle",{cx:10,cy:50,r:3,fill:"currentColor","data-color":"highlight"})),h||(h=en.createElement("circle",{cx:44,cy:38,r:3,fill:"currentColor","data-color":"highlight"})),u||(u=en.createElement("path",{stroke:"currentColor",strokeDasharray:"1 4",strokeLinecap:"square",d:"M20.694 50.19a8.135 8.135 0 0 0 8.135-8.136V16.37c0-5.522 4.477-10 10-10h5.135","data-color":"primary"})),p||(p=en.createElement("path",{fill:"currentColor",d:"M53.817 12v-1.414l4.413-4.412-4.413-4.413V.347l5.828 5.827z","data-color":"primary"})))},3:function(e){return en.createElement("svg",ec({xmlns:"http://www.w3.org/2000/svg",width:60,height:60,fill:"none",viewBox:"0 0 60 60"},e),g||(g=en.createElement("path",{fill:"currentColor",d:"M10.186 31h.5v-1h-.5v1m0-.5V30H0v1h10.186z","data-color":"primary"})),v||(v=en.createElement("path",{stroke:"currentColor",d:"M-.433-.25h27.488v37.605H-.433z","data-color":"secondary",transform:"matrix(-.86603 .5 0 -1 33.863 42.717)"})),f||(f=en.createElement("path",{stroke:"currentColor",d:"M23.756 30.283 59.5 8M23.756 30.717 59 53M23.756 30.283H59.5","data-color":"primary"})),x||(x=en.createElement("path",{stroke:"currentColor",strokeDasharray:"1 2",d:"M23.643 30.471 59.5 19.5M23.644 30.269 59.5 42","data-color":"primary"})),y||(y=en.createElement("circle",{cx:3.929,cy:3.929,r:3.929,fill:"currentColor","data-color":"highlight",transform:"matrix(.86603 -.5 0 1 21.4 28)"})))},4:function(e){return en.createElement("svg",ed({xmlns:"http://www.w3.org/2000/svg",width:60,height:60,fill:"none",viewBox:"0 0 60 60"},e),w||(w=en.createElement("circle",{cx:18,cy:15,r:11.5,stroke:"currentColor","data-color":"secondary"})),C||(C=en.createElement("path",{stroke:"currentColor",d:"M6.5 33.5h21v21h-21zM56.184 54.441H33.462l11.36-19.676z","data-color":"secondary"})),z||(z=en.createElement("path",{fill:"currentColor",d:"M45.324 15.706v-.5h-1v.5h1m-1 .484v.5h1v-.5h-1m1 3.872v-.5h-1v.5h1m-1 .968v.5h1v-.5h-1m1 3.872v-.5h-1v.5h1m-1 .968v.5h1v-.5h-1m1 3.873v-.5h-1v.5h1m-1 .968v.5h1v-.5h-1m1 3.872v-.5h-1v.5h1m-1 .968v.5h1v-.5h-1m1 3.872v-.5h-1v.5h1m-1 .969v.5h1v-.5h-1m1 3.872v-.5h-1v.5h1m-1 .968v.5h1v-.5h-1m1 3.872v-.5h-1v.5h1m-.5-33.398h-.5v.484h1v-.484zm0 4.356h-.5v.968h1v-.968zm0 4.84h-.5v.968h1v-.968zm0 4.84h-.5v.969h1v-.968zm0 4.841h-.5v.968h1v-.968zm0 4.84h-.5v.969h1v-.969zm0 4.84h-.5v.969h1v-.968zm0 4.841h-.5v.484h1v-.484zm.5-33.398v-.5h-1v.5h1m-1 .484v.5h1v-.5h-1m1 3.872v-.5h-1v.5h1m-1 .968v.5h1v-.5h-1m1 3.872v-.5h-1v.5h1m-1 .968v.5h1v-.5h-1m1 3.873v-.5h-1v.5h1m-1 .968v.5h1v-.5h-1m1 3.872v-.5h-1v.5h1m-1 .968v.5h1v-.5h-1m1 3.872v-.5h-1v.5h1m-1 .969v.5h1v-.5h-1m1 3.872v-.5h-1v.5h1m-1 .968v.5h1v-.5h-1m1 3.872v-.5h-1v.5h1m-.5-33.398h-.5v.484h1v-.484zm0 4.356h-.5v.968h1v-.968zm0 4.84h-.5v.968h1v-.968zm0 4.84h-.5v.969h1v-.968zm0 4.841h-.5v.968h1v-.968zm0 4.84h-.5v.969h1v-.969zm0 4.84h-.5v.969h1v-.968zm0 4.841h-.5v.484h1v-.484zM43.412 16.206h.5v-1h-.5v1m-.523-1h-.5v1h.5v-1m-4.179 1h.5v-1h-.5v1m-1.044-1h-.5v1h.5v-1m-4.18 1h.5v-1h-.5v1m-1.044-1h-.5v1h.5v-1m-4.179 1h.5v-1h-.5v1m-1.044-1h-.5v1h.5v-1m-4.18 1h.5v-1h-.5v1m-1.044-1h-.5v1h.5v-1m-4.179 1h.5v-1h-.5v1m25.596-.5v-.5h-.523v1h.523zm-4.702 0v-.5h-1.044v1h1.044zm-5.223 0v-.5h-1.045v1h1.045zm-5.224 0v-.5H27.22v1h1.044zm-5.223 0v-.5h-1.045v1h1.045zm-5.224 0v-.5h-.522v1h.522zm25.596.5h.5v-1h-.5v1m-.523-1h-.5v1h.5v-1m-4.179 1h.5v-1h-.5v1m-1.044-1h-.5v1h.5v-1m-4.18 1h.5v-1h-.5v1m-1.044-1h-.5v1h.5v-1m-4.179 1h.5v-1h-.5v1m-1.044-1h-.5v1h.5v-1m-4.18 1h.5v-1h-.5v1m-1.044-1h-.5v1h.5v-1m-4.179 1h.5v-1h-.5v1m25.596-.5v-.5h-.523v1h.523zm-4.702 0v-.5h-1.044v1h1.044zm-5.223 0v-.5h-1.045v1h1.045zm-5.224 0v-.5H27.22v1h1.044zm-5.223 0v-.5h-1.045v1h1.045zm-5.224 0v-.5h-.522v1h.522z","data-color":"primary"})),_||(_=en.createElement("path",{fill:"currentColor",d:"m45.196 15.334.334-.373-.745-.667-.334.373.373.334zM18.36 45.308l.333-.373-.745-.667-.333.373.372.333zm1.972-3.703-.333.373.745.667.333-.373-.372-.333zm1.425-.091.333-.373-.745-.667-.333.372.372.334zm1.972-3.703-.333.373.745.667.333-.373-.372-.333zm1.425-.092.333-.372-.745-.667-.333.372.372.334zm1.972-3.702-.333.372.745.667.333-.372-.372-.334zm1.425-.092.333-.372-.745-.667-.333.372.372.334zm1.972-3.702-.333.372.745.667.333-.372-.372-.334zm1.425-.092.333-.372-.745-.668-.333.373.372.334zm1.972-3.702-.333.372.745.667.334-.372-.373-.334zm1.425-.092.333-.372-.745-.668-.333.373.372.333zm1.973-3.702-.334.372.745.667.334-.372-.373-.334zm1.424-.092.334-.373-.745-.667-.334.373.372.333zm1.973-3.703-.334.373.745.667.334-.372-.373-.334zm1.424-.091.333-.373-.745-.667-.333.373.373.333zm1.973-3.703-.334.373.745.667.334-.373-.373-.333zM17.647 45.353l.373.334.34-.38-.373-.333-.372-.333-.34.379zm3.058-3.414.372.333.68-.758-.373-.334-.372-.334-.68.76zm3.397-3.794.372.333.68-.759-.373-.333-.372-.334-.68.76zm3.397-3.795.372.334.68-.759-.373-.333-.372-.334-.68.759zm3.397-3.794.372.334.68-.759-.373-.333-.372-.334-.68.759zm3.397-3.794.373.334.679-.759-.373-.334-.372-.333-.68.759zm3.397-3.794.373.334.679-.76-.373-.333-.372-.333-.68.759zm3.397-3.794.373.334.679-.76-.373-.333-.372-.333-.68.758zm3.397-3.794.373.333.34-.379-.373-.333-.373-.334-.34.38zm.712-.046.334-.373-.745-.667-.334.373.373.334zM18.36 45.308l.333-.373-.745-.667-.333.373.372.333zm1.972-3.703-.333.373.745.667.333-.373-.372-.333zm1.425-.091.333-.373-.745-.667-.333.372.372.334zm1.972-3.703-.333.373.745.667.333-.373-.372-.333zm1.425-.092.333-.372-.745-.667-.333.372.372.334zm1.972-3.702-.333.372.745.667.333-.372-.372-.334zm1.425-.092.333-.372-.745-.667-.333.372.372.334zm1.972-3.702-.333.372.745.667.333-.372-.372-.334zm1.425-.092.333-.372-.745-.668-.333.373.372.334zm1.972-3.702-.333.372.745.667.334-.372-.373-.334zm1.425-.092.333-.372-.745-.668-.333.373.372.333zm1.973-3.702-.334.372.745.667.334-.372-.373-.334zm1.424-.092.334-.373-.745-.667-.334.373.372.333zm1.973-3.703-.334.373.745.667.334-.372-.373-.334zm1.424-.091.333-.373-.745-.667-.333.373.373.333zm1.973-3.703-.334.373.745.667.334-.373-.373-.333zM17.647 45.353l.373.334.34-.38-.373-.333-.372-.333-.34.379zm3.058-3.414.372.333.68-.758-.373-.334-.372-.334-.68.76zm3.397-3.794.372.333.68-.759-.373-.333-.372-.334-.68.76zm3.397-3.795.372.334.68-.759-.373-.333-.372-.334-.68.759zm3.397-3.794.372.334.68-.759-.373-.333-.372-.334-.68.759zm3.397-3.794.373.334.679-.759-.373-.334-.372-.333-.68.759zm3.397-3.794.373.334.679-.76-.373-.333-.372-.333-.68.759zm3.397-3.794.373.334.679-.76-.373-.333-.372-.333-.68.758zm3.397-3.794.373.333.34-.379-.373-.333-.373-.334-.34.38z","data-color":"primary"})),b||(b=en.createElement("circle",{cx:44,cy:16,r:4,fill:"currentColor","data-color":"highlight"})))},5:function(e){return en.createElement("svg",em({xmlns:"http://www.w3.org/2000/svg",width:60,height:60,fill:"none",viewBox:"0 0 60 60"},e),M||(M=en.createElement("path",{stroke:"currentColor",d:"M1.5 18.5h47v35h-47z","data-color":"primary"})),j||(j=en.createElement("path",{stroke:"currentColor",strokeDasharray:"1 4",strokeLinecap:"square",d:"M11.5 6.5h47v35h-47z","data-color":"secondary"})),E||(E=en.createElement("path",{stroke:"currentColor",d:"M41.301 25.9 58.235 6.356","data-color":"secondary"})),$||($=en.createElement("circle",{cx:38.707,cy:28.816,r:4.273,fill:"currentColor","data-color":"highlight"})))},6:function(e){return en.createElement("svg",eh({xmlns:"http://www.w3.org/2000/svg",width:60,height:60,fill:"none",viewBox:"0 0 60 60"},e),k||(k=en.createElement("path",{stroke:"currentColor",d:"M30.118 26.003c5.38 0 9.742 4.362 9.742 9.742s-4.362 9.742-9.742 9.742-9.741-4.362-9.741-9.742 4.36-9.741 9.74-9.742Z","data-color":"secondary"})),L||(L=en.createElement("path",{stroke:"currentColor",d:"M30.118 16.055c5.38 0 9.742 4.36 9.742 9.74 0 5.381-4.362 9.743-9.742 9.743s-9.741-4.362-9.741-9.742 4.36-9.741 9.74-9.741Z","data-color":"secondary"})),N||(N=en.createElement("path",{stroke:"currentColor",strokeDasharray:"2 2",d:"m6 44.045 24.17-13.954 24.17 13.954","data-color":"primary",opacity:.3})),I||(I=en.createElement("path",{stroke:"currentColor",d:"M54.34 16.955 30.17 3 6 16.955M53.905 44.296 30.17 58 6 44.046","data-color":"primary"})),A||(A=en.createElement("circle",{cx:30.446,cy:30.751,r:2.643,fill:"currentColor","data-color":"highlight"})),S||(S=en.createElement("path",{stroke:"currentColor",d:"M53.734 44.627V16.876M6.16 44.627V16.876","data-color":"primary"})),B||(B=en.createElement("path",{stroke:"currentColor",strokeDasharray:"2 2",d:"M29.948 57.181v-9.25M54.364 17.18l-13.015 5.973M19.215 22.822 6.66 16.992","data-color":"primary"})))},7:function(e){return en.createElement("svg",eu({xmlns:"http://www.w3.org/2000/svg",width:60,height:60,fill:"none",viewBox:"0 0 60 60"},e),D||(D=en.createElement("path",{stroke:"currentColor",strokeDasharray:"1 1.5",d:"m43.608 50.785 8.398-35.38L.411 22.398","data-color":"primary"})),Q||(Q=en.createElement("circle",{cx:51.819,cy:15.629,r:3.515,fill:"currentColor","data-color":"highlight"})),R||(R=en.createElement("path",{stroke:"currentColor",d:"M.5 22.487h43.074V51.08H.5z","data-color":"secondary"})),T||(T=en.createElement("path",{stroke:"currentColor",d:"M21.804 31.038c0 3.95-3.703 6.171-6.171 6.171 4.114 0 6.17 3.291 6.17 5.76 0-3.703 3.703-5.76 6.172-5.76-3.88 0-6.171-3.703-6.171-6.17Z","data-color":"primary"})),F||(F=en.createElement("path",{stroke:"currentColor",strokeDasharray:"1 1.5",d:"M14 22.5V8h45.5v29.5H44","data-color":"primary"})))},8:function(e){return en.createElement("svg",ep({xmlns:"http://www.w3.org/2000/svg",width:60,height:60,fill:"none",viewBox:"0 0 60 60"},e),H||(H=en.createElement("path",{stroke:"currentColor",strokeDasharray:"1 1.5",d:"M29.72 30.36c0-5.117.65-9.685-3.028-12.685A16.3 16.3 0 0 0 16.36 14C7.325 14 0 21.325 0 30.36s7.325 16.36 16.36 16.36c3.785 0 7.27-1.286 10.043-3.444","data-color":"primary"})),O||(O=en.createElement("path",{stroke:"currentColor",strokeDasharray:"1 1.5",d:"M29.72 30.36c0-9.035-4.434-16.36-9.902-16.36-5.47 0-9.902 7.325-9.902 16.36s4.433 16.36 9.902 16.36c1.993 0 3.849-.973 5.403-2.648","data-color":"primary"})),P||(P=en.createElement("path",{stroke:"currentColor",strokeDasharray:"1 1.5",d:"M29.72 30.36c0-9.035-1.542-16.36-3.444-16.36-1.903 0-3.445 7.325-3.445 16.36s1.542 16.36 3.445 16.36c.51 0 .996-.53 1.432-1.478","data-color":"primary"})),q||(q=en.createElement("path",{stroke:"currentColor",strokeDasharray:"1 1.5",d:"M29.72 30.36c0-5.117-.651-9.685 3.027-12.685A16.3 16.3 0 0 1 43.08 14c9.035 0 16.36 7.325 16.36 16.36s-7.325 16.36-16.36 16.36c-3.65 0-7.02-1.195-9.742-3.215","data-color":"primary"})),G||(G=en.createElement("path",{stroke:"currentColor",strokeDasharray:"1 1.5",d:"M29.72 30.36c0-9.035 4.433-16.36 9.902-16.36s9.902 7.325 9.902 16.36-4.434 16.36-9.902 16.36c-1.893 0-3.663-.878-5.166-2.4","data-color":"primary"})),V||(V=en.createElement("path",{stroke:"currentColor",strokeDasharray:"1 1.5",d:"M29.72 30.36c0-9.035 1.542-16.36 3.444-16.36s3.444 7.325 3.444 16.36-1.542 16.36-3.444 16.36c-.477 0-.93-.46-1.344-1.292","data-color":"primary"})),W||(W=en.createElement("circle",{cx:29.72,cy:30.36,r:2.583,fill:"currentColor","data-color":"highlight"})),U||(U=en.createElement("path",{stroke:"currentColor",d:"M54.69 30.79 29.72 15.723 3.888 30.791 29.72 45.859z","data-color":"secondary"})))},9:function(e){return en.createElement("svg",eg({xmlns:"http://www.w3.org/2000/svg",width:60,height:60,fill:"none",viewBox:"0 0 60 60"},e),Z||(Z=en.createElement("circle",{cx:39.515,cy:29.875,r:3.515,fill:"currentColor","data-color":"highlight"})),K||(K=en.createElement("path",{fill:"currentColor",d:"M52.333 30.36h.5zM39 43.693v.5zm-17.606 0v-.5h-.134l-.116.067zm-10.394 6h-.5v.866l.75-.433zm0-6.421h.5v-.388l-.375-.096zM1 30.36H.5zm13.333-13.333v-.5zm24.667 0v.5c7.088 0 12.833 5.745 12.833 12.833h1c0-7.64-6.193-13.833-13.833-13.833zM52.333 30.36h-.5c0 7.087-5.745 12.833-12.833 12.833v1c7.64 0 13.833-6.193 13.833-13.833zM39 43.693v-.5H21.394v1H39zm-17.606 0-.25-.433-10.394 6 .25.433.25.433 10.394-6zm-10.394 6h.5v-6.421h-1v6.42zm0-6.421.125-.484C5.59 41.363 1.5 36.338 1.5 30.36h-1c0 6.446 4.41 11.86 10.375 13.396zM1 30.36h.5c0-7.088 5.745-12.833 12.833-12.833v-1C6.693 16.527.5 22.72.5 30.36zm13.333-13.333v.5H39v-1H14.333z","data-color":"secondary"})),J||(J=en.createElement("circle",{cx:39,cy:30.36,r:12.5,stroke:"currentColor","data-color":"primary"})),X||(X=en.createElement("circle",{cx:39,cy:30.36,r:19.5,stroke:"currentColor",strokeDasharray:"1 1.5","data-color":"primary"})))},10:function(e){return en.createElement("svg",ev({xmlns:"http://www.w3.org/2000/svg",width:60,height:60,fill:"none",viewBox:"0 0 60 60"},e),Y||(Y=en.createElement("path",{fill:"currentColor",d:"M7.996 8h44v1h-44z","data-color":"secondary"})),ee||(ee=en.createElement("path",{fill:"currentColor",d:"M47.996 12v10h-1v-9h-19v-1zM12.996 47h19v1h-20V38h1z","data-color":"primary"})),et||(et=en.createElement("path",{fill:"currentColor",d:"M7.996 51h44v1h-44zM51.143 42.854a.5.5 0 0 0 .707 0l3.182-3.182a.5.5 0 1 0-.707-.707l-2.829 2.828-2.828-2.828a.5.5 0 1 0-.707.707zM51.496 8.5h-.5v34h1v-34z","data-color":"secondary"})),er||(er=en.createElement("path",{fill:"currentColor",d:"M8.861 17.146a.5.5 0 0 0-.707 0l-3.182 3.182a.5.5 0 1 0 .707.707l2.829-2.828 2.828 2.828a.5.5 0 1 0 .707-.707zM8.508 51.5h.5v-34h-1v34z","data-color":"secondary"})),eo||(eo=en.createElement("path",{fill:"currentColor",d:"M30.704 32.978h-1.21v-1.892l1.254-1.958 1.914-1.518.418-.858.176-1.144-.286-1.166-.66-.77-1.342-.484h-1.342l-1.188.33-.836.682-.264.506-.154.946-1.188-.242.198-1.034.418-.924 1.254-.99L29.428 22h1.782l1.76.682 1.1 1.078.418 1.87-.286 1.54-.572 1.122-1.87 1.518-1.056 1.672zm.418 4.84h-2.046v-2.134h2.046z","data-color":"highlight"})))}},ex=en.memo(({which:e,className:t})=>{let r=ef[e];return(0,ea.jsx)(ey,{className:t,children:(0,ea.jsx)(r,{})})});ex.displayName="AbstractMark";let ey=ei.default.div.withConfig({displayName:"AbstractMark__Wrapper",componentId:"sc-f0ff9068-0"})`
  display: flex;
  width: auto !important;
  height: auto !important;

  [data-theme='dark'] & {
    [data-color='primary'] {
      color: ${({theme:e})=>e.palette.white};
    }

    [data-color='secondary'] {
      color: ${({theme:e})=>e.palette.roseQuartz};
    }

    [data-color='highlight'] {
      color: ${({theme:e})=>e.palette.jade};
    }
  }

  [data-theme='light'] & {
    [data-color='primary'] {
      color: ${({theme:e})=>e.palette.roseQuartz};
    }

    [data-color='secondary'] {
      color: ${({theme:e})=>e.palette.eggplant};
    }

    [data-color='highlight'] {
      color: ${({theme:e})=>e.palette.jade};
    }
  }
`;e.s(["AbstractMark",0,ex],986740)},613938,e=>{"use strict";var t=e.i(843476),r=e.i(271645),o=e.i(846932),a=e.i(997053),n=e.i(991709),i=e.i(739876),l=e.i(581444);let s=(0,a.default)(l.LayoutSubgrid).withConfig({displayName:"BasicPageRow__Wrapper",componentId:"sc-811624ad-0"})`
  overflow-x: clip;

  ${({$topBorder:e})=>e&&a.css`
      border-top: 1px solid ${({theme:e})=>(0,i.gridColorSelector)(e,"major")};
    `}
`,c=a.css`
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
`,d=(0,a.default)(o.motion.div).withConfig({displayName:"BasicPageRow__Inner",componentId:"sc-811624ad-1"})`
  ${c}
`,m=a.default.div.withConfig({displayName:"BasicPageRow__InnerStatic",componentId:"sc-811624ad-2"})`
  ${c}
`,h=(0,a.default)(l.LayoutGridCondensed).withConfig({displayName:"BasicPageRow__StyledLayoutGridCondensed",componentId:"sc-811624ad-3"})`
  position: relative;
`,u=r.memo(function({animateEntrance:e=!0,children:r,fullWidth:o=!1,topBorder:a=!1,className:l,CartesianGridComponent:c}){return(0,t.jsxs)(s,{$topBorder:a,children:[(0,t.jsx)(i.CheckeredMargin,{}),(0,t.jsxs)(h,{className:l,children:[c&&(0,t.jsx)(c,{fadeDirection:"in"}),e?(0,t.jsx)(d,{...n.ANIMATIONS.SimpleFadeIn,$fullWidth:o,children:r}):(0,t.jsx)(m,{$fullWidth:o,children:r})]}),(0,t.jsx)(i.CheckeredMargin,{"data-right":!0})]})});e.s(["BasicPageRow",0,u])},247984,e=>{"use strict";var t={0:8203,1:8204,2:8205,3:8290,4:8291,5:8288,6:65279,7:8289,8:119155,9:119156,a:119157,b:119158,c:119159,d:119160,e:119161,f:119162},r={0:8203,1:8204,2:8205,3:65279},o={0:String.fromCodePoint(r[0]),1:String.fromCodePoint(r[1]),2:String.fromCodePoint(r[2]),3:String.fromCodePoint(r[3])},a=[,,,,].fill(String.fromCodePoint(r[0])).join("");Object.fromEntries(Object.entries(o).map(e=>[e[1],+e[0]])),Object.fromEntries(Object.entries(t).map(e=>e.reverse()));var n=`${Object.values(t).map(e=>`\\u{${e.toString(16)}}`).join("")}`,i=RegExp(`[${n}]{4,}`,"gu");e.s(["isRecord",0,function(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)},"stegaClean",0,function(e){var t,r;return e&&JSON.parse({cleaned:(t=JSON.stringify(e)).replace(i,""),encoded:(null==(r=t.match(i))?void 0:r[0])||""}.cleaned)},"y",0,function(e,t,r="auto"){return!0===r||"auto"===r&&(!(!Number.isNaN(Number(e))||/[a-z]/i.test(e)&&!/\d+(?:[-:\/]\d+){2}(?:T\d+(?:[-:\/]\d+){1,2}(\.\d+)?Z?)?/.test(e))&&Date.parse(e)||function(e){try{new URL(e,e.startsWith("/")?"https://acme.com":void 0)}catch{return!1}return!0}(e))?e:`${e}${function(e){let t=JSON.stringify(e),r=new TextEncoder().encode(t),n="";for(let e=0;e<r.length;e++){let t=r[e];n+=o[t>>6&3]+o[t>>4&3]+o[t>>2&3]+o[3&t]}return a+n}(t)}`}])}]);