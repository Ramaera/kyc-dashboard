(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6115],{96909:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/Tabs/Info",function(){return n(48072)}])},48072:function(e,t,n){"use strict";n.r(t);var r=n(34051),a=n.n(r),l=n(85893),i=n(45477),u=n(17677),o=n(46230),s=n(20427),d=n(50319),c=n(8987),m=n(86886),b=n(50135),v=n(87357),f=n(67294),h=n(86501);function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function A(e,t,n,r,a,l,i){try{var u=e[l](i),o=u.value}catch(s){return void n(s)}u.done?t(o):Promise.resolve(o).then(r,a)}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){P(e,t,n[t])}))}return e}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);i=!0);}catch(o){u=!0,a=o}finally{try{i||null==n.return||n.return()}finally{if(u)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=function(){var e=(0,o.T)(),t=(0,o.C)((function(e){var t;return null===(t=e.user)||void 0===t?void 0:t.data})),n=(0,f.useState)(null),r=n[0],p=n[1],P=(0,f.useState)(null),g=P[0],E=P[1],_=(0,f.useState)(null),j=_[0],Z=_[1],y=(0,f.useState)(null),O=y[0],D=y[1],C=(0,f.useState)(null),S=C[0],I=C[1],T=(0,f.useState)(null),k=T[0],w=T[1],R=(0,f.useState)(!1),M=R[0],V=R[1],G=x((0,d.D)(i.v9),1)[0],W=(0,f.useState)(null),q=W[0],B=W[1],F=(0,f.useState)({address:"",aadhaar:"",pan:""}),U=F[0],J=F[1],H=(0,f.useState)({mobileNumber:null,AlternateMobileNumber:null,email:null}),L=H[0],X=H[1],$=function(e){return/\S+@\S+\.\S+/.test(e)},z=function(e){return/^\d{10}$/.test(e)},K=function(){var n,l=(n=a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(z(O)){n.next=5;break}return X(N({},L,{mobileNumber:"Please enter a valid mobile number"})),n.abrupt("return");case 5:X(N({},L,{mobileNumber:""}));case 6:if(z(S)){n.next=11;break}return X(N({},L,{AlternateMobileNumber:"Please enter a valid Alternate mobile number"})),n.abrupt("return");case 11:X(N({},L,{AlternateMobileNumber:""}));case 12:if($(k)){n.next=15;break}return X(N({},L,{email:"Please enter a valid Email"})),n.abrupt("return");case 15:return V(!0),n.prev=16,n.next=19,G({variables:{name:r,father_or_husband_name:g,date_of_birth:j,mobile_number:O,alternate_mobile_number:S,demat_account:q,email:k,Address:U.address,aadharCardNumber:U.aadhaar,panCardNumber:U.pan}});case 19:e((0,s.j2)(N({},t,{name:r,father_or_husband_name:g,date_of_birth:j,mobile_number:O,alternate_mobile_number:S,demat_account:q,email:k,Address:U.address,aadharCardNumber:U.aadhaar,panCardNumber:U.pan}))),h.ZP.success("Details Updated"),n.next=27;break;case 23:n.prev=23,n.t0=n.catch(16),console.log(n.t0.message),h.ZP.error("Email already registered");case 27:V(!1);case 28:case"end":return n.stop()}}),n,null,[[16,23]])})),function(){var e=this,t=arguments;return new Promise((function(r,a){var l=n.apply(e,t);function i(e){A(l,r,a,i,u,"next",e)}function u(e){A(l,r,a,i,u,"throw",e)}i(void 0)}))});return function(){return l.apply(this,arguments)}}();return(0,f.useEffect)((function(){var e;t&&(p(null===t||void 0===t?void 0:t.name),E(null===t||void 0===t?void 0:t.father_or_husband_name),Z(null===t||void 0===t||null===(e=t.date_of_birth)||void 0===e?void 0:e.slice(0,10)),D(null===t||void 0===t?void 0:t.mobile_number),I(null===t||void 0===t?void 0:t.alternate_mobile_number),w(null===t||void 0===t?void 0:t.email),B(null===t||void 0===t?void 0:t.demat_account),J({address:null===t||void 0===t?void 0:t.Address,aadhaar:null===t||void 0===t?void 0:t.aadharCardNumber,pan:null===t||void 0===t?void 0:t.panCardNumber}))}),[t]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(m.ZP,{container:!0,p:2,spacing:2,children:[(0,l.jsx)(m.ZP,{item:!0,xs:12,sm:4,children:(0,l.jsx)(b.Z,{required:!0,id:"outlined",label:"Full Name",disabled:(null===t||void 0===t?void 0:t.kyc)===u.Z.status.APPROVED,fullWidth:!0,value:r,variant:"outlined",onChange:function(e){p(e.target.value)}})}),(0,l.jsx)(m.ZP,{item:!0,xs:12,sm:4,children:(0,l.jsx)(b.Z,{required:!0,label:"Father's/Husband's Name",variant:"outlined",disabled:(null===t||void 0===t?void 0:t.kyc)===u.Z.status.APPROVED,fullWidth:!0,value:g,onChange:function(e){E(e.target.value)}})}),(0,l.jsx)(m.ZP,{item:!0,xs:12,sm:4,children:(0,l.jsx)(b.Z,{required:!0,hidden:!0,label:"Date of Birth",variant:"outlined",fullWidth:!0,disabled:(null===t||void 0===t?void 0:t.kyc)===u.Z.status.APPROVED,placeholder:"",value:j,onChange:function(e){Z(e.target.value)}})})]}),(0,l.jsxs)(m.ZP,{container:!0,pr:2,pb:2,pl:2,spacing:2,children:[(0,l.jsxs)(m.ZP,{item:!0,xs:12,sm:4,children:[(0,l.jsx)(b.Z,{required:!0,label:"Mobile Number",variant:"outlined",fullWidth:!0,disabled:(null===t||void 0===t?void 0:t.kyc)===u.Z.status.APPROVED,value:O,onChange:function(e){D(e.target.value),z(e.target.value)?X(N({},L,{mobileNumber:""})):X(N({},L,{mobileNumber:"Please enter a valid mobile number"}))}}),L.mobileNumber&&(0,l.jsx)("p",{children:L.mobileNumber})]}),(0,l.jsxs)(m.ZP,{item:!0,xs:12,sm:4,children:[(0,l.jsx)(b.Z,{required:!0,id:"outlined",disabled:(null===t||void 0===t?void 0:t.kyc)===u.Z.status.APPROVED,label:"Alternate Number",fullWidth:!0,variant:"outlined",value:S,onChange:function(e){I(e.target.value),z(e.target.value)?X(N({},L,{AlternateMobileNumber:""})):X(N({},L,{AlternateMobileNumber:"Please enter a valid Alternate number"}))}}),L.AlternateMobileNumber&&(0,l.jsx)("p",{children:L.AlternateMobileNumber})]}),(0,l.jsxs)(m.ZP,{item:!0,xs:12,sm:4,children:[(0,l.jsx)(b.Z,{required:!0,disabled:(null===t||void 0===t?void 0:t.kyc)===u.Z.status.APPROVED,label:"Email ID",variant:"outlined",fullWidth:!0,value:k,onChange:function(e){w(e.target.value),$(e.target.value)?X(N({},L,{email:null})):X(N({},L,{email:"Please enter a valid Email"}))}}),L.email&&(0,l.jsx)("p",{children:L.email})]})]}),(0,l.jsxs)(m.ZP,{container:!0,pr:2,pb:2,pl:2,spacing:2,children:[(0,l.jsx)(m.ZP,{item:!0,xs:12,sm:4,children:(0,l.jsx)(b.Z,{required:!0,label:"Address",variant:"outlined",fullWidth:!0,value:U.address,onChange:function(e){J(N({},U,{address:e.target.value}))}})}),(0,l.jsx)(m.ZP,{item:!0,xs:12,sm:4,children:(0,l.jsx)(b.Z,{required:!0,id:"outlined",label:"Aadhaar Number",fullWidth:!0,variant:"outlined",value:U.aadhaar,onChange:function(e){J(N({},U,{aadhaar:e.target.value}))}})}),(0,l.jsx)(m.ZP,{item:!0,xs:12,sm:4,children:(0,l.jsx)(b.Z,{required:!0,label:"PanCard Number",variant:"outlined",fullWidth:!0,value:U.pan,onChange:function(e){J(N({},U,{pan:e.target.value}))}})})]}),(0,l.jsxs)(m.ZP,{container:!0,p:2,spacing:2,children:[(null===t||void 0===t?void 0:t.kyc)!==u.Z.status.APPROVED&&(0,l.jsx)(m.ZP,{item:!0,xs:12,sm:4,children:(0,l.jsx)(v.Z,{component:"form",children:(0,l.jsx)(c.Z,{loading:M,disabled:L.AlternateMobileNumber||L.email||L.mobileNumber,fullWidth:!0,variant:"contained",onClick:function(){K()},children:"Submit"})})}),(0,l.jsx)(h.x7,{position:"bottom-center",reverseOrder:!1}),(0,l.jsx)(m.ZP,{item:!0,xs:4})]})]})}},17677:function(e,t){"use strict";t.Z={project:{AGRA:"agra",HAJIPUR:"hajipur"},role:{ADMIN:"ADMIN",AGENT:"AGENT",USER:"USER"},membership:{ADVANCE:"ADVANCE",BASIC:"BASIC"},status:{AGENT_APPROVED:"AGENT_APPROVED",APPROVED:"APPROVED",NOT_INITIALIZED:"NOT_INITIALIZED",ONGOING:"ONGOING",PENDING:"PENDING",REJECTED:"REJECTED",SUBMITTED:"SUBMITTED"},amount:{beforeFifteenthAugustBasicAmount:1e3,beforeFifteenthAugustAdvanceAmount:1e5,afterFifteenthAugustBasicAmount:2e3,afterFifteenthAugustAdvanceAmount:2e5}}}},function(e){e.O(0,[5370,9990,4789,2052,4753,6827,6549,7058,788,135,8549,1598,9774,2888,179],(function(){return t=96909,e(e.s=t);var t}));var t=e.O();_N_E=t}]);