(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3365],{8987:function(t,n,r){"use strict";r.d(n,{Z:function(){return W}});var a=r(63366),i=r(87462),o=r(67294),e=r(98216),s=r(27909),l=r(94780),d=r(90948),c=r(71657),u=r(11057),g=r(93680),h=r(70917),p=r(34867),v=r(1588);function m(t){return(0,p.Z)("MuiCircularProgress",t)}(0,v.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var f=r(85893);const Z=["className","color","disableShrink","size","style","thickness","value","variant"];let y,x,b,S,w=t=>t;const I=44,k=(0,h.F4)(y||(y=w`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),P=(0,h.F4)(x||(x=w`
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
`)),L=(0,d.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:r}=t;return[n.root,n[r.variant],n[`color${(0,e.Z)(r.color)}`]]}})((({ownerState:t,theme:n})=>(0,i.Z)({display:"inline-block"},"determinate"===t.variant&&{transition:n.transitions.create("transform")},"inherit"!==t.color&&{color:(n.vars||n).palette[t.color].main})),(({ownerState:t})=>"indeterminate"===t.variant&&(0,h.iv)(b||(b=w`
      animation: ${0} 1.4s linear infinite;
    `),k))),$=(0,d.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(t,n)=>n.svg})({display:"block"}),j=(0,d.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(t,n)=>{const{ownerState:r}=t;return[n.circle,n[`circle${(0,e.Z)(r.variant)}`],r.disableShrink&&n.circleDisableShrink]}})((({ownerState:t,theme:n})=>(0,i.Z)({stroke:"currentColor"},"determinate"===t.variant&&{transition:n.transitions.create("stroke-dashoffset")},"indeterminate"===t.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:t})=>"indeterminate"===t.variant&&!t.disableShrink&&(0,h.iv)(S||(S=w`
      animation: ${0} 1.4s ease-in-out infinite;
    `),P)));var M=o.forwardRef((function(t,n){const r=(0,c.Z)({props:t,name:"MuiCircularProgress"}),{className:o,color:s="primary",disableShrink:d=!1,size:u=40,style:h,thickness:p=3.6,value:v=0,variant:y="indeterminate"}=r,x=(0,a.Z)(r,Z),b=(0,i.Z)({},r,{color:s,disableShrink:d,size:u,thickness:p,value:v,variant:y}),S=(t=>{const{classes:n,variant:r,color:a,disableShrink:i}=t,o={root:["root",r,`color${(0,e.Z)(a)}`],svg:["svg"],circle:["circle",`circle${(0,e.Z)(r)}`,i&&"circleDisableShrink"]};return(0,l.Z)(o,m,n)})(b),w={},k={},P={};if("determinate"===y){const t=2*Math.PI*((I-p)/2);w.strokeDasharray=t.toFixed(3),P["aria-valuenow"]=Math.round(v),w.strokeDashoffset=`${((100-v)/100*t).toFixed(3)}px`,k.transform="rotate(-90deg)"}return(0,f.jsx)(L,(0,i.Z)({className:(0,g.Z)(S.root,o),style:(0,i.Z)({width:u,height:u},k,h),ownerState:b,ref:n,role:"progressbar"},P,x,{children:(0,f.jsx)($,{className:S.svg,ownerState:b,viewBox:"22 22 44 44",children:(0,f.jsx)(j,{className:S.circle,style:w,ownerState:b,cx:I,cy:I,r:(I-p)/2,fill:"none",strokeWidth:p})})}))}));function B(t){return(0,p.Z)("MuiLoadingButton",t)}var C=(0,v.Z)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]);const E=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],N=(0,d.ZP)(u.Z,{shouldForwardProp:t=>(t=>"ownerState"!==t&&"theme"!==t&&"sx"!==t&&"as"!==t&&"classes"!==t)(t)||"classes"===t,name:"MuiLoadingButton",slot:"Root",overridesResolver:(t,n)=>[n.root,n.startIconLoadingStart&&{[`& .${C.startIconLoadingStart}`]:n.startIconLoadingStart},n.endIconLoadingEnd&&{[`& .${C.endIconLoadingEnd}`]:n.endIconLoadingEnd}]})((({ownerState:t,theme:n})=>(0,i.Z)({[`& .${C.startIconLoadingStart}, & .${C.endIconLoadingEnd}`]:{transition:n.transitions.create(["opacity"],{duration:n.transitions.duration.short}),opacity:0}},"center"===t.loadingPosition&&{transition:n.transitions.create(["background-color","box-shadow","border-color"],{duration:n.transitions.duration.short}),[`&.${C.loading}`]:{color:"transparent"}},"start"===t.loadingPosition&&t.fullWidth&&{[`& .${C.startIconLoadingStart}, & .${C.endIconLoadingEnd}`]:{transition:n.transitions.create(["opacity"],{duration:n.transitions.duration.short}),opacity:0,marginRight:-8}},"end"===t.loadingPosition&&t.fullWidth&&{[`& .${C.startIconLoadingStart}, & .${C.endIconLoadingEnd}`]:{transition:n.transitions.create(["opacity"],{duration:n.transitions.duration.short}),opacity:0,marginLeft:-8}}))),R=(0,d.ZP)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(t,n)=>{const{ownerState:r}=t;return[n.loadingIndicator,n[`loadingIndicator${(0,e.Z)(r.loadingPosition)}`]]}})((({theme:t,ownerState:n})=>(0,i.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===n.loadingPosition&&("outlined"===n.variant||"contained"===n.variant)&&{left:"small"===n.size?10:14},"start"===n.loadingPosition&&"text"===n.variant&&{left:6},"center"===n.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:t.palette.action.disabled},"end"===n.loadingPosition&&("outlined"===n.variant||"contained"===n.variant)&&{right:"small"===n.size?10:14},"end"===n.loadingPosition&&"text"===n.variant&&{right:6},"start"===n.loadingPosition&&n.fullWidth&&{position:"relative",left:-10},"end"===n.loadingPosition&&n.fullWidth&&{position:"relative",right:-10})));var W=o.forwardRef((function(t,n){const r=(0,c.Z)({props:t,name:"MuiLoadingButton"}),{children:d,disabled:u=!1,id:g,loading:h=!1,loadingIndicator:p,loadingPosition:v="center",variant:m="text"}=r,Z=(0,a.Z)(r,E),y=(0,s.Z)(g),x=null!=p?p:(0,f.jsx)(M,{"aria-labelledby":y,color:"inherit",size:16}),b=(0,i.Z)({},r,{disabled:u,loading:h,loadingIndicator:x,loadingPosition:v,variant:m}),S=(t=>{const{loading:n,loadingPosition:r,classes:a}=t,o={root:["root",n&&"loading"],startIcon:[n&&`startIconLoading${(0,e.Z)(r)}`],endIcon:[n&&`endIconLoading${(0,e.Z)(r)}`],loadingIndicator:["loadingIndicator",n&&`loadingIndicator${(0,e.Z)(r)}`]},s=(0,l.Z)(o,B,a);return(0,i.Z)({},a,s)})(b);return(0,f.jsx)(N,(0,i.Z)({disabled:u||h,id:y,ref:n},Z,{variant:m,classes:S,ownerState:b,children:"end"===b.loadingPosition?(0,f.jsxs)(o.Fragment,{children:[d,h&&(0,f.jsx)(R,{className:S.loadingIndicator,ownerState:b,children:x})]}):(0,f.jsxs)(o.Fragment,{children:[h&&(0,f.jsx)(R,{className:S.loadingIndicator,ownerState:b,children:x}),d]})}))}))},15861:function(t,n,r){"use strict";r.d(n,{Z:function(){return y}});var a=r(63366),i=r(87462),o=r(67294),e=r(93680),s=r(39707),l=r(94780),d=r(90948),c=r(71657),u=r(98216),g=r(34867);function h(t){return(0,g.Z)("MuiTypography",t)}(0,r(1588).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var p=r(85893);const v=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],m=(0,d.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:r}=t;return[n.root,r.variant&&n[r.variant],"inherit"!==r.align&&n[`align${(0,u.Z)(r.align)}`],r.noWrap&&n.noWrap,r.gutterBottom&&n.gutterBottom,r.paragraph&&n.paragraph]}})((({theme:t,ownerState:n})=>(0,i.Z)({margin:0},n.variant&&t.typography[n.variant],"inherit"!==n.align&&{textAlign:n.align},n.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n.gutterBottom&&{marginBottom:"0.35em"},n.paragraph&&{marginBottom:16}))),f={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var y=o.forwardRef((function(t,n){const r=(0,c.Z)({props:t,name:"MuiTypography"}),o=(t=>Z[t]||t)(r.color),d=(0,s.Z)((0,i.Z)({},r,{color:o})),{align:g="inherit",className:y,component:x,gutterBottom:b=!1,noWrap:S=!1,paragraph:w=!1,variant:I="body1",variantMapping:k=f}=d,P=(0,a.Z)(d,v),L=(0,i.Z)({},d,{align:g,color:o,className:y,component:x,gutterBottom:b,noWrap:S,paragraph:w,variant:I,variantMapping:k}),$=x||(w?"p":k[I]||f[I])||"span",j=(t=>{const{align:n,gutterBottom:r,noWrap:a,paragraph:i,variant:o,classes:e}=t,s={root:["root",o,"inherit"!==t.align&&`align${(0,u.Z)(n)}`,r&&"gutterBottom",a&&"noWrap",i&&"paragraph"]};return(0,l.Z)(s,h,e)})(L);return(0,p.jsx)(m,(0,i.Z)({as:$,ref:n,ownerState:L,className:(0,e.Z)(j.root,y)},P))}))},27909:function(t,n,r){"use strict";var a=r(92996);n.Z=a.Z},92996:function(t,n,r){"use strict";var a;r.d(n,{Z:function(){return s}});var i=r(67294);let o=0;const e=(a||(a=r.t(i,2)))["useId".toString()];function s(t){if(void 0!==e){const n=e();return null!=t?t:n}return function(t){const[n,r]=i.useState(t),a=t||n;return i.useEffect((()=>{null==n&&(o+=1,r(`mui-${o}`))}),[n]),a}(t)}},94695:function(t,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/delete",function(){return r(9543)}])},9543:function(t,n,r){"use strict";r.r(n);var a=r(47568),i=r(97582),o=r(85893),e=r(89448),s=r(8987),l=r(50657),d=r(37645),c=r(6514),u=r(58951),g=r(31425),h=r(11057),p=r(11163),v=r(67294),m=r(9473);n.default=function(){(0,p.useRouter)();var t=(0,m.I0)(),n=(0,v.useState)(!1),r=n[0],f=n[1],Z=function(){f(!1)},y=function(){var n=(0,a.Z)((function(){return(0,i.__generator)(this,(function(n){return t((0,e.kS)()),[2]}))}));return function(){return n.apply(this,arguments)}}();return(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:[(0,o.jsx)(s.Z,{onClick:function(){f(!0)},variant:"contained",children:"Delete Account"}),(0,o.jsx)("div",{children:(0,o.jsxs)(l.Z,{open:r,onClose:Z,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,o.jsx)(d.Z,{id:"alert-dialog-title",children:"Delete Account Forever?"}),(0,o.jsx)(c.Z,{children:(0,o.jsxs)(u.Z,{id:"alert-dialog-description",children:["You won't be able to recover this account.",(0,o.jsx)("br",{}),"Account will be deleted in 15 Days"]})}),(0,o.jsxs)(g.Z,{children:[(0,o.jsx)(h.Z,{onClick:Z,children:"Dismiss"}),(0,o.jsx)(h.Z,{onClick:y,autoFocus:!0,children:"DELETE"})]})]})})]})}}},function(t){t.O(0,[8244,9990,2817,630,9964,3864,9774,2888,179],(function(){return n=94695,t(t.s=n);var n}));var n=t.O();_N_E=n}]);