(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6940],{67720:function(e,t,r){"use strict";var i=r(63366),o=r(87462),a=r(67294),n=r(93680),l=r(94780),c=r(41796),s=r(90948),d=r(71657),p=r(35097),h=r(85893);const u=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],g=(0,s.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,"vertical"===r.orientation&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&"vertical"===r.orientation&&t.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignLeft]}})((({theme:e,ownerState:t})=>(0,o.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:(0,c.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"})),(({theme:e,ownerState:t})=>(0,o.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}})),(({theme:e,ownerState:t})=>(0,o.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(e.vars||e).palette.divider}`,transform:"translateX(0%)"}})),(({ownerState:e})=>(0,o.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),f=(0,s.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.wrapper,"vertical"===r.orientation&&t.wrapperVertical]}})((({theme:e,ownerState:t})=>(0,o.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`}))),v=a.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiDivider"}),{absolute:a=!1,children:c,className:s,component:v=(c?"div":"hr"),flexItem:m=!1,light:b=!1,orientation:A="horizontal",role:w=("hr"!==v?"separator":void 0),textAlign:R="center",variant:Z="fullWidth"}=r,x=(0,i.Z)(r,u),I=(0,o.Z)({},r,{absolute:a,component:v,flexItem:m,light:b,orientation:A,role:w,textAlign:R,variant:Z}),E=(e=>{const{absolute:t,children:r,classes:i,flexItem:o,light:a,orientation:n,textAlign:c,variant:s}=e,d={root:["root",t&&"absolute",s,a&&"light","vertical"===n&&"vertical",o&&"flexItem",r&&"withChildren",r&&"vertical"===n&&"withChildrenVertical","right"===c&&"vertical"!==n&&"textAlignRight","left"===c&&"vertical"!==n&&"textAlignLeft"],wrapper:["wrapper","vertical"===n&&"wrapperVertical"]};return(0,l.Z)(d,p.V,i)})(I);return(0,h.jsx)(g,(0,o.Z)({as:v,className:(0,n.Z)(E.root,s),role:w,ref:t,ownerState:I},x,{children:c?(0,h.jsx)(f,{className:E.wrapper,ownerState:I,children:c}):null}))}));t.Z=v},35097:function(e,t,r){"use strict";r.d(t,{V:function(){return o}});var i=r(34867);function o(e){return(0,i.Z)("MuiDivider",e)}const a=(0,r(1588).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=a},93946:function(e,t,r){"use strict";r.d(t,{Z:function(){return A}});var i=r(63366),o=r(87462),a=r(67294),n=r(93680),l=r(94780),c=r(41796),s=r(90948),d=r(71657),p=r(49990),h=r(98216),u=r(34867);function g(e){return(0,u.Z)("MuiIconButton",e)}var f=(0,r(1588).Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),v=r(85893);const m=["edge","children","className","color","disabled","disableFocusRipple","size"],b=(0,s.ZP)(p.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,"default"!==r.color&&t[`color${(0,h.Z)(r.color)}`],r.edge&&t[`edge${(0,h.Z)(r.edge)}`],t[`size${(0,h.Z)(r.size)}`]]}})((({theme:e,ownerState:t})=>(0,o.Z)({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.active} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})),(({theme:e,ownerState:t})=>(0,o.Z)({},"inherit"===t.color&&{color:"inherit"},"inherit"!==t.color&&"default"!==t.color&&(0,o.Z)({color:(e.vars||e).palette[t.color].main},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}),"small"===t.size&&{padding:5,fontSize:e.typography.pxToRem(18)},"large"===t.size&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${f.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})));var A=a.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiIconButton"}),{edge:a=!1,children:c,className:s,color:p="default",disabled:u=!1,disableFocusRipple:f=!1,size:A="medium"}=r,w=(0,i.Z)(r,m),R=(0,o.Z)({},r,{edge:a,color:p,disabled:u,disableFocusRipple:f,size:A}),Z=(e=>{const{classes:t,disabled:r,color:i,edge:o,size:a}=e,n={root:["root",r&&"disabled","default"!==i&&`color${(0,h.Z)(i)}`,o&&`edge${(0,h.Z)(o)}`,`size${(0,h.Z)(a)}`]};return(0,l.Z)(n,g,t)})(R);return(0,v.jsx)(b,(0,o.Z)({className:(0,n.Z)(Z.root,s),centerRipple:!0,focusRipple:!f,disabled:u,ref:t,ownerState:R},w,{children:c}))}))},90258:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/agency/components/UserTable",function(){return r(44773)}])},34753:function(e,t){"use strict";t.Z={project:{AGRA:"agra",HAJIPUR:"hajipur"},role:{ADMIN:"ADMIN",AGENT:"AGENT",USER:"USER"},membership:{ADVANCE:"ADVANCE",BASIC:"BASIC"},status:{AGENT_APPROVED:"AGENT_APPROVED",APPROVED:"APPROVED",NOT_INITIALIZED:"NOT_INITIALIZED",ONGOING:"ONGOING",PENDING:"PENDING",REJECTED:"REJECTED",SUBMITTED:"SUBMITTED"},amount:{beforeFifteenthAugustBasicAmount:1e3,beforeFifteenthAugustAdvanceAmount:1e5,afterFifteenthAugustBasicAmount:2e3,afterFifteenthAugustAdvanceAmount:2e5}}},92703:function(e,t,r){"use strict";var i=r(50414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,n){if(n!==i){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},45697:function(e,t,r){e.exports=r(92703)()},50414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[9774,8244,9990,2817,630,4753,9964,6549,7058,5547,788,8584,6261,5692,7171,8180,2412,4773,2888,179],(function(){return t=90258,e(e.s=t);var t}));var t=e.O();_N_E=t}]);