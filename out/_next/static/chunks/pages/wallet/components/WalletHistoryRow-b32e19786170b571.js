(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1231],{50122:function(t,e,n){"use strict";n.d(e,{Z:function(){return D}});var r=n(63366),o=n(87462),i=n(67294),a=n(93680),u=n(94780),s=n(54844),l=n(41796),c=n(98216),d=n(90948),f=n(71657),p=n(79674),m=n(51705),v=n(15861),y=n(34867);function h(t){return(0,y.Z)("MuiLink",t)}var Z=(0,n(1588).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),b=n(85893);const x=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],g={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},w=(0,d.ZP)(v.Z,{name:"MuiLink",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[`underline${(0,c.Z)(n.underline)}`],"button"===n.component&&e.button]}})((({theme:t,ownerState:e})=>{const n=(0,s.DW)(t,`palette.${(t=>g[t]||t)(e.color)}`)||e.color;return(0,o.Z)({},"none"===e.underline&&{textDecoration:"none"},"hover"===e.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===e.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==n?(0,l.Fq)(n,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===e.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Z.focusVisible}`]:{outline:"auto"}})}));var D=i.forwardRef((function(t,e){const n=(0,f.Z)({props:t,name:"MuiLink"}),{className:s,color:l="primary",component:d="a",onBlur:v,onFocus:y,TypographyClasses:Z,underline:D="always",variant:j="inherit",sx:E}=n,P=(0,r.Z)(n,x),{isFocusVisibleRef:W,onBlur:_,onFocus:k,ref:C}=(0,p.Z)(),[T,S]=i.useState(!1),A=(0,m.Z)(e,C),B=(0,o.Z)({},n,{color:l,component:d,focusVisible:T,underline:D,variant:j}),R=(t=>{const{classes:e,component:n,focusVisible:r,underline:o}=t,i={root:["root",`underline${(0,c.Z)(o)}`,"button"===n&&"button",r&&"focusVisible"]};return(0,u.Z)(i,h,e)})(B);return(0,b.jsx)(w,(0,o.Z)({color:l,className:(0,a.Z)(R.root,s),classes:Z,component:d,onBlur:t=>{_(t),!1===W.current&&S(!1),v&&v(t)},onFocus:t=>{k(t),!0===W.current&&S(!0),y&&y(t)},ref:A,ownerState:B,variant:j,sx:[...Object.keys(g).includes(l)?[]:[{color:l}],...Array.isArray(E)?E:[E]]},P))}))},93680:function(t,e,n){"use strict";function r(t){var e,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=r(t[e]))&&(o&&(o+=" "),o+=n);else for(e in t)t[e]&&(o&&(o+=" "),o+=e);return o}e.Z=function(){for(var t,e,n=0,o="";n<arguments.length;)(t=arguments[n++])&&(e=r(t))&&(o&&(o+=" "),o+=e);return o}},51705:function(t,e,n){"use strict";var r=n(33703);e.Z=r.Z},79674:function(t,e,n){"use strict";var r=n(99962);e.Z=r.Z},39707:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var r=n(87462),o=n(63366),i=n(59766),a=n(44920);const u=["sx"];function s(t){const{sx:e}=t,n=(0,o.Z)(t,u),{systemProps:s,otherProps:l}=(t=>{var e,n;const r={systemProps:{},otherProps:{}},o=null!=(e=null==t||null==(n=t.theme)?void 0:n.unstable_sxConfig)?e:a.Z;return Object.keys(t).forEach((e=>{o[e]?r.systemProps[e]=t[e]:r.otherProps[e]=t[e]})),r})(n);let c;return c=Array.isArray(e)?[s,...e]:"function"===typeof e?(...t)=>{const n=e(...t);return(0,i.P)(n)?(0,r.Z)({},s,n):s}:(0,r.Z)({},s,e),(0,r.Z)({},l,{sx:c})}},1588:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r=n(34867);function o(t,e,n="Mui"){const o={};return e.forEach((e=>{o[e]=(0,r.Z)(t,e,n)})),o}},7960:function(t,e,n){"use strict";function r(t,e){"function"===typeof t?t(e):t&&(t.current=e)}n.d(e,{Z:function(){return r}})},33703:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(67294),o=n(7960);function i(...t){return r.useMemo((()=>t.every((t=>null==t))?null:e=>{t.forEach((t=>{(0,o.Z)(t,e)}))}),t)}},99962:function(t,e,n){"use strict";n.d(e,{Z:function(){return f}});var r=n(67294);let o,i=!0,a=!1;const u={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function s(t){t.metaKey||t.altKey||t.ctrlKey||(i=!0)}function l(){i=!1}function c(){"hidden"===this.visibilityState&&a&&(i=!0)}function d(t){const{target:e}=t;try{return e.matches(":focus-visible")}catch(n){}return i||function(t){const{type:e,tagName:n}=t;return!("INPUT"!==n||!u[e]||t.readOnly)||"TEXTAREA"===n&&!t.readOnly||!!t.isContentEditable}(e)}function f(){const t=r.useCallback((t=>{var e;null!=t&&((e=t.ownerDocument).addEventListener("keydown",s,!0),e.addEventListener("mousedown",l,!0),e.addEventListener("pointerdown",l,!0),e.addEventListener("touchstart",l,!0),e.addEventListener("visibilitychange",c,!0))}),[]),e=r.useRef(!1);return{isFocusVisibleRef:e,onFocus:function(t){return!!d(t)&&(e.current=!0,!0)},onBlur:function(){return!!e.current&&(a=!0,window.clearTimeout(o),o=window.setTimeout((()=>{a=!1}),100),e.current=!1,!0)},ref:t}}},21373:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/wallet/components/WalletHistoryRow",function(){return n(49019)}])},49019:function(t,e,n){"use strict";n.r(e);var r=n(85893),o=n(4749),i=n(37887),a=n(53816),u=n(53252),s=n(15861),l=n(50122);n(67294);e.default=function(t){var e,n,c,d,f,p,m=t.item,v=t.index,y=null===m||void 0===m?void 0:m.metaData.map((function(t){return t.userId}))[0],h=null===m||void 0===m?void 0:m.metaData.map((function(t){return t.documentId}))[2],Z=(0,i.a)(o.Lj,{variables:{id:y}}),b=(0,i.a)(o.o_,{variables:{id:h}}),x=b.data;b.error,b.loading;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(a.Z,{sx:{cursor:"pointer"},children:[(0,r.jsx)(u.Z,{children:(0,r.jsx)(s.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,align:"center",noWrap:!0,width:30,children:v+1})}),(0,r.jsx)(u.Z,{children:(0,r.jsx)(s.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:null===m||void 0===m||null===(e=m.metaData)||void 0===e?void 0:e.map((function(t){return null===t||void 0===t?void 0:t.timeStamp}))})}),(0,r.jsxs)(u.Z,{children:["DEPOSIT_KYC"===m.category&&(0,r.jsxs)(s.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:["Reward for completing KYC for PWID ","",null===Z||void 0===Z||null===(n=Z.data)||void 0===n||null===(c=n.getUserDetails)||void 0===c?void 0:c.pw_id]}),"DEPOSIT_PROJECT"===m.category&&(0,r.jsxs)(s.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:["Reward for Project"," ",(null===x||void 0===x||null===(d=x.getDocumentDetails)||void 0===d?void 0:d.title.includes("hajipur"))?x.getDocumentDetails.title.slice(0,7).toUpperCase():(null===x||void 0===x||null===(f=x.getDocumentDetails)||void 0===f?void 0:f.title.includes("agra"))?x.getDocumentDetails.title.slice(0,4).toUpperCase():""," ","for PWID ",null===x||void 0===x||null===(p=x.getDocumentDetails)||void 0===p?void 0:p.user.pw_id]})]}),(0,r.jsx)(l.Z,{href:"",scroll:!1,children:(0,r.jsx)(u.Z,{align:"left",children:(0,r.jsx)(s.Z,{variant:"body1",width:"100px",fontWeight:"bold",color:"text.primary",noWrap:!0,children:m.type})})}),(0,r.jsx)(u.Z,{children:(0,r.jsx)(s.Z,{fontWeight:"bold",width:"100px",color:"DEPOSIT"===m.type?"green":"red",gutterBottom:!0,noWrap:!0,children:"DEPOSIT"===m.type&&"+ \u20b9 "+m.amount})}),(0,r.jsx)(u.Z,{children:(0,r.jsxs)(s.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,width:"80px",noWrap:!0,children:["\u20b9 ",m.finalBalance]})})]})})}}},function(t){t.O(0,[8244,7305,9774,2888,179],(function(){return e=21373,t(t.s=e);var e}));var e=t.O();_N_E=e}]);