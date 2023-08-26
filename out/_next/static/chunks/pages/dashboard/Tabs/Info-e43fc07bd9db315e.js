(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6115],{56815:function(e,r,t){"use strict";t.d(r,{Z:function(){return w}});var n=t(63366),i=t(87462),a=t(67294),o=t(93680),l=t(94780),s=t(15704),u=t(74423),c=t(90948),d=t(98216),m=t(34867);function p(e){return(0,m.Z)("MuiFormHelperText",e)}var f,b=(0,t(1588).Z)("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]),g=t(71657),x=t(85893);const h=["children","className","component","disabled","error","filled","focused","margin","required","variant"],v=(0,c.ZP)("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,t.size&&r[`size${(0,d.Z)(t.size)}`],t.contained&&r.contained,t.filled&&r.filled]}})((({theme:e,ownerState:r})=>(0,i.Z)({color:(e.vars||e).palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${b.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${b.error}`]:{color:(e.vars||e).palette.error.main}},"small"===r.size&&{marginTop:4},r.contained&&{marginLeft:14,marginRight:14})));var w=a.forwardRef((function(e,r){const t=(0,g.Z)({props:e,name:"MuiFormHelperText"}),{children:a,className:c,component:m="p"}=t,b=(0,n.Z)(t,h),w=(0,u.Z)(),S=(0,s.Z)({props:t,muiFormControl:w,states:["variant","size","disabled","error","filled","focused","required"]}),Z=(0,i.Z)({},t,{component:m,contained:"filled"===S.variant||"outlined"===S.variant,variant:S.variant,size:S.size,disabled:S.disabled,error:S.error,filled:S.filled,focused:S.focused,required:S.required}),$=(e=>{const{classes:r,contained:t,size:n,disabled:i,error:a,filled:o,focused:s,required:u}=e,c={root:["root",i&&"disabled",a&&"error",n&&`size${(0,d.Z)(n)}`,t&&"contained",s&&"focused",o&&"filled",u&&"required"]};return(0,l.Z)(c,p,r)})(Z);return(0,x.jsx)(v,(0,i.Z)({as:m,ownerState:Z,className:(0,o.Z)($.root,c),ref:r},b,{children:" "===a?f||(f=(0,x.jsx)("span",{className:"notranslate",children:"\u200b"})):a}))}))},86886:function(e,r,t){"use strict";t.d(r,{ZP:function(){return Z}});var n=t(63366),i=t(87462),a=t(67294),o=t(93680),l=t(95408),s=t(39707),u=t(94780),c=t(90948),d=t(71657);var m=a.createContext(),p=t(34867);function f(e){return(0,p.Z)("MuiGrid",e)}const b=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var g=(0,t(1588).Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>`spacing-xs-${e}`)),...["column-reverse","column","row-reverse","row"].map((e=>`direction-xs-${e}`)),...["nowrap","wrap-reverse","wrap"].map((e=>`wrap-xs-${e}`)),...b.map((e=>`grid-xs-${e}`)),...b.map((e=>`grid-sm-${e}`)),...b.map((e=>`grid-md-${e}`)),...b.map((e=>`grid-lg-${e}`)),...b.map((e=>`grid-xl-${e}`))]),x=t(85893);const h=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function v(e){const r=parseFloat(e);return`${r}${String(e).replace(String(r),"")||"px"}`}function w(e,r,t={}){if(!r||!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return[t[`spacing-xs-${String(e)}`]||`spacing-xs-${String(e)}`];const{xs:n,sm:i,md:a,lg:o,xl:l}=e;return[Number(n)>0&&(t[`spacing-xs-${String(n)}`]||`spacing-xs-${String(n)}`),Number(i)>0&&(t[`spacing-sm-${String(i)}`]||`spacing-sm-${String(i)}`),Number(a)>0&&(t[`spacing-md-${String(a)}`]||`spacing-md-${String(a)}`),Number(o)>0&&(t[`spacing-lg-${String(o)}`]||`spacing-lg-${String(o)}`),Number(l)>0&&(t[`spacing-xl-${String(l)}`]||`spacing-xl-${String(l)}`)]}const S=(0,c.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,r)=>{const{container:t,direction:n,item:i,lg:a,md:o,sm:l,spacing:s,wrap:u,xl:c,xs:d,zeroMinWidth:m}=e.ownerState;return[r.root,t&&r.container,i&&r.item,m&&r.zeroMinWidth,...w(s,t,r),"row"!==n&&r[`direction-xs-${String(n)}`],"wrap"!==u&&r[`wrap-xs-${String(u)}`],!1!==d&&r[`grid-xs-${String(d)}`],!1!==l&&r[`grid-sm-${String(l)}`],!1!==o&&r[`grid-md-${String(o)}`],!1!==a&&r[`grid-lg-${String(a)}`],!1!==c&&r[`grid-xl-${String(c)}`]]}})((({ownerState:e})=>(0,i.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})),(function({theme:e,ownerState:r}){const t=(0,l.P$)({values:r.direction,breakpoints:e.breakpoints.values});return(0,l.k9)({theme:e},t,(e=>{const r={flexDirection:e};return 0===e.indexOf("column")&&(r[`& > .${g.item}`]={maxWidth:"none"}),r}))}),(function({theme:e,ownerState:r}){const{container:t,rowSpacing:n}=r;let i={};if(t&&0!==n){const r=(0,l.P$)({values:n,breakpoints:e.breakpoints.values});i=(0,l.k9)({theme:e},r,(r=>{const t=e.spacing(r);return"0px"!==t?{marginTop:`-${v(t)}`,[`& > .${g.item}`]:{paddingTop:v(t)}}:{}}))}return i}),(function({theme:e,ownerState:r}){const{container:t,columnSpacing:n}=r;let i={};if(t&&0!==n){const r=(0,l.P$)({values:n,breakpoints:e.breakpoints.values});i=(0,l.k9)({theme:e},r,(r=>{const t=e.spacing(r);return"0px"!==t?{width:`calc(100% + ${v(t)})`,marginLeft:`-${v(t)}`,[`& > .${g.item}`]:{paddingLeft:v(t)}}:{}}))}return i}),(function({theme:e,ownerState:r}){let t;return e.breakpoints.keys.reduce(((n,a)=>{let o={};if(r[a]&&(t=r[a]),!t)return n;if(!0===t)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===t)o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const s=(0,l.P$)({values:r.columns,breakpoints:e.breakpoints.values}),u="object"===typeof s?s[a]:s;if(void 0===u||null===u)return n;const c=Math.round(t/u*1e8)/1e6+"%";let d={};if(r.container&&r.item&&0!==r.columnSpacing){const t=e.spacing(r.columnSpacing);if("0px"!==t){const e=`calc(${c} + ${v(t)})`;d={flexBasis:e,maxWidth:e}}}o=(0,i.Z)({flexBasis:c,flexGrow:0,maxWidth:c},d)}return 0===e.breakpoints.values[a]?Object.assign(n,o):n[e.breakpoints.up(a)]=o,n}),{})}));var Z=a.forwardRef((function(e,r){const t=(0,d.Z)({props:e,name:"MuiGrid"}),l=(0,s.Z)(t),{className:c,columns:p,columnSpacing:b,component:g="div",container:v=!1,direction:Z="row",item:$=!1,lg:P=!1,md:y=!1,rowSpacing:j,sm:N=!1,spacing:_=0,wrap:M="wrap",xl:k=!1,xs:W=!1,zeroMinWidth:F=!1}=l,z=(0,n.Z)(l,h),R=j||_,T=b||_,C=a.useContext(m),A=v?p||12:C,q=(0,i.Z)({},l,{columns:A,container:v,direction:Z,item:$,lg:P,md:y,sm:N,rowSpacing:R,columnSpacing:T,wrap:M,xl:k,xs:W,zeroMinWidth:F}),O=(e=>{const{classes:r,container:t,direction:n,item:i,lg:a,md:o,sm:l,spacing:s,wrap:c,xl:d,xs:m,zeroMinWidth:p}=e,b={root:["root",t&&"container",i&&"item",p&&"zeroMinWidth",...w(s,t),"row"!==n&&`direction-xs-${String(n)}`,"wrap"!==c&&`wrap-xs-${String(c)}`,!1!==m&&`grid-xs-${String(m)}`,!1!==l&&`grid-sm-${String(l)}`,!1!==o&&`grid-md-${String(o)}`,!1!==a&&`grid-lg-${String(a)}`,!1!==d&&`grid-xl-${String(d)}`]};return(0,u.Z)(b,f,r)})(q);return(0,x.jsx)(m.Provider,{value:A,children:(0,x.jsx)(S,(0,i.Z)({ownerState:q,className:(0,o.Z)(O.root,c),as:g,ref:r},z))})}))},50135:function(e,r,t){"use strict";t.d(r,{Z:function(){return P}});var n=t(87462),i=t(63366),a=t(67294),o=t(93680),l=t(94780),s=t(92996),u=t(90948),c=t(71657),d=t(90089),m=t(78288),p=t(37058),f=t(47312),b=t(94054),g=t(56815),x=t(10315),h=t(34867);function v(e){return(0,h.Z)("MuiTextField",e)}(0,t(1588).Z)("MuiTextField",["root"]);var w=t(85893);const S=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],Z={standard:d.Z,filled:m.Z,outlined:p.Z},$=(0,u.ZP)(b.Z,{name:"MuiTextField",slot:"Root",overridesResolver:(e,r)=>r.root})({});var P=a.forwardRef((function(e,r){const t=(0,c.Z)({props:e,name:"MuiTextField"}),{autoComplete:a,autoFocus:u=!1,children:d,className:m,color:p="primary",defaultValue:b,disabled:h=!1,error:P=!1,FormHelperTextProps:y,fullWidth:j=!1,helperText:N,id:_,InputLabelProps:M,inputProps:k,InputProps:W,inputRef:F,label:z,maxRows:R,minRows:T,multiline:C=!1,name:A,onBlur:q,onChange:O,onFocus:E,placeholder:I,required:B=!1,rows:D,select:G=!1,SelectProps:H,type:L,value:V,variant:U="outlined"}=t,X=(0,i.Z)(t,S),J=(0,n.Z)({},t,{autoFocus:u,color:p,disabled:h,error:P,fullWidth:j,multiline:C,required:B,select:G,variant:U}),K=(e=>{const{classes:r}=e;return(0,l.Z)({root:["root"]},v,r)})(J);const Q={};"outlined"===U&&(M&&"undefined"!==typeof M.shrink&&(Q.notched=M.shrink),Q.label=z),G&&(H&&H.native||(Q.id=void 0),Q["aria-describedby"]=void 0);const Y=(0,s.Z)(_),ee=N&&Y?`${Y}-helper-text`:void 0,re=z&&Y?`${Y}-label`:void 0,te=Z[U],ne=(0,w.jsx)(te,(0,n.Z)({"aria-describedby":ee,autoComplete:a,autoFocus:u,defaultValue:b,fullWidth:j,multiline:C,name:A,rows:D,maxRows:R,minRows:T,type:L,value:V,id:Y,inputRef:F,onBlur:q,onChange:O,onFocus:E,placeholder:I,inputProps:k},Q,W));return(0,w.jsxs)($,(0,n.Z)({className:(0,o.Z)(K.root,m),disabled:h,error:P,fullWidth:j,ref:r,required:B,color:p,variant:U,ownerState:J},X,{children:[null!=z&&""!==z&&(0,w.jsx)(f.Z,(0,n.Z)({htmlFor:Y,id:re},M,{children:z})),G?(0,w.jsx)(x.Z,(0,n.Z)({"aria-describedby":ee,id:Y,labelId:re,value:V,input:ne},H,{children:d})):ne,N&&(0,w.jsx)(g.Z,(0,n.Z)({id:ee},y,{children:N}))]}))}))},96909:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/Tabs/Info",function(){return t(48072)}])},48072:function(e,r,t){"use strict";t.r(r);var n=t(34051),i=t.n(n),a=t(85893),o=t(45477),l=t(46230),s=t(20427),u=t(50319),c=t(8987),d=t(86886),m=t(50135),p=t(87357),f=t(67294),b=t(86501);function g(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function x(e,r,t,n,i,a,o){try{var l=e[a](o),s=l.value}catch(u){return void t(u)}l.done?r(s):Promise.resolve(s).then(n,i)}function h(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function v(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){h(e,r,t[r])}))}return e}function w(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,i,a=[],o=!0,l=!1;try{for(t=t.call(e);!(o=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);o=!0);}catch(s){l=!0,i=s}finally{try{o||null==t.return||t.return()}finally{if(l)throw i}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return g(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return g(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=function(){var e=(0,l.T)(),r=(0,l.C)((function(e){return e.user.data})),t=(0,f.useState)(null),n=t[0],g=t[1],h=(0,f.useState)(null),S=h[0],Z=h[1],$=(0,f.useState)(null),P=$[0],y=$[1],j=(0,f.useState)(null),N=j[0],_=j[1],M=(0,f.useState)(null),k=M[0],W=M[1],F=(0,f.useState)(null),z=F[0],R=F[1],T=(0,f.useState)(!1),C=T[0],A=T[1],q=w((0,u.D)(o.v9),1)[0],O=(0,f.useState)(null),E=O[0],I=O[1],B=(0,f.useState)({mobileNumber:null,AlternateMobileNumber:null,email:null}),D=B[0],G=B[1],H=function(e){return/\S+@\S+\.\S+/.test(e)},L=function(e){return/^\d{10}$/.test(e)},V=function(){var t,a=(t=i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(L(N)){t.next=5;break}return G(v({},D,{mobileNumber:"Please enter a valid mobile number"})),t.abrupt("return");case 5:G(v({},D,{mobileNumber:""}));case 6:if(L(k)){t.next=11;break}return G(v({},D,{AlternateMobileNumber:"Please enter a valid Alternate mobile number"})),t.abrupt("return");case 11:G(v({},D,{AlternateMobileNumber:""}));case 12:if(H(z)){t.next=15;break}return G(v({},D,{email:"Please enter a valid Email"})),t.abrupt("return");case 15:return A(!0),t.prev=16,t.next=19,q({variables:{name:n,father_or_husband_name:S,date_of_birth:P,mobile_number:N,alternate_mobile_number:k,demat_account:E,email:z}});case 19:e((0,s.j2)(v({},r,{name:n,father_or_husband_name:S,date_of_birth:P,mobile_number:N,alternate_mobile_number:k,demat_account:E,email:z}))),b.ZP.success("Details Updated"),t.next=27;break;case 23:t.prev=23,t.t0=t.catch(16),console.log(t.t0.message),b.ZP.error("Email already registered");case 27:A(!1);case 28:case"end":return t.stop()}}),t,null,[[16,23]])})),function(){var e=this,r=arguments;return new Promise((function(n,i){var a=t.apply(e,r);function o(e){x(a,n,i,o,l,"next",e)}function l(e){x(a,n,i,o,l,"throw",e)}o(void 0)}))});return function(){return a.apply(this,arguments)}}();return(0,f.useEffect)((function(){var e;r&&(g(r.name),Z(r.father_or_husband_name),y(null===(e=r.date_of_birth)||void 0===e?void 0:e.slice(0,10)),_(r.mobile_number),W(r.alternate_mobile_number),R(r.email),I(r.demat_account))}),[r]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(d.ZP,{container:!0,p:2,spacing:2,children:[(0,a.jsx)(d.ZP,{item:!0,xs:12,sm:4,children:(0,a.jsx)(m.Z,{required:!0,id:"outlined",label:"Full Name",fullWidth:!0,value:n,variant:"outlined",onChange:function(e){g(e.target.value)}})}),(0,a.jsx)(d.ZP,{item:!0,xs:12,sm:4,children:(0,a.jsx)(m.Z,{required:!0,label:"Father's/Husband's Name",variant:"outlined",fullWidth:!0,value:S,onChange:function(e){Z(e.target.value)}})}),(0,a.jsx)(d.ZP,{item:!0,xs:12,sm:4,children:(0,a.jsx)(m.Z,{required:!0,hidden:!0,label:"Date of Birth",variant:"outlined",fullWidth:!0,placeholder:"",value:P,onChange:function(e){y(e.target.value)}})})]}),(0,a.jsxs)(d.ZP,{container:!0,pr:2,pb:2,pl:2,spacing:2,children:[(0,a.jsxs)(d.ZP,{item:!0,xs:12,sm:4,children:[(0,a.jsx)(m.Z,{required:!0,label:"Mobile Number",variant:"outlined",fullWidth:!0,value:N,onChange:function(e){_(e.target.value),L(e.target.value)?G(v({},D,{mobileNumber:""})):G(v({},D,{mobileNumber:"Please enter a valid mobile number"}))}}),D.mobileNumber&&(0,a.jsx)("p",{children:D.mobileNumber})]}),(0,a.jsxs)(d.ZP,{item:!0,xs:12,sm:4,children:[(0,a.jsx)(m.Z,{required:!0,id:"outlined",label:"Alternate Number",fullWidth:!0,variant:"outlined",value:k,onChange:function(e){W(e.target.value),L(e.target.value)?G(v({},D,{AlternateMobileNumber:""})):G(v({},D,{AlternateMobileNumber:"Please enter a valid Alternate number"}))}}),D.AlternateMobileNumber&&(0,a.jsx)("p",{children:D.AlternateMobileNumber})]}),(0,a.jsxs)(d.ZP,{item:!0,xs:12,sm:4,children:[(0,a.jsx)(m.Z,{required:!0,label:"Email ID",variant:"outlined",fullWidth:!0,value:z,onChange:function(e){R(e.target.value),H(e.target.value)?G(v({},D,{email:null})):G(v({},D,{email:"Please enter a valid Email"}))}}),D.email&&(0,a.jsx)("p",{children:D.email})]})]}),(0,a.jsxs)(d.ZP,{container:!0,p:2,spacing:2,children:["APPROVED"===(null===r||void 0===r?void 0:r.kyc)?null:(0,a.jsx)(d.ZP,{item:!0,xs:4,children:(0,a.jsx)(p.Z,{component:"form",children:(0,a.jsx)(c.Z,{loading:C,disabled:D.AlternateMobileNumber||D.email||D.mobileNumber,fullWidth:!0,variant:"contained",onClick:function(){V()},children:"Submit"})})}),(0,a.jsx)(b.x7,{position:"bottom-center",reverseOrder:!1}),(0,a.jsx)(d.ZP,{item:!0,xs:4})]})]})}}},function(e){e.O(0,[403,9990,9448,9213,5233,1880,6549,7058,315,8584,8549,9774,2888,179],(function(){return r=96909,e(e.s=r);var r}));var r=e.O();_N_E=r}]);