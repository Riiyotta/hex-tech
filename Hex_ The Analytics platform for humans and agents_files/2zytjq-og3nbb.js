(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,451115,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(997053),n=e.i(334010),r=e.i(929022),a=e.i(967109),s=e.i(775732),l=e.i(430388),d=e.i(294101);let c=i.memo(function(){return(0,t.jsxs)(p,{children:[(0,t.jsxs)(x,{children:[(0,t.jsx)(d.HexDropdown,{icon:(0,t.jsx)(l.GroupsIcon,{}),popoverContent:[{title:"All roles",selected:!0},{title:"Admin"},{title:"Editor"},{title:"Explorer"}],text:"All roles",variant:"minimal"}),(0,t.jsx)(d.HexDropdown,{icon:(0,t.jsx)(l.UserIcon,{}),popoverContent:[{title:"All users",selected:!0},...Object.values(a.USER_NAMES).map(e=>({title:e}))],text:"All users",variant:"minimal"}),(0,t.jsx)(d.HexDropdown,{icon:(0,t.jsx)(l.LibraryIcon,{}),popoverContent:[{title:"All topics",selected:!0},...Object.values(a.TOPIC_NAMES).map(e=>({title:e}))],text:"All topics",variant:"minimal"}),(0,t.jsx)(d.HexDropdown,{icon:(0,t.jsx)(l.SuccessIcon,{}),popoverContent:[{title:"All warnings",selected:!0},...Object.values(a.WARNING_NAMES).map(e=>({title:e}))],text:"All warnings",variant:"minimal"}),(0,t.jsx)(d.HexDropdown,{icon:(0,t.jsx)(l.GlobeIcon,{}),popoverContent:[{title:"All sources",selected:!0},...Object.values(a.SOURCE_NAMES).map(e=>({title:e}))],text:"All sources",variant:"minimal"})]}),(0,t.jsx)(x,{children:(0,t.jsx)(d.HexDropdown,{popoverContent:[{title:"Last 7 days",selected:!0},{title:"Last 30 days"},{title:"Last 60 days"},{title:"Custom range"}],text:"Last 7 days",variant:"minimal"})})]})}),p=o.styled.div.withConfig({displayName:"CSFilterBar__Wrapper",componentId:"sc-7aad1c3f-0"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 1px solid ${({theme:e})=>e.appUI.borderColor.MUTED};
`,x=o.styled.div.withConfig({displayName:"CSFilterBar__FilterList",componentId:"sc-7aad1c3f-1"})`
  display: flex;

  > div {
    flex: none;
  }
`;var h=e.i(238108),u=e.i(60387);let f=i.memo(function(){return(0,t.jsxs)(m,{children:[(0,t.jsx)(g,{title:"Context Studio"}),(0,t.jsxs)(C,{children:[(0,t.jsxs)(v,{children:[(0,t.jsx)(y,{children:"Observability"}),(0,t.jsx)(j,{active:!0,icon:(0,t.jsx)(l.TrendingIcon,{}),text:"Overview"})]}),(0,t.jsxs)(v,{children:[(0,t.jsx)(y,{children:"Management"}),(0,t.jsx)(j,{icon:(0,t.jsx)(l.LightbulbIcon,{}),text:"Suggestions"}),(0,t.jsx)(j,{icon:(0,t.jsx)(l.EndorsedIcon,{}),text:"Endorsements"}),(0,t.jsx)(j,{icon:(0,t.jsx)(l.LibraryIcon,{}),text:"Guides"}),(0,t.jsx)(j,{icon:(0,t.jsx)(l.SemanticModelsIcon,{}),text:"Models"}),(0,t.jsx)(j,{icon:(0,t.jsx)(l.SharingIcon,{}),text:"Connections"})]})]})]})}),m=o.styled.div.withConfig({displayName:"CSSidebar__Wrapper",componentId:"sc-909d60ae-0"})`
  display: flex;
  flex-direction: column;
  width: 155px;
  flex: none;
  border-right: 1px solid ${({theme:e})=>e.appUI.borderColor.MUTED};

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    display: none;
  }
`,g=(0,o.styled)(u.NavBar).withConfig({displayName:"CSSidebar__StyledNavBar",componentId:"sc-909d60ae-1"})`
  padding: 13px 12px 12px 8px;
`,C=o.styled.div.withConfig({displayName:"CSSidebar__List",componentId:"sc-909d60ae-2"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px 8px;
`,v=o.styled.div.withConfig({displayName:"CSSidebar__ListGroup",componentId:"sc-909d60ae-3"})`
  display: flex;
  flex-direction: column;
`,y=o.styled.div.withConfig({displayName:"CSSidebar__SectionHeader",componentId:"sc-909d60ae-4"})`
  font-size: ${({theme:e})=>e.appUI.fontSize.SMALL};
  font-weight: 500;
  color: ${({theme:e})=>e.appUI.fontColor.MUTED};
  text-transform: uppercase;
  padding: 0 8px;
  margin-bottom: 4px;
`,j=(0,o.styled)(h.HexButton).attrs({variant:"minimal"}).withConfig({displayName:"CSSidebar__MenuItem",componentId:"sc-909d60ae-5"})`
  width: 100%;
  justify-content: flex-start;
`,b=i.memo(function({title:e,value:i,chart:o}){return(0,t.jsxs)(S,{children:[(0,t.jsx)(w,{children:e}),(0,t.jsx)(A,{children:i}),(0,t.jsx)(N,{children:o})]})}),S=o.styled.div.withConfig({displayName:"Sparkline__Wrapper",componentId:"sc-d7faa19-0"})`
  display: flex;
  flex-direction: column;
  gap: 2px;
  position: relative;
  flex: 1 1 auto;
`,w=o.styled.div.withConfig({displayName:"Sparkline__Title",componentId:"sc-d7faa19-1"})`
  font-size: ${({theme:e})=>e.appUI.fontSize.DEFAULT};
`,A=o.styled.div.withConfig({displayName:"Sparkline__Value",componentId:"sc-d7faa19-2"})`
  font-size: 24px;
  font-weight: 700;
`,N=o.styled.div.withConfig({displayName:"Sparkline__SparklineWrapper",componentId:"sc-d7faa19-3"})`
  position: absolute;
  inset: 10px 0 0 0;
  pointer-events: none;
  mask-image: linear-gradient(
    to right,
    transparent,
    transparent 30px,
    white 100%
  );

  svg {
    width: 100%;
    height: 100%;
  }
`;var T=e.i(193594);let I=i.memo(function({rows:e}){return(0,t.jsxs)(L,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)(E,{children:"DATE"}),(0,t.jsx)(E,{children:"AGENT"}),(0,t.jsx)(E,{children:"PROMPT"}),(0,t.jsx)(E,{"data-topic":!0,children:"TOPIC"}),(0,t.jsx)(E,{children:"WARNINGS"}),(0,t.jsx)(E,{children:"SOURCE"}),(0,t.jsx)(E,{children:"USER"}),(0,t.jsx)(E,{children:"ROLE"})]})}),(0,t.jsx)("tbody",{children:e.map((e,i)=>(0,t.jsxs)(_,{children:[(0,t.jsx)(M,{children:e.date}),(0,t.jsx)(M,{children:e.agent}),(0,t.jsx)(M,{$prompt:!0,children:e.prompt}),(0,t.jsx)(M,{"data-topic":!0,children:e.topic}),(0,t.jsx)(M,{children:e.warnings?(0,t.jsx)($,{children:e.warnings}):null}),(0,t.jsx)(M,{children:e.source}),(0,t.jsx)(M,{children:e.user}),(0,t.jsx)(M,{children:e.role})]},i))})]})}),E=o.styled.th.withConfig({displayName:"ThreadsTable__Th",componentId:"sc-caa35dd5-0"})`
  text-align: left;
  padding: 8px;
  font-weight: 500;
  font-size: ${({theme:e})=>e.appUI.fontSize.SMALL};
  text-transform: uppercase;
  color: ${({theme:e})=>e.appUI.fontColor.MUTED};
  border-bottom: 1px solid ${({theme:e})=>e.appUI.borderColor.MUTED};
`,_=o.styled.tr.withConfig({displayName:"ThreadsTable__Tr",componentId:"sc-caa35dd5-1"})`
  cursor: pointer;

  &:hover {
    background-color: ${({theme:e})=>e.appUI.backgroundColor.MUTED};
  }
`,M=o.styled.td.withConfig({displayName:"ThreadsTable__Td",componentId:"sc-caa35dd5-2"})`
  padding: 8px;
  color: ${({theme:e})=>e.appUI.fontColor.MUTED};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({$prompt:e})=>e&&o.css`
      color: ${({theme:e})=>e.appUI.fontColor.DEFAULT};
      max-width: 250px;

      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    `}
`,L=o.styled.table.withConfig({displayName:"ThreadsTable__Table",componentId:"sc-caa35dd5-3"})`
  width: 100%;
  border-collapse: collapse;
  font-size: ${({theme:e})=>e.appUI.fontSize.DEFAULT};
  border-top: 1px solid ${({theme:e})=>e.appUI.borderColor.MUTED};

  th:first-child {
    padding-left: 20px;
  }

  th:last-child {
    padding-right: 20px;
  }

  td:first-child {
    padding-left: 20px;
  }

  td:last-child {
    padding-right: 20px;
  }

  [data-topic] {
    max-width: 100px;
  }
`,$=o.styled.span.withConfig({displayName:"ThreadsTable__Warning",componentId:"sc-caa35dd5-4"})`
  color: ${({theme:e})=>e.appUI.intent.WARNING};
  background-color: ${({theme:e})=>(0,T.rgba)(e.appUI.intent.WARNING,.06)};
  border-radius: ${({theme:e})=>e.appUI.borderRadius};
  padding: 3px 6px;
`,k=i.memo(function({dashedLines:e}){return(0,t.jsxs)(U,{accessibleLabel:"Product demonstration of Hex Context Studio observability",dashedLines:e,windowTitle:"Agent observability",children:[(0,t.jsx)(f,{}),(0,t.jsxs)(D,{children:[(0,t.jsx)(c,{}),(0,t.jsxs)(R,{children:[(0,t.jsxs)(B,{children:[(0,t.jsxs)(H,{children:[(0,t.jsx)(b,{chart:(0,t.jsx)(G,{}),title:"Agent conversations",value:461}),(0,t.jsx)(b,{chart:(0,t.jsx)(W,{}),title:"Unique users",value:55}),(0,t.jsx)(b,{chart:(0,t.jsx)(V,{}),title:"Warnings",value:12})]}),(0,t.jsxs)(O,{children:[(0,t.jsxs)(P,{children:[(0,t.jsx)(F,{children:"Conversation volume"}),(0,t.jsx)(r.ChartConversationVolume,{})]}),(0,t.jsxs)(P,{children:[(0,t.jsx)(F,{children:"Top conversation topics"}),(0,t.jsx)(n.ChartConversationTopics,{})]})]})]}),(0,t.jsx)(I,{rows:[{agent:"Notebook",date:"44 min ago",prompt:"How did revenue change across the Outer Rim compared to last quarter?",role:"Admin",user:"Luc Patton",topic:a.TOPIC_NAMES.Q3RevenueByProductLine,warnings:null,source:a.SOURCE_NAMES.Hex},{agent:"Threads",date:"1 hr ago",prompt:"Which product lines saw the strongest Research-sector demand?",role:"Editor",user:"Eels Gulsen",topic:a.TOPIC_NAMES.RegionalSalesBreakdown,warnings:"User doubt",source:a.SOURCE_NAMES.Slack},{agent:"Modeling",date:"2 hrs ago",prompt:"Help me define measures and dimensions for the Core Worlds semantic model.",role:"Explorer",user:"Andrei Leesom",topic:a.TOPIC_NAMES.DefenseSectorAnalysis,warnings:null,source:a.SOURCE_NAMES.MCP},{agent:"Threads",date:"3 hrs ago",prompt:"Give me a breakdown of negative customer feedback in the Outer Rim this month.",role:"Explorer",user:"Andrei Leesom",topic:a.TOPIC_NAMES.CommercialSectorRevenue,warnings:"Missing context",source:a.SOURCE_NAMES.CLI},{agent:"Threads",date:"3 hrs ago",prompt:"What are this quarter's top customer pain points in the Outer Rim?",role:"Explorer",user:"Andrei Leesom",topic:a.TOPIC_NAMES.QuarterlyGrowthTrends,warnings:null,source:a.SOURCE_NAMES.Hex}]})]})]})]})}),U=(0,o.styled)(s.InteractiveFeatureWrapper).withConfig({displayName:"InteractiveFeatureCSDashboard__Wrapper",componentId:"sc-b434ac73-0"})`
  && {
    flex-direction: row;
  }
`,D=o.styled.div.withConfig({displayName:"InteractiveFeatureCSDashboard__MainContent",componentId:"sc-b434ac73-1"})`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-width: 0;
`,R=o.styled.div.withConfig({displayName:"InteractiveFeatureCSDashboard__Content",componentId:"sc-b434ac73-2"})`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex: 1 1 auto;
  min-width: 0;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
`,B=o.styled.div.withConfig({displayName:"InteractiveFeatureCSDashboard__TopLineViz",componentId:"sc-b434ac73-3"})`
  display: flex;
  gap: 20px;
  padding: 20px 20px 12px;
`,H=o.styled.div.withConfig({displayName:"InteractiveFeatureCSDashboard__Sparklines",componentId:"sc-b434ac73-4"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 8px;
`,O=o.styled.div.withConfig({displayName:"InteractiveFeatureCSDashboard__Charts",componentId:"sc-b434ac73-5"})`
  display: flex;
  gap: 20px;
  flex: 1 1 auto;
`,P=o.styled.div.withConfig({displayName:"InteractiveFeatureCSDashboard__Chart",componentId:"sc-b434ac73-6"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1 1 auto;
`,F=o.styled.div.withConfig({displayName:"InteractiveFeatureCSDashboard__ChartTitle",componentId:"sc-b434ac73-7"})`
  font-size: ${({theme:e})=>e.appUI.fontSize.DEFAULT};
`,G=()=>(0,t.jsxs)("svg",{fill:"none",preserveAspectRatio:"none",viewBox:"0 0 131 60",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("path",{d:"M24.0057 29.1429L0 49.7143V60H130V24V15L92.6989 29.1429L73.125 20.7857L59.0909 28.5L45.4261 35.5714L24.0057 29.1429Z",fill:"url(#sparkline-agent-conversations-gradient)"}),(0,t.jsx)("path",{d:"M0 49.5C9.39632 42.4706 24.0608 29 24.0608 29L45.2486 35.5L59.2647 28L73.2597 20.8L92.9118 29.5C92.9118 29.5 106.22 23.5859 114.917 20.8C120.806 18.9136 130 15 130 15",stroke:"#654A94",strokeLinecap:"round"}),(0,t.jsx)("defs",{children:(0,t.jsxs)("linearGradient",{gradientUnits:"userSpaceOnUse",id:"sparkline-agent-conversations-gradient",x1:"64.8878",x2:"64.8878",y1:"27.236",y2:"53.8507",children:[(0,t.jsx)("stop",{stopColor:"#AD99FF",stopOpacity:"0.2"}),(0,t.jsx)("stop",{offset:"1",stopColor:"#AD99FF",stopOpacity:"0.07"})]})})]}),V=()=>(0,t.jsxs)("svg",{fill:"none",preserveAspectRatio:"none",viewBox:"0 0 130 60",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("path",{d:"M23.9631 27L0 43V59H130V27L112.028 58H85.3687L73.3871 27L59.9078 58H44.6313L23.9631 27Z",fill:"url(#sparkline-negative-interactions-gradient)"}),(0,t.jsx)("path",{d:"M0 43.5161L23.908 27L44.5287 59H59.7701L73.2184 27L85.1724 59H111.77L130 27",stroke:"#654A94",strokeLinecap:"round"}),(0,t.jsx)("defs",{children:(0,t.jsxs)("linearGradient",{gradientUnits:"userSpaceOnUse",id:"sparkline-negative-interactions-gradient",x1:"64.8878",x2:"64.8878",y1:"8.03383",y2:"49.4345",children:[(0,t.jsx)("stop",{stopColor:"#AD99FF",stopOpacity:"0.2"}),(0,t.jsx)("stop",{offset:"1",stopColor:"#AD99FF",stopOpacity:"0.07"})]})})]}),W=()=>(0,t.jsxs)("svg",{fill:"none",preserveAspectRatio:"none",viewBox:"0 0 130 60",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("path",{d:"M20.0691 40.0518L0 54.6293V60.3335H130V15.3335L112.028 25.4743L98.8479 55.8969L85.3687 59.6997L73.9862 31.8124H56.0138L36.8433 40.0518H20.0691Z",fill:"url(#sparkline-unique-users-gradient)"}),(0,t.jsx)("path",{d:"M0 53.6073L20.6682 40.2382H37.1429L56.6129 31.7476H74.2857L85.6682 59.3335L99.1475 55.6383L112.327 26.0715L130 16.3332",stroke:"#654A94",strokeLinecap:"round"}),(0,t.jsx)("defs",{children:(0,t.jsxs)("linearGradient",{gradientUnits:"userSpaceOnUse",id:"sparkline-unique-users-gradient",x1:"64.8878",x2:"64.8878",y1:"28.031",y2:"54.2709",children:[(0,t.jsx)("stop",{stopColor:"#AD99FF",stopOpacity:"0.2"}),(0,t.jsx)("stop",{offset:"1",stopColor:"#AD99FF",stopOpacity:"0.07"})]})})]});e.s(["InteractiveFeatureCSDashboard",0,k],451115)},908009,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(975336);let n=i.memo(function({width:e,height:i,tooltipContent:n,color:r}){return(0,t.jsx)(o.HexTooltip,{alignContent:"left",content:(0,t.jsx)(t.Fragment,{children:n.map((e,i)=>(0,t.jsx)("div",{children:e},i))}),followCursor:!0,renderAs:"span",style:{width:e,height:i,background:r}})});e.s(["BarSpace",0,n])},289388,433596,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(997053);let n={SingleCoolColor:["#6f63b7"],MultiCoolColors:["#6f63b7","#6e8ccf","#9e91d6","#d1c3e8"],SingleWarmColor:["#f6a041"],MultiWarmColors:["#CD5973","#E7B848","#5DB196","#544692"],MultiLineColors:["#f6a041","#e46f2e","#5ba67c","#3b9ddd","#6f63b7","#9e91d6"]},r=o.default.div.withConfig({displayName:"chartSharedStyles__ChartWrapper",componentId:"sc-2de1310f-0"})`
  display: flex;
  gap: 8px;
  flex: 1 1 auto;
  overflow: hidden;
`,a=o.default.div.withConfig({displayName:"chartSharedStyles__Tick",componentId:"sc-2de1310f-1"})`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
`,s=o.default.div.withConfig({displayName:"chartSharedStyles__TickSpacing",componentId:"sc-2de1310f-2"})`
  flex: none;
  height: 22px;
`,l=o.default.div.withConfig({displayName:"chartSharedStyles__TickLine",componentId:"sc-2de1310f-3"})`
  position: absolute;

  pointer-events: none;
  background-color: ${({theme:e})=>e.appUI.borderColor.MUTED};

  ${({$direction:e})=>"vertical"===e&&o.css`
      width: 1px;
      height: 1000px;
      bottom: 100%;
    `}

  ${({$direction:e})=>"horizontal"===e&&o.css`
      width: 1000px;
      height: 1px;
      left: calc(100% + 4px);
    `}
`,d=o.default.div.withConfig({displayName:"chartSharedStyles__TickText",componentId:"sc-2de1310f-4"})`
  font-size: ${({theme:e})=>e.appUI.fontSize.SMALL};
  color: ${({theme:e,$muted:t})=>t?e.appUI.fontColor.MUTED:e.appUI.fontColor.DEFAULT};
  line-height: 22px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,c=o.default.div.withConfig({displayName:"chartSharedStyles__ChartYAxis",componentId:"sc-2de1310f-5"})`
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-align: center;
  max-width: ${({$hasMaxWidth:e})=>e?"70px":"none"};

  ${a} {
    justify-content: flex-end;
  }
`,p=o.default.div.withConfig({displayName:"chartSharedStyles__YAxisTicks",componentId:"sc-2de1310f-6"})`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  justify-content: space-between;

  ${d} {
    line-height: ${({$tickSpread:e})=>"auto"===e?"22px":"normal"};
  }
`,x=o.default.div.withConfig({displayName:"chartSharedStyles__ChartXAxis",componentId:"sc-2de1310f-7"})`
  display: flex;
  gap: 2px;
  justify-content: space-between;
  z-index: 1;

  ${a} {
    flex: none;
    line-height: 22px;
    text-align: center;
  }

  ${({$type:e})=>"stacked-vertical"===e&&o.css`
      ${a} {
        flex: 1 1 auto;
      }
    `}
`,h=o.default.div.withConfig({displayName:"chartSharedStyles__ChartContents",componentId:"sc-2de1310f-8"})`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1 1 auto;
`,u=o.default.div.withConfig({displayName:"chartSharedStyles__ChartBars",componentId:"sc-2de1310f-9"})`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  gap: 2px;

  div {
    height: 22px;
    display: flex;
    gap: 1px;
    flex: none;
    z-index: 2;

    span {
      height: 100%;
      ${({$type:e,$colorPalette:t})=>{let i;return i=n[t]||n.SingleCoolColor,"bar"===e?o.css`
      background: ${i[0]};
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
      flex: none;
    `:"stacked-fill"===e?o.css`
      &:nth-child(1) {
        background: ${i[0]};
        flex: none;
      }
      &:nth-child(2) {
        background: ${i[1]};
        flex: none;
      }
      &:nth-child(3) {
        background: ${i[2]};
        flex: none;
      }
      &:nth-child(4) {
        background: ${i[3]};
        flex: none;
      }
      &:last-child {
        flex: 1 1 auto;
      }
    `:"stacked-vertical"===e?o.css`
      &:nth-child(1) {
        background: ${i[0]};
        flex: none;
        border-top-left-radius: 2px;
        border-top-right-radius: 2px;
      }
      &:nth-child(2) {
        background: ${i[1]};
        flex: none;
      }
      &:nth-child(3) {
        background: ${i[2]};
        flex: none;
      }
      &:nth-child(4) {
        background: ${i[3]};
        flex: none;
      }
      &:last-child {
        flex: 1 1 auto;
      }
    `:""}}
    }
  }

  ${({$type:e})=>"stacked-vertical"===e&&o.css`
      flex-direction: row;
      align-items: flex-end;

      div {
        flex: 1 1 auto;
        flex-direction: column;
        height: 100%;
        justify-content: flex-end;

        > span {
          flex: none !important;
        }
      }
    `}
`;e.s(["CHART_COLOR_PALETTE",0,n,"ChartBars",0,u,"ChartContents",0,h,"ChartWrapper",0,r,"ChartXAxis",0,x,"ChartYAxis",0,c,"Tick",0,a,"TickLine",0,l,"TickSpacing",0,s,"TickText",0,d,"YAxisTicks",0,p],433596);let f=i.memo(function({colorPalette:e,xAxis:i,yAxis:o,contents:n,type:f}){return(0,t.jsxs)(r,{children:[(0,t.jsxs)(c,{$hasMaxWidth:o.hasMaxWidth,children:[(0,t.jsx)(p,{$tickSpread:o.tickSpread??"auto",children:o.items.map((e,i)=>(0,t.jsxs)(a,{children:[o.showTickLines&&(0,t.jsx)(l,{$direction:"horizontal"}),(0,t.jsx)(d,{$muted:o.muted,children:e})]},i))}),(0,t.jsx)(s,{})]}),(0,t.jsxs)(h,{children:[(0,t.jsx)(u,{$colorPalette:e,$type:f,children:n}),(0,t.jsx)(x,{$muted:i.muted,$type:f,children:i.items.map((e,o)=>(0,t.jsxs)(a,{children:[i.showTickLines&&(0,t.jsx)(l,{$direction:"vertical"}),(0,t.jsx)(d,{$muted:i.muted,children:e})]},o))})]})]})});e.s(["Chart",0,f],289388)},334010,929022,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(908009),n=e.i(289388),r=e.i(967109);let a={[r.TOPIC_NAMES.Q3RevenueByProductLine]:[3,31],[r.TOPIC_NAMES.RegionalSalesBreakdown]:[2,22],[r.TOPIC_NAMES.DefenseSectorAnalysis]:[0,15],[r.TOPIC_NAMES.QuarterlyGrowthTrends]:[1,11],[r.TOPIC_NAMES.ProductLineComparisons]:[0,11],[r.TOPIC_NAMES.CommercialSectorRevenue]:[0,10]},s=i.memo(function(){let e=(0,t.jsx)(t.Fragment,{children:Object.values(r.TOPIC_NAMES).map(e=>{let[i,n]=a[e]||[0,0],r=`${i/35*100}%`,s=`${n/35*100}%`;return(0,t.jsxs)("div",{children:[i>0&&(0,t.jsx)(o.BarSpace,{color:"#CD5973",tooltipContent:["Contains warning",`${i}`],width:r}),(0,t.jsx)(o.BarSpace,{color:"#3A4696",tooltipContent:["No warnings",`${n}`],width:s})]},e)})});return(0,t.jsx)(n.Chart,{colorPalette:"MultiCoolColors",contents:e,type:"bar",xAxis:{items:["0","5","10","15","20","25","30","35"],muted:!0,showTickLines:!0},yAxis:{items:Object.values(r.TOPIC_NAMES),muted:!0}})});e.s(["ChartConversationTopics",0,s],334010);let l=i.memo(function(){let e=(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(o.BarSpace,{height:"2%",tooltipContent:[r.AGENT_NAMES.Modeling,"12"]}),(0,t.jsx)(o.BarSpace,{height:"8%",tooltipContent:[r.AGENT_NAMES.Notebook,"40"]}),(0,t.jsx)(o.BarSpace,{height:"22%",tooltipContent:[r.AGENT_NAMES.PublishedApp,"110"]}),(0,t.jsx)(o.BarSpace,{height:"27%",tooltipContent:[r.AGENT_NAMES.Threads,"135"]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(o.BarSpace,{height:"2%",tooltipContent:[r.AGENT_NAMES.Modeling,"10"]}),(0,t.jsx)(o.BarSpace,{height:"14%",tooltipContent:[r.AGENT_NAMES.Notebook,"70"]}),(0,t.jsx)(o.BarSpace,{height:"23%",tooltipContent:[r.AGENT_NAMES.PublishedApp,"115"]}),(0,t.jsx)(o.BarSpace,{height:"38%",tooltipContent:[r.AGENT_NAMES.Threads,"190"]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(o.BarSpace,{height:"3%",tooltipContent:[r.AGENT_NAMES.Modeling,"17"]}),(0,t.jsx)(o.BarSpace,{height:"9%",tooltipContent:[r.AGENT_NAMES.Notebook,"45"]}),(0,t.jsx)(o.BarSpace,{height:"20%",tooltipContent:[r.AGENT_NAMES.PublishedApp,"100"]}),(0,t.jsx)(o.BarSpace,{height:"36%",tooltipContent:[r.AGENT_NAMES.Threads,"180"]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(o.BarSpace,{height:"4%",tooltipContent:[r.AGENT_NAMES.Modeling,"18"]}),(0,t.jsx)(o.BarSpace,{height:"11%",tooltipContent:[r.AGENT_NAMES.Notebook,"55"]}),(0,t.jsx)(o.BarSpace,{height:"26%",tooltipContent:[r.AGENT_NAMES.PublishedApp,"130"]}),(0,t.jsx)(o.BarSpace,{height:"47%",tooltipContent:[r.AGENT_NAMES.Threads,"235"]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(o.BarSpace,{height:"5%",tooltipContent:[r.AGENT_NAMES.Modeling,"25"]}),(0,t.jsx)(o.BarSpace,{height:"13%",tooltipContent:[r.AGENT_NAMES.Notebook,"65"]}),(0,t.jsx)(o.BarSpace,{height:"31%",tooltipContent:[r.AGENT_NAMES.PublishedApp,"155"]}),(0,t.jsx)(o.BarSpace,{height:"53%",tooltipContent:[r.AGENT_NAMES.Threads,"265"]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(o.BarSpace,{height:"7%",tooltipContent:[r.AGENT_NAMES.Modeling,"35"]}),(0,t.jsx)(o.BarSpace,{height:"14%",tooltipContent:[r.AGENT_NAMES.Notebook,"70"]}),(0,t.jsx)(o.BarSpace,{height:"29%",tooltipContent:[r.AGENT_NAMES.PublishedApp,"145"]}),(0,t.jsx)(o.BarSpace,{height:"55%",tooltipContent:[r.AGENT_NAMES.Threads,"275"]})]})]});return(0,t.jsx)(n.Chart,{colorPalette:"MultiWarmColors",contents:e,type:"stacked-vertical",xAxis:{items:["9/19","9/20","9/21","9/22","9/23","9/24"],muted:!0},yAxis:{items:["500","400","300","200","100","0"],muted:!0,showTickLines:!0}})});e.s(["ChartConversationVolume",0,l],929022)},294101,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(997053),n=e.i(430388),r=e.i(193594);let a=i.createContext(null),s=({children:e,content:o,align:n="left",offsetY:r=-1,isOpen:s,onOpenChange:h})=>{let[u,f]=i.useState(!1),m=i.useRef(null),g=i.useRef(null),C=i.useId(),v=i.useContext(a),y=void 0!==s,j=v?v.activeId===C:u,b=y?s:j,S=i.useCallback(e=>{y?h?.(e):v?v.setActiveId(e?C:null):f(e)},[y,h,v,C]);return i.useEffect(()=>{if(!b)return;let e=e=>{let t=e.target;m.current&&!m.current.contains(t)&&S(!1)},t=setTimeout(()=>{document.addEventListener("click",e)},0);return()=>{clearTimeout(t),document.removeEventListener("click",e)}},[b,S]),i.useEffect(()=>{if(!b)return;let e=e=>{"Escape"===e.key&&S(!1)};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[b,S]),(0,t.jsxs)(l,{ref:m,children:[(0,t.jsx)(d,{onClick:()=>{S(!b)},children:e}),(0,t.jsx)(c,{ref:g,$align:n,$isOpen:b,$offsetY:r,onClick:()=>S(!1),children:(0,t.jsx)(p,{children:o.map(e=>(0,t.jsx)(x,{$selected:e.selected,children:e.title},e.title))})})]})},l=o.styled.div.withConfig({displayName:"HexPopover__Wrapper",componentId:"sc-b8dbcf44-0"})`
  position: relative;
  display: flex;
  flex: 1 1 auto;
`,d=o.styled.div.withConfig({displayName:"HexPopover__Trigger",componentId:"sc-b8dbcf44-1"})`
  display: flex;
  flex: 1 1 auto;
  cursor: pointer;
`,c=o.styled.div.withConfig({displayName:"HexPopover__PopoverContainer",componentId:"sc-b8dbcf44-2"})`
  position: absolute;
  top: calc(100% + ${({$offsetY:e})=>e}px);
  ${({$align:e})=>{switch(e){case"left":return"left: 0;";case"right":return"right: 0;";default:return"left: 50%; transform: translateX(-50%);"}}}
  z-index: 100;
  min-width: 120px;
  width: max-content;

  opacity: ${({$isOpen:e})=>+!!e};
  visibility: ${({$isOpen:e})=>e?"visible":"hidden"};
  pointer-events: ${({$isOpen:e})=>e?"auto":"none"};
  transition:
    opacity 150ms ease-in-out,
    visibility 150ms ease-in-out;
`,p=o.styled.div.withConfig({displayName:"HexPopover__PopoverContent",componentId:"sc-b8dbcf44-3"})`
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.appUI.backgroundColor.DEFAULT};
  border: 1px solid ${({theme:e})=>e.appUI.borderColor.DEFAULT};
  border-radius: ${({theme:e})=>e.appUI.borderRadius};
  padding: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  font-family: ${({theme:e})=>e.appUI.fontFamily.DEFAULT};
  font-size: ${({theme:e})=>e.appUI.fontSize.DEFAULT};
  color: ${({theme:e})=>e.appUI.fontColor.DEFAULT};
`,x=o.styled.div.withConfig({displayName:"HexPopover__PopoverItem",componentId:"sc-b8dbcf44-4"})`
  padding: 4px 8px;
  border-radius: ${({theme:e})=>e.appUI.borderRadius};
  cursor: pointer;
  white-space: nowrap;
  color: ${({$selected:e,theme:t})=>e?t.appUI.intent.PRIMARY:t.appUI.fontColor.DEFAULT};
  background-color: ${({$selected:e,theme:t})=>e?(0,r.rgba)(t.appUI.intent.PRIMARY,.1):"transparent"};
  transition: background-color
    ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`};

  &:hover {
    background-color: ${({theme:e})=>e.appUI.backgroundColor.MUTED};
  }
`,h=o.styled.div.withConfig({displayName:"HexDropdown__Wrapper",componentId:"sc-f0c297ef-0"})`
  flex: 1 1 auto;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  border-radius: ${({theme:e})=>e.appUI.borderRadius};
  font-size: ${({theme:e})=>e.appUI.fontSize.DEFAULT};
  padding: 0 8px;
  height: 24px;
  border: 1px solid ${({theme:e})=>e.appUI.borderColor.MUTED};
  font-family: ${({theme:e})=>e.appUI.fontFamily.DEFAULT};
  color: ${({theme:e})=>e.appUI.fontColor.DEFAULT};
  cursor: pointer;
  min-width: fit-content;
  background-color: ${({$isActive:e,theme:t})=>e?t.appUI.backgroundColor.MUTED:"transparent"};
  transition:
    border-color
      ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`},
    background-color
      ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`};

  &:hover {
    background-color: ${({theme:e})=>e.appUI.backgroundColor.MUTED};
  }

  svg {
    color: ${({theme:e})=>e.appUI.fontColor.MUTED};
  }

  ${({$variant:e})=>"minimal"===e&&o.css`
      border: none;
      color: ${({theme:e})=>e.appUI.fontColor.MUTED};
    `}
`,u=o.styled.div.withConfig({displayName:"HexDropdown__Inner",componentId:"sc-f0c297ef-1"})`
  display: flex;
  align-items: center;
  gap: 4px;
`;e.s(["HexDropdown",0,({icon:e,popoverAlign:o="left",popoverContent:r,text:a,variant:l="default"})=>{let[d,c]=i.useState(!1);return(0,t.jsx)(s,{align:o,content:r,isOpen:d,onOpenChange:c,children:(0,t.jsxs)(h,{$isActive:d,$variant:l,children:[(0,t.jsxs)(u,{children:[e&&e,(0,t.jsx)("span",{children:a})]}),(0,t.jsx)(n.ChevronDown,{})]})})}],294101)},547403,e=>{"use strict";var t=e.i(843476);e.s(["HexLogo",0,()=>(0,t.jsx)("svg",{fill:"none",viewBox:"0 0 52 20",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{clipRule:"evenodd",d:"M9 0V6.97333H7V0H0V5.65333V5.67333V12.3267V20H7V10H9V20H16V0H9ZM18 20H34V12H27V17H25V10H34V0H18V20ZM25 7V3H27V7H25ZM45 7V0H52V5L49 8.5L52 12V20H45V9.97333H43V20H36V12L39 8.5L36 5V0H43V7H45Z",fill:"currentColor",fillRule:"evenodd"})})])},975336,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(174080),n=e.i(193594),r=e.i(997053),a=e.i(637804);let s=i.createContext(null),l=({children:e})=>{let[n,r]=i.useState(null),[l,d]=i.useState(!1),[x,h]=i.useState(!1),u=i.useRef(null),f=i.useRef(null),[m,g]=i.useState(!1);i.useEffect(()=>{h(!0)},[]);let C=i.useCallback((e,t)=>{u.current&&(u.current.style.transform=`translate(calc(${e}px - 50%), ${t}px)`),g(!0)},[]),v=i.useCallback((e,t)=>{f.current&&(clearTimeout(f.current),f.current=null),C(t.x,t.y),r(e),d(!0)},[C]),y=i.useCallback(()=>{d(!1),f.current=setTimeout(()=>{r(null),g(!1)},150)},[]),j=i.useCallback(e=>{C(e.x,e.y)},[C]),b=i.useMemo(()=>({hide:y,show:v,updatePosition:j}),[y,v,j]);return(0,t.jsxs)(s.Provider,{value:b,children:[e,x&&o.createPortal((0,t.jsx)(c,{ref:u,$interactive:n?.interactive??!1,$isVisible:l&&null!==n&&m,onMouseEnter:()=>{n?.interactive&&(f.current&&(clearTimeout(f.current),f.current=null),d(!0))},onMouseLeave:()=>{n?.interactive&&y()},children:n&&(0,t.jsxs)(p,{$alignContent:n.alignContent,$size:n.size,children:[(0,t.jsx)("div",{children:n.content}),n.link&&(0,t.jsx)(a.SiteLink,{href:n.link,children:n.linkText||"Learn more"})]})}),document.body)]})},d=r.styled.div.withConfig({displayName:"HexTooltip__Wrapper",componentId:"sc-a2fa5832-0"})`
  position: relative;
  display: flex;
`,c=r.styled.div.withConfig({displayName:"HexTooltip__TooltipBox",componentId:"sc-a2fa5832-1"})`
  font-family: ${({theme:e})=>e.appUI.fontFamily.DEFAULT};
  font-size: ${({theme:e})=>e.appUI.fontSize.DEFAULT};
  line-height: 1.3;
  color: ${({theme:e})=>e.appUI.fontColor.DEFAULT};
  position: fixed;
  top: 0;
  left: 0;
  will-change: transform, opacity;
  pointer-events: ${({$interactive:e,$isVisible:t})=>e&&t?"auto":"none"};
  z-index: 9999;
  max-width: 220px;
  width: fit-content;
  opacity: ${({$isVisible:e})=>+!!e};
  visibility: ${({$isVisible:e})=>e?"visible":"hidden"};
  transition: opacity 150ms ease-in-out;
`,p=r.styled.div.withConfig({displayName:"HexTooltip__TooltipInner",componentId:"sc-a2fa5832-2"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  background-color: #1a1a1a;
  width: 100%;
  color: #fff;
  font-size: ${({theme:e})=>e.appUI.fontSize.DEFAULT};
  padding: ${({$size:e})=>"large"===e?"8px 10px":"4px 6px"};
  border-radius: ${({theme:e})=>e.appUI.borderRadius};
  white-space: normal;
  text-align: ${({$alignContent:e})=>e};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  div {
    text-wrap: balance;
  }

  a {
    display: block;
    color: ${({theme:e})=>e.palette.roseQuartz};
    text-decoration: none;
    min-height: 24px;
    padding: 4px 8px;
    background-color: ${({theme:e})=>(0,n.rgba)(e.palette.roseQuartz,.15)};
    border-radius: ${({theme:e})=>e.appUI.borderRadius};
    border: none;
    text-align: center;

    &:hover {
      background-color: ${({theme:e})=>(0,n.rgba)(e.palette.roseQuartz,.2)};
    }
  }
`;e.s(["HexTooltip",0,({children:e,content:o,style:n,link:r,linkText:a,followCursor:l=!1,interactive:c=!1,offset:p={x:12,y:12},renderAs:x="div",alignContent:h="center",size:u="default"})=>{let f=i.useRef(null),m=i.useContext(s),g=i.useCallback(()=>{if(f.current){let e=f.current.getBoundingClientRect();return{x:e.left+e.width/2,y:e.bottom}}return{x:0,y:0}},[]);return(0,t.jsx)(d,{ref:f,as:x,style:n,onMouseEnter:e=>{if(!m)return;let t=l?{x:e.clientX+p.x,y:e.clientY+p.y}:g();m.show({content:o,link:r,linkText:a,alignContent:h,size:u,interactive:c},t)},onMouseLeave:()=>{m?.hide()},onMouseMove:e=>{l&&m&&m.updatePosition({x:e.clientX+p.x,y:e.clientY+p.y})},children:e})},"HexTooltipProvider",0,({children:e})=>i.useContext(s)?(0,t.jsx)(t.Fragment,{children:e}):(0,t.jsx)(l,{children:e})])},775732,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(156996),n=e.i(572752);e.i(726497);var r=e.i(778888),a=e.i(975336),s=e.i(194547);let l=i.forwardRef(({accessibleLabel:e,children:l,className:d,dashedLines:c=!1,shadowStyle:p="default",windowTitle:x,scrollToAnchorId:h,inBrowserWindow:u=!1,windowTitlePosition:f="left"},m)=>{let g=i.useRef(null),C=function(...e){return i.useCallback(t=>{e.forEach(e=>{e&&("function"==typeof e?e(t):e.current=t)})},e)}(m,g),{isHovering:v}=(0,n.use8BitCursor)(g),y=!0===c?{top:!0,left:!0,right:!0,bottom:!0}:!1===c?{}:c,j=y.top||y.left||y.right||y.bottom?(0,t.jsxs)(s.DashedLines,{children:[y.top&&(0,t.jsx)(s.DashedLine,{"data-top":!0}),y.left&&(0,t.jsx)(s.DashedLine,{"data-left":!0}),y.right&&(0,t.jsx)(s.DashedLine,{"data-right":!0}),y.bottom&&(0,t.jsx)(s.DashedLine,{"data-bottom":!0})]}):null;return u?(0,t.jsx)(a.HexTooltipProvider,{children:(0,t.jsxs)(s.OuterBrowserWindow,{ref:C,$shadowStyle:p,"aria-label":e,className:d,"data-markdown-exclude":"","data-nosnippet":e?"":void 0,role:e?"group":void 0,children:[(0,t.jsxs)(s.BrowserWindowToolbar,{children:[(0,t.jsxs)(s.BrowserWindowButtons,{children:[(0,t.jsx)(s.TrafficLight,{}),(0,t.jsx)(s.TrafficLight,{}),(0,t.jsx)(s.TrafficLight,{})]}),(0,t.jsx)(s.BrowserWindowTitle,{className:r.textStyles.annotation,children:x}),(0,t.jsx)("div",{})]}),(0,t.jsx)(s.InnerBrowserWindow,{$shadowStyle:p,children:l}),j,(0,t.jsx)(o.EightBitCursor,{isHovering:v})]})}):(0,t.jsx)(a.HexTooltipProvider,{children:(0,t.jsxs)(s.Wrapper,{ref:C,$shadowStyle:p,"aria-label":e,className:d,"data-markdown-exclude":"","data-nosnippet":e?"":void 0,role:e?"group":void 0,children:[x?(0,t.jsx)(s.WindowTitle,{$canClick:!!h,$position:f,className:r.textStyles.annotation,onClick:()=>{if(h){let e=document.getElementById(h);e&&e.scrollIntoView({behavior:"smooth"})}},children:(0,t.jsx)("span",{children:x})}):null,j,l,(0,t.jsx)(o.EightBitCursor,{isHovering:v})]})})});l.displayName="InteractiveFeatureWrapper",e.s(["InteractiveFeatureWrapper",0,l])},60387,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(997053),n=e.i(430388),r=e.i(547403);let a=i.memo(function({title:e,actions:o,hasOptions:a,mainNav:u,breadCrumbTitle:f,className:m}){let g=!!o,C=!!u;return(0,t.jsxs)(s,{$columnCount:1+ +!!C+ +!!g,className:m,children:[(0,t.jsxs)(l,{children:[(0,t.jsx)(r.HexLogo,{}),(0,t.jsxs)(d,{children:[f?(0,t.jsxs)(p,{children:[(0,t.jsx)("span",{children:f}),(0,t.jsx)("span",{children:"/"})]}):null,(0,t.jsx)(c,{children:e})]}),a?(0,t.jsx)(n.ChevronDown,{}):null]}),u?(0,t.jsx)(x,{children:u}):null,o?(0,t.jsx)(h,{children:o.map((e,o)=>(0,t.jsx)(i.Fragment,{children:e},o))}):null]})}),s=o.styled.div.withConfig({displayName:"NavBar__Header",componentId:"sc-dee489d7-0"})`
  display: grid;
  grid-template-columns: ${({$columnCount:e})=>3===e?"minmax(0, 1fr) auto minmax(0, 1fr)":2===e?"minmax(0, 1fr) auto":"minmax(0, 1fr)"};
  flex: none;
  align-items: center;
  gap: 16px;
  padding: 6px;
  border-bottom: 1px solid ${({theme:e})=>e.appUI.borderColor.MUTED};
`,l=o.styled.div.withConfig({displayName:"NavBar__HexLogoWrapper",componentId:"sc-dee489d7-1"})`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-left: 9px;
  min-width: 0;

  svg {
    height: 12px;
    color: ${({theme:e})=>e.highlightColor};
    flex: none;
  }
`,d=o.styled.div.withConfig({displayName:"NavBar__Title",componentId:"sc-dee489d7-2"})`
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  line-height: 15px;
`,c=o.styled.span.withConfig({displayName:"NavBar__TitleText",componentId:"sc-dee489d7-3"})`
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,p=o.styled.span.withConfig({displayName:"NavBar__BreadCrumb",componentId:"sc-dee489d7-4"})`
  display: flex;
  align-items: center;
  gap: 4px;
  flex: none;
  color: ${({theme:e})=>e.appUI.fontColor.MUTED};
`,x=o.styled.div.withConfig({displayName:"NavBar__MainNav",componentId:"sc-dee489d7-5"})`
  justify-self: center;
`,h=o.styled.div.withConfig({displayName:"NavBar__Actions",componentId:"sc-dee489d7-6"})`
  display: flex;
  align-items: center;
  gap: 5px;
  flex: none;
  justify-self: end;
`;e.s(["NavBar",0,a])},967109,e=>{"use strict";var t=e.i(843476),i=e.i(637804),o=e.i(665419);let n=({featureName:e})=>(0,t.jsxs)("div",{children:["If you'd like to use ",e,","," ",(0,t.jsx)(i.SiteLink,{href:o.SIGNUP_LINK,rel:"noopener noreferrer",target:"_blank",children:"get started for free"})," ","or ",(0,t.jsx)(i.SiteLink,{href:o.INTERNAL_LINKS.RequestADemo,children:"request a demo."})]});e.s(["AGENT_NAMES",0,{PublishedApp:"Published App",Notebook:"Notebook",Threads:"Threads",Modeling:"Modeling"},"PRODUCT_NAMES",0,{One:"Teleportation pads",Two:"Quantum drives",Three:"Wormhole initiators",Four:"Dark matter lasers",Five:"Temporal stabilizers",Six:"Anti-gravity generators"},"REGION_NAMES",0,{CoreWorlds:"Core Worlds",MidRim:"Mid-Rim",OuterRim:"Outer Rim"},"REVENUE_DATA",0,{One:42.3,Two:38.7,Three:33.1,Four:28.6,Five:21.8,Six:11.2},"SECTOR_NAMES",0,{Defense:"Defense",Commercial:"Commercial",Research:"Research",Government:"Government"},"SOURCE_NAMES",0,{Hex:"Hex",Slack:"Slack",MCP:"MCP",CLI:"CLI"},"TOPIC_NAMES",0,{Q3RevenueByProductLine:"Revenue by Product Line",RegionalSalesBreakdown:"Sales Breakdown",DefenseSectorAnalysis:"Sector Analysis",QuarterlyGrowthTrends:"Quarterly Trends",ProductLineComparisons:"Product Comparisons",CommercialSectorRevenue:"Sector Revenue"},"USER_NAMES",0,{KiraVance:"Kira Vance",MarcusSol:"Marcus Sol",VegaChen:"Vega Chen",OrionReyes:"Orion Reyes",NovaOkafor:"Nova Okafor",CassMeridian:"Cass Meridian"},"WARNING_NAMES",0,{UserDoubt:"User doubt",MissingContext:"Missing context"},"getHexWebsiteMessageFromUserSubmission",0,e=>({content:(0,t.jsx)(n,{featureName:e}),type:"hex-website-message"})])},156996,572752,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(174080),n=e.i(997053),r=e.i(482847);let a='a[href],a,button,select,label[for],[role="button"],[role="link"],[role="tab"],[role="menuitem"],[role="option"],[data-clickable],[tabindex="0"],input[type="button"],input[type="submit"],input[type="reset"],input[type="checkbox"],input[type="radio"]',s=null;e.s(["EightBitCursor",0,function({isHovering:e}){let[l,d]=i.useState({x:0,y:0}),[c,p]=i.useState(!1),[x,h]=i.useState(!1),[u,f]=i.useState("default"),m=(0,n.useTheme)(),g=m.appUI.intent.PRIMARY,C=`${m.appUI.intent.PRIMARY}66`;return(i.useEffect(()=>{if(e)h(!0),requestAnimationFrame(()=>{requestAnimationFrame(()=>{p(!0)})});else{p(!1);let e=setTimeout(()=>{h(!1)},150);return()=>clearTimeout(e)}},[e]),i.useEffect(()=>{let e=e=>{d({x:e.clientX,y:e.clientY}),f(!function(e){if(!e)return!1;try{if(e.matches(a)||null!==e.closest(a))return!0;for(let t of function(){if(null!==s)return s;let e=[];try{for(let t of document.styleSheets)try{let i=t.cssRules||t.rules;if(!i)continue;for(let t of i)t instanceof CSSStyleRule&&"pointer"===t.style.cursor&&e.push(t.selectorText)}catch{}}catch{}return s=e,e}())try{if(e.matches(t)||null!==e.closest(t))return!0}catch{}}catch{}return!1}(e.target)?"default":"pointer")};return window.addEventListener("mousemove",e),()=>window.removeEventListener("mousemove",e)},[]),!x||"u"<typeof document)?null:o.createPortal((0,t.jsx)("div",{className:"eight-bit-cursor",style:{position:"fixed",left:l.x,top:l.y,pointerEvents:"none",zIndex:99999,transform:"translate(-1px, -1px)",opacity:+!!c,transition:"opacity 150ms ease-out"},children:"pointer"===u?(0,t.jsx)(r.Cursor8BitPointer,{outlineColor:g,shadowColor:C}):(0,t.jsx)(r.Cursor8BitArrow,{outlineColor:g,shadowColor:C})}),document.body)}],156996),e.s(["use8BitCursor",0,function(e){let[t,o]=i.useState(!1);return i.useEffect(()=>{let t=e.current;if(!t)return;let i=()=>o(!0),n=()=>o(!1);return t.addEventListener("mouseenter",i),t.addEventListener("mouseleave",n),()=>{t.removeEventListener("mouseenter",i),t.removeEventListener("mouseleave",n)}},[e]),{isHovering:t}}],572752)}]);