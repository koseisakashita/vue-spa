(function(e){function t(t){for(var n,o,i=t[0],c=t[1],u=t[2],d=0,l=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);f&&f(t);while(l.length)l.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,o=1;o<r.length;o++){var i=r[o];0!==a[i]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={app:0},a={app:0},s=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-1e152699":"2c2d9436","chunk-6d54dfb4":"64e8eaa7","chunk-9870f82e":"fc19adc7"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={"chunk-1e152699":1,"chunk-6d54dfb4":1,"chunk-9870f82e":1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-1e152699":"c090b4a6","chunk-6d54dfb4":"1177bf65","chunk-9870f82e":"88f629c5"}[e]+".css",a=c.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===n||d===a))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){u=l[i],d=u.getAttribute("data-href");if(d===n||d===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete o[e],f.parentNode.removeChild(f),r(s)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=s);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=i(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(f);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,r[1](l)}a[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=d;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=r("bb71");r("da64");n["a"].use(o["a"],{iconfont:"md"});var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-toolbar",{attrs:{app:""}},[r("v-toolbar-side-icon",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.login_user,expression:"$store.state.login_user"}],on:{click:e.toggleSideMenu}}),r("v-toolbar-title",{staticClass:"headline text-uppercase"},[r("span",[e._v("マイアドレス帳")])]),r("v-spacer"),e.$store.state.login_user?r("v-toolbar-items",[r("v-btn",{on:{click:e.logout}},[e._v("ログアウト")])],1):e._e()],1),r("SideNav"),r("v-content",[r("router-view")],1)],1)},s=[],i=(r("a4d3"),r("4de4"),r("4160"),r("b0c0"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("ade3")),c=r("8aa5"),u=r.n(c),d=r("2f62"),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:e.$store.state.drawer,callback:function(t){e.$set(e.$store.state,"drawer",t)},expression:"$store.state.drawer"}},[r("v-list",{staticClass:"pa-1"},[r("v-list-tile",{attrs:{avatar:""}},[r("v-list-tile-avatar",[e.photoURL?r("img",{attrs:{src:e.photoURL}}):e._e()]),r("v-list-tile-content",[r("v-list-tile-title",[e._v(e._s(e.userName))])],1)],1)],1),r("v-list",{staticClass:"pt-0",attrs:{dense:""}},[r("v-divider"),e._l(e.items,(function(t){return r("v-list-tile",{key:t.title,attrs:{to:t.link}},[r("v-list-tile-action",[r("v-icon",[e._v(e._s(t.icon))])],1),r("v-list-tile-content",[r("v-list-tile-title",[e._v(e._s(t.title))])],1)],1)}))],2)],1)},f=[];function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b={data:function(){return{drawer:!1,items:[{title:"連絡先一覧",icon:"list",link:{name:"addresses"}}]}},computed:v({},Object(d["c"])(["userName","photoURL"]))},g=b,h=r("2877"),m=r("6544"),O=r.n(m),y=r("ce7e"),j=r("132d"),w=r("8860"),_=r("ba95"),P=r("40fe"),k=r("c954"),L=r("5d23"),A=r("f774"),S=Object(h["a"])(g,l,f,!1,null,null,null),V=S.exports;function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}O()(S,{VDivider:y["a"],VIcon:j["a"],VList:w["a"],VListTile:_["a"],VListTileAction:P["a"],VListTileAvatar:k["a"],VListTileContent:L["a"],VListTileTitle:L["b"],VNavigationDrawer:A["a"]});var T={name:"App",components:{SideNav:V},created:function(){var e=this;u.a.auth().onAuthStateChanged((function(t){t?(e.setLoginUser(t),e.fetchAddresses(),"home"===e.$router.currentRoute.name&&e.$router.push({name:"addresses"})):(e.deleteLoginUser(),e.$router.push({name:"home"}))}))},data:function(){return{}},methods:E({},Object(d["b"])(["toggleSideMenu","setLoginUser","logout","deleteLoginUser","fetchAddresses"]))},D=T,U=r("7496"),C=r("8336"),$=r("549c"),I=r("9910"),N=r("71d9"),M=r("2a7f"),R=r("706c"),B=Object(h["a"])(D,a,s,!1,null,null,null),F=B.exports;O()(B,{VApp:U["a"],VBtn:C["a"],VContent:$["a"],VSpacer:I["a"],VToolbar:N["a"],VToolbarItems:M["a"],VToolbarSideIcon:R["a"],VToolbarTitle:M["b"]});r("d3b7");var G=r("8c4f"),H=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{"text-xs-center":"","justify-center":""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("h1",[e._v("マイアドレス帳")]),r("p",[e._v("マイアドレス帳をご利用の方は、Googleアカウントでログインしてください。")])]),r("v-flex",{attrs:{xs12:"","mt-5":""}},[r("v-btn",{attrs:{color:"info"},on:{click:e.login}},[e._v("Googleアカウントでログイン")])],1)],1)],1)},J=[];function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(Object(r),!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var K={methods:q({},Object(d["b"])(["login"]))},W=K,Z=r("a523"),Q=r("0e8f"),X=r("a722"),Y=Object(h["a"])(W,H,J,!1,null,null,null),ee=Y.exports;O()(Y,{VBtn:C["a"],VContainer:Z["a"],VFlex:Q["a"],VLayout:X["a"]}),n["a"].use(G["a"]);var te=[{path:"/",name:"home",component:ee},{path:"/addresses",name:"addresses",component:function(){return Promise.all([r.e("chunk-1e152699"),r.e("chunk-9870f82e")]).then(r.bind(null,"0df7"))}},{path:"/addresses/:address_id?/edit",name:"address_edit",component:function(){return Promise.all([r.e("chunk-1e152699"),r.e("chunk-6d54dfb4")]).then(r.bind(null,"979d"))}}],re=new G["a"]({mode:"history",base:"/",routes:te}),ne=re;r("7db0"),r("c740");n["a"].use(d["a"]);var oe=new d["a"].Store({state:{login_user:null,drawer:!1,addresses:[]},mutations:{setLoginUser:function(e,t){e.login_user=t},deleteLoginUser:function(e){e.login_user=null},toggleSideMenu:function(e){e.drawer=!e.drawer},addAddress:function(e,t){var r=t.id,n=t.address;n.id=r,e.addresses.push(n)},updateAddress:function(e,t){var r=t.id,n=t.address,o=e.addresses.findIndex((function(e){return e.id===r}));e.addresses[o]=n},deleteAddress:function(e,t){var r=t.id;e.addresses=e.addresses.filter((function(e){return e.id!==r}))}},actions:{setLoginUser:function(e,t){var r=e.commit;r("setLoginUser",t)},fetchAddresses:function(e){var t=e.getters,r=e.commit;u.a.firestore().collection("users/".concat(t.uid,"/addresses")).get().then((function(e){e.forEach((function(e){r("addAddress",{id:e.id,address:e.data()})}))}))},deleteLoginUser:function(e){var t=e.commit;t("deleteLoginUser")},logout:function(){u.a.auth().signOut()},login:function(){var e=new u.a.auth.GoogleAuthProvider;u.a.auth().signInWithRedirect(e)},toggleSideMenu:function(e){var t=e.commit;t("toggleSideMenu")},addAddress:function(e,t){var r=e.getters,n=e.commit;r.uid&&u.a.firestore().collection("users/".concat(r.uid,"/addresses")).add(t).then((function(e){n("addAddress",{id:e.id,address:t})}))},updateAddress:function(e,t){var r=e.getters,n=e.commit,o=t.id,a=t.address;r.uid&&u.a.firestore().collection("users/".concat(r.uid,"/addresses")).doc(o).update(a).then((function(){return n("updateAddress",{id:o,address:a})}))},deleteAddress:function(e,t){var r=e.getters,n=e.commit,o=t.id;r.uid&&u.a.firestore().collection("users/".concat(r.uid,"/addresses")).doc(o).delete().then((function(){return n("deleteAddress",{id:o})}))}},getters:{userName:function(e){return e.login_user?e.login_user.displayName:""},photoURL:function(e){return e.login_user?e.login_user.photoURL:""},uid:function(e){return e.login_user?e.login_user.uid:null},getAddressById:function(e){return function(t){return e.addresses.find((function(e){return e.id===t}))}}},modules:{}});n["a"].config.productionTip=!1;var ae={apiKey:"AIzaSyCjmpDaped4uLRLnhRcVFlrIzJH2H_8j18",authDomain:"vue-spa-b3848.firebaseapp.com",databaseURL:"https://vue-spa-b3848.firebaseio.com",projectId:"vue-spa-b3848",storageBucket:"vue-spa-b3848.appspot.com",messagingSenderId:"103794940236",appId:"1:103794940236:web:b1d496ed6d16a8adc997e9",measurementId:"G-5F1MEL3HJZ"};u.a.initializeApp(ae),u.a.analytics(),new n["a"]({router:ne,store:oe,render:function(e){return e(F)}}).$mount("#app")}});
//# sourceMappingURL=app.e566d4eb.js.map