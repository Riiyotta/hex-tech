(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,962852,508361,e=>{"use strict";var t=e.i(997053),i=e.i(360571);e.i(409027);var a=e.i(747741);let n=t.css`
  position: relative;
  display: flex;
  align-items: center;
  padding: 14px 22px 14px 14px;
  padding: ${(0,i.generateFluidPxScale)(8,14)} ${(0,i.generateFluidPxScale)(18,22)}
    ${(0,i.generateFluidPxScale)(8,14)} ${(0,i.generateFluidPxScale)(6,14)};
  gap: 16px;
  color: ${({theme:e})=>e.fontColor.DEFAULT};
  font-weight: ${({theme:e})=>e.fontWeight.NORMAL};
  white-space: nowrap;

  border: 0;
  border-radius: 1px;
  font-size: ${(0,a.generateFluidFontSize)(16,20,{minWidth:800,maxWidth:1708})};
  font-weight: ${({theme:e})=>e.fontWeight.NORMAL};
  font-family: inherit;
  user-select: none;
  border: 1px solid transparent;
  ${({theme:e})=>e.popover}

  &[data-no-icon] {
    padding: ${(0,i.generateFluidPxScale)(8,14)} ${(0,i.generateFluidPxScale)(18,22)};
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
`;e.s(["primaryCtaStyles",0,n],962852);var o=e.i(843476);let r=t.default.div.withConfig({displayName:"Accents__Circle",componentId:"sc-4909cdaa-0"})`
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
`,d=t.default.div.withConfig({displayName:"Accents__CornerLine",componentId:"sc-4909cdaa-1"})`
  position: absolute;

  &::after {
    content: '';
    position: absolute;
    background-color: var(
      --corner-line-color,
      ${({theme:e})=>e.palette.fg1000}
    );
  }
`,s=t.default.div.withConfig({displayName:"Accents__CornerLinePosition",componentId:"sc-4909cdaa-2"})`
  --in-out-cubic: cubic-bezier(0.645, 0.045, 0.355, 1);
  --out-cubic: cubic-bezier(0.215, 0.61, 0.355, 1);

  position: absolute;
  inset: 0;
  opacity: var(--corner-line-initial-opacity, 0);
`,l=t.default.div.withConfig({displayName:"Accents__CornerTrack",componentId:"sc-4909cdaa-3"})`
  position: absolute;
  overflow: clip;

  &[data-position='t'],
  &[data-position='b'] {
    left: var(--corner-line-outset, -4px);
    height: 1px;
    width: calc(100% + var(--corner-line-outset, -4px) * -2);

    ${d} {
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

    ${d} {
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

    ${d}[data-order='1'] {
      transform: translateX(-100%);
    }
    ${d}[data-order='2'] {
      transform: translateX(0%);
    }
    ${d}[data-order='3'] {
      transform: translateX(100%);
    }
  }
  &[data-position='r'] {
    right: var(--corner-line-outset, -4px);

    ${d}[data-order='1'] {
      transform: translateY(-100%);
    }
    ${d}[data-order='2'] {
      transform: translateY(0%);
    }
    ${d}[data-order='3'] {
      transform: translateY(100%);
    }
  }
  &[data-position='b'] {
    bottom: var(--corner-line-outset, -4px);

    ${d}[data-order='1'] {
      transform: translateX(0%);
    }
    ${d}[data-order='2'] {
      transform: translateX(100%);
    }
    ${d}[data-order='3'] {
      transform: translateX(200%);
    }
  }
  &[data-position='l'] {
    left: var(--corner-line-outset, -4px);

    ${d}[data-order='1'] {
      transform: translateY(0%);
    }
    ${d}[data-order='2'] {
      transform: translateY(100%);
    }
    ${d}[data-order='3'] {
      transform: translateY(200%);
    }
  }
`,c=t.default.div.withConfig({displayName:"Accents__AccentsContainer",componentId:"sc-4909cdaa-4"})`
  position: relative;
  display: flex;

  & > * {
    flex-grow: 1;
  }

  ${r} {
    transition-delay: 0;
  }
  @media (hover: hover) {
    &:hover ${r} {
      transition-delay: calc(var(--i, 0) * 0.04s);
      scale: 0;
    }
  }

  ${s} {
    transition:
      transform 0s var(--in-out-cubic),
      opacity 0.4s var(--out-cubic);
    transition-delay: 0s;
  }
  @media (hover: hover) {
    &:hover ${s} {
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
`;e.s(["CircleAccents",0,function({children:e}){return(0,o.jsxs)(c,{children:[["tl","tr","bl","br"].map((e,t)=>(0,o.jsx)(r,{"data-position":e,style:{"--i":t}},e)),e]})},"CornerAccents",0,function({children:e,style:t,className:i}){return(0,o.jsxs)(c,{className:i,style:t,children:[["t","r","b","l"].map((e,t)=>(0,o.jsx)(l,{"data-position":e,style:{"--i":t},children:(0,o.jsx)(s,{"data-position":e,children:[1,2,3].map(e=>(0,o.jsx)(d,{"data-order":e},e))})},e)),e]})}],508361)},890780,330943,e=>{"use strict";var t=e.i(193594),i=e.i(997053),a=e.i(706736);let n=i.default.div.withConfig({displayName:"Shared__GridLines",componentId:"sc-62b83cb0-0"})`
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
`,o=i.default.div.withConfig({displayName:"Shared__GridLine",componentId:"sc-62b83cb0-1"})`
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
`,r=i.default.div.withConfig({displayName:"Shared__Card",componentId:"sc-62b83cb0-2"})`
  position: relative;
  overflow: clip;
  background-color: ${({theme:e})=>e.palette.bg500};
  border-radius: 12px;
  padding: 32px;
  min-height: 200px;
  background-image: radial-gradient(
    circle at 66.66% 50%,
    ${({theme:e})=>(0,t.lighten)(.043,e.palette.bg500)} 0%,
    ${({theme:e})=>e.palette.bg300} 80%
  );
  box-shadow: ${({theme:e})=>{let i=`0 0.5px 0px 0.75px ${(0,t.lighten)(.125,e.palette.bg500)}`;return[`0 0 24px 0px ${e.palette.bg400} inset`,i,"6px 37px 10px 0px rgba(0, 0, 0, 0.01), 4px 24px 10px 0px rgba(0, 0, 0, 0.04), 2px 13px 8px 0px rgba(0, 0, 0, 0.14), 1px 6px 6px 0px rgba(0, 0, 0, 0.24), 0px 1px 3px 0px rgba(0, 0, 0, 0.27)"].join(", ")}};

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    padding: 32px;
    background-image: radial-gradient(
      circle at 50% 66.66%,
      ${({theme:e})=>(0,t.lighten)(.0125,e.palette.bg500)} 0%,
      ${({theme:e})=>e.palette.bg300} 160%
    );
  }
`,d=i.default.div.withConfig({displayName:"Shared__Eyebrow",componentId:"sc-62b83cb0-3"})`
  display: flex;
  align-items: center;
  gap: 12px;
  text-transform: uppercase;
  color: ${({theme:e})=>e.palette.fg1200};

  svg {
    display: block;
  }
`,s=i.default.h2.withConfig({displayName:"Shared__H2",componentId:"sc-62b83cb0-4"})`
  max-width: 32ch;
  text-wrap: balance;
`,l=i.default.div.withConfig({displayName:"Shared__CardLayout",componentId:"sc-62b83cb0-5"})`
  display: grid;

  & > * {
    grid-area: 1 / -1;
  }
`,c=i.default.div.withConfig({displayName:"Shared__PerlinNoise",componentId:"sc-62b83cb0-6"})`
  position: absolute;
  inset: 0;
  background-image: url(/images/blog-2/perlin-noise.png);
  background-size: 512px 512px;
  animation: translate-bg 48s linear infinite;
  background-color: ${({theme:e})=>(0,t.rgba)(e.palette.fg1200,.16)};
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
`,p=i.default.div.withConfig({displayName:"Shared__RadialDotGridMask",componentId:"sc-62b83cb0-7"})`
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
`,m=i.default.div.withConfig({displayName:"Shared__CardContent",componentId:"sc-62b83cb0-8"})`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 25px;
  z-index: 2;
`,u=(0,i.default)(a.Button).withConfig({displayName:"Shared__CalloutCta",componentId:"sc-62b83cb0-9"})`
  width: fit-content;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    width: auto;
  }
`;e.s(["CalloutCta",0,u,"Card",0,r,"CardContent",0,m,"CardLayout",0,l,"Eyebrow",0,d,"GridLine",0,o,"GridLines",0,n,"H2",0,s,"PerlinNoise",0,c,"RadialDotGridMask",0,p],890780),e.s(["lockScroll",0,function(){document.documentElement.classList.add("lock-scroll")},"unlockScroll",0,function(){document.documentElement.classList.remove("lock-scroll")}],330943)},939808,e=>{"use strict";var t=e.i(843476),i=e.i(271645),a=e.i(997053),n=e.i(430388),o=e.i(785191),r=e.i(650617);let d=i.memo(({logoPath:e,customerName:i,quote:a,authorAvatarPath:o,author:d,authorTitle:f})=>(0,t.jsx)(s,{children:(0,t.jsxs)(l,{children:[e&&(0,t.jsx)(m,{children:"string"==typeof e?(0,t.jsx)("img",{alt:i||"customer logo",loading:"lazy",src:e}):e}),(0,t.jsxs)(c,{children:[(0,t.jsx)(p,{children:(0,t.jsx)(n.QuoteIcon,{})}),(0,t.jsxs)("blockquote",{children:['"',a,"”"]})]}),d&&(0,t.jsxs)(u,{children:[o&&(0,t.jsx)("img",{alt:d,loading:"lazy",src:o}),(0,t.jsxs)(r.Text,{children:[d,(f||i)&&(0,t.jsxs)("span",{children:["  ",f&&`${f} `,i&&(0,t.jsxs)(t.Fragment,{children:["at ",i]})]})]})]})]})}));d.displayName="CustomerQuoteCard";let s=(0,a.default)(o.Card).attrs({effect:"glass"}).withConfig({displayName:"CustomerQuoteCard__Wrapper",componentId:"sc-5e534bf5-0"})`
  && {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    padding: 38px 45px;
    height: 100%;
  }
`,l=a.default.div.withConfig({displayName:"CustomerQuoteCard__Quote",componentId:"sc-5e534bf5-1"})`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  gap: 24px;
  line-height: 1.35;
  opacity: 1;
  width: 100%;
`,c=a.default.div.withConfig({displayName:"CustomerQuoteCard__QuoteTextWrapper",componentId:"sc-5e534bf5-2"})`
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
`,p=a.default.div.withConfig({displayName:"CustomerQuoteCard__QuoteLine",componentId:"sc-5e534bf5-3"})`
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
`,m=a.default.div.withConfig({displayName:"CustomerQuoteCard__Logo",componentId:"sc-5e534bf5-4"})`
  display: flex;
  align-items: start;

  img {
    max-height: 45px;
    object-fit: contain;
    filter: ${({theme:e})=>"dark"===e.name?"brightness(0) invert(1)":"invert(100%) sepia(0%) saturate(1%) hue-rotate(339deg) brightness(100%) contrast(101%)"};
  }
`,u=a.default.div.withConfig({displayName:"CustomerQuoteCard__Author",componentId:"sc-5e534bf5-5"})`
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
`;e.s(["CustomerQuoteCard",0,d])},809573,e=>{"use strict";var t=e.i(843476),i=e.i(271645),a=e.i(922998),n=e.i(846932),o=e.i(997053),r=e.i(991709),d=e.i(288839),s=e.i(939808);let l=(0,o.default)(n.motion.div).withConfig({displayName:"CustomerQuotesScrollingTout__Wrapper",componentId:"sc-8e09488a-0"})`
  position: relative;
  display: flex;
  flex-grow: 1;
  width: 100%;
  margin: 0 auto;
  padding: 100px 0;

  .rfm-marquee-container {
    overflow-x: visible !important;
  }

  .rfm-marquee {
    .rfm-initial-child-container {
      height: 100%;

      .rfm-child {
        height: 100%;
      }
    }
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    padding: 60px 40px;
    gap: 30px;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    flex-direction: column;
    padding: 60px 30px;
  }
`,c=o.default.div.withConfig({displayName:"CustomerQuotesScrollingTout__MarqueeOption",componentId:"sc-8e09488a-1"})`
  width: 30vw;
  min-width: 370px;
  height: 100%;
  padding-right: 20px;
  flex-grow: 1;
`,p=(0,o.default)(a.default).withConfig({displayName:"CustomerQuotesScrollingTout__StyledMarquee",componentId:"sc-8e09488a-2"})`
  align-items: stretch;
  justify-content: stretch;

  .rfm-marquee {
    flex-grow: 1;
    display: flex;
    align-items: stretch;
    justify-content: stretch;
  }
`,m=i.memo(function({customerQuotes:e}){let i=(0,o.useTheme)(),a=(0,d.default)(i.mediaQueryString.MEDIUM),n=(0,d.default)("(prefers-reduced-motion: reduce)");return a?(0,t.jsx)(l,{...r.ANIMATIONS.SimpleFadeIn,children:e.slice(0,2).map((e,i)=>(0,t.jsx)(s.CustomerQuoteCard,{...e},i))}):(0,t.jsx)(l,{...r.ANIMATIONS.SimpleFadeIn,children:(0,t.jsx)(p,{gradient:!1,pauseOnClick:!0,play:!n,speed:30,children:e.map((e,i)=>(0,t.jsx)(c,{children:(0,t.jsx)(s.CustomerQuoteCard,{...e})},i))})})});e.s(["CustomerQuotesScrollingTout",0,m])},809132,e=>{"use strict";var t=e.i(997053);let i=t.default.div.withConfig({displayName:"DotGridMask",componentId:"sc-8c154ead-0"})`
  position: absolute;
  inset: 0;
  mask-image: radial-gradient(white, white 1px, transparent 1px, transparent);
  mask-size: 6px 6px;
`;e.s(["DotGridMask",0,i])},237673,e=>{"use strict";var t=e.i(843476),i=e.i(997053),a=e.i(739876),n=e.i(581444),o=e.i(360571);let r=(0,i.default)(n.LayoutSubgrid).withConfig({displayName:"FullWidthQuote__Section",componentId:"sc-1b6d6d80-0"})`
  border-top: 1px solid ${({theme:e})=>(0,a.gridColorSelector)(e,"major")};
  background-color: ${({theme:e})=>e.palette.bg300};
`,d=i.default.div.withConfig({displayName:"FullWidthQuote__Container",componentId:"sc-1b6d6d80-1"})`
  display: flex;
  position: relative;
`,s=i.default.div.withConfig({displayName:"FullWidthQuote__Accent",componentId:"sc-1b6d6d80-2"})`
  position: absolute;
  bottom: 0px;
  height: 8px;
  width: 8px;
  border-top: 1px solid ${({theme:e})=>e.palette.fg1200};
  border-left: 1px solid ${({theme:e})=>e.palette.fg1200};
  left: -1px;
  transform: translateY(100%);
  z-index: 1;

  &[data-right] {
    border-left: none;
    border-right: 1px solid ${({theme:e})=>e.palette.fg1200};
    grid-column: -1 !important;
    left: auto;
    right: -1px;
  }
`,l=i.default.div.withConfig({displayName:"FullWidthQuote__QuoteContainer",componentId:"sc-1b6d6d80-3"})`
  width: 90%;
  max-width: 1270px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 60px;
  padding: ${(0,o.generateFluidPxScale)(30,60)} 0;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    flex-direction: column;
    align-items: flex-start;
  }
`,c=i.default.img.withConfig({displayName:"FullWidthQuote__Logo",componentId:"sc-1b6d6d80-4"})`
  max-width: 160px;
  max-height: 60px;
  width: auto;
  height: auto;
  object-fit: contain;
  object-position: left;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    max-width: 100px;
    max-height: 40px;
  }
`,p=i.default.div.withConfig({displayName:"FullWidthQuote__Attribution",componentId:"sc-1b6d6d80-5"})`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-shrink: 0;
`,m=i.default.div.withConfig({displayName:"FullWidthQuote__Divider",componentId:"sc-1b6d6d80-6"})`
  background: ${({theme:e})=>(0,a.gridColorSelector)(e,"major")};
  width: 1px;
  height: 100%;
`,u=i.default.div.withConfig({displayName:"FullWidthQuote__Author",componentId:"sc-1b6d6d80-7"})`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    text-align: center;
  }
`,f=i.default.div.withConfig({displayName:"FullWidthQuote__AuthorName",componentId:"sc-1b6d6d80-8"})`
  color: ${({theme:e})=>e.palette.fgLoud};

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    font-size: ${({theme:e})=>e.fontSize.body.base};
    font-weight: ${({theme:e})=>e.fontWeight.NORMAL};
  }
`,g=i.default.div.withConfig({displayName:"FullWidthQuote__AuthorTitle",componentId:"sc-1b6d6d80-9"})`
  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    font-size: ${({theme:e})=>e.fontSize.body.xs};
  }
`,h=i.default.blockquote.withConfig({displayName:"FullWidthQuote__QuoteText",componentId:"sc-1b6d6d80-10"})`
  strong {
    font-weight: ${({theme:e})=>e.fontWeight.BOLD};
    color: ${({theme:e})=>e.palette.fgLoud};
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    padding-left: 0;
    text-align: center;
    padding: 0 12px;
    font-size: ${({theme:e})=>e.fontSize.body.l};
    line-height: ${({theme:e})=>e.lineHeight.body.l};
    max-width: 600px;
    margin: 0 auto;
  }
`,x=i.default.div.withConfig({displayName:"FullWidthQuote__MobileWrapper",componentId:"sc-1b6d6d80-11"})`
  display: none;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 40px 0;
  }
`,b=i.default.div.withConfig({displayName:"FullWidthQuote__DesktopWrapper",componentId:"sc-1b6d6d80-12"})`
  display: block;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    display: none;
  }
`,y=i.default.div.withConfig({displayName:"FullWidthQuote__Margin",componentId:"sc-1b6d6d80-13"})`
  position: relative;
  grid-column: 1 / span 1;

  &[data-right] {
    grid-column: -2 / span 1;
  }
`,w=i.default.div.withConfig({displayName:"FullWidthQuote__AccentL",componentId:"sc-1b6d6d80-14"})`
  height: 8px;
  width: 8px;
  position: absolute;
  top: -8px;
  right: -7px;
  border-bottom: 1px solid ${({theme:e})=>e.palette.fg1200};
  border-left: 1px solid ${({theme:e})=>e.palette.fg1200};

  &[data-right] {
    border-right: 1px solid ${({theme:e})=>e.palette.fg1200};
    border-left: none;
    right: auto;
    left: -7px;
  }
`;e.s(["FullWidthQuote",0,function({logoPath:e,quote:i,authorName:a,authorTitle:n,authorCompany:o}){let v=(0,t.jsx)(c,{alt:`${a} quote`,loading:"lazy",src:e}),C=(0,t.jsx)(h,{className:"text-xl",children:i}),$=(0,t.jsxs)(u,{children:[(0,t.jsx)(f,{className:"text-l",children:a}),(0,t.jsxs)(g,{className:"annotation",children:[n,", ",o]})]});return(0,t.jsxs)(r,{children:[(0,t.jsx)(y,{children:(0,t.jsx)(w,{})}),(0,t.jsx)(b,{children:(0,t.jsxs)(d,{children:[(0,t.jsxs)(l,{children:[(0,t.jsxs)(p,{children:[v,$]}),(0,t.jsx)(m,{}),C]}),(0,t.jsx)(s,{}),(0,t.jsx)(s,{"data-right":!0})]})}),(0,t.jsxs)(x,{children:[v,C,(0,t.jsx)(p,{children:$})]}),(0,t.jsx)(y,{"data-right":!0,children:(0,t.jsx)(w,{"data-right":!0})})]})}])},423895,e=>{"use strict";var t=e.i(846932),i=e.i(997053),a=e.i(991709),n=e.i(162517);let o=i.default.div.withConfig({displayName:"TwoUp__Media",componentId:"sc-fba28e22-0"})`
  width: 680px;
  flex: none;
  position: relative;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    width: 100%;
    height: auto;
  }
`,r={Panel:(0,i.default)(t.motion.div).attrs(a.ANIMATIONS.SimpleFadeIn).withConfig({displayName:"TwoUp__Panel",componentId:"sc-fba28e22-1"})`
  padding: 96px 0;
  display: flex;
  align-items: center;
  gap: 72px;
  justify-content: space-between;

  @media screen and (min-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    &.alternate-even {
      &:nth-child(even) {
        flex-direction: row-reverse;
      }
    }

    &.alternate-odd {
      &:nth-child(odd) {
        flex-direction: row-reverse;
      }
    }

    &.row-reverse {
      flex-direction: row-reverse;
    }
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    flex-direction: column;
    gap: 48px;
    padding: 48px 0;
  }

  &.pb-last--large:last-child {
    padding-bottom: 180px;

    @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
      padding-bottom: 90px;
    }
  }
`,Media:o,Info:n.InfoText};e.s(["TwoUp",0,r])},613938,e=>{"use strict";var t=e.i(843476),i=e.i(271645),a=e.i(846932),n=e.i(997053),o=e.i(991709),r=e.i(739876),d=e.i(581444);let s=(0,n.default)(d.LayoutSubgrid).withConfig({displayName:"BasicPageRow__Wrapper",componentId:"sc-811624ad-0"})`
  overflow-x: clip;

  ${({$topBorder:e})=>e&&n.css`
      border-top: 1px solid ${({theme:e})=>(0,r.gridColorSelector)(e,"major")};
    `}
`,l=n.css`
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

  ${({$fullWidth:e})=>e&&n.css`
      max-width: none;
      padding: 0;
      grid-column: 1 / -1;
    `}

  ${({$fullWidth:e})=>!e&&n.css`
      @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
        padding: 60px 0;
        grid-column: 2 / -2;
      }

      @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
        padding: 40px 0;
      }
    `}
`,c=(0,n.default)(a.motion.div).withConfig({displayName:"BasicPageRow__Inner",componentId:"sc-811624ad-1"})`
  ${l}
`,p=n.default.div.withConfig({displayName:"BasicPageRow__InnerStatic",componentId:"sc-811624ad-2"})`
  ${l}
`,m=(0,n.default)(d.LayoutGridCondensed).withConfig({displayName:"BasicPageRow__StyledLayoutGridCondensed",componentId:"sc-811624ad-3"})`
  position: relative;
`,u=i.memo(function({animateEntrance:e=!0,children:i,fullWidth:a=!1,topBorder:n=!1,className:d,CartesianGridComponent:l}){return(0,t.jsxs)(s,{$topBorder:n,children:[(0,t.jsx)(r.CheckeredMargin,{}),(0,t.jsxs)(m,{className:d,children:[l&&(0,t.jsx)(l,{fadeDirection:"in"}),e?(0,t.jsx)(c,{...o.ANIMATIONS.SimpleFadeIn,$fullWidth:a,children:i}):(0,t.jsx)(p,{$fullWidth:a,children:i})]}),(0,t.jsx)(r.CheckeredMargin,{"data-right":!0})]})});e.s(["BasicPageRow",0,u])},134700,e=>{"use strict";var t=e.i(843476),i=e.i(997053),a=e.i(739876),n=e.i(581444);let o=(0,i.default)(n.LayoutSubgrid).withConfig({displayName:"V1PageWrapper__V1Subgrid",componentId:"sc-cf85dce9-0"})`
  padding-top: ${({$noTopPadding:e})=>e?0:"12.5rem"};
  overflow-x: clip;
  position: relative;
  isolation: isolate;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    padding-top: ${({$noTopPadding:e})=>e?0:"9rem"};
  }

  & ~ & {
    padding-top: 0;
  }
`,r=(0,i.default)(a.GridRule).withConfig({displayName:"V1PageWrapper__ResponsiveGridRule",componentId:"sc-cf85dce9-1"})`
  @media (max-width: ${({theme:e})=>e.mediaQuery.MOBILE}) {
    display: none;
  }
`;e.s(["V1GridLines",0,function({children:e}){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.LayoutSubgrid,{"aria-hidden":"true","data-pile":!0,children:[(0,t.jsx)(r,{$column:4}),(0,t.jsx)(a.GridRule,{$column:7}),(0,t.jsx)(r,{$column:10})]}),(0,t.jsx)(n.LayoutSubgrid,{"data-pile":!0,children:e})]})},"V1PageWrapper",0,function({children:e,noTopPadding:i}){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.ContentMarginLine,{"data-v1-gridlines":!0}),(0,t.jsx)(o,{$noTopPadding:i,"data-content-grid":!0,children:e}),(0,t.jsx)(a.ContentMarginLine,{"data-right":!0,"data-v1-gridlines":!0})]})}])},850034,e=>{"use strict";var t=e.i(843476),i=e.i(271645),a=e.i(53496),n=e.i(656871),o=e.i(627871),r=e.i(35820),d=e.i(182180),s=e.i(472945);let l=["ended","play","timeupdate"];var c=e.i(806406);let p=i.forwardRef(function({src:e="",title:p,...m},u){let f,g=(0,i.useMemo)(()=>(function(e){try{let t=new URL(e,"https://hex.tech"),i="youtube"===(0,n.getVideoProviderFromHostname)(t.hostname);if(!i)return{isYouTube:i,src:e};return t.searchParams.set("enablejsapi","1"),{isYouTube:i,src:t.href}}catch{return{isYouTube:!1,src:e}}})(e),[e]),h=(0,i.useMemo)(()=>(0,o.getVideoMetadata)(e,p),[e,p]),x=(0,c.useYouTubeVideoTracking)(e,p),b=(f=(0,i.useRef)(null),(0,i.useEffect)(()=>{let t=f.current;if(!t)return;let i=!1,a=new Set,n=new URL(e,window.location.href).origin,o=()=>{l.forEach(e=>{t.contentWindow?.postMessage(JSON.stringify({context:"player.js",method:"addEventListener",value:e,version:"0.0.11"}),n)})},c=l=>{if(l.origin!==n||l.source!==t.contentWindow)return;let c=function(e){try{let t="string"==typeof e?JSON.parse(e):e;return"object"==typeof t&&null!==t?t:void 0}catch{return}}(l.data);if(c?.context==="player.js")if("ready"===c.event)o();else if("play"!==c.event||i)if("timeupdate"===c.event){let{duration:t,seconds:i}=c.value??{};if("number"!=typeof t||"number"!=typeof i||t<=0)return;(0,r.getNewVideoProgressThresholds)(i/t*100,a).forEach(t=>{a.add(t),(0,s.trackVideoProgress)(e,t,p)})}else"ended"===c.event&&((0,r.getNewVideoProgressThresholds)(100,a).forEach(t=>{a.add(t),(0,s.trackVideoProgress)(e,t,p)}),i=!1);else i=!0,(0,d.trackVideoPlayed)(e,p)};return t.addEventListener("load",o),window.addEventListener("message",c),()=>{t.removeEventListener("load",o),window.removeEventListener("message",c)}},[p,e]),f),y=g.isYouTube?x:"loom"===h.videoProvider?b:null,w=(0,i.useMemo)(()=>(0,a.combineRefs)(u,y),[u,y]);return(0,t.jsx)("iframe",{...m,ref:w,src:g.src,title:p})});e.s(["VideoIframe",0,p],850034)},806406,e=>{"use strict";let t;var i=e.i(271645),a=e.i(35820),n=e.i(182180),o=e.i(472945);e.s(["useYouTubeVideoTracking",0,function(e,r,d){let s=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let i,d,l=s.current;if(!l)return;let c=!1,p=!1,m=new Set,u=()=>{void 0!==i&&window.clearInterval(i),i=void 0},f=()=>{if(!d)return;let t=d.getDuration();if(!Number.isFinite(t)||t<=0)return;let i=d.getCurrentTime()/t*100;(0,a.getNewVideoProgressThresholds)(i,m).forEach(t=>{m.add(t),(0,o.trackVideoProgress)(e,t,r)})},g=t=>{1===t?(p||(p=!0,(0,n.trackVideoPlayed)(e,r)),void 0===i&&(i=window.setInterval(f,1e3))):(0===t||2===t)&&(f(),u(),0===t&&(p=!1))};return(window.YT?.Player?Promise.resolve(window.YT):t||(t=new Promise(e=>{let t=window.onYouTubeIframeAPIReady;if(window.onYouTubeIframeAPIReady=()=>{t?.(),window.YT&&e(window.YT)},!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')){let e=document.createElement("script");e.src="https://www.youtube.com/iframe_api",document.head.appendChild(e)}}))).then(e=>{c||(d=new e.Player(l,{events:{onReady:()=>g(d?.getPlayerState()??-1),onStateChange:e=>g(e.data)}}))}),()=>{c=!0,u(),d?.destroy()}},[d,r,e]),s}],806406)},53496,e=>{"use strict";e.s(["combineRefs",0,function(...e){return function(t){e.forEach(e=>{if(null!==e){if("function"==typeof e)return void e(t);e.current=t}})}}])},35820,472945,e=>{"use strict";let t=[25,50,75,90];e.s(["getNewVideoProgressThresholds",0,function(e,i){return t.filter(t=>e>=t&&!i.has(t))}],35820);var i=e.i(395967),a=e.i(924837),n=e.i(759609),o=e.i(627871);e.s(["trackVideoProgress",0,function(e,t,r){let d=(0,o.getVideoMetadata)(e,r),s={page_path:(0,n.getCurrentPagePath)(),progress_pct:t,video_id:d.videoId,video_title:d.videoTitle,video_url:d.videoUrl};(0,i.trackRudderstack)(a.TRACKING_EVENTS.VideoProgress,s)}],472945)},998990,e=>{"use strict";e.s(["CUSTOMER_LOGOS_HOSTED",0,{Algolia:"https://cdn.sanity.io/images/e92memrj/production/643fb40019cd60627bf6f354c5bffdfd66017ce9-97x51.svg",Brex:"https://cdn.sanity.io/images/e92memrj/production/797daac5d8ce0c8f853f32db64dddf44234caf15-110x50.svg",Candidly:"https://cdn.sanity.io/images/e92memrj/production/5fb6f6dd0ff002808f2382c81a66cd28410a4ac9-166x50.svg",Chime:"https://cdn.sanity.io/images/e92memrj/production/20bf8a6fe0ca725b28527c135c22f237938f5ef5-94x50.svg",ClickUp:"https://cdn.sanity.io/images/e92memrj/production/8ec37f2330ffd132be12ea66bad243453af0d047-119x50.svg",CustomerIO:"https://cdn.sanity.io/images/e92memrj/production/fc46557c4677964c57351c9affa635d558fe8cd8-170x40.svg",Doximity:"https://cdn.sanity.io/images/e92memrj/production/17b8982db750bfc51b7aa08783c5e1f8d3432d63-125x50.svg",Figma:"https://cdn.sanity.io/images/e92memrj/production/f7df402cfb3dac549c3f877c09425534abc7650b-97x50.svg",Huckberry:"https://cdn.sanity.io/images/e92memrj/production/8194d2de15059f3f69d4fb8dbc03b2f7bfb04af4-134x50.svg",InfiniteLambda:"https://cdn.sanity.io/images/e92memrj/production/638503884c2ca511d9816fc46d5d13f05551bd26-110x50.svg",Inventa:"https://cdn.sanity.io/images/e92memrj/production/2b33cd7f123f50efbd8ea42ea9235382e207633e-132x50.svg",LangChain:"https://cdn.sanity.io/images/e92memrj/production/0b907ba3d40fe1012f1118d105620c7779a49949-135x50.svg",Lovable:"https://cdn.sanity.io/images/e92memrj/production/d063f2a64adcd7869bc2fc81dbc971825be8b951-137x50.svg",MedScout:"https://cdn.sanity.io/images/e92memrj/production/ab190c6c708ad1b738c3dd93e3c9d64718788935-168x50.svg",Mercor:"https://cdn.sanity.io/images/e92memrj/production/92b9cd2232a417db021ffe38f96d45a896e85cba-131x50.svg",NeoFinancial:"https://cdn.sanity.io/images/e92memrj/production/ba0c09ff2b2ba796246ce69e4e971751bccaae37-76x50.svg",Notion:"https://cdn.sanity.io/images/e92memrj/production/6f211c674b14be69b85497264b1d654b138dce01-39x50.svg",PandaDoc:"https://cdn.sanity.io/images/e92memrj/production/728e1e88c0a31f218d18971d3e9da2de81bad906-120x50.svg",ProductHunt:"https://cdn.sanity.io/images/e92memrj/production/0334d3583cd66c0361cd0c3b1bd28d92307cf01a-126x50.svg",Ramp:"https://cdn.sanity.io/images/e92memrj/production/892932e7f3dc3c66d3ae4a16e8bc51e37b7f59f4-120x50.svg",StubHub:"https://cdn.sanity.io/images/e92memrj/production/84cee8330df6df867d752ef0336d987b73845add-81x50.svg",WeightsAndBiases:"https://cdn.sanity.io/images/e92memrj/production/1eaf4b79b17b9f39d479a6cca9f8b60e06105d44-169x50.svg",Zoe:"https://cdn.sanity.io/images/e92memrj/production/ac4cbae3f4b1d599f5d51d290bd183be0b16253a-114x50.svg"}])},922998,(e,t,i)=>{Object.defineProperty(i,"__esModule",{value:!0});var a=e.r(271645),n=a&&"object"==typeof a&&"default"in a?a:{default:a};!function(e){if(!e||"u"<typeof window)return;let t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t)}('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}'),i.default=a.forwardRef(function({style:e={},className:t="",autoFill:i=!1,play:o=!0,pauseOnHover:r=!1,pauseOnClick:d=!1,direction:s="left",speed:l=50,delay:c=0,loop:p=0,gradient:m=!1,gradientColor:u="white",gradientWidth:f=200,onFinish:g,onCycleComplete:h,onMount:x,children:b},y){let[w,v]=a.useState(0),[C,$]=a.useState(0),[j,_]=a.useState(1),[I,N]=a.useState(!1),M=a.useRef(null),S=y||M,k=a.useRef(null),E=a.useCallback(()=>{if(k.current&&S.current){let e=S.current.getBoundingClientRect(),t=k.current.getBoundingClientRect(),a=e.width,n=t.width;("up"===s||"down"===s)&&(a=e.height,n=t.height),i&&a&&n?_(n<a?Math.ceil(a/n):1):_(1),v(a),$(n)}},[i,S,s]);a.useEffect(()=>{if(I&&(E(),k.current&&S.current)){let e=new ResizeObserver(()=>E());return e.observe(S.current),e.observe(k.current),()=>{e&&e.disconnect()}}},[E,S,I]),a.useEffect(()=>{E()},[E,b]),a.useEffect(()=>{N(!0)},[]),a.useEffect(()=>{"function"==typeof x&&x()},[]);let Q=a.useMemo(()=>i?C*j/l:C<w?w/l:C/l,[i,w,C,j,l]),L=a.useMemo(()=>Object.assign(Object.assign({},e),{"--pause-on-hover":!o||r?"paused":"running","--pause-on-click":!o||r&&!d||d?"paused":"running","--width":"up"===s||"down"===s?"100vh":"100%","--transform":"up"===s?"rotate(-90deg)":"down"===s?"rotate(90deg)":"none"}),[e,o,r,d,s]),P=a.useMemo(()=>({"--gradient-color":u,"--gradient-width":"number"==typeof f?`${f}px`:f}),[u,f]),T=a.useMemo(()=>({"--play":o?"running":"paused","--direction":"left"===s?"normal":"reverse","--duration":`${Q}s`,"--delay":`${c}s`,"--iteration-count":p?`${p}`:"infinite","--min-width":i?"auto":"100%"}),[o,s,Q,c,p,i]),A=a.useMemo(()=>({"--transform":"up"===s?"rotate(90deg)":"down"===s?"rotate(-90deg)":"none"}),[s]),R=a.useCallback(e=>[...Array(Number.isFinite(e)&&e>=0?e:0)].map((e,t)=>n.default.createElement(a.Fragment,{key:t},a.Children.map(b,e=>n.default.createElement("div",{style:A,className:"rfm-child"},e)))),[A,b]);return I?n.default.createElement("div",{ref:S,style:L,className:"rfm-marquee-container "+t},m&&n.default.createElement("div",{style:P,className:"rfm-overlay"}),n.default.createElement("div",{className:"rfm-marquee",style:T,onAnimationIteration:h,onAnimationEnd:g},n.default.createElement("div",{className:"rfm-initial-child-container",ref:k},a.Children.map(b,e=>n.default.createElement("div",{style:A,className:"rfm-child"},e))),R(j-1)),n.default.createElement("div",{className:"rfm-marquee",style:T},R(j))):null})}]);