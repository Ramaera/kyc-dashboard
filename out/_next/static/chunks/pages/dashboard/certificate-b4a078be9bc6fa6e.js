(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7833],{90637:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/certificate",function(){return n(35204)}])},35433:function(e,t,n){"use strict";n.r(t);var r=n(34051),i=n.n(r),s=n(85893),a=n(60943),c=n(91819),o=n(61120),u=n.n(o);function l(e,t,n,r,i,s,a){try{var c=e[s](a),o=c.value}catch(u){return void n(u)}c.done?t(o):Promise.resolve(o).then(r,i)}t.default=function(e){var t=e.username,n=e.membership,r=e.digit,o=e.description,d=e.id,h=function(){var e,t=(e=i().mark((function e(){var t,n,r,s,a,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new c.ZP("landscape","pt","a4"),e.next=3,u()(document.querySelector("#"+d));case 3:n=e.sent,r=n.toDataURL("image/png"),s=t.getImageProperties(r),a=t.internal.pageSize.getWidth(),o=s.height*a/s.width,t.addImage(r,"PNG",0,0,a,o),t.save("certificate.pdf");case 10:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,i){var s=e.apply(t,n);function a(e){l(s,r,i,a,c,"next",e)}function c(e){l(s,r,i,a,c,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{id:d,style:{fontSize:"16px",height:768,color:"#000",width:1080,fontWeight:400},children:(0,s.jsxs)("div",{style:{backgroundImage:'url("/certificateAssets/bg.png")',backgroundPosition:"left",backgroundRepeat:"no-repeat",backgroundSize:"contain",padding:"6rem 8rem"},children:[(0,s.jsx)("p",{style:{fontSize:"64px",color:"#FFA502",textAlign:"center",margin:0},children:"RAMAERA INDUSTRIES LTD"}),(0,s.jsxs)("p",{style:{fontSize:"1.4rem",textTransform:"capitalize"},children:["Received From ",(0,s.jsx)("span",{style:{fontWeight:600},children:t})]}),(0,s.jsxs)("p",{style:{fontSize:"1.6rem"},children:["We have Received the sum of rupees"," ",(0,s.jsxs)("span",{style:{color:"red"},children:[r," (",(0,a.default)(r)," ONLY )"]}),","]}),(0,s.jsxs)("p",{style:{fontSize:"1.6rem"},children:["BASIC"===n||"ADVANCE"===n?", For Your ":", For ",(0,s.jsx)("span",{style:{color:"#1FAE47"},children:n}),("BASIC"===n||"ADVANCE"===n)&&" KYC"]}),(0,s.jsx)("p",{style:{color:"white",fontSize:"1.8rem",backgroundColor:"green",textAlign:"center",border:"solid 2px black",margin:0},children:o}),(0,s.jsxs)("div",{style:{display:"flex",alignItems:"right",flexDirection:"column",margin:" 0 0 0 600px"},children:[(0,s.jsx)("img",{style:{width:"200px",transform:"scale(80%)"},src:"/certificateAssets/stamp1.png",alt:""}),(0,s.jsx)("span",{style:{width:"200px",textAlign:"center",fontWeight:"bold",fontSize:"0.8rem"},children:"Authorized Stamp"})]})]})}),(0,s.jsx)("button",{onClick:h,children:"Print"})]})}},35204:function(e,t,n){"use strict";n.r(t);var r=n(85893),i=n(46225),s=n(49104),a=n(53156),c=n(66242),o=n(78445),u=n(86886),l=n(87357),d=n(9008),h=n.n(d),f=n(82245),p=n(9473),x=n(35433),m=n(67294);function g(){var e=(0,p.v9)((function(e){return e.user.data})),t=(0,m.useState)([]),n=t[0],s=t[1];(0,m.useEffect)((function(){var t=[];e.documents.map((function(e){e.title.includes("payment")&&"APPROVED"===e.status&&t.push(e)})),s(t)}),[e]);return(0,r.jsxs)(f.default,{children:[(0,r.jsx)(h(),{children:(0,r.jsx)("title",{children:"Certificate"})}),(0,r.jsx)(a.Z,{maxWidth:"lg",sx:{mt:2},children:(0,r.jsxs)(c.Z,{variant:"outlined",children:[(0,r.jsx)(o.Z,{title:"CERTIFICATE",sx:{ml:2,textTransform:"uppercase",textDecoration:"underline"}}),(0,r.jsx)(u.ZP,{container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",spacing:0,children:(0,r.jsx)(u.ZP,{item:!0,xs:12,paddingX:6,children:0===n.length?(0,r.jsx)(l.Z,{children:"No Certificates to Show"}):n.map((function(t,n){return(0,r.jsx)(x.default,{id:"certificate_"+n,username:null===e||void 0===e?void 0:e.name,membership:"payment_proof"===t.title&&1e3===t.amount?"BASIC":t.title.includes("to_advance")&&199e3===t.amount?"ADVANCE":t.title.includes("hajipur")?"Hajipur Project":t.title.includes("agra")?"Agra Project":"KYC",description:"YOUR KYC HAS BEEN SUCCESSFULLY APPROVED",digit:t.amount},n)}))})})]})}),(0,r.jsx)(i.Z,{})]})}g.getLayout=function(e){return(0,r.jsx)(s.Z,{children:e})},t.default=g},60943:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=129000.9889.toString().split("."),i=r[0],s=r[1];a(Number(i)),a(Number(s));function a(e){var t=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"],n=["Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],r=["","Ten","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"],i=function(e,t){return 0==e?"":" "+(1==e?n[t]:r[e])},s=function(e,n,r){return(0!=e&&1!=n?" "+t[e]:"")+(0!=n||e>0?" "+r:"")},a="",c=0,o=0,u=0,l=[];if(e+="",isNaN(parseInt(e)))a="";else if(parseInt(e)>0&&e.length<=10){for(c=e.length-1;c>=0;c--)switch(o=e[c]-0,u=c>0?e[c-1]-0:0,e.length-c-1){case 0:l.push(s(o,u,""));break;case 1:case 4:case 6:case 8:l.push(i(o,e[c+1]));break;case 2:l.push(0!=o?" "+t[o]+" Hundred"+(0!=e[c+1]&&0!=e[c+2]?" and":""):"");break;case 3:l.push(s(o,u,"Thousand"));break;case 5:l.push(s(o,u,"Lakh"));break;case 7:l.push(s(o,u,"Crore"));break;case 9:l.push(0!=o?" "+t[o]+" Hundred"+(0!=e[c+1]||0!=e[c+2]?" and":" Crore"):"")}a=l.reverse().join("")}else a="";return a}},82245:function(e,t,n){"use strict";n.r(t);var r=n(85893);t.default=function(e){var t=e.children;return(0,r.jsx)(r.Fragment,{children:t})}},46225:function(e,t,n){"use strict";var r=n(85893),i=n(90948),s=n(53156),a=n(87357),c=n(15861),o=(0,i.ZP)(s.Z)((function(e){var t=e.theme;return"\n        margin-top: ".concat(t.spacing(4),";\n")}));t.Z=function(){return(0,r.jsx)(o,{className:"footer-wrapper",children:(0,r.jsxs)(a.Z,{pb:4,display:{xs:"block",md:"flex"},alignItems:"center",textAlign:{xs:"center",md:"left"},justifyContent:"space-between",children:[(0,r.jsx)(a.Z,{}),(0,r.jsx)(c.Z,{sx:{pt:{xs:2,md:0}},variant:"subtitle1"})]})})}}},function(e){e.O(0,[5443,7847,403,9990,9448,9213,5233,1880,6549,9708,6565,2835,4284,3778,5922,9104,9774,2888,179],(function(){return t=90637,e(e.s=t);var t}));var t=e.O();_N_E=t}]);