"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7471],{77471:function(n,t,e){e.r(t),e.d(t,{rows:function(){return O}});var a=e(34051),r=e.n(a),i=e(85893),o=e(87357),u=e(86886),c=e(50135),s=e(11057),d=e(15861),l=e(53816),m=e(53252),p=e(94054),f=e(47312),v=e(10315),h=e(18972),y=e(67294),_=e(50319),x=e(42480),b=e(86501),g=e(77502),P=e(55511),j=e(9473),S=e(61636),k=e(99099),D=e(85109),A=e(71455),Z=e(8987);function w(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,a=new Array(t);e<t;e++)a[e]=n[e];return a}function C(n,t,e,a,r,i,o){try{var u=n[i](o),c=u.value}catch(s){return void e(s)}u.done?t(c):Promise.resolve(c).then(a,r)}function U(n){return function(){var t=this,e=arguments;return new Promise((function(a,r){var i=n.apply(t,e);function o(n){C(i,a,r,o,u,"next",n)}function u(n){C(i,a,r,o,u,"throw",n)}o(void 0)}))}}function $(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function E(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},a=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),a.forEach((function(t){$(n,t,e[t])}))}return n}function I(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var a,r,i=[],o=!0,u=!1;try{for(e=e.call(n);!(o=(a=e.next()).done)&&(i.push(a.value),!t||i.length!==t);o=!0);}catch(c){u=!0,r=c}finally{try{o||null==e.return||e.return()}finally{if(u)throw r}}return i}}(n,t)||T(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(n){return function(n){if(Array.isArray(n))return w(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||T(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(n,t){if(n){if("string"===typeof n)return w(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?w(n,t):void 0}}var O=[{config:x.Z.project_payment}],N=function(n){var t=n.data,e=n.documents,a=void 0===e?[]:e,p=n.user,f=n.rowNo,v=n.getProjectName,h=n.isPaymentDocument,x=(0,y.useState)(v),j=x[0],S=x[1],k=(0,y.useState)([]),D=k[0],w=k[1],C=(0,y.useState)([]),$=C[0],T=C[1],O=(0,y.useState)(0),N=O[0],L=O[1],F=(0,y.useState)([]),H=F[0],B=F[1],V=(0,y.useState)([null,null,null,null]),W=V[0],J=V[1];(0,y.useEffect)((function(){L(f),S(v)}),[f,v]);var K=I((0,_.D)(g.p1),1)[0],q=I((0,_.D)(g.HF),1)[0],z=(0,y.useState)(!1),M=z[0],Q=z[1];(0,y.useEffect)((function(){var n=[],e=!0,r=!1,i=void 0;try{for(var o,u=a[Symbol.iterator]();!(e=(o=u.next()).done);e=!0){var c=o.value;n.push(c.url)}}catch(d){r=!0,i=d}finally{try{e||null==u.return||u.return()}finally{if(r)throw i}}w(n);var s=[null,null,null,null];t.config.items.map((function(n){var t;null===p||void 0===p||null===(t=p.documents)||void 0===t||t.map((function(t){t.title===j+n.id&&(s[parseInt(t.title.slice(16+j.length,17+j.length))-1]=t.amount)}))})),J(s)}),[a,p,j]);var X=function(){var n=U(r().mark((function n(t,e){return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),Y=function(){var n=U(r().mark((function n(t,e){return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,K({variables:{id:p.id,documentId:t,url:e}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),G=function(){var n=U(r().mark((function n(){var t;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t=0;case 1:if(!(t<N)){n.next=10;break}if(!W[t]){n.next=7;break}return n.next=5,K({variables:{id:p.id,documentId:a[t].id,amount:W[t]}});case 5:n.sent,b.ZP.success("Amount Updated");case 7:t++,n.next=1;break;case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),nn=function(){var n=U(r().mark((function n(t,e){return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,q({variables:{id:t,status:e}});case 3:n.sent&&("APPROVED"===e?b.ZP.success("Document Status ".concat(e)):b.ZP.error("Document Status ".concat(e)),B((function(n){return R(n).concat([{id:t,status:e}])}))),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),b.ZP.error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t,e){return n.apply(this,arguments)}}(),tn=function(n){var t=!1;return null===H||void 0===H||H.map((function(e){n===e.id&&(t=e.status)})),t},en=function(){var n=U(r().mark((function n(){var e,i,o,u,c,s,d,l;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:Q(!0),n.prev=1,e=0;case 3:if(!(e<N)){n.next=32;break}if(!$[e]){n.next=29;break}return i=t.config.items[e].id,n.next=8,(0,P.Z)(D[e]);case 8:if(o=n.sent,u=a.find((function(n){if(n.title.toLowerCase()===i.toLowerCase())return!0})),(c=p.documents)||(c=[]),!u){n.next=22;break}return n.next=15,Y(u.id,o);case 15:s=n.sent,b.ZP.success("".concat(i," Uploaded")),(d=c.filter((function(n){return n.id!==document.id}))).push(s.data.updateDocument),c=d,n.next=27;break;case 22:return n.next=24,X(i,o);case 24:l=n.sent,b.ZP.success("".concat(i," Uploaded")),c=R(c).concat([l.data.createDocument]);case 27:E({},p).documents=c;case 29:e++,n.next=3;break;case 32:n.next=37;break;case 34:n.prev=34,n.t0=n.catch(1),console.log("error",n.t0);case 37:Q(!1);case 38:case"end":return n.stop()}}),n,null,[[1,34]])})));return function(){return n.apply(this,arguments)}}();return h?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(d.Z,{sx:{fontWeight:"bold",marginTop:5},children:[t.config.name," ",t.isOptional?"(Optional)":""]}),(0,i.jsxs)(l.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,i.jsx)(m.Z,{width:300,children:function(){for(var n=[],t=0;t<N;t++){var e=D[t];e&&n.push((0,i.jsx)("div",{style:{marginTop:15},children:(0,i.jsx)(A.TV,{children:(0,i.jsx)(A.HI,{src:"object"==typeof e?URL.createObjectURL(e):e,children:(0,i.jsx)("img",{src:"object"==typeof e?URL.createObjectURL(e):e,height:150,style:{marginLeft:"5px"}})})})}))}return 0==n.length?(0,i.jsx)(d.Z,{variant:"subtitle1",children:"No Document"}):n}()}),(0,i.jsx)(m.Z,{style:{},children:function(){for(var n=function(n){var t,d=R(W);e.push((0,i.jsxs)("div",{style:{height:160,marginTop:10},children:[(0,i.jsxs)("div",{style:{marginBottom:10},children:["Status:"," ",(0,i.jsx)("span",{style:{color:"APPROVED"===tn(a[n].id)?"green":"REJECTED"===tn(a[n].id)?"red":a[n]?"APPROVED"===a[n].status?"green":"REJECTED"===a[n].status&&"red":""},children:tn(a[n].id)||(null===(t=a[n])||void 0===t?void 0:t.status)})]}),(0,i.jsx)(o.Z,{sx:{display:"flex",justifyContent:"center",marginBottom:"10px"},children:(0,i.jsxs)(u.ZP,{children:[(0,i.jsx)(c.Z,{id:"outlined",label:"Amount*",value:W[n],variant:"outlined",type:"number",onChange:function(t){t.target.value?d[n]=parseInt(t.target.value):d[n]=null,J(d)}}),(0,i.jsx)(s.Z,{onClick:function(){return nn(a[n].id,"APPROVED")},variant:"outlined",color:"success",sx:{ml:2},children:"Approve"}),(0,i.jsx)(s.Z,{onClick:function(){return nn(a[n].id,"REJECTED")},variant:"outlined",color:"error",sx:{ml:2},children:"Reject"})]})}),(0,i.jsxs)(s.Z,{fullWidth:!0,style:{marginTop:"10px"},component:"label",children:["Choose ",r[n].name,(0,i.jsx)("input",{type:"file",accept:"image/*",hidden:!0,onChange:function(t){if(t.target.files.length>0){var e=R(D);e[n]=t.target.files[0],w(e);var a=R($);a[n]=!0,T(a)}}})]})]}))},e=[],r=t.config.items,d=0;d<N;d++)n(d);return e}()}),(0,i.jsx)(m.Z,{children:(0,i.jsx)(Z.Z,{loading:M,variant:"contained",onClick:function(){en(),G()},children:"Update"})})]},t.config.name)]}):(0,i.jsxs)(i.Fragment,{children:[(null===p||void 0===p?void 0:p.name)?p.name+" is ":p.rm_id+" is ","not Enrolled in this Project"]})};t.default=function(){var n=(0,j.I0)(),t=(0,j.v9)((function(n){return n.foundUser.foundUser})),e=(0,j.v9)((function(n){return n.allUsers.allTheUsers})),a=(0,y.useState)(0),l=a[0],m=a[1],x=(0,y.useState)("hajipur_"),Z=x[0],w=x[1],C=(0,y.useState)(!1),$=(C[0],C[1]),R=(0,y.useState)(!1),T=(R[0],R[1],(0,y.useState)("")),L=T[0],F=T[1],H=(0,y.useState)(!1),B=(H[0],H[1],(0,y.useState)()),V=B[0],W=B[1],J=(0,y.useState)(),K=J[0],q=J[1],z=(0,y.useState)(!1),M=z[0],Q=z[1],X=(0,y.useState)(!1),Y=X[0],G=X[1],nn=I((0,_.D)(g.p1),1)[0],tn=I((0,_.D)(g.HF),1)[0],en=function(n){var t=(0,j.v9)((function(n){return n.foundUser.foundUser})),e=[];if(t&&t.documents){var a=!0,r=!1,i=void 0;try{for(var o,u=function(n,a){var r,i=a.value,o=null===t||void 0===t||null===(r=t.documents)||void 0===r?void 0:r.find((function(n){if(n.title.toLowerCase()===Z+i.id.toLowerCase())return!0}));o&&e.push(o)},c=n[Symbol.iterator]();!(a=(o=c.next()).done);a=!0)u(0,o)}catch(s){r=!0,i=s}finally{try{a||null==c.return||c.return()}finally{if(r)throw i}}}return e},an=function(){var n=U(r().mark((function n(){var e,a;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a=0,null===t||void 0===t||null===(e=t.documents)||void 0===e||e.map((function(n){n.title.slice(0,16+Z.length)===Z+O[0].config.items[0].id.slice(0,-1)&&(a+=1)})),m(a);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();(0,y.useEffect)((function(){an()}),[Z]);var rn=function(n,e){var a,r=t,i=[];return null===t||void 0===t||null===(a=t.documents)||void 0===a||a.map((function(t){t.id===n?i.push(E({},t,{url:e})):i.push(t)})),E({},r,{documents:i})},on=function(n,e){var a,r=t,i=[];return null===t||void 0===t||null===(a=t.documents)||void 0===a||a.map((function(t){t.id===n?i.push(E({},t,{amount:e})):i.push(t)})),E({},r,{documents:i})},un=function(n,e){var a,r=t,i=[];return null===t||void 0===t||null===(a=t.documents)||void 0===a||a.map((function(t){t.id===n?i.push(E({},t,{status:e})):i.push(t)})),E({},r,{documents:i})},cn=function(){var t=U(r().mark((function t(a,i){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,tn({variables:{id:a,status:i}});case 2:t.sent,n((0,S.Hn)(un(K.id,i))),n((0,k.UF)((0,D.Z)(e,un(K.id,i))));case 5:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),sn=function(){var a=U(r().mark((function a(){return r().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,nn({variables:{id:t.id,documentId:K.id,amount:parseInt(V)}});case 3:a.sent,n((0,S.Hn)(on(K.id,parseInt(V)))),n((0,k.UF)((0,D.Z)(e,on(K.id,parseInt(V))))),b.ZP.success("Amount Updated"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),b.ZP.error(a.t0);case 12:$(!1);case 13:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(){return a.apply(this,arguments)}}(),dn=function(){var a=U(r().mark((function a(){var i;return r().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if($(!0),a.prev=1,i="",!M){a.next=15;break}return a.prev=4,a.next=7,(0,P.Z)(L);case 7:i=a.sent,a.next=13;break;case 10:a.prev=10,a.t0=a.catch(4),i="lorem";case 13:a.next=16;break;case 15:i=L;case 16:if(!K){a.next=23;break}return a.next=19,nn({variables:{id:t.id,documentId:K.id,url:i}});case 19:n((0,S.Hn)(rn(K.id,i))),n((0,k.UF)((0,D.Z)(e,rn(K.id,i)))),a.next=24;break;case 23:console.log("we need access token of user to create any doc");case 24:b.ZP.success("Payment Slip Updated "),a.next=30;break;case 27:a.prev=27,a.t1=a.catch(1),b.ZP.error(a.t1);case 30:$(!1);case 31:case"end":return a.stop()}}),a,null,[[1,27],[4,10]])})));return function(){return a.apply(this,arguments)}}();(0,y.useEffect)((function(){var n,e;(q(null),F(null),W(null),t&&t.documents&&(null===t||void 0===t||null===(n=t.documents)||void 0===n?void 0:n.length)>0)&&(null===t||void 0===t||null===(e=t.documents)||void 0===e||e.find((function(n){n.title.toLowerCase()===Z+O[0].config.id&&(q(n),F(n.url),W(n.amount))})))}),[t,Z]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z,{width:150,children:(0,i.jsxs)(p.Z,{variant:"outlined",fullWidth:!0,children:[(0,i.jsx)(f.Z,{children:"Project"}),(0,i.jsx)(v.Z,{value:Z,onChange:function(n){return w(n.target.value)},label:"Project",autoWidth:!0,children:[{id:"hajipur_",name:"Hajipur"},{id:"agra_",name:"Agra"}].map((function(n){return(0,i.jsx)(h.Z,{value:n.id,children:n.name},n.id)}))})]})}),L?(0,i.jsx)(A.TV,{children:(0,i.jsx)(A.HI,{src:"object"==typeof L?URL.createObjectURL(L):L,children:(0,i.jsx)("img",{style:{marginTop:"10px",cursor:"pointer"},src:"object"==typeof L?URL.createObjectURL(L):L,width:200})})}):null,K&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(d.Z,{variant:"h4",sx:{my:2},children:["Status :"," ",(0,i.jsx)("span",{style:{color:K?"APPROVED"===K.status?"green":"REJECTED"===K.status&&"red":""},children:K&&K.status})]}),(0,i.jsx)(o.Z,{children:(0,i.jsxs)(u.ZP,{children:[(0,i.jsx)(s.Z,{onClick:function(){return cn(K.id,"APPROVED")},variant:"outlined",color:"success",children:"Approve"}),(0,i.jsx)(s.Z,{onClick:function(){return cn(K.id,"REJECTED")},variant:"outlined",color:"error",sx:{ml:2},children:"Reject"})]})})]}),L&&(0,i.jsxs)(u.ZP,{container:!0,p:2,mt:2,pl:0,spacing:2,children:[(0,i.jsx)(c.Z,{id:"outlined",label:"Amount*",value:V,variant:"outlined",type:"number",onChange:function(n){W(n.target.value)}}),(0,i.jsx)(u.ZP,{item:!0,children:(0,i.jsx)(s.Z,{fullWidth:!0,variant:"contained",component:"label",onClick:function(){sn()},children:"Submit Amount"})})]}),(0,i.jsxs)(u.ZP,{container:!0,p:2,pl:0,spacing:2,children:[K&&(0,i.jsx)(u.ZP,{item:!0,xs:4,children:(0,i.jsxs)(s.Z,{variant:"contained",component:"label",children:["Select Payment Slip",(0,i.jsx)("input",{type:"file",accept:"image/*",hidden:!0,onChange:function(n){n.target.files.length>0&&(G(!0),F(n.target.files[0]),Q(!0))}})]})}),K&&(0,i.jsx)(u.ZP,{item:!0,xs:2,children:(0,i.jsx)(s.Z,{fullWidth:!0,variant:"contained",disabled:!Y,onClick:function(){dn()},children:"Submit"})}),(0,i.jsx)(b.x7,{position:"bottom-center",reverseOrder:!1})]}),(0,i.jsx)(i.Fragment,{children:O.map((function(n,e){return(0,i.jsx)(N,{data:n,rowNo:l,isPaymentDocument:K,user:t,getProjectName:Z,documents:en(n.config.items)},e)}))})]})}},77502:function(n,t,e){e.d(t,{Fm:function(){return u},HF:function(){return o},QX:function(){return i},p1:function(){return r}});var a=e(81621),r=(0,a.Ps)("\nmutation updateDataByAdmin (\n$id: String!,\n$name: String,\n$father_or_husband_name: String,\n$date_of_birth: String,\n$mobile_number: String,\n$alternate_mobile_number: String,\n$email: String,\n$demat_account: String,\n$nomineeName: String,\n$nomineeRelationship: String,\n$documentId: String,\n$url: String,\n$amount: Int,\n){updateDataByAdmin(\n  data: \n  { \n      id: $id\n      name: $name\n      father_or_husband_name: $father_or_husband_name\n      date_of_birth:$date_of_birth\n      mobile_number:$mobile_number\n      alternate_mobile_number:$alternate_mobile_number\n      email:$email\n      demat_account:$demat_account\n      nomineeName: $nomineeName\n      nomineeRelationship: $nomineeRelationship\n      documentId: $documentId\n      url: $url\n      amount: $amount\n  })\n  {\n    name\n    documents{\n      id\n      title\n      url\n      amount\n    }\n  }\n}"),i=(0,a.Ps)("\nmutation updateStatus (\n$id: String!,\n$kyc: KYC!,\n){updateStatus(\n  data: \n  { \n      id: $id\n      kyc: $kyc\n  })\n  {\n    kyc\n  }\n}"),o=(0,a.Ps)("\nmutation updateDocumentStatusByAdmin (\n$id: String!,\n$status: STATUS!,\n){updateDocumentStatusByAdmin(\n  data: \n  { \n      id: $id\n      status: $status\n  })\n  {\n    id\n    status\n  }\n}"),u=(0,a.Ps)("\nquery getAllKycHandler {\n  getAllKycHandler{\n    userId\n    handlerId\n    updatedKycStatus\n  }\n}\n")},42480:function(n,t){t.Z={aadhar:{id:"aadhar",name:"Aadhar Card",status:"",items:[{id:"aadhar_front",name:"AADHAR Card Front",status:""},{id:"aadhar_back",name:"AADHAR Card Back",status:""}]},pancard:{id:"pancard",name:"Pancard",status:"",items:[{id:"pancard",name:"Pan Card",status:""}]},avatar:{id:"photo",name:"Photo",status:"",items:[{id:"avatar",name:"Passport Size Photo",status:""}]},voterId:{id:"voterId",name:"Voter Id Card",status:"Not Uploaded",items:[{id:"voterid_front",name:"Voter Id Front",status:""},{id:"voterid_back",name:"Voted Id Card Back",status:""}]},passbook:{name:"Passbook  or Bank Statement",id:"passbook",status:"Not Uploaded",items:[{id:"passbook",name:"Bank Passbook Or Bank Statement",status:"Not Uploaded"}]},payment_proof:{name:"Payment Proof",id:"payment_proof",status:"Not Uploaded",items:[{id:"payment_proof",name:"Payment Proof"}]},agency_payment_proof:{name:"Agency Payment Proof",id:"agency_payment_proof",status:"Not Uploaded",items:[{id:"agency_payment_proof",name:"Agency Payment Proof"}]},additional_documents:{name:"Additional Payment Document",id:"additional_payment_doc",items:[{id:"additional_payment_doc2",name:"Payment Document"},{id:"additional_payment_doc3",name:"Payment Document"},{id:"additional_payment_doc4",name:"Payment Document"},{id:"additional_payment_doc5",name:"Payment Document"}]},to_advance_payment_proof:{name:"To Advance Payment Proof",id:"to_advance_payment_proof",status:"Not Uploaded",items:[{id:"to_advance_payment_proof",name:"To Advance Payment Proof"}]},to_advance_additional_documents:{name:"To Advance Additional Payment Document",id:"to_advance_additional_payment_doc",items:[{id:"to_advance_additional_payment_doc2",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc3",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc4",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc5",name:"To Advance Payment Document"}]},driving_license:{name:"Driving License",id:"driving_license",status:"Not Uploaded",items:[{id:"driving_license_front",name:"Driving License Front",status:""},{id:"driving_license_back",name:"Driving License Back",status:""}]},nominee_aadhar:{name:"Nominee Aadhar",id:"nominee_aadhar",status:"Not Uploaded",items:[{id:"nominee_aadhar_front",name:"AADHAR Card Front",status:""},{id:"nominee_aadhar_back",name:"AADHAR Card Back",status:""}]},demat_document:{name:"Demat Document",id:"demat_document",status:"Not Uploaded",items:[{id:"demat_document",name:"Demat Document",status:""}]},payment_additional_documents:{name:"Additional Payment Document",id:"additional_payment_doc",items:[{id:"additional_payment_doc2",name:"Payment Document"},{id:"additional_payment_doc3",name:"Payment Document"},{id:"additional_payment_doc4",name:"Payment Document"},{id:"additional_payment_doc5",name:"Payment Document"}]},project_payment:{name:"Project Payment",id:"project_payment",items:[{id:"project_payment_1",name:"Payment Document"},{id:"project_payment_2",name:"Payment Document"},{id:"project_payment_3",name:"Payment Document"},{id:"project_payment_4",name:"Payment Document"},{id:"project_payment_5",name:"Payment Document"}]}}},85109:function(n,t){t.Z=function(n,t){var e=[];return n.map((function(n){t.id===n.id?e.push(t):e.push(n)})),e}},55511:function(n,t,e){var a=e(34051),r=e.n(a),i=e(7155),o=e(6154);function u(n,t,e,a,r,i,o){try{var u=n[i](o),c=u.value}catch(s){return void e(s)}u.done?t(c):Promise.resolve(c).then(a,r)}var c=function(){var n,t=(n=r().mark((function n(t){var e,a;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(e=new FormData).append("document",t),n.next=4,o.Z.post("".concat(i.Z.API_URL,"/documents/upload"),e,{headers:{"Content-Type":"multipart/form-data"}});case 4:return a=n.sent,n.abrupt("return",a.data.url);case 6:case"end":return n.stop()}}),n)})),function(){var t=this,e=arguments;return new Promise((function(a,r){var i=n.apply(t,e);function o(n){u(i,a,r,o,c,"next",n)}function c(n){u(i,a,r,o,c,"throw",n)}o(void 0)}))});return function(n){return t.apply(this,arguments)}}();t.Z=c}}]);