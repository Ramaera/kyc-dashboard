(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6716],{52689:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/agency/Tabs/Payment",function(){return e(51248)}])},51248:function(n,t,e){"use strict";e.r(t),e.d(t,{rows:function(){return E}});var a=e(34051),r=e.n(a),o=e(85893),i=e(87357),u=e(86886),c=e(50135),s=e(11057),d=e(15861),l=e(53816),m=e(53252),p=e(67294),f=e(50319),v=e(42480),y=e(86501),h=e(77502),_=e(55511),b=e(9473),x=e(61636),g=e(99099),P=e(85109),j=e(71455),k=e(8987);function S(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,a=new Array(t);e<t;e++)a[e]=n[e];return a}function D(n,t,e,a,r,o,i){try{var u=n[o](i),c=u.value}catch(s){return void e(s)}u.done?t(c):Promise.resolve(c).then(a,r)}function A(n){return function(){var t=this,e=arguments;return new Promise((function(a,r){var o=n.apply(t,e);function i(n){D(o,a,r,i,u,"next",n)}function u(n){D(o,a,r,i,u,"throw",n)}i(void 0)}))}}function w(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function Z(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},a=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),a.forEach((function(t){w(n,t,e[t])}))}return n}function C(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var a,r,o=[],i=!0,u=!1;try{for(e=e.call(n);!(i=(a=e.next()).done)&&(o.push(a.value),!t||o.length!==t);i=!0);}catch(c){u=!0,r=c}finally{try{i||null==e.return||e.return()}finally{if(u)throw r}}return o}}(n,t)||$(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(n){return function(n){if(Array.isArray(n))return S(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||$(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(n,t){if(n){if("string"===typeof n)return S(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?S(n,t):void 0}}var E=[{config:v.Z.additional_documents}],I=function(n){var t=n.data,e=n.documents,a=void 0===e?[]:e,v=n.user,b=n.rowNo,x=(0,p.useState)([]),g=x[0],P=x[1],S=(0,p.useState)([]),D=S[0],w=S[1],$=(0,p.useState)(0),E=$[0],I=$[1],R=(0,p.useState)([]),T=R[0],O=R[1],N=(0,p.useState)([null,null,null,null]),L=N[0],F=N[1];(0,p.useEffect)((function(){I(b)}),[b]);var H=C((0,f.D)(h.p1),1)[0],B=C((0,f.D)(h.HF),1)[0],V=(0,p.useState)(!1),J=V[0],K=V[1];(0,p.useEffect)((function(){var n=[],e=!0,r=!1,o=void 0;try{for(var i,u=a[Symbol.iterator]();!(e=(i=u.next()).done);e=!0){var c=i.value;n.push(c.url)}}catch(d){r=!0,o=d}finally{try{e||null==u.return||u.return()}finally{if(r)throw o}}P(n);var s=[null,null,null,null];t.config.items.map((function(n){var t;null===v||void 0===v||null===(t=v.documents)||void 0===t||t.map((function(t){t.title===n.id&&(s[parseInt(n.id.slice(22,24))-2]=t.amount)}))})),F(s)}),[a,v]);var W=function(){var n=A(r().mark((function n(t,e){return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),X=function(){var n=A(r().mark((function n(t,e){return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,H({variables:{id:v.id,documentId:t,url:e}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),q=function(n){var t,e;return null===v||void 0===v||null===(t=v.documents)||void 0===t||t.map((function(t){t.title===n&&(e=t.id)})),e},z=function(){var n=A(r().mark((function n(){var e,a;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e=0;case 1:if(!(e<E)){n.next=11;break}if(a=t.config.items[e].id,!L[e]){n.next=8;break}return n.next=6,H({variables:{id:v.id,documentId:q(a),amount:L[e]}});case 6:n.sent,y.ZP.success("Amount Updated");case 8:e++,n.next=1;break;case 11:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),M=function(){var n=A(r().mark((function n(t,e){return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,B({variables:{id:t,status:e}});case 3:n.sent&&("APPROVED"===e?y.ZP.success("Document Status ".concat(e)):y.ZP.error("Document Status ".concat(e)),O((function(n){return U(n).concat([{id:t,status:e}])}))),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),y.ZP.error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t,e){return n.apply(this,arguments)}}(),Q=function(n){var t=!1;return null===T||void 0===T||T.map((function(e){n===e.id&&(t=e.status)})),t},Y=function(){var n=A(r().mark((function n(){var e,o,i,u,c,s,d,l;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:K(!0),n.prev=1,e=0;case 3:if(!(e<E)){n.next=32;break}if(!D[e]){n.next=29;break}return o=t.config.items[e].id,n.next=8,(0,_.Z)(g[e]);case 8:if(i=n.sent,u=a.find((function(n){if(n.title.toLowerCase()===o.toLowerCase())return!0})),(c=v.documents)||(c=[]),!u){n.next=22;break}return n.next=15,X(u.id,i);case 15:s=n.sent,y.ZP.success("".concat(o," Uploaded")),(d=c.filter((function(n){return n.id!==document.id}))).push(s.data.updateDocument),c=d,n.next=27;break;case 22:return n.next=24,W(o,i);case 24:l=n.sent,y.ZP.success("".concat(o," Uploaded")),c=U(c).concat([l.data.createDocument]);case 27:Z({},v).documents=c;case 29:e++,n.next=3;break;case 32:n.next=37;break;case 34:n.prev=34,n.t0=n.catch(1),console.log("error",n.t0);case 37:K(!1);case 38:case"end":return n.stop()}}),n,null,[[1,34]])})));return function(){return n.apply(this,arguments)}}();return(0,o.jsxs)(o.Fragment,{children:[a[0]&&(0,o.jsxs)(d.Z,{sx:{fontWeight:"bold",marginTop:5},children:[t.config.name," ",t.isOptional?"(Optional)":""]}),a[0]&&(0,o.jsxs)(l.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,o.jsx)(m.Z,{width:300,children:function(){for(var n=[],t=0;t<E;t++){var e=g[t];e&&n.push((0,o.jsx)("div",{style:{marginTop:15},children:(0,o.jsx)(j.TV,{children:(0,o.jsx)(j.HI,{src:"object"==typeof e?URL.createObjectURL(e):e,children:(0,o.jsx)("img",{src:"object"==typeof e?URL.createObjectURL(e):e,height:150,style:{marginLeft:"5px"}})})})}))}return 0==n.length?(0,o.jsx)(d.Z,{variant:"subtitle1",children:"No Document"}):n}()}),(0,o.jsx)(m.Z,{style:{},children:function(){for(var n=function(n){var t,d=U(L);e.push((0,o.jsxs)("div",{style:{height:160,marginTop:10},children:[(0,o.jsxs)("div",{style:{marginBottom:10},children:["Status:"," ",(0,o.jsx)("span",{style:{color:"APPROVED"===Q(a[n].id)?"green":"REJECTED"===Q(a[n].id)?"red":a[n]?"APPROVED"===a[n].status?"green":"REJECTED"===a[n].status&&"red":""},children:Q(a[n].id)||(null===(t=a[n])||void 0===t?void 0:t.status)})]}),(0,o.jsx)(i.Z,{sx:{display:"flex",justifyContent:"center",marginBottom:"10px"},children:(0,o.jsxs)(u.ZP,{children:[(0,o.jsx)(c.Z,{id:"outlined",label:"Amount*",value:L[n],variant:"outlined",type:"number",onChange:function(t){t.target.value?d[n]=parseInt(t.target.value):d[n]=null,F(d)}}),(0,o.jsx)(s.Z,{onClick:function(){M(a[n].id,"APPROVED")},variant:"outlined",color:"success",sx:{ml:2},children:"Approve"}),(0,o.jsx)(s.Z,{onClick:function(){return M(a[n].id,"REJECTED")},variant:"outlined",color:"error",sx:{ml:2},children:"Reject"})]})}),(0,o.jsxs)(s.Z,{fullWidth:!0,style:{marginTop:"10px"},component:"label",children:["Choose ",r[n].name,(0,o.jsx)("input",{type:"file",accept:"image/*",hidden:!0,onChange:function(t){if(t.target.files.length>0){var e=U(g);e[n]=t.target.files[0],P(e);var a=U(D);a[n]=!0,w(a)}}})]})]}))},e=[],r=t.config.items,d=0;d<E;d++)n(d);return e}()}),(0,o.jsx)(m.Z,{children:(0,o.jsx)(k.Z,{loading:J,variant:"contained",onClick:function(){Y(),z()},children:"Update"})})]},t.config.name)]})},R=function(n){var t=(0,b.v9)((function(n){return n.foundUser.foundUser})),e=[];if(t&&t.documents){var a=!0,r=!1,o=void 0;try{for(var i,u=function(n,a){var r,o=a.value,i=null===t||void 0===t||null===(r=t.documents)||void 0===r?void 0:r.find((function(n){if(n.title.toLowerCase()===o.id.toLowerCase())return!0}));i&&e.push(i)},c=n[Symbol.iterator]();!(a=(i=c.next()).done);a=!0)u(0,i)}catch(s){r=!0,o=s}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}}return e};t.default=function(){var n=(0,b.I0)(),t=(0,b.v9)((function(n){return n.foundUser.foundUser})),e=(0,b.v9)((function(n){return n.allUsers.allTheUsers})),a=(0,p.useState)(0),l=a[0],m=a[1],k=(0,p.useState)(!1),S=(k[0],k[1]),D=(0,p.useState)(!1),w=(D[0],D[1],(0,p.useState)("")),U=w[0],$=w[1],T=(0,p.useState)(!1),O=(T[0],T[1],(0,p.useState)()),N=O[0],L=O[1],F=(0,p.useState)(),H=F[0],B=F[1],V=(0,p.useState)(!1),J=V[0],K=V[1],W=(0,p.useState)(!1),X=W[0],q=W[1],z=C((0,f.D)(h.p1),1)[0],M=C((0,f.D)(h.HF),1)[0],Q=function(){var n=A(r().mark((function n(){var e,a;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a=0,null===t||void 0===t||null===(e=t.documents)||void 0===e||e.map((function(n){"additional_payment_doc"===n.title.slice(0,22)&&(a+=1)})),m(a);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();(0,p.useEffect)((function(){Q()}),[]);var Y=function(n,e){var a,r=t,o=[];return null===t||void 0===t||null===(a=t.documents)||void 0===a||a.map((function(t){t.id===n?o.push(Z({},t,{url:e})):o.push(t)})),Z({},r,{documents:o})},G=function(n,e){var a,r=t,o=[];return null===t||void 0===t||null===(a=t.documents)||void 0===a||a.map((function(t){t.id===n?o.push(Z({},t,{amount:e})):o.push(t)})),Z({},r,{documents:o})},nn=function(n,e){var a,r=t,o=[];return null===t||void 0===t||null===(a=t.documents)||void 0===a||a.map((function(t){t.id===n?o.push(Z({},t,{status:e})):o.push(t)})),Z({},r,{documents:o})},tn=function(){var t=A(r().mark((function t(a,o){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M({variables:{id:a,status:o}});case 2:t.sent,n((0,x.Hn)(nn(H.id,o))),n((0,g.UF)((0,P.Z)(e,nn(H.id,o))));case 5:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),en=function(){var a=A(r().mark((function a(){return r().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,z({variables:{id:t.id,documentId:H.id,amount:parseInt(N)}});case 3:a.sent,n((0,x.Hn)(G(H.id,parseInt(N)))),n((0,g.UF)((0,P.Z)(e,G(H.id,parseInt(N))))),y.ZP.success("Amount Updated"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),y.ZP.error(a.t0);case 12:S(!1);case 13:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(){return a.apply(this,arguments)}}(),an=function(){var a=A(r().mark((function a(){var o;return r().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(S(!0),a.prev=1,o="",!J){a.next=15;break}return a.prev=4,a.next=7,(0,_.Z)(U);case 7:o=a.sent,a.next=13;break;case 10:a.prev=10,a.t0=a.catch(4),o="lorem";case 13:a.next=16;break;case 15:o=U;case 16:if(!H){a.next=23;break}return a.next=19,z({variables:{id:t.id,documentId:H.id,url:o}});case 19:n((0,x.Hn)(Y(H.id,o))),n((0,g.UF)((0,P.Z)(e,Y(H.id,o)))),a.next=24;break;case 23:console.log("we need access token of user to create any doc");case 24:y.ZP.success("Payment Slip Updated "),a.next=30;break;case 27:a.prev=27,a.t1=a.catch(1),y.ZP.error(a.t1);case 30:S(!1);case 31:case"end":return a.stop()}}),a,null,[[1,27],[4,10]])})));return function(){return a.apply(this,arguments)}}();return(0,p.useEffect)((function(){var n,e;t&&t.documents&&(null===t||void 0===t||null===(n=t.documents)||void 0===n?void 0:n.length)>0&&(null===t||void 0===t||null===(e=t.documents)||void 0===e||e.find((function(n){n.title.toLowerCase()===v.Z.payment_proof.items[0].id&&(B(n),$(n.url),L(n.amount))})))}),[t]),(0,o.jsxs)(o.Fragment,{children:[U?(0,o.jsx)(j.TV,{children:(0,o.jsx)(j.HI,{src:"object"==typeof U?URL.createObjectURL(U):U,children:(0,o.jsx)("img",{style:{marginTop:"10px",cursor:"pointer"},src:"object"==typeof U?URL.createObjectURL(U):U,width:200})})}):null,H&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(d.Z,{variant:"h4",sx:{my:2},children:["Status :"," ",(0,o.jsx)("span",{style:{color:H?"APPROVED"===H.status?"green":"REJECTED"===H.status&&"red":""},children:H&&H.status})]}),(0,o.jsx)(i.Z,{children:(0,o.jsxs)(u.ZP,{children:[(0,o.jsx)(s.Z,{onClick:function(){return tn(H.id,"APPROVED")},variant:"outlined",color:"success",children:"Approve"}),(0,o.jsx)(s.Z,{onClick:function(){return tn(H.id,"REJECTED")},variant:"outlined",color:"error",sx:{ml:2},children:"Reject"})]})})]}),U&&(0,o.jsxs)(u.ZP,{container:!0,p:2,mt:2,pl:0,spacing:2,children:[(0,o.jsx)(c.Z,{id:"outlined",label:"Amount*",value:N,variant:"outlined",type:"number",onChange:function(n){L(n.target.value)}}),(0,o.jsx)(u.ZP,{item:!0,children:(0,o.jsx)(s.Z,{fullWidth:!0,variant:"contained",component:"label",onClick:function(){en()},children:"Submit Amount"})})]}),(0,o.jsxs)(u.ZP,{container:!0,p:2,pl:0,spacing:2,children:[H&&(0,o.jsx)(u.ZP,{item:!0,xs:4,children:(0,o.jsxs)(s.Z,{variant:"contained",component:"label",children:["Select Payment Slip",(0,o.jsx)("input",{type:"file",accept:"image/*",hidden:!0,onChange:function(n){n.target.files.length>0&&(q(!0),$(n.target.files[0]),K(!0))}})]})}),U&&(0,o.jsx)(u.ZP,{item:!0,xs:2,children:(0,o.jsx)(s.Z,{fullWidth:!0,variant:"contained",disabled:!X,onClick:function(){an()},children:"Submit"})}),(0,o.jsx)(y.x7,{position:"bottom-center",reverseOrder:!1})]}),(0,o.jsx)(o.Fragment,{children:E.map((function(n,e){return(0,o.jsx)(I,{data:n,rowNo:l,user:t,documents:R(n.config.items)},e)}))})]})}},77502:function(n,t,e){"use strict";e.d(t,{Fm:function(){return u},HF:function(){return i},QX:function(){return o},p1:function(){return r}});var a=e(81621),r=(0,a.Ps)("\nmutation updateDataByAdmin (\n$id: String!,\n$name: String,\n$father_or_husband_name: String,\n$date_of_birth: String,\n$mobile_number: String,\n$alternate_mobile_number: String,\n$email: String,\n$demat_account: String,\n$nomineeName: String,\n$nomineeRelationship: String,\n$documentId: String,\n$url: String,\n$amount: Int,\n){updateDataByAdmin(\n  data: \n  { \n      id: $id\n      name: $name\n      father_or_husband_name: $father_or_husband_name\n      date_of_birth:$date_of_birth\n      mobile_number:$mobile_number\n      alternate_mobile_number:$alternate_mobile_number\n      email:$email\n      demat_account:$demat_account\n      nomineeName: $nomineeName\n      nomineeRelationship: $nomineeRelationship\n      documentId: $documentId\n      url: $url\n      amount: $amount\n  })\n  {\n    name\n    documents{\n      id\n      title\n      url\n      amount\n    }\n  }\n}"),o=(0,a.Ps)("\nmutation updateStatus (\n$id: String!,\n$kyc: KYC!,\n){updateStatus(\n  data: \n  { \n      id: $id\n      kyc: $kyc\n  })\n  {\n    kyc\n  }\n}"),i=(0,a.Ps)("\nmutation updateDocumentStatusByAdmin (\n$id: String!,\n$status: STATUS!,\n){updateDocumentStatusByAdmin(\n  data: \n  { \n      id: $id\n      status: $status\n  })\n  {\n    id\n    status\n  }\n}"),u=(0,a.Ps)("\nquery getAllKycHandler {\n  getAllKycHandler{\n    userId\n    handlerId\n    updatedKycStatus\n  }\n}\n")},42480:function(n,t){"use strict";t.Z={aadhar:{id:"aadhar",name:"Aadhar Card",status:"",items:[{id:"aadhar_front",name:"AADHAR Card Front",status:""},{id:"aadhar_back",name:"AADHAR Card Back",status:""}]},pancard:{id:"pancard",name:"Pancard",status:"",items:[{id:"pancard",name:"Pan Card",status:""}]},avatar:{id:"photo",name:"Photo",status:"",items:[{id:"avatar",name:"Passport Size Photo",status:""}]},voterId:{id:"voterId",name:"Voter Id Card",status:"Not Uploaded",items:[{id:"voterid_front",name:"Voter Id Front",status:""},{id:"voterid_back",name:"Voted Id Card Back",status:""}]},passbook:{name:"Passbook  or Bank Statement",id:"passbook",status:"Not Uploaded",items:[{id:"passbook",name:"Bank Passbook Or Bank Statement",status:"Not Uploaded"}]},payment_proof:{name:"Payment Proof",id:"payment_proof",status:"Not Uploaded",items:[{id:"payment_proof",name:"Payment Proof"}]},agency_payment_proof:{name:"Agency Payment Proof",id:"agency_payment_proof",status:"Not Uploaded",items:[{id:"agency_payment_proof",name:"Agency Payment Proof"}]},additional_documents:{name:"Additional Payment Document",id:"additional_payment_doc",items:[{id:"additional_payment_doc2",name:"Payment Document"},{id:"additional_payment_doc3",name:"Payment Document"},{id:"additional_payment_doc4",name:"Payment Document"},{id:"additional_payment_doc5",name:"Payment Document"}]},to_advance_payment_proof:{name:"To Advance Payment Proof",id:"to_advance_payment_proof",status:"Not Uploaded",items:[{id:"to_advance_payment_proof",name:"To Advance Payment Proof"}]},to_advance_additional_documents:{name:"To Advance Additional Payment Document",id:"to_advance_additional_payment_doc",items:[{id:"to_advance_additional_payment_doc2",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc3",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc4",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc5",name:"To Advance Payment Document"}]},driving_license:{name:"Driving License",id:"driving_license",status:"Not Uploaded",items:[{id:"driving_license_front",name:"Driving License Front",status:""},{id:"driving_license_back",name:"Driving License Back",status:""}]},nominee_aadhar:{name:"Nominee Aadhar",id:"nominee_aadhar",status:"Not Uploaded",items:[{id:"nominee_aadhar_front",name:"AADHAR Card Front",status:""},{id:"nominee_aadhar_back",name:"AADHAR Card Back",status:""}]},demat_document:{name:"Demat Document",id:"demat_document",status:"Not Uploaded",items:[{id:"demat_document",name:"Demat Document",status:""}]},payment_additional_documents:{name:"Additional Payment Document",id:"additional_payment_doc",items:[{id:"additional_payment_doc2",name:"Payment Document"},{id:"additional_payment_doc3",name:"Payment Document"},{id:"additional_payment_doc4",name:"Payment Document"},{id:"additional_payment_doc5",name:"Payment Document"}]},project_payment:{name:"Project Payment",id:"project_payment",items:[{id:"project_payment_1",name:"Payment Document"},{id:"project_payment_2",name:"Payment Document"},{id:"project_payment_3",name:"Payment Document"},{id:"project_payment_4",name:"Payment Document"},{id:"project_payment_5",name:"Payment Document"}]}}},85109:function(n,t){"use strict";t.Z=function(n,t){var e=[];return n.map((function(n){t.id===n.id?e.push(t):e.push(n)})),e}},55511:function(n,t,e){"use strict";var a=e(34051),r=e.n(a),o=e(7155),i=e(6154);function u(n,t,e,a,r,o,i){try{var u=n[o](i),c=u.value}catch(s){return void e(s)}u.done?t(c):Promise.resolve(c).then(a,r)}var c=function(){var n,t=(n=r().mark((function n(t){var e,a;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(e=new FormData).append("document",t),n.next=4,i.Z.post("".concat(o.Z.API_URL,"/documents/upload"),e,{headers:{"Content-Type":"multipart/form-data"}});case 4:return a=n.sent,n.abrupt("return",a.data.url);case 6:case"end":return n.stop()}}),n)})),function(){var t=this,e=arguments;return new Promise((function(a,r){var o=n.apply(t,e);function i(n){u(o,a,r,i,c,"next",n)}function c(n){u(o,a,r,i,c,"throw",n)}i(void 0)}))});return function(n){return t.apply(this,arguments)}}();t.Z=c}},function(n){n.O(0,[6093,9990,1162,5133,2937,7058,315,2738,8584,6154,3571,9774,2888,179],(function(){return t=52689,n(n.s=t);var t}));var t=n.O();_N_E=t}]);