!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("regenerator-runtime/runtime.js")},function(e,t,n){"use strict";n.r(t);n(7);var r=n(3),a=n.n(r),o=n(2),c=n.n(o),i=n(0),u=n.n(i),l=n(4),s=n.n(l),f=n(5),m=function(e){var t=e.children,n=e.scripts;return u.a.createElement("html",null,u.a.createElement("head",null,u.a.createElement("meta",{charSet:"UTF-8"}),u.a.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,maximum-scale=1,initial-scale=1"}),u.a.createElement("meta",{httpEquiv:"X-UA-Compatible",content:"ie=edge"}),u.a.createElement("title",null,"React Starter Pack")),u.a.createElement("body",null,u.a.createElement("div",{id:"root"},t),n.map((function(e,t){return u.a.createElement("script",{src:e,key:t})}))))},p=n(1),d=function(){return i.createElement("div",null,"Home")},v=n.p+"assets/96ecc29a8b636b8f19d7708f31b0a6d0.png",h=n(6),E=n.n(h);function x(e,t,n,r,a,o,c){try{var i=e[o](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}var y=function(){var e=function(){var e,t=(e=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E()({method:"get",url:"/api/products"});case 2:t=e.sent,console.log("res",t);case 4:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){x(o,r,a,c,i,"next",e)}function i(e){x(o,r,a,c,i,"throw",e)}c(void 0)}))});return function(){return t.apply(this,arguments)}}();return i.useEffect((function(){e()}),[]),i.createElement("div",{className:"wrapper"},i.createElement("img",{src:v,alt:""}),i.createElement("h1",{className:"test"},"This is react-stub"))},b=[{link:"/",title:"Home",component:d},{link:"/contacts",title:"Contacts",component:function(){return i.createElement("div",null,i.createElement(y,null))}}],g=function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"menu"},b.map((function(e,t){return u.a.createElement(p.Link,{to:e.link,key:t},e.title)}))),u.a.createElement(p.Switch,null,b.map((function(e,t){return u.a.createElement(p.Route,{exact:!0,path:e.link,component:e.component,key:t})}))))};function w(e,t,n,r,a,o,c){try{var i=e[o](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}var k=c()(),S=[];a.a.readdirSync("./build/assets").forEach((function(e){"js"===e.split(".").pop()&&S.push("/assets/"+e)})),k.use("/assets",c.a.static("./build/assets")),k.get("/api/products",(function(e,t){t.send("kek123")})),k.get("*",function(){var e,t=(e=regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.a.renderToNodeStream(u.a.createElement(m,{scripts:S},u.a.createElement(f.StaticRouter,{location:t.url,context:{}},u.a.createElement(g,null)))).pipe(n);case 1:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){w(o,r,a,c,i,"next",e)}function i(e){w(o,r,a,c,i,"throw",e)}c(void 0)}))});return function(e,n){return t.apply(this,arguments)}}()),k.listen(3001,(function(){return console.log("Listening on port ".concat(3001))}))}]);