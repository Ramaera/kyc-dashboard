"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2881],{52881:function(e,t,n){n.r(t);var a=n(34051),r=n.n(a),o=n(85893),i=n(45477),d=n(42480),s=n(46230),c=n(20427),m=n(55511),u=n(50319),l=n(8987),p=n(15861),y=n(11057),f=n(72882),v=n(7906),h=n(295),_=n(53816),x=n(53252),P=n(86886),b=n(67294),g=n(86501);function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function D(e,t,n,a,r,o,i){try{var d=e[o](i),s=d.value}catch(c){return void n(c)}d.done?t(s):Promise.resolve(s).then(a,r)}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){A(e,t,n[t])}))}return e}function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,o=[],i=!0,d=!1;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(o.push(a.value),!t||o.length!==t);i=!0);}catch(s){d=!0,r=s}finally{try{i||null==n.return||n.return()}finally{if(d)throw r}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Z=[{name:"Company Name",value:"RAMAERA LEGAL INFOTECH PVT LTD."},{name:"Bank Name",value:"HDFC BANK"},{name:"Branch",value:"NOIDA SECTOR 18"},{name:"A/C No.",value:"50200073634812"},{name:"IFSC CODE ",value:"HDFC0000088"}];t.default=function(){var e=(0,s.T)(),t=(0,b.useState)(!1),n=t[0],a=t[1],j=(0,s.C)((function(e){var t;return null===(t=e.user)||void 0===t?void 0:t.data})),A=(0,b.useState)(!1),w=A[0],S=A[1],O=(0,b.useState)(null),R=O[0],N=O[1],I=(0,b.useState)(!1),E=I[0],T=I[1],U=(0,b.useState)(!1),B=U[0],F=U[1],L=(0,b.useState)(),V=L[0],H=L[1],W=(0,b.useState)(!1),K=W[0],G=W[1],M=(0,b.useState)(!1),z=M[0],J=M[1],$=C((0,u.D)(i.Is),1)[0],q=C((0,u.D)(i.yW),1)[0],Q=function(e){return!!e||(alert("Invalid Image"),!1)},X=function(e,t){var n,a=j,r=[];return null===j||void 0===j||null===(n=j.documents)||void 0===n||n.map((function(n){n.id===e?r.push(k({},n,{url:t})):r.push(n)})),k({},a,{documents:r})},Y=function(){var t,n=(t=r().mark((function t(){var n;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Q(R)){t.next=3;break}return t.abrupt("return");case 3:if(S(!0),t.prev=4,n="",!K){t.next=12;break}return t.next=9,(0,m.Z)(R);case 9:n=t.sent,t.next=13;break;case 12:n=R;case 13:if(!V){t.next=20;break}return t.next=16,q({variables:{title:d.Z.agency_payment_proof.items[0].id,url:n,id:V.id}});case 16:g.ZP.success("Payment Slip Updated "),e((0,c.j2)(X(V.id,n))),t.next=22;break;case 20:return t.next=22,$({variables:{title:d.Z.agency_payment_proof.items[0].id,url:n}});case 22:t.next=26;break;case 24:t.prev=24,t.t0=t.catch(4);case 26:S(!1),J(!1);case 28:case"end":return t.stop()}}),t,null,[[4,24]])})),function(){var e=this,n=arguments;return new Promise((function(a,r){var o=t.apply(e,n);function i(e){D(o,a,r,i,d,"next",e)}function d(e){D(o,a,r,i,d,"throw",e)}i(void 0)}))});return function(){return n.apply(this,arguments)}}();return(0,b.useEffect)((function(){var e,t;j&&(null===j||void 0===j?void 0:j.documents)&&(null===j||void 0===j||null===(e=j.documents)||void 0===e?void 0:e.length)>0&&(null===j||void 0===j||null===(t=j.documents)||void 0===t||t.find((function(e){e.title.toLowerCase()===d.Z.agency_payment_proof.items[0].id&&(H(e),N(e.url),a(!0))})))}),[j]),(0,o.jsx)(o.Fragment,{children:n?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(p.Z,{variant:"h4",sx:{my:2},children:"Kindly Deposit Rs. 5000/- and upload the payment slip as a proof!"}),(0,o.jsxs)("div",{style:{flexDirection:"row",justifyContent:"space-between",marginTop:10,marginBottom:10},children:[(0,o.jsx)(y.Z,{style:{marginRight:20},variant:"contained",onClick:function(){T(!0),F(!1)},children:"Bank Details"}),(0,o.jsx)(y.Z,{variant:"contained",onClick:function(){T(!1),F(!0)},children:"UPI"})]})," ",E&&(0,o.jsx)(f.Z,{children:(0,o.jsx)(v.Z,{sx:{minWidth:100},"aria-label":"simple table",children:(0,o.jsx)(h.Z,{children:Z.map((function(e){return(0,o.jsxs)(_.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,o.jsx)(x.Z,{component:"th",scope:"row",children:e.name}),(0,o.jsx)(x.Z,{align:"right",children:e.value})]},e.name)}))})})}),B&&(0,o.jsx)(f.Z,{children:(0,o.jsx)(v.Z,{sx:{minWidth:100},"aria-label":"simple table",children:(0,o.jsxs)(h.Z,{children:[(0,o.jsx)("img",{style:{width:"250px",borderRadius:"20px",padding:"10px"},src:"/images/upi_legal.png"}),(0,o.jsx)(p.Z,{variant:"body1",sx:{my:2,pl:2},children:"OR"}),(0,o.jsx)(p.Z,{variant:"h4",sx:{my:2,pl:2},children:(0,o.jsx)("a",{href:"upi://pay?pa=ramaeralegal.noida@hdfcbank&pn=Ramaera K&cu=INR",children:"UPI ID : ramaeralegal.noida@hdfcbank"})})]})})}),R?(0,o.jsx)("img",{src:"object"==typeof R?URL.createObjectURL(R):R,style:{marginTop:"10px"},height:200}):null,V&&V.status&&(0,o.jsxs)(p.Z,{variant:"h4",sx:{my:2},children:["Status :"," ",(0,o.jsx)("span",{style:{color:V?"APPROVED"===V.status?"green":"REJECTED"===V.status&&"red":""},children:V&&V.status})]}),(0,o.jsxs)(P.ZP,{container:!0,py:2,spacing:2,children:[(0,o.jsx)(P.ZP,{item:!0,xs:12,sm:5,md:3,lg:3,children:(0,o.jsxs)(y.Z,{variant:"contained",component:"label",style:{cursor:V&&"APPROVED"===V.status?"not-allowed":"pointer"},color:V&&"APPROVED"===V.status?"secondary":"primary",children:["Select Payment Slip",(0,o.jsx)("input",{type:"file",accept:"image/*",hidden:!0,disabled:!!V&&"APPROVED"===V.status,onChange:function(e){e.target.files.length>0&&(J(!0),N(e.target.files[0]),G(!0))}})]})}),(0,o.jsx)(P.ZP,{item:!0,xs:2,children:(0,o.jsx)(l.Z,{loading:w,fullWidth:!0,variant:"contained",disabled:!z,onClick:function(){Y()},children:"Submit"})}),(0,o.jsx)(g.x7,{position:"bottom-center",reverseOrder:!1})]})]}):(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(P.ZP,{container:!0,py:2,spacing:2,sx:{display:"flex",justifyContent:"center"},children:(0,o.jsx)(y.Z,{onClick:function(){a(!0)},variant:"contained",component:"label",children:"Get Agency"})})})})}},42480:function(e,t){t.Z={aadhar:{id:"aadhar",name:"Aadhar Card",status:"",items:[{id:"aadhar_front",name:"AADHAR Card Front",status:""},{id:"aadhar_back",name:"AADHAR Card Back",status:""}]},pancard:{id:"pancard",name:"Pancard",status:"",items:[{id:"pancard",name:"Pan Card",status:""}]},avatar:{id:"photo",name:"Photo",status:"",items:[{id:"avatar",name:"Passport Size Photo",status:""}]},voterId:{id:"voterId",name:"Voter Id Card",status:"Not Uploaded",items:[{id:"voterid_front",name:"Voter Id Front",status:""},{id:"voterid_back",name:"Voted Id Card Back",status:""}]},passbook:{name:"Passbook  or Bank Statement",id:"passbook",status:"Not Uploaded",items:[{id:"passbook",name:"Bank Passbook Or Bank Statement",status:"Not Uploaded"}]},payment_proof:{name:"Payment Proof",id:"payment_proof",status:"Not Uploaded",items:[{id:"payment_proof",name:"Payment Proof"}]},agency_payment_proof:{name:"Agency Payment Proof",id:"agency_payment_proof",status:"Not Uploaded",items:[{id:"agency_payment_proof",name:"Agency Payment Proof"}]},additional_payment_documents:{name:"Additional Payment Document",id:"additional_payment_doc",items:[{id:"additional_payment_doc2",name:"Payment Document"},{id:"additional_payment_doc3",name:"Payment Document"},{id:"additional_payment_doc4",name:"Payment Document"},{id:"additional_payment_doc5",name:"Payment Document"}]},to_advance_payment_proof:{name:"To Advance Payment Proof",id:"to_advance_payment_proof",status:"Not Uploaded",items:[{id:"to_advance_payment_proof",name:"To Advance Payment Proof"}]},to_advance_additional_documents:{name:"To Advance Additional Payment Document",id:"to_advance_additional_payment_doc",items:[{id:"to_advance_additional_payment_doc2",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc3",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc4",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc5",name:"To Advance Payment Document"}]},driving_license:{name:"Driving License",id:"driving_license",status:"Not Uploaded",items:[{id:"driving_license_front",name:"Driving License Front",status:""},{id:"driving_license_back",name:"Driving License Back",status:""}]},nominee_aadhar:{name:"Nominee Aadhar",id:"nominee_aadhar",status:"Not Uploaded",items:[{id:"nominee_aadhar_front",name:"AADHAR Card Front",status:""},{id:"nominee_aadhar_back",name:"AADHAR Card Back",status:""}]},demat_document:{name:"Demat Document",id:"demat_document",status:"Not Uploaded",items:[{id:"demat_document",name:"Demat Document",status:""}]},project_payment:{name:"Project Payment",id:"project_payment",items:[{id:"project_payment_1",name:"Payment Document"},{id:"project_payment_2",name:"Payment Document"},{id:"project_payment_3",name:"Payment Document"},{id:"project_payment_4",name:"Payment Document"},{id:"project_payment_5",name:"Payment Document"}]}}},55511:function(e,t,n){var a=n(34051),r=n.n(a),o=n(6154);function i(e,t,n,a,r,o,i){try{var d=e[o](i),s=d.value}catch(c){return void n(c)}d.done?t(s):Promise.resolve(s).then(a,r)}var d=function(){var e,t=(e=r().mark((function e(t){var n,a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("document",t),e.next=4,o.Z.post("".concat("https://kycramaerabackend.ramaera.com","/documents/upload"),n,{headers:{"Content-Type":"multipart/form-data"}});case 4:return a=e.sent,e.abrupt("return",a.data.url);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(a,r){var o=e.apply(t,n);function d(e){i(o,a,r,d,s,"next",e)}function s(e){i(o,a,r,d,s,"throw",e)}d(void 0)}))});return function(e){return t.apply(this,arguments)}}();t.Z=d}}]);