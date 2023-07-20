"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9277],{40964:function(e,n,t){t.r(n),t.d(n,{AllBankDetails:function(){return r},AllProjectDetails:function(){return o}});var a=t(85893),r={HajipurBankDetails:[{key:"Company Name",info:"RAMAERA INDUSTRIES LTD."},{key:"Bank Name",info:"HDFC BANK "},{key:"Branch",info:"HAJIPUR BIHAR"},{key:"A/C No.",info:"50200078200870"},{key:"IFSC CODE ",info:"HDFC0000088"}],AgraBankDetails:[{key:"Company Name",info:"RAMAERA INDUSTRIES LTD.."},{key:"Bank Name",info:"HDFC BANK "},{key:"Branch",info:"NOIDA SECTOR 18"},{key:"A/C No.",info:"50200069506090"},{key:"IFSC CODE ",info:"HDFC0000088"}]},o={HajipurProjectDetails:[2e7,1167e4,{key:"Your Enrollment Amount is ",info:"0"},{key:"Your No. of profit persons",info:"0"},{key:"Required Fund",info:"Rs 2 cr."},{key:"Required No. of Share Holder",info:"8000"},{key:"Per Share Holder Required Fund",info:"Minimum 2500 to multiple 8"},{key:"No. of share allotment",info:"Rs 200/Share"},{key:"Net Profit Sharing",info:"55%"},{key:"Total Enrolled Share",info:"8000"},{key:"Total Enrolled",info:"4668"},{key:"Till Raised Fund",info:"11670000"},{key:"Remain Funding",info:"8330000"},{key:"Upcoming Enroll",info:"3332"}],AgraProjectDetails:[33e5,100500,{key:"Your Enrollment Amount is ",info:"0"},{key:"Your No. of profit persons",info:"0"},{key:"Required Fund",info:"Rs 33 Lakh"},{key:"Required No. of Share Holder",info:"6600"},{key:"Per Share Holder Required Fund",info:"500"},{key:"No. of share allotment",info:"Rs 200/Share"},{key:"Net Profit Sharing",info:"55%"},{key:"Total Enrolled Share",info:"500"},{key:"Total Enrolled",info:"201"},{key:"Till Raised Fund",info:"100500"},{key:"Remain Funding",info:"3199500"},{key:"Upcoming Enroll",info:"6399"}]};n.default=function(){return(0,a.jsx)("div",{children:"RemoveError"})}},84397:function(e,n,t){t.r(n);var a=t(85893),r=t(15861),o=t(72882),i=t(55113),c=t(7906),s=t(295),d=t(53816),l=t(53252),u=t(87357),m=t(90948),f=t(88441),p=t(28962),y=t(40964),h=t(67294);function v(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){v(e,n,t[n])}))}return e}n.default=function(e){var n=e.title,t=(0,h.useState)({bank:!1,project:!1}),_=t[0],j=t[1],g=n+"BankDetails",b=n+"ProjectDetails",k=(0,m.ZP)(f.Z)((function(e){var n=e.theme;return v({height:20,borderRadius:10},"&.".concat(p.Z.colorPrimary),{backgroundColor:n.palette.grey["light"===n.palette.mode?200:800]})})),P=100*(y.AllProjectDetails[b][1]/y.AllProjectDetails[b][0]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{style:{cursor:"pointer"},onClick:function(){return j(x({},_,{bank:!_.bank}))},children:(0,a.jsx)(r.Z,{variant:"h4",sx:{my:2},children:"Bank Detail \u2304"})}),_.bank&&(0,a.jsx)(o.Z,{component:i.Z,children:(0,a.jsx)(c.Z,{sx:{minWidth:100},"aria-label":"simple table",children:(0,a.jsx)(s.Z,{children:y.AllBankDetails[g].map((function(e){return(0,a.jsxs)(d.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,a.jsx)(l.Z,{component:"th",scope:"row",children:e.key}),(0,a.jsx)(l.Z,{align:"right",children:e.info})]},e.key)}))})})}),(0,a.jsx)("div",{style:{cursor:"pointer"},onClick:function(){return j(x({},_,{project:!_.project}))},children:(0,a.jsx)(r.Z,{variant:"h4",sx:{my:2,marginTop:5},children:"Project Detail \u2304"})}),_.project&&(0,a.jsx)(o.Z,{component:i.Z,children:(0,a.jsx)(c.Z,{sx:{minWidth:100},"aria-label":"simple table",children:(0,a.jsx)(s.Z,{children:y.AllProjectDetails[b].map((function(e){if(e.key)return(0,a.jsxs)(d.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,a.jsx)(l.Z,{component:"th",scope:"row",children:e.key}),(0,a.jsx)(l.Z,{align:"right",children:e.info})]},e.key)}))})})}),(0,a.jsxs)(u.Z,{sx:{flexGrow:1,my:2},children:[(0,a.jsx)(r.Z,{variant:"h6",children:"Total Funding Completed"}),(0,a.jsx)(k,{variant:"determinate",value:P}),(0,a.jsx)(r.Z,{variant:"body2",color:"text.secondary",style:{display:"flex",position:"absolute",marginTop:"-20px",marginLeft:"50px",fontWeight:"bold",color:"white"},children:"".concat(Math.round(P),"%")})]})]})}},99277:function(e,n,t){t.r(n),t.d(n,{rows:function(){return S}});var a=t(34051),r=t.n(a),o=t(85893),i=t(45477),c=t(42480),s=t(46230),d=t(20427),l=t(55511),u=t(50319),m=t(8987),f=t(11057),p=t(15861),y=t(53816),h=t(53252),v=t(86886),x=t(67294),_=t(86501),j=t(84397);function g(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function b(e,n,t,a,r,o,i){try{var c=e[o](i),s=c.value}catch(d){return void t(d)}c.done?n(s):Promise.resolve(s).then(a,r)}function k(e){return function(){var n=this,t=arguments;return new Promise((function(a,r){var o=e.apply(n,t);function i(e){b(o,a,r,i,c,"next",e)}function c(e){b(o,a,r,i,c,"throw",e)}i(void 0)}))}}function P(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function D(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){P(e,n,t[n])}))}return e}function A(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var a,r,o=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(a=t.next()).done)&&(o.push(a.value),!n||o.length!==n);i=!0);}catch(s){c=!0,r=s}finally{try{i||null==t.return||t.return()}finally{if(c)throw r}}return o}}(e,n)||C(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||C(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,n){if(e){if("string"===typeof e)return g(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?g(e,n):void 0}}var S=[{config:c.Z.project_payment}],Z=function(e){var n=e.data,t=e.documents,a=void 0===t?[]:t,c=e.user,v=e.rowNo,j=e.projectTitle,g=e.hideAdditionalDocuments,b=(0,x.useState)([]),P=b[0],C=b[1],S=(0,x.useState)([]),Z=S[0],R=S[1],E=(0,x.useState)(v),O=E[0],T=E[1],N=A((0,u.D)(i.Is),1)[0],L=A((0,u.D)(i.yW),1)[0],F=(0,x.useState)(!1),I=F[0],U=F[1],B=(0,x.useState)([]),H=B[0],V=(B[1],(0,s.T)());(0,x.useEffect)((function(){T(v)}),[v]),(0,x.useEffect)((function(){var e=[],n=!0,t=!1,r=void 0;try{for(var o,i=a[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var c=o.value;e.push(c.url)}}catch(s){t=!0,r=s}finally{try{n||null==i.return||i.return()}finally{if(t)throw r}}C(e)}),[a,c]),console.log(Z);var W=function(){var e=k(r().mark((function e(n,t){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N({variables:{title:n,url:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),q=function(){var e=k(r().mark((function e(n,t,a){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L({variables:{id:n,title:t,url:a}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t,a){return e.apply(this,arguments)}}(),M=function(e,n,t){var a,r=c,o=[];return null===c||void 0===c||null===(a=c.documents)||void 0===a||a.map((function(t){t.id===e?o.push(D({},t,{title:"avatar"})):t.title!==n&&o.push(t)})),console.log(t,D({},r,{documents:o})),D({},r,{documents:o})},J=function(e){var n=!1;return null===H||void 0===H||H.map((function(t){e===t.id&&(n=t.status)})),n},Y=function(){var e=k(r().mark((function e(){var t,o,i,s,u,m,f,p,y;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:U(!0),e.prev=1,t=0;case 3:if(!(t<O)){e.next=36;break}if(console.log("data.config.items[i].id",n.config.items[t].id),!Z[t]){e.next=33;break}return o=j+"_"+n.config.items[t].id,e.next=9,(0,l.Z)(P[t]);case 9:if(i=e.sent,s=a.find((function(e){if(e.title.toLowerCase()===o.toLowerCase())return!0})),(u=c.documents)||(u=[]),!s){e.next=25;break}return e.next=16,q(s.id,o.toLowerCase(),i);case 16:return m=e.sent,e.next=19,V((0,d.j2)(M(s.id,o,i)));case 19:_.ZP.success("".concat(o," Uploaded")),(f=u.filter((function(e){return e.id!==document.id}))).push(m.data.updateDocument),u=f,e.next=30;break;case 25:return e.next=27,W(o.toLowerCase(),i);case 27:p=e.sent,_.ZP.success("".concat(o," Uploaded")),u=w(u).concat([p.data.createDocument]);case 30:(y=D({},c)).documents=u,V((0,d.j2)(y));case 33:t++,e.next=3;break;case 36:e.next=41;break;case 38:e.prev=38,e.t0=e.catch(1),console.log("error",e.t0);case 41:U(!1);case 42:case"end":return e.stop()}}),e,null,[[1,38]])})));return function(){return e.apply(this,arguments)}}();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(y.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,o.jsxs)(h.Z,{component:"th",scope:"row",style:{border:"none"},children:[n.config.name," ",n.isOptional?"(Optional)":""]}),(0,o.jsx)(h.Z,{style:{display:"flex",flexDirection:"column",border:"none"},width:300,children:function(){for(var e=[],t=(n.config.items,0);t<O;t++){var a=P[t];a&&e.push((0,o.jsx)("div",{style:{marginTop:15},children:(0,o.jsx)("img",{src:"object"==typeof a?URL.createObjectURL(a):a,height:150,style:{marginLeft:"5px"}})}))}return 0==e.length?(0,o.jsx)(p.Z,{variant:"subtitle1",children:"No Document"}):e}()}),(0,o.jsx)(h.Z,{style:{border:"none"},children:function(){for(var e=function(e){var n,i,c,s,d;t.push((0,o.jsxs)("div",{style:{height:160,marginTop:10},children:[(0,o.jsxs)("div",{style:{marginBottom:10},children:["Status:"," ",(0,o.jsx)("span",{style:{color:"APPROVED"===J(null===(n=a[e])||void 0===n?void 0:n.id)?"green":"REJECTED"===J(null===(i=a[e])||void 0===i?void 0:i.id)?"red":a[e]?"APPROVED"===a[e].status?"green":"REJECTED"===a[e].status&&"red":""},children:J(null===(c=a[e])||void 0===c?void 0:c.id)||(null===(s=a[e])||void 0===s?void 0:s.status)||"NOT STARTED"})]}),(0,o.jsxs)(f.Z,{style:{cursor:a[0]&&"APPROVED"===a[0].status?"not-allowed":"pointer",marginTop:"10px"},component:"label",color:a[0]&&"APPROVED"===a[0].status?"secondary":"primary",children:["Choose ",null===(d=r[e])||void 0===d?void 0:d.name,(0,o.jsx)("input",{type:"file",accept:"image/*",hidden:!0,disabled:!!a[0]&&"APPROVED"===a[0].status,onChange:function(n){if(console.log(e),n.target.files.length>0){var t=w(P);t[e]=n.target.files[0],C(t),console.log("imageChanged",t[e]);var a=w(Z);a[e]=!0,R(a)}}})]})]}))},t=[],r=n.config.items,i=0;i<O;i++)e(i);return t}()}),(0,o.jsx)(h.Z,{style:{border:"none"},children:(0,o.jsx)(m.Z,{loading:I,variant:"contained",onClick:function(){Y()},children:"Upload"})})]},n.config.name),(0,o.jsxs)("div",{style:{marginBottom:40},children:[O<=3&&(0,o.jsx)(m.Z,{variant:"contained",disabled:P.length!==O,onClick:function(){T(O+1)},children:"Add More"}),(0,o.jsx)(m.Z,{sx:{marginLeft:2},variant:"contained",onClick:g,children:"Go Back"})]})]})};n.default=function(e){var n=e.title,t=(0,s.T)(),a=(0,s.C)((function(e){return e.user.data})),y=(0,x.useState)(!1),h=y[0],g=y[1],b=(0,x.useState)(0),P=b[0],w=b[1],C=(0,x.useState)(!1),R=C[0],E=C[1],O=(0,x.useState)(null),T=O[0],N=O[1],L=(0,x.useState)(),F=L[0],I=L[1],U=(0,x.useState)(!1),B=U[0],H=U[1],V=(0,x.useState)(!1),W=V[0],q=V[1],M=A((0,u.D)(i.Is),1)[0],J=A((0,u.D)(i.yW),1)[0],Y=function(e){return!!e||(alert("Invalid Image"),!1)},G=function(e){var t=[];if(a&&a.documents){var r=!0,o=!1,i=void 0;try{for(var c,s=function(e,r){var o,i=r.value,c=null===a||void 0===a||null===(o=a.documents)||void 0===o?void 0:o.find((function(e){if(e.title.toLowerCase()===n.toLowerCase()+"_"+i.id.toLowerCase())return!0}));c&&t.push(c)},d=e[Symbol.iterator]();!(r=(c=d.next()).done);r=!0)s(0,c)}catch(l){o=!0,i=l}finally{try{r||null==d.return||d.return()}finally{if(o)throw i}}}return t},K=function(e,n){var t,r=a,o=[];return null===a||void 0===a||null===(t=a.documents)||void 0===t||t.map((function(t){t.id===e?o.push(D({},t,{url:n})):o.push(t)})),D({},r,{documents:o})},z=function(){var e=k(r().mark((function e(){var a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Y(T)){e.next=3;break}return e.abrupt("return");case 3:if(E(!0),e.prev=4,a="",!B){e.next=12;break}return e.next=9,(0,l.Z)(T);case 9:a=e.sent,e.next=13;break;case 12:a=T;case 13:if(_.ZP.success("Payment Slip Updated "),!F){e.next=20;break}return e.next=17,J({variables:{title:n.toLowerCase()+"_"+c.Z.project_payment.id,url:a,id:F.id}});case 17:t((0,d.j2)(K(F.id,a))),e.next=22;break;case 20:return e.next=22,M({variables:{title:n.toLowerCase()+"_"+c.Z.project_payment.id,url:a}});case 22:e.next=26;break;case 24:e.prev=24,e.t0=e.catch(4);case 26:E(!1);case 27:case"end":return e.stop()}}),e,null,[[4,24]])})));return function(){return e.apply(this,arguments)}}();(0,x.useEffect)((function(){var e,t;(I(null),N(null),a&&a.documents&&(null===a||void 0===a||null===(e=a.documents)||void 0===e?void 0:e.length)>0)&&(null===a||void 0===a||null===(t=a.documents)||void 0===t||t.find((function(e){e.title.toLowerCase()===n.toLowerCase()+"_"+c.Z.project_payment.id&&(I(e),N(e.url))})))}),[a,n]),(0,x.useEffect)((function(){!function(){var e,t=0;null===a||void 0===a||null===(e=a.documents)||void 0===e||e.map((function(e){e.title.slice(0,17+n.length).toLowerCase()===n.toLowerCase()+"_"+c.Z.project_payment.id+"_"&&(t+=1),w(t)}))}()}),[n]);var $=function(){g(!1)};return(0,o.jsx)(o.Fragment,{children:h?(0,o.jsx)(o.Fragment,{children:S.map((function(e,t){return(0,o.jsx)(Z,{hideAdditionalDocuments:$,data:e,rowNo:P,projectTitle:n,user:a,documents:G(e.config.items)},t)}))}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(j.default,{title:n}),(0,o.jsx)(p.Z,{variant:"h4",sx:{my:2},children:"Enroll Payment Receipt"}),T?(0,o.jsx)("img",{src:"object"==typeof T?URL.createObjectURL(T):T,style:{marginTop:"10px",maxWidth:"100%"},height:200}):null,F&&F.status&&(0,o.jsxs)(p.Z,{variant:"h4",sx:{my:2},children:["Status :"," ",(0,o.jsx)("span",{style:{color:F?"APPROVED"===F.status?"green":"REJECTED"===F.status&&"red":""},children:F&&F.status})]}),(0,o.jsxs)(v.ZP,{container:!0,py:2,spacing:2,children:[(0,o.jsx)(v.ZP,{item:!0,xs:12,sm:5,md:3,lg:3,children:(0,o.jsxs)(f.Z,{variant:"contained",component:"label",style:{cursor:F&&"APPROVED"===F.status?"not-allowed":"pointer"},color:F&&"APPROVED"===F.status?"secondary":"primary",children:["Select Payment Slip",(0,o.jsx)("input",{type:"file",accept:"image/*",hidden:!0,disabled:!!F&&"APPROVED"===F.status,onChange:function(e){e.target.files.length>0&&(q(!0),N(e.target.files[0]),H(!0))}})]})}),(0,o.jsx)(v.ZP,{item:!0,xs:2,children:(0,o.jsx)(m.Z,{loading:R,fullWidth:!0,variant:"contained",disabled:!W,onClick:function(){z()},children:"Submit"})}),(0,o.jsx)(_.x7,{position:"bottom-center",reverseOrder:!1})]}),T&&(0,o.jsx)(m.Z,{sx:{mb:4},variant:"contained",onClick:function(){g(!0)},children:"Add/See Additional Documents"})]})})}},42480:function(e,n){n.Z={aadhar:{id:"aadhar",name:"Aadhar Card",status:"",items:[{id:"aadhar_front",name:"AADHAR Card Front",status:""},{id:"aadhar_back",name:"AADHAR Card Back",status:""}]},pancard:{id:"pancard",name:"Pancard",status:"",items:[{id:"pancard",name:"Pan Card",status:""}]},avatar:{id:"photo",name:"Photo",status:"",items:[{id:"avatar",name:"Passport Size Photo",status:""}]},voterId:{id:"voterId",name:"Voter Id Card",status:"Not Uploaded",items:[{id:"voterid_front",name:"Voter Id Front",status:""},{id:"voterid_back",name:"Voted Id Card Back",status:""}]},passbook:{name:"Passbook  or Bank Statement",id:"passbook",status:"Not Uploaded",items:[{id:"passbook",name:"Bank Passbook Or Bank Statement",status:"Not Uploaded"}]},payment_proof:{name:"Payment Proof",id:"payment_proof",status:"Not Uploaded",items:[{id:"payment_proof",name:"Payment Proof"}]},agency_payment_proof:{name:"Agency Payment Proof",id:"agency_payment_proof",status:"Not Uploaded",items:[{id:"agency_payment_proof",name:"Agency Payment Proof"}]},additional_documents:{name:"Additional Payment Document",id:"additional_payment_doc",items:[{id:"additional_payment_doc2",name:"Payment Document"},{id:"additional_payment_doc3",name:"Payment Document"},{id:"additional_payment_doc4",name:"Payment Document"},{id:"additional_payment_doc5",name:"Payment Document"}]},to_advance_payment_proof:{name:"To Advance Payment Proof",id:"to_advance_payment_proof",status:"Not Uploaded",items:[{id:"to_advance_payment_proof",name:"To Advance Payment Proof"}]},to_advance_additional_documents:{name:"To Advance Additional Payment Document",id:"to_advance_additional_payment_doc",items:[{id:"to_advance_additional_payment_doc2",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc3",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc4",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc5",name:"To Advance Payment Document"}]},driving_license:{name:"Driving License",id:"driving_license",status:"Not Uploaded",items:[{id:"driving_license_front",name:"Driving License Front",status:""},{id:"driving_license_back",name:"Driving License Back",status:""}]},nominee_aadhar:{name:"Nominee Aadhar",id:"nominee_aadhar",status:"Not Uploaded",items:[{id:"nominee_aadhar_front",name:"AADHAR Card Front",status:""},{id:"nominee_aadhar_back",name:"AADHAR Card Back",status:""}]},demat_document:{name:"Demat Document",id:"demat_document",status:"Not Uploaded",items:[{id:"demat_document",name:"Demat Document",status:""}]},payment_additional_documents:{name:"Additional Payment Document",id:"additional_payment_doc",items:[{id:"additional_payment_doc2",name:"Payment Document"},{id:"additional_payment_doc3",name:"Payment Document"},{id:"additional_payment_doc4",name:"Payment Document"},{id:"additional_payment_doc5",name:"Payment Document"}]},project_payment:{name:"Project Payment",id:"project_payment",items:[{id:"project_payment_1",name:"Payment Document"},{id:"project_payment_2",name:"Payment Document"},{id:"project_payment_3",name:"Payment Document"},{id:"project_payment_4",name:"Payment Document"},{id:"project_payment_5",name:"Payment Document"}]}}},55511:function(e,n,t){var a=t(34051),r=t.n(a),o=t(7155),i=t(6154);function c(e,n,t,a,r,o,i){try{var c=e[o](i),s=c.value}catch(d){return void t(d)}c.done?n(s):Promise.resolve(s).then(a,r)}var s=function(){var e,n=(e=r().mark((function e(n){var t,a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("document",n),e.next=4,i.Z.post("".concat(o.Z.API_URL,"/documents/upload"),t,{headers:{"Content-Type":"multipart/form-data"}});case 4:return a=e.sent,e.abrupt("return",a.data.url);case 6:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(a,r){var o=e.apply(n,t);function i(e){c(o,a,r,i,s,"next",e)}function s(e){c(o,a,r,i,s,"throw",e)}i(void 0)}))});return function(e){return n.apply(this,arguments)}}();n.Z=s}}]);