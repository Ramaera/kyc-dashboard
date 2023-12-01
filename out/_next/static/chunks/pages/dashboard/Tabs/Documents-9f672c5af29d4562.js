(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6728],{55113:function(t,e,n){"use strict";n.d(e,{Z:function(){return _}});var a=n(63366),o=n(87462),r=n(67294),i=n(93680),s=n(94780),c=n(41796),d=n(90948),u=n(71657),l=n(34867);function m(t){return(0,l.Z)("MuiPaper",t)}(0,n(1588).Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var p=n(85893);const v=["className","component","elevation","square","variant"],f=t=>{let e;return e=t<1?5.11916*t**2:4.5*Math.log(t+1)+2,(e/100).toFixed(2)},h=(0,d.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],!n.square&&e.rounded,"elevation"===n.variant&&e[`elevation${n.elevation}`]]}})((({theme:t,ownerState:e})=>{var n;return(0,o.Z)({backgroundColor:(t.vars||t).palette.background.paper,color:(t.vars||t).palette.text.primary,transition:t.transitions.create("box-shadow")},!e.square&&{borderRadius:t.shape.borderRadius},"outlined"===e.variant&&{border:`1px solid ${(t.vars||t).palette.divider}`},"elevation"===e.variant&&(0,o.Z)({boxShadow:(t.vars||t).shadows[e.elevation]},!t.vars&&"dark"===t.palette.mode&&{backgroundImage:`linear-gradient(${(0,c.Fq)("#fff",f(e.elevation))}, ${(0,c.Fq)("#fff",f(e.elevation))})`},t.vars&&{backgroundImage:null==(n=t.vars.overlays)?void 0:n[e.elevation]}))}));var _=r.forwardRef((function(t,e){const n=(0,u.Z)({props:t,name:"MuiPaper"}),{className:r,component:c="div",elevation:d=1,square:l=!1,variant:f="elevation"}=n,_=(0,a.Z)(n,v),g=(0,o.Z)({},n,{component:c,elevation:d,square:l,variant:f}),y=(t=>{const{square:e,elevation:n,variant:a,classes:o}=t,r={root:["root",a,!e&&"rounded","elevation"===a&&`elevation${n}`]};return(0,s.Z)(r,m,o)})(g);return(0,p.jsx)(h,(0,o.Z)({as:c,ownerState:g,className:(0,i.Z)(y.root,r),ref:e},_))}))},53184:function(t,e,n){"use strict";n.d(e,{Z:function(){return g}});var a=n(87462),o=n(63366),r=n(67294),i=n(93680),s=n(94780),c=n(44063),d=n(71657),u=n(90948),l=n(34867);function m(t){return(0,l.Z)("MuiTableHead",t)}(0,n(1588).Z)("MuiTableHead",["root"]);var p=n(85893);const v=["className","component"],f=(0,u.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(t,e)=>e.root})({display:"table-header-group"}),h={variant:"head"},_="thead";var g=r.forwardRef((function(t,e){const n=(0,d.Z)({props:t,name:"MuiTableHead"}),{className:r,component:u=_}=n,l=(0,o.Z)(n,v),g=(0,a.Z)({},n,{component:u}),y=(t=>{const{classes:e}=t;return(0,s.Z)({root:["root"]},m,e)})(g);return(0,p.jsx)(c.Z.Provider,{value:h,children:(0,p.jsx)(f,(0,a.Z)({as:u,className:(0,i.Z)(y.root,r),ref:e,role:u===_?null:"rowgroup",ownerState:g},l))})}))},15861:function(t,e,n){"use strict";n.d(e,{Z:function(){return y}});var a=n(63366),o=n(87462),r=n(67294),i=n(93680),s=n(39707),c=n(94780),d=n(90948),u=n(71657),l=n(98216),m=n(34867);function p(t){return(0,m.Z)("MuiTypography",t)}(0,n(1588).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var v=n(85893);const f=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],h=(0,d.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.variant&&e[n.variant],"inherit"!==n.align&&e[`align${(0,l.Z)(n.align)}`],n.noWrap&&e.noWrap,n.gutterBottom&&e.gutterBottom,n.paragraph&&e.paragraph]}})((({theme:t,ownerState:e})=>(0,o.Z)({margin:0},e.variant&&t.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16}))),_={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},g={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var y=r.forwardRef((function(t,e){const n=(0,u.Z)({props:t,name:"MuiTypography"}),r=(t=>g[t]||t)(n.color),d=(0,s.Z)((0,o.Z)({},n,{color:r})),{align:m="inherit",className:y,component:Z,gutterBottom:b=!1,noWrap:P=!1,paragraph:D=!1,variant:A="body1",variantMapping:x=_}=d,j=(0,a.Z)(d,f),N=(0,o.Z)({},d,{align:m,color:r,className:y,component:Z,gutterBottom:b,noWrap:P,paragraph:D,variant:A,variantMapping:x}),w=Z||(D?"p":x[A]||_[A])||"span",E=(t=>{const{align:e,gutterBottom:n,noWrap:a,paragraph:o,variant:r,classes:i}=t,s={root:["root",r,"inherit"!==t.align&&`align${(0,l.Z)(e)}`,n&&"gutterBottom",a&&"noWrap",o&&"paragraph"]};return(0,c.Z)(s,p,i)})(N);return(0,v.jsx)(h,(0,o.Z)({as:w,ref:e,ownerState:N,className:(0,i.Z)(E.root,y)},j))}))},2734:function(t,e,n){"use strict";n.d(e,{Z:function(){return r}});n(67294);var a=n(96682),o=n(90247);function r(){return(0,a.Z)(o.Z)}},58974:function(t,e,n){"use strict";var a=n(73546);e.Z=a.Z},27909:function(t,e,n){"use strict";var a=n(92996);e.Z=a.Z},92996:function(t,e,n){"use strict";var a;n.d(e,{Z:function(){return s}});var o=n(67294);let r=0;const i=(a||(a=n.t(o,2)))["useId".toString()];function s(t){if(void 0!==i){const e=i();return null!=t?t:e}return function(t){const[e,n]=o.useState(t),a=t||e;return o.useEffect((()=>{null==e&&(r+=1,n(`mui-${r}`))}),[e]),a}(t)}},82866:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/Tabs/Documents",function(){return n(99261)}])},37861:function(t,e,n){"use strict";n.r(e),n.d(e,{rows:function(){return r}});var a=n(85893),o=n(44709),r=[{config:o.Z.avatar,status:-1},{config:o.Z.aadhar,status:-1},{config:o.Z.pancard,status:-1},{config:o.Z.passbook,status:-1},{config:o.Z.voterId,status:-1,isOptional:!0},{config:o.Z.driving_license,status:-1,isOptional:!0}];e.default=function(){return(0,a.jsx)("div",{children:"RemoveError"})}},99261:function(t,e,n){"use strict";n.r(e);var a=n(47568),o=n(14924),r=n(26042),i=n(69396),s=n(828),c=n(29815),d=n(97582),u=n(85893),l=n(4749),m=n(26183),p=n(29792),v=n(50319),f=n(8987),h=n(2734),_=n(11057),g=n(15861),y=n(50456),Z=n(55113),b=n(7906),P=n(295),D=n(53252),A=n(72882),x=n(53184),j=n(89448),N=n(53816),w=(n(68680),n(3924),n(72484),n(67294)),E=n(86501),T=n(37861),R=n(34753),k=function(t){var e=t.data,n=t.documents,y=void 0===n?[]:n,Z=t.user,b=(0,h.Z)(),P=(0,w.useState)([]),A=P[0],x=P[1],T=(0,w.useState)([]),k=T[0],I=T[1],C=(0,s.Z)((0,v.D)(l.Is),1)[0],S=(0,s.Z)((0,v.D)(l.yW),1)[0],O=(0,w.useState)(!1),B=O[0],U=O[1],M=(0,m.T)();(0,w.useEffect)((function(){var t=[],e=!0,n=!1,a=void 0;try{for(var o,r=y[Symbol.iterator]();!(e=(o=r.next()).done);e=!0){var i=o.value;t.push(i.url)}}catch(s){n=!0,a=s}finally{try{e||null==r.return||r.return()}finally{if(n)throw a}}x(t)}),[y,Z]);var V=function(){var t=(0,a.Z)((function(t,e){return(0,d.__generator)(this,(function(n){switch(n.label){case 0:return[4,C({variables:{title:t,url:e}})];case 1:return[2,n.sent()]}}))}));return function(e,n){return t.apply(this,arguments)}}(),F=function(){var t=(0,a.Z)((function(t,e,n){return(0,d.__generator)(this,(function(a){switch(a.label){case 0:return[4,S({variables:{id:t,title:e,url:n}})];case 1:return[2,a.sent()]}}))}));return function(e,n,a){return t.apply(this,arguments)}}(),L=function(t,e,n){var a,o=Z,s=[];return null===Z||void 0===Z||null===(a=Z.documents)||void 0===a||a.map((function(n){n.id===t?s.push((0,i.Z)((0,r.Z)({},n),{title:"avatar"})):n.title!==e&&s.push(n)})),(0,i.Z)((0,r.Z)({},o),{documents:s})},G=function(){var t=(0,a.Z)((function(){var t,n,a;return(0,d.__generator)(this,(function(o){switch(o.label){case 0:U(!0),o.label=1;case 1:o.trys.push([1,6,,7]),t=function(t){var n,a,o,i,s,u,l,m;return(0,d.__generator)(this,(function(d){switch(d.label){case 0:return k[t]?(n=e.config.items[t].id,[4,(0,p.Z)(A[t])]):[3,7];case 1:return a=d.sent(),o=y.find((function(t){if(t.title.toLowerCase()===n.toLowerCase())return!0})),(i=null===Z||void 0===Z?void 0:Z.documents)||(i=[]),o?[4,F(o.id,n,a)]:[3,4];case 2:return s=d.sent(),[4,M((0,j.j2)(L(o.id,n)))];case 3:return d.sent(),E.ZP.success("".concat(n," Uploaded")),(u=i.filter((function(t){return t.id!==document.id}))).push(s.data.updateDocument),i=u,[3,6];case 4:return[4,V(n,a)];case 5:l=d.sent(),E.ZP.success("".concat(n," Uploaded")),i=(0,c.Z)(i).concat([l.data.createDocument]),d.label=6;case 6:(m=(0,r.Z)({},Z)).documents=i,M((0,j.j2)(m)),d.label=7;case 7:return[2]}}))},n=0,o.label=2;case 2:return n<k.length?[5,(0,d.__values)(t(n))]:[3,5];case 3:o.sent(),o.label=4;case 4:return n++,[3,2];case 5:return[3,7];case 6:return a=o.sent(),console.log("error",a),[3,7];case 7:return U(!1),[2]}}))}));return function(){return t.apply(this,arguments)}}();return(0,u.jsxs)(N.Z,{sx:(0,o.Z)({"&:last-child td, &:last-child th":{border:0}},b.breakpoints.down("sm"),{display:"flex",flexDirection:"column"}),children:[(0,u.jsxs)(D.Z,{component:"th",scope:"row",children:[e.config.name," ",e.isOptional?"(Optional)":""]}),(0,u.jsx)(D.Z,{children:function(){for(var t=[],n=e.config.items,a=0;a<n.length;a++){var o=A[a];o&&t.push((0,u.jsx)("img",{src:"object"==typeof o?URL.createObjectURL(o):o,height:100,style:{marginLeft:"5px"}}))}return 0==t.length?(0,u.jsx)(g.Z,{variant:"subtitle1",children:"No Document"}):t}()}),(0,u.jsx)(D.Z,{children:function(){for(var t=function(t){n.push((0,u.jsxs)(_.Z,{style:{cursor:y[0]&&"APPROVED"===y[0].status?"not-allowed":"pointer",marginTop:"10px"},component:"label",color:y[0]&&"APPROVED"===y[0].status?"secondary":"primary",children:["Choose ",a[t].name,(0,u.jsx)("input",{type:"file",accept:"image/*",hidden:!0,disabled:!!y[0]&&"APPROVED"===y[0].status,onChange:function(e){if(e.target.files.length>0){var n=(0,c.Z)(A);n[t]=e.target.files[0],x(n),console.log("imageChanged",n[t]);var a=(0,c.Z)(k);a[t]=!0,I(a)}}})]}))},n=[],a=e.config.items,o=0;o<a.length;o++)t(o);return n}()}),(0,u.jsx)(D.Z,{children:(null===Z||void 0===Z?void 0:Z.kyc)!==R.Z.status.APPROVED&&(0,u.jsx)(f.Z,{loading:B,disabled:!function(){var t=k.find((function(t){if(t)return!0}));if(A.length==e.config.items.length&&t)return!0}(),variant:"contained",onClick:function(){G()},children:"Upload"})}),(0,u.jsx)(D.Z,{children:(0,u.jsx)("span",{style:{color:y[0]?"APPROVED"===y[0].status?"green":"REJECTED"===y[0].status&&"red":""},children:y[0]&&y[0].status})})]},e.config.name)};e.default=function(){var t=(0,m.C)((function(t){var e;return null===(e=t.user)||void 0===e?void 0:e.data})),e=function(e){var n=[];if(t&&(null===t||void 0===t?void 0:t.documents)){var a=!0,o=!1,r=void 0;try{for(var i,s=function(){var e,a=i.value,o=null===t||void 0===t||null===(e=t.documents)||void 0===e?void 0:e.find((function(t){if(t.title.toLowerCase()===a.id.toLowerCase())return!0}));o&&n.push(o)},c=e[Symbol.iterator]();!(a=(i=c.next()).done);a=!0)s()}catch(d){o=!0,r=d}finally{try{a||null==c.return||c.return()}finally{if(o)throw r}}}return n};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(g.Z,{variant:"h4",sx:{my:2},children:"Kindly Upload the documents requested below"}),(0,u.jsxs)(A.Z,{component:Z.Z,children:[(0,u.jsxs)(b.Z,{"aria-label":"simple table",children:[(0,u.jsx)(x.Z,{children:(0,u.jsxs)(N.Z,{children:[(0,u.jsx)(D.Z,{children:"Document Name"}),(0,u.jsxs)(y.Z,{smDown:!0,children:[(0,u.jsx)(D.Z,{children:"Preview"}),(0,u.jsx)(D.Z,{style:{padding:"0 0 0 2rem"},children:"Action"}),(0,u.jsx)(D.Z,{style:{padding:"0 0 0 2rem"},children:"Upload Action"}),(0,u.jsx)(D.Z,{children:"Status"})]})]})}),(0,u.jsx)(P.Z,{children:T.rows.map((function(n,a){return(0,u.jsx)(k,{data:n,user:t,documents:e(n.config.items)},a)}))})]}),(0,u.jsx)(E.x7,{position:"bottom-center",reverseOrder:!1})]})]})}},44709:function(t,e){"use strict";e.Z={aadhar:{id:"aadhar",name:"Aadhar Card",status:"",items:[{id:"aadhar_front",name:"AADHAR Card Front",status:""},{id:"aadhar_back",name:"AADHAR Card Back",status:""}]},pancard:{id:"pancard",name:"Pancard",status:"",items:[{id:"pancard",name:"Pan Card",status:""}]},avatar:{id:"photo",name:"Photo",status:"",items:[{id:"avatar",name:"Passport Size Photo",status:""}]},voterId:{id:"voterId",name:"Voter Id Card",status:"Not Uploaded",items:[{id:"voterid_front",name:"Voter Id Front",status:""},{id:"voterid_back",name:"Voted Id Card Back",status:""}]},passbook:{name:"Passbook  or Bank Statement",id:"passbook",status:"Not Uploaded",items:[{id:"passbook",name:"Bank Passbook Or Bank Statement",status:"Not Uploaded"}]},payment_proof:{name:"Payment Proof",id:"payment_proof",status:"Not Uploaded",items:[{id:"payment_proof",name:"Payment Proof"}]},agency_payment_proof:{name:"Agency Payment Proof",id:"agency_payment_proof",status:"Not Uploaded",items:[{id:"agency_payment_proof",name:"Agency Payment Proof"}]},additional_payment_documents:{name:"Additional Payment Document",id:"additional_payment_doc",items:[{id:"additional_payment_doc2",name:"Payment Document"},{id:"additional_payment_doc3",name:"Payment Document"},{id:"additional_payment_doc4",name:"Payment Document"},{id:"additional_payment_doc5",name:"Payment Document"}]},to_advance_payment_proof:{name:"To Advance Payment Proof",id:"to_advance_payment_proof",status:"Not Uploaded",items:[{id:"to_advance_payment_proof",name:"To Advance Payment Proof"}]},to_advance_additional_documents:{name:"To Advance Additional Payment Document",id:"to_advance_additional_payment_doc",items:[{id:"to_advance_additional_payment_doc2",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc3",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc4",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc5",name:"To Advance Payment Document"}]},driving_license:{name:"Driving License",id:"driving_license",status:"Not Uploaded",items:[{id:"driving_license_front",name:"Driving License Front",status:""},{id:"driving_license_back",name:"Driving License Back",status:""}]},nominee_aadhar:{name:"Nominee Aadhar",id:"nominee_aadhar",status:"Not Uploaded",items:[{id:"nominee_aadhar_front",name:"AADHAR Card Front",status:""},{id:"nominee_aadhar_back",name:"AADHAR Card Back",status:""}]},demat_document:{name:"Demat Document",id:"demat_document",status:"Not Uploaded",items:[{id:"demat_document",name:"Demat Document",status:""}]},additional_demat_documents:{name:"Additional Demat Document",id:"additional_demat_documents",items:[{id:"demat_document_2",name:"Demat Document"},{id:"demat_document_3",name:"Demat Document"},{id:"demat_document_4",name:"Demat Document"},{id:"demat_document_5",name:"Demat Document"}]},project_payment:{name:"Project Payment",id:"project_payment",items:[{id:"project_payment_1",name:"Payment Document"},{id:"project_payment_2",name:"Payment Document"},{id:"project_payment_3",name:"Payment Document"},{id:"project_payment_4",name:"Payment Document"},{id:"project_payment_5",name:"Payment Document"}]}}},34753:function(t,e){"use strict";e.Z={project:{AGRA:"agra",HAJIPUR:"hajipur"},role:{ADMIN:"ADMIN",AGENT:"AGENT",USER:"USER"},membership:{ADVANCE:"ADVANCE",BASIC:"BASIC"},status:{AGENT_APPROVED:"AGENT_APPROVED",APPROVED:"APPROVED",NOT_INITIALIZED:"NOT_INITIALIZED",ONGOING:"ONGOING",PENDING:"PENDING",REJECTED:"REJECTED",SUBMITTED:"SUBMITTED"},amount:{beforeFifteenthAugustBasicAmount:1e3,beforeFifteenthAugustAdvanceAmount:1e5,afterFifteenthAugustBasicAmount:2e3,afterFifteenthAugustAdvanceAmount:2e5}}},29792:function(t,e,n){"use strict";var a=n(47568),o=n(97582),r=n(6154),i=function(){var t=(0,a.Z)((function(t){var e;return(0,o.__generator)(this,(function(n){switch(n.label){case 0:return(e=new FormData).append("document",t),[4,r.Z.post("".concat("https://kycramaerabackend.ramaera.com","/documents/upload"),e,{headers:{"Content-Type":"multipart/form-data"}})];case 1:return[2,n.sent().data.url]}}))}));return function(e){return t.apply(this,arguments)}}();e.Z=i},68680:function(){},3924:function(){},72484:function(){},29815:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var a=n(20943);var o=n(13375);var r=n(91566);function i(t){return function(t){if(Array.isArray(t))return(0,a.Z)(t)}(t)||(0,o.Z)(t)||(0,r.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(t){t.O(0,[2005,5370,9990,9260,456,6261,8764,9515,2659,9774,2888,179],(function(){return e=82866,t(t.s=e);var e}));var e=t.O();_N_E=e}]);