(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6728],{82866:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/Tabs/Documents",function(){return n(99261)}])},37861:function(t,e,n){"use strict";n.r(e),n.d(e,{rows:function(){return i}});var a=n(85893),o=n(44709),i=[{config:o.Z.avatar,status:-1},{config:o.Z.aadhar,status:-1},{config:o.Z.pancard,status:-1},{config:o.Z.passbook,status:-1},{config:o.Z.voterId,status:-1,isOptional:!0},{config:o.Z.driving_license,status:-1,isOptional:!0}];e.default=function(){return(0,a.jsx)("div",{children:"RemoveError"})}},99261:function(t,e,n){"use strict";n.r(e);var a=n(47568),o=n(14924),i=n(26042),r=n(69396),s=n(828),d=n(29815),c=n(97582),u=n(85893),m=n(4749),l=n(26183),_=n(29792),p=n(50319),f=n(8987),h=n(2734),v=n(11057),y=n(15861),D=n(50456),A=n(55113),P=n(7906),g=n(295),Z=n(53252),b=n(72882),j=n(53184),E=n(89448),x=n(53816),N=(n(68680),n(3924),n(72484),n(67294)),T=n(86501),C=n(37861),k=n(34753),w=function(t){var e=t.data,n=t.documents,D=void 0===n?[]:n,A=t.user,P=(0,h.Z)(),g=(0,N.useState)([]),b=g[0],j=g[1],C=(0,N.useState)([]),w=C[0],I=C[1],O=(0,s.Z)((0,p.D)(m.Is),1)[0],R=(0,s.Z)((0,p.D)(m.yW),1)[0],U=(0,N.useState)(!1),S=U[0],V=U[1],B=(0,l.T)();(0,N.useEffect)((function(){var t=[],e=!0,n=!1,a=void 0;try{for(var o,i=D[Symbol.iterator]();!(e=(o=i.next()).done);e=!0){var r=o.value;t.push(r.url)}}catch(s){n=!0,a=s}finally{try{e||null==i.return||i.return()}finally{if(n)throw a}}j(t)}),[D,A]);var L=function(){var t=(0,a.Z)((function(t,e){return(0,c.__generator)(this,(function(n){switch(n.label){case 0:return[4,O({variables:{title:t,url:e}})];case 1:return[2,n.sent()]}}))}));return function(e,n){return t.apply(this,arguments)}}(),G=function(){var t=(0,a.Z)((function(t,e,n){return(0,c.__generator)(this,(function(a){switch(a.label){case 0:return[4,R({variables:{id:t,title:e,url:n}})];case 1:return[2,a.sent()]}}))}));return function(e,n,a){return t.apply(this,arguments)}}(),F=function(t,e,n){var a,o=A,s=[];return null===A||void 0===A||null===(a=A.documents)||void 0===a||a.map((function(n){n.id===t?s.push((0,r.Z)((0,i.Z)({},n),{title:"avatar"})):n.title!==e&&s.push(n)})),(0,r.Z)((0,i.Z)({},o),{documents:s})},H=function(){var t=(0,a.Z)((function(){var t,n,a;return(0,c.__generator)(this,(function(o){switch(o.label){case 0:V(!0),o.label=1;case 1:o.trys.push([1,6,,7]),t=function(t){var n,a,o,r,s,u,m,l;return(0,c.__generator)(this,(function(c){switch(c.label){case 0:return w[t]?(n=e.config.items[t].id,[4,(0,_.Z)(b[t])]):[3,7];case 1:return a=c.sent(),o=D.find((function(t){if(t.title.toLowerCase()===n.toLowerCase())return!0})),(r=null===A||void 0===A?void 0:A.documents)||(r=[]),o?[4,G(o.id,n,a)]:[3,4];case 2:return s=c.sent(),[4,B((0,E.j2)(F(o.id,n)))];case 3:return c.sent(),T.ZP.success("".concat(n," Uploaded")),(u=r.filter((function(t){return t.id!==document.id}))).push(s.data.updateDocument),r=u,[3,6];case 4:return[4,L(n,a)];case 5:m=c.sent(),T.ZP.success("".concat(n," Uploaded")),r=(0,d.Z)(r).concat([m.data.createDocument]),c.label=6;case 6:(l=(0,i.Z)({},A)).documents=r,B((0,E.j2)(l)),c.label=7;case 7:return[2]}}))},n=0,o.label=2;case 2:return n<w.length?[5,(0,c.__values)(t(n))]:[3,5];case 3:o.sent(),o.label=4;case 4:return n++,[3,2];case 5:return[3,7];case 6:return a=o.sent(),console.log("error",a),[3,7];case 7:return V(!1),[2]}}))}));return function(){return t.apply(this,arguments)}}();return(0,u.jsxs)(x.Z,{sx:(0,o.Z)({"&:last-child td, &:last-child th":{border:0}},P.breakpoints.down("sm"),{display:"flex",flexDirection:"column"}),children:[(0,u.jsxs)(Z.Z,{component:"th",scope:"row",children:[e.config.name," ",e.isOptional?"(Optional)":""]}),(0,u.jsx)(Z.Z,{children:function(){for(var t=[],n=e.config.items,a=0;a<n.length;a++){var o=b[a];o&&t.push((0,u.jsx)("img",{src:"object"==typeof o?URL.createObjectURL(o):o,height:100,style:{marginLeft:"5px"}}))}return 0==t.length?(0,u.jsx)(y.Z,{variant:"subtitle1",children:"No Document"}):t}()}),(0,u.jsx)(Z.Z,{children:function(){for(var t=function(t){n.push((0,u.jsxs)(v.Z,{style:{cursor:D[0]&&"APPROVED"===D[0].status?"not-allowed":"pointer",marginTop:"10px"},component:"label",color:D[0]&&"APPROVED"===D[0].status?"secondary":"primary",children:["Choose ",a[t].name,(0,u.jsx)("input",{type:"file",accept:"image/*",hidden:!0,disabled:!!D[0]&&"APPROVED"===D[0].status,onChange:function(e){if(e.target.files.length>0){var n=(0,d.Z)(b);n[t]=e.target.files[0],j(n),console.log("imageChanged",n[t]);var a=(0,d.Z)(w);a[t]=!0,I(a)}}})]}))},n=[],a=e.config.items,o=0;o<a.length;o++)t(o);return n}()}),(0,u.jsx)(Z.Z,{children:(null===A||void 0===A?void 0:A.kyc)!==k.Z.status.APPROVED&&(0,u.jsx)(f.Z,{loading:S,disabled:!function(){var t=w.find((function(t){if(t)return!0}));if(b.length==e.config.items.length&&t)return!0}(),variant:"contained",onClick:function(){H()},children:"Upload"})}),(0,u.jsx)(Z.Z,{children:(0,u.jsx)("span",{style:{color:D[0]?"APPROVED"===D[0].status?"green":"REJECTED"===D[0].status&&"red":""},children:D[0]&&D[0].status})})]},e.config.name)};e.default=function(){var t=(0,l.C)((function(t){var e;return null===(e=t.user)||void 0===e?void 0:e.data})),e=function(e){var n=[];if(t&&(null===t||void 0===t?void 0:t.documents)){var a=!0,o=!1,i=void 0;try{for(var r,s=function(){var e,a=r.value,o=null===t||void 0===t||null===(e=t.documents)||void 0===e?void 0:e.find((function(t){if(t.title.toLowerCase()===a.id.toLowerCase())return!0}));o&&n.push(o)},d=e[Symbol.iterator]();!(a=(r=d.next()).done);a=!0)s()}catch(c){o=!0,i=c}finally{try{a||null==d.return||d.return()}finally{if(o)throw i}}}return n};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(y.Z,{variant:"h4",sx:{my:2},children:"Kindly Upload the documents requested below"}),(0,u.jsxs)(b.Z,{component:A.Z,children:[(0,u.jsxs)(P.Z,{"aria-label":"simple table",children:[(0,u.jsx)(j.Z,{children:(0,u.jsxs)(x.Z,{children:[(0,u.jsx)(Z.Z,{children:"Document Name"}),(0,u.jsxs)(D.Z,{smDown:!0,children:[(0,u.jsx)(Z.Z,{children:"Preview"}),(0,u.jsx)(Z.Z,{style:{padding:"0 0 0 2rem"},children:"Action"}),(0,u.jsx)(Z.Z,{style:{padding:"0 0 0 2rem"},children:"Upload Action"}),(0,u.jsx)(Z.Z,{children:"Status"})]})]})}),(0,u.jsx)(g.Z,{children:C.rows.map((function(n,a){return(0,u.jsx)(w,{data:n,user:t,documents:e(n.config.items)},a)}))})]}),(0,u.jsx)(T.x7,{position:"bottom-center",reverseOrder:!1})]})]})}},44709:function(t,e){"use strict";e.Z={aadhar:{id:"aadhar",name:"Aadhar Card",status:"",items:[{id:"aadhar_front",name:"AADHAR Card Front",status:""},{id:"aadhar_back",name:"AADHAR Card Back",status:""}]},pancard:{id:"pancard",name:"Pancard",status:"",items:[{id:"pancard",name:"Pan Card",status:""}]},avatar:{id:"photo",name:"Photo",status:"",items:[{id:"avatar",name:"Passport Size Photo",status:""}]},voterId:{id:"voterId",name:"Voter Id Card",status:"Not Uploaded",items:[{id:"voterid_front",name:"Voter Id Front",status:""},{id:"voterid_back",name:"Voted Id Card Back",status:""}]},passbook:{name:"Passbook  or Bank Statement",id:"passbook",status:"Not Uploaded",items:[{id:"passbook",name:"Bank Passbook Or Bank Statement",status:"Not Uploaded"}]},payment_proof:{name:"Payment Proof",id:"payment_proof",status:"Not Uploaded",items:[{id:"payment_proof",name:"Payment Proof"}]},agency_payment_proof:{name:"Agency Payment Proof",id:"agency_payment_proof",status:"Not Uploaded",items:[{id:"agency_payment_proof",name:"Agency Payment Proof"}]},additional_payment_documents:{name:"Additional Payment Document",id:"additional_payment_doc",items:[{id:"additional_payment_doc2",name:"Payment Document"},{id:"additional_payment_doc3",name:"Payment Document"},{id:"additional_payment_doc4",name:"Payment Document"},{id:"additional_payment_doc5",name:"Payment Document"}]},to_advance_payment_proof:{name:"To Advance Payment Proof",id:"to_advance_payment_proof",status:"Not Uploaded",items:[{id:"to_advance_payment_proof",name:"To Advance Payment Proof"}]},to_advance_additional_documents:{name:"To Advance Additional Payment Document",id:"to_advance_additional_payment_doc",items:[{id:"to_advance_additional_payment_doc2",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc3",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc4",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc5",name:"To Advance Payment Document"}]},driving_license:{name:"Driving License",id:"driving_license",status:"Not Uploaded",items:[{id:"driving_license_front",name:"Driving License Front",status:""},{id:"driving_license_back",name:"Driving License Back",status:""}]},nominee_aadhar:{name:"Nominee Aadhar",id:"nominee_aadhar",status:"Not Uploaded",items:[{id:"nominee_aadhar_front",name:"AADHAR Card Front",status:""},{id:"nominee_aadhar_back",name:"AADHAR Card Back",status:""}]},demat_document:{name:"Demat Document",id:"demat_document",status:"Not Uploaded",items:[{id:"demat_document",name:"Demat Document",status:""}]},additional_demat_documents:{name:"Additional Demat Document",id:"additional_demat_documents",items:[{id:"demat_document_2",name:"Demat Document"},{id:"demat_document_3",name:"Demat Document"},{id:"demat_document_4",name:"Demat Document"},{id:"demat_document_5",name:"Demat Document"}]},project_payment:{name:"Project Payment",id:"project_payment",items:[{id:"project_payment_1",name:"Payment Document"},{id:"project_payment_2",name:"Payment Document"},{id:"project_payment_3",name:"Payment Document"},{id:"project_payment_4",name:"Payment Document"},{id:"project_payment_5",name:"Payment Document"}]}}},34753:function(t,e){"use strict";e.Z={project:{AGRA:"agra",HAJIPUR:"hajipur"},role:{ADMIN:"ADMIN",AGENT:"AGENT",USER:"USER"},membership:{ADVANCE:"ADVANCE",BASIC:"BASIC"},status:{AGENT_APPROVED:"AGENT_APPROVED",APPROVED:"APPROVED",NOT_INITIALIZED:"NOT_INITIALIZED",ONGOING:"ONGOING",PENDING:"PENDING",REJECTED:"REJECTED",SUBMITTED:"SUBMITTED"},amount:{beforeFifteenthAugustBasicAmount:1e3,beforeFifteenthAugustAdvanceAmount:1e5,afterFifteenthAugustBasicAmount:2e3,afterFifteenthAugustAdvanceAmount:2e5}}},29792:function(t,e,n){"use strict";var a=n(47568),o=n(97582),i=n(6154),r=function(){var t=(0,a.Z)((function(t){var e;return(0,o.__generator)(this,(function(n){switch(n.label){case 0:return(e=new FormData).append("document",t),[4,i.Z.post("".concat("https://kycramaerabackend.ramaera.com","/documents/upload"),e,{headers:{"Content-Type":"multipart/form-data"}})];case 1:return[2,n.sent().data.url]}}))}));return function(e){return t.apply(this,arguments)}}();e.Z=r}},function(t){t.O(0,[2005,8244,9990,2817,456,6261,8764,1959,2659,7004,9774,2888,179],(function(){return e=82866,t(t.s=e);var e}));var e=t.O();_N_E=e}]);