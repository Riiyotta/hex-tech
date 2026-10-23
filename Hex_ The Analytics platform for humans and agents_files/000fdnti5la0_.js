(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,296436,e=>{e.v(t=>Promise.all(["static/chunks/3m1bcb90s3oz8.js"].map(t=>e.l(t))).then(()=>t(416694)))},160613,855942,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(247984),r=e.i(193594),a=e.i(997053),n=e.i(785191),l=e.i(258591),d=e.i(637804);e.i(726497);var s=e.i(778888);let c={growth:"Growth",startup:"Startup",enterprise:"Enterprise"},p={"technology-software":"Technology & Software","financial-services":"Financial Services","healthcare-life-sciences":"Healthcare & Life Sciences","retail-e-commerce":"Retail & E-Commerce","media-entertainment":"Media & Entertainment","professional-services":"Professional Services","energy-manufacturing":"Energy & Manufacturing","education-non-profit":"Education & Non-Profit"};function m(e){return e?c[e]??e:null}function u(e){return e?p[e]??e:null}function h(e){return null!=e&&Number.isFinite(e)?e.toLocaleString("en-US"):null}function g(e){let t=(e??[]).flatMap(e=>e?.label?[e.label]:[]);return t.length?t.join(", "):null}e.s(["formatCustomerStoryCompanySize",0,h,"formatCustomerStoryFeatures",0,g,"formatCustomerStoryIndustry",0,u,"formatCustomerStoryStage",0,m],855942);let x=i.memo(function({item:e}){let i=e.name??"",r=`/customers/${(0,o.stegaClean)(e.slug)}/`,a=e.logoFullColorUrl?.trim(),n=!!a,d=(0,o.stegaClean)(n?a:e.logoUrl??""),c=e.title?.trim()||i,p=m(e.stage),x=u(e.industry),j=h(e.companySize),_=g(e.features);return(0,t.jsx)(y,{href:r,children:(0,t.jsxs)(C,{children:[(0,t.jsx)(b,{children:d?(0,t.jsx)(f,{$fullColor:n,alt:i,src:d}):null}),(0,t.jsxs)(S,{children:[(0,t.jsx)(l.Heading,{renderAs:"h4",children:c}),(0,t.jsxs)(w,{children:[p?(0,t.jsxs)($,{className:s.textStyles.annotation,children:["Stage / ",(0,t.jsx)("span",{children:p})]}):null,_?(0,t.jsxs)($,{className:s.textStyles.annotation,children:["Features / ",(0,t.jsx)("span",{children:_})]}):null,x?(0,t.jsxs)($,{className:s.textStyles.annotation,children:["Industry / ",(0,t.jsx)("span",{children:x})]}):null,j?(0,t.jsxs)($,{className:s.textStyles.annotation,children:["Company size / ",(0,t.jsx)("span",{children:j})]}):null]})]})]})})}),f=a.default.img.withConfig({displayName:"CustomerStoryCard__LogoImg",componentId:"sc-554e2bee-0"})`
  ${({$fullColor:e,theme:t})=>!e&&t.customerLogoColor};
`,y=(0,a.default)(d.SiteLink).withConfig({displayName:"CustomerStoryCard__StoryLink",componentId:"sc-554e2bee-1"})`
  text-decoration: none;
  color: inherit;
  display: block;
  border-bottom: none;
  background-color: transparent;
  transition: none;
  display: flex;
  flex: 1 1 auto;
`,C=(0,a.default)(n.Card).attrs({effect:"glass",interactive:!0}).withConfig({displayName:"CustomerStoryCard__Wrapper",componentId:"sc-554e2bee-2"})`
  && {
    display: flex;
    flex: 1 1 auto;
    padding: 20px;
    gap: 20px;
  }
`,b=a.default.div.withConfig({displayName:"CustomerStoryCard__MediaWrapper",componentId:"sc-554e2bee-3"})`
  display: flex;
  width: 100%;
  height: 150px;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 20px;
  border-radius: 6px;
  background-color: ${({theme:e})=>e.backgroundColor};
  border: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
`,S=a.default.div.withConfig({displayName:"CustomerStoryCard__Content",componentId:"sc-554e2bee-4"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,w=a.default.div.withConfig({displayName:"CustomerStoryCard__Metadata",componentId:"sc-554e2bee-5"})`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,$=a.default.div.withConfig({displayName:"CustomerStoryCard__MetadataRow",componentId:"sc-554e2bee-6"})`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  line-height: 21px;
  font-size: ${({theme:e})=>e.fontSize.EXTRA_SMALL};
  color: ${({theme:e})=>(0,r.rgba)(e.palette.fgLoud,.446)};

  span {
    color: ${({theme:e})=>e.palette.fgLoud};
  }
`;e.s(["CustomerStoryCard",0,x],160613)},31303,e=>{"use strict";var t=e.i(843476),i=e.i(997053),o=e.i(258591),r=e.i(613938),a=e.i(739876),n=e.i(360571),l=e.i(78315);let d=(0,i.default)(o.Heading).withConfig({displayName:"CustomerStoryContent__StoryBodyHeading",componentId:"sc-c025b163-0"})`
  padding-top: 10px;
  margin-bottom: 20px;
`,s=({children:e})=>(0,t.jsx)(d,{renderAs:"h3",children:e}),c={block:{h1:s,h2:s,h3:s,h4:s,h5:s,h6:s}},p=i.default.div.withConfig({displayName:"CustomerStoryContent__TextWrapper",componentId:"sc-c025b163-1"})`
  max-width: 880px;
  border-left: 1px solid ${({theme:e})=>e.borderColor.MUTED};
  border-right: 1px solid ${({theme:e})=>e.borderColor.MUTED};
  padding: ${(0,n.generateFluidPxScale)(40,60)};
  font-family: 'IBM Plex Sans', sans-serif;

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
    color: ${({theme:e})=>e.fontColor.DEFAULT};
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
`,m=i.default.div.withConfig({displayName:"CustomerStoryContent__Inner",componentId:"sc-c025b163-2"})`
  display: flex;
  width: 100%;
  border-top: 1px solid ${({theme:e})=>e.borderColor.MUTED};
`,u=i.default.div.withConfig({displayName:"CustomerStoryContent__HatchedBox",componentId:"sc-c025b163-3"})`
  flex: 1 1 auto;
  opacity: 0.5;
  background-image: ${({theme:e})=>(0,a.backgroundImageHatched)(e)};
`;function h({story:e}){return e.storyContent?.length?(0,t.jsx)(r.BasicPageRow,{fullWidth:!0,children:(0,t.jsxs)(m,{children:[(0,t.jsx)(u,{}),(0,t.jsx)(p,{children:(0,t.jsx)(l.PortableText,{components:c,value:e.storyContent})}),(0,t.jsx)(u,{})]})}):null}var g=e.i(247984),x=e.i(706736),f=e.i(785191),y=e.i(33351);function C({story:e}){let i=e.name??"Customer",a=e.website?(0,g.stegaClean)(e.website):"",n=!!e.description?.trim(),l=!!e.outcome?.length,d=!!e.scaleAchieved?.length;return n||l||d?(0,t.jsx)(r.BasicPageRow,{CartesianGridComponent:y.CartesianGrid,fullWidth:!0,children:(0,t.jsx)(S,{children:(0,t.jsxs)(w,{children:[n?(0,t.jsxs)($,{children:[(0,t.jsxs)(o.Heading,{renderAs:"h4",children:["About ",i]}),(0,t.jsx)(j,{children:e.description}),a?(0,t.jsx)(x.Button,{href:a,text:"View website"}):null]}):null,l?(0,t.jsxs)($,{children:[(0,t.jsx)(o.Heading,{renderAs:"h4",children:"Outcome"}),(0,t.jsx)(b,{items:e.outcome})]}):null,d?(0,t.jsxs)($,{children:[(0,t.jsx)(o.Heading,{renderAs:"h4",children:"Scale achieved"}),(0,t.jsx)(b,{items:e.scaleAchieved})]}):null]})})}):null}function b({items:e}){return e?.length?(0,t.jsx)(_,{children:e.map((e,i)=>(0,t.jsx)("li",{children:e},i))}):null}let S=i.default.div.withConfig({displayName:"CustomerStoryDetails__Wrapper",componentId:"sc-f9af1e8d-0"})`
  display: flex;
  width: 100%;
  border-top: 1px solid ${({theme:e})=>e.borderColor.MUTED};
`,w=i.default.div.withConfig({displayName:"CustomerStoryDetails__Inner",componentId:"sc-f9af1e8d-1"})`
  display: flex;
  gap: 20px;
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding-top: ${(0,n.generateFluidPxScale)(20,30)};
  padding-bottom: ${(0,n.generateFluidPxScale)(20,30)};
  padding-left: ${(0,n.generateFluidPxScale)(30,40)};
  padding-right: ${(0,n.generateFluidPxScale)(30,40)};

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    flex-direction: column;
  }
`,$=(0,i.default)(f.Card).attrs({effect:"glass"}).withConfig({displayName:"CustomerStoryDetails__DetailCard",componentId:"sc-f9af1e8d-2"})`
  padding: ${(0,n.generateFluidPxScale)(30,40)};
  flex: 1 1 0;
`,j=i.default.p.withConfig({displayName:"CustomerStoryDetails__DetailText",componentId:"sc-f9af1e8d-3"})`
  margin-top: 20px;
`,_=i.default.ul.withConfig({displayName:"CustomerStoryDetails__List",componentId:"sc-f9af1e8d-4"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  padding-left: 20px;
  list-style-type: circle;
`;var I=e.i(271645),v=e.i(650617),M=e.i(357044),N=e.i(855942),U=e.i(193594);e.i(726497);var D=e.i(778888);function E({story:e,orientation:i}){let o=(0,N.formatCustomerStoryStage)(e.stage),r=(0,N.formatCustomerStoryFeatures)(e.features),a=(0,N.formatCustomerStoryIndustry)(e.industry),n=(0,N.formatCustomerStoryCompanySize)(e.companySize);return o||r||a||n?(0,t.jsxs)(T,{$orientation:i,children:[o?(0,t.jsxs)(F,{className:D.textStyles.annotation,children:[(0,t.jsx)("label",{children:"Stage /"}),(0,t.jsx)("span",{children:o})]}):null,r?(0,t.jsxs)(F,{className:D.textStyles.annotation,children:[(0,t.jsx)("label",{children:"Features /"}),(0,t.jsx)("span",{children:r})]}):null,a?(0,t.jsxs)(F,{className:D.textStyles.annotation,children:[(0,t.jsx)("label",{children:"Industry /"}),(0,t.jsx)("span",{children:a})]}):null,n?(0,t.jsxs)(F,{className:D.textStyles.annotation,children:[(0,t.jsx)("label",{children:"Company size /"}),(0,t.jsxs)("span",{children:["~",n," employees"]})]}):null]}):null}let P=i.css`
  content: '';
  position: absolute;
  width: 50vw;
  height: 1px;
  background-color: ${({theme:e})=>e.borderColor.MUTED};
`,F=i.default.div.withConfig({displayName:"CustomerStoryMetaData__MetadataRow",componentId:"sc-4451a479-0"})`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  line-height: 21px;
  font-size: ${({theme:e})=>e.fontSize.SMALL};
  color: ${({theme:e})=>(0,U.rgba)(e.palette.fgLoud,.446)};

  span {
    color: ${({theme:e})=>e.palette.fgLoud};
  }
`,T=i.default.div.withConfig({displayName:"CustomerStoryMetaData__Metadata",componentId:"sc-4451a479-1"})`
  display: flex;
  position: relative;

  &::before {
    ${P}
    top: -1px;
    left: -100vw;
    right: -100vw;
    width: auto;
  }

  ${({$orientation:e})=>"horizontal"===e&&i.css`
      align-items: center;
      justify-content: center;
      gap: 40px;
      padding-top: ${(0,n.generateFluidPxScale)(10,20)};
      padding-bottom: ${(0,n.generateFluidPxScale)(10,20)};
      padding-left: ${(0,n.generateFluidPxScale)(30,40)};
      padding-right: ${(0,n.generateFluidPxScale)(30,40)};

      @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
        flex-direction: column;
        align-items: flex-start;
        gap: 0;
      }
    `}

  ${({$orientation:e})=>"vertical"===e&&i.css`
      flex-direction: column;
      align-items: flex-start;
      padding-left: 0;
      padding-right: 10px;
      padding-bottom: 0;
      gap: 10px;
      padding-top: 30px;

      ${F} {
        flex-wrap: nowrap;

        label {
          display: block;
          flex: none;
          min-width: 0;
          width: 130px;
        }
      }
    `}
`;function H({story:e}){let i=e.title?.trim()||e.name,o=e.logoFullColorUrl?.trim(),a=(0,g.stegaClean)(o||e.logoUrl||""),n=e.caseStudyVideoUrl?(0,g.stegaClean)(e.caseStudyVideoUrl):"",l=!!(n&&(0,M.isAllowedMediaEmbedUrl)(n)),d=!!((0,N.formatCustomerStoryStage)(e.stage)||(0,N.formatCustomerStoryFeatures)(e.features)||(0,N.formatCustomerStoryIndustry)(e.industry)||(0,N.formatCustomerStoryCompanySize)(e.companySize)),s=(0,I.useMemo)(()=>{if(!e.summary&&!l)return null;if(e.summary&&!l)return(0,t.jsx)(G,{children:(0,t.jsx)(v.Text,{size:"large",children:e.summary})});let i=!!(e.summary||d);return(0,t.jsxs)(G,{children:[i?(0,t.jsxs)(O,{children:[e.summary?(0,t.jsx)(v.Text,{size:"large",children:e.summary}):null,d?(0,t.jsx)(E,{orientation:"vertical",story:e}):null]}):null,l?(0,t.jsx)(q,{children:(0,t.jsx)(M.MediaEmbed,{src:n})}):null]})},[e,n,l,d]);return(0,t.jsx)(r.BasicPageRow,{fullWidth:!0,children:(0,t.jsx)(L,{children:(0,t.jsxs)(z,{children:[(0,t.jsxs)(J,{$hasVideo:l,children:[(0,t.jsx)(k,{children:a?(0,t.jsx)(K,{alt:e.name??"",src:a}):null}),(0,t.jsx)(R,{}),(0,t.jsxs)(B,{children:[(0,t.jsx)(Q,{children:(0,t.jsx)(X,{renderAs:"h1",children:i})}),s]}),(0,t.jsx)(V,{})]}),l?null:(0,t.jsx)(E,{orientation:"horizontal",story:e})]})})})}let L=i.default.div.withConfig({displayName:"CustomerStoryHeader__Wrapper",componentId:"sc-49cacfb5-0"})`
  display: flex;
  width: 100%;
  border-top: 1px solid ${({theme:e})=>e.borderColor.MUTED};
  margin-top: 150px;
  overflow: hidden;
`,z=i.default.div.withConfig({displayName:"CustomerStoryHeader__Inner",componentId:"sc-49cacfb5-1"})`
  display: flex;
  flex-direction: column;
  max-width: ${({theme:e})=>e.maxWidth.PAGE};
  margin: 0 auto;
  width: 100%;
`,A=i.css`
  content: '';
  position: absolute;
  width: 50vw;
  height: 1px;
  background-color: ${({theme:e})=>e.borderColor.MUTED};
`,W=i.default.div.withConfig({displayName:"CustomerStoryHeader__CellWrapper",componentId:"sc-49cacfb5-2"})`
  display: flex;
  position: relative;
`,k=(0,i.default)(W).withConfig({displayName:"CustomerStoryHeader__TopLeftWrapper",componentId:"sc-49cacfb5-3"})`
  align-items: center;
  border-bottom: 1px solid ${({theme:e})=>e.borderColor.MUTED};
  padding: ${(0,n.generateFluidPxScale)(20,30)} ${(0,n.generateFluidPxScale)(30,40)};

  &::before {
    bottom: -1px;
    left: -50vw;
    ${A}
  }
`,R=(0,i.default)(W).withConfig({displayName:"CustomerStoryHeader__TopRightWrapper",componentId:"sc-49cacfb5-4"})`
  min-height: 100%;
  border-left: 1px solid ${({theme:e})=>e.borderColor.MUTED};
  border-bottom: 1px solid ${({theme:e})=>e.borderColor.MUTED};
  background-image: ${({theme:e})=>(0,a.backgroundImageHatched)(e)};

  &::before {
    bottom: -1px;
    right: -50vw;
    ${A}
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    display: none;
  }
`,B=(0,i.default)(W).withConfig({displayName:"CustomerStoryHeader__BottomLeftWrapper",componentId:"sc-49cacfb5-5"})`
  display: flex;
  flex-direction: column;
  padding: 0;
`,Q=i.default.div.withConfig({displayName:"CustomerStoryHeader__InnerCellWrapper",componentId:"sc-49cacfb5-6"})`
  display: flex;
  padding: ${(0,n.generateFluidPxScale)(30,40)};
`,G=(0,i.default)(Q).withConfig({displayName:"CustomerStoryHeader__SummaryWrapper",componentId:"sc-49cacfb5-7"})`
  gap: 30px;
  border-top: 1px solid ${({theme:e})=>e.borderColor.MUTED};

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    flex-direction: column;
  }
`,O=i.default.div.withConfig({displayName:"CustomerStoryHeader__SummaryWrapperLeft",componentId:"sc-49cacfb5-8"})`
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex: none;
  min-height: 0;
  max-width: 360px;

  p {
    margin: 0;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    max-width: 100%;
  }
`,V=(0,i.default)(W).withConfig({displayName:"CustomerStoryHeader__BottomRightWrapper",componentId:"sc-49cacfb5-9"})`
  display: flex;
  flex-direction: column;
  padding: 0;
  min-height: ${(0,n.generateFluidPxScale)(120,360)};
  border-left: 1px solid ${({theme:e})=>e.borderColor.MUTED};

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    min-height: 0;
  }
`,q=(0,i.default)(f.Card).attrs({effect:"glass"}).withConfig({displayName:"CustomerStoryHeader__VideoWrapper",componentId:"sc-49cacfb5-10"})`
  display: flex;
  flex: 1 1 auto;
  aspect-ratio: 16 / 9;
  padding: 0;
  overflow: hidden;

  > div {
    width: 100%;
    height: 100%;
    margin: 0;
  }
`,K=i.default.img.withConfig({displayName:"CustomerStoryHeader__LogoImg",componentId:"sc-49cacfb5-11"})`
  min-height: ${(0,n.generateFluidPxScale)(67,90)};
  max-height: ${(0,n.generateFluidPxScale)(300,400)};
  width: auto;
  max-width: ${(0,n.generateFluidPxScale)(1200,1600)};
  height: auto;
  object-fit: contain;
`,X=(0,i.default)(o.Heading).withConfig({displayName:"CustomerStoryHeader__StoryHeading",componentId:"sc-49cacfb5-12"})`
  margin-bottom: 0;
`,J=i.default.div.withConfig({displayName:"CustomerStoryHeader__Top",componentId:"sc-49cacfb5-13"})`
  display: grid;
  grid-template-columns: minmax(0, 4fr) minmax(0, 1fr);
  align-items: stretch;
  border-left: 1px solid ${({theme:e})=>e.borderColor.MUTED};
  border-right: 1px solid ${({theme:e})=>e.borderColor.MUTED};

  ${({$hasVideo:e})=>e&&i.css`
      ${V} {
        display: none;
      }

      ${B} {
        grid-column: -1 / 1;
      }
    `}

  @media (max-width: 1300px) {
    border-left: none;
    border-right: none;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    grid-template-columns: 1fr;
  }
`;var Y=e.i(160613);function Z({stories:e}){return e.length?(0,t.jsx)(r.BasicPageRow,{fullWidth:!0,topBorder:!0,children:(0,t.jsxs)(ee,{children:[(0,t.jsx)(o.Heading,{renderAs:"h2",children:"Related stories"}),(0,t.jsx)(et,{children:e.map(e=>(0,t.jsx)(Y.CustomerStoryCard,{item:e},e._id))})]})}):null}let ee=i.default.div.withConfig({displayName:"CustomerStoryRelatedStories__Wrapper",componentId:"sc-ad464042-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  max-width: ${({theme:e})=>e.maxWidth.PAGE};
  margin: 0 auto;
  padding: ${(0,n.generateFluidPxScale)(40,60)} 40px;
  width: 100%;
`,et=i.default.div.withConfig({displayName:"CustomerStoryRelatedStories__Grid",componentId:"sc-ad464042-1"})`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;e.s(["CustomerStoryIndex",0,function({story:e,relatedStories:i}){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(H,{story:e}),(0,t.jsx)(C,{story:e}),(0,t.jsx)(h,{story:e}),(0,t.jsx)(Z,{stories:i})]})}],31303)}]);