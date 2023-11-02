"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9395],{7500:function(n,e,o){var t=o(14924),a=o(26042),r=o(99534),i=o(85893),c=o(67294),s=o(86010),l=o(11163),d=o(41664),p=o.n(d),h=o(50122),u=(0,o(90948).ZP)("a")({}),x=c.forwardRef((function(n,e){var o=n.to,t=n.linkAs,c=n.replace,s=n.scroll,l=n.shallow,d=n.prefetch,h=n.locale,x=(0,r.Z)(n,["to","linkAs","replace","scroll","shallow","prefetch","locale"]);return(0,i.jsx)(p(),{href:o,prefetch:d,as:t,replace:c,scroll:s,shallow:l,passHref:!0,locale:h,children:(0,i.jsx)(u,(0,a.Z)({ref:e},x))})})),g=c.forwardRef((function(n,e){var o=n.activeClassName,c=void 0===o?"active":o,d=n.as,p=n.className,g=n.href,m=n.linkAs,f=n.locale,v=n.noLinkStyle,j=n.prefetch,Z=n.replace,b=(n.role,n.scroll),y=n.shallow,C=(0,r.Z)(n,["activeClassName","as","className","href","linkAs","locale","noLinkStyle","prefetch","replace","role","scroll","shallow"]),k=(0,l.useRouter)(),A="string"===typeof g?g:g.pathname,w=(0,s.Z)(p,(0,t.Z)({},c,k.pathname===A&&c));if("string"===typeof g&&(0===g.indexOf("http")||0===g.indexOf("mailto:")))return v?(0,i.jsx)(u,(0,a.Z)({className:w,href:g,ref:e},C)):(0,i.jsx)(h.Z,(0,a.Z)({className:w,href:g,ref:e},C));var N={to:g,linkAs:m||d,replace:Z,scroll:b,shallow:y,prefetch:j,locale:f};return v?(0,i.jsx)(x,(0,a.Z)({className:w,ref:e},N,C)):(0,i.jsx)(h.Z,(0,a.Z)({component:x,className:w,ref:e},N,C))}));e.C=g},38928:function(n,e,o){var t=o(14924),a=o(26042),r=o(69396),i=o(99534),c=o(85893),s=o(90948),l=o(21023),d=o(48999),p=o(7500),h=(0,s.ZP)(p.C)((function(n){var e=n.theme;return"\n        color: ".concat(e.palette.text.primary,";\n        display: flex;\n        text-decoration: none;\n        width: 53px;\n        margin: 0 auto;\n        font-weight: ").concat(e.typography.fontWeightBold,";\n")})),u=(0,s.ZP)((function(n){var e=n.className,o=(0,i.Z)(n,["className"]);return(0,c.jsx)(l.Z,(0,r.Z)((0,a.Z)({},o),{classes:{popper:e}}))}))((function(n){var e,o=n.theme;return e={},(0,t.Z)(e,"& .".concat(d.Z.tooltip),{backgroundColor:o.colors.alpha.trueWhite[100],color:o.palette.getContrastText(o.colors.alpha.trueWhite[100]),fontSize:o.typography.pxToRem(12),fontWeight:"bold",borderRadius:o.general.borderRadiusSm,boxShadow:"0 .2rem .8rem rgba(7,9,25,.18), 0 .08rem .15rem rgba(7,9,25,.15)"}),(0,t.Z)(e,"& .".concat(d.Z.arrow),{color:o.colors.alpha.trueWhite[100]}),e}));e.Z=function(){return(0,c.jsx)(u,{title:"Ramaera KYC Dashboard",arrow:!0,children:(0,c.jsx)(h,{href:"/dashboard",children:(0,c.jsx)("img",{style:{marginLeft:25},height:100,src:"/static/images/logo/logo.png"})})})}},34753:function(n,e){e.Z={project:{AGRA:"agra",HAJIPUR:"hajipur"},role:{ADMIN:"ADMIN",AGENT:"AGENT",USER:"USER"},membership:{ADVANCE:"ADVANCE",BASIC:"BASIC"},status:{AGENT_APPROVED:"AGENT_APPROVED",APPROVED:"APPROVED",NOT_INITIALIZED:"NOT_INITIALIZED",ONGOING:"ONGOING",PENDING:"PENDING",REJECTED:"REJECTED",SUBMITTED:"SUBMITTED"},amount:{beforeFifteenthAugustBasicAmount:1e3,beforeFifteenthAugustAdvanceAmount:1e5,afterFifteenthAugustBasicAmount:2e3,afterFifteenthAugustAdvanceAmount:2e5}}},9395:function(n,e,o){o.d(e,{Z:function(){return cn}});var t=o(14924),a=o(85893),r=o(2734),i=o(87357),c=o(41796),s=o(45697),l=o.n(s),d=o(67294),p=o(26042),h=o(69396),u=o(99534),x=o(86658),g=function(n){n.className;var e=n.children,o=(0,u.Z)(n,["className","children"]),t=(0,r.Z)();return(0,a.jsx)(x.$B,(0,h.Z)((0,p.Z)({autoHide:!0,universal:!0,renderThumbVertical:function(){return(0,a.jsx)(i.Z,{sx:{width:5,background:"".concat(t.colors.alpha.black[10]),borderRadius:"".concat(t.general.borderRadiusLg),transition:"".concat(t.transitions.create(["background"])),"&:hover":{background:"".concat(t.colors.alpha.black[30])}}})}},o),{children:e}))};g.propTypes={children:l().node,className:l().string};var m=g,f=o(51835),v=o(90948),j=o(77533),Z=o(67720),b=o(38928),y=o(78462),C=o(70891),k=o(11057),A=o(41664),w=o.n(A),N=o(11163),S=o(9473),I=[{projectName:"Hajipur Spice Project",navigateTo:"hajipur"},{projectName:"Ramaera Agra Mart",navigateTo:"agra"}],P=o(89448),T=o(26183),R=o(34753),E=(0,v.ZP)(i.Z)((function(n){var e=n.theme;return"\n  .MuiList-root {\n    padding: ".concat(e.spacing(1),";\n    & > .MuiList-root {\n      padding: 0 ").concat(e.spacing(0)," ").concat(e.spacing(1),";\n    }\n  }\n    .MuiListSubheader-root {\n      text-transform: uppercase;\n      font-weight: bold;\n      font-size: ").concat(e.typography.pxToRem(12),";\n      color: ").concat(e.colors.alpha.trueWhite[50],";\n      padding: ").concat(e.spacing(0,2.5),";\n      line-height: 1.4;\n    }\n")})),M=(0,v.ZP)(i.Z)((function(n){var e=n.theme;return"\n    .MuiList-root {\n      .MuiListItem-root {\n        padding: 1px 0;\n        .MuiBadge-root {\n          position: absolute;\n          right: ".concat(e.spacing(3.2),";\n          .MuiBadge-standard {\n            background: ").concat(e.colors.primary.main,";\n            font-size: ").concat(e.typography.pxToRem(10),";\n            font-weight: bold;\n            text-transform: uppercase;\n            color: ").concat(e.palette.primary.contrastText,";\n          }\n        }\n        .MuiButton-root {\n          display: flex;\n          color: ").concat(e.colors.alpha.trueWhite[70],";\n          background-color: transparent;\n          width: 100%;\n          justify-content: flex-start;\n          padding: ").concat(e.spacing(1.2,3),";\n          .MuiButton-startIcon,\n          .MuiButton-endIcon {\n            transition: ").concat(e.transitions.create(["color"]),";\n            .MuiSvgIcon-root {\n              font-size: inherit;\n              transition: none;\n            }\n          }\n          .MuiButton-startIcon {\n            color: ").concat(e.colors.alpha.trueWhite[30],";\n            font-size: ").concat(e.typography.pxToRem(20),";\n            margin-right: ").concat(e.spacing(1),";\n          }\n          .MuiButton-endIcon {\n            color: ").concat(e.colors.alpha.trueWhite[50],";\n            margin-left: auto;\n            opacity: .8;\n            font-size: ").concat(e.typography.pxToRem(20),";\n          }\n          &.active,\n          &:hover {\n            background-color: ").concat((0,c.Fq)(e.colors.alpha.trueWhite[100],.06),";\n            color: ").concat(e.colors.alpha.trueWhite[100],";\n            .MuiButton-startIcon,\n            .MuiButton-endIcon {\n              color: ").concat(e.colors.alpha.trueWhite[100],";\n            }\n          }\n        }\n        &.Mui-children {\n          flex-direction: column;\n          .MuiBadge-root {\n            position: absolute;\n            right: ").concat(e.spacing(7),";\n          }\n        }\n        .MuiCollapse-root {\n          width: 100%;\n          .MuiList-root {\n            padding: ").concat(e.spacing(1,0),";\n          }\n          .MuiListItem-root {\n            padding: 1px 0;\n            .MuiButton-root {\n              padding: ").concat(e.spacing(.8,3),";\n              .MuiBadge-root {\n                right: ").concat(e.spacing(3.2),";\n              }\n              &:before {\n                content: ' ';\n                background: ").concat(e.colors.alpha.trueWhite[100],";\n                opacity: 0;\n                transition: ").concat(e.transitions.create(["transform","opacity"]),";\n                width: 6px;\n                height: 6px;\n                transform: scale(0);\n                transform-origin: center;\n                border-radius: 20px;\n                margin-right: ").concat(e.spacing(1.8),";\n              }\n              &.active,\n              &:hover {\n                &:before {\n                  transform: scale(1);\n                  opacity: 1;\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n")}));var B=function(){var n,e,o=(0,T.C)((function(n){var e;return null===(e=n.user)||void 0===e?void 0:e.data})),t=(0,d.useContext)(f.l).closeSidebar,r=(0,S.v9)((function(n){var e;return null===(e=n.user)||void 0===e?void 0:e.agencyCode})),i=(0,N.useRouter)(),c=i.pathname,s=i.query,l=(0,T.T)(),p=(0,d.useState)(!1),h=p[0],u=p[1],x=(0,d.useState)(!1),g=x[0],m=x[1];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(E,{children:(0,a.jsx)(y.Z,{component:"div",children:(0,a.jsx)(M,{children:(0,a.jsxs)(y.Z,{component:"div",children:[(0,a.jsx)(C.ZP,{component:"div",children:(0,a.jsx)(w(),{href:"/list",passHref:!0,children:(0,a.jsx)(k.Z,{className:"/list"===c?"active":"",style:{color:"/list"===c?"#7063C0":""},disableRipple:!0,component:"a",onClick:function(){u(!1),m(!1),t()},startIcon:(0,a.jsx)("span",{style:{color:"/list"===c?"#7063C0":""},children:"\u2022"}),children:"DASHBOARD"})})}),r&&(0,a.jsx)(C.ZP,{component:"div",children:(0,a.jsx)(w(),{href:"/agency",passHref:!0,children:(0,a.jsx)(k.Z,{className:"/agency"===c||"/agency/[index]"===c?"active":"",disableRipple:!0,style:{color:"/agency"===c||"/agency/[index]"===c?"#7063C0":""},component:"a",onClick:function(){u(!1),m(!1),t()},startIcon:(0,a.jsx)("span",{style:{color:"/agency"===c||"/agency/[index]"===c?"#7063C0":""},children:"\u2022"}),children:"AGENCY"})})}),(0,a.jsx)(C.ZP,{component:"div",children:(0,a.jsx)(w(),{href:"/dashboard",passHref:!0,children:(0,a.jsx)(k.Z,{className:"/dashboard"===c?"active":"",style:{color:"/dashboard"===c?"#7063C0":""},disableRipple:!0,component:"a",onClick:function(){u(!1),m(!1),t()},startIcon:(0,a.jsx)("span",{style:{color:"/dashboard"===c?"#7063C0":""},children:"\u2022"}),children:"KYC"})})}),(null===o||void 0===o?void 0:o.kyc)===R.Z.status.APPROVED&&(0,a.jsx)(C.ZP,{component:"div",children:(0,a.jsx)(k.Z,{className:c.includes("/dashboard/project")?"active":"",style:{color:c.includes("/dashboard/project")?"#7063C0":""},onClick:function(){u(!h),m(!1)},startIcon:(0,a.jsx)("span",{style:{color:c.includes("/dashboard/project")?"#7063C0":""},children:"\u2022"}),children:"PROJECTS"})}),(null===o||void 0===o?void 0:o.kyc)===R.Z.status.APPROVED&&h?(0,a.jsx)(y.Z,{component:"div",style:{marginLeft:""},children:I.map((function(n){var e,o;return(0,a.jsx)(C.ZP,{component:"div",onClick:t,children:(0,a.jsx)(w(),{href:"/dashboard/project/".concat(n.navigateTo),passHref:!0,children:(0,a.jsx)(k.Z,{onClick:t,style:{color:(null===s||void 0===s||null===(e=s.index)||void 0===e?void 0:e.includes("".concat(n.navigateTo)))?"#7063C0":"",fontWeight:500,fontSize:"12px",textAlign:"right",padding:"10px 15px"},className:(null===s||void 0===s||null===(o=s.index)||void 0===o?void 0:o.includes("".concat(n.navigateTo)))?"active":"",children:n.projectName})})})}))}):"",((null===o||void 0===o?void 0:o.membership)===R.Z.membership.BASIC||(null===o||void 0===o?void 0:o.documents.find((function(n){return n.title.includes("to_advance")}))))&&(0,a.jsx)(C.ZP,{component:"div",children:(0,a.jsx)(w(),{href:"/dashboard/toAdvance",passHref:!0,children:(0,a.jsx)(k.Z,{className:"/dashboard/toAdvance"===c?"active":"",style:{color:"/dashboard/toAdvance"===c?"#7063C0":""},disableRipple:!0,component:"a",onClick:function(){u(!1),m(!1),t()},startIcon:(0,a.jsx)("span",{style:{color:"/dashboard/toAdvance"===c?"#7063C0":""},children:"\u2022"}),children:"UPGRADE MEMBERSHIP"})})}),(0,a.jsx)(C.ZP,{component:"div",children:(0,a.jsx)(w(),{href:"/dashboard/getAgency",passHref:!0,children:(0,a.jsx)(k.Z,{className:"/dashboard/getAgency"===c?"active":"",style:{color:"/dashboard/getAgency"===c?"#7063C0":""},disableRipple:!0,component:"a",onClick:function(){u(!1),m(!1),t()},startIcon:(0,a.jsx)("span",{style:{color:"/dashboard/getAgency"===c?"#7063C0":""},children:"\u2022"}),children:"GET AGENCY"})})}),(0,a.jsx)(C.ZP,{component:"div",children:(0,a.jsx)(w(),{href:"/dashboard/receipt",passHref:!0,children:(0,a.jsx)(k.Z,{className:"/dashboard/receipt"===c?"active":"",style:{color:"/dashboard/receipt"===c?"#7063C0":""},disableRipple:!0,component:"a",onClick:function(){u(!1),m(!1),t()},startIcon:(0,a.jsx)("span",{style:{color:"/dashboard/receipt"===c?"#7063C0":""},children:"\u2022"}),children:"RECEIPT"})})}),(0,a.jsx)(C.ZP,{component:"div",children:(0,a.jsx)(k.Z,{className:c.includes("/dashboard/share")?"active":"",style:{color:c.includes("/dashboard/share")?"#7063C0":""},onClick:function(){m(!g),u(!1)},startIcon:(0,a.jsx)("span",{style:{color:c.includes("/dashboard/share")?"#7063C0":""},children:"\u2022"}),children:"SHARES"})}),g?(0,a.jsxs)(y.Z,{component:"div",style:{marginLeft:""},children:[(0,a.jsx)(C.ZP,{component:"div",onClick:t,children:(0,a.jsx)(w(),{href:"/dashboard/share/ramaera",passHref:!0,children:(0,a.jsx)(k.Z,{style:{color:(null===s||void 0===s||null===(n=s.index)||void 0===n?void 0:n.includes("ramaera"))?"#7063C0":"",fontWeight:500,fontSize:"12px",textAlign:"right",padding:"10px 15px"},className:(null===s||void 0===s||null===(e=s.index)||void 0===e?void 0:e.includes("ramaera"))?"active":"",children:"Ramaera"})})}),I.map((function(n){var e,o;return(0,a.jsx)(C.ZP,{component:"div",onClick:t,children:(0,a.jsx)(w(),{href:"/dashboard/share/".concat(n.navigateTo),passHref:!0,children:(0,a.jsx)(k.Z,{style:{color:(null===s||void 0===s||null===(e=s.index)||void 0===e?void 0:e.includes("".concat(n.navigateTo)))?"#7063C0":"",fontWeight:500,fontSize:"12px",textAlign:"right",padding:"10px 15px"},className:(null===s||void 0===s||null===(o=s.index)||void 0===o?void 0:o.includes("".concat(n.navigateTo)))?"active":"",children:n.projectName})})})}))]}):"",(0,a.jsx)(C.ZP,{component:"div",children:(0,a.jsx)(w(),{href:"/settings",passHref:!0,children:(0,a.jsx)(k.Z,{className:"/settings"===c?"active":"",style:{color:"/settings"===c?"#7063C0":""},disableRipple:!0,component:"a",onClick:function(){u(!1),m(!1),t()},startIcon:(0,a.jsx)("span",{style:{color:"/settings"===c?"#7063C0":""},children:"\u2022"}),children:"SETTINGS"})})}),(0,a.jsx)(C.ZP,{component:"div",children:(0,a.jsx)(k.Z,{disableRipple:!0,component:"a",onClick:function(){u(!1),m(!1),t(),l((0,P.kS)())},children:"LOGOUT"})})]})})})}),(0,a.jsx)(C.ZP,{component:"div"})]})},D=(0,v.ZP)(i.Z)((function(n){var e=n.theme;return"\n        width: ".concat(e.sidebar.width,";\n        min-width: ").concat(e.sidebar.width,";\n        color: ").concat(e.colors.alpha.trueWhite[70],";\n        position: relative;\n        z-index: 7;\n        height: 100%;\n        padding-bottom: 68px;\n")}));var z=function(){var n=(0,d.useContext)(f.l),e=n.sidebarToggle,o=n.toggleSidebar,t=(0,r.Z)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(D,{sx:{display:{xs:"none",lg:"inline-block"},position:"fixed",left:0,top:0,background:"dark"===t.palette.mode?(0,c.Fq)((0,c.$n)(t.header.background,.1),.5):(0,c._j)(t.colors.alpha.black[100],.5),boxShadow:"dark"===t.palette.mode?t.sidebar.boxShadow:"none"},children:(0,a.jsxs)(m,{children:[(0,a.jsx)(i.Z,{mt:3,children:(0,a.jsx)(i.Z,{mx:2,sx:{width:52},children:(0,a.jsx)(b.Z,{})})}),(0,a.jsx)(B,{})]})}),(0,a.jsx)(j.ZP,{sx:{boxShadow:"".concat(t.sidebar.boxShadow)},anchor:"rtl"===t.direction?"right":"left",open:e,onClose:function(){return o()},variant:"temporary",elevation:9,children:(0,a.jsx)(D,{sx:{background:"dark"===t.palette.mode?t.colors.alpha.white[100]:(0,c._j)(t.colors.alpha.black[100],.5)},children:(0,a.jsxs)(m,{children:[(0,a.jsx)(i.Z,{mt:3,children:(0,a.jsx)(i.Z,{mx:2,sx:{width:52},children:(0,a.jsx)(b.Z,{})})}),(0,a.jsx)(Z.Z,{sx:{mt:t.spacing(3),mx:t.spacing(2),background:t.colors.alpha.trueWhite[10]}}),(0,a.jsx)(B,{})]})})})]})},H=o(83419),W=o(5196),O=o(98396),G=o(26447),F=o(15861),L=o(21023),_=o(93946),q=o(86501),U=o(50456),V=o(14564),Y=o(79126),K=o(32321),$=o(94229),J=(0,v.ZP)(k.Z)((function(n){var e=n.theme;return"\n        padding-left: ".concat(e.spacing(1),";\n        padding-right: ").concat(e.spacing(1),";\n")})),Q=(0,v.ZP)(i.Z)((function(n){var e=n.theme;return"\n        background: ".concat(e.colors.alpha.black[5],";\n        padding: ").concat(e.spacing(2),";\n")})),X=(0,v.ZP)(i.Z)((function(n){var e=n.theme;return"\n        text-align: left;\n        padding-left: ".concat(e.spacing(1),";\n")})),nn=(0,v.ZP)(F.Z)((function(n){var e=n.theme;return"\n        font-weight: ".concat(e.typography.fontWeightBold,";\n        color: ").concat(e.palette.secondary.main,";\n        display: block;\n")})),en=(0,v.ZP)(F.Z)((function(n){var e=n.theme;return"\n        color: ".concat((0,c.$n)(e.palette.secondary.main,.5),"\n")}));var on=function(){var n=(0,N.useRouter)(),e=(0,T.C)((function(n){var e;return null===(e=n.user)||void 0===e?void 0:e.data})),o=(0,d.useRef)(null),t=(0,d.useState)(!1),r=t[0],c=t[1],s=(0,T.T)(),l=function(){c(!1)};return(0,a.jsxs)("div",{children:[(0,a.jsxs)(J,{color:"secondary",ref:o,onClick:function(){c(!0)},children:[(0,a.jsx)(U.Z,{smUp:!0,children:(0,a.jsx)("img",{height:40,src:"/static/images/logo/logo.png"})}),(0,a.jsx)(U.Z,{mdDown:!0,children:(0,a.jsx)(X,{children:(0,a.jsx)(nn,{variant:"body2",children:(null===e||void 0===e?void 0:e.name)||(null===e||void 0===e?void 0:e.rm_id)})})}),(0,a.jsx)(U.Z,{smDown:!0,children:(0,a.jsx)(Y.Z,{sx:{ml:1}})})]}),(0,a.jsxs)(V.ZP,{anchorEl:o.current,onClose:l,open:r,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[(0,a.jsx)(Q,{display:"flex",children:(0,a.jsxs)(X,{children:[(0,a.jsx)(nn,{variant:"body1",children:(null===e||void 0===e?void 0:e.name)?null===e||void 0===e?void 0:e.name:""}),(0,a.jsx)(en,{variant:"body2",children:e&&(null===e||void 0===e?void 0:e.rm_id)}),(0,a.jsx)(en,{variant:"body2",children:e&&(null===e||void 0===e?void 0:e.pw_id)})]})}),(0,a.jsx)(Z.Z,{sx:{mb:0}}),(0,a.jsx)(Z.Z,{}),(0,a.jsx)(i.Z,{sx:{m:1},children:(0,a.jsxs)(k.Z,{color:"primary",fullWidth:!0,onClick:function(){s((0,P.kS)())},children:[(0,a.jsx)(K.Z,{sx:{mr:1}}),"Sign out"]})}),(0,a.jsx)(Z.Z,{}),(0,a.jsx)(i.Z,{sx:{m:1},children:(0,a.jsxs)(k.Z,{color:"primary",fullWidth:!0,onClick:function(){n.push("/settings"),l()},children:[(0,a.jsx)($.Z,{sx:{mr:1}}),"Settings"]})})]})]})},tn=(0,v.ZP)(i.Z)((function(n){var e=n.theme;return"\n  height: ".concat(e.header.height,";\n  color: ").concat(e.header.textColor,";\n  padding: ").concat(e.spacing(0,2),";\n  right: 0;\n  z-index: 6;\n  background-color: ").concat((0,c.Fq)(e.header.background,.95),";\n  backdrop-filter: blur(3px);\n  position: fixed;\n  justify-content: space-between;\n  width: 100%;\n  @media (min-width: ").concat(e.breakpoints.values.lg,"px) {\n    left: ").concat(e.sidebar.width,";\n    width: auto;\n  }\n  ")}));var an=function(){var n=(0,S.v9)((function(n){var e;return null===(e=n.user)||void 0===e?void 0:e.agencyCode})),e=(0,S.v9)((function(n){return n.allUsers.totalNumbers})),o=(0,O.Z)("(max-width:600px)"),s=(0,d.useState)({totalKYC:0,totalHajipur:0,totalAgra:0}),l=s[0],p=s[1];(0,d.useEffect)((function(){p({totalKYC:e.totalSubscribers,totalHajipur:e.totalHajipurSubscribers,totalAgra:e.totalAgraSubscribers})}),[e]);var h=(0,d.useContext)(f.l),u=h.sidebarToggle,x=h.toggleSidebar,g=(0,r.Z)(),m=(0,N.useRouter)(),v=(0,T.C)((function(n){var e;return null===(e=n.user)||void 0===e?void 0:e.data}));return(0,a.jsxs)(tn,{display:"flex",alignItems:"center",sx:{boxShadow:"dark"===g.palette.mode?"0 1px 0 ".concat((0,c.Fq)((0,c.$n)(g.colors.primary.main,.7),.15),", 0px 2px 8px -3px rgba(0, 0, 0, 0.2), 0px 5px 22px -4px rgba(0, 0, 0, .1)"):"0px 2px 8px -3px ".concat((0,c.Fq)(g.colors.alpha.black[100],.2),", 0px 5px 22px -4px ").concat((0,c.Fq)(g.colors.alpha.black[100],.1))},children:[(0,a.jsx)(G.Z,{direction:"row",divider:(0,a.jsx)(Z.Z,{orientation:"vertical",flexItem:!0}),alignItems:"center",justifyContent:"flex-end",spacing:2}),"/dashboard"===m.pathname&&(0,a.jsxs)(G.Z,{direction:"row",divider:(0,a.jsx)(Z.Z,{orientation:"vertical",flexItem:!0}),alignItems:"center",justifyContent:"flex-end",spacing:2,children:[!o&&(0,a.jsxs)(F.Z,{variant:"h4",sx:(0,t.Z)({my:2},g.breakpoints.down("sm"),{fontSize:10,width:90}),children:["RM ID : ",v&&(null===v||void 0===v?void 0:v.rm_id)]}),n&&(0,a.jsxs)(F.Z,{variant:"h4",sx:(0,t.Z)({my:2},g.breakpoints.down("sm"),{fontSize:10,width:90}),children:["Agency Code :"," ",(0,a.jsx)("span",{style:(0,t.Z)({cursor:"pointer"},g.breakpoints.down("sm"),{fontSize:10,width:90}),onClick:function(){q.ZP.success("Agency Code Copied"),navigator.clipboard.writeText(n)},children:n})]})]}),"/list"===m.pathname&&(0,a.jsxs)(G.Z,{direction:"row",divider:(0,a.jsx)(Z.Z,{orientation:"vertical",flexItem:!0}),alignItems:"center",justifyContent:"flex-end",spacing:2,children:[l.totalKYC&&(0,a.jsxs)(F.Z,{variant:"h4",sx:(0,t.Z)({my:2},g.breakpoints.down("sm"),{fontSize:12}),children:["Total Subscribers : ",l.totalKYC]}),l.totalHajipur&&(0,a.jsxs)(F.Z,{variant:"h4",sx:(0,t.Z)({my:2},g.breakpoints.down("sm"),{fontSize:12}),children:["Hajipur Enrolled : ",l.totalHajipur]}),l.totalAgra&&(0,a.jsxs)(F.Z,{variant:"h4",sx:(0,t.Z)({my:2},g.breakpoints.down("sm"),{fontSize:12}),children:["Agra Enrolled : ",l.totalAgra]})]}),"/agency"===m.pathname&&n&&(0,a.jsx)(G.Z,{direction:"row",divider:(0,a.jsx)(Z.Z,{orientation:"vertical",flexItem:!0}),alignItems:"center",justifyContent:"flex-end",spacing:2,children:(0,a.jsxs)(F.Z,{variant:"h4",sx:(0,t.Z)({my:2},g.breakpoints.down("sm"),{fontSize:10,width:90}),children:["Agency Code :"," ",(0,a.jsx)("span",{style:{cursor:"pointer"},onClick:function(){q.ZP.success("Agency Code Copied"),navigator.clipboard.writeText(n)},children:n})]})}),(0,a.jsxs)(i.Z,{display:"flex",alignItems:"center",children:[(0,a.jsx)(on,{}),(0,a.jsx)(i.Z,{component:"span",sx:{display:{lg:"none",xs:"inline-block"}},children:(0,a.jsx)(L.Z,{arrow:!0,title:"Toggle Menu",children:(0,a.jsx)(_.Z,{color:"primary",onClick:x,children:u?(0,a.jsx)(H.Z,{fontSize:"small"}):(0,a.jsx)(W.Z,{fontSize:"small"})})})})]})]})},rn=function(n){var e=n.children,o=(0,r.Z)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(i.Z,{sx:{flex:1,height:"100%",".MuiPageTitle-wrapper":{background:"dark"===o.palette.mode?o.colors.alpha.trueWhite[5]:o.colors.alpha.white[50],marginBottom:"".concat(o.spacing(4)),boxShadow:"dark"===o.palette.mode?"0 1px 0 ".concat((0,c.Fq)((0,c.$n)(o.colors.primary.main,.7),.15),", 0px 2px 4px -3px rgba(0, 0, 0, 0.2), 0px 5px 12px -4px rgba(0, 0, 0, .1)"):"0px 2px 4px -3px ".concat((0,c.Fq)(o.colors.alpha.black[100],.1),", 0px 5px 12px -4px ").concat((0,c.Fq)(o.colors.alpha.black[100],.05))}},children:[(0,a.jsx)(an,{}),(0,a.jsx)(z,{}),(0,a.jsx)(i.Z,{sx:(0,t.Z)({position:"relative",zIndex:5,display:"block",flex:1,pt:"".concat(o.header.height)},o.breakpoints.up("lg"),{ml:"".concat(o.sidebar.width)}),children:(0,a.jsx)(i.Z,{display:"block",children:e})})]})})};rn.propTypes={children:l().node};var cn=rn}}]);