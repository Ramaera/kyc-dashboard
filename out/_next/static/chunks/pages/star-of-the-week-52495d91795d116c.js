(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1460],{66242:function(e,n,r){"use strict";r.d(n,{Z:function(){return m}});var s=r(87462),t=r(63366),a=r(67294),i=r(93680),o=r(94780),c=r(90948),l=r(71657),d=r(55113),u=r(34867);function x(e){return(0,u.Z)("MuiCard",e)}(0,r(1588).Z)("MuiCard",["root"]);var f=r(85893);const p=["className","raised"],Z=(0,c.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,n)=>n.root})((()=>({overflow:"hidden"})));var m=a.forwardRef((function(e,n){const r=(0,l.Z)({props:e,name:"MuiCard"}),{className:a,raised:c=!1}=r,d=(0,t.Z)(r,p),u=(0,s.Z)({},r,{raised:c}),m=(e=>{const{classes:n}=e;return(0,o.Z)({root:["root"]},x,n)})(u);return(0,f.jsx)(Z,(0,s.Z)({className:(0,i.Z)(m.root,a),elevation:c?8:void 0,ref:n,ownerState:u},d))}))},53184:function(e,n,r){"use strict";r.d(n,{Z:function(){return v}});var s=r(87462),t=r(63366),a=r(67294),i=r(93680),o=r(94780),c=r(44063),l=r(71657),d=r(90948),u=r(34867);function x(e){return(0,u.Z)("MuiTableHead",e)}(0,r(1588).Z)("MuiTableHead",["root"]);var f=r(85893);const p=["className","component"],Z=(0,d.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,n)=>n.root})({display:"table-header-group"}),m={variant:"head"},h="thead";var v=a.forwardRef((function(e,n){const r=(0,l.Z)({props:e,name:"MuiTableHead"}),{className:a,component:d=h}=r,u=(0,t.Z)(r,p),v=(0,s.Z)({},r,{component:d}),j=(e=>{const{classes:n}=e;return(0,o.Z)({root:["root"]},x,n)})(v);return(0,f.jsx)(c.Z.Provider,{value:m,children:(0,f.jsx)(Z,(0,s.Z)({as:d,className:(0,i.Z)(j.root,a),ref:n,role:d===h?null:"rowgroup",ownerState:v},u))})}))},72605:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/star-of-the-week",function(){return r(33068)}])},43725:function(e,n,r){"use strict";r.r(n);var s=r(85893);n.default=function(e){var n=e.children;return(0,s.jsx)(s.Fragment,{children:n})}},33068:function(e,n,r){"use strict";r.r(n);var s=r(14924),t=r(85893),a=r(67294),i=r(4749),o=r(9395),c=r(43725),l=r(2734),d=r(53156),u=r(66242),x=r(87357),f=r(11057),p=r(67720),Z=r(15861),m=r(72882),h=r(7906),v=r(53184),j=r(53816),g=r(53252),y=r(295),b=r(9008),k=r.n(b),M=r(30381),w=r.n(M),D=r(37887),T=function(){var e,n=(0,l.Z)();console.log("star of the week",L,U);var r=(0,a.useState)("kyc"),o=r[0],b=r[1],M=(0,a.useState)("current"),T=M[0],N=M[1],C=(0,a.useRef)(null),_=(0,a.useState)(w()()),O=_[0],P=_[1],S=(0,a.useState)(w()()),E=S[0],R=S[1];(0,a.useEffect)((function(){var e=w()().clone().startOf("isoWeek").subtract(2,"days"),n=e.clone().add(6,"days");P(e),R(n)}),[]);var W=O.clone().subtract(14,"days"),H=E.clone().subtract(14,"days"),A=O.clone().subtract(7,"days"),X=E.clone().subtract(7,"days"),Y=O,F=E;console.log("--\x3e",Y);var z=(0,D.a)(i.tX,{variables:{EndOfTheWeek:T.includes("current")?F:T.includes("previous")?X:T.includes("beforePrevious")?H:F,startOfTheWeek:T.includes("current")?Y:T.includes("previous")?A:T.includes("beforePrevious")?W:Y}}),L=z.data,U=z.error;z.loading;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(c.default,{children:[(0,t.jsx)(k(),{children:(0,t.jsx)("title",{children:"Star Of The Week"})}),(0,t.jsx)(d.Z,{sx:{mt:2},maxWidth:!1,children:(0,t.jsxs)(u.Z,{children:[(0,t.jsxs)(x.Z,{mx:2,sx:(0,s.Z)({display:"flex",justifyContent:"flex-start"},n.breakpoints.down("sm"),{flexDirection:"column"}),children:[(0,t.jsxs)(x.Z,{my:5,mx:2,display:"flex",gap:2,sx:(0,s.Z)({},n.breakpoints.down("sm"),{display:"flex",flexDirection:"column",marginY:"10px"}),children:[" ",(0,t.jsx)(f.Z,{onClick:function(){return b("kyc")},variant:o.includes("kyc")?"contained":"outlined",sx:{textTransform:"uppercase",padding:2},children:"kyc"})]}),(0,t.jsxs)(x.Z,{my:5,mx:2,display:"flex",gap:2,sx:(0,s.Z)({},n.breakpoints.down("sm"),{display:"flex",flexDirection:"column",marginY:"10px"}),children:[" ",(0,t.jsx)(f.Z,{variant:o.includes("hajipur")?"contained":"outlined",sx:{textTransform:"uppercase",padding:2},children:"hajipur"})]}),(0,t.jsxs)(x.Z,{my:5,mx:2,display:"flex",gap:2,sx:(0,s.Z)({},n.breakpoints.down("sm"),{display:"flex",flexDirection:"column",marginY:"10px"}),children:[" ",(0,t.jsx)(f.Z,{variant:o.includes("agra")?"contained":"outlined",sx:{textTransform:"uppercase",padding:2},children:"agra"})]})]}),(0,t.jsx)(p.Z,{}),(0,t.jsx)(Z.Z,{mx:2,mt:2,fontSize:24,children:"Weeks"}),(0,t.jsxs)(x.Z,{my:2,mx:2,display:"flex",gap:2,sx:(0,s.Z)({},n.breakpoints.down("sm"),{display:"flex",flexDirection:"column"}),children:[(0,t.jsxs)(f.Z,{onClick:function(){return N("beforePrevious")},variant:T.includes("beforePrevious")?"contained":"outlined",sx:{textTransform:"uppercase",padding:2},children:[O.clone().subtract(14,"days").format("DD MMM")," ","-",E.clone().subtract(14,"days").format("DD MMM")]}),(0,t.jsxs)(f.Z,{onClick:function(){return N("previous")},variant:T.includes("previous")?"contained":"outlined",sx:{textTransform:"uppercase",padding:2},children:[O.clone().subtract(7,"days").format("DD MMM")," ","-",E.clone().subtract(7,"days").format("DD MMM")]}),(0,t.jsxs)(f.Z,{onClick:function(){return N("current")},variant:T.includes("current")?"contained":"outlined",sx:{textTransform:"uppercase",padding:2},children:[O.format("DD MMM")," -"," ",E.format("DD MMM")]})]}),(0,t.jsx)(p.Z,{}),(0,t.jsx)(m.Z,{children:(0,t.jsxs)(h.Z,{ref:C,children:[(0,t.jsx)(v.Z,{children:(0,t.jsxs)(j.Z,{children:[(0,t.jsx)(g.Z,{children:"S.No."}),(0,t.jsx)(g.Z,{align:"center",children:"Agency Code"}),(0,t.jsx)(g.Z,{align:"center",children:"Agency Owner Name"}),(0,t.jsx)(g.Z,{align:"center",children:"No. Of Approved User"})]})}),(0,t.jsx)(y.Z,{children:null===L||void 0===L||null===(e=L.starOfTheWeek)||void 0===e?void 0:e.map((function(e,n){return(0,t.jsxs)(j.Z,{style:{background:0===n?"linear-gradient(90deg, rgba(147,85,31,1) 0%, rgba(162,133,41,1) 40%, rgba(145,88,7,1) 100%)":""},children:[(0,t.jsx)(g.Z,{children:n+1}),(0,t.jsx)(g.Z,{align:"center",children:e.agencyCode}),(0,t.jsx)(g.Z,{align:"center",children:e.agencyOwnerName}),(0,t.jsx)(g.Z,{align:"center",children:e.users.length})]},n)}))})]})})]})})]})})};T.getLayout=function(e){return(0,t.jsx)(o.Z,{children:e})},n.default=T}},function(e){e.O(0,[4885,8244,9990,2817,630,4753,9964,6549,5547,456,5571,1293,893,6261,4978,9395,9774,2888,179],(function(){return n=72605,e(e.s=n);var n}));var n=e.O();_N_E=n}]);