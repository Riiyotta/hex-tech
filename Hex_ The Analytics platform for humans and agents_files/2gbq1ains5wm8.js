(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,736173,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(997053),n=e.i(238108),r=e.i(430388),a=e.i(164485),s=e.i(585579),l=e.i(392944),d=e.i(775732),c=e.i(60387),p=e.i(1600),u=e.i(193594);let m=i.memo(function({fileType:e,selected:o,state:a,fileName:s,isOpen:l,location:d,onClick:c}){let p=i.useRef(null),u=i.useRef(!1);i.useEffect(()=>{if(!u.current){u.current=!0;return}let e=p.current,t=e?.parentElement;if(o&&"main"===d&&e&&t){let i=e.getBoundingClientRect(),o=t.getBoundingClientRect();i.left<o.left?t.scrollTo({behavior:"smooth",left:t.scrollLeft-(o.left-i.left)}):i.right>o.right&&t.scrollTo({behavior:"smooth",left:t.scrollLeft+(i.right-o.right)})}},[o,d]);let m=i.useMemo(()=>{switch(a){case"modified":return"M";case"added":return"A";default:return null}},[a]);return(0,t.jsxs)(g,{ref:p,$isOpen:l,$location:d,$selected:o,$state:a,onClick:c,children:[(0,t.jsxs)(x,{children:[(0,t.jsx)(b,{children:s}),(0,t.jsxs)(y,{children:[".",e]})]}),(0,t.jsx)(v,{children:m}),"main"===d&&(0,t.jsx)(n.HexButton,{icon:(0,t.jsx)(r.CloseSmallIcon,{}),variant:"minimal"})]})}),h=o.css`
  height: 28px;
  border-radius: ${({theme:e})=>e.appUI.borderRadius};
  padding: 0 8px;

  &:hover {
    background-color: ${({theme:e})=>e.appUI.backgroundColor.MUTED};
  }

  ${({$state:e})=>"modified"===e&&o.css`
      color: ${({theme:e})=>e.appUI.intent.WARNING};

      &:hover {
        background-color: ${({theme:e})=>(0,u.rgba)(e.appUI.intent.WARNING,.06)};
      }
    `}

  ${({$state:e})=>"added"===e&&o.css`
      color: ${({theme:e})=>e.appUI.intent.SUCCESS};

      &:hover {
        background-color: ${({theme:e})=>(0,u.rgba)(e.appUI.intent.SUCCESS,.06)};
      }
    `}

  ${({$selected:e})=>e&&o.css`
      color: ${({theme:e})=>e.appUI.intent.PRIMARY};
      background-color: ${({theme:e})=>(0,u.rgba)(e.appUI.intent.PRIMARY,.06)};

      &:hover {
        background-color: ${({theme:e})=>(0,u.rgba)(e.appUI.intent.PRIMARY,.08)};
      }
    `}
`,f=o.css`
  height: 32px;
  background-color: ${({theme:e})=>e.appUI.backgroundColor.MUTED};
  border-right: 1px solid ${({theme:e})=>e.appUI.borderColor.MUTED};
  padding: 0 2px 0 12px;

  &:last-child {
    border-right: none;
  }

  ${({$selected:e})=>e&&o.css`
      color: ${({theme:e})=>e.appUI.fontColor.DEFAULT};
      background-color: ${({theme:e})=>e.appUI.backgroundColor.DEFAULT};
    `}

  ${({$state:e})=>"modified"===e&&o.css`
      color: ${({theme:e})=>e.appUI.intent.WARNING};
    `}

  ${({$state:e})=>"added"===e&&o.css`
      color: ${({theme:e})=>e.appUI.intent.SUCCESS};
    `}
`,g=o.styled.div.withConfig({displayName:"TabItem__Wrapper",componentId:"sc-62895c44-0"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  flex: 1 1 auto;
  color: ${({theme:e})=>e.appUI.fontColor.DEFAULT};
  cursor: pointer;
  transition: background-color
    ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`};

  ${({$location:e})=>"sidebar"===e&&o.css`
      ${h}
    `}

  ${({$location:e})=>"main"===e&&o.css`
      ${f}
    `}
`,x=o.styled.div.withConfig({displayName:"TabItem__FileText",componentId:"sc-62895c44-1"})`
  display: flex;
  white-space: nowrap;
`,b=o.styled.div.withConfig({displayName:"TabItem__FileName",componentId:"sc-62895c44-2"})``,y=o.styled.div.withConfig({displayName:"TabItem__FileType",componentId:"sc-62895c44-3"})`
  opacity: 0.4;
`,v=o.styled.div.withConfig({displayName:"TabItem__State",componentId:"sc-62895c44-4"})`
  font-size: ${({theme:e})=>e.appUI.fontSize.SMALL};
  font-weight: 500;
`,w=[{fileName:"galactic_sales",fileType:"yml",location:"sidebar",selected:!0},{fileName:"product_lines",fileType:"yml",location:"sidebar",state:"modified"},{fileName:"regions",fileType:"yml",location:"sidebar"},{fileName:"customer_sectors",fileType:"yml",location:"sidebar"},{fileName:"rules",fileType:"yml",location:"sidebar",state:"modified"}],_={galactic_sales:`# Semantic model for NexaCorp's galactic sales data.
# This is the top-level model the agent queries by default.

model: galactic_sales

source:
  # Warehouse table backing this semantic model
  table: galactic_sales.revenue
  primary_key: revenue_id

dimensions:
  # Logical dimensions exposed to the agent
  - product_line        # defined in product_lines.yml
  - region              # defined in regions.yml
  - customer_sector     # defined in customer_sectors.yml
  - quarter

metrics:
  total_revenue_usd:
    label: Total revenue
    type: sum
    sql: revenue_usd
    format: currency

  avg_revenue_per_deal:
    label: Avg revenue per deal
    type: derived
    sql: total_revenue_usd / count_distinct(revenue_id)
    format: currency

  qoq_revenue_change:
    label: QoQ revenue change
    type: derived
    sql: total_revenue_usd.this_quarter - total_revenue_usd.prev_quarter
    format: currency`,product_lines:`# Product line dimension used across NexaCorp revenue analysis.

dimension: product_line

values:
  - id: teleportation_pads
    label: Teleportation pads
    description: Pad-based teleportation infrastructure for point-to-point travel.

  - id: quantum_drives
    label: Quantum drives
    description: High-throughput propulsion modules for long-haul routes.

  - id: wormhole_initiators
    label: Wormhole initiators
    description: Gateways that open temporary wormholes for travel.

  - id: dark_matter_lasers
    label: Dark matter lasers
    description: Defense-grade beam systems for perimeter security.

  - id: temporal_stabilizers
    label: Temporal stabilizers
    description: Devices that reduce time drift in high-velocity travel.

  - id: anti_gravity_generators
    label: Anti-gravity generators
    description: Gravity control units for low-orbit and in-facility use.

groups:
  # Helpful rollups the agent can reference, e.g. "core products"
  - id: core_infrastructure
    label: Core infrastructure products
    includes:
      - teleportation_pads
      - quantum_drives
      - wormhole_initiators`,regions:`# Region dimension for NexaCorp's galactic footprint.

dimension: region

values:
  - id: core_worlds
    label: Core Worlds
    description: High-density, high-ARPU systems near NexaCorp HQ.

  - id: mid_rim
    label: Mid-Rim
    description: Growth markets with expanding infrastructure footprints.

  - id: outer_rim
    label: Outer Rim
    description: Frontier systems with volatile but strategic demand.

hierarchies:
  # Simple hierarchy so the agent can roll up by galaxy_cluster or region
  - id: territory
    levels:
      - galaxy_cluster
      - region

mappings:
  galaxy_cluster:
    core_worlds: Inner Spiral
    mid_rim: Outer Spiral
    outer_rim: Frontier Band`,customer_sectors:`# Customer sector dimension. Synonyms help the agent resolve user language.

dimension: customer_sector

values:
  - id: defense
    label: Defense
    synonyms: [military, security, "defense ministry"]

  - id: commercial
    label: Commercial
    synonyms: [enterprise, smb, retailer, logistics]

  - id: research
    label: Research
    synonyms: [lab, university, institute, "r&d"]

  - id: government
    label: Government
    synonyms: ["public sector", council, agency]

metadata:
  # Optional hints the agent can use when ranking answers
  default_high_value_sector: defense`,rules:`# Rules that govern how the agent uses the Galactic Sales semantic model.

rules:
  prefer_semantic_model_for_revenue_questions:
    description: >
      If the user asks about revenue, sales, or Q3 performance,
      route to the galactic_sales model instead of raw tables.
    triggers:
      includes_any:
        - "revenue"
        - "sales"
        - "Q3"
        - "quarter"
    action:
      use_model: galactic_sales

  flag_high_risk_defense_queries:
    description: >
      Flag conversations that mention weapons or combat scenarios
      when the customer sector is Defense.
    applies_to_dimension: customer_sector
    applies_to_value: defense
    match_phrases:
      - "weapons testing"
      - "combat readiness"
      - "fleet engagement"
    action:
      add_tag: high_risk_usage`},I=i.memo(function({dashedLines:e}){let[o,l]=i.useState(w),d=i.useMemo(()=>_[o.find(e=>e.selected)?.fileName]||"",[o]),u=i.useCallback(e=>{l(t=>t.map(t=>({...t,selected:t.fileName===e})))},[]);return(0,t.jsxs)(C,{accessibleLabel:"Product demonstration of the Hex semantic model workbench",dashedLines:e,windowTitle:"Semantic Model Workbench",windowTitlePosition:"right",children:[(0,t.jsx)(c.NavBar,{actions:[s.EducationalButtons.PublishWorkbench],breadCrumbTitle:"Semantic Models",title:"Galactic Sales Model"}),(0,t.jsxs)(j,{children:[(0,t.jsx)(p.TabbedSidebar,{tabItems:[{icon:(0,t.jsx)(r.FilesIcon,{}),tooltipContent:"Files"},{icon:(0,t.jsx)(r.DataSourcesIcon,{}),tooltipContent:"Data browser"},{icon:(0,t.jsx)(r.HistoryIcon,{}),tooltipContent:"History & versions"}]}),(0,t.jsxs)(k,{children:[(0,t.jsxs)($,{children:[(0,t.jsx)(N,{children:"Files"}),(0,t.jsx)(n.HexButton,{icon:(0,t.jsx)(r.PlusIcon,{}),variant:"minimal"})]}),(0,t.jsx)(S,{children:o.map(e=>(0,t.jsx)(m,{...e,location:"sidebar",onClick:()=>u(e.fileName)},e.fileName))})]}),(0,t.jsxs)(U,{children:[(0,t.jsx)(T,{children:o.map(e=>(0,t.jsx)(m,{...e,location:"main",onClick:()=>u(e.fileName)},e.fileName))}),(0,t.jsx)(A,{children:(0,t.jsx)(a.CodeWindow,{code:d,codeType:"yaml",streamSpeed:0,streaming:!1})})]})]})]})}),C=(0,o.styled)(d.InteractiveFeatureWrapper).withConfig({displayName:"InteractiveFeatureCSWorkbench__Wrapper",componentId:"sc-a9557e4c-0"})``,j=o.styled.div.withConfig({displayName:"InteractiveFeatureCSWorkbench__Inner",componentId:"sc-a9557e4c-1"})`
  display: flex;
  flex: 1 1 auto;
  min-height: 0;
`,k=o.styled.div.withConfig({displayName:"InteractiveFeatureCSWorkbench__Sidebar",componentId:"sc-a9557e4c-2"})`
  display: flex;
  flex-direction: column;
  width: 180px;
  flex: none;
  border-right: 1px solid ${({theme:e})=>e.appUI.borderColor.MUTED};
  border-left: 1px solid ${({theme:e})=>e.appUI.borderColor.MUTED};
`,$=o.styled.div.withConfig({displayName:"InteractiveFeatureCSWorkbench__SidebarHeader",componentId:"sc-a9557e4c-3"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 4px 4px 12px;
  border-bottom: 1px solid ${({theme:e})=>e.appUI.borderColor.MUTED};
`,N=o.styled.div.withConfig({displayName:"InteractiveFeatureCSWorkbench__SidebarTitle",componentId:"sc-a9557e4c-4"})`
  font-weight: 600;
`,S=o.styled.div.withConfig({displayName:"InteractiveFeatureCSWorkbench__SidebarContent",componentId:"sc-a9557e4c-5"})`
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
`,U=o.styled.div.withConfig({displayName:"InteractiveFeatureCSWorkbench__MainContent",componentId:"sc-a9557e4c-6"})`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-width: 0;
`,T=o.styled.div.withConfig({displayName:"InteractiveFeatureCSWorkbench__TabNav",componentId:"sc-a9557e4c-7"})`
  display: flex;
  border-bottom: 1px solid ${({theme:e})=>e.appUI.borderColor.MUTED};
  overflow-x: auto;
  flex: none;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`,A=(0,o.styled)(l.IntentScrollable2).withConfig({displayName:"InteractiveFeatureCSWorkbench__CodeWrapper",componentId:"sc-a9557e4c-8"})`
  display: flex;
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
  overflow-anchor: none;
`;e.s(["InteractiveFeatureCSWorkbench",0,I],736173)},955191,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(997053),n=e.i(209985),r=e.i(967109),a=e.i(392944),s=e.i(775732);let l="#1C1B1C",d="#7B7A7B",c="#135999",p="14px",u="12px",m="#ADADAE",h="#D7D7D7",f="#FFFFFF",g="#F8F8F8",x=()=>(0,t.jsx)("svg",{fill:"none",height:"4",viewBox:"0 0 6 4",width:"6",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M3.29518 3.37558C3.09848 3.57999 2.77131 3.57999 2.57461 3.37558L0.141182 0.846688C-0.164478 0.529036 0.0606402 -1.14078e-07 0.50147 -7.70813e-08L5.36832 3.31373e-07C5.80915 3.6837e-07 6.03427 0.529036 5.72861 0.846688L3.29518 3.37558Z",fill:"currentColor"})});var b=e.i(657688),y=e.i(193594);let v={src:e.i(948008).default,width:64,height:64,blurWidth:8,blurHeight:8,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA7UlEQVR42kWQS0sCYRiF598FJc3kSIsoKNtUBJUMJUQWhRINRa2KIGoVBC1CKAraB9GNrPE2KjNeBvxc6C949B0X7g7nfV4452jpg5QV1N12VzVoeWUatSKiB55K76csTURX1Xl9zhKfnyVmGrw8PSCePGq9ThPVqmJtrHJ2uMNSfIbFhTkCv4zcQqBWyrG9tc7Nhc31uc1mYoV87mMElJxvpmM6t5c2d1cnmEaE36+3EVD4+0SfjJBMLLObXGNifIz/n/chIEEklBk1OMrscXqcITql85i9D5toUsWrOMqv5MNgge8i2nOdtkzQB0TiwgEtcRlQAAAAAElFTkSuQmCC"};var w=e.i(547403);let _=i.memo(function({attachment:e,showAvatar:i=!1,message:o,name:n,reaction:r,timestamp:a,buttonText:s,fromHex:l=!1}){return(0,t.jsxs)(I,{children:[(0,t.jsx)(C,{$fromHex:l,$visible:i,children:l?(0,t.jsx)(w.HexLogo,{}):(0,t.jsx)(b.default,{alt:"Avatar",height:32,src:v,width:32})}),(0,t.jsxs)(j,{children:[n&&(0,t.jsxs)(k,{children:[(0,t.jsx)($,{children:n}),a&&(0,t.jsx)(N,{children:a})]}),(0,t.jsx)(S,{children:o}),r&&(0,t.jsxs)(U,{children:[r," 1"]}),s&&(0,t.jsx)(T,{children:s}),e&&(0,t.jsxs)(A,{children:[(0,t.jsxs)(E,{children:[e.name," ",(0,t.jsx)(F,{children:(0,t.jsx)(x,{})})]}),(0,t.jsx)(M,{children:e.file})]})]})]})}),I=o.styled.div.withConfig({displayName:"SlackMessage__Wrapper",componentId:"sc-7a55c669-0"})`
  font-family: 'Lato', sans-serif;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  line-height: 1.4;
  padding: 4px 16px;

  &:hover {
    background-color: ${g};
  }
`,C=o.styled.div.withConfig({displayName:"SlackMessage__Avatar",componentId:"sc-7a55c669-1"})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  flex: none;
  opacity: ${({$visible:e})=>e?"1":"0"};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${({$fromHex:e})=>e&&o.css`
      background-color: #01011b;

      svg {
        height: 8px;
        color: #f5c0c0;
      }
    `}
`,j=o.styled.div.withConfig({displayName:"SlackMessage__Contents",componentId:"sc-7a55c669-2"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
`,k=o.styled.div.withConfig({displayName:"SlackMessage__Metadata",componentId:"sc-7a55c669-3"})`
  display: flex;
  align-items: center;
  gap: 7px;
`,$=o.styled.div.withConfig({displayName:"SlackMessage__Name",componentId:"sc-7a55c669-4"})`
  font-weight: 700;
  font-size: ${p};
  color: ${l};
  letter-spacing: -0.2px;
`,N=o.styled.div.withConfig({displayName:"SlackMessage__Timestamp",componentId:"sc-7a55c669-5"})`
  font-size: ${u};
  color: ${d};
`,S=o.styled.div.withConfig({displayName:"SlackMessage__Message",componentId:"sc-7a55c669-6"})`
  font-size: ${u};
  color: ${l};
  padding-bottom: 3px;
  line-height: 1.4;

  span {
    color: ${c};
    padding: 1px 2px 2px;
    background-color: ${(0,y.rgba)(c,.1)};
    border-radius: 2px;
  }

  h2 {
    font-size: ${p};
    font-weight: 700;
    letter-spacing: -0.2px;
    margin-bottom: 5px;
    padding-top: 5px;
  }

  strong {
    font-weight: 600;
  }

  p {
    margin-bottom: 8px;
    line-height: inherit;
  }

  ul {
    margin-bottom: 8px;
    padding-left: 15px;
    list-style-type: disc;
    line-height: inherit;

    li {
      line-height: inherit;
    }
  }

  *:last-child {
    margin-bottom: 0;
  }
`,U=o.styled.div.withConfig({displayName:"SlackMessage__Reaction",componentId:"sc-7a55c669-7"})`
  font-size: ${u};
  color: ${l};
  background-color: #f0f0f0;
  border-radius: 20px;
  height: 22px;
  display: flex;
  align-items: center;
  padding: 0 7px;
  gap: 2px;
`,T=o.styled.div.withConfig({displayName:"SlackMessage__Button",componentId:"sc-7a55c669-8"})`
  font-size: ${u};
  color: ${l};
  border: 1px solid ${m};
  font-weight: 700;
  border-radius: 5px;
  height: 24px;
  line-height: 24px;
  display: flex;
  align-items: center;
  padding: 0 7px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${g};
    box-shadow:
      0 1px 1.5px 0 rgba(16, 22, 26, 0.1),
      0 0.5px 3px 0 rgba(16, 22, 26, 0.08);
  }
`,A=o.styled.div.withConfig({displayName:"SlackMessage__Attachment",componentId:"sc-7a55c669-9"})`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,E=o.styled.div.withConfig({displayName:"SlackMessage__AttachmentName",componentId:"sc-7a55c669-10"})`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: ${u};
  color: ${d};
`,F=o.styled.div.withConfig({displayName:"SlackMessage__AttachmentCaretIcon",componentId:"sc-7a55c669-11"})`
  display: flex;
  padding-top: 3px;
`,M=o.styled.div.withConfig({displayName:"SlackMessage__AttachmentFile",componentId:"sc-7a55c669-12"})`
  border: 1px solid ${h};
  background-color: ${f};
  border-radius: 5px;
`,D=i.memo(function({dashedLines:e,skipFontPreload:i=!1}){return(0,t.jsxs)(t.Fragment,{children:[i?null:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("link",{href:"https://fonts.googleapis.com",rel:"preconnect"}),(0,t.jsx)("link",{crossOrigin:"anonymous",href:"https://fonts.gstatic.com",rel:"preconnect"}),(0,t.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap",precedence:"slack-font",rel:"stylesheet"})]}),(0,t.jsx)(R,{accessibleLabel:"Product demonstration of Hex answering a question in Slack",dashedLines:e,inBrowserWindow:!0,windowTitle:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(H,{})," Slack"]}),children:(0,t.jsxs)(L,{children:[(0,t.jsx)(_,{message:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:"@Hex"})," get me NexaCorp's Q3 sales by product line"]}),name:"Julia",showAvatar:!0,timestamp:"4 min ago"}),(0,t.jsx)(W,{children:"3 replies"}),(0,t.jsx)(_,{buttonText:"View in Hex",fromHex:!0,message:"Your question was sent to Hex! The answer will be posted here, but you can also follow along in Hex.",name:"Hex",showAvatar:!0,timestamp:"4 min ago"}),(0,t.jsx)(_,{fromHex:!0,message:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h2",{children:"NexaCorp Q3 revenue trends by product line"}),(0,t.jsx)("p",{children:"Here's what I found in the “nexacorp_sales” tables (powered by the Galactic Sales semantic model):"}),(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[r.PRODUCT_NAMES.One," —"," ",(0,t.jsxs)("strong",{children:["$",r.REVENUE_DATA.One,"M"]})]}),(0,t.jsxs)("li",{children:[r.PRODUCT_NAMES.Two," —"," ",(0,t.jsxs)("strong",{children:["$",r.REVENUE_DATA.Two,"M"]})]}),(0,t.jsxs)("li",{children:[r.PRODUCT_NAMES.Three," —"," ",(0,t.jsxs)("strong",{children:["$",r.REVENUE_DATA.Three,"M"]})]}),(0,t.jsxs)("li",{children:[r.PRODUCT_NAMES.Four," —"," ",(0,t.jsxs)("strong",{children:["$",r.REVENUE_DATA.Four,"M"]})]}),(0,t.jsxs)("li",{children:[r.PRODUCT_NAMES.Five," —"," ",(0,t.jsxs)("strong",{children:["$",r.REVENUE_DATA.Five,"M"]})]}),(0,t.jsxs)("li",{children:[r.PRODUCT_NAMES.Six," —"," ",(0,t.jsxs)("strong",{children:["$",r.REVENUE_DATA.Six,"M"]})]})]})]})}),(0,t.jsx)(_,{attachment:{name:"Revenue Trends by Product Line (Q1-Q3) (56 kB)",file:(0,t.jsx)(B,{children:(0,t.jsx)(n.ChartRevenueByProductLine,{})})},fromHex:!0,message:null,showAvatar:!1}),(0,t.jsx)(_,{fromHex:!0,message:"Let me know if you'd like to break this down by region or customer sector.",showAvatar:!1})]})})]})}),R=(0,o.styled)(s.InteractiveFeatureWrapper).withConfig({displayName:"InteractiveFeatureSlack__Wrapper",componentId:"sc-22abb7e5-0"})``,L=(0,o.styled)(a.IntentScrollable2).withConfig({displayName:"InteractiveFeatureSlack__Content",componentId:"sc-22abb7e5-1"})`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  border-radius: 6px;
  padding: 12px 0;
`,W=o.styled.div.withConfig({displayName:"InteractiveFeatureSlack__Separator",componentId:"sc-22abb7e5-2"})`
  display: flex;
  align-items: center;
  font-size: ${u};
  color: ${d};
  padding: 8px 16px;
  gap: 8px;

  &::after {
    content: '';
    flex: 1 1 auto;
    height: 1px;
    background-color: ${h};
  }
`,B=o.styled.div.withConfig({displayName:"InteractiveFeatureSlack__ChartWrapper",componentId:"sc-22abb7e5-3"})`
  padding: 10px 10px 5px;
`,H=e=>(0,t.jsx)("svg",{fill:"none",height:"14",viewBox:"0 0 14 14",width:"14",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,t.jsx)("path",{d:"M5.42383 7.3252C6.12121 7.32527 6.68455 7.88855 6.68457 8.58594V11.7393C6.68434 12.4365 6.12107 12.9999 5.42383 13C4.72652 13 4.16234 12.4365 4.16211 11.7393V8.58594C4.16213 7.8885 4.72639 7.3252 5.42383 7.3252ZM8.58594 10.4775C9.28336 10.4776 9.84668 11.0418 9.84668 11.7393C9.84644 12.4365 9.28321 13 8.58594 13C7.88863 13 7.32543 12.4365 7.3252 11.7393V10.4775H8.58594ZM3.53223 8.58594C3.53223 9.28339 2.96796 9.84668 2.27051 9.84668C1.57321 9.8465 1.00977 9.28327 1.00977 8.58594C1.00978 7.88862 1.57322 7.32538 2.27051 7.3252H3.53223V8.58594ZM11.748 7.3252C12.4455 7.3252 13.0097 7.8885 13.0098 8.58594C13.0098 9.28339 12.4455 9.84668 11.748 9.84668H8.58594C7.88849 9.84668 7.3252 9.28339 7.3252 8.58594C7.32521 7.8885 7.8885 7.3252 8.58594 7.3252H11.748ZM5.42383 4.16211C6.12115 4.16226 6.68457 4.72647 6.68457 5.42383C6.68442 6.12105 6.12105 6.68442 5.42383 6.68457H2.26074C1.56357 6.68436 1.00015 6.12101 1 5.42383C1 4.72651 1.56348 4.16232 2.26074 4.16211H5.42383ZM8.58594 1C9.28323 1.00003 9.84647 1.5635 9.84668 2.26074V5.42383C9.84653 6.12113 9.28326 6.68454 8.58594 6.68457C7.88858 6.68457 7.32535 6.12115 7.3252 5.42383V2.26074C7.32541 1.56348 7.88862 1 8.58594 1ZM11.7383 4.16211C12.4357 4.16211 13 4.72638 13 5.42383C12.9998 6.12115 12.4356 6.68457 11.7383 6.68457H10.4775V5.42383C10.4775 4.72653 11.041 4.16235 11.7383 4.16211ZM5.42383 1C6.12101 1.00015 6.68436 1.56357 6.68457 2.26074V3.52246H5.42383C4.72638 3.52246 4.16211 2.95819 4.16211 2.26074C4.16232 1.56348 4.72651 1 5.42383 1Z",fill:"currentColor"})});e.s(["InteractiveFeatureSlack",0,D],955191)},948008,e=>{e.q("/_next/static/media/slack-avatar-julia.2thz42wep-a-s.png")},164485,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(870207),n=e.i(997053);e.i(910017),e.i(500925),e.i(271971);let r=i.memo(function({codeType:e,code:n,streaming:r=!1,streamSpeed:l=2}){let[d,c]=i.useState(r?"":n),[p,u]=i.useState("");return i.useEffect(()=>{if(!r)return void c(n);let e=0;c("");let t=setInterval(()=>{(e+=l)>=n.length?(c(n),clearInterval(t)):c(n.slice(0,e))},16);return()=>clearInterval(t)},[n,r,l]),i.useEffect(()=>{if("python"===e||"sql"===e||"yaml"===e)try{let t=o.default.languages[e];if(t){let i=o.default.highlight(d,t,e);u(i)}else u(d)}catch{u(d)}else u(d)},[d,e]),(0,t.jsx)(a,{children:(0,t.jsx)(s,{dangerouslySetInnerHTML:{__html:p}})})}),a=n.styled.div.withConfig({displayName:"CodeWindow__CodeWrapper",componentId:"sc-7e5408f1-0"})`
  display: flex;
  height: fit-content;
  padding: 12px;
`,s=n.styled.pre.withConfig({displayName:"CodeWindow__CodeBlock",componentId:"sc-7e5408f1-1"})`
  margin: 0;
  padding: 0;
  font-family: ${({theme:e})=>e.appUI.fontFamily.MONO};
  font-size: 11px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-word;

  /* Prism.js syntax highlighting styles */
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #6a737d;
  }

  .token.punctuation {
    color: #5e6687;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #005cc5;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #22863a;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: #000000;
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: #2458b3;
  }

  .token.function,
  .token.class-name {
    color: #6f42c1;
  }

  .token.regex,
  .token.important,
  .token.variable {
    color: #e36209;
  }
`;e.s(["CodeWindow",0,r])},392944,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(193594),n=e.i(997053),r=e.i(174080),a=e.i(482847);function s({isHovering:e,isUnlocked:l,progress:d}){let[c,p]=i.useState({x:0,y:0}),[u,m]=i.useState(!1),[h,f]=i.useState(!1),g=e&&!l,x=(0,n.useTheme)().appUI.intent.PRIMARY,b=(0,o.rgba)(x,.25);return(i.useEffect(()=>{if(g)f(!0),requestAnimationFrame(()=>{requestAnimationFrame(()=>{m(!0)})});else{m(!1);let e=setTimeout(()=>{f(!1)},150);return()=>clearTimeout(e)}},[g]),i.useEffect(()=>{let e=e=>{p({x:e.clientX,y:e.clientY})};return window.addEventListener("mousemove",e),()=>window.removeEventListener("mousemove",e)},[]),!h||"u"<typeof document)?null:r.createPortal((0,t.jsx)("div",{className:"scroll-unlock-indicator",style:{position:"fixed",left:c.x,top:c.y,pointerEvents:"none",zIndex:1e5,transform:"translate(-1px, -1px)",opacity:+!!u,transition:"opacity 150ms ease-out"},children:(0,t.jsx)(a.UnlockProgressIndicator,{filledColor:x,progress:d,unfilledColor:b})}),document.body)}let l=i.forwardRef(({children:e,className:i,intentScroll:o=!0,overflowX:n="hidden"},r)=>o?(0,t.jsx)(d,{ref:r,className:i,overflowX:n,children:e}):(0,t.jsx)(c,{children:(0,t.jsx)(u,{ref:r,$overflowX:n,className:i,children:e})}));l.displayName="IntentScrollable2";let d=i.forwardRef(({children:e,className:o,overflowX:n="hidden"},r)=>{let a=i.useRef(null),l=r||a,{isHovering:d,isPulsing:m,isUnlocked:h,progress:f}=function(e){let{unlockTimeMs:t=800,maxVelocity:o=15}=(void 0)??{},[n,r]=i.useState(!1),[a,s]=i.useState(0),[l,d]=i.useState(!1),[c,p]=i.useState(!1),u=i.useRef(!1),m=i.useRef(null),h=i.useRef(0),f=i.useRef([]),g=i.useRef({x:0,y:0,time:0}),x=i.useRef(!1),b=i.useRef(!1),y=i.useRef([]),v=i.useRef({y:0,time:0}),w=i.useRef([]),_=i.useRef(0),I=i.useRef(!1);return i.useEffect(()=>{x.current=n},[n]),i.useEffect(()=>{let i=e.current;if(!i)return;let n=e=>{b.current=!0,window.scrollBy({top:e,behavior:"instant"}),requestAnimationFrame(()=>{b.current=!1})},a=()=>{m.current&&(clearInterval(m.current),m.current=null)},l=()=>{u.current=!0,d(!0);let e=Date.now();g.current={x:0,y:0,time:e},v.current={y:window.scrollY,time:e},_.current=0,f.current=[],y.current=[],w.current=[],I.current=!1,(()=>{if(m.current)return;h.current=0;let e=Date.now();m.current=window.setInterval(()=>{let i,n,l,d=Date.now(),c=d-e;e=d;let u=Math.max((i=f.current,Date.now()-g.current.time>100?0:0===i.length?999:i.reduce((e,t)=>e+t,0)/i.length),(n=y.current,Date.now()-v.current.time>150||0===n.length?0:n.reduce((e,t)=>e+t,0)/n.length),(l=w.current,Date.now()-_.current>150||0===l.length?0:l.reduce((e,t)=>e+t,0)/l.length))<o;u&&!I.current&&(I.current=!0),u&&I.current&&(h.current+=c/t);let m=Math.min(1,h.current);s(m),m>=1&&(a(),r(!0),x.current=!0,p(!0),setTimeout(()=>{p(!1)},400))},16)})()},c=()=>{u.current=!1,a(),r(!1),s(0),d(!1),x.current=!1,h.current=0,f.current=[],y.current=[],w.current=[],I.current=!1},C=e=>{if(!u.current)return;let t=Date.now(),i=g.current,o=t-i.time;if(o>16){let n=e.clientX-i.x,r=e.clientY-i.y,a=Math.sqrt(n*n+r*r);f.current.push(a/o*1e3),f.current.length>5&&f.current.shift(),g.current={x:e.clientX,y:e.clientY,time:t}}},j=e=>{if(!u.current)return;e.preventDefault(),e.stopPropagation();let t=e.deltaY,o=Date.now(),r=o-_.current;if(r>0){let e=Math.abs(t)/Math.max(r,16)*1e3;w.current.push(e),w.current.length>5&&w.current.shift()}if(_.current=o,!x.current)return void n(t);let{clientHeight:a,clientWidth:s,scrollHeight:l,scrollLeft:d,scrollTop:c,scrollWidth:p}=i,m=e.deltaX;(m>0&&d<p-s-1||m<0&&d>0)&&(i.scrollLeft+=m);let h=t>0,f=t<0;h&&c<l-a-1||f&&c>0?i.scrollTop+=t:0!==t&&n(t)},k=()=>{if(b.current)return;let e=Date.now(),t=window.scrollY,i=v.current,o=e-i.time;if(o>0){let e=Math.abs(t-i.y);y.current.push(e/o*1e3),y.current.length>5&&y.current.shift()}v.current={y:t,time:e}};return i.addEventListener("mouseenter",l),i.addEventListener("mouseleave",c),i.addEventListener("mousemove",C),i.addEventListener("wheel",j,{passive:!1}),window.addEventListener("scroll",k,{passive:!0}),()=>{a(),i.removeEventListener("mouseenter",l),i.removeEventListener("mouseleave",c),i.removeEventListener("mousemove",C),i.removeEventListener("wheel",j),window.removeEventListener("scroll",k)}},[e,t,o]),{isHovering:l,isPulsing:c,isUnlocked:n,progress:a}}(l);return(0,t.jsxs)(c,{children:[(0,t.jsx)(u,{ref:l,$overflowX:n,className:o,children:e}),(0,t.jsx)(p,{$isPulsing:m}),(0,t.jsx)(s,{isHovering:d,isUnlocked:h,progress:f})]})});d.displayName="IntentScrollableWithIntent";let c=n.styled.div.withConfig({displayName:"IntentScrollable2__Wrapper",componentId:"sc-7516eae0-0"})`
  position: relative;
  height: 100%;
  width: 100%;
  min-height: 0;
  min-width: 0;
`,p=n.styled.div.withConfig({displayName:"IntentScrollable2__PulseOverlay",componentId:"sc-7516eae0-1"})`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  border-radius: inherit;
  box-shadow:
    inset 0 0 0 1px ${({theme:e})=>e.appUI.intent.PRIMARY},
    inset 0 0 0 5px ${({theme:e})=>(0,o.rgba)(e.appUI.intent.PRIMARY,.25)};
  opacity: ${({$isPulsing:e})=>+!!e};
  transition: opacity 0.15s ease-out;
`,u=n.styled.div.withConfig({displayName:"IntentScrollable2__ScrollContainer",componentId:"sc-7516eae0-2"})`
  overflow-x: ${({$overflowX:e})=>e};
  overflow-y: auto;
  height: 100%;

  /* Custom scrollbar styling - always visible */
  &::-webkit-scrollbar {
    height: 6px;
    width: 6px;
    -webkit-appearance: none; /* Override macOS overlay scrollbar behavior */
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    transition: background 0.2s ease;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.4);
  }

  /* Firefox - always show scrollbar */
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.25) rgba(0, 0, 0, 0.05);
`;e.s(["IntentScrollable2",0,l],392944)},194547,e=>{"use strict";var t=e.i(997053),i=e.i(739876);let o=t.default.div.withConfig({displayName:"InteractiveFeatureWrapper.styles__WindowTitle",componentId:"sc-b5f0eae9-0"})`
  position: absolute;
  bottom: 100%;
  font-size: 11px;
  line-height: 28px;
  padding: 0 12px;
  opacity: 0.9;
  border-left: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
  border-right: 1px dashed ${({theme:e})=>e.borderColor.DEFAULT};
  border-top: 1px dashed ${({theme:e})=>e.borderColor.DEFAULT};
  color: ${({theme:e})=>e.fontColor.DEFAULT};
  backdrop-filter: blur(15px);
  mask-image: linear-gradient(to bottom, black 0%, black 90%, transparent 100%);
  transition:
    transform 0.2s ease-in-out,
    opacity 0.2s ease-in-out,
    border-color 0.2s ease-in-out,
    color 0.2s ease-in-out;

  ${({$canClick:e})=>e&&t.css`
      cursor: pointer;
    `}

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: ${({theme:e})=>(0,i.backgroundImageHatched)(e)};
    opacity: 0.3;
  }

  span {
    position: relative;
    z-index: 1;
  }

  ${({$position:e})=>"left"===e?t.css`
          left: 12px;
        `:t.css`
          right: 12px;
        `}
`,n=t.default.div.withConfig({displayName:"InteractiveFeatureWrapper.styles__DashedLines",componentId:"sc-b5f0eae9-1"})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`,r=t.default.div.withConfig({displayName:"InteractiveFeatureWrapper.styles__DashedLine",componentId:"sc-b5f0eae9-2"})`
  position: absolute;

  &[data-top] {
    top: -1px;
    left: -200px;
    right: -200px;
    height: 0;
    border-top: 1px dashed ${({theme:e})=>e.borderColor.DEFAULT};
  }

  &[data-bottom] {
    bottom: -1px;
    left: -200px;
    right: -200px;
    height: 0;
    border-bottom: 1px dashed ${({theme:e})=>e.borderColor.DEFAULT};
  }

  &[data-left] {
    top: -50px;
    left: -1px;
    bottom: -50px;
    width: 0;
    border-left: 1px dashed ${({theme:e})=>e.borderColor.DEFAULT};
  }

  &[data-right] {
    top: -50px;
    right: -1px;
    bottom: -50px;
    width: 0;
    border-right: 1px dashed ${({theme:e})=>e.borderColor.DEFAULT};
  }
`,a=t.default.div.withConfig({displayName:"InteractiveFeatureWrapper.styles__Wrapper",componentId:"sc-b5f0eae9-3"})`
  display: flex;
  flex-direction: column;
  position: relative;
  font-family: ${({theme:e})=>e.appUI.fontFamily.DEFAULT};
  font-size: ${({theme:e})=>e.appUI.fontSize.DEFAULT};
  line-height: 1.3;
  color: ${({theme:e})=>e.appUI.fontColor.DEFAULT};
  border-radius: 6px;
  background-color: ${({theme:e})=>e.appUI.backgroundColor.DEFAULT};
  max-width: 1000px;
  max-height: 1000px;
  width: 100%;
  height: 100%;
  box-shadow: ${({$shadowStyle:e,theme:t})=>"default"===e?t.appUI.windowShadow.DEFAULT:t.appUI.windowShadow.LIGHT};
  transition:
    box-shadow 0.2s ease-in-out,
    transform 0.2s ease-in-out;

  /* Hide native cursor - we show custom 8-bit cursor instead */
  &:hover {
    cursor: none;

    * {
      cursor: none !important;
    }
  }

  &:hover {
    box-shadow: ${({$shadowStyle:e,theme:t})=>"default"===e?t.appUI.windowShadow.HOVER:t.appUI.windowShadow.LIGHT_HOVER};

    ${o} {
      opacity: 1;
      transform: translateY(-2px);
      color: ${({theme:e})=>e.fontColor.LOUD};
      border-color: ${({theme:e})=>e.borderColor.STRONG};
    }
  }

  /* Disable pointer events to avoid scrolling issues on mobile */
  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    pointer-events: none;
  }
`,s=(0,t.default)(a).withConfig({displayName:"InteractiveFeatureWrapper.styles__OuterBrowserWindow",componentId:"sc-b5f0eae9-4"})`
  display: flex;
  flex-direction: column;
  padding: 6px;
  align-items: stretch;
  gap: 7px;
  border-radius: 10px;
  background: ${({theme:e})=>e.appUI.outerBrowserWindow.chromeGradient};
`,l=t.default.div.withConfig({displayName:"InteractiveFeatureWrapper.styles__BrowserWindowToolbar",componentId:"sc-b5f0eae9-5"})`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`,d=t.default.div.withConfig({displayName:"InteractiveFeatureWrapper.styles__BrowserWindowButtons",componentId:"sc-b5f0eae9-6"})`
  display: flex;
  padding: 1px 2px;
  align-items: center;
  gap: 5px;
`,c=t.default.div.withConfig({displayName:"InteractiveFeatureWrapper.styles__TrafficLight",componentId:"sc-b5f0eae9-7"})`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: ${({theme:e})=>e.appUI.outerBrowserWindow.trafficLightButton.border};
  background: ${({theme:e})=>e.appUI.outerBrowserWindow.trafficLightButton.background};
`,p=t.default.div.withConfig({displayName:"InteractiveFeatureWrapper.styles__BrowserWindowTitle",componentId:"sc-b5f0eae9-8"})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 11px;
  opacity: 0.5;
  text-align: center;
  color: ${({theme:e})=>e.fontColor.LOUD};

  svg {
    color: ${({theme:e})=>e.fontColor.LOUD};
  }
`,u=(0,t.default)(a).withConfig({displayName:"InteractiveFeatureWrapper.styles__InnerBrowserWindow",componentId:"sc-b5f0eae9-9"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 0;
  box-shadow:
    0 0 0 1px rgba(49, 38, 59, 0.22),
    0 26px 57px 0 rgba(49, 38, 59, 0.1);

  &:hover {
    box-shadow:
      0 0 0 1px rgba(49, 38, 59, 0.22),
      0 26px 57px 0 rgba(49, 38, 59, 0.1);
  }
`;e.s(["BrowserWindowButtons",0,d,"BrowserWindowTitle",0,p,"BrowserWindowToolbar",0,l,"DashedLine",0,r,"DashedLines",0,n,"InnerBrowserWindow",0,u,"OuterBrowserWindow",0,s,"TrafficLight",0,c,"WindowTitle",0,o,"Wrapper",0,a])},1600,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(997053),n=e.i(238108),r=e.i(975336);let a=i.memo(function({tabItems:e}){return(0,t.jsx)(s,{children:e.map((e,i)=>(0,t.jsx)(r.HexTooltip,{content:e.tooltipContent,interactive:!0,children:(0,t.jsx)(l,{icon:e.icon,variant:"minimal"})},i))})}),s=o.styled.div.withConfig({displayName:"TabbedSidebar__Wrapper",componentId:"sc-967cf3c6-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: none;
  padding: 4px 8px;
`,l=(0,o.styled)(n.HexButton).withConfig({displayName:"TabbedSidebar__StyledHexButton",componentId:"sc-967cf3c6-1"})`
  && {
    width: 32px;
    height: 32px;
  }
`;e.s(["TabbedSidebar",0,a])},482847,e=>{"use strict";var t=e.i(843476);e.s(["Cursor8BitArrow",0,function({outlineColor:e,shadowColor:i}){let o=[[1,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,0,0,0,0,0,0,0,0,0,0,0],[1,2,1,0,0,0,0,0,0,0,0,0,0],[1,2,2,1,3,0,0,0,0,0,0,0,0],[1,2,2,2,1,3,0,0,0,0,0,0,0],[1,2,2,2,2,1,3,0,0,0,0,0,0],[1,2,2,2,2,2,1,3,0,0,0,0,0],[1,2,2,2,2,2,2,1,3,0,0,0,0],[1,2,2,2,2,2,2,2,1,3,0,0,0],[1,2,2,2,2,2,2,2,2,1,3,0,0],[1,2,2,2,2,2,1,1,1,1,1,3,0],[1,2,2,1,2,2,1,3,3,3,3,3,0],[1,2,1,3,1,2,2,1,3,0,0,0,0],[1,1,3,0,1,2,2,1,3,0,0,0,0],[1,3,0,0,3,1,2,2,1,3,0,0,0],[3,0,0,0,0,1,2,2,1,3,0,0,0],[0,0,0,0,0,3,1,1,3,0,0,0,0],[0,0,0,0,0,0,3,3,0,0,0,0,0]],n=+o[0].length,r=+o.length;return(0,t.jsx)("svg",{height:r,style:{imageRendering:"pixelated"},viewBox:`0 0 ${n} ${r}`,width:n,children:o.map((o,n)=>o.map((o,r)=>{let a;return 0===o?null:(a=1===o?e:2===o?"#FFFFFF":i,(0,t.jsx)("rect",{fill:a,height:1,width:1,x:+r,y:+n},`${r}-${n}`))}))})},"Cursor8BitPointer",0,function({outlineColor:e,shadowColor:i}){let o=[[0,0,0,0,0,1,1,0,0,0,0,0,0,0],[0,0,0,0,1,2,2,1,3,0,0,0,0,0],[0,0,0,0,1,2,2,1,3,0,0,0,0,0],[0,0,0,0,1,2,2,1,3,0,0,0,0,0],[0,0,0,0,1,2,2,1,1,1,0,0,0,0],[0,0,0,0,1,2,2,1,2,2,1,3,0,0],[0,1,1,0,1,2,2,1,2,2,1,1,3,0],[1,2,2,1,1,2,2,1,2,2,1,2,1,3],[1,2,2,2,1,2,2,2,2,2,2,2,1,3],[3,1,2,2,2,2,2,2,2,2,2,2,1,3],[0,3,1,2,2,2,2,2,2,2,2,2,1,3],[0,0,1,2,2,2,2,2,2,2,2,1,3,0],[0,0,3,1,2,2,2,2,2,2,2,1,3,0],[0,0,0,1,2,2,2,2,2,2,1,3,0,0],[0,0,0,3,1,2,2,2,2,2,1,3,0,0],[0,0,0,0,1,2,2,2,2,1,3,0,0,0],[0,0,0,0,3,1,1,1,1,3,0,0,0,0],[0,0,0,0,0,3,3,3,3,0,0,0,0,0]],n=+o[0].length,r=+o.length;return(0,t.jsx)("svg",{height:r,style:{imageRendering:"pixelated"},viewBox:`0 0 ${n} ${r}`,width:n,children:o.map((o,n)=>o.map((o,r)=>{let a;return 0===o?null:(a=1===o?e:2===o?"#FFFFFF":i,(0,t.jsx)("rect",{fill:a,height:1,width:1,x:+r,y:+n},`${r}-${n}`))}))})},"UnlockProgressIndicator",0,function({filledColor:e,unfilledColor:i,progress:o}){let n=Math.floor(10*o);return(0,t.jsxs)("svg",{height:20,style:{position:"absolute",left:14,top:2},viewBox:"0 0 50 20",width:50,children:[(0,t.jsx)("rect",{fill:i,height:20,rx:1,width:6,x:0,y:0}),n>0&&(0,t.jsx)("rect",{fill:e,height:2*n,rx:1,width:6,x:0,y:(10-n)*2}),(0,t.jsx)("text",{fill:e,fontFamily:"system-ui, sans-serif",fontSize:7,fontWeight:600,x:10,y:9,children:"ENABLE"}),(0,t.jsx)("text",{fill:e,fontFamily:"system-ui, sans-serif",fontSize:7,fontWeight:600,x:10,y:17,children:"SCROLL"})]})}])},238108,e=>{"use strict";var t=e.i(843476),i=e.i(193594),o=e.i(997053);let n=o.styled.div.withConfig({displayName:"HexButton__Wrapper",componentId:"sc-2bf5efa3-0"})`
  flex: none;
  display: inline-flex;
  align-items: center;
  border-radius: ${({theme:e})=>e.appUI.borderRadius};
  font-size: ${({theme:e})=>e.appUI.fontSize.DEFAULT};
  gap: 4px;
  justify-content: center;
  padding: 0 8px;
  height: 24px;
  line-height: 15px;
  border: 1px solid ${({theme:e})=>e.appUI.borderColor.MUTED};
  font-family: ${({theme:e})=>e.appUI.fontFamily.DEFAULT};
  color: ${({theme:e})=>e.appUI.fontColor.DEFAULT};
  cursor: pointer;
  transition:
    border-color
      ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`},
    background-color
      ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`};

  [data-icon] {
    color: ${({theme:e})=>e.appUI.fontColor.MUTED};
  }

  ${({$variant:e})=>"default"===e&&o.css`
      &:hover {
        border: 1px solid ${({theme:e})=>e.appUI.borderColor.DEFAULT};
      }
    `}

  ${({$variant:e})=>"minimal"===e&&o.css`
      border: none;
      color: ${({theme:e})=>e.appUI.fontColor.MUTED};

      &:hover {
        background-color: ${({theme:e})=>e.appUI.backgroundColor.MUTED};
      }
    `}

  ${({$active:e})=>e&&o.css`
      background-color: ${({theme:e})=>(0,i.rgba)(e.appUI.intent.PRIMARY,.07)};
      color: ${({theme:e})=>e.appUI.intent.PRIMARY};

      [data-icon] {
        color: ${({theme:e})=>e.appUI.intent.PRIMARY};
      }
    `}

  ${({$iconOnly:e})=>e&&o.css`
      padding: 0;
      width: 24px;
    `}
`;e.s(["HexButton",0,({onClick:e,icon:i,iconPos:o="left",text:r,variant:a="default",active:s=!1,className:l})=>(0,t.jsxs)(n,{$active:s,$iconOnly:!r&&void 0!==i,$variant:a,className:l,onClick:e,children:[i&&"left"===o&&i,r&&(0,t.jsx)("span",{children:r}),i&&"right"===o&&i]})])},79719,e=>{e.v({attribution:"InlineQuote-module__ju4aKG__attribution",attributionStacked:"InlineQuote-module__ju4aKG__attributionStacked",author:"InlineQuote-module__ju4aKG__author",authorName:"InlineQuote-module__ju4aKG__authorName",authorStacked:"InlineQuote-module__ju4aKG__authorStacked",authorTitle:"InlineQuote-module__ju4aKG__authorTitle",body:"InlineQuote-module__ju4aKG__body",icon:"InlineQuote-module__ju4aKG__icon",quote:"InlineQuote-module__ju4aKG__quote",text:"InlineQuote-module__ju4aKG__text"})},144663,e=>{"use strict";var t=e.i(843476),i=e.i(343794),o=e.i(650617),n=e.i(430388);e.i(726497);var r=e.i(778888),a=e.i(79719);e.s(["InlineQuote",0,function({authorName:e,authorTitle:s,avatar:l,className:d,logo:c,quoteText:p,stackedAuthor:u,...m}){let h=!!e||!!s,f=!!c||!!l||h;return(0,t.jsxs)("figure",{className:(0,i.default)(a.default.quote,d),...m,children:[(0,t.jsxs)("blockquote",{className:a.default.body,children:[(0,t.jsx)("div",{className:a.default.icon,children:(0,t.jsx)(n.QuoteIcon,{color:"var(--fontColorMUTED)"})}),(0,t.jsxs)(o.Text,{className:a.default.text,color:"loud",size:"medium",children:['"',p,'"']})]}),f?(0,t.jsxs)("figcaption",{className:(0,i.default)(a.default.attribution,u?a.default.attributionStacked:null),children:[c,l,h?(0,t.jsxs)("p",{className:(0,i.default)(r.textStyles.annotation,a.default.author,u?a.default.authorStacked:null),children:[e?(0,t.jsx)("span",{className:a.default.authorName,children:e}):null,e&&s?" ":null,s?(0,t.jsx)("span",{className:a.default.authorTitle,children:s}):null]}):null]}):null]})}])},920527,e=>{"use strict";var t=e.i(843476),i=e.i(247984);e.s(["wrapMatchingTextInEm",0,function(e,o,n){let r=e.indexOf(o);if(!o||-1===r)return e;let a=e.slice(r+o.length),s=(0,i.stegaClean)(a),l=s!==a&&0===s.trim().length;return(0,t.jsxs)(t.Fragment,{children:[e.slice(0,r),(0,t.jsx)("span",{className:n??"","data-style":"italic",children:l?o+a:o}),l?null:a]})}])},998990,e=>{"use strict";e.s(["CUSTOMER_LOGOS_HOSTED",0,{Algolia:"https://cdn.sanity.io/images/e92memrj/production/643fb40019cd60627bf6f354c5bffdfd66017ce9-97x51.svg",Brex:"https://cdn.sanity.io/images/e92memrj/production/797daac5d8ce0c8f853f32db64dddf44234caf15-110x50.svg",Candidly:"https://cdn.sanity.io/images/e92memrj/production/5fb6f6dd0ff002808f2382c81a66cd28410a4ac9-166x50.svg",Chime:"https://cdn.sanity.io/images/e92memrj/production/20bf8a6fe0ca725b28527c135c22f237938f5ef5-94x50.svg",ClickUp:"https://cdn.sanity.io/images/e92memrj/production/8ec37f2330ffd132be12ea66bad243453af0d047-119x50.svg",CustomerIO:"https://cdn.sanity.io/images/e92memrj/production/fc46557c4677964c57351c9affa635d558fe8cd8-170x40.svg",Doximity:"https://cdn.sanity.io/images/e92memrj/production/17b8982db750bfc51b7aa08783c5e1f8d3432d63-125x50.svg",Figma:"https://cdn.sanity.io/images/e92memrj/production/f7df402cfb3dac549c3f877c09425534abc7650b-97x50.svg",Huckberry:"https://cdn.sanity.io/images/e92memrj/production/8194d2de15059f3f69d4fb8dbc03b2f7bfb04af4-134x50.svg",InfiniteLambda:"https://cdn.sanity.io/images/e92memrj/production/638503884c2ca511d9816fc46d5d13f05551bd26-110x50.svg",Inventa:"https://cdn.sanity.io/images/e92memrj/production/2b33cd7f123f50efbd8ea42ea9235382e207633e-132x50.svg",LangChain:"https://cdn.sanity.io/images/e92memrj/production/0b907ba3d40fe1012f1118d105620c7779a49949-135x50.svg",Lovable:"https://cdn.sanity.io/images/e92memrj/production/d063f2a64adcd7869bc2fc81dbc971825be8b951-137x50.svg",MedScout:"https://cdn.sanity.io/images/e92memrj/production/ab190c6c708ad1b738c3dd93e3c9d64718788935-168x50.svg",Mercor:"https://cdn.sanity.io/images/e92memrj/production/92b9cd2232a417db021ffe38f96d45a896e85cba-131x50.svg",NeoFinancial:"https://cdn.sanity.io/images/e92memrj/production/ba0c09ff2b2ba796246ce69e4e971751bccaae37-76x50.svg",Notion:"https://cdn.sanity.io/images/e92memrj/production/6f211c674b14be69b85497264b1d654b138dce01-39x50.svg",PandaDoc:"https://cdn.sanity.io/images/e92memrj/production/728e1e88c0a31f218d18971d3e9da2de81bad906-120x50.svg",ProductHunt:"https://cdn.sanity.io/images/e92memrj/production/0334d3583cd66c0361cd0c3b1bd28d92307cf01a-126x50.svg",Ramp:"https://cdn.sanity.io/images/e92memrj/production/892932e7f3dc3c66d3ae4a16e8bc51e37b7f59f4-120x50.svg",StubHub:"https://cdn.sanity.io/images/e92memrj/production/84cee8330df6df867d752ef0336d987b73845add-81x50.svg",WeightsAndBiases:"https://cdn.sanity.io/images/e92memrj/production/1eaf4b79b17b9f39d479a6cca9f8b60e06105d44-169x50.svg",Zoe:"https://cdn.sanity.io/images/e92memrj/production/ac4cbae3f4b1d599f5d51d290bd183be0b16253a-114x50.svg"}])}]);