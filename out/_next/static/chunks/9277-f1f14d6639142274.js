"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9277],{40964:function(e,t,n){n.r(t),n.d(t,{AllBankDetails:function(){return o},AllProjectDetails:function(){return r}});var a=n(85893),o={HajipurBankDetails:[{key:"Company Name",info:"RAMAERA INDUSTRIES LTD."},{key:"Bank Name",info:"HDFC BANK "},{key:"Branch",info:"HAJIPUR BIHAR"},{key:"A/C No.",info:"50200078200870"},{key:"IFSC CODE ",info:"HDFC0000088"}],AgraBankDetails:[{key:"Company Name",info:"RAMAERA INDUSTRIES LTD.."},{key:"Bank Name",info:"HDFC BANK "},{key:"Branch",info:"NOIDA SECTOR 18"},{key:"A/C No.",info:"50200069506090"},{key:"IFSC CODE ",info:"HDFC0000088"}]},r={HajipurProjectDetails:[2e7,1167e4,{key:"Your Enrollment Amount is ",info:"0"},{key:"Your No. of profit persons",info:"0"},{key:"Required Fund",info:"Rs 2 cr."},{key:"Required No. of Share Holder",info:"8000"},{key:"Per Share Holder Required Fund",info:"Minimum 2500 to multiple 8"},{key:"No. of share allotment",info:"Rs 200/Share"},{key:"Net Profit Sharing",info:"55%"},{key:"Total Enrolled Share",info:"8000"},{key:"Total Enrolled",info:"4668"},{key:"Till Raised Fund",info:"11670000"},{key:"Remain Funding",info:"8330000"},{key:"Upcoming Enroll",info:"3332"}],AgraProjectDetails:[33e5,100500,{key:"Your Enrollment Amount is ",info:"0"},{key:"Your No. of profit persons",info:"0"},{key:"Required Fund",info:"Rs 33 Lakh"},{key:"Required No. of Share Holder",info:"6600"},{key:"Per Share Holder Required Fund",info:"500"},{key:"No. of share allotment",info:"Rs 200/Share"},{key:"Net Profit Sharing",info:"55%"},{key:"Total Enrolled Share",info:"500"},{key:"Total Enrolled",info:"201"},{key:"Till Raised Fund",info:"100500"},{key:"Remain Funding",info:"3199500"},{key:"Upcoming Enroll",info:"6399"}]};t.default=function(){return(0,a.jsx)("div",{children:"RemoveError"})}},99277:function(e,t,n){n.r(t),n.d(t,{rows:function(){return I}});var a=n(34051),o=n.n(a),r=n(85893),i=n(45477),s=n(42480),d=n(46230),c=n(20427),l=n(55511),u=n(50319),m=n(8987),f=n(87357),p=n(11057),y=n(15861),h=n(53816),v=n(53252),x=n(90948),_=n(88441),j=n(28962),k=n(72882),g=n(55113),b=n(7906),P=n(295),D=n(86886),A=n(67294),w=n(86501),S=n(26515),C=n(40964),Z=n(9473),E=n(54880);function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function T(e,t,n,a,o,r,i){try{var s=e[r](i),d=s.value}catch(c){return void n(c)}s.done?t(d):Promise.resolve(d).then(a,o)}function N(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var r=e.apply(t,n);function i(e){T(r,a,o,i,s,"next",e)}function s(e){T(r,a,o,i,s,"throw",e)}i(void 0)}))}}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){O(e,t,n[t])}))}return e}function L(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,o,r=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!t||r.length!==t);i=!0);}catch(d){s=!0,o=d}finally{try{i||null==n.return||n.return()}finally{if(s)throw o}}return r}}(e,t)||B(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(e){return function(e){if(Array.isArray(e))return R(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||B(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e,t){if(e){if("string"===typeof e)return R(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?R(e,t):void 0}}var I=[{config:s.Z.project_payment}],H=function(e){var t=e.data,n=e.documents,a=void 0===n?[]:n,s=e.user,x=e.rowNo,_=e.projectTitle,j=e.hideAdditionalDocuments,k=(0,E.a)(),g=(0,A.useState)([]),b=g[0],P=g[1],D=(0,A.useState)([]),S=D[0],C=D[1],Z=(0,A.useState)(x),R=Z[0],T=Z[1],B=L((0,u.D)(i.Is),1)[0],I=L((0,u.D)(i.yW),1)[0],H=(0,A.useState)(!1),V=H[0],W=H[1],q=(0,A.useState)([]),M=q[0],z=(q[1],(0,d.T)());(0,A.useEffect)((function(){T(x)}),[x]),(0,A.useEffect)((function(){var e=[],t=!0,n=!1,o=void 0;try{for(var r,i=a[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){var s=r.value;e.push(s.url)}}catch(d){n=!0,o=d}finally{try{t||null==i.return||i.return()}finally{if(n)throw o}}P(e)}),[a,s]),console.log(S);var J=function(){var e=N(o().mark((function e(t,n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B({variables:{title:t,url:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Y=function(){var e=N(o().mark((function e(t,n,a){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I({variables:{id:t,title:n,url:a}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),G=function(e,t,n){var a,o=s,r=[];return null===s||void 0===s||null===(a=s.documents)||void 0===a||a.map((function(n){n.id===e?r.push(F({},n,{title:"avatar"})):n.title!==t&&r.push(n)})),F({},o,{documents:r})},K=function(e){var t=!1;return null===M||void 0===M||M.map((function(n){e===n.id&&(t=n.status)})),t},$=function(){var e=N(o().mark((function e(){var n,r,i,d,u,m,f,p,y;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:W(!0),e.prev=1,n=0;case 3:if(!(n<R)){e.next=35;break}if(!S[n]){e.next=32;break}return r=_+"_"+t.config.items[n].id,e.next=8,(0,l.Z)(b[n]);case 8:if(i=e.sent,d=a.find((function(e){if(e.title.toLowerCase()===r.toLowerCase())return!0})),(u=null===s||void 0===s?void 0:s.documents)||(u=[]),!d){e.next=24;break}return e.next=15,Y(d.id,r.toLowerCase(),i);case 15:return m=e.sent,e.next=18,z((0,c.j2)(G(d.id,r)));case 18:w.ZP.success("".concat(r," Uploaded")),(f=u.filter((function(e){return e.id!==document.id}))).push(m.data.updateDocument),u=f,e.next=29;break;case 24:return e.next=26,J(r.toLowerCase(),i);case 26:p=e.sent,w.ZP.success("".concat(r," Uploaded")),u=U(u).concat([p.data.createDocument]);case 29:(y=F({},s)).documents=u,z((0,c.j2)(y));case 32:n++,e.next=3;break;case 35:e.next=40;break;case 37:e.prev=37,e.t0=e.catch(1),console.log("error",e.t0);case 40:W(!1);case 41:case"end":return e.stop()}}),e,null,[[1,37]])})));return function(){return e.apply(this,arguments)}}();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(h.Z,{sx:O({"&:last-child td, &:last-child th":{border:0}},k.breakpoints.down("sm"),{display:"flex",flexDirection:"column"}),children:[(0,r.jsx)(v.Z,{style:{display:"flex",flexDirection:"column",border:"none"},width:300,children:function(){for(var e=[],n=(t.config.items,0);n<R;n++){var a=b[n];a&&e.push((0,r.jsx)("div",{style:{marginTop:15},children:(0,r.jsx)("img",{src:"object"==typeof a?URL.createObjectURL(a):a,height:150,style:{marginLeft:"5px"}})}))}return 0==e.length?(0,r.jsx)(y.Z,{variant:"subtitle1",children:"No Document"}):e}()}),(0,r.jsx)(v.Z,{style:{border:"none"},width:300,children:function(){for(var e=function(e){var t,i,s,d,c;n.push((0,r.jsxs)(f.Z,{sx:O({height:160,marginTop:10},k.breakpoints.down("sm"),{height:60}),children:[(0,r.jsxs)("div",{style:{marginBottom:10},children:["Status:"," ",(0,r.jsx)("span",{style:{color:"APPROVED"===K(null===(t=a[e])||void 0===t?void 0:t.id)?"green":"REJECTED"===K(null===(i=a[e])||void 0===i?void 0:i.id)?"red":a[e]?"APPROVED"===a[e].status?"green":"REJECTED"===a[e].status&&"red":""},children:K(null===(s=a[e])||void 0===s?void 0:s.id)||(null===(d=a[e])||void 0===d?void 0:d.status)||"NOT STARTED"})]}),(0,r.jsxs)(p.Z,{style:{cursor:a[0]&&"APPROVED"===a[0].status?"not-allowed":"pointer",marginTop:"10px"},component:"label",color:a[0]&&"APPROVED"===a[0].status?"secondary":"primary",children:["Choose ",null===(c=o[e])||void 0===c?void 0:c.name,(0,r.jsx)("input",{type:"file",accept:"image/*",hidden:!0,disabled:!!a[0]&&"APPROVED"===a[0].status,onChange:function(t){if(console.log(e),t.target.files.length>0){var n=U(b);n[e]=t.target.files[0],P(n),console.log("imageChanged",n[e]);var a=U(S);a[e]=!0,C(a)}}})]})]}))},n=[],o=t.config.items,i=0;i<R;i++)e(i);return n}()}),(0,r.jsx)(v.Z,{style:{border:"none"},width:300,children:(0,r.jsx)(m.Z,{loading:V,variant:"contained",onClick:function(){$()},children:"Upload"})})]},t.config.name),(0,r.jsxs)("div",{style:{marginBottom:40},children:[R<=3&&(0,r.jsx)(m.Z,{variant:"contained",disabled:b.length!==R,onClick:function(){T(R+1)},children:"Add More"}),(0,r.jsx)(m.Z,{sx:{marginLeft:2},variant:"contained",onClick:j,children:"Go Back"})]})]})};t.default=function(e){var t=e.title,n=(0,E.a)(),a=(0,d.T)(),R=(0,d.C)((function(e){var t;return null===(t=e.user)||void 0===t?void 0:t.data})),T=(0,A.useState)(!1),U=T[0],B=T[1],V=(0,A.useState)(0),W=V[0],q=V[1],M=(0,A.useState)(!1),z=M[0],J=M[1],Y=(0,A.useState)(!1),G=Y[0],K=Y[1],$=(0,A.useState)(!1),Q=$[0],X=$[1],ee=(0,A.useState)(null),te=ee[0],ne=ee[1],ae=(0,A.useState)(),oe=ae[0],re=ae[1],ie=(0,A.useState)(!1),se=ie[0],de=ie[1],ce=(0,A.useState)(!1),le=ce[0],ue=ce[1],me=L((0,u.D)(i.Is),1)[0],fe=L((0,u.D)(i.yW),1)[0],pe=(0,A.useState)({project:!1}),ye=pe[0],he=pe[1],ve=(0,A.useState)(!1),xe=ve[0],_e=ve[1],je=t+"ProjectDetails",ke="total".concat(t,"Amount"),ge=(0,Z.v9)((function(e){return e.allUsers[ke]})),be=(0,x.ZP)(_.Z)((function(e){var t=e.theme;return O({height:20,borderRadius:10},"&.".concat(j.Z.colorPrimary),{backgroundColor:t.palette.grey["light"===t.palette.mode?200:800]})})),Pe=ge/C.AllProjectDetails[je][0];console.log("",C.AllProjectDetails[je]);var De=100*Pe,Ae=function(e){return!!e||(alert("Invalid Image"),!1)},we=function(e){var n=[];if(R&&(null===R||void 0===R?void 0:R.documents)){var a=!0,o=!1,r=void 0;try{for(var i,s=function(e,a){var o,r=a.value,i=null===R||void 0===R||null===(o=R.documents)||void 0===o?void 0:o.find((function(e){if(e.title.toLowerCase()===t.toLowerCase()+"_"+r.id.toLowerCase())return!0}));i&&n.push(i)},d=e[Symbol.iterator]();!(a=(i=d.next()).done);a=!0)s(0,i)}catch(c){o=!0,r=c}finally{try{a||null==d.return||d.return()}finally{if(o)throw r}}}return n},Se=function(e,t){var n,a=R,o=[];return null===R||void 0===R||null===(n=R.documents)||void 0===n||n.map((function(n){n.id===e?o.push(F({},n,{url:t})):o.push(n)})),F({},a,{documents:o})},Ce=function(){var e=N(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Ae(te)){e.next=3;break}return e.abrupt("return");case 3:if(J(!0),e.prev=4,n="",!se){e.next=12;break}return e.next=9,(0,l.Z)(te);case 9:n=e.sent,e.next=13;break;case 12:n=te;case 13:if(w.ZP.success("Payment Slip Updated "),!oe){e.next=20;break}return e.next=17,fe({variables:{title:t.toLowerCase()+"_"+s.Z.project_payment.id,url:n,id:oe.id}});case 17:a((0,c.j2)(Se(oe.id,n))),e.next=22;break;case 20:return e.next=22,me({variables:{title:t.toLowerCase()+"_"+s.Z.project_payment.id,url:n}});case 22:e.next=26;break;case 24:e.prev=24,e.t0=e.catch(4);case 26:J(!1);case 27:case"end":return e.stop()}}),e,null,[[4,24]])})));return function(){return e.apply(this,arguments)}}();(0,A.useEffect)((function(){var e,n;(re(null),_e(!1),ne(null),X(!1),R&&(null===R||void 0===R?void 0:R.documents)&&(null===R||void 0===R||null===(e=R.documents)||void 0===e?void 0:e.length)>0)&&(null===R||void 0===R||null===(n=R.documents)||void 0===n||n.find((function(e){e.title.toLowerCase()===t.toLowerCase()+"_"+s.Z.project_payment.id&&(re(e),ne(e.url),X(!0)),e.title.includes(t.toLowerCase())&&"APPROVED"===e.status&&_e(!0)})))}),[R,t]),(0,A.useEffect)((function(){!function(){var e,n=0;null===R||void 0===R||null===(e=R.documents)||void 0===e||e.map((function(e){e.title.slice(0,17+t.length).toLowerCase()===t.toLowerCase()+"_"+s.Z.project_payment.id+"_"&&(n+=1),q(n)}))}()}),[t]);var Ze,Ee=function(){B(!1)};return(0,r.jsxs)(r.Fragment,{children:[U?(0,r.jsx)(r.Fragment,{children:I.map((function(e,n){return(0,r.jsx)(H,{hideAdditionalDocuments:Ee,data:e,rowNo:W,projectTitle:t,user:R,documents:we(e.config.items)},n)}))}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(f.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,r.jsx)(p.Z,{variant:"outlined",onClick:function(){return he(F({},ye,{project:!ye.project}))},children:(0,r.jsx)(y.Z,{variant:"h4",sx:O({},n.breakpoints.down("sm"),{fontSize:12}),children:"Project Details"})}),(0,r.jsxs)(y.Z,{variant:"h4",sx:O({},n.breakpoints.down("sm"),{fontSize:12,textAlign:"right"}),children:["Enrollment Status :"," ",(0,r.jsx)("span",{style:{color:xe?"green":"red"},children:xe?"Enrolled":"Not Enrolled"})," "]})]}),ye.project&&(0,r.jsx)(k.Z,{component:g.Z,sx:{mt:2},children:(0,r.jsx)(b.Z,{sx:{minWidth:100},"aria-label":"simple table",children:(0,r.jsx)(P.Z,{children:C.AllProjectDetails[je].map((function(e){if(e.key)return(0,r.jsxs)(h.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,r.jsx)(v.Z,{component:"th",scope:"row",children:e.key}),(0,r.jsx)(v.Z,{align:"right",children:"Till Raised Fund"===e.key?ge:"Remain Funding"===e.key?C.AllProjectDetails[je][0]-ge:e.info})]},e.key)}))})})}),(0,r.jsxs)(f.Z,{sx:{flexGrow:1,my:2},children:[(0,r.jsxs)(y.Z,{variant:"h6",mb:2,textTransform:"uppercase",children:["Total Funding Completed : ","\u20b9 ".concat(ge)]}),(0,r.jsx)(be,{variant:"determinate",value:De}),(0,r.jsx)(y.Z,{variant:"body2",color:"text.secondary",style:{display:"flex",position:"absolute",marginTop:"-20px",marginLeft:"50px",fontWeight:"bold",color:"white"},children:"".concat(Math.round(De),"%")})]})]}),Q&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p.Z,{variant:"outlined",onClick:function(){return K(!G)},children:(0,r.jsx)(y.Z,{variant:"h4",children:"Bank Details"})}),(0,r.jsx)("br",{})]}),te?(0,r.jsx)("img",{src:"object"==typeof te?URL.createObjectURL(te):te,style:{marginTop:"10px",maxWidth:"100%"},height:200}):null,oe&&oe.status&&(0,r.jsxs)(y.Z,{variant:"h4",sx:{my:2},children:["Status :"," ",(0,r.jsx)("span",{style:{color:oe?"APPROVED"===oe.status?"green":"REJECTED"===oe.status&&"red":""},children:oe&&oe.status})]}),!Q&&(0,r.jsx)(p.Z,{variant:"contained",sx:{mb:2},onClick:function(){return X(!0)},children:"Enroll Now"}),G&&(0,r.jsx)(k.Z,{component:g.Z,sx:{mt:2},children:(0,r.jsx)(b.Z,{sx:{minWidth:100},"aria-label":"simple table",children:(0,r.jsx)(P.Z,{children:C.AllBankDetails[t+"BankDetails"].map((function(e){return(0,r.jsxs)(h.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,r.jsx)(v.Z,{component:"th",scope:"row",children:e.key}),(0,r.jsx)(v.Z,{align:"right",children:e.info})]},e.key)}))})})}),Q&&(0,r.jsxs)(D.ZP,{container:!0,py:2,spacing:2,children:[(0,r.jsx)(D.ZP,{item:!0,xs:12,sm:5,md:3,lg:3,children:(0,r.jsxs)(p.Z,{variant:"contained",component:"label",style:{cursor:oe&&"APPROVED"===oe.status?"not-allowed":"pointer"},color:oe&&"APPROVED"===oe.status?"secondary":"primary",children:["Select Payment Slip",(0,r.jsx)("input",{type:"file",accept:"image/*",hidden:!0,disabled:!!oe&&"APPROVED"===oe.status,onChange:function(e){e.target.files.length>0&&(ue(!0),ne(e.target.files[0]),de(!0))}})]})}),(0,r.jsx)(D.ZP,{item:!0,xs:2,children:(0,r.jsx)(m.Z,{loading:z,fullWidth:!0,variant:"contained",disabled:!le,onClick:function(){Ce()},children:"Submit"})}),(0,r.jsx)(w.x7,{position:"bottom-center",reverseOrder:!1})]}),te&&(0,r.jsx)(m.Z,{variant:"contained",sx:(Ze={},O(Ze,n.breakpoints.down("sm"),{fontSize:12}),O(Ze,"mb",4),Ze),onClick:function(){B(!0)},children:"Add/See Additional Documents"})]}),xe&&(0,r.jsx)(S.default,{title:t})]})}},42480:function(e,t){t.Z={aadhar:{id:"aadhar",name:"Aadhar Card",status:"",items:[{id:"aadhar_front",name:"AADHAR Card Front",status:""},{id:"aadhar_back",name:"AADHAR Card Back",status:""}]},pancard:{id:"pancard",name:"Pancard",status:"",items:[{id:"pancard",name:"Pan Card",status:""}]},avatar:{id:"photo",name:"Photo",status:"",items:[{id:"avatar",name:"Passport Size Photo",status:""}]},voterId:{id:"voterId",name:"Voter Id Card",status:"Not Uploaded",items:[{id:"voterid_front",name:"Voter Id Front",status:""},{id:"voterid_back",name:"Voted Id Card Back",status:""}]},passbook:{name:"Passbook  or Bank Statement",id:"passbook",status:"Not Uploaded",items:[{id:"passbook",name:"Bank Passbook Or Bank Statement",status:"Not Uploaded"}]},payment_proof:{name:"Payment Proof",id:"payment_proof",status:"Not Uploaded",items:[{id:"payment_proof",name:"Payment Proof"}]},agency_payment_proof:{name:"Agency Payment Proof",id:"agency_payment_proof",status:"Not Uploaded",items:[{id:"agency_payment_proof",name:"Agency Payment Proof"}]},additional_documents:{name:"Additional Payment Document",id:"additional_payment_doc",items:[{id:"additional_payment_doc2",name:"Payment Document"},{id:"additional_payment_doc3",name:"Payment Document"},{id:"additional_payment_doc4",name:"Payment Document"},{id:"additional_payment_doc5",name:"Payment Document"}]},to_advance_payment_proof:{name:"To Advance Payment Proof",id:"to_advance_payment_proof",status:"Not Uploaded",items:[{id:"to_advance_payment_proof",name:"To Advance Payment Proof"}]},to_advance_additional_documents:{name:"To Advance Additional Payment Document",id:"to_advance_additional_payment_doc",items:[{id:"to_advance_additional_payment_doc2",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc3",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc4",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc5",name:"To Advance Payment Document"}]},driving_license:{name:"Driving License",id:"driving_license",status:"Not Uploaded",items:[{id:"driving_license_front",name:"Driving License Front",status:""},{id:"driving_license_back",name:"Driving License Back",status:""}]},nominee_aadhar:{name:"Nominee Aadhar",id:"nominee_aadhar",status:"Not Uploaded",items:[{id:"nominee_aadhar_front",name:"AADHAR Card Front",status:""},{id:"nominee_aadhar_back",name:"AADHAR Card Back",status:""}]},demat_document:{name:"Demat Document",id:"demat_document",status:"Not Uploaded",items:[{id:"demat_document",name:"Demat Document",status:""}]},payment_additional_documents:{name:"Additional Payment Document",id:"additional_payment_doc",items:[{id:"additional_payment_doc2",name:"Payment Document"},{id:"additional_payment_doc3",name:"Payment Document"},{id:"additional_payment_doc4",name:"Payment Document"},{id:"additional_payment_doc5",name:"Payment Document"}]},project_payment:{name:"Project Payment",id:"project_payment",items:[{id:"project_payment_1",name:"Payment Document"},{id:"project_payment_2",name:"Payment Document"},{id:"project_payment_3",name:"Payment Document"},{id:"project_payment_4",name:"Payment Document"},{id:"project_payment_5",name:"Payment Document"}]}}},55511:function(e,t,n){var a=n(34051),o=n.n(a),r=n(6154);function i(e,t,n,a,o,r,i){try{var s=e[r](i),d=s.value}catch(c){return void n(c)}s.done?t(d):Promise.resolve(d).then(a,o)}var s=function(){var e,t=(e=o().mark((function e(t){var n,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("document",t),e.next=4,r.Z.post("".concat("https://kycramaerabackend.ramaera.com","/documents/upload"),n,{headers:{"Content-Type":"multipart/form-data"}});case 4:return a=e.sent,e.abrupt("return",a.data.url);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(a,o){var r=e.apply(t,n);function s(e){i(r,a,o,s,d,"next",e)}function d(e){i(r,a,o,s,d,"throw",e)}s(void 0)}))});return function(e){return t.apply(this,arguments)}}();t.Z=s}}]);