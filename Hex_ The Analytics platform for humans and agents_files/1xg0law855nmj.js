(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,559897,i=>{"use strict";var e=i.i(843476),d=i.i(997053),n=i.i(321688),t=i.i(258591),a=i.i(650617),r=i.i(91665),o=i.i(134700);let s=d.default.div.withConfig({displayName:"HubSpotForm__Wrapper",componentId:"sc-337f6b09-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 40px 100px;
`,l=d.default.div.withConfig({displayName:"HubSpotForm__Inner",componentId:"sc-337f6b09-1"})`
  width: 100%;
  max-width: 680px;
`,p=d.default.div.withConfig({displayName:"HubSpotForm__Top",componentId:"sc-337f6b09-2"})`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  text-align: center;
  max-width: 580px;
  margin: 0 auto 40px;
  padding: 0 20px;
`,c=d.default.div.withConfig({displayName:"HubSpotForm__Form",componentId:"sc-337f6b09-3"})`
  width: 100%;
`;i.s(["HubSpotForm",0,({title:i,description:d,formId:m,slug:u,bannerData:g})=>(0,e.jsx)(o.V1PageWrapper,{children:(0,e.jsxs)(s,{children:[(0,e.jsxs)(l,{children:[(0,e.jsxs)(p,{children:[(0,e.jsx)(t.Heading,{renderAs:"h1",children:i}),(0,e.jsx)(a.Text,{size:"large",children:d})]}),(0,e.jsx)(c,{children:(0,e.jsx)(r.HubspotForm,{formId:m,slug:u})})]}),(0,e.jsx)(n.CustomerBanner,{data:g})]})})])},296436,i=>{i.v(e=>Promise.all(["static/chunks/3m1bcb90s3oz8.js"].map(e=>i.l(e))).then(()=>e(416694)))},134700,i=>{"use strict";var e=i.i(843476),d=i.i(997053),n=i.i(739876),t=i.i(581444);let a=(0,d.default)(t.LayoutSubgrid).withConfig({displayName:"V1PageWrapper__V1Subgrid",componentId:"sc-cf85dce9-0"})`
  padding-top: ${({$noTopPadding:i})=>i?0:"12.5rem"};
  overflow-x: clip;
  position: relative;
  isolation: isolate;

  @media (max-width: ${({theme:i})=>i.mediaQuery.MEDIUM}) {
    padding-top: ${({$noTopPadding:i})=>i?0:"9rem"};
  }

  & ~ & {
    padding-top: 0;
  }
`,r=(0,d.default)(n.GridRule).withConfig({displayName:"V1PageWrapper__ResponsiveGridRule",componentId:"sc-cf85dce9-1"})`
  @media (max-width: ${({theme:i})=>i.mediaQuery.MOBILE}) {
    display: none;
  }
`;i.s(["V1GridLines",0,function({children:i}){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(t.LayoutSubgrid,{"aria-hidden":"true","data-pile":!0,children:[(0,e.jsx)(r,{$column:4}),(0,e.jsx)(n.GridRule,{$column:7}),(0,e.jsx)(r,{$column:10})]}),(0,e.jsx)(t.LayoutSubgrid,{"data-pile":!0,children:i})]})},"V1PageWrapper",0,function({children:i,noTopPadding:d}){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.ContentMarginLine,{"data-v1-gridlines":!0}),(0,e.jsx)(a,{$noTopPadding:d,"data-content-grid":!0,children:i}),(0,e.jsx)(n.ContentMarginLine,{"data-right":!0,"data-v1-gridlines":!0})]})}])}]);