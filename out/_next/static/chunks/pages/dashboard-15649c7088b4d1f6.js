(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8026],{26117:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return t(7925)}])},32571:function(e,n,t){"use strict";t.r(n);var r=t(34051),a=t.n(r),i=t(85893),o=t(52441),c=t(42480),s=t(46230),l=t(55511),u=t(50319),d=t(8987),h=t(15861),f=t(86886),p=t(50135),m=t(11057),x=t(67720),b=t(87357),v=(t(19662),t(37070),t(93491),t(67294)),j=t(86501);function g(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function y(e,n,t,r,a,i,o){try{var c=e[i](o),s=c.value}catch(l){return void t(l)}c.done?n(s):Promise.resolve(s).then(r,a)}function Z(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function o(e){y(i,r,a,o,c,"next",e)}function c(e){y(i,r,a,o,c,"throw",e)}o(void 0)}))}}function w(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,i=[],o=!0,c=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);o=!0);}catch(s){c=!0,a=s}finally{try{o||null==t.return||t.return()}finally{if(c)throw a}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return g(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return g(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=function(){var e=(0,s.C)((function(e){return e.user.data})),n=(0,v.useState)(""),t=n[0],r=n[1],g=(0,v.useState)(""),y=g[0],k=g[1],P=(0,v.useState)(!1),S=P[0],C=P[1],A=w((0,u.D)(o.Is),1)[0],I=w((0,u.D)(o.yW),1)[0],N=w((0,u.D)(o.su),1)[0],_=(0,v.useState)(!1),R=_[0],T=_[1],E=(0,v.useState)(!1),O=E[0],U=E[1],B=(0,v.useState)(null),D=B[0],M=B[1],L=(0,v.useState)(null),F=L[0],K=L[1],W=(0,v.useState)(),X=W[0],Y=W[1],$=(0,v.useState)(),q=$[0],z=$[1],H=function(){var e=Z(a().mark((function e(n,t,r){var i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I({variables:{id:n,title:r,url:t}});case 2:return i=e.sent,e.abrupt("return",i);case 4:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),G=function(){var e=Z(a().mark((function e(n,t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A({variables:{title:t,url:n}});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),J=function(){var e=Z(a().mark((function e(n){var t,r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n?R:O){e.next=3;break}return e.abrupt("return");case 3:if(t=n?X:q,r=n?c.Z.nominee_aadhar.items[0].id:c.Z.nominee_aadhar.items[1].id,i="","nominee_aadhar_front"!==r){e.next=13;break}return e.next=9,(0,l.Z)(D);case 9:i=e.sent,j.ZP.success("Nominee Aadhar Front Updated"),e.next=17;break;case 13:return e.next=15,(0,l.Z)(F);case 15:i=e.sent,j.ZP.success("Nominee Aadhar Back Updated");case 17:if(!t){e.next=22;break}return e.next=20,H(t.id,i,r);case 20:e.next=24;break;case 22:return e.next=24,G(i,r);case 24:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Q=function(){var e=Z(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t?y?X||R?!(!q&&!O)||(alert("Please Select Nominee Aadhar Back"),null):(alert("Please Select Nominee Aadhar Front"),null):(alert("Please Enter Nominee Relation"),null):(alert("Please Enter Nominee Name"),null)){e.next=3;break}return e.abrupt("return");case 3:return C(!0),e.prev=4,e.next=7,N({variables:{name:t,relationship:y}});case 7:return e.next=9,J(!0);case 9:return e.next=11,J(!1);case 11:j.ZP.success("Nominee Updated Succesfully"),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),console.log(e.t0);case 17:C(!1);case 18:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(){return e.apply(this,arguments)}}();return(0,v.useEffect)((function(){e&&(e.nominee&&(r(e.nominee.name),k(e.nominee.relationship)),e.documents&&e.documents.length>0&&e.documents.find((function(e){e.title.toLowerCase()===c.Z.nominee_aadhar.items[0].id?(Y(e),M(e.url)):e.title.toLowerCase()===c.Z.nominee_aadhar.items[1].id&&(K(e.url),z(e))})))}),[e]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h.Z,{variant:"h4",sx:{my:2},children:"Please Fill the form to enlist nominee"}),(0,i.jsxs)(f.ZP,{container:!0,p:2,spacing:2,children:[(0,i.jsx)(f.ZP,{item:!0,xs:4,children:(0,i.jsx)(p.Z,{id:"outlined",label:"Full Name*",fullWidth:!0,value:t,variant:"outlined",onChange:function(e){r(e.target.value)}})}),(0,i.jsx)(f.ZP,{item:!0,xs:4,children:(0,i.jsx)(p.Z,{label:"Relationship",variant:"outlined",fullWidth:!0,value:y,onChange:function(e){k(e.target.value)}})}),(0,i.jsx)(f.ZP,{item:!0,xs:4})]}),(0,i.jsxs)(f.ZP,{container:!0,p:2,spacing:2,children:[(0,i.jsxs)(f.ZP,{item:!0,xs:4,children:[D?(0,i.jsx)("img",{src:"object"==typeof D?URL.createObjectURL(D):D,height:200,width:200}):null,(0,i.jsxs)(m.Z,{variant:"contained",component:"label",children:["Upload Aadhar Card Front",(0,i.jsx)("input",{type:"file",accept:"image/*",hidden:!0,onChange:function(e){e.target.files.length>0&&(M(e.target.files[0]),T(!0))}})]})]}),(0,i.jsxs)(f.ZP,{item:!0,xs:4,children:[F?(0,i.jsx)("img",{src:"object"==typeof F?URL.createObjectURL(F):F,height:200,width:200}):null,(0,i.jsxs)(m.Z,{variant:"contained",component:"label",children:["Upload Aadhar Card Back",(0,i.jsx)("input",{type:"file",accept:"image/*",hidden:!0,onChange:function(e){e.target.files.length>0&&(K(e.target.files[0]),U(!0))}})]})]}),(0,i.jsx)(f.ZP,{item:!0,xs:4}),(0,i.jsx)(x.Z,{}),(0,i.jsxs)(b.Z,{component:"form",mt:2,children:[(0,i.jsx)(d.Z,{loading:S,variant:"contained",component:"label",onClick:function(){Q()},children:"Submit"}),(0,i.jsx)(j.x7,{position:"bottom-center",reverseOrder:!1})]})]})]})}},81909:function(e,n,t){"use strict";t.r(n);var r=t(34051),a=t.n(r),i=t(85893),o=t(52441),c=t(42480),s=t(46230),l=t(55511),u=t(50319),d=t(8987),h=t(15861),f=t(86886),p=t(11057),m=t(55113),x=t(7906),b=t(295),v=t(53252),j=t(72882),g=t(53816),y=t(67294),Z=t(86501);function w(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function k(e,n,t,r,a,i,o){try{var c=e[i](o),s=c.value}catch(l){return void t(l)}c.done?n(s):Promise.resolve(s).then(r,a)}function P(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,i=[],o=!0,c=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);o=!0);}catch(s){c=!0,a=s}finally{try{o||null==t.return||t.return()}finally{if(c)throw a}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return w(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return w(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var S=[{name:"Company Name",value:"RAMAERA INDUSTRIES LTD."},{name:"Bank Name",value:"KOTAK MAHINDRA BANK "},{name:"Branch",value:"NOIDA SECTOR 63"},{name:"A/C No.",value:"4747237385"},{name:"IFSC CODE ",value:"KKBK0000180"}];n.default=function(){var e=(0,s.C)((function(e){return e.user.data})),n=(0,y.useState)(!1),t=n[0],r=n[1],w=(0,y.useState)(null),C=w[0],A=w[1],I=(0,y.useState)(),N=I[0],_=I[1],R=(0,y.useState)(!1),T=R[0],E=R[1],O=(0,y.useState)(!1),U=O[0],B=O[1],D=P((0,u.D)(o.Is),1)[0],M=P((0,u.D)(o.yW),1)[0],L=function(e){return!!e||(alert("Invalid Image"),!1)},F=function(){var e,n=(e=a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(L(C)){e.next=3;break}return e.abrupt("return");case 3:if(r(!0),e.prev=4,n="",!T){e.next=13;break}return console.log("hjjj"),e.next=10,(0,l.Z)(C);case 10:n=e.sent,e.next=14;break;case 13:n=C;case 14:if(Z.ZP.success("Payment Slip Updated "),!N){e.next=21;break}return console.log("checkpoint"),e.next=19,M({variables:{name:c.Z.payment_proof.items[0].id,url:n,id:N.id}});case 19:e.next=23;break;case 21:return e.next=23,D({variables:{title:c.Z.payment_proof.items[0].id,url:n}});case 23:e.next=27;break;case 25:e.prev=25,e.t0=e.catch(4);case 27:r(!1);case 28:case"end":return e.stop()}}),e,null,[[4,25]])})),function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function o(e){k(i,r,a,o,c,"next",e)}function c(e){k(i,r,a,o,c,"throw",e)}o(void 0)}))});return function(){return n.apply(this,arguments)}}();return(0,y.useEffect)((function(){e&&e.documents&&e.documents.length>0&&e.documents.find((function(e){e.title.toLowerCase()===c.Z.payment_proof.items[0].id&&(_(e),A(e.url))}))}),[e]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(h.Z,{variant:"h4",sx:{my:2},children:["Kindly Deposit Rs.","BASIC"===e.membership?"10,000/-":"1,25,000/-"," and upload the payment slip as a proof!"]}),(0,i.jsx)(j.Z,{component:m.Z,children:(0,i.jsx)(x.Z,{sx:{minWidth:100},"aria-label":"simple table",children:(0,i.jsx)(b.Z,{children:S.map((function(e){return(0,i.jsxs)(g.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,i.jsx)(v.Z,{component:"th",scope:"row",children:e.name}),(0,i.jsx)(v.Z,{align:"right",children:e.value})]},e.name)}))})})}),C?(0,i.jsx)("img",{src:"object"==typeof C?URL.createObjectURL(C):C,height:200,width:200}):null,(0,i.jsxs)(f.ZP,{container:!0,p:2,spacing:2,children:[(0,i.jsx)(f.ZP,{item:!0,xs:4,children:(0,i.jsxs)(p.Z,{variant:"contained",component:"label",children:["Select Payment Slip",(0,i.jsx)("input",{type:"file",accept:"image/*",hidden:!0,onChange:function(e){e.target.files.length>0&&(B(!0),A(e.target.files[0]),E(!0))}})]})}),(0,i.jsx)(f.ZP,{item:!0,xs:2,children:(0,i.jsx)(d.Z,{loading:t,fullWidth:!0,variant:"contained",disabled:!U,onClick:function(){F()},children:"Submit"})}),(0,i.jsx)(Z.x7,{position:"bottom-center",reverseOrder:!1})]})]})}},7925:function(e,n,t){"use strict";t.r(n);var r=t(85893),a=t(46225),i=t(78273),o=t(74732),c=t(18703),s=t(90948),l=t(87357),u=t(53156),d=t(88409),h=t(40044),f=t(66242),p=t(86886),m=t(9008),x=t.n(m),b=t(82245),v=t(67294),j=t(91434),g=t(48072),y=t(32571),Z=t(81909),w=(0,s.ZP)(l.Z)((function(e){var n=e.theme;return"\n      padding: 0 ".concat(n.spacing(2),";\n      position: relative;\n      bottom: -1px;\n\n      .MuiTabs-root {\n        height: 44px;\n        min-height: 44px;\n      }\n\n      .MuiTabs-scrollableX {\n        overflow-x: auto !important;\n      }\n\n      .MuiTabs-indicator {\n          min-height: 4px;\n          height: 4px;\n          box-shadow: none;\n          bottom: -4px;\n          background: none;\n          border: 0;\n\n          &:after {\n            position: absolute;\n            left: 50%;\n            width: 28px;\n            content: ' ';\n            margin-left: -14px;\n            background: ").concat(n.colors.primary.main,";\n            border-radius: inherit;\n            height: 100%;\n          }\n      }\n\n      .MuiTab-root {\n          &.MuiButtonBase-root {\n              height: 44px;\n              min-height: 44px;\n              background: ").concat(n.colors.alpha.white[50],";\n              border: 1px solid ").concat(n.colors.alpha.black[10],";\n              border-bottom: 0;\n              position: relative;\n              margin-right: ").concat(n.spacing(1),";\n              font-size: ").concat(n.typography.pxToRem(14),";\n              color: ").concat(n.colors.alpha.black[80],";\n              border-bottom-left-radius: 0;\n              border-bottom-right-radius: 0;\n\n              .MuiTouchRipple-root {\n                opacity: .1;\n              }\n\n              &:after {\n                position: absolute;\n                left: 0;\n                right: 0;\n                width: 100%;\n                bottom: 0;\n                height: 1px;\n                content: '';\n                background: ").concat(n.colors.alpha.black[10],";\n              }\n\n              &:hover {\n                color: ").concat(n.colors.alpha.black[100],";\n              }\n          }\n\n          &.Mui-selected {\n              color: ").concat(n.colors.alpha.black[100],";\n              background: ").concat(n.colors.alpha.white[100],";\n              border-bottom-color: ").concat(n.colors.alpha.white[100],";\n\n              &:after {\n                height: 0;\n              }\n          }\n      }\n  ")}));function k(){var e=(0,v.useState)("basicInfo"),n=e[0],t=e[1];return(0,r.jsxs)(b.default,{children:[(0,r.jsx)(x(),{children:(0,r.jsx)("title",{children:"KYC Dashboard"})}),(0,r.jsx)(i.Z,{children:(0,r.jsx)(o.Z,{})}),(0,r.jsxs)(u.Z,{maxWidth:"lg",children:[(0,r.jsx)(w,{children:(0,r.jsx)(d.Z,{onChange:function(e,n){t(n)},value:n,variant:"scrollable",scrollButtons:"auto",textColor:"primary",indicatorColor:"primary",children:[{value:"basicInfo",label:"Basic Info"},{value:"payment",label:"Payment"},{value:"documents",label:"Documents"},{value:"nominee",label:"Nominee"}].map((function(e){return(0,r.jsx)(h.Z,{label:e.label,value:e.value},e.value)}))})}),(0,r.jsx)(f.Z,{variant:"outlined",children:(0,r.jsxs)(p.ZP,{container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",spacing:0,children:["basicInfo"===n&&(0,r.jsx)(p.ZP,{item:!0,xs:12,children:(0,r.jsx)(l.Z,{p:4,children:(0,r.jsx)(g.default,{})})}),"payment"===n&&(0,r.jsx)(p.ZP,{item:!0,xs:12,children:(0,r.jsx)(l.Z,{p:4,children:(0,r.jsx)(Z.default,{})})}),"documents"===n&&(0,r.jsx)(p.ZP,{item:!0,xs:12,children:(0,r.jsx)(l.Z,{p:4,children:(0,r.jsx)(j.default,{})})}),"nominee"===n&&(0,r.jsx)(p.ZP,{item:!0,xs:12,children:(0,r.jsx)(l.Z,{p:4,children:(0,r.jsx)(y.default,{})})})]})})]}),(0,r.jsx)(a.Z,{})]})}k.getLayout=function(e){return(0,r.jsx)(c.Z,{children:e})},n.default=k},82245:function(e,n,t){"use strict";t.r(n);var r=t(85893);n.default=function(e){var n=e.children;return(0,r.jsx)(r.Fragment,{children:n})}},46225:function(e,n,t){"use strict";var r=t(85893),a=t(90948),i=t(53156),o=t(87357),c=t(15861),s=(0,a.ZP)(i.Z)((function(e){var n=e.theme;return"\n        margin-top: ".concat(n.spacing(4),";\n")}));n.Z=function(){return(0,r.jsx)(s,{className:"footer-wrapper",children:(0,r.jsxs)(o.Z,{pb:4,display:{xs:"block",md:"flex"},alignItems:"center",textAlign:{xs:"center",md:"left"},justifyContent:"space-between",children:[(0,r.jsx)(o.Z,{}),(0,r.jsx)(c.Z,{sx:{pt:{xs:2,md:0}},variant:"subtitle1"})]})})}},78273:function(e,n,t){"use strict";var r=t(85893),a=t(45697),i=t.n(a),o=t(90948),c=t(87357),s=t(53156),l=(0,o.ZP)(c.Z)((function(e){var n=e.theme;return"\n        padding: ".concat(n.spacing(4),";\n")})),u=function(e){var n=e.children;return(0,r.jsx)(l,{className:"MuiPageTitle-wrapper",children:(0,r.jsx)(s.Z,{maxWidth:"lg",children:n})})};u.propTypes={children:i().node.isRequired},n.Z=u},74732:function(e,n,t){"use strict";var r=t(85893),a=t(46230),i=t(87357),o=t(15861);n.Z=function(){var e=(0,a.C)((function(e){return e.user.data}));return(0,r.jsxs)(i.Z,{display:"flex",alignItems:{xs:"stretch",md:"center"},flexDirection:{xs:"column",md:"row"},justifyContent:"space-between",children:[(0,r.jsx)(i.Z,{display:"flex",alignItems:"center",children:(0,r.jsxs)(i.Z,{children:[(0,r.jsxs)(o.Z,{variant:"h3",component:"h3",gutterBottom:!0,children:["Welcome, ",e.name,"!"]}),(0,r.jsx)(o.Z,{variant:"subtitle2",children:"Complete Your KYC By Filling the form below"})]})}),(0,r.jsx)(i.Z,{mt:{xs:3,md:0}})]})}}},function(e){e.O(0,[2005,6944,5443,887,2937,9036,5637,6853,1838,5210,7058,3422,315,8584,2738,6572,6261,594,6233,5218,8703,8072,1434,9774,2888,179],(function(){return n=26117,e(e.s=n);var n}));var n=e.O();_N_E=n}]);