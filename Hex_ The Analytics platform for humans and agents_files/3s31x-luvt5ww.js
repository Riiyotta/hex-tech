(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,258591,e=>{"use strict";var t=e.i(843476),o=e.i(271645),i=e.i(997053);let a=i.css`
  font-family: ${({theme:e})=>e.fontFamily.DISPLAY};
  color: ${({theme:e})=>e.fontColor.LOUD};
  font-weight: ${({theme:e})=>e.fontWeight.h0};
  line-height: ${({theme:e})=>e.lineHeight.h};
  letter-spacing: ${({theme:e})=>e.letterSpacing.h0};
  font-size: ${({theme:e})=>e.fontSize.h0};
`,r=i.css`
  font-family: ${({theme:e})=>e.fontFamily.DISPLAY};
  color: ${({theme:e})=>e.fontColor.LOUD};
  font-weight: ${({theme:e})=>e.fontWeight.h1};
  line-height: ${({theme:e})=>e.lineHeight.h};
  letter-spacing: ${({theme:e})=>e.letterSpacing.h1};
  font-size: ${({theme:e})=>e.fontSize.h1};
`,n=i.css`
  font-family: ${({theme:e})=>e.fontFamily.HEADING};
  color: ${({theme:e})=>e.fontColor.LOUD};
  font-weight: ${({theme:e})=>e.fontWeight.h2};
  line-height: ${({theme:e})=>e.lineHeight.h};
  letter-spacing: ${({theme:e})=>e.letterSpacing.h2};
  font-size: ${({theme:e})=>e.fontSize.h2};
`,s=i.css`
  font-family: ${({theme:e})=>e.fontFamily.HEADING};
  color: ${({theme:e})=>e.fontColor.LOUD};
  font-weight: ${({theme:e})=>e.fontWeight.h3};
  line-height: ${({theme:e})=>e.lineHeight.h};
  letter-spacing: ${({theme:e})=>e.letterSpacing.h3};
  font-size: ${({theme:e})=>e.fontSize.h3};
`,l=i.css`
  font-family: ${({theme:e})=>e.fontFamily.HEADING};
  color: ${({theme:e})=>e.fontColor.LOUD};
  font-weight: ${({theme:e})=>e.fontWeight.h4};
  line-height: ${({theme:e})=>e.lineHeight.h};
  letter-spacing: ${({theme:e})=>e.letterSpacing.h4};
  font-size: ${({theme:e})=>e.fontSize.h4};
`,c=i.css`
  font-family: ${({theme:e})=>e.fontFamily.SANS};
  color: ${({theme:e})=>e.fontColor.MUTED};
  text-transform: uppercase;
  font-weight: ${({theme:e})=>e.fontWeight.h5};
  line-height: ${({theme:e})=>e.lineHeight.h5};
  letter-spacing: ${({theme:e})=>e.letterSpacing.h5};
  font-size: ${({theme:e})=>e.fontSize.h5};
`,d=i.css`
  color: ${({theme:e})=>e.fontColor.MUTED};
  font-family: ${({theme:e})=>e.fontFamily.MONO};
  font-weight: ${({theme:e})=>e.fontWeight.h6};
  line-height: ${({theme:e})=>e.lineHeight.h6};
  letter-spacing: ${({theme:e})=>e.letterSpacing.h6};
  font-size: ${({theme:e})=>e.fontSize.h6};
  text-transform: uppercase;
`,u=i.default.h1.withConfig({displayName:"Heading__HeadingInternal",componentId:"sc-b33f802a-0"})`
  margin: 0;
  ${({$styleVariant:e})=>(function(e){switch(e){case"h0":return a;case"h1":default:return r;case"h2":return n;case"h3":return s;case"h4":return l;case"h5":return c;case"h6":return d}})(e)}
`;var g=(0,i.default)(u).withConfig({displayName:"Heading___StyledHeadingInternal",componentId:"sc-b33f802a-1"})`${e=>e.$_css}`;let p=o.forwardRef(function({children:e,css:o,id:i,renderAs:a,styleAs:r,...n},s){let l=r??a;return(0,t.jsx)(g,{ref:s,$styleVariant:l,as:"h0"===a?"h1":a,id:i,...n,$_css:o,children:e})});e.s(["Heading",0,p,"HeadingFiveStyles",0,c,"HeadingFourStyles",0,l,"HeadingOneStyles",0,r,"HeadingSixStyles",0,d,"HeadingThreeStyles",0,s,"HeadingTwoStyles",0,n,"HeadingZeroStyles",0,a])},650617,e=>{"use strict";var t=e.i(843476),o=e.i(271645),i=e.i(997053);let a=i.css`
  font-size: ${({theme:e})=>e.fontSize.SMALL};
  line-height: ${({theme:e})=>e.lineHeight.body.s};
  font-weight: ${({theme:e})=>e.fontWeight.NORMAL};
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`,r=i.css`
  font-size: ${({theme:e})=>e.fontSize.DEFAULT};
  line-height: ${({theme:e})=>e.lineHeight.body.base};
  font-weight: ${({theme:e})=>e.fontWeight.LIGHT};
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`,n=i.css`
  font-size: ${({theme:e})=>e.fontSize.MEDIUM};
  line-height: ${({theme:e})=>e.lineHeight.body.m};
  font-weight: ${({theme:e})=>e.fontWeight.LIGHT};
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`,s=i.css`
  font-size: ${({theme:e})=>e.fontSize.LARGE};
  line-height: ${({theme:e})=>e.lineHeight.body.l};
  font-weight: ${({theme:e})=>e.fontWeight.LIGHT};
  margin-bottom: 25px;

  &:last-child {
    margin-bottom: 0;
  }
`,l=i.css`
  font-size: ${({theme:e})=>e.fontSize.EXTRA_LARGE};
  line-height: ${({theme:e})=>e.lineHeight.body.xl};
  font-weight: ${({theme:e})=>e.fontWeight.LIGHT};
  margin-bottom: 25px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MOBILE}) {
    font-size: ${({theme:e})=>e.fontSize.LARGE};
    line-height: ${({theme:e})=>e.lineHeight.body.l};
  }
`,c=i.default.p.withConfig({displayName:"Text__TextWrapper",componentId:"sc-f5e7deee-0"})`
  margin: 0;

  ${({$size:e})=>{switch(e){case"small":return a;case"default":default:return r;case"medium":return n;case"large":return s;case"extra-large":return l}}}

  ${({$color:e})=>{switch(e){case"loud":return i.css`
          color: ${({theme:e})=>e.fontColor.LOUD};
        `;case"muted":return i.css`
          color: ${({theme:e})=>e.fontColor.MUTED};
        `;default:return i.css`
          color: ${({theme:e})=>e.fontColor.DEFAULT};
        `}}}
`;var d=(0,i.default)(c).withConfig({displayName:"Text___StyledTextWrapper",componentId:"sc-f5e7deee-1"})`${e=>e.$_css}`;let u=o.forwardRef(function({children:e,color:o,css:i,className:a,size:r,...n},s){return(0,t.jsx)(d,{ref:s,$color:o,$size:r,className:a,...n,$_css:i,children:e})});e.s(["DefaultTextStyles",0,r,"ExtraLargeTextStyles",0,l,"LargeTextStyles",0,s,"MediumTextStyles",0,n,"SmallTextStyles",0,a,"Text",0,u])},739944,e=>{"use strict";var t=e.i(843476),o=e.i(271645),i=e.i(997053);let a=i.default.span.withConfig({displayName:"createIcon__Wrapper",componentId:"sc-d80fed30-0"})`
  color: ${({$color:e})=>e};
  display: flex;
  height: ${({$size:e})=>`${e}px`};
  width: ${({$size:e})=>`${e}px`};
`;e.s(["createIcon",0,({name:e,path:r,transform:n,iconSize:s})=>o.memo(function({className:o,color:l}){let c=(0,i.useTheme)(),d=s||15,u=`var(--fg1200, ${c.iconColor.DEFAULT})`;return(0,t.jsx)(a,{$color:l||u,$size:d,className:o,"data-icon":!0,children:(0,t.jsxs)("svg",{"data-icon":e,height:d,viewBox:`0 0 ${d} ${d}`,width:d,children:[(0,t.jsx)("desc",{children:e}),(0,t.jsx)("g",{strokeWidth:"1",children:(0,t.jsx)("g",{transform:n,children:r})})]})})})])},739876,e=>{"use strict";var t=e.i(997053);function o(e,t){return"major"===t?e.borderColor.DEFAULT:e.borderColor.MUTED}let i=t.default.div.withConfig({displayName:"GridLines__ContentMarginLine",componentId:"sc-a2972688-0"})`
  --border-color: ${({theme:e})=>o(e,"major")};

  grid-column: 1;
  border-right: 1px solid var(--border-color);
  align-self: stretch;

  &[data-right] {
    border-right: none;
    border-left: 1px solid var(--border-color);
    grid-column: -2 / span 1;
  }

  &[data-minor] {
    --border-color: ${({theme:e})=>o(e,"minor")};
  }

  &[data-top] {
    border-top: 1px solid ${({theme:e})=>o(e,"minor")};
  }

  &[data-bottom] {
    border-bottom: 1px solid ${({theme:e})=>o(e,"minor")};
  }

  &[data-v1-gridlines] {
    grid-row: 1 / -1;
    background-image: linear-gradient(
      to bottom,
      transparent calc(100% - 1px),
      ${({theme:e})=>o(e,"minor")} calc(100% - 1px)
    );
    background-size: 100% 10rem;
  }
`,a=t.default.div.withConfig({displayName:"GridLines__GridRule",componentId:"sc-a2972688-1"})`
  align-self: stretch;
  justify-self: flex-end;
  width: 1px;
  background-color: ${({theme:e})=>o(e,"minor")};
  grid-column: ${({$column:e})=>e||1} !important;
  transform: translateX(50%);
  grid-row: 1 / -1;
`,r=(0,t.default)(i).withConfig({displayName:"GridLines__ContentMarginLAccents",componentId:"sc-a2972688-2"})`
  --accent-color: ${({theme:e})=>e.paletteCssVars.fg1200};

  position: relative;
  border-right-color: transparent;

  &[data-right] {
    border-left-color: transparent;
  }

  &::before {
    z-index: 1;
    content: '';
    position: absolute;
    height: 4px;
    width: 4px;
    right: 0;
    top: 0;
    border-bottom: 1px solid var(--accent-color);
    border-right: 1px solid var(--accent-color);
    transform: translate(1px, -100%);
  }

  &::after {
    z-index: 1;
    content: '';
    position: absolute;
    height: 4px;
    width: 4px;
    right: 0;
    bottom: 0;
    border-top: 1px solid var(--accent-color);
    border-right: 1px solid var(--accent-color);
    transform: translate(1px, 100%);
  }

  &[data-right]::after {
    right: auto;
    left: 0;
    border-right: 0;
    border-left: 1px solid var(--accent-color);
    transform: translate(-1px, 100%);
  }

  &[data-right]::before {
    right: auto;
    left: 0;
    border-right: 0;
    border-left: 1px solid var(--accent-color);
    transform: translate(-1px, -100%);
  }
`;function n(e,{color:t}={}){let o=encodeURIComponent(t||e.gridColor.CHECKERED),i=`<rect width="2" height="2" fill="${o}" />`,a=`<rect x="2" y="2" width="2" height="2" fill="${o}"/>`;return`url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4">${i}${a}</svg>')`}let s=t.default.div.withConfig({displayName:"GridLines__CheckeredMargin",componentId:"sc-a2972688-3"})`
  position: relative;
  background-image: ${({theme:e})=>n(e)};
  grid-column: 1 / span 1;
  border-right: 1px solid ${({theme:e})=>o(e,"major")};

  &[data-right] {
    border-left: 1px solid ${({theme:e})=>o(e,"major")};
    border-right: unset;
    grid-column: -2 / span 1;
  }

  &[data-border-top='major'] {
    border-top: 1px solid ${({theme:e})=>o(e,"major")};
  }

  &[data-border-top='minor'] {
    border-top: 1px solid ${({theme:e})=>o(e,"minor")};
  }
`,l=(0,t.default)(i).withConfig({displayName:"GridLines__CheckeredContentMargin",componentId:"sc-a2972688-4"})`
  background-image: ${({theme:e})=>n(e)};
`;e.s(["CheckeredContentMargin",0,l,"CheckeredMargin",0,s,"ContentMarginLAccents",0,r,"ContentMarginLine",0,i,"GridRule",0,a,"backgroundImageCheckered",0,n,"backgroundImageCheckeredCss",0,function({theme:e}){return t.css`
    background-image: ${n(e)};

    [data-theme='pink'] & {
      background-image: ${n(e,{color:"#f6c9c9"})};
    }
  `},"backgroundImageHatched",0,function(e){return`repeating-linear-gradient(
    45deg,
    transparent 0px,
    transparent calc(var(--hatch-size, 6px) - 1px),
    var(--hatch-color, ${e.paletteCssVars.bg500}) calc(var(--hatch-size, 6px) - 1px),
    var(--hatch-color, ${e.paletteCssVars.bg500}) var(--hatch-size, 6px)
  )`},"cssDotGrid",0,function(e){return t.css`
    background-image: radial-gradient(
      ${e.paletteCssVars.fgA700},
      ${e.paletteCssVars.fgA700} 1px,
      transparent 1px,
      transparent
    );
    background-size: 6px 6px;
  `},"gridColorSelector",0,o])},360571,e=>{"use strict";e.i(409027);var t=e.i(376277);e.s(["generateFluidPxScale",0,function(e,o){let i=t.MEDIA_QUERIES.MOBILE,a=(o-e)/(t.MEDIA_QUERIES.EXTRA_LARGE-i),r=100*a,n=(e-a*i)/16,s=n>=0?`${r.toFixed(4)}vw + ${n.toFixed(4)}rem`:`${r.toFixed(4)}vw - ${Math.abs(n).toFixed(4)}rem`;return`clamp(${e}px, ${s}, ${o}px)`}])},991709,e=>{"use strict";let t={type:"tween",ease:[.25,1,.25,1],duration:.5},o={"data-reveal":""},i={SimpleFadeIn:{...o,initial:{opacity:0,y:5},transition:{type:"spring",delay:.2,duration:.45,bounce:0},viewport:{once:!0},whileInView:{opacity:1,y:0}},Popover:{...o,initial:{opacity:0,y:5},transition:{type:t.type,delay:0,duration:.25,ease:t.ease},viewport:{once:!0},whileInView:{opacity:1,y:0},animate:{opacity:1,y:0},exit:{opacity:0,y:5}},Cell:{...o,initial:{opacity:0,y:25},transition:{type:t.type,delay:.15,duration:.65,ease:t.ease},viewport:{once:!0},whileInView:{opacity:1,y:0}}};e.s(["ANIMATIONS",0,i,"DEFAULT_OPACITY",0,0,"DEFAULT_TRANSITION",0,t,"REVEAL_MARKER",0,o])},665419,e=>{"use strict";let t="https://learn.hex.tech",o={API:`${t}/docs/api/api-overview`,AiOverview:`${t}/docs/getting-started/ai-overview`,AppBuilder:`${t}/docs/share-insights/apps/app-builder`,AskMagic:`${t}/docs/hex-magic/ask-magic`,AuditLogging:`${t}/docs/administration/workspace_settings/audit-logs/audit-logs-overview`,BYOK:`${t}/docs/trust/ai-data-privacy#bring-your-own-key-byok`,Calculations:`${t}/docs/explore-data/cells/calculations`,Changelog:`${t}/changelog`,ChartCells:`${t}/docs/explore-data/cells/visualization-cells/chart-cells`,ChatWithApp:`${t}/docs/explore-data/chat-with-app`,CLI:`${t}/docs/api-integrations/cli`,Collections:`${t}/docs/organize-content/collections`,Components:`${t}/docs/explore-data/components`,Comments:`${t}/docs/collaborate/comments`,ContextStudio:`${t}/docs/administration/context-studio`,ContextManagement:`${t}/docs/agent-management/context-management`,ContextWorkbench:`${t}/docs/agent-management/context-management/guides#context-workbench`,CustomImages:`${t}/docs/administration/workspace_settings/custom-images`,CustomStyling:`${t}/docs/administration/workspace_settings/workspace-custom-styling`,DevelopYourNotebook:`${t}/docs/getting-started/develop-your-notebook`,DataBrowser:`${t}/docs/explore-data/data-browser`,DataConnectionPermissions:`${t}/docs/connect-to-data/data-connections/data-connections-introduction#workspace-data-connection-permissions`,DataConnections:`${t}/docs/connect-to-data/data-connections/data-connections-introduction`,DataPrivacy:`${t}/docs/trust/data-privacy-and-usage-faq`,dbt:`${t}/docs/connect-to-data/data-connections/dbt-integration`,Docs:`${t}/docs`,Endorsements:`${t}/docs/agent-management/context-management/overview#endorsements`,EndorsedStatuses:`${t}/docs/organize-content/statuses-categories#endorsed-statuses`,EnvironmentViews:`${t}/docs/explore-data/projects/environment-configuration/environment-views`,Evals:`${t}/docs/agent-management/evals`,Explore:`${t}/docs/share-insights/explore`,ExploreCalculations:`${t}/docs/share-insights/explore#calculations`,ExploreCell:`${t}/docs/share-insights/explore#explore-cell`,ExploreConvertToProject:`${t}/docs/share-insights/explore#converting-to-a-project`,ExploreEntryPoints:`${t}/docs/share-insights/explore#exploration-entry-points-and-data-sources`,ExploreFunctionality:`${t}/docs/share-insights/explore#exploration-functionality`,GenerativeApps:`${t}/docs/share-insights/apps/generative-apps`,GitExport:`${t}/docs/explore-data/projects/git-export`,HexFoundations:`${t}/tutorials/category/hex-foundations`,HistoryAndVersions:`${t}/docs/explore-data/projects/history-and-versions`,Home:`${t}`,Magic:`${t}/docs/hex-magic/what-is-hex-magic`,MagicDataPrivacy:`${t}/docs/hex-magic/magic-data-privacy`,MCP:`${t}/docs/api-integrations/mcp-server`,MigrateToHex:`${t}/docs/migrate-to-hex`,ModernSlaveryStatement:"/files/Hex_UK_Modern_Slavery_Act_Statement.pdf",ModelingAgent:`${t}/docs/connect-to-data/semantic-models/semantic-authoring/semantic-authoring-overview#modeling-agent`,ModelingWorkbench:`${t}/docs/connect-to-data/semantic-models/semantic-authoring/semantic-authoring-overview#use-the-modeling-workbench`,NotebookAgent:`${t}/docs/explore-data/notebook-view/notebook-agent`,OAuthDataConnections:`${t}/docs/connect-to-data/data-connections/oauth-data-connections`,PrivacyPolicy:`${t}/docs/trust/privacy-policy`,Publishing:`${t}/docs/share-insights/apps/publish-and-share-apps`,QueryCaching:`${t}/docs/explore-data/cells/sql-cells/query-caching`,QueryMode:`${t}/docs/cell-types/sql-cells/overview#query-mode`,Quickstart:`${t}/tutorials/quickstart`,ReactiveExecution:`${t}/docs/explore-data/projects/project-execution/execution-model#reactive-graph-based-execution-model`,RealTimeCollaboration:`${t}/docs/collaborate/real-time-collaboration`,Reviews:`${t}/docs/collaborate/reviews`,Roles:`${t}/docs/collaborate/sharing-and-permissions/roles`,SaveVersion:`${t}/docs/explore-data/projects/history-and-versions#save-a-version`,ScheduledRuns:`${t}/docs/share-insights/scheduled-runs`,Search:`${t}/docs/organize-content/workspace-search`,SemanticAuthoring:`${t}/docs/connect-to-data/semantic-models/semantic-authoring/semantic-authoring-overview`,SemanticModels:`${t}/docs/connect-to-data/semantic-models/intro-to-semantic-models`,SemanticModelSync:`${t}/docs/connect-to-data/semantic-models/semantic-model-sync/intro`,ServiceAgreement:`${t}/docs/legal/hex-service-agreement`,SharingPermissions:`${t}/docs/collaborate/sharing-and-permissions/sharing-permissions`,Slackbot:`${t}/docs/share-insights/hex-agent-in-slack`,Snowpark:`${t}/docs/connect-to-data/data-connections/snowpark`,SQLCells:`${t}/docs/explore-data/cells/sql-cells/sql-cells-introduction`,Suggestions:`${t}/docs/agent-management/suggestions`,SuggestionsReview:`${t}/docs/agent-management/suggestions#reviewing-a-suggestion`,SuggestionsManageWithCLI:`${t}/docs/agent-management/suggestions#manage-suggestions-with-the-cli`,TermsAndConditions:`${t}/docs/legal/terms-and-conditions`,Threads:`${t}/docs/explore-data/threads`,ThreadsSaveAsProject:`${t}/docs/explore-data/threads#saving-as-a-project`,ThreadsUploadCSV:`${t}/docs/explore-data/threads#uploading-csvs`,ThreadInspector:`${t}/docs/agent-management/observability#thread-inspector`,Tutorials:`${t}/tutorials`,ViewData:`${t}/docs/explore-data/cells/visualization-cells/chart-cells#view-data`,WorkspaceRoles:`${t}/docs/collaborate/sharing-and-permissions/roles#workspace-roles-and-paid-seats`,WorkspaceRules:`${t}/docs/administration/workspace_settings/rules-file-intro`,WorkspaceSettings:`${t}/docs/administration/workspace_settings/overview`,WorkingFromAnywhere:`${t}/tutorials/quickstart/working-with-hex-from-anywhere`};e.s(["DOCS_LINKS",0,o,"HANDBOOK_LINK",0,"https://www.notion.so/hexhq/Hex-Handbook-9fff0d42860e4f70815c599e0d1664d6","HEX_DEMO_VIDEO_WHAT_IS_HEX",0,"https://www.youtube.com/embed/qAXsnrNlavk?autoplay=1","HEX_DEMO_VIDEO_WHAT_IS_HEX_WATCH",0,"https://www.youtube.com/watch?v=qAXsnrNlavk","INTERNAL_LINKS",0,{About:"/about/",CLI:"/product/cli/",Demo:"/demo/",BI:"/product/bi/",Notebooks:"/product/notebooks/",Magic:"/capability/ai/",AiAndAgents:"/capability/ai/",Explore:"/product/explore/",ForTeams:"/capability/hex-for-teams/",AppBuilder:"/product/data-apps/",DataApps:"/product/data-apps/",Integrations:"/product/integrations/",EmbeddedAnalytics:"/product/embedded-analytics/",TrustedData:"/capability/context-curation/",ContextCuration:"/capability/context-curation/",ContextStudio:"/product/context-studio/",Collaboration:"/capability/hex-for-teams/",Events:"/resources/events/",Customers:"/customers/",ClubHex:"/club-hex/",ClubHexSnowflake:"/club-hex/snowflake-summit/",ClubHexDatabricks:"/club-hex/databricks-data-ai-summit/",Enterprise:"/enterprise/",Resources:"/resources/",Templates:"/templates/",Careers:"/careers/",UniversityEvents2026:"/careers/2026-university-events/",ContactUs:"/contact-us/",RequestADemo:"/request-a-demo/",Pricing:"/pricing/",Partners:"/partners/",Blog:"/blog/",Security:"/security/",Newsroom:"/newsroom/",DbtCoalesce2024:"/dbt-coalesce-2024/",MakeYourDataTeamUnstoppable:"/make-your-data-team-unstoppable/",EmbeddingDemo:"/product/embedding-demo/",VsNotebooks:"/vs/notebooks/",Video:"/resources/video/",UseCaseDataScience:"/use-case/data-science/",UseCaseExploratoryAnalysis:"/capability/exploratory-analysis/",UseCaseOperationalReporting:"/use-case/operational-reporting/",UseCaseSelfServe:"/use-case/self-serve/",StateOfDataTeams:"/state-of-data-teams/",StateOfDataTeams2025:"/state-of-data-teams/2025/",Solutions:"/solutions/",SolutionsProductAnalytics:"/solutions/product-analytics/",SolutionsDataLeaders:"/solutions/data-leaders/",SolutionsMarketing:"/solutions/marketing/",SolutionsSales:"/solutions/sales-analytics/",SolutionsCustomerSuccess:"/solutions/customer-success/",SwitchingToHex:"/product/switching-to-hex/",Threads:"/product/threads/",Compare:"/compare/",LookerVsHex:"/compare/looker-vs-hex/",OmniVsHex:"/compare/omni-vs-hex/",SigmaVsHex:"/compare/sigma-vs-hex/",TableauVsHex:"/compare/tableau-vs-hex/",Guides:"/resources/guides/",GuideAIAnalytics:"/resources/guides/ai-analytics/",BuildVsBuyCalculator:"/resources/build-vs-buy-calculator/",RequestTrialExtension:"/request-trial-extension/",OptOutSummitPromo:"/club-hex/opt-out-summit-promo/",Screenshot:"/screenshot/",Sandbox:"/sandbox/",SandboxDataBench:"/sandbox/databench/",SandboxDitherDather:"/sandbox/dither-dather/",SandboxLandingPageBuilderPreview:"/sandbox/landing-page-builder-demo/",SandboxTypingText:"/sandbox/typing-text/",SandboxWhatDoAgentsSee:"/sandbox/what-do-agents-see/"},"LINKEDIN_LINK",0,"https://www.linkedin.com/company/hex-technologies","LOGIN_LINK",0,"https://app.hex.tech/login","MEDIA_KIT_LINK",0,"https://hexhq.notion.site/a091e1bb7bb34019bc4ccf2e3da8645f?v=bb640f9e0ef4499198673561e42a93f0","SIGNUP_LINK",0,"https://app.hex.tech/signup","STATUS_LINK",0,"https://status.hex.tech","TRUST_LINKS",0,{Home:"https://trust.hex.tech"},"TWITTER_LINK",0,"https://x.com/hexanalytics","YOUTUBE_LINK",0,"https://www.youtube.com/@_hex_tech"])},605500,(e,t,o)=>{"use strict";e.i(247167),Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"Image",{enumerable:!0,get:function(){return v}});let i=e.r(555682),a=e.r(190809),r=e.r(843476),n=a._(e.r(271645)),s=i._(e.r(174080)),l=i._(e.r(325633)),c=e.r(908927),d=e.r(987690),u=e.r(918556),g=e.r(65856),p=i._(e.r(1948)),h=e.r(818581),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75,90],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function f(e,t,o,i,a,r,n){let s=e?.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&a(!0),o?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,a=!1;o.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}})}i?.current&&i.current(e)}}))}function b(e){return n.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let x="u"<typeof window?n.useEffect:n.useLayoutEffect,y=(0,n.forwardRef)(({src:e,srcSet:t,sizes:o,height:i,width:a,decoding:s,className:l,style:c,fetchPriority:d,placeholder:u,loading:g,unoptimized:p,fill:m,onLoadRef:y,onLoadingCompleteRef:$,setBlurComplete:v,setShowAltText:w,sizesInput:S,onLoad:_,onError:C,...E},I)=>{let A=(0,n.useRef)(!1),k=(0,n.useRef)(null);x(()=>{let{current:e}=A,{current:t}=k;e||null===t||(C&&(t.src=t.src),t.complete&&f(t,u,y,$,v,p,S),A.current=!0)},[e,u,y,$,C,p,S]);let O=(0,h.useMergedRef)(I,k);return(0,r.jsx)("img",{...E,...b(d),loading:g,width:a,height:i,decoding:s,"data-nimg":m?"fill":"1",className:l,style:c,sizes:o,srcSet:t,src:e,ref:O,onLoad:e=>{f(e.currentTarget,u,y,$,v,p,S)},onError:e=>{w(!0),"empty"!==u&&v(!0),C&&C(e)}})});function $({isAppRouter:e,imgAttributes:t}){let o={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...b(t.fetchPriority)};return e&&s.default.preload?(s.default.preload(t.src,o),null):(0,r.jsx)(l.default,{children:(0,r.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...o},"__nimg-"+t.src+t.srcSet+t.sizes)})}let v=(0,n.forwardRef)((e,t)=>{let o=(0,n.useContext)(g.RouterContext),i=(0,n.useContext)(u.ImageConfigContext),a=(0,n.useMemo)(()=>{let e=m||i||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),o=e.deviceSizes.sort((e,t)=>e-t),a=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:o,qualities:a,localPatterns:"u"<typeof window?i?.localPatterns:e.localPatterns}},[i]),{onLoad:s,onLoadingComplete:l}=e,h=(0,n.useRef)(s);(0,n.useEffect)(()=>{h.current=s},[s]);let f=(0,n.useRef)(l);(0,n.useEffect)(()=>{f.current=l},[l]);let[b,x]=(0,n.useState)(!1),[v,w]=(0,n.useState)(!1),{props:S,meta:_}=(0,c.getImgProps)(e,{defaultLoader:p.default,imgConf:a,blurComplete:b,showAltText:v});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(y,{...S,unoptimized:_.unoptimized,placeholder:_.placeholder,fill:_.fill,onLoadRef:h,onLoadingCompleteRef:f,setBlurComplete:x,setShowAltText:w,sizesInput:e.sizes,ref:t}),_.preload?(0,r.jsx)($,{isAppRouter:!o,imgAttributes:S}):null]})});("function"==typeof o.default||"object"==typeof o.default&&null!==o.default)&&void 0===o.default.__esModule&&(Object.defineProperty(o.default,"__esModule",{value:!0}),Object.assign(o.default,o),t.exports=o.default)},670965,(e,t,o)=>{"use strict";function i(e,t){let o=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-o)<Math.abs(e-o)?t:e,t.qualities[0]):o}Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"findClosestQuality",{enumerable:!0,get:function(){return i}})},908927,(e,t,o)=>{"use strict";e.i(247167),Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"getImgProps",{enumerable:!0,get:function(){return c}});let i=e.r(543369),a=e.r(488143),r=e.r(987690),n=["-moz-initial","fill","none","scale-down",void 0];function s(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function c({src:e,sizes:t,unoptimized:o=!1,priority:d=!1,preload:u=!1,loading:g,className:p,quality:h,width:m,height:f,fill:b=!1,style:x,overrideSrc:y,onLoad:$,onLoadingComplete:v,placeholder:w="empty",blurDataURL:S,fetchPriority:_,decoding:C="async",layout:E,objectFit:I,objectPosition:A,lazyBoundary:k,lazyRoot:O,...T},P){var j;let D,R,L,{imgConf:M,showAltText:z,blurComplete:H,defaultLoader:N}=P,U=M||r.imageConfigDefault;if("allSizes"in U)D=U;else{let e=[...U.deviceSizes,...U.imageSizes].sort((e,t)=>e-t),t=U.deviceSizes.sort((e,t)=>e-t),o=U.qualities?.sort((e,t)=>e-t);D={...U,allSizes:e,deviceSizes:t,qualities:o}}if(void 0===N)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let W=T.loader||N;delete T.loader,delete T.srcSet;let F="__next_img_default"in W;if(F){if("custom"===D.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=W;W=t=>{let{config:o,...i}=t;return e(i)}}if(E){"fill"===E&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[E];e&&(x={...x,...e});let o={responsive:"100vw",fill:"100vw"}[E];o&&!t&&(t=o)}let G="",q=l(m),V=l(f),B=!1;if((j=e)&&"object"==typeof j&&(s(j)||void 0!==j.src)){let t=s(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(R=t.blurWidth,L=t.blurHeight,S=S||t.blurDataURL,G=t.src,B=/\.avif(?:\?|$)/i.test(G),!b)if(q||V){if(q&&!V){let e=q/t.width;V=Math.round(t.height*e)}else if(!q&&V){let e=V/t.height;q=Math.round(t.width*e)}}else q=t.width,V=t.height}B&&"blur"===w&&!S&&(w="empty");let K=!d&&!u&&("lazy"===g||void 0===g);(!(e="string"==typeof e?e:G)||e.startsWith("data:")||e.startsWith("blob:"))&&(o=!0,K=!1),D.unoptimized&&(o=!0),F&&!D.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(o=!0);let X=l(h),Q=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:A}:{},z?{}:{color:"transparent"},x),Y=H||"empty"===w?null:"blur"===w?`url("data:image/svg+xml;charset=utf-8,${(0,a.getImageBlurSvg)({widthInt:q,heightInt:V,blurWidth:R,blurHeight:L,blurDataURL:S||"",objectFit:Q.objectFit})}")`:`url("${w}")`,J=n.includes(Q.objectFit)?"fill"===Q.objectFit?"100% 100%":"cover":Q.objectFit,Z=Y?{backgroundSize:J,backgroundPosition:Q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Y}:{},ee=function({config:e,src:t,unoptimized:o,width:a,quality:r,sizes:n,loader:s}){if(o){if(t.startsWith("/")&&!t.startsWith("//")){let e=(0,i.getDeploymentId)();if(t.includes("/_next/static/immutable")&&!(0,i.getAssetToken)())e=void 0;else if(e){let o=t.indexOf("?");if(-1!==o){let i=new URLSearchParams(t.slice(o+1));i.get("dpl")||(i.append("dpl",e),t=t.slice(0,o)+"?"+i.toString())}else t+=`?dpl=${e}`}}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:l,kind:c}=function({deviceSizes:e,allSizes:t},o,i){if(i){let o=/(^|\s)(1?\d?\d)vw/g,a=[];for(let e;e=o.exec(i);)a.push(parseInt(e[2]));if(a.length){let o=.01*Math.min(...a);return{widths:t.filter(t=>t>=e[0]*o),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof o?{widths:e,kind:"w"}:{widths:[...new Set([o,2*o].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,a,n),d=l.length-1;return{sizes:n||"w"!==c?n:"100vw",srcSet:l.map((o,i)=>`${s({config:e,src:t,quality:r,width:o})} ${"w"===c?o:i+1}${c}`).join(", "),src:s({config:e,src:t,quality:r,width:l[d]})}}({config:D,src:e,unoptimized:o,width:q,quality:X,sizes:t,loader:W}),et=K?"lazy":g;return{props:{...T,loading:et,fetchPriority:_,width:q,height:V,decoding:C,className:p,style:{...Q,...Z},sizes:ee.sizes,srcSet:ee.srcSet,src:y||ee.src},meta:{unoptimized:o,preload:u||d,placeholder:w,fill:b}}}},325633,(e,t,o)=>{"use strict";e.i(247167),Object.defineProperty(o,"__esModule",{value:!0});var i={default:function(){return m},defaultHead:function(){return u}};for(var a in i)Object.defineProperty(o,a,{enumerable:!0,get:i[a]});let r=e.r(555682),n=e.r(190809),s=e.r(843476),l=n._(e.r(271645)),c=r._(e.r(898879)),d=e.r(742732);function u(){return[(0,s.jsx)("meta",{charSet:"utf-8"},"charset"),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function g(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}let p=["name","httpEquiv","charSet","itemProp"];function h(e){let t,o,i,a;return e.reduce(g,[]).reverse().concat(u().reverse()).filter((t=new Set,o=new Set,i=new Set,a={},e=>{let r=!0,n=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){n=!0;let o=e.key.slice(e.key.indexOf("$")+1);t.has(o)?r=!1:t.add(o)}switch(e.type){case"title":case"base":o.has(e.type)?r=!1:o.add(e.type);break;case"meta":for(let t=0,o=p.length;t<o;t++){let o=p[t];if(e.props.hasOwnProperty(o))if("charSet"===o)i.has(o)?r=!1:i.add(o);else{let t=e.props[o],i=a[o]||new Set;("name"!==o||!n)&&i.has(t)?r=!1:(i.add(t),a[o]=i)}}}return r})).reverse().map((e,t)=>{let o=e.key||t;return l.default.cloneElement(e,{key:o})})}let m=function({children:e}){let t=(0,l.useContext)(d.HeadManagerContext);return(0,s.jsx)(c.default,{reduceComponentsToState:h,headManager:t,children:e})};("function"==typeof o.default||"object"==typeof o.default&&null!==o.default)&&void 0===o.default.__esModule&&(Object.defineProperty(o.default,"__esModule",{value:!0}),Object.assign(o.default,o),t.exports=o.default)},488143,(e,t,o)=>{"use strict";function i({widthInt:e,heightInt:t,blurWidth:o,blurHeight:a,blurDataURL:r,objectFit:n}){let s=o?40*o:e,l=a?40*a:t,c=s&&l?`viewBox='0 0 ${s} ${l}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${c}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${c?"none":"contain"===n?"xMidYMid":"cover"===n?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${r}'/%3E%3C/svg%3E`}Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},918556,(e,t,o)=>{"use strict";e.i(247167),Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"ImageConfigContext",{enumerable:!0,get:function(){return r}});let i=e.r(555682)._(e.r(271645)),a=e.r(987690),r=i.default.createContext(a.imageConfigDefault)},65856,(e,t,o)=>{"use strict";e.i(247167),Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"RouterContext",{enumerable:!0,get:function(){return i}});let i=e.r(555682)._(e.r(271645)).default.createContext(null)},987690,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0});var i={VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}};for(var a in i)Object.defineProperty(o,a,{enumerable:!0,get:i[a]});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumDiskCacheSize:void 0,maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1,customCacheHandler:!1}},794909,(e,t,o)=>{"use strict";e.i(247167),Object.defineProperty(o,"__esModule",{value:!0});var i={default:function(){return d},getImageProps:function(){return c}};for(var a in i)Object.defineProperty(o,a,{enumerable:!0,get:i[a]});let r=e.r(555682),n=e.r(908927),s=e.r(605500),l=r._(e.r(1948));function c(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75,90],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,o]of Object.entries(t))void 0===o&&delete t[e];return{props:t}}let d=s.Image},657688,(e,t,o)=>{t.exports=e.r(794909)},1948,(e,t,o)=>{"use strict";e.i(247167),Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"default",{enumerable:!0,get:function(){return n}});let i=e.r(670965),a=e.r(543369);function r({config:e,src:t,width:o,quality:n}){let s=(0,a.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//"))if(t.includes("/_next/static/immutable")&&!(0,a.getAssetToken)())s=void 0;else{let e=t.indexOf("?");if(-1!==e){let o=new URLSearchParams(t.slice(e+1)),i=o.get("dpl");if(i){s=i,o.delete("dpl");let a=o.toString();t=t.slice(0,e)+(a?"?"+a:"")}}}if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let l=(0,i.findClosestQuality)(n,e);return`${e.path}?url=${encodeURIComponent(t)}&w=${o}&q=${l}${t.startsWith("/")&&s?`&dpl=${s}`:""}`}r.__next_img_default=!0;let n=r},898879,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"default",{enumerable:!0,get:function(){return s}});let i=e.r(271645),a="u"<typeof window,r=a?()=>{}:i.useLayoutEffect,n=a?()=>{}:i.useEffect;function s(e){let{headManager:t,reduceComponentsToState:o}=e;function s(){if(t&&t.mountedInstances){let e=i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(o(e))}}return a&&(t?.mountedInstances?.add(e.children),s()),r(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),r(()=>(t&&(t._pendingUpdate=s),()=>{t&&(t._pendingUpdate=s)})),n(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}}]);