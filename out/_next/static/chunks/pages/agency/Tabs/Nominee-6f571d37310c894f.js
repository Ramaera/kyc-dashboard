(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2599],{63089:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/agency/Tabs/Nominee",function(){return n(22059)}])},22059:function(e,t,n){"use strict";n.r(t);var a=n(47568),o=n(26042),i=n(69396),r=n(828),s=n(97582),d=n(85893),c=n(8987),m=n(86886),u=n(50135),l=n(87357),p=n(11057),_=n(67720),y=(n(68680),n(3924),n(72484),n(67294)),f=n(50319),P=n(16538),h=n(44709),A=n(21191),D=n(11213),g=n(81118),v=n(29792),Z=n(86501),j=n(71455),x=n(9473),E=n(34753);t.default=function(){var e=(0,x.I0)(),t=(0,x.v9)((function(e){return e.foundUser.foundUser})),n=(0,x.v9)((function(e){return e.allUsers.allTheUsers})),N=(0,r.Z)((0,f.D)(P.ye),1)[0],b=(0,r.Z)((0,f.D)(P.qp),1)[0],R=(0,r.Z)((0,f.D)(P.HF),2),C=R[0],U=R[1].data,k=(0,y.useState)(""),T=k[0],S=k[1],I=(0,y.useState)(""),O=I[0],B=I[1],F=(0,y.useState)(!1),L=F[0],V=F[1],w=(0,y.useState)(!1),H=w[0],G=w[1],J=(0,y.useState)(!1),M=J[0],X=J[1],W=(0,y.useState)(""),q=W[0],z=W[1],Y=(0,y.useState)(""),K=Y[0],Q=Y[1],$=(0,y.useState)(!1),ee=$[0],te=$[1],ne=(0,y.useState)(),ae=ne[0],oe=ne[1],ie=(0,y.useState)(),re=ie[0],se=ie[1],de=function(e,n){var a=t,r=[];return t.documents.map((function(t){t.id===e?r.push((0,i.Z)((0,o.Z)({},t),{status:n})):r.push(t)})),(0,i.Z)((0,o.Z)({},a),{documents:r})},ce=function(e,n){var a=t,r=[];return t.documents.map((function(t){t.id===e?r.push((0,i.Z)((0,o.Z)({},t),{url:n})):r.push(t)})),(0,i.Z)((0,o.Z)({},a),{documents:r})},me=function(){var t=(0,a.Z)((function(t,a){return(0,s.__generator)(this,(function(o){switch(o.label){case 0:return[4,C({variables:{id:t,status:a}})];case 1:return o.sent(),e((0,D.Hn)(de(t,a))),e((0,A.UF)((0,g.Z)(n,de(t,a)))),[2]}}))}));return function(e,n){return t.apply(this,arguments)}}(),ue=function(){var t=(0,a.Z)((function(t,a){var o;return(0,s.__generator)(this,(function(i){switch(i.label){case 0:return[4,N({variables:{documentId:t,url:a}})];case 1:return o=i.sent(),e((0,D.Hn)(ce(t,a))),e((0,A.UF)((0,g.Z)(n,ce(t,a)))),[2,o]}}))}));return function(e,n){return t.apply(this,arguments)}}(),le=function(){var e=(0,a.Z)((function(e){var t,n,a;return(0,s.__generator)(this,(function(o){switch(o.label){case 0:return(e?H:M)?(t=e?q:K,n=e?ae:re,[4,(0,v.Z)(t)]):[2];case 1:return a=o.sent(),t?[4,ue(n.id,a)]:[3,3];case 2:return o.sent(),[3,3];case 3:return[2]}}))}));return function(t){return e.apply(this,arguments)}}(),pe=function(){var r=(0,a.Z)((function(){var a;return(0,s.__generator)(this,(function(r){switch(r.label){case 0:if(!(T?O?ae||H?!(!re&&!M)||(alert("Please Select Nominee Aadhar Back"),null):(alert("Please Select Nominee Aadhar Front"),null):(alert("Please Enter Nominee Relation"),null):(alert("Please Enter Nominee Name"),null)))return[2];V(!0),r.label=1;case 1:return r.trys.push([1,7,,8]),[4,b({variables:{userId:t.id,name:T,relationship:O}})];case 2:return r.sent(),[4,e((0,D.Hn)((0,i.Z)((0,o.Z)({},t),{nomineeName:T,nomineeRelationship:O})))];case 3:return r.sent(),[4,e((0,A.UF)((0,g.Z)(n,(0,i.Z)((0,o.Z)({},t),{nomineeName:T,nomineeRelationship:O}))))];case 4:return r.sent(),[4,le(!0)];case 5:return r.sent(),[4,le(!1)];case 6:return r.sent(),Z.ZP.success("Nominee Updated Succesfully"),[3,8];case 7:return a=r.sent(),console.log(a),[3,8];case 8:return V(!1),[2]}}))}));return function(){return r.apply(this,arguments)}}();return(0,y.useEffect)((function(){U&&U.updateDocumentStatusByAdmin.id===ae.id&&oe((0,i.Z)((0,o.Z)({},ae),{status:U.updateDocumentStatusByAdmin.status})),U&&U.updateDocumentStatusByAdmin.id===re.id&&se((0,i.Z)((0,o.Z)({},re),{status:U.updateDocumentStatusByAdmin.status}))}),[U]),(0,y.useEffect)((function(){t&&(t.nomineeName?(S(t.nomineeName),B(t.nomineeRelationship)):t.nominee&&(S(t.nominee.name),B(t.nominee.relationship)),t.documents&&t.documents.length>0&&t.documents.find((function(e){e.title.toLowerCase()===h.Z.nominee_aadhar.items[1].id&&(Q(e.url),se(e)),e.title.toLowerCase()===h.Z.nominee_aadhar.items[0].id&&(z(e.url),oe(e))})))}),[t]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(m.ZP,{container:!0,p:0,spacing:2,children:[(0,d.jsx)(m.ZP,{item:!0,xs:12,sm:4,children:(0,d.jsx)(u.Z,{id:"outlined",label:"Full Name*",fullWidth:!0,disabled:(null===t||void 0===t?void 0:t.kyc)===E.Z.status.APPROVED,value:T,variant:"outlined",onChange:function(e){S(e.target.value),te(!0)}})}),(0,d.jsx)(m.ZP,{item:!0,xs:12,sm:4,children:(0,d.jsx)(u.Z,{label:"Relationship",variant:"outlined",disabled:(null===t||void 0===t?void 0:t.kyc)===E.Z.status.APPROVED,fullWidth:!0,value:O,onChange:function(e){B(e.target.value),te(!0)}})}),(0,d.jsx)(m.ZP,{item:!0,xs:12,sm:4})]}),(0,d.jsxs)(m.ZP,{container:!0,p:2,spacing:2,children:[(0,d.jsx)(m.ZP,{item:!0,xs:12,sm:4,children:q&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(j.TV,{children:(0,d.jsx)(j.HI,{src:"object"==typeof q?URL.createObjectURL(q):q,children:(0,d.jsx)("img",{style:{marginTop:"10px",cursor:"pointer"},src:"object"==typeof q?URL.createObjectURL(q):q,height:200,width:200})})}),(0,d.jsxs)(l.Z,{children:["Status :"," ",(0,d.jsxs)("span",{style:{color:ae?"APPROVED"===ae.status?"limegreen":"REJECTED"===ae.status&&"red":""},children:[" ",U&&U.updateDocumentStatusByAdmin.id===ae.id?U.updateDocumentStatusByAdmin.status:ae?ae.status:null]})]}),(null===t||void 0===t?void 0:t.kyc)!==E.Z.status.APPROVED&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(p.Z,{variant:"contained",component:"label",sx:{margin:"10px 0"},children:["Upload Aadhar Card Front",(0,d.jsx)("input",{type:"file",accept:"image/*",hidden:!0,onChange:function(e){e.target.files.length>0&&(z(e.target.files[0]),G(!0))}})]}),(0,d.jsxs)(m.ZP,{children:[(0,d.jsx)(p.Z,{variant:"outlined",onClick:function(){return me(ae.id,"APPROVED")},color:"success",sx:{ml:2},children:"Approve"}),(0,d.jsx)(p.Z,{variant:"outlined",onClick:function(){return me(ae.id,"REJECTED")},color:"error",sx:{ml:2},children:"Reject"})]})]})]})}),(0,d.jsx)(m.ZP,{item:!0,xs:12,sm:4,children:K&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(j.TV,{children:(0,d.jsx)(j.HI,{src:"object"==typeof K?URL.createObjectURL(K):K,children:(0,d.jsx)("img",{style:{marginTop:"10px",cursor:"pointer"},src:"object"==typeof K?URL.createObjectURL(K):K,height:200,width:200})})}),(0,d.jsxs)(l.Z,{children:["Status :"," ",(0,d.jsx)("span",{style:{color:re?"APPROVED"===re.status?"limegreen":"REJECTED"===re.status&&"red":""},children:U&&U.updateDocumentStatusByAdmin.id===re.id?U.updateDocumentStatusByAdmin.status:re?re.status:null})]}),(null===t||void 0===t?void 0:t.kyc)!==E.Z.status.APPROVED&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(p.Z,{variant:"contained",component:"label",sx:{margin:"10px 0"},children:["Upload Aadhar Card Back",(0,d.jsx)("input",{type:"file",accept:"image/*",hidden:!0,onChange:function(e){e.target.files.length>0&&(Q(e.target.files[0]),X(!0),te(!0))}})]}),(0,d.jsxs)(m.ZP,{children:[(0,d.jsx)(p.Z,{variant:"outlined",onClick:function(){return me(re.id,"APPROVED")},color:"success",sx:{ml:2},children:"Approve"}),(0,d.jsx)(p.Z,{variant:"outlined",onClick:function(){return me(re.id,"REJECTED")},color:"error",sx:{ml:2},children:"Reject"})]})]})]})}),(0,d.jsx)(m.ZP,{item:!0,xs:12,sm:4}),(0,d.jsx)(_.Z,{}),(null===t||void 0===t?void 0:t.kyc)!==E.Z.status.APPROVED&&(0,d.jsxs)(l.Z,{component:"form",mt:1,children:[(0,d.jsx)(c.Z,{loading:L,sx:{paddingX:17},variant:"contained",component:"label",disabled:!ee,onClick:function(){pe()},children:"Submit"}),(0,d.jsx)(Z.x7,{position:"bottom-center",reverseOrder:!1})]})]})]})}},44709:function(e,t){"use strict";t.Z={aadhar:{id:"aadhar",name:"Aadhar Card",status:"",items:[{id:"aadhar_front",name:"AADHAR Card Front",status:""},{id:"aadhar_back",name:"AADHAR Card Back",status:""}]},pancard:{id:"pancard",name:"Pancard",status:"",items:[{id:"pancard",name:"Pan Card",status:""}]},avatar:{id:"photo",name:"Photo",status:"",items:[{id:"avatar",name:"Passport Size Photo",status:""}]},voterId:{id:"voterId",name:"Voter Id Card",status:"Not Uploaded",items:[{id:"voterid_front",name:"Voter Id Front",status:""},{id:"voterid_back",name:"Voted Id Card Back",status:""}]},passbook:{name:"Passbook  or Bank Statement",id:"passbook",status:"Not Uploaded",items:[{id:"passbook",name:"Bank Passbook Or Bank Statement",status:"Not Uploaded"}]},payment_proof:{name:"Payment Proof",id:"payment_proof",status:"Not Uploaded",items:[{id:"payment_proof",name:"Payment Proof"}]},agency_payment_proof:{name:"Agency Payment Proof",id:"agency_payment_proof",status:"Not Uploaded",items:[{id:"agency_payment_proof",name:"Agency Payment Proof"}]},upgrade_agency_license_payment_proof_documents:{name:"Upgrade Agency License Payment Proof",id:"upgrade_agency_license_payment_proof",items:[{id:"upgrade_agency_license_payment_proof2",name:"Upgrade Agency License Payment Proof"},{id:"upgrade_agency_license_payment_proof3",name:"Upgrade Agency License Payment Proof"},{id:"upgrade_agency_license_payment_proof4",name:"Upgrade Agency License Payment Proof"},{id:"upgrade_agency_license_payment_proof5",name:"Upgrade Agency License Payment Proof"}]},additional_payment_documents:{name:"Additional Payment Document",id:"additional_payment_doc",items:[{id:"additional_payment_doc2",name:"Payment Document"},{id:"additional_payment_doc3",name:"Payment Document"},{id:"additional_payment_doc4",name:"Payment Document"},{id:"additional_payment_doc5",name:"Payment Document"}]},to_advance_payment_proof:{name:"To Advance Payment Proof",id:"to_advance_payment_proof",status:"Not Uploaded",items:[{id:"to_advance_payment_proof",name:"To Advance Payment Proof"}]},to_advance_additional_documents:{name:"To Advance Additional Payment Document",id:"to_advance_additional_payment_doc",items:[{id:"to_advance_additional_payment_doc2",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc3",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc4",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc5",name:"To Advance Payment Document"}]},driving_license:{name:"Driving License",id:"driving_license",status:"Not Uploaded",items:[{id:"driving_license_front",name:"Driving License Front",status:""},{id:"driving_license_back",name:"Driving License Back",status:""}]},nominee_aadhar:{name:"Nominee Aadhar",id:"nominee_aadhar",status:"Not Uploaded",items:[{id:"nominee_aadhar_front",name:"AADHAR Card Front",status:""},{id:"nominee_aadhar_back",name:"AADHAR Card Back",status:""}]},demat_document:{name:"Demat Document",id:"demat_document",status:"Not Uploaded",items:[{id:"demat_document",name:"Demat Document",status:""}]},additional_demat_documents:{name:"Additional Demat Document",id:"additional_demat_documents",items:[{id:"demat_document_2",name:"Demat Document"},{id:"demat_document_3",name:"Demat Document"},{id:"demat_document_4",name:"Demat Document"},{id:"demat_document_5",name:"Demat Document"}]},project_payment:{name:"Project Payment",id:"project_payment",items:[{id:"project_payment_1",name:"Payment Document"},{id:"project_payment_2",name:"Payment Document"},{id:"project_payment_3",name:"Payment Document"},{id:"project_payment_4",name:"Payment Document"},{id:"project_payment_5",name:"Payment Document"},{id:"project_payment_6",name:"Payment Document"},{id:"project_payment_7",name:"Payment Document"},{id:"project_payment_8",name:"Payment Document"},{id:"project_payment_9",name:"Payment Document"},{id:"project_payment_10",name:"Payment Document"},{id:"project_payment_11",name:"Payment Document"}]},card_payment_proof:{name:"Card Payment Proof",id:"card_payment_proof",status:"Not Uploaded",items:[{id:"card_payment_proof",name:"Card Payment Proof",status:""}]},additional_card_payment_proof:{name:"Additional Card Payment Proof",id:"additional_card_payment_proof",items:[{id:"card_payment_proof_2",name:"Card Payment Proof"},{id:"card_payment_proof_3",name:"Card Payment Proof"},{id:"card_payment_proof_4",name:"Card Payment Proof"},{id:"card_payment_proof_5",name:"Card Payment Proof"}]}}},34753:function(e,t){"use strict";t.Z={project:{AGRA:"agra",HAJIPUR:"hajipur",HYDERABAD:"hyderabad"},role:{ADMIN:"ADMIN",AGENT:"AGENT",USER:"USER"},membership:{ADVANCE:"ADVANCE",BASIC:"BASIC"},status:{AGENT_APPROVED:"AGENT_APPROVED",APPROVED:"APPROVED",NOT_INITIALIZED:"NOT_INITIALIZED",ONGOING:"ONGOING",PENDING:"PENDING",REJECTED:"REJECTED",SUBMITTED:"SUBMITTED"},amount:{beforeFifteenthAugustBasicAmount:1e3,beforeFifteenthAugustAdvanceAmount:1e5,afterFifteenthAugustBasicAmount:2e3,afterFifteenthAugustAdvanceAmount:2e5}}},81118:function(e,t){"use strict";t.Z=function(e,t){var n=[];return e.map((function(e){t.id===(null===e||void 0===e?void 0:e.id)?n.push(t):n.push(e)})),n}},29792:function(e,t,n){"use strict";var a=n(47568),o=n(97582),i=n(5121),r=function(){var e=(0,a.Z)((function(e){var t,n;return(0,o.__generator)(this,(function(a){switch(a.label){case 0:(t=new FormData).append("document",e),console.log("img",e,"form",t),a.label=1;case 1:return a.trys.push([1,3,,4]),console.log("NEXR","https://kycramaerabackend.ramaera.com"),[4,i.Z.post("".concat("https://kycramaerabackend.ramaera.com","/documents/upload"),t,{headers:{"Content-Type":"multipart/form-data"}})];case 2:return[2,a.sent().data.url];case 3:return n=a.sent(),console.log(n),[3,4];case 4:return[2]}}))}));return function(t){return e.apply(this,arguments)}}();t.Z=r}},function(e){e.O(0,[2005,1385,400,9260,9213,4753,6827,6549,7058,788,8584,8764,5121,2659,6376,1248,9774,2888,179],(function(){return t=63089,e(e.s=t);var t}));var t=e.O();_N_E=t}]);