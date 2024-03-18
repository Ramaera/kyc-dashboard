(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3114],{87357:function(e,t,o){"use strict";o.d(t,{Z:function(){return m}});var a=o(87462),r=o(63366),n=o(67294),i=o(70828),l=o(49731),s=o(86523),d=o(39707),c=o(96682),u=o(85893);const p=["className","component"];var v=o(37078);const h=function(e={}){const{themeId:t,defaultTheme:o,defaultClassName:v="MuiBox-root",generateClassName:h}=e,m=(0,l.ZP)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(s.Z);return n.forwardRef((function(e,n){const l=(0,c.Z)(o),s=(0,d.Z)(e),{className:f,component:x="div"}=s,b=(0,r.Z)(s,p);return(0,u.jsx)(m,(0,a.Z)({as:x,ref:n,className:(0,i.Z)(f,h?h(v):v),theme:t&&l[t]||l},b))}))}({defaultTheme:(0,o(69404).Z)(),defaultClassName:"MuiBox-root",generateClassName:v.Z.generate});var m=h},11057:function(e,t,o){"use strict";o.d(t,{Z:function(){return w}});var a=o(63366),r=o(87462),n=o(67294),i=o(93680),l=o(47925),s=o(94780),d=o(41796),c=o(90948),u=o(71657),p=o(49990),v=o(98216),h=o(34867);function m(e){return(0,h.Z)("MuiButton",e)}var f=(0,o(1588).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),x=o(98363),b=o(85893);const g=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],S=e=>(0,r.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),y=(0,c.ZP)(p.Z,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],t[`${o.variant}${(0,v.Z)(o.color)}`],t[`size${(0,v.Z)(o.size)}`],t[`${o.variant}Size${(0,v.Z)(o.size)}`],"inherit"===o.color&&t.colorInherit,o.disableElevation&&t.disableElevation,o.fullWidth&&t.fullWidth]}})((({theme:e,ownerState:t})=>{var o,a;return(0,r.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,r.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:(e.vars||e).palette.grey.A100,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,r.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${f.focusVisible}`]:(0,r.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${f.disabled}`]:(0,r.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"outlined"===t.variant&&"secondary"===t.color&&{border:`1px solid ${(e.vars||e).palette.action.disabled}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,d.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(o=(a=e.palette).getContrastText)?void 0:o.call(a,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})}),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${f.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${f.disabled}`]:{boxShadow:"none"}})),Z=(0,c.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.startIcon,t[`iconSize${(0,v.Z)(o.size)}`]]}})((({ownerState:e})=>(0,r.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},S(e)))),z=(0,c.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.endIcon,t[`iconSize${(0,v.Z)(o.size)}`]]}})((({ownerState:e})=>(0,r.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},S(e))));var w=n.forwardRef((function(e,t){const o=n.useContext(x.Z),d=(0,l.Z)(o,e),c=(0,u.Z)({props:d,name:"MuiButton"}),{children:p,color:h="primary",component:f="button",className:S,disabled:w=!1,disableElevation:C=!1,disableFocusRipple:$=!1,endIcon:k,focusVisibleClassName:I,fullWidth:R=!1,size:N="medium",startIcon:P,type:j,variant:E="text"}=c,_=(0,a.Z)(c,g),F=(0,r.Z)({},c,{color:h,component:f,disabled:w,disableElevation:C,disableFocusRipple:$,fullWidth:R,size:N,type:j,variant:E}),M=(e=>{const{color:t,disableElevation:o,fullWidth:a,size:n,variant:i,classes:l}=e,d={root:["root",i,`${i}${(0,v.Z)(t)}`,`size${(0,v.Z)(n)}`,`${i}Size${(0,v.Z)(n)}`,"inherit"===t&&"colorInherit",o&&"disableElevation",a&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,v.Z)(n)}`],endIcon:["endIcon",`iconSize${(0,v.Z)(n)}`]},c=(0,s.Z)(d,m,l);return(0,r.Z)({},l,c)})(F),T=P&&(0,b.jsx)(Z,{className:M.startIcon,ownerState:F,children:P}),A=k&&(0,b.jsx)(z,{className:M.endIcon,ownerState:F,children:k});return(0,b.jsxs)(y,(0,r.Z)({ownerState:F,className:(0,i.Z)(S,o.className),component:f,disabled:w,focusRipple:!$,focusVisibleClassName:(0,i.Z)(M.focusVisible,I),ref:t,type:j},_,{classes:M,children:[T,p,A]}))}))},98363:function(e,t,o){"use strict";const a=o(67294).createContext({});t.Z=a},39707:function(e,t,o){"use strict";o.d(t,{Z:function(){return s}});var a=o(87462),r=o(63366),n=o(59766),i=o(44920);const l=["sx"];function s(e){const{sx:t}=e,o=(0,r.Z)(e,l),{systemProps:s,otherProps:d}=(e=>{var t,o;const a={systemProps:{},otherProps:{}},r=null!=(t=null==e||null==(o=e.theme)?void 0:o.unstable_sxConfig)?t:i.Z;return Object.keys(e).forEach((t=>{r[t]?a.systemProps[t]=e[t]:a.otherProps[t]=e[t]})),a})(o);let c;return c=Array.isArray(t)?[s,...t]:"function"===typeof t?(...e)=>{const o=t(...e);return(0,n.P)(o)?(0,a.Z)({},s,o):s}:(0,a.Z)({},s,t),(0,a.Z)({},d,{sx:c})}},25938:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/agreement/components/AgreementFile",function(){return o(10383)}])},10383:function(e,t,o){"use strict";o.r(t);var a=o(85893),r=o(4749),n=o(37887),i=o(87357),l=o(15861),s=o(11057),d=o(26183),c=o(41664),u=o.n(c);t.default=function(){var e,t,o=(0,d.C)((function(e){var t;return null===(t=e.user)||void 0===t?void 0:t.data})),c=(0,n.a)(r.n4,{variables:{pwid:null===o||void 0===o?void 0:o.pw_id}}),p=(c.loading,c.data),v=(c.error,null===p||void 0===p||null===(e=p.checkAgreementDataStatus)||void 0===e?void 0:e.isCompleted),h=null===p||void 0===p||null===(t=p.checkAgreementDataStatus)||void 0===t?void 0:t.agreementUrl;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(i.Z,{children:[(0,a.jsx)("img",{src:"./images/PDF_file.png",height:100,width:100}),(0,a.jsxs)(l.Z,{children:["Ramaera 30% net profit partner ",(0,a.jsx)("br",{}),"mutual agreement consent"," "]}),v?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("a",{href:h,target:"_blank",rel:"noopener noreferrer",children:(0,a.jsx)(s.Z,{children:"Download Agreement"})})}):(0,a.jsx)(u(),{href:"/agreement/thirty-percent-partner",children:(0,a.jsx)(s.Z,{children:"Complete Your Agreement"})})]})})}},70828:function(e,t,o){"use strict";function a(e){var t,o,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=a(e[t]))&&(r&&(r+=" "),r+=o);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.Z=function(){for(var e,t,o=0,r="";o<arguments.length;)(e=arguments[o++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}}},function(e){e.O(0,[8244,9990,9036,9774,2888,179],(function(){return t=25938,e(e.s=t);var t}));var t=e.O();_N_E=t}]);