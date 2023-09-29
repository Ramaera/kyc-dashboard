"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9811],{78445:function(e,t,a){a.d(t,{Z:function(){return Z}});var o=a(63366),r=a(87462),n=a(67294),i=a(93680),s=a(94780),l=a(15861),c=a(71657),d=a(90948),p=a(34867);function u(e){return(0,p.Z)("MuiCardHeader",e)}var v=(0,a(1588).Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),m=a(85893);const g=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],b=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,r.Z)({[`& .${v.title}`]:t.title,[`& .${v.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),h=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),y=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),f=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"});var Z=n.forwardRef((function(e,t){const a=(0,c.Z)({props:e,name:"MuiCardHeader"}),{action:n,avatar:d,className:p,component:v="div",disableTypography:Z=!1,subheader:x,subheaderTypographyProps:C,title:$,titleTypographyProps:P}=a,M=(0,o.Z)(a,g),w=(0,r.Z)({},a,{component:v,disableTypography:Z}),R=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},u,t)})(w);let k=$;null==k||k.type===l.Z||Z||(k=(0,m.jsx)(l.Z,(0,r.Z)({variant:d?"body2":"h5",className:R.title,component:"span",display:"block"},P,{children:k})));let N=x;return null==N||N.type===l.Z||Z||(N=(0,m.jsx)(l.Z,(0,r.Z)({variant:d?"body2":"body1",className:R.subheader,color:"text.secondary",component:"span",display:"block"},C,{children:N}))),(0,m.jsxs)(b,(0,r.Z)({className:(0,i.Z)(R.root,p),as:v,ref:t,ownerState:w},M,{children:[d&&(0,m.jsx)(h,{className:R.avatar,ownerState:w,children:d}),(0,m.jsxs)(f,{className:R.content,ownerState:w,children:[k,N]}),n&&(0,m.jsx)(y,{className:R.action,ownerState:w,children:n})]}))}))},26336:function(e,t,a){a.d(t,{L:function(){return r}});var o=a(34867);function r(e){return(0,o.Z)("MuiListItemText",e)}const n=(0,a(1588).Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);t.Z=n},30431:function(e,t,a){a.d(t,{Z:function(){return M}});var o=a(63366),r=a(87462),n=a(67294),i=a(93680),s=a(94780),l=a(41796),c=a(90948),d=a(71657),p=a(59773),u=a(49990),v=a(58974),m=a(51705),g=a(35097),b=a(1588);var h=(0,b.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]),y=a(26336),f=a(34867);function Z(e){return(0,f.Z)("MuiMenuItem",e)}var x=(0,b.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),C=a(85893);const $=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],P=(0,c.ZP)(u.Z,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.dense&&t.dense,a.divider&&t.divider,!a.disableGutters&&t.gutters]}})((({theme:e,ownerState:t})=>(0,r.Z)({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${x.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${x.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${x.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${x.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${x.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${g.Z.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${g.Z.inset}`]:{marginLeft:52},[`& .${y.Z.root}`]:{marginTop:0,marginBottom:0},[`& .${y.Z.inset}`]:{paddingLeft:36},[`& .${h.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&(0,r.Z)({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${h.root} svg`]:{fontSize:"1.25rem"}}))));var M=n.forwardRef((function(e,t){const a=(0,d.Z)({props:e,name:"MuiMenuItem"}),{autoFocus:l=!1,component:c="li",dense:u=!1,divider:g=!1,disableGutters:b=!1,focusVisibleClassName:h,role:y="menuitem",tabIndex:f}=a,x=(0,o.Z)(a,$),M=n.useContext(p.Z),w={dense:u||M.dense||!1,disableGutters:b},R=n.useRef(null);(0,v.Z)((()=>{l&&R.current&&R.current.focus()}),[l]);const k=(0,r.Z)({},a,{dense:w.dense,divider:g,disableGutters:b}),N=(e=>{const{disabled:t,dense:a,divider:o,disableGutters:n,selected:i,classes:l}=e,c={root:["root",a&&"dense",t&&"disabled",!n&&"gutters",o&&"divider",i&&"selected"]},d=(0,s.Z)(c,Z,l);return(0,r.Z)({},l,d)})(a),O=(0,m.Z)(R,t);let S;return a.disabled||(S=void 0!==f?f:-1),(0,C.jsx)(p.Z.Provider,{value:w,children:(0,C.jsx)(P,(0,r.Z)({ref:O,role:y,tabIndex:S,component:c,focusVisibleClassName:(0,i.Z)(N.focusVisible,h)},x,{ownerState:k,classes:N}))})}))},10633:function(e,t,a){a.d(t,{Z:function(){return T}});var o=a(87462),r=a(63366),n=a(67294),i=a(93680),s=a(94780),l=a(71657),c=a(34867),d=a(1588);function p(e){return(0,c.Z)("MuiPagination",e)}(0,d.Z)("MuiPagination",["root","ul","outlined","text"]);var u=a(19032);const v=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];var m=a(41796);function g(e){return(0,c.Z)("MuiPaginationItem",e)}var b=(0,d.Z)("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon"]),h=a(2734),y=a(49990),f=a(98216),Z=a(42989),x=a(63046),C=a(88169),$=a(85893),P=(0,C.Z)((0,$.jsx)("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),M=(0,C.Z)((0,$.jsx)("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),w=a(90948);const R=["className","color","component","components","disabled","page","selected","shape","size","type","variant"],k=(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],t[`size${(0,f.Z)(a.size)}`],"text"===a.variant&&t[`text${(0,f.Z)(a.color)}`],"outlined"===a.variant&&t[`outlined${(0,f.Z)(a.color)}`],"rounded"===a.shape&&t.rounded,"page"===a.type&&t.page,("start-ellipsis"===a.type||"end-ellipsis"===a.type)&&t.ellipsis,("previous"===a.type||"next"===a.type)&&t.previousNext,("first"===a.type||"last"===a.type)&&t.firstLast]},N=(0,w.ZP)("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:k})((({theme:e,ownerState:t})=>(0,o.Z)({},e.typography.body2,{borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(e.vars||e).palette.text.primary,height:"auto",[`&.${b.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},"small"===t.size&&{minWidth:26,borderRadius:13,margin:"0 1px",padding:"0 4px"},"large"===t.size&&{minWidth:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15)}))),O=(0,w.ZP)(y.Z,{name:"MuiPaginationItem",slot:"Root",overridesResolver:k})((({theme:e,ownerState:t})=>(0,o.Z)({},e.typography.body2,{borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(e.vars||e).palette.text.primary,[`&.${b.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${b.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},transition:e.transitions.create(["color","background-color"],{duration:e.transitions.duration.short}),"&:hover":{backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${b.selected}`]:{backgroundColor:(e.vars||e).palette.action.selected,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selected} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,m.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(e.vars||e).palette.action.selected}},[`&.${b.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selected} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,m.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},[`&.${b.disabled}`]:{opacity:1,color:(e.vars||e).palette.action.disabled,backgroundColor:(e.vars||e).palette.action.selected}}},"small"===t.size&&{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px"},"large"===t.size&&{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15)},"rounded"===t.shape&&{borderRadius:(e.vars||e).shape.borderRadius})),(({theme:e,ownerState:t})=>(0,o.Z)({},"text"===t.variant&&{[`&.${b.selected}`]:(0,o.Z)({},"standard"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main,"&:hover":{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}},[`&.${b.focusVisible}`]:{backgroundColor:(e.vars||e).palette[t.color].dark}},{[`&.${b.disabled}`]:{color:(e.vars||e).palette.action.disabled}})},"outlined"===t.variant&&{border:e.vars?`1px solid rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:"1px solid "+("light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),[`&.${b.selected}`]:(0,o.Z)({},"standard"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:`1px solid ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:(0,m.Fq)(e.palette[t.color].main,.5)}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.activatedOpacity})`:(0,m.Fq)(e.palette[t.color].main,e.palette.action.activatedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / calc(${e.vars.palette.action.activatedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,m.Fq)(e.palette[t.color].main,e.palette.action.activatedOpacity+e.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${b.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / calc(${e.vars.palette.action.activatedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,m.Fq)(e.palette[t.color].main,e.palette.action.activatedOpacity+e.palette.action.focusOpacity)}},{[`&.${b.disabled}`]:{borderColor:(e.vars||e).palette.action.disabledBackground,color:(e.vars||e).palette.action.disabled}})}))),S=(0,w.ZP)("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(e,t)=>t.icon})((({theme:e,ownerState:t})=>(0,o.Z)({fontSize:e.typography.pxToRem(20),margin:"0 -8px"},"small"===t.size&&{fontSize:e.typography.pxToRem(18)},"large"===t.size&&{fontSize:e.typography.pxToRem(22)})));var z=n.forwardRef((function(e,t){const a=(0,l.Z)({props:e,name:"MuiPaginationItem"}),{className:n,color:c="standard",component:d,components:p={first:Z.Z,last:x.Z,next:M,previous:P},disabled:u=!1,page:v,selected:m=!1,shape:b="circular",size:y="medium",type:C="page",variant:w="text"}=a,k=(0,r.Z)(a,R),z=(0,o.Z)({},a,{color:c,disabled:u,selected:m,shape:b,size:y,type:C,variant:w}),B=(0,h.Z)(),L=(e=>{const{classes:t,color:a,disabled:o,selected:r,size:n,shape:i,type:l,variant:c}=e,d={root:["root",`size${(0,f.Z)(n)}`,c,i,"standard"!==a&&`${c}${(0,f.Z)(a)}`,o&&"disabled",r&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[l]],icon:["icon"]};return(0,s.Z)(d,g,t)})(z),I=("rtl"===B.direction?{previous:p.next||M,next:p.previous||P,last:p.first||Z.Z,first:p.last||x.Z}:{previous:p.previous||P,next:p.next||M,first:p.first||Z.Z,last:p.last||x.Z})[C];return"start-ellipsis"===C||"end-ellipsis"===C?(0,$.jsx)(N,{ref:t,ownerState:z,className:(0,i.Z)(L.root,n),children:"\u2026"}):(0,$.jsxs)(O,(0,o.Z)({ref:t,ownerState:z,component:d,disabled:u,className:(0,i.Z)(L.root,n)},k,{children:["page"===C&&v,I?(0,$.jsx)(S,{as:I,ownerState:z,className:L.icon}):null]}))}));const B=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],L=(0,w.ZP)("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant]]}})({}),I=(0,w.ZP)("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(e,t)=>t.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function j(e,t,a){return"page"===e?`${a?"":"Go to "}page ${t}`:`Go to ${e} page`}var T=n.forwardRef((function(e,t){const a=(0,l.Z)({props:e,name:"MuiPagination"}),{boundaryCount:n=1,className:c,color:d="standard",count:m=1,defaultPage:g=1,disabled:b=!1,getItemAriaLabel:h=j,hideNextButton:y=!1,hidePrevButton:f=!1,renderItem:Z=(e=>(0,$.jsx)(z,(0,o.Z)({},e))),shape:x="circular",showFirstButton:C=!1,showLastButton:P=!1,siblingCount:M=1,size:w="medium",variant:R="text"}=a,k=(0,r.Z)(a,B),{items:N}=function(e={}){const{boundaryCount:t=1,componentName:a="usePagination",count:n=1,defaultPage:i=1,disabled:s=!1,hideNextButton:l=!1,hidePrevButton:c=!1,onChange:d,page:p,showFirstButton:m=!1,showLastButton:g=!1,siblingCount:b=1}=e,h=(0,r.Z)(e,v),[y,f]=(0,u.Z)({controlled:p,default:i,name:a,state:"page"}),Z=(e,t)=>{p||f(t),d&&d(e,t)},x=(e,t)=>{const a=t-e+1;return Array.from({length:a},((t,a)=>e+a))},C=x(1,Math.min(t,n)),$=x(Math.max(n-t+1,t+1),n),P=Math.max(Math.min(y-b,n-t-2*b-1),t+2),M=Math.min(Math.max(y+b,t+2*b+2),$.length>0?$[0]-2:n-1),w=[...m?["first"]:[],...c?[]:["previous"],...C,...P>t+2?["start-ellipsis"]:t+1<n-t?[t+1]:[],...x(P,M),...M<n-t-1?["end-ellipsis"]:n-t>t?[n-t]:[],...$,...l?[]:["next"],...g?["last"]:[]],R=e=>{switch(e){case"first":return 1;case"previous":return y-1;case"next":return y+1;case"last":return n;default:return null}},k=w.map((e=>"number"===typeof e?{onClick:t=>{Z(t,e)},type:"page",page:e,selected:e===y,disabled:s,"aria-current":e===y?"true":void 0}:{onClick:t=>{Z(t,R(e))},type:e,page:R(e),selected:!1,disabled:s||-1===e.indexOf("ellipsis")&&("next"===e||"last"===e?y>=n:y<=1)}));return(0,o.Z)({items:k},h)}((0,o.Z)({},a,{componentName:"Pagination"})),O=(0,o.Z)({},a,{boundaryCount:n,color:d,count:m,defaultPage:g,disabled:b,getItemAriaLabel:h,hideNextButton:y,hidePrevButton:f,renderItem:Z,shape:x,showFirstButton:C,showLastButton:P,siblingCount:M,size:w,variant:R}),S=(e=>{const{classes:t,variant:a}=e,o={root:["root",a],ul:["ul"]};return(0,s.Z)(o,p,t)})(O);return(0,$.jsx)(L,(0,o.Z)({"aria-label":"pagination navigation",className:(0,i.Z)(S.root,c),ownerState:O,ref:t},k,{children:(0,$.jsx)(I,{className:S.ul,ownerState:O,children:N.map(((e,t)=>(0,$.jsx)("li",{children:Z((0,o.Z)({},e,{color:d,"aria-label":h(e.type,e.page,e.selected),shape:x,size:w,variant:R}))},t)))})}))}))},53184:function(e,t,a){a.d(t,{Z:function(){return y}});var o=a(87462),r=a(63366),n=a(67294),i=a(93680),s=a(94780),l=a(44063),c=a(71657),d=a(90948),p=a(34867);function u(e){return(0,p.Z)("MuiTableHead",e)}(0,a(1588).Z)("MuiTableHead",["root"]);var v=a(85893);const m=["className","component"],g=(0,d.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),b={variant:"head"},h="thead";var y=n.forwardRef((function(e,t){const a=(0,c.Z)({props:e,name:"MuiTableHead"}),{className:n,component:d=h}=a,p=(0,r.Z)(a,m),y=(0,o.Z)({},a,{component:d}),f=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},u,t)})(y);return(0,v.jsx)(l.Z.Provider,{value:b,children:(0,v.jsx)(g,(0,o.Z)({as:d,className:(0,i.Z)(f.root,n),ref:t,role:d===h?null:"rowgroup",ownerState:y},p))})}))},42989:function(e,t,a){a(67294);var o=a(88169),r=a(85893);t.Z=(0,o.Z)((0,r.jsx)("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage")},63046:function(e,t,a){a(67294);var o=a(88169),r=a(85893);t.Z=(0,o.Z)((0,r.jsx)("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage")},73359:function(e,t,a){a.d(t,{t:function(){return c}});var o=a(97582),r=a(67294),n=a(14012),i=a(37887),s=a(66252),l=["refetch","reobserve","fetchMore","updateQuery","startPolling","subscribeToMore"];function c(e,t){var a,c=r.useRef(),d=r.useRef(),p=r.useRef(),u=(0,n.J)(t,c.current||{}),v=null!==(a=null===u||void 0===u?void 0:u.query)&&void 0!==a?a:e;d.current=u,p.current=v;var m=(0,i.A)((0,s.x)(t&&t.client),v),g=m.useQuery((0,o.pi)((0,o.pi)({},u),{skip:!c.current})),b=g.observable.options.initialFetchPolicy||m.getDefaultFetchPolicy(),h=Object.assign(g,{called:!!c.current}),y=r.useMemo((function(){for(var e={},t=function(t){var a=h[t];e[t]=function(){return c.current||(c.current=Object.create(null),m.forceUpdateState()),a.apply(this,arguments)}},a=0,o=l;a<o.length;a++){t(o[a])}return e}),[]);Object.assign(h,y);var f=r.useCallback((function(e){c.current=e?(0,o.pi)((0,o.pi)({},e),{fetchPolicy:e.fetchPolicy||b}):{fetchPolicy:b};var t=(0,n.J)(d.current,(0,o.pi)({query:p.current},c.current)),a=m.executeQuery((0,o.pi)((0,o.pi)({},t),{skip:!1})).then((function(e){return Object.assign(e,y)}));return a.catch((function(){})),a}),[]);return[f,h]}}}]);