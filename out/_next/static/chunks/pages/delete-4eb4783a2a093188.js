(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3365],{11057:function(t,e,o){"use strict";o.d(e,{Z:function(){return w}});var a=o(63366),r=o(87462),n=o(67294),i=o(93680),l=o(47925),s=o(94780),c=o(41796),d=o(90948),p=o(71657),u=o(49990),h=o(98216),v=o(34867);function g(t){return(0,v.Z)("MuiButton",t)}var m=(0,o(1588).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),b=o(98363),x=o(85893);const f=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],y=t=>(0,r.Z)({},"small"===t.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===t.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===t.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),Z=(0,d.ZP)(u.Z,{shouldForwardProp:t=>(0,d.FO)(t)||"classes"===t,name:"MuiButton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,e[o.variant],e[`${o.variant}${(0,h.Z)(o.color)}`],e[`size${(0,h.Z)(o.size)}`],e[`${o.variant}Size${(0,h.Z)(o.size)}`],"inherit"===o.color&&e.colorInherit,o.disableElevation&&e.disableElevation,o.fullWidth&&e.fullWidth]}})((({theme:t,ownerState:e})=>{var o,a;return(0,r.Z)({},t.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(t.vars||t).shape.borderRadius,transition:t.transitions.create(["background-color","box-shadow","border-color","color"],{duration:t.transitions.duration.short}),"&:hover":(0,r.Z)({textDecoration:"none",backgroundColor:t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,c.Fq)(t.palette.text.primary,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===e.variant&&"inherit"!==e.color&&{backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,c.Fq)(t.palette[e.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===e.variant&&"inherit"!==e.color&&{border:`1px solid ${(t.vars||t).palette[e.color].main}`,backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,c.Fq)(t.palette[e.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===e.variant&&{backgroundColor:(t.vars||t).palette.grey.A100,boxShadow:(t.vars||t).shadows[4],"@media (hover: none)":{boxShadow:(t.vars||t).shadows[2],backgroundColor:(t.vars||t).palette.grey[300]}},"contained"===e.variant&&"inherit"!==e.color&&{backgroundColor:(t.vars||t).palette[e.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[e.color].main}}),"&:active":(0,r.Z)({},"contained"===e.variant&&{boxShadow:(t.vars||t).shadows[8]}),[`&.${m.focusVisible}`]:(0,r.Z)({},"contained"===e.variant&&{boxShadow:(t.vars||t).shadows[6]}),[`&.${m.disabled}`]:(0,r.Z)({color:(t.vars||t).palette.action.disabled},"outlined"===e.variant&&{border:`1px solid ${(t.vars||t).palette.action.disabledBackground}`},"outlined"===e.variant&&"secondary"===e.color&&{border:`1px solid ${(t.vars||t).palette.action.disabled}`},"contained"===e.variant&&{color:(t.vars||t).palette.action.disabled,boxShadow:(t.vars||t).shadows[0],backgroundColor:(t.vars||t).palette.action.disabledBackground})},"text"===e.variant&&{padding:"6px 8px"},"text"===e.variant&&"inherit"!==e.color&&{color:(t.vars||t).palette[e.color].main},"outlined"===e.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===e.variant&&"inherit"!==e.color&&{color:(t.vars||t).palette[e.color].main,border:t.vars?`1px solid rgba(${t.vars.palette[e.color].mainChannel} / 0.5)`:`1px solid ${(0,c.Fq)(t.palette[e.color].main,.5)}`},"contained"===e.variant&&{color:t.vars?t.vars.palette.text.primary:null==(o=(a=t.palette).getContrastText)?void 0:o.call(a,t.palette.grey[300]),backgroundColor:(t.vars||t).palette.grey[300],boxShadow:(t.vars||t).shadows[2]},"contained"===e.variant&&"inherit"!==e.color&&{color:(t.vars||t).palette[e.color].contrastText,backgroundColor:(t.vars||t).palette[e.color].main},"inherit"===e.color&&{color:"inherit",borderColor:"currentColor"},"small"===e.size&&"text"===e.variant&&{padding:"4px 5px",fontSize:t.typography.pxToRem(13)},"large"===e.size&&"text"===e.variant&&{padding:"8px 11px",fontSize:t.typography.pxToRem(15)},"small"===e.size&&"outlined"===e.variant&&{padding:"3px 9px",fontSize:t.typography.pxToRem(13)},"large"===e.size&&"outlined"===e.variant&&{padding:"7px 21px",fontSize:t.typography.pxToRem(15)},"small"===e.size&&"contained"===e.variant&&{padding:"4px 10px",fontSize:t.typography.pxToRem(13)},"large"===e.size&&"contained"===e.variant&&{padding:"8px 22px",fontSize:t.typography.pxToRem(15)},e.fullWidth&&{width:"100%"})}),(({ownerState:t})=>t.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${m.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${m.disabled}`]:{boxShadow:"none"}})),S=(0,d.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.startIcon,e[`iconSize${(0,h.Z)(o.size)}`]]}})((({ownerState:t})=>(0,r.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===t.size&&{marginLeft:-2},y(t)))),z=(0,d.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.endIcon,e[`iconSize${(0,h.Z)(o.size)}`]]}})((({ownerState:t})=>(0,r.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===t.size&&{marginRight:-2},y(t))));var w=n.forwardRef((function(t,e){const o=n.useContext(b.Z),c=(0,l.Z)(o,t),d=(0,p.Z)({props:c,name:"MuiButton"}),{children:u,color:v="primary",component:m="button",className:y,disabled:w=!1,disableElevation:C=!1,disableFocusRipple:$=!1,endIcon:k,focusVisibleClassName:I,fullWidth:R=!1,size:E="medium",startIcon:B,type:W,variant:M="text"}=d,N=(0,a.Z)(d,f),P=(0,r.Z)({},d,{color:v,component:m,disabled:w,disableElevation:C,disableFocusRipple:$,fullWidth:R,size:E,type:W,variant:M}),j=(t=>{const{color:e,disableElevation:o,fullWidth:a,size:n,variant:i,classes:l}=t,c={root:["root",i,`${i}${(0,h.Z)(e)}`,`size${(0,h.Z)(n)}`,`${i}Size${(0,h.Z)(n)}`,"inherit"===e&&"colorInherit",o&&"disableElevation",a&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,h.Z)(n)}`],endIcon:["endIcon",`iconSize${(0,h.Z)(n)}`]},d=(0,s.Z)(c,g,l);return(0,r.Z)({},l,d)})(P),T=B&&(0,x.jsx)(S,{className:j.startIcon,ownerState:P,children:B}),_=k&&(0,x.jsx)(z,{className:j.endIcon,ownerState:P,children:k});return(0,x.jsxs)(Z,(0,r.Z)({ownerState:P,className:(0,i.Z)(y,o.className),component:m,disabled:w,focusRipple:!$,focusVisibleClassName:(0,i.Z)(j.focusVisible,I),ref:e,type:W},N,{classes:j,children:[T,u,_]}))}))},98363:function(t,e,o){"use strict";const a=o(67294).createContext({});e.Z=a},15861:function(t,e,o){"use strict";o.d(e,{Z:function(){return f}});var a=o(63366),r=o(87462),n=o(67294),i=o(93680),l=o(39707),s=o(94780),c=o(90948),d=o(71657),p=o(98216),u=o(34867);function h(t){return(0,u.Z)("MuiTypography",t)}(0,o(1588).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var v=o(85893);const g=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],m=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,o.variant&&e[o.variant],"inherit"!==o.align&&e[`align${(0,p.Z)(o.align)}`],o.noWrap&&e.noWrap,o.gutterBottom&&e.gutterBottom,o.paragraph&&e.paragraph]}})((({theme:t,ownerState:e})=>(0,r.Z)({margin:0},e.variant&&t.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16}))),b={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},x={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var f=n.forwardRef((function(t,e){const o=(0,d.Z)({props:t,name:"MuiTypography"}),n=(t=>x[t]||t)(o.color),c=(0,l.Z)((0,r.Z)({},o,{color:n})),{align:u="inherit",className:f,component:y,gutterBottom:Z=!1,noWrap:S=!1,paragraph:z=!1,variant:w="body1",variantMapping:C=b}=c,$=(0,a.Z)(c,g),k=(0,r.Z)({},c,{align:u,color:n,className:f,component:y,gutterBottom:Z,noWrap:S,paragraph:z,variant:w,variantMapping:C}),I=y||(z?"p":C[w]||b[w])||"span",R=(t=>{const{align:e,gutterBottom:o,noWrap:a,paragraph:r,variant:n,classes:i}=t,l={root:["root",n,"inherit"!==t.align&&`align${(0,p.Z)(e)}`,o&&"gutterBottom",a&&"noWrap",r&&"paragraph"]};return(0,s.Z)(l,h,i)})(k);return(0,v.jsx)(m,(0,r.Z)({as:I,ref:e,ownerState:k,className:(0,i.Z)(R.root,f)},$))}))},27909:function(t,e,o){"use strict";var a=o(92996);e.Z=a.Z},39707:function(t,e,o){"use strict";o.d(e,{Z:function(){return s}});var a=o(87462),r=o(63366),n=o(59766),i=o(44920);const l=["sx"];function s(t){const{sx:e}=t,o=(0,r.Z)(t,l),{systemProps:s,otherProps:c}=(t=>{var e,o;const a={systemProps:{},otherProps:{}},r=null!=(e=null==t||null==(o=t.theme)?void 0:o.unstable_sxConfig)?e:i.Z;return Object.keys(t).forEach((e=>{r[e]?a.systemProps[e]=t[e]:a.otherProps[e]=t[e]})),a})(o);let d;return d=Array.isArray(e)?[s,...e]:"function"===typeof e?(...t)=>{const o=e(...t);return(0,n.P)(o)?(0,a.Z)({},s,o):s}:(0,a.Z)({},s,e),(0,a.Z)({},c,{sx:d})}},92996:function(t,e,o){"use strict";var a;o.d(e,{Z:function(){return l}});var r=o(67294);let n=0;const i=(a||(a=o.t(r,2)))["useId".toString()];function l(t){if(void 0!==i){const e=i();return null!=t?t:e}return function(t){const[e,o]=r.useState(t),a=t||e;return r.useEffect((()=>{null==e&&(n+=1,o(`mui-${n}`))}),[e]),a}(t)}},94695:function(t,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/delete",function(){return o(9543)}])},9543:function(t,e,o){"use strict";o.r(e);var a=o(47568),r=o(97582),n=o(85893),i=o(89448),l=o(8987),s=o(50657),c=o(37645),d=o(6514),p=o(58951),u=o(31425),h=o(11057),v=o(11163),g=o(67294),m=o(9473);e.default=function(){(0,v.useRouter)();var t=(0,m.I0)(),e=(0,g.useState)(!1),o=e[0],b=e[1],x=function(){b(!1)},f=function(){var e=(0,a.Z)((function(){return(0,r.__generator)(this,(function(e){return t((0,i.kS)()),[2]}))}));return function(){return e.apply(this,arguments)}}();return(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:[(0,n.jsx)(l.Z,{onClick:function(){b(!0)},variant:"contained",children:"Delete Account"}),(0,n.jsx)("div",{children:(0,n.jsxs)(s.Z,{open:o,onClose:x,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,n.jsx)(c.Z,{id:"alert-dialog-title",children:"Delete Account Forever?"}),(0,n.jsx)(d.Z,{children:(0,n.jsxs)(p.Z,{id:"alert-dialog-description",children:["You won't be able to recover this account.",(0,n.jsx)("br",{}),"Account will be deleted in 15 Days"]})}),(0,n.jsxs)(u.Z,{children:[(0,n.jsx)(h.Z,{onClick:x,children:"Dismiss"}),(0,n.jsx)(h.Z,{onClick:f,autoFocus:!0,children:"DELETE"})]})]})})]})}}},function(t){t.O(0,[8244,9990,9213,6827,4850,9774,2888,179],(function(){return e=94695,t(t.s=e);var e}));var e=t.O();_N_E=e}]);