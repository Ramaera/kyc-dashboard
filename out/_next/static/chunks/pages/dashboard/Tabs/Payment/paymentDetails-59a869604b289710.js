(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8050],{11057:function(e,a,t){"use strict";t.d(a,{Z:function(){return w}});var o=t(63366),n=t(87462),r=t(67294),i=t(93680),s=t(47925),l=t(94780),c=t(41796),d=t(90948),p=t(71657),u=t(49990),v=t(98216),h=t(34867);function m(e){return(0,h.Z)("MuiButton",e)}var g=(0,t(1588).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),b=t(98363),x=t(85893);const f=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],Z=e=>(0,n.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),y=(0,d.ZP)(u.Z,{shouldForwardProp:e=>(0,d.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,a[t.variant],a[`${t.variant}${(0,v.Z)(t.color)}`],a[`size${(0,v.Z)(t.size)}`],a[`${t.variant}Size${(0,v.Z)(t.size)}`],"inherit"===t.color&&a.colorInherit,t.disableElevation&&a.disableElevation,t.fullWidth&&a.fullWidth]}})((({theme:e,ownerState:a})=>{var t,o;return(0,n.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,n.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===a.variant&&"inherit"!==a.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[a.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===a.variant&&"inherit"!==a.color&&{border:`1px solid ${(e.vars||e).palette[a.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[a.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===a.variant&&{backgroundColor:(e.vars||e).palette.grey.A100,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===a.variant&&"inherit"!==a.color&&{backgroundColor:(e.vars||e).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[a.color].main}}),"&:active":(0,n.Z)({},"contained"===a.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${g.focusVisible}`]:(0,n.Z)({},"contained"===a.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${g.disabled}`]:(0,n.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===a.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"outlined"===a.variant&&"secondary"===a.color&&{border:`1px solid ${(e.vars||e).palette.action.disabled}`},"contained"===a.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===a.variant&&{padding:"6px 8px"},"text"===a.variant&&"inherit"!==a.color&&{color:(e.vars||e).palette[a.color].main},"outlined"===a.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===a.variant&&"inherit"!==a.color&&{color:(e.vars||e).palette[a.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[a.color].mainChannel} / 0.5)`:`1px solid ${(0,c.Fq)(e.palette[a.color].main,.5)}`},"contained"===a.variant&&{color:e.vars?e.vars.palette.text.primary:null==(t=(o=e.palette).getContrastText)?void 0:t.call(o,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],boxShadow:(e.vars||e).shadows[2]},"contained"===a.variant&&"inherit"!==a.color&&{color:(e.vars||e).palette[a.color].contrastText,backgroundColor:(e.vars||e).palette[a.color].main},"inherit"===a.color&&{color:"inherit",borderColor:"currentColor"},"small"===a.size&&"text"===a.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===a.size&&"text"===a.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===a.size&&"outlined"===a.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===a.size&&"outlined"===a.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===a.size&&"contained"===a.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===a.size&&"contained"===a.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},a.fullWidth&&{width:"100%"})}),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${g.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${g.disabled}`]:{boxShadow:"none"}})),S=(0,d.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.startIcon,a[`iconSize${(0,v.Z)(t.size)}`]]}})((({ownerState:e})=>(0,n.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},Z(e)))),I=(0,d.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.endIcon,a[`iconSize${(0,v.Z)(t.size)}`]]}})((({ownerState:e})=>(0,n.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},Z(e))));var w=r.forwardRef((function(e,a){const t=r.useContext(b.Z),c=(0,s.Z)(t,e),d=(0,p.Z)({props:c,name:"MuiButton"}),{children:u,color:h="primary",component:g="button",className:Z,disabled:w=!1,disableElevation:C=!1,disableFocusRipple:R=!1,endIcon:z,focusVisibleClassName:N,fullWidth:E=!1,size:A="medium",startIcon:P,type:T,variant:$="text"}=d,B=(0,o.Z)(d,f),M=(0,n.Z)({},d,{color:h,component:g,disabled:w,disableElevation:C,disableFocusRipple:R,fullWidth:E,size:A,type:T,variant:$}),k=(e=>{const{color:a,disableElevation:t,fullWidth:o,size:r,variant:i,classes:s}=e,c={root:["root",i,`${i}${(0,v.Z)(a)}`,`size${(0,v.Z)(r)}`,`${i}Size${(0,v.Z)(r)}`,"inherit"===a&&"colorInherit",t&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,v.Z)(r)}`],endIcon:["endIcon",`iconSize${(0,v.Z)(r)}`]},d=(0,l.Z)(c,m,s);return(0,n.Z)({},s,d)})(M),D=P&&(0,x.jsx)(S,{className:k.startIcon,ownerState:M,children:P}),j=z&&(0,x.jsx)(I,{className:k.endIcon,ownerState:M,children:z});return(0,x.jsxs)(y,(0,n.Z)({ownerState:M,className:(0,i.Z)(Z,t.className),component:g,disabled:w,focusRipple:!R,focusVisibleClassName:(0,i.Z)(k.focusVisible,N),ref:a,type:T},B,{classes:k,children:[D,u,j]}))}))},98363:function(e,a,t){"use strict";const o=t(67294).createContext({});a.Z=o},55113:function(e,a,t){"use strict";t.d(a,{Z:function(){return b}});var o=t(63366),n=t(87462),r=t(67294),i=t(93680),s=t(94780),l=t(41796),c=t(90948),d=t(71657),p=t(34867);function u(e){return(0,p.Z)("MuiPaper",e)}(0,t(1588).Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var v=t(85893);const h=["className","component","elevation","square","variant"],m=e=>{let a;return a=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,(a/100).toFixed(2)},g=(0,c.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,a[t.variant],!t.square&&a.rounded,"elevation"===t.variant&&a[`elevation${t.elevation}`]]}})((({theme:e,ownerState:a})=>{var t;return(0,n.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!a.square&&{borderRadius:e.shape.borderRadius},"outlined"===a.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===a.variant&&(0,n.Z)({boxShadow:(e.vars||e).shadows[a.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,l.Fq)("#fff",m(a.elevation))}, ${(0,l.Fq)("#fff",m(a.elevation))})`},e.vars&&{backgroundImage:null==(t=e.vars.overlays)?void 0:t[a.elevation]}))}));var b=r.forwardRef((function(e,a){const t=(0,d.Z)({props:e,name:"MuiPaper"}),{className:r,component:l="div",elevation:c=1,square:p=!1,variant:m="elevation"}=t,b=(0,o.Z)(t,h),x=(0,n.Z)({},t,{component:l,elevation:c,square:p,variant:m}),f=(e=>{const{square:a,elevation:t,variant:o,classes:n}=e,r={root:["root",o,!a&&"rounded","elevation"===o&&`elevation${t}`]};return(0,s.Z)(r,u,n)})(x);return(0,v.jsx)(g,(0,n.Z)({as:l,ownerState:x,className:(0,i.Z)(f.root,r),ref:a},b))}))},72882:function(e,a,t){"use strict";t.d(a,{Z:function(){return m}});var o=t(87462),n=t(63366),r=t(67294),i=t(93680),s=t(94780),l=t(71657),c=t(90948),d=t(34867);function p(e){return(0,d.Z)("MuiTableContainer",e)}(0,t(1588).Z)("MuiTableContainer",["root"]);var u=t(85893);const v=["className","component"],h=(0,c.ZP)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,a)=>a.root})({width:"100%",overflowX:"auto"});var m=r.forwardRef((function(e,a){const t=(0,l.Z)({props:e,name:"MuiTableContainer"}),{className:r,component:c="div"}=t,d=(0,n.Z)(t,v),m=(0,o.Z)({},t,{component:c}),g=(e=>{const{classes:a}=e;return(0,s.Z)({root:["root"]},p,a)})(m);return(0,u.jsx)(h,(0,o.Z)({ref:a,as:c,className:(0,i.Z)(g.root,r),ownerState:m},d))}))},15861:function(e,a,t){"use strict";t.d(a,{Z:function(){return f}});var o=t(63366),n=t(87462),r=t(67294),i=t(93680),s=t(39707),l=t(94780),c=t(90948),d=t(71657),p=t(98216),u=t(34867);function v(e){return(0,u.Z)("MuiTypography",e)}(0,t(1588).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var h=t(85893);const m=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],g=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,t.variant&&a[t.variant],"inherit"!==t.align&&a[`align${(0,p.Z)(t.align)}`],t.noWrap&&a.noWrap,t.gutterBottom&&a.gutterBottom,t.paragraph&&a.paragraph]}})((({theme:e,ownerState:a})=>(0,n.Z)({margin:0},a.variant&&e.typography[a.variant],"inherit"!==a.align&&{textAlign:a.align},a.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},a.gutterBottom&&{marginBottom:"0.35em"},a.paragraph&&{marginBottom:16}))),b={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},x={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var f=r.forwardRef((function(e,a){const t=(0,d.Z)({props:e,name:"MuiTypography"}),r=(e=>x[e]||e)(t.color),c=(0,s.Z)((0,n.Z)({},t,{color:r})),{align:u="inherit",className:f,component:Z,gutterBottom:y=!1,noWrap:S=!1,paragraph:I=!1,variant:w="body1",variantMapping:C=b}=c,R=(0,o.Z)(c,m),z=(0,n.Z)({},c,{align:u,color:r,className:f,component:Z,gutterBottom:y,noWrap:S,paragraph:I,variant:w,variantMapping:C}),N=Z||(I?"p":C[w]||b[w])||"span",E=(e=>{const{align:a,gutterBottom:t,noWrap:o,paragraph:n,variant:r,classes:i}=e,s={root:["root",r,"inherit"!==e.align&&`align${(0,p.Z)(a)}`,t&&"gutterBottom",o&&"noWrap",n&&"paragraph"]};return(0,l.Z)(s,v,i)})(z);return(0,h.jsx)(g,(0,n.Z)({as:N,ref:a,ownerState:z,className:(0,i.Z)(E.root,f)},R))}))},39707:function(e,a,t){"use strict";t.d(a,{Z:function(){return l}});var o=t(87462),n=t(63366),r=t(59766),i=t(44920);const s=["sx"];function l(e){const{sx:a}=e,t=(0,n.Z)(e,s),{systemProps:l,otherProps:c}=(e=>{var a,t;const o={systemProps:{},otherProps:{}},n=null!=(a=null==e||null==(t=e.theme)?void 0:t.unstable_sxConfig)?a:i.Z;return Object.keys(e).forEach((a=>{n[a]?o.systemProps[a]=e[a]:o.otherProps[a]=e[a]})),o})(t);let d;return d=Array.isArray(a)?[l,...a]:"function"===typeof a?(...e)=>{const t=a(...e);return(0,r.P)(t)?(0,o.Z)({},l,t):l}:(0,o.Z)({},l,a),(0,o.Z)({},c,{sx:d})}},4430:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/Tabs/Payment/paymentDetails",function(){return t(81489)}])},81489:function(e,a,t){"use strict";t.r(a);var o=t(85893),n=t(67294),r=t(26183),i=t(15861),s=t(11057),l=t(72882),c=t(55113),d=t(7906),p=t(295),u=t(53816),v=t(53252),h=t(34753),m=[{name:"Company Name",value:"RAMAERA INDUSTRIES LTD."},{name:"Bank Name",value:"ICICI BANK"},{name:"Branch",value:"NOIDA SECTOR 63"},{name:"A/C No.",value:"081605012239"},{name:"IFSC CODE ",value:"ICIC0000816"}];a.default=function(e){var a=e.docStatus,t=(0,r.C)((function(e){var a;return null===(a=e.user)||void 0===a?void 0:a.data})),g=(0,n.useState)(!1),b=g[0],x=g[1],f=(0,n.useState)(!1),Z=f[0],y=f[1];return(0,o.jsxs)(o.Fragment,{children:[a!==h.Z.status.APPROVED&&(0,o.jsxs)(i.Z,{variant:"h4",sx:{my:2},children:["Kindly Deposit Rs."," ","BASIC"===(null===t||void 0===t?void 0:t.membership)?"2,000":"5,00,000","/- and upload the payment slip as a proof!"]}),(0,o.jsxs)("div",{style:{flexDirection:"row",justifyContent:"space-between",marginTop:10,marginBottom:10},children:[(0,o.jsx)(s.Z,{style:{marginRight:20},variant:"contained",onClick:function(){x(!0),y(!1)},children:"Bank Details"}),(0,o.jsx)(s.Z,{variant:"contained",onClick:function(){x(!1),y(!0)},children:"UPI"})]}),b&&(0,o.jsx)(l.Z,{component:c.Z,children:(0,o.jsx)(d.Z,{sx:{minWidth:100},"aria-label":"simple table",children:(0,o.jsx)(p.Z,{children:m.map((function(e){return(0,o.jsxs)(u.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,o.jsx)(v.Z,{component:"th",scope:"row",children:e.name}),(0,o.jsx)(v.Z,{align:"right",children:e.value})]},e.name)}))})})}),Z&&(0,o.jsx)(l.Z,{component:c.Z,children:(0,o.jsx)(d.Z,{sx:{minWidth:100},"aria-label":"simple table",children:(0,o.jsxs)(p.Z,{children:[(0,o.jsx)("img",{style:{width:"250px",borderRadius:"20px",padding:"10px"},src:"/images/ICICI_UPI.png"}),(0,o.jsx)(i.Z,{variant:"body1",sx:{my:2,pl:2},children:"OR"}),(0,o.jsx)(i.Z,{variant:"h4",sx:{my:2,pl:2},children:(0,o.jsx)("a",{href:"upi://pay?pa=ramaeraindustries@icici&pn=Ramaera K&cu=INR",children:"UPI ID : ramaeraindustries@icici"})})]})})})]})}},34753:function(e,a){"use strict";a.Z={project:{AGRA:"agra",HAJIPUR:"hajipur",HYDERABAD:"hyderabad"},role:{ADMIN:"ADMIN",AGENT:"AGENT",USER:"USER"},membership:{ADVANCE:"ADVANCE",BASIC:"BASIC"},status:{AGENT_APPROVED:"AGENT_APPROVED",APPROVED:"APPROVED",NOT_INITIALIZED:"NOT_INITIALIZED",ONGOING:"ONGOING",PENDING:"PENDING",REJECTED:"REJECTED",SUBMITTED:"SUBMITTED"},amount:{beforeFifteenthAugustBasicAmount:1e3,beforeFifteenthAugustAdvanceAmount:1e5,afterFifteenthAugustBasicAmount:2e3,afterFifteenthAugustAdvanceAmount:2e5}}}},function(e){e.O(0,[8244,9990,2453,9774,2888,179],(function(){return a=4430,e(e.s=a);var a}));var a=e.O();_N_E=a}]);