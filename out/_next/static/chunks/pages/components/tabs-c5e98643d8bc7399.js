(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6316],{47017:function(e,t,r){"use strict";var a=r(64836);t.Z=void 0;var n=a(r(64938)),s=r(85893),i=(0,n.default)((0,s.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"AddTwoTone");t.Z=i},66242:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var a=r(87462),n=r(63366),s=r(67294),i=r(93680),o=r(94780),c=r(90948),l=r(71657),d=r(55113),u=r(34867);function h(e){return(0,u.Z)("MuiCard",e)}(0,r(1588).Z)("MuiCard",["root"]);var p=r(85893);const m=["className","raised"],Z=(0,c.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"})));var x=s.forwardRef((function(e,t){const r=(0,l.Z)({props:e,name:"MuiCard"}),{className:s,raised:c=!1}=r,d=(0,n.Z)(r,m),u=(0,a.Z)({},r,{raised:c}),x=(e=>{const{classes:t}=e;return(0,o.Z)({root:["root"]},h,t)})(u);return(0,p.jsx)(Z,(0,a.Z)({className:(0,i.Z)(x.root,s),elevation:c?8:void 0,ref:t,ownerState:u},d))}))},78445:function(e,t,r){"use strict";r.d(t,{Z:function(){return j}});var a=r(63366),n=r(87462),s=r(67294),i=r(93680),o=r(94780),c=r(15861),l=r(71657),d=r(90948),u=r(34867);function h(e){return(0,u.Z)("MuiCardHeader",e)}var p=(0,r(1588).Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),m=r(85893);const Z=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],x=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,n.Z)({[`& .${p.title}`]:t.title,[`& .${p.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),f=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),v=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),b=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"});var j=s.forwardRef((function(e,t){const r=(0,l.Z)({props:e,name:"MuiCardHeader"}),{action:s,avatar:d,className:u,component:p="div",disableTypography:j=!1,subheader:g,subheaderTypographyProps:y,title:w,titleTypographyProps:T}=r,C=(0,a.Z)(r,Z),P=(0,n.Z)({},r,{component:p,disableTypography:j}),_=(e=>{const{classes:t}=e;return(0,o.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},h,t)})(P);let N=w;null==N||N.type===c.Z||j||(N=(0,m.jsx)(c.Z,(0,n.Z)({variant:d?"body2":"h5",className:_.title,component:"span",display:"block"},T,{children:N})));let M=g;return null==M||M.type===c.Z||j||(M=(0,m.jsx)(c.Z,(0,n.Z)({variant:d?"body2":"body1",className:_.subheader,color:"text.secondary",component:"span",display:"block"},y,{children:M}))),(0,m.jsxs)(x,(0,n.Z)({className:(0,i.Z)(_.root,u),as:p,ref:t,ownerState:P},C,{children:[d&&(0,m.jsx)(f,{className:_.avatar,ownerState:P,children:d}),(0,m.jsxs)(b,{className:_.content,ownerState:P,children:[N,M]}),s&&(0,m.jsx)(v,{className:_.action,ownerState:P,children:s})]}))}))},38130:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/tabs",function(){return r(46678)}])},46678:function(e,t,r){"use strict";r.r(t);var a=r(26042),n=r(69396),s=r(99534),i=r(85893),o=r(9008),c=r.n(o),l=r(9395),d=r(10138),u=r(37652),h=r(53156),p=r(86886),m=r(66242),Z=r(78445),x=r(67720),f=r(44267),v=r(67294),b=r(88409),j=r(40044),g=r(15861),y=r(87357),w=r(91875);function T(e){var t=e.children,r=e.value,o=e.index,c=(0,s.Z)(e,["children","value","index"]);return(0,i.jsx)("div",(0,n.Z)((0,a.Z)({role:"tabpanel",hidden:r!==o,id:"simple-tabpanel-".concat(o),"aria-labelledby":"simple-tab-".concat(o)},c),{children:r===o&&(0,i.jsx)(y.Z,{sx:{p:3},children:(0,i.jsx)(g.Z,{children:t})})}))}function C(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}function P(){var e=(0,v.useState)(0),t=e[0],r=e[1];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c(),{children:(0,i.jsx)("title",{children:"Tabs - Components"})}),(0,i.jsx)(u.Z,{children:(0,i.jsx)(d.Z,{heading:"Tabs",subHeading:"Tabs make it easy to explore and switch between different views.",docs:"https://material-ui.com/components/tabs/"})}),(0,i.jsx)(h.Z,{maxWidth:!1,children:(0,i.jsx)(p.ZP,{container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",spacing:3,children:(0,i.jsx)(p.ZP,{item:!0,xs:12,children:(0,i.jsxs)(m.Z,{children:[(0,i.jsx)(Z.Z,{title:"Basic Example"}),(0,i.jsx)(x.Z,{}),(0,i.jsx)(f.Z,{children:(0,i.jsxs)(y.Z,{sx:{width:"100%"},children:[(0,i.jsxs)(b.Z,{variant:"scrollable",scrollButtons:"auto",textColor:"primary",indicatorColor:"primary",value:t,onChange:function(e,t){r(t)},"aria-label":"basic tabs example",children:[(0,i.jsx)(j.Z,(0,a.Z)({label:"Item One"},C(0))),(0,i.jsx)(j.Z,(0,a.Z)({label:"Item Two"},C(1))),(0,i.jsx)(j.Z,(0,a.Z)({label:"Item Three"},C(2)))]}),(0,i.jsx)(T,{value:t,index:0,children:"Item One"}),(0,i.jsx)(T,{value:t,index:1,children:"Item Two"}),(0,i.jsx)(T,{value:t,index:2,children:"Item Three"})]})})]})})})}),(0,i.jsx)(w.Z,{})]})}P.getLayout=function(e){return(0,i.jsx)(l.Z,{children:e})},t.default=P},91875:function(e,t,r){"use strict";var a=r(85893),n=r(90948),s=r(53156),i=r(87357),o=r(15861),c=(0,n.ZP)(s.Z)((function(e){var t=e.theme;return"\n        margin-top: ".concat(t.spacing(4),";\n")}));t.Z=function(){return(0,a.jsx)(c,{className:"footer-wrapper",children:(0,a.jsxs)(i.Z,{pb:4,display:{xs:"block",md:"flex"},alignItems:"center",textAlign:{xs:"center",md:"left"},justifyContent:"space-between",children:[(0,a.jsx)(i.Z,{}),(0,a.jsx)(o.Z,{sx:{pt:{xs:2,md:0}},variant:"subtitle1"})]})})}},10138:function(e,t,r){"use strict";var a=r(26042),n=r(69396),s=r(99534),i=r(85893),o=r(45697),c=r.n(o),l=r(47017),d=r(86886),u=r(15861),h=r(11057),p=function(e){var t=e.heading,r=void 0===t?"":t,o=e.subHeading,c=void 0===o?"":o,p=e.docs,m=void 0===p?"":p,Z=(0,s.Z)(e,["heading","subHeading","docs"]);return(0,i.jsxs)(d.ZP,(0,n.Z)((0,a.Z)({container:!0,justifyContent:"space-between",alignItems:"center"},Z),{children:[(0,i.jsxs)(d.ZP,{item:!0,children:[(0,i.jsx)(u.Z,{variant:"h3",component:"h3",gutterBottom:!0,children:r}),(0,i.jsx)(u.Z,{variant:"subtitle2",children:c})]}),(0,i.jsx)(d.ZP,{item:!0,children:(0,i.jsxs)(h.Z,{href:m,target:"_blank",rel:"noopener noreferrer",sx:{mt:{xs:2,md:0}},variant:"contained",startIcon:(0,i.jsx)(l.Z,{fontSize:"small"}),children:[r," Documentation"]})})]}))};p.propTypes={heading:c().string,subHeading:c().string,docs:c().string},t.Z=p},37652:function(e,t,r){"use strict";var a=r(85893),n=r(45697),s=r.n(n),i=r(90948),o=r(87357),c=r(53156),l=(0,i.ZP)(o.Z)((function(e){var t=e.theme;return"\n        padding: ".concat(t.spacing(4),";\n")})),d=function(e){var t=e.children;return(0,a.jsx)(l,{className:"MuiPageTitle-wrapper",children:(0,a.jsx)(c.Z,{maxWidth:!1,children:t})})};d.propTypes={children:s().node.isRequired},t.Z=d},69921:function(e,t){"use strict";var r=60103,a=60106,n=60107,s=60108,i=60114,o=60109,c=60110,l=60112,d=60113,u=60120,h=60115,p=60116,m=60121,Z=60122,x=60117,f=60129,v=60131;if("function"===typeof Symbol&&Symbol.for){var b=Symbol.for;r=b("react.element"),a=b("react.portal"),n=b("react.fragment"),s=b("react.strict_mode"),i=b("react.profiler"),o=b("react.provider"),c=b("react.context"),l=b("react.forward_ref"),d=b("react.suspense"),u=b("react.suspense_list"),h=b("react.memo"),p=b("react.lazy"),m=b("react.block"),Z=b("react.server.block"),x=b("react.fundamental"),f=b("react.debug_trace_mode"),v=b("react.legacy_hidden")}function j(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case n:case i:case s:case d:case u:return e;default:switch(e=e&&e.$$typeof){case c:case l:case p:case h:case o:return e;default:return t}}case a:return t}}}},59864:function(e,t,r){"use strict";r(69921)}},function(e){e.O(0,[8244,9990,9260,9213,6827,4753,6549,1989,456,5571,7924,886,9868,6572,9395,9774,2888,179],(function(){return t=38130,e(e.s=t);var t}));var t=e.O();_N_E=t}]);