<<<<<<<< HEAD:out/_next/static/chunks/7190-443795ac0bb79dce.js
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7190],{67190:function(t,n,e){e.r(n),e.d(n,{rows:function(){return R}});var a=e(47568),r=e(26042),i=e(69396),o=e(828),s=e(29815),u=e(97582),c=e(85893),d=e(50319),l=e(87357),m=e(86886),p=e(11057),f=e(50135),v=e(15861),h=e(53816),_=e(53252),y=e(67294),Z=e(16538),g=e(44709),P=e(21191),x=e(11213),j=e(81118),b=e(29792),D=e(8987),A=e(86501),k=e(71455),C=e(9473),E=e(34753),R=[{config:g.Z.additional_payment_documents}],U=function(t){var n=t.data,e=t.documents,i=void 0===e?[]:e,g=t.user,P=t.rowNo,x=(0,y.useState)([]),j=x[0],C=x[1],R=(0,y.useState)([]),U=R[0],S=R[1],w=(0,y.useState)(0),T=w[0],N=w[1],O=(0,y.useState)([]),I=O[0],V=O[1],L=(0,y.useState)([null,null,null,null]),F=L[0],H=L[1],B=(0,y.useState)(["","","",""]),J=B[0],W=B[1];(0,y.useEffect)((function(){N(P)}),[P]);var Y=(0,o.Z)((0,d.D)(Z.p1),1)[0],z=(0,o.Z)((0,d.D)(Z.HF),1)[0],X=(0,y.useState)(!1),q=X[0],G=X[1];(0,y.useEffect)((function(){var t=[],e=!0,a=!1,r=void 0;try{for(var o,s=i[Symbol.iterator]();!(e=(o=s.next()).done);e=!0){var u=o.value;t.push(u.url)}}catch(l){a=!0,r=l}finally{try{e||null==s.return||s.return()}finally{if(a)throw r}}C(t);var c=[null,null,null,null],d=["","","",""];W(d),H(c),n.config.items.map((function(t){var n;null===g||void 0===g||null===(n=g.documents)||void 0===n||n.map((function(n){n.title===t.id&&(c[parseInt(t.id.slice(22,24))-2]=n.amount||"",d[parseInt(t.id.slice(22,24))-2]=n.utrNo||"")}))})),W(d),H(c)}),[i,g]);var K=function(){var t=(0,a.Z)((function(){return(0,u.__generator)(this,(function(t){return[2]}))}));return function(){return t.apply(this,arguments)}}(),M=function(){var t=(0,a.Z)((function(t,n){return(0,u.__generator)(this,(function(e){switch(e.label){case 0:return[4,Y({variables:{id:g.id,documentId:t,url:n}})];case 1:return[2,e.sent()]}}))}));return function(n,e){return t.apply(this,arguments)}}(),Q=function(t){var n,e;return null===g||void 0===g||null===(n=g.documents)||void 0===n||n.map((function(n){n.title===t&&(e=n.id)})),e},$=function(){var t=(0,a.Z)((function(){var t,e;return(0,u.__generator)(this,(function(a){switch(a.label){case 0:t=0,a.label=1;case 1:return t<T?(e=n.config.items[t].id,F[t]?[4,Y({variables:{id:g.id,documentId:Q(e),amount:F[t],utrNo:J[t]}})]:[3,3]):[3,4];case 2:a.sent(),A.ZP.success("Details Updated"),a.label=3;case 3:return t++,[3,1];case 4:return[2]}}))}));return function(){return t.apply(this,arguments)}}(),tt=function(){var t=(0,a.Z)((function(t,n){var e;return(0,u.__generator)(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,z({variables:{id:t,status:n}})];case 1:return a.sent()&&("APPROVED"===n?A.ZP.success("Document Status ".concat(n)):A.ZP.error("Document Status ".concat(n)),V((function(e){return(0,s.Z)(e).concat([{id:t,status:n}])}))),[3,3];case 2:return e=a.sent(),A.ZP.error(e.message),[3,3];case 3:return[2]}}))}));return function(n,e){return t.apply(this,arguments)}}(),nt=function(t){var n=null;return null===I||void 0===I||I.map((function(e){t===e.id&&(n=e.status)})),n},et=function(){var t=(0,a.Z)((function(){var t,e,a;return(0,u.__generator)(this,(function(o){switch(o.label){case 0:G(!0),o.label=1;case 1:o.trys.push([1,6,,7]),t=function(t){var e,a,o,c,d,l,m;return(0,u.__generator)(this,(function(u){switch(u.label){case 0:return U[t]?(e=n.config.items[t].id,[4,(0,b.Z)(j[t])]):[3,6];case 1:return a=u.sent(),o=i.find((function(t){if(t.title.toLowerCase()===e.toLowerCase())return!0})),(c=g.documents)||(c=[]),o?[4,M(o.id,a)]:[3,3];case 2:return d=u.sent(),A.ZP.success("".concat(e," Uploaded")),(l=c.filter((function(t){return t.id}))).push(d.data.updateDocument),c=l,[3,5];case 3:return[4,K()];case 4:m=u.sent(),A.ZP.success("".concat(e," Uploaded")),c=(0,s.Z)(c).concat([m.data.createDocument]),u.label=5;case 5:(0,r.Z)({},g).documents=c,u.label=6;case 6:return[2]}}))},e=0,o.label=2;case 2:return e<T?[5,(0,u.__values)(t(e))]:[3,5];case 3:o.sent(),o.label=4;case 4:return e++,[3,2];case 5:return[3,7];case 6:return a=o.sent(),console.log("error",a),[3,7];case 7:return G(!1),[2]}}))}));return function(){return t.apply(this,arguments)}}();return(0,c.jsxs)(c.Fragment,{children:[i[0]&&(0,c.jsxs)(v.Z,{sx:{fontWeight:"bold",marginTop:5},children:[n.config.name," ",n.isOptional?"(Optional)":""]}),i[0]&&(0,c.jsxs)(h.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,c.jsx)(_.Z,{width:300,children:function(){for(var t=[],n=0;n<T;n++){var e=j[n];e&&t.push((0,c.jsx)("div",{style:{marginTop:15},children:(0,c.jsx)(k.TV,{children:(0,c.jsx)(k.HI,{src:"object"==typeof e?URL.createObjectURL(e):e,children:(0,c.jsx)("img",{src:"object"==typeof e?URL.createObjectURL(e):e,height:150,style:{marginLeft:"5px"}})})})}))}return 0==t.length?(0,c.jsx)(v.Z,{variant:"subtitle1",children:"No Document"}):t}()}),(0,c.jsx)(_.Z,{style:{},children:function(){for(var t=function(t){var n,r,o,u,d=(0,s.Z)(F),v=(0,s.Z)(J);e.push((0,c.jsxs)("div",{style:{height:160,marginTop:10},children:[(0,c.jsxs)("div",{style:{marginBottom:10},children:["Status:"," ",(0,c.jsx)("span",{style:{color:"APPROVED"===nt(null===(n=i[t])||void 0===n?void 0:n.id)?"limegreen":"REJECTED"===nt(null===(r=i[t])||void 0===r?void 0:r.id)?"red":i[t]?"APPROVED"===i[t].status?"limegreen":"REJECTED"===i[t].status&&"red":""},children:nt(null===(o=i[t])||void 0===o?void 0:o.id)||(null===(u=i[t])||void 0===u?void 0:u.status)})]}),(null===g||void 0===g?void 0:g.kyc)!==E.Z.status.APPROVED&&(0,c.jsx)(l.Z,{sx:{display:"flex",justifyContent:"center",marginBottom:"10px",width:500},children:(0,c.jsxs)(m.ZP,{children:[(0,c.jsx)(p.Z,{onClick:function(){tt(i[t].id,"APPROVED")},variant:"outlined",color:"success",sx:{paddingY:"12px"},children:"Approve"}),(0,c.jsx)(p.Z,{onClick:function(){return tt(i[t].id,"REJECTED")},variant:"outlined",color:"error",sx:{mx:2,paddingY:"12px"},children:"Reject"}),(0,c.jsx)(f.Z,{sx:{width:120},id:"outlined",label:"UTR No.*",value:J[t],variant:"outlined",type:"number",onChange:function(n){n.target.value?v[t]=n.target.value:v[t]=null,W(v)}}),(0,c.jsx)(f.Z,{sx:{width:120,ml:2},id:"outlined",label:"Amount*",value:F[t],variant:"outlined",type:"number",onChange:function(n){n.target.value?d[t]=parseInt(n.target.value):d[t]=null,H(d)}})]})}),(null===g||void 0===g?void 0:g.kyc)!==E.Z.status.APPROVED&&(0,c.jsxs)(p.Z,{fullWidth:!0,style:{marginTop:"10px"},component:"label",children:["Choose ",a[t].name,(0,c.jsx)("input",{type:"file",accept:"image/*",hidden:!0,onChange:function(n){if(n.target.files.length>0){var e=(0,s.Z)(j);e[t]=n.target.files[0],C(e);var a=(0,s.Z)(U);a[t]=!0,S(a)}}})]})]}))},e=[],a=n.config.items,r=0;r<T;r++)t(r);return e}()}),(null===g||void 0===g?void 0:g.kyc)!==E.Z.status.APPROVED&&(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(_.Z,{children:(0,c.jsx)(D.Z,{loading:q,variant:"contained",onClick:function(){et(),$()},sx:{paddingX:8},children:"Update"})})})]},n.config.name)]})},S=function(t){var n=(0,C.v9)((function(t){return t.foundUser.foundUser})),e=[];if(n&&n.documents){var a=!0,r=!1,i=void 0;try{for(var o,s=function(){var t=o.value,a=n.documents.find((function(n){if(n.title.toLowerCase()===t.id.toLowerCase())return!0}));a&&e.push(a)},u=t[Symbol.iterator]();!(a=(o=u.next()).done);a=!0)s()}catch(c){r=!0,i=c}finally{try{a||null==u.return||u.return()}finally{if(r)throw i}}}return e};n.default=function(){var t=(0,C.I0)(),n=(0,C.v9)((function(t){return t.foundUser.foundUser})),e=(0,C.v9)((function(t){return t.allUsers.allTheUsers})),s=(0,y.useState)(0),h=s[0],_=s[1],D=(0,y.useState)(""),w=D[0],T=D[1],N=(0,y.useState)(),O=N[0],I=N[1],V=(0,y.useState)(),L=V[0],F=V[1],H=(0,y.useState)(),B=H[0],J=H[1],W=(0,y.useState)(!1),Y=W[0],z=W[1],X=(0,y.useState)(!1),q=X[0],G=X[1],K=(0,o.Z)((0,d.D)(Z.p1),1)[0],M=(0,o.Z)((0,d.D)(Z.HF),1)[0],Q=function(){var t=(0,a.Z)((function(){var t,e;return(0,u.__generator)(this,(function(a){return e=0,null===n||void 0===n||null===(t=n.documents)||void 0===t||t.map((function(t){"additional_payment_doc"===t.title.slice(0,22)&&(e+=1)})),_(e),[2]}))}));return function(){return t.apply(this,arguments)}}();(0,y.useEffect)((function(){Q()}),[]);var $=function(t,e){var a=n,o=[];return n.documents.map((function(n){n.id===t?o.push((0,i.Z)((0,r.Z)({},n),{url:e})):o.push(n)})),(0,i.Z)((0,r.Z)({},a),{documents:o})},tt=function(t,e,a){var o=n,s=[];return n.documents.map((function(n){n.id===t?s.push((0,i.Z)((0,r.Z)({},n),{amount:e,utrNo:a})):s.push(n)})),(0,i.Z)((0,r.Z)({},o),{documents:s})},nt=function(t,e){var a=n,o=[];return n.documents.map((function(n){n.id===t?o.push((0,i.Z)((0,r.Z)({},n),{status:e})):o.push(n)})),(0,i.Z)((0,r.Z)({},a),{documents:o})},et=function(){var n=(0,a.Z)((function(n,a){return(0,u.__generator)(this,(function(r){switch(r.label){case 0:return[4,M({variables:{id:n,status:a}})];case 1:return r.sent(),t((0,x.Hn)(nt(B.id,a))),t((0,P.UF)((0,j.Z)(e,nt(B.id,a)))),[2]}}))}));return function(t,e){return n.apply(this,arguments)}}(),at=function(){var r=(0,a.Z)((function(){var a;return(0,u.__generator)(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,K({variables:{id:n.id,documentId:B.id,amount:parseInt(O),utrNo:L}})];case 1:return r.sent(),t((0,x.Hn)(tt(B.id,parseInt(O),L))),t((0,P.UF)((0,j.Z)(e,tt(B.id,parseInt(O),L)))),A.ZP.success("Details Updated"),[3,3];case 2:return a=r.sent(),A.ZP.error(a),[3,3];case 3:return[2]}}))}));return function(){return r.apply(this,arguments)}}(),rt=function(){var r=(0,a.Z)((function(){var a,r;return(0,u.__generator)(this,(function(i){switch(i.label){case 0:if(i.trys.push([0,9,,10]),a="",!Y)return[3,5];i.label=1;case 1:return i.trys.push([1,3,,4]),[4,(0,b.Z)(w)];case 2:return a=i.sent(),[3,4];case 3:return i.sent(),A.ZP.error("Error, Try Again!"),[3,4];case 4:return[3,6];case 5:a=w,i.label=6;case 6:return B?[4,K({variables:{id:n.id,documentId:B.id,url:a}})]:[3,8];case 7:return i.sent(),t((0,x.Hn)($(B.id,a))),t((0,P.UF)((0,j.Z)(e,$(B.id,a)))),[3,8];case 8:return A.ZP.success("Payment Slip Updated "),[3,10];case 9:return r=i.sent(),A.ZP.error(r),[3,10];case 10:return[2]}}))}));return function(){return r.apply(this,arguments)}}();return(0,y.useEffect)((function(){n&&n.documents&&n.documents.length>0&&n.documents.find((function(t){t.title.toLowerCase()===g.Z.payment_proof.items[0].id&&(J(t),T(t.url),I(t.amount),F(t.utrNo))}))}),[n]),(0,c.jsxs)(c.Fragment,{children:[w?(0,c.jsx)(k.TV,{children:(0,c.jsx)(k.HI,{src:"object"==typeof w?URL.createObjectURL(w):w,children:(0,c.jsx)("img",{style:{marginTop:"10px",cursor:"pointer"},src:"object"==typeof w?URL.createObjectURL(w):w,width:200})})}):null,B&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(v.Z,{variant:"h4",sx:{my:2},children:["Status :"," ",(0,c.jsx)("span",{style:{color:B?"APPROVED"===B.status?"limegreen":"REJECTED"===B.status&&"red":""},children:B&&B.status})]}),(0,c.jsx)(l.Z,{children:(null===n||void 0===n?void 0:n.kyc)!==E.Z.status.APPROVED&&(0,c.jsxs)(m.ZP,{children:[(0,c.jsx)(p.Z,{onClick:function(){return et(B.id,"APPROVED")},variant:"outlined",color:"success",children:"Approve"}),(0,c.jsx)(p.Z,{onClick:function(){return et(B.id,"REJECTED")},variant:"outlined",color:"error",sx:{ml:2},children:"Reject"})]})})]}),w&&(null===n||void 0===n?void 0:n.kyc)!==E.Z.status.APPROVED&&(0,c.jsxs)(m.ZP,{container:!0,p:2,mt:2,ml:0,pl:0,gap:2,spacing:2,children:[(0,c.jsx)(f.Z,{id:"outlined",label:"UTR No.*",value:L,variant:"outlined",type:"number",onChange:function(t){F(t.target.value)}}),(0,c.jsx)(f.Z,{id:"outlined",label:"Amount*",value:O,variant:"outlined",type:"number",onChange:function(t){I(t.target.value)}}),(0,c.jsx)(m.ZP,{children:(0,c.jsx)(p.Z,{fullWidth:!0,disabled:!O||!L,variant:"contained",component:"label",onClick:function(){at()},sx:{padding:"14px"},children:"Submit"})})]}),(0,c.jsxs)(m.ZP,{container:!0,p:2,pl:0,spacing:2,children:[B&&(null===n||void 0===n?void 0:n.kyc)!==E.Z.status.APPROVED&&(0,c.jsx)(m.ZP,{item:!0,xs:0,children:(0,c.jsxs)(p.Z,{variant:"contained",component:"label",children:["Select Payment Slip",(0,c.jsx)("input",{type:"file",accept:"image/*",hidden:!0,onChange:function(t){t.target.files.length>0&&(G(!0),T(t.target.files[0]),z(!0))}})]})}),w&&(null===n||void 0===n?void 0:n.kyc)!==E.Z.status.APPROVED&&(0,c.jsx)(m.ZP,{item:!0,xs:2,children:(0,c.jsx)(p.Z,{fullWidth:!0,variant:"contained",disabled:!q,onClick:function(){rt()},children:"Submit"})}),(0,c.jsx)(A.x7,{position:"bottom-center",reverseOrder:!1})]}),(0,c.jsx)(c.Fragment,{children:R.map((function(t,e){return(0,c.jsx)(U,{data:t,rowNo:h,user:n,documents:S(t.config.items)},e)}))})]})}},44709:function(t,n){n.Z={aadhar:{id:"aadhar",name:"Aadhar Card",status:"",items:[{id:"aadhar_front",name:"AADHAR Card Front",status:""},{id:"aadhar_back",name:"AADHAR Card Back",status:""}]},pancard:{id:"pancard",name:"Pancard",status:"",items:[{id:"pancard",name:"Pan Card",status:""}]},avatar:{id:"photo",name:"Photo",status:"",items:[{id:"avatar",name:"Passport Size Photo",status:""}]},voterId:{id:"voterId",name:"Voter Id Card",status:"Not Uploaded",items:[{id:"voterid_front",name:"Voter Id Front",status:""},{id:"voterid_back",name:"Voted Id Card Back",status:""}]},passbook:{name:"Passbook  or Bank Statement",id:"passbook",status:"Not Uploaded",items:[{id:"passbook",name:"Bank Passbook Or Bank Statement",status:"Not Uploaded"}]},payment_proof:{name:"Payment Proof",id:"payment_proof",status:"Not Uploaded",items:[{id:"payment_proof",name:"Payment Proof"}]},agency_payment_proof:{name:"Agency Payment Proof",id:"agency_payment_proof",status:"Not Uploaded",items:[{id:"agency_payment_proof",name:"Agency Payment Proof"}]},additional_payment_documents:{name:"Additional Payment Document",id:"additional_payment_doc",items:[{id:"additional_payment_doc2",name:"Payment Document"},{id:"additional_payment_doc3",name:"Payment Document"},{id:"additional_payment_doc4",name:"Payment Document"},{id:"additional_payment_doc5",name:"Payment Document"}]},to_advance_payment_proof:{name:"To Advance Payment Proof",id:"to_advance_payment_proof",status:"Not Uploaded",items:[{id:"to_advance_payment_proof",name:"To Advance Payment Proof"}]},to_advance_additional_documents:{name:"To Advance Additional Payment Document",id:"to_advance_additional_payment_doc",items:[{id:"to_advance_additional_payment_doc2",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc3",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc4",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc5",name:"To Advance Payment Document"}]},driving_license:{name:"Driving License",id:"driving_license",status:"Not Uploaded",items:[{id:"driving_license_front",name:"Driving License Front",status:""},{id:"driving_license_back",name:"Driving License Back",status:""}]},nominee_aadhar:{name:"Nominee Aadhar",id:"nominee_aadhar",status:"Not Uploaded",items:[{id:"nominee_aadhar_front",name:"AADHAR Card Front",status:""},{id:"nominee_aadhar_back",name:"AADHAR Card Back",status:""}]},demat_document:{name:"Demat Document",id:"demat_document",status:"Not Uploaded",items:[{id:"demat_document",name:"Demat Document",status:""}]},project_payment:{name:"Project Payment",id:"project_payment",items:[{id:"project_payment_1",name:"Payment Document"},{id:"project_payment_2",name:"Payment Document"},{id:"project_payment_3",name:"Payment Document"},{id:"project_payment_4",name:"Payment Document"},{id:"project_payment_5",name:"Payment Document"}]}}},81118:function(t,n){n.Z=function(t,n){var e=[];return t.map((function(t){n.id===(null===t||void 0===t?void 0:t.id)?e.push(n):e.push(t)})),e}},29792:function(t,n,e){var a=e(47568),r=e(97582),i=e(5121),o=function(){var t=(0,a.Z)((function(t){var n;return(0,r.__generator)(this,(function(e){switch(e.label){case 0:return(n=new FormData).append("document",t),[4,i.Z.post("".concat("https://kycramaerabackend.ramaera.com","/documents/upload"),n,{headers:{"Content-Type":"multipart/form-data"}})];case 1:return[2,e.sent().data.url]}}))}));return function(n){return t.apply(this,arguments)}}();n.Z=o}}]);
========
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7190],{67190:function(t,e,n){n.r(e),n.d(e,{rows:function(){return R}});var a=n(47568),r=n(26042),i=n(69396),o=n(828),s=n(29815),u=n(97582),c=n(85893),d=n(50319),l=n(87357),m=n(86886),p=n(11057),f=n(50135),v=n(15861),h=n(53816),_=n(53252),y=n(67294),Z=n(16538),g=n(44709),P=n(21191),x=n(11213),j=n(81118),D=n(29792),b=n(8987),A=n(86501),k=n(71455),C=n(9473),E=n(34753),R=[{config:g.Z.additional_payment_documents}],U=function(t){var e=t.data,n=t.documents,i=void 0===n?[]:n,g=t.user,P=t.rowNo,x=(0,y.useState)([]),j=x[0],C=x[1],R=(0,y.useState)([]),U=R[0],S=R[1],w=(0,y.useState)(0),T=w[0],N=w[1],O=(0,y.useState)([]),I=O[0],V=O[1],L=(0,y.useState)([null,null,null,null]),F=L[0],H=L[1],B=(0,y.useState)(["","","",""]),J=B[0],W=B[1];(0,y.useEffect)((function(){N(P)}),[P]);var Y=(0,o.Z)((0,d.D)(Z.p1),1)[0],z=(0,o.Z)((0,d.D)(Z.HF),1)[0],X=(0,y.useState)(!1),q=X[0],G=X[1];(0,y.useEffect)((function(){var t=[],n=!0,a=!1,r=void 0;try{for(var o,s=i[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var u=o.value;t.push(u.url)}}catch(l){a=!0,r=l}finally{try{n||null==s.return||s.return()}finally{if(a)throw r}}C(t);var c=[null,null,null,null],d=["","","",""];W(d),H(c),e.config.items.map((function(t){var e;null===g||void 0===g||null===(e=g.documents)||void 0===e||e.map((function(e){e.title===t.id&&(c[parseInt(t.id.slice(22,24))-2]=e.amount||"",d[parseInt(t.id.slice(22,24))-2]=e.utrNo||"")}))})),W(d),H(c)}),[i,g]);var K=function(){var t=(0,a.Z)((function(){return(0,u.__generator)(this,(function(t){return[2]}))}));return function(){return t.apply(this,arguments)}}(),M=function(){var t=(0,a.Z)((function(t,e){return(0,u.__generator)(this,(function(n){switch(n.label){case 0:return[4,Y({variables:{id:g.id,documentId:t,url:e}})];case 1:return[2,n.sent()]}}))}));return function(e,n){return t.apply(this,arguments)}}(),Q=function(t){var e,n;return null===g||void 0===g||null===(e=g.documents)||void 0===e||e.map((function(e){e.title===t&&(n=e.id)})),n},$=function(){var t=(0,a.Z)((function(){var t,n;return(0,u.__generator)(this,(function(a){switch(a.label){case 0:t=0,a.label=1;case 1:return t<T?(n=e.config.items[t].id,F[t]?[4,Y({variables:{id:g.id,documentId:Q(n),amount:F[t],utrNo:J[t]}})]:[3,3]):[3,4];case 2:a.sent(),A.ZP.success("Details Updated"),a.label=3;case 3:return t++,[3,1];case 4:return[2]}}))}));return function(){return t.apply(this,arguments)}}(),tt=function(){var t=(0,a.Z)((function(t,e){var n;return(0,u.__generator)(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,z({variables:{id:t,status:e}})];case 1:return a.sent()&&("APPROVED"===e?A.ZP.success("Document Status ".concat(e)):A.ZP.error("Document Status ".concat(e)),V((function(n){return(0,s.Z)(n).concat([{id:t,status:e}])}))),[3,3];case 2:return n=a.sent(),A.ZP.error(n.message),[3,3];case 3:return[2]}}))}));return function(e,n){return t.apply(this,arguments)}}(),et=function(t){var e=null;return null===I||void 0===I||I.map((function(n){t===n.id&&(e=n.status)})),e},nt=function(){var t=(0,a.Z)((function(){var t,n,a;return(0,u.__generator)(this,(function(o){switch(o.label){case 0:G(!0),o.label=1;case 1:o.trys.push([1,6,,7]),t=function(t){var n,a,o,c,d,l,m;return(0,u.__generator)(this,(function(u){switch(u.label){case 0:return U[t]?(n=e.config.items[t].id,[4,(0,D.Z)(j[t])]):[3,6];case 1:return a=u.sent(),o=i.find((function(t){if(t.title.toLowerCase()===n.toLowerCase())return!0})),(c=g.documents)||(c=[]),o?[4,M(o.id,a)]:[3,3];case 2:return d=u.sent(),A.ZP.success("".concat(n," Uploaded")),(l=c.filter((function(t){return t.id}))).push(d.data.updateDocument),c=l,[3,5];case 3:return[4,K()];case 4:m=u.sent(),A.ZP.success("".concat(n," Uploaded")),c=(0,s.Z)(c).concat([m.data.createDocument]),u.label=5;case 5:(0,r.Z)({},g).documents=c,u.label=6;case 6:return[2]}}))},n=0,o.label=2;case 2:return n<T?[5,(0,u.__values)(t(n))]:[3,5];case 3:o.sent(),o.label=4;case 4:return n++,[3,2];case 5:return[3,7];case 6:return a=o.sent(),console.log("error",a),[3,7];case 7:return G(!1),[2]}}))}));return function(){return t.apply(this,arguments)}}();return(0,c.jsxs)(c.Fragment,{children:[i[0]&&(0,c.jsxs)(v.Z,{sx:{fontWeight:"bold",marginTop:5},children:[e.config.name," ",e.isOptional?"(Optional)":""]}),i[0]&&(0,c.jsxs)(h.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,c.jsx)(_.Z,{width:300,children:function(){for(var t=[],e=0;e<T;e++){var n=j[e];n&&t.push((0,c.jsx)("div",{style:{marginTop:15},children:(0,c.jsx)(k.TV,{children:(0,c.jsx)(k.HI,{src:"object"==typeof n?URL.createObjectURL(n):n,children:(0,c.jsx)("img",{src:"object"==typeof n?URL.createObjectURL(n):n,height:150,style:{marginLeft:"5px"}})})})}))}return 0==t.length?(0,c.jsx)(v.Z,{variant:"subtitle1",children:"No Document"}):t}()}),(0,c.jsx)(_.Z,{style:{},children:function(){for(var t=function(t){var e,r,o,u,d=(0,s.Z)(F),v=(0,s.Z)(J);n.push((0,c.jsxs)("div",{style:{height:160,marginTop:10},children:[(0,c.jsxs)("div",{style:{marginBottom:10},children:["Status:"," ",(0,c.jsx)("span",{style:{color:"APPROVED"===et(null===(e=i[t])||void 0===e?void 0:e.id)?"limegreen":"REJECTED"===et(null===(r=i[t])||void 0===r?void 0:r.id)?"red":i[t]?"APPROVED"===i[t].status?"limegreen":"REJECTED"===i[t].status&&"red":""},children:et(null===(o=i[t])||void 0===o?void 0:o.id)||(null===(u=i[t])||void 0===u?void 0:u.status)})]}),(null===g||void 0===g?void 0:g.kyc)!==E.Z.status.APPROVED&&(0,c.jsx)(l.Z,{sx:{display:"flex",justifyContent:"center",marginBottom:"10px",width:500},children:(0,c.jsxs)(m.ZP,{children:[(0,c.jsx)(p.Z,{onClick:function(){tt(i[t].id,"APPROVED")},variant:"outlined",color:"success",sx:{paddingY:"12px"},children:"Approve"}),(0,c.jsx)(p.Z,{onClick:function(){return tt(i[t].id,"REJECTED")},variant:"outlined",color:"error",sx:{mx:2,paddingY:"12px"},children:"Reject"}),(0,c.jsx)(f.Z,{sx:{width:120},id:"outlined",label:"UTR No.*",value:J[t],variant:"outlined",type:"number",onChange:function(e){e.target.value?v[t]=e.target.value:v[t]=null,W(v)}}),(0,c.jsx)(f.Z,{sx:{width:120,ml:2},id:"outlined",label:"Amount*",value:F[t],variant:"outlined",type:"number",onChange:function(e){e.target.value?d[t]=parseInt(e.target.value):d[t]=null,H(d)}})]})}),(null===g||void 0===g?void 0:g.kyc)!==E.Z.status.APPROVED&&(0,c.jsxs)(p.Z,{fullWidth:!0,style:{marginTop:"10px"},component:"label",children:["Choose ",a[t].name,(0,c.jsx)("input",{type:"file",accept:"image/*",hidden:!0,onChange:function(e){if(e.target.files.length>0){var n=(0,s.Z)(j);n[t]=e.target.files[0],C(n);var a=(0,s.Z)(U);a[t]=!0,S(a)}}})]})]}))},n=[],a=e.config.items,r=0;r<T;r++)t(r);return n}()}),(null===g||void 0===g?void 0:g.kyc)!==E.Z.status.APPROVED&&(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(_.Z,{children:(0,c.jsx)(b.Z,{loading:q,variant:"contained",onClick:function(){nt(),$()},sx:{paddingX:8},children:"Update"})})})]},e.config.name)]})},S=function(t){var e=(0,C.v9)((function(t){return t.foundUser.foundUser})),n=[];if(e&&e.documents){var a=!0,r=!1,i=void 0;try{for(var o,s=function(){var t=o.value,a=e.documents.find((function(e){if(e.title.toLowerCase()===t.id.toLowerCase())return!0}));a&&n.push(a)},u=t[Symbol.iterator]();!(a=(o=u.next()).done);a=!0)s()}catch(c){r=!0,i=c}finally{try{a||null==u.return||u.return()}finally{if(r)throw i}}}return n};e.default=function(){var t=(0,C.I0)(),e=(0,C.v9)((function(t){return t.foundUser.foundUser})),n=(0,C.v9)((function(t){return t.allUsers.allTheUsers})),s=(0,y.useState)(0),h=s[0],_=s[1],b=(0,y.useState)(""),w=b[0],T=b[1],N=(0,y.useState)(),O=N[0],I=N[1],V=(0,y.useState)(),L=V[0],F=V[1],H=(0,y.useState)(),B=H[0],J=H[1],W=(0,y.useState)(!1),Y=W[0],z=W[1],X=(0,y.useState)(!1),q=X[0],G=X[1],K=(0,o.Z)((0,d.D)(Z.p1),1)[0],M=(0,o.Z)((0,d.D)(Z.HF),1)[0],Q=function(){var t=(0,a.Z)((function(){var t,n;return(0,u.__generator)(this,(function(a){return n=0,null===e||void 0===e||null===(t=e.documents)||void 0===t||t.map((function(t){"additional_payment_doc"===t.title.slice(0,22)&&(n+=1)})),_(n),[2]}))}));return function(){return t.apply(this,arguments)}}();(0,y.useEffect)((function(){Q()}),[]);var $=function(t,n){var a=e,o=[];return e.documents.map((function(e){e.id===t?o.push((0,i.Z)((0,r.Z)({},e),{url:n})):o.push(e)})),(0,i.Z)((0,r.Z)({},a),{documents:o})},tt=function(t,n,a){var o=e,s=[];return e.documents.map((function(e){e.id===t?s.push((0,i.Z)((0,r.Z)({},e),{amount:n,utrNo:a})):s.push(e)})),(0,i.Z)((0,r.Z)({},o),{documents:s})},et=function(t,n){var a=e,o=[];return e.documents.map((function(e){e.id===t?o.push((0,i.Z)((0,r.Z)({},e),{status:n})):o.push(e)})),(0,i.Z)((0,r.Z)({},a),{documents:o})},nt=function(){var e=(0,a.Z)((function(e,a){return(0,u.__generator)(this,(function(r){switch(r.label){case 0:return[4,M({variables:{id:e,status:a}})];case 1:return r.sent(),t((0,x.Hn)(et(B.id,a))),t((0,P.UF)((0,j.Z)(n,et(B.id,a)))),[2]}}))}));return function(t,n){return e.apply(this,arguments)}}(),at=function(){var r=(0,a.Z)((function(){var a;return(0,u.__generator)(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,K({variables:{id:e.id,documentId:B.id,amount:parseInt(O),utrNo:L}})];case 1:return r.sent(),t((0,x.Hn)(tt(B.id,parseInt(O),L))),t((0,P.UF)((0,j.Z)(n,tt(B.id,parseInt(O),L)))),A.ZP.success("Details Updated"),[3,3];case 2:return a=r.sent(),A.ZP.error(a),[3,3];case 3:return[2]}}))}));return function(){return r.apply(this,arguments)}}(),rt=function(){var r=(0,a.Z)((function(){var a,r;return(0,u.__generator)(this,(function(i){switch(i.label){case 0:if(i.trys.push([0,9,,10]),a="",!Y)return[3,5];i.label=1;case 1:return i.trys.push([1,3,,4]),[4,(0,D.Z)(w)];case 2:return a=i.sent(),[3,4];case 3:return i.sent(),A.ZP.error("Error, Try Again!"),[3,4];case 4:return[3,6];case 5:a=w,i.label=6;case 6:return B?[4,K({variables:{id:e.id,documentId:B.id,url:a}})]:[3,8];case 7:return i.sent(),t((0,x.Hn)($(B.id,a))),t((0,P.UF)((0,j.Z)(n,$(B.id,a)))),[3,8];case 8:return A.ZP.success("Payment Slip Updated "),[3,10];case 9:return r=i.sent(),A.ZP.error(r),[3,10];case 10:return[2]}}))}));return function(){return r.apply(this,arguments)}}();return(0,y.useEffect)((function(){e&&e.documents&&e.documents.length>0&&e.documents.find((function(t){t.title.toLowerCase()===g.Z.payment_proof.items[0].id&&(J(t),T(t.url),I(t.amount),F(t.utrNo))}))}),[e]),(0,c.jsxs)(c.Fragment,{children:[w?(0,c.jsx)(k.TV,{children:(0,c.jsx)(k.HI,{src:"object"==typeof w?URL.createObjectURL(w):w,children:(0,c.jsx)("img",{style:{marginTop:"10px",cursor:"pointer"},src:"object"==typeof w?URL.createObjectURL(w):w,width:200})})}):null,B&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(v.Z,{variant:"h4",sx:{my:2},children:["Status :"," ",(0,c.jsx)("span",{style:{color:B?"APPROVED"===B.status?"limegreen":"REJECTED"===B.status&&"red":""},children:B&&B.status})]}),(0,c.jsx)(l.Z,{children:(null===e||void 0===e?void 0:e.kyc)!==E.Z.status.APPROVED&&(0,c.jsxs)(m.ZP,{children:[(0,c.jsx)(p.Z,{onClick:function(){return nt(B.id,"APPROVED")},variant:"outlined",color:"success",children:"Approve"}),(0,c.jsx)(p.Z,{onClick:function(){return nt(B.id,"REJECTED")},variant:"outlined",color:"error",sx:{ml:2},children:"Reject"})]})})]}),w&&(null===e||void 0===e?void 0:e.kyc)!==E.Z.status.APPROVED&&(0,c.jsxs)(m.ZP,{container:!0,p:2,mt:2,ml:0,pl:0,gap:2,spacing:2,children:[(0,c.jsx)(f.Z,{id:"outlined",label:"UTR No.*",value:L,variant:"outlined",type:"number",onChange:function(t){F(t.target.value)}}),(0,c.jsx)(f.Z,{id:"outlined",label:"Amount*",value:O,variant:"outlined",type:"number",onChange:function(t){I(t.target.value)}}),(0,c.jsx)(m.ZP,{children:(0,c.jsx)(p.Z,{fullWidth:!0,disabled:!O||!L,variant:"contained",component:"label",onClick:function(){at()},sx:{padding:"14px"},children:"Submit"})})]}),(0,c.jsxs)(m.ZP,{container:!0,p:2,pl:0,spacing:2,children:[B&&(null===e||void 0===e?void 0:e.kyc)!==E.Z.status.APPROVED&&(0,c.jsx)(m.ZP,{item:!0,xs:0,children:(0,c.jsxs)(p.Z,{variant:"contained",component:"label",children:["Select Payment Slip",(0,c.jsx)("input",{type:"file",accept:"image/*",hidden:!0,onChange:function(t){t.target.files.length>0&&(G(!0),T(t.target.files[0]),z(!0))}})]})}),w&&(null===e||void 0===e?void 0:e.kyc)!==E.Z.status.APPROVED&&(0,c.jsx)(m.ZP,{item:!0,xs:2,children:(0,c.jsx)(p.Z,{fullWidth:!0,variant:"contained",disabled:!q,onClick:function(){rt()},children:"Submit"})}),(0,c.jsx)(A.x7,{position:"bottom-center",reverseOrder:!1})]}),(0,c.jsx)(c.Fragment,{children:R.map((function(t,n){return(0,c.jsx)(U,{data:t,rowNo:h,user:e,documents:S(t.config.items)},n)}))})]})}},44709:function(t,e){e.Z={aadhar:{id:"aadhar",name:"Aadhar Card",status:"",items:[{id:"aadhar_front",name:"AADHAR Card Front",status:""},{id:"aadhar_back",name:"AADHAR Card Back",status:""}]},pancard:{id:"pancard",name:"Pancard",status:"",items:[{id:"pancard",name:"Pan Card",status:""}]},avatar:{id:"photo",name:"Photo",status:"",items:[{id:"avatar",name:"Passport Size Photo",status:""}]},voterId:{id:"voterId",name:"Voter Id Card",status:"Not Uploaded",items:[{id:"voterid_front",name:"Voter Id Front",status:""},{id:"voterid_back",name:"Voted Id Card Back",status:""}]},passbook:{name:"Passbook  or Bank Statement",id:"passbook",status:"Not Uploaded",items:[{id:"passbook",name:"Bank Passbook Or Bank Statement",status:"Not Uploaded"}]},payment_proof:{name:"Payment Proof",id:"payment_proof",status:"Not Uploaded",items:[{id:"payment_proof",name:"Payment Proof"}]},agency_payment_proof:{name:"Agency Payment Proof",id:"agency_payment_proof",status:"Not Uploaded",items:[{id:"agency_payment_proof",name:"Agency Payment Proof"}]},additional_payment_documents:{name:"Additional Payment Document",id:"additional_payment_doc",items:[{id:"additional_payment_doc2",name:"Payment Document"},{id:"additional_payment_doc3",name:"Payment Document"},{id:"additional_payment_doc4",name:"Payment Document"},{id:"additional_payment_doc5",name:"Payment Document"}]},to_advance_payment_proof:{name:"To Advance Payment Proof",id:"to_advance_payment_proof",status:"Not Uploaded",items:[{id:"to_advance_payment_proof",name:"To Advance Payment Proof"}]},to_advance_additional_documents:{name:"To Advance Additional Payment Document",id:"to_advance_additional_payment_doc",items:[{id:"to_advance_additional_payment_doc2",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc3",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc4",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc5",name:"To Advance Payment Document"}]},driving_license:{name:"Driving License",id:"driving_license",status:"Not Uploaded",items:[{id:"driving_license_front",name:"Driving License Front",status:""},{id:"driving_license_back",name:"Driving License Back",status:""}]},nominee_aadhar:{name:"Nominee Aadhar",id:"nominee_aadhar",status:"Not Uploaded",items:[{id:"nominee_aadhar_front",name:"AADHAR Card Front",status:""},{id:"nominee_aadhar_back",name:"AADHAR Card Back",status:""}]},demat_document:{name:"Demat Document",id:"demat_document",status:"Not Uploaded",items:[{id:"demat_document",name:"Demat Document",status:""}]},additional_demat_documents:{name:"Additional Demat Document",id:"additional_demat_documents",items:[{id:"demat_document_2",name:"Demat Document"},{id:"demat_document_3",name:"Demat Document"},{id:"demat_document_4",name:"Demat Document"},{id:"demat_document_5",name:"Demat Document"}]},project_payment:{name:"Project Payment",id:"project_payment",items:[{id:"project_payment_1",name:"Payment Document"},{id:"project_payment_2",name:"Payment Document"},{id:"project_payment_3",name:"Payment Document"},{id:"project_payment_4",name:"Payment Document"},{id:"project_payment_5",name:"Payment Document"}]}}},81118:function(t,e){e.Z=function(t,e){var n=[];return t.map((function(t){e.id===(null===t||void 0===t?void 0:t.id)?n.push(e):n.push(t)})),n}},29792:function(t,e,n){var a=n(47568),r=n(97582),i=n(6154),o=function(){var t=(0,a.Z)((function(t){var e;return(0,r.__generator)(this,(function(n){switch(n.label){case 0:return(e=new FormData).append("document",t),[4,i.Z.post("".concat("https://kycramaerabackend.ramaera.com","/documents/upload"),e,{headers:{"Content-Type":"multipart/form-data"}})];case 1:return[2,n.sent().data.url]}}))}));return function(e){return t.apply(this,arguments)}}();e.Z=o}}]);
>>>>>>>> main:out/_next/static/chunks/7190-863a5c0e9f204b1f.js
