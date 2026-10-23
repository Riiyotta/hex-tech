(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,346465,e=>{"use strict";var t=e.i(843476),i=e.i(271645),n=e.i(251347),o=e.i(846932),r=e.i(770703),a=e.i(997053),l=e.i(321688),s=e.i(558202);let d=a.default.table.withConfig({displayName:"ComputeProfiles__TableWrapper",componentId:"sc-bcfcc399-0"})`
  color: ${({theme:e})=>e.colors.WHITE};
  font-size: ${({theme:e})=>e.fontSize.MEDIUM};
  width: 100%;
  margin-bottom: 10px;

  thead {
    margin-bottom: 10px;
    padding-bottom: 10px;
    box-shadow: 0 1px 0 0 ${({theme:e})=>e.borderColor.DEFAULT};
  }

  tbody:before {
    content: ' ';
    display: block;
    height: 4px;
  }

  tr td,
  tr th {
    padding: 4px 0;
    text-align: right;

    &:first-child {
      text-align: left;
    }
  }

  tr td {
    min-width: 100px;

    @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
      min-width: 50px;
    }

    span {
      opacity: 0.6;
    }
  }
`,c=i.memo(function(){return(0,t.jsxs)(d,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Profile"}),(0,t.jsx)("th",{children:"GB"}),(0,t.jsx)("th",{children:"CPU"}),(0,t.jsx)("th",{children:"Price / hr *"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Extra small"}),(0,t.jsx)("td",{children:"2"}),(0,t.jsx)("td",{children:"0.25"}),(0,t.jsx)("td",{children:"Free"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Small"}),(0,t.jsx)("td",{children:"4"}),(0,t.jsx)("td",{children:"0.5"}),(0,t.jsx)("td",{children:"Free"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Medium"}),(0,t.jsx)("td",{children:"8"}),(0,t.jsx)("td",{children:"1"}),(0,t.jsx)("td",{children:"Free"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Large"}),(0,t.jsx)("td",{children:"16"}),(0,t.jsx)("td",{children:"2"}),(0,t.jsx)("td",{children:"$0.32"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Extra large"}),(0,t.jsx)("td",{children:"32"}),(0,t.jsx)("td",{children:"4"}),(0,t.jsx)("td",{children:"$0.65"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"2XL"}),(0,t.jsx)("td",{children:"64"}),(0,t.jsx)("td",{children:"8"}),(0,t.jsx)("td",{children:"$1.29"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"4XL"}),(0,t.jsx)("td",{children:"128"}),(0,t.jsx)("td",{children:"16"}),(0,t.jsx)("td",{children:"$2.58"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"A10G GPU"}),(0,t.jsx)("td",{children:"27"}),(0,t.jsx)("td",{children:"6"}),(0,t.jsx)("td",{children:"$4.06"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"L4 GPU"}),(0,t.jsx)("td",{children:"27"}),(0,t.jsx)("td",{children:"6"}),(0,t.jsx)("td",{children:"$2.93"})]})]})]})}),p=(0,i.createContext)(null);function m({children:e,value:n}){return(0,i.useEffect)(()=>{let e=e=>{let t=e.target;t.getAttribute?.("href")==="#compute-modal"&&(e.preventDefault(),n())};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)},[n]),(0,t.jsx)(p.Provider,{value:n,children:e})}var u=e.i(258591),h=e.i(812488),f=e.i(665419),x=e.i(154213);let g=a.default.div.withConfig({displayName:"FeatureLabel",componentId:"sc-dff2b360-0"})`
  ${({$hasTooltip:e})=>e&&a.css`
      span {
        cursor: default;
        border-bottom: 2px dotted ${({theme:e})=>e.highlightColor50};
      }
    `}
`;var y=e.i(318334);let b=({children:e,tooltip:i,tooltipCTA:n})=>{let o=n?.startsWith("#"),r=n?`${i}&nbsp;<a${o?"":' target="_blank"'} href="${n}">Learn more</a>`:i;return(0,t.jsx)(g,{$hasTooltip:!0,as:"span",children:(0,t.jsx)("span",{"data-tooltip-html":r,"data-tooltip-id":"tooltip","data-tooltip-place":"top",children:e})})},j=a.default.button.withConfig({displayName:"plans__ComputeModalToggle",componentId:"sc-3845c55-0"})`
  text-decoration: underline;
  padding: 0;
  border: 0;
  color: currentColor;
  font-size: inherit;
  font-family: ${({theme:e})=>e.fontFamily.SANS}, sans-serif;
  background-color: transparent;
  transition: background-color
    ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`};
  cursor: pointer;

  &:hover {
    text-decoration: none;
    background-color: ${({theme:e})=>e.highlightColor30};
  }

  &:active {
    background-color: ${({theme:e})=>e.highlightColor70};
  }
`,w=({children:e,tooltip:i})=>(0,t.jsx)(b,{tooltip:i,tooltipCTA:"#compute-modal",children:e}),C=({children:e})=>{let n=function(){let e=(0,i.useContext)(p);if(null===e)throw Error("must use ModalContext within <ModalProvider />");return e}();return(0,t.jsx)(j,{onClick:n,children:e})},k=[(0,t.jsx)(t.Fragment,{children:"Hex agent trial"}),(0,t.jsxs)(t.Fragment,{children:["Connect any"," ",(0,t.jsx)(b,{tooltip:"Pull data from your warehouse, cloud storage provider, local files, or API.",children:"data source"})]}),(0,t.jsxs)(t.Fragment,{children:["Build with all"," ",(0,t.jsx)(b,{tooltip:"Combine SQL, Python, charts and spreadsheets in one project.",children:"cell types"})]}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(w,{tooltip:"4GB RAM, 0.5 CPU.",children:"Small"})," ","compute"]})],v=[(0,t.jsx)(t.Fragment,{children:"Hex agent"}),(0,t.jsx)(t.Fragment,{children:"Standard credits"}),(0,t.jsxs)(t.Fragment,{children:["Up to 5"," ",(0,t.jsx)(b,{tooltip:"Sharable dashboards, reports, or data apps, built right from your notebooks.",children:"published apps"})]}),(0,t.jsx)(t.Fragment,{children:"30-day version history"}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(w,{tooltip:"Up to 8GB RAM, 1 CPU.",children:"Medium"})," ","compute"]})],I=[(0,t.jsx)(t.Fragment,{children:"Extended credits"}),(0,t.jsxs)(t.Fragment,{children:["Unlimited"," ",(0,t.jsx)(b,{tooltip:"Sharable dashboards, reports, or data apps, built right from your notebooks.",children:"published apps"})]}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(b,{tooltip:"Explore data with point-and-click charts and pivots.",children:["Visual exploration ",""]}),"and"," ",(0,t.jsx)(b,{tooltip:"Dive deeper into the underlying data from published apps.",children:"drill down"})]}),(0,t.jsx)(t.Fragment,{children:"Unlimited version history"}),(0,t.jsx)(t.Fragment,{children:"Scheduled runs and alerts"}),(0,t.jsxs)(t.Fragment,{children:["Shared"," ",(0,t.jsx)(b,{tooltip:"Create reusable groups of cells that can be shared across your workspace.",children:"components"})]}),(0,t.jsxs)(t.Fragment,{children:[" ","Shared"," ",(0,t.jsx)(b,{tooltip:"Organize projects into shareable groupings.",children:"collections"})]}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(w,{tooltip:"Up to 128GB RAM, 16 CPUs, and 1 GPU.",children:"Advanced"})," ","compute add-ons"]})],P=[(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(b,{tooltip:"Dedicated licenses for exploring data with natural language chat or point-and-click visualizations.",children:"Explorer seat"})," ","add-on"]}),(0,t.jsx)(t.Fragment,{children:"Audit logs"}),(0,t.jsx)(t.Fragment,{children:"Premium credits"}),(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(b,{tooltip:"Configure user-specific access controls on shared data connections.",children:"OAuth database connections"})}),(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(b,{tooltip:"Understand which data tables a project queries for audits, lineage mapping, and impact analysis.",children:"Observability API"})}),(0,t.jsx)(t.Fragment,{children:"OIDC SSO"}),(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(b,{tooltip:"BYOK is supported for OpenAI and Anthropic.",children:"Bring Your Own Key (BYOK)"})}),(0,t.jsx)(t.Fragment,{children:"Single tenant add-on"}),(0,t.jsx)(t.Fragment,{children:"HIPAA add-on"}),(0,t.jsx)(t.Fragment,{children:"Embedded analytics add-on"}),(0,t.jsx)(t.Fragment,{children:"Custom Docker image add-ons"}),(0,t.jsx)(t.Fragment,{children:"Dedicated support"})],S={rows:[{label:"Unlimited users",Community:[{tick:!0}],Professional:[{tick:!0}],Team:[{tick:!0}],Enterprise:[{tick:!0}]},{label:"Hex agent",Community:[{tick:!0}],Professional:[{tick:!0}],Team:[{tick:!0}],Enterprise:[{tick:!0}]},{label:"Credits",tooltip:"Credits apply towards AI feature usage.",tooltipCTA:"#faq-credits",Community:[{text:"Limited"}],Professional:[{text:"Standard"}],Team:[{text:"Extended"}],Enterprise:[{text:"Premium"}]},{label:"Published apps",tooltip:"Sharable dashboards, reports, or data apps, built right from your notebooks.",Community:[{text:"Up to 5"}],Professional:[{text:"Up to 5"}],Team:[{text:"Unlimited"}],Enterprise:[{text:"Unlimited"}]},{label:"Explorer role",tooltip:"Explorers can chat with Threads, drill-down or explore from published apps, and subscribe to conditional notifications.",tooltipCTA:f.DOCS_LINKS.Roles,Community:[],Professional:[],Team:[],Enterprise:[{text:"Per seat add-on"}]}]},_={title:"Data",rows:[{label:"Project connections",Community:[{tick:!0}],Professional:[{tick:!0}],Team:[{tick:!0}],Enterprise:[{tick:!0}]},{label:"Workspace connections",Community:[{tick:!0}],Professional:[{tick:!0}],Team:[{tick:!0}],Enterprise:[{tick:!0}]},{label:"Data permissions",tooltip:"Manage and restrict access to projects that use sensitive data.",tooltipCTA:f.DOCS_LINKS.DataConnectionPermissions,Community:[],Professional:[{text:"Restrict editing"}],Team:[{text:"Restrict editing"}],Enterprise:[{text:"Restrict editing & viewing"}]},{label:"Custom SQL formatting",Community:[{tick:!1}],Professional:[{tick:!0}],Team:[{tick:!0}],Enterprise:[{tick:!0}]},{label:"Explore & View data",tooltip:"Drill down into the underlying data powering a chart or table in a published App.",tooltipCTA:f.DOCS_LINKS.Explore,Community:[{tick:!1}],Professional:[{tick:!1}],Team:[{tick:!0}],Enterprise:[{tick:!0}]},{label:"SSH",Community:[{tick:!1}],Professional:[{tick:!0}],Team:[{tick:!0}],Enterprise:[{tick:!0}]},{label:"Compute profiles",Community:[{text:(0,t.jsx)(C,{children:"Small"})}],Professional:[{text:(0,t.jsx)(C,{children:"Medium"})}],Team:[{text:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(C,{children:"Advanced compute"})," add-ons"]})}],Enterprise:[{text:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(C,{children:"Advanced compute"})," add-ons"]})}]},{label:"Environment",tooltip:"Leverage preset Python libraries or customize with Docker images.",tooltipCTA:"https://learn.hex.tech/docs/explore-data/projects/environment-configuration/environment-views",Community:[{text:"Standard Python libraries"}],Professional:[{text:"Standard Python libraries"}],Team:[{text:"Standard Python libraries"}],Enterprise:[{text:"Custom Docker image add-ons"}]},{label:"Semantic models",tooltip:"Connect semantic models from dbt, Snowflake, and Cube for governed metrics.",tooltipCTA:f.DOCS_LINKS.SemanticModels,Community:[{tick:!1}],Professional:[{tick:!1}],Team:[{tick:!0}],Enterprise:[{tick:!0}]}]},E={title:"Collaboration",rows:[{label:"Collections",tooltip:"Groups of projects that can be created, populated, and shared by users in a workspace",tooltipCTA:f.DOCS_LINKS.Collections,Community:[],Professional:[{text:"Up to 3 shared collections"}],Team:[{text:"Unlimited"}],Enterprise:[{text:"Unlimited"}]},{label:"Components",tooltip:"Create reusable groups of cells that can be shared with your workspace. All paid plans include unlimited personal components.",tooltipCTA:f.DOCS_LINKS.Components,Community:[],Professional:[{text:"Up to 3 shared components"}],Team:[{text:"Unlimited"}],Enterprise:[{text:"Unlimited"}]},{label:"Auto-archive",tooltip:"Configure rules to automatically archive projects that are no longer used",Community:[],Professional:[],Team:[{tick:!0}],Enterprise:[{tick:!0}]},{label:"Scheduled runs & alerts",tooltip:"Schedule projects to run on a set cadence. Optionally subscribe to email or Slack notifications for run status or data-driven alerts.",tooltipCTA:f.DOCS_LINKS.ScheduledRuns,Community:[],Professional:[],Team:[{tick:!0}],Enterprise:[{tick:!0}]},{label:"Version history",Community:[{text:"7-day"}],Professional:[{text:"30-day"}],Team:[{text:"Unlimited"}],Enterprise:[{text:"Unlimited"}]},{label:"Reviews",tooltip:"Protect business-critical projects with required reviews",tooltipCTA:f.DOCS_LINKS.Reviews,Community:[],Professional:[],Team:[{tick:!0}],Enterprise:[{tick:!0}]},{label:"Custom labels",tooltip:"Organize your app library for easy discoverability.",Community:[{tick:!1}],Professional:[{tick:!1}],Team:[{tick:!0}],Enterprise:[{tick:!0}]},{label:"Custom branding",tooltip:"Style published apps with custom logo, chart colors, background color, and accent color.",Community:[{tick:!1}],Professional:[{tick:!1}],Team:[{text:"Up to 1 custom app theme"}],Enterprise:[{text:"Up to 5 custom app themes "}]},{label:"Snapshots",tooltip:"Freeze an app in time for easy reference in the future.",Community:[{tick:!1}],Professional:[{tick:!0}],Team:[{tick:!0}],Enterprise:[{tick:!0}]},{label:"Presentation mode",Community:[{tick:!1}],Professional:[{tick:!0}],Team:[{tick:!0}],Enterprise:[{tick:!0}]},{label:"Git project export and package import",Community:[],Professional:[],Team:[{tick:!0}],Enterprise:[{tick:!0}]}]},T={title:"Administration",rows:[{label:"User groups",tooltip:"Create user groups to manage permissions",Community:[{tick:!1}],Professional:[{tick:!1}],Team:[{tick:!0}],Enterprise:[{tick:!0}]},{label:"Usage reports",tooltip:"Admins can view usage of data connections, secrets and projects",Community:[{tick:!1}],Professional:[{tick:!1}],Team:[{tick:!0}],Enterprise:[{tick:!0}]},{label:"Integrations",tooltip:"Integrations with your favorite orchestration and transformation tools",Community:[{tick:!1}],Professional:[{tick:!1}],Team:[{text:"Airflow, Dagster, dbt"}],Enterprise:[{text:"Airflow, Dagster, dbt"}]},{label:"REST APIs",tooltip:"Programmatic control and automation of projects and administrative workflows.",tooltipCTA:"https://learn.hex.tech/docs/api/api-overview",Community:[{tick:!1}],Professional:[{tick:!1}],Team:[{tick:!0}],Enterprise:[{tick:!0}]},{label:"Observability API",tooltip:"Understand which data tables a project queries for audits, lineage mapping, and impact analysis",tooltipCTA:"https://learn.hex.tech/docs/api/api-overview",Community:[{tick:!1}],Professional:[{tick:!1}],Team:[{tick:!1}],Enterprise:[{tick:!0}]},{label:"Marketplace offerings",Community:[],Professional:[],Team:[],Enterprise:[{text:"AWS Marketplace"},{text:"Snowflake Marketplace"}]}]},$={title:"Security",rows:[{label:"OIDC SSO",Community:[{tick:!1}],Professional:[{tick:!1}],Team:[{tick:!1}],Enterprise:[{tick:!0}]},{label:"OAuth",tooltip:"Configure user-specific access controls on shared data connections.",tooltipCTA:f.DOCS_LINKS.OAuthDataConnections,Community:[{tick:!1}],Professional:[{tick:!1}],Team:[{tick:!1}],Enterprise:[{tick:!0}]},{label:"Audit logging",tooltip:"Get a record of key actions within your workspace for security and compliance.",tooltipCTA:f.DOCS_LINKS.AuditLogging,Community:[{tick:!1}],Professional:[{tick:!1}],Team:[{tick:!1}],Enterprise:[{tick:!0}]},{label:"Bring Your Own Key (BYOK)",tooltip:"Use your own API key for Hex's AI features.",tooltipCTA:f.DOCS_LINKS.BYOK,Community:[],Professional:[],Team:[],Enterprise:[{text:"OpenAI and Anthropic"}]},{label:"Deployment",Community:[{text:"Multi-tenant"}],Professional:[{text:"Multi-tenant"}],Team:[{text:"EU Multi-tenant (contract only) or multi-tenant"}],Enterprise:[{text:"Single, EU Multi-tenant or multi-tenant"}]}]},N=a.default.b.withConfig({displayName:"plans__Footnote",componentId:"sc-3845c55-1"})`
  font-size: ${({theme:e})=>e.fontSize.EXTRA_SMALL};
  color: ${({theme:e})=>e.palette.fg1200};
`,A=a.default.ul.withConfig({displayName:"plans__Ul",componentId:"sc-3845c55-2"})`
  /* list-style: disc;
  padding-left: 20px;
  text-align: left; */
  li {
    display: inline;

    &:not(:last-child)::after {
      content: ', ';
    }
  }
`,M={title:"Support",rows:[{label:"Support (9am-5pm PT M-F)",Community:[{text:"Email"}],Professional:[{text:"Email"}],Team:[{text:(0,t.jsx)(t.Fragment,{children:"Email, in-product messenger* with priority SLA"})},{text:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(N,{children:"*Available but not offered in all cases"})})}],Enterprise:[{text:(0,t.jsx)(t.Fragment,{children:"Email, in-product messenger, Slack*, Microsoft Teams* with Enterprise SLA"})},{text:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(N,{children:"*Available but not offered in all cases"})})}]},{label:"Learning & training",Community:[{text:"Technical documentation, group learning sessions"}],Professional:[{text:"Technical documentation, group learning sessions"}],Team:[{text:(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(A,{children:[(0,t.jsx)("li",{children:"Technical documentation"}),(0,t.jsx)("li",{children:"group learning sessions"}),(0,t.jsx)("li",{children:"live training*"})]})})},{text:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(N,{children:"*Available but not offered in all cases"})})}],Enterprise:[{text:(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(A,{children:[(0,t.jsx)("li",{children:"Technical documentation"}),(0,t.jsx)("li",{children:"live onboarding"}),(0,t.jsx)("li",{children:"by-request product education sessions"}),(0,t.jsx)("li",{children:"dedicated Customer Engineer*"}),(0,t.jsx)("li",{children:"dedicated Product Expert*"})]})})},{text:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(N,{children:"*Available but not offered in all cases"})})}]}]},O={Info:{Community:{illustration:(0,t.jsx)(y.CommunityIllustration,{}),title:"Community",description:"For hobbyists completing small projects and showcasing work.",ctaText:"Get started",ctaLink:`${f.SIGNUP_LINK}?plan=community&source=pricing`,price:"Free",showInGrid:!0,summaryInfo:k},Professional:{illustration:(0,t.jsx)(y.ProfessionalIllustration,{}),title:"Professional",description:"For individuals accelerating data insights and solo workflows.",ctaText:"Get started",ctaLink:`${f.SIGNUP_LINK}?plan=professional&source=pricing`,priceDetail:" per Editor / month",price:"$36",showInGrid:!0,summaryInfo:v},Team:{buttonStyle:"loud",illustration:(0,t.jsx)(y.TeamIllustration,{}),title:"Team",description:"For companies collaborating with data and automating manual work.",ctaText:"Try 14 days free",ctaLink:`${f.SIGNUP_LINK}?plan=team&source=pricing`,price:"$75",priceDetail:" per Editor / month",showInGrid:!0,summaryInfo:I},Enterprise:{illustration:(0,t.jsx)(y.EnterpriseIllustration,{}),title:"Enterprise",description:"For organizations requiring advanced security, governance, and support.",ctaText:"Contact Sales",ctaLink:f.INTERNAL_LINKS.RequestADemo,price:"Custom",showInGrid:!0,summaryInfo:P,trackingLabel:x.TRACKING_LABELS.ContactSales}},Sections:[S,_,E,T,$,M]},F=e=>{switch(e){case"Community":return"";case"Professional":return"Community";case"Team":return"Professional";default:return"Team"}},L=a.default.div.withConfig({displayName:"PlanItem__CellItem",componentId:"sc-4b9fd931-0"})`
  display: flex;
  position: relative;
  margin-bottom: 1px;
  justify-content: center;
`,H=a.default.div.withConfig({displayName:"PlanItem__ItemTick",componentId:"sc-4b9fd931-1"})`
  height: 20px;
`,D=a.default.div.withConfig({displayName:"PlanItem__ItemText",componentId:"sc-4b9fd931-2"})`
  line-height: 18px;
  width: 100%;
  text-align: center;

  span {
    opacity: 0.6;
  }
`,U=i.memo(function({index:e,item:i}){return(0,t.jsx)(L,{children:i.tick?(0,t.jsx)(H,{children:(0,t.jsx)(y.IconTick,{})}):i.text&&(0,t.jsx)(D,{children:i.text})},e)}),B=a.default.div.withConfig({displayName:"PlanCell__ComparisonCell",componentId:"sc-aaf2cb1d-0"})`
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  position: relative;

  @media (min-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 1px;
      background-color: ${({theme:e})=>e.borderColor.STRONG};
    }
  }

  &:first-child {
    flex: none;
    width: 210px;
    padding-right: 10px;
  }

  &:not(:first-child) {
    padding-left: 10px;
    color: ${({theme:e})=>e.colors.WHITE};
  }
`,R=i.memo(function({data:e}){return(0,t.jsx)(B,{children:e.map((e,i)=>(0,t.jsx)(U,{index:i,item:e},i))})});var G=e.i(482820),z=e.i(360571),W=e.i(706736),q=e.i(288839);let V=a.default.div.withConfig({displayName:"PlanHeader__PlanHeaderWrapper",componentId:"sc-da0b53ee-0"})`
  display: flex;
  flex-direction: column;
  padding-bottom: 0px;
  margin-bottom: 52px;
  position: relative;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 32px;
  }
`,K=(0,a.default)(u.Heading).withConfig({displayName:"PlanHeader__PlanHeading",componentId:"sc-da0b53ee-1"})``,Q=a.default.p.withConfig({displayName:"PlanHeader__PlanDescription",componentId:"sc-da0b53ee-2"})`
  padding-top: 16px;
  min-height: 128px;
  margin: 0;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    margin-top: 8px;
    padding-top: 0;
    margin-bottom: 32px;
    min-height: auto;
  }
`,Y=a.default.div.withConfig({displayName:"PlanHeader__PriceSection",componentId:"sc-da0b53ee-3"})`
  margin-bottom: 20px;
`,X=a.default.span.withConfig({displayName:"PlanHeader__Price",componentId:"sc-da0b53ee-4"})`
  font-size: 28px;
  font-weight: 800;
  color: ${({theme:e})=>e.colors.GRAY};
`,Z=a.default.span.withConfig({displayName:"PlanHeader__PriceDetail",componentId:"sc-da0b53ee-5"})`
  font-size: ${({theme:e})=>e.fontSize.MEDIUM};
  color: ${({theme:e})=>e.colors.WHITE};
  opacity: 0.75;
`,J=(0,a.default)(W.Button).withConfig({displayName:"PlanHeader__PlanButton",componentId:"sc-da0b53ee-6"})`
  box-sizing: inherit;
`,ee=i.memo(function({plan:e}){let i=(0,a.useTheme)(),n=(0,q.default)(i.mediaQueryString.LARGE);return(0,t.jsxs)(V,{children:[(0,t.jsx)(K,{renderAs:n?"h4":"h3",children:e.title}),(0,t.jsx)(Q,{children:e.description}),(0,t.jsxs)(Y,{children:[e.price&&(0,t.jsx)(X,{children:e.price}),e.priceDetail&&(0,t.jsx)(Z,{children:e.priceDetail})]}),(0,t.jsx)(J,{fill:!0,href:e.ctaLink,size:"default",stylez:e.buttonStyle||"bold",text:e.ctaText,trackingLabel:e.trackingLabel})]})});var et=e.i(809132),ei=e.i(739876);e.i(726497);var en=e.i(778888);let eo=a.default.div.withConfig({displayName:"PricingGroup__Accents",componentId:"sc-92a52c73-0"})`
  position: absolute;
  height: 12px;
  width: 12px;

  &&& {
    border-color: ${({theme:e})=>e.palette.fg1000};
  }

  &[data-position='tl'] {
    top: -1px;
    left: -1px;
    border-left: 1px solid;
    border-top: 1px solid;
  }

  &[data-position='tr'] {
    top: -1px;
    right: -1px;
    border-right: 1px solid;
    border-top: 1px solid;
  }

  &[data-position='bl'] {
    bottom: -1px;
    left: -1px;
    border-left: 1px solid;
    border-bottom: 1px solid;
  }

  &[data-position='br'] {
    bottom: -1px;
    right: -1px;
    border-right: 1px solid;
    border-bottom: 1px solid;
  }
`,er=a.default.div.withConfig({displayName:"PricingGroup__PlanCategoryContainer",componentId:"sc-92a52c73-1"})`
  position: relative;
  display: flex;
  border: 1px solid transparent;

  &[data-team='true'] {
    border-color: ${({theme:e})=>(0,ei.gridColorSelector)(e,"major")};

    ${eo} {
      border-color: ${({theme:e})=>e.palette.fg1200};
    }

    @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
      order: -1;
    }
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    flex-direction: column;
    max-width: 420px;
    margin: 0 auto;

    & + & {
      margin-top: 96px;
    }
  }
`,ea=a.default.div.withConfig({displayName:"PricingGroup__PlanLabel",componentId:"sc-92a52c73-2"})`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({theme:e})=>e.palette.bg500};
  color: ${({theme:e})=>e.palette.fg1200};
  border-radius: 1px;
  border: 1px solid ${({theme:e})=>(0,ei.gridColorSelector)(e,"major")};
  padding: 4px 32px;
  text-transform: uppercase;
  white-space: nowrap;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${({theme:e})=>e.paperTextureCssVars.img};
    background-size: ${({theme:e})=>e.paperTextureCssVars.size};
    background-position: 0 0;
    background-repeat: repeat;
    mix-blend-mode: ${({theme:e})=>e.paperTextureCssVars.mixBlendMode};
    opacity: ${({theme:e})=>e.paperTextureCssVars.opacity};
    pointer-events: none;
  }
`,el=a.default.div.withConfig({displayName:"PricingGroup__Rail",componentId:"sc-92a52c73-3"})`
  position: absolute;
  width: 1px;
  inset: -56px auto 0 -1px;
  border-right: 1px dashed ${({theme:e})=>(0,ei.gridColorSelector)(e,"major")};

  mask-image: linear-gradient(to bottom, transparent, red 56px);

  &[data-right] {
    inset: -56px -1px 0 auto;
  }
`,es=a.default.div.withConfig({displayName:"PricingGroup__PerlinNoise",componentId:"sc-92a52c73-4"})`
  position: absolute;
  inset: 0;
  background-image: url(/images/home-2025/textures/noise-rose-128x128.png);
  background-size: 512px 512px;

  animation: noise 16s linear infinite;

  @keyframes noise {
    from {
      background-position: 512px 1024px;
    }
    to {
      background-position: 0px 0px;
    }
  }
`,ed=a.default.div.withConfig({displayName:"PricingGroup__LinearGradientMask",componentId:"sc-92a52c73-5"})`
  position: absolute;
  inset: 0;
  mask-image: linear-gradient(
    to top,
    rgba(0 0 0 / 0.28),
    rgba(0 0 0 / 0.28) 60%,
    transparent 105%
  );
  pointer-events: none;
`;function ec(){return(0,t.jsx)(ed,{children:(0,t.jsx)(et.DotGridMask,{children:(0,t.jsx)(es,{})})})}function ep({children:e,team:i}){return(0,t.jsxs)(er,{"data-team":i,children:[(0,t.jsx)(el,{}),(0,t.jsx)(el,{"data-right":!0}),(0,t.jsx)(ea,{className:en.textStyles.annotation,children:i?"Team plans":"Individual plans"}),(0,t.jsx)(eo,{"data-position":"tl"}),(0,t.jsx)(eo,{"data-position":"tr"}),(0,t.jsx)(eo,{"data-position":"bl"}),(0,t.jsx)(eo,{"data-position":"br"}),e]})}let em=a.default.div.withConfig({displayName:"PlansSummary__PlanSummaryRow",componentId:"sc-8fd906a6-0"})`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px 0 60px;
  margin: 0 auto;
`,eu=a.default.div.withConfig({displayName:"PlansSummary__PlanSummaryInnerWrapper",componentId:"sc-8fd906a6-1"})`
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${(0,z.generateFluidPxScale)(16,64)};

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    grid-template-columns: 1fr;
    gap: 96px;
  }
`,eh=a.default.div.withConfig({displayName:"PlansSummary__PlanSummaryCard",componentId:"sc-8fd906a6-2"})`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 48px 32px 32px 32px;
`,ef=a.default.div.withConfig({displayName:"PlansSummary__CellItem",componentId:"sc-8fd906a6-3"})`
  display: flex;
  position: relative;
  margin-bottom: 10px;
`,ex=a.default.div.withConfig({displayName:"PlansSummary__ItemTick",componentId:"sc-8fd906a6-4"})`
  height: 20px;
  margin-right: 10px;
`,eg=a.default.div.withConfig({displayName:"PlansSummary__ItemText",componentId:"sc-8fd906a6-5"})`
  line-height: 18px;
  width: 100%;
  color: ${({theme:e})=>e.colors.WHITE};

  a {
    color: inherit;
    border-color: inherit;
  }
`,ey=a.default.div.withConfig({displayName:"PlansSummary__PrevPlan",componentId:"sc-8fd906a6-6"})`
  margin-bottom: 12px;

  strong {
    font-weight: ${({theme:e})=>e.fontWeight.SEMI_BOLD};
  }
`,eb=a.default.div.withConfig({displayName:"PlansSummary__PlanHeaderWrapper",componentId:"sc-8fd906a6-7"})`
  display: flex;
  flex-grow: 0;
`,ej=a.default.div.withConfig({displayName:"PlansSummary__FeatureSummary",componentId:"sc-8fd906a6-8"})`
  display: flex;
  flex-direction: column;
  padding: 0;
`,ew=a.default.ul.withConfig({displayName:"PlansSummary__Footnotes",componentId:"sc-8fd906a6-9"})`
  margin-top: 16px;
  padding-left: 0;
  list-style: none;
`,eC=a.default.li.withConfig({displayName:"PlansSummary__Footnote",componentId:"sc-8fd906a6-10"})`
  font-size: ${({theme:e})=>e.fontSize.SMALL};
  color: ${({theme:e})=>e.palette.fg1200};
  display: flex;
  align-items: flex-start;
  gap: 3px;
  opacity: 1 !important;

  span {
    opacity: 1 !important;
  }

  &:not(:first-child) {
    margin-top: 12px;
  }
`,ek=i.memo(function({summaryInfo:e}){return(0,t.jsx)(t.Fragment,{children:e.map((e,i)=>(0,t.jsxs)(ef,{children:[(0,t.jsx)(ex,{children:(0,t.jsx)(y.IconTick,{})}),(0,t.jsx)(eg,{children:e})]},`cell-item-${i}`))})}),ev=a.default.div.withConfig({displayName:"PlansSummary__PlanIllustration",componentId:"sc-8fd906a6-11"})`
  margin-bottom: 40px;
`,eI=i.memo(function(){return(0,t.jsx)(em,{children:(0,t.jsxs)(eu,{children:[(0,t.jsx)(ep,{children:Object.keys(O.Info).slice(0,2).map(e=>{let i=(0,G.default)(O.Info,e),n=F(e);return(0,t.jsxs)(eh,{children:[(0,t.jsx)(ev,{children:i.illustration}),(0,t.jsx)(eb,{children:(0,t.jsx)(ee,{plan:i})}),(0,t.jsxs)(ej,{children:[(0,t.jsx)(ey,{children:n?(0,t.jsxs)(t.Fragment,{children:["Everything in ",(0,t.jsx)("strong",{children:n}),", plus:"]}):"Features include:"}),i.summaryInfo&&(0,t.jsx)(ek,{summaryInfo:i.summaryInfo}),i.footnotes?(0,t.jsx)(ew,{children:i.footnotes.map((e,i)=>(0,t.jsx)(eC,{children:e},`footnote-${i}`))}):null]},e)]},e)})}),(0,t.jsx)(ep,{team:!0,children:Object.keys(O.Info).slice(2,4).map((e,i)=>{let n=(0,G.default)(O.Info,e),o=F(e);return(0,t.jsxs)(eh,{children:[0===i&&(0,t.jsx)(ec,{}),(0,t.jsx)(ev,{children:n.illustration}),(0,t.jsx)(eb,{children:(0,t.jsx)(ee,{plan:n})}),(0,t.jsxs)(ej,{children:[(0,t.jsx)(ey,{children:o?(0,t.jsxs)(t.Fragment,{children:["Everything in ",(0,t.jsx)("strong",{children:o}),", plus:"]}):"Features include:"}),n.summaryInfo&&(0,t.jsx)(ek,{summaryInfo:n.summaryInfo}),n.footnotes?(0,t.jsx)(ew,{children:n.footnotes.map((e,i)=>(0,t.jsx)(eC,{children:e},`footnote-${i}`))}):null]},e)]},e)})})]})})});var eP=e.i(273659),eS=e.i(165425);let e_="modal",eE="compute",eT=a.default.div.withConfig({displayName:"StickyTableHeader__GridHeader",componentId:"sc-29f1dc74-0"})`
  display: flex;
  position: relative;
  z-index: 3;
`,e$=(0,a.default)(u.Heading).withConfig({displayName:"StickyTableHeader__StyledHeading",componentId:"sc-29f1dc74-1"})`
  margin-bottom: 10px;
  text-align: center;
`,eN=a.default.div.withConfig({displayName:"StickyTableHeader__StickyTableWrapper",componentId:"sc-29f1dc74-2"})`
  display: flex;
  width: 100%;
  flex-direction: row;
`,eA=a.default.div.withConfig({displayName:"StickyTableHeader__StickyInnerWrapper",componentId:"sc-29f1dc74-3"})`
  display: flex;
  position: relative;
  margin: 0 auto;
  max-width: calc(${({theme:e})=>e.maxWidth.PAGE} + 64px);
  flex: 1 1;

  > * {
    width: 20%;
  }
`,eM=a.default.div.withConfig({displayName:"StickyTableHeader__Spacer",componentId:"sc-29f1dc74-4"})`
  display: flex;
  align-items: center;

  > * {
    opacity: 0;
    pointer-events: none;
    transition: opacity
      ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`};
  }
`,eO=a.default.div.withConfig({displayName:"StickyTableHeader__StickyPlanHeader",componentId:"sc-29f1dc74-5"})`
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
`,eF=(0,a.default)(eP.default).withConfig({displayName:"StickyTableHeader__StyledSticky",componentId:"sc-29f1dc74-6"})`
  display: flex;
  width: 100%;
  height: 122px;

  > div {
    display: flex;
    width: 100%;
  }

  .isSticky {
    ${eN} {
      width: calc(100% + 2px);
      left: -1px;
      position: absolute;
      top: var(--top, 80px);
      background: ${({theme:e})=>e.backgroundColor};
      border-bottom: 1px solid
        ${({theme:e})=>(0,ei.gridColorSelector)(e,"major")};
      border-left: 1px solid ${({theme:e})=>(0,ei.gridColorSelector)(e,"major")};
      border-right: 1px solid
        ${({theme:e})=>(0,ei.gridColorSelector)(e,"major")};
      overflow-x: clip;

      box-shadow:
        0 0 0 1px rgba(0 0 0 / 0.32),
        0 4px 6px -2px rgba(0 0 0 / 0.12),
        0 8px 12px -4px rgba(0 0 0 / 0.12);

      &::after {
        content: '';
        position: absolute;
        inset: 0;
        background-image: ${({theme:e})=>e.paperTextureCssVars.img};
        background-size: ${({theme:e})=>e.paperTextureCssVars.size};
        mix-blend-mode: ${({theme:e})=>e.paperTextureCssVars.mixBlendMode};
        opacity: ${({theme:e})=>e.paperTextureCssVars.opacity};
        pointer-events: none;
      }

      @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
        top: 76px;
      }
    }

    ${eM} {
      > * {
        opacity: 1;
      }
    }
  }
`,eL=i.memo(function(){let e=(0,a.useTheme)(),i=(0,q.default)(e.mediaQueryString.LARGE),{navHeight:n,gridlineHeight:o}=(0,eS.useHeaderUI)();return(0,t.jsx)(eT,{children:(0,t.jsx)(eF,{stickyClassName:"isSticky",children:(0,t.jsx)(eN,{style:{"--top":n+o+"px"},children:(0,t.jsxs)(eA,{children:[(0,t.jsx)(eM,{children:(0,t.jsxs)(u.Heading,{renderAs:"h4",children:["Compare",(0,t.jsx)("br",{}),"plan features:"]})}),Object.keys(O.Info).map(e=>{let n=(0,G.default)(O.Info,e);return(0,t.jsxs)(eO,{children:[(0,t.jsx)(e$,{renderAs:i?"h4":"h3",children:n.title}),(0,t.jsx)(W.Button,{href:n.ctaLink,size:"small",stylez:n.buttonStyle||"default",text:n.ctaText,trackingLabel:n.trackingLabel})]},e)})]})})})})}),eH=(0,a.default)(h.TronDivider).withConfig({displayName:"PlansBrowserView__StyledTronDivider",componentId:"sc-1b39664a-0"})`
  & {
    margin-bottom: 0;
  }
`,eD=(0,a.default)(eH).withConfig({displayName:"PlansBrowserView__FlippedTronDivider",componentId:"sc-1b39664a-1"})`
  transform: rotateX(180deg);
`,eU=a.default.div.withConfig({displayName:"PlansBrowserView__ComparisonWrapper",componentId:"sc-1b39664a-2"})`
  padding-top: 40px;
`,eB=a.default.div.withConfig({displayName:"PlansBrowserView__InnerWrapper",componentId:"sc-1b39664a-3"})`
  display: flex;
  max-width: calc(${({theme:e})=>e.maxWidth.PAGE} + 64px);
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;
  box-sizing: content-box;
`,eR=a.default.div.withConfig({displayName:"PlansBrowserView__BrowserGrid",componentId:"sc-1b39664a-4"})`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 60px 0 100px;
`,eG=a.default.div.withConfig({displayName:"PlansBrowserView__GridContent",componentId:"sc-1b39664a-5"})`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  gap: 30px;
`,ez=a.default.div.withConfig({displayName:"PlansBrowserView__GridSection",componentId:"sc-1b39664a-6"})`
  display: flex;
  flex-direction: column;
`,eW=a.default.div.withConfig({displayName:"PlansBrowserView__FeatureComparisonGrid",componentId:"sc-1b39664a-7"})`
  padding: 0px;
  display: flex;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    bottom: 0;
    left: -100vw;
    right: -100vw;
    background: ${({theme:e})=>e.highlightColor};
    opacity: 0;
    transition: opacity
      ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`};
    pointer-events: none;
  }

  &:hover::after {
    opacity: 0.1;
  }

  > * {
    width: 20%;
    padding: 12px 10px;

    &:first-child {
      padding-left: 0px;
    }
  }
`,eq=(0,a.default)(u.Heading).withConfig({displayName:"PlansBrowserView__StyledH2",componentId:"sc-1b39664a-8"})`
  position: relative;

  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 3px;
    width: 240px;
    bottom: -10px;
    height: 1px;
    background-color: ${({theme:e})=>e.borderColor.DEFAULT};
  }
`,eV=i.memo(function({customerBanner:e}){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(eB,{children:(0,t.jsx)(eI,{})}),e,(0,t.jsx)(eH,{}),(0,t.jsxs)(eU,{children:[(0,t.jsx)(eB,{children:(0,t.jsx)(eq,{renderAs:"h2",children:"Compare plan features"})}),(0,t.jsxs)(eR,{children:[(0,t.jsx)(eL,{}),(0,t.jsx)(eB,{children:(0,t.jsx)(eG,{children:O.Sections.map((e,i)=>(0,t.jsxs)(ez,{children:[(0,t.jsx)(eK,{renderAs:"h4",children:e.title}),(0,t.jsx)("div",{children:e.rows.map((e,i)=>(0,t.jsxs)(eW,{children:[(0,t.jsx)(g,{$hasTooltip:void 0!==e.tooltip,children:void 0!==e.tooltip?(0,t.jsx)("span",{"data-tooltip-html":`${e.tooltip}${e.tooltipCTA?`<br /><a${e.tooltipCTA.startsWith("#")?"":' target="_blank"'} href="${e.tooltipCTA}">Learn more</a>`:""}`,"data-tooltip-id":"tooltip","data-tooltip-place":"right",children:e.label}):(0,t.jsx)("span",{children:e.label})}),(0,t.jsx)(R,{data:e.Community}),(0,t.jsx)(R,{data:e.Professional}),(0,t.jsx)(R,{data:e.Team}),(0,t.jsx)(R,{data:e.Enterprise})]},i))})]},i))})})]})]}),(0,t.jsx)(eD,{})]})});var eK=(0,a.default)(u.Heading).withConfig({displayName:"PlansBrowserView___StyledHeading",componentId:"sc-1b39664a-9"})`
                          margin-bottom: 10px;
                        `,eQ=e.i(160191),eY=e.i(946217),eX=e.i(898892);let eZ=a.default.div.withConfig({displayName:"UniquePlanItems__UniqueItemsSection",componentId:"sc-7241943f-0"})`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  &:first-child {
    padding: 0;
    margin: 0;
    border: none;
  }
`,eJ=a.default.div.withConfig({displayName:"UniquePlanItems__Rows",componentId:"sc-7241943f-1"})`
  display: flex;
  flex-direction: column;
`,e0=a.default.div.withConfig({displayName:"UniquePlanItems__Row",componentId:"sc-7241943f-2"})`
  display: flex;
  padding: 5px 0;
  position: relative;
`,e1=a.default.div.withConfig({displayName:"UniquePlanItems__TitleCell",componentId:"sc-7241943f-3"})`
  line-height: 18px;

  &:first-child {
    width: auto;
    flex: 1 1 0;
  }

  &:not(:first-child) {
    padding-left: 15px;
    width: auto;
    flex: 1.75 1 0;
  }
`,e2=i.memo(function({prevPlan:e,thisPlan:n}){let o=(0,i.useCallback)((e,t)=>e.filter(e=>{let i=(0,eQ.default)(t,t=>t.text===e.text||t.tick===e.tick);return(0,eY.default)(i)}),[]);return(0,t.jsx)("div",{children:O.Sections.map((i,r)=>((e,t,i)=>{for(let n=0;n<e.rows.length;n++){let o=e.rows[n],r=(0,G.default)(o,t),a=(0,G.default)(o,i);if(!(0,eX.default)(r,a))return!0}return!1})(i,n,e)?(0,t.jsxs)(eZ,{children:[(0,t.jsx)(e6,{renderAs:"h4",children:i.title}),(0,t.jsx)(eJ,{children:i.rows.map((i,a)=>{let l=(0,G.default)(i,n),s=(0,G.default)(i,e),d=1===l.length?l:o(l,s),c=""!==e&&!(0,eX.default)(l,s);return(!e||c)&&(e=>{for(let t=0;t<e.length;t++)if(e[t].tick||e[t].text)return!0;return!1})(l)?(0,t.jsxs)(e0,{children:[(0,t.jsx)(e1,{children:i.label}),(0,t.jsx)(R,{data:d},r)]},a):null})})]},r):null)})});var e6=(0,a.default)(u.Heading).withConfig({displayName:"UniquePlanItems___StyledHeading",componentId:"sc-7241943f-4"})`
                  margin-bottom: 10px;
                `;let e3=a.default.div.withConfig({displayName:"PlansMobileView__Divider",componentId:"sc-fc8b0068-0"})`
  display: none;
  position: absolute;
  height: 1px;
  inset: -1px 0 auto 0;
  border-top: 1px dashed ${({theme:e})=>(0,ei.gridColorSelector)(e,"major")};
`,e4=a.default.div.withConfig({displayName:"PlansMobileView__MobilePlanDetailsWrapper",componentId:"sc-fc8b0068-1"})`
  position: relative;
  padding: 32px 24px 16px 24px;

  & + & {
    ${e3} {
      display: block;
    }
  }
`,e5=a.default.div.withConfig({displayName:"PlansMobileView__AccentT",componentId:"sc-fc8b0068-2"})`
  position: absolute;
  height: 16px;
  background-color: ${({theme:e})=>e.palette.fg1200};
  width: 1px;
  inset: -8px auto auto -1px;

  &::after {
    content: '';
    position: absolute;
    height: 1px;
    background-color: ${({theme:e})=>e.palette.fg1200};
    width: 9px;
    top: 50%;
    left: 0px;
    transform: translateY(-50%);
  }

  &[data-right] {
    inset: -8px -1px auto auto;
    &::after {
      left: auto;
      right: 0px;
    }
  }
`,e9=a.default.div.withConfig({displayName:"PlansMobileView__SeeAllFeatures",componentId:"sc-fc8b0068-3"})`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  text-decoration: underline;

  svg {
    margin-left: 6px;
  }

  ${({$expanded:e})=>e&&a.css`
      background-color: ${({theme:e})=>e.highlightColor20};

      svg {
        transform: rotate(90deg);
      }
    `};
`,e8=a.default.div.withConfig({displayName:"PlansMobileView__InnerMobilePlanDetails",componentId:"sc-fc8b0068-4"})`
  padding-top: 20px;

  > p {
    margin-bottom: 15px;
    color: ${({theme:e})=>e.colors.WHITE};
  }
`,e7=a.default.div.withConfig({displayName:"PlansMobileView__PlanIllustrationWrapper",componentId:"sc-fc8b0068-5"})`
  margin-bottom: 16px;
`,te=i.memo(function({which:e,highlight:n}){let[o,r]=(0,i.useState)(!1),a=(0,G.default)(O.Info,e),l=F(e),s=(0,i.useCallback)(()=>{r(!o)},[r,o]);return(0,t.jsxs)(e4,{children:[(0,t.jsxs)(e3,{children:[(0,t.jsx)(e5,{}),(0,t.jsx)(e5,{"data-right":!0})]}),n&&(0,t.jsx)(ec,{}),(0,t.jsx)(e7,{children:a.illustration}),(0,t.jsx)(ee,{plan:a},e),(0,t.jsxs)(e9,{$expanded:o,onClick:s,children:[o?"Hide":"See"," all ",e," features",(0,t.jsx)(y.IconChevronRight,{})]}),o&&(0,t.jsxs)(e8,{children:[l&&(0,t.jsxs)("p",{children:["Everything in ",(0,t.jsx)("strong",{children:l}),", plus..."]}),(0,t.jsx)(e2,{prevPlan:l,thisPlan:a.title})]})]})}),tt=i.memo(function(){return(0,t.jsxs)("div",{children:[(0,t.jsx)(ep,{team:!0,children:Object.keys(O.Info).slice(2,4).map((e,i)=>(0,t.jsx)(te,{highlight:0===i,which:e},e))}),(0,t.jsx)(ep,{children:Object.keys(O.Info).slice(0,2).map(e=>(0,t.jsx)(te,{which:e},e))})]})});var ti=e.i(430388);let tn=a.default.div.withConfig({displayName:"Modal__ModalWrapper",componentId:"sc-c6dd2306-0"})`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999999999;

  ${({$isOpen:e})=>e?"display: block;":"display: none;"};
`,to=a.default.div.withConfig({displayName:"Modal__ModalInner",componentId:"sc-c6dd2306-1"})`
  position: fixed;
  background: ${({theme:e})=>e.colors.BLACK};
  border: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
  box-shadow:
    0 4px 4px rgba(0, 0, 0, 0.25),
    0 0 54px ${({theme:e})=>e.colors.BLACK},
    0 0 50px ${({theme:e})=>e.borderColor.DEFAULT};
  width: 80%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  min-height: 250px;
  padding: 60px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    padding: 40px 30px;
  }

  ${({$maxWidth:e})=>e&&`max-width: ${e}px`};
`,tr=a.default.div.withConfig({displayName:"Modal__ModalBackground",componentId:"sc-c6dd2306-2"})`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
`,ta=a.default.div.withConfig({displayName:"Modal__ModalBody",componentId:"sc-c6dd2306-3"})``,tl=a.default.div.withConfig({displayName:"Modal__CloseButton",componentId:"sc-c6dd2306-4"})`
  position: absolute;
  top: 10px;
  right: 10px;
`,ts=i.memo(({children:e,className:i,onClose:n,isOpen:o,maxWidth:r=600})=>(0,t.jsxs)(tn,{$isOpen:o,className:i,children:[(0,t.jsxs)(to,{$maxWidth:r,children:[(0,t.jsx)(tl,{children:(0,t.jsx)(W.Button,{icon:(0,t.jsx)(ti.CloseIcon,{}),size:"small",stylez:"minimal",onClick:n})}),(0,t.jsx)(ta,{children:e})]}),(0,t.jsx)(tr,{onClick:n})]}));ts.displayName="Modal";var td=e.i(134700),tc=e.i(637804),tp=e.i(991709);let tm=[{question:"How does the free trial work?",id:"faq-free-trial",answer:"Anyone can try the Hex Team plan free for 14 days, no payment card required. At the end of your trial you can choose to continue on a paid plan. If you do nothing, you'll be downgraded to the free Community plan and lose access to premium features."},{question:"How do I cancel or change my plan?",id:"faq-cancel-change-plan",answer:"Professional and Team customers can cancel or change their plan anytime from Settings > Manage Plan. If you cancel, you will still have access to your paid plan until the end of your billing period. If you upgrade or downgrade, the change will apply right away and you’ll be charged or credited for the remainder of your billing cycle.  Enterprise customers can manage renewals and cancellations with their account representative."},{question:"How do you handle security and compliance?",id:"faq-security-compliance",answer:(0,t.jsxs)("div",{children:["We are audited annually for SOC 2 Type II and HIPAA compliance and are dedicated to safeguarding your data. Learn more"," ",(0,t.jsx)(tc.SiteLink,{href:"https://trust.hex.tech/",children:"here"}),"."]})},{question:"How do credits work?",id:"faq-credits",answer:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:"AI features in Hex consume credits based on the effort required to complete the task. All paid plans include a credit grant, with the option to purchase add-on credits."}),(0,t.jsx)("span",{children:"Professional and Team plans include monthly per-seat credit grants that are assigned to each paid user, refresh monthly and don't roll over. Enterprise plan credit grants are custom as specified on your order form."}),(0,t.jsxs)("span",{children:["See our docs"," ",(0,t.jsx)(tc.SiteLink,{href:"https://learn.hex.tech/docs/administration/credits",children:"article"})," ","for more info."]})]})},{question:"Do you have a discount for students and educators?",id:"faq-education-discount",answer:(0,t.jsxs)("div",{children:["Yes! Students and educators at universities and bootcamps can access the Hex Professional Plan for free. Contact"," ",(0,t.jsx)(tc.SiteLink,{href:"mailto:support@hex.tech",children:"support@hex.tech"})," for details."]})},{question:"Do you have a discount for non-profits?",id:"faq-nonprofit-discount",answer:(0,t.jsxs)("div",{children:["Yes - we have a discounted program for qualified non-profits - write to"," ",(0,t.jsx)(tc.SiteLink,{href:"mailto:support@hex.tech",children:"support@hex.tech"})," to see if you qualify."]})}],tu=(0,r.default)(()=>e.A(77154).then(e=>e.Tooltip),{loadableGenerated:{modules:[66415]},ssr:!1}),th=(0,a.default)(o.motion.div).withConfig({displayName:"PricingPageContent__Wrapper",componentId:"sc-7e7c811-0"})`
  width: 100%;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    padding: 0 20px;
  }
`,tf=a.default.div.withConfig({displayName:"PricingPageContent__Inner",componentId:"sc-7e7c811-1"})`
  max-width: ${({theme:e})=>e.maxWidth.PAGE};
  margin: 0 auto 40px;
  padding: 0 16px;
  box-sizing: content-box;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    width: 100%;
    padding: 0;
    margin-left: 0;
    margin-bottom: 80px;
    margin-top: 32px;
  }
`,tx=(0,a.default)(u.Heading).withConfig({displayName:"PricingPageContent__StyledHeadingWithBorder",componentId:"sc-7e7c811-2"})`
  margin-bottom: 10px;
`,tg=a.default.div.withConfig({displayName:"PricingPageContent__ComputeHeader",componentId:"sc-7e7c811-3"})`
  margin-bottom: 20px;
`,ty=(0,a.default)(u.Heading).withConfig({displayName:"PricingPageContent__ComputeH2",componentId:"sc-7e7c811-4"})`
  margin-bottom: 10px;
`,tb=a.default.p.withConfig({displayName:"PricingPageContent__SmallParagraph",componentId:"sc-7e7c811-5"})`
  font-size: ${({theme:e})=>e.fontSize.SMALL};
  line-height: 18px;
`;e.s(["PricingPageContent",0,({customerBannerData:e})=>{let o=(0,a.useTheme)(),r=(0,q.default)(o.mediaQueryString.MEDIUM),[d,p]=(0,n.useQueryParamString)(e_,""),u=(0,i.useCallback)(()=>{p(eE)},[p]),h=(0,i.useCallback)(()=>{p((0,n.getQueryParams)()[e_]?"":eE)},[p]);return(0,t.jsxs)(m,{value:u,children:[(0,t.jsxs)(ts,{isOpen:d===eE,maxWidth:640,onClose:h,children:[(0,t.jsxs)(tg,{children:[(0,t.jsx)(ty,{renderAs:"h2",children:"Compute profiles"}),(0,t.jsxs)("p",{children:["Medium compute is included on all paid plans. Team and Enterprise can opt in to pay-as-you-go compute for advanced data science use cases."," ",(0,t.jsx)(tc.SiteLink,{href:"https://learn.hex.tech/docs/explore-data/projects/environment-configuration/environment-views#size",children:"Learn more"}),"."]})]}),(0,t.jsx)(c,{}),(0,t.jsx)(tb,{children:"*Billed per minute of usage. Free trials are limited to Medium compute."})]}),(0,t.jsxs)(td.V1PageWrapper,{children:[(0,t.jsxs)(th,{...tp.ANIMATIONS.SimpleFadeIn,children:[(0,t.jsxs)(tf,{children:[(0,t.jsx)(tx,{renderAs:"h1",children:"Pricing"}),(0,t.jsxs)("p",{children:["Choose the right plan for you and your team. Don't know what you need?"," ",(0,t.jsx)(tc.SiteLink,{href:f.INTERNAL_LINKS.RequestADemo,children:"Get in touch."})]})]}),r?(0,t.jsx)(tt,{}):(0,t.jsx)(eV,{customerBanner:(0,t.jsx)(l.CustomerBanner,{data:e})}),(0,t.jsx)(s.FAQ,{items:tm})]}),(0,t.jsx)(tu,{className:"toolTip",clickable:!0,id:"tooltip"})]})]})}],346465)},195200,(e,t,i)=>{var n=e.r(666305),o=e.r(351095),r=e.r(33679);t.exports=function(e){return function(t,i,a){var l=Object(t);if(!o(t)){var s=n(i,3);t=r(t),i=function(e){return s(l[e],e,l)}}var d=e(t,i,a);return d>-1?l[s?t[d]:d]:void 0}}},356445,(e,t,i)=>{t.exports=function(e,t,i,n){for(var o=e.length,r=i+(n?1:-1);n?r--:++r<o;)if(t(e[r],r,e))return r;return -1}},748891,(e,t,i)=>{var n=/\s/;t.exports=function(e){for(var t=e.length;t--&&n.test(e.charAt(t)););return t}},830364,(e,t,i)=>{var n=e.r(748891),o=/^\s+/;t.exports=function(e){return e?e.slice(0,n(e)+1).replace(o,""):e}},946217,(e,t,i)=>{var n=e.r(627048),o=e.r(367426),r=e.r(473250),a=e.r(45350),l=e.r(351095),s=e.r(356956),d=e.r(763996),c=e.r(3023),p=Object.prototype.hasOwnProperty;t.exports=function(e){if(null==e)return!0;if(l(e)&&(a(e)||"string"==typeof e||"function"==typeof e.splice||s(e)||c(e)||r(e)))return!e.length;var t=o(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(d(e))return!n(e).length;for(var i in e)if(p.call(e,i))return!1;return!0}},773759,(e,t,i)=>{var n=e.r(830364),o=e.r(12447),r=e.r(361884),a=0/0,l=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,d=/^0o[0-7]+$/i,c=parseInt;t.exports=function(e){if("number"==typeof e)return e;if(r(e))return a;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var i=s.test(e);return i||d.test(e)?c(e.slice(2),i?2:8):l.test(e)?a:+e}},382560,(e,t,i)=>{var n=e.r(773759),o=1/0;t.exports=function(e){return e?(e=n(e))===o||e===-o?(e<0?-1:1)*17976931348623157e292:e==e?e:0:0===e?e:0}},304653,(e,t,i)=>{var n=e.r(382560);t.exports=function(e){var t=n(e),i=t%1;return t==t?i?t-i:t:0}},426965,(e,t,i)=>{var n=e.r(356445),o=e.r(666305),r=e.r(304653),a=Math.max;t.exports=function(e,t,i){var l=null==e?0:e.length;if(!l)return -1;var s=null==i?0:r(i);return s<0&&(s=a(l+s,0)),n(e,o(t,3),s)}},160191,(e,t,i)=>{t.exports=e.r(195200)(e.r(426965))},828783,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.unlisten=i.listen=void 0;let n=[],o=[];i.listen=function(e,t,i){for(let r=0,a=t.length;r<a;r+=1)!function(e,t,i){let r=n.indexOf(e);-1===r&&(r=n.length,n.push(e),o.push({el:e,callbacks:{},realCallbacks:{},realListenersCnt:0})),!function(e,t,i){if(e.callbacks[t]){-1===e.callbacks[t].indexOf(i)&&e.callbacks[t].push(i);return}e.callbacks[t]=[i],e.realCallbacks[t]=i=>{for(let n=0,o=e.callbacks[t].length;n<o;n+=1)e.callbacks[t][n](i)},e.el.addEventListener(t,e.realCallbacks[t]),e.realListenersCnt+=1}(o[r],t,i)}(e,t[r],i)},i.unlisten=function(e,t,i){for(let r=0,a=t.length;r<a;r+=1)!function(e,t,i){let r=n.indexOf(e);if(-1===r)return;let a=o[r];!function(e,t,i){if(!e.callbacks[t])return;let n=e.callbacks[t].indexOf(i);-1===n||(e.callbacks[t].splice(n,1),e.callbacks[t].length>0||(e.el.removeEventListener(t,e.realCallbacks[t]),delete e.callbacks[t],delete e.realCallbacks[t],e.realListenersCnt-=1))}(a,t,i),a.realListenersCnt>0||(n.splice(r,1),o.splice(r,1))}(e,t[r],i)}},518196,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});let n={};"u">typeof document&&(n.body=document.body,n.window=window,n.document=document);let o=(()=>{if("u">typeof document&&document.body){let e=document.body;return"function"==typeof e.matches?"matches":"function"==typeof e.webkitMatchesSelector?"webkitMatchesSelector":"function"==typeof e.mozMatchesSelector?"mozMatchesSelector":"function"==typeof e.msMatchesSelector?"msMatchesSelector":"function"==typeof e.oMatchesSelector?"oMatchesSelector":null}return null})();i.default=function(e,t){if(!e)return null;if(n.hasOwnProperty(e))return n[e];if("#"===e[0])return document.getElementById(e.slice(1));if(null===o)return null;let i=t;for(;i=i.parentElement;)if(i[o](e))return i||null;return null}},432404,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){do{let t=window.getComputedStyle(e);if("none"!==t.transform||"none"!==t.webkitTransform)return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType)return null}},533157,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.isIntersecting=i.getRect=i.infiniteRect=void 0,i.infiniteRect={top:-1/0,bottom:1/0,height:1/0,left:-1/0,right:1/0,width:1/0},i.getRect=function(e){return e&&"getBoundingClientRect"in e&&"function"==typeof e.getBoundingClientRect?e.getBoundingClientRect():e===window||e===document?{top:0,left:0,bottom:window.innerHeight,height:window.innerHeight,width:window.innerWidth,right:window.innerWidth}:{top:0,left:0,right:0,bottom:0,width:0,height:0}},i.isIntersecting=function(e,t,i,n){let o=e.top+i,r=e.bottom+n;return o>=t.top&&o<=t.bottom||r>=t.top&&r<=t.bottom||r>=t.bottom&&o<=t.top}},9595,(e,t,i)=>{"use strict";var n=e.e&&e.e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(i,"__esModule",{value:!0});let o=e.r(271645),r=e.r(828783),a=n(e.r(518196)),l=n(e.r(432404)),s=e.r(533157);class d extends o.Component{constructor(){super(...arguments),this.holderEl=null,this.wrapperEl=null,this.el=null,this.scrollEl=null,this.boundaryEl=null,this.disabled=!1,this.checkPositionIntervalId=null,this.lastMinHeight=null,this.state={isFixed:!1,wrapperStyles:void 0,holderStyles:void 0,height:0},this.holderRef=e=>{e!==this.holderEl&&(this.holderEl=e)},this.wrapperRef=e=>{e!==this.wrapperEl&&(this.wrapperEl=e,this.updateScrollEl(),this.updateBoundaryEl())},this.checkPosition=()=>{let e,{holderEl:t,wrapperEl:i,boundaryEl:n,scrollEl:o,disabled:r}=this;if(!o||!t||!i)return void console.error("Missing required elements:",{scrollEl:o,holderEl:t,wrapperEl:i});let{mode:a,onFixedToggle:d,offsetTransforms:c,isIOSFixEnabled:p,dontUpdateHolderHeightWhenSticky:m}=this.props;if(r){this.state.isFixed&&this.setState({isFixed:!1,wrapperStyles:{}});return}if(!t.getBoundingClientRect||!i.getBoundingClientRect)return;let u=t.getBoundingClientRect(),h=i.getBoundingClientRect(),f=n?(0,s.getRect)(n):s.infiniteRect,x=(0,s.getRect)(o),g=this.isFixed(u,h,f,x),y=null;if(c&&g&&o instanceof HTMLElement){let e=(0,l.default)(o);e&&(y=(0,s.getRect)(e))}let b=this.state.isFixed&&m&&this.lastMinHeight?this.lastMinHeight:h.height;this.lastMinHeight=b;let j=p?{transform:"translateZ(0)",WebkitTransform:"translateZ(0)"}:void 0,w={isFixed:g,height:h.height,holderStyles:{minHeight:`${b}px`},wrapperStyles:g?Object.assign(Object.assign({},j),(e=this.props,("top"===a?(e,t)=>{let{bottomOffset:i,hideOnBoundaryHit:n}=t,{top:o,height:r,width:a,boundaryBottom:l}=e;return n||o+r+i<l?{top:`${o}px`,width:`${a}px`,position:"fixed"}:!n&&l>0?{top:`${l-r-i}px`,width:`${a}px`,position:"fixed"}:{width:`${a}px`,bottom:`${i}px`,position:"absolute"}}:(e,t)=>{let{bottomOffset:i,hideOnBoundaryHit:n}=t,{bottom:o,height:r,width:a,boundaryTop:l}=e;return n||o-r-i>l?{width:`${a}px`,top:`${o-r}px`,position:"fixed"}:{width:`${a}px`,top:`${i}px`,position:"absolute"}})({boundaryTop:"bottom"===a?f.top:0,boundaryBottom:"top"===a?f.bottom:0,top:"top"===a?x.top-(y?y.top:0):0,bottom:"bottom"===a?x.bottom-(y?y.bottom:0):0,width:u.width,height:h.height},e))):j};g!==this.state.isFixed&&d&&"function"==typeof d&&d(g),((e,t)=>{let i=e.wrapperStyles,n=t.wrapperStyles;if(e.isFixed!==t.isFixed||e.height!==t.height||!i&&n||i&&!n)return!1;if(!n)return!0;for(let e in i)if(i.hasOwnProperty(e)&&i[e]!==n[e])return!1;return!0})(this.state,w)||this.setState(w)}}isFixed(e,t,i,n){let{hideOnBoundaryHit:o,bottomOffset:r,topOffset:a,mode:l}=this.props;if(this.disabled||o&&i&&!(0,s.isIntersecting)(i,n,a,r))return!1;let d=o?t.height+r:0;return"top"===l?e.top+a<n.top&&n.top+d<=i.bottom:e.bottom-a>n.bottom&&n.bottom-d>=i.top}updateScrollEl(){if(!this.wrapperEl)return;this.scrollEl&&((0,r.unlisten)(this.scrollEl,["scroll"],this.checkPosition),this.scrollEl=null);let{scrollElement:e}=this.props;"string"==typeof e?this.scrollEl=(0,a.default)(e,this.wrapperEl):this.scrollEl=e,this.scrollEl?(0,r.listen)(this.scrollEl,["scroll"],this.checkPosition):console.error("Cannot find scrollElement "+("string"==typeof e?e:"unknown"))}updateBoundaryEl(){if(!this.wrapperEl)return;let{boundaryElement:e}=this.props;this.boundaryEl=(0,a.default)(e,this.wrapperEl),(this.boundaryEl===window||this.boundaryEl===document)&&(this.boundaryEl=null)}initialize(){let{positionRecheckInterval:e,disabled:t}=this.props;this.disabled=t,(0,r.listen)(window,["scroll","resize","pageshow","load"],this.checkPosition),this.checkPosition(),e&&(this.checkPositionIntervalId=setInterval(this.checkPosition,e))}componentDidUpdate({scrollElement:e,boundaryElement:t,disabled:i}){(e!==this.props.scrollElement||null===this.scrollEl)&&this.updateScrollEl(),(t!==this.props.boundaryElement||null===this.boundaryEl)&&this.updateBoundaryEl(),i!==this.props.disabled&&(this.disabled=this.props.disabled,this.checkPosition())}componentDidMount(){this.initialize(),null===this.wrapperEl&&console.error("Wrapper element is missing, please make sure that you have assigned refs correctly")}componentWillUnmount(){this.scrollEl&&(0,r.unlisten)(this.scrollEl,["scroll"],this.checkPosition),(0,r.unlisten)(window,["scroll","resize","pageshow","load"],this.checkPosition),this.boundaryEl=null,this.scrollEl=null,this.checkPositionIntervalId&&clearInterval(this.checkPositionIntervalId)}render(){let{holderRef:e,wrapperRef:t}=this,{isFixed:i,wrapperStyles:n,holderStyles:o}=this.state;return this.props.children({holderRef:e,wrapperRef:t,isFixed:i,wrapperStyles:n,holderStyles:o})}}d.defaultProps={mode:"top",topOffset:0,bottomOffset:0,isIOSFixEnabled:!0,offsetTransforms:!0,disabled:!1,onFixedToggle:void 0,boundaryElement:void 0,hideOnBoundaryHit:!0,scrollElement:"window",dontUpdateHolderHeightWhenSticky:!1},i.default=d},184301,(e,t,i)=>{"use strict";var n=e.e&&e.e.__rest||function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(i[n[o]]=e[n[o]]);return i},o=e.e&&e.e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(i,"__esModule",{value:!0}),i.defaultProps=void 0;let r=o(e.r(271645)),a=o(e.r(9595));i.defaultProps=Object.assign(Object.assign({},a.default.defaultProps),{stickyClassName:"sticky",wrapperClassName:"",stickyStyle:{}}),i.default=function(e){let t=Object.assign(Object.assign({},i.defaultProps),e),{mode:o,onFixedToggle:l,hideOnBoundaryHit:s,offsetTransforms:d,disabled:c,boundaryElement:p,scrollElement:m,bottomOffset:u,topOffset:h,positionRecheckInterval:f,children:x,isIOSFixEnabled:g,dontUpdateHolderHeightWhenSticky:y,wrapperClassName:b,stickyClassName:j,stickyStyle:w}=t,C=n(t,["mode","onFixedToggle","hideOnBoundaryHit","offsetTransforms","disabled","boundaryElement","scrollElement","bottomOffset","topOffset","positionRecheckInterval","children","isIOSFixEnabled","dontUpdateHolderHeightWhenSticky","wrapperClassName","stickyClassName","stickyStyle"]);return r.default.createElement(a.default,{mode:o,onFixedToggle:l,hideOnBoundaryHit:s,offsetTransforms:d,disabled:c,boundaryElement:p,scrollElement:m,bottomOffset:u,topOffset:h,positionRecheckInterval:f,isIOSFixEnabled:g,dontUpdateHolderHeightWhenSticky:y},({isFixed:e,wrapperStyles:t,wrapperRef:i,holderStyles:n,holderRef:o})=>r.default.createElement("div",Object.assign({},C,{ref:o,style:n}),r.default.createElement("div",Object.assign({},C,{className:`${b} ${e?j:""}`,style:e?Object.assign(Object.assign({},t),w):t,ref:i}),x)))}},273659,(e,t,i)=>{"use strict";var n=e.e&&e.e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(i,"__esModule",{value:!0}),i.RenderPropSticky=void 0,i.RenderPropSticky=n(e.r(9595)).default,i.default=n(e.r(184301)).default}]);