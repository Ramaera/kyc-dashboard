(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4139],{66242:function(t,r,n){"use strict";n.d(r,{Z:function(){return m}});var a=n(87462),e=n(63366),o=n(67294),i=n(93680),s=n(94780),p=n(90948),c=n(71657),u=n(55113),l=n(34867);function h(t){return(0,l.Z)("MuiCard",t)}(0,n(1588).Z)("MuiCard",["root"]);var g=n(85893);const d=["className","raised"],f=(0,p.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:(t,r)=>r.root})((()=>({overflow:"hidden"})));var m=o.forwardRef((function(t,r){const n=(0,c.Z)({props:t,name:"MuiCard"}),{className:o,raised:p=!1}=n,u=(0,e.Z)(n,d),l=(0,a.Z)({},n,{raised:p}),m=(t=>{const{classes:r}=t;return(0,s.Z)({root:["root"]},h,r)})(l);return(0,g.jsx)(f,(0,a.Z)({className:(0,i.Z)(m.root,o),elevation:p?8:void 0,ref:r,ownerState:l},u))}))},15861:function(t,r,n){"use strict";n.d(r,{Z:function(){return x}});var a=n(63366),e=n(87462),o=n(67294),i=n(93680),s=n(39707),p=n(94780),c=n(90948),u=n(71657),l=n(98216),h=n(34867);function g(t){return(0,h.Z)("MuiTypography",t)}(0,n(1588).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var d=n(85893);const f=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],m=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.root,n.variant&&r[n.variant],"inherit"!==n.align&&r[`align${(0,l.Z)(n.align)}`],n.noWrap&&r.noWrap,n.gutterBottom&&r.gutterBottom,n.paragraph&&r.paragraph]}})((({theme:t,ownerState:r})=>(0,e.Z)({margin:0},r.variant&&t.typography[r.variant],"inherit"!==r.align&&{textAlign:r.align},r.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r.gutterBottom&&{marginBottom:"0.35em"},r.paragraph&&{marginBottom:16}))),Z={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},v={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var x=o.forwardRef((function(t,r){const n=(0,u.Z)({props:t,name:"MuiTypography"}),o=(t=>v[t]||t)(n.color),c=(0,s.Z)((0,e.Z)({},n,{color:o})),{align:h="inherit",className:x,component:y,gutterBottom:j=!1,noWrap:w=!1,paragraph:b=!1,variant:N="body1",variantMapping:_=Z}=c,B=(0,a.Z)(c,f),C=(0,e.Z)({},c,{align:h,color:o,className:x,component:y,gutterBottom:j,noWrap:w,paragraph:b,variant:N,variantMapping:_}),M=y||(b?"p":_[N]||Z[N])||"span",R=(t=>{const{align:r,gutterBottom:n,noWrap:a,paragraph:e,variant:o,classes:i}=t,s={root:["root",o,"inherit"!==t.align&&`align${(0,l.Z)(r)}`,n&&"gutterBottom",a&&"noWrap",e&&"paragraph"]};return(0,p.Z)(s,g,i)})(C);return(0,d.jsx)(m,(0,e.Z)({as:M,ref:r,ownerState:C,className:(0,i.Z)(R.root,x)},B))}))},43408:function(t,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project-operation-report",function(){return n(81981)}])},43725:function(t,r,n){"use strict";n.r(r);var a=n(85893);r.default=function(t){var r=t.children;return(0,a.jsx)(a.Fragment,{children:r})}},34163:function(t,r,n){"use strict";n.r(r);var a=n(85893),e=n(2734),o=n(66242),i=n(87357),s=n(67720);r.default=function(){(0,e.Z)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(o.Z,{children:[(0,a.jsxs)(i.Z,{sx:{display:"flex",justifyContent:"center",fontSize:28,mt:2,color:"#776AD0"},children:["Project Operations Report"," "]}),(0,a.jsx)(i.Z,{sx:{height:"300px",fontSize:"40px",display:"flex",justifyContent:"center"},children:"Coming Soon"}),(0,a.jsx)(s.Z,{})]})})}},81981:function(t,r,n){"use strict";n.r(r);var a=n(85893),e=n(91875),o=n(9395),i=n(9008),s=n.n(i),p=n(43725),c=n(34163);function u(){return(0,a.jsxs)(p.default,{children:[(0,a.jsx)(s(),{children:(0,a.jsx)("title",{children:"Project Operation Report "})}),(0,a.jsx)(c.default,{}),(0,a.jsx)(e.Z,{})]})}u.getLayout=function(t){return(0,a.jsx)(o.Z,{children:t})},r.default=u},91875:function(t,r,n){"use strict";var a=n(85893),e=n(90948),o=n(53156),i=n(87357),s=n(15861),p=(0,e.ZP)(o.Z)((function(t){var r=t.theme;return"\n        margin-top: ".concat(r.spacing(4),";\n")}));r.Z=function(){return(0,a.jsx)(p,{className:"footer-wrapper",children:(0,a.jsxs)(i.Z,{pb:4,display:{xs:"block",md:"flex"},alignItems:"center",textAlign:{xs:"center",md:"left"},justifyContent:"space-between",children:[(0,a.jsx)(i.Z,{}),(0,a.jsx)(s.Z,{sx:{pt:{xs:2,md:0}},variant:"subtitle1"})]})})}}},function(t){t.O(0,[1385,400,9260,9213,4753,6827,6549,1664,8415,5571,7924,886,9395,9774,2888,179],(function(){return r=43408,t(t.s=r);var r}));var r=t.O();_N_E=r}]);