(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2593],{89941:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/agency/Tabs/Demat",function(){return n(643)}])},643:function(e,t,n){"use strict";n.r(t);var a=n(47568),o=n(26042),d=n(69396),i=n(828),c=n(97582),r=n(85893),m=n(16538),s=n(44709),u=n(34753),_=n(21191),p=n(11213),l=n(81118),y=n(29792),f=n(50319),P=n(8987),D=n(86886),h=n(50135),A=n(87357),v=n(11057),g=n(67294),Z=n(86501),j=n(71455),E=n(9473);t.default=function(){var e=(0,E.I0)(),t=(0,E.v9)((function(e){return e.foundUser.foundUser})),n=(0,E.v9)((function(e){return e.allUsers.allTheUsers})),b=(0,g.useState)(null),N=b[0],x=b[1],U=(0,g.useState)(null),T=U[0],I=U[1],k=(0,g.useState)(),R=k[0],C=k[1],O=(0,g.useState)(!1),S=O[0],F=O[1],L=(0,g.useState)(!1),V=L[0],B=L[1],w=(0,g.useState)(!1),G=w[0],H=w[1],J=(0,i.Z)((0,f.D)(m.p1),1)[0],M=(0,i.Z)((0,f.D)(m.HF),2),X=M[0],W=M[1].data,z=function(e,n,a){var i=t,c=[];return t.documents.map((function(t){t.id===e?c.push((0,d.Z)((0,o.Z)({},t),{url:n})):c.push(t)})),(0,d.Z)((0,o.Z)({},i),{documents:c,demat_account:a})},q=function(e,n){var a=t,i=[];return t.documents.map((function(t){t.id===e?i.push((0,d.Z)((0,o.Z)({},t),{status:n})):i.push(t)})),(0,d.Z)((0,o.Z)({},a),{documents:i})},K=function(){var t=(0,a.Z)((function(t,a){return(0,c.__generator)(this,(function(o){switch(o.label){case 0:return[4,X({variables:{id:t,status:a}})];case 1:return o.sent(),e((0,p.Hn)(q(R.id,a))),e((0,_.UF)((0,l.Z)(n,q(R.id,a)))),[2]}}))}));return function(e,n){return t.apply(this,arguments)}}(),Q=function(){var i=(0,a.Z)((function(){var a,i;return(0,c.__generator)(this,(function(c){switch(c.label){case 0:if(a=function(e){return!!e||(alert("Invalid Image"),!1)}(T),!a)return[2];B(!0),c.label=1;case 1:return c.trys.push([1,9,,10]),N?[4,J({variables:{id:t.id,demat_account:N}})]:[3,3];case 2:c.sent(),e((0,p.Hn)((0,d.Z)((0,o.Z)({},t),{demat_account:N}))),e((0,_.UF)((0,l.Z)(n,(0,d.Z)((0,o.Z)({},t),{demat_account:N})))),c.label=3;case 3:return i="",S?[4,(0,y.Z)(T)]:[3,5];case 4:return i=c.sent(),[3,6];case 5:i=T,c.label=6;case 6:return R?[4,J({variables:{id:t.id,documentId:R.id,url:i}})]:[3,8];case 7:return c.sent(),e((0,p.Hn)(z(R.id,i,N))),e((0,_.UF)((0,l.Z)(n,z(R.id,i,N)))),Z.ZP.success("Demat Details Updated "),[3,8];case 8:return[3,10];case 9:return c.sent(),[3,10];case 10:return B(!1),[2]}}))}));return function(){return i.apply(this,arguments)}}();return(0,g.useEffect)((function(){t&&x(t.demat_account),t&&t.documents&&t.documents.length>0&&t.documents.find((function(e){e.title.toLowerCase()===s.Z.demat_document.items[0].id&&(C(e),I(e.url))}))}),[t]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(D.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,r.jsx)(h.Z,{id:"outlined",label:"Demat Account No.",type:"text",fullWidth:!0,disabled:(null===t||void 0===t?void 0:t.kyc)===u.Z.status.APPROVED,value:N,variant:"outlined",onChange:function(e){x(e.target.value),H(!0)}})}),T&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j.TV,{children:(0,r.jsx)(j.HI,{src:"object"==typeof T?URL.createObjectURL(T):T,children:(0,r.jsx)("img",{style:{marginTop:"10px",cursor:"pointer"},src:"object"==typeof T?URL.createObjectURL(T):T,height:200,width:200})})}),(0,r.jsxs)(A.Z,{children:["Status :"," ",(0,r.jsx)("span",{style:{color:R?"APPROVED"===R.status?"limegreen":"REJECTED"===R.status&&"red":""},children:W?W.updateDocumentStatusByAdmin.status:R?R.status:null})]}),(0,r.jsx)(A.Z,{children:(null===t||void 0===t?void 0:t.kyc)!==u.Z.status.APPROVED&&(0,r.jsxs)(D.ZP,{children:[(0,r.jsx)(v.Z,{onClick:function(){return K(R.id,"APPROVED")},variant:"outlined",color:"success",children:"Approve"}),(0,r.jsx)(v.Z,{onClick:function(){return K(R.id,"REJECTED")},variant:"outlined",color:"error",sx:{ml:2},children:"Reject"})]})})]}),(null===t||void 0===t?void 0:t.kyc)!==u.Z.status.APPROVED&&(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(D.ZP,{container:!0,pt:3,pb:2,pr:2,spacing:2,children:[T&&(0,r.jsx)(D.ZP,{item:!0,xs:12,sm:6,md:4,lg:3.5,children:(0,r.jsxs)(v.Z,{variant:"contained",component:"label",children:["Upload Demat Account Details",(0,r.jsx)("input",{type:"file",accept:"image/*",hidden:!0,onChange:function(e){e.target.files.length>0&&(I(e.target.files[0]),F(!0),H(!0))}})]})}),(0,r.jsx)(D.ZP,{item:!0,xs:12,sm:6,md:4,lg:3.5,children:(0,r.jsx)(A.Z,{component:"form",children:(0,r.jsx)(P.Z,{loading:V,fullWidth:!0,disabled:!G,variant:"contained",onClick:function(){Q()},sx:{paddingX:20.5},children:"Submit"})})}),(0,r.jsx)(Z.x7,{position:"bottom-right",reverseOrder:!1})]})}),(0,r.jsx)(D.ZP,{item:!0,xs:4})]})}},44709:function(e,t){"use strict";t.Z={aadhar:{id:"aadhar",name:"Aadhar Card",status:"",items:[{id:"aadhar_front",name:"AADHAR Card Front",status:""},{id:"aadhar_back",name:"AADHAR Card Back",status:""}]},pancard:{id:"pancard",name:"Pancard",status:"",items:[{id:"pancard",name:"Pan Card",status:""}]},avatar:{id:"photo",name:"Photo",status:"",items:[{id:"avatar",name:"Passport Size Photo",status:""}]},voterId:{id:"voterId",name:"Voter Id Card",status:"Not Uploaded",items:[{id:"voterid_front",name:"Voter Id Front",status:""},{id:"voterid_back",name:"Voted Id Card Back",status:""}]},passbook:{name:"Passbook  or Bank Statement",id:"passbook",status:"Not Uploaded",items:[{id:"passbook",name:"Bank Passbook Or Bank Statement",status:"Not Uploaded"}]},payment_proof:{name:"Payment Proof",id:"payment_proof",status:"Not Uploaded",items:[{id:"payment_proof",name:"Payment Proof"}]},agency_payment_proof:{name:"Agency Payment Proof",id:"agency_payment_proof",status:"Not Uploaded",items:[{id:"agency_payment_proof",name:"Agency Payment Proof"}]},upgrade_agency_license_payment_proof_documents:{name:"Upgrade Agency License Payment Proof",id:"upgrade_agency_license_payment_proof",items:[{id:"upgrade_agency_license_payment_proof2",name:"Upgrade Agency License Payment Proof"},{id:"upgrade_agency_license_payment_proof3",name:"Upgrade Agency License Payment Proof"},{id:"upgrade_agency_license_payment_proof4",name:"Upgrade Agency License Payment Proof"},{id:"upgrade_agency_license_payment_proof5",name:"Upgrade Agency License Payment Proof"}]},additional_payment_documents:{name:"Additional Payment Document",id:"additional_payment_doc",items:[{id:"additional_payment_doc2",name:"Payment Document"},{id:"additional_payment_doc3",name:"Payment Document"},{id:"additional_payment_doc4",name:"Payment Document"},{id:"additional_payment_doc5",name:"Payment Document"}]},to_advance_payment_proof:{name:"To Advance Payment Proof",id:"to_advance_payment_proof",status:"Not Uploaded",items:[{id:"to_advance_payment_proof",name:"To Advance Payment Proof"}]},to_advance_additional_documents:{name:"To Advance Additional Payment Document",id:"to_advance_additional_payment_doc",items:[{id:"to_advance_additional_payment_doc2",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc3",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc4",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc5",name:"To Advance Payment Document"}]},driving_license:{name:"Driving License",id:"driving_license",status:"Not Uploaded",items:[{id:"driving_license_front",name:"Driving License Front",status:""},{id:"driving_license_back",name:"Driving License Back",status:""}]},nominee_aadhar:{name:"Nominee Aadhar",id:"nominee_aadhar",status:"Not Uploaded",items:[{id:"nominee_aadhar_front",name:"AADHAR Card Front",status:""},{id:"nominee_aadhar_back",name:"AADHAR Card Back",status:""}]},demat_document:{name:"Demat Document",id:"demat_document",status:"Not Uploaded",items:[{id:"demat_document",name:"Demat Document",status:""}]},additional_demat_documents:{name:"Additional Demat Document",id:"additional_demat_documents",items:[{id:"demat_document_2",name:"Demat Document"},{id:"demat_document_3",name:"Demat Document"},{id:"demat_document_4",name:"Demat Document"},{id:"demat_document_5",name:"Demat Document"}]},project_payment:{name:"Project Payment",id:"project_payment",items:[{id:"project_payment_1",name:"Payment Document"},{id:"project_payment_2",name:"Payment Document"},{id:"project_payment_3",name:"Payment Document"},{id:"project_payment_4",name:"Payment Document"},{id:"project_payment_5",name:"Payment Document"},{id:"project_payment_6",name:"Payment Document"},{id:"project_payment_7",name:"Payment Document"},{id:"project_payment_8",name:"Payment Document"},{id:"project_payment_9",name:"Payment Document"},{id:"project_payment_10",name:"Payment Document"},{id:"project_payment_11",name:"Payment Document"}]}}},34753:function(e,t){"use strict";t.Z={project:{AGRA:"agra",HAJIPUR:"hajipur"},role:{ADMIN:"ADMIN",AGENT:"AGENT",USER:"USER"},membership:{ADVANCE:"ADVANCE",BASIC:"BASIC"},status:{AGENT_APPROVED:"AGENT_APPROVED",APPROVED:"APPROVED",NOT_INITIALIZED:"NOT_INITIALIZED",ONGOING:"ONGOING",PENDING:"PENDING",REJECTED:"REJECTED",SUBMITTED:"SUBMITTED"},amount:{beforeFifteenthAugustBasicAmount:1e3,beforeFifteenthAugustAdvanceAmount:1e5,afterFifteenthAugustBasicAmount:2e3,afterFifteenthAugustAdvanceAmount:2e5}}},81118:function(e,t){"use strict";t.Z=function(e,t){var n=[];return e.map((function(e){t.id===(null===e||void 0===e?void 0:e.id)?n.push(t):n.push(e)})),n}},29792:function(e,t,n){"use strict";var a=n(47568),o=n(97582),d=n(6154),i=function(){var e=(0,a.Z)((function(e){var t;return(0,o.__generator)(this,(function(n){switch(n.label){case 0:return(t=new FormData).append("document",e),[4,d.Z.post("".concat("https://kycramaerabackend.ramaera.com","/documents/upload"),t,{headers:{"Content-Type":"multipart/form-data"}})];case 1:return[2,n.sent().data.url]}}))}));return function(t){return e.apply(this,arguments)}}();t.Z=i}},function(e){e.O(0,[8244,9990,9260,9213,4753,6827,6549,7058,788,8584,8764,1959,1454,9774,2888,179],(function(){return t=89941,e(e.s=t);var t}));var t=e.O();_N_E=t}]);