(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,165425,433768,e=>{"use strict";let o,r;var t=e.i(843476),i=e.i(271645);function a(e,o,r){(0,i.useInsertionEffect)(()=>e.on(o,r),[e,o,r])}e.s(["useMotionValueEvent",0,a],433768);var n=e.i(486427),l=e.i(965566),s=e.i(260830),g=e.i(287022);function p(e,o){let r,t=()=>{let{currentTime:t}=o,i=(null===t?0:t.value)/100;r!==i&&e(i),r=i};return g.frame.preUpdate(t,!0),()=>(0,g.cancelFrame)(t)}var c=e.i(930551),h=e.i(889026),d=e.i(749652);let f=new WeakMap,u=(e,o,r)=>(t,i)=>i&&i[0]?i[0][e+"Size"]:(0,h.isSVGElement)(t)&&"getBBox"in t?t.getBBox()[o]:t[r],x=u("inline","width","offsetWidth"),b=u("block","height","offsetHeight");function m({target:e,borderBoxSize:o}){f.get(e)?.forEach(r=>{r(e,{get width(){return x(e,o)},get height(){return b(e,o)}})})}function v(e){e.forEach(m)}let C=new Set;var $=e.i(783920),y=e.i(325791);let E=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),L={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function A(e,o,r,t){let i=r[o],{length:a,position:n}=L[o],l=i.current,s=r.time;i.current=e[`scroll${n}`],i.scrollLength=e[`scroll${a}`]-e[`client${a}`],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=(0,$.progress)(0,i.scrollLength,i.current);let g=t-s;i.velocity=g>50?0:(0,y.velocityPerSecond)(i.current-l,g)}var T=e.i(344230),U=e.i(515923),k=e.i(476959),S=e.i(772846);let D={start:0,center:.5,end:1};function w(e,o,r=0){let t=0;if(e in D&&(e=D[e]),"string"==typeof e){let o=parseFloat(e);e.endsWith("px")?t=o:e.endsWith("%")?e=o/100:e.endsWith("vw")?t=o/100*document.documentElement.clientWidth:e.endsWith("vh")?t=o/100*document.documentElement.clientHeight:e=o}return"number"==typeof e&&(t=o*e),r+t}let M=[0,0],I=[[0,0],[1,1]],F={x:0,y:0},B=new WeakMap,z=new WeakMap,H=new WeakMap,O=new WeakMap,W=new WeakMap,R=e=>e===document.scrollingElement?window:e;function N(e,{container:t=document.scrollingElement,trackContentSize:i=!1,...a}={}){if(!t)return s.noop;let n=H.get(t);n||(n=new Set,H.set(t,n));let l=function(e,o,r,t={}){return{measure:o=>{!function(e,o=e,r){if(r.x.targetOffset=0,r.y.targetOffset=0,o!==e){let t=o;for(;t&&t!==e;)r.x.targetOffset+=t.offsetLeft,r.y.targetOffset+=t.offsetTop,t=t.offsetParent}r.x.targetLength=o===e?o.scrollWidth:o.clientWidth,r.y.targetLength=o===e?o.scrollHeight:o.clientHeight,r.x.containerLength=e.clientWidth,r.y.containerLength=e.clientHeight}(e,t.target,r),A(e,"x",r,o),A(e,"y",r,o),r.time=o,(t.offset||t.target)&&function(e,o,r){let{offset:t=I}=r,{target:i=e,axis:a="y"}=r,n="y"===a?"height":"width",l=i!==e?function(e,o){let r={x:0,y:0},t=e;for(;t&&t!==o;)if((0,S.isHTMLElement)(t))r.x+=t.offsetLeft,r.y+=t.offsetTop,t=t.offsetParent;else if("svg"===t.tagName){let e=t.getBoundingClientRect(),o=(t=t.parentElement).getBoundingClientRect();r.x+=e.left-o.left,r.y+=e.top-o.top}else if(t instanceof SVGGraphicsElement){let{x:e,y:o}=t.getBBox();r.x+=e,r.y+=o;let i=null,a=t.parentNode;for(;!i;)"svg"===a.tagName&&(i=a),a=t.parentNode;t=i}else break;return r}(i,e):F,s=i===e?{width:e.scrollWidth,height:e.scrollHeight}:"getBBox"in i&&"svg"!==i.tagName?i.getBBox():{width:i.clientWidth,height:i.clientHeight},g={width:e.clientWidth,height:e.clientHeight};o[a].offset.length=0;let p=!o[a].interpolate,c=t.length;for(let e=0;e<c;e++){let r=function(e,o,r,t){let i=Array.isArray(e)?e:M,a=0;return"number"==typeof e?i=[e,e]:"string"==typeof e&&(i=(e=e.trim()).includes(" ")?e.split(" "):[e,D[e]?e:"0"]),(a=w(i[0],r,t))-w(i[1],o)}(t[e],g[n],s[n],l[a]);p||r===o[a].interpolatorOffsets[e]||(p=!0),o[a].offset[e]=r}p&&(o[a].interpolate=(0,T.interpolate)(o[a].offset,(0,U.defaultOffset)(t),{clamp:!1}),o[a].interpolatorOffsets=[...o[a].offset]),o[a].progress=(0,k.clamp)(0,1,o[a].interpolate(o[a].current))}(e,r,t)},notify:()=>o(r)}}(t,e,{time:0,x:E(),y:E()},a);if(n.add(l),!B.has(t)){let e,i=()=>{for(let e of n)e.measure(g.frameData.timestamp);g.frame.preUpdate(a)},a=()=>{for(let e of n)e.notify()},l=()=>g.frame.read(i);B.set(t,l);let s=R(t);window.addEventListener("resize",l,{passive:!0}),t!==document.documentElement&&z.set(t,"function"==typeof t?(C.add(t),r||(r=()=>{let e={get width(){return window.innerWidth},get height(){return window.innerHeight}};C.forEach(o=>o(e))},window.addEventListener("resize",r)),()=>{C.delete(t),C.size||"function"!=typeof r||(window.removeEventListener("resize",r),r=void 0)}):(!o&&"u">typeof ResizeObserver&&(o=new ResizeObserver(v)),(e=(0,d.resolveElements)(t)).forEach(e=>{let r=f.get(e);r||(r=new Set,f.set(e,r)),r.add(l),o?.observe(e)}),()=>{e.forEach(e=>{let r=f.get(e);r?.delete(l),r?.size||o?.unobserve(e)})})),s.addEventListener("scroll",l,{passive:!0}),l()}if(i&&!W.has(t)){let e=B.get(t),o={width:t.scrollWidth,height:t.scrollHeight};O.set(t,o);let r=g.frame.read(()=>{let r=t.scrollWidth,i=t.scrollHeight;(o.width!==r||o.height!==i)&&(e(),o.width=r,o.height=i)},!0);W.set(t,r)}let p=B.get(t);return g.frame.read(p,!1,!0),()=>{(0,g.cancelFrame)(p);let e=H.get(t);if(!e||(e.delete(l),e.size))return;let o=B.get(t);B.delete(t),o&&(R(t).removeEventListener("scroll",o),z.get(t)?.(),window.removeEventListener("resize",o));let r=W.get(t);r&&((0,g.cancelFrame)(r),W.delete(t)),O.delete(t)}}let G=new Map;function P({source:e,container:o,...r}){var t;let i,a,{axis:n}=r;e&&(o=e);let l=G.get(o)??new Map;G.set(o,l);let s=r.target??"self",g=l.get(s)??{},p=n+(r.offset??[]).join(",");return g[p]||(g[p]=!r.target&&(0,c.supportsScrollTimeline)()?new ScrollTimeline({source:o,axis:n}):(t={container:o,...r},i={value:0},a=N(e=>{i.value=100*e[t.axis].progress},t),{currentTime:i,cancel:a})),g[p]}var Q=e.i(947414),V=e.i(674008);let j=()=>({scrollX:(0,n.motionValue)(0),scrollY:(0,n.motionValue)(0),scrollXProgress:(0,n.motionValue)(0),scrollYProgress:(0,n.motionValue)(0)}),K=e=>!!e&&!e.current;var _=e.i(591994);let X=(0,i.createContext)(null),Y=(0,i.createContext)(null);e.s(["HeaderUIProvider",0,function(e){let[o,r]=(0,i.useState)(!1),[n,g]=(0,i.useState)(!0),{scrollY:c}=function({container:e,target:o,...r}={}){let t=(0,Q.useConstant)(j),a=(0,i.useRef)(null),n=(0,i.useRef)(!1),g=(0,i.useCallback)(()=>(a.current=function(e,{axis:o="y",container:r=document.scrollingElement,...t}={}){var i,a;let n;if(!r)return s.noop;let l={axis:o,container:r,...t};return"function"==typeof e?(i=e,a=l,2===i.length?N(e=>{i(e[a.axis].progress,e)},a):p(i,P(a))):(n=P(l),e.attachTimeline({timeline:l.target?void 0:n,observe:e=>(e.pause(),p(o=>{e.time=e.iterationDuration*o},n))}))}((e,{x:o,y:r})=>{t.scrollX.set(o.current),t.scrollXProgress.set(o.progress),t.scrollY.set(r.current),t.scrollYProgress.set(r.progress)},{...r,container:e?.current||void 0,target:o?.current||void 0}),()=>{a.current?.()}),[e,o,JSON.stringify(r.offset)]);return(0,V.useIsomorphicLayoutEffect)(()=>{if(n.current=!1,!(K(e)||K(o)))return g();n.current=!0},[g]),(0,i.useEffect)(()=>n.current?((0,l.invariant)(!K(e),"Container ref is defined but not hydrated","use-scroll-ref"),(0,l.invariant)(!K(o),"Target ref is defined but not hydrated","use-scroll-ref"),g()):void 0,[g]),t}();a(c,"change",e=>{g(e<40)});let[h,d]=(0,i.useState)(60),[f,u]=(0,i.useState)(20),[x,b]=(0,i.useState)(e.initialTickerHeight??28),m=(0,i.useRef)(null),v=(0,i.useRef)(null),C=(0,i.useRef)(null);(0,i.useEffect)(()=>{let e=m.current,o=C.current,r=v.current,t=[e,o,r],i=[],a=new ResizeObserver(()=>{e&&u(e.getBoundingClientRect().height),o&&b(o.getBoundingClientRect().height),r&&d(r.getBoundingClientRect().height)});return t.forEach(e=>{e&&(a.observe(e),i.push(()=>{a.unobserve(e)}))}),()=>{i.forEach(e=>{e()})}},[]);let $=(0,i.useMemo)(()=>!n||o,[o,n]),y=(0,_.useSpring)(0,{bounce:0,duration:400});return(0,i.useEffect)(()=>{y.set(+!!$)},[o,n,$,y]),(0,t.jsx)(X.Provider,{value:{navHeight:h,gridlineHeight:f,tickerHeight:x,smoothSquishProgress:y,isMobileOpen:o,setIsMobileOpen:r,isSquished:$},children:(0,t.jsx)(Y.Provider,{value:(0,i.useMemo)(()=>({gridlineRef:m,navRef:v,tickerRef:C}),[]),children:e.children})})},"useHeaderUI",0,function(){let e=(0,i.useContext)(X);if(null===e)throw Error("must call useHeaderUI() within <HeaderUIProvider />");return e},"useHeaderUIRefs",0,function(){let e=(0,i.useContext)(Y);if(null===e)throw Error("must call useHeaderUIRefs() within <HeaderUIProvider />");return e}],165425)},778888,e=>{"use strict";var o=e.i(997053);let r={h0:"heading-0",h1:"heading-1",h2:"heading-2",h3:"heading-3",h4:"heading-4",h5:"heading-5",h6:"heading-6"},t={s:"text-s",base:"text-base",m:"text-m",l:"text-l",xl:"text-xl",mono:"mono",annotation:"annotation"},i=o.css`
  .${r.h0} {
    font-family: ${({theme:e})=>e.fontFamily.DISPLAY};
    font-weight: ${({theme:e})=>e.fontWeight.h0};
    line-height: ${({theme:e})=>e.lineHeight.h};
    letter-spacing: ${({theme:e})=>e.letterSpacing.h0};
    font-size: ${({theme:e})=>e.fontSize.h0};
  }

  .${r.h1} {
    font-family: ${({theme:e})=>e.fontFamily.DISPLAY};
    font-weight: ${({theme:e})=>e.fontWeight.h1};
    line-height: ${({theme:e})=>e.lineHeight.h};
    letter-spacing: ${({theme:e})=>e.letterSpacing.h1};
    font-size: ${({theme:e})=>e.fontSize.h1};
  }

  .${r.h2} {
    font-family: ${({theme:e})=>e.fontFamily.HEADING};
    font-weight: ${({theme:e})=>e.fontWeight.h2};
    line-height: ${({theme:e})=>e.lineHeight.h};
    letter-spacing: ${({theme:e})=>e.letterSpacing.h2};
    font-size: ${({theme:e})=>e.fontSize.h2};
  }

  .${r.h3} {
    font-family: ${({theme:e})=>e.fontFamily.HEADING};
    font-weight: ${({theme:e})=>e.fontWeight.h3};
    line-height: ${({theme:e})=>e.lineHeight.h};
    letter-spacing: ${({theme:e})=>e.letterSpacing.h3};
    font-size: ${({theme:e})=>e.fontSize.h3};
  }

  .${r.h4} {
    font-family: ${({theme:e})=>e.fontFamily.HEADING};
    font-weight: ${({theme:e})=>e.fontWeight.h4};
    line-height: ${({theme:e})=>e.lineHeight.h};
    letter-spacing: ${({theme:e})=>e.letterSpacing.h4};
    font-size: ${({theme:e})=>e.fontSize.h4};
  }

  .${r.h5} {
    font-family: ${({theme:e})=>e.fontFamily.SANS};
    font-weight: ${({theme:e})=>e.fontWeight.h5};
    line-height: ${({theme:e})=>e.lineHeight.h5};
    letter-spacing: ${({theme:e})=>e.letterSpacing.h5};
    font-size: ${({theme:e})=>e.fontSize.h5};
  }

  .${r.h6} {
    font-family: ${({theme:e})=>e.fontFamily.MONO};
    font-weight: ${({theme:e})=>e.fontWeight.h6};
    line-height: ${({theme:e})=>e.lineHeight.h6};
    letter-spacing: ${({theme:e})=>e.letterSpacing.h6};
    font-size: ${({theme:e})=>e.fontSize.h6};
  }
`,a=o.css`
  .${t.s} {
    font-size: ${({theme:e})=>e.fontSize.body.s};
    line-height: ${({theme:e})=>e.lineHeight.body.s};
    font-weight: ${({theme:e})=>e.fontWeight.NORMAL};
  }

  .${t.base} {
    font-size: ${({theme:e})=>e.fontSize.body.base};
    line-height: ${({theme:e})=>e.lineHeight.body.base};
    font-weight: ${({theme:e})=>e.fontWeight.body};
  }

  .${t.m} {
    font-size: ${({theme:e})=>e.fontSize.body.m};
    line-height: ${({theme:e})=>e.lineHeight.body.m};
    font-weight: ${({theme:e})=>e.fontWeight.body};
  }

  .${t.l} {
    line-height: ${({theme:e})=>e.lineHeight.body.l};
    font-size: calc(20rem / 16);
    font-weight: ${({theme:e})=>e.fontWeight.LIGHT};
  }

  .${t.xl} {
    font-size: ${({theme:e})=>e.fontSize.body.xl};
    line-height: ${({theme:e})=>e.lineHeight.body.xl};
    font-weight: ${({theme:e})=>e.fontWeight.LIGHT};
  }

  .${t.mono} {
    font-family: ${({theme:e})=>e.fontFamily.MONO_ALT};
    font-weight: ${({theme:e})=>e.fontWeight.mono};
  }

  .${t.annotation} {
    font-family: ${({theme:e})=>e.fontFamily.MONO_ALT};
    font-weight: ${({theme:e})=>e.fontWeight.mono};
    font-size: ${({theme:e})=>e.fontSize.annotation};
    letter-spacing: ${({theme:e})=>e.letterSpacing.annotation};
    line-height: ${({theme:e})=>e.lineHeight.body.base};
  }
`,n=o.css`
  :root {
    --animation-duration: ${({theme:e})=>e.animation.DURATION};
    --animation-easing: ${({theme:e})=>e.animation.EASING};
    --spring-easing: linear(
      0,
      0.0007 0.36%,
      0.0058 1.08%,
      0.0217,
      0.0454 3.23%,
      0.086 4.66%,
      0.1594 6.81%,
      0.4654 15.05%,
      0.5681 18.28%,
      0.6468 21.15%,
      0.7212,
      0.782 27.6%,
      0.8355,
      0.8769 34.77%,
      0.8968,
      0.9137,
      0.928 41.22%,
      0.9419,
      0.9531 46.24%,
      0.9635 49.1%,
      0.9786 55.2%,
      0.9888 62.36%,
      0.9949 70.97%,
      0.9982 82.44%,
      0.9997 100%
    );
    --spring-duration: 0.747s;
  }

  @keyframes hero-fade-in {
    from {
      opacity: 0.0001;
      transform: translateY(var(--y, 32px));
    }
    to {
      opacity: 1;
      transform: none;
    }
  }

  .${"hero-fade-in"} {
    animation: var(--spring-duration) var(--spring-easing) 0.2s hero-fade-in;
    animation-fill-mode: both;
  }
`,l=o.createGlobalStyle`
  @layer utility {
    ${a}
    ${i}
    ${n}
  }
`;e.s(["UtilityCss",0,l,"headingStyles",0,r,"textStyles",0,t])},726497,902453,898360,31512,212980,500638,477209,e=>{"use strict";var o=e.i(843476),r=e.i(271645),t=e.i(997053);e.i(409027);var i=e.i(310198),a=e.i(193594),n=e.i(243464),l=e.i(924467),s=e.i(883715),g=e.i(572002),p=e.i(697398),c=e.i(376277);let h={DISPLAY:'PP Formula SemiExtended, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',HEADING:'PP Formula, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',SANS:'Cinetype, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',MONO:'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',CODE:'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',MONO_ALT:'Cinetype Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'},d={fontFamily:{MONO:h.MONO,DEFAULT:"IBM Plex Sans"},fontSize:{SMALL:"10px",DEFAULT:"12px",LARGE:"16px"}},f={fontFamily:h,fontSize:{EXTRA_SMALL:"10px",SMALL:"12px",DEFAULT:"14px",MEDIUM:"16px",LARGE:"20px",EXTRA_LARGE:"24px",XL:"28px",XXL:"32px",XXXL:"48px",h0:"clamp(42px, calc(42px + (74 - 42) * ((100vw - 450px) / (1250 - 450))), 74px)",h1:"clamp(38px, calc(38px + (60 - 38) * ((100vw - 450px) / (1250 - 450))), 60px)",h2:"clamp(30px, calc(30px + (40 - 30) * ((100vw - 450px) / (1250 - 450))), 40px)",h3:"clamp(20px, calc(20px + (28 - 20) * ((100vw - 450px) / (1250 - 450))), 28px)",h4:"calc(20rem / 16)",h5:"calc(14rem / 16)",h6:"clamp(12px, calc(14px + (12 - 14) * ((100vw - 450px) / (1250 - 450))), 14px)",annotation:"calc(12rem / 16)",body:{xs:"calc(10rem / 16)",s:"calc(12rem / 16)",base:"calc(14rem / 16)",m:"1rem",l:"calc(20rem / 16)",xl:"clamp(20px, calc(20px + (24 - 20) * ((100vw - 450px) / (1250 - 450))), 24px)"}},lineHeight:{h:1.3,h5:1.571,h6:1.571,body:{s:1.5,base:1.571,m:1.5,l:1.5,xl:1.5}},letterSpacing:{HEADING:"-0.025em",h0:"-0.025em",h1:"-0.0308em",h2:"-0.025em",h3:"-0.025em",h4:"-0.025em",h5:"-0.025em",h6:"0.214em",annotation:"0.0833em"},fontWeight:{LIGHT:300,NORMAL:400,MEDIUM:500,SEMIBOLD:600,SEMI_BOLD:600,BOLD:700,EXTRA_BOLD:800,h0:700,h1:700,h2:800,h3:800,h4:600,h5:600,h6:700,body:400,mono:400},appUI:d};e.s(["appUITypography",0,d,"typography",0,f],902453);let u="6px 37px 10px 0px rgba(0, 0, 0, 0.01), 4px 24px 10px 0px rgba(0, 0, 0, 0.04), 2px 13px 8px 0px rgba(0, 0, 0, 0.14), 1px 6px 6px 0px rgba(0, 0, 0, 0.24), 0px 1px 3px 0px rgba(0, 0, 0, 0.27)",x=`
  --gradient-x: 66.66%;
  --gradient-y: 50%;

  border-radius: 12px;
  background-image: radial-gradient(
    circle at var(--gradient-x) var(--gradient-y),
    ${(0,a.rgba)((0,a.lighten)(.03,n.bg.bg500),.5)} 0%,
    ${(0,a.rgba)(n.bg.bg300,.5)} 80%
  );
  box-shadow:
    0 0 24px 0px ${n.bg.bg400} inset,
    0 0.5px 0px 0.75px ${(0,a.lighten)(.125,n.bg.bg500)},
    ${u};
`,b=`
  background: var(--fg100, ${l.colors.palette.obsidian});
  color: var(--fontColorLOUD, ${l.colors.vars.WHITE});
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.03),
    0 8px 16px 0 rgba(0, 0, 0, 0.05),
    0 1px 4px 0 rgba(0, 0, 0, 0.1);
`,m=`
  0 0 24px 0px rgba(255, 255, 255, 0.08) inset,
  0 0.5px 0px 0.75px rgba(255, 255, 255, 0.15),
  ${u}
`,v=`
  background-image: radial-gradient(
    circle at 66.66% 50%,
    ${(0,a.lighten)(.043,n.bg.bg500)} 0%,
    ${n.bg.bg300} 80%
  );
  box-shadow:
    0 0 24px 0px ${n.bg.bg400} inset,
    0 0.5px 0px 0.75px ${(0,a.lighten)(.125,n.bg.bg500)},
    ${u};
`,C={name:"dark",colors:l.colors.vars,backgroundColor:`var(--fg100, ${l.colors.palette.obsidian})`,backgroundColor15:`color-mix(in srgb, var(--fg100, ${l.colors.palette.obsidian}) 15%, transparent)`,backgroundColor25:`color-mix(in srgb, var(--fg100, ${l.colors.palette.obsidian}) 25%, transparent)`,backgroundColor30:`color-mix(in srgb, var(--fg100, ${l.colors.palette.obsidian}) 30%, transparent)`,backgroundColor35:`color-mix(in srgb, var(--fg100, ${l.colors.palette.obsidian}) 35%, transparent)`,backgroundColor40:`color-mix(in srgb, var(--fg100, ${l.colors.palette.obsidian}) 40%, transparent)`,backgroundColor50:`color-mix(in srgb, var(--fg100, ${l.colors.palette.obsidian}) 50%, transparent)`,backgroundColor65:`color-mix(in srgb, var(--fg100, ${l.colors.palette.obsidian}) 65%, transparent)`,backgroundColor75:`color-mix(in srgb, var(--fg100, ${l.colors.palette.obsidian}) 75%, transparent)`,backgroundColor80:`color-mix(in srgb, var(--fg100, ${l.colors.palette.obsidian}) 80%, transparent)`,backgroundColor85:`color-mix(in srgb, var(--fg100, ${l.colors.palette.obsidian}) 85%, transparent)`,backgroundColor90:`color-mix(in srgb, var(--fg100, ${l.colors.palette.obsidian}) 90%, transparent)`,backgroundColor95:`color-mix(in srgb, var(--fg100, ${l.colors.palette.obsidian}) 95%, transparent)`,fontFamily:f.fontFamily,fontSize:f.fontSize,fontWeight:f.fontWeight,lineHeight:f.lineHeight,letterSpacing:f.letterSpacing,fontColor:{DEFAULT:`var(--fontColorDEFAULT, ${l.colors.palette.roseQuartz})`,MUTED:`var(--fontColorMUTED, ${n.fg.fg1100})`,LOUD:`var(--fontColorLOUD, ${l.colors.vars.WHITE})`},maxWidth:c.spacing.maxWidth,borderRadius:c.spacing.borderRadius,animation:c.spacing.animation,mediaQuery:c.spacing.mediaQuery,mediaQueryString:c.spacing.mediaQueryString,highlightColor:`var(--highlightColor, ${l.colors.palette.roseQuartz})`,highlightColor05:`color-mix(in srgb, var(--highlightColor, ${l.colors.palette.roseQuartz}) 5%, transparent)`,highlightColor10:`color-mix(in srgb, var(--highlightColor, ${l.colors.palette.roseQuartz}) 10%, transparent)`,highlightColor15:`color-mix(in srgb, var(--highlightColor, ${l.colors.palette.roseQuartz}) 15%, transparent)`,highlightColor20:`color-mix(in srgb, var(--highlightColor, ${l.colors.palette.roseQuartz}) 20%, transparent)`,highlightColor25:`color-mix(in srgb, var(--highlightColor, ${l.colors.palette.roseQuartz}) 25%, transparent)`,highlightColor30:`color-mix(in srgb, var(--highlightColor, ${l.colors.palette.roseQuartz}) 30%, transparent)`,highlightColor35:`color-mix(in srgb, var(--highlightColor, ${l.colors.palette.roseQuartz}) 35%, transparent)`,highlightColor40:`color-mix(in srgb, var(--highlightColor, ${l.colors.palette.roseQuartz}) 40%, transparent)`,highlightColor45:`color-mix(in srgb, var(--highlightColor, ${l.colors.palette.roseQuartz}) 45%, transparent)`,highlightColor50:`color-mix(in srgb, var(--highlightColor, ${l.colors.palette.roseQuartz}) 50%, transparent)`,highlightColor60:`color-mix(in srgb, var(--highlightColor, ${l.colors.palette.roseQuartz}) 60%, transparent)`,highlightColor70:`color-mix(in srgb, var(--highlightColor, ${l.colors.palette.roseQuartz}) 70%, transparent)`,highlightColor75:`color-mix(in srgb, var(--highlightColor, ${l.colors.palette.roseQuartz}) 75%, transparent)`,gradientFade:"linear-gradient(183.89deg,rgba(245,192,192,.02) 3.22%,rgba(0,0,0,.2) 240.48%),rgba(245,192,192,.02)",gradientText:{DEFAULT:`background-image: linear-gradient(
      55deg,
      ${l.colors.vars.WHITE} 20%,
      ${l.colors.vars.LIGHT_PINK}CC 100%
    );`,LOUD:`background-image: linear-gradient(
      55deg,
      ${l.colors.vars.LIGHT_PINK} 20%,
      ${l.colors.vars.WHITE}F2 50%,
      ${l.colors.vars.PURPLE} 80%
    );`,TWOSTOP:`background-image: linear-gradient(
      93deg,
      ${l.colors.vars.WHITE} 10.09%,
      ${l.colors.vars.LIGHT_PINK} 159%
    );`},paperTexture:{img:"url('/images/bkg-noise.webp')",size:"200px 200px",mixBlendMode:"normal",opacity:"0.0625"},paperTextureCssVars:{img:"var(--texture-paper-img)",size:"var(--texture-paper-size)",mixBlendMode:"var(--texture-paper-mixBlendMode)",opacity:"var(--texture-paper-opacity)"},borderColor:{MUTED:`var(--grid300, ${n.grid.grid300})`,DEFAULT:`var(--grid500, ${n.grid.grid500})`,STRONG:`var(--grid700, ${n.grid.grid700})`},gridColor:{CHECKERED:n.fg.fg600},computed:{fg:n.fg,fgA:n.fgA,grid:n.grid,bg:n.bg},palette:{...l.colors.paletteBase,...n.fg,...n.fgA,...n.grid,...n.bg,fgLoud:l.colors.paletteBase.white,roseQuartz:l.colors.paletteBase.roseQuartz,obsidian:l.colors.paletteBase.obsidian,minsk:l.colors.paletteBase.minsk,white:l.colors.paletteBase.white,black:l.colors.paletteBase.black},paletteCssVars:p.paletteCssVarRefs,appUI:{backgroundColor:{DEFAULT:s.darkAppUI.backgroundColor.DEFAULT,MUTED:s.darkAppUI.backgroundColor.MUTED},borderColor:{DEFAULT:s.darkAppUI.borderColor.DEFAULT,MUTED:s.darkAppUI.borderColor.MUTED},borderRadius:"3px",fontColor:{DEFAULT:s.darkAppUI.fontColor.DEFAULT,MUTED:s.darkAppUI.fontColor.MUTED},fontFamily:{DEFAULT:"IBM Plex Sans",MONO:f.fontFamily.MONO},fontSize:{SMALL:"10px",DEFAULT:"12px",LARGE:"16px"},intent:{DANGER:s.darkAppUI.intent.DANGER,PRIMARY:s.darkAppUI.intent.PRIMARY,SUCCESS:s.darkAppUI.intent.SUCCESS,WARNING:s.darkAppUI.intent.WARNING},magic:{backgroundGradient:s.darkMagicColors.backgroundGradient,primaryColor:s.darkMagicColors.primaryColor,removingColor:s.darkMagicColors.removingColor,secondaryColor:s.darkMagicColors.secondaryColor,tertiaryColor:s.darkMagicColors.tertiaryColor},outlinedBorderColor:{DEFAULT:s.darkAppUI.outlinedBorderColor.DEFAULT,MUTED:s.darkAppUI.outlinedBorderColor.MUTED},primaryColor:s.darkAppUI.primaryColor,windowShadow:{LIGHT:`
        0 0 0 1px rgba(245, 192, 192, 0.3),
        0 103px 103px 0 rgba(0, 0, 0, 0.25),
        0 26px 57px 0 rgba(0, 0, 0, 0.3)
      `,LIGHT_HOVER:`
        0 0 0 1px rgba(245, 192, 192, 0.35),
        0 103px 103px 0 rgba(0, 0, 0, 0.3),
        0 26px 57px 0 rgba(0, 0, 0, 0.35)
      `,DEFAULT:`
        0 0 0 1px rgba(245, 192, 192, 0.3),
        0 103px 103px 0 rgba(0, 0, 0, 0.25),
        0 26px 57px 0 rgba(0, 0, 0, 0.3)
      `,HOVER:`
        0 0 0 1px rgba(245, 192, 192, 0.35),
        0 103px 103px 0 rgba(0, 0, 0, 0.3),
        0 26px 57px 0 rgba(0, 0, 0, 0.35)
      `},outerBrowserWindow:g.outerBrowserWindowDark},iconColor:{DEFAULT:`var(--fg1100, ${n.fg.fg1100})`,MUTED:`var(--fg900, ${n.fg.fg900})`},footer:{divider:{color:`var(--grid500, ${n.grid.grid500})`}},photoOverlay:`
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      mix-blend-mode: overlay;
      z-index: 1;
      background: linear-gradient(
        180deg,
        color-mix(in srgb, var(--highlightColor, ${l.colors.palette.roseQuartz}) 70%, transparent) 0%,
        color-mix(in srgb, var(--highlightColor, ${l.colors.palette.roseQuartz}) 10%, transparent) 100%
      );
    }
  `,buttonLoudStyles:`
    background: linear-gradient(
        to right,
        var(--fg100, ${l.colors.palette.obsidian}),
        var(--fg100, ${l.colors.palette.obsidian})
      ),
      linear-gradient(
        45deg,
        var(--highlightColor, ${l.colors.palette.roseQuartz}),
        ${l.colors.vars.LIGHT_PURPLE}
      );

    &::after {
      background: linear-gradient(
        45deg,
        color-mix(in srgb, var(--roseQuartz) 85%, transparent),
        color-mix(in srgb, var(--minsk) 50%, transparent)
      );
      opacity: 0.2;
    }
  `,banner:`
    align-self: flex-start;
    display: flex;
    align-items: center;
    height: 20px;
    border: none;

    span {
      font-family: ${f.fontFamily.MONO};
      display: flex;
      height: 12px;
      letter-spacing: 2px;
      font-size: ${f.fontSize.SMALL};
      text-transform: uppercase;
      color: var(--fontColorDEFAULT, ${l.colors.palette.roseQuartz});
      font-weight: ${f.fontWeight.BOLD};
      line-height: 12px;
    }
  `,card:{DEFAULT:b,GLASS:x,GLASS_HOVER:m},customerLogoColor:`
    filter: brightness(0) invert(1);
  `,popover:v,nav:{dropdown:{backgroundColor:l.colors.palette.obsidian},flyout:{backgroundColor:l.colors.palette.obsidian,borderColor:n.grid.grid500,boxShadow:"0 4px 24px -4px rgba(0, 0, 0, 0.3)"},sticky:{backgroundColor:l.colors.palette.obsidian}}};e.s(["darkTheme",0,C],898360);var $=e.i(872582);let y=`
  border-radius: 12px;
  background: linear-gradient(
      105deg,
      rgba(245, 192, 192, 0) 10.56%,
      rgba(245, 192, 192, 0.02) 108.41%
    ),
    rgba(253, 253, 253, 0.4);
  box-shadow:
    0 0 11px 0 rgba(0, 0, 0, 0.05) inset,
    0 0 0 1px rgba(0, 0, 0, 0.06),
    0 16px 24px -8px rgba(0, 0, 0, 0.05),
    0 8px 12px -4px rgba(0, 0, 0, 0.05),
    0 4px 6px -2px rgba(0, 0, 0, 0.05),
    0 0 0 0 transparent,
    0 0 0 0 transparent;
  backdrop-filter: blur(7.5px);
`,E=`
  background: var(--fg100, ${l.colors.vars.WHITE});
  color: var(--fontColorLOUD, ${l.colors.vars.BLACK});
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.03),
    0 8px 16px 0 rgba(0, 0, 0, 0.05),
    0 1px 4px 0 rgba(0, 0, 0, 0.1);
`,L=`
  0 0 16px 0 rgba(0, 0, 0, 0.08) inset,
  0 0 0 1px rgba(0, 0, 0, 0.1),
  0 20px 32px -8px rgba(0, 0, 0, 0.08),
  0 12px 16px -4px rgba(0, 0, 0, 0.06),
  0 6px 8px -2px rgba(0, 0, 0, 0.06),
  0 2px 4px 0 rgba(0, 0, 0, 0.04),
  0 1px 2px 0 rgba(0, 0, 0, 0.04)
`,A=`
  background-image: radial-gradient(
    circle at 66.66% 50%,
    var(--white, ${l.colors.vars.WHITE}) 0%,
    var(--fg200, ${$.lightFg.fg200}) 80%
  );
  box-shadow:
    0 0 34px 0px var(--grid200, ${$.lightGrid.grid200}) inset,
    6px 27px 10px 0px rgba(100, 63, 63, 0.01), 4px 4px 10px 0px rgba(100, 63, 63, 0.04), 2px 13px 8px 0px rgba(100, 63, 63, 0.06), 1px 6px 6px 0px rgba(100, 63, 63, 0.06), 0px 1px 3px 0px rgba(100, 63, 63, 0.18);
`,T={name:"light",colors:l.colors.vars,backgroundColor:`var(--fg100, ${l.colors.vars.WHITE})`,backgroundColor25:`color-mix(in srgb, var(--fg100, ${l.colors.vars.WHITE}) 25%, transparent)`,backgroundColor50:`color-mix(in srgb, var(--fg100, ${l.colors.vars.WHITE}) 50%, transparent)`,fontFamily:f.fontFamily,fontSize:f.fontSize,fontWeight:f.fontWeight,lineHeight:f.lineHeight,letterSpacing:f.letterSpacing,fontColor:{DEFAULT:`var(--fontColorDEFAULT, ${l.colors.paletteBase.eggplant})`,MUTED:`var(--fontColorMUTED, ${l.colors.palette.cement})`,LOUD:`var(--fontColorLOUD, ${l.colors.vars.BLACK})`},maxWidth:c.spacing.maxWidth,borderRadius:c.spacing.borderRadius,animation:c.spacing.animation,mediaQuery:c.spacing.mediaQuery,mediaQueryString:c.spacing.mediaQueryString,highlightColor:`var(--highlightColor, ${l.colors.paletteBase.eggplant})`,highlightColor05:`color-mix(in srgb, var(--highlightColor, ${l.colors.paletteBase.eggplant}) 5%, transparent)`,highlightColor10:`color-mix(in srgb, var(--highlightColor, ${l.colors.paletteBase.eggplant}) 10%, transparent)`,highlightColor15:`color-mix(in srgb, var(--highlightColor, ${l.colors.paletteBase.eggplant}) 15%, transparent)`,highlightColor20:`color-mix(in srgb, var(--highlightColor, ${l.colors.paletteBase.eggplant}) 20%, transparent)`,highlightColor25:`color-mix(in srgb, var(--highlightColor, ${l.colors.paletteBase.eggplant}) 25%, transparent)`,highlightColor30:`color-mix(in srgb, var(--highlightColor, ${l.colors.paletteBase.eggplant}) 30%, transparent)`,highlightColor35:`color-mix(in srgb, var(--highlightColor, ${l.colors.paletteBase.eggplant}) 35%, transparent)`,highlightColor40:`color-mix(in srgb, var(--highlightColor, ${l.colors.paletteBase.eggplant}) 40%, transparent)`,highlightColor45:`color-mix(in srgb, var(--highlightColor, ${l.colors.paletteBase.eggplant}) 45%, transparent)`,highlightColor50:`color-mix(in srgb, var(--highlightColor, ${l.colors.paletteBase.eggplant}) 50%, transparent)`,highlightColor60:`color-mix(in srgb, var(--highlightColor, ${l.colors.paletteBase.eggplant}) 60%, transparent)`,highlightColor70:`color-mix(in srgb, var(--highlightColor, ${l.colors.paletteBase.eggplant}) 70%, transparent)`,highlightColor75:`color-mix(in srgb, var(--highlightColor, ${l.colors.paletteBase.eggplant}) 75%, transparent)`,gradientFade:"linear-gradient(180deg, rgba(173, 142, 182, 0.10) 0%, rgba(255, 255, 255, 0.00) 100%)",gradientText:{DEFAULT:`background-image: linear-gradient(
      90deg,
      ${l.colors.paletteBase.eggplant} 0%,
      ${l.colors.vars.BLACK} 100%
    );`,LOUD:`background-image: linear-gradient(
      55deg,
      ${l.colors.paletteBase.eggplant} 20%,
      ${l.colors.vars.BLACK}F2 50%,
      ${l.colors.paletteBase.eggplant} 80%
    );`,TWOSTOP:`background-image: linear-gradient(
      93deg,
      ${l.colors.paletteBase.eggplant} 10.09%,
      ${l.colors.vars.BLACK} 159%
    );`},paperTexture:{img:"url('/images/light-bkg-noise.webp')",size:"256px 256px",mixBlendMode:"normal",opacity:"0.06"},paperTextureCssVars:{img:"var(--texture-paper-img)",size:"var(--texture-paper-size)",mixBlendMode:"var(--texture-paper-mixBlendMode)",opacity:"var(--texture-paper-opacity)"},borderColor:{MUTED:`var(--grid300, ${$.lightGrid.grid300})`,DEFAULT:`var(--grid500, ${$.lightGrid.grid500})`,STRONG:`var(--grid700, ${$.lightGrid.grid700})`},gridColor:{CHECKERED:$.lightFg.fg600},computed:{fg:$.lightFg,fgA:$.lightFgA,grid:$.lightGrid,bg:$.lightBg},palette:{...l.colors.paletteBase,...$.lightFg,...$.lightFgA,...$.lightGrid,...$.lightBg,fgLoud:l.colors.paletteBase.obsidian,eggplant:l.colors.paletteBase.eggplant,amethyst:l.colors.paletteBase.amethyst,white:l.colors.paletteBase.white,black:l.colors.paletteBase.black},paletteCssVars:p.paletteCssVarRefs,appUI:{backgroundColor:{DEFAULT:l.colors.vars.WHITE,MUTED:l.colors.appUI.backgroundColor.MUTED},borderColor:{DEFAULT:l.colors.appUI.borderColor.DEFAULT,MUTED:l.colors.appUI.borderColor.MUTED},borderRadius:"3px",fontColor:{DEFAULT:l.colors.appUI.fontColor.DEFAULT,MUTED:l.colors.appUI.fontColor.MUTED},fontFamily:{DEFAULT:"IBM Plex Sans",MONO:f.fontFamily.MONO},fontSize:{SMALL:"10px",DEFAULT:"12px",LARGE:"16px"},intent:{DANGER:l.colors.appUI.intent.DANGER,PRIMARY:l.colors.appUI.intent.PRIMARY,SUCCESS:l.colors.appUI.intent.SUCCESS,WARNING:l.colors.appUI.intent.WARNING},magic:{backgroundGradient:l.colors.magic.backgroundGradient,primaryColor:l.colors.magic.primaryColor,removingColor:l.colors.magic.removingColor,secondaryColor:l.colors.magic.secondaryColor,tertiaryColor:l.colors.magic.tertiaryColor},outlinedBorderColor:{DEFAULT:l.colors.appUI.outlinedBorderColor.DEFAULT,MUTED:l.colors.appUI.outlinedBorderColor.MUTED},primaryColor:l.colors.appUI.primaryColor,windowShadow:{LIGHT:`
        0 0 0 1px rgba(49, 38, 59, 0.22),
        0 103px 103px 0 rgba(49, 38, 59, 0.03),
        0 26px 57px 0 rgba(49, 38, 59, 0.05)
      `,LIGHT_HOVER:`
        0 0 0 1px rgba(49, 38, 59, 0.32),
        0 103px 103px 0 rgba(49, 38, 59, 0.12),
        0 26px 57px 0 rgba(49, 38, 59, 0.15)
      `,DEFAULT:`
        0 0 0 1px rgba(49, 38, 59, 0.22),
        0 103px 103px 0 rgba(49, 38, 59, 0.09),
        0 26px 57px 0 rgba(49, 38, 59, 0.1)
      `,HOVER:`
        0 0 0 1px rgba(49, 38, 59, 0.32),
        0 103px 103px 0 rgba(49, 38, 59, 0.12),
        0 26px 57px 0 rgba(49, 38, 59, 0.15)
      `},outerBrowserWindow:g.outerBrowserWindowLight},iconColor:{DEFAULT:`var(--fg1200, ${$.lightFg.fg1200})`,MUTED:`var(--fg900, ${$.lightFg.fg900})`},footer:{divider:{color:`var(--grid500, ${$.lightGrid.grid500})`}},banner:`
    align-self: flex-start;
    display: flex;
    align-items: center;
    height: 20px;
    border: none;

    span {
      font-family: ${f.fontFamily.MONO};
      display: flex;
      height: 12px;
      letter-spacing: 2px;
      font-size: ${f.fontSize.SMALL};
      text-transform: uppercase;
      color: var(--fontColorDEFAULT, ${l.colors.paletteBase.eggplant});
      font-weight: ${f.fontWeight.BOLD};
      line-height: 12px;
    }
  `,card:{DEFAULT:E,GLASS:y,GLASS_HOVER:L},customerLogoColor:`
    filter: invert(100%) sepia(0%) saturate(1%) hue-rotate(339deg)
      brightness(100%) contrast(101%);
  `,popover:A,buttonLoudStyles:`
    background: linear-gradient(
        to right,
        var(--fg100, ${l.colors.vars.WHITE}),
        var(--fg100, ${l.colors.vars.WHITE})
      ),
      linear-gradient(45deg, #cda0a5, var(--highlightColor, ${l.colors.paletteBase.eggplant}));
    color: var(--fontColorLOUD, ${l.colors.vars.BLACK});

    &::after {
      box-shadow: inset 0 0 0 1px rgba(71, 12, 12, 0.15);
      background: linear-gradient(
          135deg,
          rgba(245, 192, 192, 0.23) 0%,
          rgba(245, 192, 192, 0.12) 100%
        ),
        var(--fg100, ${l.colors.vars.WHITE});
    }
  `,nav:{dropdown:{backgroundColor:l.colors.vars.WHITE},flyout:{backgroundColor:l.colors.vars.WHITE,borderColor:$.lightGrid.grid500,boxShadow:"0 4px 24px -4px rgba(0, 0, 0, 0.15)"},sticky:{backgroundColor:l.colors.vars.WHITE}}};e.s(["lightTheme",0,T],31512);let U={...T,name:"pink",nav:{...T.nav,sticky:{backgroundColor:`color-mix(in srgb, var(--fg100, ${i.pinkFg.fg100}) 90%, transparent)`},dropdown:{backgroundColor:`color-mix(in srgb, var(--fg100, ${i.pinkFg.fg100}) 99%, transparent)`}}},k={dark:C,light:T,pink:U},S=(0,r.createContext)(void 0);function D(e,o){return(0,p.cssVarDefinitionsToString)({...e,...o,...p.hatchTextureCssVarDefinitions,...p.borderColorCssVarDefinitions})}e.s(["ThemeProvider",0,function({children:e,defaultTheme:i="dark",forcedTheme:a}){let[n,l]=(0,r.useState)(a||i);(0,r.useEffect)(()=>{a?l(a):l(i)},[a,i]);let s=k[n];return(0,o.jsx)(S.Provider,{value:{themeName:n,setTheme:e=>{a||l(e)},theme:s},children:(0,o.jsx)(t.ThemeProvider,{theme:s,children:e})})}],212980);let w=t.css`
  :root {
    ${D(p.darkCssVarDefinitions,p.darkTextureDefinitions)}
  }

  [data-theme='light'] {
    ${D(p.lightCssVarDefinitions,p.lightTextureDefinitions)}
  }

  [data-theme='dark'] {
    ${D(p.darkCssVarDefinitions,p.darkTextureDefinitions)}
  }

  [data-theme='pink'] {
    ${D(p.pinkCssVarDefinitions,p.pinkTextureDefinitions)}
  }
`,M=t.css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`,I=t.createGlobalStyle`
  @layer reset, base, application, color-theme, external, utility;

  ${w}

  @layer reset {
    ${M}
  }

  @layer base {
    body {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    * {
      box-sizing: border-box;
    }
  }

  @layer application {
    :root {
      --app-focus-outline: 2px solid var(--fgA900, ${({theme:e})=>e.computed?.fgA?.fgA900||e.highlightColor});
      --app-focus-outline-offset: 2px;
    }

    html {
      scroll-behavior: smooth;
    }

    html, body {
      background-color: var(--fg100, ${({theme:e})=>e.backgroundColor});
      scrollbar-gutter: stable;
    }

    body {
      -webkit-text-size-adjust: none;
      text-size-adjust: none;
      color: var(--fg1200, ${({theme:e})=>e.fontColor.DEFAULT});
      font-family: ${({theme:e})=>e.fontFamily.SANS}, sans-serif;
      font-size: ${({theme:e})=>e.fontSize.DEFAULT};
      font-weight: ${({theme:e})=>e.fontWeight.NORMAL};
      line-height: ${({theme:e})=>e.lineHeight.body.base};
      z-index: 0;
    }

    * {
      caret-color: var(--fg1200, ${({theme:e})=>e.fontColor.DEFAULT});
    }

    *::selection {
      background: var(--fgA700, ${({theme:e})=>e.computed?.fgA?.fgA700||e.highlightColor});
    }

    *:focus-visible {
      outline: var(--app-focus-outline);
      outline-offset: var(--app-focus-outline-offset);
    }

    :focus:not(:focus-visible) {
      outline: none;
    }

    p {
      margin-bottom: 1em;
      margin-bottom: 1lh;
    }

    p:last-child {
      margin-bottom: 0;
    }

    h1, h2, h3, h4 {
      color: var(--fgLoud, ${({theme:e})=>e.fontColor.LOUD});
    }

    h5, h6 {
      color: var(--fg1100, ${({theme:e})=>e.computed?.fg?.fg1100||e.fontColor.MUTED});
    }

    [data-theme='pink'] {
      h1, h2, h3, h4 {
        color: var(--fg1200, ${({theme:e})=>e.fontColor.DEFAULT});
      }
    }

    a {
      color: var(--fg1200, ${({theme:e})=>e.fontColor.DEFAULT});
      text-decoration: none;
      border-bottom: 1px solid var(--fg1200, ${({theme:e})=>e.fontColor.DEFAULT});
      background-color: transparent;
      transition: background-color linear 0.1s;

      &:hover {
        text-decoration: none;
        background-color: var(--fgA500, ${({theme:e})=>e.computed?.fgA?.fgA500||"transparent"});
      }

      &:active {
        background-color: var(--fgA700, ${({theme:e})=>e.computed?.fgA?.fgA700||"transparent"});
      }
    }

    mark {
      background-color: var(--fgA500, ${({theme:e})=>e.computed?.fgA?.fgA500||e.highlightColor});
      color: var(--fgLoud, ${({theme:e})=>e.fontColor.LOUD});
      font-weight: 700;
    }

    hr {
      height: 1px;
      margin: 25px 0;
      border: none;
      background-color: color-mix(in srgb, ${({theme:e})=>e.colors.BLACK} 10%, transparent);
    }

    .smoothScroll {
      scroll-behavior: smooth;
    }

    .hexLogoLink {
      text-decoration: none;
      border-bottom: none;
    }

    .divider {
      height: 1px;
      margin: 25px 0;
      background-color: color-mix(in srgb, ${({theme:e})=>e.colors.BLACK} 10%, transparent);
    }

    .emoji {
      margin: 0 7px 0 3px;
    }

    .sr-only {
      position: absolute;
      left: -10000px;
      top: auto;
      width: 1px;
      height: 1px;
      overflow: hidden;
    }
  }

  @layer external {
    .toolTip {
      pointer-events: all !important;
      background: ${({theme:e})=>e.backgroundColor} !important;
      padding: 8px 10px !important;
      box-shadow: none !important;
      border-radius: 3px !important;
      z-index: 99999999999 !important;
      max-width: 215px !important;
      color: ${({theme:e})=>e.colors.WHITE} !important;
      font-size: ${({theme:e})=>e.fontSize.DEFAULT} !important;
      line-height: 20px !important;

      border: 1px solid ${({theme:e})=>e.borderColor.DEFAULT} !important;
      box-shadow: 0 4px 4px color-mix(in srgb, ${({theme:e})=>e.colors.BLACK} 25%, transparent),
        0 0 54px ${({theme:e})=>e.colors.BLACK},
        0 0 50px color-mix(in srgb, ${({theme:e})=>e.borderColor.DEFAULT} 25%, transparent) !important;

      .react-tooltip-arrow {
        display: none !important;
      }
    }
  }

  /* Next.js specific */
  #__next {
    isolation: isolate;
    min-height: 100%;
  }
`;e.s(["GlobalStyles",0,I],500638),e.i(778888);let F=t.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;t.keyframes`
  from {
    transform: translateX(-2px);
  }
  to {
    transform: translateX(2px);
  }
`,e.s(["spin",0,F],477209),e.s([],726497)},591994,e=>{"use strict";e.i(486427);var o=e.i(83352),r=e.i(83411),t=e.i(287022);function i(e){return"number"==typeof e?e:parseFloat(e)}var a=e.i(271645),n=e.i(737806),l=e.i(887652),s=e.i(895420);e.s(["useSpring",0,function(e,g={}){return function(e,g={}){let{isStatic:p}=(0,a.useContext)(n.MotionConfigContext),c=()=>(0,r.isMotionValue)(e)?e.get():e;if(p)return(0,s.useTransform)(c);let h=(0,l.useMotionValue)(c());return(0,a.useInsertionEffect)(()=>(function(e,a,n={}){let l,s=e.get(),g=null,p=s,c="string"==typeof s?s.replace(/[\d.-]/g,""):void 0,h=()=>{g&&(g.stop(),g=null)};if(e.attach((r,a)=>{p=r,l=e=>{var o,r;return a((o=e,(r=c)?o+r:o))},t.frame.postRender(()=>{let r,t;h(),r=i(e.get()),r!==(t=i(p))&&(g=new o.JSAnimation({keyframes:[r,t],velocity:e.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...n,onUpdate:l})),e.events.animationStart?.notify(),g?.then(()=>{e.events.animationComplete?.notify()})})},h),(0,r.isMotionValue)(a)){let o=a.on("change",o=>{var r,t;return e.set((r=o,(t=c)?r+t:r))}),r=e.on("destroy",o);return()=>{o(),r()}}return h})(h,e,g),[h,JSON.stringify(g)]),h}(e,{type:"spring",...g})}],591994)}]);