"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2143],{70476:function(e,n,t){t.r(n),t.d(n,{AllBankDetails:function(){return o},AllProjectDetails:function(){return r}});var a=t(85893),o={HajipurBankDetails:[{key:"Company Name",info:"RAMAERA INDUSTRIES LTD."},{key:"Bank Name",info:"HDFC BANK "},{key:"Branch",info:"HAJIPUR BIHAR"},{key:"A/C No.",info:"50200078200870"},{key:"IFSC CODE ",info:"HDFC0000088"}],AgraBankDetails:[{key:"Company Name",info:"RAMAERA INDUSTRIES LTD.."},{key:"Bank Name",info:"HDFC BANK "},{key:"Branch",info:"NOIDA SECTOR 18"},{key:"A/C No.",info:"50200069506090"},{key:"IFSC CODE ",info:"HDFC0000088"}],HyderabadBankDetails:[{key:"Company Name",info:"RAMAERA INDUSTRIES LTD.."},{key:"Bank Name",info:"SBI BANK"},{key:"Branch",info:"NOIDA SECTOR 61"},{key:"A/C No.",info:"00000042628262780"},{key:"IFSC CODE ",info:"SBIN0005222"}]},r={HajipurProjectDetails:[2e7,1167e4,{key:"Your Enrollment Amount is ",info:"0"},{key:"Your No. of profit persons",info:"0"},{key:"Required Fund",info:"Rs 2 cr."},{key:"Required No. of Share Holder",info:"8000"},{key:"Per Share Holder Required Fund",info:"Minimum 2500 to multiple 8"},{key:"No. of share allotment",info:"Rs 200/Share"},{key:"Net Profit Sharing",info:"55%"},{key:"Total Enrolled Share",info:"8000"},{key:"Total Enrolled",info:"4668"},{key:"Till Raised Fund",info:"11670000"},{key:"Remain Funding",info:"8330000"},{key:"Upcoming Enroll",info:"3332"}],AgraProjectDetails:[33e5,100500,{key:"Your Enrollment Amount is ",info:"0"},{key:"Your No. of profit persons",info:"0"},{key:"Required Fund",info:"Rs 33 Lakh"},{key:"Required No. of Share Holder",info:"6600"},{key:"Per Share Holder Required Fund",info:"500"},{key:"No. of share allotment",info:"Rs 200/Share"},{key:"Net Profit Sharing",info:"55%"},{key:"Total Enrolled Share",info:"500"},{key:"Total Enrolled",info:"201"},{key:"Till Raised Fund",info:"100500"},{key:"Remain Funding",info:"3199500"},{key:"Upcoming Enroll",info:"6399"}],HyderabadProjectDetails:[15e6,0,{key:"Your Enrollment Amount is ",info:"0"},{key:"Your No. of profit persons",info:"0"},{key:"Required Fund",info:"Rs 1.5 Cr."},{key:"Required No. of Share Holder",info:"Announced Soon"},{key:"Minimum Funding",info:"Rs 2500 to Multiple "},{key:"Total Profit Units",info:"6000 "},{key:"Net Profit Sharing",info:"55%"},{key:"Phase 1 ",info:"6000000"},{key:"Phase 2 ",info:"7000000"},{key:"Phase 3 ",info:"2000000"}]};n.default=function(){return(0,a.jsx)("div",{children:"RemoveError"})}},30313:function(e,n,t){t.r(n);var a=t(47568),o=t(14924),r=t(26042),i=t(69396),s=t(828),d=t(29815),l=t(97582),c=t(85893),u=t(4749),m=t(26183),f=t(89448),p=t(29792),y=t(50319),h=t(8987),_=t(2734),g=t(87357),x=t(11057),v=t(50135),j=t(15861),P=t(53816),k=t(53252),Z=t(67294),b=t(86501);n.default=function(e){var n=e.data,t=e.documents,D=void 0===t?[]:t,C=e.user,A=e.rowNo,R=e.projectTitle,S=e.hideAdditionalDocuments,w=(0,_.Z)(),E=(0,Z.useState)([]),L=E[0],N=E[1],T=(0,Z.useState)([]),F=T[0],U=T[1],I=(0,Z.useState)(A),B=I[0],O=I[1],H=(0,s.Z)((0,y.D)(u.Is),1)[0],V=(0,s.Z)((0,y.D)(u.yW),1)[0],W=(0,Z.useState)(R),q=W[0],M=(W[1],(0,Z.useState)(["","","",""])),Y=M[0],z=M[1],K=(0,Z.useState)(!1),J=K[0],G=K[1],X=(0,Z.useState)([]),Q=X[0],$=(X[1],(0,m.T)());(0,Z.useEffect)((function(){O(A)}),[A]),(0,Z.useEffect)((function(){var e=[],t=[],a=!0,o=!1,r=void 0;try{for(var i,s=D[Symbol.iterator]();!(a=(i=s.next()).done);a=!0){var d=i.value;e.push(d.url),t.push(d.referralAgencyCode)}}catch(c){o=!0,r=c}finally{try{a||null==s.return||s.return()}finally{if(o)throw r}}N(e);var l=["","","",""];z(l),n.config.items.map((function(e){C.documents.map((function(n){var t=q.toLowerCase()+"_"+e.id;n.title===t&&(l[parseInt(t[t.length-1])-1]=n.referralAgencyCode||"")}))})),z(l)}),[D,C]);var ee=function(){var e=(0,a.Z)((function(e,n,t){return(0,l.__generator)(this,(function(a){switch(a.label){case 0:return[4,H({variables:{title:e,url:n,referralAgencyCode:t}})];case 1:return[2,a.sent()]}}))}));return function(n,t,a){return e.apply(this,arguments)}}(),ne=function(){var e=(0,a.Z)((function(e,n,t,a){return(0,l.__generator)(this,(function(o){switch(o.label){case 0:return[4,V({variables:{id:e,title:n,url:t,referralAgencyCode:a}})];case 1:return[2,o.sent()]}}))}));return function(n,t,a,o){return e.apply(this,arguments)}}(),te=function(e,n,t){var a,o=C,s=[];return null===C||void 0===C||null===(a=C.documents)||void 0===a||a.map((function(t){t.id===e?s.push((0,i.Z)((0,r.Z)({},t),{title:"avatar"})):t.title!==n&&s.push(t)})),(0,i.Z)((0,r.Z)({},o),{documents:s})},ae=function(e){var n=!1;return null===Q||void 0===Q||Q.map((function(t){e===t.id&&(n=t.status)})),n},oe=function(){var e=(0,a.Z)((function(){var e,t,a;return(0,l.__generator)(this,(function(o){switch(o.label){case 0:G(!0),o.label=1;case 1:o.trys.push([1,6,,7]),e=function(e){var t,a,o,i,s,c,u,m,y;return(0,l.__generator)(this,(function(l){switch(l.label){case 0:return F[e]?(t=R+"_"+n.config.items[e].id,[4,(0,p.Z)(L[e])]):[3,7];case 1:return a=l.sent(),o=Y[e],i=D.find((function(e){if(e.title.toLowerCase()===t.toLowerCase())return!0})),(s=null===C||void 0===C?void 0:C.documents)||(s=[]),i?[4,ne(i.id,t.toLowerCase(),a,o)]:[3,4];case 2:return c=l.sent(),[4,$((0,f.j2)(te(i.id,t)))];case 3:return l.sent(),b.ZP.success("".concat(t," Uploaded")),(u=s.filter((function(e){return e.id!==document.id}))).push(c.data.updateDocument),s=u,[3,6];case 4:return[4,ee(t.toLowerCase(),a,o)];case 5:m=l.sent(),console.log("resp",m),b.ZP.success("".concat(t," Uploaded")),s=(0,d.Z)(s).concat([m.data.createDocument]),l.label=6;case 6:(y=(0,r.Z)({},C)).documents=s,$((0,f.j2)(y)),l.label=7;case 7:return[2]}}))},t=0,o.label=2;case 2:return t<B?[5,(0,l.__values)(e(t))]:[3,5];case 3:o.sent(),o.label=4;case 4:return t++,[3,2];case 5:return[3,7];case 6:return a=o.sent(),console.log("error",a),[3,7];case 7:return G(!1),[2]}}))}));return function(){return e.apply(this,arguments)}}();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(P.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,c.jsx)(k.Z,{sx:(0,o.Z)({display:"flex",flexDirection:"column",border:"none"},w.breakpoints.down("sm"),{paddingRight:0}),children:function(){for(var e=[],t=(n.config.items,0);t<B;t++){var a=L[t];a&&e.push((0,c.jsx)("div",{style:{marginTop:15},children:(0,c.jsx)("img",{src:"object"==typeof a?URL.createObjectURL(a):a,height:150,style:{marginLeft:"5px"}})}))}return 0==e.length?(0,c.jsx)(j.Z,{variant:"subtitle1",children:"No Document"}):e}()}),(0,c.jsx)(k.Z,{style:{border:"none"},children:function(){for(var e=function(e){var n,r,i,s,l,u=(0,d.Z)(Y);t.push((0,c.jsxs)(g.Z,{sx:(0,o.Z)({height:160,marginTop:1,marginLeft:1,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start"},w.breakpoints.down("sm"),{marginLeft:0,marginTop:2}),children:[(0,c.jsxs)(g.Z,{sx:(0,o.Z)({marginBottom:"10px",marginLeft:"15px"},w.breakpoints.down("sm"),{marginBottom:"0px"}),children:["Status:"," ",(0,c.jsx)("span",{style:{color:"APPROVED"===ae(null===(n=D[e])||void 0===n?void 0:n.id)?"green":"REJECTED"===ae(null===(r=D[e])||void 0===r?void 0:r.id)?"red":D[e]?"APPROVED"===D[e].status?"green":"REJECTED"===D[e].status&&"red":""},children:ae(null===(i=D[e])||void 0===i?void 0:i.id)||(null===(s=D[e])||void 0===s?void 0:s.status)||"NOT STARTED"})]}),(0,c.jsxs)(x.Z,{style:{cursor:D[e]&&"APPROVED"===D[e].status?"not-allowed":"pointer",marginTop:"10px"},component:"label",color:D[e]&&"APPROVED"===D[e].status?"secondary":"primary",children:["Choose ",null===(l=a[e])||void 0===l?void 0:l.name,(0,c.jsx)("input",{type:"file",accept:"image/*",hidden:!0,disabled:!!D[e]&&"APPROVED"===D[e].status,onChange:function(n){if(n.target.files.length>0){var t=(0,d.Z)(L);t[e]=n.target.files[0],N(t);var a=(0,d.Z)(F);a[e]=!0,U(a)}}})]}),!C.isKycAgent&&(0,c.jsx)(v.Z,{required:!0,id:"outlined",label:"Secondary Promoter",disabled:!!D[e]&&"APPROVED"===D[e].status,fullWidth:!0,value:Y[e],variant:"outlined",onChange:function(n){n.target.value?u[e]=n.target.value:u[e]=null,z(u)}})]}))},t=[],a=n.config.items,r=0;r<B;r++)e(r);return t}()})]}),(0,c.jsxs)("div",{style:{marginBottom:40},children:[B<=10&&(0,c.jsx)(h.Z,{variant:"contained",disabled:L.length!==B,onClick:function(){O(B+1)},children:"Add More"}),(0,c.jsx)(h.Z,{sx:{marginLeft:1},variant:"contained",onClick:S,children:"Go Back"}),(0,c.jsx)(h.Z,{sx:{marginLeft:1},loading:J,variant:"contained",onClick:function(){oe()},children:"Upload"})]})]})}},39611:function(e,n,t){t.r(n);var a=t(14924),o=t(85893),r=t(2734),i=t(87357),s=t(11057),d=t(71728),l=t(67294);n.default=function(e){var n=e.projectAmount,t=e.title,c=e.ramaeraFund,u=e.isEnrolled,m=(0,r.Z)(),f=(0,l.useState)(!1),p=f[0],y=f[1];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i.Z,{display:"flex",flexDirection:"row",children:[(0,o.jsxs)(i.Z,{my:2,mr:2,display:"flex",gap:2,flexDirection:"column",fontSize:20,color:"#8C7CF0",borderRadius:1,border:1,justifyContent:"center",textAlign:"center",sx:(0,a.Z)({padding:"4%"},m.breakpoints.down("sm"),{padding:"2%"}),children:["Public Fund",(0,o.jsx)("br",{}),"\u20b9 ",n]}),"Hajipur"===t?(0,o.jsxs)(i.Z,{my:2,ml:2,display:"flex",gap:2,flexDirection:"column",fontSize:20,color:"#8C7CF0",borderRadius:1,border:1,justifyContent:"center",textAlign:"center",sx:(0,a.Z)({padding:"4%"},m.breakpoints.down("sm"),{padding:"2%"}),children:["Ramaera Legal Infotech Fund",(0,o.jsx)("br",{}),"\u20b9 ",c]}):""]}),(0,o.jsx)("div",{children:u&&(0,o.jsx)(o.Fragment,{children:p?(0,o.jsx)(d.default,{title:t}):(0,o.jsx)(i.Z,{my:2,display:"flex",gap:2,flexDirection:"column",children:(0,o.jsxs)(s.Z,{variant:"outlined",sx:(0,a.Z)({textTransform:"uppercase",width:"490px"},m.breakpoints.down("sm"),{width:"100%"}),onClick:function(){y(!0)},children:["Total Enrolled ",t]})})})})]})}},52143:function(e,n,t){t.r(n),t.d(n,{rows:function(){return W}});var a=t(47568),o=t(14924),r=t(26042),i=t(69396),s=t(828),d=t(97582),l=t(85893),c=t(4749),u=t(44709),m=t(26183),f=t(89448),p=t(29792),y=t(50319),h=t(8987),_=t(90948),g=t(87357),x=t(2734),v=t(88441),j=t(28962),P=t(88409),k=t(40044),Z=t(11057),b=t(15861),D=t(72882),C=t(55113),A=t(7906),R=t(295),S=t(53816),w=t(53252),E=t(86886),L=t(50135),N=t(67294),T=t(86501),F=t(70476),U=t(9473),I=t(29260),B=t.n(I),O=t(30313),H=t(39611),V=(0,_.ZP)(g.Z)((function(e){e.theme;return"\n      .MuiTabs-scrollableX {\n        overflow-x: auto !important;\n      }\n\n  "})),W=[{config:u.Z.project_payment}];n.default=function(e){var n=e.title,t=(0,x.Z)(),I=(0,m.T)(),q=(0,m.C)((function(e){var n;return null===(n=e.user)||void 0===n?void 0:n.data})),M=(0,N.useState)(!1),Y=M[0],z=M[1],K=(0,N.useState)(0),J=K[0],G=K[1],X=(0,N.useState)(!1),Q=X[0],$=X[1],ee=(0,N.useState)(!1),ne=ee[0],te=ee[1],ae=(0,N.useState)(!1),oe=ae[0],re=ae[1],ie=(0,N.useState)(!1),se=ie[0],de=ie[1],le=(0,N.useState)(null),ce=le[0],ue=le[1],me=(0,N.useState)(),fe=me[0],pe=me[1],ye=(0,N.useState)(!1),he=ye[0],_e=ye[1],ge=(0,N.useState)(!1),xe=ge[0],ve=ge[1],je=(0,s.Z)((0,y.D)(c.Is),1)[0],Pe=(0,s.Z)((0,y.D)(c.yW),1)[0],ke=(0,N.useState)({project:!1}),Ze=ke[0],be=ke[1],De=(0,N.useState)(!1),Ce=De[0],Ae=De[1],Re=n+"ProjectDetails",Se=0,we="total".concat(n,"Amount"),Ee=(0,N.useState)(""),Le=Ee[0],Ne=Ee[1],Te=(0,U.v9)((function(e){return e.allUsers[we]})),Fe={Phase1:[{key:"Phase 1 Running",info:6e6},{key:"Last Date",info:"15/Mar/2024"},{key:"Your Enrolled Funds",info:Se},{key:"Your Total Profit Units",info:Se/2500},{key:"Till Raised Fund By Public",info:Te},{key:"Total Units Distributed",info:Te/2500},{key:"Remaining Funding",info:F.AllProjectDetails[Re][0]-Te}]},Ue=(0,N.useState)("basicInfo"),Ie=Ue[0],Be=Ue[1],Oe=(0,_.ZP)(v.Z)((function(e){var n=e.theme;return(0,o.Z)({height:20,borderRadius:10},"&.".concat(j.Z.colorPrimary),{backgroundColor:n.palette.grey["light"===n.palette.mode?200:800]})})),He=Te/F.AllProjectDetails[Re][0],Ve="hajipur"===n.toLowerCase()||"agra"===n.toLowerCase()?100:(n.toLowerCase(),100*He),We=function(e){var t=[];if(q&&(null===q||void 0===q?void 0:q.documents)){var a=!0,o=!1,r=void 0;try{for(var i,s=function(){var e,a=i.value,o=null===q||void 0===q||null===(e=q.documents)||void 0===e?void 0:e.find((function(e){if(e.title.toLowerCase()===n.toLowerCase()+"_"+a.id.toLowerCase())return!0}));o&&t.push(o)},d=e[Symbol.iterator]();!(a=(i=d.next()).done);a=!0)s()}catch(l){o=!0,r=l}finally{try{a||null==d.return||d.return()}finally{if(o)throw r}}}return t},qe=function(){var e=(0,a.Z)((function(){var e,t;return(0,d.__generator)(this,(function(a){switch(a.label){case 0:if(e=function(e){return!!e||(alert("Invalid Image"),!1)}(ce),!e)return[2];$(!0),a.label=1;case 1:return a.trys.push([1,9,,10]),t="",he?[4,(0,p.Z)(ce)]:[3,3];case 2:return t=a.sent(),[3,4];case 3:t=ce,a.label=4;case 4:return T.ZP.success("Payment Slip Updated "),fe?[4,Pe({variables:{title:n.toLowerCase()+"_"+u.Z.project_payment.id,url:t,id:fe.id,referralAgencyCode:Le}})]:[3,6];case 5:return a.sent(),I((0,f.j2)(function(e,n){var t,a=q,o=[];return null===q||void 0===q||null===(t=q.documents)||void 0===t||t.map((function(t){t.id===e?o.push((0,i.Z)((0,r.Z)({},t),{url:n})):o.push(t)})),(0,i.Z)((0,r.Z)({},a),{documents:o})}(fe.id,t))),[3,8];case 6:return[4,je({variables:{title:n.toLowerCase()+"_"+u.Z.project_payment.id,url:t,referralAgencyCode:Le}})];case 7:a.sent(),a.label=8;case 8:return[3,10];case 9:return a.sent(),[3,10];case 10:return $(!1),ve(!1),[2]}}))}));return function(){return e.apply(this,arguments)}}();(0,N.useEffect)((function(){var e,t;(pe(null),Ae(!1),Ne(null),ue(null),de(!1),q&&(null===q||void 0===q?void 0:q.documents)&&(null===q||void 0===q||null===(e=q.documents)||void 0===e?void 0:e.length)>0)&&(null===q||void 0===q||null===(t=q.documents)||void 0===t||t.find((function(e){e.title.toLowerCase()===n.toLowerCase()+"_"+u.Z.project_payment.id&&(Se+=e.amount,pe(e),ue(e.url),Ne(e.referralAgencyCode),de(!0)),e.title.includes(n.toLowerCase())&&"APPROVED"===e.status&&Ae(!0)})))}),[q,n]),(0,N.useEffect)((function(){!function(){var e,t=0;null===q||void 0===q||null===(e=q.documents)||void 0===e||e.map((function(e){e.title.slice(0,17+n.length).toLowerCase()===n.toLowerCase()+"_"+u.Z.project_payment.id+"_"&&(t+=1),G(t)}))}()}),[n]);var Me,Ye=function(){z(!1)},ze=[{value:"basicInfo",label:"Basic Info",title:n},{value:"enrolledAmt",label:"Enrolled Amount",title:n}],Ke=2e7-Te;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{children:(0,l.jsx)(V,{sx:{marginBottom:4},children:(0,l.jsx)(P.Z,{onChange:function(e,n){Be(n)},value:Ie,textColor:"primary",visibleScrollbar:!0,indicatorColor:"primary",children:ze.map((function(e){return"hyderabad"===e.title.toLowerCase()?"Basic Info"===e.label&&(0,l.jsx)(k.Z,{label:e.label,value:e.value},e.value):(0,l.jsx)(k.Z,{label:e.label,value:e.value},e.value)}))})})}),"basicInfo"===Ie&&(0,l.jsx)("div",{children:Y?(0,l.jsx)(l.Fragment,{children:W.map((function(e,t){return(0,l.jsx)(O.default,{hideAdditionalDocuments:Ye,data:e,rowNo:J,projectTitle:n,user:q,documents:We(e.config.items)},t)}))}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{children:[(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(g.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,l.jsx)(Z.Z,{variant:"outlined",onClick:function(){return be((0,i.Z)((0,r.Z)({},Ze),{project:!Ze.project}))},children:(0,l.jsx)(b.Z,{variant:"h4",sx:(0,o.Z)({},t.breakpoints.down("sm"),{fontSize:12}),children:"Project Details"})}),(0,l.jsxs)(b.Z,{variant:"h4",sx:(0,o.Z)({},t.breakpoints.down("sm"),{fontSize:12,textAlign:"right"}),children:["Enrollment Status :"," ",(0,l.jsx)("span",{style:{color:Ce?"green":"red"},children:Ce?"Enrolled":"Not Enrolled"})," "]})]}),Ze.project&&(0,l.jsxs)(l.Fragment,{children:["Hajipur"===n&&(0,l.jsx)("a",{href:"https://kyc.ramaera.com/Docs/Spice_Project.pdf",target:"_blank",rel:"noopener noreferrer",children:(0,l.jsx)(B(),{style:{transform:"scale(0.75)"},src:"/images/pdf.png",alt:"pdf",height:60,width:60})}),(0,l.jsx)(D.Z,{component:C.Z,sx:{mt:2},children:(0,l.jsx)(A.Z,{sx:{minWidth:100},"aria-label":"simple table",children:(0,l.jsx)(R.Z,{children:F.AllProjectDetails[Re].map((function(e){if(e.key)return(0,l.jsxs)(S.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,l.jsx)(w.Z,{component:"th",scope:"row",children:e.key}),(0,l.jsx)(w.Z,{align:"right",children:"Till Raised Fund"===e.key?Te:"Remain Funding"===e.key?F.AllProjectDetails[Re][0]-Te:"Total Enrolled"===e.key?"hyderabad"===n.toLowerCase()?Te/5e3:e.info:"Upcoming Enroll"===e.key&&"hyderabad"===n.toLowerCase()?(F.AllProjectDetails[Re][0]-Te)/5e3:e.info})]},e.key)}))})})}),"hyderabad"===n.toLowerCase()&&(0,l.jsx)(D.Z,{component:C.Z,sx:{mt:2},children:(0,l.jsx)(A.Z,{sx:{minWidth:100},"aria-label":"simple table",children:(0,l.jsx)(R.Z,{children:Fe.Phase1.map((function(e){return(0,l.jsxs)(S.Z,{children:[(0,l.jsx)(w.Z,{children:e.key}),(0,l.jsx)(w.Z,{children:e.info})]})}))})})})]}),(0,l.jsxs)(g.Z,{sx:{flexGrow:1,my:2},children:[(0,l.jsxs)(b.Z,{variant:"h6",mb:2,textTransform:"uppercase",children:["Total Funding Completed :"," ","\u20b9 ".concat("hajipur"===n.toLowerCase()?"20000000 / \u20b920000000":"agra"===n.toLowerCase()?"".concat(Te," / \u20b93300000"):"".concat(Te,"/ \u20b915000000")," ")]}),(0,l.jsx)(Oe,{variant:"determinate",value:Ve}),(0,l.jsx)(b.Z,{variant:"body2",color:"text.secondary",style:{display:"flex",position:"absolute",marginTop:"-20px",marginLeft:"50px",fontWeight:"bold",color:"white"},children:"".concat(Math.round(Ve),"%")})]})]}),se&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(Z.Z,{style:{marginRight:20},variant:ne?"contained":"outlined",onClick:function(){te(!0),re(!1)},children:(0,l.jsx)(b.Z,{variant:"h4",children:"Bank Details"})}),"hyderabad"===n.toLowerCase()&&(0,l.jsx)(Z.Z,{variant:oe?"contained":"outlined",onClick:function(){te(!1),re(!0)},children:(0,l.jsx)(b.Z,{variant:"h4",children:"UPI"})}),(0,l.jsx)("br",{})]}),ne&&se&&(0,l.jsx)(D.Z,{component:C.Z,sx:{mt:2},children:(0,l.jsx)(A.Z,{sx:{minWidth:100},"aria-label":"simple table",children:(0,l.jsx)(R.Z,{children:F.AllBankDetails[n+"BankDetails"].map((function(e){return(0,l.jsxs)(S.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,l.jsx)(w.Z,{component:"th",scope:"row",children:e.key}),(0,l.jsx)(w.Z,{align:"right",children:e.info})]},e.key)}))})})}),oe&&se&&"hyderabad"===n.toLowerCase()&&(0,l.jsx)(D.Z,{component:C.Z,sx:{mt:2},children:(0,l.jsx)(A.Z,{sx:{minWidth:100},"aria-label":"simple table",children:(0,l.jsxs)(R.Z,{children:[(0,l.jsx)("img",{style:{width:"250px",borderRadius:"20px",padding:"10px"},src:"/images/hyderabad_upi.png"}),(0,l.jsx)(b.Z,{variant:"body1",sx:{my:2,pl:2},children:"OR"}),(0,l.jsx)(b.Z,{variant:"h4",sx:{my:2,pl:2},children:(0,l.jsx)("a",{href:"#",children:"UPI ID : ramaeraindustries@sbi"})})]})})}),ce?(0,l.jsx)("img",{src:"object"==typeof ce?URL.createObjectURL(ce):ce,style:{marginTop:"10px",maxWidth:"100%"},height:200}):null,fe&&fe.status&&(0,l.jsxs)(b.Z,{variant:"h4",sx:{my:2},children:["Status :"," ",(0,l.jsx)("span",{style:{color:fe?"APPROVED"===fe.status?"green":"REJECTED"===fe.status&&"red":""},children:fe&&fe.status})]}),!se&&(0,l.jsx)(Z.Z,{variant:"contained",sx:{mb:2},onClick:function(){return de(!0)},children:"Enroll Now"})]}),se&&(0,l.jsxs)(E.ZP,{container:!0,py:2,spacing:2,children:[(0,l.jsx)(E.ZP,{item:!0,xs:12,sm:5,md:3,lg:3,children:(0,l.jsxs)(Z.Z,{variant:"contained",component:"label",style:{cursor:fe&&"APPROVED"===fe.status?"not-allowed":"pointer"},color:fe&&"APPROVED"===fe.status?"secondary":"primary",children:["Select Payment Slip",(0,l.jsx)("input",{type:"file",accept:"image/*",hidden:!0,disabled:!!fe&&"APPROVED"===fe.status,onChange:function(e){e.target.files.length>0&&(ve(!0),ue(e.target.files[0]),_e(!0))}})]})}),!q.isKycAgent&&(0,l.jsx)(E.ZP,{item:!0,xs:12,sm:4,children:(0,l.jsx)(L.Z,{required:!0,id:"outlined",label:"Secondary Promoter",disabled:!!fe&&"APPROVED"===fe.status,fullWidth:!0,value:Le,variant:"outlined",onChange:function(e){Ne(e.target.value)}})}),(0,l.jsx)(E.ZP,{item:!0,xs:2,children:(0,l.jsx)(h.Z,{loading:Q,fullWidth:!0,variant:"contained",disabled:!xe,onClick:function(){qe()},children:"Submit"})}),(0,l.jsx)(T.x7,{position:"bottom-center",reverseOrder:!1})]}),ce&&(0,l.jsx)(h.Z,{variant:"contained",sx:(Me={},(0,o.Z)(Me,t.breakpoints.down("sm"),{fontSize:12}),(0,o.Z)(Me,"mb",4),Me),onClick:function(){z(!0)},children:"Additional Documents"})]})}),"enrolledAmt"===Ie&&(0,l.jsx)(H.default,{projectAmount:Te,title:n,ramaeraFund:Ke,isEnrolled:Ce})]})}},44709:function(e,n){n.Z={aadhar:{id:"aadhar",name:"Aadhar Card",status:"",items:[{id:"aadhar_front",name:"AADHAR Card Front",status:""},{id:"aadhar_back",name:"AADHAR Card Back",status:""}]},pancard:{id:"pancard",name:"Pancard",status:"",items:[{id:"pancard",name:"Pan Card",status:""}]},avatar:{id:"photo",name:"Photo",status:"",items:[{id:"avatar",name:"Passport Size Photo",status:""}]},voterId:{id:"voterId",name:"Voter Id Card",status:"Not Uploaded",items:[{id:"voterid_front",name:"Voter Id Front",status:""},{id:"voterid_back",name:"Voted Id Card Back",status:""}]},passbook:{name:"Passbook  or Bank Statement",id:"passbook",status:"Not Uploaded",items:[{id:"passbook",name:"Bank Passbook Or Bank Statement",status:"Not Uploaded"}]},payment_proof:{name:"Payment Proof",id:"payment_proof",status:"Not Uploaded",items:[{id:"payment_proof",name:"Payment Proof"}]},agency_payment_proof:{name:"Agency Payment Proof",id:"agency_payment_proof",status:"Not Uploaded",items:[{id:"agency_payment_proof",name:"Agency Payment Proof"}]},upgrade_agency_license_payment_proof_documents:{name:"Upgrade Agency License Payment Proof",id:"upgrade_agency_license_payment_proof",items:[{id:"upgrade_agency_license_payment_proof2",name:"Upgrade Agency License Payment Proof"},{id:"upgrade_agency_license_payment_proof3",name:"Upgrade Agency License Payment Proof"},{id:"upgrade_agency_license_payment_proof4",name:"Upgrade Agency License Payment Proof"},{id:"upgrade_agency_license_payment_proof5",name:"Upgrade Agency License Payment Proof"}]},additional_payment_documents:{name:"Additional Payment Document",id:"additional_payment_doc",items:[{id:"additional_payment_doc2",name:"Payment Document"},{id:"additional_payment_doc3",name:"Payment Document"},{id:"additional_payment_doc4",name:"Payment Document"},{id:"additional_payment_doc5",name:"Payment Document"}]},to_advance_payment_proof:{name:"To Advance Payment Proof",id:"to_advance_payment_proof",status:"Not Uploaded",items:[{id:"to_advance_payment_proof",name:"To Advance Payment Proof"}]},to_advance_additional_documents:{name:"To Advance Additional Payment Document",id:"to_advance_additional_payment_doc",items:[{id:"to_advance_additional_payment_doc2",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc3",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc4",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc5",name:"To Advance Payment Document"}]},driving_license:{name:"Driving License",id:"driving_license",status:"Not Uploaded",items:[{id:"driving_license_front",name:"Driving License Front",status:""},{id:"driving_license_back",name:"Driving License Back",status:""}]},nominee_aadhar:{name:"Nominee Aadhar",id:"nominee_aadhar",status:"Not Uploaded",items:[{id:"nominee_aadhar_front",name:"AADHAR Card Front",status:""},{id:"nominee_aadhar_back",name:"AADHAR Card Back",status:""}]},demat_document:{name:"Demat Document",id:"demat_document",status:"Not Uploaded",items:[{id:"demat_document",name:"Demat Document",status:""}]},additional_demat_documents:{name:"Additional Demat Document",id:"additional_demat_documents",items:[{id:"demat_document_2",name:"Demat Document"},{id:"demat_document_3",name:"Demat Document"},{id:"demat_document_4",name:"Demat Document"},{id:"demat_document_5",name:"Demat Document"}]},project_payment:{name:"Project Payment",id:"project_payment",items:[{id:"project_payment_1",name:"Payment Document"},{id:"project_payment_2",name:"Payment Document"},{id:"project_payment_3",name:"Payment Document"},{id:"project_payment_4",name:"Payment Document"},{id:"project_payment_5",name:"Payment Document"},{id:"project_payment_6",name:"Payment Document"},{id:"project_payment_7",name:"Payment Document"},{id:"project_payment_8",name:"Payment Document"},{id:"project_payment_9",name:"Payment Document"},{id:"project_payment_10",name:"Payment Document"},{id:"project_payment_11",name:"Payment Document"}]},card_payment_proof:{name:"Card Payment Proof",id:"card_payment_proof",status:"Not Uploaded",items:[{id:"card_payment_proof",name:"Card Payment Proof",status:""}]},additional_card_payment_proof:{name:"Additional Card Payment Proof",id:"additional_card_payment_proof",items:[{id:"card_payment_proof_2",name:"Card Payment Proof"},{id:"card_payment_proof_3",name:"Card Payment Proof"},{id:"card_payment_proof_4",name:"Card Payment Proof"},{id:"card_payment_proof_5",name:"Card Payment Proof"}]}}},29792:function(e,n,t){var a=t(47568),o=t(97582),r=t(5121),i=function(){var e=(0,a.Z)((function(e){var n,t;return(0,o.__generator)(this,(function(a){switch(a.label){case 0:(n=new FormData).append("document",e),console.log("img",e,"form",n),a.label=1;case 1:return a.trys.push([1,3,,4]),console.log("NEXR","https://kycramaerabackend.ramaera.com"),[4,r.Z.post("".concat("https://kycramaerabackend.ramaera.com","/documents/upload"),n,{headers:{"Content-Type":"multipart/form-data"}})];case 2:return[2,a.sent().data.url];case 3:return t=a.sent(),console.log(t),[3,4];case 4:return[2]}}))}));return function(n){return e.apply(this,arguments)}}();n.Z=i}}]);