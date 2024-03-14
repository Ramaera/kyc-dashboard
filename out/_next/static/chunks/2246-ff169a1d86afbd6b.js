"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2246],{52331:function(e,t,n){n.r(t);var i=n(14924),r=n(85893),o=(n(67294),n(2734)),a=n(87357),l=n(66242),d=n(15861),s=n(67720);t.default=function(e){var t=e.amountToWithdraw,n=(0,o.Z)();return(0,r.jsx)(a.Z,{style:{margin:"2%",display:"flex",flexDirection:"column",padding:"2%",alignItems:"center"},children:(0,r.jsxs)(l.Z,{sx:{maxWidth:550,background:"#10121e",boxShadow:5},children:[(0,r.jsx)(d.Z,{textAlign:"center",fontSize:24,fontWeight:600,paddingY:1,style:{background:" #3a4068"},children:"Transaction Details"}),(0,r.jsx)(s.Z,{}),(0,r.jsxs)(a.Z,{display:"flex",flexDirection:"column",alignItems:"center",paddingX:2,children:[(0,r.jsxs)(d.Z,{textAlign:"center",fontSize:24,fontWeight:600,color:"white",marginY:1,children:["\u20b9 ",t]}),(0,r.jsx)(d.Z,{sx:(0,i.Z)({backgroundColor:"orange",fontSize:16,fontWeight:600,color:"white",paddingX:1,paddingY:.5,borderRadius:1,textAlign:"center",width:100},n.breakpoints.down("sm"),{}),children:"Pending"}),(0,r.jsx)(d.Z,{sx:(0,i.Z)({textAlign:"center",fontSize:18,fontWeight:600,color:"white",marginTop:1},n.breakpoints.down("sm"),{fontSize:16}),children:"Withdrawal To Bank Account"}),(0,r.jsx)(d.Z,{sx:(0,i.Z)({fontSize:14,fontWeight:500,marginTop:1,textAlign:"center"},n.breakpoints.down("sm"),{fontSize:12}),children:"We've received your withdrawal request. Incase it fails, the amount will be returned to your Funds in Wallet."})]}),(0,r.jsxs)(a.Z,{display:"flex",flexDirection:"column",alignItems:"center",paddingX:3,marginY:2,children:[(0,r.jsxs)(a.Z,{sx:{display:"flex",justifyContent:"space-between",width:"100%"},children:[(0,r.jsx)(d.Z,{children:"Payment Method"}),(0,r.jsx)(d.Z,{children:"NEFT"})]}),(0,r.jsxs)(a.Z,{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[(0,r.jsx)(d.Z,{children:"From"}),(0,r.jsx)(d.Z,{children:"Agency Wallet"})]}),(0,r.jsxs)(a.Z,{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[(0,r.jsx)(d.Z,{children:"Started on"}),(0,r.jsx)(d.Z,{children:"30/01/2024"})]}),(0,r.jsxs)(a.Z,{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[(0,r.jsx)(d.Z,{children:"Transaction Fee"}),(0,r.jsx)(d.Z,{children:"No Fee"})]})]})]})})}},6407:function(e,t,n){n.r(t);var i=n(47568),r=n(14924),o=n(828),a=n(97582),l=n(85893),d=n(4749),s=n(50319),c=n(37887),u=n(2734),h=n(50135),x=n(11057),m=n(87357),f=n(15861),p=n(67294),g=n(9473),j=n(52331);t.default=function(){var e,t=(0,p.useState)(""),n=t[0],v=t[1],Z=(0,o.Z)((0,s.D)(d.CI),1)[0],w=(0,g.v9)((function(e){var t,n;return null===(t=e.user)||void 0===t||null===(n=t.agencyCode)||void 0===n?void 0:n.agencyCode})),y=((0,c.a)(d.Z6,{variables:{agencyCode:w}}).data,(0,u.Z)()),b=(0,p.useState)(!0),W=b[0],D=b[1],C=(0,c.a)(d.dE,{variables:{agencyCode:w}}).data,k=null===C||void 0===C||null===(e=C.GetFinalWalletBalanceOfAgency)||void 0===e?void 0:e.finalBalance,T=function(){var e=(0,i.Z)((function(){var e;return(0,a.__generator)(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,Z({variables:{agencyCode:w,amount:parseInt(n)}})];case 1:return t.sent(),[3,3];case 2:return e=t.sent(),console.log("Error Is ::",e),[3,3];case 3:return D(!W),[2]}}))}));return function(){return e.apply(this,arguments)}}();return(0,l.jsx)(l.Fragment,{children:W?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(m.Z,{sx:{marginTop:2},children:(0,l.jsx)(m.Z,{sx:(0,r.Z)({width:"95%",display:"flex",flexDirection:"column",padding:"2%"},y.breakpoints.down("sm"),{width:"100%"}),children:(0,l.jsxs)("div",{children:[(0,l.jsx)(f.Z,{sx:{fontSize:"20px",fontWeight:"500",textAlign:"center"},children:"Amount To Withdraw"}),(0,l.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,l.jsx)(h.Z,{sx:(0,r.Z)({marginTop:2,width:"30%",display:"flex",justifyContent:"center"},y.breakpoints.down("sm"),{width:"100%"}),id:"outlined",type:"number",label:"Amount To Withdrawal",variant:"outlined",value:n,onChange:function(e){v(e.target.value)}})}),n>k&&(0,l.jsx)(f.Z,{textAlign:"center",fontWeight:"700",color:"red",children:"Amount must be less than wallet balance"}),(0,l.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,l.jsx)(x.Z,{onClick:T,variant:"contained",sx:(0,r.Z)({width:"30%",display:"flex",justifyContent:"center",cursor:"unset",padding:1,margin:1},y.breakpoints.down("sm"),{width:"100%"}),disabled:n>k||n<="0",children:"Place Withdrawal Request"})})]})})})}):(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(j.default,{amountToWithdraw:n})})})}},49019:function(e,t,n){n.r(t);var i=n(85893),r=n(4749),o=n(37887),a=n(53816),l=n(53252),d=n(15861);n(67294);t.default=function(e){var t,n,s,c,u,h,x=e.item,m=e.index,f=null===x||void 0===x?void 0:x.metaData.map((function(e){return e.userId}))[0],p=null===x||void 0===x?void 0:x.metaData.map((function(e){return e.documentId}))[2],g=(0,o.a)(r.Lj,{variables:{id:f}}),j=(0,o.a)(r.o_,{variables:{id:p}}),v=j.data;j.error,j.loading;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(a.Z,{sx:{cursor:"pointer"},children:[(0,i.jsx)(l.Z,{children:(0,i.jsx)(d.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,align:"center",noWrap:!0,width:30,children:m+1})}),(0,i.jsx)(l.Z,{children:(0,i.jsx)(d.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:null===x||void 0===x||null===(t=x.metaData)||void 0===t?void 0:t.map((function(e){return null===e||void 0===e?void 0:e.timeStamp}))})}),(0,i.jsxs)(l.Z,{children:["DEPOSIT_KYC"===x.category&&(0,i.jsxs)(d.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:["Reward for completing KYC for PWID ","",null===g||void 0===g||null===(n=g.data)||void 0===n||null===(s=n.getUserDetails)||void 0===s?void 0:s.pw_id]}),"DEPOSIT_PROJECT"===x.category&&(0,i.jsxs)(d.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:["Reward for Project"," ",(null===v||void 0===v||null===(c=v.getDocumentDetails)||void 0===c?void 0:c.title.includes("hajipur"))?v.getDocumentDetails.title.slice(0,7).toUpperCase():(null===v||void 0===v||null===(u=v.getDocumentDetails)||void 0===u?void 0:u.title.includes("agra"))?v.getDocumentDetails.title.slice(0,4).toUpperCase():""," ","for PWID ",null===v||void 0===v||null===(h=v.getDocumentDetails)||void 0===h?void 0:h.user.pw_id]})]}),(0,i.jsx)(l.Z,{align:"left",children:(0,i.jsx)(d.Z,{variant:"body1",width:"100px",fontWeight:"bold",color:"text.primary",noWrap:!0,children:x.type})}),(0,i.jsx)(l.Z,{children:(0,i.jsx)(d.Z,{fontWeight:"bold",width:"100px",color:"DEPOSIT"===x.type?"green":"red",gutterBottom:!0,noWrap:!0,children:"DEPOSIT"===x.type&&"+ \u20b9 "+x.amount})}),(0,i.jsx)(l.Z,{children:(0,i.jsxs)(d.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,width:"80px",noWrap:!0,children:["\u20b9 ",x.finalBalance]})})]})})}},52246:function(e,t,n){n.r(t);var i=n(14924),r=n(85893),o=n(8987),a=n(2734),l=n(66242),d=n(87357),s=n(7906),c=n(72882),u=n(53184),h=n(53816),x=n(53252),m=n(295),f=n(6407),p=n(4749),g=n(49019),j=n(67294),v=n(86501),Z=n(37887),w=n(9473),y=n(52331);t.default=function(){var e,t=(0,a.Z)(),n=(0,j.useState)(!1),b=n[0],W=n[1],D=(0,j.useState)(""),C=D[0],k=D[1],T=(0,w.v9)((function(e){var t,n;return null===(t=e.user)||void 0===t||null===(n=t.agencyCode)||void 0===n?void 0:n.agencyCode})),S=(0,Z.a)(p.Z6,{variables:{agencyCode:T}}).data,A=(0,Z.a)(p.EW,{variables:{agencyCode:T}}),I=null===A||void 0===A||null===(e=A.data)||void 0===e?void 0:e.AgencyWalletHistory;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(l.Z,{children:(0,r.jsxs)(d.Z,{sx:(0,i.Z)({width:"100%",display:"flex",flexDirection:"row"},t.breakpoints.down("sm"),{flexDirection:"column"}),children:[(0,r.jsxs)(s.Z,{sx:(0,i.Z)({width:b?"25%":"100%",display:"flex",flexDirection:"column",padding:"2%",alignItems:"center"},t.breakpoints.down("sm"),{width:"100%"}),children:[(0,r.jsx)(o.Z,{onClick:function(){k("WithdrawAmount"),W(!0)},variant:"WithdrawAmount"===C?"contained":"outlined",sx:(0,i.Z)({mt:2,mb:2,width:"200px"},t.breakpoints.down("sm"),{mt:1}),disabled:!(1===(new Date).getDate()),children:"Withdraw Amount"}),(null===S||void 0===S?void 0:S.agencyWithdrawlRequest.length)>0&&(0,r.jsx)(o.Z,{onClick:function(){k("PreviousWithdrawal"),W(!0)},variant:"PreviousWithdrawal"===C?"contained":"outlined",sx:(0,i.Z)({mt:2,mb:2,width:"200px"},t.breakpoints.down("sm"),{mt:1}),children:"Previous Withdrawal Requests"}),(0,r.jsx)(o.Z,{onClick:function(){k("TransactionHistory"),W(!0)},variant:"TransactionHistory"===C?"contained":"outlined",sx:(0,i.Z)({mt:2,mb:2,width:"200px"},t.breakpoints.down("sm"),{mt:1}),children:"Transaction History"})," "]}),b&&(0,r.jsxs)(c.Z,{sx:(0,i.Z)({width:"75%",borderLeft:"1px solid #2c3151"},t.breakpoints.down("sm"),{border:"none",width:"100%"}),children:[C.includes("WithdrawAmount")&&(0,r.jsx)(f.default,{}),C.includes("PreviousWithdrawal")?S.agencyWithdrawlRequest.map((function(e){return(0,r.jsx)(y.default,{amountToWithdraw:e.amount})})):"",C.includes("TransactionHistory")&&(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(u.Z,{children:(0,r.jsxs)(h.Z,{children:[(0,r.jsx)(x.Z,{children:"S.No."}),(0,r.jsx)(x.Z,{children:"Date"}),(0,r.jsx)(x.Z,{children:"Description"}),(0,r.jsx)(x.Z,{children:"Type"}),(0,r.jsx)(x.Z,{children:"Amount"}),(0,r.jsx)(x.Z,{children:"Balance"})]})}),(0,r.jsxs)(m.Z,{children:[null===I||void 0===I?void 0:I.map((function(e,t){return(0,r.jsx)(g.default,{item:e,index:t})})),(0,r.jsx)(v.x7,{position:"bottom-center",reverseOrder:!1})]})]})]})]})})})}}}]);