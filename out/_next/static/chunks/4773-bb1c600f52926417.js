"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4773],{44773:function(e,n,t){t.r(n);var i=t(14924),l=t(26042),r=t(69396),o=t(85893),a=t(34753),d=t(2734),s=t(66242),u=t(78445),c=t(87357),h=t(50135),x=t(94054),v=t(47312),p=t(80788),m=t(30431),Z=t(67720),j=t(72882),f=t(7906),g=t(53184),b=t(53816),y=t(53252),E=t(295),w=t(69661),W=t(15861),C=t(47171),P=t(41664),D=t.n(P),A=t(45697),N=t.n(A),R=t(67294),S=t(9473),O=t(61692),I=t.n(O),k=t(5678),_=function(e){var n="NOT_RECIEVED";return e.documents.map((function(e){e.title.includes("demat")&&(n=e.status)})),n},T=function(e){var n=[],t=0;return e.map((function(e){e.title.includes("project")&&e.status===a.Z.status.APPROVED&&(n.push(e.amount),t+=e.amount)})),t},L=function(e){var n=0;return e.find((function(e){return e.title.includes("hajipur")&&e.status===a.Z.status.APPROVED}))&&(n+=1),e.find((function(e){return e.title.includes("agra")&&e.status===a.Z.status.APPROVED}))&&(n+=1),n},V=function(){var e=(0,d.Z)(),n=(0,R.useState)((0,S.v9)((function(e){return e.allUsers.allTheUsers}))),t=n[0],a=n[1],P=(0,R.useState)(!0),A=P[0],N=P[1],O=(0,R.useState)(!0),V=O[0],B=O[1],G=(0,R.useState)(0),H=G[0],J=G[1],U=(0,R.useState)(20),K=U[0],M=U[1],Y=(0,R.useState)(""),q=Y[0],z=Y[1],F=(0,k.Nr)(q,400),Q=(0,R.useState)({}),X=Q[0],$=Q[1],ee=function(e){var n,t="";return null===e||void 0===e||null===(n=e.documents)||void 0===n||n.forEach((function(e){"avatar"===e.title&&(t=e.url)})),t},ne=function(e,n,t){var i=t.toLowerCase();return e.filter((function(e){var t,l,r,o,a,d=!0;return(null===e||void 0===e||null===(t=e.name)||void 0===t?void 0:t.toLowerCase().includes(i))||(null===e||void 0===e||null===(l=e.rm_id)||void 0===l?void 0:l.toLowerCase().includes(i))||(null===e||void 0===e||null===(r=e.email)||void 0===r?void 0:r.toLowerCase().includes(i))||(null===e||void 0===e||null===(o=e.mobile_number)||void 0===o?void 0:o.toLowerCase().includes(i))||(null===e||void 0===e||null===(a=e.pw_id)||void 0===a?void 0:a.toLowerCase().includes(i))||(d=!1),n.status&&(null===e||void 0===e?void 0:e.kyc)!==n.status&&(d=!1),n.membership&&(null===e||void 0===e?void 0:e.membership)!==n.membership&&(d=!1),n.demat&&_(e)!==n.demat&&(d=!1),d}))}(t,X,F),te=function(e,n,t){return e.slice(n*t,n*t+t)}(ne,H,K);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(s.Z,{children:[(0,o.jsx)(u.Z,{sx:(0,i.Z)({},e.breakpoints.down("sm"),{display:"flex",flexDirection:"column"}),action:(0,o.jsxs)(c.Z,{display:"flex",gap:"20px",sx:(0,i.Z)({},e.breakpoints.down("sm"),{flexDirection:"column"}),children:[(0,o.jsx)(c.Z,{display:"flex",gap:"10px",children:(0,o.jsx)(h.Z,{fullWidth:!0,label:"Search",variant:"outlined",value:q,onChange:function(e){z(e.target.value)}})}),(0,o.jsxs)(c.Z,{sx:(0,i.Z)({display:"flex",flexDirection:"row",gap:"10px"},e.breakpoints.down("sm"),{justifyContent:"space-between"}),children:[(0,o.jsx)(c.Z,{width:"120px",children:(0,o.jsxs)(x.Z,{fullWidth:!0,variant:"outlined",children:[(0,o.jsx)(v.Z,{children:"Share Holder Type"}),(0,o.jsx)(p.Z,{value:X.membership||"all",onChange:function(e){var n=null;"all"!==e.target.value&&(n=e.target.value),$((function(e){return(0,r.Z)((0,l.Z)({},e),{membership:n})}))},label:"Share Holder Type",autoWidth:!0,children:[{id:"all",name:"All"},{id:"BASIC",name:"Basic"},{id:"ADVANCE",name:"Advance"}].map((function(e){return(0,o.jsx)(m.Z,{value:e.id,children:e.name},e.id)}))})]})}),(0,o.jsx)(c.Z,{width:"120px",children:(0,o.jsxs)(x.Z,{fullWidth:!0,variant:"outlined",children:[(0,o.jsx)(v.Z,{children:"KYC Status"}),(0,o.jsx)(p.Z,{value:X.status||"all",onChange:function(e){var n=null;"all"!==e.target.value&&(n=e.target.value),$((function(e){return(0,r.Z)((0,l.Z)({},e),{status:n})}))},label:"Status",autoWidth:!0,children:[{id:"all",name:"All"},{id:"NOT_INITIALIZED",name:"Not Initialized"},{id:"REJECTED",name:"Rejected"},{id:"ONGOING",name:"Ongoing"},{id:"APPROVED",name:"Approved"}].map((function(e){return(0,o.jsx)(m.Z,{value:e.id,children:e.name},e.id)}))})]})}),(0,o.jsx)(c.Z,{width:"120px",children:(0,o.jsxs)(x.Z,{fullWidth:!0,variant:"outlined",children:[(0,o.jsx)(v.Z,{children:"Demat Status"}),(0,o.jsx)(p.Z,{sx:{bgcolor:X.demat&&"#8c7cf040"},value:X.demat||"all",onChange:function(e){var n=null;"all"!==e.target.value&&(n=e.target.value),$((function(e){return(0,r.Z)((0,l.Z)({},e),{demat:n})}))},label:"Deat",autoWidth:!0,children:[{id:"all",name:"All"},{id:"NOT_RECIEVED",name:"Not Recieved"},{id:"REJECTED",name:"Rejected"},{id:"PENDING",name:"Pending"},{id:"APPROVED",name:"Approved"}].map((function(e){return(0,o.jsx)(m.Z,{value:e.id,children:e.name},e.id)}))})]})})]})]}),title:"Users List"}),(0,o.jsx)(Z.Z,{}),(0,o.jsx)(j.Z,{children:(0,o.jsxs)(f.Z,{children:[(0,o.jsx)(g.Z,{children:(0,o.jsxs)(b.Z,{children:[(0,o.jsx)(y.Z,{children:"Photo"}),(0,o.jsxs)(y.Z,{sx:{cursor:"pointer"},onClick:function(){var e="desc";A&&(e="");var n=I()(t,"name",{order:e});a(n),N(!A)},children:["Name",A?"\u2b07":"\u2b06"]}),(0,o.jsxs)(y.Z,{sx:{cursor:"pointer"},onClick:function(){var e="desc";V&&(e="");var n=I()(t,"pw_id",{order:e});a(n),B(!V)},children:["PWID",V?"\u2b07":"\u2b06"]}),(0,o.jsx)(y.Z,{children:"RMID"}),(0,o.jsx)(y.Z,{children:"KYC Status"}),(0,o.jsx)(y.Z,{children:"Projects Enrolled"}),(0,o.jsx)(y.Z,{children:"Project Enrolled Amount"}),(0,o.jsx)(y.Z,{children:"Demat Status"}),(0,o.jsx)(y.Z,{children:"Share Holder Type"}),(0,o.jsx)(y.Z,{children:"Mobile No."}),(0,o.jsx)(y.Z,{children:"Email"})]})}),(0,o.jsx)(E.Z,{children:te.map((function(e){return(0,o.jsx)(D(),{href:"agency/"+(null===e||void 0===e?void 0:e.id),children:(0,o.jsxs)(b.Z,{hover:!0,sx:{cursor:"pointer"},children:[(0,o.jsx)(y.Z,{children:(0,o.jsx)(w.Z,{alt:"Avatar",src:"".concat(ee(e))})}),(0,o.jsx)(y.Z,{children:(0,o.jsx)(W.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",width:"120px",gutterBottom:!0,noWrap:!0,children:null===e||void 0===e?void 0:e.name})}),(0,o.jsx)(y.Z,{align:"left",children:(0,o.jsx)(W.Z,{variant:"body1",width:"100px",fontWeight:"bold",color:"text.primary",noWrap:!0,children:null===e||void 0===e?void 0:e.pw_id})}),(0,o.jsx)(y.Z,{align:"left",children:(0,o.jsx)(W.Z,{width:"120px",variant:"body1",fontWeight:"bold",color:"text.primary",noWrap:!0,children:null===e||void 0===e?void 0:e.rm_id})}),(0,o.jsx)(y.Z,{children:(0,o.jsx)(W.Z,{style:{color:"APPROVED"===(null===e||void 0===e?void 0:e.kyc)?"green":"REJECTED"===(null===e||void 0===e?void 0:e.kyc)?"red":"ONGOING"===(null===e||void 0===e?void 0:e.kyc)?"orange":"white"},variant:"body1",fontWeight:"bold",width:"150px",color:"text.success",gutterBottom:!0,noWrap:!0,children:null===e||void 0===e?void 0:e.kyc})}),(0,o.jsx)(y.Z,{align:"left",children:(0,o.jsx)(W.Z,{width:"120px",variant:"body1",fontWeight:"bold",color:"text.primary",noWrap:!0,children:L(e.documents)})}),(0,o.jsx)(y.Z,{align:"left",children:(0,o.jsx)(W.Z,{width:"120px",variant:"body1",fontWeight:"bold",color:"text.primary",noWrap:!0,children:T(e.documents)})}),(0,o.jsx)(y.Z,{align:"left",children:(0,o.jsx)(W.Z,{width:"120px",variant:"body1",fontWeight:"bold",color:"text.primary",noWrap:!0,children:_(e)||(0,o.jsx)("span",{style:{color:"red"},children:"NOT RECIEVED"})})}),(0,o.jsx)(y.Z,{align:"left",children:(0,o.jsx)(W.Z,{variant:"body1",textAlign:"center",fontWeight:"bold",color:"text.primary",gutterBottom:!0,width:"150px",noWrap:!0,children:null===e||void 0===e?void 0:e.membership})}),(0,o.jsx)(y.Z,{align:"left",children:(0,o.jsx)(W.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,width:"100px",noWrap:!0,children:null===e||void 0===e?void 0:e.mobile_number})}),(0,o.jsx)(y.Z,{align:"left",children:(0,o.jsx)(W.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:null===e||void 0===e?void 0:e.email})})]},null===e||void 0===e?void 0:e.id)})}))})]})}),(0,o.jsx)(c.Z,{p:2,children:(0,o.jsx)(C.Z,{component:"div",count:ne.length,onPageChange:function(e,n){J(n)},onRowsPerPageChange:function(e){M(parseInt(e.target.value))},page:H,rowsPerPage:K,rowsPerPageOptions:[5,20,50,200]})})]})})};V.propTypes={usersList:N().array.isRequired},V.defaultProps={usersList:[]},n.default=V}}]);