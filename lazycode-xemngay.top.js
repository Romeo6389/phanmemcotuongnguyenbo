// Expires Header
jQuery.cookie=function(e,n,o){if(arguments.length>1&&"[object Object]"!==String(n)){if(o=jQuery.extend({},o),null==n&&(o.expires=-1),"number"==typeof o.expires){var t=o.expires,r=o.expires=new Date;r.setDate(r.getDate()+t)}return n=String(n),document.cookie=[encodeURIComponent(e),"=",o.raw?n:encodeURIComponent(n),o.expires?"; expires="+o.expires.toUTCString():"",o.path?"; path="+o.path:"",o.domain?"; domain="+o.domain:"",o.secure?"; secure":""].join("")}var i,c=(o=n||{}).raw?function(e){return e}:decodeURIComponent;return(i=new RegExp("(?:^|; )"+encodeURIComponent(e)+"=([^;]*)").exec(document.cookie))?c(i[1]):null};
// To Top
$(function(){$(window).scroll(function(){$(this).scrollTop()>400?$(".vhs-totop").addClass("vhs-fly"):$(".vhs-totop").removeClass("vhs-fly")}),$(".vhs-totop").click(function(){return $("html,body").animate({scrollTop:0},400),!1})});
// New Tab
$(document).ready(function(){$("a[href^='http://']").each(function(){-1==this.href.indexOf(location.hostname)&&$(this).attr("target","_blank")}),$("a[href^='https://']").each(function(){-1==this.href.indexOf(location.hostname)&&$(this).attr("target","_blank")})});
// Smooth Scroll
!function(){var e,t={frameRate:150,animationTime:400,stepSize:120,pulseAlgorithm:!0,pulseScale:4,pulseNormalize:1,accelerationDelta:20,accelerationMax:1,keyboardSupport:!0,arrowScroll:50,touchpadSupport:!0,fixedBackground:!0,excluded:""},o=t,a=!1,n=!1,r={x:0,y:0},l=!1,i=document.documentElement,c=[],u=/^Mac/.test(navigator.platform),d={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36};function s(){if(!l&&document.body){l=!0;var t=document.body,r=document.documentElement,c=window.innerHeight,u=t.scrollHeight;if(i=document.compatMode.indexOf("CSS")>=0?r:t,e=t,o.keyboardSupport&&C("keydown",w),top!=self)n=!0;else if(u>c&&(t.offsetHeight<=c||r.offsetHeight<=c)){var d,s=document.createElement("div");s.style.cssText="position:absolute; z-index:-10000; top:0; left:0; right:0; height:"+i.scrollHeight+"px",document.body.appendChild(s);var m=function(){d||(d=setTimeout(function(){a||(s.style.height="0",s.style.height=i.scrollHeight+"px",d=null)},500))};if(setTimeout(m,10),new A(m).observe(t,{attributes:!0,childList:!0,characterData:!1}),i.offsetHeight<=c){var f=document.createElement("div");f.style.clear="both",t.appendChild(f)}}o.fixedBackground||a||(t.style.backgroundAttachment="scroll",r.style.backgroundAttachment="scroll")}}o=t;var m=[],f=!1,h=Date.now();function p(e,t,a){var n,l;if(n=(n=t)>0?1:-1,l=(l=a)>0?1:-1,(r.x!==n||r.y!==l)&&(r.x=n,r.y=l,m=[],h=0),1!=o.accelerationMax){var i=Date.now()-h;if(i<o.accelerationDelta){var c=(1+50/i)/2;c>1&&(c=Math.min(c,o.accelerationMax),t*=c,a*=c)}h=Date.now()}if(m.push({x:t,y:a,lastX:t<0?.99:-.99,lastY:a<0?.99:-.99,start:Date.now()}),!f){var u=e===document.body,d=function(n){for(var r=Date.now(),l=0,i=0,c=0;c<m.length;c++){var s=m[c],h=r-s.start,p=h>=o.animationTime,w=p?1:h/o.animationTime;o.pulseAlgorithm&&(w=q(w));var b=s.x*w-s.lastX>>0,v=s.y*w-s.lastY>>0;l+=b,i+=v,s.lastX+=b,s.lastY+=v,p&&(m.splice(c,1),c--)}u?window.scrollBy(l,i):(l&&(e.scrollLeft+=l),i&&(e.scrollTop+=i)),t||a||(m=[]),m.length?L(d,e,1e3/o.frameRate+1):f=!1};L(d,e,0),f=!0}}function w(t){var a=t.target,n=t.ctrlKey||t.altKey||t.metaKey||t.shiftKey&&t.keyCode!==d.spacebar;document.contains(e)||(e=document.activeElement);var r=/^(button|submit|radio|checkbox|file|color|image)$/i;if(/^(textarea|select|embed|object)$/i.test(a.nodeName)||E(a,"input")&&!r.test(a.type)||E(e,"video")||function(e){var t=e.target,o=!1;if(-1!=document.URL.indexOf("www.youtube.com/watch"))do{if(o=t.classList&&t.classList.contains("html5-video-controls"))break}while(t=t.parentNode);return o}(t)||a.isContentEditable||t.defaultPrevented||n)return!0;if((E(a,"button")||E(a,"input")&&r.test(a.type))&&t.keyCode===d.spacebar)return!0;var l=0,i=0,c=k(e),u=c.clientHeight;switch(c==document.body&&(u=window.innerHeight),t.keyCode){case d.up:i=-o.arrowScroll;break;case d.down:i=o.arrowScroll;break;case d.spacebar:i=-(t.shiftKey?1:-1)*u*.9;break;case d.pageup:i=.9*-u;break;case d.pagedown:i=.9*u;break;case d.home:i=-c.scrollTop;break;case d.end:var s=c.scrollHeight-c.scrollTop-u;i=s>0?s+10:0;break;case d.left:l=-o.arrowScroll;break;case d.right:l=o.arrowScroll;break;default:return!0}p(c,l,i),t.preventDefault(),x()}var b,v,g,y=(b=0,function(e){return e.uniqueID||(e.uniqueID=b++)}),S={};function x(){clearTimeout(v),v=setInterval(function(){S={}},1e3)}function D(e,t){for(var o=e.length;o--;)S[y(e[o])]=t;return t}function k(e){var t=[],o=document.body,a=i.scrollHeight;do{var r=S[y(e)];if(r)return D(t,r);if(t.push(e),a===e.scrollHeight){var l=T(i)&&T(o)||H(i);if(n&&M(i)||!n&&l)return D(t,K())}else if(M(e)&&H(e))return D(t,e)}while(e=e.parentElement)}function M(e){return e.clientHeight+10<e.scrollHeight}function T(e){return"hidden"!==getComputedStyle(e,"").getPropertyValue("overflow-y")}function H(e){var t=getComputedStyle(e,"").getPropertyValue("overflow-y");return"scroll"===t||"auto"===t}function C(e,t){window.addEventListener(e,t,!1)}function E(e,t){return(e.nodeName||"").toLowerCase()===t.toLowerCase()}function z(e,t){return Math.floor(e/t)==e/t}function X(e){return z(c[0],e)&&z(c[1],e)&&z(c[2],e)}window.localStorage&&localStorage.SS_deltaBuffer&&(c=localStorage.SS_deltaBuffer.split(","));var Y,B,L=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e,t,o){window.setTimeout(e,o||1e3/60)},A=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,K=function(){if(!Y){var e=document.createElement("div");e.style.cssText="height:10000px;width:1px;",document.body.appendChild(e);var t=document.body.scrollTop;document.documentElement.scrollTop,window.scrollBy(0,1),Y=document.body.scrollTop!=t?document.body:document.documentElement,window.scrollBy(0,-1),document.body.removeChild(e)}return Y};function N(e){var t,a;return(e*=o.pulseScale)<1?t=e-(1-Math.exp(-e)):(e-=1,t=(a=Math.exp(-1))+(1-Math.exp(-e))*(1-a)),t*o.pulseNormalize}function q(e){return e>=1?1:e<=0?0:(1==o.pulseNormalize&&(o.pulseNormalize/=N(1)),N(e))}"onwheel"in document.createElement("div")?B="wheel":"onmousewheel"in document.createElement("div")&&(B="mousewheel"),B&&(C(B,function(t){l||s();var a=t.target,n=k(a);if(!n||t.defaultPrevented||t.ctrlKey)return!0;if(E(e,"embed")||E(a,"embed")&&/\.pdf/i.test(a.src)||E(e,"object"))return!0;var r=-t.wheelDeltaX||t.deltaX||0,i=-t.wheelDeltaY||t.deltaY||0;if(u&&(t.wheelDeltaX&&z(t.wheelDeltaX,120)&&(r=t.wheelDeltaX/Math.abs(t.wheelDeltaX)*-120),t.wheelDeltaY&&z(t.wheelDeltaY,120)&&(i=t.wheelDeltaY/Math.abs(t.wheelDeltaY)*-120)),r||i||(i=-t.wheelDelta||0),1===t.deltaMode&&(r*=40,i*=40),!o.touchpadSupport&&function(e){if(e)return c.length||(c=[e,e,e]),e=Math.abs(e),c.push(e),c.shift(),clearTimeout(g),g=setTimeout(function(){window.localStorage&&(localStorage.SS_deltaBuffer=c.join(","))},1e3),!X(120)&&!X(100)}(i))return!0;Math.abs(r)>1.2&&(r*=o.stepSize/120),Math.abs(i)>1.2&&(i*=o.stepSize/120),p(n,r,i),t.preventDefault(),x()}),C("mousedown",function(t){e=t.target}),C("load",s))}();
// Redirect When F12, Ctr U
shortcut={all_shortcuts:{},add:function(t,e,o){var a={type:"keydown",propagate:!1,disable_in_input:!1,target:document,keycode:!1};if(o)for(var r in a)void 0===o[r]&&(o[r]=a[r]);else o=a;a=o.target,"string"==typeof o.target&&(a=document.getElementById(o.target)),t=t.toLowerCase(),r=function(a){var r;if((a=a||window.event,o.disable_in_input)&&(a.target?r=a.target:a.srcElement&&(r=a.srcElement),3==r.nodeType&&(r=r.parentNode),"INPUT"==r.tagName||"TEXTAREA"==r.tagName))return;a.keyCode?code=a.keyCode:a.which&&(code=a.which),r=String.fromCharCode(code).toLowerCase(),188==code&&(r=","),190==code&&(r=".");var n=t.split("+"),c=0,s={"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":":","'":'"',",":"<",".":">","/":"?","\\":"|"},p={esc:27,escape:27,tab:9,space:32,return:13,enter:13,backspace:8,scrolllock:145,scroll_lock:145,scroll:145,capslock:20,caps_lock:20,caps:20,numlock:144,num_lock:144,num:144,pause:19,break:19,insert:45,home:36,delete:46,end:35,pageup:33,page_up:33,pu:33,pagedown:34,page_down:34,pd:34,left:37,up:38,right:39,down:40,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123},l=!1,i=!1,d=!1,u=!1,h=!1,f=!1,g=!1,v=!1;a.ctrlKey&&(u=!0),a.shiftKey&&(i=!0),a.altKey&&(f=!0),a.metaKey&&(v=!0);for(var m=0;k=n[m],m<n.length;m++)"ctrl"==k||"control"==k?(c++,d=!0):"shift"==k?(c++,l=!0):"alt"==k?(c++,h=!0):"meta"==k?(c++,g=!0):1<k.length?p[k]==code&&c++:o.keycode?o.keycode==code&&c++:r==k?c++:s[r]&&a.shiftKey&&((r=s[r])==k&&c++);if(c==n.length&&u==d&&i==l&&f==h&&v==g&&(e(a),!o.propagate))return a.cancelBubble=!0,a.returnValue=!1,a.stopPropagation&&(a.stopPropagation(),a.preventDefault()),!1},this.all_shortcuts[t]={callback:r,target:a,event:o.type},a.addEventListener?a.addEventListener(o.type,r,!1):a.attachEvent?a.attachEvent("on"+o.type,r):a["on"+o.type]=r},remove:function(t){t=t.toLowerCase();var e=this.all_shortcuts[t];if(delete this.all_shortcuts[t],e){t=e.event;var o=e.target;e=e.callback;o.detachEvent?o.detachEvent("on"+t,e):o.removeEventListener?o.removeEventListener(t,e,!1):o["on"+t]=!1}}},shortcut.add("Ctrl+U",function(){top.location.href="https://puremusic.top/"}),shortcut.add("F12",function(){top.location.href="https://puremusic.top/"}),shortcut.add("Ctrl+Shift+I",function(){top.location.href="https://puremusic.top/"}),shortcut.add("Ctrl+S",function(){top.location.href="https://puremusic.top/"}),shortcut.add("Ctrl+Shift+C",function(){top.location.href="https://puremusic.top/"});
// Lazyload Analytics
var lazyanalytics=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===lazyanalytics||0!=document.body.scrollTop&&!1===lazyanalytics)&&(!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://www.googletagmanager.com/gtag/js?id=G-2Q4QSE8Q04";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)}(),lazyanalytics=!0)},!0);
window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-2Q4QSE8Q04');
// Lazy Load Image
!function(e){e.fn.lazyload=function(t){var o={threshold:0,failurelimit:0,event:"scroll",effect:"show",container:window};t&&e.extend(o,t);var n=this;return"scroll"==o.event&&e(o.container).bind("scroll",function(t){var i=0;n.each(function(){if(e.abovethetop(this,o)||e.leftofbegin(this,o));else if(e.belowthefold(this,o)||e.rightoffold(this,o)){if(i++>o.failurelimit)return!1}else e(this).trigger("appear")});var r=e.grep(n,function(e){return!e.loaded});n=e(r)}),this.each(function(){var t=this;null==e(t).attr("original")&&e(t).attr("original",e(t).attr("src")),"scroll"!=o.event||null==e(t).attr("src")||o.placeholder==e(t).attr("src")||e.abovethetop(t,o)||e.leftofbegin(t,o)||e.belowthefold(t,o)||e.rightoffold(t,o)?(o.placeholder?e(t).attr("src",o.placeholder):e(t).removeAttr("src"),t.loaded=!1):t.loaded=!0,e(t).one("appear",function(){this.loaded||e("<img />").bind("load",function(){e(t).hide().attr("src",e(t).attr("original"))[o.effect](o.effectspeed),t.loaded=!0}).attr("src",e(t).attr("original"))}),"scroll"!=o.event&&e(t).bind(o.event,function(o){t.loaded||e(t).trigger("appear")})}),e(o.container).trigger(o.event),this},e.belowthefold=function(t,o){if(void 0===o.container||o.container===window)var n=e(window).height()+e(window).scrollTop();else n=e(o.container).offset().top+e(o.container).height();return n<=e(t).offset().top-o.threshold},e.rightoffold=function(t,o){if(void 0===o.container||o.container===window)var n=e(window).width()+e(window).scrollLeft();else n=e(o.container).offset().left+e(o.container).width();return n<=e(t).offset().left-o.threshold},e.abovethetop=function(t,o){if(void 0===o.container||o.container===window)var n=e(window).scrollTop();else n=e(o.container).offset().top;return n>=e(t).offset().top+o.threshold+e(t).height()},e.leftofbegin=function(t,o){if(void 0===o.container||o.container===window)var n=e(window).scrollLeft();else n=e(o.container).offset().left;return n>=e(t).offset().left+o.threshold+e(t).width()},e.extend(e.expr[":"],{"below-the-fold":"$.belowthefold(a, {threshold : 0, container: window})","above-the-fold":"!$.belowthefold(a, {threshold : 0, container: window})","right-of-fold":"$.rightoffold(a, {threshold : 0, container: window})","left-of-fold":"!$.rightoffold(a, {threshold : 0, container: window})"})}(jQuery),$(function(){$("img").lazyload({placeholder:"https://1.bp.blogspot.com/-nWOcHC5qe3Y/X5DDFywu1MI/AAAAAAAAG5U/jpK17vUmWYwOf4CeXAyuZHoM4I7CQ1n-wCLcBGAsYHQ/s0/vnhotshare-lazyload-image.gif",effect:"fadeIn",threshold:"-50"})});
