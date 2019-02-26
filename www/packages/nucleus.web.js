!function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.isNode=function(){return"[object process]"===Object.prototype.toString.call(void 0!==e?e:0)}}).call(this,r(5))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.constantTree=function e(t,r=""){for(let i in t){const n=`${r}${""!==r?".":""}${i}`;"string"==typeof t[i]&&0===t[i].length?t[i]=n:"object"==typeof t[i]&&e(t[i],n)}return t}},function(e,t,r){"use strict";(function(e){var i=this&&this.__awaiter||function(e,t,r,i){return new(r||(r=Promise))(function(n,s){function o(e){try{a(i.next(e))}catch(e){s(e)}}function c(e){try{a(i.throw(e))}catch(e){s(e)}}function a(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(o,c)}a((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const n=r(4),s=r(0),o=r(6);t.startNucleus=function(t){return i(this,void 0,void 0,function*(){const r=new n.EventBus(".",3),i=new o.Api(r);i.require=t,r.on("allEvents",e=>{console.log("*************************************************************************************"),console.log(e)});let c=null;(c=s.isNode()?e:window)._nucleus_api=i,c._nucleus=(e=>{const t=e;(new t).entryPoint(i),r.emit("API.MODULE.MODULE_LOADED",{mod:t})})})}}).call(this,r(3))},function(e,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.EventBus=class{constructor(e=".",t=3){this._Emitter_={oncePool:{},onPool:{},parent:void 0,Ids:0},""===e.trim()&&(e="."),t<1&&(t=1),this._separator=e,this._depthLevel=t}get _errors(){const e=this;return{get eventNameBadFormat(){return`The event name is not in the correct format :\nShould be in '${e._depthLevel}' part${e._depthLevel>1?"s":""}\n${e._depthLevel>1?"separated by '"+e._separator+"'":""}`}}}checkEventNameFormat(e){return e&&e.trim().length>0&&e.split(this._separator).length<=this._depthLevel||!1}get pools(){return[this._Emitter_.onPool,this._Emitter_.oncePool]}get separator(){return this._separator}set separator(e){""===e.trim()&&(e="."),this._separator=e}get parent(){return this._Emitter_.parent}set parent(e){this._Emitter_.parent=e}get depthLevel(){return this._depthLevel}set depthLevel(e){e<1&&(e=1),this._depthLevel=e}on(e,t){if(!this.checkEventNameFormat(e))throw Error(this._errors.eventNameBadFormat);this._Emitter_.onPool[e]||(this._Emitter_.onPool[e]=[]);let r={id:this._Emitter_.Ids++,callback:t};return this._Emitter_.onPool[e].push(r),this.emit("registerEvent",{eventName:e,callback:t}),{off:()=>this.off(r.id),id:r.id}}once(e,t){if(!this.checkEventNameFormat(e))throw Error(this._errors.eventNameBadFormat);this._Emitter_.oncePool[e]||(this._Emitter_.oncePool[e]=[]);let r={id:this._Emitter_.Ids++,callback:e=>{this.off(r.id),t(e)},originalCallback:t};return this._Emitter_.oncePool[e].push(r),this.emit("registerEvent",{eventName:e,callback:r.callback}),{off:()=>this.off(r.id),id:r.id}}off(...e){let t=void 0,r=void 0,i=void 0;if(0===e.length||!e)return this._Emitter_.oncePool={},void(this._Emitter_.onPool={});if(1===e.length)switch(typeof e[0]){case"string":t=e[0];break;case"number":i=e[0];break;default:r=e[0]}else t=e[0],r=e[1],i=e[2]||void 0;if(t&&"string"==typeof t){const e=t;this.pools.forEach(t=>{let i=t[e]||[];r&&(i=i.filter(e=>e.originalCallback?e.originalCallback===r:e.callback===r)),i.forEach(r=>{t[e]=t[e].filter(e=>e.id!==r.id)})})}else[this._Emitter_.onPool,this._Emitter_.oncePool].forEach(e=>{for(let t in e){let n=e[t];i&&(n=n.filter(e=>e.id===i)),r&&(n=n.filter(e=>e.originalCallback?e.originalCallback===r:e.callback===r)),n.forEach(r=>{e[t]=e[t].filter(e=>e.id!==r.id)})}})}emit(e,t){return"allEvents"!==e&&this.emit("allEvents",{eventName:e,data:t}),this.pools.forEach(r=>{for(const i in r)"string"==typeof i&&e.startsWith(i)&&r[i].forEach(e=>e.callback(t))}),this._Emitter_.parent&&this._Emitter_.parent.emit(e,t),!0}emitAsync(e,t){return setTimeout(()=>{this.pools.forEach(r=>{for(const i in r)"string"==typeof i&&e.startsWith(i)&&r[i].forEach(e=>e.callback(t))}),this._Emitter_.parent&&this._Emitter_.parent.emitAsync(e,t),"allEvents"!==e&&this.emitAsync("allEvents",{eventName:e,data:t})},0),!0}}},function(e,t){var r,i,n=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function c(e){if(r===setTimeout)return setTimeout(e,0);if((r===s||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:s}catch(e){r=s}try{i="function"==typeof clearTimeout?clearTimeout:o}catch(e){i=o}}();var a,u=[],l=!1,h=-1;function f(){l&&a&&(l=!1,a.length?u=a.concat(u):h=-1,u.length&&v())}function v(){if(!l){var e=c(f);l=!0;for(var t=u.length;t;){for(a=u,u=[];++h<t;)a&&a[h].run();h=-1,t=u.length}a=null,l=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function E(e,t){this.fun=e,this.array=t}function _(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new E(e,t)),1!==u.length||l||c(v)},E.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=_,n.addListener=_,n.once=_,n.off=_,n.removeListener=_,n.removeAllListeners=_,n.emit=_,n.prependListener=_,n.prependOnceListener=_,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=r(7),n=r(9);t.Api=class{constructor(e){this._evtBus=e,this._service=new i.Service(e),this._module=new n.Module(e,this)}set require(e){this._require=e}get Service(){return this._service}get Module(){return this._module}}},function(e,t,r){"use strict";var i=this&&this.__awaiter||function(e,t,r,i){return new(r||(r=Promise))(function(n,s){function o(e){try{a(i.next(e))}catch(e){s(e)}}function c(e){try{a(i.throw(e))}catch(e){s(e)}}function a(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(o,c)}a((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const n=r(8);t.Service=class{constructor(e){this._evtBus=e,this._serviceMap={},this.initEvents()}initEvents(){this._evtBus.on(n.Acts.API.SERVICE.REGISTER_SERVICE,e=>{this._registerService(e)}),this._evtBus.on(n.Acts.API.SERVICE.GET_SERVICE,e=>{this._getService(e)})}_registerService(e){this._serviceMap[`${e.serviceId}.${e.serviceName}`]?this._evtBus.emitAsync(n.Evts.API.SERVICE.SERVICE_REGISTERED,Object.assign({},e,{success:!1,reason:Error(`The service ${e.serviceId}.${e.serviceName} is already registered`)})):(this._serviceMap[`${e.serviceId}.${e.serviceName}`]=e,this._evtBus.emitAsync(n.Evts.API.SERVICE.SERVICE_REGISTERED,Object.assign({},e,{success:!0})),this._getService({serviceId:e.serviceId,serviceName:e.serviceName}))}registerService(e,t,r){return i(this,void 0,void 0,function*(){return new Promise((i,s)=>{const o=this._evtBus.on(n.Evts.API.SERVICE.SERVICE_REGISTERED,r=>{r.serviceName===e&&r.serviceId===t&&(o.off(),r.success?i():s(r.reason))});this._evtBus.emitAsync(n.Acts.API.SERVICE.REGISTER_SERVICE,{serviceName:e,serviceId:t,payload:r})})})}_getService(e){this._serviceMap[`${e.serviceId}.${e.serviceName}`]&&this._evtBus.emitAsync(n.Evts.API.SERVICE.SERVICE_RETURNED,Object.assign({},this._serviceMap[`${e.serviceId}.${e.serviceName}`],{success:!0}))}getService(e,t){return i(this,void 0,void 0,function*(){return new Promise((r,i)=>{const s=this._evtBus.on(n.Evts.API.SERVICE.SERVICE_RETURNED,n=>{n.serviceName===e&&n.serviceId===t&&(s.off(),n.success?r(n.payload.serviceDefinition?n.payload.serviceDefinition:n.payload.serviceInstance):i(n.reason))});this._evtBus.emitAsync(n.Acts.API.SERVICE.GET_SERVICE,{serviceName:e,serviceId:t})})})}activateService(e){const t=new e;return t._evtBus=this._evtBus,t.getService=((e,t)=>i(this,void 0,void 0,function*(){return yield this.getService(e,t)})),t.initialize(),t}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=r(1);let n=i.constantTree({API:{SERVICE:{SERVICE_REGISTERED:"",SERVICE_RETURNED:""}}});t.Evts=n;let s=i.constantTree({API:{SERVICE:{REGISTER_SERVICE:"",GET_SERVICE:""}}});t.Acts=s},function(e,t,r){"use strict";var i=this&&this.__awaiter||function(e,t,r,i){return new(r||(r=Promise))(function(n,s){function o(e){try{a(i.next(e))}catch(e){s(e)}}function c(e){try{a(i.throw(e))}catch(e){s(e)}}function a(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(o,c)}a((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const n=r(0),s=r(10);t.Module=class{constructor(e,t){this._evtBus=e,this._moduleMap={},this._api=t}loadModule(e){return i(this,void 0,void 0,function*(){if(n.isNode())this._api._require(e),this._evtBus.emit(s.Acts.API.MODULE.LOAD_MODULE,{path:e});else{const t=document.createElement("script");t.type="text/javascript",t.src=e,window.document.body.appendChild(t),this._evtBus.emit(s.Acts.API.MODULE.LOAD_MODULE,{path:e})}})}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=r(1);let n=i.constantTree({API:{MODULE:{MODULE_LOADED:""}}});t.Evts=n;let s=i.constantTree({API:{MODULE:{LOAD_MODULE:""}}});t.Acts=s}]);