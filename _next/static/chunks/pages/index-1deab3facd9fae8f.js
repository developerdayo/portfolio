(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(2603)}])},3967:function(e,n,i){"use strict";i.d(n,{Z:function(){return _}});var t=i(5893),r=i(1664),a=i.n(r),s=i(1163),l=i(2010),o=i(7294);let d=e=>{let{selectors:n,text:i}=e,[r,a]=(0,o.useState)(!1),{theme:s,setTheme:d}=(0,l.F)(),c=(0,o.useRef)(null);if((0,o.useEffect)(()=>{var e,n;a(!0),(null==c?void 0:null===(e=c.current)||void 0===e?void 0:e.innerText)===s&&(null==c||null===(n=c.current)||void 0===n||n.setAttribute("disabled",""))},[r]),!r)return null;let u=()=>{var e,n,i;null==c||null===(e=c.current)||void 0===e||e.setAttribute("disabled",""),null==c||null===(n=c.current)||void 0===n||null===(i=n.nextElementSibling)||void 0===i||i.removeAttribute("disabled"),d("light")},p=()=>{var e,n,i;null==c||null===(e=c.current)||void 0===e||e.setAttribute("disabled",""),null==c||null===(n=c.current)||void 0===n||null===(i=n.previousElementSibling)||void 0===i||i.removeAttribute("disabled"),d("dark")};return(0,t.jsx)("button",{ref:c,onClick:()=>"light"===s?p():u(),type:"button",className:"".concat(n," theme-button"),children:i})};var c=i(9651),u=i.n(c);let p=()=>{let e=(0,s.useRouter)(),n=(n,i)=>{i.preventDefault(),setTimeout(()=>{e.push(n)},450)};return(0,t.jsx)("nav",{"aria-labelledby":"navMenuLabel",className:u().menu,children:(0,t.jsxs)("ol",{className:"/"===e.pathname?"".concat(u().home):"".concat(u().interior),children:[(0,t.jsx)("li",{children:(0,t.jsx)(a(),{onClick:e=>n("/about-me",e),href:"/about-me",children:"about me"})}),(0,t.jsx)("li",{children:(0,t.jsx)(a(),{onClick:e=>n("/resume",e),href:"/resume",children:"resume"})}),(0,t.jsx)("li",{children:(0,t.jsx)(a(),{onClick:e=>n("mailto:sarah.an.ferguson@gmail.com",e),href:"mailto:sarah.an.ferguson@gmail.com",children:"contact"})}),(0,t.jsx)("li",{className:"".concat(u()["li-absolute"]," ").concat(u()["li-absolute-top"]),children:(0,t.jsx)(a(),{href:"https://www.linkedin.com/in/sarah-ferguson-22167016/",target:"_blank",children:"linkedin"})}),(0,t.jsxs)("li",{className:u()["li-absolute"],children:[(0,t.jsx)(d,{selectors:u()["light-mode"],text:"light"})," | ",(0,t.jsx)(d,{selectors:u()["dark-mode"],text:"dark"})]})]})})};var x=i(8394),h=i.n(x),m=i(3734),b=i.n(m);function _(e){let{children:n}=e,i=(0,s.useRouter)();return(0,t.jsxs)("div",{className:b().container,children:[(0,t.jsxs)("div",{className:b().box,children:[(0,t.jsx)("h1",{className:b().title,children:(0,t.jsx)(a(),{href:"/",children:"sarah ferguson"})}),(0,t.jsx)("span",{className:h().block,children:"frontend engineer"}),(0,t.jsx)("span",{className:h().block,children:(0,t.jsx)(a(),{href:"https://github.com/developerdayo",target:"_blank",children:"github.com/developerdayo"})})]}),n,"/"===i.pathname?(0,t.jsx)("div",{className:b().box,children:(0,t.jsx)(p,{})}):(0,t.jsx)(p,{})]})}},6608:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return h}});var t=i(5893),r=i(6465),a=i.n(r),s=i(1163),l=i(7294),o=i(9435),d=i.n(o);let c=()=>{let e=(0,l.useRef)(null),n=n=>{e.current&&(e.current.style.backgroundImage="radial-gradient(circle at ".concat(n.pageX/window.innerWidth*100,"% ").concat(n.pageY/window.innerHeight*100,"%, ").concat("transparent 2%, rgba(0, 0, 0, .3) 100%"))},i=e=>{setTimeout(()=>{n(e)},100)},r=e=>{setTimeout(()=>{n(e)},100)},a=e=>{setTimeout(()=>{n(e)},100)};return(0,t.jsx)("div",{ref:e,className:d().spotlight,onMouseMove:e=>i(e),onMouseDown:e=>r(e),onMouseUp:e=>a(e)})};var u=i(6600),p=i.n(u);let x=()=>{let e=(0,s.useRouter)();if("/"===e.pathname)return(0,t.jsx)(c,{})};function h(e){let{children:n}=e;return(0,t.jsxs)(t.Fragment,{children:[n,x(),(0,t.jsx)(a(),{id:"5dfa5d198e942bf1",dynamic:[p().gray,p().offBlack],children:"#__next,main{height:100%}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}img{max-width:100%;height:auto}h1,h2,p,span,ul{position:relative;margin:0;z-index:var(--z-index-foreground-0)}ul{padding:0;list-style:none}main{position:relative}code{background:".concat(p().gray,";-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;color:").concat(p().offBlack,";padding:.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}")})]})}},2603:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return h}});var t=i(5893),r=i(6465),a=i.n(r),s=i(9008),l=i.n(s),o=i(6608),d=i(3967),c=i(8394),u=i.n(c),p=i(333),x=i.n(p);function h(){return(0,t.jsx)(o.default,{children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(l(),{children:[(0,t.jsx)("title",{className:"jsx-721e3faf03ffed91",children:"Sarah"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico",className:"jsx-721e3faf03ffed91"})]}),(0,t.jsx)("div",{className:"jsx-721e3faf03ffed91 "+"".concat(u().container," ").concat(u()["height-100"]," ").concat(x().styles),children:(0,t.jsx)("main",{className:"jsx-721e3faf03ffed91",children:(0,t.jsx)(d.Z,{})})}),(0,t.jsx)(a(),{id:"721e3faf03ffed91",children:"*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}"})]})})}},9435:function(e){e.exports={spotlight:"Cursor_spotlight__WmHtp",breathing:"Cursor_breathing__CFJrb"}},3734:function(e){e.exports={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)",xs:"480px",sm:"768px",md:"980px",lg:"1200px",darkTeal:"#35394d",gray:"#d5d4d4",lightGray:"#e9e8e8",moss:"#9dc4a5",offBlack:"#222323",white:"#fff","sp-0":"30px","sp-1":"25px","sp-2":"20px","padding-lg":"50px","padding-md":"30px","padding-md-1":"25px","padding-sm":"20px","margin-lg":"50px","margin-md-1":"25px",box:"Header_box__QExRy",link:"Header_link__LXEkx","link-after":"Header_link-after__WBMwn",container:"Header_container__3BDy3",title:"Header_title__aMYem"}},9651:function(e){e.exports={"sp-0":"30px","sp-1":"25px","sp-2":"20px","padding-lg":"50px","padding-md":"30px","padding-md-1":"25px","padding-sm":"20px","margin-lg":"50px","margin-md-1":"25px",xs:"480px",sm:"768px",md:"980px",lg:"1200px",darkTeal:"#35394d",gray:"#d5d4d4",lightGray:"#e9e8e8",moss:"#9dc4a5",offBlack:"#222323",white:"#fff",easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)",home:"Menu_home__UBCej","dark-mode":"Menu_dark-mode__hOEhu","li-absolute":"Menu_li-absolute__AbJTR","li-absolute-top":"Menu_li-absolute-top__UDkPA","light-mode":"Menu_light-mode__AxEzp",interior:"Menu_interior__hPP8A",link:"Menu_link__WLnYn","link-after":"Menu_link-after__ZPQUc",menu:"Menu_menu__VtaU0","light-dark-mode-button":"Menu_light-dark-mode-button__1CAir","light-dark-mode-icon":"Menu_light-dark-mode-icon__EeQSI"}},333:function(e){e.exports={darkTeal:"#35394d",gray:"#d5d4d4",lightGray:"#e9e8e8",moss:"#9dc4a5",offBlack:"#222323",white:"#fff",easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)","sp-0":"30px","sp-1":"25px","sp-2":"20px","padding-lg":"50px","padding-md":"30px","padding-md-1":"25px","padding-sm":"20px","margin-lg":"50px","margin-md-1":"25px",styles:"_helpers_global-font-styles_styles__h43CD",xs:"_helpers_global-font-styles_xs__7iVDD"}},8394:function(e){e.exports={xs:"480px",sm:"768px",md:"980px",lg:"1200px",darkTeal:"#35394d",gray:"#d5d4d4",lightGray:"#e9e8e8",moss:"#9dc4a5",offBlack:"#222323",white:"#fff",easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)","sp-0":"30px","sp-1":"25px","sp-2":"20px","padding-lg":"50px","padding-md":"30px","padding-md-1":"25px","padding-sm":"20px","margin-lg":"50px","margin-md-1":"25px",block:"_helpers_block__ihLcz",container:"_helpers_container__zcr3b","height-100":"_helpers_height-100__7aXkY",inline:"_helpers_inline__nqhsI","inline-block":"_helpers_inline-block__41kZh","title-xs":"_helpers_title-xs__94cgI","title-sm":"_helpers_title-sm__nByEh","title-md":"_helpers_title-md__SPjtx"}},9008:function(e,n,i){e.exports=i(2636)}},function(e){e.O(0,[664,319,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);