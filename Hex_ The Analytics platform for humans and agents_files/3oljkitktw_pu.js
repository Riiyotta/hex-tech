(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,785191,e=>{"use strict";var t=e.i(843476),i=e.i(271645),r=e.i(997053);let n=r.css`
  --hover-transition-duration: 529.33ms;
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

  transition-property: border, transform, box-shadow;
  transition-duration: var(--hover-transition-duration);
  transition-timing-function: var(--hover-transition-timing-function);
  perspective: 800px;
  transform: translateY(0);

  @media (hover: hover) {
    &:hover {
      transform: translateY(-4px);
      box-shadow: ${({theme:e})=>e.card.GLASS_HOVER};
    }
  }
`,o=r.css`
  border: 1px solid ${({theme:e})=>e.highlightColor15};
  transition:
    border
      ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`},
    background-color
      ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`};

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: -1px;
    right: -1px;
    background: ${({theme:e})=>e.highlightColor40};
  }

  &::before {
    width: 20px;
    height: 1px;
  }

  &::after {
    height: 20px;
    width: 1px;
  }

  @media (hover: hover) {
    &:hover {
      border: 1px solid ${({theme:e})=>e.highlightColor30};
      background-color: ${({theme:e})=>e.highlightColor10};
    }
  }

  [data-theme='pink'] & {
    border: 1px solid ${({theme:e})=>e.paletteCssVars.grid700};
    color: ${({theme:e})=>e.paletteCssVars.fg1200};

    &::before {
      height: auto;
      width: auto;
      position: absolute;
      inset: 0;
      pointer-events: none;
      background: ${({theme:e})=>e.paletteCssVars.bg300};
      opacity: 0.1;
      z-index: -1;

      transition: background-color 0.2s ease-out;
    }

    &::after {
      height: 20px;
      width: 20px;
      background: transparent;
      border-right: 1px solid ${({theme:e})=>e.paletteCssVars.grid1200};
      border-top: 1px solid ${({theme:e})=>e.paletteCssVars.grid1200};
    }

    &:hover::before {
      opacity: 0.3;
    }
  }
`,a=r.default.div.withConfig({displayName:"Card__Wrapper",componentId:"sc-44e78466-0"})`
  align-items: flex-start;
  cursor: ${({$interactive:e})=>e?"pointer":"default"};
  display: flex;
  flex-direction: column;
  padding: 10px;
  position: relative;
  text-align: left;

  ${({$effect:e})=>"lines"===e&&o}
  ${({$effect:e,theme:t})=>"glass"===e&&t.card.GLASS}
  ${({$effect:e,$interactive:t})=>"glass"===e&&t&&n}
`,s=i.memo(function({children:e,className:i,onClick:r,effect:n="lines",interactive:o}){return(0,t.jsx)(a,{$effect:n,$interactive:o??void 0!==r,className:i,onClick:r,children:e})});e.s(["Card",0,s])},258591,e=>{"use strict";var t=e.i(843476),i=e.i(271645),r=e.i(997053);let n=r.css`
  font-family: ${({theme:e})=>e.fontFamily.DISPLAY};
  color: ${({theme:e})=>e.fontColor.LOUD};
  font-weight: ${({theme:e})=>e.fontWeight.h0};
  line-height: ${({theme:e})=>e.lineHeight.h};
  letter-spacing: ${({theme:e})=>e.letterSpacing.h0};
  font-size: ${({theme:e})=>e.fontSize.h0};
`,o=r.css`
  font-family: ${({theme:e})=>e.fontFamily.DISPLAY};
  color: ${({theme:e})=>e.fontColor.LOUD};
  font-weight: ${({theme:e})=>e.fontWeight.h1};
  line-height: ${({theme:e})=>e.lineHeight.h};
  letter-spacing: ${({theme:e})=>e.letterSpacing.h1};
  font-size: ${({theme:e})=>e.fontSize.h1};
`,a=r.css`
  font-family: ${({theme:e})=>e.fontFamily.HEADING};
  color: ${({theme:e})=>e.fontColor.LOUD};
  font-weight: ${({theme:e})=>e.fontWeight.h2};
  line-height: ${({theme:e})=>e.lineHeight.h};
  letter-spacing: ${({theme:e})=>e.letterSpacing.h2};
  font-size: ${({theme:e})=>e.fontSize.h2};
`,s=r.css`
  font-family: ${({theme:e})=>e.fontFamily.HEADING};
  color: ${({theme:e})=>e.fontColor.LOUD};
  font-weight: ${({theme:e})=>e.fontWeight.h3};
  line-height: ${({theme:e})=>e.lineHeight.h};
  letter-spacing: ${({theme:e})=>e.letterSpacing.h3};
  font-size: ${({theme:e})=>e.fontSize.h3};
`,l=r.css`
  font-family: ${({theme:e})=>e.fontFamily.HEADING};
  color: ${({theme:e})=>e.fontColor.LOUD};
  font-weight: ${({theme:e})=>e.fontWeight.h4};
  line-height: ${({theme:e})=>e.lineHeight.h};
  letter-spacing: ${({theme:e})=>e.letterSpacing.h4};
  font-size: ${({theme:e})=>e.fontSize.h4};
`,d=r.css`
  font-family: ${({theme:e})=>e.fontFamily.SANS};
  color: ${({theme:e})=>e.fontColor.MUTED};
  text-transform: uppercase;
  font-weight: ${({theme:e})=>e.fontWeight.h5};
  line-height: ${({theme:e})=>e.lineHeight.h5};
  letter-spacing: ${({theme:e})=>e.letterSpacing.h5};
  font-size: ${({theme:e})=>e.fontSize.h5};
`,u=r.css`
  color: ${({theme:e})=>e.fontColor.MUTED};
  font-family: ${({theme:e})=>e.fontFamily.MONO};
  font-weight: ${({theme:e})=>e.fontWeight.h6};
  line-height: ${({theme:e})=>e.lineHeight.h6};
  letter-spacing: ${({theme:e})=>e.letterSpacing.h6};
  font-size: ${({theme:e})=>e.fontSize.h6};
  text-transform: uppercase;
`,c=r.default.h1.withConfig({displayName:"Heading__HeadingInternal",componentId:"sc-b33f802a-0"})`
  margin: 0;
  ${({$styleVariant:e})=>(function(e){switch(e){case"h0":return n;case"h1":default:return o;case"h2":return a;case"h3":return s;case"h4":return l;case"h5":return d;case"h6":return u}})(e)}
`;var f=(0,r.default)(c).withConfig({displayName:"Heading___StyledHeadingInternal",componentId:"sc-b33f802a-1"})`${e=>e.$_css}`;let g=i.forwardRef(function({children:e,css:i,id:r,renderAs:n,styleAs:o,...a},s){let l=o??n;return(0,t.jsx)(f,{ref:s,$styleVariant:l,as:"h0"===n?"h1":n,id:r,...a,$_css:i,children:e})});e.s(["Heading",0,g,"HeadingFiveStyles",0,d,"HeadingFourStyles",0,l,"HeadingOneStyles",0,o,"HeadingSixStyles",0,u,"HeadingThreeStyles",0,s,"HeadingTwoStyles",0,a,"HeadingZeroStyles",0,n])},650617,e=>{"use strict";var t=e.i(843476),i=e.i(271645),r=e.i(997053);let n=r.css`
  font-size: ${({theme:e})=>e.fontSize.SMALL};
  line-height: ${({theme:e})=>e.lineHeight.body.s};
  font-weight: ${({theme:e})=>e.fontWeight.NORMAL};
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`,o=r.css`
  font-size: ${({theme:e})=>e.fontSize.DEFAULT};
  line-height: ${({theme:e})=>e.lineHeight.body.base};
  font-weight: ${({theme:e})=>e.fontWeight.LIGHT};
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`,a=r.css`
  font-size: ${({theme:e})=>e.fontSize.MEDIUM};
  line-height: ${({theme:e})=>e.lineHeight.body.m};
  font-weight: ${({theme:e})=>e.fontWeight.LIGHT};
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`,s=r.css`
  font-size: ${({theme:e})=>e.fontSize.LARGE};
  line-height: ${({theme:e})=>e.lineHeight.body.l};
  font-weight: ${({theme:e})=>e.fontWeight.LIGHT};
  margin-bottom: 25px;

  &:last-child {
    margin-bottom: 0;
  }
`,l=r.css`
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
`,d=r.default.p.withConfig({displayName:"Text__TextWrapper",componentId:"sc-f5e7deee-0"})`
  margin: 0;

  ${({$size:e})=>{switch(e){case"small":return n;case"default":default:return o;case"medium":return a;case"large":return s;case"extra-large":return l}}}

  ${({$color:e})=>{switch(e){case"loud":return r.css`
          color: ${({theme:e})=>e.fontColor.LOUD};
        `;case"muted":return r.css`
          color: ${({theme:e})=>e.fontColor.MUTED};
        `;default:return r.css`
          color: ${({theme:e})=>e.fontColor.DEFAULT};
        `}}}
`;var u=(0,r.default)(d).withConfig({displayName:"Text___StyledTextWrapper",componentId:"sc-f5e7deee-1"})`${e=>e.$_css}`;let c=i.forwardRef(function({children:e,color:i,css:r,className:n,size:o,...a},s){return(0,t.jsx)(u,{ref:s,$color:i,$size:o,className:n,...a,$_css:r,children:e})});e.s(["DefaultTextStyles",0,o,"ExtraLargeTextStyles",0,l,"LargeTextStyles",0,s,"MediumTextStyles",0,a,"SmallTextStyles",0,n,"Text",0,c])},812488,e=>{"use strict";var t=e.i(843476),i=e.i(271645),r=e.i(997053);let n=r.default.div.withConfig({displayName:"TronDivider__Divider",componentId:"sc-824f0806-0"})`
  height: 1px;
  width: 100%;
  background: linear-gradient(
      90deg,
      ${({theme:e})=>e.borderColor.STRONG} 0%,
      ${({theme:e})=>e.borderColor.DEFAULT} 50%,
      ${({theme:e})=>e.borderColor.STRONG} 100%
    ),
    ${({theme:e})=>e.backgroundColor};
`,o=r.default.div.withConfig({displayName:"TronDivider__Wrapper",componentId:"sc-824f0806-1"})`
  width: 100%;
  transform: ${({$flipped:e})=>e?"rotate(180deg)":"unset"};
  margin-bottom: 30px;

  ${n} {
    &:nth-child(1) {
      margin-bottom: 3px;
    }

    &:nth-child(2) {
      margin-bottom: 4px;
      opacity: 0.9;
    }

    &:nth-child(3) {
      margin-bottom: 5px;
      opacity: 0.8;
    }

    &:nth-child(4) {
      margin-bottom: 6px;
      opacity: 0.7;
    }

    &:nth-child(5) {
      margin-bottom: 7px;
      opacity: 0.6;
    }

    &:nth-child(6) {
      margin-bottom: 8px;
      opacity: 0.5;
    }

    &:nth-child(7) {
      margin-bottom: 9px;
      opacity: 0.4;
    }

    &:nth-child(8) {
      margin-bottom: 10px;
      opacity: 0.3;
    }

    &:nth-child(9) {
      opacity: 0.2;
    }
  }
`,a=i.memo(function({className:e,flipped:i,...r}){return(0,t.jsxs)(o,{...r,$flipped:i,className:e,children:[(0,t.jsx)(n,{}),(0,t.jsx)(n,{}),(0,t.jsx)(n,{}),(0,t.jsx)(n,{}),(0,t.jsx)(n,{}),(0,t.jsx)(n,{}),(0,t.jsx)(n,{}),(0,t.jsx)(n,{}),(0,t.jsx)(n,{})]})});e.s(["TronDivider",0,a])},850034,e=>{"use strict";var t=e.i(843476),i=e.i(271645),r=e.i(53496),n=e.i(656871),o=e.i(627871),a=e.i(35820),s=e.i(182180),l=e.i(472945);let d=["ended","play","timeupdate"];var u=e.i(806406);let c=i.forwardRef(function({src:e="",title:c,...f},g){let h,p=(0,i.useMemo)(()=>(function(e){try{let t=new URL(e,"https://hex.tech"),i="youtube"===(0,n.getVideoProviderFromHostname)(t.hostname);if(!i)return{isYouTube:i,src:e};return t.searchParams.set("enablejsapi","1"),{isYouTube:i,src:t.href}}catch{return{isYouTube:!1,src:e}}})(e),[e]),m=(0,i.useMemo)(()=>(0,o.getVideoMetadata)(e,c),[e,c]),y=(0,u.useYouTubeVideoTracking)(e,c),b=(h=(0,i.useRef)(null),(0,i.useEffect)(()=>{let t=h.current;if(!t)return;let i=!1,r=new Set,n=new URL(e,window.location.href).origin,o=()=>{d.forEach(e=>{t.contentWindow?.postMessage(JSON.stringify({context:"player.js",method:"addEventListener",value:e,version:"0.0.11"}),n)})},u=d=>{if(d.origin!==n||d.source!==t.contentWindow)return;let u=function(e){try{let t="string"==typeof e?JSON.parse(e):e;return"object"==typeof t&&null!==t?t:void 0}catch{return}}(d.data);if(u?.context==="player.js")if("ready"===u.event)o();else if("play"!==u.event||i)if("timeupdate"===u.event){let{duration:t,seconds:i}=u.value??{};if("number"!=typeof t||"number"!=typeof i||t<=0)return;(0,a.getNewVideoProgressThresholds)(i/t*100,r).forEach(t=>{r.add(t),(0,l.trackVideoProgress)(e,t,c)})}else"ended"===u.event&&((0,a.getNewVideoProgressThresholds)(100,r).forEach(t=>{r.add(t),(0,l.trackVideoProgress)(e,t,c)}),i=!1);else i=!0,(0,s.trackVideoPlayed)(e,c)};return t.addEventListener("load",o),window.addEventListener("message",u),()=>{t.removeEventListener("load",o),window.removeEventListener("message",u)}},[c,e]),h),v=p.isYouTube?y:"loom"===m.videoProvider?b:null,w=(0,i.useMemo)(()=>(0,r.combineRefs)(g,v),[g,v]);return(0,t.jsx)("iframe",{...f,ref:w,src:p.src,title:c})});e.s(["VideoIframe",0,c],850034)},806406,e=>{"use strict";let t;var i=e.i(271645),r=e.i(35820),n=e.i(182180),o=e.i(472945);e.s(["useYouTubeVideoTracking",0,function(e,a,s){let l=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let i,s,d=l.current;if(!d)return;let u=!1,c=!1,f=new Set,g=()=>{void 0!==i&&window.clearInterval(i),i=void 0},h=()=>{if(!s)return;let t=s.getDuration();if(!Number.isFinite(t)||t<=0)return;let i=s.getCurrentTime()/t*100;(0,r.getNewVideoProgressThresholds)(i,f).forEach(t=>{f.add(t),(0,o.trackVideoProgress)(e,t,a)})},p=t=>{1===t?(c||(c=!0,(0,n.trackVideoPlayed)(e,a)),void 0===i&&(i=window.setInterval(h,1e3))):(0===t||2===t)&&(h(),g(),0===t&&(c=!1))};return(window.YT?.Player?Promise.resolve(window.YT):t||(t=new Promise(e=>{let t=window.onYouTubeIframeAPIReady;if(window.onYouTubeIframeAPIReady=()=>{t?.(),window.YT&&e(window.YT)},!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')){let e=document.createElement("script");e.src="https://www.youtube.com/iframe_api",document.head.appendChild(e)}}))).then(e=>{u||(s=new e.Player(d,{events:{onReady:()=>p(s?.getPlayerState()??-1),onStateChange:e=>p(e.data)}}))}),()=>{u=!0,g(),s?.destroy()}},[s,a,e]),l}],806406)},529376,e=>{"use strict";var t=e.i(271645);e.s(["useIsHydrated",0,function(){let[e,i]=(0,t.useReducer)(()=>!0,!1);return(0,t.useEffect)(()=>{i()},[]),e}])},288839,e=>{"use strict";var t=e.i(271645);e.s(["default",0,function(e,i=!1){let r=(0,t.useCallback)(t=>{let i=window.matchMedia(e);function r(e){t(e.matches)}return i.addEventListener("change",r),()=>{i.removeEventListener("change",r)}},[e]),n=(0,t.useCallback)(()=>window.matchMedia(e).matches,[e]),o=(0,t.useCallback)(()=>i,[i]);return(0,t.useSyncExternalStore)(r,n,o)}])},53496,e=>{"use strict";e.s(["combineRefs",0,function(...e){return function(t){e.forEach(e=>{if(null!==e){if("function"==typeof e)return void e(t);e.current=t}})}}])},35820,472945,e=>{"use strict";let t=[25,50,75,90];e.s(["getNewVideoProgressThresholds",0,function(e,i){return t.filter(t=>e>=t&&!i.has(t))}],35820);var i=e.i(395967),r=e.i(924837),n=e.i(759609),o=e.i(627871);e.s(["trackVideoProgress",0,function(e,t,a){let s=(0,o.getVideoMetadata)(e,a),l={page_path:(0,n.getCurrentPagePath)(),progress_pct:t,video_id:s.videoId,video_title:s.videoTitle,video_url:s.videoUrl};(0,i.trackRudderstack)(r.TRACKING_EVENTS.VideoProgress,l)}],472945)},676662,e=>{"use strict";var t=e.i(287022),i=e.i(271645),r=e.i(737806);e.s(["useAnimationFrame",0,function(e){let n=(0,i.useRef)(0),{isStatic:o}=(0,i.useContext)(r.MotionConfigContext);(0,i.useEffect)(()=>{if(o)return;let i=({timestamp:t,delta:i})=>{n.current||(n.current=t),e(t-n.current,i)};return t.frame.update(i,!0),()=>(0,t.cancelFrame)(i)},[e])}])},605500,(e,t,i)=>{"use strict";e.i(247167),Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"Image",{enumerable:!0,get:function(){return x}});let r=e.r(555682),n=e.r(190809),o=e.r(843476),a=n._(e.r(271645)),s=r._(e.r(174080)),l=r._(e.r(325633)),d=e.r(908927),u=e.r(987690),c=e.r(918556),f=e.r(65856),g=r._(e.r(1948)),h=e.r(818581),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75,90],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e,t,i,r,n,o,a){let s=e?.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),i?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,n=!1;i.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}r?.current&&r.current(e)}}))}function y(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let b="u"<typeof window?a.useEffect:a.useLayoutEffect,v=(0,a.forwardRef)(({src:e,srcSet:t,sizes:i,height:r,width:n,decoding:s,className:l,style:d,fetchPriority:u,placeholder:c,loading:f,unoptimized:g,fill:p,onLoadRef:v,onLoadingCompleteRef:w,setBlurComplete:x,setShowAltText:$,sizesInput:_,onLoad:S,onError:C,...E},P)=>{let j=(0,a.useRef)(!1),O=(0,a.useRef)(null);b(()=>{let{current:e}=j,{current:t}=O;e||null===t||(C&&(t.src=t.src),t.complete&&m(t,c,v,w,x,g,_),j.current=!0)},[e,c,v,w,C,g,_]);let R=(0,h.useMergedRef)(P,O);return(0,o.jsx)("img",{...E,...y(u),loading:f,width:n,height:r,decoding:s,"data-nimg":p?"fill":"1",className:l,style:d,sizes:i,srcSet:t,src:e,ref:R,onLoad:e=>{m(e.currentTarget,c,v,w,x,g,_)},onError:e=>{$(!0),"empty"!==c&&x(!0),C&&C(e)}})});function w({isAppRouter:e,imgAttributes:t}){let i={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...y(t.fetchPriority)};return e&&s.default.preload?(s.default.preload(t.src,i),null):(0,o.jsx)(l.default,{children:(0,o.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...i},"__nimg-"+t.src+t.srcSet+t.sizes)})}let x=(0,a.forwardRef)((e,t)=>{let i=(0,a.useContext)(f.RouterContext),r=(0,a.useContext)(c.ImageConfigContext),n=(0,a.useMemo)(()=>{let e=p||r||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t),n=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:i,qualities:n,localPatterns:"u"<typeof window?r?.localPatterns:e.localPatterns}},[r]),{onLoad:s,onLoadingComplete:l}=e,h=(0,a.useRef)(s);(0,a.useEffect)(()=>{h.current=s},[s]);let m=(0,a.useRef)(l);(0,a.useEffect)(()=>{m.current=l},[l]);let[y,b]=(0,a.useState)(!1),[x,$]=(0,a.useState)(!1),{props:_,meta:S}=(0,d.getImgProps)(e,{defaultLoader:g.default,imgConf:n,blurComplete:y,showAltText:x});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v,{..._,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:h,onLoadingCompleteRef:m,setBlurComplete:b,setShowAltText:$,sizesInput:e.sizes,ref:t}),S.preload?(0,o.jsx)(w,{isAppRouter:!i,imgAttributes:_}):null]})});("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},670965,(e,t,i)=>{"use strict";function r(e,t){let i=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-i)<Math.abs(e-i)?t:e,t.qualities[0]):i}Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"findClosestQuality",{enumerable:!0,get:function(){return r}})},908927,(e,t,i)=>{"use strict";e.i(247167),Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"getImgProps",{enumerable:!0,get:function(){return d}});let r=e.r(543369),n=e.r(488143),o=e.r(987690),a=["-moz-initial","fill","none","scale-down",void 0];function s(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function d({src:e,sizes:t,unoptimized:i=!1,priority:u=!1,preload:c=!1,loading:f,className:g,quality:h,width:p,height:m,fill:y=!1,style:b,overrideSrc:v,onLoad:w,onLoadingComplete:x,placeholder:$="empty",blurDataURL:_,fetchPriority:S,decoding:C="async",layout:E,objectFit:P,objectPosition:j,lazyBoundary:O,lazyRoot:R,...T},I){var z;let L,M,D,{imgConf:A,showAltText:N,blurComplete:k,defaultLoader:H}=I,U=A||o.imageConfigDefault;if("allSizes"in U)L=U;else{let e=[...U.deviceSizes,...U.imageSizes].sort((e,t)=>e-t),t=U.deviceSizes.sort((e,t)=>e-t),i=U.qualities?.sort((e,t)=>e-t);L={...U,allSizes:e,deviceSizes:t,qualities:i}}if(void 0===H)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let V=T.loader||H;delete T.loader,delete T.srcSet;let W="__next_img_default"in V;if(W){if("custom"===L.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=V;V=t=>{let{config:i,...r}=t;return e(r)}}if(E){"fill"===E&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[E];e&&(b={...b,...e});let i={responsive:"100vw",fill:"100vw"}[E];i&&!t&&(t=i)}let F="",G=l(p),Y=l(m),q=!1;if((z=e)&&"object"==typeof z&&(s(z)||void 0!==z.src)){let t=s(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(M=t.blurWidth,D=t.blurHeight,_=_||t.blurDataURL,F=t.src,q=/\.avif(?:\?|$)/i.test(F),!y)if(G||Y){if(G&&!Y){let e=G/t.width;Y=Math.round(t.height*e)}else if(!G&&Y){let e=Y/t.height;G=Math.round(t.width*e)}}else G=t.width,Y=t.height}q&&"blur"===$&&!_&&($="empty");let B=!u&&!c&&("lazy"===f||void 0===f);(!(e="string"==typeof e?e:F)||e.startsWith("data:")||e.startsWith("blob:"))&&(i=!0,B=!1),L.unoptimized&&(i=!0),W&&!L.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(i=!0);let X=l(h),J=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:j}:{},N?{}:{color:"transparent"},b),K=k||"empty"===$?null:"blur"===$?`url("data:image/svg+xml;charset=utf-8,${(0,n.getImageBlurSvg)({widthInt:G,heightInt:Y,blurWidth:M,blurHeight:D,blurDataURL:_||"",objectFit:J.objectFit})}")`:`url("${$}")`,Q=a.includes(J.objectFit)?"fill"===J.objectFit?"100% 100%":"cover":J.objectFit,Z=K?{backgroundSize:Q,backgroundPosition:J.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:K}:{},ee=function({config:e,src:t,unoptimized:i,width:n,quality:o,sizes:a,loader:s}){if(i){if(t.startsWith("/")&&!t.startsWith("//")){let e=(0,r.getDeploymentId)();if(t.includes("/_next/static/immutable")&&!(0,r.getAssetToken)())e=void 0;else if(e){let i=t.indexOf("?");if(-1!==i){let r=new URLSearchParams(t.slice(i+1));r.get("dpl")||(r.append("dpl",e),t=t.slice(0,i)+"?"+r.toString())}else t+=`?dpl=${e}`}}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:l,kind:d}=function({deviceSizes:e,allSizes:t},i,r){if(r){let i=/(^|\s)(1?\d?\d)vw/g,n=[];for(let e;e=i.exec(r);)n.push(parseInt(e[2]));if(n.length){let i=.01*Math.min(...n);return{widths:t.filter(t=>t>=e[0]*i),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof i?{widths:e,kind:"w"}:{widths:[...new Set([i,2*i].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,n,a),u=l.length-1;return{sizes:a||"w"!==d?a:"100vw",srcSet:l.map((i,r)=>`${s({config:e,src:t,quality:o,width:i})} ${"w"===d?i:r+1}${d}`).join(", "),src:s({config:e,src:t,quality:o,width:l[u]})}}({config:L,src:e,unoptimized:i,width:G,quality:X,sizes:t,loader:V}),et=B?"lazy":f;return{props:{...T,loading:et,fetchPriority:S,width:G,height:Y,decoding:C,className:g,style:{...J,...Z},sizes:ee.sizes,srcSet:ee.srcSet,src:v||ee.src},meta:{unoptimized:i,preload:c||u,placeholder:$,fill:y}}}},325633,(e,t,i)=>{"use strict";e.i(247167),Object.defineProperty(i,"__esModule",{value:!0});var r={default:function(){return p},defaultHead:function(){return c}};for(var n in r)Object.defineProperty(i,n,{enumerable:!0,get:r[n]});let o=e.r(555682),a=e.r(190809),s=e.r(843476),l=a._(e.r(271645)),d=o._(e.r(898879)),u=e.r(742732);function c(){return[(0,s.jsx)("meta",{charSet:"utf-8"},"charset"),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}let g=["name","httpEquiv","charSet","itemProp"];function h(e){let t,i,r,n;return e.reduce(f,[]).reverse().concat(c().reverse()).filter((t=new Set,i=new Set,r=new Set,n={},e=>{let o=!0,a=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){a=!0;let i=e.key.slice(e.key.indexOf("$")+1);t.has(i)?o=!1:t.add(i)}switch(e.type){case"title":case"base":i.has(e.type)?o=!1:i.add(e.type);break;case"meta":for(let t=0,i=g.length;t<i;t++){let i=g[t];if(e.props.hasOwnProperty(i))if("charSet"===i)r.has(i)?o=!1:r.add(i);else{let t=e.props[i],r=n[i]||new Set;("name"!==i||!a)&&r.has(t)?o=!1:(r.add(t),n[i]=r)}}}return o})).reverse().map((e,t)=>{let i=e.key||t;return l.default.cloneElement(e,{key:i})})}let p=function({children:e}){let t=(0,l.useContext)(u.HeadManagerContext);return(0,s.jsx)(d.default,{reduceComponentsToState:h,headManager:t,children:e})};("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},488143,(e,t,i)=>{"use strict";function r({widthInt:e,heightInt:t,blurWidth:i,blurHeight:n,blurDataURL:o,objectFit:a}){let s=i?40*i:e,l=n?40*n:t,d=s&&l?`viewBox='0 0 ${s} ${l}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${d}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${d?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${o}'/%3E%3C/svg%3E`}Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},918556,(e,t,i)=>{"use strict";e.i(247167),Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let r=e.r(555682)._(e.r(271645)),n=e.r(987690),o=r.default.createContext(n.imageConfigDefault)},65856,(e,t,i)=>{"use strict";e.i(247167),Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"RouterContext",{enumerable:!0,get:function(){return r}});let r=e.r(555682)._(e.r(271645)).default.createContext(null)},987690,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r={VALID_LOADERS:function(){return o},imageConfigDefault:function(){return a}};for(var n in r)Object.defineProperty(i,n,{enumerable:!0,get:r[n]});let o=["default","imgix","cloudinary","akamai","custom"],a={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumDiskCacheSize:void 0,maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1,customCacheHandler:!1}},794909,(e,t,i)=>{"use strict";e.i(247167),Object.defineProperty(i,"__esModule",{value:!0});var r={default:function(){return u},getImageProps:function(){return d}};for(var n in r)Object.defineProperty(i,n,{enumerable:!0,get:r[n]});let o=e.r(555682),a=e.r(908927),s=e.r(605500),l=o._(e.r(1948));function d(e){let{props:t}=(0,a.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75,90],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}}let u=s.Image},657688,(e,t,i)=>{t.exports=e.r(794909)},1948,(e,t,i)=>{"use strict";e.i(247167),Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return a}});let r=e.r(670965),n=e.r(543369);function o({config:e,src:t,width:i,quality:a}){let s=(0,n.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//"))if(t.includes("/_next/static/immutable")&&!(0,n.getAssetToken)())s=void 0;else{let e=t.indexOf("?");if(-1!==e){let i=new URLSearchParams(t.slice(e+1)),r=i.get("dpl");if(r){s=r,i.delete("dpl");let n=i.toString();t=t.slice(0,e)+(n?"?"+n:"")}}}if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let l=(0,r.findClosestQuality)(a,e);return`${e.path}?url=${encodeURIComponent(t)}&w=${i}&q=${l}${t.startsWith("/")&&s?`&dpl=${s}`:""}`}o.__next_img_default=!0;let a=o},898879,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return s}});let r=e.r(271645),n="u"<typeof window,o=n?()=>{}:r.useLayoutEffect,a=n?()=>{}:r.useEffect;function s(e){let{headManager:t,reduceComponentsToState:i}=e;function s(){if(t&&t.mountedInstances){let e=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(i(e))}}return n&&(t?.mountedInstances?.add(e.children),s()),o(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),o(()=>(t&&(t._pendingUpdate=s),()=>{t&&(t._pendingUpdate=s)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}}]);