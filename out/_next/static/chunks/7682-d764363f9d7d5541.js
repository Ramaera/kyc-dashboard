"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7682],{67682:function(n,e,i){i.r(e);var t=i(47568),o=i(14924),l=i(26042),r=i(69396),a=i(828),d=i(97582),s=i(85893),c=i(8987),u=i(2734),h=i(11057),v=i(50657),m=i(37645),x=i(6514),p=i(58951),j=i(31425),f=i(4749),g=i(27603),y=i(66242),Z=i(87357),b=i(94054),w=i(47312),A=i(80788),W=i(30431),D=i(67720),T=i(7906),k=i(15861),P=i(72882),S=i(53184),C=i(53816),I=i(53252),L=i(295),N=i(41664),B=i.n(N),E=i(67294),H=i(86501),_=i(50319),O=i(37887),R=i(26183),F=i(9473),Y=i(32559),K=i(39855);e.default=function(){var n,e,i,N,M,U,G,J,z,V,q,Q,X,$,nn,en,tn,on,ln,rn,an,dn,sn,cn,un,hn,vn,mn,xn,pn,jn=(0,R.T)(),fn=(0,F.v9)((function(n){var e,i;return null===(e=n.user)||void 0===e||null===(i=e.agencyCode)||void 0===i?void 0:i.agencyCode})),gn=(0,a.Z)((0,_.D)(f.xb),1)[0],yn=(0,E.useState)({}),Zn=yn[0],bn=yn[1],wn=(0,E.useState)({}),An=wn[0],Wn=wn[1],Dn=(0,E.useState)(!1),Tn=Dn[0],kn=Dn[1],Pn=(0,u.Z)(),Sn=(0,E.useState)(!1),Cn=Sn[0],In=Sn[1],Ln=(0,E.useState)(""),Nn=Ln[0],Bn=Ln[1],En=(0,O.a)(f.i6),Hn=(0,E.useState)(K.monthsData.months[K.monthsData.months.length-1]),_n=Hn[0],On=Hn[1],Rn=(0,a.Z)(_n.split("-"),2),Fn=Rn[0],Yn=Rn[1],Kn=(0,O.a)(f.bi,{variables:{agencyCode:fn,month:parseInt(Yn,10),year:parseInt(Fn,10)}}),Mn=(null===Kn||void 0===Kn||null===(n=Kn.data)||void 0===n||null===(e=n.AgencyPayment)||void 0===e?void 0:e.kycRewardAmount)||200,Un=null===Kn||void 0===Kn||null===(i=Kn.data)||void 0===i||null===(N=i.AgencyPayment)||void 0===N?void 0:N.kycAmount,Gn=null===Kn||void 0===Kn||null===(M=Kn.data)||void 0===M||null===(U=M.AgencyPayment)||void 0===U?void 0:U.agraProjectAmount,Jn=null===Kn||void 0===Kn||null===(G=Kn.data)||void 0===G||null===(J=G.AgencyPayment)||void 0===J?void 0:J.hajipurProjectAmount,zn=Un+Gn+Jn,Vn=null===Kn||void 0===Kn||null===(z=Kn.data)||void 0===z||null===(V=z.AgencyPayment)||void 0===V?void 0:V.selfAgencyAgraPaymentAmount,qn=null===Kn||void 0===Kn||null===(q=Kn.data)||void 0===q||null===(Q=q.AgencyPayment)||void 0===Q?void 0:Q.selfAgencyHajipurPaymentAmount,Qn=null===Kn||void 0===Kn||null===(X=Kn.data)||void 0===X||null===($=X.AgencyPayment)||void 0===$?void 0:$.hyderabadProjectAmount,Xn=null===Kn||void 0===Kn||null===(nn=Kn.data)||void 0===nn||null===(en=nn.AgencyPayment)||void 0===en?void 0:en.selfAgencyHyderabadPaymentAmount,$n=null===Kn||void 0===Kn||null===(tn=Kn.data)||void 0===tn||null===(on=tn.AgencyPayment)||void 0===on?void 0:on.KycApprovedUser;console.log("kycIncomeData",$n);var ne=null===Kn||void 0===Kn||null===(ln=Kn.data)||void 0===ln||null===(rn=ln.AgencyPayment)||void 0===rn?void 0:rn.HajipurprojectDocument,ee=null===Kn||void 0===Kn||null===(an=Kn.data)||void 0===an||null===(dn=an.AgencyPayment)||void 0===dn?void 0:dn.AgraprojectDocument,ie=null===Kn||void 0===Kn||null===(sn=Kn.data)||void 0===sn||null===(cn=sn.AgencyPayment)||void 0===cn?void 0:cn.HyderabadprojectDocument,te=null===Kn||void 0===Kn||null===(un=Kn.data)||void 0===un||null===(hn=un.AgencyPayment)||void 0===hn?void 0:hn.selfHajipurInvestmentDocument,oe=[];null===te||void 0===te||te.map((function(n){return oe.push(n)}));var le=null===Kn||void 0===Kn||null===(vn=Kn.data)||void 0===vn||null===(mn=vn.AgencyPayment)||void 0===mn?void 0:mn.selfAgraInvestmentDocument,re=[];null===le||void 0===le||le.map((function(n){return re.push(n)}));var ae=null===Kn||void 0===Kn||null===(xn=Kn.data)||void 0===xn||null===(pn=xn.AgencyPayment)||void 0===pn?void 0:pn.selfAgraInvestmentDocument,de=[];null===ae||void 0===ae||ae.map((function(n){return de.push(n)}));var se=new Date("2024-01-01"),ce=(new Date("2024-02-01"),se.toISOString().slice(0,7)),ue=_n>=ce,he=new Date,ve=he.getFullYear(),me=he.getMonth()+1,xe="".concat(ve,"-").concat(me<10?"0":"").concat(me),pe=ue&&_n<xe,je=function(){var n=(0,t.Z)((function(n,e,i){var t,a,s,c,u;return(0,d.__generator)(this,(function(d){switch(d.label){case 0:if(bn((0,r.Z)((0,l.Z)({},Zn),(0,o.Z)({},n.id,!0))),Wn((0,r.Z)((0,l.Z)({},An),(0,o.Z)({},n.id,!1))),t="","kyc"===i&&(t="DEPOSIT_KYC"),"project"===i&&(t="DEPOSIT_PROJECT"),a=Nn.includes("kyc")?Mn:Nn.includes("hajipur")?.01*(null===n||void 0===n?void 0:n.amount):Nn.includes("agra")||Nn.includes("hyderabad")?.1*(null===n||void 0===n?void 0:n.amount):Nn.includes("selfHajipur")?.01*(null===n||void 0===n?void 0:n.amount):Nn.includes("selfAgra")||Nn.includes("selfHyderabad")?.1*(null===n||void 0===n?void 0:n.amount):"",s=(new Date).toLocaleString("en-IN",{timeZone:"Asia/Kolkata",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}),c=[{userId:e},{timeStamp:s}],"project"===i&&c.push({documentId:n.id}),0===a||""===a||null===a)return[3,5];d.label=1;case 1:return d.trys.push([1,3,,4]),[4,gn({variables:{agencyCode:fn,category:t,type:"DEPOSIT",amount:a,metaData:c}})];case 2:return d.sent(),H.Am.success(" \u20b9 ".concat(a," Transfer To your  Wallet")),jn((0,Y.bj)(a)),[3,4];case 3:return u=d.sent(),H.Am.error(u.message),[3,4];case 4:return[3,6];case 5:kn(!0),d.label=6;case 6:return bn((0,r.Z)((0,l.Z)({},Zn),(0,o.Z)({},n.id,!1))),Wn((0,r.Z)((0,l.Z)({},An),(0,o.Z)({},n.id,!0))),[2]}}))}));return function(e,i,t){return n.apply(this,arguments)}}(),fe=function(){kn(!1)};return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(y.Z,{children:[(0,s.jsxs)(Z.Z,{display:"flex",gap:"20px",alignItems:"center",flexDirection:"row",padding:2,sx:(0,o.Z)({},Pn.breakpoints.down("sm"),{flexDirection:"column"}),children:[(0,s.jsx)(Z.Z,{fontSize:23,fontWeight:600,children:"Agency Income List"}),(0,s.jsx)(Z.Z,{minWidth:"160px",children:(0,s.jsxs)(b.Z,{fullWidth:!0,variant:"outlined",children:[(0,s.jsx)(w.Z,{id:"month-year-dropdown-label",children:"Month and Year"}),(0,s.jsx)(A.Z,{labelId:"month-year-dropdown-label",id:"month-year-dropdown",label:"Month and Year",value:_n,onChange:function(n){return On(n.target.value)},children:K.monthsData.months.map((function(n){return(0,s.jsx)(W.Z,{value:n,children:new Date(n).toLocaleString("default",{month:"long",year:"numeric"})},n)}))})]})}),(0,s.jsxs)(h.Z,{variant:"outlined",sx:{cursor:"unset",padding:1.5,minWidth:"160px"},children:["Amount : \u20b9 ",0|zn]})]}),(0,s.jsx)(D.Z,{}),(0,s.jsxs)(Z.Z,{sx:(0,o.Z)({width:"100%",display:"flex",flexDirection:"row"},Pn.breakpoints.down("sm"),{flexDirection:"column"}),children:[(0,s.jsxs)(T.Z,{sx:(0,o.Z)({width:Cn?"22%":"100%",display:"flex",flexDirection:"column",padding:"2%",alignItems:"center"},Pn.breakpoints.down("sm"),{width:"100%"}),children:[(0,s.jsx)(k.Z,{textAlign:"center",fontSize:18,fontWeight:600,children:"Check Income Details"}),(0,s.jsxs)(c.Z,{onClick:function(){In(!0),Bn("kyc")},variant:"contained",sx:{mt:2,mb:2,width:"220px"},children:["KYC : \u20b9",0|Un]}),(0,s.jsxs)(c.Z,{onClick:function(){In(!0),Bn("hajipur")},variant:"contained",sx:{mt:2,mb:2,width:"220px"},children:["HAJIPUR : \u20b9",0|Jn]}),(0,s.jsxs)(c.Z,{onClick:function(){In(!0),Bn("agra")},variant:"contained",sx:{mt:2,mb:2,width:"220px"},children:["AGRA : \u20b9",0|Gn]}),(0,s.jsxs)(c.Z,{onClick:function(){In(!0),Bn("hyderabad")},variant:"contained",sx:{mt:2,mb:2,width:"220px"},children:["Hyderabad : \u20b9",0|Qn]}),(0,s.jsxs)(c.Z,{onClick:function(){In(!0),Bn("selfHajipur")},variant:"contained",sx:{mt:2,mb:2,width:"220px"},children:["SELF HAJIPUR : \u20b9",0|qn]}),(0,s.jsxs)(c.Z,{onClick:function(){In(!0),Bn("selfAgra")},variant:"contained",sx:{mt:2,mb:2,width:"220px"},children:["SELF AGRA : \u20b9",0|Vn]}),(0,s.jsxs)(c.Z,{onClick:function(){In(!0),Bn("selfHyderabad")},variant:"contained",sx:{mt:2,mb:2,width:"220px"},children:["SELF HYDERABAD : \u20b9",0|Xn]})]}),Cn&&(0,s.jsxs)(P.Z,{sx:(0,o.Z)({width:"78%",borderLeft:"1px solid #2c3151"},Pn.breakpoints.down("sm"),{border:"none",width:"100%"}),children:[Nn.includes("kyc")&&(0,s.jsxs)(T.Z,{children:[(0,s.jsx)(S.Z,{children:(0,s.jsxs)(C.Z,{children:[(0,s.jsx)(I.Z,{children:"S.No."}),pe&&(0,s.jsx)(I.Z,{children:"Transfer To Wallet"}),(0,s.jsx)(I.Z,{children:"Name"}),(0,s.jsx)(I.Z,{children:"PWID"}),(0,s.jsx)(I.Z,{children:"KYC Status"}),(0,s.jsx)(I.Z,{children:"Membership"}),(0,s.jsx)(I.Z,{children:"Carry Forward"}),(0,s.jsx)(I.Z,{align:"center",children:"KYC Income"})]})}),(0,s.jsxs)(L.Z,{children:[null===$n||void 0===$n?void 0:$n.map((function(n,e){return(0,s.jsxs)(C.Z,{hover:!0,sx:{cursor:"pointer"},children:[(0,s.jsx)(I.Z,{children:(0,s.jsx)(k.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,align:"center",noWrap:!0,width:30,children:e+1})}),pe&&(0,s.jsx)(I.Z,{children:(0,s.jsx)(c.Z,{loading:Zn[n.id],variant:"contained",sx:{fontSize:12,cursor:"unset",padding:1,minWidth:200},disabled:An[n.id]||En.data.getAllKycReferral.find((function(e){return e.userId===n.id})),onClick:function(){return je(n,n.id,"kyc")},children:"Transfer Amount To Wallet"})}),(0,s.jsx)(I.Z,{children:(0,s.jsx)(k.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:"NULL"===(null===n||void 0===n?void 0:n.name)?null:null===n||void 0===n?void 0:n.name})}),(0,s.jsx)(B(),{href:"",scroll:!1,children:(0,s.jsx)(I.Z,{align:"left",onClick:function(){H.Am.success(" ".concat(n.pw_id," Copied")),navigator.clipboard.writeText(n.pw_id)},children:(0,s.jsx)(k.Z,{variant:"body1",width:"100px",fontWeight:"bold",color:"text.primary",noWrap:!0,children:"NULL"===(null===n||void 0===n?void 0:n.pw_id)?null:null===n||void 0===n?void 0:n.pw_id})})}),(0,s.jsx)(I.Z,{children:(0,s.jsx)(k.Z,{style:{color:"APPROVED"===(null===n||void 0===n?void 0:n.kyc)?"limegreen":"REJECTED"===(null===n||void 0===n?void 0:n.kyc)?"red":"ONGOING"===(null===n||void 0===n?void 0:n.kyc)?"orange":"white"},variant:"body1",fontWeight:"bold",width:"100px",color:"text.success",gutterBottom:!0,noWrap:!0,children:null===n||void 0===n?void 0:n.kyc})}),(0,s.jsx)(I.Z,{children:(0,s.jsx)(k.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,width:"80px",noWrap:!0,children:null===n||void 0===n?void 0:n.membership})}),(0,s.jsx)(I.Z,{children:(0,s.jsx)(k.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:(null===n||void 0===n?void 0:n.createdAt.slice(0,7))===_n?"--":"Carry Forward ".concat((i=null===n||void 0===n?void 0:n.createdAt,new Date(i).toLocaleString("default",{month:"long"})))})}),(0,s.jsx)(I.Z,{align:"center",children:(0,s.jsx)(k.Z,{variant:"body1",fontWeight:"bold",width:"100px",color:"text.success",gutterBottom:!0,noWrap:!0,children:Mn})})]},null===n||void 0===n?void 0:n.id);var i})),(0,s.jsx)(H.x7,{position:"bottom-center",reverseOrder:!1})]})]}),Nn.includes("hajipur")&&(0,s.jsx)(g.default,{projectName:"hajipur",data:ne,walletTransferShowButton:ue,isLoading:Zn,isDisable:An,handleTransferToWallet:je}),Nn.includes("agra")&&(0,s.jsx)(g.default,{projectName:"agra",data:ee,walletTransferShowButton:ue,isLoading:Zn,isDisable:An,handleTransferToWallet:je}),Nn.includes("hyderabad")&&(0,s.jsx)(g.default,{projectName:"hyderabad",data:ie,walletTransferShowButton:ue,isLoading:Zn,isDisable:An,handleTransferToWallet:je}),Nn.includes("selfHajipur")&&(0,s.jsx)(g.default,{projectName:"selfHajipur",data:oe,walletTransferShowButton:ue,isLoading:Zn,isDisable:An,handleTransferToWallet:je}),Nn.includes("selfAgra")&&(0,s.jsx)(g.default,{projectName:"selfAgra",data:re,walletTransferShowButton:ue,isLoading:Zn,isDisable:An,handleTransferToWallet:je}),Nn.includes("selfHyderabad")&&(0,s.jsx)(g.default,{projectName:"selfHyderabad",data:de,walletTransferShowButton:ue,isLoading:Zn,isDisable:An,handleTransferToWallet:je})]})]}),(0,s.jsxs)(v.Z,{open:Tn,onClose:fe,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,s.jsx)(m.Z,{id:"alert-dialog-title",children:"Zero Amount Issue?"}),(0,s.jsx)(x.Z,{children:(0,s.jsxs)(p.Z,{id:"alert-dialog-description",children:["Kindly Contact to Kyc Person",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"Regarding Mention Amount Of Project"]})}),(0,s.jsx)(j.Z,{children:(0,s.jsx)(h.Z,{onClick:fe,autoFocus:!0,children:"OK"})})]})]})})}},39855:function(n,e,i){i.r(e),i.d(e,{initialDate:function(){return u},monthsData:function(){return h}});for(var t=i(85893),o=new Date,l=[],r=2023;r<=o.getFullYear();r++)for(var a=2023===r?9:0,d=r===o.getFullYear()?o.getMonth():11,s=a;s<=d;s++){var c="".concat(r,"-").concat(String(s+1).padStart(2,"0"));l.push(c)}var u={month:o.getMonth(),year:o.getFullYear()},h={months:l};e.default=function(){return(0,t.jsx)(t.Fragment,{})}},27603:function(n,e,i){i.r(e);var t=i(85893),o=(i(67294),i(8987)),l=i(41664),r=i.n(l),a=i(86501),d=i(7906),s=i(53184),c=i(53816),u=i(53252),h=i(295),v=i(15861),m=i(37887),x=i(4749);e.default=function(n){n.projectName;var e=n.data,i=n.walletTransferShowButton,l=n.isLoading,p=n.isDisable,j=n.handleTransferToWallet,f=(0,m.a)(x.LS);return(0,t.jsxs)(d.Z,{children:[(0,t.jsx)(s.Z,{children:(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(u.Z,{children:"S.No."}),i&&(0,t.jsx)(u.Z,{children:"Transfer To Wallet"}),(0,t.jsx)(u.Z,{children:"Name"}),(0,t.jsx)(u.Z,{children:"PWID"}),(0,t.jsx)(u.Z,{children:"KYC Status"}),(0,t.jsx)(u.Z,{children:"Membership"}),(0,t.jsx)(u.Z,{children:"Invest Amount"})]})}),(0,t.jsxs)(h.Z,{children:[null===e||void 0===e?void 0:e.map((function(n,e){var d,s,h,m,x,g,y,Z,b,w;return(0,t.jsxs)(c.Z,{hover:!0,sx:{cursor:"pointer"},children:[(0,t.jsx)(u.Z,{children:(0,t.jsx)(v.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,align:"center",noWrap:!0,width:30,children:e+1})}),i&&(0,t.jsx)(u.Z,{children:(0,t.jsx)(o.Z,{loading:l[n.id],variant:"contained",sx:{fontSize:12,cursor:"unset",padding:1,minWidth:200},disabled:p[n.id]||(null===(d=f.data)||void 0===d?void 0:d.getAllProjectReferral.find((function(e){return e.documentId===n.id}))),onClick:function(){var e;return j(n,null===n||void 0===n||null===(e=n.user)||void 0===e?void 0:e.id,"project")},children:"Transfer Amount To Wallet"})}),(0,t.jsx)(u.Z,{children:(0,t.jsx)(v.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:"NULL"===(null===n||void 0===n||null===(s=n.user)||void 0===s?void 0:s.name)?null:null===n||void 0===n||null===(h=n.user)||void 0===h?void 0:h.name})}),(0,t.jsx)(r(),{href:"",scroll:!1,children:(0,t.jsx)(u.Z,{align:"left",onClick:function(){a.Am.success("PWID ".concat(n.user.pw_id," Copied")),navigator.clipboard.writeText(n.user.pw_id)},children:(0,t.jsx)(v.Z,{variant:"body1",width:"100px",fontWeight:"bold",color:"text.primary",noWrap:!0,children:"NULL"===(null===n||void 0===n||null===(m=n.user)||void 0===m?void 0:m.pw_id)?null:null===n||void 0===n||null===(x=n.user)||void 0===x?void 0:x.pw_id})})}),(0,t.jsx)(u.Z,{children:(0,t.jsx)(v.Z,{style:{color:"APPROVED"===(null===n||void 0===n||null===(g=n.user)||void 0===g?void 0:g.kyc)?"limegreen":"REJECTED"===(null===n||void 0===n||null===(y=n.user)||void 0===y?void 0:y.kyc)?"red":"ONGOING"===(null===n||void 0===n||null===(Z=n.user)||void 0===Z?void 0:Z.kyc)?"orange":"white"},variant:"body1",fontWeight:"bold",width:"100px",color:"text.success",gutterBottom:!0,noWrap:!0,children:null===n||void 0===n||null===(b=n.user)||void 0===b?void 0:b.kyc})}),(0,t.jsx)(u.Z,{align:"left",children:(0,t.jsx)(v.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,width:"80px",noWrap:!0,children:null===n||void 0===n||null===(w=n.user)||void 0===w?void 0:w.membership})}),(0,t.jsx)(u.Z,{align:"center",children:(0,t.jsx)(v.Z,{variant:"body1",fontWeight:"bold",width:"100px",color:"text.success",gutterBottom:!0,noWrap:!0,children:null===n||void 0===n?void 0:n.amount})})]},null===n||void 0===n?void 0:n.id)})),(0,t.jsx)(a.x7,{position:"bottom-center",reverseOrder:!1})]})]})}}}]);