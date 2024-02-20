(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5327],{11057:function(e,t,o){"use strict";o.d(t,{Z:function(){return z}});var a=o(63366),n=o(87462),r=o(67294),i=o(93680),s=o(47925),l=o(94780),c=o(41796),d=o(90948),u=o(71657),p=o(49990),v=o(98216),m=o(34867);function h(e){return(0,m.Z)("MuiButton",e)}var b=(0,o(1588).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),x=o(98363),f=o(85893);const Z=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],g=e=>(0,n.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),y=(0,d.ZP)(p.Z,{shouldForwardProp:e=>(0,d.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],t[`${o.variant}${(0,v.Z)(o.color)}`],t[`size${(0,v.Z)(o.size)}`],t[`${o.variant}Size${(0,v.Z)(o.size)}`],"inherit"===o.color&&t.colorInherit,o.disableElevation&&t.disableElevation,o.fullWidth&&t.fullWidth]}})((({theme:e,ownerState:t})=>{var o,a;return(0,n.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,n.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:(e.vars||e).palette.grey.A100,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,n.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${b.focusVisible}`]:(0,n.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${b.disabled}`]:(0,n.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"outlined"===t.variant&&"secondary"===t.color&&{border:`1px solid ${(e.vars||e).palette.action.disabled}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,c.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(o=(a=e.palette).getContrastText)?void 0:o.call(a,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})}),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${b.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${b.disabled}`]:{boxShadow:"none"}})),S=(0,d.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.startIcon,t[`iconSize${(0,v.Z)(o.size)}`]]}})((({ownerState:e})=>(0,n.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},g(e)))),w=(0,d.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.endIcon,t[`iconSize${(0,v.Z)(o.size)}`]]}})((({ownerState:e})=>(0,n.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},g(e))));var z=r.forwardRef((function(e,t){const o=r.useContext(x.Z),c=(0,s.Z)(o,e),d=(0,u.Z)({props:c,name:"MuiButton"}),{children:p,color:m="primary",component:b="button",className:g,disabled:z=!1,disableElevation:C=!1,disableFocusRipple:k=!1,endIcon:R,focusVisibleClassName:$,fullWidth:N=!1,size:I="medium",startIcon:j,type:M,variant:P="text"}=d,T=(0,a.Z)(d,Z),E=(0,n.Z)({},d,{color:m,component:b,disabled:z,disableElevation:C,disableFocusRipple:k,fullWidth:N,size:I,type:M,variant:P}),B=(e=>{const{color:t,disableElevation:o,fullWidth:a,size:r,variant:i,classes:s}=e,c={root:["root",i,`${i}${(0,v.Z)(t)}`,`size${(0,v.Z)(r)}`,`${i}Size${(0,v.Z)(r)}`,"inherit"===t&&"colorInherit",o&&"disableElevation",a&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,v.Z)(r)}`],endIcon:["endIcon",`iconSize${(0,v.Z)(r)}`]},d=(0,l.Z)(c,h,s);return(0,n.Z)({},s,d)})(E),F=j&&(0,f.jsx)(S,{className:B.startIcon,ownerState:E,children:j}),O=R&&(0,f.jsx)(w,{className:B.endIcon,ownerState:E,children:R});return(0,f.jsxs)(y,(0,n.Z)({ownerState:E,className:(0,i.Z)(g,o.className),component:b,disabled:z,focusRipple:!k,focusVisibleClassName:(0,i.Z)(B.focusVisible,$),ref:t,type:M},T,{classes:B,children:[F,p,O]}))}))},98363:function(e,t,o){"use strict";const a=o(67294).createContext({});t.Z=a},55113:function(e,t,o){"use strict";o.d(t,{Z:function(){return x}});var a=o(63366),n=o(87462),r=o(67294),i=o(93680),s=o(94780),l=o(41796),c=o(90948),d=o(71657),u=o(34867);function p(e){return(0,u.Z)("MuiPaper",e)}(0,o(1588).Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var v=o(85893);const m=["className","component","elevation","square","variant"],h=e=>{let t;return t=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,(t/100).toFixed(2)},b=(0,c.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],!o.square&&t.rounded,"elevation"===o.variant&&t[`elevation${o.elevation}`]]}})((({theme:e,ownerState:t})=>{var o;return(0,n.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===t.variant&&(0,n.Z)({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,l.Fq)("#fff",h(t.elevation))}, ${(0,l.Fq)("#fff",h(t.elevation))})`},e.vars&&{backgroundImage:null==(o=e.vars.overlays)?void 0:o[t.elevation]}))}));var x=r.forwardRef((function(e,t){const o=(0,d.Z)({props:e,name:"MuiPaper"}),{className:r,component:l="div",elevation:c=1,square:u=!1,variant:h="elevation"}=o,x=(0,a.Z)(o,m),f=(0,n.Z)({},o,{component:l,elevation:c,square:u,variant:h}),Z=(e=>{const{square:t,elevation:o,variant:a,classes:n}=e,r={root:["root",a,!t&&"rounded","elevation"===a&&`elevation${o}`]};return(0,s.Z)(r,p,n)})(f);return(0,v.jsx)(b,(0,n.Z)({as:l,ownerState:f,className:(0,i.Z)(Z.root,r),ref:t},x))}))},7906:function(e,t,o){"use strict";o.d(t,{Z:function(){return x}});var a=o(63366),n=o(87462),r=o(67294),i=o(93680),s=o(94780),l=o(31618),c=o(71657),d=o(90948),u=o(34867);function p(e){return(0,u.Z)("MuiTable",e)}(0,o(1588).Z)("MuiTable",["root","stickyHeader"]);var v=o(85893);const m=["className","component","padding","size","stickyHeader"],h=(0,d.ZP)("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.stickyHeader&&t.stickyHeader]}})((({theme:e,ownerState:t})=>(0,n.Z)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,n.Z)({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},t.stickyHeader&&{borderCollapse:"separate"}))),b="table";var x=r.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiTable"}),{className:d,component:u=b,padding:x="normal",size:f="medium",stickyHeader:Z=!1}=o,g=(0,a.Z)(o,m),y=(0,n.Z)({},o,{component:u,padding:x,size:f,stickyHeader:Z}),S=(e=>{const{classes:t,stickyHeader:o}=e,a={root:["root",o&&"stickyHeader"]};return(0,s.Z)(a,p,t)})(y),w=r.useMemo((()=>({padding:x,size:f,stickyHeader:Z})),[x,f,Z]);return(0,v.jsx)(l.Z.Provider,{value:w,children:(0,v.jsx)(h,(0,n.Z)({as:u,role:u===b?null:"table",ref:t,className:(0,i.Z)(S.root,d),ownerState:y},g))})}))},295:function(e,t,o){"use strict";o.d(t,{Z:function(){return f}});var a=o(87462),n=o(63366),r=o(67294),i=o(93680),s=o(94780),l=o(44063),c=o(71657),d=o(90948),u=o(34867);function p(e){return(0,u.Z)("MuiTableBody",e)}(0,o(1588).Z)("MuiTableBody",["root"]);var v=o(85893);const m=["className","component"],h=(0,d.ZP)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),b={variant:"body"},x="tbody";var f=r.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiTableBody"}),{className:r,component:d=x}=o,u=(0,n.Z)(o,m),f=(0,a.Z)({},o,{component:d}),Z=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},p,t)})(f);return(0,v.jsx)(l.Z.Provider,{value:b,children:(0,v.jsx)(h,(0,a.Z)({className:(0,i.Z)(Z.root,r),as:d,ref:t,role:d===x?null:"rowgroup",ownerState:f},u))})}))},72882:function(e,t,o){"use strict";o.d(t,{Z:function(){return h}});var a=o(87462),n=o(63366),r=o(67294),i=o(93680),s=o(94780),l=o(71657),c=o(90948),d=o(34867);function u(e){return(0,d.Z)("MuiTableContainer",e)}(0,o(1588).Z)("MuiTableContainer",["root"]);var p=o(85893);const v=["className","component"],m=(0,c.ZP)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"});var h=r.forwardRef((function(e,t){const o=(0,l.Z)({props:e,name:"MuiTableContainer"}),{className:r,component:c="div"}=o,d=(0,n.Z)(o,v),h=(0,a.Z)({},o,{component:c}),b=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},u,t)})(h);return(0,p.jsx)(m,(0,a.Z)({ref:t,as:c,className:(0,i.Z)(b.root,r),ownerState:h},d))}))},39707:function(e,t,o){"use strict";o.d(t,{Z:function(){return l}});var a=o(87462),n=o(63366),r=o(59766),i=o(44920);const s=["sx"];function l(e){const{sx:t}=e,o=(0,n.Z)(e,s),{systemProps:l,otherProps:c}=(e=>{var t,o;const a={systemProps:{},otherProps:{}},n=null!=(t=null==e||null==(o=e.theme)?void 0:o.unstable_sxConfig)?t:i.Z;return Object.keys(e).forEach((t=>{n[t]?a.systemProps[t]=e[t]:a.otherProps[t]=e[t]})),a})(o);let d;return d=Array.isArray(t)?[l,...t]:"function"===typeof t?(...e)=>{const o=t(...e);return(0,r.P)(o)?(0,a.Z)({},l,o):l}:(0,a.Z)({},l,t),(0,a.Z)({},c,{sx:d})}},50040:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/agency-services/components/CardPayment/components/paymentDetails",function(){return o(27718)}])},27718:function(e,t,o){"use strict";o.r(t);var a=o(85893),n=o(67294),r=o(11057),i=o(72882),s=o(55113),l=o(7906),c=o(295),d=o(53816),u=o(53252),p=o(15861),v=[{name:"Company Name",value:"RAMAERA LEGAL INFOTECH PVT LTD."},{name:"Bank Name",value:"HDFC BANK"},{name:"Branch",value:"NOIDA SECTOR 18"},{name:"A/C No.",value:"50200073634812"},{name:"IFSC CODE ",value:"HDFC0000088"}];t.default=function(e){e.docStatus;var t=(0,n.useState)(!0),o=t[0],m=t[1],h=(0,n.useState)(!1),b=h[0],x=h[1],f=(0,n.useState)(!0),Z=f[0],g=f[1],y=(0,n.useState)(!1),S=y[0],w=y[1];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{style:{flexDirection:"row",justifyContent:"center",marginTop:20,marginBottom:10},children:[(0,a.jsx)(r.Z,{style:{marginRight:20,justifyContent:"center"},variant:Z?"contained":"outlined",onClick:function(){m(!0),x(!1),g(!0),w(!1)},children:"Bank Details"}),(0,a.jsx)(r.Z,{style:{justifyContent:"center"},variant:S?"contained":"outlined",onClick:function(){m(!1),x(!0),g(!1),w(!0)},children:"UPI"})]}),o&&(0,a.jsx)(i.Z,{component:s.Z,children:(0,a.jsx)(l.Z,{sx:{minWidth:100},"aria-label":"simple table",children:(0,a.jsx)(c.Z,{children:v.map((function(e){return(0,a.jsxs)(d.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,a.jsx)(u.Z,{component:"th",scope:"row",children:e.name}),(0,a.jsx)(u.Z,{align:"right",children:e.value})]},e.name)}))})})}),b&&(0,a.jsx)(i.Z,{component:s.Z,children:(0,a.jsx)(l.Z,{sx:{minWidth:100,justifyContent:"center"},"aria-label":"simple table",children:(0,a.jsxs)(c.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,a.jsx)("img",{style:{width:"250px",borderRadius:"20px",padding:10},src:"/images/upi_legal.png"}),(0,a.jsx)(p.Z,{fontSize:20,variant:"body1",sx:{m:1},children:"OR"}),(0,a.jsx)(p.Z,{variant:"h4",sx:{m:2},children:(0,a.jsx)("a",{href:"upi://pay?pa=ramaeralegal.noida@hdfcbank&pn=Ramaera K&cu=INR",children:"UPI ID : ramaeralegal.noida@hdfcbank"})})]})})})]})}}},function(e){e.O(0,[1385,400,7305,9774,2888,179],(function(){return t=50040,e(e.s=t);var t}));var t=e.O();_N_E=t}]);