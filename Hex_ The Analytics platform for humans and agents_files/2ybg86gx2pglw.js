(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,607713,e=>{"use strict";var i=e.i(843476),t=e.i(271645),a=e.i(997053),n=e.i(258591),d=e.i(650617);let l=a.default.div.withConfig({displayName:"SectionHeader__Wrapper",componentId:"sc-fd3ec9c0-0"})`
  margin-top: 66px;

  &:first-child {
    margin-top: 0;
  }
`,r=a.default.div.withConfig({displayName:"SectionHeader__IconWrapper",componentId:"sc-fd3ec9c0-1"})`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  &::before,
  &::after {
    content: '';
    display: block;
    height: 1px;
    width: 35px;
    background-color: ${({theme:e})=>e.colors.LIGHT_PURPLE};
    flex: none;
    opacity: 0.3;
  }
`,s=a.default.div.withConfig({displayName:"SectionHeader__Icon",componentId:"sc-fd3ec9c0-2"})`
  margin: 0 15px;

  svg {
    color: ${({theme:e})=>e.colors.LIGHT_PURPLE};
  }
`,o=a.default.div.withConfig({displayName:"SectionHeader__TextWrapper",componentId:"sc-fd3ec9c0-3"})`
  margin-bottom: 20px;
  padding-right: 40px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    padding-right: 0;
  }
`,c=(0,a.default)(n.Heading).withConfig({displayName:"SectionHeader__SectionHeading",componentId:"sc-fd3ec9c0-4"})`
  margin-bottom: 10px;
`,p=t.memo(function({description:e,icon:t,title:a,useCaseIcon:n}){return(0,i.jsxs)(l,{children:[(0,i.jsx)(r,{children:(0,i.jsx)(s,{children:n?(0,i.jsx)("img",{alt:n.title,src:n.url}):t})}),(0,i.jsxs)(o,{children:[(0,i.jsx)(c,{renderAs:"h2",children:a}),e&&(0,i.jsx)(d.Text,{size:"large",children:e})]})]})});e.s(["SectionHeader",0,p])},296436,e=>{e.v(i=>Promise.all(["static/chunks/3m1bcb90s3oz8.js"].map(i=>e.l(i))).then(()=>i(416694)))},80334,e=>{"use strict";var i=e.i(843476),t=e.i(846932),a=e.i(997053),n=e.i(650617),d=e.i(134700),l=e.i(991709),r=e.i(280731),s=e.i(271645),o=e.i(607713),c=e.i(706736),p=e.i(288839),m=e.i(665419),h=e.i(389049);let x=a.default.div.withConfig({displayName:"TemplatesGrid__Wrapper",componentId:"sc-a6912b7f-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 50px;
`,f=a.default.div.withConfig({displayName:"TemplatesGrid__Section",componentId:"sc-a6912b7f-1"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,g=a.default.div.withConfig({displayName:"TemplatesGrid__Heading",componentId:"sc-a6912b7f-2"})`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    flex-direction: column;
    align-items: flex-start;
  }
`,u=s.memo(function({categories:e}){let t=(0,a.useTheme)(),n=(0,p.default)(t.mediaQueryString.MOBILE);return(0,i.jsx)(x,{children:e.map(e=>(0,i.jsxs)(f,{children:[(0,i.jsxs)(g,{children:[(0,i.jsx)(o.SectionHeader,{description:e.description,title:e.title,useCaseIcon:e.iconUrl?{title:e.title,url:e.iconUrl}:void 0}),(0,i.jsx)(c.Button,{fill:n,href:`${m.INTERNAL_LINKS.Templates}${e.slug}/`,size:"large",stylez:"loud",text:"View all"})]}),(0,i.jsx)(r.GridWrapper,{children:e.templates.slice(0,4).map(e=>(0,i.jsx)(h.TemplatesCard,{template:e},e._id))})]},e._id))})});var j=e.i(294143);let _=a.default.div.withConfig({displayName:"TemplatesIndexContent__Heading",componentId:"sc-86bfaef0-0"})`
  width: 60%;
  margin: 0 auto 80px auto;
  text-align: center;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    width: 100%;
    margin-bottom: 20px;
    text-align: left;
  }
`,y=a.default.div.withConfig({displayName:"TemplatesIndexContent__ContentWrapper",componentId:"sc-86bfaef0-1"})`
  display: flex;
  flex-direction: row;
  gap: 60px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    flex-direction: column;
    gap: 0;
  }
`,I=(0,a.default)(t.motion.div).withConfig({displayName:"TemplatesIndexContent__HeroWrapper",componentId:"sc-86bfaef0-2"})`
  width: 100%;
`;e.s(["TemplatesIndexContent",0,function({categories:e}){let t=e.map(({templates:e,...i})=>i);return(0,i.jsx)(d.V1GridLines,{children:(0,i.jsx)(d.V1PageWrapper,{children:(0,i.jsx)(I,{...l.ANIMATIONS.SimpleFadeIn,children:(0,i.jsxs)(r.Wrapper,{children:[(0,i.jsxs)(_,{children:[(0,i.jsx)(r.StyledH1,{renderAs:"h1",children:"Templates"}),(0,i.jsx)(n.Text,{size:"large",children:"From complex ML forecasting to critical business dashboards, Hex lets data teams work together in Python, SQL, and no-code to do more with data, together."})]}),(0,i.jsxs)(y,{children:[(0,i.jsx)(r.Left,{children:(0,i.jsx)(j.TemplatesNavigation,{categories:t})}),(0,i.jsx)(r.Right,{children:(0,i.jsx)(u,{categories:e})})]})]})})})})}],80334)},928754,e=>{"use strict";var i=e.i(395967),t=e.i(924837),a=e.i(759609);e.s(["trackFilterApplied",0,function(e,n){let d={filter_type:e,filter_value:n,page_path:(0,a.getCurrentPagePath)()};(0,i.trackRudderstack)(t.TRACKING_EVENTS.FilterApplied,d)}])},684927,e=>{e.v(i=>Promise.all(["static/chunks/44bh9rzg1j7vj.js"].map(i=>e.l(i))).then(()=>i(145587)))},407500,e=>{e.v(i=>Promise.all(["static/chunks/2619pqauczhjr.js"].map(i=>e.l(i))).then(()=>i(975681)))}]);