(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,296436,e=>{e.v(t=>Promise.all(["static/chunks/3m1bcb90s3oz8.js"].map(t=>e.l(t))).then(()=>t(416694)))},557568,e=>{"use strict";var t=e.i(843476),i=e.i(271645),a=e.i(193594),n=e.i(997053),o=e.i(739876),r=e.i(581444),l=e.i(360571);let d=i.memo(function({children:e,className:i,shouldAnimate:a=!0}){return(0,t.jsxs)(r.LayoutSubgrid,{style:{zIndex:1},children:[(0,t.jsxs)(s,{children:[(0,t.jsx)(o.CheckeredMargin,{}),(0,t.jsxs)(r.LayoutSubgrid,{"data-content-grid":!0,style:{position:"relative"},children:[(0,t.jsx)(c,{"data-position":"br"}),(0,t.jsx)(c,{"data-position":"bl"}),(0,t.jsx)(o.GridRule,{$column:3}),(0,t.jsx)(o.GridRule,{$column:9})]}),(0,t.jsx)(o.CheckeredMargin,{"data-right":!0})]}),(0,t.jsx)(p,{children:(0,t.jsx)(u,{$shouldAnimate:a,className:i,children:e})})]})}),s=(0,n.default)(r.LayoutSubgrid).withConfig({displayName:"HeroAnimated__TopGridLines",componentId:"sc-af841905-0"})`
  height: 156px;
  border-bottom: 1px solid ${({theme:e})=>(0,o.gridColorSelector)(e,"minor")};

  @media (max-width: ${({theme:e})=>e.mediaQuery.MOBILE}) {
    height: 124px;
  }
`,c=n.default.div.withConfig({displayName:"HeroAnimated__AccentL",componentId:"sc-af841905-1"})`
  position: absolute;
  bottom: -1px;
  border-bottom: 1px solid ${({theme:e})=>e.palette.fg1200};
  height: 6px;
  width: 6px;
  z-index: 1;

  &[data-position='br'] {
    right: -1px;
    border-right: 1px solid ${({theme:e})=>e.palette.fg1200};
  }

  &[data-position='bl'] {
    left: -1px;
    border-left: 1px solid ${({theme:e})=>e.palette.fg1200};
  }
`,p=(0,n.default)(r.LayoutSubgrid).withConfig({displayName:"HeroAnimated__Bg",componentId:"sc-af841905-2"})`
  position: relative;
  background-color: ${({theme:e})=>(0,a.darken)(.015,e.palette.bg300)};
  background-image: ${({theme:e})=>(0,o.backgroundImageCheckered)(e,{color:e.palette.fgA300})};

  padding: ${(0,l.generateFluidPxScale)(12,24)} ${(0,l.generateFluidPxScale)(0,12)}
    ${(0,l.generateFluidPxScale)(16,32)} ${(0,l.generateFluidPxScale)(0,12)};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-image: ${({theme:e})=>e.paperTextureCssVars.img};
    background-size: ${({theme:e})=>e.paperTextureCssVars.size};
    opacity: ${({theme:e})=>e.paperTextureCssVars.opacity};
    mix-blend-mode: ${({theme:e})=>e.paperTextureCssVars.mixBlendMode};
  }

  perspective: 1000px;
`,u=n.default.div.withConfig({displayName:"HeroAnimated__HeroGlass",componentId:"sc-af841905-3"})`
  grid-column: 2 / -2;
  position: relative;
  margin: 0 auto;
  width: 100%;
  overflow: clip;
  display: flex;
  max-width: calc(${({theme:e})=>e.maxWidth.GRID_CONTENT});
  border-radius: 12px;
  padding: ${(0,l.generateFluidPxScale)(12,40)} ${(0,l.generateFluidPxScale)(8,48)};
  background-image: radial-gradient(
    circle at 50% 130%,
    ${({theme:e})=>(0,a.lighten)(.043,e.palette.bg500)} 0%,
    ${({theme:e})=>e.palette.bg300} 80%
  );
  box-shadow: ${({theme:e})=>{let t=`0 0.5px 0px 0.75px ${(0,a.lighten)(.125,e.palette.bg500)}`;return[`0 0 24px 0px ${e.palette.bg400} inset`,t,"6px 37px 10px 0px rgba(0, 0, 0, 0.01), 4px 24px 10px 0px rgba(0, 0, 0, 0.04), 2px 13px 8px 0px rgba(0, 0, 0, 0.14), 1px 6px 6px 0px rgba(0, 0, 0, 0.24), 0px 1px 3px 0px rgba(0, 0, 0, 0.27)"].join(", ")}};

  @media (max-width: ${({theme:e})=>e.mediaQuery.MOBILE}) {
    min-height: 620px;
  }

  transform-origin: 50% 300%;
  animation: ${({$shouldAnimate:e})=>e?"glass-enter 2s ease-in-out":"none"};
  animation-fill-mode: both;
  animation-duration: 673.93ms;
  animation-timing-function: linear(
    0 0%,
    0.003805 1%,
    0.014538 2%,
    0.031232 3%,
    0.053003 4%,
    0.07904 5%,
    0.108604 6%,
    0.141025 7.000000000000001%,
    0.175696 8%,
    0.212072 9%,
    0.249665 10%,
    0.288039 11%,
    0.326809 12%,
    0.365636 13%,
    0.404224 14.000000000000002%,
    0.442316 15%,
    0.479693 16%,
    0.516166 17%,
    0.551581 18%,
    0.585809 19%,
    0.618746 20%,
    0.650314 21%,
    0.680451 22%,
    0.709116 23%,
    0.736284 24%,
    0.761944 25%,
    0.786098 26%,
    0.808758 27%,
    0.829946 28.000000000000004%,
    0.849694 28.999999999999996%,
    0.868037 30%,
    0.885019 31%,
    0.900688 32%,
    0.915094 33%,
    0.928291 34%,
    0.940337 35%,
    0.951288 36%,
    0.961202 37%,
    0.970138 38%,
    0.978156 39%,
    0.985311 40%,
    0.991662 41%,
    0.997264 42%,
    1.002171 43%,
    1.006434 44%,
    1.010105 45%,
    1.013232 46%,
    1.015861 47%,
    1.018037 48%,
    1.0198 49%,
    1.02119 50%,
    1.022245 51%,
    1.023 52%,
    1.023488 53%,
    1.023738 54%,
    1.02378 55.00000000000001%,
    1.023639 56.00000000000001%,
    1.023341 56.99999999999999%,
    1.022907 57.99999999999999%,
    1.022357 59%,
    1.021712 60%,
    1.020988 61%,
    1.0202 62%,
    1.019362 63%,
    1.018487 64%,
    1.017586 65%,
    1.01667 66%,
    1.015747 67%,
    1.014824 68%,
    1.013909 69%,
    1.013007 70%,
    1.012124 71%,
    1.011263 72%,
    1.010429 73%,
    1.009623 74%,
    1.008849 75%,
    1.008108 76%,
    1.007401 77%,
    1.006729 78%,
    1.006093 79%,
    1.005493 80%,
    1.004929 81%,
    1.0044 82%,
    1.003906 83%,
    1.003446 84%,
    1.003019 85%,
    1.002624 86%,
    1.00226 87%,
    1.001926 88%,
    1.00162 89%,
    1.001341 90%,
    1.001088 91%,
    1.000859 92%,
    1.000653 93%,
    1.000468 94%,
    1.000304 95%,
    1.000158 96%,
    1.00003 97%
  );

  @keyframes glass-enter {
    from {
      opacity: 0.4;
      transform: translateZ(-120px) translateY(60px) rotateX(-3deg);
    }
  }
`;e.s(["HeroAnimated",0,d])},613938,e=>{"use strict";var t=e.i(843476),i=e.i(271645),a=e.i(846932),n=e.i(997053),o=e.i(991709),r=e.i(739876),l=e.i(581444);let d=(0,n.default)(l.LayoutSubgrid).withConfig({displayName:"BasicPageRow__Wrapper",componentId:"sc-811624ad-0"})`
  overflow-x: clip;

  ${({$topBorder:e})=>e&&n.css`
      border-top: 1px solid ${({theme:e})=>(0,r.gridColorSelector)(e,"major")};
    `}
`,s=n.css`
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

  ${({$fullWidth:e})=>e&&n.css`
      max-width: none;
      padding: 0;
      grid-column: 1 / -1;
    `}

  ${({$fullWidth:e})=>!e&&n.css`
      @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
        padding: 60px 0;
        grid-column: 2 / -2;
      }

      @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
        padding: 40px 0;
      }
    `}
`,c=(0,n.default)(a.motion.div).withConfig({displayName:"BasicPageRow__Inner",componentId:"sc-811624ad-1"})`
  ${s}
`,p=n.default.div.withConfig({displayName:"BasicPageRow__InnerStatic",componentId:"sc-811624ad-2"})`
  ${s}
`,u=(0,n.default)(l.LayoutGridCondensed).withConfig({displayName:"BasicPageRow__StyledLayoutGridCondensed",componentId:"sc-811624ad-3"})`
  position: relative;
`,m=i.memo(function({animateEntrance:e=!0,children:i,fullWidth:a=!1,topBorder:n=!1,className:l,CartesianGridComponent:s}){return(0,t.jsxs)(d,{$topBorder:n,children:[(0,t.jsx)(r.CheckeredMargin,{}),(0,t.jsxs)(u,{className:l,children:[s&&(0,t.jsx)(s,{fadeDirection:"in"}),e?(0,t.jsx)(c,{...o.ANIMATIONS.SimpleFadeIn,$fullWidth:a,children:i}):(0,t.jsx)(p,{$fullWidth:a,children:i})]}),(0,t.jsx)(r.CheckeredMargin,{"data-right":!0})]})});e.s(["BasicPageRow",0,m])},718269,658915,e=>{"use strict";var t=e.i(843476),i=e.i(193594),a=e.i(997053),n=e.i(785191),o=e.i(258591),r=e.i(637804);e.i(726497);var l=e.i(778888),d=e.i(709455);let s=e=>{if(!e)return null;switch(e.__typename){case"SanityBlogPost":return`/blog/${e.slug}/`;case"SanityCustomer":return`/customers/${e.slug}/`;case"SanityGatedContent":return`/resources/${e.slug}/`;case"SanityResourceVideo":if(e.externalUrl)return e.externalUrl;return`/resources/video/${e.slug}/`;case"SanityUseCase":return`/templates/${e.categorySlug}/${e.slug}/`;default:return null}},c=e=>{if(!e)return null;switch(e.__typename){case"SanityBlogPost":case"SanityGatedContent":case"SanityResourceVideo":return e.title||null;case"SanityCustomer":return e.name?`Customer story: ${e.name}`:null;case"SanityUseCase":return e.name||null;default:return null}},p=e=>{if(!e)return{type:"External",value:null};let i=c(e)??"Resource thumbnail";switch(e.__typename){case"SanityResourceVideo":return{type:"Video",value:e.imageUrl?(0,t.jsx)("img",{alt:i,src:e.imageUrl}):null};case"SanityBlogPost":return{type:"Blog post",value:e.imageUrl?(0,t.jsx)("img",{alt:i,src:e.imageUrl}):null};case"SanityCustomer":return{type:"Customer story",value:e.imageUrl?(0,t.jsx)("img",{alt:i,src:e.imageUrl}):null};case"SanityGatedContent":return{type:e.typeOfContent&&["eBook","webinar","one-pager"].includes(e.typeOfContent)?e.typeOfContent:"External",value:e.imageUrl?(0,t.jsx)("img",{alt:i,src:e.imageUrl}):null};case"SanityUseCase":return{type:"Use case",value:e.imageUrl?(0,t.jsx)("img",{alt:i,src:e.imageUrl}):null};default:return{type:"External",value:null}}};e.s(["buildInternalResourceMedia",0,p,"buildInternalResourceTitle",0,c,"buildInternalResourceUrl",0,s],658915);let u=a.default.div.withConfig({displayName:"SolutionResourceCard__CardLink",componentId:"sc-4bdd6a2f-0"})`
  display: flex;

  & > a {
    flex: 1 1 auto;
    display: block;
    color: inherit;
    text-decoration: none;
    border-bottom: none;
  }

  & > a:hover {
    text-decoration: none;
    background-color: transparent;
  }
`,m=(0,a.default)(n.Card).withConfig({displayName:"SolutionResourceCard__Wrapper",componentId:"sc-4bdd6a2f-1"})`
  height: 100%;
  padding: 0;
`,g=a.default.div.withConfig({displayName:"SolutionResourceCard__MediaWrapper",componentId:"sc-4bdd6a2f-2"})`
  display: flex;
  width: 100%;
  position: relative;
  padding: 20px;
`,x=a.default.div.withConfig({displayName:"SolutionResourceCard__Illustration",componentId:"sc-4bdd6a2f-3"})`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  inset: 0;
  overflow: hidden;
  opacity: 0.35;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;

  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`,f=a.default.div.withConfig({displayName:"SolutionResourceCard__Image",componentId:"sc-4bdd6a2f-4"})`
  width: 100%;
  aspect-ratio: 16/9;
  background-color: ${({theme:e})=>e.palette.bg300};
  border-radius: 4px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({$accentColor:e})=>e};
  overflow: hidden;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.5);

  img {
    max-width: 100%;
  }
`,h=a.default.span.withConfig({displayName:"SolutionResourceCard__PlaceholderLabel",componentId:"sc-4bdd6a2f-5"})`
  font-size: ${({theme:e})=>e.fontSize.EXTRA_SMALL};
  color: ${({theme:e})=>e.palette.fg800};
`,y=a.default.div.withConfig({displayName:"SolutionResourceCard__Content",componentId:"sc-4bdd6a2f-6"})`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,S=a.default.div.withConfig({displayName:"SolutionResourceCard__ContentType",componentId:"sc-4bdd6a2f-7"})`
  font-size: ${({theme:e})=>e.fontSize.EXTRA_SMALL};
  color: ${({theme:e})=>e.palette.fg1200};
  background-color: ${({theme:e})=>e.palette.bg300};
  border: 1px solid ${({theme:e})=>e.palette.fg800};
  padding: 1px 4px;
  border-radius: 1px;
  align-self: flex-start;
`,b=a.default.div.withConfig({displayName:"SolutionResourceCard__Metadata",componentId:"sc-4bdd6a2f-8"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,_=a.default.div.withConfig({displayName:"SolutionResourceCard__MetadataRow",componentId:"sc-4bdd6a2f-9"})`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  row-gap: 2px;
  font-size: ${({theme:e})=>e.fontSize.EXTRA_SMALL};
  color: ${({theme:e})=>(0,i.rgba)(e.palette.fgLoud,.446)};
`,w=a.default.span.withConfig({displayName:"SolutionResourceCard__SolutionTag",componentId:"sc-4bdd6a2f-10"})`
  color: ${({$color:e})=>e};
`;e.s(["SolutionResourceCard",0,({solutionTypeOverride:e,resource:i})=>{let{title:a,timeToReadwatch:n,solution:C,internalResource:j}=i,$=C.filter(e=>e.slug in d.SOLUTION_ASSETS),v=e&&e in d.SOLUTION_ASSETS?e:$[0]?.slug,I=v?d.SOLUTION_ASSETS[v]:void 0,N=s(j),A=c(j),{type:R,value:T}=p(j);return I&&N?(0,t.jsx)(u,{children:(0,t.jsx)(r.SiteLink,{href:N,children:(0,t.jsxs)(m,{effect:"glass",interactive:!0,children:[(0,t.jsxs)(g,{children:[(0,t.jsx)(x,{children:I.illustration}),(0,t.jsx)(f,{$accentColor:I.fadedColor,children:T??(0,t.jsx)(h,{children:R})})]}),(0,t.jsxs)(y,{children:[(0,t.jsx)(S,{className:l.textStyles.annotation,children:R}),(0,t.jsx)(o.Heading,{renderAs:"h4",children:A||a}),(0,t.jsxs)(b,{children:[(0,t.jsxs)(_,{className:l.textStyles.annotation,children:["Solution/",$.map(e=>(0,t.jsx)(w,{$color:d.SOLUTION_ASSETS[e.slug].color,children:e.name},e.name))]}),n&&(0,t.jsxs)(_,{className:l.textStyles.annotation,children:[n," min"]})]})]})]})})}):null}],718269)},661534,e=>{"use strict";var t=e.i(843476),i=e.i(271645),a=e.i(997053),n=e.i(650617),o=e.i(718269);let r=i.memo(({filteredResources:e,selectedSolution:i})=>{let a="all"===i?void 0:i;return(0,t.jsx)(l,{children:e.length>0?e.map(e=>(0,t.jsx)(o.SolutionResourceCard,{resource:e,solutionTypeOverride:a},`${e.internalResource.__typename}:${e.internalResource.slug}`)):(0,t.jsx)(n.Text,{children:"No resources found"})})});r.displayName="SolutionsGrid";let l=a.default.div.withConfig({displayName:"SolutionsGrid__Wrapper",componentId:"sc-892bd847-0"})`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    grid-template-columns: 1fr;
  }
`;e.s(["SolutionsGrid",0,r,"getResourceUpdatedAt",0,e=>{let t=e.internalResource;return"SanityBlogPost"===t.__typename||"SanityResourceVideo"===t.__typename?t.date:"updatedAt"in t&&"string"==typeof t.updatedAt?t.updatedAt:""}])},224402,e=>{"use strict";var t=e.i(843476),i=e.i(271645),a=e.i(997053),n=e.i(321688),o=e.i(613938),r=e.i(709455),l=e.i(661534),d=e.i(658915),s=e.i(706736),c=e.i(258591),p=e.i(650617),u=e.i(430388);let m=i.memo(({selectedSolution:e})=>{if("all"===e)return null;let i=r.SOLUTION_ASSETS[e];return(0,t.jsxs)(g,{children:[(0,t.jsxs)(x,{children:[(0,t.jsx)(f,{$borderColor:i.fadedColor,$color:i.color,children:i.icon}),(0,t.jsxs)(h,{children:[(0,t.jsx)(c.Heading,{renderAs:"h3",children:i.name}),(0,t.jsx)(p.Text,{size:"medium",children:i.description})]})]}),i.url&&(0,t.jsx)(s.Button,{href:i.url,icon:(0,t.jsx)(u.ArrowRightIcon,{}),iconPos:"right",text:"Learn more"})]})});m.displayName="SolutionsDetailHeader";let g=a.default.div.withConfig({displayName:"SolutionsDetailHeader__Wrapper",componentId:"sc-21414087-0"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
  padding-top: 10px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    flex-direction: column;
    align-items: flex-start;
  }
`,x=a.default.div.withConfig({displayName:"SolutionsDetailHeader__Inner",componentId:"sc-21414087-1"})`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: auto;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    flex-direction: column;
    align-items: flex-start;
  }
`,f=a.default.div.withConfig({displayName:"SolutionsDetailHeader__IconWrapper",componentId:"sc-21414087-2"})`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px dashed ${({$borderColor:e})=>e};
  background-color: ${({theme:e})=>e.palette.bg300};

  svg {
    color: ${({$color:e})=>e};
  }
`,h=a.default.div.withConfig({displayName:"SolutionsDetailHeader__TextInfo",componentId:"sc-21414087-3"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;

  p {
    margin: 0;
  }
`;var y=e.i(620363),S=e.i(273454),b=e.i(557568),_=e.i(288839),w=e.i(665419);let C=["Data teams","Data leaders","Product","Marketing","Sales","Customer success"],j=i.memo(()=>{let e=(0,a.useTheme)(),i=(0,_.default)(e.mediaQueryString.SMALL);return(0,t.jsx)($,{children:(0,t.jsx)(v,{children:(0,t.jsxs)(I,{children:[(0,t.jsx)(T,{renderAs:"h1",children:"Solutions for"}),(0,t.jsx)(R,{children:(0,t.jsx)(y.Rotator,{itemHeight:i?81:121,itemWidth:i?520:820,options:C.map(e=>(0,t.jsx)(L,{"data-name":e,renderAs:"h2",styleAs:"h0",children:e},e))})}),(0,t.jsx)(N,{size:"extra-large",children:"One connected system - infinite data answers"}),(0,t.jsxs)(A,{children:[(0,t.jsx)(s.Button,{href:w.SIGNUP_LINK,size:"large",stylez:"loud",text:"Get started for free"}),(0,t.jsx)(s.Button,{href:w.INTERNAL_LINKS.RequestADemo,size:"large",text:"Request a demo"})]})]})})})});j.displayName="SolutionsHero";let $=(0,a.default)(b.HeroAnimated).withConfig({displayName:"SolutionsHero__Wrapper",componentId:"sc-5dde2743-0"})`
  padding: 0;

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    min-height: 0;
  }
`,v=a.default.div.withConfig({displayName:"SolutionsHero__Inner",componentId:"sc-5dde2743-1"})`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 40px 79px;
  width: 100%;
  height: 100%;
  position: relative;

  &::before {
    z-index: 1;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/images/solutions/illustration-solutions-hero-bkg.svg');
    background-repeat: repeat;
    background-size: 246px auto;
    background-position: center 24px;
    mask-image: radial-gradient(
      circle at 50% 50%,
      rgba(0, 0, 0, 0.62) 40%,
      rgba(0, 0, 0, 0.05) 100%
    );
  }
`,I=a.default.div.withConfig({displayName:"SolutionsHero__Content",componentId:"sc-5dde2743-2"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  position: relative;
  z-index: 2;
`,N=(0,a.default)(p.Text).withConfig({displayName:"SolutionsHero__Description",componentId:"sc-5dde2743-3"})`
  width: 100%;
  max-width: 600px;
  margin-bottom: 30px;
`,A=a.default.div.withConfig({displayName:"SolutionsHero__Actions",componentId:"sc-5dde2743-4"})`
  display: flex;
  gap: 16px;
`,R=a.default.div.withConfig({displayName:"SolutionsHero__RotatorWrapper",componentId:"sc-5dde2743-5"})`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  position: relative;

  &::before {
    content: '';
    display: block;
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 1;
    border-top: 1px dashed ${({theme:e})=>e.borderColor.DEFAULT};
    border-bottom: 1px dashed ${({theme:e})=>e.borderColor.DEFAULT};
    mask-image: linear-gradient(
      to left,
      transparent 0%,
      white 15%,
      white 85%,
      transparent 100%
    );
  }
`,T=(0,a.default)(c.Heading).withConfig({displayName:"SolutionsHero__TopHeading",componentId:"sc-5dde2743-6"})`
  font-family: 'PP Editorial New', sans-serif;
  font-weight: 200;
  font-style: italic;
  font-size: 60px;
  letter-spacing: 0;
  color: ${({theme:e})=>e.fontColor.DEFAULT};
`,L=(0,a.default)(S.GradientHeader).withConfig({displayName:"SolutionsHero__LoopingHeading",componentId:"sc-5dde2743-7"})`
  padding-top: 10px;
  line-height: ${121}px;
  height: ${121}px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    padding-top: 5px;
    line-height: ${81}px;
    height: ${81}px;

    &[data-name='customer-success'] {
      font-size: min(42px, 8vw) !important;
    }
  }
`;var U=e.i(662743),k=e.i(928754);let E=i.memo(({allResources:e,solutionsToShow:i,selectedSolution:a,setSelectedSolution:n})=>(0,t.jsxs)(M,{children:[(0,t.jsx)(s.Button,{active:"all"===a,icon:(0,t.jsx)(U.SolutionsAllIcon,{}),text:"All",onClick:()=>{(0,k.trackFilterApplied)("use_case","all"),n("all")}},"all"),i.map(i=>(0,t.jsx)(s.Button,{active:a===i.slug,icon:r.SOLUTION_ASSETS[i.slug].icon,text:(0,t.jsxs)(O,{children:[i.name,(0,t.jsx)("span",{children:e.filter(e=>e.solution.some(e=>e.slug===i.slug)).length})]}),onClick:()=>{(0,k.trackFilterApplied)("use_case",i.slug),n(i.slug)}},i.name))]}));E.displayName="SolutionsNav";let M=a.default.div.withConfig({displayName:"SolutionsNav__Wrapper",componentId:"sc-a761ec1f-0"})`
  display: flex;
  gap: 10px;
  width: 100%;
  min-width: 0;

  > div {
    flex: 1 0 auto;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.EXTRA_LARGE}) {
    flex-wrap: wrap;
    justify-content: center;

    > div {
      flex: none;
    }
  }
`,O=a.default.div.withConfig({displayName:"SolutionsNav__ButtonText",componentId:"sc-a761ec1f-1"})`
  display: flex;
  gap: 6px;
  align-items: center;

  span {
    opacity: 0.4;
  }
`,P=a.default.div.withConfig({displayName:"SolutionsContent__SolutionsWrapper",componentId:"sc-f4210c55-0"})`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  min-width: 0;
  max-width: ${({theme:e})=>e.maxWidth.PAGE};
  width: 100%;
  padding: 80px 40px;
`;e.s(["SolutionsContent",0,({bannerData:e,resources:a})=>{let s=i.useMemo(()=>Object.keys(r.SOLUTION_ASSETS).map(e=>({name:r.SOLUTION_ASSETS[e].name,slug:e,updatedAt:""})),[]),c=i.useMemo(()=>a.filter(e=>(0,d.buildInternalResourceUrl)(e.internalResource)&&e.solution.some(e=>e.slug in r.SOLUTION_ASSETS)),[a]),p=i.useMemo(()=>[...c].sort((e,t)=>{let i=new Date((0,l.getResourceUpdatedAt)(e)).getTime(),a=new Date((0,l.getResourceUpdatedAt)(t)).getTime(),n=Number.isNaN(i),o=Number.isNaN(a);return n&&o?0:n?1:o?-1:a-i}),[c]),[u,g]=i.useState("all"),x=i.useMemo(()=>"all"===u?p:p.filter(e=>e.solution.some(e=>e.slug===u)),[u,p]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(j,{}),(0,t.jsx)(n.CustomerBanner,{data:e}),(0,t.jsx)(o.BasicPageRow,{fullWidth:!0,topBorder:!0,children:(0,t.jsxs)(P,{children:[(0,t.jsx)(E,{allResources:c,selectedSolution:u,setSelectedSolution:g,solutionsToShow:s}),(0,t.jsx)(m,{selectedSolution:u}),(0,t.jsx)(l.SolutionsGrid,{filteredResources:x,selectedSolution:u})]})})]})}],224402)},928754,e=>{"use strict";var t=e.i(395967),i=e.i(924837),a=e.i(759609);e.s(["trackFilterApplied",0,function(e,n){let o={filter_type:e,filter_value:n,page_path:(0,a.getCurrentPagePath)()};(0,t.trackRudderstack)(i.TRACKING_EVENTS.FilterApplied,o)}])}]);