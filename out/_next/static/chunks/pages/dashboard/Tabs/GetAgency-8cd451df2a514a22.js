(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5163],{15861:function(t,n,e){"use strict";e.d(n,{Z:function(){return _}});var a=e(63366),r=e(87462),i=e(67294),o=e(86010),s=e(39707),c=e(94780),u=e(90948),d=e(71657),m=e(98216),l=e(34867);function p(t){return(0,l.Z)("MuiTypography",t)}(0,e(1588).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var y=e(85893);const h=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],f=(0,u.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:e}=t;return[n.root,e.variant&&n[e.variant],"inherit"!==e.align&&n[`align${(0,m.Z)(e.align)}`],e.noWrap&&n.noWrap,e.gutterBottom&&n.gutterBottom,e.paragraph&&n.paragraph]}})((({theme:t,ownerState:n})=>(0,r.Z)({margin:0},n.variant&&t.typography[n.variant],"inherit"!==n.align&&{textAlign:n.align},n.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n.gutterBottom&&{marginBottom:"0.35em"},n.paragraph&&{marginBottom:16}))),v={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},g={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var _=i.forwardRef((function(t,n){const e=(0,d.Z)({props:t,name:"MuiTypography"}),i=(t=>g[t]||t)(e.color),u=(0,s.Z)((0,r.Z)({},e,{color:i})),{align:l="inherit",className:_,component:b,gutterBottom:x=!1,noWrap:P=!1,paragraph:j=!1,variant:Z="body1",variantMapping:D=v}=u,A=(0,a.Z)(u,h),k=(0,r.Z)({},u,{align:l,color:i,className:_,component:b,gutterBottom:x,noWrap:P,paragraph:j,variant:Z,variantMapping:D}),w=b||(j?"p":D[Z]||v[Z])||"span",S=(t=>{const{align:n,gutterBottom:e,noWrap:a,paragraph:r,variant:i,classes:o}=t,s={root:["root",i,"inherit"!==t.align&&`align${(0,m.Z)(n)}`,e&&"gutterBottom",a&&"noWrap",r&&"paragraph"]};return(0,c.Z)(s,p,o)})(k);return(0,y.jsx)(f,(0,r.Z)({as:w,ref:n,ownerState:k,className:(0,o.Z)(S.root,_)},A))}))},27909:function(t,n,e){"use strict";var a=e(57579);n.Z=a.Z},57579:function(t,n,e){"use strict";var a;e.d(n,{Z:function(){return s}});var r=e(67294);let i=0;const o=(a||(a=e.t(r,2))).useId;function s(t){if(void 0!==o){const n=o();return null!=t?t:n}return function(t){const[n,e]=r.useState(t),a=t||n;return r.useEffect((()=>{null==n&&(i+=1,e(`mui-${i}`))}),[n]),a}(t)}},95061:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/Tabs/GetAgency",function(){return e(85250)}])},85250:function(t,n,e){"use strict";e.r(n);var a=e(34051),r=e.n(a),i=e(85893),o=e(45477),s=e(42480),c=e(46230),u=e(20427),d=e(55511),m=e(50319),l=e(8987),p=e(15861),y=e(11057),h=e(72882),f=e(7906),v=e(295),g=e(53816),_=e(53252),b=e(86886),x=e(67294),P=e(86501);function j(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function Z(t,n,e,a,r,i,o){try{var s=t[i](o),c=s.value}catch(u){return void e(u)}s.done?n(c):Promise.resolve(c).then(a,r)}function D(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function A(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},a=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(e).filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})))),a.forEach((function(n){D(t,n,e[n])}))}return t}function k(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var a,r,i=[],o=!0,s=!1;try{for(e=e.call(t);!(o=(a=e.next()).done)&&(i.push(a.value),!n||i.length!==n);o=!0);}catch(c){s=!0,r=c}finally{try{o||null==e.return||e.return()}finally{if(s)throw r}}return i}}(t,n)||function(t,n){if(!t)return;if("string"===typeof t)return j(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return j(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var w=[{name:"Company Name",value:"RAMAERA INDUSTRIES LTD."},{name:"Bank Name",value:"KOTAK MAHINDRA BANK "},{name:"Branch",value:"NOIDA SECTOR 63"},{name:"A/C No.",value:"4747237385"},{name:"IFSC CODE ",value:"KKBK0000180"}];n.default=function(){var t=(0,c.T)(),n=(0,x.useState)(!1),e=n[0],a=n[1],j=(0,c.C)((function(t){return t.user.data})),D=(0,x.useState)(!1),S=D[0],C=D[1],R=(0,x.useState)(null),N=R[0],O=R[1],B=(0,x.useState)(!1),I=B[0],E=B[1],T=(0,x.useState)(!1),U=T[0],W=T[1],M=(0,x.useState)(),F=M[0],L=M[1],K=(0,x.useState)(!1),V=K[0],H=K[1],$=(0,x.useState)(!1),G=$[0],J=$[1],X=k((0,m.D)(o.Is),1)[0],z=k((0,m.D)(o.yW),1)[0],q=function(t){return!!t||(alert("Invalid Image"),!1)},Q=function(t,n){var e,a=j,r=[];return null===j||void 0===j||null===(e=j.documents)||void 0===e||e.map((function(e){e.id===t?r.push(A({},e,{url:n})):r.push(e)})),A({},a,{documents:r})},Y=function(){var n,e=(n=r().mark((function n(){var e;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(q(N)){n.next=3;break}return n.abrupt("return");case 3:if(C(!0),n.prev=4,e="",!V){n.next=12;break}return n.next=9,(0,d.Z)(N);case 9:e=n.sent,n.next=13;break;case 12:e=N;case 13:if(P.ZP.success("Payment Slip Updated "),!F){n.next=20;break}return n.next=17,z({variables:{title:s.Z.agency_payment_proof.items[0].id,url:e,id:F.id}});case 17:t((0,u.j2)(Q(F.id,e))),n.next=22;break;case 20:return n.next=22,X({variables:{title:s.Z.agency_payment_proof.items[0].id,url:e}});case 22:n.next=26;break;case 24:n.prev=24,n.t0=n.catch(4);case 26:C(!1);case 27:case"end":return n.stop()}}),n,null,[[4,24]])})),function(){var t=this,e=arguments;return new Promise((function(a,r){var i=n.apply(t,e);function o(t){Z(i,a,r,o,s,"next",t)}function s(t){Z(i,a,r,o,s,"throw",t)}o(void 0)}))});return function(){return e.apply(this,arguments)}}();return(0,x.useEffect)((function(){var t,n;j&&j.documents&&(null===j||void 0===j||null===(t=j.documents)||void 0===t?void 0:t.length)>0&&(null===j||void 0===j||null===(n=j.documents)||void 0===n||n.find((function(t){t.title.toLowerCase()===s.Z.agency_payment_proof.items[0].id&&(L(t),O(t.url),a(!0))})))}),[j]),(0,i.jsx)(i.Fragment,{children:e?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(p.Z,{variant:"h4",sx:{my:2},children:"Kindly Deposit Rs. 5000 and upload the payment slip as a proof!"}),(0,i.jsxs)("div",{style:{flexDirection:"row",justifyContent:"space-between",marginTop:10,marginBottom:10},children:[(0,i.jsx)(y.Z,{style:{marginRight:20},variant:"contained",onClick:function(){E(!0),W(!1)},children:"Bank Details"}),(0,i.jsx)(y.Z,{variant:"contained",onClick:function(){E(!1),W(!0)},children:"UPI"})]})," ",I&&(0,i.jsx)(h.Z,{children:(0,i.jsx)(f.Z,{sx:{minWidth:100},"aria-label":"simple table",children:(0,i.jsx)(v.Z,{children:w.map((function(t){return(0,i.jsxs)(g.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,i.jsx)(_.Z,{component:"th",scope:"row",children:t.name}),(0,i.jsx)(_.Z,{align:"right",children:t.value})]},t.name)}))})})}),U&&(0,i.jsx)(h.Z,{children:(0,i.jsx)(f.Z,{sx:{minWidth:100},"aria-label":"simple table",children:(0,i.jsxs)(v.Z,{children:[(0,i.jsx)("img",{style:{width:"250px",borderRadius:"20px",padding:"10px"},src:"/images/upi.jpg"}),(0,i.jsx)(p.Z,{variant:"body1",sx:{my:2,pl:2},children:"OR"}),(0,i.jsx)(p.Z,{variant:"h4",sx:{my:2,pl:2},children:(0,i.jsx)("a",{href:"upi://pay?pa=ramaerakotak@ibl&pn=Ramaera K&cu=INR",children:"UPI ID : ramaerakotak@ibl"})})]})})}),N?(0,i.jsx)("img",{src:"object"==typeof N?URL.createObjectURL(N):N,style:{marginTop:"10px"},height:200}):null,F&&F.status&&(0,i.jsxs)(p.Z,{variant:"h4",sx:{my:2},children:["Status :"," ",(0,i.jsx)("span",{style:{color:F?"APPROVED"===F.status?"green":"REJECTED"===F.status&&"red":""},children:F&&F.status})]}),(0,i.jsxs)(b.ZP,{container:!0,py:2,spacing:2,children:[(0,i.jsx)(b.ZP,{item:!0,xs:12,sm:5,md:3,lg:3,children:(0,i.jsxs)(y.Z,{variant:"contained",component:"label",style:{cursor:F&&"APPROVED"===F.status?"not-allowed":"pointer"},color:F&&"APPROVED"===F.status?"secondary":"primary",children:["Select Payment Slip",(0,i.jsx)("input",{type:"file",accept:"image/*",hidden:!0,disabled:!!F&&"APPROVED"===F.status,onChange:function(t){t.target.files.length>0&&(J(!0),O(t.target.files[0]),H(!0))}})]})}),(0,i.jsx)(b.ZP,{item:!0,xs:2,children:(0,i.jsx)(l.Z,{loading:S,fullWidth:!0,variant:"contained",disabled:!G,onClick:function(){Y()},children:"Submit"})}),(0,i.jsx)(P.x7,{position:"bottom-center",reverseOrder:!1})]})]}):(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(b.ZP,{container:!0,py:2,spacing:2,sx:{display:"flex",justifyContent:"center"},children:(0,i.jsx)(y.Z,{onClick:function(){a(!0)},variant:"contained",component:"label",children:"Get Agency"})})})})}},42480:function(t,n){"use strict";n.Z={aadhar:{id:"aadhar",name:"Aadhar Card",status:"",items:[{id:"aadhar_front",name:"AADHAR Card Front",status:""},{id:"aadhar_back",name:"AADHAR Card Back",status:""}]},pancard:{id:"pancard",name:"Pancard",status:"",items:[{id:"pancard",name:"Pan Card",status:""}]},avatar:{id:"photo",name:"Photo",status:"",items:[{id:"avatar",name:"Passport Size Photo",status:""}]},voterId:{id:"voterId",name:"Voter Id Card",status:"Not Uploaded",items:[{id:"voterid_front",name:"Voter Id Front",status:""},{id:"voterid_back",name:"Voted Id Card Back",status:""}]},passbook:{name:"Passbook  or Bank Statement",id:"passbook",status:"Not Uploaded",items:[{id:"passbook",name:"Bank Passbook Or Bank Statement",status:"Not Uploaded"}]},payment_proof:{name:"Payment Proof",id:"payment_proof",status:"Not Uploaded",items:[{id:"payment_proof",name:"Payment Proof"}]},agency_payment_proof:{name:"Agency Payment Proof",id:"agency_payment_proof",status:"Not Uploaded",items:[{id:"agency_payment_proof",name:"Agency Payment Proof"}]},additional_documents:{name:"Additional Payment Document",id:"additional_payment_doc",items:[{id:"additional_payment_doc2",name:"Payment Document"},{id:"additional_payment_doc3",name:"Payment Document"},{id:"additional_payment_doc4",name:"Payment Document"},{id:"additional_payment_doc5",name:"Payment Document"}]},driving_license:{name:"Driving License",id:"driving_license",status:"Not Uploaded",items:[{id:"driving_license_front",name:"Driving License Front",status:""},{id:"driving_license_back",name:"Driving License Back",status:""}]},nominee_aadhar:{name:"Nominee Aadhar",id:"nominee_aadhar",status:"Not Uploaded",items:[{id:"nominee_aadhar_front",name:"AADHAR Card Front",status:""},{id:"nominee_aadhar_back",name:"AADHAR Card Back",status:""}]},demat_document:{name:"Demat Document",id:"demat_document",status:"Not Uploaded",items:[{id:"demat_document",name:"Demat Document",status:""}]},payment_additional_documents:{name:"Additional Payment Document",id:"additional_payment_doc",items:[{id:"additional_payment_doc2",name:"Payment Document"},{id:"additional_payment_doc3",name:"Payment Document"},{id:"additional_payment_doc4",name:"Payment Document"},{id:"additional_payment_doc5",name:"Payment Document"}]},project_payment:{name:"Project Payment",id:"project_payment",items:[{id:"project_payment_1",name:"Payment Document"},{id:"project_payment_2",name:"Payment Document"},{id:"project_payment_3",name:"Payment Document"},{id:"project_payment_4",name:"Payment Document"},{id:"project_payment_5",name:"Payment Document"}]}}},55511:function(t,n,e){"use strict";var a=e(34051),r=e.n(a),i=e(7155),o=e(6154);function s(t,n,e,a,r,i,o){try{var s=t[i](o),c=s.value}catch(u){return void e(u)}s.done?n(c):Promise.resolve(c).then(a,r)}var c=function(){var t,n=(t=r().mark((function t(n){var e,a;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(e=new FormData).append("document",n),t.next=4,o.Z.post("".concat(i.Z.API_URL,"/documents/upload"),e,{headers:{"Content-Type":"multipart/form-data"}});case 4:return a=t.sent,t.abrupt("return",a.data.url);case 6:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(a,r){var i=t.apply(n,e);function o(t){s(i,a,r,o,c,"next",t)}function c(t){s(i,a,r,o,c,"throw",t)}o(void 0)}))});return function(t){return n.apply(this,arguments)}}();n.Z=c}},function(t){t.O(0,[6093,9990,5133,2738,6154,6261,9774,2888,179],(function(){return n=95061,t(t.s=n);var n}));var n=t.O();_N_E=n}]);