(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6190],{47017:function(e,r,t){"use strict";var s=t(64836);r.Z=void 0;var n=s(t(64938)),a=t(85893),i=(0,n.default)((0,a.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"AddTwoTone");r.Z=i},41098:function(e,r,t){"use strict";var s=t(64836);r.Z=void 0;var n=s(t(64938)),a=t(85893),i=(0,n.default)((0,a.jsx)("path",{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"}),"Assignment");r.Z=i},25512:function(e,r,t){"use strict";var s=t(64836);r.Z=void 0;var n=s(t(64938)),a=t(85893),i=(0,n.default)((0,a.jsx)("path",{d:"M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"}),"Folder");r.Z=i},72781:function(e,r,t){"use strict";var s=t(64836);r.Z=void 0;var n=s(t(64938)),a=t(85893),i=(0,n.default)((0,a.jsx)("path",{d:"M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z"}),"Pageview");r.Z=i},69661:function(e,r,t){"use strict";t.d(r,{Z:function(){return m}});var s=t(63366),n=t(87462),a=t(67294),i=t(93680),c=t(94780),o=t(90948),l=t(71657),d=t(88169),u=t(85893),h=(0,d.Z)((0,u.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),f=t(34867);function x(e){return(0,f.Z)("MuiAvatar",e)}(0,t(1588).Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const Z=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],j=(0,o.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],t.colorDefault&&r.colorDefault]}})((({theme:e,ownerState:r})=>(0,n.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===r.variant&&{borderRadius:e.shape.borderRadius},"square"===r.variant&&{borderRadius:0},r.colorDefault&&{color:e.palette.background.default,backgroundColor:"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[600]}))),v=(0,o.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,r)=>r.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),g=(0,o.ZP)(h,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,r)=>r.fallback})({width:"75%",height:"75%"});var m=a.forwardRef((function(e,r){const t=(0,l.Z)({props:e,name:"MuiAvatar"}),{alt:o,children:d,className:h,component:f="div",imgProps:m,sizes:p,src:b,srcSet:w,variant:y="circular"}=t,A=(0,s.Z)(t,Z);let P=null;const S=function({crossOrigin:e,referrerPolicy:r,src:t,srcSet:s}){const[n,i]=a.useState(!1);return a.useEffect((()=>{if(!t&&!s)return;i(!1);let n=!0;const a=new Image;return a.onload=()=>{n&&i("loaded")},a.onerror=()=>{n&&i("error")},a.crossOrigin=e,a.referrerPolicy=r,a.src=t,s&&(a.srcset=s),()=>{n=!1}}),[e,r,t,s]),n}((0,n.Z)({},m,{src:b,srcSet:w})),z=b||w,k=z&&"error"!==S,N=(0,n.Z)({},t,{colorDefault:!k,component:f,variant:y}),R=(e=>{const{classes:r,variant:t,colorDefault:s}=e,n={root:["root",t,s&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,c.Z)(n,x,r)})(N);return P=k?(0,u.jsx)(v,(0,n.Z)({alt:o,src:b,srcSet:w,sizes:p,ownerState:N,className:R.img},m)):null!=d?d:z&&o?o[0]:(0,u.jsx)(g,{className:R.fallback}),(0,u.jsx)(j,(0,n.Z)({as:f,ownerState:N,className:(0,i.Z)(R.root,h),ref:r},A,{children:P}))}))},44745:function(e,r){"use strict";r.Z={50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162"}},99385:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/avatars",function(){return t(85755)}])},85755:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return N}});var s=t(26042),n=t(85893),a=t(9008),i=t.n(a),c=t(9395),o=t(10138),l=t(37652),d=t(53156),u=t(86886),h=t(66242),f=t(78445),x=t(67720),Z=t(44267),j=t(91875),v=t(69661),g=t(26447);var m={50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",A100:"#ff9e80",A200:"#ff6e40",A400:"#ff3d00",A700:"#dd2c00"};var p={50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",A100:"#b388ff",A200:"#7c4dff",A400:"#651fff",A700:"#6200ea"},b=t(44745),w=t(13486),y=t(25512),A=t(72781),P=t(41098);function S(e){var r,t=0;for(r=0;r<e.length;r+=1)t=e.charCodeAt(r)+((t<<5)-t);var s="#";for(r=0;r<3;r+=1){s+="00".concat((t>>8*r&255).toString(16)).substr(-2)}return s}function z(e){return{sx:{bgcolor:S(e)},children:"".concat(e.split(" ")[0][0]).concat(e.split(" ")[1][0])}}function k(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i(),{children:(0,n.jsx)("title",{children:"Avatars - Components"})}),(0,n.jsx)(l.Z,{children:(0,n.jsx)(o.Z,{heading:"Avatars",subHeading:"Avatars are found throughout material design with uses in everything from tables to dialog menus.",docs:"https://material-ui.com/components/avatars/"})}),(0,n.jsx)(d.Z,{maxWidth:!1,children:(0,n.jsxs)(u.ZP,{container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",spacing:3,children:[(0,n.jsx)(u.ZP,{item:!0,xs:12,children:(0,n.jsxs)(h.Z,{children:[(0,n.jsx)(f.Z,{title:"Images"}),(0,n.jsx)(x.Z,{}),(0,n.jsx)(Z.Z,{children:(0,n.jsxs)(g.Z,{direction:"row",spacing:2,children:[(0,n.jsx)(v.Z,{alt:"Remy Sharp",src:"/static/images/avatars/1.jpg"}),(0,n.jsx)(v.Z,{alt:"Travis Howard",src:"/static/images/avatars/2.jpg"}),(0,n.jsx)(v.Z,{alt:"Cindy Baker",src:"/static/images/avatars/3.jpg"})]})})]})}),(0,n.jsx)(u.ZP,{item:!0,xs:12,children:(0,n.jsxs)(h.Z,{children:[(0,n.jsx)(f.Z,{title:"Letters"}),(0,n.jsx)(x.Z,{}),(0,n.jsxs)(Z.Z,{children:[(0,n.jsxs)(g.Z,{direction:"row",spacing:2,children:[(0,n.jsx)(v.Z,{children:"H"}),(0,n.jsx)(v.Z,{sx:{bgcolor:m[500]},children:"N"}),(0,n.jsx)(v.Z,{sx:{bgcolor:p[500]},children:"OP"})]}),(0,n.jsx)(x.Z,{sx:{my:5}}),(0,n.jsxs)(g.Z,{direction:"row",spacing:2,children:[(0,n.jsx)(v.Z,(0,s.Z)({},z("Kent Dodds"))),(0,n.jsx)(v.Z,(0,s.Z)({},z("Jed Watson"))),(0,n.jsx)(v.Z,(0,s.Z)({},z("Tim Neutkens")))]})]})]})}),(0,n.jsx)(u.ZP,{item:!0,xs:12,children:(0,n.jsxs)(h.Z,{children:[(0,n.jsx)(f.Z,{title:"Sizes"}),(0,n.jsx)(x.Z,{}),(0,n.jsx)(Z.Z,{children:(0,n.jsxs)(g.Z,{direction:"row",spacing:2,children:[(0,n.jsx)(v.Z,{alt:"Remy Sharp",src:"/static/images/avatars/4.jpg",sx:{width:24,height:24}}),(0,n.jsx)(v.Z,{alt:"Remy Sharp",src:"/static/images/avatars/5.jpg"}),(0,n.jsx)(v.Z,{alt:"Remy Sharp",src:"/static/images/avatars/3.jpg",sx:{width:56,height:56}})]})})]})}),(0,n.jsx)(u.ZP,{item:!0,xs:12,children:(0,n.jsxs)(h.Z,{children:[(0,n.jsx)(f.Z,{title:"Icons"}),(0,n.jsx)(x.Z,{}),(0,n.jsxs)(Z.Z,{children:[(0,n.jsxs)(g.Z,{direction:"row",spacing:2,children:[(0,n.jsx)(v.Z,{children:(0,n.jsx)(y.Z,{})}),(0,n.jsx)(v.Z,{sx:{bgcolor:b.Z[500]},children:(0,n.jsx)(A.Z,{})}),(0,n.jsx)(v.Z,{sx:{bgcolor:w.Z[500]},children:(0,n.jsx)(P.Z,{})})]}),(0,n.jsx)(x.Z,{sx:{my:5}}),(0,n.jsxs)(g.Z,{direction:"row",spacing:2,children:[(0,n.jsx)(v.Z,{sx:{bgcolor:m[500]},variant:"square",children:"N"}),(0,n.jsx)(v.Z,{sx:{bgcolor:w.Z[500]},variant:"rounded",children:(0,n.jsx)(P.Z,{})})]})]})]})})]})}),(0,n.jsx)(j.Z,{})]})}k.getLayout=function(e){return(0,n.jsx)(c.Z,{children:e})};var N=k},91875:function(e,r,t){"use strict";var s=t(85893),n=t(90948),a=t(53156),i=t(87357),c=t(15861),o=(0,n.ZP)(a.Z)((function(e){var r=e.theme;return"\n        margin-top: ".concat(r.spacing(4),";\n")}));r.Z=function(){return(0,s.jsx)(o,{className:"footer-wrapper",children:(0,s.jsxs)(i.Z,{pb:4,display:{xs:"block",md:"flex"},alignItems:"center",textAlign:{xs:"center",md:"left"},justifyContent:"space-between",children:[(0,s.jsx)(i.Z,{}),(0,s.jsx)(c.Z,{sx:{pt:{xs:2,md:0}},variant:"subtitle1"})]})})}},10138:function(e,r,t){"use strict";var s=t(26042),n=t(69396),a=t(99534),i=t(85893),c=t(45697),o=t.n(c),l=t(47017),d=t(86886),u=t(15861),h=t(11057),f=function(e){var r=e.heading,t=void 0===r?"":r,c=e.subHeading,o=void 0===c?"":c,f=e.docs,x=void 0===f?"":f,Z=(0,a.Z)(e,["heading","subHeading","docs"]);return(0,i.jsxs)(d.ZP,(0,n.Z)((0,s.Z)({container:!0,justifyContent:"space-between",alignItems:"center"},Z),{children:[(0,i.jsxs)(d.ZP,{item:!0,children:[(0,i.jsx)(u.Z,{variant:"h3",component:"h3",gutterBottom:!0,children:t}),(0,i.jsx)(u.Z,{variant:"subtitle2",children:o})]}),(0,i.jsx)(d.ZP,{item:!0,children:(0,i.jsxs)(h.Z,{href:x,target:"_blank",rel:"noopener noreferrer",sx:{mt:{xs:2,md:0}},variant:"contained",startIcon:(0,i.jsx)(l.Z,{fontSize:"small"}),children:[t," Documentation"]})})]}))};f.propTypes={heading:o().string,subHeading:o().string,docs:o().string},r.Z=f},37652:function(e,r,t){"use strict";var s=t(85893),n=t(45697),a=t.n(n),i=t(90948),c=t(87357),o=t(53156),l=(0,i.ZP)(c.Z)((function(e){var r=e.theme;return"\n        padding: ".concat(r.spacing(4),";\n")})),d=function(e){var r=e.children;return(0,s.jsx)(l,{className:"MuiPageTitle-wrapper",children:(0,s.jsx)(o.Z,{maxWidth:!1,children:r})})};d.propTypes={children:a().node.isRequired},r.Z=d}},function(e){e.O(0,[5370,9990,9260,8914,4753,6827,6549,9784,456,3077,7467,886,7138,9395,9774,2888,179],(function(){return r=99385,e(e.s=r);var r}));var r=e.O();_N_E=r}]);