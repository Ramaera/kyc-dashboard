"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2291],{72890:function(e,r,t){t.d(r,{Z:function(){return j}});var n=t(87462),o=t(63366),a=t(67294),l=t(93680),i=t(94780),u=t(90948),s=t(71657),c=t(34867);function d(e){return(0,c.Z)("MuiFormGroup",e)}(0,t(1588).Z)("MuiFormGroup",["root","row","error"]);var f=t(74423),p=t(15704),h=t(85893);const v=["className","row"],m=(0,u.ZP)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,t.row&&r.row]}})((({ownerState:e})=>(0,n.Z)({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})));var x=a.forwardRef((function(e,r){const t=(0,s.Z)({props:e,name:"MuiFormGroup"}),{className:a,row:u=!1}=t,c=(0,o.Z)(t,v),x=(0,f.Z)(),Z=(0,p.Z)({props:t,muiFormControl:x,states:["error"]}),g=(0,n.Z)({},t,{row:u,error:Z.error}),y=(e=>{const{classes:r,row:t,error:n}=e,o={root:["root",t&&"row",n&&"error"]};return(0,i.Z)(o,d,r)})(g);return(0,h.jsx)(m,(0,n.Z)({className:(0,l.Z)(y.root,a),ownerState:g,ref:r},c))})),Z=t(51705),g=t(49299),y=t(80209),w=t(27909);const b=["actions","children","defaultValue","name","onChange","value"];var j=a.forwardRef((function(e,r){const{actions:t,children:l,defaultValue:i,name:u,onChange:s,value:c}=e,d=(0,o.Z)(e,b),f=a.useRef(null),[p,v]=(0,g.Z)({controlled:c,default:i,name:"RadioGroup"});a.useImperativeHandle(t,(()=>({focus:()=>{let e=f.current.querySelector("input:not(:disabled):checked");e||(e=f.current.querySelector("input:not(:disabled)")),e&&e.focus()}})),[]);const m=(0,Z.Z)(r,f),j=(0,w.Z)(u);return(0,h.jsx)(y.Z.Provider,{value:{name:j,onChange:e=>{v(e.target.value),s&&s(e,e.target.value)},value:p},children:(0,h.jsx)(x,(0,n.Z)({role:"radiogroup",ref:m},d,{children:l}))})}))},35893:function(e,r,t){var n=t(49064);r.Z=n.Z},16019:function(e,r,t){t.r(r),t.d(r,{default:function(){return k}});var n=t(34051),o=t.n(n),a=t(85893),l=t(45477),i=t(50319),u=t(52186),s=t(58883),c=t(8987),d=t(72890),f=t(36872),p=t(87109),h=t(93946),v=t(87357),m=t(50480),x=t(86886),Z=t(55113),g=t(50135),y=t(15861),w=t(11163),b=t(67294),j=t(86501),C=t(6154);function S(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function A(e,r,t,n,o,a,l){try{var i=e[a](l),u=i.value}catch(s){return void t(s)}i.done?r(u):Promise.resolve(u).then(n,o)}function P(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],l=!0,i=!1;try{for(t=t.call(e);!(l=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);l=!0);}catch(u){i=!0,o=u}finally{try{l||null==t.return||t.return()}finally{if(i)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return S(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return S(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(){var e=(0,w.useRouter)(),r=P(b.useState(""),2),t=r[0],n=r[1],S=P(b.useState(!1),2),k=S[0],I=S[1],R=P(b.useState(""),2),W=R[0],_=R[1],D=P(b.useState(""),2),F=D[0],q=D[1],E=P(b.useState("BASIC"),2),N=E[0],G=E[1],M=P(b.useState(!1),2),V=M[0],B=M[1],O=P(b.useState(!1),2),T=O[0],H=O[1],U=P((0,i.D)(l.kp),1)[0],K=function(){if(V)if(t){if(W&&!(W.length<8))return!0;j.ZP.error("Password is not valid!")}else j.ZP.error("PW ID is not valid!");else j.ZP.error("Please Enter a valid PWID")},L=function(){var r,n=(r=o().mark((function r(){var n,a,l,i,u,s,c,d,f;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=K(),H(!0),!n){r.next=31;break}return r.prev=3,r.next=6,U({variables:{pw_id:t.toUpperCase(),membership:N,password:W,referralAgencyCode:F}});case 6:for(a=r.sent,l=a.data.signup,i=!0,u=!1,s=void 0,r.prev=9,c=Object.keys(l)[Symbol.iterator]();!(i=(d=c.next()).done);i=!0)f=d.value,localStorage.setItem(f,l[f]);r.next=17;break;case 13:r.prev=13,r.t0=r.catch(9),u=!0,s=r.t0;case 17:r.prev=17,r.prev=18,i||null==c.return||c.return();case 20:if(r.prev=20,!u){r.next=23;break}throw s;case 23:return r.finish(20);case 24:return r.finish(17);case 25:e.reload(),r.next=31;break;case 28:r.prev=28,r.t1=r.catch(3),j.ZP.error(r.t1.message);case 31:H(!1);case 32:case"end":return r.stop()}}),r,null,[[3,28],[9,13,17,25],[18,,20,24]])})),function(){var e=this,t=arguments;return new Promise((function(n,o){var a=r.apply(e,t);function l(e){A(a,n,o,l,i,"next",e)}function i(e){A(a,n,o,l,i,"throw",e)}l(void 0)}))});return function(){return n.apply(this,arguments)}}();return(0,a.jsxs)(x.ZP,{component:Z.Z,elevation:6,square:!0,children:[(0,a.jsxs)(v.Z,{sx:{my:8,p:2,mx:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,a.jsx)(y.Z,{variant:"h1",sx:{my:2},children:"Signup"}),(0,a.jsx)(y.Z,{variant:"h4",color:"text.secondary",fontWeight:"normal",sx:{mb:0},children:"For the purpose of industry regulation, your details are required."}),(0,a.jsxs)(v.Z,{component:"form",noValidate:!0,sx:{mt:0},children:[(0,a.jsx)(g.Z,{margin:"normal",required:!0,fullWidth:!0,label:"PlanetWay Refferal Id",autoFocus:!0,onChange:function(e){n(e.target.value),function(e){var r={Reff_Code:e};C.Z.post("https://api.ramaera.com/api/KYC",r,{headers:{"Content-Type":"application/json"}}).then((function(e){B("InActive"!==e.data[0].AC_Status&&"Active"===e.data[0].AC_Status)})).catch((function(e){console.log("ERROR: ====",e)}))}(e.target.value)}}),(0,a.jsx)(y.Z,{color:"text.secondary",textAlign:"left",fontWeight:"normal",children:"Select Share Holder Type*:"}),(0,a.jsxs)(d.Z,{row:!0,defaultValue:"Basic","aria-labelledby":"demo-row-radio-buttons-group-label",name:"row-radio-buttons-group",onChange:function(e){G(e.target.value)},children:[(0,a.jsx)(m.Z,{value:"BASIC",control:(0,a.jsx)(f.Z,{}),label:"Basic"}),(0,a.jsx)(m.Z,{value:"ADVANCE",control:(0,a.jsx)(f.Z,{}),label:"Advance (Profit Sharing Partner)"})]}),(0,a.jsx)(g.Z,{margin:"normal",fullWidth:!0,label:"Agency Referral Code (optional)",onChange:function(e){q(e.target.value)}}),(0,a.jsx)(g.Z,{margin:"normal",required:!0,fullWidth:!0,onChange:function(e){_(e.target.value)},name:"password",label:"Password",type:k?"text":"password",id:"password",autoComplete:"current-password",InputProps:{endAdornment:(0,a.jsx)(p.Z,{position:"end",children:(0,a.jsx)(h.Z,{edge:"end","aria-label":"toggle password visibility",onClick:function(){return I(!k)},children:k?(0,a.jsx)(u.Z,{}):(0,a.jsx)(s.Z,{})})})}}),(0,a.jsx)(c.Z,{loading:T,fullWidth:!0,onClick:function(){L()},disabled:T,variant:"contained",sx:{mt:3,mb:2},children:"Create An Acccount"}),(0,a.jsx)(y.Z,{variant:"body1",color:"text.secondary","text-align":"left",children:"Already have an account ?"}),(0,a.jsx)(c.Z,{onClick:function(){e.push("/auth/login")},fullWidth:!0,variant:"outlined",sx:{mt:2,mb:2},href:"",children:"Login"})]})]}),(0,a.jsx)(j.x7,{})]})}}}]);