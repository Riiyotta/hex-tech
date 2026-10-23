(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,976009,e=>{"use strict";var t=e.i(843476),i=e.i(997053),n=e.i(165425),o=e.i(706736),a=e.i(739876),s=e.i(360571),r=e.i(637804);e.i(726497);var d=e.i(778888);let l=i.default.section.withConfig({displayName:"Section__StyledSection",componentId:"sc-25b710d-0"})`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 300px) 1fr;
  gap: ${(0,s.generateFluidPxScale)(16,56)};
  padding-bottom: 40px;
  align-items: flex-start;
  width: 100%;
  scroll-margin-top: ${({$scrollOffset:e})=>e}px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    grid-template-columns: 1fr;
  }
`,c=i.default.div.withConfig({displayName:"Section__StyledHeading",componentId:"sc-25b710d-1"})`
  position: sticky;
  top: ${({$top:e})=>e}px;
  border-top: 1px solid ${({theme:e})=>(0,a.gridColorSelector)(e,"major")};
  padding-top: 35px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    position: relative;
    top: 0;
    margin-bottom: 16px;
  }
`,h=i.default.div.withConfig({displayName:"Section__Content",componentId:"sc-25b710d-2"})`
  position: relative;
  border-top: 1px solid ${({theme:e})=>(0,a.gridColorSelector)(e,"major")};
  padding-top: 28px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`,p=i.default.h3.withConfig({displayName:"Section__StyledSubSectionTitle",componentId:"sc-25b710d-3"})`
  text-wrap: balance;
  font-size: 1.75rem;
`,u=i.default.h4.withConfig({displayName:"Section__StyledH4",componentId:"sc-25b710d-4"})`
  max-width: 48ch;
  line-height: 1.5;
  padding-top: 5px;
`;function g({children:e,className:i,...n}){return(0,t.jsx)(u,{className:`${d.headingStyles.h4} ${i??""}`,...n,children:e})}let x=i.default.p.withConfig({displayName:"Section__StyledP",componentId:"sc-25b710d-5"})`
  margin-bottom: 0;
  max-width: 75ch;

  strong {
    font-weight: ${({theme:e})=>e.fontWeight.MEDIUM};
    color: ${({theme:e})=>e.fontColor.LOUD};
  }
`,m=(0,i.default)(o.Button).withConfig({displayName:"Section__StyledButtonWrapper",componentId:"sc-25b710d-6"})`
  width: fit-content;
`,f=i.default.ul.withConfig({displayName:"Section__StyledUL",componentId:"sc-25b710d-7"})`
  list-style-type: disc;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  gap: 15px;
`,b=i.default.ol.withConfig({displayName:"Section__StyledOL",componentId:"sc-25b710d-8"})`
  list-style-type: decimal;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  gap: 15px;
`,y=i.default.ul.withConfig({displayName:"Section__LinkListWrapper",componentId:"sc-25b710d-9"})`
  display: flex;
  flex-direction: column;
  margin-top: -4px;
`,w=i.default.li.withConfig({displayName:"Section__LinkListLi",componentId:"sc-25b710d-10"})`
  position: relative;
  border-bottom: 2px dotted ${({theme:e})=>(0,a.gridColorSelector)(e,"major")};
`,j=(0,i.default)(r.SiteLink).withConfig({displayName:"Section__LinkListLink",componentId:"sc-25b710d-11"})`
  display: grid !important;
  grid-template-columns: 230px 1fr;
  gap: 16px;
  text-decoration: none;
  border: 0;
  width: calc(100% + 24px);
  padding: 12px;
  margin-left: -12px;
  display: block;
  font-weight: ${({theme:e})=>e.fontWeight.LIGHT};

  div {
    span {
      color: ${({theme:e})=>e.fontColor.LOUD};
      font-weight: ${({theme:e})=>e.fontWeight.MEDIUM};
    }
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.LARGE}) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`,v=i.default.div.withConfig({displayName:"Section__CustomerQuoteWrapper",componentId:"sc-25b710d-12"})`
  display: flex;
  margin: 15px -20px 15px -45px;
`;e.s(["Button",0,function({link:e,text:i}){return(0,t.jsx)(m,{href:e,text:i})},"Content",0,h,"CustomerQuoteWrapper",0,v,"H4",0,g,"Heading",0,function(e){let{navHeight:i,gridlineHeight:o}=(0,n.useHeaderUI)();return(0,t.jsx)(c,{...e,$top:i+o-1})},"LinkList",0,function({links:e}){return(0,t.jsx)(y,{children:e.map((e,i)=>(0,t.jsx)(w,{children:(0,t.jsxs)(j,{href:e.link,children:[(0,t.jsx)(g,{children:e.title}),(0,t.jsxs)("div",{className:d.textStyles.m,children:[(0,t.jsx)("span",{children:e.subtitle})," ",e.description]})]})},i))})},"OL",0,function({children:e,className:i,...n}){return(0,t.jsx)(b,{className:`${d.textStyles.m} ${i??""}`,...n,children:e})},"P",0,function({children:e,className:i,...n}){return(0,t.jsx)(x,{className:`${d.textStyles.m} ${i??""}`,...n,children:e})},"Section",0,function({children:e,...i}){let{navHeight:o,gridlineHeight:a}=(0,n.useHeaderUI)();return(0,t.jsx)(l,{...i,$scrollOffset:o+a,children:e})},"StyledHeading",0,c,"SubSectionTitle",0,function({children:e,className:i,...n}){return(0,t.jsx)(p,{className:`${d.headingStyles.h3} ${i??""}`,...n,children:e})},"UL",0,function({children:e,className:i,...n}){return(0,t.jsx)(f,{className:`${d.textStyles.m} ${i??""}`,...n,children:e})}])},242001,e=>{"use strict";var t=e.i(843476),i=e.i(193594),n=e.i(997053),o=e.i(809573),a=e.i(273454),s=e.i(613938),r=e.i(739876),d=e.i(581444),l=e.i(271645),c=e.i(88653),h=e.i(846932),p=e.i(63209),u=e.i(689573),g=e.i(887652),x=e.i(433768),m=e.i(895420),f=e.i(991709),b=e.i(665419);e.i(726497);var y=e.i(778888);function w(e){return(0,t.jsx)("svg",{fill:"none",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,t.jsx)("path",{clipRule:"evenodd",d:"M8.5 11.7928V2.50001C8.5 2.22387 8.27614 2.00001 8 2.00001C7.72386 2.00001 7.5 2.22387 7.5 2.50001V11.793L4.35356 8.64644C4.1583 8.45118 3.84172 8.45118 3.64645 8.64643C3.45119 8.84169 3.45118 9.15828 3.64644 9.35354L7.99987 13.7071L12.3535 9.35355C12.5488 9.15829 12.5488 8.84171 12.3536 8.64645C12.1583 8.45118 11.8417 8.45117 11.6465 8.64643L8.5 11.7928Z",fill:"currentColor",fillRule:"evenodd"})})}function j(e){return(0,t.jsx)("svg",{fill:"none",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,t.jsx)("path",{clipRule:"evenodd",d:"M6.58573 12.2427L8.35351 10.4749L9.06062 11.182L7.29284 12.9498C6.12126 14.1213 4.22177 14.1213 3.05019 12.9498C1.87862 11.7782 1.87862 9.8787 3.05019 8.70713L8.70705 3.05028C9.87862 1.8787 11.7781 1.8787 12.9497 3.05028C14.1213 4.22185 14.1213 6.12134 12.9497 7.29292L11.1819 9.06066L10.4748 8.35356L12.2426 6.58581C13.0236 5.80476 13.0236 4.53843 12.2426 3.75738C11.4615 2.97633 10.1952 2.97633 9.41416 3.75738L7.64641 5.52513L6.93933 4.81805L4.81801 6.93937L5.52509 7.64645L3.7573 9.41424C2.97625 10.1953 2.97625 11.4616 3.7573 12.2427C4.53835 13.0237 5.80468 13.0237 6.58573 12.2427ZM10.1213 5.8787C9.92599 5.68344 9.60941 5.68344 9.41415 5.8787L5.87861 9.41423C5.68335 9.6095 5.68335 9.92608 5.87861 10.1213C6.07388 10.3166 6.39046 10.3166 6.58572 10.1213L10.1213 6.58581C10.3165 6.39054 10.3165 6.07396 10.1213 5.8787Z",fill:"currentColor",fillRule:"evenodd"})})}let v=n.default.div.withConfig({displayName:"CopyLinkButton__Position",componentId:"sc-de33432b-0"})`
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 12px;
  z-index: 1;
  background-color: ${({theme:e})=>e.palette.bg300};
  border-left: 1px solid ${({theme:e})=>(0,r.gridColorSelector)(e,"major")};
  border-bottom: 1px solid ${({theme:e})=>(0,r.gridColorSelector)(e,"major")};
  background-image: ${({theme:e})=>(0,r.backgroundImageCheckered)(e,{color:e.palette.fgA300})};

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

  &::after {
    content: '';
    position: absolute;
    left: -1px;
    bottom: -1px;
    height: 6px;
    width: 6px;
    border-left: 1px solid ${({theme:e})=>e.palette.fg1200};
    border-bottom: 1px solid ${({theme:e})=>e.palette.fg1200};
  }
`,k=n.default.span.withConfig({displayName:"CopyLinkButton__Label",componentId:"sc-de33432b-1"})`
  position: absolute;
  top: 100%;
  right: 0;
  padding: 6px;
  text-align: right;
  text-transform: uppercase;
  font-size: ${({theme:e})=>e.fontSize.EXTRA_SMALL};
  color: ${({theme:e})=>e.palette.fg1100};
  white-space: nowrap;
`,C=n.default.button.withConfig({displayName:"CopyLinkButton__Button",componentId:"sc-de33432b-2"})`
  position: relative;
  display: block;
  border-radius: 999px;
  aspect-ratio: 1 / 1;
  width: 56px;
  border: 0;
  color: ${({theme:e})=>e.palette.fg1200};
  display: grid;
  place-items: center;
  background-color: transparent;
`,S=n.default.div.withConfig({displayName:"CopyLinkButton__Surface",componentId:"sc-de33432b-3"})`
  border-radius: 999px;
  background-image: radial-gradient(
    circle at 66.66% 200%,
    ${({theme:e})=>(0,i.lighten)(.043,e.palette.bg500)} 0%,
    ${({theme:e})=>e.palette.bg300} 190%
  );
  box-shadow: ${({theme:e})=>{let t=`0 0.5px 0px 0.75px ${(0,i.lighten)(.125,e.palette.bg500)}`;return[`0 0 24px 0px ${e.palette.bg400} inset`,t].join(", ")}};
`,L=n.default.div.withConfig({displayName:"CopyLinkButton__Pile",componentId:"sc-de33432b-4"})`
  display: grid;

  & > * {
    grid-area: 1 / -1;
  }
`,I=n.default.div.withConfig({displayName:"CopyLinkButton__Shadow",componentId:"sc-de33432b-5"})`
  border-radius: 999px;

  box-shadow:
    6px 37px 10px 0px rgba(0, 0, 0, 0.01),
    4px 24px 10px 0px rgba(0, 0, 0, 0.04),
    2px 13px 8px 0px rgba(0, 0, 0, 0.14),
    1px 6px 6px 0px rgba(0, 0, 0, 0.24),
    0px 1px 3px 0px rgba(0, 0, 0, 0.27);
`,_=(0,n.default)(h.motion.span).withConfig({displayName:"CopyLinkButton__Span",componentId:"sc-de33432b-6"})`
  display: inline-block;
`;function H({sectionId:e}){let i=(0,l.useId)(),[n,o]=(0,l.useState)(!1),a=(0,l.useRef)(!1),[,s]=(0,u.useAnimate)(),r=(0,g.useMotionValue)(0),d=(0,g.useMotionValue)(0),w=(0,g.useMotionValue)(0),T=(0,g.useMotionValue)(0),$=(0,m.useTransform)(r,[0,1],[1,.4]),P=(0,m.useTransform)(r,[0,1],[1,0]),A=(0,m.useTransform)(w,[0,1],[1,0]),N=(0,m.useTransform)(w,[0,1],[1,.6]);(0,x.useMotionValueEvent)(T,"change",e=>{o(e>.5)});let O=(0,l.useCallback)(async()=>{if(a.current)return;a.current=!0,T.set(1);let t=e?`#${e}`:"";await navigator.clipboard.writeText(`${window.location.origin}${b.INTERNAL_LINKS.SwitchingToHex}${t}`),s([[r,1,{duration:.46,type:"spring",bounce:.3}],[d,1,{duration:.6,type:"spring",bounce:.5,at:"-0.1"}],[w,1,{duration:.46,type:"spring",bounce:.3}],[T,0,{type:"tween",duration:.01,at:"-0.3"}],[r,0,{duration:.58,type:"spring",bounce:.4,at:"-0.2"}]]).then(()=>{d.set(0),w.set(0),a.current=!1,T.set(0)})},[s,w,d,T,r,e]);return(0,t.jsxs)(v,{children:[(0,t.jsx)(p.MotionConfig,{transition:{type:"spring",bounce:.56,duration:.43},children:(0,t.jsxs)(L,{as:h.motion.div,initial:"initial",tabIndex:-1,whileTap:"tapped",children:[(0,t.jsx)(I,{as:h.motion.div,variants:{initial:{opacity:1},tapped:{opacity:.6}}}),(0,t.jsx)(S,{as:h.motion.div,variants:{initial:{scale:1,filter:"brightness(1)"},tapped:{scale:.92,filter:"brightness(1.25)"}}}),(0,t.jsx)(C,{onClick:O,children:(0,t.jsxs)(L,{as:h.motion.div,variants:{initial:{scale:1},tapped:{scale:1.09}},children:[(0,t.jsx)(h.motion.svg,{fill:"none",height:"16",style:{opacity:A,scale:N},viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)(h.motion.path,{d:"M3 8L7 11.5L13 4",stroke:"currentColor",style:{pathLength:d}})}),(0,t.jsx)(h.motion.div,{style:{scale:$,opacity:P},children:(0,t.jsx)(j,{})})]})})]})}),(0,t.jsx)(p.MotionConfig,{transition:{type:"spring",bounce:.23,duration:.3},children:(0,t.jsx)(c.AnimatePresence,{children:n?(0,t.jsxs)(k,{className:y.textStyles.annotation,children:[(0,t.jsx)(_,{layout:"position",layoutId:i,children:"link"})," ",(0,t.jsx)(_,{...f.REVEAL_MARKER,animate:"visible",exit:"hidden",initial:"hidden",variants:{hidden:{opacity:0,x:32},visible:{opacity:1,x:0}},children:"copied"})]},"copied"):(0,t.jsxs)(k,{className:y.textStyles.annotation,children:[(0,t.jsx)(_,{...f.REVEAL_MARKER,animate:"visible",exit:"hidden",initial:"hidden",variants:{hidden:{opacity:0,x:-32},visible:{opacity:1,x:0}},children:"Copy"})," ",(0,t.jsx)(_,{layout:"position",layoutId:i,children:"link"})]},"initial")})})]})}var T=e.i(558202),$=e.i(939808),P=e.i(637804),A=e.i(998990),N=e.i(598043),O=e.i(976009);let M=[{question:"“Our stakeholders are used to pixel-perfect dashboards.”",answer:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{children:"Hex has robust, no-code charting and you can go build custom visualizations with Python libraries like Matplotlib/Plotly. But if perfect dashboard polish is your top priority, there are BI tools that are better for that."}),(0,t.jsx)("div",{children:"Most teams choose Hex because they’re willing to trade a bit of visual precision for significant gains in speed and depth of insight. Data teams can build, iterate, and publish apps in a fraction of the time, and business users don’t have to wait for dashboard rebuilds to every new question; they can simply ask in plain language via Threads."})]})},{question:"“We don’t need one more tool in our data stack”",answer:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{children:"Most teams come to Hex because they’re tired of analysis and insight being spread across SQL editors, notebooks, BI tools, coding copilots, AI chatbots, and more. Hex replaces that patchwork with one connected platform for exploration, analysis, and self-serve. It’s not “one more tool,” it’s the one that finally removes five others."})})},{question:"“To support self-serve, we need extensive spreadsheet functionality.”",answer:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{children:"Hex already offers a capable self-serve experience, with spreadsheet-style editing, drag-and-drop exploration, and governed metrics. While not every edge-case Excel function is supported, most data teams choose Hex to reduce self-serve complexity, not add to it."}),(0,t.jsx)("div",{children:"Instead of forcing users to learn convoluted BI workflows, Hex lowers the barrier entirely with conversational analytics via Threads: anyone can ask questions, iterate on analysis, and explore rich, governed results."})]})},{question:"“For now, we’re experimenting with our own AI setup and seeing how that goes.”",answer:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{children:"Many data teams start by experimenting with standalone AI tools: coding copilots, chatbots, or even in-house agents. They deliver quick productivity gains, but also introduce new problems: more fragmented tools, inconsistent queries, and untraceable context that’s difficult to debug or trust."}),(0,t.jsx)("div",{children:"Hex lets you keep experimenting, but on a connected, governed foundation. Context is shared across technical work in the notebook and self-serve questions in Threads, so answers stay consistent and inspectable. Plus, you can even extend those agents to the places you already work like Slack, Claude, and Cursor."})]})},{question:"“Our current data tools aren’t perfect, but for now they work fine.”",answer:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{children:"AI tooling in most BI tools is built around no-code interfaces for business users. That’s fine for simple self-serve workflows, but it forces data teams to do deeper, code-based exploration elsewhere."}),(0,t.jsx)("div",{children:"Hex supports both: deep analytical work through the Notebook Agent and natural-language self-serve through Threads. These experiences are connected, allowing technical and non-technical users to collaborate fluidly between each to iterate, verify, extend, and publish AI-driven analyses."})]})},{question:"“Our data is too messy to use Hex’s AI capabilities right now”",answer:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{children:"Most teams feel this way — but Hex is designed exactly for this starting point. You don’t need a perfect semantic layer or pristine metadata to get value from agents in Hex."}),(0,t.jsx)("div",{children:"Hex’s agents can start working with your warehouse as-is, with your team layering in context gradually: endorsing key tables, adding lightweight metadata, or syncing existing dbt/Cube/Snowflake models."})]})}],E=[{id:"why-data-teams-switch",subsections:[{content:[(0,t.jsx)(O.P,{children:"Hex is the AI Analytics Platform where trust meets insight: a single, connected workspace where data practitioners run deep analysis, business users ask questions in plain language, and everyone collaborates on the same data. A shared context engine ensures every AI-generated insight is accurate and consistent."}),(0,t.jsx)(O.P,{children:"Companies like Lovable, Cursor, Notion, and Ramp use Hex to put AI at the center of their data strategy, so every question can be answered with trusted insight."})],id:"what-is-hex",title:"What is Hex?"},{content:[(0,t.jsx)(O.P,{children:"Data teams switch to Hex because it gives them one connected, AI-native workspace for everything they do with data. Deep analysis, one-off questions, and critical business dashboards all happen on the same trusted context. Instead of juggling separate notebooks, BI tools, AI tools, and ad-hoc Slack requests, Hex brings data work and AI together in one place."}),(0,t.jsx)(O.P,{children:"Data teams have tried everything to keep up with the pressures of making their companies “data-driven.” As AI transforms the rest of the business, that expectation is rising faster than ever, but traditional analytics stacks aren’t up to the task."}),(0,t.jsxs)(O.UL,{children:[(0,t.jsx)("li",{children:(0,t.jsxs)(O.P,{children:[(0,t.jsx)("strong",{children:"Endless dashboards & failed self-serve."})," Despite a library of dashboards and attempting every version of self-serve, adoption still doesn’t stick and questions keep coming back to the data team."]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(O.P,{children:[(0,t.jsx)("strong",{children:"A bottleneck on deeper insight."})," Advanced data work happens in notebooks and SQL editors, but insights are flattened into screenshots and PDFs. The logic disappears and the impact never scales beyond the initial ask."]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(O.P,{children:[(0,t.jsx)("strong",{children:"Directionless AI sprawl."})," Business users upload CSVs to ChatGPT. Data teams copy queries from coding agents. Every tool runs on its own context. The result: conflicting answers that are a pain to reconcile."]})})]}),(0,t.jsx)(O.P,{children:"It all leads to an erosion of trust and impact of the data team."}),(0,t.jsx)(O.P,{children:"Instead of leading the data strategy, they’re stuck on the back foot — auditing spreadsheet experiments, validating answers from AI chatbots, and fielding endless ad-hoc requests."})],id:"why-data-teams-are-looking-for-a-change",title:"Why data teams are looking for a change"},{content:[(0,t.jsx)(O.P,{children:"With Hex, data teams aren't just more efficient—they unlock a new way of working, where agents and humans collaborate in one connected workflow."}),(0,t.jsx)(O.P,{children:"The impact compounds quickly: more questions get answered, the appetite for insights grows, and the data team becomes a blueprint for AI transformation across the business."}),(0,t.jsx)(O.H4,{children:"Deeper insights, 10x faster"}),(0,t.jsx)(O.P,{children:"AI notebooks in Hex are purpose-built to accelerate analytical workflows. Agents understand your data, business context, and analytical patterns, helping you move from deep-dive exploration to production-ready data apps in a fraction of the time."}),(0,t.jsx)(O.CustomerQuoteWrapper,{children:(0,t.jsx)($.CustomerQuoteCard,{logoPath:A.CUSTOMER_LOGOS_HOSTED.Lovable,quote:"Hex's notebook agent just works. I describe what I want and get working SQL back, without having to juggle between tools. It's made us 10x faster at turning questions into insights."})}),(0,t.jsx)(O.H4,{children:"Self-serve in plain, natural language"}),(0,t.jsx)(O.P,{children:"With Threads, data teams aren’t just keeping up with questions from the business — they’re inspiring teams to ask more. Anyone can now ask questions in plain language and get accurate answers grounded in trusted context. Insights are delivered at the speed of the business, freeing data teams to focus on high-impact work."}),(0,t.jsx)(O.CustomerQuoteWrapper,{children:(0,t.jsx)($.CustomerQuoteCard,{logoPath:A.CUSTOMER_LOGOS_HOSTED.CustomerIO,quote:"Hex is bridging the gap between self-service data access and self-service data analytics. Threads allows my users to discover data, create charts, and even perform analysis — all via natural language."})}),(0,t.jsx)(O.H4,{children:"Observe agent responses and improve context over time"}),(0,t.jsx)(O.P,{children:"Getting accurate, consistent answers from agents starts with curated context. Hex Context Studio provides data teams tools to build semantic definitions and logic, observe agent interactions, and test and deploy improvements."}),(0,t.jsx)(O.CustomerQuoteWrapper,{children:(0,t.jsx)($.CustomerQuoteCard,{logoPath:"/images/logos/uken-games-logo.svg",quote:"Hex's authoring tool made it easy to develop, document, and test these out with minimal setup needed. This accelerates our journey to improve self-serve capabilities while lowering maintenance costs for the team."})}),(0,t.jsx)(O.H4,{children:"The power of an integrated platform"}),(0,t.jsx)(O.P,{children:"In Hex, questions, analysis, and insights all live in one connected workspace. By moving fluidly between Threads, notebooks, apps, and Context Studio, data teams can work side by side with where decisions happen and build influence with stakeholders. No handoffs, no rebuilding logic, no jumping tools. The result: AI that gets smarter with every answer, and a data team whose impact grows every time they ship work."}),(0,t.jsx)(O.CustomerQuoteWrapper,{children:(0,t.jsx)($.CustomerQuoteCard,{logoPath:A.CUSTOMER_LOGOS_HOSTED.PandaDoc,quote:"Because everything is inside Hex, when we're called on to validate results, it's really easy to grab whatever is in there, run it ourselves, inspect the SQL, and confirm Thread is using the right tables."})})],id:"why-data-teams-love-hex",title:"Why data teams love Hex"},{content:[(0,t.jsx)(T.FAQ,{fullWidth:!0,items:M,noPadding:!0,questionHeadingLevel:"h4",showFooter:!1,showHeader:!1})],id:"common-objections",title:"Common objections (and why teams switch anyway)"}],title:"Why data teams switch to Hex"},{id:"how-to-poc-hex",subsections:[{content:[(0,t.jsx)(O.P,{children:"Doing a proof of concept (POC) with Hex is a guided, hands-on experience of how AI analytics transforms the way your team works."}),(0,t.jsx)(O.P,{children:"For most companies, a POC will last two weeks and involve the data team plus 2-3 stakeholders from the business."}),(0,t.jsx)(O.P,{children:"You’ll use your own data and build a handful of your team’s core use cases to see what it’s like to use Hex. For each use case, we’ll scope:"}),(0,t.jsxs)(O.OL,{children:[(0,t.jsx)("li",{children:(0,t.jsxs)(O.P,{children:[(0,t.jsx)("strong",{children:"The key questions"})," the stakeholder needs to answer (e.g., “How is X performing?”, “What changed?”, “Where should we focus?”)"]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(O.P,{children:[(0,t.jsx)("strong",{children:"The expected outputs"})," (a diagnostic deep dive, a recurring metric, a one-off insight, a comparison, or an app with parameters)"]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(O.P,{children:[(0,t.jsx)("strong",{children:"The data required"})," (the tables, models, or sources that power the analysis)"]})})]})],id:"what-is-a-poc",title:"What is a POC with Hex?"},{content:[(0,t.jsx)(O.P,{children:"Most Hex POCs include a dedicated Hex team—an account partner, a sales engineer, and a shared Slack channel for support throughout. For smaller deployments, we offer a streamlined self-guided POC."}),(0,t.jsx)(O.P,{children:"For POCs with dedicated support, the process typically follows these steps:"}),(0,t.jsxs)(O.OL,{children:[(0,t.jsx)("li",{children:(0,t.jsxs)(O.P,{children:[(0,t.jsx)("strong",{children:"Kickoff and scoping"}),". We’ll align on goals, success metrics, and test cases to evaluate."]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(O.P,{children:[(0,t.jsx)("strong",{children:"Connect and curate"}),". Connect your warehouse and layer in lightweight context curation for agents (table endorsements, rules files, metadata, or syncing existing semantic models)."]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(O.P,{children:[(0,t.jsx)("strong",{children:"Build and explore"}),". Data teams experiment in AI notebooks, and build interactive apps."]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(O.P,{children:[(0,t.jsx)("strong",{children:"Share and engage"}),". Business users explore data apps, ask questions with Threads, and provide feedback."]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(O.P,{children:[(0,t.jsx)("strong",{children:"Validate and decide"}),". Together we review outcomes against the decision criteria and plan the rollout."]})})]})],id:"how-it-works",title:"How it works"},{content:[(0,t.jsx)(O.P,{children:"A successful POC gives both data teams and business users firsthand experience inside of Hex: building, exploring, and collaborating alongside agents. While our team supports throughout, the goal is for your teams to envision using Hex independently."}),(0,t.jsx)(O.P,{children:"By the end, you'll have a clear understanding of how Hex accelerates your data team to move faster and enables your stakeholders to self-serve answers in natural language. Specifically:"}),(0,t.jsxs)(O.UL,{children:[(0,t.jsx)("li",{children:(0,t.jsxs)(O.P,{children:[(0,t.jsx)("strong",{children:"Data teams"})," say they can build complex analyses faster than ever, seamlessly interchanging SQL and python, supercharged by the Notebook Agent."]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(O.P,{children:[(0,t.jsx)("strong",{children:"Data admins"})," are confident in their ability to roll out self-serve AI analytics to business stakeholders with tools to govern data access, observe agent responses, and model better context."]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(O.P,{children:[(0,t.jsx)("strong",{children:"Business stakeholders"})," have greater autonomy to answer their own questions via conversational BI and familiar spreadsheet and drag-and-drop interfaces."]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(O.P,{children:[(0,t.jsx)("strong",{children:"IT, Security, and Procurement"})," have confirmed Hex meets enterprise standards for security, SSO, and performance."]})})]})],id:"what-success-looks-like",title:"What success looks like"},{content:[(0,t.jsx)(O.H4,{children:"Fast to start. Structured for success. An immersive experience."}),(0,t.jsx)(O.P,{children:"Every Hex POC is a first-hand experience. Your team works in the same workspace they’ll use in production, creating analyses, collaborating with agents, and sharing results. Our team guides along the way, but you experience both sides of working with data: what it’s like to build in Hex, and what it’s like to share and interact with insights."}),(0,t.jsx)(O.P,{children:"It’s the simplest way to understand the power of agentic analytics, by seeing the speed and potential of agents first-hand."})],id:"why-teams-love-pilots",title:"Why teams love running pilots with Hex"},{content:[(0,t.jsx)(O.P,{children:"Picking the right starting point depends on how you want to evaluate Hex:"}),(0,t.jsx)(O.LinkList,{links:[{description:"Great for self-guided exploration and testing lightweight workflows before involving a broader team.",link:b.SIGNUP_LINK,subtitle:"Completely free, set up in minutes.",title:"Start a trial"},{subtitle:"We’ll scope your POC together and guide your setup.",description:"Best when you’re planning a formal evaluation, involving multiple teams and stakeholders, and want structured support to ensure everything is configured correctly from day one.",link:b.INTERNAL_LINKS.RequestADemo,title:"Contact Sales"}]})],id:"getting-started-today",title:"Getting started today"}],title:"How to POC Hex"},{id:"migrate-to-hex",subsections:[{content:[(0,t.jsx)(O.H4,{children:"Migrating to Hex isn’t about rebuilding dashboards, it’s about preparing your data and team for a new way of working."}),(0,t.jsx)(O.P,{children:"To get there, two things are important to consider:"}),(0,t.jsxs)(O.UL,{children:[(0,t.jsx)("li",{children:(0,t.jsxs)(O.P,{children:[(0,t.jsx)("strong",{children:"Context is important, but don’t overthink it."})," ","Semantic models, metadata, and clear business logic are the connective tissue for helping agents understand your data and deliver trustworthy answers. But building that context shouldn’t be viewed as a blocker. Hex empowers you to observe agent behavior and improve context as you go. Start experimenting immediately and improve accuracy with every use."]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(O.P,{children:[(0,t.jsx)("strong",{children:"AI analytics break the traditional boundaries of data work."})," ","Agents are rewriting the old rules about who can do what with data. Across the board, everyone at your org will be more capable of working with data, but adoption hinges on exposure. Champion successes and share out real examples of AI data work early to spark experimentation and increase participation."]})})]})],id:"set-up-for-ai-analytics",title:"Set up for AI analytics"},{content:[(0,t.jsxs)(O.UL,{children:[(0,t.jsx)("li",{children:(0,t.jsxs)(O.P,{children:[(0,t.jsx)("strong",{children:"Curate your data."})," Identify trusted tables, add metadata, and use the Hex rules files to codify logic and business definitions so agents can start to work with a base-layer of context."]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(O.P,{children:[(0,t.jsx)("strong",{children:"Create or sync semantic models."})," Layer more sophisticated context by syncing existing models from dbt, Cube, or Snowflake, or using Hex’s Modeling Agent to bootstrap new ones directly from projects or existing queries."]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(O.P,{children:[(0,t.jsx)("strong",{children:"Rebuild what matters."})," Focus on the 20% of dashboards or analytical artifacts that drive 80% of your decisions. Rebuild those inside of Hex as interactive apps or imported notebooks. You can even reference those projects to the modeling agent to quickly build corresponding models."]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(O.P,{children:[(0,t.jsx)("strong",{children:"Enable your team."})," Partner with the Hex team to run tailored working sessions for different skill levels: from business users exploring in Threads to analysts or data-savvy PMs building with the Notebook Agent. These sessions help teams see what’s possible, share early wins, and build confidence as AI becomes part of everyday data work."]})})]})],id:"what-migration-looks-like",title:"What migration looks like"},{content:[(0,t.jsx)(O.H4,{children:"Want to get an early sense of what migration looks like?"}),(0,t.jsx)(O.P,{children:"Use these short, opinionated guides to envision the steps to your rollout."}),(0,t.jsxs)(O.UL,{children:[(0,t.jsx)("li",{children:(0,t.jsxs)(O.P,{children:[(0,t.jsx)(P.SiteLink,{href:b.TRUST_LINKS.Home,children:(0,t.jsx)("strong",{children:"Security and compliance overview"})})," ","— share with your infosec team to review Hex’s enterprise-grade security posture, certifications, and governance practices."]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(O.P,{children:[(0,t.jsx)(P.SiteLink,{href:`${b.DOCS_LINKS.Quickstart}/admin-101`,children:(0,t.jsx)("strong",{children:"Admin quickstart"})})," ","— connect your data sources, set up roles and SSO, and prepare your workspace for rollout."]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(O.P,{children:[(0,t.jsx)(P.SiteLink,{href:`${b.DOCS_LINKS.Tutorials}/connect-to-data/setup-for-ai-agents`,children:(0,t.jsx)("strong",{children:"Set up for AI Agents"})})," ","— endorse trusted sources, add metadata, and use rules files to give agents reliable context. Start simple, layer in context as you go."]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(O.P,{children:[(0,t.jsx)(P.SiteLink,{href:`${b.DOCS_LINKS.Tutorials}/develop-notebooks/notebook-agent-best-practices`,children:(0,t.jsx)("strong",{children:"Notebook Agent best practices"})})," ","— help analysts move faster with AI-assisted analysis and build reproducible workflows that scale."]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(O.P,{children:[(0,t.jsx)(P.SiteLink,{href:`${b.DOCS_LINKS.Threads}#threads-quickstart-guide`,children:(0,t.jsx)("strong",{children:"Threads quickstart"})})," ","— launch natural-language self-serve for business users, safely and with full visibility."]})})]})],id:"think-through-your-migration",title:"Think through your migration"}],title:"Migrate to Hex"}],q=[{logoPath:A.CUSTOMER_LOGOS_HOSTED.Notion,quote:"Our vision for Notion's data team is that anyone, regardless of technical proficiency, is comfortable using data to answer their own questions — and Hex enables that."},{logoPath:A.CUSTOMER_LOGOS_HOSTED.Inventa,quote:"Hex's notebook agent just works. I describe what I want and get working SQL back, without having to juggle between tools. It's made us 10x faster at turning questions into insights."},{logoPath:A.CUSTOMER_LOGOS_HOSTED.Brex,quote:"Hex enables us to deploy customer-facing analytics in days rather than weeks or months. Hex gives us super powers."},{logoPath:A.CUSTOMER_LOGOS_HOSTED.Ramp,quote:"Hex is bridging the gap between self-service data access and self-service data analytics. Threads allows my users to discover data, create charts, and even perform analysis — all via natural language."},{logoPath:A.CUSTOMER_LOGOS_HOSTED.ProductHunt,quote:"The Hex agent really sped up exploratory analysis for me, especially when juggling multiple datasets. I love being able to make edits across the notebook without bouncing between tools."},{logoPath:A.CUSTOMER_LOGOS_HOSTED.Algolia,quote:"The Notebook Agent feels like the future. As a former data scientist, it feels like a junior version of myself, requiring a little guidance, but an immediate accelerant to my data work."}];M.map(({question:e,answer:t})=>({question:e,answer:(0,N.reactNodeToPlainTextNormalized)(t)}));let D=["AI POWERED","POLYGLOT WORKFLOWS","REAL-TIME","COLLABORATIVE","NO-CODE"],B=n.default.ul.withConfig({displayName:"Features__Ul",componentId:"sc-c00ae8a4-0"})`
  mask-image: linear-gradient(
    to bottom,
    rgba(0 0 0 / 0.6) 12px,
    rgba(0 0 0 / 0) 80px
  );
`,R=n.default.li.withConfig({displayName:"Features__Li",componentId:"sc-c00ae8a4-1"})`
  font-size: ${({theme:e})=>e.fontSize.EXTRA_SMALL};
`;function F(){return(0,t.jsx)(B,{children:D.map(e=>(0,t.jsx)(R,{className:y.textStyles.annotation,children:e},e))})}var W=e.i(650617);e.i(409027);var U=e.i(747741),Q=e.i(360571);let z=(0,n.default)(d.LayoutSubgrid).withConfig({displayName:"Layout__GridLinesTop",componentId:"sc-b3af076-0"})`
  height: ${(0,Q.generateFluidPxScale)(112,152)};
`,G=n.default.div.withConfig({displayName:"Layout__DocumentGrid",componentId:"sc-b3af076-1"})`
  position: relative;
  background-color: ${({theme:e})=>e.palette.bg500};

  &[data-with-top-padding='true'] {
    padding-top: ${(0,Q.generateFluidPxScale)(32,56)};
  }

  &[data-border-top='true'] {
    border-top: 1px solid ${({theme:e})=>(0,r.gridColorSelector)(e,"major")};
  }

  &[data-border-bottom='true'] {
    border-bottom: 1px solid ${({theme:e})=>(0,r.gridColorSelector)(e,"major")};
  }

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
`,V=(0,n.default)(r.ContentMarginLine).withConfig({displayName:"Layout__DocumentMargin",componentId:"sc-b3af076-2"})`
  background-image: ${({theme:e})=>{let t=e.palette.fgA100,i=(0,r.gridColorSelector)(e,"minor");return`repeating-linear-gradient(to bottom, ${t}, ${t} calc(256px - 1px), ${i} calc(256px - 1px), ${i} 256px)`}};
`,K=n.default.div.withConfig({displayName:"Layout__DocumentAccent",componentId:"sc-b3af076-3"})`
  --document-accent-color: ${({theme:e})=>e.palette.fg1200};

  position: absolute;
  height: 8px;
  width: 8px;

  &[data-position='tl'] {
    border-left: 1px solid var(--document-accent-color);
    border-top: 1px solid var(--document-accent-color);
    top: -1px;
    left: -1px;
  }

  &[data-position='tr'] {
    border-right: 1px solid var(--document-accent-color);
    border-top: 1px solid var(--document-accent-color);
    top: -1px;
    right: -1px;
  }

  &[data-position='bl'] {
    border-left: 1px solid var(--document-accent-color);
    border-bottom: 1px solid var(--document-accent-color);
    bottom: -1px;
    left: -1px;
  }

  &[data-position='br'] {
    border-right: 1px solid var(--document-accent-color);
    border-bottom: 1px solid var(--document-accent-color);
    bottom: -1px;
    right: -1px;
  }
`,X=(0,n.default)(d.LayoutGridCondensed).withConfig({displayName:"Layout__CondensedLayoutGrid",componentId:"sc-b3af076-4"})`
  --content-width: min(calc(100% - 24px), 1280px);
  grid-column: 2 / -2;
`,Y=n.default.div.withConfig({displayName:"Layout__DocumentContainer",componentId:"sc-b3af076-5"})`
  display: grid;
  grid-template-columns: 1fr calc(100% - ${(0,Q.generateFluidPxScale)(24,112)}) 1fr;

  & > * {
    grid-column: 2 / -2;
  }
`,Z=Array.from({length:6},(e,t)=>(t+1)*2),J=(0,n.default)(r.GridRule).withConfig({displayName:"Layout__StyledGridRule",componentId:"sc-b3af076-6"})`
  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    &[data-i='4'],
    &[data-i='8'],
    &[data-i='12'] {
      display: none;
    }
  }
`;function ee(){return(0,t.jsx)(d.LayoutSubgrid,{"data-content-grid":!0,children:(0,t.jsx)(z,{children:Z.map(e=>(0,t.jsx)(J,{$column:e,"data-i":e},e))})})}function et({children:e,id:i,borderTop:n=!1,borderBottom:o=!1,withTopPadding:a=!1}){return(0,t.jsx)(d.LayoutSubgrid,{"data-content-grid":!0,id:i,style:{zIndex:1,scrollMarginTop:"150px"},children:(0,t.jsxs)(X,{children:[(0,t.jsx)(V,{}),(0,t.jsxs)(G,{"data-border-bottom":o,"data-border-top":n,"data-with-top-padding":a,children:[(0,t.jsx)(K,{"data-position":"tl"}),(0,t.jsx)(K,{"data-position":"tr"}),(0,t.jsx)(K,{"data-position":"bl"}),(0,t.jsx)(K,{"data-position":"br"}),(0,t.jsx)(Y,{children:e})]}),(0,t.jsx)(V,{"data-right":!0})]})})}(0,n.default)(d.LayoutSubgrid).withConfig({displayName:"Layout__StyledLayoutSubgrid",componentId:"sc-b3af076-7"})`
  position: relative;
  border-top: 1px solid ${({theme:e})=>(0,r.gridColorSelector)(e,"major")};
  border-bottom: 1px solid ${({theme:e})=>(0,r.gridColorSelector)(e,"major")};
  overflow-x: clip;

  &::before {
    content: '';
    pointer-events: none;
    position: absolute;
    inset: 0;
    background-image: ${({theme:e})=>(0,r.backgroundImageHatched)(e)};
    mask-image: radial-gradient(
      circle at 40% 40%,
      rgba(0 0 0 / 0.48) 40%,
      rgba(0 0 0 / 1) 100%
    );
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    & > * {
      grid-column: 1 / -1 !important;
    }
    padding: 0 ${(0,Q.generateFluidPxScale)(16,80)};
  }
`;let ei=n.default.div.withConfig({displayName:"Layout__HighlightWrapper",componentId:"sc-b3af076-8"})`
  position: relative;
  display: grid;
  grid-template-columns: subgrid;

  &&& {
    grid-column: 1 / -1;

    & > * {
      grid-column: 2 / -2;
    }
  }

  &::before {
    content: '';
    pointer-events: none;
    position: absolute;
    width: 1px;
    height: 100%;
    left: -1px;
    background-image: ${({theme:e})=>{let t=e.palette.fgA100,i=e.palette.fgA1200;return`linear-gradient(to bottom, ${t}, ${i} 64px, ${i} calc(100% - 64px), ${t})`}};
  }
`,en=(0,n.default)(ei).withConfig({displayName:"Hero__HeadlineWrapper",componentId:"sc-a9e02eb-0"})`
  margin-top: 115px;
`,eo=n.default.h1.withConfig({displayName:"Hero__H1",componentId:"sc-a9e02eb-1"})`
  font-size: ${(0,U.generateFluidFontSize)(54,100)};

  width: fit-content;

  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;

  ${({theme:e})=>e.gradientText.DEFAULT}
`,ea=n.default.div.withConfig({displayName:"Hero__ArrowIndicatorCirc",componentId:"sc-a9e02eb-2"})`
  position: relative;
  height: 32px;
  width: 32px;
  display: grid;
  place-content: center;
  border-radius: 999px;
  background-color: ${({theme:e})=>e.palette.bg300};
  position: absolute;
  top: 50%;
  left: -2px;
  box-shadow:
    0 4px 16px -3px rgba(0 0 0 / 1),
    0 1px 4px -1px rgba(0 0 0 / 1);
  color: ${({theme:e})=>e.palette.fgLoud};
  transform: translate(-48px, -50%) rotate(-0.25turn);
  opacity: 0;
  transition: opacity, transform;
  transition-duration: var(--hover-transition-duration);
  transition-timing-function: var(--hover-transition-timing-function);

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border: 1px dashed ${({theme:e})=>e.palette.fg1100};
    border-radius: inherit;
    animation: rotate 8s linear infinite;

    @keyframes rotate {
      from {
        transform: rotate(-1turn);
      }
    }
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    border-radius: inherit;
    background-image: ${({theme:e})=>e.paperTextureCssVars.img};
    background-size: ${({theme:e})=>e.paperTextureCssVars.size};
    opacity: ${({theme:e})=>e.paperTextureCssVars.opacity};
    mix-blend-mode: ${({theme:e})=>e.paperTextureCssVars.mixBlendMode};
  }

  @media (max-width: ${({theme:e})=>e.mediaQuery.MEDIUM}) {
    display: none;
  }
`;function es(){return(0,t.jsx)(ea,{children:(0,t.jsx)(w,{})})}let er=n.default.span.withConfig({displayName:"Hero__AnchorInnerTransform",componentId:"sc-a9e02eb-3"})`
  display: inline-block;
  transition: transform;
  transition-duration: var(--hover-transition-duration);
  transition-timing-function: var(--hover-transition-timing-function);
`,ed=n.default.ul.withConfig({displayName:"Hero__Toc",componentId:"sc-a9e02eb-4"})`
  --hover-transition-duration: 529.33ms;
  --hover-transition-timing-function: linear(
    0 0%,
    0.005892 1%,
    0.022227 2%,
    0.047151 3%,
    0.079006 4%,
    0.116321 5%,
    0.157797 6%,
    0.202293 7.000000000000001%,
    0.248818 8%,
    0.296516 9%,
    0.344652 10%,
    0.392606 11%,
    0.439857 12%,
    0.485977 13%,
    0.530617 14.000000000000002%,
    0.573504 15%,
    0.614426 16%,
    0.653228 17%,
    0.689804 18%,
    0.724091 19%,
    0.756062 20%,
    0.785721 21%,
    0.813097 22%,
    0.838242 23%,
    0.861223 24%,
    0.882123 25%,
    0.901035 26%,
    0.918061 27%,
    0.933305 28.000000000000004%,
    0.946879 28.999999999999996%,
    0.958894 30%,
    0.96946 31%,
    0.978689 32%,
    0.986687 33%,
    0.993561 34%,
    0.999411 35%,
    1.004333 36%,
    1.00842 37%,
    1.011758 38%,
    1.014427 39%,
    1.016506 40%,
    1.018063 41%,
    1.019165 42%,
    1.019871 43%,
    1.020237 44%,
    1.020313 45%,
    1.020144 46%,
    1.019771 47%,
    1.019232 48%,
    1.018558 49%,
    1.01778 50%,
    1.016922 51%,
    1.016007 52%,
    1.015055 53%,
    1.014083 54%,
    1.013105 55.00000000000001%,
    1.012133 56.00000000000001%,
    1.011177 56.99999999999999%,
    1.010246 57.99999999999999%,
    1.009346 59%,
    1.008483 60%,
    1.00766 61%,
    1.006882 62%,
    1.006148 63%,
    1.005462 64%,
    1.004822 65%,
    1.00423 66%,
    1.003683 67%,
    1.003182 68%,
    1.002725 69%,
    1.002309 70%,
    1.001933 71%,
    1.001595 72%,
    1.001293 73%,
    1.001024 74%,
    1.000786 75%,
    1.000578 76%,
    1.000396 77%,
    1.000238 78%,
    1.000103 79%,
    0.999989 80%
  );

  padding-top: 30px;
  padding-bottom: 70px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  li:not(:last-child) {
    position: relative;
    border-bottom: 2px dotted
      ${({theme:e})=>(0,r.gridColorSelector)(e,"major")};
  }

  li a {
    color: ${({theme:e})=>e.palette.fgLoud};
    text-decoration: none;
    border: 0;
    padding: 16px 0 12px 0;
    display: block;
    font-size: ${(0,U.generateFluidFontSize)(16,20)};
  }

  a:hover {
    background: transparent;
  }

  @media (hover: hover) {
    li:hover {
      ${er} {
        transform: translateX(48px);
      }
      ${ea} {
        opacity: 1;
        transform: translate(0, -50%);
      }
    }
  }

  li:has(:focus-visible) {
    a {
      outline: 0;
      background: ${({theme:e})=>e.palette.fgA500};
    }

    ${er} {
      transform: translateX(48px);
    }
    ${ea} {
      opacity: 1;
      transform: translate(0, -50%);
    }
  }
`,el=n.default.div.withConfig({displayName:"Hero__Section",componentId:"sc-a9e02eb-5"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,ec=n.default.li.withConfig({displayName:"Hero__Li",componentId:"sc-a9e02eb-6"})`
  position: relative;
`,eh=n.default.a.withConfig({displayName:"Hero__SectionHeader",componentId:"sc-a9e02eb-7"})`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px 0 16px 0;
  color: ${({theme:e})=>e.fontColor.DEFAULT};
  font-family: ${({theme:e})=>e.fontFamily.MONO};
  font-size: 14px;
  letter-spacing: 0.05em;

  svg {
    width: 16px;
    height: 16px;
    opacity: 0.6;
  }
`;function ep(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(en,{children:[(0,t.jsx)(eo,{className:y.headingStyles.h1,children:"Switching to Hex"}),(0,t.jsx)(W.Text,{size:"large",children:"From fragmented tools to a unified, AI analytics platform: a guide to getting started on agentic analytics with Hex, from pitch to evaluation to migration."})]}),(0,t.jsx)(ed,{children:E.map(e=>(0,t.jsxs)(el,{children:[(0,t.jsxs)(eh,{href:`#${e.id}`,children:[e.title,(0,t.jsx)(w,{})]}),(0,t.jsx)("ul",{children:e.subsections.map(({id:e,title:i})=>(0,t.jsxs)(ec,{children:[(0,t.jsx)(es,{}),(0,t.jsx)("a",{className:y.headingStyles.h4,href:`#${e}`,children:(0,t.jsx)(er,{children:i})})]},e))})]},e.id))})]})}let eu=n.default.div.withConfig({displayName:"RightAnnotation__Mask",componentId:"sc-7b9c19b1-0"})`
  mask-image: linear-gradient(
    to bottom,
    rgba(0 0 0 / 0.6) 12px,
    rgba(0 0 0 / 0) 80px
  );
`,eg=n.default.span.withConfig({displayName:"RightAnnotation__Annotation",componentId:"sc-7b9c19b1-1"})`
  display: block;
  font-size: ${({theme:e})=>e.fontSize.EXTRA_SMALL};
  text-align: right;
  text-transform: uppercase;
`;function ex(){return(0,t.jsxs)(eu,{children:[(0,t.jsx)(eg,{className:y.textStyles.annotation,children:"Yours truly ↴"}),(0,t.jsx)(eg,{className:y.textStyles.annotation,children:"the data team"}),(0,t.jsx)(eg,{className:y.textStyles.annotation,children:"xoxo"})]})}function em({id:e,title:i,cta:n,content:o}){return(0,t.jsxs)(O.Section,{id:e,children:[(0,t.jsxs)(O.Heading,{children:[(0,t.jsx)(O.SubSectionTitle,{children:i}),n&&(0,t.jsx)(O.Button,{link:n.link,text:n.text})]}),(0,t.jsx)(O.Content,{children:o.map((e,i)=>(0,t.jsx)(l.Fragment,{children:e},i))})]})}let ef=(0,n.default)(d.LayoutSubgrid).withConfig({displayName:"SwitchingToHexPageContent__StyledLayoutSubgrid",componentId:"sc-4d0e41e4-0"})`
  background-color: ${({theme:e})=>e.palette.bg500};
  background-image: ${({theme:e})=>{let t=(0,i.lighten)(.025,e.palette.bg500),n=e.palette.bg300;return`linear-gradient(155deg, ${n} 10%, ${t} 50%, ${t} calc(50% + 16px), ${n} 90%)`}};
  background-attachment: fixed;
`,eb=n.default.div.withConfig({displayName:"SwitchingToHexPageContent__FeaturesPosition",componentId:"sc-4d0e41e4-1"})`
  position: absolute;
  top: 12px;
  left: 12px;
`,ey=n.default.div.withConfig({displayName:"SwitchingToHexPageContent__RightAnnotationPosition",componentId:"sc-4d0e41e4-2"})`
  position: absolute;
  bottom: 12px;
  right: 12px;
`,ew=(0,n.default)(d.LayoutSubgrid).withConfig({displayName:"SwitchingToHexPageContent__LayoutSubgridWithBorderBottom",componentId:"sc-4d0e41e4-3"})`
  padding-bottom: 80px;
  gap: 50px;

  @media (max-width: ${({theme:e})=>e.mediaQuery.SMALL}) {
    display: flex;
    flex-direction: column;
  }
`,ej=n.default.div.withConfig({displayName:"SwitchingToHexPageContent__DocumentLayoutInner",componentId:"sc-4d0e41e4-4"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
`,ev=(0,n.default)(a.GradientHeader).withConfig({displayName:"SwitchingToHexPageContent__SectionHeader",componentId:"sc-4d0e41e4-5"})`
  padding-right: 70px;
`;e.s(["SwitchingToHexPageContent",0,function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ef,{children:[(0,t.jsx)(r.CheckeredContentMargin,{}),(0,t.jsxs)(ew,{"data-content-grid":!0,children:[(0,t.jsx)(ee,{}),(0,t.jsxs)(et,{borderBottom:!0,borderTop:!0,children:[(0,t.jsx)(eb,{children:(0,t.jsx)(F,{})}),(0,t.jsx)(H,{}),(0,t.jsx)(ep,{})]}),E.map((e,i)=>(0,t.jsxs)(et,{borderBottom:!0,borderTop:!0,id:e.id,withTopPadding:!0,children:[(0,t.jsx)(H,{sectionId:e.id}),(0,t.jsxs)(ej,{children:[(0,t.jsx)(ev,{$alignText:"left",renderAs:"h2",styleAs:"h1",children:e.title}),e.subsections.map(e=>(0,t.jsx)(em,{content:e.content,cta:e.cta,id:e.id,title:e.title},e.id))]}),i===E.length-1&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{style:{height:"80px"}}),(0,t.jsx)(ey,{children:(0,t.jsx)(ex,{})})]})]},e.id))]}),(0,t.jsx)(r.CheckeredContentMargin,{"data-right":!0})]}),(0,t.jsx)(s.BasicPageRow,{fullWidth:!0,topBorder:!0,children:(0,t.jsx)(o.CustomerQuotesScrollingTout,{customerQuotes:q})})]})}],242001)}]);