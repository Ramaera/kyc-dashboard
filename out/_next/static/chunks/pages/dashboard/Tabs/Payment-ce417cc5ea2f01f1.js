(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9834],{77912:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/Tabs/Payment",function(){return n(81909)}])},81909:function(e,t,n){"use strict";n.r(t),n.d(t,{rows:function(){return I}});var a=n(34051),r=n.n(a),o=n(85893),i=n(45477),s=n(42480),d=n(46230),c=n(20427),u=n(55511),l=n(50319),m=n(8987),p=n(11057),f=n(15861),v=n(53816),y=n(53252),h=n(86886),_=n(67294),x=n(86501),P=n(41213);function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function g(e,t,n,a,r,o,i){try{var s=e[o](i),d=s.value}catch(c){return void n(c)}s.done?t(d):Promise.resolve(d).then(a,r)}function A(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var o=e.apply(t,n);function i(e){g(o,a,r,i,s,"next",e)}function s(e){g(o,a,r,i,s,"throw",e)}i(void 0)}))}}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){D(e,t,n[t])}))}return e}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,o=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(o.push(a.value),!t||o.length!==t);i=!0);}catch(d){s=!0,r=d}finally{try{i||null==n.return||n.return()}finally{if(s)throw r}}return o}}(e,t)||k(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||k(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){if(e){if("string"===typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}var I=[{config:s.Z.additional_documents}],S=function(e){var t=e.data,n=e.documents,a=void 0===n?[]:n,s=e.user,h=e.rowNo,P=e.hideAdditionalDocuments,b=(0,_.useState)([]),g=b[0],D=b[1],k=(0,_.useState)([]),I=k[0],S=k[1],w=(0,_.useState)(h),Z=w[0],O=w[1],N=E((0,l.D)(i.Is),1)[0],R=E((0,l.D)(i.yW),1)[0],T=(0,_.useState)(!1),U=T[0],V=T[1],B=(0,_.useState)([]),L=B[0],F=(B[1],(0,d.T)());(0,_.useEffect)((function(){var e=[],t=!0,n=!1,r=void 0;try{for(var o,i=a[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var s=o.value;e.push(s.url)}}catch(d){n=!0,r=d}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}D(e)}),[a,s]),console.log(I);var G=function(){var e=A(r().mark((function e(t,n){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N({variables:{title:t,url:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),M=function(){var e=A(r().mark((function e(t,n,a){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R({variables:{id:t,title:n,url:a}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),J=function(e){var t=!1;return null===L||void 0===L||L.map((function(n){e===n.id&&(t=n.status)})),t},H=function(e,t,n){var a,r=s,o=[];return null===s||void 0===s||null===(a=s.documents)||void 0===a||a.map((function(n){n.id===e?o.push(j({},n,{title:"avatar"})):n.title!==t&&o.push(n)})),j({},r,{documents:o})},W=function(){var e=A(r().mark((function e(){var n,o,i,d,l,m,p,f,v;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:V(!0),e.prev=1,n=0;case 3:if(!(n<Z)){e.next=36;break}if(console.log("data.config.items[i].id",t.config.items[n].id),!I[n]){e.next=33;break}return o=t.config.items[n].id,e.next=9,(0,u.Z)(g[n]);case 9:if(i=e.sent,d=a.find((function(e){if(e.title.toLowerCase()===o.toLowerCase())return!0})),(l=null===s||void 0===s?void 0:s.documents)||(l=[]),!d){e.next=25;break}return e.next=16,M(d.id,o,i);case 16:return m=e.sent,e.next=19,F((0,c.j2)(H(d.id,o)));case 19:x.ZP.success("".concat(o," Uploaded")),(p=l.filter((function(e){return e.id!==document.id}))).push(m.data.updateDocument),l=p,e.next=30;break;case 25:return e.next=27,G(o,i);case 27:f=e.sent,x.ZP.success("Document Uploaded"),l=C(l).concat([f.data.createDocument]);case 30:(v=j({},s)).documents=l,F((0,c.j2)(v));case 33:n++,e.next=3;break;case 36:e.next=41;break;case 38:e.prev=38,e.t0=e.catch(1),console.log("error",e.t0);case 41:V(!1);case 42:case"end":return e.stop()}}),e,null,[[1,38]])})));return function(){return e.apply(this,arguments)}}();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(v.Z,{sx:{},children:[(0,o.jsxs)(y.Z,{component:"th",scope:"row",style:{border:"none"},children:[t.config.name," ",t.isOptional?"(Optional)":""]}),(0,o.jsx)(y.Z,{style:{display:"flex",flexDirection:"column",border:"none"},width:300,children:function(){for(var e=[],n=(t.config.items,0);n<Z;n++){var a=g[n];a&&e.push((0,o.jsx)("div",{style:{marginTop:15},children:(0,o.jsx)("img",{src:"object"==typeof a?URL.createObjectURL(a):a,height:150,style:{marginLeft:"5px"}})}))}return 0==e.length?(0,o.jsx)(f.Z,{variant:"subtitle1",children:"No Document"}):e}()}),(0,o.jsx)(y.Z,{style:{border:"none"},children:function(){for(var e=function(e){var t,i,s,d,c,u,l;n.push((0,o.jsxs)("div",{style:{height:160,marginTop:10},children:[(0,o.jsxs)("div",{style:{marginBottom:10},children:["Status:"," ",(0,o.jsx)("span",{style:{color:"APPROVED"===J(null===(t=a[e])||void 0===t?void 0:t.id)?"green":"REJECTED"===J(null===(i=a[e])||void 0===i?void 0:i.id)?"red":a[e]?"APPROVED"===a[e].status?"green":"REJECTED"===a[e].status&&"red":""},children:J(null===(s=a[e])||void 0===s?void 0:s.id)||(null===(d=a[e])||void 0===d?void 0:d.status)||"NOT STARTED"})]}),(0,o.jsxs)(p.Z,{style:{cursor:a[0]&&"APPROVED"===a[0].status?"not-allowed":"pointer",marginTop:"10px"},disabled:"APPROVED"===J(null===(c=a[e])||void 0===c?void 0:c.id)||"APPROVED"==(null===(u=a[e])||void 0===u?void 0:u.status),component:"label",color:a[0]&&"APPROVED"===a[0].status?"secondary":"primary",children:["Choose ",null===(l=r[e])||void 0===l?void 0:l.name,(0,o.jsx)("input",{type:"file",accept:"image/*",hidden:!0,disabled:!!a[0]&&"APPROVED"===a[0].status,onChange:function(t){if(console.log(e),t.target.files.length>0){var n=C(g);n[e]=t.target.files[0],D(n),console.log("imageChanged",n[e]);var a=C(I);a[e]=!0,S(a)}}})]})]}))},n=[],r=t.config.items,i=0;i<Z;i++)e(i);return n}()}),(0,o.jsx)(y.Z,{style:{border:"none"},children:(0,o.jsx)(m.Z,{loading:U,variant:"contained",onClick:function(){W()},children:"Upload"})})]},t.config.name),Z<=3&&(0,o.jsx)(m.Z,{variant:"contained",disabled:g.length!==Z,onClick:function(){O(Z+1)},children:"Add More"}),(0,o.jsx)(m.Z,{sx:{marginLeft:2},variant:"contained",onClick:P,children:"Go Back"}),(0,o.jsx)(x.x7,{position:"bottom-center",reverseOrder:!1})]})};t.default=function(){var e=(0,d.T)(),t=(0,d.C)((function(e){var t;return null===(t=e.user)||void 0===t?void 0:t.data})),n=(0,_.useState)(!1),a=n[0],v=n[1],y=(0,_.useState)(!1),b=y[0],g=y[1],D=(0,_.useState)(null),C=D[0],k=D[1],w=(0,_.useState)(0),Z=w[0],O=w[1],N=(0,_.useState)(),R=N[0],T=N[1],U=(0,_.useState)(!1),V=U[0],B=U[1],L=(0,_.useState)(!1),F=L[0],G=L[1],M=E((0,l.D)(i.Is),1)[0],J=E((0,l.D)(i.yW),1)[0],H=function(e){return!!e||(alert("Invalid Image"),!1)},W=function(e){var n=[];if(t&&(null===t||void 0===t?void 0:t.documents)){var a=!0,r=!1,o=void 0;try{for(var i,s=function(e,a){var r,o=a.value,i=null===t||void 0===t||null===(r=t.documents)||void 0===r?void 0:r.find((function(e){if(e.title.toLowerCase()===o.id.toLowerCase())return!0}));i&&n.push(i)},d=e[Symbol.iterator]();!(a=(i=d.next()).done);a=!0)s(0,i)}catch(c){r=!0,o=c}finally{try{a||null==d.return||d.return()}finally{if(r)throw o}}}return n},K=function(e,n){var a,r=t,o=[];return null===t||void 0===t||null===(a=t.documents)||void 0===a||a.map((function(t){t.id===e?o.push(j({},t,{url:n})):o.push(t)})),j({},r,{documents:o})},X=function(){var t=A(r().mark((function t(){var n;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(H(C)){t.next=3;break}return t.abrupt("return");case 3:if(g(!0),t.prev=4,n="",!V){t.next=12;break}return t.next=9,(0,u.Z)(C);case 9:n=t.sent,t.next=13;break;case 12:n=C;case 13:if(x.ZP.success("Payment Slip Updated "),!R){t.next=20;break}return t.next=17,J({variables:{title:s.Z.payment_proof.items[0].id,url:n,id:R.id}});case 17:e((0,c.j2)(K(R.id,n))),t.next=22;break;case 20:return t.next=22,M({variables:{title:s.Z.payment_proof.items[0].id,url:n}});case 22:t.next=26;break;case 24:t.prev=24,t.t0=t.catch(4);case 26:g(!1);case 27:case"end":return t.stop()}}),t,null,[[4,24]])})));return function(){return t.apply(this,arguments)}}();(0,_.useEffect)((function(){!function(){var e,n=0;null===t||void 0===t||null===(e=t.documents)||void 0===e||e.map((function(e){"additional_payment_doc"===e.title.slice(0,22)&&(n+=1),O(n)}))}()}),[]),(0,_.useEffect)((function(){var e,n;t&&(null===t||void 0===t?void 0:t.documents)&&(null===t||void 0===t||null===(e=t.documents)||void 0===e?void 0:e.length)>0&&(null===t||void 0===t||null===(n=t.documents)||void 0===n||n.find((function(e){e.title.toLowerCase()===s.Z.payment_proof.items[0].id&&(T(e),k(e.url))})))}),[t]);var z=function(){v(!1)};return(0,o.jsx)(o.Fragment,{children:a?(0,o.jsx)(o.Fragment,{children:I.map((function(e,n){return(0,o.jsx)(S,{hideAdditionalDocuments:z,data:e,rowNo:Z,user:t,documents:W(e.config.items)},n)}))}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(P.default,{docStatus:null===R||void 0===R?void 0:R.status}),C?(0,o.jsx)("img",{src:"object"==typeof C?URL.createObjectURL(C):C,style:{marginTop:"10px"},height:200}):null,R&&R.status&&(0,o.jsxs)(f.Z,{variant:"h4",sx:{my:2},children:["Status :"," ",(0,o.jsx)("span",{style:{color:R?"APPROVED"===R.status?"green":"REJECTED"===R.status&&"red":""},children:R&&R.status})]}),"APPROVED"===(null===t||void 0===t?void 0:t.kyc)?null:(0,o.jsxs)(h.ZP,{container:!0,py:2,spacing:2,children:[(0,o.jsx)(h.ZP,{item:!0,xs:12,sm:5,md:3,lg:3,children:(0,o.jsxs)(p.Z,{variant:"contained",component:"label",style:{cursor:R&&"APPROVED"===R.status?"not-allowed":"pointer"},color:R&&"APPROVED"===R.status?"secondary":"primary",children:["Select Payment Slip",(0,o.jsx)("input",{type:"file",accept:"image/*",hidden:!0,disabled:!!R&&"APPROVED"===R.status,onChange:function(e){e.target.files.length>0&&(G(!0),k(e.target.files[0]),B(!0))}})]})}),(0,o.jsx)(h.ZP,{item:!0,xs:2,children:(0,o.jsx)(m.Z,{loading:b,fullWidth:!0,variant:"contained",disabled:!F,onClick:function(){X()},children:"Submit"})}),(0,o.jsx)(x.x7,{position:"bottom-center",reverseOrder:!1})]}),C&&(0,o.jsx)(m.Z,{variant:"contained",onClick:function(){v(!0)},children:"Add/See Additional Documents"})]})})}},41213:function(e,t,n){"use strict";n.r(t);var a=n(85893),r=n(67294),o=n(46230),i=n(15861),s=n(11057),d=n(72882),c=n(55113),u=n(7906),l=n(295),m=n(53816),p=n(53252),f=n(17677),v=[{name:"Company Name",value:"RAMAERA INDUSTRIES LTD."},{name:"Bank Name",value:"ICICI BANK"},{name:"Branch",value:"NOIDA SECTOR 63"},{name:"A/C No.",value:"081605012239"},{name:"IFSC CODE ",value:"ICIC0000816"}];t.default=function(e){var t=e.docStatus,n=(0,o.C)((function(e){var t;return null===(t=e.user)||void 0===t?void 0:t.data})),y=(0,r.useState)(!1),h=y[0],_=y[1],x=(0,r.useState)(!1),P=x[0],b=x[1];return console.log(t),(0,a.jsxs)(a.Fragment,{children:[t!==f.Z.status.APPROVED&&(0,a.jsxs)(i.Z,{variant:"h4",sx:{my:2},children:["Kindly Deposit Rs."," ","BASIC"===(null===n||void 0===n?void 0:n.membership)?"2,000":"2,00,000","/- and upload the payment slip as a proof!"]}),(0,a.jsxs)("div",{style:{flexDirection:"row",justifyContent:"space-between",marginTop:10,marginBottom:10},children:[(0,a.jsx)(s.Z,{style:{marginRight:20},variant:"contained",onClick:function(){_(!0),b(!1)},children:"Bank Details"}),(0,a.jsx)(s.Z,{variant:"contained",onClick:function(){_(!1),b(!0)},children:"UPI"})]}),h&&(0,a.jsx)(d.Z,{component:c.Z,children:(0,a.jsx)(u.Z,{sx:{minWidth:100},"aria-label":"simple table",children:(0,a.jsx)(l.Z,{children:v.map((function(e){return(0,a.jsxs)(m.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,a.jsx)(p.Z,{component:"th",scope:"row",children:e.name}),(0,a.jsx)(p.Z,{align:"right",children:e.value})]},e.name)}))})})}),P&&(0,a.jsx)(d.Z,{component:c.Z,children:(0,a.jsx)(u.Z,{sx:{minWidth:100},"aria-label":"simple table",children:(0,a.jsxs)(l.Z,{children:[(0,a.jsx)("img",{style:{width:"250px",borderRadius:"20px",padding:"10px"},src:"/images/ICICI_UPI.png"}),(0,a.jsx)(i.Z,{variant:"body1",sx:{my:2,pl:2},children:"OR"}),(0,a.jsx)(i.Z,{variant:"h4",sx:{my:2,pl:2},children:(0,a.jsx)("a",{href:"upi://pay?pa=ramaeraindustries@icici&pn=Ramaera K&cu=INR",children:"UPI ID : ramaeraindustries@icici"})})]})})})]})}},42480:function(e,t){"use strict";t.Z={aadhar:{id:"aadhar",name:"Aadhar Card",status:"",items:[{id:"aadhar_front",name:"AADHAR Card Front",status:""},{id:"aadhar_back",name:"AADHAR Card Back",status:""}]},pancard:{id:"pancard",name:"Pancard",status:"",items:[{id:"pancard",name:"Pan Card",status:""}]},avatar:{id:"photo",name:"Photo",status:"",items:[{id:"avatar",name:"Passport Size Photo",status:""}]},voterId:{id:"voterId",name:"Voter Id Card",status:"Not Uploaded",items:[{id:"voterid_front",name:"Voter Id Front",status:""},{id:"voterid_back",name:"Voted Id Card Back",status:""}]},passbook:{name:"Passbook  or Bank Statement",id:"passbook",status:"Not Uploaded",items:[{id:"passbook",name:"Bank Passbook Or Bank Statement",status:"Not Uploaded"}]},payment_proof:{name:"Payment Proof",id:"payment_proof",status:"Not Uploaded",items:[{id:"payment_proof",name:"Payment Proof"}]},agency_payment_proof:{name:"Agency Payment Proof",id:"agency_payment_proof",status:"Not Uploaded",items:[{id:"agency_payment_proof",name:"Agency Payment Proof"}]},additional_documents:{name:"Additional Payment Document",id:"additional_payment_doc",items:[{id:"additional_payment_doc2",name:"Payment Document"},{id:"additional_payment_doc3",name:"Payment Document"},{id:"additional_payment_doc4",name:"Payment Document"},{id:"additional_payment_doc5",name:"Payment Document"}]},to_advance_payment_proof:{name:"To Advance Payment Proof",id:"to_advance_payment_proof",status:"Not Uploaded",items:[{id:"to_advance_payment_proof",name:"To Advance Payment Proof"}]},to_advance_additional_documents:{name:"To Advance Additional Payment Document",id:"to_advance_additional_payment_doc",items:[{id:"to_advance_additional_payment_doc2",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc3",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc4",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc5",name:"To Advance Payment Document"}]},driving_license:{name:"Driving License",id:"driving_license",status:"Not Uploaded",items:[{id:"driving_license_front",name:"Driving License Front",status:""},{id:"driving_license_back",name:"Driving License Back",status:""}]},nominee_aadhar:{name:"Nominee Aadhar",id:"nominee_aadhar",status:"Not Uploaded",items:[{id:"nominee_aadhar_front",name:"AADHAR Card Front",status:""},{id:"nominee_aadhar_back",name:"AADHAR Card Back",status:""}]},demat_document:{name:"Demat Document",id:"demat_document",status:"Not Uploaded",items:[{id:"demat_document",name:"Demat Document",status:""}]},payment_additional_documents:{name:"Additional Payment Document",id:"additional_payment_doc",items:[{id:"additional_payment_doc2",name:"Payment Document"},{id:"additional_payment_doc3",name:"Payment Document"},{id:"additional_payment_doc4",name:"Payment Document"},{id:"additional_payment_doc5",name:"Payment Document"}]},project_payment:{name:"Project Payment",id:"project_payment",items:[{id:"project_payment_1",name:"Payment Document"},{id:"project_payment_2",name:"Payment Document"},{id:"project_payment_3",name:"Payment Document"},{id:"project_payment_4",name:"Payment Document"},{id:"project_payment_5",name:"Payment Document"}]}}},17677:function(e,t){"use strict";t.Z={project:{AGRA:"agra",HAJIPUR:"hajipur"},role:{ADMIN:"ADMIN",AGENT:"AGENT",USER:"USER"},membership:{ADVANCE:"ADVANCE",BASIC:"BASIC"},status:{AGENT_APPROVED:"AGENT_APPROVED",APPROVED:"APPROVED",NOT_INITIALIZED:"NOT_INITIALIZED",ONGOING:"ONGOING",PENDING:"PENDING",REJECTED:"REJECTED",SUBMITTED:"SUBMITTED"},amount:{beforeFifteenthAugustBasicAmount:1e3,beforeFifteenthAugustAdvanceAmount:1e5,afterFifteenthAugustBasicAmount:2e3,afterFifteenthAugustAdvanceAmount:2e5}}},55511:function(e,t,n){"use strict";var a=n(34051),r=n.n(a),o=n(6154);function i(e,t,n,a,r,o,i){try{var s=e[o](i),d=s.value}catch(c){return void n(c)}s.done?t(d):Promise.resolve(d).then(a,r)}var s=function(){var e,t=(e=r().mark((function e(t){var n,a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("document",t),e.next=4,o.Z.post("".concat("https://kycramaerabackend.ramaera.com","/documents/upload"),n,{headers:{"Content-Type":"multipart/form-data"}});case 4:return a=e.sent,e.abrupt("return",a.data.url);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(a,r){var o=e.apply(t,n);function s(e){i(o,a,r,s,d,"next",e)}function d(e){i(o,a,r,s,d,"throw",e)}s(void 0)}))});return function(e){return t.apply(this,arguments)}}();t.Z=s}},function(e){e.O(0,[5370,9990,4789,8549,6261,6154,668,9774,2888,179],(function(){return t=77912,e(e.s=t);var t}));var t=e.O();_N_E=t}]);