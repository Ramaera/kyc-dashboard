(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3120],{15705:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/wallet/components/UserTable",function(){return t(6407)}])},52331:function(e,n,t){"use strict";t.r(n);var i=t(14924),l=t(85893),s=(t(67294),t(2734)),r=t(87357),d=t(66242),a=t(15861),o=t(67720);n.default=function(e){var n=e.amountToWithdraw,t=(0,s.Z)();return(0,l.jsx)(r.Z,{style:{margin:"2%",display:"flex",flexDirection:"column",padding:"2%",alignItems:"center"},children:(0,l.jsxs)(d.Z,{sx:{maxWidth:550,background:"#10121e",boxShadow:5},children:[(0,l.jsx)(a.Z,{textAlign:"center",fontSize:24,fontWeight:600,paddingY:1,style:{background:" #3a4068"},children:"Transaction Details"}),(0,l.jsx)(o.Z,{}),(0,l.jsxs)(r.Z,{display:"flex",flexDirection:"column",alignItems:"center",paddingX:2,children:[(0,l.jsxs)(a.Z,{textAlign:"center",fontSize:24,fontWeight:600,color:"white",marginY:1,children:["\u20b9 ",n]}),(0,l.jsx)(a.Z,{sx:(0,i.Z)({backgroundColor:"orange",fontSize:16,fontWeight:600,color:"white",paddingX:1,paddingY:.5,borderRadius:1,textAlign:"center",width:100},t.breakpoints.down("sm"),{}),children:"Pending"}),(0,l.jsx)(a.Z,{sx:(0,i.Z)({textAlign:"center",fontSize:18,fontWeight:600,color:"white",marginTop:1},t.breakpoints.down("sm"),{fontSize:16}),children:"Withdrawal To Bank Account"}),(0,l.jsx)(a.Z,{sx:(0,i.Z)({fontSize:14,fontWeight:500,marginTop:1,textAlign:"center"},t.breakpoints.down("sm"),{fontSize:12}),children:"We've received your withdrawal request. Incase it fails, the amount will be returned to your Funds in Wallet."})]}),(0,l.jsxs)(r.Z,{display:"flex",flexDirection:"column",alignItems:"center",paddingX:3,marginY:2,children:[(0,l.jsxs)(r.Z,{sx:{display:"flex",justifyContent:"space-between",width:"100%"},children:[(0,l.jsx)(a.Z,{children:"Payment Method"}),(0,l.jsx)(a.Z,{children:"NEFT"})]}),(0,l.jsxs)(r.Z,{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[(0,l.jsx)(a.Z,{children:"From"}),(0,l.jsx)(a.Z,{children:"Agency Wallet"})]}),(0,l.jsxs)(r.Z,{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[(0,l.jsx)(a.Z,{children:"Account"}),(0,l.jsx)(a.Z,{children:"****414"})]}),(0,l.jsxs)(r.Z,{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[(0,l.jsx)(a.Z,{children:"Started on"}),(0,l.jsx)(a.Z,{children:"12/01/2023"})]}),(0,l.jsxs)(r.Z,{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[(0,l.jsx)(a.Z,{children:"Transaction Fee"}),(0,l.jsx)(a.Z,{children:"No Fee"})]})]})]})})}},6407:function(e,n,t){"use strict";t.r(n);var i=t(14924),l=t(85893),s=t(4749),r=t(37887),d=t(2734),a=t(50135),o=t(11057),c=t(87357),x=t(15861),h=t(67294),u=t(9473),f=t(52331);n.default=function(){var e,n=(0,h.useState)(""),t=n[0],g=n[1],j=(0,d.Z)(),w=(0,h.useState)(!0),p=w[0],y=w[1],Z=(0,u.v9)((function(e){var n,t;return null===(n=e.user)||void 0===n||null===(t=n.agencyCode)||void 0===t?void 0:t.agencyCode})),m=(0,r.a)(s.dE,{variables:{agencyCode:Z}}).data,b=null===m||void 0===m||null===(e=m.GetFinalWalletBalanceOfAgency)||void 0===e?void 0:e.finalBalance;return(0,l.jsx)(l.Fragment,{children:p?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(c.Z,{sx:{marginTop:2},children:(0,l.jsx)(c.Z,{sx:(0,i.Z)({width:"95%",display:"flex",flexDirection:"column",padding:"2%"},j.breakpoints.down("sm"),{width:"100%"}),children:(0,l.jsxs)("div",{children:[(0,l.jsx)(x.Z,{sx:{fontSize:"20px",fontWeight:"500",textAlign:"center"},children:"Amount To Withdraw"}),(0,l.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,l.jsx)(a.Z,{sx:(0,i.Z)({marginTop:2,width:"30%",display:"flex",justifyContent:"center"},j.breakpoints.down("sm"),{width:"100%"}),id:"outlined",type:"number",label:"Amount To Withdrawal",variant:"outlined",value:t,onChange:function(e){g(e.target.value)}})}),t>=b&&(0,l.jsx)(x.Z,{textAlign:"center",fontWeight:"700",color:"red",children:"Amount must be less than wallet balance"}),(0,l.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,l.jsx)(o.Z,{onClick:function(){y(!p)},variant:"contained",sx:(0,i.Z)({width:"30%",display:"flex",justifyContent:"center",cursor:"unset",padding:1,margin:1},j.breakpoints.down("sm"),{width:"100%"}),disabled:t>=b||t<="0",children:"Place Withdrawal Request"})})]})})})}):(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(f.default,{amountToWithdraw:t})})})}}},function(e){e.O(0,[8244,9990,9213,4753,6827,6549,7058,788,8584,7785,9774,2888,179],(function(){return n=15705,e(e.s=n);var n}));var n=e.O();_N_E=n}]);