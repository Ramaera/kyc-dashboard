(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9834],{77912:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/Tabs/Payment",function(){return t(81909)}])},81909:function(e,n,t){"use strict";t.r(n),t.d(n,{rows:function(){return C}});var a=t(34051),r=t.n(a),o=t(85893),i=t(45477),d=t(42480),s=t(46230),c=t(20427),u=t(55511),l=t(50319),m=t(31812),p=t(11057),f=t(15861),v=t(53816),y=t(53252),h=t(86886),_=t(67294),x=t(86501),b=t(41213);function g(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function P(e,n,t,a,r,o,i){try{var d=e[o](i),s=d.value}catch(c){return void t(c)}d.done?n(s):Promise.resolve(s).then(a,r)}function j(e){return function(){var n=this,t=arguments;return new Promise((function(a,r){var o=e.apply(n,t);function i(e){P(o,a,r,i,d,"next",e)}function d(e){P(o,a,r,i,d,"throw",e)}i(void 0)}))}}function D(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function A(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){D(e,n,t[n])}))}return e}function k(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var a,r,o=[],i=!0,d=!1;try{for(t=t.call(e);!(i=(a=t.next()).done)&&(o.push(a.value),!n||o.length!==n);i=!0);}catch(s){d=!0,r=s}finally{try{i||null==t.return||t.return()}finally{if(d)throw r}}return o}}(e,n)||Z(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Z(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(e,n){if(e){if("string"===typeof e)return g(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?g(e,n):void 0}}var C=[{config:d.Z.additional_documents}],S=function(e){var n=e.data,t=e.documents,a=void 0===t?[]:t,d=e.user,h=e.rowNo,b=e.hideAdditionalDocuments,g=(0,_.useState)([]),P=g[0],D=g[1],Z=(0,_.useState)([]),C=Z[0],S=Z[1],E=(0,_.useState)(h),O=E[0],R=E[1],T=k((0,l.D)(i.Is),1)[0],N=k((0,l.D)(i.yW),1)[0],I=(0,_.useState)(!1),U=I[0],B=I[1],L=(0,_.useState)([]),V=L[0],F=(L[1],(0,s.T)());(0,_.useEffect)((function(){var e=[],n=!0,t=!1,r=void 0;try{for(var o,i=a[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var d=o.value;e.push(d.url)}}catch(s){t=!0,r=s}finally{try{n||null==i.return||i.return()}finally{if(t)throw r}}D(e)}),[a,d]),console.log(C);var H=function(){var e=j(r().mark((function e(n,t){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T({variables:{title:n,url:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),W=function(){var e=j(r().mark((function e(n,t,a){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N({variables:{id:n,title:t,url:a}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t,a){return e.apply(this,arguments)}}(),J=function(e){var n=!1;return null===V||void 0===V||V.map((function(t){e===t.id&&(n=t.status)})),n},K=function(e,n,t){var a,r=d,o=[];return null===d||void 0===d||null===(a=d.documents)||void 0===a||a.map((function(t){t.id===e?o.push(A({},t,{title:"avatar"})):t.title!==n&&o.push(t)})),A({},r,{documents:o})},M=function(){var e=j(r().mark((function e(){var t,o,i,s,l,m,p,f,v;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:B(!0),e.prev=1,t=0;case 3:if(!(t<O)){e.next=36;break}if(console.log("data.config.items[i].id",n.config.items[t].id),!C[t]){e.next=33;break}return o=n.config.items[t].id,e.next=9,(0,u.Z)(P[t]);case 9:if(i=e.sent,s=a.find((function(e){if(e.title.toLowerCase()===o.toLowerCase())return!0})),(l=null===d||void 0===d?void 0:d.documents)||(l=[]),!s){e.next=25;break}return e.next=16,W(s.id,o,i);case 16:return m=e.sent,e.next=19,F((0,c.j2)(K(s.id,o)));case 19:x.ZP.success("".concat(o," Uploaded")),(p=l.filter((function(e){return e.id!==document.id}))).push(m.data.updateDocument),l=p,e.next=30;break;case 25:return e.next=27,H(o,i);case 27:f=e.sent,x.ZP.success("Document Uploaded"),l=w(l).concat([f.data.createDocument]);case 30:(v=A({},d)).documents=l,F((0,c.j2)(v));case 33:t++,e.next=3;break;case 36:e.next=41;break;case 38:e.prev=38,e.t0=e.catch(1),console.log("error",e.t0);case 41:B(!1);case 42:case"end":return e.stop()}}),e,null,[[1,38]])})));return function(){return e.apply(this,arguments)}}();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(v.Z,{sx:{},children:[(0,o.jsxs)(y.Z,{component:"th",scope:"row",style:{border:"none"},children:[n.config.name," ",n.isOptional?"(Optional)":""]}),(0,o.jsx)(y.Z,{style:{display:"flex",flexDirection:"column",border:"none"},width:300,children:function(){for(var e=[],t=(n.config.items,0);t<O;t++){var a=P[t];a&&e.push((0,o.jsx)("div",{style:{marginTop:15},children:(0,o.jsx)("img",{src:"object"==typeof a?URL.createObjectURL(a):a,height:150,style:{marginLeft:"5px"}})}))}return 0==e.length?(0,o.jsx)(f.Z,{variant:"subtitle1",children:"No Document"}):e}()}),(0,o.jsx)(y.Z,{style:{border:"none"},children:function(){for(var e=function(e){var n,i,d,s,c,u,l;t.push((0,o.jsxs)("div",{style:{height:160,marginTop:10},children:[(0,o.jsxs)("div",{style:{marginBottom:10},children:["Status:"," ",(0,o.jsx)("span",{style:{color:"APPROVED"===J(null===(n=a[e])||void 0===n?void 0:n.id)?"green":"REJECTED"===J(null===(i=a[e])||void 0===i?void 0:i.id)?"red":a[e]?"APPROVED"===a[e].status?"green":"REJECTED"===a[e].status&&"red":""},children:J(null===(d=a[e])||void 0===d?void 0:d.id)||(null===(s=a[e])||void 0===s?void 0:s.status)||"NOT STARTED"})]}),(0,o.jsxs)(p.Z,{style:{cursor:a[0]&&"APPROVED"===a[0].status?"not-allowed":"pointer",marginTop:"10px"},disabled:"APPROVED"===J(null===(c=a[e])||void 0===c?void 0:c.id)||"APPROVED"==(null===(u=a[e])||void 0===u?void 0:u.status),component:"label",color:a[0]&&"APPROVED"===a[0].status?"secondary":"primary",children:["Choose ",null===(l=r[e])||void 0===l?void 0:l.name,(0,o.jsx)("input",{type:"file",accept:"image/*",hidden:!0,disabled:!!a[0]&&"APPROVED"===a[0].status,onChange:function(n){if(console.log(e),n.target.files.length>0){var t=w(P);t[e]=n.target.files[0],D(t),console.log("imageChanged",t[e]);var a=w(C);a[e]=!0,S(a)}}})]})]}))},t=[],r=n.config.items,i=0;i<O;i++)e(i);return t}()}),(0,o.jsx)(y.Z,{style:{border:"none"},children:(0,o.jsx)(m.Z,{loading:U,variant:"contained",onClick:function(){M()},children:"Upload"})})]},n.config.name),O<=3&&(0,o.jsx)(m.Z,{variant:"contained",disabled:P.length!==O,onClick:function(){R(O+1)},children:"Add More"}),(0,o.jsx)(m.Z,{sx:{marginLeft:2},variant:"contained",onClick:b,children:"Go Back"}),(0,o.jsx)(x.x7,{position:"bottom-center",reverseOrder:!1})]})};n.default=function(){var e=(0,s.T)(),n=(0,s.C)((function(e){var n;return null===(n=e.user)||void 0===n?void 0:n.data})),t=(0,_.useState)(!1),a=t[0],v=t[1],y=(0,_.useState)(!1),g=y[0],P=y[1],D=(0,_.useState)(null),w=D[0],Z=D[1],E=(0,_.useState)(0),O=E[0],R=E[1],T=(0,_.useState)(),N=T[0],I=T[1],U=(0,_.useState)(!1),B=U[0],L=U[1],V=(0,_.useState)(!1),F=V[0],H=V[1],W=k((0,l.D)(i.Is),1)[0],J=k((0,l.D)(i.yW),1)[0],K=function(e){return!!e||(alert("Invalid Image"),!1)},M=function(e){var t=[];if(n&&(null===n||void 0===n?void 0:n.documents)){var a=!0,r=!1,o=void 0;try{for(var i,d=function(e,a){var r,o=a.value,i=null===n||void 0===n||null===(r=n.documents)||void 0===r?void 0:r.find((function(e){if(e.title.toLowerCase()===o.id.toLowerCase())return!0}));i&&t.push(i)},s=e[Symbol.iterator]();!(a=(i=s.next()).done);a=!0)d(0,i)}catch(c){r=!0,o=c}finally{try{a||null==s.return||s.return()}finally{if(r)throw o}}}return t},X=function(e,t){var a,r=n,o=[];return null===n||void 0===n||null===(a=n.documents)||void 0===a||a.map((function(n){n.id===e?o.push(A({},n,{url:t})):o.push(n)})),A({},r,{documents:o})},z=function(){var n=j(r().mark((function n(){var t;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(K(w)){n.next=3;break}return n.abrupt("return");case 3:if(P(!0),n.prev=4,t="",!B){n.next=12;break}return n.next=9,(0,u.Z)(w);case 9:t=n.sent,n.next=13;break;case 12:t=w;case 13:if(x.ZP.success("Payment Slip Updated "),!N){n.next=20;break}return n.next=17,J({variables:{title:d.Z.payment_proof.items[0].id,url:t,id:N.id}});case 17:e((0,c.j2)(X(N.id,t))),n.next=22;break;case 20:return n.next=22,W({variables:{title:d.Z.payment_proof.items[0].id,url:t}});case 22:n.next=26;break;case 24:n.prev=24,n.t0=n.catch(4);case 26:P(!1);case 27:case"end":return n.stop()}}),n,null,[[4,24]])})));return function(){return n.apply(this,arguments)}}();(0,_.useEffect)((function(){!function(){var e,t=0;null===n||void 0===n||null===(e=n.documents)||void 0===e||e.map((function(e){"additional_payment_doc"===e.title.slice(0,22)&&(t+=1),R(t)}))}()}),[]),(0,_.useEffect)((function(){var e,t;n&&(null===n||void 0===n?void 0:n.documents)&&(null===n||void 0===n||null===(e=n.documents)||void 0===e?void 0:e.length)>0&&(null===n||void 0===n||null===(t=n.documents)||void 0===t||t.find((function(e){e.title.toLowerCase()===d.Z.payment_proof.items[0].id&&(I(e),Z(e.url))})))}),[n]);var G=function(){v(!1)};return(0,o.jsx)(o.Fragment,{children:a?(0,o.jsx)(o.Fragment,{children:C.map((function(e,t){return(0,o.jsx)(S,{hideAdditionalDocuments:G,data:e,rowNo:O,user:n,documents:M(e.config.items)},t)}))}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(b.default,{}),w?(0,o.jsx)("img",{src:"object"==typeof w?URL.createObjectURL(w):w,style:{marginTop:"10px"},height:200}):null,N&&N.status&&(0,o.jsxs)(f.Z,{variant:"h4",sx:{my:2},children:["Status :"," ",(0,o.jsx)("span",{style:{color:N?"APPROVED"===N.status?"green":"REJECTED"===N.status&&"red":""},children:N&&N.status})]}),"APPROVED"===(null===n||void 0===n?void 0:n.kyc)?null:(0,o.jsxs)(h.ZP,{container:!0,py:2,spacing:2,children:[(0,o.jsx)(h.ZP,{item:!0,xs:12,sm:5,md:3,lg:3,children:(0,o.jsxs)(p.Z,{variant:"contained",component:"label",style:{cursor:N&&"APPROVED"===N.status?"not-allowed":"pointer"},color:N&&"APPROVED"===N.status?"secondary":"primary",children:["Select Payment Slip",(0,o.jsx)("input",{type:"file",accept:"image/*",hidden:!0,disabled:!!N&&"APPROVED"===N.status,onChange:function(e){e.target.files.length>0&&(H(!0),Z(e.target.files[0]),L(!0))}})]})}),(0,o.jsx)(h.ZP,{item:!0,xs:2,children:(0,o.jsx)(m.Z,{loading:g,fullWidth:!0,variant:"contained",disabled:!F,onClick:function(){z()},children:"Submit"})}),(0,o.jsx)(x.x7,{position:"bottom-center",reverseOrder:!1})]}),w&&(0,o.jsx)(m.Z,{variant:"contained",onClick:function(){v(!0)},children:"Add/See Additional Documents"})]})})}},41213:function(e,n,t){"use strict";t.r(n);var a=t(85893),r=t(67294),o=t(46230),i=t(15861),d=t(11057),s=t(72882),c=t(55113),u=t(7906),l=t(295),m=t(53816),p=t(53252),f=[{name:"Company Name",value:"RAMAERA INDUSTRIES LTD."},{name:"Bank Name",value:"HDFC BANK"},{name:"Branch",value:"NOIDA SECTOR 18"},{name:"A/C No.",value:"50200069506090"},{name:"IFSC CODE ",value:"HDFC0000088"}];n.default=function(){var e=(0,o.C)((function(e){var n;return null===(n=e.user)||void 0===n?void 0:n.data})),n=(0,r.useState)(!1),t=n[0],v=n[1],y=(0,r.useState)(!1),h=y[0],_=y[1];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.Z,{variant:"h4",sx:{my:2},children:["Kindly Deposit Rs."," ","BASIC"===(null===e||void 0===e?void 0:e.membership)?"2,000":"2,00,000/-","/- and upload the payment slip as a proof!"]}),(0,a.jsxs)("div",{style:{flexDirection:"row",justifyContent:"space-between",marginTop:10,marginBottom:10},children:[(0,a.jsx)(d.Z,{style:{marginRight:20},variant:"contained",onClick:function(){v(!0),_(!1)},children:"Bank Details"}),(0,a.jsx)(d.Z,{variant:"contained",onClick:function(){v(!1),_(!0)},children:"UPI"})]}),t&&(0,a.jsx)(s.Z,{component:c.Z,children:(0,a.jsx)(u.Z,{sx:{minWidth:100},"aria-label":"simple table",children:(0,a.jsx)(l.Z,{children:f.map((function(e){return(0,a.jsxs)(m.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,a.jsx)(p.Z,{component:"th",scope:"row",children:e.name}),(0,a.jsx)(p.Z,{align:"right",children:e.value})]},e.name)}))})})}),h&&(0,a.jsx)(s.Z,{component:c.Z,children:(0,a.jsx)(u.Z,{sx:{minWidth:100},"aria-label":"simple table",children:(0,a.jsxs)(l.Z,{children:[(0,a.jsx)("img",{style:{width:"250px",borderRadius:"20px",padding:"10px"},src:"/images/upi.jpg"}),(0,a.jsx)(i.Z,{variant:"body1",sx:{my:2,pl:2},children:"OR"}),(0,a.jsx)(i.Z,{variant:"h4",sx:{my:2,pl:2},children:(0,a.jsx)("a",{href:"upi://pay?pa=ramaeraindustriesupi.pay@hdfcbank&pn=Ramaera K&cu=INR",children:"UPI ID : ramaeraindustriesupi.pay@hdfcbank"})})]})})})]})}},42480:function(e,n){"use strict";n.Z={aadhar:{id:"aadhar",name:"Aadhar Card",status:"",items:[{id:"aadhar_front",name:"AADHAR Card Front",status:""},{id:"aadhar_back",name:"AADHAR Card Back",status:""}]},pancard:{id:"pancard",name:"Pancard",status:"",items:[{id:"pancard",name:"Pan Card",status:""}]},avatar:{id:"photo",name:"Photo",status:"",items:[{id:"avatar",name:"Passport Size Photo",status:""}]},voterId:{id:"voterId",name:"Voter Id Card",status:"Not Uploaded",items:[{id:"voterid_front",name:"Voter Id Front",status:""},{id:"voterid_back",name:"Voted Id Card Back",status:""}]},passbook:{name:"Passbook  or Bank Statement",id:"passbook",status:"Not Uploaded",items:[{id:"passbook",name:"Bank Passbook Or Bank Statement",status:"Not Uploaded"}]},payment_proof:{name:"Payment Proof",id:"payment_proof",status:"Not Uploaded",items:[{id:"payment_proof",name:"Payment Proof"}]},agency_payment_proof:{name:"Agency Payment Proof",id:"agency_payment_proof",status:"Not Uploaded",items:[{id:"agency_payment_proof",name:"Agency Payment Proof"}]},additional_documents:{name:"Additional Payment Document",id:"additional_payment_doc",items:[{id:"additional_payment_doc2",name:"Payment Document"},{id:"additional_payment_doc3",name:"Payment Document"},{id:"additional_payment_doc4",name:"Payment Document"},{id:"additional_payment_doc5",name:"Payment Document"}]},to_advance_payment_proof:{name:"To Advance Payment Proof",id:"to_advance_payment_proof",status:"Not Uploaded",items:[{id:"to_advance_payment_proof",name:"To Advance Payment Proof"}]},to_advance_additional_documents:{name:"To Advance Additional Payment Document",id:"to_advance_additional_payment_doc",items:[{id:"to_advance_additional_payment_doc2",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc3",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc4",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc5",name:"To Advance Payment Document"}]},driving_license:{name:"Driving License",id:"driving_license",status:"Not Uploaded",items:[{id:"driving_license_front",name:"Driving License Front",status:""},{id:"driving_license_back",name:"Driving License Back",status:""}]},nominee_aadhar:{name:"Nominee Aadhar",id:"nominee_aadhar",status:"Not Uploaded",items:[{id:"nominee_aadhar_front",name:"AADHAR Card Front",status:""},{id:"nominee_aadhar_back",name:"AADHAR Card Back",status:""}]},demat_document:{name:"Demat Document",id:"demat_document",status:"Not Uploaded",items:[{id:"demat_document",name:"Demat Document",status:""}]},payment_additional_documents:{name:"Additional Payment Document",id:"additional_payment_doc",items:[{id:"additional_payment_doc2",name:"Payment Document"},{id:"additional_payment_doc3",name:"Payment Document"},{id:"additional_payment_doc4",name:"Payment Document"},{id:"additional_payment_doc5",name:"Payment Document"}]},project_payment:{name:"Project Payment",id:"project_payment",items:[{id:"project_payment_1",name:"Payment Document"},{id:"project_payment_2",name:"Payment Document"},{id:"project_payment_3",name:"Payment Document"},{id:"project_payment_4",name:"Payment Document"},{id:"project_payment_5",name:"Payment Document"}]}}},55511:function(e,n,t){"use strict";var a=t(34051),r=t.n(a),o=t(6154);function i(e,n,t,a,r,o,i){try{var d=e[o](i),s=d.value}catch(c){return void t(c)}d.done?n(s):Promise.resolve(s).then(a,r)}var d=function(){var e,n=(e=r().mark((function e(n){var t,a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("document",n),e.next=4,o.Z.post("".concat("https://kycramaerabackend.ramaera.com","/documents/upload"),t,{headers:{"Content-Type":"multipart/form-data"}});case 4:return a=e.sent,e.abrupt("return",a.data.url);case 6:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(a,r){var o=e.apply(n,t);function d(e){i(o,a,r,d,s,"next",e)}function s(e){i(o,a,r,d,s,"throw",e)}d(void 0)}))});return function(e){return n.apply(this,arguments)}}();n.Z=d}},function(e){e.O(0,[5370,9990,4789,6322,6261,6154,668,9774,2888,179],(function(){return n=77912,e(e.s=n);var n}));var n=e.O();_N_E=n}]);