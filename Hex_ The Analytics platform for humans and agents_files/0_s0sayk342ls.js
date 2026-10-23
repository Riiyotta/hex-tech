(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,427056,e=>{"use strict";var t=e.i(843476),o=e.i(271645),n=e.i(997053),r=e.i(967109),a=e.i(643741),i=e.i(392944),c=e.i(775732),s=e.i(352636),u=e.i(596064),l=e.i(966187);let h=o.memo(function({dashedLines:e,isActiveAnimation:n=!1,windowTitlePosition:i,className:c,scrollToAnchorId:h,shadowStyle:g="default",windowTitle:v="Threads"}){let x=o.useRef(null),m=o.useRef(!0),[w,C]=o.useState(a.INITIAL_THREAD_CONTENT);o.useEffect(()=>{let e=setTimeout(()=>{x.current&&x.current.scrollTo({top:x.current.scrollHeight,behavior:"smooth"})},1e3);return()=>clearTimeout(e)},[]),o.useEffect(()=>{if(m.current){m.current=!1;return}requestAnimationFrame(()=>{x.current&&x.current.scrollTo({top:x.current.scrollHeight,behavior:"smooth"})})},[w]);let S=o.useCallback(()=>{C(e=>[...e,(0,r.getHexWebsiteMessageFromUserSubmission)("Threads")])},[]);return(0,t.jsxs)(d,{accessibleLabel:"Product demonstration of a Hex thread answering a revenue question",className:c,dashedLines:e,scrollToAnchorId:h,shadowStyle:g,windowTitle:v,windowTitlePosition:i,children:[(0,t.jsx)(u.ProjectHeader,{view:"agent"}),(0,t.jsx)(p,{ref:x,children:w.map((e,o)=>(0,t.jsx)(l.ThreadItem,{agent:"Threads",...e},o))}),(0,t.jsx)(s.PromptBar,{isFocused:n,onSubmit:S})]})}),d=(0,n.styled)(c.InteractiveFeatureWrapper).withConfig({displayName:"InteractiveFeatureThreads__Wrapper",componentId:"sc-f034a8de-0"})``,p=(0,n.styled)(i.IntentScrollable2).withConfig({displayName:"InteractiveFeatureThreads__Content",componentId:"sc-f034a8de-1"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px;
  flex: 1 1 auto;
  overflow-anchor: none;
`;e.s(["InteractiveFeatureThreads",0,h])},72268,e=>{"use strict";var t=e.i(843476),o=e.i(271645),n=e.i(997053),r=e.i(289388),a=e.i(967109),i=e.i(975336);let c=e=>(7*e%11-5)*.4,s=[{name:a.PRODUCT_NAMES.One,color:"#472d7b",points:[{account:"Nexus Corp",revenue:3.1,growth:5.8},{account:"Stellar Dynamics",revenue:3.9,growth:1.2},{account:"Orion Labs",revenue:4.4,growth:8.3},{account:"Zenith Industries",revenue:5.2,growth:2.7},{account:"Quantum Solutions",revenue:5.8,growth:10.1},{account:"Apex Systems",revenue:6.3,growth:4.4},{account:"Nova Enterprises",revenue:7.1,growth:7.6},{account:"Titan Corp",revenue:7.9,growth:1.8},{account:"Helix Tech",revenue:8.6,growth:6.2},{account:"Vortex Inc",revenue:9.4,growth:3.5},{account:"Prism Holdings",revenue:10.2,growth:9.4},{account:"Flux Dynamics",revenue:10.9,growth:5.1},{account:"Echo Systems",revenue:11.5,growth:11.2},{account:"Vertex Labs",revenue:3.5,growth:11.6},{account:"Cypher Inc",revenue:4.8,growth:6.9},{account:"Axiom Dynamics",revenue:5.5,growth:.8},{account:"Parallax Corp",revenue:6.7,growth:8.8},{account:"Matrix Alpha",revenue:7.4,growth:3.1},{account:"Pulse Corp",revenue:8.2,growth:11.4},{account:"Drift Labs",revenue:9.1,growth:4.7},{account:"Core Systems",revenue:9.8,growth:7.3},{account:"Edge Tech",revenue:10.6,growth:1.5},{account:"Sync Holdings",revenue:11.2,growth:9.9},{account:"Link Dynamics",revenue:4.1,growth:4.2},{account:"Node Corp",revenue:5.9,growth:10.7},{account:"Path Systems",revenue:6.1,growth:2.3},{account:"Bolt Industries",revenue:7.6,growth:6.8},{account:"Cipher Holdings",revenue:8.9,growth:.4},{account:"Delta Systems",revenue:9.6,growth:8.1},{account:"Forge Corp",revenue:10.4,growth:3.9},{account:"Grid Tech",revenue:11.1,growth:7.1},{account:"Halo Labs",revenue:3.7,growth:9.2},{account:"Ionic Corp",revenue:4.6,growth:2.1},{account:"Jet Systems",revenue:6.5,growth:5.4},{account:"Kappa Holdings",revenue:7.2,growth:10.4},{account:"Lambda Tech",revenue:8.4,growth:1.1},{account:"Metro Inc",revenue:10.1,growth:6.6},{account:"Neon Labs",revenue:11.8,growth:4.3}]},{name:a.PRODUCT_NAMES.Two,color:"#3b528b",points:[{account:"Pulse Networks",revenue:8.2,growth:5.3},{account:"Stratos Group",revenue:9.1,growth:9.7},{account:"Nimbus Tech",revenue:9.8,growth:3.2},{account:"Axiom Corp",revenue:10.5,growth:12.8},{account:"Cipher Systems",revenue:11.2,growth:6.4},{account:"Nebula Industries",revenue:11.9,growth:15.1},{account:"Radiant Solutions",revenue:12.7,growth:8.9},{account:"Cosmos Enterprises",revenue:13.4,growth:4.6},{account:"Vector Labs",revenue:14.1,growth:11.3},{account:"Spectrum Inc",revenue:14.9,growth:7.1},{account:"Pinnacle Corp",revenue:15.6,growth:14.4},{account:"Catalyst Group",revenue:16.3,growth:5.8},{account:"Vector Tech",revenue:8.6,growth:10.9},{account:"Horizon Systems",revenue:9.4,growth:16.2},{account:"Quantum Shift",revenue:10.1,growth:7.7},{account:"Stellar Wave",revenue:10.8,growth:13.5},{account:"Cortex Labs",revenue:11.5,growth:4.1},{account:"Apex Data",revenue:12.3,growth:10.2},{account:"Nova Systems",revenue:13.1,growth:16.8},{account:"Orbit Labs",revenue:13.8,growth:6.3},{account:"Flux Tech",revenue:14.5,growth:12.1},{account:"Prism Corp",revenue:15.2,growth:8.4},{account:"Echo Data",revenue:16.1,growth:3.9},{account:"Zenith Tech",revenue:16.8,growth:11.6},{account:"Alpha Networks",revenue:8.9,growth:14.7},{account:"Beta Holdings",revenue:9.7,growth:5.6},{account:"Gamma Corp",revenue:10.9,growth:9.3},{account:"Delta Tech",revenue:12.1,growth:15.5},{account:"Epsilon Labs",revenue:13.6,growth:7.9},{account:"Zeta Systems",revenue:14.8,growth:4.4},{account:"Eta Industries",revenue:15.9,growth:12.7},{account:"Theta Corp",revenue:8.4,growth:8.1},{account:"Iota Solutions",revenue:11.7,growth:6.8},{account:"Kappa Tech",revenue:12.9,growth:13.9},{account:"Lambda Group",revenue:15.4,growth:10.5},{account:"Mu Holdings",revenue:16.5,growth:9.1}]},{name:a.PRODUCT_NAMES.Three,color:"#21918c",points:[{account:"Aether Corp",revenue:14.3,growth:10.8},{account:"Phoenix Labs",revenue:15.4,growth:17.2},{account:"Synergy Tech",revenue:16.2,growth:8.9},{account:"Meridian Inc",revenue:17.3,growth:21.4},{account:"Polaris Group",revenue:18.1,growth:12.6},{account:"Fusion Dynamics",revenue:19.2,growth:18.8},{account:"Astral Systems",revenue:20.4,growth:9.5},{account:"Quantum Leap",revenue:21.3,growth:22.7},{account:"Nexgen Corp",revenue:22.5,growth:14.3},{account:"Omni Solutions",revenue:23.4,growth:19.6},{account:"Vertex Holdings",revenue:24.6,growth:11.2},{account:"Zenon Industries",revenue:25.7,growth:16.9},{account:"Pulsar Tech",revenue:26.8,growth:23.1},{account:"Ionic Labs",revenue:27.6,growth:13.7},{account:"Stratum Corp",revenue:14.9,growth:20.3},{account:"Lunar Tech",revenue:16.7,growth:11.8},{account:"Vanguard Systems",revenue:17.8,growth:24.2},{account:"Crest Data",revenue:19.6,growth:15.4},{account:"Solar Corp",revenue:20.9,growth:8.6},{account:"Drift Tech",revenue:22.1,growth:19.1},{account:"Arc Labs",revenue:23.8,growth:10.4},{account:"Ember Systems",revenue:25.2,growth:21.8},{account:"Radix Corp",revenue:26.4,growth:13.2},{account:"Kinetic Data",revenue:27.9,growth:17.5},{account:"Praxis Tech",revenue:15.1,growth:14.6},{account:"Surge Labs",revenue:18.4,growth:22.9},{account:"Nucleus Corp",revenue:21.7,growth:9.8},{account:"Proton Tech",revenue:24.1,growth:18.3},{account:"Neutron Labs",revenue:16.4,growth:23.5},{account:"Electron Inc",revenue:19.9,growth:12.1},{account:"Photon Systems",revenue:22.8,growth:20.6},{account:"Quark Holdings",revenue:25.9,growth:15.1},{account:"Boson Corp",revenue:14.6,growth:16.4},{account:"Fermion Tech",revenue:17.1,growth:9.2},{account:"Hadron Labs",revenue:20.3,growth:17.8},{account:"Lepton Inc",revenue:23.2,growth:11.5},{account:"Meson Systems",revenue:26.1,growth:20.2},{account:"Gluon Corp",revenue:28.2,growth:14.9}]},{name:a.PRODUCT_NAMES.Four,color:"#5ec962",points:[{account:"Crest Corp",revenue:26.2,growth:9.7},{account:"Solaris Inc",revenue:27.4,growth:16.2},{account:"Drift Systems",revenue:28.3,growth:7.8},{account:"Arcane Tech",revenue:29.5,growth:19.4},{account:"Ember Group",revenue:30.4,growth:11.3},{account:"Radix Labs",revenue:31.6,growth:14.8},{account:"Eon Dynamics",revenue:32.7,growth:8.5},{account:"Gravitas Corp",revenue:33.9,growth:17.6},{account:"Lunar Solutions",revenue:35.1,growth:12.1},{account:"Pyxis Holdings",revenue:36.2,growth:20.3},{account:"Tesseract Inc",revenue:37.4,growth:9.2},{account:"Momentum Tech",revenue:38.5,growth:15.7},{account:"Kinetic Systems",revenue:39.7,growth:10.4},{account:"Orbital Corp",revenue:26.8,growth:18.9},{account:"Prism Labs",revenue:28.9,growth:13.5},{account:"Nexus Wave",revenue:30.1,growth:7.3},{account:"Titan Edge",revenue:31.2,growth:20.8},{account:"Beacon Corp",revenue:33.4,growth:10.9},{account:"Valor Systems",revenue:34.6,growth:16.4},{account:"Frontier Labs",revenue:36.8,growth:8.1},{account:"Summit Tech",revenue:38.1,growth:19.1},{account:"Equinox Data",revenue:39.3,growth:11.7},{account:"Helios Corp",revenue:27.1,growth:14.2},{account:"Paragon Labs",revenue:29.2,growth:20.5},{account:"Venture Tech",revenue:32.3,growth:9.6},{account:"Axiom Prime",revenue:34.2,growth:17.3},{account:"Cipher Edge",revenue:35.8,growth:12.8},{account:"Delta Prime",revenue:37.9,growth:7.6},{account:"Forge Systems",revenue:39.8,growth:15.2},{account:"Grid Holdings",revenue:26.5,growth:11.6},{account:"Halo Corp",revenue:30.7,growth:18.4},{account:"Ion Tech",revenue:32.9,growth:8.9},{account:"Jet Prime",revenue:35.4,growth:19.7},{account:"Krypton Labs",revenue:38.7,growth:13.1},{account:"Logic Systems",revenue:28.6,growth:10.2},{account:"Matrix Prime",revenue:33.1,growth:14.6},{account:"Neon Corp",revenue:36.5,growth:21.2}]},{name:a.PRODUCT_NAMES.Five,color:"#addc30",points:[{account:"Beacon Labs",revenue:36.3,growth:5.2},{account:"Valor Tech",revenue:37.2,growth:11.8},{account:"Frontier Inc",revenue:38.4,growth:7.4},{account:"Summit Group",revenue:39.1,growth:14.6},{account:"Equinox Corp",revenue:40.3,growth:4.9},{account:"Helios Systems",revenue:41.2,growth:10.3},{account:"Paragon Tech",revenue:42.4,growth:6.7},{account:"Venture Dynamics",revenue:43.3,growth:13.2},{account:"Ignite Labs",revenue:44.5,growth:8.6},{account:"Praxis Holdings",revenue:45.4,growth:15.4},{account:"Surge Inc",revenue:46.6,growth:5.8},{account:"Caliber Corp",revenue:36.8,growth:12.5},{account:"Elevate Solutions",revenue:38.9,growth:4.3},{account:"Forge Prime",revenue:39.7,growth:9.7},{account:"Apex Wave",revenue:41.6,growth:15.9},{account:"Zenith Labs",revenue:42.8,growth:7.1},{account:"Aurora Corp",revenue:44.1,growth:11.4},{account:"Atlas Tech",revenue:45.9,growth:6.2},{account:"Sentry Systems",revenue:37.5,growth:14.1},{account:"Blaze Corp",revenue:40.7,growth:8.3},{account:"Lynx Labs",revenue:43.8,growth:5.5},{account:"Edge Data",revenue:46.2,growth:12.9},{account:"Triton Tech",revenue:38.1,growth:10.6},{account:"Omega Corp",revenue:41.9,growth:4.7},{account:"Sigma Tech",revenue:44.7,growth:9.1},{account:"Tau Holdings",revenue:36.5,growth:15.7},{account:"Upsilon Labs",revenue:39.4,growth:6.9},{account:"Phi Systems",revenue:42.2,growth:13.8},{account:"Chi Corp",revenue:45.1,growth:7.6},{account:"Psi Tech",revenue:46.8,growth:10.9},{account:"Rho Holdings",revenue:37.8,growth:8.1},{account:"Nu Labs",revenue:40.1,growth:14.4},{account:"Xi Systems",revenue:43.4,growth:5.1},{account:"Omicron Corp",revenue:46.4,growth:11.7}]},{name:a.PRODUCT_NAMES.Six,color:"#fde725",points:[{account:"Atlas Corp",revenue:42.3,growth:6.8},{account:"Sentry Tech",revenue:43.4,growth:12.4},{account:"Blaze Industries",revenue:44.6,growth:3.7},{account:"Lynx Systems",revenue:45.5,growth:9.1},{account:"Quantum Edge",revenue:46.7,growth:5.3},{account:"Triton Labs",revenue:47.8,growth:14.2},{account:"Epoch Inc",revenue:48.9,growth:7.6},{account:"Infinity Group",revenue:50.1,growth:2.9},{account:"Clarity Corp",revenue:51.2,growth:10.8},{account:"Impulse Tech",revenue:42.8,growth:4.1},{account:"Array Holdings",revenue:44.1,growth:11.6},{account:"Cascade Systems",revenue:45.9,growth:1.8},{account:"Dynamo Labs",revenue:47.2,growth:8.4},{account:"Ripple Solutions",revenue:48.4,growth:13.7},{account:"Horizon Edge",revenue:49.6,growth:5.9},{account:"Orbit Tech",revenue:50.8,growth:9.3},{account:"Nova Prime",revenue:43.7,growth:15.1},{account:"Core Edge",revenue:46.3,growth:2.4},{account:"Sync Prime",revenue:48.1,growth:10.2},{account:"Link Corp",revenue:50.4,growth:6.5},{account:"Node Systems",revenue:43.1,growth:8.9},{account:"Path Holdings",revenue:45.2,growth:4.6},{account:"Flux Prime",revenue:47.5,growth:12.1},{account:"Echo Edge",revenue:49.3,growth:.7},{account:"Vertex Prime",revenue:51.6,growth:7.3},{account:"Apex Final",revenue:42.6,growth:11.2},{account:"Zenith Prime",revenue:44.8,growth:3.3},{account:"Omega Labs",revenue:46.9,growth:14.8},{account:"Sigma Prime",revenue:49.7,growth:5.1},{account:"Delta Final",revenue:51.9,growth:9.7},{account:"Gamma Edge",revenue:43.9,growth:1.4},{account:"Beta Prime",revenue:47.1,growth:7.8},{account:"Alpha Final",revenue:50.2,growth:13.4},{account:"Theta Edge",revenue:44.3,growth:6.1},{account:"Kappa Prime",revenue:48.6,growth:2.8}]}],u=({xPercent:e,yPercent:o,color:n,accountName:r,revenue:a,growth:s,index:u})=>(0,t.jsx)(i.HexTooltip,{alignContent:"left",content:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{style:{fontWeight:500},children:r}),(0,t.jsxs)("div",{children:["Q3 Revenue: $",a.toFixed(1),"M"]}),(0,t.jsxs)("div",{children:["QoQ Growth: ",s.toFixed(1),"%"]})]}),followCursor:!0,style:{position:"absolute",left:`${e+c(u)}%`,top:`${o+c(u+5)}%`,transform:"translate(-50%, -50%)",width:"6px",height:"6px"},children:(0,t.jsx)(p,{style:{background:n}})}),l=o.memo(function(){let e=0,o=(0,t.jsx)(h,{children:(0,t.jsx)(d,{children:s.map(o=>o.points.map((n,r)=>{let a=e++;return(0,t.jsx)(u,{accountName:n.account,color:o.color,growth:n.growth,index:a,revenue:n.revenue,xPercent:(n.revenue-0)/56*100,yPercent:100-(n.growth- -2)/30*100},`${o.name}-${r}`)}))})});return(0,t.jsx)(r.Chart,{colorPalette:"MultiLineColors",contents:o,type:"stacked-vertical",xAxis:{items:["0","10","20","30","40","50"],muted:!0},yAxis:{showTickLines:!0,muted:!0,tickSpread:"tight",items:["25","20","15","10","5","0"]}})}),h=n.styled.div.withConfig({displayName:"ChartAccountRevenueVsGrowth__ScatterWrapper",componentId:"sc-3bb84064-0"})`
  && {
    position: relative;
    align-self: stretch !important;
    justify-content: stretch !important;
    flex: 1 1 auto;
    width: 100%;
    height: 150px;
  }
`,d=n.styled.div.withConfig({displayName:"ChartAccountRevenueVsGrowth__DotsLayer",componentId:"sc-3bb84064-1"})`
  position: absolute;
  inset: 0;
`,p=n.styled.span.withConfig({displayName:"ChartAccountRevenueVsGrowth__Dot",componentId:"sc-3bb84064-2"})`
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 50% !important;
  opacity: 0.75;
  cursor: pointer;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 1;
  }
`;e.s(["ChartAccountRevenueVsGrowth",0,l])},643307,e=>{"use strict";var t=e.i(843476),o=e.i(271645),n=e.i(908009),r=e.i(289388),a=e.i(967109);let i=o.memo(function(){let e=(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(n.BarSpace,{tooltipContent:[`${a.PRODUCT_NAMES.One} — ${a.REGION_NAMES.CoreWorlds}`,"Q3 Revenue: $25.38M"],width:"67%"}),(0,t.jsx)(n.BarSpace,{tooltipContent:[`${a.PRODUCT_NAMES.One} — ${a.REGION_NAMES.MidRim}`,"Q3 Revenue: $10.58M"],width:"22%"}),(0,t.jsx)(n.BarSpace,{tooltipContent:[`${a.PRODUCT_NAMES.One} — ${a.REGION_NAMES.OuterRim}`,"Q3 Revenue: $6.35M"]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(n.BarSpace,{tooltipContent:[`${a.PRODUCT_NAMES.Two} — ${a.REGION_NAMES.CoreWorlds}`,"Q3 Revenue: $21.29M"],width:"58%"}),(0,t.jsx)(n.BarSpace,{tooltipContent:[`${a.PRODUCT_NAMES.Two} — ${a.REGION_NAMES.MidRim}`,"Q3 Revenue: $11.61M"],width:"27%"}),(0,t.jsx)(n.BarSpace,{tooltipContent:[`${a.PRODUCT_NAMES.Two} — ${a.REGION_NAMES.OuterRim}`,"Q3 Revenue: $5.81M"]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(n.BarSpace,{tooltipContent:[`${a.PRODUCT_NAMES.Three} — ${a.REGION_NAMES.CoreWorlds}`,"Q3 Revenue: $16.55M"],width:"56%"}),(0,t.jsx)(n.BarSpace,{tooltipContent:[`${a.PRODUCT_NAMES.Three} — ${a.REGION_NAMES.MidRim}`,"Q3 Revenue: $9.93M"],width:"26%"}),(0,t.jsx)(n.BarSpace,{tooltipContent:[`${a.PRODUCT_NAMES.Three} — ${a.REGION_NAMES.OuterRim}`,"Q3 Revenue: $6.62M"]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(n.BarSpace,{tooltipContent:[`${a.PRODUCT_NAMES.Four} — ${a.REGION_NAMES.CoreWorlds}`,"Q3 Revenue: $12.87M"],width:"47%"}),(0,t.jsx)(n.BarSpace,{tooltipContent:[`${a.PRODUCT_NAMES.Four} — ${a.REGION_NAMES.MidRim}`,"Q3 Revenue: $10.01M"],width:"26%"}),(0,t.jsx)(n.BarSpace,{tooltipContent:[`${a.PRODUCT_NAMES.Four} — ${a.REGION_NAMES.OuterRim}`,"Q3 Revenue: $5.72M"]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(n.BarSpace,{tooltipContent:[`${a.PRODUCT_NAMES.Five} — ${a.REGION_NAMES.CoreWorlds}`,"Q3 Revenue: $11.99M"],width:"53%"}),(0,t.jsx)(n.BarSpace,{tooltipContent:[`${a.PRODUCT_NAMES.Five} — ${a.REGION_NAMES.MidRim}`,"Q3 Revenue: $6.54M"],width:"31%"}),(0,t.jsx)(n.BarSpace,{tooltipContent:[`${a.PRODUCT_NAMES.Five} — ${a.REGION_NAMES.OuterRim}`,"Q3 Revenue: $3.27M"]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(n.BarSpace,{tooltipContent:[`${a.PRODUCT_NAMES.Six} — ${a.REGION_NAMES.CoreWorlds}`,"Q3 Revenue: $6.72M"],width:"57%"}),(0,t.jsx)(n.BarSpace,{tooltipContent:[`${a.PRODUCT_NAMES.Six} — ${a.REGION_NAMES.MidRim}`,"Q3 Revenue: $2.80M"],width:"29%"}),(0,t.jsx)(n.BarSpace,{tooltipContent:[`${a.PRODUCT_NAMES.Six} — ${a.REGION_NAMES.OuterRim}`,"Q3 Revenue: $1.68M"]})]})]});return(0,t.jsx)(r.Chart,{colorPalette:"MultiCoolColors",contents:e,type:"stacked-fill",xAxis:{items:["0%","20%","40%","60%","80%","100%"],muted:!0},yAxis:{items:[a.PRODUCT_NAMES.One,a.PRODUCT_NAMES.Two,a.PRODUCT_NAMES.Three,a.PRODUCT_NAMES.Four,a.PRODUCT_NAMES.Five,a.PRODUCT_NAMES.Six]}})});e.s(["ChartGalacticRevenueDistribution",0,i])},209985,e=>{"use strict";var t=e.i(843476),o=e.i(271645),n=e.i(997053),r=e.i(289388);let a=e.i(433596).CHART_COLOR_PALETTE.MultiLineColors,i=[{color:a[0],values:[38,36,40,42,39,44,46,43,47]},{color:a[1],values:[34,37,35,38,41,39,42,44,43]},{color:a[2],values:[30,28,32,33,31,35,37,36,38]},{color:a[3],values:[26,28,27,29,32,30,33,31,33]},{color:a[4],values:[22,20,23,25,23,26,27,25,28]},{color:a[5],values:[8,10,9,10,12,11,13,12,13]}],c=o.memo(function(){let e=(0,t.jsx)(s,{children:(0,t.jsx)("svg",{preserveAspectRatio:"none",viewBox:"-25 0 150 100",children:i.map((e,o)=>{let n,r=Array.from({length:n=e.values.length},(e,t)=>t/(n-1)*100),a=e.values.map((e,t)=>`${r[t]},${100-e/50*100}`).join(" ");return(0,t.jsx)("polyline",{className:"line",points:a,stroke:e.color},o)})})});return(0,t.jsx)(r.Chart,{colorPalette:"SingleCoolColor",contents:e,type:"stacked-vertical",xAxis:{items:["Q1","Q2","Q3"],muted:!0},yAxis:{showTickLines:!0,muted:!0,tickSpread:"tight",items:["50","40","30","20","10","0"]}})}),s=n.styled.div.withConfig({displayName:"ChartRevenueByProductLine__ChartWrapper",componentId:"sc-d1988528-0"})`
  && {
    /* Override the flex alignment from ChartBars stacked-vertical */
    align-self: stretch !important;
    justify-content: stretch !important;
    flex: 1 1 auto;
    width: 100%;
    height: 150px;

    svg {
      width: 100%;
      height: 100%;
      display: block;
    }

    .line {
      fill: none;
      stroke-width: 1.5;
      stroke-linecap: round;
      stroke-linejoin: round;
      vector-effect: non-scaling-stroke; /* Prevent stroke from scaling with viewBox */
    }
  }
`;e.s(["ChartRevenueByProductLine",0,c])},950872,e=>{"use strict";var t=e.i(843476),o=e.i(271645),n=e.i(908009),r=e.i(289388),a=e.i(967109);let i=o.memo(function(){let e=(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(n.BarSpace,{tooltipContent:[`${a.PRODUCT_NAMES.One} — ${a.SECTOR_NAMES.Defense}`,"Q3 Revenue: $23.27M"],width:"52%"}),(0,t.jsx)(n.BarSpace,{tooltipContent:[`${a.PRODUCT_NAMES.One} — ${a.SECTOR_NAMES.Commercial}`,"Q3 Revenue: $4.23M"],width:"12%"}),(0,t.jsx)(n.BarSpace,{tooltipContent:[`${a.PRODUCT_NAMES.One} — ${a.SECTOR_NAMES.Research}`,"Q3 Revenue: $10.58M"],width:"22%"}),(0,t.jsx)(n.BarSpace,{tooltipContent:[`${a.PRODUCT_NAMES.One} — ${a.SECTOR_NAMES.Government}`,"Q3 Revenue: $4.22M"]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(n.BarSpace,{tooltipContent:[`${a.PRODUCT_NAMES.Two} — ${a.SECTOR_NAMES.Defense}`,"Q3 Revenue: $17.0M"],width:"44%"}),(0,t.jsx)(n.BarSpace,{tooltipContent:[`${a.PRODUCT_NAMES.Two} — ${a.SECTOR_NAMES.Commercial}`,"Q3 Revenue: $7.0M"],width:"18%"}),(0,t.jsx)(n.BarSpace,{tooltipContent:[`${a.PRODUCT_NAMES.Two} — ${a.SECTOR_NAMES.Research}`,"Q3 Revenue: $6.2M"],width:"16%"}),(0,t.jsx)(n.BarSpace,{tooltipContent:[`${a.PRODUCT_NAMES.Two} — ${a.SECTOR_NAMES.Government}`,"Q3 Revenue: $8.5M"]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(n.BarSpace,{tooltipContent:[`${a.PRODUCT_NAMES.Three} — ${a.SECTOR_NAMES.Defense}`,"Q3 Revenue: $16.6M"],width:"50%"}),(0,t.jsx)(n.BarSpace,{tooltipContent:[`${a.PRODUCT_NAMES.Three} — ${a.SECTOR_NAMES.Commercial}`,"Q3 Revenue: $4.0M"],width:"12%"}),(0,t.jsx)(n.BarSpace,{tooltipContent:[`${a.PRODUCT_NAMES.Three} — ${a.SECTOR_NAMES.Research}`,"Q3 Revenue: $9.9M"],width:"30%"}),(0,t.jsx)(n.BarSpace,{tooltipContent:[`${a.PRODUCT_NAMES.Three} — ${a.SECTOR_NAMES.Government}`,"Q3 Revenue: $2.6M"]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(n.BarSpace,{tooltipContent:[`${a.PRODUCT_NAMES.Four} — ${a.SECTOR_NAMES.Defense}`,"Q3 Revenue: $12.87M"],width:"46%"}),(0,t.jsx)(n.BarSpace,{tooltipContent:[`${a.PRODUCT_NAMES.Four} — ${a.SECTOR_NAMES.Commercial}`,"Q3 Revenue: $2.86M"],width:"10%"}),(0,t.jsx)(n.BarSpace,{tooltipContent:[`${a.PRODUCT_NAMES.Four} — ${a.SECTOR_NAMES.Research}`,"Q3 Revenue: $7.15M"],width:"28%"}),(0,t.jsx)(n.BarSpace,{tooltipContent:[`${a.PRODUCT_NAMES.Four} — ${a.SECTOR_NAMES.Government}`,"Q3 Revenue: $5.72M"]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(n.BarSpace,{tooltipContent:[`${a.PRODUCT_NAMES.Five} — ${a.SECTOR_NAMES.Defense}`,"Q3 Revenue: $7.63M"],width:"28%"}),(0,t.jsx)(n.BarSpace,{tooltipContent:[`${a.PRODUCT_NAMES.Five} — ${a.SECTOR_NAMES.Commercial}`,"Q3 Revenue: $4.36M"],width:"16%"}),(0,t.jsx)(n.BarSpace,{tooltipContent:[`${a.PRODUCT_NAMES.Five} — ${a.SECTOR_NAMES.Research}`,"Q3 Revenue: $5.45M"],width:"24%"}),(0,t.jsx)(n.BarSpace,{tooltipContent:[`${a.PRODUCT_NAMES.Five} — ${a.SECTOR_NAMES.Government}`,"Q3 Revenue: $4.36M"]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(n.BarSpace,{tooltipContent:[`${a.PRODUCT_NAMES.Six} — ${a.SECTOR_NAMES.Defense}`,"Q3 Revenue: $3.1M"],width:"28%"}),(0,t.jsx)(n.BarSpace,{tooltipContent:[`${a.PRODUCT_NAMES.Six} — ${a.SECTOR_NAMES.Commercial}`,"Q3 Revenue: $2.2M"],width:"20%"}),(0,t.jsx)(n.BarSpace,{tooltipContent:[`${a.PRODUCT_NAMES.Six} — ${a.SECTOR_NAMES.Research}`,"Q3 Revenue: $3.0M"],width:"26%"}),(0,t.jsx)(n.BarSpace,{tooltipContent:[`${a.PRODUCT_NAMES.Six} — ${a.SECTOR_NAMES.Government}`,"Q3 Revenue: $2.9M"]})]})]});return(0,t.jsx)(r.Chart,{colorPalette:"MultiWarmColors",contents:e,type:"stacked-fill",xAxis:{items:["0","20%","40%","60%","80%","100%"],muted:!0},yAxis:{items:[a.PRODUCT_NAMES.One,a.PRODUCT_NAMES.Two,a.PRODUCT_NAMES.Three,a.PRODUCT_NAMES.Four,a.PRODUCT_NAMES.Five,a.PRODUCT_NAMES.Six]}})});e.s(["ChartSectorRevenueMixByProductLine",0,i])},287002,e=>{e.v({dashed:"DashedLineQuote-module__a3N5Na__dashed"})},585579,e=>{"use strict";var t=e.i(843476),o=e.i(238108),n=e.i(430388),r=e.i(665419),a=e.i(975336);let i={Explore:(0,t.jsx)(a.HexTooltip,{content:"Ask and answer questions about this chart",interactive:!0,link:r.DOCS_LINKS.Explore,linkText:"Learn about Explore",size:"large",children:(0,t.jsx)(o.HexButton,{icon:(0,t.jsx)(n.ExploreIcon,{}),text:"Explore",variant:"minimal"})}),PublishWorkbench:(0,t.jsx)(a.HexTooltip,{content:"See a preview to review changes and understand impact before deploying",interactive:!0,link:r.DOCS_LINKS.ModelingWorkbench,linkText:"Learn about the Modeling Workbench",size:"large",children:(0,t.jsx)(o.HexButton,{text:"Publish"})}),EditProject:(0,t.jsx)(a.HexTooltip,{content:"Open the editable version to explore data, logic, and layout",interactive:!0,link:r.INTERNAL_LINKS.Notebooks,linkText:"Learn about Notebooks",size:"large",children:(0,t.jsx)(o.HexButton,{text:"Edit"})}),Share:(0,t.jsx)(a.HexTooltip,{content:"Share this with teammates or stakeholders",interactive:!0,link:r.DOCS_LINKS.SharingPermissions,linkText:"Learn about sharing",size:"large",children:(0,t.jsx)(o.HexButton,{text:"Share"})}),PublishProject:(0,t.jsx)(a.HexTooltip,{content:"Turn your analysis into a live, interactive app",interactive:!0,link:r.DOCS_LINKS.Publishing,linkText:"Learn about publishing",size:"large",children:(0,t.jsx)(o.HexButton,{text:"Publish app"})}),ContinueInProject:(0,t.jsx)(a.HexTooltip,{content:"Turn this Thread into a project for deeper analysis",interactive:!0,link:r.DOCS_LINKS.ThreadsSaveAsProject,size:"large",children:(0,t.jsx)(o.HexButton,{text:"Continue in project"})}),CommentOnApp:(0,t.jsx)(a.HexTooltip,{content:"Leave feedback directly on this app",interactive:!0,link:r.DOCS_LINKS.Comments,linkText:"Learn about comments",size:"large",children:(0,t.jsx)(o.HexButton,{icon:(0,t.jsx)(n.CommentSmallIcon,{}),variant:"minimal"})}),CommentOnProject:(0,t.jsx)(a.HexTooltip,{content:"Collaborate on this project with your team",interactive:!0,link:r.DOCS_LINKS.Comments,linkText:"Learn about comments",size:"large",children:(0,t.jsx)(o.HexButton,{icon:(0,t.jsx)(n.CommentSmallIcon,{}),variant:"minimal"})}),ThreadsUploadCSV:(0,t.jsx)(a.HexTooltip,{content:"Bring your own CSV and let the agent explore it",interactive:!0,link:r.DOCS_LINKS.ThreadsUploadCSV,size:"large",children:(0,t.jsx)(o.HexButton,{icon:(0,t.jsx)(n.PlusIcon,{})})})};e.s(["EducationalButtons",0,i])},352636,e=>{"use strict";var t=e.i(843476),o=e.i(271645),n=e.i(193594),r=e.i(997053),a=e.i(238108),i=e.i(430388),c=e.i(665419),s=e.i(585579),u=e.i(975336);let l=o.memo(function({canChangeDataConnection:e=!0,onSubmit:n,isFocused:r=!1}){let[l,x]=o.useState(r),m=o.useRef(null),w=o.useRef(!1),C=o.useCallback(()=>{n(),m.current&&(m.current.value="",w.current=!0,m.current.blur())},[n]);return(0,t.jsx)(h,{children:(0,t.jsxs)(d,{$isFocused:l,children:[(0,t.jsx)(p,{ref:m,placeholder:"Ask another question...",onBlur:()=>{w.current||x(!1),w.current=!1},onFocus:()=>x(!0),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),C())}}),(0,t.jsxs)(g,{children:[(0,t.jsx)(v,{children:s.EducationalButtons.ThreadsUploadCSV}),(0,t.jsxs)(v,{children:[e&&(0,t.jsx)(u.HexTooltip,{content:"Connect your database to Hex to securely access and analyze your data here.",interactive:!0,link:c.DOCS_LINKS.DataConnections,linkText:"Learn about data connections",size:"large",children:(0,t.jsx)(a.HexButton,{icon:(0,t.jsx)(i.ChevronDown,{}),iconPos:"right",text:"NexaCorp Galactic Warehouse",variant:"minimal"})}),(0,t.jsx)(a.HexButton,{icon:(0,t.jsx)(i.EnterIcon,{})})]})]})]})})}),h=r.styled.div.withConfig({displayName:"PromptBar__Wrapper",componentId:"sc-df69b08a-0"})`
  display: flex;
  flex: 1 1 auto;
  padding: 0 12px 12px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -12px;
    pointer-events: none;
    left: 0;
    right: 0;
    width: 100%;
    height: 12px;
    background: linear-gradient(to top, white 0%, transparent 100%);
    opacity: 0.5;
  }
`,d=r.styled.div.withConfig({displayName:"PromptBar__Inner",componentId:"sc-df69b08a-1"})`
  border: 1px solid ${({theme:e})=>e.appUI.borderColor.MUTED};
  box-shadow: 0px 3px 6px rgba(95, 80, 157, 0.05);
  border-radius: 8px;
  flex: 1 1 auto;
  transition:
    border-color 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
  position: relative;
  z-index: 1;
  overflow: hidden;
  min-height: 75px;

  &:hover {
    border-color: ${({theme:e})=>e.appUI.borderColor.DEFAULT};
    box-shadow: 0px 3px 6px rgba(95, 80, 157, 0.07);
  }

  ${({$isFocused:e})=>e&&r.css`
      border-color: ${({theme:e})=>e.appUI.intent.PRIMARY};
      box-shadow: 0px 0px 0px 4px
        ${({theme:e})=>(0,n.rgba)(e.appUI.intent.PRIMARY,.15)};

      &:hover {
        border-color: ${({theme:e})=>e.appUI.intent.PRIMARY};
        box-shadow: 0px 0px 0px 4px
          ${({theme:e})=>(0,n.rgba)(e.appUI.intent.PRIMARY,.15)};
      }
    `}
`,p=r.styled.textarea.withConfig({displayName:"PromptBar__Textarea",componentId:"sc-df69b08a-2"})`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  resize: none;
  background: linear-gradient(to bottom, #fbfbfb 0%, #ffffff 100%);
  font-size: ${({theme:e})=>e.appUI.fontSize.DEFAULT};
  line-height: 1.3;
  color: ${({theme:e})=>e.appUI.fontColor.DEFAULT};
  font-family: ${({theme:e})=>e.appUI.fontFamily.DEFAULT};
  padding: 12px;
  box-shadow: inset 0 0 0 1px white;
  border-radius: 7px;

  &::placeholder {
    color: ${({theme:e})=>e.appUI.fontColor.MUTED};
  }
`,g=r.styled.div.withConfig({displayName:"PromptBar__BottomBar",componentId:"sc-df69b08a-3"})`
  flex: 1 1 auto;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 8px;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > * {
    pointer-events: auto;
  }
`,v=r.styled.div.withConfig({displayName:"PromptBar__BottomBarGroup",componentId:"sc-df69b08a-4"})`
  display: flex;
  align-items: center;
  gap: 4px;
`;e.s(["PromptBar",0,l])},643741,e=>{"use strict";var t=e.i(843476),o=e.i(72268),n=e.i(643307),r=e.i(209985),a=e.i(950872),i=e.i(967109);let c=[{content:"Get me NexaCorp's Q3 sales by product line",type:"user-message"},{content:"I'll help you analyze NexaCorp's revenue by product line. I'll pull data from Q1-Q3 so you can compare trends over the last few quarters and see how Q3 fits into the broader pattern.",type:"agent-message"},{content:"Thought for 23 seconds",type:"agent-thinking"},{content:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h2",{children:"NexaCorp revenue trends by product line"}),(0,t.jsx)("p",{children:'Here\'s what I found in the "nexacorp_sales" tables (powered by the Galactic Sales semantic model):'}),(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[i.PRODUCT_NAMES.One," — ",(0,t.jsxs)("strong",{children:["$",i.REVENUE_DATA.One,"M"]})]}),(0,t.jsxs)("li",{children:[i.PRODUCT_NAMES.Two," — ",(0,t.jsxs)("strong",{children:["$",i.REVENUE_DATA.Two,"M"]})]}),(0,t.jsxs)("li",{children:[i.PRODUCT_NAMES.Three," — ",(0,t.jsxs)("strong",{children:["$",i.REVENUE_DATA.Three,"M"]})]}),(0,t.jsxs)("li",{children:[i.PRODUCT_NAMES.Four," — ",(0,t.jsxs)("strong",{children:["$",i.REVENUE_DATA.Four,"M"]})]}),(0,t.jsxs)("li",{children:[i.PRODUCT_NAMES.Five," — ",(0,t.jsxs)("strong",{children:["$",i.REVENUE_DATA.Five,"M"]})]}),(0,t.jsxs)("li",{children:[i.PRODUCT_NAMES.Six," — ",(0,t.jsxs)("strong",{children:["$",i.REVENUE_DATA.Six,"M"]})]})]})]}),type:"agent-message"},{content:{title:"Revenue by Product Line Over Time (Q1-Q3)",contents:(0,t.jsx)(r.ChartRevenueByProductLine,{})},type:"tool-chart"},{type:"spacer",content:null},{content:{title:"Account Revenue vs Growth (Q3)",contents:(0,t.jsx)(o.ChartAccountRevenueVsGrowth,{})},type:"tool-chart"},{content:"I also created a chart showing revenue vs growth. Let me know if you'd like to break this down by region or customer sector.",type:"agent-message"},{content:"Can you break this out by region too? I want to see how each product line performed across the Core Worlds, Mid-Rim, and Outer Rim.",type:"user-message"},{content:"I'll help you analyze NexaCorp's Q3 revenue by product line and region. Let me search for the most relevant data source.",type:"agent-message"},{content:"Thought for 11 seconds",type:"agent-thinking"},{content:(0,t.jsxs)("div",{children:["I found regional revenue data in the endorsed semantic model"," ",(0,t.jsx)("strong",{children:'"NexaCorp: Galactic Sales Model."'})," This model contains standardized region definitions (Core Worlds, Mid-Rim, Outer Rim) and pre-calculated revenue metrics, which is the best source for your question.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Let me create a grouped bar chart so you can compare regions within each product line:"]}),type:"agent-message"},{content:{title:"Galactic Revenue Distribution by Product Line (Q3)",contents:(0,t.jsx)(n.ChartGalacticRevenueDistribution,{})},type:"tool-chart"},{content:(0,t.jsxs)("div",{children:["Quick insight:"," ",(0,t.jsxs)("strong",{children:["Core Worlds lead revenue for ",i.PRODUCT_NAMES.One," and"," ",i.PRODUCT_NAMES.Two]}),", while Wormhole initiators see a stronger mix from the Outer Rim."]}),type:"agent-message"}],s=[{content:"Can you also show how revenue breaks down by customer sector?",type:"user-message"},{content:"I'll help you analyze NexaCorp's Q3 revenue by product line and customer sector. Let me search for the most relevant data source.",type:"agent-message"},{content:"Thought for 17 seconds",type:"agent-thinking"},{content:(0,t.jsxs)("div",{children:["I found customer sector data in the same NexaCorp: Galactic Sales Model. This includes standardized sector definitions (Defense, Commercial, Research, Government) and pre-calculated revenue metrics.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Let me compute the sector mix for each product line so you can compare buyer patterns."]}),type:"agent-message"},{content:{title:"Sector Revenue Mix by Product Line (Q3)",contents:(0,t.jsx)(a.ChartSectorRevenueMixByProductLine,{})},type:"tool-chart"},{content:(0,t.jsxs)("div",{children:["Quick insight:"," ",(0,t.jsx)("strong",{children:"Defense drives most high-value product-line revenue"}),", while Research over-indexes for Anti-gravity generators and Wormhole initiators."]}),type:"agent-message"}],u=[{content:"How did Commercial revenue perform in the Mid-Rim in Q3?",type:"user-message"},{content:"I’ll update the app to focus on that.",type:"agent-message"},{content:"Thought for 17 seconds",type:"agent-thinking"},{content:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Customer Sector"})," → Commercial"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Region"})," → Mid-Rim"]})]}),(0,t.jsxs)("p",{children:["With those filters applied, the"," ",(0,t.jsx)("strong",{children:"Revenue by Product Line Over Time (Q1–Q3)"})," chart shows Commercial revenue in the Mid-Rim increasing through Q3, ending the quarter at its highest point in the time range."]}),(0,t.jsxs)("p",{children:["You can switch ",(0,t.jsx)("strong",{children:"Product Line"})," to isolate what’s driving that growth, or change ",(0,t.jsx)("strong",{children:"Quarter"})," to compare against earlier periods."]})]}),type:"agent-message"}];e.s(["ADDITIONAL_NOTEBOOK_AGENT_MESSAGES",0,s,"CHAT_WITH_APP_AGENT_MESSAGES",0,u,"INITIAL_THREAD_CONTENT",0,c])},596064,e=>{"use strict";var t=e.i(843476),o=e.i(271645),n=e.i(997053),r=e.i(238108),a=e.i(430388),i=e.i(665419),c=e.i(585579),s=e.i(975336),u=e.i(60387);let l=o.memo(function({view:e}){let n=o.useMemo(()=>"agent"===e?[c.EducationalButtons.Share]:"notebook"===e?[c.EducationalButtons.CommentOnProject,c.EducationalButtons.Share,c.EducationalButtons.PublishProject]:void 0,[e]);return(0,t.jsx)(u.NavBar,{actions:n,mainNav:(0,t.jsxs)(h,{children:[(0,t.jsx)(s.HexTooltip,{content:"Ask natural language questions and get AI-powered insights",interactive:!0,link:i.DOCS_LINKS.Threads,linkText:"Learn about Threads",size:"large",children:(0,t.jsx)(d,{active:"agent"===e,icon:(0,t.jsx)(a.AgentIcon,{}),text:"Agent",variant:"minimal"})}),(0,t.jsx)(s.HexTooltip,{content:"Query, transform, visualize, and explore your data",interactive:!0,link:i.INTERNAL_LINKS.Notebooks,linkText:"Learn about Notebooks",size:"large",children:(0,t.jsx)(d,{active:"notebook"===e,icon:(0,t.jsx)(a.NotebookIcon,{}),text:"Notebook",variant:"minimal"})}),(0,t.jsx)(s.HexTooltip,{content:"Compose cells from your project into a beautiful published app.",interactive:!0,link:i.DOCS_LINKS.AppBuilder,linkText:"Learn about the App builder",size:"large",children:(0,t.jsx)(d,{active:"app-builder"===e,icon:(0,t.jsx)(a.AppBuilderIcon,{}),text:"App",variant:"minimal"})})]}),title:"Galactic Revenue Insights"})}),h=n.styled.div.withConfig({displayName:"ProjectHeader__Nav",componentId:"sc-dbef4166-0"})`
  display: flex;
  align-items: center;
`,d=(0,n.styled)(r.HexButton).withConfig({displayName:"ProjectHeader__NavButton",componentId:"sc-dbef4166-1"})`
  border-radius: 12px;
`;e.s(["ProjectHeader",0,l])},966187,e=>{"use strict";var t=e.i(843476),o=e.i(271645),n=e.i(193594),r=e.i(997053),a=e.i(430388),i=e.i(739876),c=e.i(585579);let s=o.memo(function({agent:e="Threads",content:o,type:n}){switch(n){case"tool-chart":if("Threads"===e)return(0,t.jsxs)(u,{$type:n,children:[(0,t.jsxs)(l,{children:[o.title,(0,t.jsx)(h,{children:c.EducationalButtons.Explore})]}),(0,t.jsx)(d,{children:o.contents})]});return(0,t.jsx)(u,{$type:n,children:(0,t.jsxs)(p,{children:[(0,t.jsx)(a.ChartIcon,{}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{children:"Created"})," ",o.title]})]})});case"agent-thinking":return(0,t.jsxs)(u,{$type:n,children:[(0,t.jsx)(a.ChevronDown,{}),o]});default:return(0,t.jsx)(u,{$type:n,children:o})}}),u=r.styled.div.withConfig({displayName:"ThreadItem__Wrapper",componentId:"sc-7a31caad-0"})`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  line-height: 1.4;

  strong {
    font-weight: 500;
  }

  ${({$type:e})=>"user-message"===e&&r.css`
      background: linear-gradient(
        135deg,
        ${({theme:e})=>(0,n.rgba)(e.appUI.intent.PRIMARY,.07)} 0%,
        ${({theme:e})=>(0,n.rgba)(e.appUI.intent.PRIMARY,.025)} 100%
      );
      box-shadow: inset 0 0 0 1px
        ${({theme:e})=>(0,n.rgba)(e.appUI.intent.PRIMARY,.1)};
      color: ${({theme:e})=>e.appUI.intent.PRIMARY};
      padding: 8px 12px;
      max-width: 80%;
      align-self: flex-end;
    `}

  ${({$type:e})=>"agent-message"===e&&r.css`
      padding: 12px;
      gap: 8px;

      h2 {
        font-weight: 600;
        font-size: ${({theme:e})=>e.appUI.fontSize.LARGE};
        letter-spacing: -0.025em;
      }

      p {
        margin-bottom: 0;
      }

      ul {
        padding-left: 14px;
        list-style-type: disc;
        margin-bottom: 0;
      }
    `}

  ${({$type:e})=>"agent-thinking"===e&&r.css`
      flex-direction: row;
      background-color: ${({theme:e})=>e.appUI.backgroundColor.MUTED};
      padding: 8px;
      gap: 4px;
      color: ${({theme:e})=>e.appUI.fontColor.MUTED};

      &:hover {
        background-color: ${({theme:e})=>e.appUI.backgroundColor.MUTED};
      }

      [data-icon] {
        color: ${({theme:e})=>e.appUI.fontColor.MUTED};
        transform: rotate(-45deg);
      }
    `}

  ${({$type:e})=>"tool-chart"===e&&r.css`
      flex-direction: column;
      border: 1px solid ${({theme:e})=>e.appUI.borderColor.MUTED};
    `}

${({$type:e})=>"hex-website-message"===e&&r.css`
      padding: 12px;
      position: relative;
      gap: 8px;
      border: 1px solid ${({theme:e})=>e.appUI.borderColor.MUTED};

      &:before {
        content: '';
        position: absolute;
        inset: 0;
        pointer-events: none;
        opacity: 0.3;
        background-image: ${({theme:e})=>(0,i.backgroundImageHatched)(e)};
      }
    `}

  ${({$type:e})=>"spacer"===e&&r.css`
      padding: 4px;
    `}
`,l=r.styled.div.withConfig({displayName:"ThreadItem__ChartHeader",componentId:"sc-7a31caad-1"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 4px 4px 12px;
  color: ${({theme:e})=>e.appUI.fontColor.MUTED};
  flex: none;
`,h=r.styled.div.withConfig({displayName:"ThreadItem__ChartActions",componentId:"sc-7a31caad-2"})`
  display: flex;
  align-items: center;
  gap: 0;
  flex: none;
`,d=r.styled.div.withConfig({displayName:"ThreadItem__ChartContents",componentId:"sc-7a31caad-3"})`
  padding: 8px 12px;
  flex: 1 1 auto;
  border-top: 1px solid ${({theme:e})=>e.appUI.borderColor.MUTED};
`,p=r.styled.div.withConfig({displayName:"ThreadItem__ChartToolCall",componentId:"sc-7a31caad-4"})`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  flex: 1 1 auto;
  color: ${({theme:e})=>e.appUI.fontColor.DEFAULT};

  svg {
    color: ${({theme:e})=>e.appUI.fontColor.MUTED};
  }

  div {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    span {
      min-width: 0;
      color: ${({theme:e})=>e.appUI.fontColor.MUTED};
    }
  }
`;e.s(["ThreadItem",0,s])},720900,84769,e=>{"use strict";var t=e.i(843476),o=e.i(997053),n=e.i(162517),r=e.i(288839),a=e.i(343794),i=e.i(144663),c=e.i(287002);function s({authorName:e,authorTitle:o,quoteText:n,logoAlt:r,logoFileName:l,logoSrc:h,logoWidth:d=90,className:p,stackedAuthor:g}){let v=h??(l?`/images/logos/${l}.svg`:void 0);return(0,t.jsx)(i.InlineQuote,{authorName:e,authorTitle:o,className:(0,a.default)(c.default.dashed,p),logo:v?(0,t.jsx)(u,{alt:r??l??"",src:v,style:{maxWidth:`${d}px`}}):null,quoteText:n,stackedAuthor:g})}let u=o.default.img.withConfig({displayName:"DashedLineQuote__Logo",componentId:"sc-94e7d0d-0"})`
  width: 100%;
  ${({theme:e})=>e.customerLogoColor};
`;e.s(["DashedLineQuote",0,s],84769);let l=o.default.div.withConfig({displayName:"sharedStyles__SectionWrapper",componentId:"sc-5d34891d-0"})`
  display: flex;
  flex-direction: ${({$direction:e})=>e||"row"};
  gap: 70px;
  max-width: 100%;
  min-width: 0;
  width: 100%;
  scroll-margin-top: 140px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    flex-direction: column;
    gap: 0;
  }
`,h=o.default.div.withConfig({displayName:"sharedStyles__InfoWrapper",componentId:"sc-5d34891d-1"})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  max-width: 16vw;
  min-width: 330px;
`,d=o.default.div.withConfig({displayName:"sharedStyles__InfoTextWrapper",componentId:"sc-5d34891d-2"})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  min-width: 0;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    margin-bottom: 50px;
  }
`,p=o.default.div.withConfig({displayName:"sharedStyles__ProductIllustration",componentId:"sc-5d34891d-3"})`
  display: flex;
  position: relative;
  max-width: 100%;
  min-width: 0;
  flex: 1 1 auto;
`;e.s(["InteractiveFeatureSection",0,function({dashedLineQuoteProps:e,infoTextProps:a,scrollToAnchorId:i,children:c,className:u,direction:g="row"}){let v=(0,o.useTheme)();return(0,r.default)(v.mediaQueryString.MEDIUM)?(0,t.jsxs)(l,{className:u,id:i,children:[(0,t.jsx)(d,{children:(0,t.jsx)(n.InfoText,{...a})}),(0,t.jsx)(p,{"data-markdown-exclude":"",children:c}),e&&(0,t.jsx)(s,{...e})]}):(0,t.jsxs)(l,{$direction:g,className:u,id:i,children:[(0,t.jsxs)(h,{children:[(0,t.jsx)(d,{children:(0,t.jsx)(n.InfoText,{...a})}),e&&(0,t.jsx)(s,{...e})]}),(0,t.jsx)(p,{"data-markdown-exclude":"",children:c})]})}],720900)}]);