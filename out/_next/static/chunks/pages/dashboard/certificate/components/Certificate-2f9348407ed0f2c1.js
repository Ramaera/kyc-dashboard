(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2515],{10035:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/certificate/components/Certificate",function(){return t(35433)}])},35433:function(e,n,t){"use strict";t.r(n);var r=t(34051),i=t.n(r),s=t(85893),a=t(60943),c=t(91819),o=t(61120),u=t.n(o),d=t(11057),l=t(86501);function h(e,n,t,r,i,s,a){try{var c=e[s](a),o=c.value}catch(u){return void t(u)}c.done?n(o):Promise.resolve(o).then(r,i)}n.default=function(e){var n=e.username,t=e.membership,r=e.digit,o=e.description,p=(e.time,e.id),f=function(){var e,n=(e=i().mark((function e(){var n,t,r,s,a,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l.Am.success("Downloading"),n=new c.ZP("landscape","pt","a4"),e.next=4,u()(document.querySelector("#"+p));case 4:t=e.sent,r=t.toDataURL("image/png"),s=n.getImageProperties(r),a=n.internal.pageSize.getWidth(),o=s.height*a/s.width,n.addImage(r,"PNG",0,0,a,o),n.save("certificate.pdf");case 11:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,i){var s=e.apply(n,t);function a(e){h(s,r,i,a,c,"next",e)}function c(e){h(s,r,i,a,c,"throw",e)}a(void 0)}))});return function(){return n.apply(this,arguments)}}();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.x7,{position:"bottom-center",reverseOrder:!1}),(0,s.jsx)("div",{id:p,style:{fontSize:"16px",height:768,color:"#000",width:1080,fontWeight:400},children:(0,s.jsxs)("div",{style:{backgroundImage:'url("/certificateAssets/bg.png")',backgroundPosition:"left",backgroundRepeat:"no-repeat",backgroundSize:"contain",padding:"6rem 8rem"},children:[(0,s.jsx)("p",{style:{fontSize:"64px",color:"#FFA502",textAlign:"center",margin:0},children:"RAMAERA INDUSTRIES LTD"}),(0,s.jsxs)("p",{style:{fontSize:"1.4rem",textTransform:"capitalize"},children:["Received From ",(0,s.jsx)("span",{style:{fontWeight:600},children:n})]}),(0,s.jsxs)("span",{style:{fontSize:"1.6rem"},children:["We have Received the sum of rupees"," ",(0,s.jsxs)("span",{style:{color:"red"},children:[r," (",(0,a.default)(r)," ONLY )"]})]}),(0,s.jsxs)("span",{style:{fontSize:"1.6rem"},children:["kyc"===t||"advanceKyc"===t?", For your ":", For ",(0,s.jsx)("span",{style:{color:"#1FAE47",textTransform:"uppercase"},children:"kyc"===t?"basic":"advanceKyc"===t?"advance":t}),("kyc"===t||"advanceKyc"===t)&&" KYC"]}),(0,s.jsx)("p",{style:{color:"white",fontSize:"1.8rem",backgroundColor:"green",textAlign:"center",border:"solid 2px black",margin:0},children:o}),(0,s.jsxs)("div",{style:{display:"flex",alignItems:"right",flexDirection:"column",margin:" 0 0 0 600px"},children:[(0,s.jsx)("img",{style:{width:"200px",transform:"scale(80%)"},src:"/certificateAssets/stamp1.png",alt:""}),(0,s.jsx)("span",{style:{width:"200px",textAlign:"center",fontWeight:"bold",fontSize:"0.8rem"},children:"Authorized Stamp"})]})]})}),(0,s.jsx)(d.Z,{sx:{mb:2},variant:"outlined",onClick:f,children:"Print"})]})}},60943:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a}});var r=129000.9889.toString().split("."),i=r[0],s=r[1];a(Number(i)),a(Number(s));function a(e){var n=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"],t=["Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],r=["","Ten","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"],i=function(e,n){return 0==e?"":" "+(1==e?t[n]:r[e])},s=function(e,t,r){return(0!=e&&1!=t?" "+n[e]:"")+(0!=t||e>0?" "+r:"")},a="",c=0,o=0,u=0,d=[];if(e+="",isNaN(parseInt(e)))a="";else if(parseInt(e)>0&&e.length<=10){for(c=e.length-1;c>=0;c--)switch(o=e[c]-0,u=c>0?e[c-1]-0:0,e.length-c-1){case 0:d.push(s(o,u,""));break;case 1:case 4:case 6:case 8:d.push(i(o,e[c+1]));break;case 2:d.push(0!=o?" "+n[o]+" Hundred"+(0!=e[c+1]&&0!=e[c+2]?" and":""):"");break;case 3:d.push(s(o,u,"Thousand"));break;case 5:d.push(s(o,u,"Lakh"));break;case 7:d.push(s(o,u,"Crore"));break;case 9:d.push(0!=o?" "+n[o]+" Hundred"+(0!=e[c+1]||0!=e[c+2]?" and":" Crore"):"")}a=d.reverse().join("")}else a="";return a}}},function(e){e.O(0,[5443,7847,5370,9990,4789,3778,9774,2888,179],(function(){return n=10035,e(e.s=n);var n}));var n=e.O();_N_E=n}]);