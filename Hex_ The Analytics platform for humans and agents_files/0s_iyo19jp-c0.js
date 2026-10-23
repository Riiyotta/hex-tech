(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,296436,e=>{e.v(t=>Promise.all(["static/chunks/3m1bcb90s3oz8.js"].map(t=>e.l(t))).then(()=>t(416694)))},32130,e=>{"use strict";var t=e.i(843476),i=e.i(271645),r=e.i(997053),n=e.i(430388),a=e.i(637804),o=e.i(154213);let s=r.default.div.withConfig({displayName:"GridItem__LearnMore",componentId:"sc-e99cb846-0"})`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-end;
  margin-top: auto;
  padding: 0 10px 10px;
  opacity: 0.4;
  color: ${({theme:e})=>e.highlightColor};
  transition: opacity
    ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`};

  span {
    font-family: ${({theme:e})=>e.fontFamily.MONO};
    font-size: ${({theme:e})=>e.fontSize.SMALL};
    font-weight: ${({theme:e})=>e.fontWeight.BOLD};
    text-transform: uppercase;
    line-height: 11px;
    opacity: 0;
    transition: opacity
      ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`};
  }
`,l=r.css`
  display: flex;
  flex: 1 1 0;
  padding: 0;
  position: relative;
  cursor: pointer;
  box-shadow: 0 0 0 1px transparent;
  border: none;

  transition:
    box-shadow
      ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`},
    background-color
      ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`};

  ${({$showBkgGradient:e})=>e&&r.css`
      &::before {
        content: '';
        top: 0;
        left: 0;
        right: 0;
        position: absolute;
        height: 165px;
        background: linear-gradient(
          349deg,
          transparent 30%,
          rgba(157, 123, 138, 0.822275) 92%
        );
      }
    `}

  &::after {
    content: '';
    background: ${({theme:e})=>e.highlightColor};
    opacity: 0.05;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    transition: opacity
      ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`};
  }

  &:hover {
    background: transparent;
    box-shadow: 0 0 0 1px ${({theme:e})=>e.highlightColor30};

    &::after {
      opacity: 0.1;
    }

    ${s} {
      opacity: 1;

      > span {
        opacity: 1;
      }
    }
  }

  &:active {
    box-shadow: 0 0 0 1px ${({theme:e})=>e.highlightColor40};

    &::after {
      opacity: 0.4;
    }
  }
`,d=r.default.div.withConfig({displayName:"GridItem__DivWrapper",componentId:"sc-e99cb846-1"})`
  ${l}
`,c=(0,r.default)(a.SiteLink).withConfig({displayName:"GridItem__LinkWrapper",componentId:"sc-e99cb846-2"})`
  ${l}
`,u=r.default.div.withConfig({displayName:"GridItem__Inner",componentId:"sc-e99cb846-3"})`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
`,h=i.memo(({showBkgGradient:e=!1,showLearnMore:i=!0,to:r,isExternal:a=!1,DANGEROUS_AS_DIV:l=!1,children:h,className:m,trackingLabel:p})=>{let f=(0,t.jsxs)(u,{children:[h,i&&(0,t.jsxs)(s,{children:[(0,t.jsx)("span",{children:"Learn more"}),(0,t.jsx)(n.ArrowRightIcon,{})]})]});return l?(0,t.jsx)(d,{$showBkgGradient:e,className:m,"data-tracking-label":p,onClick:e=>{let t=!1;if(e.target instanceof Element){let i=e.target.closest("a");t=e.currentTarget.contains(i)}t||((0,o.logTracking)({href:r,children:h,label:p}),window.open(r,"_blank","noopener noreferrer"))},children:f}):(0,t.jsx)(c,{$showBkgGradient:e,className:m,href:r,trackingLabel:p,...a?{rel:"noopener noreferrer",target:"_blank"}:{},children:f})});h.displayName="GridItem",e.s(["GridItem",0,h])},20519,e=>{e.v({blinkCursor:"TypingText-module__fK2PPG__blinkCursor",cursor:"TypingText-module__fK2PPG__cursor",cursorBlinking:"TypingText-module__fK2PPG__cursorBlinking",visibleText:"TypingText-module__fK2PPG__visibleText",withCursor:"TypingText-module__fK2PPG__withCursor"})},33236,e=>{"use strict";var t=e.i(843476),i=e.i(271645),r=e.i(343794),n=e.i(288839),a=e.i(20519);let o=new Intl.Segmenter(void 0,{granularity:"grapheme"});e.s(["TypingText",0,function({cursor:e="hidden",onComplete:s,startAnimation:l=!0,text:d,wordsPerMinute:c}){let u,h,m,p=(0,n.default)("(prefers-reduced-motion: reduce)"),f=(0,i.useRef)(s);(0,i.useEffect)(()=>{f.current=s},[s]);let g=(0,i.useMemo)(()=>Array.from(o.segment(d),({segment:e})=>e),[d]),x=(u=100,h=!1,m=-1,g.map(e=>{if(/\s/u.test(e))return h=!1,u;if(!h){m+=1,h=!0;let e=c?.[m];void 0!==e&&Number.isFinite(e)&&e>0&&(u=e)}return u})),[$,w]=(0,i.useState)({startAnimation:l,text:d,visibleGraphemeCount:0}),v=$.startAnimation===l&&$.text===d;v||w({startAnimation:l,text:d,visibleGraphemeCount:0});let y=v?$.visibleGraphemeCount:0,b=6e4/((x[y]??100)*5),_=(0,i.useRef)({hasCompleted:!1,startAnimation:l,text:d});(0,i.useEffect)(()=>{if(!l||p||y>=g.length)return;let e=window.setTimeout(()=>{w(e=>({startAnimation:l,text:d,visibleGraphemeCount:e.startAnimation===l&&e.text===d?e.visibleGraphemeCount+1:1}))},b);return()=>{window.clearTimeout(e)}},[g.length,b,p,l,d,y]),(0,i.useEffect)(()=>{let e;if((_.current.startAnimation!==l||_.current.text!==d)&&(_.current={hasCompleted:!1,startAnimation:l,text:d}),!(l&&(p||y>=g.length))||_.current.hasCompleted)return;_.current.hasCompleted=!0;let t=window.requestAnimationFrame(()=>{e=window.requestAnimationFrame(()=>{f.current?.()})});return()=>{window.cancelAnimationFrame(t),void 0!==e&&window.cancelAnimationFrame(e)}},[g.length,p,l,d,y]);let C=p?d:l?g.slice(0,y).join(""):"",T=p||y>=g.length,I="hidden"!==e&&(p||l)&&("persistent"===e||!T);return"hidden"===e?(0,t.jsx)(t.Fragment,{children:C}):(0,t.jsxs)("span",{className:a.default.withCursor,children:[(0,t.jsx)("span",{className:a.default.visibleText,children:C}),I?(0,t.jsx)("span",{"aria-hidden":"true",className:(0,r.default)(a.default.cursor,{[a.default.cursorBlinking]:T})}):null]})}])},992527,517469,e=>{"use strict";var t=e.i(843476),i=e.i(846932),r=e.i(958866),n=e.i(772328),a=e.i(997053);let o=Array.from({length:8},(e,t)=>({i:t,p:t/7,r:(0,r.transform)(t/7,[0,1],[.86,1]),v:(t+1)*.6180339887498949%1})),s=a.default.svg.withConfig({displayName:"CycleArrows__Svg",componentId:"sc-2c85273f-0"})`
  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    height: 320px;
    width: 320px;
  }
`,l=a.default.marker.withConfig({displayName:"CycleArrows__Marker",componentId:"sc-2c85273f-1"})`
  stroke-width: 1;
  stroke: ${({theme:e})=>e.palette.fg1000};
`,d=a.default.path.withConfig({displayName:"CycleArrows__Path",componentId:"sc-2c85273f-2"})`
  stroke: ${({theme:e})=>e.palette.fg800};
`;e.s(["CycleArrows",0,function({className:e}){let a=(0,n.useReducedMotion)();return(0,t.jsxs)(s,{className:e,height:560,viewBox:"0 0 560 560",width:560,xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("defs",{children:(0,t.jsx)(l,{fill:"none",id:"arrow",markerHeight:"6",markerWidth:"6",orient:"auto-start-reverse",refX:"5",refY:"5",viewBox:"0 0 10 10",children:(0,t.jsx)("path",{d:"M 0 0 L 10 5 L 0 10 z"})})}),o.map(e=>{var n;let o,s=(0,r.transform)(e.v,[0,1],[12,18]);return(0,t.jsx)(d,{animate:a?{pathLength:.15,rotate:360*e.p}:{pathLength:[.05,.15],rotate:[0,360]},as:i.motion.path,d:(n=260*e.r,o=2*Math.PI,`
    M ${Math.cos(0*o)*n+280} ${Math.sin(0*o)*n+280}
    A ${n},${n} 0 1 0 ${Math.cos(.25*o)*n+280} ${Math.sin(.25*o)*n+280}
  `),fill:"none",markerStart:"url(#arrow)",strokeWidth:"1",transition:a?{duration:0}:{duration:(0,r.transform)(e.v,[0,1],[15,20]),repeat:1/0,repeatType:"reverse",ease:"linear",delay:-1*e.v,rotate:{duration:s,repeat:1/0,ease:"linear",delay:-e.p*s}}},e.i)})]})}],992527);var c=e.i(271645);let u=a.default.text.withConfig({displayName:"TextOnPath__Text",componentId:"sc-d82eee7d-0"})`
  font-family: ${({theme:e})=>e.fontFamily.MONO_ALT};
  font-size: ${({theme:e})=>e.fontSize.EXTRA_SMALL};
  text-transform: uppercase;
  fill: ${({theme:e})=>e.fontColor.DEFAULT};
`,h=(0,c.createContext)({id:"",idReverse:""});e.s(["TextOnPath",0,function({diameter:e=600,children:i,className:r}){let n=(0,c.useId)(),a=n+"-reverse",o=.5*e-20,s=e/2,l=e/2;return(0,t.jsx)(h.Provider,{value:{id:n,idReverse:a},children:(0,t.jsxs)("svg",{className:r,height:e,viewBox:`0 0 ${e} ${e}`,width:e,children:[(0,t.jsxs)("defs",{children:[(0,t.jsx)("path",{d:`
              M ${s},${l}
              m ${o}, 0
              a ${o},${o} 0 1,1 -${2*o},0
              a ${o},${o} 0 1,1  ${2*o},0`,id:a}),(0,t.jsx)("path",{d:`
              M ${s},${l}
              m ${o}, 0
              a ${o},${o} 0 1,0 -${2*o},0
              a ${o},${o} 0 1,0  ${2*o},0`,id:n})]}),(0,t.jsx)(u,{children:i})]})})},"TextPath",0,function(e){let{id:i,idReverse:r}=(0,c.useContext)(h),{reverse:n,...a}=e;return(0,t.jsx)("textPath",{...a,href:`#${n?r:i}`})}],517469)},772328,e=>{"use strict";e.i(247167);var t=e.i(571164),i=e.i(138544),r=e.i(271645);e.s(["useReducedMotion",0,function(){t.hasReducedMotionListener.current||(0,i.initPrefersReducedMotion)();let[e]=(0,r.useState)(t.prefersReducedMotion.current);return e}])},387652,e=>{"use strict";var t=e.i(271645),i=e.i(749652);let r={some:0,all:1};e.s(["useInView",0,function(e,{root:n,margin:a,amount:o,once:s=!1,initial:l=!1}={}){let[d,c]=(0,t.useState)(l);return(0,t.useEffect)(()=>{if(!e.current||s&&d)return;let t={root:n&&n.current||void 0,margin:a,amount:o};return function(e,t,{root:n,margin:a,amount:o="some"}={}){let s=(0,i.resolveElements)(e),l=new WeakMap,d=new IntersectionObserver(e=>{e.forEach(e=>{let i=l.get(e.target);if(!!i!==e.isIntersecting)if(e.isIntersecting){let i=t(e.target,e);"function"==typeof i?l.set(e.target,i):d.unobserve(e.target)}else"function"==typeof i&&(i(e),l.delete(e.target))})},{root:n,rootMargin:a,threshold:"number"==typeof o?o:r[o]});return s.forEach(e=>d.observe(e)),()=>d.disconnect()}(e.current,()=>(c(!0),s?void 0:()=>c(!1)),t)},[n,e,a,s,o]),d}],387652)}]);