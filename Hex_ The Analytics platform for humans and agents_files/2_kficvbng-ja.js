(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,779698,e=>{"use strict";var t,i,o,a,n,r,s,l,d,c,p,A,g,m,u,h,f,x=e.i(843476),w=e.i(271645),b=e.i(997053),C=e.i(273454),v=e.i(253928),y=e.i(650617),I=e.i(998990),B=e.i(154213);function E(){return(E=Object.assign.bind()).apply(null,arguments)}function j(){return(j=Object.assign.bind()).apply(null,arguments)}function N(){return(N=Object.assign.bind()).apply(null,arguments)}function D(){return(D=Object.assign.bind()).apply(null,arguments)}let Q=b.default.div.withConfig({displayName:"AnchorLines__Wrapper",componentId:"sc-8e125fa9-0"})`
  z-index: 1;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    background: ${({theme:e})=>e.highlightColor};
  }

  &::before {
    height: 11px;
    width: 1px;
  }

  &::after {
    width: 11px;
    height: 1px;
  }

  ${({$position:e})=>"top-left"===e&&b.css`
      &::before,
      &::after {
        top: ${-1}px;
        left: ${-1}px;
      }
    `}

  ${({$position:e})=>"top-right"===e&&b.css`
      &::before,
      &::after {
        top: ${-1}px;
        right: ${-1}px;
      }
    `}

    ${({$position:e,$design:t})=>"bottom-left"===e&&b.css`
      &::before,
      &::after {
        bottom: ${-1}px;
        left: ${-1}px;
      }

      ${"middle"===t&&b.css`
        &::before {
          height: 21px;
          bottom: -11px;
        }
      `}
    `}

    ${({$position:e,$design:t})=>"bottom-right"===e&&b.css`
      &::before,
      &::after {
        bottom: ${-1}px;
        right: ${-1}px;
      }

      ${"middle"===t&&b.css`
        &::before {
          height: 21px;
          bottom: -11px;
        }
      `}
    `}
`,S=w.memo(({position:e,design:t="corner"})=>(0,x.jsx)(Q,{$design:t,$position:e}));S.displayName="AnchorLines";var L=e.i(618566),k=e.i(258591),U=e.i(430388),F=e.i(163299);let T=b.default.div.withConfig({displayName:"CustomerStoryItem__Top",componentId:"sc-a0962c99-0"})`
  display: flex;
  flex-direction: column;
  gap: 15px;
  transition: transform
    ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`};

  svg {
    margin-bottom: 10px;

    [data-color='primary'] {
      fill: ${({theme:e})=>e.fontColor.LOUD};
    }
  }
`,P=b.default.div.withConfig({displayName:"CustomerStoryItem__Bottom",componentId:"sc-a0962c99-1"})`
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  opacity: 0.4;

  span {
    font-family: ${({theme:e})=>e.fontFamily.MONO};
    font-size: ${({theme:e})=>e.fontSize.SMALL};
    font-weight: ${({theme:e})=>e.fontWeight.BOLD};
    color: ${({theme:e})=>e.fontColor.MUTED};
    text-transform: uppercase;
    line-height: 11px;
    opacity: 0;
    transition: opacity
      ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`};
  }
`,H=b.default.a.withConfig({displayName:"CustomerStoryItem__Wrapper",componentId:"sc-a0962c99-2"})`
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  padding: 30px;
  min-width: 0;
  gap: 15px;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  background-color: transparent;
  border-bottom: none;
  border-right: 1px solid ${({theme:e})=>e.borderColor.MUTED};
  transition: box-shadow
    ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`};

  &:last-of-type {
    border-right: none;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.EXTRA_LARGE}) {
    &:nth-child(1),
    &:nth-child(2) {
      border-bottom: 1px solid ${({theme:e})=>e.borderColor.MUTED};
    }

    &:nth-child(2),
    &:nth-child(4) {
      border-right: none;
    }
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    border-bottom: 1px solid ${({theme:e})=>e.borderColor.MUTED};
    border-right: none;

    &:last-of-type {
      border-bottom: none;
    }
  }

  &:hover {
    background-color: transparent;
    box-shadow:
      0 0 0 1px ${({theme:e})=>e.highlightColor10},
      0px 4px 50px 0px ${({theme:e})=>e.highlightColor10};

    ${T} {
      transform: translateY(-2px);
    }

    ${P} {
      opacity: 1;

      span {
        opacity: 1;
      }
    }
  }
`,M=w.memo(({description:e,title:t,link:i,logo:o,trackingLabel:a})=>{let n=(0,L.useRouter)();return(0,x.jsxs)(H,{"data-tracking-label":a,href:i,onClick:e=>{if(0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;e.preventDefault();let t=window.location.search;n.push((0,F.buildLinkWithAttribution)(i,t))},children:[(0,x.jsxs)(T,{children:[o,(0,x.jsx)(k.Heading,{renderAs:"h4",children:t}),(0,x.jsx)(y.Text,{size:"medium",children:e})]}),(0,x.jsxs)(P,{children:[(0,x.jsx)("span",{children:"Read more"}),(0,x.jsx)(U.ArrowRightIcon,{})]})]})});M.displayName="CustomerStoryItem";var W=e.i(964202);let G=b.default.div.withConfig({displayName:"CustomerStoriesTout__Inner",componentId:"sc-cce02b78-0"})`
  display: flex;
  flex-direction: column;
  max-width: ${({theme:e})=>e.maxWidth.PAGE};
  margin: 0 auto;
  padding: 0 ${32}px;
  z-index: 1;
  position: relative;
`,R=b.default.div.withConfig({displayName:"CustomerStoriesTout__Top",componentId:"sc-cce02b78-1"})`
  display: flex;
  border-top: 1px solid ${({theme:e})=>e.borderColor.MUTED};
  border-left: 1px solid ${({theme:e})=>e.borderColor.MUTED};
  border-right: 1px solid ${({theme:e})=>e.borderColor.MUTED};
  position: relative;
`,O=b.default.div.withConfig({displayName:"CustomerStoriesTout__Grid",componentId:"sc-cce02b78-2"})`
  display: flex;
  border: 1px solid ${({theme:e})=>e.borderColor.MUTED};
  position: relative;
`,_=b.default.div.withConfig({displayName:"CustomerStoriesTout__GridInner",componentId:"sc-cce02b78-3"})`
  display: flex;

  @media (max-width: ${({theme:e})=>e.mediaQuery.EXTRA_LARGE}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    display: grid;
    grid-template-columns: 1fr;
  }
`,K=b.default.div.withConfig({displayName:"CustomerStoriesTout__Title",componentId:"sc-cce02b78-4"})`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`,q=b.default.div.withConfig({displayName:"CustomerStoriesTout__GridBkg",componentId:"sc-cce02b78-5"})`
  flex: none;
  position: relative;
  pointer-events: none;
  background-image: linear-gradient(
      ${({theme:e})=>e.borderColor.MUTED} 1px,
      transparent 1px
    ),
    linear-gradient(
      to right,
      ${({theme:e})=>e.borderColor.MUTED} 1px,
      transparent 1px
    );
  background-size: ${64}px ${64}px;
`,Y=(0,b.default)(q).withConfig({displayName:"CustomerStoriesTout__TallGrid",componentId:"sc-cce02b78-6"})`
  width: ${128}px;
  height: calc(${384}px - 1px);

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    width: ${64}px;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    display: none;
  }
`,z=(0,b.default)(Y).withConfig({displayName:"CustomerStoriesTout__LeftGrid",componentId:"sc-cce02b78-7"})`
  background-position: -1px -1px;
`,X=(0,b.default)(Y).withConfig({displayName:"CustomerStoriesTout__RightGrid",componentId:"sc-cce02b78-8"})`
  background-position: 0 -1px;
`,J=(0,b.default)(q).withConfig({displayName:"CustomerStoriesTout__WideGrid",componentId:"sc-cce02b78-9"})`
  width: 100%;
  height: ${64}px;
`,$=(0,b.default)(J).withConfig({displayName:"CustomerStoriesTout__TopGrid",componentId:"sc-cce02b78-10"})`
  background-position: center -1px;
  margin-bottom: auto;
`,V=(0,b.default)(J).withConfig({displayName:"CustomerStoriesTout__BottomGrid",componentId:"sc-cce02b78-11"})`
  background-position: center 0;
  margin-top: auto;
`,Z=b.default.div.withConfig({displayName:"CustomerStoriesTout__Heading",componentId:"sc-cce02b78-12"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 30px;
`,ee=(0,b.default)(C.GradientHeader).withConfig({displayName:"CustomerStoriesTout__StyledHeading",componentId:"sc-cce02b78-13"})`
  && {
    margin-bottom: 0;
    padding: 0;
    max-width: 600px;

    span {
      display: inline;
    }
  }
`,et=(0,b.default)(y.Text).attrs({size:"large"}).withConfig({displayName:"CustomerStoriesTout__StyledText",componentId:"sc-cce02b78-14"})`
  && {
    text-align: center;
  }
`,ei=(0,b.default)(v.SocialTout).withConfig({displayName:"CustomerStoriesTout__StyledSocialTout",componentId:"sc-cce02b78-15"})`
  && {
    padding: 0;
    padding-top: 40px;
  }
`,eo=[{title:"One place for insights",description:"Notion made Hex the one place for everyone, from data science to CX and sales, to make decisions with data.",link:"/customers/notion/",logo:(0,x.jsx)(function(e){return w.createElement("svg",D({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:200,height:60,fill:"none",viewBox:"0 0 200 60"},e),h||(h=w.createElement("path",{fill:"url(#dream-state-notion_svg__a)",d:"M44 8H0v44h44z"})),f||(f=w.createElement("defs",null,w.createElement("pattern",{id:"dream-state-notion_svg__a",width:1,height:1,patternContentUnits:"objectBoundingBox"},w.createElement("use",{xlinkHref:"#dream-state-notion_svg__b",transform:"scale(.00195)"})),w.createElement("image",{xlinkHref:"data:image/png;base64,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",id:"dream-state-notion_svg__b",width:512,height:512}))))},{}),trackingLabel:B.TRACKING_LABELS.HomePageCustomerStoriesNotionLink},{title:"Scaling self-serve AI analytics",description:"Mercor democratizes analysis across their org with Notebook Agent.",link:"/customers/mercor/",logo:(0,x.jsx)(function(e){return w.createElement("svg",j({xmlns:"http://www.w3.org/2000/svg",width:200,height:60,fill:"none",viewBox:"0 0 200 60"},e),l||(l=w.createElement("path",{fill:"#7068FC",d:"M93.624 23.328q1.121 0 2.098.325a5.6 5.6 0 0 1 1.766.942q.786.62 1.3 1.515l.063.112a5.9 5.9 0 0 1 .63 1.916.175.175 0 0 1-.173.203h-2.096a.175.175 0 0 1-.173-.144 3.03 3.03 0 0 0-1.188-1.94 3.3 3.3 0 0 0-1.015-.51 4 4 0 0 0-1.192-.174q-1.14 0-2.035.57-.886.566-1.414 1.68-.518 1.111-.52 2.748.002 1.65.52 2.76l.068.138q.515 1.012 1.352 1.535a3.7 3.7 0 0 0 2.023.565 4.1 4.1 0 0 0 1.184-.167 3.4 3.4 0 0 0 1.016-.505q.452-.33.764-.807.316-.48.438-1.107l.003-.015a.175.175 0 0 1 .17-.127l2.095.007a.176.176 0 0 1 .173.204 5.8 5.8 0 0 1-.672 1.924 5.3 5.3 0 0 1-1.271 1.514 5.7 5.7 0 0 1-1.76.978 6.5 6.5 0 0 1-2.154.346q-1.831 0-3.275-.872-1.443-.882-2.269-2.51c-.548-1.086-.818-2.376-.818-3.861 0-1.49.272-2.78.825-3.862.55-1.083 1.307-1.92 2.269-2.502q1.443-.88 3.268-.879"})),d||(d=w.createElement("path",{fill:"#7068FC",fillRule:"evenodd",d:"M109.82 23.328q1.824 0 3.268.879 1.448.874 2.276 2.502.827 1.625.825 3.862.002 2.236-.825 3.868-.827 1.621-2.276 2.503-1.444.872-3.268.872-1.832 0-3.282-.872h-.001q-1.441-.883-2.268-2.51c-.553-1.086-.825-2.375-.825-3.861 0-1.49.272-2.78.825-3.862q.8-1.576 2.179-2.447l.09-.055q1.45-.88 3.282-.879m0 2.245q-1.142 0-2.029.57h-.001c-.59.374-1.062.929-1.413 1.674-.344.736-.521 1.652-.521 2.754 0 1.101.177 2.019.521 2.76l.067.137q.515 1.006 1.347 1.537.887.563 2.029.564 1.135-.002 2.022-.564.893-.566 1.413-1.673c.349-.741.528-1.66.528-2.761s-.179-2.017-.527-2.754h-.001q-.52-1.116-1.412-1.673h-.002q-.887-.57-2.021-.57",clipRule:"evenodd"})),c||(c=w.createElement("path",{fill:"#7068FC",d:"M43.045 23.518c.06.01.112.05.135.107l4.3 10.496 4.298-10.496.012-.023a.18.18 0 0 1 .15-.085h2.52c.096 0 .174.078.174.175V37.45a.175.175 0 0 1-.175.176h-1.975a.175.175 0 0 1-.175-.175v-9.378l-3.848 9.423a.18.18 0 0 1-.162.11h-1.64a.18.18 0 0 1-.162-.11l-3.848-9.429v9.383a.175.175 0 0 1-.175.176h-1.975a.175.175 0 0 1-.175-.175V23.69c0-.096.078-.174.175-.174h2.52zM68.374 23.517c.096 0 .175.078.175.175v1.787a.175.175 0 0 1-.175.175h-6.376v3.842h5.925c.097 0 .175.078.175.175v1.78a.175.175 0 0 1-.175.175h-5.925v3.862h6.456c.097 0 .175.079.175.175v1.788a.175.175 0 0 1-.175.175h-8.707a.175.175 0 0 1-.175-.175V23.69c0-.096.079-.174.175-.174z"})),p||(p=w.createElement("path",{fill:"#7068FC",fillRule:"evenodd",d:"M78.32 23.517c1.086 0 2 .186 2.735.57l.136.073a3.8 3.8 0 0 1 1.523 1.524c.365.674.545 1.45.545 2.32q.001 1.303-.552 2.309c-.368.67-.924 1.188-1.66 1.556a4 4 0 0 1-.236.11l2.95 5.387a.175.175 0 0 1-.153.26h-2.365a.18.18 0 0 1-.154-.093l-2.746-5.114h-2.675v5.032a.175.175 0 0 1-.176.175h-2.075a.175.175 0 0 1-.175-.175V23.69c0-.096.078-.174.175-.174zm-2.652 6.765h2.458c.657 0 1.176-.095 1.566-.273.395-.18.676-.434.853-.764.18-.336.275-.748.275-1.24 0-.497-.097-.918-.283-1.269v-.001c-.178-.343-.459-.609-.854-.796h-.002c-.388-.19-.912-.292-1.582-.292h-2.431zM125.776 23.517c1.085 0 1.999.186 2.735.57l.135.073q1.005.564 1.523 1.524c.365.674.546 1.45.546 2.32q.001 1.303-.553 2.308c-.368.67-.924 1.19-1.66 1.557a4 4 0 0 1-.235.11l2.95 5.387a.175.175 0 0 1-.154.26h-2.364a.18.18 0 0 1-.155-.093l-2.745-5.114h-2.6759999999999997v5.032a.175.175 0 0 1-.175.175h-2.076a.175.175 0 0 1-.175-.175V23.69c0-.096.078-.174.175-.174zm-2.653 6.765h2.458c.657 0 1.176-.095 1.567-.273.395-.18.676-.434.852-.764q.273-.503.275-1.24-.001-.744-.282-1.269l-.001-.001c-.178-.343-.459-.609-.853-.796h-.002c-.389-.19-.913-.292-1.583-.292h-2.431z",clipRule:"evenodd"})),w.createElement("mask",{id:"dream-state-mercor_svg__a",width:29,height:25,x:0,y:18,maskUnits:"userSpaceOnUse",style:{maskType:"luminance"}},A||(A=w.createElement("path",{fill:"#fff",d:"M28.536 18H0v25h28.536z"}))),g||(g=w.createElement("g",{fillRule:"evenodd",clipRule:"evenodd",mask:"url(#dream-state-mercor_svg__a)"},w.createElement("path",{fill:"url(#dream-state-mercor_svg__b)",d:"m22.42 29.596-.13 10.47s-.122.94.8 1.29c.924.35 4.32 1.642 4.32 1.642s.414.053.789-.36c.374-.413.324-.8.324-1.283V25.377s.477-6.062-4.434-7.28c0 0-2.68-.653-4.754 1.428.824.424 1.616 1.165 2.172 2.427 1.154 2.617.913 7.644.913 7.644"}),w.createElement("path",{fill:"url(#dream-state-mercor_svg__c)",d:"M.017 41.11s-.243 1.819 1.106 1.844l4.274-1.785s.87-.282.823-1.168c-.049-.886-.295-10.53-.295-10.53s-1.838-8.654-4.746-9.355c-.54.763-.826 1.593-.98 2.214-.155.626-.182.97-.188 1.591-.028 3.19.006 17.19.006 17.19"}),w.createElement("path",{fill:"url(#dream-state-mercor_svg__d)",d:"M5.925 29.472s3.017 6.958 4.453 8.011c0 0 3.2-2.953 3.903-6.186l-3.398-8.356s-1.966-5.323-6.188-4.85c-1.74.194-2.832 1.056-3.516 2.025 2.908.701 4.746 9.356 4.746 9.356"}),w.createElement("path",{fill:"url(#dream-state-mercor_svg__e)",d:"M10.378 37.484c1.435 1.052 3.235 2.01 5.705 1.148s3.35-2.776 3.637-3.369 2.7-5.667 2.7-5.667.24-5.027-.913-7.644c-.556-1.261-1.348-2.003-2.172-2.427q-.19.19-.37.41s-.53.629-.934 1.715c-.403 1.086-3.75 9.648-3.75 9.648-.703 3.232-3.903 6.186-3.903 6.186"}))),m||(m=w.createElement("defs",null,w.createElement("linearGradient",{id:"dream-state-mercor_svg__b",x1:27.542,x2:23.892,y1:44.271,y2:28.061,gradientUnits:"userSpaceOnUse"},w.createElement("stop",{stopColor:"#7068FC",stopOpacity:.5}),w.createElement("stop",{offset:1,stopColor:"#7068FC"})),w.createElement("linearGradient",{id:"dream-state-mercor_svg__c",x1:3.111,x2:3.111,y1:19.571,y2:40.479,gradientUnits:"userSpaceOnUse"},w.createElement("stop",{stopColor:"#7068FC",stopOpacity:.5}),w.createElement("stop",{offset:1,stopColor:"#7068FC"})),w.createElement("linearGradient",{id:"dream-state-mercor_svg__d",x1:12.719,x2:6.384,y1:35.696,y2:25.753,gradientUnits:"userSpaceOnUse"},w.createElement("stop",{stopColor:"#7068FC",stopOpacity:.5}),w.createElement("stop",{offset:1,stopColor:"#7068FC"})),w.createElement("linearGradient",{id:"dream-state-mercor_svg__e",x1:19.628,x2:12.288,y1:23.054,y2:32.263,gradientUnits:"userSpaceOnUse"},w.createElement("stop",{stopColor:"#7068FC",stopOpacity:.5}),w.createElement("stop",{offset:1,stopColor:"#7068FC"})))))},{}),trackingLabel:B.TRACKING_LABELS.HomePageCustomerStoriesMercorLink},{title:"Lowering barriers to insight",description:"Figma's team focuses on strategy over syntax using Hex's AI agents.",link:"/customers/figma/",logo:(0,x.jsx)(function(e){return w.createElement("svg",E({xmlns:"http://www.w3.org/2000/svg",width:200,height:60,fill:"none",viewBox:"0 0 200 60"},e),t||(t=w.createElement("path",{fill:"#000",d:"M0 21.855A6.855 6.855 0 0 1 6.855 15h16.29A6.855 6.855 0 0 1 30 21.855v16.29A6.856 6.856 0 0 1 23.144 45H6.855A6.855 6.855 0 0 1 0 38.144z"})),i||(i=w.createElement("path",{fill:"#24CB71",d:"M7.969 37.031a3.516 3.516 0 0 1 3.515-3.515H15v3.515a3.516 3.516 0 1 1-7.031 0"})),o||(o=w.createElement("path",{fill:"#FF7237",d:"M15 19.453v7.031h3.516a3.515 3.515 0 1 0 0-7.03z"})),a||(a=w.createElement("path",{fill:"#00B6FF",d:"M18.486 33.516a3.516 3.516 0 1 0 0-7.032 3.516 3.516 0 0 0 0 7.032"})),n||(n=w.createElement("path",{fill:"#FF3737",d:"M7.969 22.969a3.516 3.516 0 0 0 3.515 3.515H15v-7.03h-3.516a3.516 3.516 0 0 0-3.515 3.515"})),r||(r=w.createElement("path",{fill:"#874FFF",d:"M7.969 30a3.516 3.516 0 0 0 3.515 3.516H15v-7.032h-3.516A3.515 3.515 0 0 0 7.97 30"})),s||(s=w.createElement("path",{fill:"#000",d:"M100.781 40.344q-1.387 0-2.49-.536a4.6 4.6 0 0 1-1.726-1.439q-.623-.93-.623-2.145 0-1.58 1.019-2.567t2.914-1.355l3.311-.677q.99-.197 1.358-.62.368-.424.368-1.242l.339 3.301-4.753 1.016q-.963.198-1.5.705-.51.51-.51 1.411 0 .932.708 1.496.735.564 1.981.564 1.018 0 1.867-.451a3.33 3.33 0 0 0 1.358-1.242q.51-.818.51-1.862v-4.938q0-1.017-.736-1.58-.707-.593-1.952-.593-1.585 0-2.434.79t-.99 2.23l-2.49-.34q.141-1.494.905-2.567a5 5 0 0 1 2.038-1.693q1.274-.593 3.027-.593 2.49 0 3.82 1.27t1.33 3.273v9.96h-2.462v-1.833q-.368.93-1.499 1.608-1.104.65-2.688.65M75.88 39.92V25.84h2.461v1.58q.283-.818 1.245-1.41.963-.593 2.236-.593 1.245.001 2.291.536 1.047.537 1.359 1.609.368-.988 1.358-1.552a4.4 4.4 0 0 1 2.263-.593q2.15 0 3.283 1.242 1.131 1.242 1.131 3.612v9.65H90.99v-9.312q0-1.41-.622-2.116-.594-.733-1.755-.733-1.273 0-1.98.902-.68.876-.68 2.568v8.69h-2.518v-9.31q0-1.412-.622-2.117-.594-.733-1.754-.733-1.275 0-1.981.902-.68.876-.68 2.568v8.69zM66.25 45q-2.631 0-4.272-1.213-1.641-1.215-2.094-3.386l2.462-.537q.31 1.383 1.33 2.145 1.018.79 2.575.79 1.867 0 2.8-.96.963-.93.963-2.793v-2.229q-.424 1.044-1.585 1.693-1.131.65-2.547.65-1.867 0-3.282-.847-1.414-.876-2.207-2.427-.792-1.553-.792-3.584 0-2.06.792-3.611.793-1.552 2.179-2.399 1.415-.875 3.31-.875 1.416 0 2.575.65 1.189.62 1.613 1.551v-1.777h2.462v13.205q0 1.862-.736 3.189a4.84 4.84 0 0 1-2.15 2.06Q68.26 45 66.25 45m-.056-8.07q1.811 0 2.886-1.27 1.103-1.269 1.103-3.358 0-2.116-1.103-3.386-1.104-1.27-2.886-1.27-1.81 0-2.915 1.27-1.075 1.27-1.075 3.386 0 2.089 1.104 3.358 1.103 1.27 2.886 1.27M54.52 39.905V25.84h2.518v14.08zm-.029-15.87v-4.007h2.575v4.007zM40.056 39.921V20.028h2.66v19.893zm.537-8.408v-2.399H51.43v2.399zm0-9.058v-2.427h11.884v2.427z"})))},{}),trackingLabel:B.TRACKING_LABELS.HomePageCustomerStoriesFigmaLink},{title:"Breaking data silos",description:"Neo drives insights right where they work using Threads and Slack integration.",link:"/customers/neo-financial/",logo:(0,x.jsx)(function(e){return w.createElement("svg",N({xmlns:"http://www.w3.org/2000/svg",width:200,height:60,fill:"none",viewBox:"0 0 200 60"},e),u||(u=w.createElement("path",{fill:"#000",d:"M40.284 18.505c6.176-.329 8.92 3.052 8.92 5.983 0 3.029-3.854 4.468-11.977 5.828 1.787 5.765 7.237 7.796 12.305 4.803l.493 1.078c-2.137 2.464-6.124 4.833-10.085 4.833-4.748 0-10.973-3.24-10.973-11.27 0-3.996 2.132-10.765 11.317-11.255m23.031-.023C73.19 18.482 76 25.207 76 29.757S73.189 41.03 63.315 41.03c-9.873 0-12.683-6.723-12.683-11.273s2.81-11.275 12.683-11.275M11.536 21.97c2.21-2.359 5.509-3.487 8.196-3.487 5.364 0 7.105 3.116 7.105 6.926v10.625c0 2.146.995 2.564 2.783 2.871v1.18H18.51V27.59c0-3.142-.335-5.396-2.932-5.397-2.674 0-3.29 2.204-3.29 5.397v8.443c0 2.146.992 2.564 2.78 2.871v1.184H1.138v-1.18c1.788-.308 2.782-.725 2.782-2.87v-8.444c0-2.968-3.357-4.046-3.92-4.255A28.9 28.9 0 0 0 11.535 18zm51.78-1.884c-3.65 0-3.796 3.657-3.796 9.672s.146 9.67 3.795 9.67 3.795-3.655 3.795-9.67-.146-9.672-3.795-9.672m-23.032.009c-4.071 0-3.7 6.471-3.384 8.773 5.074-.85 6.245-2.43 6.246-5.285 0-2.265-1.43-3.488-2.862-3.488"})))},{}),trackingLabel:B.TRACKING_LABELS.HomePageCustomerStoriesNeoFinancialLink}],ea=w.memo(()=>(0,x.jsx)(W.ToutWrapper,{children:(0,x.jsxs)(G,{children:[(0,x.jsxs)(R,{children:[(0,x.jsx)(S,{position:"top-left"}),(0,x.jsx)(S,{position:"top-right"}),(0,x.jsx)(S,{design:"middle",position:"bottom-left"}),(0,x.jsx)(S,{design:"middle",position:"bottom-right"}),(0,x.jsx)(z,{}),(0,x.jsxs)(K,{children:[(0,x.jsx)($,{}),(0,x.jsxs)(Z,{children:[(0,x.jsxs)(ee,{renderAs:"h2",styleAs:"h1",children:[(0,x.jsxs)("div",{children:[(0,x.jsx)("span",{"data-style":"italic",children:"Loved"})," by the"]}),(0,x.jsx)("div",{children:"best data teams"})]}),(0,x.jsx)(et,{children:"Hex helps companies of all sizes do more with their data."})]}),(0,x.jsx)(V,{})]}),(0,x.jsx)(X,{})]}),(0,x.jsxs)(O,{children:[(0,x.jsx)(S,{position:"bottom-left"}),(0,x.jsx)(S,{position:"bottom-right"}),(0,x.jsx)(_,{children:eo.map((e,t)=>(0,x.jsx)(M,{...e},t))})]}),(0,x.jsx)(ei,{customerQuotes:[{author:"Abhishek Modi",authorAvatarPath:"/images/headshots/abhishek-modi-headshot.jpg",authorTitle:"Software Engineer",customerName:"Notion",logoPath:I.CUSTOMER_LOGOS_HOSTED.Notion,quote:"Our vision for Notion's data team is that anyone, regardless of technical proficiency, is comfortable using data to answer their own questions — and Hex enables that."}],g2TrackingLabel:B.TRACKING_LABELS.HomePageG2ReviewsLink,includeG2Proof:!0})]})}));ea.displayName="CustomerStoriesTout",e.s(["CustomerStoriesTout",0,ea],779698)},62260,e=>{"use strict";var t=e.i(843476),i=e.i(997053),o=e.i(558202),a=e.i(812488),n=e.i(154213);let r=[{question:"What is Hex?",answer:(0,t.jsx)(t.Fragment,{children:"Hex is the AI Analytics Platform where trust meets insight: a single, connected workspace where data practitioners run deep analysis, business users ask questions in plain language, and everyone collaborates on the same data. A shared context engine ensures every AI-generated insight is accurate and consistent."})},{question:"Who uses Hex?",answer:(0,t.jsx)(t.Fragment,{children:"Hex allows anyone to get answers from data with AI. Whether you’re a member of the data team running code-based experiments or a business user looking to self-serve a one-off question, Hex provides tailored AI-workflows for you to find answers from data, faster."})},{question:"Why do data teams switch to Hex?",answer:(0,t.jsx)(t.Fragment,{children:"Data teams switch to Hex because it gives them one connected, AI-native workspace for everything they do with data. Deep analysis, one-off questions, and critical business dashboards all happen on the same trusted context. Instead of juggling separate notebooks, BI tools, and ad-hoc Slack requests, Hex brings data work & AI together in one place."})},{question:"Can business users access data without knowing SQL or Python?",answer:(0,t.jsx)(t.Fragment,{children:"Yes. Hex lets anyone ask questions in plain language in Hex, Slack, or via MCP and get AI-generated analysis backed by your actual data, metrics, and business rules. No SQL, no Python, no ticket to the data team. And when a question needs deeper investigation, a data practitioner can jump directly into the same workflow without switching context."})},{question:"How does Hex ensure AI answers are accurate and trustworthy?",answer:(0,t.jsx)(t.Fragment,{children:"Hex's context engine combines database descriptions, semantic models, business rules, and analytical logic into one curated layer that powers every AI answer. Data teams can observe what’s being asked, catch inconsistencies, and continuously improve context over time. The result: business users get answers they can act on, and data teams maintain visibility and control over every insight."})},{question:"How is Hex different from just using ChatGPT, Claude, Codex, or any other AI assistant?",answer:(0,t.jsx)(t.Fragment,{children:"ChatGPT, Claude, Codex, and other AI assistants can generate answers. Hex helps teams build more trustworthy, repeatable AI-powered analysis by grounding it in the organization's data, business context, and definitions. Context Studio makes it easier to inspect and improve that context, while built-in evals let teams test changes before production and measure their impact on agent accuracy."})},{question:"How is Hex different than point solution analytics tools?",answer:(0,t.jsx)(t.Fragment,{children:"Hex enables you to bring all your business’s critical data context into one workspace. Solution-specific analytics platforms exacerbate tool sprawl and siloed workflows between teams, while creating governance gaps leading to poor decisions and thrash."})}],s=i.default.div.withConfig({displayName:"HomeFAQ__FAQWrapper",componentId:"sc-23da054a-0"})`
  width: 100%;
  background: transparent;
  position: relative;
  z-index: 1;
`;e.s(["HomeFAQ",0,function({items:e=r}){return(0,t.jsxs)(s,{children:[(0,t.jsx)(a.TronDivider,{}),(0,t.jsx)(o.FAQ,{footerLinkTrackingLabel:n.TRACKING_LABELS.HomePageFAQContactLink,items:e,noBkg:!0})]})}],62260)},964202,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(846932),a=e.i(997053),n=e.i(360571),r=e.i(991709);let s=(0,a.default)(o.motion.div).withConfig({displayName:"ToutWrapper__Wrapper",componentId:"sc-3805269d-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  padding: ${(0,n.generateFluidPxScale)(70,100)} 0;
`,l=i.memo(i.forwardRef(({children:e,className:i},o)=>(0,t.jsx)(s,{ref:o,className:i,...r.ANIMATIONS.SimpleFadeIn,children:e})));e.s(["ToutWrapper",0,l])},955191,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(997053),a=e.i(209985),n=e.i(967109),r=e.i(392944),s=e.i(775732);let l="#1C1B1C",d="#7B7A7B",c="#135999",p="14px",A="12px",g="#ADADAE",m="#D7D7D7",u="#FFFFFF",h="#F8F8F8",f=()=>(0,t.jsx)("svg",{fill:"none",height:"4",viewBox:"0 0 6 4",width:"6",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M3.29518 3.37558C3.09848 3.57999 2.77131 3.57999 2.57461 3.37558L0.141182 0.846688C-0.164478 0.529036 0.0606402 -1.14078e-07 0.50147 -7.70813e-08L5.36832 3.31373e-07C5.80915 3.6837e-07 6.03427 0.529036 5.72861 0.846688L3.29518 3.37558Z",fill:"currentColor"})});var x=e.i(657688),w=e.i(193594);let b={src:e.i(948008).default,width:64,height:64,blurWidth:8,blurHeight:8,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA7UlEQVR42kWQS0sCYRiF598FJc3kSIsoKNtUBJUMJUQWhRINRa2KIGoVBC1CKAraB9GNrPE2KjNeBvxc6C949B0X7g7nfV4452jpg5QV1N12VzVoeWUatSKiB55K76csTURX1Xl9zhKfnyVmGrw8PSCePGq9ThPVqmJtrHJ2uMNSfIbFhTkCv4zcQqBWyrG9tc7Nhc31uc1mYoV87mMElJxvpmM6t5c2d1cnmEaE36+3EVD4+0SfjJBMLLObXGNifIz/n/chIEEklBk1OMrscXqcITql85i9D5toUsWrOMqv5MNgge8i2nOdtkzQB0TiwgEtcRlQAAAAAElFTkSuQmCC"};var C=e.i(547403);let v=i.memo(function({attachment:e,showAvatar:i=!1,message:o,name:a,reaction:n,timestamp:r,buttonText:s,fromHex:l=!1}){return(0,t.jsxs)(y,{children:[(0,t.jsx)(I,{$fromHex:l,$visible:i,children:l?(0,t.jsx)(C.HexLogo,{}):(0,t.jsx)(x.default,{alt:"Avatar",height:32,src:b,width:32})}),(0,t.jsxs)(B,{children:[a&&(0,t.jsxs)(E,{children:[(0,t.jsx)(j,{children:a}),r&&(0,t.jsx)(N,{children:r})]}),(0,t.jsx)(D,{children:o}),n&&(0,t.jsxs)(Q,{children:[n," 1"]}),s&&(0,t.jsx)(S,{children:s}),e&&(0,t.jsxs)(L,{children:[(0,t.jsxs)(k,{children:[e.name," ",(0,t.jsx)(U,{children:(0,t.jsx)(f,{})})]}),(0,t.jsx)(F,{children:e.file})]})]})]})}),y=o.styled.div.withConfig({displayName:"SlackMessage__Wrapper",componentId:"sc-7a55c669-0"})`
  font-family: 'Lato', sans-serif;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  line-height: 1.4;
  padding: 4px 16px;

  &:hover {
    background-color: ${h};
  }
`,I=o.styled.div.withConfig({displayName:"SlackMessage__Avatar",componentId:"sc-7a55c669-1"})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  flex: none;
  opacity: ${({$visible:e})=>e?"1":"0"};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${({$fromHex:e})=>e&&o.css`
      background-color: #01011b;

      svg {
        height: 8px;
        color: #f5c0c0;
      }
    `}
`,B=o.styled.div.withConfig({displayName:"SlackMessage__Contents",componentId:"sc-7a55c669-2"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
`,E=o.styled.div.withConfig({displayName:"SlackMessage__Metadata",componentId:"sc-7a55c669-3"})`
  display: flex;
  align-items: center;
  gap: 7px;
`,j=o.styled.div.withConfig({displayName:"SlackMessage__Name",componentId:"sc-7a55c669-4"})`
  font-weight: 700;
  font-size: ${p};
  color: ${l};
  letter-spacing: -0.2px;
`,N=o.styled.div.withConfig({displayName:"SlackMessage__Timestamp",componentId:"sc-7a55c669-5"})`
  font-size: ${A};
  color: ${d};
`,D=o.styled.div.withConfig({displayName:"SlackMessage__Message",componentId:"sc-7a55c669-6"})`
  font-size: ${A};
  color: ${l};
  padding-bottom: 3px;
  line-height: 1.4;

  span {
    color: ${c};
    padding: 1px 2px 2px;
    background-color: ${(0,w.rgba)(c,.1)};
    border-radius: 2px;
  }

  h2 {
    font-size: ${p};
    font-weight: 700;
    letter-spacing: -0.2px;
    margin-bottom: 5px;
    padding-top: 5px;
  }

  strong {
    font-weight: 600;
  }

  p {
    margin-bottom: 8px;
    line-height: inherit;
  }

  ul {
    margin-bottom: 8px;
    padding-left: 15px;
    list-style-type: disc;
    line-height: inherit;

    li {
      line-height: inherit;
    }
  }

  *:last-child {
    margin-bottom: 0;
  }
`,Q=o.styled.div.withConfig({displayName:"SlackMessage__Reaction",componentId:"sc-7a55c669-7"})`
  font-size: ${A};
  color: ${l};
  background-color: #f0f0f0;
  border-radius: 20px;
  height: 22px;
  display: flex;
  align-items: center;
  padding: 0 7px;
  gap: 2px;
`,S=o.styled.div.withConfig({displayName:"SlackMessage__Button",componentId:"sc-7a55c669-8"})`
  font-size: ${A};
  color: ${l};
  border: 1px solid ${g};
  font-weight: 700;
  border-radius: 5px;
  height: 24px;
  line-height: 24px;
  display: flex;
  align-items: center;
  padding: 0 7px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${h};
    box-shadow:
      0 1px 1.5px 0 rgba(16, 22, 26, 0.1),
      0 0.5px 3px 0 rgba(16, 22, 26, 0.08);
  }
`,L=o.styled.div.withConfig({displayName:"SlackMessage__Attachment",componentId:"sc-7a55c669-9"})`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,k=o.styled.div.withConfig({displayName:"SlackMessage__AttachmentName",componentId:"sc-7a55c669-10"})`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: ${A};
  color: ${d};
`,U=o.styled.div.withConfig({displayName:"SlackMessage__AttachmentCaretIcon",componentId:"sc-7a55c669-11"})`
  display: flex;
  padding-top: 3px;
`,F=o.styled.div.withConfig({displayName:"SlackMessage__AttachmentFile",componentId:"sc-7a55c669-12"})`
  border: 1px solid ${m};
  background-color: ${u};
  border-radius: 5px;
`,T=i.memo(function({dashedLines:e,skipFontPreload:i=!1}){return(0,t.jsxs)(t.Fragment,{children:[i?null:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("link",{href:"https://fonts.googleapis.com",rel:"preconnect"}),(0,t.jsx)("link",{crossOrigin:"anonymous",href:"https://fonts.gstatic.com",rel:"preconnect"}),(0,t.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap",precedence:"slack-font",rel:"stylesheet"})]}),(0,t.jsx)(P,{accessibleLabel:"Product demonstration of Hex answering a question in Slack",dashedLines:e,inBrowserWindow:!0,windowTitle:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(G,{})," Slack"]}),children:(0,t.jsxs)(H,{children:[(0,t.jsx)(v,{message:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:"@Hex"})," get me NexaCorp's Q3 sales by product line"]}),name:"Julia",showAvatar:!0,timestamp:"4 min ago"}),(0,t.jsx)(M,{children:"3 replies"}),(0,t.jsx)(v,{buttonText:"View in Hex",fromHex:!0,message:"Your question was sent to Hex! The answer will be posted here, but you can also follow along in Hex.",name:"Hex",showAvatar:!0,timestamp:"4 min ago"}),(0,t.jsx)(v,{fromHex:!0,message:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h2",{children:"NexaCorp Q3 revenue trends by product line"}),(0,t.jsx)("p",{children:"Here's what I found in the “nexacorp_sales” tables (powered by the Galactic Sales semantic model):"}),(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[n.PRODUCT_NAMES.One," —"," ",(0,t.jsxs)("strong",{children:["$",n.REVENUE_DATA.One,"M"]})]}),(0,t.jsxs)("li",{children:[n.PRODUCT_NAMES.Two," —"," ",(0,t.jsxs)("strong",{children:["$",n.REVENUE_DATA.Two,"M"]})]}),(0,t.jsxs)("li",{children:[n.PRODUCT_NAMES.Three," —"," ",(0,t.jsxs)("strong",{children:["$",n.REVENUE_DATA.Three,"M"]})]}),(0,t.jsxs)("li",{children:[n.PRODUCT_NAMES.Four," —"," ",(0,t.jsxs)("strong",{children:["$",n.REVENUE_DATA.Four,"M"]})]}),(0,t.jsxs)("li",{children:[n.PRODUCT_NAMES.Five," —"," ",(0,t.jsxs)("strong",{children:["$",n.REVENUE_DATA.Five,"M"]})]}),(0,t.jsxs)("li",{children:[n.PRODUCT_NAMES.Six," —"," ",(0,t.jsxs)("strong",{children:["$",n.REVENUE_DATA.Six,"M"]})]})]})]})}),(0,t.jsx)(v,{attachment:{name:"Revenue Trends by Product Line (Q1-Q3) (56 kB)",file:(0,t.jsx)(W,{children:(0,t.jsx)(a.ChartRevenueByProductLine,{})})},fromHex:!0,message:null,showAvatar:!1}),(0,t.jsx)(v,{fromHex:!0,message:"Let me know if you'd like to break this down by region or customer sector.",showAvatar:!1})]})})]})}),P=(0,o.styled)(s.InteractiveFeatureWrapper).withConfig({displayName:"InteractiveFeatureSlack__Wrapper",componentId:"sc-22abb7e5-0"})``,H=(0,o.styled)(r.IntentScrollable2).withConfig({displayName:"InteractiveFeatureSlack__Content",componentId:"sc-22abb7e5-1"})`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  border-radius: 6px;
  padding: 12px 0;
`,M=o.styled.div.withConfig({displayName:"InteractiveFeatureSlack__Separator",componentId:"sc-22abb7e5-2"})`
  display: flex;
  align-items: center;
  font-size: ${A};
  color: ${d};
  padding: 8px 16px;
  gap: 8px;

  &::after {
    content: '';
    flex: 1 1 auto;
    height: 1px;
    background-color: ${m};
  }
`,W=o.styled.div.withConfig({displayName:"InteractiveFeatureSlack__ChartWrapper",componentId:"sc-22abb7e5-3"})`
  padding: 10px 10px 5px;
`,G=e=>(0,t.jsx)("svg",{fill:"none",height:"14",viewBox:"0 0 14 14",width:"14",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,t.jsx)("path",{d:"M5.42383 7.3252C6.12121 7.32527 6.68455 7.88855 6.68457 8.58594V11.7393C6.68434 12.4365 6.12107 12.9999 5.42383 13C4.72652 13 4.16234 12.4365 4.16211 11.7393V8.58594C4.16213 7.8885 4.72639 7.3252 5.42383 7.3252ZM8.58594 10.4775C9.28336 10.4776 9.84668 11.0418 9.84668 11.7393C9.84644 12.4365 9.28321 13 8.58594 13C7.88863 13 7.32543 12.4365 7.3252 11.7393V10.4775H8.58594ZM3.53223 8.58594C3.53223 9.28339 2.96796 9.84668 2.27051 9.84668C1.57321 9.8465 1.00977 9.28327 1.00977 8.58594C1.00978 7.88862 1.57322 7.32538 2.27051 7.3252H3.53223V8.58594ZM11.748 7.3252C12.4455 7.3252 13.0097 7.8885 13.0098 8.58594C13.0098 9.28339 12.4455 9.84668 11.748 9.84668H8.58594C7.88849 9.84668 7.3252 9.28339 7.3252 8.58594C7.32521 7.8885 7.8885 7.3252 8.58594 7.3252H11.748ZM5.42383 4.16211C6.12115 4.16226 6.68457 4.72647 6.68457 5.42383C6.68442 6.12105 6.12105 6.68442 5.42383 6.68457H2.26074C1.56357 6.68436 1.00015 6.12101 1 5.42383C1 4.72651 1.56348 4.16232 2.26074 4.16211H5.42383ZM8.58594 1C9.28323 1.00003 9.84647 1.5635 9.84668 2.26074V5.42383C9.84653 6.12113 9.28326 6.68454 8.58594 6.68457C7.88858 6.68457 7.32535 6.12115 7.3252 5.42383V2.26074C7.32541 1.56348 7.88862 1 8.58594 1ZM11.7383 4.16211C12.4357 4.16211 13 4.72638 13 5.42383C12.9998 6.12115 12.4356 6.68457 11.7383 6.68457H10.4775V5.42383C10.4775 4.72653 11.041 4.16235 11.7383 4.16211ZM5.42383 1C6.12101 1.00015 6.68436 1.56357 6.68457 2.26074V3.52246H5.42383C4.72638 3.52246 4.16211 2.95819 4.16211 2.26074C4.16232 1.56348 4.72651 1 5.42383 1Z",fill:"currentColor"})});e.s(["InteractiveFeatureSlack",0,T],955191)},948008,e=>{e.q("/_next/static/media/slack-avatar-julia.2thz42wep-a-s.png")},392944,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(193594),a=e.i(997053),n=e.i(174080),r=e.i(482847);function s({isHovering:e,isUnlocked:l,progress:d}){let[c,p]=i.useState({x:0,y:0}),[A,g]=i.useState(!1),[m,u]=i.useState(!1),h=e&&!l,f=(0,a.useTheme)().appUI.intent.PRIMARY,x=(0,o.rgba)(f,.25);return(i.useEffect(()=>{if(h)u(!0),requestAnimationFrame(()=>{requestAnimationFrame(()=>{g(!0)})});else{g(!1);let e=setTimeout(()=>{u(!1)},150);return()=>clearTimeout(e)}},[h]),i.useEffect(()=>{let e=e=>{p({x:e.clientX,y:e.clientY})};return window.addEventListener("mousemove",e),()=>window.removeEventListener("mousemove",e)},[]),!m||"u"<typeof document)?null:n.createPortal((0,t.jsx)("div",{className:"scroll-unlock-indicator",style:{position:"fixed",left:c.x,top:c.y,pointerEvents:"none",zIndex:1e5,transform:"translate(-1px, -1px)",opacity:+!!A,transition:"opacity 150ms ease-out"},children:(0,t.jsx)(r.UnlockProgressIndicator,{filledColor:f,progress:d,unfilledColor:x})}),document.body)}let l=i.forwardRef(({children:e,className:i,intentScroll:o=!0,overflowX:a="hidden"},n)=>o?(0,t.jsx)(d,{ref:n,className:i,overflowX:a,children:e}):(0,t.jsx)(c,{children:(0,t.jsx)(A,{ref:n,$overflowX:a,className:i,children:e})}));l.displayName="IntentScrollable2";let d=i.forwardRef(({children:e,className:o,overflowX:a="hidden"},n)=>{let r=i.useRef(null),l=n||r,{isHovering:d,isPulsing:g,isUnlocked:m,progress:u}=function(e){let{unlockTimeMs:t=800,maxVelocity:o=15}=(void 0)??{},[a,n]=i.useState(!1),[r,s]=i.useState(0),[l,d]=i.useState(!1),[c,p]=i.useState(!1),A=i.useRef(!1),g=i.useRef(null),m=i.useRef(0),u=i.useRef([]),h=i.useRef({x:0,y:0,time:0}),f=i.useRef(!1),x=i.useRef(!1),w=i.useRef([]),b=i.useRef({y:0,time:0}),C=i.useRef([]),v=i.useRef(0),y=i.useRef(!1);return i.useEffect(()=>{f.current=a},[a]),i.useEffect(()=>{let i=e.current;if(!i)return;let a=e=>{x.current=!0,window.scrollBy({top:e,behavior:"instant"}),requestAnimationFrame(()=>{x.current=!1})},r=()=>{g.current&&(clearInterval(g.current),g.current=null)},l=()=>{A.current=!0,d(!0);let e=Date.now();h.current={x:0,y:0,time:e},b.current={y:window.scrollY,time:e},v.current=0,u.current=[],w.current=[],C.current=[],y.current=!1,(()=>{if(g.current)return;m.current=0;let e=Date.now();g.current=window.setInterval(()=>{let i,a,l,d=Date.now(),c=d-e;e=d;let A=Math.max((i=u.current,Date.now()-h.current.time>100?0:0===i.length?999:i.reduce((e,t)=>e+t,0)/i.length),(a=w.current,Date.now()-b.current.time>150||0===a.length?0:a.reduce((e,t)=>e+t,0)/a.length),(l=C.current,Date.now()-v.current>150||0===l.length?0:l.reduce((e,t)=>e+t,0)/l.length))<o;A&&!y.current&&(y.current=!0),A&&y.current&&(m.current+=c/t);let g=Math.min(1,m.current);s(g),g>=1&&(r(),n(!0),f.current=!0,p(!0),setTimeout(()=>{p(!1)},400))},16)})()},c=()=>{A.current=!1,r(),n(!1),s(0),d(!1),f.current=!1,m.current=0,u.current=[],w.current=[],C.current=[],y.current=!1},I=e=>{if(!A.current)return;let t=Date.now(),i=h.current,o=t-i.time;if(o>16){let a=e.clientX-i.x,n=e.clientY-i.y,r=Math.sqrt(a*a+n*n);u.current.push(r/o*1e3),u.current.length>5&&u.current.shift(),h.current={x:e.clientX,y:e.clientY,time:t}}},B=e=>{if(!A.current)return;e.preventDefault(),e.stopPropagation();let t=e.deltaY,o=Date.now(),n=o-v.current;if(n>0){let e=Math.abs(t)/Math.max(n,16)*1e3;C.current.push(e),C.current.length>5&&C.current.shift()}if(v.current=o,!f.current)return void a(t);let{clientHeight:r,clientWidth:s,scrollHeight:l,scrollLeft:d,scrollTop:c,scrollWidth:p}=i,g=e.deltaX;(g>0&&d<p-s-1||g<0&&d>0)&&(i.scrollLeft+=g);let m=t>0,u=t<0;m&&c<l-r-1||u&&c>0?i.scrollTop+=t:0!==t&&a(t)},E=()=>{if(x.current)return;let e=Date.now(),t=window.scrollY,i=b.current,o=e-i.time;if(o>0){let e=Math.abs(t-i.y);w.current.push(e/o*1e3),w.current.length>5&&w.current.shift()}b.current={y:t,time:e}};return i.addEventListener("mouseenter",l),i.addEventListener("mouseleave",c),i.addEventListener("mousemove",I),i.addEventListener("wheel",B,{passive:!1}),window.addEventListener("scroll",E,{passive:!0}),()=>{r(),i.removeEventListener("mouseenter",l),i.removeEventListener("mouseleave",c),i.removeEventListener("mousemove",I),i.removeEventListener("wheel",B),window.removeEventListener("scroll",E)}},[e,t,o]),{isHovering:l,isPulsing:c,isUnlocked:a,progress:r}}(l);return(0,t.jsxs)(c,{children:[(0,t.jsx)(A,{ref:l,$overflowX:a,className:o,children:e}),(0,t.jsx)(p,{$isPulsing:g}),(0,t.jsx)(s,{isHovering:d,isUnlocked:m,progress:u})]})});d.displayName="IntentScrollableWithIntent";let c=a.styled.div.withConfig({displayName:"IntentScrollable2__Wrapper",componentId:"sc-7516eae0-0"})`
  position: relative;
  height: 100%;
  width: 100%;
  min-height: 0;
  min-width: 0;
`,p=a.styled.div.withConfig({displayName:"IntentScrollable2__PulseOverlay",componentId:"sc-7516eae0-1"})`
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
`,A=a.styled.div.withConfig({displayName:"IntentScrollable2__ScrollContainer",componentId:"sc-7516eae0-2"})`
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
`;e.s(["IntentScrollable2",0,l],392944)},194547,e=>{"use strict";var t=e.i(997053),i=e.i(739876);let o=t.default.div.withConfig({displayName:"InteractiveFeatureWrapper.styles__WindowTitle",componentId:"sc-b5f0eae9-0"})`
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
    background-image: ${({theme:e})=>(0,i.backgroundImageHatched)(e)};
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
`,n=t.default.div.withConfig({displayName:"InteractiveFeatureWrapper.styles__DashedLine",componentId:"sc-b5f0eae9-2"})`
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
`,r=t.default.div.withConfig({displayName:"InteractiveFeatureWrapper.styles__Wrapper",componentId:"sc-b5f0eae9-3"})`
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
`,s=(0,t.default)(r).withConfig({displayName:"InteractiveFeatureWrapper.styles__OuterBrowserWindow",componentId:"sc-b5f0eae9-4"})`
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
`,d=t.default.div.withConfig({displayName:"InteractiveFeatureWrapper.styles__BrowserWindowButtons",componentId:"sc-b5f0eae9-6"})`
  display: flex;
  padding: 1px 2px;
  align-items: center;
  gap: 5px;
`,c=t.default.div.withConfig({displayName:"InteractiveFeatureWrapper.styles__TrafficLight",componentId:"sc-b5f0eae9-7"})`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: ${({theme:e})=>e.appUI.outerBrowserWindow.trafficLightButton.border};
  background: ${({theme:e})=>e.appUI.outerBrowserWindow.trafficLightButton.background};
`,p=t.default.div.withConfig({displayName:"InteractiveFeatureWrapper.styles__BrowserWindowTitle",componentId:"sc-b5f0eae9-8"})`
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
`,A=(0,t.default)(r).withConfig({displayName:"InteractiveFeatureWrapper.styles__InnerBrowserWindow",componentId:"sc-b5f0eae9-9"})`
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
`;e.s(["BrowserWindowButtons",0,d,"BrowserWindowTitle",0,p,"BrowserWindowToolbar",0,l,"DashedLine",0,n,"DashedLines",0,a,"InnerBrowserWindow",0,A,"OuterBrowserWindow",0,s,"TrafficLight",0,c,"WindowTitle",0,o,"Wrapper",0,r])},482847,e=>{"use strict";var t=e.i(843476);e.s(["Cursor8BitArrow",0,function({outlineColor:e,shadowColor:i}){let o=[[1,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,0,0,0,0,0,0,0,0,0,0,0],[1,2,1,0,0,0,0,0,0,0,0,0,0],[1,2,2,1,3,0,0,0,0,0,0,0,0],[1,2,2,2,1,3,0,0,0,0,0,0,0],[1,2,2,2,2,1,3,0,0,0,0,0,0],[1,2,2,2,2,2,1,3,0,0,0,0,0],[1,2,2,2,2,2,2,1,3,0,0,0,0],[1,2,2,2,2,2,2,2,1,3,0,0,0],[1,2,2,2,2,2,2,2,2,1,3,0,0],[1,2,2,2,2,2,1,1,1,1,1,3,0],[1,2,2,1,2,2,1,3,3,3,3,3,0],[1,2,1,3,1,2,2,1,3,0,0,0,0],[1,1,3,0,1,2,2,1,3,0,0,0,0],[1,3,0,0,3,1,2,2,1,3,0,0,0],[3,0,0,0,0,1,2,2,1,3,0,0,0],[0,0,0,0,0,3,1,1,3,0,0,0,0],[0,0,0,0,0,0,3,3,0,0,0,0,0]],a=+o[0].length,n=+o.length;return(0,t.jsx)("svg",{height:n,style:{imageRendering:"pixelated"},viewBox:`0 0 ${a} ${n}`,width:a,children:o.map((o,a)=>o.map((o,n)=>{let r;return 0===o?null:(r=1===o?e:2===o?"#FFFFFF":i,(0,t.jsx)("rect",{fill:r,height:1,width:1,x:+n,y:+a},`${n}-${a}`))}))})},"Cursor8BitPointer",0,function({outlineColor:e,shadowColor:i}){let o=[[0,0,0,0,0,1,1,0,0,0,0,0,0,0],[0,0,0,0,1,2,2,1,3,0,0,0,0,0],[0,0,0,0,1,2,2,1,3,0,0,0,0,0],[0,0,0,0,1,2,2,1,3,0,0,0,0,0],[0,0,0,0,1,2,2,1,1,1,0,0,0,0],[0,0,0,0,1,2,2,1,2,2,1,3,0,0],[0,1,1,0,1,2,2,1,2,2,1,1,3,0],[1,2,2,1,1,2,2,1,2,2,1,2,1,3],[1,2,2,2,1,2,2,2,2,2,2,2,1,3],[3,1,2,2,2,2,2,2,2,2,2,2,1,3],[0,3,1,2,2,2,2,2,2,2,2,2,1,3],[0,0,1,2,2,2,2,2,2,2,2,1,3,0],[0,0,3,1,2,2,2,2,2,2,2,1,3,0],[0,0,0,1,2,2,2,2,2,2,1,3,0,0],[0,0,0,3,1,2,2,2,2,2,1,3,0,0],[0,0,0,0,1,2,2,2,2,1,3,0,0,0],[0,0,0,0,3,1,1,1,1,3,0,0,0,0],[0,0,0,0,0,3,3,3,3,0,0,0,0,0]],a=+o[0].length,n=+o.length;return(0,t.jsx)("svg",{height:n,style:{imageRendering:"pixelated"},viewBox:`0 0 ${a} ${n}`,width:a,children:o.map((o,a)=>o.map((o,n)=>{let r;return 0===o?null:(r=1===o?e:2===o?"#FFFFFF":i,(0,t.jsx)("rect",{fill:r,height:1,width:1,x:+n,y:+a},`${n}-${a}`))}))})},"UnlockProgressIndicator",0,function({filledColor:e,unfilledColor:i,progress:o}){let a=Math.floor(10*o);return(0,t.jsxs)("svg",{height:20,style:{position:"absolute",left:14,top:2},viewBox:"0 0 50 20",width:50,children:[(0,t.jsx)("rect",{fill:i,height:20,rx:1,width:6,x:0,y:0}),a>0&&(0,t.jsx)("rect",{fill:e,height:2*a,rx:1,width:6,x:0,y:(10-a)*2}),(0,t.jsx)("text",{fill:e,fontFamily:"system-ui, sans-serif",fontSize:7,fontWeight:600,x:10,y:9,children:"ENABLE"}),(0,t.jsx)("text",{fill:e,fontFamily:"system-ui, sans-serif",fontSize:7,fontWeight:600,x:10,y:17,children:"SCROLL"})]})}])},238108,e=>{"use strict";var t=e.i(843476),i=e.i(193594),o=e.i(997053);let a=o.styled.div.withConfig({displayName:"HexButton__Wrapper",componentId:"sc-2bf5efa3-0"})`
  flex: none;
  display: inline-flex;
  align-items: center;
  border-radius: ${({theme:e})=>e.appUI.borderRadius};
  font-size: ${({theme:e})=>e.appUI.fontSize.DEFAULT};
  gap: 4px;
  justify-content: center;
  padding: 0 8px;
  height: 24px;
  line-height: 15px;
  border: 1px solid ${({theme:e})=>e.appUI.borderColor.MUTED};
  font-family: ${({theme:e})=>e.appUI.fontFamily.DEFAULT};
  color: ${({theme:e})=>e.appUI.fontColor.DEFAULT};
  cursor: pointer;
  transition:
    border-color
      ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`},
    background-color
      ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`};

  [data-icon] {
    color: ${({theme:e})=>e.appUI.fontColor.MUTED};
  }

  ${({$variant:e})=>"default"===e&&o.css`
      &:hover {
        border: 1px solid ${({theme:e})=>e.appUI.borderColor.DEFAULT};
      }
    `}

  ${({$variant:e})=>"minimal"===e&&o.css`
      border: none;
      color: ${({theme:e})=>e.appUI.fontColor.MUTED};

      &:hover {
        background-color: ${({theme:e})=>e.appUI.backgroundColor.MUTED};
      }
    `}

  ${({$active:e})=>e&&o.css`
      background-color: ${({theme:e})=>(0,i.rgba)(e.appUI.intent.PRIMARY,.07)};
      color: ${({theme:e})=>e.appUI.intent.PRIMARY};

      [data-icon] {
        color: ${({theme:e})=>e.appUI.intent.PRIMARY};
      }
    `}

  ${({$iconOnly:e})=>e&&o.css`
      padding: 0;
      width: 24px;
    `}
`;e.s(["HexButton",0,({onClick:e,icon:i,iconPos:o="left",text:n,variant:r="default",active:s=!1,className:l})=>(0,t.jsxs)(a,{$active:s,$iconOnly:!n&&void 0!==i,$variant:r,className:l,onClick:e,children:[i&&"left"===o&&i,n&&(0,t.jsx)("span",{children:n}),i&&"right"===o&&i]})])},674216,e=>{"use strict";var t=e.i(843476),i=e.i(997053),o=e.i(739876),a=e.i(581444),n=e.i(360571),r=e.i(998990);let s=(0,i.default)(a.LayoutSubgrid).withConfig({displayName:"CustomerStoriesTwoUp__Section",componentId:"sc-3a58b311-0"})`
  position: relative;
  background-color: ${({theme:e})=>e.palette.bg300};
  border-top: 1px solid ${({theme:e})=>(0,o.gridColorSelector)(e,"major")};

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background-image: ${({theme:e})=>e.paperTextureCssVars.img};
    background-size: ${({theme:e})=>e.paperTextureCssVars.size};
    mix-blend-mode: ${({theme:e})=>e.paperTextureCssVars.mixBlendMode};
    opacity: ${({theme:e})=>e.paperTextureCssVars.opacity};
    pointer-events: none;
  }
`,l=(0,i.default)(a.LayoutSubgrid).withConfig({displayName:"CustomerStoriesTwoUp__CustomerStoriesGrid",componentId:"sc-3a58b311-1"})`
  display: grid;
  grid-template-columns: repeat(2, 1fr) !important;

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    grid-template-columns: 1fr !important;
  }
`,d=i.default.div.withConfig({displayName:"CustomerStoriesTwoUp__CustomerStory",componentId:"sc-3a58b311-2"})`
  grid-column: auto !important;
  display: flex;
  flex-direction: column;
  padding: 12px 0;

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    &:not(:last-child) {
      border-bottom: 1px solid
        ${({theme:e})=>(0,o.gridColorSelector)(e,"major")};
    }
  }
`,c=i.default.div.withConfig({displayName:"CustomerStoriesTwoUp__QuoteWrapper",componentId:"sc-3a58b311-3"})`
  padding: 24px ${(0,n.generateFluidPxScale)(12,32)} 40px
    ${(0,n.generateFluidPxScale)(12,32)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  place-content: center;
  flex-grow: 1;
`,p=i.default.q.withConfig({displayName:"CustomerStoriesTwoUp__Quote",componentId:"sc-3a58b311-4"})`
  text-align: center;
  max-width: 36rem;
  text-wrap: balance;
  margin-top: 12px;
`,A=i.default.em.withConfig({displayName:"CustomerStoriesTwoUp__Em",componentId:"sc-3a58b311-5"})`
  font-weight: ${({theme:e})=>e.fontWeight.BOLD};
  color: ${({theme:e})=>e.fontColor.LOUD};
`,g=i.default.div.withConfig({displayName:"CustomerStoriesTwoUp__Attribution",componentId:"sc-3a58b311-6"})`
  display: flex;
  justify-content: center;
  padding: 0 32px;
`,m=i.default.div.withConfig({displayName:"CustomerStoriesTwoUp__Author",componentId:"sc-3a58b311-7"})`
  display: flex;
  align-items: center;
  gap: 12px;
`,u=i.default.div.withConfig({displayName:"CustomerStoriesTwoUp__Info",componentId:"sc-3a58b311-8"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;

  p {
    margin: 0;
    text-align: center;
  }

  p:first-child {
    color: ${({theme:e})=>e.fontColor.LOUD};
  }

  p:last-child {
    color: ${({theme:e})=>e.fontColor.MUTED};
  }
`,h=i.default.img.withConfig({displayName:"CustomerStoriesTwoUp__Logo",componentId:"sc-3a58b311-9"})`
  margin: 0 auto 0 auto;
  height: 52px;
  ${({theme:e})=>e.customerLogoColor??"filter: brightness(0) invert(1);"};
`,f=(0,i.default)(o.GridRule).withConfig({displayName:"CustomerStoriesTwoUp__StyledGridRule",componentId:"sc-3a58b311-10"})`
  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    display: none;
  }
`;e.s(["Attribution",0,g,"Author",0,m,"CustomerStoriesGrid",0,l,"CustomerStoriesTwoUp",0,function(){return(0,t.jsxs)(s,{children:[(0,t.jsx)(a.LayoutSubgrid,{"data-content-grid":!0,"data-pile":!0,children:(0,t.jsx)(f,{$column:6})}),(0,t.jsxs)(l,{"data-content-grid":!0,"data-pile":!0,children:[(0,t.jsx)(d,{children:(0,t.jsxs)(c,{children:[(0,t.jsx)(h,{src:r.CUSTOMER_LOGOS_HOSTED.Mercor}),(0,t.jsxs)(p,{className:"text-l",children:['"If we didn’t have Hex,'," ",(0,t.jsx)(A,{children:"we might’ve left more than $100M on the table."}),' That might even be an underestimate."']}),(0,t.jsx)(g,{children:(0,t.jsx)(m,{children:(0,t.jsxs)(u,{children:[(0,t.jsx)("p",{className:"text-base",children:"Dhaval P."}),(0,t.jsx)("p",{className:"annotation",children:"Account Lead"})]})})})]})}),(0,t.jsx)(d,{children:(0,t.jsxs)(c,{children:[(0,t.jsx)(h,{src:r.CUSTOMER_LOGOS_HOSTED.Algolia}),(0,t.jsxs)(p,{className:"text-l",children:['"AI can do almost everything for you in Hex. I use it to scaffold entire apps and help me debug SQL queries.'," ",(0,t.jsx)(A,{children:"It makes me 10x faster."}),'"']}),(0,t.jsx)(g,{children:(0,t.jsx)(m,{children:(0,t.jsxs)(u,{children:[(0,t.jsx)("p",{className:"text-base",children:"Tom C."}),(0,t.jsx)("p",{className:"annotation",children:"Principal Engineer"})]})})})]})})]})]})},"CustomerStory",0,d,"Em",0,A,"Info",0,u,"Logo",0,h,"Quote",0,p,"QuoteWrapper",0,c,"Section",0,s,"StyledGridRule",0,f])},939808,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(997053),a=e.i(430388),n=e.i(785191),r=e.i(650617);let s=i.memo(({logoPath:e,customerName:i,quote:o,authorAvatarPath:n,author:s,authorTitle:m})=>(0,t.jsx)(l,{children:(0,t.jsxs)(d,{children:[e&&(0,t.jsx)(A,{children:"string"==typeof e?(0,t.jsx)("img",{alt:i||"customer logo",loading:"lazy",src:e}):e}),(0,t.jsxs)(c,{children:[(0,t.jsx)(p,{children:(0,t.jsx)(a.QuoteIcon,{})}),(0,t.jsxs)("blockquote",{children:['"',o,"”"]})]}),s&&(0,t.jsxs)(g,{children:[n&&(0,t.jsx)("img",{alt:s,loading:"lazy",src:n}),(0,t.jsxs)(r.Text,{children:[s,(m||i)&&(0,t.jsxs)("span",{children:["  ",m&&`${m} `,i&&(0,t.jsxs)(t.Fragment,{children:["at ",i]})]})]})]})]})}));s.displayName="CustomerQuoteCard";let l=(0,o.default)(n.Card).attrs({effect:"glass"}).withConfig({displayName:"CustomerQuoteCard__Wrapper",componentId:"sc-5e534bf5-0"})`
  && {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    padding: 38px 45px;
    height: 100%;
  }
`,d=o.default.div.withConfig({displayName:"CustomerQuoteCard__Quote",componentId:"sc-5e534bf5-1"})`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  gap: 24px;
  line-height: 1.35;
  opacity: 1;
  width: 100%;
`,c=o.default.div.withConfig({displayName:"CustomerQuoteCard__QuoteTextWrapper",componentId:"sc-5e534bf5-2"})`
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
`,p=o.default.div.withConfig({displayName:"CustomerQuoteCard__QuoteLine",componentId:"sc-5e534bf5-3"})`
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
`,A=o.default.div.withConfig({displayName:"CustomerQuoteCard__Logo",componentId:"sc-5e534bf5-4"})`
  display: flex;
  align-items: start;

  img {
    max-height: 45px;
    object-fit: contain;
    filter: ${({theme:e})=>"dark"===e.name?"brightness(0) invert(1)":"invert(100%) sepia(0%) saturate(1%) hue-rotate(339deg) brightness(100%) contrast(101%)"};
  }
`,g=o.default.div.withConfig({displayName:"CustomerQuoteCard__Author",componentId:"sc-5e534bf5-5"})`
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
`;e.s(["CustomerQuoteCard",0,s])},21066,e=>{"use strict";var t=e.i(843476),i=e.i(997053),o=e.i(809132);let a={dark:"/images/home-2025/textures/noise-rose-128x128.png",light:"/images/home-2025/textures/noise-eggplant-128x128.png",pink:"/images/home-2025/textures/noise-eggplant-128x128.png"},n={small:256,medium:512,large:1024},r={small:"1s",medium:"500ms",large:"50ms"},s=i.default.div.withConfig({displayName:"PerlinNoise__NoiseTexture",componentId:"sc-3b6e388f-0"})`
  position: absolute;
  inset: 0;
  background-image: ${({theme:e})=>`url(${a[e.name]})`};
  background-size: ${({$size:e})=>`${n[e]}px ${n[e]}px`};
  opacity: 0;
  transition: opacity;
  transition-duration: var(--hover-transition-duration);
  transition-timing-function: var(--hover-transition-timing-function);

  animation: noise 8s linear infinite;
  animation-play-state: paused;

  @keyframes noise {
    from {
      background-position: ${({$size:e})=>`-${n[e]}px -${n[e]}px`};
    }
    to {
      background-position: 0px 0px;
    }
  }
`,l=i.css`
  ${s} {
    opacity: 0.24;
    animation-play-state: running;
  }
`,d=i.default.div.withConfig({displayName:"PerlinNoise__Wrapper",componentId:"sc-3b6e388f-1"})`
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
    ${l}
  }

  @media (hover: hover) {
    &:hover {
      ${l}
    }
  }

  ${({$isRunning:e})=>e&&i.css`
      ${l}
    `}

  @media (prefers-reduced-motion: reduce) {
    ${s} {
      animation: none;
      transition: none;
    }
  }
`;e.s(["PerlinNoise",0,function({className:e,isRunning:i=!1,size:a="medium"}){return(0,t.jsx)(d,{$isRunning:i,$size:a,className:e,children:(0,t.jsx)(o.DotGridMask,{children:(0,t.jsx)(s,{$size:a})})})}])},253928,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(846932),a=e.i(997053),n=e.i(991709),r=e.i(939808),s=e.i(657688),l=e.i(637804),d=e.i(430388),c=e.i(258591),p=e.i(650617);let A=a.default.div.withConfig({displayName:"G2SocialProofCard__Wrapper",componentId:"sc-95f60257-0"})`
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
`,g=a.default.div.withConfig({displayName:"G2SocialProofCard__Top",componentId:"sc-95f60257-1"})`
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
`,m=a.default.div.withConfig({displayName:"G2SocialProofCard__Bottom",componentId:"sc-95f60257-2"})`
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 4px;
  }
`,u=a.default.div.withConfig({displayName:"G2SocialProofCard__CardCopy",componentId:"sc-95f60257-3"})`
  display: flex;

  img {
    max-height: 35px;
    object-fit: contain;
  }
`,h=a.default.span.withConfig({displayName:"G2SocialProofCard__CheckThemOutLinkInline",componentId:"sc-95f60257-4"})`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`,f=i.memo(({trackingLabel:e})=>(0,t.jsxs)(A,{children:[(0,t.jsx)(g,{children:(0,t.jsx)(s.default,{alt:"Three G2 badges received by Hex for High Performer, Best Support, and Momentum Leader.",height:627,src:"/images/g2-awards.svg",style:{height:"auto"},width:838})}),(0,t.jsxs)(m,{children:[(0,t.jsx)(c.Heading,{renderAs:"h3",children:"Users love Hex"}),(0,t.jsx)(u,{children:(0,t.jsxs)(p.Text,{children:["Rated on G2 as an industry leader based on customer reviews."," ",(0,t.jsx)(l.SiteLink,{href:"https://www.g2.com/products/hex-technologies/reviews",trackingLabel:e,children:(0,t.jsxs)(h,{children:["Check them out",(0,t.jsx)(d.ArrowRightIcon,{})]})})]})})]})]}));f.displayName="G2SocialProofCard";let x=i.memo(({includeG2Proof:e=!1,customerQuotes:i,className:o,g2TrackingLabel:a})=>(0,t.jsx)(w,{...n.ANIMATIONS.SimpleFadeIn,className:o,children:(0,t.jsxs)(b,{children:[e?(0,t.jsx)(f,{trackingLabel:a}):null,i.map((e,i)=>(0,t.jsx)(r.CustomerQuoteCard,{...e},i))]})}));x.displayName="SocialTout";let w=(0,a.default)(o.motion.div).withConfig({displayName:"SocialTout__Wrapper",componentId:"sc-b502cc5e-0"})`
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
`,b=a.default.div.withConfig({displayName:"SocialTout__Inner",componentId:"sc-b502cc5e-1"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  margin: 0 auto;
  max-width: ${({theme:e})=>e.maxWidth.PAGE};

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    flex-direction: column;
  }
`;e.s(["SocialTout",0,x],253928)},79719,e=>{e.v({attribution:"InlineQuote-module__ju4aKG__attribution",attributionStacked:"InlineQuote-module__ju4aKG__attributionStacked",author:"InlineQuote-module__ju4aKG__author",authorName:"InlineQuote-module__ju4aKG__authorName",authorStacked:"InlineQuote-module__ju4aKG__authorStacked",authorTitle:"InlineQuote-module__ju4aKG__authorTitle",body:"InlineQuote-module__ju4aKG__body",icon:"InlineQuote-module__ju4aKG__icon",quote:"InlineQuote-module__ju4aKG__quote",text:"InlineQuote-module__ju4aKG__text"})},144663,e=>{"use strict";var t=e.i(843476),i=e.i(343794),o=e.i(650617),a=e.i(430388);e.i(726497);var n=e.i(778888),r=e.i(79719);e.s(["InlineQuote",0,function({authorName:e,authorTitle:s,avatar:l,className:d,logo:c,quoteText:p,stackedAuthor:A,...g}){let m=!!e||!!s,u=!!c||!!l||m;return(0,t.jsxs)("figure",{className:(0,i.default)(r.default.quote,d),...g,children:[(0,t.jsxs)("blockquote",{className:r.default.body,children:[(0,t.jsx)("div",{className:r.default.icon,children:(0,t.jsx)(a.QuoteIcon,{color:"var(--fontColorMUTED)"})}),(0,t.jsxs)(o.Text,{className:r.default.text,color:"loud",size:"medium",children:['"',p,'"']})]}),u?(0,t.jsxs)("figcaption",{className:(0,i.default)(r.default.attribution,A?r.default.attributionStacked:null),children:[c,l,m?(0,t.jsxs)("p",{className:(0,i.default)(n.textStyles.annotation,r.default.author,A?r.default.authorStacked:null),children:[e?(0,t.jsx)("span",{className:r.default.authorName,children:e}):null,e&&s?" ":null,s?(0,t.jsx)("span",{className:r.default.authorTitle,children:s}):null]}):null]}):null]})}])},33351,762963,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(997053);e.s(["CARTESIAN_GRID_CELL_SIZE",0,32],762963);let a=o.default.div.withConfig({displayName:"CartesianGrid__UnitGrid",componentId:"sc-18d08754-0"})`
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
`;e.s(["CartesianGrid",0,function({fadeDirection:e="in",maskSize:o=32,className:s}){let l=(0,i.useRef)(null);return(0,t.jsx)(a,{ref:l,$maskSize:o,className:s,children:(0,t.jsx)(r,{children:(0,t.jsx)(n,{$fadeDirection:e})})})}],33351)},998990,e=>{"use strict";e.s(["CUSTOMER_LOGOS_HOSTED",0,{Algolia:"https://cdn.sanity.io/images/e92memrj/production/643fb40019cd60627bf6f354c5bffdfd66017ce9-97x51.svg",Brex:"https://cdn.sanity.io/images/e92memrj/production/797daac5d8ce0c8f853f32db64dddf44234caf15-110x50.svg",Candidly:"https://cdn.sanity.io/images/e92memrj/production/5fb6f6dd0ff002808f2382c81a66cd28410a4ac9-166x50.svg",Chime:"https://cdn.sanity.io/images/e92memrj/production/20bf8a6fe0ca725b28527c135c22f237938f5ef5-94x50.svg",ClickUp:"https://cdn.sanity.io/images/e92memrj/production/8ec37f2330ffd132be12ea66bad243453af0d047-119x50.svg",CustomerIO:"https://cdn.sanity.io/images/e92memrj/production/fc46557c4677964c57351c9affa635d558fe8cd8-170x40.svg",Doximity:"https://cdn.sanity.io/images/e92memrj/production/17b8982db750bfc51b7aa08783c5e1f8d3432d63-125x50.svg",Figma:"https://cdn.sanity.io/images/e92memrj/production/f7df402cfb3dac549c3f877c09425534abc7650b-97x50.svg",Huckberry:"https://cdn.sanity.io/images/e92memrj/production/8194d2de15059f3f69d4fb8dbc03b2f7bfb04af4-134x50.svg",InfiniteLambda:"https://cdn.sanity.io/images/e92memrj/production/638503884c2ca511d9816fc46d5d13f05551bd26-110x50.svg",Inventa:"https://cdn.sanity.io/images/e92memrj/production/2b33cd7f123f50efbd8ea42ea9235382e207633e-132x50.svg",LangChain:"https://cdn.sanity.io/images/e92memrj/production/0b907ba3d40fe1012f1118d105620c7779a49949-135x50.svg",Lovable:"https://cdn.sanity.io/images/e92memrj/production/d063f2a64adcd7869bc2fc81dbc971825be8b951-137x50.svg",MedScout:"https://cdn.sanity.io/images/e92memrj/production/ab190c6c708ad1b738c3dd93e3c9d64718788935-168x50.svg",Mercor:"https://cdn.sanity.io/images/e92memrj/production/92b9cd2232a417db021ffe38f96d45a896e85cba-131x50.svg",NeoFinancial:"https://cdn.sanity.io/images/e92memrj/production/ba0c09ff2b2ba796246ce69e4e971751bccaae37-76x50.svg",Notion:"https://cdn.sanity.io/images/e92memrj/production/6f211c674b14be69b85497264b1d654b138dce01-39x50.svg",PandaDoc:"https://cdn.sanity.io/images/e92memrj/production/728e1e88c0a31f218d18971d3e9da2de81bad906-120x50.svg",ProductHunt:"https://cdn.sanity.io/images/e92memrj/production/0334d3583cd66c0361cd0c3b1bd28d92307cf01a-126x50.svg",Ramp:"https://cdn.sanity.io/images/e92memrj/production/892932e7f3dc3c66d3ae4a16e8bc51e37b7f59f4-120x50.svg",StubHub:"https://cdn.sanity.io/images/e92memrj/production/84cee8330df6df867d752ef0336d987b73845add-81x50.svg",WeightsAndBiases:"https://cdn.sanity.io/images/e92memrj/production/1eaf4b79b17b9f39d479a6cca9f8b60e06105d44-169x50.svg",Zoe:"https://cdn.sanity.io/images/e92memrj/production/ac4cbae3f4b1d599f5d51d290bd183be0b16253a-114x50.svg"}])}]);