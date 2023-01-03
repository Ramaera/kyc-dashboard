(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4488],{5509:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/modals",function(){return t(95233)}])},95233:function(n,e,t){"use strict";t.r(e);var r=t(85893),i=t(9008),s=t.n(i),o=t(18703),c=t(45697),a=t.n(c),l=t(67294),u=t(64535),d=t(78273),x=t(53156),f=t(86886),p=t(66242),j=t(78445),h=t(67720),m=t(44267),Z=t(11057),g=t(87952),b=t(78462),v=t(97212),y=t(18987),O=t(59334),P=t(18557),w=t(50657),k=t(15398),C=t(96540),_=t(15861),S=t(6949),E=t(46225),N=["username@gmail.com","user02@gmail.com"];function T(n){var e=n.onClose,t=n.selectedValue,i=n.open,s=function(n){e(n)};return(0,r.jsxs)(w.Z,{onClose:function(){e(t)},open:i,children:[(0,r.jsx)(P.Z,{children:"Set backup account"}),(0,r.jsxs)(b.Z,{sx:{pt:0},children:[N.map((function(n){return(0,r.jsxs)(v.ZP,{button:!0,onClick:function(){return s(n)},children:[(0,r.jsx)(y.Z,{children:(0,r.jsx)(g.Z,{sx:{bgcolor:S.Z[100],color:S.Z[600]},children:(0,r.jsx)(k.Z,{})})}),(0,r.jsx)(O.Z,{primary:n})]},n)})),(0,r.jsxs)(v.ZP,{autoFocus:!0,button:!0,onClick:function(){return s("addAccount")},children:[(0,r.jsx)(y.Z,{children:(0,r.jsx)(g.Z,{children:(0,r.jsx)(C.Z,{})})}),(0,r.jsx)(O.Z,{primary:"Add account"})]})]})]})}function q(){var n=(0,l.useState)(!1),e=n[0],t=n[1],i=(0,l.useState)(N[1]),o=i[0],c=i[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s(),{children:(0,r.jsx)("title",{children:"Modals - Components"})}),(0,r.jsx)(d.Z,{children:(0,r.jsx)(u.Z,{heading:"Modals",subHeading:"Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.",docs:"https://material-ui.com/components/dialogs/"})}),(0,r.jsx)(x.Z,{maxWidth:"lg",children:(0,r.jsx)(f.ZP,{container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",spacing:3,children:(0,r.jsx)(f.ZP,{item:!0,xs:12,children:(0,r.jsxs)(p.Z,{children:[(0,r.jsx)(j.Z,{title:"Basic Dialog"}),(0,r.jsx)(h.Z,{}),(0,r.jsxs)(m.Z,{children:[(0,r.jsxs)(_.Z,{variant:"subtitle1",component:"div",children:["Selected: ",o]}),(0,r.jsx)("br",{}),(0,r.jsx)(Z.Z,{variant:"outlined",onClick:function(){t(!0)},children:"Open simple dialog"}),(0,r.jsx)(T,{selectedValue:o,open:e,onClose:function(n){t(!1),c(n)}})]})]})})})}),(0,r.jsx)(E.Z,{})]})}T.propTypes={onClose:a().func.isRequired,open:a().bool.isRequired,selectedValue:a().string.isRequired},q.getLayout=function(n){return(0,r.jsx)(o.Z,{children:n})},e.default=q},46225:function(n,e,t){"use strict";var r=t(85893),i=t(90948),s=t(53156),o=t(87357),c=t(15861),a=(0,i.ZP)(s.Z)((function(n){var e=n.theme;return"\n        margin-top: ".concat(e.spacing(4),";\n")}));e.Z=function(){return(0,r.jsx)(a,{className:"footer-wrapper",children:(0,r.jsxs)(o.Z,{pb:4,display:{xs:"block",md:"flex"},alignItems:"center",textAlign:{xs:"center",md:"left"},justifyContent:"space-between",children:[(0,r.jsx)(o.Z,{}),(0,r.jsx)(c.Z,{sx:{pt:{xs:2,md:0}},variant:"subtitle1"})]})})}},64535:function(n,e,t){"use strict";var r=t(85893),i=t(45697),s=t.n(i),o=t(47017),c=t(86886),a=t(15861),l=t(11057);function u(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function d(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},s=Object.keys(n);for(r=0;r<s.length;r++)t=s[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)t=s[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var x=function(n){var e=n.heading,t=void 0===e?"":e,i=n.subHeading,s=void 0===i?"":i,x=n.docs,f=void 0===x?"":x,p=d(n,["heading","subHeading","docs"]);return(0,r.jsxs)(c.ZP,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){u(n,e,t[e])}))}return n}({container:!0,justifyContent:"space-between",alignItems:"center"},p,{children:[(0,r.jsxs)(c.ZP,{item:!0,children:[(0,r.jsx)(a.Z,{variant:"h3",component:"h3",gutterBottom:!0,children:t}),(0,r.jsx)(a.Z,{variant:"subtitle2",children:s})]}),(0,r.jsx)(c.ZP,{item:!0,children:(0,r.jsxs)(l.Z,{href:f,target:"_blank",rel:"noopener noreferrer",sx:{mt:{xs:2,md:0}},variant:"contained",startIcon:(0,r.jsx)(o.Z,{fontSize:"small"}),children:[t," Documentation"]})})]}))};x.propTypes={heading:s().string,subHeading:s().string,docs:s().string},e.Z=x},78273:function(n,e,t){"use strict";var r=t(85893),i=t(45697),s=t.n(i),o=t(90948),c=t(87357),a=t(53156),l=(0,o.ZP)(c.Z)((function(n){var e=n.theme;return"\n        padding: ".concat(e.spacing(4),";\n")})),u=function(n){var e=n.children;return(0,r.jsx)(l,{className:"MuiPageTitle-wrapper",children:(0,r.jsx)(a.Z,{maxWidth:"lg",children:e})})};u.propTypes={children:s().node.isRequired},e.Z=u}},function(n){n.O(0,[6944,5443,887,2937,9036,5637,6853,1838,5210,3422,8358,8703,9774,2888,179],(function(){return e=5509,n(n.s=e);var e}));var e=n.O();_N_E=e}]);