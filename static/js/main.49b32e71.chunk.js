(this["webpackJsonplab-projects"]=this["webpackJsonplab-projects"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c.n(n),s=c(7),a=c.n(s),i=(c(15),c(3)),l=c(10),o=(c(16),c(8)),j=c(1);function b(e){return Object(j.jsx)("span",{className:"tag me-1 p-1",children:e.name})}function m(e){var t=e.style,c=void 0===t?"btn-primary":t;return Object(j.jsx)("a",{rel:"noreferrer",target:"_blank",href:e.href,className:"btn btn-sm m-1 ".concat(c),children:e.name})}function d(e){return""===e.gitRepo?Object(j.jsx)(j.Fragment,{}):Object(j.jsxs)("a",{rel:"noreferrer",target:"_blank",href:"https://github.com/".concat(e.gitRepo),className:"extra-head",children:[Object(j.jsx)(o.a,{className:"me-1",size:20}),Object(j.jsx)("img",{className:"me-1",src:"https://img.shields.io/github/stars/".concat(e.gitRepo,"?color=green"),alt:"",srcset:""})]})}function u(e){console.log(Object.keys(e));var t=e.tags,c=void 0===t?[]:t,n=e.links,r=void 0===n?[]:n,s=e.authors,a=void 0===s?[]:s,l=e.image,o=void 0===l?"/assets/images/lab-logo.png":l,u=e.gitRepo,h=void 0===u?"":u;return"/"===o[0]&&(o=""+o),Object(j.jsxs)("div",{id:"ProjCard",className:"card",style:{height:"100%"},children:[Object(j.jsxs)("div",{className:"main-img-container",children:[Object(j.jsx)(d,{gitRepo:h}),Object(j.jsx)("img",{src:o,className:"main-img",alt:"..."})]}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("hr",{className:"mb-2"}),Object(j.jsx)("h5",{className:"card-title",children:e.fullName}),c.map((function(e,t){return Object(j.jsx)(b,{name:e},t)})),Object(j.jsx)("p",{className:"card-text mt-1 text-block-config",children:e.context}),Object(j.jsx)("div",{className:"card-buttons",children:r.map((function(e,t){return Object(j.jsx)(m,Object(i.a)({},e),t)}))})]}),Object(j.jsx)("div",{className:"card-footer",children:Object(j.jsx)("div",{className:"w-100 text-center",children:a.map((function(e,t){return Object(j.jsx)("a",{className:"me-1 author-link",href:e.link,children:e.name},t)}))})})]})}var h=c(5),x=c.n(h),O=c(9),f=c(19);function p(){return(p=Object(O.a)(x.a.mark((function e(t){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(""+t).then((function(e){return e.text()})).then((function(e){return f.load(e)})).catch((function(){alert("yaml file parse err!")}));case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return Object(j.jsx)("nav",{className:"navbar navbar-light bg-light mb-3",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)("a",{href:"https://nlpnchu.org",target:"_blank",rel:"noreferrer",className:"navbar-brand mb-0 h1 ps-3",children:"\u4e2d\u8208\u5927\u5b78\u81ea\u7136\u8a9e\u8a00\u8655\u7406\u5be6\u9a57\u5ba4"}),Object(j.jsx)("span",{className:"float-end pe-3",children:"Projects"})]})})}var v=c(6);function N(){return Object(j.jsxs)("footer",{id:"Footer",className:"text-center p-2",children:[Object(j.jsx)(v.a,{})," \u4e2d\u8208\u5927\u5b78 \u7406\u5b78\u5927\u6a13-721\u5ba4 ",Object(j.jsx)("br",{}),Object(j.jsx)(v.b,{})," 04-22840497 #721",Object(j.jsx)("br",{}),"Copyright \xa9 2021 NCHU NLP Lab. All rights reserved."]})}var y=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){(function(e){return p.apply(this,arguments)})("/assets/yamls/project.yaml").then((function(e){r(e)}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(g,{}),Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row",children:c.map((function(e,t){return console.log(e),Object(j.jsx)("div",{className:"col-md-4 col-xl-3 col-12 mt-3",children:Object(j.jsx)(u,Object(i.a)({},e))},t)}))})})]}),Object(j.jsx)(N,{})]})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,21)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))};a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),k()}},[[20,1,2]]]);
//# sourceMappingURL=main.49b32e71.chunk.js.map