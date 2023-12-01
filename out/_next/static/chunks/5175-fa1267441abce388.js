"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5175],{75175:function(e,t,n){n.r(t);var i=n(14924),r=n(26042),l=n(69396),o=n(828),a=n(85893),d=n(98396),s=n(2734),c=n(66242),u=n(87357),h=n(11057),x=n(78445),v=n(94054),j=n(47312),p=n(80788),Z=n(30431),m=n(67720),f=n(26447),g=n(10633),y=n(72882),b=n(7906),S=n(53184),W=n(53816),H=n(53252),B=n(295),E=n(15861),A=n(45697),T=n.n(A),w=n(67294),R=n(4749),N=n(22628),k=n(37887),C=n(73359),D=n(86501),I=n(9473),O=function(e,t){return e.filter((function(e){var n=!0;return((null===t||void 0===t?void 0:t.status)&&(null===e||void 0===e?void 0:e.status))!==t.status&&(n=!1),n}))},L=function(){var e=(0,d.Z)("(min-width:600px)"),t=(0,s.Z)(),n=(0,w.useRef)(null),A=(0,w.useState)(0),T=A[0],L=A[1],P=(0,w.useState)(1),_=P[0],U=P[1],F=(0,w.useState)(100),M=F[0],V=F[1],Y=(0,w.useState)(""),q=Y[0],J=Y[1],Q=(0,w.useState)("totalShareHolder"),$=Q[0],z=Q[1],G=(0,w.useState)(""),K=(G[0],G[1]),X=(0,k.a)(R.cC,{variables:{skip:T*M,take:M}}),ee=(0,k.a)(R.Q$,{variables:{skip:T*M,take:M,input:{searchMembership:$.includes("totalAdvance")?"ADVANCE":$.includes("totalBasic")?"BASIC":"ADVANCE"}}}),te=(0,k.a)(R.yt,{variables:{skip:T*M,take:M,input:{searchProject:$.includes("totalHajipur")&&"Hajipur"}}}),ne=(0,o.Z)((0,C.t)(R.Ay,{variables:{searchTerm:q}}),2),ie=ne[0],re=ne[1].data,le=(0,I.v9)((function(e){var t;return null===(t=e.allShareHolder)||void 0===t?void 0:t.allNumberShareHolder})),oe=(0,w.useState)([]),ae=(oe[0],oe[1]),de=(0,w.useState)([]),se=de[0],ce=de[1],ue=(0,w.useState)([]),he=ue[0],xe=ue[1],ve=(0,w.useState)([]),je=ve[0],pe=ve[1],Ze=(0,w.useState)({totalShareHolder:0,totalAdvance:0,totalBasic:0,totalHajipur:0}),me=Ze[0],fe=Ze[1];(0,w.useEffect)((function(){X.data&&(ce(X.data.TotalShareholders),X.data.TotalShareholders)}),[X]),(0,w.useEffect)((function(){ee.data&&(xe(ee.data.searchShareHolding),ee.data.searchShareHolding)}),[ee]),(0,w.useEffect)((function(){te.data&&(pe(te.data.searchShareHolding),te.data.searchShareHolding)}),[te]),(0,w.useEffect)((function(){fe({totalShareHolder:null===le||void 0===le?void 0:le.TotalShareholders,totalAdvance:null===le||void 0===le?void 0:le.TotalAdvanceShareHolder,totalBasic:null===le||void 0===le?void 0:le.TotalBasicShareHolder,totalHajipur:null===le||void 0===le?void 0:le.TotalHajipurShareHolder})}),[le]);var ge=(0,w.useState)({status:null}),ye=ge[0],be=ge[1];(0,w.useEffect)((function(){($.includes("totalShareHolder")||$.includes("totalAdvance")||$.includes("totalBasic"))&&ie()}),[q]),(0,w.useEffect)((function(){(null===re||void 0===re?void 0:re.searchUsers[0])&&(null===re||void 0===re?void 0:re.searchUsers[0])&&ae(re.searchUsers)}),[null===re||void 0===re?void 0:re.searchUsers]);var Se=O(se,ye),We=O(he,ye),He=O(je,ye);(0,w.useEffect)((function(){V(100),J(""),K(""),U(1),ye.status=null}),[$]);var Be=function(e){var t=null;"all"!==e?(t=e,V(5e3)):V(100),be((function(e){return(0,l.Z)((0,r.Z)({},e),{status:t})}))},Ee=-1;return se[0]?(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(c.Z,{children:[(0,a.jsx)(u.Z,{mx:2,sx:(0,i.Z)({display:"flex",justifyContent:"space-between"},t.breakpoints.down("sm"),{flexDirection:"column"}),children:(0,a.jsxs)(u.Z,{my:2,display:"flex",gap:2,sx:(0,i.Z)({},t.breakpoints.down("sm"),{display:"flex",flexDirection:"column"}),children:[(0,a.jsx)(h.Z,{variant:$.includes("totalShareHolder")?"contained":"outlined",sx:{textTransform:"uppercase",padding:2},onClick:function(){z("totalShareHolder"),Be("all")},children:"TOTAL SHARE HOLDER"}),(0,a.jsxs)(u.Z,{display:"flex",gap:2,sx:(0,i.Z)({},t.breakpoints.down("sm"),{display:"flex",flexDirection:"column"}),children:[(0,a.jsx)(h.Z,{variant:"totalBasic"===$?"contained":"outlined",onClick:function(){z("totalBasic")},children:"BASIC SHARE HOLDER"}),(0,a.jsx)(h.Z,{variant:"totalAdvance"===$?"contained":"outlined",onClick:function(){z("totalAdvance")},children:"30% NET PROFIT SHARE PARTNER"}),(0,a.jsx)(h.Z,{variant:"totalHajipur"===$?"contained":"outlined",onClick:function(){z("totalHajipur")},children:"HAJIPUR SHARE HOLDER"})]})]})}),(0,a.jsx)(x.Z,{sx:(0,i.Z)({},t.breakpoints.down("sm"),{width:"85vw"}),action:(0,a.jsx)(u.Z,{display:"flex",gap:"20px",sx:(0,i.Z)({},t.breakpoints.down("sm"),{flexDirection:"column-reverse"}),children:(0,a.jsx)(u.Z,{display:"flex",gap:"10px",sx:(0,i.Z)({width:"180px"},t.breakpoints.down("sm"),{flexDirection:"column",width:"50vw"}),children:(0,a.jsxs)(v.Z,{fullWidth:!0,variant:"outlined",children:[(0,a.jsx)(j.Z,{children:"Status"}),(0,a.jsx)(p.Z,{value:ye.status||"all",onChange:function(e){Be(e.target.value)},label:"Status",autoWidth:!0,children:[{id:"all",name:"All"},{id:"TRANSFERRED",name:"TRANSFERRED"},{id:"UNDER_PROCESS",name:"UNDER PROCESS"},{id:"NOT_ALLOTED_YET",name:"NOT ALLOTED YET"}].map((function(e){return(0,a.jsx)(Z.Z,{value:e.id,children:e.name},e.id)}))})]})})}),title:e?"SHARE HOLDER":""}),(0,a.jsx)(m.Z,{}),(0,a.jsx)(u.Z,{p:2,gap:2,display:"flex",justifyContent:"center",alignItems:"center",children:null===ye.status?(0,a.jsxs)(u.Z,{display:"flex",justifyContent:"center",alignItems:"center",children:[(0,a.jsx)(f.Z,{spacing:2,children:(0,a.jsx)(g.Z,{count:Math.ceil($.includes("totalShareHolder")&&me.totalShareHolder/M||$.includes("Advance")&&me.totalAdvance/M||$.includes("Basic")&&me.totalBasic/M||$.includes("Hajipur")&&me.totalHajipur/M),page:_,color:"primary",onChange:function(e,t){U(t),L(t-1),J(""),K("")}})}),(0,a.jsx)(u.Z,{width:80,display:"flex",gap:"10px",children:(0,a.jsxs)(v.Z,{fullWidth:!0,variant:"outlined",children:[(0,a.jsx)(j.Z,{children:"Rows"}),(0,a.jsxs)(p.Z,{value:M,onChange:function(e){5e3===e.target.value&&U(1),V(e.target.value)},label:"Rows",fullWidth:!0,children:[(0,a.jsx)(Z.Z,{value:20,children:"20"}),(0,a.jsx)(Z.Z,{value:100,children:"100"}),(0,a.jsx)(Z.Z,{value:5e3,children:"All"})]})]})})]}):(0,a.jsxs)(a.Fragment,{children:[$.includes("totalShareHolder")&&(0,a.jsxs)(u.Z,{fontWeight:"bold",color:"text.primary",children:["Number of Share Holders: ",Se.length]}),($.includes("totalAdvance")||$.includes("totalBasic"))&&(0,a.jsxs)(u.Z,{fontWeight:"bold",color:"text.primary",children:["Number of Share Holders: ",We.length]}),$.includes("totalHajipur")&&(0,a.jsxs)(u.Z,{fontWeight:"bold",color:"text.primary",children:["Number of Share Holders: ",He.length]})]})}),$.includes("totalShareHolder")&&(0,a.jsx)(y.Z,{children:(0,a.jsxs)(b.Z,{ref:n,children:[(0,a.jsx)(S.Z,{children:(0,a.jsxs)(W.Z,{children:[(0,a.jsx)(H.Z,{children:"S.No."}),(0,a.jsx)(H.Z,{children:"PW ID"}),(0,a.jsx)(H.Z,{children:"Name"}),(0,a.jsx)(H.Z,{align:"center",children:"Membership "}),(0,a.jsx)(H.Z,{align:"center",children:"Investment Type"}),(0,a.jsx)(H.Z,{align:"center",children:"Status"}),(0,a.jsx)(H.Z,{align:"center",children:"Shares"})]})}),(0,a.jsx)(B.Z,{children:null===Se||void 0===Se?void 0:Se.map((function(e){var t,n,i;if(e)return Ee+=1,(0,a.jsxs)(W.Z,{hover:!0,children:[(0,a.jsx)(H.Z,{children:(0,a.jsx)(E.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,align:"center",noWrap:!0,width:30,children:Ee+1})}),(0,a.jsxs)(H.Z,{children:[(0,a.jsx)(E.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,width:100,children:null===e||void 0===e||null===(t=e.user)||void 0===t?void 0:t.pw_id}),(0,a.jsx)(E.Z,{variant:"body2",color:"text.secondary",noWrap:!0})]}),(0,a.jsx)(H.Z,{children:(0,a.jsx)(E.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,minWidth:150,children:null===e||void 0===e||null===(n=e.user)||void 0===n?void 0:n.name})}),(0,a.jsx)(H.Z,{align:"center",children:(0,a.jsx)(E.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:null===e||void 0===e||null===(i=e.user)||void 0===i?void 0:i.membership})}),(0,a.jsx)(H.Z,{align:"center",children:(0,a.jsx)(E.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:null===e||void 0===e?void 0:e.InvestmentType})}),(0,a.jsx)(H.Z,{align:"center",children:(0,a.jsx)(E.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:null===e||void 0===e?void 0:e.status})}),(0,a.jsx)(H.Z,{align:"center",children:(0,a.jsx)(E.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:null===e||void 0===e?void 0:e.allotedShare})})]},null===e||void 0===e?void 0:e.id)}))})]})}),($.includes("totalAdvance")||$.includes("totalBasic"))&&(0,a.jsx)(y.Z,{children:(0,a.jsxs)(b.Z,{ref:n,children:[(0,a.jsx)(S.Z,{children:(0,a.jsxs)(W.Z,{children:[(0,a.jsx)(H.Z,{children:"S.No."}),(0,a.jsx)(H.Z,{children:"PW ID"}),(0,a.jsx)(H.Z,{children:"Name"}),(0,a.jsx)(H.Z,{align:"center",children:"Membership "}),(0,a.jsx)(H.Z,{align:"center",children:"Investment Type"}),(0,a.jsx)(H.Z,{align:"center",children:"Status"}),(0,a.jsx)(H.Z,{align:"center",children:"Shares"})]})}),(0,a.jsx)(B.Z,{children:We.map((function(e){var t,n,i;if(e)return Ee+=1,(0,a.jsxs)(W.Z,{hover:!0,children:[(0,a.jsx)(H.Z,{children:(0,a.jsx)(E.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,align:"center",noWrap:!0,width:30,children:Ee+1})}),(0,a.jsxs)(H.Z,{children:[(0,a.jsx)(E.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,width:100,children:null===e||void 0===e||null===(t=e.user)||void 0===t?void 0:t.pw_id}),(0,a.jsx)(E.Z,{variant:"body2",color:"text.secondary",noWrap:!0})]}),(0,a.jsx)(H.Z,{children:(0,a.jsx)(E.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,minWidth:150,children:null===e||void 0===e||null===(n=e.user)||void 0===n?void 0:n.name})}),(0,a.jsx)(H.Z,{align:"center",children:(0,a.jsx)(E.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:null===e||void 0===e||null===(i=e.user)||void 0===i?void 0:i.membership})}),(0,a.jsx)(H.Z,{align:"center",children:(0,a.jsx)(E.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:null===e||void 0===e?void 0:e.InvestmentType})}),(0,a.jsx)(H.Z,{align:"center",children:(0,a.jsx)(E.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:null===e||void 0===e?void 0:e.status})}),(0,a.jsx)(H.Z,{align:"center",children:(0,a.jsx)(E.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:null===e||void 0===e?void 0:e.allotedShare})})]},null===e||void 0===e?void 0:e.id)}))})]})}),$.includes("totalHajipur")&&(0,a.jsx)(y.Z,{children:(0,a.jsxs)(b.Z,{ref:n,children:[(0,a.jsx)(S.Z,{children:(0,a.jsxs)(W.Z,{children:[(0,a.jsx)(H.Z,{children:"S.No."}),(0,a.jsx)(H.Z,{children:"PW ID"}),(0,a.jsx)(H.Z,{children:"Name"}),(0,a.jsx)(H.Z,{align:"center",children:"Membership "}),(0,a.jsx)(H.Z,{align:"center",children:"Investment Type"}),(0,a.jsx)(H.Z,{align:"center",children:"Status"}),(0,a.jsx)(H.Z,{align:"center",children:"Shares"})]})}),(0,a.jsx)(B.Z,{children:null===He||void 0===He?void 0:He.map((function(e){var t,n,i;if(e)return Ee+=1,(0,a.jsxs)(W.Z,{hover:!0,children:[(0,a.jsx)(H.Z,{children:(0,a.jsx)(E.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,align:"center",noWrap:!0,width:30,children:Ee+1})}),(0,a.jsxs)(H.Z,{children:[(0,a.jsx)(E.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,width:100,children:null===e||void 0===e||null===(t=e.user)||void 0===t?void 0:t.pw_id}),(0,a.jsx)(E.Z,{variant:"body2",color:"text.secondary",noWrap:!0})]}),(0,a.jsx)(H.Z,{children:(0,a.jsx)(E.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,minWidth:150,children:null===e||void 0===e||null===(n=e.user)||void 0===n?void 0:n.name})}),(0,a.jsx)(H.Z,{align:"center",children:(0,a.jsx)(E.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:null===e||void 0===e||null===(i=e.user)||void 0===i?void 0:i.membership})}),(0,a.jsx)(H.Z,{align:"center",children:(0,a.jsx)(E.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:null===e||void 0===e?void 0:e.InvestmentType})}),(0,a.jsx)(H.Z,{align:"center",children:(0,a.jsx)(E.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:null===e||void 0===e?void 0:e.status})}),(0,a.jsx)(H.Z,{align:"center",children:(0,a.jsx)(E.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:null===e||void 0===e?void 0:e.allotedShare})})]},null===e||void 0===e?void 0:e.id)}))})]})}),(0,a.jsx)(D.x7,{position:"bottom-center",reverseOrder:!1})]})}):(0,a.jsx)(N.Z,{})};L.propTypes={totalShareUserList:T().array.isRequired},L.defaultProps={totalShareUserList:[]},t.default=L},22628:function(e,t,n){var i=n(7297),r=n(85893),l=(n(67294),n(90948));function o(){var e=(0,i.Z)(["\n  from { scale: 0.5; }\n  to { scale: 0.6; }\n  \n  \n"]);return o=function(){return e},e}var a=(0,n(70917).F4)(o()),d=(0,l.ZP)("div")({display:"flex",justifyContent:"center",height:"85vh",alignItems:"center",animation:"".concat(a," 1s  infinite")});t.Z=function(){return(0,r.jsx)(d,{children:(0,r.jsx)("img",{src:"/static/images/logo/logo.png"})})}}}]);