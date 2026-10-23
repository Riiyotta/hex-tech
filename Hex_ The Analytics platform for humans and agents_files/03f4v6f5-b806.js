(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,296436,e=>{e.v(t=>Promise.all(["static/chunks/3m1bcb90s3oz8.js"].map(t=>e.l(t))).then(()=>t(416694)))},368394,781156,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(236726),r=e.i(997053),n=e.i(328542),l=e.i(561037),a=e.i(258591),d=e.i(650617),s=e.i(529376),c=e.i(628928),h=e.i(628236),m=e.i(462689),p=e.i(580341),g=e.i(412968),u=e.i(445700),x=e.i(357044),f=e.i(389090),b=e.i(784297);let y=i.memo(function({children:e}){return(0,t.jsx)("figcaption",{style:{marginTop:0},children:e})}),j=r.default.div.withConfig({displayName:"HexEmbed__Wrapper",componentId:"sc-61cc1bb3-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: ${({$height:e})=>e||"610px"};
  flex: 1 1 auto;
  margin-bottom: 20px;
`,$=/[?&]embedded=true(?:&|$)/,w=i.memo(function({caption:e,src:i,height:o}){let r=function(e){if($.test(e))return e;let t=e.includes("?")?"&":"?";return`${e}${t}embedded=true`}(i);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(j,{$height:o,children:(0,t.jsx)("iframe",{allowFullScreen:!0,frameBorder:"0",src:r,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},title:"Hex embed"})}),e&&(0,t.jsx)(y,{children:e})]})});e.s(["HexEmbed",0,w],781156);let C=r.default.div.withConfig({displayName:"BlogRichText__Wrapper",componentId:"sc-effae6d6-0"})`
  color: ${({theme:e,$bodyColor:t})=>t?e.fontColor.DEFAULT:e.fontColor.LOUD};

  ul {
    list-style-type: circle;
    padding-left: 16px;
  }

  ol {
    list-style-type: decimal;
    padding-left: 16px;
  }

  /* Allow horizontal scroll for raw HTML tables (e.g. from blogHtml blocks) */
  div:has(> table) {
    overflow-x: auto;
  }

  table {
    min-width: 100%;
    border-collapse: collapse;
    margin-bottom: 25px;
  }

  th {
    background: ${({theme:e})=>e.highlightColor10};
    border: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
    text-align: center;
    padding: 10px 30px;
    margin-bottom: 0;
    font-family: ${({theme:e})=>e.fontFamily.MONO};
    font-size: ${({theme:e})=>e.fontSize.SMALL};
    line-height: ${({theme:e})=>e.lineHeight.body.s};
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  tr {
    border-bottom: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};

    & > td {
      border-left: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
      border-right: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
    }
  }

  hr {
    border: none;
    border-top: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
    margin: 2em 0;
  }

  sup,
  sub {
    position: relative;
    font-size: 0.75em;
    line-height: 0;
  }

  sup {
    top: -0.5em;
  }

  sub {
    bottom: -0.25em;
  }

  td {
    text-align: center;
    padding: 10px 30px;
    font-family: ${({theme:e})=>e.fontFamily.MONO};
    font-size: ${({theme:e})=>e.fontSize.SMALL};
    line-height: ${({theme:e})=>e.lineHeight.body.s};
    letter-spacing: 1px;
    text-transform: uppercase;
    color: ${({theme:e})=>e.fontColor.DEFAULT};
    font-weight: ${({theme:e})=>e.fontWeight.NORMAL};
  }
`,T=(0,r.default)(d.Text).withConfig({displayName:"BlogRichText__StyledText",componentId:"sc-effae6d6-1"})`
  color: ${({theme:e,$bodyColor:t})=>t?e.fontColor.DEFAULT:e.fontColor.LOUD};
`,I=r.default.div.withConfig({displayName:"BlogRichText__TableWrapper",componentId:"sc-effae6d6-2"})`
  display: flex;
  justify-content: center;

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    overflow-x: auto;
    justify-content: unset;
  }
`,L=r.default.table.withConfig({displayName:"BlogRichText__StyledTable",componentId:"sc-effae6d6-3"})`
  min-width: 100%;
  border-collapse: collapse;
  margin-bottom: 25px;
`,A=r.default.th.withConfig({displayName:"BlogRichText__StyledHeader",componentId:"sc-effae6d6-4"})`
  &&&& {
    background: ${({theme:e})=>e.highlightColor10};
    border: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};

    text-align: center;
    padding: 10px 30px;

    > p {
      margin-bottom: 0;
      font-family: ${({theme:e})=>e.fontFamily.MONO};
      font-size: ${({theme:e})=>e.fontSize.SMALL};
      line-height: ${({theme:e})=>e.lineHeight.body.s};
      letter-spacing: 1px;
      text-transform: uppercase;

      > b {
        color: ${({theme:e})=>e.fontColor.DEFAULT};
        font-weight: ${({theme:e})=>e.fontWeight.NORMAL};
        font-size: ${({theme:e})=>e.fontSize.DEFAULT};
      }
    }
  }
`,N=r.default.tr.withConfig({displayName:"BlogRichText__StyledRow",componentId:"sc-effae6d6-5"})`
  border-bottom: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};

  &:last-child {
    border-bottom: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
  }

  & > td {
    border-left: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
    border-right: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
  }
`,v=r.default.td.withConfig({displayName:"BlogRichText__StyledCell",componentId:"sc-effae6d6-6"})`
  &&&& {
    text-align: center;
    padding: 10px 30px;

    > p {
      margin-bottom: 0;
      font-family: ${({theme:e})=>e.fontFamily.MONO};
      font-size: ${({theme:e})=>e.fontSize.SMALL};
      line-height: ${({theme:e})=>e.lineHeight.body.s};
      letter-spacing: 1px;
      text-transform: uppercase;
      color: ${({theme:e})=>e.fontColor.DEFAULT};
      font-weight: ${({theme:e})=>e.fontWeight.NORMAL};
    }
  }
`,E=i.memo(function({body:e,textColor:r="loud"}){let d=(0,s.useIsHydrated)(),y="default"===r,j=(0,i.useMemo)(()=>({types:{image:({value:e})=>(0,t.jsx)(u.InlineImage,{alt:e.alt,caption:e.caption,height:e.asset?.dimensions?.height,lqip:e.asset?.lqip,src:e.asset?.url,width:e.asset?.dimensions?.width}),floatImage:({value:e})=>{let i=e.image?.asset?.url;return i?(0,t.jsx)(g.FloatImage,{offset:e.offset,position:e.position?.toLowerCase(),src:i}):null},blogQuote:({value:e})=>(0,t.jsx)(m.BlogQuote,{image:e.image?.asset?{url:e.image.asset.url}:void 0,meta:e.meta,minimal:e.minimal??!0,name:e.name,text:e.body}),blogHint:({value:e})=>(0,t.jsx)(c.BlogHint,{children:(0,t.jsx)(o.PortableText,{components:_,value:e.body||[]})}),callout:({value:e})=>(0,t.jsx)(l.Callout,{children:(0,t.jsx)(o.PortableText,{components:_,value:e.body||[]})}),hexEmbed:({value:e})=>{if(!e.source)return null;let i="number"==typeof e.height?`${e.height}px`:e.height||"610px";return(0,t.jsx)(w,{caption:e.title,height:i,src:e.source})},mediaEmbed:({value:e})=>(0,t.jsx)(x.MediaEmbed,{aspectratio:"60.742407199100114%",src:e.url}),blogHtml:({value:e})=>d?(0,t.jsx)(h.BlogHtml,{markup:e.markup||""}):null,videoFile:({value:e})=>(0,t.jsx)(f.VideoFile,{caption:e.caption,src:e.video?.asset?.url}),table:({value:e})=>(0,t.jsx)(I,{children:(0,t.jsx)(L,{children:(0,t.jsx)("tbody",{children:(e.rows||[]).map((e,i)=>{let o=0===i;return(0,t.jsx)(N,{children:(e.cells||[]).map((e,i)=>o?(0,t.jsx)(A,{children:(0,t.jsx)("p",{children:e})},i):(0,t.jsx)(v,{children:(0,t.jsx)("p",{children:e})},i))},e._key||i)})})})})},block:{normal:({children:e,value:i})=>{if((0,b.isCodeBlock)(i)){let o=(0,b.blockToPlainText)(i),{code:r}=(0,b.processCodeText)(o);return(0,t.jsx)(p.CodeBlock,{code:r,children:e})}return(0,t.jsx)(T,{$bodyColor:y,size:"medium",children:e})},h1:({children:e,value:i})=>{let o=(0,n.textToId)((0,b.blockToPlainText)(i));return(0,t.jsx)(a.Heading,{id:o,renderAs:"h2",children:e})},h2:({children:e,value:i})=>{let o=(0,n.textToId)((0,b.blockToPlainText)(i));return(0,t.jsx)(a.Heading,{id:o,renderAs:"h2",children:e})},h3:({children:e})=>(0,t.jsx)(a.Heading,{renderAs:"h3",children:e}),h4:({children:e})=>(0,t.jsx)("h4",{children:e}),h5:({children:e})=>(0,t.jsx)("h5",{children:e}),h6:({children:e})=>(0,t.jsx)("h6",{children:e}),blockquote:({children:e})=>(0,t.jsx)("blockquote",{children:(0,t.jsx)(T,{$bodyColor:y,size:"medium",children:e})}),separator:()=>(0,t.jsx)("hr",{})},marks:{code:({children:e,text:i})=>{if("string"==typeof i){let{language:o,code:r}=(0,b.processCodeText)(i);return(0,t.jsx)("code",{className:o?`language-${o} `:"",children:o?r:e})}return(0,t.jsx)("code",{children:e})},strong:({children:e})=>(0,t.jsx)("strong",{children:e}),em:({children:e})=>(0,t.jsx)("i",{children:e}),underline:({children:e})=>(0,t.jsx)("u",{children:e}),superscript:({children:e})=>(0,t.jsx)("sup",{children:e}),subscript:({children:e})=>(0,t.jsx)("sub",{children:e}),link:({value:e,children:i})=>(0,t.jsx)("a",{href:e?.href,rel:"noopener noreferrer",target:"_blank",children:i})},list:{bullet:({children:e})=>(0,t.jsx)("ul",{children:e}),number:({children:e})=>(0,t.jsx)("ol",{children:e})},listItem:{bullet:({children:e})=>(0,t.jsx)("li",{children:e}),number:({children:e})=>(0,t.jsx)("li",{children:e})}}),[d,y]);return e?(0,t.jsx)(C,{$bodyColor:y,children:(0,t.jsx)(o.PortableText,{components:j,value:e})}):null}),_={block:{normal:({children:e})=>(0,t.jsx)(T,{size:"medium",children:e}),h4:({children:e})=>(0,t.jsx)("h4",{children:e})},marks:{code:({children:e})=>(0,t.jsx)("code",{children:e}),strong:({children:e})=>(0,t.jsx)("strong",{children:e}),em:({children:e})=>(0,t.jsx)("em",{children:e}),link:({value:e,children:i})=>(0,t.jsx)("a",{href:e?.href,rel:"noopener noreferrer",target:"_blank",children:i})},list:{bullet:({children:e})=>(0,t.jsx)("ul",{children:e}),number:({children:e})=>(0,t.jsx)("ol",{children:e})},listItem:{bullet:({children:e})=>(0,t.jsx)("li",{children:e}),number:({children:e})=>(0,t.jsx)("li",{children:e})}};e.s(["BlogRichText",0,E],368394)},781016,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(174080),r=e.i(88653),n=e.i(846932),l=e.i(193594),a=e.i(997053),d=e.i(706736),s=e.i(529376),c=e.i(430388),h=e.i(429625),m=e.i(991709);e.i(726497);var p=e.i(539087);let g=(0,a.default)(n.motion.div).withConfig({displayName:"FullScreenVideo__Video",componentId:"sc-1ed407d2-0"})`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({theme:e})=>(0,l.rgba)(e.colors.BLACK,.8)};
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
`,u=(0,a.default)(d.Button).withConfig({displayName:"FullScreenVideo__CloseButton",componentId:"sc-1ed407d2-1"})`
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
`,x={FullScreenVideo:{...m.REVEAL_MARKER,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{...m.DEFAULT_TRANSITION}}},f=i.memo(function({isOpen:e,onClose:n,path:l,videoTitle:d,embed:m}){let f=(0,i.useRef)(null),b=(0,s.useIsHydrated)(),{handleEnded:y,handlePlay:j,handleTimeUpdate:$}=(0,h.useNativeVideoTracking)(l,d,e);(0,i.useEffect)(()=>{if(!e||m)return;let t=window.setTimeout(()=>{f.current?.play()},200);return()=>window.clearTimeout(t)},[m,e]);let w=(0,i.useCallback)(()=>{f.current?.pause(),n()},[n]);return b?(0,o.createPortal)((0,t.jsx)(r.AnimatePresence,{children:e&&(0,t.jsx)(a.ThemeProvider,{theme:p.DARK_THEME,children:(0,t.jsxs)(g,{...x.FullScreenVideo,"data-theme":"dark",children:[(0,t.jsx)(u,{icon:(0,t.jsx)(c.CloseIcon,{}),size:"small",stylez:"bold",onClick:w}),m||(0,t.jsx)("video",{ref:f,controls:!0,playsInline:!0,onEnded:y,onPlay:j,onTimeUpdate:$,children:(0,t.jsx)("source",{src:l,type:"video/mp4"})}),(0,t.jsx)("div",{className:"bkg",onClick:w})]})})}),document.body):null});e.s(["FullScreenVideo",0,f])},14782,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(846932),r=e.i(997053),n=e.i(258591),l=e.i(650617),a=e.i(812488),d=e.i(991709),s=e.i(657688),c=e.i(328542),h=e.i(785191),m=e.i(637804),p=e.i(665419);let g="(min-width: 801px) 33vw, (min-width: 601px) 50vw, 100vw",u=r.default.div.withConfig({displayName:"RecommendationCard__Wrapper",componentId:"sc-80c4e32a-0"})`
  width: calc(100% / 3);
  flex: 0 1 calc(100% / 3);
  padding: 10px;

  a {
    text-decoration: none;
    color: inherit;
    display: block;
    height: 100%;
    border: none;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    flex: 0 1 calc(100% / 2);
    width: calc(100% / 2);
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    flex: 0 1 100%;
    width: 100%;
  }
`,x=(0,r.default)(h.Card).withConfig({displayName:"RecommendationCard__StyledGridWrapper",componentId:"sc-80c4e32a-1"})`
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,f=r.default.div.withConfig({displayName:"RecommendationCard__PreviewImage",componentId:"sc-80c4e32a-2"})`
  margin-bottom: 0;
  border: none;
  position: relative;
  flex: none;
  overflow: hidden;
  width: 100%;
  height: 220px;
`,b=r.default.div.withConfig({displayName:"RecommendationCard__Info",componentId:"sc-80c4e32a-3"})`
  display: flex;
  flex: 1 1 auto;
  width: 100%;
  flex-direction: column;
  padding: 15px 5px 5px;
`,y=(0,r.default)(n.Heading).attrs({renderAs:"h4"}).withConfig({displayName:"RecommendationCard__Title",componentId:"sc-80c4e32a-4"})`
  margin-bottom: 6px;
`,j=r.default.div.withConfig({displayName:"RecommendationCard__CategoryTag",componentId:"sc-80c4e32a-5"})`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 6px 10px;
  background: ${({theme:e})=>e.backgroundColor};
  font-family: ${({theme:e})=>e.fontFamily.MONO};
  font-weight: ${({theme:e})=>e.fontWeight.BOLD};
  font-size: ${({theme:e})=>e.fontSize.SMALL};
  letter-spacing: 1px;
`,$=r.default.div.withConfig({displayName:"RecommendationCard__Author",componentId:"sc-80c4e32a-6"})`
  color: ${({theme:e})=>e.fontColor.MUTED};
  font-size: ${({theme:e})=>e.fontSize.MEDIUM};
  margin-bottom: 10px;
`;function w({item:e}){let i=`${p.INTERNAL_LINKS.Blog}${e.slug}/`;return(0,t.jsx)(u,{children:(0,t.jsx)(m.SiteLink,{href:i,children:(0,t.jsxs)(x,{children:[e.heroImageUrl&&(0,t.jsxs)(f,{children:[(0,t.jsx)(s.default,{alt:e.title??"",fill:!0,sizes:g,src:e.heroImageUrl}),(0,t.jsx)(j,{children:"BLOG"})]}),(0,t.jsxs)(b,{children:[(0,t.jsx)(y,{renderAs:"h4",children:e.title}),(0,t.jsxs)($,{children:[e.author," · ",(0,c.formatPostDate)(e.date)]}),(0,t.jsx)(l.Text,{size:"medium",children:e.seoMetaDescription})]})]})})})}function C({item:e}){let i=e.categorySlug?`${p.INTERNAL_LINKS.Templates}${e.categorySlug}/${e.slug}/`:`${p.INTERNAL_LINKS.Templates}${e.slug}/`;return(0,t.jsx)(u,{children:(0,t.jsx)(m.SiteLink,{href:i,children:(0,t.jsxs)(x,{children:[e.gridImageUrl&&(0,t.jsxs)(f,{children:[(0,t.jsx)(s.default,{alt:e.name??"",fill:!0,sizes:g,src:e.gridImageUrl}),(0,t.jsx)(j,{children:"TEMPLATE"})]}),(0,t.jsxs)(b,{children:[(0,t.jsx)(y,{renderAs:"h4",children:e.name}),(0,t.jsx)(l.Text,{size:"medium",children:e.seoMetaDescription})]})]})})})}function T({item:e}){let i=`${p.INTERNAL_LINKS.Templates}${e.slug}/`;return(0,t.jsx)(u,{children:(0,t.jsx)(m.SiteLink,{href:i,children:(0,t.jsxs)(x,{children:[(0,t.jsxs)(f,{children:[e.gridImageUrl&&(0,t.jsx)(s.default,{alt:e.title??"",fill:!0,sizes:g,src:e.gridImageUrl}),(0,t.jsx)(j,{children:"USE CASES"})]}),(0,t.jsxs)(b,{children:[(0,t.jsx)(y,{renderAs:"h4",children:e.title}),(0,t.jsx)($,{children:"Multiple contributors"}),(0,t.jsx)(l.Text,{size:"medium",children:e.seoMetaDescription})]})]})})})}let I=i.memo(function({item:e}){switch(e._type){case"blogPost":return(0,t.jsx)(w,{item:e});case"useCase":return(0,t.jsx)(C,{item:e});case"useCaseCategory":return(0,t.jsx)(T,{item:e});default:return null}}),L=(0,r.default)(o.motion.div).withConfig({displayName:"Recommendations__Wrapper",componentId:"sc-d19e5d4-0"})`
  padding: 0 40px 0;
  max-width: ${({theme:e})=>e.maxWidth.PAGE};
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    padding: 0;
  }
`,A=r.default.div.withConfig({displayName:"Recommendations__HeadingWrapper",componentId:"sc-d19e5d4-1"})`
  text-align: center;
`,N=r.default.div.withConfig({displayName:"Recommendations__GridWrapper",componentId:"sc-d19e5d4-2"})`
  flex: 1 1 auto;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: ${({theme:e})=>e.maxWidth.PAGE_WIDE};
  justify-content: center;
`,v=(0,r.default)(l.Text).attrs({size:"large"}).withConfig({displayName:"Recommendations__StyledText",componentId:"sc-d19e5d4-3"})`
  max-width: 500px;
  text-align: center;

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    font-size: ${({theme:e})=>e.fontSize.MEDIUM};
    line-height: ${({theme:e})=>e.lineHeight.body.m};
    margin-bottom: 10px;
  }
`,E=i.memo(function({showTron:e,items:i,category:o,isblog:r=!1}){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(L,{...d.ANIMATIONS.SimpleFadeIn,children:[(0,t.jsx)(A,{children:(0,t.jsx)(n.Heading,{renderAs:"h2",style:{marginBottom:50*!!r},children:r?o?.[0]?`More on ${o[0]}`:"More from the blog":"See what else Hex can do"})}),!r&&(0,t.jsx)(v,{size:"large",children:"Discover how other data scientists and analysts use Hex for everything from dashboards to deep dives."}),(0,t.jsx)(N,{children:i.map((e,i)=>(0,t.jsx)(I,{item:e},i))})]}),e&&(0,t.jsx)(a.TronDivider,{})]})});e.s(["Recommendations",0,E],14782)},814326,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(997053),r=e.i(430388),n=e.i(637804);function l(e){return window.addEventListener("popstate",e),window.addEventListener("hashchange",e),()=>{window.removeEventListener("popstate",e),window.removeEventListener("hashchange",e)}}function a(){return window.location.href}function d(){return""}let s=o.default.div.withConfig({displayName:"SocialShare__Share",componentId:"sc-81b6efd6-0"})`
  align-items: center;
  display: flex;
  grid-gap: 16px;
  font-weight: ${({theme:e})=>e.fontWeight.BOLD};
  color: ${({theme:e})=>e.iconColor.DEFAULT};
  font-size: ${({theme:e})=>e.fontSize.DEFAULT};
  font-weight: var(
    --social-font-weight,
    ${({theme:e})=>e.fontWeight.SEMI_BOLD}
  );

  a {
    border-bottom: none;
    display: flex;
    transition: opacity
      ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`};

    &:active,
    &:focus,
    &:hover {
      background-color: transparent;
      opacity: 0.5;
    }
  }
`,c=o.default.span.withConfig({displayName:"SocialShare__Text",componentId:"sc-81b6efd6-1"})`
  text-transform: var(--social-text-transform, uppercase);
`,h=i.memo(function({title:e,className:o}){let h=encodeURIComponent((0,i.useSyncExternalStore)(l,a,d)),m=encodeURIComponent(e),p=`https://twitter.com/share?text=${m}&url=${h}`,g=`https://www.linkedin.com/shareArticle?mini=true&url=${h}&title=${m}`;return(0,t.jsxs)(s,{className:o,children:[(0,t.jsx)(c,{children:"Share:"}),(0,t.jsx)(n.SiteLink,{href:p,children:(0,t.jsx)(r.TwitterIcon,{})}),(0,t.jsx)(n.SiteLink,{href:g,children:(0,t.jsx)(r.LinkedInIcon,{})})]})});e.s(["SocialShare",0,h])},328542,e=>{"use strict";var t=e.i(958866);function i(e){let t=["product","company","data","security","data teams","design","engineering","friends of data","further reading"],i=t.findIndex(t=>t===e.toLocaleLowerCase());return i>=0?i:t.length-2}let o=/^(\d{4})-(\d{2})-(\d{2})$/;function r(e){let t=o.exec(e);if(t){let[,e,i,o]=t;return new Date(Number(e),Number(i)-1,Number(o))}return new Date(e)}let n=new Intl.DateTimeFormat("en-US",{month:"long",day:"numeric",year:"numeric"});e.s(["blogCategoryHref",0,function(e){return`/blog/category/${e.replace(/^\/+|\/+$/g,"")}/`},"formatPostDate",0,function(e){if(!e)return"";let t=r(e);return Number.isNaN(t.getTime())?"":n.format(t)},"getCategoryColor",0,function(e){switch(e.toLowerCase()){case"data teams":return"#CDA849";case"data":return"#F5C0C0";case"security":return"#B55E60";case"product":return"#A477B2";case"design":return"#859850";case"engineering":return"#67B69E";case"friends of data":return"#8E7CD8";case"company":default:return"#FFFFFF";case"further reading":return"#717A94";case"research":return"#6BA8D4"}},"getCategoryOrder",0,i,"getNormalizedReadingTime",0,function(e){return(0,t.transform)(Math.floor(e??0),[0,15],[0,1])},"orderCategories",0,function(e){return[...e].sort((e,t)=>i(e.name)-i(t.name))},"parsePostDate",0,r,"textToId",0,function(e){return(e.match(/[a-zA-Z]+/g)||["blog-section"]).join("-").toLocaleLowerCase()}])},34234,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(193594),r=e.i(997053);let n=r.default.div.withConfig({displayName:"RunningText__Wrapper",componentId:"sc-bb7491d4-0"})`
  font-family: 'IBM Plex Sans';

  h1:first-child,
  h2:first-child,
  h3:first-child {
    padding-top: 0;
  }

  *::selection {
    background: ${({theme:e})=>e.highlightColor30};
  }

  *:last-child {
    margin-bottom: 0;
  }

  p {
    font-size: ${18}px;
    line-height: ${32}px;
    margin-bottom: ${24}px;
    font-weight: 400;
  }

  sup {
    font-size: 0.8em;
    line-height: 16px;
  }

  h1,
  h2,
  h3 {
    margin-bottom: ${24}px;
    line-height: 1.3;
    color: ${({theme:e})=>e.fontColor.LOUD};

    strong,
    b {
      font-weight: inherit;
    }

    a {
      color: ${({theme:e})=>e.highlightColor};
      border-color: ${({theme:e})=>e.highlightColor};
    }
  }

  h1,
  h2 {
    font-size: ${28}px;
    padding-top: 25px;
  }

  h3 {
    font-size: ${20}px;
    padding-top: 15px;
  }

  ol,
  ul {
    font-size: ${18}px;
    line-height: ${32}px;
    margin-bottom: ${24}px;
    padding-left: ${24}px;
    list-style-type: circle;
  }

  li {
    font-size: ${18}px;
    line-height: ${32}px;
    margin-bottom: 8px;

    > p {
      margin-bottom: 0;
    }
  }

  p,
  ul,
  ol {
    a {
      color: ${({theme:e})=>e.highlightColor};
      border-color: ${({theme:e})=>e.highlightColor};

      b {
        color: inherit;
      }

      u {
        text-decoration: none;
      }

      &:hover {
        text-decoration: none;
        background-color: ${({theme:e})=>e.highlightColor30};
      }
    }
  }

  strong,
  b {
    font-weight: 600;
    color: ${({theme:e})=>e.fontColor.LOUD};
  }

  .blockquote,
  blockquote {
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 30px;
    padding-left: 15px;
    border-left: 2px solid ${({theme:e})=>e.highlightColor};
  }

  pre {
    background-color: ${({theme:e})=>e.appUI.backgroundColor.MUTED} !important;
    border-radius: 0;
    margin: 0 0 ${24}px;
    padding: 10px 15px;

    > code {
      background-color: ${({theme:e})=>e.appUI.backgroundColor.MUTED};
      color: ${({theme:e})=>e.fontColor.LOUD};
      border: none;
      padding: 0;
    }
  }

  p > code {
    white-space: nowrap;
  }

  code {
    background-color: ${({theme:e})=>e.colors.GRAY};
    border: 1px solid ${({theme:e})=>(0,o.darken)(.15,e.colors.GRAY)};
    padding: 2px 5px;
    color: ${({theme:e})=>e.colors.BLACK};
    border-radius: 0;
    font-size: ${({theme:e})=>e.fontSize.MEDIUM};
    white-space: pre-wrap;
    line-break: anywhere;

    .token.keyword {
      color: ${({theme:e})=>e.colors.LIGHT_PINK};
    }

    .token.string,
    .token.builtin,
    .token.class-name {
      color: ${({theme:e})=>e.colors.LIGHT_PURPLE};
    }
  }

  pre code {
    border: none;
    padding: 0;
  }

  pre i code {
    color: ${({theme:e})=>(0,o.saturate)(.1,(0,o.darken)(.1,e.palette.jade))};
    font-style: normal;
  }

  img {
    display: flex;
    max-width: 100%;
  }

  figcaption {
    text-align: center;
    margin-top: ${24}px;
    margin-bottom: ${24}px;
    opacity: 0.6;
    padding: 0 10px;
  }

  .gatsby-resp-image-image {
    height: auto !important;
  }

  .gatsby-resp-image-link {
    border-bottom: none !important;
  }

  .footnotes {
    ol,
    ul {
      padding: 0;
    }
  }
`,l=i.memo(function({children:e,className:i,style:o}){return(0,t.jsx)(n,{className:i,style:o,children:e})});e.s(["RunningText",0,l])},613938,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(846932),r=e.i(997053),n=e.i(991709),l=e.i(739876),a=e.i(581444);let d=(0,r.default)(a.LayoutSubgrid).withConfig({displayName:"BasicPageRow__Wrapper",componentId:"sc-811624ad-0"})`
  overflow-x: clip;

  ${({$topBorder:e})=>e&&r.css`
      border-top: 1px solid ${({theme:e})=>(0,l.gridColorSelector)(e,"major")};
    `}
`,s=r.css`
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

  ${({$fullWidth:e})=>e&&r.css`
      max-width: none;
      padding: 0;
      grid-column: 1 / -1;
    `}

  ${({$fullWidth:e})=>!e&&r.css`
      @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
        padding: 60px 0;
        grid-column: 2 / -2;
      }

      @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
        padding: 40px 0;
      }
    `}
`,c=(0,r.default)(o.motion.div).withConfig({displayName:"BasicPageRow__Inner",componentId:"sc-811624ad-1"})`
  ${s}
`,h=r.default.div.withConfig({displayName:"BasicPageRow__InnerStatic",componentId:"sc-811624ad-2"})`
  ${s}
`,m=(0,r.default)(a.LayoutGridCondensed).withConfig({displayName:"BasicPageRow__StyledLayoutGridCondensed",componentId:"sc-811624ad-3"})`
  position: relative;
`,p=i.memo(function({animateEntrance:e=!0,children:i,fullWidth:o=!1,topBorder:r=!1,className:a,CartesianGridComponent:s}){return(0,t.jsxs)(d,{$topBorder:r,children:[(0,t.jsx)(l.CheckeredMargin,{}),(0,t.jsxs)(m,{className:a,children:[s&&(0,t.jsx)(s,{fadeDirection:"in"}),e?(0,t.jsx)(c,{...n.ANIMATIONS.SimpleFadeIn,$fullWidth:o,children:i}):(0,t.jsx)(h,{$fullWidth:o,children:i})]}),(0,t.jsx)(l.CheckeredMargin,{"data-right":!0})]})});e.s(["BasicPageRow",0,p])},429625,e=>{"use strict";var t=e.i(271645),i=e.i(35820),o=e.i(182180),r=e.i(472945);e.s(["useNativeVideoTracking",0,function(e,n,l){let a=(0,t.useRef)(!1),d=(0,t.useRef)(new Set);(0,t.useEffect)(()=>{a.current=!1,d.current.clear()},[e]),(0,t.useEffect)(()=>{a.current=!1},[l]);let s=(0,t.useCallback)(()=>{a.current||(a.current=!0,(0,o.trackVideoPlayed)(e,n))},[n,e]),c=(0,t.useCallback)(t=>{let{currentTime:o,duration:l}=t.currentTarget;!Number.isFinite(l)||l<=0||(0,i.getNewVideoProgressThresholds)(o/l*100,d.current).forEach(t=>{d.current.add(t),(0,r.trackVideoProgress)(e,t,n)})},[n,e]);return{handleEnded:(0,t.useCallback)(()=>{(0,i.getNewVideoProgressThresholds)(100,d.current).forEach(t=>{d.current.add(t),(0,r.trackVideoProgress)(e,t,n)}),a.current=!1},[n,e]),handlePlay:s,handleTimeUpdate:c}}])},539087,e=>{"use strict";var t=e.i(898360);e.s(["DARK_THEME",()=>t.darkTheme])},126215,e=>{"use strict";var t=e.i(31512);e.s(["LIGHT_THEME",()=>t.lightTheme])}]);