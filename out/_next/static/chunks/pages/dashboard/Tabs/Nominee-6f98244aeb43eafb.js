(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4229],{58506:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/Tabs/Nominee",function(){return n(32571)}])},32571:function(e,t,n){"use strict";n.r(t);var a=n(34051),r=n.n(a),o=n(85893),i=n(45477),s=n(42480),d=n(46230),c=n(20427),u=n(55511),m=n(50319),l=n(31812),p=n(15861),f=n(86886),y=n(50135),v=n(11057),_=n(87357),h=(n(19662),n(37070),n(93491),n(67294)),P=n(86501);function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function x(e,t,n,a,r,o,i){try{var s=e[o](i),d=s.value}catch(c){return void n(c)}s.done?t(d):Promise.resolve(d).then(a,r)}function g(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var o=e.apply(t,n);function i(e){x(o,a,r,i,s,"next",e)}function s(e){x(o,a,r,i,s,"throw",e)}i(void 0)}))}}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){A(e,t,n[t])}))}return e}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,o=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(o.push(a.value),!t||o.length!==t);i=!0);}catch(d){s=!0,r=d}finally{try{i||null==n.return||n.return()}finally{if(s)throw r}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=function(){var e=(0,d.T)(),t=(0,d.C)((function(e){var t;return null===(t=e.user)||void 0===t?void 0:t.data})),n=(0,h.useState)(""),a=n[0],b=n[1],x=(0,h.useState)(""),A=x[0],k=x[1],w=(0,h.useState)(!1),Z=w[0],E=w[1],O=j((0,m.D)(i.Is),1)[0],S=j((0,m.D)(i.yW),1)[0],N=j((0,m.D)(i.su),1)[0],C=(0,h.useState)(!1),R=C[0],U=C[1],T=(0,h.useState)(!1),V=T[0],F=T[1],B=(0,h.useState)(null),I=B[0],L=B[1],H=(0,h.useState)(null),W=H[0],J=H[1],X=(0,h.useState)(!1),z=X[0],K=X[1],M=(0,h.useState)(),$=M[0],q=M[1],G=(0,h.useState)(),Q=G[0],Y=G[1],ee=function(e,n){var a,r=t,o=[];return null===t||void 0===t||null===(a=t.documents)||void 0===a||a.map((function(t){t.id===e?o.push(D({},t,{url:n})):o.push(t)})),D({},r,{documents:o})},te=function(){var t=g(r().mark((function t(n,a,o){var i;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S({variables:{id:n,title:o,url:a}});case 2:return i=t.sent,e((0,c.j2)(ee(n,a))),t.abrupt("return",i);case 5:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}(),ne=function(){var e=g(r().mark((function e(t,n){var a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O({variables:{title:n,url:t}});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ae=function(){var e=g(r().mark((function e(t){var n,a,o;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t?R:V){e.next=3;break}return e.abrupt("return");case 3:if(n=t?$:Q,a=t?s.Z.nominee_aadhar.items[0].id:s.Z.nominee_aadhar.items[1].id,o="","nominee_aadhar_front"!==a){e.next=13;break}return e.next=9,(0,u.Z)(I);case 9:o=e.sent,P.ZP.success("Nominee Aadhar Front Updated"),e.next=17;break;case 13:return e.next=15,(0,u.Z)(W);case 15:o=e.sent,P.ZP.success("Nominee Aadhar Back Updated");case 17:if(!n){e.next=22;break}return e.next=20,te(n.id,o,a);case 20:e.next=24;break;case 22:return e.next=24,ne(o,a);case 24:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),re=function(){var n=g(r().mark((function n(){return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a?A?$||R?!(!Q&&!V)||(alert("Please Select Nominee Aadhar Back"),null):(alert("Please Select Nominee Aadhar Front"),null):(alert("Please Enter Nominee Relation"),null):(alert("Please Enter Nominee Name"),null)){n.next=3;break}return n.abrupt("return");case 3:return E(!0),n.prev=4,n.next=7,N({variables:{name:a,relationship:A}});case 7:return n.next=9,e((0,c.j2)(D({},t,{nominee:D({},null===t||void 0===t?void 0:t.nominee,{name:a,relationship:A})})));case 9:return n.next=11,ae(!0);case 11:return n.next=13,ae(!1);case 13:P.ZP.success("Nominee Updated Succesfully"),n.next=19;break;case 16:n.prev=16,n.t0=n.catch(4),console.log(n.t0);case 19:E(!1);case 20:case"end":return n.stop()}}),n,null,[[4,16]])})));return function(){return n.apply(this,arguments)}}();return(0,h.useEffect)((function(){var e,n;t&&((null===t||void 0===t?void 0:t.nominee)&&(b(null===t||void 0===t?void 0:t.nominee.name),k(null===t||void 0===t?void 0:t.nominee.relationship)),(null===t||void 0===t?void 0:t.documents)&&(null===t||void 0===t||null===(e=t.documents)||void 0===e?void 0:e.length)>0&&(null===t||void 0===t||null===(n=t.documents)||void 0===n||n.find((function(e){e.title.toLowerCase()===s.Z.nominee_aadhar.items[0].id?(q(e),L(e.url)):e.title.toLowerCase()===s.Z.nominee_aadhar.items[1].id&&(J(e.url),Y(e))}))))}),[t]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(p.Z,{variant:"h4",sx:{my:2},children:"Kindly Fill the form to enlist nominee"}),(0,o.jsxs)(f.ZP,{container:!0,spacing:2,children:[(0,o.jsx)(f.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,o.jsx)(y.Z,{id:"outlined",label:"Full Name*",fullWidth:!0,value:a,variant:"outlined",onChange:function(e){b(e.target.value),K(!0)}})}),(0,o.jsx)(f.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,o.jsx)(y.Z,{label:"Relationship",variant:"outlined",fullWidth:!0,value:A,onChange:function(e){k(e.target.value),K(!0)}})})]}),(0,o.jsxs)(f.ZP,{container:!0,pt:1,pb:2,spacing:15,children:[(0,o.jsxs)(f.ZP,{item:!0,xs:12,sm:6,md:4,lg:3.5,children:[I?(0,o.jsx)("img",{src:"object"==typeof I?URL.createObjectURL(I):I,height:180}):null,$&&$.status&&(0,o.jsxs)(p.Z,{variant:"h4",sx:{my:2},children:["Status :"," ",(0,o.jsxs)("span",{style:{color:$?"APPROVED"===$.status?"green":"REJECTED"===$.status&&"red":""},children:[" ",$&&$.status]})]}),"APPROVED"===(null===t||void 0===t?void 0:t.kyc)?null:(0,o.jsxs)(v.Z,{variant:"contained",style:{cursor:$&&"APPROVED"===$.status?"not-allowed":"pointer"},component:"label",color:$&&"APPROVED"===$.status?"secondary":"primary",children:["Upload Aadhar Card Front",(0,o.jsx)("input",{type:"file",accept:"image/*",hidden:!0,disabled:!!$&&"APPROVED"===$.status,onChange:function(e){e.target.files.length>0&&(L(e.target.files[0]),U(!0),K(!0))}})]})]}),(0,o.jsxs)(f.ZP,{item:!0,xs:12,sm:6,ml:1,md:4,lg:3.5,children:[W?(0,o.jsx)("img",{src:"object"==typeof W?URL.createObjectURL(W):W,height:180}):null,Q&&Q.status&&(0,o.jsxs)(p.Z,{variant:"h4",sx:{my:2},children:["Status :"," ",(0,o.jsx)("span",{style:{color:Q?"APPROVED"===Q.status?"green":"REJECTED"===Q.status&&"red":""},children:Q&&Q.status})]}),"APPROVED"===(null===t||void 0===t?void 0:t.kyc)?null:(0,o.jsxs)(v.Z,{variant:"contained",style:{cursor:Q&&"APPROVED"===Q.status?"not-allowed":"pointer"},component:"label",color:Q&&"APPROVED"===Q.status?"secondary":"primary",children:["Upload Aadhar Card Back",(0,o.jsx)("input",{type:"file",accept:"image/*",hidden:!0,disabled:!!$&&"APPROVED"===$.status,onChange:function(e){e.target.files.length>0&&(J(e.target.files[0]),F(!0),K(!0))}})]})]})]}),"APPROVED"===(null===t||void 0===t?void 0:t.kyc)?null:(0,o.jsx)(f.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,o.jsxs)(_.Z,{component:"form",mt:2,children:[(0,o.jsx)(l.Z,{loading:Z,variant:"contained",component:"label",disabled:!z,onClick:function(){re()},children:"Submit"}),(0,o.jsx)(P.x7,{position:"bottom-center",reverseOrder:!1})]})})]})}},42480:function(e,t){"use strict";t.Z={aadhar:{id:"aadhar",name:"Aadhar Card",status:"",items:[{id:"aadhar_front",name:"AADHAR Card Front",status:""},{id:"aadhar_back",name:"AADHAR Card Back",status:""}]},pancard:{id:"pancard",name:"Pancard",status:"",items:[{id:"pancard",name:"Pan Card",status:""}]},avatar:{id:"photo",name:"Photo",status:"",items:[{id:"avatar",name:"Passport Size Photo",status:""}]},voterId:{id:"voterId",name:"Voter Id Card",status:"Not Uploaded",items:[{id:"voterid_front",name:"Voter Id Front",status:""},{id:"voterid_back",name:"Voted Id Card Back",status:""}]},passbook:{name:"Passbook  or Bank Statement",id:"passbook",status:"Not Uploaded",items:[{id:"passbook",name:"Bank Passbook Or Bank Statement",status:"Not Uploaded"}]},payment_proof:{name:"Payment Proof",id:"payment_proof",status:"Not Uploaded",items:[{id:"payment_proof",name:"Payment Proof"}]},agency_payment_proof:{name:"Agency Payment Proof",id:"agency_payment_proof",status:"Not Uploaded",items:[{id:"agency_payment_proof",name:"Agency Payment Proof"}]},additional_documents:{name:"Additional Payment Document",id:"additional_payment_doc",items:[{id:"additional_payment_doc2",name:"Payment Document"},{id:"additional_payment_doc3",name:"Payment Document"},{id:"additional_payment_doc4",name:"Payment Document"},{id:"additional_payment_doc5",name:"Payment Document"}]},to_advance_payment_proof:{name:"To Advance Payment Proof",id:"to_advance_payment_proof",status:"Not Uploaded",items:[{id:"to_advance_payment_proof",name:"To Advance Payment Proof"}]},to_advance_additional_documents:{name:"To Advance Additional Payment Document",id:"to_advance_additional_payment_doc",items:[{id:"to_advance_additional_payment_doc2",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc3",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc4",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc5",name:"To Advance Payment Document"}]},driving_license:{name:"Driving License",id:"driving_license",status:"Not Uploaded",items:[{id:"driving_license_front",name:"Driving License Front",status:""},{id:"driving_license_back",name:"Driving License Back",status:""}]},nominee_aadhar:{name:"Nominee Aadhar",id:"nominee_aadhar",status:"Not Uploaded",items:[{id:"nominee_aadhar_front",name:"AADHAR Card Front",status:""},{id:"nominee_aadhar_back",name:"AADHAR Card Back",status:""}]},demat_document:{name:"Demat Document",id:"demat_document",status:"Not Uploaded",items:[{id:"demat_document",name:"Demat Document",status:""}]},payment_additional_documents:{name:"Additional Payment Document",id:"additional_payment_doc",items:[{id:"additional_payment_doc2",name:"Payment Document"},{id:"additional_payment_doc3",name:"Payment Document"},{id:"additional_payment_doc4",name:"Payment Document"},{id:"additional_payment_doc5",name:"Payment Document"}]},project_payment:{name:"Project Payment",id:"project_payment",items:[{id:"project_payment_1",name:"Payment Document"},{id:"project_payment_2",name:"Payment Document"},{id:"project_payment_3",name:"Payment Document"},{id:"project_payment_4",name:"Payment Document"},{id:"project_payment_5",name:"Payment Document"}]}}},55511:function(e,t,n){"use strict";var a=n(34051),r=n.n(a),o=n(6154);function i(e,t,n,a,r,o,i){try{var s=e[o](i),d=s.value}catch(c){return void n(c)}s.done?t(d):Promise.resolve(d).then(a,r)}var s=function(){var e,t=(e=r().mark((function e(t){var n,a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("document",t),e.next=4,o.Z.post("".concat("https://kycramaerabackend.ramaera.com","/documents/upload"),n,{headers:{"Content-Type":"multipart/form-data"}});case 4:return a=e.sent,e.abrupt("return",a.data.url);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(a,r){var o=e.apply(t,n);function s(e){i(o,a,r,s,d,"next",e)}function d(e){i(o,a,r,s,d,"throw",e)}s(void 0)}))});return function(e){return t.apply(this,arguments)}}();t.Z=s}},function(e){e.O(0,[2005,5370,9990,4789,3265,5233,1880,6549,7058,315,8584,6322,6154,6233,4843,9774,2888,179],(function(){return t=58506,e(e.s=t);var t}));var t=e.O();_N_E=t}]);