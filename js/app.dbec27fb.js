(function(e){function t(t){for(var a,r,u=t[0],l=t[1],s=t[2],c=0,p=[];c<u.length;c++)r=u[c],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var u=n[r];0!==o[u]&&(a=!1)}a&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function u(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"364b3a57","chunk-06a85499":"028173a0","chunk-1b69b712":"64e6cff8"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={about:1,"chunk-06a85499":1,"chunk-1b69b712":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"8a45b6f7","chunk-06a85499":"7e6d93eb","chunk-1b69b712":"368515b2"}[e]+".css",o=l.p+a,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=i[u],c=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(c===a||c===o))return t()}var p=document.getElementsByTagName("style");for(u=0;u<p.length;u++){s=p[u],c=s.getAttribute("data-href");if(c===a||c===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],d.parentNode.removeChild(d),n(i)},d.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=u(e);var p=new Error;s=function(t){c.onerror=c.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",p.name="ChunkLoadError",p.type=a,p.request=r,n[1](p)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var d=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"086a":function(e,t,n){e.exports=n.p+"img/FotoPrincipal.2ba3251a.jpg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"nav-menu",attrs:{id:"nav"}},[e._m(0),n("h2",[e._v("Miguel Betancur")]),n("router-link",{attrs:{to:"/"}},[e._v("Home")]),n("router-link",{attrs:{to:"/blog"}},[e._v("Blog")]),n("router-link",{attrs:{to:"/contact"}},[e._v("Contact")])],1),n("router-view",{staticClass:"content-view"})],1)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"my-photo"},[a("img",{attrs:{src:n("cf05"),alt:"Foto panel principal"}})])}],i=(n("5c0b"),n("2877")),u={},l=Object(i["a"])(u,r,o,!1,null,null,null),s=l.exports,c=(n("d3b7"),n("8c4f")),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("HelloWorld")],1)},d=[],m=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},f=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"landing-page"},[a("div",{staticClass:"panel-header"},[a("div",{staticClass:"panel-header__my-photo"},[a("img",{attrs:{src:n("086a"),alt:"Foto panel principal"}})]),a("div",{staticClass:"panel-header__intro-text"},[a("h1",[e._v("Miguel en la ciudad")]),e._v("Praesent sed aliquam arcu, non accumsan neque. In odio ante, vulputate ac magna vel, pharetra lobortis quam. Duis enim tortor, egestas et felis id, lobortis malesuada magna. Nunc sit amet sagittis nisi, eu semper nisl. Cras ut dictum nisl. Donec tincidunt eget orci. ")])]),a("div",{staticClass:"panel-info"},[a("div",[a("h2",[e._v("Bienvenido")]),a("p",[e._v("soy Miguel. Un joven con grandes aspiraciones en la vida, una de ellas es conocer los lugares fántasticos que posee el planeta, pero primero empezar por mi sector, el Valle de Aburra el cual tiene también ciertos atractivos que te podrían interesar, aquí te dejo algunos lugares de turismo natural, únicos y agradables para pasar un buen rato.")])]),a("div",[a("h2",[e._v("Qué hago")]),a("p",[e._v("Haribus, ommolup tatiscimus ut faceperatur alicidior sum exeri as aliqui apienis net veliquasped milibusci cuptatem estium nobit fuga. Itatur, quo volupti undebit asperspe dolo moluptatio. Icatempores aruptiosam faccata at a ipsum quidi ant omnimi, vit volutemquo explab is sam, eat provide ratatiunt. Ad quam re dolorerferro blaborrum repti as que ernamuscid etur, vernam fugite non nulpario el ipidunt, ommolum harum que voluptio et idelend.")])])])])}],v={name:"HelloWorld",props:{msg:String}},h=v,b=(n("e9e7"),Object(i["a"])(h,m,f,!1,null,"b3ef4402",null)),g=b.exports,_={name:"Home",components:{HelloWorld:g}},y=_,k=Object(i["a"])(y,p,d,!1,null,null,null),w=k.exports;a["a"].use(c["a"]);var C=[{path:"/",name:"Home",component:w},{path:"/contact",name:"Contact",component:function(){return n.e("about").then(n.bind(null,"b8fa"))}},{path:"/blog",name:"Blog",component:function(){return n.e("chunk-1b69b712").then(n.bind(null,"fd3f"))}},{path:"/post1",name:"Post1",component:function(){return n.e("chunk-06a85499").then(n.bind(null,"4d87"))}}],j=new c["a"]({routes:C}),q=j;a["a"].config.productionTip=!1,new a["a"]({router:q,render:function(e){return e(s)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"9c0c":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},d128:function(e,t,n){},e9e7:function(e,t,n){"use strict";var a=n("d128"),r=n.n(a);r.a}});
//# sourceMappingURL=app.dbec27fb.js.map