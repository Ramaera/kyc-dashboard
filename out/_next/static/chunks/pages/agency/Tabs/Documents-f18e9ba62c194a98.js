(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[390],{32590:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/agency/Tabs/Documents",function(){return e(57857)}])},57857:function(n,t,e){"use strict";e.r(t);var a=e(34051),r=e.n(a),o=e(85893),i=e(42480),d=e(55511),c=e(50319),u=e(8987),s=e(11057),m=e(87357),l=e(15861),f=e(55113),p=e(7906),y=e(295),_=e(53252),h=e(72882),v=e(53184),b=e(53816),g=(e(19662),e(37070),e(93491),e(67294)),P=e(86501),x=e(9473),j=e(77502),A=e(61636),D=e(99099),S=e(85109),k=e(71455);function w(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,a=new Array(t);e<t;e++)a[e]=n[e];return a}function Z(n,t,e,a,r,o,i){try{var d=n[o](i),c=d.value}catch(u){return void e(u)}d.done?t(c):Promise.resolve(c).then(a,r)}function $(n){return function(){var t=this,e=arguments;return new Promise((function(a,r){var o=n.apply(t,e);function i(n){Z(o,a,r,i,d,"next",n)}function d(n){Z(o,a,r,i,d,"throw",n)}i(void 0)}))}}function U(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function C(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},a=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),a.forEach((function(t){U(n,t,e[t])}))}return n}function O(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var a,r,o=[],i=!0,d=!1;try{for(e=e.call(n);!(i=(a=e.next()).done)&&(o.push(a.value),!t||o.length!==t);i=!0);}catch(c){d=!0,r=c}finally{try{i||null==e.return||e.return()}finally{if(d)throw r}}return o}}(n,t)||N(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(n){return function(n){if(Array.isArray(n))return w(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||N(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(n,t){if(n){if("string"===typeof n)return w(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?w(n,t):void 0}}var T=[{config:i.Z.avatar,status:-1},{config:i.Z.aadhar,status:-1},{config:i.Z.pancard,status:-1},{config:i.Z.passbook,status:-1},{config:i.Z.voterId,status:-1,isOptional:!0},{config:i.Z.driving_license,status:-1,isOptional:!0}],R=function(n){var t=n.user,e=n.data,a=n.documents,i=void 0===a?[]:a,f=(0,x.v9)((function(n){return n.allUsers.allTheUsers})),p=(0,g.useState)([]),y=p[0],h=p[1],v=(0,g.useState)([]),w=v[0],Z=v[1],U=(0,x.I0)();if(!i[0])return null;var N=O((0,c.D)(j.p1),1)[0],T=O((0,c.D)(j.HF),1)[0],R=(0,g.useState)(!1),E=R[0],F=R[1],L=function(n,e){var a,r=t,o=[];return null===t||void 0===t||null===(a=t.documents)||void 0===a||a.map((function(t){t.id===n?o.push(C({},t,{status:e})):o.push(t)})),C({},r,{documents:o})},B=function(n,e){var a,r=t,o=[];return null===t||void 0===t||null===(a=t.documents)||void 0===a||a.map((function(t){t.id===n?o.push(C({},t,{url:e})):o.push(t)})),C({},r,{documents:o})};(0,g.useEffect)((function(){var n=[],t=!0,e=!1,a=void 0;try{for(var r,o=i[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){var d=r.value;n.push(d.url)}}catch(c){e=!0,a=c}finally{try{t||null==o.return||o.return()}finally{if(e)throw a}}h(n)}),[i]);var H=function(){var n=$(r().mark((function n(t,e){return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,T({variables:{id:t,status:e}});case 2:n.sent,U((0,A.Hn)(L(t,e))),U((0,D.UF)((0,S.Z)(f,L(t,e))));case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),V=function(){var n=$(r().mark((function n(e,a,o){return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,N({variables:{id:t.id,documentId:e,url:o}});case 2:n.sent,U((0,A.Hn)(B(e,o))),U((0,D.UF)((0,S.Z)(f,B(e,o)))),P.ZP.success("".concat(a," Updated"));case 6:case"end":return n.stop()}}),n)})));return function(t,e,a){return n.apply(this,arguments)}}(),K=function(){var n=$(r().mark((function n(){var t,a,o,c;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:F(!0),n.prev=1,t=0;case 3:if(!(t<w.length)){n.next=19;break}if(!w[t]){n.next=16;break}return a=e.config.items[t].id,n.next=8,(0,d.Z)(y[t]);case 8:if(o=n.sent,!(c=i.find((function(n){if(n.title.toLowerCase()===a.toLowerCase())return!0})))){n.next=15;break}return n.next=13,V(c.id,a,o);case 13:n.next=16;break;case 15:console.log("can't create documents");case 16:t++,n.next=3;break;case 19:n.next=24;break;case 21:n.prev=21,n.t0=n.catch(1),console.log("error",n.t0);case 24:F(!1);case 25:case"end":return n.stop()}}),n,null,[[1,21]])})));return function(){return n.apply(this,arguments)}}();return(0,o.jsxs)(b.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,o.jsxs)(_.Z,{component:"th",scope:"row",children:[e.config.name," ",e.isOptional?"(Optional)":""]}),(0,o.jsx)(_.Z,{children:function(){for(var n=[],t=e.config.items,a=0;a<t.length;a++){var r=y[a];r&&n.push((0,o.jsx)(k.TV,{children:(0,o.jsx)(k.HI,{src:"object"==typeof r?URL.createObjectURL(r):r,children:(0,o.jsx)("img",{src:"object"==typeof r?URL.createObjectURL(r):r,height:100,style:{marginRight:"5px"},width:100})})}))}return 0==n.length?(0,o.jsx)(l.Z,{variant:"subtitle1",children:"No Document"}):n}()}),(0,o.jsx)(_.Z,{children:function(){for(var n=function(n){t.push((0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.Z,{component:"label",children:["Choose ",a[n].name,(0,o.jsx)("input",{type:"file",accept:"image/*",hidden:!0,onChange:function(t){if(t.target.files.length>0){var e=I(y);e[n]=t.target.files[0],h(e);var a=I(w);a[n]=!0,Z(a)}}})]}),(0,o.jsxs)(m.Z,{display:"flex",children:[(0,o.jsx)(s.Z,{onClick:function(){return H(i[n].id,"APPROVED")},variant:"outlined",color:"success",children:"Approve"}),(0,o.jsx)(s.Z,{onClick:function(){return H(i[n].id,"REJECTED")},variant:"outlined",color:"error",sx:{ml:2},children:"Reject"})]})]}))},t=[],a=e.config.items,r=0;r<a.length;r++)n(r);return t}()}),(0,o.jsx)(_.Z,{children:(0,o.jsx)(u.Z,{loading:E,disabled:!function(){var n=w.find((function(n){if(n)return!0}));if(y.length==e.config.items.length&&n)return!0}(),variant:"contained",onClick:function(){K()},children:"Upload"})}),(0,o.jsx)(_.Z,{children:(0,o.jsx)("span",{style:{color:i[0]?"APPROVED"===i[0].status?"green":"REJECTED"===i[0].status&&"red":""},children:i[0]&&i[0].status})})]},e.config.name)};t.default=function(){var n=(0,x.v9)((function(n){return n.foundUser.foundUser})),t=function(t){var e=[];if(n&&n.documents){var a=!0,r=!1,o=void 0;try{for(var i,d=function(t,a){var r,o=a.value,i=null===n||void 0===n||null===(r=n.documents)||void 0===r?void 0:r.find((function(n){if(n.title.toLowerCase()===o.id.toLowerCase())return!0}));i&&e.push(i)},c=t[Symbol.iterator]();!(a=(i=c.next()).done);a=!0)d(0,i)}catch(u){r=!0,o=u}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}}return e};return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(h.Z,{component:f.Z,children:[(0,o.jsxs)(p.Z,{"aria-label":"simple table",children:[(0,o.jsx)(v.Z,{children:(0,o.jsxs)(b.Z,{children:[(0,o.jsx)(_.Z,{children:"Document Name"}),(0,o.jsx)(_.Z,{children:"Preview"}),(0,o.jsx)(_.Z,{style:{padding:"0 0 0 2rem"},children:"Action"}),(0,o.jsx)(_.Z,{style:{padding:"0 0 0 0"},children:"Upload Action"}),(0,o.jsx)(_.Z,{children:"Status"})]})}),(0,o.jsx)(y.Z,{children:T.map((function(e,a){return(0,o.jsx)(R,{user:n,data:e,documents:t(e.config.items)},a)}))})]}),(0,o.jsx)(P.x7,{position:"bottom-center",reverseOrder:!1})]})})}},77502:function(n,t,e){"use strict";e.d(t,{Fm:function(){return d},HF:function(){return i},QX:function(){return o},p1:function(){return r}});var a=e(81621),r=(0,a.Ps)("\nmutation updateDataByAdmin (\n$id: String!,\n$name: String,\n$father_or_husband_name: String,\n$date_of_birth: String,\n$mobile_number: String,\n$alternate_mobile_number: String,\n$email: String,\n$demat_account: String,\n$nomineeName: String,\n$nomineeRelationship: String,\n$documentId: String,\n$url: String,\n$amount: Int,\n){updateDataByAdmin(\n  data: \n  { \n      id: $id\n      name: $name\n      father_or_husband_name: $father_or_husband_name\n      date_of_birth:$date_of_birth\n      mobile_number:$mobile_number\n      alternate_mobile_number:$alternate_mobile_number\n      email:$email\n      demat_account:$demat_account\n      nomineeName: $nomineeName\n      nomineeRelationship: $nomineeRelationship\n      documentId: $documentId\n      url: $url\n      amount: $amount\n  })\n  {\n    name\n    documents{\n      id\n      title\n      url\n      amount\n    }\n  }\n}"),o=(0,a.Ps)("\nmutation updateStatus (\n$id: String!,\n$kyc: KYC!,\n){updateStatus(\n  data: \n  { \n      id: $id\n      kyc: $kyc\n  })\n  {\n    kyc\n  }\n}"),i=(0,a.Ps)("\nmutation updateDocumentStatusByAdmin (\n$id: String!,\n$status: STATUS!,\n){updateDocumentStatusByAdmin(\n  data: \n  { \n      id: $id\n      status: $status\n  })\n  {\n    id\n    status\n  }\n}"),d=(0,a.Ps)("\nquery getAllKycHandler {\n  getAllKycHandler{\n    userId\n    handlerId\n    updatedKycStatus\n  }\n}\n")},42480:function(n,t){"use strict";t.Z={aadhar:{id:"aadhar",name:"Aadhar Card",status:"",items:[{id:"aadhar_front",name:"AADHAR Card Front",status:""},{id:"aadhar_back",name:"AADHAR Card Back",status:""}]},pancard:{id:"pancard",name:"Pancard",status:"",items:[{id:"pancard",name:"Pan Card",status:""}]},avatar:{id:"photo",name:"Photo",status:"",items:[{id:"avatar",name:"Passport Size Photo",status:""}]},voterId:{id:"voterId",name:"Voter Id Card",status:"Not Uploaded",items:[{id:"voterid_front",name:"Voter Id Front",status:""},{id:"voterid_back",name:"Voted Id Card Back",status:""}]},passbook:{name:"Passbook  or Bank Statement",id:"passbook",status:"Not Uploaded",items:[{id:"passbook",name:"Bank Passbook Or Bank Statement",status:"Not Uploaded"}]},payment_proof:{name:"Payment Proof",id:"payment_proof",status:"Not Uploaded",items:[{id:"payment_proof",name:"Payment Proof"}]},agency_payment_proof:{name:"Agency Payment Proof",id:"agency_payment_proof",status:"Not Uploaded",items:[{id:"agency_payment_proof",name:"Agency Payment Proof"}]},additional_documents:{name:"Additional Payment Document",id:"additional_payment_doc",items:[{id:"additional_payment_doc2",name:"Payment Document"},{id:"additional_payment_doc3",name:"Payment Document"},{id:"additional_payment_doc4",name:"Payment Document"},{id:"additional_payment_doc5",name:"Payment Document"}]},to_advance_payment_proof:{name:"To Advance Payment Proof",id:"to_advance_payment_proof",status:"Not Uploaded",items:[{id:"to_advance_payment_proof",name:"To Advance Payment Proof"}]},to_advance_additional_documents:{name:"To Advance Additional Payment Document",id:"to_advance_additional_payment_doc",items:[{id:"to_advance_additional_payment_doc2",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc3",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc4",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc5",name:"To Advance Payment Document"}]},driving_license:{name:"Driving License",id:"driving_license",status:"Not Uploaded",items:[{id:"driving_license_front",name:"Driving License Front",status:""},{id:"driving_license_back",name:"Driving License Back",status:""}]},nominee_aadhar:{name:"Nominee Aadhar",id:"nominee_aadhar",status:"Not Uploaded",items:[{id:"nominee_aadhar_front",name:"AADHAR Card Front",status:""},{id:"nominee_aadhar_back",name:"AADHAR Card Back",status:""}]},demat_document:{name:"Demat Document",id:"demat_document",status:"Not Uploaded",items:[{id:"demat_document",name:"Demat Document",status:""}]},payment_additional_documents:{name:"Additional Payment Document",id:"additional_payment_doc",items:[{id:"additional_payment_doc2",name:"Payment Document"},{id:"additional_payment_doc3",name:"Payment Document"},{id:"additional_payment_doc4",name:"Payment Document"},{id:"additional_payment_doc5",name:"Payment Document"}]},project_payment:{name:"Project Payment",id:"project_payment",items:[{id:"project_payment_1",name:"Payment Document"},{id:"project_payment_2",name:"Payment Document"},{id:"project_payment_3",name:"Payment Document"},{id:"project_payment_4",name:"Payment Document"},{id:"project_payment_5",name:"Payment Document"}]}}},85109:function(n,t){"use strict";t.Z=function(n,t){var e=[];return n.map((function(n){t.id===n.id?e.push(t):e.push(n)})),e}},55511:function(n,t,e){"use strict";var a=e(34051),r=e.n(a),o=e(7155),i=e(6154);function d(n,t,e,a,r,o,i){try{var d=n[o](i),c=d.value}catch(u){return void e(u)}d.done?t(c):Promise.resolve(c).then(a,r)}var c=function(){var n,t=(n=r().mark((function n(t){var e,a;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(e=new FormData).append("document",t),n.next=4,i.Z.post("".concat(o.Z.API_URL,"/documents/upload"),e,{headers:{"Content-Type":"multipart/form-data"}});case 4:return a=n.sent,n.abrupt("return",a.data.url);case 6:case"end":return n.stop()}}),n)})),function(){var t=this,e=arguments;return new Promise((function(a,r){var o=n.apply(t,e);function i(n){d(o,a,r,i,c,"next",n)}function c(n){d(o,a,r,i,c,"throw",n)}i(void 0)}))});return function(n){return t.apply(this,arguments)}}();t.Z=c}},function(n){n.O(0,[2005,6093,9990,9448,8549,6261,6154,6233,9072,9774,2888,179],(function(){return t=32590,n(n.s=t);var t}));var t=n.O();_N_E=t}]);