(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5637],{10238:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(87462),o=n(28442);function i(e,t={},n){return(0,o.Z)(e)?t:(0,r.Z)({},t,{ownerState:(0,r.Z)({},t.ownerState,n)})}},50122:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var r=n(63366),o=n(87462),i=n(67294),a=n(86010),s=n(94780),c=n(54844),p=n(41796),l=n(98216),u=n(90948),f=n(71657),d=n(79674),m=n(51705),h=n(15861),v=n(34867);function g(e){return(0,v.Z)("MuiLink",e)}var y=(0,n(1588).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),b=n(85893);const w=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],x={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},O=(0,u.ZP)(h.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`underline${(0,l.Z)(n.underline)}`],"button"===n.component&&t.button]}})((({theme:e,ownerState:t})=>{const n=(0,c.D)(e,`palette.${(e=>x[e]||e)(t.color)}`)||t.color;return(0,o.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==n?(0,p.Fq)(n,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===t.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${y.focusVisible}`]:{outline:"auto"}})}));var Z=i.forwardRef((function(e,t){const n=(0,f.Z)({props:e,name:"MuiLink"}),{className:c,color:p="primary",component:u="a",onBlur:h,onFocus:v,TypographyClasses:y,underline:Z="always",variant:T="inherit",sx:R}=n,P=(0,r.Z)(n,w),{isFocusVisibleRef:E,onBlur:k,onFocus:M,ref:j}=(0,d.Z)(),[D,S]=i.useState(!1),L=(0,m.Z)(t,j),A=(0,o.Z)({},n,{color:p,component:u,focusVisible:D,underline:Z,variant:T}),C=(e=>{const{classes:t,component:n,focusVisible:r,underline:o}=e,i={root:["root",`underline${(0,l.Z)(o)}`,"button"===n&&"button",r&&"focusVisible"]};return(0,s.Z)(i,g,t)})(A);return(0,b.jsx)(O,(0,o.Z)({color:p,className:(0,a.Z)(C.root,c),classes:y,component:u,onBlur:e=>{k(e),!1===E.current&&S(!1),h&&h(e)},onFocus:e=>{M(e),!0===E.current&&S(!0),v&&v(e)},ref:L,ownerState:A,variant:T,sx:[...Object.keys(x).includes(p)?[]:[{color:p}],...Array.isArray(R)?R:[R]]},P))}))},52789:function(e,t,n){"use strict";n.d(t,{Z:function(){return et}});var r=n(63366),o=n(87462),i=n(67294),a=n(86010),s=n(94780),c=n(10238),p=n(41796),l=n(90948),u=n(2734),f=n(71657),d=n(98216),m=n(96514),h=n(30067),v=n(16600),g=n(57094);function y(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function b(e){return e instanceof y(e).Element||e instanceof Element}function w(e){return e instanceof y(e).HTMLElement||e instanceof HTMLElement}function x(e){return"undefined"!==typeof ShadowRoot&&(e instanceof y(e).ShadowRoot||e instanceof ShadowRoot)}var O=Math.max,Z=Math.min,T=Math.round;function R(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),r=1,o=1;if(w(e)&&t){var i=e.offsetHeight,a=e.offsetWidth;a>0&&(r=T(n.width)/a||1),i>0&&(o=T(n.height)/i||1)}return{width:n.width/r,height:n.height/o,top:n.top/o,right:n.right/r,bottom:n.bottom/o,left:n.left/r,x:n.left/r,y:n.top/o}}function P(e){var t=y(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function E(e){return e?(e.nodeName||"").toLowerCase():null}function k(e){return((b(e)?e.ownerDocument:e.document)||window.document).documentElement}function M(e){return R(k(e)).left+P(e).scrollLeft}function j(e){return y(e).getComputedStyle(e)}function D(e){var t=j(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function S(e,t,n){void 0===n&&(n=!1);var r=w(t),o=w(t)&&function(e){var t=e.getBoundingClientRect(),n=T(t.width)/e.offsetWidth||1,r=T(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),i=k(t),a=R(e,o),s={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&(("body"!==E(t)||D(i))&&(s=function(e){return e!==y(e)&&w(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:P(e);var t}(t)),w(t)?((c=R(t,!0)).x+=t.clientLeft,c.y+=t.clientTop):i&&(c.x=M(i))),{x:a.left+s.scrollLeft-c.x,y:a.top+s.scrollTop-c.y,width:a.width,height:a.height}}function L(e){var t=R(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function A(e){return"html"===E(e)?e:e.assignedSlot||e.parentNode||(x(e)?e.host:null)||k(e)}function C(e){return["html","body","#document"].indexOf(E(e))>=0?e.ownerDocument.body:w(e)&&D(e)?e:C(A(e))}function W(e,t){var n;void 0===t&&(t=[]);var r=C(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=y(r),a=o?[i].concat(i.visualViewport||[],D(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(W(A(a)))}function B(e){return["table","td","th"].indexOf(E(e))>=0}function N(e){return w(e)&&"fixed"!==j(e).position?e.offsetParent:null}function F(e){for(var t=y(e),n=N(e);n&&B(n)&&"static"===j(n).position;)n=N(n);return n&&("html"===E(n)||"body"===E(n)&&"static"===j(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&w(e)&&"fixed"===j(e).position)return null;var n=A(e);for(x(n)&&(n=n.host);w(n)&&["html","body"].indexOf(E(n))<0;){var r=j(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var H="top",I="bottom",V="right",$="left",_="auto",q=[H,I,V,$],U="start",z="end",Y="viewport",X="popper",Q=q.reduce((function(e,t){return e.concat([t+"-"+U,t+"-"+z])}),[]),G=[].concat(q,[_]).reduce((function(e,t){return e.concat([t,t+"-"+U,t+"-"+z])}),[]),J=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function K(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function ee(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var te={placement:"bottom",modifiers:[],strategy:"absolute"};function ne(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function re(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?te:o;return function(e,t,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},te,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,c={state:o,setOptions:function(n){var s="function"===typeof n?n(o.options):n;p(),o.options=Object.assign({},i,o.options,s),o.scrollParents={reference:b(e)?W(e):e.contextElement?W(e.contextElement):[],popper:W(t)};var l=function(e){var t=K(e);return J.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=l.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var s=i({state:o,name:t,instance:c,options:r}),p=function(){};a.push(s||p)}})),c.update()},forceUpdate:function(){if(!s){var e=o.elements,t=e.reference,n=e.popper;if(ne(t,n)){o.rects={reference:S(t,F(n),"fixed"===o.options.strategy),popper:L(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,p=i.options,l=void 0===p?{}:p,u=i.name;"function"===typeof a&&(o=a({state:o,options:l,name:u,instance:c})||o)}else o.reset=!1,r=-1}}},update:ee((function(){return new Promise((function(e){c.forceUpdate(),e(o)}))})),destroy:function(){p(),s=!0}};if(!ne(e,t))return c;function p(){a.forEach((function(e){return e()})),a=[]}return c.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),c}}var oe={passive:!0};function ie(e){return e.split("-")[0]}function ae(e){return e.split("-")[1]}function se(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ce(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?ie(o):null,a=o?ae(o):null,s=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(i){case H:t={x:s,y:n.y-r.height};break;case I:t={x:s,y:n.y+n.height};break;case V:t={x:n.x+n.width,y:c};break;case $:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var p=i?se(i):null;if(null!=p){var l="y"===p?"height":"width";switch(a){case U:t[p]=t[p]-(n[l]/2-r[l]/2);break;case z:t[p]=t[p]+(n[l]/2-r[l]/2)}}return t}var pe={top:"auto",right:"auto",bottom:"auto",left:"auto"};function le(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,c=e.gpuAcceleration,p=e.adaptive,l=e.roundOffsets,u=e.isFixed,f=a.x,d=void 0===f?0:f,m=a.y,h=void 0===m?0:m,v="function"===typeof l?l({x:d,y:h}):{x:d,y:h};d=v.x,h=v.y;var g=a.hasOwnProperty("x"),b=a.hasOwnProperty("y"),w=$,x=H,O=window;if(p){var Z=F(n),R="clientHeight",P="clientWidth";if(Z===y(n)&&"static"!==j(Z=k(n)).position&&"absolute"===s&&(R="scrollHeight",P="scrollWidth"),Z=Z,o===H||(o===$||o===V)&&i===z)x=I,h-=(u&&Z===O&&O.visualViewport?O.visualViewport.height:Z[R])-r.height,h*=c?1:-1;if(o===$||(o===H||o===I)&&i===z)w=V,d-=(u&&Z===O&&O.visualViewport?O.visualViewport.width:Z[P])-r.width,d*=c?1:-1}var E,M=Object.assign({position:s},p&&pe),D=!0===l?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:T(t*r)/r||0,y:T(n*r)/r||0}}({x:d,y:h}):{x:d,y:h};return d=D.x,h=D.y,c?Object.assign({},M,((E={})[x]=b?"0":"",E[w]=g?"0":"",E.transform=(O.devicePixelRatio||1)<=1?"translate("+d+"px, "+h+"px)":"translate3d("+d+"px, "+h+"px, 0)",E)):Object.assign({},M,((t={})[x]=b?h+"px":"",t[w]=g?d+"px":"",t.transform="",t))}var ue={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=G.reduce((function(e,n){return e[n]=function(e,t,n){var r=ie(e),o=[$,H].indexOf(r)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[$,V].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],c=s.x,p=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=p),t.modifiersData[r]=a}},fe={left:"right",right:"left",bottom:"top",top:"bottom"};function de(e){return e.replace(/left|right|bottom|top/g,(function(e){return fe[e]}))}var me={start:"end",end:"start"};function he(e){return e.replace(/start|end/g,(function(e){return me[e]}))}function ve(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&x(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function ge(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ye(e,t){return t===Y?ge(function(e){var t=y(e),n=k(e),r=t.visualViewport,o=n.clientWidth,i=n.clientHeight,a=0,s=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,s=r.offsetTop)),{width:o,height:i,x:a+M(e),y:s}}(e)):b(t)?function(e){var t=R(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):ge(function(e){var t,n=k(e),r=P(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=O(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=O(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+M(e),c=-r.scrollTop;return"rtl"===j(o||n).direction&&(s+=O(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}(k(e)))}function be(e,t,n){var r="clippingParents"===t?function(e){var t=W(A(e)),n=["absolute","fixed"].indexOf(j(e).position)>=0&&w(e)?F(e):e;return b(n)?t.filter((function(e){return b(e)&&ve(e,n)&&"body"!==E(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(t,n){var r=ye(e,n);return t.top=O(r.top,t.top),t.right=Z(r.right,t.right),t.bottom=Z(r.bottom,t.bottom),t.left=O(r.left,t.left),t}),ye(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function we(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function xe(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function Oe(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.boundary,a=void 0===i?"clippingParents":i,s=n.rootBoundary,c=void 0===s?Y:s,p=n.elementContext,l=void 0===p?X:p,u=n.altBoundary,f=void 0!==u&&u,d=n.padding,m=void 0===d?0:d,h=we("number"!==typeof m?m:xe(m,q)),v=l===X?"reference":X,g=e.rects.popper,y=e.elements[f?v:l],w=be(b(y)?y:y.contextElement||k(e.elements.popper),a,c),x=R(e.elements.reference),O=ce({reference:x,element:g,strategy:"absolute",placement:o}),Z=ge(Object.assign({},g,O)),T=l===X?Z:x,P={top:w.top-T.top+h.top,bottom:T.bottom-w.bottom+h.bottom,left:w.left-T.left+h.left,right:T.right-w.right+h.right},E=e.modifiersData.offset;if(l===X&&E){var M=E[o];Object.keys(P).forEach((function(e){var t=[V,I].indexOf(e)>=0?1:-1,n=[H,I].indexOf(e)>=0?"y":"x";P[e]+=M[n]*t}))}return P}function Ze(e,t,n){return O(e,Z(t,n))}var Te={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,c=n.boundary,p=n.rootBoundary,l=n.altBoundary,u=n.padding,f=n.tether,d=void 0===f||f,m=n.tetherOffset,h=void 0===m?0:m,v=Oe(t,{boundary:c,rootBoundary:p,padding:u,altBoundary:l}),g=ie(t.placement),y=ae(t.placement),b=!y,w=se(g),x="x"===w?"y":"x",T=t.modifiersData.popperOffsets,R=t.rects.reference,P=t.rects.popper,E="function"===typeof h?h(Object.assign({},t.rects,{placement:t.placement})):h,k="number"===typeof E?{mainAxis:E,altAxis:E}:Object.assign({mainAxis:0,altAxis:0},E),M=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,j={x:0,y:0};if(T){if(i){var D,S="y"===w?H:$,A="y"===w?I:V,C="y"===w?"height":"width",W=T[w],B=W+v[S],N=W-v[A],_=d?-P[C]/2:0,q=y===U?R[C]:P[C],z=y===U?-P[C]:-R[C],Y=t.elements.arrow,X=d&&Y?L(Y):{width:0,height:0},Q=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},G=Q[S],J=Q[A],K=Ze(0,R[C],X[C]),ee=b?R[C]/2-_-K-G-k.mainAxis:q-K-G-k.mainAxis,te=b?-R[C]/2+_+K+J+k.mainAxis:z+K+J+k.mainAxis,ne=t.elements.arrow&&F(t.elements.arrow),re=ne?"y"===w?ne.clientTop||0:ne.clientLeft||0:0,oe=null!=(D=null==M?void 0:M[w])?D:0,ce=W+te-oe,pe=Ze(d?Z(B,W+ee-oe-re):B,W,d?O(N,ce):N);T[w]=pe,j[w]=pe-W}if(s){var le,ue="x"===w?H:$,fe="x"===w?I:V,de=T[x],me="y"===x?"height":"width",he=de+v[ue],ve=de-v[fe],ge=-1!==[H,$].indexOf(g),ye=null!=(le=null==M?void 0:M[x])?le:0,be=ge?he:de-R[me]-P[me]-ye+k.altAxis,we=ge?de+R[me]+P[me]-ye-k.altAxis:ve,xe=d&&ge?function(e,t,n){var r=Ze(e,t,n);return r>n?n:r}(be,de,we):Ze(d?be:he,de,d?we:ve);T[x]=xe,j[x]=xe-de}t.modifiersData[r]=j}},requiresIfExists:["offset"]};var Re={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=ie(n.placement),c=se(s),p=[$,V].indexOf(s)>=0?"height":"width";if(i&&a){var l=function(e,t){return we("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:xe(e,q))}(o.padding,n),u=L(i),f="y"===c?H:$,d="y"===c?I:V,m=n.rects.reference[p]+n.rects.reference[c]-a[c]-n.rects.popper[p],h=a[c]-n.rects.reference[c],v=F(i),g=v?"y"===c?v.clientHeight||0:v.clientWidth||0:0,y=m/2-h/2,b=l[f],w=g-u[p]-l[d],x=g/2-u[p]/2+y,O=Ze(b,x,w),Z=c;n.modifiersData[r]=((t={})[Z]=O,t.centerOffset=O-x,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&ve(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Pe(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Ee(e){return[H,V,I,$].some((function(t){return e[t]>=0}))}var ke=re({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,c=y(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&p.forEach((function(e){e.addEventListener("scroll",n.update,oe)})),s&&c.addEventListener("resize",n.update,oe),function(){i&&p.forEach((function(e){e.removeEventListener("scroll",n.update,oe)})),s&&c.removeEventListener("resize",n.update,oe)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=ce({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,c=void 0===s||s,p={placement:ie(t.placement),variation:ae(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,le(Object.assign({},p,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,le(Object.assign({},p,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];w(o)&&E(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});w(r)&&E(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},ue,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,p=n.padding,l=n.boundary,u=n.rootBoundary,f=n.altBoundary,d=n.flipVariations,m=void 0===d||d,h=n.allowedAutoPlacements,v=t.options.placement,g=ie(v),y=c||(g===v||!m?[de(v)]:function(e){if(ie(e)===_)return[];var t=de(e);return[he(e),t,he(t)]}(v)),b=[v].concat(y).reduce((function(e,n){return e.concat(ie(n)===_?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,p=void 0===c?G:c,l=ae(r),u=l?s?Q:Q.filter((function(e){return ae(e)===l})):q,f=u.filter((function(e){return p.indexOf(e)>=0}));0===f.length&&(f=u);var d=f.reduce((function(t,n){return t[n]=Oe(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[ie(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:l,rootBoundary:u,padding:p,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,Z=!0,T=b[0],R=0;R<b.length;R++){var P=b[R],E=ie(P),k=ae(P)===U,M=[H,I].indexOf(E)>=0,j=M?"width":"height",D=Oe(t,{placement:P,boundary:l,rootBoundary:u,altBoundary:f,padding:p}),S=M?k?V:$:k?I:H;w[j]>x[j]&&(S=de(S));var L=de(S),A=[];if(i&&A.push(D[E]<=0),s&&A.push(D[S]<=0,D[L]<=0),A.every((function(e){return e}))){T=P,Z=!1;break}O.set(P,A)}if(Z)for(var C=function(e){var t=b.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return T=t,"break"},W=m?3:1;W>0;W--){if("break"===C(W))break}t.placement!==T&&(t.modifiersData[r]._skip=!0,t.placement=T,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},Te,Re,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=Oe(t,{elementContext:"reference"}),s=Oe(t,{altBoundary:!0}),c=Pe(a,r),p=Pe(s,o,i),l=Ee(c),u=Ee(p);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:p,isReferenceHidden:l,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":u})}}]}),Me=n(78385),je=n(85893);const De=["anchorEl","children","direction","disablePortal","modifiers","open","ownerState","placement","popperOptions","popperRef","TransitionProps"],Se=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition"];function Le(e){return"function"===typeof e?e():e}const Ae={},Ce=i.forwardRef((function(e,t){const{anchorEl:n,children:a,direction:s,disablePortal:c,modifiers:p,open:l,placement:u,popperOptions:f,popperRef:d,TransitionProps:m}=e,g=(0,r.Z)(e,De),y=i.useRef(null),b=(0,h.Z)(y,t),w=i.useRef(null),x=(0,h.Z)(w,d),O=i.useRef(x);(0,v.Z)((()=>{O.current=x}),[x]),i.useImperativeHandle(d,(()=>w.current),[]);const Z=function(e,t){if("ltr"===t)return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(u,s),[T,R]=i.useState(Z);i.useEffect((()=>{w.current&&w.current.forceUpdate()})),(0,v.Z)((()=>{if(!n||!l)return;Le(n);let e=[{name:"preventOverflow",options:{altBoundary:c}},{name:"flip",options:{altBoundary:c}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:e})=>{R(e.placement)}}];null!=p&&(e=e.concat(p)),f&&null!=f.modifiers&&(e=e.concat(f.modifiers));const t=ke(Le(n),y.current,(0,o.Z)({placement:Z},f,{modifiers:e}));return O.current(t),()=>{t.destroy(),O.current(null)}}),[n,c,p,l,f,Z]);const P={placement:T};return null!==m&&(P.TransitionProps=m),(0,je.jsx)("div",(0,o.Z)({ref:b,role:"tooltip"},g,{children:"function"===typeof a?a(P):a}))}));var We=i.forwardRef((function(e,t){const{anchorEl:n,children:a,container:s,direction:c="ltr",disablePortal:p=!1,keepMounted:l=!1,modifiers:u,open:f,placement:d="bottom",popperOptions:m=Ae,popperRef:h,style:v,transition:y=!1}=e,b=(0,r.Z)(e,Se),[w,x]=i.useState(!0);if(!l&&!f&&(!y||w))return null;const O=s||(n?(0,g.Z)(Le(n)).body:void 0);return(0,je.jsx)(Me.Z,{disablePortal:p,container:O,children:(0,je.jsx)(Ce,(0,o.Z)({anchorEl:n,direction:c,disablePortal:p,modifiers:u,ref:t,open:y?!w:f,placement:d,popperOptions:m,popperRef:h},b,{style:(0,o.Z)({position:"fixed",top:0,left:0,display:f||!l||y&&!w?null:"none"},v),TransitionProps:y?{in:f,onEnter:()=>{x(!1)},onExited:()=>{x(!0)}}:null,children:a}))})})),Be=n(34168);const Ne=(0,l.ZP)(We,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({});var Fe=i.forwardRef((function(e,t){const n=(0,Be.Z)(),r=(0,f.Z)({props:e,name:"MuiPopper"});return(0,je.jsx)(Ne,(0,o.Z)({direction:null==n?void 0:n.direction},r,{ref:t}))})),He=n(2068),Ie=n(51705),Ve=n(27909),$e=n(79674),_e=n(49299),qe=n(48999);const Ue=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","title","TransitionComponent","TransitionProps"];const ze=(0,l.ZP)(Fe,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.popper,!n.disableInteractive&&t.popperInteractive,n.arrow&&t.popperArrow,!n.open&&t.popperClose]}})((({theme:e,ownerState:t,open:n})=>(0,o.Z)({zIndex:(e.vars||e).zIndex.tooltip,pointerEvents:"none"},!t.disableInteractive&&{pointerEvents:"auto"},!n&&{pointerEvents:"none"},t.arrow&&{[`&[data-popper-placement*="bottom"] .${qe.Z.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${qe.Z.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${qe.Z.arrow}`]:(0,o.Z)({},t.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${qe.Z.arrow}`]:(0,o.Z)({},t.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})}))),Ye=(0,l.ZP)("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.tooltip,n.touch&&t.touch,n.arrow&&t.tooltipArrow,t[`tooltipPlacement${(0,d.Z)(n.placement.split("-")[0])}`]]}})((({theme:e,ownerState:t})=>{return(0,o.Z)({backgroundColor:e.vars?`rgba(${e.vars.palette.grey.darkChannel} / 0.92)`:(0,p.Fq)(e.palette.grey[700],.92),borderRadius:(e.vars||e).shape.borderRadius,color:(e.vars||e).palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},t.arrow&&{position:"relative",margin:0},t.touch&&{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:(n=16/14,Math.round(1e5*n)/1e5)+"em",fontWeight:e.typography.fontWeightRegular},{[`.${qe.Z.popper}[data-popper-placement*="left"] &`]:(0,o.Z)({transformOrigin:"right center"},t.isRtl?(0,o.Z)({marginLeft:"14px"},t.touch&&{marginLeft:"24px"}):(0,o.Z)({marginRight:"14px"},t.touch&&{marginRight:"24px"})),[`.${qe.Z.popper}[data-popper-placement*="right"] &`]:(0,o.Z)({transformOrigin:"left center"},t.isRtl?(0,o.Z)({marginRight:"14px"},t.touch&&{marginRight:"24px"}):(0,o.Z)({marginLeft:"14px"},t.touch&&{marginLeft:"24px"})),[`.${qe.Z.popper}[data-popper-placement*="top"] &`]:(0,o.Z)({transformOrigin:"center bottom",marginBottom:"14px"},t.touch&&{marginBottom:"24px"}),[`.${qe.Z.popper}[data-popper-placement*="bottom"] &`]:(0,o.Z)({transformOrigin:"center top",marginTop:"14px"},t.touch&&{marginTop:"24px"})});var n})),Xe=(0,l.ZP)("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,t)=>t.arrow})((({theme:e})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:e.vars?`rgba(${e.vars.palette.grey.darkChannel} / 0.9)`:(0,p.Fq)(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}})));let Qe=!1,Ge=null;function Je(e,t){return n=>{t&&t(n),e(n)}}const Ke=i.forwardRef((function(e,t){var n,p,l,h,v,g;const y=(0,f.Z)({props:e,name:"MuiTooltip"}),{arrow:b=!1,children:w,components:x={},componentsProps:O={},describeChild:Z=!1,disableFocusListener:T=!1,disableHoverListener:R=!1,disableInteractive:P=!1,disableTouchListener:E=!1,enterDelay:k=100,enterNextDelay:M=0,enterTouchDelay:j=700,followCursor:D=!1,id:S,leaveDelay:L=0,leaveTouchDelay:A=1500,onClose:C,onOpen:W,open:B,placement:N="bottom",PopperComponent:F,PopperProps:H={},title:I,TransitionComponent:V=m.Z,TransitionProps:$}=y,_=(0,r.Z)(y,Ue),q=(0,u.Z)(),U="rtl"===q.direction,[z,Y]=i.useState(),[X,Q]=i.useState(null),G=i.useRef(!1),J=P||D,K=i.useRef(),ee=i.useRef(),te=i.useRef(),ne=i.useRef(),[re,oe]=(0,_e.Z)({controlled:B,default:!1,name:"Tooltip",state:"open"});let ie=re;const ae=(0,Ve.Z)(S),se=i.useRef(),ce=i.useCallback((()=>{void 0!==se.current&&(document.body.style.WebkitUserSelect=se.current,se.current=void 0),clearTimeout(ne.current)}),[]);i.useEffect((()=>()=>{clearTimeout(K.current),clearTimeout(ee.current),clearTimeout(te.current),ce()}),[ce]);const pe=e=>{clearTimeout(Ge),Qe=!0,oe(!0),W&&!ie&&W(e)},le=(0,He.Z)((e=>{clearTimeout(Ge),Ge=setTimeout((()=>{Qe=!1}),800+L),oe(!1),C&&ie&&C(e),clearTimeout(K.current),K.current=setTimeout((()=>{G.current=!1}),q.transitions.duration.shortest)})),ue=e=>{G.current&&"touchstart"!==e.type||(z&&z.removeAttribute("title"),clearTimeout(ee.current),clearTimeout(te.current),k||Qe&&M?ee.current=setTimeout((()=>{pe(e)}),Qe?M:k):pe(e))},fe=e=>{clearTimeout(ee.current),clearTimeout(te.current),te.current=setTimeout((()=>{le(e)}),L)},{isFocusVisibleRef:de,onBlur:me,onFocus:he,ref:ve}=(0,$e.Z)(),[,ge]=i.useState(!1),ye=e=>{me(e),!1===de.current&&(ge(!1),fe(e))},be=e=>{z||Y(e.currentTarget),he(e),!0===de.current&&(ge(!0),ue(e))},we=e=>{G.current=!0;const t=w.props;t.onTouchStart&&t.onTouchStart(e)},xe=ue,Oe=fe,Ze=e=>{we(e),clearTimeout(te.current),clearTimeout(K.current),ce(),se.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",ne.current=setTimeout((()=>{document.body.style.WebkitUserSelect=se.current,ue(e)}),j)},Te=e=>{w.props.onTouchEnd&&w.props.onTouchEnd(e),ce(),clearTimeout(te.current),te.current=setTimeout((()=>{le(e)}),A)};i.useEffect((()=>{if(ie)return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)};function e(e){"Escape"!==e.key&&"Esc"!==e.key||le(e)}}),[le,ie]);const Re=(0,Ie.Z)(Y,t),Pe=(0,Ie.Z)(ve,Re),Ee=(0,Ie.Z)(w.ref,Pe);""===I&&(ie=!1);const ke=i.useRef({x:0,y:0}),Me=i.useRef(),De={},Se="string"===typeof I;Z?(De.title=ie||!Se||R?null:I,De["aria-describedby"]=ie?ae:null):(De["aria-label"]=Se?I:null,De["aria-labelledby"]=ie&&!Se?ae:null);const Le=(0,o.Z)({},De,_,w.props,{className:(0,a.Z)(_.className,w.props.className),onTouchStart:we,ref:Ee},D?{onMouseMove:e=>{const t=w.props;t.onMouseMove&&t.onMouseMove(e),ke.current={x:e.clientX,y:e.clientY},Me.current&&Me.current.update()}}:{});const Ae={};E||(Le.onTouchStart=Ze,Le.onTouchEnd=Te),R||(Le.onMouseOver=Je(xe,Le.onMouseOver),Le.onMouseLeave=Je(Oe,Le.onMouseLeave),J||(Ae.onMouseOver=xe,Ae.onMouseLeave=Oe)),T||(Le.onFocus=Je(be,Le.onFocus),Le.onBlur=Je(ye,Le.onBlur),J||(Ae.onFocus=be,Ae.onBlur=ye));const Ce=i.useMemo((()=>{var e;let t=[{name:"arrow",enabled:Boolean(X),options:{element:X,padding:4}}];return null!=(e=H.popperOptions)&&e.modifiers&&(t=t.concat(H.popperOptions.modifiers)),(0,o.Z)({},H.popperOptions,{modifiers:t})}),[X,H]),We=(0,o.Z)({},y,{isRtl:U,arrow:b,disableInteractive:J,placement:N,PopperComponentProp:F,touch:G.current}),Be=(e=>{const{classes:t,disableInteractive:n,arrow:r,touch:o,placement:i}=e,a={popper:["popper",!n&&"popperInteractive",r&&"popperArrow"],tooltip:["tooltip",r&&"tooltipArrow",o&&"touch",`tooltipPlacement${(0,d.Z)(i.split("-")[0])}`],arrow:["arrow"]};return(0,s.Z)(a,qe.Q,t)})(We),Ne=null!=(n=x.Popper)?n:ze,Ke=null!=(p=null!=(l=x.Transition)?l:V)?p:m.Z,et=null!=(h=x.Tooltip)?h:Ye,tt=null!=(v=x.Arrow)?v:Xe,nt=(0,c.Z)(Ne,(0,o.Z)({},H,O.popper),We),rt=(0,c.Z)(Ke,(0,o.Z)({},$,O.transition),We),ot=(0,c.Z)(et,(0,o.Z)({},O.tooltip),We),it=(0,c.Z)(tt,(0,o.Z)({},O.arrow),We);return(0,je.jsxs)(i.Fragment,{children:[i.cloneElement(w,Le),(0,je.jsx)(Ne,(0,o.Z)({as:null!=F?F:Fe,placement:N,anchorEl:D?{getBoundingClientRect:()=>({top:ke.current.y,left:ke.current.x,right:ke.current.x,bottom:ke.current.y,width:0,height:0})}:z,popperRef:Me,open:!!z&&ie,id:ae,transition:!0},Ae,nt,{className:(0,a.Z)(Be.popper,null==H?void 0:H.className,null==(g=O.popper)?void 0:g.className),popperOptions:Ce,children:({TransitionProps:e})=>{var t,n;return(0,je.jsx)(Ke,(0,o.Z)({timeout:q.transitions.duration.shorter},e,rt,{children:(0,je.jsxs)(et,(0,o.Z)({},ot,{className:(0,a.Z)(Be.tooltip,null==(t=O.tooltip)?void 0:t.className),children:[I,b?(0,je.jsx)(tt,(0,o.Z)({},it,{className:(0,a.Z)(Be.arrow,null==(n=O.arrow)?void 0:n.className),ref:Q})):null]}))}))}}))]})}));var et=Ke},48999:function(e,t,n){"use strict";n.d(t,{Q:function(){return o}});var r=n(34867);function o(e){return(0,r.Z)("MuiTooltip",e)}const i=(0,n(1588).Z)("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]);t.Z=i},92703:function(e,t,n){"use strict";var r=n(50414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},45697:function(e,t,n){e.exports=n(92703)()},50414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);