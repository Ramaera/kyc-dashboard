(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9587],{87357:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var n=r(87462),o=r(63366),i=r(67294),a=r(70828),l=r(49731),s=r(86523),c=r(39707),u=r(96682),d=r(85893);const v=["className","component"];var f=r(37078);const h=function(e={}){const{themeId:t,defaultTheme:r,defaultClassName:f="MuiBox-root",generateClassName:h}=e,p=(0,l.ZP)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(s.Z);return i.forwardRef((function(e,i){const l=(0,u.Z)(r),s=(0,c.Z)(e),{className:m,component:g="div"}=s,Z=(0,o.Z)(s,v);return(0,d.jsx)(p,(0,n.Z)({as:g,ref:i,className:(0,a.Z)(m,h?h(f):f),theme:t&&l[t]||l},Z))}))}({defaultTheme:(0,r(69404).Z)(),defaultClassName:"MuiBox-root",generateClassName:f.Z.generate});var p=h},66242:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(87462),o=r(63366),i=r(67294),a=r(93680),l=r(94780),s=r(90948),c=r(71657),u=r(55113),d=r(34867);function v(e){return(0,d.Z)("MuiCard",e)}(0,r(1588).Z)("MuiCard",["root"]);var f=r(85893);const h=["className","raised"],p=(0,s.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"})));var m=i.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiCard"}),{className:i,raised:s=!1}=r,u=(0,o.Z)(r,h),d=(0,n.Z)({},r,{raised:s}),m=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"]},v,t)})(d);return(0,f.jsx)(p,(0,n.Z)({className:(0,a.Z)(m.root,i),elevation:s?8:void 0,ref:t,ownerState:d},u))}))},67720:function(e,t,r){"use strict";var n=r(63366),o=r(87462),i=r(67294),a=r(93680),l=r(94780),s=r(41796),c=r(90948),u=r(71657),d=r(35097),v=r(85893);const f=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],h=(0,c.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,"vertical"===r.orientation&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&"vertical"===r.orientation&&t.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignLeft]}})((({theme:e,ownerState:t})=>(0,o.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:(0,s.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"})),(({theme:e,ownerState:t})=>(0,o.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}})),(({theme:e,ownerState:t})=>(0,o.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(e.vars||e).palette.divider}`,transform:"translateX(0%)"}})),(({ownerState:e})=>(0,o.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),p=(0,c.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.wrapper,"vertical"===r.orientation&&t.wrapperVertical]}})((({theme:e,ownerState:t})=>(0,o.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`}))),m=i.forwardRef((function(e,t){const r=(0,u.Z)({props:e,name:"MuiDivider"}),{absolute:i=!1,children:s,className:c,component:m=(s?"div":"hr"),flexItem:g=!1,light:Z=!1,orientation:x="horizontal",role:w=("hr"!==m?"separator":void 0),textAlign:b="center",variant:y="fullWidth"}=r,C=(0,n.Z)(r,f),A=(0,o.Z)({},r,{absolute:i,component:m,flexItem:g,light:Z,orientation:x,role:w,textAlign:b,variant:y}),N=(e=>{const{absolute:t,children:r,classes:n,flexItem:o,light:i,orientation:a,textAlign:s,variant:c}=e,u={root:["root",t&&"absolute",c,i&&"light","vertical"===a&&"vertical",o&&"flexItem",r&&"withChildren",r&&"vertical"===a&&"withChildrenVertical","right"===s&&"vertical"!==a&&"textAlignRight","left"===s&&"vertical"!==a&&"textAlignLeft"],wrapper:["wrapper","vertical"===a&&"wrapperVertical"]};return(0,l.Z)(u,d.V,n)})(A);return(0,v.jsx)(h,(0,o.Z)({as:m,className:(0,a.Z)(N.root,c),role:w,ref:t,ownerState:A},C,{children:s?(0,v.jsx)(p,{className:N.wrapper,ownerState:A,children:s}):null}))}));t.Z=m},35097:function(e,t,r){"use strict";r.d(t,{V:function(){return o}});var n=r(34867);function o(e){return(0,n.Z)("MuiDivider",e)}const i=(0,r(1588).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=i},55113:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var n=r(63366),o=r(87462),i=r(67294),a=r(93680),l=r(94780),s=r(41796),c=r(90948),u=r(71657),d=r(34867);function v(e){return(0,d.Z)("MuiPaper",e)}(0,r(1588).Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var f=r(85893);const h=["className","component","elevation","square","variant"],p=e=>{let t;return t=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,(t/100).toFixed(2)},m=(0,c.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],!r.square&&t.rounded,"elevation"===r.variant&&t[`elevation${r.elevation}`]]}})((({theme:e,ownerState:t})=>{var r;return(0,o.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===t.variant&&(0,o.Z)({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,s.Fq)("#fff",p(t.elevation))}, ${(0,s.Fq)("#fff",p(t.elevation))})`},e.vars&&{backgroundImage:null==(r=e.vars.overlays)?void 0:r[t.elevation]}))}));var g=i.forwardRef((function(e,t){const r=(0,u.Z)({props:e,name:"MuiPaper"}),{className:i,component:s="div",elevation:c=1,square:d=!1,variant:p="elevation"}=r,g=(0,n.Z)(r,h),Z=(0,o.Z)({},r,{component:s,elevation:c,square:d,variant:p}),x=(e=>{const{square:t,elevation:r,variant:n,classes:o}=e,i={root:["root",n,!t&&"rounded","elevation"===n&&`elevation${r}`]};return(0,l.Z)(i,v,o)})(Z);return(0,f.jsx)(m,(0,o.Z)({as:s,ownerState:Z,className:(0,a.Z)(x.root,i),ref:t},g))}))},93680:function(e,t,r){"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.Z=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},2734:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});r(67294);var n=r(96682),o=r(90247);function i(){return(0,n.Z)(o.Z)}},39707:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(87462),o=r(63366),i=r(59766),a=r(44920);const l=["sx"];function s(e){const{sx:t}=e,r=(0,o.Z)(e,l),{systemProps:s,otherProps:c}=(e=>{var t,r;const n={systemProps:{},otherProps:{}},o=null!=(t=null==e||null==(r=e.theme)?void 0:r.unstable_sxConfig)?t:a.Z;return Object.keys(e).forEach((t=>{o[t]?n.systemProps[t]=e[t]:n.otherProps[t]=e[t]})),n})(r);let u;return u=Array.isArray(t)?[s,...t]:"function"===typeof t?(...e)=>{const r=t(...e);return(0,i.P)(r)?(0,n.Z)({},s,r):s}:(0,n.Z)({},s,t),(0,n.Z)({},c,{sx:u})}},1588:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(34867);function o(e,t,r="Mui"){const o={};return t.forEach((t=>{o[t]=(0,n.Z)(e,t,r)})),o}},2855:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project-operation-report/components/OperationData",function(){return r(34163)}])},34163:function(e,t,r){"use strict";r.r(t);var n=r(47568),o=r(97582),i=r(85893),a=r(2734),l=r(66242),s=r(87357),c=r(67720),u=r(67294);t.default=function(){(0,a.Z)();var e=(0,u.useState)(null);e[0],e[1];return(0,u.useEffect)((function(){var e=function(){var e=(0,n.Z)((function(){var e,t;return(0,o.__generator)(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,fetch("https://erp.ramaera.com/api/method/frappe.charts.api.get",{headers:{Authorization:"token 602ac7d2d573f32:6acaed00eb0733d"},params:{chart_name:"Purchase Order Trends",filters:{doc_type:"Purchase Order",date_field:"creation_date",group_by:"supplier",aggregation:"count",range:"Year",from_date:"2023-01-01",to_date:"2024-01-31"}}})];case 1:return e=r.sent(),console.log("--\x3e>",e),[3,3];case 2:return t=r.sent(),console.error("Error fetching data:",t),[3,3];case 3:return[2]}}))}));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(l.Z,{children:[(0,i.jsxs)(s.Z,{sx:{display:"flex",justifyContent:"center",fontSize:28,mt:2,color:"#776AD0"},children:["Project Operations Report"," "]}),(0,i.jsx)(s.Z,{sx:{height:"300px",fontSize:"40px",display:"flex",justifyContent:"center"},children:"Coming Soon"}),(0,i.jsx)(c.Z,{})]})})}},70828:function(e,t,r){"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.Z=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}}},function(e){e.O(0,[1385,9774,2888,179],(function(){return t=2855,e(e.s=t);var t}));var t=e.O();_N_E=t}]);