(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,552589,e=>{"use strict";var t,i,a,r,n,o,s,l,d,c,p,u,m,h,f,g,x,b,v,y,w,_,C,k,j,E,M,$,z,H,I,S,N,A,P,T,F,B,L,O,R,W,U,V,D,G,Q,q,Y,X,K,Z,J,ee,et,ei,ea,er,en,eo,es,el,ed,ec,ep,eu,em=e.i(843476),eh=e.i(558202),ef=e.i(237673),eg=e.i(480985),ex=e.i(613938),eb=e.i(598043);let ev=[{question:"What can I actually use as context? Can I connect existing sources?",answer:(0,em.jsxs)(em.Fragment,{children:[(0,em.jsx)("div",{children:"Almost anything you already have, and you don't have to set it all up first. Context in Hex layers in over time instead of arriving as one big modeling project. Start with what exists, add more as you go:"}),(0,em.jsxs)("ul",{children:[(0,em.jsx)("li",{children:"Table metadata: column names, types, and descriptions the agent reads to understand your schema without you modeling every dimension first."}),(0,em.jsx)("li",{children:"Endorsed tables: mark certain tables as the canonical, trusted source, and the agent prefers them when several tables could answer a question."}),(0,em.jsx)("li",{children:"Reference repositories: connect a Git repo so the agent can read your code to clarify things like metric logic and table structures."}),(0,em.jsx)("li",{children:"Connected apps via MCP: pull context from Notion, Linear, and any MCP server, so answers reflect what's in your tickets, docs, and planning notes, not just your data."}),(0,em.jsx)("li",{children:"Guides: markdown files about your data and business. A workspace context file is read in every conversation, while a guide library holds topic-specific files the agent pulls in only when relevant."}),(0,em.jsx)("li",{children:'Semantic models: shared definitions of your metrics and dimensions, like what "win rate" officially means, so answers stay consistent.'}),(0,em.jsx)("li",{children:"Your published work: every app and dashboard published in Hex feeds the agent, so the logic, definitions, and queries your team already wrote compound for the next question."})]}),(0,em.jsx)("div",{children:"Each of these is an independent form of context that Hex builds a shared understanding of your business. Most teams start simple with table metadata and endorsements, see where answers fall short, and then layer in more prescriptive forms of context like guides or semantic models where it makes sense."})]})},{question:"Do I have to build my context in Hex? Or can it be synced in?",answer:(0,em.jsxs)(em.Fragment,{children:[(0,em.jsx)("div",{children:"No, you can build and manage context inside or outside of Hex. Where you centralize your source of truth is up to you. Context is intentionally set up to let you move it between Hex and wherever else you manage it:"}),(0,em.jsxs)("ul",{children:[(0,em.jsx)("li",{children:"Guides can live as .md files in a repo and sync to Hex automatically with a GitHub Action, so the repo stays the source of truth."}),(0,em.jsx)("li",{children:"Sync in semantic models from dbt MetricFlow, Cube, or Snowflake Semantic Views, and the definitions stay versioned in your stack."})]}),(0,em.jsx)("div",{children:"You can author guides and semantic models directly in Hex too. Either way, your context stays portable, so you're never locked in and never rebuilding logic if your stack changes."})]})},{question:"How does Hex decide which context to use? Can I see what Hex used as context?",answer:(0,em.jsxs)(em.Fragment,{children:[(0,em.jsx)("div",{children:"The Hex agent is built to pull the right context when it's relevant, whether that's markdown, code, yaml, metadata, or anything else. It uses indicators like the descriptions of guides and repos to judge relevance."}),(0,em.jsx)("div",{children:"For every interaction, you can audit the agent's reasoning and the context it used from Context Studio. If the agent is unsure or missing something, it raises a warning. Admins and Managers can review individual conversations, common topics, warnings, and see which context sources shaped a response."})]})},{question:"Do I need to build semantic models for accurate and consistent answers?",answer:(0,em.jsxs)(em.Fragment,{children:[(0,em.jsx)("div",{children:"Not necessarily. Semantic models are one way to give the agent context around specific metrics or definitions, but they are inherently rigid and time intensive to maintain. In Hex, build them where a shared, locked definition matters, and skip them where a guide or an endorsed table is sufficient guidance for the agent to answer a question."}),(0,em.jsxs)("ul",{children:[(0,em.jsx)("li",{children:"Where models earn their keep: a metric like ARR that has to be calculated the same way every time, everywhere it's asked."}),(0,em.jsx)("li",{children:"Where they don't: nuances about your business, like when your fiscal year starts or what a specific product term means inside your company. No need to build that into a model when it can be captured quickly in a markdown doc."})]}),(0,em.jsx)("div",{children:"If you do choose to build semantic models, you can sync them from dbt MetricFlow, Cube, or Snowflake, or build them directly in Hex."})]})},{question:"How much work is it to maintain context as our business changes?",answer:(0,em.jsxs)(em.Fragment,{children:[(0,em.jsx)("div",{children:"Context drifts as your business evolves, definitions change, and new domains emerge. Hex's Context Engine is intentionally built to catch and fix these gaps for you instead of manually sifting through every conversation to maintain yourself."}),(0,em.jsxs)("ul",{children:[(0,em.jsx)("li",{children:"The Review Agent watches real interactions and flags where context is missing or thin, so you're not auditing every answer yourself."}),(0,em.jsx)("li",{children:"Repeated warnings roll into concrete suggestions, so high-impact improvements come to you already scoped."}),(0,em.jsx)("li",{children:"Your published work compounds: every app and dashboard published feeds the agent, so a lot of context accrues as a byproduct of normal work, not as separate upkeep."})]}),(0,em.jsx)("div",{children:"The system gets sharper the more your team uses it. Every question asked and answer published makes the next answer better, so accuracy compounds over time instead of decaying. You stay in control of what changes; the agent just makes sure the work keeps building on itself instead of eroding."})]})}];ev.map(({question:e,answer:t})=>({question:e,answer:(0,eb.reactNodeToPlainTextNormalized)(t)}));var ey=e.i(271645),ew=e.i(193594),e_=e.i(997053),eC=e.i(360571),ek=e.i(637804);e.i(409027);var ej=e.i(747741);let eE=e_.css`
  background: linear-gradient(
      155deg,
      rgba(0 0 0 / 0),
      rgba(0 0 0 / 0) 6%,
      rgba(0 0 0 / 0.24)
    ),
    ${({theme:e})=>e.palette.fgA700};
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);

  box-shadow: 0 4px 8px -1px rgba(0 0 0 / 0.64);
  transition: filter 0.3s;

  &:hover {
    filter: brightness(1.13);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: ${({theme:e})=>{let t=e.palette.fgA1000,i=e.palette.fgA800;return`linear-gradient(155deg, rgba(255 255 255 / 0.16), ${t} 15%, ${i} 25%)`}};
    border: 1px solid transparent;

    mask:
      linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px)
        padding-box exclude,
      linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px);
  }
`,eM=e_.css`
  position: relative;
  display: flex;
  align-items: center;
  padding: 14px 22px 14px 14px;
  padding: ${(0,eC.generateFluidPxScale)(8,14)} ${(0,eC.generateFluidPxScale)(18,22)}
    ${(0,eC.generateFluidPxScale)(8,14)} ${(0,eC.generateFluidPxScale)(6,14)};
  gap: 16px;
  color: ${({theme:e})=>e.fontColor.DEFAULT};
  font-weight: ${({theme:e})=>e.fontWeight.NORMAL};
  white-space: nowrap;

  border: 0;
  border-radius: 1px;
  font-size: ${(0,ej.generateFluidFontSize)(16,20,{minWidth:800,maxWidth:1708})};
  font-weight: ${({theme:e})=>e.fontWeight.NORMAL};
  font-family: inherit;
  user-select: none;
  border: 1px solid transparent;
  ${({theme:e})=>e.popover}

  &[data-no-icon] {
    padding: ${(0,eC.generateFluidPxScale)(8,14)} ${(0,eC.generateFluidPxScale)(18,22)};
  }

  ${({theme:e})=>e.buttonLoudStyles};

  &::after {
    content: '';
    pointer-events: none;
    position: absolute;
    inset: 0;
    border-radius: inherit;
    z-index: 1;
    border: 1px solid transparent;
    opacity: 0.2;

    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    transition: ${({theme:e})=>`opacity ${e.animation.DURATION} ${e.animation.EASING}`};
  }

  &::before {
    border-radius: inherit;
  }

  &:hover::after {
    opacity: 0.3;
  }

  &:active::after {
    opacity: 0.6;
  }

  background: ${({theme:e})=>`linear-gradient(
      to right,
      ${e.backgroundColor},
      ${e.backgroundColor}
    ),
    linear-gradient(
      45deg,
      ${e.highlightColor},
      ${e.colors.LIGHT_PURPLE}
    )`};
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
`,e$=e_.css`
  position: relative;
  display: flex;
  flex-grow: 1;
  align-items: center;
  padding: ${(0,eC.generateFluidPxScale)(8,14)} ${(0,eC.generateFluidPxScale)(18,22)};
  gap: 16px;
  white-space: nowrap;

  border: 1px dashed ${({theme:e})=>e.palette.fg1100};
  border-radius: 1px;
  font-size: ${(0,ej.generateFluidFontSize)(16,20,{minWidth:800,maxWidth:1708})};
  font-weight: ${({theme:e})=>e.fontWeight.NORMAL};
  font-family: inherit;
  letter-spacing: 0.25px;
  user-select: none;

  background: ${({theme:e})=>e.palette.bg300};
  color: ${({theme:e})=>e.palette.fg1200};

  box-shadow: ${({theme:e})=>`0 4px 8px -1px rgba(0 0 0 / 0.64), 0 1px 4px 0 ${e.palette.fgA300}`};

  transition: filter 0.3s;

  &:hover {
    filter: brightness(1.13);
  }

  &::after {
    content: '';
    position: absolute;
    border-radius: inherit;
    inset: 0;
    pointer-events: none;
    background-image: ${({theme:e})=>e.paperTextureCssVars.img};
    background-size: ${({theme:e})=>e.paperTextureCssVars.size};
    mix-blend-mode: ${({theme:e})=>e.paperTextureCssVars.mixBlendMode};
    opacity: ${({theme:e})=>e.paperTextureCssVars.opacity};
  }
`,ez=e_.default.a.withConfig({displayName:"Cta__PrimaryAnchor",componentId:"sc-eb7eb472-0"})`
  ${eM}
`;e_.default.a.withConfig({displayName:"Cta__PrimaryNewAnchor",componentId:"sc-eb7eb472-1"})`
  position: relative;
  display: flex;
  align-items: center;
  padding: 14px 22px 14px 14px;
  padding: ${(0,eC.generateFluidPxScale)(8,14)} ${(0,eC.generateFluidPxScale)(18,22)}
    ${(0,eC.generateFluidPxScale)(8,14)} ${(0,eC.generateFluidPxScale)(6,14)};
  gap: 16px;
  color: ${({theme:e})=>e.palette.fg1200};
  font-weight: ${({theme:e})=>e.fontWeight.NORMAL};
  white-space: nowrap;

  border: 0;
  border-radius: 1px;
  font-size: ${(0,ej.generateFluidFontSize)(16,20,{minWidth:800,maxWidth:1708})};
  font-weight: ${({theme:e})=>e.fontWeight.NORMAL};
  font-family: inherit;
  letter-spacing: 0.25px;
  user-select: none;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.16);

  ${eE}
`;let eH=e_.default.a.withConfig({displayName:"Cta__SecondaryAnchor",componentId:"sc-eb7eb472-2"})`
  ${e$}
`;function eI({to:e,href:t,children:i,isExternal:a,...r}){return(0,em.jsx)(ez,{as:ek.SiteLink,href:t??e??"",...r,children:i})}function eS({to:e,href:t,children:i,isExternal:a,...r}){return(0,em.jsx)(eH,{as:ek.SiteLink,href:t??e??"",...r,children:i})}e_.default.div.withConfig({displayName:"Cta__PrimaryCtaIconWrapper",componentId:"sc-eb7eb472-3"})`
  position: relative;
  display: grid;
  place-content: center;
  aspect-ratio: 1 / 1;
  color: ${({theme:e})=>e.palette.fg1200};
  border: 1px solid ${({theme:e})=>e.palette.fg1200};
  border-radius: 999px;
  width: 36px;

  &:hover {
    filter: brightness(1.1);
  }
`,e_.default.div.withConfig({displayName:"Cta__PrimaryCtaIconWrapperNew",componentId:"sc-eb7eb472-4"})`
  position: relative;
  display: grid;
  place-content: center;
  aspect-ratio: 1 / 1;
  color: ${({theme:e})=>e.palette.fg1200};
  border-radius: 999px;
  width: 36px;

  background-image: ${({theme:e})=>{let t=`color-mix(in srgb, ${e.palette.fg1200}, transparent 87%)`;return`linear-gradient(to right, ${t}, color-mix(in srgb, #FFDFE2, transparent 87%))`}};

  box-shadow: 1px 2px 5px 1px rgba(0 0 0 / 0.64) inset;

  &:hover {
    filter: brightness(1.1);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: ${({theme:e})=>{let t=e.palette.fg1000,i=e.palette.fg800;return`linear-gradient(-25deg, ${t}, ${t} 35%, ${i} 55%, ${i}) border-box border-box`}};
    background-size: cover;
    border: 1px solid transparent;

    mask:
      linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px)
        padding-box exclude,
      linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px);
  }
`;let eN=e_.default.div.withConfig({displayName:"Cta__Circle",componentId:"sc-eb7eb472-5"})`
  position: absolute;
  border: 1px solid ${({theme:e})=>e.palette.fg1000};
  aspect-ratio: 1 / 1;
  width: 14px;
  border-radius: 999px;
  transition: scale 0.3s cubic-bezier(1, -0.4, 0.35, 0.95);

  &[data-position='tl'] {
    top: -6px;
    left: -6px;
    transform-origin: bottom right;
  }
  &[data-position='tr'] {
    top: -6px;
    right: -6px;
    transform-origin: bottom left;
  }
  &[data-position='bl'] {
    bottom: -6px;
    left: -6px;
    transform-origin: top right;
  }
  &[data-position='br'] {
    bottom: -6px;
    right: -6px;
    transform-origin: top left;
  }
`,eA=e_.default.div.withConfig({displayName:"Cta__CornerLine",componentId:"sc-eb7eb472-6"})`
  position: absolute;

  &::after {
    content: '';
    position: absolute;
    background-color: var(
      --corner-line-color,
      ${({theme:e})=>e.palette.fg1000}
    );
  }
`,eP=e_.default.div.withConfig({displayName:"Cta__CornerLinePosition",componentId:"sc-eb7eb472-7"})`
  --in-out-cubic: cubic-bezier(0.645, 0.045, 0.355, 1);
  --out-cubic: cubic-bezier(0.215, 0.61, 0.355, 1);

  position: absolute;
  inset: 0;
  opacity: var(--corner-line-initial-opacity, 0);
`,eT=e_.default.div.withConfig({displayName:"Cta__CornerTrack",componentId:"sc-eb7eb472-8"})`
  position: absolute;
  overflow: clip;

  &[data-position='t'],
  &[data-position='b'] {
    left: var(--corner-line-outset, -4px);
    height: 1px;
    width: calc(100% + var(--corner-line-outset, -4px) * -2);

    ${eA} {
      height: 1px;
      width: 100%;

      &::after {
        height: 1px;
        width: 14px;
        transform: translateX(-50%);
      }
    }
  }

  &[data-position='r'],
  &[data-position='l'] {
    top: var(--corner-line-outset, -4px);
    width: 1px;
    height: calc(100% + var(--corner-line-outset, -4px) * -2);

    ${eA} {
      width: 1px;
      height: 100%;

      &::after {
        width: 1px;
        height: 14px;
        transform: translateY(-50%);
      }
    }
  }

  &[data-position='t'] {
    top: var(--corner-line-outset, -4px);

    ${eA}[data-order='1'] {
      transform: translateX(-100%);
    }
    ${eA}[data-order='2'] {
      transform: translateX(0%);
    }
    ${eA}[data-order='3'] {
      transform: translateX(100%);
    }
  }
  &[data-position='r'] {
    right: var(--corner-line-outset, -4px);

    ${eA}[data-order='1'] {
      transform: translateY(-100%);
    }
    ${eA}[data-order='2'] {
      transform: translateY(0%);
    }
    ${eA}[data-order='3'] {
      transform: translateY(100%);
    }
  }
  &[data-position='b'] {
    bottom: var(--corner-line-outset, -4px);

    ${eA}[data-order='1'] {
      transform: translateX(0%);
    }
    ${eA}[data-order='2'] {
      transform: translateX(100%);
    }
    ${eA}[data-order='3'] {
      transform: translateX(200%);
    }
  }
  &[data-position='l'] {
    left: var(--corner-line-outset, -4px);

    ${eA}[data-order='1'] {
      transform: translateY(0%);
    }
    ${eA}[data-order='2'] {
      transform: translateY(100%);
    }
    ${eA}[data-order='3'] {
      transform: translateY(200%);
    }
  }
`,eF=e_.default.div.withConfig({displayName:"Cta__AccentsContainer",componentId:"sc-eb7eb472-9"})`
  position: relative;
  display: flex;

  & > * {
    flex-grow: 1;
  }

  ${eN} {
    transition-delay: 0;
  }
  @media (hover: hover) {
    &:hover ${eN} {
      transition-delay: calc(var(--i, 0) * 0.04s);
      scale: 0;
    }
  }

  ${eP} {
    transition:
      transform 0s var(--in-out-cubic),
      opacity 0.4s var(--out-cubic);
    transition-delay: 0s;
  }
  @media (hover: hover) {
    &:hover ${eP} {
      transition:
        transform 0.4s var(--out-cubic),
        opacity 0.4s var(--out-cubic);

      opacity: 1;

      &[data-position='t'] {
        transform: translateX(100%);
      }
      &[data-position='r'] {
        transform: translateY(100%);
      }
      &[data-position='b'] {
        transform: translateX(-100%);
      }
      &[data-position='l'] {
        transform: translateY(-100%);
      }
    }
  }
`;function eB({children:e}){return(0,em.jsxs)(eF,{children:[["tl","tr","bl","br"].map((e,t)=>(0,em.jsx)(eN,{"data-position":e,style:{"--i":t}},e)),e]})}function eL({children:e,style:t,className:i}){return(0,em.jsxs)(eF,{className:i,style:t,children:[["t","r","b","l"].map((e,t)=>(0,em.jsx)(eT,{"data-position":e,style:{"--i":t},children:(0,em.jsx)(eP,{"data-position":e,children:[1,2,3].map(e=>(0,em.jsx)(eA,{"data-order":e},e))})},e)),e]})}e_.default.div.withConfig({displayName:"Cta__GlowContainer",componentId:"sc-eb7eb472-10"})`
  position: relative;
  display: flex;

  & > * {
    flex-grow: 1;
  }
`,e_.default.div.withConfig({displayName:"Cta__GlowCorners",componentId:"sc-eb7eb472-11"})`
  position: absolute;
  width: 100%;
  height: 6px;
  top: 4px;

  &::before,
  &::after {
    position: absolute;
    content: '';
    background-color: ${({theme:e})=>e.palette.fg1200};
    background-color: ${({theme:e})=>e.palette.fg1200};
    height: 6px;
    width: 6px;
    left: 4px;
  }

  &::after {
    left: auto;
    right: 4px;
  }

  &[data-bottom] {
    top: auto;
    bottom: 4px;
  }
`;let eO=e_.default.div.withConfig({displayName:"Cta__PerspectiveWrapper",componentId:"sc-eb7eb472-12"})`
  opacity: 0.99;
  will-change: transform;
  display: flex;
  justify-self: stretch;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: -0px;
    top: 0px;
    height: 3.5px;
    width: 3.5px;
    border-radius: 0px;
    transform: rotate(35deg) translate(100%);
    backface-visibility: visible;
    transform-origin: top left;
    background-color: ${({theme:e})=>`color-mix(in srgb, ${e.palette.fg900}, white 12%)`};
  }

  &::after {
    left: auto;
    top: auto;
    right: 0.5px;
    bottom: 0px;
    height: 2.5px;
    width: 2.5px;
    transform: rotate(35deg) translateY(0%) translateX(-100%);
    transform-origin: bottom right;
    background-color: ${({theme:e})=>`color-mix(in srgb, ${e.palette.fg1000}, white 10%)`};
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`,eR=e_.default.div.withConfig({displayName:"Cta__Depth",componentId:"sc-eb7eb472-13"})`
  position: absolute;
  inset: 0;
  transform: translateZ(-0.01px);

  &::before {
    content: '';
    position: absolute;
    inset: 0 2px;
    border-radius: 2px;
    background-color: rgba(0 0 0 / 0.16);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 1px;
    border-radius: 2px;
    background-color: ${({theme:e})=>`color-mix(in srgb, ${e.palette.fg1200}, black 6%)`};
    background-image: ${({theme:e})=>{let t=`color-mix(in srgb, ${e.palette.fg900}, white 12%)`,i=`color-mix(in srgb, ${e.palette.fg1200}, black 8%)`,a=`color-mix(in srgb, ${e.palette.fg1000}, white 10%)`;return`linear-gradient(168deg, ${t}, ${i}, ${a})`}};
  }
`;e_.default.div.withConfig({displayName:"Cta__PerspectiveContainer",componentId:"sc-eb7eb472-14"})`
  --out-quint: cubic-bezier(0.23, 1, 0.32, 1);
  --overshoot-out: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --anticipate-out: cubic-bezier(1, -0.4, 0.35, 0.95);
  --quick-out: cubic-bezier(0, 0, 0.2, 1);
  --swift-out: cubic-bezier(0.175, 0.885, 0.32, 1.1);

  position: relative;
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  transform-origin: top center;
  perspective: 300px;
  transform-style: preserve-3d;

  ${eR} {
    &::before,
    &::after {
      transition: 0.4s transform var(--swift-out);
    }
  }

  &,
  ${eO} {
    &,
    &::before,
    &::after {
      transition:
        0.4s transform var(--swift-out),
        0.24s filter ease-in;
    }
  }

  @media (hover: hover) {
    &:hover {
      transform: rotateX(-16deg) rotateY(-4deg);
    }

    &:hover ${eR}::before {
      transform: translateY(6px) translateX(-7px);
    }

    &:hover ${eR}::after {
      transform: translateY(3px) translateX(-2px);
    }

    &:hover ${eO} {
      filter: brightness(1.06);
      transform: translateY(-1px) translateX(1px);

      &::before {
        transform: rotate(35deg) translate(0%);
      }

      &::after {
        transform: rotate(35deg) translateY(100%);
      }
    }
  }
`;var eW=e.i(316983),eU=e.i(809132),eV=e.i(273454),eD=e.i(174080),eG=e.i(745009),eQ=!!("u">typeof window&&window.document&&window.document.createElement),eq=function(){function e(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,i,a){return i&&e(t.prototype,i),a&&e(t,a),t}}(),eY=function(e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function, not "+typeof e);function t(){if(!(this instanceof t))throw TypeError("Cannot call a class as a function");var e=(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments);if(!this)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&("object"==typeof e||"function"==typeof e)?e:this}return t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e),eq(t,[{key:"componentWillUnmount",value:function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null}},{key:"render",value:function(){return eQ?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),eD.default.createPortal(this.props.children,this.props.node||this.defaultNode)):null}}]),t}(ey.default.Component);eY.propTypes={children:eG.default.node.isRequired,node:eG.default.any};var eX=function(){function e(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,i,a){return i&&e(t.prototype,i),a&&e(t,a),t}}(),eK=function(e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function, not "+typeof e);function t(){if(!(this instanceof t))throw TypeError("Cannot call a class as a function");var e=(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments);if(!this)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&("object"==typeof e||"function"==typeof e)?e:this}return t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e),eX(t,[{key:"componentDidMount",value:function(){this.renderPortal()}},{key:"componentDidUpdate",value:function(e){this.renderPortal()}},{key:"componentWillUnmount",value:function(){eD.default.unmountComponentAtNode(this.defaultNode||this.props.node),this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null,this.portal=null}},{key:"renderPortal",value:function(e){this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode));var t=this.props.children;"function"==typeof this.props.children.type&&(t=ey.default.cloneElement(this.props.children)),this.portal=eD.default.unstable_renderSubtreeIntoContainer(this,t,this.props.node||this.defaultNode)}},{key:"render",value:function(){return null}}]),t}(ey.default.Component);eK.propTypes={children:eG.default.node.isRequired,node:eG.default.any};let eZ=eD.default.createPortal?eY:eK;var eJ=e.i(88653),e0=e.i(846932),e1=e.i(706736),e5=e.i(430388),e2=e.i(991709);e.i(726497);var e3=e.i(898360),e6=e.i(429625);let e8=(0,e_.default)(e0.motion.div).withConfig({displayName:"FullScreenVideo__Video",componentId:"sc-b354867c-0"})`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({theme:e})=>(0,ew.rgba)(e.colors.BLACK,.8)};
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
`,e9=(0,e_.default)(e1.Button).withConfig({displayName:"FullScreenVideo__CloseButton",componentId:"sc-b354867c-1"})`
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
`,e4=ey.memo(({isOpen:e,onClose:t,path:i,videoTitle:a,embed:r})=>{let n=(0,ey.useRef)(null),{handleEnded:o,handlePlay:s,handleTimeUpdate:l}=(0,e6.useNativeVideoTracking)(i,a,e);(0,ey.useEffect)(()=>{if(!e||r)return;let t=window.setTimeout(()=>{n.current?.play()},200);return()=>window.clearTimeout(t)},[r,e]);let d=(0,ey.useCallback)(()=>{n.current?.pause(),t()},[t]);return(0,em.jsx)(eJ.AnimatePresence,{children:e&&(0,em.jsx)(eZ,{children:(0,em.jsx)(e_.ThemeProvider,{theme:e3.darkTheme,children:(0,em.jsxs)(e8,{...e2.REVEAL_MARKER,animate:{opacity:1},"data-theme":"dark",exit:{opacity:0},initial:{opacity:0},transition:e2.DEFAULT_TRANSITION,children:[(0,em.jsx)(e9,{icon:(0,em.jsx)(e5.CloseIcon,{}),size:"small",stylez:"bold",onClick:d}),r||(0,em.jsx)("video",{ref:n,controls:!0,playsInline:!0,onEnded:o,onPlay:s,onTimeUpdate:l,children:(0,em.jsx)("source",{src:i,type:"video/mp4"})}),(0,em.jsx)("div",{className:"bkg",onClick:d})]})})})})});e4.displayName="FullScreenVideo";var e7=e.i(739876),te=e.i(581444),tt=e.i(657688);function ti(){return(0,em.jsx)("svg",{fill:"none",height:"17",viewBox:"0 0 15 17",width:"15",xmlns:"http://www.w3.org/2000/svg",children:(0,em.jsx)("path",{d:"M12.7007 7.50366C13.5359 7.9859 13.5887 9.14654 12.8579 9.71362L12.7007 9.81909L2.84131 15.5115C1.95038 16.0254 0.837402 15.3819 0.837402 14.3533L0.837402 2.96948C0.837402 2.00499 1.81587 1.37891 2.67236 1.72827L2.84131 1.81128L12.7007 7.50366Z",stroke:"currentColor",strokeWidth:"1.32"})})}let ta=e_.default.div.withConfig({displayName:"Thumbnail__FirstFrame",componentId:"sc-84850ce1-0"})`
  position: absolute;
  border-radius: inherit;
  aspect-ratio: ${({$aspectRatio:e})=>e};
  overflow: clip;
  width: 100%;
  inset: 0;
  background-color: ${({theme:e})=>e.palette.fgLoud};
  filter: brightness(0.92);

  .gatsby-image-wrapper {
    aspect-ratio: ${({$aspectRatio:e})=>e};
  }

  img {
    width: 100%;
    object-fit: cover;
  }
`,tr=e_.default.video.withConfig({displayName:"Thumbnail__Loop",componentId:"sc-84850ce1-1"})`
  display: block;
  width: 100%;
  border-radius: 1px;
  aspect-ratio: ${({$aspectRatio:e})=>e};
  position: relative;
  filter: brightness(0.92);
`,tn=e_.default.span.withConfig({displayName:"Thumbnail__PlayButtonGlass",componentId:"sc-84850ce1-2"})`
  position: relative;
  grid-area: 1 / -1;
  border-radius: 999px;
  padding: 4px;
  border-radius: 999px;
  border: 1px solid transparent;

  transform: var(--indicator-transform);
  transition: transform;
  transition-duration: var(--hover-transition-duration);
  transition-timing-function: var(--hover-transition-timing-function);

  box-shadow:
    0px 72px 20px 0px rgba(0, 0, 0, 0),
    0px 46px 18px 0px rgba(0, 0, 0, 0.03),
    0px 26px 16px 0px rgba(0, 0, 0, 0.12),
    0px 12px 12px 0px rgba(0, 0, 0, 0.2),
    0px 3px 6px 0px rgba(0, 0, 0, 0.23);

  ${({theme:e})=>e.buttonLoudStyles};

  &::before,
  &::after {
    border-radius: inherit;
  }

  &::after {
    content: '';
    pointer-events: none;
    position: absolute;
    inset: 1px;
    z-index: 1;
    opacity: 1;

    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    transition: ${({theme:e})=>`opacity ${e.animation.DURATION} ${e.animation.EASING}`};
  }

  &:hover::after {
    opacity: 0.3;
  }

  &:active::after {
    opacity: 0.6;
  }

  border: 1px solid transparent;
  background: ${({theme:e})=>`linear-gradient(
    to right,
    ${e.backgroundColor40},
    ${e.backgroundColor40}
  ),
  linear-gradient(
    45deg,
    ${e.highlightColor},
    ${e.colors.LIGHT_PURPLE}
  )`};
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
`,to=e_.default.span.withConfig({displayName:"Thumbnail__PlayButtonInner",componentId:"sc-84850ce1-3"})`
  grid-area: 1 / -1;
  justify-self: stretch;
  position: relative;
  border-radius: 999px;
  display: grid;
  place-items: center;
  aspect-ratio: 1 / 1;
  width: ${(0,eC.generateFluidPxScale)(66,80)};
  width: 72px;
  background-color: ${({theme:e})=>`color-mix(in srgb, ${e.palette.fg100}, white 7.5%)`};
  box-shadow:
    0px 0px 1px rgba(0, 0, 0, 0.64),
    0px 1px 1px rgba(0, 0, 0, 0.48),
    0px 2px 1px rgba(0, 0, 0, 0.32),
    0px 4px 2px rgba(0, 0, 0, 0.12),
    0px 6px 2px rgba(0, 0, 0, 0.08);

  color: ${({theme:e})=>e.palette.fg1200};

  svg {
    margin-left: 5%;
    width: 32px;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
  }

  &::before {
    border: 1px dashed ${({theme:e})=>e.palette.fg1200};
    animation: rotate 7s linear infinite;
    animation-play-state: var(--play-indicator-state, paused);
  }

  @keyframes rotate {
    from {
      transform: rotate(-360deg);
    }
  }

  &::after {
    background-image: ${({theme:e})=>e.paperTextureCssVars.img};
    background-size: ${({theme:e})=>e.paperTextureCssVars.size};
    opacity: ${({theme:e})=>e.paperTextureCssVars.opacity};
    mix-blend-mode: ${({theme:e})=>e.paperTextureCssVars.mixBlendMode};
  }
`,ts=e_.default.div.withConfig({displayName:"Thumbnail__PlayButton",componentId:"sc-84850ce1-4"})`
  position: relative;
  display: grid;
  place-content: center;
  place-items: center;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  z-index: 2;
`;function tl({autoplayingVideoPath:e,aspectRatio:t="639 / 385",posterImageElement:i,posterSrc:a}){return(0,em.jsxs)(em.Fragment,{children:[i&&(0,em.jsx)(ta,{$aspectRatio:t,children:i}),!i&&a&&(0,em.jsx)(ta,{$aspectRatio:t,children:(0,em.jsx)(tt.default,{alt:"Video poster",fill:!0,sizes:"100vw",src:a,style:{objectPosition:"top"}})}),e&&(0,em.jsx)(tr,{$aspectRatio:t,autoPlay:!0,controls:!1,loop:!0,muted:!0,playsInline:!0,poster:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",children:(0,em.jsx)("source",{src:e,type:"video/mp4"})}),(0,em.jsx)(tn,{children:(0,em.jsx)(ts,{children:(0,em.jsx)(to,{children:(0,em.jsx)(ti,{})})})})]})}var td=e.i(850034),tc=e.i(665419);let tp=(0,e_.default)(te.LayoutSubgrid).withConfig({displayName:"ContextStudioHero__Bg",componentId:"sc-fadd3698-0"})`
  position: relative;
  overflow-x: clip;

  background-image: radial-gradient(
    circle at top left,
    ${({theme:e})=>(0,ew.lighten)(.01,e.palette.bg500)} 300px,
    ${({theme:e})=>e.palette.bg300}
  );

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: ${({theme:e})=>e.paperTextureCssVars.img};
    background-size: ${({theme:e})=>e.paperTextureCssVars.size};
    opacity: ${({theme:e})=>e.paperTextureCssVars.opacity};
    mix-blend-mode: ${({theme:e})=>e.paperTextureCssVars.mixBlendMode};
    pointer-events: none;
  }
`,tu=(0,e_.default)(te.LayoutGridCondensed).withConfig({displayName:"ContextStudioHero__Wrapper",componentId:"sc-fadd3698-1"})`
  position: relative;
  grid-area: 1 / -1;
  grid-row: 1 / -1;
`,tm=e_.default.div.withConfig({displayName:"ContextStudioHero__ThumbnailShadow",componentId:"sc-fadd3698-2"})`
  position: relative;
  display: grid;
  place-items: center;
  aspect-ratio: 128 / 72;
  background-color: ${({theme:e})=>e.palette.fg100};
  border-radius: 4px;
  overflow: clip;
  box-shadow:
    0px 0px 1px rgba(0, 0, 0, 0.64),
    0px 1px 1px rgba(0, 0, 0, 0.56),
    0px 2px 1px rgba(0, 0, 0, 0.48),
    0px 4px 2px rgba(0, 0, 0, 0.32),
    0px 6px 2px rgba(0, 0, 0, 0.16);

  & > * {
    grid-area: 1 / -1;
  }

  img {
    object-fit: cover;
    width: 100%;
  }
`,th=e_.default.div.withConfig({displayName:"ContextStudioHero__ContentThumbnail",componentId:"sc-fadd3698-3"})`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${te.layoutGridCondensedPadding};
  padding-top: ${(0,eC.generateFluidPxScale)(150,225)};
  padding-bottom: 128px;
  grid-row: 1 / -1;
  width: 100%;
  gap: 30px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.EXTRA_LARGE}) {
    padding-top: 240px;
    padding-bottom: 80px;
    flex-direction: column;
    align-items: flex-start;
    gap: 60px;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    padding: 0;
    padding-top: 180px;
    padding-bottom: 48px;
  }
`,tf=e_.default.div.withConfig({displayName:"ContextStudioHero__Content",componentId:"sc-fadd3698-4"})`
  display: flex;
  flex-direction: column;
  gap: ${(0,eC.generateFluidPxScale)(20,30)};
  flex: 1 1 0;
`,tg=e_.default.div.withConfig({displayName:"ContextStudioHero__TextBlock",componentId:"sc-fadd3698-5"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,tx=(0,e_.default)(eV.GradientHeader).withConfig({displayName:"ContextStudioHero__StyledGradientHeader",componentId:"sc-fadd3698-6"})`
  text-wrap: balance;
`,tb=e_.default.p.withConfig({displayName:"ContextStudioHero__P",componentId:"sc-fadd3698-7"})`
  font-size: ${(0,ej.generateFluidFontSize)(16,24,{minWidth:800,maxWidth:1708})};
  max-width: 50ch;
`,tv=e_.default.div.withConfig({displayName:"ContextStudioHero__Actions",componentId:"sc-fadd3698-8"})`
  grid-row: 2;
  grid-column: 1;
  padding-right: 0;
  display: flex;
  height: min-content;
  gap: 16px;
`,ty=e_.default.button.withConfig({displayName:"ContextStudioHero__ThumbnailButton",componentId:"sc-fadd3698-9"})`
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

  flex: 1 1 auto;
  padding: 0;
  position: relative;
  cursor: pointer;
  height: fit-content;
  border: 0;
  background-color: transparent;

  & {
    transition: transform, border;
    transition-duration: var(--hover-transition-duration);
    transition-timing-function: var(--hover-transition-timing-function);
  }

  ${tm} {
    transition: transform;
    transition-duration: var(--hover-transition-duration);
    transition-timing-function: var(--hover-transition-timing-function);
  }

  @media (hover: hover) {
    &:hover,
    &:focus-visible {
      --play-indicator-state: running;
      --indicator-transform: scale(1.1);
      transform: translateY(-4px);

      ${tm} {
        transform-origin: center center;
        transform: scale(0.986);
      }
    }
  }
`,tw=e_.default.div.withConfig({displayName:"ContextStudioHero__ThumbnailArea",componentId:"sc-fadd3698-10"})`
  display: flex;
  flex: 1.5 1 0;

  @media (max-width: ${({theme:e})=>e.mediaQuery.EXTRA_LARGE}) {
    margin: 0 auto;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    min-width: auto;
  }
`,t_=e_.default.div.withConfig({displayName:"ContextStudioHero__PerlinDotGrid",componentId:"sc-fadd3698-11"})`
  position: relative;
  grid-column: 1 / -1;
  grid-row: 1 / -1;

  mask-image: radial-gradient(circle at 70% 46vh, white 30vh, transparent 50vh);

  @media (max-width: ${({theme:e})=>e.mediaQuery.EXTRA_LARGE}) {
    mask-image: radial-gradient(
      circle at 50% 68vh,
      white 40vw,
      transparent 60vw
    );
  }

  pointer-events: none;
`,tC=e_.default.div.withConfig({displayName:"ContextStudioHero__PerlinNoise",componentId:"sc-fadd3698-12"})`
  position: absolute;
  inset: 0;
  background-image: url(/images/home-2025/textures/noise-jade-128x128.png);
  background-size: 1024px 1024px;

  animation: noise 16s linear infinite;
  opacity: 0.4;

  @keyframes noise {
    from {
      background-position: 1024px -1024px;
    }
    to {
      background-position: 0px 0px;
    }
  }
`;function tk(){let[e,t]=(0,ey.useState)(!1);return(0,em.jsxs)(tp,{children:[(0,em.jsx)(e7.CheckeredMargin,{}),(0,em.jsxs)(te.LayoutSubgrid,{"data-content-grid":!0,style:{position:"relative",zIndex:1},children:[(0,em.jsx)(t_,{children:(0,em.jsx)(eU.DotGridMask,{children:(0,em.jsx)(tC,{})})}),(0,em.jsx)(tu,{children:(0,em.jsxs)(th,{children:[(0,em.jsxs)(tf,{children:[(0,em.jsx)(eW.AnnouncementPillLink,{icon:(0,em.jsx)(e5.SemanticModelsIcon,{}),pillLabel:"Context management",subCopy:"Read the announcement",to:"/blog/introducing-context-studio/"}),(0,em.jsxs)(tg,{children:[(0,em.jsx)(tx,{$alignText:"left",renderAs:"h1",children:"Accuracy that improves with every answer"}),(0,em.jsx)(tb,{className:"text-xl",children:"Skip the months-long modeling project. Hex’s Context Studio activates the logic you already have and learns from every answer."})]}),(0,em.jsxs)(tv,{children:[(0,em.jsx)(eB,{children:(0,em.jsx)(eL,{children:(0,em.jsx)(eI,{className:"text-l","data-no-icon":!0,to:tc.INTERNAL_LINKS.RequestADemo,children:"Request a demo"})})}),(0,em.jsx)(eL,{children:(0,em.jsx)(eS,{className:"text-l","data-no-icon":!0,isExternal:!0,to:tc.DOCS_LINKS.ContextStudio,children:"Learn more"})})]})]}),(0,em.jsx)(tw,{children:(0,em.jsx)(ty,{onClick:()=>t(!0),children:(0,em.jsx)(tm,{children:(0,em.jsx)(tl,{aspectRatio:"16 / 9",autoplayingVideoPath:"https://cdn.sanity.io/files/e92memrj/production/9cb762386cd9dea141a8a9aae3604fab4162e993.mp4"})})})})]})})]}),(0,em.jsx)(e7.CheckeredMargin,{"data-right":!0}),(0,em.jsx)(e4,{embed:(0,em.jsx)(td.VideoIframe,{allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0,frameBorder:"0",height:"721",referrerPolicy:"strict-origin-when-cross-origin",src:"https://www.youtube.com/embed/1pml_nlfw80?autoplay=1",title:"Context Studio Overview",width:"1280"}),isOpen:e,path:"",onClose:()=>t(!1)})]})}var tj=e.i(674216),tE=e.i(998990);function tM(){return(0,em.jsxs)(tj.Section,{children:[(0,em.jsx)(te.LayoutSubgrid,{"data-content-grid":!0,"data-pile":!0,children:(0,em.jsx)(tj.StyledGridRule,{$column:6})}),(0,em.jsxs)(tj.CustomerStoriesGrid,{"data-content-grid":!0,"data-pile":!0,children:[(0,em.jsx)(tj.CustomerStory,{children:(0,em.jsxs)(tj.QuoteWrapper,{children:[(0,em.jsx)(tj.Logo,{src:tE.CUSTOMER_LOGOS_HOSTED.Notion}),(0,em.jsxs)(tj.Quote,{className:"text-l",children:["“Development and deployment ",(0,em.jsx)(tj.Em,{children:"is so speedy."})," Seeing my semantic model changes immediately rendered in Hex was a joy.”"]}),(0,em.jsx)(tj.Attribution,{children:(0,em.jsx)(tj.Author,{children:(0,em.jsxs)(tj.Info,{children:[(0,em.jsx)("p",{className:"text-base",children:"Peter R."}),(0,em.jsx)("p",{className:"annotation",children:"Data Engineer at Notion"})]})})})]})}),(0,em.jsx)(tj.CustomerStory,{children:(0,em.jsxs)(tj.QuoteWrapper,{children:[(0,em.jsx)(tj.Logo,{src:tE.CUSTOMER_LOGOS_HOSTED.WeightsAndBiases}),(0,em.jsxs)(tj.Quote,{className:"text-l",children:["“Hex made setting up a connection to MetricFlow a breeze! The intuitive click-and-drag UI ",(0,em.jsx)(tj.Em,{children:"empowers our stakeholders"})," to perform self-serve analysis.”"]}),(0,em.jsx)(tj.Attribution,{children:(0,em.jsx)(tj.Author,{children:(0,em.jsxs)(tj.Info,{children:[(0,em.jsx)("p",{className:"text-base",children:"Mercedes W."}),(0,em.jsx)("p",{className:"annotation",children:"Data Scientist at Weights & Biases"})]})})})]})})]})]})}var t$=e.i(258591),tz=e.i(650617);let tH="#5CB198",tI=e_.default.div.withConfig({displayName:"NotebookCell__PerlinNoise",componentId:"sc-ce3f73b5-0"})`
  position: absolute;
  inset: 0;
  background-image: ${"url(/images/home-2025/textures/noise-jade-128x128.png)"};
  background-size: 512px 512px;
  opacity: 0;
  transition: opacity;
  transition-duration: var(--hover-transition-duration);
  transition-timing-function: var(--hover-transition-timing-function);

  animation: noise 8s linear infinite;
  animation-play-state: paused;
  @keyframes noise {
    from {
      background-position: -512px -512px;
    }
    to {
      background-position: 0px 0px;
    }
  }

  &[data-pink] {
    background-image: ${"url(/images/home-2025/textures/noise-rose-128x128.png)"};
  }
`,tS=e_.default.div.withConfig({displayName:"NotebookCell__LinkIndicator",componentId:"sc-ce3f73b5-1"})`
  position: relative;
  padding: 14px 20px 14px 26px;
  background-color: ${({theme:e})=>e.palette.bg300};
  color: ${({theme:e})=>e.palette.fgLoud};
  border: 1px dashed ${({theme:e})=>e.palette.fg1100};
  box-shadow:
    0 2px 3px 0px rgba(0 0 0 / 0.12),
    0 4px 12px -2px rgba(0 0 0 / 0.8);
  border-radius: 1px;
  position: absolute;
  bottom: 24px;
  left: 24px;
  display: flex;
  align-items: center;
  gap: 18px;
  transform-origin: left bottom;

  transform: rotateX(-15deg) translateY(56px);
  opacity: 0;
  transition: opacity, transform;
  transition-duration: var(--hover-transition-duration);
  transition-timing-function: var(--hover-transition-timing-function);

  svg {
    color: ${({theme:e})=>e.palette.fg1200};
  }

  &::after {
    content: ' ';
    border-radius: inherit;
    position: absolute;
    inset: 0;
    background-image: ${({theme:e})=>e.paperTextureCssVars.img};
    background-size: ${({theme:e})=>e.paperTextureCssVars.size};
    opacity: ${({theme:e})=>e.paperTextureCssVars.opacity};
    mix-blend-mode: ${({theme:e})=>e.paperTextureCssVars.mixBlendMode};
  }
`,tN=e_.default.div.withConfig({displayName:"NotebookCell__Cell",componentId:"sc-ce3f73b5-2"})`
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

  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: ${({theme:e})=>e.palette.bg300};
  border: 1px solid ${(0,ew.rgba)(tH,.2)};
  transition: border transform;
  box-shadow:
    1px 2px 4px rgba(0, 0, 0, 0.2),
    4px 6px 8px rgba(0, 0, 0, 0.17),
    10px 14px 10px rgba(0, 0, 0, 0.1),
    18px 25px 12px rgba(0, 0, 0, 0.03),
    28px 39px 13px rgba(0, 0, 0, 0);

  transition-duration: var(--hover-transition-duration);
  transition-timing-function: var(--hover-transition-timing-function);
  perspective: 800px;

  &[data-pink] {
    border: 1px solid
      ${({theme:e})=>`color-mix(in srgb, ${e.palette.bg500}, white 12%)`};
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    max-width: 500px;
    margin: 0 auto;
  }

  [data-gatsby-image-wrapper] {
    transition-duration: var(--hover-transition-duration);
    transition-timing-function: var(--hover-transition-timing-function);
    transform-origin: center bottom;
  }

  &[data-hero-cell] {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-areas: 'text image';
    width: 100%;
    max-width: none;
    gap: 0;

    @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
      grid-column: auto / span 1;
      display: flex;
      flex-direction: column;
      align-self: flex-start;
    }

    ${tS} {
      bottom: ${(0,eC.generateFluidPxScale)(16,32)};
      left: ${(0,eC.generateFluidPxScale)(16,40)};
      right: auto;
    }
  }

  &::before {
    border-radius: inherit;
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

  &:has(*:focus-visible) {
    transform: translateY(-4px);
    border: 1px solid ${(0,ew.rgba)(tH,.32)};
    outline: var(--app-focus-outline);
    outline-offset: var(--app-focus-outline-offset);

    ${tI} {
      opacity: 0.24;
      animation-play-state: running;
    }
    ${tS} {
      transform: none;
      opacity: 1;
    }

    &[data-pink] {
      border: 1px solid ${({theme:e})=>e.palette.fg800};
    }
  }

  @media (hover: hover) {
    &:hover {
      transform: translateY(-4px);
      border: 1px solid ${(0,ew.rgba)(tH,.32)};

      ${tI} {
        opacity: 0.24;
        animation-play-state: running;
      }
      ${tS} {
        transform: none;
        opacity: 1;
      }
    }

    &[data-pink]:hover {
      border: 1px solid ${({theme:e})=>e.palette.fg800};
    }
  }
`,tA=e_.default.div.withConfig({displayName:"NotebookCell__Info",componentId:"sc-ce3f73b5-3"})`
  padding: ${(0,eC.generateFluidPxScale)(32,40)};
  min-width: 44ch;

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    min-width: auto;
    padding: 32px ${(0,eC.generateFluidPxScale)(24,52)} !important;
  }

  &:not(&[data-hero-cell]) {
    min-width: auto;
  }

  /* Hero cell text should not constrain the image */
  &[data-hero-cell] {
    grid-area: text;
    min-width: 280px;
    max-width: 450px;
    width: max-content;

    @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
      /* Reset grid properties for mobile flex layout */
      grid-area: auto;
      flex: none;
      width: auto;
      max-width: none;
    }
  }
`;e_.default.div.withConfig({displayName:"NotebookCell__Icon",componentId:"sc-ce3f73b5-4"})`
  color: ${tH};
  margin-bottom: 10px;
`,e_.default.h3.withConfig({displayName:"NotebookCell__Title",componentId:"sc-ce3f73b5-5"})`
  margin-bottom: 8px;
  text-wrap: balance;
`,e_.default.p.withConfig({displayName:"NotebookCell__Description",componentId:"sc-ce3f73b5-6"})`
  max-width: 32rem;
`;let tP=e_.default.div.withConfig({displayName:"NotebookCell__Illustration",componentId:"sc-ce3f73b5-7"})`
  position: relative;
  place-self: stretch;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-width: 0;
  margin: 8px;
  border: 1px solid
    ${({theme:e})=>`color-mix(in srgb, ${e.palette.fg100}, white 12%)`};
  border-radius: 6px;
  overflow: hidden;

  img {
    align-self: flex-end;
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  &:not(&[data-hero-cell]) {
    margin-top: auto;
    flex: none;
  }

  /* Give image precedence in grid layout */
  &[data-hero-cell] {
    grid-area: image;
    justify-self: end;

    /* Ensure image can reach its natural max width */
    img {
      width: 100%;
      min-width: 0;
    }

    @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
      /* Reset grid properties for mobile */
      grid-area: auto;
      justify-self: auto;
      flex: none;
    }
  }
`,tT=e_.default.span.withConfig({displayName:"NotebookCell__Target",componentId:"sc-ce3f73b5-8"})`
  position: absolute;
  inset: 0;
  z-index: 1;
`,tF=e_.default.div.withConfig({displayName:"NotebookCell__PlaceholderBg",componentId:"sc-ce3f73b5-9"})`
  position: absolute;
  inset: 0;
  background-color: ${({theme:e})=>e.palette.fgA300};
`;var tB=e.i(168087);function tL({title:e,description:t,id:i,videoDuration:a,videoLink:r}){return(0,em.jsxs)(tO,{children:[(0,em.jsx)(tR,{id:i,renderAs:"h2",styleAs:"h1",children:e}),(0,em.jsx)(tW,{size:"large",children:t}),r&&(0,em.jsx)(tB.DemoVideo,{duration:a,src:r})]})}let tO=e_.default.div.withConfig({displayName:"SectionHeader__Wrapper",componentId:"sc-a0d1e8fd-0"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 32px;
  align-items: center;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    padding-left: 0;
    padding-right: 0;
  }
`,tR=(0,e_.default)(eV.GradientHeader).withConfig({displayName:"SectionHeader__StyledGradientHeader",componentId:"sc-a0d1e8fd-1"})`
  text-wrap: balance;
  scroll-margin-top: 150px;
`,tW=(0,e_.default)(tz.Text).withConfig({displayName:"SectionHeader__StyledText",componentId:"sc-a0d1e8fd-2"})`
  text-wrap: balance;
`;function tU(){return(tU=Object.assign.bind()).apply(null,arguments)}let tV=function(e){return ey.createElement("svg",tU({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),t||(t=ey.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9.116 8 5.47 11.646l.707.708L10.53 8 6.177 3.646l-.707.708z",clipRule:"evenodd"})))},tD=[{title:"Pull knowledge from your tools",description:"Connect Notion, Linear, or any MCP server to bring tickets, wikis, and more into Hex, so answers capture what your team knows.",ctaText:"See connected apps",link:"/blog/mcp-client/",image:"context-studio/illustration-pull-knowledge.png"},{title:"Manage context from the terminal",description:"Use the Hex CLI to version context from Git, pull agent suggestions into PRs, and run evals before shipping changes.",ctaText:"Explore the Hex CLI",link:tc.INTERNAL_LINKS.CLI,image:"context-studio/illustration-hex-cli-suggestions.png"},{title:"Bring your semantic models",description:"Sync semantic models from dbt MetricFlow, Cube, or Snowflake. Definitions stay versioned in your stack while Hex stays in sync.",ctaText:"Discover semantic model sync",link:tc.DOCS_LINKS.SemanticModelSync,image:"context-studio/illustration-open-standards.png"},{title:"Model only what you need",description:"Go off-road in the Hex notebook for flexible exploration, without turning every one-off idea into permanent logic.",ctaText:"Discover exploratory analysis",link:tc.INTERNAL_LINKS.Notebooks,image:"context-studio/illustration-notebook.png"}];function tG({title:e,description:t,ctaText:i,link:a,image:r}){return(0,em.jsxs)(tN,{"data-pink":!0,children:[(0,em.jsxs)(tA,{children:[(0,em.jsxs)(ek.SiteLink,{href:a,children:[(0,em.jsx)(tT,{}),(0,em.jsx)(tY,{renderAs:"h4",children:e})]}),(0,em.jsx)(tz.Text,{size:"medium",children:t})]}),(0,em.jsxs)(tP,{children:[(0,em.jsxs)(eU.DotGridMask,{children:[(0,em.jsx)(tF,{}),(0,em.jsx)(tI,{"data-pink":!0})]}),(0,em.jsx)(tX,{children:(0,em.jsx)(tt.default,{alt:e,height:250,src:`/images/${r.replace(/\.([^.]+)$/,"@2x.$1")}`,width:553})})]}),(0,em.jsxs)(tS,{className:"text-base",children:[i," ",(0,em.jsx)(tV,{})]})]})}function tQ(){return(0,em.jsxs)(ex.BasicPageRow,{topBorder:!0,children:[(0,em.jsx)(tL,{description:"Context curation in Hex is intentionally flexible, so it can adapt to the way your team already works.",title:"Build and manage context on your terms"}),(0,em.jsx)(tq,{children:tD.map(e=>(0,em.jsx)(tG,{...e},e.title))})]})}let tq=e_.default.div.withConfig({displayName:"SectionFeatures__BentoGrid",componentId:"sc-e5726c0c-0"})`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${(0,eC.generateFluidPxScale)(8,14)};
  margin-top: 24px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    grid-template-columns: 1fr;
  }
`,tY=(0,e_.default)(t$.Heading).withConfig({displayName:"SectionFeatures__StyledHeading",componentId:"sc-e5726c0c-1"})`
  margin-bottom: 10px;
`,tX=e_.default.div.withConfig({displayName:"SectionFeatures__ImageWrapper",componentId:"sc-e5726c0c-2"})`
  display: flex;
  margin-top: auto;
  position: relative;
`;var tK=e.i(600376),tZ=e.i(306213);function tJ({children:e}){return(0,em.jsx)(te.LayoutSubgrid,{"data-content-grid":!0,children:(0,em.jsx)(tZ.InfoTextImageCardGrid,{children:e})})}function t0(){return(0,em.jsxs)(ex.BasicPageRow,{topBorder:!0,children:[(0,em.jsx)(tL,{description:"Hex learns from every question asked and every answer published, so you’re always ahead of drifting business logic and emerging domains.",id:"improves-with-use",title:"Improves with use"}),(0,em.jsxs)(tJ,{children:[(0,em.jsx)(tK.InfoTextImageCard,{buttonLink:tc.DOCS_LINKS.Suggestions,buttonText:"Learn more",description:"The Review Agent analyzes interactions for you to find context gaps and suggest fixes.",image:"context-studio/illustration-ui-suggestions.png",imageHeight:350,imageWidth:400,size:"small",title:"Fixes find you"}),(0,em.jsx)(tK.InfoTextImageCard,{buttonLink:tc.DOCS_LINKS.Evals,buttonText:"Learn more",description:"Improve context with evidence, not instinct. Test changes with evals, ship what passes and catch what breaks.",image:"context-studio/illustration-ui-eval-detail.png",imageHeight:350,imageWidth:400,size:"small",title:"Every change, evaluated"}),(0,em.jsx)(tK.InfoTextImageCard,{buttonLink:"/blog/introducing-projects-as-context/",buttonText:"Learn more",description:"The logic and queries behind every published app are reusable context for future questions.",image:"context-studio/illustration-ui-work-is-context.png",imageHeight:350,imageWidth:400,size:"small",title:"Your work is context"})]})]})}var t1=e.i(451115);function t5(){return(0,em.jsxs)(ex.BasicPageRow,{topBorder:!0,children:[(0,em.jsx)(tL,{description:"Questions get asked everywhere: Slack, Claude, Cursor. Hex gives you visibility into every answer and every step the agent took.",id:"observable-everywhere",title:"Observable everywhere"}),(0,em.jsxs)(t8,{children:[(0,em.jsxs)(t6,{children:[(0,em.jsxs)(t3,{$align:"right",children:[(0,em.jsx)(e5.LibraryIcon,{}),(0,em.jsx)(t$.Heading,{renderAs:"h4",children:"Trends surfaced automatically"}),(0,em.jsx)(tz.Text,{children:"Track agent adoption across all of Hex surfaces. See question domains that are growing, trending, or newly emerging with Topics."})]}),(0,em.jsxs)(t3,{$align:"left",children:[(0,em.jsx)(e5.SuccessIcon,{}),(0,em.jsx)(t$.Heading,{renderAs:"h4",children:"The agent suggests improvements"}),(0,em.jsx)(tz.Text,{children:"Warnings surface agent confusion, missing context, or user doubt. The Review Agent tells you exactly what to fix."})]})]}),(0,em.jsx)(t2,{children:(0,em.jsx)(t1.InteractiveFeatureCSDashboard,{dashedLines:!0})})]})]})}let t2=e_.default.div.withConfig({displayName:"SectionObserve__ObservatoryWrapper",componentId:"sc-f5dee681-0"})`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  flex: 1 1 auto;
  min-width: 0;
  max-width: 890px;
`,t3=e_.default.div.withConfig({displayName:"SectionObserve__CalloutInfo",componentId:"sc-f5dee681-1"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 200px;
  max-width: 200px;

  ${({$align:e})=>"right"===e&&e_.css`
      align-items: flex-end;
      text-align: right;
    `}

  ${({$align:e})=>"left"===e&&e_.css`
      align-items: flex-start;
      text-align: left;
    `}
`,t6=e_.default.div.withConfig({displayName:"SectionObserve__Callouts",componentId:"sc-f5dee681-2"})`
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: -250px;
  right: -250px;
  align-items: center;

  @media (max-width: ${({theme:e})=>e.mediaQuery.EXTRA_LARGE}) {
    flex-direction: column;
    left: auto;
    right: auto;
    position: relative;
    gap: 40px;

    ${t3} {
      align-items: flex-start;
      text-align: left;
    }
  }
`,t8=e_.default.div.withConfig({displayName:"SectionObserve__Inner",componentId:"sc-f5dee681-3"})`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  position: relative;
  gap: 50px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.EXTRA_LARGE}) {
    justify-content: flex-start;
    align-self: flex-start;
  }
`;function t9(){return(t9=Object.assign.bind()).apply(null,arguments)}let t4=function(e){return ey.createElement("svg",t9({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),i||(i=ey.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M8.5 11.793V2.5a.5.5 0 0 0-1 0v9.293L4.354 8.646a.5.5 0 0 0-.708.708L8 13.707l4.354-4.353a.5.5 0 1 0-.707-.708z",clipRule:"evenodd"})))};function t7(){return(t7=Object.assign.bind()).apply(null,arguments)}function ie(){return(ie=Object.assign.bind()).apply(null,arguments)}function it(){return(it=Object.assign.bind()).apply(null,arguments)}var ii=e.i(373431);let ia=e_.default.div.withConfig({displayName:"CustomerStoryPopover",componentId:"sc-145b8ca6-0"})`
  position: absolute;
  width: 300px;
  bottom: calc(100% + 16px);
  left: 0;
  transform: translateY(-28px);
  opacity: 0;
  padding: 8px 16px 16px 16px;
  z-index: 2;
  transition:
    transform ${(0,ii.spring)(.28,.24).toString()},
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
`,ir=(0,e_.default)(ia).withConfig({displayName:"PlatformCapabilities__Popover",componentId:"sc-227e7ada-0"})`
  left: 50%;
  transform: translate(-50%, 16px);
  bottom: 100%;
  padding: 8px 16px;
  width: fit-content;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    display: none;
  }
`,io=e_.default.p.withConfig({displayName:"PlatformCapabilities__Description",componentId:"sc-227e7ada-1"})`
  width: 22ch;
`,is=[{title:"Notebook",icon:(0,em.jsx)(e5.NotebookIcon,{}),description:(0,em.jsx)(em.Fragment,{children:"AI-powered assistance directly into your Hex projects. Write and edit code, ask questions, and get answers all in one place."})},{title:"Threads",icon:(0,em.jsx)(e5.ThreadsIcon,{}),description:(0,em.jsx)(em.Fragment,{children:"Ask natural language questions and get AI-powered insights based on semantic models and warehouse tables"})},{title:"Workbench",icon:(0,em.jsx)(e5.SemanticModelsIcon,{}),description:(0,em.jsx)(em.Fragment,{children:"Write and edit semantic resources using natural language. Describe the model you want and let the agent generate or update it."})},{title:"Apps",icon:(0,em.jsx)(e5.AppBuilderIcon,{}),description:(0,em.jsx)(em.Fragment,{children:"Chat with App enables users to ask natural language questions and get AI-powered insights from published apps."})},{title:"CLI",icon:(0,em.jsx)(e5.CLIIcon,{}),description:(0,em.jsx)(em.Fragment,{children:"Interact directly with Hex from your terminal. Get projects, create cells, and manage users from the command line."})}],il=e_.default.div.withConfig({displayName:"PlatformCapabilities__Row",componentId:"sc-227e7ada-2"})`
  display: grid;
  grid-template-columns: repeat(${is.length}, min-content);
  gap: ${(0,eC.generateFluidPxScale)(32,100)};
  padding: 48px 0;
  align-items: center;
  margin-bottom: 1rem;
`,id=e_.default.div.withConfig({displayName:"PlatformCapabilities__ThroughLine",componentId:"sc-227e7ada-3"})`
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  height: 1px;
  border-bottom: 1px dashed ${({theme:e})=>(0,e7.gridColorSelector)(e,"major")};
`,ic=e_.default.div.withConfig({displayName:"PlatformCapabilities__RowSubgrid",componentId:"sc-227e7ada-4"})`
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: subgrid;
`,ip=e_.default.div.withConfig({displayName:"PlatformCapabilities__Capability",componentId:"sc-227e7ada-5"})`
  padding: 12px;
  background-color: ${({theme:e})=>e.palette.fg100};
  position: relative;
  grid-row: 1 / -1;
  cursor: help;

  @media (hover: hover) {
    &:hover ${ir} {
      opacity: 1;
      transform: translate(-50%, 0);
    }
  }

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
`,iu=e_.default.div.withConfig({displayName:"PlatformCapabilities__Title",componentId:"sc-227e7ada-6"})`
  text-align: center;
  white-space: nowrap;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  font-size: ${({theme:e})=>e.fontSize.EXTRA_SMALL};
  color: ${({theme:e})=>e.palette.fg1100};
`;function im(){return(0,em.jsxs)(il,{children:[(0,em.jsx)(id,{}),(0,em.jsx)(ic,{children:is.map(e=>(0,em.jsxs)(ip,{children:[(0,em.jsx)(ir,{children:(0,em.jsx)(io,{className:"text-s",children:e.description})}),e.icon,(0,em.jsx)(iu,{className:"annotation",children:e.title})]},e.title))})]})}let ih={ManageContext:{color:"#5CB198",icon:(0,em.jsx)(e5.NotebookIcon,{color:"inherit"}),title:"Unified context",description:"Activate logic from dbt, Git repos, and docs, then build on it in Hex or throughout your stack.",anchor:"unified-context",noise:"url(/images/home-2025/textures/noise-jade-128x128.png)",illustration:(0,em.jsx)(function(e){return ey.createElement("svg",it({xmlns:"http://www.w3.org/2000/svg",width:283,height:186,fill:"none",viewBox:"0 0 283 186"},e),ep||(ep=ey.createElement("g",{clipPath:"url(#illustration-unified-context_svg__a)"},ey.createElement("path",{stroke:"#FBF9F9",strokeOpacity:.5,strokeWidth:.5,d:"M0 0h160v160H0z",transform:"matrix(.86603 .5 -.86603 .5 140.5 15.235)"}),ey.createElement("path",{stroke:"#FBF9F9",strokeOpacity:.5,strokeWidth:.5,d:"M0 0h160v10H0z",transform:"matrix(.86603 .5 0 1 1.936 95.235)"}),ey.createElement("path",{fill:"url(#illustration-unified-context_svg__b)",stroke:"#FBF9F9",strokeOpacity:.5,strokeWidth:.5,d:"M0 0h160v10H0z",transform:"matrix(.86603 -.5 0 1 140.5 175.235)"}),ey.createElement("path",{fill:"#14141C",d:"M46.279 55.281 142.029 0l140.295 81-95.75 55.281z"}),ey.createElement("path",{stroke:"#FBF9F9",strokeOpacity:.7,strokeWidth:.5,d:"M.433 0h110.062v161.5H.433z",transform:"matrix(.86603 -.5 .86603 .5 46.337 55.498)"}),ey.createElement("path",{fill:"#14141C",d:"m0 82 42.289-24.415 140.296 81L140.296 163z"}),ey.createElement("path",{stroke:"#FBF9F9",strokeOpacity:.7,strokeWidth:.5,d:"M.433 0h48.331v161.5H.433z",transform:"matrix(.86603 -.5 .86603 .5 .058 82.216)"}),ey.createElement("path",{fill:"#FBF9F9",d:"M20.857 85.096 48.942 68.88l6.306 3.64-28.085 16.216zM71.014 56l19.428-11.216 4.362 2.518-19.428 11.217zM150.688 102l8.66-5 4.33 2.5-8.66 5zM90.981 57.472l15.408-8.896 4.362 2.519-15.408 8.895zM118.528 67.188l10.048-5.801 4.363 2.518-10.049 5.802z"}),ey.createElement("path",{fill:"#5CB198",d:"m182.731 96.5 10.048-5.802 4.363 2.519-10.049 5.802z"}),ey.createElement("path",{fill:"#FBF9F9",d:"m151.248 86.078 10.048-5.801 4.363 2.518-10.049 5.802zM129.435 73.485l16.747-9.67 4.362 2.52-16.747 9.668zM140.341 79.782l4.02-2.321 4.361 2.518-4.019 2.321zM198.531 113.378l4.02-2.32 4.361 2.518-4.019 2.32zM187.273 106.878l4.02-2.32 4.361 2.518-4.019 2.32zM114.339 57.013l7.369-4.254 4.362 2.518-7.369 4.255z"}),ey.createElement("path",{fill:"#5CB198",d:"m93.121 43.237 8.039-4.641 4.362 2.518-8.039 4.641zM163.269 94.737l42.435-24.5 4.33 2.5-42.435 24.5zM103.839 37.048l45.9-26.5 4.33 2.5-45.9 26.5zM109.069 47.03l6.699-3.868 4.362 2.518-6.699 3.868zM118.447 41.615l3.35-1.934 4.362 2.518-3.35 1.934zM207.846 119l3.35-1.934 4.362 2.519-3.35 1.934zM124.476 38.134l41.57-24 4.33 2.5-41.57 24zM213.875 115.519l41.57-24 4.33 2.5-41.57 24zM124.364 51.199l38.105-22 4.33 2.5-38.105 22zM194.856 102.5l38.105-22 4.33 2.5-38.105 22zM131.257 59.84l28.136-16.245 4.362 2.518-28.136 16.245zM195.459 89.151l11.258-6.5 4.33 2.5-11.258 6.5zM209.366 81.122l26.847-15.5 4.33 2.5-26.847 15.5zM163.976 78.73l28.136-16.245 4.362 2.519-28.136 16.244zM148.862 62.269l8.709-5.028 4.362 2.518-8.709 5.028zM147.04 75.914l8.709-5.028 4.362 2.518-8.709 5.028zM205.23 109.51l8.709-5.028 4.362 2.519-8.709 5.028z"}),ey.createElement("path",{fill:"url(#illustration-unified-context_svg__c)",d:"M0 0h19.011v4.855H0z",transform:"matrix(.86603 -.5 .86603 .5 33.47 92.378)"}),ey.createElement("path",{fill:"url(#illustration-unified-context_svg__d)",d:"M0 0h25.72v4.855H0z",transform:"matrix(.86603 -.5 .86603 .5 43.982 98.447)"}),ey.createElement("path",{fill:"url(#illustration-unified-context_svg__e)",d:"M0 0h11.183v4.855H0z",transform:"matrix(.86603 -.5 .86603 .5 54.493 104.515)"}),ey.createElement("path",{stroke:"#5CB198",strokeWidth:.346,d:"m98.599 61.483 51.961 30M170.99 103.279l36.374 21"}),ey.createElement("path",{fill:"#FBF9F9",d:"m110.101 59.46-3.149 1.818 3.283.078zM178.494 98.947l-3.149 1.818 3.283.077z"}))),eu||(eu=ey.createElement("defs",null,ey.createElement("clipPath",{id:"illustration-unified-context_svg__a"},ey.createElement("path",{fill:"#fff",d:"M0 0h283v186H0z"})),ey.createElement("clipPath",{id:"illustration-unified-context_svg__f"},ey.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"})),ey.createElement("clipPath",{id:"illustration-unified-context_svg__g"},ey.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"})),ey.createElement("clipPath",{id:"illustration-unified-context_svg__h"},ey.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"})),ey.createElement("clipPath",{id:"illustration-unified-context_svg__i"},ey.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"})),ey.createElement("pattern",{id:"illustration-unified-context_svg__b",width:1,height:1,patternTransform:"scale(3.3)",patternUnits:"userSpaceOnUse",preserveAspectRatio:"none",viewBox:"0 0 15 15"},ey.createElement("g",{clipPath:"url(#illustration-unified-context_svg__f)"},ey.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"}),ey.createElement("path",{fill:"#14141C",d:"M0 0h7.5v7.5H0zM7.5 7.5H15V15H7.5z"}))),ey.createElement("pattern",{id:"illustration-unified-context_svg__c",width:1,height:1,patternTransform:"scale(3.3)",patternUnits:"userSpaceOnUse",preserveAspectRatio:"none",viewBox:"0 0 15 15"},ey.createElement("g",{clipPath:"url(#illustration-unified-context_svg__g)"},ey.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"}),ey.createElement("path",{fill:"#14141C",d:"M0 0h7.5v7.5H0zM7.5 7.5H15V15H7.5z"}))),ey.createElement("pattern",{id:"illustration-unified-context_svg__d",width:1,height:1,patternTransform:"scale(3.3)",patternUnits:"userSpaceOnUse",preserveAspectRatio:"none",viewBox:"0 0 15 15"},ey.createElement("g",{clipPath:"url(#illustration-unified-context_svg__h)"},ey.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"}),ey.createElement("path",{fill:"#14141C",d:"M0 0h7.5v7.5H0zM7.5 7.5H15V15H7.5z"}))),ey.createElement("pattern",{id:"illustration-unified-context_svg__e",width:1,height:1,patternTransform:"scale(3.3)",patternUnits:"userSpaceOnUse",preserveAspectRatio:"none",viewBox:"0 0 15 15"},ey.createElement("g",{clipPath:"url(#illustration-unified-context_svg__i)"},ey.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"}),ey.createElement("path",{fill:"#14141C",d:"M0 0h7.5v7.5H0zM7.5 7.5H15V15H7.5z"}))))))},{})},ObserveInteractions:{color:"#CDA849",icon:(0,em.jsx)(e5.AppBuilderIcon,{color:"inherit"}),title:"Observable everywhere",description:"Track and audit any answer no matter where questions are asked: Hex, Slack, MCP, CLI.",anchor:"observable-everywhere",noise:"url(/images/home-2025/textures/noise-citrine-128x128.png)",illustration:(0,em.jsx)(function(e){return ey.createElement("svg",ie({xmlns:"http://www.w3.org/2000/svg",width:283,height:186,fill:"none",viewBox:"0 0 283 186"},e),z||(z=ey.createElement("path",{stroke:"#FBF9F9",strokeOpacity:.5,strokeWidth:.5,d:"M0 0h160v160H0z",transform:"matrix(.86603 .5 -.86603 .5 139.564 15.235)"})),H||(H=ey.createElement("path",{stroke:"#FBF9F9",strokeOpacity:.5,strokeWidth:.5,d:"M0 0h160v10H0z",transform:"matrix(.86603 .5 0 1 1 95.235)"})),I||(I=ey.createElement("path",{fill:"url(#illustration-observe-interactions_svg__a)",stroke:"#FBF9F9",strokeOpacity:.5,strokeWidth:.5,d:"M0 0h160v10H0z",transform:"matrix(.86603 -.5 0 1 139.564 175.235)"})),S||(S=ey.createElement("path",{fill:"#14141C",d:"M1 82.5 142.162 1l48.497 28-141.162 81.5z"})),N||(N=ey.createElement("path",{stroke:"#FBF9F9",strokeOpacity:.7,strokeWidth:.5,d:"M.433 0h162.5v55.5H.433z",transform:"matrix(.86603 -.5 .86603 .5 1.058 82.716)"})),A||(A=ey.createElement("path",{fill:"#14141C",d:"m54.694 113.5 84.87-49 86.603 50-84.87 49z"})),P||(P=ey.createElement("path",{stroke:"#FBF9F9",strokeOpacity:.7,strokeWidth:.5,d:"M.433 0h97.5v99.5H.433z",transform:"matrix(.86603 -.5 .86603 .5 54.752 113.717)"})),T||(T=ey.createElement("path",{fill:"#14141C",d:"m145.626 61 50.23-29 86.602 50-50.23 29z"})),F||(F=ey.createElement("path",{stroke:"#FBF9F9",strokeOpacity:.7,strokeWidth:.5,d:"M.433 0h57.5v99.5H.433z",transform:"matrix(.86603 -.5 .86603 .5 145.684 61.217)"})),B||(B=ey.createElement("path",{stroke:"#FBF9F9",strokeDasharray:"1 1",strokeOpacity:.5,strokeWidth:.5,d:"m97.206 127.045 65.818-38M122.227 141.49l65.818-38M109.717 134.268l65.818-38M134.738 148.713l65.818-38"})),L||(L=ey.createElement("path",{fill:"#CDA849",d:"m139.632 131.122-37.93-.482 38.425 22.185 66.684-38.5-28.904-16.688-16.539 15.438-16.582 3.685z"})),O||(O=ey.createElement("path",{fill:"#FBF9F9",d:"m99.942 130.624 1.732-1 1.788 1.032-1.732 1zM136.895 130.959l1.732-1 1.788 1.032-1.733 1zM142.653 116.283l1.732-1 1.788 1.032-1.733 1zM159.273 112.879l1.732-1 1.788 1.032-1.733 1zM176.456 97.8l1.732-1 1.788 1.032-1.733 1z"})),R||(R=ey.createElement("path",{fill:"url(#illustration-observe-interactions_svg__b)",d:"M0 0h21v5H0z",transform:"matrix(.86603 -.5 .86603 .5 80.674 119.5)"})),W||(W=ey.createElement("path",{fill:"url(#illustration-observe-interactions_svg__c)",d:"M0 0h52v5H0z",transform:"matrix(.86603 -.5 .86603 .5 71.148 114)"})),U||(U=ey.createElement("path",{fill:"url(#illustration-observe-interactions_svg__d)",d:"M0 0h8v3H0z",transform:"matrix(.86603 -.5 .86603 .5 159.482 63)"})),V||(V=ey.createElement("path",{fill:"url(#illustration-observe-interactions_svg__e)",d:"M0 0h8v3H0z",transform:"matrix(.86603 -.5 .86603 .5 170.741 69.5)"})),D||(D=ey.createElement("path",{fill:"url(#illustration-observe-interactions_svg__f)",d:"M0 0h8v3H0z",transform:"matrix(.86603 -.5 .86603 .5 205.382 89.5)"})),G||(G=ey.createElement("path",{fill:"url(#illustration-observe-interactions_svg__g)",d:"M0 0h8v3H0z",transform:"matrix(.86603 -.5 .86603 .5 182 76)"})),Q||(Q=ey.createElement("path",{fill:"url(#illustration-observe-interactions_svg__h)",d:"M0 0h8v3H0z",transform:"matrix(.86603 -.5 .86603 .5 194.124 83)"})),q||(q=ey.createElement("path",{fill:"url(#illustration-observe-interactions_svg__i)",d:"M0 0h8v3H0z",transform:"matrix(.86603 -.5 .86603 .5 216.64 96)"})),Y||(Y=ey.createElement("path",{fill:"url(#illustration-observe-interactions_svg__j)",d:"M0 0h8v3H0z",transform:"matrix(.86603 -.5 .86603 .5 227.898 102.5)"})),X||(X=ey.createElement("path",{fill:"#FBF9F9",d:"m102.325 107 6.928-4 4.33 2.5-6.928 4z"})),K||(K=ey.createElement("path",{fill:"#CDA849",d:"m29.579 89 5.196-3L55.56 98l-5.196 3zM64.22 54l5.196-3 33.775 19.5-5.196 3z"})),Z||(Z=ey.createElement("path",{fill:"#CDA849",fillOpacity:.8,d:"m141.296 40.5 5.196-3 6.928 4-5.196 3z"})),J||(J=ey.createElement("path",{fill:"#CDA849",d:"m30.445 80.5 5.196-3 27.713 16-5.196 3zM94.53 62.5l5.197-3 11.258 6.5-5.196 3zM130.038 25l5.196-3 25.98 15-5.195 3zM52.961 84.5l5.197-3 12.99 7.5-5.196 3zM108.387 61.5l5.196-3 5.196 3-5.196 3zM145.626 25l5.196-3 18.187 10.5-5.196 3z"})),ee||(ee=ey.createElement("path",{stroke:"#FBF9F9",strokeDasharray:"1 1.5",strokeOpacity:.5,strokeWidth:.5,d:"m51.23 61.5 34.64 20M98.86 34l34.642 20"})),et||(et=ey.createElement("path",{stroke:"#FBF9F9",strokeOpacity:.2,strokeWidth:.5,d:"m166.411 67 40.703-23.5M177.669 73.5 218.372 50M188.928 80l40.703-23.5M201.052 87l40.703-23.5M212.31 93.5 253.013 70M223.568 100l40.704-23.5M234.827 106.5 275.53 83M155.152 60.5 195.856 37"})),ei||(ei=ey.createElement("circle",{cx:1.5,cy:1.5,r:1.5,fill:"#CDA849",transform:"matrix(.86603 -.5 .86603 .5 172.906 55.25)"})),ea||(ea=ey.createElement("circle",{cx:1.5,cy:1.5,r:1.5,fill:"#CDA849",transform:"matrix(.86603 -.5 .86603 .5 184.165 61.75)"})),er||(er=ey.createElement("circle",{cx:1.5,cy:1.5,r:1.5,fill:"#CDA849",transform:"matrix(.86603 -.5 .86603 .5 207.547 75.25)"})),en||(en=ey.createElement("circle",{cx:1.5,cy:1.5,r:1.5,fill:"#CDA849",transform:"matrix(.86603 -.5 .86603 .5 195.423 68.25)"})),eo||(eo=ey.createElement("circle",{cx:1.5,cy:1.5,r:1.5,fill:"#CDA849",transform:"matrix(.86603 -.5 .86603 .5 218.805 81.75)"})),es||(es=ey.createElement("circle",{cx:1.5,cy:1.5,r:1.5,fill:"#CDA849",transform:"matrix(.86603 -.5 .86603 .5 230.063 88.25)"})),el||(el=ey.createElement("circle",{cx:1.5,cy:1.5,r:1.5,fill:"#CDA849",transform:"matrix(.86603 -.5 .86603 .5 241.322 94.75)"})),ed||(ed=ey.createElement("path",{stroke:"#CDA849",strokeOpacity:.5,strokeWidth:.5,d:"m182.432 51.25 18.62-10.75M193.258 57.5l18.619-10.75M204.516 64l18.62-10.75M217.506 71.5l18.62-10.75M227.898 77.5l18.62-10.75M239.157 84l18.619-10.75M250.416 90.5l18.619-10.75"})),ec||(ec=ey.createElement("defs",null,ey.createElement("clipPath",{id:"illustration-observe-interactions_svg__k"},ey.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"})),ey.createElement("clipPath",{id:"illustration-observe-interactions_svg__l"},ey.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"})),ey.createElement("clipPath",{id:"illustration-observe-interactions_svg__m"},ey.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"})),ey.createElement("clipPath",{id:"illustration-observe-interactions_svg__n"},ey.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"})),ey.createElement("clipPath",{id:"illustration-observe-interactions_svg__o"},ey.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"})),ey.createElement("clipPath",{id:"illustration-observe-interactions_svg__p"},ey.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"})),ey.createElement("clipPath",{id:"illustration-observe-interactions_svg__q"},ey.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"})),ey.createElement("clipPath",{id:"illustration-observe-interactions_svg__r"},ey.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"})),ey.createElement("clipPath",{id:"illustration-observe-interactions_svg__s"},ey.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"})),ey.createElement("clipPath",{id:"illustration-observe-interactions_svg__t"},ey.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"})),ey.createElement("pattern",{id:"illustration-observe-interactions_svg__a",width:1,height:1,patternTransform:"scale(3.3)",patternUnits:"userSpaceOnUse",preserveAspectRatio:"none",viewBox:"0 0 15 15"},ey.createElement("g",{clipPath:"url(#illustration-observe-interactions_svg__k)"},ey.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"}),ey.createElement("path",{fill:"#14141C",d:"M0 0h7.5v7.5H0zM7.5 7.5H15V15H7.5z"}))),ey.createElement("pattern",{id:"illustration-observe-interactions_svg__b",width:1,height:1,patternTransform:"scale(3.3)",patternUnits:"userSpaceOnUse",preserveAspectRatio:"none",viewBox:"0 0 15 15"},ey.createElement("g",{clipPath:"url(#illustration-observe-interactions_svg__l)"},ey.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"}),ey.createElement("path",{fill:"#14141C",d:"M0 0h7.5v7.5H0zM7.5 7.5H15V15H7.5z"}))),ey.createElement("pattern",{id:"illustration-observe-interactions_svg__c",width:1,height:1,patternTransform:"scale(3.3)",patternUnits:"userSpaceOnUse",preserveAspectRatio:"none",viewBox:"0 0 15 15"},ey.createElement("g",{clipPath:"url(#illustration-observe-interactions_svg__m)"},ey.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"}),ey.createElement("path",{fill:"#14141C",d:"M0 0h7.5v7.5H0zM7.5 7.5H15V15H7.5z"}))),ey.createElement("pattern",{id:"illustration-observe-interactions_svg__d",width:1,height:1,patternTransform:"scale(3.3)",patternUnits:"userSpaceOnUse",preserveAspectRatio:"none",viewBox:"0 0 15 15"},ey.createElement("g",{clipPath:"url(#illustration-observe-interactions_svg__n)"},ey.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"}),ey.createElement("path",{fill:"#14141C",d:"M0 0h7.5v7.5H0zM7.5 7.5H15V15H7.5z"}))),ey.createElement("pattern",{id:"illustration-observe-interactions_svg__e",width:1,height:1,patternTransform:"scale(3.3)",patternUnits:"userSpaceOnUse",preserveAspectRatio:"none",viewBox:"0 0 15 15"},ey.createElement("g",{clipPath:"url(#illustration-observe-interactions_svg__o)"},ey.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"}),ey.createElement("path",{fill:"#14141C",d:"M0 0h7.5v7.5H0zM7.5 7.5H15V15H7.5z"}))),ey.createElement("pattern",{id:"illustration-observe-interactions_svg__f",width:1,height:1,patternTransform:"scale(3.3)",patternUnits:"userSpaceOnUse",preserveAspectRatio:"none",viewBox:"0 0 15 15"},ey.createElement("g",{clipPath:"url(#illustration-observe-interactions_svg__p)"},ey.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"}),ey.createElement("path",{fill:"#14141C",d:"M0 0h7.5v7.5H0zM7.5 7.5H15V15H7.5z"}))),ey.createElement("pattern",{id:"illustration-observe-interactions_svg__g",width:1,height:1,patternTransform:"scale(3.3)",patternUnits:"userSpaceOnUse",preserveAspectRatio:"none",viewBox:"0 0 15 15"},ey.createElement("g",{clipPath:"url(#illustration-observe-interactions_svg__q)"},ey.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"}),ey.createElement("path",{fill:"#14141C",d:"M0 0h7.5v7.5H0zM7.5 7.5H15V15H7.5z"}))),ey.createElement("pattern",{id:"illustration-observe-interactions_svg__h",width:1,height:1,patternTransform:"scale(3.3)",patternUnits:"userSpaceOnUse",preserveAspectRatio:"none",viewBox:"0 0 15 15"},ey.createElement("g",{clipPath:"url(#illustration-observe-interactions_svg__r)"},ey.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"}),ey.createElement("path",{fill:"#14141C",d:"M0 0h7.5v7.5H0zM7.5 7.5H15V15H7.5z"}))),ey.createElement("pattern",{id:"illustration-observe-interactions_svg__i",width:1,height:1,patternTransform:"scale(3.3)",patternUnits:"userSpaceOnUse",preserveAspectRatio:"none",viewBox:"0 0 15 15"},ey.createElement("g",{clipPath:"url(#illustration-observe-interactions_svg__s)"},ey.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"}),ey.createElement("path",{fill:"#14141C",d:"M0 0h7.5v7.5H0zM7.5 7.5H15V15H7.5z"}))),ey.createElement("pattern",{id:"illustration-observe-interactions_svg__j",width:1,height:1,patternTransform:"scale(3.3)",patternUnits:"userSpaceOnUse",preserveAspectRatio:"none",viewBox:"0 0 15 15"},ey.createElement("g",{clipPath:"url(#illustration-observe-interactions_svg__t)"},ey.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"}),ey.createElement("path",{fill:"#14141C",d:"M0 0h7.5v7.5H0zM7.5 7.5H15V15H7.5z"}))))))},{})},AuditTestDeploy:{color:"#A477B2",icon:(0,em.jsx)(e5.SemanticModelsIcon,{color:"inherit"}),title:"Improves with use",description:"Hex learns from every interaction, sharpening context and improving accuracy on the fly.",anchor:"improves-with-use",noise:"url(/images/home-2025/textures/noise-amythyst-128x128.png)",illustration:(0,em.jsx)(function(e){return ey.createElement("svg",t7({xmlns:"http://www.w3.org/2000/svg",width:283,height:186,fill:"none",viewBox:"0 0 283 186"},e),a||(a=ey.createElement("path",{stroke:"#FBF9F9",strokeOpacity:.5,strokeWidth:.5,d:"M0 0h160v160H0z",transform:"matrix(.86603 .5 -.86603 .5 140.564 15.235)"})),r||(r=ey.createElement("path",{stroke:"#FBF9F9",strokeOpacity:.5,strokeWidth:.5,d:"M0 0h160v10H0z",transform:"matrix(.86603 .5 0 1 2 95.235)"})),n||(n=ey.createElement("path",{fill:"url(#illustration-audit-test-deploy_svg__a)",stroke:"#FBF9F9",strokeOpacity:.5,strokeWidth:.5,d:"M0 0h160v10H0z",transform:"matrix(.86603 -.5 0 1 140.564 175.235)"})),o||(o=ey.createElement("path",{fill:"#14141C",d:"M1 81.5 93.665 28l140.296 81-92.665 53.5z"})),s||(s=ey.createElement("path",{stroke:"#FBF9F9",strokeOpacity:.7,strokeWidth:.5,d:"M.433 0h106.5v161.5H.433z",transform:"matrix(.86603 -.5 .86603 .5 1.058 81.716)"})),l||(l=ey.createElement("path",{fill:"#14141C",d:"m98.86 25 43.302-25 140.296 81-43.301 25z"})),d||(d=ey.createElement("path",{stroke:"#FBF9F9",strokeOpacity:.7,strokeWidth:.5,d:"M.433 0h49.5v161.5H.433z",transform:"matrix(.86603 -.5 .86603 .5 98.919 25.216)"})),c||(c=ey.createElement("path",{stroke:"#FBF9F9",strokeOpacity:.5,strokeWidth:.5,d:"M.433 0h93.5v88.5H.433z",transform:"matrix(.86603 -.5 .86603 .5 37.431 95.716)"})),p||(p=ey.createElement("path",{fill:"url(#illustration-audit-test-deploy_svg__b)",d:"M0 0h23v4H0z",transform:"matrix(.86603 -.5 .86603 .5 19.186 85)"})),u||(u=ey.createElement("path",{fill:"url(#illustration-audit-test-deploy_svg__c)",d:"M0 0h33v4H0z",transform:"matrix(.86603 -.5 .86603 .5 26.115 89)"})),m||(m=ey.createElement("path",{fill:"#14141C",d:"m64.22 105 28.579-16.5 5.196 3-28.58 16.5z"})),h||(h=ey.createElement("path",{fill:"url(#illustration-audit-test-deploy_svg__d)",d:"M0 0h6v4H0z",transform:"matrix(.86603 -.5 .86603 .5 42.57 71.5)"})),f||(f=ey.createElement("path",{fill:"url(#illustration-audit-test-deploy_svg__e)",d:"M0 0h15v4H0z",transform:"matrix(.86603 -.5 .86603 .5 51.23 66.5)"})),g||(g=ey.createElement("path",{fill:"#A477B2",d:"m45.168 100 81.406-47 61.488 35.5-81.407 47zM110.119 25.5l6.928-4 2.598 1.5-6.928 4zM118.779 20.5l15.588-9 2.599 1.5-15.589 9z"})),x||(x=ey.createElement("path",{stroke:"#A477B2",strokeWidth:.5,d:"M.433 0h49.5v6.5H.433z",transform:"matrix(.86603 -.5 .86603 .5 174.263 68.716)"})),b||(b=ey.createElement("path",{stroke:"#FBF9F9",strokeOpacity:.5,strokeWidth:.5,d:"m116.181 29 32.909-19M119.646 31l32.908-19M175.071 63l32.909-19M197.588 76l32.909-19M170.741 60.5l32.909-19M193.258 73.5l32.909-19"})),v||(v=ey.createElement("path",{stroke:"#A477B2",strokeWidth:.5,d:"m124.842 146 32.909-19M178.535 110l23.383-13.5"})),y||(y=ey.createElement("path",{stroke:"#FBF9F9",strokeOpacity:.5,strokeWidth:.5,d:"m166.411 58 32.909-19M188.928 71l32.909-19"})),w||(w=ey.createElement("path",{stroke:"#A477B2",strokeWidth:.5,d:"m120.512 143.5 53.693-31"})),_||(_=ey.createElement("path",{stroke:"#FBF9F9",strokeOpacity:.5,strokeWidth:.5,d:"m139.564 42.5 10.392-6M142.162 44l10.392-6M144.76 45.5l10.393-6M123.109 33l12.991-7.5"})),C||(C=ey.createElement("path",{fill:"#14141C",d:"m62.488 99 9.526-5.5 3.464 2-9.526 5.5zM91.066 115.5l19.919-11.5 3.464 2-19.918 11.5z"})),k||(k=ey.createElement("path",{fill:"#14141C",fillOpacity:.4,d:"m69.416 103 22.517-13 2.598 1.5-22.517 13zM79.808 109l19.919-11.5 2.598 1.5-19.919 11.5zM97.129 119l28.579-16.5 2.598 1.5-28.579 16.5zM74.612 106l11.259-6.5 2.598 1.5-11.259 6.5zM87.603 98.5 107.52 87l2.598 1.5L90.201 100zM102.325 122l19.919-11.5 2.598 1.5-19.919 11.5zM95.397 88l22.517-13 2.598 1.5-22.517 13zM121.377 73l10.392-6 2.598 1.5-10.392 6z"})),j||(j=ey.createElement("path",{fill:"#A477B2",d:"M181.133 66.5 214.908 47l2.598 1.5L183.731 68z"})),E||(E=ey.createElement("path",{fill:"#14141C",fillOpacity:.4,d:"m128.306 101 6.062-3.5 2.598 1.5-6.062 3.5zM107.521 125l6.062-3.5 2.598 1.5-6.062 3.5zM136.966 96l12.124-7 2.598 1.5-12.124 7z"})),M||(M=ey.createElement("path",{stroke:"#14141C",strokeWidth:.5,d:"m53.828 99 53.26 30.75"})),$||($=ey.createElement("defs",null,ey.createElement("clipPath",{id:"illustration-audit-test-deploy_svg__f"},ey.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"})),ey.createElement("clipPath",{id:"illustration-audit-test-deploy_svg__g"},ey.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"})),ey.createElement("clipPath",{id:"illustration-audit-test-deploy_svg__h"},ey.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"})),ey.createElement("clipPath",{id:"illustration-audit-test-deploy_svg__i"},ey.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"})),ey.createElement("clipPath",{id:"illustration-audit-test-deploy_svg__j"},ey.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"})),ey.createElement("pattern",{id:"illustration-audit-test-deploy_svg__a",width:1,height:1,patternTransform:"scale(3.3)",patternUnits:"userSpaceOnUse",preserveAspectRatio:"none",viewBox:"0 0 15 15"},ey.createElement("g",{clipPath:"url(#illustration-audit-test-deploy_svg__f)"},ey.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"}),ey.createElement("path",{fill:"#14141C",d:"M0 0h7.5v7.5H0zM7.5 7.5H15V15H7.5z"}))),ey.createElement("pattern",{id:"illustration-audit-test-deploy_svg__b",width:1,height:1,patternTransform:"scale(3.3)",patternUnits:"userSpaceOnUse",preserveAspectRatio:"none",viewBox:"0 0 15 15"},ey.createElement("g",{clipPath:"url(#illustration-audit-test-deploy_svg__g)"},ey.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"}),ey.createElement("path",{fill:"#14141C",d:"M0 0h7.5v7.5H0zM7.5 7.5H15V15H7.5z"}))),ey.createElement("pattern",{id:"illustration-audit-test-deploy_svg__c",width:1,height:1,patternTransform:"scale(3.3)",patternUnits:"userSpaceOnUse",preserveAspectRatio:"none",viewBox:"0 0 15 15"},ey.createElement("g",{clipPath:"url(#illustration-audit-test-deploy_svg__h)"},ey.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"}),ey.createElement("path",{fill:"#14141C",d:"M0 0h7.5v7.5H0zM7.5 7.5H15V15H7.5z"}))),ey.createElement("pattern",{id:"illustration-audit-test-deploy_svg__d",width:1,height:1,patternTransform:"scale(3.3)",patternUnits:"userSpaceOnUse",preserveAspectRatio:"none",viewBox:"0 0 15 15"},ey.createElement("g",{clipPath:"url(#illustration-audit-test-deploy_svg__i)"},ey.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"}),ey.createElement("path",{fill:"#14141C",d:"M0 0h7.5v7.5H0zM7.5 7.5H15V15H7.5z"}))),ey.createElement("pattern",{id:"illustration-audit-test-deploy_svg__e",width:1,height:1,patternTransform:"scale(3.3)",patternUnits:"userSpaceOnUse",preserveAspectRatio:"none",viewBox:"0 0 15 15"},ey.createElement("g",{clipPath:"url(#illustration-audit-test-deploy_svg__j)"},ey.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"}),ey.createElement("path",{fill:"#14141C",d:"M0 0h7.5v7.5H0zM7.5 7.5H15V15H7.5z"}))))))},{})}},ig=e_.default.div.withConfig({displayName:"SectionPurposeBuilt__ArrowIndicatorCirc",componentId:"sc-44003e35-0"})`
  position: relative;
  height: 48px;
  width: 48px;
  display: grid;
  place-content: center;
  border-radius: 999px;
  background-color: ${({theme:e})=>e.palette.bg300};
  position: absolute;
  bottom: 16px;
  right: 16px;
  box-shadow:
    0 4px 16px -3px rgba(0 0 0 / 1),
    0 1px 4px -1px rgba(0 0 0 / 1);
  color: ${({theme:e})=>e.palette.fgLoud};
  transform: translateX(56px) rotate(0.25turn);
  opacity: 0;
  transition: opacity, transform;
  transition-duration: var(--hover-transition-duration);
  transition-timing-function: var(--hover-transition-timing-function);

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border: 1px dashed ${({theme:e})=>e.palette.fg1100};
    border-radius: inherit;
    animation: rotate 8s linear infinite;

    @keyframes rotate {
      from {
        transform: rotate(1turn);
      }
    }
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    display: none;
  }
`;function ix(){return(0,em.jsx)(ig,{children:(0,em.jsx)(t4,{})})}let ib=(0,e_.default)(te.LayoutSubgrid).withConfig({displayName:"SectionPurposeBuilt__MainGrid",componentId:"sc-44003e35-1"})`
  border-top: 1px solid ${({theme:e})=>e.palette.fg700};
`,iv=(0,e_.default)(te.LayoutSubgrid).withConfig({displayName:"SectionPurposeBuilt__WorkflowGrid",componentId:"sc-44003e35-2"})`
  display: grid;
  background-color: ${({theme:e})=>e.palette.fg100};
`,iy=e_.default.div.withConfig({displayName:"SectionPurposeBuilt__WorkflowItemsGrid",componentId:"sc-44003e35-3"})`
  grid-column: 2 / -2;
  grid-row: 1 / -1;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  max-width: 1230px;
  margin: 0 auto;
  gap: 0 32px;
  padding: 0 32px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 16px;
  }
`,iw=e_.default.div.withConfig({displayName:"SectionPurposeBuilt__WorkflowItemsGridLines",componentId:"sc-44003e35-4"})`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: grid;
  grid-template-columns: subgrid;
`,i_=e_.default.div.withConfig({displayName:"SectionPurposeBuilt__WorkflowItems",componentId:"sc-44003e35-5"})`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: grid;
  grid-template-columns: subgrid;
`,iC=(0,e_.default)(te.LayoutSubgrid).withConfig({displayName:"SectionPurposeBuilt__WorkflowHRule",componentId:"sc-44003e35-6"})`
  position: relative;
  height: 1px;
  grid-row: 1 / -1;
  margin-top: 160px;
  grid-column: 1 / -1;
  background-color: ${({theme:e})=>e.palette.fg600};
`,ik=e_.default.div.withConfig({displayName:"SectionPurposeBuilt__PerlinNoise",componentId:"sc-44003e35-7"})`
  position: absolute;
  inset: 0;
  opacity: 0;
  background-image: var(--workflow-noise);
  background-size: 256px 256px;
  animation: translate-noise 4s linear infinite;
  transition: opacity;
  transition-duration: var(--hover-transition-duration);
  transition-timing-function: var(--hover-transition-timing-function);

  @keyframes translate-noise {
    from {
      background-position: 50% 0px;
    }
    to {
      background-position: 50% 256px;
    }
  }
`,ij=e_.default.div.withConfig({displayName:"SectionPurposeBuilt__BgUnhover",componentId:"sc-44003e35-8"})`
  position: absolute;
  inset: 0;
  background-color: ${({theme:e})=>e.palette.fg800};
  transition: opacity 0.1s linear;
`,iE=e_.default.div.withConfig({displayName:"SectionPurposeBuilt__GradientMask",componentId:"sc-44003e35-9"})`
  position: absolute;
  inset: 0;
  mask-image: linear-gradient(
    to bottom,
    rgba(255 255 255 / 0.8),
    rgba(255 255 255 / 0.1) 60%
  );
`;function iM(){return(0,em.jsx)(iE,{children:(0,em.jsxs)(eU.DotGridMask,{children:[(0,em.jsx)(ij,{}),(0,em.jsx)(ik,{})]})})}let i$=e_.default.a.withConfig({displayName:"SectionPurposeBuilt__Workflow",componentId:"sc-44003e35-10"})`
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

  grid-column: span 2;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  padding: 24px;
  margin-top: 40px;
  border-bottom: 0;
  border-radius: 1px;
  border: 1px solid ${({theme:e})=>(0,e7.gridColorSelector)(e,"major")};
  background-color: ${({theme:e})=>e.palette.fg100};

  transition: border, transform, box-shadow, background-color;
  transition-duration: var(--hover-transition-duration);
  transition-timing-function: var(--hover-transition-timing-function);

  @media (min-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    &:hover,
    &:focus-visible {
      background-color: ${({theme:e})=>e.palette.bg400};
      box-shadow:
        0px 8px 20px -4px rgba(0, 0, 0, 0.2),
        0px 4px 3px -1px rgba(0, 0, 0, 0.12);
      border-radius: 6px;
      border-color: var(--workflows-color);
      transform: translateY(-4px);

      ${ik} {
        opacity: 1;
      }

      ${ig} {
        transform: none;
        opacity: 1;
      }
    }
  }

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
`,iz=e_.default.div.withConfig({displayName:"SectionPurposeBuilt__WorkflowVRule",componentId:"sc-44003e35-11"})`
  width: 1px;
  background: ${({theme:e})=>e.palette.fg500};
  grid-row: 1 / -1;
  margin-top: 100px;

  &[data-i='1'] {
    grid-column: 2;
    justify-self: flex-start;
  }

  &[data-i='2'] {
    grid-column: 1 / -1;
    justify-self: center;
  }

  &[data-i='3'] {
    grid-column: -3;
    justify-self: flex-end;
  }
`,iH=e_.default.div.withConfig({displayName:"SectionPurposeBuilt__IllustrationContainer",componentId:"sc-44003e35-12"})`
  height: 110px;
  margin: 28px auto -32px auto;
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  isolation: isolate;
  z-index: 2;

  svg {
    height: 188px;
    position: absolute;
    bottom: 0;
    margin: 0 auto;
  }
`,iI=e_.default.div.withConfig({displayName:"SectionPurposeBuilt__Content",componentId:"sc-44003e35-13"})`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 12px;
  max-width: 46ch;
  padding-top: 35px;
`,iS=e_.default.div.withConfig({displayName:"SectionPurposeBuilt__SectionTitle",componentId:"sc-44003e35-14"})`
  position: relative;
  display: grid;
  grid-template-columns: subgrid;
  grid-column: 2 / -2;
`,iN=e_.default.div.withConfig({displayName:"SectionPurposeBuilt__Headlines",componentId:"sc-44003e35-15"})`
  position: relative;
  grid-column: 2 / -2;
  padding: 80px 16px 24px 16px;
  justify-items: center;
  max-width: 980px;
  margin: 0 auto;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    grid-column: 1 / -1;
  }
`,iA=e_.default.div.withConfig({displayName:"SectionPurposeBuilt__OnePlatform",componentId:"sc-44003e35-16"})`
  position: relative;
  height: 56px;
  grid-column: 2 / -2;
  border-bottom: 1px solid ${({theme:e})=>e.palette.fg700};
  border-left: 1px solid ${({theme:e})=>e.palette.fg700};
  border-right: 1px solid ${({theme:e})=>e.palette.fg700};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    grid-column: 1 / -1;
    margin: 0 32px;
  }
`,iP=e_.default.div.withConfig({displayName:"SectionPurposeBuilt__PlatformLabel",componentId:"sc-44003e35-17"})`
  position: absolute;
  padding: 4px 12px;
  white-space: nowrap;
  background-color: ${({theme:e})=>e.palette.bg500};
  border: 1px solid ${({theme:e})=>(0,e7.gridColorSelector)(e,"major")};
  color: ${({theme:e})=>e.palette.fg1100};
  font-size: ${({theme:e})=>e.fontSize.EXTRA_SMALL};
  left: 50%;
  bottom: 0;
  border-radius: 1px;
  transform: translate(-50%, 50%);

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
`,iT=e_.default.div.withConfig({displayName:"SectionPurposeBuilt__AccentL",componentId:"sc-44003e35-18"})`
  position: absolute;
  left: -1px;
  top: -1px;
  height: 6px;
  width: 6px;

  border-left: 1px solid ${({theme:e})=>e.palette.fg1200};
  border-top: 1px solid ${({theme:e})=>e.palette.fg1200};

  &[data-right] {
    border-left: none;
    border-right: 1px solid ${({theme:e})=>e.palette.fg1200};
    left: auto;
    right: -1px;
  }
`,iF=e_.default.div.withConfig({displayName:"SectionPurposeBuilt__AccentPlus",componentId:"sc-44003e35-19"})`
  grid-column: 2;
  color: ${({theme:e})=>e.palette.fg1200};
  margin-top: -3.5px;
  margin-left: -4.5px;
  height: 8px;
  width: 8px;
  display: grid;
  align-items: center;
  justify-items: center;
  justify-content: center;
  place-items: center;
  z-index: 1;

  &::before,
  &::after {
    content: '';
    display: block;
    background-color: currentColor;
    grid-area: 1 / -1;
  }

  &::before {
    width: 1px;
    height: 8px;
  }

  &::after {
    width: 8px;
    height: 1px;
  }

  &[data-right] {
    margin-left: -3.5px;
    grid-column: -2;
  }
`,iB=e_.default.div.withConfig({displayName:"SectionPurposeBuilt__PlatformCapabilitiesWrapper",componentId:"sc-44003e35-20"})`
  grid-column: 1 / -1;
  display: grid;
  justify-content: stretch;
  justify-items: center;

  &::before {
    content: '';
    width: 1px;
    border-right: 1px solid ${({theme:e})=>e.palette.fg500};
  }

  &::before,
  & > * {
    grid-row: 1 / -1;
    grid-column: 1 / -1;
    grid-area: 1 / -1;
  }
`;function iL(){return(0,em.jsx)(ib,{children:(0,em.jsxs)(iv,{children:[(0,em.jsx)(e7.ContentMarginLine,{}),(0,em.jsxs)(iS,{children:[(0,em.jsx)(iT,{}),(0,em.jsx)(iT,{"data-right":!0}),(0,em.jsx)(iN,{children:(0,em.jsx)(eV.GradientHeader,{$alignText:"center",renderAs:"h2",styleAs:"h1",children:"The fastest way to sharpen agents on your data"})})]}),(0,em.jsx)(e7.ContentMarginLine,{"data-right":!0}),(0,em.jsxs)(te.LayoutSubgrid,{children:[(0,em.jsx)(e7.ContentMarginLine,{style:{gridRow:"1 / -1"}}),(0,em.jsxs)(iC,{children:[(0,em.jsx)(iF,{}),(0,em.jsx)(iF,{"data-right":!0})]}),(0,em.jsxs)(iy,{children:[(0,em.jsx)(iw,{children:(0,em.jsx)(iz,{"data-i":"2"})}),(0,em.jsxs)(i_,{children:[Object.entries(ih).map(([e,t])=>(0,em.jsxs)(i$,{href:`#${t.anchor}`,style:{"--workflows-color":(0,ew.rgba)(t.color,.2),"--workflow-noise":t.noise},children:[(0,em.jsx)(iM,{}),(0,em.jsx)(iH,{children:t.illustration}),(0,em.jsxs)(iI,{children:[(0,em.jsx)(t$.Heading,{renderAs:"h3",styleAs:"h4",children:t.title}),(0,em.jsx)(tz.Text,{children:t.description})]}),(0,em.jsx)(ix,{})]},e)),(0,em.jsx)(iA,{children:(0,em.jsx)(iP,{className:"annotation",children:"IMPROVE AGENT ACCURACY"})})]}),(0,em.jsx)(iB,{children:(0,em.jsx)(im,{})})]}),(0,em.jsx)(e7.ContentMarginLine,{"data-right":!0,style:{gridRow:"1 / -1"}})]})]})})}function iO(){return(0,em.jsxs)(ex.BasicPageRow,{topBorder:!0,children:[(0,em.jsx)(tL,{description:"Hex turns definitions and logic into trusted business context for agents to reason from, without locking you in.",id:"unified-context",title:"Unified context"}),(0,em.jsxs)(tJ,{children:[(0,em.jsx)(tK.InfoTextImageCard,{buttonLink:tc.DOCS_LINKS.ContextManagement,buttonText:"Explore context management",description:"Markdown, code, table metadata. Hex ingests and understands it for trusted answers without exhaustive modeling.",image:"context-studio/illustration-guides.png",imageHeight:420,imageWidth:700,title:"Activate existing logic"}),(0,em.jsx)(tK.InfoTextImageCard,{buttonLink:tc.DOCS_LINKS.SemanticModels,buttonText:"Explore semantic models",description:"Layer in new logic in Hex, dbt, or your warehouse. Hex keeps it synced and versioned, without locking you into one tool.",image:"context-studio/illustration-workbench.png",imageHeight:420,imageWidth:700,title:"Build from anywhere"})]})]})}let iR={quote:(0,em.jsxs)(em.Fragment,{children:["“",(0,em.jsx)("strong",{children:"Context Studio gives us the confidence to roll out agents on our data."})," ","It's something I check every day — seeing context gaps and suggested improvements surfaced automatically provides a practical way for us to bring trusted AI self-service to the business.”"]}),logoPath:"/images/logos/zoe-logo.svg",authorName:"Craig W.",authorCompany:"Zoe",authorTitle:"Staff Data Engineer"};e.s(["ContextStudioPageContent",0,function(){return(0,em.jsxs)(em.Fragment,{children:[(0,em.jsx)(tk,{}),(0,em.jsx)(iL,{}),(0,em.jsx)(iO,{}),(0,em.jsx)(t5,{}),(0,em.jsx)(t0,{}),(0,em.jsx)(ef.FullWidthQuote,{...iR}),(0,em.jsx)(tQ,{}),(0,em.jsx)(tM,{}),(0,em.jsx)("div",{style:{gridColumn:"1 / -1"},children:(0,em.jsx)(eg.OutroTout,{className:"full-width",copy:"Get in touch with us to see a demo or find out which plan is right for you.",title:"Bring speed & trust together in Hex"})}),(0,em.jsx)(ex.BasicPageRow,{topBorder:!0,children:(0,em.jsx)(eh.FAQ,{items:ev})})]})}],552589)}]);