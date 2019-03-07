!function(e){var t={};function i(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=2)}([function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.isNode=function(){return"[object process]"===Object.prototype.toString.call(void 0!==e?e:0)}}).call(this,i(5))},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.constantTree=function e(t,i=""){for(let r in t){const n=`${i}${""!==i?".":""}${r}`;"string"==typeof t[r]&&0===t[r].length?t[r]=n:"object"==typeof t[r]&&e(t[r],n)}return t}},function(e,t,i){"use strict";(function(e){var r=this&&this.__awaiter||function(e,t,i,r){return new(i||(i=Promise))(function(n,o){function s(e){try{a(r.next(e))}catch(e){o(e)}}function c(e){try{a(r.throw(e))}catch(e){o(e)}}function a(e){e.done?n(e.value):new i(function(t){t(e.value)}).then(s,c)}a((r=r.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const n=i(4),o=i(0),s=i(6);t.startNucleus=function(t){return r(this,void 0,void 0,function*(){const i=new n.EventBus(".",3),c=new s.Api(i);c.require=t,i.on("allEvents",e=>{console.log("*************************************************************************************"),console.log(e)});let a=null;(a=o.isNode()?e:window)._nucleus_api=c,a._nucleus=(e=>r(this,void 0,void 0,function*(){const t=e;yield(new t).entryPoint(c),i.emit("API.MODULE.MODULE_LOADED",{mod:t})}))})}}).call(this,i(3))},function(e,t){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(i=window)}e.exports=i},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.EventBus=class{constructor(e=".",t=3){this._Emitter_={oncePool:{},onPool:{},parent:void 0,Ids:0},""===e.trim()&&(e="."),t<1&&(t=1),this._separator=e,this._depthLevel=t}get _errors(){const e=this;return{get eventNameBadFormat(){return`The event name is not in the correct format :\nShould be in '${e._depthLevel}' part${e._depthLevel>1?"s":""}\n${e._depthLevel>1?"separated by '"+e._separator+"'":""}`}}}checkEventNameFormat(e){return e&&e.trim().length>0&&e.split(this._separator).length<=this._depthLevel||!1}get pools(){return[this._Emitter_.onPool,this._Emitter_.oncePool]}get separator(){return this._separator}set separator(e){""===e.trim()&&(e="."),this._separator=e}get parent(){return this._Emitter_.parent}set parent(e){this._Emitter_.parent=e}get depthLevel(){return this._depthLevel}set depthLevel(e){e<1&&(e=1),this._depthLevel=e}on(e,t){if(!this.checkEventNameFormat(e))throw Error(this._errors.eventNameBadFormat);this._Emitter_.onPool[e]||(this._Emitter_.onPool[e]=[]);let i={id:this._Emitter_.Ids++,callback:t};return this._Emitter_.onPool[e].push(i),this.emit("registerEvent",{eventName:e,callback:t}),{off:()=>this.off(i.id),id:i.id}}once(e,t){if(!this.checkEventNameFormat(e))throw Error(this._errors.eventNameBadFormat);this._Emitter_.oncePool[e]||(this._Emitter_.oncePool[e]=[]);let i={id:this._Emitter_.Ids++,callback:e=>{this.off(i.id),t(e)},originalCallback:t};return this._Emitter_.oncePool[e].push(i),this.emit("registerEvent",{eventName:e,callback:i.callback}),{off:()=>this.off(i.id),id:i.id}}off(...e){let t=void 0,i=void 0,r=void 0;if(0===e.length||!e)return this._Emitter_.oncePool={},void(this._Emitter_.onPool={});if(1===e.length)switch(typeof e[0]){case"string":t=e[0];break;case"number":r=e[0];break;default:i=e[0]}else t=e[0],i=e[1],r=e[2]||void 0;if(t&&"string"==typeof t){const e=t;this.pools.forEach(t=>{let r=t[e]||[];i&&(r=r.filter(e=>e.originalCallback?e.originalCallback===i:e.callback===i)),r.forEach(i=>{t[e]=t[e].filter(e=>e.id!==i.id)})})}else[this._Emitter_.onPool,this._Emitter_.oncePool].forEach(e=>{for(let t in e){let n=e[t];r&&(n=n.filter(e=>e.id===r)),i&&(n=n.filter(e=>e.originalCallback?e.originalCallback===i:e.callback===i)),n.forEach(i=>{e[t]=e[t].filter(e=>e.id!==i.id)})}})}emit(e,t){return"allEvents"!==e&&this.emit("allEvents",{eventName:e,data:t}),this.pools.forEach(i=>{for(const r in i){const n=r.split(this._separator),o=e.split(this._separator);for(;o.length>0&&n.length<o.length;)o.pop();"string"==typeof r&&n.join()===o.join()&&i[r].forEach(e=>e.callback(t))}}),this._Emitter_.parent&&this._Emitter_.parent.emit(e,t),!0}emitAsync(e,t){return setTimeout(()=>{this.pools.forEach(i=>{for(const r in i){const n=r.split(this._separator),o=e.split(this._separator);for(;o.length>0&&n.length<o.length;)o.pop();"string"==typeof r&&n.join()===o.join()&&i[r].forEach(e=>e.callback(t))}}),this._Emitter_.parent&&this._Emitter_.parent.emitAsync(e,t),"allEvents"!==e&&this.emitAsync("allEvents",{eventName:e,data:t})},0),!0}}},function(e,t){var i,r,n=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function c(e){if(i===setTimeout)return setTimeout(e,0);if((i===o||!i)&&setTimeout)return i=setTimeout,setTimeout(e,0);try{return i(e,0)}catch(t){try{return i.call(null,e,0)}catch(t){return i.call(this,e,0)}}}!function(){try{i="function"==typeof setTimeout?setTimeout:o}catch(e){i=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var a,u=[],l=!1,h=-1;function v(){l&&a&&(l=!1,a.length?u=a.concat(u):h=-1,u.length&&f())}function f(){if(!l){var e=c(v);l=!0;for(var t=u.length;t;){for(a=u,u=[];++h<t;)a&&a[h].run();h=-1,t=u.length}a=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function _(e,t){this.fun=e,this.array=t}function d(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)t[i-1]=arguments[i];u.push(new _(e,t)),1!==u.length||l||c(f)},_.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=d,n.addListener=d,n.once=d,n.off=d,n.removeListener=d,n.removeAllListeners=d,n.emit=d,n.prependListener=d,n.prependOnceListener=d,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=i(7),n=i(9);t.Api=class{constructor(e){this._evtBus=e,this._service=new r.Service(e),this._module=new n.Module(e,this)}set require(e){this._require=e}get Service(){return this._service}get Module(){return this._module}}},function(e,t,i){"use strict";var r=this&&this.__awaiter||function(e,t,i,r){return new(i||(i=Promise))(function(n,o){function s(e){try{a(r.next(e))}catch(e){o(e)}}function c(e){try{a(r.throw(e))}catch(e){o(e)}}function a(e){e.done?n(e.value):new i(function(t){t(e.value)}).then(s,c)}a((r=r.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const n=i(8);t.Service=class{constructor(e){this._evtBus=e,this._serviceMap={},this.initEvents()}initEvents(){this._evtBus.on(n.Acts.API.SERVICE.REGISTER_SERVICE,e=>{this._registerService(e)}),this._evtBus.on(n.Acts.API.SERVICE.GET_SERVICE,e=>{this._getService(e)})}_registerService(e){this._serviceMap[`${e.serviceId}.${e.serviceName}`]?this._evtBus.emitAsync(n.Evts.API.SERVICE.SERVICE_REGISTERED,Object.assign({},e,{success:!1,reason:Error(`The service ${e.serviceId}.${e.serviceName} is already registered`)})):(this._serviceMap[`${e.serviceId}.${e.serviceName}`]=e,this._evtBus.emitAsync(n.Evts.API.SERVICE.SERVICE_REGISTERED,Object.assign({},e,{success:!0})),this._getService({serviceId:e.serviceId,serviceName:e.serviceName}))}registerService(e,t,i){return r(this,void 0,void 0,function*(){return new Promise((r,o)=>{const s=this._evtBus.on(n.Evts.API.SERVICE.SERVICE_REGISTERED,i=>{i.serviceName===e&&i.serviceId===t&&(s.off(),i.success?r():o(i.reason))});this._evtBus.emitAsync(n.Acts.API.SERVICE.REGISTER_SERVICE,{serviceName:e,serviceId:t,payload:i})})})}_getService(e){this._serviceMap[`${e.serviceId}.${e.serviceName}`]&&this._evtBus.emitAsync(n.Evts.API.SERVICE.SERVICE_RETURNED,Object.assign({},this._serviceMap[`${e.serviceId}.${e.serviceName}`],{success:!0}))}getService(e,t){return r(this,void 0,void 0,function*(){return new Promise((i,r)=>{const o=this._evtBus.on(n.Evts.API.SERVICE.SERVICE_RETURNED,n=>{n.serviceName===e&&n.serviceId===t&&(o.off(),n.success?i(n.payload.serviceDefinition?n.payload.serviceDefinition:n.payload.serviceInstance):r(n.reason))});this._evtBus.emitAsync(n.Acts.API.SERVICE.GET_SERVICE,{serviceName:e,serviceId:t})})})}activateService(e){return r(this,void 0,void 0,function*(){let t={};if("__nc__Services"in e.prototype)for(let i in e.prototype.__nc__Services){const r=yield this.getService(...e.prototype.__nc__Services[i]);t[i]=r}const i=new e(t);return i.initialize&&(i._evtBus=this._evtBus,i.getService=((e,t)=>r(this,void 0,void 0,function*(){return yield this.getService(e,t)})),i.initialize()),i})}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=i(1);let n=r.constantTree({API:{SERVICE:{SERVICE_REGISTERED:"",SERVICE_RETURNED:""}}});t.Evts=n;let o=r.constantTree({API:{SERVICE:{REGISTER_SERVICE:"",GET_SERVICE:""}}});t.Acts=o},function(e,t,i){"use strict";var r=this&&this.__awaiter||function(e,t,i,r){return new(i||(i=Promise))(function(n,o){function s(e){try{a(r.next(e))}catch(e){o(e)}}function c(e){try{a(r.throw(e))}catch(e){o(e)}}function a(e){e.done?n(e.value):new i(function(t){t(e.value)}).then(s,c)}a((r=r.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const n=i(0),o=i(10);t.Module=class{constructor(e,t){this._evtBus=e,this._moduleMap={},this._api=t}loadModule(e){return r(this,void 0,void 0,function*(){if(n.isNode())this._api._require(e),this._evtBus.emit(o.Acts.API.MODULE.LOAD_MODULE,{path:e});else{const t=document.createElement("script");t.type="text/javascript",t.src=e,window.document.body.appendChild(t),this._evtBus.emit(o.Acts.API.MODULE.LOAD_MODULE,{path:e})}})}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=i(1);let n=r.constantTree({API:{MODULE:{MODULE_LOADED:""}}});t.Evts=n;let o=r.constantTree({API:{MODULE:{LOAD_MODULE:""}}});t.Acts=o}]);