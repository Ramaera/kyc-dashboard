(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8050],{11057:function(e,a,t){"use strict";t.d(a,{Z:function(){return z}});var o=t(63366),n=t(87462),r=t(67294),i=t(93680),l=t(47925),s=t(94780),d=t(41796),c=t(90948),p=t(71657),v=t(49990),u=t(98216),h=t(34867);function m(e){return(0,h.Z)("MuiButton",e)}var g=(0,t(1588).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),b=t(98363),x=t(85893);const y=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],f=e=>(0,n.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),Z=(0,c.ZP)(v.Z,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,a[t.variant],a[`${t.variant}${(0,u.Z)(t.color)}`],a[`size${(0,u.Z)(t.size)}`],a[`${t.variant}Size${(0,u.Z)(t.size)}`],"inherit"===t.color&&a.colorInherit,t.disableElevation&&a.disableElevation,t.fullWidth&&a.fullWidth]}})((({theme:e,ownerState:a})=>{var t,o;return(0,n.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,n.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===a.variant&&"inherit"!==a.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[a.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===a.variant&&"inherit"!==a.color&&{border:`1px solid ${(e.vars||e).palette[a.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[a.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===a.variant&&{backgroundColor:(e.vars||e).palette.grey.A100,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===a.variant&&"inherit"!==a.color&&{backgroundColor:(e.vars||e).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[a.color].main}}),"&:active":(0,n.Z)({},"contained"===a.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${g.focusVisible}`]:(0,n.Z)({},"contained"===a.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${g.disabled}`]:(0,n.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===a.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"outlined"===a.variant&&"secondary"===a.color&&{border:`1px solid ${(e.vars||e).palette.action.disabled}`},"contained"===a.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===a.variant&&{padding:"6px 8px"},"text"===a.variant&&"inherit"!==a.color&&{color:(e.vars||e).palette[a.color].main},"outlined"===a.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===a.variant&&"inherit"!==a.color&&{color:(e.vars||e).palette[a.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[a.color].mainChannel} / 0.5)`:`1px solid ${(0,d.Fq)(e.palette[a.color].main,.5)}`},"contained"===a.variant&&{color:e.vars?e.vars.palette.text.primary:null==(t=(o=e.palette).getContrastText)?void 0:t.call(o,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],boxShadow:(e.vars||e).shadows[2]},"contained"===a.variant&&"inherit"!==a.color&&{color:(e.vars||e).palette[a.color].contrastText,backgroundColor:(e.vars||e).palette[a.color].main},"inherit"===a.color&&{color:"inherit",borderColor:"currentColor"},"small"===a.size&&"text"===a.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===a.size&&"text"===a.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===a.size&&"outlined"===a.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===a.size&&"outlined"===a.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===a.size&&"contained"===a.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===a.size&&"contained"===a.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},a.fullWidth&&{width:"100%"})}),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${g.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${g.disabled}`]:{boxShadow:"none"}})),S=(0,c.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.startIcon,a[`iconSize${(0,u.Z)(t.size)}`]]}})((({ownerState:e})=>(0,n.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},f(e)))),w=(0,c.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.endIcon,a[`iconSize${(0,u.Z)(t.size)}`]]}})((({ownerState:e})=>(0,n.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},f(e))));var z=r.forwardRef((function(e,a){const t=r.useContext(b.Z),d=(0,l.Z)(t,e),c=(0,p.Z)({props:d,name:"MuiButton"}),{children:v,color:h="primary",component:g="button",className:f,disabled:z=!1,disableElevation:C=!1,disableFocusRipple:R=!1,endIcon:$,focusVisibleClassName:I,fullWidth:k=!1,size:N="medium",startIcon:j,type:B,variant:M="text"}=c,W=(0,o.Z)(c,y),E=(0,n.Z)({},c,{color:h,component:g,disabled:z,disableElevation:C,disableFocusRipple:R,fullWidth:k,size:N,type:B,variant:M}),P=(e=>{const{color:a,disableElevation:t,fullWidth:o,size:r,variant:i,classes:l}=e,d={root:["root",i,`${i}${(0,u.Z)(a)}`,`size${(0,u.Z)(r)}`,`${i}Size${(0,u.Z)(r)}`,"inherit"===a&&"colorInherit",t&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,u.Z)(r)}`],endIcon:["endIcon",`iconSize${(0,u.Z)(r)}`]},c=(0,s.Z)(d,m,l);return(0,n.Z)({},l,c)})(E),T=j&&(0,x.jsx)(S,{className:P.startIcon,ownerState:E,children:j}),F=$&&(0,x.jsx)(w,{className:P.endIcon,ownerState:E,children:$});return(0,x.jsxs)(Z,(0,n.Z)({ownerState:E,className:(0,i.Z)(f,t.className),component:g,disabled:z,focusRipple:!R,focusVisibleClassName:(0,i.Z)(P.focusVisible,I),ref:a,type:B},W,{classes:P,children:[T,v,F]}))}))},98363:function(e,a,t){"use strict";const o=t(67294).createContext({});a.Z=o},55113:function(e,a,t){"use strict";t.d(a,{Z:function(){return b}});var o=t(63366),n=t(87462),r=t(67294),i=t(93680),l=t(94780),s=t(41796),d=t(90948),c=t(71657),p=t(34867);function v(e){return(0,p.Z)("MuiPaper",e)}(0,t(1588).Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var u=t(85893);const h=["className","component","elevation","square","variant"],m=e=>{let a;return a=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,(a/100).toFixed(2)},g=(0,d.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,a[t.variant],!t.square&&a.rounded,"elevation"===t.variant&&a[`elevation${t.elevation}`]]}})((({theme:e,ownerState:a})=>{var t;return(0,n.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!a.square&&{borderRadius:e.shape.borderRadius},"outlined"===a.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===a.variant&&(0,n.Z)({boxShadow:(e.vars||e).shadows[a.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,s.Fq)("#fff",m(a.elevation))}, ${(0,s.Fq)("#fff",m(a.elevation))})`},e.vars&&{backgroundImage:null==(t=e.vars.overlays)?void 0:t[a.elevation]}))}));var b=r.forwardRef((function(e,a){const t=(0,c.Z)({props:e,name:"MuiPaper"}),{className:r,component:s="div",elevation:d=1,square:p=!1,variant:m="elevation"}=t,b=(0,o.Z)(t,h),x=(0,n.Z)({},t,{component:s,elevation:d,square:p,variant:m}),y=(e=>{const{square:a,elevation:t,variant:o,classes:n}=e,r={root:["root",o,!a&&"rounded","elevation"===o&&`elevation${t}`]};return(0,l.Z)(r,v,n)})(x);return(0,u.jsx)(g,(0,n.Z)({as:s,ownerState:x,className:(0,i.Z)(y.root,r),ref:a},b))}))},15861:function(e,a,t){"use strict";t.d(a,{Z:function(){return y}});var o=t(63366),n=t(87462),r=t(67294),i=t(93680),l=t(39707),s=t(94780),d=t(90948),c=t(71657),p=t(98216),v=t(34867);function u(e){return(0,v.Z)("MuiTypography",e)}(0,t(1588).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var h=t(85893);const m=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],g=(0,d.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,t.variant&&a[t.variant],"inherit"!==t.align&&a[`align${(0,p.Z)(t.align)}`],t.noWrap&&a.noWrap,t.gutterBottom&&a.gutterBottom,t.paragraph&&a.paragraph]}})((({theme:e,ownerState:a})=>(0,n.Z)({margin:0},a.variant&&e.typography[a.variant],"inherit"!==a.align&&{textAlign:a.align},a.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},a.gutterBottom&&{marginBottom:"0.35em"},a.paragraph&&{marginBottom:16}))),b={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},x={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var y=r.forwardRef((function(e,a){const t=(0,c.Z)({props:e,name:"MuiTypography"}),r=(e=>x[e]||e)(t.color),d=(0,l.Z)((0,n.Z)({},t,{color:r})),{align:v="inherit",className:y,component:f,gutterBottom:Z=!1,noWrap:S=!1,paragraph:w=!1,variant:z="body1",variantMapping:C=b}=d,R=(0,o.Z)(d,m),$=(0,n.Z)({},d,{align:v,color:r,className:y,component:f,gutterBottom:Z,noWrap:S,paragraph:w,variant:z,variantMapping:C}),I=f||(w?"p":C[z]||b[z])||"span",k=(e=>{const{align:a,gutterBottom:t,noWrap:o,paragraph:n,variant:r,classes:i}=e,l={root:["root",r,"inherit"!==e.align&&`align${(0,p.Z)(a)}`,t&&"gutterBottom",o&&"noWrap",n&&"paragraph"]};return(0,s.Z)(l,u,i)})($);return(0,h.jsx)(g,(0,n.Z)({as:I,ref:a,ownerState:$,className:(0,i.Z)(k.root,y)},R))}))},4430:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/Tabs/Payment/paymentDetails",function(){return t(41213)}])},41213:function(e,a,t){"use strict";t.r(a);var o=t(85893),n=t(67294),r=t(46230),i=t(15861),l=t(11057),s=t(72882),d=t(55113),c=t(7906),p=t(295),v=t(53816),u=t(53252),h=[{name:"Company Name",value:"RAMAERA INDUSTRIES LTD."},{name:"Bank Name",value:"HDFC BANK"},{name:"Branch",value:"NOIDA SECTOR 18"},{name:"A/C No.",value:"50200069506090"},{name:"IFSC CODE ",value:"HDFC0000088"}];a.default=function(){var e=(0,r.C)((function(e){return e.user.data})),a=(0,n.useState)(!1),t=a[0],m=a[1],g=(0,n.useState)(!1),b=g[0],x=g[1];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i.Z,{variant:"h4",sx:{my:2},children:["Kindly Deposit Rs."," ","BASIC"===(null===e||void 0===e?void 0:e.membership)?"2,000":"2,00,000/-","/- and upload the payment slip as a proof!"]}),(0,o.jsxs)("div",{style:{flexDirection:"row",justifyContent:"space-between",marginTop:10,marginBottom:10},children:[(0,o.jsx)(l.Z,{style:{marginRight:20},variant:"contained",onClick:function(){m(!0),x(!1)},children:"Bank Details"}),(0,o.jsx)(l.Z,{variant:"contained",onClick:function(){m(!1),x(!0)},children:"UPI"})]}),t&&(0,o.jsx)(s.Z,{component:d.Z,children:(0,o.jsx)(c.Z,{sx:{minWidth:100},"aria-label":"simple table",children:(0,o.jsx)(p.Z,{children:h.map((function(e){return(0,o.jsxs)(v.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,o.jsx)(u.Z,{component:"th",scope:"row",children:e.name}),(0,o.jsx)(u.Z,{align:"right",children:e.value})]},e.name)}))})})}),b&&(0,o.jsx)(s.Z,{component:d.Z,children:(0,o.jsx)(c.Z,{sx:{minWidth:100},"aria-label":"simple table",children:(0,o.jsxs)(p.Z,{children:[(0,o.jsx)("img",{style:{width:"250px",borderRadius:"20px",padding:"10px"},src:"/images/upi.jpg"}),(0,o.jsx)(i.Z,{variant:"body1",sx:{my:2,pl:2},children:"OR"}),(0,o.jsx)(i.Z,{variant:"h4",sx:{my:2,pl:2},children:(0,o.jsx)("a",{href:"upi://pay?pa=ramaeraindustriesupi.pay@hdfcbank&pn=Ramaera K&cu=INR",children:"UPI ID : ramaeraindustriesupi.pay@hdfcbank"})})]})})})]})}}},function(e){e.O(0,[403,9990,6261,9774,2888,179],(function(){return a=4430,e(e.s=a);var a}));var a=e.O();_N_E=a}]);