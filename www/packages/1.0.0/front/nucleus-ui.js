!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.constantTree=function e(t,n=""){for(let r in t){const o=`${n}${""!==n?".":""}${r}`;"string"==typeof t[r]&&0===t[r].length?t[r]=o:"object"==typeof t[r]&&e(t[r],o)}return t}},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function u(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(u,c)}s((r=r.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});n(2).connect(class{constructor(){}entryPoint(e){return r(this,void 0,void 0,function*(){const t=yield e.Service.getService("react","com.nucleus"),n=yield e.Service.getService("react-dom","com.nucleus"),r=document.querySelector("nucleau-app");n.render(t.createElement("div",null,"Hello kitty"),r)})}})},function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const o=n(3);t.BaseComponent=o.BaseComponent;const i=r(n(5));t.UtilEnv=i;const u=r(n(0));t.UtilConstant=u,t.connect=function(e){_nucleus(e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(4);t.BaseComponent=class{constructor(){this.cmpId="",this.cmpName=""}_send(e,t){this._evtBus&&this._evtBus.emitAsync(e,t)}_sendWithReturn(e,t,n){return new Promise((o,i)=>{this._evtBus?(this._evtBus.once(t,e=>{o(e)}),this._evtBus.emitAsync(e,n)):i(Error(r.Errors.TECHNICAL.EVENTBUS_IS_NOT_DEFINED))})}_Receive(e,t){return this._evtBus?this._evtBus.on(e,t):{off:()=>void 0}}_ReceiveOnce(e,t){return this._evtBus?this._evtBus.once(e,t):{off:()=>void 0}}get identity(){return{cmpId:this.cmpId,cmpName:this.cmpName}}initialize(){}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let r=n(0).constantTree({TYPE:{TECHNICAL:"",BUSINESS:""},TECHNICAL:{EVENTBUS_IS_NOT_DEFINED:""}});t.Errors=r},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.isNode=function(){return"[object process]"===Object.prototype.toString.call(void 0!==e?e:0)}}).call(this,n(6))},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(e){r=u}}();var s,l=[],f=!1,a=-1;function d(){f&&s&&(f=!1,s.length?l=s.concat(l):a=-1,l.length&&p())}function p(){if(!f){var e=c(d);f=!0;for(var t=l.length;t;){for(s=l,l=[];++a<t;)s&&s[a].run();a=-1,t=l.length}s=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function v(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new h(e,t)),1!==l.length||f||c(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}]);