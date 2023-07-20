"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6853],{56853:function(n,e,o){o.d(e,{Z:function(){return A}});var t=o(87462),s=o(63366),i=o(67294),r=o.t(i,2),l=o(45697),a=o.n(l),d=o(20539),p=o(8679),m=o.n(p),c=o(2734),u=o(58974),w=o(34168);function f(n,e,o,t,s){const r="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,[l,a]=i.useState((()=>s&&r?o(n).matches:t?t(n).matches:e));return(0,u.Z)((()=>{let e=!0;if(!r)return;const t=o(n),s=()=>{e&&a(t.matches)};return s(),t.addListener(s),()=>{e=!1,t.removeListener(s)}}),[n,o,r]),l}const h=r.useSyncExternalStore;function x(n,e,o,t){const s=i.useCallback((()=>e),[e]),r=i.useMemo((()=>{if(null!==t){const{matches:e}=t(n);return()=>e}return s}),[s,n,t]),[l,a]=i.useMemo((()=>{if(null===o)return[s,()=>()=>{}];const e=o(n);return[()=>e.matches,n=>(e.addListener(n),()=>{e.removeListener(n)})]}),[s,o,n]);return h(a,l,r)}var y=o(85893);const b=["initialWidth","width"],U=["xs","sm","md","lg","xl"],D=(n,e,o=!0)=>o?U.indexOf(n)<=U.indexOf(e):U.indexOf(n)<U.indexOf(e),k=(n,e,o=!1)=>o?U.indexOf(e)<=U.indexOf(n):U.indexOf(e)<U.indexOf(n);var Z=(n={})=>e=>{const{withTheme:o=!1,noSSR:r=!1,initialWidth:l}=n;function a(n){const a=(0,c.Z)(),p=n.theme||a,m=(0,d.Z)({theme:p,name:"MuiWithWidth",props:n}),{initialWidth:U,width:D}=m,k=(0,s.Z)(m,b),[Z,g]=i.useState(!1);(0,u.Z)((()=>{g(!0)}),[]);const v=p.breakpoints.keys.slice().reverse().reduce(((n,e)=>{const o=function(n,e={}){const o=(0,w.Z)(),t="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,{defaultMatches:s=!1,matchMedia:i=(t?window.matchMedia:null),ssrMatchMedia:r=null,noSsr:l}=(0,d.Z)({name:"MuiUseMediaQuery",props:e,theme:o});let a="function"===typeof n?n(o):n;return a=a.replace(/^@media( ?)/m,""),(void 0!==h?x:f)(a,s,i,r,l)}(p.breakpoints.up(e));return!n&&o?e:n}),null),O=(0,t.Z)({width:D||(Z||r?v:void 0)||U||l},o?{theme:p}:{},k);return void 0===O.width?null:(0,y.jsx)(e,(0,t.Z)({},O))}return m()(a,e),a};function g(n){const{children:e,only:o,width:t}=n,s=(0,c.Z)();let i=!0;if(o)if(Array.isArray(o))for(let r=0;r<o.length;r+=1){if(t===o[r]){i=!1;break}}else o&&t===o&&(i=!1);if(i)for(let r=0;r<s.breakpoints.keys.length;r+=1){const e=s.breakpoints.keys[r],o=n[`${e}Up`],l=n[`${e}Down`];if(o&&D(e,t)||l&&k(e,t)){i=!1;break}}return i?e:null}g.propTypes={children:a().node,className:a().string,implementation:a().oneOf(["js","css"]),initialWidth:a().oneOf(["xs","sm","md","lg","xl"]),lgDown:a().bool,lgUp:a().bool,mdDown:a().bool,mdUp:a().bool,only:a().oneOfType([a().oneOf(["xs","sm","md","lg","xl"]),a().arrayOf(a().oneOf(["xs","sm","md","lg","xl"]))]),smDown:a().bool,smUp:a().bool,width:a().string.isRequired,xlDown:a().bool,xlUp:a().bool,xsDown:a().bool,xsUp:a().bool};var v=Z()(g),O=o(86010),M=o(94780),S=o(98216),j=o(90948),$=o(34867);function C(n){return(0,$.Z)("PrivateHiddenCss",n)}(0,o(1588).Z)("PrivateHiddenCss",["root","xlDown","xlUp","onlyXl","lgDown","lgUp","onlyLg","mdDown","mdUp","onlyMd","smDown","smUp","onlySm","xsDown","xsUp","onlyXs"]);const N=["children","className","only"],W=(0,j.ZP)("div",{name:"PrivateHiddenCss",slot:"Root"})((({theme:n,ownerState:e})=>{const o={display:"none"};return(0,t.Z)({},e.breakpoints.map((({breakpoint:e,dir:t})=>"only"===t?{[n.breakpoints.only(e)]:o}:"up"===t?{[n.breakpoints.up(e)]:o}:{[n.breakpoints.down(e)]:o})).reduce(((n,e)=>(Object.keys(e).forEach((o=>{n[o]=e[o]})),n)),{}))}));var E=function(n){const{children:e,className:o,only:i}=n,r=(0,s.Z)(n,N),l=(0,c.Z)(),a=[];for(let t=0;t<l.breakpoints.keys.length;t+=1){const n=l.breakpoints.keys[t],e=r[`${n}Up`],o=r[`${n}Down`];e&&a.push({breakpoint:n,dir:"up"}),o&&a.push({breakpoint:n,dir:"down"})}if(i){(Array.isArray(i)?i:[i]).forEach((n=>{a.push({breakpoint:n,dir:"only"})}))}const d=(0,t.Z)({},n,{breakpoints:a}),p=(n=>{const{classes:e,breakpoints:o}=n,t={root:["root",...o.map((({breakpoint:n,dir:e})=>"only"===e?`${e}${(0,S.Z)(n)}`:`${n}${(0,S.Z)(e)}`))]};return(0,M.Z)(t,C,e)})(d);return(0,y.jsx)(W,{className:(0,O.Z)(p.root,o),ownerState:d,children:e})};const L=["implementation","lgDown","lgUp","mdDown","mdUp","smDown","smUp","xlDown","xlUp","xsDown","xsUp"];var A=function(n){const{implementation:e="js",lgDown:o=!1,lgUp:i=!1,mdDown:r=!1,mdUp:l=!1,smDown:a=!1,smUp:d=!1,xlDown:p=!1,xlUp:m=!1,xsDown:c=!1,xsUp:u=!1}=n,w=(0,s.Z)(n,L);return"js"===e?(0,y.jsx)(v,(0,t.Z)({lgDown:o,lgUp:i,mdDown:r,mdUp:l,smDown:a,smUp:d,xlDown:p,xlUp:m,xsDown:c,xsUp:u},w)):(0,y.jsx)(E,(0,t.Z)({lgDown:o,lgUp:i,mdDown:r,mdUp:l,smDown:a,smUp:d,xlDown:p,xlUp:m,xsDown:c,xsUp:u},w))}}}]);