"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5297],{65250:function(e,n,t){t.r(n);var r=t(47568),a=t(828),s=t(97582),i=t(85893),o=t(4749),l=t(26183),u=t(50319),c=t(8987),d=t(86886),h=t(55113),f=t(87357),m=t(15861),x=t(50135),g=t(11057),p=t(50657),v=t(11163),Z=t.n(v),y=t(67294),j=t(86501);n.default=function(e){var n=e.open,t=e.setOpen,v=((0,l.C)((function(e){var n;return null===(n=e.user)||void 0===n?void 0:n.data})),(0,y.useState)(!1)),w=v[0],P=v[1],b=(0,y.useState)(""),C=b[0],k=b[1],W=(0,y.useState)(""),S=W[0],_=W[1],F=(0,y.useState)(""),q=F[0],D=F[1],I=(0,y.useState)(""),E=I[0],N=(I[1],(0,y.useState)(!1)),A=N[0],L=(N[1],(0,a.Z)((0,u.D)(o.ay),1)[0]),O=function(){t(!1)},R=function(){var e=(0,r.Z)((function(){return(0,s.__generator)(this,(function(e){return C.length<8?(j.ZP.error("Private key is not valid"),[2]):(P(!0),j.ZP.error("Private key is not getting checked"),[2])}))}));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=(0,r.Z)((function(){var e;return(0,s.__generator)(this,(function(n){switch(n.label){case 0:return S!==q?(j.ZP.error("Passwords Don't Match"),[2]):S.length<8?(j.ZP.error("Minimun Password Length is 8"),[2]):[3,1];case 1:return n.trys.push([1,3,,4]),[4,L({variables:{pwId:E,newPassword:S}})];case 2:return n.sent()&&(j.ZP.success("Password Changed"),Z().push("/login")),[3,4];case 3:return e=n.sent(),console.log(e.message),[3,4];case 4:return[2]}}))}));return function(){return e.apply(this,arguments)}}();return(0,y.useEffect)((function(){P(!1)}),[]),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(p.Z,{onClose:O,open:n,children:(0,i.jsx)(d.ZP,{component:h.Z,elevation:6,square:!0,children:(0,i.jsxs)(f.Z,{sx:{my:2,p:1,mx:2,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,i.jsx)(m.Z,{variant:"h3",sx:{my:2},children:"Forgot Password?"}),(0,i.jsxs)(m.Z,{variant:"h6",color:"text.secondary",fontWeight:"normal",children:["Please Fill This Form to Reset Your Password"," "]}),(0,i.jsxs)(f.Z,{children:[!w&&(0,i.jsx)(x.Z,{margin:"normal",required:!0,fullWidth:!0,label:"Please Enter your Private Key ",autoFocus:!0,onChange:function(e){k(e.target.value)}}),w&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x.Z,{margin:"normal",required:!0,fullWidth:!0,type:"password",label:"Please Enter Your New password",autoFocus:!0,onChange:function(e){D(e.target.value)}}),(0,i.jsx)(x.Z,{margin:"normal",required:!0,fullWidth:!0,type:"password",label:"Please Confirm Your New password",onChange:function(e){_(e.target.value)}})]}),!w&&(0,i.jsx)(c.Z,{loading:A,onClick:function(){R()},type:"submit",fullWidth:!0,variant:"contained",sx:{mt:1,mb:1},children:"Validate Private Key"}),w&&(0,i.jsx)(c.Z,{loading:A,onClick:function(){Y(),Z().push("/auth/login")},type:"submit",fullWidth:!0,variant:"contained",sx:{mt:1,mb:1},children:"Change Password"}),(0,i.jsx)(g.Z,{color:"error",onClick:O,fullWidth:!0,variant:"outlined",sx:{mt:0,mb:2},children:"Cancel"})]})]})})})})}},45297:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var r=t(47568),a=t(828),s=t(97582),i=t(85893),o=t(4749),l=t(50319),u=t(52186),c=t(58883),d=t(8987),h=t(87109),f=t(93946),m=t(87357),x=t(11057),g=t(86886),p=t(55113),v=t(50135),Z=t(15861),y=t(11163),j=t(67294),w=t(86501),P=t(65250);function b(){var e=(0,y.useRouter)(),n=(0,j.useState)(""),t=n[0],b=n[1],C=(0,j.useState)(!1),k=C[0],W=C[1],S=(0,j.useState)(""),_=S[0],F=S[1],q=(0,j.useState)(!1),D=q[0],I=q[1],E=(0,j.useState)(!1),N=E[0],A=E[1],L=(0,a.Z)((0,l.D)(o.ym),1)[0],O=function(){var n=(0,r.Z)((function(){var n,r,a,i,o,l,u,c,d,h;return(0,s.__generator)(this,(function(s){switch(s.label){case 0:if(n=function(){if(t){if(_)return!0;w.ZP.error("Password is not valid!")}else w.ZP.error("PW ID is not valid!")}(),A(!0),!n)return[3,4];s.label=1;case 1:return s.trys.push([1,3,,4]),[4,L({variables:{pw_id:t,password:_}})];case 2:r=s.sent(),a=r.data.login,i=!0,o=!1,l=void 0;try{for(u=Object.keys(a)[Symbol.iterator]();!(i=(c=u.next()).done);i=!0)d=c.value,localStorage.setItem(d,a[d])}catch(f){o=!0,l=f}finally{try{i||null==u.return||u.return()}finally{if(o)throw l}}return e.reload(),[3,4];case 3:return h=s.sent(),w.ZP.error(h.message),[3,4];case 4:return A(!1),[2]}}))}));return function(){return n.apply(this,arguments)}}();return(0,i.jsxs)(g.ZP,{component:p.Z,elevation:6,square:!0,children:[(0,i.jsxs)(m.Z,{sx:{my:8,p:2,mx:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,i.jsx)(Z.Z,{variant:"h1",sx:{my:2},children:"Login"}),(0,i.jsx)(Z.Z,{variant:"h4",color:"text.secondary",fontWeight:"normal",sx:{mb:0},children:"For the purpose of industry regulation, your details are required."}),(0,i.jsxs)(m.Z,{component:"form",noValidate:!0,sx:{mt:0},children:[(0,i.jsx)(v.Z,{margin:"normal",required:!0,fullWidth:!0,label:"PW ID",autoFocus:!0,onChange:function(e){b(e.target.value)}}),(0,i.jsx)(v.Z,{margin:"normal",required:!0,fullWidth:!0,onChange:function(e){F(e.target.value)},value:_,name:"password",label:"Password",type:k?"text":"password",id:"password",autoComplete:"current-password",InputProps:{endAdornment:(0,i.jsx)(h.Z,{position:"end",children:(0,i.jsx)(f.Z,{edge:"end","aria-label":"togglw password visibility",onClick:function(){return W(!k)},children:k?(0,i.jsx)(u.Z,{}):(0,i.jsx)(c.Z,{})})})}}),(0,i.jsx)(d.Z,{loading:N,fullWidth:!0,type:"submit",onClick:function(){O()},disabled:N,variant:"contained",sx:{mt:3,mb:2},children:"Login"}),(0,i.jsx)(Z.Z,{variant:"body1",color:"text.secondary","text-align":"left",children:"Don't Have An Account?"}),(0,i.jsx)(x.Z,{onClick:function(){e.push("/auth/signup")},fullWidth:!0,variant:"outlined",sx:{mt:2,mb:2},children:"Register"}),(0,i.jsx)(P.default,{open:D,setOpen:I})]})]}),(0,i.jsx)(w.x7,{})]})}}}]);