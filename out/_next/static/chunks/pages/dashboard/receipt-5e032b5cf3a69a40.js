(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6329],{50848:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/receipt",function(){return n(21407)}])},21407:function(e,t,n){"use strict";n.r(t);var a=n(14924),o=n(85893),d=n(91875),i=n(9395),m=n(2734),r=n(53156),c=n(66242),u=n(78445),s=n(67720),p=n(15861),_=n(86886),l=n(9008),y=n.n(l),f=n(43725),v=n(9473),A=n(47318),P=n(44709);function g(){var e=(0,v.v9)((function(e){var t;return null===(t=e.user)||void 0===t?void 0:t.data})),t=(0,m.Z)();return(0,o.jsxs)(f.default,{children:[(0,o.jsx)(y(),{children:(0,o.jsx)("title",{children:"KYC | Receipt"})}),(0,o.jsx)(r.Z,{maxWidth:!1,sx:{mt:2},children:(0,o.jsxs)(c.Z,{variant:"outlined",children:[(0,o.jsx)(u.Z,{title:"RECEIPT",sx:{ml:2,textTransform:"uppercase"}}),(0,o.jsx)(s.Z,{sx:{mb:2}}),(0,o.jsx)(p.Z,{ml:4,mb:2,children:"*If any of the receipt is not accurate or not present, contact our KYC EXECUTIVES immediately."}),(0,o.jsx)(_.ZP,{container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",spacing:0,children:(0,o.jsx)(_.ZP,{item:!0,xs:12,paddingX:6,sx:(0,a.Z)({},t.breakpoints.down("sm"),{paddingX:"9px"}),children:function(){var t=[],n=null===e||void 0===e?void 0:e.documents.filter((function(e){return e.title.includes("payment_proof")||e.title.includes("additional_payment")})),a=null===e||void 0===e?void 0:e.documents.filter((function(e){return e.title.includes("hajipur_project")})),d=null===e||void 0===e?void 0:e.documents.filter((function(e){return e.title.includes("agra_project")}));return a.map((function(n,a){return t.push((0,o.jsx)(A.default,{receiptSerialNumber:e.pw_id+"/Hajipur/"+"".concat(a+1),date:(null===n||void 0===n?void 0:n.createdAt.slice(0,10).split("-")[2])+"-"+(null===n||void 0===n?void 0:n.createdAt.slice(0,10).split("-")[1])+"-"+(null===n||void 0===n?void 0:n.createdAt.slice(0,10).split("-")[0]),recievedFrom:(null===e||void 0===e?void 0:e.name)||"",identityNumber:e.rm_id+"/"+e.pw_id,amount:n.amount,project_name:"Hajipur Project",amountPaidFor:n.title!==P.Z.payment_proof||2e3!==n.amount&&1e3!==n.amount?n.title!==P.Z.payment_proof||2e5!==n.amount&&1e5!==n.amount?n.title.includes("project")&&"project":"advance":"basic",paymentSource:"upi",utrNumber:n.utrNo||"",receivedBy:"RAMAERA INDUSTRIES LTD. (Account Dept.)",AgencyCode:"NULL"===e.referralAgencyCode?"":e.referralAgencyCode?e.referralAgencyCode:""},n.id))})),d.map((function(n,a){return t.push((0,o.jsx)(A.default,{receiptSerialNumber:e.pw_id+"/Agra/"+"".concat(a+1),date:(null===n||void 0===n?void 0:n.createdAt.slice(0,10).split("-")[2])+"-"+(null===n||void 0===n?void 0:n.createdAt.slice(0,10).split("-")[1])+"-"+(null===n||void 0===n?void 0:n.createdAt.slice(0,10).split("-")[0]),recievedFrom:(null===e||void 0===e?void 0:e.name)||"",identityNumber:e.rm_id+"/"+e.pw_id,amount:n.amount,project_name:"Agra Project",amountPaidFor:n.title!==P.Z.payment_proof||2e3!==n.amount&&1e3!==n.amount?n.title!==P.Z.payment_proof||2e5!==n.amount&&1e5!==n.amount?n.title.includes("project")&&"project":"advance":"basic",paymentSource:"upi",utrNumber:n.utrNo||"",receivedBy:"RAMAERA INDUSTRIES LTD. (Account Dept.)",AgencyCode:"NULL"===e.referralAgencyCode?"":e.referralAgencyCode?e.referralAgencyCode:""},n.id))})),n.map((function(n,a){return t.push((0,o.jsx)(A.default,{id:n.id,receiptSerialNumber:e.pw_id+"/KYC/"+"".concat(a+1),date:null===n||void 0===n?void 0:n.createdAt.slice(0,10),recievedFrom:(null===e||void 0===e?void 0:e.name)||"",identityNumber:e.rm_id+"/"+e.pw_id,amount:n.amount,project_name:"Industrial Project",amountPaidFor:n.title!==P.Z.payment_proof||2e3!==n.amount&&1e3!==n.amount?n.title!==P.Z.payment_proof||2e5!==n.amount&&1e5!==n.amount?n.title.includes("project")&&"project":"advance":"basic",paymentSource:"upi",utrNumber:n.utrNo||"",receivedBy:"RAMAERA INDUSTRIES LTD. (Account Dept.)",AgencyCode:"NULL"===e.referralAgencyCode?"":e.referralAgencyCode?e.referralAgencyCode:""}))})),t}()})})]})}),(0,o.jsx)(d.Z,{})]})}g.getLayout=function(e){return(0,o.jsx)(i.Z,{children:e})},t.default=g},43725:function(e,t,n){"use strict";n.r(t);var a=n(85893);t.default=function(e){var t=e.children;return(0,a.jsx)(a.Fragment,{children:t})}},91875:function(e,t,n){"use strict";var a=n(85893),o=n(90948),d=n(53156),i=n(87357),m=n(15861),r=(0,o.ZP)(d.Z)((function(e){var t=e.theme;return"\n        margin-top: ".concat(t.spacing(4),";\n")}));t.Z=function(){return(0,a.jsx)(r,{className:"footer-wrapper",children:(0,a.jsxs)(i.Z,{pb:4,display:{xs:"block",md:"flex"},alignItems:"center",textAlign:{xs:"center",md:"left"},justifyContent:"space-between",children:[(0,a.jsx)(i.Z,{}),(0,a.jsx)(m.Z,{sx:{pt:{xs:2,md:0}},variant:"subtitle1"})]})})}},44709:function(e,t){"use strict";t.Z={aadhar:{id:"aadhar",name:"Aadhar Card",status:"",items:[{id:"aadhar_front",name:"AADHAR Card Front",status:""},{id:"aadhar_back",name:"AADHAR Card Back",status:""}]},pancard:{id:"pancard",name:"Pancard",status:"",items:[{id:"pancard",name:"Pan Card",status:""}]},avatar:{id:"photo",name:"Photo",status:"",items:[{id:"avatar",name:"Passport Size Photo",status:""}]},voterId:{id:"voterId",name:"Voter Id Card",status:"Not Uploaded",items:[{id:"voterid_front",name:"Voter Id Front",status:""},{id:"voterid_back",name:"Voted Id Card Back",status:""}]},passbook:{name:"Passbook  or Bank Statement",id:"passbook",status:"Not Uploaded",items:[{id:"passbook",name:"Bank Passbook Or Bank Statement",status:"Not Uploaded"}]},payment_proof:{name:"Payment Proof",id:"payment_proof",status:"Not Uploaded",items:[{id:"payment_proof",name:"Payment Proof"}]},agency_payment_proof:{name:"Agency Payment Proof",id:"agency_payment_proof",status:"Not Uploaded",items:[{id:"agency_payment_proof",name:"Agency Payment Proof"}]},upgrade_agency_license_payment_proof_documents:{name:"Upgrade Agency License Payment Proof",id:"upgrade_agency_license_payment_proof",items:[{id:"upgrade_agency_license_payment_proof2",name:"Upgrade Agency License Payment Proof"},{id:"upgrade_agency_license_payment_proof3",name:"Upgrade Agency License Payment Proof"},{id:"upgrade_agency_license_payment_proof4",name:"Upgrade Agency License Payment Proof"},{id:"upgrade_agency_license_payment_proof5",name:"Upgrade Agency License Payment Proof"}]},additional_payment_documents:{name:"Additional Payment Document",id:"additional_payment_doc",items:[{id:"additional_payment_doc2",name:"Payment Document"},{id:"additional_payment_doc3",name:"Payment Document"},{id:"additional_payment_doc4",name:"Payment Document"},{id:"additional_payment_doc5",name:"Payment Document"}]},to_advance_payment_proof:{name:"To Advance Payment Proof",id:"to_advance_payment_proof",status:"Not Uploaded",items:[{id:"to_advance_payment_proof",name:"To Advance Payment Proof"}]},to_advance_additional_documents:{name:"To Advance Additional Payment Document",id:"to_advance_additional_payment_doc",items:[{id:"to_advance_additional_payment_doc2",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc3",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc4",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc5",name:"To Advance Payment Document"}]},driving_license:{name:"Driving License",id:"driving_license",status:"Not Uploaded",items:[{id:"driving_license_front",name:"Driving License Front",status:""},{id:"driving_license_back",name:"Driving License Back",status:""}]},nominee_aadhar:{name:"Nominee Aadhar",id:"nominee_aadhar",status:"Not Uploaded",items:[{id:"nominee_aadhar_front",name:"AADHAR Card Front",status:""},{id:"nominee_aadhar_back",name:"AADHAR Card Back",status:""}]},demat_document:{name:"Demat Document",id:"demat_document",status:"Not Uploaded",items:[{id:"demat_document",name:"Demat Document",status:""}]},additional_demat_documents:{name:"Additional Demat Document",id:"additional_demat_documents",items:[{id:"demat_document_2",name:"Demat Document"},{id:"demat_document_3",name:"Demat Document"},{id:"demat_document_4",name:"Demat Document"},{id:"demat_document_5",name:"Demat Document"}]},project_payment:{name:"Project Payment",id:"project_payment",items:[{id:"project_payment_1",name:"Payment Document"},{id:"project_payment_2",name:"Payment Document"},{id:"project_payment_3",name:"Payment Document"},{id:"project_payment_4",name:"Payment Document"},{id:"project_payment_5",name:"Payment Document"},{id:"project_payment_6",name:"Payment Document"},{id:"project_payment_7",name:"Payment Document"},{id:"project_payment_8",name:"Payment Document"},{id:"project_payment_9",name:"Payment Document"},{id:"project_payment_10",name:"Payment Document"},{id:"project_payment_11",name:"Payment Document"}]}}}},function(e){e.O(0,[5443,7847,8244,9990,9260,9213,4753,6827,6549,1989,456,5571,7924,886,3778,5483,9395,7318,9774,2888,179],(function(){return t=50848,e(e.s=t);var t}));var t=e.O();_N_E=t}]);