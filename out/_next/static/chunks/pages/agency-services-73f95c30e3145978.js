(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3963],{52219:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/agency-services",function(){return r(34366)}])},88559:function(e,n,r){"use strict";r.r(n);var a=r(47568),i=r(14924),t=r(26042),d=r(69396),s=r(828),o=r(97582),l=r(85893),u=r(67294),c=r(50319),h=r(2734),m=r(66242),x=r(15861),f=r(87357),p=r(50135),Z=r(86501),g=r(4749),b=r(8987);n.default=function(e){var n=e.onAddUser,r=e.agencyCode,v=(0,s.Z)((0,c.D)(g.Ti),1)[0],j=(0,u.useState)({name:"",email:"",mobileNumber:"",pincode:"",address:"",metaData:"",aadhar:"",pancard:""}),w=j[0],y=j[1],C=(0,s.Z)(u.useState(!1),2),N=C[0],A=C[1],E=function(e){var n=e.target,r=n.name,a=n.value;y((0,d.Z)((0,t.Z)({},w),(0,i.Z)({},r,a)))},P=(0,h.Z)(),k=function(){var e=(0,a.Z)((function(){var e,a,i,t;return(0,o.__generator)(this,(function(d){switch(d.label){case 0:if(e=function(){if(w.name)if(w.email)if(10===w.mobileNumber.length)if(w.pincode)if(w.address)if(12===w.aadhar.length){if(10===w.pancard.length)return!0;Z.ZP.error("Enter Valid Pan No")}else Z.ZP.error("Enter Valid Adhar No");else Z.ZP.error("Enter Address");else Z.ZP.error("Enter Pincode");else Z.ZP.error("Enter Valid Mobile Number");else Z.ZP.error("Enter E-mail Id");else Z.ZP.error("Enter Name")}(),A(!0),!e)return[3,4];d.label=1;case 1:return d.trys.push([1,3,,4]),[4,v({variables:{address:[{pincode:w.pincode,address:w.address}],email:w.email,mobileNumber:w.mobileNumber,name:w.name,referralAgencyCode:r,metaData:[{aadhar:w.aadhar,pancard:w.pancard}]}})];case 2:return i=d.sent(),n(null===i||void 0===i||null===(a=i.data)||void 0===a?void 0:a.CreateUser),Z.ZP.success("User Created Sucessfully"),y({name:"",email:"",mobileNumber:"",pincode:"",address:"",metaData:"",aadhar:"",pancard:""}),[3,4];case 3:return t=d.sent(),Z.ZP.error(t.message),[3,4];case 4:return A(!1),[2]}}))}));return function(){return e.apply(this,arguments)}}();return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(m.Z,{sx:{},children:[(0,l.jsx)(x.Z,{marginTop:2,fontSize:20,fontWeight:600,sx:{display:"flex",justifyContent:"center"},children:"Create A User For #MyCard"}),(0,l.jsxs)(f.Z,{sx:(0,i.Z)({padding:2,paddingInline:8,width:"100%",flexDirection:"row",flexWrap:"wrap"},P.breakpoints.down("sm"),{display:"block",paddingInline:1}),children:[(0,l.jsxs)(f.Z,{sx:{paddingY:2},children:[(0,l.jsx)(p.Z,{sx:{width:"49%",marginRight:"1%"},required:!0,name:"name",label:"Name",variant:"outlined",value:w.name,onChange:E}),(0,l.jsx)(p.Z,{sx:{width:"49%",marginLeft:"1%"},required:!0,name:"email",label:"Email",variant:"outlined",value:w.email,onChange:E})]}),(0,l.jsxs)(f.Z,{sx:{paddingY:2},children:[(0,l.jsx)(p.Z,{sx:{width:"49%",marginRight:"1%"},required:!0,type:"number",name:"mobileNumber",label:"Mobile Number",variant:"outlined",value:w.mobileNumber,onChange:E}),(0,l.jsx)(p.Z,{sx:{width:"49%",marginLeft:"1%"},required:!0,name:"pincode",label:"Pin Code",variant:"outlined",value:w.pincode,onChange:E})]}),(0,l.jsx)(p.Z,{sx:{width:"100%"},required:!0,name:"address",label:"Address",variant:"outlined",multiline:!0,rows:3,value:w.address,onChange:E}),(0,l.jsxs)(f.Z,{sx:{paddingY:2},children:[(0,l.jsx)(p.Z,{sx:{width:"49%",marginRight:"1%"},required:!0,type:"number",name:"aadhar",label:"Aadhar No",variant:"outlined",value:w.aadhar,onChange:E}),(0,l.jsx)(p.Z,{sx:{width:"49%",marginLeft:"1%"},required:!0,name:"pancard",label:"Pan No",variant:"outlined",value:w.pancard,onChange:E})]})]}),(0,l.jsx)(f.Z,{sx:{display:"flex",justifyContent:"center",padding:1},children:(0,l.jsx)(b.Z,{loading:N,onClick:k,variant:"contained",type:"submit",children:"Submit"})}),(0,l.jsx)(Z.x7,{position:"bottom-right",reverseOrder:!1})]})})}},34366:function(e,n,r){"use strict";r.r(n);var a=r(14924),i=r(29815),t=r(85893),d=r(91875),s=r(9395),o=r(2734),l=r(87357),u=r(15861),c=r(66242),h=r(11057),m=r(9008),x=r.n(m),f=r(43725),p=r(67294),Z=r(88559),g=r(2924),b=r(37887),v=r(4749),j=r(9473);function w(){var e=(0,p.useState)(!0),n=e[0],r=(e[1],(0,p.useState)(n)),s=r[0],m=r[1],w=(0,p.useState)(!n),y=w[0],C=w[1],N=(0,p.useState)([]),A=N[0],E=N[1],P=(0,j.v9)((function(e){var n,r;return null===(n=e.user)||void 0===n||null===(r=n.agencyCode)||void 0===r?void 0:r.agencyCode})),k=(0,b.a)(v.Ao,{variables:{agencyCode:P}});(0,p.useEffect)((function(){var e;k&&E(null===(e=k.data)||void 0===e?void 0:e.findCardHoldersInAgency)}),[k]);var _=(0,o.Z)();return(0,t.jsxs)(f.default,{children:[(0,t.jsx)(x(),{children:(0,t.jsx)("title",{children:"Agency Services"})}),(0,t.jsx)(l.Z,{padding:2,textAlign:"center",children:(0,t.jsx)(u.Z,{fontSize:30,fontWeight:600,children:"#MyCard"})}),(0,t.jsxs)(l.Z,{sx:(0,a.Z)({display:"flex"},_.breakpoints.down("sm"),{display:"block"}),children:[(0,t.jsx)(l.Z,{sx:(0,a.Z)({width:"25%",padding:2},_.breakpoints.down("sm"),{width:"100%"}),children:(0,t.jsxs)(c.Z,{sx:{height:"100%",padding:2},children:[(0,t.jsx)(h.Z,{variant:y?"outlined":"contained",component:"label",onClick:function(){m(!0),C(!1)},sx:{width:"100%"},children:"Create #myCard User"}),(0,t.jsx)(h.Z,{sx:{marginTop:2,width:"100%"},variant:y?"contained":"outlined",component:"label",onClick:function(){C(!0),m(!1)},children:"Users Applied"})]})}),y&&(0,t.jsx)(l.Z,{sx:(0,a.Z)({width:"75%",padding:2},_.breakpoints.down("sm"),{width:"100%"}),children:(0,t.jsx)(g.default,{user:A})}),s&&(0,t.jsx)(l.Z,{sx:(0,a.Z)({width:"80%",padding:2},_.breakpoints.down("sm"),{width:"100%"}),children:(0,t.jsx)(Z.default,{agencyCode:P,onAddUser:function(e){E((function(n){return(0,i.Z)(n).concat([e])}))}})})]}),(0,t.jsx)(d.Z,{})]})}w.getLayout=function(e){return(0,t.jsx)(s.Z,{children:e})},n.default=w},43725:function(e,n,r){"use strict";r.r(n);var a=r(85893);n.default=function(e){var n=e.children;return(0,a.jsx)(a.Fragment,{children:n})}},91875:function(e,n,r){"use strict";var a=r(85893),i=r(90948),t=r(53156),d=r(87357),s=r(15861),o=(0,i.ZP)(t.Z)((function(e){var n=e.theme;return"\n        margin-top: ".concat(n.spacing(4),";\n")}));n.Z=function(){return(0,a.jsx)(o,{className:"footer-wrapper",children:(0,a.jsxs)(d.Z,{pb:4,display:{xs:"block",md:"flex"},alignItems:"center",textAlign:{xs:"center",md:"left"},justifyContent:"space-between",children:[(0,a.jsx)(d.Z,{}),(0,a.jsx)(s.Z,{sx:{pt:{xs:2,md:0}},variant:"subtitle1"})]})})}},29815:function(e,n,r){"use strict";r.d(n,{Z:function(){return d}});var a=r(20943);var i=r(13375);var t=r(91566);function d(e){return function(e){if(Array.isArray(e))return(0,a.Z)(e)}(e)||(0,i.Z)(e)||(0,t.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(e){e.O(0,[1385,400,9260,9213,4753,6827,6549,7305,7058,788,8584,1664,8415,5571,7924,886,258,9395,2924,9774,2888,179],(function(){return n=52219,e(e.s=n);var n}));var n=e.O();_N_E=n}]);