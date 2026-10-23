(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,781016,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(174080),a=e.i(88653),n=e.i(846932),r=e.i(193594),d=e.i(997053),l=e.i(706736),s=e.i(529376),c=e.i(430388),p=e.i(429625),u=e.i(991709);e.i(726497);var m=e.i(539087);let h=(0,d.default)(n.motion.div).withConfig({displayName:"FullScreenVideo__Video",componentId:"sc-1ed407d2-0"})`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({theme:e})=>(0,r.rgba)(e.colors.BLACK,.8)};
  z-index: 99999999999;
  padding: 20px;

  video,
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
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`,f=(0,d.default)(l.Button).withConfig({displayName:"FullScreenVideo__CloseButton",componentId:"sc-1ed407d2-1"})`
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
    background-color: ${({theme:e})=>e.colors.BLACK};
    border-left: 1px solid ${({theme:e})=>e.highlightColor};
    border-bottom: 1px solid ${({theme:e})=>e.highlightColor};
    cursor: pointer;
  }
`,g={FullScreenVideo:{...u.REVEAL_MARKER,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{...u.DEFAULT_TRANSITION}}},x=i.memo(function({isOpen:e,onClose:n,path:r,videoTitle:l,embed:u}){let x=(0,i.useRef)(null),y=(0,s.useIsHydrated)(),{handleEnded:w,handlePlay:A,handleTimeUpdate:b}=(0,p.useNativeVideoTracking)(r,l,e);(0,i.useEffect)(()=>{if(!e||u)return;let t=window.setTimeout(()=>{x.current?.play()},200);return()=>window.clearTimeout(t)},[u,e]);let C=(0,i.useCallback)(()=>{x.current?.pause(),n()},[n]);return y?(0,o.createPortal)((0,t.jsx)(a.AnimatePresence,{children:e&&(0,t.jsx)(d.ThemeProvider,{theme:m.DARK_THEME,children:(0,t.jsxs)(h,{...g.FullScreenVideo,"data-theme":"dark",children:[(0,t.jsx)(f,{icon:(0,t.jsx)(c.CloseIcon,{}),size:"small",stylez:"bold",onClick:C}),u||(0,t.jsx)("video",{ref:x,controls:!0,playsInline:!0,onEnded:w,onPlay:A,onTimeUpdate:b,children:(0,t.jsx)("source",{src:r,type:"video/mp4"})}),(0,t.jsx)("div",{className:"bkg",onClick:C})]})})}),document.body):null});e.s(["FullScreenVideo",0,x])},681672,e=>{e.v({quoteText:"CustomerQuote-module__ZeO8AW__quoteText"})},607022,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(247984),a=e.i(997053),n=e.i(706736),r=e.i(430388),d=e.i(681672);let l=a.default.div.withConfig({displayName:"CustomerQuote__Wrapper",componentId:"sc-3c8753d4-0"})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    text-align: center;
  }

  img {
    ${({theme:e})=>e.customerLogoColor};
  }
`,s=a.default.div.withConfig({displayName:"CustomerQuote__Quote",componentId:"sc-3c8753d4-1"})`
  display: flex;
  align-items: center;
  font-family: ${({theme:e})=>e.fontFamily.MONO};
  font-size: 32px;
  opacity: 1;
  margin: 25px 0 15px;
  width: 100%;

  &::before,
  &::after {
    content: '';
    flex: 1 1 auto;
    display: flex;
    height: 1px;
  }

  &::before {
    margin-right: 10px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${({theme:e})=>e.highlightColor50} 95%
    );
  }

  &::after {
    margin-left: 10px;
    background: linear-gradient(
      -90deg,
      transparent 0%,
      ${({theme:e})=>e.highlightColor60} 95%
    );
  }
`,c=a.default.div.withConfig({displayName:"CustomerQuote__Author",componentId:"sc-3c8753d4-2"})`
  padding-top: 20px;

  p:first-child {
    color: ${({theme:e})=>e.fontColor.LOUD};
    font-size: ${({theme:e})=>e.fontSize.MEDIUM};
    font-weight: 600;
    margin-bottom: 5px;
  }

  p:last-child {
    color: ${({theme:e})=>e.fontColor.MUTED};
    line-height: 18px;
  }
`,p=i.memo(function({logoPath:e,customerName:i,quote:o,author:a}){return(0,t.jsxs)(l,{children:[e&&(0,t.jsx)("img",{alt:i,src:e}),(0,t.jsx)(s,{children:(0,t.jsx)(r.QuoteIcon,{})})," ",(0,t.jsxs)("q",{className:d.default.quoteText,children:['"',o,'"']}),a&&(0,t.jsxs)(c,{children:[(0,t.jsx)("p",{children:a}),(0,t.jsx)("p",{children:i})]})]})}),u=a.default.div.withConfig({displayName:"CustomerGridItem__Wrapper",componentId:"sc-fb00b7ca-0"})`
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  margin: 0;
  height: 200px;
  background-color: ${({theme:e})=>e.backgroundColor15};

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

  ${({$isStory:e})=>e&&a.css`
      flex: 1 1 0;
      min-height: 0;
      height: auto;

      > div {
        height: auto;
      }

      .customerInner {
        justify-content: flex-start;
      }
    `}
`,m=(0,a.default)(n.Button).withConfig({displayName:"CustomerGridItem__StyledButton",componentId:"sc-fb00b7ca-1"})`
  &&& {
    width: 100%;
    height: 100%;
    border: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
    padding: 0;
  }
`,h=a.default.div.withConfig({displayName:"CustomerGridItem__Inner",componentId:"sc-fb00b7ca-2"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 30px;
  justify-content: center;

  img {
    ${({theme:e})=>e.customerLogoColor};
  }

  p,
  .${d.default.quoteText} {
    font-family: ${({theme:e})=>e.fontFamily.SANS};
    white-space: normal;
    font-size: ${({theme:e})=>e.fontSize.MEDIUM};
    line-height: ${({theme:e})=>e.lineHeight.body.m};
    margin: 0;
    text-transform: none;
    margin-bottom: 0;
  }
`,f=i.memo(function({item:e,isStory:a=!1,loudStyle:n=!1}){let r=e.logoUrl??"",d=e.slug??"",l=e.hasStory??!1,s=e.synopsis??"",c=e.name??"",f=a&&l?(0,t.jsx)(h,{children:(0,t.jsx)(p,{customerName:c,logoPath:r,quote:s})}):(0,t.jsx)(h,{children:(0,t.jsx)("img",{alt:c,src:r})}),g=(0,i.useMemo)(()=>l&&d?`/customers/${(0,o.stegaClean)(d)}/`:e.website?(0,o.stegaClean)(e.website):void 0,[e,l,d]);return(0,t.jsx)(u,{$isStory:a,children:(0,t.jsx)(m,{href:g,stylez:n&&a?"bold":"minimal",text:f})})});e.s(["CustomerGridItem",0,f],607022)},613320,e=>{"use strict";var t,i,o=e.i(843476),a=e.i(846932),n=e.i(997053),r=e.i(273454),d=e.i(650617),l=e.i(739876),s=e.i(581444),c=e.i(991709),p=e.i(271645),u=e.i(706736),m=e.i(785191),h=e.i(430388),f=e.i(665419);e.i(726497);var g=e.i(539087);function x(){return(x=Object.assign.bind()).apply(null,arguments)}let y=function(e){return p.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 396 223"},e),t||(t=p.createElement("path",{fill:"currentColor",d:"M75.063 79.89c11.572-11.572 11.572-30.334 0-41.906l1.105 1.052c11.632 10.51 29.591 10.158 40.802-1.052-11.21 11.21-11.561 29.17-1.052 40.801l1.052 1.105c-11.572-11.571-30.335-11.572-41.907 0M117.214 121.392c11.572-11.572 11.572-30.334 0-41.906l1.105 1.052c11.632 10.51 29.591 10.158 40.801-1.052-11.21 11.21-11.561 29.169-1.052 40.801l1.052 1.105c-11.572-11.571-30.334-11.572-41.906 0M159.364 77.945c11.572-11.572 11.572-30.334 0-41.906l1.105 1.051c11.632 10.51 29.591 10.159 40.802-1.051-11.21 11.21-11.561 29.169-1.052 40.801l1.052 1.105c-11.573-11.572-30.335-11.572-41.907 0"})),i||(i=p.createElement("path",{fill:"currentColor",d:"M200.866 119.447c11.572-11.572 11.572-30.334 0-41.906l1.105 1.052c11.632 10.51 29.591 10.158 40.802-1.052-11.21 11.21-11.561 29.169-1.052 40.801l1.052 1.105c-11.572-11.572-30.335-11.572-41.907 0M158.716 161.598c11.572-11.572 11.572-30.334 0-41.906l1.105 1.052c11.632 10.509 29.591 10.158 40.801-1.052-11.21 11.21-11.561 29.169-1.052 40.801l1.052 1.105c-11.572-11.572-30.334-11.572-41.906 0M39.673 115.735c8.144-8.143 8.143-21.346 0-29.49l.778.74c8.185 7.397 20.823 7.15 28.712-.74-7.889 7.89-8.135 20.527-.74 28.713l.74.777c-8.143-8.143-21.346-8.143-29.49 0M81.825 157.239c8.143-8.143 8.143-21.346 0-29.49l.777.74c8.186 7.396 20.823 7.149 28.712-.74-7.888 7.889-8.135 20.527-.74 28.712l.74.778c-8.143-8.143-21.346-8.143-29.49 0M123.326 197.443c8.144-8.143 8.144-21.346 0-29.489l.778.74c8.186 7.396 20.823 7.148 28.712-.74-7.888 7.888-8.135 20.526-.74 28.712l.74.777c-8.143-8.143-21.346-8.143-29.49 0M210.221 197.443c8.144-8.143 8.144-21.346 0-29.489l.778.74c8.186 7.396 20.823 7.148 28.712-.74-7.888 7.888-8.135 20.526-.74 28.712l.74.777c-8.143-8.143-21.346-8.143-29.49 0M39.673 197.443c8.144-8.143 8.143-21.346 0-29.489l.778.74c8.185 7.396 20.823 7.148 28.712-.74-7.889 7.888-8.135 20.526-.74 28.712l.74.777c-8.143-8.143-21.346-8.143-29.49 0M249.129 157.239c8.144-8.143 8.144-21.346 0-29.49l.778.74c8.186 7.396 20.823 7.149 28.712-.74-7.888 7.889-8.135 20.527-.74 28.712l.74.778c-8.143-8.143-21.346-8.143-29.49 0M249.129 74.234c8.144-8.143 8.144-21.346 0-29.49l.778.74c8.186 7.396 20.823 7.149 28.712-.74-7.888 7.889-8.135 20.527-.74 28.712l.74.778c-8.143-8.143-21.346-8.143-29.49 0M289.983 113.79c8.143-8.143 8.143-21.346 0-29.49l.777.74c8.186 7.396 20.823 7.15 28.712-.74-7.888 7.89-8.135 20.527-.74 28.713l.74.777c-8.143-8.143-21.346-8.143-29.489 0M328.891 71.64c8.143-8.143 8.143-21.346 0-29.49l.777.74c8.186 7.396 20.824 7.149 28.713-.74-7.889 7.889-8.136 20.527-.741 28.712l.741.778c-8.144-8.143-21.347-8.143-29.49 0M328.891 153.996c8.143-8.143 8.143-21.346 0-29.49l.777.74c8.186 7.396 20.824 7.149 28.713-.74-7.889 7.889-8.136 20.527-.741 28.712l.741.778c-8.144-8.143-21.347-8.143-29.49 0M207.628 29.49c8.143-8.144 8.143-21.347 0-29.49l.777.74c8.186 7.396 20.823 7.149 28.712-.74-7.888 7.889-8.135 20.527-.74 28.712l.74.778c-8.143-8.143-21.346-8.144-29.489 0M123.326 29.49c8.144-8.144 8.144-21.347 0-29.49l.778.74c8.186 7.396 20.823 7.149 28.712-.74-7.888 7.889-8.135 20.527-.74 28.712l.74.778c-8.143-8.143-21.346-8.144-29.49 0M39.673 29.49c8.144-8.144 8.143-21.347 0-29.49l.778.74C48.636 8.136 61.274 7.89 69.163 0c-7.889 7.889-8.135 20.527-.74 28.712l.74.778c-8.143-8.143-21.346-8.144-29.49 0M293.108 24.6c5.572-5.572 5.572-14.606 0-20.177l.532.506c5.601 5.06 14.248 4.891 19.645-.506-5.397 5.397-5.566 14.044-.506 19.645l.506.532c-5.571-5.572-14.605-5.572-20.177 0M375.464 24.6c5.572-5.572 5.571-14.606 0-20.177l.532.506c5.6 5.06 14.247 4.891 19.645-.506-5.397 5.397-5.566 14.044-.506 19.645l.506.532c-5.572-5.572-14.606-5.572-20.177 0M375.464 108.901c5.572-5.572 5.571-14.605 0-20.177l.532.506c5.6 5.06 14.247 4.891 19.645-.506-5.397 5.397-5.566 14.044-.506 19.645l.506.532c-5.572-5.571-14.606-5.572-20.177 0M0 66.75c5.572-5.572 5.572-14.605 0-20.177l.532.506c5.6 5.06 14.248 4.892 19.645-.506-5.397 5.398-5.566 14.044-.506 19.645l.506.532c-5.572-5.571-14.605-5.572-20.177 0M293.108 193.202c5.572-5.572 5.572-14.606 0-20.178l.532.507c5.601 5.06 14.248 4.891 19.645-.507-5.397 5.398-5.566 14.045-.506 19.646l.506.532c-5.571-5.572-14.605-5.572-20.177 0M347.654 202.023c-5.572 5.572-5.572 14.605 0 20.177l-.532-.506c-5.601-5.061-14.247-4.892-19.645.506 5.397-5.398 5.566-14.044.506-19.645l-.506-.532c5.572 5.571 14.605 5.572 20.177 0M102.533 202.023c-5.572 5.572-5.572 14.605 0 20.177l-.532-.506c-5.6-5.061-14.247-4.892-19.645.506 5.397-5.398 5.566-14.044.506-19.645l-.506-.532c5.572 5.571 14.605 5.572 20.177 0M375.464 193.202c5.572-5.572 5.571-14.606 0-20.178l.532.507c5.6 5.06 14.247 4.891 19.645-.507-5.397 5.398-5.566 14.045-.506 19.646l.506.532c-5.572-5.572-14.606-5.572-20.177 0M265.299 202.023c-5.572 5.572-5.572 14.605 0 20.177l-.532-.506c-5.601-5.061-14.248-4.892-19.646.506 5.398-5.398 5.567-14.044.507-19.645l-.507-.532c5.572 5.571 14.606 5.572 20.178 0M20.177 202.023c-5.572 5.572-5.571 14.605 0 20.177l-.532-.506c-5.6-5.061-14.247-4.892-19.645.506 5.397-5.398 5.566-14.044.506-19.645L0 202.023c5.572 5.571 14.606 5.572 20.177 0M182.943 202.023c-5.572 5.572-5.572 14.605 0 20.177l-.532-.506c-5.601-5.061-14.247-4.892-19.645.506 5.397-5.398 5.566-14.044.506-19.645l-.506-.532c5.572 5.571 14.605 5.572 20.177 0M0 152.348c5.572-5.571 5.572-14.605 0-20.177l.532.507c5.6 5.06 14.248 4.891 19.645-.507-5.397 5.398-5.566 14.045-.506 19.645l.506.532c-5.572-5.571-14.605-5.571-20.177 0"})))};function w(){let e=(0,p.useCallback)(()=>{window.open("/resources/data-leaders-playbook-for-agentic-analytics/","_blank")},[]);return(0,o.jsxs)(A,{...c.ANIMATIONS.SimpleFadeIn,children:[(0,o.jsxs)(b,{children:[(0,o.jsx)("span",{}),(0,o.jsx)("span",{}),(0,o.jsx)("span",{}),(0,o.jsx)("span",{})]}),(0,o.jsx)(C,{effect:"glass",children:(0,o.jsx)(n.ThemeProvider,{theme:g.DARK_THEME,children:(0,o.jsxs)(v,{"data-theme":"dark",children:[(0,o.jsxs)(S,{children:[(0,o.jsx)("span",{}),(0,o.jsx)("span",{}),(0,o.jsx)("span",{}),(0,o.jsx)("span",{})]}),(0,o.jsxs)(T,{children:[(0,o.jsx)(I,{children:(0,o.jsx)(r.GradientHeader,{$alignText:"left",renderAs:"h2",children:"The Data Leader's Guide to AI Analytics"})}),(0,o.jsx)(E,{children:(0,o.jsx)(h.SaveIcon,{})}),(0,o.jsxs)(_,{children:[(0,o.jsx)(d.Text,{size:"medium",children:"A practical roadmap for understanding and implementing AI to accelerate your data team and enable true self-service."}),(0,o.jsxs)($,{children:[(0,o.jsx)(u.Button,{size:"large",stylez:"loud",text:"Download the guide",onClick:e}),(0,o.jsx)(u.Button,{href:f.INTERNAL_LINKS.RequestADemo,size:"large",text:"Request a demo"})]})]}),(0,o.jsx)(N,{children:(0,o.jsx)(y,{})})]})]})})})]})}let A=(0,n.default)(a.motion.div).withConfig({displayName:"SectionGuideDownload__Wrapper",componentId:"sc-fec3c9f3-0"})`
  display: flex;
  max-width: 1000px;
  width: calc(100% - 30px);
  position: relative;
  padding: 5px;
`,b=n.default.div.withConfig({displayName:"SectionGuideDownload__GridLines",componentId:"sc-fec3c9f3-1"})`
  position: absolute;
  inset: 0;
  pointer-events: none;

  span {
    position: absolute;
  }

  span:nth-child(1) {
    top: -10px;
    left: 0;
    bottom: -10px;
    width: 1px;
    border-left: 1px dashed ${({theme:e})=>e.borderColor.DEFAULT};
  }

  span:nth-child(2) {
    top: -10px;
    right: 0;
    bottom: -10px;
    width: 1px;
    border-right: 1px dashed ${({theme:e})=>e.borderColor.DEFAULT};
  }

  span:nth-child(3) {
    top: 0;
    left: -10px;
    right: -10px;
    height: 1px;
    border-top: 1px dashed ${({theme:e})=>e.borderColor.DEFAULT};
  }

  span:nth-child(4) {
    bottom: 0;
    left: -10px;
    right: -10px;
    height: 1px;
    border-bottom: 1px dashed ${({theme:e})=>e.borderColor.DEFAULT};
  }
`,C=(0,n.default)(m.Card).withConfig({displayName:"SectionGuideDownload__StyledCard",componentId:"sc-fec3c9f3-2"})`
  padding: 0;
  overflow: hidden;
`,v=n.default.div.withConfig({displayName:"SectionGuideDownload__DarkInner",componentId:"sc-fec3c9f3-3"})`
  background-color: ${({theme:e})=>e.backgroundColor};
  padding: 20px;
  position: relative;
`,S=n.default.div.withConfig({displayName:"SectionGuideDownload__CornerTicks",componentId:"sc-fec3c9f3-4"})`
  position: absolute;
  inset: 0;
  pointer-events: none;

  span {
    position: absolute;
    width: 21px;
    height: 21px;
  }

  span:nth-child(1) {
    top: 0;
    left: 0;
    border-right: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
    border-bottom: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
  }

  span:nth-child(2) {
    top: 0;
    right: 0;
    border-left: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
    border-bottom: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
  }

  span:nth-child(3) {
    bottom: 0;
    left: 0;
    border-right: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
    border-top: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
  }

  span:nth-child(4) {
    bottom: 0;
    right: 0;
    border-left: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
    border-top: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
  }
`,j=n.default.div.withConfig({displayName:"SectionGuideDownload__GridBox",componentId:"sc-fec3c9f3-5"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  flex: 1;
`,I=(0,n.default)(j).withConfig({displayName:"SectionGuideDownload__TopLeft",componentId:"sc-fec3c9f3-6"})`
  border-right: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
  border-bottom: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
`,E=(0,n.default)(j).withConfig({displayName:"SectionGuideDownload__TopRight",componentId:"sc-fec3c9f3-7"})`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  border-bottom: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
`,_=(0,n.default)(j).withConfig({displayName:"SectionGuideDownload__BottomLeft",componentId:"sc-fec3c9f3-8"})`
  border-right: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
`,N=n.default.div.withConfig({displayName:"SectionGuideDownload__BottomRight",componentId:"sc-fec3c9f3-9"})`
  display: grid;
  place-items: center;
  padding: 10px;

  svg {
    width: 100%;
    max-height: 100%;
    aspect-ratio: 16 / 9;
    object-fit: contain;
    color: ${({theme:e})=>e.highlightColor};
  }
`,T=n.default.div.withConfig({displayName:"SectionGuideDownload__Grid",componentId:"sc-fec3c9f3-10"})`
  display: grid;
  grid-template-columns: 2fr 1fr;
  border: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    display: flex;
    flex-direction: column;

    ${E}, ${N} {
      display: none;
    }
  }
`,$=n.default.div.withConfig({displayName:"SectionGuideDownload__Actions",componentId:"sc-fec3c9f3-11"})`
  display: flex;
  gap: 15px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    flex-direction: column;
    gap: 10px;
    width: 100%;
    align-items: stretch;
  }
`,R=(0,n.default)(s.LayoutSubgrid).withConfig({displayName:"AIAnalyticsHero__Bg",componentId:"sc-dedf7fae-0"})`
  position: relative;
  overflow-x: clip;
`,k=(0,n.default)(s.LayoutGridCondensed).withConfig({displayName:"AIAnalyticsHero__Wrapper",componentId:"sc-dedf7fae-1"})`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding-top: 224px;
  padding-bottom: 80px;
`,M=(0,n.default)(a.motion.div).withConfig({displayName:"AIAnalyticsHero__TextContent",componentId:"sc-dedf7fae-2"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-align: center;
  margin: 0 auto;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    gap: 20px;
  }
`,B=(0,n.default)(r.GradientHeader).withConfig({displayName:"AIAnalyticsHero__StyledHeader",componentId:"sc-dedf7fae-3"})`
  && {
    position: relative;

    span {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-top: -0.7rem;

      &::before,
      &::after {
        content: '';
        display: block;
        flex: 1 1 auto;
        height: 12px;
        background-image: ${({theme:e})=>(0,l.backgroundImageCheckered)(e)};
      }
    }

    @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
      && {
        font-size: 3rem;
        line-height: 1.3;

        span {
          display: block;
          line-height: 0.9;
          margin-top: 0;

          &::before,
          &::after {
            display: none;
          }
        }
      }
    }
  }
`,O=(0,n.default)(d.Text).attrs({size:"large"}).withConfig({displayName:"AIAnalyticsHero__Description",componentId:"sc-dedf7fae-4"})`
  margin: 0 auto;
  text-align: center;
  max-width: 640px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    padding: 0 20px;
  }
`;e.s(["AIAnalyticsHero",0,function(){return(0,o.jsxs)(R,{children:[(0,o.jsx)(l.CheckeredMargin,{}),(0,o.jsx)(s.LayoutSubgrid,{"data-content-grid":!0,children:(0,o.jsxs)(k,{children:[(0,o.jsxs)(M,{...c.ANIMATIONS.SimpleFadeIn,children:[(0,o.jsxs)(B,{renderAs:"h1",children:["Stop fielding questions.",(0,o.jsx)("span",{"data-style":"italic",children:"Start enabling answers."})]}),(0,o.jsx)(O,{children:"Conversational analytics is the next evolution of BI, but requires a different approach. Hex has created comprehensive resources to help your organization adopt and scale self-service."})]}),(0,o.jsx)(w,{})]})}),(0,o.jsx)(l.CheckeredMargin,{"data-right":!0})]})}],613320)},90170,e=>{"use strict";var t=e.i(843476),i=e.i(997053),o=e.i(613938),a=e.i(33351),n=e.i(718269),r=e.i(666541);let d=i.default.div.withConfig({displayName:"SectionBlogPosts__ResourcesGrid",componentId:"sc-8d536cdc-0"})`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  > * {
    flex: 0 1 calc((100% - 40px) / 3);
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    > * {
      flex: 0 1 calc((100% - 20px) / 2);
    }
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    > * {
      flex: 0 1 100%;
    }
  }
`;e.s(["SectionBlogPosts",0,function({resources:e}){return(0,t.jsx)(o.BasicPageRow,{CartesianGridComponent:a.CartesianGrid,topBorder:!0,children:(0,t.jsxs)(r.Section,{children:[(0,t.jsx)(r.SectionHeading,{description:"More thinking on why self-service is finally real, how to evaluate AI tools, and why dashboards were never the destination.",title:"We're obsessed with this stuff"}),(0,t.jsx)(d,{children:e.map(e=>(0,t.jsx)(n.SolutionResourceCard,{resource:e},e.title))})]})})}])},569129,e=>{"use strict";var t=e.i(843476),i=e.i(997053),o=e.i(607022),a=e.i(613938),n=e.i(666541);let r=i.default.div.withConfig({displayName:"SectionCustomerStories__CustomersGrid",componentId:"sc-2fcc5e1f-0"})`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    grid-template-columns: 1fr;
  }
`;e.s(["SectionCustomerStories",0,function({customers:e}){return(0,t.jsx)(a.BasicPageRow,{topBorder:!0,children:(0,t.jsxs)(n.Section,{children:[(0,t.jsx)(n.SectionHeading,{description:"Leading data teams at Figma, PandaDoc, and Project0 share what changes when everyone can work alongside agents using natural language.",title:"See it in action"}),(0,t.jsx)(r,{children:e.map(e=>(0,t.jsx)(o.CustomerGridItem,{isStory:!0,item:e,loudStyle:!0},e.slug??e.name??""))})]})})}])},965396,e=>{"use strict";var t,i,o,a,n=e.i(843476),r=e.i(271645),d=e.i(657688),l=e.i(997053),s=e.i(781016),c=e.i(785191),p=e.i(258591),u=e.i(162517),m=e.i(650617),h=e.i(972378),f=e.i(430388),g=e.i(613938),x=e.i(360571),y=e.i(850034);let w={src:e.i(523318).default,width:1920,height:1080,blurWidth:8,blurHeight:5,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAFAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwC/qOgJodzFBY3cuJx5shk+YllYY9PxocUjRO7sf//Z"},A={src:e.i(962090).default,width:1920,height:1080,blurWidth:8,blurHeight:5,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAFAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDrfFV7cxavpKRyBVZ2VgB1/wA4/Wsqz5VdG9NJ6dz/2Q=="};function b(){return(b=Object.assign.bind()).apply(null,arguments)}let C=function(e){return r.createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",width:60,height:60,fill:"none",viewBox:"0 0 60 60"},e),r.createElement("mask",{id:"abstract-mark-10_svg__a",width:48,height:48,x:-1,y:6,maskUnits:"userSpaceOnUse",style:{maskType:"alpha"}},t||(t=r.createElement("path",{fill:"#D9D9D9",stroke:"currentColor",d:"M23 53c12.703 0 23-10.297 23-23S35.703 7 23 7 0 17.298 0 30s10.298 23 23 23Z","data-color":"primary"}))),i||(i=r.createElement("g",{mask:"url(#abstract-mark-10_svg__a)"},r.createElement("path",{fill:"currentColor",d:"M34 53H17v-1h17zm8.5-5h-34v-1h34zm4.5-5H4v-1h43zm2.5-5h-48v-1h48zm1.5-5H0v-1h51zm1.75-5h-54.5v-1h54.5zM51 23H0v-1h51zm-1.5-5h-48v-1h48zm-3.25-5H4.75v-1h41.5zM41.5 8h-32V7h32zM32 3H19V2h13z","data-color":"primary"}))),o||(o=r.createElement("path",{stroke:"currentColor",d:"M34 7.5c12.426 0 22.5 10.074 22.5 22.5S46.426 52.5 34 52.5 11.5 42.426 11.5 30 21.574 7.5 34 7.5Z","data-color":"secondary"})),a||(a=r.createElement("path",{fill:"currentColor",d:"M56 34a4 4 0 1 0 0-8 4 4 0 0 0 0 8","data-color":"highlight"})))};function v({className:e}){return(0,n.jsx)(S,{className:e,children:(0,n.jsx)(C,{})})}let S=l.default.div.withConfig({displayName:"AbstractMark10__Wrapper",componentId:"sc-a600fb9-0"})`
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
`,j=[{title:"Episode 1: Why conversational analytics is different",description:"Understanding the fundamental shift from traditional BI — with Katie Bauer, Head of Data at Hex.",url:"https://www.youtube.com/embed/1rg5U75kOuk?autoplay=1",image:w},{title:"Episode 2: What it takes to deploy AI analytics in the real world",description:"Practical lessons from helping data teams navigate AI-powered workflows — with Tahlia, Customer Engineer at Hex.",url:"https://www.youtube.com/embed/qgYS6EZ8olo?autoplay=1",image:A}],I=l.default.div.withConfig({displayName:"SectionPodcasts__Wrapper",componentId:"sc-195e872-0"})`
  display: flex;
  align-items: center;
  gap: ${(0,x.generateFluidPxScale)(40,60)};

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    flex-direction: column;
  }

  .info-text {
    min-width: 295px;
  }
`,E=(0,l.default)(c.Card).withConfig({displayName:"SectionPodcasts__PodcastEpisodeCard",componentId:"sc-195e872-1"})`
  padding: 0;
  overflow: hidden;
`,_=(0,l.default)(p.Heading).attrs({renderAs:"h4"}).withConfig({displayName:"SectionPodcasts__StyledHeading",componentId:"sc-195e872-2"})`
  span {
    font-family: 'PP Editorial New', sans-serif;
    font-weight: 200;
    font-style: italic;
    font-size: 1em;
  }
`,N=l.default.div.withConfig({displayName:"SectionPodcasts__MediaWrapper",componentId:"sc-195e872-3"})`
  position: relative;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`,T=l.default.div.withConfig({displayName:"SectionPodcasts__Divider",componentId:"sc-195e872-4"})`
  width: 1px;
  flex: 1 1 auto;
  height: 100%;

  &::after {
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    width: 1px;
    border-left: 1px dashed ${({theme:e})=>e.borderColor.DEFAULT};
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    display: none;
  }
`,$=l.default.div.withConfig({displayName:"SectionPodcasts__PodcastEpisodesWrapper",componentId:"sc-195e872-5"})`
  display: flex;
  gap: 20px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    flex-direction: column;
  }
`,R=l.default.div.withConfig({displayName:"SectionPodcasts__ButtonWrapper",componentId:"sc-195e872-6"})`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 4;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
`,k=l.default.div.withConfig({displayName:"SectionPodcasts__PodcastEpisodeCardContent",componentId:"sc-195e872-7"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 30px;
  width: 100%;
  align-items: flex-start;

  p {
    margin: 0 0 8px;
  }
`;e.s(["SectionPodcasts",0,function(){let[e,t]=(0,r.useState)(!1),[i,o]=(0,r.useState)(""),a=j.find(e=>e.url===i)?.title,l=(0,r.useCallback)(e=>{t(!0),o(e)},[]),c=(0,r.useCallback)(()=>{t(!1),o("")},[]);return(0,n.jsx)(g.BasicPageRow,{topBorder:!0,children:(0,n.jsxs)(I,{children:[(0,n.jsx)(u.InfoText,{description:"Rachel Herrera sits down with the Hex team members who built these frameworks in production. Honest conversations about what worked, what didn't, and the trade-offs nobody talks about. Think HBO companion podcast, but for AI analytics.",icon:(0,n.jsx)(v,{}),size:"small",title:"Beyond the guide: A companion podcast"}),(0,n.jsx)(T,{}),(0,n.jsx)($,{children:j.map(e=>(0,n.jsxs)(E,{effect:"glass",onClick:()=>l(e.url),children:[(0,n.jsxs)(N,{children:[(0,n.jsx)(R,{children:(0,n.jsx)(h.FloatyDarkButton,{icon:(0,n.jsx)(f.PlayIcon,{}),text:"Watch podcast"})}),(0,n.jsx)(d.default,{alt:e.title,src:e.image})]}),(0,n.jsxs)(k,{children:[(0,n.jsx)(_,{renderAs:"h4",children:e.title}),(0,n.jsx)(m.Text,{size:"medium",children:e.description})]})]},e.url))}),(0,n.jsx)(s.FullScreenVideo,{embed:(0,n.jsx)(y.VideoIframe,{allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0,frameBorder:"0",height:"721",referrerPolicy:"strict-origin-when-cross-origin",src:i,title:a||"Hex video",width:"1280"}),isOpen:e,path:"",onClose:c})]})})}],965396)},523318,e=>{e.q("/_next/static/media/ai-analytics-episode-1.2fgue6ctxqsmm.jpg")},962090,e=>{e.q("/_next/static/media/ai-analytics-episode-2.109m7jsl41fqp.jpg")},666541,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(997053),a=e.i(258591),n=e.i(650617);let r=o.default.div.withConfig({displayName:"sharedStyles__Section",componentId:"sc-9d66e7a4-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`,d=o.default.div.withConfig({displayName:"sharedStyles__SectionHeadingWrapper",componentId:"sc-9d66e7a4-1"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
`,l=(0,o.default)(n.Text).withConfig({displayName:"sharedStyles__SectionHeadingDescription",componentId:"sc-9d66e7a4-2"})`
  max-width: 60ch;
  text-wrap: balance;
`,s=i.default.memo(function({description:e,title:i}){return(0,t.jsxs)(d,{children:[(0,t.jsx)(a.Heading,{renderAs:"h2",children:i}),(0,t.jsx)(l,{size:"large",children:e})]})});e.s(["Section",0,r,"SectionHeading",0,s])},480985,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(846932),a=e.i(997053),n=e.i(706736),r=e.i(288839),d=e.i(991709),l=e.i(665419),s=e.i(785191),c=e.i(258591),p=e.i(650617),u=e.i(812488);let m=i.memo(({actions:e,className:o,title:s,copy:c,orientation:p="vertical"})=>{let m=(0,a.useTheme)(),b=(0,r.default)(m.mediaQueryString.SMALL)?"vertical":p;return(0,t.jsxs)(h,{...d.ANIMATIONS.SimpleFadeIn,className:o,children:[(0,t.jsx)(u.TronDivider,{}),(0,t.jsx)(f,{children:(0,t.jsxs)(g,{$orientation:b,children:[(0,t.jsxs)(x,{$orientation:b,children:[(0,t.jsx)(y,{renderAs:"h2",children:s||"Questions? Talk to us"}),(0,t.jsx)(w,{size:"large",children:c||"Get in touch with us to see a demo or find out which plan is right for you."})]}),e?(0,t.jsx)(A,{children:e.map((e,o)=>(0,t.jsx)(i.Fragment,{children:e},o))}):(0,t.jsx)(n.Button,{href:l.INTERNAL_LINKS.RequestADemo,size:"large",stylez:"loud",text:"Contact Sales"})]})})]})});m.displayName="OutroTout";let h=(0,a.default)(o.motion.div).withConfig({displayName:"OutroTout__Wrapper",componentId:"sc-fce71882-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
`,f=(0,a.default)(o.motion.div).withConfig({displayName:"OutroTout__Inner",componentId:"sc-fce71882-1"})`
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
`,g=(0,a.default)(s.Card).withConfig({displayName:"OutroTout__TopCard",componentId:"sc-fce71882-2"})`
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

  ${({$orientation:e})=>"horizontal"===e&&a.css`
      flex-direction: row;
      text-align: left;
      max-width: ${({theme:e})=>e.maxWidth.PAGE};
      width: 100%;
      justify-content: space-between;
    `}
`,x=a.default.div.withConfig({displayName:"OutroTout__TextWrapper",componentId:"sc-fce71882-3"})`
  display: flex;
  flex-direction: column;
  gap: 10px;

  ${({$orientation:e})=>"horizontal"===e&&a.css`
      align-items: flex-start;
    `}
`,y=(0,a.default)(c.Heading).withConfig({displayName:"OutroTout__StyledHeading",componentId:"sc-fce71882-4"})`
  text-wrap: balance;
`,w=(0,a.default)(p.Text).withConfig({displayName:"OutroTout__StyledText",componentId:"sc-fce71882-5"})`
  text-wrap: balance;
`,A=a.default.div.withConfig({displayName:"OutroTout__Actions",componentId:"sc-fce71882-6"})`
  display: flex;
  gap: 15px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MOBILE}) {
    flex-direction: column;
    width: 100%;
  }
`;e.s(["OutroTout",0,m])},972378,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(997053);let a=o.default.div.withConfig({displayName:"FloatyDarkButton__Wrapper",componentId:"sc-151f8156-0"})`
  --radius: 60px;

  cursor: pointer;
  z-index: 2;
  border-radius: var(--radius);
  overflow: hidden;
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 16px;
  padding: 0 calc(0.5 * var(--radius) - 0.5 * 15px);
  gap: 8px;
  color: #ffffff;
  background: ${"color-mix(in srgb, #14141C 88%, transparent)"};
  box-shadow:
    0 0 0 1px ${"rgba(245, 192, 192, 0.3)"},
    0 0 0 1px rgba(0, 0, 0, 0.06),
    0 0 3px rgba(0, 0, 0, 0.16),
    0 5px 10px 0 rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(10px);
  transition: background ${"0.25s cubic-bezier(0.25, 0.1, 0.25, 1)"};

  &:hover {
    background: ${"#14141C"};
  }
`,n=i.memo(function({icon:e,detail:i,text:o,className:n}){return(0,t.jsxs)(a,{className:n,"data-theme":"dark",children:[e,o,i]})});e.s(["FloatyDarkButton",0,n])},613938,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(846932),a=e.i(997053),n=e.i(991709),r=e.i(739876),d=e.i(581444);let l=(0,a.default)(d.LayoutSubgrid).withConfig({displayName:"BasicPageRow__Wrapper",componentId:"sc-811624ad-0"})`
  overflow-x: clip;

  ${({$topBorder:e})=>e&&a.css`
      border-top: 1px solid ${({theme:e})=>(0,r.gridColorSelector)(e,"major")};
    `}
`,s=a.css`
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
  ${s}
`,p=a.default.div.withConfig({displayName:"BasicPageRow__InnerStatic",componentId:"sc-811624ad-2"})`
  ${s}
`,u=(0,a.default)(d.LayoutGridCondensed).withConfig({displayName:"BasicPageRow__StyledLayoutGridCondensed",componentId:"sc-811624ad-3"})`
  position: relative;
`,m=i.memo(function({animateEntrance:e=!0,children:i,fullWidth:o=!1,topBorder:a=!1,className:d,CartesianGridComponent:s}){return(0,t.jsxs)(l,{$topBorder:a,children:[(0,t.jsx)(r.CheckeredMargin,{}),(0,t.jsxs)(u,{className:d,children:[s&&(0,t.jsx)(s,{fadeDirection:"in"}),e?(0,t.jsx)(c,{...n.ANIMATIONS.SimpleFadeIn,$fullWidth:o,children:i}):(0,t.jsx)(p,{$fullWidth:o,children:i})]}),(0,t.jsx)(r.CheckeredMargin,{"data-right":!0})]})});e.s(["BasicPageRow",0,m])},33351,762963,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(997053);e.s(["CARTESIAN_GRID_CELL_SIZE",0,32],762963);let a=o.default.div.withConfig({displayName:"CartesianGrid__UnitGrid",componentId:"sc-18d08754-0"})`
  grid-column: 1 / -1;

  position: absolute;
  inset: 0;
  pointer-events: none;
  mask-image: linear-gradient(
      to right,
      transparent,
      transparent calc(100% - 1px),
      white calc(100% - 1px),
      white
    ),
    linear-gradient(
      to bottom,
      transparent,
      transparent calc(100% - 1px),
      white calc(100% - 1px),
      white
    );
  mask-size: ${({$maskSize:e})=>`${e}px ${e}px`};
  mask-position: bottom center;
`,n=o.default.div.withConfig({displayName:"CartesianGrid__RadialGradient",componentId:"sc-18d08754-1"})`
  position: absolute;
  inset: 0;

  ${({$fadeDirection:e})=>"out"===e?o.css`
          background-image: radial-gradient(
            circle at 50% 50%,
            ${({theme:e})=>e.highlightColor05},
            ${({theme:e})=>e.highlightColor20} 50%
          );
        `:o.css`
          background-image: radial-gradient(
            circle at 50% 50%,
            ${({theme:e})=>e.highlightColor05} 50%,
            ${({theme:e})=>e.highlightColor20}
          );
        `}
`,r=o.default.div.withConfig({displayName:"CartesianGrid__UnitGridMask",componentId:"sc-18d08754-2"})`
  position: absolute;
  inset: 0;
  mask-image: ${()=>{let e=Array.from({length:100},(e,t)=>t/99).map(e=>`rgba(255 255 255 / ${e}) ${85*e+10}%`);return`linear-gradient(to bottom, ${e.join(", ")}, transparent)`}};
  mask-composite: intersect;
`;e.s(["CartesianGrid",0,function({fadeDirection:e="in",maskSize:o=32,className:d}){let l=(0,i.useRef)(null);return(0,t.jsx)(a,{ref:l,$maskSize:o,className:d,children:(0,t.jsx)(r,{children:(0,t.jsx)(n,{$fadeDirection:e})})})}],33351)},718269,658915,e=>{"use strict";var t=e.i(843476),i=e.i(193594),o=e.i(997053),a=e.i(785191),n=e.i(258591),r=e.i(637804);e.i(726497);var d=e.i(778888),l=e.i(709455);let s=e=>{if(!e)return null;switch(e.__typename){case"SanityBlogPost":return`/blog/${e.slug}/`;case"SanityCustomer":return`/customers/${e.slug}/`;case"SanityGatedContent":return`/resources/${e.slug}/`;case"SanityResourceVideo":if(e.externalUrl)return e.externalUrl;return`/resources/video/${e.slug}/`;case"SanityUseCase":return`/templates/${e.categorySlug}/${e.slug}/`;default:return null}},c=e=>{if(!e)return null;switch(e.__typename){case"SanityBlogPost":case"SanityGatedContent":case"SanityResourceVideo":return e.title||null;case"SanityCustomer":return e.name?`Customer story: ${e.name}`:null;case"SanityUseCase":return e.name||null;default:return null}},p=e=>{if(!e)return{type:"External",value:null};let i=c(e)??"Resource thumbnail";switch(e.__typename){case"SanityResourceVideo":return{type:"Video",value:e.imageUrl?(0,t.jsx)("img",{alt:i,src:e.imageUrl}):null};case"SanityBlogPost":return{type:"Blog post",value:e.imageUrl?(0,t.jsx)("img",{alt:i,src:e.imageUrl}):null};case"SanityCustomer":return{type:"Customer story",value:e.imageUrl?(0,t.jsx)("img",{alt:i,src:e.imageUrl}):null};case"SanityGatedContent":return{type:e.typeOfContent&&["eBook","webinar","one-pager"].includes(e.typeOfContent)?e.typeOfContent:"External",value:e.imageUrl?(0,t.jsx)("img",{alt:i,src:e.imageUrl}):null};case"SanityUseCase":return{type:"Use case",value:e.imageUrl?(0,t.jsx)("img",{alt:i,src:e.imageUrl}):null};default:return{type:"External",value:null}}};e.s(["buildInternalResourceMedia",0,p,"buildInternalResourceTitle",0,c,"buildInternalResourceUrl",0,s],658915);let u=o.default.div.withConfig({displayName:"SolutionResourceCard__CardLink",componentId:"sc-4bdd6a2f-0"})`
  display: flex;

  & > a {
    flex: 1 1 auto;
    display: block;
    color: inherit;
    text-decoration: none;
    border-bottom: none;
  }

  & > a:hover {
    text-decoration: none;
    background-color: transparent;
  }
`,m=(0,o.default)(a.Card).withConfig({displayName:"SolutionResourceCard__Wrapper",componentId:"sc-4bdd6a2f-1"})`
  height: 100%;
  padding: 0;
`,h=o.default.div.withConfig({displayName:"SolutionResourceCard__MediaWrapper",componentId:"sc-4bdd6a2f-2"})`
  display: flex;
  width: 100%;
  position: relative;
  padding: 20px;
`,f=o.default.div.withConfig({displayName:"SolutionResourceCard__Illustration",componentId:"sc-4bdd6a2f-3"})`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  inset: 0;
  overflow: hidden;
  opacity: 0.35;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;

  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`,g=o.default.div.withConfig({displayName:"SolutionResourceCard__Image",componentId:"sc-4bdd6a2f-4"})`
  width: 100%;
  aspect-ratio: 16/9;
  background-color: ${({theme:e})=>e.palette.bg300};
  border-radius: 4px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({$accentColor:e})=>e};
  overflow: hidden;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.5);

  img {
    max-width: 100%;
  }
`,x=o.default.span.withConfig({displayName:"SolutionResourceCard__PlaceholderLabel",componentId:"sc-4bdd6a2f-5"})`
  font-size: ${({theme:e})=>e.fontSize.EXTRA_SMALL};
  color: ${({theme:e})=>e.palette.fg800};
`,y=o.default.div.withConfig({displayName:"SolutionResourceCard__Content",componentId:"sc-4bdd6a2f-6"})`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,w=o.default.div.withConfig({displayName:"SolutionResourceCard__ContentType",componentId:"sc-4bdd6a2f-7"})`
  font-size: ${({theme:e})=>e.fontSize.EXTRA_SMALL};
  color: ${({theme:e})=>e.palette.fg1200};
  background-color: ${({theme:e})=>e.palette.bg300};
  border: 1px solid ${({theme:e})=>e.palette.fg800};
  padding: 1px 4px;
  border-radius: 1px;
  align-self: flex-start;
`,A=o.default.div.withConfig({displayName:"SolutionResourceCard__Metadata",componentId:"sc-4bdd6a2f-8"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,b=o.default.div.withConfig({displayName:"SolutionResourceCard__MetadataRow",componentId:"sc-4bdd6a2f-9"})`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  row-gap: 2px;
  font-size: ${({theme:e})=>e.fontSize.EXTRA_SMALL};
  color: ${({theme:e})=>(0,i.rgba)(e.palette.fgLoud,.446)};
`,C=o.default.span.withConfig({displayName:"SolutionResourceCard__SolutionTag",componentId:"sc-4bdd6a2f-10"})`
  color: ${({$color:e})=>e};
`;e.s(["SolutionResourceCard",0,({solutionTypeOverride:e,resource:i})=>{let{title:o,timeToReadwatch:a,solution:v,internalResource:S}=i,j=v.filter(e=>e.slug in l.SOLUTION_ASSETS),I=e&&e in l.SOLUTION_ASSETS?e:j[0]?.slug,E=I?l.SOLUTION_ASSETS[I]:void 0,_=s(S),N=c(S),{type:T,value:$}=p(S);return E&&_?(0,t.jsx)(u,{children:(0,t.jsx)(r.SiteLink,{href:_,children:(0,t.jsxs)(m,{effect:"glass",interactive:!0,children:[(0,t.jsxs)(h,{children:[(0,t.jsx)(f,{children:E.illustration}),(0,t.jsx)(g,{$accentColor:E.fadedColor,children:$??(0,t.jsx)(x,{children:T})})]}),(0,t.jsxs)(y,{children:[(0,t.jsx)(w,{className:d.textStyles.annotation,children:T}),(0,t.jsx)(n.Heading,{renderAs:"h4",children:N||o}),(0,t.jsxs)(A,{children:[(0,t.jsxs)(b,{className:d.textStyles.annotation,children:["Solution/",j.map(e=>(0,t.jsx)(C,{$color:l.SOLUTION_ASSETS[e.slug].color,children:e.name},e.name))]}),a&&(0,t.jsxs)(b,{className:d.textStyles.annotation,children:[a," min"]})]})]})]})})}):null}],718269)},850034,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(53496),a=e.i(656871),n=e.i(627871),r=e.i(35820),d=e.i(182180),l=e.i(472945);let s=["ended","play","timeupdate"];var c=e.i(806406);let p=i.forwardRef(function({src:e="",title:p,...u},m){let h,f=(0,i.useMemo)(()=>(function(e){try{let t=new URL(e,"https://hex.tech"),i="youtube"===(0,a.getVideoProviderFromHostname)(t.hostname);if(!i)return{isYouTube:i,src:e};return t.searchParams.set("enablejsapi","1"),{isYouTube:i,src:t.href}}catch{return{isYouTube:!1,src:e}}})(e),[e]),g=(0,i.useMemo)(()=>(0,n.getVideoMetadata)(e,p),[e,p]),x=(0,c.useYouTubeVideoTracking)(e,p),y=(h=(0,i.useRef)(null),(0,i.useEffect)(()=>{let t=h.current;if(!t)return;let i=!1,o=new Set,a=new URL(e,window.location.href).origin,n=()=>{s.forEach(e=>{t.contentWindow?.postMessage(JSON.stringify({context:"player.js",method:"addEventListener",value:e,version:"0.0.11"}),a)})},c=s=>{if(s.origin!==a||s.source!==t.contentWindow)return;let c=function(e){try{let t="string"==typeof e?JSON.parse(e):e;return"object"==typeof t&&null!==t?t:void 0}catch{return}}(s.data);if(c?.context==="player.js")if("ready"===c.event)n();else if("play"!==c.event||i)if("timeupdate"===c.event){let{duration:t,seconds:i}=c.value??{};if("number"!=typeof t||"number"!=typeof i||t<=0)return;(0,r.getNewVideoProgressThresholds)(i/t*100,o).forEach(t=>{o.add(t),(0,l.trackVideoProgress)(e,t,p)})}else"ended"===c.event&&((0,r.getNewVideoProgressThresholds)(100,o).forEach(t=>{o.add(t),(0,l.trackVideoProgress)(e,t,p)}),i=!1);else i=!0,(0,d.trackVideoPlayed)(e,p)};return t.addEventListener("load",n),window.addEventListener("message",c),()=>{t.removeEventListener("load",n),window.removeEventListener("message",c)}},[p,e]),h),w=f.isYouTube?x:"loom"===g.videoProvider?y:null,A=(0,i.useMemo)(()=>(0,o.combineRefs)(m,w),[m,w]);return(0,t.jsx)("iframe",{...u,ref:A,src:f.src,title:p})});e.s(["VideoIframe",0,p],850034)},429625,e=>{"use strict";var t=e.i(271645),i=e.i(35820),o=e.i(182180),a=e.i(472945);e.s(["useNativeVideoTracking",0,function(e,n,r){let d=(0,t.useRef)(!1),l=(0,t.useRef)(new Set);(0,t.useEffect)(()=>{d.current=!1,l.current.clear()},[e]),(0,t.useEffect)(()=>{d.current=!1},[r]);let s=(0,t.useCallback)(()=>{d.current||(d.current=!0,(0,o.trackVideoPlayed)(e,n))},[n,e]),c=(0,t.useCallback)(t=>{let{currentTime:o,duration:r}=t.currentTarget;!Number.isFinite(r)||r<=0||(0,i.getNewVideoProgressThresholds)(o/r*100,l.current).forEach(t=>{l.current.add(t),(0,a.trackVideoProgress)(e,t,n)})},[n,e]);return{handleEnded:(0,t.useCallback)(()=>{(0,i.getNewVideoProgressThresholds)(100,l.current).forEach(t=>{l.current.add(t),(0,a.trackVideoProgress)(e,t,n)}),d.current=!1},[n,e]),handlePlay:s,handleTimeUpdate:c}}])},806406,e=>{"use strict";let t;var i=e.i(271645),o=e.i(35820),a=e.i(182180),n=e.i(472945);e.s(["useYouTubeVideoTracking",0,function(e,r,d){let l=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let i,d,s=l.current;if(!s)return;let c=!1,p=!1,u=new Set,m=()=>{void 0!==i&&window.clearInterval(i),i=void 0},h=()=>{if(!d)return;let t=d.getDuration();if(!Number.isFinite(t)||t<=0)return;let i=d.getCurrentTime()/t*100;(0,o.getNewVideoProgressThresholds)(i,u).forEach(t=>{u.add(t),(0,n.trackVideoProgress)(e,t,r)})},f=t=>{1===t?(p||(p=!0,(0,a.trackVideoPlayed)(e,r)),void 0===i&&(i=window.setInterval(h,1e3))):(0===t||2===t)&&(h(),m(),0===t&&(p=!1))};return(window.YT?.Player?Promise.resolve(window.YT):t||(t=new Promise(e=>{let t=window.onYouTubeIframeAPIReady;if(window.onYouTubeIframeAPIReady=()=>{t?.(),window.YT&&e(window.YT)},!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')){let e=document.createElement("script");e.src="https://www.youtube.com/iframe_api",document.head.appendChild(e)}}))).then(e=>{c||(d=new e.Player(s,{events:{onReady:()=>f(d?.getPlayerState()??-1),onStateChange:e=>f(e.data)}}))}),()=>{c=!0,m(),d?.destroy()}},[d,r,e]),l}],806406)},53496,e=>{"use strict";e.s(["combineRefs",0,function(...e){return function(t){e.forEach(e=>{if(null!==e){if("function"==typeof e)return void e(t);e.current=t}})}}])},35820,472945,e=>{"use strict";let t=[25,50,75,90];e.s(["getNewVideoProgressThresholds",0,function(e,i){return t.filter(t=>e>=t&&!i.has(t))}],35820);var i=e.i(395967),o=e.i(924837),a=e.i(759609),n=e.i(627871);e.s(["trackVideoProgress",0,function(e,t,r){let d=(0,n.getVideoMetadata)(e,r),l={page_path:(0,a.getCurrentPagePath)(),progress_pct:t,video_id:d.videoId,video_title:d.videoTitle,video_url:d.videoUrl};(0,i.trackRudderstack)(o.TRACKING_EVENTS.VideoProgress,l)}],472945)},539087,e=>{"use strict";var t=e.i(898360);e.s(["DARK_THEME",()=>t.darkTheme])},247984,e=>{"use strict";var t={0:8203,1:8204,2:8205,3:8290,4:8291,5:8288,6:65279,7:8289,8:119155,9:119156,a:119157,b:119158,c:119159,d:119160,e:119161,f:119162},i={0:8203,1:8204,2:8205,3:65279},o={0:String.fromCodePoint(i[0]),1:String.fromCodePoint(i[1]),2:String.fromCodePoint(i[2]),3:String.fromCodePoint(i[3])},a=[,,,,].fill(String.fromCodePoint(i[0])).join("");Object.fromEntries(Object.entries(o).map(e=>[e[1],+e[0]])),Object.fromEntries(Object.entries(t).map(e=>e.reverse()));var n=`${Object.values(t).map(e=>`\\u{${e.toString(16)}}`).join("")}`,r=RegExp(`[${n}]{4,}`,"gu");e.s(["isRecord",0,function(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)},"stegaClean",0,function(e){var t,i;return e&&JSON.parse({cleaned:(t=JSON.stringify(e)).replace(r,""),encoded:(null==(i=t.match(r))?void 0:i[0])||""}.cleaned)},"y",0,function(e,t,i="auto"){return!0===i||"auto"===i&&(!(!Number.isNaN(Number(e))||/[a-z]/i.test(e)&&!/\d+(?:[-:\/]\d+){2}(?:T\d+(?:[-:\/]\d+){1,2}(\.\d+)?Z?)?/.test(e))&&Date.parse(e)||function(e){try{new URL(e,e.startsWith("/")?"https://acme.com":void 0)}catch{return!1}return!0}(e))?e:`${e}${function(e){let t=JSON.stringify(e),i=new TextEncoder().encode(t),n="";for(let e=0;e<i.length;e++){let t=i[e];n+=o[t>>6&3]+o[t>>4&3]+o[t>>2&3]+o[3&t]}return a+n}(t)}`}])}]);