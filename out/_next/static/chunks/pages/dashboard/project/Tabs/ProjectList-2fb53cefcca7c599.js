(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7989],{64973:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/project/Tabs/ProjectList",function(){return t(71728)}])},71728:function(e,n,t){"use strict";t.r(n);var i=t(14924),o=t(26042),r=t(69396),s=t(85893),l=t(4749),a=t(22628),c=t(34753),d=t(37887),u=t(8987),p=t(2734),h=t(66242),f=t(87357),m=t(11057),x=t(67720),Z=t(78445),v=t(50135),A=t(72882),g=t(7906),E=t(53184),j=t(53816),C=t(53252),N=t(295),b=t(15861),I=t(6258),D=t(45697),w=t.n(D),T=t(67294),S=t(47082),R=t(9473),P=t(61692),O=t.n(P),y=t(5678),L=function(e){var n=e.title,t=(0,T.useState)(!0),D=t[0],w=t[1],P=(0,p.Z)(),L=(0,T.useRef)(null),B=(0,T.useState)(0),_=B[0],G=B[1],k=(0,T.useState)([]),W=k[0],V=k[1],H=(0,T.useState)(""),U=H[0],F=H[1],J=(0,R.v9)((function(e){return e.allUsers.totalNumbers})),M=(0,T.useState)({total:0,pending:0,completed:0}),K=M[0],Y=M[1],X=(0,T.useState)(20),q=X[0],$=X[1],z=(0,T.useState)(""),Q=z[0],ee=z[1],ne=(0,y.Nr)(Q,400),te=(0,d.a)(l.A2,{variables:{skip:0,take:5e3}});(0,T.useEffect)((function(){var e;(null===te||void 0===te||null===(e=te.data)||void 0===e?void 0:e.getAllUser)&&V(te.data.getAllUser)}),[te]);var ie=function(e,n){var t=[];return e.map((function(e){e.title.includes(n.toLowerCase())&&t.push(null===e||void 0===e?void 0:e.status)})),t.includes(c.Z.status.PENDING)||t.includes(c.Z.status.ONGOING)?c.Z.status.ONGOING:t.includes(c.Z.status.REJECTED)?c.Z.status.REJECTED:c.Z.status.APPROVED},oe=(0,T.useState)({status:null,membership:null}),re=oe[0],se=oe[1],le=function(e,t,i){var o=i.toLowerCase();return e.filter((function(e){var i,r,s=!0;return(null===e||void 0===e||null===(i=e.name)||void 0===i?void 0:i.toLowerCase().includes(o))||(null===e||void 0===e||null===(r=e.pw_id)||void 0===r?void 0:r.toLowerCase().includes(o))||(s=!1),e.role===c.Z.role.ADMIN&&(s=!1),(null===e||void 0===e?void 0:e.documents.find((function(e){return e.title.toLowerCase().includes(n.toLowerCase())})))||(s=!1),t.status&&ie(null===e||void 0===e?void 0:e.documents,n.toLowerCase())!==t.status&&(s=!1),(t.membership&&(null===e||void 0===e?void 0:e.membership))!==t.membership&&(s=!1),s}))}(W,re,ne),ae=function(e,n,t){return e.slice(n*t,n*t+t)}(le,_,q),ce=function(e){var n=null;"all"!==e&&(n=e),se((function(e){return(0,r.Z)((0,o.Z)({},e),{membership:n})}))},de=function(e){var n=null;"all"!==e&&(n=e),se((function(e){return(0,r.Z)((0,o.Z)({},e),{status:n})}))},ue=function(e){if(!e)return e;var n=RegExp("(?<!^).(?!$)","g");return e.replace(n,"*")};return(0,T.useEffect)((function(){!function(){var e=0,t=0;W.map((function(i){if(i.role!==c.Z.role.ADMIN){var o=0,r=0;null===i||void 0===i||i.documents.map((function(e){e.title.toLowerCase().includes(n.toLowerCase())&&1,!e.title.toLowerCase().includes(n.toLowerCase())||e.status!==c.Z.status.PENDING&&e.status!==c.Z.status.ONGOING&&e.status!==c.Z.status.NOT_INITIALIZED&&e.status!==c.Z.status.REJECTED||(o+=1),e.title.toLowerCase().includes(n.toLowerCase())&&e.status===c.Z.status.APPROVED&&(r+=1)})),o?e+=1:r&&(t+=1)}})),Y((0,r.Z)((0,o.Z)({},K),{pending:e,completed:t}))}()}),[W]),(0,T.useEffect)((function(){Y((function(e){return(0,r.Z)((0,o.Z)({},e),{total:J["total".concat(n,"Subscribers")]})}))}),[J]),W[0]?(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(h.Z,{sx:{mb:4},children:[(0,s.jsxs)(f.Z,{mx:2,children:[(0,s.jsxs)(f.Z,{my:2,display:"flex",gap:2,flexDirection:"column",children:[(0,s.jsx)(m.Z,{variant:U.includes("total")?"contained":"outlined",sx:(0,i.Z)({textTransform:"uppercase",width:"490px"},P.breakpoints.down("sm"),{width:"100%"}),onClick:function(){F((function(e){return e.includes("total")?"":"total"})),ce(""),de("all")},children:"Total Enrolled ".concat(n," : ").concat(K.total)}),U.includes("total")&&(0,s.jsxs)(f.Z,{display:"flex",gap:2,children:[(0,s.jsx)(m.Z,{variant:"totalAdvance"===U?"contained":"outlined",onClick:function(){F((function(e){return e.includes("totalAdvance")?"total":"totalAdvance"})),ce(c.Z.membership.ADVANCE)},children:"ADVANCE SHARE HOLDER LIST"}),(0,s.jsx)(m.Z,{variant:"totalBasic"===U?"contained":"outlined",onClick:function(){F((function(e){return e.includes("totalBasic")?"total":"totalBasic"})),ce(c.Z.membership.BASIC)},children:"BASIC SHARE HOLDER LIST"})]})]}),(0,s.jsxs)(f.Z,{my:2,display:"flex",gap:2,flexDirection:"column",children:[(0,s.jsx)(m.Z,{variant:U.includes("pending")?"contained":"outlined",sx:(0,i.Z)({textTransform:"uppercase",width:"490px"},P.breakpoints.down("sm"),{width:"100%"}),onClick:function(){F((function(e){return e.includes("pending")?"":"pending"})),ce(""),de(c.Z.status.ONGOING)},children:"".concat(n," pending  : ").concat(K.pending)}),U.includes("pending")&&(0,s.jsxs)(f.Z,{display:"flex",gap:2,children:[(0,s.jsx)(m.Z,{variant:"pendingAdvance"===U?"contained":"outlined",onClick:function(){F((function(e){return e.includes("pendingAdvance")?"pending":"pendingAdvance"})),ce(c.Z.membership.ADVANCE)},children:"ADVANCE SHARE HOLDER LIST"}),(0,s.jsx)(m.Z,{variant:"pendingBasic"===U?"contained":"outlined",onClick:function(){F((function(e){return e.includes("pendingBasic")?"pending":"pendingBasic"})),ce(c.Z.membership.BASIC)},children:"BASIC SHARE HOLDER LIST"})]})]}),(0,s.jsxs)(f.Z,{my:2,display:"flex",gap:2,flexDirection:"column",children:[(0,s.jsx)(m.Z,{variant:U.includes("completed")?"contained":"outlined",sx:(0,i.Z)({textTransform:"uppercase",width:"490px"},P.breakpoints.down("sm"),{width:"100%"}),onClick:function(){F((function(e){return e.includes("completed")?"":"completed"})),ce(""),de(c.Z.status.APPROVED)},children:"".concat(n," Completed  : ").concat(K.completed)}),U.includes("completed")&&(0,s.jsxs)(f.Z,{display:"flex",gap:2,children:[(0,s.jsx)(m.Z,{variant:"completedAdvance"===U?"contained":"outlined",onClick:function(){F((function(e){return e.includes("completedAdvance")?"completed":"completedAdvance"})),ce(c.Z.membership.ADVANCE)},children:"ADVANCE SHARE HOLDER LIST"}),(0,s.jsx)(m.Z,{variant:"completedBasic"===U?"contained":"outlined",onClick:function(){F((function(e){return e.includes("completedBasic")?"completed":"completedBasic"})),ce(c.Z.membership.BASIC)},children:"BASIC SHARE HOLDER LIST"})]})]})]}),(0,s.jsx)(x.Z,{}),(U.includes("Advance")||U.includes("Basic"))&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(Z.Z,{action:(0,s.jsx)(f.Z,{display:"flex",gap:"20px",children:(0,s.jsx)(f.Z,{width:480,display:"flex",gap:"10px",sx:(0,i.Z)({},P.breakpoints.down("sm"),{width:"100%"}),children:(0,s.jsx)(v.Z,{fullWidth:!0,label:"Search",variant:"outlined",value:Q,onChange:function(e){ee(e.target.value)}})})}),title:n.toUpperCase()+" LIST"}),(0,s.jsx)(x.Z,{})]}),(U.includes("Advance")||U.includes("Basic"))&&(0,s.jsx)(A.Z,{children:(0,s.jsxs)(g.Z,{ref:L,children:[(0,s.jsx)(E.Z,{children:(0,s.jsxs)(j.Z,{children:[(0,s.jsx)(C.Z,{children:"S.No."}),(0,s.jsxs)(C.Z,{sx:{cursor:"pointer"},onClick:function(){var e="desc";D&&(e="");var n=O()(W,"name",{order:e});V(n),w(!D)},children:["Name",D?"\u2b07":"\u2b06"]})," ",(0,s.jsx)(C.Z,{children:"Father's Name"}),(0,s.jsx)(C.Z,{children:"PW ID"}),(0,s.jsx)(C.Z,{children:"Share Holder Type"}),(0,s.jsx)(C.Z,{align:"center",children:"Moibile No."}),(0,s.jsx)(C.Z,{align:"center",children:"Enrollment Status"})]})}),(0,s.jsx)(N.Z,{children:ae.map((function(e,t){return(0,s.jsxs)(j.Z,{hover:!0,children:[(0,s.jsx)(C.Z,{children:(0,s.jsx)(b.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,align:"center",noWrap:!0,width:30,children:t+1})}),(0,s.jsx)(C.Z,{children:(0,s.jsx)(b.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,width:150,children:null===e||void 0===e?void 0:e.name})}),(0,s.jsx)(C.Z,{children:(0,s.jsx)(b.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,width:100,children:null===e||void 0===e?void 0:e.pw_id})}),(0,s.jsx)(C.Z,{align:"center",children:(0,s.jsx)(b.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,width:100,children:null===e||void 0===e?void 0:e.membership})}),(0,s.jsx)(C.Z,{children:(0,s.jsx)(b.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,width:100,noWrap:!0,children:ue(null===e||void 0===e?void 0:e.father_or_husband_name)})}),(0,s.jsx)(C.Z,{align:"center",children:(0,s.jsx)(b.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:ue(null===e||void 0===e?void 0:e.mobile_number)})}),(0,s.jsx)(C.Z,{align:"center",children:(0,s.jsx)(b.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:ie(null===e||void 0===e?void 0:e.documents,n)})})]},null===e||void 0===e?void 0:e.id)}))})]})}),(U.includes("Advance")||U.includes("Basic"))&&(0,s.jsxs)(f.Z,{p:2,gap:2,display:"flex",justifyContent:"flex-end",children:[(0,s.jsx)(I.Z,{component:"div",count:le.length,onPageChange:function(e,n){G(n)},onRowsPerPageChange:function(e){$(parseInt("All"===e.target.value?-1:e.target.value))},page:_,rowsPerPage:q,rowsPerPageOptions:[20,100,200,"All"]}),(0,s.jsx)(S.DownloadTableExcel,{filename:n?n+"_KYC":"PROJECT_KYC",sheet:n?n+"_KYC":"PROJECT_KYC",currentTableRef:L.current,children:(0,s.jsx)(u.Z,{variant:"contained",children:"Download"})})]})]})}):(0,s.jsx)(a.Z,{})};L.propTypes={usersList:w().array.isRequired},L.defaultProps={usersList:[]},n.default=L},22628:function(e,n,t){"use strict";var i=t(7297),o=t(85893),r=(t(67294),t(90948));function s(){var e=(0,i.Z)(["\n  from { scale: 0.5; }\n  to { scale: 0.6; }\n  \n  \n"]);return s=function(){return e},e}var l=(0,t(70917).F4)(s()),a=(0,r.ZP)("div")({display:"flex",justifyContent:"center",height:"85vh",alignItems:"center",animation:"".concat(l," 1s  infinite")});n.Z=function(){return(0,o.jsx)(a,{children:(0,o.jsx)("img",{src:"/static/images/logo/logo.png"})})}},34753:function(e,n){"use strict";n.Z={project:{AGRA:"agra",HAJIPUR:"hajipur"},role:{ADMIN:"ADMIN",AGENT:"AGENT",USER:"USER"},membership:{ADVANCE:"ADVANCE",BASIC:"BASIC"},status:{AGENT_APPROVED:"AGENT_APPROVED",APPROVED:"APPROVED",NOT_INITIALIZED:"NOT_INITIALIZED",ONGOING:"ONGOING",PENDING:"PENDING",REJECTED:"REJECTED",SUBMITTED:"SUBMITTED"},amount:{beforeFifteenthAugustBasicAmount:1e3,beforeFifteenthAugustAdvanceAmount:1e5,afterFifteenthAugustBasicAmount:2e3,afterFifteenthAugustAdvanceAmount:2e5}}}},function(e){e.O(0,[9774,8244,9990,9213,4753,6827,6549,7058,788,8584,2453,2174,7171,8496,3157,2888,179],(function(){return n=64973,e(e.s=n);var n}));var n=e.O();_N_E=n}]);