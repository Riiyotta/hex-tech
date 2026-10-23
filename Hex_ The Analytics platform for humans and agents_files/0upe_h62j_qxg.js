(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,765563,436016,e=>{"use strict";var i=e.i(843476),t=e.i(657688),o=e.i(650617),a=e.i(665419),n=e.i(997053),d=e.i(785191),l=e.i(258591),r=e.i(637804);let s=(0,n.default)(d.Card).attrs({interactive:!0}).withConfig({displayName:"sharedStyles__GridItemWrapper",componentId:"sc-5a06a102-0"})`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,c=(0,n.default)(l.Heading).attrs({renderAs:"h4"}).withConfig({displayName:"sharedStyles__Title",componentId:"sc-5a06a102-1"})`
  margin-bottom: 6px;
`,p=n.default.div.withConfig({displayName:"sharedStyles__Info",componentId:"sc-5a06a102-2"})`
  display: flex;
  flex: 1 1 auto;
  width: 100%;
  flex-direction: column;
`,m=(0,n.default)(p).withConfig({displayName:"sharedStyles__StyledInfo",componentId:"sc-5a06a102-3"})`
  padding: 15px 5px 5px;
`,x=n.default.div.withConfig({displayName:"sharedStyles__PreviewImage",componentId:"sc-5a06a102-4"})`
  margin-bottom: 0;
  border: none;
  position: relative;
  flex: none;
  overflow: hidden;
`,h=(0,n.default)(x).withConfig({displayName:"sharedStyles__StyledPreviewImage",componentId:"sc-5a06a102-5"})`
  width: 100%;
  height: 220px;
`,g=n.default.div.withConfig({displayName:"sharedStyles__Wrapper",componentId:"sc-5a06a102-6"})`
  padding: 10px;
`,f=(0,n.default)(s).withConfig({displayName:"sharedStyles__StyledGridWrapper",componentId:"sc-5a06a102-7"})`
  height: 100%;
`,u=n.default.div.withConfig({displayName:"sharedStyles__CategoryTag",componentId:"sc-5a06a102-8"})`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
  padding: 6px 10px;
  background: ${({theme:e})=>e.backgroundColor};
  font-family: ${({theme:e})=>e.fontFamily.MONO};
  font-weight: ${({theme:e})=>e.fontWeight.BOLD};
  font-size: ${({theme:e})=>e.fontSize.SMALL};
  letter-spacing: 1px;
`,b=n.default.div.withConfig({displayName:"sharedStyles__Author",componentId:"sc-5a06a102-9"})`
  color: ${({theme:e})=>e.fontColor.MUTED};
  font-size: ${({theme:e})=>e.fontSize.MEDIUM};
  margin-bottom: 10px;
`,y=(0,n.default)(r.SiteLink).withConfig({displayName:"sharedStyles__CardLink",componentId:"sc-5a06a102-10"})`
  text-decoration: none;
  border-bottom: none;
  color: inherit;
  display: block;
  height: 100%;
`;e.s(["Author",0,b,"CardLink",0,y,"CategoryTag",0,u,"StyledGridWrapper",0,f,"StyledInfo",0,m,"StyledPreviewImage",0,h,"Title",0,c,"Wrapper",0,g],436016),e.s(["UseCaseCard",0,function({item:e,search:n}){let d=e.slug??"",l=e.categorySlug??"",r=`${a.INTERNAL_LINKS.Templates}${l}/${d}${n}`;return(0,i.jsx)(g,{children:(0,i.jsx)(y,{href:r,children:(0,i.jsxs)(f,{children:[e.gridImageUrl&&(0,i.jsxs)(h,{children:[(0,i.jsx)(u,{children:"TEMPLATE"}),(0,i.jsx)(t.default,{alt:e.name??"",fill:!0,sizes:"(max-width: 768px) 100vw, 33vw",src:e.gridImageUrl})]}),(0,i.jsxs)(m,{children:[(0,i.jsx)(c,{renderAs:"h4",children:e.name}),e.author&&(0,i.jsx)(b,{children:e.author}),(0,i.jsx)(o.Text,{size:"medium",children:e.seoMetaDescription})]})]})})})}],765563)},32130,e=>{"use strict";var i=e.i(843476),t=e.i(271645),o=e.i(997053),a=e.i(430388),n=e.i(637804),d=e.i(154213);let l=o.default.div.withConfig({displayName:"GridItem__LearnMore",componentId:"sc-e99cb846-0"})`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-end;
  margin-top: auto;
  padding: 0 10px 10px;
  opacity: 0.4;
  color: ${({theme:e})=>e.highlightColor};
  transition: opacity
    ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`};

  span {
    font-family: ${({theme:e})=>e.fontFamily.MONO};
    font-size: ${({theme:e})=>e.fontSize.SMALL};
    font-weight: ${({theme:e})=>e.fontWeight.BOLD};
    text-transform: uppercase;
    line-height: 11px;
    opacity: 0;
    transition: opacity
      ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`};
  }
`,r=o.css`
  display: flex;
  flex: 1 1 0;
  padding: 0;
  position: relative;
  cursor: pointer;
  box-shadow: 0 0 0 1px transparent;
  border: none;

  transition:
    box-shadow
      ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`},
    background-color
      ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`};

  ${({$showBkgGradient:e})=>e&&o.css`
      &::before {
        content: '';
        top: 0;
        left: 0;
        right: 0;
        position: absolute;
        height: 165px;
        background: linear-gradient(
          349deg,
          transparent 30%,
          rgba(157, 123, 138, 0.822275) 92%
        );
      }
    `}

  &::after {
    content: '';
    background: ${({theme:e})=>e.highlightColor};
    opacity: 0.05;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    transition: opacity
      ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`};
  }

  &:hover {
    background: transparent;
    box-shadow: 0 0 0 1px ${({theme:e})=>e.highlightColor30};

    &::after {
      opacity: 0.1;
    }

    ${l} {
      opacity: 1;

      > span {
        opacity: 1;
      }
    }
  }

  &:active {
    box-shadow: 0 0 0 1px ${({theme:e})=>e.highlightColor40};

    &::after {
      opacity: 0.4;
    }
  }
`,s=o.default.div.withConfig({displayName:"GridItem__DivWrapper",componentId:"sc-e99cb846-1"})`
  ${r}
`,c=(0,o.default)(n.SiteLink).withConfig({displayName:"GridItem__LinkWrapper",componentId:"sc-e99cb846-2"})`
  ${r}
`,p=o.default.div.withConfig({displayName:"GridItem__Inner",componentId:"sc-e99cb846-3"})`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
`,m=t.memo(({showBkgGradient:e=!1,showLearnMore:t=!0,to:o,isExternal:n=!1,DANGEROUS_AS_DIV:r=!1,children:m,className:x,trackingLabel:h})=>{let g=(0,i.jsxs)(p,{children:[m,t&&(0,i.jsxs)(l,{children:[(0,i.jsx)("span",{children:"Learn more"}),(0,i.jsx)(a.ArrowRightIcon,{})]})]});return r?(0,i.jsx)(s,{$showBkgGradient:e,className:x,"data-tracking-label":h,onClick:e=>{let i=!1;if(e.target instanceof Element){let t=e.target.closest("a");i=e.currentTarget.contains(t)}i||((0,d.logTracking)({href:o,children:m,label:h}),window.open(o,"_blank","noopener noreferrer"))},children:g}):(0,i.jsx)(c,{$showBkgGradient:e,className:x,href:o,trackingLabel:h,...n?{rel:"noopener noreferrer",target:"_blank"}:{},children:g})});m.displayName="GridItem",e.s(["GridItem",0,m])},200321,e=>{"use strict";var i=e.i(843476),t=e.i(271645),o=e.i(997053);let a=o.keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,n=o.default.div.withConfig({displayName:"MagicButton__Wrapper",componentId:"sc-772ec965-0"})`
  overflow: hidden;
  display: flex;
  flex: none;
  align-items: center;
  width: ${30}px;
  height: ${30}px;
  gap: 3px;
  color: ${({theme:e})=>e.appUI.magic.primaryColor};
  font-size: ${({theme:e})=>e.fontSize.SMALL};
  border-radius: ${({theme:e})=>e.borderRadius};
`,d=o.default.div.withConfig({displayName:"MagicButton__VerticalCircles",componentId:"sc-772ec965-1"})`
  position: absolute;
  top: 3px;
  bottom: 3px;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 18px;
  margin-left: -9px;
`,l=o.default.div.withConfig({displayName:"MagicButton__HorizontalCircles",componentId:"sc-772ec965-2"})`
  position: absolute;
  top: 50%;
  right: 3px;
  left: 3px;
  display: flex;
  align-items: center;
  height: 18px;
  margin-top: -9px;
  opacity: 0.6;
`,r=o.default.div.withConfig({displayName:"MagicButton__Circle",componentId:"sc-772ec965-3"})`
  position: absolute;
  flex: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
`,s=(0,o.default)(r).withConfig({displayName:"MagicButton__TopCircle",componentId:"sc-772ec965-4"})`
  top: 0;
`,c=(0,o.default)(r).withConfig({displayName:"MagicButton__BottomCircle",componentId:"sc-772ec965-5"})`
  bottom: 0;
`,p=(0,o.default)(r).withConfig({displayName:"MagicButton__LeftCircle",componentId:"sc-772ec965-6"})`
  left: 0;
`,m=(0,o.default)(r).withConfig({displayName:"MagicButton__RightCircle",componentId:"sc-772ec965-7"})`
  right: 0;
`,x=o.default.div.withConfig({displayName:"MagicButton__Icon",componentId:"sc-772ec965-8"})`
  display: flex;
  flex: none;
  width: ${30}px;
  height: ${30}px;
  position: relative;

  ${({theme:e,$color:i})=>o.css`
    ${r} {
      box-shadow: inset 0 0 0 1px
        ${"light"===i?e.appUI.magic.primaryColor:e.highlightColor};
    }

    ${d} {
      animation: ${a} 3s linear infinite;
    }

    ${l} {
      animation: ${a} 2s linear infinite;
    }
  `}
`,h=t.memo(function({color:e="light"}){return(0,i.jsx)(n,{children:(0,i.jsxs)(x,{$color:e,children:[(0,i.jsxs)(d,{children:[(0,i.jsx)(s,{}),(0,i.jsx)(c,{})]}),(0,i.jsxs)(l,{children:[(0,i.jsx)(p,{}),(0,i.jsx)(m,{})]})]})})});e.s(["MagicButton",0,h])},621679,e=>{"use strict";var i=e.i(843476),t=e.i(271645),o=e.i(618566),a=e.i(997053),n=e.i(765563);let d=a.default.div.withConfig({displayName:"UseCasePreviewGrid__Grid",componentId:"sc-45dfe6fe-0"})`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  width: 100%;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    grid-template-columns: 1fr;
  }
`;function l({useCases:e}){let t=(0,o.useSearchParams)(),a=t?.toString()?`?${t.toString()}`:"";return(0,i.jsx)(r,{search:a,useCases:e})}function r({useCases:e,search:t}){return(0,i.jsx)(d,{children:e.map(e=>(0,i.jsx)(n.UseCaseCard,{item:e,search:t},e.slug??e.name??""))})}e.s(["UseCasePreviewGrid",0,function({useCases:e}){return e.length?(0,i.jsx)(t.Suspense,{fallback:(0,i.jsx)(r,{search:"",useCases:e}),children:(0,i.jsx)(l,{useCases:e})}):null}])},214279,364299,108266,245883,e=>{"use strict";var i=e.i(843476),t=e.i(271645),o=e.i(997053),a=e.i(430388),n=e.i(193594);let d=o.default.div.withConfig({displayName:"CellStyles__Card",componentId:"sc-9508fabf-0"})`
  background: ${({theme:e})=>e.colors.WHITE};
  box-shadow: 0 4px 12px ${({theme:e})=>(0,n.rgba)(e.colors.BLACK,.1)};
  border-radius: 3px;
  color: ${({theme:e})=>e.colors.BLACK};
  padding: 15px;
  overflow: hidden;
  min-width: 0;
`,l=o.default.div.withConfig({displayName:"CellStyles__OutlinedButton",componentId:"sc-9508fabf-1"})`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1px;
  padding: 0 10px;
  height: 30px;
  gap: 6px;
  background-color: ${({theme:e})=>e.highlightColor20};
  box-shadow: inset 0 0 0 1px ${({theme:e})=>e.highlightColor40};
  cursor: pointer;
  transition: background-color ${({theme:e})=>e.animation.DURATION}
    ${({theme:e})=>e.animation.EASING};

  &:hover {
    background-color: ${({theme:e})=>e.highlightColor40};
  }

  &:active {
    background-color: ${({theme:e})=>e.highlightColor50};
  }

  ${({$small:e})=>e&&o.css`
      height: 24px;
      gap: 6px;
      padding: 0 5px;
    `}

  ${({$minimal:e})=>e&&o.css`
      background-color: transparent;
      box-shadow: none;

      &:hover {
        background-color: ${({theme:e})=>e.highlightColor20};
      }

      &:active {
        background-color: ${({theme:e})=>e.highlightColor40};
      }
    `}

  ${({$active:e,theme:i})=>e&&o.css`
      background-color: ${i.highlightColor20};
    `}

    ${({$disabled:e})=>e&&o.css`
      opacity: 0.4;
      pointer-events: none;
    `}
`,r=o.default.div.withConfig({displayName:"CellStyles__MinimalButton",componentId:"sc-9508fabf-2"})`
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  border-radius: ${({theme:e})=>e.borderRadius};
  padding: 0 10px;
  height: 28px;
  color: ${({theme:e})=>e.appUI.fontColor.DEFAULT};
  line-height: 20px;
  cursor: pointer;
  transition:
    background-color ${({theme:e})=>e.animation.DURATION}
      ${({theme:e})=>e.animation.EASING},
    color ${({theme:e})=>e.animation.DURATION}
      ${({theme:e})=>e.animation.EASING};

  svg {
    color: ${({theme:e})=>e.appUI.fontColor.MUTED};
  }

  &:hover {
    background-color: ${({theme:e})=>(0,n.rgba)(e.colors.BLACK,.05)};
    color: ${({theme:e})=>e.colors.BLACK};
  }

  ${({$selected:e,theme:i})=>e&&o.css`
      background-color: ${(0,n.rgba)(i.colors.BLACK,.1)};
      color: ${i.colors.BLACK};

      &:hover {
        background-color: ${(0,n.rgba)(i.colors.BLACK,.1)};
      }
    `};

  ${({$small:e,theme:i})=>e&&o.css`
      padding: 0 5px;
      height: 20px;
      color: ${i.appUI.fontColor.MUTED};
    `};
`;o.default.div.withConfig({displayName:"CellStyles__SimpleButton",componentId:"sc-9508fabf-3"})`
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: space-between;
  gap: 3px;
  height: 24px;
  padding: 0 7px;
  line-height: initial;
  font-size: ${({theme:e})=>e.fontSize.SMALL};
  color: ${({theme:e})=>e.appUI.fontColor.MUTED};
  box-shadow:
    0 0 0 1px ${({theme:e})=>e.appUI.borderColor.DEFAULT},
    0 1px 2px 1px ${({theme:e})=>e.appUI.borderColor.DEFAULT};
  border-radius: 1px;

  svg {
    color: ${({theme:e})=>e.appUI.fontColor.MUTED};
  }

  ${({$isVar:e,theme:i})=>e&&o.css`
      font-family: ${i.fontFamily.MONO};
      font-size: 11px;
    `}

  ${({$noPadding:e})=>e&&o.css`
      padding-left: 3px;
    `}
`;let s=o.default.div.withConfig({displayName:"CellStyles__Pill",componentId:"sc-9508fabf-4"})`
  border-radius: 2px;
  background: ${({theme:e})=>(0,n.rgba)(e.colors.LIGHT_GREEN,.2)};
  color: ${({$lightBkg:e,theme:i})=>e?i.colors.DARK_GREEN:i.colors.LIGHT_GREEN};
  padding: 2px 4px;
  font-size: ${({theme:e})=>e.fontSize.SMALL};
  line-height: 14px;
  font-family: ${({theme:e})=>e.fontFamily.MONO};
  font-size: 11px;

  ${({$color:e,$lightBkg:i,theme:t})=>"blue"===e&&o.css`
      background: ${(0,n.rgba)(t.colors.LIGHT_BLUE,.2)};
      color: ${i?t.colors.DARK_BLUE:t.colors.LIGHT_BLUE};
    `}
`;e.s(["Card",0,d,"MinimalButton",0,r,"OutlinedButton",0,l,"Pill",0,s],364299);let c=o.default.div.withConfig({displayName:"CellFooter__Wrapper",componentId:"sc-31c9c1b5-0"})`
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    color: ${({theme:e})=>e.highlightColor50};
  }
`,p=t.memo(({outputName:e,outputColor:t="green"})=>{let o=e.split(",");return(0,i.jsxs)(c,{children:[(0,i.jsx)(a.OutputArrowIcon,{}),o.map((e,o)=>(0,i.jsx)(s,{$color:t,$lightBkg:!1,children:e},o))]})});p.displayName="CellFooter",e.s(["CellFooter",0,p],214279);var m=e.i(815659),x=e.i(88653),h=e.i(991709),g=e.i(657688);let f=o.default.div.withConfig({displayName:"Avatar__Wrapper",componentId:"sc-264996e1-0"})`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  height: 30px;
  width: 30px;
  flex: none;
  overflow: hidden;
  border-radius: ${({theme:e})=>e.borderRadius};

  img {
    width: 100%;
    height: 100%;
  }
`,u=t.memo(({slug:e})=>(0,i.jsx)(f,{children:(0,i.jsx)(g.default,{alt:e,height:30,src:`/images/atreides/${e}.jpg`,width:30})}));u.displayName="Avatar";var b=e.i(846932);let y=(0,o.default)(b.motion.div).withConfig({displayName:"Popover__PopoverContainer",componentId:"sc-8c317844-0"})`
  position: relative;
  color: ${({theme:e})=>e.appUI.fontColor.DEFAULT};
  background: ${({theme:e})=>e.appUI.backgroundColor.DEFAULT};
  min-width: 0;

  background: white;
  box-shadow:
    -1px 0px 0px rgba(2, 2, 27, 0.07),
    1px 0px 0px rgba(2, 2, 27, 0.07),
    0px -1px 0px rgba(2, 2, 27, 0.07),
    0px 1px 0px rgba(2, 2, 27, 0.07),
    0px 54px 74px rgba(1, 1, 27, 0.3),
    0px 14px 74px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  &::after {
    content: '';
    display: block;
    position: absolute;

    height: 12px;
    width: 12px;
    background: ${({theme:e})=>e.appUI.backgroundColor.DEFAULT};
    border-radius: 2px;

    ${({$position:e})=>"right-top"===e&&o.css`
        right: 0;
        top: 0;
        transform: translate(40%, 50%) rotate(45deg);
      `}

    ${({$position:e})=>"top-right"===e&&o.css`
        right: 15px;
        top: 0;
        transform: translate(-40%, -50%) rotate(45deg);
      `}

      ${({$position:e})=>"top-left"===e&&o.css`
        left: 15px;
        top: 0;
        transform: translate(-40%, -50%) rotate(45deg);
      `}

      ${({$position:e})=>"right-center"===e&&o.css`
        right: 0;
        top: calc(50% - 12px);
        transform: translate(40%, 50%) rotate(45deg);
      `}

      ${({$position:e})=>"none"===e&&o.css`
        display: none;
      `}
  }
`;e.s(["PopoverContainer",0,y],108266);var C=e.i(102898);let w=(0,o.default)(y).withConfig({displayName:"CommentButton__StyledPopoverContainer",componentId:"sc-969be2d6-0"})`
  max-width: 320px;
  min-width: 250px;
`,$=o.default.div.withConfig({displayName:"CommentButton__Comments",componentId:"sc-969be2d6-1"})`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`,I=o.default.div.withConfig({displayName:"CommentButton__AddComment",componentId:"sc-969be2d6-2"})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  border-top: 1px solid ${({theme:e})=>e.appUI.borderColor.MUTED};
  padding: 5px;
`,_=(0,o.default)(r).withConfig({displayName:"CommentButton__AddCommentButton",componentId:"sc-969be2d6-3"})`
  flex: 1 1 auto;
`,j=o.default.div.withConfig({displayName:"CommentButton__Comment",componentId:"sc-969be2d6-4"})`
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${({$isReply:e})=>e&&o.css`
      padding-left: 20px;
      border-left: 1px solid ${({theme:e})=>e.appUI.borderColor.MUTED};
    `}
`,v=o.default.div.withConfig({displayName:"CommentButton__CommentTop",componentId:"sc-969be2d6-5"})`
  display: flex;
  align-items: center;
`,N=o.default.div.withConfig({displayName:"CommentButton__AvatarWrapper",componentId:"sc-969be2d6-6"})`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({theme:e})=>e.colors.LIGHT_PURPLE};
  border-radius: 50%;
  overflow: hidden;
  margin-right: 8px;

  > div {
    width: 100%;
    height: 100%;
  }
`,L=o.default.div.withConfig({displayName:"CommentButton__Name",componentId:"sc-969be2d6-7"})`
  font-weight: 500;
`,A=o.default.div.withConfig({displayName:"CommentButton__Time",componentId:"sc-969be2d6-8"})`
  font-size: ${({theme:e})=>e.fontSize.SMALL};
  color: ${({theme:e})=>e.appUI.fontColor.MUTED};
  margin-left: auto;
`,S=o.default.p.withConfig({displayName:"CommentButton__CommentBody",componentId:"sc-969be2d6-9"})``,k=o.default.div.withConfig({displayName:"CommentButton__Emojis",componentId:"sc-969be2d6-10"})`
  display: flex;
  gap: 3px;

  > div {
    display: flex;
    align-items: center;
    gap: 3px;
    padding: 0 6px 0 3px;
    border-radius: ${({theme:e})=>e.borderRadius};
    color: ${({theme:e})=>e.appUI.fontColor.MUTED};
    font-size: ${({theme:e})=>e.fontSize.SMALL};
    border: 1px solid ${({theme:e})=>e.appUI.borderColor.MUTED};
  }
`,M=[{image:(0,i.jsx)(u,{slug:"lady"}),name:"Jessica",time:"12 min ago",content:"We should refactor this to use the new rollup table to improve performance.",emojis:[(0,i.jsx)("span",{className:C.default.emojiGlyph,children:"➕"},"plus-sign"),(0,i.jsx)("span",{className:C.default.emojiGlyph,children:"💯"},"hundred")]},{image:(0,i.jsx)(u,{slug:"duncan"}),name:"Duncan",time:"11 min ago",isReply:!0,content:"Great idea. I'll handle this on the next pass.",emojis:[(0,i.jsx)("span",{className:C.default.emojiGlyph,children:"👍"},"thumbs-up")]}],T=t.memo(({showCommentCount:e=!1,disabled:o=!1,popupOverride:n})=>{let[d,r]=(0,t.useState)(!1),s=n??d,c=(0,t.useCallback)(()=>{void 0!==n||o||r(e=>!e)},[o,n]);return(0,i.jsx)(m.Popover,{align:"center",containerStyle:{zIndex:"99999"},content:(0,i.jsx)(U,{arrowPosition:"right-center"}),isOpen:s,padding:10,positions:["left"],onClickOutside:c,children:(0,i.jsxs)(l,{$active:s,$disabled:!s,$minimal:!0,$small:!0,onClick:c,children:[(0,i.jsx)(a.CommentIcon,{})," ",e?M.length:null]})})});T.displayName="CommentButton";let U=t.memo(({arrowPosition:e})=>(0,i.jsx)(x.AnimatePresence,{children:(0,i.jsxs)(w,{$position:e,...h.ANIMATIONS.Popover,children:[(0,i.jsx)($,{children:M.map((e,t)=>(0,i.jsxs)(j,{$isReply:e.isReply,children:[(0,i.jsxs)(v,{children:[(0,i.jsx)(N,{children:e.image}),(0,i.jsx)(L,{children:e.name}),(0,i.jsx)(A,{children:e.time})]}),(0,i.jsx)(S,{children:e.content}),e.emojis&&e.emojis.length>0&&(0,i.jsx)(k,{children:e.emojis.map((e,t)=>(0,i.jsxs)("div",{children:[e," 1"]},t))})]},t))}),(0,i.jsx)(I,{children:(0,i.jsxs)(_,{children:[(0,i.jsx)(a.PlusIcon,{}),"Add comment"]})})]})}));U.displayName="CommentButtonPopover";let E=o.default.div.withConfig({displayName:"CellHeader__CellLabel",componentId:"sc-ff52df98-0"})`
  color: ${({theme:e})=>e.fontColor.DEFAULT};
  font-size: ${({theme:e})=>e.fontSize.SMALL};
  line-height: initial;
  opacity: 0.5;
`,D=o.default.div.withConfig({displayName:"CellHeader__CellActions",componentId:"sc-ff52df98-1"})`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 3px;
`,B=o.default.div.withConfig({displayName:"CellHeader__Header",componentId:"sc-ff52df98-2"})`
  display: flex;
  align-items: center;
  height: 24px;

  ${({$style:e})=>"floating"===e&&o.css`
      position: absolute;
      left: calc(100% + 5px);
      flex-direction: column;

      ${E} {
        display: none;
      }

      ${D} {
        flex-direction: column-reverse;
      }
    `}
`,P=t.memo(({commentPopupOverride:e,label:t,disabled:o=!0,headerStyle:n="top",showCommentCount:d=!1,hideHeaderActions:r=!1})=>(0,i.jsxs)(B,{$style:n,children:[(0,i.jsx)(E,{children:t}),!r&&(0,i.jsxs)(D,{children:[(0,i.jsx)(T,{disabled:o,popupOverride:e,showCommentCount:d}),(0,i.jsx)(l,{$disabled:o,$minimal:!0,$small:!0,children:(0,i.jsx)(a.AppBuilderIcon,{})}),(0,i.jsx)(l,{$active:!0,$disabled:o,$minimal:!0,$small:!0,children:(0,i.jsx)(a.AutoRunIcon,{})})]})]}));P.displayName="CellHeader",e.s(["CellHeader",0,P],245883)},810832,e=>{"use strict";var i=e.i(843476),t=e.i(271645),o=e.i(846932),a=e.i(657688),n=e.i(997053),d=e.i(991709),l=e.i(214279),r=e.i(245883);let s=(0,n.default)(o.motion.div).withConfig({displayName:"ProductIllustration__Wrapper",componentId:"sc-3d29e619-0"})`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: absolute;
  z-index: 2;
`,c=n.default.div.withConfig({displayName:"ProductIllustration__Inner",componentId:"sc-3d29e619-1"})`
  display: flex;
  align-items: flex-start;
  background: white;
  box-shadow:
    -1px 0px 0px rgba(2, 2, 27, 0.07),
    1px 0px 0px rgba(2, 2, 27, 0.07),
    0px -1px 0px rgba(2, 2, 27, 0.07),
    0px 1px 0px rgba(2, 2, 27, 0.07),
    0px 54px 74px rgba(1, 1, 27, 0.3),
    0px 14px 74px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  overflow: hidden;

  img {
    flex: none;
  }
`,p=t.memo(({cellLabel:e,commentPopupOverride:t=!1,className:o,imgHeight:n,imgPath:p,imgWidth:m,outputName:x,outputColor:h,showCommentCount:g=!1,hideHeader:f=!1,hideHeaderActions:u=!1})=>(0,i.jsxs)(s,{...d.ANIMATIONS.Cell,className:o,children:[!f&&(0,i.jsx)(r.CellHeader,{commentPopupOverride:t,disabled:!0,hideHeaderActions:u,label:e,showCommentCount:g}),(0,i.jsx)(c,{children:(0,i.jsx)(a.default,{alt:e,height:n,src:`/images/${p}@2x.png`,width:m})}),x&&(0,i.jsx)(l.CellFooter,{outputColor:h,outputName:x})]}));p.displayName="ProductIllustration",e.s(["ProductIllustration",0,p])},316983,e=>{"use strict";var i=e.i(843476),t=e.i(271645),o=e.i(997053),a=e.i(537193),n=e.i(598043);let d=o.default.a.withConfig({displayName:"AnnouncementPillLink__Root",componentId:"sc-3e6e3317-0"})`
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
`,l=o.default.span.withConfig({displayName:"AnnouncementPillLink__Announcement",componentId:"sc-3e6e3317-1"})`
  display: flex;
  align-items: center;
  gap: 5px;
  padding-right: 10px;
  font-size: ${({theme:e})=>e.fontSize.SMALL};
  color: ${({theme:e})=>e.palette.fg1200};
  font-weight: ${({theme:e})=>e.fontWeight.LIGHT};
  line-height: 1;
`,r=o.default.span.withConfig({displayName:"AnnouncementPillLink__InnerPill",componentId:"sc-3e6e3317-2"})`
  border-radius: 999px;
  background-color: ${({theme:e})=>e.backgroundColor};
  padding: 8px 14px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  -webkit-backdrop-filter: blur(1px);
  backdrop-filter: blur(3px);
  box-shadow: ${({theme:e})=>{let i=e.highlightColor20,t=e.highlightColor40;return`0px -0.5px 0 0.5px ${i},
      0 0.5px 0 0.5px ${t}, 0px 1px 2px rgba(0 0 0 / 0.32), 0px 2px 5px rgba(0 0 0 / 0.18)`}};
`,s=o.default.span.withConfig({displayName:"AnnouncementPillLink__IconPill",componentId:"sc-3e6e3317-3"})`
  border-radius: 999px;

  > svg {
    display: block;
  }
`,c=o.default.span.withConfig({displayName:"AnnouncementPillLink__PillLabel",componentId:"sc-3e6e3317-4"})`
  font-size: ${({theme:e})=>e.fontSize.SMALL};
  font-weight: ${({theme:e})=>e.fontWeight.BOLD};
  line-height: 1;
`;function p(){return(0,i.jsx)("svg",{fill:"none",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{clipRule:"evenodd",d:"M9.11611 8.00001L5.46967 11.6465L6.17677 12.3536L10.5303 8.00001L6.17677 3.64645L5.46967 4.35356L9.11611 8.00001Z",fill:"currentColor",fillRule:"evenodd"})})}let m=t.memo(({subCopy:e,className:t,icon:o,pillLabel:m,to:x})=>(0,i.jsxs)(d,{className:t,href:x,onClick:()=>{(0,a.trackAnnouncementPillClicked)((0,n.reactNodeToPlainTextNormalized)(m),x)},children:[(0,i.jsxs)(r,{children:[(0,i.jsx)(s,{children:o}),(0,i.jsx)(c,{children:m})]}),e&&(0,i.jsxs)(l,{children:["string"==typeof e?(0,i.jsx)("span",{children:e}):e,(0,i.jsx)(p,{})]})]}));m.displayName="AnnouncementPillLink",e.s(["AnnouncementPillLink",0,m])},939808,e=>{"use strict";var i=e.i(843476),t=e.i(271645),o=e.i(997053),a=e.i(430388),n=e.i(785191),d=e.i(650617);let l=t.memo(({logoPath:e,customerName:t,quote:o,authorAvatarPath:n,author:l,authorTitle:h})=>(0,i.jsx)(r,{children:(0,i.jsxs)(s,{children:[e&&(0,i.jsx)(m,{children:"string"==typeof e?(0,i.jsx)("img",{alt:t||"customer logo",loading:"lazy",src:e}):e}),(0,i.jsxs)(c,{children:[(0,i.jsx)(p,{children:(0,i.jsx)(a.QuoteIcon,{})}),(0,i.jsxs)("blockquote",{children:['"',o,"”"]})]}),l&&(0,i.jsxs)(x,{children:[n&&(0,i.jsx)("img",{alt:l,loading:"lazy",src:n}),(0,i.jsxs)(d.Text,{children:[l,(h||t)&&(0,i.jsxs)("span",{children:["  ",h&&`${h} `,t&&(0,i.jsxs)(i.Fragment,{children:["at ",t]})]})]})]})]})}));l.displayName="CustomerQuoteCard";let r=(0,o.default)(n.Card).attrs({effect:"glass"}).withConfig({displayName:"CustomerQuoteCard__Wrapper",componentId:"sc-5e534bf5-0"})`
  && {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    padding: 38px 45px;
    height: 100%;
  }
`,s=o.default.div.withConfig({displayName:"CustomerQuoteCard__Quote",componentId:"sc-5e534bf5-1"})`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  gap: 24px;
  line-height: 1.35;
  opacity: 1;
  width: 100%;
`,c=o.default.div.withConfig({displayName:"CustomerQuoteCard__QuoteTextWrapper",componentId:"sc-5e534bf5-2"})`
  display: flex;
  gap: 20px;

  blockquote {
    display: block;
    ${d.ExtraLargeTextStyles}
    margin-bottom: 0;
    color: ${({theme:e})=>e.fontColor.LOUD};
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    blockquote {
      font-size: 22px;
    }
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    blockquote::before {
      margin-left: -0.8rem;
    }
  }
`,p=o.default.div.withConfig({displayName:"CustomerQuoteCard__QuoteLine",componentId:"sc-5e534bf5-3"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: none;
  gap: 10px;
  padding-top: 8px;

  svg {
    flex: none;
    color: ${({theme:e})=>e.highlightColor};
  }

  &::after {
    content: '';
    display: flex;
    flex: 1 1 auto;
    width: 1px;
    background-color: ${({theme:e})=>e.highlightColor35};
  }
`,m=o.default.div.withConfig({displayName:"CustomerQuoteCard__Logo",componentId:"sc-5e534bf5-4"})`
  display: flex;
  align-items: start;

  img {
    max-height: 45px;
    object-fit: contain;
    filter: ${({theme:e})=>"dark"===e.name?"brightness(0) invert(1)":"invert(100%) sepia(0%) saturate(1%) hue-rotate(339deg) brightness(100%) contrast(101%)"};
  }
`,x=o.default.div.withConfig({displayName:"CustomerQuoteCard__Author",componentId:"sc-5e534bf5-5"})`
  display: flex;
  align-items: center;
  flex-direction: row;
  min-height: 45px;
  margin-top: auto;

  img {
    clip-path: circle();
    filter: none;
    object-fit: cover;
    margin-right: 12px;
    height: 35px;
    width: 35px;
  }

  p {
    font-weight: 400;
    margin-bottom: 0;
  }

  span {
    font-weight: 300;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    p:first-child {
      font-size: 14px;
    }
  }
`;e.s(["CustomerQuoteCard",0,l])},237673,e=>{"use strict";var i=e.i(843476),t=e.i(997053),o=e.i(739876),a=e.i(581444),n=e.i(360571);let d=(0,t.default)(a.LayoutSubgrid).withConfig({displayName:"FullWidthQuote__Section",componentId:"sc-1b6d6d80-0"})`
  border-top: 1px solid ${({theme:e})=>(0,o.gridColorSelector)(e,"major")};
  background-color: ${({theme:e})=>e.palette.bg300};
`,l=t.default.div.withConfig({displayName:"FullWidthQuote__Container",componentId:"sc-1b6d6d80-1"})`
  display: flex;
  position: relative;
`,r=t.default.div.withConfig({displayName:"FullWidthQuote__Accent",componentId:"sc-1b6d6d80-2"})`
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
`,s=t.default.div.withConfig({displayName:"FullWidthQuote__QuoteContainer",componentId:"sc-1b6d6d80-3"})`
  width: 90%;
  max-width: 1270px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 60px;
  padding: ${(0,n.generateFluidPxScale)(30,60)} 0;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    flex-direction: column;
    align-items: flex-start;
  }
`,c=t.default.img.withConfig({displayName:"FullWidthQuote__Logo",componentId:"sc-1b6d6d80-4"})`
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
`,p=t.default.div.withConfig({displayName:"FullWidthQuote__Attribution",componentId:"sc-1b6d6d80-5"})`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-shrink: 0;
`,m=t.default.div.withConfig({displayName:"FullWidthQuote__Divider",componentId:"sc-1b6d6d80-6"})`
  background: ${({theme:e})=>(0,o.gridColorSelector)(e,"major")};
  width: 1px;
  height: 100%;
`,x=t.default.div.withConfig({displayName:"FullWidthQuote__Author",componentId:"sc-1b6d6d80-7"})`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    text-align: center;
  }
`,h=t.default.div.withConfig({displayName:"FullWidthQuote__AuthorName",componentId:"sc-1b6d6d80-8"})`
  color: ${({theme:e})=>e.palette.fgLoud};

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    font-size: ${({theme:e})=>e.fontSize.body.base};
    font-weight: ${({theme:e})=>e.fontWeight.NORMAL};
  }
`,g=t.default.div.withConfig({displayName:"FullWidthQuote__AuthorTitle",componentId:"sc-1b6d6d80-9"})`
  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    font-size: ${({theme:e})=>e.fontSize.body.xs};
  }
`,f=t.default.blockquote.withConfig({displayName:"FullWidthQuote__QuoteText",componentId:"sc-1b6d6d80-10"})`
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
`,u=t.default.div.withConfig({displayName:"FullWidthQuote__MobileWrapper",componentId:"sc-1b6d6d80-11"})`
  display: none;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 40px 0;
  }
`,b=t.default.div.withConfig({displayName:"FullWidthQuote__DesktopWrapper",componentId:"sc-1b6d6d80-12"})`
  display: block;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    display: none;
  }
`,y=t.default.div.withConfig({displayName:"FullWidthQuote__Margin",componentId:"sc-1b6d6d80-13"})`
  position: relative;
  grid-column: 1 / span 1;

  &[data-right] {
    grid-column: -2 / span 1;
  }
`,C=t.default.div.withConfig({displayName:"FullWidthQuote__AccentL",componentId:"sc-1b6d6d80-14"})`
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
`;e.s(["FullWidthQuote",0,function({logoPath:e,quote:t,authorName:o,authorTitle:a,authorCompany:n}){let w=(0,i.jsx)(c,{alt:`${o} quote`,loading:"lazy",src:e}),$=(0,i.jsx)(f,{className:"text-xl",children:t}),I=(0,i.jsxs)(x,{children:[(0,i.jsx)(h,{className:"text-l",children:o}),(0,i.jsxs)(g,{className:"annotation",children:[a,", ",n]})]});return(0,i.jsxs)(d,{children:[(0,i.jsx)(y,{children:(0,i.jsx)(C,{})}),(0,i.jsx)(b,{children:(0,i.jsxs)(l,{children:[(0,i.jsxs)(s,{children:[(0,i.jsxs)(p,{children:[w,I]}),(0,i.jsx)(m,{}),$]}),(0,i.jsx)(r,{}),(0,i.jsx)(r,{"data-right":!0})]})}),(0,i.jsxs)(u,{children:[w,$,(0,i.jsx)(p,{children:I})]}),(0,i.jsx)(y,{"data-right":!0,children:(0,i.jsx)(C,{"data-right":!0})})]})}])},162517,e=>{"use strict";var i=e.i(843476),t=e.i(271645),o=e.i(997053),a=e.i(706736),n=e.i(258591),d=e.i(650617);let l=t.memo(({title:e,description:o,descriptionNode:n,link:l,icon:m,size:x="default",ctaMarkdownExclude:h=!1,ctaOnClick:g,ctaStylez:f,ctaText:u,ctaTrackingLabel:b,smallTitle:y,withGradientHeading:C})=>{let w=(0,t.useMemo)(()=>n||((Array.isArray(o)?o.length>0:null!=o&&""!==o)?Array.isArray(o)?(0,i.jsx)(i.Fragment,{children:o.map((e,t)=>(0,i.jsx)(d.Text,{size:"small"===x?"medium":"large",children:e},t))}):(0,i.jsx)(d.Text,{size:"small"===x?"medium":"large",children:o}):null),[o,n,x]);return(0,i.jsxs)(r,{className:"info-text",children:[y&&(0,i.jsx)(s,{renderAs:"h6",children:y}),m&&(0,i.jsx)(c,{children:m}),(0,i.jsx)(s,{$withGradientHeading:C,renderAs:"small"===x?"h3":"h2",children:e}),w?(0,i.jsx)(p,{children:w}):null,(l||g)&&(0,i.jsx)(a.Button,{"data-markdown-exclude":h?"":void 0,href:l,stylez:f,text:u||"Learn more",trackingLabel:b,onClick:g})]})});l.displayName="InfoText";let r=o.default.div.withConfig({displayName:"InfoText__Wrapper",componentId:"sc-aab01ba-0"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  word-break: break-word;
  gap: 20px;
`,s=(0,o.default)(n.Heading).withConfig({displayName:"InfoText__StyledHeading",componentId:"sc-aab01ba-1"})`
  span {
    display: block;

    @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
      display: inline;
    }
  }

  ${({$withGradientHeading:e,theme:i})=>{if(!e)return"";let t=i.fontColor.LOUD,a=`color-mix(in srgb, ${i.highlightColor} 60%, ${i.fontColor.LOUD} 40%)`;return o.css`
      background-size: cover;
      background-image: ${`linear-gradient(to right, ${t}, ${a})`};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
    `}}
`,c=o.default.div.withConfig({displayName:"InfoText__Icon",componentId:"sc-aab01ba-2"})`
  > div {
    width: 30px;
    height: 30px;

    > svg {
      width: 100%;
      height: 100%;
      color: ${({theme:e})=>e.colors.LIGHT_PURPLE};
    }
  }
`,p=o.default.div.withConfig({displayName:"InfoText__Description",componentId:"sc-aab01ba-3"})`
  p:not(:last-child) {
    margin-bottom: 15px;
  }
`;e.s(["InfoText",0,l])},253928,e=>{"use strict";var i=e.i(843476),t=e.i(271645),o=e.i(846932),a=e.i(997053),n=e.i(991709),d=e.i(939808),l=e.i(657688),r=e.i(637804),s=e.i(430388),c=e.i(258591),p=e.i(650617);let m=a.default.div.withConfig({displayName:"G2SocialProofCard__Wrapper",componentId:"sc-95f60257-0"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 24px;
  flex-grow: 1;
  justify-content: center;
  align-items: left;
  border: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
  height: 100%;
  padding: 38px 35px;
  max-width: 450px;

  p {
    text-align: left;
  }

  img {
    max-width: 280px;
    filter: none;
    padding-bottom: 0.5rem;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    width: 100%;
    max-width: none;
    padding: 30px;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    img {
      width: 90%;
    }
  }
`,x=a.default.div.withConfig({displayName:"G2SocialProofCard__Top",componentId:"sc-95f60257-1"})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  img {
    filter: none;
    max-width: 280px;
    object-fit: contain;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    img {
      width: 90%;
    }
  }
`,h=a.default.div.withConfig({displayName:"G2SocialProofCard__Bottom",componentId:"sc-95f60257-2"})`
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 4px;
  }
`,g=a.default.div.withConfig({displayName:"G2SocialProofCard__CardCopy",componentId:"sc-95f60257-3"})`
  display: flex;

  img {
    max-height: 35px;
    object-fit: contain;
  }
`,f=a.default.span.withConfig({displayName:"G2SocialProofCard__CheckThemOutLinkInline",componentId:"sc-95f60257-4"})`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`,u=t.memo(({trackingLabel:e})=>(0,i.jsxs)(m,{children:[(0,i.jsx)(x,{children:(0,i.jsx)(l.default,{alt:"Three G2 badges received by Hex for High Performer, Best Support, and Momentum Leader.",height:627,src:"/images/g2-awards.svg",style:{height:"auto"},width:838})}),(0,i.jsxs)(h,{children:[(0,i.jsx)(c.Heading,{renderAs:"h3",children:"Users love Hex"}),(0,i.jsx)(g,{children:(0,i.jsxs)(p.Text,{children:["Rated on G2 as an industry leader based on customer reviews."," ",(0,i.jsx)(r.SiteLink,{href:"https://www.g2.com/products/hex-technologies/reviews",trackingLabel:e,children:(0,i.jsxs)(f,{children:["Check them out",(0,i.jsx)(s.ArrowRightIcon,{})]})})]})})]})]}));u.displayName="G2SocialProofCard";let b=t.memo(({includeG2Proof:e=!1,customerQuotes:t,className:o,g2TrackingLabel:a})=>(0,i.jsx)(y,{...n.ANIMATIONS.SimpleFadeIn,className:o,children:(0,i.jsxs)(C,{children:[e?(0,i.jsx)(u,{trackingLabel:a}):null,t.map((e,t)=>(0,i.jsx)(d.CustomerQuoteCard,{...e},t))]})}));b.displayName="SocialTout";let y=(0,a.default)(o.motion.div).withConfig({displayName:"SocialTout__Wrapper",componentId:"sc-b502cc5e-0"})`
  position: relative;
  display: flex;
  flex-grow: 1;
  width: 100%;
  margin: 0 auto;
  padding: 100px 40px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    padding: 60px 40px;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    flex-direction: column;
    padding: 60px 30px;
  }
`,C=a.default.div.withConfig({displayName:"SocialTout__Inner",componentId:"sc-b502cc5e-1"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  margin: 0 auto;
  max-width: ${({theme:e})=>e.maxWidth.PAGE};

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    flex-direction: column;
  }
`;e.s(["SocialTout",0,b],253928)},715791,e=>{"use strict";var i=e.i(843476),t=e.i(271645),o=e.i(846932),a=e.i(997053),n=e.i(706736),d=e.i(991709),l=e.i(665419),r=e.i(430388),s=e.i(273454),c=e.i(650617);let p=(0,a.default)(o.motion.div).withConfig({displayName:"UseCasesTout__Wrapper",componentId:"sc-6f9135a1-0"})`
  display: flex;
  background: ${({theme:e})=>e.gradientFade};
  border-top: 1px solid ${({theme:e})=>e.borderColor.STRONG};
  padding: 100px 40px 120px;
  width: 100%;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    padding: 80px 40px;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    padding: 60px 30px;
  }
`,m=(0,a.default)(o.motion.div).withConfig({displayName:"UseCasesTout__Inner",componentId:"sc-6f9135a1-1"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: ${({theme:e})=>e.maxWidth.PAGE};
  margin: 0 auto;
`,x=a.default.div.withConfig({displayName:"UseCasesTout__Top",componentId:"sc-6f9135a1-2"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  max-width: 860px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    margin-bottom: 30px;
  }
`,h=(0,a.default)(s.GradientHeader).withConfig({displayName:"UseCasesTout__Title",componentId:"sc-6f9135a1-3"})`
  padding: 0 20px 5px;
  && {
    margin-bottom: 0;
  }
`,g=(0,a.default)(c.Text).attrs({size:"extra-large"}).withConfig({displayName:"UseCasesTout__Description",componentId:"sc-6f9135a1-4"})`
  text-align: center;
  max-width: 730px;
  margin-bottom: 0;
`,f=a.default.div.withConfig({displayName:"UseCasesTout__Action",componentId:"sc-6f9135a1-5"})`
  margin-top: 15px;

  a {
    font-size: 16px;

    div:nth-child(2) {
      border-bottom: 1px solid ${({theme:e})=>e.colors.DEFAULT};
      transition: border-bottom 0.2s ease-in-out;
    }

    :hover {
      div:nth-child(2) {
        border-bottom: 1px solid transparent;
      }
    }
  }
`,u="Build anything with data",b="Get started with one of our many templates, from complex ML forecasting to critical business dashboards.",y="Explore all templates",C=t.memo(({title:e=u,description:t=b,cta:o=y,gridSlot:a})=>(0,i.jsx)(p,{...d.ANIMATIONS.SimpleFadeIn,children:(0,i.jsxs)(m,{children:[(0,i.jsxs)(x,{children:[(0,i.jsx)(h,{renderAs:"h2",styleAs:"h1",children:e}),(0,i.jsx)(g,{children:t}),(0,i.jsx)(f,{children:(0,i.jsx)(n.Button,{href:l.INTERNAL_LINKS.Templates,icon:(0,i.jsx)(r.ArrowRightIcon,{}),iconPos:"right",size:"large",stylez:"minimal",text:o})})]}),a]})}));C.displayName="UseCasesTout",e.s(["UseCasesTout",0,C])},613938,e=>{"use strict";var i=e.i(843476),t=e.i(271645),o=e.i(846932),a=e.i(997053),n=e.i(991709),d=e.i(739876),l=e.i(581444);let r=(0,a.default)(l.LayoutSubgrid).withConfig({displayName:"BasicPageRow__Wrapper",componentId:"sc-811624ad-0"})`
  overflow-x: clip;

  ${({$topBorder:e})=>e&&a.css`
      border-top: 1px solid ${({theme:e})=>(0,d.gridColorSelector)(e,"major")};
    `}
`,s=a.css`
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

  ${({$fullWidth:e})=>e&&a.css`
      max-width: none;
      padding: 0;
      grid-column: 1 / -1;
    `}

  ${({$fullWidth:e})=>!e&&a.css`
      @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
        padding: 60px 0;
        grid-column: 2 / -2;
      }

      @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
        padding: 40px 0;
      }
    `}
`,c=(0,a.default)(o.motion.div).withConfig({displayName:"BasicPageRow__Inner",componentId:"sc-811624ad-1"})`
  ${s}
`,p=a.default.div.withConfig({displayName:"BasicPageRow__InnerStatic",componentId:"sc-811624ad-2"})`
  ${s}
`,m=(0,a.default)(l.LayoutGridCondensed).withConfig({displayName:"BasicPageRow__StyledLayoutGridCondensed",componentId:"sc-811624ad-3"})`
  position: relative;
`,x=t.memo(function({animateEntrance:e=!0,children:t,fullWidth:o=!1,topBorder:a=!1,className:l,CartesianGridComponent:s}){return(0,i.jsxs)(r,{$topBorder:a,children:[(0,i.jsx)(d.CheckeredMargin,{}),(0,i.jsxs)(m,{className:l,children:[s&&(0,i.jsx)(s,{fadeDirection:"in"}),e?(0,i.jsx)(c,{...n.ANIMATIONS.SimpleFadeIn,$fullWidth:o,children:t}):(0,i.jsx)(p,{$fullWidth:o,children:t})]}),(0,i.jsx)(d.CheckeredMargin,{"data-right":!0})]})});e.s(["BasicPageRow",0,x])},864220,e=>{"use strict";var i=e.i(846932),t=e.i(997053);let o=t.default.div.withConfig({displayName:"sharedStyles__Section",componentId:"sc-cb18e764-0"})`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`,a=t.default.div.attrs({className:"floating-text"}).withConfig({displayName:"sharedStyles__FloatingText",componentId:"sc-cb18e764-1"})`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    && {
      position: static;
    }
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    && {
      .info-text {
        max-width: 100%;
      }
    }
  }
`,n=t.default.div.withConfig({displayName:"sharedStyles__Illustrations",componentId:"sc-cb18e764-2"})`
  width: 100%;
  position: relative;
`,d=(0,t.default)(i.motion.div).withConfig({displayName:"sharedStyles__CellIllustration",componentId:"sc-cb18e764-3"})`
  display: flex;
  align-items: flex-start;
  background: white;
  box-shadow:
    -1px 0px 0px rgba(2, 2, 27, 0.07),
    1px 0px 0px rgba(2, 2, 27, 0.07),
    0px -1px 0px rgba(2, 2, 27, 0.07),
    0px 1px 0px rgba(2, 2, 27, 0.07),
    0px 54px 74px rgba(1, 1, 27, 0.3),
    0px 14px 74px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  overflow: hidden;
  position: absolute;
  z-index: 2;

  img {
    flex: none;
  }
`;e.s(["CellIllustration",0,d,"FloatingText",0,a,"Illustrations",0,n,"Section",0,o])},998990,e=>{"use strict";e.s(["CUSTOMER_LOGOS_HOSTED",0,{Algolia:"https://cdn.sanity.io/images/e92memrj/production/643fb40019cd60627bf6f354c5bffdfd66017ce9-97x51.svg",Brex:"https://cdn.sanity.io/images/e92memrj/production/797daac5d8ce0c8f853f32db64dddf44234caf15-110x50.svg",Candidly:"https://cdn.sanity.io/images/e92memrj/production/5fb6f6dd0ff002808f2382c81a66cd28410a4ac9-166x50.svg",Chime:"https://cdn.sanity.io/images/e92memrj/production/20bf8a6fe0ca725b28527c135c22f237938f5ef5-94x50.svg",ClickUp:"https://cdn.sanity.io/images/e92memrj/production/8ec37f2330ffd132be12ea66bad243453af0d047-119x50.svg",CustomerIO:"https://cdn.sanity.io/images/e92memrj/production/fc46557c4677964c57351c9affa635d558fe8cd8-170x40.svg",Doximity:"https://cdn.sanity.io/images/e92memrj/production/17b8982db750bfc51b7aa08783c5e1f8d3432d63-125x50.svg",Figma:"https://cdn.sanity.io/images/e92memrj/production/f7df402cfb3dac549c3f877c09425534abc7650b-97x50.svg",Huckberry:"https://cdn.sanity.io/images/e92memrj/production/8194d2de15059f3f69d4fb8dbc03b2f7bfb04af4-134x50.svg",InfiniteLambda:"https://cdn.sanity.io/images/e92memrj/production/638503884c2ca511d9816fc46d5d13f05551bd26-110x50.svg",Inventa:"https://cdn.sanity.io/images/e92memrj/production/2b33cd7f123f50efbd8ea42ea9235382e207633e-132x50.svg",LangChain:"https://cdn.sanity.io/images/e92memrj/production/0b907ba3d40fe1012f1118d105620c7779a49949-135x50.svg",Lovable:"https://cdn.sanity.io/images/e92memrj/production/d063f2a64adcd7869bc2fc81dbc971825be8b951-137x50.svg",MedScout:"https://cdn.sanity.io/images/e92memrj/production/ab190c6c708ad1b738c3dd93e3c9d64718788935-168x50.svg",Mercor:"https://cdn.sanity.io/images/e92memrj/production/92b9cd2232a417db021ffe38f96d45a896e85cba-131x50.svg",NeoFinancial:"https://cdn.sanity.io/images/e92memrj/production/ba0c09ff2b2ba796246ce69e4e971751bccaae37-76x50.svg",Notion:"https://cdn.sanity.io/images/e92memrj/production/6f211c674b14be69b85497264b1d654b138dce01-39x50.svg",PandaDoc:"https://cdn.sanity.io/images/e92memrj/production/728e1e88c0a31f218d18971d3e9da2de81bad906-120x50.svg",ProductHunt:"https://cdn.sanity.io/images/e92memrj/production/0334d3583cd66c0361cd0c3b1bd28d92307cf01a-126x50.svg",Ramp:"https://cdn.sanity.io/images/e92memrj/production/892932e7f3dc3c66d3ae4a16e8bc51e37b7f59f4-120x50.svg",StubHub:"https://cdn.sanity.io/images/e92memrj/production/84cee8330df6df867d752ef0336d987b73845add-81x50.svg",WeightsAndBiases:"https://cdn.sanity.io/images/e92memrj/production/1eaf4b79b17b9f39d479a6cca9f8b60e06105d44-169x50.svg",Zoe:"https://cdn.sanity.io/images/e92memrj/production/ac4cbae3f4b1d599f5d51d290bd183be0b16253a-114x50.svg"}])}]);