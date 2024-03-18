(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7503],{8987:function(n,t,o){"use strict";o.d(t,{Z:function(){return T}});var i=o(63366),r=o(87462),e=o(67294),a=o(98216),s=o(27909),l=o(94780),d=o(90948),c=o(71657),u=o(11057),v=o(93680),h=o(70917),g=o(34867),f=o(1588);function m(n){return(0,g.Z)("MuiCircularProgress",n)}(0,f.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var Z=o(85893);const p=["className","color","disableShrink","size","style","thickness","value","variant"];let x,b,w,S,j=n=>n;const y=44,I=(0,h.F4)(x||(x=j`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),P=(0,h.F4)(b||(b=j`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),k=(0,d.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:o}=n;return[t.root,t[o.variant],t[`color${(0,a.Z)(o.color)}`]]}})((({ownerState:n,theme:t})=>(0,r.Z)({display:"inline-block"},"determinate"===n.variant&&{transition:t.transitions.create("transform")},"inherit"!==n.color&&{color:(t.vars||t).palette[n.color].main})),(({ownerState:n})=>"indeterminate"===n.variant&&(0,h.iv)(w||(w=j`
      animation: ${0} 1.4s linear infinite;
    `),I))),L=(0,d.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(n,t)=>t.svg})({display:"block"}),W=(0,d.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(n,t)=>{const{ownerState:o}=n;return[t.circle,t[`circle${(0,a.Z)(o.variant)}`],o.disableShrink&&t.circleDisableShrink]}})((({ownerState:n,theme:t})=>(0,r.Z)({stroke:"currentColor"},"determinate"===n.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===n.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:n})=>"indeterminate"===n.variant&&!n.disableShrink&&(0,h.iv)(S||(S=j`
      animation: ${0} 1.4s ease-in-out infinite;
    `),P)));var N=e.forwardRef((function(n,t){const o=(0,c.Z)({props:n,name:"MuiCircularProgress"}),{className:e,color:s="primary",disableShrink:d=!1,size:u=40,style:h,thickness:g=3.6,value:f=0,variant:x="indeterminate"}=o,b=(0,i.Z)(o,p),w=(0,r.Z)({},o,{color:s,disableShrink:d,size:u,thickness:g,value:f,variant:x}),S=(n=>{const{classes:t,variant:o,color:i,disableShrink:r}=n,e={root:["root",o,`color${(0,a.Z)(i)}`],svg:["svg"],circle:["circle",`circle${(0,a.Z)(o)}`,r&&"circleDisableShrink"]};return(0,l.Z)(e,m,t)})(w),j={},I={},P={};if("determinate"===x){const n=2*Math.PI*((y-g)/2);j.strokeDasharray=n.toFixed(3),P["aria-valuenow"]=Math.round(f),j.strokeDashoffset=`${((100-f)/100*n).toFixed(3)}px`,I.transform="rotate(-90deg)"}return(0,Z.jsx)(k,(0,r.Z)({className:(0,v.Z)(S.root,e),style:(0,r.Z)({width:u,height:u},I,h),ownerState:w,ref:t,role:"progressbar"},P,b,{children:(0,Z.jsx)(L,{className:S.svg,ownerState:w,viewBox:"22 22 44 44",children:(0,Z.jsx)(W,{className:S.circle,style:j,ownerState:w,cx:y,cy:y,r:(y-g)/2,fill:"none",strokeWidth:g})})}))}));function $(n){return(0,g.Z)("MuiLoadingButton",n)}var E=(0,f.Z)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]);const M=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],C=(0,d.ZP)(u.Z,{shouldForwardProp:n=>(n=>"ownerState"!==n&&"theme"!==n&&"sx"!==n&&"as"!==n&&"classes"!==n)(n)||"classes"===n,name:"MuiLoadingButton",slot:"Root",overridesResolver:(n,t)=>[t.root,t.startIconLoadingStart&&{[`& .${E.startIconLoadingStart}`]:t.startIconLoadingStart},t.endIconLoadingEnd&&{[`& .${E.endIconLoadingEnd}`]:t.endIconLoadingEnd}]})((({ownerState:n,theme:t})=>(0,r.Z)({[`& .${E.startIconLoadingStart}, & .${E.endIconLoadingEnd}`]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0}},"center"===n.loadingPosition&&{transition:t.transitions.create(["background-color","box-shadow","border-color"],{duration:t.transitions.duration.short}),[`&.${E.loading}`]:{color:"transparent"}},"start"===n.loadingPosition&&n.fullWidth&&{[`& .${E.startIconLoadingStart}, & .${E.endIconLoadingEnd}`]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0,marginRight:-8}},"end"===n.loadingPosition&&n.fullWidth&&{[`& .${E.startIconLoadingStart}, & .${E.endIconLoadingEnd}`]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0,marginLeft:-8}}))),R=(0,d.ZP)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(n,t)=>{const{ownerState:o}=n;return[t.loadingIndicator,t[`loadingIndicator${(0,a.Z)(o.loadingPosition)}`]]}})((({theme:n,ownerState:t})=>(0,r.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===t.loadingPosition&&("outlined"===t.variant||"contained"===t.variant)&&{left:"small"===t.size?10:14},"start"===t.loadingPosition&&"text"===t.variant&&{left:6},"center"===t.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:n.palette.action.disabled},"end"===t.loadingPosition&&("outlined"===t.variant||"contained"===t.variant)&&{right:"small"===t.size?10:14},"end"===t.loadingPosition&&"text"===t.variant&&{right:6},"start"===t.loadingPosition&&t.fullWidth&&{position:"relative",left:-10},"end"===t.loadingPosition&&t.fullWidth&&{position:"relative",right:-10})));var T=e.forwardRef((function(n,t){const o=(0,c.Z)({props:n,name:"MuiLoadingButton"}),{children:d,disabled:u=!1,id:v,loading:h=!1,loadingIndicator:g,loadingPosition:f="center",variant:m="text"}=o,p=(0,i.Z)(o,M),x=(0,s.Z)(v),b=null!=g?g:(0,Z.jsx)(N,{"aria-labelledby":x,color:"inherit",size:16}),w=(0,r.Z)({},o,{disabled:u,loading:h,loadingIndicator:b,loadingPosition:f,variant:m}),S=(n=>{const{loading:t,loadingPosition:o,classes:i}=n,e={root:["root",t&&"loading"],startIcon:[t&&`startIconLoading${(0,a.Z)(o)}`],endIcon:[t&&`endIconLoading${(0,a.Z)(o)}`],loadingIndicator:["loadingIndicator",t&&`loadingIndicator${(0,a.Z)(o)}`]},s=(0,l.Z)(e,$,i);return(0,r.Z)({},i,s)})(w);return(0,Z.jsx)(C,(0,r.Z)({disabled:u||h,id:x,ref:t},p,{variant:m,classes:S,ownerState:w,children:"end"===w.loadingPosition?(0,Z.jsxs)(e.Fragment,{children:[d,h&&(0,Z.jsx)(R,{className:S.loadingIndicator,ownerState:w,children:b})]}):(0,Z.jsxs)(e.Fragment,{children:[h&&(0,Z.jsx)(R,{className:S.loadingIndicator,ownerState:w,children:b}),d]})}))}))},53184:function(n,t,o){"use strict";o.d(t,{Z:function(){return p}});var i=o(87462),r=o(63366),e=o(67294),a=o(93680),s=o(94780),l=o(44063),d=o(71657),c=o(90948),u=o(34867);function v(n){return(0,u.Z)("MuiTableHead",n)}(0,o(1588).Z)("MuiTableHead",["root"]);var h=o(85893);const g=["className","component"],f=(0,c.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(n,t)=>t.root})({display:"table-header-group"}),m={variant:"head"},Z="thead";var p=e.forwardRef((function(n,t){const o=(0,d.Z)({props:n,name:"MuiTableHead"}),{className:e,component:c=Z}=o,u=(0,r.Z)(o,g),p=(0,i.Z)({},o,{component:c}),x=(n=>{const{classes:t}=n;return(0,s.Z)({root:["root"]},v,t)})(p);return(0,h.jsx)(l.Z.Provider,{value:m,children:(0,h.jsx)(f,(0,i.Z)({as:c,className:(0,a.Z)(x.root,e),ref:t,role:c===Z?null:"rowgroup",ownerState:p},u))})}))},27909:function(n,t,o){"use strict";var i=o(92996);t.Z=i.Z},92996:function(n,t,o){"use strict";var i;o.d(t,{Z:function(){return s}});var r=o(67294);let e=0;const a=(i||(i=o.t(r,2)))["useId".toString()];function s(n){if(void 0!==a){const t=a();return null!=n?n:t}return function(n){const[t,o]=r.useState(n),i=n||t;return r.useEffect((()=>{null==t&&(e+=1,o(`mui-${e}`))}),[t]),i}(n)}},56540:function(n,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/agency-income/components/customTable",function(){return o(27603)}])},27603:function(n,t,o){"use strict";o.r(t);var i=o(85893),r=(o(67294),o(8987)),e=o(41664),a=o.n(e),s=o(86501),l=o(7906),d=o(53184),c=o(53816),u=o(53252),v=o(295),h=o(15861),g=o(37887),f=o(4749);t.default=function(n){n.projectName;var t=n.data,o=n.walletTransferShowButton,e=n.isLoading,m=n.isDisable,Z=n.handleTransferToWallet,p=(0,g.a)(f.LS);return(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(d.Z,{children:(0,i.jsxs)(c.Z,{children:[(0,i.jsx)(u.Z,{children:"S.No."}),o&&(0,i.jsx)(u.Z,{children:"Transfer To Wallet"}),(0,i.jsx)(u.Z,{children:"Name"}),(0,i.jsx)(u.Z,{children:"PWID"}),(0,i.jsx)(u.Z,{children:"KYC Status"}),(0,i.jsx)(u.Z,{children:"Membership"}),(0,i.jsx)(u.Z,{children:"Invest Amount"})]})}),(0,i.jsxs)(v.Z,{children:[t.map((function(n,t){var l,d,v,g,f,x,b,w,S,j;return(0,i.jsxs)(c.Z,{hover:!0,sx:{cursor:"pointer"},children:[(0,i.jsx)(u.Z,{children:(0,i.jsx)(h.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,align:"center",noWrap:!0,width:30,children:t+1})}),o&&(0,i.jsx)(u.Z,{children:(0,i.jsx)(r.Z,{loading:e[n.id],variant:"contained",sx:{fontSize:12,cursor:"unset",padding:1,minWidth:200},disabled:m[n.id]||(null===(l=p.data)||void 0===l?void 0:l.getAllProjectReferral.find((function(t){return t.documentId===n.id}))),onClick:function(){var t;return Z(n,null===n||void 0===n||null===(t=n.user)||void 0===t?void 0:t.id,"project")},children:"Transfer Amount To Wallet"})}),(0,i.jsx)(u.Z,{children:(0,i.jsx)(h.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:"NULL"===(null===n||void 0===n||null===(d=n.user)||void 0===d?void 0:d.name)?null:null===n||void 0===n||null===(v=n.user)||void 0===v?void 0:v.name})}),(0,i.jsx)(a(),{href:"",scroll:!1,children:(0,i.jsx)(u.Z,{align:"left",onClick:function(){s.Am.success("PWID ".concat(n.user.pw_id," Copied")),navigator.clipboard.writeText(n.user.pw_id)},children:(0,i.jsx)(h.Z,{variant:"body1",width:"100px",fontWeight:"bold",color:"text.primary",noWrap:!0,children:"NULL"===(null===n||void 0===n||null===(g=n.user)||void 0===g?void 0:g.pw_id)?null:null===n||void 0===n||null===(f=n.user)||void 0===f?void 0:f.pw_id})})}),(0,i.jsx)(u.Z,{children:(0,i.jsx)(h.Z,{style:{color:"APPROVED"===(null===n||void 0===n||null===(x=n.user)||void 0===x?void 0:x.kyc)?"limegreen":"REJECTED"===(null===n||void 0===n||null===(b=n.user)||void 0===b?void 0:b.kyc)?"red":"ONGOING"===(null===n||void 0===n||null===(w=n.user)||void 0===w?void 0:w.kyc)?"orange":"white"},variant:"body1",fontWeight:"bold",width:"100px",color:"text.success",gutterBottom:!0,noWrap:!0,children:null===n||void 0===n||null===(S=n.user)||void 0===S?void 0:S.kyc})}),(0,i.jsx)(u.Z,{align:"left",children:(0,i.jsx)(h.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,width:"80px",noWrap:!0,children:null===n||void 0===n||null===(j=n.user)||void 0===j?void 0:j.membership})}),(0,i.jsx)(u.Z,{align:"center",children:(0,i.jsx)(h.Z,{variant:"body1",fontWeight:"bold",width:"100px",color:"text.success",gutterBottom:!0,noWrap:!0,children:null===n||void 0===n?void 0:n.amount})})]},null===n||void 0===n?void 0:n.id)})),(0,i.jsx)(s.x7,{position:"bottom-center",reverseOrder:!1})]})]})}}},function(n){n.O(0,[8244,9990,9260,2453,9036,9774,2888,179],(function(){return t=56540,n(n.s=t);var t}));var t=n.O();_N_E=t}]);