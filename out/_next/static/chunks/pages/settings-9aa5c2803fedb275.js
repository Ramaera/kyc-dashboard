(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[662],{78445:function(e,t,a){"use strict";a.d(t,{Z:function(){return g}});var n=a(63366),r=a(87462),s=a(67294),i=a(93680),o=a(94780),d=a(15861),l=a(71657),c=a(90948),u=a(34867);function p(e){return(0,u.Z)("MuiCardHeader",e)}var m=(0,a(1588).Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),h=a(85893);const x=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],f=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,r.Z)({[`& .${m.title}`]:t.title,[`& .${m.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),v=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),Z=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),b=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"});var g=s.forwardRef((function(e,t){const a=(0,l.Z)({props:e,name:"MuiCardHeader"}),{action:s,avatar:c,className:u,component:m="div",disableTypography:g=!1,subheader:y,subheaderTypographyProps:j,title:w,titleTypographyProps:C}=a,N=(0,n.Z)(a,x),S=(0,r.Z)({},a,{component:m,disableTypography:g}),k=(e=>{const{classes:t}=e;return(0,o.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},p,t)})(S);let W=w;null==W||W.type===d.Z||g||(W=(0,h.jsx)(d.Z,(0,r.Z)({variant:c?"body2":"h5",className:k.title,component:"span",display:"block"},C,{children:W})));let R=y;return null==R||R.type===d.Z||g||(R=(0,h.jsx)(d.Z,(0,r.Z)({variant:c?"body2":"body1",className:k.subheader,color:"text.secondary",component:"span",display:"block"},j,{children:R}))),(0,h.jsxs)(f,(0,r.Z)({className:(0,i.Z)(k.root,u),as:m,ref:t,ownerState:S},N,{children:[c&&(0,h.jsx)(v,{className:k.avatar,ownerState:S,children:c}),(0,h.jsxs)(b,{className:k.content,ownerState:S,children:[W,R]}),s&&(0,h.jsx)(Z,{className:k.action,ownerState:S,children:s})]}))}))},53156:function(e,t,a){"use strict";a.d(t,{Z:function(){return j}});var n=a(63366),r=a(87462),s=a(67294),i=a(70828),o=a(14142),d=a(34867),l=a(94780),c=a(29628);var u=(0,a(70182).ZP)(),p=a(66500),m=a(85893);const h=["className","component","disableGutters","fixed","maxWidth","classes"],x=(0,p.Z)(),f=u("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[`maxWidth${(0,o.Z)(String(a.maxWidth))}`],a.fixed&&t.fixed,a.disableGutters&&t.disableGutters]}}),v=e=>(0,c.Z)({props:e,name:"MuiContainer",defaultTheme:x});var Z=a(98216),b=a(90948),g=a(71657);const y=function(e={}){const{createStyledComponent:t=f,useThemeProps:a=v,componentName:c="MuiContainer"}=e,u=t((({theme:e,ownerState:t})=>(0,r.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}})),(({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,a)=>{const n=a,r=e.breakpoints.values[n];return 0!==r&&(t[e.breakpoints.up(n)]={maxWidth:`${r}${e.breakpoints.unit}`}),t}),{})),(({theme:e,ownerState:t})=>(0,r.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}))),p=s.forwardRef((function(e,t){const s=a(e),{className:p,component:x="div",disableGutters:f=!1,fixed:v=!1,maxWidth:Z="lg"}=s,b=(0,n.Z)(s,h),g=(0,r.Z)({},s,{component:x,disableGutters:f,fixed:v,maxWidth:Z}),y=((e,t)=>{const{classes:a,fixed:n,disableGutters:r,maxWidth:s}=e,i={root:["root",s&&`maxWidth${(0,o.Z)(String(s))}`,n&&"fixed",r&&"disableGutters"]};return(0,l.Z)(i,(e=>(0,d.Z)(t,e)),a)})(g,c);return(0,m.jsx)(u,(0,r.Z)({as:x,ownerState:g,className:(0,i.Z)(y.root,p),ref:t},b))}));return p}({createStyledComponent:(0,b.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[`maxWidth${(0,Z.Z)(String(a.maxWidth))}`],a.fixed&&t.fixed,a.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,g.Z)({props:e,name:"MuiContainer"})});var j=y},73406:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings",function(){return a(89929)}])},82245:function(e,t,a){"use strict";a.r(t);var n=a(85893);t.default=function(e){var t=e.children;return(0,n.jsx)(n.Fragment,{children:t})}},89929:function(e,t,a){"use strict";a.r(t);var n=a(85893),r=a(46225),s=a(49104),i=a(53156),o=a(66242),d=a(78445),l=a(67720),c=a(11057),u=a(9008),p=a.n(u),m=a(41664),h=a.n(m),x=a(82245);function f(){return(0,n.jsxs)(x.default,{children:[(0,n.jsx)(p(),{children:(0,n.jsx)("title",{children:"Settings"})}),(0,n.jsx)(i.Z,{maxWidth:"lg",sx:{mt:2},children:(0,n.jsxs)(o.Z,{variant:"outlined",children:[(0,n.jsx)(d.Z,{title:"SETTINGS",sx:{ml:2,textTransform:"uppercase"}}),(0,n.jsx)(l.Z,{}),(0,n.jsxs)(i.Z,{style:{padding:"2rem"},children:[(0,n.jsx)(h(),{href:"settings/change",children:(0,n.jsx)(c.Z,{variant:"contained",children:"Change Password"})}),(0,n.jsx)(c.Z,{variant:"contained",sx:{ml:2},children:"Request a Nominee Change"})]})]})}),(0,n.jsx)(r.Z,{})]})}f.getLayout=function(e){return(0,n.jsx)(s.Z,{children:e})},t.default=f},46225:function(e,t,a){"use strict";var n=a(85893),r=a(90948),s=a(53156),i=a(87357),o=a(15861),d=(0,r.ZP)(s.Z)((function(e){var t=e.theme;return"\n        margin-top: ".concat(t.spacing(4),";\n")}));t.Z=function(){return(0,n.jsx)(d,{className:"footer-wrapper",children:(0,n.jsxs)(i.Z,{pb:4,display:{xs:"block",md:"flex"},alignItems:"center",textAlign:{xs:"center",md:"left"},justifyContent:"space-between",children:[(0,n.jsx)(i.Z,{}),(0,n.jsx)(o.Z,{sx:{pt:{xs:2,md:0}},variant:"subtitle1"})]})})}}},function(e){e.O(0,[5370,9990,4789,3265,5233,1880,6549,9708,6565,2835,1684,9104,9774,2888,179],(function(){return t=73406,e(e.s=t);var t}));var t=e.O();_N_E=t}]);