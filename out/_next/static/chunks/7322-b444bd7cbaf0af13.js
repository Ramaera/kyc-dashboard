"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7322],{84592:function(e,t,n){n.d(t,{f:function(){return i}});var r=n(34867);function i(e){return(0,r.Z)("MuiListItemIcon",e)}const o=(0,n(1588).Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);t.Z=o},26336:function(e,t,n){n.d(t,{L:function(){return i}});var r=n(34867);function i(e){return(0,r.Z)("MuiListItemText",e)}const o=(0,n(1588).Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);t.Z=o},18972:function(e,t,n){n.d(t,{Z:function(){return k}});var r=n(63366),i=n(87462),o=n(67294),a=n(86010),c=n(94780),u=n(41796),l=n(90948),s=n(71657),d=n(59773),f=n(49990),v=n(58974),h=n(51705),m=n(35097),p=n(84592),g=n(26336),b=n(34867);function y(e){return(0,b.Z)("MuiMenuItem",e)}var w=(0,n(1588).Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),C=n(85893);const x=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],E=(0,l.ZP)(f.Z,{shouldForwardProp:e=>(0,l.FO)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]}})((({theme:e,ownerState:t})=>(0,i.Z)({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${w.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,u.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${w.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,u.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${w.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,u.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,u.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${w.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${w.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${m.Z.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${m.Z.inset}`]:{marginLeft:52},[`& .${g.Z.root}`]:{marginTop:0,marginBottom:0},[`& .${g.Z.inset}`]:{paddingLeft:36},[`& .${p.Z.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&(0,i.Z)({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${p.Z.root} svg`]:{fontSize:"1.25rem"}}))));var k=o.forwardRef((function(e,t){const n=(0,s.Z)({props:e,name:"MuiMenuItem"}),{autoFocus:u=!1,component:l="li",dense:f=!1,divider:m=!1,disableGutters:p=!1,focusVisibleClassName:g,role:b="menuitem",tabIndex:w}=n,k=(0,r.Z)(n,x),M=o.useContext(d.Z),R={dense:f||M.dense||!1,disableGutters:p},P=o.useRef(null);(0,v.Z)((()=>{u&&P.current&&P.current.focus()}),[u]);const _=(0,i.Z)({},n,{dense:R.dense,divider:m,disableGutters:p}),S=(e=>{const{disabled:t,dense:n,divider:r,disableGutters:o,selected:a,classes:u}=e,l={root:["root",n&&"dense",t&&"disabled",!o&&"gutters",r&&"divider",a&&"selected"]},s=(0,c.Z)(l,y,u);return(0,i.Z)({},u,s)})(n),I=(0,h.Z)(P,t);let N;return n.disabled||(N=void 0!==w?w:-1),(0,C.jsx)(d.Z.Provider,{value:R,children:(0,C.jsx)(E,(0,i.Z)({ref:I,role:b,tabIndex:N,component:l,focusVisibleClassName:(0,a.Z)(S.focusVisible,g)},k,{ownerState:_,classes:S}))})}))},71455:function(e,t,n){n.d(t,{HI:function(){return H},TV:function(){return A}});var r=n(67294),i=n(73935);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(i[n]=e[n]);return i}function c(e){var t=(0,r.useRef)({fn:e,curr:void 0}).current;if(t.fn=e,!t.curr){var n=Object.create(null);Object.keys(e).forEach((function(e){n[e]=function(){var n;return(n=t.fn[e]).call.apply(n,[t.fn].concat([].slice.call(arguments)))}})),t.curr=n}return t.curr}function u(e){return(0,r.useReducer)((function(e,t){return o({},e,"function"==typeof t?t(e):t)}),e)}var l=(0,r.createContext)(void 0),s="undefined"!=typeof window&&"ontouchstart"in window,d=function(e,t,n){return Math.max(Math.min(e,n),t)},f=function(e,t,n){return void 0===t&&(t=0),void 0===n&&(n=0),d(e,1*(1-n),Math.max(6,t)*(1+n))},v="undefined"==typeof window||/ServerSideRendering/.test(navigator&&navigator.userAgent)?r.useEffect:r.useLayoutEffect;function h(e,t,n){var i=(0,r.useRef)(t);i.current=t,(0,r.useEffect)((function(){function t(e){i.current(e)}return e&&window.addEventListener(e,t,n),function(){e&&window.removeEventListener(e,t)}}),[e])}var m=["container"];function p(e){var t=e.container,n=void 0===t?document.body:t,c=a(e,m);return(0,i.createPortal)(r.createElement("div",o({},c)),n)}function g(e){return r.createElement("svg",o({width:"44",height:"44",viewBox:"0 0 768 768"},e),r.createElement("path",{d:"M607.5 205.5l-178.5 178.5 178.5 178.5-45 45-178.5-178.5-178.5 178.5-45-45 178.5-178.5-178.5-178.5 45-45 178.5 178.5 178.5-178.5z"}))}function b(e){return r.createElement("svg",o({width:"44",height:"44",viewBox:"0 0 768 768"},e),r.createElement("path",{d:"M640.5 352.5v63h-390l178.5 180-45 45-256.5-256.5 256.5-256.5 45 45-178.5 180h390z"}))}function y(e){return r.createElement("svg",o({width:"44",height:"44",viewBox:"0 0 768 768"},e),r.createElement("path",{d:"M384 127.5l256.5 256.5-256.5 256.5-45-45 178.5-180h-390v-63h390l-178.5-180z"}))}function w(){return(0,r.useEffect)((function(){var e=document.body.style,t=e.overflow;return e.overflow="hidden",function(){e.overflow=t}}),[]),null}function C(e){var t=e.touches[0],n=t.clientX,r=t.clientY;if(e.touches.length>=2){var i=e.touches[1],o=i.clientX,a=i.clientY;return[(n+o)/2,(r+a)/2,Math.sqrt(Math.pow(o-n,2)+Math.pow(a-r,2))]}return[n,r,0]}var x=function(e,t,n,r){var i=n*t,o=(i-r)/2,a=void 0,c=e;return i<=r?(a=1,c=0):e>0&&o-e<=0?(a=2,c=o):e<0&&o+e<=0&&(a=3,c=-o),[a,c]};function E(e,t,n,r,i,o,a,c,u,l){void 0===a&&(a=innerWidth/2),void 0===c&&(c=innerHeight/2),void 0===u&&(u=0),void 0===l&&(l=0);var s=x(e,o,n,innerWidth)[0],d=x(t,o,r,innerHeight),f=innerWidth/2,v=innerHeight/2;return{x:a-o/i*(a-(f+e))-f+(r/n>=3&&n*o===innerWidth?0:s?u/2:u),y:c-o/i*(c-(v+t))-v+(d[0]?l/2:l),lastCX:a,lastCY:c}}function k(e,t,n){var r=e%180!=0;return r?[n,t,r]:[t,n,r]}function M(e,t,n){var r=k(n,innerWidth,innerHeight),i=r[0],o=r[1],a=0,c=i,u=o,l=e/t*o,s=t/e*i;return e<i&&t<o?(c=e,u=t):e<i&&t>=o?c=l:e>=i&&t<o||e/t>i/o?u=s:t/e>=3&&!r[2]?a=((u=s)-o)/2:c=l,{width:c,height:u,x:0,y:a,pause:!0}}function R(e,t){var n=t.leading,i=void 0!==n&&n,o=t.maxWait,a=t.wait,c=void 0===a?o||0:a,u=(0,r.useRef)(e);u.current=e;var l=(0,r.useRef)(0),s=(0,r.useRef)(),d=function(){return s.current&&clearTimeout(s.current)},f=(0,r.useCallback)((function(){var e=[].slice.call(arguments),t=Date.now();function n(){l.current=t,d(),u.current.apply(null,e)}var r=l.current,a=t-r;if(0===r&&(i&&n(),l.current=t),void 0!==o){if(a>o)return void n()}else a<c&&(l.current=t);d(),s.current=setTimeout((function(){n(),l.current=0}),c)}),[c,o,i]);return f.cancel=d,f}var P=function(e,t,n){return S(e,t,n,100,(function(e){return e}),(function(){return S(t,e,n)}))},_=function(e){return 1-Math.pow(1-e,4)};function S(e,t,n,r,i,o){void 0===r&&(r=400),void 0===i&&(i=_);var a=t-e;if(0!==a){var c=Date.now(),u=0,l=function(){var t=Math.min(1,(Date.now()-c)/r);n(e+i(t)*a)&&t<1?s():(cancelAnimationFrame(u),t>=1&&o&&o())};s()}function s(){u=requestAnimationFrame(l)}}var I={T:0,L:0,W:0,H:0,FIT:void 0},N=function(){var e=(0,r.useRef)(!1);return(0,r.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),e},Y=["className"];function X(e){var t=e.className,n=a(e,Y);return r.createElement("div",o({className:"PhotoView__Spinner "+t},n),r.createElement("svg",{viewBox:"0 0 32 32",width:"36",height:"36",fill:"white"},r.createElement("path",{opacity:".25",d:"M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"}),r.createElement("path",{d:"M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"})))}var T=["src","loaded","broken","className","onPhotoLoad","loadingElement","brokenElement"];function V(e){var t=e.src,n=e.loaded,i=e.broken,c=e.className,u=e.onPhotoLoad,l=e.loadingElement,s=e.brokenElement,d=a(e,T),f=N();return t&&!i?r.createElement(r.Fragment,null,r.createElement("img",o({className:"PhotoView__Photo"+(c?" "+c:""),src:t,onLoad:function(e){var t=e.target;f.current&&u({loaded:!0,naturalWidth:t.naturalWidth,naturalHeight:t.naturalHeight})},onError:function(){f.current&&u({broken:!0})},alt:""},d)),!n&&(r.createElement("span",{className:"PhotoView__icon"},l)||r.createElement(X,{className:"PhotoView__icon"}))):s?r.createElement("span",{className:"PhotoView__icon"},"function"==typeof s?s({src:t}):s):null}var W={naturalWidth:void 0,naturalHeight:void 0,width:void 0,height:void 0,loaded:void 0,broken:!1,x:0,y:0,touched:!1,maskTouched:!1,rotate:0,scale:1,CX:0,CY:0,lastX:0,lastY:0,lastCX:0,lastCY:0,lastScale:1,touchTime:0,touchLength:0,pause:!0,stopRaf:!0,reach:void 0};function Z(e){var t=e.item,n=t.src,i=t.render,a=t.width,l=void 0===a?0:a,d=t.height,m=void 0===d?0:d,p=t.originRef,g=e.visible,b=e.speed,y=e.easing,w=e.wrapClassName,_=e.className,Y=e.style,X=e.loadingElement,T=e.brokenElement,Z=e.onPhotoTap,O=e.onMaskTap,L=e.onReachMove,F=e.onReachUp,$=e.onPhotoResize,A=e.isActive,H=e.expose,B=u(W),D=B[0],j=B[1],z=(0,r.useRef)(0),q=N(),G=D.naturalWidth,K=void 0===G?l:G,U=D.naturalHeight,J=void 0===U?m:U,Q=D.width,ee=void 0===Q?l:Q,te=D.height,ne=void 0===te?m:te,re=D.loaded,ie=void 0===re?!n:re,oe=D.broken,ae=D.x,ce=D.y,ue=D.touched,le=D.stopRaf,se=D.maskTouched,de=D.rotate,fe=D.scale,ve=D.CX,he=D.CY,me=D.lastX,pe=D.lastY,ge=D.lastCX,be=D.lastCY,ye=D.lastScale,we=D.touchTime,Ce=D.touchLength,xe=D.pause,Ee=D.reach,ke=c({onScale:function(e){return Me(f(e))},onRotate:function(e){de!==e&&(H({rotate:e}),j(o({rotate:e},M(K,J,e))))}});function Me(e,t,n){fe!==e&&(H({scale:e}),j(o({scale:e},E(ae,ce,ee,ne,fe,e,t,n),e<=1&&{x:0,y:0})))}var Re=R((function(e,t,n){if(void 0===n&&(n=0),(ue||se)&&A){var r=k(de,ee,ne),i=r[0],a=r[1];if(0===n&&0===z.current){var c=Math.abs(e-ve)<=20,u=Math.abs(t-he)<=20;if(c&&u)return void j({lastCX:e,lastCY:t});z.current=c?t>he?3:2:1}var l=e-ge,s=t-be,d=void 0;if(0===n){var v=x(l+me,fe,i,innerWidth)[0],h=x(s+pe,fe,a,innerHeight);d=function(e,t,n,r){return t&&1===e||"x"===r?"x":n&&e>1||"y"===r?"y":void 0}(z.current,v,h[0],Ee),void 0!==d&&L(d,e,t,fe)}if("x"===d||se)return void j({reach:"x"});var m=f(fe+(n-Ce)/100/2*fe,K/ee,.2);H({scale:m}),j(o({touchLength:n,reach:d,scale:m},E(ae,ce,ee,ne,fe,m,e,t,l,s)))}}),{maxWait:8});function Pe(e){return!le&&!ue&&(q.current&&j(o({},e,{pause:g})),q.current)}var _e,Se,Ie,Ne,Ye,Xe,Te,Ve,We=(Ye=function(e){return Pe({x:e})},Xe=function(e){return Pe({y:e})},Te=function(e){return q.current&&(H({scale:e}),j({scale:e})),!ue&&q.current},Ve=c({X:function(e){return Ye(e)},Y:function(e){return Xe(e)},S:function(e){return Te(e)}}),function(e,t,n,r,i,o,a,c,u,l,s){var d=k(l,i,o),f=d[0],v=d[1],h=x(e,c,f,innerWidth),m=h[0],p=h[1],g=x(t,c,v,innerHeight),b=g[0],y=g[1],w=Date.now()-s;if(w>=200||c!=a||Math.abs(u-a)>1){var C=E(e,t,i,o,a,c),M=C.x,R=C.y,_=m?p:M!==e?M:null,I=b?y:R!==t?R:null;return null!==_&&S(e,_,Ve.X),null!==I&&S(t,I,Ve.Y),void(c!=a&&S(a,c,Ve.S))}var N=(e-n)/w,Y=(t-r)/w,X=Math.sqrt(Math.pow(N,2)+Math.pow(Y,2)),T=!1,V=!1;!function(e,t){var n=e,r=0,i=void 0,o=0,a=function(o){i||(i=o);var a=o-i,l=Math.sign(e),s=-.001*l,d=Math.sign(-n)*Math.pow(n,2)*2e-4,f=n*a+(s+d)*Math.pow(a,2)/2;r+=f,i=o,l*(n+=(s+d)*a)<=0?u():t(r)?c():u()};function c(){o=requestAnimationFrame(a)}function u(){cancelAnimationFrame(o)}c()}(X,(function(n){var r=e+n*(N/X),i=t+n*(Y/X),o=x(r,a,f,innerWidth),c=o[0],u=o[1],l=x(i,a,v,innerHeight),s=l[0],d=l[1];if(c&&!T&&(T=!0,m?S(r,u,Ve.X):P(u,r+(r-u),Ve.X)),s&&!V&&(V=!0,b?S(i,d,Ve.Y):P(d,i+(i-d),Ve.Y)),T&&V)return!1;var h=T||Ve.X(u),p=V||Ve.Y(d);return h&&p}))}),Ze=(_e=Z,Se=function(e,t){Ee||Me(1!==fe?1:Math.max(2,K/ee),e,t)},Ie=(0,r.useRef)(0),Ne=R((function(){Ie.current=0,_e.apply(void 0,[].slice.call(arguments))}),{wait:300}),function(){var e=[].slice.call(arguments);Ie.current+=1,Ne.apply(void 0,e),Ie.current>=2&&(Ne.cancel(),Ie.current=0,Se.apply(void 0,e))});function Oe(e,t){if(z.current=0,(ue||se)&&A){j({touched:!1,maskTouched:!1,pause:!1,stopRaf:!1,reach:void 0});var n=f(fe,K/ee);if(We(ae,ce,me,pe,ee,ne,fe,n,ye,de,we),F(e,t),ve===e&&he===t){if(ue)return void Ze(e,t);se&&O(e,t)}}}function Le(e,t,n){void 0===n&&(n=0),j({touched:!0,CX:e,CY:t,lastCX:e,lastCY:t,lastX:ae,lastY:ce,lastScale:fe,touchLength:n,touchTime:Date.now()})}function Fe(e){j({maskTouched:!0,CX:e.clientX,CY:e.clientY,lastX:ae,lastY:ce})}h(s?void 0:"mousemove",(function(e){e.preventDefault(),Re(e.clientX,e.clientY)})),h(s?void 0:"mouseup",(function(e){Oe(e.clientX,e.clientY)})),h(s?"touchmove":void 0,(function(e){e.preventDefault();var t=C(e);Re.apply(void 0,t)}),{passive:!1}),h(s?"touchend":void 0,(function(e){var t=e.changedTouches[0];Oe(t.clientX,t.clientY)}),{passive:!1}),h("resize",R((function(){ie&&!ue&&(j(M(K,J,de)),$())}),{maxWait:8})),v((function(){A&&H(o({scale:fe,rotate:de},ke))}),[A]);var $e=function(e,t,n,i,o,a,l,s,d,f){var h=function(e,t,n,i,o){var a=(0,r.useRef)(!1),c=u({lead:!0,scale:n}),l=c[0],s=l.lead,d=l.scale,f=c[1],h=R((function(e){try{return o(!0),f({lead:!1,scale:e}),Promise.resolve()}catch(e){return Promise.reject(e)}}),{wait:i});return v((function(){a.current?(o(!1),f({lead:!0}),h(n)):a.current=!0}),[n]),s?[e*d,t*d,n/d]:[e*n,t*n,1]}(a,l,s,d,f),m=h[0],p=h[1],g=h[2],b=function(e,t,n,i,o){var a=(0,r.useState)(I),u=a[0],l=a[1],s=(0,r.useState)(0),d=s[0],f=s[1],v=(0,r.useRef)(),h=c({OK:function(){return e&&f(4)}});function m(e){o(!1),f(e)}return(0,r.useEffect)((function(){if(v.current||(v.current=Date.now()),n){if(function(e,t){var n=e&&e.current;if(n&&1===n.nodeType){var r=n.getBoundingClientRect();t({T:r.top,L:r.left,W:r.width,H:r.height,FIT:"IMG"===n.tagName?getComputedStyle(n).objectFit:void 0})}}(t,l),e)return Date.now()-v.current<250?(f(1),requestAnimationFrame((function(){f(2),requestAnimationFrame((function(){return m(3)}))})),void setTimeout(h.OK,i)):void f(4);m(5)}}),[e,n]),[d,u]}(e,t,n,d,f),y=b[0],w=b[1],C=w.W,x=w.FIT,E=innerWidth/2,k=innerHeight/2,M=y<3||y>4;return[M?C?w.L:E:i+(E-a*s/2),M?C?w.T:k:o+(k-l*s/2),m,M&&x?m*(w.H/C):p,0===y?g:M?C/(a*s)||.01:g,M?x?1:0:1,y,x]}(g,p,ie,ae,ce,ee,ne,fe,b,(function(e){return j({pause:e})})),Ae=$e[4],He=$e[6],Be="transform "+b+"ms "+y,De={className:_,onMouseDown:s?void 0:function(e){e.stopPropagation(),0===e.button&&Le(e.clientX,e.clientY,0)},onTouchStart:s?function(e){e.stopPropagation(),Le.apply(void 0,C(e))}:void 0,onWheel:function(e){if(!Ee){var t=f(fe-e.deltaY/100/2,K/ee);j({stopRaf:!0}),Me(t,e.clientX,e.clientY)}},style:{width:$e[2],height:$e[3],opacity:$e[5],objectFit:4===He?void 0:$e[7],transform:de?"rotate("+de+"deg)":void 0,transition:He>2?Be+", opacity "+b+"ms ease, height "+(He<4?b/2:He>4?b:0)+"ms "+y:void 0}};return r.createElement("div",{className:"PhotoView__PhotoWrap"+(w?" "+w:""),style:Y,onMouseDown:!s&&A?Fe:void 0,onTouchStart:s&&A?function(e){return Fe(e.touches[0])}:void 0},r.createElement("div",{className:"PhotoView__PhotoBox",style:{transform:"matrix("+Ae+", 0, 0, "+Ae+", "+$e[0]+", "+$e[1]+")",transition:ue||xe?void 0:Be,willChange:A?"transform":void 0}},n?r.createElement(V,o({src:n,loaded:ie,broken:oe},De,{onPhotoLoad:function(e){j(o({},e,e.loaded&&M(e.naturalWidth||0,e.naturalHeight||0,de)))},loadingElement:X,brokenElement:T})):i&&i({attrs:De,scale:Ae,rotate:de})))}var O={x:0,touched:!1,pause:!1,lastCX:void 0,lastCY:void 0,bg:void 0,lastBg:void 0,overlay:!0,minimal:!0,scale:1,rotate:0};function L(e){var t=e.loop,n=void 0===t?3:t,i=e.speed,o=e.easing,a=e.photoClosable,l=e.maskClosable,f=void 0===l||l,m=e.maskOpacity,C=void 0===m?1:m,x=e.pullClosable,E=void 0===x||x,k=e.bannerVisible,M=void 0===k||k,R=e.overlayRender,P=e.toolbarRender,_=e.className,S=e.maskClassName,I=e.photoClassName,N=e.photoWrapClassName,Y=e.loadingElement,X=e.brokenElement,T=e.images,V=e.index,W=void 0===V?0:V,L=e.onIndexChange,F=e.visible,$=e.onClose,A=e.afterClose,H=e.portalContainer,B=u(O),D=B[0],j=B[1],z=(0,r.useState)(0),q=z[0],G=z[1],K=D.x,U=D.touched,J=D.pause,Q=D.lastCX,ee=D.lastCY,te=D.bg,ne=void 0===te?C:te,re=D.lastBg,ie=D.overlay,oe=D.minimal,ae=D.scale,ce=D.rotate,ue=D.onScale,le=D.onRotate,se=e.hasOwnProperty("index"),de=se?W:q,fe=se?L:G,ve=(0,r.useRef)(de),he=T.length,me=T[de],pe="boolean"==typeof n?n:he>n,ge=function(e,t){var n=(0,r.useReducer)((function(e){return!e}),!1)[1],i=(0,r.useRef)(0),o=function(t,n){var o=(0,r.useRef)(t);function a(e){o.current=e}return(0,r.useMemo)((function(){var t;t=a,e?(t(e),i.current=1):i.current=2}),[t]),[o.current,a]}(e),a=o[1];return[o[0],i.current,function(){n(),2===i.current&&(a(!1),t&&t()),i.current=0}]}(F,A),be=ge[0],ye=ge[1],we=ge[2];v((function(){if(be)return j({pause:!0,x:de*-(innerWidth+20)}),void(ve.current=de);j(O)}),[be]);var Ce=c({close:function(e){le&&le(0),j({overlay:!0,lastBg:ne}),$(e)},changeIndex:function(e,t){void 0===t&&(t=!1);var n=pe?ve.current+(e-de):e,r=he-1,i=d(n,0,r),o=pe?n:i,a=innerWidth+20;j({touched:!1,lastCX:void 0,lastCY:void 0,x:-a*o,pause:t}),ve.current=o,fe&&fe(pe?e<0?r:e>r?0:e:i)}}),xe=Ce.close,Ee=Ce.changeIndex;function ke(e){return e?xe():j({overlay:!ie})}function Me(){j({x:-(innerWidth+20)*de,lastCX:void 0,lastCY:void 0,pause:!0}),ve.current=de}function Re(e,t,n,r){"x"===e?function(e){if(void 0!==Q){var t=e-Q,n=t;!pe&&(0===de&&t>0||de===he-1&&t<0)&&(n=t/2),j({touched:!0,lastCX:Q,x:-(innerWidth+20)*ve.current+n,pause:!1})}else j({touched:!0,lastCX:e,x:K,pause:!1})}(t):"y"===e&&function(e,t){if(void 0!==ee){var n=null===C?null:d(C,.01,C-Math.abs(e-ee)/100/4);j({touched:!0,lastCY:ee,bg:1===t?n:C,minimal:1===t})}else j({touched:!0,lastCY:e,bg:ne,minimal:!0})}(n,r)}function Pe(e,t){var n=e-(null!=Q?Q:e),r=t-(null!=ee?ee:t),i=!1;if(n<-40)Ee(de+1);else if(n>40)Ee(de-1);else{var o=-(innerWidth+20)*ve.current;Math.abs(r)>100&&oe&&E&&(i=!0,xe()),j({touched:!1,x:o,lastCX:void 0,lastCY:void 0,bg:C,overlay:!!i||ie})}}h("keydown",(function(e){if(F)switch(e.key){case"ArrowLeft":Ee(de-1,!0);break;case"ArrowRight":Ee(de+1,!0);break;case"Escape":xe()}}));var _e,Se,Ie,Ne=(_e=T,Se=de,Ie=pe,(0,r.useMemo)((function(){var e=_e.length;return Ie?_e.concat(_e).concat(_e).slice(e+Se-1,e+Se+2):_e.slice(Math.max(Se-1,0),Math.min(Se+2,e+1))}),[_e,Se,Ie]));if(!be)return null;var Ye=ie&&!ye,Xe=F?ne:re,Te=ue&&le&&{images:T,index:de,visible:F,onClose:xe,onIndexChange:Ee,overlayVisible:Ye,overlay:me&&me.overlay,scale:ae,rotate:ce,onScale:ue,onRotate:le},Ve=i?i(ye):400,We=o?o(ye):"cubic-bezier(0.25, 0.8, 0.25, 1)",Ze=i?i(3):600,Oe=o?o(3):"cubic-bezier(0.25, 0.8, 0.25, 1)";return r.createElement(p,{className:"PhotoView-Portal"+(Ye?"":" PhotoView-Slider__clean")+(F?"":" PhotoView-Slider__willClose")+(_?" "+_:""),role:"dialog",onClick:function(e){return e.stopPropagation()},container:H},F&&r.createElement(w,null),r.createElement("div",{className:"PhotoView-Slider__Backdrop"+(S?" "+S:"")+(1===ye?" PhotoView-Slider__fadeIn":2===ye?" PhotoView-Slider__fadeOut":""),style:{background:Xe?"rgba(0, 0, 0, "+Xe+")":void 0,transitionTimingFunction:We,transitionDuration:(U?0:Ve)+"ms",animationDuration:Ve+"ms"},onAnimationEnd:we}),M&&r.createElement("div",{className:"PhotoView-Slider__BannerWrap"},r.createElement("div",{className:"PhotoView-Slider__Counter"},de+1," / ",he),r.createElement("div",{className:"PhotoView-Slider__BannerRight"},P&&Te&&P(Te),r.createElement(g,{className:"PhotoView-Slider__toolbarIcon",onClick:xe}))),Ne.map((function(e,t){var n=pe||0!==de?ve.current-1+t:de+t;return r.createElement(Z,{key:pe?e.key+"/"+e.src+"/"+n:e.key,item:e,speed:Ve,easing:We,visible:F,onReachMove:Re,onReachUp:Pe,onPhotoTap:function(){return ke(a)},onMaskTap:function(){return ke(f)},wrapClassName:N,className:I,style:{left:(innerWidth+20)*n+"px",transform:"translate3d("+K+"px, 0px, 0)",transition:U||J?void 0:"transform "+Ze+"ms "+Oe},loadingElement:Y,brokenElement:X,onPhotoResize:Me,isActive:(me&&me.key)===e.key,expose:j})})),!s&&M&&r.createElement(r.Fragment,null,(pe||0!==de)&&r.createElement("div",{className:"PhotoView-Slider__ArrowLeft",onClick:function(){return Ee(de-1,!0)}},r.createElement(b,null)),(pe||de+1<he)&&r.createElement("div",{className:"PhotoView-Slider__ArrowRight",onClick:function(){return Ee(de+1,!0)}},r.createElement(y,null))),R&&Te&&r.createElement("div",{className:"PhotoView-Slider__Overlay"},R(Te)))}var F=["children","onIndexChange","onVisibleChange"],$={images:[],visible:!1,index:0};function A(e){var t=e.children,n=e.onIndexChange,i=e.onVisibleChange,s=a(e,F),d=u($),f=d[0],v=d[1],h=(0,r.useRef)(0),m=f.images,p=f.visible,g=f.index,b=c({nextId:function(){return h.current+=1},update:function(e){var t=m.findIndex((function(t){return t.key===e.key}));if(t>-1){var n=m.slice();return n.splice(t,1,e),void v({images:n})}v((function(t){return{images:t.images.concat(e)}}))},remove:function(e){v((function(t){var n=t.images.filter((function(t){return t.key!==e}));return{images:n,index:Math.min(n.length-1,g)}}))},show:function(e){var t=m.findIndex((function(t){return t.key===e}));v({visible:!0,index:t}),i&&i(!0,t,f)}}),y=c({close:function(){v({visible:!1}),i&&i(!1,g,f)},changeIndex:function(e){v({index:e}),n&&n(e,f)}}),w=(0,r.useMemo)((function(){return o({},f,b)}),[f,b]);return r.createElement(l.Provider,{value:w},t,r.createElement(L,o({images:m,visible:p,index:g,onIndexChange:y.changeIndex,onClose:y.close},s)))}var H=function(e){var t,n,i=e.src,a=e.render,u=e.overlay,s=e.width,d=e.height,f=e.triggers,v=void 0===f?["onClick"]:f,h=e.children,m=(0,r.useContext)(l),p=(t=function(){return m.nextId()},(n=(0,r.useRef)({sign:!1,fn:void 0}).current).sign||(n.sign=!0,n.fn=t()),n.fn),g=(0,r.useRef)(null);(0,r.useEffect)((function(){return function(){m.remove(p)}}),[]);var b=c({render:function(e){return a&&a(e)},show:function(e,t){m.show(p),function(e,t){if(h){var n=h.props[e];n&&n(t)}}(e,t)}}),y=(0,r.useMemo)((function(){var e={};return v.forEach((function(t){e[t]=b.show.bind(null,t)})),e}),[]);return(0,r.useEffect)((function(){m.update({key:p,src:i,originRef:g,render:b.render,overlay:u,width:s,height:d})}),[i]),h?r.Children.only((0,r.cloneElement)(h,o({},y,{ref:g}))):null}}}]);