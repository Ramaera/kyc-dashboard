(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5163],{95061:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/Tabs/GetAgency",function(){return t(85250)}])},85250:function(e,n,t){"use strict";t.r(n);var a=t(34051),r=t.n(a),o=t(85893),i=t(45477),d=t(42480),c=t(46230),s=t(20427),m=t(55511),u=t(50319),l=t(8987),p=t(15861),y=t(11057),f=t(72882),_=t(7906),v=t(295),h=t(53816),P=t(53252),x=t(86886),b=t(67294),g=t(86501);function j(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function D(e,n,t,a,r,o,i){try{var d=e[o](i),c=d.value}catch(s){return void t(s)}d.done?n(c):Promise.resolve(c).then(a,r)}function A(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){A(e,n,t[n])}))}return e}function C(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var a,r,o=[],i=!0,d=!1;try{for(t=t.call(e);!(i=(a=t.next()).done)&&(o.push(a.value),!n||o.length!==n);i=!0);}catch(c){d=!0,r=c}finally{try{i||null==t.return||t.return()}finally{if(d)throw r}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return j(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return j(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Z=[{name:"Company Name",value:"RAMAERA LEGAL INFOTECH PVT LTD."},{name:"Bank Name",value:"HDFC BANK"},{name:"Branch",value:"NOIDA SECTOR 18"},{name:"A/C No.",value:"50200073634812"},{name:"IFSC CODE ",value:"HDFC0000088"}];n.default=function(){var e=(0,c.T)(),n=(0,b.useState)(!1),t=n[0],a=n[1],j=(0,c.C)((function(e){var n;return null===(n=e.user)||void 0===n?void 0:n.data})),A=(0,b.useState)(!1),w=A[0],S=A[1],O=(0,b.useState)(null),N=O[0],E=O[1],R=(0,b.useState)(!1),T=R[0],I=R[1],U=(0,b.useState)(!1),B=U[0],F=U[1],L=(0,b.useState)(),V=L[0],H=L[1],W=(0,b.useState)(!1),G=W[0],K=W[1],M=(0,b.useState)(!1),X=M[0],z=M[1],J=C((0,u.D)(i.Is),1)[0],$=C((0,u.D)(i.yW),1)[0],q=function(e){return!!e||(alert("Invalid Image"),!1)},Q=function(e,n){var t,a=j,r=[];return null===j||void 0===j||null===(t=j.documents)||void 0===t||t.map((function(t){t.id===e?r.push(k({},t,{url:n})):r.push(t)})),k({},a,{documents:r})},Y=function(){var n,t=(n=r().mark((function n(){var t;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(q(N)){n.next=3;break}return n.abrupt("return");case 3:if(S(!0),n.prev=4,t="",!G){n.next=12;break}return n.next=9,(0,m.Z)(N);case 9:t=n.sent,n.next=13;break;case 12:t=N;case 13:if(g.ZP.success("Payment Slip Updated "),!V){n.next=20;break}return n.next=17,$({variables:{title:d.Z.agency_payment_proof.items[0].id,url:t,id:V.id}});case 17:e((0,s.j2)(Q(V.id,t))),n.next=22;break;case 20:return n.next=22,J({variables:{title:d.Z.agency_payment_proof.items[0].id,url:t}});case 22:n.next=26;break;case 24:n.prev=24,n.t0=n.catch(4);case 26:S(!1);case 27:case"end":return n.stop()}}),n,null,[[4,24]])})),function(){var e=this,t=arguments;return new Promise((function(a,r){var o=n.apply(e,t);function i(e){D(o,a,r,i,d,"next",e)}function d(e){D(o,a,r,i,d,"throw",e)}i(void 0)}))});return function(){return t.apply(this,arguments)}}();return(0,b.useEffect)((function(){var e,n;j&&(null===j||void 0===j?void 0:j.documents)&&(null===j||void 0===j||null===(e=j.documents)||void 0===e?void 0:e.length)>0&&(null===j||void 0===j||null===(n=j.documents)||void 0===n||n.find((function(e){e.title.toLowerCase()===d.Z.agency_payment_proof.items[0].id&&(H(e),E(e.url),a(!0))})))}),[j]),(0,o.jsx)(o.Fragment,{children:t?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(p.Z,{variant:"h4",sx:{my:2},children:"Kindly Deposit Rs. 5000/- and upload the payment slip as a proof!"}),(0,o.jsxs)("div",{style:{flexDirection:"row",justifyContent:"space-between",marginTop:10,marginBottom:10},children:[(0,o.jsx)(y.Z,{style:{marginRight:20},variant:"contained",onClick:function(){I(!0),F(!1)},children:"Bank Details"}),(0,o.jsx)(y.Z,{variant:"contained",onClick:function(){I(!1),F(!0)},children:"UPI"})]})," ",T&&(0,o.jsx)(f.Z,{children:(0,o.jsx)(_.Z,{sx:{minWidth:100},"aria-label":"simple table",children:(0,o.jsx)(v.Z,{children:Z.map((function(e){return(0,o.jsxs)(h.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,o.jsx)(P.Z,{component:"th",scope:"row",children:e.name}),(0,o.jsx)(P.Z,{align:"right",children:e.value})]},e.name)}))})})}),B&&(0,o.jsx)(f.Z,{children:(0,o.jsx)(_.Z,{sx:{minWidth:100},"aria-label":"simple table",children:(0,o.jsxs)(v.Z,{children:[(0,o.jsx)("img",{style:{width:"250px",borderRadius:"20px",padding:"10px"},src:"/images/upi_legal.png"}),(0,o.jsx)(p.Z,{variant:"body1",sx:{my:2,pl:2},children:"OR"}),(0,o.jsx)(p.Z,{variant:"h4",sx:{my:2,pl:2},children:(0,o.jsx)("a",{href:"upi://pay?pa=ramaeralegal.noida@hdfcbank&pn=Ramaera K&cu=INR",children:"UPI ID : ramaeralegal.noida@hdfcbank"})})]})})}),N?(0,o.jsx)("img",{src:"object"==typeof N?URL.createObjectURL(N):N,style:{marginTop:"10px"},height:200}):null,V&&V.status&&(0,o.jsxs)(p.Z,{variant:"h4",sx:{my:2},children:["Status :"," ",(0,o.jsx)("span",{style:{color:V?"APPROVED"===V.status?"green":"REJECTED"===V.status&&"red":""},children:V&&V.status})]}),(0,o.jsxs)(x.ZP,{container:!0,py:2,spacing:2,children:[(0,o.jsx)(x.ZP,{item:!0,xs:12,sm:5,md:3,lg:3,children:(0,o.jsxs)(y.Z,{variant:"contained",component:"label",style:{cursor:V&&"APPROVED"===V.status?"not-allowed":"pointer"},color:V&&"APPROVED"===V.status?"secondary":"primary",children:["Select Payment Slip",(0,o.jsx)("input",{type:"file",accept:"image/*",hidden:!0,disabled:!!V&&"APPROVED"===V.status,onChange:function(e){e.target.files.length>0&&(z(!0),E(e.target.files[0]),K(!0))}})]})}),(0,o.jsx)(x.ZP,{item:!0,xs:2,children:(0,o.jsx)(l.Z,{loading:w,fullWidth:!0,variant:"contained",disabled:!X,onClick:function(){Y()},children:"Submit"})}),(0,o.jsx)(g.x7,{position:"bottom-center",reverseOrder:!1})]})]}):(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(x.ZP,{container:!0,py:2,spacing:2,sx:{display:"flex",justifyContent:"center"},children:(0,o.jsx)(y.Z,{onClick:function(){a(!0)},variant:"contained",component:"label",children:"Get Agency"})})})})}},42480:function(e,n){"use strict";n.Z={aadhar:{id:"aadhar",name:"Aadhar Card",status:"",items:[{id:"aadhar_front",name:"AADHAR Card Front",status:""},{id:"aadhar_back",name:"AADHAR Card Back",status:""}]},pancard:{id:"pancard",name:"Pancard",status:"",items:[{id:"pancard",name:"Pan Card",status:""}]},avatar:{id:"photo",name:"Photo",status:"",items:[{id:"avatar",name:"Passport Size Photo",status:""}]},voterId:{id:"voterId",name:"Voter Id Card",status:"Not Uploaded",items:[{id:"voterid_front",name:"Voter Id Front",status:""},{id:"voterid_back",name:"Voted Id Card Back",status:""}]},passbook:{name:"Passbook  or Bank Statement",id:"passbook",status:"Not Uploaded",items:[{id:"passbook",name:"Bank Passbook Or Bank Statement",status:"Not Uploaded"}]},payment_proof:{name:"Payment Proof",id:"payment_proof",status:"Not Uploaded",items:[{id:"payment_proof",name:"Payment Proof"}]},agency_payment_proof:{name:"Agency Payment Proof",id:"agency_payment_proof",status:"Not Uploaded",items:[{id:"agency_payment_proof",name:"Agency Payment Proof"}]},additional_documents:{name:"Additional Payment Document",id:"additional_payment_doc",items:[{id:"additional_payment_doc2",name:"Payment Document"},{id:"additional_payment_doc3",name:"Payment Document"},{id:"additional_payment_doc4",name:"Payment Document"},{id:"additional_payment_doc5",name:"Payment Document"}]},to_advance_payment_proof:{name:"To Advance Payment Proof",id:"to_advance_payment_proof",status:"Not Uploaded",items:[{id:"to_advance_payment_proof",name:"To Advance Payment Proof"}]},to_advance_additional_documents:{name:"To Advance Additional Payment Document",id:"to_advance_additional_payment_doc",items:[{id:"to_advance_additional_payment_doc2",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc3",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc4",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc5",name:"To Advance Payment Document"}]},driving_license:{name:"Driving License",id:"driving_license",status:"Not Uploaded",items:[{id:"driving_license_front",name:"Driving License Front",status:""},{id:"driving_license_back",name:"Driving License Back",status:""}]},nominee_aadhar:{name:"Nominee Aadhar",id:"nominee_aadhar",status:"Not Uploaded",items:[{id:"nominee_aadhar_front",name:"AADHAR Card Front",status:""},{id:"nominee_aadhar_back",name:"AADHAR Card Back",status:""}]},demat_document:{name:"Demat Document",id:"demat_document",status:"Not Uploaded",items:[{id:"demat_document",name:"Demat Document",status:""}]},payment_additional_documents:{name:"Additional Payment Document",id:"additional_payment_doc",items:[{id:"additional_payment_doc2",name:"Payment Document"},{id:"additional_payment_doc3",name:"Payment Document"},{id:"additional_payment_doc4",name:"Payment Document"},{id:"additional_payment_doc5",name:"Payment Document"}]},project_payment:{name:"Project Payment",id:"project_payment",items:[{id:"project_payment_1",name:"Payment Document"},{id:"project_payment_2",name:"Payment Document"},{id:"project_payment_3",name:"Payment Document"},{id:"project_payment_4",name:"Payment Document"},{id:"project_payment_5",name:"Payment Document"}]}}},55511:function(e,n,t){"use strict";var a=t(34051),r=t.n(a),o=t(6154);function i(e,n,t,a,r,o,i){try{var d=e[o](i),c=d.value}catch(s){return void t(s)}d.done?n(c):Promise.resolve(c).then(a,r)}var d=function(){var e,n=(e=r().mark((function e(n){var t,a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("document",n),e.next=4,o.Z.post("".concat("https://kycramaerabackend.ramaera.com","/documents/upload"),t,{headers:{"Content-Type":"multipart/form-data"}});case 4:return a=e.sent,e.abrupt("return",a.data.url);case 6:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(a,r){var o=e.apply(n,t);function d(e){i(o,a,r,d,c,"next",e)}function c(e){i(o,a,r,d,c,"throw",e)}d(void 0)}))});return function(e){return n.apply(this,arguments)}}();n.Z=d}},function(e){e.O(0,[5370,9990,4789,8549,6261,6154,2459,9774,2888,179],(function(){return n=95061,e(e.s=n);var n}));var n=e.O();_N_E=n}]);