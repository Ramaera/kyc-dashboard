(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5052],{2963:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/Tabs/Demat",function(){return n(50091)}])},50091:function(t,e,n){"use strict";n.r(e),n.d(e,{rows:function(){return C}});var a=n(47568),o=n(14924),i=n(26042),r=n(69396),d=n(828),s=n(29815),c=n(97582),u=n(85893),l=n(4749),m=n(44709),p=n(26183),f=n(89448),v=n(29792),_=n(50319),h=n(8987),y=n(2734),g=n(87357),D=n(11057),P=n(15861),x=n(53816),Z=n(53252),b=n(86886),j=n(50135),A=n(67294),k=n(86501),C=[{config:m.Z.additional_demat_documents}],w=function(t){var e=t.data,n=t.documents,m=void 0===n?[]:n,b=t.user,j=t.rowNo,C=t.hideAdditionalDocuments,w=(0,y.Z)(),E=(0,A.useState)([]),R=E[0],T=E[1],S=(0,A.useState)([]),O=S[0],N=S[1],L=(0,A.useState)(j),U=L[0],V=L[1],B=(0,d.Z)((0,_.D)(l.Is),1)[0],F=(0,d.Z)((0,_.D)(l.yW),1)[0],I=(0,A.useState)(!1),W=I[0],H=I[1],J=(0,A.useState)([]),X=J[0],z=(J[1],(0,p.T)());(0,A.useEffect)((function(){var t=[],e=!0,n=!1,a=void 0;try{for(var o,i=m[Symbol.iterator]();!(e=(o=i.next()).done);e=!0){var r=o.value;t.push(r.url)}}catch(d){n=!0,a=d}finally{try{e||null==i.return||i.return()}finally{if(n)throw a}}T(t)}),[m,b]);var G=function(){var t=(0,a.Z)((function(t,e){return(0,c.__generator)(this,(function(n){switch(n.label){case 0:return[4,B({variables:{title:t,url:e}})];case 1:return[2,n.sent()]}}))}));return function(e,n){return t.apply(this,arguments)}}(),K=function(){var t=(0,a.Z)((function(t,e,n){return(0,c.__generator)(this,(function(a){switch(a.label){case 0:return[4,F({variables:{id:t,title:e,url:n}})];case 1:return[2,a.sent()]}}))}));return function(e,n,a){return t.apply(this,arguments)}}(),M=function(t){var e=!1;return null===X||void 0===X||X.map((function(n){t===n.id&&(e=n.status)})),e},q=function(t,e,n){var a,o=b,d=[];return null===b||void 0===b||null===(a=b.documents)||void 0===a||a.map((function(n){n.id===t?d.push((0,r.Z)((0,i.Z)({},n),{title:"avatar"})):n.title!==e&&d.push(n)})),(0,r.Z)((0,i.Z)({},o),{documents:d})},Q=function(){var t=(0,a.Z)((function(){var t,n,a;return(0,c.__generator)(this,(function(o){switch(o.label){case 0:H(!0),o.label=1;case 1:o.trys.push([1,6,,7]),t=function(t){var n,a,o,r,d,u,l,p;return(0,c.__generator)(this,(function(c){switch(c.label){case 0:return O[t]?(n=e.config.items[t].id,[4,(0,v.Z)(R[t])]):[3,7];case 1:return a=c.sent(),o=m.find((function(t){if(t.title.toLowerCase()===n.toLowerCase())return!0})),(r=null===b||void 0===b?void 0:b.documents)||(r=[]),o?[4,K(o.id,n,a)]:[3,4];case 2:return d=c.sent(),[4,z((0,f.j2)(q(o.id,n)))];case 3:return c.sent(),k.ZP.success("".concat(n," Uploaded")),(u=r.filter((function(t){return t.id!==document.id}))).push(d.data.updateDocument),r=u,[3,6];case 4:return[4,G(n,a)];case 5:l=c.sent(),k.ZP.success("Document Uploaded"),r=(0,s.Z)(r).concat([l.data.createDocument]),c.label=6;case 6:(p=(0,i.Z)({},b)).documents=r,z((0,f.j2)(p)),c.label=7;case 7:return[2]}}))},n=0,o.label=2;case 2:return n<U?[5,(0,c.__values)(t(n))]:[3,5];case 3:o.sent(),o.label=4;case 4:return n++,[3,2];case 5:return[3,7];case 6:return a=o.sent(),console.log("error",a),[3,7];case 7:return H(!1),[2]}}))}));return function(){return t.apply(this,arguments)}}();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(g.Z,{sx:(0,o.Z)({border:"none",fontWeight:800},w.breakpoints.down("sm"),{textAlign:"center"}),children:[e.config.name," ",e.isOptional?"(Optional)":""]}),(0,u.jsxs)(x.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,u.jsx)(Z.Z,{sx:(0,o.Z)({display:"flex",flexDirection:"column",border:"none"},w.breakpoints.down("sm"),{paddingRight:0}),children:function(){for(var t=[],n=(e.config.items,0);n<U;n++){var a=R[n];a&&t.push((0,u.jsx)("div",{style:{marginTop:15},children:(0,u.jsx)("img",{src:"object"==typeof a?URL.createObjectURL(a):a,height:150,style:{marginLeft:"5px"}})}))}return 0==t.length?(0,u.jsx)(P.Z,{variant:"subtitle1",children:"No Document"}):t}()}),(0,u.jsx)(Z.Z,{style:{border:"none"},children:function(){for(var t=function(t){var e,i,r,d,c,l,p;n.push((0,u.jsxs)(g.Z,{sx:(0,o.Z)({height:160,marginTop:1,marginLeft:1,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start"},w.breakpoints.down("sm"),{marginLeft:0,marginTop:2}),children:[(0,u.jsxs)(g.Z,{sx:(0,o.Z)({marginBottom:"10px",marginLeft:"15px"},w.breakpoints.down("sm"),{marginBottom:"0px"}),children:["Status:"," ",(0,u.jsx)("span",{style:{color:"APPROVED"===M(null===(e=m[t])||void 0===e?void 0:e.id)?"green":"REJECTED"===M(null===(i=m[t])||void 0===i?void 0:i.id)?"red":m[t]?"APPROVED"===m[t].status?"green":"REJECTED"===m[t].status&&"red":""},children:M(null===(r=m[t])||void 0===r?void 0:r.id)||(null===(d=m[t])||void 0===d?void 0:d.status)||"NOT STARTED"})]}),(0,u.jsxs)(D.Z,{style:{cursor:m[t]&&"APPROVED"===m[t].status?"not-allowed":"pointer",marginTop:"10px"},disabled:"APPROVED"===M(null===(c=m[t])||void 0===c?void 0:c.id)||"APPROVED"==(null===(l=m[t])||void 0===l?void 0:l.status),component:"label",color:m[t]&&"APPROVED"===m[t].status?"secondary":"primary",children:["Choose ",null===(p=a[t])||void 0===p?void 0:p.name,(0,u.jsx)("input",{type:"file",accept:"image/*",hidden:!0,disabled:!!m[t]&&"APPROVED"===m[t].status,onChange:function(e){if(e.target.files.length>0){var n=(0,s.Z)(R);n[t]=e.target.files[0],T(n);var a=(0,s.Z)(O);a[t]=!0,N(a)}}})]})]}))},n=[],a=e.config.items,i=0;i<U;i++)t(i);return n}()})]},e.config.name),U<=3&&(0,u.jsx)(h.Z,{variant:"contained",disabled:R.length!==U,onClick:function(){V(U+1)},children:"Add More"}),(0,u.jsx)(h.Z,{sx:{marginLeft:1},variant:"contained",onClick:C,children:"Go Back"}),(0,u.jsx)(h.Z,{sx:{marginLeft:1},loading:W,variant:"contained",onClick:function(){Q()},children:"Upload"}),(0,u.jsx)(k.x7,{position:"bottom-center",reverseOrder:!1})]})};e.default=function(){var t=(0,p.T)(),e=(0,p.C)((function(t){var e;return null===(e=t.user)||void 0===e?void 0:e.data})),n=(0,A.useState)(null),o=n[0],s=n[1],y=(0,A.useState)(null),x=y[0],Z=y[1],E=(0,A.useState)(0),R=E[0],T=E[1],S=(0,A.useState)(!1),O=S[0],N=S[1],L=(0,A.useState)(),U=L[0],V=L[1],B=(0,A.useState)(!1),F=B[0],I=B[1],W=(0,A.useState)(!1),H=W[0],J=W[1],X=(0,A.useState)(!1),z=X[0],G=X[1],K=(0,d.Z)((0,_.D)(l.Is),1)[0],M=(0,d.Z)((0,_.D)(l.yW),1)[0],q=(0,d.Z)((0,_.D)(l.v9),1)[0],Q=(0,A.useState)(!1),Y=Q[0],$=Q[1],tt=function(t){var n=[];if(e&&(null===e||void 0===e?void 0:e.documents)){var a=!0,o=!1,i=void 0;try{for(var r,d=function(){var t,a=r.value,o=null===e||void 0===e||null===(t=e.documents)||void 0===t?void 0:t.find((function(t){if(t.title.toLowerCase()===a.id.toLowerCase())return!0}));o&&n.push(o)},s=t[Symbol.iterator]();!(a=(r=s.next()).done);a=!0)d()}catch(c){o=!0,i=c}finally{try{a||null==s.return||s.return()}finally{if(o)throw i}}}return n},et=function(){var n=(0,a.Z)((function(){var n,a,d,u;return(0,c.__generator)(this,(function(c){switch(c.label){case 0:if(n=function(t){return!!t||(alert("Invalid Image"),!1)}(x),!n)return[2];J(!0),c.label=1;case 1:return c.trys.push([1,12,,13]),o?[4,q({variables:{demat_account:o}})]:[3,4];case 2:return c.sent(),[4,t((0,f.j2)((0,r.Z)((0,i.Z)({},e),{demat_account:o})))];case 3:c.sent(),c.label=4;case 4:return d="",F?[4,(0,v.Z)(x)]:[3,6];case 5:return d=c.sent(),[3,7];case 6:d=x,c.label=7;case 7:return e&&s(null===e||void 0===e?void 0:e.demat_account),e&&(null===e||void 0===e?void 0:e.documents)&&(null===e||void 0===e||null===(a=e.documents)||void 0===a?void 0:a.length)>0&&(null===e||void 0===e||null===(u=e.documents)||void 0===u||u.find((function(t){t.title.toLowerCase()===m.Z.demat_document.items[0].id&&(V(t),Z(t.url))}))),U?[4,M({variables:{title:m.Z.demat_document.items[0].id,url:d,id:U.id}})]:[3,9];case 8:return c.sent(),k.ZP.success("Demat Details Updated "),G(!1),t((0,f.j2)(function(t,n,a){var o,d=e,s=[];return null===e||void 0===e||null===(o=e.documents)||void 0===o||o.map((function(e){e.id===t?s.push((0,r.Z)((0,i.Z)({},e),{url:n})):s.push(e)})),(0,r.Z)((0,i.Z)({},d),{documents:s,demat_account:a})}(U.id,d,o))),[3,11];case 9:return[4,K({variables:{title:m.Z.demat_document.items[0].id,url:d}})];case 10:c.sent(),k.ZP.success("Demat Details Updated "),G(!1),N(!0),c.label=11;case 11:return[3,13];case 12:return c.sent(),[3,13];case 13:return J(!1),[2]}}))}));return function(){return n.apply(this,arguments)}}();(0,A.useEffect)((function(){var t,n;(e&&s(null===e||void 0===e?void 0:e.demat_account),e&&(null===e||void 0===e?void 0:e.documents)&&(null===e||void 0===e||null===(t=e.documents)||void 0===t?void 0:t.length)>0)&&(null===e||void 0===e||null===(n=e.documents)||void 0===n||n.find((function(t){t.title.toLowerCase()===m.Z.demat_document.items[0].id&&(V(t),Z(t.url))})))}),[e]),(0,A.useEffect)((function(){!function(){var t,n=0;null===e||void 0===e||null===(t=e.documents)||void 0===t||t.map((function(t){t.title.includes("demat_document_")&&(n+=1),T(n)}))}()}),[]);var nt=function(){$(!1)};return(0,u.jsx)(u.Fragment,{children:Y?(0,u.jsx)(u.Fragment,{children:C.map((function(t,n){return(0,u.jsx)(w,{hideAdditionalDocuments:nt,data:t,rowNo:R,user:e,documents:tt(t.config.items)},n)}))}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(P.Z,{variant:"h4",sx:{my:2},children:"Kindly Fill the form add demat details"}),(0,u.jsx)(b.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,u.jsx)(j.Z,{id:"outlined",label:"Demat Account No.",fullWidth:!0,value:o,variant:"outlined",onChange:function(t){s(t.target.value),G(!0)}})}),x?(0,u.jsx)("img",{src:"object"==typeof x?URL.createObjectURL(x):x,style:{marginTop:"10px"},height:200}):null,U&&U.status&&(0,u.jsxs)(P.Z,{variant:"h4",sx:{mt:2},children:["Status :"," ",(0,u.jsxs)("span",{style:{color:U?"APPROVED"===U.status?"green":"REJECTED"===U.status&&"red":""},children:[" ",U&&U.status]})]}),(0,u.jsxs)(b.ZP,{container:!0,pt:3,pb:2,pr:2,spacing:2,children:[(0,u.jsx)(b.ZP,{item:!0,xs:12,sm:6,md:4,lg:3.5,children:(0,u.jsxs)(D.Z,{variant:"contained",style:{cursor:U&&"APPROVED"===U.status?"not-allowed":"pointer"},component:"label",color:U&&"APPROVED"===U.status?"secondary":"primary",children:["Upload Demat Account Details",(0,u.jsx)("input",{type:"file",accept:"image/*",hidden:!0,disabled:!!U&&"APPROVED"===U.status,onChange:function(t){t.target.files.length>0&&(Z(t.target.files[0]),I(!0),G(!0))}})]})}),(0,u.jsx)(b.ZP,{item:!0,xs:12,sm:6,md:4,lg:3.5,children:(0,u.jsx)(g.Z,{component:"form",children:(0,u.jsx)(h.Z,{loading:H,fullWidth:!0,disabled:!z,variant:"contained",onClick:function(){et()},children:"Submit"})})}),(0,u.jsx)(k.x7,{position:"bottom-right",reverseOrder:!1})]}),(0,u.jsx)(b.ZP,{item:!0,xs:4}),O||U&&(0,u.jsx)(h.Z,{variant:"contained",onClick:function(){$(!0)},children:"Additional Documents"})]})})}},44709:function(t,e){"use strict";e.Z={aadhar:{id:"aadhar",name:"Aadhar Card",status:"",items:[{id:"aadhar_front",name:"AADHAR Card Front",status:""},{id:"aadhar_back",name:"AADHAR Card Back",status:""}]},pancard:{id:"pancard",name:"Pancard",status:"",items:[{id:"pancard",name:"Pan Card",status:""}]},avatar:{id:"photo",name:"Photo",status:"",items:[{id:"avatar",name:"Passport Size Photo",status:""}]},voterId:{id:"voterId",name:"Voter Id Card",status:"Not Uploaded",items:[{id:"voterid_front",name:"Voter Id Front",status:""},{id:"voterid_back",name:"Voted Id Card Back",status:""}]},passbook:{name:"Passbook  or Bank Statement",id:"passbook",status:"Not Uploaded",items:[{id:"passbook",name:"Bank Passbook Or Bank Statement",status:"Not Uploaded"}]},payment_proof:{name:"Payment Proof",id:"payment_proof",status:"Not Uploaded",items:[{id:"payment_proof",name:"Payment Proof"}]},agency_payment_proof:{name:"Agency Payment Proof",id:"agency_payment_proof",status:"Not Uploaded",items:[{id:"agency_payment_proof",name:"Agency Payment Proof"}]},additional_payment_documents:{name:"Additional Payment Document",id:"additional_payment_doc",items:[{id:"additional_payment_doc2",name:"Payment Document"},{id:"additional_payment_doc3",name:"Payment Document"},{id:"additional_payment_doc4",name:"Payment Document"},{id:"additional_payment_doc5",name:"Payment Document"}]},to_advance_payment_proof:{name:"To Advance Payment Proof",id:"to_advance_payment_proof",status:"Not Uploaded",items:[{id:"to_advance_payment_proof",name:"To Advance Payment Proof"}]},to_advance_additional_documents:{name:"To Advance Additional Payment Document",id:"to_advance_additional_payment_doc",items:[{id:"to_advance_additional_payment_doc2",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc3",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc4",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc5",name:"To Advance Payment Document"}]},driving_license:{name:"Driving License",id:"driving_license",status:"Not Uploaded",items:[{id:"driving_license_front",name:"Driving License Front",status:""},{id:"driving_license_back",name:"Driving License Back",status:""}]},nominee_aadhar:{name:"Nominee Aadhar",id:"nominee_aadhar",status:"Not Uploaded",items:[{id:"nominee_aadhar_front",name:"AADHAR Card Front",status:""},{id:"nominee_aadhar_back",name:"AADHAR Card Back",status:""}]},demat_document:{name:"Demat Document",id:"demat_document",status:"Not Uploaded",items:[{id:"demat_document",name:"Demat Document",status:""}]},additional_demat_documents:{name:"Additional Demat Document",id:"additional_demat_documents",items:[{id:"demat_document_2",name:"Demat Document"},{id:"demat_document_3",name:"Demat Document"},{id:"demat_document_4",name:"Demat Document"},{id:"demat_document_5",name:"Demat Document"}]},project_payment:{name:"Project Payment",id:"project_payment",items:[{id:"project_payment_1",name:"Payment Document"},{id:"project_payment_2",name:"Payment Document"},{id:"project_payment_3",name:"Payment Document"},{id:"project_payment_4",name:"Payment Document"},{id:"project_payment_5",name:"Payment Document"}]}}},29792:function(t,e,n){"use strict";var a=n(47568),o=n(97582),i=n(6154),r=function(){var t=(0,a.Z)((function(t){var e;return(0,o.__generator)(this,(function(n){switch(n.label){case 0:return(e=new FormData).append("document",t),[4,i.Z.post("".concat("https://kycramaerabackend.ramaera.com","/documents/upload"),e,{headers:{"Content-Type":"multipart/form-data"}})];case 1:return[2,n.sent().data.url]}}))}));return function(e){return t.apply(this,arguments)}}();e.Z=r}},function(t){t.O(0,[8244,9990,2817,630,4753,9964,6549,7058,788,8584,8764,1959,677,9774,2888,179],(function(){return e=2963,t(t.s=e);var e}));var e=t.O();_N_E=e}]);