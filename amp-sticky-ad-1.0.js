(self.AMP=self.AMP||[]).push({n:"amp-sticky-ad",v:"1912180046560",f:(function(AMP,_){
var d,e="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},k;if("function"==typeof Object.setPrototypeOf)k=Object.setPrototypeOf;else{var l;a:{var n={a:!0},p={};try{p.__proto__=n;l=p.a;break a}catch(a){}l=!1}k=l?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var q=k;function r(){var a,b;this.promise=new Promise(function(c,f){a=c;b=f});this.resolve=a;this.reject=b};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var t=self.__AMP_LOG;function u(){if(!t.user)throw Error("failed to call initLogConstructor");return t.user}function v(a){u().assert(a,"amp-sticky-ad must have a single amp-ad child",void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};function w(){var a,b=Object.create(null);a&&Object.assign(b,a);return b};function x(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};(function(a){return a||{}})({c:!0,v:!0,a:!0,ad:!0,action:!0});function y(a){var b=z(a);b=z(b);b=b.isSingleDoc()?b.win:b;return A(b,"owners")}function z(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView;b=b.__AMP_TOP||(b.__AMP_TOP=b);a=A(b,"ampdoc").getAmpDoc(a)}return a}function A(a,b){var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});var f=c;a=f[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function B(a){x(a.tagName,"AMP-");if(a.createdCallback)return Promise.resolve(a);if(!a.__AMP_UPG_PRM){var b=new r;a.__AMP_UPG_PRM=b.promise;a.__AMP_UPG_RES=b.resolve}return a.__AMP_UPG_PRM};var C,D="Webkit webkit Moz moz ms O o".split(" ");function E(a,b){void 0===b&&(b=a.hasAttribute("hidden"));b?a.removeAttribute("hidden"):a.setAttribute("hidden","")};function F(a){a=AMP.BaseElement.call(this,a)||this;a.o=a.getVsync();a.j=null;a.h=null;a.m=!1;a.l=null;a.A=!1;a.w=null;return a}var H=AMP.BaseElement;F.prototype=e(H.prototype);F.prototype.constructor=F;if(q)q(F,H);else for(var I in H)if("prototype"!=I)if(Object.defineProperties){var J=Object.getOwnPropertyDescriptor(H,I);J&&Object.defineProperty(F,I,J)}else F[I]=H[I];F.D=H.prototype;d=F.prototype;
d.buildCallback=function(){var a=this;this.h=this.getViewport();this.element.classList.add("i-amphtml-sticky-ad-layout");var b=this.getRealChildren();v(1==b.length&&"AMP-AD"==b[0].tagName);this.j=b[0];y(this.element).setOwner(this.j,this.element);this.w=B(this.j).then(function(a){return a.whenBuilt()}).then(function(){return a.mutateElement(function(){E(a.element,!0)})});var c=this.win.document.createElement("amp-sticky-ad-top-padding");c.classList.add("amp-sticky-ad-top-padding");this.element.insertBefore(c,
this.j);this.win.setTimeout(function(){a.l=a.h.onScroll(function(){1<a.h.getScrollTop()&&K(a)})})};d.layoutCallback=function(){if(this.m){E(this.element,!0);var a=this.element.offsetHeight;this.h.updatePaddingBottom(a);var b=y(this.element);b.updateInViewport(this.element,this.j,!0);b.scheduleLayout(this.element,this.j)}return Promise.resolve()};d.isAlwaysFixed=function(){return!0};d.unlayoutCallback=function(){this.h.updatePaddingBottom(0);return!0};d.detachedCallback=function(){L(this)};
d.collapsedCallback=function(){var a=this;this.A=!0;this.m=!1;E(this.element,!1);this.o.mutate(function(){a.h.updatePaddingBottom(0)})};function L(a){a.l&&(a.l(),a.l=null)}function K(a){L(a);a.w.then(function(){a.mutateElement(function(){a.A||(a.m=!0,M(a),a.h.addToFixedLayer(a.element,!0).then(function(){return N(a)}))})})}function N(a){B(a.j).then(function(b){b.whenBuilt().then(a.B.bind(a))})}
d.B=function(){var a=this,b=this.j,c=y(this.element);c.updateInViewport(this.element,b,!0);c.scheduleLayout(this.element,b);var f=b.signals();return f.whenSignal("render-start").then(function(){var b;return a.measureElement(function(){b=(a.win.getComputedStyle(a.element)||w()).backgroundColor}).then(function(){return a.o.mutatePromise(function(){a.element.setAttribute("visible","");a.h.updatePaddingBottom(a.element.offsetHeight);var c=b,f=c.replace(/\(([^,]+),([^,]+),([^,)]+),[^)]+\)/g,"($1,$2,$3, 1)");
if(c!=f){u().warn("AMP-STICKY-AD","Do not allow container to be semitransparent");c=a.element;var h=c.style;if(x("background-color","--"))h="background-color";else{C||(C=w());var m=C["background-color"];if(!m){m="background-color";if(void 0===h["background-color"]){var g;b:{for(g=0;g<D.length;g++){var G=D[g]+"Background-color";if(void 0!==h[G]){g=G;break b}}g=""}void 0!==h[g]&&(m=g)}C["background-color"]=m}h=m}h&&(c.style[h]=f)}})})})};
function M(a){var b=a.win.document.createElement("button");b.classList.add("amp-sticky-ad-close-button");b.setAttribute("aria-label",a.element.getAttribute("data-close-button-aria-label")||"Close this ad");var c=a.C.bind(a);b.addEventListener("click",c);a.element.appendChild(b)}d.C=function(){var a=this;this.o.mutate(function(){a.m=!1;y(a.element).scheduleUnlayout(a.element,a.j);a.h.removeFromFixedLayer(a.element);var b=a.element;b.parentElement&&b.parentElement.removeChild(b);a.h.updatePaddingBottom(0)})};
(function(a){a.registerElement("amp-sticky-ad",F,"amp-sticky-ad{position:fixed!important;text-align:center;bottom:0!important;left:0;width:100%!important;z-index:11;max-height:100px!important;box-sizing:border-box;opacity:1!important;background-image:none!important;background-color:#fff;box-shadow:0 0 5px 0 rgba(0,0,0,0.2)!important;margin-bottom:0!important}amp-sticky-ad-top-padding{display:block;width:100%!important;background:#fff;height:4px;max-height:5px!important;z-index:12}.i-amphtml-sticky-ad-layout{display:-ms-flexbox;display:flex;visibility:hidden!important;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;overflow:visible!important;transform:translateZ(0)!important}amp-sticky-ad[visible]{visibility:visible!important}.i-amphtml-sticky-ad-layout>amp-ad{display:block}.amp-sticky-ad-close-button{position:absolute;visibility:hidden;width:28px;height:28px;top:-28px;right:0;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='13' height='13' viewBox='341 8 13 13' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%234F4F4F' d='M354 9.31L352.69 8l-5.19 5.19L342.31 8 341 9.31l5.19 5.19-5.19 5.19 1.31 1.31 5.19-5.19 5.19 5.19 1.31-1.31-5.19-5.19z' fill-rule='evenodd'/%3E%3C/svg%3E\");background-size:13px 13px;background-position:9px;background-color:#fff;background-repeat:no-repeat;box-shadow:0 -1px 1px 0 rgba(0,0,0,0.2);border:none;border-radius:12px 0 0 0}amp-sticky-ad[visible]>.amp-sticky-ad-close-button{visibility:visible}.amp-sticky-ad-close-button:before{position:absolute;content:\"\";top:-20px;right:0;left:-20px;bottom:0}[dir=rtl] .amp-sticky-ad-close-button{right:auto;left:0;border-top-left-radius:0;border-top-right-radius:12px;background-position:6px}[dir=rtl] .amp-sticky-ad-close-button:before{right:-20px;left:0}\n/*# sourceURL=/extensions/amp-sticky-ad/1.0/amp-sticky-ad.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-sticky-ad-1.0.js.map