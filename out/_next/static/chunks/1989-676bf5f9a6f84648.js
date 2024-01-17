(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1989],{15861:function(e,t,o){"use strict";o.d(t,{Z:function(){return b}});var r=o(63366),n=o(87462),a=o(67294),u=o(93680),i=o(39707),l=o(94780),c=o(90948),f=o(71657),s=o(98216),p=o(34867);function d(e){return(0,p.Z)("MuiTypography",e)}(0,o(1588).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var v=o(85893);const h=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],g=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.variant&&t[o.variant],"inherit"!==o.align&&t[`align${(0,s.Z)(o.align)}`],o.noWrap&&t.noWrap,o.gutterBottom&&t.gutterBottom,o.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,n.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},m={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var b=a.forwardRef((function(e,t){const o=(0,f.Z)({props:e,name:"MuiTypography"}),a=(e=>m[e]||e)(o.color),c=(0,i.Z)((0,n.Z)({},o,{color:a})),{align:p="inherit",className:b,component:M,gutterBottom:C=!1,noWrap:x=!1,paragraph:_=!1,variant:Z="body1",variantMapping:R=y}=c,L=(0,r.Z)(c,h),j=(0,n.Z)({},c,{align:p,color:a,className:b,component:M,gutterBottom:C,noWrap:x,paragraph:_,variant:Z,variantMapping:R}),w=M||(_?"p":R[Z]||y[Z])||"span",O=(e=>{const{align:t,gutterBottom:o,noWrap:r,paragraph:n,variant:a,classes:u}=e,i={root:["root",a,"inherit"!==e.align&&`align${(0,s.Z)(t)}`,o&&"gutterBottom",r&&"noWrap",n&&"paragraph"]};return(0,l.Z)(i,d,u)})(j);return(0,v.jsx)(g,(0,n.Z)({as:w,ref:t,ownerState:j,className:(0,u.Z)(O.root,b)},L))}))},27909:function(e,t,o){"use strict";var r=o(92996);t.Z=r.Z},92996:function(e,t,o){"use strict";var r;o.d(t,{Z:function(){return i}});var n=o(67294);let a=0;const u=(r||(r=o.t(n,2)))["useId".toString()];function i(e){if(void 0!==u){const t=u();return null!=e?e:t}return function(e){const[t,o]=n.useState(e),r=e||t;return n.useEffect((()=>{null==t&&(a+=1,o(`mui-${a}`))}),[t]),r}(e)}},71210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,o,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},48418:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(94941).Z;o(45753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(92648).Z,a=o(17273).Z,u=n(o(67294)),i=o(76273),l=o(22725),c=o(63462),f=o(21018),s=o(57190),p=o(71210),d=o(98684),v={};function h(e,t,o,r){if(e&&i.isLocalURL(t)){Promise.resolve(e.prefetch(t,o,r)).catch((function(e){0}));var n=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;v[t+"%"+o+(n?"%"+n:"")]=!0}}var g=u.default.forwardRef((function(e,t){var o,n=e.href,g=e.as,y=e.children,m=e.prefetch,b=e.passHref,M=e.replace,C=e.shallow,x=e.scroll,_=e.locale,Z=e.onClick,R=e.onMouseEnter,L=e.onTouchStart,j=e.legacyBehavior,w=void 0===j?!0!==Boolean(!1):j,O=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=y,!w||"string"!==typeof o&&"number"!==typeof o||(o=u.default.createElement("a",null,o));var B=!1!==m,E=u.default.useContext(c.RouterContext),P=u.default.useContext(f.AppRouterContext);P&&(E=P);var S,T=u.default.useMemo((function(){var e=r(i.resolveHref(E,n,!0),2),t=e[0],o=e[1];return{href:t,as:g?i.resolveHref(E,g):o||t}}),[E,n,g]),k=T.href,I=T.as,N=u.default.useRef(k),W=u.default.useRef(I);w&&(S=u.default.Children.only(o));var U=w?S&&"object"===typeof S&&S.ref:t,A=r(s.useIntersection({rootMargin:"200px"}),3),D=A[0],H=A[1],K=A[2],$=u.default.useCallback((function(e){W.current===I&&N.current===k||(K(),W.current=I,N.current=k),D(e),U&&("function"===typeof U?U(e):"object"===typeof U&&(U.current=e))}),[I,U,k,K,D]);u.default.useEffect((function(){var e=H&&B&&i.isLocalURL(k),t="undefined"!==typeof _?_:E&&E.locale,o=v[k+"%"+I+(t?"%"+t:"")];e&&!o&&h(E,k,I,{locale:t})}),[I,k,H,_,B,E]);var G={ref:$,onClick:function(e){w||"function"!==typeof Z||Z(e),w&&S.props&&"function"===typeof S.props.onClick&&S.props.onClick(e),e.defaultPrevented||function(e,t,o,r,n,a,l,c,f,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(o)){e.preventDefault();var p=function(){"beforePopState"in t?t[n?"replace":"push"](o,r,{shallow:a,locale:c,scroll:l}):t[n?"replace":"push"](o,{forceOptimisticNavigation:!s})};f?u.default.startTransition(p):p()}}(e,E,k,I,M,C,x,_,Boolean(P),B)},onMouseEnter:function(e){w||"function"!==typeof R||R(e),w&&S.props&&"function"===typeof S.props.onMouseEnter&&S.props.onMouseEnter(e),!B&&P||i.isLocalURL(k)&&h(E,k,I,{priority:!0})},onTouchStart:function(e){w||"function"!==typeof L||L(e),w&&S.props&&"function"===typeof S.props.onTouchStart&&S.props.onTouchStart(e),!B&&P||i.isLocalURL(k)&&h(E,k,I,{priority:!0})}};if(!w||b||"a"===S.type&&!("href"in S.props)){var q="undefined"!==typeof _?_:E&&E.locale,z=E&&E.isLocaleDomain&&p.getDomainLocale(I,q,E.locales,E.domainLocales);G.href=z||d.addBasePath(l.addLocale(I,q,E&&E.defaultLocale))}return w?u.default.cloneElement(S,G):u.default.createElement("a",Object.assign({},O,G),o)}));t.default=g,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},57190:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(94941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,o=e.rootMargin,c=e.disabled||!u,f=r(n.useState(!1),2),s=f[0],p=f[1],d=r(n.useState(null),2),v=d[0],h=d[1];n.useEffect((function(){if(u){if(c||s)return;if(v&&v.tagName){var e=function(e,t,o){var r=function(e){var t,o={root:e.root||null,margin:e.rootMargin||""},r=l.find((function(e){return e.root===o.root&&e.margin===o.margin}));if(r&&(t=i.get(r)))return t;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)}))}),e);return t={id:o,observer:a,elements:n},l.push(o),i.set(o,t),t}(o),n=r.id,a=r.observer,u=r.elements;return u.set(e,t),a.observe(e),function(){if(u.delete(e),a.unobserve(e),0===u.size){a.disconnect(),i.delete(n);var t=l.findIndex((function(e){return e.root===n.root&&e.margin===n.margin}));t>-1&&l.splice(t,1)}}}(v,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:o});return e}}else if(!s){var r=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(r)}}}),[v,c,o,t,s]);var g=n.useCallback((function(){p(!1)}),[]);return[h,s,g]};var n=o(67294),a=o(9311),u="function"===typeof IntersectionObserver,i=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},21018:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,o(92648).Z)(o(67294)),n=r.default.createContext(null);t.AppRouterContext=n;var a=r.default.createContext(null);t.LayoutRouterContext=a;var u=r.default.createContext(null);t.GlobalLayoutRouterContext=u;var i=r.default.createContext(null);t.TemplateContext=i},41664:function(e,t,o){e.exports=o(48418)}}]);