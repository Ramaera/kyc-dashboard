(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4139],{66242:function(r,t,e){"use strict";e.d(t,{Z:function(){return m}});var n=e(87462),a=e(63366),o=e(67294),i=e(93680),s=e(94780),c=e(90948),u=e(71657),p=e(55113),l=e(34867);function h(r){return(0,l.Z)("MuiCard",r)}(0,e(1588).Z)("MuiCard",["root"]);var d=e(85893);const f=["className","raised"],g=(0,c.ZP)(p.Z,{name:"MuiCard",slot:"Root",overridesResolver:(r,t)=>t.root})((()=>({overflow:"hidden"})));var m=o.forwardRef((function(r,t){const e=(0,u.Z)({props:r,name:"MuiCard"}),{className:o,raised:c=!1}=e,p=(0,a.Z)(e,f),l=(0,n.Z)({},e,{raised:c}),m=(r=>{const{classes:t}=r;return(0,s.Z)({root:["root"]},h,t)})(l);return(0,d.jsx)(g,(0,n.Z)({className:(0,i.Z)(m.root,o),elevation:c?8:void 0,ref:t,ownerState:l},p))}))},15861:function(r,t,e){"use strict";e.d(t,{Z:function(){return x}});var n=e(63366),a=e(87462),o=e(67294),i=e(93680),s=e(39707),c=e(94780),u=e(90948),p=e(71657),l=e(98216),h=e(34867);function d(r){return(0,h.Z)("MuiTypography",r)}(0,e(1588).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var f=e(85893);const g=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],m=(0,u.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(r,t)=>{const{ownerState:e}=r;return[t.root,e.variant&&t[e.variant],"inherit"!==e.align&&t[`align${(0,l.Z)(e.align)}`],e.noWrap&&t.noWrap,e.gutterBottom&&t.gutterBottom,e.paragraph&&t.paragraph]}})((({theme:r,ownerState:t})=>(0,a.Z)({margin:0},t.variant&&r.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),v={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var x=o.forwardRef((function(r,t){const e=(0,p.Z)({props:r,name:"MuiTypography"}),o=(r=>Z[r]||r)(e.color),u=(0,s.Z)((0,a.Z)({},e,{color:o})),{align:h="inherit",className:x,component:y,gutterBottom:j=!1,noWrap:_=!1,paragraph:w=!1,variant:b="body1",variantMapping:N=v}=u,B=(0,n.Z)(u,g),C=(0,a.Z)({},u,{align:h,color:o,className:x,component:y,gutterBottom:j,noWrap:_,paragraph:w,variant:b,variantMapping:N}),M=y||(w?"p":N[b]||v[b])||"span",P=(r=>{const{align:t,gutterBottom:e,noWrap:n,paragraph:a,variant:o,classes:i}=r,s={root:["root",o,"inherit"!==r.align&&`align${(0,l.Z)(t)}`,e&&"gutterBottom",n&&"noWrap",a&&"paragraph"]};return(0,c.Z)(s,d,i)})(C);return(0,f.jsx)(m,(0,a.Z)({as:M,ref:t,ownerState:C,className:(0,i.Z)(P.root,x)},B))}))},43408:function(r,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project-operation-report",function(){return e(81981)}])},43725:function(r,t,e){"use strict";e.r(t);var n=e(85893);t.default=function(r){var t=r.children;return(0,n.jsx)(n.Fragment,{children:t})}},34163:function(r,t,e){"use strict";e.r(t);var n=e(47568),a=e(97582),o=e(85893),i=e(2734),s=e(66242),c=e(87357),u=e(67720),p=e(67294);t.default=function(){(0,i.Z)();var r=(0,p.useState)(null);r[0],r[1];return(0,p.useEffect)((function(){var r=function(){var r=(0,n.Z)((function(){var r,t;return(0,a.__generator)(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,fetch("https://erp.ramaera.com/api/method/frappe.charts.api.get",{headers:{Authorization:"token 602ac7d2d573f32:6acaed00eb0733d"},params:{chart_name:"Purchase Order Trends",filters:{doc_type:"Purchase Order",date_field:"creation_date",group_by:"supplier",aggregation:"count",range:"Year",from_date:"2023-01-01",to_date:"2024-01-31"}}})];case 1:return r=e.sent(),console.log("--\x3e>",r),[3,3];case 2:return t=e.sent(),console.error("Error fetching data:",t),[3,3];case 3:return[2]}}))}));return function(){return r.apply(this,arguments)}}();r()}),[]),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(s.Z,{children:[(0,o.jsxs)(c.Z,{sx:{display:"flex",justifyContent:"center",fontSize:28,mt:2,color:"#776AD0"},children:["Project Operations Report"," "]}),(0,o.jsx)(c.Z,{sx:{height:"300px",fontSize:"40px",display:"flex",justifyContent:"center"},children:"Coming Soon"}),(0,o.jsx)(u.Z,{})]})})}},81981:function(r,t,e){"use strict";e.r(t);var n=e(85893),a=e(91875),o=e(9395),i=e(9008),s=e.n(i),c=e(43725),u=e(34163);function p(){return(0,n.jsxs)(c.default,{children:[(0,n.jsx)(s(),{children:(0,n.jsx)("title",{children:"Project Operation Report "})}),(0,n.jsx)(u.default,{}),(0,n.jsx)(a.Z,{})]})}p.getLayout=function(r){return(0,n.jsx)(o.Z,{children:r})},t.default=p},91875:function(r,t,e){"use strict";var n=e(85893),a=e(90948),o=e(53156),i=e(87357),s=e(15861),c=(0,a.ZP)(o.Z)((function(r){var t=r.theme;return"\n        margin-top: ".concat(t.spacing(4),";\n")}));t.Z=function(){return(0,n.jsx)(c,{className:"footer-wrapper",children:(0,n.jsxs)(i.Z,{pb:4,display:{xs:"block",md:"flex"},alignItems:"center",textAlign:{xs:"center",md:"left"},justifyContent:"space-between",children:[(0,n.jsx)(i.Z,{}),(0,n.jsx)(s.Z,{sx:{pt:{xs:2,md:0}},variant:"subtitle1"})]})})}}},function(r){r.O(0,[1385,400,9260,9213,4753,6827,6549,1664,8415,5571,7924,886,9395,9774,2888,179],(function(){return t=43408,r(r.s=t);var t}));var t=r.O();_N_E=t}]);