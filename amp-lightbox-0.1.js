(self.AMP=self.AMP||[]).push({n:"amp-lightbox",v:"1912180046560",f:(function(AMP,_){
var g,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},m;if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var n;a:{var ba={a:!0},p={};try{p.__proto__=ba;n=p.a;break a}catch(a){}n=!1}m=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var r=m;
function t(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(r)r(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Fa=b.prototype};function u(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ca=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function v(a){var b=Object.create(null);if(!a)return b;for(var c;c=ca.exec(a);){var d=u(c[1],c[1]),e=c[2]?u(c[2].replace(/\+/g," "),c[2]):"";b[d]=e}return b};var w="";
function x(a){var b=a||self;if(b.__AMP_MODE)var c=b.__AMP_MODE;else{c=b;var d=self.AMP_CONFIG||{},e=!!d.test||!1,f=v(c.location.originalHash||c.location.hash);d=d.spt;var h=v(c.location.search);w||(w=c.AMP_CONFIG&&c.AMP_CONFIG.v?c.AMP_CONFIG.v:"011912180046560");c={localDev:!1,development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(f.development)||c.AMP_DEV_MODE),examiner:"2"==f.development,geoOverride:f["amp-geo"],minified:!0,lite:void 0!=h.amp_lite,test:e,log:f.log,version:"1912180046560",rtvVersion:w,
singlePassType:d};c=b.__AMP_MODE=c}return c};function y(a){return a?Array.prototype.slice.call(a):[]};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var z=self.__AMP_LOG;function A(){if(!z.user)throw Error("failed to call initLogConstructor");return z.user}function da(){if(z.dev)return z.dev;throw Error("failed to call initLogConstructor");};function ea(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};function B(){this.m=null}g=B.prototype;g.add=function(a){var b=this;this.m||(this.m=[]);this.m.push(a);return function(){b.remove(a)}};g.remove=function(a){this.m&&(a=this.m.indexOf(a),-1<a&&this.m.splice(a,1))};g.removeAll=function(){this.m&&(this.m.length=0)};g.fire=function(a){if(this.m)for(var b=this.m,c=0;c<b.length;c++)(0,b[c])(a)};g.getHandlerCount=function(){return this.m?this.m.length:0};var C=Object.prototype.hasOwnProperty;function fa(){var a,b=Object.create(null);a&&Object.assign(b,a);return b}function D(a){return a||{}};D({c:!0,v:!0,a:!0,ad:!0,action:!0});function ha(a,b){if(a.__AMP__EXPERIMENT_TOGGLES)var c=a.__AMP__EXPERIMENT_TOGGLES;else{a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);c=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var d in a.AMP_CONFIG){var e=a.AMP_CONFIG[d];"number"===typeof e&&0<=e&&1>=e&&(c[d]=Math.random()<e)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length&&(d=a.AMP_CONFIG["allow-doc-opt-in"],e=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){e=
e.getAttribute("content").split(",");for(var f=0;f<e.length;f++)-1!=d.indexOf(e[f])&&(c[e[f]]=!0)}Object.assign(c,ia(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length)for(d=a.AMP_CONFIG["allow-url-opt-in"],a=v(a.location.originalHash||a.location.hash),e=0;e<d.length;e++)f=a["e-"+d[e]],"1"==f&&(c[d[e]]=!0),"0"==f&&(c[d[e]]=!1)}var h=c;return!!h[b]}
function ia(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){da().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};var ja={},E=(ja["ampdoc-fie"]={isTrafficEligible:function(){return!0},branches:[["21065001"],["21065002"]]},ja);function ka(a){var b=a.ownerDocument.defaultView,c=b.__AMP_TOP||(b.__AMP_TOP=b),d=b!=c;var e=c;if(ha(e,"ampdoc-fie")){e.__AMP_EXPERIMENT_BRANCHES=e.__AMP_EXPERIMENT_BRANCHES||{};for(var f in E)if(C.call(E,f)&&!C.call(e.__AMP_EXPERIMENT_BRANCHES,f))if(E[f].isTrafficEligible&&E[f].isTrafficEligible(e)){if(!e.__AMP_EXPERIMENT_BRANCHES[f]&&ha(e,f)){var h=E[f].branches;e.__AMP_EXPERIMENT_BRANCHES[f]=h[Math.floor(Math.random()*h.length)]||null}}else e.__AMP_EXPERIMENT_BRANCHES[f]=null;e="21065002"===(e.__AMP_EXPERIMENT_BRANCHES?
e.__AMP_EXPERIMENT_BRANCHES["ampdoc-fie"]:null)}else e=!1;var k=e;d&&!k?a=F(b,"action")?G(b,"action"):null:(a=H(a),a=la(a),a=F(a,"action")?G(a,"action"):null);return a}function I(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return G(a,b)}function J(a,b){var c=H(a);c=la(c);return G(c,b)}function H(a){return a.nodeType?I((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function la(a){a=H(a);return a.isSingleDoc()?a.win:a}
function G(a,b){F(a,b);var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});var d=c;a=d[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function F(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function ma(a){a.parentElement&&a.parentElement.removeChild(a)}function na(a,b){for(var c;a&&a!==c;a=a.parentElement)if(b(a))return a;return null}function oa(a){return a.closest?a.closest(".i-amphtml-fie"):na(a,function(a){var b=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;return b?b.call(a,".i-amphtml-fie"):!1})};function K(a){return J(a,"owners")};function L(a,b){var c,d=this;this.ra=I(a,"timer");this.wa=b;this.va=c||0;this.K=-1;this.W=0;this.aa=!1;this.ta=function(){d.S()}}L.prototype.isPending=function(){return-1!=this.K};L.prototype.schedule=function(a){var b=a||this.va;this.aa&&10>b&&(b=10);var c=Date.now()+b;return!this.isPending()||-10>c-this.W?(this.cancel(),this.W=c,this.K=this.ra.delay(this.ta,b),!0):!1};L.prototype.S=function(){this.K=-1;this.W=0;this.aa=!0;this.wa();this.aa=!1};
L.prototype.cancel=function(){this.isPending()&&(this.ra.cancel(this.K),this.K=-1)};function qa(a,b){for(var c=0;c<a.length;c++)if(b(a[c],c,a))return c;return-1};function ra(a,b,c,d){this.type=a;this.data=b;this.time=c;this.event=d}
function sa(a,b,c){this.A=a;this.h=[];this.I=[];this.o=[];this.j=[];this.l=null;this.Ca=b;this.Da=c;this.T=!1;this.S=new L(a.ownerDocument.defaultView,this.la.bind(this));this.oa=new B;this.J=Object.create(null);this.ja=this.Ba.bind(this);this.ha=this.za.bind(this);this.ia=this.Aa.bind(this);this.ga=this.ya.bind(this);this.A.addEventListener("touchstart",this.ja);this.A.addEventListener("touchend",this.ha);this.A.addEventListener("touchmove",this.ia);this.A.addEventListener("touchcancel",this.ga);
this.X=!1}function ta(a){var b=void 0===b?!1:b;var c=void 0===c?!1:c;var d=a.__AMP_Gestures;d||(d=new sa(a,b,c),a.__AMP_Gestures=d);return d}g=sa.prototype;g.cleanup=function(){this.A.removeEventListener("touchstart",this.ja);this.A.removeEventListener("touchend",this.ha);this.A.removeEventListener("touchmove",this.ia);this.A.removeEventListener("touchcancel",this.ga);delete this.A.__AMP_Gestures;this.S.cancel()};
g.onGesture=function(a,b){var c=new a(this),d=c.getType(),e=this.J[d];e||(this.h.push(c),e=new B,this.J[d]=e);return e.add(b)};g.removeGesture=function(a){var b=(new a(this)).getType();if(a=this.J[b]){a.removeAll();a=qa(this.h,function(a){return a.getType()==b});if(0>a)return!1;this.h.splice(a,1);this.o.splice(a,1);this.j.splice(a,1);this.I.splice(a,1);delete this.J[b];return!0}return!1};g.onPointerDown=function(a){return this.oa.add(a)};
g.Ba=function(a){var b=Date.now();this.T=!1;this.oa.fire(a);for(var c=0;c<this.h.length;c++)if(!this.o[c]&&(this.j[c]&&this.j[c]<b&&M(this,c),this.h[c].onTouchStart(a))){var d=c;this.I[d]=!0;this.j[d]=0}N(this,a)};g.Aa=function(a){for(var b=Date.now(),c=0;c<this.h.length;c++)this.I[c]&&(this.j[c]&&this.j[c]<b?M(this,c):this.h[c].onTouchMove(a)||M(this,c));N(this,a)};
g.za=function(a){for(var b=Date.now(),c=0;c<this.h.length;c++)if(this.I[c])if(this.j[c]&&this.j[c]<b)M(this,c);else{this.h[c].onTouchEnd(a);var d=!this.j[c],e=this.j[c]<b,f=this.l==this.h[c];f||!d&&!e||M(this,c)}N(this,a)};g.ya=function(a){for(var b=0;b<this.h.length;b++){var c=b;this.o[c]=0;M(this,c)}N(this,a)};
function N(a,b){var c=!!a.l||a.T;a.T=!1;if(!c)for(var d=Date.now(),e=0;e<a.h.length;e++)if(a.o[e]||a.j[e]&&a.j[e]>=d){c=!0;break}c?(b.stopPropagation(),a.Ca||b.preventDefault()):a.Da&&b.stopPropagation();a.X&&(a.X=!1,a.la())}
g.la=function(){for(var a=Date.now(),b=-1,c=0;c<this.h.length;c++)if(!this.o[c])this.j[c]&&this.j[c]<a&&M(this,c);else if(-1==b||this.o[c]>this.o[b])b=c;if(-1!=b){var d=0;for(c=0;c<this.h.length;c++)!this.o[c]&&this.I[c]&&(d=Math.max(d,this.j[c]-a));if(2>d){a=b;c=this.h[a];for(var e=0;e<this.h.length;e++)if(e!=a){var f=e;this.o[f]=0;M(this,f)}this.o[a]=0;this.j[a]=0;this.l=c;c.acceptStart()}else this.S.schedule(d)}};function M(a,b){a.I[b]=!1;a.j[b]=0;a.o[b]||a.h[b].acceptCancel()}
function O(a,b){this.Ea=a;this.R=b}g=O.prototype;g.getType=function(){return this.Ea};g.signalReady=function(a){var b=this.R;if(b.l)this.acceptCancel();else{for(var c=Date.now(),d=0;d<b.h.length;d++)b.h[d]==this&&(b.o[d]=c+a,b.j[d]=0);b.X=!0}};g.signalPending=function(a){var b=this.R;if(b.l)this.acceptCancel();else for(var c=Date.now(),d=0;d<b.h.length;d++)b.h[d]==this&&(b.j[d]=c+a)};g.signalEnd=function(){var a=this.R;a.l==this&&(a.l=null,a.T=!0)};
g.signalEmit=function(a,b){var c=this.R.J[this.getType()];c&&c.fire(new ra(this.getType(),a,Date.now(),b))};g.acceptStart=function(){};g.acceptCancel=function(){};g.onTouchStart=function(){return!1};g.onTouchMove=function(){return!1};g.onTouchEnd=function(){};function ua(a,b,c){1>b&&(b=1);var d=a/b,e=.5+Math.min(b/33.34,.5);return d*e+c*(1-e)};function P(a,b,c,d){O.call(this,a,b);this.ma=c;this.sa=d;this.l=!1;this.ea=this.da=this.Y=this.P=this.qa=this.$=this.Z=this.F=this.D=this.H=this.G=0}t(P,O);g=P.prototype;g.onTouchStart=function(a){a=a.touches;return this.l&&a&&1<a.length?!0:a&&1==a.length?(this.qa=Date.now(),this.G=a[0].clientX,this.H=a[0].clientY,!0):!1};
g.onTouchMove=function(a){var b=a.touches;if(b&&1<=b.length){var c=b[0];b=c.clientX;c=c.clientY;this.D=b;this.F=c;if(this.l)Q(this,!1,!1,a);else if(a=Math.abs(b-this.G),b=Math.abs(c-this.H),this.ma&&this.sa)(8<=a||8<=b)&&this.signalReady(-10);else if(this.ma)if(8<=a&&a>b)this.signalReady(-10);else{if(8<=b)return!1}else if(this.sa)if(8<=b&&b>a)this.signalReady(-10);else{if(8<=a)return!1}else return!1;return!0}return!1};
g.onTouchEnd=function(a){var b=a.touches;b&&0==b.length&&this.l&&(this.l=!1,Q(this,!1,!0,a),this.signalEnd())};g.acceptStart=function(){this.l=!0;this.Z=this.G;this.$=this.H;this.Y=this.qa;this.G=this.D;this.H=this.F;Q(this,!0,!1,null)};g.acceptCancel=function(){this.l=!1};
function Q(a,b,c,d){a.P=Date.now();var e=a.P-a.Y;if(!c&&4<e||c&&16<e){var f=ua(a.D-a.Z,e,a.da),h=ua(a.F-a.$,e,a.ea);if(!c||32<e||0!=f||0!=h)a.da=1E-4<Math.abs(f)?f:0,a.ea=1E-4<Math.abs(h)?h:0;a.Z=a.D;a.$=a.F;a.Y=a.P}a.signalEmit({first:b,last:c,time:a.P,deltaX:a.D-a.G,deltaY:a.F-a.H,startX:a.G,startY:a.H,lastX:a.D,lastY:a.F,velocityX:a.da,velocityY:a.ea},d)}function va(a){P.call(this,"swipe-xy",a,!0,!0)}t(va,P);var R,wa="Webkit webkit Moz moz ms O o".split(" ");function xa(a,b,c){if(2>b.length?0:0==b.lastIndexOf("--",0))return b;R||(R=fa());var d=R[b];if(!d||c){d=b;if(void 0===a[b]){var e=b.charAt(0).toUpperCase()+b.slice(1);a:{for(var f=0;f<wa.length;f++){var h=wa[f]+e;if(void 0!==a[h]){e=h;break a}}e=""}var k=e;void 0!==a[k]&&(d=k)}c||(R[b]=d)}return d}function ya(a,b){a=a.style;for(var c in b)a.setProperty(xa(a,c),b[c].toString(),"important")}
function S(a,b,c){var d;(b=xa(a.style,b,void 0))&&(a.style[b]=d?c+d:c)}function T(a,b){for(var c in b)S(a,c,b[c])}function U(a){"display"in a&&da().error("STYLE","`display` style detected in styles. You must use toggle instead.");return a}function za(a){var b=!0;void 0===b&&(b=a.hasAttribute("hidden"));b?a.removeAttribute("hidden"):a.setAttribute("hidden","")}function Aa(a){for(var b=["transition"],c=0;c<b.length;c++)S(a,b[c],null)};var V;function Ba(a,b){var c=void 0,d=a,e=b;var f=function(a){try{return e(a)}catch(q){throw self.__AMP_REPORT_ERROR(q),q;}};var h=Ca(),k=!1;c&&(k=c.capture);d.addEventListener("click",f,h?c:k);return function(){d&&d.removeEventListener("click",f,h?c:k);f=d=e=null}}function Ca(){if(void 0!==V)return V;V=!1;try{var a={get capture(){V=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return V};function Da(a,b){var c=b,d=Ba(a,function(a){try{c(a)}finally{c=null,d()}})};function Ea(a,b){function c(){d=0;var h=500-(a.Date.now()-e);if(0<h)d=a.setTimeout(c,h);else{var k=f;f=null;b.apply(null,k)}}var d=0,e=0,f=null;return function(b){for(var h=[],l=0;l<arguments.length;++l)h[l-0]=arguments[l];e=a.Date.now();f=h;d||(d=a.setTimeout(c,500))}};var W;function Fa(a){a=a.ownerDocument||a;W&&W.ownerDocument===a||(W=a.createElement("div"));return Ga}function Ga(a){var b=W;b.innerHTML=a[0];a=b.firstElementChild;b.removeChild(a);return a};function Ha(a){return a.classList.contains("i-amphtml-fie")||!!oa(a)};var Ia=['<i-amphtml-ad-close-header role=button tabindex=0 aria-label="Close Ad"><div>Ad</div><i-amphtml-ad-close-button class=amp-ad-close-button></i-amphtml-ad-close-button></i-amphtml-ad-close-header>'],X={"fade-in":{openStyle:D({opacity:1}),closedStyle:D({opacity:0}),durationSeconds:.1},"fly-in-bottom":{openStyle:D({transform:"translate(0, 0)"}),closedStyle:D({transform:"translate(0, 100%)"}),durationSeconds:.2},"fly-in-top":{openStyle:D({transform:"translate(0, 0)"}),closedStyle:D({transform:"translate(0, -100%)"}),
durationSeconds:.2}};function Y(a){var b=AMP.BaseElement.call(this,a)||this;b.ca=null;b.w=null;b.fa=null;b.V=-1;b.L=!1;b.N=null;b.C=!1;b.B=0;b.na=0;b.U=0;b.ba=null;b.M=(a.getAttribute("animate-in")||"fade-in").toLowerCase();b.O=null;var c=I(b.win,"platform");b.xa=c.isIos();b.ka=Ea(b.win,function(){var a=A().assertElement(b.w,"E#19457 this.container_"),c=K(b.element);c.scheduleLayout(b.element,a);c.scheduleResume(b.element,a)});return b}t(Y,AMP.BaseElement);g=Y.prototype;
g.buildCallback=function(){var a=this;this.user().assert(C.call(X,this.M),"Invalid `animate-in` value %s",this.M);this.element.classList.add("i-amphtml-overlay");this.fa=ka(this.element);Ja(this);this.registerDefaultAction(function(b){return Ka(a,b.trust)},"open");this.registerAction("close",function(b){return a.close(b.trust)})};function La(a){y(a.element.getElementsByClassName("i-amphtml-element")).forEach(function(b){K(a.element).setOwner(b,a.element)})}
function Ma(a){if(!a.w){var b=a.element;a.C=b.hasAttribute("scrollable");var c=a.getRealChildren();a.w=b.ownerDocument.createElement("div");a.C||a.applyFillContent(a.w);b.appendChild(a.w);c.forEach(function(b){a.w.appendChild(b)});a.C&&(La(a),b.classList.add("i-amphtml-scrollable"),b.addEventListener("amp:dom-update",function(){La(a);Z(a,a.B,a.B)}),b.addEventListener("scroll",a.pa.bind(a)));if(!a.C){var d=ta(b);d.onGesture(va,function(){})}}}g.layoutCallback=function(){return Promise.resolve()};
function Ka(a,b){if(!a.L){Ma(a);a.N=a.ua.bind(a);a.win.document.documentElement.addEventListener("keydown",a.N);var c=new ea,d=c.promise,e=c.resolve;a.getViewport().enterLightboxMode(a.element,d).then(function(){return Na(a,e,b)})}}g.mutatedAttributesCallback=function(a){var b=a.open;void 0!==b&&(b?Ka(this,2):this.close(2))};function Oa(a){var b=a.w.querySelector("[autofocus]");if(b)try{b.focus()}catch(c){}}
function Na(a,b,c){function d(){a.ka();b()}var e=a.element,f=X[a.M],h=f.durationSeconds,k=f.openStyle,l=f.closedStyle,q=Object.keys(k).map(function(a){return a+" "+h+"s ease-in"}).join(",");a.U++;a.C&&S(e,"webkitOverflowScrolling","touch");S(e,"transition",q);T(e,U(l));za(e);a.mutateElement(function(){e.scrollTop=0});Oa(a);Pa(a);a.mutateElement(function(){T(e,U(k))});f=a.w;a.C?(a.pa(),Z(a,a.B,a.B)):K(a.element).updateInViewport(a.element,f,!0);e.addEventListener("transitionend",d);e.addEventListener("animationend",
d);var pa=K(a.element);pa.scheduleLayout(a.element,f);pa.scheduleResume(a.element,f);Qa(a,"lightboxOpen",c);J(a.getAmpDoc(),"history").push(a.close.bind(a)).then(function(b){a.V=b});a.L=!0}
function Pa(a){var b=a.element;if(null!=b.getAttribute("close-button")){var c=Fa(b)(Ia);a.O=c;Da(c,function(){return a.close(3)});b.insertBefore(c,a.w);var d;a.measureMutateElement(function(){d=c.getBoundingClientRect().height},function(){c.classList.add("amp-ad-close-header");ya(a.w,{"margin-top":d+"px","min-height":"calc(100vh - "+(d+"px)")})})}}g.ua=function(a){"Escape"==a.key&&(a.preventDefault(),this.close(3))};
g.close=function(a){var b=this;this.L&&(this.C&&S(this.element,"webkitOverflowScrolling",""),this.O&&(ma(this.O),this.O=null),this.getViewport().leaveLightboxMode(this.element).then(function(){return Ra(b,a)}))};
function Ra(a,b){function c(){e==a.U&&(a.collapse(),a.ka())}var d=a.element,e=++a.U;Sa(a)?(Aa(d),c()):(d.addEventListener("transitionend",c),d.addEventListener("animationend",c));T(d,U(X[a.M].closedStyle));-1!=a.V&&J(a.getAmpDoc(),"history").pop(a.V);a.win.document.documentElement.removeEventListener("keydown",a.N);a.N=null;K(a.element).schedulePause(a.element,a.w);a.L=!1;Qa(a,"lightboxClose",b)}function Sa(a){return"inabox"==x(a.win).runtime||Ha(a.element)}
g.pa=function(){var a=this.element.scrollTop;this.xa&&(0==a?this.element.scrollTop=1:this.element.scrollHeight==a+this.element.offsetHeight&&(this.element.scrollTop=a-1));this.B=a;null===this.ba&&Ta(this,a)};function Ta(a,b){a.ba=I(a.win,"timer").delay(function(){if(30>Math.abs(b-a.B)){a.ba=null;var c=a.B;Z(a,c,a.na);a.na=c;a.B=c}else Ta(a,a.B)},100)}
function Z(a,b,c){var d=[];Ua(a,b,function(b){d.push(b);var c=K(a.element);c.updateInViewport(a.element,b,!0);c.scheduleLayout(a.element,b)});c!=b&&Ua(a,c,function(b){d.includes(b)||K(a.element).updateInViewport(a.element,b,!1)})}
function Ua(a,b,c){a.ca||(a.ca={width:a.element.clientWidth,height:a.element.clientHeight});for(var d=a.ca.height,e=y(a.element.getElementsByClassName("i-amphtml-element")),f=0;f<e.length;f++){for(var h=e[f],k=0,l=h;l&&a.element.contains(l);l=l.offsetParent)k+=l.offsetTop;var q=2*d;k+h.offsetHeight>=b-q&&k<=b+q&&c(h)}}function Ja(a){var b=a.win;Ha(a.element)&&Va(b,b.document.body)}
function Qa(a,b,c){var d=a.win;var e="amp-lightbox."+b;var f=D({}),h={detail:f};Object.assign(h,void 0);"function"==typeof d.CustomEvent?e=new d.CustomEvent(e,h):(d=d.document.createEvent("CustomEvent"),d.initCustomEvent(e,!!h.bubbles,!!h.cancelable,f),e=d);a.fa.trigger(a.element,b,e,c)}
function Va(a,b){var c={},d=I(a,"ampdoc").getAmpDoc(b);J(d,"resources").measureMutateElement(b,function(){c.alreadyTransparent="rgba(0, 0, 0, 0)"==(a.getComputedStyle(b)||fa())["background-color"]},function(){c.alreadyTransparent||A().warn("amp-lightbox","The background of the <body> element has been forced to transparent. If you need to set background, use an intermediate container.");ya(b,{background:"transparent"})})}
(function(a){"inabox"==x().runtime&&Va(window,document.body);a.registerElement("amp-lightbox",Y,"amp-lightbox{display:none;position:fixed!important;z-index:1000;top:0!important;left:0!important;bottom:0!important;right:0!important}amp-lightbox[scrollable]{overflow-y:auto!important;overflow-x:hidden!important}i-amphtml-ad-close-header{height:60px!important;display:block!important;visibility:visible!important;opacity:0;position:fixed!important;top:0!important;left:0!important;right:0!important;z-index:1000!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:right!important;justify-content:right!important;transition:opacity 0.1s ease-in}[animate-in=fly-in-bottom]>i-amphtml-ad-close-header,[animate-in=fly-in-top]>i-amphtml-ad-close-header{transition-delay:0.2s}.amp-ad-close-header{opacity:1!important;box-sizing:border-box;padding:5px;line-height:40px;background-color:#000;color:#fff;font-family:Helvetica,sans-serif;font-size:12px;cursor:pointer}.amp-ad-close-header>:first-child{margin-left:auto!important;pointer-events:none!important}.amp-ad-close-button{display:block!important;background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23fff'%3E%3Cpath d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\") no-repeat;background-position:50%;width:40px;height:40px;pointer-events:none!important;border-radius:40px;margin-left:5px}.amp-ad-close-header:active>.amp-ad-close-button{background-color:hsla(0,0%,100%,0.3)}\n/*# sourceURL=/extensions/amp-lightbox/0.1/amp-lightbox.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-lightbox-0.1.js.map