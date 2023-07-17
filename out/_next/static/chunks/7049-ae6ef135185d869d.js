"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7049],{27266:function(e,r,n){n.r(r);var t=n(34051),a=n.n(t),o=n(85893),i=n(45477),s=n(46230),u=n(50319),l=n(8987),c=n(86886),d=n(55113),f=n(87357),h=n(15861),p=n(50135),m=n(11057),v=n(50657),x=n(11163),y=n.n(x),g=n(67294),b=n(86501);function w(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function j(e,r,n,t,a,o,i){try{var s=e[o](i),u=s.value}catch(l){return void n(l)}s.done?r(u):Promise.resolve(u).then(t,a)}function Z(e){return function(){var r=this,n=arguments;return new Promise((function(t,a){var o=e.apply(r,n);function i(e){j(o,t,a,i,s,"next",e)}function s(e){j(o,t,a,i,s,"throw",e)}i(void 0)}))}}function P(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,a,o=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(t=n.next()).done)&&(o.push(t.value),!r||o.length!==r);i=!0);}catch(u){s=!0,a=u}finally{try{i||null==n.return||n.return()}finally{if(s)throw a}}return o}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return w(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=function(e){var r=e.open,n=e.setOpen,t=((0,s.C)((function(e){return e.user.data})),(0,g.useState)(!1)),x=t[0],w=t[1],j=(0,g.useState)(""),k=j[0],C=j[1],S=(0,g.useState)(""),I=S[0],A=S[1],W=(0,g.useState)(""),F=W[0],q=W[1],D=(0,g.useState)(""),E=D[0],O=(D[1],(0,g.useState)(!1)),_=O[0],M=(O[1],P((0,u.D)(i.ay),1)[0]),N=function(){n(!1)},R=function(){var e=Z(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(k.length<8)){e.next=3;break}return b.ZP.error("Private key is not valid"),e.abrupt("return");case 3:w(!0),b.ZP.error("Private key is not getting checked");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Z(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(I===F){e.next=3;break}return b.ZP.error("Passwords Don't Match"),e.abrupt("return");case 3:if(!(I.length<8)){e.next=8;break}return b.ZP.error("Minimun Password Length is 8"),e.abrupt("return");case 8:return e.prev=8,e.next=11,M({variables:{pwId:E,newPassword:I}});case 11:e.sent&&(b.ZP.success("Password Changed"),y().push("/login")),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(8),console.log(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[8,15]])})));return function(){return e.apply(this,arguments)}}();return(0,g.useEffect)((function(){w(!1)}),[]),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(v.Z,{onClose:N,open:r,children:(0,o.jsx)(c.ZP,{component:d.Z,elevation:6,square:!0,children:(0,o.jsxs)(f.Z,{sx:{my:2,p:1,mx:2,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,o.jsx)(h.Z,{variant:"h3",sx:{my:2},children:"Forgot Password?"}),(0,o.jsxs)(h.Z,{variant:"h6",color:"text.secondary",fontWeight:"normal",children:["Please Fill This Form to Reset Your Password"," "]}),(0,o.jsxs)(f.Z,{children:[!x&&(0,o.jsx)(p.Z,{margin:"normal",required:!0,fullWidth:!0,id:"referralId",label:"Please Enter your Private Key ",autoFocus:!0,onChange:function(e){C(e.target.value)}}),x&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(p.Z,{margin:"normal",required:!0,fullWidth:!0,id:"referralId",type:"password",label:"Please Enter Your New password",autoFocus:!0,onChange:function(e){q(e.target.value)}}),(0,o.jsx)(p.Z,{margin:"normal",required:!0,fullWidth:!0,id:"referralId",type:"password",label:"Please Confirm Your New password",onChange:function(e){A(e.target.value)}})]}),!x&&(0,o.jsx)(l.Z,{loading:_,onClick:function(){R()},type:"submit",fullWidth:!0,variant:"contained",sx:{mt:1,mb:1},children:"Validate Private Key"}),x&&(0,o.jsx)(l.Z,{loading:_,onClick:function(){L(),y().push("/auth/login")},type:"submit",fullWidth:!0,variant:"contained",sx:{mt:1,mb:1},children:"Change Password"}),(0,o.jsx)(m.Z,{color:"error",onClick:N,fullWidth:!0,variant:"outlined",sx:{mt:0,mb:2},children:"Cancel"})]})]})})})})}},97049:function(e,r,n){n.r(r),n.d(r,{default:function(){return I}});var t=n(34051),a=n.n(t),o=n(85893),i=n(45477),s=n(50319),u=n(52186),l=n(58883),c=n(8987),d=n(87109),f=n(93946),h=n(87357),p=n(11057),m=n(86886),v=n(55113),x=n(50135),y=n(15861),g=n(41664),b=n.n(g),w=n(11163),j=n(67294),Z=n(86501),P=n(27266);function k(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function C(e,r,n,t,a,o,i){try{var s=e[o](i),u=s.value}catch(l){return void n(l)}s.done?r(u):Promise.resolve(u).then(t,a)}function S(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,a,o=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(t=n.next()).done)&&(o.push(t.value),!r||o.length!==r);i=!0);}catch(u){s=!0,a=u}finally{try{i||null==n.return||n.return()}finally{if(s)throw a}}return o}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return k(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(){var e=(0,w.useRouter)(),r=(0,j.useState)(""),n=r[0],t=r[1],g=(0,j.useState)(!1),k=g[0],I=g[1],A=(0,j.useState)(""),W=A[0],F=A[1],q=(0,j.useState)(!1),D=q[0],E=q[1],O=(0,j.useState)(!1),_=O[0],M=O[1],N=S((0,s.D)(i.ym),1)[0],R=function(){if(n){if(W&&!(W.length<8))return!0;Z.ZP.error("Password is not valid!")}else Z.ZP.error("PW ID is not valid!")},L=function(){var r,t=(r=a().mark((function r(){var t,o,i,s,u,l,c,d,f;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t=R(),M(!0),!t){r.next=31;break}return r.prev=3,r.next=6,N({variables:{pw_id:n,password:W}});case 6:for(o=r.sent,i=o.data.login,s=!0,u=!1,l=void 0,r.prev=9,c=Object.keys(i)[Symbol.iterator]();!(s=(d=c.next()).done);s=!0)f=d.value,localStorage.setItem(f,i[f]);r.next=17;break;case 13:r.prev=13,r.t0=r.catch(9),u=!0,l=r.t0;case 17:r.prev=17,r.prev=18,s||null==c.return||c.return();case 20:if(r.prev=20,!u){r.next=23;break}throw l;case 23:return r.finish(20);case 24:return r.finish(17);case 25:e.reload(),r.next=31;break;case 28:r.prev=28,r.t1=r.catch(3),Z.ZP.error(r.t1.message);case 31:M(!1);case 32:case"end":return r.stop()}}),r,null,[[3,28],[9,13,17,25],[18,,20,24]])})),function(){var e=this,n=arguments;return new Promise((function(t,a){var o=r.apply(e,n);function i(e){C(o,t,a,i,s,"next",e)}function s(e){C(o,t,a,i,s,"throw",e)}i(void 0)}))});return function(){return t.apply(this,arguments)}}();return(0,o.jsxs)(m.ZP,{component:v.Z,elevation:6,square:!0,children:[(0,o.jsxs)(h.Z,{sx:{my:8,p:2,mx:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,o.jsx)(y.Z,{variant:"h1",sx:{my:2},children:"Login"}),(0,o.jsx)(y.Z,{variant:"h4",color:"text.secondary",fontWeight:"normal",sx:{mb:0},children:"For the purpose of industry regulation, your details are required."}),(0,o.jsxs)(h.Z,{component:"form",noValidate:!0,sx:{mt:0},children:[(0,o.jsx)(x.Z,{margin:"normal",required:!0,fullWidth:!0,id:"referralId",label:"PlanetWay Refferal Id",name:"referralId",autoFocus:!0,onChange:function(e){t(e.target.value)}}),(0,o.jsx)(x.Z,{margin:"normal",required:!0,fullWidth:!0,onChange:function(e){F(e.target.value)},value:W,name:"password",label:"Password",type:k?"text":"password",id:"password",autoComplete:"current-password",InputProps:{endAdornment:(0,o.jsx)(d.Z,{position:"end",children:(0,o.jsx)(f.Z,{edge:"end","aria-label":"togglw password visibility",onClick:function(){return I(!k)},children:k?(0,o.jsx)(u.Z,{}):(0,o.jsx)(l.Z,{})})})}}),(0,o.jsx)(c.Z,{loading:_,fullWidth:!0,type:"submit",onClick:function(){L()},disabled:_,variant:"contained",sx:{mt:3,mb:2},children:"Login"}),(0,o.jsx)(y.Z,{variant:"body1",color:"text.secondary","text-align":"left",children:"Don't Have An Account?"}),(0,o.jsx)(m.ZP,{item:!0,xs:!0,children:(0,o.jsx)(b(),{href:"#",children:(0,o.jsxs)("a",{onClick:function(){E(!0)},children:[" ","Forgot Password"]})})}),(0,o.jsx)(p.Z,{onClick:function(){e.push("/auth/signup")},fullWidth:!0,variant:"outlined",sx:{mt:2,mb:2},children:"Register"}),(0,o.jsx)(P.default,{open:D,setOpen:E})]})]}),(0,o.jsx)(Z.x7,{})]})}}}]);