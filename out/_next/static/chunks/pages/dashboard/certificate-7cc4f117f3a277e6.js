(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7833],{90637:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/certificate",function(){return n(35204)}])},35433:function(e,t,n){"use strict";n.r(t);var r=n(34051),a=n.n(r),i=n(85893),c=n(60943),s=n(91819),u=n(61120),o=n.n(u),d=n(11057),l=n(86501);function f(e,t,n,r,a,i,c){try{var s=e[i](c),u=s.value}catch(o){return void n(o)}s.done?t(u):Promise.resolve(u).then(r,a)}t.default=function(e){var t=e.username,n=e.membership,r=e.digit,u=e.description,p=(e.time,e.id),h=function(){var e,t=(e=a().mark((function e(){var t,n,r,i,c,u;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l.Am.success("Downloading"),t=new s.ZP("landscape","pt","a4"),e.next=4,o()(document.querySelector("#"+p));case 4:n=e.sent,r=n.toDataURL("image/png"),i=t.getImageProperties(r),c=t.internal.pageSize.getWidth(),u=i.height*c/i.width,t.addImage(r,"PNG",0,0,c,u),t.save("certificate.pdf");case 11:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function c(e){f(i,r,a,c,s,"next",e)}function s(e){f(i,r,a,c,s,"throw",e)}c(void 0)}))});return function(){return t.apply(this,arguments)}}();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.x7,{position:"bottom-center",reverseOrder:!1}),(0,i.jsx)("div",{id:p,style:{fontSize:"16px",height:768,color:"#000",width:1080,fontWeight:400},children:(0,i.jsxs)("div",{style:{backgroundImage:'url("/certificateAssets/bg.png")',backgroundPosition:"left",backgroundRepeat:"no-repeat",backgroundSize:"contain",padding:"6rem 8rem"},children:[(0,i.jsx)("p",{style:{fontSize:"64px",color:"#FFA502",textAlign:"center",margin:0},children:"RAMAERA INDUSTRIES LTD"}),(0,i.jsxs)("p",{style:{fontSize:"1.4rem",textTransform:"capitalize"},children:["Received From ",(0,i.jsx)("span",{style:{fontWeight:600},children:t})]}),(0,i.jsxs)("span",{style:{fontSize:"1.6rem"},children:["We have Received the sum of rupees"," ",(0,i.jsxs)("span",{style:{color:"red"},children:[r," (",(0,c.default)(r)," ONLY )"]})]}),(0,i.jsxs)("span",{style:{fontSize:"1.6rem"},children:["kyc"===n||"advanceKyc"===n?", For your ":", For ",(0,i.jsx)("span",{style:{color:"#1FAE47",textTransform:"uppercase"},children:"kyc"===n?"basic":"advanceKyc"===n?"advance":n}),("kyc"===n||"advanceKyc"===n)&&" KYC"]}),(0,i.jsx)("p",{style:{color:"white",fontSize:"1.8rem",backgroundColor:"green",textAlign:"center",border:"solid 2px black",margin:0},children:u}),(0,i.jsxs)("div",{style:{display:"flex",alignItems:"right",flexDirection:"column",margin:" 0 0 0 600px"},children:[(0,i.jsx)("img",{style:{width:"200px",transform:"scale(80%)"},src:"/certificateAssets/stamp1.png",alt:""}),(0,i.jsx)("span",{style:{width:"200px",textAlign:"center",fontWeight:"bold",fontSize:"0.8rem"},children:"Authorized Stamp"})]})]})}),(0,i.jsx)(d.Z,{sx:{mb:2},variant:"outlined",onClick:h,children:"Print"})]})}},35204:function(e,t,n){"use strict";n.r(t);var r=n(85893),a=n(46225),i=n(25562),c=n(53156),s=n(66242),u=n(78445),o=n(67720),d=n(86886),l=n(9008),f=n.n(l),p=n(82245),h=n(9473),m=n(35433),y=n(67294),v=n(17677);function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){g(e,t,n[t])}))}return e}function x(){var e=(0,h.v9)((function(e){var t;return null===(t=e.user)||void 0===t?void 0:t.data})),t=(0,y.useState)({kyc:0,advanceKyc:0,hajipur:0,agra:0}),n=t[0],i=t[1],l=(0,y.useState)({kyc:"",advanceKyc:"",hajipur:"",agra:""}),g=l[0],x=l[1],E=202310815>parseInt(e.createdAt.split("-").join(""));(0,y.useEffect)((function(){!function(){var t=[],n={kyc:0,advanceKyc:0,hajipur:0,agra:0},r={kyc:"",advanceKyc:"",hajipur:"",agra:""},a=!1;null===e||void 0===e||e.documents.map((function(e){e.title.includes("payment")&&"APPROVED"===e.status&&t.push(e),"payment_proof"!==e.title||e.amount!==v.Z.amount.beforeFifteenthAugustAdvanceAmount&&e.amount!==v.Z.amount.afterFifteenthAugustAdvanceAmount||"APPROVED"!==e.status?(e.title.includes("advance")||"payment_proof"===e.title||e.title.includes("additional_payment"))&&e.amount&&"APPROVED"===e.status&&(n=A({},n,{kyc:n.kyc+=e.amount,advanceKyc:n.advanceKyc+=e.amount}),r=A({},r,{kyc:e.updatedAt,advanceKyc:e.updatedAt})):(a=!0,n=A({},n,{advanceKyc:n.advanceKyc+=e.amount}),r=A({},r,{advanceKyc:e.updatedAt})),e.title.includes("hajipur")&&e.amount&&"APPROVED"===e.status&&(n=A({},n,{hajipur:n.hajipur+=e.amount}),r=A({},r,{hajipur:e.updatedAt})),e.title.includes("agra")&&e.amount&&"APPROVED"===e.status&&(n=A({},n,{agra:n.agra+=e.amount}),r=A({},r,{agra:e.updatedAt}))})),i(A({},n,{kyc:a?0:n.kyc})),x(A({},r,{kyc:a?"":r.kyc}))}()}),[e]),(0,y.useEffect)((function(){}),[n]);return(0,r.jsxs)(p.default,{children:[(0,r.jsx)(f(),{children:(0,r.jsx)("title",{children:"Certificate"})}),(0,r.jsx)(c.Z,{maxWidth:!1,sx:{mt:2},children:(0,r.jsxs)(s.Z,{variant:"outlined",children:[(0,r.jsx)(u.Z,{title:"CERTIFICATE",sx:{ml:2,textTransform:"uppercase"}}),(0,r.jsx)(o.Z,{sx:{mb:2}}),(0,r.jsx)(d.ZP,{container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",spacing:0,children:(0,r.jsx)(d.ZP,{item:!0,xs:12,paddingX:6,children:function(){var t=[];return Object.keys(n).forEach((function(a,i){n[a]&&t.push((0,r.jsx)(m.default,{id:"certificate_"+i,username:null===e||void 0===e?void 0:e.name,digit:E&&"kyc"===a?1e3:E||"kyc"!==a?E&&"advanceKyc"===a?n[a]-1e3:E||"advanceKyc"!==a?n[a]:n[a]-2e3:2e3,time:g[a],membership:a,description:"kyc"===a||"advanceKyc"===a?"YOUR KYC HAS BEEN SUCCESSFULLY APPROVED":"YOUR PAYMENT HAS BEEN SUCCESSFULLY APPROVED",userCreatedAt:e.createdAt},i))})),t}()})})]})}),(0,r.jsx)(a.Z,{})]})}x.getLayout=function(e){return(0,r.jsx)(i.Z,{children:e})},t.default=x},60943:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=129000.9889.toString().split("."),a=r[0],i=r[1];c(Number(a)),c(Number(i));function c(e){var t=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"],n=["Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],r=["","Ten","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"],a=function(e,t){return 0==e?"":" "+(1==e?n[t]:r[e])},i=function(e,n,r){return(0!=e&&1!=n?" "+t[e]:"")+(0!=n||e>0?" "+r:"")},c="",s=0,u=0,o=0,d=[];if(e+="",isNaN(parseInt(e)))c="";else if(parseInt(e)>0&&e.length<=10){for(s=e.length-1;s>=0;s--)switch(u=e[s]-0,o=s>0?e[s-1]-0:0,e.length-s-1){case 0:d.push(i(u,o,""));break;case 1:case 4:case 6:case 8:d.push(a(u,e[s+1]));break;case 2:d.push(0!=u?" "+t[u]+" Hundred"+(0!=e[s+1]&&0!=e[s+2]?" and":""):"");break;case 3:d.push(i(u,o,"Thousand"));break;case 5:d.push(i(u,o,"Lakh"));break;case 7:d.push(i(u,o,"Crore"));break;case 9:d.push(0!=u?" "+t[u]+" Hundred"+(0!=e[s+1]||0!=e[s+2]?" and":" Crore"):"")}c=d.reverse().join("")}else c="";return c}},82245:function(e,t,n){"use strict";n.r(t);var r=n(85893);t.default=function(e){var t=e.children;return(0,r.jsx)(r.Fragment,{children:t})}},46225:function(e,t,n){"use strict";var r=n(85893),a=n(90948),i=n(53156),c=n(87357),s=n(15861),u=(0,a.ZP)(i.Z)((function(e){var t=e.theme;return"\n        margin-top: ".concat(t.spacing(4),";\n")}));t.Z=function(){return(0,r.jsx)(u,{className:"footer-wrapper",children:(0,r.jsxs)(c.Z,{pb:4,display:{xs:"block",md:"flex"},alignItems:"center",textAlign:{xs:"center",md:"left"},justifyContent:"space-between",children:[(0,r.jsx)(c.Z,{}),(0,r.jsx)(s.Z,{sx:{pt:{xs:2,md:0}},variant:"subtitle1"})]})})}},17677:function(e,t){"use strict";t.Z={project:{AGRA:"agra",HAJIPUR:"hajipur"},role:{ADMIN:"ADMIN",AGENT:"AGENT",USER:"USER"},membership:{ADVANCE:"ADVANCE",BASIC:"BASIC"},status:{AGENT_APPROVED:"AGENT_APPROVED",APPROVED:"APPROVED",NOT_INITIALIZED:"NOT_INITIALIZED",ONGOING:"ONGOING",PENDING:"PENDING",REJECTED:"REJECTED",SUBMITTED:"SUBMITTED"},amount:{beforeFifteenthAugustBasicAmount:1e3,beforeFifteenthAugustAdvanceAmount:1e5,afterFifteenthAugustBasicAmount:2e3,afterFifteenthAugustAdvanceAmount:2e5}}}},function(e){e.O(0,[5443,7847,5370,9990,4789,2052,6180,1880,6549,1742,2995,309,8501,3778,1,5562,9774,2888,179],(function(){return t=90637,e(e.s=t);var t}));var t=e.O();_N_E=t}]);