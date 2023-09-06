(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5611],{33169:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/management/transactions",function(){return n(88116)}])},88116:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return ae}});var t=n(85893),o=n(9008),c=n.n(o),a=n(49104),i=n(86886),s=n(15861),l=n(11057),u=n(47017);var d=function(){var e={name:"Catherine Pike",avatar:"/static/images/avatars/1.jpg"};return(0,t.jsxs)(i.ZP,{container:!0,justifyContent:"space-between",alignItems:"center",children:[(0,t.jsxs)(i.ZP,{item:!0,children:[(0,t.jsx)(s.Z,{variant:"h3",component:"h3",gutterBottom:!0,children:"Transactions"}),(0,t.jsxs)(s.Z,{variant:"subtitle2",children:[null===e||void 0===e?void 0:e.name,", these are your recent transactions"]})]}),(0,t.jsx)(i.ZP,{item:!0,children:(0,t.jsx)(l.Z,{sx:{mt:{xs:2,md:0}},variant:"contained",startIcon:(0,t.jsx)(u.Z,{fontSize:"small"}),children:"Create transaction"})})]})},p=n(78273),m=n(53156),h=n(46225),y=n(66242),g=n(67294),f=n(32912),x=n(92077),j=n.n(x),Z=n(45697),b=n.n(Z),v=n(2734),D=n(87357),C=n(78445),w=n(94054),k=n(47312),O=n(10315),P=n(18972),T=n(67720),B=n(72882),S=n(7906),I=n(53184),A=n(53816),N=n(53252),W=n(69368),F=n(295),M=n(94834),E=n(93946),_=n(8896),$=n(80100),R=n(70422),z=n(52521),K=n(44347),J=n(78462),G=n(97212),H=n(59334),Y=n(90948),L=n(82864),U=(0,Y.ZP)(l.Z)((function(e){var r=e.theme;return"\n     background: ".concat(r.colors.error.main,";\n     color: ").concat(r.palette.error.contrastText,";\n\n     &:hover {\n        background: ").concat(r.colors.error.dark,";\n     }\n    ")}));var V=function(){var e=(0,g.useState)(!1),r=e[0],n=e[1],o=(0,g.useRef)(null);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(D.Z,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[(0,t.jsxs)(D.Z,{display:"flex",alignItems:"center",children:[(0,t.jsx)(s.Z,{variant:"h5",color:"text.secondary",children:"Bulk actions:"}),(0,t.jsx)(U,{sx:{ml:1},startIcon:(0,t.jsx)(z.Z,{}),variant:"contained",children:"Delete"})]}),(0,t.jsx)(E.Z,{color:"primary",onClick:function(){n(!0)},ref:o,sx:{ml:2,p:1},children:(0,t.jsx)(L.Z,{})})]}),(0,t.jsx)(K.Z,{keepMounted:!0,anchorEl:o.current,open:r,onClose:function(){n(!1)},anchorOrigin:{vertical:"center",horizontal:"center"},transformOrigin:{vertical:"center",horizontal:"center"},children:(0,t.jsxs)(J.Z,{sx:{p:1},component:"nav",children:[(0,t.jsx)(G.ZP,{button:!0,children:(0,t.jsx)(H.Z,{primary:"Bulk delete selected"})}),(0,t.jsx)(G.ZP,{button:!0,children:(0,t.jsx)(H.Z,{primary:"Bulk edit selected"})})]})})]})};function X(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function q(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function Q(e){return function(e){if(Array.isArray(e))return X(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"===typeof e)return X(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return X(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var ee=function(e){var r={failed:{text:"Failed",color:"error"},completed:{text:"Completed",color:"success"},pending:{text:"Pending",color:"warning"}}[e],n=r.text,o=r.color;return(0,t.jsx)($.Z,{color:o,children:n})},re=function(e){var r=e.cryptoOrders,n=(0,g.useState)([]),o=n[0],c=n[1],a=o.length>0,i=(0,g.useState)(0),l=i[0],u=i[1],d=(0,g.useState)(5),p=d[0],m=d[1],h=(0,g.useState)({status:null}),x=h[0],Z=h[1],b=function(e,r){return e.filter((function(e){var n=!0;return r.status&&e.status!==r.status&&(n=!1),n}))}(r,x),$=function(e,r,n){return e.slice(r*n,r*n+n)}(b,l,p),K=o.length>0&&o.length<r.length,J=o.length===r.length,G=(0,v.Z)();return(0,t.jsxs)(y.Z,{children:[a&&(0,t.jsx)(D.Z,{flex:1,p:2,children:(0,t.jsx)(V,{})}),!a&&(0,t.jsx)(C.Z,{action:(0,t.jsx)(D.Z,{width:150,children:(0,t.jsxs)(w.Z,{fullWidth:!0,variant:"outlined",children:[(0,t.jsx)(k.Z,{children:"Status"}),(0,t.jsx)(O.Z,{value:x.status||"all",onChange:function(e){var r=null;"all"!==e.target.value&&(r=e.target.value),Z((function(e){return function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){q(e,r,n[r])}))}return e}({},e,{status:r})}))},label:"Status",autoWidth:!0,children:[{id:"all",name:"All"},{id:"completed",name:"Completed"},{id:"pending",name:"Pending"},{id:"failed",name:"Failed"}].map((function(e){return(0,t.jsx)(P.Z,{value:e.id,children:e.name},e.id)}))})]})}),title:"Recent Orders"}),(0,t.jsx)(T.Z,{}),(0,t.jsx)(B.Z,{children:(0,t.jsxs)(S.Z,{children:[(0,t.jsx)(I.Z,{children:(0,t.jsxs)(A.Z,{children:[(0,t.jsx)(N.Z,{padding:"checkbox",children:(0,t.jsx)(W.Z,{color:"primary",checked:J,indeterminate:K,onChange:function(e){c(e.target.checked?r.map((function(e){return e.id})):[])}})}),(0,t.jsx)(N.Z,{children:"Order Details"}),(0,t.jsx)(N.Z,{children:"Order ID"}),(0,t.jsx)(N.Z,{children:"Source"}),(0,t.jsx)(N.Z,{align:"right",children:"Amount"}),(0,t.jsx)(N.Z,{align:"right",children:"Status"}),(0,t.jsx)(N.Z,{align:"right",children:"Actions"})]})}),(0,t.jsx)(F.Z,{children:$.map((function(e){var r=o.includes(e.id);return(0,t.jsxs)(A.Z,{hover:!0,selected:r,children:[(0,t.jsx)(N.Z,{padding:"checkbox",children:(0,t.jsx)(W.Z,{color:"primary",checked:r,onChange:function(r){return n=e.id,void(o.includes(n)?c((function(e){return e.filter((function(e){return e!==n}))})):c((function(e){return Q(e).concat([n])})));var n},value:r})}),(0,t.jsxs)(N.Z,{children:[(0,t.jsx)(s.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:e.orderDetails}),(0,t.jsx)(s.Z,{variant:"body2",color:"text.secondary",noWrap:!0,children:(0,f.Z)(e.orderDate,"MMMM dd yyyy")})]}),(0,t.jsx)(N.Z,{children:(0,t.jsx)(s.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:e.orderID})}),(0,t.jsxs)(N.Z,{children:[(0,t.jsx)(s.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:e.sourceName}),(0,t.jsx)(s.Z,{variant:"body2",color:"text.secondary",noWrap:!0,children:e.sourceDesc})]}),(0,t.jsxs)(N.Z,{align:"right",children:[(0,t.jsxs)(s.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:[e.amountCrypto,e.cryptoCurrency]}),(0,t.jsx)(s.Z,{variant:"body2",color:"text.secondary",noWrap:!0,children:j()(e.amount).format("".concat(e.currency,"0,0.00"))})]}),(0,t.jsx)(N.Z,{align:"right",children:ee(e.status)}),(0,t.jsxs)(N.Z,{align:"right",children:[(0,t.jsx)(M.Z,{title:"Edit Order",arrow:!0,children:(0,t.jsx)(E.Z,{sx:{"&:hover":{background:G.colors.primary.lighter},color:G.palette.primary.main},color:"inherit",size:"small",children:(0,t.jsx)(R.Z,{fontSize:"small"})})}),(0,t.jsx)(M.Z,{title:"Delete Order",arrow:!0,children:(0,t.jsx)(E.Z,{sx:{"&:hover":{background:G.colors.error.lighter},color:G.palette.error.main},color:"inherit",size:"small",children:(0,t.jsx)(z.Z,{fontSize:"small"})})})]})]},e.id)}))})]})}),(0,t.jsx)(D.Z,{p:2,children:(0,t.jsx)(_.Z,{component:"div",count:b.length,onPageChange:function(e,r){u(r)},onRowsPerPageChange:function(e){m(parseInt(e.target.value))},page:l,rowsPerPage:p,rowsPerPageOptions:[5,10,25,30]})})]})};re.propTypes={cryptoOrders:b().array.isRequired},re.defaultProps={cryptoOrders:[]};var ne=re,te=n(7069);var oe=function(){var e=[{id:"1",orderDetails:"Fiat Deposit",orderDate:(new Date).getTime(),status:"completed",orderID:"VUVX709ET7BY",sourceName:"Bank Account",sourceDesc:"*** 1111",amountCrypto:34.4565,amount:56787,cryptoCurrency:"ETH",currency:"$"},{id:"2",orderDetails:"Fiat Deposit",orderDate:(0,te.Z)(new Date,1).getTime(),status:"completed",orderID:"23M3UOG65G8K",sourceName:"Bank Account",sourceDesc:"*** 1111",amountCrypto:6.58454334,amount:8734587,cryptoCurrency:"BTC",currency:"$"},{id:"3",orderDetails:"Fiat Deposit",orderDate:(0,te.Z)(new Date,5).getTime(),status:"failed",orderID:"F6JHK65MS818",sourceName:"Bank Account",sourceDesc:"*** 1111",amountCrypto:6.58454334,amount:8734587,cryptoCurrency:"BTC",currency:"$"},{id:"4",orderDetails:"Fiat Deposit",orderDate:(0,te.Z)(new Date,55).getTime(),status:"completed",orderID:"QJFAI7N84LGM",sourceName:"Bank Account",sourceDesc:"*** 1111",amountCrypto:6.58454334,amount:8734587,cryptoCurrency:"BTC",currency:"$"},{id:"5",orderDetails:"Fiat Deposit",orderDate:(0,te.Z)(new Date,56).getTime(),status:"pending",orderID:"BO5KFSYGC0YW",sourceName:"Bank Account",sourceDesc:"*** 1111",amountCrypto:6.58454334,amount:8734587,cryptoCurrency:"BTC",currency:"$"},{id:"6",orderDetails:"Fiat Deposit",orderDate:(0,te.Z)(new Date,33).getTime(),status:"completed",orderID:"6RS606CBMKVQ",sourceName:"Bank Account",sourceDesc:"*** 1111",amountCrypto:6.58454334,amount:8734587,cryptoCurrency:"BTC",currency:"$"},{id:"7",orderDetails:"Fiat Deposit",orderDate:(new Date).getTime(),status:"pending",orderID:"479KUYHOBMJS",sourceName:"Bank Account",sourceDesc:"*** 1212",amountCrypto:2.346546,amount:234234,cryptoCurrency:"BTC",currency:"$"},{id:"8",orderDetails:"Paypal Withdraw",orderDate:(0,te.Z)(new Date,22).getTime(),status:"completed",orderID:"W67CFZNT71KR",sourceName:"Paypal Account",sourceDesc:"*** 1111",amountCrypto:3.345456,amount:34544,cryptoCurrency:"BTC",currency:"$"},{id:"9",orderDetails:"Fiat Deposit",orderDate:(0,te.Z)(new Date,11).getTime(),status:"completed",orderID:"63GJ5DJFKS4H",sourceName:"Bank Account",sourceDesc:"*** 2222",amountCrypto:1.4389567945,amount:123843,cryptoCurrency:"BTC",currency:"$"},{id:"10",orderDetails:"Wallet Transfer",orderDate:(0,te.Z)(new Date,123).getTime(),status:"failed",orderID:"17KRZHY8T05M",sourceName:"Wallet Transfer",sourceDesc:"John's Cardano Wallet",amountCrypto:765.5695,amount:7567,cryptoCurrency:"ADA",currency:"$"}];return(0,t.jsx)(y.Z,{children:(0,t.jsx)(ne,{cryptoOrders:e})})};function ce(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c(),{children:(0,t.jsx)("title",{children:"Transactions - Applications"})}),(0,t.jsx)(p.Z,{children:(0,t.jsx)(d,{})}),(0,t.jsx)(m.Z,{maxWidth:"lg",children:(0,t.jsx)(i.ZP,{container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",spacing:3,children:(0,t.jsx)(i.ZP,{item:!0,xs:12,children:(0,t.jsx)(oe,{})})})}),(0,t.jsx)(h.Z,{})]})}ce.getLayout=function(e){return(0,t.jsx)(a.Z,{children:e})};var ae=ce},46225:function(e,r,n){"use strict";var t=n(85893),o=n(90948),c=n(53156),a=n(87357),i=n(15861),s=(0,o.ZP)(c.Z)((function(e){var r=e.theme;return"\n        margin-top: ".concat(r.spacing(4),";\n")}));r.Z=function(){return(0,t.jsx)(s,{className:"footer-wrapper",children:(0,t.jsxs)(a.Z,{pb:4,display:{xs:"block",md:"flex"},alignItems:"center",textAlign:{xs:"center",md:"left"},justifyContent:"space-between",children:[(0,t.jsx)(a.Z,{}),(0,t.jsx)(i.Z,{sx:{pt:{xs:2,md:0}},variant:"subtitle1"})]})})}},80100:function(e,r,n){"use strict";var t=n(85893),o=n(45697),c=n.n(o);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=(0,n(90948).ZP)("span")((function(e){var r=e.theme;return"\n      background-color: ".concat(r.colors.alpha.black[5],";\n      padding: ").concat(r.spacing(.5,1),";\n      font-size: ").concat(r.typography.pxToRem(13),";\n      border-radius: ").concat(r.general.borderRadius,";\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      max-height: ").concat(r.spacing(3),";\n      \n      &.MuiLabel {\n        &-primary {\n          background-color: ").concat(r.colors.primary.lighter,";\n          color: ").concat(r.palette.primary.main,"\n        }\n\n        &-black {\n          background-color: ").concat(r.colors.alpha.black[100],";\n          color: ").concat(r.colors.alpha.white[100],";\n        }\n        \n        &-secondary {\n          background-color: ").concat(r.colors.secondary.lighter,";\n          color: ").concat(r.palette.secondary.main,"\n        }\n        \n        &-success {\n          background-color: ").concat(r.colors.success.lighter,";\n          color: ").concat(r.palette.success.main,"\n        }\n        \n        &-warning {\n          background-color: ").concat(r.colors.warning.lighter,";\n          color: ").concat(r.palette.warning.main,"\n        }\n              \n        &-error {\n          background-color: ").concat(r.colors.error.lighter,";\n          color: ").concat(r.palette.error.main,"\n        }\n        \n        &-info {\n          background-color: ").concat(r.colors.info.lighter,";\n          color: ").concat(r.palette.info.main,"\n        }\n      }\n")})),l=function(e){e.className;var r=e.color,n=void 0===r?"secondary":r,o=e.children,c=i(e,["className","color","children"]);return(0,t.jsx)(s,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){a(e,r,n[r])}))}return e}({className:"MuiLabel-"+n},c,{children:o}))};l.propTypes={children:c().node,className:c().string,color:c().oneOf(["primary","black","secondary","error","warning","success","info"])},r.Z=l},78273:function(e,r,n){"use strict";var t=n(85893),o=n(45697),c=n.n(o),a=n(90948),i=n(87357),s=n(53156),l=(0,a.ZP)(i.Z)((function(e){var r=e.theme;return"\n        padding: ".concat(r.spacing(4),";\n")})),u=function(e){var r=e.children;return(0,t.jsx)(l,{className:"MuiPageTitle-wrapper",children:(0,t.jsx)(s.Z,{maxWidth:"lg",children:r})})};u.propTypes={children:c().node.isRequired},r.Z=u}},function(e){e.O(0,[5370,9990,4789,3265,6180,1880,6549,7058,315,9708,9831,2835,8584,6923,6261,6372,6406,9104,9774,2888,179],(function(){return r=33169,e(e.s=r);var r}));var r=e.O();_N_E=r}]);