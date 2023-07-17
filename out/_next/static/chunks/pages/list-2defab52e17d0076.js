(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8034],{53156:function(n,t,e){"use strict";e.d(t,{Z:function(){return w}});var o=e(63366),a=e(87462),r=e(67294),i=e(86010),s=e(28320),c=e(34867),d=e(94780),u=e(29628);var l=(0,e(70182).ZP)(),h=e(66500),p=e(85893);const x=["className","component","disableGutters","fixed","maxWidth","classes"],m=(0,h.Z)(),b=l("div",{name:"MuiContainer",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:e}=n;return[t.root,t[`maxWidth${(0,s.Z)(String(e.maxWidth))}`],e.fixed&&t.fixed,e.disableGutters&&t.disableGutters]}}),f=n=>(0,u.Z)({props:n,name:"MuiContainer",defaultTheme:m});var g=e(98216),v=e(90948),Z=e(71657);const k=function(n={}){const{createStyledComponent:t=b,useThemeProps:e=f,componentName:u="MuiContainer"}=n,l=t((({theme:n,ownerState:t})=>(0,a.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:n.spacing(2),paddingRight:n.spacing(2),[n.breakpoints.up("sm")]:{paddingLeft:n.spacing(3),paddingRight:n.spacing(3)}})),(({theme:n,ownerState:t})=>t.fixed&&Object.keys(n.breakpoints.values).reduce(((t,e)=>{const o=e,a=n.breakpoints.values[o];return 0!==a&&(t[n.breakpoints.up(o)]={maxWidth:`${a}${n.breakpoints.unit}`}),t}),{})),(({theme:n,ownerState:t})=>(0,a.Z)({},"xs"===t.maxWidth&&{[n.breakpoints.up("xs")]:{maxWidth:Math.max(n.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[n.breakpoints.up(t.maxWidth)]:{maxWidth:`${n.breakpoints.values[t.maxWidth]}${n.breakpoints.unit}`}}))),h=r.forwardRef((function(n,t){const r=e(n),{className:h,component:m="div",disableGutters:b=!1,fixed:f=!1,maxWidth:g="lg"}=r,v=(0,o.Z)(r,x),Z=(0,a.Z)({},r,{component:m,disableGutters:b,fixed:f,maxWidth:g}),k=((n,t)=>{const{classes:e,fixed:o,disableGutters:a,maxWidth:r}=n,i={root:["root",r&&`maxWidth${(0,s.Z)(String(r))}`,o&&"fixed",a&&"disableGutters"]};return(0,d.Z)(i,(n=>(0,c.Z)(t,n)),e)})(Z,u);return(0,p.jsx)(l,(0,a.Z)({as:m,ownerState:Z,className:(0,i.Z)(k.root,h),ref:t},v))}));return h}({createStyledComponent:(0,v.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:e}=n;return[t.root,t[`maxWidth${(0,g.Z)(String(e.maxWidth))}`],e.fixed&&t.fixed,e.disableGutters&&t.disableGutters]}}),useThemeProps:n=>(0,Z.Z)({props:n,name:"MuiContainer"})});var w=k},50016:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/list",function(){return e(59895)}])},82245:function(n,t,e){"use strict";e.r(t);var o=e(85893);t.default=function(n){var t=n.children;return(0,o.jsx)(o.Fragment,{children:t})}},59895:function(n,t,e){"use strict";e.r(t);var o=e(85893),a=e(9008),r=e.n(a),i=e(49104),s=e(67294),c=e(46225),d=e(45477),u=e(37887),l=e(9473),h=e(90948),p=e(87357),x=e(53156),m=e(82245),b=e(44741),f=e(99099);(0,h.ZP)(p.Z)((function(n){var t=n.theme;return"\n      padding: 0 ".concat(t.spacing(2),";\n      position: relative;\n      bottom: -1px;\n\n      .MuiTabs-root {\n        height: 44px;\n        min-height: 44px;\n      }\n\n      .MuiTabs-scrollableX {\n        overflow-x: auto !important;\n      }\n\n      .MuiTabs-indicator {\n          min-height: 4px;\n          height: 4px;\n          box-shadow: none;\n          bottom: -4px;\n          background: none;\n          border: 0;\n\n          &:after {\n            position: absolute;\n            left: 50%;\n            width: 28px;\n            content: ' ';\n            margin-left: -14px;\n            background: ").concat(t.colors.primary.main,";\n            border-radius: inherit;\n            height: 100%;\n          }\n      }\n\n      .MuiTab-root {\n          &.MuiButtonBase-root {\n              height: 44px;\n              min-height: 44px;\n              background: ").concat(t.colors.alpha.white[50],";\n              border: 1px solid ").concat(t.colors.alpha.black[10],";\n              border-bottom: 0;\n              position: relative;\n              margin-right: ").concat(t.spacing(1),";\n              font-size: ").concat(t.typography.pxToRem(14),";\n              color: ").concat(t.colors.alpha.black[80],";\n              border-bottom-left-radius: 0;\n              border-bottom-right-radius: 0;\n\n              .MuiTouchRipple-root {\n                opacity: .1;\n              }\n\n              &:after {\n                position: absolute;\n                left: 0;\n                right: 0;\n                width: 100%;\n                bottom: 0;\n                height: 1px;\n                content: '';\n                background: ").concat(t.colors.alpha.black[10],";\n              }\n\n              &:hover {\n                color: ").concat(t.colors.alpha.black[100],";\n              }\n          }\n          \n          &.Mui-selected {\n            color: ").concat(t.colors.alpha.black[100],";\n            background: ").concat(t.colors.alpha.white[100],";\n            border-bottom-color: ").concat(t.colors.alpha.white[100],";\n            \n            &:after {\n              height: 0;\n            }\n          }\n        }\n        ")}));function g(){var n=(0,l.I0)(),t=(0,s.useState)("basicInfo"),e=(t[0],t[1],(0,u.a)(d.A2));return e.data&&n((0,f.rP)(e.data.getAllUser)),(0,o.jsxs)(m.default,{children:[(0,o.jsx)(r(),{children:(0,o.jsx)("title",{children:"KYC User"})}),(0,o.jsx)(x.Z,{sx:{mt:2},maxWidth:"lg",children:(0,o.jsx)(b.default,{})}),(0,o.jsx)(c.Z,{})]})}g.getLayout=function(n){return(0,o.jsx)(i.Z,{children:n})},t.default=g},46225:function(n,t,e){"use strict";var o=e(85893),a=e(90948),r=e(53156),i=e(87357),s=e(15861),c=(0,a.ZP)(r.Z)((function(n){var t=n.theme;return"\n        margin-top: ".concat(t.spacing(4),";\n")}));t.Z=function(){return(0,o.jsx)(c,{className:"footer-wrapper",children:(0,o.jsxs)(i.Z,{pb:4,display:{xs:"block",md:"flex"},alignItems:"center",textAlign:{xs:"center",md:"left"},justifyContent:"space-between",children:[(0,o.jsx)(i.Z,{}),(0,o.jsx)(s.Z,{sx:{pt:{xs:2,md:0}},variant:"subtitle1"})]})})}}},function(n){n.O(0,[9774,6093,9990,1162,2937,7058,9036,315,8584,5637,6853,6809,8795,6261,765,9104,4741,2888,179],(function(){return t=50016,n(n.s=t);var t}));var t=n.O();_N_E=t}]);