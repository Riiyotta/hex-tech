(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,624163,e=>{"use strict";var t=e.i(843476),i=e.i(237673),n=e.i(480985),o=e.i(998990),a=e.i(997053),r=e.i(798677),l=e.i(316983),s=e.i(273454),d=e.i(650617),c=e.i(430388),p=e.i(613938),u=e.i(33351),m=e.i(360571),h=e.i(271645),g=e.i(706736),x=e.i(302542),f=e.i(279897),y=e.i(637804),b=e.i(665419);let w={brew:"brew install hex-inc/hex-cli/hex",curl:"curl -fsSL https://hex.tech/install.sh | bash"},_=h.memo(({alignment:e="left"})=>{let[i,n]=(0,h.useState)("curl"),[o,a]=(0,h.useState)(!1);return(0,t.jsxs)(I,{$alignment:e,children:[(0,t.jsxs)(x.Tabs,{children:[(0,t.jsx)(j,{$selected:"curl"===i,onClick:()=>n("curl"),children:"curl"}),(0,t.jsx)(j,{$selected:"brew"===i,onClick:()=>n("brew"),children:"brew"})]}),(0,t.jsxs)(v,{children:[(0,t.jsx)(C,{children:(0,t.jsx)(d.Text,{size:"small",children:o?"Copied!":"Copy script"})}),(0,t.jsx)(k,{children:(0,t.jsx)(g.Button,{icon:o?(0,t.jsx)(c.GreenTickIcon,{}):(0,t.jsx)(c.DuplicateIcon,{}),iconPos:"right",size:"large",stylez:"loud",text:(0,t.jsx)($,{children:w[i]}),onClick:()=>{navigator.clipboard.writeText(w[i]),a(!0),setTimeout(()=>{a(!1)},2e3)}})})]}),(0,t.jsxs)(L,{children:[(0,t.jsxs)(S,{children:[(0,t.jsx)(f.IconDocs,{}),(0,t.jsx)(y.SiteLink,{href:b.DOCS_LINKS.CLI,children:"Read the docs"})]}),(0,t.jsxs)(S,{children:[(0,t.jsx)(c.ArrowRightIcon,{}),(0,t.jsx)(y.SiteLink,{href:b.SIGNUP_LINK,rel:"noopener noreferrer",target:"_blank",children:"Get started with Hex"})]})]})]})});_.displayName="InstallScript";let I=a.styled.div.withConfig({displayName:"InstallScript__Wrapper",componentId:"sc-da94703c-0"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  min-width: 0;
  max-width: 100%;

  ${({$alignment:e})=>"center"===e&&a.css`
      align-items: center;
    `}

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    width: 100%;
    align-items: center;
  }
`,j=(0,a.styled)(x.TabOption).withConfig({displayName:"InstallScript__SourceTab",componentId:"sc-da94703c-1"})`
  font-family: ${({theme:e})=>e.fontFamily.MONO_ALT};
  font-weight: ${({theme:e})=>e.fontWeight.mono};
  font-size: ${({theme:e})=>e.fontSize.annotation};
  letter-spacing: ${({theme:e})=>e.letterSpacing.annotation};
  line-height: ${({theme:e})=>e.lineHeight.body.base};
  padding: 4px 12px !important;
`,C=a.styled.div.withConfig({displayName:"InstallScript__CopyToClipboardTooltip",componentId:"sc-da94703c-2"})`
  ${({theme:e})=>e.popover};
  position: absolute;
  pointer-events: none;
  z-index: 3;
  top: 0;
  right: -10px;
  border-radius: 4px;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  gap: 6px;
  opacity: 0;
  transition:
    opacity
      ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`},
    transform
      ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`};

  p {
    color: ${({theme:e})=>e.fontColor.LOUD};
  }
`,v=a.styled.div.withConfig({displayName:"InstallScript__CopyableTextWrapper",componentId:"sc-da94703c-3"})`
  display: flex;
  position: relative;
  width: 100%;
  max-width: 100%;
  min-width: 0;

  &:hover {
    ${C} {
      opacity: 1;
      transform: translateY(-10px);
    }
  }
`,k=a.styled.div.withConfig({displayName:"InstallScript__CopyableTextButtonWrapper",componentId:"sc-da94703c-4"})`
  display: flex;
  width: 100%;
  max-width: 100%;
  min-width: 0;

  > div {
    height: 66px;
    padding: 0 25px;
    min-width: 0;
    max-width: 100%;
    flex: 1 1 auto;

    > div {
      gap: 15px;
      min-width: 0;
    }

    @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
      height: 48px;
      padding: 0 15px;
    }
  }
`,$=a.styled.div.withConfig({displayName:"InstallScript__CopyableText",componentId:"sc-da94703c-5"})`
  flex: 1 1 auto;
  min-width: 0;
  max-width: 100%;
  font-family: ${({theme:e})=>e.fontFamily.MONO_ALT};
  font-weight: ${({theme:e})=>e.fontWeight.mono};
  font-size: ${({theme:e})=>e.fontSize.MEDIUM};
  line-height: ${({theme:e})=>e.lineHeight.body.base};
  background-color: ${({theme:e})=>e.fontColor.LOUD};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;

  ${({theme:e})=>e.gradientText.DEFAULT}

  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    font-size: ${({theme:e})=>e.fontSize.SMALL};
  }
`,L=a.styled.div.withConfig({displayName:"InstallScript__MiscActionsLinkWrapper",componentId:"sc-da94703c-6"})`
  display: flex;
  align-items: center;
  gap: 25px;
  padding-top: 15px;
`,S=a.styled.div.withConfig({displayName:"InstallScript__MiscAction",componentId:"sc-da94703c-7"})`
  display: flex;
  align-items: center;
  gap: 5px;
`;function N(){return(0,t.jsx)(p.BasicPageRow,{CartesianGridComponent:u.CartesianGrid,animateEntrance:!1,fullWidth:!0,children:(0,t.jsx)(M,{children:(0,t.jsxs)(T,{children:[(0,t.jsxs)(A,{children:[(0,t.jsx)(l.AnnouncementPillLink,{icon:(0,t.jsx)(c.CLIIcon,{}),pillLabel:"The Hex CLI",subCopy:"Read the announcement",to:"/blog/introducing-the-hex-cli/"}),(0,t.jsxs)(H,{$alignText:"left",renderAs:"h1",children:["Command (line) ",(0,t.jsx)("span",{"data-style":"italic",children:"and conquer"})]}),(0,t.jsx)(E,{children:"Create projects, write SQL, run analyses, and connect your agents… without leaving your terminal."}),(0,t.jsx)(F,{children:(0,t.jsx)(_,{alignment:"left"})})]}),(0,t.jsx)(r.InteractiveFeatureCLI,{})]})})})}let M=a.default.div.withConfig({displayName:"HeroCLI__Inner",componentId:"sc-70e7dc8-0"})`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${(0,m.generateFluidPxScale)(25,40)};
  padding-top: ${(0,m.generateFluidPxScale)(150,220)};
  padding-bottom: ${(0,m.generateFluidPxScale)(80,105)};
  grid-row: 1 / -1;
  width: 100%;
  max-width: 1436px;
  gap: 30px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.EXTRA_LARGE}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 60px;
  }
`,T=a.default.div.withConfig({displayName:"HeroCLI__Content",componentId:"sc-70e7dc8-1"})`
  display: flex;
  flex: 1 1 auto;
  gap: 80px;
  width: 100%;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    flex-direction: column;
  }
`,A=a.default.div.withConfig({displayName:"HeroCLI__TextContent",componentId:"sc-70e7dc8-2"})`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`,H=(0,a.default)(s.GradientHeader).withConfig({displayName:"HeroCLI__StyledHeader",componentId:"sc-70e7dc8-3"})`
  span {
    margin-top: -1.7rem;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    && {
      font-size: 2.3rem;
      line-height: 1.2;

      span {
        display: block;
        margin-top: -0.5rem;
      }
    }
  }
`,E=(0,a.default)(d.Text).attrs({size:"extra-large"}).withConfig({displayName:"HeroCLI__StyledDescription",componentId:"sc-70e7dc8-4"})`
  text-wrap: balance;
  margin-bottom: 10px;
`,F=a.default.div.withConfig({displayName:"HeroCLI__Actions",componentId:"sc-70e7dc8-5"})`
  grid-row: 2;
  grid-column: 1;
  padding-right: 0;
  display: flex;
  height: min-content;
  gap: 16px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    padding-left: 0;
    gap: 12px;
    justify-content: center;
  }
`;var R=e.i(600376),U=e.i(739876);let D=a.styled.div.withConfig({displayName:"sharedStyles__SectionHeading",componentId:"sc-3f001c5c-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  max-width: 690px;
  text-align: center;
  width: 100%;
`,z=(0,a.styled)(s.GradientHeader).withConfig({displayName:"sharedStyles__SectionHeadingTitle",componentId:"sc-3f001c5c-1"})`
  && {
    flex: 1 1 auto;
    width: 100%;

    span {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-top: -1.7rem;

      &::before,
      &::after {
        content: '';
        display: block;
        flex: 1 1 auto;
        height: 12px;
        background-image: ${({theme:e})=>(0,U.backgroundImageCheckered)(e)};
      }
    }

    @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
      padding: 0;
    }

    @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
      font-size: 30px;

      span[data-style='italic'] {
        line-height: 1;
        padding-bottom: 5px;
        margin-top: -4px;
      }
    }
  }
`,P=(0,a.styled)(d.Text).attrs({size:"large"}).withConfig({displayName:"sharedStyles__SectionHeadingDescription",componentId:"sc-3f001c5c-2"})`
  margin-bottom: 0;
  width: 80%;
  text-wrap: balance;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    width: 100%;
  }
`,G=a.styled.span.withConfig({displayName:"sharedStyles__CodePill",componentId:"sc-3f001c5c-3"})`
  display: inline;
  margin: 0 0.06em;
  padding: 0.15em 0.45em 0.12em;
  font-family: ${({theme:e})=>e.fontFamily.MONO};
  font-size: 0.92em;
  font-weight: 500;
  line-height: 1.35;
  vertical-align: baseline;
  border-radius: 3px;
  border: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
  background: ${({theme:e})=>e.highlightColor10};
  color: ${({theme:e})=>e.fontColor.DEFAULT};
  white-space: nowrap;
`;function Q(){return(0,t.jsx)(p.BasicPageRow,{topBorder:!0,children:(0,t.jsxs)(W,{children:[(0,t.jsxs)(D,{children:[(0,t.jsxs)(z,{renderAs:"h2",styleAs:"h1",children:["Analytics where ",(0,t.jsx)("span",{"data-style":"italic",children:"your agent works"})]}),(0,t.jsx)(P,{children:"Build locally, share and collaborate in Hex."})]}),(0,t.jsxs)(B,{children:[(0,t.jsx)(R.InfoTextImageCard,{description:"Interact directly with Hex from your terminal. Get projects, create cells, and manage users from the command line.",image:"cli/illustration-any-terminal.png",imageHeight:300,imageWidth:400,size:"small",title:"Works in any terminal"}),(0,t.jsx)(R.InfoTextImageCard,{description:(0,t.jsxs)(t.Fragment,{children:["Use Claude Code or Cursor to generate an analysis, and have it move it across to Hex. Teach your agent how to use the CLI with our agent skill ",(0,t.jsx)(G,{children:"hex install skill --claude"})]}),image:"cli/illustration-claude-code.png",imageHeight:300,imageWidth:400,size:"small",title:"Plays nicely with coding agents"}),(0,t.jsx)(R.InfoTextImageCard,{description:"The Hex CLI is a standard UNIX tool - trigger automations from GitHub Actions, or your own orchestration layer.",image:"cli/illustration-github-actions.png",imageHeight:300,imageWidth:400,size:"small",title:"Orchestrate and automate"})]})]})})}let W=a.styled.div.withConfig({displayName:"SectionAnalyticsAgentWork__SectionInner",componentId:"sc-a2fe3320-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(0,m.generateFluidPxScale)(30,60)};
  max-width: 100%;
  min-width: 0;
`,B=a.styled.div.withConfig({displayName:"SectionAnalyticsAgentWork__SectionGrid",componentId:"sc-a2fe3320-1"})`
  display: flex;
  gap: 16px;
  max-width: 100%;
  min-width: 0;

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    flex-direction: column;
  }
`;var O=e.i(258591),q=e.i(21066),K=e.i(288839);e.i(726497);var Y=e.i(778888);let X=[{task:"BI migrations",prompt:'Pull all the .sql files from /legacy-bi/hyperdrive-analysis and create a new project in Hex called "Galactic Hyperdrive Performance". When done importing them, run all cells.',result:"In one script, fetch the SQL powering the most popular dashboards, push into new Hex projects and bootstrap your AI analytics migration."},{task:"Bulk schema updates",prompt:'I just pushed a new PR, search across all my Hex projects for anything that uses the "hyperdrive_performance" table and the "hyperdrive_model" column. We need to update the column name to "hyperdrive_model_sku". When you\'re done, run all cells.',result:"List all projects, scan all SQL cells for the old column name, update in place, and rerun to validate. From a day-long project to a simple script."},{task:"Generate locally, ship to Hex",prompt:'Find "hyperdrive_maintenance_churn_v2.ipynb" and use the Hex CLI to import it into my workspace, then open it in my browser.',result:"Use any AI tool to write SQL and Python, push the finished analysis to Hex as a shareable, versioned project."}],V=X.length;function J(){let e=(0,a.useTheme)(),i=(0,K.default)(e.mediaQueryString.MEDIUM),n=(0,h.useCallback)(()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(er,{children:[(0,t.jsx)(ea,{"data-position":"tl"}),(0,t.jsx)(ea,{"data-position":"tr"}),(0,t.jsx)(ea,{"data-position":"bl"}),(0,t.jsx)(ea,{"data-position":"br"}),(0,t.jsx)(es,{children:(0,t.jsx)(q.PerlinNoise,{isRunning:!0})})]}),(0,t.jsxs)(ei,{children:[(0,t.jsx)(et,{$col:1,className:Y.textStyles.annotation,children:"Task"}),(0,t.jsx)(et,{$col:2,className:Y.textStyles.annotation,children:"Prompt"}),(0,t.jsx)(et,{$col:3,className:Y.textStyles.annotation,children:"Result"}),(0,t.jsx)(eo,{$variant:"task",children:X.map(e=>(0,t.jsx)(en,{children:(0,t.jsx)(O.Heading,{renderAs:"h3",styleAs:"h4",children:e.task})},`${e.task}-task`))}),(0,t.jsx)(eo,{$variant:"prompt",children:X.map(e=>(0,t.jsx)(en,{$isPrompt:!0,children:(0,t.jsx)(d.Text,{size:"medium",children:e.prompt})},`${e.task}-prompt`))}),(0,t.jsx)(eo,{$variant:"result",children:X.map(e=>(0,t.jsx)(en,{$highlight:!0,children:(0,t.jsx)(d.Text,{size:"medium",children:e.result})},`${e.task}-result`))})]})]}),[]),o=(0,h.useCallback)(()=>(0,t.jsx)(t.Fragment,{children:X.map(e=>(0,t.jsxs)(eo,{children:[(0,t.jsx)(en,{children:(0,t.jsx)(O.Heading,{renderAs:"h3",styleAs:"h4",children:e.task})},`${e.task}-task`),(0,t.jsx)(en,{$isPrompt:!0,children:(0,t.jsx)(d.Text,{size:"medium",children:e.prompt})},`${e.task}-prompt`),(0,t.jsxs)(el,{children:[(0,t.jsx)(ea,{"data-position":"tl"}),(0,t.jsx)(ea,{"data-position":"tr"}),(0,t.jsx)(ea,{"data-position":"bl"}),(0,t.jsx)(ea,{"data-position":"br"}),(0,t.jsx)(es,{children:(0,t.jsx)(q.PerlinNoise,{isRunning:!0})}),(0,t.jsx)(en,{$highlight:!0,children:(0,t.jsx)(d.Text,{size:"medium",children:e.result})},`${e.task}-result`)]})]},`${e.task}-column`))}),[]);return(0,t.jsx)(p.BasicPageRow,{topBorder:!0,children:(0,t.jsxs)(Z,{children:[(0,t.jsx)(D,{children:(0,t.jsxs)(z,{renderAs:"h2",styleAs:"h1",children:["Built for ",(0,t.jsx)("span",{"data-style":"italic",children:"real workflows"})]})}),(0,t.jsx)(ee,{children:i?o():n()})]})})}let Z=a.styled.div.withConfig({displayName:"SectionBuiltFor__Inner",componentId:"sc-bec6b92c-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  max-width: 100%;
  min-width: 0;
`,ee=a.styled.div.withConfig({displayName:"SectionBuiltFor__Content",componentId:"sc-bec6b92c-1"})`
  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    gap: 50px;
  }
`,et=a.styled.div.withConfig({displayName:"SectionBuiltFor__HeaderCell",componentId:"sc-bec6b92c-2"})`
  grid-row: 1;
  grid-column: ${({$col:e})=>e};
  padding: 20px;
  border-bottom: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};

  ${({$col:e})=>1===e&&"padding-left: 0;"}
`,ei=a.styled.div.withConfig({displayName:"SectionBuiltFor__WorkflowGrid",componentId:"sc-bec6b92c-3"})`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 2fr) minmax(0, 2fr);
  grid-template-rows: auto repeat(${V}, auto);
  grid-auto-flow: column;
  flex: 1 1 auto;
  width: 100%;
`,en=a.styled.div.withConfig({displayName:"SectionBuiltFor__BodyCell",componentId:"sc-bec6b92c-4"})`
  display: flex;
  align-items: flex-start;
  min-height: 0;
  padding: 20px;
  border-bottom: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};

  ${({$highlight:e})=>e&&a.css`
      p {
        background-color: ${({theme:e})=>e.fontColor.LOUD};
        ${({theme:e})=>e.gradientText.DEFAULT}
        background-size: 100%;
        background-repeat: repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
      }
    `}

  ${({$isPrompt:e})=>e&&a.css`
      p {
        background: ${({theme:e})=>e.highlightColor10};
        border-radius: 10px;
        border-bottom-right-radius: 0;
        padding: 8px 12px;
        word-break: break-word;
      }
    `}
`,eo=a.styled.div.withConfig({displayName:"SectionBuiltFor__BodyColumn",componentId:"sc-bec6b92c-5"})`
  display: contents;

  ${({$variant:e})=>"task"===e&&`
    & > ${en} {
      padding-left: 0;
    }
  `}

  ${({$variant:e})=>"result"===e&&a.css`
      & > ${en}:last-child {
        border-bottom: none;
      }
      & > ${en} p {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
    `}

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    display: flex;
    flex-direction: column;
    gap: 15px;

    & > ${en} {
      padding-top: 0;
      padding-bottom: 0;
      border-bottom: none;
    }
  }
`,ea=a.styled.div.withConfig({displayName:"SectionBuiltFor__Accents",componentId:"sc-bec6b92c-6"})`
  position: absolute;
  height: 12px;
  width: 12px;

  &&& {
    border-color: ${({theme:e})=>e.highlightColor};
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
`,er=a.styled.div.withConfig({displayName:"SectionBuiltFor__FloatingHighlightContainer",componentId:"sc-bec6b92c-7"})`
  position: absolute;
  z-index: 0;
  pointer-events: none;
  top: 0;
  right: 0;
  bottom: 0;
  left: calc(100% * (1 + 2) / (1 + 2 + 2));
  height: calc(100% + 10px);
  border: 1px solid ${({theme:e})=>e.borderColor.STRONG};
  background-color: ${({theme:e})=>e.backgroundColor};
`,el=(0,a.styled)(er).withConfig({displayName:"SectionBuiltFor__StaticHighlightContainer",componentId:"sc-bec6b92c-8"})`
  position: relative;
  inset: auto;
  height: auto;
`,es=a.styled.div.withConfig({displayName:"SectionBuiltFor__PerlinNoiseWrapper",componentId:"sc-bec6b92c-9"})`
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.6;
`;var ed=e.i(986740);function ec({title:e,description:i,icon:n}){return(0,t.jsxs)(ep,{children:[(0,t.jsxs)(eu,{children:[n,(0,t.jsx)(em,{renderAs:"h3",styleAs:"h4",children:e})]}),(0,t.jsx)(d.Text,{size:"medium",children:i})]})}let ep=a.default.div.withConfig({displayName:"SectionLine__Wrapper",componentId:"sc-3f9de42c-0"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`,eu=a.default.div.withConfig({displayName:"SectionLine__HeadingContent",componentId:"sc-3f9de42c-1"})`
  display: flex;
  align-items: baseline;
  gap: 10px;
`,em=(0,a.default)(O.Heading).withConfig({displayName:"SectionLine__StyledHeading",componentId:"sc-3f9de42c-2"})`
  text-wrap: balance;
`;function eh(){return(0,t.jsx)(p.BasicPageRow,{fullWidth:!0,topBorder:!0,children:(0,t.jsxs)(eg,{children:[(0,t.jsx)(ex,{children:(0,t.jsx)(q.PerlinNoise,{isRunning:!0,size:"large"})}),(0,t.jsxs)(ef,{children:[(0,t.jsxs)(ey,{children:[(0,t.jsx)(ed.AbstractMark,{which:"2"}),(0,t.jsxs)(eb,{$alignText:"left",renderAs:"h2",children:[(0,t.jsx)("span",{"data-style":"italic",children:"Everything"})," you need to control Hex with code"]})]}),(0,t.jsxs)(ew,{children:[(0,t.jsx)(ec,{description:(0,t.jsxs)(t.Fragment,{children:["Spin up Hex projects in seconds. Use"," ",(0,t.jsx)(G,{children:"hex project"}),", ",(0,t.jsx)(G,{children:"hex app"}),", and ",(0,t.jsx)(G,{children:"hex cell"})," to build analyses from your terminal — and make changes across many projects in one scripted pass."]}),icon:(0,t.jsx)(c.PlusIcon,{}),title:"Create & manage projects"}),(0,t.jsx)(ec,{description:(0,t.jsxs)(t.Fragment,{children:["Execute projects and apps programmatically with"," ",(0,t.jsx)(G,{children:"hex run"}),". Integrate it into CI pipelines to catch errors and keep analyses in sync with changes to your business."]}),icon:(0,t.jsx)(c.AutoRunIcon,{}),title:"Run & validate"}),(0,t.jsx)(ec,{description:(0,t.jsxs)(t.Fragment,{children:["Kick off the Hex Agent from where your team already works. Use"," ",(0,t.jsx)(G,{children:"hex thread"})," to ask a question, run the analysis in Hex, and bring the answer back into your existing workflow."]}),icon:(0,t.jsx)(c.AsteriskIcon,{}),title:"Put the agent to work"}),(0,t.jsx)(ec,{description:(0,t.jsxs)(t.Fragment,{children:["Keep your context in line with how the business evolves. Use"," ",(0,t.jsx)(G,{children:"hex guide"})," to manage business logic and"," ",(0,t.jsx)(G,{children:"hex context"})," to preview and publish changes to guides and semantic models."]}),icon:(0,t.jsx)(c.SemanticModelsIcon,{}),title:"Keep context up to date"})]})]})]})})}let eg=a.styled.div.withConfig({displayName:"SectionEverythingYouNeed__Wrapper",componentId:"sc-29a83b11-0"})`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  padding: ${(0,m.generateFluidPxScale)(60,80)} ${(0,m.generateFluidPxScale)(30,100)};
`,ex=a.styled.div.withConfig({displayName:"SectionEverythingYouNeed__PerlinNoiseWrapper",componentId:"sc-29a83b11-1"})`
  grid-column: 1 / -1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  opacity: 0.8;
  mask-image: linear-gradient(to top, transparent, black 100%);
`,ef=a.styled.div.withConfig({displayName:"SectionEverythingYouNeed__Inner",componentId:"sc-29a83b11-2"})`
  display: flex;
  align-items: center;
  gap: ${(0,m.generateFluidPxScale)(40,80)};
  max-width: 1160px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    flex-direction: column;
  }
`,ey=a.styled.div.withConfig({displayName:"SectionEverythingYouNeed__Heading",componentId:"sc-29a83b11-3"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  max-width: 340px;
  min-width: 200px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    max-width: 100%;
  }
`,eb=(0,a.styled)(s.GradientHeader).withConfig({displayName:"SectionEverythingYouNeed__StyledHeader",componentId:"sc-29a83b11-4"})`
  && {
    span {
      display: inline;
    }
  }
`,ew=a.styled.div.withConfig({displayName:"SectionEverythingYouNeed__Content",componentId:"sc-29a83b11-5"})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    grid-template-columns: 1fr;
  }
`;e.i(409027);var e_=e.i(747741);let eI=`
███╗  ███╗ ████████╗ ███╗  ███╗
███║  ███║ ███╔═███║ ╚███╗███╔╝    _____  __    ____
█████████║ ████████║  ╚█████╔╝    / ___/ / /   /  _/
███╔══███║ ███╔════╝  ███╔███╗   / /    / /    / /
███║  ███║ ███║ ███╗ ███╔╝╚███╗ / /___ / /__ _/ /
███║  ███║ ████████║ ███║  ███║ \\____//____//___/
╚══╝  ╚══╝ ╚═══════╝ ╚══╝  ╚══╝
`;function ej(){return(0,t.jsx)(p.BasicPageRow,{topBorder:!0,children:(0,t.jsxs)(eC,{children:[(0,t.jsx)(ev,{"aria-hidden":"true",children:eI}),(0,t.jsxs)(D,{children:[(0,t.jsxs)(z,{renderAs:"h2",styleAs:"h1",children:["Control Hex ",(0,t.jsx)("span",{"data-style":"italic",children:"from your terminal"})]}),(0,t.jsx)(P,{children:"Install the CLI and start building today"})]}),(0,t.jsx)(_,{alignment:"center"})]})})}let eC=a.styled.div.withConfig({displayName:"SectionFooter__Inner",componentId:"sc-59dcb87f-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(0,m.generateFluidPxScale)(40,50)};
  padding: 0 ${(0,m.generateFluidPxScale)(12,40)};
  max-width: 100%;
  min-width: 0;
`,ev=a.styled.pre.withConfig({displayName:"SectionFooter__ASCIIArt",componentId:"sc-59dcb87f-1"})`
  margin: 0;
  font-family: ${({theme:e})=>e.fontFamily.MONO};
  font-size: ${(0,e_.generateFluidFontSize)(9,14)};
  line-height: 1.3;
  letter-spacing: 0.03rem;
  color: ${({theme:e})=>e.fontColor.DEFAULT};
  white-space: pre;
`,ek={quote:(0,t.jsxs)(t.Fragment,{children:["“We're already seeing strong pull for Hex AI across StubHub. CLI is the next logical step —"," ",(0,t.jsx)("strong",{children:"it lets our most technical users build Hex into the automated workflows where AI does its best work."}),"”"]}),logoPath:o.CUSTOMER_LOGOS_HOSTED.StubHub,authorName:"Nova Wang",authorCompany:"StubHub",authorTitle:"Head of Analytics Engineering"};e.s(["CliPageContent",0,function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(N,{}),(0,t.jsx)(i.FullWidthQuote,{...ek}),(0,t.jsx)(Q,{}),(0,t.jsx)(eh,{}),(0,t.jsx)(J,{}),(0,t.jsx)(ej,{}),(0,t.jsx)(n.OutroTout,{className:"full-width",copy:"Hex is the AI analytics platform where your notebooks, agents, and self-serve all live together — and actually talk to each other.",title:"Built for data teams who want more than a dashboard"})]})}],624163)},798677,e=>{"use strict";var t=e.i(843476),i=e.i(271645),n=e.i(997053),o=e.i(785191),a=e.i(778888),r=e.i(288839),l=e.i(665419);let s=`
------------------------------------------
------------------------+++%*+++=---------
----------------------=*=**@@@@@@#=-------
--------------------=**++%@@@#---#=-------
-------------------+=+=++%@@@*----*=------
------------+###@%##+*+%%@@@#-------------
------------=*@@@@@@@@@@@@@@@%#-----------
--------------=%@@@#*%@@%@@@@@@@+---------
------------------+#%%+@@@%@@@@@@%=-------
-----------------%+@@%*@@@@@@@@=----------
-----------------%@%+@@@@@@@@@@@*---------
---------------#@@=-+@#=%@@@@@@@@@=-------
--------------=#*=--+@@##@@==*@@@@@@=-----
------------=**#@#=##@#%@@####*+@@@@@=----
------------%@%%+-=#*##@@@#@%@@@##@@@%----
--+#=------+*-=%*#=%*@@@@@+=%+%*@@@@@%----
--=*@#--+#**#@%@@*=*@@@@#*@@@*=*#*@@@@*---
-=#**+##*-+@*###%*=+@@@%+#@@@@@*%#@*@@@=--
--=++#@@@%*@*##@@*#*%*@#+#@#*@@@@@@@@@@+--
------=@@@@@*%@#%*@*@@@@*%@@*@@@@@@@@@@#--
------=%@@@@#@@@@*@@%=*@@@@@*@@@@@@@@@@#--
------=%@@@@*@@@@+@@@@@@@@@@+@@@@@@@@@@@*-
-------%@@@@*@@@@+%+@@@@+#@@@@@@@@@@@@@@#-
------=#*@@@#@@@@*%+%@@@@@@@@@@@@@@@@@@@#-
-------**@@@@@%@@*=+=#@@@@@@@@@@@@@@@@@@#-
--------+@@@@@%@@*=+=#@@#%@@@%*@@@@@@@@**-
----------+#*#=+#*=-=*%**%@@*@@*%@@*#*#---
---------------------=+--+=*=*------------
`.trim().split("\n"),d=[{name:"Galactic Revenue Model (v2)",id:"019d4e86"},{name:"Core Worlds Sales Analysis",id:"019d4ed4"},{name:"Mid-Rim Growth Trends",id:"019d4f21"},{name:"Outer Rim Expansion Dashboard",id:"019d4f2c"},{name:"Product Line Performance (Q3)",id:"019d4f6d"}],c=[{name:"Warehouse — prod",id:"conn_8a2f"},{name:"Snowflake analytics",id:"conn_3c91"},{name:"BigQuery marketing",id:"conn_7dde"}],p=[{name:"NexaCorp — Executive North Star",id:"col_11aa"},{name:"Nexa 360 — Customer health",id:"col_22bb"},{name:"NexaPulse — Weekly KPI pack",id:"col_33cc"},{name:"Nexa Revenue — ARR & NRR",id:"col_44dd"},{name:"Nexa Field — Regional performance",id:"col_55ee"},{name:"Nexa Launch — GTM & adoption",id:"col_66ff"},{name:"Nexa Trust — Security & compliance",id:"col_77a0"},{name:"Nexa Support — CSAT & ticket trends",id:"col_88b1"}],u=[{name:"Data team",id:"grp_01"},{name:"RevOps",id:"grp_02"},{name:"Finance",id:"grp_03"},{name:"Marketing",id:"grp_04"},{name:"Sales",id:"grp_05"},{name:"Product",id:"grp_06"},{name:"Engineering",id:"grp_07"},{name:"Customer Success",id:"grp_08"},{name:"Support",id:"grp_09"},{name:"HR",id:"grp_10"},{name:"Legal",id:"grp_11"},{name:"IT",id:"grp_12"}],m=[{name:"Ada Lovelace",id:"usr_9f01"},{name:"Grace Hopper",id:"usr_9f02"},{name:"Katherine Johnson",id:"usr_9f03"},{name:"Marie Curie",id:"usr_9f04"},{name:"Nikola Tesla",id:"usr_9f05"},{name:"Albert Einstein",id:"usr_9f06"},{name:"Isaac Newton",id:"usr_9f07"},{name:"Galileo Galilei",id:"usr_9f08"},{name:"Richard Feynman",id:"usr_9f09"},{name:"Niels Bohr",id:"usr_9f10"},{name:"Louis Pasteur",id:"usr_9f11"},{name:"Rosalind Franklin",id:"usr_9f12"}],h=l.DOCS_LINKS.CLI,g={projects:()=>d,connections:()=>c,collections:()=>p,groups:()=>u,users:()=>m},x={projects:"Projects",connections:"Connections",collections:"Collections",groups:"Groups",users:"Users"},f=[{id:"app",description:"Manage and run Hex apps"},{id:"project",description:"Manage projects"},{id:"cell",description:"Manage cells in a project"},{id:"run",description:"Manage and inspect runs"},{id:"connection",description:"Manage data connections"},{id:"collection",description:"Manage workspace collections"},{id:"group",description:"Manage workspace groups"},{id:"user",description:"Manage workspace users"},{id:"magic",description:"A little terminal enchantment"}],y=[{match:"hex help",description:"Show help",outcome:{kind:"rootHelp"}},{match:"hex magic",description:"Summon ASCII wizardry",loadingMs:250,outcome:{kind:"magic"}},{match:"hex app",description:"Manage Hex apps",group:"app",isGroupRoot:!0,groupUsage:"hex app [command] [options]",outcome:{kind:"submenu"}},{match:"hex app run",description:"Run a Hex app for a project",loadingMs:250,group:"app",subLabel:"run",subHelp:"Run a Hex app for a project",outcome:{kind:"docs"}},{match:"hex project",description:"Manage projects",group:"project",isGroupRoot:!0,groupUsage:"hex project [command] [options]",outcome:{kind:"submenu"}},{match:"hex project create",description:"Create a new project",loadingMs:250,group:"project",subLabel:"create",subHelp:"Create a new project (with title)",outcome:{kind:"docs"}},{match:"hex project list",description:"List accessible projects",loadingMs:750,group:"project",subLabel:"list",subHelp:"List accessible projects",outcome:{kind:"list",list:"projects"}},{match:"hex project get",description:"Get project details",loadingMs:250,group:"project",subLabel:"get",subHelp:"Get details for a project",outcome:{kind:"docs"}},{match:"hex project open",description:"Open a project in the browser",loadingMs:250,group:"project",subLabel:"open",subHelp:"Open a project in the browser",outcome:{kind:"docs"}},{match:"hex project run",description:"Run the draft version of a project",loadingMs:250,group:"project",subLabel:"run",subHelp:"Run the draft version of a project",outcome:{kind:"docs"}},{match:"hex cell",description:"Manage cells",group:"cell",isGroupRoot:!0,groupUsage:"hex cell [command] [options]",outcome:{kind:"submenu"}},{match:"hex cell list",description:"List cells in a project",loadingMs:750,group:"cell",subLabel:"list",subHelp:"List cells for a project",outcome:{kind:"docs"}},{match:"hex cell get",description:"Get cell details",loadingMs:250,group:"cell",subLabel:"get",subHelp:"Get details for a cell",outcome:{kind:"docs"}},{match:"hex cell create",description:"Create a cell",loadingMs:250,group:"cell",subLabel:"create",subHelp:"Create a cell (type, source, project)",outcome:{kind:"docs"}},{match:"hex cell update",description:"Update a cell",loadingMs:250,group:"cell",subLabel:"update",subHelp:"Update a cell",outcome:{kind:"docs"}},{match:"hex cell delete",description:"Delete a cell",loadingMs:250,group:"cell",subLabel:"delete",subHelp:"Delete a cell",outcome:{kind:"docs"}},{match:"hex cell run",description:"Run a cell",loadingMs:250,group:"cell",subLabel:"run",subHelp:"Run a cell",outcome:{kind:"docs"}},{match:"hex run",description:"Manage runs",group:"run",isGroupRoot:!0,groupUsage:"hex run [command] [options]",outcome:{kind:"submenu"}},{match:"hex run list",description:"List runs for a project",loadingMs:750,group:"run",subLabel:"list",subHelp:"List runs for a project",outcome:{kind:"docs"}},{match:"hex run status",description:"Inspect run status",loadingMs:250,group:"run",subLabel:"status",subHelp:"Get status for a run",outcome:{kind:"docs"}},{match:"hex run cancel",description:"Cancel a run",loadingMs:250,group:"run",subLabel:"cancel",subHelp:"Cancel a run",outcome:{kind:"docs"}},{match:"hex connection",description:"Manage connections",group:"connection",isGroupRoot:!0,groupUsage:"hex connection [command] [options]",outcome:{kind:"submenu"}},{match:"hex connection list",description:"List data connections",loadingMs:750,group:"connection",subLabel:"list",subHelp:"List data connections",outcome:{kind:"list",list:"connections"}},{match:"hex connection get",description:"Get connection details",loadingMs:250,group:"connection",subLabel:"get",subHelp:"Get details for a connection",outcome:{kind:"docs"}},{match:"hex collection",description:"Manage collections",group:"collection",isGroupRoot:!0,groupUsage:"hex collection [command] [options]",outcome:{kind:"submenu"}},{match:"hex collection list",description:"List collections",loadingMs:750,group:"collection",subLabel:"list",subHelp:"List workspace collections",outcome:{kind:"list",list:"collections"}},{match:"hex collection get",description:"Get collection details",loadingMs:250,group:"collection",subLabel:"get",subHelp:"Get details for a collection",outcome:{kind:"docs"}},{match:"hex group",description:"Manage groups",group:"group",isGroupRoot:!0,groupUsage:"hex group [command] [options]",outcome:{kind:"submenu"}},{match:"hex group list",description:"List groups",loadingMs:750,group:"group",subLabel:"list",subHelp:"List workspace groups",outcome:{kind:"list",list:"groups"}},{match:"hex group get",description:"Get group details",loadingMs:250,group:"group",subLabel:"get",subHelp:"Get details for a group",outcome:{kind:"docs"}},{match:"hex group create",description:"Create a group",loadingMs:250,group:"group",subLabel:"create",subHelp:"Create a workspace group",outcome:{kind:"docs"}},{match:"hex group delete",description:"Delete a group",loadingMs:250,group:"group",subLabel:"delete",subHelp:"Delete a workspace group",outcome:{kind:"docs"}},{match:"hex user",description:"Manage users",group:"user",isGroupRoot:!0,groupUsage:"hex user [command] [options]",outcome:{kind:"submenu"}},{match:"hex user list",description:"List workspace users",loadingMs:750,group:"user",subLabel:"list",subHelp:"List workspace users",outcome:{kind:"list",list:"users"}},{match:"hex user get",description:"Get user details",loadingMs:250,group:"user",subLabel:"get",subHelp:"Get details for a user",outcome:{kind:"docs"}}];function b(e,t){let i=e-2-4,n=t;return n.length>i&&(n=n.slice(0,Math.max(0,i-1))+"…"),"│"+n.padEnd(i)+" ".repeat(4)+"│"}function w(e,t){let i=e.length>t?e.slice(0,t):e;return"┌"+i+"─".repeat(Math.max(0,t-i.length))+"┐"}function _(e){return"└"+"─".repeat(Math.max(0,e-2))+"┘"}function I(e,t,i,n){let o=Math.max(0,...t.map(e=>e.length+4),...n.map(e=>e.length+4));return Math.max(e.length,i.length,o,12)}function j(e,t,i){let n=w(t,e),o=n.length;return[n,...i.map(e=>b(o,e)),_(o)]}function C({appendLine:e}){let t="─── Usage ",i="─── Commands ",n=["  hex <command> [subcommand] [options]"],o=f.map(e=>`  ${e.id.padEnd(12)}${e.description}`),a=I(t,n,i,o);for(let i of j(a,t,n))e(i);for(let t of j(a,i,o))e(t);e("")}let v="→ ~",k=["⠋","⠙","⠹","⠸","⠼","⠴","⠦","⠧","⠇","⠏"],$="       ",L=[{type:"line",text:"███╗  ███╗ ████████╗ ███╗  ███╗                     \n███║  ███║ ███╔═███║ ╚███╗███╔╝    _____  __    ____\n█████████║ ████████║  ╚█████╔╝    / ___/ / /   /  _/\n███╔══███║ ███╔════╝  ███╔███╗   / /    / /    / /  \n███║  ███║ ███║ ███╗ ███╔╝╚███╗ / /___ / /__ _/ /   \n███║  ███║ ████████║ ███║  ███║ \\____//____//___/   \n╚══╝  ╚══╝ ╚═══════╝ ╚══╝  ╚══╝                      "},{type:"line",text:""},{type:"wait",ms:500},{type:"line",text:"Welcome to the Hex CLI."},{type:"wait",ms:200},{type:"line",text:"Type a command and press Enter. Try `hex help` to get started."},{type:"line",text:""},{type:"wait",ms:500},{type:"line",text:`${v}hex project create “Galactic Revenue Insights”`},{type:"wait",ms:450,showLoading:!0},{type:"line",text:`${$}✓ Created project`},{type:"line",text:`${$}ID: (019d4584)`},{type:"line",text:`${$}Title: Galactic Revenue Insights`},{type:"line",text:""},{type:"wait",ms:500},{type:"line",text:`${v}hex project run 019d4584`},{type:"wait",ms:450,showLoading:!0},{type:"line",text:`${$}✓ Project run triggered`},{type:"line",text:`${$}Project ID: (019d4584)`},{type:"line",text:`${$}Run ID: (019d6376)`},{type:"line",text:`${$}Status: Running`},{type:"line",text:""}],S=y.map(e=>({match:e.match,description:e.description,loadingMs:e.loadingMs,run:async t=>{!function(e,t,i){switch(e.outcome.kind){case"rootHelp":C(t);return;case"submenu":e.group&&function(e,t,i){let n=i.find(e=>e.group===t&&e.isGroupRoot&&e.groupUsage),o=n?.groupUsage??`hex ${t} [command] [options]`,a=i.filter(e=>e.group===t&&!e.isGroupRoot&&e.subLabel&&e.subHelp),r="─── Usage ",l="─── Commands ",s=[`  ${o}`],d=Math.max(10,...a.map(e=>(e.subLabel??"").length+2)),c=a.map(e=>`  ${(e.subLabel??"").padEnd(d)}${e.subHelp??""}`),p=I(r,s,l,c);for(let t of j(p,r,s))e.appendLine(t);for(let t of j(p,l,c))e.appendLine(t);e.appendLine("")}(t,e.group,i);return;case"docs":!function({appendLine:e}){e("Check out our docs to learn more:"),e(h),e("")}(t);return;case"list":!function({appendLine:e},t){let i=g[t](),n=x[t],o=`─ ${n} - ${i.length} ─ `,a=i.map(e=>` ${e.name} (${e.id})`),r=Math.max(46,o.length,...a.map(e=>e.length+4)),l=w(o,r),s=l.length;for(let t of(e(l),i))e(b(s,` ${t.name} (${t.id})`));e(_(s)),e("")}(t,e.outcome.list);return;case"magic":for(let e of s)t.appendLine(e);return}}(e,t,y)}}));var N=e.i(637804);let M=n.styled.div.withConfig({displayName:"InteractiveTerminal.styles__Root",componentId:"sc-3ce23765-0"})`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  font-family: ${({theme:e})=>e.appUI.fontFamily.MONO};
  font-size: inherit;
  line-height: 1.5;
  color: ${({theme:e})=>e.appUI.fontColor.DEFAULT};
  /* Horizontal inset only; vertical breathing room is ScrollEndSpacer + TerminalScrollPad. */
  padding-left: 16px;
  min-width: 0;
  max-width: 100%;
  box-sizing: border-box;
  cursor: text;
  user-select: none;
  font-variant-ligatures: none;
  font-feature-settings:
    'liga' 0,
    'calt' 0;
`,T=n.styled.label.withConfig({displayName:"InteractiveTerminal.styles__ScreenReaderLabel",componentId:"sc-3ce23765-1"})`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,A=n.styled.div.withConfig({displayName:"InteractiveTerminal.styles__Transcript",componentId:"sc-3ce23765-2"})`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  gap: 0;
  min-width: 0;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`,H=n.styled.div.withConfig({displayName:"InteractiveTerminal.styles__TranscriptLine",componentId:"sc-3ce23765-3"})`
  /* pre (not pre-wrap): box-drawing and ASCII tables must stay one visual row — wrapping breaks │ alignment */
  white-space: pre;
  word-break: normal;
  overflow-wrap: normal;
  min-height: 1.5em;
  color: ${({theme:e})=>e.appUI.fontColor.DEFAULT};
  font-variant-ligatures: none;
`,E=n.styled.span.withConfig({displayName:"InteractiveTerminal.styles__TerminalId",componentId:"sc-3ce23765-4"})`
  color: ${({theme:e})=>e.appUI.intent.SUCCESS};
`,F=(0,n.styled)(N.SiteLink).withConfig({displayName:"InteractiveTerminal.styles__TranscriptLink",componentId:"sc-3ce23765-5"})`
  pointer-events: auto;
  cursor: pointer;
  color: ${({theme:e})=>e.appUI.intent.PRIMARY};
  text-decoration: underline;
  text-underline-offset: 2px;
  border: none;

  &:hover {
    opacity: 0.88;
    background-color: transparent;
  }
`,R=n.css`
  display: inline-block;
  font-size: 1.34em;
  line-height: 1;
  vertical-align: -0.07em;
`,U=n.styled.div.withConfig({displayName:"InteractiveTerminal.styles__PromptRow",componentId:"sc-3ce23765-6"})`
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  align-items: center;
  gap: 10px;
  color: ${({theme:e})=>e.appUI.fontColor.DEFAULT};
`,D=n.styled.div.withConfig({displayName:"InteractiveTerminal.styles__ScrollEndSpacer",componentId:"sc-3ce23765-7"})`
  flex-shrink: 0;
  height: 1.5em;
  width: 100%;
  pointer-events: none;
`,z=n.styled.span.withConfig({displayName:"InteractiveTerminal.styles__PromptPrefix",componentId:"sc-3ce23765-8"})`
  flex-shrink: 0;
  color: ${({theme:e})=>e.appUI.fontColor.MUTED};
`,P=n.styled.span.withConfig({displayName:"InteractiveTerminal.styles__PromptGlyphs",componentId:"sc-3ce23765-9"})`
  ${R}
`,G=n.styled.span.withConfig({displayName:"InteractiveTerminal.styles__PromptArrow",componentId:"sc-3ce23765-10"})`
  color: ${({theme:e})=>e.appUI.intent.SUCCESS};
`,Q=n.styled.span.withConfig({displayName:"InteractiveTerminal.styles__PromptTilde",componentId:"sc-3ce23765-11"})`
  color: ${({theme:e})=>e.colors.LIGHT_BLUE};
`,W=n.styled.span.withConfig({displayName:"InteractiveTerminal.styles__LoadingText",componentId:"sc-3ce23765-12"})`
  display: inline-flex;
  align-items: center;
  gap: 0.35ch;
  color: ${({theme:e})=>e.appUI.fontColor.MUTED};
`,B=n.styled.span.withConfig({displayName:"InteractiveTerminal.styles__LoadingBraille",componentId:"sc-3ce23765-13"})`
  ${R}
  display: inline-block;
  width: 1ch;
  text-align: center;
  color: ${({theme:e})=>e.appUI.fontColor.MUTED};
`,O=n.styled.div.withConfig({displayName:"InteractiveTerminal.styles__InputArea",componentId:"sc-3ce23765-14"})`
  position: relative;
  flex: 1 1 auto;
  min-width: 0;
  min-height: 1.35em;
`,q=n.styled.input.withConfig({displayName:"InteractiveTerminal.styles__HiddenInput",componentId:"sc-3ce23765-15"})`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  border: 0;
  padding: 0;
  margin: 0;
  cursor: text;
  z-index: 1;
`,K=n.styled.span.withConfig({displayName:"InteractiveTerminal.styles__VisibleInputMirror",componentId:"sc-3ce23765-16"})`
  display: block;
  white-space: pre;
  word-break: normal;
  pointer-events: none;
`,Y=n.styled.span.withConfig({displayName:"InteractiveTerminal.styles__InputCursorSlot",componentId:"sc-3ce23765-17"})`
  display: inline-block;
  position: relative;
  width: 1ch;
  overflow: visible;
  vertical-align: baseline;
  text-align: center;
  line-height: inherit;
`,X=n.styled.span.withConfig({displayName:"InteractiveTerminal.styles__InputCursorCellChar",componentId:"sc-3ce23765-18"})`
  display: block;
  position: relative;
  z-index: 0;
  user-select: none;
`,V=n.styled.span.withConfig({displayName:"InteractiveTerminal.styles__InputCursorBlock",componentId:"sc-3ce23765-19"})`
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  pointer-events: none;
  border-radius: 1px;
  background: ${({$embedActive:e,theme:t})=>e?`color-mix(in srgb, ${t.appUI.fontColor.DEFAULT} 44%, transparent)`:`color-mix(in srgb, ${t.appUI.fontColor.MUTED} 38%, transparent)`};
  --terminal-cursor-on-opacity: ${({$embedActive:e})=>e?1:.72};

  @keyframes terminalCursorBlink {
    0%,
    49.999% {
      opacity: var(--terminal-cursor-on-opacity);
    }
    50%,
    100% {
      opacity: 0;
    }
  }

  animation: terminalCursorBlink 1.06s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: var(--terminal-cursor-on-opacity);
  }
`,J=/\(((?:conn_|col_|grp_|usr_)[a-z0-9]+|[0-9a-f]{8})\)|(ID:\s*)([0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}|[0-9a-f]{8})(?=\s*$|\s)/gi,Z=/https?:\/\/[^\s]+/gi;function ee(e,n,o){return"string"==typeof e?function(e,i,n){let o,a=[],r=0,l=new RegExp(Z.source,Z.flags),s=0;for(;null!==(o=l.exec(e));){o.index>r&&a.push(e.slice(r,o.index));let l=o[0];a.push((0,t.jsx)(F,{href:n?.[l]??l,rel:"noopener noreferrer",target:"_blank",children:l},`${i}-url-${s++}`)),r=o.index+l.length}return(r<e.length&&a.push(e.slice(r)),0===a.length)?e:1===a.length?a[0]:a}(e,n,o):Array.isArray(e)?e.map((e,a)=>(0,t.jsx)(i.Fragment,{children:ee(e,n,o)},`${n}-mix-${a}`)):e}function et(e,i){let n,o=[],a=0,r=new RegExp(J.source,J.flags),l=0;for(;null!==(n=r.exec(e));)n.index>a&&o.push(e.slice(a,n.index)),void 0!==n[1]?o.push((0,t.jsx)(E,{children:n[0]},`${i}-id-${l++}`)):void 0!==n[3]&&(n[2]&&o.push(n[2]),o.push((0,t.jsx)(E,{children:n[3]},`${i}-id-${l++}`))),a=n.index+n[0].length;return a<e.length&&o.push(e.slice(a)),1===o.length&&"string"==typeof o[0]?o[0]:o}function ei(e){return new Promise(t=>{window.setTimeout(t,e)})}function en(){return new Promise(e=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{e()})})})}let eo=i.memo(i.forwardRef(function(e,n){let{booting:o,busy:a,caretIndex:l,className:s,embedActive:d,input:c,inputRef:p,lines:u,loading:m,onInputChange:h,onInputClick:g,onInputSelect:x,onKeyDown:f,onMouseDown:y,showPromptRow:b}=function({bootScript:e=L,className:t,commands:n=S,embedActive:o=!0,scrollContainerRef:a},r){let[l,s]=i.useState([]),[d,c]=i.useState(""),[p,u]=i.useState(!0),[m,h]=i.useState(!1),g=i.useRef(null),x=i.useRef(!0),f=i.useRef(!1),y=i.useRef([]),b=i.useRef(""),[w,_]=i.useState(null),[I,j]=i.useState(0),k=i.useCallback(()=>{let e=g.current;if(!e)return;let t=e.selectionEnd;null!==t&&j(Math.min(t,e.value.length))},[]);i.useEffect(()=>(x.current=!0,()=>{x.current=!1}),[]);let $=i.useCallback(e=>{x.current&&s(t=>[...t,e])},[]),N=i.useRef(e);N.current=e;let M=i.useRef(!1),T=i.useRef(0),A=i.useCallback(()=>{g.current?.focus({preventScroll:!0})},[]),H=i.useCallback(()=>{g.current?.blur()},[]);i.useEffect(()=>{if(M.current)return void u(!1);let e=++T.current,t=!1;return async function(){f.current=!0,u(!0),e>1&&s([]);let i=N.current;try{for(let n of i){if(t||e!==T.current||!x.current)return;if("line"===n.type)s(e=>[...e,n.text]);else{let e=!0===n.showLoading;e&&(h(!0),await en());try{await ei(n.ms)}finally{e&&x.current&&h(!1)}}}if(t||e!==T.current||!x.current)return;f.current=!1,u(!1),M.current=!0}finally{x.current&&h(!1)}}(),()=>{t=!0}},[]);let E=i.useCallback(()=>{let e=a?.current;if(!e)return;let t=()=>{e.scrollTop=Math.max(0,e.scrollHeight-e.clientHeight)};t(),requestAnimationFrame(t)},[a]);i.useLayoutEffect(()=>{E()},[l,m,p,E]),i.useEffect(()=>{if(!x.current||p||m)return;let e=requestAnimationFrame(()=>{x.current&&(A(),requestAnimationFrame(()=>{k()}))});return()=>cancelAnimationFrame(e)},[p,A,m,k]);let F=i.useMemo(()=>{let e=new Map;for(let t of n)e.set(t.match,t);return e},[n]),R=i.useCallback(()=>{$("Command not recognized."),C({appendLine:$,wait:ei})},[$]),U=i.useCallback(async e=>{let t=e.trim();if(f.current||p||m||!t)return;y.current=function(e,t){if(e.length>0&&e[e.length-1]===t)return e;let i=[...e,t];return i.length>80?i.slice(-80):i}(y.current,t),_(null),b.current="",c(""),j(0);let i=F.get(t);if(!i){$(`${v}${t}`),R();return}f.current=!0,h(!0);try{await en();let e=i.loadingMs??0;if(await ei(e),!x.current)return;$(`${v}${t}`),h(!1),await i.run({appendLine:$,wait:ei})}finally{f.current=!1,x.current&&h(!1)}},[$,p,F,m,R]);i.useImperativeHandle(r,()=>({blur:H,focus:A,submitCommand:e=>{U(e)}}),[H,A,U]);let D=p||m,z=i.useCallback(e=>{let t=()=>{queueMicrotask(()=>k())};if("Enter"===e.key){e.preventDefault(),U(d);return}if("ArrowUp"===e.key||"ArrowDown"===e.key){if(D||p)return;let i=y.current;if(0===i.length)return void t();if("ArrowUp"===e.key){if(e.preventDefault(),null===w){b.current=d;let e=i.length-1,t=i[e]??"";_(e),c(t),j(t.length)}else if(w>0){let e=w-1,t=i[e]??"";_(e),c(t),j(t.length)}return}if(null===w)return void t();if(e.preventDefault(),w<i.length-1){let e=w+1,t=i[e]??"";_(e),c(t),j(t.length)}else{_(null);let e=b.current;c(e),j(e.length),b.current=""}return}t()},[p,D,U,w,d,k]);return{booting:p,busy:D,caretIndex:I,className:t,embedActive:o,input:d,inputRef:g,lines:l,loading:m,onInputChange:i.useCallback(e=>{let t=e.target.value,i=e.target.selectionEnd;c(t),null!==i&&j(Math.min(i,t.length))},[]),onInputClick:k,onInputSelect:k,onKeyDown:z,onMouseDown:A,showPromptRow:!p}}(e,n),w=function(e){let t=(0,r.default)("(prefers-reduced-motion: reduce)"),[n,o]=i.useState(0);return(i.useEffect(()=>{e&&o(0)},[e]),i.useEffect(()=>{if(!e||t)return;let i=window.setInterval(()=>{o(e=>(e+1)%k.length)},80);return()=>window.clearInterval(i)},[e,t]),!e||t)?k[0]:k[n]}(m),_=Math.min(l,c.length),I=_<c.length?c.charAt(_):" ";return(0,t.jsxs)(M,{"aria-busy":o||m||void 0,"aria-label":"CLI demo",className:s,"data-markdown-exclude":"",role:"region",tabIndex:-1,onMouseDown:y,children:[(0,t.jsx)(T,{htmlFor:"interactive-terminal-input",children:"Terminal demo: type a command and press Enter."}),(0,t.jsx)(A,{"aria-live":"polite",children:u.map((i,n)=>(0,t.jsx)(H,{children:function(e,i,n){if(!e)return e;if(e.startsWith(v)){let o=e.slice(v.length);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(P,{children:[(0,t.jsx)(G,{children:"→"})," ",(0,t.jsx)(Q,{children:"~"})," "]}),ee(et(o,i),i,n)]})}return ee(et(e,i),i,n)}(i,n,e.linkHrefOverrides)},n))}),m&&(0,t.jsx)(U,{children:(0,t.jsx)(z,{"aria-hidden":"true",children:(0,t.jsxs)(W,{children:[(0,t.jsx)(B,{children:w}),"Loading…"]})})}),b&&(0,t.jsxs)(U,{children:[(0,t.jsx)(z,{"aria-hidden":"true",children:(0,t.jsxs)(P,{children:[(0,t.jsx)(G,{children:"→"})," ",(0,t.jsx)(Q,{children:"~"})," "]})}),(0,t.jsxs)(O,{children:[(0,t.jsx)(q,{ref:p,autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",disabled:a,id:"interactive-terminal-input",spellCheck:!1,type:"text",value:c,onChange:h,onClick:g,onKeyDown:f,onSelect:x}),(0,t.jsxs)(K,{"aria-hidden":"true",children:[c.slice(0,_),(0,t.jsxs)(Y,{children:[(0,t.jsx)(X,{children:I}),(0,t.jsx)(V,{$embedActive:d,"aria-hidden":"true"})]}),c.slice(_+1)]})]})]}),(0,t.jsx)(D,{"aria-hidden":"true"})]})}));eo.displayName="InteractiveTerminal";var ea=e.i(392944),er=e.i(194547);let el=i.memo(i.forwardRef(function({bootScript:e,className:n,commands:o,linkHrefOverrides:r,size:l="default"},s){let d=i.useRef(null),c=i.useRef(null),p=i.useRef(null),[u,m]=i.useState(!1),h=i.useCallback(()=>{let e=c.current;e&&m(e.contains(document.activeElement))},[]);i.useImperativeHandle(s,()=>({blur:()=>p.current?.blur(),focus:()=>p.current?.focus(),submitCommand:e=>p.current?.submitCommand(e)}),[]),i.useEffect(()=>{let e=c.current;if(!e)return;let t=()=>{queueMicrotask(h)};e.addEventListener("focusin",h),e.addEventListener("focusout",t);let i=t=>{e.contains(t.target)||p.current?.blur(),queueMicrotask(h)};return document.addEventListener("pointerdown",i),()=>{e.removeEventListener("focusin",h),e.removeEventListener("focusout",t),document.removeEventListener("pointerdown",i)}},[h]);let g=i.useCallback(e=>{let t=e.target;if(t instanceof HTMLInputElement&&"interactive-terminal-input"===t.id)return;let i=()=>p.current?.focus();i(),window.setTimeout(i,0)},[]);return(0,t.jsxs)(es,{ref:c,"aria-label":"Interactive demonstration of the Hex CLI",className:n,"data-markdown-exclude":"","data-nosnippet":"",role:"group",onPointerDownCapture:g,children:[(0,t.jsxs)(ed,{children:[(0,t.jsx)(eu,{$size:l,children:(0,t.jsxs)(er.BrowserWindowToolbar,{children:[(0,t.jsxs)(er.BrowserWindowButtons,{children:[(0,t.jsx)(er.TrafficLight,{}),(0,t.jsx)(er.TrafficLight,{}),(0,t.jsx)(er.TrafficLight,{})]}),(0,t.jsx)(er.BrowserWindowTitle,{className:a.textStyles.annotation,children:"Hex CLI"}),(0,t.jsx)("div",{})]})}),(0,t.jsx)(ec,{ref:d,intentScroll:!1,children:(0,t.jsx)(ep,{$size:l,children:(0,t.jsx)(eo,{ref:p,bootScript:e,commands:o,embedActive:u,linkHrefOverrides:r,scrollContainerRef:d})})})]}),(0,t.jsxs)(er.DashedLines,{children:[(0,t.jsx)(er.DashedLine,{"data-top":!0}),(0,t.jsx)(er.DashedLine,{"data-left":!0}),(0,t.jsx)(er.DashedLine,{"data-right":!0}),(0,t.jsx)(er.DashedLine,{"data-bottom":!0})]})]})}));el.displayName="InteractiveFeatureCLI";let es=n.styled.div.withConfig({displayName:"InteractiveFeatureCLI__ShellRoot",componentId:"sc-9db7323e-0"})`
  display: flex;
  flex-direction: column;
  flex: 1 1 600px;
  min-width: 600px;
  max-width: 100%;
  min-height: 0;
  width: 100%;
  height: 70vh;
  max-height: 550px;
  z-index: 1;
  position: relative;
  border-radius: 6px;

  &::before {
    content: '';
    display: ${({theme:e})=>"light"===e.name?"none":"block"};
    position: absolute;
    inset: -1px;
    /* Above Shell fill so the 1px masked ring is visible at the rim */
    z-index: 2;
    border-radius: inherit;
    padding: 1px;
    pointer-events: none;
    background: linear-gradient(
      135deg,
      ${({theme:e})=>e.highlightColor40},
      ${({theme:e})=>e.borderColor.DEFAULT},
      ${({theme:e})=>e.highlightColor20}
    );
    /* Longhand + no-repeat: Firefox omits the ring if layers repeat (see Mozilla bug 1697311). */
    mask-image: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff);
    mask-clip: content-box, border-box;
    mask-origin: border-box, border-box;
    mask-repeat: no-repeat;
    mask-size:
      100% 100%,
      100% 100%;
    mask-composite: exclude;
    -webkit-mask-image: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff);
    -webkit-mask-clip: content-box, border-box;
    -webkit-mask-origin: border-box, border-box;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size:
      100% 100%,
      100% 100%;
    -webkit-mask-composite: xor;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    pointer-events: none;
  }
`,ed=(0,n.styled)(o.Card).attrs({effect:"glass"}).withConfig({displayName:"InteractiveFeatureCLI__Shell",componentId:"sc-9db7323e-1"})`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
  width: 100%;
  height: 100%;
  background-color: ${({theme:e})=>e.appUI.backgroundColor.DEFAULT};
  padding: 0;
  border-radius: 6px;
  box-shadow: ${({theme:e})=>e.appUI.windowShadow.DEFAULT};
  transition:
    box-shadow 0.2s ease-in-out,
    transform 0.2s ease-in-out;

  &:hover {
    box-shadow: ${({theme:e})=>e.appUI.windowShadow.HOVER};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,ec=(0,n.styled)(ea.IntentScrollable2).withConfig({displayName:"InteractiveFeatureCLI__Content",componentId:"sc-9db7323e-2"})`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-width: 0;
  border-radius: 6px;
  padding: 0;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`,ep=n.styled.div.withConfig({displayName:"InteractiveFeatureCLI__TerminalScrollPad",componentId:"sc-9db7323e-3"})`
  box-sizing: border-box;
  min-width: 0;
  /* Match scrollport when output is short; still grows with transcript when long. */
  min-height: 100%;
  font-size: ${({$size:e})=>"small"===e?"11px":"14px"};
  /* In-flow vertical inset so it counts toward scrollHeight (unlike padding on the scroller). */
  padding: calc(10 / 14 * 1em) 0 calc(36 / 14 * 1em);
`,eu=n.styled.div.withConfig({displayName:"InteractiveFeatureCLI__Toolbar",componentId:"sc-9db7323e-4"})`
  display: flex;
  align-items: center;
  padding: ${({$size:e})=>"small"===e?"8px":"12px 8px"};
`;e.s(["InteractiveFeatureCLI",0,el],798677)},316983,e=>{"use strict";var t=e.i(843476),i=e.i(271645),n=e.i(997053),o=e.i(537193),a=e.i(598043);let r=n.default.a.withConfig({displayName:"AnnouncementPillLink__Root",componentId:"sc-3e6e3317-0"})`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
  background-color: ${({theme:e})=>e.backgroundColor50};
  padding: 2px;
  border-radius: 999px;
  overflow: clip;
  width: fit-content;

  &::before {
    position: absolute;
    inset: 0;
    content: '';
    border-radius: inherit;
    backdrop-filter: brightness(1.6) saturate(2);
    mask-image: linear-gradient(
      70deg,
      transparent,
      transparent calc(50% - 70px),
      red calc(50% - 3px),
      red calc(50% + 3px),
      transparent calc(50% + 30px)
    );

    transform: translateX(calc(-50% - 80px));
    opacity: 1;

    @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
      margin-left: auto;
      margin-right: auto;
    }
  }

  &:hover::before {
    animation: announcement-pill-shine;
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  }

  @keyframes announcement-pill-shine {
    from {
      transform: translateX(calc(-50% - 40px));
    }
    to {
      transform: translateX(calc(50% + 130px));
    }
  }
`,l=n.default.span.withConfig({displayName:"AnnouncementPillLink__Announcement",componentId:"sc-3e6e3317-1"})`
  display: flex;
  align-items: center;
  gap: 5px;
  padding-right: 10px;
  font-size: ${({theme:e})=>e.fontSize.SMALL};
  color: ${({theme:e})=>e.palette.fg1200};
  font-weight: ${({theme:e})=>e.fontWeight.LIGHT};
  line-height: 1;
`,s=n.default.span.withConfig({displayName:"AnnouncementPillLink__InnerPill",componentId:"sc-3e6e3317-2"})`
  border-radius: 999px;
  background-color: ${({theme:e})=>e.backgroundColor};
  padding: 8px 14px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  -webkit-backdrop-filter: blur(1px);
  backdrop-filter: blur(3px);
  box-shadow: ${({theme:e})=>{let t=e.highlightColor20,i=e.highlightColor40;return`0px -0.5px 0 0.5px ${t},
      0 0.5px 0 0.5px ${i}, 0px 1px 2px rgba(0 0 0 / 0.32), 0px 2px 5px rgba(0 0 0 / 0.18)`}};
`,d=n.default.span.withConfig({displayName:"AnnouncementPillLink__IconPill",componentId:"sc-3e6e3317-3"})`
  border-radius: 999px;

  > svg {
    display: block;
  }
`,c=n.default.span.withConfig({displayName:"AnnouncementPillLink__PillLabel",componentId:"sc-3e6e3317-4"})`
  font-size: ${({theme:e})=>e.fontSize.SMALL};
  font-weight: ${({theme:e})=>e.fontWeight.BOLD};
  line-height: 1;
`;function p(){return(0,t.jsx)("svg",{fill:"none",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{clipRule:"evenodd",d:"M9.11611 8.00001L5.46967 11.6465L6.17677 12.3536L10.5303 8.00001L6.17677 3.64645L5.46967 4.35356L9.11611 8.00001Z",fill:"currentColor",fillRule:"evenodd"})})}let u=i.memo(({subCopy:e,className:i,icon:n,pillLabel:u,to:m})=>(0,t.jsxs)(r,{className:i,href:m,onClick:()=>{(0,o.trackAnnouncementPillClicked)((0,a.reactNodeToPlainTextNormalized)(u),m)},children:[(0,t.jsxs)(s,{children:[(0,t.jsx)(d,{children:n}),(0,t.jsx)(c,{children:u})]}),e&&(0,t.jsxs)(l,{children:["string"==typeof e?(0,t.jsx)("span",{children:e}):e,(0,t.jsx)(p,{})]})]}));u.displayName="AnnouncementPillLink",e.s(["AnnouncementPillLink",0,u])},237673,e=>{"use strict";var t=e.i(843476),i=e.i(997053),n=e.i(739876),o=e.i(581444),a=e.i(360571);let r=(0,i.default)(o.LayoutSubgrid).withConfig({displayName:"FullWidthQuote__Section",componentId:"sc-1b6d6d80-0"})`
  border-top: 1px solid ${({theme:e})=>(0,n.gridColorSelector)(e,"major")};
  background-color: ${({theme:e})=>e.palette.bg300};
`,l=i.default.div.withConfig({displayName:"FullWidthQuote__Container",componentId:"sc-1b6d6d80-1"})`
  display: flex;
  position: relative;
`,s=i.default.div.withConfig({displayName:"FullWidthQuote__Accent",componentId:"sc-1b6d6d80-2"})`
  position: absolute;
  bottom: 0px;
  height: 8px;
  width: 8px;
  border-top: 1px solid ${({theme:e})=>e.palette.fg1200};
  border-left: 1px solid ${({theme:e})=>e.palette.fg1200};
  left: -1px;
  transform: translateY(100%);
  z-index: 1;

  &[data-right] {
    border-left: none;
    border-right: 1px solid ${({theme:e})=>e.palette.fg1200};
    grid-column: -1 !important;
    left: auto;
    right: -1px;
  }
`,d=i.default.div.withConfig({displayName:"FullWidthQuote__QuoteContainer",componentId:"sc-1b6d6d80-3"})`
  width: 90%;
  max-width: 1270px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 60px;
  padding: ${(0,a.generateFluidPxScale)(30,60)} 0;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    flex-direction: column;
    align-items: flex-start;
  }
`,c=i.default.img.withConfig({displayName:"FullWidthQuote__Logo",componentId:"sc-1b6d6d80-4"})`
  max-width: 160px;
  max-height: 60px;
  width: auto;
  height: auto;
  object-fit: contain;
  object-position: left;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    max-width: 100px;
    max-height: 40px;
  }
`,p=i.default.div.withConfig({displayName:"FullWidthQuote__Attribution",componentId:"sc-1b6d6d80-5"})`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-shrink: 0;
`,u=i.default.div.withConfig({displayName:"FullWidthQuote__Divider",componentId:"sc-1b6d6d80-6"})`
  background: ${({theme:e})=>(0,n.gridColorSelector)(e,"major")};
  width: 1px;
  height: 100%;
`,m=i.default.div.withConfig({displayName:"FullWidthQuote__Author",componentId:"sc-1b6d6d80-7"})`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    text-align: center;
  }
`,h=i.default.div.withConfig({displayName:"FullWidthQuote__AuthorName",componentId:"sc-1b6d6d80-8"})`
  color: ${({theme:e})=>e.palette.fgLoud};

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    font-size: ${({theme:e})=>e.fontSize.body.base};
    font-weight: ${({theme:e})=>e.fontWeight.NORMAL};
  }
`,g=i.default.div.withConfig({displayName:"FullWidthQuote__AuthorTitle",componentId:"sc-1b6d6d80-9"})`
  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    font-size: ${({theme:e})=>e.fontSize.body.xs};
  }
`,x=i.default.blockquote.withConfig({displayName:"FullWidthQuote__QuoteText",componentId:"sc-1b6d6d80-10"})`
  strong {
    font-weight: ${({theme:e})=>e.fontWeight.BOLD};
    color: ${({theme:e})=>e.palette.fgLoud};
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    padding-left: 0;
    text-align: center;
    padding: 0 12px;
    font-size: ${({theme:e})=>e.fontSize.body.l};
    line-height: ${({theme:e})=>e.lineHeight.body.l};
    max-width: 600px;
    margin: 0 auto;
  }
`,f=i.default.div.withConfig({displayName:"FullWidthQuote__MobileWrapper",componentId:"sc-1b6d6d80-11"})`
  display: none;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 40px 0;
  }
`,y=i.default.div.withConfig({displayName:"FullWidthQuote__DesktopWrapper",componentId:"sc-1b6d6d80-12"})`
  display: block;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    display: none;
  }
`,b=i.default.div.withConfig({displayName:"FullWidthQuote__Margin",componentId:"sc-1b6d6d80-13"})`
  position: relative;
  grid-column: 1 / span 1;

  &[data-right] {
    grid-column: -2 / span 1;
  }
`,w=i.default.div.withConfig({displayName:"FullWidthQuote__AccentL",componentId:"sc-1b6d6d80-14"})`
  height: 8px;
  width: 8px;
  position: absolute;
  top: -8px;
  right: -7px;
  border-bottom: 1px solid ${({theme:e})=>e.palette.fg1200};
  border-left: 1px solid ${({theme:e})=>e.palette.fg1200};

  &[data-right] {
    border-right: 1px solid ${({theme:e})=>e.palette.fg1200};
    border-left: none;
    right: auto;
    left: -7px;
  }
`;e.s(["FullWidthQuote",0,function({logoPath:e,quote:i,authorName:n,authorTitle:o,authorCompany:a}){let _=(0,t.jsx)(c,{alt:`${n} quote`,loading:"lazy",src:e}),I=(0,t.jsx)(x,{className:"text-xl",children:i}),j=(0,t.jsxs)(m,{children:[(0,t.jsx)(h,{className:"text-l",children:n}),(0,t.jsxs)(g,{className:"annotation",children:[o,", ",a]})]});return(0,t.jsxs)(r,{children:[(0,t.jsx)(b,{children:(0,t.jsx)(w,{})}),(0,t.jsx)(y,{children:(0,t.jsxs)(l,{children:[(0,t.jsxs)(d,{children:[(0,t.jsxs)(p,{children:[_,j]}),(0,t.jsx)(u,{}),I]}),(0,t.jsx)(s,{}),(0,t.jsx)(s,{"data-right":!0})]})}),(0,t.jsxs)(f,{children:[_,I,(0,t.jsx)(p,{children:j})]}),(0,t.jsx)(b,{"data-right":!0,children:(0,t.jsx)(w,{"data-right":!0})})]})}])},600376,e=>{"use strict";var t=e.i(843476),i=e.i(657688),n=e.i(997053),o=e.i(706736),a=e.i(653272),r=e.i(785191),l=e.i(258591),s=e.i(650617);let d=(0,n.default)(r.Card).withConfig({displayName:"InfoTextImageCard__StyledCard",componentId:"sc-3c8c3853-0"})`
  padding: 0;
  flex: 1 1 0;
  min-width: 0;
  overflow: hidden;

  ${({$imageAlign:e})=>"right"===e&&n.css`
      align-items: flex-end;
    `}

  ${({$size:e})=>"small"===e&&n.css`
      @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
        flex: 1 1 auto;
        flex-direction: row;
      }

      @media (max-width: ${({theme:e})=>e.mediaQuery.MOBILE}) {
        flex-direction: column;
      }
    `}
`,c=n.default.div.withConfig({displayName:"InfoTextImageCard__TextContent",componentId:"sc-3c8c3853-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 40px 40px 20px 40px;
  align-items: flex-start;

  p {
    margin-bottom: 8px;
  }

  ${({$size:e})=>"small"===e&&n.css`
      @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
        width: 60%;
        flex: none;
      }

      @media (max-width: ${({theme:e})=>e.mediaQuery.MOBILE}) {
        width: 100%;
      }
    `}
`,p=(0,n.default)(l.Heading).withConfig({displayName:"InfoTextImageCard__Eyebrow",componentId:"sc-3c8c3853-2"})`
  text-wrap: balance;
`,u=(0,n.default)(l.Heading).withConfig({displayName:"InfoTextImageCard__StyledHeading",componentId:"sc-3c8c3853-3"})`
  text-wrap: balance;
`,m=(0,n.default)(s.Text).withConfig({displayName:"InfoTextImageCard__StyledText",componentId:"sc-3c8c3853-4"})`
  text-wrap: balance;
`,h=n.default.div.withConfig({displayName:"InfoTextImageCard__ImageWrapper",componentId:"sc-3c8c3853-5"})`
  display: flex;
  margin-top: auto;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    img {
      width: ${({$size:e})=>"small"===e?"400px":"500px"};
      height: auto;
    }
  }
`;e.s(["InfoTextImageCard",0,function({title:e,description:n,buttonText:r,buttonLink:l,image:s,imageHeight:g,imageWidth:x,size:f="default",imageAlign:y="left",smallTitle:b}){let w=Array.isArray(n)?(0,t.jsx)(t.Fragment,{children:n.map((e,i)=>(0,t.jsx)(m,{size:"medium",children:e},i))}):(0,t.jsx)(m,{size:"medium",children:n}),_=!!(r&&l);return(0,t.jsxs)(d,{$imageAlign:y,$size:f,effect:"glass",children:[(0,t.jsxs)(c,{$size:f,children:[b?(0,t.jsx)(p,{renderAs:"h6",children:b}):null,(0,t.jsx)(u,{renderAs:"h3",children:e}),w,_?(0,t.jsx)(o.Button,{href:l,isExternal:!(0,a.isInternalLink)(l),text:r}):null]}),(0,t.jsx)(h,{$size:f,children:(0,t.jsx)(i.default,{alt:e,height:g,src:`/images/${s.replace(/\.([^.]+)$/,"@2x.$1")}`,width:x})})]})}])},302542,e=>{"use strict";var t=e.i(846932),i=e.i(997053);let n=(0,i.styled)(t.motion.div).withConfig({displayName:"Tabs__TabOption",componentId:"sc-2a902926-0"})`
  padding: 15px 25px 20px;
  opacity: 0.6;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 0;
  flex: none;
  gap: 8px;
  user-select: none;
  cursor: pointer;
  transition:
    background
      ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`},
    opacity
      ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`};

  &:hover {
    opacity: 1;
  }

  &:active {
    background: linear-gradient(
      180deg,
      rgba(245, 192, 192, 0.05) 0%,
      rgba(245, 192, 192, 0) 190%
    );
  }

  ${({$selected:e})=>e&&i.css`
      opacity: 1;
      background: linear-gradient(
        180deg,
        rgba(245, 192, 192, 0.098) 0%,
        rgba(245, 192, 192, 0) 100%
      );

      @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
        background: rgba(245, 192, 192, 0.098);
      }
    `}
`,o=i.styled.div.withConfig({displayName:"Tabs",componentId:"sc-2a902926-1"})`
  display: flex;
  border-top: 1px solid ${({theme:e})=>e.palette.fg800};
  flex: none;

  ${({fill:e})=>e&&i.css`
      width: 100%;

      ${n} {
        flex: 1 1 auto;
      }
    `}

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;

    ${n} {
      flex: 1 0 auto;
      padding: 15px 20px;
    }
  }
`;e.s(["TabOption",0,n,"Tabs",0,o])}]);