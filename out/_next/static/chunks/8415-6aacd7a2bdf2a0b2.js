(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8415],{50456:function(n,e,t){"use strict";t.d(e,{Z:function(){return j}});var o=t(87462),s=t(63366),r=t(67294),i=t(45697),l=t.n(i),a=t(20539),c=t(8679),p=t.n(c),u=t(2734),d=t(58974),m=t(98396),f=t(85893);const w=["initialWidth","width"],h=["xs","sm","md","lg","xl"],x=(n,e,t=!0)=>t?h.indexOf(n)<=h.indexOf(e):h.indexOf(n)<h.indexOf(e),y=(n,e,t=!1)=>t?h.indexOf(e)<=h.indexOf(n):h.indexOf(e)<h.indexOf(n);var b=(n={})=>e=>{const{withTheme:t=!1,noSSR:i=!1,initialWidth:l}=n;function c(n){const c=(0,u.Z)(),p=n.theme||c,h=(0,a.Z)({theme:p,name:"MuiWithWidth",props:n}),{initialWidth:x,width:y}=h,b=(0,s.Z)(h,w),[U,k]=r.useState(!1);(0,d.Z)((()=>{k(!0)}),[]);const D=p.breakpoints.keys.slice().reverse().reduce(((n,e)=>{const t=(0,m.Z)(p.breakpoints.up(e));return!n&&t?e:n}),null),Z=(0,o.Z)({width:y||(U||i?D:void 0)||x||l},t?{theme:p}:{},b);return void 0===Z.width?null:(0,f.jsx)(e,(0,o.Z)({},Z))}return p()(c,e),c};function U(n){const{children:e,only:t,width:o}=n,s=(0,u.Z)();let r=!0;if(t)if(Array.isArray(t))for(let i=0;i<t.length;i+=1){if(o===t[i]){r=!1;break}}else t&&o===t&&(r=!1);if(r)for(let i=0;i<s.breakpoints.keys.length;i+=1){const e=s.breakpoints.keys[i],t=n[`${e}Up`],l=n[`${e}Down`];if(t&&x(e,o)||l&&y(e,o)){r=!1;break}}return r?e:null}U.propTypes={children:l().node,className:l().string,implementation:l().oneOf(["js","css"]),initialWidth:l().oneOf(["xs","sm","md","lg","xl"]),lgDown:l().bool,lgUp:l().bool,mdDown:l().bool,mdUp:l().bool,only:l().oneOfType([l().oneOf(["xs","sm","md","lg","xl"]),l().arrayOf(l().oneOf(["xs","sm","md","lg","xl"]))]),smDown:l().bool,smUp:l().bool,width:l().string.isRequired,xlDown:l().bool,xlUp:l().bool,xsDown:l().bool,xsUp:l().bool};var k=b()(U),D=t(93680),Z=t(94780),g=t(98216),v=t(90948),O=t(34867);function S(n){return(0,O.Z)("PrivateHiddenCss",n)}(0,t(1588).Z)("PrivateHiddenCss",["root","xlDown","xlUp","onlyXl","lgDown","lgUp","onlyLg","mdDown","mdUp","onlyMd","smDown","smUp","onlySm","xsDown","xsUp","onlyXs"]);const M=["children","className","only"],T=(0,v.ZP)("div",{name:"PrivateHiddenCss",slot:"Root"})((({theme:n,ownerState:e})=>{const t={display:"none"};return(0,o.Z)({},e.breakpoints.map((({breakpoint:e,dir:o})=>"only"===o?{[n.breakpoints.only(e)]:t}:"up"===o?{[n.breakpoints.up(e)]:t}:{[n.breakpoints.down(e)]:t})).reduce(((n,e)=>(Object.keys(e).forEach((t=>{n[t]=e[t]})),n)),{}))}));var _=function(n){const{children:e,className:t,only:r}=n,i=(0,s.Z)(n,M),l=(0,u.Z)(),a=[];for(let o=0;o<l.breakpoints.keys.length;o+=1){const n=l.breakpoints.keys[o],e=i[`${n}Up`],t=i[`${n}Down`];e&&a.push({breakpoint:n,dir:"up"}),t&&a.push({breakpoint:n,dir:"down"})}if(r){(Array.isArray(r)?r:[r]).forEach((n=>{a.push({breakpoint:n,dir:"only"})}))}const c=(0,o.Z)({},n,{breakpoints:a}),p=(n=>{const{classes:e,breakpoints:t}=n,o={root:["root",...t.map((({breakpoint:n,dir:e})=>"only"===e?`${e}${(0,g.Z)(n)}`:`${n}${(0,g.Z)(e)}`))]};return(0,Z.Z)(o,S,e)})(c);return(0,f.jsx)(T,{className:(0,D.Z)(p.root,t),ownerState:c,children:e})};const E=["implementation","lgDown","lgUp","mdDown","mdUp","smDown","smUp","xlDown","xlUp","xsDown","xsUp"];var j=function(n){const{implementation:e="js",lgDown:t=!1,lgUp:r=!1,mdDown:i=!1,mdUp:l=!1,smDown:a=!1,smUp:c=!1,xlDown:p=!1,xlUp:u=!1,xsDown:d=!1,xsUp:m=!1}=n,w=(0,s.Z)(n,E);return"js"===e?(0,f.jsx)(k,(0,o.Z)({lgDown:t,lgUp:r,mdDown:i,mdUp:l,smDown:a,smUp:c,xlDown:p,xlUp:u,xsDown:d,xsUp:m},w)):(0,f.jsx)(_,(0,o.Z)({lgDown:t,lgUp:r,mdDown:i,mdUp:l,smDown:a,smUp:c,xlDown:p,xlUp:u,xsDown:d,xsUp:m},w))}},98396:function(n,e,t){"use strict";var o;t.d(e,{Z:function(){return u}});var s=t(67294),r=t(34168),i=t(20539),l=t(58974);function a(n,e,t,o,r){const i="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,[a,c]=s.useState((()=>r&&i?t(n).matches:o?o(n).matches:e));return(0,l.Z)((()=>{let e=!0;if(!i)return;const o=t(n),s=()=>{e&&c(o.matches)};return s(),o.addListener(s),()=>{e=!1,o.removeListener(s)}}),[n,t,i]),a}const c=(o||(o=t.t(s,2))).useSyncExternalStore;function p(n,e,t,o){const r=s.useCallback((()=>e),[e]),i=s.useMemo((()=>{if(null!==o){const{matches:e}=o(n);return()=>e}return r}),[r,n,o]),[l,a]=s.useMemo((()=>{if(null===t)return[r,()=>()=>{}];const e=t(n);return[()=>e.matches,n=>(e.addListener(n),()=>{e.removeListener(n)})]}),[r,t,n]);return c(a,l,i)}function u(n,e={}){const t=(0,r.Z)(),o="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,{defaultMatches:s=!1,matchMedia:l=(o?window.matchMedia:null),ssrMatchMedia:u=null,noSsr:d}=(0,i.Z)({name:"MuiUseMediaQuery",props:e,theme:t});let m="function"===typeof n?n(t):n;m=m.replace(/^@media( ?)/m,"");return(void 0!==c?p:a)(m,s,l,u,d)}},27909:function(n,e,t){"use strict";var o=t(92996);e.Z=o.Z},92996:function(n,e,t){"use strict";var o;t.d(e,{Z:function(){return l}});var s=t(67294);let r=0;const i=(o||(o=t.t(s,2)))["useId".toString()];function l(n){if(void 0!==i){const e=i();return null!=n?n:e}return function(n){const[e,t]=s.useState(n),o=n||e;return s.useEffect((()=>{null==e&&(r+=1,t(`mui-${r}`))}),[e]),o}(n)}},92703:function(n,e,t){"use strict";var o=t(50414);function s(){}function r(){}r.resetWarningCache=s,n.exports=function(){function n(n,e,t,s,r,i){if(i!==o){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:r,resetWarningCache:s};return t.PropTypes=t,t}},45697:function(n,e,t){n.exports=t(92703)()},50414:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);