"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7682],{67682:function(n,e,i){i.r(e);var t=i(47568),o=i(14924),r=i(26042),l=i(69396),d=i(828),a=i(97582),c=i(85893),s=i(8987),u=i(2734),h=i(11057),v=i(4749),x=i(27603),m=i(66242),p=i(87357),j=i(94054),g=i(47312),Z=i(80788),f=i(30431),y=i(67720),b=i(7906),w=i(15861),W=i(72882),A=i(53184),D=i(53816),k=i(53252),S=i(295),T=i(41664),C=i.n(T),I=i(67294),P=i(86501),N=i(50319),L=i(37887),_=i(26183),B=i(9473),E=i(32559),O=i(39855);e.default=function(){var n,e,i,T,Y,K,R,F,U,M,G,z,J,H,V,q,Q,X,$=(0,_.T)(),nn=(0,B.v9)((function(n){var e,i;return null===(e=n.user)||void 0===e||null===(i=e.agencyCode)||void 0===i?void 0:i.agencyCode})),en=(0,d.Z)((0,N.D)(v.xb),1)[0],tn=(0,I.useState)({}),on=tn[0],rn=tn[1],ln=(0,I.useState)({}),dn=ln[0],an=ln[1],cn=(0,u.Z)(),sn=(0,I.useState)(!1),un=sn[0],hn=sn[1],vn=(0,I.useState)(""),xn=vn[0],mn=vn[1],pn=(0,L.a)(v.i6),jn=(0,I.useState)(O.monthsData.months[O.monthsData.months.length-1]),gn=jn[0],Zn=jn[1],fn=(0,d.Z)(gn.split("-"),2),yn=fn[0],bn=fn[1],wn=(0,L.a)(v.bi,{variables:{agencyCode:nn,month:parseInt(bn,10),year:parseInt(yn,10)}}),Wn=null===wn||void 0===wn||null===(n=wn.data)||void 0===n||null===(e=n.AgencyPayment)||void 0===e?void 0:e.kycAmount,An=null===wn||void 0===wn||null===(i=wn.data)||void 0===i||null===(T=i.AgencyPayment)||void 0===T?void 0:T.agraProjectAmount,Dn=null===wn||void 0===wn||null===(Y=wn.data)||void 0===Y||null===(K=Y.AgencyPayment)||void 0===K?void 0:K.hajipurProjectAmount,kn=Wn+An+Dn,Sn=null===wn||void 0===wn||null===(R=wn.data)||void 0===R||null===(F=R.AgencyPayment)||void 0===F?void 0:F.BasicKycApprovedUser,Tn=null===wn||void 0===wn||null===(U=wn.data)||void 0===U||null===(M=U.AgencyPayment)||void 0===M?void 0:M.AdvanceKycApprovedUser,Cn=[];null===Sn||void 0===Sn||Sn.map((function(n){return Cn.push(n)})),null===Tn||void 0===Tn||Tn.map((function(n){return Cn.push(n)}));var In=null===wn||void 0===wn||null===(G=wn.data)||void 0===G||null===(z=G.AgencyPayment)||void 0===z?void 0:z.basicHajipurprojectDocument,Pn=null===wn||void 0===wn||null===(J=wn.data)||void 0===J||null===(H=J.AgencyPayment)||void 0===H?void 0:H.advanceHajipurprojectDocument,Nn=[];null===In||void 0===In||In.map((function(n){return Nn.push(n)})),null===Pn||void 0===Pn||Pn.map((function(n){return Nn.push(n)}));var Ln=null===wn||void 0===wn||null===(V=wn.data)||void 0===V||null===(q=V.AgencyPayment)||void 0===q?void 0:q.basicAgraprojectDocument,_n=null===wn||void 0===wn||null===(Q=wn.data)||void 0===Q||null===(X=Q.AgencyPayment)||void 0===X?void 0:X.advanceAgraprojectDocument,Bn=[];null===Ln||void 0===Ln||Ln.map((function(n){return Bn.push(n)})),null===_n||void 0===_n||_n.map((function(n){return Bn.push(n)}));var En=new Date("2024-01-01"),On=(new Date("2024-02-01"),En.toISOString().slice(0,7)),Yn=gn>=On,Kn="2024-01"==gn,Rn=function(){var n=(0,t.Z)((function(n,e,i){var t,d,c,s,u;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:rn((0,l.Z)((0,r.Z)({},on),(0,o.Z)({},n.id,!0))),an((0,l.Z)((0,r.Z)({},dn),(0,o.Z)({},n.id,!1))),t="","kyc"===i&&(t="DEPOSIT_KYC"),"project"===i&&(t="DEPOSIT_PROJECT"),d=xn.includes("kyc")?200:xn.includes("hajipur")?.01*(null===n||void 0===n?void 0:n.amount):xn.includes("agra")?.1*(null===n||void 0===n?void 0:n.amount):"",c=(new Date).toLocaleString("en-IN",{timeZone:"Asia/Kolkata",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}),s=[{userId:e},{timeStamp:c}],"project"===i&&s.push({documentId:n.id}),a.label=1;case 1:return a.trys.push([1,3,,4]),[4,en({variables:{agencyCode:nn,category:t,type:"DEPOSIT",amount:d,metaData:s}})];case 2:return a.sent(),P.Am.success(" \u20b9 ".concat(d," Transfer To your  Wallet")),$((0,E.bj)(d)),[3,4];case 3:return u=a.sent(),P.Am.error(u.message),[3,4];case 4:return rn((0,l.Z)((0,r.Z)({},on),(0,o.Z)({},n.id,!1))),an((0,l.Z)((0,r.Z)({},dn),(0,o.Z)({},n.id,!0))),[2]}}))}));return function(e,i,t){return n.apply(this,arguments)}}();return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(m.Z,{children:[(0,c.jsxs)(p.Z,{display:"flex",gap:"20px",alignItems:"center",flexDirection:"row",padding:2,sx:(0,o.Z)({},cn.breakpoints.down("sm"),{flexDirection:"column"}),children:[(0,c.jsx)(p.Z,{fontSize:23,fontWeight:600,children:"Agency Income List"}),(0,c.jsx)(p.Z,{minWidth:"160px",children:(0,c.jsxs)(j.Z,{fullWidth:!0,variant:"outlined",children:[(0,c.jsx)(g.Z,{id:"month-year-dropdown-label",children:"Month and Year"}),(0,c.jsx)(Z.Z,{labelId:"month-year-dropdown-label",id:"month-year-dropdown",label:"Month and Year",value:gn,onChange:function(n){return Zn(n.target.value)},children:O.monthsData.months.map((function(n){return(0,c.jsx)(f.Z,{value:n,children:new Date(n).toLocaleString("default",{month:"long",year:"numeric"})},n)}))})]})}),(0,c.jsxs)(h.Z,{variant:"outlined",sx:{cursor:"unset",padding:1.5,minWidth:"160px"},children:["Amount : \u20b9 ",0|kn]})]}),(0,c.jsx)(y.Z,{}),(0,c.jsxs)(p.Z,{sx:(0,o.Z)({width:"100%",display:"flex",flexDirection:"row"},cn.breakpoints.down("sm"),{flexDirection:"column"}),children:[(0,c.jsxs)(b.Z,{sx:(0,o.Z)({width:un?"22%":"100%",display:"flex",flexDirection:"column",padding:"2%",alignItems:"center"},cn.breakpoints.down("sm"),{width:"100%"}),children:[(0,c.jsx)(w.Z,{textAlign:"center",fontSize:18,fontWeight:600,children:"Check Income Details"}),(0,c.jsxs)(s.Z,{onClick:function(){hn(!0),mn("kyc")},variant:"contained",sx:{mt:2,mb:2,width:"180px"},children:["KYC : \u20b9",0|Wn]}),(0,c.jsxs)(s.Z,{onClick:function(){hn(!0),mn("hajipur")},variant:"contained",sx:{mt:2,mb:2,width:"180px"},children:["HAJIPUR : \u20b9",0|Dn]}),(0,c.jsxs)(s.Z,{onClick:function(){hn(!0),mn("agra")},variant:"contained",sx:{mt:2,mb:2,width:"180px"},children:["AGRA : \u20b9",0|An]})]}),un&&(0,c.jsxs)(W.Z,{sx:(0,o.Z)({width:"78%",borderLeft:"1px solid #2c3151"},cn.breakpoints.down("sm"),{border:"none",width:"100%"}),children:[xn.includes("kyc")&&(0,c.jsxs)(b.Z,{children:[(0,c.jsx)(A.Z,{children:(0,c.jsxs)(D.Z,{children:[(0,c.jsx)(k.Z,{children:"S.No."}),Kn&&(0,c.jsx)(k.Z,{children:"Transfer To Wallet"}),(0,c.jsx)(k.Z,{children:"Name"}),(0,c.jsx)(k.Z,{children:"PWID"}),(0,c.jsx)(k.Z,{children:"KYC Status"}),(0,c.jsx)(k.Z,{children:"Membership"}),(0,c.jsx)(k.Z,{children:"Carry Forward"}),(0,c.jsx)(k.Z,{align:"center",children:"KYC Income"})]})}),(0,c.jsxs)(S.Z,{children:[Cn.map((function(n,e){return(0,c.jsxs)(D.Z,{hover:!0,sx:{cursor:"pointer"},children:[(0,c.jsx)(k.Z,{children:(0,c.jsx)(w.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,align:"center",noWrap:!0,width:30,children:e+1})}),Kn&&(0,c.jsx)(k.Z,{children:(0,c.jsx)(s.Z,{loading:on[n.id],variant:"contained",sx:{fontSize:12,cursor:"unset",padding:1,minWidth:200},disabled:dn[n.id]||pn.data.getAllKycReferral.find((function(e){return e.userId===n.id})),onClick:function(){return Rn(n,n.id,"kyc")},children:"Transfer Amount To Wallet"})}),(0,c.jsx)(k.Z,{children:(0,c.jsx)(w.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:"NULL"===(null===n||void 0===n?void 0:n.name)?null:null===n||void 0===n?void 0:n.name})}),(0,c.jsx)(C(),{href:"",scroll:!1,children:(0,c.jsx)(k.Z,{align:"left",onClick:function(){P.Am.success(" ".concat(n.pw_id," Copied")),navigator.clipboard.writeText(n.pw_id)},children:(0,c.jsx)(w.Z,{variant:"body1",width:"100px",fontWeight:"bold",color:"text.primary",noWrap:!0,children:"NULL"===(null===n||void 0===n?void 0:n.pw_id)?null:null===n||void 0===n?void 0:n.pw_id})})}),(0,c.jsx)(k.Z,{children:(0,c.jsx)(w.Z,{style:{color:"APPROVED"===(null===n||void 0===n?void 0:n.kyc)?"limegreen":"REJECTED"===(null===n||void 0===n?void 0:n.kyc)?"red":"ONGOING"===(null===n||void 0===n?void 0:n.kyc)?"orange":"white"},variant:"body1",fontWeight:"bold",width:"100px",color:"text.success",gutterBottom:!0,noWrap:!0,children:null===n||void 0===n?void 0:n.kyc})}),(0,c.jsx)(k.Z,{children:(0,c.jsx)(w.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,width:"80px",noWrap:!0,children:null===n||void 0===n?void 0:n.membership})}),(0,c.jsx)(k.Z,{children:(0,c.jsx)(w.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:(null===n||void 0===n?void 0:n.createdAt.slice(0,7))===gn?"--":"Carry Forward ".concat((i=null===n||void 0===n?void 0:n.createdAt,new Date(i).toLocaleString("default",{month:"long"})))})}),(0,c.jsx)(k.Z,{align:"center",children:(0,c.jsx)(w.Z,{variant:"body1",fontWeight:"bold",width:"100px",color:"text.success",gutterBottom:!0,noWrap:!0,children:"200"})})]},null===n||void 0===n?void 0:n.id);var i})),(0,c.jsx)(P.x7,{position:"bottom-center",reverseOrder:!1})]})]}),xn.includes("hajipur")&&(0,c.jsx)(x.default,{projectName:"hajipur",data:Nn,walletTransferShowButton:Yn,isLoading:on,isDisable:dn,handleTransferToWallet:Rn}),xn.includes("agra")&&(0,c.jsx)(x.default,{projectName:"agra",data:Bn,walletTransferShowButton:Yn,isLoading:on,isDisable:dn,handleTransferToWallet:Rn})]})]})]})})}},39855:function(n,e,i){i.r(e),i.d(e,{initialDate:function(){return u},monthsData:function(){return h}});for(var t=i(85893),o=new Date,r=[],l=2023;l<=o.getFullYear();l++)for(var d=2023===l?9:0,a=l===o.getFullYear()?o.getMonth():11,c=d;c<=a;c++){var s="".concat(l,"-").concat(String(c+1).padStart(2,"0"));r.push(s)}var u={month:o.getMonth(),year:o.getFullYear()},h={months:r};e.default=function(){return(0,t.jsx)(t.Fragment,{})}},27603:function(n,e,i){i.r(e);var t=i(85893),o=(i(67294),i(8987)),r=i(41664),l=i.n(r),d=i(86501),a=i(7906),c=i(53184),s=i(53816),u=i(53252),h=i(295),v=i(15861),x=i(37887),m=i(4749);e.default=function(n){n.projectName;var e=n.data,i=n.walletTransferShowButton,r=n.isLoading,p=n.isDisable,j=n.handleTransferToWallet,g=(0,x.a)(m.LS);return(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(c.Z,{children:(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(u.Z,{children:"S.No."}),i&&(0,t.jsx)(u.Z,{children:"Transfer To Wallet"}),(0,t.jsx)(u.Z,{children:"Name"}),(0,t.jsx)(u.Z,{children:"PWID"}),(0,t.jsx)(u.Z,{children:"KYC Status"}),(0,t.jsx)(u.Z,{children:"Membership"}),(0,t.jsx)(u.Z,{children:"Invest Amount"})]})}),(0,t.jsxs)(h.Z,{children:[e.map((function(n,e){var a,c,h,x,m,Z,f,y,b,w;return(0,t.jsxs)(s.Z,{hover:!0,sx:{cursor:"pointer"},children:[(0,t.jsx)(u.Z,{children:(0,t.jsx)(v.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,align:"center",noWrap:!0,width:30,children:e+1})}),i&&(0,t.jsx)(u.Z,{children:(0,t.jsx)(o.Z,{loading:r[n.id],variant:"contained",sx:{fontSize:12,cursor:"unset",padding:1,minWidth:200},disabled:p[n.id]||(null===(a=g.data)||void 0===a?void 0:a.getAllProjectReferral.find((function(e){return e.documentId===n.id}))),onClick:function(){var e;return j(n,null===n||void 0===n||null===(e=n.user)||void 0===e?void 0:e.id,"project")},children:"Transfer Amount To Wallet"})}),(0,t.jsx)(u.Z,{children:(0,t.jsx)(v.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:"NULL"===(null===n||void 0===n||null===(c=n.user)||void 0===c?void 0:c.name)?null:null===n||void 0===n||null===(h=n.user)||void 0===h?void 0:h.name})}),(0,t.jsx)(l(),{href:"",scroll:!1,children:(0,t.jsx)(u.Z,{align:"left",onClick:function(){d.Am.success("PWID ".concat(n.user.pw_id," Copied")),navigator.clipboard.writeText(n.user.pw_id)},children:(0,t.jsx)(v.Z,{variant:"body1",width:"100px",fontWeight:"bold",color:"text.primary",noWrap:!0,children:"NULL"===(null===n||void 0===n||null===(x=n.user)||void 0===x?void 0:x.pw_id)?null:null===n||void 0===n||null===(m=n.user)||void 0===m?void 0:m.pw_id})})}),(0,t.jsx)(u.Z,{children:(0,t.jsx)(v.Z,{style:{color:"APPROVED"===(null===n||void 0===n||null===(Z=n.user)||void 0===Z?void 0:Z.kyc)?"limegreen":"REJECTED"===(null===n||void 0===n||null===(f=n.user)||void 0===f?void 0:f.kyc)?"red":"ONGOING"===(null===n||void 0===n||null===(y=n.user)||void 0===y?void 0:y.kyc)?"orange":"white"},variant:"body1",fontWeight:"bold",width:"100px",color:"text.success",gutterBottom:!0,noWrap:!0,children:null===n||void 0===n||null===(b=n.user)||void 0===b?void 0:b.kyc})}),(0,t.jsx)(u.Z,{align:"left",children:(0,t.jsx)(v.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,width:"80px",noWrap:!0,children:null===n||void 0===n||null===(w=n.user)||void 0===w?void 0:w.membership})}),(0,t.jsx)(u.Z,{align:"center",children:(0,t.jsx)(v.Z,{variant:"body1",fontWeight:"bold",width:"100px",color:"text.success",gutterBottom:!0,noWrap:!0,children:null===n||void 0===n?void 0:n.amount})})]},null===n||void 0===n?void 0:n.id)})),(0,t.jsx)(d.x7,{position:"bottom-center",reverseOrder:!1})]})]})}}}]);