"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4453],{54453:function(e,t,n){n.r(t),n.d(t,{rows:function(){return w}});var a=n(34051),r=n.n(a),o=n(85893),i=n(45477),d=n(42480),s=n(46230),c=n(20427),u=n(55511),l=n(50319),m=n(8987),p=n(11057),f=n(15861),v=n(53816),y=n(53252),h=n(86886),_=n(67294),x=n(86501),b=n(31258),P=n(17677);function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function j(e,t,n,a,r,o,i){try{var d=e[o](i),s=d.value}catch(c){return void n(c)}d.done?t(s):Promise.resolve(s).then(a,r)}function D(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var o=e.apply(t,n);function i(e){j(o,a,r,i,d,"next",e)}function d(e){j(o,a,r,i,d,"throw",e)}i(void 0)}))}}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){A(e,t,n[t])}))}return e}function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,o=[],i=!0,d=!1;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(o.push(a.value),!t||o.length!==t);i=!0);}catch(s){d=!0,r=s}finally{try{i||null==n.return||n.return()}finally{if(d)throw r}}return o}}(e,t)||S(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||S(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){if(e){if("string"===typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}var w=[{config:d.Z.to_advance_additional_documents}],E=function(e){var t=e.data,n=e.documents,a=void 0===n?[]:n,d=e.user,h=e.rowNo,b=e.hideAdditionalDocuments,P=(0,_.useState)([]),g=P[0],j=P[1],A=(0,_.useState)([]),S=A[0],w=A[1],E=(0,_.useState)(h),I=E[0],O=E[1],R=k((0,l.D)(i.Is),1)[0],T=k((0,l.D)(i.yW),1)[0],N=(0,_.useState)(!1),U=N[0],V=N[1],B=(0,_.useState)([]),L=B[0],F=(B[1],(0,s.T)());(0,_.useEffect)((function(){var e=[],t=!0,n=!1,r=void 0;try{for(var o,i=a[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var d=o.value;e.push(d.url)}}catch(s){n=!0,r=s}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}j(e)}),[a,d]),console.log(S);var W=function(){var e=D(r().mark((function e(t,n){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R({variables:{title:t,url:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),H=function(){var e=D(r().mark((function e(t,n,a){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T({variables:{id:t,title:n,url:a}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),J=function(e){var t=!1;return null===L||void 0===L||L.map((function(n){e===n.id&&(t=n.status)})),t},K=function(e,t,n){var a,r=d,o=[];return null===d||void 0===d||null===(a=d.documents)||void 0===a||a.map((function(n){n.id===e?o.push(Z({},n,{title:"avatar"})):n.title!==t&&o.push(n)})),console.log(n,Z({},r,{documents:o})),Z({},r,{documents:o})},M=function(){var e=D(r().mark((function e(){var n,o,i,s,l,m,p,f,v;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:V(!0),e.prev=1,n=0;case 3:if(!(n<I)){e.next=36;break}if(console.log("data.config.items[i].id",t.config.items[n].id),!S[n]){e.next=33;break}return o=t.config.items[n].id,e.next=9,(0,u.Z)(g[n]);case 9:if(i=e.sent,s=a.find((function(e){if(e.title.toLowerCase()===o.toLowerCase())return!0})),(l=null===d||void 0===d?void 0:d.documents)||(l=[]),!s){e.next=25;break}return e.next=16,H(s.id,o,i);case 16:return m=e.sent,e.next=19,F((0,c.j2)(K(s.id,o,i)));case 19:x.ZP.success("".concat(o," Uploaded")),(p=l.filter((function(e){return e.id!==document.id}))).push(m.data.updateDocument),l=p,e.next=30;break;case 25:return e.next=27,W(o,i);case 27:f=e.sent,x.ZP.success("Document Uploaded"),l=C(l).concat([f.data.createDocument]);case 30:(v=Z({},d)).documents=l,F((0,c.j2)(v));case 33:n++,e.next=3;break;case 36:e.next=41;break;case 38:e.prev=38,e.t0=e.catch(1),console.log("error",e.t0);case 41:V(!1);case 42:case"end":return e.stop()}}),e,null,[[1,38]])})));return function(){return e.apply(this,arguments)}}();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(v.Z,{sx:{},children:[(0,o.jsxs)(y.Z,{component:"th",scope:"row",style:{border:"none"},children:[t.config.name," ",t.isOptional?"(Optional)":""]}),(0,o.jsx)(y.Z,{style:{display:"flex",flexDirection:"column",border:"none"},width:300,children:function(){for(var e=[],n=(t.config.items,0);n<I;n++){var a=g[n];a&&e.push((0,o.jsx)("div",{style:{marginTop:15},children:(0,o.jsx)("img",{src:"object"==typeof a?URL.createObjectURL(a):a,height:150,style:{marginLeft:"5px"}})}))}return 0==e.length?(0,o.jsx)(f.Z,{variant:"subtitle1",children:"No Document"}):e}()}),(0,o.jsx)(y.Z,{style:{border:"none"},children:function(){for(var e=function(e){var t,i,d,s,c,u,l;n.push((0,o.jsxs)("div",{style:{height:160,marginTop:10},children:[(0,o.jsxs)("div",{style:{marginBottom:10},children:["Status:"," ",(0,o.jsx)("span",{style:{color:"APPROVED"===J(null===(t=a[e])||void 0===t?void 0:t.id)?"green":"REJECTED"===J(null===(i=a[e])||void 0===i?void 0:i.id)?"red":a[e]?"APPROVED"===a[e].status?"green":"REJECTED"===a[e].status&&"red":""},children:J(null===(d=a[e])||void 0===d?void 0:d.id)||(null===(s=a[e])||void 0===s?void 0:s.status)||"NOT STARTED"})]}),(0,o.jsxs)(p.Z,{style:{cursor:a[0]&&"APPROVED"===a[0].status?"not-allowed":"pointer",marginTop:"10px"},disabled:"APPROVED"===J(null===(c=a[e])||void 0===c?void 0:c.id)||"APPROVED"==(null===(u=a[e])||void 0===u?void 0:u.status),component:"label",color:a[0]&&"APPROVED"===a[0].status?"secondary":"primary",children:["Choose ",null===(l=r[e])||void 0===l?void 0:l.name,(0,o.jsx)("input",{type:"file",accept:"image/*",hidden:!0,disabled:!!a[0]&&"APPROVED"===a[0].status,onChange:function(t){if(console.log(e),t.target.files.length>0){var n=C(g);n[e]=t.target.files[0],j(n),console.log("imageChanged",n[e]);var a=C(S);a[e]=!0,w(a)}}})]})]}))},n=[],r=t.config.items,i=0;i<I;i++)e(i);return n}()}),(0,o.jsx)(y.Z,{style:{border:"none"},children:(0,o.jsx)(m.Z,{loading:U,variant:"contained",onClick:function(){M()},children:"Upload"})})]},t.config.name),I<=3&&(0,o.jsx)(m.Z,{variant:"contained",disabled:g.length!==I,onClick:function(){O(I+1)},children:"Add More"}),(0,o.jsx)(m.Z,{sx:{marginLeft:2},variant:"contained",onClick:b,children:"Go Back"}),(0,o.jsx)(x.x7,{position:"bottom-center",reverseOrder:!1})]})};t.default=function(){var e=(0,s.T)(),t=(0,s.C)((function(e){var t;return null===(t=e.user)||void 0===t?void 0:t.data})),n=(0,_.useState)(!1),a=n[0],v=n[1],y=(0,_.useState)(!1),g=y[0],j=y[1],A=(0,_.useState)(!1),C=A[0],S=A[1],I=(0,_.useState)(null),O=I[0],R=I[1],T=(0,_.useState)(0),N=T[0],U=T[1],V=(0,_.useState)(),B=V[0],L=V[1],F=(0,_.useState)(!1),W=F[0],H=F[1],J=(0,_.useState)(!1),K=J[0],M=J[1],z=k((0,l.D)(i.Is),1)[0],G=k((0,l.D)(i.yW),1)[0],$=function(e){return!!e||(alert("Invalid Image"),!1)},q=function(e){var n=[];if(t&&(null===t||void 0===t?void 0:t.documents)){var a=!0,r=!1,o=void 0;try{for(var i,d=function(e,a){var r,o=a.value,i=null===t||void 0===t||null===(r=t.documents)||void 0===r?void 0:r.find((function(e){if(e.title.toLowerCase()===o.id.toLowerCase())return!0}));i&&n.push(i)},s=e[Symbol.iterator]();!(a=(i=s.next()).done);a=!0)d(0,i)}catch(c){r=!0,o=c}finally{try{a||null==s.return||s.return()}finally{if(r)throw o}}}return n},Q=function(e,n){var a,r=t,o=[];return null===t||void 0===t||null===(a=t.documents)||void 0===a||a.map((function(t){t.id===e?o.push(Z({},t,{url:n})):o.push(t)})),Z({},r,{documents:o})},X=function(){var t=D(r().mark((function t(){var n;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if($(O)){t.next=3;break}return t.abrupt("return");case 3:if(S(!0),t.prev=4,n="",!W){t.next=12;break}return t.next=9,(0,u.Z)(O);case 9:n=t.sent,t.next=13;break;case 12:n=O;case 13:if(x.ZP.success("Payment Slip Updated "),!B){t.next=20;break}return t.next=17,G({variables:{title:d.Z.to_advance_payment_proof.items[0].id,url:n,id:B.id}});case 17:e((0,c.j2)(Q(B.id,n))),t.next=22;break;case 20:return t.next=22,z({variables:{title:d.Z.to_advance_payment_proof.items[0].id,url:n}});case 22:t.next=26;break;case 24:t.prev=24,t.t0=t.catch(4);case 26:S(!1);case 27:case"end":return t.stop()}}),t,null,[[4,24]])})));return function(){return t.apply(this,arguments)}}();(0,_.useEffect)((function(){!function(){var e,n=0;null===t||void 0===t||null===(e=t.documents)||void 0===e||e.map((function(e){"additional_payment_doc"===e.title.slice(0,22)&&(n+=1),U(n)}))}()}),[]),(0,_.useEffect)((function(){var e,n;t&&(null===t||void 0===t?void 0:t.documents)&&(null===t||void 0===t||null===(e=t.documents)||void 0===e?void 0:e.length)>0&&(null===t||void 0===t||null===(n=t.documents)||void 0===n||n.find((function(e){e.title.toLowerCase()===d.Z.to_advance_payment_proof.items[0].id&&(L(e),R(e.url),j(!0))})))}),[t]);var Y=function(){v(!1)};return(0,o.jsx)(o.Fragment,{children:g||(null===t||void 0===t?void 0:t.membership)!==P.Z.membership.BASIC?a?(0,o.jsx)(o.Fragment,{children:w.map((function(e,n){return(0,o.jsx)(E,{hideAdditionalDocuments:Y,data:e,rowNo:N,user:t,documents:q(e.config.items)},n)}))}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(b.default,{docStatus:null===B||void 0===B?void 0:B.status}),O?(0,o.jsx)("img",{src:"object"==typeof O?URL.createObjectURL(O):O,style:{marginTop:"10px"},height:200}):null,B&&B.status&&(0,o.jsxs)(f.Z,{variant:"h4",sx:{my:2},children:["Status :"," ",(0,o.jsx)("span",{style:{color:B?B.status===P.Z.status.APPROVED?"green":B.status===P.Z.status.REJECTED&&"red":""},children:B&&B.status})]}),(null===t||void 0===t?void 0:t.membership)===P.Z.membership.ADVANCE&&(null===t||void 0===t?void 0:t.kyc)===P.Z.status.APPROVED?null:(0,o.jsxs)(h.ZP,{container:!0,py:2,spacing:2,children:[(0,o.jsx)(h.ZP,{item:!0,xs:12,sm:5,md:3,lg:3,children:(0,o.jsxs)(p.Z,{variant:"contained",component:"label",style:{cursor:B&&B.status===P.Z.status.APPROVED?"not-allowed":"pointer"},color:B&&B.status===P.Z.status.APPROVED?"secondary":"primary",children:["Select Payment Slip",(0,o.jsx)("input",{type:"file",accept:"image/*",hidden:!0,disabled:!!B&&"APPROVED"===B.status,onChange:function(e){e.target.files.length>0&&(M(!0),R(e.target.files[0]),H(!0))}})]})}),(0,o.jsx)(h.ZP,{item:!0,xs:2,children:(0,o.jsx)(m.Z,{loading:C,fullWidth:!0,variant:"contained",disabled:!K,onClick:function(){X()},children:"Submit"})}),(0,o.jsx)(x.x7,{position:"bottom-center",reverseOrder:!1})]}),(null===t||void 0===t?void 0:t.membership)===P.Z.membership.BASIC&&O&&(0,o.jsx)(m.Z,{variant:"contained",onClick:function(){v(!0)},children:"Add/See Additional Documents"})]}):(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(p.Z,{variant:"contained",onClick:function(){j(!0)},children:"Upgrade to ADVANCE (Profit Sharing Partner)"})})})}},31258:function(e,t,n){n.r(t);var a=n(85893),r=n(67294),o=n(46230),i=n(15861),d=n(11057),s=n(72882),c=n(55113),u=n(7906),l=n(295),m=n(53816),p=n(53252),f=n(42480),v=n(17677),y=[{name:"Company Name",value:"RAMAERA INDUSTRIES LTD."},{name:"Bank Name",value:"ICICI BANK"},{name:"Branch",value:"NOIDA SECTOR 63"},{name:"A/C No.",value:"081605012239"},{name:"IFSC CODE ",value:"ICIC0000816"}];t.default=function(e){var t=e.docStatus,n=(0,o.C)((function(e){var t;return null===(t=e.user)||void 0===t?void 0:t.data})),h=(0,r.useState)(!1),_=h[0],x=h[1],b=(0,r.useState)(!1),P=b[0],g=b[1],j=20230815;return(0,a.jsxs)(a.Fragment,{children:[(null===n||void 0===n?void 0:n.membership)===v.Z.membership.BASIC&&t!==v.Z.status.APPROVED&&(0,a.jsxs)(i.Z,{variant:"h4",sx:{my:2},children:["Kindly Deposit Rs."," ",(null===n||void 0===n?void 0:n.documents.find((function(e){return e.title===f.Z.payment_proof.id&&parseInt(e.createdAt.split("-").join(""))<j&&1e3===e.amount&&"APPROVED"===e.status})))?"199,000":(null===n||void 0===n?void 0:n.documents.find((function(e){return e.title===f.Z.payment_proof.id&&parseInt(e.createdAt.split("-").join(""))>j&&2e3===e.amount&&"APPROVED"===e.status})))?"198,000":"200,000","/- and upload the payment slip as a proof!"]}),(null===n||void 0===n?void 0:n.membership)===v.Z.membership.BASIC&&(0,a.jsxs)("div",{style:{flexDirection:"row",justifyContent:"space-between",marginTop:10,marginBottom:10},children:[(0,a.jsx)(d.Z,{style:{marginRight:20},variant:"contained",onClick:function(){x(!0),g(!1)},children:"Bank Details"}),(0,a.jsx)(d.Z,{variant:"contained",onClick:function(){x(!1),g(!0)},children:"UPI"})]}),_&&(0,a.jsx)(s.Z,{component:c.Z,children:(0,a.jsx)(u.Z,{sx:{minWidth:100},"aria-label":"simple table",children:(0,a.jsx)(l.Z,{children:y.map((function(e){return(0,a.jsxs)(m.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,a.jsx)(p.Z,{component:"th",scope:"row",children:e.name}),(0,a.jsx)(p.Z,{align:"right",children:e.value})]},e.name)}))})})}),P&&(0,a.jsx)(s.Z,{component:c.Z,children:(0,a.jsx)(u.Z,{sx:{minWidth:100},"aria-label":"simple table",children:(0,a.jsxs)(l.Z,{children:[(0,a.jsx)("img",{style:{width:"250px",borderRadius:"20px",padding:"10px"},src:"/images/ICICI_UPI.png"}),(0,a.jsx)(i.Z,{variant:"body1",sx:{my:2,pl:2},children:"OR"}),(0,a.jsx)(i.Z,{variant:"h4",sx:{my:2,pl:2},children:(0,a.jsx)("a",{href:"upi://pay?pa=ramaeraindustries@icici&pn=Ramaera K&cu=INR",children:"UPI ID : ramaeraindustries@icici"})})]})})})]})}},42480:function(e,t){t.Z={aadhar:{id:"aadhar",name:"Aadhar Card",status:"",items:[{id:"aadhar_front",name:"AADHAR Card Front",status:""},{id:"aadhar_back",name:"AADHAR Card Back",status:""}]},pancard:{id:"pancard",name:"Pancard",status:"",items:[{id:"pancard",name:"Pan Card",status:""}]},avatar:{id:"photo",name:"Photo",status:"",items:[{id:"avatar",name:"Passport Size Photo",status:""}]},voterId:{id:"voterId",name:"Voter Id Card",status:"Not Uploaded",items:[{id:"voterid_front",name:"Voter Id Front",status:""},{id:"voterid_back",name:"Voted Id Card Back",status:""}]},passbook:{name:"Passbook  or Bank Statement",id:"passbook",status:"Not Uploaded",items:[{id:"passbook",name:"Bank Passbook Or Bank Statement",status:"Not Uploaded"}]},payment_proof:{name:"Payment Proof",id:"payment_proof",status:"Not Uploaded",items:[{id:"payment_proof",name:"Payment Proof"}]},agency_payment_proof:{name:"Agency Payment Proof",id:"agency_payment_proof",status:"Not Uploaded",items:[{id:"agency_payment_proof",name:"Agency Payment Proof"}]},additional_documents:{name:"Additional Payment Document",id:"additional_payment_doc",items:[{id:"additional_payment_doc2",name:"Payment Document"},{id:"additional_payment_doc3",name:"Payment Document"},{id:"additional_payment_doc4",name:"Payment Document"},{id:"additional_payment_doc5",name:"Payment Document"}]},to_advance_payment_proof:{name:"To Advance Payment Proof",id:"to_advance_payment_proof",status:"Not Uploaded",items:[{id:"to_advance_payment_proof",name:"To Advance Payment Proof"}]},to_advance_additional_documents:{name:"To Advance Additional Payment Document",id:"to_advance_additional_payment_doc",items:[{id:"to_advance_additional_payment_doc2",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc3",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc4",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc5",name:"To Advance Payment Document"}]},driving_license:{name:"Driving License",id:"driving_license",status:"Not Uploaded",items:[{id:"driving_license_front",name:"Driving License Front",status:""},{id:"driving_license_back",name:"Driving License Back",status:""}]},nominee_aadhar:{name:"Nominee Aadhar",id:"nominee_aadhar",status:"Not Uploaded",items:[{id:"nominee_aadhar_front",name:"AADHAR Card Front",status:""},{id:"nominee_aadhar_back",name:"AADHAR Card Back",status:""}]},demat_document:{name:"Demat Document",id:"demat_document",status:"Not Uploaded",items:[{id:"demat_document",name:"Demat Document",status:""}]},payment_additional_documents:{name:"Additional Payment Document",id:"additional_payment_doc",items:[{id:"additional_payment_doc2",name:"Payment Document"},{id:"additional_payment_doc3",name:"Payment Document"},{id:"additional_payment_doc4",name:"Payment Document"},{id:"additional_payment_doc5",name:"Payment Document"}]},project_payment:{name:"Project Payment",id:"project_payment",items:[{id:"project_payment_1",name:"Payment Document"},{id:"project_payment_2",name:"Payment Document"},{id:"project_payment_3",name:"Payment Document"},{id:"project_payment_4",name:"Payment Document"},{id:"project_payment_5",name:"Payment Document"}]}}},55511:function(e,t,n){var a=n(34051),r=n.n(a),o=n(6154);function i(e,t,n,a,r,o,i){try{var d=e[o](i),s=d.value}catch(c){return void n(c)}d.done?t(s):Promise.resolve(s).then(a,r)}var d=function(){var e,t=(e=r().mark((function e(t){var n,a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("document",t),e.next=4,o.Z.post("".concat("https://kycramaerabackend.ramaera.com","/documents/upload"),n,{headers:{"Content-Type":"multipart/form-data"}});case 4:return a=e.sent,e.abrupt("return",a.data.url);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(a,r){var o=e.apply(t,n);function d(e){i(o,a,r,d,s,"next",e)}function s(e){i(o,a,r,d,s,"throw",e)}d(void 0)}))});return function(e){return t.apply(this,arguments)}}();t.Z=d}}]);