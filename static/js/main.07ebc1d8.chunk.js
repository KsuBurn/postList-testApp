(this.webpackJsonppostlist=this.webpackJsonppostlist||[]).push([[0],{10:function(e,t,n){e.exports={userName:"PostItem_userName__1AM1n",likeWrap:"PostItem_likeWrap__1aMA2"}},17:function(e,t,n){e.exports=n.p+"static/media/like.d487f420.svg"},18:function(e,t,n){e.exports=n.p+"static/media/like-active.e4d97315.svg"},19:function(e,t,n){e.exports={wrap:"App_wrap__2Cz5K"}},21:function(e,t,n){e.exports=n(29)},29:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(13),o=n.n(c),u=n(4),i=n.n(u),s=n(6),l=n(3),p=n(1),f=n(2);function m(){var e=Object(p.a)(["\n    font-size: 15px;\n    padding: 5px;\n    margin: 10px;\n    border: solid grey 1px;\n    border-radius: 3px;\n    width: 70%;\n    ::placeholder;\n  "]);return m=function(){return e},e}var d=f.a.input(m());function v(){var e=Object(p.a)(["\n    font-size: 18px;\n    color: #267eca;\n    margin: 0;\n\n  "]);return v=function(){return e},e}var b=f.a.p(v());function h(){var e=Object(p.a)(["\n    font-size: 18px;\n\n  "]);return h=function(){return e},e}var j=f.a.h2(h());function x(){var e=Object(p.a)(["\n    font-size: 18px;\n    color: #267eca;\n    margin: 0;\n\n  "]);return x=function(){return e},e}var O=f.a.p(x());function E(){var e=Object(p.a)(["\n    border: solid #ececec 1px;\n    border-radius: 10px;\n    background: #fff;\n    padding: 10px;\n    margin-bottom: 20px;\n  "]);return E=function(){return e},e}var w=f.a.div(E()),g=n(10),k=n.n(g);function y(){var e=Object(p.a)(["\n    cursor: pointer;\n    width: 20px;\n    height: 20px;\n  "]);return y=function(){return e},e}var _=f.a.img(y()),S=n(17),N=n.n(S),z=n(18),C=n.n(z),I=function(e){var t=e.body,n=e.title,c=e.name,o=e.username,u=Object(r.useState)(!1),i=Object(l.a)(u,2),s=i[0],p=i[1];return a.a.createElement(w,null,a.a.createElement("div",{className:k.a.userName},a.a.createElement(O,null,c),a.a.createElement("span",null,"\u2002aka\u2002"),a.a.createElement(b,null,o)),a.a.createElement(j,null,n),a.a.createElement("p",null,t),a.a.createElement("div",{className:k.a.likeWrap},a.a.createElement(_,{src:s?C.a:N.a,onClick:function(){p(!s)}})))},W=function(e){var t=e.posts,n=e.postCount;return a.a.createElement("div",null,t.slice(0,n).map((function(e,t){return a.a.createElement("div",{key:t},a.a.createElement(I,{body:e.body,title:e.title,name:e.name,username:e.username}))})))},M=n(20),A=function(){var e=Object(s.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=n(19),H=n.n(B),J=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)([]),u=Object(l.a)(o,2),p=u[0],f=u[1],m=Object(r.useState)(""),v=Object(l.a)(m,2),b=v[0],h=v[1],j=function(e,t){var n=Object(r.useState)([]),a=Object(l.a)(n,2),c=a[0],o=a[1];return Object(r.useEffect)((function(){e.map((function(e){t.map((function(t){if(e.userId===t.id){var n={body:e.body,title:e.title,name:t.name,username:t.username};o((function(e){return[].concat(Object(M.a)(e),[n])}))}}))}))}),[e,t]),c}(n,p),x=Object(r.useState)([]),O=Object(l.a)(x,2),E=O[0],w=O[1],g=Object(r.useState)(10),k=Object(l.a)(g,2),y=k[0],_=k[1];Object(r.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A("https://jsonplaceholder.typicode.com/posts");case 2:return t=e.sent,e.next=5,A("https://jsonplaceholder.typicode.com/users");case 5:n=e.sent,c(t),f(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.useEffect)((function(){w(j)}),[j]),Object(r.useEffect)((function(){window.addEventListener("scroll",(function(e){var t=document.getElementById("root");null!=t&&Math.round(t.scrollHeight-window.scrollY)===window.innerHeight&&_((function(e){return e+10}))}))}),[]);return a.a.createElement("div",{className:H.a.wrap},a.a.createElement(d,{placeholder:"\u041f\u043e\u0438\u0441\u043a",type:"text",value:b,onChange:function(e){var t=e.target.value;h(t);var n=function(e,t){var n=new RegExp(e,"i");return t.filter((function(t){return!e||n.test(t.title)}))}(t,j);w(n)}}),a.a.createElement(W,{posts:E,postCount:y}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.07ebc1d8.chunk.js.map