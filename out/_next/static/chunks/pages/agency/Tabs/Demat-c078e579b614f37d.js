(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2593],{89941:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/agency/Tabs/Demat",function(){return n(643)}])},643:function(t,e,n){"use strict";n.r(e);var a=n(47568),o=n(26042),i=n(69396),d=n(828),s=n(97582),r=n(85893),c=n(16538),u=n(44709),m=n(34753),l=n(21191),p=n(11213),_=n(81118),f=n(29792),h=n(50319),y=n(8987),v=n(86886),P=n(50135),A=n(87357),D=n(11057),Z=n(67294),g=n(86501),E=n(71455),j=n(9473);e.default=function(){var t=(0,j.I0)(),e=(0,j.v9)((function(t){return t.foundUser.foundUser})),n=(0,j.v9)((function(t){return t.allUsers.allTheUsers})),b=(0,Z.useState)(null),N=b[0],x=b[1],T=(0,Z.useState)(null),I=T[0],k=T[1],U=(0,Z.useState)(),R=U[0],C=U[1],O=(0,Z.useState)(!1),S=O[0],F=O[1],V=(0,Z.useState)(!1),B=V[0],w=V[1],G=(0,Z.useState)(!1),H=G[0],L=G[1],J=(0,d.Z)((0,h.D)(c.p1),1)[0],M=(0,d.Z)((0,h.D)(c.HF),2),X=M[0],W=M[1].data,z=function(t,n,a){var d=e,s=[];return e.documents.map((function(e){e.id===t?s.push((0,i.Z)((0,o.Z)({},e),{url:n})):s.push(e)})),(0,i.Z)((0,o.Z)({},d),{documents:s,demat_account:a})},q=function(t,n){var a=e,d=[];return e.documents.map((function(e){e.id===t?d.push((0,i.Z)((0,o.Z)({},e),{status:n})):d.push(e)})),(0,i.Z)((0,o.Z)({},a),{documents:d})},K=function(){var e=(0,a.Z)((function(e,a){return(0,s.__generator)(this,(function(o){switch(o.label){case 0:return[4,X({variables:{id:e,status:a}})];case 1:return o.sent(),t((0,p.Hn)(q(R.id,a))),t((0,l.UF)((0,_.Z)(n,q(R.id,a)))),[2]}}))}));return function(t,n){return e.apply(this,arguments)}}(),Q=function(){var d=(0,a.Z)((function(){var a,d;return(0,s.__generator)(this,(function(s){switch(s.label){case 0:if(a=function(t){return!!t||(alert("Invalid Image"),!1)}(I),!a)return[2];w(!0),s.label=1;case 1:return s.trys.push([1,9,,10]),N?[4,J({variables:{id:e.id,demat_account:N}})]:[3,3];case 2:s.sent(),t((0,p.Hn)((0,i.Z)((0,o.Z)({},e),{demat_account:N}))),t((0,l.UF)((0,_.Z)(n,(0,i.Z)((0,o.Z)({},e),{demat_account:N})))),s.label=3;case 3:return d="",S?[4,(0,f.Z)(I)]:[3,5];case 4:return d=s.sent(),[3,6];case 5:d=I,s.label=6;case 6:return R?[4,J({variables:{id:e.id,documentId:R.id,url:d}})]:[3,8];case 7:return s.sent(),t((0,p.Hn)(z(R.id,d,N))),t((0,l.UF)((0,_.Z)(n,z(R.id,d,N)))),g.ZP.success("Demat Details Updated "),[3,8];case 8:return[3,10];case 9:return s.sent(),[3,10];case 10:return w(!1),[2]}}))}));return function(){return d.apply(this,arguments)}}();return(0,Z.useEffect)((function(){e&&x(e.demat_account),e&&e.documents&&e.documents.length>0&&e.documents.find((function(t){t.title.toLowerCase()===u.Z.demat_document.items[0].id&&(C(t),k(t.url))}))}),[e]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(v.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,r.jsx)(P.Z,{id:"outlined",label:"Demat Account No.",type:"text",fullWidth:!0,disabled:(null===e||void 0===e?void 0:e.kyc)===m.Z.status.APPROVED,value:N,variant:"outlined",onChange:function(t){x(t.target.value),L(!0)}})}),I&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(E.TV,{children:(0,r.jsx)(E.HI,{src:"object"==typeof I?URL.createObjectURL(I):I,children:(0,r.jsx)("img",{style:{marginTop:"10px",cursor:"pointer"},src:"object"==typeof I?URL.createObjectURL(I):I,height:200,width:200})})}),(0,r.jsxs)(A.Z,{children:["Status :"," ",(0,r.jsx)("span",{style:{color:R?"APPROVED"===R.status?"limegreen":"REJECTED"===R.status&&"red":""},children:W?W.updateDocumentStatusByAdmin.status:R?R.status:null})]}),(0,r.jsx)(A.Z,{children:(null===e||void 0===e?void 0:e.kyc)!==m.Z.status.APPROVED&&(0,r.jsxs)(v.ZP,{children:[(0,r.jsx)(D.Z,{onClick:function(){return K(R.id,"APPROVED")},variant:"outlined",color:"success",children:"Approve"}),(0,r.jsx)(D.Z,{onClick:function(){return K(R.id,"REJECTED")},variant:"outlined",color:"error",sx:{ml:2},children:"Reject"})]})})]}),(null===e||void 0===e?void 0:e.kyc)!==m.Z.status.APPROVED&&(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(v.ZP,{container:!0,pt:3,pb:2,pr:2,spacing:2,children:[I&&(0,r.jsx)(v.ZP,{item:!0,xs:12,sm:6,md:4,lg:3.5,children:(0,r.jsxs)(D.Z,{variant:"contained",component:"label",children:["Upload Demat Account Details",(0,r.jsx)("input",{type:"file",accept:"image/*",hidden:!0,onChange:function(t){t.target.files.length>0&&(k(t.target.files[0]),F(!0),L(!0))}})]})}),(0,r.jsx)(v.ZP,{item:!0,xs:12,sm:6,md:4,lg:3.5,children:(0,r.jsx)(A.Z,{component:"form",children:(0,r.jsx)(y.Z,{loading:B,fullWidth:!0,disabled:!H,variant:"contained",onClick:function(){Q()},sx:{paddingX:20.5},children:"Submit"})})}),(0,r.jsx)(g.x7,{position:"bottom-right",reverseOrder:!1})]})}),(0,r.jsx)(v.ZP,{item:!0,xs:4})]})}},44709:function(t,e){"use strict";e.Z={aadhar:{id:"aadhar",name:"Aadhar Card",status:"",items:[{id:"aadhar_front",name:"AADHAR Card Front",status:""},{id:"aadhar_back",name:"AADHAR Card Back",status:""}]},pancard:{id:"pancard",name:"Pancard",status:"",items:[{id:"pancard",name:"Pan Card",status:""}]},avatar:{id:"photo",name:"Photo",status:"",items:[{id:"avatar",name:"Passport Size Photo",status:""}]},voterId:{id:"voterId",name:"Voter Id Card",status:"Not Uploaded",items:[{id:"voterid_front",name:"Voter Id Front",status:""},{id:"voterid_back",name:"Voted Id Card Back",status:""}]},passbook:{name:"Passbook  or Bank Statement",id:"passbook",status:"Not Uploaded",items:[{id:"passbook",name:"Bank Passbook Or Bank Statement",status:"Not Uploaded"}]},payment_proof:{name:"Payment Proof",id:"payment_proof",status:"Not Uploaded",items:[{id:"payment_proof",name:"Payment Proof"}]},agency_payment_proof:{name:"Agency Payment Proof",id:"agency_payment_proof",status:"Not Uploaded",items:[{id:"agency_payment_proof",name:"Agency Payment Proof"}]},additional_payment_documents:{name:"Additional Payment Document",id:"additional_payment_doc",items:[{id:"additional_payment_doc2",name:"Payment Document"},{id:"additional_payment_doc3",name:"Payment Document"},{id:"additional_payment_doc4",name:"Payment Document"},{id:"additional_payment_doc5",name:"Payment Document"}]},to_advance_payment_proof:{name:"To Advance Payment Proof",id:"to_advance_payment_proof",status:"Not Uploaded",items:[{id:"to_advance_payment_proof",name:"To Advance Payment Proof"}]},to_advance_additional_documents:{name:"To Advance Additional Payment Document",id:"to_advance_additional_payment_doc",items:[{id:"to_advance_additional_payment_doc2",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc3",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc4",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc5",name:"To Advance Payment Document"}]},driving_license:{name:"Driving License",id:"driving_license",status:"Not Uploaded",items:[{id:"driving_license_front",name:"Driving License Front",status:""},{id:"driving_license_back",name:"Driving License Back",status:""}]},nominee_aadhar:{name:"Nominee Aadhar",id:"nominee_aadhar",status:"Not Uploaded",items:[{id:"nominee_aadhar_front",name:"AADHAR Card Front",status:""},{id:"nominee_aadhar_back",name:"AADHAR Card Back",status:""}]},demat_document:{name:"Demat Document",id:"demat_document",status:"Not Uploaded",items:[{id:"demat_document",name:"Demat Document",status:""}]},project_payment:{name:"Project Payment",id:"project_payment",items:[{id:"project_payment_1",name:"Payment Document"},{id:"project_payment_2",name:"Payment Document"},{id:"project_payment_3",name:"Payment Document"},{id:"project_payment_4",name:"Payment Document"},{id:"project_payment_5",name:"Payment Document"}]}}},34753:function(t,e){"use strict";e.Z={project:{AGRA:"agra",HAJIPUR:"hajipur"},role:{ADMIN:"ADMIN",AGENT:"AGENT",USER:"USER"},membership:{ADVANCE:"ADVANCE",BASIC:"BASIC"},status:{AGENT_APPROVED:"AGENT_APPROVED",APPROVED:"APPROVED",NOT_INITIALIZED:"NOT_INITIALIZED",ONGOING:"ONGOING",PENDING:"PENDING",REJECTED:"REJECTED",SUBMITTED:"SUBMITTED"},amount:{beforeFifteenthAugustBasicAmount:1e3,beforeFifteenthAugustAdvanceAmount:1e5,afterFifteenthAugustBasicAmount:2e3,afterFifteenthAugustAdvanceAmount:2e5}}},81118:function(t,e){"use strict";e.Z=function(t,e){var n=[];return t.map((function(t){e.id===(null===t||void 0===t?void 0:t.id)?n.push(e):n.push(t)})),n}},29792:function(t,e,n){"use strict";var a=n(47568),o=n(97582),i=n(6154),d=function(){var t=(0,a.Z)((function(t){var e;return(0,o.__generator)(this,(function(n){switch(n.label){case 0:return(e=new FormData).append("document",t),[4,i.Z.post("".concat("https://kycramaerabackend.ramaera.com","/documents/upload"),e,{headers:{"Content-Type":"multipart/form-data"}})];case 1:return[2,n.sent().data.url]}}))}));return function(e){return t.apply(this,arguments)}}();e.Z=d}},function(t){t.O(0,[5370,9990,9260,8914,4753,6827,6549,7058,788,135,6004,6154,6495,9774,2888,179],(function(){return e=89941,t(t.s=e);var e}));var e=t.O();_N_E=e}]);