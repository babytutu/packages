(function(t){function e(e){for(var n,i,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);h&&h(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,i=1;i<a.length;i++){var s=a[i];0!==o[s]&&(n=!1)}n&&(r.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},i={app:0},o={app:0},r=[];function s(t){return c.p+"static/js/"+({}[t]||t)+"."+{"chunk-217829c2":"f5892e6c","chunk-2d0c5b89":"6fefd677","chunk-2d0cf4c6":"5ac7fa54","chunk-2d0e9260":"85ce4f7b","chunk-2d22fcd3":"3ca7d6b8","chunk-461ba498":"842b47b4"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"chunk-217829c2":1,"chunk-461ba498":1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=new Promise((function(e,a){for(var n="static/css/"+({}[t]||t)+"."+{"chunk-217829c2":"dfac291b","chunk-2d0c5b89":"31d6cfe0","chunk-2d0cf4c6":"31d6cfe0","chunk-2d0e9260":"31d6cfe0","chunk-2d22fcd3":"31d6cfe0","chunk-461ba498":"571a41a3"}[t]+".css",o=c.p+n,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var u=r[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===n||l===o)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var n=e&&e.target&&e.target.src||o,r=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete i[t],h.parentNode.removeChild(h),a(r)},h.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){i[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(h);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",d.name="ChunkLoadError",d.type=n,d.request=i,a[1](d)}o[t]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var h=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0a7a":function(t,e,a){"use strict";(function(t){a("d81d"),a("99af"),a("b0c0");e["a"]={install:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{prefix:"logger"},n="undefined"===typeof t,i=["info","log","warn","error","debug"],o=function(t){return console[t]};i.map((function(t){e.prototype[t]=function(){if(n){for(var e="[".concat(a.prefix,"::").concat(t,"]").toUpperCase(),i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];var c=r[0];if(c&&c._isVue){var u=c.$options._parentVnode?c.$options._parentVnode.componentOptions.Ctor.options.__file:"(unkonwn file name)",l=c.$route?c.$route.name:"(unkonwn route name)";r.shift(),r.push("[FILE:".concat(u,"] [ROUTE:").concat(l,"]"))}o(t).apply(void 0,[e].concat(r))}}}))}}}).call(this,a("4362"))},"22ca":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container card-body"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("ul",{staticClass:"nav nav-tabs card-header-tabs"},t._l(t.menu,(function(e){return a("li",{key:e.name,staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",class:{active:e.name===t.$route.name},attrs:{to:{path:e.path}}},[t._v(t._s(e.name))])],1)})),0)]),a("div",{staticClass:"card-body"},[a("router-view")],1),t.$route.meta.codepen?a("div",{staticClass:"card-footer text-end"},[a("a",{staticClass:"btn btn-primary",attrs:{href:"https://codepen.io/babytutu/embed/"+t.$route.meta.codepen,target:"_blank"}},[t._v("在codepen中体验")])]):t._e()])])},o=[],r=(a("d3b7"),a("3ca3"),a("ddb0"),[{path:"/",name:"qrcode",meta:{codepen:"LBYmyE"},component:function(){return a.e("chunk-2d22fcd3").then(a.bind(null,"ea23"))}},{path:"/barcode",name:"barcode",component:function(){return a.e("chunk-2d0c5b89").then(a.bind(null,"3fff"))},meta:{codepen:"EpxdLW"}},{path:"/highcharts",name:"highcharts",component:function(){return a.e("chunk-2d0e9260").then(a.bind(null,"8bff"))},meta:{codepen:"NBWBRx"}},{path:"/swiper",name:"swiper",component:function(){return a.e("chunk-461ba498").then(a.bind(null,"11f6"))},meta:{codepen:"GBNYoX"}},{path:"/turnplate",name:"turnplate",component:function(){return a.e("chunk-217829c2").then(a.bind(null,"3620"))},meta:{codepen:"rZaRyq"}},{path:"/player",name:"player",component:function(){return a.e("chunk-2d0cf4c6").then(a.bind(null,"62b6"))},meta:{codepen:"VwrpQZm"}}]),s=r,c={data:function(){return{menu:s}}},u=c,l=(a("7faf"),a("2877")),d=Object(l["a"])(u,i,o,!1,null,null,null),h=d.exports,p=a("8c4f");n["a"].use(p["a"]);var f=new p["a"]({base:"",routes:s}),m=f,v=a("5530"),g=(a("a9e3"),a("6aaa")),y=a.n(g),b={name:"qrcode",props:{value:{type:[Number,String],default:""},type:{type:String,default:"canvas"},options:Object},render:function(t){return t(this.type,this.$slots.default)},mounted:function(){this.createQr()},watch:{value:function(){this.createQr()},options:function(){this.createQr()}},methods:{createQr:function(){new y.a(Object(v["a"])({element:this.$el,value:String(this.value)},this.options))}}},w=a("67d0"),k=a.n(w),x={name:"barcode",props:{value:{type:[Number,String],default:" "},type:{type:String,default:"canvas"},options:Object},mounted:function(){this.createBarcode()},render:function(t){return t(this.type,this.$slots.default)},methods:{createBarcode:function(){k()(this.$el,this.value||" ",this.options)}},watch:{value:function(){this.createBarcode()},options:function(){this.createBarcode()}}},q=a("0a7a"),M=a("c524"),S=a.n(M),C={name:"highcharts",props:{options:Object},render:function(t){return t("div",this.$slots.default)},mounted:function(){this.createHighcharts()},watch:{options:function(){this.createHighcharts()}},methods:{createHighcharts:function(){S.a.chart(this.$el,this.options)}}},O=(a("b0c0"),a("fa96")),_={name:"swiper",props:{options:{type:Object},height:[Number,String]},data:function(){return{mySwiper:""}},mounted:function(){this.creatSwiper()},watch:{options:function(){this.creatSwiper()}},methods:{creatSwiper:function(){this.mySwiper=new O["a"](this.$el,this.options)}},render:function(t){return t("div",{class:"swiper-container",style:{height:"".concat(this.height,"px")}},[t("div",{class:"swiper-wrapper"},this.$slots.default),this.$slots.pagination,this.$slots.next,this.$slots.prev])}},L={name:"swiper-slide",render:function(t){return t("div",{class:"swiper-slide"},this.$slots.default)}},T={install:function(t){t.component(_.name,_),t.component(L.name,L)},Swiper:O["a"],swiper:_,swiperSlide:L},B=(a("cb29"),a("99af"),a("ac1f"),a("1276"),a("32fb")),R=a.n(B),$={name:"turnplate",render:function(t){return t("div",{class:"turnplate"},[t("canvas",{class:"item",attrs:{id:"wheelcanvas",width:"".concat(2*this.turnplate.radius,"px"),height:"".concat(2*this.turnplate.radius,"px")}}),t("div",{class:["pointer",{disabled:this.disabled}],on:{click:this.doRotate}},this.$slots.default)])},props:{gift:{type:Array,default:function(){return[]}},colors:{type:Array,default:function(){return["#EAE4FD","#FFFFFF"]}},getResult:{type:Function,default:function(){}},showGift:{type:Function,default:function(){}},turnplate:{type:Object,default:function(){return{radius:300,outsideRadius:270,textRadius:220,insideRadius:0}}},disabled:{type:Boolean,default:!1},rotate:{type:Boolean,default:!1},fontColor:{type:Array,default:function(){return["#EF1C85","#9D5BFB","#A8A8A8"]}}},mounted:function(){this.drawRouletteWheel(this.gift)},data:function(){return{img:[],rotateable:!1}},watch:{gift:{handler:function(t){this.drawRouletteWheel(t)},deep:!0}},methods:{drawRouletteWheel:function(t){if(t.length){var e=document.getElementById("wheelcanvas");if(e.getContext){var a=Math.PI/(t.length/2),n=e.getContext("2d");n.width=2*this.turnplate.radius,n.height=2*this.turnplate.radius,n.clearRect(0,0,this.turnplate.radius,this.turnplate.radius),n.strokeStyle="#fff",n.font="24px Microsoft YaHei";for(var i=0;i<t.length;i++){var o=i*a;n.fillStyle=this.colors[i%2],n.beginPath(),n.arc(this.turnplate.radius,this.turnplate.radius,this.turnplate.outsideRadius,o,o+a,!1),n.arc(this.turnplate.radius,this.turnplate.radius,this.turnplate.insideRadius,o+a,o,!0),n.stroke(),n.fill(),n.save(),n.fillStyle=this.fontColor[t[i].type-1]||this.fontColor[2];var r=t[i].name||"",s=t[i].content||"";n.translate(this.turnplate.radius+Math.cos(o+a/2)*this.turnplate.textRadius,this.turnplate.radius+Math.sin(o+a/2)*this.turnplate.textRadius),n.rotate(o+a/2+Math.PI/2);var c=7,u=28;if(r.length>c){r="".concat(r.substring(0,c),"||").concat(r.substring(c));for(var l=r.split("||"),d=0;d<l.length;d++)n.fillText(l[d],-n.measureText(l[d]).width/2,d*u)}else n.fillText(r,-n.measureText(r).width/2,0);n.fillText(s,-n.measureText(s).width/2,50),n.restore()}}}},rotateFn:function(t){var e=this,a=t*(360/this.gift.length)-360/(2*this.gift.length);a=a<270?270-a:360-a+270;var n=document.getElementById("wheelcanvas"),i=a+1800;R()(n,{rotateZ:[i,0]},{duration:3e3,complete:function(){e.rotateable=!e.rotateable,e.showGift()}})},doRotate:function(){var t=this;this.rotateable||this.disabled||this.getResult().then((function(e){t.rotateable=!t.rotateable,t.rotateFn(e)}))}}},E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"audio-player-container",class:{mini:t.mini},style:t.mini?t.floatStyleObj:"",on:{mousedown:t.onDragBegin}},[a("div",{staticClass:"audio-player-warper"},[a("div",{staticClass:"audio-player-control-btn"},[t.error?a("svg",{staticClass:"audio-player-control-icon",attrs:{viewBox:"0 0 1024 1024"}},[a("path",{attrs:{d:"M517.08411984 479.11475483L301.90637831 263.93753776a26.85237631 26.85237631 0 1 0-37.98667221 37.95153335l215.17669262 215.19504873L263.91970607 732.27864411a26.85237631 26.85237631 0 1 0 37.96936504 37.96884057l215.19504878-215.17669264 215.19504866 215.17669264a26.85237631 26.85237631 0 1 0 37.9688406-37.95100889l-215.17669262-215.2123559 215.17669262-215.1772171a26.85237631 26.85237631 0 1 0-37.9688406-37.96936505L517.10195147 479.11475483z"}})]):[t.playing?a("svg",{staticClass:"audio-player-control-icon",attrs:{viewBox:"0 0 17 32"},on:{click:t.togglePlay}},[a("path",{attrs:{d:"M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"}})]):a("svg",{staticClass:"audio-player-control-icon",attrs:{viewBox:"-9 0 32 32"},on:{click:t.togglePlay}},[a("path",{attrs:{d:"M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"}})])]],2),t.mini?a("div",{staticClass:"audio-player-mini"},[a("svg",{attrs:{viewBox:"0 0 1024 1024"},on:{click:t.closeWin}},[a("path",{attrs:{d:"M517.08411984 479.11475483L301.90637831 263.93753776a26.85237631 26.85237631 0 1 0-37.98667221 37.95153335l215.17669262 215.19504873L263.91970607 732.27864411a26.85237631 26.85237631 0 1 0 37.96936504 37.96884057l215.19504878-215.17669264 215.19504866 215.17669264a26.85237631 26.85237631 0 1 0 37.9688406-37.95100889l-215.17669262-215.2123559 215.17669262-215.1772171a26.85237631 26.85237631 0 1 0-37.9688406-37.96936505L517.10195147 479.11475483z"}})]),a("svg",{attrs:{viewBox:"0 0 1024 1024"},on:{click:function(e){return t.changeStatus(!1)}}},[a("path",{attrs:{d:"M616.0602684 468.78768158L771.30480958 468.78768158c35.3562355 0 64.11552429-28.75928879 64.11552429-64.11552429l-1e-8-164.95456696c0-35.3562355-28.75928879-64.11552429-64.11552429-64.11552429l-155.24454117 0c-35.3562355 0-64.11552429 28.75928879-64.11552429 64.11552429L551.94474411 404.67215728c0 35.34851076 28.75928879 64.11552429 64.11552429 64.11552431z m2.31742859-226.75266265L768.98738098 242.03501893 768.98738098 402.35472869l-150.60968399 0 0-160.31970976z","p-id":"3010"}}),a("path",{attrs:{d:"M299.04376221 848.39793396L724.95623779 848.39793396c60.90974808 0 110.46409607-49.55434799 110.46409607-110.46409607l0-202.85997391c0-18.34630967-14.87016678-33.21647644-33.21647644-33.21647644s-33.21647644 14.87016678-33.21647644 33.21647644L768.98738098 737.93383789c0 24.27892686-19.75221634 44.03114318-44.03114319 44.03114318l-425.91247558 0c-24.27892686 0-44.03114318-19.75221634-44.03114319-44.03114318l0-451.86767578c0-24.27892686 19.75221634-44.03114318 44.03114319-44.03114318L488.67121887 242.03501893c18.34630967 0 33.21647644-14.87016678 33.21647644-33.21647645s-14.87016678-33.21647644-33.21647643-33.21647644l-189.62745667 0c-60.90974808 0-110.46409607 49.55434799-110.46409607 110.46409607L188.57966614 737.93383789c0 60.90974808 49.55434799 110.46409607 110.46409607 110.46409607z","p-id":"3011"}}),a("path",{attrs:{d:"M490.86505127 497.09893418L370.25061797 617.72109223l0-98.97737504c0-18.34630967-14.87016678-33.21647644-33.21647643-33.21647644s-33.21647644 14.87016678-33.21647643 33.21647644L303.81766511 660.52399827c0 19.02608872 8.34274292 36.13643647 21.55208586 47.89352416 0.19311905 0.20084381 0.37078857 0.40168762 0.5716324 0.59480667a33.25355529 33.25355529 0 0 0 8.51268767 6.16436004 63.73314858 63.73314858 0 0 0 33.47911836 9.46283341L500.00344467 724.63952255c18.34630967 0 33.21647644-14.87016678 33.21647644-33.21647644s-14.87016678-33.21647644-33.21647644-33.21647643l-76.28974914 0L537.83932876 544.08093642c12.96987533-12.96987533 12.96987533-34.00440217 0-46.97427749-6.48880005-6.48880005-14.98603821-9.72547531-23.49100113-9.72547531s-16.99447632 3.23667527-23.48327636 9.71775056z","p-id":"3012"}})])]):t._e(),t.mini?t._e():a("div",{staticClass:"audio-player-warper-content"},[a("div",{staticClass:"audio-player-title"},[a("div",[t._v(t._s(t.value.name))]),a("div",{staticClass:"audio-player-title-btn"},[t.error?t._e():[a("span",[t._v("倍速")]),t._l(t.rates,(function(e){return a("span",{key:e,class:{"rate-active":t.playbackRate===e},on:{click:function(a){return t.changeRate(e)}}},[t._v(t._s(e))])}))],t.miniable?a("svg",{attrs:{viewBox:"0 0 1024 1024",width:"20",height:"20"},on:{click:function(e){return t.changeStatus(!0)}}},[a("path",{attrs:{d:"M18.285714 201.142857c0-100.571429 82.285714-182.857143 182.857143-182.857143h621.714286c100.571429 0 182.857143 82.285714 182.857143 182.857143v621.714286c0 100.571429-82.285714 182.857143-182.857143 182.857143h-621.714286a183.369143 183.369143 0 0 1-182.857143-182.857143z m694.857143-109.714286v109.714286c0 60.342857 49.371429 109.714286 109.714286 109.714286h109.714286v-109.714286c0-60.342857-49.371429-109.714286-109.714286-109.714286h-109.714286z m-621.714286 109.714286v621.714286c0 60.342857 49.371429 109.714286 109.714286 109.714286h621.714286c60.342857 0 109.714286-49.371429 109.714286-109.714286v-438.857143h-109.714286a183.369143 183.369143 0 0 1-182.857143-182.857143v-109.714286h-438.857143c-60.342857 0-109.714286 49.371429-109.714286 109.714286z m129.828572 601.6c-14.628571-14.628571-14.628571-36.571429 0-51.2L479.085714 493.714286h-131.657143a36.644571 36.644571 0 0 1-36.571428-36.571429c0-20.114286 16.457143-36.571429 36.571428-36.571428h219.428572c9.142857 0 18.285714 3.657143 25.6 10.971428 7.314286 5.485714 10.971429 14.628571 10.971428 25.6v219.428572c0 20.114286-16.457143 36.571429-36.571428 36.571428a36.644571 36.644571 0 0 1-36.571429-36.571428v-131.657143l-257.828571 257.828571c-14.628571 14.628571-36.571429 14.628571-51.2 0z","p-id":"5623"}})]):t._e()],2)]),t.error?a("div",{staticClass:"audio-player-error"},[t._v(" 文件加载失败 ")]):a("div",{staticClass:"audio-player-control"},[a("div",{staticClass:"audio-player-control-progress"},[a("slider",{on:{change:t.changeTime},model:{value:t.rate,callback:function(e){t.rate=e},expression:"rate"}})],1),a("div",{staticClass:"audio-player-control-time"},[t._v(" "+t._s(t.currentTime)+" / "+t._s(t.duration)+" ")]),t.isMuted?a("svg",{staticClass:"audio-player-control-icon volume",attrs:{viewBox:"0 0 32 32"},on:{click:t.toggleMute}},[a("path",{attrs:{d:"M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"}})]):1==t.volume?a("svg",{staticClass:"audio-player-control-icon volume",attrs:{viewBox:"0 0 32 32"},on:{click:t.toggleMute}},[a("path",{attrs:{d:"M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056zM29.728 16q0 4.096-2.272 7.552t-6.048 5.056q-0.224 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.64 0.704-1.056 0.128-0.064 0.384-0.192t0.416-0.192q0.8-0.448 1.44-0.896 2.208-1.632 3.456-4.064t1.216-5.152-1.216-5.152-3.456-4.064q-0.64-0.448-1.44-0.896-0.128-0.096-0.416-0.192t-0.384-0.192q-0.704-0.416-0.704-1.056 0-0.448 0.32-0.8t0.832-0.352q0.224 0 0.448 0.096 3.776 1.632 6.048 5.056t2.272 7.552z"}})]):a("svg",{staticClass:"audio-player-control-icon volume",attrs:{viewBox:"0 0 32 32"},on:{click:t.toggleMute}},[a("path",{attrs:{d:"M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"}})]),a("div",{staticClass:"audio-player-volume-slider"},[a("slider",{on:{change:t.changeVolume},model:{value:t.volume,callback:function(e){t.volume=e},expression:"volume"}})],1)])])]),!t.mini&&t.list&&t.list.length>1?a("div",{staticClass:"audio-player-list"},[a("ul",t._l(t.list,(function(e,n){return a("li",{key:n,class:{active:e===t.value},on:{click:function(a){return t.changeMedia(e)}}},[t._v(" "+t._s(e.name)+" ")])})),0)]):t._e()])},j=[],P=a("d4ec"),W=a("bee2"),D=(a("25f0"),function(){function t(e){var a=e.src,n=e.onloadedmetadata,i=e.ontimeupdate,o=e.onerror,r=e.isDebugger,s=void 0!==r&&r;Object(P["a"])(this,t),this.src=a,this.onloadedmetadata=n,this.ontimeupdate=i,this.onerror=o,this.isDebugger=s,this.audio=null,this.status="pause",this.muted=!1,this.timer="",this.playbackRate=1}return Object(W["a"])(t,[{key:"log",value:function(){var t;this.isDebugger&&(t=console).log.apply(t,arguments)}},{key:"initPlayer",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.src,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.audio=new Audio(e),this.audio.volume=a,this.changeRate(this.playbackRate),this.audio.onloadedmetadata=function(e){t.log("onloadedmetadata",e.type),t.onloadedmetadata(e.target.duration)},this.audio.ontimeupdate=function(e){t.log("ontimeupdate",e.target.currentTime),t.ontimeupdate(e.target.currentTime)},this.audio.onerror=function(e){t.log("onerror",e),t.onerror(e)},this.audio.onpause=function(e){t.status=e.type},this.audio.onplay=function(e){t.status=e.type}}},{key:"play",value:function(){this.audio&&this.audio.play()}},{key:"toggleMute",value:function(){this.audio.muted=!this.audio.muted,this.muted=this.audio.muted}},{key:"pause",value:function(){this.audio&&this.audio.pause()}},{key:"togglePlay",value:function(){this.audio&&this.audio.paused?this.play():this.pause()}},{key:"reload",value:function(t){this.pause(),this.audio&&this.audio.currentTime&&(this.audio.currentTime=0),this.audio.src=t,this.status="ended",this.togglePlay()}},{key:"changeTime",value:function(t){this.log("changeTime",t),this.audio.currentTime=t,"play"!==this.status&&t>0&&this.play()}},{key:"changeVolume",value:function(t){this.audio.volume=t,this.muted=0===t,this.audio.muted=this.muted}},{key:"changeRate",value:function(t){this.audio.playbackRate=t,this.playbackRate=t}},{key:"getSecondTimeFomate",value:function(t){var e=parseInt(t),a=parseInt(e%3600/60);1===a.toString().length&&(a="0"+a);var n=e-60*a;return 1===n.toString().length&&(n="0"+n),a+":"+n}}]),t}()),z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"slider-container"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.disabled,expression:"disabled"}],staticClass:"slider-liner disabled"}),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.disabled,expression:"!disabled"}],staticClass:"slider-liner",style:{background:"linear-gradient(to right, "+t.active+" "+100*t.value+"%, "+t.background+" "+100*t.value+"%)"},attrs:{id:t.oboxID},on:{click:t.clickBox}},[a("div",{staticClass:"slider-pointer",style:{left:t.maxWidth*t.value+"px",background:t.active},attrs:{id:t.odragID},on:{mousedown:t.dragStart}})])])},F=[],N=(a("caad"),a("2532"),a("b680"),{name:"slider",props:{active:{type:String,default:"#20a0ff"},background:{type:String,default:"#ddd"},value:{type:[Number,String],default:0},disabled:{type:Boolean,default:!1}},data:function(){return{x:0,odrag:"",obox:"",maxWidth:0,oboxID:1e4*Math.random(),odragID:1e5*Math.random()}},mounted:function(){this.obox=document.getElementById(this.oboxID),this.odrag=document.getElementById(this.odragID),this.maxWidth=this.obox.clientWidth-this.odrag.clientWidth},methods:{dragStart:function(t){var e=this;this.draging=!0;var a=t.clientX-this.odrag.offsetLeft;document.onmousemove=function(t){document.getSelection().removeAllRanges();var n=t.clientX-a;e.maxWidth=e.obox.clientWidth-e.odrag.clientWidth;var i=Math.min(e.maxWidth,Math.max(n,0));e.updateValue(i/e.maxWidth),e.showTip=!0},document.onmouseup=function(){document.onmousemove=document.onmouseup=null}},clickBox:function(t){if(!this.disabled&&t.target.className.includes("slider-liner")){var e=t.offsetX-this.odrag.clientWidth/2;this.updateValue(e/this.maxWidth)}},updateValue:function(t){this.$emit("input",Number(t).toFixed(2)),this.$emit("change",t)}}}),A=N,I=(a("c617"),Object(l["a"])(A,z,F,!1,null,"16fbb20a",null)),X=I.exports,V={name:"audio-player",components:{slider:X},props:{list:{type:Array},miniable:{type:Boolean,default:!1},rates:{type:Array,default:function(){return[.5,1,2]}}},data:function(){return{player:"",currentTime:"00:00",duration:"00:00",durationNum:0,error:!1,rate:0,volume:1,mini:!1,value:{},dragStartX:0,dragStartY:0,floatOriginX:0,floatOriginY:0,floatOffsetLeft:0,floatOffsetTop:0,clientWidth:0,clientHeight:0}},created:function(){this.value=this.list[0]},watch:{list:function(t){t&&t.length&&this.changeMedia(t[0])}},mounted:function(){var t=this;this.player=new D({src:this.value.src,onloadedmetadata:function(e){t.error=!1,t.durationNum=e,t.duration=t.player&&t.player.getSecondTimeFomate(e)},ontimeupdate:function(e){t.currentTime=t.player&&t.player.getSecondTimeFomate(e),t.rate=e/t.durationNum},onerror:function(){t.error=!0}}),this.player.initPlayer(this.value.src,this.volume)},computed:{playing:function(){return"play"===this.player.status},isMuted:function(){return this.player.muted},playbackRate:function(){return this.player.playbackRate},floatStyleObj:function(){return{transform:"translate(".concat(this.floatOffsetLeft,"px, ").concat(this.floatOffsetTop,"px)"),cursor:"move"}}},beforeDestroy:function(){this.close()},methods:{close:function(){this.player&&this.player.pause(),this.player=""},togglePlay:function(){this.player.togglePlay()},toggleMute:function(){this.player.toggleMute()},changeTime:function(t){this.player&&this.player.changeTime(this.durationNum*t)},changeVolume:function(t){this.player&&this.player.changeVolume(t)},changeRate:function(t){this.player&&this.player.changeRate(t)},changeMedia:function(t){t===this.value?this.togglePlay():(this.value=t,this.player&&this.player.reload(t.src))},changeStatus:function(t){this.mini=t,this.$emit("change",t)},closeWin:function(){this.close(),this.$emit("close")},onDragBegin:function(t){this.mini&&(this.clientWidth=document.body.clientWidth,this.clientHeight=document.body.clientHeight,this.floatOriginX=this.floatOffsetLeft,this.floatOriginY=this.floatOffsetTop,this.dragStartX=t.clientX,this.dragStartY=t.clientY,document.addEventListener("mousemove",this.onDocumentMouseMove),document.addEventListener("mouseup",this.onDocumentMouseUp))},onDocumentMouseMove:function(t){var e=this.floatOriginX+t.clientX-this.dragStartX,a=this.floatOriginY+t.clientY-this.dragStartY;e>0?this.floatOffsetLeft=0:e<84-this.clientWidth?this.floatOffsetLeft=84-this.clientWidth:this.floatOffsetLeft=e,a>this.clientHeight-120?this.floatOffsetTop=this.clientHeight-120:this.floatOffsetTop=a<-60?-60:a},onDocumentMouseUp:function(){document.removeEventListener("mouseup",this.onDocumentMouseUp),document.removeEventListener("mousemove",this.onDocumentMouseMove)}}},Y=V,H=(a("e242"),Object(l["a"])(Y,E,j,!1,null,"65e1612a",null)),U=H.exports,Q={install:function(t){t.component("vuePlayer",U)},vuePlayer:U};n["a"].config.productionTip=!1,n["a"].component("qrcode",b),n["a"].component("barcode",x),n["a"].component("highcharts",C),n["a"].component("swiper",T.swiper),n["a"].component("swiperSlide",T.swiperSlide),n["a"].component("turnplate",$),n["a"].use(q["a"],{prefix:"test"}),n["a"].use(Q),new n["a"]({router:m,render:function(t){return t(h)}}).$mount("#app")},"7faf":function(t,e,a){"use strict";a("b8ff")},b8ff:function(t,e,a){},c617:function(t,e,a){"use strict";a("22ca")},e242:function(t,e,a){"use strict";a("fa9d")},fa9d:function(t,e,a){}});
//# sourceMappingURL=app.fb48ea83.js.map