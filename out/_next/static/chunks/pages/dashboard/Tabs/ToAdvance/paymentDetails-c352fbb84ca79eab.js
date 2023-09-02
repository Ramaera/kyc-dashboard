(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9050],{11057:function(a,e,t){"use strict";t.d(e,{Z:function(){return P}});var n=t(63366),o=t(87462),i=t(67294),r=t(93680),d=t(47925),s=t(94780),l=t(41796),c=t(90948),m=t(71657),p=t(49990),u=t(98216),v=t(34867);function h(a){return(0,v.Z)("MuiButton",a)}var y=(0,t(1588).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),g=t(98363),b=t(85893);const f=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],x=a=>(0,o.Z)({},"small"===a.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===a.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===a.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),_=(0,c.ZP)(p.Z,{shouldForwardProp:a=>(0,c.FO)(a)||"classes"===a,name:"MuiButton",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:t}=a;return[e.root,e[t.variant],e[`${t.variant}${(0,u.Z)(t.color)}`],e[`size${(0,u.Z)(t.size)}`],e[`${t.variant}Size${(0,u.Z)(t.size)}`],"inherit"===t.color&&e.colorInherit,t.disableElevation&&e.disableElevation,t.fullWidth&&e.fullWidth]}})((({theme:a,ownerState:e})=>{var t,n;return(0,o.Z)({},a.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(a.vars||a).shape.borderRadius,transition:a.transitions.create(["background-color","box-shadow","border-color","color"],{duration:a.transitions.duration.short}),"&:hover":(0,o.Z)({textDecoration:"none",backgroundColor:a.vars?`rgba(${a.vars.palette.text.primaryChannel} / ${a.vars.palette.action.hoverOpacity})`:(0,l.Fq)(a.palette.text.primary,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===e.variant&&"inherit"!==e.color&&{backgroundColor:a.vars?`rgba(${a.vars.palette[e.color].mainChannel} / ${a.vars.palette.action.hoverOpacity})`:(0,l.Fq)(a.palette[e.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===e.variant&&"inherit"!==e.color&&{border:`1px solid ${(a.vars||a).palette[e.color].main}`,backgroundColor:a.vars?`rgba(${a.vars.palette[e.color].mainChannel} / ${a.vars.palette.action.hoverOpacity})`:(0,l.Fq)(a.palette[e.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===e.variant&&{backgroundColor:(a.vars||a).palette.grey.A100,boxShadow:(a.vars||a).shadows[4],"@media (hover: none)":{boxShadow:(a.vars||a).shadows[2],backgroundColor:(a.vars||a).palette.grey[300]}},"contained"===e.variant&&"inherit"!==e.color&&{backgroundColor:(a.vars||a).palette[e.color].dark,"@media (hover: none)":{backgroundColor:(a.vars||a).palette[e.color].main}}),"&:active":(0,o.Z)({},"contained"===e.variant&&{boxShadow:(a.vars||a).shadows[8]}),[`&.${y.focusVisible}`]:(0,o.Z)({},"contained"===e.variant&&{boxShadow:(a.vars||a).shadows[6]}),[`&.${y.disabled}`]:(0,o.Z)({color:(a.vars||a).palette.action.disabled},"outlined"===e.variant&&{border:`1px solid ${(a.vars||a).palette.action.disabledBackground}`},"outlined"===e.variant&&"secondary"===e.color&&{border:`1px solid ${(a.vars||a).palette.action.disabled}`},"contained"===e.variant&&{color:(a.vars||a).palette.action.disabled,boxShadow:(a.vars||a).shadows[0],backgroundColor:(a.vars||a).palette.action.disabledBackground})},"text"===e.variant&&{padding:"6px 8px"},"text"===e.variant&&"inherit"!==e.color&&{color:(a.vars||a).palette[e.color].main},"outlined"===e.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===e.variant&&"inherit"!==e.color&&{color:(a.vars||a).palette[e.color].main,border:a.vars?`1px solid rgba(${a.vars.palette[e.color].mainChannel} / 0.5)`:`1px solid ${(0,l.Fq)(a.palette[e.color].main,.5)}`},"contained"===e.variant&&{color:a.vars?a.vars.palette.text.primary:null==(t=(n=a.palette).getContrastText)?void 0:t.call(n,a.palette.grey[300]),backgroundColor:(a.vars||a).palette.grey[300],boxShadow:(a.vars||a).shadows[2]},"contained"===e.variant&&"inherit"!==e.color&&{color:(a.vars||a).palette[e.color].contrastText,backgroundColor:(a.vars||a).palette[e.color].main},"inherit"===e.color&&{color:"inherit",borderColor:"currentColor"},"small"===e.size&&"text"===e.variant&&{padding:"4px 5px",fontSize:a.typography.pxToRem(13)},"large"===e.size&&"text"===e.variant&&{padding:"8px 11px",fontSize:a.typography.pxToRem(15)},"small"===e.size&&"outlined"===e.variant&&{padding:"3px 9px",fontSize:a.typography.pxToRem(13)},"large"===e.size&&"outlined"===e.variant&&{padding:"7px 21px",fontSize:a.typography.pxToRem(15)},"small"===e.size&&"contained"===e.variant&&{padding:"4px 10px",fontSize:a.typography.pxToRem(13)},"large"===e.size&&"contained"===e.variant&&{padding:"8px 22px",fontSize:a.typography.pxToRem(15)},e.fullWidth&&{width:"100%"})}),(({ownerState:a})=>a.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${y.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${y.disabled}`]:{boxShadow:"none"}})),Z=(0,c.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(a,e)=>{const{ownerState:t}=a;return[e.startIcon,e[`iconSize${(0,u.Z)(t.size)}`]]}})((({ownerState:a})=>(0,o.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===a.size&&{marginLeft:-2},x(a)))),S=(0,c.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(a,e)=>{const{ownerState:t}=a;return[e.endIcon,e[`iconSize${(0,u.Z)(t.size)}`]]}})((({ownerState:a})=>(0,o.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===a.size&&{marginRight:-2},x(a))));var P=i.forwardRef((function(a,e){const t=i.useContext(g.Z),l=(0,d.Z)(t,a),c=(0,m.Z)({props:l,name:"MuiButton"}),{children:p,color:v="primary",component:y="button",className:x,disabled:P=!1,disableElevation:w=!1,disableFocusRipple:C=!1,endIcon:z,focusVisibleClassName:I,fullWidth:k=!1,size:R="medium",startIcon:D,type:A,variant:N="text"}=c,$=(0,n.Z)(c,f),j=(0,o.Z)({},c,{color:v,component:y,disabled:P,disableElevation:w,disableFocusRipple:C,fullWidth:k,size:R,type:A,variant:N}),B=(a=>{const{color:e,disableElevation:t,fullWidth:n,size:i,variant:r,classes:d}=a,l={root:["root",r,`${r}${(0,u.Z)(e)}`,`size${(0,u.Z)(i)}`,`${r}Size${(0,u.Z)(i)}`,"inherit"===e&&"colorInherit",t&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,u.Z)(i)}`],endIcon:["endIcon",`iconSize${(0,u.Z)(i)}`]},c=(0,s.Z)(l,h,d);return(0,o.Z)({},d,c)})(j),T=D&&(0,b.jsx)(Z,{className:B.startIcon,ownerState:j,children:D}),M=z&&(0,b.jsx)(S,{className:B.endIcon,ownerState:j,children:z});return(0,b.jsxs)(_,(0,o.Z)({ownerState:j,className:(0,r.Z)(x,t.className),component:y,disabled:P,focusRipple:!C,focusVisibleClassName:(0,r.Z)(B.focusVisible,I),ref:e,type:A},$,{classes:B,children:[T,p,M]}))}))},98363:function(a,e,t){"use strict";const n=t(67294).createContext({});e.Z=n},55113:function(a,e,t){"use strict";t.d(e,{Z:function(){return g}});var n=t(63366),o=t(87462),i=t(67294),r=t(93680),d=t(94780),s=t(41796),l=t(90948),c=t(71657),m=t(34867);function p(a){return(0,m.Z)("MuiPaper",a)}(0,t(1588).Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var u=t(85893);const v=["className","component","elevation","square","variant"],h=a=>{let e;return e=a<1?5.11916*a**2:4.5*Math.log(a+1)+2,(e/100).toFixed(2)},y=(0,l.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:t}=a;return[e.root,e[t.variant],!t.square&&e.rounded,"elevation"===t.variant&&e[`elevation${t.elevation}`]]}})((({theme:a,ownerState:e})=>{var t;return(0,o.Z)({backgroundColor:(a.vars||a).palette.background.paper,color:(a.vars||a).palette.text.primary,transition:a.transitions.create("box-shadow")},!e.square&&{borderRadius:a.shape.borderRadius},"outlined"===e.variant&&{border:`1px solid ${(a.vars||a).palette.divider}`},"elevation"===e.variant&&(0,o.Z)({boxShadow:(a.vars||a).shadows[e.elevation]},!a.vars&&"dark"===a.palette.mode&&{backgroundImage:`linear-gradient(${(0,s.Fq)("#fff",h(e.elevation))}, ${(0,s.Fq)("#fff",h(e.elevation))})`},a.vars&&{backgroundImage:null==(t=a.vars.overlays)?void 0:t[e.elevation]}))}));var g=i.forwardRef((function(a,e){const t=(0,c.Z)({props:a,name:"MuiPaper"}),{className:i,component:s="div",elevation:l=1,square:m=!1,variant:h="elevation"}=t,g=(0,n.Z)(t,v),b=(0,o.Z)({},t,{component:s,elevation:l,square:m,variant:h}),f=(a=>{const{square:e,elevation:t,variant:n,classes:o}=a,i={root:["root",n,!e&&"rounded","elevation"===n&&`elevation${t}`]};return(0,d.Z)(i,p,o)})(b);return(0,u.jsx)(y,(0,o.Z)({as:s,ownerState:b,className:(0,r.Z)(f.root,i),ref:e},g))}))},15861:function(a,e,t){"use strict";t.d(e,{Z:function(){return f}});var n=t(63366),o=t(87462),i=t(67294),r=t(93680),d=t(39707),s=t(94780),l=t(90948),c=t(71657),m=t(98216),p=t(34867);function u(a){return(0,p.Z)("MuiTypography",a)}(0,t(1588).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var v=t(85893);const h=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],y=(0,l.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:t}=a;return[e.root,t.variant&&e[t.variant],"inherit"!==t.align&&e[`align${(0,m.Z)(t.align)}`],t.noWrap&&e.noWrap,t.gutterBottom&&e.gutterBottom,t.paragraph&&e.paragraph]}})((({theme:a,ownerState:e})=>(0,o.Z)({margin:0},e.variant&&a.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16}))),g={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var f=i.forwardRef((function(a,e){const t=(0,c.Z)({props:a,name:"MuiTypography"}),i=(a=>b[a]||a)(t.color),l=(0,d.Z)((0,o.Z)({},t,{color:i})),{align:p="inherit",className:f,component:x,gutterBottom:_=!1,noWrap:Z=!1,paragraph:S=!1,variant:P="body1",variantMapping:w=g}=l,C=(0,n.Z)(l,h),z=(0,o.Z)({},l,{align:p,color:i,className:f,component:x,gutterBottom:_,noWrap:Z,paragraph:S,variant:P,variantMapping:w}),I=x||(S?"p":w[P]||g[P])||"span",k=(a=>{const{align:e,gutterBottom:t,noWrap:n,paragraph:o,variant:i,classes:r}=a,d={root:["root",i,"inherit"!==a.align&&`align${(0,m.Z)(e)}`,t&&"gutterBottom",n&&"noWrap",o&&"paragraph"]};return(0,s.Z)(d,u,r)})(z);return(0,v.jsx)(y,(0,o.Z)({as:I,ref:e,ownerState:z,className:(0,r.Z)(k.root,f)},C))}))},39707:function(a,e,t){"use strict";t.d(e,{Z:function(){return s}});var n=t(87462),o=t(63366),i=t(59766),r=t(44920);const d=["sx"];function s(a){const{sx:e}=a,t=(0,o.Z)(a,d),{systemProps:s,otherProps:l}=(a=>{var e,t;const n={systemProps:{},otherProps:{}},o=null!=(e=null==a||null==(t=a.theme)?void 0:t.unstable_sxConfig)?e:r.Z;return Object.keys(a).forEach((e=>{o[e]?n.systemProps[e]=a[e]:n.otherProps[e]=a[e]})),n})(t);let c;return c=Array.isArray(e)?[s,...e]:"function"===typeof e?(...a)=>{const t=e(...a);return(0,i.P)(t)?(0,n.Z)({},s,t):s}:(0,n.Z)({},s,e),(0,n.Z)({},l,{sx:c})}},89023:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/Tabs/ToAdvance/paymentDetails",function(){return t(31258)}])},31258:function(a,e,t){"use strict";t.r(e);var n=t(85893),o=t(67294),i=t(46230),r=t(15861),d=t(11057),s=t(72882),l=t(55113),c=t(7906),m=t(295),p=t(53816),u=t(53252),v=t(42480),h=[{name:"Company Name",value:"RAMAERA INDUSTRIES LTD."},{name:"Bank Name",value:"ICICI BANK"},{name:"Branch",value:"NOIDA SECTOR 63"},{name:"A/C No.",value:"081605012239"},{name:"IFSC CODE ",value:"ICIC0000816"}];e.default=function(){var a=(0,i.C)((function(a){var e;return null===(e=a.user)||void 0===e?void 0:e.data})),e=(0,o.useState)(!1),t=e[0],y=e[1],g=(0,o.useState)(!1),b=g[0],f=g[1],x=20230815;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.Z,{variant:"h4",sx:{my:2},children:["Kindly Deposit Rs."," ",a.documents.find((function(a){return a.title===v.Z.payment_proof.id&&parseInt(a.createdAt.split("-").join(""))<x&&1e3===a.amount&&"APPROVED"===a.status}))?"199,000":a.documents.find((function(a){return a.title===v.Z.payment_proof.id&&parseInt(a.createdAt.split("-").join(""))>x&&2e3===a.amount&&"APPROVED"===a.status}))?"198,000":"200,000","/- and upload the payment slip as a proof!"]}),(0,n.jsxs)("div",{style:{flexDirection:"row",justifyContent:"space-between",marginTop:10,marginBottom:10},children:[(0,n.jsx)(d.Z,{style:{marginRight:20},variant:"contained",onClick:function(){y(!0),f(!1)},children:"Bank Details"}),(0,n.jsx)(d.Z,{variant:"contained",onClick:function(){y(!1),f(!0)},children:"UPI"})]}),t&&(0,n.jsx)(s.Z,{component:l.Z,children:(0,n.jsx)(c.Z,{sx:{minWidth:100},"aria-label":"simple table",children:(0,n.jsx)(m.Z,{children:h.map((function(a){return(0,n.jsxs)(p.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,n.jsx)(u.Z,{component:"th",scope:"row",children:a.name}),(0,n.jsx)(u.Z,{align:"right",children:a.value})]},a.name)}))})})}),b&&(0,n.jsx)(s.Z,{component:l.Z,children:(0,n.jsx)(c.Z,{sx:{minWidth:100},"aria-label":"simple table",children:(0,n.jsxs)(m.Z,{children:[(0,n.jsx)("img",{style:{width:"250px",borderRadius:"20px",padding:"10px"},src:"/images/ICICI_UPI.png"}),(0,n.jsx)(r.Z,{variant:"body1",sx:{my:2,pl:2},children:"OR"}),(0,n.jsx)(r.Z,{variant:"h4",sx:{my:2,pl:2},children:(0,n.jsx)("a",{href:"upi://pay?pa=ramaeraindustries@icici&pn=Ramaera K&cu=INR",children:"UPI ID : ramaeraindustries@icici"})})]})})})]})}},42480:function(a,e){"use strict";e.Z={aadhar:{id:"aadhar",name:"Aadhar Card",status:"",items:[{id:"aadhar_front",name:"AADHAR Card Front",status:""},{id:"aadhar_back",name:"AADHAR Card Back",status:""}]},pancard:{id:"pancard",name:"Pancard",status:"",items:[{id:"pancard",name:"Pan Card",status:""}]},avatar:{id:"photo",name:"Photo",status:"",items:[{id:"avatar",name:"Passport Size Photo",status:""}]},voterId:{id:"voterId",name:"Voter Id Card",status:"Not Uploaded",items:[{id:"voterid_front",name:"Voter Id Front",status:""},{id:"voterid_back",name:"Voted Id Card Back",status:""}]},passbook:{name:"Passbook  or Bank Statement",id:"passbook",status:"Not Uploaded",items:[{id:"passbook",name:"Bank Passbook Or Bank Statement",status:"Not Uploaded"}]},payment_proof:{name:"Payment Proof",id:"payment_proof",status:"Not Uploaded",items:[{id:"payment_proof",name:"Payment Proof"}]},agency_payment_proof:{name:"Agency Payment Proof",id:"agency_payment_proof",status:"Not Uploaded",items:[{id:"agency_payment_proof",name:"Agency Payment Proof"}]},additional_documents:{name:"Additional Payment Document",id:"additional_payment_doc",items:[{id:"additional_payment_doc2",name:"Payment Document"},{id:"additional_payment_doc3",name:"Payment Document"},{id:"additional_payment_doc4",name:"Payment Document"},{id:"additional_payment_doc5",name:"Payment Document"}]},to_advance_payment_proof:{name:"To Advance Payment Proof",id:"to_advance_payment_proof",status:"Not Uploaded",items:[{id:"to_advance_payment_proof",name:"To Advance Payment Proof"}]},to_advance_additional_documents:{name:"To Advance Additional Payment Document",id:"to_advance_additional_payment_doc",items:[{id:"to_advance_additional_payment_doc2",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc3",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc4",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc5",name:"To Advance Payment Document"}]},driving_license:{name:"Driving License",id:"driving_license",status:"Not Uploaded",items:[{id:"driving_license_front",name:"Driving License Front",status:""},{id:"driving_license_back",name:"Driving License Back",status:""}]},nominee_aadhar:{name:"Nominee Aadhar",id:"nominee_aadhar",status:"Not Uploaded",items:[{id:"nominee_aadhar_front",name:"AADHAR Card Front",status:""},{id:"nominee_aadhar_back",name:"AADHAR Card Back",status:""}]},demat_document:{name:"Demat Document",id:"demat_document",status:"Not Uploaded",items:[{id:"demat_document",name:"Demat Document",status:""}]},payment_additional_documents:{name:"Additional Payment Document",id:"additional_payment_doc",items:[{id:"additional_payment_doc2",name:"Payment Document"},{id:"additional_payment_doc3",name:"Payment Document"},{id:"additional_payment_doc4",name:"Payment Document"},{id:"additional_payment_doc5",name:"Payment Document"}]},project_payment:{name:"Project Payment",id:"project_payment",items:[{id:"project_payment_1",name:"Payment Document"},{id:"project_payment_2",name:"Payment Document"},{id:"project_payment_3",name:"Payment Document"},{id:"project_payment_4",name:"Payment Document"},{id:"project_payment_5",name:"Payment Document"}]}}}},function(a){a.O(0,[5370,9990,6261,9774,2888,179],(function(){return e=89023,a(a.s=e);var e}));var e=a.O();_N_E=e}]);