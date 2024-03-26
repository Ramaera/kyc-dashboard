(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1515],{87357:function(e,r,o){"use strict";o.d(r,{Z:function(){return h}});var n=o(87462),t=o(63366),a=o(67294),i=o(70828),s=o(49731),l=o(86523),u=o(39707),f=o(96682),c=o(85893);const d=["className","component"];var m=o(37078);const p=function(e={}){const{themeId:r,defaultTheme:o,defaultClassName:m="MuiBox-root",generateClassName:p}=e,h=(0,s.ZP)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(l.Z);return a.forwardRef((function(e,a){const s=(0,f.Z)(o),l=(0,u.Z)(e),{className:y,component:g="div"}=l,b=(0,t.Z)(l,d);return(0,c.jsx)(h,(0,n.Z)({as:g,ref:a,className:(0,i.Z)(y,p?p(m):m),theme:r&&s[r]||s},b))}))}({defaultTheme:(0,o(69404).Z)(),defaultClassName:"MuiBox-root",generateClassName:m.Z.generate});var h=p},88441:function(e,r,o){"use strict";var n=o(63366),t=o(87462),a=o(67294),i=o(93680),s=o(94780),l=o(70917),u=o(41796),f=o(98216),c=o(2734),d=o(90948),m=o(71657),p=o(28962),h=o(85893);const y=["className","color","value","valueBuffer","variant"];let g,b,k,v,Z,S,N=e=>e;const C=(0,l.F4)(g||(g=N`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),R=(0,l.F4)(b||(b=N`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),P=(0,l.F4)(k||(k=N`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),A=(e,r)=>"inherit"===r?"currentColor":"light"===e.palette.mode?(0,u.$n)(e.palette[r].main,.62):(0,u._j)(e.palette[r].main,.5),B=(0,d.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:o}=e;return[r.root,r[`color${(0,f.Z)(o.color)}`],r[o.variant]]}})((({ownerState:e,theme:r})=>(0,t.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:A(r,e.color)},"inherit"===e.color&&"buffer"!==e.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===e.variant&&{backgroundColor:"transparent"},"query"===e.variant&&{transform:"rotate(180deg)"}))),x=(0,d.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,r)=>{const{ownerState:o}=e;return[r.dashed,r[`dashedColor${(0,f.Z)(o.color)}`]]}})((({ownerState:e,theme:r})=>{const o=A(r,e.color);return(0,t.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===e.color&&{opacity:.3},{backgroundImage:`radial-gradient(${o} 0%, ${o} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),(0,l.iv)(v||(v=N`
    animation: ${0} 3s infinite linear;
  `),P)),w=(0,d.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,r)=>{const{ownerState:o}=e;return[r.bar,r[`barColor${(0,f.Z)(o.color)}`],("indeterminate"===o.variant||"query"===o.variant)&&r.bar1Indeterminate,"determinate"===o.variant&&r.bar1Determinate,"buffer"===o.variant&&r.bar1Buffer]}})((({ownerState:e,theme:r})=>(0,t.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===e.color?"currentColor":r.palette[e.color].main},"determinate"===e.variant&&{transition:"transform .4s linear"},"buffer"===e.variant&&{zIndex:1,transition:"transform .4s linear"})),(({ownerState:e})=>("indeterminate"===e.variant||"query"===e.variant)&&(0,l.iv)(Z||(Z=N`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),C))),E=(0,d.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,r)=>{const{ownerState:o}=e;return[r.bar,r[`barColor${(0,f.Z)(o.color)}`],("indeterminate"===o.variant||"query"===o.variant)&&r.bar2Indeterminate,"buffer"===o.variant&&r.bar2Buffer]}})((({ownerState:e,theme:r})=>(0,t.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==e.variant&&{backgroundColor:"inherit"===e.color?"currentColor":r.palette[e.color].main},"inherit"===e.color&&{opacity:.3},"buffer"===e.variant&&{backgroundColor:A(r,e.color),transition:"transform .4s linear"})),(({ownerState:e})=>("indeterminate"===e.variant||"query"===e.variant)&&(0,l.iv)(S||(S=N`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),R))),D=a.forwardRef((function(e,r){const o=(0,m.Z)({props:e,name:"MuiLinearProgress"}),{className:a,color:l="primary",value:u,valueBuffer:d,variant:g="indeterminate"}=o,b=(0,n.Z)(o,y),k=(0,t.Z)({},o,{color:l,variant:g}),v=(e=>{const{classes:r,variant:o,color:n}=e,t={root:["root",`color${(0,f.Z)(n)}`,o],dashed:["dashed",`dashedColor${(0,f.Z)(n)}`],bar1:["bar",`barColor${(0,f.Z)(n)}`,("indeterminate"===o||"query"===o)&&"bar1Indeterminate","determinate"===o&&"bar1Determinate","buffer"===o&&"bar1Buffer"],bar2:["bar","buffer"!==o&&`barColor${(0,f.Z)(n)}`,"buffer"===o&&`color${(0,f.Z)(n)}`,("indeterminate"===o||"query"===o)&&"bar2Indeterminate","buffer"===o&&"bar2Buffer"]};return(0,s.Z)(t,p.E,r)})(k),Z=(0,c.Z)(),S={},N={bar1:{},bar2:{}};if("determinate"===g||"buffer"===g)if(void 0!==u){S["aria-valuenow"]=Math.round(u),S["aria-valuemin"]=0,S["aria-valuemax"]=100;let e=u-100;"rtl"===Z.direction&&(e=-e),N.bar1.transform=`translateX(${e}%)`}else 0;if("buffer"===g)if(void 0!==d){let e=(d||0)-100;"rtl"===Z.direction&&(e=-e),N.bar2.transform=`translateX(${e}%)`}else 0;return(0,h.jsxs)(B,(0,t.Z)({className:(0,i.Z)(v.root,a),ownerState:k,role:"progressbar"},S,{ref:r},b,{children:["buffer"===g?(0,h.jsx)(x,{className:v.dashed,ownerState:k}):null,(0,h.jsx)(w,{className:v.bar1,ownerState:k,style:N.bar1}),"determinate"===g?null:(0,h.jsx)(E,{className:v.bar2,ownerState:k,style:N.bar2})]}))}));r.Z=D},28962:function(e,r,o){"use strict";o.d(r,{E:function(){return t}});var n=o(34867);function t(e){return(0,n.Z)("MuiLinearProgress",e)}const a=(0,o(1588).Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);r.Z=a},15861:function(e,r,o){"use strict";o.d(r,{Z:function(){return k}});var n=o(63366),t=o(87462),a=o(67294),i=o(93680),s=o(39707),l=o(94780),u=o(90948),f=o(71657),c=o(98216),d=o(34867);function m(e){return(0,d.Z)("MuiTypography",e)}(0,o(1588).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var p=o(85893);const h=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],y=(0,u.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:o}=e;return[r.root,o.variant&&r[o.variant],"inherit"!==o.align&&r[`align${(0,c.Z)(o.align)}`],o.noWrap&&r.noWrap,o.gutterBottom&&r.gutterBottom,o.paragraph&&r.paragraph]}})((({theme:e,ownerState:r})=>(0,t.Z)({margin:0},r.variant&&e.typography[r.variant],"inherit"!==r.align&&{textAlign:r.align},r.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r.gutterBottom&&{marginBottom:"0.35em"},r.paragraph&&{marginBottom:16}))),g={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var k=a.forwardRef((function(e,r){const o=(0,f.Z)({props:e,name:"MuiTypography"}),a=(e=>b[e]||e)(o.color),u=(0,s.Z)((0,t.Z)({},o,{color:a})),{align:d="inherit",className:k,component:v,gutterBottom:Z=!1,noWrap:S=!1,paragraph:N=!1,variant:C="body1",variantMapping:R=g}=u,P=(0,n.Z)(u,h),A=(0,t.Z)({},u,{align:d,color:a,className:k,component:v,gutterBottom:Z,noWrap:S,paragraph:N,variant:C,variantMapping:R}),B=v||(N?"p":R[C]||g[C])||"span",x=(e=>{const{align:r,gutterBottom:o,noWrap:n,paragraph:t,variant:a,classes:i}=e,s={root:["root",a,"inherit"!==e.align&&`align${(0,c.Z)(r)}`,o&&"gutterBottom",n&&"noWrap",t&&"paragraph"]};return(0,l.Z)(s,m,i)})(A);return(0,p.jsx)(y,(0,t.Z)({as:B,ref:r,ownerState:A,className:(0,i.Z)(x.root,k)},P))}))},93680:function(e,r,o){"use strict";function n(e){var r,o,t="";if("string"==typeof e||"number"==typeof e)t+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(o=n(e[r]))&&(t&&(t+=" "),t+=o);else for(r in e)e[r]&&(t&&(t+=" "),t+=r);return t}r.Z=function(){for(var e,r,o=0,t="";o<arguments.length;)(e=arguments[o++])&&(r=n(e))&&(t&&(t+=" "),t+=r);return t}},2734:function(e,r,o){"use strict";o.d(r,{Z:function(){return a}});o(67294);var n=o(96682),t=o(90247);function a(){return(0,n.Z)(t.Z)}},39707:function(e,r,o){"use strict";o.d(r,{Z:function(){return l}});var n=o(87462),t=o(63366),a=o(59766),i=o(44920);const s=["sx"];function l(e){const{sx:r}=e,o=(0,t.Z)(e,s),{systemProps:l,otherProps:u}=(e=>{var r,o;const n={systemProps:{},otherProps:{}},t=null!=(r=null==e||null==(o=e.theme)?void 0:o.unstable_sxConfig)?r:i.Z;return Object.keys(e).forEach((r=>{t[r]?n.systemProps[r]=e[r]:n.otherProps[r]=e[r]})),n})(o);let f;return f=Array.isArray(r)?[l,...r]:"function"===typeof r?(...e)=>{const o=r(...e);return(0,a.P)(o)?(0,n.Z)({},l,o):l}:(0,n.Z)({},l,r),(0,n.Z)({},u,{sx:f})}},1588:function(e,r,o){"use strict";o.d(r,{Z:function(){return t}});var n=o(34867);function t(e,r,o="Mui"){const t={};return r.forEach((r=>{t[r]=(0,n.Z)(e,r,o)})),t}},7866:function(e,r,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/project/Tabs/Payment/Components/FundingBar",function(){return o(10366)}])},70476:function(e,r,o){"use strict";o.r(r),o.d(r,{AllBankDetails:function(){return t},AllProjectDetails:function(){return a}});var n=o(85893),t={HajipurBankDetails:[{key:"Company Name",info:"RAMAERA INDUSTRIES LTD."},{key:"Bank Name",info:"HDFC BANK "},{key:"Branch",info:"HAJIPUR BIHAR"},{key:"A/C No.",info:"50200078200870"},{key:"IFSC CODE ",info:"HDFC0000088"}],AgraBankDetails:[{key:"Company Name",info:"RAMAERA INDUSTRIES LTD.."},{key:"Bank Name",info:"HDFC BANK "},{key:"Branch",info:"NOIDA SECTOR 18"},{key:"A/C No.",info:"50200069506090"},{key:"IFSC CODE ",info:"HDFC0000088"}],HyderabadBankDetails:[{key:"Company Name",info:"RAMAERA INDUSTRIES LTD.."},{key:"Bank Name",info:"SBI BANK"},{key:"Branch",info:"NOIDA SECTOR 61"},{key:"A/C No.",info:"00000042628262780"},{key:"IFSC CODE ",info:"SBIN0005222"}],FundingReplacementBankDetails:[{key:"Company Name",info:"RAMAERA INDUSTRIES LTD."},{key:"Bank Name",info:"HDFC BANK "},{key:"Branch",info:"HAJIPUR BIHAR"},{key:"A/C No.",info:"50200078200870"},{key:"IFSC CODE ",info:"HDFC0000088"}]},a={HajipurProjectDetails:[2e7,1167e4,{key:"Your Enrollment Amount is ",info:"0"},{key:"Your No. of profit persons",info:"0"},{key:"Required Fund",info:"Rs 2 cr."},{key:"Required No. of Share Holder",info:"8000"},{key:"Per Share Holder Required Fund",info:"Minimum 2500 to multiple 8"},{key:"No. of share allotment",info:"Rs 200/Share"},{key:"Net Profit Sharing",info:"55%"},{key:"Total Enrolled Share",info:"8000"},{key:"Total Enrolled",info:"4668"},{key:"Till Raised Fund",info:"11670000"},{key:"Remain Funding",info:"8330000"},{key:"Upcoming Enroll",info:"3332"}],AgraProjectDetails:[33e5,100500,{key:"Your Enrollment Amount is ",info:"0"},{key:"Your No. of profit persons",info:"0"},{key:"Required Fund",info:"Rs 33 Lakh"},{key:"Required No. of Share Holder",info:"6600"},{key:"Per Share Holder Required Fund",info:"500"},{key:"No. of share allotment",info:"Rs 200/Share"},{key:"Net Profit Sharing",info:"55%"},{key:"Total Enrolled Share",info:"500"},{key:"Total Enrolled",info:"201"},{key:"Till Raised Fund",info:"100500"},{key:"Remain Funding",info:"3199500"},{key:"Upcoming Enroll",info:"6399"}],HyderabadProjectDetails:[15e6,0,{key:"Your Enrollment Amount is ",info:"0"},{key:"Your No. of profit persons",info:"0"},{key:"Required Fund",info:"Rs 1.5 Cr."},{key:"Required No. of Share Holder",info:"Announced Soon"},{key:"Minimum Funding",info:"Rs 2500 to Multiple "},{key:"Total Profit Units",info:"6000 "},{key:"Net Profit Sharing",info:"55%"},{key:"Phase 1 ",info:"6000000"},{key:"Phase 2 ",info:"7000000"},{key:"Phase 3 ",info:"2000000"}],FundingReplacementProjectDetails:[3e6,0,{key:"Your Enrollment Amount is ",info:"0"},{key:"Your No. of profit persons",info:"0"},{key:"Required Fund",info:"Rs 30 Lakh."},{key:"Required No. of Share Holder",info:"1200"},{key:"Per Share Holder Required Fund",info:"Minimum 2500 to multiple"},{key:"No. of share allotment",info:"Rs 200/Share"},{key:"Net Profit Sharing",info:"55%"},{key:"Total Enrolled Share",info:"Announced Soon"},{key:"Total Enrolled",info:"Announced Soon"},{key:"Till Raised Fund",info:"Announced Soon"},{key:"Remain Funding",info:"Announced Soon"},{key:"Upcoming Enroll",info:"Announced Soon"}]};r.default=function(){return(0,n.jsx)("div",{children:"RemoveError"})}},10366:function(e,r,o){"use strict";o.r(r);var n=o(14924),t=o(85893),a=o(90948),i=o(88441),s=o(28962),l=o(87357),u=o(15861),f=(o(67294),o(70476));r.default=function(e){var r=e.risedFundPer,o=e.projectAmount,c=e.projectTitle,d=e.title,m=(0,a.ZP)(i.Z)((function(e){var r=e.theme;return(0,n.Z)({height:20,borderRadius:10},"&.".concat(s.Z.colorPrimary),{backgroundColor:r.palette.grey["light"===r.palette.mode?200:800]})}));return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(l.Z,{sx:{flexGrow:1,my:2},children:[(0,t.jsxs)(u.Z,{variant:"h6",mb:2,textTransform:"uppercase",children:["Total Funding Completed :"," ","\u20b9 ".concat("hajipur"===d.toLowerCase()?"20000000 / \u20b920000000":o&&"".concat(o," / ").concat(f.AllProjectDetails[c][0])," ")]}),(0,t.jsx)(m,{variant:"determinate",value:r}),(0,t.jsx)(u.Z,{variant:"body2",color:"text.secondary",style:{display:"flex",position:"absolute",marginTop:"-20px",marginLeft:"50px",fontWeight:"bold",color:"white"},children:"".concat(Math.round(r),"%")})]})})}},70828:function(e,r,o){"use strict";function n(e){var r,o,t="";if("string"==typeof e||"number"==typeof e)t+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(o=n(e[r]))&&(t&&(t+=" "),t+=o);else for(r in e)e[r]&&(t&&(t+=" "),t+=r);return t}r.Z=function(){for(var e,r,o=0,t="";o<arguments.length;)(e=arguments[o++])&&(r=n(e))&&(t&&(t+=" "),t+=r);return t}}},function(e){e.O(0,[8244,9774,2888,179],(function(){return r=7866,e(e.s=r);var r}));var r=e.O();_N_E=r}]);