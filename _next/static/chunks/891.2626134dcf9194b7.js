(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[891],{3454:function(t,e,r){"use strict";var n,o;t.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(o=r.g.process)?void 0:o.env)?r.g.process:r(7663)},7663:function(t){!function(){var e={229:function(t){var e,r,n,o=t.exports={};function a(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}function s(t){if(e===setTimeout)return setTimeout(t,0);if((e===a||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(r){try{return e.call(null,t,0)}catch(r){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:a}catch(t){e=a}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(t){r=i}}();var u=[],c=!1,p=-1;function l(){c&&n&&(c=!1,n.length?u=n.concat(u):p=-1,u.length&&f())}function f(){if(!c){var t=s(l);c=!0;for(var e=u.length;e;){for(n=u,u=[];++p<e;)n&&n[p].run();p=-1,e=u.length}n=null,c=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function v(t,e){this.fun=t,this.array=e}function d(){}o.nextTick=function(t){var e=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];u.push(new v(t,e)),1!==u.length||c||s(f)},v.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=d,o.addListener=d,o.once=d,o.off=d,o.removeListener=d,o.removeAllListeners=d,o.emit=d,o.prependListener=d,o.prependOnceListener=d,o.listeners=function(t){return[]},o.binding=function(t){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={exports:{}},i=!0;try{e[t](a,a.exports,n),i=!1}finally{i&&delete r[t]}return a.exports}n.ab="//";var o=n(229);t.exports=o}()},5459:function(t,e,r){var n,o=r(3454);"undefined"!=typeof self&&self,t.exports=(n=r(7294),(()=>{var t={7403:(t,e,r)=>{"use strict";r.d(e,{default:()=>O});var n=r(4087),o=r.n(n);let a=function(t){return new RegExp(/<[a-z][\s\S]*>/i).test(t)},i=function(t,e){return Math.floor(Math.random()*(e-t+1))+t};var s="TYPE_CHARACTER",u="REMOVE_CHARACTER",c="REMOVE_ALL",p="REMOVE_LAST_VISIBLE_NODE",l="PAUSE_FOR",f="CALL_FUNCTION",v="ADD_HTML_TAG_ELEMENT",d="CHANGE_DELETE_SPEED",h="CHANGE_DELAY",y="CHANGE_CURSOR",b="PASTE_STRING",m="HTML_TAG";function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function w(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?_(Object(r),!0).forEach(function(e){E(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function x(t){return function(t){if(Array.isArray(t))return j(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return j(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?j(t,e):void 0}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function E(t,e,r){return(e=T(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function T(t){var e=function(t,e){if("object"!==g(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==g(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===g(e)?e:String(e)}let O=function(){var t;function e(t,r){var g=this;if(function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,e),E(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),E(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),E(this,"setupWrapperElement",function(){g.state.elements.container&&(g.state.elements.wrapper.className=g.options.wrapperClassName,g.state.elements.cursor.className=g.options.cursorClassName,g.state.elements.cursor.innerHTML=g.options.cursor,g.state.elements.container.innerHTML="",g.state.elements.container.appendChild(g.state.elements.wrapper),g.state.elements.container.appendChild(g.state.elements.cursor))}),E(this,"start",function(){return g.state.eventLoopPaused=!1,g.runEventLoop(),g}),E(this,"pause",function(){return g.state.eventLoopPaused=!0,g}),E(this,"stop",function(){return g.state.eventLoop&&((0,n.cancel)(g.state.eventLoop),g.state.eventLoop=null),g}),E(this,"pauseFor",function(t){return g.addEventToQueue(l,{ms:t}),g}),E(this,"typeOutAllStrings",function(){return"string"==typeof g.options.strings?g.typeString(g.options.strings).pauseFor(g.options.pauseFor):g.options.strings.forEach(function(t){g.typeString(t).pauseFor(g.options.pauseFor).deleteAll(g.options.deleteSpeed)}),g}),E(this,"typeString",function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(a(t))return g.typeOutHTMLString(t,e);if(t){var r=(g.options||{}).stringSplitter,n="function"==typeof r?r(t):t.split("");g.typeCharacters(n,e)}return g}),E(this,"pasteString",function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return a(t)?g.typeOutHTMLString(t,e,!0):(t&&g.addEventToQueue(b,{character:t,node:e}),g)}),E(this,"typeOutHTMLString",function(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2?arguments[2]:void 0,o=((e=document.createElement("div")).innerHTML=t,e.childNodes);if(o.length>0)for(var a=0;a<o.length;a++){var i=o[a],s=i.innerHTML;i&&3!==i.nodeType?(i.innerHTML="",g.addEventToQueue(v,{node:i,parentNode:r}),n?g.pasteString(s,i):g.typeString(s,i)):i.textContent&&(n?g.pasteString(i.textContent,r):g.typeString(i.textContent,r))}return g}),E(this,"deleteAll",function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"natural";return g.addEventToQueue(c,{speed:t}),g}),E(this,"changeDeleteSpeed",function(t){if(!t)throw Error("Must provide new delete speed");return g.addEventToQueue(d,{speed:t}),g}),E(this,"changeDelay",function(t){if(!t)throw Error("Must provide new delay");return g.addEventToQueue(h,{delay:t}),g}),E(this,"changeCursor",function(t){if(!t)throw Error("Must provide new cursor");return g.addEventToQueue(y,{cursor:t}),g}),E(this,"deleteChars",function(t){if(!t)throw Error("Must provide amount of characters to delete");for(var e=0;e<t;e++)g.addEventToQueue(u);return g}),E(this,"callFunction",function(t,e){if(!t||"function"!=typeof t)throw Error("Callback must be a function");return g.addEventToQueue(f,{cb:t,thisArg:e}),g}),E(this,"typeCharacters",function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!t||!Array.isArray(t))throw Error("Characters must be an array");return t.forEach(function(t){g.addEventToQueue(s,{character:t,node:e})}),g}),E(this,"removeCharacters",function(t){if(!t||!Array.isArray(t))throw Error("Characters must be an array");return t.forEach(function(){g.addEventToQueue(u)}),g}),E(this,"addEventToQueue",function(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return g.addEventToStateProperty(t,e,r,"eventQueue")}),E(this,"addReverseCalledEvent",function(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return g.options.loop?g.addEventToStateProperty(t,e,r,"reverseCalledEvents"):g}),E(this,"addEventToStateProperty",function(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3?arguments[3]:void 0,o={eventName:t,eventArgs:e||{}};return g.state[n]=r?[o].concat(x(g.state[n])):[].concat(x(g.state[n]),[o]),g}),E(this,"runEventLoop",function(){g.state.lastFrameTime||(g.state.lastFrameTime=Date.now());var t=Date.now(),e=t-g.state.lastFrameTime;if(!g.state.eventQueue.length){if(!g.options.loop)return;g.state.eventQueue=x(g.state.calledEvents),g.state.calledEvents=[],g.options=w({},g.state.initialOptions)}if(g.state.eventLoop=o()(g.runEventLoop),!g.state.eventLoopPaused){if(g.state.pauseUntil){if(t<g.state.pauseUntil)return;g.state.pauseUntil=null}var r,n=x(g.state.eventQueue),a=n.shift();if(!(e<=(r=a.eventName===p||a.eventName===u?"natural"===g.options.deleteSpeed?i(40,80):g.options.deleteSpeed:"natural"===g.options.delay?i(120,160):g.options.delay))){var _=a.eventName,j=a.eventArgs;switch(g.logInDevMode({currentEvent:a,state:g.state,delay:r}),_){case b:case s:var E=j.character,T=j.node,O=document.createTextNode(E),S=O;g.options.onCreateTextNode&&"function"==typeof g.options.onCreateTextNode&&(S=g.options.onCreateTextNode(E,O)),S&&(T?T.appendChild(S):g.state.elements.wrapper.appendChild(S)),g.state.visibleNodes=[].concat(x(g.state.visibleNodes),[{type:"TEXT_NODE",character:E,node:S}]);break;case u:n.unshift({eventName:p,eventArgs:{removingCharacterNode:!0}});break;case l:var A=a.eventArgs.ms;g.state.pauseUntil=Date.now()+parseInt(A);break;case f:var N=a.eventArgs,C=N.cb,P=N.thisArg;C.call(P,{elements:g.state.elements});break;case v:var k=a.eventArgs,L=k.node,D=k.parentNode;D?D.appendChild(L):g.state.elements.wrapper.appendChild(L),g.state.visibleNodes=[].concat(x(g.state.visibleNodes),[{type:m,node:L,parentNode:D||g.state.elements.wrapper}]);break;case c:var M=g.state.visibleNodes,R=j.speed,z=[];R&&z.push({eventName:d,eventArgs:{speed:R,temp:!0}});for(var F=0,I=M.length;F<I;F++)z.push({eventName:p,eventArgs:{removingCharacterNode:!1}});R&&z.push({eventName:d,eventArgs:{speed:g.options.deleteSpeed,temp:!0}}),n.unshift.apply(n,z);break;case p:var Q=a.eventArgs.removingCharacterNode;if(g.state.visibleNodes.length){var U=g.state.visibleNodes.pop(),H=U.type,B=U.node,q=U.character;g.options.onRemoveNode&&"function"==typeof g.options.onRemoveNode&&g.options.onRemoveNode({node:B,character:q}),B&&B.parentNode.removeChild(B),H===m&&Q&&n.unshift({eventName:p,eventArgs:{}})}break;case d:g.options.deleteSpeed=a.eventArgs.speed;break;case h:g.options.delay=a.eventArgs.delay;break;case y:g.options.cursor=a.eventArgs.cursor,g.state.elements.cursor.innerHTML=a.eventArgs.cursor}g.options.loop&&(a.eventName===p||a.eventArgs&&a.eventArgs.temp||(g.state.calledEvents=[].concat(x(g.state.calledEvents),[a]))),g.state.eventQueue=n,g.state.lastFrameTime=t}}}),t){if("string"==typeof t){var _=document.querySelector(t);if(!_)throw Error("Could not find container element");this.state.elements.container=_}else this.state.elements.container=t}r&&(this.options=w(w({},this.options),r)),this.state.initialOptions=w({},this.options),this.init()}return t=[{key:"init",value:function(){var t;this.setupWrapperElement(),this.addEventToQueue(y,{cursor:this.options.cursor},!0),this.addEventToQueue(c,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||((t=document.createElement("style")).appendChild(document.createTextNode(".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}")),document.head.appendChild(t),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),!0===this.options.autoStart&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(t){this.options.devMode&&console.log(t)}}],function(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,T(n.key),n)}}(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}()},8552:(t,e,r)=>{var n=r(852)(r(5639),"DataView");t.exports=n},1989:(t,e,r)=>{var n=r(1789),o=r(401),a=r(7667),i=r(1327),s=r(1866);function u(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}u.prototype.clear=n,u.prototype.delete=o,u.prototype.get=a,u.prototype.has=i,u.prototype.set=s,t.exports=u},8407:(t,e,r)=>{var n=r(7040),o=r(4125),a=r(2117),i=r(7518),s=r(4705);function u(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}u.prototype.clear=n,u.prototype.delete=o,u.prototype.get=a,u.prototype.has=i,u.prototype.set=s,t.exports=u},7071:(t,e,r)=>{var n=r(852)(r(5639),"Map");t.exports=n},3369:(t,e,r)=>{var n=r(4785),o=r(1285),a=r(6e3),i=r(9916),s=r(5265);function u(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}u.prototype.clear=n,u.prototype.delete=o,u.prototype.get=a,u.prototype.has=i,u.prototype.set=s,t.exports=u},3818:(t,e,r)=>{var n=r(852)(r(5639),"Promise");t.exports=n},8525:(t,e,r)=>{var n=r(852)(r(5639),"Set");t.exports=n},8668:(t,e,r)=>{var n=r(3369),o=r(619),a=r(2385);function i(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new n;++e<r;)this.add(t[e])}i.prototype.add=i.prototype.push=o,i.prototype.has=a,t.exports=i},6384:(t,e,r)=>{var n=r(8407),o=r(7465),a=r(3779),i=r(7599),s=r(4758),u=r(4309);function c(t){var e=this.__data__=new n(t);this.size=e.size}c.prototype.clear=o,c.prototype.delete=a,c.prototype.get=i,c.prototype.has=s,c.prototype.set=u,t.exports=c},2705:(t,e,r)=>{var n=r(5639).Symbol;t.exports=n},1149:(t,e,r)=>{var n=r(5639).Uint8Array;t.exports=n},577:(t,e,r)=>{var n=r(852)(r(5639),"WeakMap");t.exports=n},4963:t=>{t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,a=[];++r<n;){var i=t[r];e(i,r,t)&&(a[o++]=i)}return a}},4636:(t,e,r)=>{var n=r(2545),o=r(5694),a=r(1469),i=r(4144),s=r(5776),u=r(6719),c=Object.prototype.hasOwnProperty;t.exports=function(t,e){var r=a(t),p=!r&&o(t),l=!r&&!p&&i(t),f=!r&&!p&&!l&&u(t),v=r||p||l||f,d=v?n(t.length,String):[],h=d.length;for(var y in t)!e&&!c.call(t,y)||v&&("length"==y||l&&("offset"==y||"parent"==y)||f&&("buffer"==y||"byteLength"==y||"byteOffset"==y)||s(y,h))||d.push(y);return d}},2488:t=>{t.exports=function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}},2908:t=>{t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}},8470:(t,e,r)=>{var n=r(7813);t.exports=function(t,e){for(var r=t.length;r--;)if(n(t[r][0],e))return r;return -1}},8866:(t,e,r)=>{var n=r(2488),o=r(1469);t.exports=function(t,e,r){var a=e(t);return o(t)?a:n(a,r(t))}},4239:(t,e,r)=>{var n=r(2705),o=r(9607),a=r(2333),i=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":i&&i in Object(t)?o(t):a(t)}},9454:(t,e,r)=>{var n=r(4239),o=r(7005);t.exports=function(t){return o(t)&&"[object Arguments]"==n(t)}},939:(t,e,r)=>{var n=r(2492),o=r(7005);t.exports=function t(e,r,a,i,s){return e===r||(null!=e&&null!=r&&(o(e)||o(r))?n(e,r,a,i,t,s):e!=e&&r!=r)}},2492:(t,e,r)=>{var n=r(6384),o=r(7114),a=r(8351),i=r(6096),s=r(4160),u=r(1469),c=r(4144),p=r(6719),l="[object Arguments]",f="[object Array]",v="[object Object]",d=Object.prototype.hasOwnProperty;t.exports=function(t,e,r,h,y,b){var m=u(t),g=u(e),_=m?f:s(t),w=g?f:s(e),x=(_=_==l?v:_)==v,j=(w=w==l?v:w)==v,E=_==w;if(E&&c(t)){if(!c(e))return!1;m=!0,x=!1}if(E&&!x)return b||(b=new n),m||p(t)?o(t,e,r,h,y,b):a(t,e,_,r,h,y,b);if(!(1&r)){var T=x&&d.call(t,"__wrapped__"),O=j&&d.call(e,"__wrapped__");if(T||O){var S=T?t.value():t,A=O?e.value():e;return b||(b=new n),y(S,A,r,h,b)}}return!!E&&(b||(b=new n),i(t,e,r,h,y,b))}},8458:(t,e,r)=>{var n=r(3560),o=r(5346),a=r(3218),i=r(346),s=/^\[object .+?Constructor\]$/,u=Object.prototype,c=Function.prototype.toString,p=u.hasOwnProperty,l=RegExp("^"+c.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!a(t)||o(t))&&(n(t)?l:s).test(i(t))}},8749:(t,e,r)=>{var n=r(4239),o=r(1780),a=r(7005),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1,t.exports=function(t){return a(t)&&o(t.length)&&!!i[n(t)]}},280:(t,e,r)=>{var n=r(5726),o=r(6916),a=Object.prototype.hasOwnProperty;t.exports=function(t){if(!n(t))return o(t);var e=[];for(var r in Object(t))a.call(t,r)&&"constructor"!=r&&e.push(r);return e}},2545:t=>{t.exports=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}},1717:t=>{t.exports=function(t){return function(e){return t(e)}}},4757:t=>{t.exports=function(t,e){return t.has(e)}},4429:(t,e,r)=>{var n=r(5639)["__core-js_shared__"];t.exports=n},7114:(t,e,r)=>{var n=r(8668),o=r(2908),a=r(4757);t.exports=function(t,e,r,i,s,u){var c=1&r,p=t.length,l=e.length;if(p!=l&&!(c&&l>p))return!1;var f=u.get(t),v=u.get(e);if(f&&v)return f==e&&v==t;var d=-1,h=!0,y=2&r?new n:void 0;for(u.set(t,e),u.set(e,t);++d<p;){var b=t[d],m=e[d];if(i)var g=c?i(m,b,d,e,t,u):i(b,m,d,t,e,u);if(void 0!==g){if(g)continue;h=!1;break}if(y){if(!o(e,function(t,e){if(!a(y,e)&&(b===t||s(b,t,r,i,u)))return y.push(e)})){h=!1;break}}else if(b!==m&&!s(b,m,r,i,u)){h=!1;break}}return u.delete(t),u.delete(e),h}},8351:(t,e,r)=>{var n=r(2705),o=r(1149),a=r(7813),i=r(7114),s=r(8776),u=r(1814),c=n?n.prototype:void 0,p=c?c.valueOf:void 0;t.exports=function(t,e,r,n,c,l,f){switch(r){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)break;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!l(new o(t),new o(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return a(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var v=s;case"[object Set]":var d=1&n;if(v||(v=u),t.size!=e.size&&!d)break;var h=f.get(t);if(h)return h==e;n|=2,f.set(t,e);var y=i(v(t),v(e),n,c,l,f);return f.delete(t),y;case"[object Symbol]":if(p)return p.call(t)==p.call(e)}return!1}},6096:(t,e,r)=>{var n=r(8234),o=Object.prototype.hasOwnProperty;t.exports=function(t,e,r,a,i,s){var u=1&r,c=n(t),p=c.length;if(p!=n(e).length&&!u)return!1;for(var l=p;l--;){var f=c[l];if(!(u?f in e:o.call(e,f)))return!1}var v=s.get(t),d=s.get(e);if(v&&d)return v==e&&d==t;var h=!0;s.set(t,e),s.set(e,t);for(var y=u;++l<p;){var b=t[f=c[l]],m=e[f];if(a)var g=u?a(m,b,f,e,t,s):a(b,m,f,t,e,s);if(!(void 0===g?b===m||i(b,m,r,a,s):g)){h=!1;break}y||(y="constructor"==f)}if(h&&!y){var _=t.constructor,w=e.constructor;_==w||!("constructor"in t)||!("constructor"in e)||"function"==typeof _&&_ instanceof _&&"function"==typeof w&&w instanceof w||(h=!1)}return s.delete(t),s.delete(e),h}},1957:(t,e,r)=>{var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;t.exports=n},8234:(t,e,r)=>{var n=r(8866),o=r(9551),a=r(3674);t.exports=function(t){return n(t,a,o)}},5050:(t,e,r)=>{var n=r(7019);t.exports=function(t,e){var r=t.__data__;return n(e)?r["string"==typeof e?"string":"hash"]:r.map}},852:(t,e,r)=>{var n=r(8458),o=r(7801);t.exports=function(t,e){var r=o(t,e);return n(r)?r:void 0}},9607:(t,e,r)=>{var n=r(2705),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,s=n?n.toStringTag:void 0;t.exports=function(t){var e=a.call(t,s),r=t[s];try{t[s]=void 0;var n=!0}catch(t){}var o=i.call(t);return n&&(e?t[s]=r:delete t[s]),o}},9551:(t,e,r)=>{var n=r(4963),o=r(479),a=Object.prototype.propertyIsEnumerable,i=Object.getOwnPropertySymbols,s=i?function(t){return null==t?[]:n(i(t=Object(t)),function(e){return a.call(t,e)})}:o;t.exports=s},4160:(t,e,r)=>{var n=r(8552),o=r(7071),a=r(3818),i=r(8525),s=r(577),u=r(4239),c=r(346),p="[object Map]",l="[object Promise]",f="[object Set]",v="[object WeakMap]",d="[object DataView]",h=c(n),y=c(o),b=c(a),m=c(i),g=c(s),_=u;(n&&_(new n(new ArrayBuffer(1)))!=d||o&&_(new o)!=p||a&&_(a.resolve())!=l||i&&_(new i)!=f||s&&_(new s)!=v)&&(_=function(t){var e=u(t),r="[object Object]"==e?t.constructor:void 0,n=r?c(r):"";if(n)switch(n){case h:return d;case y:return p;case b:return l;case m:return f;case g:return v}return e}),t.exports=_},7801:t=>{t.exports=function(t,e){return null==t?void 0:t[e]}},1789:(t,e,r)=>{var n=r(4536);t.exports=function(){this.__data__=n?n(null):{},this.size=0}},401:t=>{t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},7667:(t,e,r)=>{var n=r(4536),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(n){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return o.call(e,t)?e[t]:void 0}},1327:(t,e,r)=>{var n=r(4536),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return n?void 0!==e[t]:o.call(e,t)}},1866:(t,e,r)=>{var n=r(4536);t.exports=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=n&&void 0===e?"__lodash_hash_undefined__":e,this}},5776:t=>{var e=/^(?:0|[1-9]\d*)$/;t.exports=function(t,r){var n=typeof t;return!!(r=null==r?9007199254740991:r)&&("number"==n||"symbol"!=n&&e.test(t))&&t>-1&&t%1==0&&t<r}},7019:t=>{t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},5346:(t,e,r)=>{var n,o=r(4429),a=(n=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";t.exports=function(t){return!!a&&a in t}},5726:t=>{var e=Object.prototype;t.exports=function(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||e)}},7040:t=>{t.exports=function(){this.__data__=[],this.size=0}},4125:(t,e,r)=>{var n=r(8470),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,r=n(e,t);return!(r<0||(r==e.length-1?e.pop():o.call(e,r,1),--this.size,0))}},2117:(t,e,r)=>{var n=r(8470);t.exports=function(t){var e=this.__data__,r=n(e,t);return r<0?void 0:e[r][1]}},7518:(t,e,r)=>{var n=r(8470);t.exports=function(t){return n(this.__data__,t)>-1}},4705:(t,e,r)=>{var n=r(8470);t.exports=function(t,e){var r=this.__data__,o=n(r,t);return o<0?(++this.size,r.push([t,e])):r[o][1]=e,this}},4785:(t,e,r)=>{var n=r(1989),o=r(8407),a=r(7071);t.exports=function(){this.size=0,this.__data__={hash:new n,map:new(a||o),string:new n}}},1285:(t,e,r)=>{var n=r(5050);t.exports=function(t){var e=n(this,t).delete(t);return this.size-=e?1:0,e}},6e3:(t,e,r)=>{var n=r(5050);t.exports=function(t){return n(this,t).get(t)}},9916:(t,e,r)=>{var n=r(5050);t.exports=function(t){return n(this,t).has(t)}},5265:(t,e,r)=>{var n=r(5050);t.exports=function(t,e){var r=n(this,t),o=r.size;return r.set(t,e),this.size+=r.size==o?0:1,this}},8776:t=>{t.exports=function(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r}},4536:(t,e,r)=>{var n=r(852)(Object,"create");t.exports=n},6916:(t,e,r)=>{var n=r(5569)(Object.keys,Object);t.exports=n},1167:(t,e,r)=>{t=r.nmd(t);var n=r(1957),o=e&&!e.nodeType&&e,a=o&&t&&!t.nodeType&&t,i=a&&a.exports===o&&n.process,s=function(){try{return a&&a.require&&a.require("util").types||i&&i.binding&&i.binding("util")}catch(t){}}();t.exports=s},2333:t=>{var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},5569:t=>{t.exports=function(t,e){return function(r){return t(e(r))}}},5639:(t,e,r)=>{var n=r(1957),o="object"==typeof self&&self&&self.Object===Object&&self,a=n||o||Function("return this")();t.exports=a},619:t=>{t.exports=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this}},2385:t=>{t.exports=function(t){return this.__data__.has(t)}},1814:t=>{t.exports=function(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}},7465:(t,e,r)=>{var n=r(8407);t.exports=function(){this.__data__=new n,this.size=0}},3779:t=>{t.exports=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}},7599:t=>{t.exports=function(t){return this.__data__.get(t)}},4758:t=>{t.exports=function(t){return this.__data__.has(t)}},4309:(t,e,r)=>{var n=r(8407),o=r(7071),a=r(3369);t.exports=function(t,e){var r=this.__data__;if(r instanceof n){var i=r.__data__;if(!o||i.length<199)return i.push([t,e]),this.size=++r.size,this;r=this.__data__=new a(i)}return r.set(t,e),this.size=r.size,this}},346:t=>{var e=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return e.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},7813:t=>{t.exports=function(t,e){return t===e||t!=t&&e!=e}},5694:(t,e,r)=>{var n=r(9454),o=r(7005),a=Object.prototype,i=a.hasOwnProperty,s=a.propertyIsEnumerable,u=n(function(){return arguments}())?n:function(t){return o(t)&&i.call(t,"callee")&&!s.call(t,"callee")};t.exports=u},1469:t=>{var e=Array.isArray;t.exports=e},8612:(t,e,r)=>{var n=r(3560),o=r(1780);t.exports=function(t){return null!=t&&o(t.length)&&!n(t)}},4144:(t,e,r)=>{t=r.nmd(t);var n=r(5639),o=r(5062),a=e&&!e.nodeType&&e,i=a&&t&&!t.nodeType&&t,s=i&&i.exports===a?n.Buffer:void 0,u=(s?s.isBuffer:void 0)||o;t.exports=u},8446:(t,e,r)=>{var n=r(939);t.exports=function(t,e){return n(t,e)}},3560:(t,e,r)=>{var n=r(4239),o=r(3218);t.exports=function(t){if(!o(t))return!1;var e=n(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},1780:t=>{t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},3218:t=>{t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},7005:t=>{t.exports=function(t){return null!=t&&"object"==typeof t}},6719:(t,e,r)=>{var n=r(8749),o=r(1717),a=r(1167),i=a&&a.isTypedArray,s=i?o(i):n;t.exports=s},3674:(t,e,r)=>{var n=r(4636),o=r(280),a=r(8612);t.exports=function(t){return a(t)?n(t):o(t)}},479:t=>{t.exports=function(){return[]}},5062:t=>{t.exports=function(){return!1}},75:function(t){(function(){var e,r,n,a;"undefined"!=typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:null!=o&&o.hrtime?(t.exports=function(){return(e()-a)/1e6},r=o.hrtime,a=(e=function(){var t;return 1e9*(t=r())[0]+t[1]})()-1e9*o.uptime()):Date.now?(t.exports=function(){return Date.now()-n},n=Date.now()):(t.exports=function(){return(new Date).getTime()-n},n=(new Date).getTime())}).call(this)},4087:(t,e,r)=>{for(var n=r(75),o="undefined"==typeof window?r.g:window,a=["moz","webkit"],i="AnimationFrame",s=o["request"+i],u=o["cancel"+i]||o["cancelRequest"+i],c=0;!s&&c<a.length;c++)s=o[a[c]+"Request"+i],u=o[a[c]+"Cancel"+i]||o[a[c]+"CancelRequest"+i];if(!s||!u){var p=0,l=0,f=[];s=function(t){if(0===f.length){var e=n(),r=Math.max(0,16.666666666666668-(e-p));p=r+e,setTimeout(function(){var t=f.slice(0);f.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(p)}catch(t){setTimeout(function(){throw t},0)}},Math.round(r))}return f.push({handle:++l,callback:t,cancelled:!1}),l},u=function(t){for(var e=0;e<f.length;e++)f[e].handle===t&&(f[e].cancelled=!0)}}t.exports=function(t){return s.call(o,t)},t.exports.cancel=function(){u.apply(o,arguments)},t.exports.polyfill=function(t){t||(t=o),t.requestAnimationFrame=s,t.cancelAnimationFrame=u}},8156:t=>{"use strict";t.exports=n}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={id:n,loaded:!1,exports:{}};return t[n].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.nmd=t=>(t.paths=[],t.children||(t.children=[]),t);var a={};return(()=>{"use strict";r.d(a,{default:()=>v});var t=r(8156),e=r.n(t),n=r(7403),o=r(8446),i=r.n(o);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){return(u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function c(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t){var e=function(t,e){if("object"!==s(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==s(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===s(e)?e:String(e)}var f=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&u(t,e)}(f,t);var r,o,a=(o=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}(),function(){var t,e=p(f);if(o){var r=p(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===s(e)||"function"==typeof e))return e;if(void 0!==e)throw TypeError("Derived constructors may only return object or undefined");return c(t)}(this,t)});function f(){var t,e,r,n;!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,f);for(var o=arguments.length,i=Array(o),s=0;s<o;s++)i[s]=arguments[s];return e=c(t=a.call.apply(a,[this].concat(i))),n={instance:null},(r=l(r="state"))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,t}return r=[{key:"componentDidMount",value:function(){var t=this,e=new n.default(this.typewriter,this.props.options);this.setState({instance:e},function(){var r=t.props.onInit;r&&r(e)})}},{key:"componentDidUpdate",value:function(t){i()(this.props.options,t.options)||this.setState({instance:new n.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var t=this,r=this.props.component;return e().createElement(r,{ref:function(e){return t.typewriter=e},className:"Typewriter","data-testid":"typewriter-wrapper"})}}],function(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,l(n.key),n)}}(f.prototype,r),Object.defineProperty(f,"prototype",{writable:!1}),f}(t.Component);f.defaultProps={component:"div"};let v=f})(),a.default})())},7239:function(t,e,r){"use strict";r.d(e,{M:function(){return i}});var n=r(9653),o=r(6554),a=r(5893),i=(0,n.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});i.displayName="Center";var s={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};(0,o.G)(function(t,e){let{axis:r="both",...o}=t;return(0,a.jsx)(n.m.div,{ref:e,__css:s[r],...o,position:"absolute"})})}}]);