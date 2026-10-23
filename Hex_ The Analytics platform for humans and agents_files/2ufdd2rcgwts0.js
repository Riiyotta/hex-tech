(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,650638,e=>{"use strict";var t=e.i(843476),a=e.i(997053),i=e.i(321688),o=e.i(558202),n=e.i(809573),r=e.i(480985),s=e.i(613938),l=e.i(739876),d=e.i(581444),p=e.i(271645),c=e.i(689573),m=e.i(387652),u=e.i(887652),h=e.i(193594),x=e.i(706736),g=e.i(360571),f=e.i(665419),w=e.i(154213);e.i(726497);var y=e.i(778888),C=e.i(316983),b=e.i(21066),v=e.i(344273),j=e.i(217504);let k=(0,a.default)(d.LayoutSubgrid).withConfig({displayName:"PromptHero__TopGridLines",componentId:"sc-176263ce-0"})`
  height: 156px;
  border-bottom: 1px solid ${({theme:e})=>(0,l.gridColorSelector)(e,"minor")};

  @media (max-width: ${({theme:e})=>e.mediaQuery.MOBILE}) {
    height: 124px;
  }
`,L=a.default.div.withConfig({displayName:"PromptHero__AccentL",componentId:"sc-176263ce-1"})`
  position: absolute;
  bottom: -1px;
  border-bottom: 1px solid ${({theme:e})=>e.palette.fg1200};
  height: 6px;
  width: 6px;
  z-index: 1;

  &[data-position='br'] {
    right: -1px;
    border-right: 1px solid ${({theme:e})=>e.palette.fg1200};
  }

  &[data-position='bl'] {
    left: -1px;
    border-left: 1px solid ${({theme:e})=>e.palette.fg1200};
  }
`,I=(0,a.default)(d.LayoutSubgrid).withConfig({displayName:"PromptHero__Bg",componentId:"sc-176263ce-2"})`
  position: relative;
  background-color: ${({theme:e})=>(0,h.darken)(.015,e.palette.bg300)};
  background-image: ${({theme:e})=>(0,l.backgroundImageCheckered)(e,{color:e.palette.fgA300})};

  padding: ${(0,g.generateFluidPxScale)(12,24)} ${(0,g.generateFluidPxScale)(0,12)}
    ${(0,g.generateFluidPxScale)(16,32)} ${(0,g.generateFluidPxScale)(0,12)};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-image: ${({theme:e})=>e.paperTextureCssVars.img};
    background-size: ${({theme:e})=>e.paperTextureCssVars.size};
    opacity: ${({theme:e})=>e.paperTextureCssVars.opacity};
    mix-blend-mode: ${({theme:e})=>e.paperTextureCssVars.mixBlendMode};
  }

  perspective: 1000px;
`,S=a.default.div.withConfig({displayName:"PromptHero__HeroGlass",componentId:"sc-176263ce-3"})`
  grid-column: 2 / -2;
  position: relative;
  margin: 0 auto;
  width: 100%;
  overflow: clip;
  display: flex;
  max-width: calc(${({theme:e})=>e.maxWidth.GRID_CONTENT});
  border-radius: 12px;
  padding: ${(0,g.generateFluidPxScale)(12,40)} ${(0,g.generateFluidPxScale)(8,48)};
  min-height: 656px;
  background-image: radial-gradient(
    circle at 50% 130%,
    ${({theme:e})=>(0,h.lighten)(.043,e.palette.bg500)} 0%,
    ${({theme:e})=>e.palette.bg300} 80%
  );
  box-shadow: ${({theme:e})=>{let t=`0 0.5px 0px 0.75px ${(0,h.lighten)(.125,e.palette.bg500)}`;return[`0 0 24px 0px ${e.palette.bg400} inset`,t,"6px 37px 10px 0px rgba(0, 0, 0, 0.01), 4px 24px 10px 0px rgba(0, 0, 0, 0.04), 2px 13px 8px 0px rgba(0, 0, 0, 0.14), 1px 6px 6px 0px rgba(0, 0, 0, 0.24), 0px 1px 3px 0px rgba(0, 0, 0, 0.27)"].join(", ")}};

  @media (max-width: ${({theme:e})=>e.mediaQuery.MOBILE}) {
    min-height: 720px;
  }

  transform-origin: 50% 300%;
  animation: glass-enter 2s ease-in-out;
  animation-fill-mode: both;
  animation-duration: 673.93ms;
  animation-timing-function: linear(
    0 0%,
    0.003805 1%,
    0.014538 2%,
    0.031232 3%,
    0.053003 4%,
    0.07904 5%,
    0.108604 6%,
    0.141025 7.000000000000001%,
    0.175696 8%,
    0.212072 9%,
    0.249665 10%,
    0.288039 11%,
    0.326809 12%,
    0.365636 13%,
    0.404224 14.000000000000002%,
    0.442316 15%,
    0.479693 16%,
    0.516166 17%,
    0.551581 18%,
    0.585809 19%,
    0.618746 20%,
    0.650314 21%,
    0.680451 22%,
    0.709116 23%,
    0.736284 24%,
    0.761944 25%,
    0.786098 26%,
    0.808758 27%,
    0.829946 28.000000000000004%,
    0.849694 28.999999999999996%,
    0.868037 30%,
    0.885019 31%,
    0.900688 32%,
    0.915094 33%,
    0.928291 34%,
    0.940337 35%,
    0.951288 36%,
    0.961202 37%,
    0.970138 38%,
    0.978156 39%,
    0.985311 40%,
    0.991662 41%,
    0.997264 42%,
    1.002171 43%,
    1.006434 44%,
    1.010105 45%,
    1.013232 46%,
    1.015861 47%,
    1.018037 48%,
    1.0198 49%,
    1.02119 50%,
    1.022245 51%,
    1.023 52%,
    1.023488 53%,
    1.023738 54%,
    1.02378 55.00000000000001%,
    1.023639 56.00000000000001%,
    1.023341 56.99999999999999%,
    1.022907 57.99999999999999%,
    1.022357 59%,
    1.021712 60%,
    1.020988 61%,
    1.0202 62%,
    1.019362 63%,
    1.018487 64%,
    1.017586 65%,
    1.01667 66%,
    1.015747 67%,
    1.014824 68%,
    1.013909 69%,
    1.013007 70%,
    1.012124 71%,
    1.011263 72%,
    1.010429 73%,
    1.009623 74%,
    1.008849 75%,
    1.008108 76%,
    1.007401 77%,
    1.006729 78%,
    1.006093 79%,
    1.005493 80%,
    1.004929 81%,
    1.0044 82%,
    1.003906 83%,
    1.003446 84%,
    1.003019 85%,
    1.002624 86%,
    1.00226 87%,
    1.001926 88%,
    1.00162 89%,
    1.001341 90%,
    1.001088 91%,
    1.000859 92%,
    1.000653 93%,
    1.000468 94%,
    1.000304 95%,
    1.000158 96%,
    1.00003 97%
  );

  @keyframes glass-enter {
    from {
      opacity: 0.4;
      transform: translateZ(-120px) translateY(60px) rotateX(-3deg);
    }
  }
`,_=a.default.div.withConfig({displayName:"PromptHero__IllustrationOverlay",componentId:"sc-176263ce-4"})`
  position: absolute;
  inset: 0;
  z-index: 0;
`,N=a.default.div.withConfig({displayName:"PromptHero__PerlinMask",componentId:"sc-176263ce-5"})`
  position: absolute;
  inset: 0;
  mask-image: radial-gradient(
    circle at 50% 80%,
    rgba(0 0 0 / 0.12) 80px,
    transparent 300px
  );
`,A=a.default.div.withConfig({displayName:"PromptHero__PromptPosition",componentId:"sc-176263ce-6"})`
  position: absolute;
  top: 33%;
  left: 50%;
  width: 100%;
  transform-origin: 50% 800px;
  transform: translate(-50%, -50%);
  z-index: 1;

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    top: 30%;
  }

  animation: enter;
  animation-fill-mode: both;
  animation-delay: 0.1s;
  animation-duration: 584.78ms;
  animation-timing-function: linear(
    0 0%,
    0.005778 1%,
    0.02191 2%,
    0.046706 3%,
    0.078623 4%,
    0.116264 5%,
    0.158372 6%,
    0.203822 7.000000000000001%,
    0.251614 8%,
    0.300869 9%,
    0.350819 10%,
    0.400801 11%,
    0.450247 12%,
    0.498678 13%,
    0.545697 14.000000000000002%,
    0.59098 15%,
    0.63427 16%,
    0.675371 17%,
    0.714137 18%,
    0.750474 19%,
    0.784325 20%,
    0.815672 21%,
    0.844527 22%,
    0.870928 23%,
    0.894935 24%,
    0.916627 25%,
    0.936096 26%,
    0.953448 27%,
    0.968796 28.000000000000004%,
    0.982258 28.999999999999996%,
    0.993959 30%,
    1.004023 31%,
    1.012574 32%,
    1.019738 33%,
    1.025636 34%,
    1.030386 35%,
    1.034101 36%,
    1.036891 37%,
    1.038859 38%,
    1.040102 39%,
    1.040713 40%,
    1.040776 41%,
    1.040371 42%,
    1.039571 43%,
    1.038441 44%,
    1.037043 45%,
    1.035432 46%,
    1.033656 47%,
    1.03176 48%,
    1.029783 49%,
    1.027759 50%,
    1.025717 51%,
    1.023683 52%,
    1.021678 53%,
    1.019722 54%,
    1.017829 55.00000000000001%,
    1.016011 56.00000000000001%,
    1.014277 56.99999999999999%,
    1.012635 57.99999999999999%,
    1.01109 59%,
    1.009646 60%,
    1.008303 61%,
    1.007063 62%,
    1.005923 63%,
    1.004884 64%,
    1.00394 65%,
    1.00309 66%,
    1.002329 67%,
    1.001652 68%,
    1.001056 69%,
    1.000534 70%,
    1.000083 71%
  );

  @keyframes enter {
    from {
      opacity: 0;
      filter: blur(1px);
      transform: translate(-50%, -50%) scale(0.96) translateY(32px);
    }
  }
`,$=a.default.div.withConfig({displayName:"PromptHero__Info",componentId:"sc-176263ce-7"})`
  position: relative;
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: flex-end;
  padding: 8px;

  transform-origin: 50% 800px;
  animation: hero-info-enter;
  animation-fill-mode: both;
  animation-delay: 0.2s;
  animation-duration: 584.78ms;
  animation-timing-function: linear(
    0 0%,
    0.005778 1%,
    0.02191 2%,
    0.046706 3%,
    0.078623 4%,
    0.116264 5%,
    0.158372 6%,
    0.203822 7.000000000000001%,
    0.251614 8%,
    0.300869 9%,
    0.350819 10%,
    0.400801 11%,
    0.450247 12%,
    0.498678 13%,
    0.545697 14.000000000000002%,
    0.59098 15%,
    0.63427 16%,
    0.675371 17%,
    0.714137 18%,
    0.750474 19%,
    0.784325 20%,
    0.815672 21%,
    0.844527 22%,
    0.870928 23%,
    0.894935 24%,
    0.916627 25%,
    0.936096 26%,
    0.953448 27%,
    0.968796 28.000000000000004%,
    0.982258 28.999999999999996%,
    0.993959 30%,
    1.004023 31%,
    1.012574 32%,
    1.019738 33%,
    1.025636 34%,
    1.030386 35%,
    1.034101 36%,
    1.036891 37%,
    1.038859 38%,
    1.040102 39%,
    1.040713 40%,
    1.040776 41%,
    1.040371 42%,
    1.039571 43%,
    1.038441 44%,
    1.037043 45%,
    1.035432 46%,
    1.033656 47%,
    1.03176 48%,
    1.029783 49%,
    1.027759 50%,
    1.025717 51%,
    1.023683 52%,
    1.021678 53%,
    1.019722 54%,
    1.017829 55.00000000000001%,
    1.016011 56.00000000000001%,
    1.014277 56.99999999999999%,
    1.012635 57.99999999999999%,
    1.01109 59%,
    1.009646 60%,
    1.008303 61%,
    1.007063 62%,
    1.005923 63%,
    1.004884 64%,
    1.00394 65%,
    1.00309 66%,
    1.002329 67%,
    1.001652 68%,
    1.001056 69%,
    1.000534 70%,
    1.000083 71%
  );

  @keyframes hero-info-enter {
    from {
      opacity: 0.001;
      filter: blur(2px);
      transform: scale(0.99) translateY(12px);
    }
  }
`,H=a.default.div.withConfig({displayName:"PromptHero__Actions",componentId:"sc-176263ce-8"})`
  display: flex;
  gap: 16px;
  flex-grow: 0;

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    flex-direction: column;
    gap: 8px;
    justify-content: stretch;
    align-self: stretch;
  }
`,T=a.default.div.withConfig({displayName:"PromptHero__HGroup",componentId:"sc-176263ce-9"})`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    align-items: stretch;
  }
`,M=a.default.p.withConfig({displayName:"PromptHero__P",componentId:"sc-176263ce-10"})`
  font-weight: ${({theme:e})=>e.fontWeight.LIGHT};
  max-width: 50ch;

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    text-align: center;
  }
`,P=(0,a.default)(C.AnnouncementPillLink).withConfig({displayName:"PromptHero__PromptHeroAnnouncementPillLink",componentId:"sc-176263ce-11"})`
  margin-bottom: 0;
  position: absolute;
  top: ${(0,g.generateFluidPxScale)(24,40)};
  left: ${(0,g.generateFluidPxScale)(14,46)};

  animation: prompt-hero-announcement-enter;
  animation-duration: 0.8s;
  animation-fill-mode: both;
  animation-delay: 0.1s;

  @keyframes prompt-hero-announcement-enter {
    from {
      opacity: 0;
      filter: blur(4px);
    }
  }
`,R=a.default.div.withConfig({displayName:"PromptHero__IlloPlacement",componentId:"sc-176263ce-12"})`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
`,E=a.default.h1.withConfig({displayName:"PromptHero__H1",componentId:"sc-176263ce-13"})`
  max-width: 12ch;

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    text-align: center;
  }
`;function W(){return(0,t.jsxs)("svg",{fill:"none",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("path",{d:"M13.5 6C13.5 9.03757 11.0376 11.5 8 11.5C4.96243 11.5 2.5 9.03757 2.5 6C2.5 2.96243 4.96243 0.5 8 0.5C11.0376 0.5 13.5 2.96243 13.5 6Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M13.5 10C13.5 13.0376 11.0376 15.5 8 15.5C4.96243 15.5 2.5 13.0376 2.5 10C2.5 6.96243 4.96243 4.5 8 4.5C11.0376 4.5 13.5 6.96243 13.5 10Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})]})}function V({customerBanner:e}){let[,a]=(0,c.useAnimate)(),i=(0,u.useMotionValue)(0),o=(0,p.useRef)(null),n=(0,m.useInView)(o),r=(0,p.useCallback)(()=>{a(i,[0,1],{duration:1.8})},[a,i]);return(0,t.jsxs)(d.LayoutSubgrid,{style:{zIndex:1},children:[(0,t.jsxs)(k,{children:[(0,t.jsx)(l.CheckeredMargin,{}),(0,t.jsxs)(d.LayoutSubgrid,{"data-content-grid":!0,style:{position:"relative"},children:[(0,t.jsx)(L,{"data-position":"br"}),(0,t.jsx)(L,{"data-position":"bl"}),(0,t.jsx)(l.GridRule,{$column:3}),(0,t.jsx)(l.GridRule,{$column:9})]}),(0,t.jsx)(l.CheckeredMargin,{"data-right":!0})]}),(0,t.jsxs)(I,{ref:o,children:[(0,t.jsxs)(S,{children:[(0,t.jsxs)(_,{children:[(0,t.jsx)(N,{children:(0,t.jsx)(b.PerlinNoise,{})}),n?(0,t.jsx)(R,{children:(0,t.jsx)(v.AiIllustrationCanvas,{desktopHeight:1700,desktopWidth:1700,duration:100,normalizedInnerRadius:.175,pathDuration:.6,progress:i,segments:42})}):null]}),(0,t.jsx)(P,{icon:(0,t.jsx)(W,{}),pillLabel:"AI analytics platform",subCopy:"Explore AI in Hex",to:f.DOCS_LINKS.AiOverview}),(0,t.jsx)(A,{children:n?(0,t.jsx)(j.HexPrompt,{onPromptChange:r}):null}),(0,t.jsx)($,{children:(0,t.jsxs)(T,{children:[(0,t.jsx)(E,{className:y.headingStyles.h1,children:"Anyone can analyze with Hex"}),(0,t.jsx)(M,{className:y.textStyles.l,children:"Ask questions in natural language. Analyze with or without code. Trusted answers grounded in your organization’s context."}),(0,t.jsxs)(H,{children:[(0,t.jsx)(x.Button,{href:f.SIGNUP_LINK,stylez:"loud",text:"Get started for free",trackingLabel:w.TRACKING_LABELS.AiProductPagePrimaryCTA}),(0,t.jsx)(x.Button,{href:f.INTERNAL_LINKS.RequestADemo,text:"Request a demo",trackingLabel:w.TRACKING_LABELS.AiProductPageSecondaryCTA})]})]})})]}),e]})]})}var O=e.i(998990),G=e.i(846932),Z=e.i(168087),D=e.i(991709),Q=e.i(430388);let q={workflows:{notebooks:{color:"#5CB198",icon:(0,t.jsx)(Q.NotebookIcon,{color:"inherit"}),anchor:"notebooks",noise:"url(/images/home-2025/textures/noise-jade-128x128.png)"},self_serve:{color:"#A477B2",icon:(0,t.jsx)(Q.ExploreIcon,{color:"inherit"}),anchor:"self-serve",noise:"url(/images/home-2025/textures/noise-amythyst-128x128.png)"}}};var B=e.i(449492);let z=a.default.fieldset.withConfig({displayName:"Workflow__Selector",componentId:"sc-48e41c02-0"})`
  margin-top: 16px;
  border: 0;
  padding: 0;

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    margin-top: 64px;
  }
`,F=a.default.input.withConfig({displayName:"Workflow__Radio",componentId:"sc-48e41c02-1"})`
  opacity: 0;
  position: absolute;
`,K=a.default.span.withConfig({displayName:"Workflow__SelectorTitle",componentId:"sc-48e41c02-2"})`
  display: block;
  color: ${({theme:e})=>`color-mix(in srgb, ${e.palette.fgLoud}, transparent 68%)`};
  transition: color 0.08s;
  max-width: 26rem;
  text-wrap: balance;
`,U=a.default.span.withConfig({displayName:"Workflow__SelectorContainer",componentId:"sc-48e41c02-3"})`
  position: relative;
  display: block;
  padding: 16px 32px;
  border-left: 1px solid
    ${({theme:e})=>`color-mix(in srgb, ${e.palette.fgLoud}, transparent 76%)`};

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    padding: 16px;
    padding-right: 0;
  }

  &::before,
  &::after {
    content: '';
    opacity: 0;
    position: absolute;
    inset: 0 auto 0 -1px;
    width: 1px;
    background-color: ${({theme:e})=>`color-mix(in srgb, ${e.palette.fgLoud}, transparent 76%)`};
  }

  &::after {
    transform: scaleY(var(--progress, 0));
    transform-origin: top center;
    background-color: var(
      --radio-group-selection-color,
      ${({theme:e})=>e.palette.fgLoud}
    );

    box-shadow: 0 0 8px 0.5px
      var(
        --radio-group-selection-glow-color,
        ${({theme:e})=>e.palette.fgLoud}
      );
  }
`,X=a.default.span.withConfig({displayName:"Workflow__Expander",componentId:"sc-48e41c02-4"})`
  --in-out-base: cubic-bezier(0.25, 0.1, 0.25, 1);
  display: grid;
  grid-template-rows: 0fr;
  overflow: hidden;
  transition: grid-template-rows 0.28s var(--in-out-base);
`,Y=a.default.span.withConfig({displayName:"Workflow__ExpanderContent",componentId:"sc-48e41c02-5"})`
  --in-out-base: cubic-bezier(0.25, 0.1, 0.25, 1);
  overflow: hidden;
  opacity: 0;
  transform: translateY(12px);
  transition:
    opacity 0.6s var(--in-out-base),
    transform 0.28s var(--in-out-base);
`,J=a.default.label.withConfig({displayName:"Workflow__Label",componentId:"sc-48e41c02-6"})`
  display: grid;

  &:hover ${K} {
    color: ${({theme:e})=>`color-mix(in srgb, ${e.palette.fgLoud}, transparent 28%)`};
  }

  & input:checked + ${U} {
    &::before,
    &::after {
      opacity: 1;
    }

    ${K} {
      color: ${({theme:e})=>e.palette.fgLoud};
    }
  }

  &:has(input:checked) ${X} {
    grid-template-rows: 1fr;

    ${Y} {
      opacity: 1;
      transform: none;
    }
  }

  & > * {
    grid-area: 1 / -1;
  }
`,ee=a.default.span.withConfig({displayName:"Workflow__OptionText",componentId:"sc-48e41c02-7"})`
  display: block;
  max-width: 22rem;
  padding: 8px 0 0 0;
`,et=(0,a.default)(x.Button).withConfig({displayName:"Workflow__OptionButton",componentId:"sc-48e41c02-8"})`
  margin-top: 16px;
  width: min-content;
  white-space: nowrap;
`,ea=(0,p.forwardRef)(function({color:e,style:a,...i},o){return(0,t.jsx)(z,{ref:o,...i,style:{"--radio-group-selection-color":e,"--radio-group-selection-glow-color":(0,h.rgba)(e,.24),...a||{}}})}),ei=function({title:e,children:a,group:i,checked:o,value:n,onChange:r,isInView:s,onAnimationComplete:l,disableAutoplay:d}){let c=(0,p.useRef)(null),m=(0,p.useRef)(!1);return(0,p.useEffect)(()=>{if(d)return;let e=c.current;if(!e||!s||!o)return;m.current=!1;let t=(0,B.animate)(e,{"--progress":[0,1]},{duration:6,ease:"linear",onComplete:()=>{m.current=!0,l()}});return()=>{m.current||t.cancel()}},[s,o,l,d]),(0,t.jsxs)(J,{ref:c,style:d?{"--progress":+!!o}:void 0,children:[(0,t.jsx)(F,{checked:o,name:i+"-radio-group",type:"radio",value:n,onChange:r}),(0,t.jsxs)(U,{children:[(0,t.jsx)(K,{className:y.headingStyles.h4,children:e}),(0,t.jsx)(X,{children:(0,t.jsx)(Y,{children:a})})]})]})},eo=function(e){return(0,t.jsx)(ee,{...e,className:y.textStyles.base+" "+(e.className||"")})};function en(e){let[t,a]=(0,p.useReducer)((t,a)=>{switch(a.type){case"increment":{let a=e.findIndex(e=>e.value===t);return(a+=1)>=e.length?e[0].value:e[a].value}case"set":return a.payload;default:return t}},e[0].value),i=(0,p.useCallback)(()=>{a({type:"increment"})},[a]),o=(0,p.useCallback)(e=>{a({type:"set",payload:e})},[a]);return{value:t,option:e.find(e=>e.value===t)??e[0],increment:i,set:o}}var er=e.i(273454);let es=a.default.div.withConfig({displayName:"WorkflowSectionShared__Wrapper",componentId:"sc-87a629ce-0"})`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-bottom: 1px solid ${({theme:e})=>(0,l.gridColorSelector)(e,"major")};
  padding: 120px 0 120px 0;

  &[data-no-top-padding] {
    padding-top: 0;
  }
`,el=a.default.div.withConfig({displayName:"WorkflowSectionShared__Masthead",componentId:"sc-87a629ce-1"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 96px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    width: 90%;
    margin: 0 auto 16px auto;
  }
`,ed=a.default.p.withConfig({displayName:"WorkflowSectionShared__Annotation",componentId:"sc-87a629ce-2"})`
  margin-bottom: 20px;
  text-transform: uppercase;
`,ep=(0,a.default)(er.GradientHeader).withConfig({displayName:"WorkflowSectionShared__Title",componentId:"sc-87a629ce-3"})`
  max-width: 800px;
  margin-bottom: 20px;
`,ec=a.default.p.withConfig({displayName:"WorkflowSectionShared__StyledP",componentId:"sc-87a629ce-4"})`
  max-width: 900px;
  text-align: center;
  margin-bottom: 32px;
`;a.default.div.withConfig({displayName:"WorkflowSectionShared__VideoWrapper",componentId:"sc-87a629ce-5"})`
  margin: 80px auto 120px auto;
`;let em=a.default.div.withConfig({displayName:"WorkflowSectionShared__WorkflowArea",componentId:"sc-87a629ce-6"})`
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    flex-direction: column;
    align-items: flex-start;
  }
`,eu=a.default.div.withConfig({displayName:"WorkflowSectionShared__ThumbnailArea",componentId:"sc-87a629ce-7"})`
  aspect-ratio: 16 / 9;
  display: grid;
  align-items: center;
  justify-items: center;
  max-width: 780px;
  perspective: 1000px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    align-self: center;
    padding: 0 8px;
  }

  & > * {
    grid-area: 1 / 1;
  }

  video {
    border-radius: 4px;
    width: 100%;
    display: block;
  }
`,eh=a.default.div.withConfig({displayName:"WorkflowSectionShared__MediaWrapper",componentId:"sc-87a629ce-8"})`
  animation: fadeOut ease-out;
  animation-duration: 0.16s;
  animation-fill-mode: both;
  filter: brightness(0.96);

  &[data-active='true'] {
    opacity: 0;
    animation-name: fadeIn;
    animation-duration: 0.38s;
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.1);
    animation-delay: 0.16s;
    animation-fill-mode: forwards;
    z-index: 1;
  }

  @keyframes transformOut {
    from {
      transform: none;
    }
    to {
      transform: translateY(-40px) rotateX(3deg);
    }
  }
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      scale: 0.98;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0.8;
      transform: translateY(40px);
    }
    to {
      transform: none;
      opacity: 1;
    }
  }
`,ex=[{value:0,title:"Agentic workflows for data people",copy:(0,t.jsxs)(eo,{children:["Start with any question, and get to a first draft in minutes. Agents in Hex abstract away the most tedious parts of data work.",(0,t.jsx)(et,{href:f.INTERNAL_LINKS.Notebooks,text:"Discover notebooks"})]}),Media:(0,p.forwardRef)(function(e,a){return(0,t.jsx)("video",{ref:a,controls:!1,loop:!0,muted:!0,playsInline:!0,...e,children:(0,t.jsx)("source",{src:"/videos/ai/1-agentic-workflows-for-data-people.mp4",type:"video/mp4"})})})},{value:1,title:"Share your answers in data apps",copy:(0,t.jsx)(eo,{children:"Publish your analysis as a data app that anyone can explore. End-users can chat with your app to ask their own follow-up questions"}),Media:(0,p.forwardRef)(function(e,a){return(0,t.jsx)("video",{ref:a,controls:!1,loop:!0,muted:!0,playsInline:!0,...e,children:(0,t.jsx)("source",{src:"/videos/ai/2-share-your-answers-in-data-apps.mp4",type:"video/mp4"})})})},{value:2,title:"The Hex Agent understands data work",copy:(0,t.jsx)(eo,{children:"The Hex agent is a pair programmer that can write and edit code, understands the upstream & downstream dependencies in your flow, and can debug your work."}),Media:(0,p.forwardRef)(function(e,a){return(0,t.jsx)("video",{ref:a,controls:!1,loop:!0,muted:!0,playsInline:!0,...e,children:(0,t.jsx)("source",{src:"/videos/ai/3-hex-agent-understands-data-work.mp4",type:"video/mp4"})})})}];function eg(){let e=(0,p.useRef)(null),a=(0,m.useInView)(e,{margin:"-160px 0px 0px 0px",amount:.25}),{increment:i,option:o,value:n,set:r}=en(ex);return(0,t.jsxs)(es,{as:G.motion.div,...D.ANIMATIONS.SimpleFadeIn,"data-no-top-padding":!0,children:[(0,t.jsxs)(el,{children:[(0,t.jsx)(ed,{className:y.textStyles.annotation,children:"BUILD & ANALYZE"}),(0,t.jsx)(ep,{renderAs:"h2",styleAs:"h1",children:"AI, meet the world’s best notebook"}),(0,t.jsx)(ec,{className:y.textStyles.xl,children:"Powered by leading LLMs, Hex understands your data and your intent — speeding up analyses with a magical assist right where you’re already working."}),(0,t.jsx)(Z.DemoVideo,{src:"https://www.youtube.com/embed/utOLApsGvrU?autoplay=1"})]}),(0,t.jsx)(d.LayoutGridCondensed,{children:(0,t.jsxs)(em,{children:[(0,t.jsx)(ea,{ref:e,color:q.workflows.notebooks.color,style:{flexShrink:0},children:ex.map(e=>(0,t.jsx)(ei,{checked:n===e.value,disableAutoplay:!0,group:q.workflows.notebooks.anchor,isInView:a,title:e.title,value:e.value,onAnimationComplete:i,onChange:()=>{r(e.value)},children:e.copy},e.value))}),(0,t.jsx)(eu,{children:ex.map(e=>(0,t.jsx)(eh,{"data-active":o.value===e.value,children:(0,t.jsx)(e.Media,{ref:t=>{o.value!==e.value||t&&(t.currentTime=0,t.play())},autoPlay:!0})},e.value))})]})})]})}var ef=e.i(258591),ew=e.i(600376),ey=e.i(306213);let eC=(0,a.default)(G.motion.div).withConfig({displayName:"SecurityTout__Wrapper",componentId:"sc-d3fadf50-0"})`
  position: relative;
  display: flex;
  background: ${({theme:e})=>e.highlightColor10};
  background: linear-gradient(
    180deg,
    transparent 0%,
    color-mix(in srgb, ${({theme:e})=>e.highlightColor} 1.5%, transparent)
      20%,
    ${({theme:e})=>e.highlightColor05} 100%
  );
  padding: 100px 40px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    padding: 80px 40px;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    flex-direction: column;
    padding: 60px 30px;
  }
`,eb=a.default.div.withConfig({displayName:"SecurityTout__Inner",componentId:"sc-d3fadf50-1"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    align-items: start;
  }
`,ev=(0,a.default)(G.motion.div).withConfig({displayName:"SecurityTout__Top",componentId:"sc-d3fadf50-2"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  margin-bottom: 50px;
  max-width: 700px;

  p {
    margin: 8px auto 24px;
    max-width: 620px;
    text-align: center;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    margin-bottom: 60px;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    align-items: start;

    p {
      text-align: left;
    }
  }
`,ej=a.default.div.withConfig({displayName:"SecurityTout__Content",componentId:"sc-d3fadf50-3"})`
  display: flex;
  max-width: 1232px;
  margin: 0 auto;
  width: 100%;
`,ek=[{smallTitle:"Security",title:"Keeping your IP your IP",description:"All metadata is stored in a secure database running inside Hex’s architecture. Hex’s model providers do not train on customer data. Hex’s use of AI session data is governed by your applicable Terms of Service.",image:"ai/illustration-security.png",imageHeight:350,imageWidth:400,buttonText:"Learn more",buttonLink:f.DOCS_LINKS.DataPrivacy},{smallTitle:"Governance",title:"Enriched with your organization’s context",description:"AI in Hex can leverage context from semantic models, database metadata, external repositories, even existing dashboards. ",image:"ai/illustration-context-studio.png",imageHeight:350,imageWidth:400,buttonText:"Explore Context Studio",buttonLink:f.INTERNAL_LINKS.ContextStudio},{smallTitle:"CLI",title:"Bring your own agent",description:"Already analyzing data with Cursor or Claude Code? Integrate with the Hex CLI to publish your findings.",image:"ai/illustration-cli-suggestions.png",imageHeight:350,imageWidth:400,buttonText:"Check out the CLI",buttonLink:f.INTERNAL_LINKS.CLI}],eL=p.default.memo(()=>(0,t.jsx)(eC,{...D.ANIMATIONS.SimpleFadeIn,children:(0,t.jsxs)(eb,{children:[(0,t.jsxs)(ev,{children:[(0,t.jsxs)(ef.Heading,{renderAs:"h2",styleAs:"h1",children:["Accuracy"," ",(0,t.jsx)("span",{"aria-label":"shaking hands",role:"img",children:"🤝"})," ","Privacy"]}),(0,t.jsx)("p",{className:y.textStyles.xl,children:"Combining cutting-edge approaches to AI, with our industry-leading commitment to security and privacy."})]}),(0,t.jsx)(ej,{children:(0,t.jsx)(ey.InfoTextImageCardGrid,{children:ek.map((e,a)=>(0,t.jsx)(ew.InfoTextImageCard,{buttonLink:e.buttonLink,buttonText:e.buttonText,description:e.description,image:e.image,imageHeight:e.imageHeight,imageWidth:e.imageWidth,size:"small",smallTitle:e.smallTitle,title:e.title},a))})})]})}));eL.displayName="SecurityTout";let eI=[{value:0,title:"Quick questions, deep answers",copy:(0,t.jsxs)(eo,{children:["Ask questions in natural language and get thoughtful, in-depth answers you can trust — grounded in context from your data, the web, and the tools your team works in every day.",(0,t.jsx)(et,{href:f.INTERNAL_LINKS.Threads,text:"Discover Threads"})]}),Media:(0,p.forwardRef)(function(e,a){return(0,t.jsx)("video",{ref:a,controls:!1,loop:!0,muted:!0,playsInline:!0,...e,children:(0,t.jsx)("source",{src:"/videos/SelfServeQuickQuestions.mp4",type:"video/mp4"})})})},{value:1,title:"Trust built in",copy:(0,t.jsxs)(eo,{children:["Threads can leverage this context in your workspace to generate more accurate, reliable answers. The data team can create semantic models, endorse trusted data, and write AI guides to add a layer of governance.",(0,t.jsx)(et,{href:"/blog/introducing-semantic-model-sync/",text:"Curate context for agentic analytics"})]}),Media:(0,p.forwardRef)(function(e,a){return(0,t.jsx)("video",{ref:a,controls:!1,loop:!0,muted:!0,playsInline:!0,...e,children:(0,t.jsx)("source",{src:"/videos/SelfServeTrustBuiltIn.mp4",type:"video/mp4"})})})},{value:2,title:"Pop open the hood",copy:(0,t.jsxs)(eo,{children:["Every conversation in Threads becomes a Hex project that the data team can open as a notebook for help, inspection, or deeper analysis. Dig into the results with full transparency into the agent’s reasoning.",(0,t.jsx)(et,{href:f.INTERNAL_LINKS.Notebooks,text:"Deep-dive analysis in notebooks"})]}),Media:(0,p.forwardRef)(function(e,a){return(0,t.jsx)("video",{ref:a,controls:!1,loop:!0,muted:!0,playsInline:!0,...e,children:(0,t.jsx)("source",{src:"/videos/SelfServePopOpenTheHood.mp4",type:"video/mp4"})})})},{value:3,title:"Chat with a dashboard",copy:(0,t.jsxs)(eo,{children:["Hex’s data apps are great conversation starters, but it doesn’t end there. Type a follow-up question and get an answer based on the context in your app.",(0,t.jsx)(et,{href:f.DOCS_LINKS.ChatWithApp,text:"Learn more"})]}),Media:(0,p.forwardRef)(function(e,a){return(0,t.jsx)("video",{ref:a,controls:!1,loop:!0,muted:!0,playsInline:!0,...e,children:(0,t.jsx)("source",{src:"/videos/SelfServeChatWithDashboard.mp4",type:"video/mp4"})})})}];function eS(){let e=(0,p.useRef)(null),a=(0,m.useInView)(e,{margin:"-160px 0px 0px 0px",amount:.25}),{increment:i,option:o,value:n,set:r}=en(eI);return(0,t.jsxs)(es,{as:G.motion.div,...D.ANIMATIONS.SimpleFadeIn,children:[(0,t.jsxs)(el,{children:[(0,t.jsx)(ed,{className:y.textStyles.annotation,children:"SELF-SERVE & EXPLORE"}),(0,t.jsx)(ep,{renderAs:"h2",styleAs:"h1",children:"Conversational analytics for everyone"}),(0,t.jsx)(ec,{className:y.textStyles.xl,children:"Hex is your organization’s first line of defense for quick questions, freeing up your data team to focus on what matters most."}),(0,t.jsx)(Z.DemoVideo,{duration:"1 min",src:"https://www.youtube.com/embed/Pwxsa2atlB8?autoplay=1"})]}),(0,t.jsx)(d.LayoutGridCondensed,{children:(0,t.jsxs)(em,{children:[(0,t.jsx)(ea,{ref:e,color:q.workflows.self_serve.color,style:{flexShrink:0},children:eI.map(e=>(0,t.jsx)(ei,{checked:n===e.value,disableAutoplay:!0,group:q.workflows.self_serve.anchor,isInView:a,title:e.title,value:e.value,onAnimationComplete:i,onChange:()=>{r(e.value)},children:e.copy},e.value))}),(0,t.jsx)(eu,{children:eI.map(e=>(0,t.jsx)(eh,{"data-active":o.value===e.value,children:(0,t.jsx)(e.Media,{ref:t=>{o.value!==e.value||t&&(t.currentTime=0,t.play())},autoPlay:!0})},e.value))})]})})]})}var e_=e.i(657688),eN=e.i(650617);function eA(){return(0,t.jsx)("svg",{fill:"none",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M12 2C13.6569 2 15 3.34315 15 5V7C15 8.60511 13.7394 9.91579 12.1543 9.99609L12 10V11C12 12.6051 10.7394 13.9158 9.1543 13.9961L9 14H4L3.8457 13.9961C2.26055 13.9158 1 12.6051 1 11V9C1 7.34315 2.34315 6 4 6V5C4 3.34315 5.34315 2 7 2H12ZM4 7C2.89543 7 2 7.89543 2 9V11C2 12.1046 2.89543 13 4 13H9C10.1046 13 11 12.1046 11 11V10H7L6.8457 9.99609C5.26055 9.91579 4 8.60511 4 7ZM5 7C5 8.10457 5.89543 9 7 9H11C11 7.89543 10.1046 7 9 7H5ZM7 3C5.89543 3 5 3.89543 5 5V6H9C10.6569 6 12 7.34315 12 9C13.1046 9 14 8.10457 14 7V5C14 3.89543 13.1046 3 12 3H7Z",fill:"currentColor"})})}let e$=a.default.div.withConfig({displayName:"SlackbotCallout__GridLines",componentId:"sc-6dc10b34-0"})`
  position: relative;
  padding: 4px;
  grid-column: 1 / -1 !important;
  margin-top: 80px;
  margin-bottom: 80px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    grid-column: 1 / -1 !important;
    margin-left: 12px;
    margin-right: 12px;
    padding: 8px;
  }
`,eH=a.default.div.withConfig({displayName:"SlackbotCallout__GridLine",componentId:"sc-6dc10b34-1"})`
  --grid-line-color: ${({theme:e})=>e.palette.fg800};

  position: absolute;

  &[data-position='top'],
  &[data-position='bottom'] {
    width: calc(100% + 110px);
    height: 1px;
    border-top: 1px dashed var(--grid-line-color);
    left: 50%;
    transform: translateX(-50%);
    mask-image: linear-gradient(
      to right,
      transparent,
      white 80px,
      white calc(100% - 80px),
      transparent
    );
  }

  &[data-position='left'],
  &[data-position='right'] {
    width: 1px;
    height: calc(100% + 110px);
    border-left: 1px dashed var(--grid-line-color);
    top: 50%;
    transform: translateY(-50%);
    mask-image: linear-gradient(
      to bottom,
      transparent,
      white 80px,
      white calc(100% - 80px),
      transparent
    );
  }

  &[data-position='top'] {
    top: -1px;
  }

  &[data-position='bottom'] {
    bottom: -1px;
  }

  &[data-position='left'] {
    left: -1px;
  }

  &[data-position='right'] {
    right: -1px;
  }
`,eT=a.default.div.withConfig({displayName:"SlackbotCallout__Card",componentId:"sc-6dc10b34-2"})`
  position: relative;
  overflow: clip;
  background-color: ${({theme:e})=>e.palette.bg500};
  border-radius: 12px;
  padding: 32px;
  min-height: 200px;
  background-image: radial-gradient(
    circle at 66.66% 50%,
    ${({theme:e})=>(0,h.lighten)(.043,e.palette.bg500)} 0%,
    ${({theme:e})=>e.palette.bg300} 80%
  );
  box-shadow: ${({theme:e})=>{let t=`0 0.5px 0px 0.75px ${(0,h.lighten)(.125,e.palette.bg500)}`;return[`0 0 24px 0px ${e.palette.bg400} inset`,t,"6px 37px 10px 0px rgba(0, 0, 0, 0.01), 4px 24px 10px 0px rgba(0, 0, 0, 0.04), 2px 13px 8px 0px rgba(0, 0, 0, 0.14), 1px 6px 6px 0px rgba(0, 0, 0, 0.24), 0px 1px 3px 0px rgba(0, 0, 0, 0.27)"].join(", ")}};

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    padding: 32px;
    background-image: radial-gradient(
      circle at 50% 66.66%,
      ${({theme:e})=>(0,h.lighten)(.0125,e.palette.bg500)} 0%,
      ${({theme:e})=>e.palette.bg300} 160%
    );
  }
`,eM=a.default.div.withConfig({displayName:"SlackbotCallout__Eyebrow",componentId:"sc-6dc10b34-3"})`
  display: flex;
  align-items: center;
  gap: 12px;
  text-transform: uppercase;
  color: ${({theme:e})=>e.palette.fg1200};

  svg {
    display: block;
  }
`,eP=a.default.h2.withConfig({displayName:"SlackbotCallout__H2",componentId:"sc-6dc10b34-4"})`
  max-width: 32ch;
  text-wrap: balance;
`,eR=a.default.div.withConfig({displayName:"SlackbotCallout__CardLayout",componentId:"sc-6dc10b34-5"})`
  display: grid;

  & > * {
    grid-area: 1 / -1;
  }
`,eE=a.default.div.withConfig({displayName:"SlackbotCallout__PerlinNoise",componentId:"sc-6dc10b34-6"})`
  position: absolute;
  inset: 0;
  background-image: url(/images/blog-2/perlin-noise.png);
  background-size: 512px 512px;
  animation: translate-bg 48s linear infinite;
  background-color: ${({theme:e})=>(0,h.rgba)(e.palette.fg1200,.16)};
  opacity: 0.72;
  transition: all 0.3s ease-out;
  mask-image: radial-gradient(white, white 1px, transparent 1px, transparent);
  mask-size: 6px 6px;

  @keyframes translate-bg {
    from {
      background-position: 0px 0px;
    }
    to {
      background-position: 0px -512px;
    }
  }
`,eW=a.default.div.withConfig({displayName:"SlackbotCallout__RadialDotGridMask",componentId:"sc-6dc10b34-7"})`
  position: absolute;
  inset: 0;
  mask-image: radial-gradient(
    circle at 66.66% 50%,
    rgba(0 0 0 / 0.12) 0%,
    transparent 40%
  );

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    mask-image: radial-gradient(
      circle at 50% 66.66%,
      rgba(0 0 0 / 0.12) 0%,
      transparent 40%
    );
  }
`,eV=(0,a.default)(x.Button).withConfig({displayName:"SlackbotCallout__CalloutCta",componentId:"sc-6dc10b34-8"})`
  width: fit-content;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    width: auto;
  }
`,eO=a.default.div.withConfig({displayName:"SlackbotCallout__Inner",componentId:"sc-6dc10b34-9"})`
  display: flex;
  align-items: flex-end;
  z-index: 2;

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    flex-direction: column;
    align-items: center;
  }
`,eG=a.default.div.withConfig({displayName:"SlackbotCallout__LeftContent",componentId:"sc-6dc10b34-10"})`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 32px;
  flex: 1 1 auto;
  min-width: 300px;
`,eZ=a.default.div.withConfig({displayName:"SlackbotCallout__RightContent",componentId:"sc-6dc10b34-11"})`
  display: flex;
  max-width: 698px;

  img {
    width: 100%;
    height: auto;
  }
`,eD=a.default.div.withConfig({displayName:"SlackbotCallout__InnerShadow",componentId:"sc-6dc10b34-12"})`
  border-radius: inherit;
  z-index: 1;
  position: absolute;
  inset: 0;
  box-shadow: ${({theme:e})=>`0 0 24px 0px ${e.palette.bg400} inset`};
`;function eQ(){return(0,t.jsx)(d.LayoutSubgrid,{"data-content-grid":!0,style:{overflowX:"clip"},children:(0,t.jsxs)(e$,{children:[(0,t.jsx)(eH,{"data-position":"top"}),(0,t.jsx)(eH,{"data-position":"bottom"}),(0,t.jsx)(eH,{"data-position":"left"}),(0,t.jsx)(eH,{"data-position":"right"}),(0,t.jsx)(eT,{style:{padding:"0px"},children:(0,t.jsxs)(eR,{children:[(0,t.jsx)(eW,{children:(0,t.jsx)(eE,{})}),(0,t.jsxs)(eO,{children:[(0,t.jsxs)(eG,{children:[(0,t.jsxs)(eM,{children:[(0,t.jsx)(eA,{}),(0,t.jsx)("span",{className:y.textStyles.annotation,children:"THREADS"})]}),(0,t.jsx)(eP,{className:y.headingStyles.h3,style:{textWrap:"initial"},children:"Insight right where the conversation is happening"}),(0,t.jsx)(eN.Text,{size:"medium",children:"Kick off or schedule a Thread wherever your team is asking data questions — Slack, Claude, Cursor, or Codex — and the Hex Agent brings the full context of your stack with it. Connect Hex to the tools your team works in so every answer reflects not just what the data shows, but what your team actually knows."}),(0,t.jsx)(eV,{href:f.DOCS_LINKS.Slackbot,text:"Learn more"})]}),(0,t.jsx)(eZ,{children:(0,t.jsx)(e_.default,{alt:"Slackbot",height:878,src:"/images/threads/illustration-slackbot-mcp.png",width:1396})})]}),(0,t.jsx)(eD,{})]})})]})})}let eq=(0,a.default)(d.LayoutSubgrid).withConfig({displayName:"Workflows__Wrapper",componentId:"sc-1a5d4794-0"})`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-top: 1px solid ${({theme:e})=>(0,l.gridColorSelector)(e,"major")};
  border-bottom: 1px solid ${({theme:e})=>(0,l.gridColorSelector)(e,"major")};
  position: relative;
`,eB=a.default.div.withConfig({displayName:"Workflows__Masthead",componentId:"sc-1a5d4794-1"})`
  border-bottom: 1px solid ${({theme:e})=>(0,l.gridColorSelector)(e,"major")};
  padding: 56px 0 48px;
`,ez=(0,a.default)(er.GradientHeader).withConfig({displayName:"Workflows__H2",componentId:"sc-1a5d4794-2"})`
  text-align: center;
  max-width: 840px;
  margin: 0 auto;
`,eF=a.default.div.withConfig({displayName:"Workflows__AccentT",componentId:"sc-1a5d4794-3"})`
  position: absolute;
  height: 6px;
  width: 8px;
  z-index: 1;

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    display: none;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: ${({theme:e})=>e.palette.fg1200};
  }

  &::before {
    width: 100%;
    height: 1px;
  }
  &::after {
    height: 100%;
    width: 1px;
  }

  &[data-position='top'] {
    top: -1px;
    right: -0.5px;
    transform: translateX(50%);

    &::before {
      top: 0;
      left: 0;
    }
    &::after {
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &[data-position='bottom'] {
    bottom: -1px;
    right: -0.5px;
    transform: translateX(50%);

    &::before {
      bottom: 0;
      left: 0;
    }
    &::after {
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`,eK=a.default.div.withConfig({displayName:"Workflows__AccentL",componentId:"sc-1a5d4794-4"})`
  position: absolute;
  height: 8px;
  width: 8px;
  z-index: 1;

  &[data-position='tl'] {
    top: -1px;
    left: -1px;
    border-left: 1px solid ${({theme:e})=>e.palette.fg1200};
    border-top: 1px solid ${({theme:e})=>e.palette.fg1200};
  }

  &[data-position='tr'] {
    top: -1px;
    right: -1px;
    border-right: 1px solid ${({theme:e})=>e.palette.fg1200};
    border-top: 1px solid ${({theme:e})=>e.palette.fg1200};
  }

  &[data-position='bl'] {
    bottom: -1px;
    left: -1px;
    border-left: 1px solid ${({theme:e})=>e.palette.fg1200};
    border-bottom: 1px solid ${({theme:e})=>e.palette.fg1200};
  }

  &[data-position='br'] {
    bottom: -1px;
    right: -1px;
    border-right: 1px solid ${({theme:e})=>e.palette.fg1200};
    border-bottom: 1px solid ${({theme:e})=>e.palette.fg1200};
  }
`,eU=a.default.div.withConfig({displayName:"Workflows__Grid",componentId:"sc-1a5d4794-5"})`
  display: grid;
  flex-grow: 1;
  grid-template-columns: 1fr 1px 1fr;
  grid-template-areas:
    'description1 hr description2'
    'features1 hr features2';

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'description1'
      'features1'
      'hr'
      'description2'
      'features2';
  }
`,eX=a.default.hr.withConfig({displayName:"Workflows__Divider",componentId:"sc-1a5d4794-6"})`
  background-color: ${({theme:e})=>(0,l.gridColorSelector)(e,"major")};
  height: auto;
  margin: 0;
`,eY=a.default.div.withConfig({displayName:"Workflows__Description",componentId:"sc-1a5d4794-7"})`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  border-bottom: 1px solid ${({theme:e})=>(0,l.gridColorSelector)(e,"major")};
  padding: 40px 0 56px;
  gap: 16px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    padding-top: 0;

    &::before {
      content: '';
      display: block;
      width: 100%;
      height: 24px;
      margin-bottom: 40px;
      background-image: ${({theme:e})=>(0,l.backgroundImageHatched)(e)};
      border-top: 1px solid ${({theme:e})=>(0,l.gridColorSelector)(e,"major")};
      border-bottom: 1px solid
        ${({theme:e})=>(0,l.gridColorSelector)(e,"major")};
    }

    &:first-child::before {
      border-top: 0px;
    }
  }
`,eJ=a.default.div.withConfig({displayName:"Workflows__Container",componentId:"sc-1a5d4794-8"})`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 42rem;
  margin: 0 auto;
  width: 90%;
`,e0=a.default.div.withConfig({displayName:"Workflows__FeatureArea",componentId:"sc-1a5d4794-9"})`
  position: relative;
`,e1=a.default.ul.withConfig({displayName:"Workflows__Features",componentId:"sc-1a5d4794-10"})`
  display: flex;
  padding: 32px 0;
  gap: 32px;

  li {
    display: flex;
    align-items: center;
    gap: 12px;

    svg {
      flex: none;
    }
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 16px;
    padding: 32px 0;
  }
`,e2=a.default.span.withConfig({displayName:"Workflows__Feature",componentId:"sc-1a5d4794-11"})`
  color: ${({theme:e})=>e.palette.fgLoud};
  font-weight: ${({theme:e})=>e.fontWeight.LIGHT};
`,e4=[(0,t.jsxs)("li",{children:[(0,t.jsx)(function(){return(0,t.jsxs)("svg",{fill:"none",height:"21",viewBox:"0 0 21 21",width:"21",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("path",{d:"M3.10602 11.5845C2.43708 11.5845 1.89481 11.0422 1.89481 10.3733L1.89481 6.73963C1.89481 6.0707 2.43708 5.52842 3.10602 5.52842L17.6405 5.52842C18.3095 5.52842 18.8517 6.0707 18.8517 6.73963L18.8517 10.3733C18.8517 11.0422 18.3095 11.5845 17.6405 11.5845L3.10602 11.5845Z",fill:"currentColor",fillOpacity:"0.1"}),(0,t.jsx)("path",{d:"M18.2464 17.6409C18.5807 17.641 18.8518 17.9119 18.8518 18.2463C18.8517 18.5806 18.5807 18.8517 18.2464 18.8518H2.50027C2.16594 18.8517 1.89491 18.5807 1.89481 18.2463C1.89481 17.9119 2.16587 17.6409 2.50027 17.6409H18.2464ZM18.2464 14.0071C18.5807 14.0072 18.8518 14.2782 18.8518 14.6125C18.8518 14.9469 18.5807 15.2179 18.2464 15.218H2.50027C2.16588 15.2179 1.89483 14.947 1.89481 14.6125C1.89481 14.2781 2.16587 14.0072 2.50027 14.0071H18.2464ZM17.6409 5.52856C18.3096 5.52876 18.8518 6.07076 18.8518 6.7395V10.3733C18.8518 11.0421 18.3097 11.584 17.6409 11.5842H3.10574C2.43694 11.5841 1.89481 11.0421 1.89481 10.3733V6.7395C1.89488 6.07072 2.43698 5.52871 3.10574 5.52856H17.6409ZM3.10574 10.3733H17.6409V6.7395H3.10574V10.3733ZM18.2464 1.89478C18.5807 1.8949 18.8517 2.16593 18.8518 2.50024C18.8518 2.83463 18.5807 3.10559 18.2464 3.10571H2.50027C2.16587 3.10564 1.89481 2.83467 1.89481 2.50024C1.8949 2.1659 2.16592 1.89485 2.50027 1.89478H18.2464Z",fill:"currentColor"})]})},{}),(0,t.jsx)(e2,{className:y.textStyles.m,children:"Agentic data exploration"})]},"text-to-sql"),(0,t.jsxs)("li",{children:[(0,t.jsx)(function(){return(0,t.jsx)("svg",{fill:"none",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{clipRule:"evenodd",d:"M6.30188 15.1473L8.71172 0.688263L9.69812 0.852662L7.28827 15.3117L6.30188 15.1473ZM5.09234 4.38523L1.47757 8L5.09234 11.6148L4.38523 12.3219L0.0633545 8L4.38523 3.67812L5.09234 4.38523ZM11.6148 3.67812L15.9366 8L11.6148 12.3219L10.9077 11.6148L14.5224 8L10.9077 4.38523L11.6148 3.67812Z",fill:"currentColor",fillRule:"evenodd"})})},{}),(0,t.jsx)(e2,{className:y.textStyles.m,children:"Generative app-builder"})]},"code-typeahead"),(0,t.jsxs)("li",{children:[(0,t.jsx)(function(){return(0,t.jsx)("svg",{fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M11.658 5.24036C13.1316 3.76725 15.5205 3.7671 16.994 5.24036L18.7625 7.00891C20.2361 8.48253 20.2361 10.8722 18.7625 12.3458L11.4637 19.6447C11.3222 19.7862 11.1297 19.8654 10.9295 19.8654H4.8924C4.69224 19.8654 4.49975 19.7862 4.35822 19.6447C4.21675 19.5031 4.13751 19.3106 4.13751 19.1105V13.0734C4.13752 12.8734 4.21693 12.6816 4.35822 12.5402L11.658 5.24036ZM19.868 18.4357C20.2626 18.4359 20.5828 18.7558 20.5828 19.1505C20.5828 19.5452 20.2626 19.8651 19.868 19.8654H15.5779C15.1831 19.8654 14.8621 19.5454 14.8621 19.1505C14.8622 18.7557 15.1831 18.4357 15.5779 18.4357H19.868ZM5.64728 13.3859V18.3566H10.617L15.9002 13.0734L10.9295 8.10266L5.64728 13.3859ZM15.9266 6.30774C15.0424 5.42378 13.6085 5.42364 12.7244 6.30774L11.9969 7.03528L16.9666 12.006L17.6951 11.2784C18.5793 10.3943 18.5793 8.96046 17.6951 8.07629L15.9266 6.30774Z",fill:"currentColor"})})},{}),(0,t.jsx)(e2,{className:y.textStyles.m,children:"Create and edit code"})]},"auto-fix-bugs")],e5=[(0,t.jsxs)("li",{children:[(0,t.jsx)(function(){return(0,t.jsx)("svg",{fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M14.1478 20.5804C14.5424 20.5806 14.8625 20.9006 14.8626 21.2953C14.8626 21.6901 14.5425 22.01 14.1478 22.0101H9.85773C9.46284 22.0101 9.14288 21.6902 9.14288 21.2953C9.14302 20.9005 9.46293 20.5804 9.85773 20.5804H14.1478ZM12.0023 6.28064C14.0039 6.28064 15.4585 7.09154 16.3987 8.2406C17.3207 9.36747 17.7229 10.7849 17.723 12.0004C17.723 13.9409 17.1347 15.1188 16.4407 15.8129C16.1014 16.1522 15.7562 16.3556 15.4876 16.475L15.4827 16.4769L15.1204 18.5658C15.0535 18.8997 14.7598 19.1398 14.4193 19.14H9.41339C9.07295 19.1398 8.78022 18.8996 8.7132 18.5658L8.52179 16.4769L8.51691 16.475C8.24834 16.3556 7.90402 16.1521 7.56476 15.8129C6.87068 15.1188 6.28253 13.9411 6.28253 12.0004C6.28257 10.7849 6.6838 9.36747 7.60577 8.2406C8.54602 7.09146 10.0006 6.2807 12.0023 6.28064ZM12.0023 7.71033C10.4292 7.71039 9.38163 8.32988 8.7132 9.14685C8.02654 9.98612 7.71226 11.071 7.71222 12.0004C7.71222 13.6347 8.19707 14.4237 8.5755 14.8021C8.77242 14.999 8.96439 15.109 9.09796 15.1683C9.1645 15.1979 9.21641 15.2144 9.2464 15.223C9.26 15.2269 9.26933 15.2291 9.27277 15.2299C9.55966 15.283 9.78652 15.5055 9.84406 15.7924L10.0003 17.7103H13.8323L14.1614 15.7924C14.219 15.5055 14.4458 15.2829 14.7327 15.2299C14.7364 15.229 14.7451 15.2268 14.7581 15.223C14.7881 15.2145 14.8405 15.1981 14.9075 15.1683C15.041 15.109 15.2322 14.9988 15.429 14.8021C15.8074 14.4237 16.2923 13.6347 16.2923 12.0004C16.2923 11.0711 15.9788 9.98609 15.2923 9.14685C14.6238 8.32983 13.5755 7.71033 12.0023 7.71033ZM4.13702 10.5707C4.5319 10.5707 4.85283 10.8906 4.85284 11.2855C4.85284 11.6804 4.53191 12.0004 4.13702 12.0004H2.70734C2.31253 12.0003 1.99249 11.6804 1.99249 11.2855C1.99251 10.8907 2.31254 10.5708 2.70734 10.5707H4.13702ZM21.2972 10.5707C21.6921 10.5707 22.012 10.8906 22.012 11.2855C22.012 11.6804 21.6921 12.0004 21.2972 12.0004H19.8675C19.4726 12.0004 19.1526 11.6804 19.1526 11.2855C19.1527 10.8907 19.4726 10.5707 19.8675 10.5707H21.2972ZM4.34698 4.34509C4.62617 4.0659 5.07849 4.06597 5.35773 4.34509L6.78839 5.77478C7.06755 6.05401 7.06759 6.50729 6.78839 6.7865C6.50918 7.06567 6.05589 7.06565 5.77667 6.7865L4.34698 5.35583C4.06787 5.07661 4.06782 4.62428 4.34698 4.34509ZM19.3616 4.34509C19.6409 4.06587 20.0941 4.06587 20.3734 4.34509C20.6523 4.62424 20.6522 5.07665 20.3734 5.35583L18.9427 6.7865C18.6635 7.06528 18.2111 7.0654 17.9319 6.7865C17.6527 6.50727 17.6527 6.054 17.9319 5.77478L19.3616 4.34509ZM12.0023 1.9906C12.3971 1.9906 12.717 2.31061 12.7171 2.70544V4.13513C12.7171 4.53002 12.3971 4.85095 12.0023 4.85095C11.6075 4.85082 11.2874 4.52993 11.2874 4.13513V2.70544C11.2875 2.31069 11.6075 1.99073 12.0023 1.9906Z",fill:"currentColor"})})},{}),(0,t.jsx)(e2,{className:y.textStyles.m,children:"Get quick answers"})]},"generate-charts"),(0,t.jsxs)("li",{children:[(0,t.jsx)(function(){return(0,t.jsx)("svg",{fill:"none",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{clipRule:"evenodd",d:"M11.4905 3.27289C10.46 2.24239 8.78926 2.24239 7.75876 3.27289L2.65457 8.37708C2.5556 8.47605 2.5 8.61028 2.5 8.75025V12.9723C2.5 13.1122 2.5556 13.2465 2.65458 13.3455C2.75355 13.4444 2.88778 13.5 3.02775 13.5L7.24976 13.5C7.38973 13.5 7.52397 13.4444 7.62294 13.3454L12.7271 8.24125C13.7576 7.21076 13.7576 5.53999 12.7271 4.50949L11.4905 3.27289ZM8.50512 4.01924C9.12341 3.40094 10.1259 3.40094 10.7442 4.01924L11.9808 5.25584C12.5991 5.87414 12.5991 6.8766 11.9808 7.4949L11.4718 8.00391L7.99611 4.52825L8.50512 4.01924ZM7.24976 5.2746L3.5555 8.96885V12.4445L7.03116 12.4445L10.7254 8.75026L7.24976 5.2746Z",fill:"currentColor",fillRule:"evenodd"})})},{}),(0,t.jsx)(e2,{className:y.textStyles.m,children:"Ask follow-up questions"})]},"ask-follow-up-questions"),(0,t.jsxs)("li",{children:[(0,t.jsx)(function(){return(0,t.jsxs)("svg",{fill:"none",height:"17",viewBox:"0 0 16 17",width:"16",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsxs)("g",{clipPath:"url(#clip0_2973_812)",children:[(0,t.jsx)("path",{clipRule:"evenodd",d:"M10.4498 13.8961C10.3881 13.9578 10.3265 14.0092 10.2545 14.0503C8.96964 14.7493 7.5203 15.0782 6.06068 15.0268C4.60106 15.0782 3.15172 14.7493 1.86685 14.0503C1.59959 13.8961 1.43513 13.5672 1.43513 13.1458V10.2882C2.51442 10.8227 3.68623 11.1414 4.86832 11.2441V10.2162C3.94321 10.134 3.03865 9.8976 2.17522 9.51727C1.90796 9.39393 1.65099 9.21918 1.43513 9.0136V5.44679C2.09298 5.85795 3.15172 6.18688 4.86832 6.28967V5.67292C4.86832 5.52902 4.86832 5.39539 4.91971 5.26176C3.162 5.14869 2.28829 4.78893 1.85657 4.48056C1.60987 4.30582 1.50708 4.15163 1.46596 4.0694L1.43513 3.98717V3.79186L1.45569 3.76103C1.5482 3.61712 1.67155 3.50405 1.82573 3.42182C2.36024 3.10317 3.52177 2.72285 6.06068 2.72285C6.22515 2.72285 6.36905 2.72285 6.52324 2.73313C6.61575 2.36308 6.75966 2.02387 6.96524 1.7155C6.6877 1.70523 6.37933 1.69495 6.06068 1.69495C3.46009 1.69495 2.06215 2.08555 1.3015 2.53783C0.910898 2.77424 0.68476 3.03122 0.551133 3.25736C0.489459 3.37043 0.448343 3.48349 0.427785 3.56573C0.417506 3.61712 0.407227 3.66852 0.407227 3.71991V13.5672C0.407227 13.5672 0.489459 13.8859 0.643644 14.1737C0.808108 14.482 1.0548 14.7493 1.3529 14.9343C2.19577 15.438 3.72735 16.0547 6.06068 16.0547C7.70533 16.1061 9.32941 15.7258 10.7685 14.9343C11.2516 14.6568 11.5188 14.2148 11.6422 13.8961H10.4498Z",fill:"currentColor",fillRule:"evenodd"}),(0,t.jsx)("path",{clipRule:"evenodd",d:"M8.29094 3.4835C8.29094 2.35281 9.21606 1.4277 10.3467 1.4277H11.3746C12.5053 1.4277 13.4305 2.35281 13.4305 3.4835V3.99745H8.29094V3.4835ZM7.26304 3.99745V3.4835C7.26304 1.77718 8.64043 0.399796 10.3467 0.399796H11.3746C13.081 0.399796 14.4584 1.77718 14.4584 3.4835V3.99745C15.3115 3.99745 16.0002 4.68614 16.0002 5.5393V11.7067C16.0002 12.5599 15.3115 13.2486 14.4584 13.2486H7.26304C6.40989 13.2486 5.72119 12.5599 5.72119 11.7067V5.5393C5.72119 4.68614 6.40989 3.99745 7.26304 3.99745ZM13.4305 5.02535H7.26304C6.97523 5.02535 6.74909 5.25149 6.74909 5.5393V11.7067C6.74909 11.9945 6.97523 12.2207 7.26304 12.2207H14.4584C14.7462 12.2207 14.9723 11.9945 14.9723 11.7067V5.5393C14.9723 5.25149 14.7462 5.02535 14.4584 5.02535H13.4305ZM9.8328 8.10905C9.8328 7.54371 10.2954 7.08115 10.8607 7.08115C11.426 7.08115 11.8886 7.54371 11.8886 8.10905C11.8886 8.48938 11.683 8.81831 11.3746 9.00333V9.65091C11.3746 9.93872 11.1485 10.1649 10.8607 10.1649C10.5729 10.1649 10.3467 9.93872 10.3467 9.65091V9.00333C10.0384 8.82859 9.8328 8.48938 9.8328 8.10905Z",fill:"currentColor",fillRule:"evenodd"})]}),(0,t.jsx)("defs",{children:(0,t.jsx)("clipPath",{id:"clip0_2973_812",children:(0,t.jsx)("rect",{fill:"white",height:"15.6652",transform:"translate(0.406738 0.39978)",width:"15.5933"})})})]})},{}),(0,t.jsx)(e2,{className:y.textStyles.m,children:"Governed insights"})]},"governed-insights")];function e9(){return(0,t.jsxs)(eq,{children:[(0,t.jsx)(eB,{children:(0,t.jsx)(ez,{renderAs:"h2",children:"Supercharge everyday workflows"})}),(0,t.jsxs)(eU,{children:[(0,t.jsxs)(eY,{style:{gridArea:"description1"},children:[(0,t.jsx)(eF,{"data-position":"top"}),(0,t.jsxs)(eJ,{children:[(0,t.jsxs)(e6,{renderAs:"h5",style:{color:q.workflows.notebooks.color},children:[q.workflows.notebooks.icon,(0,t.jsx)("span",{className:y.textStyles.annotation,children:"ADVANCED ANALYTICS"})]}),(0,t.jsxs)(e8,{size:"extra-large",children:[(0,t.jsx)("span",{children:"Deep-dive analysis:"})," Explore the new, novel, and gnarly in an AI-powered, multiplayer notebook where Python, SQL, and no-code live together."]})]})]}),(0,t.jsxs)(e0,{style:{gridArea:"features1"},children:[(0,t.jsx)(eJ,{children:(0,t.jsx)(e1,{style:{color:q.workflows.notebooks.color},children:e4})}),(0,t.jsx)(eF,{"data-position":"bottom"})]}),(0,t.jsx)(eX,{style:{gridArea:"hr"}}),(0,t.jsx)(eY,{style:{gridArea:"description2"},children:(0,t.jsxs)(eJ,{children:[(0,t.jsxs)(e6,{renderAs:"h5",style:{color:q.workflows.self_serve.color},children:[q.workflows.self_serve.icon,(0,t.jsx)("span",{className:y.textStyles.annotation,children:"CONVERSATIONAL SELF-SERVE"})]}),(0,t.jsxs)(e8,{size:"extra-large",children:[(0,t.jsx)("span",{children:"Self-serve and explore."})," Ask Hex a question in natural language, get a complete analysis, and keep going."]})]})}),(0,t.jsx)(e0,{style:{gridArea:"features2"},children:(0,t.jsx)(eJ,{children:(0,t.jsx)(e1,{style:{color:q.workflows.self_serve.color},children:e5})})})]}),(0,t.jsx)(eK,{"data-position":"tl"}),(0,t.jsx)(eK,{"data-position":"tr"}),(0,t.jsx)(eK,{"data-position":"bl"}),(0,t.jsx)(eK,{"data-position":"br"})]})}let e6=(0,a.default)(ef.Heading).withConfig({displayName:"Workflows__StyledHeading",componentId:"sc-1a5d4794-12"})`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-size: inherit;
  }
`,e8=(0,a.default)(eN.Text).withConfig({displayName:"Workflows__StyledText",componentId:"sc-1a5d4794-13"})`
  span {
    color: ${({theme:e})=>e.fontColor.LOUD};
  }
`;var e3=e.i(598043);let e7=[{question:"What is an AI Analytics Platform?",id:"faq-what-is-an-ai-analytics-platform",answer:"An AI Analytics Platform combines three capabilities in one connected system: AI agents for deep analysis, conversational analytics, and self-serve insights so anyone can ask questions in plain language, and trusted data apps for sharing insights. The platform part is what matters: everything runs on shared context, so every answer is consistent and trustworthy, whether it comes from an analyst’s notebook or a business user’s question."},{question:"How is Hex different from other AI Analytics platforms?",id:"faq-how-is-hex-different",answer:"Most AI analytics tools force you to choose between conversational self-serve or code-based analysis. Each runs on different context, produces different answers, and often requires copying and pasting underlying logic across tools just to validate what’s correct. Hex doesn’t just combine these workflows—it connects them. Whether you’re exploring with code in the Notebook or plain language in Threads, every answer is explainable, editable, reusable, and grounded in the same shared context."}];e7.map(({question:e,answer:t})=>({answer:(0,e3.reactNodeToPlainTextNormalized)(t),question:e}));let te=[{author:"Kristian K.",authorAvatarPath:"/images/headshots/kristian-k-lovable-headshot.png",authorTitle:"Product",customerName:"Lovable",logoPath:O.CUSTOMER_LOGOS_HOSTED.Lovable,quote:"Hex’s notebook agent just works. I describe what I want and get working SQL back, without having to juggle between tools. It’s made us 10x faster at turning questions into insights."},{author:"Ian M.",authorAvatarPath:"/images/headshots/ian-m-ramp-headshot.png",authorTitle:"Head of Analytics Engineering & Data Science",customerName:"Ramp",logoPath:O.CUSTOMER_LOGOS_HOSTED.Ramp,quote:"The Hex agent really sped up exploratory analysis for me, especially when juggling multiple datasets. I love being able to make edits across the notebook without bouncing between tools."},{author:"Rajiv A.",authorAvatarPath:"/images/headshots/rajiv-a-product-hunt-headshot.png",authorTitle:"CEO",customerName:"Product Hunt",logoPath:O.CUSTOMER_LOGOS_HOSTED.ProductHunt,quote:"The Notebook Agent feels like the future. As a former data scientist, it feels like a junior version of myself, requiring a little guidance, but an immediate accelerant to my data work."},{author:"Akshay B.",authorAvatarPath:"/images/headshots/akshay-bhat-headshot.jpeg",authorTitle:"Threat Intel Lead",customerName:"Notion",logoPath:O.CUSTOMER_LOGOS_HOSTED.Notion,quote:"It's a time saver not having to write perfect syntax all the time, ‘how do I get all the unique rows versus if it's a single column’ is hard to remember."},{author:"Tom C.",authorAvatarPath:"/images/headshots/tom-clark-headshot.png",authorTitle:"Principal Engineer",customerName:"Algolia",logoPath:O.CUSTOMER_LOGOS_HOSTED.Algolia,quote:"AI can do almost everything for you in Hex. I use it to scaffold entire apps and help me debug SQL queries. It makes me 10x faster."}],tt=(0,a.default)(d.LayoutSubgrid).withConfig({displayName:"CapabilityAiPageContent__CalloutWrapper",componentId:"sc-e1bfc855-0"})`
  background-image: ${({theme:e})=>(0,l.backgroundImageHatched)(e)};
  border-top: 1px solid ${({theme:e})=>(0,l.gridColorSelector)(e,"major")};
  border-bottom: 1px solid ${({theme:e})=>(0,l.gridColorSelector)(e,"major")};
`;function ta({children:e}){let i=(0,a.useTheme)();return(0,t.jsx)(a.ThemeProvider,{theme:{...i,customerLogoColor:"filter: brightness(0) invert(1);"},children:e})}e.s(["CapabilityAiPageContent",0,function({bannerData:e}){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(V,{customerBanner:(0,t.jsx)(i.CustomerBanner,{data:e})}),(0,t.jsx)(e9,{}),(0,t.jsx)(ta,{children:(0,t.jsx)(n.CustomerQuotesScrollingTout,{customerQuotes:te})}),(0,t.jsx)(eg,{}),(0,t.jsx)(tt,{children:(0,t.jsx)(eQ,{})}),(0,t.jsx)(eS,{}),(0,t.jsx)(eL,{}),(0,t.jsx)(r.OutroTout,{className:"full-width",copy:"Hex is the AI analytics platform where your notebooks, agents, and self-serve all live together — and actually talk to each other.",title:"Ready to put AI to work on your data?"}),(0,t.jsx)(s.BasicPageRow,{topBorder:!0,children:(0,t.jsx)(o.FAQ,{heading:"FAQs",items:e7})})]})}],650638)}]);