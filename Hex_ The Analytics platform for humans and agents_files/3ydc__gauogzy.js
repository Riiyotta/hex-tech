(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,620363,e=>{"use strict";var t=e.i(843476),n=e.i(271645),o=e.i(997053);let r="0.8s",i=o.default.div.withConfig({displayName:"Rotator__Inner",componentId:"sc-3122a6b2-0"})`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  min-height: 0;
  min-width: 0;
`,a=o.default.div.withConfig({displayName:"Rotator__Option",componentId:"sc-3122a6b2-1"})`
  flex: none;
  display: flex;
  align-items: center;
  overflow: hidden;
  opacity: 0;
  min-height: 0;
  min-width: 0;

  &:first-child {
    opacity: 1;
  }

  ${({$noFade:e})=>e&&o.css`
      opacity: 1;
    `}

  label {
    width: 100%;
    height: 100%;
  }

  span {
    display: flex;
    align-items: center;
    width: 100% !important;
    height: 100% !important;
    margin: 0 !important;
    vertical-align: unset !important;
    flex: 1 1 auto;
    min-width: 0;
    min-height: 0;
  }
`,l=o.default.div.withConfig({displayName:"Rotator__Wrapper",componentId:"sc-3122a6b2-2"})`
  display: flex;
  overflow: hidden;
  position: relative;
  flex: none;
  min-height: 0;
  min-width: 0;

  ${({$isAnimating:e})=>e&&o.css`
      ${i} {
        transition: transform ${r}
          ${({theme:e})=>e.animation.EASING};
      }
    `}

  ${({$isAnimating:e,$noFade:t})=>e&&!t&&o.css`
      ${i} {
        ${a} {
          &:first-child {
            transition: opacity calc(${r} / 2.2)
              ${({theme:e})=>e.animation.EASING};
            opacity: 0;
          }

          &:nth-child(2) {
            transition: opacity calc(${r} * 2.2)
              ${({theme:e})=>e.animation.EASING};
            opacity: 1;
          }
        }
      }
    `}

    ${({$debugMode:e})=>e&&o.css`
      overflow: visible !important;

      ${a} {
        overflow: visible !important;
        opacity: 1 !important;
      }
    `}

    ${({$directionHorizontal:e})=>e&&o.css`
      ${i} {
        flex-direction: row;
      }
    `}
`,s=n.memo(({direction:e="vertical",options:o,itemHeight:r,itemWidth:s,noFade:d=!1,debugMode:c=!1,startDelay:u,rotationLength:p})=>{let f=(0,n.useRef)(null),[m,h]=(0,n.useState)(0),[g,v]=(0,n.useState)(0),[x,C]=(0,n.useState)(!1),[y,b]=(0,n.useState)(o),w=(0,n.useMemo)(()=>r,[r]),N=(0,n.useMemo)(()=>s,[s]),L=(0,n.useMemo)(()=>p||1200,[p]);(0,n.useEffect)(()=>{o&&(b(o),setTimeout(()=>{h(e=>e+1)},u||0))},[]),(0,n.useEffect)(()=>{w&&N&&o&&m>0&&setTimeout(()=>{v("vertical"===e?w:N),C(!0),setTimeout(()=>{let e=[...y];e.push(e.shift()),b(e),v(0),C(!1),h(e=>e+1)},L)},L)},[m]);let j="vertical"===e?`translateY(-${g}px)`:`translateX(-${g}px)`;return(0,t.jsx)(l,{ref:f,$debugMode:c,$directionHorizontal:"horizontal"===e,$isAnimating:x,$noFade:d,style:{width:N,height:w},children:(0,t.jsx)(i,{style:{transform:j},children:y.map((e,n)=>(0,t.jsx)(a,{$noFade:d,"data-attr-index":n,style:{width:N,height:w},children:(0,t.jsx)("label",{children:e})},n))})})});s.displayName="Rotator",e.s(["Rotator",0,s])},785514,660814,e=>{"use strict";var t=e.i(843476),n=e.i(997053),o=e.i(739876),r=e.i(581444),i=e.i(165425);let a=n.css`
  background-color: ${({theme:e})=>e.paletteCssVars.fg100};

  &::after {
    content: '';
    display: block;
    position: absolute;
    inset: 0;
    background-image: ${({theme:e})=>e.paperTextureCssVars.img};
    background-repeat: repeat;
    background-size: ${({theme:e})=>e.paperTextureCssVars.size};
    mix-blend-mode: ${({theme:e})=>e.paperTextureCssVars.mixBlendMode};
    opacity: ${({theme:e})=>e.paperTextureCssVars.opacity};
    pointer-events: none;
  }
`,l=(0,n.default)(r.LayoutSubgrid).withConfig({displayName:"Header__TopGridLines",componentId:"sc-a591a900-0"})`
  position: relative;
  background-color: ${({theme:e})=>e.paletteCssVars.fg100};
  ${a}

  height: 1.25rem;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MOBILE}) {
    height: 0.75rem;
  }
`;function s(){let{gridlineRef:e}=(0,i.useHeaderUIRefs)();return(0,t.jsxs)(l,{ref:e,"aria-hidden":"true",children:[(0,t.jsx)(o.ContentMarginLine,{"data-minor":!0}),(0,t.jsx)(o.GridRule,{$column:4}),(0,t.jsx)(o.GridRule,{$column:10}),(0,t.jsx)(o.ContentMarginLine,{"data-minor":!0,"data-right":!0})]})}let d=(0,n.default)(r.LayoutSubgrid).withConfig({displayName:"Header__TickerWrapper",componentId:"sc-a591a900-1"})`
  position: relative;
  align-self: flex-start;
  ${a}
`;e.s(["Header",0,function({children:e,headerExtra:n}){let{tickerRef:o}=(0,i.useHeaderUIRefs)();return(0,t.jsxs)(r.LayoutGrid,{style:{position:"fixed",zIndex:3,inset:"auto 0"},children:[(0,t.jsx)(s,{}),(0,t.jsxs)(r.LayoutSubgrid,{as:"header",children:[n?(0,t.jsx)(d,{ref:o,"data-pile":!0,children:n}):null,(0,t.jsx)(r.LayoutSubgrid,{"data-pile":!0,children:e})]})]})}],785514);let c=e.i(271645).memo(({className:e})=>(0,t.jsx)("svg",{className:e,fill:"none",viewBox:"0 0 52 20",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{clipRule:"evenodd",d:"M9 0V6.97333H7V0H0V5.65333V5.67333V12.3267V20H7V10H9V20H16V0H9ZM18 20H34V12H27V17H25V10H34V0H18V20ZM25 7V3H27V7H25ZM45 7V0H52V5L49 8.5L52 12V20H45V9.97333H43V20H36V12L39 8.5L36 5V0H43V7H45Z",fill:"currentColor",fillRule:"evenodd"})}));c.displayName="HexLogo",e.s(["HexLogo",0,c],660814)},584068,e=>{"use strict";var t,n,o,r,i,a,l,s,d=e.i(843476),c=e.i(271645),u=e.i(846932),p=e.i(997053),f=e.i(343794),m=e.i(927126),h=e.i(183836);function g(){let{allowed:e,ready:t,setAllowed:n}=(0,m.useTrackingConsent)();return(0,d.jsx)("button",{"aria-atomic":"true","aria-live":"polite",className:(0,f.default)(h.default.button,{[h.default.buttonPending]:!t}),disabled:!t||!e,type:"button",onClick:()=>{n(!1,"user set")},children:e?"Opt out of tracking":"You have opted out of data tracking"})}var v=e.i(637804),x=e.i(991709),C=e.i(665419),y=e.i(154213);let b=c.memo(({className:e})=>(0,d.jsx)("svg",{className:e,fill:"none",viewBox:"0 0 60 20",xmlns:"http://www.w3.org/2000/svg",children:(0,d.jsx)("g",{children:(0,d.jsx)("path",{d:"M6.67285 6.6543H8.35938V0H15.0322V20H8.35938V10.0283H6.67285V20H0V0H6.67285V6.6543ZM31.751 10.0234H23.3916V16.627H25.0781V11.6592H31.751V20H16.7188V0H31.751V10.0234ZM40.1299 6.60352H41.8164V0H48.4893V5L45.1533 8.33691L48.4893 11.6729V20H41.8164V9.97656H40.1299V20H33.457V11.6729L36.7939 8.33691L33.457 5V0H40.1299V6.60352ZM55.5 11C56.0909 11 56.6758 11.1167 57.2217 11.3428C57.7676 11.5689 58.2638 11.9005 58.6816 12.3184C59.0995 12.7362 59.4311 13.2324 59.6572 13.7783C59.8833 14.3242 60 14.9091 60 15.5C60 16.39 59.7357 17.26 59.2412 18C58.7467 18.74 58.0439 19.3167 57.2217 19.6572C56.3995 19.9977 55.4949 20.0867 54.6221 19.9131C53.7492 19.7394 52.9477 19.311 52.3184 18.6816C51.689 18.0523 51.2606 17.2508 51.0869 16.3779C50.9133 15.5051 51.0023 14.6005 51.3428 13.7783C51.6833 12.9561 52.26 12.2533 53 11.7588C53.74 11.2643 54.61 11 55.5 11ZM56.8779 12.1738C56.2202 11.9014 55.4961 11.8299 54.7979 11.9688C54.0995 12.1077 53.4576 12.4506 52.9541 12.9541C52.4506 13.4576 52.1077 14.0995 51.9688 14.7979C51.8299 15.4961 51.9014 16.2202 52.1738 16.8779C52.4463 17.5357 52.908 18.0976 53.5 18.4932C54.092 18.8887 54.788 19.0996 55.5 19.0996C56.4548 19.0996 57.3708 18.721 58.0459 18.0459C58.721 17.3708 59.0996 16.4548 59.0996 15.5C59.0996 14.788 58.8887 14.092 58.4932 13.5C58.0976 12.908 57.5357 12.4463 56.8779 12.1738ZM55.6172 13.5693C56.0021 13.5457 56.3837 13.6554 56.6973 13.8799C56.8267 13.9894 56.9285 14.1279 56.9941 14.2842C57.0598 14.4406 57.0876 14.6111 57.0752 14.7803C57.0839 15.0175 57.0226 15.2521 56.8994 15.4551C56.7724 15.6556 56.5868 15.8129 56.3682 15.9053L57.2236 17.5205V17.5654H56.3506L55.6123 16.1123L54.9648 16.0713V17.5254H54.1504V13.5693H55.6172ZM54.9648 15.4551H55.6211C55.7928 15.4647 55.9621 15.4085 56.0938 15.2979C56.1532 15.24 56.1997 15.1695 56.2285 15.0918C56.2573 15.014 56.2682 14.9303 56.2607 14.8477C56.2676 14.7658 56.2566 14.683 56.2295 14.6055C56.2023 14.528 56.1588 14.4571 56.1025 14.3975C56.0366 14.3395 55.9594 14.2956 55.876 14.2686C55.7925 14.2415 55.7045 14.232 55.6172 14.2402H54.9648V15.4551ZM23.3916 6.65039L25.0781 6.64941V3.37402H23.3916V6.65039Z",fill:"currentColor"})})}));b.displayName="HexLogo";var w=e.i(815659),N=e.i(653272);let L=p.default.div.withConfig({displayName:"Menu__Wrapper",componentId:"sc-4ad899c4-0"})`
  display: flex;
  flex-direction: column;
  background: ${({theme:e})=>e.backgroundColor};
  border: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
  box-shadow:
    0 4px 4px ${({theme:e})=>e.backgroundColor25},
    0 0 54px ${({theme:e})=>e.backgroundColor},
    0 0 50px ${({theme:e})=>e.borderColor.DEFAULT};
  padding: 5px;
`,j=c.memo(({children:e,className:t})=>(0,d.jsx)(L,{className:t,children:e}));j.displayName="Menu";let I=p.default.button.withConfig({displayName:"Menu__MenuItemButton",componentId:"sc-4ad899c4-1"})`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 8px 12px;
  border: none;
  background: ${({theme:e,$active:t})=>t?e.borderColor.DEFAULT:"transparent"};
  color: ${({theme:e})=>e.fontColor.DEFAULT};
  font-family: ${({theme:e})=>e.fontFamily.SANS};
  font-size: ${({theme:e})=>e.fontSize.SMALL};
  cursor: pointer;
  text-align: left;
  transition: background-color ${({theme:e})=>e.animation.DURATION}
    ${({theme:e})=>e.animation.EASING};

  &:hover {
    background: ${({theme:e})=>e.borderColor.MUTED};
  }
`,_=c.memo(({active:e=!1,text:t,onClick:n})=>(0,d.jsx)(I,{$active:e,onClick:n,children:t}));_.displayName="MenuItem";let E={0:["top","top-left","top-right","bottom-right","bottom-left","bottom-right","bottom"],1:["top-right","bottom-right"],2:["top","top-right","middle","bottom-left","bottom"],3:["top","top-right","middle","bottom-right","bottom"],4:["top-left","top-right","middle","bottom-right","bottom-right"],5:["top","top-left","middle","bottom-right","bottom"],6:["top-left","middle","bottom-left","bottom-right","bottom"],7:["top","top-right","bottom-right"],8:["top","top-left","top-right","middle","bottom-right","bottom-left","bottom-right","bottom"],9:["top","top-left","top-right","middle","bottom-right"]},R=p.default.div.withConfig({displayName:"HitCounter__Wrapper",componentId:"sc-83d644db-0"})`
  padding: 5px 0;
  cursor: pointer;
`,M=p.default.div.withConfig({displayName:"HitCounter__Inner",componentId:"sc-83d644db-1"})`
  position: relative;
  display: flex;
  height: 32px;
  gap: 5px;
  border: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
  padding: 5px;
  flex: none;
  transition: background-color
    ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`};

  &:hover {
    background-color: ${({theme:e})=>e.highlightColor10};
  }
`,S=p.default.div.withConfig({displayName:"HitCounter__VisitorText",componentId:"sc-83d644db-2"})`
  padding: 10px 15px 15px;
  font-size: ${({theme:e})=>e.fontSize.SMALL};
  opacity: 0.7;
  border-bottom: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
`,k=c.memo(()=>{let[e,t]=(0,c.useState)(1e6),[n,o]=(0,c.useState)(!1),r=(0,c.useCallback)(()=>{o(e=>!e)},[]);(0,c.useEffect)(()=>{t((0,N.randomIntFromInterval)(1e6,9999999))},[]);let i=(0,c.useMemo)(()=>Array.from(e.toString()).map(Number),[e]),a=`You are visitor: ${e.toLocaleString("en-US")}`;return(0,d.jsx)(w.Popover,{align:"start",containerStyle:{zIndex:"99999"},content:(0,d.jsxs)(j,{children:[(0,d.jsx)(S,{children:a}),(0,d.jsx)(_,{text:"Sign our guest book...",onClick:()=>window.open(C.TWITTER_LINK,"_blank")?.focus()})]}),isOpen:n,positions:["bottom","top"],reposition:!0,onClickOutside:r,children:(0,d.jsx)(R,{title:a,onClick:r,children:(0,d.jsx)(M,{children:i.map((e,t)=>(0,d.jsx)(V,{number:E[e]},t))})})})});k.displayName="HitCounter";let T=p.default.div.withConfig({displayName:"HitCounter__DigitWrapper",componentId:"sc-83d644db-3"})`
  position: relative;
  display: flex;
  height: 100%;
  width: 12px;
  gap: 1px;
`,A=p.default.div.withConfig({displayName:"HitCounter__Col",componentId:"sc-83d644db-4"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex: none;

  ${({$wide:e})=>e&&p.css`
      flex: 1 1 auto;
    `}
`,$=p.default.div.withConfig({displayName:"HitCounter__Line",componentId:"sc-83d644db-5"})`
  background: ${({theme:e,$active:t})=>t?e.highlightColor:e.highlightColor30};

  ${({$dir:e})=>"horiz"===e&&p.css`
      width: 100%;
      height: 1px;
    `}

  ${({$dir:e})=>"vert"===e&&p.css`
      height: 100%;
      width: 1px;
    `}
`,V=c.memo(({number:e})=>(0,d.jsxs)(T,{children:[(0,d.jsxs)(A,{children:[(0,d.jsx)($,{$active:e.includes("top-left"),$dir:"vert"}),(0,d.jsx)($,{$active:e.includes("bottom-left"),$dir:"vert"})]}),(0,d.jsxs)(A,{$wide:!0,children:[(0,d.jsx)($,{$active:e.includes("top"),$dir:"horiz"}),(0,d.jsx)($,{$active:e.includes("middle"),$dir:"horiz"}),(0,d.jsx)($,{$active:e.includes("bottom"),$dir:"horiz"})]}),(0,d.jsxs)(A,{children:[(0,d.jsx)($,{$active:e.includes("top-right"),$dir:"vert"}),(0,d.jsx)($,{$active:e.includes("bottom-right"),$dir:"vert"})]})]}));V.displayName="Digit";var P=e.i(620363),H=e.i(102898);let O=[(0,d.jsx)("span",{className:H.default.emojiGlyph,children:"🍩"},"doughnut"),(0,d.jsx)("span",{className:H.default.emojiGlyph,children:"☕"},"coffee"),(0,d.jsx)("span",{className:H.default.emojiGlyph,children:"🥟"},"dumpling"),(0,d.jsx)("span",{className:H.default.emojiGlyph,children:"🍺"},"beer"),(0,d.jsx)("span",{className:H.default.emojiGlyph,children:"🍰"},"cake"),(0,d.jsx)("span",{className:H.default.emojiGlyph,children:"🔮"},"crystal_ball"),(0,d.jsx)("span",{className:H.default.emojiGlyph,children:"🔒"},"lock"),(0,d.jsx)("span",{className:H.default.emojiGlyph,children:"🥖"},"baguette_bread"),(0,d.jsx)("span",{className:H.default.emojiGlyph,children:"🍷"},"wine_glass"),(0,d.jsx)("span",{className:H.default.emojiGlyph,children:"🛌"},"sleeping_bed"),(0,d.jsx)("span",{className:H.default.emojiGlyph,children:"💜"},"purple_heart"),(0,d.jsx)("span",{className:H.default.emojiGlyph,children:"🥨"},"pretzel"),(0,d.jsx)("span",{className:H.default.emojiGlyph,children:"🛹"},"skateboard"),(0,d.jsx)("span",{className:H.default.emojiGlyph,children:"🍤"},"fried_shrimp"),(0,d.jsx)("span",{className:H.default.emojiGlyph,children:"🧄"},"garlic"),(0,d.jsx)("span",{className:H.default.emojiGlyph,children:"🍞"},"bread"),(0,d.jsx)("span",{className:H.default.emojiGlyph,children:"🥥"},"coconut"),(0,d.jsx)("span",{className:H.default.emojiGlyph,children:"⛳"},"golf"),(0,d.jsx)("span",{className:H.default.emojiGlyph,children:"🤞"},"crossed_fingers"),(0,d.jsx)("span",{className:H.default.emojiGlyph,children:"✨"},"sparkles"),(0,d.jsx)("span",{className:H.default.emojiGlyph,children:"🔊"},"loud_sound"),(0,d.jsx)("span",{className:H.default.emojiGlyph,children:"🎧"},"headphone"),(0,d.jsx)("span",{className:H.default.emojiGlyph,children:"🌊"},"ocean"),(0,d.jsx)("span",{className:H.default.emojiGlyph,children:"🍀"},"four_leaf_clover"),(0,d.jsx)("span",{className:H.default.emojiGlyph,children:"🤠"},"cowboy_hat_face"),(0,d.jsx)("span",{className:H.default.emojiGlyph,children:"🎷"},"saxophone")],D=new Date().getFullYear();function B(e){return(0,d.jsx)(v.SiteLink,{...e,trackingLabel:y.TRACKING_LABELS.FooterLinkClicked})}let Z=(0,p.default)(u.motion.footer).withConfig({displayName:"Footer__Wrapper",componentId:"sc-b29c701c-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
`,K=p.default.div.withConfig({displayName:"Footer__Inner",componentId:"sc-b29c701c-1"})`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  gap: 0;
  padding: 50px 30px;
  max-width: ${({theme:e})=>e.maxWidth.PAGE};
  width: 100%;
  margin: 0 auto;

  a {
    border-bottom: none;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.EXTRA_LARGE}) {
    display: flex;
    flex-direction: column;
    gap: 45px;
  }
`,F=p.default.div.withConfig({displayName:"Footer__Divider",componentId:"sc-b29c701c-2"})`
  height: 1px;
  flex: 1 1 auto;
  background: ${({theme:e})=>e.borderColor.DEFAULT};
`,z=p.default.div.withConfig({displayName:"Footer__Left",componentId:"sc-b29c701c-3"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;

  svg {
    color: ${({theme:e})=>e.highlightColor};
    height: 20px;
    width: auto;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.EXTRA_LARGE}) {
    align-items: center;
  }
`,G=p.default.div.withConfig({displayName:"Footer__Center",componentId:"sc-b29c701c-4"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
`,W=p.default.div.withConfig({displayName:"Footer__Right",componentId:"sc-b29c701c-5"})`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: ${({theme:e})=>e.mediaQuery.EXTRA_LARGE}) {
    align-items: center;
  }
`,U=p.default.div.withConfig({displayName:"Footer__MadeWith",componentId:"sc-b29c701c-6"})`
  display: flex;
  align-items: center;
  color: ${({theme:e})=>e.fontColor.MUTED};

  > span {
    &:first-child {
      margin-right: 4px;
    }

    &:last-child {
      margin-left: 4px;
    }
  }
`,Y=p.default.div.withConfig({displayName:"Footer__Links",componentId:"sc-b29c701c-7"})`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 60px;
  width: 100%;
  flex: 1 1 100%;
  max-width: 800px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    width: auto;
    justify-content: center;
  }
`,X=p.default.div.withConfig({displayName:"Footer__Bottom",componentId:"sc-b29c701c-8"})`
  display: flex;
  align-items: center;
  flex-flow: wrap;
  justify-content: center;
  gap: 20px;
  row-gap: 14px;
  width: 100%;

  a,
  button {
    color: ${({theme:e})=>e.fontColor.MUTED};
    white-space: nowrap;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    flex-direction: column;
    gap: 10px;
  }
`,q=p.default.div.withConfig({displayName:"Footer__Column",componentId:"sc-b29c701c-9"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex: 1 1 0;

  a {
    white-space: nowrap;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    align-items: center;
  }
`,Q=p.default.div.withConfig({displayName:"Footer__ColTitle",componentId:"sc-b29c701c-10"})`
  font-family: ${({theme:e})=>e.fontFamily.MONO};
  font-size: ${({theme:e})=>e.fontSize.SMALL};
  font-weight: ${({theme:e})=>e.fontWeight.BOLD};
  color: ${({theme:e})=>e.fontColor.LOUD};
  text-transform: uppercase;
  letter-spacing: 0.7px;
`,J=p.default.div.withConfig({displayName:"Footer__Copyright",componentId:"sc-b29c701c-11"})`
  color: ${({theme:e})=>e.fontColor.MUTED};
`,ee=c.memo(()=>(0,d.jsxs)(Z,{...x.ANIMATIONS.SimpleFadeIn,children:[(0,d.jsx)(F,{}),(0,d.jsxs)(K,{children:[(0,d.jsxs)(z,{children:[(0,d.jsx)(b,{}),(0,d.jsxs)(U,{"data-markdown-exclude":"",children:[(0,d.jsx)("span",{children:"Made with"}),(0,d.jsx)(P.Rotator,{itemHeight:20,itemWidth:20,noFade:!0,options:O}),(0,d.jsxs)("span",{children:["on ",(0,d.jsx)("span",{className:H.default.emojiGlyph,children:"🌎"}),"."]})]})]}),(0,d.jsxs)(G,{children:[(0,d.jsxs)(Y,{children:[(0,d.jsxs)(q,{children:[(0,d.jsx)(Q,{children:"Platform"}),(0,d.jsx)(B,{href:C.INTERNAL_LINKS.AiAndAgents,children:"AI and agents"}),(0,d.jsx)(B,{href:C.INTERNAL_LINKS.Notebooks,children:"Agentic notebooks"}),(0,d.jsx)(B,{href:C.INTERNAL_LINKS.Threads,children:"Conversational analytics"}),(0,d.jsx)(B,{href:C.INTERNAL_LINKS.ContextStudio,children:"Context Studio"}),(0,d.jsx)(B,{href:C.INTERNAL_LINKS.DataApps,children:"Data apps"}),(0,d.jsx)(B,{href:C.INTERNAL_LINKS.CLI,children:"Hex CLI"}),(0,d.jsx)(B,{href:C.INTERNAL_LINKS.BI,children:"Business intelligence"}),(0,d.jsx)(B,{href:C.INTERNAL_LINKS.UseCaseExploratoryAnalysis,children:"Exploratory analysis"}),(0,d.jsx)(B,{href:C.INTERNAL_LINKS.EmbeddedAnalytics,children:"Embedded analytics"}),(0,d.jsx)(B,{href:C.INTERNAL_LINKS.Integrations,children:"Integrations"}),(0,d.jsx)(B,{href:C.DOCS_LINKS.Changelog,children:"Changelog"})]}),(0,d.jsxs)(q,{children:[(0,d.jsx)(Q,{children:"Resources"}),(0,d.jsx)(B,{href:C.INTERNAL_LINKS.Pricing,children:"Pricing"}),(0,d.jsx)(B,{href:C.INTERNAL_LINKS.SwitchingToHex,children:"Switching to Hex"}),(0,d.jsx)(B,{href:C.INTERNAL_LINKS.Enterprise,children:"Enterprise"}),(0,d.jsx)(B,{href:C.DOCS_LINKS.Home,children:"Docs"}),(0,d.jsx)(B,{href:C.INTERNAL_LINKS.Blog,children:"Blog"}),(0,d.jsx)(B,{href:C.INTERNAL_LINKS.Events,children:"Events"}),(0,d.jsx)(B,{href:C.INTERNAL_LINKS.Templates,children:"Templates"}),(0,d.jsx)(B,{href:C.INTERNAL_LINKS.Compare,children:"Compare"}),(0,d.jsx)(B,{href:C.TRUST_LINKS.Home,children:"Trust Center"}),(0,d.jsx)(B,{href:C.STATUS_LINK,children:"Status"})]}),(0,d.jsxs)(q,{children:[(0,d.jsx)(Q,{children:"Company"}),(0,d.jsx)(B,{href:C.INTERNAL_LINKS.About,children:"About"}),(0,d.jsx)(B,{href:C.INTERNAL_LINKS.Careers,children:"Careers"}),(0,d.jsx)(B,{href:C.INTERNAL_LINKS.Customers,children:"Customers"}),(0,d.jsx)(B,{href:C.INTERNAL_LINKS.Solutions,children:"Solutions"}),(0,d.jsx)(B,{href:C.MEDIA_KIT_LINK,children:"Media kit"}),(0,d.jsx)(B,{href:C.INTERNAL_LINKS.Newsroom,children:"Newsroom"})]}),(0,d.jsxs)(q,{children:[(0,d.jsx)(Q,{children:"Connect"}),(0,d.jsx)(B,{href:C.INTERNAL_LINKS.RequestADemo,children:"Request a demo"}),(0,d.jsx)("a",{"data-tracking-label":y.TRACKING_LABELS.FooterLinkClicked,href:"mailto:support@hex.tech",children:"Technical support"}),(0,d.jsx)(B,{href:C.INTERNAL_LINKS.ContactUs,children:"Contact us"}),(0,d.jsx)(B,{href:C.LINKEDIN_LINK,children:"LinkedIn"}),(0,d.jsx)(B,{href:C.TWITTER_LINK,children:"X (Twitter)"}),(0,d.jsx)(B,{href:C.YOUTUBE_LINK,children:"YouTube"})]})]}),(0,d.jsxs)(X,{children:[(0,d.jsxs)(J,{children:["© ",D," Hex Technologies Inc."]}),(0,d.jsx)(B,{href:C.DOCS_LINKS.PrivacyPolicy,children:"Privacy policy"}),(0,d.jsx)(B,{href:C.DOCS_LINKS.TermsAndConditions,children:"Terms & conditions"}),(0,d.jsx)("a",{"data-tracking-label":y.TRACKING_LABELS.FooterLinkClicked,href:C.DOCS_LINKS.ModernSlaveryStatement,rel:"noopener noreferrer",target:"_blank",children:"Modern slavery statement"}),(0,d.jsx)(g,{})]})]}),(0,d.jsx)(W,{children:(0,d.jsx)(k,{})})]}),(0,d.jsx)(F,{})]}));ee.displayName="Footer";var et=e.i(785514),en=e.i(165425),eo=e.i(739876),er=e.i(581444);let ei=(0,p.default)(er.LayoutGrid).withConfig({displayName:"PageWrapper__PageLayoutGrid",componentId:"sc-292f5a10-0"})`
  min-height: 100vh;
  /* Use var(--fg100) for Gatsby compatibility (light mode = #FFFCFC warm off-white).
     Falls back to theme.backgroundColor for Next.js where --fg100 is not defined. */
  background-color: var(--fg100, ${({theme:e})=>e.backgroundColor});
  color: ${({theme:e})=>e.fontColor.DEFAULT};

  /* Define paper texture CSS variables as fallback.
     In both apps, colorThemeVars now defines these at [data-theme] scope,
     but this ensures they're available even if GlobalStyles hasn't loaded yet. */
  --texture-paper-img: ${({theme:e})=>e.paperTexture.img};
  --texture-paper-size: ${({theme:e})=>e.paperTexture.size};
  --texture-paper-mixBlendMode: ${({theme:e})=>e.paperTexture.mixBlendMode};
  --texture-paper-opacity: ${({theme:e})=>e.paperTexture.opacity};
`,ea=(0,p.default)(er.LayoutSubgrid).withConfig({displayName:"PageWrapper__PaperTexture",componentId:"sc-292f5a10-1"})`
  background-image: ${({theme:e})=>e.paperTextureCssVars.img};
  background-repeat: repeat;
  background-size: ${({theme:e})=>e.paperTextureCssVars.size};
  mix-blend-mode: ${({theme:e})=>e.paperTextureCssVars.mixBlendMode};
  opacity: ${({theme:e})=>e.paperTextureCssVars.opacity};
  pointer-events: none;
`,el=({children:e,FooterComponent:t,header:n,footer:o,theme:r="dark",className:i})=>(0,d.jsxs)(ei,{className:i,"data-theme":r,children:[(0,d.jsx)("a",{className:"sr-only","data-markdown-exclude":"",href:"#main",children:"Skip to main content"}),(0,d.jsx)(ea,{"data-pile":!0}),(0,d.jsxs)(er.LayoutSubgrid,{"data-pile":!0,children:[n,(0,d.jsx)(er.LayoutSubgrid,{as:"main",id:"main",children:e}),o||t&&(0,d.jsxs)(er.LayoutSubgrid,{children:[(0,d.jsx)(eo.ContentMarginLine,{"data-bottom":!0,"data-top":!0}),(0,d.jsx)(t,{}),(0,d.jsx)(eo.ContentMarginLine,{"data-bottom":!0,"data-right":!0,"data-top":!0})]}),(0,d.jsxs)(er.LayoutSubgrid,{style:{height:"2rem"},children:[(0,d.jsx)(eo.ContentMarginLine,{"data-minor":!0}),(0,d.jsx)(eo.GridRule,{$column:4}),(0,d.jsx)(eo.GridRule,{$column:10}),(0,d.jsx)(eo.ContentMarginLine,{"data-minor":!0,"data-right":!0})]})]})]});el.displayName="PageWrapper";var es=e.i(895420),ed=e.i(770703),ec=e.i(529376),eu=e.i(537193);let ep=(0,ed.default)(()=>e.A(296436).then(e=>e.ParticleCanvas),{loadableGenerated:{modules:[416694]},ssr:!1}),ef=(0,p.default)(er.LayoutSubgrid).withConfig({displayName:"Ticker__Bg",componentId:"sc-a0530985-0"})`
  overflow: hidden;
  isolation: isolate;
  background-color: ${({theme:e})=>e.paletteCssVars.fg400};
  background-image: ${({theme:e})=>`linear-gradient(to left, ${e.paletteCssVars.fg400}, ${e.paletteCssVars.fg300}, ${e.paletteCssVars.fg400})`};

  box-shadow: ${({theme:e})=>`0 1px 1px 0px ${e.paletteCssVars.fgA700} inset`};

  [data-theme='pink'] & {
    background-image: ${({theme:e})=>`linear-gradient(to left, ${e.paletteCssVars.grid300}, ${e.paletteCssVars.grid200}, ${e.paletteCssVars.grid300})`};

    box-shadow: ${({theme:e})=>`0 1px 1px 0px ${e.paletteCssVars.grid600} inset`};
  }
`;function em({children:e}){let{smoothSquishProgress:t}=(0,en.useHeaderUI)(),n=(0,es.useTransform)(t,[0,1],[1,0]),o=(0,es.useTransform)(t,[0,1],["0rem","0.5rem"]);return(0,d.jsx)(ef,{"aria-label":"Announcements",as:u.motion.div,"data-content-grid":!0,"data-markdown-exclude":"","data-nosnippet":"",role:"group",style:{opacity:n,y:o},children:e})}let eh=p.default.div.withConfig({displayName:"Ticker__InstanceAnim",componentId:"sc-a0530985-1"})`
  animation: ${({$duration:e})=>e}s ticker linear infinite;
  display: flex;
  width: fit-content;

  &:has(a:hover, a:focus-visible) {
    animation-play-state: paused;
  }

  > * {
    white-space: nowrap;
    display: flex;
  }

  @keyframes ticker {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(
        calc(-100% / ${({$instances:e})=>e||3})
      );
    }
  }
`;function eg({children:e,instances:t=5,duration:n=120}){return(0,d.jsx)(eh,{$duration:n,$instances:t,"aria-hidden":"true",tabIndex:-1,children:Array.from({length:t},(t,n)=>(0,d.jsx)("span",{children:e},n))})}let ev=p.default.div.withConfig({displayName:"Ticker__Marquee",componentId:"sc-a0530985-2"})`
  grid-column: 1 / -1;
  grid-row: 1;
  z-index: 1;
  position: relative;
  display: flex;
  overflow: hidden;
`,ex=p.default.span.withConfig({displayName:"Ticker__MarqueeItems",componentId:"sc-a0530985-3"})`
  display: flex;
  gap: 1rem;
  padding: 0.25rem 0;
  padding-right: 1rem;
`,eC=p.default.a.withConfig({displayName:"Ticker__MarqueeItem",componentId:"sc-a0530985-4"})`
  white-space: nowrap;
  display: flex;
  padding: 0 0.5rem;
  border-radius: 2px;
  border-bottom: none;
  align-items: center;
  text-decoration: none;
  color: inherit;

  font-size: ${({theme:e})=>e.fontSize.body.s};
  font-family: ${({theme:e})=>e.fontFamily.MONO_ALT};
  font-weight: ${({theme:e})=>e.fontWeight.mono};

  &:hover {
    background-color: ${({theme:e})=>e.paletteCssVars.fg200};
  }
`,ey=p.default.span.withConfig({displayName:"Ticker__MarqueeItemTitle",componentId:"sc-a0530985-5"})`
  font-size: ${({theme:e})=>e.fontSize.body.s};
  font-family: ${({theme:e})=>e.fontFamily.MONO_ALT};
  font-weight: ${({theme:e})=>e.fontWeight.mono};
  color: ${({theme:e})=>e.paletteCssVars.fgLoud};
`,eb=(0,p.default)(function(e){return(0,d.jsx)("svg",{fill:"currentColor",height:"7",viewBox:"0 0 10 7",width:"10",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,d.jsx)("path",{d:"M6.14645 5.14645L5.79289 5.5L6.5 6.20711L6.85355 5.85355L6.14645 5.14645ZM8.5 3.5L8.85355 3.85355L9.20711 3.5L8.85355 3.14645L8.5 3.5ZM6.85355 1.14645L6.5 0.792893L5.79289 1.5L6.14645 1.85355L6.85355 1.14645ZM6.85355 5.85355L8.85355 3.85355L8.14645 3.14645L6.14645 5.14645L6.85355 5.85355ZM8.85355 3.14645L6.85355 1.14645L6.14645 1.85355L8.14645 3.85355L8.85355 3.14645ZM8.5 3H0V4H8.5V3Z"})})}).withConfig({displayName:"Ticker__StyledArrowRight",componentId:"sc-a0530985-6"})`
  &,
  & > * {
    fill: currentColor;
  }
`,ew=p.default.span.withConfig({displayName:"Ticker__Circle",componentId:"sc-a0530985-7"})`
  display: grid;
  place-items: center;
  margin-left: 0.25rem;
  width: 1.25em;
  aspect-ratio: 1 / 1;
  border-radius: 9999px;
  color: ${({theme:e})=>e.paletteCssVars.fgA1100};

  transform-origin: center center;
  transform: ${({$isExternal:e})=>e?"rotate(-45deg)":"none"};
`,eN=p.default.div.withConfig({displayName:"Ticker__SingleTickerWrapper",componentId:"sc-a0530985-8"})`
  position: relative;
  padding: 4px 0;
  display: grid;
  place-items: center;
  transition: background-color 0.2s ease-out;

  &:has(:hover) {
    background-color: ${({theme:e})=>e.paletteCssVars.fgA200};
  }

  & > * {
    font-family: ${({theme:e})=>e.fontFamily.MONO_ALT};
    letter-spacing: ${({theme:e})=>e.letterSpacing.annotation};
    grid-area: 1 / -1;
  }

  em {
    color: ${({theme:e})=>e.paletteCssVars.fgLoud};
  }
`,eL=p.default.a.withConfig({displayName:"Ticker__ItemText",componentId:"sc-a0530985-9"})`
  display: flex;
  align-items: center;
  border-bottom: none;
  text-decoration: none;
  color: inherit;

  font-family: ${({theme:e})=>e.fontFamily.MONO_ALT};
  font-weight: ${({theme:e})=>e.fontWeight.mono};
  font-size: ${({theme:e})=>e.fontSize.annotation};
  letter-spacing: ${({theme:e})=>e.letterSpacing.annotation};
  line-height: ${({theme:e})=>e.lineHeight.body.base};

  &:hover {
    background-color: transparent;
  }

  &::after {
    content: '';
    display: block;
    inset: 0;
    position: absolute;
    background-color: transparent;
  }
`,ej=p.default.span.withConfig({displayName:"Ticker__Ellipsis",componentId:"sc-a0530985-10"})`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    max-width: 400px;
  }
  @media (max-width: ${({theme:e})=>e.mediaQuery.MOBILE}) {
    max-width: 200px;
  }
`,eI=p.default.div.withConfig({displayName:"Ticker__FadeIn",componentId:"sc-a0530985-11"})`
  opacity: 0;

  &[data-hydrated='true'] {
    animation: fade-in 1.6s ease-in-out;
    animation-fill-mode: both;
    animation-delay: 0.25s;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;function e_({item:e}){let t=(0,ec.useIsHydrated)(),[n,o]=(0,c.useState)(!1),r=e.link.includes("https");return(0,d.jsxs)(eN,{onMouseEnter:()=>{o(!0)},onMouseLeave:()=>{o(!1)},children:[(0,d.jsx)(eI,{"data-hydrated":t,children:(0,d.jsx)(ep,{isHovered:n})}),(0,d.jsxs)(eL,{as:v.SiteLink,href:e.link,onClick:()=>(0,eu.trackAnnouncementPillClicked)(e.title,e.link),children:[(0,d.jsx)("span",{className:H.default.emojiGlyph,children:e.emoji})," ",(0,d.jsxs)(ej,{children:[(0,d.jsx)("em",{children:e.title})," ",e.secondaryText]}),(0,d.jsx)(ew,{$isExternal:r,children:(0,d.jsx)(eb,{})})]})]})}function eE({items:e}){return 0===e.length?null:1===e.length?(0,d.jsxs)(er.LayoutSubgrid,{children:[(0,d.jsx)(eo.ContentMarginLine,{"data-minor":!0}),(0,d.jsx)(em,{children:(0,d.jsx)(e_,{item:e[0]})}),(0,d.jsx)(eo.ContentMarginLine,{"data-minor":!0,"data-right":!0})]}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(eo.ContentMarginLine,{"data-minor":!0}),(0,d.jsx)(em,{children:(0,d.jsxs)(ev,{"aria-label":"announcements",role:"marquee",children:[(0,d.jsx)("div",{className:"sr-only",children:e.map(e=>{let t=e.link.includes("https");return(0,d.jsxs)(eC,{as:v.SiteLink,href:e.link,onClick:()=>(0,eu.trackAnnouncementPillClicked)(e.title,e.link),children:[(0,d.jsx)("span",{children:e.emoji})," ",(0,d.jsx)(ey,{children:e.title})," ",e.secondaryText,(0,d.jsx)(ew,{$isExternal:t,children:(0,d.jsx)(eb,{})})]},e.title)})}),(0,d.jsx)(eg,{duration:14*e.length,children:(0,d.jsx)(ex,{children:e.map(e=>{let t=e.link.includes("https");return(0,d.jsxs)(eC,{"aria-hidden":"true",as:v.SiteLink,href:e.link,tabIndex:-1,onClick:()=>(0,eu.trackAnnouncementPillClicked)(e.title,e.link),children:[(0,d.jsx)("span",{className:H.default.emojiGlyph,children:e.emoji})," ",(0,d.jsx)(ey,{children:e.title})," ",e.secondaryText,(0,d.jsx)(ew,{$isExternal:t,children:(0,d.jsx)(eb,{})})]},e.title)})})})]})}),(0,d.jsx)(eo.ContentMarginLine,{"data-minor":!0,"data-right":!0})]})}e.i(726497);var eR=e.i(500638),eM=e.i(212980),eS=e.i(778888),ek=e.i(174080);function eT(e,t=[]){let n=[],o=()=>{let t=n.map(e=>c.createContext(e));return function(n){let o=n?.[e]||t;return c.useMemo(()=>({[`__scope${e}`]:{...n,[e]:o}}),[n,o])}};return o.scopeName=e,[function(t,o){let r=c.createContext(o),i=n.length;n=[...n,o];let a=t=>{let{scope:n,children:o,...a}=t,l=n?.[e]?.[i]||r,s=c.useMemo(()=>a,Object.values(a));return(0,d.jsx)(l.Provider,{value:s,children:o})};return a.displayName=t+"Provider",[a,function(n,a){let l=a?.[e]?.[i]||r,s=c.useContext(l);if(s)return s;if(void 0!==o)return o;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=n.reduce((t,{useScope:n,scopeName:o})=>{let r=n(e)[`__scope${o}`];return{...t,...r}},{});return c.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return n.scopeName=t.scopeName,n}(o,...t)]}function eA(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e?.(o),!1===n||!o.defaultPrevented)return t?.(o)}}function e$(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}function eV(...e){return t=>{let n=!1,o=e.map(e=>{let o=e$(e,t);return n||"function"!=typeof o||(n=!0),o});if(n)return()=>{for(let t=0;t<o.length;t++){let n=o[t];"function"==typeof n?n():e$(e[t],null)}}}}function eP(...e){return c.useCallback(eV(...e),e)}function eH(e){var t;let n,o=(t=e,(n=c.forwardRef((e,t)=>{let{children:n,...o}=e;if(c.isValidElement(n)){var r;let e,i,a=(r=n,(i=(e=Object.getOwnPropertyDescriptor(r.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?r.ref:(i=(e=Object.getOwnPropertyDescriptor(r,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?r.props.ref:r.props.ref||r.ref),l=function(e,t){let n={...t};for(let o in t){let r=e[o],i=t[o];/^on[A-Z]/.test(o)?r&&i?n[o]=(...e)=>{let t=i(...e);return r(...e),t}:r&&(n[o]=r):"style"===o?n[o]={...r,...i}:"className"===o&&(n[o]=[r,i].filter(Boolean).join(" "))}return{...e,...n}}(o,n.props);return n.type!==c.Fragment&&(l.ref=t?eV(t,a):a),c.cloneElement(n,l)}return c.Children.count(n)>1?c.Children.only(null):null})).displayName=`${t}.SlotClone`,n),r=c.forwardRef((e,t)=>{let{children:n,...r}=e,i=c.Children.toArray(n),a=i.find(eD);if(a){let e=a.props.children,n=i.map(t=>t!==a?t:c.Children.count(e)>1?c.Children.only(null):c.isValidElement(e)?e.props.children:null);return(0,d.jsx)(o,{...r,ref:t,children:c.isValidElement(e)?c.cloneElement(e,void 0,n):null})}return(0,d.jsx)(o,{...r,ref:t,children:n})});return r.displayName=`${e}.Slot`,r}"u">typeof window&&window.document&&window.document.createElement;var eO=Symbol("radix.slottable");function eD(e){return c.isValidElement(e)&&"function"==typeof e.type&&"__radixId"in e.type&&e.type.__radixId===eO}var eB=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"].reduce((e,t)=>{let n=eH(`Primitive.${t}`),o=c.forwardRef((e,o)=>{let{asChild:r,...i}=e;return"u">typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,d.jsx)(r?n:t,{...i,ref:o})});return o.displayName=`Primitive.${t}`,{...e,[t]:o}},{});function eZ(e,t){e&&ek.flushSync(()=>e.dispatchEvent(t))}var eK=globalThis?.document?c.useLayoutEffect:()=>{};c[" useEffectEvent ".trim().toString()],c[" useInsertionEffect ".trim().toString()];var eF=c[" useInsertionEffect ".trim().toString()]||eK;function ez({prop:e,defaultProp:t,onChange:n=()=>{},caller:o}){let[r,i,a]=function({defaultProp:e,onChange:t}){let[n,o]=c.useState(e),r=c.useRef(n),i=c.useRef(t);return eF(()=>{i.current=t},[t]),c.useEffect(()=>{r.current!==n&&(i.current?.(n),r.current=n)},[n,r]),[n,o,i]}({defaultProp:t,onChange:n}),l=void 0!==e,s=l?e:r;{let t=c.useRef(void 0!==e);c.useEffect(()=>{let e=t.current;if(e!==l){let t=l?"controlled":"uncontrolled";console.warn(`${o} is changing from ${e?"controlled":"uncontrolled"} to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)}t.current=l},[l,o])}return[s,c.useCallback(t=>{if(l){let n="function"==typeof t?t(e):t;n!==e&&a.current?.(n)}else i(t)},[l,e,i,a])]}Symbol("RADIX:SYNC_STATE");var eG=c.createContext(void 0),eW=e=>{var t;let n,o,{present:r,children:i}=e,a=function(e){var t,n;let[o,r]=c.useState(),i=c.useRef(null),a=c.useRef(e),l=c.useRef("none"),[s,d]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},c.useReducer((e,t)=>n[e][t]??e,t));return c.useEffect(()=>{let e=eU(i.current);l.current="mounted"===s?e:"none"},[s]),eK(()=>{let t=i.current,n=a.current;if(n!==e){let o=l.current,r=eU(t);e?d("MOUNT"):"none"===r||t?.display==="none"?d("UNMOUNT"):n&&o!==r?d("ANIMATION_OUT"):d("UNMOUNT"),a.current=e}},[e,d]),eK(()=>{if(o){let e,t=o.ownerDocument.defaultView??window,n=n=>{let r=eU(i.current).includes(CSS.escape(n.animationName));if(n.target===o&&r&&(d("ANIMATION_END"),!a.current)){let n=o.style.animationFillMode;o.style.animationFillMode="forwards",e=t.setTimeout(()=>{"forwards"===o.style.animationFillMode&&(o.style.animationFillMode=n)})}},r=e=>{e.target===o&&(l.current=eU(i.current))};return o.addEventListener("animationstart",r),o.addEventListener("animationcancel",n),o.addEventListener("animationend",n),()=>{t.clearTimeout(e),o.removeEventListener("animationstart",r),o.removeEventListener("animationcancel",n),o.removeEventListener("animationend",n)}}d("ANIMATION_END")},[o,d]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:c.useCallback(e=>{i.current=e?getComputedStyle(e):null,r(e)},[])}}(r),l="function"==typeof i?i({present:a.isPresent}):c.Children.only(i),s=eP(a.ref,(t=l,(o=(n=Object.getOwnPropertyDescriptor(t.props,"ref")?.get)&&"isReactWarning"in n&&n.isReactWarning)?t.ref:(o=(n=Object.getOwnPropertyDescriptor(t,"ref")?.get)&&"isReactWarning"in n&&n.isReactWarning)?t.props.ref:t.props.ref||t.ref));return"function"==typeof i||a.isPresent?c.cloneElement(l,{ref:s}):null};function eU(e){return e?.animationName||"none"}eW.displayName="Presence";var eY=c[" useId ".trim().toString()]||(()=>void 0),eX=0;function eq(e){let[t,n]=c.useState(eY());return eK(()=>{e||n(e=>e??String(eX++))},[e]),e||(t?`radix-${t}`:"")}function eQ(e){let t=e+"CollectionProvider",[n,o]=eT(t),[r,i]=n(t,{collectionRef:{current:null},itemMap:new Map}),a=e=>{let{scope:t,children:n}=e,o=c.default.useRef(null),i=c.default.useRef(new Map).current;return(0,d.jsx)(r,{scope:t,itemMap:i,collectionRef:o,children:n})};a.displayName=t;let l=e+"CollectionSlot",s=eH(l),u=c.default.forwardRef((e,t)=>{let{scope:n,children:o}=e,r=eP(t,i(l,n).collectionRef);return(0,d.jsx)(s,{ref:r,children:o})});u.displayName=l;let p=e+"CollectionItemSlot",f="data-radix-collection-item",m=eH(p),h=c.default.forwardRef((e,t)=>{let{scope:n,children:o,...r}=e,a=c.default.useRef(null),l=eP(t,a),s=i(p,n);return c.default.useEffect(()=>(s.itemMap.set(a,{ref:a,...r}),()=>void s.itemMap.delete(a))),(0,d.jsx)(m,{...{[f]:""},ref:l,children:o})});return h.displayName=p,[{Provider:a,Slot:u,ItemSlot:h},function(t){let n=i(e+"CollectionConsumer",t);return c.default.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${f}]`));return Array.from(n.itemMap.values()).sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current))},[n.collectionRef,n.itemMap])},o]}function eJ(e){let t=c.useRef(e);return c.useEffect(()=>{t.current=e}),c.useMemo(()=>(...e)=>t.current?.(...e),[])}var e0="dismissableLayer.update",e1=c.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),e2=c.forwardRef((e,t)=>{let{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:o,onPointerDownOutside:r,onFocusOutside:i,onInteractOutside:a,onDismiss:s,...u}=e,p=c.useContext(e1),[f,m]=c.useState(null),h=f?.ownerDocument??globalThis?.document,[,g]=c.useState({}),v=eP(t,e=>m(e)),x=Array.from(p.layers),[C]=[...p.layersWithOutsidePointerEventsDisabled].slice(-1),y=x.indexOf(C),b=f?x.indexOf(f):-1,w=p.layersWithOutsidePointerEventsDisabled.size>0,N=b>=y,L=function(e,t=globalThis?.document){let n=eJ(e),o=c.useRef(!1),r=c.useRef(()=>{});return c.useEffect(()=>{let e=e=>{if(e.target&&!o.current){let o=function(){e3("dismissableLayer.pointerDownOutside",n,i,{discrete:!0})},i={originalEvent:e};"touch"===e.pointerType?(t.removeEventListener("click",r.current),r.current=o,t.addEventListener("click",r.current,{once:!0})):o()}else t.removeEventListener("click",r.current);o.current=!1},i=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(i),t.removeEventListener("pointerdown",e),t.removeEventListener("click",r.current)}},[t,n]),{onPointerDownCapture:()=>o.current=!0}}(e=>{let t=e.target,n=[...p.branches].some(e=>e.contains(t));N&&!n&&(r?.(e),a?.(e),e.defaultPrevented||s?.())},h),j=function(e,t=globalThis?.document){let n=eJ(e),o=c.useRef(!1);return c.useEffect(()=>{let e=e=>{e.target&&!o.current&&e3("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}(e=>{let t=e.target;![...p.branches].some(e=>e.contains(t))&&(i?.(e),a?.(e),e.defaultPrevented||s?.())},h);return!function(e,t=globalThis?.document){let n=eJ(e);c.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{b===p.layers.size-1&&(o?.(e),!e.defaultPrevented&&s&&(e.preventDefault(),s()))},h),c.useEffect(()=>{if(f)return n&&(0===p.layersWithOutsidePointerEventsDisabled.size&&(l=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),p.layersWithOutsidePointerEventsDisabled.add(f)),p.layers.add(f),e5(),()=>{n&&1===p.layersWithOutsidePointerEventsDisabled.size&&(h.body.style.pointerEvents=l)}},[f,h,n,p]),c.useEffect(()=>()=>{f&&(p.layers.delete(f),p.layersWithOutsidePointerEventsDisabled.delete(f),e5())},[f,p]),c.useEffect(()=>{let e=()=>g({});return document.addEventListener(e0,e),()=>document.removeEventListener(e0,e)},[]),(0,d.jsx)(eB.div,{...u,ref:v,style:{pointerEvents:w?N?"auto":"none":void 0,...e.style},onFocusCapture:eA(e.onFocusCapture,j.onFocusCapture),onBlurCapture:eA(e.onBlurCapture,j.onBlurCapture),onPointerDownCapture:eA(e.onPointerDownCapture,L.onPointerDownCapture)})});function e5(){let e=new CustomEvent(e0);document.dispatchEvent(e)}function e3(e,t,n,{discrete:o}){let r=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&r.addEventListener(e,t,{once:!0}),o?eZ(r,i):r.dispatchEvent(i)}e2.displayName="DismissableLayer",c.forwardRef((e,t)=>{let n=c.useContext(e1),o=c.useRef(null),r=eP(t,o);return c.useEffect(()=>{let e=o.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,d.jsx)(eB.div,{...e,ref:r})}).displayName="DismissableLayerBranch";var e9=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),e6=c.forwardRef((e,t)=>(0,d.jsx)(eB.span,{...e,ref:t,style:{...e9,...e.style}}));e6.displayName="VisuallyHidden";var e4="NavigationMenu",[e7,e8,te]=eQ(e4),[tt,tn,to]=eQ(e4),[tr,ti]=eT(e4,[te,to]),[ta,tl]=tr(e4),[ts,td]=tr(e4),tc=c.forwardRef((e,t)=>{let n,{__scopeNavigationMenu:o,value:r,onValueChange:i,defaultValue:a,delayDuration:l=200,skipDelayDuration:s=300,orientation:u="horizontal",dir:p,...f}=e,[m,h]=c.useState(null),g=eP(t,e=>h(e)),v=(n=c.useContext(eG),p||n||"ltr"),x=c.useRef(0),C=c.useRef(0),y=c.useRef(0),[b,w]=c.useState(!0),[N,L]=ez({prop:r,onChange:e=>{let t=s>0;""!==e?(window.clearTimeout(y.current),t&&w(!1)):(window.clearTimeout(y.current),y.current=window.setTimeout(()=>w(!0),s)),i?.(e)},defaultProp:a??"",caller:e4}),j=c.useCallback(()=>{window.clearTimeout(C.current),C.current=window.setTimeout(()=>L(""),150)},[L]),I=c.useCallback(e=>{window.clearTimeout(C.current),L(e)},[L]),_=c.useCallback(e=>{N===e?window.clearTimeout(C.current):x.current=window.setTimeout(()=>{window.clearTimeout(C.current),L(e)},l)},[N,L,l]);return c.useEffect(()=>()=>{window.clearTimeout(x.current),window.clearTimeout(C.current),window.clearTimeout(y.current)},[]),(0,d.jsx)(tp,{scope:o,isRootMenu:!0,value:N,dir:v,orientation:u,rootNavigationMenu:m,onTriggerEnter:e=>{window.clearTimeout(x.current),b?_(e):I(e)},onTriggerLeave:()=>{window.clearTimeout(x.current),j()},onContentEnter:()=>window.clearTimeout(C.current),onContentLeave:j,onItemSelect:e=>{L(t=>t===e?"":e)},onItemDismiss:()=>L(""),children:(0,d.jsx)(eB.nav,{"aria-label":"Main","data-orientation":u,dir:v,...f,ref:g})})});tc.displayName=e4;var tu="NavigationMenuSub";c.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:o,onValueChange:r,defaultValue:i,orientation:a="horizontal",...l}=e,s=tl(tu,n),[c,u]=ez({prop:o,onChange:r,defaultProp:i??"",caller:tu});return(0,d.jsx)(tp,{scope:n,isRootMenu:!1,value:c,dir:s.dir,orientation:a,rootNavigationMenu:s.rootNavigationMenu,onTriggerEnter:e=>u(e),onItemSelect:e=>u(e),onItemDismiss:()=>u(""),children:(0,d.jsx)(eB.div,{"data-orientation":a,...l,ref:t})})}).displayName=tu;var tp=e=>{let t,{scope:n,isRootMenu:o,rootNavigationMenu:r,dir:i,orientation:a,children:l,value:s,onItemSelect:u,onItemDismiss:p,onTriggerEnter:f,onTriggerLeave:m,onContentEnter:h,onContentLeave:g}=e,[v,x]=c.useState(null),[C,y]=c.useState(new Map),[b,w]=c.useState(null);return(0,d.jsx)(ta,{scope:n,isRootMenu:o,rootNavigationMenu:r,value:s,previousValue:(t=c.useRef({value:s,previous:s}),c.useMemo(()=>(t.current.value!==s&&(t.current.previous=t.current.value,t.current.value=s),t.current.previous),[s])),baseId:eq(),dir:i,orientation:a,viewport:v,onViewportChange:x,indicatorTrack:b,onIndicatorTrackChange:w,onTriggerEnter:eJ(f),onTriggerLeave:eJ(m),onContentEnter:eJ(h),onContentLeave:eJ(g),onItemSelect:eJ(u),onItemDismiss:eJ(p),onViewportContentChange:c.useCallback((e,t)=>{y(n=>(n.set(e,t),new Map(n)))},[]),onViewportContentRemove:c.useCallback(e=>{y(t=>t.has(e)?(t.delete(e),new Map(t)):t)},[]),children:(0,d.jsx)(e7.Provider,{scope:n,children:(0,d.jsx)(ts,{scope:n,items:C,children:l})})})},tf="NavigationMenuList",tm=c.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...o}=e,r=tl(tf,n),i=(0,d.jsx)(eB.ul,{"data-orientation":r.orientation,...o,ref:t});return(0,d.jsx)(eB.div,{style:{position:"relative"},ref:r.onIndicatorTrackChange,children:(0,d.jsx)(e7.Slot,{scope:n,children:r.isRootMenu?(0,d.jsx)(tT,{asChild:!0,children:i}):i})})});tm.displayName=tf;var th="NavigationMenuItem",[tg,tv]=tr(th),tx=c.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:o,...r}=e,i=eq(),a=c.useRef(null),l=c.useRef(null),s=c.useRef(null),u=c.useRef(()=>{}),p=c.useRef(!1),f=c.useCallback((e="start")=>{if(a.current){u.current();let t=tV(a.current);t.length&&tP("start"===e?t:t.reverse())}},[]),m=c.useCallback(()=>{if(a.current){var e;let t=tV(a.current);t.length&&((e=t).forEach(e=>{e.dataset.tabindex=e.getAttribute("tabindex")||"",e.setAttribute("tabindex","-1")}),u.current=()=>{e.forEach(e=>{let t=e.dataset.tabindex;e.setAttribute("tabindex",t)})})}},[]);return(0,d.jsx)(tg,{scope:n,value:o||i||"LEGACY_REACT_AUTO_VALUE",triggerRef:l,contentRef:a,focusProxyRef:s,wasEscapeCloseRef:p,onEntryKeyDown:f,onFocusProxyEnter:f,onRootContentClose:m,onContentFocusOutside:m,children:(0,d.jsx)(eB.li,{...r,ref:t})})});tx.displayName=th;var tC="NavigationMenuTrigger",ty=c.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,disabled:o,...r}=e,i=tl(tC,e.__scopeNavigationMenu),a=tv(tC,e.__scopeNavigationMenu),l=c.useRef(null),s=eP(l,a.triggerRef,t),u=tD(i.baseId,a.value),p=tB(i.baseId,a.value),f=c.useRef(!1),m=c.useRef(!1),h=a.value===i.value;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(e7.ItemSlot,{scope:n,value:a.value,children:(0,d.jsx)(t$,{asChild:!0,children:(0,d.jsx)(eB.button,{id:u,disabled:o,"data-disabled":o?"":void 0,"data-state":tO(h),"aria-expanded":h,"aria-controls":p,...r,ref:s,onPointerEnter:eA(e.onPointerEnter,()=>{m.current=!1,a.wasEscapeCloseRef.current=!1}),onPointerMove:eA(e.onPointerMove,tZ(()=>{o||m.current||a.wasEscapeCloseRef.current||f.current||(i.onTriggerEnter(a.value),f.current=!0)})),onPointerLeave:eA(e.onPointerLeave,tZ(()=>{o||(i.onTriggerLeave(),f.current=!1)})),onClick:eA(e.onClick,()=>{i.onItemSelect(a.value),m.current=h}),onKeyDown:eA(e.onKeyDown,e=>{let t={horizontal:"ArrowDown",vertical:"rtl"===i.dir?"ArrowLeft":"ArrowRight"}[i.orientation];h&&e.key===t&&(a.onEntryKeyDown(),e.preventDefault())})})})}),h&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(e6,{"aria-hidden":!0,tabIndex:0,ref:a.focusProxyRef,onFocus:e=>{let t=a.contentRef.current,n=e.relatedTarget,o=n===l.current,r=t?.contains(n);(o||!r)&&a.onFocusProxyEnter(o?"start":"end")}}),i.viewport&&(0,d.jsx)("span",{"aria-owns":p})]})]})});ty.displayName=tC;var tb="navigationMenu.linkSelect",tw=c.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,active:o,onSelect:r,...i}=e;return(0,d.jsx)(t$,{asChild:!0,children:(0,d.jsx)(eB.a,{"data-active":o?"":void 0,"aria-current":o?"page":void 0,...i,ref:t,onClick:eA(e.onClick,e=>{let t=e.target,n=new CustomEvent(tb,{bubbles:!0,cancelable:!0});t.addEventListener(tb,e=>r?.(e),{once:!0}),eZ(t,n),n.defaultPrevented||e.metaKey||eZ(t,new CustomEvent(tE,{bubbles:!0,cancelable:!0}))},{checkForDefaultPrevented:!1})})})});tw.displayName="NavigationMenuLink";var tN="NavigationMenuIndicator";c.forwardRef((e,t)=>{let{forceMount:n,...o}=e,r=tl(tN,e.__scopeNavigationMenu),i=!!r.value;return r.indicatorTrack?ek.default.createPortal((0,d.jsx)(eW,{present:n||i,children:(0,d.jsx)(tL,{...o,ref:t})}),r.indicatorTrack):null}).displayName=tN;var tL=c.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...o}=e,r=tl(tN,n),i=e8(n),[a,l]=c.useState(null),[s,u]=c.useState(null),p="horizontal"===r.orientation,f=!!r.value;c.useEffect(()=>{let e=i(),t=e.find(e=>e.value===r.value)?.ref.current;t&&l(t)},[i,r.value]);let m=()=>{a&&u({size:p?a.offsetWidth:a.offsetHeight,offset:p?a.offsetLeft:a.offsetTop})};return tH(a,m),tH(r.indicatorTrack,m),s?(0,d.jsx)(eB.div,{"aria-hidden":!0,"data-state":f?"visible":"hidden","data-orientation":r.orientation,...o,ref:t,style:{position:"absolute",...p?{left:0,width:s.size+"px",transform:`translateX(${s.offset}px)`}:{top:0,height:s.size+"px",transform:`translateY(${s.offset}px)`},...o.style}}):null}),tj="NavigationMenuContent",tI=c.forwardRef((e,t)=>{let{forceMount:n,...o}=e,r=tl(tj,e.__scopeNavigationMenu),i=tv(tj,e.__scopeNavigationMenu),a=eP(i.contentRef,t),l=i.value===r.value,s={value:i.value,triggerRef:i.triggerRef,focusProxyRef:i.focusProxyRef,wasEscapeCloseRef:i.wasEscapeCloseRef,onContentFocusOutside:i.onContentFocusOutside,onRootContentClose:i.onRootContentClose,...o};return r.viewport?(0,d.jsx)(t_,{forceMount:n,...s,ref:a}):(0,d.jsx)(eW,{present:n||l,children:(0,d.jsx)(tR,{"data-state":tO(l),...s,ref:a,onPointerEnter:eA(e.onPointerEnter,r.onContentEnter),onPointerLeave:eA(e.onPointerLeave,tZ(r.onContentLeave)),style:{pointerEvents:!l&&r.isRootMenu?"none":void 0,...s.style}})})});tI.displayName=tj;var t_=c.forwardRef((e,t)=>{let{onViewportContentChange:n,onViewportContentRemove:o}=tl(tj,e.__scopeNavigationMenu);return eK(()=>{n(e.value,{ref:t,...e})},[e,t,n]),eK(()=>()=>o(e.value),[e.value,o]),null}),tE="navigationMenu.rootContentDismiss",tR=c.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:o,triggerRef:r,focusProxyRef:i,wasEscapeCloseRef:a,onRootContentClose:l,onContentFocusOutside:s,...u}=e,p=tl(tj,n),f=c.useRef(null),m=eP(f,t),h=tD(p.baseId,o),g=tB(p.baseId,o),v=e8(n),x=c.useRef(null),{onItemDismiss:C}=p;c.useEffect(()=>{let e=f.current;if(p.isRootMenu&&e){let t=()=>{C(),l(),e.contains(document.activeElement)&&r.current?.focus()};return e.addEventListener(tE,t),()=>e.removeEventListener(tE,t)}},[p.isRootMenu,e.value,r,C,l]);let y=c.useMemo(()=>{let e=v().map(e=>e.value);"rtl"===p.dir&&e.reverse();let t=e.indexOf(p.value),n=e.indexOf(p.previousValue),r=o===p.value,i=n===e.indexOf(o);if(!r&&!i)return x.current;let a=(()=>{if(t!==n){if(r&&-1!==n)return t>n?"from-end":"from-start";if(i&&-1!==t)return t>n?"to-start":"to-end"}return null})();return x.current=a,a},[p.previousValue,p.value,p.dir,v,o]);return(0,d.jsx)(tT,{asChild:!0,children:(0,d.jsx)(e2,{id:g,"aria-labelledby":h,"data-motion":y,"data-orientation":p.orientation,...u,ref:m,disableOutsidePointerEvents:!1,onDismiss:()=>{let e=new Event(tE,{bubbles:!0,cancelable:!0});f.current?.dispatchEvent(e)},onFocusOutside:eA(e.onFocusOutside,e=>{s();let t=e.target;p.rootNavigationMenu?.contains(t)&&e.preventDefault()}),onPointerDownOutside:eA(e.onPointerDownOutside,e=>{let t=e.target,n=v().some(e=>e.ref.current?.contains(t)),o=p.isRootMenu&&p.viewport?.contains(t);(n||o||!p.isRootMenu)&&e.preventDefault()}),onKeyDown:eA(e.onKeyDown,e=>{let t=e.altKey||e.ctrlKey||e.metaKey;if("Tab"===e.key&&!t){let t=tV(e.currentTarget),n=document.activeElement,o=t.findIndex(e=>e===n);tP(e.shiftKey?t.slice(0,o).reverse():t.slice(o+1,t.length))?e.preventDefault():i.current?.focus()}}),onEscapeKeyDown:eA(e.onEscapeKeyDown,e=>{a.current=!0})})})}),tM="NavigationMenuViewport",tS=c.forwardRef((e,t)=>{let{forceMount:n,...o}=e,r=!!tl(tM,e.__scopeNavigationMenu).value;return(0,d.jsx)(eW,{present:n||r,children:(0,d.jsx)(tk,{...o,ref:t})})});tS.displayName=tM;var tk=c.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,children:o,...r}=e,i=tl(tM,n),a=eP(t,i.onViewportChange),l=td(tj,e.__scopeNavigationMenu),[s,u]=c.useState(null),[p,f]=c.useState(null),m=s?s?.width+"px":void 0,h=s?s?.height+"px":void 0,g=!!i.value,v=g?i.value:i.previousValue;return tH(p,()=>{p&&u({width:p.offsetWidth,height:p.offsetHeight})}),(0,d.jsx)(eB.div,{"data-state":tO(g),"data-orientation":i.orientation,...r,ref:a,style:{pointerEvents:!g&&i.isRootMenu?"none":void 0,"--radix-navigation-menu-viewport-width":m,"--radix-navigation-menu-viewport-height":h,...r.style},onPointerEnter:eA(e.onPointerEnter,i.onContentEnter),onPointerLeave:eA(e.onPointerLeave,tZ(i.onContentLeave)),children:Array.from(l.items).map(([e,{ref:t,forceMount:n,...o}])=>{let r=v===e;return(0,d.jsx)(eW,{present:n||r,children:(0,d.jsx)(tR,{...o,ref:eV(t,e=>{r&&e&&f(e)})})},e)})})}),tT=c.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...o}=e,r=tl("FocusGroup",n);return(0,d.jsx)(tt.Provider,{scope:n,children:(0,d.jsx)(tt.Slot,{scope:n,children:(0,d.jsx)(eB.div,{dir:r.dir,...o,ref:t})})})}),tA=["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"],t$=c.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...o}=e,r=tn(n),i=tl("FocusGroupItem",n);return(0,d.jsx)(tt.ItemSlot,{scope:n,children:(0,d.jsx)(eB.button,{...o,ref:t,onKeyDown:eA(e.onKeyDown,e=>{if(["Home","End",...tA].includes(e.key)){let t=r().map(e=>e.ref.current);if(["rtl"===i.dir?"ArrowRight":"ArrowLeft","ArrowUp","End"].includes(e.key)&&t.reverse(),tA.includes(e.key)){let n=t.indexOf(e.currentTarget);t=t.slice(n+1)}setTimeout(()=>tP(t)),e.preventDefault()}})})})});function tV(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function tP(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}function tH(e,t){let n=eJ(t);eK(()=>{let t=0;if(e){let o=new ResizeObserver(()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(n)});return o.observe(e),()=>{window.cancelAnimationFrame(t),o.unobserve(e)}}},[e,n])}function tO(e){return e?"open":"closed"}function tD(e,t){return`${e}-trigger-${t}`}function tB(e,t){return`${e}-content-${t}`}function tZ(e){return t=>"mouse"===t.pointerType?e(t):void 0}var tK=e.i(63209),tF=e.i(706736);let tz=p.default.div.withConfig({displayName:"Accent__VerticalBar",componentId:"sc-a3365bf4-0"})`
  position: relative;
  overflow: clip;
  height: 1rem;
  width: 1px;
  --dir: 0deg;

  &::after {
    content: '';
    background-color: transparent;
    background-image: ${({theme:e})=>{let t=e.paletteCssVars.grid1200,n=e.paletteCssVars.fgA100;return`linear-gradient(var(--dir), ${t} 50%, ${n})`}};
    position: absolute;
    inset: 0;
  }
`,tG=p.default.div.withConfig({displayName:"Accent__HorizontalBar",componentId:"sc-a3365bf4-1"})`
  position: relative;
  overflow: clip;
  width: 1rem;
  height: 1px;
  --dir: 90deg;

  &::after {
    content: '';
    background-color: transparent;
    background-image: ${({theme:e})=>{let t=e.paletteCssVars.grid1200,n=e.paletteCssVars.fgA100;return`linear-gradient(var(--dir), ${t} 50%, ${n})`}};
    position: absolute;
    inset: 0;
  }
`,tW=p.default.div.withConfig({displayName:"Accent__LContainer",componentId:"sc-a3365bf4-2"})`
  --progress: 0;

  position: absolute;
  display: grid;
  place-items: center;
  z-index: 2;

  & > * {
    grid-area: 1 / -1;
  }

  &[data-position='tl'] {
    inset: 0.5px auto auto -0.5px;
    transform: translate(-50%, -50%);

    ${tz}::after {
      --dir: 180deg;
      transform-origin: 50% 0%;
      transform: translateY(calc(var(--progress) * 100%));
    }
    ${tG}::after {
      transform-origin: 0% 50%;
      transform: translateX(calc(var(--progress) * 100%));
    }
  }
  &[data-position='tr'] {
    inset: 0.5px -0.5px auto auto;
    transform: translate(50%, -50%);

    ${tz}::after {
      --dir: 180deg;
      transform-origin: 50% 0%;
      transform: translateY(calc(var(--progress) * 100%));
    }
    ${tG}::after {
      --dir: 270deg;
      transform-origin: 100% 50%;
      transform: translateX(calc(var(--progress) * -100%));
    }
  }
  &[data-position='bl'] {
    inset: auto auto 0.5px -0.5px;
    transform: translate(-50%, 50%);

    ${tz}::after {
      transform-origin: 50% 100%;
      transform: translateY(calc(var(--progress) * -100%));
    }
    ${tG}::after {
      transform-origin: 0% 50%;
      transform: translateX(calc(var(--progress) * 100%));
    }
  }
  &[data-position='br'] {
    inset: auto -0.5px 0.5px auto;
    transform: translate(50%, 50%);

    ${tz}::after {
      transform-origin: 50% 100%;
      transform: translateY(calc(var(--progress) * -100%));
    }
    ${tG}::after {
      --dir: 270deg;
      transform-origin: 100% 50%;
      transform: translateX(calc(var(--progress) * -100%));
    }
  }
`;function tU({position:e}){let{smoothSquishProgress:t}=(0,en.useHeaderUI)(),n=(0,es.useTransform)(t,[0,1],[-1,.5]);return(0,d.jsxs)(tW,{"data-position":e,children:[(0,d.jsx)(tz,{as:u.motion.div,style:{"--progress":n,opacity:t}}),(0,d.jsx)(tG,{as:u.motion.div,style:{"--progress":n,opacity:t}})]})}var tY=e.i(660814),tX=e.i(290571),tq="right-scroll-bar-position",tQ="width-before-scroll-bar";function tJ(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var t0="u">typeof window?c.useLayoutEffect:c.useEffect,t1=new WeakMap,t2=(void 0===t&&(t={}),(void 0===n&&(n=function(e){return e}),o=[],r=!1,i={read:function(){if(r)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return o.length?o[o.length-1]:null},useMedium:function(e){var t=n(e,r);return o.push(t),function(){o=o.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(r=!0;o.length;){var t=o;o=[],t.forEach(e)}o={push:function(t){return e(t)},filter:function(){return o}}},assignMedium:function(e){r=!0;var t=[];if(o.length){var n=o;o=[],n.forEach(e),t=o}var i=function(){var n=t;t=[],n.forEach(e)},a=function(){return Promise.resolve().then(i)};a(),o={push:function(e){t.push(e),a()},filter:function(e){return t=t.filter(e),o}}}}).options=(0,tX.__assign)({async:!0,ssr:!1},t),i),t5=function(){},t3=c.forwardRef(function(e,t){var n,o,r,i,a=c.useRef(null),l=c.useState({onScrollCapture:t5,onWheelCapture:t5,onTouchMoveCapture:t5}),s=l[0],d=l[1],u=e.forwardProps,p=e.children,f=e.className,m=e.removeScrollBar,h=e.enabled,g=e.shards,v=e.sideCar,x=e.noRelative,C=e.noIsolation,y=e.inert,b=e.allowPinchZoom,w=e.as,N=e.gapMode,L=(0,tX.__rest)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),j=(n=[a,t],o=function(e){return n.forEach(function(t){return tJ(t,e)})},(r=(0,c.useState)(function(){return{value:null,callback:o,facade:{get current(){return r.value},set current(value){var e=r.value;e!==value&&(r.value=value,r.callback(value,e))}}}})[0]).callback=o,i=r.facade,t0(function(){var e=t1.get(i);if(e){var t=new Set(e),o=new Set(n),r=i.current;t.forEach(function(e){o.has(e)||tJ(e,null)}),o.forEach(function(e){t.has(e)||tJ(e,r)})}t1.set(i,n)},[n]),i),I=(0,tX.__assign)((0,tX.__assign)({},L),s);return c.createElement(c.Fragment,null,h&&c.createElement(v,{sideCar:t2,removeScrollBar:m,shards:g,noRelative:x,noIsolation:C,inert:y,setCallbacks:d,allowPinchZoom:!!b,lockRef:a,gapMode:N}),u?c.cloneElement(c.Children.only(p),(0,tX.__assign)((0,tX.__assign)({},I),{ref:j})):c.createElement(void 0===w?"div":w,(0,tX.__assign)({},I,{className:f,ref:j}),p))});t3.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},t3.classNames={fullWidth:tQ,zeroRight:tq};var t9=function(e){var t=e.sideCar,n=(0,tX.__rest)(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var o=t.read();if(!o)throw Error("Sidecar medium not found");return c.createElement(o,(0,tX.__assign)({},n))};t9.isSideCarExport=!0;var t6=function(){var e=0,t=null;return{add:function(n){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=s||("u">typeof __webpack_nonce__?__webpack_nonce__:void 0);return t&&e.setAttribute("nonce",t),e}())){var o,r;(o=t).styleSheet?o.styleSheet.cssText=n:o.appendChild(document.createTextNode(n)),r=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(r)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},t4=function(){var e=t6();return function(t,n){c.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},t7=function(){var e=t4();return function(t){return e(t.styles,t.dynamic),null}},t8={left:0,top:0,right:0,gap:0},ne=function(e){return parseInt(e||"",10)||0},nt=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],o=t["padding"===e?"paddingTop":"marginTop"],r=t["padding"===e?"paddingRight":"marginRight"];return[ne(n),ne(o),ne(r)]},nn=function(e){if(void 0===e&&(e="margin"),"u"<typeof window)return t8;var t=nt(e),n=document.documentElement.clientWidth,o=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,o-n+t[2]-t[0])}},no=t7(),nr="data-scroll-locked",ni=function(e,t,n,o){var r=e.left,i=e.top,a=e.right,l=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(o,";\n   padding-right: ").concat(l,"px ").concat(o,";\n  }\n  body[").concat(nr,"] {\n    overflow: hidden ").concat(o,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(o,";"),"margin"===n&&"\n    padding-left: ".concat(r,"px;\n    padding-top: ").concat(i,"px;\n    padding-right: ").concat(a,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l,"px ").concat(o,";\n    "),"padding"===n&&"padding-right: ".concat(l,"px ").concat(o,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(tq," {\n    right: ").concat(l,"px ").concat(o,";\n  }\n  \n  .").concat(tQ," {\n    margin-right: ").concat(l,"px ").concat(o,";\n  }\n  \n  .").concat(tq," .").concat(tq," {\n    right: 0 ").concat(o,";\n  }\n  \n  .").concat(tQ," .").concat(tQ," {\n    margin-right: 0 ").concat(o,";\n  }\n  \n  body[").concat(nr,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(l,"px;\n  }\n")},na=function(){var e=parseInt(document.body.getAttribute(nr)||"0",10);return isFinite(e)?e:0},nl=function(){c.useEffect(function(){return document.body.setAttribute(nr,(na()+1).toString()),function(){var e=na()-1;e<=0?document.body.removeAttribute(nr):document.body.setAttribute(nr,e.toString())}},[])},ns=function(e){var t=e.noRelative,n=e.noImportant,o=e.gapMode,r=void 0===o?"margin":o;nl();var i=c.useMemo(function(){return nn(r)},[r]);return c.createElement(no,{styles:ni(i,!t,r,n?"":"!important")})},nd=!1;if("u">typeof window)try{var nc=Object.defineProperty({},"passive",{get:function(){return nd=!0,!0}});window.addEventListener("test",nc,nc),window.removeEventListener("test",nc,nc)}catch(e){nd=!1}var nu=!!nd&&{passive:!1},np=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return"hidden"!==n[t]&&(n.overflowY!==n.overflowX||"TEXTAREA"===e.tagName||"visible"!==n[t])},nf=function(e,t){var n=t.ownerDocument,o=t;do{if("u">typeof ShadowRoot&&o instanceof ShadowRoot&&(o=o.host),nm(e,o)){var r=nh(e,o);if(r[1]>r[2])return!0}o=o.parentNode}while(o&&o!==n.body)return!1},nm=function(e,t){return"v"===e?np(t,"overflowY"):np(t,"overflowX")},nh=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},ng=function(e,t,n,o,r){var i,a=(i=window.getComputedStyle(t).direction,"h"===e&&"rtl"===i?-1:1),l=a*o,s=n.target,d=t.contains(s),c=!1,u=l>0,p=0,f=0;do{if(!s)break;var m=nh(e,s),h=m[0],g=m[1]-m[2]-a*h;(h||g)&&nm(e,s)&&(p+=g,f+=h);var v=s.parentNode;s=v&&v.nodeType===Node.DOCUMENT_FRAGMENT_NODE?v.host:v}while(!d&&s!==document.body||d&&(t.contains(s)||t===s))return u&&(r&&1>Math.abs(p)||!r&&l>p)?c=!0:!u&&(r&&1>Math.abs(f)||!r&&-l>f)&&(c=!0),c},nv=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},nx=function(e){return[e.deltaX,e.deltaY]},nC=function(e){return e&&"current"in e?e.current:e},ny=0,nb=[];let nw=(a=function(e){var t=c.useRef([]),n=c.useRef([0,0]),o=c.useRef(),r=c.useState(ny++)[0],i=c.useState(t7)[0],a=c.useRef(e);c.useEffect(function(){a.current=e},[e]),c.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(r));var t=(0,tX.__spreadArray)([e.lockRef.current],(e.shards||[]).map(nC),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(r))}),function(){document.body.classList.remove("block-interactivity-".concat(r)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(r))})}}},[e.inert,e.lockRef.current,e.shards]);var l=c.useCallback(function(e,t){if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!a.current.allowPinchZoom;var r,i=nv(e),l=n.current,s="deltaX"in e?e.deltaX:l[0]-i[0],d="deltaY"in e?e.deltaY:l[1]-i[1],c=e.target,u=Math.abs(s)>Math.abs(d)?"h":"v";if("touches"in e&&"h"===u&&"range"===c.type)return!1;var p=window.getSelection(),f=p&&p.anchorNode;if(f&&(f===c||f.contains(c)))return!1;var m=nf(u,c);if(!m)return!0;if(m?r=u:(r="v"===u?"h":"v",m=nf(u,c)),!m)return!1;if(!o.current&&"changedTouches"in e&&(s||d)&&(o.current=r),!r)return!0;var h=o.current||r;return ng(h,t,e,"h"===h?s:d,!0)},[]),s=c.useCallback(function(e){if(nb.length&&nb[nb.length-1]===i){var n="deltaY"in e?nx(e):nv(e),o=t.current.filter(function(t){var o;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(o=t.delta,o[0]===n[0]&&o[1]===n[1])})[0];if(o&&o.should){e.cancelable&&e.preventDefault();return}if(!o){var r=(a.current.shards||[]).map(nC).filter(Boolean).filter(function(t){return t.contains(e.target)});(r.length>0?l(e,r[0]):!a.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),d=c.useCallback(function(e,n,o,r){var i={name:e,delta:n,target:o,should:r,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(o)};t.current.push(i),setTimeout(function(){t.current=t.current.filter(function(e){return e!==i})},1)},[]),u=c.useCallback(function(e){n.current=nv(e),o.current=void 0},[]),p=c.useCallback(function(t){d(t.type,nx(t),t.target,l(t,e.lockRef.current))},[]),f=c.useCallback(function(t){d(t.type,nv(t),t.target,l(t,e.lockRef.current))},[]);c.useEffect(function(){return nb.push(i),e.setCallbacks({onScrollCapture:p,onWheelCapture:p,onTouchMoveCapture:f}),document.addEventListener("wheel",s,nu),document.addEventListener("touchmove",s,nu),document.addEventListener("touchstart",u,nu),function(){nb=nb.filter(function(e){return e!==i}),document.removeEventListener("wheel",s,nu),document.removeEventListener("touchmove",s,nu),document.removeEventListener("touchstart",u,nu)}},[]);var m=e.removeScrollBar,h=e.inert;return c.createElement(c.Fragment,null,h?c.createElement(i,{styles:"\n  .block-interactivity-".concat(r," {pointer-events: none;}\n  .allow-interactivity-").concat(r," {pointer-events: all;}\n")}):null,m?c.createElement(ns,{noRelative:e.noRelative,gapMode:e.gapMode}):null)},t2.useMedium(a),t9);var nN=c.forwardRef(function(e,t){return c.createElement(t3,(0,tX.__assign)({},e,{ref:t,sideCar:nw}))});nN.classNames=t3.classNames;var nL=e.i(88653),nj=e.i(288839),nI=e.i(279897),n_=e.i(395967),nE=e.i(924837),nR=e.i(759609),nM=e.i(486427),nS=e.i(430388),nk=e.i(662743);function nT({className:e}){return(0,d.jsxs)("svg",{className:e,fill:"none",viewBox:"0 0 396 223",xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsx)("path",{d:"M75.0633 79.8902C86.6354 68.3181 86.6352 49.5559 75.0633 37.9838L76.1683 39.0356C87.8004 49.5455 105.759 49.1941 116.97 37.9838C105.76 49.1941 105.409 67.1531 115.918 78.7852L116.97 79.8902C105.398 68.3185 86.6353 68.3182 75.0633 79.8902Z",fill:"currentColor"}),(0,d.jsx)("path",{d:"M117.214 121.392C128.786 109.82 128.786 91.0581 117.214 79.4859L118.319 80.5377C129.951 91.0476 147.91 90.6962 159.12 79.4859C147.91 90.6962 147.559 108.655 158.068 120.287L159.12 121.392C147.548 109.821 128.786 109.82 117.214 121.392Z",fill:"currentColor"}),(0,d.jsx)("path",{d:"M159.364 77.945C170.936 66.3729 170.936 47.6108 159.364 36.0386L160.469 37.0904C172.101 47.6004 190.06 47.249 201.271 36.0386C190.061 47.2489 189.71 65.2079 200.219 76.84L201.271 77.945C189.698 66.3733 170.936 66.373 159.364 77.945Z",fill:"currentColor"}),(0,d.jsx)("path",{d:"M200.866 119.447C212.438 107.875 212.438 89.1129 200.866 77.5407L201.971 78.5925C213.603 89.1025 231.562 88.7511 242.773 77.5407C231.563 88.7511 231.212 106.71 241.721 118.342L242.773 119.447C231.201 107.875 212.438 107.875 200.866 119.447Z",fill:"currentColor"}),(0,d.jsx)("path",{d:"M158.716 161.598C170.288 150.026 170.288 131.264 158.716 119.692L159.821 120.744C171.453 131.253 189.412 130.902 200.622 119.692C189.412 130.902 189.061 148.861 199.57 160.493L200.622 161.598C189.05 150.026 170.288 150.026 158.716 161.598Z",fill:"currentColor"}),(0,d.jsx)("path",{d:"M39.6733 115.735C47.8166 107.592 47.8165 94.389 39.6733 86.2457L40.4509 86.9858C48.6365 94.3817 61.274 94.1344 69.1629 86.2457C61.2744 94.1344 61.0275 106.772 68.4228 114.958L69.1629 115.735C61.0196 107.592 47.8166 107.592 39.6733 115.735Z",fill:"currentColor"}),(0,d.jsx)("path",{d:"M81.8246 157.239C89.9678 149.096 89.9678 135.893 81.8246 127.749L82.6021 128.489C90.7877 135.885 103.425 135.638 111.314 127.749C103.426 135.638 103.179 148.276 110.574 156.461L111.314 157.239C103.171 149.096 89.9678 149.096 81.8246 157.239Z",fill:"currentColor"}),(0,d.jsx)("path",{d:"M123.326 197.443C131.47 189.3 131.47 176.097 123.326 167.954L124.104 168.694C132.29 176.09 144.927 175.842 152.816 167.954C144.928 175.842 144.681 188.48 152.076 196.666L152.816 197.443C144.673 189.3 131.47 189.3 123.326 197.443Z",fill:"currentColor"}),(0,d.jsx)("path",{d:"M210.221 197.443C218.365 189.3 218.365 176.097 210.221 167.954L210.999 168.694C219.185 176.09 231.822 175.842 239.711 167.954C231.823 175.842 231.576 188.48 238.971 196.666L239.711 197.443C231.568 189.3 218.365 189.3 210.221 197.443Z",fill:"currentColor"}),(0,d.jsx)("path",{d:"M39.6733 197.443C47.8166 189.3 47.8165 176.097 39.6733 167.954L40.4509 168.694C48.6365 176.09 61.274 175.842 69.1629 167.954C61.2744 175.842 61.0275 188.48 68.4228 196.666L69.1629 197.443C61.0196 189.3 47.8166 189.3 39.6733 197.443Z",fill:"currentColor"}),(0,d.jsx)("path",{d:"M249.129 157.239C257.273 149.096 257.273 135.893 249.129 127.749L249.907 128.489C258.093 135.885 270.73 135.638 278.619 127.749C270.731 135.638 270.484 148.276 277.879 156.461L278.619 157.239C270.476 149.096 257.273 149.096 249.129 157.239Z",fill:"currentColor"}),(0,d.jsx)("path",{d:"M249.129 74.2339C257.273 66.0906 257.273 52.8876 249.129 44.7443L249.907 45.4844C258.093 52.8803 270.73 52.633 278.619 44.7443C270.731 52.633 270.484 65.2708 277.879 73.4564L278.619 74.2339C270.476 66.0909 257.273 66.0907 249.129 74.2339Z",fill:"currentColor"}),(0,d.jsx)("path",{d:"M289.983 113.79C298.126 105.647 298.126 92.4438 289.983 84.3005L290.76 85.0406C298.946 92.4365 311.583 92.1892 319.472 84.3005C311.584 92.1892 311.337 104.827 318.732 113.013L319.472 113.79C311.329 105.647 298.126 105.647 289.983 113.79Z",fill:"currentColor"}),(0,d.jsx)("path",{d:"M328.891 71.6398C337.034 63.4966 337.034 50.2936 328.891 42.1502L329.668 42.8904C337.854 50.2863 350.492 50.039 358.381 42.1502C350.492 50.039 350.245 62.6767 357.64 70.8623L358.381 71.6398C350.237 63.4968 337.034 63.4966 328.891 71.6398Z",fill:"currentColor"}),(0,d.jsx)("path",{d:"M328.891 153.996C337.034 145.853 337.034 132.65 328.891 124.506L329.668 125.246C337.854 132.642 350.492 132.395 358.381 124.506C350.492 132.395 350.245 145.033 357.64 153.218L358.381 153.996C350.237 145.853 337.034 145.853 328.891 153.996Z",fill:"currentColor"}),(0,d.jsx)("path",{d:"M207.628 29.4896C215.771 21.3463 215.771 8.14334 207.628 0L208.405 0.74012C216.591 8.13601 229.228 7.88873 237.117 0C229.229 7.88872 228.982 20.5265 236.377 28.712L237.117 29.4896C228.974 21.3466 215.771 21.3464 207.628 29.4896Z",fill:"currentColor"}),(0,d.jsx)("path",{d:"M123.326 29.4896C131.47 21.3463 131.47 8.14334 123.326 0L124.104 0.74012C132.29 8.13601 144.927 7.88873 152.816 0C144.928 7.88872 144.681 20.5265 152.076 28.712L152.816 29.4896C144.673 21.3466 131.47 21.3464 123.326 29.4896Z",fill:"currentColor"}),(0,d.jsx)("path",{d:"M39.6733 29.4896C47.8166 21.3463 47.8165 8.14334 39.6733 0L40.4509 0.74012C48.6365 8.13601 61.274 7.88873 69.1629 0C61.2744 7.88872 61.0275 20.5265 68.4228 28.712L69.1629 29.4896C61.0196 21.3466 47.8166 21.3464 39.6733 29.4896Z",fill:"currentColor"}),(0,d.jsx)("path",{d:"M293.108 24.5998C298.68 19.0281 298.68 9.99442 293.108 4.42265L293.64 4.92905C299.241 9.98941 307.888 9.82021 313.285 4.42265C307.888 9.82021 307.719 18.4671 312.779 24.0678L313.285 24.5998C307.714 19.0283 298.68 19.0281 293.108 24.5998Z",fill:"currentColor"}),(0,d.jsx)("path",{d:"M375.464 24.5998C381.036 19.0281 381.035 9.99442 375.464 4.42265L375.996 4.92905C381.596 9.98941 390.243 9.82021 395.641 4.42265C390.244 9.82021 390.075 18.4671 395.135 24.0678L395.641 24.5998C390.069 19.0283 381.035 19.0281 375.464 24.5998Z",fill:"currentColor"}),(0,d.jsx)("path",{d:"M375.464 108.901C381.036 103.329 381.035 94.2957 375.464 88.7239L375.996 89.2303C381.596 94.2907 390.243 94.1215 395.641 88.7239C390.244 94.1215 390.075 102.768 395.135 108.369L395.641 108.901C390.069 103.33 381.035 103.329 375.464 108.901Z",fill:"currentColor"}),(0,d.jsx)("path",{d:"M2.55121e-06 66.75C5.57173 61.1783 5.57167 52.1447 2.55121e-06 46.5729L0.532017 47.0793C6.13267 52.1397 14.7795 51.9705 20.1771 46.5729C14.7797 51.9705 14.6108 60.6174 19.6707 66.218L20.1771 66.75C14.6054 61.1785 5.57169 61.1784 2.55121e-06 66.75Z",fill:"currentColor"}),(0,d.jsx)("path",{d:"M293.108 193.202C298.68 187.63 298.68 178.596 293.108 173.024L293.64 173.531C299.241 178.591 307.888 178.422 313.285 173.024C307.888 178.422 307.719 187.069 312.779 192.67L313.285 193.202C307.714 187.63 298.68 187.63 293.108 193.202Z",fill:"currentColor"}),(0,d.jsx)("path",{d:"M347.654 202.023C342.082 207.595 342.082 216.628 347.654 222.2L347.122 221.694C341.521 216.633 332.875 216.802 327.477 222.2C332.874 216.802 333.043 208.156 327.983 202.555L327.477 202.023C333.049 207.594 342.082 207.595 347.654 202.023Z",fill:"currentColor"}),(0,d.jsx)("path",{d:"M102.533 202.023C96.9613 207.595 96.9614 216.628 102.533 222.2L102.001 221.694C96.4004 216.633 87.7536 216.802 82.3559 222.2C87.7533 216.802 87.9223 208.156 82.8623 202.555L82.3559 202.023C87.9277 207.594 96.9614 207.595 102.533 202.023Z",fill:"currentColor"}),(0,d.jsx)("path",{d:"M375.464 193.202C381.036 187.63 381.035 178.596 375.464 173.024L375.996 173.531C381.596 178.591 390.243 178.422 395.641 173.024C390.244 178.422 390.075 187.069 395.135 192.67L395.641 193.202C390.069 187.63 381.035 187.63 375.464 193.202Z",fill:"currentColor"}),(0,d.jsx)("path",{d:"M265.299 202.023C259.727 207.595 259.727 216.628 265.299 222.2L264.767 221.694C259.166 216.633 250.519 216.802 245.121 222.2C250.519 216.802 250.688 208.156 245.628 202.555L245.121 202.023C250.693 207.594 259.727 207.595 265.299 202.023Z",fill:"currentColor"}),(0,d.jsx)("path",{d:"M20.1771 202.023C14.6054 207.595 14.6055 216.628 20.1771 222.2L19.6451 221.694C14.0445 216.633 5.39769 216.802 0 222.2C5.39743 216.802 5.56638 208.156 0.506401 202.555L1.70081e-06 202.023C5.57178 207.594 14.6055 207.595 20.1771 202.023Z",fill:"currentColor"}),(0,d.jsx)("path",{d:"M182.943 202.023C177.371 207.595 177.371 216.628 182.943 222.2L182.411 221.694C176.81 216.633 168.164 216.802 162.766 222.2C168.163 216.802 168.332 208.156 163.272 202.555L162.766 202.023C168.338 207.594 177.371 207.595 182.943 202.023Z",fill:"currentColor"}),(0,d.jsx)("path",{d:"M2.55121e-06 152.348C5.57173 146.777 5.57167 137.743 2.55121e-06 132.171L0.532017 132.678C6.13267 137.738 14.7795 137.569 20.1771 132.171C14.7797 137.569 14.6108 146.216 19.6707 151.816L20.1771 152.348C14.6054 146.777 5.57169 146.777 2.55121e-06 152.348Z",fill:"currentColor"})]})}var nA=e.i(344273);let n$=p.default.div.withConfig({displayName:"navConfig__IllustrationWrapper",componentId:"sc-cb5d3298-0"})`
  opacity: 0.6;
`,nV=p.default.div.withConfig({displayName:"navConfig__AIAnalyticsIllustrationWrapper",componentId:"sc-cb5d3298-1"})`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 1;

  svg {
    color: ${({theme:e})=>e.highlightColor};
    opacity: 0.2;
    height: 230%;
    width: auto;
    mask-image: linear-gradient(to top, transparent, white 100%);
  }
`,nP=[{title:"Platform",icon:null,dropdown:{callout:{title:"AI & agents",description:"Agentic workflows to empower your entire team",icon:(0,d.jsx)(nS.MagicIcon,{}),to:C.INTERNAL_LINKS.AiAndAgents,position:"bottom",illustration:e=>(0,d.jsx)(n$,{children:(0,d.jsx)(nA.AiIllustrationCanvas,{desktopHeight:1e3,desktopWidth:1e3,duration:100,normalizedInnerRadius:.175,pathDuration:.6,paused:e,progress:(0,nM.motionValue)(0),segments:42})})},lists:[{title:"Products",children:[{icon:(0,d.jsx)(nI.IconNotebooks,{}),title:"Agentic notebooks",to:C.INTERNAL_LINKS.Notebooks,description:"Powerful, deep-dive analysis without the silos"},{icon:(0,d.jsx)(nI.IconThreads,{}),title:"Conversational analytics",to:C.INTERNAL_LINKS.Threads,description:"Ask and explore data in plain language"},{icon:(0,d.jsx)(nS.SemanticModelsIcon,{}),title:"Context Studio",to:C.INTERNAL_LINKS.ContextStudio,description:"Build trust in data with semantic models and AI governance"},{icon:(0,d.jsx)(nS.AppBuilderIcon,{}),title:"Data apps",to:C.INTERNAL_LINKS.AppBuilder,description:"Build and share interactive dashboards and reporting"},{icon:(0,d.jsx)(nS.CLIIcon,{}),title:"Hex CLI",to:C.INTERNAL_LINKS.CLI,description:"Control your analytics from the terminal"}]},{title:"Capabilities",children:[{icon:(0,d.jsx)(nI.IconExploratoryAnalysis,{}),title:"Exploratory analysis",to:C.INTERNAL_LINKS.UseCaseExploratoryAnalysis,description:"Go from quick question to deep analysis to data app in one place"},{icon:(0,d.jsx)(nI.IconTemplates,{}),title:"Business intelligence",to:C.INTERNAL_LINKS.BI,description:"Governed self-serve and dashboards for the entire org"},{icon:(0,d.jsx)(nI.IconDownload,{}),title:"Embedded analytics",to:C.INTERNAL_LINKS.EmbeddedAnalytics,description:"Ship secure, customer-facing data experiences"},{icon:(0,d.jsx)(nI.IconIntegrations,{}),title:"Integrations",to:C.INTERNAL_LINKS.Integrations,description:"Out-of-the-box connections and flexible APIs"}]}]}},{title:"Solutions",icon:null,dropdown:{callout:{title:"Explore all solutions",description:"One connected system - infinite data answers",icon:(0,d.jsx)(nS.LightbulbIcon,{}),to:C.INTERNAL_LINKS.Solutions,position:"top"},lists:[{title:"By team",children:[{icon:(0,d.jsx)(nk.SolutionsDataLeaderIcon,{}),title:"Data leader",to:C.INTERNAL_LINKS.SolutionsDataLeaders,description:"Focus your team and scale answers"},{icon:(0,d.jsx)(nk.SolutionsProductIcon,{}),title:"Product",to:C.INTERNAL_LINKS.SolutionsProductAnalytics,description:"Build your product with data, not gut feels"},{icon:(0,d.jsx)(nk.SolutionsMarketingIcon,{}),title:"Marketing",to:C.INTERNAL_LINKS.SolutionsMarketing,description:"Turn scattered data into clear growth opportunities"},{icon:(0,d.jsx)(nk.SolutionsSalesIcon,{}),title:"Sales",to:C.INTERNAL_LINKS.SolutionsSales,description:"Clear pipeline. Confident forecasts"},{icon:(0,d.jsx)(nk.SolutionsCustomerSuccessIcon,{}),title:"Customer success",to:C.INTERNAL_LINKS.SolutionsCustomerSuccess,description:"Create a complete view of customer health"}]}]}},{title:"Enterprise",icon:null,to:C.INTERNAL_LINKS.Enterprise}],nH=[{title:"Resources",icon:null,dropdown:{callout:{cta:"Download",title:"The Data Leader's Guide to AI Analytics",description:"A practical roadmap for understanding and implementing AI to accelerate your data team and enable true self-service.",icon:(0,d.jsx)(nS.SaveIcon,{}),to:C.INTERNAL_LINKS.GuideAIAnalytics,position:"bottom",illustration:()=>(0,d.jsx)(nV,{children:(0,d.jsx)(nT,{})})},lists:[{title:"Get started",children:[{title:"Switching to Hex",to:C.INTERNAL_LINKS.SwitchingToHex,icon:(0,d.jsx)(nS.IntegrationsIcon,{}),description:"A guide to getting started on agentic analytics"},{title:"Templates",to:C.INTERNAL_LINKS.Templates,icon:(0,d.jsx)(nI.IconTemplates,{}),description:"Jumpstart with pre-built projects"},{title:"Docs",to:C.DOCS_LINKS.Home,icon:(0,d.jsx)(nS.HelpIcon,{}),description:"Resources and product guides"},{title:"Changelog",to:C.DOCS_LINKS.Changelog,icon:(0,d.jsx)(nI.IconChangelog,{}),description:"Product updates"}]},{title:"Inspiration",children:[{title:"Blog",to:C.INTERNAL_LINKS.Blog,icon:(0,d.jsx)(nI.IconBlog,{}),description:"From data teams to data teams"},{title:"Guides",to:C.INTERNAL_LINKS.Guides,icon:(0,d.jsx)(nI.IconDocs,{}),description:"Learn how to do more with data, together"},{title:"Events",to:C.INTERNAL_LINKS.Events,icon:(0,d.jsx)(nI.IconPin,{}),description:"Learn and connect with peers"},{title:"Customer stories",to:C.INTERNAL_LINKS.Customers,icon:(0,d.jsx)(nI.IconCustomers,{}),description:"Empowering the best data teams"},{title:"Partners",to:C.INTERNAL_LINKS.Partners,icon:(0,d.jsx)(nI.IconPartners,{}),description:"Learn more about our partnerships"}]}]}},{title:"Pricing",icon:null,to:C.INTERNAL_LINKS.Pricing}],nO=[...nP,...nH].sort((e,t)=>("dropdown"in e?0:1)-("dropdown"in t?0:1)),nD=p.default.svg.attrs({fill:"none",height:16,stroke:"currentColor",strokeWidth:2,viewBox:"0 0 24 24",width:16,children:(0,d.jsx)("path",{d:"M6 9l6 6 6-6"})}).withConfig({displayName:"MobileNav__IconChevronRight",componentId:"sc-f0952d51-0"})`
  transform: rotate(-90deg);
`,nB=p.default.button.withConfig({displayName:"MobileNav__HamburgerButton",componentId:"sc-f0952d51-1"})`
  --y: 0.175rem;
  --r: 0deg;

  position: relative;
  display: none;
  width: 2.5rem;
  aspect-ratio: 1 / 1;
  margin: auto 0.5rem auto auto;
  background: transparent;
  border: none;
  border-radius: 999px;
  place-items: center;
  padding: 0;

  &::after,
  &::before {
    content: '';
    height: 1px;
    width: 50%;
    background-color: ${({theme:e})=>e.paletteCssVars.fg1200};
    grid-area: 1 / -1;
    transform-origin: 50% 50%;
  }

  &::before {
    transform: translateY(var(--y)) rotate(var(--r));
  }

  &::after {
    transform: translateY(calc(-1 * var(--y))) rotate(calc(-1 * var(--r)));
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    display: grid;
  }
`,nZ=p.default.div.withConfig({displayName:"MobileNav__HamburgerButtonBg",componentId:"sc-f0952d51-2"})`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background-color: ${({theme:e})=>e.paletteCssVars.fg100};
  z-index: -1;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    opacity: 0.98;
    background-image: radial-gradient(
      at 0% 0%,
      ${({theme:e})=>e.paletteCssVars.fg100} 48%,
      color-mix(
        in srgb,
        ${({theme:e})=>e.paletteCssVars.fg100} 92%,
        black
      )
    );
  }
`,nK=(0,p.default)(u.motion.div).withConfig({displayName:"MobileNav__HamburgerButtonShadow",componentId:"sc-f0952d51-3"})`
  position: absolute;
  inset: 0;
  z-index: -1;
  border-radius: inherit;
  ${({theme:e})=>e.popover};
`,nF=(0,p.default)(er.LayoutGrid).withConfig({displayName:"MobileNav__MobileNavWrapper",componentId:"sc-f0952d51-4"})`
  position: fixed;
  z-index: 2;
`,nz=(0,p.default)(er.LayoutSubgrid).withConfig({displayName:"MobileNav__ScrollableContent",componentId:"sc-f0952d51-5"})`
  overflow-y: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  inset: 0;
`,nG=(0,p.default)(er.LayoutSubgrid).withConfig({displayName:"MobileNav__Bg",componentId:"sc-f0952d51-6"})`
  grid-column: 1 / -1;
  grid-row: 1;
  background-color: ${({theme:e})=>e.paletteCssVars.bg400};
  z-index: -1;

  display: grid;

  &::after {
    content: '';
    grid-row: 1;
    grid-column: 1 / -1;
    background-size: ${({theme:e})=>e.paperTextureCssVars.size};
    background-image: ${({theme:e})=>e.paperTextureCssVars.img};
    mix-blend-mode: ${({theme:e})=>e.paperTextureCssVars.mixBlendMode};
    opacity: ${({theme:e})=>e.paperTextureCssVars.opacity};
    mask-image: linear-gradient(to bottom, rgba(0 0 0 / 1), rgba(0 0 0 / 0.64));
  }
`,nW=p.default.ul.withConfig({displayName:"MobileNav__NavList",componentId:"sc-f0952d51-7"})`
  grid-row: 1;
  padding-inline: 0.6rem;
  padding-top: 2rem;
  padding-bottom: 4rem;
`,nU=p.default.div.withConfig({displayName:"MobileNav__NavSublistTitle",componentId:"sc-f0952d51-8"})`
  padding-left: 0.4rem;
  margin-bottom: 0.25rem;
  font-family: ${({theme:e})=>e.fontFamily.MONO_ALT};
  font-size: ${({theme:e})=>e.fontSize.body.xs};
  font-weight: ${({theme:e})=>e.fontWeight.mono};
  color: ${({theme:e})=>e.paletteCssVars.fg1100};
  letter-spacing: 0.02rem;
  text-transform: uppercase;
`,nY=p.default.ul.withConfig({displayName:"MobileNav__NavSublist",componentId:"sc-f0952d51-9"})`
  border-bottom: 1px dashed ${({theme:e})=>e.paletteCssVars.grid700};
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
`,nX=p.default.li.withConfig({displayName:"MobileNav__NavListItem",componentId:"sc-f0952d51-10"})`
  color: ${({theme:e})=>e.paletteCssVars.fgLoud};
  border: 0.5px solid transparent;
`,nq=p.default.div.withConfig({displayName:"MobileNav__NavItemTitle",componentId:"sc-f0952d51-11"})`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,nQ=p.default.div.withConfig({displayName:"MobileNav__NavLink",componentId:"sc-f0952d51-12"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${({theme:e})=>e.fontSize.body.base};
  line-height: ${({theme:e})=>e.lineHeight.body.base};
  font-weight: ${({theme:e})=>e.fontWeight.NORMAL};
  padding: 0.75rem 0.4rem;
  padding-right: 0.7rem;
  border-bottom: none;

  &:hover {
    background-color: transparent;
  }

  & svg {
    color: ${({theme:e})=>e.paletteCssVars.fg1200};
    display: block;
  }
`,nJ=p.default.span.withConfig({displayName:"MobileNav__FgLoud",componentId:"sc-f0952d51-13"})`
  color: ${({theme:e})=>e.paletteCssVars.fgLoud};
`,n0={base:({alpha:e})=>({backgroundColor:e}),tapped:({backgroundColor:e})=>({backgroundColor:e})};function n1({item:e,onClose:t}){let n=(0,p.useTheme)(),o=e.to.includes("https://");return(0,d.jsx)(tx,{asChild:!0,children:(0,d.jsx)(nX,{as:u.motion.li,custom:{alpha:n.computed.fgA.fgA100,backgroundColor:n.computed.fgA.fgA500},initial:"base",transition:{type:"spring",duration:.2,bounce:0},variants:n0,whileTap:"tapped",children:(0,d.jsx)(tw,{asChild:!0,children:(0,d.jsxs)(nQ,{as:v.SiteLink,href:e.to,trackingLabel:y.TRACKING_LABELS.NavItemClicked,onClick:t,children:[(0,d.jsxs)(nq,{children:[e.icon,(0,d.jsx)(nJ,{children:e.title})]}),o?(0,d.jsx)(nI.IconArrowUpRight,{}):(0,d.jsx)(nD,{})]})})})})}function n2({onClose:e}){return(0,d.jsx)(nz,{children:(0,d.jsx)(tc,{asChild:!0,orientation:"vertical",children:(0,d.jsx)(er.LayoutGrid,{as:"nav",children:(0,d.jsx)(tm,{asChild:!0,children:(0,d.jsx)(nW,{...x.REVEAL_MARKER,animate:{scale:1,opacity:1,y:0,transition:{type:"spring",bounce:0,duration:.3}},as:u.motion.ul,initial:{scale:1.01,opacity:0,y:8},children:nO.map(t=>{if("dropdown"in t){let n=t.dropdown.lists.flatMap(e=>e.children);return(0,d.jsxs)(nX,{children:[(0,d.jsx)(nU,{children:t.title}),(0,d.jsx)(nY,{children:n.map(t=>(0,d.jsx)(n1,{item:t,onClose:e},t.title))})]},t.title)}return(0,d.jsx)(n1,{item:t,onClose:e},t.title)})})})})})})}function n5({onClose:e}){let{navHeight:t,gridlineHeight:n}=(0,en.useHeaderUI)(),o=(0,p.useTheme)();return(0,c.useEffect)(()=>{let t=t=>{"Escape"===t.key&&e()};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[e]),(0,d.jsx)(u.motion.div,{...x.REVEAL_MARKER,animate:{opacity:1},"data-theme":o.name,exit:{opacity:0},initial:{opacity:0},style:{position:"relative",zIndex:2},transition:{type:"spring",bounce:0,duration:.2},children:(0,d.jsx)(tK.MotionConfig,{transition:{type:"spring",bounce:0,duration:.3},children:(0,d.jsx)(nN,{removeScrollBar:!0,children:(0,d.jsxs)(nF,{style:{inset:`${t+n-2}px 0 0 0`},children:[(0,d.jsxs)(nG,{animate:{opacity:1,transition:{type:"spring",bounce:0,duration:.1}},as:u.motion.div,initial:{opacity:0},children:[(0,d.jsx)(eo.ContentMarginLine,{"data-minor":!0,style:{gridRow:1}}),(0,d.jsx)(eo.ContentMarginLine,{"data-minor":!0,"data-right":!0,style:{gridRow:1}})]}),(0,d.jsx)(er.LayoutSubgrid,{"data-pile":!0,children:(0,d.jsx)(n2,{onClose:e})})]})})})})}function n3(){let{isMobileOpen:e,setIsMobileOpen:t}=(0,en.useHeaderUI)(),n=(0,p.useTheme)(),o=(0,nj.default)(n.mediaQueryString.LARGE);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(nB,{animate:e?"open":"base","aria-expanded":e,"aria-label":e?"Close menu":"Open menu",as:u.motion.button,variants:{base:{},tapped:{scale:.9,"--y":"0rem","--r":"0deg"},open:{"--y":"0rem","--r":"40deg"}},whileTap:"tapped",onClick:()=>{let n;n={action:e?"close":"open",page_path:(0,nR.getCurrentPagePath)()},(0,n_.trackRudderstack)(nE.TRACKING_EVENTS.MobileNavToggled,n),t(!e)},children:[(0,d.jsx)(nK,{variants:{tapped:{scale:.92,opacity:.94}}}),(0,d.jsx)(nZ,{})]}),(0,ek.createPortal)((0,d.jsx)(nL.AnimatePresence,{children:e&&o?(0,d.jsx)(n5,{onClose:()=>t(!1)}):null}),document.body)]})}var n9=e.i(476959);function n6(e,t){let n=.5*window.innerWidth,o=e.left,r=e.left+.5*e.width,i=e.left+e.width,a=.5*t.width,l=t.width,s=.3*t.width,d=0;switch(!0){case r>n:d=i-l+1.4*s;break;case r<n:d=o-0-.25*s;break;default:d=r-a}return(0,n9.clamp)(16,window.innerWidth-16,d)}let n4={boundingBoxes:null,value:null,shouldAnimateSize:!1,reset:!0,relativeTransforms:{}};function n7(e,t){return"set"===t.type?{...e,...t.payload,reset:!1,shouldAnimateSize:!e.reset&&!!(e.boundingBoxes&&t.payload.boundingBoxes)}:{...e,value:null,shouldAnimateSize:!1,reset:!0}}let n8=(0,c.createContext)(null),oe=(0,c.createContext)(null);function ot({children:e}){let[t,n]=(0,c.useReducer)(n7,n4),o=(0,c.useCallback)((e,t)=>{if(!e)return void n({type:"clear"});let o=t?.current||document,r=`[id*='trigger-${e}']`,i=o.querySelector(r)??null,a=i?.getAttribute("aria-controls")??null,l=a?document.getElementById(a):null;l&&i?n({type:"set",payload:{value:e,boundingBoxes:{trigger:i.getBoundingClientRect(),content:l.getBoundingClientRect()},relativeTransforms:function(e,t){let n=(t||document).querySelectorAll("[id*='trigger']"),o={};for(let e of n){let t=e.id.split("trigger-").at(-1),n=e?.getAttribute("aria-controls")??null,r=n?document.getElementById(n):null;t&&r&&(o[t]={anchor:e,content:r})}let r=Object.entries(o).reduce((e,[t,{anchor:n,content:o}])=>(e[t]=n6(n.getBoundingClientRect(),o.getBoundingClientRect()),e),{}),i=r[e];return Object.entries(r).reduce((e,[t,n])=>(e[t]=n-i,e),{})}(e,t?.current??void 0)}}):n({type:"clear"})},[]);return(0,d.jsx)(oe.Provider,{value:o,children:(0,d.jsx)(n8.Provider,{value:t,children:e})})}function on(){let e=(0,c.useContext)(n8);if(null===e)throw Error("must use useNavDropdownContext() within NavDropdownProvider");return e}let oo=(0,c.memo)(function({cta:e,description:t,icon:n,illustration:o,title:r,to:i}){let a=!!on().value;return(0,d.jsx)(or,{children:(0,d.jsx)(op,{children:(0,d.jsxs)(oi,{as:v.SiteLink,href:i,trackingLabel:y.TRACKING_LABELS.NavItemClicked,children:[(0,d.jsx)(os,{children:(0,d.jsxs)(od,{children:[(0,d.jsx)(oc,{}),(0,d.jsx)(ou,{})]})}),(0,d.jsxs)(of,{children:[(0,d.jsxs)(oa,{children:[n," ",e&&(0,d.jsx)(ol,{children:e})]}),(0,d.jsx)(ox,{children:r}),(0,d.jsx)(oC,{children:t})]}),(0,d.jsx)(om,{children:o?.(!a)})]})})})}),or=p.default.div.withConfig({displayName:"NavMenuCallout__Wrapper",componentId:"sc-42c8d5b0-0"})`
  width: 100%;
  overflow: hidden;
`,oi=p.default.a.withConfig({displayName:"NavMenuCallout__StyledLink",componentId:"sc-42c8d5b0-1"})`
  display: block;
`,oa=p.default.div.withConfig({displayName:"NavMenuCallout__IconWrapper",componentId:"sc-42c8d5b0-2"})`
  display: flex;
  padding-bottom: 0.6rem;
  align-items: center;
  gap: 10px;
`,ol=p.default.span.withConfig({displayName:"NavMenuCallout__Cta",componentId:"sc-42c8d5b0-3"})`
  font-family: ${({theme:e})=>e.fontFamily.MONO_ALT};
  font-weight: ${({theme:e})=>e.fontWeight.mono};
  font-size: 11px;
  letter-spacing: ${({theme:e})=>e.letterSpacing.annotation};
  line-height: ${({theme:e})=>e.lineHeight.body.base};
  color: ${({theme:e})=>e.fontColor.LOUD};
  opacity: 0.5;
`,os=p.default.div.withConfig({displayName:"NavMenuCallout__FeatherEdgeMask",componentId:"sc-42c8d5b0-4"})`
  position: absolute;
  inset: 0;
  --fall-off: 80%;
  mask-image: linear-gradient(
    to top,
    transparent,
    white var(--fall-off),
    white calc(100% - var(--fall-off))
  );
  mask-composite: subtract;
`,od=p.default.div.withConfig({displayName:"NavMenuCallout__DotGridMask",componentId:"sc-42c8d5b0-5"})`
  position: absolute;
  inset: 0;
  mask-image: radial-gradient(white, white 1px, transparent 1px, transparent);
  mask-size: 6px 6px;
`,oc=p.default.div.withConfig({displayName:"NavMenuCallout__DotGridBg",componentId:"sc-42c8d5b0-6"})`
  position: absolute;
  inset: 0;
  background: ${({theme:e})=>e.paletteCssVars.fgA700};
`,ou=p.default.div.withConfig({displayName:"NavMenuCallout__PerlinNoise",componentId:"sc-42c8d5b0-7"})`
  position: absolute;
  inset: 0;
  background-image: url(/images/home-2025/textures/noise-rose-128x128.png);
  background-size: 512px 512px;

  animation: noise 8s linear infinite;
  animation-play-state: paused;
  opacity: 0;

  @keyframes noise {
    from {
      background-position: -512px -512px;
    }
    to {
      background-position: 0px 0px;
    }
  }
`,op=p.default.div.withConfig({displayName:"NavMenuCallout__Inner",componentId:"sc-42c8d5b0-8"})`
  display: flex;
  border-radius: 3px;
  background-color: ${({theme:e})=>e.backgroundColor};
  border: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
  width: 100%;
  transition: border
    ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`};

  &:hover {
    border: 1px solid ${({theme:e})=>e.borderColor.STRONG};

    a {
      background-color: transparent;
    }

    ${ou} {
      opacity: 0.25;
      animation-play-state: running;
    }
  }

  a {
    border-bottom: none;
    width: 100%;
    padding: 0.8rem;
    position: relative;
  }
`,of=p.default.div.withConfig({displayName:"NavMenuCallout__Content",componentId:"sc-42c8d5b0-9"})`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
`,om=p.default.div.withConfig({displayName:"NavMenuCallout__IllustrationWrapper",componentId:"sc-42c8d5b0-10"})`
  position: absolute;
  inset: 0;
  pointer-events: none;
`,oh=(0,p.default)(tI).withConfig({displayName:"NavMenuDropdown__NavigationMenuContent",componentId:"sc-2400fe1c-0"})`
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
`,og=p.default.a.withConfig({displayName:"NavMenuDropdown__NavItemLink",componentId:"sc-2400fe1c-1"})`
  position: relative;
  display: block;
  border: 0;
  background: none;
  border-radius: calc(1rem / 16);

  &:hover {
    background-color: ${({theme:e})=>e.paletteCssVars.fgA500};
  }
`,ov=p.default.div.withConfig({displayName:"NavMenuDropdown__NavItemLinkInner",componentId:"sc-2400fe1c-2"})`
  display: grid;
  gap: 0.05rem 0.68rem;
  grid-template-columns: max-content 1fr max-content;
  grid-template-areas:
    'icon title arrow'
    'icon description arrow';
  align-content: flex-start;
  align-items: center;
  width: 42ch;
  padding: 0.5rem;
  user-select: none;

  & svg {
    display: block;
    grid-area: icon;
    color: ${({theme:e})=>e.paletteCssVars.fg1200};
  }
`,ox=p.default.div.withConfig({displayName:"NavMenuDropdown__NavItemTitle",componentId:"sc-2400fe1c-3"})`
  grid-area: title;
  font-size: ${({theme:e})=>e.fontSize.body.base};
  font-weight: ${({theme:e})=>e.fontWeight.NORMAL};
  line-height: ${({theme:e})=>e.lineHeight.body.base};
  color: ${({theme:e})=>e.fontColor.LOUD};
`,oC=p.default.div.withConfig({displayName:"NavMenuDropdown__NavItemDescription",componentId:"sc-2400fe1c-4"})`
  grid-area: description;
  color: ${({theme:e})=>e.paletteCssVars.fgA1200};
  font-weight: ${({theme:e})=>e.fontWeight.body};
  font-size: ${({theme:e})=>e.fontSize.body.s};
  line-height: ${({theme:e})=>e.lineHeight.body.s};
`,oy=p.default.ul.withConfig({displayName:"NavMenuDropdown__List",componentId:"sc-2400fe1c-5"})`
  list-style: none;
`,ob=p.default.div.withConfig({displayName:"NavMenuDropdown__ExternalArrow",componentId:"sc-2400fe1c-6"})`
  grid-area: arrow;
  display: grid;
  place-content: center;
  align-self: center;
  margin-left: auto;
  width: 2rem;
  aspect-ratio: 1 / 1;
  border-radius: 99px;
  color: ${({theme:e})=>e.paletteCssVars.fg1200};

  & > * {
    grid-area: 1 / -1;
  }
`;function ow(){return(0,d.jsxs)(ob,{style:{overflow:"clip"},children:[(0,d.jsx)(u.motion.div,{variants:{hovered:{x:20,y:-20,scale:.8,opacity:0,filter:"blur(2px)"},base:{x:0,y:0,scale:1,opacity:1,filter:"blur(0px)"}},children:(0,d.jsx)(nI.IconArrowUpRight,{style:{display:"block"}})}),(0,d.jsx)(u.motion.div,{...x.REVEAL_MARKER,variants:{hovered:{x:0,y:0,scale:1,opacity:1,filter:"blur(0px)"},base:{x:-20,y:20,scale:.8,opacity:0,filter:"blur(2px)"}},children:(0,d.jsx)(nI.IconArrowUpRight,{style:{display:"block"}})})]})}let oN=p.default.div.withConfig({displayName:"NavMenuDropdown__IconWrapper",componentId:"sc-2400fe1c-7"})`
  grid-area: icon;
  display: grid;
  place-content: center;
  align-self: center;
  margin-left: auto;
  width: 16px;
  aspect-ratio: 1 / 1;
  padding: 0 14px 0 18px;
`;function oL({item:e}){let t=e.to.includes("https:");return(0,d.jsx)(tK.MotionConfig,{transition:{type:"spring",duration:.4,bounce:.32},children:(0,d.jsx)(tw,{asChild:!0,children:(0,d.jsx)(og,{as:v.SiteLink,href:e.to,trackingLabel:y.TRACKING_LABELS.NavItemClicked,children:(0,d.jsxs)(ov,{as:u.motion.div,initial:"base",whileHover:"hovered",children:[(0,d.jsx)(oN,{children:e.icon}),(0,d.jsx)(ox,{children:e.title}),(0,d.jsx)(oC,{children:e.description}),t?(0,d.jsx)(ow,{}):null]})})})})}function oj({children:e}){let t=(0,ec.useIsHydrated)(),n=on(),o=(0,c.useRef)(null),r=o.current?.id.split("-content-").at(-1),i=r?n.relativeTransforms[r]:0,a=n.value&&o.current?.id.includes(n.value),l=n.shouldAnimateSize?{}:{transition:{duration:0}};return(0,d.jsx)(oh,{ref:o,forceMount:!0,style:{opacity:+!!t,width:t?"auto":0,height:t?"auto":0,pointerEvents:a?"auto":"none"},children:(0,d.jsx)(u.motion.div,{animate:{x:.8*i},...l,children:(0,d.jsx)(oI,{animate:a?"visible":"hidden",as:u.motion.div,custom:{isAnimatingSize:n.shouldAnimateSize},variants:{visible:{opacity:1},hidden:{opacity:0}},children:e})})})}let oI=p.default.div.withConfig({displayName:"NavMenuDropdown__NavMenuInner",componentId:"sc-2400fe1c-8"})`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
`,o_=p.default.div.withConfig({displayName:"NavMenuDropdown__NavMenuDropdownList",componentId:"sc-2400fe1c-9"})`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e||1}, 1fr);
`,oE=p.default.div.withConfig({displayName:"NavMenuDropdown__ListTitle",componentId:"sc-2400fe1c-10"})`
  padding: 10px 0 6px 16px;
  font-family: ${({theme:e})=>e.fontFamily.MONO_ALT};
  font-weight: ${({theme:e})=>e.fontWeight.mono};
  font-size: 11px;
  letter-spacing: ${({theme:e})=>e.letterSpacing.annotation};
  line-height: ${({theme:e})=>e.lineHeight.body.base};
  color: ${({theme:e})=>e.fontColor.LOUD};
  opacity: 0.5;
`,oR=(0,c.memo)(function({item:e}){let t=e.dropdown.callout?(0,d.jsx)(oo,{...e.dropdown.callout}):null;return(0,d.jsxs)(oj,{children:[t&&e.dropdown.callout?.position==="top"&&t,(0,d.jsx)(o_,{$cols:e.dropdown.lists.length,children:e.dropdown.lists.map(e=>(0,d.jsxs)("div",{children:[(0,d.jsx)(oE,{children:e.title}),(0,d.jsx)(oy,{children:e.children.map(e=>(0,d.jsx)("li",{children:(0,d.jsx)(oL,{item:e})},e.title))})]},e.title))}),t&&e.dropdown.callout?.position==="bottom"&&t]})}),oM=(0,p.default)(tx).withConfig({displayName:"NavMenuItem__StyledNavItem",componentId:"sc-7f05634c-0"})`
  position: relative;
  color: ${({theme:e})=>e.fontColor.LOUD};
  font-weight: ${({theme:e})=>e.fontWeight.NORMAL};
  line-height: 1;

  & > svg {
    color: ${({theme:e})=>e.paletteCssVars.fg1200};
  }

  & > * {
    vertical-align: middle;
  }
`,oS=p.default.a.withConfig({displayName:"NavMenuItem__NavItemLink",componentId:"sc-7f05634c-1"})`
  position: relative;
  border: 0;
  background: none;
  color: ${({theme:e})=>e.paletteCssVars.fgLoud};
  font-size: ${({theme:e})=>e.fontSize.body.base};
  line-height: 1;
  font-weight: ${({theme:e})=>e.fontWeight.NORMAL};
  display: flex;
  align-items: center;
  white-space: nowrap;
  border-radius: calc(1rem / 16);
  padding: 0.6rem 0.85rem;
  transition: none;
  font-family: ${({theme:e})=>e.fontFamily.SANS};
  cursor: pointer;

  &[data-dropdown] {
    padding-right: 0.6rem;
  }

  &:hover,
  &:focus-visible {
    background-color: ${({theme:e})=>e.paletteCssVars.fgA500};
  }

  & > svg {
    margin-right: 0.5rem;
    color: ${({theme:e})=>e.paletteCssVars.fg1200};
  }
`,ok=p.default.div.withConfig({displayName:"NavMenuItem__ChevronContainer",componentId:"sc-7f05634c-2"})`
  margin-left: 0.35rem;
  color: ${({theme:e})=>e.paletteCssVars.fg1200};
`;function oT({item:e}){let t=(0,c.useRef)(null),n=on(),o=n.value&&t.current?.id.includes(n.value);switch(!0){case"dropdown"in e:return(0,d.jsxs)(oM,{children:[(0,d.jsx)(ty,{asChild:!0,children:(0,d.jsxs)(oS,{ref:t,as:u.motion.button,"data-dropdown":!0,whileTap:{scale:.96},onPointerEnter:t=>{var n;"mouse"===t.pointerType&&(n=e.title,(0,n_.trackRudderstack)(nE.TRACKING_EVENTS.NavItemHovered,{navItem:n}))},children:[e.icon," ",e.title,(0,d.jsx)(ok,{animate:o?"open":"closed",as:u.motion.div,style:{display:"block"},variants:{open:{rotate:-180},closed:{rotate:0}},children:(0,d.jsx)(nS.ChevronDown,{})})]})}),(0,d.jsx)(oR,{item:e})]});case"to"in e:return(0,d.jsx)(oM,{children:(0,d.jsx)(tw,{asChild:!0,children:(0,d.jsxs)(oS,{as:v.SiteLink,href:e.to,trackingLabel:y.TRACKING_LABELS.NavItemClicked,children:[e.icon," ",e.title]})})});default:return null}}let oA=(0,p.default)(tS).withConfig({displayName:"NavMenuViewport__NavigationMenuViewport",componentId:"sc-e35b0372-0"})`
  position: absolute;
  inset: 0;
`,o$=p.default.div.withConfig({displayName:"NavMenuViewport__NavigationMenuViewportPosition",componentId:"sc-e35b0372-1"})`
  will-change: transform, height, width;
  position: absolute;
  border-radius: calc(5rem / 16);
  overflow: clip;

  &::before {
    pointer-events: none;
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
  }

  /* Object-based flyout styles (Next.js shared theme) */
  ${({theme:e})=>{var t;return Array.isArray(t=e.nav.flyout)?"":t&&"string"==typeof t.backgroundColor?`
      background-color: ${t.backgroundColor};
      border: 1px solid ${t.borderColor};
      box-shadow: ${t.boxShadow};
    `:""}}

  /* CSS template flyout styles (Gatsby theme adapter override) */
  ${({theme:e})=>{let t=e.nav.flyout;return Array.isArray(t)?t:""}}
`,oV=p.default.div.withConfig({displayName:"NavMenuViewport__ViewportPosition",componentId:"sc-e35b0372-2"})`
  position: absolute;
  width: 100%;
  top: calc(100% - 0.375rem);
  left: 0;
  z-index: 10;

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    display: none;
  }
`;function oP({children:e}){let t,n=on(),o=(t=on()).boundingBoxes?n6(t.boundingBoxes.trigger,t.boundingBoxes.content):null,r=o?`translateX(${o}px)`:"none",i=n.shouldAnimateSize?{}:{transition:{duration:0}};return(0,d.jsx)(oV,{animate:n.value?"visible":"hidden",as:u.motion.div,initial:"hidden",variants:{visible:{opacity:1,transform:"translateY(0rem) "},hidden:{opacity:0,transform:"translateY(-0.5rem)"}},children:(0,d.jsx)(o$,{animate:{transform:r,height:n.boundingBoxes?.content.height||0,width:n.boundingBoxes?.content.width||0},as:u.motion.div,style:{pointerEvents:n.value?"auto":"none"},...i,children:e})})}function oH(){return(0,d.jsx)(oP,{children:(0,d.jsx)(oA,{forceMount:!0})})}let oO=p.default.div.withConfig({displayName:"Nav__NavigationRootEl",componentId:"sc-a3199122-0"})`
  position: relative;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr max-content 1fr;
  padding: 0.75rem 0;

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    padding: 0.5rem 0;
  }
`,oD=(0,p.default)(tY.HexLogo).withConfig({displayName:"Nav__Hex",componentId:"sc-a3199122-1"})`
  display: block;
  will-change: transform;
`,oB=(0,p.default)(tm).withConfig({displayName:"Nav__NavigationList",componentId:"sc-a3199122-2"})`
  gap: 0;
  list-style: none;
`,oZ=(0,p.default)(oB).withConfig({displayName:"Nav__LeftNav",componentId:"sc-a3199122-3"})`
  grid-column: 1 / span 1;
  display: flex;
  justify-content: flex-end;
  padding-right: 2.25rem;

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    display: none;
    visibility: hidden;
  }
`,oK=(0,p.default)(oB).withConfig({displayName:"Nav__RightNav",componentId:"sc-a3199122-4"})`
  grid-column: 3 / span 1;
  display: flex;
  justify-content: flex-start;
  padding-left: 1.75rem;
  align-items: center;

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    display: none;
    visibility: hidden;
  }
`,oF=p.default.a.withConfig({displayName:"Nav__LogInLink",componentId:"sc-a3199122-5"})`
  position: relative;
  padding: 0.6rem 0.75rem;
  border-bottom: 0;
  font-size: ${({theme:e})=>e.fontSize.body.base};
  line-height: 1;
  border-radius: calc(1rem / 16);
  font-weight: ${({theme:e})=>e.fontWeight.NORMAL};
  color: ${({theme:e})=>e.paletteCssVars.fg1200};
  white-space: nowrap;
  transition: background-color 0.2s ease;

  &:hover,
  &:focus-visible {
    color: ${({theme:e})=>e.paletteCssVars.fg1200};
    background-color: ${({theme:e})=>e.paletteCssVars.fgA500};
  }
`,oz=(0,p.default)(tF.Button).withConfig({displayName:"Nav__SignUpButton",componentId:"sc-a3199122-6"})`
  margin-left: 0.75rem;
  font-size: ${({theme:e})=>e.fontSize.body.base};
  line-height: 1;
`,oG=(0,p.default)(er.LayoutSubgrid).withConfig({displayName:"Nav__NavWrapper",componentId:"sc-a3199122-7"})`
  position: relative;
  isolation: isolate;

  &::after {
    grid-row: 1;
    content: '';
    height: 1px;
    background: ${({theme:e})=>(0,eo.gridColorSelector)(e,"major")};
    grid-column: 2 / -2;
  }
`,oW=["tl","tr","br","bl"],oU=p.default.div.withConfig({displayName:"Nav__NavBorderBottom",componentId:"sc-a3199122-8"})`
  align-self: flex-end;
  background-color: ${({theme:e})=>(0,eo.gridColorSelector)(e,"minor")};
  height: 1px;
  grid-column: 1;

  &[data-position='right'] {
    grid-column: -1;
  }
`,oY=(0,p.default)(er.LayoutSubgrid).withConfig({displayName:"Nav__Background",componentId:"sc-a3199122-9"})`
  position: relative;
  align-self: stretch;
  z-index: -1;

  &::after,
  &::before {
    content: '';
    border-top: 1px solid ${({theme:e})=>(0,eo.gridColorSelector)(e,"minor")};
    justify-self: stretch;
    grid-row: 1;
  }

  &::before {
    z-index: 1;
    grid-column: 1;
    border-right: 1px solid ${({theme:e})=>(0,eo.gridColorSelector)(e,"major")};
  }

  &::after {
    z-index: 1;
    grid-column: -1;
    border-left: 1px solid ${({theme:e})=>(0,eo.gridColorSelector)(e,"major")};
  }
`,oX=p.default.div.withConfig({displayName:"Nav__BackgroundInner",componentId:"sc-a3199122-10"})`
  --stop-1: rgba(0 0 0 / 0.48);
  --stop-2: rgba(0 0 0 / 0);

  position: absolute;
  inset: 0 0 auto 0;
  height: 100%;
  grid-column: 1 / -1;

  mask-image: linear-gradient(to bottom, var(--stop-1) 30%, var(--stop-2));

  &::after,
  &::before {
    content: '';
    position: absolute;
    inset: 0;
  }

  &::before {
    background-color: ${({theme:e})=>e.paletteCssVars.fg100};
  }

  &::after {
    background-image: ${({theme:e})=>e.paperTextureCssVars.img};
    background-repeat: repeat;
    background-size: ${({theme:e})=>e.paperTextureCssVars.size};
    mix-blend-mode: ${({theme:e})=>e.paperTextureCssVars.mixBlendMode};
    background-position: 13px 27px;
    opacity: ${({theme:e})=>e.paperTextureCssVars.opacity};
  }
`,oq=p.default.div.withConfig({displayName:"Nav__NavRootBorder",componentId:"sc-a3199122-11"})`
  position: absolute;
  inset: auto 0 0 0;
  height: 1px;
  background-color: ${({theme:e})=>(0,eo.gridColorSelector)(e,"major")};
`,oQ=p.default.div.withConfig({displayName:"Nav__NavShadow",componentId:"sc-a3199122-12"})`
  position: relative;
  grid-column: 1 / -1;
  grid-row: 1;
  height: 100%;
  width: 100%;
  pointer-events: none;
  z-index: 3;
  overflow-x: clip;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    box-shadow: 0px 2px 8px -2px hsl(0 0% 0% / 0.56);
  }

  [data-theme='pink'] &::after {
    box-shadow: 0px 3px 12px -3px rgba(100 63 63 / 0.32);
  }

  [data-theme='light'] &::after {
    box-shadow: 0px 3px 12px -3px rgba(100 63 63 / 0.32);
  }
`;function oJ({children:e,viewport:t}){let{tickerHeight:n,smoothSquishProgress:o}=(0,en.useHeaderUI)(),{navRef:r}=(0,en.useHeaderUIRefs)(),i=(0,es.useTransform)(o,[0,1],[n,0]),a=(0,es.useTransform)(o,[0,1],["1.25rem","0rem"]),l=(0,es.useTransform)(o,()=>`translateY(calc(${a.get()} + ${i.get()}px))`),s=(0,es.useTransform)(o,[0,1],["rgba(0 0 0 / 0.48)","rgba(0 0 0 / 1)"]),c=(0,es.useTransform)(o,[0,1],["rgba(0 0 0 / 0.0)","rgba(0 0 0 / 1)"]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(oG,{as:u.motion.div,style:{y:i},children:[(0,d.jsx)(oY,{"data-pile":!0,children:(0,d.jsx)(oX,{as:u.motion.div,style:{"--stop-1":s,"--stop-2":c}})}),(0,d.jsxs)(er.LayoutSubgrid,{as:u.motion.div,"data-pile":!0,style:{y:a},children:[(0,d.jsx)(oQ,{as:u.motion.div,style:{opacity:o}}),(0,d.jsxs)(er.LayoutSubgrid,{"data-pile":!0,children:[(0,d.jsx)(oU,{as:u.motion.div,style:{opacity:o}}),(0,d.jsxs)(oO,{ref:r,children:[e,(0,d.jsx)(oq,{as:u.motion.div,style:{scaleX:o,opacity:o}})]}),(0,d.jsx)(oU,{as:u.motion.div,"data-position":"right",style:{opacity:o}})]})]}),oW.map(e=>(0,d.jsx)(tU,{position:e},e))]}),(0,d.jsx)(u.motion.div,{style:{transform:l,gridColumn:"1 / -1"},children:t})]})}let o0=p.default.div.withConfig({displayName:"Nav__HomeNavLinkWrapper",componentId:"sc-a3199122-13"})`
  grid-column: 2 / span 1;
  width: 4rem;
  border: none;

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    grid-column: 1 / span 1;
    margin-left: 0.9rem;
    width: 4rem;
  }
`;function o1({children:e}){let t=function(){let e=(0,c.useContext)(oe);if(null===e)throw Error("must use useNavDropdownDispatchContext() within NavDropdownProvider");return e}(),n=(0,c.useRef)(null);return(0,d.jsx)(tc,{asChild:!0,delayDuration:0,onValueChange:e=>t(e,n),children:(0,d.jsx)(er.LayoutSubgrid,{ref:n,as:"nav",children:e})})}function o2({children:e}){return(0,d.jsx)(tK.MotionConfig,{transition:{type:"spring",duration:.32,bounce:0},children:(0,d.jsx)(ot,{children:(0,d.jsx)(o1,{children:(0,d.jsx)(oJ,{viewport:(0,d.jsx)(oH,{}),children:e})})})})}function o5({LogoWrapper:e,...t}){let n=(0,d.jsx)(tw,{asChild:!0,children:(0,d.jsx)(o0,{as:v.SiteLink,href:"/",trackingLabel:y.TRACKING_LABELS.NavItemClicked,...t,children:(0,d.jsx)(oD,{})})});return e?(0,d.jsx)(e,{children:n}):n}function o3({LogoWrapper:e}){return(0,d.jsxs)(o2,{children:[(0,d.jsx)(oZ,{children:nP.map(e=>(0,d.jsx)(oT,{item:e},e.title))}),(0,d.jsx)(o5,{LogoWrapper:e}),(0,d.jsxs)(oK,{children:[nH.map(e=>(0,d.jsx)(oT,{item:e},e.title)),(0,d.jsx)(tx,{children:(0,d.jsx)(tw,{asChild:!0,children:(0,d.jsx)(oF,{as:v.SiteLink,href:C.LOGIN_LINK,trackingLabel:y.TRACKING_LABELS.NavItemClicked,children:"Log In"})})}),(0,d.jsx)(tx,{children:(0,d.jsx)(oz,{href:`${C.SIGNUP_LINK}?source=nav`,size:"small",stylez:"loud",text:"Get started",trackingLabel:y.TRACKING_LABELS.NavItemClicked})})]}),(0,d.jsx)(n3,{})]})}let o9=p.default.div.withConfig({displayName:"ClientNav__NavPlaceholder",componentId:"sc-475721c-0"})`
  min-height: 3.75rem;
  width: 100%;
`;function o6(){return()=>{}}function o4(){return(0,c.useSyncExternalStore)(o6,()=>!0,()=>!1)?(0,d.jsx)(o3,{}):(0,d.jsx)(o9,{"aria-hidden":"true"})}function o7({tickerItems:e}){return(0,d.jsx)(et.Header,{headerExtra:e&&e.length>0?(0,d.jsx)(eE,{items:e}):void 0,children:(0,d.jsx)(o4,{})})}let o8=({children:e,header:t,footer:n,tickerItems:o,theme:r="dark",className:i})=>(0,d.jsxs)(eM.ThemeProvider,{forcedTheme:r,children:[(0,d.jsx)(eR.GlobalStyles,{}),(0,d.jsx)(eS.UtilityCss,{}),(0,d.jsx)(en.HeaderUIProvider,{initialTickerHeight:28*!!o?.length,children:(0,d.jsx)(el,{FooterComponent:ee,className:i,footer:n,header:t??(0,d.jsx)(o7,{tickerItems:o}),theme:r,children:e})})]});o8.displayName="PageWrapper",e.s(["PageWrapper",0,o8],584068)},183836,e=>{e.v({button:"OptOutOfTrackingLink-module__ax0AOW__button",buttonPending:"OptOutOfTrackingLink-module__ax0AOW__buttonPending"})},102898,e=>{e.v({emojiGlyph:"EmojiGlyph-module__AX5Y3a__emojiGlyph"})},279897,e=>{"use strict";var t=e.i(843476);e.s(["IconArrowUpRight",0,function({className:e,style:n}){return(0,t.jsx)("svg",{className:e,fill:"currentColor",height:"17",style:n,viewBox:"0 0 17 17",width:"17",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{clipRule:"evenodd",d:"M12.1479 9.49996C12.1479 9.7761 12.3717 9.99996 12.6479 9.99996C12.924 9.99996 13.1479 9.7761 13.1479 9.49995L13.1478 3.49991L7.14785 3.49997C6.87171 3.49998 6.64785 3.72384 6.64786 3.99998C6.64786 4.27612 6.87172 4.49998 7.14786 4.49997L11.4409 4.49993L3.2944 12.6464C3.09913 12.8417 3.09913 13.1583 3.2944 13.3535C3.48966 13.5488 3.80624 13.5488 4.0015 13.3535L12.1478 5.20719L12.1479 9.49996Z",fillRule:"evenodd"})})},"IconBlog",0,function({className:e}){return(0,t.jsxs)("svg",{className:e,fill:"none",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("path",{d:"M7.19098 15.5H0.809017L4 9.11803L7.19098 15.5Z",stroke:"currentColor"}),(0,t.jsx)("path",{d:"M15.191 15.5H8.80902L12 9.11803L15.191 15.5Z",stroke:"currentColor"}),(0,t.jsx)("path",{d:"M4.80902 0.500001L11.191 0.5L8 6.88197L4.80902 0.500001Z",stroke:"currentColor"})]})},"IconChangelog",0,function({className:e}){return(0,t.jsxs)("svg",{className:e,fill:"none",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("path",{d:"M2.14301 4.353L1.79001 4.707L2.49701 5.414L2.85101 5.061L2.14301 4.353ZM4.49701 2.707L4.85101 2.353L4.49701 2L4.14301 2.353L4.49701 2.707ZM6.14301 5.061L6.49701 5.414L7.20401 4.707L6.85101 4.353L6.14301 5.061ZM2.85101 5.061L4.85101 3.061L4.14301 2.353L2.14301 4.353L2.85101 5.061ZM4.14301 3.061L6.14301 5.061L6.85101 4.353L4.85101 2.353L4.14301 3.061ZM3.99701 2.707V14H4.99701V2.707H3.99701Z",fill:"currentColor"}),(0,t.jsx)("path",{d:"M13.847 11.647L14.2 11.293L13.493 10.586L13.139 10.939L13.847 11.647ZM11.493 13.293L11.139 13.647L11.493 14L11.847 13.647L11.493 13.293ZM9.84701 10.939L9.49301 10.586L8.78601 11.293L9.13901 11.647L9.84701 10.939ZM13.139 10.939L11.139 12.939L11.847 13.647L13.847 11.647L13.139 10.939ZM11.847 12.939L9.84701 10.939L9.13901 11.647L11.139 13.647L11.847 12.939ZM11.993 13.293L11.993 2L10.993 2L10.993 13.293L11.993 13.293Z",fill:"currentColor"})]})},"IconCustomers",0,function({className:e}){return(0,t.jsxs)("svg",{className:e,fill:"none",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("path",{clipRule:"evenodd",d:"M8.00045 1.15174L2 4.58034V11.4197L8.00045 14.8483L14.0005 11.4197V4.58032L8.00045 1.15174ZM15.0005 4L8.00047 0L1 4V12L8.00047 16L15.0005 12V4Z",fill:"currentColor",fillRule:"evenodd"}),(0,t.jsx)("path",{clipRule:"evenodd",d:"M8.00035 5.11802L5 6.61806V9.38194L8.00035 10.882L11.0005 9.38196V6.61804L8.00035 5.11802ZM12.0005 6L8.00037 4L4 6V10L8.00037 12L12.0005 10V6Z",fill:"currentColor",fillRule:"evenodd"})]})},"IconDocs",0,function({className:e}){return(0,t.jsx)("svg",{className:e,fill:"none",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M10.5 0.5L10.777 0.084L10.651 0H10.5V0.5ZM13.5 2.5H14V2.232L13.777 2.084L13.5 2.5ZM12.5 12H5.5V13H12.5V12ZM5 11.5V1.5H4V11.5H5ZM5.5 1H10.5V0H5.5V1ZM13 2.5V11.5H14V2.5H13ZM10.223 0.916L13.223 2.916L13.777 2.084L10.777 0.084L10.223 0.916ZM5.5 12C5.36739 12 5.24021 11.9473 5.14645 11.8536C5.05268 11.7598 5 11.6326 5 11.5H4C4 11.8978 4.15804 12.2794 4.43934 12.5607C4.72064 12.842 5.10218 13 5.5 13V12ZM12.5 13C12.8978 13 13.2794 12.842 13.5607 12.5607C13.842 12.2794 14 11.8978 14 11.5H13C13 11.6326 12.9473 11.7598 12.8536 11.8536C12.7598 11.9473 12.6326 12 12.5 12V13ZM5 1.5C5 1.36739 5.05268 1.24021 5.14645 1.14645C5.24021 1.05268 5.36739 1 5.5 1V0C5.10218 0 4.72064 0.158035 4.43934 0.43934C4.15804 0.720644 4 1.10218 4 1.5H5ZM2 3.5V13.5H3V3.5H2ZM3.5 15H10.5V14H3.5V15ZM3.5 3H4.5V2H3.5V3ZM12 13.5V12.5H11V13.5H12ZM10.5 15C10.8978 15 11.2794 14.842 11.5607 14.5607C11.842 14.2794 12 13.8978 12 13.5H11C11 13.6326 10.9473 13.7598 10.8536 13.8536C10.7598 13.9473 10.6326 14 10.5 14V15ZM2 13.5C2 13.8978 2.15804 14.2794 2.43934 14.5607C2.72064 14.842 3.10218 15 3.5 15V14C3.36739 14 3.24021 13.9473 3.14645 13.8536C3.05268 13.7598 3 13.6326 3 13.5H2ZM3 3.5C3 3.36739 3.05268 3.24021 3.14645 3.14645C3.24021 3.05268 3.36739 3 3.5 3V2C3.10218 2 2.72064 2.15804 2.43934 2.43934C2.15804 2.72064 2 3.10218 2 3.5H3Z",fill:"currentColor"})})},"IconDownload",0,function({className:e}){return(0,t.jsx)("svg",{className:e,fill:"none",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{clipRule:"evenodd",d:"M7.5 2.50006L7.5 9.07454L5.10599 6.64884C4.91202 6.4523 4.59544 6.45022 4.3989 6.64419C4.20236 6.83816 4.20028 7.15474 4.39425 7.35128L7.64413 10.6442C7.73808 10.7394 7.86625 10.793 8 10.793C8.13375 10.793 8.26192 10.7394 8.35587 10.6442L11.6059 7.35129C11.7998 7.15475 11.7978 6.83817 11.6012 6.6442C11.4047 6.45022 11.0881 6.4523 10.8941 6.64883L8.5 9.07458L8.5 2.50006C8.5 2.22392 8.27614 2.00006 8 2.00006C7.72386 2.00006 7.5 2.22392 7.5 2.50006ZM3 8.5C3 8.22386 2.77614 8 2.5 8C2.22386 8 2 8.22386 2 8.5V13.5C2 13.7761 2.22386 14 2.5 14H13.5C13.7761 14 14 13.7761 14 13.5V8.5C14 8.22386 13.7761 8 13.5 8C13.2239 8 13 8.22386 13 8.5V13H3V8.5Z",fill:"currentColor",fillRule:"evenodd"})})},"IconExploratoryAnalysis",0,function({className:e}){return(0,t.jsx)("svg",{className:e,fill:"none",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{clipRule:"evenodd",d:"M7.06409 1.50986C6.33469 1.50986 5.61244 1.65352 4.93857 1.93265C4.26471 2.21178 3.65241 2.6209 3.13665 3.13665C2.6209 3.65241 2.21178 4.26471 1.93265 4.93857C1.65352 5.61244 1.50986 6.33469 1.50986 7.06409C1.50986 7.79348 1.65352 8.51573 1.93265 9.1896C2.21178 9.86347 2.6209 10.4758 3.13665 10.9915C3.65241 11.5073 4.26471 11.9164 4.93857 12.1955C5.61244 12.4746 6.33469 12.6183 7.06409 12.6183C8.53716 12.6183 9.9499 12.0331 10.9915 10.9915C12.0331 9.9499 12.6183 8.53716 12.6183 7.06409C12.6183 5.59101 12.0331 4.17827 10.9915 3.13665C9.9499 2.09503 8.53716 1.50986 7.06409 1.50986ZM4.55212 0.999661C5.34851 0.669785 6.20208 0.5 7.06409 0.5C8.80499 0.5 10.4746 1.19157 11.7056 2.42258C12.9366 3.65358 13.6282 5.32318 13.6282 7.06409C13.6282 8.63589 13.0644 10.1496 12.0489 11.3348L15.5 14.7859L14.7859 15.5L11.3348 12.0489C10.1496 13.0644 8.63589 13.6282 7.06409 13.6282C6.20208 13.6282 5.34851 13.4584 4.55212 13.1285C3.75573 12.7986 3.03211 12.3151 2.42258 11.7056C1.81304 11.0961 1.32954 10.3724 0.999661 9.57605C0.669785 8.77966 0.5 7.92609 0.5 7.06409C0.5 6.20208 0.669785 5.34851 0.999661 4.55212C1.32954 3.75573 1.81304 3.03211 2.42258 2.42258C3.03211 1.81304 3.75573 1.32954 4.55212 0.999661Z",fill:"currentColor",fillRule:"evenodd"})})},"IconIntegrations",0,function({className:e}){return(0,t.jsx)("svg",{className:e,fill:"none",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{clipRule:"evenodd",d:"M9 9V6H1V2C1 1.44772 1.44772 1 2 1H14C14.5523 1 15 1.44772 15 2V9H9ZM10 5H2V2H14V8H10V5ZM8 7V10H15V14C15 14.5523 14.5523 15 14 15H2C1.44772 15 1 14.5523 1 14V7H8ZM7 11H14V14H2V8H7V11Z",fill:"currentColor",fillRule:"evenodd"})})},"IconNotebooks",0,function({className:e}){return(0,t.jsxs)("svg",{className:e,fill:"none",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("rect",{height:"4",rx:"0.5",stroke:"currentColor",width:"13",x:"1.5",y:"1.5"}),(0,t.jsx)("rect",{height:"2",rx:"0.5",stroke:"currentColor",width:"13",x:"1.5",y:"7.5"}),(0,t.jsx)("rect",{height:"3",rx:"0.5",stroke:"currentColor",width:"13",x:"1.5",y:"11.5"})]})},"IconPartners",0,function({className:e}){return(0,t.jsxs)("svg",{className:e,fill:"none",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("path",{clipRule:"evenodd",d:"M13.834 8.44149L1.93319 14.883L1.93319 2L13.834 8.44149ZM11.7332 8.44149L2.93319 3.67835L2.93319 13.2046L11.7332 8.44149Z",fill:"currentColor",fillRule:"evenodd"}),(0,t.jsx)("path",{clipRule:"evenodd",d:"M2.16553 8.4415L14.0663 2.00001L14.0663 14.883L2.16553 8.4415ZM4.26632 8.4415L13.0663 13.2046L13.0663 3.67836L4.26632 8.4415Z",fill:"currentColor",fillOpacity:"0.85",fillRule:"evenodd"})]})},"IconPin",0,function({className:e}){return(0,t.jsxs)("svg",{className:e,fill:"none",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("path",{d:"M12.5 6.15789C12.5 7.43816 11.8481 8.9969 10.8791 10.554C10.0271 11.923 8.96465 13.2362 8 14.2737C7.03536 13.2362 5.97288 11.923 5.12093 10.554C4.15185 8.9969 3.5 7.43816 3.5 6.15789C3.5 3.57064 5.52926 1.5 8 1.5C10.4707 1.5 12.5 3.57064 12.5 6.15789Z",stroke:"currentColor"}),(0,t.jsx)("ellipse",{cx:"8.00004",cy:"6.1579",fill:"currentColor",rx:"1.66667",ry:"1.7193"})]})},"IconTemplates",0,function({className:e}){return(0,t.jsxs)("svg",{className:e,fill:"none",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("rect",{height:"7",rx:"0.5",stroke:"currentColor",width:"7",x:"1.5",y:"1.5"}),(0,t.jsx)("rect",{height:"7",rx:"0.5",stroke:"currentColor",width:"4",x:"10.5",y:"1.5"}),(0,t.jsx)("rect",{height:"4",rx:"0.5",stroke:"currentColor",width:"4",x:"1.5",y:"10.5"}),(0,t.jsx)("rect",{height:"4",rx:"0.5",stroke:"currentColor",width:"7",x:"7.5",y:"10.5"})]})},"IconThreads",0,function({className:e}){return(0,t.jsx)("svg",{className:e,fill:"none",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M12 2C13.6569 2 15 3.34315 15 5V7C15 8.60511 13.7394 9.91579 12.1543 9.99609L12 10V11C12 12.6051 10.7394 13.9158 9.1543 13.9961L9 14H4L3.8457 13.9961C2.26055 13.9158 1 12.6051 1 11V9C1 7.34315 2.34315 6 4 6V5C4 3.34315 5.34315 2 7 2H12ZM4 7C2.89543 7 2 7.89543 2 9V11C2 12.1046 2.89543 13 4 13H9C10.1046 13 11 12.1046 11 11V10H7L6.8457 9.99609C5.26055 9.91579 4 8.60511 4 7ZM5 7C5 8.10457 5.89543 9 7 9H11C11 7.89543 10.1046 7 9 7H5ZM7 3C5.89543 3 5 3.89543 5 5V6H9C10.6569 6 12 7.34315 12 9C13.1046 9 14 8.10457 14 7V5C14 3.89543 13.1046 3 12 3H7Z",fill:"currentColor"})})}])},344273,e=>{"use strict";var t=e.i(843476),n=e.i(271645),o=e.i(476959),r=e.i(583662),i=e.i(958866),a=e.i(676662),l=e.i(193594),s=e.i(997053),d=e.i(718750);e.i(409027);var c=e.i(861949),u=e.i(529376),p=e.i(288839);let f={stop1:"#473982",stop2:"#5F509D",stop3:"#A477B2",stop4:"#F5C0C0"},m={stop1:"#C0B9C0",stop2:"#98919B",stop3:"#6F6575",stop4:"#463B4F"},h=s.default.canvas.withConfig({displayName:"AiIllustrationCanvas__Canvas",componentId:"sc-1565b414-0"})`
  --ai-illo-transition-duration: 856.56ms;
  --ai-illo-transition-timing-function: linear(
    0 0%,
    0.002214 1%,
    0.008544 2%,
    0.018541 3%,
    0.031789 4%,
    0.047899 5%,
    0.066508 6%,
    0.087281 7.000000000000001%,
    0.109907 8%,
    0.134099 9%,
    0.159592 10%,
    0.186142 11%,
    0.213526 12%,
    0.24154 13%,
    0.269997 14.000000000000002%,
    0.298729 15%,
    0.327583 16%,
    0.356421 17%,
    0.385118 18%,
    0.413565 19%,
    0.441663 20%,
    0.469326 21%,
    0.496477 22%,
    0.523051 23%,
    0.54899 24%,
    0.574248 25%,
    0.598782 26%,
    0.622561 27%,
    0.645557 28.000000000000004%,
    0.667752 28.999999999999996%,
    0.689129 30%,
    0.709679 31%,
    0.729397 32%,
    0.748282 33%,
    0.766337 34%,
    0.783568 35%,
    0.799983 36%,
    0.815596 37%,
    0.830419 38%,
    0.844468 39%,
    0.857762 40%,
    0.87032 41%,
    0.882161 42%,
    0.893308 43%,
    0.903782 44%,
    0.913608 45%,
    0.922807 46%,
    0.931405 47%,
    0.939424 48%,
    0.946889 49%,
    0.953825 50%,
    0.960254 51%,
    0.966201 52%,
    0.971688 53%,
    0.976739 54%,
    0.981377 55.00000000000001%,
    0.985623 56.00000000000001%,
    0.989498 56.99999999999999%,
    0.993024 57.99999999999999%,
    0.996221 59%,
    0.999108 60%,
    1.001705 61%,
    1.00403 62%,
    1.0061 63%,
    1.007933 64%,
    1.009544 65%,
    1.010949 66%,
    1.012164 67%,
    1.013202 68%,
    1.014076 69%,
    1.014801 70%,
    1.015387 71%,
    1.015846 72%,
    1.016189 73%,
    1.016428 74%,
    1.01657 75%,
    1.016626 76%,
    1.016603 77%,
    1.016511 78%,
    1.016356 79%,
    1.016146 80%,
    1.015888 81%,
    1.015586 82%,
    1.015247 83%,
    1.014877 84%,
    1.014479 85%,
    1.014059 86%,
    1.013621 87%,
    1.013168 88%,
    1.012704 89%,
    1.012232 90%,
    1.011755 91%,
    1.011276 92%,
    1.010796 93%,
    1.010318 94%,
    1.009844 95%,
    1.009376 96%,
    1.008914 97%,
    1.008461 98%,
    1.008017 99%,
    1.007584 100%
  );

  position: absolute;
  left: 50%;
  top: 50%;
  transition:
    opacity var(--ai-illo-transition-duration)
      var(--ai-illo-transition-timing-function),
    transform var(--ai-illo-transition-duration)
      var(--ai-illo-transition-timing-function);

  transition-delay: 0.2s;

  opacity: 0;
  transform-origin: 50% 50%;
  transform: scale(0.96) translate(-50%, -34%) rotateZ(-14deg);

  &[data-visible='true'] {
    opacity: 1;
    transform: translate(-50%, -34%) rotateZ(0deg);
  }
`;e.s(["AiIllustrationCanvas",0,function({progress:e,segments:g=20,desktopHeight:v=680,desktopWidth:x=680,duration:C=1,pathDuration:y=.7,normalizedOuterRadius:b=.46,normalizedInnerRadius:w=.175,mobileHeight:N=620,mobileWidth:L=620,className:j,paused:I=!1}){let _=(0,n.useRef)(null),[E,R]=(0,n.useState)(1),M=(0,s.useTheme)(),S="dark"===M.name,k=S?f:m,T=(0,n.useRef)(0),A=S?c.darkPalette:c.lightPalette,$=(0,u.useIsHydrated)(),V=(0,p.default)(M.mediaQueryString.SMALL),P=V?N:v,H=V?L:x,O=(0,n.useRef)([H,P]);O.current=[H,P],(0,n.useEffect)(()=>{R(Math.min(window?.devicePixelRatio,2))},[]);let D=(0,n.useMemo)(()=>Array.from({length:g},(e,t)=>t/g),[g]),B=1e3*y;return(0,a.useAnimationFrame)((t,n)=>{if(I)return;let a=_.current;if(!a)return;let s=a.getContext("2d");if(!s)return;let[c,u]=O.current;a.width=c*E,a.height=u*E,s.scale(E,E),s.clearRect(0,0,c,u);let p=e.get(),f=1/(200*C)*t*Math.PI;T.current+=n;let m=T.current/B,h=1/g*m;T.current%=B,D.forEach((e,t)=>{let n=e+h,o=1;0===t&&(o=d.easing.inSine(m)),t===g-1&&(o=d.easing.outSine(1-m)),s.strokeStyle=(0,l.rgba)(A.fgLoud,o),s.lineWidth=1,function({cx:e,cy:t,r:n,segments:o,borderRadius:i,rotation:a,ctx:l}){let s=Math.acos((2*Math.pow(n,2)-Math.pow(i,2))/(2*n*n));l.beginPath(),Array.from({length:o},(e,t)=>t).forEach(d=>{let c=d/o*2*Math.PI+a,u=e+n*Math.cos(c-.5*s),p=t+n*Math.sin(c-.5*s),f=e+n*Math.cos(c+.5*s),m=t+n*Math.sin(c+.5*s),h=(o-2)*Math.PI*.5/o,g=.5*(0,r.distance2D)({x:u,y:p},{x:f,y:m})/Math.tan(h),v=(u+f)/2+g*Math.cos(c),x=(p+m)/2+g*Math.sin(c);0===d?l.moveTo(u,p):l.lineTo(u,p),l.arcTo(v,x,f,m,i),l.lineTo(f,m)}),l.closePath(),l.stroke()}({cx:.5*H,cy:.5*P,r:(0,i.transform)(n,[0,1],[H*w,H*b],{clamp:!0,ease:d.easing.inOutSine}),segments:7,borderRadius:(0,i.transform)(n,[0,.5,1],[60,4,200],{ease:d.easing.inOutExpo}),rotation:-(d.easing.inOutSine(n)*(Math.PI/4))+f,ctx:s})}),s.globalCompositeOperation="source-in",s.fillStyle=(0,l.rgba)(A.fgLoud,.5),s.fillRect(0,0,c,u),s.fillStyle=S?(0,l.lighten)(.25,A.bg500):(0,l.darken)(.1,A.bg500),s.fillRect(0,0,c,u),s.globalCompositeOperation="source-atop";let v=s.createRadialGradient(.5*c,.5*u,0,.5*c,.5*u,.5*c),x=(0,i.transform)(p,[0,1],[-1.5,1]),y=(0,i.transform)(p,[0,1],[-.18,1.1]),N=(0,i.transform)(p,[0,1],[-.1,1.14]),L=(0,i.transform)(p,[0,1],[-.07,1.18]),j=(0,i.transform)(p,[0,1],[-.02,1.211]),R=(0,i.transform)(p,[0,1],[.03,1.213]),M=(0,i.transform)(p,[0,1],[.06,1.215]);v.addColorStop((0,o.clamp)(0,1,x),"transparent"),v.addColorStop((0,o.clamp)(0,1,y),k.stop1),v.addColorStop((0,o.clamp)(0,1,N),k.stop2),v.addColorStop((0,o.clamp)(0,1,L),k.stop3),v.addColorStop((0,o.clamp)(0,1,j),A.fgLoud),v.addColorStop((0,o.clamp)(0,1,R),k.stop4),v.addColorStop((0,o.clamp)(0,1,M),"transparent"),s.fillStyle=v,s.fillRect(0,0,c,u),s.globalCompositeOperation="source-over"}),(0,t.jsx)(h,{ref:_,className:j,"data-visible":$,height:P*E,style:{width:H,height:P},width:H*E})}])},537193,e=>{"use strict";var t=e.i(395967),n=e.i(924837),o=e.i(759609);e.s(["trackAnnouncementPillClicked",0,function(e,r){let i={href:r,label:e,page_path:(0,o.getCurrentPagePath)()};(0,t.trackRudderstack)(n.TRACKING_EVENTS.AnnouncementPillClicked,i)}])},63209,e=>{"use strict";var t=e.i(843476),n=e.i(271645),o=e.i(737806),r=e.i(798125),i=e.i(947414);e.s(["MotionConfig",0,function({children:e,isValidProp:a,...l}){a&&(0,r.loadExternalIsValidProp)(a),(l={...(0,n.useContext)(o.MotionConfigContext),...l}).isStatic=(0,i.useConstant)(()=>l.isStatic);let s=(0,n.useMemo)(()=>l,[JSON.stringify(l.transition),l.transformPagePoint,l.reducedMotion]);return(0,t.jsx)(o.MotionConfigContext.Provider,{value:s,children:e})}])},689709,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.PopoverPortal=void 0;var o=e.r(271645),r=e.r(174080);n.PopoverPortal=function(e){var t=e.container,n=e.element,i=e.scoutElement,a=e.children;return(0,o.useLayoutEffect)(function(){return t.appendChild(n),t.appendChild(i),function(){t.removeChild(n),t.removeChild(i)}},[t,n,i]),(0,r.createPortal)(a,n)}},387709,(e,t,n)=>{"use strict";var o=e.e&&e.e.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};Object.defineProperty(n,"__esModule",{value:!0}),n.getNudgedPopoverRect=n.getNewPopoverRect=n.popoverRectForPosition=n.createContainer=n.rectsAreEqual=n.createRect=n.EMPTY_RECT=void 0,n.EMPTY_RECT={top:0,left:0,right:0,bottom:0,width:0,height:0},n.createRect=function(e){var t=e.top,n=e.left,o=e.width,r=e.height;return{top:t,left:n,width:o,height:r,right:n+o,bottom:t+r}},n.rectsAreEqual=function(e,t){return e===t||(null==e?void 0:e.bottom)===(null==t?void 0:t.bottom)&&(null==e?void 0:e.height)===(null==t?void 0:t.height)&&(null==e?void 0:e.left)===(null==t?void 0:t.left)&&(null==e?void 0:e.right)===(null==t?void 0:t.right)&&(null==e?void 0:e.top)===(null==t?void 0:t.top)&&(null==e?void 0:e.width)===(null==t?void 0:t.width)},n.createContainer=function(e){var t=e.containerStyle,n=e.containerClassName,o=window.document.createElement("div");return n&&(o.className=n),Object.assign(o.style,t),o},n.popoverRectForPosition=function(e,t,o,r,i){var a,l,s=t.left+t.width/2,d=t.top+t.height/2,c=o.width,u=o.height;switch(e){case"left":a=d-u/2,l=t.left-r-c,"start"===i&&(a=t.top),"end"===i&&(a=t.bottom-u);break;case"bottom":a=t.bottom+r,l=s-c/2,"start"===i&&(l=t.left),"end"===i&&(l=t.right-c);break;case"right":a=d-u/2,l=t.right+r,"start"===i&&(a=t.top),"end"===i&&(a=t.bottom-u);break;default:a=t.top-u-r,l=s-c/2,"start"===i&&(l=t.left),"end"===i&&(l=t.right-c)}return(0,n.createRect)({left:l,top:a,width:c,height:u})},n.getNewPopoverRect=function(e,t){var o=e.position,r=e.align,i=e.childRect,a=e.popoverRect,l=e.boundaryRect,s=e.padding,d=e.reposition,c=(0,n.popoverRectForPosition)(o,i,a,s,r),u=d&&("top"===o&&c.top<l.top+t||"left"===o&&c.left<l.left+t||"right"===o&&c.right>l.right-t||"bottom"===o&&c.bottom>l.bottom-t);return{rect:c,boundaryViolation:u}},n.getNudgedPopoverRect=function(e,t,r){var i=t.top+r,a=t.left+r,l=t.right-r,s=t.bottom-r,d=e.top<i?i:e.top;d=d+e.height>s?s-e.height:d;var c=e.left<a?a:e.left;return c=c+e.width>l?l-e.width:c,(0,n.createRect)(o(o({},e),{top:d,left:c}))}},11640,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.useElementRef=void 0;var o=e.r(271645),r=e.r(387709);n.useElementRef=function(e){var t=e.containerClassName,n=e.containerStyle,i=(0,o.useRef)(),a=(0,o.useState)(function(){return(0,r.createContainer)({containerStyle:n,containerClassName:t})})[0];return(0,o.useLayoutEffect)(function(){a.className=t},[t,a]),(0,o.useLayoutEffect)(function(){Object.assign(a.style,n)},[n,a]),i.current=a,i}},166398,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.usePopover=void 0;var o=e.r(271645),r=e.r(387709),i=e.r(11640),a={position:"fixed",overflow:"visible",top:"0px",left:"0px"},l={position:"fixed",top:"0px",left:"0px",width:"0px",height:"0px",visibility:"hidden"};n.usePopover=function(e){var t=e.isOpen,n=e.childRef,s=e.positions,d=e.containerClassName,c=e.parentElement,u=e.transform,p=e.transformMode,f=e.align,m=e.padding,h=e.reposition,g=e.boundaryInset,v=e.boundaryElement,x=e.onPositionPopover,C=(0,i.useElementRef)({containerClassName:"react-tiny-popover-scout",containerStyle:l}),y=(0,i.useElementRef)({containerClassName:null!=d&&d.length>0&&"react-tiny-popover-container"!==d?"react-tiny-popover-container ".concat(d):"react-tiny-popover-container",containerStyle:a}),b=(0,o.useCallback)(function(e){var o,i,a=void 0===e?{}:e,l=a.positionIndex,d=void 0===l?0:l,w=a.parentRect,N=void 0===w?c.getBoundingClientRect():w,L=a.childRect,j=void 0===L?null==(o=null==n?void 0:n.current)?void 0:o.getBoundingClientRect():L,I=a.scoutRect,_=void 0===I?null==(i=null==C?void 0:C.current)?void 0:i.getBoundingClientRect():I,E=a.popoverRect,R=void 0===E?y.current.getBoundingClientRect():E,M=a.boundaryRect,S=void 0===M?v===c?N:v.getBoundingClientRect():M;if(j&&N&&t){if(u&&"absolute"===p){var k="function"==typeof u?u({childRect:j,popoverRect:R,parentRect:N,boundaryRect:S,padding:m,align:f,nudgedTop:0,nudgedLeft:0,boundaryInset:g,violations:r.EMPTY_RECT,hasViolations:!1}):u,T=k.top,A=k.left,$=Math.round(N.left+A-_.left),V=Math.round(N.top+T-_.top);y.current.style.transform="translate(".concat($,"px, ").concat(V,"px)"),x({childRect:j,popoverRect:(0,r.createRect)({left:$,top:V,width:R.width,height:R.height}),parentRect:N,boundaryRect:S,padding:m,align:f,transform:{top:T,left:A},nudgedTop:0,nudgedLeft:0,boundaryInset:g,violations:r.EMPTY_RECT,hasViolations:!1});return}var P=d===s.length,H=P?s[0]:s[d],O=(0,r.getNewPopoverRect)({childRect:j,popoverRect:R,boundaryRect:S,position:H,align:f,padding:m,reposition:h},g),D=O.rect;if(O.boundaryViolation&&h&&!P)return void b({positionIndex:d+1,childRect:j,popoverRect:R,parentRect:N,boundaryRect:S});var B=D.top,Z=D.left,K=D.width,F=D.height,z=h&&!P,G=(0,r.getNudgedPopoverRect)(D,S,g),W=G.left,U=G.top,Y=B,X=Z;z&&(Y=U,X=W),Y=Math.round(Y-_.top),X=Math.round(X-_.left),y.current.style.transform="translate(".concat(X,"px, ").concat(Y,"px)");var q={top:S.top+g-Y,left:S.left+g-X,right:X+K-S.right+g,bottom:Y+F-S.bottom+g},Q={childRect:j,popoverRect:(0,r.createRect)({left:X,top:Y,width:K,height:F}),parentRect:N,boundaryRect:S,position:H,align:f,padding:m,nudgedTop:U-B,nudgedLeft:W-Z,boundaryInset:g,violations:{top:q.top<=0?0:q.top,left:q.left<=0?0:q.left,right:q.right<=0?0:q.right,bottom:q.bottom<=0?0:q.bottom},hasViolations:q.top>0||q.left>0||q.right>0||q.bottom>0};if(u){x(Q);var J="function"==typeof u?u(Q):u,ee=J.top,et=J.left;y.current.style.transform="translate(".concat(Math.round(X+(null!=et?et:0)),"px, ").concat(Math.round(Y+(null!=ee?ee:0)),"px)"),Q.nudgedLeft+=null!=et?et:0,Q.nudgedTop+=null!=ee?ee:0,Q.transform={top:ee,left:et}}x(Q)}},[c,n,C,y,v,t,u,p,s,f,m,h,g,x]);return{positionPopover:b,popoverRef:y,scoutRef:C}}},798465,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.useMemoizedArray=void 0;var o=e.r(271645);n.useMemoizedArray=function(e){var t=(0,o.useRef)(e);return(0,o.useMemo)(function(){if(t.current===e)return t.current;if(t.current.length!==e.length)return t.current=e,e;for(var n=0;n<e.length;n+=1)if(e[n]!==t.current[n])return t.current=e,e;return t.current},[e])}},613972,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.useHandlePrevValues=void 0;var o=e.r(271645);n.useHandlePrevValues=function(e){var t=(0,o.useRef)(e.positions),n=(0,o.useRef)(e.reposition),r=(0,o.useRef)(e.transformMode),i=(0,o.useRef)(e.transform),a=(0,o.useRef)(e.boundaryElement),l=(0,o.useRef)(e.boundaryInset),s=(0,o.useCallback)(function(){t.current=e.positions,n.current=e.reposition,r.current=e.transformMode,i.current=e.transform,a.current=e.boundaryElement,l.current=e.boundaryInset},[e.boundaryElement,e.boundaryInset,e.positions,e.reposition,e.transform,e.transformMode]);return{prev:{positions:t.current,reposition:n.current,transformMode:r.current,transform:i.current,boundaryElement:a.current,boundaryInset:l.current},updatePrevValues:s}}},562382,(e,t,n)=>{"use strict";var o=e.e&&e.e.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};Object.defineProperty(n,"__esModule",{value:!0}),n.useArrowContainer=void 0;var r=e.r(271645);n.useArrowContainer=function(e){var t=e.childRect,n=e.popoverRect,i=e.position,a=e.arrowSize,l=e.arrowColor;return{arrowContainerStyle:(0,r.useMemo)(function(){return{padding:a}},[a]),arrowStyle:(0,r.useMemo)(function(){return o({position:"absolute"},function(){var e=2*a,o=t.top-n.top+t.height/2-e/2,r=t.left-n.left+t.width/2-e/2,s=n.width-a,d=n.height-a;switch(r=(r=r<a?a:r)+e>s?s-e:r,o=Number.isNaN(o=(o=o<a?a:o)+e>d?d-e:o)?0:o,r=Number.isNaN(r)?0:r,i){case"right":return{borderTop:"".concat(a,"px solid transparent"),borderBottom:"".concat(a,"px solid transparent"),borderRight:"".concat(a,"px solid ").concat(l),left:0,top:o};case"left":return{borderTop:"".concat(a,"px solid transparent"),borderBottom:"".concat(a,"px solid transparent"),borderLeft:"".concat(a,"px solid ").concat(l),right:0,top:o};case"bottom":return{borderLeft:"".concat(a,"px solid transparent"),borderRight:"".concat(a,"px solid transparent"),borderBottom:"".concat(a,"px solid ").concat(l),top:0,left:r};case"top":return{borderLeft:"".concat(a,"px solid transparent"),borderRight:"".concat(a,"px solid transparent"),borderTop:"".concat(a,"px solid ").concat(l),bottom:0,left:r};default:return{display:"hidden"}}}())},[l,a,t.height,t.left,t.top,t.width,n.height,n.left,n.top,n.width,i])}}},952612,(e,t,n)=>{"use strict";var o=e.e&&e.e.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};Object.defineProperty(n,"__esModule",{value:!0}),n.ArrowContainer=void 0;var r=e.r(843476),i=e.r(271645),a=e.r(562382);n.ArrowContainer=function(e){var t=e.childRect,n=e.popoverRect,l=e.position,s=e.arrowColor,d=e.arrowSize,c=e.arrowClassName,u=e.arrowStyle,p=e.className,f=e.children,m=e.style,h=(0,a.useArrowContainer)({childRect:t,popoverRect:n,position:l,arrowColor:s,arrowSize:d}),g=h.arrowContainerStyle,v=h.arrowStyle,x=(0,i.useMemo)(function(){return o(o({},g),m)},[g,m]),C=(0,i.useMemo)(function(){return o(o({},v),u)},[v,u]);return(0,r.jsxs)("div",{className:p,style:x,children:[(0,r.jsx)("div",{style:C,className:c}),f]})}},815659,(e,t,n)=>{"use strict";var o=e.e&&e.e.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};Object.defineProperty(n,"__esModule",{value:!0}),n.Popover=n.usePopover=n.ArrowContainer=n.useArrowContainer=void 0;var r=e.r(843476),i=e.r(271645),a=e.r(689709),l=e.r(387709),s=e.r(166398);Object.defineProperty(n,"usePopover",{enumerable:!0,get:function(){return s.usePopover}});var d=e.r(798465),c=e.r(613972),u=e.r(562382);Object.defineProperty(n,"useArrowContainer",{enumerable:!0,get:function(){return u.useArrowContainer}});var p=e.r(952612);Object.defineProperty(n,"ArrowContainer",{enumerable:!0,get:function(){return p.ArrowContainer}});var f=["top","left","right","bottom"],m=(0,i.forwardRef)(function(e,t){var n=e.isOpen,o=e.children,u=e.content,p=e.positions,m=void 0===p?f:p,h=e.align,g=void 0===h?"center":h,v=e.padding,x=void 0===v?0:v,C=e.reposition,y=void 0===C||C,b=e.parentElement,w=void 0===b?window.document.body:b,N=e.boundaryElement,L=void 0===N?w:N,j=e.containerClassName,I=e.containerStyle,_=e.transform,E=e.transformMode,R=void 0===E?"absolute":E,M=e.boundaryInset,S=void 0===M?0:M,k=e.onClickOutside,T=e.clickOutsideCapture,A=void 0!==T&&T,$=(0,d.useMemoizedArray)(Array.isArray(m)?m:[m]),V=(0,c.useHandlePrevValues)({positions:$,reposition:y,transformMode:R,transform:_,boundaryElement:L,boundaryInset:S}),P=V.prev,H=V.updatePrevValues,O=(0,i.useRef)(),D=(0,i.useState)({align:g,nudgedLeft:0,nudgedTop:0,position:$[0],padding:x,childRect:l.EMPTY_RECT,popoverRect:l.EMPTY_RECT,parentRect:l.EMPTY_RECT,boundaryRect:l.EMPTY_RECT,boundaryInset:S,violations:l.EMPTY_RECT,hasViolations:!1}),B=D[0],Z=D[1],K=(0,i.useCallback)(function(e){return Z(e)},[]),F=(0,s.usePopover)({isOpen:n,childRef:O,containerClassName:j,parentElement:w,boundaryElement:L,transform:_,transformMode:R,positions:$,align:g,padding:x,boundaryInset:S,reposition:y,onPositionPopover:K}),z=F.positionPopover,G=F.popoverRef,W=F.scoutRef;(0,i.useLayoutEffect)(function(){var e=!0,t=function(){var o,r;if(n&&e){var i=null==(o=null==O?void 0:O.current)?void 0:o.getBoundingClientRect(),a=null==(r=null==G?void 0:G.current)?void 0:r.getBoundingClientRect();null==i||null==a||(0,l.rectsAreEqual)(i,B.childRect)&&a.width===B.popoverRect.width&&a.height===B.popoverRect.height&&B.padding===x&&B.align===g&&$===P.positions&&y===P.reposition&&R===P.transformMode&&_===P.transform&&L===P.boundaryElement&&S===P.boundaryInset||z(),H(),e&&window.requestAnimationFrame(t)}};return t(),function(){e=!1}},[g,L,S,n,x,G,B.align,B.childRect,B.padding,B.popoverRect.height,B.popoverRect.width,z,$,P.boundaryElement,P.boundaryInset,P.positions,P.reposition,P.transform,P.transformMode,y,_,R,H]),(0,i.useEffect)(function(){var e=G.current;return Object.assign(e.style,I),function(){Object.keys(null!=I?I:{}).forEach(function(t){return delete e.style[t]})}},[I,n,G]);var U=(0,i.useCallback)(function(e){var t,o;!n||(null==(t=G.current)?void 0:t.contains(e.target))||(null==(o=O.current)?void 0:o.contains(e.target))||null==k||k(e)},[n,k,G]),Y=(0,i.useCallback)(function(){O.current&&n&&window.requestAnimationFrame(function(){return z()})},[z,n]);(0,i.useEffect)(function(){var e=w.ownerDocument.body;return e.addEventListener("click",U,A),e.addEventListener("contextmenu",U,A),window.addEventListener("resize",Y),function(){e.removeEventListener("click",U,A),e.removeEventListener("contextmenu",U,A),window.removeEventListener("resize",Y)}},[A,U,Y,w]);var X=(0,i.useCallback)(function(e){O.current=e,null!=t&&("object"==typeof t?t.current=e:"function"==typeof t&&t(e))},[t]);return(0,r.jsxs)(r.Fragment,{children:[(0,i.cloneElement)(o,{ref:X}),n?(0,r.jsx)(a.PopoverPortal,{element:G.current,scoutElement:W.current,container:w,children:"function"==typeof u?u(B):u}):null]})});n.Popover=(0,i.forwardRef)(function(e,t){return"u"<typeof window?e.children:(0,r.jsx)(m,o({},e,{ref:t}))})}]);