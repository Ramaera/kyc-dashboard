"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[863,1483,3284],{56815:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(63366),i=n(87462),o=n(67294),a=n(86010),l=n(94780),c=n(15704),s=n(74423),u=n(90948),d=n(98216),p=n(34867);function f(e){return(0,p.Z)("MuiFormHelperText",e)}var m,h=(0,n(1588).Z)("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]),v=n(71657),g=n(85893);const x=["children","className","component","disabled","error","filled","focused","margin","required","variant"],w=(0,u.ZP)("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.size&&t[`size${(0,d.Z)(n.size)}`],n.contained&&t.contained,n.filled&&t.filled]}})((({theme:e,ownerState:t})=>(0,i.Z)({color:(e.vars||e).palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${h.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${h.error}`]:{color:(e.vars||e).palette.error.main}},"small"===t.size&&{marginTop:4},t.contained&&{marginLeft:14,marginRight:14})));var y=o.forwardRef((function(e,t){const n=(0,v.Z)({props:e,name:"MuiFormHelperText"}),{children:o,className:u,component:p="p"}=n,h=(0,r.Z)(n,x),y=(0,s.Z)(),b=(0,c.Z)({props:n,muiFormControl:y,states:["variant","size","disabled","error","filled","focused","required"]}),Z=(0,i.Z)({},n,{component:p,contained:"filled"===b.variant||"outlined"===b.variant,variant:b.variant,size:b.size,disabled:b.disabled,error:b.error,filled:b.filled,focused:b.focused,required:b.required}),C=(e=>{const{classes:t,contained:n,size:r,disabled:i,error:o,filled:a,focused:c,required:s}=e,u={root:["root",i&&"disabled",o&&"error",r&&`size${(0,d.Z)(r)}`,n&&"contained",c&&"focused",a&&"filled",s&&"required"]};return(0,l.Z)(u,f,t)})(Z);return(0,g.jsx)(w,(0,i.Z)({as:p,ownerState:Z,className:(0,a.Z)(C.root,u),ref:t},h,{children:" "===o?m||(m=(0,g.jsx)("span",{className:"notranslate",children:"\u200b"})):o}))}))},86886:function(e,t,n){n.d(t,{ZP:function(){return Z}});var r=n(63366),i=n(87462),o=n(67294),a=n(86010),l=n(95408),c=n(39707),s=n(94780),u=n(90948),d=n(71657);var p=o.createContext(),f=n(34867);function m(e){return(0,f.Z)("MuiGrid",e)}const h=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var v=(0,n(1588).Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>`spacing-xs-${e}`)),...["column-reverse","column","row-reverse","row"].map((e=>`direction-xs-${e}`)),...["nowrap","wrap-reverse","wrap"].map((e=>`wrap-xs-${e}`)),...h.map((e=>`grid-xs-${e}`)),...h.map((e=>`grid-sm-${e}`)),...h.map((e=>`grid-md-${e}`)),...h.map((e=>`grid-lg-${e}`)),...h.map((e=>`grid-xl-${e}`))]),g=n(85893);const x=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function w(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function y(e,t,n={}){if(!t||!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return[n[`spacing-xs-${String(e)}`]||`spacing-xs-${String(e)}`];const{xs:r,sm:i,md:o,lg:a,xl:l}=e;return[Number(r)>0&&(n[`spacing-xs-${String(r)}`]||`spacing-xs-${String(r)}`),Number(i)>0&&(n[`spacing-sm-${String(i)}`]||`spacing-sm-${String(i)}`),Number(o)>0&&(n[`spacing-md-${String(o)}`]||`spacing-md-${String(o)}`),Number(a)>0&&(n[`spacing-lg-${String(a)}`]||`spacing-lg-${String(a)}`),Number(l)>0&&(n[`spacing-xl-${String(l)}`]||`spacing-xl-${String(l)}`)]}const b=(0,u.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{container:n,direction:r,item:i,lg:o,md:a,sm:l,spacing:c,wrap:s,xl:u,xs:d,zeroMinWidth:p}=e.ownerState;return[t.root,n&&t.container,i&&t.item,p&&t.zeroMinWidth,...y(c,n,t),"row"!==r&&t[`direction-xs-${String(r)}`],"wrap"!==s&&t[`wrap-xs-${String(s)}`],!1!==d&&t[`grid-xs-${String(d)}`],!1!==l&&t[`grid-sm-${String(l)}`],!1!==a&&t[`grid-md-${String(a)}`],!1!==o&&t[`grid-lg-${String(o)}`],!1!==u&&t[`grid-xl-${String(u)}`]]}})((({ownerState:e})=>(0,i.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})),(function({theme:e,ownerState:t}){const n=(0,l.P$)({values:t.direction,breakpoints:e.breakpoints.values});return(0,l.k9)({theme:e},n,(e=>{const t={flexDirection:e};return 0===e.indexOf("column")&&(t[`& > .${v.item}`]={maxWidth:"none"}),t}))}),(function({theme:e,ownerState:t}){const{container:n,rowSpacing:r}=t;let i={};if(n&&0!==r){const t=(0,l.P$)({values:r,breakpoints:e.breakpoints.values});i=(0,l.k9)({theme:e},t,(t=>{const n=e.spacing(t);return"0px"!==n?{marginTop:`-${w(n)}`,[`& > .${v.item}`]:{paddingTop:w(n)}}:{}}))}return i}),(function({theme:e,ownerState:t}){const{container:n,columnSpacing:r}=t;let i={};if(n&&0!==r){const t=(0,l.P$)({values:r,breakpoints:e.breakpoints.values});i=(0,l.k9)({theme:e},t,(t=>{const n=e.spacing(t);return"0px"!==n?{width:`calc(100% + ${w(n)})`,marginLeft:`-${w(n)}`,[`& > .${v.item}`]:{paddingLeft:w(n)}}:{}}))}return i}),(function({theme:e,ownerState:t}){let n;return e.breakpoints.keys.reduce(((r,o)=>{let a={};if(t[o]&&(n=t[o]),!n)return r;if(!0===n)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===n)a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const c=(0,l.P$)({values:t.columns,breakpoints:e.breakpoints.values}),s="object"===typeof c?c[o]:c;if(void 0===s||null===s)return r;const u=Math.round(n/s*1e8)/1e6+"%";let d={};if(t.container&&t.item&&0!==t.columnSpacing){const n=e.spacing(t.columnSpacing);if("0px"!==n){const e=`calc(${u} + ${w(n)})`;d={flexBasis:e,maxWidth:e}}}a=(0,i.Z)({flexBasis:u,flexGrow:0,maxWidth:u},d)}return 0===e.breakpoints.values[o]?Object.assign(r,a):r[e.breakpoints.up(o)]=a,r}),{})}));var Z=o.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiGrid"}),l=(0,c.Z)(n),{className:u,columns:f,columnSpacing:h,component:v="div",container:w=!1,direction:Z="row",item:C=!1,lg:S=!1,md:k=!1,rowSpacing:M,sm:R=!1,spacing:$=0,wrap:E="wrap",xl:P=!1,xs:W=!1,zeroMinWidth:N=!1}=l,T=(0,r.Z)(l,x),z=M||$,_=h||$,F=o.useContext(p),Y=w?f||12:F,H=(0,i.Z)({},l,{columns:Y,container:w,direction:Z,item:C,lg:S,md:k,sm:R,rowSpacing:z,columnSpacing:_,wrap:E,xl:P,xs:W,zeroMinWidth:N}),X=(e=>{const{classes:t,container:n,direction:r,item:i,lg:o,md:a,sm:l,spacing:c,wrap:u,xl:d,xs:p,zeroMinWidth:f}=e,h={root:["root",n&&"container",i&&"item",f&&"zeroMinWidth",...y(c,n),"row"!==r&&`direction-xs-${String(r)}`,"wrap"!==u&&`wrap-xs-${String(u)}`,!1!==p&&`grid-xs-${String(p)}`,!1!==l&&`grid-sm-${String(l)}`,!1!==a&&`grid-md-${String(a)}`,!1!==o&&`grid-lg-${String(o)}`,!1!==d&&`grid-xl-${String(d)}`]};return(0,s.Z)(h,m,t)})(H);return(0,g.jsx)(p.Provider,{value:Y,children:(0,g.jsx)(b,(0,i.Z)({ownerState:H,className:(0,a.Z)(X.root,u),as:v,ref:t},T))})}))},31618:function(e,t,n){const r=n(67294).createContext();t.Z=r},44063:function(e,t,n){const r=n(67294).createContext();t.Z=r},53252:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(63366),i=n(87462),o=n(67294),a=n(86010),l=n(94780),c=n(41796),s=n(98216),u=n(31618),d=n(44063),p=n(71657),f=n(90948),m=n(34867);function h(e){return(0,m.Z)("MuiTableCell",e)}var v=(0,n(1588).Z)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),g=n(85893);const x=["align","className","component","padding","scope","size","sortDirection","variant"],w=(0,f.ZP)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`size${(0,s.Z)(n.size)}`],"normal"!==n.padding&&t[`padding${(0,s.Z)(n.padding)}`],"inherit"!==n.align&&t[`align${(0,s.Z)(n.align)}`],n.stickyHeader&&t.stickyHeader]}})((({theme:e,ownerState:t})=>(0,i.Z)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:`1px solid\n    ${"light"===e.palette.mode?(0,c.$n)((0,c.Fq)(e.palette.divider,1),.88):(0,c._j)((0,c.Fq)(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},"head"===t.variant&&{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},"body"===t.variant&&{color:e.palette.text.primary},"footer"===t.variant&&{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},"small"===t.size&&{padding:"6px 16px",[`&.${v.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},"checkbox"===t.padding&&{width:48,padding:"0 0 0 4px"},"none"===t.padding&&{padding:0},"left"===t.align&&{textAlign:"left"},"center"===t.align&&{textAlign:"center"},"right"===t.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===t.align&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:e.palette.background.default})));var y=o.forwardRef((function(e,t){const n=(0,p.Z)({props:e,name:"MuiTableCell"}),{align:c="inherit",className:f,component:m,padding:v,scope:y,size:b,sortDirection:Z,variant:C}=n,S=(0,r.Z)(n,x),k=o.useContext(u.Z),M=o.useContext(d.Z),R=M&&"head"===M.variant;let $;$=m||(R?"th":"td");let E=y;!E&&R&&(E="col");const P=C||M&&M.variant,W=(0,i.Z)({},n,{align:c,component:$,padding:v||(k&&k.padding?k.padding:"normal"),size:b||(k&&k.size?k.size:"medium"),sortDirection:Z,stickyHeader:"head"===P&&k&&k.stickyHeader,variant:P}),N=(e=>{const{classes:t,variant:n,align:r,padding:i,size:o,stickyHeader:a}=e,c={root:["root",n,a&&"stickyHeader","inherit"!==r&&`align${(0,s.Z)(r)}`,"normal"!==i&&`padding${(0,s.Z)(i)}`,`size${(0,s.Z)(o)}`]};return(0,l.Z)(c,h,t)})(W);let T=null;return Z&&(T="asc"===Z?"ascending":"descending"),(0,g.jsx)(w,(0,i.Z)({as:$,ref:t,className:(0,a.Z)(N.root,f),"aria-sort":T,scope:E,ownerState:W},S))}))},53816:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(87462),i=n(63366),o=n(67294),a=n(86010),l=n(94780),c=n(41796),s=n(44063),u=n(71657),d=n(90948),p=n(34867);function f(e){return(0,p.Z)("MuiTableRow",e)}var m=(0,n(1588).Z)("MuiTableRow",["root","selected","hover","head","footer"]),h=n(85893);const v=["className","component","hover","selected"],g=(0,d.ZP)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.head&&t.head,n.footer&&t.footer]}})((({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${m.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${m.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}}))),x="tr";var w=o.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiTableRow"}),{className:c,component:d=x,hover:p=!1,selected:m=!1}=n,w=(0,i.Z)(n,v),y=o.useContext(s.Z),b=(0,r.Z)({},n,{component:d,hover:p,selected:m,head:y&&"head"===y.variant,footer:y&&"footer"===y.variant}),Z=(e=>{const{classes:t,selected:n,hover:r,head:i,footer:o}=e,a={root:["root",n&&"selected",r&&"hover",i&&"head",o&&"footer"]};return(0,l.Z)(a,f,t)})(b);return(0,h.jsx)(g,(0,r.Z)({as:d,ref:t,className:(0,a.Z)(Z.root,c),role:d===x?null:"row",ownerState:b},w))}))},50135:function(e,t,n){n.d(t,{Z:function(){return S}});var r=n(87462),i=n(63366),o=n(67294),a=n(86010),l=n(94780),c=n(57579),s=n(90948),u=n(71657),d=n(90089),p=n(78288),f=n(37058),m=n(47312),h=n(94054),v=n(56815),g=n(10315),x=n(34867);function w(e){return(0,x.Z)("MuiTextField",e)}(0,n(1588).Z)("MuiTextField",["root"]);var y=n(85893);const b=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],Z={standard:d.Z,filled:p.Z,outlined:f.Z},C=(0,s.ZP)(h.Z,{name:"MuiTextField",slot:"Root",overridesResolver:(e,t)=>t.root})({});var S=o.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiTextField"}),{autoComplete:o,autoFocus:s=!1,children:d,className:p,color:f="primary",defaultValue:h,disabled:x=!1,error:S=!1,FormHelperTextProps:k,fullWidth:M=!1,helperText:R,id:$,InputLabelProps:E,inputProps:P,InputProps:W,inputRef:N,label:T,maxRows:z,minRows:_,multiline:F=!1,name:Y,onBlur:H,onChange:X,onFocus:B,placeholder:A,required:V=!1,rows:I,select:j=!1,SelectProps:L,type:O,value:q,variant:D="outlined"}=n,G=(0,i.Z)(n,b),J=(0,r.Z)({},n,{autoFocus:s,color:f,disabled:x,error:S,fullWidth:M,multiline:F,required:V,select:j,variant:D}),K=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"]},w,t)})(J);const U={};"outlined"===D&&(E&&"undefined"!==typeof E.shrink&&(U.notched=E.shrink),U.label=T),j&&(L&&L.native||(U.id=void 0),U["aria-describedby"]=void 0);const Q=(0,c.Z)($),ee=R&&Q?`${Q}-helper-text`:void 0,te=T&&Q?`${Q}-label`:void 0,ne=Z[D],re=(0,y.jsx)(ne,(0,r.Z)({"aria-describedby":ee,autoComplete:o,autoFocus:s,defaultValue:h,fullWidth:M,multiline:F,name:Y,rows:I,maxRows:z,minRows:_,type:O,value:q,id:Q,inputRef:N,onBlur:H,onChange:X,onFocus:B,placeholder:A,inputProps:P},U,W));return(0,y.jsxs)(C,(0,r.Z)({className:(0,a.Z)(K.root,p),disabled:x,error:S,fullWidth:M,ref:t,required:V,color:f,variant:D,ownerState:J},G,{children:[null!=T&&""!==T&&(0,y.jsx)(m.Z,(0,r.Z)({htmlFor:Q,id:te},E,{children:T})),j?(0,y.jsx)(g.Z,(0,r.Z)({"aria-describedby":ee,id:Q,labelId:te,value:q,input:re},L,{children:d})):re,R&&(0,y.jsx)(v.Z,(0,r.Z)({id:ee},k,{children:R}))]}))}))},15861:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(63366),i=n(87462),o=n(67294),a=n(86010),l=n(39707),c=n(94780),s=n(90948),u=n(71657),d=n(98216),p=n(34867);function f(e){return(0,p.Z)("MuiTypography",e)}(0,n(1588).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var m=n(85893);const h=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],v=(0,s.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],"inherit"!==n.align&&t[`align${(0,d.Z)(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,i.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),g={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},x={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var w=o.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiTypography"}),o=(e=>x[e]||e)(n.color),s=(0,l.Z)((0,i.Z)({},n,{color:o})),{align:p="inherit",className:w,component:y,gutterBottom:b=!1,noWrap:Z=!1,paragraph:C=!1,variant:S="body1",variantMapping:k=g}=s,M=(0,r.Z)(s,h),R=(0,i.Z)({},s,{align:p,color:o,className:w,component:y,gutterBottom:b,noWrap:Z,paragraph:C,variant:S,variantMapping:k}),$=y||(C?"p":k[S]||g[S])||"span",E=(e=>{const{align:t,gutterBottom:n,noWrap:r,paragraph:i,variant:o,classes:a}=e,l={root:["root",o,"inherit"!==e.align&&`align${(0,d.Z)(t)}`,n&&"gutterBottom",r&&"noWrap",i&&"paragraph"]};return(0,c.Z)(l,f,a)})(R);return(0,m.jsx)(v,(0,i.Z)({as:$,ref:t,ownerState:R,className:(0,a.Z)(E.root,w)},M))}))},71455:function(e,t,n){n.d(t,{HI:function(){return I},TV:function(){return V}});var r=n(67294),i=n(73935);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(i[n]=e[n]);return i}function l(e){var t=(0,r.useRef)({fn:e,curr:void 0}).current;if(t.fn=e,!t.curr){var n=Object.create(null);Object.keys(e).forEach((function(e){n[e]=function(){var n;return(n=t.fn[e]).call.apply(n,[t.fn].concat([].slice.call(arguments)))}})),t.curr=n}return t.curr}function c(e){return(0,r.useReducer)((function(e,t){return o({},e,"function"==typeof t?t(e):t)}),e)}var s=(0,r.createContext)(void 0),u="undefined"!=typeof window&&"ontouchstart"in window,d=function(e,t,n){return Math.max(Math.min(e,n),t)},p=function(e,t,n){return void 0===t&&(t=0),void 0===n&&(n=0),d(e,1*(1-n),Math.max(6,t)*(1+n))},f="undefined"==typeof window||/ServerSideRendering/.test(navigator&&navigator.userAgent)?r.useEffect:r.useLayoutEffect;function m(e,t,n){var i=(0,r.useRef)(t);i.current=t,(0,r.useEffect)((function(){function t(e){i.current(e)}return e&&window.addEventListener(e,t,n),function(){e&&window.removeEventListener(e,t)}}),[e])}var h=["container"];function v(e){var t=e.container,n=void 0===t?document.body:t,l=a(e,h);return(0,i.createPortal)(r.createElement("div",o({},l)),n)}function g(e){return r.createElement("svg",o({width:"44",height:"44",viewBox:"0 0 768 768"},e),r.createElement("path",{d:"M607.5 205.5l-178.5 178.5 178.5 178.5-45 45-178.5-178.5-178.5 178.5-45-45 178.5-178.5-178.5-178.5 45-45 178.5 178.5 178.5-178.5z"}))}function x(e){return r.createElement("svg",o({width:"44",height:"44",viewBox:"0 0 768 768"},e),r.createElement("path",{d:"M640.5 352.5v63h-390l178.5 180-45 45-256.5-256.5 256.5-256.5 45 45-178.5 180h390z"}))}function w(e){return r.createElement("svg",o({width:"44",height:"44",viewBox:"0 0 768 768"},e),r.createElement("path",{d:"M384 127.5l256.5 256.5-256.5 256.5-45-45 178.5-180h-390v-63h390l-178.5-180z"}))}function y(){return(0,r.useEffect)((function(){var e=document.body.style,t=e.overflow;return e.overflow="hidden",function(){e.overflow=t}}),[]),null}function b(e){var t=e.touches[0],n=t.clientX,r=t.clientY;if(e.touches.length>=2){var i=e.touches[1],o=i.clientX,a=i.clientY;return[(n+o)/2,(r+a)/2,Math.sqrt(Math.pow(o-n,2)+Math.pow(a-r,2))]}return[n,r,0]}var Z=function(e,t,n,r){var i=n*t,o=(i-r)/2,a=void 0,l=e;return i<=r?(a=1,l=0):e>0&&o-e<=0?(a=2,l=o):e<0&&o+e<=0&&(a=3,l=-o),[a,l]};function C(e,t,n,r,i,o,a,l,c,s){void 0===a&&(a=innerWidth/2),void 0===l&&(l=innerHeight/2),void 0===c&&(c=0),void 0===s&&(s=0);var u=Z(e,o,n,innerWidth)[0],d=Z(t,o,r,innerHeight),p=innerWidth/2,f=innerHeight/2;return{x:a-o/i*(a-(p+e))-p+(r/n>=3&&n*o===innerWidth?0:u?c/2:c),y:l-o/i*(l-(f+t))-f+(d[0]?s/2:s),lastCX:a,lastCY:l}}function S(e,t,n){var r=e%180!=0;return r?[n,t,r]:[t,n,r]}function k(e,t,n){var r=S(n,innerWidth,innerHeight),i=r[0],o=r[1],a=0,l=i,c=o,s=e/t*o,u=t/e*i;return e<i&&t<o?(l=e,c=t):e<i&&t>=o?l=s:e>=i&&t<o||e/t>i/o?c=u:t/e>=3&&!r[2]?a=((c=u)-o)/2:l=s,{width:l,height:c,x:0,y:a,pause:!0}}function M(e,t){var n=t.leading,i=void 0!==n&&n,o=t.maxWait,a=t.wait,l=void 0===a?o||0:a,c=(0,r.useRef)(e);c.current=e;var s=(0,r.useRef)(0),u=(0,r.useRef)(),d=function(){return u.current&&clearTimeout(u.current)},p=(0,r.useCallback)((function(){var e=[].slice.call(arguments),t=Date.now();function n(){s.current=t,d(),c.current.apply(null,e)}var r=s.current,a=t-r;if(0===r&&(i&&n(),s.current=t),void 0!==o){if(a>o)return void n()}else a<l&&(s.current=t);d(),u.current=setTimeout((function(){n(),s.current=0}),l)}),[l,o,i]);return p.cancel=d,p}var R=function(e,t,n){return E(e,t,n,100,(function(e){return e}),(function(){return E(t,e,n)}))},$=function(e){return 1-Math.pow(1-e,4)};function E(e,t,n,r,i,o){void 0===r&&(r=400),void 0===i&&(i=$);var a=t-e;if(0!==a){var l=Date.now(),c=0,s=function(){var t=Math.min(1,(Date.now()-l)/r);n(e+i(t)*a)&&t<1?u():(cancelAnimationFrame(c),t>=1&&o&&o())};u()}function u(){c=requestAnimationFrame(s)}}var P={T:0,L:0,W:0,H:0,FIT:void 0},W=function(){var e=(0,r.useRef)(!1);return(0,r.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),e},N=["className"];function T(e){var t=e.className,n=a(e,N);return r.createElement("div",o({className:"PhotoView__Spinner "+t},n),r.createElement("svg",{viewBox:"0 0 32 32",width:"36",height:"36",fill:"white"},r.createElement("path",{opacity:".25",d:"M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"}),r.createElement("path",{d:"M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"})))}var z=["src","loaded","broken","className","onPhotoLoad","loadingElement","brokenElement"];function _(e){var t=e.src,n=e.loaded,i=e.broken,l=e.className,c=e.onPhotoLoad,s=e.loadingElement,u=e.brokenElement,d=a(e,z),p=W();return t&&!i?r.createElement(r.Fragment,null,r.createElement("img",o({className:"PhotoView__Photo"+(l?" "+l:""),src:t,onLoad:function(e){var t=e.target;p.current&&c({loaded:!0,naturalWidth:t.naturalWidth,naturalHeight:t.naturalHeight})},onError:function(){p.current&&c({broken:!0})},alt:""},d)),!n&&(r.createElement("span",{className:"PhotoView__icon"},s)||r.createElement(T,{className:"PhotoView__icon"}))):u?r.createElement("span",{className:"PhotoView__icon"},"function"==typeof u?u({src:t}):u):null}var F={naturalWidth:void 0,naturalHeight:void 0,width:void 0,height:void 0,loaded:void 0,broken:!1,x:0,y:0,touched:!1,maskTouched:!1,rotate:0,scale:1,CX:0,CY:0,lastX:0,lastY:0,lastCX:0,lastCY:0,lastScale:1,touchTime:0,touchLength:0,pause:!0,stopRaf:!0,reach:void 0};function Y(e){var t=e.item,n=t.src,i=t.render,a=t.width,s=void 0===a?0:a,d=t.height,h=void 0===d?0:d,v=t.originRef,g=e.visible,x=e.speed,w=e.easing,y=e.wrapClassName,$=e.className,N=e.style,T=e.loadingElement,z=e.brokenElement,Y=e.onPhotoTap,H=e.onMaskTap,X=e.onReachMove,B=e.onReachUp,A=e.onPhotoResize,V=e.isActive,I=e.expose,j=c(F),L=j[0],O=j[1],q=(0,r.useRef)(0),D=W(),G=L.naturalWidth,J=void 0===G?s:G,K=L.naturalHeight,U=void 0===K?h:K,Q=L.width,ee=void 0===Q?s:Q,te=L.height,ne=void 0===te?h:te,re=L.loaded,ie=void 0===re?!n:re,oe=L.broken,ae=L.x,le=L.y,ce=L.touched,se=L.stopRaf,ue=L.maskTouched,de=L.rotate,pe=L.scale,fe=L.CX,me=L.CY,he=L.lastX,ve=L.lastY,ge=L.lastCX,xe=L.lastCY,we=L.lastScale,ye=L.touchTime,be=L.touchLength,Ze=L.pause,Ce=L.reach,Se=l({onScale:function(e){return ke(p(e))},onRotate:function(e){de!==e&&(I({rotate:e}),O(o({rotate:e},k(J,U,e))))}});function ke(e,t,n){pe!==e&&(I({scale:e}),O(o({scale:e},C(ae,le,ee,ne,pe,e,t,n),e<=1&&{x:0,y:0})))}var Me=M((function(e,t,n){if(void 0===n&&(n=0),(ce||ue)&&V){var r=S(de,ee,ne),i=r[0],a=r[1];if(0===n&&0===q.current){var l=Math.abs(e-fe)<=20,c=Math.abs(t-me)<=20;if(l&&c)return void O({lastCX:e,lastCY:t});q.current=l?t>me?3:2:1}var s=e-ge,u=t-xe,d=void 0;if(0===n){var f=Z(s+he,pe,i,innerWidth)[0],m=Z(u+ve,pe,a,innerHeight);d=function(e,t,n,r){return t&&1===e||"x"===r?"x":n&&e>1||"y"===r?"y":void 0}(q.current,f,m[0],Ce),void 0!==d&&X(d,e,t,pe)}if("x"===d||ue)return void O({reach:"x"});var h=p(pe+(n-be)/100/2*pe,J/ee,.2);I({scale:h}),O(o({touchLength:n,reach:d,scale:h},C(ae,le,ee,ne,pe,h,e,t,s,u)))}}),{maxWait:8});function Re(e){return!se&&!ce&&(D.current&&O(o({},e,{pause:g})),D.current)}var $e,Ee,Pe,We,Ne,Te,ze,_e,Fe=(Ne=function(e){return Re({x:e})},Te=function(e){return Re({y:e})},ze=function(e){return D.current&&(I({scale:e}),O({scale:e})),!ce&&D.current},_e=l({X:function(e){return Ne(e)},Y:function(e){return Te(e)},S:function(e){return ze(e)}}),function(e,t,n,r,i,o,a,l,c,s,u){var d=S(s,i,o),p=d[0],f=d[1],m=Z(e,l,p,innerWidth),h=m[0],v=m[1],g=Z(t,l,f,innerHeight),x=g[0],w=g[1],y=Date.now()-u;if(y>=200||l!=a||Math.abs(c-a)>1){var b=C(e,t,i,o,a,l),k=b.x,M=b.y,$=h?v:k!==e?k:null,P=x?w:M!==t?M:null;return null!==$&&E(e,$,_e.X),null!==P&&E(t,P,_e.Y),void(l!=a&&E(a,l,_e.S))}var W=(e-n)/y,N=(t-r)/y,T=Math.sqrt(Math.pow(W,2)+Math.pow(N,2)),z=!1,_=!1;!function(e,t){var n=e,r=0,i=void 0,o=0,a=function(o){i||(i=o);var a=o-i,s=Math.sign(e),u=-.001*s,d=Math.sign(-n)*Math.pow(n,2)*2e-4,p=n*a+(u+d)*Math.pow(a,2)/2;r+=p,i=o,s*(n+=(u+d)*a)<=0?c():t(r)?l():c()};function l(){o=requestAnimationFrame(a)}function c(){cancelAnimationFrame(o)}l()}(T,(function(n){var r=e+n*(W/T),i=t+n*(N/T),o=Z(r,a,p,innerWidth),l=o[0],c=o[1],s=Z(i,a,f,innerHeight),u=s[0],d=s[1];if(l&&!z&&(z=!0,h?E(r,c,_e.X):R(c,r+(r-c),_e.X)),u&&!_&&(_=!0,x?E(i,d,_e.Y):R(d,i+(i-d),_e.Y)),z&&_)return!1;var m=z||_e.X(c),v=_||_e.Y(d);return m&&v}))}),Ye=($e=Y,Ee=function(e,t){Ce||ke(1!==pe?1:Math.max(2,J/ee),e,t)},Pe=(0,r.useRef)(0),We=M((function(){Pe.current=0,$e.apply(void 0,[].slice.call(arguments))}),{wait:300}),function(){var e=[].slice.call(arguments);Pe.current+=1,We.apply(void 0,e),Pe.current>=2&&(We.cancel(),Pe.current=0,Ee.apply(void 0,e))});function He(e,t){if(q.current=0,(ce||ue)&&V){O({touched:!1,maskTouched:!1,pause:!1,stopRaf:!1,reach:void 0});var n=p(pe,J/ee);if(Fe(ae,le,he,ve,ee,ne,pe,n,we,de,ye),B(e,t),fe===e&&me===t){if(ce)return void Ye(e,t);ue&&H(e,t)}}}function Xe(e,t,n){void 0===n&&(n=0),O({touched:!0,CX:e,CY:t,lastCX:e,lastCY:t,lastX:ae,lastY:le,lastScale:pe,touchLength:n,touchTime:Date.now()})}function Be(e){O({maskTouched:!0,CX:e.clientX,CY:e.clientY,lastX:ae,lastY:le})}m(u?void 0:"mousemove",(function(e){e.preventDefault(),Me(e.clientX,e.clientY)})),m(u?void 0:"mouseup",(function(e){He(e.clientX,e.clientY)})),m(u?"touchmove":void 0,(function(e){e.preventDefault();var t=b(e);Me.apply(void 0,t)}),{passive:!1}),m(u?"touchend":void 0,(function(e){var t=e.changedTouches[0];He(t.clientX,t.clientY)}),{passive:!1}),m("resize",M((function(){ie&&!ce&&(O(k(J,U,de)),A())}),{maxWait:8})),f((function(){V&&I(o({scale:pe,rotate:de},Se))}),[V]);var Ae=function(e,t,n,i,o,a,s,u,d,p){var m=function(e,t,n,i,o){var a=(0,r.useRef)(!1),l=c({lead:!0,scale:n}),s=l[0],u=s.lead,d=s.scale,p=l[1],m=M((function(e){try{return o(!0),p({lead:!1,scale:e}),Promise.resolve()}catch(e){return Promise.reject(e)}}),{wait:i});return f((function(){a.current?(o(!1),p({lead:!0}),m(n)):a.current=!0}),[n]),u?[e*d,t*d,n/d]:[e*n,t*n,1]}(a,s,u,d,p),h=m[0],v=m[1],g=m[2],x=function(e,t,n,i,o){var a=(0,r.useState)(P),c=a[0],s=a[1],u=(0,r.useState)(0),d=u[0],p=u[1],f=(0,r.useRef)(),m=l({OK:function(){return e&&p(4)}});function h(e){o(!1),p(e)}return(0,r.useEffect)((function(){if(f.current||(f.current=Date.now()),n){if(function(e,t){var n=e&&e.current;if(n&&1===n.nodeType){var r=n.getBoundingClientRect();t({T:r.top,L:r.left,W:r.width,H:r.height,FIT:"IMG"===n.tagName?getComputedStyle(n).objectFit:void 0})}}(t,s),e)return Date.now()-f.current<250?(p(1),requestAnimationFrame((function(){p(2),requestAnimationFrame((function(){return h(3)}))})),void setTimeout(m.OK,i)):void p(4);h(5)}}),[e,n]),[d,c]}(e,t,n,d,p),w=x[0],y=x[1],b=y.W,Z=y.FIT,C=innerWidth/2,S=innerHeight/2,k=w<3||w>4;return[k?b?y.L:C:i+(C-a*u/2),k?b?y.T:S:o+(S-s*u/2),h,k&&Z?h*(y.H/b):v,0===w?g:k?b/(a*u)||.01:g,k?Z?1:0:1,w,Z]}(g,v,ie,ae,le,ee,ne,pe,x,(function(e){return O({pause:e})})),Ve=Ae[4],Ie=Ae[6],je="transform "+x+"ms "+w,Le={className:$,onMouseDown:u?void 0:function(e){e.stopPropagation(),0===e.button&&Xe(e.clientX,e.clientY,0)},onTouchStart:u?function(e){e.stopPropagation(),Xe.apply(void 0,b(e))}:void 0,onWheel:function(e){if(!Ce){var t=p(pe-e.deltaY/100/2,J/ee);O({stopRaf:!0}),ke(t,e.clientX,e.clientY)}},style:{width:Ae[2],height:Ae[3],opacity:Ae[5],objectFit:4===Ie?void 0:Ae[7],transform:de?"rotate("+de+"deg)":void 0,transition:Ie>2?je+", opacity "+x+"ms ease, height "+(Ie<4?x/2:Ie>4?x:0)+"ms "+w:void 0}};return r.createElement("div",{className:"PhotoView__PhotoWrap"+(y?" "+y:""),style:N,onMouseDown:!u&&V?Be:void 0,onTouchStart:u&&V?function(e){return Be(e.touches[0])}:void 0},r.createElement("div",{className:"PhotoView__PhotoBox",style:{transform:"matrix("+Ve+", 0, 0, "+Ve+", "+Ae[0]+", "+Ae[1]+")",transition:ce||Ze?void 0:je,willChange:V?"transform":void 0}},n?r.createElement(_,o({src:n,loaded:ie,broken:oe},Le,{onPhotoLoad:function(e){O(o({},e,e.loaded&&k(e.naturalWidth||0,e.naturalHeight||0,de)))},loadingElement:T,brokenElement:z})):i&&i({attrs:Le,scale:Ve,rotate:de})))}var H={x:0,touched:!1,pause:!1,lastCX:void 0,lastCY:void 0,bg:void 0,lastBg:void 0,overlay:!0,minimal:!0,scale:1,rotate:0};function X(e){var t=e.loop,n=void 0===t?3:t,i=e.speed,o=e.easing,a=e.photoClosable,s=e.maskClosable,p=void 0===s||s,h=e.maskOpacity,b=void 0===h?1:h,Z=e.pullClosable,C=void 0===Z||Z,S=e.bannerVisible,k=void 0===S||S,M=e.overlayRender,R=e.toolbarRender,$=e.className,E=e.maskClassName,P=e.photoClassName,W=e.photoWrapClassName,N=e.loadingElement,T=e.brokenElement,z=e.images,_=e.index,F=void 0===_?0:_,X=e.onIndexChange,B=e.visible,A=e.onClose,V=e.afterClose,I=e.portalContainer,j=c(H),L=j[0],O=j[1],q=(0,r.useState)(0),D=q[0],G=q[1],J=L.x,K=L.touched,U=L.pause,Q=L.lastCX,ee=L.lastCY,te=L.bg,ne=void 0===te?b:te,re=L.lastBg,ie=L.overlay,oe=L.minimal,ae=L.scale,le=L.rotate,ce=L.onScale,se=L.onRotate,ue=e.hasOwnProperty("index"),de=ue?F:D,pe=ue?X:G,fe=(0,r.useRef)(de),me=z.length,he=z[de],ve="boolean"==typeof n?n:me>n,ge=function(e,t){var n=(0,r.useReducer)((function(e){return!e}),!1)[1],i=(0,r.useRef)(0),o=function(t,n){var o=(0,r.useRef)(t);function a(e){o.current=e}return(0,r.useMemo)((function(){var t;t=a,e?(t(e),i.current=1):i.current=2}),[t]),[o.current,a]}(e),a=o[1];return[o[0],i.current,function(){n(),2===i.current&&(a(!1),t&&t()),i.current=0}]}(B,V),xe=ge[0],we=ge[1],ye=ge[2];f((function(){if(xe)return O({pause:!0,x:de*-(innerWidth+20)}),void(fe.current=de);O(H)}),[xe]);var be=l({close:function(e){se&&se(0),O({overlay:!0,lastBg:ne}),A(e)},changeIndex:function(e,t){void 0===t&&(t=!1);var n=ve?fe.current+(e-de):e,r=me-1,i=d(n,0,r),o=ve?n:i,a=innerWidth+20;O({touched:!1,lastCX:void 0,lastCY:void 0,x:-a*o,pause:t}),fe.current=o,pe&&pe(ve?e<0?r:e>r?0:e:i)}}),Ze=be.close,Ce=be.changeIndex;function Se(e){return e?Ze():O({overlay:!ie})}function ke(){O({x:-(innerWidth+20)*de,lastCX:void 0,lastCY:void 0,pause:!0}),fe.current=de}function Me(e,t,n,r){"x"===e?function(e){if(void 0!==Q){var t=e-Q,n=t;!ve&&(0===de&&t>0||de===me-1&&t<0)&&(n=t/2),O({touched:!0,lastCX:Q,x:-(innerWidth+20)*fe.current+n,pause:!1})}else O({touched:!0,lastCX:e,x:J,pause:!1})}(t):"y"===e&&function(e,t){if(void 0!==ee){var n=null===b?null:d(b,.01,b-Math.abs(e-ee)/100/4);O({touched:!0,lastCY:ee,bg:1===t?n:b,minimal:1===t})}else O({touched:!0,lastCY:e,bg:ne,minimal:!0})}(n,r)}function Re(e,t){var n=e-(null!=Q?Q:e),r=t-(null!=ee?ee:t),i=!1;if(n<-40)Ce(de+1);else if(n>40)Ce(de-1);else{var o=-(innerWidth+20)*fe.current;Math.abs(r)>100&&oe&&C&&(i=!0,Ze()),O({touched:!1,x:o,lastCX:void 0,lastCY:void 0,bg:b,overlay:!!i||ie})}}m("keydown",(function(e){if(B)switch(e.key){case"ArrowLeft":Ce(de-1,!0);break;case"ArrowRight":Ce(de+1,!0);break;case"Escape":Ze()}}));var $e,Ee,Pe,We=($e=z,Ee=de,Pe=ve,(0,r.useMemo)((function(){var e=$e.length;return Pe?$e.concat($e).concat($e).slice(e+Ee-1,e+Ee+2):$e.slice(Math.max(Ee-1,0),Math.min(Ee+2,e+1))}),[$e,Ee,Pe]));if(!xe)return null;var Ne=ie&&!we,Te=B?ne:re,ze=ce&&se&&{images:z,index:de,visible:B,onClose:Ze,onIndexChange:Ce,overlayVisible:Ne,overlay:he&&he.overlay,scale:ae,rotate:le,onScale:ce,onRotate:se},_e=i?i(we):400,Fe=o?o(we):"cubic-bezier(0.25, 0.8, 0.25, 1)",Ye=i?i(3):600,He=o?o(3):"cubic-bezier(0.25, 0.8, 0.25, 1)";return r.createElement(v,{className:"PhotoView-Portal"+(Ne?"":" PhotoView-Slider__clean")+(B?"":" PhotoView-Slider__willClose")+($?" "+$:""),role:"dialog",onClick:function(e){return e.stopPropagation()},container:I},B&&r.createElement(y,null),r.createElement("div",{className:"PhotoView-Slider__Backdrop"+(E?" "+E:"")+(1===we?" PhotoView-Slider__fadeIn":2===we?" PhotoView-Slider__fadeOut":""),style:{background:Te?"rgba(0, 0, 0, "+Te+")":void 0,transitionTimingFunction:Fe,transitionDuration:(K?0:_e)+"ms",animationDuration:_e+"ms"},onAnimationEnd:ye}),k&&r.createElement("div",{className:"PhotoView-Slider__BannerWrap"},r.createElement("div",{className:"PhotoView-Slider__Counter"},de+1," / ",me),r.createElement("div",{className:"PhotoView-Slider__BannerRight"},R&&ze&&R(ze),r.createElement(g,{className:"PhotoView-Slider__toolbarIcon",onClick:Ze}))),We.map((function(e,t){var n=ve||0!==de?fe.current-1+t:de+t;return r.createElement(Y,{key:ve?e.key+"/"+e.src+"/"+n:e.key,item:e,speed:_e,easing:Fe,visible:B,onReachMove:Me,onReachUp:Re,onPhotoTap:function(){return Se(a)},onMaskTap:function(){return Se(p)},wrapClassName:W,className:P,style:{left:(innerWidth+20)*n+"px",transform:"translate3d("+J+"px, 0px, 0)",transition:K||U?void 0:"transform "+Ye+"ms "+He},loadingElement:N,brokenElement:T,onPhotoResize:ke,isActive:(he&&he.key)===e.key,expose:O})})),!u&&k&&r.createElement(r.Fragment,null,(ve||0!==de)&&r.createElement("div",{className:"PhotoView-Slider__ArrowLeft",onClick:function(){return Ce(de-1,!0)}},r.createElement(x,null)),(ve||de+1<me)&&r.createElement("div",{className:"PhotoView-Slider__ArrowRight",onClick:function(){return Ce(de+1,!0)}},r.createElement(w,null))),M&&ze&&r.createElement("div",{className:"PhotoView-Slider__Overlay"},M(ze)))}var B=["children","onIndexChange","onVisibleChange"],A={images:[],visible:!1,index:0};function V(e){var t=e.children,n=e.onIndexChange,i=e.onVisibleChange,u=a(e,B),d=c(A),p=d[0],f=d[1],m=(0,r.useRef)(0),h=p.images,v=p.visible,g=p.index,x=l({nextId:function(){return m.current+=1},update:function(e){var t=h.findIndex((function(t){return t.key===e.key}));if(t>-1){var n=h.slice();return n.splice(t,1,e),void f({images:n})}f((function(t){return{images:t.images.concat(e)}}))},remove:function(e){f((function(t){var n=t.images.filter((function(t){return t.key!==e}));return{images:n,index:Math.min(n.length-1,g)}}))},show:function(e){var t=h.findIndex((function(t){return t.key===e}));f({visible:!0,index:t}),i&&i(!0,t,p)}}),w=l({close:function(){f({visible:!1}),i&&i(!1,g,p)},changeIndex:function(e){f({index:e}),n&&n(e,p)}}),y=(0,r.useMemo)((function(){return o({},p,x)}),[p,x]);return r.createElement(s.Provider,{value:y},t,r.createElement(X,o({images:h,visible:v,index:g,onIndexChange:w.changeIndex,onClose:w.close},u)))}var I=function(e){var t,n,i=e.src,a=e.render,c=e.overlay,u=e.width,d=e.height,p=e.triggers,f=void 0===p?["onClick"]:p,m=e.children,h=(0,r.useContext)(s),v=(t=function(){return h.nextId()},(n=(0,r.useRef)({sign:!1,fn:void 0}).current).sign||(n.sign=!0,n.fn=t()),n.fn),g=(0,r.useRef)(null);(0,r.useEffect)((function(){return function(){h.remove(v)}}),[]);var x=l({render:function(e){return a&&a(e)},show:function(e,t){h.show(v),function(e,t){if(m){var n=m.props[e];n&&n(t)}}(e,t)}}),w=(0,r.useMemo)((function(){var e={};return f.forEach((function(t){e[t]=x.show.bind(null,t)})),e}),[]);return(0,r.useEffect)((function(){h.update({key:v,src:i,originRef:g,render:x.render,overlay:c,width:u,height:d})}),[i]),m?r.Children.only((0,r.cloneElement)(m,o({},w,{ref:g}))):null}}}]);