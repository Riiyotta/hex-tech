(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,316619,e=>{"use strict";var i=e.i(843476),t=e.i(997053),a=e.i(637804),n=e.i(785514),o=e.i(165425),d=e.i(660814);let l=t.default.div.withConfig({displayName:"MinimalHeader__Container",componentId:"sc-34397e00-0"})`
  grid-column: 1 / -1;
  padding: 0 0.9rem;
`,r=t.default.div.withConfig({displayName:"MinimalHeader__InnerContainer",componentId:"sc-34397e00-1"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({theme:e})=>e.maxWidth.PAGE};
  margin: 0 auto;
`,s=t.default.a.withConfig({displayName:"MinimalHeader__LogoLink",componentId:"sc-34397e00-2"})`
  width: 4rem;
  border: none;
  margin: 0;
  display: block;
  color: inherit;
  text-decoration: none;
`,m=(0,t.default)(d.HexLogo).withConfig({displayName:"MinimalHeader__StyledLogo",componentId:"sc-34397e00-3"})`
  display: block;
`;e.s(["MinimalHeader",0,function({children:e,LogoWrapper:t}){let d=(0,i.jsx)(s,{as:a.SiteLink,href:"/",children:(0,i.jsx)(m,{})});return(0,i.jsx)(o.HeaderUIProvider,{children:(0,i.jsx)(n.Header,{children:(0,i.jsx)(l,{children:(0,i.jsxs)(r,{children:[t?(0,i.jsx)(t,{children:d}):d,e]})})})})}])},345444,e=>{"use strict";var i=e.i(843476),t=e.i(271645),a=e.i(997053);function n(e){if("string"!=typeof e)return null;try{let i=new URL(e);if("https:"!==i.protocol||"https://app.hex.tech"!==i.origin||i.username||i.password)return null;let t=i.href;return i.searchParams.set("embedded","true"),{href:t,embedSrc:i.href}}catch{return null}}let o=t.memo(function({logicLink:e,publishedAppLink:a}){let[o,c]=(0,t.useState)("published"),h=n(a),x=n(e);return h&&x?(0,i.jsxs)(d,{children:[(0,i.jsxs)(l,{role:"tablist",children:[(0,i.jsx)(r,{$selected:"published"===o,role:"tab",type:"button",onClick:()=>c("published"),children:"What you can build (app)"}),(0,i.jsx)(r,{$selected:"logic"===o,role:"tab",type:"button",onClick:()=>c("logic"),children:"How it's built (logic)"})]}),(0,i.jsxs)(s,{children:[(0,i.jsx)(m,{$visible:"published"===o,children:(0,i.jsx)("iframe",{allowFullScreen:!0,src:h.embedSrc,title:"Hex published app embed"})}),(0,i.jsx)(m,{$visible:"logic"===o,children:(0,i.jsx)("iframe",{allowFullScreen:!0,src:x.embedSrc,title:"Hex logic embed"})}),(0,i.jsx)(p,{href:"published"===o?h.href:x.href,rel:"noopener noreferrer",target:"_blank",children:"Explore this app"})]})]}):null}),d=a.default.div.withConfig({displayName:"SelfServeLiveDemo__Wrapper",componentId:"sc-76b4dcc7-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    padding: 60px 30px 0;
  }
`,l=a.default.div.withConfig({displayName:"SelfServeLiveDemo__Tabs",componentId:"sc-76b4dcc7-1"})`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    display: none;
  }
`,r=a.default.button.withConfig({displayName:"SelfServeLiveDemo__Tab",componentId:"sc-76b4dcc7-2"})`
  background: transparent;
  border: 1px solid
    ${({theme:e,$selected:i})=>i?e.borderColor.STRONG:e.borderColor.DEFAULT};
  color: ${({theme:e,$selected:i})=>i?e.fontColor.LOUD:e.fontColor.DEFAULT};
  cursor: pointer;
  padding: 8px 14px;
  font-size: 14px;
  font-family: inherit;
  transition:
    color 120ms ease,
    border-color 120ms ease;
`,s=a.default.div.withConfig({displayName:"SelfServeLiveDemo__EmbedFrame",componentId:"sc-76b4dcc7-3"})`
  position: relative;
  width: 100%;
  max-width: ${({theme:e})=>e.maxWidth.PAGE};
  margin: 0 auto;
  aspect-ratio: 16 / 9;
  background: white;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    aspect-ratio: 16 / 10;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    aspect-ratio: 16 / 12;
  }
`,m=a.default.div.withConfig({displayName:"SelfServeLiveDemo__EmbedSlot",componentId:"sc-76b4dcc7-4"})`
  position: absolute;
  inset: 0;
  visibility: ${({$visible:e})=>e?"visible":"hidden"};
  pointer-events: ${({$visible:e})=>e?"auto":"none"};

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
    display: block;
  }
`,p=a.default.a.withConfig({displayName:"SelfServeLiveDemo__ExploreLink",componentId:"sc-76b4dcc7-5"})`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: ${({theme:e})=>e.colors.BLACK};
  color: ${({theme:e})=>e.fontColor.LOUD};
  text-decoration: none;
  border: 1px solid ${({theme:e})=>e.borderColor.STRONG};
  padding: 10px 18px;
  font-size: 14px;
  font-weight: 600;
  z-index: 2;

  &:hover {
    color: ${({theme:e})=>e.fontColor.LOUD};
  }
`;e.s(["SelfServeLiveDemo",0,o],345444)},134700,e=>{"use strict";var i=e.i(843476),t=e.i(997053),a=e.i(739876),n=e.i(581444);let o=(0,t.default)(n.LayoutSubgrid).withConfig({displayName:"V1PageWrapper__V1Subgrid",componentId:"sc-cf85dce9-0"})`
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
`,d=(0,t.default)(a.GridRule).withConfig({displayName:"V1PageWrapper__ResponsiveGridRule",componentId:"sc-cf85dce9-1"})`
  @media (max-width: ${({theme:e})=>e.mediaQuery.MOBILE}) {
    display: none;
  }
`;e.s(["V1GridLines",0,function({children:e}){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.LayoutSubgrid,{"aria-hidden":"true","data-pile":!0,children:[(0,i.jsx)(d,{$column:4}),(0,i.jsx)(a.GridRule,{$column:7}),(0,i.jsx)(d,{$column:10})]}),(0,i.jsx)(n.LayoutSubgrid,{"data-pile":!0,children:e})]})},"V1PageWrapper",0,function({children:e,noTopPadding:t}){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.ContentMarginLine,{"data-v1-gridlines":!0}),(0,i.jsx)(o,{$noTopPadding:t,"data-content-grid":!0,children:e}),(0,i.jsx)(a.ContentMarginLine,{"data-right":!0,"data-v1-gridlines":!0})]})}])},78315,e=>{"use strict";var i=e.i(843476),t=e.i(271645),a=e.i(236726),n=e.i(193594),o=e.i(997053),d=e.i(561037),l=e.i(628928),r=e.i(628236),s=e.i(462689),m=e.i(580341),p=e.i(412968),c=e.i(445700),h=e.i(357044),x=e.i(389090),g=e.i(784297);let u=o.default.p.withConfig({displayName:"PortableText__Paragraph",componentId:"sc-997d1e-0"})`
  color: ${({theme:e})=>e.fontColor.LOUD};
  font-size: ${({theme:e})=>e.fontSize.MEDIUM};
  line-height: ${({theme:e})=>e.lineHeight.body.m};
  font-weight: ${({theme:e})=>e.fontWeight.LIGHT};
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`,f=o.default.h1.withConfig({displayName:"PortableText__StyledH1",componentId:"sc-997d1e-1"})`
  font-family: ${({theme:e})=>e.fontFamily.HEADING};
  color: ${({theme:e})=>e.fontColor.LOUD};
  font-weight: ${({theme:e})=>e.fontWeight.h1};
  line-height: ${({theme:e})=>e.lineHeight.h};
  letter-spacing: ${({theme:e})=>e.letterSpacing.h1};
  font-size: ${({theme:e})=>e.fontSize.h1};
  padding-top: 10px;
  margin-bottom: 20px;
`,y=o.default.h2.withConfig({displayName:"PortableText__StyledH2",componentId:"sc-997d1e-2"})`
  font-family: ${({theme:e})=>e.fontFamily.HEADING};
  color: ${({theme:e})=>e.fontColor.LOUD};
  font-weight: ${({theme:e})=>e.fontWeight.h2};
  line-height: ${({theme:e})=>e.lineHeight.h};
  letter-spacing: ${({theme:e})=>e.letterSpacing.h2};
  font-size: ${({theme:e})=>e.fontSize.h2};
  padding-top: 10px;
  margin-bottom: 20px;
`,b=o.default.h3.withConfig({displayName:"PortableText__StyledH3",componentId:"sc-997d1e-3"})`
  font-family: ${({theme:e})=>e.fontFamily.HEADING};
  color: ${({theme:e})=>e.fontColor.LOUD};
  font-weight: ${({theme:e})=>e.fontWeight.h4};
  line-height: ${({theme:e})=>e.lineHeight.h};
  letter-spacing: ${({theme:e})=>e.letterSpacing.h4};
  font-size: ${({theme:e})=>e.fontSize.h4};
  margin: 48px 0 16px;

  &:first-child {
    margin-top: 0;
  }
`,w=o.default.h4.withConfig({displayName:"PortableText__StyledH4",componentId:"sc-997d1e-4"})`
  font-family: ${({theme:e})=>e.fontFamily.HEADING};
  color: ${({theme:e})=>e.fontColor.LOUD};
  font-weight: ${({theme:e})=>e.fontWeight.h4};
  line-height: ${({theme:e})=>e.lineHeight.h};
  font-size: ${({theme:e})=>e.fontSize.h5};
  margin: 40px 0 12px;
`,I=o.default.h5.withConfig({displayName:"PortableText__StyledH5",componentId:"sc-997d1e-5"})`
  font-family: ${({theme:e})=>e.fontFamily.HEADING};
  color: ${({theme:e})=>e.fontColor.LOUD};
  font-weight: ${({theme:e})=>e.fontWeight.h4};
  line-height: ${({theme:e})=>e.lineHeight.h};
  font-size: ${({theme:e})=>e.fontSize.h6};
  margin: 32px 0 10px;
`,$=o.default.h6.withConfig({displayName:"PortableText__StyledH6",componentId:"sc-997d1e-6"})`
  font-family: ${({theme:e})=>e.fontFamily.HEADING};
  color: ${({theme:e})=>e.fontColor.LOUD};
  font-weight: ${({theme:e})=>e.fontWeight.h4};
  line-height: ${({theme:e})=>e.lineHeight.h};
  font-size: ${({theme:e})=>e.fontSize.DEFAULT};
  margin: 28px 0 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
`,j=o.default.hr.withConfig({displayName:"PortableText__Separator",componentId:"sc-997d1e-7"})`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
  margin: 2em 0;
`,_=o.default.a.withConfig({displayName:"PortableText__StyledLink",componentId:"sc-997d1e-8"})`
  color: ${({theme:e})=>e.highlightColor};
  border-color: ${({theme:e})=>e.highlightColor};

  &:hover {
    text-decoration: none;
    background-color: ${({theme:e})=>e.highlightColor30};
  }
`,S=o.default.code.withConfig({displayName:"PortableText__InlineCode",componentId:"sc-997d1e-9"})`
  background-color: ${({theme:e})=>e.colors.GRAY};
  border: 1px solid ${({theme:e})=>(0,n.darken)(.15,e.colors.GRAY)};
  padding: 2px 5px;
  color: ${({theme:e})=>e.colors.BLACK};
  border-radius: 0;
  font-size: ${({theme:e})=>e.fontSize.MEDIUM};
  white-space: pre-wrap;
  line-break: anywhere;
`,v=o.default.ul.withConfig({displayName:"PortableText__List",componentId:"sc-997d1e-10"})`
  padding-left: 24px;
  list-style-type: circle;
`,C=o.default.ol.withConfig({displayName:"PortableText__OrderedList",componentId:"sc-997d1e-11"})`
  padding-left: 24px;
`,N=o.default.li.withConfig({displayName:"PortableText__ListItem",componentId:"sc-997d1e-12"})`
  font-size: ${({theme:e})=>e.fontSize.MEDIUM};
  line-height: ${({theme:e})=>e.lineHeight.body.m};
  margin-bottom: 8px;

  > p {
    margin-bottom: 0;
  }
`,M=o.default.div.withConfig({displayName:"PortableText__EmbedWrapper",componentId:"sc-997d1e-13"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: ${({$height:e})=>`${e}px`};
  flex: 1 1 auto;
  margin-bottom: 20px;
`,L={block:{normal:({children:e})=>(0,i.jsx)(u,{children:e}),h4:({children:e})=>(0,i.jsx)(w,{children:e})},list:{bullet:({children:e})=>(0,i.jsx)(v,{children:e}),number:({children:e})=>(0,i.jsx)(C,{children:e})},listItem:{bullet:({children:e})=>(0,i.jsx)(N,{children:e}),number:({children:e})=>(0,i.jsx)(N,{children:e})},marks:{strong:({children:e})=>(0,i.jsx)("strong",{children:e}),em:({children:e})=>(0,i.jsx)("em",{children:e}),code:({children:e})=>(0,i.jsx)("code",{children:e}),link:({children:e,value:t})=>(0,i.jsx)(_,{href:t?.href,rel:"noopener noreferrer",target:"_blank",children:e})}},T={block:{normal:({children:e,value:t})=>{if((0,g.isCodeBlock)(t)){let a=(0,g.blockToPlainText)(t),{code:n}=(0,g.processCodeText)(a);return(0,i.jsx)(m.CodeBlock,{code:n,children:e})}return(0,i.jsx)(u,{children:e})},h1:({children:e})=>(0,i.jsx)(f,{children:e}),h2:({children:e})=>(0,i.jsx)(y,{children:e}),h3:({children:e})=>(0,i.jsx)(b,{children:e}),h4:({children:e})=>(0,i.jsx)(w,{children:e}),h5:({children:e})=>(0,i.jsx)(I,{children:e}),h6:({children:e})=>(0,i.jsx)($,{children:e}),separator:()=>(0,i.jsx)(j,{}),blockquote:({children:e})=>(0,i.jsx)("blockquote",{children:(0,i.jsx)(u,{children:e})})},list:{bullet:({children:e})=>(0,i.jsx)(v,{children:e}),number:({children:e})=>(0,i.jsx)(C,{children:e})},listItem:{bullet:({children:e})=>(0,i.jsx)(N,{children:e}),number:({children:e})=>(0,i.jsx)(N,{children:e})},marks:{strong:({children:e})=>(0,i.jsx)("strong",{children:e}),em:({children:e})=>(0,i.jsx)("em",{children:e}),i:({children:e})=>(0,i.jsx)("i",{children:e}),underline:({children:e})=>(0,i.jsx)("u",{children:e}),code:({children:e,text:t})=>{if("string"==typeof t){let{language:a,code:n}=(0,g.processCodeText)(t);return(0,i.jsx)(S,{className:a?`language-${a} `:"",children:a?n:e})}return(0,i.jsx)(S,{children:e})},link:({children:e,value:t})=>(0,i.jsx)(_,{href:t?.href,rel:"noopener noreferrer",target:"_blank",children:e})},types:{image:({value:e})=>e?.asset?.url?(0,i.jsx)(c.InlineImage,{alt:e.alt,caption:e.caption,height:e.asset.dimensions?.height,lqip:e.asset.lqip,src:e.asset.url,width:e.asset.dimensions?.width}):null,hexEmbed:({value:e})=>{if(!e?.source)return null;let t=e.height??610,a=e.source.includes("?embedded=true")?e.source:`${e.source}?embedded=true`;return(0,i.jsx)(M,{$height:t,children:(0,i.jsx)("iframe",{allowFullScreen:!0,src:a,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:0},title:e.title||"Hex embed"})})},mediaEmbed:({value:e})=>e?.url?(0,i.jsx)(h.MediaEmbed,{aspectratio:"60.742407199100114%",src:e.url,title:e.title}):null,floatImage:({value:e})=>{let t=e?.image?.asset?.url;if(!t)return null;let a="left"===e.position||"right"===e.position?e.position:"right";return(0,i.jsx)(p.FloatImage,{alt:e.title,offset:e.offset,position:a,src:t})},blogQuote:({value:e})=>(0,i.jsx)(s.BlogQuote,{image:e.image?.asset?.url?{url:e.image.asset.url}:void 0,meta:e.meta,minimal:e.minimal??!0,name:e.name,text:e.body}),blogHint:({value:e})=>(0,i.jsx)(l.BlogHint,{children:(0,i.jsx)(a.PortableText,{components:L,value:e?.body||[]})}),callout:({value:e})=>(0,i.jsx)(d.Callout,{children:(0,i.jsx)(a.PortableText,{components:L,value:e?.body||[]})}),videoFile:({value:e})=>{let t=e?.video?.asset?.url;return t?(0,i.jsx)(x.VideoFile,{caption:e.caption,src:t}):null},blogHtml:({value:e})=>e?.markup?(0,i.jsx)(r.BlogHtml,{markup:e.markup}):null}},A=t.memo(function({value:e,components:n}){let o=t.useMemo(()=>n?{...T,...n,block:{...T.block,...n.block},list:{...T.list,...n.list},listItem:{...T.listItem,...n.listItem},marks:{...T.marks,...n.marks},types:{...T.types,...n.types}}:T,[n]);return(0,i.jsx)(a.PortableText,{components:o,value:e})});e.s(["PortableText",0,A])},387510,e=>{"use strict";var i=e.i(843476),t=e.i(846932),a=e.i(997053),n=e.i(706736),o=e.i(258591),d=e.i(991709);let l=a.default.div.withConfig({displayName:"Cards__Wrapper",componentId:"sc-fce73095-0"})`
  max-width: ${({theme:e})=>e.maxWidth.PAGE};
  margin: 0 auto;
  padding: 0 40px;

  --gap: 40px;
  --cols: ${({$cols:e})=>e};

  display: flex;
  justify-content: center;
  align-content: stretch;
  flex-wrap: wrap;
  gap: var(--gap);

  & > * {
    width: calc((100% - (var(--gap) * (var(--cols) - 1))) / var(--cols));
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    --cols: ${({$cols:e})=>4===e?2:1};
  }

  & + & {
    margin-top: var(--gap);
  }
`,r={2:"Two Up",3:"Three Up",4:"Four Up"},s=a.default.div.withConfig({displayName:"Cards__ImageWrapper",componentId:"sc-fce73095-1"})`
  margin-bottom: 24px;

  img {
    width: 100%;
  }
`,m=(0,a.default)(o.Heading).withConfig({displayName:"Cards__StyledHeading",componentId:"sc-fce73095-2"})`
  text-align: left;
  margin-bottom: 16px;

  &[data-size='Four Up'] {
    ${o.HeadingFourStyles}
  }
`,p=a.default.p.withConfig({displayName:"Cards__P",componentId:"sc-fce73095-3"})`
  font-size: 16px;
  line-height: ${({theme:e})=>e.lineHeight.body.base};
  font-weight: ${({theme:e})=>e.fontWeight.body};
`,c=(0,a.default)(n.Button).withConfig({displayName:"Cards__StyledButton",componentId:"sc-fce73095-4"})`
  width: fit-content;
  margin-top: 16px;
`,h=a.default.div.withConfig({displayName:"Cards__CardWrapper",componentId:"sc-fce73095-5"})`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 0;
`;function x(e){let t=void 0!==e.onCtaClick?{onClick:e.onCtaClick}:e.ctaLink?{href:e.ctaLink}:{};return(0,i.jsxs)(h,{children:[(0,i.jsxs)("div",{children:[e.media?(0,i.jsx)(s,{children:e.media}):null,(0,i.jsx)(m,{"data-size":e.cardSize,renderAs:"h3",children:e.title}),e.copy?(0,i.jsx)(p,{children:e.copy}):null]}),e.ctaLabel&&(e.ctaLink||e.onCtaClick)?(0,i.jsx)(c,{text:e.ctaLabel,...t}):null]})}e.s(["Cards",0,function(e){var a;let n=(a=e.columns)&&a>=2&&a<=4?a:2,o=r[n]||"Two Up";return(0,i.jsx)(l,{$cols:n,...d.ANIMATIONS.SimpleFadeIn,as:t.motion.div,children:(e.cards||[]).map((e,t)=>e.title?(0,i.jsx)(x,{cardSize:o,copy:e.copy,ctaLabel:e.ctaLabel,ctaLink:e.ctaLink,media:e.media,title:e.title,onCtaClick:e.onCtaClick},e.title+t):null)})}])},493488,e=>{"use strict";var i=e.i(843476),t=e.i(271645),a=e.i(991709),n=e.i(846932),o=e.i(997053);let d=o.default.div.withConfig({displayName:"sharedStyles__Wrapper",componentId:"sc-4846cce8-0"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: left;
  background: ${({theme:e})=>e.colors.DEFAULT};
  height: 100%;
  padding: 38px 35px;
  border: 1px solid ${({theme:e})=>e.borderColor.STRONG};

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    padding: 30px;
  }
`,l=(0,o.default)(n.motion.div).withConfig({displayName:"sharedStyles__WrapperMotion",componentId:"sc-4846cce8-1"})`
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
`,r=o.default.div.withConfig({displayName:"sharedStyles__Inner",componentId:"sc-4846cce8-2"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  margin: 0 auto;
  max-width: ${({theme:e})=>e.maxWidth.PAGE};

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    flex-direction: column;
  }
`,s=o.default.div.withConfig({displayName:"sharedStyles__Quote",componentId:"sc-4846cce8-3"})`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  gap: 25px;
  line-height: 1.35;
  opacity: 1;
  height: 100%;
  width: 100%;

  blockquote::before {
    content: '“';
    flex: 1 1 auto;
    display: flex;
    margin-left: -0.95rem;
    height: 1px;
  }

  blockquote {
    font-size: 24px;
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
`,m=o.default.div.withConfig({displayName:"sharedStyles__Logo",componentId:"sc-4846cce8-4"})`
  display: flex;
  align-items: start;

  img {
    max-height: 35px;
    object-fit: contain;
    ${({theme:e})=>e.customerLogoColor};
  }
`,p=o.default.div.withConfig({displayName:"sharedStyles__Author",componentId:"sc-4846cce8-5"})`
  display: flex;
  align-items: center;
  flex-direction: row;
  min-height: 45px;

  img {
    clip-path: circle();
    filter: none;
    object-fit: cover;
    margin-right: 0.9rem;
    height: 45px;
    width: 45px;
  }

  p {
    color: ${({theme:e})=>e.fontColor.DEFAULT};
    font-size: ${({theme:e})=>e.fontSize.DEFAULT};

    margin-bottom: 5px;
  }
  span.bold {
    font-weight: 600;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    p:first-child {
      font-size: 14px;
    }
  }
`,c=t.memo(function({customerQuote:e}){return(0,i.jsx)(l,{...a.ANIMATIONS.SimpleFadeIn,children:(0,i.jsx)(r,{children:e&&e.map((e,t)=>(0,i.jsx)(d,{children:(0,i.jsxs)(s,{children:[(0,i.jsx)(m,{children:e.customer?.logo?.url&&(0,i.jsx)("img",{alt:e.customer.name,src:e.customer.logo.url})}),(0,i.jsxs)("blockquote",{children:["string"==typeof e.quote?e.quote:e.quote.quote,"”"]}),e.author&&(0,i.jsxs)(p,{children:[e.authorAvatar&&("url"in e.authorAvatar?e.authorAvatar.url:e.authorAvatar.asset?.url)&&(0,i.jsx)("img",{alt:e.author,src:"url"in e.authorAvatar?e.authorAvatar.url:e.authorAvatar.asset.url}),(0,i.jsxs)("p",{children:[(0,i.jsxs)("span",{className:"bold",children:[e.author,"  ·  "]}),(0,i.jsxs)("span",{children:[e.authorTitle," "]}),e.customer?.name&&(0,i.jsx)("span",{children:`at ${e.customer.name}`})]})]})]})},t))})})});e.s(["SelfServeCustomerQuoteCard",0,c],493488)},850596,e=>{"use strict";var i=e.i(843476),t=e.i(846932),a=e.i(997053),n=e.i(273454),o=e.i(650617),d=e.i(991709);let l=a.default.div.withConfig({displayName:"Heading__Wrapper",componentId:"sc-2943200f-0"})`
  margin: 112px 0 64px 0;
  padding: 0 56px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    margin: 88px 0 48px 0;
    align-self: flex-start;
  }
`,r=(0,a.default)(n.GradientHeader).withConfig({displayName:"Heading__H2",componentId:"sc-2943200f-1"})`
  text-align: center;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    text-align: left !important;
    max-width: none;
    margin: 0 0 24px 0;
  }
`,s=(0,a.default)(o.Text).withConfig({displayName:"Heading__Subheading",componentId:"sc-2943200f-2"})`
  text-align: center;
  max-width: 750px;
  margin: 24px auto 0 auto;

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    text-align: left;
  }
`;e.s(["SelfServeHeading",0,function(e){return(0,i.jsxs)(l,{...d.ANIMATIONS.SimpleFadeIn,as:t.motion.div,children:[e.heading&&(0,i.jsx)(r,{renderAs:"h2",children:e.heading}),e.subheading&&(0,i.jsx)(s,{size:"extra-large",children:e.subheading})]})}])},350671,e=>{"use strict";var i=e.i(843476),t=e.i(271645),a=e.i(846932),n=e.i(706736),o=e.i(650617),d=e.i(991709),l=e.i(665419),r=e.i(997053),s=e.i(273454),m=e.i(258591);let p="966px",c=r.default.div.withConfig({displayName:"sharedStyles__Wrapper",componentId:"sc-2b8d0e5-0"})`
  display: flex;
  align-items: stretch;
  max-width: ${({theme:e})=>e.maxWidth.PAGE};
  width: 100%;
  gap: 70px;
  z-index: 1;
  padding: 0 40px;
  padding-bottom: ${({$hasVideo:e})=>e?"150px":"0"};
  justify-content: center;
  margin: 0 auto;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    flex-direction: column;
    padding: 0 30px;
    padding-bottom: ${({$hasVideo:e})=>e?"100px":"0"};
    gap: 40px;
  }
`,h=(0,r.default)(a.motion.div).withConfig({displayName:"sharedStyles__Info",componentId:"sc-2b8d0e5-1"})`
  display: flex;
  flex: none;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  width: 520px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    width: 100%;
    padding: 0;
    padding-bottom: 60px;
  }

  @media (min-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    ${({$videoSize:e})=>"default"===e&&"min-height: 578px"};
  }

  ${({$size:e})=>"medium"===e&&r.css`
      width: 475px;
    `}

  ${({$size:e})=>"large"===e&&r.css`
      width: 520px;
    `}

  &[data-align='center'] {
    align-items: center;
    width: auto;
    max-width: 1000px;
    min-height: auto;
    padding-top: 48px;
    padding-bottom: 120px;

    * {
      text-align: center !important;
    }
  }
`,x=r.default.div.withConfig({displayName:"sharedStyles__BannerSlotWrapper",componentId:"sc-2b8d0e5-2"})`
  margin-bottom: 20px;
`,g=(0,r.default)(s.GradientHeader).withConfig({displayName:"sharedStyles__StyledHeading",componentId:"sc-2b8d0e5-3"})`
  text-align: left !important;
  text-wrap: balance;

  span {
    display: block;

    @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
      display: inline;
    }
  }
`,u=(0,r.default)(m.Heading).withConfig({displayName:"sharedStyles__StyledSmallTitle",componentId:"sc-2b8d0e5-4"})`
  font-size: 14px;
  margin-bottom: 20px;
`,f=(0,r.default)(a.motion.div).withConfig({displayName:"sharedStyles__Description",componentId:"sc-2b8d0e5-5"})`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 90ch;
  text-wrap: balance;

  p:last-child {
    margin-bottom: 0;
  }
`,y=(0,r.default)(a.motion.div).withConfig({displayName:"sharedStyles__Actions",componentId:"sc-2b8d0e5-6"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding-top: 10px;
  width: fit-content;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MOBILE}) {
    gap: 15px;
    align-items: center;
  }
`,b=r.default.div.withConfig({displayName:"sharedStyles__ActionsMain",componentId:"sc-2b8d0e5-7"})`
  display: flex;
  gap: 20px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MOBILE}) {
    gap: 10px;
    flex-direction: column;
    align-self: stretch;
  }
`;(0,r.default)(a.motion.div).withConfig({displayName:"sharedStyles__Video",componentId:"sc-2b8d0e5-8"})`
  display: flex;
  flex: 1 1 auto;
  min-width: 0;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    height: auto;
  }
`;let w=r.default.div.withConfig({displayName:"sharedStyles__PulsingLines",componentId:"sc-2b8d0e5-9"})`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  opacity: 0.5;

  span {
    position: absolute;
    border: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};

    &:nth-child(1) {
      top: -12px;
      left: -12px;
      bottom: -12px;
      right: -12px;
    }

    &:nth-child(2) {
      top: -24px;
      left: -24px;
      bottom: -24px;
      right: -24px;
      opacity: 0.85;
    }

    &:nth-child(3) {
      top: -36px;
      left: -36px;
      bottom: -36px;
      right: -36px;
      opacity: 0.7;
    }

    &:nth-child(4) {
      top: -48px;
      left: -48px;
      bottom: -48px;
      right: -48px;
      opacity: 0.55;
    }

    &:nth-child(5) {
      top: -60px;
      left: -60px;
      bottom: -60px;
      right: -60px;
      opacity: 0.4;
    }

    &:nth-child(6) {
      top: -72px;
      left: -72px;
      bottom: -72px;
      right: -72px;
      opacity: 0.25;
    }

    &:nth-child(7) {
      top: -84px;
      left: -84px;
      bottom: -84px;
      right: -84px;
      opacity: 0.1;
    }
  }
`,I=r.default.div.withConfig({displayName:"sharedStyles__VideoPlaceholder",componentId:"sc-2b8d0e5-10"})`
  display: flex;
  width: ${({$videoSize:e})=>"default"===e?p:"874px"};
  flex: none;
  position: absolute;
  transition:
    transform ${({theme:e})=>e.animation.DURATION}
      ${({theme:e})=>e.animation.EASING},
    scale ${({theme:e})=>e.animation.DURATION}
      ${({theme:e})=>e.animation.EASING};

  video {
    height: 100%;
    width: 100%;
    border-radius: 2px;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    position: relative;
    height: auto;
    width: 100%;

    video {
      height: auto;
      width: 100%;
      border-radius: 2px 2px 0 0;
    }

    ${w} {
      display: none;
    }
  }
`;r.default.div.withConfig({displayName:"sharedStyles__VideoInner",componentId:"sc-2b8d0e5-11"})`
  height: 523px;
  width: 100%;
  position: relative;
  flex: 1 1 auto;
  min-height: 0;

  &:hover {
    ${I} {
      transform: translateY(-2px);
      scale: 1.005;
    }
  }

  @media (min-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    ${({$videoSize:e})=>"compact"===e&&"transform: translateX(100px)"};
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    display: flex;
    justify-content: center;
    height: auto;
  }
`,(0,r.default)(a.motion.div).withConfig({displayName:"sharedStyles__ButtonWrapper",componentId:"sc-2b8d0e5-12"})`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  right: auto;
  bottom: 0;
  width: calc(50vw + 55px);
  max-width: ${p};
  cursor: pointer;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    width: 100%;
  }

  div:first-child :first-child {
    color: ${({theme:e})=>e.colors.LIGHT_PURPLE};
  }
`;let $=(0,r.default)(o.Text).attrs({size:"small"}).withConfig({displayName:"sharedStyles__OptionalSubCopy",componentId:"sc-2b8d0e5-13"})`
  max-width: 190px;
  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    text-align: center;
  }
`,j={Info:{...d.REVEAL_MARKER,initial:{x:30,opacity:0},transition:{...d.DEFAULT_TRANSITION,duration:1},viewport:{once:!0},whileInView:{x:0,opacity:1}},Heading:{...d.REVEAL_MARKER,initial:{opacity:0,x:20},transition:{...d.DEFAULT_TRANSITION,duration:.5},viewport:{once:!0},whileInView:{opacity:1,x:0}},Description:{...d.REVEAL_MARKER,initial:{opacity:0,x:20},transition:{...d.DEFAULT_TRANSITION,duration:.5,delay:.1},viewport:{once:!0},whileInView:{opacity:1,x:0}},Actions:{...d.REVEAL_MARKER,initial:{opacity:0,x:20},transition:{...d.DEFAULT_TRANSITION,duration:.5,delay:.15},viewport:{once:!0},whileInView:{opacity:1,x:0}}},_=t.memo(function({infoSize:e="large",bannerSlot:d,smallTitle:r,headline:s,ctaCopy:m,ctaLink:p,secondaryCtaCopy:w,secondaryCtaLink:I,subCopy:_,optionalSubCopy:S,videoSize:v="default",heroStyle:C,demoSlot:N}){let M=(0,t.useMemo)(()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(b,{children:[(0,i.jsx)(n.Button,{href:p||l.INTERNAL_LINKS.RequestADemo,size:"large",stylez:"loud",text:m||"Request a demo"}),I&&w?(0,i.jsx)(n.Button,{href:I,size:"large",stylez:"default",text:w}):null]}),S&&(0,i.jsx)($,{children:S})]}),[m,p,S,I,w]);return(0,i.jsxs)(c,{$hasVideo:"right-aligned-demo"===C,children:[(0,i.jsxs)(h,{...j.Info,$size:e,$videoSize:v,"data-align":"minimal-centered"===C?"center":void 0,children:[(0,i.jsxs)(a.motion.div,{...j.Heading,children:[d?(0,i.jsx)(x,{children:d}):null,r&&(0,i.jsx)(u,{renderAs:"h6",children:r}),(0,i.jsx)(g,{renderAs:"h1",children:s})]}),(0,i.jsx)(f,{...j.Description,children:"string"==typeof _?(0,i.jsx)(o.Text,{size:"large",children:_}):_}),p?(0,i.jsx)(y,{...j.Actions,style:{alignItems:"minimal-centered"===C?"center":void 0},children:M}):null]}),"right-aligned-demo"===C&&N?N:null]})});e.s(["HeroTout",0,_],350671)},619707,e=>{"use strict";var i=e.i(843476),t=e.i(271645),a=e.i(846932),n=e.i(997053),o=e.i(706736),d=e.i(785191),l=e.i(258591),r=e.i(650617),s=e.i(812488),m=e.i(991709);let p=(0,n.default)(a.motion.div).withConfig({displayName:"SelfServeOutroTout__Wrapper",componentId:"sc-38f6ed7b-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 132px;
`,c=(0,n.default)(a.motion.div).withConfig({displayName:"SelfServeOutroTout__Inner",componentId:"sc-38f6ed7b-1"})`
  background: rgba(173, 142, 182, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`,h=(0,n.default)(d.Card).withConfig({displayName:"SelfServeOutroTout__TopCard",componentId:"sc-38f6ed7b-2"})`
  background: ${({theme:e})=>e.backgroundColor};
  flex: 1;
  max-width: 565px;
  padding: 68px 60px;
  text-align: center;
  align-items: center;
  gap: 20px;
  cursor: default;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    padding: 40px 28px;
  }
`,x=(0,n.default)(r.Text).withConfig({displayName:"SelfServeOutroTout__StyledText",componentId:"sc-38f6ed7b-3"})`
  margin-bottom: 5px;
`,g=n.default.p.withConfig({displayName:"SelfServeOutroTout__SubCopy",componentId:"sc-38f6ed7b-4"})`
  margin: 0 auto;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  text-align: center;
  max-width: 230px;
`,u=n.default.div.withConfig({displayName:"SelfServeOutroTout__Padding",componentId:"sc-38f6ed7b-5"})`
  padding: 40px 40px 100px;
`,f=t.memo(function({ctaLink:e,ctaSmallCopy:t,headline:a,ctaLabel:n,subCopy:d}){return(0,i.jsx)(p,{...m.ANIMATIONS.SimpleFadeIn,children:(0,i.jsxs)(c,{children:[(0,i.jsx)(s.TronDivider,{}),(0,i.jsx)(u,{children:(0,i.jsxs)(h,{children:[(0,i.jsx)(l.Heading,{renderAs:"h2",children:a}),(0,i.jsx)(x,{size:"large",children:d}),(0,i.jsx)(o.Button,{href:e,size:"large",stylez:"loud",text:n}),t&&(0,i.jsx)(g,{children:t})]})})]})})});e.s(["SelfServeOutroTout",0,f])},573678,e=>{"use strict";var i=e.i(843476),t=e.i(271645),a=e.i(991709),n=e.i(846932),o=e.i(997053),d=e.i(273454),l=e.i(258591),r=e.i(650617);let s=(0,o.default)(n.motion.div).withConfig({displayName:"sharedStyles__Wrapper",componentId:"sc-7b29ba73-0"})`
  display: flex;
  padding: 40px 40px 0;
  margin-bottom: 200px;
  max-width: ${({theme:e})=>e.maxWidth.PAGE};
  width: 100%;

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    margin-bottom: 60px;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    flex-direction: column;
    padding: 30px;
  }
`,m=o.default.div.withConfig({displayName:"sharedStyles__FeatureWrapper",componentId:"sc-7b29ba73-1"})`
  display: flex;
  align-items: center;
  gap: 80px;
  flex: 1 1 auto;
  min-width: 0;

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    align-items: start;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    gap: 40px;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    flex-direction: column-reverse;
    gap: 40px;
  }

  &.media-right {
    @media (min-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
      flex-direction: row-reverse;
    }
  }

  &.media-left {
    @media (min-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
      flex-direction: row;
    }
  }

  &.media-top {
    @media (min-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
      flex-direction: column;
      align-items: center;
    }
  }

  &.media-bottom {
    @media (min-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
      flex-direction: column-reverse;
      align-items: center;
      text-align: center;
      gap: 0;

      p {
        margin-bottom: 30px;
      }
    }
  }
`,p=o.default.div.withConfig({displayName:"sharedStyles__FeatureInfo",componentId:"sc-7b29ba73-2"})`
  min-width: 0;
  width: 375px;
  flex: none;
  font-size: ${({theme:e})=>e.fontSize.LARGE};
  line-height: ${({theme:e})=>e.lineHeight.body.l};

  &[data-text-size='small'] {
    &,
    & p,
    & ul,
    & li {
      font-size: 16px;
      line-height: ${({theme:e})=>e.lineHeight.body.base};
    }
  }

  ul {
    margin-bottom: 20px;
    padding-left: 17px;

    li {
      margin-bottom: 5px;

      p {
        font-size: ${({theme:e})=>e.fontSize.LARGE};
        line-height: ${({theme:e})=>e.lineHeight.body.l};
      }
    }
  }

  p {
    font-size: ${({theme:e})=>e.fontSize.LARGE};
    line-height: ${({theme:e})=>e.lineHeight.body.l};
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    width: 300px;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    width: 100%;
  }
`,c=(0,o.default)(l.Heading).withConfig({displayName:"sharedStyles__FeatureHeader",componentId:"sc-7b29ba73-3"})`
  margin-bottom: 15px;
  position: relative;
`,h=(0,o.default)(r.Text).withConfig({displayName:"sharedStyles__FeatureDescription",componentId:"sc-7b29ba73-4"})`
  margin-bottom: 22px;
`,x=o.default.div.withConfig({displayName:"sharedStyles__AnimationWrapper",componentId:"sc-7b29ba73-5"})`
  display: flex;
  width: 671px;
  height: 513px;
  position: relative;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    height: 320px;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    width: 100%;
    height: 360px;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MOBILE}) {
    height: 320px;
  }
`,g=o.default.div.withConfig({displayName:"sharedStyles__IllustrationWrapper",componentId:"sc-7b29ba73-6"})`
  position: absolute;
  z-index: 1;

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    display: flex;
    justify-content: center;
  }
`,u=o.default.div.withConfig({displayName:"sharedStyles__ProductIllustration",componentId:"sc-7b29ba73-7"})`
  width: 600px;
  &.img-bottom {
    @media (min-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
      width: 760px;
    }
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    width: 100%;
  }
`,f=(0,o.default)(s).withConfig({displayName:"sharedStyles__StyledWrapper",componentId:"sc-7b29ba73-8"})`
  flex-direction: column;
  margin-bottom: 0;
  padding: 0;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    margin-bottom: 0;
  }
`,y=(0,o.default)(s).withConfig({displayName:"sharedStyles__StyledComponentWrapper",componentId:"sc-7b29ba73-9"})`
  flex-direction: column;
  margin-bottom: 40px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    margin-bottom: 0;
  }
`,b=(0,o.default)(d.GradientHeader).attrs({renderAs:"h1",$twoStop:!0}).withConfig({displayName:"sharedStyles__Title",componentId:"sc-7b29ba73-10"})`
  && {
    margin-bottom: 60px;

    @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
      margin-bottom: 20px;
    }

    @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
      margin-bottom: 0;
      text-align: left;
    }
  }
`,w=o.default.div.withConfig({displayName:"sharedStyles__Top",componentId:"sc-7b29ba73-11"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0 auto 0;
  max-width: 704px;
  text-align: center;

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    padding: 0;
    margin-bottom: 40px;
    align-items: flex-start;
    text-align: left;
  }
`,I=o.default.div.withConfig({displayName:"sharedStyles__Features",componentId:"sc-7b29ba73-12"})`
  display: flex;
  flex-direction: column;
  gap: 80px;
  position: relative;
  z-index: 1;
  min-width: 0;
  width: 100%;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    gap: 40px;
    padding: 20px 0;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    padding: 0;
  }
`,$=o.default.div.withConfig({displayName:"sharedStyles__LiveDemoWrapper",componentId:"sc-7b29ba73-13"})`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  position: relative;
  margin-top: ${({$marginTop:e})=>e||"10px"};
  margin-bottom: ${({$marginBottom:e})=>e||"60px"};
  padding: 0 40px;
  box-sizing: border-box;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    margin-top: ${({$marginTop:e})=>e||"40px"};
    margin-bottom: 40px;
    padding: 0 30px;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    padding: 0 20px;
  }
`,j=(0,o.default)(p).withConfig({displayName:"sharedStyles__CenteredFeatureInfo",componentId:"sc-7b29ba73-14"})`
  text-align: center;
  margin: 0 auto;

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    text-align: center;

    h2,
    h4 {
      text-align: center;
    }
  }
`;var _=e.i(706736),S=e.i(78315);let v=t.memo(function(e){let{contentTitle:t,content:a,contentLayout:n,media:o,ctaLabel:d,ctaLink:l,isSmallText:r,liveDemoSlot:s}=e,y=!!s,b={block:{normal:({children:e})=>(0,i.jsx)(h,{size:r?"small":"large",children:e})}},w=({centered:e=!1}={})=>(0,i.jsxs)(e?j:p,{"data-text-size":r?"small":void 0,children:[(0,i.jsx)(c,{renderAs:r?"h4":"h2",children:t}),(0,i.jsx)(S.PortableText,{components:b,value:a}),l&&d&&(0,i.jsx)(_.Button,{fill:!1,href:l,size:"default",text:d})]}),I=({marginBottom:e,marginTop:t})=>y?(0,i.jsx)($,{$marginBottom:e,$marginTop:t,children:s}):(0,i.jsx)(x,{children:(0,i.jsx)(g,{children:o&&(0,i.jsx)(u,{className:"media-bottom"===n?"img-bottom":"",children:o})})}),v={"media-top":()=>y?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(I,{marginBottom:"60px",marginTop:"0"}),(0,i.jsx)(m,{className:n,children:(0,i.jsx)(w,{centered:y})})]}):(0,i.jsxs)(m,{className:n,children:[(0,i.jsx)(I,{}),(0,i.jsx)(w,{centered:!1})]}),"media-bottom":()=>y?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(m,{className:n,children:(0,i.jsx)(w,{centered:y})}),(0,i.jsx)(I,{marginBottom:"200px",marginTop:"10px"})]}):(0,i.jsxs)(m,{className:n,children:[(0,i.jsx)(I,{}),(0,i.jsx)(w,{centered:!1})]}),default:()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(m,{className:n,children:[!y&&(0,i.jsx)(I,{}),(0,i.jsx)(w,{centered:!1})]}),y&&(0,i.jsx)($,{$marginBottom:"0",$marginTop:"60px",children:s})]})};return(0,i.jsx)(f,{children:(v[n]||v.default)()})}),C=t.memo(function(e){let{mainTitle:t,contentTitle:n,contentLayout:o,content:d,media:l,ctaLabel:r,ctaLink:s,isSmallText:m,liveDemoSlot:p}=e;return(0,i.jsxs)(y,{...a.ANIMATIONS.SimpleFadeIn,children:[t&&(0,i.jsx)(w,{children:(0,i.jsx)(b,{renderAs:"h1",children:t})}),(0,i.jsx)(I,{children:(0,i.jsx)(v,{content:d,contentLayout:o,contentTitle:n,ctaLabel:r,ctaLink:s,isSmallText:m,liveDemoSlot:p,media:l})})]})});e.s(["TwoUpMedia",0,C],573678)},475757,e=>{"use strict";var i=e.i(843476),t=e.i(846932),a=e.i(997053),n=e.i(78315),o=e.i(991709);let d=a.default.div.withConfig({displayName:"TwoUpRichText__Wrapper",componentId:"sc-a6991fe4-0"})`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
  max-width: ${({theme:e})=>e.maxWidth.PAGE};
  margin: 0 auto;
  padding: 40px 40px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    grid-template-columns: 1fr;
  }
`,l=a.default.div.withConfig({displayName:"TwoUpRichText__RichTextContainer",componentId:"sc-a6991fe4-1"})`
  ul {
    list-style: outside;
    padding-inline-start: 24px;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    line-height: ${({theme:e})=>e.lineHeight.body.base};
    font-weight: ${({theme:e})=>e.fontWeight.body};
  }
`;function r({raw:e}){return(0,i.jsx)(l,{children:(0,i.jsx)(n.PortableText,{value:e})})}e.s(["TwoUpRichText",0,function(e){return(0,i.jsxs)(d,{...o.ANIMATIONS.SimpleFadeIn,as:t.motion.div,children:[e.column1RichText?.raw?.length?(0,i.jsx)(r,{raw:e.column1RichText.raw}):null,e.column2RichText?.raw?.length?(0,i.jsx)(r,{raw:e.column2RichText.raw}):null]})}])}]);