(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,392944,e=>{"use strict";var t=e.i(843476),r=e.i(271645),o=e.i(193594),a=e.i(997053),i=e.i(174080),n=e.i(482847);function s({isHovering:e,isUnlocked:l,progress:c}){let[d,h]=r.useState({x:0,y:0}),[m,p]=r.useState(!1),[u,v]=r.useState(!1),f=e&&!l,g=(0,a.useTheme)().appUI.intent.PRIMARY,x=(0,o.rgba)(g,.25);return(r.useEffect(()=>{if(f)v(!0),requestAnimationFrame(()=>{requestAnimationFrame(()=>{p(!0)})});else{p(!1);let e=setTimeout(()=>{v(!1)},150);return()=>clearTimeout(e)}},[f]),r.useEffect(()=>{let e=e=>{h({x:e.clientX,y:e.clientY})};return window.addEventListener("mousemove",e),()=>window.removeEventListener("mousemove",e)},[]),!u||"u"<typeof document)?null:i.createPortal((0,t.jsx)("div",{className:"scroll-unlock-indicator",style:{position:"fixed",left:d.x,top:d.y,pointerEvents:"none",zIndex:1e5,transform:"translate(-1px, -1px)",opacity:+!!m,transition:"opacity 150ms ease-out"},children:(0,t.jsx)(n.UnlockProgressIndicator,{filledColor:g,progress:c,unfilledColor:x})}),document.body)}let l=r.forwardRef(({children:e,className:r,intentScroll:o=!0,overflowX:a="hidden"},i)=>o?(0,t.jsx)(c,{ref:i,className:r,overflowX:a,children:e}):(0,t.jsx)(d,{children:(0,t.jsx)(m,{ref:i,$overflowX:a,className:r,children:e})}));l.displayName="IntentScrollable2";let c=r.forwardRef(({children:e,className:o,overflowX:a="hidden"},i)=>{let n=r.useRef(null),l=i||n,{isHovering:c,isPulsing:p,isUnlocked:u,progress:v}=function(e){let{unlockTimeMs:t=800,maxVelocity:o=15}=(void 0)??{},[a,i]=r.useState(!1),[n,s]=r.useState(0),[l,c]=r.useState(!1),[d,h]=r.useState(!1),m=r.useRef(!1),p=r.useRef(null),u=r.useRef(0),v=r.useRef([]),f=r.useRef({x:0,y:0,time:0}),g=r.useRef(!1),x=r.useRef(!1),y=r.useRef([]),b=r.useRef({y:0,time:0}),w=r.useRef([]),z=r.useRef(0),C=r.useRef(!1);return r.useEffect(()=>{g.current=a},[a]),r.useEffect(()=>{let r=e.current;if(!r)return;let a=e=>{x.current=!0,window.scrollBy({top:e,behavior:"instant"}),requestAnimationFrame(()=>{x.current=!1})},n=()=>{p.current&&(clearInterval(p.current),p.current=null)},l=()=>{m.current=!0,c(!0);let e=Date.now();f.current={x:0,y:0,time:e},b.current={y:window.scrollY,time:e},z.current=0,v.current=[],y.current=[],w.current=[],C.current=!1,(()=>{if(p.current)return;u.current=0;let e=Date.now();p.current=window.setInterval(()=>{let r,a,l,c=Date.now(),d=c-e;e=c;let m=Math.max((r=v.current,Date.now()-f.current.time>100?0:0===r.length?999:r.reduce((e,t)=>e+t,0)/r.length),(a=y.current,Date.now()-b.current.time>150||0===a.length?0:a.reduce((e,t)=>e+t,0)/a.length),(l=w.current,Date.now()-z.current>150||0===l.length?0:l.reduce((e,t)=>e+t,0)/l.length))<o;m&&!C.current&&(C.current=!0),m&&C.current&&(u.current+=d/t);let p=Math.min(1,u.current);s(p),p>=1&&(n(),i(!0),g.current=!0,h(!0),setTimeout(()=>{h(!1)},400))},16)})()},d=()=>{m.current=!1,n(),i(!1),s(0),c(!1),g.current=!1,u.current=0,v.current=[],y.current=[],w.current=[],C.current=!1},k=e=>{if(!m.current)return;let t=Date.now(),r=f.current,o=t-r.time;if(o>16){let a=e.clientX-r.x,i=e.clientY-r.y,n=Math.sqrt(a*a+i*i);v.current.push(n/o*1e3),v.current.length>5&&v.current.shift(),f.current={x:e.clientX,y:e.clientY,time:t}}},E=e=>{if(!m.current)return;e.preventDefault(),e.stopPropagation();let t=e.deltaY,o=Date.now(),i=o-z.current;if(i>0){let e=Math.abs(t)/Math.max(i,16)*1e3;w.current.push(e),w.current.length>5&&w.current.shift()}if(z.current=o,!g.current)return void a(t);let{clientHeight:n,clientWidth:s,scrollHeight:l,scrollLeft:c,scrollTop:d,scrollWidth:h}=r,p=e.deltaX;(p>0&&c<h-s-1||p<0&&c>0)&&(r.scrollLeft+=p);let u=t>0,v=t<0;u&&d<l-n-1||v&&d>0?r.scrollTop+=t:0!==t&&a(t)},M=()=>{if(x.current)return;let e=Date.now(),t=window.scrollY,r=b.current,o=e-r.time;if(o>0){let e=Math.abs(t-r.y);y.current.push(e/o*1e3),y.current.length>5&&y.current.shift()}b.current={y:t,time:e}};return r.addEventListener("mouseenter",l),r.addEventListener("mouseleave",d),r.addEventListener("mousemove",k),r.addEventListener("wheel",E,{passive:!1}),window.addEventListener("scroll",M,{passive:!0}),()=>{n(),r.removeEventListener("mouseenter",l),r.removeEventListener("mouseleave",d),r.removeEventListener("mousemove",k),r.removeEventListener("wheel",E),window.removeEventListener("scroll",M)}},[e,t,o]),{isHovering:l,isPulsing:d,isUnlocked:a,progress:n}}(l);return(0,t.jsxs)(d,{children:[(0,t.jsx)(m,{ref:l,$overflowX:a,className:o,children:e}),(0,t.jsx)(h,{$isPulsing:p}),(0,t.jsx)(s,{isHovering:c,isUnlocked:u,progress:v})]})});c.displayName="IntentScrollableWithIntent";let d=a.styled.div.withConfig({displayName:"IntentScrollable2__Wrapper",componentId:"sc-7516eae0-0"})`
  position: relative;
  height: 100%;
  width: 100%;
  min-height: 0;
  min-width: 0;
`,h=a.styled.div.withConfig({displayName:"IntentScrollable2__PulseOverlay",componentId:"sc-7516eae0-1"})`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  border-radius: inherit;
  box-shadow:
    inset 0 0 0 1px ${({theme:e})=>e.appUI.intent.PRIMARY},
    inset 0 0 0 5px ${({theme:e})=>(0,o.rgba)(e.appUI.intent.PRIMARY,.25)};
  opacity: ${({$isPulsing:e})=>+!!e};
  transition: opacity 0.15s ease-out;
`,m=a.styled.div.withConfig({displayName:"IntentScrollable2__ScrollContainer",componentId:"sc-7516eae0-2"})`
  overflow-x: ${({$overflowX:e})=>e};
  overflow-y: auto;
  height: 100%;

  /* Custom scrollbar styling - always visible */
  &::-webkit-scrollbar {
    height: 6px;
    width: 6px;
    -webkit-appearance: none; /* Override macOS overlay scrollbar behavior */
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    transition: background 0.2s ease;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.4);
  }

  /* Firefox - always show scrollbar */
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.25) rgba(0, 0, 0, 0.05);
`;e.s(["IntentScrollable2",0,l],392944)},194547,e=>{"use strict";var t=e.i(997053),r=e.i(739876);let o=t.default.div.withConfig({displayName:"InteractiveFeatureWrapper.styles__WindowTitle",componentId:"sc-b5f0eae9-0"})`
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
    background-image: ${({theme:e})=>(0,r.backgroundImageHatched)(e)};
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
`,i=t.default.div.withConfig({displayName:"InteractiveFeatureWrapper.styles__DashedLine",componentId:"sc-b5f0eae9-2"})`
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
`,n=t.default.div.withConfig({displayName:"InteractiveFeatureWrapper.styles__Wrapper",componentId:"sc-b5f0eae9-3"})`
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
`,s=(0,t.default)(n).withConfig({displayName:"InteractiveFeatureWrapper.styles__OuterBrowserWindow",componentId:"sc-b5f0eae9-4"})`
  display: flex;
  flex-direction: column;
  padding: 6px;
  align-items: stretch;
  gap: 7px;
  border-radius: 10px;
  background: ${({theme:e})=>e.appUI.outerBrowserWindow.chromeGradient};
`,l=t.default.div.withConfig({displayName:"InteractiveFeatureWrapper.styles__BrowserWindowToolbar",componentId:"sc-b5f0eae9-5"})`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`,c=t.default.div.withConfig({displayName:"InteractiveFeatureWrapper.styles__BrowserWindowButtons",componentId:"sc-b5f0eae9-6"})`
  display: flex;
  padding: 1px 2px;
  align-items: center;
  gap: 5px;
`,d=t.default.div.withConfig({displayName:"InteractiveFeatureWrapper.styles__TrafficLight",componentId:"sc-b5f0eae9-7"})`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: ${({theme:e})=>e.appUI.outerBrowserWindow.trafficLightButton.border};
  background: ${({theme:e})=>e.appUI.outerBrowserWindow.trafficLightButton.background};
`,h=t.default.div.withConfig({displayName:"InteractiveFeatureWrapper.styles__BrowserWindowTitle",componentId:"sc-b5f0eae9-8"})`
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
`,m=(0,t.default)(n).withConfig({displayName:"InteractiveFeatureWrapper.styles__InnerBrowserWindow",componentId:"sc-b5f0eae9-9"})`
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
`;e.s(["BrowserWindowButtons",0,c,"BrowserWindowTitle",0,h,"BrowserWindowToolbar",0,l,"DashedLine",0,i,"DashedLines",0,a,"InnerBrowserWindow",0,m,"OuterBrowserWindow",0,s,"TrafficLight",0,d,"WindowTitle",0,o,"Wrapper",0,n])},482847,e=>{"use strict";var t=e.i(843476);e.s(["Cursor8BitArrow",0,function({outlineColor:e,shadowColor:r}){let o=[[1,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,0,0,0,0,0,0,0,0,0,0,0],[1,2,1,0,0,0,0,0,0,0,0,0,0],[1,2,2,1,3,0,0,0,0,0,0,0,0],[1,2,2,2,1,3,0,0,0,0,0,0,0],[1,2,2,2,2,1,3,0,0,0,0,0,0],[1,2,2,2,2,2,1,3,0,0,0,0,0],[1,2,2,2,2,2,2,1,3,0,0,0,0],[1,2,2,2,2,2,2,2,1,3,0,0,0],[1,2,2,2,2,2,2,2,2,1,3,0,0],[1,2,2,2,2,2,1,1,1,1,1,3,0],[1,2,2,1,2,2,1,3,3,3,3,3,0],[1,2,1,3,1,2,2,1,3,0,0,0,0],[1,1,3,0,1,2,2,1,3,0,0,0,0],[1,3,0,0,3,1,2,2,1,3,0,0,0],[3,0,0,0,0,1,2,2,1,3,0,0,0],[0,0,0,0,0,3,1,1,3,0,0,0,0],[0,0,0,0,0,0,3,3,0,0,0,0,0]],a=+o[0].length,i=+o.length;return(0,t.jsx)("svg",{height:i,style:{imageRendering:"pixelated"},viewBox:`0 0 ${a} ${i}`,width:a,children:o.map((o,a)=>o.map((o,i)=>{let n;return 0===o?null:(n=1===o?e:2===o?"#FFFFFF":r,(0,t.jsx)("rect",{fill:n,height:1,width:1,x:+i,y:+a},`${i}-${a}`))}))})},"Cursor8BitPointer",0,function({outlineColor:e,shadowColor:r}){let o=[[0,0,0,0,0,1,1,0,0,0,0,0,0,0],[0,0,0,0,1,2,2,1,3,0,0,0,0,0],[0,0,0,0,1,2,2,1,3,0,0,0,0,0],[0,0,0,0,1,2,2,1,3,0,0,0,0,0],[0,0,0,0,1,2,2,1,1,1,0,0,0,0],[0,0,0,0,1,2,2,1,2,2,1,3,0,0],[0,1,1,0,1,2,2,1,2,2,1,1,3,0],[1,2,2,1,1,2,2,1,2,2,1,2,1,3],[1,2,2,2,1,2,2,2,2,2,2,2,1,3],[3,1,2,2,2,2,2,2,2,2,2,2,1,3],[0,3,1,2,2,2,2,2,2,2,2,2,1,3],[0,0,1,2,2,2,2,2,2,2,2,1,3,0],[0,0,3,1,2,2,2,2,2,2,2,1,3,0],[0,0,0,1,2,2,2,2,2,2,1,3,0,0],[0,0,0,3,1,2,2,2,2,2,1,3,0,0],[0,0,0,0,1,2,2,2,2,1,3,0,0,0],[0,0,0,0,3,1,1,1,1,3,0,0,0,0],[0,0,0,0,0,3,3,3,3,0,0,0,0,0]],a=+o[0].length,i=+o.length;return(0,t.jsx)("svg",{height:i,style:{imageRendering:"pixelated"},viewBox:`0 0 ${a} ${i}`,width:a,children:o.map((o,a)=>o.map((o,i)=>{let n;return 0===o?null:(n=1===o?e:2===o?"#FFFFFF":r,(0,t.jsx)("rect",{fill:n,height:1,width:1,x:+i,y:+a},`${i}-${a}`))}))})},"UnlockProgressIndicator",0,function({filledColor:e,unfilledColor:r,progress:o}){let a=Math.floor(10*o);return(0,t.jsxs)("svg",{height:20,style:{position:"absolute",left:14,top:2},viewBox:"0 0 50 20",width:50,children:[(0,t.jsx)("rect",{fill:r,height:20,rx:1,width:6,x:0,y:0}),a>0&&(0,t.jsx)("rect",{fill:e,height:2*a,rx:1,width:6,x:0,y:(10-a)*2}),(0,t.jsx)("text",{fill:e,fontFamily:"system-ui, sans-serif",fontSize:7,fontWeight:600,x:10,y:9,children:"ENABLE"}),(0,t.jsx)("text",{fill:e,fontFamily:"system-ui, sans-serif",fontSize:7,fontWeight:600,x:10,y:17,children:"SCROLL"})]})}])},986740,e=>{"use strict";var t,r,o,a,i,n,s,l,c,d,h,m,p,u,v,f,g,x,y,b,w,z,C,k,E,M,$,I,j,L,D,_,N,F,B,R,U,S,T,W,A,O,H,P,G,V,Y,q,X,Q,Z,K,J,ee,et,er,eo,ea=e.i(843476),ei=e.i(271645),en=e.i(997053);function es(){return(es=Object.assign.bind()).apply(null,arguments)}function el(){return(el=Object.assign.bind()).apply(null,arguments)}function ec(){return(ec=Object.assign.bind()).apply(null,arguments)}function ed(){return(ed=Object.assign.bind()).apply(null,arguments)}function eh(){return(eh=Object.assign.bind()).apply(null,arguments)}function em(){return(em=Object.assign.bind()).apply(null,arguments)}function ep(){return(ep=Object.assign.bind()).apply(null,arguments)}function eu(){return(eu=Object.assign.bind()).apply(null,arguments)}function ev(){return(ev=Object.assign.bind()).apply(null,arguments)}function ef(){return(ef=Object.assign.bind()).apply(null,arguments)}let eg={1:function(e){return ei.createElement("svg",es({xmlns:"http://www.w3.org/2000/svg",width:60,height:60,fill:"none",viewBox:"0 0 60 60"},e),t||(t=ei.createElement("path",{stroke:"currentColor",d:"M3 25.5h55","data-color":"primary"})),r||(r=ei.createElement("path",{stroke:"currentColor",strokeDasharray:"1 2",d:"M11.5 57.36V3","data-color":"primary"})),o||(o=ei.createElement("path",{stroke:"currentColor",d:"M3 36.6h55","data-color":"primary"})),a||(a=ei.createElement("path",{stroke:"currentColor",strokeDasharray:"1 2",d:"M21.5 57.36V3","data-color":"primary"})),i||(i=ei.createElement("circle",{cx:38.357,cy:47.786,r:3.929,fill:"currentColor","data-color":"highlight"})),n||(n=ei.createElement("path",{stroke:"currentColor",d:"M3.5 13.5h44v44h-44z","data-color":"secondary"})))},2:function(e){return ei.createElement("svg",el({xmlns:"http://www.w3.org/2000/svg",width:60,height:60,fill:"none",viewBox:"0 0 60 60"},e),s||(s=ei.createElement("path",{stroke:"currentColor",d:"M.5 16.5h19v19H.5zM34.5 28.5h19v19h-19zM.5 40.5h19v19H.5z","data-color":"secondary"})),l||(l=ei.createElement("path",{stroke:"currentColor",strokeLinecap:"square",d:"M10.532 15.117a8.75 8.75 0 0 1 8.747-8.748h38.793","data-color":"primary"})),c||(c=ei.createElement("path",{stroke:"currentColor",strokeLinecap:"square",d:"M44.406 27.117V13.495a7.126 7.126 0 0 1 7.126-7.126","data-color":"primary"})),d||(d=ei.createElement("circle",{cx:10,cy:26,r:3,fill:"currentColor","data-color":"highlight"})),h||(h=ei.createElement("circle",{cx:10,cy:50,r:3,fill:"currentColor","data-color":"highlight"})),m||(m=ei.createElement("circle",{cx:44,cy:38,r:3,fill:"currentColor","data-color":"highlight"})),p||(p=ei.createElement("path",{stroke:"currentColor",strokeDasharray:"1 4",strokeLinecap:"square",d:"M20.694 50.19a8.135 8.135 0 0 0 8.135-8.136V16.37c0-5.522 4.477-10 10-10h5.135","data-color":"primary"})),u||(u=ei.createElement("path",{fill:"currentColor",d:"M53.817 12v-1.414l4.413-4.412-4.413-4.413V.347l5.828 5.827z","data-color":"primary"})))},3:function(e){return ei.createElement("svg",ec({xmlns:"http://www.w3.org/2000/svg",width:60,height:60,fill:"none",viewBox:"0 0 60 60"},e),v||(v=ei.createElement("path",{fill:"currentColor",d:"M10.186 31h.5v-1h-.5v1m0-.5V30H0v1h10.186z","data-color":"primary"})),f||(f=ei.createElement("path",{stroke:"currentColor",d:"M-.433-.25h27.488v37.605H-.433z","data-color":"secondary",transform:"matrix(-.86603 .5 0 -1 33.863 42.717)"})),g||(g=ei.createElement("path",{stroke:"currentColor",d:"M23.756 30.283 59.5 8M23.756 30.717 59 53M23.756 30.283H59.5","data-color":"primary"})),x||(x=ei.createElement("path",{stroke:"currentColor",strokeDasharray:"1 2",d:"M23.643 30.471 59.5 19.5M23.644 30.269 59.5 42","data-color":"primary"})),y||(y=ei.createElement("circle",{cx:3.929,cy:3.929,r:3.929,fill:"currentColor","data-color":"highlight",transform:"matrix(.86603 -.5 0 1 21.4 28)"})))},4:function(e){return ei.createElement("svg",ed({xmlns:"http://www.w3.org/2000/svg",width:60,height:60,fill:"none",viewBox:"0 0 60 60"},e),b||(b=ei.createElement("circle",{cx:18,cy:15,r:11.5,stroke:"currentColor","data-color":"secondary"})),w||(w=ei.createElement("path",{stroke:"currentColor",d:"M6.5 33.5h21v21h-21zM56.184 54.441H33.462l11.36-19.676z","data-color":"secondary"})),z||(z=ei.createElement("path",{fill:"currentColor",d:"M45.324 15.706v-.5h-1v.5h1m-1 .484v.5h1v-.5h-1m1 3.872v-.5h-1v.5h1m-1 .968v.5h1v-.5h-1m1 3.872v-.5h-1v.5h1m-1 .968v.5h1v-.5h-1m1 3.873v-.5h-1v.5h1m-1 .968v.5h1v-.5h-1m1 3.872v-.5h-1v.5h1m-1 .968v.5h1v-.5h-1m1 3.872v-.5h-1v.5h1m-1 .969v.5h1v-.5h-1m1 3.872v-.5h-1v.5h1m-1 .968v.5h1v-.5h-1m1 3.872v-.5h-1v.5h1m-.5-33.398h-.5v.484h1v-.484zm0 4.356h-.5v.968h1v-.968zm0 4.84h-.5v.968h1v-.968zm0 4.84h-.5v.969h1v-.968zm0 4.841h-.5v.968h1v-.968zm0 4.84h-.5v.969h1v-.969zm0 4.84h-.5v.969h1v-.968zm0 4.841h-.5v.484h1v-.484zm.5-33.398v-.5h-1v.5h1m-1 .484v.5h1v-.5h-1m1 3.872v-.5h-1v.5h1m-1 .968v.5h1v-.5h-1m1 3.872v-.5h-1v.5h1m-1 .968v.5h1v-.5h-1m1 3.873v-.5h-1v.5h1m-1 .968v.5h1v-.5h-1m1 3.872v-.5h-1v.5h1m-1 .968v.5h1v-.5h-1m1 3.872v-.5h-1v.5h1m-1 .969v.5h1v-.5h-1m1 3.872v-.5h-1v.5h1m-1 .968v.5h1v-.5h-1m1 3.872v-.5h-1v.5h1m-.5-33.398h-.5v.484h1v-.484zm0 4.356h-.5v.968h1v-.968zm0 4.84h-.5v.968h1v-.968zm0 4.84h-.5v.969h1v-.968zm0 4.841h-.5v.968h1v-.968zm0 4.84h-.5v.969h1v-.969zm0 4.84h-.5v.969h1v-.968zm0 4.841h-.5v.484h1v-.484zM43.412 16.206h.5v-1h-.5v1m-.523-1h-.5v1h.5v-1m-4.179 1h.5v-1h-.5v1m-1.044-1h-.5v1h.5v-1m-4.18 1h.5v-1h-.5v1m-1.044-1h-.5v1h.5v-1m-4.179 1h.5v-1h-.5v1m-1.044-1h-.5v1h.5v-1m-4.18 1h.5v-1h-.5v1m-1.044-1h-.5v1h.5v-1m-4.179 1h.5v-1h-.5v1m25.596-.5v-.5h-.523v1h.523zm-4.702 0v-.5h-1.044v1h1.044zm-5.223 0v-.5h-1.045v1h1.045zm-5.224 0v-.5H27.22v1h1.044zm-5.223 0v-.5h-1.045v1h1.045zm-5.224 0v-.5h-.522v1h.522zm25.596.5h.5v-1h-.5v1m-.523-1h-.5v1h.5v-1m-4.179 1h.5v-1h-.5v1m-1.044-1h-.5v1h.5v-1m-4.18 1h.5v-1h-.5v1m-1.044-1h-.5v1h.5v-1m-4.179 1h.5v-1h-.5v1m-1.044-1h-.5v1h.5v-1m-4.18 1h.5v-1h-.5v1m-1.044-1h-.5v1h.5v-1m-4.179 1h.5v-1h-.5v1m25.596-.5v-.5h-.523v1h.523zm-4.702 0v-.5h-1.044v1h1.044zm-5.223 0v-.5h-1.045v1h1.045zm-5.224 0v-.5H27.22v1h1.044zm-5.223 0v-.5h-1.045v1h1.045zm-5.224 0v-.5h-.522v1h.522z","data-color":"primary"})),C||(C=ei.createElement("path",{fill:"currentColor",d:"m45.196 15.334.334-.373-.745-.667-.334.373.373.334zM18.36 45.308l.333-.373-.745-.667-.333.373.372.333zm1.972-3.703-.333.373.745.667.333-.373-.372-.333zm1.425-.091.333-.373-.745-.667-.333.372.372.334zm1.972-3.703-.333.373.745.667.333-.373-.372-.333zm1.425-.092.333-.372-.745-.667-.333.372.372.334zm1.972-3.702-.333.372.745.667.333-.372-.372-.334zm1.425-.092.333-.372-.745-.667-.333.372.372.334zm1.972-3.702-.333.372.745.667.333-.372-.372-.334zm1.425-.092.333-.372-.745-.668-.333.373.372.334zm1.972-3.702-.333.372.745.667.334-.372-.373-.334zm1.425-.092.333-.372-.745-.668-.333.373.372.333zm1.973-3.702-.334.372.745.667.334-.372-.373-.334zm1.424-.092.334-.373-.745-.667-.334.373.372.333zm1.973-3.703-.334.373.745.667.334-.372-.373-.334zm1.424-.091.333-.373-.745-.667-.333.373.373.333zm1.973-3.703-.334.373.745.667.334-.373-.373-.333zM17.647 45.353l.373.334.34-.38-.373-.333-.372-.333-.34.379zm3.058-3.414.372.333.68-.758-.373-.334-.372-.334-.68.76zm3.397-3.794.372.333.68-.759-.373-.333-.372-.334-.68.76zm3.397-3.795.372.334.68-.759-.373-.333-.372-.334-.68.759zm3.397-3.794.372.334.68-.759-.373-.333-.372-.334-.68.759zm3.397-3.794.373.334.679-.759-.373-.334-.372-.333-.68.759zm3.397-3.794.373.334.679-.76-.373-.333-.372-.333-.68.759zm3.397-3.794.373.334.679-.76-.373-.333-.372-.333-.68.758zm3.397-3.794.373.333.34-.379-.373-.333-.373-.334-.34.38zm.712-.046.334-.373-.745-.667-.334.373.373.334zM18.36 45.308l.333-.373-.745-.667-.333.373.372.333zm1.972-3.703-.333.373.745.667.333-.373-.372-.333zm1.425-.091.333-.373-.745-.667-.333.372.372.334zm1.972-3.703-.333.373.745.667.333-.373-.372-.333zm1.425-.092.333-.372-.745-.667-.333.372.372.334zm1.972-3.702-.333.372.745.667.333-.372-.372-.334zm1.425-.092.333-.372-.745-.667-.333.372.372.334zm1.972-3.702-.333.372.745.667.333-.372-.372-.334zm1.425-.092.333-.372-.745-.668-.333.373.372.334zm1.972-3.702-.333.372.745.667.334-.372-.373-.334zm1.425-.092.333-.372-.745-.668-.333.373.372.333zm1.973-3.702-.334.372.745.667.334-.372-.373-.334zm1.424-.092.334-.373-.745-.667-.334.373.372.333zm1.973-3.703-.334.373.745.667.334-.372-.373-.334zm1.424-.091.333-.373-.745-.667-.333.373.373.333zm1.973-3.703-.334.373.745.667.334-.373-.373-.333zM17.647 45.353l.373.334.34-.38-.373-.333-.372-.333-.34.379zm3.058-3.414.372.333.68-.758-.373-.334-.372-.334-.68.76zm3.397-3.794.372.333.68-.759-.373-.333-.372-.334-.68.76zm3.397-3.795.372.334.68-.759-.373-.333-.372-.334-.68.759zm3.397-3.794.372.334.68-.759-.373-.333-.372-.334-.68.759zm3.397-3.794.373.334.679-.759-.373-.334-.372-.333-.68.759zm3.397-3.794.373.334.679-.76-.373-.333-.372-.333-.68.759zm3.397-3.794.373.334.679-.76-.373-.333-.372-.333-.68.758zm3.397-3.794.373.333.34-.379-.373-.333-.373-.334-.34.38z","data-color":"primary"})),k||(k=ei.createElement("circle",{cx:44,cy:16,r:4,fill:"currentColor","data-color":"highlight"})))},5:function(e){return ei.createElement("svg",eh({xmlns:"http://www.w3.org/2000/svg",width:60,height:60,fill:"none",viewBox:"0 0 60 60"},e),E||(E=ei.createElement("path",{stroke:"currentColor",d:"M1.5 18.5h47v35h-47z","data-color":"primary"})),M||(M=ei.createElement("path",{stroke:"currentColor",strokeDasharray:"1 4",strokeLinecap:"square",d:"M11.5 6.5h47v35h-47z","data-color":"secondary"})),$||($=ei.createElement("path",{stroke:"currentColor",d:"M41.301 25.9 58.235 6.356","data-color":"secondary"})),I||(I=ei.createElement("circle",{cx:38.707,cy:28.816,r:4.273,fill:"currentColor","data-color":"highlight"})))},6:function(e){return ei.createElement("svg",em({xmlns:"http://www.w3.org/2000/svg",width:60,height:60,fill:"none",viewBox:"0 0 60 60"},e),j||(j=ei.createElement("path",{stroke:"currentColor",d:"M30.118 26.003c5.38 0 9.742 4.362 9.742 9.742s-4.362 9.742-9.742 9.742-9.741-4.362-9.741-9.742 4.36-9.741 9.74-9.742Z","data-color":"secondary"})),L||(L=ei.createElement("path",{stroke:"currentColor",d:"M30.118 16.055c5.38 0 9.742 4.36 9.742 9.74 0 5.381-4.362 9.743-9.742 9.743s-9.741-4.362-9.741-9.742 4.36-9.741 9.74-9.741Z","data-color":"secondary"})),D||(D=ei.createElement("path",{stroke:"currentColor",strokeDasharray:"2 2",d:"m6 44.045 24.17-13.954 24.17 13.954","data-color":"primary",opacity:.3})),_||(_=ei.createElement("path",{stroke:"currentColor",d:"M54.34 16.955 30.17 3 6 16.955M53.905 44.296 30.17 58 6 44.046","data-color":"primary"})),N||(N=ei.createElement("circle",{cx:30.446,cy:30.751,r:2.643,fill:"currentColor","data-color":"highlight"})),F||(F=ei.createElement("path",{stroke:"currentColor",d:"M53.734 44.627V16.876M6.16 44.627V16.876","data-color":"primary"})),B||(B=ei.createElement("path",{stroke:"currentColor",strokeDasharray:"2 2",d:"M29.948 57.181v-9.25M54.364 17.18l-13.015 5.973M19.215 22.822 6.66 16.992","data-color":"primary"})))},7:function(e){return ei.createElement("svg",ep({xmlns:"http://www.w3.org/2000/svg",width:60,height:60,fill:"none",viewBox:"0 0 60 60"},e),R||(R=ei.createElement("path",{stroke:"currentColor",strokeDasharray:"1 1.5",d:"m43.608 50.785 8.398-35.38L.411 22.398","data-color":"primary"})),U||(U=ei.createElement("circle",{cx:51.819,cy:15.629,r:3.515,fill:"currentColor","data-color":"highlight"})),S||(S=ei.createElement("path",{stroke:"currentColor",d:"M.5 22.487h43.074V51.08H.5z","data-color":"secondary"})),T||(T=ei.createElement("path",{stroke:"currentColor",d:"M21.804 31.038c0 3.95-3.703 6.171-6.171 6.171 4.114 0 6.17 3.291 6.17 5.76 0-3.703 3.703-5.76 6.172-5.76-3.88 0-6.171-3.703-6.171-6.17Z","data-color":"primary"})),W||(W=ei.createElement("path",{stroke:"currentColor",strokeDasharray:"1 1.5",d:"M14 22.5V8h45.5v29.5H44","data-color":"primary"})))},8:function(e){return ei.createElement("svg",eu({xmlns:"http://www.w3.org/2000/svg",width:60,height:60,fill:"none",viewBox:"0 0 60 60"},e),A||(A=ei.createElement("path",{stroke:"currentColor",strokeDasharray:"1 1.5",d:"M29.72 30.36c0-5.117.65-9.685-3.028-12.685A16.3 16.3 0 0 0 16.36 14C7.325 14 0 21.325 0 30.36s7.325 16.36 16.36 16.36c3.785 0 7.27-1.286 10.043-3.444","data-color":"primary"})),O||(O=ei.createElement("path",{stroke:"currentColor",strokeDasharray:"1 1.5",d:"M29.72 30.36c0-9.035-4.434-16.36-9.902-16.36-5.47 0-9.902 7.325-9.902 16.36s4.433 16.36 9.902 16.36c1.993 0 3.849-.973 5.403-2.648","data-color":"primary"})),H||(H=ei.createElement("path",{stroke:"currentColor",strokeDasharray:"1 1.5",d:"M29.72 30.36c0-9.035-1.542-16.36-3.444-16.36-1.903 0-3.445 7.325-3.445 16.36s1.542 16.36 3.445 16.36c.51 0 .996-.53 1.432-1.478","data-color":"primary"})),P||(P=ei.createElement("path",{stroke:"currentColor",strokeDasharray:"1 1.5",d:"M29.72 30.36c0-5.117-.651-9.685 3.027-12.685A16.3 16.3 0 0 1 43.08 14c9.035 0 16.36 7.325 16.36 16.36s-7.325 16.36-16.36 16.36c-3.65 0-7.02-1.195-9.742-3.215","data-color":"primary"})),G||(G=ei.createElement("path",{stroke:"currentColor",strokeDasharray:"1 1.5",d:"M29.72 30.36c0-9.035 4.433-16.36 9.902-16.36s9.902 7.325 9.902 16.36-4.434 16.36-9.902 16.36c-1.893 0-3.663-.878-5.166-2.4","data-color":"primary"})),V||(V=ei.createElement("path",{stroke:"currentColor",strokeDasharray:"1 1.5",d:"M29.72 30.36c0-9.035 1.542-16.36 3.444-16.36s3.444 7.325 3.444 16.36-1.542 16.36-3.444 16.36c-.477 0-.93-.46-1.344-1.292","data-color":"primary"})),Y||(Y=ei.createElement("circle",{cx:29.72,cy:30.36,r:2.583,fill:"currentColor","data-color":"highlight"})),q||(q=ei.createElement("path",{stroke:"currentColor",d:"M54.69 30.79 29.72 15.723 3.888 30.791 29.72 45.859z","data-color":"secondary"})))},9:function(e){return ei.createElement("svg",ev({xmlns:"http://www.w3.org/2000/svg",width:60,height:60,fill:"none",viewBox:"0 0 60 60"},e),X||(X=ei.createElement("circle",{cx:39.515,cy:29.875,r:3.515,fill:"currentColor","data-color":"highlight"})),Q||(Q=ei.createElement("path",{fill:"currentColor",d:"M52.333 30.36h.5zM39 43.693v.5zm-17.606 0v-.5h-.134l-.116.067zm-10.394 6h-.5v.866l.75-.433zm0-6.421h.5v-.388l-.375-.096zM1 30.36H.5zm13.333-13.333v-.5zm24.667 0v.5c7.088 0 12.833 5.745 12.833 12.833h1c0-7.64-6.193-13.833-13.833-13.833zM52.333 30.36h-.5c0 7.087-5.745 12.833-12.833 12.833v1c7.64 0 13.833-6.193 13.833-13.833zM39 43.693v-.5H21.394v1H39zm-17.606 0-.25-.433-10.394 6 .25.433.25.433 10.394-6zm-10.394 6h.5v-6.421h-1v6.42zm0-6.421.125-.484C5.59 41.363 1.5 36.338 1.5 30.36h-1c0 6.446 4.41 11.86 10.375 13.396zM1 30.36h.5c0-7.088 5.745-12.833 12.833-12.833v-1C6.693 16.527.5 22.72.5 30.36zm13.333-13.333v.5H39v-1H14.333z","data-color":"secondary"})),Z||(Z=ei.createElement("circle",{cx:39,cy:30.36,r:12.5,stroke:"currentColor","data-color":"primary"})),K||(K=ei.createElement("circle",{cx:39,cy:30.36,r:19.5,stroke:"currentColor",strokeDasharray:"1 1.5","data-color":"primary"})))},10:function(e){return ei.createElement("svg",ef({xmlns:"http://www.w3.org/2000/svg",width:60,height:60,fill:"none",viewBox:"0 0 60 60"},e),J||(J=ei.createElement("path",{fill:"currentColor",d:"M7.996 8h44v1h-44z","data-color":"secondary"})),ee||(ee=ei.createElement("path",{fill:"currentColor",d:"M47.996 12v10h-1v-9h-19v-1zM12.996 47h19v1h-20V38h1z","data-color":"primary"})),et||(et=ei.createElement("path",{fill:"currentColor",d:"M7.996 51h44v1h-44zM51.143 42.854a.5.5 0 0 0 .707 0l3.182-3.182a.5.5 0 1 0-.707-.707l-2.829 2.828-2.828-2.828a.5.5 0 1 0-.707.707zM51.496 8.5h-.5v34h1v-34z","data-color":"secondary"})),er||(er=ei.createElement("path",{fill:"currentColor",d:"M8.861 17.146a.5.5 0 0 0-.707 0l-3.182 3.182a.5.5 0 1 0 .707.707l2.829-2.828 2.828 2.828a.5.5 0 1 0 .707-.707zM8.508 51.5h.5v-34h-1v34z","data-color":"secondary"})),eo||(eo=ei.createElement("path",{fill:"currentColor",d:"M30.704 32.978h-1.21v-1.892l1.254-1.958 1.914-1.518.418-.858.176-1.144-.286-1.166-.66-.77-1.342-.484h-1.342l-1.188.33-.836.682-.264.506-.154.946-1.188-.242.198-1.034.418-.924 1.254-.99L29.428 22h1.782l1.76.682 1.1 1.078.418 1.87-.286 1.54-.572 1.122-1.87 1.518-1.056 1.672zm.418 4.84h-2.046v-2.134h2.046z","data-color":"highlight"})))}},ex=ei.memo(({which:e,className:t})=>{let r=eg[e];return(0,ea.jsx)(ey,{className:t,children:(0,ea.jsx)(r,{})})});ex.displayName="AbstractMark";let ey=en.default.div.withConfig({displayName:"AbstractMark__Wrapper",componentId:"sc-f0ff9068-0"})`
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
`;e.s(["AbstractMark",0,ex],986740)},809132,e=>{"use strict";var t=e.i(997053);let r=t.default.div.withConfig({displayName:"DotGridMask",componentId:"sc-8c154ead-0"})`
  position: absolute;
  inset: 0;
  mask-image: radial-gradient(white, white 1px, transparent 1px, transparent);
  mask-size: 6px 6px;
`;e.s(["DotGridMask",0,r])},21066,e=>{"use strict";var t=e.i(843476),r=e.i(997053),o=e.i(809132);let a={dark:"/images/home-2025/textures/noise-rose-128x128.png",light:"/images/home-2025/textures/noise-eggplant-128x128.png",pink:"/images/home-2025/textures/noise-eggplant-128x128.png"},i={small:256,medium:512,large:1024},n={small:"1s",medium:"500ms",large:"50ms"},s=r.default.div.withConfig({displayName:"PerlinNoise__NoiseTexture",componentId:"sc-3b6e388f-0"})`
  position: absolute;
  inset: 0;
  background-image: ${({theme:e})=>`url(${a[e.name]})`};
  background-size: ${({$size:e})=>`${i[e]}px ${i[e]}px`};
  opacity: 0;
  transition: opacity;
  transition-duration: var(--hover-transition-duration);
  transition-timing-function: var(--hover-transition-timing-function);

  animation: noise 8s linear infinite;
  animation-play-state: paused;

  @keyframes noise {
    from {
      background-position: ${({$size:e})=>`-${i[e]}px -${i[e]}px`};
    }
    to {
      background-position: 0px 0px;
    }
  }
`,l=r.css`
  ${s} {
    opacity: 0.24;
    animation-play-state: running;
  }
`,c=r.default.div.withConfig({displayName:"PerlinNoise__Wrapper",componentId:"sc-3b6e388f-1"})`
  --hover-transition-duration: ${({$size:e})=>n[e]};
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
    ${l}
  }

  @media (hover: hover) {
    &:hover {
      ${l}
    }
  }

  ${({$isRunning:e})=>e&&r.css`
      ${l}
    `}

  @media (prefers-reduced-motion: reduce) {
    ${s} {
      animation: none;
      transition: none;
    }
  }
`;e.s(["PerlinNoise",0,function({className:e,isRunning:r=!1,size:a="medium"}){return(0,t.jsx)(c,{$isRunning:r,$size:a,className:e,children:(0,t.jsx)(o.DotGridMask,{children:(0,t.jsx)(s,{$size:a})})})}])},613938,e=>{"use strict";var t=e.i(843476),r=e.i(271645),o=e.i(846932),a=e.i(997053),i=e.i(991709),n=e.i(739876),s=e.i(581444);let l=(0,a.default)(s.LayoutSubgrid).withConfig({displayName:"BasicPageRow__Wrapper",componentId:"sc-811624ad-0"})`
  overflow-x: clip;

  ${({$topBorder:e})=>e&&a.css`
      border-top: 1px solid ${({theme:e})=>(0,n.gridColorSelector)(e,"major")};
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
`,h=a.default.div.withConfig({displayName:"BasicPageRow__InnerStatic",componentId:"sc-811624ad-2"})`
  ${c}
`,m=(0,a.default)(s.LayoutGridCondensed).withConfig({displayName:"BasicPageRow__StyledLayoutGridCondensed",componentId:"sc-811624ad-3"})`
  position: relative;
`,p=r.memo(function({animateEntrance:e=!0,children:r,fullWidth:o=!1,topBorder:a=!1,className:s,CartesianGridComponent:c}){return(0,t.jsxs)(l,{$topBorder:a,children:[(0,t.jsx)(n.CheckeredMargin,{}),(0,t.jsxs)(m,{className:s,children:[c&&(0,t.jsx)(c,{fadeDirection:"in"}),e?(0,t.jsx)(d,{...i.ANIMATIONS.SimpleFadeIn,$fullWidth:o,children:r}):(0,t.jsx)(h,{$fullWidth:o,children:r})]}),(0,t.jsx)(n.CheckeredMargin,{"data-right":!0})]})});e.s(["BasicPageRow",0,p])},33351,762963,e=>{"use strict";var t=e.i(843476),r=e.i(271645),o=e.i(997053);e.s(["CARTESIAN_GRID_CELL_SIZE",0,32],762963);let a=o.default.div.withConfig({displayName:"CartesianGrid__UnitGrid",componentId:"sc-18d08754-0"})`
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
`,i=o.default.div.withConfig({displayName:"CartesianGrid__RadialGradient",componentId:"sc-18d08754-1"})`
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
`,n=o.default.div.withConfig({displayName:"CartesianGrid__UnitGridMask",componentId:"sc-18d08754-2"})`
  position: absolute;
  inset: 0;
  mask-image: ${()=>{let e=Array.from({length:100},(e,t)=>t/99).map(e=>`rgba(255 255 255 / ${e}) ${85*e+10}%`);return`linear-gradient(to bottom, ${e.join(", ")}, transparent)`}};
  mask-composite: intersect;
`;e.s(["CartesianGrid",0,function({fadeDirection:e="in",maskSize:o=32,className:s}){let l=(0,r.useRef)(null);return(0,t.jsx)(a,{ref:l,$maskSize:o,className:s,children:(0,t.jsx)(n,{children:(0,t.jsx)(i,{$fadeDirection:e})})})}],33351)},998990,e=>{"use strict";e.s(["CUSTOMER_LOGOS_HOSTED",0,{Algolia:"https://cdn.sanity.io/images/e92memrj/production/643fb40019cd60627bf6f354c5bffdfd66017ce9-97x51.svg",Brex:"https://cdn.sanity.io/images/e92memrj/production/797daac5d8ce0c8f853f32db64dddf44234caf15-110x50.svg",Candidly:"https://cdn.sanity.io/images/e92memrj/production/5fb6f6dd0ff002808f2382c81a66cd28410a4ac9-166x50.svg",Chime:"https://cdn.sanity.io/images/e92memrj/production/20bf8a6fe0ca725b28527c135c22f237938f5ef5-94x50.svg",ClickUp:"https://cdn.sanity.io/images/e92memrj/production/8ec37f2330ffd132be12ea66bad243453af0d047-119x50.svg",CustomerIO:"https://cdn.sanity.io/images/e92memrj/production/fc46557c4677964c57351c9affa635d558fe8cd8-170x40.svg",Doximity:"https://cdn.sanity.io/images/e92memrj/production/17b8982db750bfc51b7aa08783c5e1f8d3432d63-125x50.svg",Figma:"https://cdn.sanity.io/images/e92memrj/production/f7df402cfb3dac549c3f877c09425534abc7650b-97x50.svg",Huckberry:"https://cdn.sanity.io/images/e92memrj/production/8194d2de15059f3f69d4fb8dbc03b2f7bfb04af4-134x50.svg",InfiniteLambda:"https://cdn.sanity.io/images/e92memrj/production/638503884c2ca511d9816fc46d5d13f05551bd26-110x50.svg",Inventa:"https://cdn.sanity.io/images/e92memrj/production/2b33cd7f123f50efbd8ea42ea9235382e207633e-132x50.svg",LangChain:"https://cdn.sanity.io/images/e92memrj/production/0b907ba3d40fe1012f1118d105620c7779a49949-135x50.svg",Lovable:"https://cdn.sanity.io/images/e92memrj/production/d063f2a64adcd7869bc2fc81dbc971825be8b951-137x50.svg",MedScout:"https://cdn.sanity.io/images/e92memrj/production/ab190c6c708ad1b738c3dd93e3c9d64718788935-168x50.svg",Mercor:"https://cdn.sanity.io/images/e92memrj/production/92b9cd2232a417db021ffe38f96d45a896e85cba-131x50.svg",NeoFinancial:"https://cdn.sanity.io/images/e92memrj/production/ba0c09ff2b2ba796246ce69e4e971751bccaae37-76x50.svg",Notion:"https://cdn.sanity.io/images/e92memrj/production/6f211c674b14be69b85497264b1d654b138dce01-39x50.svg",PandaDoc:"https://cdn.sanity.io/images/e92memrj/production/728e1e88c0a31f218d18971d3e9da2de81bad906-120x50.svg",ProductHunt:"https://cdn.sanity.io/images/e92memrj/production/0334d3583cd66c0361cd0c3b1bd28d92307cf01a-126x50.svg",Ramp:"https://cdn.sanity.io/images/e92memrj/production/892932e7f3dc3c66d3ae4a16e8bc51e37b7f59f4-120x50.svg",StubHub:"https://cdn.sanity.io/images/e92memrj/production/84cee8330df6df867d752ef0336d987b73845add-81x50.svg",WeightsAndBiases:"https://cdn.sanity.io/images/e92memrj/production/1eaf4b79b17b9f39d479a6cca9f8b60e06105d44-169x50.svg",Zoe:"https://cdn.sanity.io/images/e92memrj/production/ac4cbae3f4b1d599f5d51d290bd183be0b16253a-114x50.svg"}])}]);