"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2246],{52331:function(e,n,t){t.r(n);var i=t(14924),r=t(85893),o=(t(67294),t(2734)),l=t(87357),d=t(66242),a=t(15861),s=t(67720);n.default=function(e){var n=e.amountToWithdraw,t=(0,o.Z)();return(0,r.jsx)(l.Z,{style:{margin:"2%",display:"flex",flexDirection:"column",padding:"2%",alignItems:"center"},children:(0,r.jsxs)(d.Z,{sx:{maxWidth:550,background:"#10121e",boxShadow:5},children:[(0,r.jsx)(a.Z,{textAlign:"center",fontSize:24,fontWeight:600,paddingY:1,style:{background:" #3a4068"},children:"Transaction Details"}),(0,r.jsx)(s.Z,{}),(0,r.jsxs)(l.Z,{display:"flex",flexDirection:"column",alignItems:"center",paddingX:2,children:[(0,r.jsxs)(a.Z,{textAlign:"center",fontSize:24,fontWeight:600,color:"white",marginY:1,children:["\u20b9 ",n]}),(0,r.jsx)(a.Z,{sx:(0,i.Z)({backgroundColor:"orange",fontSize:16,fontWeight:600,color:"white",paddingX:1,paddingY:.5,borderRadius:1,textAlign:"center",width:100},t.breakpoints.down("sm"),{}),children:"Pending"}),(0,r.jsx)(a.Z,{sx:(0,i.Z)({textAlign:"center",fontSize:18,fontWeight:600,color:"white",marginTop:1},t.breakpoints.down("sm"),{fontSize:16}),children:"Withdrawal To Bank Account"}),(0,r.jsx)(a.Z,{sx:(0,i.Z)({fontSize:14,fontWeight:500,marginTop:1,textAlign:"center"},t.breakpoints.down("sm"),{fontSize:12}),children:"We've received your withdrawal request. Incase it fails, the amount will be returned to your Funds in Wallet."})]}),(0,r.jsxs)(l.Z,{display:"flex",flexDirection:"column",alignItems:"center",paddingX:3,marginY:2,children:[(0,r.jsxs)(l.Z,{sx:{display:"flex",justifyContent:"space-between",width:"100%"},children:[(0,r.jsx)(a.Z,{children:"Payment Method"}),(0,r.jsx)(a.Z,{children:"NEFT"})]}),(0,r.jsxs)(l.Z,{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[(0,r.jsx)(a.Z,{children:"From"}),(0,r.jsx)(a.Z,{children:"Agency Wallet"})]}),(0,r.jsxs)(l.Z,{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[(0,r.jsx)(a.Z,{children:"Account"}),(0,r.jsx)(a.Z,{children:"****414"})]}),(0,r.jsxs)(l.Z,{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[(0,r.jsx)(a.Z,{children:"Started on"}),(0,r.jsx)(a.Z,{children:"12/01/2023"})]}),(0,r.jsxs)(l.Z,{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[(0,r.jsx)(a.Z,{children:"Transaction Fee"}),(0,r.jsx)(a.Z,{children:"No Fee"})]})]})]})})}},6407:function(e,n,t){t.r(n);var i=t(14924),r=t(85893),o=t(4749),l=t(37887),d=t(2734),a=t(50135),s=t(11057),c=t(87357),u=t(15861),x=t(67294),h=t(9473),f=t(52331);n.default=function(){var e,n=(0,x.useState)(""),t=n[0],m=n[1],p=(0,d.Z)(),j=(0,x.useState)(!0),g=j[0],Z=j[1],v=(0,h.v9)((function(e){var n,t;return null===(n=e.user)||void 0===n||null===(t=n.agencyCode)||void 0===t?void 0:t.agencyCode})),y=(0,l.a)(o.dE,{variables:{agencyCode:v}}).data,w=null===y||void 0===y||null===(e=y.GetFinalWalletBalanceOfAgency)||void 0===e?void 0:e.finalBalance;return(0,r.jsx)(r.Fragment,{children:g?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(c.Z,{sx:{marginTop:2},children:(0,r.jsx)(c.Z,{sx:(0,i.Z)({width:"95%",display:"flex",flexDirection:"column",padding:"2%"},p.breakpoints.down("sm"),{width:"100%"}),children:(0,r.jsxs)("div",{children:[(0,r.jsx)(u.Z,{sx:{fontSize:"20px",fontWeight:"500",textAlign:"center"},children:"Amount To Withdraw"}),(0,r.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,r.jsx)(a.Z,{sx:(0,i.Z)({marginTop:2,width:"30%",display:"flex",justifyContent:"center"},p.breakpoints.down("sm"),{width:"100%"}),id:"outlined",type:"number",label:"Amount To Withdrawal",variant:"outlined",value:t,onChange:function(e){m(e.target.value)}})}),t>w&&(0,r.jsx)(u.Z,{textAlign:"center",fontWeight:"700",color:"red",children:"Amount must be less than wallet balance"}),(0,r.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,r.jsx)(s.Z,{onClick:function(){Z(!g)},variant:"contained",sx:(0,i.Z)({width:"30%",display:"flex",justifyContent:"center",cursor:"unset",padding:1,margin:1},p.breakpoints.down("sm"),{width:"100%"}),disabled:t>w||t<="0",children:"Place Withdrawal Request"})})]})})})}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(f.default,{amountToWithdraw:t})})})}},49019:function(e,n,t){t.r(n);var i=t(85893),r=t(4749),o=t(37887),l=t(53816),d=t(53252),a=t(15861),s=t(50122);t(67294);n.default=function(e){var n,t,c,u,x,h,f=e.item,m=e.index,p=null===f||void 0===f?void 0:f.metaData.map((function(e){return e.userId}))[0],j=null===f||void 0===f?void 0:f.metaData.map((function(e){return e.documentId}))[2],g=(0,o.a)(r.Lj,{variables:{id:p}}),Z=(0,o.a)(r.o_,{variables:{id:j}}),v=Z.data;Z.error,Z.loading;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(l.Z,{sx:{cursor:"pointer"},children:[(0,i.jsx)(d.Z,{children:(0,i.jsx)(a.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,align:"center",noWrap:!0,width:30,children:m+1})}),(0,i.jsx)(d.Z,{children:(0,i.jsx)(a.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:null===f||void 0===f||null===(n=f.metaData)||void 0===n?void 0:n.map((function(e){return null===e||void 0===e?void 0:e.timeStamp}))})}),(0,i.jsxs)(d.Z,{children:["DEPOSIT_KYC"===f.category&&(0,i.jsxs)(a.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:["Reward for completing KYC for PWID ","",null===g||void 0===g||null===(t=g.data)||void 0===t||null===(c=t.getUserDetails)||void 0===c?void 0:c.pw_id]}),"DEPOSIT_PROJECT"===f.category&&(0,i.jsxs)(a.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:["Reward for Project"," ",(null===v||void 0===v||null===(u=v.getDocumentDetails)||void 0===u?void 0:u.title.includes("hajipur"))?v.getDocumentDetails.title.slice(0,7).toUpperCase():(null===v||void 0===v||null===(x=v.getDocumentDetails)||void 0===x?void 0:x.title.includes("agra"))?v.getDocumentDetails.title.slice(0,4).toUpperCase():""," ","for PWID ",null===v||void 0===v||null===(h=v.getDocumentDetails)||void 0===h?void 0:h.user.pw_id]})]}),(0,i.jsx)(s.Z,{href:"",scroll:!1,children:(0,i.jsx)(d.Z,{align:"left",children:(0,i.jsx)(a.Z,{variant:"body1",width:"100px",fontWeight:"bold",color:"text.primary",noWrap:!0,children:f.type})})}),(0,i.jsx)(d.Z,{children:(0,i.jsx)(a.Z,{fontWeight:"bold",width:"100px",color:"DEPOSIT"===f.type?"green":"red",gutterBottom:!0,noWrap:!0,children:"DEPOSIT"===f.type&&"+ \u20b9 "+f.amount})}),(0,i.jsx)(d.Z,{children:(0,i.jsxs)(a.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,width:"80px",noWrap:!0,children:["\u20b9 ",f.finalBalance]})})]})})}},52246:function(e,n,t){t.r(n);var i=t(14924),r=t(85893),o=t(8987),l=t(2734),d=t(66242),a=t(87357),s=t(7906),c=t(72882),u=t(53184),x=t(53816),h=t(53252),f=t(295),m=t(6407),p=t(4749),j=t(49019),g=t(67294),Z=t(86501),v=t(37887),y=t(9473),w=t(52331);n.default=function(){var e,n=(0,l.Z)(),t=(0,g.useState)(!1),b=t[0],W=t[1],D=(0,g.useState)(""),C=D[0],T=D[1],k=(0,y.v9)((function(e){var n,t;return null===(n=e.user)||void 0===n||null===(t=n.agencyCode)||void 0===t?void 0:t.agencyCode})),A=(0,v.a)(p.EW,{variables:{agencyCode:k}}),S=null===A||void 0===A||null===(e=A.data)||void 0===e?void 0:e.AgencyWalletHistory;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(d.Z,{children:(0,r.jsxs)(a.Z,{sx:(0,i.Z)({width:"100%",display:"flex",flexDirection:"row"},n.breakpoints.down("sm"),{flexDirection:"column"}),children:[(0,r.jsxs)(s.Z,{sx:(0,i.Z)({width:b?"25%":"100%",display:"flex",flexDirection:"column",padding:"2%",alignItems:"center"},n.breakpoints.down("sm"),{width:"100%"}),children:[(0,r.jsx)(o.Z,{onClick:function(){T("WithdrawAmount"),W(!0)},variant:"WithdrawAmount"===C?"contained":"outlined",sx:(0,i.Z)({mt:2,mb:2,width:"200px"},n.breakpoints.down("sm"),{mt:1}),disabled:!function(){var e=(new Date).getDate();return 15===e||30===e}(),children:"Withdraw Amount"}),(0,r.jsx)(o.Z,{onClick:function(){T("TransactionHistory"),W(!0)},variant:"TransactionHistory"===C?"contained":"outlined",sx:(0,i.Z)({mt:2,mb:2,width:"200px"},n.breakpoints.down("sm"),{mt:1}),children:"Transaction History"})," "]}),b&&(0,r.jsxs)(c.Z,{sx:(0,i.Z)({width:"75%",borderLeft:"1px solid #2c3151"},n.breakpoints.down("sm"),{border:"none",width:"100%"}),children:[C.includes("WithdrawAmount")&&(0,r.jsx)(m.default,{}),C.includes("PreviousWithdrawal")&&(0,r.jsx)(w.default,{amountToWithdraw:567}),C.includes("TransactionHistory")&&(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(u.Z,{children:(0,r.jsxs)(x.Z,{children:[(0,r.jsx)(h.Z,{children:"S.No."}),(0,r.jsx)(h.Z,{children:"Date"}),(0,r.jsx)(h.Z,{children:"Description"}),(0,r.jsx)(h.Z,{children:"Type"}),(0,r.jsx)(h.Z,{children:"Amount"}),(0,r.jsx)(h.Z,{children:"Balance"})]})}),(0,r.jsxs)(f.Z,{children:[null===S||void 0===S?void 0:S.map((function(e,n){return(0,r.jsx)(j.default,{item:e,index:n})})),(0,r.jsx)(Z.x7,{position:"bottom-center",reverseOrder:!1})]})]})]})]})})})}}}]);