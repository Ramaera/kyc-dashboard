(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4229],{58506:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/Tabs/Nominee",function(){return n(37254)}])},37254:function(e,t,n){"use strict";n.r(t);var a=n(47568),o=n(26042),i=n(69396),s=n(828),d=n(97582),r=n(85893),m=n(4749),c=n(44709),u=n(34753),l=n(26183),_=n(89448),p=n(29792),y=n(50319),P=n(8987),f=n(15861),h=n(86886),v=n(50135),A=n(11057),D=n(87357),g=(n(68680),n(3924),n(72484),n(67294)),E=n(86501);t.default=function(){var e=(0,l.T)(),t=(0,l.C)((function(e){var t;return null===(t=e.user)||void 0===t?void 0:t.data})),n=(0,g.useState)(""),Z=n[0],j=n[1],b=(0,g.useState)(""),N=b[0],R=b[1],x=(0,g.useState)(!1),k=x[0],C=x[1],O=(0,s.Z)((0,y.D)(m.Is),1)[0],T=(0,s.Z)((0,y.D)(m.yW),1)[0],U=(0,s.Z)((0,y.D)(m.su),1)[0],I=(0,g.useState)(!1),S=I[0],V=I[1],w=(0,g.useState)(!1),B=w[0],L=w[1],F=(0,g.useState)(null),G=F[0],H=F[1],J=(0,g.useState)(null),M=J[0],W=J[1],X=(0,g.useState)(!1),z=X[0],K=X[1],q=(0,g.useState)(),Q=q[0],Y=q[1],$=(0,g.useState)(),ee=$[0],te=$[1],ne=function(){var n=(0,a.Z)((function(n,a,s){var r;return(0,d.__generator)(this,(function(d){switch(d.label){case 0:return[4,T({variables:{id:n,title:s,url:a}})];case 1:return r=d.sent(),e((0,_.j2)(function(e,n){var a,s=t,d=[];return null===t||void 0===t||null===(a=t.documents)||void 0===a||a.map((function(t){t.id===e?d.push((0,i.Z)((0,o.Z)({},t),{url:n})):d.push(t)})),(0,i.Z)((0,o.Z)({},s),{documents:d})}(n,a))),[2,r]}}))}));return function(e,t,a){return n.apply(this,arguments)}}(),ae=function(){var e=(0,a.Z)((function(e,t){return(0,d.__generator)(this,(function(n){switch(n.label){case 0:return[4,O({variables:{title:t,url:e}})];case 1:return[2,n.sent()]}}))}));return function(t,n){return e.apply(this,arguments)}}(),oe=function(){var e=(0,a.Z)((function(e){var t,n,a;return(0,d.__generator)(this,(function(o){switch(o.label){case 0:return(e?S:B)?(t=e?Q:ee,n=e?c.Z.nominee_aadhar.items[0].id:c.Z.nominee_aadhar.items[1].id,a="","nominee_aadhar_front"!==n?[3,2]:[4,(0,p.Z)(G)]):[2];case 1:return a=o.sent(),E.ZP.success("Nominee Aadhar Front Updated"),[3,4];case 2:return[4,(0,p.Z)(M)];case 3:a=o.sent(),E.ZP.success("Nominee Aadhar Back Updated"),o.label=4;case 4:return t?[4,ne(t.id,a,n)]:[3,6];case 5:return o.sent(),[3,8];case 6:return[4,ae(a,n)];case 7:o.sent(),o.label=8;case 8:return[2]}}))}));return function(t){return e.apply(this,arguments)}}(),ie=function(){var n=(0,a.Z)((function(){var n;return(0,d.__generator)(this,(function(a){switch(a.label){case 0:if(!(Z?N?Q||S?!(!ee&&!B)||(alert("Please Select Nominee Aadhar Back"),null):(alert("Please Select Nominee Aadhar Front"),null):(alert("Please Enter Nominee Relation"),null):(alert("Please Enter Nominee Name"),null)))return[2];C(!0),a.label=1;case 1:return a.trys.push([1,6,,7]),[4,U({variables:{name:Z,relationship:N}})];case 2:return a.sent(),[4,e((0,_.j2)((0,i.Z)((0,o.Z)({},t),{nominee:(0,i.Z)((0,o.Z)({},null===t||void 0===t?void 0:t.nominee),{name:Z,relationship:N})})))];case 3:return a.sent(),[4,oe(!0)];case 4:return a.sent(),[4,oe(!1)];case 5:return a.sent(),E.ZP.success("Nominee Updated Succesfully"),[3,7];case 6:return n=a.sent(),console.log(n),[3,7];case 7:return C(!1),[2]}}))}));return function(){return n.apply(this,arguments)}}();return(0,g.useEffect)((function(){var e,n;t&&((null===t||void 0===t?void 0:t.nominee)&&(j(null===t||void 0===t?void 0:t.nominee.name),R(null===t||void 0===t?void 0:t.nominee.relationship)),(null===t||void 0===t?void 0:t.documents)&&(null===t||void 0===t||null===(e=t.documents)||void 0===e?void 0:e.length)>0&&(null===t||void 0===t||null===(n=t.documents)||void 0===n||n.find((function(e){e.title.toLowerCase()===c.Z.nominee_aadhar.items[0].id?(Y(e),H(e.url)):e.title.toLowerCase()===c.Z.nominee_aadhar.items[1].id&&(W(e.url),te(e))}))))}),[t]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.Z,{variant:"h4",sx:{my:2},children:"Kindly Fill the form to enlist nominee"}),(0,r.jsxs)(h.ZP,{container:!0,spacing:2,children:[(0,r.jsx)(h.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,r.jsx)(v.Z,{id:"outlined",label:"Full Name*",disabled:(null===t||void 0===t?void 0:t.kyc)===u.Z.status.APPROVED,fullWidth:!0,value:Z,variant:"outlined",onChange:function(e){j(e.target.value),K(!0)}})}),(0,r.jsx)(h.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,r.jsx)(v.Z,{label:"Relationship",variant:"outlined",disabled:(null===t||void 0===t?void 0:t.kyc)===u.Z.status.APPROVED,fullWidth:!0,value:N,onChange:function(e){R(e.target.value),K(!0)}})})]}),(0,r.jsxs)(h.ZP,{container:!0,pt:1,pb:2,spacing:15,children:[(0,r.jsxs)(h.ZP,{item:!0,xs:12,sm:6,md:4,lg:3.5,children:[G?(0,r.jsx)("img",{src:"object"==typeof G?URL.createObjectURL(G):G,height:180}):null,Q&&Q.status&&(0,r.jsxs)(f.Z,{variant:"h4",sx:{my:2},children:["Status :"," ",(0,r.jsxs)("span",{style:{color:Q?"APPROVED"===Q.status?"green":"REJECTED"===Q.status&&"red":""},children:[" ",Q&&Q.status]})]}),(null===t||void 0===t?void 0:t.kyc)!==u.Z.status.APPROVED&&(0,r.jsxs)(A.Z,{variant:"contained",style:{cursor:Q&&"APPROVED"===Q.status?"not-allowed":"pointer"},component:"label",color:Q&&"APPROVED"===Q.status?"secondary":"primary",children:["Upload Aadhar Card Front",(0,r.jsx)("input",{type:"file",accept:"image/*",hidden:!0,disabled:!!Q&&"APPROVED"===Q.status,onChange:function(e){e.target.files.length>0&&(H(e.target.files[0]),V(!0),K(!0))}})]})]}),(0,r.jsxs)(h.ZP,{item:!0,xs:12,sm:6,ml:1,md:4,lg:3.5,children:[M?(0,r.jsx)("img",{src:"object"==typeof M?URL.createObjectURL(M):M,height:180}):null,ee&&ee.status&&(0,r.jsxs)(f.Z,{variant:"h4",sx:{my:2},children:["Status :"," ",(0,r.jsx)("span",{style:{color:ee?"APPROVED"===ee.status?"green":"REJECTED"===ee.status&&"red":""},children:ee&&ee.status})]}),(null===t||void 0===t?void 0:t.kyc)!==u.Z.status.APPROVED&&(0,r.jsxs)(A.Z,{variant:"contained",style:{cursor:ee&&"APPROVED"===ee.status?"not-allowed":"pointer"},component:"label",color:ee&&"APPROVED"===ee.status?"secondary":"primary",children:["Upload Aadhar Card Back",(0,r.jsx)("input",{type:"file",accept:"image/*",hidden:!0,disabled:!!Q&&"APPROVED"===Q.status,onChange:function(e){e.target.files.length>0&&(W(e.target.files[0]),L(!0),K(!0))}})]})]})]}),"APPROVED"===(null===t||void 0===t?void 0:t.kyc)?null:(0,r.jsx)(h.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,r.jsxs)(D.Z,{component:"form",mt:2,children:[(0,r.jsx)(P.Z,{loading:k,variant:"contained",component:"label",disabled:!z,onClick:function(){ie()},children:"Submit"}),(0,r.jsx)(E.x7,{position:"bottom-center",reverseOrder:!1})]})})]})}},44709:function(e,t){"use strict";t.Z={aadhar:{id:"aadhar",name:"Aadhar Card",status:"",items:[{id:"aadhar_front",name:"AADHAR Card Front",status:""},{id:"aadhar_back",name:"AADHAR Card Back",status:""}]},pancard:{id:"pancard",name:"Pancard",status:"",items:[{id:"pancard",name:"Pan Card",status:""}]},avatar:{id:"photo",name:"Photo",status:"",items:[{id:"avatar",name:"Passport Size Photo",status:""}]},voterId:{id:"voterId",name:"Voter Id Card",status:"Not Uploaded",items:[{id:"voterid_front",name:"Voter Id Front",status:""},{id:"voterid_back",name:"Voted Id Card Back",status:""}]},passbook:{name:"Passbook  or Bank Statement",id:"passbook",status:"Not Uploaded",items:[{id:"passbook",name:"Bank Passbook Or Bank Statement",status:"Not Uploaded"}]},payment_proof:{name:"Payment Proof",id:"payment_proof",status:"Not Uploaded",items:[{id:"payment_proof",name:"Payment Proof"}]},agency_payment_proof:{name:"Agency Payment Proof",id:"agency_payment_proof",status:"Not Uploaded",items:[{id:"agency_payment_proof",name:"Agency Payment Proof"}]},upgrade_agency_license_payment_proof_documents:{name:"Upgrade Agency License Payment Proof",id:"upgrade_agency_license_payment_proof",items:[{id:"upgrade_agency_license_payment_proof2",name:"Upgrade Agency License Payment Proof"},{id:"upgrade_agency_license_payment_proof3",name:"Upgrade Agency License Payment Proof"},{id:"upgrade_agency_license_payment_proof4",name:"Upgrade Agency License Payment Proof"},{id:"upgrade_agency_license_payment_proof5",name:"Upgrade Agency License Payment Proof"}]},additional_payment_documents:{name:"Additional Payment Document",id:"additional_payment_doc",items:[{id:"additional_payment_doc2",name:"Payment Document"},{id:"additional_payment_doc3",name:"Payment Document"},{id:"additional_payment_doc4",name:"Payment Document"},{id:"additional_payment_doc5",name:"Payment Document"}]},to_advance_payment_proof:{name:"To Advance Payment Proof",id:"to_advance_payment_proof",status:"Not Uploaded",items:[{id:"to_advance_payment_proof",name:"To Advance Payment Proof"}]},to_advance_additional_documents:{name:"To Advance Additional Payment Document",id:"to_advance_additional_payment_doc",items:[{id:"to_advance_additional_payment_doc2",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc3",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc4",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc5",name:"To Advance Payment Document"}]},driving_license:{name:"Driving License",id:"driving_license",status:"Not Uploaded",items:[{id:"driving_license_front",name:"Driving License Front",status:""},{id:"driving_license_back",name:"Driving License Back",status:""}]},nominee_aadhar:{name:"Nominee Aadhar",id:"nominee_aadhar",status:"Not Uploaded",items:[{id:"nominee_aadhar_front",name:"AADHAR Card Front",status:""},{id:"nominee_aadhar_back",name:"AADHAR Card Back",status:""}]},demat_document:{name:"Demat Document",id:"demat_document",status:"Not Uploaded",items:[{id:"demat_document",name:"Demat Document",status:""}]},additional_demat_documents:{name:"Additional Demat Document",id:"additional_demat_documents",items:[{id:"demat_document_2",name:"Demat Document"},{id:"demat_document_3",name:"Demat Document"},{id:"demat_document_4",name:"Demat Document"},{id:"demat_document_5",name:"Demat Document"}]},project_payment:{name:"Project Payment",id:"project_payment",items:[{id:"project_payment_1",name:"Payment Document"},{id:"project_payment_2",name:"Payment Document"},{id:"project_payment_3",name:"Payment Document"},{id:"project_payment_4",name:"Payment Document"},{id:"project_payment_5",name:"Payment Document"},{id:"project_payment_6",name:"Payment Document"},{id:"project_payment_7",name:"Payment Document"},{id:"project_payment_8",name:"Payment Document"},{id:"project_payment_9",name:"Payment Document"},{id:"project_payment_10",name:"Payment Document"},{id:"project_payment_11",name:"Payment Document"}]}}},34753:function(e,t){"use strict";t.Z={project:{AGRA:"agra",HAJIPUR:"hajipur"},role:{ADMIN:"ADMIN",AGENT:"AGENT",USER:"USER"},membership:{ADVANCE:"ADVANCE",BASIC:"BASIC"},status:{AGENT_APPROVED:"AGENT_APPROVED",APPROVED:"APPROVED",NOT_INITIALIZED:"NOT_INITIALIZED",ONGOING:"ONGOING",PENDING:"PENDING",REJECTED:"REJECTED",SUBMITTED:"SUBMITTED"},amount:{beforeFifteenthAugustBasicAmount:1e3,beforeFifteenthAugustAdvanceAmount:1e5,afterFifteenthAugustBasicAmount:2e3,afterFifteenthAugustAdvanceAmount:2e5}}},29792:function(e,t,n){"use strict";var a=n(47568),o=n(97582),i=n(6154),s=function(){var e=(0,a.Z)((function(e){var t;return(0,o.__generator)(this,(function(n){switch(n.label){case 0:return(t=new FormData).append("document",e),[4,i.Z.post("".concat("https://kycramaerabackend.ramaera.com","/documents/upload"),t,{headers:{"Content-Type":"multipart/form-data"}})];case 1:return[2,n.sent().data.url]}}))}));return function(t){return e.apply(this,arguments)}}();t.Z=s}},function(e){e.O(0,[2005,8244,9990,9260,9213,4753,6827,6549,7058,788,8584,8764,1959,2659,3456,9774,2888,179],(function(){return t=58506,e(e.s=t);var t}));var t=e.O();_N_E=t}]);