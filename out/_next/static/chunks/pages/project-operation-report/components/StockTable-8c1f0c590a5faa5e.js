(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5189],{87357:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var n=r(87462),a=r(63366),o=r(67294),i=r(70828),s=r(49731),l=r(86523),c=r(39707),u=r(96682),d=r(85893);const v=["className","component"];var f=r(37078);const h=function(e={}){const{themeId:t,defaultTheme:r,defaultClassName:f="MuiBox-root",generateClassName:h}=e,p=(0,s.ZP)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(l.Z);return o.forwardRef((function(e,o){const s=(0,u.Z)(r),l=(0,c.Z)(e),{className:m,component:Z="div"}=l,g=(0,a.Z)(l,v);return(0,d.jsx)(p,(0,n.Z)({as:Z,ref:o,className:(0,i.Z)(m,h?h(f):f),theme:t&&s[t]||s},g))}))}({defaultTheme:(0,r(69404).Z)(),defaultClassName:"MuiBox-root",generateClassName:f.Z.generate});var p=h},66242:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(87462),a=r(63366),o=r(67294),i=r(93680),s=r(94780),l=r(90948),c=r(71657),u=r(55113),d=r(34867);function v(e){return(0,d.Z)("MuiCard",e)}(0,r(1588).Z)("MuiCard",["root"]);var f=r(85893);const h=["className","raised"],p=(0,l.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"})));var m=o.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiCard"}),{className:o,raised:l=!1}=r,u=(0,a.Z)(r,h),d=(0,n.Z)({},r,{raised:l}),m=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},v,t)})(d);return(0,f.jsx)(p,(0,n.Z)({className:(0,i.Z)(m.root,o),elevation:l?8:void 0,ref:t,ownerState:d},u))}))},67720:function(e,t,r){"use strict";var n=r(63366),a=r(87462),o=r(67294),i=r(93680),s=r(94780),l=r(41796),c=r(90948),u=r(71657),d=r(35097),v=r(85893);const f=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],h=(0,c.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,"vertical"===r.orientation&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&"vertical"===r.orientation&&t.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignLeft]}})((({theme:e,ownerState:t})=>(0,a.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:(0,l.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"})),(({theme:e,ownerState:t})=>(0,a.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}})),(({theme:e,ownerState:t})=>(0,a.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(e.vars||e).palette.divider}`,transform:"translateX(0%)"}})),(({ownerState:e})=>(0,a.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),p=(0,c.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.wrapper,"vertical"===r.orientation&&t.wrapperVertical]}})((({theme:e,ownerState:t})=>(0,a.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`}))),m=o.forwardRef((function(e,t){const r=(0,u.Z)({props:e,name:"MuiDivider"}),{absolute:o=!1,children:l,className:c,component:m=(l?"div":"hr"),flexItem:Z=!1,light:g=!1,orientation:w="horizontal",role:x=("hr"!==m?"separator":void 0),textAlign:b="center",variant:S="fullWidth"}=r,M=(0,n.Z)(r,f),N=(0,a.Z)({},r,{absolute:o,component:m,flexItem:Z,light:g,orientation:w,role:x,textAlign:b,variant:S}),j=(e=>{const{absolute:t,children:r,classes:n,flexItem:a,light:o,orientation:i,textAlign:l,variant:c}=e,u={root:["root",t&&"absolute",c,o&&"light","vertical"===i&&"vertical",a&&"flexItem",r&&"withChildren",r&&"vertical"===i&&"withChildrenVertical","right"===l&&"vertical"!==i&&"textAlignRight","left"===l&&"vertical"!==i&&"textAlignLeft"],wrapper:["wrapper","vertical"===i&&"wrapperVertical"]};return(0,s.Z)(u,d.V,n)})(N);return(0,v.jsx)(h,(0,a.Z)({as:m,className:(0,i.Z)(j.root,c),role:x,ref:t,ownerState:N},M,{children:l?(0,v.jsx)(p,{className:j.wrapper,ownerState:N,children:l}):null}))}));t.Z=m},35097:function(e,t,r){"use strict";r.d(t,{V:function(){return a}});var n=r(34867);function a(e){return(0,n.Z)("MuiDivider",e)}const o=(0,r(1588).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=o},55113:function(e,t,r){"use strict";r.d(t,{Z:function(){return Z}});var n=r(63366),a=r(87462),o=r(67294),i=r(93680),s=r(94780),l=r(41796),c=r(90948),u=r(71657),d=r(34867);function v(e){return(0,d.Z)("MuiPaper",e)}(0,r(1588).Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var f=r(85893);const h=["className","component","elevation","square","variant"],p=e=>{let t;return t=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,(t/100).toFixed(2)},m=(0,c.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],!r.square&&t.rounded,"elevation"===r.variant&&t[`elevation${r.elevation}`]]}})((({theme:e,ownerState:t})=>{var r;return(0,a.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===t.variant&&(0,a.Z)({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,l.Fq)("#fff",p(t.elevation))}, ${(0,l.Fq)("#fff",p(t.elevation))})`},e.vars&&{backgroundImage:null==(r=e.vars.overlays)?void 0:r[t.elevation]}))}));var Z=o.forwardRef((function(e,t){const r=(0,u.Z)({props:e,name:"MuiPaper"}),{className:o,component:l="div",elevation:c=1,square:d=!1,variant:p="elevation"}=r,Z=(0,n.Z)(r,h),g=(0,a.Z)({},r,{component:l,elevation:c,square:d,variant:p}),w=(e=>{const{square:t,elevation:r,variant:n,classes:a}=e,o={root:["root",n,!t&&"rounded","elevation"===n&&`elevation${r}`]};return(0,s.Z)(o,v,a)})(g);return(0,f.jsx)(m,(0,a.Z)({as:l,ownerState:g,className:(0,i.Z)(w.root,o),ref:t},Z))}))},72882:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var n=r(87462),a=r(63366),o=r(67294),i=r(93680),s=r(94780),l=r(71657),c=r(90948),u=r(34867);function d(e){return(0,u.Z)("MuiTableContainer",e)}(0,r(1588).Z)("MuiTableContainer",["root"]);var v=r(85893);const f=["className","component"],h=(0,c.ZP)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"});var p=o.forwardRef((function(e,t){const r=(0,l.Z)({props:e,name:"MuiTableContainer"}),{className:o,component:c="div"}=r,u=(0,a.Z)(r,f),p=(0,n.Z)({},r,{component:c}),m=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},d,t)})(p);return(0,v.jsx)(h,(0,n.Z)({ref:t,as:c,className:(0,i.Z)(m.root,o),ownerState:p},u))}))},53184:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var n=r(87462),a=r(63366),o=r(67294),i=r(93680),s=r(94780),l=r(44063),c=r(71657),u=r(90948),d=r(34867);function v(e){return(0,d.Z)("MuiTableHead",e)}(0,r(1588).Z)("MuiTableHead",["root"]);var f=r(85893);const h=["className","component"],p=(0,u.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),m={variant:"head"},Z="thead";var g=o.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiTableHead"}),{className:o,component:u=Z}=r,d=(0,a.Z)(r,h),g=(0,n.Z)({},r,{component:u}),w=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},v,t)})(g);return(0,f.jsx)(l.Z.Provider,{value:m,children:(0,f.jsx)(p,(0,n.Z)({as:u,className:(0,i.Z)(w.root,o),ref:t,role:u===Z?null:"rowgroup",ownerState:g},d))})}))},2734:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});r(67294);var n=r(96682),a=r(90247);function o(){return(0,n.Z)(a.Z)}},98396:function(e,t,r){"use strict";var n;r.d(t,{Z:function(){return d}});var a=r(67294),o=r(34168),i=r(20539),s=r(58974);function l(e,t,r,n,o){const i="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,[l,c]=a.useState((()=>o&&i?r(e).matches:n?n(e).matches:t));return(0,s.Z)((()=>{let t=!0;if(!i)return;const n=r(e),a=()=>{t&&c(n.matches)};return a(),n.addListener(a),()=>{t=!1,n.removeListener(a)}}),[e,r,i]),l}const c=(n||(n=r.t(a,2))).useSyncExternalStore;function u(e,t,r,n){const o=a.useCallback((()=>t),[t]),i=a.useMemo((()=>{if(null!==n){const{matches:t}=n(e);return()=>t}return o}),[o,e,n]),[s,l]=a.useMemo((()=>{if(null===r)return[o,()=>()=>{}];const t=r(e);return[()=>t.matches,e=>(t.addListener(e),()=>{t.removeListener(e)})]}),[o,r,e]);return c(l,s,i)}function d(e,t={}){const r=(0,o.Z)(),n="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,{defaultMatches:a=!1,matchMedia:s=(n?window.matchMedia:null),ssrMatchMedia:d=null,noSsr:v}=(0,i.Z)({name:"MuiUseMediaQuery",props:t,theme:r});let f="function"===typeof e?e(r):e;f=f.replace(/^@media( ?)/m,"");return(void 0!==c?u:l)(f,a,s,d,v)}},58974:function(e,t,r){"use strict";var n=r(73546);t.Z=n.Z},36403:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project-operation-report/components/StockTable",function(){return r(39476)}])},39476:function(e,t,r){"use strict";r.r(t);var n=r(47568),a=r(14924),o=r(97582),i=r(85893),s=r(98396),l=r(2734),c=r(66242),u=r(87357),d=r(11057),v=r(67720),f=r(72882),h=r(7906),p=r(53184),m=r(53816),Z=r(53252),g=r(295),w=r(67294),x=r(4749),b=r(37887),S=r(86501);t.default=function(){(0,s.Z)("(min-width:600px)");var e=(0,l.Z)(),t=(0,w.useRef)(null),r=(0,w.useState)(0),M=r[0],N=(r[1],(0,w.useState)(1)),j=(N[0],N[1],(0,w.useState)(100)),C=j[0],y=(j[1],(0,w.useState)(!1)),R=(y[0],y[1],(0,w.useState)("")),A=(R[0],R[1],(0,w.useState)()),k=(A[0],A[1],(0,w.useState)(null)),T=(k[0],k[1],(0,w.useState)("")),P=(T[0],T[1],(0,w.useState)("")),_=P[0],I=(P[1],(0,w.useState)(""));I[0],I[1],(0,b.a)(x.lw,{variables:{skip:M*C,take:C,input:{searchTerm:_.includes("totalAvdance")?"ADVANCE":_.includes("totalBasic")?"BASIC":"ADVANCE"}}});(0,w.useEffect)((function(){var e=function(){var e=(0,n.Z)((function(){var e,t,r,n;return(0,o.__generator)(this,(function(a){switch(a.label){case 0:return a.trys.push([0,3,,4]),[4,fetch("https://erp.ramaera.com/api/resource/Stock Balance",{headers:{Authorization:"token ".concat("602ac7d2d573f32:6acaed00eb0733d")}})];case 1:if(!(e=a.sent()).ok)throw console.log("err"),new Error("Network response was not ok");return[4,e.json()];case 2:return t=a.sent(),r=t.data,console.log("data",r),[3,4];case 3:return n=a.sent(),console.error("Error fetching data:",n),[3,4];case 4:return[2]}}))}));return function(){return e.apply(this,arguments)}}();e()}),[]);var $=(0,w.useState)({status:null,hajipur:null,agra:null,hyderabad:null});$[0],$[1];return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(c.Z,{children:[(0,i.jsx)(u.Z,{mx:2,sx:(0,a.Z)({display:"flex",justifyContent:"space-between"},e.breakpoints.down("sm"),{flexDirection:"column"}),children:(0,i.jsx)(u.Z,{my:2,display:"flex",gap:2,sx:(0,a.Z)({},e.breakpoints.down("sm"),{display:"flex",flexDirection:"column"}),children:(0,i.jsx)(d.Z,{variant:_.includes("total")?"contained":"outlined",sx:{textTransform:"uppercase",padding:2},children:"Purchase Orders"})})}),(0,i.jsx)(v.Z,{}),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(f.Z,{children:(0,i.jsxs)(h.Z,{ref:t,children:[(0,i.jsx)(p.Z,{children:(0,i.jsxs)(m.Z,{children:[(0,i.jsx)(Z.Z,{children:"S.No."}),(0,i.jsx)(Z.Z,{children:"Purchase Date"}),(0,i.jsx)(Z.Z,{children:"Purchase Order Number"}),(0,i.jsx)(Z.Z,{children:"Supplier Name"}),(0,i.jsx)(Z.Z,{children:"Bill Amount"})]})}),(0,i.jsx)(g.Z,{})]})})}),(0,i.jsx)(S.x7,{position:"bottom-center",reverseOrder:!1})]})})}},70828:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.Z=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}}},function(e){e.O(0,[8244,9990,9260,2453,9774,2888,179],(function(){return t=36403,e(e.s=t);var t}));var t=e.O();_N_E=t}]);