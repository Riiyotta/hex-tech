(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,589194,t=>{"use strict";var e=t.i(843476),o=t.i(271645),i=t.i(657688),s=t.i(997053),l=t.i(846932),a=t.i(32130),r=t.i(706736),n=t.i(273454),d=t.i(258591),c=t.i(650617),p=t.i(281342),h=t.i(360571),u=t.i(991709),x=t.i(665419);let m=(0,s.default)(l.motion.div).withConfig({displayName:"IntegrationsTout__Wrapper",componentId:"sc-5ea9153-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${(0,h.generateFluidPxScale)(40,70)} 0 ${(0,h.generateFluidPxScale)(40,60)};
  position: relative;
`,g=s.default.div.withConfig({displayName:"IntegrationsTout__Inner",componentId:"sc-5ea9153-1"})`
  display: flex;
  flex-direction: column;
  max-width: ${({theme:t})=>t.maxWidth.PAGE};
  padding: 0 40px;
  margin: 0 auto;
  z-index: 1;
  position: relative;
  width: 100%;
`,f=s.default.div.withConfig({displayName:"IntegrationsTout__Top",componentId:"sc-5ea9153-2"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: ${(0,h.generateFluidPxScale)(40,70)};
  position: relative;

  @media (max-width: ${({theme:t})=>t.mediaQuery.MEDIUM}) {
    margin-bottom: 30px;
  }
`,v=(0,s.default)(n.GradientHeader).withConfig({displayName:"IntegrationsTout__StyledHeading",componentId:"sc-5ea9153-3"})`
  && {
    margin-bottom: 0;
    max-width: 800px;
  }
`,j=(0,s.default)(c.Text).attrs({size:"extra-large"}).withConfig({displayName:"IntegrationsTout__Description",componentId:"sc-5ea9153-4"})`
  text-align: center;
  max-width: 500px;
  margin-bottom: 0;
`,y=s.default.div.withConfig({displayName:"IntegrationsTout__Grid",componentId:"sc-5ea9153-5"})`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;

  @media (max-width: ${({theme:t})=>t.mediaQuery.LARGE}) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }

  @media (max-width: ${({theme:t})=>t.mediaQuery.SMALL}) {
    display: flex;
    flex-direction: column;
  }
`,_=s.default.div.withConfig({displayName:"IntegrationsTout__Illustration",componentId:"sc-5ea9153-6"})`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 160px;
  flex: none;
  overflow: hidden;
  transition: transform
    ${({theme:t})=>`${t.animation.DURATION} ${t.animation.EASING}`};

  svg {
    color: ${({theme:t})=>t.highlightColor};
  }
`,C=s.default.div.withConfig({displayName:"IntegrationsTout__Info",componentId:"sc-5ea9153-7"})`
  padding: 35px 20px 10px;
  transition: transform
    ${({theme:t})=>`${t.animation.DURATION} ${t.animation.EASING}`};
`,z=(0,s.default)(a.GridItem).withConfig({displayName:"IntegrationsTout__StyledGridItem",componentId:"sc-5ea9153-8"})`
  &&& {
    padding: 5px;

    &:hover {
      ${_} {
        transform: scale(1.04) translateY(-5px);
      }

      ${C} {
        transform: translateY(-3px);
      }
    }
  }
`,w=s.default.div.withConfig({displayName:"IntegrationsTout__WarehouseLogos",componentId:"sc-5ea9153-9"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;

  > svg {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
    margin: 0 auto;
  }
`,I=s.default.div.withConfig({displayName:"IntegrationsTout__MainWarehouseLogos",componentId:"sc-5ea9153-10"})`
  display: flex;
  flex-direction: column;
  flex: none;
  gap: 5px;
  margin-bottom: 2px;
`,M=s.default.div.withConfig({displayName:"IntegrationsTout__LogoRow",componentId:"sc-5ea9153-11"})`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;

  > a {
    display: flex;
    position: relative;
    z-index: 1;

    svg {
      width: auto;
    }
  }
`,S=s.default.div.withConfig({displayName:"IntegrationsTout__WarehouseLogoGrid",componentId:"sc-5ea9153-12"})`
  display: flex;
  flex: none;
  gap: 3px;
  align-items: center;
  justify-content: center;

  > a {
    position: relative;
    z-index: 1;
  }
`,O=s.default.div.withConfig({displayName:"IntegrationsTout__LogoIllustrationCombo",componentId:"sc-5ea9153-13"})`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 25px;

  > svg {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
    margin: 0 auto;

    [data-color='background'] {
      fill: ${({theme:t})=>t.backgroundColor};
    }
  }
`,b=s.default.div.withConfig({displayName:"IntegrationsTout__LogoPairing",componentId:"sc-5ea9153-14"})`
  display: flex;
  align-items: center;
  gap: 2px;
  position: relative;
  z-index: 1;
  width: 80%;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: ${({theme:t})=>t.mediaQuery.MEDIUM}) {
    width: 100%;
  }
`,N=(0,s.default)(r.Button).withConfig({displayName:"IntegrationsTout__IntegButton",componentId:"sc-5ea9153-15"})`
  &&& {
    padding: 0;

    > div,
    > div > div {
      height: 100%;
    }

    ${({$iconOnly:t})=>t&&s.css`
        width: 26px;
        flex: none;
      `};
  }
`,L=s.default.div.withConfig({displayName:"IntegrationsTout__IntegLogo",componentId:"sc-5ea9153-16"})`
  display: flex;
  height: 100%;

  [data-icon='true'] {
    align-self: center;
  }

  [data-color='foreground'] {
    fill: ${({theme:t})=>t.fontColor.LOUD};
  }
`,A=(0,s.default)(c.Text).attrs({size:"medium"}).withConfig({displayName:"IntegrationsTout__IntegText",componentId:"sc-5ea9153-17"})``,T=s.default.div.withConfig({displayName:"IntegrationsTout__IntegWrapper",componentId:"sc-5ea9153-18"})`
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 0 8px;
  height: 100%;

  ${L} {
    > div {
      width: 30px;
      height: 30px;
    }
  }

  ${({$iconOnly:t})=>t&&s.css`
      padding: 0;

      ${L} {
        > div,
        > div > svg {
          width: 20px;
          height: 20px;
        }
      }
    `};
`,U=o.memo(({logo:t,name:o,slug:i,iconOnly:s=!1})=>{let l=i?`/product/integrations/${i}`:void 0;return(0,e.jsx)(N,{$iconOnly:s,disabled:!i,href:l,size:"small",stylez:"minimal",text:(0,e.jsxs)(T,{$iconOnly:s,children:[(0,e.jsx)(L,{children:t}),o&&(0,e.jsx)(A,{children:o})]})})});U.displayName="Integ";let k=[{title:"Built for the warehouse",illustration:(0,e.jsxs)(w,{children:[(0,e.jsxs)(I,{children:[(0,e.jsxs)(M,{children:[(0,e.jsx)(U,{logo:(0,e.jsx)(function({className:t}){return(0,e.jsxs)("svg",{className:t,fill:"none",viewBox:"0 0 140 50",xmlns:"http://www.w3.org/2000/svg",children:[(0,e.jsx)("g",{clipPath:"url(#snowflake_svg__a)",children:(0,e.jsx)("path",{clipRule:"evenodd",d:"M138.111 18.437h-.369v.459h.369c.17 0 .283-.076.283-.23s-.104-.23-.283-.23m-.824-.42h.831c.459 0 .758.248.758.633a.61.61 0 0 1-.301.533l.326.472v.094h-.473l-.317-.459h-.369v.46h-.459zm2.325.9c0-.919-.617-1.63-1.563-1.63-.945 0-1.544.668-1.544 1.63 0 .917.617 1.631 1.544 1.631s1.563-.704 1.563-1.632m.388 0c0 1.092-.73 2-1.951 2s-1.93-.918-1.93-2c0-1.084.721-2 1.93-2s1.942.91 1.942 2zm-109.222 3.88-3.761 2.176 3.761 2.168a1.986 1.986 0 1 1-1.982 3.443l-6.736-3.902a1.97 1.97 0 0 1-.9-1.131 2 2 0 0 1-.087-.645q.005-.234.069-.459a2 2 0 0 1 .918-1.189l6.736-3.887a1.986 1.986 0 1 1 1.982 3.442zm-3.561 10.54-6.734-3.883a1.95 1.95 0 0 0-1.147-.259 1.98 1.98 0 0 0-1.836 1.976v7.775a1.983 1.983 0 1 0 3.965 0v-4.36l3.78 2.194a1.986 1.986 0 0 0 1.98-3.443zm-7.771-7.605-2.8 2.786a.55.55 0 0 1-.35.15h-.822a.57.57 0 0 1-.354-.15l-2.797-2.786a.57.57 0 0 1-.145-.349v-.823a.57.57 0 0 1 .145-.354l2.797-2.802a.57.57 0 0 1 .354-.147h.821c.13.006.255.058.351.147l2.8 2.795a.57.57 0 0 1 .145.354v.823a.57.57 0 0 1-.145.356m-2.233-.776a.6.6 0 0 0-.147-.355l-.817-.806a.56.56 0 0 0-.349-.147h-.032a.56.56 0 0 0-.349.147l-.81.806a.58.58 0 0 0-.144.355v.03c.005.13.057.253.144.35l.81.81a.57.57 0 0 0 .35.146h.031a.56.56 0 0 0 .35-.147l.812-.81a.58.58 0 0 0 .151-.349zM4.552 16.6l6.736 3.887a1.99 1.99 0 0 0 2.983-1.719v-7.775a1.983 1.983 0 1 0-3.966 0v4.36l-3.772-2.187a1.985 1.985 0 1 0-1.981 3.443zm14.784 4.146c.4.033.8-.058 1.147-.259l6.734-3.887a1.987 1.987 0 0 0-1.98-3.443l-3.771 2.187v-4.36a1.983 1.983 0 1 0-3.966 0v7.784a1.983 1.983 0 0 0 1.836 1.978m-6.899 8.462c-.4-.034-.8.056-1.147.259l-6.738 3.871a1.987 1.987 0 0 0 .473 3.639 1.98 1.98 0 0 0 1.507-.196l3.773-2.176v4.36a1.983 1.983 0 0 0 3.966 0v-7.793a1.98 1.98 0 0 0-1.834-1.964m-1.836-3.642a1.94 1.94 0 0 0 .019-1.104 1.96 1.96 0 0 0-.918-1.189l-6.717-3.908a1.987 1.987 0 0 0-1.983 3.442l3.761 2.176-3.77 2.16a1.988 1.988 0 1 0 1.992 3.442l6.721-3.902a1.96 1.96 0 0 0 .905-1.129zm83.535-11.62h-.328a4.3 4.3 0 0 0-1.377.198 2.5 2.5 0 0 0-1.129.734c-.308.36-.526.788-.636 1.249a6.7 6.7 0 0 0-.183 1.634v1.188h-1.31a.815.815 0 0 0-.818.797.88.88 0 0 0 .23.613.9.9 0 0 0 .587.268h1.302v9.694a.83.83 0 0 0 .247.585c.163.15.378.232.6.23a.817.817 0 0 0 .805-.822v-9.687h1.409a.9.9 0 0 0 .585-.262.85.85 0 0 0 .248-.603v-.032a.815.815 0 0 0-.824-.792h-1.418v-1.184a4.9 4.9 0 0 1 .142-1.2c.047-.211.14-.409.273-.579a.94.94 0 0 1 .404-.248c.27-.077.55-.112.83-.103h.37a.844.844 0 1 0 0-1.689zm29.054 6.273a.86.86 0 0 0 .255-.597.78.78 0 0 0-.258-.576.8.8 0 0 0-.58-.248.8.8 0 0 0-.581.248l-6.478 6.304V14.726a.847.847 0 0 0-.854-.831.83.83 0 0 0-.583.246.84.84 0 0 0-.245.585v15.55a.835.835 0 0 0 .828.829.84.84 0 0 0 .854-.829V27.71l2.113-2.109 4.306 5.194c.073.11.176.195.298.245q.171.063.353.065a.87.87 0 0 0 .542-.177h.011a.86.86 0 0 0 .271-.627.86.86 0 0 0-.204-.55l-4.383-5.327 4.337-4.197zm-11.704-1.07a.83.83 0 0 1 .248.595v10.533a.837.837 0 0 1-.829.829.84.84 0 0 1-.831-.829v-1.028a5.55 5.55 0 0 1-8.241.05 6.32 6.32 0 0 1 0-8.59 5.58 5.58 0 0 1 4.127-1.801 5.59 5.59 0 0 1 4.114 1.83V19.73a.83.83 0 0 1 .251-.594.847.847 0 0 1 1.161 0zm-1.412 5.868a4.63 4.63 0 0 0-1.223-3.171 3.9 3.9 0 0 0-5.813 0 4.64 4.64 0 0 0-1.23 3.171 4.6 4.6 0 0 0 1.235 3.144 3.945 3.945 0 0 0 4.498.947c.501-.22.95-.543 1.319-.947a4.6 4.6 0 0 0 1.224-3.155zm-66.745-.307a20 20 0 0 0-2.187-.801 15 15 0 0 1-1.912-.689 1.9 1.9 0 0 1-.578-.44.82.82 0 0 1-.197-.549 1.3 1.3 0 0 1 .23-.769 2.25 2.25 0 0 1 1.032-.745 3.4 3.4 0 0 1 1.175-.244 3.25 3.25 0 0 1 1.992.64c.23.164.418.331.597.46q.129.107.28.183c.1.055.213.085.328.087a.6.6 0 0 0 .23-.046.7.7 0 0 0 .201-.126.7.7 0 0 0 .15-.202.6.6 0 0 0 .048-.23.9.9 0 0 0-.115-.415 2.5 2.5 0 0 0-.562-.665 5.6 5.6 0 0 0-1.377-.868 4.1 4.1 0 0 0-1.607-.392c-1.232 0-2.26.28-3.009.794a3.2 3.2 0 0 0-.973.968 3.1 3.1 0 0 0-.401 1.563v.088c-.01.566.174 1.12.52 1.567.49.615 1.213.984 1.922 1.246s1.413.418 1.86.567a9 9 0 0 1 1.786.737c.219.125.413.29.574.484.132.18.204.398.207.622v.018c.003.312-.094.616-.278.867-.3.364-.698.632-1.148.774a4 4 0 0 1-1.232.23 4.95 4.95 0 0 1-2.315-.52c-.262-.13-.473-.259-.666-.369-.094-.05-.184-.098-.278-.137a.8.8 0 0 0-.298-.062.543.543 0 0 0-.39.158.8.8 0 0 0-.181.23.64.64 0 0 0-.065.282c.004.16.056.314.147.445.161.213.358.397.583.542q.44.286.918.507a6.6 6.6 0 0 0 2.545.574c1.182 0 2.206-.274 3.066-.919a3.3 3.3 0 0 0 1.365-2.64c.011-.521-.119-1.035-.376-1.488a3.56 3.56 0 0 0-1.61-1.317m54.245-10.814a.83.83 0 0 0-.583.246.81.81 0 0 0-.245.585v15.55a.8.8 0 0 0 .245.583.842.842 0 0 0 1.437-.583v-15.55a.847.847 0 0 0-.854-.831m38.185 10.722v.082a.76.76 0 0 1-.259.572.87.87 0 0 1-.574.211h-9.308c.229 2.272 2.049 3.947 4.216 3.966h.548a3.66 3.66 0 0 0 2.036-.659 5.05 5.05 0 0 0 1.521-1.606.76.76 0 0 1 .308-.296.8.8 0 0 1 .387-.1c.149 0 .295.04.423.116a.896.896 0 0 1 .378.72c.001.151-.04.3-.117.43a7 7 0 0 1-2.065 2.127 5.3 5.3 0 0 1-2.871.897h-.558a5.84 5.84 0 0 1-4.174-1.806 6.13 6.13 0 0 1-1.724-4.243 6.22 6.22 0 0 1 1.731-4.328 5.82 5.82 0 0 1 4.206-1.793 5.74 5.74 0 0 1 4.033 1.648 6.3 6.3 0 0 1 1.852 4.046zm-1.818-.785a4.234 4.234 0 0 0-4.071-3.277 4.29 4.29 0 0 0-4.131 3.272zm-81.767-4.904a5 5 0 0 0-3.37 1.315v-.484a.85.85 0 0 0-.229-.581.8.8 0 0 0-.576-.25.82.82 0 0 0-.83.83v10.766l.034.034q.02.06.055.113a.9.9 0 0 0 .528.418H48a.85.85 0 0 0 .353-.08.7.7 0 0 0 .254-.196s.012-.02.023-.03c.012-.009 0 0 0 0a.8.8 0 0 0 .104-.17q.031-.084.05-.172v-6.513a3.44 3.44 0 0 1 1.014-2.368 3.339 3.339 0 0 1 5.722 2.368v6.348a.833.833 0 0 0 1.411.595.82.82 0 0 0 .248-.595v-6.348a5.02 5.02 0 0 0-5.005-5m16.496 1.787a6.295 6.295 0 0 1 0 8.577 5.55 5.55 0 0 1-8.207 0 6.275 6.275 0 0 1 0-8.577 5.56 5.56 0 0 1 8.207 0m.022 4.29a4.63 4.63 0 0 0-1.22-3.163 3.885 3.885 0 0 0-5.806 0 4.63 4.63 0 0 0-1.23 3.163 4.6 4.6 0 0 0 1.23 3.146 3.903 3.903 0 0 0 5.806 0 4.6 4.6 0 0 0 1.22-3.146m17.9-6.006a.8.8 0 0 0-.297-.062.85.85 0 0 0-.779.51l-3.166 8.67-2.442-5.813a.83.83 0 0 0-.33-.374.87.87 0 0 0-1.258.374l-2.454 5.817-3.185-8.668a.73.73 0 0 0-.303-.385.85.85 0 0 0-.459-.136.8.8 0 0 0-.312.062.83.83 0 0 0-.42 1.063l3.904 10.527q.05.125.137.23a.7.7 0 0 0 .182.137q.03.027.064.048a.4.4 0 0 0 .117.044.9.9 0 0 0 .287.055.81.81 0 0 0 .732-.505h.011l2.477-5.921 2.48 5.898c.055.146.15.274.276.367.118.09.258.149.406.17h.103q.144 0 .278-.05a1 1 0 0 0 .211-.118 1 1 0 0 0 .298-.397l3.902-10.471a.82.82 0 0 0-.443-1.063z",fill:"#29B5E8",fillRule:"evenodd"})}),(0,e.jsx)("defs",{children:(0,e.jsx)("clipPath",{id:"snowflake_svg__a",children:(0,e.jsx)("path",{d:"M0 0h140v50H0z",fill:"#fff"})})})]})},{}),slug:"snowflake"}),(0,e.jsx)(U,{logo:(0,e.jsx)(function({className:t}){return(0,e.jsxs)("svg",{className:t,fill:"none",viewBox:"0 0 113 50",xmlns:"http://www.w3.org/2000/svg",children:[(0,e.jsx)("path",{d:"m36.8 9.244-16.789 4.063V36.7l16.79 4.06z",fill:"#205B98"}),(0,e.jsx)("path",{d:"m40.021 39.156-3.23 1.616V9.244l3.23 1.616zM3.226 9.244l16.786 4.063V36.7l-16.786 4.06z",fill:"#5294CF"}),(0,e.jsx)("path",{d:"m0 39.156 3.226 1.616V9.244L0 10.86z",fill:"#205B98"}),(0,e.jsx)("path",{d:"M30.685 6.187 24.307 3l-2 20.974 2 23.126 6.378-3.183z",fill:"#5294CF"}),(0,e.jsx)("path",{d:"M9.336 6.187 15.716 3l1.999 20.902L15.716 47.1l-6.38-3.183z",fill:"#205B98"}),(0,e.jsx)("path",{d:"M15.716 3h8.597v44.1h-8.597z",fill:"#2D72B8"}),(0,e.jsx)("path",{clipRule:"evenodd",d:"M48.823 15.472c.458-2.406 2.557-3.142 4.457-3.142a4.46 4.46 0 0 1 2.975 1.014c.878.85.869 1.97.86 3.165q-.003.186-.003.373v3.1c.006.704.275 1.379.753 1.894a.395.395 0 0 1 0 .557c-.28.234-.69.61-1.054.942-.177.162-.343.314-.478.434a.41.41 0 0 1-.469.055 4.9 4.9 0 0 1-1.114-1.332 3.9 3.9 0 0 1-3.304 1.48c-1.653 0-2.985-1.062-2.985-3.197a3.5 3.5 0 0 1 2.128-3.339 13.6 13.6 0 0 1 3.77-.7v-.289a2.67 2.67 0 0 0-.26-1.482 1.33 1.33 0 0 0-1.115-.518 1.526 1.526 0 0 0-1.61 1.22.43.43 0 0 1-.312.41l-1.95-.234h-.032a.34.34 0 0 1-.258-.411m26.183 0c.459-2.406 2.558-3.142 4.458-3.142h.006a4.4 4.4 0 0 1 2.975 1.014c.893.865.887 2.011.881 3.23l-.001.308v3.1c.006.704.274 1.379.752 1.894a.41.41 0 0 1 0 .557c-.28.234-.69.61-1.054.942-.177.162-.343.314-.477.434a.41.41 0 0 1-.47.055 4.9 4.9 0 0 1-1.113-1.332 3.9 3.9 0 0 1-3.307 1.485c-1.653 0-2.985-1.063-2.985-3.197a3.495 3.495 0 0 1 2.128-3.344 13.4 13.4 0 0 1 3.744-.7v-.289a2.67 2.67 0 0 0-.234-1.482 1.33 1.33 0 0 0-1.115-.518 1.526 1.526 0 0 0-1.61 1.22.434.434 0 0 1-.339.41l-1.949-.234h-.033a.34.34 0 0 1-.257-.411M63.09 12.956a2.67 2.67 0 0 1 1.645-.521l.006.01c1.248 0 2.03.609 2.647 1.923a2.913 2.913 0 0 1 5.014-.823c.548.778.535 1.862.522 2.866q-.003.223-.004.438v6.686a.394.394 0 0 1-.384.385h-2a.41.41 0 0 1-.369-.385v-5.571q.044-1.003-.055-2a1.043 1.043 0 0 0-1.154-.9 1.33 1.33 0 0 0-1.176.893 6.4 6.4 0 0 0-.179 2v5.572a.395.395 0 0 1-.384.385h-2a.41.41 0 0 1-.369-.385v-5.571q0-.198.006-.413c.022-1.116.05-2.466-1.225-2.466-1.38 0-1.378 1.532-1.376 2.734v5.716a.395.395 0 0 1-.384.385h-2a.41.41 0 0 1-.368-.368V13.02a.394.394 0 0 1 .384-.385h1.85a.394.394 0 0 1 .369.369v1.369a2.67 2.67 0 0 1 .984-1.418m35.647-.521h.02-.04zm0 0c-2.866.011-4.477 2.549-4.477 5.817 0 3.275 1.587 5.872 4.497 5.872 2.786 0 4.568-2.558 4.568-5.772 0-3.3-1.613-5.905-4.588-5.917m8.698 2.128c.563-1.46 1.349-2.128 2.731-2.128l-.017-.004a2.62 2.62 0 0 1 2.334 1.248c.518.84.518 2.247.518 3.275v6.606a.39.39 0 0 1-.385.34h-2a.396.396 0 0 1-.368-.34v-5.71l.002-.283c.009-1.128.022-2.546-1.25-2.546a1.29 1.29 0 0 0-1.076.848 4.9 4.9 0 0 0-.339 2v5.66a.394.394 0 0 1-.384.385h-2.001a.41.41 0 0 1-.368-.385V13.015a.38.38 0 0 1 .385-.34h1.85a.39.39 0 0 1 .368.284zm-21.546-1.84a.37.37 0 0 1 .26-.107v.004h6.596a.37.37 0 0 1 .345.385v1.282c-.083.35-.253.671-.495.936l-3.405 5.015a7.13 7.13 0 0 1 3.744.834.67.67 0 0 1 .355.558v1.595a.362.362 0 0 1-.495.34 7.38 7.38 0 0 0-6.935 0 .346.346 0 0 1-.469-.34v-1.532c-.006-.362.09-.718.278-1.028l3.906-5.787h-3.448a.37.37 0 0 1-.345-.385v-1.51c0-.097.039-.19.108-.26m13.717 2.15a1.27 1.27 0 0 0-.856-.257l-.039-.008c-1.447 0-1.515 2.079-1.515 3.343 0 1.265.019 4.05 1.56 4.05 1.543 0 1.61-2.249 1.61-3.58a10 10 0 0 0-.283-2.79 1.28 1.28 0 0 0-.477-.757M54.34 18.44c-1.436 0-2.986.308-2.963 2.033 0 .892.45 1.51 1.22 1.51a1.62 1.62 0 0 0 1.375-.936 4.13 4.13 0 0 0 .368-2.174zm26.184.433v-.44l-.01-.006c-1.438 0-2.953.313-2.953 2.056 0 .893.45 1.51 1.219 1.51a1.61 1.61 0 0 0 1.376-.936 4.13 4.13 0 0 0 .368-2.184m-3.385 11.749c0-1.11-.399-1.88-1.645-1.88-1.096 0-1.747.593-1.747 1.717 0 1.39 1.09 1.743 2.25 2.119 1.324.428 2.74.886 2.74 2.945 0 2.443-1.791 3.14-3.29 3.14-2.467 0-3.197-1.273-3.197-3.524h1.303c0 1.184.074 2.467 1.984 2.467a1.78 1.78 0 0 0 1.836-1.865c0-1.398-1.09-1.764-2.252-2.154-1.323-.444-2.738-.919-2.738-2.986 0-.976.411-2.917 3.084-2.917 2.013 0 2.932 1.007 2.961 2.946zm-28.363-2.743h3.42c1.656 0 2.709.976 2.709 2.65 0 1.155-.399 2.369-1.628 2.673v.022c.917.103 1.439.86 1.494 1.762l.089 1.808c.06 1.17.25 1.466.563 1.657h-1.569c-.222-.222-.324-1.008-.355-1.526l-.089-1.645c-.102-1.451-.902-1.54-1.569-1.54h-1.762v4.709h-1.303zm1.303 4.796h1.288c.769 0 2.175 0 2.175-2.043 0-1.028-.695-1.688-1.91-1.688h-1.554zm6.75-4.796h5.47v1.155H58.13v3.317h3.923v1.155H58.13v3.79h4.338v1.155h-5.64zm10.185 0h-2.828V38.45h2.961c2.901 0 3.567-2.613 3.567-5.286 0-2.918-.41-5.286-3.7-5.286m-.163 9.505H65.49v-8.438h1.361c2.369 0 2.502 2.19 2.502 4.233 0 1.896-.25 4.205-2.502 4.205m18.504 1.069h1.304V27.878h-1.304v4.317h-3.626v-4.317h-1.304v10.574h1.303v-5.093h3.627zm3.39-10.574h1.31v10.57h-1.303zm8.852 0h-5.463V38.44h1.303v-4.935h3.923V32.35h-3.923v-3.317h4.16zm4.694 10.574h-1.304v-9.417h-2.65v-1.157h6.619v1.155h-2.673z","data-color":"foreground",fill:"#fff",fillRule:"evenodd"})]})},{}),slug:"redshift"})]}),(0,e.jsxs)(M,{children:[(0,e.jsx)(U,{logo:(0,e.jsx)(function({className:t}){return(0,e.jsxs)("svg",{className:t,fill:"none",viewBox:"0 0 110 50",xmlns:"http://www.w3.org/2000/svg",children:[(0,e.jsx)("path",{d:"m9.61 42.154-9.24-16a2.77 2.77 0 0 1 0-2.765L9.61 7.382A2.77 2.77 0 0 1 12.01 6h18.493a2.76 2.76 0 0 1 2.38 1.382l9.25 16.008c.494.855.494 1.91 0 2.765l-9.26 15.999a2.77 2.77 0 0 1-2.4 1.382h-18.49a2.77 2.77 0 0 1-2.385-1.382z",fill:"#4386FA"}),(0,e.jsx)("path",{d:"M27.016 19.598s2.57 6.162-.933 9.656-9.88 1.257-9.88 1.257l12.973 13.023h1.317a2.8 2.8 0 0 0 2.4-1.382l6.118-10.594z",fill:"#000",opacity:.1}),(0,e.jsx)("path",{d:"m30.05 32.219-2.84-2.827a.4.4 0 0 0-.103-.08A7.72 7.72 0 0 0 15.52 19.153c-2.873 2.895-3 7.533-.288 10.57a7.73 7.73 0 0 0 10.533.941q.03.054.075.1l2.84 2.84a.44.44 0 0 0 .314.129.45.45 0 0 0 .314-.129l.753-.753a.44.44 0 0 0 .129-.314.45.45 0 0 0-.13-.314zm-9.046-1.836a5.81 5.81 0 0 1-4.106-9.916 5.81 5.81 0 0 1 9.916 4.107 5.81 5.81 0 0 1-5.808 5.808zm-3.712-6.119v2.4c.37.653.905 1.196 1.552 1.577v-3.982zm2.9-1.99v6.487c.513.094 1.04.094 1.552 0v-6.497zm4.492 4.387v-1.42h-1.552v2.994c.646-.38 1.18-.92 1.552-1.572z",fill:"#fff"}),(0,e.jsx)("path",{d:"M64.588 14.32h-7.01v2.082h4.982c-.248 2.924-2.68 4.17-4.971 4.17a5.48 5.48 0 0 1-3.89-1.583 5.47 5.47 0 0 1-1.624-3.872v-.094a5.49 5.49 0 0 1 5.5-5.58 5.4 5.4 0 0 1 3.758 1.525l1.46-1.503a7.42 7.42 0 0 0-5.283-2.082 7.66 7.66 0 0 0-6.732 11.595 7.66 7.66 0 0 0 6.84 3.714c4.084-.008 7.1-2.815 7.1-6.968a6.2 6.2 0 0 0-.127-1.383zm5.768-1.503a4.86 4.86 0 0 0-4.96 4.78v.105a4.944 4.944 0 0 0 9.886.057c0-3.26-2.56-4.942-4.916-4.942zm.026 1.94c1.417 0 2.75 1.128 2.75 3.006s-1.338 2.984-2.764 2.984c-1.57 0-2.8-1.25-2.8-3.006s1.209-2.977 2.803-2.977zm10.712-1.94a4.86 4.86 0 0 0-4.944 4.78v.105a4.944 4.944 0 0 0 9.886.057c0-3.25-2.562-4.937-4.936-4.937zm.03 1.94c1.418 0 2.75 1.128 2.75 3.006s-1.337 2.984-2.764 2.984c-1.57 0-2.8-1.25-2.8-3.006s1.209-2.977 2.802-2.977zm10.52-1.94c-2.63 0-4.723 2.314-4.723 4.92a4.857 4.857 0 0 0 4.679 4.927 3.25 3.25 0 0 0 2.698-1.203v.973c0 1.7-1.03 2.72-2.585 2.72a2.74 2.74 0 0 1-2.518-1.75l-1.88.782c.666 1.417 2.007 2.912 4.41 2.912 2.63 0 4.64-1.657 4.64-5.13v-8.85h-2.066v.827a3.48 3.48 0 0 0-2.655-1.128m.192 1.92c1.296 0 2.63 1.108 2.63 3.006s-1.33 2.965-2.66 2.965c-1.416 0-2.72-1.128-2.72-2.96 0-1.88 1.365-3.006 2.755-3.006zm13.7-1.92c-2.495 0-4.584 1.984-4.584 4.915a4.765 4.765 0 0 0 2.946 4.572 4.8 4.8 0 0 0 1.882.358 4.99 4.99 0 0 0 4.133-2.16l-1.702-1.128a2.75 2.75 0 0 1-2.4 1.353 2.53 2.53 0 0 1-2.412-1.503l6.598-2.735-.333-.8a4.45 4.45 0 0 0-4.103-2.87zm.087 1.88c.76-.032 1.47.378 1.823 1.052l-4.417 1.85c-.192-1.428 1.16-2.894 2.585-2.894zm-7.824 7.674h2.167V7.868H97.8zm-47.698 16.7v-9.507h3.443a2.73 2.73 0 0 1 1.939.752c.532.465.83 1.142.812 1.85a2.01 2.01 0 0 1-1.29 1.98v.053c.467.146.877.437 1.168.83a2.2 2.2 0 0 1 .44 1.35 2.53 2.53 0 0 1-.834 1.94 2.9 2.9 0 0 1-2.034.752h-3.643m1.22-8.335v2.917h2.218a1.47 1.47 0 0 0 1.088-.439c.563-.54.584-1.43.05-1.995l-.038-.038a1.4 1.4 0 0 0-1.047-.44h-2.253zm0 4.055v3.12h2.46a1.567 1.567 0 0 0 1.583-1.55 1.5 1.5 0 0 0-.467-1.089 1.6 1.6 0 0 0-1.169-.467h-2.41zm8.044-4.467a.86.86 0 0 1-1.657.323.86.86 0 0 1 1.406-.935c.165.16.256.382.252.613zm-.253 2.254v6.5h-1.224v-6.5zm4.4 9.582c-.346.003-.7-.044-1.022-.14q-.462-.126-.872-.376a3 3 0 0 1-.677-.613 2.5 2.5 0 0 1-.424-.752l1.167-.48c.126.372.369.694.693.917.33.23.724.35 1.127.346a2.02 2.02 0 0 0 1.557-.598 2.32 2.32 0 0 0 .56-1.646v-.642h-.053a2.4 2.4 0 0 1-.936.815 2.8 2.8 0 0 1-1.28.3 2.88 2.88 0 0 1-2.194-.996 3.6 3.6 0 0 1-.907-2.465 3.56 3.56 0 0 1 .903-2.459 2.86 2.86 0 0 1 2.193-1.01c.445-.003.884.1 1.282.301.377.185.7.466.935.815h.054v-.913h1.168v6.23c.05.907-.27 1.795-.89 2.458a3.26 3.26 0 0 1-2.371.894zm.042-3.987a1.88 1.88 0 0 0 1.474-.65 2.7 2.7 0 0 0 0-3.382 1.88 1.88 0 0 0-1.474-.665 1.9 1.9 0 0 0-1.473.665 2.4 2.4 0 0 0-.598 1.694 2.4 2.4 0 0 0 .599 1.687c.37.426.907.668 1.472.66zm13.914.903-.963.623-.652-.97c-.71.355-1.491.542-2.284.545a4.7 4.7 0 0 1-3.48-1.44 5.134 5.134 0 0 1 0-7.068 4.91 4.91 0 0 1 6.963 0 4.8 4.8 0 0 1 1.408 3.52 5.1 5.1 0 0 1-.431 2.082 5 5 0 0 1-1.218 1.699zm-3.892-.97a3.6 3.6 0 0 0 1.6-.376l-1.108-1.666.963-.65 1.1 1.66a3.66 3.66 0 0 0 1.088-2.762 3.67 3.67 0 0 0-1.047-2.72 3.45 3.45 0 0 0-2.59-1.074 3.5 3.5 0 0 0-2.603 1.074 4.09 4.09 0 0 0 0 5.44 3.5 3.5 0 0 0 2.615 1.082zm11.835.963h-1.17v-.91h-.053a2.17 2.17 0 0 1-.858.8 2.46 2.46 0 0 1-1.203.319 2.4 2.4 0 0 1-1.84-.684 2.72 2.72 0 0 1-.639-1.946V32.56h1.22v4q.043 1.6 1.6 1.6a1.54 1.54 0 0 0 1.218-.593c.33-.397.504-.9.492-1.417v-3.586h1.22v6.5zm4.343.214a3.12 3.12 0 0 1-2.364-.984 3.48 3.48 0 0 1-.927-2.484 3.54 3.54 0 0 1 .908-2.475 3.25 3.25 0 0 1 4.618-.053c.615.732.923 1.676.856 2.63v.132h-5.117a2.12 2.12 0 0 0 .639 1.54 2.06 2.06 0 0 0 3.294-.583l1.09.53c-.278.533-.698.98-1.214 1.29a3.4 3.4 0 0 1-1.766.458zm-1.954-4.25h3.73a1.63 1.63 0 0 0-.552-1.128c-.373-.3-.85-.468-1.334-.443a1.77 1.77 0 0 0-1.189.424c-.34.297-.57.7-.657 1.143zm7.377 4.036h-1.22v-6.5h1.168v1.063h.052c.143-.37.417-.682.752-.883a2.1 2.1 0 0 1 1.129-.375c.308-.007.615.048.901.162l-.374 1.184a1.8 1.8 0 0 0-.717-.094 1.58 1.58 0 0 0-1.203.56 1.88 1.88 0 0 0-.512 1.3v3.59zm9.552-6.5-4.07 9.395h-1.263l1.503-3.28-2.666-6.113h1.33l1.939 4.678h.027l1.88-4.678h1.32z","data-color":"foreground",fill:"#fff"})]})},{}),slug:"bigquery"}),(0,e.jsx)(U,{logo:(0,e.jsx)(function({className:t}){return(0,e.jsxs)("svg",{className:t,fill:"none",viewBox:"0 0 150 50",xmlns:"http://www.w3.org/2000/svg",children:[(0,e.jsx)("path",{d:"M63.206 29.262v-6.14c0-.16-.105-.267-.262-.267h-1.996v-2.403h1.996c.157 0 .262-.107.262-.267V16.34h2.835v3.844c0 .16.106.267.263.267h2.783v2.403h-2.783c-.157 0-.263.106-.263.267v5.446c0 2.563.893 2.776 2.048 2.776.42 0 1.05-.053 1.418-.107v2.51c-.473.053-1.26.16-2.153.16-1.103-.053-4.148-.053-4.148-4.645m77.08 1.495 2.31-1.228c.525 1.228 1.523 2.029 2.678 2.029.893 0 1.891-.374 1.891-1.495 0-.748-.473-1.175-1.576-1.549l-1.575-.534c-2.205-.694-3.308-1.975-3.308-3.79 0-2.297 1.89-4.005 4.463-4.005 2.048 0 3.781 1.121 4.621 2.883l-2.31 1.282c-.525-1.122-1.366-1.762-2.363-1.762-.998 0-1.68.534-1.68 1.334 0 .695.525 1.229 1.575 1.549l1.575.534c2.31.747 3.413 2.029 3.413 3.79 0 2.777-2.363 4.219-4.726 4.219-2.363-.053-4.253-1.282-4.988-3.257m-8.716-2.403c-.052.054-.105.107-.105.16v5.126h-2.888V14.685h2.888v10.359c0 .107.053.213.157.213.106.054.21 0 .263-.053l4.673-4.806h3.518l-5.461 5.607q-.157.16 0 .32l5.934 7.315h-3.518l-4.568-5.766c-.053-.054-.105-.107-.158-.107-.052 0-.105 0-.157.053zm-4.411-6.14-1.837 1.762c-1.05-.801-2.101-1.175-3.256-1.175-2.415 0-4.2 1.816-4.2 4.272s1.785 4.271 4.2 4.271c1.05 0 2.153-.373 3.308-1.174l1.628 1.762c-2.363 1.762-3.623 2.082-5.251 2.082-1.942 0-3.675-.694-4.935-1.976-1.208-1.228-1.891-3.043-1.891-4.965 0-4.005 2.888-6.942 6.879-6.942 1.312 0 3.255.214 5.355 2.083M113.613 16.5c0 .96-.788 1.762-1.733 1.762s-1.733-.801-1.733-1.762.788-1.762 1.733-1.762 1.733.8 1.733 1.762m-.263 17.14h-2.888V20.45h2.888zm-9.188-5.767v5.82h-2.888V20.505h2.835v1.602c0 .107.053.214.157.267.106.053.21 0 .263-.107a4.2 4.2 0 0 1 3.57-2.029c.211 0 .368 0 .473.054v2.99c-.158-.054-.42-.054-.683-.054-2.31-.053-3.727 1.762-3.727 4.646m-15.49-.801c0-2.403 1.785-4.272 4.096-4.272s4.095 1.869 4.095 4.272c0 2.402-1.785 4.271-4.096 4.271s-4.095-1.869-4.095-4.271m.263 5.019h.105c.052 0 .157.053.21.107.997 1.174 2.467 1.815 4.148 1.815 3.57 0 6.3-3.044 6.3-6.941 0-1.922-.63-3.631-1.837-4.966-1.155-1.281-2.783-1.976-4.516-1.976-1.628 0-3.15.695-4.148 1.923-.052.053-.157.107-.263.053-.105-.053-.157-.107-.157-.213v-7.155h-2.888v18.955h2.888v-1.335c0-.16.052-.214.157-.267m-11.972-.748c-2.258 0-4.096-1.869-4.096-4.271s1.786-4.272 4.096-4.272 4.095 1.869 4.095 4.272c0 2.402-1.837 4.271-4.095 4.271m6.773 2.296V20.452h-2.835v1.335c0 .107-.053.213-.157.213-.106.054-.21 0-.263-.053-.945-1.175-2.415-1.815-4.148-1.815-3.57 0-6.3 3.043-6.3 6.94 0 3.899 2.782 6.942 6.3 6.942 1.627 0 3.15-.694 4.148-1.922.053-.107.157-.107.263-.054.104.054.157.107.157.214v1.442h2.835zm-31.084-2.296c-2.258 0-4.095-1.869-4.095-4.271s1.785-4.272 4.095-4.272c2.258 0 4.096 1.869 4.096 4.272 0 2.402-1.838 4.271-4.096 4.271m6.774 2.296V20.452H56.59v1.335c0 .107-.052.213-.157.213-.105.054-.21 0-.263-.053-.945-1.175-2.415-1.815-4.148-1.815-3.57 0-6.3 3.043-6.3 6.94 0 3.899 2.782 6.942 6.3 6.942 1.628 0 3.15-.694 4.148-1.922.053-.107.158-.107.263-.054.105.054.157.107.157.214v1.442h2.836zM37.32 31.344c-2.31 0-4.095-1.869-4.095-4.271S35.01 22.8 37.32 22.8c2.258 0 4.096 1.869 4.096 4.272 0 2.402-1.838 4.271-4.096 4.271m6.774 2.296V14.74h-2.888v7.101c0 .107-.053.214-.158.214-.105.053-.21 0-.262-.054-.998-1.174-2.468-1.815-4.148-1.815-3.57 0-6.301 3.043-6.301 6.941 0 1.922.63 3.63 1.838 4.966 1.155 1.281 2.783 1.975 4.515 1.975 1.628 0 3.15-.694 4.148-1.922.053-.053.158-.107.263-.053.105.053.157.107.157.213v1.389h2.836z","data-color":"foreground",fill:"#fff"}),(0,e.jsx)("path",{d:"m20.757 22.714-9.818 5.513L.494 22.353 0 22.615v4.267l10.939 6.17 9.818-5.514v2.264l-9.818 5.514L.494 29.44 0 29.704v.722l10.939 6.17 10.971-6.17V26.16l-.494-.263-10.477 5.874-9.786-5.513v-2.231l9.786 5.48 10.971-6.17v-4.2l-.56-.296-10.411 5.842-9.259-5.218 9.259-5.185 7.643 4.266.692-.36v-.526L10.94 13 0 19.137v.656l10.939 6.17 9.818-5.514z",fill:"#FF3621"})]})},{}),slug:"databricks"})]})]}),(0,e.jsxs)(S,{children:[(0,e.jsx)(U,{iconOnly:!0,logo:(0,e.jsx)(p.PostgresLogo,{}),slug:"postgres"}),(0,e.jsx)(U,{iconOnly:!0,logo:(0,e.jsx)(p.ClickhouseLogo,{}),slug:"clickhouse"}),(0,e.jsx)(U,{iconOnly:!0,logo:(0,e.jsx)(p.MariaDBLogo,{}),slug:"mariadb"}),(0,e.jsx)(U,{iconOnly:!0,logo:(0,e.jsx)(p.AthenaLogo,{}),slug:"athena"}),(0,e.jsx)(U,{iconOnly:!0,logo:(0,e.jsx)(p.MSSQLServerLogo,{}),slug:"ms-sql-server"}),(0,e.jsx)(U,{iconOnly:!0,logo:(0,e.jsx)(p.MySQLLogo,{}),slug:"mysql"}),(0,e.jsx)(U,{iconOnly:!0,logo:(0,e.jsx)(p.TrinoLogo,{}),slug:"trino"}),(0,e.jsx)(U,{iconOnly:!0,logo:(0,e.jsx)(p.DremioLogo,{}),slug:"dremio"})]}),(0,e.jsx)(function({className:t}){return(0,e.jsxs)("svg",{className:t,fill:"none",height:46,viewBox:"0 0 296 46",width:296,xmlns:"http://www.w3.org/2000/svg",children:[(0,e.jsx)("path",{clipRule:"evenodd",d:"M28.088 25 16.74 34h14.504l9.2-9zm-12.61 10h14.744L20 45H2.87zM37 45H21l10.222-10h14zm1 0h16l6.444-10H46.222zm33 0H55l6.444-10H75.89zm1 0h16l3.556-10H76.889zm33 0H89l3.556-10h14.888zm1 0h16l1.333-10h-14.889zm33 0h-16l1.333-10h15.111zm1 0h16l-.444-10h-15.112zm33 0h-16l-.444-10h15.111zm1 0h16l-2.444-10h-14.889zm33 0h-16l-2.444-10h14.888zm1 0h16l-4.889-10h-14.667zm33 0h-16l-4.889-10h14.445zm1 0h16l-8.222-10h-14.222zm33 0h-16l-8.222-10h14zm1 0h17.11l-12.717-10h-14.615zm-11.244-11h14.365l-11.445-9h-12.12zm-1 0h-13.8l-7.4-9h12zm-10.223-10h-11.8l-6.577-8h10.2zm1 0-8.177-8H256v-.18L266.404 24zm-9.2-9h9.625l-8.902-7h-7.878zm-1 0h-10l-5.755-7h8.6zm-8.177-8h-8.4l-4.934-6h7.2zm1 0-6.134-6h6.132l7.63 6zM230 0h7.5l8.902 7H247v.47L280.739 34H281v.205L294.728 45 296 46H0l1.26-1L15 34.103V34h.13L39 15.069V15h.087L49 7.138V7h.174L58 0h172m4.911 34h14.045l-7.4-9h-12.445zm-6.444-10h12.266l-6.577-8h-10.845zm-5.8-9h10.666l-5.755-7h-9.422zm-5.156-8h9.245l-4.934-6h-8.178zm16.4 27-5.8-9h-12.889l4.4 9zm-6.444-10h-12.734l-3.911-8h11.489zm-5.8-9h-11.334l-3.422-7h10.245zm-5.156-8h-10.089l-2.933-6h9.155zm-2.289 18 4.4 9h-14.533l-3.2-9zm-13.689-1h13.2l-3.911-8h-12.133zm-3.2-9h12l-3.422-7h-11.067zm-2.844-8h10.933l-2.933-6h-10.133zm5.4 18h-13.778l2.2 9h14.778zm-.356-1h-13.666l-1.956-8h12.778zm-3.2-9h-12.666l-1.711-7h11.888zm-2.844-8h-11.778l-1.467-6h11.112zm-22.156 18h13.778l2.2 9h-14.778zm-.133-1h13.667l-1.956-8h-12.778zm9.756-16 1.711 7H170l-.933-7zm-.245-1-1.467-6h-11.111l.8 6zm-10.378 18h-14.222l.4 9h15.022zm-.133-1h-14.133l-.356-8h13.422zm-2.133-16h-12.711l.311 7H169zm-.134-1h-12.622l-.267-6h12.089zm-27.044 18h14.222l.4 9h-15.022zm.044-1h14.134l-.356-8h-13.422zm.711-16h12.712l.311 7h-13.334zm.045-1h12.622l-.267-6h-12.088zm-1.8 18h-14.222l-1.2 9h15.022zm.044-1H125.8l1.067-8h13.422zm.711-16h-12.711L127 15h13.333zm.045-1h-12.622l.8-6h12.089zm-29.8 18h13.778l-1.2 9h-14.778zm.244-1H124.8l1.067-8h-12.778zm3.911-16h11.889L126 15h-12.667zm12.023-1 .8-6h-11.111l-1.467 6zm-17.178 18H96.111l-3.2 9h14.778zm.244-1H96.467l2.844-8h12.778zm5.623-23-1.467 6h-11.778l2.133-6zm-1.712 7-1.711 7H99.667l2.489-7zM81.778 25H95.11l-3.2 9H77.378zm13.689-1 2.844-8H86.178l-3.911 8zm3.2-9 2.489-7H90.089l-3.422 7zm2.844-8 2.133-6H93.511l-2.933 6zM80.778 25h-12.89l-5.8 9h14.29zm4.4-9-3.911 8H68.533l5.156-8zm3.91-8-3.421 7H74.333l4.511-7zm3.423-7-2.933 6h-10.09l3.868-6zM67.533 24l5.156-8H61.844l-6.577 8zm5.8-9 4.511-7h-9.422l-5.755 7zm5.156-8 3.867-6h-8.178l-4.934 6zm-17.4 27 5.8-9H54.444l-7.4 9zm-.245-18-6.577 8h-11.8l8.177-8zm6.578-8-5.755 7h-10l7.155-7zm5.756-7-4.934 6h-8.4l6.134-6zM53.444 25l-7.4 9h-13.8l9.2-9zm-2.777-10 7.155-7h-8.3l-8.826 7zm8.177-8 6.134-6h-6.63l-7.565 6zM41.467 24l8.177-8H39.435l-10.087 8z",fill:"url(#illustration-tron-mini_svg__a)",fillRule:"evenodd"}),(0,e.jsx)("defs",{children:(0,e.jsxs)("linearGradient",{gradientUnits:"userSpaceOnUse",id:"illustration-tron-mini_svg__a",x1:148,x2:148,y1:0,y2:46,children:[(0,e.jsx)("stop",{offset:.016,stopColor:"currentColor",stopOpacity:0}),(0,e.jsx)("stop",{offset:.781,stopColor:"currentColor",stopOpacity:.19}),(0,e.jsx)("stop",{offset:1,stopColor:"currentColor",stopOpacity:.58})]})})]})},{})]}),link:x.DOCS_LINKS.DataConnections,description:"Hex has built-in connections to the most popular data warehouses, lakehouses, and databases. It’s easy to set up data connections, and securely share them with your team."},{title:"dbt metadata, docs, & metrics",illustration:(0,e.jsxs)(O,{children:[(0,e.jsx)(b,{children:(0,e.jsx)(U,{logo:(0,e.jsx)(p.DbtLogo,{}),name:"dbt",slug:"dbt"})}),(0,e.jsx)(function({className:t}){return(0,e.jsxs)("svg",{className:t,fill:"none",height:160,viewBox:"0 0 300 160",width:300,xmlns:"http://www.w3.org/2000/svg",children:[(0,e.jsxs)("g",{opacity:.4,children:[(0,e.jsx)("mask",{height:75,id:"illustration-dbt_svg__a",maskUnits:"userSpaceOnUse",style:{maskType:"alpha"},width:281,x:10,y:85,children:(0,e.jsx)("path",{d:"M68.818 85c.1.001.182.344.182.766v49.489c0-.141.225-.255.503-.255h161.994c.278 0 .503.114.503.255v-49.49c0-.421.081-.764.182-.765h58.636c.101.001.182.344.182.766v73.468c0 .422-.081.765-.182.766h-58.636c-.101-.001-.182-.344-.182-.766v.511c0 .141-.225.255-.503.255H69.503c-.278 0-.503-.114-.503-.255v-.511c0 .422-.081.765-.182.766H10.182c-.1-.001-.182-.344-.182-.766V85.766c0-.422.081-.765.182-.766z",fill:"currentColor"})}),(0,e.jsxs)("g",{mask:"url(#illustration-dbt_svg__a)",children:[(0,e.jsx)("path",{d:"M290 109H11v11h279zM21 120H11v39h10z",fill:"currentColor",opacity:.4}),(0,e.jsx)("path",{d:"M290 119H11v1h279zM290 129H11v1h279zM290 139H11v1h279zM290 149H11v1h279zM277 159H11v1h266z",fill:"currentColor",opacity:.4}),(0,e.jsx)("path",{d:"M65 109h-1v60h1zM105 109h-1v60h1zM145 109h-1v60h1zM185 109h-1v60h1zM225 109h-1v60h1zM265 109h-1v60h1z",fill:"currentColor",opacity:.4}),(0,e.jsx)("path",{d:"M151 110 28.5 124.5",stroke:"url(#illustration-dbt_svg__b)"}),(0,e.jsx)("path",{d:"M151 110 28.5 124.5",stroke:"url(#illustration-dbt_svg__c)"}),(0,e.jsx)("path",{d:"M151 110 28.5 134.5",stroke:"url(#illustration-dbt_svg__d)"}),(0,e.jsx)("path",{d:"M151 110 28.5 134.5",stroke:"url(#illustration-dbt_svg__e)"}),(0,e.jsx)("path",{d:"M151 110 28.5 144.5",stroke:"url(#illustration-dbt_svg__f)"}),(0,e.jsx)("path",{d:"M151 110 28.5 144.5",stroke:"url(#illustration-dbt_svg__g)"}),(0,e.jsx)("path",{d:"M151 110 28.5 154.5",stroke:"url(#illustration-dbt_svg__h)"}),(0,e.jsx)("path",{d:"M151 110 28.5 154.5",stroke:"url(#illustration-dbt_svg__i)"}),(0,e.jsx)("path",{d:"M154.5 110 277 124.5",stroke:"url(#illustration-dbt_svg__j)"}),(0,e.jsx)("path",{d:"M154.5 110 277 124.5",stroke:"url(#illustration-dbt_svg__k)"}),(0,e.jsx)("path",{d:"M154.5 110 277 134.5",stroke:"url(#illustration-dbt_svg__l)"}),(0,e.jsx)("path",{d:"M154.5 110 277 134.5",stroke:"url(#illustration-dbt_svg__m)"}),(0,e.jsx)("path",{d:"M154.5 110 277 144.5",stroke:"url(#illustration-dbt_svg__n)"}),(0,e.jsx)("path",{d:"M154.5 110 277 144.5",stroke:"url(#illustration-dbt_svg__o)"}),(0,e.jsx)("path",{d:"M154.5 110 277 154.5",stroke:"url(#illustration-dbt_svg__p)"}),(0,e.jsx)("path",{d:"M154.5 110 277 154.5",stroke:"url(#illustration-dbt_svg__q)"}),(0,e.jsx)("path",{d:"M290.5 108.5h-280v51h280z",stroke:"currentColor"})]})]}),(0,e.jsx)("path",{d:"M231 85.5H70a.5.5 0 0 0-.5.5v48a.5.5 0 0 0 .5.5h161a.5.5 0 0 0 .5-.5V86a.5.5 0 0 0-.5-.5Z",stroke:"currentColor"}),(0,e.jsx)("path",{d:"M131.5 98.5v4h-49v-4z",fill:"currentColor",fillOpacity:.2,stroke:"currentColor"}),(0,e.jsx)("path",{d:"M162 112H82v1h80zM142 117H82v1h60zM220 110h-12v1h12zM152 122H82v1h70z",fill:"currentColor"}),(0,e.jsx)("path",{clipRule:"evenodd",d:"m202.716 104.536-8.558 9.989-4.846-4.847.708-.707 4.082 4.083 7.854-9.168z",fill:"currentColor",fillRule:"evenodd"}),(0,e.jsxs)("defs",{children:[(0,e.jsxs)("linearGradient",{gradientUnits:"userSpaceOnUse",id:"illustration-dbt_svg__b",x1:68,x2:25.5,y1:121,y2:126.5,children:[(0,e.jsx)("stop",{stopColor:"currentColor"}),(0,e.jsx)("stop",{offset:1,stopColor:"currentColor",stopOpacity:0})]}),(0,e.jsxs)("linearGradient",{gradientUnits:"userSpaceOnUse",id:"illustration-dbt_svg__c",x1:68,x2:25.5,y1:121,y2:126.5,children:[(0,e.jsx)("stop",{stopColor:"currentColor"}),(0,e.jsx)("stop",{offset:1,stopColor:"currentColor",stopOpacity:0})]}),(0,e.jsxs)("linearGradient",{gradientUnits:"userSpaceOnUse",id:"illustration-dbt_svg__d",x1:68,x2:25.5,y1:121,y2:126.5,children:[(0,e.jsx)("stop",{stopColor:"currentColor"}),(0,e.jsx)("stop",{offset:1,stopColor:"currentColor",stopOpacity:0})]}),(0,e.jsxs)("linearGradient",{gradientUnits:"userSpaceOnUse",id:"illustration-dbt_svg__e",x1:68,x2:25.5,y1:121,y2:126.5,children:[(0,e.jsx)("stop",{stopColor:"currentColor"}),(0,e.jsx)("stop",{offset:1,stopColor:"currentColor",stopOpacity:0})]}),(0,e.jsxs)("linearGradient",{gradientUnits:"userSpaceOnUse",id:"illustration-dbt_svg__f",x1:68,x2:25.5,y1:121,y2:126.5,children:[(0,e.jsx)("stop",{stopColor:"currentColor"}),(0,e.jsx)("stop",{offset:1,stopColor:"currentColor",stopOpacity:0})]}),(0,e.jsxs)("linearGradient",{gradientUnits:"userSpaceOnUse",id:"illustration-dbt_svg__g",x1:68,x2:25.5,y1:121,y2:126.5,children:[(0,e.jsx)("stop",{stopColor:"currentColor"}),(0,e.jsx)("stop",{offset:1,stopColor:"currentColor",stopOpacity:0})]}),(0,e.jsxs)("linearGradient",{gradientUnits:"userSpaceOnUse",id:"illustration-dbt_svg__h",x1:68,x2:25.5,y1:121,y2:126.5,children:[(0,e.jsx)("stop",{stopColor:"currentColor"}),(0,e.jsx)("stop",{offset:1,stopColor:"currentColor",stopOpacity:0})]}),(0,e.jsxs)("linearGradient",{gradientUnits:"userSpaceOnUse",id:"illustration-dbt_svg__i",x1:68,x2:25.5,y1:121,y2:126.5,children:[(0,e.jsx)("stop",{stopColor:"currentColor"}),(0,e.jsx)("stop",{offset:1,stopColor:"currentColor",stopOpacity:0})]}),(0,e.jsxs)("linearGradient",{gradientUnits:"userSpaceOnUse",id:"illustration-dbt_svg__j",x1:237.5,x2:280,y1:121,y2:126.5,children:[(0,e.jsx)("stop",{stopColor:"currentColor"}),(0,e.jsx)("stop",{offset:1,stopColor:"currentColor",stopOpacity:0})]}),(0,e.jsxs)("linearGradient",{gradientUnits:"userSpaceOnUse",id:"illustration-dbt_svg__k",x1:237.5,x2:280,y1:121,y2:126.5,children:[(0,e.jsx)("stop",{stopColor:"currentColor"}),(0,e.jsx)("stop",{offset:1,stopColor:"currentColor",stopOpacity:0})]}),(0,e.jsxs)("linearGradient",{gradientUnits:"userSpaceOnUse",id:"illustration-dbt_svg__l",x1:237.5,x2:280,y1:121,y2:126.5,children:[(0,e.jsx)("stop",{stopColor:"currentColor"}),(0,e.jsx)("stop",{offset:1,stopColor:"currentColor",stopOpacity:0})]}),(0,e.jsxs)("linearGradient",{gradientUnits:"userSpaceOnUse",id:"illustration-dbt_svg__m",x1:237.5,x2:280,y1:121,y2:126.5,children:[(0,e.jsx)("stop",{stopColor:"currentColor"}),(0,e.jsx)("stop",{offset:1,stopColor:"currentColor",stopOpacity:0})]}),(0,e.jsxs)("linearGradient",{gradientUnits:"userSpaceOnUse",id:"illustration-dbt_svg__n",x1:237.5,x2:280,y1:121,y2:126.5,children:[(0,e.jsx)("stop",{stopColor:"currentColor"}),(0,e.jsx)("stop",{offset:1,stopColor:"currentColor",stopOpacity:0})]}),(0,e.jsxs)("linearGradient",{gradientUnits:"userSpaceOnUse",id:"illustration-dbt_svg__o",x1:237.5,x2:280,y1:121,y2:126.5,children:[(0,e.jsx)("stop",{stopColor:"currentColor"}),(0,e.jsx)("stop",{offset:1,stopColor:"currentColor",stopOpacity:0})]}),(0,e.jsxs)("linearGradient",{gradientUnits:"userSpaceOnUse",id:"illustration-dbt_svg__p",x1:237.5,x2:280,y1:121,y2:126.5,children:[(0,e.jsx)("stop",{stopColor:"currentColor"}),(0,e.jsx)("stop",{offset:1,stopColor:"currentColor",stopOpacity:0})]}),(0,e.jsxs)("linearGradient",{gradientUnits:"userSpaceOnUse",id:"illustration-dbt_svg__q",x1:237.5,x2:280,y1:121,y2:126.5,children:[(0,e.jsx)("stop",{stopColor:"currentColor"}),(0,e.jsx)("stop",{offset:1,stopColor:"currentColor",stopOpacity:0})]})]})]})},{})]}),link:x.DOCS_LINKS.dbt,description:"Hex has a deep integration with dbt, including automatically enriching schemas with dbt docs."},{title:"Connect to your warehouse with oAuth",illustration:(0,e.jsxs)(O,{children:[(0,e.jsxs)(b,{children:[(0,e.jsx)(U,{logo:(0,e.jsx)(p.SnowflakeLogo,{}),name:"Snowflake"}),(0,e.jsx)(U,{logo:(0,e.jsx)(p.BigQueryLogo,{}),name:"BigQuery"}),(0,e.jsx)(U,{logo:(0,e.jsx)(p.DatabricksLogo,{}),name:"Databricks"})]}),(0,e.jsx)(function({className:t}){return(0,e.jsxs)("svg",{className:t,fill:"none",height:160,viewBox:"0 0 300 160",width:300,xmlns:"http://www.w3.org/2000/svg",children:[(0,e.jsx)("path",{d:"M199.21 142 176 134.195 198.79 126l23.21 7.805z",fill:"currentColor",fillOpacity:.07}),(0,e.jsx)("path",{d:"m220.479 133.82-21.276 7.651-21.682-7.292 21.275-7.651z",stroke:"currentColor",strokeOpacity:.5}),(0,e.jsx)("path",{clipRule:"evenodd",d:"M199 100c.276 0 .5.139.5.311v32.377c0 .172-.224.312-.5.312s-.5-.14-.5-.312v-32.377c0-.172.224-.311.5-.311",fill:"url(#illustration-push-python_svg__a)",fillRule:"evenodd"}),(0,e.jsx)("path",{d:"M201 100a2 2 0 1 1-3.999.001A2 2 0 0 1 201 100",fill:"currentColor"}),(0,e.jsx)("path",{d:"M101.21 147 78 139.195 100.79 131l23.21 7.805z",fill:"currentColor",fillOpacity:.07}),(0,e.jsx)("path",{d:"m122.479 138.82-21.276 7.651-21.683-7.292 21.276-7.651z",stroke:"currentColor",strokeOpacity:.5}),(0,e.jsx)("path",{clipRule:"evenodd",d:"M101 102.5a.5.5 0 0 1 .5.5v35a.5.5 0 0 1-1 0v-35a.5.5 0 0 1 .5-.5",fill:"url(#illustration-push-python_svg__b)",fillRule:"evenodd"}),(0,e.jsx)("path",{d:"M150.21 159 127 151.195 149.79 143l23.21 7.805z",fill:"currentColor",fillOpacity:.07}),(0,e.jsx)("path",{d:"m171.479 150.82-21.276 7.651-21.682-7.292 21.275-7.651z",stroke:"currentColor",strokeOpacity:.5}),(0,e.jsx)("path",{d:"M152 116a2 2 0 1 1-3.999.001A2 2 0 0 1 152 116",fill:"currentColor"}),(0,e.jsx)("path",{clipRule:"evenodd",d:"M150 124.5c.276 0 .5.162.5.361v25.278c0 .199-.224.361-.5.361s-.5-.162-.5-.361v-25.278c0-.199.224-.361.5-.361",fill:"url(#illustration-push-python_svg__c)",fillRule:"evenodd"}),(0,e.jsx)("path",{d:"M37.338 159 3 147l33.662-13L71 147z",fill:"currentColor",fillOpacity:.07}),(0,e.jsx)("path",{d:"M69.55 146.985 37.337 158.47 4.448 146.977l32.215-12.442z",stroke:"currentColor",strokeOpacity:.5}),(0,e.jsx)("path",{clipRule:"evenodd",d:"M37 95.5c.276 0 .5.126.5.282v47.436c0 .156-.224.282-.5.282s-.5-.126-.5-.282V95.782c0-.156.224-.282.5-.282",fill:"url(#illustration-push-python_svg__d)",fillRule:"evenodd"}),(0,e.jsx)("path",{d:"M39 84a2 2 0 1 1-4 0 2 2 0 0 1 4 0",fill:"currentColor"}),(0,e.jsx)("path",{d:"M263.338 159 229 147l33.662-13L297 147z",fill:"currentColor",fillOpacity:.07}),(0,e.jsx)("path",{d:"m295.551 146.985-32.215 11.485-32.888-11.493 32.216-12.442z",stroke:"currentColor",strokeOpacity:.5}),(0,e.jsx)("path",{clipRule:"evenodd",d:"M263 76a.5.5 0 0 1 .5.5v70a.5.5 0 0 1-1 0v-70a.5.5 0 0 1 .5-.5",fill:"url(#illustration-push-python_svg__e)",fillRule:"evenodd"}),(0,e.jsx)("path",{d:"M265 67a2 2 0 1 1-4 0 2 2 0 0 1 4 0",fill:"currentColor"}),(0,e.jsxs)("defs",{children:[(0,e.jsxs)("linearGradient",{gradientUnits:"userSpaceOnUse",id:"illustration-push-python_svg__a",x1:199.766,x2:199.602,y1:100.46,y2:133.617,children:[(0,e.jsx)("stop",{offset:.486,stopColor:"currentColor"}),(0,e.jsx)("stop",{offset:1,stopColor:"currentColor",stopOpacity:0})]}),(0,e.jsxs)("linearGradient",{gradientUnits:"userSpaceOnUse",id:"illustration-push-python_svg__b",x1:101.766,x2:101.574,y1:103.161,y2:139.003,children:[(0,e.jsx)("stop",{offset:.486,stopColor:"currentColor"}),(0,e.jsx)("stop",{offset:1,stopColor:"currentColor",stopOpacity:0})]}),(0,e.jsxs)("linearGradient",{gradientUnits:"userSpaceOnUse",id:"illustration-push-python_svg__c",x1:150.766,x2:150.666,y1:124.977,y2:150.864,children:[(0,e.jsx)("stop",{offset:.486,stopColor:"currentColor"}),(0,e.jsx)("stop",{offset:1,stopColor:"currentColor",stopOpacity:0})]}),(0,e.jsxs)("linearGradient",{gradientUnits:"userSpaceOnUse",id:"illustration-push-python_svg__d",x1:37.766,x2:37.414,y1:96,y2:144.576,children:[(0,e.jsx)("stop",{offset:.486,stopColor:"currentColor"}),(0,e.jsx)("stop",{offset:1,stopColor:"currentColor",stopOpacity:0})]}),(0,e.jsxs)("linearGradient",{gradientUnits:"userSpaceOnUse",id:"illustration-push-python_svg__e",x1:263.766,x2:263,y1:76.821,y2:148.5,children:[(0,e.jsx)("stop",{offset:.486,stopColor:"currentColor"}),(0,e.jsx)("stop",{offset:1,stopColor:"currentColor",stopOpacity:0})]})]})]})},{})]}),link:x.DOCS_LINKS.OAuthDataConnections,description:"Leverage the permissions set up in your data warehouse, by authenticating with oAuth"},{title:"Git it together",illustration:(0,e.jsxs)(O,{children:[(0,e.jsxs)(b,{children:[(0,e.jsx)(U,{logo:(0,e.jsx)(p.GitHubLogo,{}),name:"GitHub",slug:"github"}),(0,e.jsx)(U,{logo:(0,e.jsx)(p.GitLabLogo,{}),name:"GitLab"})]}),(0,e.jsx)(function({className:t}){return(0,e.jsxs)("svg",{className:t,fill:"none",height:160,viewBox:"0 0 300 160",width:300,xmlns:"http://www.w3.org/2000/svg",children:[(0,e.jsx)("path",{d:"M298 152.008H2v-1h296z",fill:"url(#illustration-git-flow_svg__a)"}),(0,e.jsx)("path",{clipRule:"evenodd",d:"M152.834 130.008h-83.5c-11.322 0-20.167 6.011-20.167 17.333v1.38a2.668 2.668 0 1 0 1 0v-1.38c0-10.77 8.397-16.333 19.167-16.333h83.5a2.668 2.668 0 1 0 0-1",fill:"currentColor",fillRule:"evenodd"}),(0,e.jsx)("path",{clipRule:"evenodd",d:"M115.706 127.508a2.668 2.668 0 0 0 .297 5.317 2.667 2.667 0 0 0 .703-5.239c1.233-7.697 7.903-13.578 15.948-13.578h73.059c10.732 0 18.604 8.812 20.4 19.541.936 5.593 2.835 10.661 6.697 14.359 3.458 3.312 8.407 3.586 15.526 4.1.188 1.289 1.298 2 2.639 2 1.472 0 2.666-.915 2.666-2.388a2.666 2.666 0 0 0-5.262-.612c-6.932-.505-11.633-.715-14.878-3.822-3.643-3.489-5.483-8.315-6.402-13.802-1.851-11.058-10.025-20.376-21.386-20.376h-73.059c-8.571 0-15.674 6.286-16.948 14.5",fill:"url(#illustration-git-flow_svg__b)",fillRule:"evenodd"}),(0,e.jsx)("path",{d:"M76.5 130.508c.167-11.834 1.3-29 32.5-29h42.5c7 0 21-.508 21 12",stroke:"currentColor"}),(0,e.jsx)("path",{d:"M76.5 133.008a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M172.5 116.008a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5",fill:"currentColor"}),(0,e.jsxs)("defs",{children:[(0,e.jsxs)("linearGradient",{gradientUnits:"userSpaceOnUse",id:"illustration-git-flow_svg__a",x1:298,x2:2,y1:152.008,y2:152.008,children:[(0,e.jsx)("stop",{stopColor:"currentColor",stopOpacity:0}),(0,e.jsx)("stop",{offset:.505,stopColor:"currentColor"}),(0,e.jsx)("stop",{offset:1,stopColor:"currentColor",stopOpacity:0})]}),(0,e.jsxs)("linearGradient",{gradientUnits:"userSpaceOnUse",id:"illustration-git-flow_svg__b",x1:174.503,x2:245.503,y1:113.508,y2:155.508,children:[(0,e.jsx)("stop",{stopColor:"currentColor"}),(0,e.jsx)("stop",{offset:.27,stopColor:"currentColor",stopOpacity:.4}),(0,e.jsx)("stop",{offset:1,stopColor:"currentColor",stopOpacity:0})]})]})]})},{})]}),link:x.DOCS_LINKS.GitExport,description:"Export your projects to GitHub or GitLab to create an audit trail."},{title:"Orchestration",illustration:(0,e.jsxs)(O,{children:[(0,e.jsxs)(b,{children:[(0,e.jsx)(U,{logo:(0,e.jsx)(p.AirflowLogo,{}),name:"Airflow",slug:"airflow"}),(0,e.jsx)(U,{logo:(0,e.jsx)(p.DagsterLogo,{}),name:"Dagster",slug:"dagster"}),(0,e.jsx)(U,{logo:(0,e.jsx)(p.PrefectLogo,{}),name:"Prefect",slug:"prefect"})]}),(0,e.jsx)(function({className:t}){return(0,e.jsxs)("svg",{className:t,fill:"none",height:160,viewBox:"0 0 300 160",width:300,xmlns:"http://www.w3.org/2000/svg",children:[(0,e.jsx)("path",{d:"M36 114.5a9.5 9.5 0 0 0 9.5-9.5 9.5 9.5 0 1 0-9.5 9.5Z",stroke:"currentColor"}),(0,e.jsx)("path",{d:"M36 109a4 4 0 1 0 0-8 4 4 0 0 0 0 8",fill:"currentColor",fillOpacity:.45}),(0,e.jsx)("path",{d:"M36 108.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM110 152.5a9.5 9.5 0 0 0 9.5-9.5 9.5 9.5 0 0 0-9.5-9.5 9.5 9.5 0 0 0-9.5 9.5 9.5 9.5 0 0 0 9.5 9.5Z",stroke:"currentColor"}),(0,e.jsx)("path",{d:"M110 147a4 4 0 1 0 0-8 4 4 0 0 0 0 8",fill:"currentColor",fillOpacity:.45}),(0,e.jsx)("path",{d:"M110 146.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM225 157.5a9.5 9.5 0 0 0 9.5-9.5 9.5 9.5 0 0 0-9.5-9.5 9.5 9.5 0 0 0-9.5 9.5 9.5 9.5 0 0 0 9.5 9.5Z",stroke:"currentColor"}),(0,e.jsx)("path",{d:"M225 152a4 4 0 1 0 0-8 4 4 0 0 0 0 8",fill:"currentColor",fillOpacity:.45}),(0,e.jsx)("path",{d:"M225 151.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM29 159.5a9.5 9.5 0 0 0 9.5-9.5 9.5 9.5 0 0 0-9.5-9.5 9.5 9.5 0 0 0-9.5 9.5 9.5 9.5 0 0 0 9.5 9.5Z",stroke:"currentColor"}),(0,e.jsx)("path",{d:"M29 154a4 4 0 1 0 0-8 4 4 0 0 0 0 8",fill:"currentColor",fillOpacity:.45}),(0,e.jsx)("path",{d:"M29 153.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM172 136.5a9.5 9.5 0 0 0 9.5-9.5 9.5 9.5 0 0 0-9.5-9.5 9.5 9.5 0 0 0-9.5 9.5 9.5 9.5 0 0 0 9.5 9.5Z",stroke:"currentColor"}),(0,e.jsx)("path",{d:"M172 131a4 4 0 1 0 0-8 4 4 0 0 0 0 8",fill:"currentColor",fillOpacity:.45}),(0,e.jsx)("path",{d:"M172 130.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM263 107.5a9.5 9.5 0 0 0 9.5-9.5 9.5 9.5 0 0 0-9.5-9.5 9.5 9.5 0 0 0-9.5 9.5 9.5 9.5 0 0 0 9.5 9.5Z",stroke:"currentColor"}),(0,e.jsx)("path",{d:"M263 102a4 4 0 1 0 0-8 4 4 0 0 0 0 8",fill:"currentColor",fillOpacity:.45}),(0,e.jsx)("path",{d:"M263 101.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z",stroke:"currentColor"}),(0,e.jsx)("path",{d:"M97.667 134.472a.5.5 0 0 0 .306-.638l-1.494-4.245a.5.5 0 0 0-.943.332l1.328 3.773-3.773 1.328a.5.5 0 0 0 .332.944zm-60.882-29.021 60.5 29 .432-.902-60.5-29z",fill:"url(#illustration-orchestration_svg__a)"}),(0,e.jsx)("path",{d:"M95.883 144.822a.5.5 0 0 0-.061-.705l-3.445-2.896a.501.501 0 0 0-.643.766l3.062 2.574-2.574 3.062a.5.5 0 1 0 .765.643zm-52.34 4.676 52-4.5-.086-.996-52 4.5z",fill:"url(#illustration-orchestration_svg__b)"}),(0,e.jsx)("path",{d:"M209.855 147.354a.5.5 0 0 0 0-.708l-3.182-3.182a.502.502 0 0 0-.708.708l2.829 2.828-2.829 2.828a.502.502 0 0 0 .708.708zM127.001 144c-.151.477-.15.477-.149.477l.001.001.003.001.01.002.029.009.109.029c.095.024.24.058.448.1.415.084 1.082.203 2.105.345 2.047.283 5.529.659 11.286 1.035 11.516.751 32.153 1.501 68.658 1.501v-1c-36.495 0-57.108-.75-68.592-1.499-5.743-.374-9.199-.748-11.214-1.028a33 33 0 0 1-2.043-.334 10 10 0 0 1-.486-.112l-.015-.004-.002-.001.002.001z",fill:"url(#illustration-orchestration_svg__c)"}),(0,e.jsx)("path",{d:"M158.435 130.247a.5.5 0 0 0-.188-.682l-3.915-2.22a.5.5 0 0 0-.493.87l3.479 1.973-1.973 3.48a.5.5 0 0 0 .87.493zm-38.302 10.735 38-10.5-.266-.964-38 10.5z",fill:"url(#illustration-orchestration_svg__d)"}),(0,e.jsx)("path",{d:"M248.946 102.226a.5.5 0 0 0-.22-.672l-4.016-2.031a.5.5 0 0 0-.451.892l3.569 1.805-1.805 3.57a.5.5 0 1 0 .892.451zm-64.29 21.249 64-21-.312-.95-64 21z",fill:"url(#illustration-orchestration_svg__e)"}),(0,e.jsx)("path",{d:"M263.855 112.646a.5.5 0 0 0-.708 0l-3.182 3.182a.502.502 0 0 0 .708.708l2.828-2.829 2.828 2.829a.502.502 0 0 0 .708-.708zM239.001 145.5l.181.466.002-.001.004-.001.015-.006.055-.022.211-.087c.184-.077.452-.192.792-.347a44 44 0 0 0 2.807-1.407c2.319-1.262 5.413-3.187 8.508-5.84 6.19-5.306 12.425-13.557 12.425-25.255h-1c0 11.302-6.015 19.301-12.075 24.495-3.03 2.597-6.061 4.484-8.336 5.722a44 44 0 0 1-2.743 1.375c-.33.15-.589.261-.764.335l-.199.081-.049.02-.012.005-.002.001h-.001z",fill:"url(#illustration-orchestration_svg__f)"}),(0,e.jsxs)("defs",{children:[(0,e.jsxs)("linearGradient",{gradientUnits:"userSpaceOnUse",id:"illustration-orchestration_svg__a",x1:80.501,x2:69.219,y1:124,y2:133.671,children:[(0,e.jsx)("stop",{stopColor:"currentColor"}),(0,e.jsx)("stop",{offset:1,stopColor:"currentColor",stopOpacity:0})]}),(0,e.jsxs)("linearGradient",{gradientUnits:"userSpaceOnUse",id:"illustration-orchestration_svg__b",x1:89,x2:43,y1:142.5,y2:148.5,children:[(0,e.jsx)("stop",{stopColor:"currentColor"}),(0,e.jsx)("stop",{offset:1,stopColor:"currentColor",stopOpacity:0})]}),(0,e.jsxs)("linearGradient",{gradientUnits:"userSpaceOnUse",id:"illustration-orchestration_svg__c",x1:209.001,x2:193.498,y1:146.5,y2:177.382,children:[(0,e.jsx)("stop",{stopColor:"currentColor"}),(0,e.jsx)("stop",{offset:1,stopColor:"currentColor",stopOpacity:0})]}),(0,e.jsxs)("linearGradient",{gradientUnits:"userSpaceOnUse",id:"illustration-orchestration_svg__d",x1:152.872,x2:152.924,y1:128.984,y2:139.033,children:[(0,e.jsx)("stop",{stopColor:"currentColor"}),(0,e.jsx)("stop",{offset:1,stopColor:"currentColor",stopOpacity:0})]}),(0,e.jsxs)("linearGradient",{gradientUnits:"userSpaceOnUse",id:"illustration-orchestration_svg__e",x1:249,x2:242.072,y1:105.5,y2:136.758,children:[(0,e.jsx)("stop",{stopColor:"currentColor"}),(0,e.jsx)("stop",{offset:1,stopColor:"currentColor",stopOpacity:0})]}),(0,e.jsxs)("linearGradient",{gradientUnits:"userSpaceOnUse",id:"illustration-orchestration_svg__f",x1:264.001,x2:274.336,y1:111,y2:134.861,children:[(0,e.jsx)("stop",{stopColor:"currentColor"}),(0,e.jsx)("stop",{offset:1,stopColor:"currentColor",stopOpacity:0})]})]})]})},{})]}),link:x.DOCS_LINKS.API,description:"You can include Hex projects in DAGs in Airflow, Dagster, or Prefect."},{title:"Hex API",illustration:(0,e.jsx)(function({className:t}){return(0,e.jsxs)("svg",{className:t,fill:"none",height:160,viewBox:"0 0 300 160",width:300,xmlns:"http://www.w3.org/2000/svg",children:[(0,e.jsx)("path",{clipRule:"evenodd",d:"M77 159.99c40.96-.414 74-26.22 74-57.995S117.96 44.414 77 44v1c40.655.413 73 25.992 73 56.995s-32.345 56.582-73 56.995z",fill:"url(#illustration-api_svg__a)",fillRule:"evenodd",opacity:.6}),(0,e.jsx)("path",{clipRule:"evenodd",d:"M77 152.99c40.96-.414 74-26.221 74-57.995S117.96 37.414 77 37v1c40.655.413 73 25.992 73 56.995s-32.345 56.582-73 56.995z",fill:"url(#illustration-api_svg__b)",fillRule:"evenodd",opacity:.8}),(0,e.jsx)("path",{clipRule:"evenodd",d:"M77 145.99c40.96-.414 74-26.221 74-57.995S117.96 30.414 77 30v1c40.655.413 73 25.992 73 56.995s-32.345 56.582-73 56.995z",fill:"url(#illustration-api_svg__c)",fillRule:"evenodd"}),(0,e.jsx)("path",{clipRule:"evenodd",d:"M224 44c-40.96.414-74 26.22-74 57.995s33.04 57.581 74 57.995v-1c-40.655-.413-73-25.992-73-56.995S183.345 45.413 224 45z",fill:"url(#illustration-api_svg__d)",fillRule:"evenodd",opacity:.6}),(0,e.jsx)("path",{clipRule:"evenodd",d:"M224 37c-40.96.414-74 26.22-74 57.995s33.04 57.581 74 57.995v-1c-40.655-.413-73-25.992-73-56.995S183.345 38.413 224 38z",fill:"url(#illustration-api_svg__e)",fillRule:"evenodd",opacity:.8}),(0,e.jsx)("path",{clipRule:"evenodd",d:"M224 30c-40.96.414-74 26.22-74 57.995s33.04 57.581 74 57.995v-1c-40.655-.413-73-25.992-73-56.995S183.345 31.413 224 31z",fill:"url(#illustration-api_svg__f)",fillRule:"evenodd"}),(0,e.jsx)("path",{clipRule:"evenodd",d:"M86.175 82v8.127H84.14V82H76v24.444h8.14v-12.25h2.035v12.25h8.143V82zm10.166 0v24.444h18.318V96.25h-8.144v6.07h-2.034v-8.126h10.178V82zm8.14 8.127v-4.053h2.034v4.053zm22.375 0V82H135v6.111l-4.068 4.078L135 96.267v10.177h-8.144v-12.25h-2.034v12.25h-8.14V96.267l4.072-4.078-4.072-4.078V82h8.14v8.127z",fill:"currentColor",fillRule:"evenodd"}),(0,e.jsx)("path",{d:"M211 82.995v23h-46v-23zm-36.199 5.436-3.403 12.564h2.737l.773-3.024h3.439l.792 3.024h2.88l-3.403-12.564zm9.672 0v12.564h2.717v-4.572h2.143q.918 0 1.638-.27.72-.289 1.206-.81.504-.522.756-1.26a5.1 5.1 0 0 0 .252-1.656q0-.919-.252-1.657a3.3 3.3 0 0 0-.756-1.26 3.1 3.1 0 0 0-1.206-.791q-.72-.288-1.638-.288zm11.773 0v1.998h2.7v8.568h-2.7v1.998h8.1v-1.998h-2.7V90.43h2.7V88.43zm-19.538 2.61 1.225 4.752h-2.592l1.223-4.752zm11.94-.433q.954 0 1.315.36.378.36.378 1.188v.54q0 .829-.378 1.189-.36.36-1.315.36h-1.458v-3.637z",fill:"currentColor",fillOpacity:.3}),(0,e.jsxs)("defs",{children:[(0,e.jsxs)("linearGradient",{gradientUnits:"userSpaceOnUse",id:"illustration-api_svg__a",x1:151,x2:87.522,y1:109.025,y2:111.027,children:[(0,e.jsx)("stop",{stopColor:"currentColor"}),(0,e.jsx)("stop",{offset:1,stopColor:"currentColor",stopOpacity:0})]}),(0,e.jsxs)("linearGradient",{gradientUnits:"userSpaceOnUse",id:"illustration-api_svg__b",x1:151,x2:87.522,y1:102.428,y2:104.43,children:[(0,e.jsx)("stop",{stopColor:"currentColor"}),(0,e.jsx)("stop",{offset:1,stopColor:"currentColor",stopOpacity:0})]}),(0,e.jsxs)("linearGradient",{gradientUnits:"userSpaceOnUse",id:"illustration-api_svg__c",x1:151,x2:87.522,y1:93.83,y2:95.832,children:[(0,e.jsx)("stop",{stopColor:"currentColor"}),(0,e.jsx)("stop",{offset:1,stopColor:"currentColor",stopOpacity:0})]}),(0,e.jsxs)("linearGradient",{gradientUnits:"userSpaceOnUse",id:"illustration-api_svg__d",x1:150,x2:213.478,y1:94.965,y2:92.963,children:[(0,e.jsx)("stop",{stopColor:"currentColor"}),(0,e.jsx)("stop",{offset:1,stopColor:"currentColor",stopOpacity:0})]}),(0,e.jsxs)("linearGradient",{gradientUnits:"userSpaceOnUse",id:"illustration-api_svg__e",x1:150,x2:213.478,y1:87.562,y2:85.56,children:[(0,e.jsx)("stop",{stopColor:"currentColor"}),(0,e.jsx)("stop",{offset:1,stopColor:"currentColor",stopOpacity:0})]}),(0,e.jsxs)("linearGradient",{gradientUnits:"userSpaceOnUse",id:"illustration-api_svg__f",x1:150,x2:213.478,y1:82.16,y2:80.158,children:[(0,e.jsx)("stop",{stopColor:"currentColor"}),(0,e.jsx)("stop",{offset:1,stopColor:"currentColor",stopOpacity:0})]})]})]})},{}),link:x.DOCS_LINKS.API,description:"Want to connect to something we haven't thought of? Use our powerful public API to write your own integrations."}],H=o.memo(()=>(0,e.jsx)(m,{...u.ANIMATIONS.SimpleFadeIn,children:(0,e.jsxs)(g,{children:[(0,e.jsxs)(f,{children:[(0,e.jsxs)(v,{renderAs:"h2",styleAs:"h1",children:[(0,e.jsx)("span",{"data-style":"italic",children:"Instant integration"})," with the whole stack"]}),(0,e.jsx)(j,{children:"Out-of-the-box connections and flexible APIs make setup a breeze."})]}),(0,e.jsx)(y,{children:k.map((t,o)=>(0,e.jsx)(z,{DANGEROUS_AS_DIV:!0,isExternal:!0,showBkgGradient:t.showBkgGradient,to:t.link,children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(_,{children:t.illustration}),(0,e.jsxs)(C,{children:[(0,e.jsx)(G,{renderAs:"h4",children:t.title}),(0,e.jsx)(c.Text,{children:t.description})]})]})},o))})]})}));H.displayName="IntegrationsTout";var G=(0,s.default)(d.Heading).withConfig({displayName:"IntegrationsTout___StyledHeading",componentId:"sc-5ea9153-19"})`
                      display: flex;
                      margin-bottom: 7px;
                    `,$=t.i(321688),D=t.i(558202),R=t.i(104185),E=t.i(812488),q=t.i(288839),B=t.i(134700),V=t.i(785191),Q=t.i(430388);let P=s.default.div.withConfig({displayName:"CheckMark__Wrapper",componentId:"sc-9346e36c-0"})`
  display: flex;
  align-items: center;
  gap: 18px;
`,W=(0,s.default)(Q.GreenTickIcon).withConfig({displayName:"CheckMark__StyledIcon",componentId:"sc-9346e36c-1"})`
  transform: scale(1.5);

  @media (max-width: ${({theme:t})=>t.mediaQuery.LARGE}) {
    transform: scale(1.25) translateX(2px);
  }
`,F=(0,s.default)(c.Text).withConfig({displayName:"CheckMark__StyledText",componentId:"sc-9346e36c-2"})`
  color: ${({theme:t})=>t.colors.WHITE};
  line-height: ${({theme:t})=>t.lineHeight.body.m};
`,K=o.memo(({text:t})=>(0,e.jsxs)(P,{children:[(0,e.jsx)(W,{}),(0,e.jsx)(F,{size:"large",children:t})]}));K.displayName="CheckMark";let Z=(0,s.default)(l.motion.div).withConfig({displayName:"sharedStyles__Wrapper",componentId:"sc-b7f4e6e9-0"})`
  display: flex;
  padding: 40px 40px 0;
  margin-bottom: 200px;
  max-width: ${({theme:t})=>t.maxWidth.PAGE};
  width: 100%;

  @media (max-width: ${({theme:t})=>t.mediaQuery.LARGE}) {
    margin-bottom: 60px;
  }

  @media (max-width: ${({theme:t})=>t.mediaQuery.MEDIUM}) {
    flex-direction: column;
    padding: 0 40px;
  }
`,Y=["Unlimited users","Dedicated support","Unlimited projects","Customized environments and more...","Usage reports"],X=s.default.div.withConfig({displayName:"ACompleteSolutionTout__CheckMarkWrapper",componentId:"sc-2e228df7-0"})`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 16px;
  margin: 30px 0 46px 0;

  @media (max-width: ${({theme:t})=>t.mediaQuery.MEDIUM}) {
    grid-template-columns: 1fr;
  }
`,J=(0,s.default)(n.GradientHeader).attrs({renderAs:"h1"}).withConfig({displayName:"ACompleteSolutionTout__Title",componentId:"sc-2e228df7-1"})`
  && {
    margin-bottom: 50px;
    text-align: left;

    @media (max-width: ${({theme:t})=>t.mediaQuery.MEDIUM}) {
      margin-bottom: 0;
    }
  }
`,tt=(0,s.default)(Z).withConfig({displayName:"ACompleteSolutionTout__StyledWrapper",componentId:"sc-2e228df7-2"})`
  display: flex;
  gap: 40px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 90px;

  @media (max-width: ${({theme:t})=>t.mediaQuery.LARGE}) {
    margin-top: 10px;
    gap: 0;
  }
`,te=s.default.div.withConfig({displayName:"ACompleteSolutionTout__Left",componentId:"sc-2e228df7-3"})`
  flex: 1 1 50%;
`,to=(0,s.default)(V.Card).withConfig({displayName:"ACompleteSolutionTout__Right",componentId:"sc-2e228df7-4"})`
  flex: 1 1 45%;
  padding: 68px 60px;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: 20px;
  cursor: default;

  @media (max-width: ${({theme:t})=>t.mediaQuery.MEDIUM}) {
    padding: 40px;
  }
`,ti=o.memo(()=>(0,e.jsxs)(tt,{...u.ANIMATIONS.SimpleFadeIn,children:[(0,e.jsxs)(te,{children:[(0,e.jsx)(J,{renderAs:"h1",children:"A complete solution for enterprise analytics"}),(0,e.jsx)(X,{children:Y.map((t,o)=>(0,e.jsx)(K,{text:t},o))})]}),(0,e.jsxs)(to,{children:[(0,e.jsx)(d.Heading,{renderAs:"h2",children:"Ready to get started?"}),(0,e.jsx)(c.Text,{size:"extra-large",children:"Get in touch and find out which plan is right for you."}),(0,e.jsx)(r.Button,{href:x.INTERNAL_LINKS.RequestADemo,size:"large",stylez:"loud",text:"Contact Sales"})]})]}));ti.displayName="ACompleteSolutionTout";var ts=t.i(637804);let tl=[{question:"What are Hex's security policies and controls?",answer:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{children:"Hex is built on industry-leading security and privacy standards that keep our customer's data secure while connecting, querying, analyzing, and sharing. Hex is committed to helping customers of all sizes meet their data protection and compliance requirements."}),(0,e.jsxs)("div",{children:["As evidence of this, we have"," ",(0,e.jsx)(ts.SiteLink,{href:"/blog/soc-2-type-II-for-you/",children:"obtained our SOC 2 Type II report"}),", which attests to the effectiveness and our adherence to security controls and processes."]}),(0,e.jsx)("div",{children:(0,e.jsx)(ts.SiteLink,{href:x.INTERNAL_LINKS.Security,children:"Read more"})})]})},{question:"What deployment models does Hex offer?",answer:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{children:"Hex has 2 options for deployment:"}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:"Multi-tenant cloud, including separate HIPAA and EU stacks"}),(0,e.jsx)("li",{children:"Single-tenant VPCs, typically set up to securely peer to your existing infrastructure. These are fully-managed."})]}),(0,e.jsxs)("div",{children:["Please feel free to"," ",(0,e.jsx)(ts.SiteLink,{href:x.INTERNAL_LINKS.RequestADemo,children:"get in touch"})," to discuss which might work best for you."]})]})},{question:"Does Hex work with large data?",answer:(0,e.jsx)(e.Fragment,{children:"Hex is built to seamlessly handle cloud-scale workloads. Hex runs queries directly against the customer’s data warehouse, meaning workflows can scale as large as the underlying warehouse allows."})},{question:"What is Hex's pricing model?",answer:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{children:"Our Enterprise solution is a custom solution tailored to meet your needs. It includes advanced security, custom support packages, and a series of control features for large organizations."}),(0,e.jsx)("div",{children:(0,e.jsx)(ts.SiteLink,{href:x.INTERNAL_LINKS.RequestADemo,children:"Get in touch"})})]})},{question:"How can we get started evaluating Hex?",answer:(0,e.jsxs)("div",{children:["Anyone can sign up for a free 14-day trial of Hex's Team plan. If you'll require more time to evaluate Hex or are curious about our Enterprise plan, please"," ",(0,e.jsx)(ts.SiteLink,{href:x.INTERNAL_LINKS.RequestADemo,children:"reach out"})," and we'll get you set up!"]})},{question:"How is data stored in Hex?",answer:(0,e.jsx)(e.Fragment,{children:"Hex stores all cell output data, including previews of SQL results, in AWS RDS, and uploaded files are stored in AWS S3. Data in RDS and S3 persists indefinitely until the associated project is deleted or a deletion request is made. Caching of SQL cell output data is opt-in, configurable, and stored in S3 for up to 90 days."})},{question:"How do I manage who has access to data in Hex?",answer:(0,e.jsx)(e.Fragment,{children:"Hex supports SSO via OIDC within the product. Hex gives users the tools to implement role-based access control on all Hex artifacts. This gives customers fine-grained control over who in an organization has access to specific data. Administrators have control over what users have access to and can restrict access to databases, and the ability to view or edit projects."})}],ta=["SSO support","SCIM Directory sync from Okta, Active Directory, and Google","Secure data connections using SSL and OAuth pass-through","Audit logging and version control, so you know who did what when"],tr=(0,s.default)(Z).withConfig({displayName:"GovernanceControlTout__StyledWrapper",componentId:"sc-c53a9c10-0"})`
  align-items: center;
  gap: 120px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${({theme:t})=>t.mediaQuery.SMALL}) {
    gap: 60px;
  }
`,tn=s.default.img.withConfig({displayName:"GovernanceControlTout__Illustration",componentId:"sc-c53a9c10-1"})`
  @media (max-width: ${({theme:t})=>t.mediaQuery.SMALL}) {
    width: 100%;
  }
`,td=(0,s.default)(n.GradientHeader).attrs({renderAs:"h1"}).withConfig({displayName:"GovernanceControlTout__Title",componentId:"sc-c53a9c10-2"})`
  && {
    margin-bottom: 12px;
    text-align: left;
  }
`,tc=s.default.div.withConfig({displayName:"GovernanceControlTout__CheckMarkWrapper",componentId:"sc-c53a9c10-3"})`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 5px 0 30px;
`,tp=s.default.div.withConfig({displayName:"GovernanceControlTout__Right",componentId:"sc-c53a9c10-4"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,th=o.memo(()=>(0,e.jsxs)(tr,{...u.ANIMATIONS.SimpleFadeIn,children:[(0,e.jsx)(tn,{alt:"Governance and Control Digital Illustration",src:"/images/enterprise/illustration-governance-and-control.svg"}),(0,e.jsxs)(tp,{children:[(0,e.jsx)(td,{renderAs:"h1",children:"Governance & Control"}),(0,e.jsx)(c.Text,{size:"extra-large",children:"Ensure compliance, mitigate risk, and optimize resources."}),(0,e.jsx)(tc,{children:ta.map((t,o)=>(0,e.jsx)(K,{text:t},o))}),(0,e.jsx)(r.Button,{href:x.INTERNAL_LINKS.Security,text:"Learn more about control"})]})]}));th.displayName="GovernanceControlTout";let tu=s.default.div.withConfig({displayName:"IconText__Wrapper",componentId:"sc-d4d9503c-0"})`
  display: flex;
  align-items: center;

  ${({$direction:t})=>"horizontal"===t?s.css`
          gap: 15px;
        `:s.css`
          flex-direction: column;
          gap: 10px;
          text-align: center;
        `}

  // Make all horizontal at this size
  @media (max-width: ${({theme:t})=>t.mediaQuery.MEDIUM}) {
    flex-direction: row;
    gap: 15px;
    text-align: left;
  }
`,tx=s.default.div.withConfig({displayName:"IconText__StyledIcon",componentId:"sc-d4d9503c-1"})`
  display: flex;

  svg {
    color: ${({theme:t})=>t.iconColor.DEFAULT};
    background: transparent;
  }
`,tm=(0,s.default)(c.Text).withConfig({displayName:"IconText__StyledText",componentId:"sc-d4d9503c-2"})`
  color: ${({theme:t})=>t.fontColor.LOUD};
  font-weight: ${({theme:t})=>t.fontWeight.NORMAL};
  font-size: ${({theme:t})=>t.fontSize.LARGE};
  line-height: ${({theme:t})=>t.lineHeight.body.l};

  ${({$small:t,theme:e})=>t&&s.css`
      color: ${e.fontColor.DEFAULT};
      font-weight: ${e.fontWeight.MEDIUM};
      font-size: ${e.fontSize.MEDIUM};
      line-height: ${e.lineHeight.body.m};
    `}

  @media (max-width: ${({theme:t})=>t.mediaQuery.MOBILE}) {
    font-size: ${({theme:t})=>t.fontSize.MEDIUM};
    line-height: ${({theme:t})=>t.lineHeight.body.m};
  }
`,tg=o.memo(({icon:t,text:o,direction:i="horizontal",small:s=!1})=>(0,e.jsxs)(tu,{$direction:i,children:[(0,e.jsx)(tx,{children:t}),(0,e.jsx)(tm,{$small:s,size:s?"medium":"large",children:o})]}));tg.displayName="IconText";let tf=(0,s.default)(Z).withConfig({displayName:"SupportSuccessTout__StyledWrapper",componentId:"sc-d185e262-0"})`
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${({theme:t})=>t.mediaQuery.MEDIUM}) {
    margin-bottom: 20px;
  }
`,tv=(0,s.default)(n.GradientHeader).attrs({renderAs:"h1"}).withConfig({displayName:"SupportSuccessTout__Title",componentId:"sc-d185e262-1"})`
  && {
    margin-bottom: 12px;

    @media (max-width: ${({theme:t})=>t.mediaQuery.MEDIUM}) {
      text-align: left;
    }
  }
`,tj=(0,s.default)(c.Text).withConfig({displayName:"SupportSuccessTout__StyledText",componentId:"sc-d185e262-2"})`
  margin-bottom: 40px;
  text-align: center;

  @media (max-width: ${({theme:t})=>t.mediaQuery.LARGE}) {
    text-align: left;
  }
`,ty=s.default.div.withConfig({displayName:"SupportSuccessTout__Top",componentId:"sc-d185e262-3"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 200px;
  margin-bottom: 80px;

  @media (max-width: ${({theme:t})=>t.mediaQuery.LARGE}) {
    padding: 0;
    margin-bottom: 40px;
    align-items: flex-start;
  }
`,t_=s.default.div.withConfig({displayName:"SupportSuccessTout__Bottom",componentId:"sc-d185e262-4"})`
  display: flex;
  padding: 0 100px;

  @media (max-width: ${({theme:t})=>t.mediaQuery.LARGE}) {
    flex-direction: column;
    padding: 0;
  }
`,tC=s.default.img.withConfig({displayName:"SupportSuccessTout__Illustration",componentId:"sc-d185e262-5"})`
  @media (max-width: ${({theme:t})=>t.mediaQuery.LARGE}) {
    display: none;
  }
`,tz=s.default.div.withConfig({displayName:"SupportSuccessTout__GridWrapper",componentId:"sc-d185e262-6"})`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: start;
  gap: 50px;

  @media (max-width: ${({theme:t})=>t.mediaQuery.MEDIUM}) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`,tw=o.memo(()=>{let t=(0,s.useTheme)(),o=(0,q.default)(t.mediaQueryString.MOBILE);return(0,e.jsxs)(tf,{...u.ANIMATIONS.SimpleFadeIn,children:[(0,e.jsxs)(ty,{children:[(0,e.jsx)(tv,{renderAs:"h1",children:"Everything your team needs to succeed"}),(0,e.jsx)(tj,{size:"extra-large",children:"Our expert Support teams engage deeply with customers, from implementation to ongoing usage."}),(0,e.jsx)(r.Button,{fill:o,href:x.INTERNAL_LINKS.RequestADemo,size:"large",stylez:"loud",text:"Get in touch"})]}),(0,e.jsxs)(t_,{children:[(0,e.jsxs)(tz,{children:[(0,e.jsx)(tg,{icon:(0,e.jsx)(Q.CommentIcon,{}),text:"Email and Slack support"}),(0,e.jsx)(tg,{icon:(0,e.jsx)(Q.ClockIcon,{}),text:"Priority SLAs and response times"}),(0,e.jsx)(tg,{icon:(0,e.jsx)(Q.UserIcon,{}),text:"Dedicated Product Expert"}),(0,e.jsx)(tg,{icon:(0,e.jsx)(Q.LearnIcon,{}),text:"Customized learning sessions"})]}),(0,e.jsx)(tC,{alt:"Customer Support Digital Illustration",src:"/images/illustrations/support-section.svg"})]})]})});tw.displayName="SupportSuccessTout";let tI=s.default.div.withConfig({displayName:"LogoBlock__Wrapper",componentId:"sc-ef6aa54e-0"})`
  height: 160px;
  width: 160px;
  border: ${({theme:t})=>`1px solid ${t.colors.LIGHT_PINK}`};
  display: flex;
  justify-content: center;
  align-items: center;
  ${({$left:t})=>t?"margin-right: auto;":"margin-left: auto;"}

  @media (max-width: ${({theme:t})=>t.mediaQuery.MEDIUM}) {
    width: auto;
    height: 80px;
    flex: 1 1 0;
    margin-left: -1px;

    img {
      scale: 0.5;
    }
  }
`,tM=o.memo(({height:t,left:o=!1,src:s,title:l,width:a})=>(0,e.jsx)(tI,{$left:o,children:(0,e.jsx)(i.default,{alt:l,height:t,src:s,width:a})}));tM.displayName="LogoBlock";let tS=(0,s.default)(c.Text).withConfig({displayName:"TextBlock__Number",componentId:"sc-f45b1337-0"})`
  font-family: ${({theme:t})=>t.fontFamily.MONO};
  text-transform: uppercase;
  font-size: ${({theme:t})=>t.fontSize.MEDIUM};
  line-height: ${({theme:t})=>t.lineHeight.body.m};
  letter-spacing: 2px;
  color: ${({theme:t})=>t.colors.LIGHT_PURPLE};
  margin-bottom: 10px;

  @media (max-width: ${({theme:t})=>t.mediaQuery.MEDIUM}) {
    margin-bottom: 4px;
  }
`,tO=(0,s.default)(d.Heading).attrs({renderAs:"h3"}).withConfig({displayName:"TextBlock__StyledHeading",componentId:"sc-f45b1337-1"})`
  margin-bottom: 10px;

  @media (max-width: ${({theme:t})=>t.mediaQuery.MEDIUM}) {
    margin-bottom: 4px;
  }
`,tb=o.memo(({heading:t,number:o,text:i})=>(0,e.jsxs)("div",{children:[(0,e.jsx)(tS,{children:o}),(0,e.jsx)(tO,{renderAs:"h3",children:t}),(0,e.jsx)(c.Text,{size:"large",children:i})]}));tb.displayName="TextBlock";let tN=(0,s.default)(Z).withConfig({displayName:"YourDataIsSafeTout__StyledWrapper",componentId:"sc-428a9d88-0"})`
  gap: 80px;
  padding-top: 160px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${({theme:t})=>t.mediaQuery.MEDIUM}) {
    padding-top: 40px;
  }
`,tL=(0,s.default)(n.GradientHeader).attrs({renderAs:"h1"}).withConfig({displayName:"YourDataIsSafeTout__Title",componentId:"sc-428a9d88-1"})`
  && {
    margin-bottom: 50px;
    text-align: left;
    max-width: 500px;

    @media (max-width: ${({theme:t})=>t.mediaQuery.MEDIUM}) {
      margin-bottom: 0;
    }
  }
`,tA=s.default.div.withConfig({displayName:"YourDataIsSafeTout__LogoBlockWrapper",componentId:"sc-428a9d88-2"})`
  display: flex;
  flex-direction: column;
  width: 320px;

  @media (max-width: ${({theme:t})=>t.mediaQuery.MEDIUM}) {
    flex-direction: row;
    padding: 30px 0;
    width: 100%;
  }
`,tT=s.default.div.withConfig({displayName:"YourDataIsSafeTout__TextBlockWrapper",componentId:"sc-428a9d88-3"})`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 60px;
  row-gap: 30px;
  margin-bottom: 40px;

  @media (max-width: ${({theme:t})=>t.mediaQuery.MEDIUM}) {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-bottom: 50px;
  }
`,tU=s.default.div.withConfig({displayName:"YourDataIsSafeTout__Column",componentId:"sc-428a9d88-4"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,tk=o.memo(()=>{let t=(0,s.useTheme)(),o=(0,q.default)(t.mediaQueryString.MEDIUM),i=(0,e.jsx)(tL,{renderAs:"h1",children:"Your data is safe with us"}),l=(0,e.jsxs)(tA,{children:[(0,e.jsx)(tM,{height:72,src:"/images/illustrations/logo-gdpr.svg",title:"GDPR Logo",width:74}),(0,e.jsx)(tM,{height:86,left:!0,src:"/images/illustrations/logo-AICPA-SOC.svg",title:"AICPA SOC Logo",width:87}),(0,e.jsx)(tM,{height:54,src:"/images/illustrations/logo-hipaa.svg",title:"HIPAA Logo",width:108})]}),a=(0,e.jsxs)(tT,{children:[(0,e.jsx)(tb,{heading:"Completely compliant",number:"01",text:"SOC2 Type II, HIPAA, GDPR."}),(0,e.jsx)(tb,{heading:"Secure database connections",number:"02",text:"SSL and pass-through OAuth available."}),(0,e.jsx)(tb,{heading:"Flexible deployment models",number:"03",text:"Multi-tenant HIPAA or EU and Single-Tenant options available."})]}),n=(0,e.jsx)(r.Button,{href:x.INTERNAL_LINKS.Security,text:"Learn more about security"});return(0,e.jsx)(tN,{...u.ANIMATIONS.SimpleFadeIn,children:o?(0,e.jsxs)(tU,{children:[i,l,a,n]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(tU,{children:[i,a,n]}),(0,e.jsx)(tU,{children:l})]})})});tk.displayName="YourDataIsSafeTout";let tH=["SSO and SCIM","HIPAA BAA available","Single tenant deploys","OAuth and SSL data connections"],tG=s.default.div.withConfig({displayName:"EnterprisePageContent__CheckMarkWrapper",componentId:"sc-a0e84573-0"})`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 16px;
  margin: 30px 0 46px 0;

  @media (max-width: ${({theme:t})=>t.mediaQuery.MEDIUM}) {
    grid-template-columns: 1fr;
  }
`,t$=s.default.div.withConfig({displayName:"EnterprisePageContent__FAQWrapper",componentId:"sc-a0e84573-1"})`
  width: 100%;
  background: ${({theme:t})=>t.backgroundColor};
  position: relative;
  z-index: 1;
`,tD=o.memo(({customerBannerData:t})=>{let o=(0,s.useTheme)(),l=(0,q.default)(o.mediaQueryString.MOBILE);return(0,e.jsx)(B.V1GridLines,{children:(0,e.jsxs)(B.V1PageWrapper,{children:[(0,e.jsx)(R.HeroToutWithIllustration,{customActions:(0,e.jsx)(r.Button,{fill:l,href:x.INTERNAL_LINKS.RequestADemo,size:"large",stylez:"loud",text:"Get in touch"}),customContent:(0,e.jsx)(tG,{children:tH.map((t,o)=>(0,e.jsx)(K,{text:t},o))}),description:"Connect to data, provision users, and enforce permissions with ease.",illustration:(0,e.jsx)(i.default,{alt:"Enterprise Digital Illustration",height:523,priority:!0,src:"/images/enterprise/illustration-enterprise-hero.svg",style:{height:"auto"},width:624}),subtitle:"Enterprise",title:"Built for scale, security, and control"}),(0,e.jsx)($.CustomerBanner,{data:t}),(0,e.jsx)(tk,{}),(0,e.jsx)(th,{}),(0,e.jsx)(tw,{}),(0,e.jsx)(H,{}),(0,e.jsx)(ti,{}),(0,e.jsxs)(t$,{children:[(0,e.jsx)(E.TronDivider,{}),(0,e.jsx)(D.FAQ,{items:tl})]})]})})});tD.displayName="EnterprisePageContent",t.s(["EnterprisePageContent",0,tD],589194)}]);