(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6716],{52689:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/agency/Tabs/Payment",function(){return e(51248)}])},51248:function(n,t,e){"use strict";e.r(t),e.d(t,{rows:function(){return T}});var a=e(34051),r=e.n(a),o=e(85893),i=e(87357),c=e(86886),u=e(50135),s=e(11057),d=e(15861),l=e(53816),m=e(53252),p=e(67294),f=e(50319),v=e(42480),y=e(86501),h=e(77502),_=e(55511),x=e(9473),b=e(61636),P=e(99099),g=e(85109),j=e(71455),k=e(8987);function w(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,a=new Array(t);e<t;e++)a[e]=n[e];return a}function D(n,t,e,a,r,o,i){try{var c=n[o](i),u=c.value}catch(s){return void e(s)}c.done?t(u):Promise.resolve(u).then(a,r)}function A(n){return function(){var t=this,e=arguments;return new Promise((function(a,r){var o=n.apply(t,e);function i(n){D(o,a,r,i,c,"next",n)}function c(n){D(o,a,r,i,c,"throw",n)}i(void 0)}))}}function Z(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function S(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},a=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),a.forEach((function(t){Z(n,t,e[t])}))}return n}function C(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var a,r,o=[],i=!0,c=!1;try{for(e=e.call(n);!(i=(a=e.next()).done)&&(o.push(a.value),!t||o.length!==t);i=!0);}catch(u){c=!0,r=u}finally{try{i||null==e.return||e.return()}finally{if(c)throw r}}return o}}(n,t)||U(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(n){return function(n){if(Array.isArray(n))return w(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||U(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(n,t){if(n){if("string"===typeof n)return w(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?w(n,t):void 0}}var T=[{config:v.Z.additional_documents}],O=function(n){var t=n.data,e=n.documents,a=void 0===e?[]:e,v=n.user,x=n.rowNo,b=(0,p.useState)([]),P=b[0],g=b[1],w=(0,p.useState)([]),D=w[0],Z=w[1],U=(0,p.useState)(0),T=U[0],O=U[1],R=(0,p.useState)([]),I=R[0],N=R[1],L=(0,p.useState)([null,null,null,null]),F=L[0],H=L[1];(0,p.useEffect)((function(){O(x)}),[x]);var V=C((0,f.D)(h.p1),1)[0],B=C((0,f.D)(h.HF),1)[0],J=(0,p.useState)(!1),W=J[0],X=J[1];(0,p.useEffect)((function(){var n=[],e=!0,r=!1,o=void 0;try{for(var i,c=a[Symbol.iterator]();!(e=(i=c.next()).done);e=!0){var u=i.value;n.push(u.url)}}catch(d){r=!0,o=d}finally{try{e||null==c.return||c.return()}finally{if(r)throw o}}g(n);var s=[null,null,null,null];t.config.items.map((function(n){var t;null===v||void 0===v||null===(t=v.documents)||void 0===t||t.map((function(t){t.title===n.id&&(s[parseInt(n.id.slice(22,24))-2]=t.amount)}))})),H(s)}),[a,v]);var z=function(){var n=A(r().mark((function n(t,e){return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),M=function(){var n=A(r().mark((function n(t,e){return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,V({variables:{id:null===v||void 0===v?void 0:v.id,documentId:t,url:e}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),$=function(n){var t,e;return null===v||void 0===v||null===(t=v.documents)||void 0===t||t.map((function(t){t.title===n&&(e=t.id)})),e},q=function(){var n=A(r().mark((function n(){var e,a;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e=0;case 1:if(!(e<T)){n.next=11;break}if(a=t.config.items[e].id,!F[e]){n.next=8;break}return n.next=6,V({variables:{id:null===v||void 0===v?void 0:v.id,documentId:$(a),amount:F[e]}});case 6:n.sent,y.ZP.success("Amount Updated");case 8:e++,n.next=1;break;case 11:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),G=function(){var n=A(r().mark((function n(t,e){return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,B({variables:{id:t,status:e}});case 3:n.sent&&("APPROVED"===e?y.ZP.success("Document Status ".concat(e)):y.ZP.error("Document Status ".concat(e)),N((function(n){return E(n).concat([{id:t,status:e}])}))),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),y.ZP.error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t,e){return n.apply(this,arguments)}}(),K=function(n){var t=!1;return null===I||void 0===I||I.map((function(e){n===e.id&&(t=e.status)})),t},Q=function(){var n=A(r().mark((function n(){var e,o,i,c,u,s,d,l;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:X(!0),n.prev=1,e=0;case 3:if(!(e<T)){n.next=32;break}if(!D[e]){n.next=29;break}return o=t.config.items[e].id,n.next=8,(0,_.Z)(P[e]);case 8:if(i=n.sent,c=a.find((function(n){if(n.title.toLowerCase()===o.toLowerCase())return!0})),(u=null===v||void 0===v?void 0:v.documents)||(u=[]),!c){n.next=22;break}return n.next=15,M(c.id,i);case 15:s=n.sent,y.ZP.success("".concat(o," Uploaded")),(d=u.filter((function(n){return n.id!==document.id}))).push(s.data.updateDocument),u=d,n.next=27;break;case 22:return n.next=24,z(o,i);case 24:l=n.sent,y.ZP.success("".concat(o," Uploaded")),u=E(u).concat([l.data.createDocument]);case 27:S({},v).documents=u;case 29:e++,n.next=3;break;case 32:n.next=37;break;case 34:n.prev=34,n.t0=n.catch(1),console.log("error",n.t0);case 37:X(!1);case 38:case"end":return n.stop()}}),n,null,[[1,34]])})));return function(){return n.apply(this,arguments)}}();return(0,o.jsxs)(o.Fragment,{children:[a[0]&&(0,o.jsxs)(d.Z,{sx:{fontWeight:"bold",marginTop:5},children:[t.config.name," ",t.isOptional?"(Optional)":""]}),a[0]&&(0,o.jsxs)(l.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,o.jsx)(m.Z,{width:300,children:function(){for(var n=[],t=0;t<T;t++){var e=P[t];e&&n.push((0,o.jsx)("div",{style:{marginTop:15},children:(0,o.jsx)(j.TV,{children:(0,o.jsx)(j.HI,{src:"object"==typeof e?URL.createObjectURL(e):e,children:(0,o.jsx)("img",{src:"object"==typeof e?URL.createObjectURL(e):e,height:150,style:{marginLeft:"5px"}})})})}))}return 0==n.length?(0,o.jsx)(d.Z,{variant:"subtitle1",children:"No Document"}):n}()}),(0,o.jsx)(m.Z,{style:{},children:function(){for(var n=function(n){var t,d=E(F);e.push((0,o.jsxs)("div",{style:{height:160,marginTop:10},children:[(0,o.jsxs)("div",{style:{marginBottom:10},children:["Status:"," ",(0,o.jsx)("span",{style:{color:"APPROVED"===K(a[n].id)?"green":"REJECTED"===K(a[n].id)?"red":a[n]?"APPROVED"===a[n].status?"green":"REJECTED"===a[n].status&&"red":""},children:K(a[n].id)||(null===(t=a[n])||void 0===t?void 0:t.status)})]}),(0,o.jsx)(i.Z,{sx:{display:"flex",justifyContent:"center",marginBottom:"10px"},children:(0,o.jsxs)(c.ZP,{children:[(0,o.jsx)(u.Z,{id:"outlined",label:"Amount*",value:F[n],variant:"outlined",type:"number",onChange:function(t){t.target.value?d[n]=parseInt(t.target.value):d[n]=null,H(d)}}),(0,o.jsx)(s.Z,{onClick:function(){G(a[n].id,"APPROVED")},variant:"outlined",color:"success",sx:{ml:2},children:"Approve"}),(0,o.jsx)(s.Z,{onClick:function(){return G(a[n].id,"REJECTED")},variant:"outlined",color:"error",sx:{ml:2},children:"Reject"})]})}),(0,o.jsxs)(s.Z,{fullWidth:!0,style:{marginTop:"10px"},component:"label",children:["Choose ",r[n].name,(0,o.jsx)("input",{type:"file",accept:"image/*",hidden:!0,onChange:function(t){if(t.target.files.length>0){var e=E(P);e[n]=t.target.files[0],g(e);var a=E(D);a[n]=!0,Z(a)}}})]})]}))},e=[],r=t.config.items,d=0;d<T;d++)n(d);return e}()}),(0,o.jsx)(m.Z,{children:(0,o.jsx)(k.Z,{loading:W,variant:"contained",onClick:function(){Q(),q()},children:"Update"})})]},t.config.name)]})},R=function(n){var t=(0,x.v9)((function(n){return n.foundUser.foundUser})),e=[];if(t&&(null===t||void 0===t?void 0:t.documents)){var a=!0,r=!1,o=void 0;try{for(var i,c=function(n,a){var r,o=a.value,i=null===t||void 0===t||null===(r=t.documents)||void 0===r?void 0:r.find((function(n){if(n.title.toLowerCase()===o.id.toLowerCase())return!0}));i&&e.push(i)},u=n[Symbol.iterator]();!(a=(i=u.next()).done);a=!0)c(0,i)}catch(s){r=!0,o=s}finally{try{a||null==u.return||u.return()}finally{if(r)throw o}}}return e};t.default=function(){var n=(0,x.I0)(),t=(0,x.v9)((function(n){return n.foundUser.foundUser})),e=(0,x.v9)((function(n){return n.allUsers.allTheUsers})),a=(0,p.useState)(0),l=a[0],m=a[1],k=(0,p.useState)(!1),w=(k[0],k[1]),D=(0,p.useState)(!1),Z=(D[0],D[1],(0,p.useState)("")),E=Z[0],U=Z[1],I=(0,p.useState)(!1),N=(I[0],I[1],(0,p.useState)()),L=N[0],F=N[1],H=(0,p.useState)(),V=H[0],B=H[1],J=(0,p.useState)(!1),W=J[0],X=J[1],z=(0,p.useState)(!1),M=z[0],$=z[1],q=C((0,f.D)(h.p1),1)[0],G=C((0,f.D)(h.HF),1)[0],K=function(){var n=A(r().mark((function n(){var e,a;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a=0,null===t||void 0===t||null===(e=t.documents)||void 0===e||e.map((function(n){"additional_payment_doc"===n.title.slice(0,22)&&(a+=1)})),m(a);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();(0,p.useEffect)((function(){K()}),[]);var Q=function(n,e){var a,r=t,o=[];return null===t||void 0===t||null===(a=t.documents)||void 0===a||a.map((function(t){t.id===n?o.push(S({},t,{url:e})):o.push(t)})),S({},r,{documents:o})},Y=function(n,e){var a,r=t,o=[];return null===t||void 0===t||null===(a=t.documents)||void 0===a||a.map((function(t){t.id===n?o.push(S({},t,{amount:e})):o.push(t)})),S({},r,{documents:o})},nn=function(n,e){var a,r=t,o=[];return null===t||void 0===t||null===(a=t.documents)||void 0===a||a.map((function(t){t.id===n?o.push(S({},t,{status:e})):o.push(t)})),S({},r,{documents:o})},tn=function(){var t=A(r().mark((function t(a,o){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G({variables:{id:a,status:o}});case 2:t.sent,n((0,b.Hn)(nn(V.id,o))),n((0,P.UF)((0,g.Z)(e,nn(V.id,o))));case 5:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),en=function(){var a=A(r().mark((function a(){return r().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,q({variables:{id:null===t||void 0===t?void 0:t.id,documentId:V.id,amount:parseInt(L)}});case 3:a.sent,n((0,b.Hn)(Y(V.id,parseInt(L)))),n((0,P.UF)((0,g.Z)(e,Y(V.id,parseInt(L))))),y.ZP.success("Amount Updated"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),y.ZP.error(a.t0);case 12:w(!1);case 13:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(){return a.apply(this,arguments)}}(),an=function(){var a=A(r().mark((function a(){var o;return r().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(w(!0),a.prev=1,o="",!W){a.next=15;break}return a.prev=4,a.next=7,(0,_.Z)(E);case 7:o=a.sent,a.next=13;break;case 10:a.prev=10,a.t0=a.catch(4),y.ZP.error("Error, Try Again!");case 13:a.next=16;break;case 15:o=E;case 16:if(!V){a.next=23;break}return a.next=19,q({variables:{id:null===t||void 0===t?void 0:t.id,documentId:V.id,url:o}});case 19:n((0,b.Hn)(Q(V.id,o))),n((0,P.UF)((0,g.Z)(e,Q(V.id,o)))),a.next=24;break;case 23:console.log("we need access token of user to create any doc");case 24:y.ZP.success("Payment Slip Updated "),a.next=30;break;case 27:a.prev=27,a.t1=a.catch(1),y.ZP.error(a.t1);case 30:w(!1);case 31:case"end":return a.stop()}}),a,null,[[1,27],[4,10]])})));return function(){return a.apply(this,arguments)}}();return(0,p.useEffect)((function(){var n,e;t&&(null===t||void 0===t?void 0:t.documents)&&(null===t||void 0===t||null===(n=t.documents)||void 0===n?void 0:n.length)>0&&(null===t||void 0===t||null===(e=t.documents)||void 0===e||e.find((function(n){n.title.toLowerCase()===v.Z.payment_proof.items[0].id&&(B(n),U(n.url),F(n.amount))})))}),[t]),(0,o.jsxs)(o.Fragment,{children:[E?(0,o.jsx)(j.TV,{children:(0,o.jsx)(j.HI,{src:"object"==typeof E?URL.createObjectURL(E):E,children:(0,o.jsx)("img",{style:{marginTop:"10px",cursor:"pointer"},src:"object"==typeof E?URL.createObjectURL(E):E,width:200})})}):null,V&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(d.Z,{variant:"h4",sx:{my:2},children:["Status :"," ",(0,o.jsx)("span",{style:{color:V?"APPROVED"===V.status?"green":"REJECTED"===V.status&&"red":""},children:V&&V.status})]}),(0,o.jsx)(i.Z,{children:(0,o.jsxs)(c.ZP,{children:[(0,o.jsx)(s.Z,{onClick:function(){return tn(V.id,"APPROVED")},variant:"outlined",color:"success",children:"Approve"}),(0,o.jsx)(s.Z,{onClick:function(){return tn(V.id,"REJECTED")},variant:"outlined",color:"error",sx:{ml:2},children:"Reject"})]})})]}),E&&(0,o.jsxs)(c.ZP,{container:!0,p:2,mt:2,pl:0,spacing:2,children:[(0,o.jsx)(u.Z,{id:"outlined",label:"Amount*",value:L,variant:"outlined",type:"number",onChange:function(n){F(n.target.value)}}),(0,o.jsx)(c.ZP,{item:!0,children:(0,o.jsx)(s.Z,{fullWidth:!0,variant:"contained",component:"label",onClick:function(){en()},children:"Submit Amount"})})]}),(0,o.jsxs)(c.ZP,{container:!0,p:2,pl:0,spacing:2,children:[V&&(0,o.jsx)(c.ZP,{item:!0,xs:12,sm:4,children:(0,o.jsxs)(s.Z,{variant:"contained",component:"label",children:["Select Payment Slip",(0,o.jsx)("input",{type:"file",accept:"image/*",hidden:!0,onChange:function(n){n.target.files.length>0&&($(!0),U(n.target.files[0]),X(!0))}})]})}),E&&(0,o.jsx)(c.ZP,{item:!0,xs:12,sm:4,children:(0,o.jsx)(s.Z,{fullWidth:!0,variant:"contained",disabled:!M,onClick:function(){an()},children:"Submit"})}),(0,o.jsx)(y.x7,{position:"bottom-center",reverseOrder:!1})]}),(0,o.jsx)(o.Fragment,{children:T.map((function(n,e){return(0,o.jsx)(O,{data:n,rowNo:l,user:t,documents:R(n.config.items)},e)}))})]})}},42480:function(n,t){"use strict";t.Z={aadhar:{id:"aadhar",name:"Aadhar Card",status:"",items:[{id:"aadhar_front",name:"AADHAR Card Front",status:""},{id:"aadhar_back",name:"AADHAR Card Back",status:""}]},pancard:{id:"pancard",name:"Pancard",status:"",items:[{id:"pancard",name:"Pan Card",status:""}]},avatar:{id:"photo",name:"Photo",status:"",items:[{id:"avatar",name:"Passport Size Photo",status:""}]},voterId:{id:"voterId",name:"Voter Id Card",status:"Not Uploaded",items:[{id:"voterid_front",name:"Voter Id Front",status:""},{id:"voterid_back",name:"Voted Id Card Back",status:""}]},passbook:{name:"Passbook  or Bank Statement",id:"passbook",status:"Not Uploaded",items:[{id:"passbook",name:"Bank Passbook Or Bank Statement",status:"Not Uploaded"}]},payment_proof:{name:"Payment Proof",id:"payment_proof",status:"Not Uploaded",items:[{id:"payment_proof",name:"Payment Proof"}]},agency_payment_proof:{name:"Agency Payment Proof",id:"agency_payment_proof",status:"Not Uploaded",items:[{id:"agency_payment_proof",name:"Agency Payment Proof"}]},additional_documents:{name:"Additional Payment Document",id:"additional_payment_doc",items:[{id:"additional_payment_doc2",name:"Payment Document"},{id:"additional_payment_doc3",name:"Payment Document"},{id:"additional_payment_doc4",name:"Payment Document"},{id:"additional_payment_doc5",name:"Payment Document"}]},to_advance_payment_proof:{name:"To Advance Payment Proof",id:"to_advance_payment_proof",status:"Not Uploaded",items:[{id:"to_advance_payment_proof",name:"To Advance Payment Proof"}]},to_advance_additional_documents:{name:"To Advance Additional Payment Document",id:"to_advance_additional_payment_doc",items:[{id:"to_advance_additional_payment_doc2",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc3",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc4",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc5",name:"To Advance Payment Document"}]},driving_license:{name:"Driving License",id:"driving_license",status:"Not Uploaded",items:[{id:"driving_license_front",name:"Driving License Front",status:""},{id:"driving_license_back",name:"Driving License Back",status:""}]},nominee_aadhar:{name:"Nominee Aadhar",id:"nominee_aadhar",status:"Not Uploaded",items:[{id:"nominee_aadhar_front",name:"AADHAR Card Front",status:""},{id:"nominee_aadhar_back",name:"AADHAR Card Back",status:""}]},demat_document:{name:"Demat Document",id:"demat_document",status:"Not Uploaded",items:[{id:"demat_document",name:"Demat Document",status:""}]},payment_additional_documents:{name:"Additional Payment Document",id:"additional_payment_doc",items:[{id:"additional_payment_doc2",name:"Payment Document"},{id:"additional_payment_doc3",name:"Payment Document"},{id:"additional_payment_doc4",name:"Payment Document"},{id:"additional_payment_doc5",name:"Payment Document"}]},project_payment:{name:"Project Payment",id:"project_payment",items:[{id:"project_payment_1",name:"Payment Document"},{id:"project_payment_2",name:"Payment Document"},{id:"project_payment_3",name:"Payment Document"},{id:"project_payment_4",name:"Payment Document"},{id:"project_payment_5",name:"Payment Document"}]}}},85109:function(n,t){"use strict";t.Z=function(n,t){var e=[];return n.map((function(n){t.id===(null===n||void 0===n?void 0:n.id)?e.push(t):e.push(n)})),e}},55511:function(n,t,e){"use strict";var a=e(34051),r=e.n(a),o=e(6154);function i(n,t,e,a,r,o,i){try{var c=n[o](i),u=c.value}catch(s){return void e(s)}c.done?t(u):Promise.resolve(u).then(a,r)}var c=function(){var n,t=(n=r().mark((function n(t){var e,a;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(e=new FormData).append("document",t),n.next=4,o.Z.post("".concat("https://kycramaerabackend.ramaera.com","/documents/upload"),e,{headers:{"Content-Type":"multipart/form-data"}});case 4:return a=n.sent,n.abrupt("return",a.data.url);case 6:case"end":return n.stop()}}),n)})),function(){var t=this,e=arguments;return new Promise((function(a,r){var o=n.apply(t,e);function c(n){i(o,a,r,c,u,"next",n)}function u(n){i(o,a,r,c,u,"throw",n)}c(void 0)}))});return function(n){return t.apply(this,arguments)}}();t.Z=c}},function(n){n.O(0,[5370,9990,4789,2052,6180,1880,6549,7058,788,8549,8584,6154,4161,9774,2888,179],(function(){return t=52689,n(n.s=t);var t}));var t=n.O();_N_E=t}]);