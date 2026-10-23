(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,637804,e=>{"use strict";var t=e.i(843476),r=e.i(271645),n=e.i(522016);let i={},o=r.forwardRef(function({href:e,trackingLabel:r,children:o,...a},l){let s=e.includes("app.hex.tech")?{rel:"noopener noreferrer"}:!function(e){if(e.startsWith("#")||e.startsWith("/")&&!e.startsWith("//"))return!0;try{let{hostname:t}=new URL(e);return"hex.tech"===t||"www.hex.tech"===t}catch{return!1}}(e)?{rel:"noopener noreferrer",target:"_blank"}:{},c=r?{"data-tracking-label":r}:{};if(s.rel||s.target)return(0,t.jsx)("a",{ref:l,href:e,...s,...c,...a,children:o});let u=function(e){if(!e.startsWith("#")&&!e.startsWith("//")){if(e.startsWith("/"))return e.split(/[?#]/)[0];try{return new URL(e).pathname}catch{return}}}(e),p=!!u&&function(e){let t=e.replace(/\/+$/,"")||"/";if(!Object.hasOwn(i,t))return[];let r=i[t];return Array.isArray(r)?r:[r]}(u).length>0;return(0,t.jsx)(n.default,{ref:l,href:e,prefetch:!p&&void 0,...c,...a,children:o})});e.s(["SiteLink",0,o],637804)},706736,803212,e=>{"use strict";var t=e.i(843476),r=e.i(997053),n=e.i(637804),i=e.i(154213),o=e.i(271645);let a="-7px",l="13px",s=r.default.div.withConfig({displayName:"CornerCircles__Wrapper",componentId:"sc-5ce1390d-0"})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 !important;
  pointer-events: none;
  opacity: 1;
  transition: opacity
    ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`};

  > span:before,
  > span:after {
    content: '';
    display: block;
    position: absolute;
    width: ${l};
    height: ${l};
    border-radius: 50%;
    border: 1px solid color-mix(in srgb, ${({theme:e})=>e.highlightColor} 30%, transparent);
  }
`,c=r.default.span.withConfig({displayName:"CornerCircles__Left",componentId:"sc-5ce1390d-1"})`
  &:before {
    top: ${a};
    left: ${a};
  }

  &:after {
    bottom: ${a};
    left: ${a};
  }
`,u=r.default.span.withConfig({displayName:"CornerCircles__Right",componentId:"sc-5ce1390d-2"})`
  &:before {
    top: ${a};
    right: ${a};
  }

  &:after {
    bottom: ${a};
    right: ${a};
  }
`,p=o.memo(({className:e})=>(0,t.jsxs)(s,{className:e,"data-which":"corner-circles",children:[(0,t.jsx)(c,{}),(0,t.jsx)(u,{})]}));p.displayName="CornerCircles",e.s(["CornerCircles",0,p],803212);var d=e.i(815898);let f=r.css`
  box-sizing: content-box;
  position: relative;
  flex: none;
  display: flex;
  height: ${({$size:e})=>"small"===e?"36px":"large"===e?"48px":"40px"};
  background: transparent;
  outline: none;
  padding: ${({$size:e})=>"small"===e?"0 15px":"0 20px"};
  user-select: none;
  cursor: pointer;
  font-size: ${({$size:e,theme:t})=>"small"===e?t.fontSize.SMALL:t.fontSize.DEFAULT};
  color: ${({theme:e})=>e.fontColor.DEFAULT};
  border: 1px solid transparent;
  min-width: 0;

  transition:
    background-color
      ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`},
    border-color
      ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`};

  ${({$disabled:e})=>e?r.css`
          pointer-events: none;
          cursor: default;

          &:hover,
          &:active {
            background-color: transparent;
          }

          .corners {
            display: none;
          }
        `:r.css`
          &:hover {
            background-color: ${({theme:e})=>e.borderColor.MUTED};
            border-color: ${({theme:e})=>e.borderColor.STRONG};
            text-decoration: none;
          }

          &:active {
            background-color: ${({theme:e})=>e.borderColor.DEFAULT};
          }
        `}

  ${({$fill:e})=>e&&r.css`
      width: 100%;

      ${x} {
        width: 100%;
      }
    `}

    ${({$multiline:e,$size:t})=>e&&r.css`
      align-items: center;
      display: flex;
      height: auto;
      min-height: ${"small"===t?"36px":"40px"};

      ${x},
      ${C} {
        white-space: unset;
      }
    `}

    ${({$stylez:e})=>"minimal"===e&&r.css`
      border-color: transparent;
    `}

    ${({$stylez:e})=>"default"===e&&r.css`
      border: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
    `}

    ${({$stylez:e,theme:t})=>("bold"===e||"loud"===e)&&r.css`
      ${({theme:e})=>e.buttonLoudStyles};
      border: 1px solid transparent;
      background-clip: padding-box, border-box;
      background-origin: padding-box, border-box;

      &::after {
        content: '';
        pointer-events: none;
        position: absolute;
        top: 1px;
        left: 1px;
        right: 1px;
        z-index: 1;
        bottom: 1px;
        background-clip: padding-box, border-box;
        background-origin: padding-box, border-box;
        transition: opacity ${t.animation.DURATION}
          ${t.animation.EASING};
      }

      &:hover::after {
        opacity: 0.3;
      }

      &:active::after {
        opacity: 0.6;
      }

      [data-theme='pink'] & {
        background-image: linear-gradient(
            to right,
            ${t.paletteCssVars.fg100},
            ${t.paletteCssVars.fg100}
          ),
          linear-gradient(
            45deg,
            ${({theme:e})=>e.paletteCssVars.grid700} 0%,
            ${({theme:e})=>e.paletteCssVars.grid700} 100%
          );

        &:hover::after {
          opacity: 0.9;
        }

        &:active::after {
          opacity: 0.7;
        }

        &::after {
          background-color: ${({theme:e})=>e.paletteCssVars.fg1200};
          opacity: 1;

          background-image: linear-gradient(45deg, #373749, #14141c 300%);
        }
      }
    `}

${({$stylez:e})=>"loud"===e&&r.css`
      &:hover {
        div[data-which='corner-circles'] {
          opacity: 0;
        }
      }
    `}

    ${({$active:e})=>e&&r.css`
      background-color: ${({theme:e})=>e.paletteCssVars.fg1200};
      color: ${({theme:e})=>e.paletteCssVars.bg300};

      [data-icon] {
        color: ${({theme:e})=>e.paletteCssVars.bg300};
      }

      &:hover {
        background-color: ${({theme:e})=>e.paletteCssVars.fg1200};
      }
    `}
`,m=r.css`
  &:focus-visible {
    outline: var(
      --app-focus-outline,
      2px solid ${({theme:e})=>e.highlightColor}
    );
    outline-offset: var(--app-focus-outline-offset, 2px);
  }
`,g=r.default.button.withConfig({displayName:"Button__ButtonWrapper",componentId:"sc-3759e784-0"})`
  ${f}

  appearance: none;
  margin: 0;
  font-family: inherit;
  font-weight: inherit;
  line-height: inherit;
  text-align: inherit;

  ${m}
`,h=r.default.a.withConfig({displayName:"Button__LinkWrapperBase",componentId:"sc-3759e784-1"})`
  ${f}

  ${m}
`,x=r.default.div.withConfig({displayName:"Button__Inner",componentId:"sc-3759e784-2"})`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: row;
  align-items: center;
  height: inherit;
  white-space: nowrap;
  min-width: 0;
  gap: 10px;

  ${({$iconPos:e})=>"right"===e&&r.css`
      flex-direction: row-reverse;
    `}

  ${({$alignText:e})=>"center"===e&&r.css`
      justify-content: center;
      text-align: center;
    `}

    ${({$alignText:e})=>"left"===e&&r.css`
      justify-content: flex-start;
      text-align: left;
    `}

    ${({$alignText:e})=>"right"===e&&r.css`
      justify-content: flex-end;
      text-align: right;
    `}
`,b=r.default.div.withConfig({displayName:"Button__Icon",componentId:"sc-3759e784-3"})`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`,C=r.default.div.withConfig({displayName:"Button__Children",componentId:"sc-3759e784-4"})`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  position: relative;
  z-index: 2;
  pointer-events: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;e.s(["Button",0,function({active:e=!1,alignText:r="center",href:o,text:a,className:l,"data-markdown-exclude":s,"data-sanity":c,disabled:u=!1,fill:f=!1,multiline:m=!1,icon:$,iconPos:y="left",onClick:v,loading:E=!1,size:A="default",stylez:T="default",disableCornerLines:S,trackingLabel:L,type:B}){let D={$active:e,$disabled:u||E,$fill:f,$multiline:m,$size:A,$stylez:T},F=(0,t.jsxs)(x,{$alignText:r,$iconPos:y,children:["minimal"===T||S?null:(0,t.jsx)(d.CornerLines,{animateTo:5,bottomLeft:!0,bottomRight:!0,position:-1,size:15,topLeft:!0,topRight:!0}),$&&(0,t.jsx)(b,{children:$}),a&&(0,t.jsx)(C,{children:a}),"loud"===T&&(0,t.jsx)(p,{})]});return(v||B)&&!o?(0,t.jsx)(g,{...D,className:l,"data-markdown-exclude":s,"data-sanity":c,disabled:u||E,type:B??"button",onClick:e=>{(0,i.logTracking)({children:a,label:L}),v?.(e)},children:F}):(0,t.jsx)(h,{as:n.SiteLink,...D,className:l,"data-markdown-exclude":s,"data-sanity":c,href:o||"",trackingLabel:L,onClick:v,children:F})}],706736)},815898,e=>{"use strict";var t=e.i(843476),r=e.i(271645),n=e.i(997053);let i=-6,o=30,a=n.default.div.withConfig({displayName:"CornerLines__Wrapper",componentId:"sc-8dce4083-0"})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 !important;
  pointer-events: none;

  > span:before {
    content: '';
    display: block;
    position: absolute;
    width: ${({$size:e})=>`${e}px`};
    height: ${({$size:e})=>`${e}px`};
    transition:
      transform ${({theme:e})=>e.animation.DURATION}
        ${({theme:e})=>e.animation.EASING},
      opacity ${({theme:e})=>e.animation.DURATION}
        ${({theme:e})=>e.animation.EASING};
  }

  ${({$animateTo:e})=>e&&n.css`
      opacity: 0;
      pointer-events: all;

      &:hover {
        opacity: 1;

        ${l}::before {
          transform: translate(-${e}px, -${e}px);
        }

        ${c}::before {
          transform: translate(-${e}px, ${e}px);
        }

        ${s}::before {
          transform: translate(${e}px, -${e}px);
        }

        ${u}::before {
          transform: translate(${e}px, ${e}px);
        }
      }
    `}

  [data-theme='pink'] & {
    --button-cornerline-color: ${({theme:e})=>e.paletteCssVars.fg1200};
  }

  ${({$color:e})=>e&&n.css`
      --button-cornerline-color: ${e};
    `}
`,l=n.default.span.withConfig({displayName:"CornerLines__TopLeft",componentId:"sc-8dce4083-1"})`
  &:before {
    border-top: 1px solid
      ${({theme:e})=>`var(--button-cornerline-color, ${e.borderColor.DEFAULT})`};
    border-left: 1px solid
      ${({theme:e})=>`var(--button-cornerline-color, ${e.borderColor.DEFAULT})`};
    top: ${({$position:e})=>`${e}px`};
    left: ${({$position:e})=>`${e}px`};
  }
`,s=n.default.span.withConfig({displayName:"CornerLines__TopRight",componentId:"sc-8dce4083-2"})`
  &:before {
    border-top: 1px solid
      ${({theme:e})=>`var(--button-cornerline-color, ${e.borderColor.DEFAULT})`};
    border-right: 1px solid
      ${({theme:e})=>`var(--button-cornerline-color, ${e.borderColor.DEFAULT})`};
    top: ${({$position:e})=>`${e}px`};
    right: ${({$position:e})=>`${e}px`};
  }
`,c=n.default.span.withConfig({displayName:"CornerLines__BottomLeft",componentId:"sc-8dce4083-3"})`
  &:before {
    border-bottom: 1px solid
      ${({theme:e})=>`var(--button-cornerline-color, ${e.borderColor.DEFAULT})`};
    border-left: 1px solid
      ${({theme:e})=>`var(--button-cornerline-color, ${e.borderColor.DEFAULT})`};
    bottom: ${({$position:e})=>`${e}px`};
    left: ${({$position:e})=>`${e}px`};
  }
`,u=n.default.span.withConfig({displayName:"CornerLines__BottomRight",componentId:"sc-8dce4083-4"})`
  &:before {
    border-bottom: 1px solid
      ${({theme:e})=>`var(--button-cornerline-color, ${e.borderColor.DEFAULT})`};
    border-right: 1px solid
      ${({theme:e})=>`var(--button-cornerline-color, ${e.borderColor.DEFAULT})`};
    bottom: ${({$position:e})=>`${e}px`};
    right: ${({$position:e})=>`${e}px`};
  }
`,p=r.memo(({color:e,topLeft:r,topRight:n,bottomLeft:p,bottomRight:d,position:f=i,size:m=o,animateTo:g})=>(0,t.jsxs)(a,{$animateTo:g,$color:e,$size:m,children:[r&&(0,t.jsx)(l,{$position:f}),n&&(0,t.jsx)(s,{$position:f}),p&&(0,t.jsx)(c,{$position:f}),d&&(0,t.jsx)(u,{$position:f})]}));p.displayName="CornerLines",e.s(["CornerLines",0,p])},883715,e=>{"use strict";let t={black:"#01011b",white:"#ffffff",obsidian:"#14141C",roseQuartz:"#F5C0C0",amethyst:"#A477B2",minsk:"#473982",eggplant:"#31263B",jade:"#5CB198",citrine:"#CDA849",opal:"#FBF9F9",violetTopaz:"#5F509D",cement:"#717A94"},r={...t,fgLoud:t.white,highlightColor:t.roseQuartz,fontColor:{DEFAULT:t.roseQuartz,MUTED:"#9c8ba4",LOUD:t.white}};e.s(["ColorVars",0,{GRAY:"#f8fafb",BLACK:"#01011b",WHITE:"#ffffff",PURPLE:"#473982",LIGHT_PURPLE:"#ad8eb6",LIGHT_PINK:"#f5c0c0",LIGHT_GREEN:"#43D59D",LIGHT_BLUE:"#8ABBFF",DARK_GREEN:"#1C866B",DARK_BLUE:"#215DB0",OBSIDIAN:"#14141C",VIOLET_TOPAZ:"#5F509D",LIGHT_VIOLET_TOPAZ:"#EAE8F0",LIGHTEST_VIOLET_TOPAZ:"#faf7ff"},"appUI",0,{borderColor:{DEFAULT:"#dadde6",MUTED:"#ECEDF2"},outlinedBorderColor:{DEFAULT:"#f5c0c066",MUTED:"#f5c0c033"},fontColor:{DEFAULT:"#01011B",MUTED:"#717A94"},backgroundColor:{MUTED:"#F8FAFB",DEFAULT:"#FFFFFF"},primaryColor:"#254685",intent:{DANGER:"#B63245",SUCCESS:"#0F6B5B",WARNING:"#A67908",PRIMARY:"#473982"}},"darkAppUI",0,{borderColor:{DEFAULT:"#3F4257",MUTED:"#2a2a38"},outlinedBorderColor:{DEFAULT:"#f5c0c04d",MUTED:"#f5c0c026"},fontColor:{DEFAULT:"#E4E6EC",MUTED:"#B1B6C4"},backgroundColor:{DEFAULT:"#1F1F29",MUTED:"#191922"},primaryColor:"#F5C0C0",intent:{DANGER:"#E54D62",SUCCESS:"#2BA88A",WARNING:"#D4A032",PRIMARY:"#F5C0C0"}},"darkMagicColors",0,{backgroundGradient:"linear-gradient(90deg, #6646A81A 0%, #9757AB12 100%)",primaryColor:"#F5C0C0",secondaryColor:"#F5C0C0",tertiaryColor:"#F5C0C0",removingColor:"#e85a69"},"magicColors",0,{backgroundGradient:"linear-gradient(90deg, #6646A80C 0%, #9757AB06 100%)",primaryColor:"#F5C0C0",secondaryColor:"#F5C0C0",tertiaryColor:"#F5C0C0",removingColor:"#c84654"},"palette",0,r,"paletteBase",0,t])},409027,572002,243464,872582,310198,861949,924467,697398,376277,747741,e=>{"use strict";var t=e.i(193594),r=e.i(883715);let n=(0,t.mix)(.35,r.paletteBase.eggplant,r.paletteBase.cement),i={chromeGradient:`linear-gradient(
  180deg,
  ${(0,t.mix)(.22,r.paletteBase.roseQuartz,r.paletteBase.obsidian)} 0%,
  ${(0,t.mix)(.16,r.paletteBase.cement,r.paletteBase.obsidian)} 100%
)`,trafficLightButton:{border:`1px solid ${(0,t.rgba)(r.paletteBase.roseQuartz,.25)}`,background:`linear-gradient(
      180deg,
      ${(0,t.rgba)(r.paletteBase.roseQuartz,.25)} 0%,
      ${(0,t.rgba)(r.paletteBase.roseQuartz,.05)} 100%
    )`}},o={chromeGradient:`linear-gradient(
  180deg,
  ${(0,t.rgba)((0,t.mix)(.08,r.paletteBase.roseQuartz,r.paletteBase.white),.55)} 0%,
  ${(0,t.rgba)((0,t.mix)(.06,r.paletteBase.eggplant,r.paletteBase.white),.5)} 100%
)`,trafficLightButton:{border:`1px solid ${(0,t.rgba)(n,.22)}`,background:`linear-gradient(
      180deg,
      ${(0,t.rgba)(r.paletteBase.cement,.14)} 0%,
      ${(0,t.rgba)(r.paletteBase.eggplant,.1)} 100%
    )`}};e.s(["outerBrowserWindowDark",0,i,"outerBrowserWindowLight",0,o],572002);let a={100:0,200:.026,300:.056,400:.077,500:.103,600:.129,700:.172,800:.249,900:.386,1e3:.446,1100:.592,1200:.923},l={200:.077,300:.103,400:.129,500:.172,600:.249,700:.386,1200:.923},s={300:.025,400:.0125,500:0};function c(e,t,r){let n={};return Object.entries(e).forEach(([e,i])=>{n[`${t}${e}`]=r(i)}),n}let u=c(a,"fg",e=>(0,t.mix)(e,r.paletteBase.roseQuartz,r.paletteBase.obsidian)),p=c(a,"fgA",e=>(0,t.rgba)(r.paletteBase.roseQuartz,e)),d=c(l,"grid",e=>(0,t.mix)(e,r.paletteBase.roseQuartz,r.paletteBase.obsidian)),f=c(s,"bg",e=>(0,t.darken)(e,r.paletteBase.obsidian)),m={fgLoud:r.paletteBase.white,fg100:u.fg100,fg200:u.fg200,fg300:u.fg300,fg400:u.fg400,fg500:u.fg500,fg600:u.fg600,fg700:u.fg700,fg800:u.fg800,fg900:u.fg900,fg1000:u.fg1000,fg1100:u.fg1100,fg1200:u.fg1200,grid200:d.grid200,grid300:d.grid300,grid400:d.grid400,grid500:d.grid500,grid600:d.grid600,grid700:d.grid700,grid1200:d.grid1200,bg300:f.bg300,bg400:f.bg400,bg500:f.bg500},g={...r.paletteBase,...u,...p,...d,...f,fgLoud:r.paletteBase.white,highlightColor:r.paletteBase.roseQuartz,fontColor:{DEFAULT:r.paletteBase.roseQuartz,MUTED:u.fg1100,LOUD:r.paletteBase.white}};e.s(["bg",0,f,"commonComputed",0,m,"computedColors",0,{fg:u,fgA:p,grid:d,bg:f,shades:{fg:a,grid:l,bg:s}},"fg",0,u,"fgA",0,p,"grid",0,d,"interpolateRecord",0,c,"paletteWithComputed",0,g],243464);let h={100:0,200:.03,300:.05,400:.07,500:.09,600:.11,700:.14,800:.22,900:.44,1e3:.48,1100:.57,1200:.91},x=c(h,"fg",e=>(0,t.mix)(e,r.paletteBase.eggplant,"#FFFCFC")),b=c(h,"fgA",e=>(0,t.rgba)(r.paletteBase.eggplant,e)),C=c({200:.077,300:.103,400:.129,500:.172,600:.249,700:.386,1200:.923},"grid",e=>(0,t.mix)(e,r.paletteBase.eggplant,"#FFFCFC")),$=c({300:.005,400:.025,500:.125},"bg",e=>(0,t.darken)(e,"#FDFAFA"));e.s(["lightBg",0,$,"lightFg",0,x,"lightFgA",0,b,"lightGrid",0,C],872582);let y="#FDDDDD",v="#222230",E="#EDABAB",A={100:0,200:.03,300:.05,400:.07,500:.09,600:.11,700:.14,800:.22,900:.44,1e3:.48,1100:.57,1200:.91},T=c(A,"fg",e=>(0,t.mix)(e,v,y)),S=c(A,"fgA",e=>(0,t.rgba)(v,e)),L=c({200:.12,300:.4,400:.5,500:.6,600:.5,700:.7,1200:1},"grid",e=>(0,t.mix)(e,E,y));L.grid1200=v;let B={bg300:E,bg400:(0,t.mix)(.4,E,y),bg500:y};e.s(["pinkBg",0,B,"pinkBlack",0,v,"pinkFg",0,T,"pinkFgA",0,S,"pinkGrid",0,L],310198);let D={...r.paletteBase,...u,...p,...d,...f,fgLoud:r.paletteBase.white,highlightColor:r.paletteBase.roseQuartz,fontColor:{DEFAULT:r.paletteBase.roseQuartz,MUTED:u.fg1100,LOUD:r.paletteBase.white}},F={...r.paletteBase,...x,...b,...C,...$,fgLoud:r.paletteBase.obsidian,highlightColor:r.paletteBase.eggplant,fontColor:{DEFAULT:r.paletteBase.eggplant,MUTED:x.fg1100,LOUD:r.paletteBase.obsidian}},w={...r.paletteBase,...T,...S,...L,...B,fgLoud:v,highlightColor:r.paletteBase.roseQuartz,fontColor:{DEFAULT:v,MUTED:T.fg1100,LOUD:v}};e.s(["darkPalette",0,D,"lightPalette",0,F,"pinkPalette",0,w],861949);let U={vars:r.ColorVars,palette:r.palette,paletteBase:r.paletteBase,appUI:r.appUI,magic:r.magicColors};e.s(["colors",0,U],924467);let z={img:"url('/images/light-bkg-noise.webp')",size:"256px 256px",mixBlendMode:"normal",opacity:"0.06"};function _(e,t="--"){let r={};for(let[n,i]of Object.entries(e))if("object"!=typeof i||null===i||Array.isArray(i))r[`${t}${n}`]=String(i);else for(let[e,o]of Object.entries(i))r[`${t}${n}${e}`]=String(o);return r}let I=_(D),R=_(F),M=_(w),O=_({img:"url('/images/bkg-noise.webp')",size:"200px 200px",mixBlendMode:"normal",opacity:"0.0625"},"--texture-paper-"),k=_(z,"--texture-paper-"),N=_(z,"--texture-paper-"),W={"--texture-hatch-img":`repeating-linear-gradient(
    45deg,
    transparent 0,
    transparent calc(var(--hatch-size, 6px) - 1px),
    var(--hatch-color, var(--bg500)) calc(var(--hatch-size, 6px) - 1px),
    var(--hatch-color, var(--bg500)) var(--hatch-size, 6px)
  )`},P=_({borderColor:{MUTED:"var(--grid300)",DEFAULT:"var(--grid500)",STRONG:"var(--grid700)"}}),j=Object.keys(D).reduce((e,t)=>{let r=D[t];return"object"!=typeof r||null===r||Array.isArray(r)||"function"==typeof r?e[t]=`var(--${t})`:e[t]=Object.keys(r).reduce((e,r)=>(e[r]=`var(--${t}${r})`,e),{}),e},{});Object.keys(D).reduce((e,t)=>{let r=D[t];return"object"!=typeof r||null===r||Array.isArray(r)||"function"==typeof r?e[t]=`--${t}`:e[t]=Object.keys(r).reduce((e,r)=>(e[r]=`--${t}${r}`,e),{}),e},{}),e.s(["borderColorCssVarDefinitions",0,P,"cssVarDefinitionsToString",0,function(e){return Object.entries(e).map(([e,t])=>`${e}: ${t};`).join("\n")},"darkCssVarDefinitions",0,I,"darkTextureDefinitions",0,O,"hatchTextureCssVarDefinitions",0,W,"lightCssVarDefinitions",0,R,"lightTextureDefinitions",0,k,"paletteCssVarRefs",0,j,"pinkCssVarDefinitions",0,M,"pinkTextureDefinitions",0,N],697398);var G=e.i(518586);let V={MOBILE:450,SMALL:600,MEDIUM:800,LARGE:1e3,EXTRA_LARGE:1250},Q={MOBILE:`${V.MOBILE}px`,SMALL:`${V.SMALL}px`,MEDIUM:`${V.MEDIUM}px`,LARGE:`${V.LARGE}px`,EXTRA_LARGE:`${V.EXTRA_LARGE}px`},K={MOBILE:`only screen and (max-width: ${V.MOBILE}px)`,SMALL:`only screen and (max-width: ${V.SMALL}px)`,MEDIUM:`only screen and (max-width: ${V.MEDIUM}px)`,LARGE:`only screen and (max-width: ${V.LARGE}px)`,EXTRA_LARGE:`only screen and (max-width: ${V.EXTRA_LARGE}px)`};e.s(["MEDIA_QUERIES",0,V,"mediaQueryString",0,K,"spacing",0,{mediaQueries:V,mediaQuery:Q,mediaQueryString:K,maxWidth:{BLOG:"740px",PAGE_NARROW:"1100px",PAGE:"1240px",PAGE_WIDE:"1300px",GRID_CONTENT_CONDENSED:"1536px",GRID_CONTENT:"1840px"},borderRadius:"3px",appUI:{borderRadius:"3px"},tout:{DEFAULT:"80px 40px",VERTICAL:"80px",HORIZONTAL:"40px"},animation:{DURATION:"0.25s",EASING:"cubic-bezier(0.25, 0.1, 0.25, 1)",durationMedium:"0.25s",durationMediumMs:250},springAnimations:{tightSpring:{type:"spring",stiffness:571,damping:32,mass:1},mediumSpring:{type:"spring",stiffness:263,damping:25,mass:1}}}],376277),e.s(["generateFluidFontSize",0,function(e,t,r){let n=(0,G.calculateTypeScale)({minWidth:r?.minWidth||V.MOBILE,maxWidth:r?.maxWidth||V.EXTRA_LARGE,minFontSize:e,maxFontSize:t,minTypeScale:1,maxTypeScale:1}).find(e=>0===e.step);if(!n)throw Error(`generateFluidFontSize: utopia-core did not return a base step (step 0) for font size range ${e}-${t}px`);return n.clamp}],747741),e.s([],409027)},522016,(e,t,r)=>{"use strict";e.i(247167),Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return x},useLinkStatus:function(){return C}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let o=e.r(190809),a=e.r(843476),l=o._(e.r(271645)),s=e.r(195057),c=e.r(8372),u=e.r(818581),p=e.r(718967),d=e.r(405550),f=e.r(388540),m=e.r(91949),g=e.r(573668),h=e.r(509396);function x(t){var r;let n,i,o,[x,C]=(0,l.useOptimistic)(m.IDLE_LINK_STATUS),$=(0,l.useRef)(null),{href:y,as:v,children:E,prefetch:A=null,passHref:T,replace:S,shallow:L,scroll:B,onClick:D,onMouseEnter:F,onTouchStart:w,legacyBehavior:U=!1,onNavigate:z,transitionTypes:_,ref:I,unstable_dynamicOnHover:R,...M}=t;n=E,U&&("string"==typeof n||"number"==typeof n)&&(n=(0,a.jsx)("a",{children:n}));let O=l.default.useContext(c.AppRouterContext),k=!1!==A,N=!1===A?"none":!0===A?"full":"auto",W="none"!==N?"auto"===N?h.FetchStrategy.PPR:h.FetchStrategy.Full:h.FetchStrategy.PPR,P="string"==typeof(r=v||y)?r:(0,s.formatUrl)(r);if(U){if(n?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});i=l.default.Children.only(n)}let j=U?i&&"object"==typeof i&&i.ref:I,G,V=l.default.useCallback(e=>(null!==O&&($.current=(0,m.mountLinkInstance)(e,P,O,W,k,C,G)),()=>{$.current&&((0,m.unmountLinkForCurrentNavigation)($.current),$.current=null),(0,m.unmountPrefetchableInstance)(e)}),[k,P,O,W,C,G]),Q={ref:(0,u.useMergedRef)(V,j),onClick(t){U||"function"!=typeof D||D(t),U&&i.props&&"function"==typeof i.props.onClick&&i.props.onClick(t),!O||t.defaultPrevented||function(t,r,n,i,o,a,s,c="none"){if("u">typeof window){let u,{nodeName:p}=t.currentTarget;if("A"===p.toUpperCase()&&((u=t.currentTarget.getAttribute("target"))&&"_self"!==u||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,g.isLocalURL)(r)){i&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),a){let e=!1;if(a({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:d}=e.r(699781);l.default.startTransition(()=>{d(r,i?"replace":"push",!1===o?f.ScrollBehavior.NoScroll:f.ScrollBehavior.Default,n.current,s,c)})}}(t,P,$,S,B,z,_,N)},onMouseEnter(e){U||"function"!=typeof F||F(e),U&&i.props&&"function"==typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),O&&k&&(0,m.onNavigationIntent)(e.currentTarget,!0===R)},onTouchStart:function(e){U||"function"!=typeof w||w(e),U&&i.props&&"function"==typeof i.props.onTouchStart&&i.props.onTouchStart(e),O&&k&&(0,m.onNavigationIntent)(e.currentTarget,!0===R)}};return(0,p.isAbsoluteUrl)(P)?Q.href=P:U&&!T&&("a"!==i.type||"href"in i.props)||(Q.href=(0,d.addBasePath)(P)),o=U?l.default.cloneElement(i,Q):(0,a.jsx)("a",{...M,...Q,children:n}),(0,a.jsx)(b.Provider,{value:x,children:o})}let b=(0,l.createContext)(m.IDLE_LINK_STATUS),C=()=>(0,l.useContext)(b);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},818581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return i}});let n=e.r(271645);function i(e,t){let r=(0,n.useRef)(null),i=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=i.current;t&&(i.current=null,t())}else e&&(r.current=o(e,n)),t&&(i.current=o(t,n))},[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},573668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return o}});let n=e.r(718967),i=e.r(652817);function o(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,i.hasBasePath)(r.pathname)}catch(e){return!1}}},998183,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={assign:function(){return s},searchParamsToUrlQuery:function(){return o},urlQueryToSearchParams:function(){return l}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});function o(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function a(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function l(e){let t=new URLSearchParams;for(let[r,n]of Object.entries(e))if(Array.isArray(n))for(let e of n)t.append(r,a(e));else t.set(r,a(n));return t}function s(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,n]of r.entries())e.append(t,n)}return e}},195057,(e,t,r)=>{"use strict";e.i(247167),Object.defineProperty(r,"__esModule",{value:!0});var n={formatUrl:function(){return l},formatWithValidation:function(){return c},urlObjectKeys:function(){return s}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let o=e.r(190809)._(e.r(998183)),a=/https?|ftp|gopher|file/;function l(e){let{auth:t,hostname:r}=e,n=e.protocol||"",i=e.pathname||"",l=e.hash||"",s=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(c+=":"+e.port)),s&&"object"==typeof s&&(s=String(o.urlQueryToSearchParams(s)));let u=e.search||s&&`?${s}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||a.test(n))&&!1!==c?(c="//"+(c||""),i&&"/"!==i[0]&&(i="/"+i)):c||(c=""),l&&"#"!==l[0]&&(l="#"+l),u&&"?"!==u[0]&&(u="?"+u),i=i.replace(/[?#]/g,encodeURIComponent),u=u.replace("#","%23"),`${n}${c}${i}${u}${l}`}let s=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return l(e)}},718967,(e,t,r)=>{"use strict";e.i(247167),Object.defineProperty(r,"__esModule",{value:!0});var n={DecodeError:function(){return x},MiddlewareNotFoundError:function(){return y},MissingStaticPage:function(){return $},NormalizeError:function(){return b},PageNotFoundError:function(){return C},SP:function(){return g},ST:function(){return h},WEB_VITALS:function(){return o},execOnce:function(){return a},getDisplayName:function(){return p},getLocationOrigin:function(){return c},getURL:function(){return u},isAbsoluteUrl:function(){return s},isResSent:function(){return d},loadGetInitialProps:function(){return m},normalizeRepeatedSlashes:function(){return f},stringifyError:function(){return v}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let o=["CLS","FCP","FID","INP","LCP","TTFB"];function a(e){let t,r=!1;return(...n)=>(r||(r=!0,t=e(...n)),t)}let l=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,s=e=>{let t=e.charCodeAt(0);return!!(t>=65&&t<=90||t>=97&&t<=122)&&l.test(e)};function c(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function u(){let{href:e}=window.location,t=c();return e.substring(t.length)}function p(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function d(e){return e.finished||e.headersSent}function f(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function m(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await m(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&d(r))return n;if(!n)throw Object.defineProperty(Error(`"${p(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return n}let g="u">typeof performance,h=g&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class x extends Error{}class b extends Error{}class C extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class $ extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class y extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function v(e){return JSON.stringify({message:e.message,stack:e.stack})}},518586,(e,t,r)=>{"use strict";var n=e.e&&e.e.__spreadArray||function(e,t,r){if(r||2==arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))};Object.defineProperty(r,"__esModule",{value:!0}),r.calculateSpaceScale=r.calculateTypeScale=r.calculateClamps=r.checkWCAG=r.calculateClamp=void 0;var i=function(e,t,r){var n,i;return void 0===n&&(n=0),void 0===i&&(i=1),Math.min(i,Math.max(n,(r-e)/(t-e)))},o=function(e,t,r,n,o){var a;return r*(1-(a=i(e,t,o)))+n*a},a=function(e){return Math.round((e+Number.EPSILON)*1e4)/1e4},l=function(e,t){return Number(e)-Number(t)};function s(e){var t=e.min,r=e.max,n=e.minWidth,i=e.maxWidth;if(n>i){var o=n;n=i,i=o;var a=t;t=r,r=a}var l=(r-t)/(i-n),s=t-n*l,c=(5*t-2*s)/(2*l),u=(5*s-2*r)/(-1*l),p=3*s/l,d=[];return i<5*n?(n<c&&c<i&&d.push(Math.max(c,n),i),5*t<2*r&&d.push(i,5*n),5*n<u&&u<5*i&&d.push(5*n,Math.min(u,5*i))):(n<c&&c<5*n&&d.push(Math.max(c,n),5*n),5*n<p&&p<i&&d.push(Math.max(p,5*n),i),i<u&&u<5*i&&d.push(i,Math.min(u,5*i))),d.length&&.1>Math.abs((d=[d[0],d[d.length-1]])[1]-d[0])&&(d=null),d}r.calculateClamp=function(e){var t=e.maxSize,r=e.minSize,n=e.minWidth,i=e.maxWidth,o=e.usePx,l=void 0!==o&&o,s=e.relativeTo,c=r>t,u=l?1:16,p=l?"px":"rem",d={viewport:"vi","viewport-width":"vw",container:"cqi"},f=d[void 0===s?"viewport-width":s]||d.viewport,m=(t/u-r/u)/(i/u-n/u);return"clamp(".concat(a((c?t:r)/u)).concat(p,", ").concat(a(-(n/u*1)*m+r/u)).concat(p," + ").concat(a(100*m)).concat(f,", ").concat(a((c?r:t)/u)).concat(p,")")},r.checkWCAG=s,r.calculateClamps=function(e){var t=e.minWidth,n=e.maxWidth,i=e.pairs,o=e.relativeTo;return(void 0===i?[]:i).map(function(e){var i=e[0],a=e[1];return{label:"".concat(i,"-").concat(a),clamp:(0,r.calculateClamp)({minSize:i,maxSize:a,minWidth:t,maxWidth:n,relativeTo:o}),clampPx:(0,r.calculateClamp)({minSize:i,maxSize:a,minWidth:t,maxWidth:n,relativeTo:o,usePx:!0})}})};var c=function(e,t,r){var n=o(e.minWidth,e.maxWidth,e.minTypeScale,e.maxTypeScale,t);return o(e.minWidth,e.maxWidth,e.minFontSize,e.maxFontSize,t)*Math.pow(n,r)},u=function(e,t){if(void 0===t&&(t="utopia"),"utopia"===t)return e.toString();if(e<-2)return"".concat(-1*(e+1),"xs");if(-2===e)return"xs";if("tailwind"===t){if(-1===e)return"sm";if(0===e)return"base";if(1===e)return"lg"}if("tshirt"===t){if(-1===e)return"s";if(0===e)return"m";if(1===e)return"l"}return 2===e?"xl":e>2?"".concat(e-1,"xl"):e.toString()},p=function(e,t){var n=c(e,e.minWidth,t),i=c(e,e.maxWidth,t),o=s({min:n,max:i,minWidth:e.minWidth,maxWidth:e.maxWidth});return{step:t,label:u(t,e.labelStyle),minFontSize:a(n),maxFontSize:a(i),wcagViolation:(null==o?void 0:o.length)?{from:Math.round(o[0]),to:Math.round(o[1])}:null,clamp:(0,r.calculateClamp)({minSize:n,maxSize:i,minWidth:e.minWidth,maxWidth:e.maxWidth,relativeTo:e.relativeTo})}};r.calculateTypeScale=function(e){var t=Array.from({length:e.positiveSteps||0}).map(function(t,r){return p(e,r+1)}).reverse(),r=Array.from({length:e.negativeSteps||0}).map(function(t,r){return p(e,-1*(r+1))});return n(n(n([],t,!0),[p(e,0)],!1),r,!0)};var d=function(e,t,n){var i=Math.round(e.minSize*t),o=Math.round(e.maxSize*t),l="S";return 1===n?l="M":2===n?l="L":3===n?l="XL":n>3?l="".concat(n-2,"XL"):-1===n?l="XS":n<0&&(l="".concat(Math.abs(n),"XS")),{label:l.toLowerCase(),minSize:a(i),maxSize:a(o),multiplier:t,clamp:(0,r.calculateClamp)({minSize:i,maxSize:o,minWidth:e.minWidth,maxWidth:e.maxWidth,relativeTo:e.relativeTo}),clampPx:(0,r.calculateClamp)({minSize:i,maxSize:o,minWidth:e.minWidth,maxWidth:e.maxWidth,relativeTo:e.relativeTo,usePx:!0})}};r.calculateSpaceScale=function(e){var t=n([],e.positiveSteps||[],!0).sort(l).map(function(t,r){return d(e,t,r+1)}).reverse(),i=n([],e.negativeSteps||[],!0).sort(l).reverse().map(function(t,r){return d(e,t,-1*(r+1))}),o=n(n(n([],t,!0),[d(e,1,0)],!1),i,!0),a=n([],o.reverse(),!0).map(function(t,n,i){if(!n)return null;var o=i[n-1];return{label:"".concat(o.label,"-").concat(t.label),minSize:o.minSize,maxSize:t.maxSize,clamp:(0,r.calculateClamp)({minSize:o.minSize,maxSize:t.maxSize,minWidth:e.minWidth,maxWidth:e.maxWidth,relativeTo:e.relativeTo}),clampPx:(0,r.calculateClamp)({minSize:o.minSize,maxSize:t.maxSize,minWidth:e.minWidth,maxWidth:e.maxWidth,relativeTo:e.relativeTo,usePx:!0})}}).filter(function(e){return!!e}),s=(e.customSizes||[]).map(function(t){var n=t.split("-"),i=n[0],a=n[1];if(!i||!a)return null;var l=o.find(function(e){return e.label===i}),s=o.find(function(e){return e.label===a});return l&&s?{label:"".concat(i,"-").concat(a),minSize:l.minSize,maxSize:s.maxSize,clamp:(0,r.calculateClamp)({minWidth:e.minWidth,maxWidth:e.maxWidth,minSize:l.minSize,maxSize:s.maxSize,relativeTo:e.relativeTo}),clampPx:(0,r.calculateClamp)({minWidth:e.minWidth,maxWidth:e.maxWidth,minSize:l.minSize,maxSize:s.maxSize,relativeTo:e.relativeTo,usePx:!0})}:null}).filter(function(e){return!!e});return{sizes:o,oneUpPairs:a,customPairs:s}}}]);