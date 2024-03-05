(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[488,2086],{86886:function(e,n,t){"use strict";t.d(n,{ZP:function(){return b}});var a=t(63366),r=t(87462),i=t(67294),o=t(93680),s=t(95408),d=t(39707),c=t(94780),l=t(90948),u=t(71657);var m=i.createContext(),p=t(34867);function f(e){return(0,p.Z)("MuiGrid",e)}const x=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var v=(0,t(1588).Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>`spacing-xs-${e}`)),...["column-reverse","column","row-reverse","row"].map((e=>`direction-xs-${e}`)),...["nowrap","wrap-reverse","wrap"].map((e=>`wrap-xs-${e}`)),...x.map((e=>`grid-xs-${e}`)),...x.map((e=>`grid-sm-${e}`)),...x.map((e=>`grid-md-${e}`)),...x.map((e=>`grid-lg-${e}`)),...x.map((e=>`grid-xl-${e}`))]),h=t(85893);const g=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function y(e){const n=parseFloat(e);return`${n}${String(e).replace(String(n),"")||"px"}`}function Z(e,n,t={}){if(!n||!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return[t[`spacing-xs-${String(e)}`]||`spacing-xs-${String(e)}`];const{xs:a,sm:r,md:i,lg:o,xl:s}=e;return[Number(a)>0&&(t[`spacing-xs-${String(a)}`]||`spacing-xs-${String(a)}`),Number(r)>0&&(t[`spacing-sm-${String(r)}`]||`spacing-sm-${String(r)}`),Number(i)>0&&(t[`spacing-md-${String(i)}`]||`spacing-md-${String(i)}`),Number(o)>0&&(t[`spacing-lg-${String(o)}`]||`spacing-lg-${String(o)}`),Number(s)>0&&(t[`spacing-xl-${String(s)}`]||`spacing-xl-${String(s)}`)]}const _=(0,l.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>{const{container:t,direction:a,item:r,lg:i,md:o,sm:s,spacing:d,wrap:c,xl:l,xs:u,zeroMinWidth:m}=e.ownerState;return[n.root,t&&n.container,r&&n.item,m&&n.zeroMinWidth,...Z(d,t,n),"row"!==a&&n[`direction-xs-${String(a)}`],"wrap"!==c&&n[`wrap-xs-${String(c)}`],!1!==u&&n[`grid-xs-${String(u)}`],!1!==s&&n[`grid-sm-${String(s)}`],!1!==o&&n[`grid-md-${String(o)}`],!1!==i&&n[`grid-lg-${String(i)}`],!1!==l&&n[`grid-xl-${String(l)}`]]}})((({ownerState:e})=>(0,r.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})),(function({theme:e,ownerState:n}){const t=(0,s.P$)({values:n.direction,breakpoints:e.breakpoints.values});return(0,s.k9)({theme:e},t,(e=>{const n={flexDirection:e};return 0===e.indexOf("column")&&(n[`& > .${v.item}`]={maxWidth:"none"}),n}))}),(function({theme:e,ownerState:n}){const{container:t,rowSpacing:a}=n;let r={};if(t&&0!==a){const n=(0,s.P$)({values:a,breakpoints:e.breakpoints.values});r=(0,s.k9)({theme:e},n,(n=>{const t=e.spacing(n);return"0px"!==t?{marginTop:`-${y(t)}`,[`& > .${v.item}`]:{paddingTop:y(t)}}:{}}))}return r}),(function({theme:e,ownerState:n}){const{container:t,columnSpacing:a}=n;let r={};if(t&&0!==a){const n=(0,s.P$)({values:a,breakpoints:e.breakpoints.values});r=(0,s.k9)({theme:e},n,(n=>{const t=e.spacing(n);return"0px"!==t?{width:`calc(100% + ${y(t)})`,marginLeft:`-${y(t)}`,[`& > .${v.item}`]:{paddingLeft:y(t)}}:{}}))}return r}),(function({theme:e,ownerState:n}){let t;return e.breakpoints.keys.reduce(((a,i)=>{let o={};if(n[i]&&(t=n[i]),!t)return a;if(!0===t)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===t)o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const d=(0,s.P$)({values:n.columns,breakpoints:e.breakpoints.values}),c="object"===typeof d?d[i]:d;if(void 0===c||null===c)return a;const l=Math.round(t/c*1e8)/1e6+"%";let u={};if(n.container&&n.item&&0!==n.columnSpacing){const t=e.spacing(n.columnSpacing);if("0px"!==t){const e=`calc(${l} + ${y(t)})`;u={flexBasis:e,maxWidth:e}}}o=(0,r.Z)({flexBasis:l,flexGrow:0,maxWidth:l},u)}return 0===e.breakpoints.values[i]?Object.assign(a,o):a[e.breakpoints.up(i)]=o,a}),{})}));var b=i.forwardRef((function(e,n){const t=(0,u.Z)({props:e,name:"MuiGrid"}),s=(0,d.Z)(t),{className:l,columns:p,columnSpacing:x,component:v="div",container:y=!1,direction:b="row",item:j=!1,lg:P=!1,md:S=!1,rowSpacing:D,sm:w=!1,spacing:C=0,wrap:k="wrap",xl:A=!1,xs:N=!1,zeroMinWidth:T=!1}=s,E=(0,a.Z)(s,g),R=D||C,O=x||C,I=i.useContext(m),$=y?p||12:I,M=(0,r.Z)({},s,{columns:$,container:y,direction:b,item:j,lg:P,md:S,sm:w,rowSpacing:R,columnSpacing:O,wrap:k,xl:A,xs:N,zeroMinWidth:T}),U=(e=>{const{classes:n,container:t,direction:a,item:r,lg:i,md:o,sm:s,spacing:d,wrap:l,xl:u,xs:m,zeroMinWidth:p}=e,x={root:["root",t&&"container",r&&"item",p&&"zeroMinWidth",...Z(d,t),"row"!==a&&`direction-xs-${String(a)}`,"wrap"!==l&&`wrap-xs-${String(l)}`,!1!==m&&`grid-xs-${String(m)}`,!1!==s&&`grid-sm-${String(s)}`,!1!==o&&`grid-md-${String(o)}`,!1!==i&&`grid-lg-${String(i)}`,!1!==u&&`grid-xl-${String(u)}`]};return(0,c.Z)(x,f,n)})(M);return(0,h.jsx)(m.Provider,{value:$,children:(0,h.jsx)(_,(0,r.Z)({ownerState:M,className:(0,o.Z)(U.root,l),as:v,ref:n},E))})}))},7906:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var a=t(63366),r=t(87462),i=t(67294),o=t(93680),s=t(94780),d=t(31618),c=t(71657),l=t(90948),u=t(34867);function m(e){return(0,u.Z)("MuiTable",e)}(0,t(1588).Z)("MuiTable",["root","stickyHeader"]);var p=t(85893);const f=["className","component","padding","size","stickyHeader"],x=(0,l.ZP)("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.stickyHeader&&n.stickyHeader]}})((({theme:e,ownerState:n})=>(0,r.Z)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,r.Z)({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},n.stickyHeader&&{borderCollapse:"separate"}))),v="table";var h=i.forwardRef((function(e,n){const t=(0,c.Z)({props:e,name:"MuiTable"}),{className:l,component:u=v,padding:h="normal",size:g="medium",stickyHeader:y=!1}=t,Z=(0,a.Z)(t,f),_=(0,r.Z)({},t,{component:u,padding:h,size:g,stickyHeader:y}),b=(e=>{const{classes:n,stickyHeader:t}=e,a={root:["root",t&&"stickyHeader"]};return(0,s.Z)(a,m,n)})(_),j=i.useMemo((()=>({padding:h,size:g,stickyHeader:y})),[h,g,y]);return(0,p.jsx)(d.Z.Provider,{value:j,children:(0,p.jsx)(x,(0,r.Z)({as:u,role:u===v?null:"table",ref:n,className:(0,o.Z)(b.root,l),ownerState:_},Z))})}))},295:function(e,n,t){"use strict";t.d(n,{Z:function(){return g}});var a=t(87462),r=t(63366),i=t(67294),o=t(93680),s=t(94780),d=t(44063),c=t(71657),l=t(90948),u=t(34867);function m(e){return(0,u.Z)("MuiTableBody",e)}(0,t(1588).Z)("MuiTableBody",["root"]);var p=t(85893);const f=["className","component"],x=(0,l.ZP)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,n)=>n.root})({display:"table-row-group"}),v={variant:"body"},h="tbody";var g=i.forwardRef((function(e,n){const t=(0,c.Z)({props:e,name:"MuiTableBody"}),{className:i,component:l=h}=t,u=(0,r.Z)(t,f),g=(0,a.Z)({},t,{component:l}),y=(e=>{const{classes:n}=e;return(0,s.Z)({root:["root"]},m,n)})(g);return(0,p.jsx)(d.Z.Provider,{value:v,children:(0,p.jsx)(x,(0,a.Z)({className:(0,o.Z)(y.root,i),as:l,ref:n,role:l===h?null:"rowgroup",ownerState:g},u))})}))},72882:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var a=t(87462),r=t(63366),i=t(67294),o=t(93680),s=t(94780),d=t(71657),c=t(90948),l=t(34867);function u(e){return(0,l.Z)("MuiTableContainer",e)}(0,t(1588).Z)("MuiTableContainer",["root"]);var m=t(85893);const p=["className","component"],f=(0,c.ZP)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,n)=>n.root})({width:"100%",overflowX:"auto"});var x=i.forwardRef((function(e,n){const t=(0,d.Z)({props:e,name:"MuiTableContainer"}),{className:i,component:c="div"}=t,l=(0,r.Z)(t,p),x=(0,a.Z)({},t,{component:c}),v=(e=>{const{classes:n}=e;return(0,s.Z)({root:["root"]},u,n)})(x);return(0,m.jsx)(f,(0,a.Z)({ref:n,as:c,className:(0,o.Z)(v.root,i),ownerState:x},l))}))},53184:function(e,n,t){"use strict";t.d(n,{Z:function(){return g}});var a=t(87462),r=t(63366),i=t(67294),o=t(93680),s=t(94780),d=t(44063),c=t(71657),l=t(90948),u=t(34867);function m(e){return(0,u.Z)("MuiTableHead",e)}(0,t(1588).Z)("MuiTableHead",["root"]);var p=t(85893);const f=["className","component"],x=(0,l.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,n)=>n.root})({display:"table-header-group"}),v={variant:"head"},h="thead";var g=i.forwardRef((function(e,n){const t=(0,c.Z)({props:e,name:"MuiTableHead"}),{className:i,component:l=h}=t,u=(0,r.Z)(t,f),g=(0,a.Z)({},t,{component:l}),y=(e=>{const{classes:n}=e;return(0,s.Z)({root:["root"]},m,n)})(g);return(0,p.jsx)(d.Z.Provider,{value:v,children:(0,p.jsx)(x,(0,a.Z)({as:l,className:(0,o.Z)(y.root,i),ref:n,role:l===h?null:"rowgroup",ownerState:g},u))})}))},20286:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/agency-services/[index]",function(){return t(18948)}])},18948:function(e,n,t){"use strict";t.r(n);var a=t(14924),r=t(85893),i=t(91875),o=t(41294),s=t(9395),d=t(9008),c=t.n(d),l=t(11163),u=t(67294),m=(t(32426),t(37652)),p=t(11213),f=t(90948),x=t(87357),v=t(2734),h=t(53156),g=t(88409),y=t(40044),Z=t(66242),_=t(86886),b=t(15861),j=t(43725),P=t(9473),S=t(55182),D=t(37887),w=t(4749),C=t(25333),k=t(35780),A=t(27718),N=t(2086),T=t(86501),E=(0,f.ZP)(x.Z)((function(e){var n=e.theme;return"\n      padding: 0 ".concat(n.spacing(2),";\n      position: relative;\n      bottom: -1px;\n\n      .MuiTabs-root {\n        height: 44px;\n        min-height: 44px;\n      }\n\n      .MuiTabs-scrollableX {\n        overflow-x: auto !important;\n      }\n\n      .MuiTabs-indicator {\n          min-height: 4px;\n          height: 4px;\n          box-shadow: none;\n          bottom: -4px;\n          background: none;\n          border: 0;\n\n          &:after {\n            position: absolute;\n            left: 50%;\n            width: 28px;\n            content: ' ';\n            margin-left: -14px;\n            background: ").concat(n.colors.primary.main,";\n            border-radius: inherit;\n            height: 100%;\n          }\n      }\n\n      .MuiTab-root {\n          &.MuiButtonBase-root {\n              height: 44px;\n              min-height: 44px;\n              background: ").concat(n.colors.alpha.white[50],";\n              border: 1px solid ").concat(n.colors.alpha.black[10],";\n              border-bottom: 0;\n              position: relative;\n              margin-right: ").concat(n.spacing(1),";\n              font-size: ").concat(n.typography.pxToRem(14),";\n              color: ").concat(n.colors.alpha.black[80],";\n              border-bottom-left-radius: 0;\n              border-bottom-right-radius: 0;\n\n              .MuiTouchRipple-root {\n                opacity: .1;\n              }\n\n              &:after {\n                position: absolute;\n                left: 0;\n                right: 0;\n                width: 100%;\n                bottom: 0;\n                height: 1px;\n                content: '';\n                background: ").concat(n.colors.alpha.black[10],";\n              }\n\n              &:hover {\n                color: ").concat(n.colors.alpha.black[100],";\n              }\n          }\n\n          &.Mui-selected {\n              color: ").concat(n.colors.alpha.black[100],";\n              background: ").concat(n.colors.alpha.white[100],";\n              border-bottom-color: ").concat(n.colors.alpha.white[100],";\n\n              &:after {\n                height: 0;\n              }\n          }\n      }\n  ")}));function R(e){var n,t,s,d=(0,l.useRouter)().query.index,f=(0,u.useState)(d.toString().split("&")[1]),R=f[0],O=(f[1],d.toString().split("&")[0]),I=(0,u.useState)(R),$=I[0],M=I[1],U=(0,u.useState)("card_0"),V=U[0],L=U[1],B=(0,P.v9)((function(e){return e.allUsers.allTheUsers})).find((function(e){return e.id===O})),G=(0,v.Z)(),z=(0,P.I0)(),W=(0,D.a)(w.DX,{variables:{userId:O}}),H=W.data,F=W.refetch,X=H;return console.log("CardsOfAUser",null===X||void 0===X?void 0:X.findCardOfaUser),(0,u.useEffect)((function(){F()}),[$]),(0,u.useEffect)((function(){B&&z((0,p.Hn)(B))}),[]),(0,r.jsxs)(j.default,{children:[(0,r.jsx)(c(),{children:(0,r.jsx)("title",{children:"KYC Agency Dashboard"})}),(0,r.jsx)(m.Z,{children:(0,r.jsx)(o.Z,{})}),(0,r.jsxs)(h.Z,{maxWidth:!1,children:[(0,r.jsx)(E,{children:(0,r.jsx)(g.Z,{onChange:function(e,n){M(n)},value:$,variant:"scrollable",scrollButtons:"auto",textColor:"primary",indicatorColor:"primary",children:[{value:"cardui",label:"Cards"},{value:"viewcard",label:"View Card"}].map((function(e){return(0,r.jsx)(y.Z,{label:e.label,value:e.value},e.value)}))})}),(0,r.jsx)(Z.Z,{variant:"outlined",children:(0,r.jsxs)(_.ZP,{container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",spacing:0,children:["cardui"===$&&(0,r.jsx)(_.ZP,{item:!0,xs:12,children:(0,r.jsx)(x.Z,{children:(0,r.jsx)(S.default,{changeTab:function(e){M(e)},currentTab:$,cardId:O})})}),"viewcard"===$&&(0,r.jsx)(r.Fragment,{children:(null===X||void 0===X||null===(n=X.findCardOfaUser)||void 0===n?void 0:n.length)>0?(0,r.jsx)(_.ZP,{item:!0,xs:12,children:(0,r.jsxs)(x.Z,{p:4,children:[(0,r.jsx)(g.Z,{value:V,variant:"scrollable",scrollButtons:"auto",textColor:"primary",indicatorColor:"primary",onChange:function(e,n){L(n)},children:null===X||void 0===X||null===(t=X.findCardOfaUser)||void 0===t?void 0:t.map((function(e,n){return(0,r.jsx)(y.Z,{label:"card-".concat(n+1),value:"card_".concat(n)},"card_".concat(n))}))}),null===X||void 0===X||null===(s=X.findCardOfaUser)||void 0===s?void 0:s.map((function(e,n){return(0,r.jsx)("div",{children:V==="card_".concat(n)&&(0,r.jsxs)(x.Z,{sx:{},children:[(0,r.jsxs)(x.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,r.jsxs)(x.Z,{sx:{display:"flex"},children:[(0,r.jsx)(C.default,{id:null===e||void 0===e?void 0:e.id,tab:"viewCard",type:null===e||void 0===e?void 0:e.cardType,cardNumber:null===e||void 0===e?void 0:e.cardNumber,expiry:null===e||void 0===e?void 0:e.cardValidity},"card_ramaera_".concat(n)),(0,r.jsx)(k.default,{id:null===e||void 0===e?void 0:e.id,type:null===e||void 0===e?void 0:e.cardType,amountYouGet:null===e||void 0===e?void 0:e.cardValue,validUpto:null===e||void 0===e?void 0:e.cardValidity,redeemAmount:null===e||void 0===e?void 0:e.maxDiscount},"card_benefits_".concat(n))]}),(0,r.jsxs)(x.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,r.jsx)(b.Z,{sx:{fontSize:16},children:"Card Status"}),(0,r.jsx)(b.Z,{sx:{fontSize:20,fontWeight:500,color:!0===(null===e||void 0===e?void 0:e.isActive)?"limegreen":"red"},children:!0===(null===e||void 0===e?void 0:e.isActive)?"Active":"Not Active"})]})]}),(0,r.jsxs)(x.Z,{marginTop:1,sx:(0,a.Z)({display:"flex"},G.breakpoints.down("sm"),{flexDirection:"column"}),children:[(0,r.jsx)(x.Z,{sx:{},children:(0,r.jsx)(A.default,{docStatus:void 0})}),(0,r.jsx)(x.Z,{sx:(0,a.Z)({marginLeft:10},G.breakpoints.down("sm"),{marginLeft:0}),children:(0,r.jsx)(N.default,{cardId:null===e||void 0===e?void 0:e.id,cardNumber:null===e||void 0===e?void 0:e.cardNumber,cardPaymentDocuments:e.Documents},"card_payment_".concat(n))})]})]})},"card_content_".concat(n))}))]})}):(0,r.jsx)(x.Z,{children:(0,r.jsx)(b.Z,{children:"No card "})})})]})}),(0,r.jsx)(T.x7,{position:"bottom-right",reverseOrder:!1,toastOptions:{success:{duration:5e3}}})]}),(0,r.jsx)(i.Z,{})]})}R.getLayout=function(e){return(0,r.jsx)(s.Z,{children:e})},n.default=R},35780:function(e,n,t){"use strict";t.r(n);var a=t(14924),r=t(85893),i=(t(67294),t(2734)),o=t(87357),s=t(72882),d=t(55113),c=t(7906),l=t(53184),u=t(53816),m=t(53252),p=t(15861),f=t(295);n.default=function(e){var n,t=e.amountYouGet,x=e.validUpto,v=e.redeemAmount,h=(0,i.Z)();switch(e.type){case"BRONZE":n="\u20b9 1000";break;case"SILVER":n="\u20b9 2500";break;case"GOLD":n="\u20b9 5000";break;case"DIAMOND":n="\u20b9 10000"}var g=[{name:"Amount To Pay",value:n},{name:"Amount You Get",value:"\u20b9 ".concat(t)},{name:"Redeem Amount Per Month",value:"\u20b9 ".concat(v)},{name:"Valid Upto",value:"".concat(x," Months")}];return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(o.Z,{sx:(0,a.Z)({marginLeft:10},h.breakpoints.down("sm"),{marginLeft:0}),children:(0,r.jsx)(s.Z,{component:d.Z,children:(0,r.jsxs)(c.Z,{sx:(0,a.Z)({minWidth:400},h.breakpoints.down("sm"),{minWidth:300}),"aria-label":"simple table",children:[(0,r.jsx)(l.Z,{children:(0,r.jsx)(u.Z,{children:(0,r.jsx)(m.Z,{colSpan:2,sx:{backgroundColor:h.colors.primary.main,textAlign:"center",width:"100%"},children:(0,r.jsx)(p.Z,{color:"white",variant:"h5",children:"Card Benefits"})})})}),(0,r.jsx)(f.Z,{children:g.map((function(e){return(0,r.jsxs)(u.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,r.jsx)(m.Z,{component:"th",scope:"row",children:e.name}),(0,r.jsx)(m.Z,{align:"right",children:null===e||void 0===e?void 0:e.value})]},e.name)}))})]})})})})}},27718:function(e,n,t){"use strict";t.r(n);var a=t(85893),r=t(67294),i=t(11057),o=t(72882),s=t(55113),d=t(7906),c=t(295),l=t(53816),u=t(53252),m=t(15861),p=[{name:"Company Name",value:"RAMAERA LEGAL INFOTECH PVT LTD."},{name:"Bank Name",value:"HDFC BANK"},{name:"Branch",value:"NOIDA SECTOR 18"},{name:"A/C No.",value:"50200073634812"},{name:"IFSC CODE ",value:"HDFC0000088"}];n.default=function(e){e.docStatus;var n=(0,r.useState)(!0),t=n[0],f=n[1],x=(0,r.useState)(!1),v=x[0],h=x[1],g=(0,r.useState)(!0),y=g[0],Z=g[1],_=(0,r.useState)(!1),b=_[0],j=_[1];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{style:{flexDirection:"row",justifyContent:"center",marginTop:20,marginBottom:10},children:[(0,a.jsx)(i.Z,{style:{marginRight:20,justifyContent:"center"},variant:y?"contained":"outlined",onClick:function(){f(!0),h(!1),Z(!0),j(!1)},children:"Bank Details"}),(0,a.jsx)(i.Z,{style:{justifyContent:"center"},variant:b?"contained":"outlined",onClick:function(){f(!1),h(!0),Z(!1),j(!0)},children:"UPI"})]}),t&&(0,a.jsx)(o.Z,{component:s.Z,children:(0,a.jsx)(d.Z,{sx:{minWidth:100},"aria-label":"simple table",children:(0,a.jsx)(c.Z,{children:p.map((function(e){return(0,a.jsxs)(l.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,a.jsx)(u.Z,{component:"th",scope:"row",children:e.name}),(0,a.jsx)(u.Z,{align:"right",children:e.value})]},e.name)}))})})}),v&&(0,a.jsx)(o.Z,{component:s.Z,children:(0,a.jsx)(d.Z,{sx:{minWidth:100,justifyContent:"center"},"aria-label":"simple table",children:(0,a.jsxs)(c.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,a.jsx)("img",{style:{width:"250px",borderRadius:"20px",padding:10},src:"/images/upi_legal.png"}),(0,a.jsx)(m.Z,{fontSize:20,variant:"body1",sx:{m:1},children:"OR"}),(0,a.jsx)(m.Z,{variant:"h4",sx:{m:2},children:(0,a.jsx)("a",{href:"upi://pay?pa=ramaeralegal.noida@hdfcbank&pn=Ramaera K&cu=INR",children:"UPI ID : ramaeralegal.noida@hdfcbank"})})]})})})]})}},2086:function(e,n,t){"use strict";t.r(n),t.d(n,{rows:function(){return P}});var a=t(47568),r=(t(26042),t(69396),t(828)),i=t(97582),o=t(85893),s=t(4749),d=t(44709),c=t(26183),l=t(16696),u=t(50319),m=t(37887),p=t(8987),f=t(76721),x=t(15861),v=t(87357),h=t(11057),g=t(86886),y=t(50135),Z=t(11163),_=t.n(Z),b=t(67294),j=t(86501),P=[{config:d.Z.additional_card_payment_proof}];n.default=function(e){var n=e.cardId,t=e.cardNumber,Z=e.cardPaymentDocuments,S=((0,c.T)(),(0,c.C)((function(e){var n;return null===(n=e.user)||void 0===n?void 0:n.data}))),D=(0,b.useState)(null),w=D[0],C=D[1],k=(0,b.useState)(0),A=k[0],N=k[1],T=(0,b.useState)(!1),E=T[0],R=T[1],O=(0,b.useState)(),I=O[0],$=O[1],M=(0,b.useState)(!1),U=M[0],V=M[1],L=(0,b.useState)(!1),B=L[0],G=L[1],z=(0,b.useState)(!1),W=z[0],H=z[1],F=(0,r.Z)((0,u.D)(s.zz),1)[0],X=(0,r.Z)((0,u.D)(s.ar),1)[0],Y=((0,r.Z)((0,u.D)(s.v9),1)[0],(0,m.a)(s.mK,{variables:{cardNumber:t}}).data,(0,b.useState)(!1)),K=Y[0],J=Y[1],q=(0,b.useState)(),Q=q[0],ee=q[1],ne=(0,b.useState)(),te=ne[0],ae=ne[1],re=_().query.index,ie=(re.toString().split("&")[1],re.toString().split("&")[0]),oe=function(e){var n=[];if(Z){var t=!0,a=!1,r=void 0;try{for(var i,o=function(){var e=i.value,t=null===Z||void 0===Z?void 0:Z.find((function(n){if((null===n||void 0===n?void 0:n.title.toLowerCase())===e.id.toLowerCase())return!0}));t&&n.push(t)},s=e[Symbol.iterator]();!(t=(i=s.next()).done);t=!0)o()}catch(d){a=!0,r=d}finally{try{t||null==s.return||s.return()}finally{if(a)throw r}}}return n};(0,b.useEffect)((function(){H(!!(w&&Q&&te))}),[Q,te,w]);var se=function(){var e=(0,a.Z)((function(){var e,t;return(0,i.__generator)(this,(function(a){switch(a.label){case 0:return a.trys.push([0,9,,10]),e="",U?[4,(0,l.Z)(w)]:[3,2];case 1:return e=a.sent(),[3,3];case 2:e=w,a.label=3;case 3:return(null===Z||void 0===Z?void 0:Z.length)>0&&(null===Z||void 0===Z||Z.find((function(e){e.title.toLowerCase()===d.Z.card_payment_proof.items[0].id&&($(e),C(e.url))}))),I?[4,X({variables:{title:d.Z.card_payment_proof.items[0].id,url:e,amount:parseInt(te),cardUserId:ie,myCardId:n,utrNo:Q,id:I.id}})]:[3,5];case 4:return a.sent(),j.ZP.success("Payment Proof Updated "),H(!1),[3,8];case 5:return a.trys.push([5,7,,8]),[4,F({variables:{title:d.Z.card_payment_proof.items[0].id,url:e,cardUserId:ie,myCardId:n,amount:parseInt(te),utrNo:Q}})];case 6:return a.sent(),j.ZP.success("Card Payment Updated "),H(!1),R(!0),[3,8];case 7:return t=a.sent(),console.log("err",t),[3,8];case 8:return[3,10];case 9:return a.sent(),[3,10];case 10:return G(!1),[2]}}))}));return function(){return e.apply(this,arguments)}}();(0,b.useEffect)((function(){Z.length>0&&(null===Z||void 0===Z||Z.map((function(e){e.title.toLowerCase()===d.Z.card_payment_proof.items[0].id&&($(e),C(null===e||void 0===e?void 0:e.url),ae(null===e||void 0===e?void 0:e.amount),ee(e.utrNo))})))}),[Z]),(0,b.useEffect)((function(){!function(){var e=0;null===Z||void 0===Z||Z.map((function(n){n.title.includes("card_payment_proof")&&(e+=1),N(e)}))}()}),[]);var de=function(){J(!1)};return(0,o.jsx)(o.Fragment,{children:K?(0,o.jsx)(o.Fragment,{}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(x.Z,{variant:"h4",sx:{my:2},children:"Kindly Upload Your Payment Proof"}),w&&(0,o.jsx)("img",{src:"object"==typeof w?URL.createObjectURL(w):w,style:{marginTop:"10px"},height:200}),I&&I.status&&(0,o.jsxs)(x.Z,{variant:"h4",sx:{mt:2},children:["Status :"," ",(0,o.jsxs)("span",{style:{color:I?"APPROVED"===I.status?"green":"REJECTED"===I.status&&"red":""},children:[" ",I&&I.status]})]}),(0,o.jsxs)(v.Z,{sx:{display:"flex",gap:2},children:[(0,o.jsxs)(h.Z,{variant:"contained",style:{cursor:I&&"APPROVED"===I.status?"not-allowed":"pointer"},component:"label",color:I&&"APPROVED"===I.status?"secondary":"primary",children:["Upload Payment Proof",(0,o.jsx)("input",{type:"file",accept:"image/*",hidden:!0,disabled:!!I&&"APPROVED"===I.status,onChange:function(e){e.target.files.length>0&&(C(e.target.files[0]),V(!0),H(!1))}})]}),(0,o.jsx)(v.Z,{component:"form",children:(0,o.jsx)(p.Z,{loading:B,fullWidth:!0,disabled:!W,variant:"contained",onClick:function(){se()},children:"Submit"})}),(0,o.jsx)(j.x7,{position:"bottom-right",reverseOrder:!1})]}),(0,o.jsx)(v.Z,{children:(0,o.jsxs)(g.ZP,{sx:{display:"flex",paddingTop:3},item:!0,xs:12,sm:6,md:4,children:[(0,o.jsx)(v.Z,{children:(0,o.jsx)(y.Z,{sx:{width:150},id:"outlined",label:"UTR No.*",value:Q,variant:"outlined",onChange:function(e){ee(e.target.value)}})}),(0,o.jsx)(v.Z,{children:(0,o.jsx)(y.Z,{sx:{width:150,marginLeft:3},id:"outlined",label:"Amount*",value:te,variant:"outlined",type:"number",onChange:function(e){ae(e.target.value)}})})]})}),(0,o.jsx)(g.ZP,{item:!0,xs:4}),E||I&&(0,o.jsx)(o.Fragment,{children:P.map((function(e,t){return(0,o.jsx)(f.default,{cardId:n,hideAdditionalDocuments:de,data:e,rowNo:A,cardUserId:ie,user:S,documents:oe(e.config.items)},t)}))})]})})}},25333:function(e,n,t){"use strict";t.r(n);var a=t(14924),r=t(85893),i=(t(67294),t(2734)),o=t(66242),s=t(87357),d=t(15861);n.default=function(e){var n=e.cardNumber,t=e.cardHolder,c=(e.maxDiscount,e.expiry),l=(e.tab,e.type),u=e.isSelected,m=e.onClick,p=(e.value,(0,i.Z)());return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(o.Z,{onClick:m,sx:(0,a.Z)({margin:"15px",cursor:"pointer",transition:"transform 0.3s",transform:u?"scale(1.12)":"scale(1)","&:hover":{boxShadow:p.shadows[8]}},p.breakpoints.down("sm"),{margin:"10px"}),children:(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",color:"black"},className:"credit-card ".concat(l),children:[(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center"},className:"logo",children:[(0,r.jsx)("img",{style:{height:"50px",width:"50px"},src:"/images/logo.png",alt:""})," "]}),(0,r.jsx)("div",{style:{fontSize:"20px"},children:"myCard"})]}),(0,r.jsxs)(s.Z,{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[(0,r.jsx)(d.Z,{textTransform:"uppercase",fontSize:20,marginTop:-2,children:l}),(0,r.jsx)(d.Z,{fontSize:25,letterSpacing:3,sx:(0,a.Z)({},p.breakpoints.down("sm"),{letterSpacing:2,fontSize:20}),children:n})]}),(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,r.jsx)("div",{style:{fontSize:"16px"},children:t}),(0,r.jsxs)("div",{style:{fontSize:"16px"},children:["Validity: ",c," Months"]})]})]})})})}},55182:function(e,n,t){"use strict";t.r(n);var a,r=t(47568),i=t(14924),o=t(828),s=t(97582),d=t(85893),c=t(67294),l=t(50319),u=t(2734),m=t(66242),p=t(87357),f=t(15861),x=t(25333),v=t(37887),h=t(86501),g=t(4749),y=t(9473),Z=t(8987),_=t(11163);!function(e){e.BRONZE="BRONZE",e.SILVER="SILVER",e.GOLD="GOLD",e.DIAMOND="DIAMOND"}(a||(a={}));n.default=function(e){(0,_.useRouter)();var n,t,b=e.cardId,j=(0,c.useState)(!1),P=j[0],S=j[1],D=(0,c.useState)(!1),w=D[0],C=(D[1],(0,o.Z)((0,l.D)(g.bl),1)[0]),k=(0,c.useState)(null),A=k[0],N=k[1],T=(0,c.useState)(null),E=(T[0],T[1],(0,c.useState)(!1)),R=E[0],O=E[1],I=(0,c.useState)(!1),$=I[0],M=I[1],U=(0,y.v9)((function(e){var n,t;return null===(n=e.user)||void 0===n||null===(t=n.agencyCode)||void 0===t?void 0:t.agencyCode})),V=null===(n=(0,v.a)(g.Ao,{variables:{agencyCode:U}}).data)||void 0===n||null===(t=n.findCardHoldersInAgency)||void 0===t?void 0:t.find((function(e){return e.id==b})),L=function(){var e=(0,r.Z)((function(){var e;return(0,s.__generator)(this,(function(n){switch(n.label){case 0:if(!A)return[3,4];S(!0),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,C({variables:{cardType:A,cardHolderId:b}})];case 2:return n.sent().data&&(h.ZP.success("Card Generated Sucessfully"),O(!0),M(!0)),[3,4];case 3:return e=n.sent(),console.log("err",e),[3,4];case 4:return S(!1),[2]}}))}));return function(){return e.apply(this,arguments)}}(),B=[{type:"BRONZE",rechargeAmount:1e3,value:1100,maxDiscount:100,validity:11},{type:"SILVER",rechargeAmount:2500,value:3250,maxDiscount:250,validity:13},{type:"GOLD",rechargeAmount:5e3,value:6750,maxDiscount:450,validity:15},{type:"DIAMOND",rechargeAmount:1e4,value:16e3,maxDiscount:1e3,validity:16}];$&&setTimeout((function(){O(!1),M(!1),e.changeTab("viewcard")}),2e3);var G=(0,u.Z)();return(0,d.jsx)(d.Fragment,{children:!w&&(0,d.jsxs)(m.Z,{children:[(0,d.jsxs)(p.Z,{marginTop:2,sx:{width:"100%"},children:[(0,d.jsx)(f.Z,{fontSize:30,fontWeight:600,sx:(0,i.Z)({display:"flex",justifyContent:"center"},G.breakpoints.down("sm"),{width:"100%"}),children:"Select Card Type"}),(0,d.jsx)(p.Z,{sx:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",paddingX:"15px"},children:Object.keys(a).map((function(e){var n=B.find((function(n){return n.type===e}));return(0,d.jsx)(x.default,{type:e,cardNumber:"XXXXXXXXXXXXXX34",expiry:n.validity,tab:"selectCard",cardHolder:null===V||void 0===V?void 0:V.name,isSelected:A===e,onClick:function(){return function(e){N(e)}(e)},value:n.value,maxDiscount:n.maxDiscount},e)}))})]}),(0,d.jsx)(p.Z,{sx:{display:"flex",justifyContent:"center",padding:1,marginBottom:2},children:(0,d.jsx)(Z.Z,{loading:P||R,variant:"contained",type:"submit",onClick:L,disabled:!A,children:"Generate Your Card"})})]})})}},43725:function(e,n,t){"use strict";t.r(n);var a=t(85893);n.default=function(e){var n=e.children;return(0,a.jsx)(a.Fragment,{children:n})}},91875:function(e,n,t){"use strict";var a=t(85893),r=t(90948),i=t(53156),o=t(87357),s=t(15861),d=(0,r.ZP)(i.Z)((function(e){var n=e.theme;return"\n        margin-top: ".concat(n.spacing(4),";\n")}));n.Z=function(){return(0,a.jsx)(d,{className:"footer-wrapper",children:(0,a.jsxs)(o.Z,{pb:4,display:{xs:"block",md:"flex"},alignItems:"center",textAlign:{xs:"center",md:"left"},justifyContent:"space-between",children:[(0,a.jsx)(o.Z,{}),(0,a.jsx)(s.Z,{sx:{pt:{xs:2,md:0}},variant:"subtitle1"})]})})}},37652:function(e,n,t){"use strict";var a=t(85893),r=t(45697),i=t.n(r),o=t(90948),s=t(87357),d=t(53156),c=(0,o.ZP)(s.Z)((function(e){var n=e.theme;return"\n        padding: ".concat(n.spacing(4),";\n")})),l=function(e){var n=e.children;return(0,a.jsx)(c,{className:"MuiPageTitle-wrapper",children:(0,a.jsx)(d.Z,{maxWidth:!1,children:n})})};l.propTypes={children:i().node.isRequired},n.Z=l},44709:function(e,n){"use strict";n.Z={aadhar:{id:"aadhar",name:"Aadhar Card",status:"",items:[{id:"aadhar_front",name:"AADHAR Card Front",status:""},{id:"aadhar_back",name:"AADHAR Card Back",status:""}]},pancard:{id:"pancard",name:"Pancard",status:"",items:[{id:"pancard",name:"Pan Card",status:""}]},avatar:{id:"photo",name:"Photo",status:"",items:[{id:"avatar",name:"Passport Size Photo",status:""}]},voterId:{id:"voterId",name:"Voter Id Card",status:"Not Uploaded",items:[{id:"voterid_front",name:"Voter Id Front",status:""},{id:"voterid_back",name:"Voted Id Card Back",status:""}]},passbook:{name:"Passbook  or Bank Statement",id:"passbook",status:"Not Uploaded",items:[{id:"passbook",name:"Bank Passbook Or Bank Statement",status:"Not Uploaded"}]},payment_proof:{name:"Payment Proof",id:"payment_proof",status:"Not Uploaded",items:[{id:"payment_proof",name:"Payment Proof"}]},agency_payment_proof:{name:"Agency Payment Proof",id:"agency_payment_proof",status:"Not Uploaded",items:[{id:"agency_payment_proof",name:"Agency Payment Proof"}]},upgrade_agency_license_payment_proof_documents:{name:"Upgrade Agency License Payment Proof",id:"upgrade_agency_license_payment_proof",items:[{id:"upgrade_agency_license_payment_proof2",name:"Upgrade Agency License Payment Proof"},{id:"upgrade_agency_license_payment_proof3",name:"Upgrade Agency License Payment Proof"},{id:"upgrade_agency_license_payment_proof4",name:"Upgrade Agency License Payment Proof"},{id:"upgrade_agency_license_payment_proof5",name:"Upgrade Agency License Payment Proof"}]},additional_payment_documents:{name:"Additional Payment Document",id:"additional_payment_doc",items:[{id:"additional_payment_doc2",name:"Payment Document"},{id:"additional_payment_doc3",name:"Payment Document"},{id:"additional_payment_doc4",name:"Payment Document"},{id:"additional_payment_doc5",name:"Payment Document"}]},to_advance_payment_proof:{name:"To Advance Payment Proof",id:"to_advance_payment_proof",status:"Not Uploaded",items:[{id:"to_advance_payment_proof",name:"To Advance Payment Proof"}]},to_advance_additional_documents:{name:"To Advance Additional Payment Document",id:"to_advance_additional_payment_doc",items:[{id:"to_advance_additional_payment_doc2",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc3",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc4",name:"To Advance Payment Document"},{id:"to_advance_additional_payment_doc5",name:"To Advance Payment Document"}]},driving_license:{name:"Driving License",id:"driving_license",status:"Not Uploaded",items:[{id:"driving_license_front",name:"Driving License Front",status:""},{id:"driving_license_back",name:"Driving License Back",status:""}]},nominee_aadhar:{name:"Nominee Aadhar",id:"nominee_aadhar",status:"Not Uploaded",items:[{id:"nominee_aadhar_front",name:"AADHAR Card Front",status:""},{id:"nominee_aadhar_back",name:"AADHAR Card Back",status:""}]},demat_document:{name:"Demat Document",id:"demat_document",status:"Not Uploaded",items:[{id:"demat_document",name:"Demat Document",status:""}]},additional_demat_documents:{name:"Additional Demat Document",id:"additional_demat_documents",items:[{id:"demat_document_2",name:"Demat Document"},{id:"demat_document_3",name:"Demat Document"},{id:"demat_document_4",name:"Demat Document"},{id:"demat_document_5",name:"Demat Document"}]},project_payment:{name:"Project Payment",id:"project_payment",items:[{id:"project_payment_1",name:"Payment Document"},{id:"project_payment_2",name:"Payment Document"},{id:"project_payment_3",name:"Payment Document"},{id:"project_payment_4",name:"Payment Document"},{id:"project_payment_5",name:"Payment Document"},{id:"project_payment_6",name:"Payment Document"},{id:"project_payment_7",name:"Payment Document"},{id:"project_payment_8",name:"Payment Document"},{id:"project_payment_9",name:"Payment Document"},{id:"project_payment_10",name:"Payment Document"},{id:"project_payment_11",name:"Payment Document"}]},card_payment_proof:{name:"Card Payment Proof",id:"card_payment_proof",status:"Not Uploaded",items:[{id:"card_payment_proof",name:"Card Payment Proof",status:""}]},additional_card_payment_proof:{name:"Additional Card Payment Proof",id:"additional_card_payment_proof",items:[{id:"card_payment_proof_2",name:"Card Payment Proof"},{id:"card_payment_proof_3",name:"Card Payment Proof"},{id:"card_payment_proof_4",name:"Card Payment Proof"},{id:"card_payment_proof_5",name:"Card Payment Proof"}]}}},41294:function(e,n,t){"use strict";var a=t(47568),r=t(14924),i=t(828),o=t(97582),s=t(85893),d=t(26183),c=t(2734),l=t(87357),u=t(15861),m=t(71236),p=t(11057),f=t(50657),x=t(37645),v=t(6514),h=t(58951),g=t(31425),y=t(50319),Z=t(86501),_=t(7500),b=t(16538),j=t(9473),P=t(11163),S=t(67294),D=t(34753);n.Z=function(){var e=(0,d.C)((function(e){var n;return null===(n=e.user)||void 0===n?void 0:n.data})),n=(0,c.Z)(),t=(0,i.Z)((0,y.D)(b.QX),1)[0],w=(0,S.useState)(""),C=w[0],k=w[1],A=(0,S.useState)(""),N=A[0],T=A[1],E=(0,j.v9)((function(e){return e.foundUser.foundUser})),R=(0,P.useRouter)(),O=(0,S.useState)(!1),I=O[0],$=O[1],M=function(){$(!0)},U=function(){$(!1)},V=function(){var e=(0,a.Z)((function(){var e;return(0,o.__generator)(this,(function(n){switch(n.label){case 0:return[4,t({variables:{id:E.id,kyc:N}})];case 1:return e=n.sent(),U(),"APPROVED"===N&&Z.ZP.success("KYC APPROVED"),"REJECTED"===N&&Z.ZP.error("KYC REJECTED"),"ONGOING"===N&&Z.ZP.success("KYC ONGOING"),k(e.data.updateStatus.kyc),[2]}}))}));return function(){return e.apply(this,arguments)}}();return(0,s.jsxs)(s.Fragment,{children:["/dashboard"===R.pathname&&(0,s.jsxs)(l.Z,{display:"flex",alignItems:{xs:"stretch",md:"center"},flexDirection:{xs:"column",md:"row"},justifyContent:"space-between",children:[(0,s.jsx)(l.Z,{display:"flex",alignItems:"center",children:(0,s.jsxs)(l.Z,{children:[(0,s.jsxs)(u.Z,{variant:"h3",component:"h3",gutterBottom:!0,sx:(0,r.Z)({},n.breakpoints.down("sm"),{fontSize:20}),children:["Welcome, ",(null===e||void 0===e?void 0:e.name)?null===e||void 0===e?void 0:e.name:null===e||void 0===e?void 0:e.rm_id,"!"]}),(0,s.jsxs)(u.Z,{variant:"h5",component:"h5",align:"left",children:["Share Holder Type :"," ",(0,s.jsx)(m.Z,{badgeContent:null===e||void 0===e?void 0:e.membership,sx:{marginLeft:4},color:"success"})]}),(0,s.jsx)(u.Z,{variant:"subtitle2",mt:1,sx:(0,r.Z)({},n.breakpoints.down("sm"),{fontSize:12}),children:"APPROVED"===(null===e||void 0===e?void 0:e.kyc)?"Your KYC has been Approved":"Complete Your KYC By Filling the form below"})]})}),(0,s.jsxs)(l.Z,{mt:{xs:3,md:0},children:[(0,s.jsxs)(u.Z,{padding:"0 0 10px 0 ",align:"center",variant:"h4",component:"h2",gutterBottom:!0,children:["Status :"," ",(0,s.jsx)("span",{style:{color:(null===e||void 0===e?void 0:e.kyc)?"APPROVED"===(null===e||void 0===e?void 0:e.kyc)?"green":"REJECTED"===(null===e||void 0===e?void 0:e.kyc)&&"red":""},children:"NOT_INITIALIZED"===(null===e||void 0===e?void 0:e.kyc)?"NOT STARTED":null===e||void 0===e?void 0:e.kyc})]})," "]})]}),"/agency/[index]"===R.pathname&&(0,s.jsxs)(l.Z,{display:"flex",alignItems:{xs:"stretch",md:"center"},flexDirection:{xs:"column",md:"row"},justifyContent:"space-between",children:[(0,s.jsxs)(l.Z,{display:"flex",alignItems:"center",children:[(0,s.jsx)(u.Z,{variant:"h3",component:"h3",sx:{textTransform:"uppercase"},gutterBottom:!0,children:"Agency Dashboard"}),(0,s.jsx)(u.Z,{variant:"subtitle2",children:(0,s.jsx)(_.C,{href:"/agency",children:(0,s.jsx)(p.Z,{variant:"outlined",color:"primary",sx:{ml:2},children:"USERLIST"})})})]}),"/agency/[index]"===R.pathname&&(0,s.jsxs)(l.Z,{margin:" 0 0 0 auto",children:[(0,s.jsx)(l.Z,{children:(0,s.jsx)(u.Z,{padding:"0 0 10px 0 ",align:"center",variant:"h4",component:"h2",gutterBottom:!0,children:(0,s.jsxs)("span",{style:{color:C?("APPROVED"===C?"green":"REJECTED"===C&&"red")||"ONGOING"===C&&"orange"||"AGENT_APPROVED"===C&&"green":("APPROVED"===E.kyc?"green":"REJECTED"===E.kyc&&"red")||"ONGOING"===E.kyc&&"orange"||"AGENT_APPROVED"===E.kyc&&"green"},children:["Status :"," ",C?("AGENT_APPROVED"===C?"AGENT APPROVED":"NOT_INITIALIZED"===C&&"NOT INITIALIZED")||C:(null===E||void 0===E?void 0:E.kyc)?"AGENT_APPROVED"===(null===E||void 0===E?void 0:E.kyc)?"AGENT APPROVED":null===E||void 0===E?void 0:E.kyc:"UNKNOWN"]})})}),E.kyc!==D.Z.status.APPROVED&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(p.Z,{onClick:function(){M(),T("AGENT_APPROVED")},variant:"outlined",disabled:!function(){var e,n,t,a=!1,r=!1,i=!1,o=!1,s=!1,d=!1,c=!1,l=!1,u=!1;return(null===E||void 0===E?void 0:E.name)&&(null===E||void 0===E?void 0:E.email)&&(null===E||void 0===E?void 0:E.mobile_number)&&(null===E||void 0===E?void 0:E.date_of_birth)&&(null===E||void 0===E||null===(e=E.nominee)||void 0===e?void 0:e.name)&&(null===E||void 0===E||null===(n=E.nominee)||void 0===n?void 0:n.relationship)&&(null===E||void 0===E?void 0:E.demat_account)&&(a=!0),null===E||void 0===E||null===(t=E.documents)||void 0===t||t.map((function(e){e.title.includes("payment_proof")&&e.status===D.Z.status.APPROVED&&(r=!0),e.title.includes("avatar")&&e.status===D.Z.status.APPROVED&&(i=!0),e.title.includes("aadhar_front")&&e.status===D.Z.status.APPROVED&&(o=!0),e.title.includes("aadhar_back")&&e.status===D.Z.status.APPROVED&&(s=!0),e.title.includes("pancard")&&e.status===D.Z.status.APPROVED&&(d=!0),e.title.includes("passbook")&&e.status===D.Z.status.APPROVED&&(c=!0),e.title.includes("nominee_aadhar_front")&&e.status===D.Z.status.APPROVED&&(l=!0),e.title.includes("demat")&&e.status===D.Z.status.APPROVED&&(u=!0)})),a&&r&&i&&o&&s&&d&&c&&l&&u}(),color:"success",sx:{ml:2},children:"Approve"}),(0,s.jsx)(p.Z,{onClick:function(){M(),T("REJECTED")},variant:"outlined",color:"error",sx:{ml:2},children:"Reject"})]}),(0,s.jsx)("div",{children:(0,s.jsxs)(f.Z,{open:I,onClose:U,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,s.jsx)(x.Z,{id:"alert-dialog-title",children:"Submit KYC Status"}),(0,s.jsx)(v.Z,{children:(0,s.jsxs)(h.Z,{id:"alert-dialog-description",children:["KYC Status will be set to ",N,"."]})}),(0,s.jsxs)(g.Z,{children:[(0,s.jsx)(p.Z,{onClick:U,children:"Dismiss"}),(0,s.jsx)(p.Z,{onClick:V,autoFocus:!0,children:"Submit"})]})]})})]}),(0,s.jsx)(l.Z,{mt:{xs:3,md:0}})]})]})}},32426:function(){}},function(e){e.O(0,[1385,400,9260,9213,6827,4753,6549,7305,7058,788,8584,8292,456,5571,7924,8764,886,5121,4850,6572,1477,2218,9395,6721,9774,2888,179],(function(){return n=20286,e(e.s=n);var n}));var n=e.O();_N_E=n}]);