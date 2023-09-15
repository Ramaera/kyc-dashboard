"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4741],{44741:function(e,t,n){n.r(t);var r=n(85893),i=n(2734),a=n(66242),l=n(87357),o=n(11057),c=n(78445),s=n(50135),u=n(94054),d=n(47312),h=n(10315),f=n(18972),p=n(67720),v=n(8896),m=n(72882),x=n(7906),g=n(53184),j=n(53816),Z=n(53252),b=n(295),y=n(15861),A=n(45697),E=n.n(A),N=n(67294),S=n(35632),O=n(17677),C=n(9473),D=n(53707),P=n(73359),W=n(45477);function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){I(e,t,n[t])}))}return e}function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a=[],l=!0,o=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(c){o=!0,i=c}finally{try{l||null==n.return||n.return()}finally{if(o)throw i}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var R=function(e,t){var n="NOT ENROLLED";return null===e||void 0===e||e.map((function(e){e.title===t&&(n=e.status)})),n},k=function(e){var t=e.refetchData,n=(0,i.Z)(),A=(0,N.useRef)(null),E=(0,N.useState)(0),w=E[0],k=E[1],T=(0,N.useState)(100),L=T[0],U=T[1],H=(0,N.useState)(""),V=H[0],K=H[1],M=(0,N.useState)(""),Y=M[0],G=M[1],F=_((0,P.t)(W.Ay,{variables:{searchTerm:V}}),2),z=F[0],$=F[1].data,q=(0,C.v9)((function(e){return e.allUsers.allTheUsers})),J=(0,N.useState)(q),Q=J[0],X=J[1],ee=(0,N.useState)({totalKYC:0,totalAdvance:0,totalBasic:0}),te=ee[0],ne=ee[1],re=(0,N.useState)({status:null,hajipur:null,agra:null}),ie=re[0],ae=re[1],le=(0,N.useState)(),oe=le[0],ce=(le[1],(0,N.useState)("")),se=ce[0],ue=ce[1];(0,N.useEffect)((function(){z()}),[V]),(0,N.useEffect)((function(){(null===$||void 0===$?void 0:$.searchUsers[0])&&(null===$||void 0===$?void 0:$.searchUsers[0])&&X($.searchUsers)}),[$]);var de=function(e,t){return e.filter((function(e){var n=!0;return e.role===O.Z.role.ADMIN&&(n=!1),(t.membership&&(null===e||void 0===e?void 0:e.membership))!==t.membership&&(n=!1),(t.status&&(null===e||void 0===e?void 0:e.kyc))!==t.status&&(n=!1),t.hajipur&&R(null===e||void 0===e?void 0:e.documents,"hajipur_project_payment")!==t.hajipur&&(n=!1),t.agra&&R(null===e||void 0===e?void 0:e.documents,"agra_project_payment")!==t.agra&&(n=!1),n}))}(Q,ie),he=function(e,t,n){return e.slice(t*n,t*n+n)}(de,w,L);(0,N.useEffect)((function(){!function(){var e=0,t=0,n=0;Q.map((function(r){r.role!==O.Z.role.ADMIN&&(r.role!==O.Z.role.ADMIN&&(e+=1),r.membership===O.Z.membership.ADVANCE&&(t+=1),r.membership===O.Z.membership.BASIC&&(n+=1))})),ne(B({},te,{totalKYC:e,totalAdvance:t,totalBasic:n}))}()}),[Q]);var fe=function(e){var t=null;"all"!==e&&(t=e),ae((function(e){return B({},e,{membership:t})}))},pe=function(e){var t=null;"all"!==e&&(t=e),ae((function(e){return B({},e,{status:t})}))},ve=function(e){if(!e||"NULL"==e)return"";var t=e.slice(0,4)+e.slice(-4,e.length),n=RegExp("(?<!^).(?!$)","g");return t.replace(n,"*")},me=-1;return Q[0]?(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(a.Z,{children:[(0,r.jsxs)(l.Z,{mx:2,sx:I({display:"flex",justifyContent:"space-between"},n.breakpoints.down("sm"),{flexDirection:"column"}),children:[(0,r.jsxs)(l.Z,{my:2,display:"flex",gap:2,sx:I({},n.breakpoints.down("sm"),{display:"flex",flexDirection:"column"}),children:[(0,r.jsx)(o.Z,{variant:se.includes("total")?"contained":"outlined",sx:{textTransform:"uppercase",padding:2},onClick:function(){ue((function(e){return e.includes("total")?"":"total"})),fe(""),pe("all")},children:"Total Subscribers: "+te.totalKYC}),se.includes("total")&&(0,r.jsxs)(l.Z,{display:"flex",gap:2,sx:I({},n.breakpoints.down("sm"),{display:"flex",flexDirection:"column"}),children:[(0,r.jsx)(o.Z,{variant:"totalAvdance"===se?"contained":"outlined",onClick:function(){ue((function(e){return e.includes("totalAvdance")?"total":"totalAvdance"})),fe(O.Z.membership.ADVANCE)},children:"ADVANCE SHARE HOLDER : ".concat(te.totalAdvance)}),(0,r.jsx)(o.Z,{variant:"totalBasic"===se?"contained":"outlined",onClick:function(){ue((function(e){return e.includes("totalBasic")?"total":"totalBasic"})),fe(O.Z.membership.BASIC)},children:"BASIC SHARE HOLDER : ".concat(te.totalBasic)})]})]}),(0,r.jsx)(l.Z,{sx:{cursor:"pointer"},onClick:t,my:4,ml:"auto",children:(0,r.jsx)(D.Z,{})})]}),(se.includes("totalAvdance")||se.includes("totalBasic"))&&(0,r.jsx)(c.Z,{action:(0,r.jsxs)(l.Z,{display:"flex",gap:"20px",children:[(0,r.jsxs)(l.Z,{display:"flex",gap:"10px",children:[(0,r.jsx)(s.Z,{fullWidth:!0,label:"Search",variant:"outlined",value:Y,onChange:function(e){G(e.target.value),""===e.target.value&&X(q)}}),(0,r.jsx)(o.Z,{variant:"contained",onClick:function(){K(Y)},children:"Search"})]}),(0,r.jsxs)(l.Z,{width:480,display:"flex",gap:"10px",sx:I({},n.breakpoints.down("sm"),{display:"none"}),children:[(0,r.jsxs)(u.Z,{fullWidth:!0,variant:"outlined",children:[(0,r.jsx)(d.Z,{children:"KYC Status"}),(0,r.jsx)(h.Z,{value:ie.status||"all",onChange:function(e){return pe(e.target.value)},label:"Status",autoWidth:!0,children:[{id:"all",name:"All"},{id:"NOT_INITIALIZED",name:"Not Started"},{id:"REJECTED",name:"Rejected"},{id:"ONGOING",name:"Ongoing"},{id:"APPROVED",name:"Approved"}].map((function(e){return(0,r.jsx)(f.Z,{value:e.id,children:e.name},e.id)}))})]}),(0,r.jsxs)(u.Z,{fullWidth:!0,variant:"outlined",children:[(0,r.jsx)(d.Z,{children:"Hajipur "}),(0,r.jsx)(h.Z,{value:ie.hajipur||"all",onChange:function(e){var t=null;"all"!==e.target.value&&(t=e.target.value),ae((function(e){return B({},e,{hajipur:t})}))},label:"Status",autoWidth:!0,children:[{id:"all",name:"All"},{id:"NOT ENROLLED",name:"Not Enrolled"},{id:"APPROVED",name:"Approved"},{id:"PENDING",name:"Pending"}].map((function(e){return(0,r.jsx)(f.Z,{value:e.id,children:e.name},e.id)}))})]}),(0,r.jsxs)(u.Z,{fullWidth:!0,variant:"outlined",children:[(0,r.jsx)(d.Z,{children:"Agra "}),(0,r.jsx)(h.Z,{value:ie.agra||"all",onChange:function(e){var t=null;"all"!==e.target.value&&(t=e.target.value),ae((function(e){return B({},e,{agra:t})}))},label:"Status",autoWidth:!0,children:[{id:"all",name:"All"},{id:"NOT ENROLLED",name:"Not Enrolled"},{id:"APPROVED",name:"Approved"},{id:"PENDING",name:"Pending"}].map((function(e){return(0,r.jsx)(f.Z,{value:e.id,children:e.name},e.id)}))})]})]})]}),title:"DASHBOARD"}),(0,r.jsx)(p.Z,{}),(se.includes("totalAvdance")||se.includes("totalBasic"))&&(0,r.jsx)(l.Z,{p:2,gap:2,display:"flex",justifyContent:"flex-end",children:(0,r.jsx)(v.Z,{component:"div",count:de.length,onPageChange:function(e,t){k(t)},onRowsPerPageChange:function(e){U(parseInt("All"===e.target.value?-1:e.target.value))},page:w,rowsPerPage:L,rowsPerPageOptions:[20,100,200,"All"]})}),(se.includes("totalAvdance")||se.includes("totalBasic"))&&(0,r.jsx)(m.Z,{children:(0,r.jsxs)(x.Z,{ref:A,children:[(0,r.jsx)(g.Z,{children:(0,r.jsxs)(j.Z,{children:[(0,r.jsx)(Z.Z,{children:"S.No."}),(0,r.jsx)(Z.Z,{children:"PW ID"}),(0,r.jsx)(Z.Z,{children:"Name"}),(0,r.jsx)(Z.Z,{align:"center",children:"Father's Name"}),(0,r.jsx)(Z.Z,{align:"center",children:"Moibile No."}),(0,r.jsx)(Z.Z,{align:"center",children:"KYC Status"}),(0,r.jsx)(Z.Z,{align:"center",children:"Demat"}),(0,r.jsx)(Z.Z,{align:"center",children:"Hajipur Project"}),(0,r.jsx)(Z.Z,{align:"center",children:"Agra Project"})]})}),(0,r.jsx)(b.Z,{children:he.map((function(e){if((null===e||void 0===e?void 0:e.membership)!==oe)return me+=1,(0,r.jsxs)(j.Z,{hover:!0,children:[(0,r.jsx)(Z.Z,{children:(0,r.jsx)(y.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,align:"center",noWrap:!0,width:30,children:me+1})}),(0,r.jsxs)(Z.Z,{children:[(0,r.jsx)(y.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,width:100,children:null===e||void 0===e?void 0:e.pw_id}),(0,r.jsx)(y.Z,{variant:"body2",color:"text.secondary",noWrap:!0})]}),(0,r.jsx)(Z.Z,{children:(0,r.jsx)(y.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,width:150,children:"NULL"===(null===e||void 0===e?void 0:e.name)?"":null===e||void 0===e?void 0:e.name})}),(0,r.jsx)(Z.Z,{children:(0,r.jsx)(y.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,width:100,noWrap:!0,children:ve(null===e||void 0===e?void 0:e.father_or_husband_name)})}),(0,r.jsx)(Z.Z,{align:"right",children:(0,r.jsx)(y.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:ve(null===e||void 0===e?void 0:e.mobile_number)})}),(0,r.jsx)(Z.Z,{align:"right",children:(0,r.jsx)(y.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,align:"center",noWrap:!0,children:"NOT_INITIALIZED"===(null===e||void 0===e?void 0:e.kyc)?"NOT STARTED":null===e||void 0===e?void 0:e.kyc})}),(0,r.jsx)(Z.Z,{align:"right",children:(0,r.jsx)(y.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:ve(null===e||void 0===e?void 0:e.demat_account)})}),(0,r.jsx)(Z.Z,{align:"right",children:(0,r.jsx)(y.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:R(null===e||void 0===e?void 0:e.documents,"hajipur_project_payment")})}),(0,r.jsx)(Z.Z,{align:"right",children:(0,r.jsx)(y.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:R(null===e||void 0===e?void 0:e.documents,"agra_project_payment")})})]},null===e||void 0===e?void 0:e.id)}))})]})})]})}):(0,r.jsx)(S.Z,{})};k.propTypes={usersList:E().array.isRequired},k.defaultProps={usersList:[]},t.default=k},35632:function(e,t,n){var r=n(85893),i=(n(67294),n(90948));function a(){var e,t,n=(e=["\n  from { scale: 0.5; }\n  to { scale: 0.6; }\n  \n  \n"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return a=function(){return n},n}var l=(0,n(70917).F4)(a()),o=(0,i.ZP)("div")({display:"flex",justifyContent:"center",height:"85vh",alignItems:"center",animation:"".concat(l," 1s  infinite")});t.Z=function(){return(0,r.jsx)(o,{children:(0,r.jsx)("img",{src:"/static/images/logo/logo.png"})})}}}]);