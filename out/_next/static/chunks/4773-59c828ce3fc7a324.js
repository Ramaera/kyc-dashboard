"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4773],{44773:function(e,n,t){t.r(n);var i=t(14924),l=t(26042),r=t(69396),o=t(85893),a=t(34753),d=t(89934),s=t(8987),u=t(2734),c=t(66242),h=t(78445),x=t(87357),v=t(50135),p=t(94054),m=t(47312),f=t(80788),Z=t(30431),j=t(67720),g=t(72882),b=t(7906),y=t(53184),E=t(53816),w=t(53252),C=t(295),W=t(15861),D=t(69661),P=t(6258),R=t(41664),N=t.n(R),A=t(45697),S=t.n(A),I=t(67294),O=t(47082),k=t(9473),T=t(61692),_=t.n(T),L=t(5678),V=function(e){var n="NOT_RECIEVED";return e.documents.map((function(e){e.title.includes("demat")&&(n=e.status)})),n},B=function(e){var n=[],t=0;return e.map((function(e){e.title.includes("project")&&e.status===a.Z.status.APPROVED&&(n.push(e.amount),t+=e.amount)})),t},G=function(e){var n=0;return e.find((function(e){return e.title.includes("hajipur")&&e.status===a.Z.status.APPROVED}))&&(n+=1),e.find((function(e){return e.title.includes("agra")&&e.status===a.Z.status.APPROVED}))&&(n+=1),n},U=function(){var e=(0,k.v9)((function(e){return e.filters.agencyUsersFilters})),n=(0,k.I0)(),t=((0,I.useRef)(null),(0,I.useRef)(null)),a=(0,u.Z)(),R=(0,I.useState)((0,k.v9)((function(e){return e.allUsers.allTheUsers}))),A=R[0],S=R[1],T=(0,I.useState)(!0),U=T[0],F=T[1],H=(0,I.useState)(!0),J=H[0],K=H[1],M=(0,I.useState)(0),Y=M[0],q=M[1],z=(0,I.useState)(20),X=z[0],Q=z[1],$=(0,I.useState)(""),ee=$[0],ne=$[1],te=(0,L.Nr)(ee,400),ie=(0,I.useState)({}),le=ie[0],re=ie[1],oe=function(e){var n,t="";return null===e||void 0===e||null===(n=e.documents)||void 0===n||n.forEach((function(e){"avatar"===e.title&&(t=e.url)})),t},ae=function(e,n,t){var i=t.toLowerCase();return e.filter((function(e){var t,l,r,o,a,d=!0;return(null===e||void 0===e||null===(t=e.name)||void 0===t?void 0:t.toLowerCase().includes(i))||(null===e||void 0===e||null===(l=e.rm_id)||void 0===l?void 0:l.toLowerCase().includes(i))||(null===e||void 0===e||null===(r=e.email)||void 0===r?void 0:r.toLowerCase().includes(i))||(null===e||void 0===e||null===(o=e.mobile_number)||void 0===o?void 0:o.toLowerCase().includes(i))||(null===e||void 0===e||null===(a=e.pw_id)||void 0===a?void 0:a.toLowerCase().includes(i))||(d=!1),n.status&&(null===e||void 0===e?void 0:e.kyc)!==n.status&&(d=!1),n.membership&&(null===e||void 0===e?void 0:e.membership)!==n.membership&&(d=!1),n.demat&&V(e)!==n.demat&&(d=!1),d}))}(A,le,te),de=function(e,n,t){return e.slice(n*t,n*t+t)}(ae,Y,X);return(0,I.useEffect)((function(){re(e)}),[]),(0,I.useEffect)((function(){n((0,d.bX)(le))}),[le]),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(c.Z,{children:[(0,o.jsx)(h.Z,{sx:(0,i.Z)({},a.breakpoints.down("sm"),{display:"flex",flexDirection:"column"}),action:(0,o.jsxs)(x.Z,{display:"flex",gap:"20px",sx:(0,i.Z)({},a.breakpoints.down("sm"),{flexDirection:"column"}),children:[(0,o.jsx)(x.Z,{display:"flex",gap:"10px",children:(0,o.jsx)(v.Z,{fullWidth:!0,label:"Search",variant:"outlined",value:ee,onChange:function(e){ne(e.target.value)}})}),(0,o.jsx)(x.Z,{children:(0,o.jsx)(s.Z,{sx:{py:"14px"},variant:"contained",disabled:!(null===le||void 0===le?void 0:le.membership)&&!(null===le||void 0===le?void 0:le.status)&&!(null===le||void 0===le?void 0:le.demat),onClick:function(){re({})},children:"Clear Filters"})}),(0,o.jsxs)(x.Z,{sx:(0,i.Z)({display:"flex",flexDirection:"row",gap:"10px"},a.breakpoints.down("sm"),{justifyContent:"space-between"}),children:[(0,o.jsx)(x.Z,{width:"120px",children:(0,o.jsxs)(p.Z,{fullWidth:!0,variant:"outlined",children:[(0,o.jsx)(m.Z,{children:"Share Holder Type"}),(0,o.jsx)(f.Z,{value:le.membership||"all",onChange:function(e){var n=null;"all"!==e.target.value&&(n=e.target.value),re((function(e){return(0,r.Z)((0,l.Z)({},e),{membership:n})}))},label:"Share Holder Type",autoWidth:!0,children:[{id:"all",name:"All"},{id:"BASIC",name:"Basic"},{id:"ADVANCE",name:"Advance"}].map((function(e){return(0,o.jsx)(Z.Z,{value:e.id,children:e.name},e.id)}))})]})}),(0,o.jsx)(x.Z,{width:"120px",children:(0,o.jsxs)(p.Z,{fullWidth:!0,variant:"outlined",children:[(0,o.jsx)(m.Z,{children:"KYC Status"}),(0,o.jsx)(f.Z,{value:le.status||"all",onChange:function(e){var n=null;"all"!==e.target.value&&(n=e.target.value),re((function(e){return(0,r.Z)((0,l.Z)({},e),{status:n})}))},label:"Status",autoWidth:!0,children:[{id:"all",name:"All"},{id:"NOT_INITIALIZED",name:"Not Initialized"},{id:"REJECTED",name:"Rejected"},{id:"ONGOING",name:"Ongoing"},{id:"APPROVED",name:"Approved"}].map((function(e){return(0,o.jsx)(Z.Z,{value:e.id,children:e.name},e.id)}))})]})}),(0,o.jsx)(x.Z,{width:"120px",children:(0,o.jsxs)(p.Z,{fullWidth:!0,variant:"outlined",children:[(0,o.jsx)(m.Z,{children:"Demat Status"}),(0,o.jsx)(f.Z,{sx:{bgcolor:le.demat&&"#8c7cf040"},value:le.demat||"all",onChange:function(e){var n=null;"all"!==e.target.value&&(n=e.target.value),re((function(e){return(0,r.Z)((0,l.Z)({},e),{demat:n})}))},label:"Deat",autoWidth:!0,children:[{id:"all",name:"All"},{id:"NOT_RECIEVED",name:"Not Recieved"},{id:"REJECTED",name:"Rejected"},{id:"PENDING",name:"Pending"},{id:"APPROVED",name:"Approved"}].map((function(e){return(0,o.jsx)(Z.Z,{value:e.id,children:e.name},e.id)}))})]})})]})]}),title:"Users List"}),(0,o.jsx)(j.Z,{}),(0,o.jsx)(g.Z,{children:(0,o.jsxs)(b.Z,{ref:t,children:[(0,o.jsx)(y.Z,{children:(0,o.jsxs)(E.Z,{children:[(0,o.jsx)(w.Z,{children:"S.No."}),(0,o.jsx)(w.Z,{children:"Photo"}),(0,o.jsxs)(w.Z,{sx:{cursor:"pointer"},onClick:function(){var e="desc";U&&(e="");var n=_()(A,"name",{order:e});S(n),F(!U)},children:["Name",U?"\u2b07":"\u2b06"]}),(0,o.jsxs)(w.Z,{sx:{cursor:"pointer"},onClick:function(){var e="desc";J&&(e="");var n=_()(A,"pw_id",{order:e});S(n),K(!J)},children:["PWID",J?"\u2b07":"\u2b06"]}),(0,o.jsx)(w.Z,{children:"RMID"}),(0,o.jsx)(w.Z,{children:"KYC Status"}),(0,o.jsx)(w.Z,{children:"Projects Enrolled"}),(0,o.jsx)(w.Z,{children:"Project Enrolled Amount"}),(0,o.jsx)(w.Z,{children:"Demat Status"}),(0,o.jsx)(w.Z,{children:"Share Holder Type"}),(0,o.jsx)(w.Z,{children:"Mobile No."}),(0,o.jsx)(w.Z,{children:"Email"})]})}),(0,o.jsx)(C.Z,{children:de.map((function(e,n){return(0,o.jsx)(N(),{href:"agency/"+(null===e||void 0===e?void 0:e.id),children:(0,o.jsxs)(E.Z,{hover:!0,sx:{cursor:"pointer"},children:[(0,o.jsx)(w.Z,{children:(0,o.jsx)(W.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,align:"center",noWrap:!0,width:30,children:n+1})}),(0,o.jsx)(w.Z,{children:(0,o.jsx)(D.Z,{alt:"Avatar",src:"".concat(oe(e))})}),(0,o.jsx)(w.Z,{children:(0,o.jsx)(W.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",width:"120px",gutterBottom:!0,noWrap:!0,children:null===e||void 0===e?void 0:e.name})}),(0,o.jsx)(w.Z,{align:"left",children:(0,o.jsx)(W.Z,{variant:"body1",width:"100px",fontWeight:"bold",color:"text.primary",noWrap:!0,children:null===e||void 0===e?void 0:e.pw_id})}),(0,o.jsx)(w.Z,{align:"left",children:(0,o.jsx)(W.Z,{width:"120px",variant:"body1",fontWeight:"bold",color:"text.primary",noWrap:!0,children:null===e||void 0===e?void 0:e.rm_id})}),(0,o.jsx)(w.Z,{children:(0,o.jsx)(W.Z,{style:{color:"APPROVED"===(null===e||void 0===e?void 0:e.kyc)?"green":"REJECTED"===(null===e||void 0===e?void 0:e.kyc)?"red":"ONGOING"===(null===e||void 0===e?void 0:e.kyc)?"orange":"white"},variant:"body1",fontWeight:"bold",width:"150px",color:"text.success",gutterBottom:!0,noWrap:!0,children:null===e||void 0===e?void 0:e.kyc})}),(0,o.jsx)(w.Z,{align:"left",children:(0,o.jsx)(W.Z,{width:"120px",variant:"body1",fontWeight:"bold",color:"text.primary",noWrap:!0,children:G(e.documents)})}),(0,o.jsx)(w.Z,{align:"left",children:(0,o.jsx)(W.Z,{width:"120px",variant:"body1",fontWeight:"bold",color:"text.primary",noWrap:!0,children:B(e.documents)})}),(0,o.jsx)(w.Z,{align:"left",children:(0,o.jsx)(W.Z,{width:"120px",variant:"body1",fontWeight:"bold",color:"text.primary",noWrap:!0,children:V(e)||(0,o.jsx)("span",{style:{color:"red"},children:"NOT RECIEVED"})})}),(0,o.jsx)(w.Z,{align:"left",children:(0,o.jsx)(W.Z,{variant:"body1",textAlign:"center",fontWeight:"bold",color:"text.primary",gutterBottom:!0,width:"150px",noWrap:!0,children:null===e||void 0===e?void 0:e.membership})}),(0,o.jsx)(w.Z,{align:"left",children:(0,o.jsx)(W.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,width:"100px",noWrap:!0,children:null===e||void 0===e?void 0:e.mobile_number})}),(0,o.jsx)(w.Z,{align:"left",children:(0,o.jsx)(W.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:null===e||void 0===e?void 0:e.email})})]},null===e||void 0===e?void 0:e.id)})}))})]})}),(0,o.jsxs)(x.Z,{p:2,gap:2,display:"flex",justifyContent:"flex-end",children:[(0,o.jsx)(P.Z,{component:"div",count:ae.length,onPageChange:function(e,n){q(n)},onRowsPerPageChange:function(e){Q(parseInt(e.target.value))},page:Y,rowsPerPage:X,rowsPerPageOptions:[5,20,50,200,1e3]}),(0,o.jsx)(O.DownloadTableExcel,{filename:"data",sheet:"data",currentTableRef:t.current,children:(0,o.jsx)(s.Z,{variant:"contained",children:"Download Current Data"})})]})]})})};U.propTypes={usersList:S().array.isRequired},U.defaultProps={usersList:[]},n.default=U}}]);