(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4414],{50657:function(r,e,a){"use strict";a.d(e,{Z:function(){return P}});var t=a(63366),o=a(87462),n=a(67294),i=a(93680),l=a(94780),p=a(92996),s=a(98216),c=a(99964),d=a(16628),u=a(55113),h=a(71657),m=a(90948),g=a(34867);function x(r){return(0,g.Z)("MuiDialog",r)}var Z=(0,a(1588).Z)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),f=a(34182),v=a(84808),b=a(2734),y=a(85893);const W=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],w=(0,m.ZP)(v.Z,{name:"MuiDialog",slot:"Backdrop",overrides:(r,e)=>e.backdrop})({zIndex:-1}),S=(0,m.ZP)(c.Z,{name:"MuiDialog",slot:"Root",overridesResolver:(r,e)=>e.root})({"@media print":{position:"absolute !important"}}),k=(0,m.ZP)("div",{name:"MuiDialog",slot:"Container",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.container,e[`scroll${(0,s.Z)(a.scroll)}`]]}})((({ownerState:r})=>(0,o.Z)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===r.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===r.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}}))),B=(0,m.ZP)(u.Z,{name:"MuiDialog",slot:"Paper",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.paper,e[`scrollPaper${(0,s.Z)(a.scroll)}`],e[`paperWidth${(0,s.Z)(String(a.maxWidth))}`],a.fullWidth&&e.paperFullWidth,a.fullScreen&&e.paperFullScreen]}})((({theme:r,ownerState:e})=>(0,o.Z)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===e.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===e.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!e.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===e.maxWidth&&{maxWidth:"px"===r.breakpoints.unit?Math.max(r.breakpoints.values.xs,444):`${r.breakpoints.values.xs}${r.breakpoints.unit}`,[`&.${Z.paperScrollBody}`]:{[r.breakpoints.down(Math.max(r.breakpoints.values.xs,444)+64)]:{maxWidth:"calc(100% - 64px)"}}},"xs"!==e.maxWidth&&{maxWidth:`${r.breakpoints.values[e.maxWidth]}${r.breakpoints.unit}`,[`&.${Z.paperScrollBody}`]:{[r.breakpoints.down(r.breakpoints.values[e.maxWidth]+64)]:{maxWidth:"calc(100% - 64px)"}}},e.fullWidth&&{width:"calc(100% - 64px)"},e.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${Z.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})));var P=n.forwardRef((function(r,e){const a=(0,h.Z)({props:r,name:"MuiDialog"}),c=(0,b.Z)(),m={enter:c.transitions.duration.enteringScreen,exit:c.transitions.duration.leavingScreen},{"aria-describedby":g,"aria-labelledby":Z,BackdropComponent:v,BackdropProps:P,children:C,className:M,disableEscapeKeyDown:D=!1,fullScreen:N=!1,fullWidth:$=!1,maxWidth:T="sm",onBackdropClick:_,onClose:R,open:E,PaperComponent:j=u.Z,PaperProps:F={},scroll:A="paper",TransitionComponent:X=d.Z,transitionDuration:K=m,TransitionProps:I}=a,L=(0,t.Z)(a,W),O=(0,o.Z)({},a,{disableEscapeKeyDown:D,fullScreen:N,fullWidth:$,maxWidth:T,scroll:A}),Y=(r=>{const{classes:e,scroll:a,maxWidth:t,fullWidth:o,fullScreen:n}=r,i={root:["root"],container:["container",`scroll${(0,s.Z)(a)}`],paper:["paper",`paperScroll${(0,s.Z)(a)}`,`paperWidth${(0,s.Z)(String(t))}`,o&&"paperFullWidth",n&&"paperFullScreen"]};return(0,l.Z)(i,x,e)})(O),H=n.useRef(),z=(0,p.Z)(Z),J=n.useMemo((()=>({titleId:z})),[z]);return(0,y.jsx)(S,(0,o.Z)({className:(0,i.Z)(Y.root,M),BackdropProps:(0,o.Z)({transitionDuration:K,as:v},P),closeAfterTransition:!0,BackdropComponent:w,disableEscapeKeyDown:D,onClose:R,open:E,ref:e,onClick:r=>{H.current&&(H.current=null,_&&_(r),R&&R(r,"backdropClick"))},ownerState:O},L,{children:(0,y.jsx)(X,(0,o.Z)({appear:!0,in:E,timeout:K,role:"presentation"},I,{children:(0,y.jsx)(k,{className:(0,i.Z)(Y.container),onMouseDown:r=>{H.current=r.target===r.currentTarget},ownerState:O,children:(0,y.jsx)(B,(0,o.Z)({as:j,elevation:24,role:"dialog","aria-describedby":g,"aria-labelledby":z},F,{className:(0,i.Z)(Y.paper,F.className),ownerState:O,children:(0,y.jsx)(f.Z.Provider,{value:J,children:C})}))})}))}))}))},34182:function(r,e,a){"use strict";const t=(0,a(67294).createContext)({});e.Z=t},15861:function(r,e,a){"use strict";a.d(e,{Z:function(){return v}});var t=a(63366),o=a(87462),n=a(67294),i=a(93680),l=a(39707),p=a(94780),s=a(90948),c=a(71657),d=a(98216),u=a(34867);function h(r){return(0,u.Z)("MuiTypography",r)}(0,a(1588).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var m=a(85893);const g=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],x=(0,s.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.root,a.variant&&e[a.variant],"inherit"!==a.align&&e[`align${(0,d.Z)(a.align)}`],a.noWrap&&e.noWrap,a.gutterBottom&&e.gutterBottom,a.paragraph&&e.paragraph]}})((({theme:r,ownerState:e})=>(0,o.Z)({margin:0},e.variant&&r.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16}))),Z={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},f={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var v=n.forwardRef((function(r,e){const a=(0,c.Z)({props:r,name:"MuiTypography"}),n=(r=>f[r]||r)(a.color),s=(0,l.Z)((0,o.Z)({},a,{color:n})),{align:u="inherit",className:v,component:b,gutterBottom:y=!1,noWrap:W=!1,paragraph:w=!1,variant:S="body1",variantMapping:k=Z}=s,B=(0,t.Z)(s,g),P=(0,o.Z)({},s,{align:u,color:n,className:v,component:b,gutterBottom:y,noWrap:W,paragraph:w,variant:S,variantMapping:k}),C=b||(w?"p":k[S]||Z[S])||"span",M=(r=>{const{align:e,gutterBottom:a,noWrap:t,paragraph:o,variant:n,classes:i}=r,l={root:["root",n,"inherit"!==r.align&&`align${(0,d.Z)(e)}`,a&&"gutterBottom",t&&"noWrap",o&&"paragraph"]};return(0,p.Z)(l,h,i)})(P);return(0,m.jsx)(x,(0,o.Z)({as:C,ref:e,ownerState:P,className:(0,i.Z)(M.root,v)},B))}))},63630:function(r,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/login/components/LoginCard",function(){return a(45297)}])}},function(r){r.O(0,[8244,9990,9260,9213,4753,6827,6549,7058,788,8292,8584,8764,1959,4268,5297,9774,2888,179],(function(){return e=63630,r(r.s=e);var e}));var e=r.O();_N_E=e}]);