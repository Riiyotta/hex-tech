(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,746010,e=>{"use strict";var t=e.i(843476),n=e.i(271645),a=e.i(846932),i=e.i(870207),o=e.i(997053),r=e.i(328542),s=e.i(258591),l=e.i(34234),d=e.i(613938),c=e.i(991709);e.i(726497);var p=e.i(126215);e.i(6902),e.i(713614),e.i(684535),e.i(597353),e.i(435297),e.i(174208),e.i(910017),e.i(500925),e.i(808308),e.i(850856),e.i(271971);var g=e.i(706736),u=e.i(665419),m=e.i(102898);let h=o.default.div.withConfig({displayName:"BlogKicker__Wrapper",componentId:"sc-8192471d-0"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: ${({theme:e})=>e.maxWidth.BLOG};
  margin: 0 auto;
  width: 100%;
  padding: 25px;
  background: ${({theme:e})=>e.highlightColor05};
  border: 1px solid ${({theme:e})=>e.highlightColor25};
  color: ${({theme:e})=>e.fontColor.DEFAULT};
  font-size: ${({theme:e})=>e.fontSize.MEDIUM};
  line-height: ${({theme:e})=>e.lineHeight.body.base};

  @media (max-width: ${({theme:e})=>e.mediaQuery.MOBILE}) {
    padding: 25px;
  }
`,x=o.default.div.withConfig({displayName:"BlogKicker__Text",componentId:"sc-8192471d-1"})`
  margin-bottom: 25px;

  a {
    color: ${({theme:e})=>e.colors.WHITE};
  }
`,f=(0,o.default)(g.Button).withConfig({displayName:"BlogKicker__KickerButton",componentId:"sc-8192471d-2"})`
  box-sizing: border-box;
`,b=o.default.div.withConfig({displayName:"BlogKicker__Buttons",componentId:"sc-8192471d-3"})`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MOBILE}) {
    flex-direction: column;
    gap: 15px;
    width: 100%;

    ${f} {
      width: 100%;
    }
  }
`,y=[{link:`${u.SIGNUP_LINK}?source=blog-kicker`,text:"Get started for free",emoji:"✨"},{link:"/careers/",text:"Open roles",emoji:"👩‍💻"}],w=n.memo(function({buttons:e=y,text:a,btnstring:i}){let o=(0,n.useMemo)(()=>i?i.split("|").map(e=>{let t=e.split(",");return{link:t[0].trim(),text:t[1].trim()}}):e,[e,i]);return(0,t.jsxs)(h,{children:[(0,t.jsx)(x,{dangerouslySetInnerHTML:{__html:a||"This is something we think a lot about at Hex, where we're creating a platform that makes it easy to build and share interactive data products which can help teams be more impactful.<br /><br />If this is is interesting, click below to get started, or to check out opportunities to join our team."}}),(0,t.jsx)(b,{children:o.map((e,n)=>{let a=e.emoji?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:m.default.emojiGlyph,children:e.emoji})," ",e.text]}):e.text;return(0,t.jsx)(f,{href:e.link,text:a},n)})})]})}),E=o.default.aside.withConfig({displayName:"BlogPostAside__Wrapper",componentId:"sc-3c1aae65-0"})`
  background: ${({theme:e})=>e.backgroundColor};
  display: block;
  width: 20vw;
  max-width: 320px;
  align-self: flex-start;
  position: sticky;
  top: 100px;

  nav {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  ul {
    margin-bottom: 30px;
    box-shadow: inset 1px 0 1px ${({theme:e})=>e.borderColor.MUTED};

    li {
      list-style: none;
      margin: 0;
      transition: background-color
        ${({theme:e})=>`${e.animation.DURATION} ${e.animation.EASING}`};

      a {
        display: block;
        color: ${({theme:e})=>e.fontColor.DEFAULT};
        text-decoration: none;
        border: none;
        padding: 4px 12px;
        width: 100%;

        &:hover,
        &:active {
          background: none;
        }
      }

      &:hover {
        background-color: ${({theme:e})=>e.highlightColor05};
      }

      &.active {
        background-color: ${({theme:e})=>e.highlightColor10};
      }
    }
  }

  @media (max-width: 1410px) {
    left: 1%;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    display: none;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    display: none;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    max-width: 15vw;
  }
`,M=o.default.div.withConfig({displayName:"BlogPostAside__Inner",componentId:"sc-3c1aae65-1"})`
  background: ${({theme:e})=>e.backgroundColor};
  border: 1px solid ${({theme:e})=>e.borderColor.MUTED};
  padding: 30px;
`,I=n.memo(function({headings:e}){let[a,i]=(0,n.useState)("");return(0,n.useEffect)(()=>{let e=()=>{i(window.location.hash.replace("#",""))};return window.addEventListener("hashchange",e),e(),()=>window.removeEventListener("hashchange",e)},[]),(0,t.jsx)(E,{children:(0,t.jsxs)(M,{children:[(0,t.jsxs)("nav",{children:[(0,t.jsx)(s.Heading,{renderAs:"h5",children:"In this article"}),(0,t.jsx)("ul",{children:e.map(e=>(0,t.jsx)("li",{className:a===e.id?"active":"",children:(0,t.jsx)("a",{className:a===e.id?"active":"",href:`#${e.id}`,children:e.text})},e.id))})]}),(0,t.jsx)(g.Button,{href:`${u.SIGNUP_LINK}?source=blog-toc`,size:"large",stylez:"loud",text:"Get started for free"})]})})});var A=e.i(650617),S=e.i(637804),k=e.i(657688),_=e.i(357044),j=e.i(618566),F=e.i(850034),N=e.i(781016);let v=o.default.div.withConfig({displayName:"BlogPostHeroMediaVideo__Video",componentId:"sc-f0ec0c27-0"})`
  ${({theme:e})=>e.card?.DEFAULT};
  position: relative;
  aspect-ratio: 16 / 9;
  width: 100%;
`,T=(0,o.default)(_.MediaEmbed).withConfig({displayName:"BlogPostHeroMediaVideo__StyledLoomVideo",componentId:"sc-f0ec0c27-1"})`
  margin-bottom: 0;
`;function $({url:e}){let a=(0,j.useSearchParams)().get("openVideo"),[i,o]=(0,n.useState)(!1);(0,n.useEffect)(()=>{o("true"===a)},[a]);let r=(0,n.useCallback)(()=>{o(!1)},[]);return(0,t.jsx)(N.FullScreenVideo,{embed:(0,t.jsx)(F.VideoIframe,{allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0,height:"720",referrerPolicy:"strict-origin-when-cross-origin",src:e,style:{border:0},title:"blog hero video",width:"1280"}),isOpen:i,path:"",onClose:r})}let D=n.memo(function({url:e}){return(0,_.isAllowedMediaEmbedUrl)(e)?(0,t.jsxs)(v,{children:[(0,t.jsx)(n.Suspense,{fallback:null,children:(0,t.jsx)($,{url:e})}),(0,t.jsx)(T,{src:e})]}):null}),C=o.default.div.withConfig({displayName:"BlogPostHeroMedia__Wrapper",componentId:"sc-f2706eb0-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: calc(${({theme:e})=>e.maxWidth.BLOG} + 140px);
  margin: 50px auto -250px;
  padding: 0 20px;

  [data-video-wrapper='true'] {
    aspect-ratio: 16 / 9;
  }

  ${({$isInterview:e})=>e&&o.css`
      width: 440px;
      position: relative;
      max-width: none;
      margin: 0;
      flex: none;
    `}

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    margin: 30px auto -100px;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MOBILE}) {
    width: 100%;
    padding: 0 20px;
  }
`,L=o.default.div.withConfig({displayName:"BlogPostHeroMedia__ImageBox",componentId:"sc-f2706eb0-1"})`
  ${({theme:e})=>e.card?.DEFAULT};
  position: relative;
  width: 100%;
  height: 510px;
  overflow: hidden;

  ${({$showPhotoOverlay:e,theme:t})=>e&&o.css`
      ${t.photoOverlay};
    `}

  ${({$isInterview:e})=>e&&o.css`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 390px;

      .corners .right::before {
        border-color: ${({theme:e})=>e.borderColor.MUTED};
      }
    `}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    height: auto;

    img {
      height: auto;
      object-fit: initial;
    }
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MOBILE}) {
    height: auto;
    width: 100%;
    position: relative;
  }
`,P=o.default.div.withConfig({displayName:"BlogPostHeroMedia__Credit",componentId:"sc-f2706eb0-2"})`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.9);
  height: 30px;
  padding: 0 10px;
  color: white;
  font-size: ${({theme:e})=>e.fontSize.SMALL};
  z-index: 1;
`,O=n.memo(function({post:e,className:a}){let i=!!e.heroLoomVideo&&(0,_.isAllowedMediaEmbedUrl)(e.heroLoomVideo.url),o=i||e.heroImage,r=(0,n.useMemo)(()=>{if(i&&e.heroLoomVideo)return(0,t.jsx)(D,{url:e.heroLoomVideo.url});if(e.heroImage){let{url:n,width:a,height:i,lqip:o,title:r}=e.heroImage;return(0,t.jsxs)(L,{$isInterview:e.interview,$showPhotoOverlay:e.showPhotoOverlay,children:[(0,t.jsxs)("span",{className:"corners",children:[(0,t.jsx)("span",{className:"left"}),(0,t.jsx)("span",{className:"right"})]}),!e.interview&&e.heroImageCredit&&(0,t.jsx)(P,{children:e.heroImageCredit}),(0,t.jsx)(k.default,{alt:r,blurDataURL:o??void 0,height:i||588,loading:"eager",placeholder:o?"blur":"empty",sizes:"(min-width: 1010px) 1125px, 100vw",src:n,width:a||840})]})}},[e.heroImage,e.heroImageCredit,e.heroLoomVideo,e.interview,e.showPhotoOverlay,i]);return o?(0,t.jsx)(C,{$isInterview:e.interview,className:a,"data-video-wrapper":i,children:r}):null});var R=e.i(814326);let B=o.default.div.withConfig({displayName:"BlogPostHeader__Wrapper",componentId:"sc-ccb71b42-0"})`
  display: flex;
  flex-direction: column;
  margin: 0 auto 50px;
  width: 100%;
  max-width: calc(${({theme:e})=>e.maxWidth.BLOG} + 270px);

  ${({$isInterview:e})=>e&&o.css`
      flex-direction: row;
      margin-bottom: 26px;
    `}

  @media (max-width: ${({theme:e})=>e.mediaQuery.MOBILE}) {
    flex-direction: column;
    margin-bottom: -50px;
  }
`,z=o.default.div.withConfig({displayName:"BlogPostHeader__Info",componentId:"sc-ccb71b42-1"})`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 770px;
  margin: 0 auto;
  width: 100%;
  padding: 0 40px;

  ${({$isInterview:e})=>e&&o.css`
      margin-right: 50px;
    `}

  @media (max-width: ${({theme:e})=>e.mediaQuery.MOBILE}) {
    margin: 0 0 30px;

    h1 {
      margin-bottom: 20px;
    }
  }
`,H=(0,o.default)(A.Text).attrs({size:"extra-large"}).withConfig({displayName:"BlogPostHeader__Synopsis",componentId:"sc-ccb71b42-2"})`
  margin-bottom: 30px;
  border-bottom: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
  padding-bottom: 25px;
`,U=o.default.div.withConfig({displayName:"BlogPostHeader__CategoryTag",componentId:"sc-ccb71b42-3"})`
  display: flex;
  align-items: center;
  border: 1px solid ${({theme:e})=>e.borderColor.MUTED};
  padding: 0 6px;
  height: 26px;
`,G=o.default.div.withConfig({displayName:"BlogPostHeader__FriendsOfCategory",componentId:"sc-ccb71b42-4"})`
  border: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
  font-size: 24px;
  font-weight: 600;
  padding: 11px 12px 12px;
  margin-bottom: 26px;
`,Q=o.default.div.withConfig({displayName:"BlogPostHeader__MetaData",componentId:"sc-ccb71b42-5"})`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  font-size: ${({theme:e})=>e.fontSize.MEDIUM};

  > div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;
  }
`,Y=n.memo(function({post:e,categories:n}){return(0,t.jsxs)(B,{$isInterview:e.interview,children:[(0,t.jsxs)(z,{$isInterview:e.interview,children:[(0,t.jsx)(Z,{renderAs:"h6",children:(0,t.jsx)(S.SiteLink,{href:u.INTERNAL_LINKS.Blog,children:"Blog"})}),e.interview&&(0,t.jsx)(G,{children:"Friends of data"}),(0,t.jsx)(K,{renderAs:"h1",children:e.title}),e.synopsis&&(0,t.jsx)(H,{children:e.synopsis}),(0,t.jsxs)(Q,{children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{children:e.author}),!e.interview&&n.map(e=>(0,t.jsx)(U,{children:e},e)),(0,t.jsx)("div",{children:(0,r.formatPostDate)(e.date)})]}),(0,t.jsx)(R.SocialShare,{title:e.title})]})]}),(0,t.jsx)(O,{post:e})]})});var Z=(0,o.default)(s.Heading).withConfig({displayName:"BlogPostHeader___StyledHeading",componentId:"sc-ccb71b42-6"})`
              margin-bottom: 26px;
            `,K=(0,o.default)(s.Heading).withConfig({displayName:"BlogPostHeader___StyledHeading2",componentId:"sc-ccb71b42-7"})`
              margin-bottom: 10px;
            `,V=e.i(368394);let W=o.default.div.withConfig({displayName:"FODHeader__Wrapper",componentId:"sc-8074f840-0"})`
  padding-bottom: 50px;

  p {
    font-weight: 400;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    padding-bottom: 0;
  }
`,X=o.default.hgroup.withConfig({displayName:"FODHeader__Hgroup",componentId:"sc-8074f840-1"})`
  width: min(722px, calc(100% - 40px));
  margin: 0 auto;
`,q=o.default.hr.withConfig({displayName:"FODHeader__Separator",componentId:"sc-8074f840-2"})`
  margin: 0 auto;
  background-color: ${({theme:e})=>e.borderColor.DEFAULT};
`,J=o.default.div.withConfig({displayName:"FODHeader__Socials",componentId:"sc-8074f840-3"})`
  display: flex;
  justify-content: space-between;
  padding: 1em 0 2.75em;
`,ee=(0,o.default)(s.Heading).withConfig({displayName:"FODHeader__H1",componentId:"sc-8074f840-4"})`
  text-wrap: balance;
  margin: 30px 0 25px 0;
  text-align: center;
`,et=o.default.div.withConfig({displayName:"FODHeader__Masthead",componentId:"sc-8074f840-5"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  text-align: center;
  padding-bottom: 1.75em;
`,en=(0,o.default)(O).withConfig({displayName:"FODHeader__Media",componentId:"sc-8074f840-6"})`
  padding: 0;
  margin-top: 0;
  border: 1px solid ${({theme:e})=>e.borderColor.MUTED};
  aspect-ratio: 1125 / 590;
  max-width: 1125px;
  width: max(780px, calc(100% - 160px));
  height: auto;

  & > div {
    height: 100%;
  }

  @media (max-width: 860px) {
    width: calc(100% - 40px);
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    margin-bottom: -50px;
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MOBILE}) {
    margin-bottom: -140px;
  }
`,ea=o.default.img.withConfig({displayName:"FODHeader__Wordmark",componentId:"sc-8074f840-7"})`
  aspect-ratio: 5 / 1;
  width: 220px;
`,ei=(0,o.default)(R.SocialShare).withConfig({displayName:"FODHeader__Share",componentId:"sc-8074f840-8"})`
  span {
    font-weight: 400;
    text-transform: capitalize;
  }
`;function eo({post:e}){return(0,t.jsxs)(W,{children:[(0,t.jsxs)(X,{children:[(0,t.jsxs)(et,{children:[(0,t.jsx)(ea,{alt:"Friends of Data",src:"/images/friends_of_data.png",width:220}),(0,t.jsx)(A.Text,{children:(0,r.formatPostDate)(e.date)})]}),(0,t.jsx)(q,{}),(0,t.jsx)(ee,{renderAs:"h1",children:e.title}),(0,t.jsx)(q,{}),(0,t.jsxs)(J,{children:[(0,t.jsx)("div",{children:e.friendsOfDataProduct||""}),(0,t.jsx)(ei,{title:e.title})]})]}),(0,t.jsx)(en,{post:e})]})}let er=[300,400,500,600,700].map(e=>`
      @font-face {
        font-family: 'PP Editorial Old';
        src:
          url('/fonts/editorial/PPEditorialNew-Regular.woff2') format('woff2'),
          url('/fonts/editorial/PPEditorialNew-Regular.woff') format('woff');
        font-style: normal;
        font-weight: ${e};
        font-display: swap;
      }
    `).join("\n");function es(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("link",{as:"font",crossOrigin:"anonymous",href:"/fonts/editorial/PPEditorialNew-Regular.woff2",rel:"preload",type:"font/woff2"}),(0,t.jsx)("style",{dangerouslySetInnerHTML:{__html:er},type:"text/css"})]})}var el=e.i(14782);i.default.manual=!0;let ed=(0,o.default)(a.motion.div).withConfig({displayName:"BlogPostContent__Wrapper",componentId:"sc-bb37d92f-0"})`
  display: flex;
  flex-direction: column;
  max-width: none;
  padding: 200px 0 0 0;
  width: 100%;
`,ec=o.default.div.withConfig({displayName:"BlogPostContent__Content",componentId:"sc-bb37d92f-1"})`
  ${({theme:e})=>e.card?.DEFAULT};
  padding: 40px;
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 45px;

  ${({$isFriendsOfData:e})=>e&&o.css`
      box-shadow: none;
      border-top: 1px solid ${({theme:e})=>e.borderColor.DEFAULT};
      border-bottom: none;
    `}

  ${({$hasHeroMedia:e})=>e&&o.css`
      padding-top: 250px;

      @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
        padding-top: 90px;
      }

      @media (max-width: ${({theme:e})=>e.mediaQuery.MOBILE}) {
        padding-top: 180px;
      }
    `}
`,ep=(0,o.default)(l.RunningText).withConfig({displayName:"BlogPostContent__ThisText",componentId:"sc-bb37d92f-2"})`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 0 auto;
  max-width: 740px;
  width: 100%;

  ${e=>e.$isFriendsOfData&&o.css`
      --social-text-transform: capitalize;
      --social-font-weight: 400;

      h2 {
        ${s.HeadingTwoStyles}
      }

      h1,
      h2,
      h3 {
        font-family: ${({theme:e})=>e.fontFamily.DISPLAY};
        letter-spacing: 0;
      }

      h3 {
        font-size: 20px;
        line-height: 1.4;
      }

      blockquote {
        margin: 0;
        padding: 0.4em 0 3em;
        border: 0;
        max-width: 456px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1em;

        &::before {
          content: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyNSAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuMiAxMC4wMTEyQzguNjQgMTAuMDExMiA5LjY4IDEwLjU3MTIgMTAuNjQgMTEuODUxMkMxMS4xMiAxMi44MTEyIDExLjY4IDEyLjczMTIgMTEuOTIgMTEuNjkxMkMxMy4yOCA2LjgxMTIzIDE1Ljg0IDIuMTcxMjQgMjAuNTYgMC4xNzEyMzNDMjIuNCAtMC40Njg3NjQgMjMuNDQgMC44MTEyMzQgMjMuNDQgMS45MzEyM0MyMy40NCAyLjQ5MTI0IDIzLjIgMi44OTEyNCAyMi42NCAzLjIxMTI0QzE4LjQgNC45NzEyMyAxMy45MiA3LjY5MTI0IDEzLjkyIDEwLjgxMTJDMTMuOTIgMTEuNzcxMiAxNC4zMiAxMi40MTEyIDE0Ljg4IDEyLjQxMTJDMTUuNzYgMTIuNDExMiAxNi4yNCAxMC4wMTEyIDE5LjQ0IDEwLjAxMTJDMjIuNDggMTAuMDExMiAyNC4wOCAxMi4zMzEyIDI0LjA4IDE0LjczMTJDMjQuMDggMTcuNTMxMiAyMi4wOCAxOS43NzEyIDE4LjY0IDE5Ljc3MTJDMTYuNDggMTkuNzcxMiAxNC42NCAxOC42NTEyIDEyLjg4IDE2LjE3MTJDMTIuNCAxNS4yOTEyIDExLjc2IDE1LjI5MTIgMTEuMzYgMTYuMjUxMkMxMC4yNCAxOC41NzEyIDguNjQgMTkuNzcxMiA2LjQgMTkuNzcxMkMyLjg4IDE5Ljc3MTIgMCAxNi45NzEyIDAgMTIuNjUxMkMwIDguMDkxMjQgMi44OCAyLjQ5MTI0IDguMzIgMC4xNzEyMzNDMTAuMTYgLTAuNDY4NzY0IDExLjIgMC44OTEyMzMgMTEuMiAxLjkzMTIzQzExLjIgMi41NzEyNCAxMC45NiAyLjg5MTI0IDEwLjMyIDMuMjExMjRDNi4xNiA1LjA1MTI0IDEuMzYgNy42OTEyNCAxLjM2IDEwLjgxMTJDMS4zNiAxMS43NzEyIDEuNzYgMTIuNDExMiAyLjQgMTIuNDExMkMzLjI4IDEyLjQxMTIgNC4wOCAxMC4wMTEyIDcuMiAxMC4wMTEyWiIgZmlsbD0iIzVGNTA5RCIvPgo8L3N2Zz4K');
        }

        p {
          ${s.HeadingFourStyles}
          font-family: ${({theme:e})=>e.fontFamily.DISPLAY};
          letter-spacing: 0;
          text-align: center;
          line-height: 1.7;
        }
      }

      p {
        color: var(--color-obsidian, #11171f);
      }
    `}

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    margin: 0 !important;
  }
`,eg=o.default.div.withConfig({displayName:"BlogPostContent__SeeMore",componentId:"sc-bb37d92f-3"})`
  width: 100%;
  padding: 80px 40px;
  background: ${({theme:e})=>e.gradientFade};
  position: relative;
  overflow: hidden;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    padding: 60px 20px;
  }
`,eu=n.memo(function({post:e}){let a=e.body,s=(0,n.useMemo)(()=>e.categories?e.categories.map(e=>e.name):[],[e.categories]),l=(0,n.useMemo)(()=>{let t=[],n=e.blogKicker;return n&&(n.buttonUrl1&&n.buttonLabel1&&t.push({link:n.buttonUrl1,text:n.buttonLabel1}),n.buttonUrl2&&n.buttonLabel2&&t.push({link:n.buttonUrl2,text:n.buttonLabel2})),t.length>0?t:void 0},[e.blogKicker]),g=(0,n.useMemo)(()=>Array.isArray(a)?a.filter(e=>"block"===e._type&&"h2"===e.style).map(e=>{let t=(e.children||[]).map(e=>"text"in e&&e.text||"").join("");return{id:(0,r.textToId)(t),text:t}}):[],[a]),u=g.length>1&&!e.disableSideNav,m=(void 0!==e.heroLoomVideo||void 0!==e.heroImage)&&!e.interview,h=e.friendsOfData;return(0,n.useEffect)(()=>{i.default.highlightAll()},[a]),(0,n.useEffect)(()=>(document.documentElement.classList.add("smooth-scroll"),()=>{document.documentElement.classList.remove("smooth-scroll")}),[]),(0,t.jsx)(d.BasicPageRow,{fullWidth:!0,children:(0,t.jsxs)(ed,{...c.ANIMATIONS.SimpleFadeIn,children:[h?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(es,{}),(0,t.jsx)(eo,{post:e})]}):(0,t.jsx)(Y,{categories:s,post:e}),(0,t.jsx)(o.ThemeProvider,{theme:p.LIGHT_THEME,children:(0,t.jsxs)(ec,{$hasHeroMedia:m,$isFriendsOfData:h,"data-theme":"light",children:[u&&(0,t.jsx)(I,{headings:g}),(0,t.jsxs)(ep,{$isFriendsOfData:h,style:{marginRight:u?"20%":"auto",marginLeft:u?"0":"auto"},children:[(0,t.jsx)(V.BlogRichText,{body:e.body}),(0,t.jsx)(R.SocialShare,{title:e.title}),e.blogKicker?(0,t.jsx)(w,{buttons:l,text:e.blogKicker.body.body}):(0,t.jsx)(w,{})]})]})}),e.recommendations&&e.recommendations.length>0&&(0,t.jsx)(eg,{children:(0,t.jsx)(el.Recommendations,{category:s,isblog:!0,items:e.recommendations,showTron:!1})})]})})});e.s(["BlogPostContent",0,eu],746010)},6902,(e,t,n)=>{!function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},a={bash:n,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:a},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:a},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:a.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:a.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=e.languages.bash;for(var i=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],o=a.variable[1].inside,r=0;r<i.length;r++)o[i[r]]=e.languages.bash[i[r]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash}(Prism)},713614,(e,t,n)=>{var a,i,o;i=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/,(a=Prism).languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+i.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+i.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+i.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+i.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:i,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},a.languages.css.atrule.inside.rest=a.languages.css,(o=a.languages.markup)&&(o.tag.addInlined("style","css"),o.tag.addAttribute("style","css"))},684535,(e,t,n)=>{Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source)+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),Prism.languages.js=Prism.languages.javascript},597353,(e,t,n)=>{Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},Prism.languages.webmanifest=Prism.languages.json},435297,(e,t,n)=>{!function(e){var t=e.util.clone(e.languages.javascript),n=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,a=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,i=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function o(e,t){return RegExp(e=e.replace(/<S>/g,function(){return n}).replace(/<BRACES>/g,function(){return a}).replace(/<SPREAD>/g,function(){return i}),t)}i=o(i).source,e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=o(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=t.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:o(/<SPREAD>/.source),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:o(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var r=function(e){return e?"string"==typeof e?e:"string"==typeof e.content?e.content:e.content.map(r).join(""):""},s=function(t){for(var n=[],a=0;a<t.length;a++){var i=t[a],o=!1;if("string"!=typeof i&&("tag"===i.type&&i.content[0]&&"tag"===i.content[0].type?"</"===i.content[0].content[0].content?n.length>0&&n[n.length-1].tagName===r(i.content[0].content[1])&&n.pop():"/>"===i.content[i.content.length-1].content||n.push({tagName:r(i.content[0].content[1]),openedBraces:0}):n.length>0&&"punctuation"===i.type&&"{"===i.content?n[n.length-1].openedBraces++:n.length>0&&n[n.length-1].openedBraces>0&&"punctuation"===i.type&&"}"===i.content?n[n.length-1].openedBraces--:o=!0),(o||"string"==typeof i)&&n.length>0&&0===n[n.length-1].openedBraces){var l=r(i);a<t.length-1&&("string"==typeof t[a+1]||"plain-text"===t[a+1].type)&&(l+=r(t[a+1]),t.splice(a+1,1)),a>0&&("string"==typeof t[a-1]||"plain-text"===t[a-1].type)&&(l=r(t[a-1])+l,t.splice(a-1,1),a--),t[a]=new e.Token("plain-text",l,null,l)}i.content&&"string"!=typeof i.content&&s(i.content)}};e.hooks.add("after-tokenize",function(e){("jsx"===e.language||"tsx"===e.language)&&s(e.tokens)})}(Prism)},174208,(e,t,n)=>{!function(e){var t=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function n(e){return e=e.replace(/<inner>/g,function(){return t}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+e+")")}var a=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,i=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return a}),o=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;e.languages.markdown=e.languages.extend("markup",{}),e.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:e.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+i+o+"(?:"+i+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+i+o+")(?:"+i+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(a),inside:e.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+i+")"+o+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+i+"$"),inside:{"table-header":{pattern:RegExp(a),alias:"important",inside:e.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:n(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:n(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:n(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:n(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(t){["url","bold","italic","strike","code-snippet"].forEach(function(n){t!==n&&(e.languages.markdown[t].inside.content.inside[n]=e.languages.markdown[n])})}),e.hooks.add("after-tokenize",function(e){("markdown"===e.language||"md"===e.language)&&function e(t){if(t&&"string"!=typeof t)for(var n=0,a=t.length;n<a;n++){var i=t[n];if("code"!==i.type){e(i.content);continue}var o=i.content[1],r=i.content[3];if(o&&r&&"code-language"===o.type&&"code-block"===r.type&&"string"==typeof o.content){var s=o.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp"),l="language-"+(s=(/[a-z][\w-]*/i.exec(s)||[""])[0].toLowerCase());r.alias?"string"==typeof r.alias?r.alias=[r.alias,l]:r.alias.push(l):r.alias=[l]}}}(e.tokens)}),e.hooks.add("wrap",function(t){if("code-block"===t.type){for(var n,a="",i=0,o=t.classes.length;i<o;i++){var d=t.classes[i],c=/language-(.+)/.exec(d);if(c){a=c[1];break}}var p=e.languages[a];if(p){t.content=e.highlight((n=t.content.replace(r,"")).replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(e,t){if("#"===(t=t.toLowerCase())[0])return l("x"===t[1]?parseInt(t.slice(2),16):Number(t.slice(1)));var n=s[t];return n||e}),p,a)}else if(a&&"none"!==a&&e.plugins.autoloader){var g="md-"+new Date().valueOf()+"-"+Math.floor(1e16*Math.random());t.attributes.id=g,e.plugins.autoloader.loadLanguages(a,function(){var t=document.getElementById(g);t&&(t.innerHTML=e.highlight(t.textContent,e.languages[a],a))})}}});var r=RegExp(e.languages.markup.tag.pattern.source,"gi"),s={amp:"&",lt:"<",gt:">",quot:'"'},l=String.fromCodePoint||String.fromCharCode;e.languages.md=e.languages.markdown}(Prism)},808308,(e,t,n)=>{var a,i,o;i=(a=Prism).util.clone(a.languages.typescript),a.languages.tsx=a.languages.extend("jsx",i),delete a.languages.tsx.parameter,delete a.languages.tsx["literal-property"],(o=a.languages.tsx.tag).pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+o.pattern.source+")",o.pattern.flags),o.lookbehind=!0},850856,(e,t,n)=>{var a,i;(a=Prism).languages.typescript=a.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),a.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete a.languages.typescript.parameter,delete a.languages.typescript["literal-property"],i=a.languages.extend("typescript",{}),delete i["class-name"],a.languages.typescript["class-name"].inside=i,a.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:i}}}}),a.languages.ts=a.languages.typescript}]);