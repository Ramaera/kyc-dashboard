(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[662],{66242:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var r=n(87462),a=n(63366),o=n(67294),s=n(93680),i=n(94780),c=n(90948),l=n(71657),d=n(55113),u=n(34867);function p(e){return(0,u.Z)("MuiCard",e)}(0,n(1588).Z)("MuiCard",["root"]);var h=n(85893);const m=["className","raised"],x=(0,c.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"})));var Z=o.forwardRef((function(e,t){const n=(0,l.Z)({props:e,name:"MuiCard"}),{className:o,raised:c=!1}=n,d=(0,a.Z)(n,m),u=(0,r.Z)({},n,{raised:c}),Z=(e=>{const{classes:t}=e;return(0,i.Z)({root:["root"]},p,t)})(u);return(0,h.jsx)(x,(0,r.Z)({className:(0,s.Z)(Z.root,o),elevation:c?8:void 0,ref:t,ownerState:u},d))}))},78445:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r=n(63366),a=n(87462),o=n(67294),s=n(93680),i=n(94780),c=n(15861),l=n(71657),d=n(90948),u=n(34867);function p(e){return(0,u.Z)("MuiCardHeader",e)}var h=(0,n(1588).Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),m=n(85893);const x=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],Z=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,a.Z)({[`& .${h.title}`]:t.title,[`& .${h.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),f=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),v=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),g=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"});var j=o.forwardRef((function(e,t){const n=(0,l.Z)({props:e,name:"MuiCardHeader"}),{action:o,avatar:d,className:u,component:h="div",disableTypography:j=!1,subheader:b,subheaderTypographyProps:y,title:w,titleTypographyProps:C}=n,N=(0,r.Z)(n,x),T=(0,a.Z)({},n,{component:h,disableTypography:j}),P=(e=>{const{classes:t}=e;return(0,i.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},p,t)})(T);let S=w;null==S||S.type===c.Z||j||(S=(0,m.jsx)(c.Z,(0,a.Z)({variant:d?"body2":"h5",className:P.title,component:"span",display:"block"},C,{children:S})));let R=b;return null==R||R.type===c.Z||j||(R=(0,m.jsx)(c.Z,(0,a.Z)({variant:d?"body2":"body1",className:P.subheader,color:"text.secondary",component:"span",display:"block"},y,{children:R}))),(0,m.jsxs)(Z,(0,a.Z)({className:(0,s.Z)(P.root,u),as:h,ref:t,ownerState:T},N,{children:[d&&(0,m.jsx)(f,{className:P.avatar,ownerState:T,children:d}),(0,m.jsxs)(g,{className:P.content,ownerState:T,children:[S,R]}),o&&(0,m.jsx)(v,{className:P.action,ownerState:T,children:o})]}))}))},73406:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings",function(){return n(85657)}])},43725:function(e,t,n){"use strict";n.r(t);var r=n(85893);t.default=function(e){var t=e.children;return(0,r.jsx)(r.Fragment,{children:t})}},85657:function(e,t,n){"use strict";n.r(t);var r=n(14924),a=n(85893),o=n(91875),s=n(9395),i=n(2734),c=n(53156),l=n(66242),d=n(78445),u=n(67720),p=n(87357),h=n(11057),m=n(15861),x=n(50135),Z=n(9008),f=n.n(Z),v=n(41664),g=n.n(v),j=n(43725),b=n(67294);function y(){var e=(0,i.Z)(),t=(0,b.useState)(""),n=t[0],s=t[1],Z=(0,b.useState)(""),v=Z[0],y=Z[1];return(0,a.jsxs)(j.default,{children:[(0,a.jsx)(f(),{children:(0,a.jsx)("title",{children:"Settings"})}),(0,a.jsx)(c.Z,{maxWidth:!1,sx:{mt:2},children:(0,a.jsxs)(l.Z,{variant:"outlined",children:[(0,a.jsx)(d.Z,{title:"SETTINGS",sx:{ml:2,textTransform:"uppercase"}}),(0,a.jsx)(u.Z,{}),(0,a.jsxs)(p.Z,{sx:(0,r.Z)({padding:"2rem",display:"flex",gap:2},e.breakpoints.down("sm"),{flexDirection:"column"}),children:[(0,a.jsx)(g(),{href:"settings/change",children:(0,a.jsx)(h.Z,{variant:"contained",children:"Change Password"})}),(0,a.jsx)(h.Z,{variant:"contained",onClick:function(){s((function(e){return"nominee"===e?"":"nominee"}))},children:"Request a Nominee Change"}),(0,a.jsx)(h.Z,{variant:"contained",onClick:function(){s((function(e){return"support"===e?"":"support"}))},children:"Support"})]}),(0,a.jsxs)(p.Z,{sx:{marginBottom:4,marginX:4},children:["nominee"===n&&(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(m.Z,{variant:"h4",component:"h4",sx:{marginTop:2,marginBottom:2},gutterBottom:!0,children:"To change nominee Please Contact Us on 0120-4152818"})}),"support"===n&&(0,a.jsxs)(p.Z,{children:[(0,a.jsx)(m.Z,{variant:"h4",component:"h4",sx:{marginTop:2,marginBottom:2},gutterBottom:!0,children:"Please Contact Us on 0120-4152818"}),(0,a.jsx)(x.Z,{label:"Type your queries here",multiline:!0,rows:8,value:v,onChange:function(e){y(e.target.value)},sx:(0,r.Z)({width:"50%"},e.breakpoints.down("sm"),{width:"100%"})}),(0,a.jsx)("br",{}),(0,a.jsx)(h.Z,{variant:"contained",sx:{marginTop:4},disabled:!v,children:"Submit"})]})]})]})}),(0,a.jsx)(o.Z,{})]})}y.getLayout=function(e){return(0,a.jsx)(s.Z,{children:e})},t.default=y},91875:function(e,t,n){"use strict";var r=n(85893),a=n(90948),o=n(53156),s=n(87357),i=n(15861),c=(0,a.ZP)(o.Z)((function(e){var t=e.theme;return"\n        margin-top: ".concat(t.spacing(4),";\n")}));t.Z=function(){return(0,r.jsx)(c,{className:"footer-wrapper",children:(0,r.jsxs)(s.Z,{pb:4,display:{xs:"block",md:"flex"},alignItems:"center",textAlign:{xs:"center",md:"left"},justifyContent:"space-between",children:[(0,r.jsx)(s.Z,{}),(0,r.jsx)(i.Z,{sx:{pt:{xs:2,md:0}},variant:"subtitle1"})]})})}}},function(e){e.O(0,[5370,9990,9260,8914,4753,6827,6549,7058,788,9784,456,3077,135,7467,886,9395,9774,2888,179],(function(){return t=73406,e(e.s=t);var t}));var t=e.O();_N_E=t}]);