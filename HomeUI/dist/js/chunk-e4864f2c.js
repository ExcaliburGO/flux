(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e4864f2c"],{"205f":function(t,e,n){"use strict";n.d(e,"a",(function(){return T}));var r=n("2f79"),a=n("b42e"),c=n("c637"),o=n("a723"),i=n("9b76"),s=n("8690"),l=n("365c"),u=n("d82f"),b=n("cf75"),d=n("d580"),f=n("6197"),p=n("b885");function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){j(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function j(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var g=Object(b["d"])(Object(u["m"])(O(O({},Object(b["a"])(d["a"],b["f"].bind(null,"footer"))),{},{footer:Object(b["c"])(o["t"]),footerClass:Object(b["c"])(o["e"]),footerHtml:Object(b["c"])(o["t"])})),c["l"]),m=Object(r["c"])({name:c["l"],functional:!0,props:g,render:function(t,e){var n,r=e.props,c=e.data,o=e.children,i=r.footerBgVariant,l=r.footerBorderVariant,u=r.footerTextVariant;return t(r.footerTag,Object(a["a"])(c,{staticClass:"card-footer",class:[r.footerClass,(n={},j(n,"bg-".concat(i),i),j(n,"border-".concat(l),l),j(n,"text-".concat(u),u),n)],domProps:o?{}:Object(s["a"])(r.footerHtml,r.footer)}),o)}}),v=n("4918");function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(Object(n),!0).forEach((function(e){P(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function P(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var k=Object(b["d"])(Object(u["m"])(y(y({},Object(u["k"])(v["b"],["src","alt","width","height","left","right"])),{},{bottom:Object(b["c"])(o["g"],!1),end:Object(b["c"])(o["g"],!1),start:Object(b["c"])(o["g"],!1),top:Object(b["c"])(o["g"],!1)})),c["n"]),C=Object(r["c"])({name:c["n"],functional:!0,props:k,render:function(t,e){var n=e.props,r=e.data,c=n.src,o=n.alt,i=n.width,s=n.height,l="card-img";return n.top?l+="-top":n.right||n.end?l+="-right":n.bottom?l+="-bottom":(n.left||n.start)&&(l+="-left"),t("img",Object(a["a"])(r,{class:l,attrs:{src:c,alt:o,width:i,height:s}}))}});function S(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?S(Object(n),!0).forEach((function(e){x(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function x(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var E=Object(b["a"])(k,b["f"].bind(null,"img"));E.imgSrc.required=!1;var R=Object(b["d"])(Object(u["m"])(D(D(D(D(D(D({},f["b"]),p["b"]),g),E),d["a"]),{},{align:Object(b["c"])(o["t"]),noBody:Object(b["c"])(o["g"],!1)})),c["j"]),T=Object(r["c"])({name:c["j"],functional:!0,props:R,render:function(t,e){var n,r=e.props,c=e.data,o=e.slots,u=e.scopedSlots,d=r.imgSrc,h=r.imgLeft,O=r.imgRight,j=r.imgStart,v=r.imgEnd,w=r.imgBottom,y=r.header,P=r.headerHtml,k=r.footer,S=r.footerHtml,D=r.align,R=r.textVariant,T=r.bgVariant,H=r.borderVariant,I=u||{},V=o(),B={},z=t(),N=t();if(d){var $=t(C,{props:Object(b["e"])(E,r,b["h"].bind(null,"img"))});w?N=$:z=$}var _=t(),A=Object(l["a"])(i["p"],I,V);(A||y||P)&&(_=t(p["a"],{props:Object(b["e"])(p["b"],r),domProps:A?{}:Object(s["a"])(P,y)},Object(l["b"])(i["p"],B,I,V)));var W=Object(l["b"])(i["h"],B,I,V);r.noBody||(W=t(f["a"],{props:Object(b["e"])(f["b"],r)},W),r.overlay&&d&&(W=t("div",{staticClass:"position-relative"},[z,W,N]),z=t(),N=t()));var L=t(),F=Object(l["a"])(i["o"],I,V);return(F||k||S)&&(L=t(m,{props:Object(b["e"])(g,r),domProps:A?{}:Object(s["a"])(S,k)},Object(l["b"])(i["o"],B,I,V))),t(r.tag,Object(a["a"])(c,{staticClass:"card",class:(n={"flex-row":h||j,"flex-row-reverse":(O||v)&&!(h||j)},x(n,"text-".concat(D),D),x(n,"bg-".concat(T),T),x(n,"border-".concat(H),H),x(n,"text-".concat(R),R),n)}),[z,_,W,L,N])}})},"2ca0":function(t,e,n){"use strict";var r=n("23e7"),a=n("4625"),c=n("06cf").f,o=n("50c4"),i=n("577e"),s=n("5a34"),l=n("1d80"),u=n("ab13"),b=n("c430"),d=a("".startsWith),f=a("".slice),p=Math.min,h=u("startsWith"),O=!b&&!h&&!!function(){var t=c(String.prototype,"startsWith");return t&&!t.writable}();r({target:"String",proto:!0,forced:!O&&!h},{startsWith:function(t){var e=i(l(this));s(t);var n=o(p(arguments.length>1?arguments[1]:void 0,e.length)),r=i(t);return d?d(e,r,n):f(e,n,n+r.length)===r}})},4918:function(t,e,n){"use strict";n.d(e,"b",(function(){return O})),n.d(e,"a",(function(){return j}));var r=n("2f79"),a=n("b42e"),c=n("c637"),o=n("a723"),i=n("2326"),s=n("6c06"),l=n("7b1e"),u=n("3a58"),b=n("cf75"),d=n("fa73");function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p='<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>',h=function(t,e,n){var r=encodeURIComponent(p.replace("%{w}",Object(d["g"])(t)).replace("%{h}",Object(d["g"])(e)).replace("%{f}",n));return"data:image/svg+xml;charset=UTF-8,".concat(r)},O=Object(b["d"])({alt:Object(b["c"])(o["t"]),blank:Object(b["c"])(o["g"],!1),blankColor:Object(b["c"])(o["t"],"transparent"),block:Object(b["c"])(o["g"],!1),center:Object(b["c"])(o["g"],!1),fluid:Object(b["c"])(o["g"],!1),fluidGrow:Object(b["c"])(o["g"],!1),height:Object(b["c"])(o["o"]),left:Object(b["c"])(o["g"],!1),right:Object(b["c"])(o["g"],!1),rounded:Object(b["c"])(o["j"],!1),sizes:Object(b["c"])(o["f"]),src:Object(b["c"])(o["t"]),srcset:Object(b["c"])(o["f"]),thumbnail:Object(b["c"])(o["g"],!1),width:Object(b["c"])(o["o"])},c["O"]),j=Object(r["c"])({name:c["O"],functional:!0,props:O,render:function(t,e){var n,r=e.props,c=e.data,o=r.alt,b=r.src,p=r.block,O=r.fluidGrow,j=r.rounded,g=Object(u["c"])(r.width)||null,m=Object(u["c"])(r.height)||null,v=null,w=Object(i["b"])(r.srcset).filter(s["a"]).join(","),y=Object(i["b"])(r.sizes).filter(s["a"]).join(",");return r.blank&&(!m&&g?m=g:!g&&m&&(g=m),g||m||(g=1,m=1),b=h(g,m,r.blankColor||"transparent"),w=null,y=null),r.left?v="float-left":r.right?v="float-right":r.center&&(v="mx-auto",p=!0),t("img",Object(a["a"])(c,{attrs:{src:b,alt:o,width:g?Object(d["g"])(g):null,height:m?Object(d["g"])(m):null,srcset:w||null,sizes:y||null},class:(n={"img-thumbnail":r.thumbnail,"img-fluid":r.fluid||O,"w-100":O,rounded:""===j||!0===j},f(n,"rounded-".concat(j),Object(l["m"])(j)&&""!==j),f(n,v,v),f(n,"d-block",p),n)}))}})},4968:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return u}));var r=n("2f79"),a=n("b42e"),c=n("c637"),o=n("a723"),i=n("cf75"),s=n("fa73"),l=Object(i["d"])({title:Object(i["c"])(o["t"]),titleTag:Object(i["c"])(o["t"],"h4")},c["q"]),u=Object(r["c"])({name:c["q"],functional:!0,props:l,render:function(t,e){var n=e.props,r=e.data,c=e.children;return t(n.titleTag,Object(a["a"])(r,{staticClass:"card-title"}),c||Object(s["g"])(n.title))}})},"4b0e":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"collapse-icon",class:t.collapseClasses,attrs:{role:"tablist"}},[t._t("default")],2)},a=[],c=(n("14d9"),n("ec26")),o={props:{accordion:{type:Boolean,default:!1},hover:{type:Boolean,default:!1},type:{type:String,default:"default"}},data:function(){return{collapseID:""}},computed:{collapseClasses:function(){var t=[],e={default:"collapse-default",border:"collapse-border",shadow:"collapse-shadow",margin:"collapse-margin"};return t.push(e[this.type]),t}},created:function(){this.collapseID=Object(c["a"])()}},i=o,s=n("2877"),l=Object(s["a"])(i,r,a,!1,null,null,null);e["a"]=l.exports},5843:function(t,e,n){"use strict";n.d(e,"a",(function(){return L}));var r,a=n("2f79"),c=n("c637"),o="show",i=n("e863"),s=n("0056"),l=n("a723"),u=n("9b76"),b=n("906c"),d=n("6b77"),f=n("58f2"),p=n("d82f"),h=n("cf75"),O=n("90ef"),j=n("602d"),g=n("8c18"),m=n("b42e"),v=function(t){Object(b["F"])(t,"height",0),Object(b["B"])((function(){Object(b["w"])(t),Object(b["F"])(t,"height","".concat(t.scrollHeight,"px"))}))},w=function(t){Object(b["A"])(t,"height")},y=function(t){Object(b["F"])(t,"height","auto"),Object(b["F"])(t,"display","block"),Object(b["F"])(t,"height","".concat(Object(b["i"])(t).height,"px")),Object(b["w"])(t),Object(b["F"])(t,"height",0)},P=function(t){Object(b["A"])(t,"height")},k={css:!0,enterClass:"",enterActiveClass:"collapsing",enterToClass:"collapse show",leaveClass:"collapse show",leaveActiveClass:"collapsing",leaveToClass:"collapse"},C={enter:v,afterEnter:w,leave:y,afterLeave:P},S={appear:Object(h["c"])(l["g"],!1)},D=Object(a["c"])({name:c["t"],functional:!0,props:S,render:function(t,e){var n=e.props,r=e.data,a=e.children;return t("transition",Object(m["a"])(r,{props:k,on:C},{props:n}),a)}});function x(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?x(Object(n),!0).forEach((function(e){R(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function R(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var T=Object(d["d"])(c["s"],"toggle"),H=Object(d["d"])(c["s"],"request-state"),I=Object(d["e"])(c["s"],"accordion"),V=Object(d["e"])(c["s"],"state"),B=Object(d["e"])(c["s"],"sync-state"),z=Object(f["a"])("visible",{type:l["g"],defaultValue:!1}),N=z.mixin,$=z.props,_=z.prop,A=z.event,W=Object(h["d"])(Object(p["m"])(E(E(E({},O["b"]),$),{},{accordion:Object(h["c"])(l["t"]),appear:Object(h["c"])(l["g"],!1),isNav:Object(h["c"])(l["g"],!1),tag:Object(h["c"])(l["t"],"div")})),c["s"]),L=Object(a["c"])({name:c["s"],mixins:[O["a"],N,g["a"],j["a"]],props:W,data:function(){return{show:this[_],transitioning:!1}},computed:{classObject:function(){var t=this.transitioning;return{"navbar-collapse":this.isNav,collapse:!t,show:this.show&&!t}},slotScope:function(){var t=this;return{visible:this.show,close:function(){t.show=!1}}}},watch:(r={},R(r,_,(function(t){t!==this.show&&(this.show=t)})),R(r,"show",(function(t,e){t!==e&&this.emitState()})),r),created:function(){this.show=this[_]},mounted:function(){var t=this;this.show=this[_],this.listenOnRoot(T,this.handleToggleEvent),this.listenOnRoot(I,this.handleAccordionEvent),this.isNav&&(this.setWindowEvents(!0),this.handleResize()),this.$nextTick((function(){t.emitState()})),this.listenOnRoot(H,(function(e){e===t.safeId()&&t.$nextTick(t.emitSync)}))},updated:function(){this.emitSync()},deactivated:function(){this.isNav&&this.setWindowEvents(!1)},activated:function(){this.isNav&&this.setWindowEvents(!0),this.emitSync()},beforeDestroy:function(){this.show=!1,this.isNav&&i["g"]&&this.setWindowEvents(!1)},methods:{setWindowEvents:function(t){Object(d["c"])(t,window,"resize",this.handleResize,s["S"]),Object(d["c"])(t,window,"orientationchange",this.handleResize,s["S"])},toggle:function(){this.show=!this.show},onEnter:function(){this.transitioning=!0,this.$emit(s["N"])},onAfterEnter:function(){this.transitioning=!1,this.$emit(s["O"])},onLeave:function(){this.transitioning=!0,this.$emit(s["t"])},onAfterLeave:function(){this.transitioning=!1,this.$emit(s["s"])},emitState:function(){var t=this.show,e=this.accordion,n=this.safeId();this.$emit(A,t),this.emitOnRoot(V,n,t),e&&t&&this.emitOnRoot(I,n,e)},emitSync:function(){this.emitOnRoot(B,this.safeId(),this.show)},checkDisplayBlock:function(){var t=this.$el,e=Object(b["p"])(t,o);Object(b["y"])(t,o);var n="block"===Object(b["k"])(t).display;return e&&Object(b["b"])(t,o),n},clickHandler:function(t){var e=t.target;this.isNav&&e&&"block"===Object(b["k"])(this.$el).display&&(!Object(b["v"])(e,".nav-link,.dropdown-item")&&!Object(b["e"])(".nav-link,.dropdown-item",e)||this.checkDisplayBlock()||(this.show=!1))},handleToggleEvent:function(t){t===this.safeId()&&this.toggle()},handleAccordionEvent:function(t,e){var n=this.accordion,r=this.show;if(n&&n===e){var a=t===this.safeId();(a&&!r||!a&&r)&&this.toggle()}},handleResize:function(){this.show="block"===Object(b["k"])(this.$el).display}},render:function(t){var e=this.appear,n=t(this.tag,{class:this.classObject,directives:[{name:"show",value:this.show}],attrs:{id:this.safeId()},on:{click:this.clickHandler}},this.normalizeSlot(u["h"],this.slotScope));return t(D,{props:{appear:e},on:{enter:this.onEnter,afterEnter:this.onAfterEnter,leave:this.onLeave,afterLeave:this.onAfterLeave}},[n])}})},6076:function(t,e,n){"use strict";n("99af");var r=n("b4c0");e["a"]={help:function(){return Object(r["a"])().get("/daemon/help")},helpSpecific:function(t){return Object(r["a"])().get("/daemon/help/".concat(t))},getInfo:function(){return Object(r["a"])().get("/daemon/getinfo")},getZelNodeStatus:function(){return Object(r["a"])().get("/daemon/getzelnodestatus")},getRawTransaction:function(t,e){return Object(r["a"])().get("/daemon/getrawtransaction/".concat(t,"/").concat(e))},listZelNodes:function(){return Object(r["a"])().get("/daemon/listzelnodes")},viewDeterministicZelNodeList:function(){return Object(r["a"])().get("/daemon/viewdeterministiczelnodelist")},getZelNodeCount:function(){return Object(r["a"])().get("/daemon/getzelnodecount")},getStartList:function(){return Object(r["a"])().get("/daemon/getstartlist")},getDOSList:function(){return Object(r["a"])().get("/daemon/getdoslist")},fluxCurrentWinner:function(){return Object(r["a"])().get("/daemon/fluxcurrentwinner")},getBenchmarks:function(){return Object(r["a"])().get("/daemon/getbenchmarks")},getBenchStatus:function(){return Object(r["a"])().get("/daemon/getbenchstatus")},startBenchmark:function(t){return Object(r["a"])().get("/daemon/startbenchmark",{headers:{zelidauth:t}})},stopBenchmark:function(t){return Object(r["a"])().get("/daemon/stopbenchmark",{headers:{zelidauth:t}})},getBlockchainInfo:function(){return Object(r["a"])().get("/daemon/getblockchaininfo")},getMiningInfo:function(){return Object(r["a"])().get("/daemon/getmininginfo")},getNetworkInfo:function(){return Object(r["a"])().get("/daemon/getnetworkinfo")},validateAddress:function(t,e){return Object(r["a"])().get("/daemon/validateaddress/".concat(e),{headers:{zelidauth:t}})},getWalletInfo:function(t){return Object(r["a"])().get("/daemon/getwalletinfo",{headers:{zelidauth:t}})},listZelNodeConf:function(t){return Object(r["a"])().get("/daemon/listzelnodeconf",{headers:{zelidauth:t}})},start:function(t){return Object(r["a"])().get("/daemon/start",{headers:{zelidauth:t}})},restart:function(t){return Object(r["a"])().get("/daemon/restart",{headers:{zelidauth:t}})},stopDaemon:function(t){return Object(r["a"])().get("/daemon/stop",{headers:{zelidauth:t}})},rescanDaemon:function(t,e){return Object(r["a"])().get("/daemon/rescanblockchain/".concat(e),{headers:{zelidauth:t}})},getBlock:function(t,e){return Object(r["a"])().get("/daemon/getblock/".concat(t,"/").concat(e))},tailDaemonDebug:function(t){return Object(r["a"])().get("/flux/taildaemondebug",{headers:{zelidauth:t}})},justAPI:function(){return Object(r["a"])()},cancelToken:function(){return r["b"]}}},6197:function(t,e,n){"use strict";n.d(e,"b",(function(){return h})),n.d(e,"a",(function(){return O}));var r=n("2f79"),a=n("b42e"),c=n("c637"),o=n("a723"),i=n("d82f"),s=n("cf75"),l=n("d580"),u=n("4968"),b=n("ba06");function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h=Object(s["d"])(Object(i["m"])(f(f(f(f({},u["b"]),b["b"]),Object(s["a"])(l["a"],s["f"].bind(null,"body"))),{},{bodyClass:Object(s["c"])(o["e"]),overlay:Object(s["c"])(o["g"],!1)})),c["k"]),O=Object(r["c"])({name:c["k"],functional:!0,props:h,render:function(t,e){var n,r=e.props,c=e.data,o=e.children,i=r.bodyBgVariant,l=r.bodyBorderVariant,d=r.bodyTextVariant,f=t();r.title&&(f=t(u["a"],{props:Object(s["e"])(u["b"],r)}));var h=t();return r.subTitle&&(h=t(b["a"],{props:Object(s["e"])(b["b"],r),class:["mb-2"]})),t(r.bodyTag,Object(a["a"])(c,{staticClass:"card-body",class:[(n={"card-img-overlay":r.overlay},p(n,"bg-".concat(i),i),p(n,"border-".concat(l),l),p(n,"text-".concat(d),d),n),r.bodyClass]}),[f,h,o])}})},"746e":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",{class:{open:t.visible},attrs:{"no-body":""},on:{mouseenter:t.collapseOpen,mouseleave:t.collapseClose}},[n("b-card-header",{class:{collapsed:!t.visible},attrs:{"aria-expanded":t.visible?"true":"false","aria-controls":t.collapseItemID,role:"tab","data-toggle":"collapse"},on:{click:function(e){return t.updateVisible(!t.visible)}}},[t._t("header",(function(){return[n("span",{staticClass:"lead collapse-title"},[t._v(t._s(t.title))])]}))],2),n("b-collapse",{attrs:{id:t.collapseItemID,accordion:t.accordion,role:"tabpanel"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("b-card-body",[t._t("default")],2)],1)],1)},a=[],c=n("205f"),o=n("b885"),i=n("6197"),s=n("5843"),l=n("ec26"),u={components:{BCard:c["a"],BCardHeader:o["a"],BCardBody:i["a"],BCollapse:s["a"]},props:{isVisible:{type:Boolean,default:!1},title:{type:String,required:!0}},data:function(){return{visible:!1,collapseItemID:"",openOnHover:this.$parent.hover}},computed:{accordion:function(){return this.$parent.accordion?"accordion-".concat(this.$parent.collapseID):null}},created:function(){this.collapseItemID=Object(l["a"])(),this.visible=this.isVisible},methods:{updateVisible:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.visible=t,this.$emit("visible",t)},collapseOpen:function(){this.openOnHover&&this.updateVisible(!0)},collapseClose:function(){this.openOnHover&&this.updateVisible(!1)}}},b=u,d=n("2877"),f=Object(d["a"])(b,r,a,!1,null,null,null);e["a"]=f.exports},7665:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.callResponse.data?n("b-card",[n("app-collapse",{attrs:{accordion:""},model:{value:t.activeHelpNames,callback:function(e){t.activeHelpNames=e},expression:"activeHelpNames"}},t._l(t.helpResponse,(function(e){return n("div",{key:e},[e.startsWith("=")?n("div",[n("br"),n("h2",[t._v(" "+t._s(e.split(" ")[1])+" ")])]):t._e(),e.startsWith("=")?t._e():n("app-collapse-item",{attrs:{title:e},on:{visible:function(n){return t.updateActiveHelpNames(n,e)}}},[n("p",{staticClass:"helpSpecific"},[t._v(" "+t._s(t.currentHelpResponse||"Loading help message...")+" ")]),n("hr")])],1)})),0)],1):t._e()],1)},a=[],c=n("c7eb"),o=n("1da1"),i=(n("d81d"),n("4de4"),n("d3b7"),n("2ca0"),n("498a"),n("a15b9"),n("205f")),s=n("b307"),l=n("4b0e"),u=n("746e"),b=n("6076"),d={components:{BCard:i["a"],AppCollapse:l["a"],AppCollapseItem:u["a"],ToastificationContent:s["a"]},data:function(){return{callResponse:{status:"",data:""},activeHelpNames:"",currentHelpResponse:""}},computed:{helpResponse:function(){return this.callResponse.data?this.callResponse.data.split("\n").filter((function(t){return""!==t})).map((function(t){return t.startsWith("=")?t:t.split(" ")[0]})):[]}},mounted:function(){this.daemonHelp()},methods:{daemonHelp:function(){var t=this;return Object(o["a"])(Object(c["a"])().mark((function e(){var n;return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b["a"].help();case 2:n=e.sent,"error"===n.data.status?t.$toast({component:s["a"],props:{title:n.data.data.message||n.data.data,icon:"InfoIcon",variant:"danger"}}):(t.callResponse.status=n.data.status,t.callResponse.data=n.data.data);case 4:case"end":return e.stop()}}),e)})))()},updateActiveHelpNames:function(t,e){this.activeHelpNames=e,this.daemonHelpSpecific()},daemonHelpSpecific:function(){var t=this;return Object(o["a"])(Object(c["a"])().mark((function e(){var n,r,a,o,i,l,u,d,f;return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.currentHelpResponse="",console.log(t.activeHelpNames),e.next=4,b["a"].helpSpecific(t.activeHelpNames);case 4:if(n=e.sent,console.log(n),"error"===n.data.status)t.$toast({component:s["a"],props:{title:n.data.data.message||n.data.data,icon:"InfoIcon",variant:"danger"}});else{for(r=n.data.data.split("\n"),a=r.length,o=0,i=0;i<a;i+=1)if(l="","{"===r[i].trim()||"["===r[i].trim()){for(o+=4,u=0;u<o;u+=1)l+=" ";r[i]=l+r[i],o+=4}else if("}"===r[i].trim()||"]"===r[i].trim()){for(o-=4,d=0;d<o;d+=1)l+=" ";r[i]=l+r[i],o-=4}else{for(f=0;f<o;f+=1)l+=" ";r[i]=l+r[i]}t.currentHelpResponse=r.join("\n"),console.log(t.currentHelpResponse)}case 7:case"end":return e.stop()}}),e)})))()}}},f=d,p=(n("ba23"),n("2877")),h=Object(p["a"])(f,r,a,!1,null,null,null);e["default"]=h.exports},8600:function(t,e,n){},b885:function(t,e,n){"use strict";n.d(e,"b",(function(){return p})),n.d(e,"a",(function(){return h}));var r=n("2f79"),a=n("b42e"),c=n("c637"),o=n("a723"),i=n("8690"),s=n("d82f"),l=n("cf75"),u=n("d580");function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p=Object(l["d"])(Object(s["m"])(d(d({},Object(l["a"])(u["a"],l["f"].bind(null,"header"))),{},{header:Object(l["c"])(o["t"]),headerClass:Object(l["c"])(o["e"]),headerHtml:Object(l["c"])(o["t"])})),c["m"]),h=Object(r["c"])({name:c["m"],functional:!0,props:p,render:function(t,e){var n,r=e.props,c=e.data,o=e.children,s=r.headerBgVariant,l=r.headerBorderVariant,u=r.headerTextVariant;return t(r.headerTag,Object(a["a"])(c,{staticClass:"card-header",class:[r.headerClass,(n={},f(n,"bg-".concat(s),s),f(n,"border-".concat(l),l),f(n,"text-".concat(u),u),n)],domProps:o?{}:Object(i["a"])(r.headerHtml,r.header)}),o)}})},ba06:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return u}));var r=n("2f79"),a=n("b42e"),c=n("c637"),o=n("a723"),i=n("cf75"),s=n("fa73"),l=Object(i["d"])({subTitle:Object(i["c"])(o["t"]),subTitleTag:Object(i["c"])(o["t"],"h6"),subTitleTextVariant:Object(i["c"])(o["t"],"muted")},c["o"]),u=Object(r["c"])({name:c["o"],functional:!0,props:l,render:function(t,e){var n=e.props,r=e.data,c=e.children;return t(n.subTitleTag,Object(a["a"])(r,{staticClass:"card-subtitle",class:[n.subTitleTextVariant?"text-".concat(n.subTitleTextVariant):null]}),c||Object(s["g"])(n.subTitle))}})},ba23:function(t,e,n){"use strict";n("8600")},d580:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("2f79"),a=n("c637"),c=n("a723"),o=n("cf75"),i=Object(o["d"])({bgVariant:Object(o["c"])(c["t"]),borderVariant:Object(o["c"])(c["t"]),tag:Object(o["c"])(c["t"],"div"),textVariant:Object(o["c"])(c["t"])},a["j"]);Object(r["c"])({props:i})},ec26:function(t,e,n){"use strict";var r,a=new Uint8Array(16);function c(){if(!r&&(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),!r))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(a)}var o=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function i(t){return"string"===typeof t&&o.test(t)}for(var s=i,l=[],u=0;u<256;++u)l.push((u+256).toString(16).substr(1));function b(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(l[t[e+0]]+l[t[e+1]]+l[t[e+2]]+l[t[e+3]]+"-"+l[t[e+4]]+l[t[e+5]]+"-"+l[t[e+6]]+l[t[e+7]]+"-"+l[t[e+8]]+l[t[e+9]]+"-"+l[t[e+10]]+l[t[e+11]]+l[t[e+12]]+l[t[e+13]]+l[t[e+14]]+l[t[e+15]]).toLowerCase();if(!s(n))throw TypeError("Stringified UUID is invalid");return n}var d=b;function f(t,e,n){t=t||{};var r=t.random||(t.rng||c)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var a=0;a<16;++a)e[n+a]=r[a];return e}return d(r)}e["a"]=f}}]);