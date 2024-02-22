(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6316],{47017:function(e,t,a){"use strict";var r=a(64836);t.Z=void 0;var n=r(a(64938)),o=a(85893),i=(0,n.default)((0,o.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"AddTwoTone");t.Z=i},66242:function(e,t,a){"use strict";a.d(t,{Z:function(){return Z}});var r=a(87462),n=a(63366),o=a(67294),i=a(93680),s=a(94780),c=a(90948),l=a(71657),d=a(55113),u=a(34867);function p(e){return(0,u.Z)("MuiCard",e)}(0,a(1588).Z)("MuiCard",["root"]);var h=a(85893);const m=["className","raised"],v=(0,c.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"})));var Z=o.forwardRef((function(e,t){const a=(0,l.Z)({props:e,name:"MuiCard"}),{className:o,raised:c=!1}=a,d=(0,n.Z)(a,m),u=(0,r.Z)({},a,{raised:c}),Z=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},p,t)})(u);return(0,h.jsx)(v,(0,r.Z)({className:(0,i.Z)(Z.root,o),elevation:c?8:void 0,ref:t,ownerState:u},d))}))},78445:function(e,t,a){"use strict";a.d(t,{Z:function(){return y}});var r=a(63366),n=a(87462),o=a(67294),i=a(93680),s=a(94780),c=a(15861),l=a(71657),d=a(90948),u=a(34867);function p(e){return(0,u.Z)("MuiCardHeader",e)}var h=(0,a(1588).Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),m=a(85893);const v=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],Z=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,n.Z)({[`& .${h.title}`]:t.title,[`& .${h.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),g=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),f=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),x=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"});var y=o.forwardRef((function(e,t){const a=(0,l.Z)({props:e,name:"MuiCardHeader"}),{action:o,avatar:d,className:u,component:h="div",disableTypography:y=!1,subheader:b,subheaderTypographyProps:j,title:w,titleTypographyProps:T}=a,C=(0,r.Z)(a,v),N=(0,n.Z)({},a,{component:h,disableTypography:y}),P=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},p,t)})(N);let M=w;null==M||M.type===c.Z||y||(M=(0,m.jsx)(c.Z,(0,n.Z)({variant:d?"body2":"h5",className:P.title,component:"span",display:"block"},T,{children:M})));let _=b;return null==_||_.type===c.Z||y||(_=(0,m.jsx)(c.Z,(0,n.Z)({variant:d?"body2":"body1",className:P.subheader,color:"text.secondary",component:"span",display:"block"},j,{children:_}))),(0,m.jsxs)(Z,(0,n.Z)({className:(0,i.Z)(P.root,u),as:h,ref:t,ownerState:N},C,{children:[d&&(0,m.jsx)(g,{className:P.avatar,ownerState:N,children:d}),(0,m.jsxs)(x,{className:P.content,ownerState:N,children:[M,_]}),o&&(0,m.jsx)(f,{className:P.action,ownerState:N,children:o})]}))}))},15861:function(e,t,a){"use strict";a.d(t,{Z:function(){return x}});var r=a(63366),n=a(87462),o=a(67294),i=a(93680),s=a(39707),c=a(94780),l=a(90948),d=a(71657),u=a(98216),p=a(34867);function h(e){return(0,p.Z)("MuiTypography",e)}(0,a(1588).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var m=a(85893);const v=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],Z=(0,l.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.variant&&t[a.variant],"inherit"!==a.align&&t[`align${(0,u.Z)(a.align)}`],a.noWrap&&t.noWrap,a.gutterBottom&&t.gutterBottom,a.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,n.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),g={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},f={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var x=o.forwardRef((function(e,t){const a=(0,d.Z)({props:e,name:"MuiTypography"}),o=(e=>f[e]||e)(a.color),l=(0,s.Z)((0,n.Z)({},a,{color:o})),{align:p="inherit",className:x,component:y,gutterBottom:b=!1,noWrap:j=!1,paragraph:w=!1,variant:T="body1",variantMapping:C=g}=l,N=(0,r.Z)(l,v),P=(0,n.Z)({},l,{align:p,color:o,className:x,component:y,gutterBottom:b,noWrap:j,paragraph:w,variant:T,variantMapping:C}),M=y||(w?"p":C[T]||g[T])||"span",_=(e=>{const{align:t,gutterBottom:a,noWrap:r,paragraph:n,variant:o,classes:i}=e,s={root:["root",o,"inherit"!==e.align&&`align${(0,u.Z)(t)}`,a&&"gutterBottom",r&&"noWrap",n&&"paragraph"]};return(0,c.Z)(s,h,i)})(P);return(0,m.jsx)(Z,(0,n.Z)({as:M,ref:t,ownerState:P,className:(0,i.Z)(_.root,x)},N))}))},38130:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/tabs",function(){return a(46678)}])},46678:function(e,t,a){"use strict";a.r(t);var r=a(26042),n=a(69396),o=a(99534),i=a(85893),s=a(9008),c=a.n(s),l=a(9395),d=a(10138),u=a(37652),p=a(53156),h=a(86886),m=a(66242),v=a(78445),Z=a(67720),g=a(44267),f=a(67294),x=a(88409),y=a(40044),b=a(15861),j=a(87357),w=a(91875);function T(e){var t=e.children,a=e.value,s=e.index,c=(0,o.Z)(e,["children","value","index"]);return(0,i.jsx)("div",(0,n.Z)((0,r.Z)({role:"tabpanel",hidden:a!==s,id:"simple-tabpanel-".concat(s),"aria-labelledby":"simple-tab-".concat(s)},c),{children:a===s&&(0,i.jsx)(j.Z,{sx:{p:3},children:(0,i.jsx)(b.Z,{children:t})})}))}function C(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}function N(){var e=(0,f.useState)(0),t=e[0],a=e[1];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c(),{children:(0,i.jsx)("title",{children:"Tabs - Components"})}),(0,i.jsx)(u.Z,{children:(0,i.jsx)(d.Z,{heading:"Tabs",subHeading:"Tabs make it easy to explore and switch between different views.",docs:"https://material-ui.com/components/tabs/"})}),(0,i.jsx)(p.Z,{maxWidth:!1,children:(0,i.jsx)(h.ZP,{container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",spacing:3,children:(0,i.jsx)(h.ZP,{item:!0,xs:12,children:(0,i.jsxs)(m.Z,{children:[(0,i.jsx)(v.Z,{title:"Basic Example"}),(0,i.jsx)(Z.Z,{}),(0,i.jsx)(g.Z,{children:(0,i.jsxs)(j.Z,{sx:{width:"100%"},children:[(0,i.jsxs)(x.Z,{variant:"scrollable",scrollButtons:"auto",textColor:"primary",indicatorColor:"primary",value:t,onChange:function(e,t){a(t)},"aria-label":"basic tabs example",children:[(0,i.jsx)(y.Z,(0,r.Z)({label:"Item One"},C(0))),(0,i.jsx)(y.Z,(0,r.Z)({label:"Item Two"},C(1))),(0,i.jsx)(y.Z,(0,r.Z)({label:"Item Three"},C(2)))]}),(0,i.jsx)(T,{value:t,index:0,children:"Item One"}),(0,i.jsx)(T,{value:t,index:1,children:"Item Two"}),(0,i.jsx)(T,{value:t,index:2,children:"Item Three"})]})})]})})})}),(0,i.jsx)(w.Z,{})]})}N.getLayout=function(e){return(0,i.jsx)(l.Z,{children:e})},t.default=N},91875:function(e,t,a){"use strict";var r=a(85893),n=a(90948),o=a(53156),i=a(87357),s=a(15861),c=(0,n.ZP)(o.Z)((function(e){var t=e.theme;return"\n        margin-top: ".concat(t.spacing(4),";\n")}));t.Z=function(){return(0,r.jsx)(c,{className:"footer-wrapper",children:(0,r.jsxs)(i.Z,{pb:4,display:{xs:"block",md:"flex"},alignItems:"center",textAlign:{xs:"center",md:"left"},justifyContent:"space-between",children:[(0,r.jsx)(i.Z,{}),(0,r.jsx)(s.Z,{sx:{pt:{xs:2,md:0}},variant:"subtitle1"})]})})}},10138:function(e,t,a){"use strict";var r=a(26042),n=a(69396),o=a(99534),i=a(85893),s=a(45697),c=a.n(s),l=a(47017),d=a(86886),u=a(15861),p=a(11057),h=function(e){var t=e.heading,a=void 0===t?"":t,s=e.subHeading,c=void 0===s?"":s,h=e.docs,m=void 0===h?"":h,v=(0,o.Z)(e,["heading","subHeading","docs"]);return(0,i.jsxs)(d.ZP,(0,n.Z)((0,r.Z)({container:!0,justifyContent:"space-between",alignItems:"center"},v),{children:[(0,i.jsxs)(d.ZP,{item:!0,children:[(0,i.jsx)(u.Z,{variant:"h3",component:"h3",gutterBottom:!0,children:a}),(0,i.jsx)(u.Z,{variant:"subtitle2",children:c})]}),(0,i.jsx)(d.ZP,{item:!0,children:(0,i.jsxs)(p.Z,{href:m,target:"_blank",rel:"noopener noreferrer",sx:{mt:{xs:2,md:0}},variant:"contained",startIcon:(0,i.jsx)(l.Z,{fontSize:"small"}),children:[a," Documentation"]})})]}))};h.propTypes={heading:c().string,subHeading:c().string,docs:c().string},t.Z=h},37652:function(e,t,a){"use strict";var r=a(85893),n=a(45697),o=a.n(n),i=a(90948),s=a(87357),c=a(53156),l=(0,i.ZP)(s.Z)((function(e){var t=e.theme;return"\n        padding: ".concat(t.spacing(4),";\n")})),d=function(e){var t=e.children;return(0,r.jsx)(l,{className:"MuiPageTitle-wrapper",children:(0,r.jsx)(c.Z,{maxWidth:!1,children:t})})};d.propTypes={children:o().node.isRequired},t.Z=d},69921:function(e,t){"use strict";var a=60103,r=60106,n=60107,o=60108,i=60114,s=60109,c=60110,l=60112,d=60113,u=60120,p=60115,h=60116,m=60121,v=60122,Z=60117,g=60129,f=60131;if("function"===typeof Symbol&&Symbol.for){var x=Symbol.for;a=x("react.element"),r=x("react.portal"),n=x("react.fragment"),o=x("react.strict_mode"),i=x("react.profiler"),s=x("react.provider"),c=x("react.context"),l=x("react.forward_ref"),d=x("react.suspense"),u=x("react.suspense_list"),p=x("react.memo"),h=x("react.lazy"),m=x("react.block"),v=x("react.server.block"),Z=x("react.fundamental"),g=x("react.debug_trace_mode"),f=x("react.legacy_hidden")}function y(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case n:case i:case o:case d:case u:return e;default:switch(e=e&&e.$$typeof){case c:case l:case h:case p:case s:return e;default:return t}}case r:return t}}}},59864:function(e,t,a){"use strict";a(69921)}},function(e){e.O(0,[1385,400,9260,9213,4753,6827,6549,1664,8415,5571,7924,886,9868,6572,9395,9774,2888,179],(function(){return t=38130,e(e.s=t);var t}));var t=e.O();_N_E=t}]);