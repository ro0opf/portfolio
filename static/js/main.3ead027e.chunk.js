(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{23:function(n,e,t){n.exports=t(34)},34:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(19),c=t.n(i),o=t(13),u=t(9),l=t(10);function d(){var n=Object(u.a)(["\n    width:100%;\n    height:100%;\n"]);return d=function(){return n},n}function h(){var n=Object(u.a)(["\n    html {\n        width:100%;\n        height:100%;\n    }\n    body {\n        width:100%;\n        height:100%;\n    }\n\n    * {\n        user-select : none;\n        -ms-user-select : none;\n        outline : 0;\n        margin : 0;\n        padding : 0;\n        -webkit-tap-highlight-color : rgba(0,0,0,0);\n    }\n\n    div.root{\n        width:100%;\n        height:100%;\n    }\n"]);return h=function(){return n},n}var f=Object(l.a)(h()),m=l.b.div(d()),s=t(1),b=t(16);function v(){var n=Object(u.a)(["\n    width:100%;\n    height:100%;\n    overflow : hidden;\n    background-color : #161e38;\n\n    & canvas {\n        width:100%;\n        height:100%;\n    }\n"]);return v=function(){return n},n}var w=l.b.div(v());var g=function(n,e,t,r,a){var i=a,c=a,o=2*r,u=r+Math.random()*(e-o),l=r+Math.random()*(t-o),d=function(n,e){u<=r||u>=n-r?u+=i*=-1:(l<=r||l>=e-r)&&(l+=c*=-1)};return{draw:function(n,e,t){u+=i,l+=c,d(e,t),n.fillStyle="#fdd700",n.beginPath(),n.arc(u,l,r,0,2*Math.PI),n.fill()}}},E=function(n){var e=Object(r.useRef)(null),t=Object(r.useState)(document.body.clientWidth),i=Object(b.a)(t,2),c=i[0],o=i[1],u=Object(r.useState)(document.body.clientHeight),l=Object(b.a)(u,2),d=l[0],h=l[1],f=g(e,c,d,60,5),m=g(e,c,d,60,15);return Object(r.useEffect)((function(){var n=e.current,t=n.getContext("2d"),r=function(){o(document.body.clientWidth),h(document.body.clientHeight),n.height=2*d,n.width=2*c,t.scale(2,2)};r();var a=function n(){t.clearRect(0,0,c,d),f.draw(t,c,d),m.draw(t,c,d),window.requestAnimationFrame(n)};return a(),window.addEventListener("resize",r),function(){window.removeEventListener("resize",r),window.cancelAnimationFrame(a)}})),a.a.createElement("canvas",Object.assign({ref:e},n))};var p=function(){return a.a.createElement(w,null,a.a.createElement(E,null))};var j=function(){return a.a.createElement(m,null,a.a.createElement(f,null),a.a.createElement(s.c,null,a.a.createElement(s.a,{exact:!0,path:"/portfolio",component:p})))};c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(o.a,null,a.a.createElement(j,null))),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.3ead027e.chunk.js.map