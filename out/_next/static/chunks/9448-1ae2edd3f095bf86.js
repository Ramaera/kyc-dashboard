"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9448],{11057:function(e,t,a){a.d(t,{Z:function(){return $}});var o=a(63366),r=a(87462),i=a(67294),n=a(86010),s=a(47925),l=a(94780),d=a(41796),c=a(90948),p=a(71657),u=a(49990),m=a(98216),f=a(34867);function h(e){return(0,f.Z)("MuiButton",e)}var b=(0,a(1588).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),v=a(98363),g=a(85893);const y=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],x=e=>(0,r.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),w=(0,c.ZP)(u.Z,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],t[`${a.variant}${(0,m.Z)(a.color)}`],t[`size${(0,m.Z)(a.size)}`],t[`${a.variant}Size${(0,m.Z)(a.size)}`],"inherit"===a.color&&t.colorInherit,a.disableElevation&&t.disableElevation,a.fullWidth&&t.fullWidth]}})((({theme:e,ownerState:t})=>{var a,o;return(0,r.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,r.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:(e.vars||e).palette.grey.A100,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,r.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${b.focusVisible}`]:(0,r.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${b.disabled}`]:(0,r.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"outlined"===t.variant&&"secondary"===t.color&&{border:`1px solid ${(e.vars||e).palette.action.disabled}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,d.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(a=(o=e.palette).getContrastText)?void 0:a.call(o,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})}),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${b.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${b.disabled}`]:{boxShadow:"none"}})),S=(0,c.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.startIcon,t[`iconSize${(0,m.Z)(a.size)}`]]}})((({ownerState:e})=>(0,r.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},x(e)))),z=(0,c.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.endIcon,t[`iconSize${(0,m.Z)(a.size)}`]]}})((({ownerState:e})=>(0,r.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},x(e))));var $=i.forwardRef((function(e,t){const a=i.useContext(v.Z),d=(0,s.Z)(a,e),c=(0,p.Z)({props:d,name:"MuiButton"}),{children:u,color:f="primary",component:b="button",className:x,disabled:$=!1,disableElevation:Z=!1,disableFocusRipple:C=!1,endIcon:k,focusVisibleClassName:E,fullWidth:I=!1,size:N="medium",startIcon:R,type:O,variant:M="text"}=c,P=(0,o.Z)(c,y),j=(0,r.Z)({},c,{color:f,component:b,disabled:$,disableElevation:Z,disableFocusRipple:C,fullWidth:I,size:N,type:O,variant:M}),F=(e=>{const{color:t,disableElevation:a,fullWidth:o,size:i,variant:n,classes:s}=e,d={root:["root",n,`${n}${(0,m.Z)(t)}`,`size${(0,m.Z)(i)}`,`${n}Size${(0,m.Z)(i)}`,"inherit"===t&&"colorInherit",a&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,m.Z)(i)}`],endIcon:["endIcon",`iconSize${(0,m.Z)(i)}`]},c=(0,l.Z)(d,h,s);return(0,r.Z)({},s,c)})(j),T=R&&(0,g.jsx)(S,{className:F.startIcon,ownerState:j,children:R}),L=k&&(0,g.jsx)(z,{className:F.endIcon,ownerState:j,children:k});return(0,g.jsxs)(w,(0,r.Z)({ownerState:j,className:(0,n.Z)(x,a.className),component:b,disabled:$,focusRipple:!C,focusVisibleClassName:(0,n.Z)(F.focusVisible,E),ref:t,type:O},P,{classes:F,children:[T,u,L]}))}))},98363:function(e,t,a){const o=a(67294).createContext({});t.Z=o},27909:function(e,t,a){var o=a(57579);t.Z=o.Z},57579:function(e,t,a){var o;a.d(t,{Z:function(){return s}});var r=a(67294);let i=0;const n=(o||(o=a.t(r,2))).useId;function s(e){if(void 0!==n){const t=n();return null!=e?e:t}return function(e){const[t,a]=r.useState(e),o=e||t;return r.useEffect((()=>{null==t&&(i+=1,a(`mui-${i}`))}),[t]),o}(e)}},86501:function(e,t,a){a.d(t,{x7:function(){return ae},ZP:function(){return oe},Am:function(){return R}});var o=a(67294);let r={data:""},i=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||r,n=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,s=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,d=(e,t)=>{let a="",o="",r="";for(let i in e){let n=e[i];"@"==i[0]?"i"==i[1]?a=i+" "+n+";":o+="f"==i[1]?d(n,i):i+"{"+d(n,"k"==i[1]?"":t)+"}":"object"==typeof n?o+=d(n,t?t.replace(/([^,])+/g,(e=>i.replace(/(^:.*)|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):i):null!=n&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=d.p?d.p(i,n):i+":"+n+";")}return a+(t&&r?t+"{"+r+"}":r)+o},c={},p=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+p(e[a]);return t}return e},u=(e,t,a,o,r)=>{let i=p(e),u=c[i]||(c[i]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(i));if(!c[u]){let t=i!==e?e:(e=>{let t,a,o=[{}];for(;t=n.exec(e.replace(s,""));)t[4]?o.shift():t[3]?(a=t[3].replace(l," ").trim(),o.unshift(o[0][a]=o[0][a]||{})):o[0][t[1]]=t[2].replace(l," ").trim();return o[0]})(e);c[u]=d(r?{["@keyframes "+u]:t}:t,a?"":"."+u)}let m=a&&c.g?c.g:null;return a&&(c.g=c[u]),((e,t,a,o)=>{o?t.data=t.data.replace(o,e):-1===t.data.indexOf(e)&&(t.data=a?e+t.data:t.data+e)})(c[u],t,o,m),u},m=(e,t,a)=>e.reduce(((e,o,r)=>{let i=t[r];if(i&&i.call){let e=i(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":d(e,""):!1===e?"":e}return e+o+(null==i?"":i)}),"");function f(e){let t=this||{},a=e.call?e(t.p):e;return u(a.unshift?a.raw?m(a,[].slice.call(arguments,1),t.p):a.reduce(((e,a)=>Object.assign(e,a&&a.call?a(t.p):a)),{}):a,i(t.target),t.g,t.o,t.k)}f.bind({g:1});let h,b,v,g=f.bind({k:1});function y(e,t){let a=this||{};return function(){let o=arguments;function r(i,n){let s=Object.assign({},i),l=s.className||r.className;a.p=Object.assign({theme:b&&b()},s),a.o=/ *go\d+/.test(l),s.className=f.apply(a,o)+(l?" "+l:""),t&&(s.ref=n);let d=e;return e[0]&&(d=s.as||e,delete s.as),v&&d[0]&&v(s),h(d,s)}return t?t(r):r}}var x=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,w=(()=>{let e=0;return()=>(++e).toString()})(),S=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),z=new Map,$=e=>{if(z.has(e))return;let t=setTimeout((()=>{z.delete(e),E({type:4,toastId:e})}),1e3);z.set(e,t)},Z=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&(e=>{let t=z.get(e);t&&clearTimeout(t)})(t.toast.id),{...e,toasts:e.toasts.map((e=>e.id===t.toast.id?{...e,...t.toast}:e))};case 2:let{toast:a}=t;return e.toasts.find((e=>e.id===a.id))?Z(e,{type:1,toast:a}):Z(e,{type:0,toast:a});case 3:let{toastId:o}=t;return o?$(o):e.toasts.forEach((e=>{$(e.id)})),{...e,toasts:e.toasts.map((e=>e.id===o||void 0===o?{...e,visible:!1}:e))};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((e=>e.id!==t.toastId))};case 5:return{...e,pausedAt:t.time};case 6:let r=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map((e=>({...e,pauseDuration:e.pauseDuration+r})))}}},C=[],k={toasts:[],pausedAt:void 0},E=e=>{k=Z(k,e),C.forEach((e=>{e(k)}))},I={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},N=e=>(t,a)=>{let o=((e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||w()}))(t,e,a);return E({type:2,toast:o}),o.id},R=(e,t)=>N("blank")(e,t);R.error=N("error"),R.success=N("success"),R.loading=N("loading"),R.custom=N("custom"),R.dismiss=e=>{E({type:3,toastId:e})},R.remove=e=>E({type:4,toastId:e}),R.promise=(e,t,a)=>{let o=R.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then((e=>(R.success(x(t.success,e),{id:o,...a,...null==a?void 0:a.success}),e))).catch((e=>{R.error(x(t.error,e),{id:o,...a,...null==a?void 0:a.error})})),e};var O=(e,t)=>{E({type:1,toast:{id:e,height:t}})},M=()=>{E({type:5,time:Date.now()})},P=e=>{let{toasts:t,pausedAt:a}=((e={})=>{let[t,a]=(0,o.useState)(k);(0,o.useEffect)((()=>(C.push(a),()=>{let e=C.indexOf(a);e>-1&&C.splice(e,1)})),[t]);let r=t.toasts.map((t=>{var a,o;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||I[t.type],style:{...e.style,...null==(o=e[t.type])?void 0:o.style,...t.style}}}));return{...t,toasts:r}})(e);(0,o.useEffect)((()=>{if(a)return;let e=Date.now(),o=t.map((t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(a<0))return setTimeout((()=>R.dismiss(t.id)),a);t.visible&&R.dismiss(t.id)}));return()=>{o.forEach((e=>e&&clearTimeout(e)))}}),[t,a]);let r=(0,o.useCallback)((()=>{a&&E({type:6,time:Date.now()})}),[a]),i=(0,o.useCallback)(((e,a)=>{let{reverseOrder:o=!1,gutter:r=8,defaultPosition:i}=a||{},n=t.filter((t=>(t.position||i)===(e.position||i)&&t.height)),s=n.findIndex((t=>t.id===e.id)),l=n.filter(((e,t)=>t<s&&e.visible)).length;return n.filter((e=>e.visible)).slice(...o?[l+1]:[0,l]).reduce(((e,t)=>e+(t.height||0)+r),0)}),[t]);return{toasts:t,handlers:{updateHeight:O,startPause:M,endPause:r,calculateOffset:i}}},j=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,F=g`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,T=g`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,L=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${j} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${F} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${T} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,A=g`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,D=y("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${A} 1s linear infinite;
`,W=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,B=g`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,V=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${W} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${B} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,_=y("div")`
  position: absolute;
`,q=y("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,H=g`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,U=y("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${H} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Y=({toast:e})=>{let{icon:t,type:a,iconTheme:r}=e;return void 0!==t?"string"==typeof t?o.createElement(U,null,t):t:"blank"===a?null:o.createElement(q,null,o.createElement(D,{...r}),"loading"!==a&&o.createElement(_,null,"error"===a?o.createElement(L,{...r}):o.createElement(V,{...r})))},G=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,J=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,K=y("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Q=y("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,X=o.memo((({toast:e,position:t,style:a,children:r})=>{let i=e.height?((e,t)=>{let a=e.includes("top")?1:-1,[o,r]=S()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[G(a),J(a)];return{animation:t?`${g(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${g(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},n=o.createElement(Y,{toast:e}),s=o.createElement(Q,{...e.ariaProps},x(e.message,e));return o.createElement(K,{className:e.className,style:{...i,...a,...e.style}},"function"==typeof r?r({icon:n,message:s}):o.createElement(o.Fragment,null,n,s))}));!function(e,t,a,o){d.p=t,h=e,b=a,v=o}(o.createElement);var ee=({id:e,className:t,style:a,onHeightUpdate:r,children:i})=>{let n=o.useCallback((t=>{if(t){let a=()=>{let a=t.getBoundingClientRect().height;r(e,a)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}}),[e,r]);return o.createElement("div",{ref:n,className:t,style:a},i)},te=f`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ae=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:r,children:i,containerStyle:n,containerClassName:s})=>{let{toasts:l,handlers:d}=P(a);return o.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:s,onMouseEnter:d.startPause,onMouseLeave:d.endPause},l.map((a=>{let n=a.position||t,s=((e,t)=>{let a=e.includes("top"),o=a?{top:0}:{bottom:0},r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:S()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...o,...r}})(n,d.calculateOffset(a,{reverseOrder:e,gutter:r,defaultPosition:t}));return o.createElement(ee,{id:a.id,key:a.id,onHeightUpdate:d.updateHeight,className:a.visible?te:"",style:s},"custom"===a.type?x(a.message,a):i?i(a):o.createElement(X,{toast:a,position:n}))})))},oe=R}}]);