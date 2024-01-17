(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8074],{11057:function(e,a,t){"use strict";t.d(a,{Z:function(){return S}});var n=t(63366),o=t(87462),r=t(67294),i=t(93680),s=t(47925),d=t(94780),l=t(41796),c=t(90948),m=t(71657),p=t(49990),u=t(98216),v=t(34867);function h(e){return(0,v.Z)("MuiButton",e)}var y=(0,t(1588).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),g=t(98363),_=t(85893);const f=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],b=e=>(0,o.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),x=(0,c.ZP)(p.Z,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,a[t.variant],a[`${t.variant}${(0,u.Z)(t.color)}`],a[`size${(0,u.Z)(t.size)}`],a[`${t.variant}Size${(0,u.Z)(t.size)}`],"inherit"===t.color&&a.colorInherit,t.disableElevation&&a.disableElevation,t.fullWidth&&a.fullWidth]}})((({theme:e,ownerState:a})=>{var t,n;return(0,o.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,o.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===a.variant&&"inherit"!==a.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)(e.palette[a.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===a.variant&&"inherit"!==a.color&&{border:`1px solid ${(e.vars||e).palette[a.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)(e.palette[a.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===a.variant&&{backgroundColor:(e.vars||e).palette.grey.A100,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===a.variant&&"inherit"!==a.color&&{backgroundColor:(e.vars||e).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[a.color].main}}),"&:active":(0,o.Z)({},"contained"===a.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${y.focusVisible}`]:(0,o.Z)({},"contained"===a.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${y.disabled}`]:(0,o.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===a.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"outlined"===a.variant&&"secondary"===a.color&&{border:`1px solid ${(e.vars||e).palette.action.disabled}`},"contained"===a.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===a.variant&&{padding:"6px 8px"},"text"===a.variant&&"inherit"!==a.color&&{color:(e.vars||e).palette[a.color].main},"outlined"===a.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===a.variant&&"inherit"!==a.color&&{color:(e.vars||e).palette[a.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[a.color].mainChannel} / 0.5)`:`1px solid ${(0,l.Fq)(e.palette[a.color].main,.5)}`},"contained"===a.variant&&{color:e.vars?e.vars.palette.text.primary:null==(t=(n=e.palette).getContrastText)?void 0:t.call(n,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],boxShadow:(e.vars||e).shadows[2]},"contained"===a.variant&&"inherit"!==a.color&&{color:(e.vars||e).palette[a.color].contrastText,backgroundColor:(e.vars||e).palette[a.color].main},"inherit"===a.color&&{color:"inherit",borderColor:"currentColor"},"small"===a.size&&"text"===a.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===a.size&&"text"===a.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===a.size&&"outlined"===a.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===a.size&&"outlined"===a.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===a.size&&"contained"===a.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===a.size&&"contained"===a.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},a.fullWidth&&{width:"100%"})}),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${y.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${y.disabled}`]:{boxShadow:"none"}})),Z=(0,c.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.startIcon,a[`iconSize${(0,u.Z)(t.size)}`]]}})((({ownerState:e})=>(0,o.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},b(e)))),P=(0,c.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.endIcon,a[`iconSize${(0,u.Z)(t.size)}`]]}})((({ownerState:e})=>(0,o.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},b(e))));var S=r.forwardRef((function(e,a){const t=r.useContext(g.Z),l=(0,s.Z)(t,e),c=(0,m.Z)({props:l,name:"MuiButton"}),{children:p,color:v="primary",component:y="button",className:b,disabled:S=!1,disableElevation:A=!1,disableFocusRipple:D=!1,endIcon:I,focusVisibleClassName:C,fullWidth:N=!1,size:w="medium",startIcon:R,type:z,variant:k="text"}=c,E=(0,n.Z)(c,f),j=(0,o.Z)({},c,{color:v,component:y,disabled:S,disableElevation:A,disableFocusRipple:D,fullWidth:N,size:w,type:z,variant:k}),T=(e=>{const{color:a,disableElevation:t,fullWidth:n,size:r,variant:i,classes:s}=e,l={root:["root",i,`${i}${(0,u.Z)(a)}`,`size${(0,u.Z)(r)}`,`${i}Size${(0,u.Z)(r)}`,"inherit"===a&&"colorInherit",t&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,u.Z)(r)}`],endIcon:["endIcon",`iconSize${(0,u.Z)(r)}`]},c=(0,d.Z)(l,h,s);return(0,o.Z)({},s,c)})(j),B=R&&(0,_.jsx)(Z,{className:T.startIcon,ownerState:j,children:R}),$=I&&(0,_.jsx)(P,{className:T.endIcon,ownerState:j,children:I});return(0,_.jsxs)(x,(0,o.Z)({ownerState:j,className:(0,i.Z)(b,t.className),component:y,disabled:S,focusRipple:!D,focusVisibleClassName:(0,i.Z)(T.focusVisible,C),ref:a,type:z},E,{classes:T,children:[B,p,$]}))}))},98363:function(e,a,t){"use strict";const n=t(67294).createContext({});a.Z=n},55113:function(e,a,t){"use strict";t.d(a,{Z:function(){return g}});var n=t(63366),o=t(87462),r=t(67294),i=t(93680),s=t(94780),d=t(41796),l=t(90948),c=t(71657),m=t(34867);function p(e){return(0,m.Z)("MuiPaper",e)}(0,t(1588).Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var u=t(85893);const v=["className","component","elevation","square","variant"],h=e=>{let a;return a=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,(a/100).toFixed(2)},y=(0,l.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,a[t.variant],!t.square&&a.rounded,"elevation"===t.variant&&a[`elevation${t.elevation}`]]}})((({theme:e,ownerState:a})=>{var t;return(0,o.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!a.square&&{borderRadius:e.shape.borderRadius},"outlined"===a.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===a.variant&&(0,o.Z)({boxShadow:(e.vars||e).shadows[a.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,d.Fq)("#fff",h(a.elevation))}, ${(0,d.Fq)("#fff",h(a.elevation))})`},e.vars&&{backgroundImage:null==(t=e.vars.overlays)?void 0:t[a.elevation]}))}));var g=r.forwardRef((function(e,a){const t=(0,c.Z)({props:e,name:"MuiPaper"}),{className:r,component:d="div",elevation:l=1,square:m=!1,variant:h="elevation"}=t,g=(0,n.Z)(t,v),_=(0,o.Z)({},t,{component:d,elevation:l,square:m,variant:h}),f=(e=>{const{square:a,elevation:t,variant:n,classes:o}=e,r={root:["root",n,!a&&"rounded","elevation"===n&&`elevation${t}`]};return(0,s.Z)(r,p,o)})(_);return(0,u.jsx)(y,(0,o.Z)({as:d,ownerState:_,className:(0,i.Z)(f.root,r),ref:a},g))}))},72882:function(e,a,t){"use strict";t.d(a,{Z:function(){return h}});var n=t(87462),o=t(63366),r=t(67294),i=t(93680),s=t(94780),d=t(71657),l=t(90948),c=t(34867);function m(e){return(0,c.Z)("MuiTableContainer",e)}(0,t(1588).Z)("MuiTableContainer",["root"]);var p=t(85893);const u=["className","component"],v=(0,l.ZP)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,a)=>a.root})({width:"100%",overflowX:"auto"});var h=r.forwardRef((function(e,a){const t=(0,d.Z)({props:e,name:"MuiTableContainer"}),{className:r,component:l="div"}=t,c=(0,o.Z)(t,u),h=(0,n.Z)({},t,{component:l}),y=(e=>{const{classes:a}=e;return(0,s.Z)({root:["root"]},m,a)})(h);return(0,p.jsx)(v,(0,n.Z)({ref:a,as:l,className:(0,i.Z)(y.root,r),ownerState:h},c))}))},15861:function(e,a,t){"use strict";t.d(a,{Z:function(){return f}});var n=t(63366),o=t(87462),r=t(67294),i=t(93680),s=t(39707),d=t(94780),l=t(90948),c=t(71657),m=t(98216),p=t(34867);function u(e){return(0,p.Z)("MuiTypography",e)}(0,t(1588).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var v=t(85893);const h=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],y=(0,l.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,t.variant&&a[t.variant],"inherit"!==t.align&&a[`align${(0,m.Z)(t.align)}`],t.noWrap&&a.noWrap,t.gutterBottom&&a.gutterBottom,t.paragraph&&a.paragraph]}})((({theme:e,ownerState:a})=>(0,o.Z)({margin:0},a.variant&&e.typography[a.variant],"inherit"!==a.align&&{textAlign:a.align},a.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},a.gutterBottom&&{marginBottom:"0.35em"},a.paragraph&&{marginBottom:16}))),g={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},_={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var f=r.forwardRef((function(e,a){const t=(0,c.Z)({props:e,name:"MuiTypography"}),r=(e=>_[e]||e)(t.color),l=(0,s.Z)((0,o.Z)({},t,{color:r})),{align:p="inherit",className:f,component:b,gutterBottom:x=!1,noWrap:Z=!1,paragraph:P=!1,variant:S="body1",variantMapping:A=g}=l,D=(0,n.Z)(l,h),I=(0,o.Z)({},l,{align:p,color:r,className:f,component:b,gutterBottom:x,noWrap:Z,paragraph:P,variant:S,variantMapping:A}),C=b||(P?"p":A[S]||g[S])||"span",N=(e=>{const{align:a,gutterBottom:t,noWrap:n,paragraph:o,variant:r,classes:i}=e,s={root:["root",r,"inherit"!==e.align&&`align${(0,m.Z)(a)}`,t&&"gutterBottom",n&&"noWrap",o&&"paragraph"]};return(0,d.Z)(s,u,i)})(I);return(0,v.jsx)(y,(0,o.Z)({as:C,ref:a,ownerState:I,className:(0,i.Z)(N.root,f)},D))}))},39707:function(e,a,t){"use strict";t.d(a,{Z:function(){return d}});var n=t(87462),o=t(63366),r=t(59766),i=t(44920);const s=["sx"];function d(e){const{sx:a}=e,t=(0,o.Z)(e,s),{systemProps:d,otherProps:l}=(e=>{var a,t;const n={systemProps:{},otherProps:{}},o=null!=(a=null==e||null==(t=e.theme)?void 0:t.unstable_sxConfig)?a:i.Z;return Object.keys(e).forEach((a=>{o[a]?n.systemProps[a]=e[a]:n.otherProps[a]=e[a]})),n})(t);let c;return c=Array.isArray(a)?[d,...a]:"function"===typeof a?(...e)=>{const t=a(...e);return(0,r.P)(t)?(0,n.Z)({},d,t):d}:(0,n.Z)({},d,a),(0,n.Z)({},l,{sx:c})}},20792:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/toAdvance/paymentDetails",function(){return t(28567)}])},28567:function(e,a,t){"use strict";t.r(a);var n=t(85893),o=t(67294),r=t(26183),i=t(15861),s=t(11057),d=t(72882),l=t(55113),c=t(7906),m=t(295),p=t(53816),u=t(53252),v=t(44709),h=t(34753),y=[{name:"Company Name",value:"RAMAERA INDUSTRIES LTD."},{name:"Bank Name",value:"ICICI BANK"},{name:"Branch",value:"NOIDA SECTOR 63"},{name:"A/C No.",value:"081605012239"},{name:"IFSC CODE ",value:"ICIC0000816"}];a.default=function(e){var a=e.docStatus,t=(0,r.C)((function(e){var a;return null===(a=e.user)||void 0===a?void 0:a.data})),g=(0,o.useState)(!1),_=g[0],f=g[1],b=(0,o.useState)(!1),x=b[0],Z=b[1],P=20230815;return(0,n.jsxs)(n.Fragment,{children:[(null===t||void 0===t?void 0:t.membership)===h.Z.membership.BASIC&&a!==h.Z.status.APPROVED&&(0,n.jsxs)(i.Z,{variant:"h4",sx:{my:2},children:["Kindly Deposit Rs."," ",(null===t||void 0===t?void 0:t.documents.find((function(e){return e.title===v.Z.payment_proof.id&&parseInt(e.createdAt.split("-").join(""))<P&&1e3===e.amount&&"APPROVED"===e.status})))?"199,000":(null===t||void 0===t?void 0:t.documents.find((function(e){return e.title===v.Z.payment_proof.id&&parseInt(e.createdAt.split("-").join(""))>P&&2e3===e.amount&&"APPROVED"===e.status})))?"198,000":"200,000","/- and upload the payment slip as a proof!"]}),(null===t||void 0===t?void 0:t.membership)===h.Z.membership.BASIC&&(0,n.jsxs)("div",{style:{flexDirection:"row",justifyContent:"space-between",marginTop:10,marginBottom:10},children:[(0,n.jsx)(s.Z,{style:{marginRight:20},variant:"contained",onClick:function(){f(!0),Z(!1)},children:"Bank Details"}),(0,n.jsx)(s.Z,{variant:"contained",onClick:function(){f(!1),Z(!0)},children:"UPI"})]}),_&&(0,n.jsx)(d.Z,{component:l.Z,children:(0,n.jsx)(c.Z,{sx:{minWidth:100},"aria-label":"simple table",children:(0,n.jsx)(m.Z,{children:y.map((function(e){return(0,n.jsxs)(p.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,n.jsx)(u.Z,{component:"th",scope:"row",children:e.name}),(0,n.jsx)(u.Z,{align:"right",children:e.value})]},e.name)}))})})}),x&&(0,n.jsx)(d.Z,{component:l.Z,children:(0,n.jsx)(c.Z,{sx:{minWidth:100},"aria-label":"simple table",children:(0,n.jsxs)(m.Z,{children:[(0,n.jsx)("img",{style:{width:"250px",borderRadius:"20px",padding:"10px"},src:"/images/ICICI_UPI.png"}),(0,n.jsx)(i.Z,{variant:"body1",sx:{my:2,pl:2},children:"OR"}),(0,n.jsx)(i.Z,{variant:"h4",sx:{my:2,pl:2},children:(0,n.jsx)("a",{href:"upi://pay?pa=ramaeraindustries@icici&pn=Ramaera K&cu=INR",children:"UPI ID : ramaeraindustries@icici"})})]})})})]})}},44709:function(e,a){"use strict";a.Z={aadhar:{id:"aadhar",name:"Aadhar Card",status:"",items:[{id:"aadhar_front",name:"AADHAR Card Front",status:""},{id:"aadhar_back",name:"AADHAR Card Back",status:""}]},pancard:{id:"pancard",name:"Pancard",status:"",items:[{id:"pancard",name:"Pan Card",status:""}]},avatar:{id:"photo",name:"Photo",status:"",items:[{id:"avatar",name:"Passport Size Photo",status:""}]},voterId:{id:"voterId",name:"Voter Id Card",status:"Not Uploaded",items:[{id:"voterid_front",name:"Voter Id Front",status:""},{id:"voterid_back",name:"Voted Id Card Back",status:""}]},passbook:{name:"Passbook  or Bank Statement",id:"passbook",status:"Not Uploaded",items:[{id:"passbook",name:"Bank Passbook Or Bank Statement",status:"Not Uploaded"}]},payment_proof:{name:"Payment Proof",id:"payment_proof",status:"Not Uploaded",items:[{id:"payment_proof",name:"Payment Proof"}]},agency_payment_proof:{name:"Agency Payment Proof",id:"agency_payment_proof",status:"Not Uploaded",items:[{id:"agency_payment_proof",name:"Agency Payment Proof"}]},upgrade_agency_license_payment_proof_documents:{name:"Upgrade Agency License Payment Proof",id:"upgrade_agency_license_payment_proof",items:[{id:"upgrade_agency_license_payment_proof2",name:"Upgrade Agency License Payment Proof"},{id:"upgrade_agency_license_payment_proof3",name:"Upgrade Agency License Payment Proof"},{id:"upgrade_agency_license_payment_proof4",name:"Upgrade Agency License Payment Proof"},{id:"upgrade_agency_license_payment_proof5",name:"Upgrade Agency License Payment Proof"}]},additional_payment_documents:{name:"Additional Payment Document",id:"additional_payment_doc",items:[{id:"additional_payment_doc2",name:"Payment Document"},{id:"additional_payment_doc3",name:"Payment Document"},{id:"additional_payment_doc4",name:"Payment Document"},{id:"additional_payment_doc5",name:"Payment Document"}]},to_advance_payment_proof:{name:"To Advance Payment Proof",id:"to_advance_payment_proof",status:"Not Uploaded",items:[{id:"to_advance_payment_proof",name:"To Advance Payment Proof"}]},to_advance_additional_documents:{name:"To Advance Additional Payment Document",id:"to_advance_additional_payment_doc",items:[{id:"to_advance_additional_payment_doc2",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc3",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc4",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc5",name:"To Advance Payment Document"}]},driving_license:{name:"Driving License",id:"driving_license",status:"Not Uploaded",items:[{id:"driving_license_front",name:"Driving License Front",status:""},{id:"driving_license_back",name:"Driving License Back",status:""}]},nominee_aadhar:{name:"Nominee Aadhar",id:"nominee_aadhar",status:"Not Uploaded",items:[{id:"nominee_aadhar_front",name:"AADHAR Card Front",status:""},{id:"nominee_aadhar_back",name:"AADHAR Card Back",status:""}]},demat_document:{name:"Demat Document",id:"demat_document",status:"Not Uploaded",items:[{id:"demat_document",name:"Demat Document",status:""}]},additional_demat_documents:{name:"Additional Demat Document",id:"additional_demat_documents",items:[{id:"demat_document_2",name:"Demat Document"},{id:"demat_document_3",name:"Demat Document"},{id:"demat_document_4",name:"Demat Document"},{id:"demat_document_5",name:"Demat Document"}]},project_payment:{name:"Project Payment",id:"project_payment",items:[{id:"project_payment_1",name:"Payment Document"},{id:"project_payment_2",name:"Payment Document"},{id:"project_payment_3",name:"Payment Document"},{id:"project_payment_4",name:"Payment Document"},{id:"project_payment_5",name:"Payment Document"},{id:"project_payment_6",name:"Payment Document"},{id:"project_payment_7",name:"Payment Document"},{id:"project_payment_8",name:"Payment Document"},{id:"project_payment_9",name:"Payment Document"},{id:"project_payment_10",name:"Payment Document"},{id:"project_payment_11",name:"Payment Document"}]}}},34753:function(e,a){"use strict";a.Z={project:{AGRA:"agra",HAJIPUR:"hajipur"},role:{ADMIN:"ADMIN",AGENT:"AGENT",USER:"USER"},membership:{ADVANCE:"ADVANCE",BASIC:"BASIC"},status:{AGENT_APPROVED:"AGENT_APPROVED",APPROVED:"APPROVED",NOT_INITIALIZED:"NOT_INITIALIZED",ONGOING:"ONGOING",PENDING:"PENDING",REJECTED:"REJECTED",SUBMITTED:"SUBMITTED"},amount:{beforeFifteenthAugustBasicAmount:1e3,beforeFifteenthAugustAdvanceAmount:1e5,afterFifteenthAugustBasicAmount:2e3,afterFifteenthAugustAdvanceAmount:2e5}}}},function(e){e.O(0,[8244,9990,2453,9774,2888,179],(function(){return a=20792,e(e.s=a);var a}));var a=e.O();_N_E=a}]);