!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const o=n(3);t.BaseComponent=o.BaseComponent;const i=r(n(5));t.UtilEnv=i;const c=r(n(1));t.UtilConstant=c,t.connect=function(e){_nucleus(e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.constantTree=function e(t,n=""){for(let r in t){const o=`${n}${""!==n?".":""}${r}`;"string"==typeof t[r]&&0===t[r].length?t[r]=o:"object"==typeof t[r]&&e(t[r],o)}return t}},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function c(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(c,u)}s((r=r.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),i=n(6);o.connect(class{constructor(){}entryPoint(e){return r(this,void 0,void 0,function*(){const t=e.Service.activateService(i.default);yield t.startServer()})}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(4);t.BaseComponent=class{constructor(){this.cmpId="",this.cmpName="",this.getService=void 0}_send(e,t){this._evtBus&&this._evtBus.emitAsync(e,t)}_sendWithReturn(e,t,n){return new Promise((o,i)=>{this._evtBus?(this._evtBus.once(t,e=>{o(e)}),this._evtBus.emitAsync(e,n)):i(Error(r.Errors.TECHNICAL.EVENTBUS_IS_NOT_DEFINED))})}_Receive(e,t){return this._evtBus?this._evtBus.on(e,t):{off:()=>void 0}}_ReceiveOnce(e,t){return this._evtBus?this._evtBus.once(e,t):{off:()=>void 0}}get identity(){return{cmpId:this.cmpId,cmpName:this.cmpName}}initialize(){}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let r=n(1).constantTree({TYPE:{TECHNICAL:"",BUSINESS:""},TECHNICAL:{EVENTBUS_IS_NOT_DEFINED:""}});t.Errors=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isNode=function(){return"[object process]"===Object.prototype.toString.call("undefined"!=typeof process?process:0)}},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function c(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(c,u)}s((r=r.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);t.default=class extends o.BaseComponent{constructor(){super(),this.cmpId="Server",this.cmpName="com.nucleus.ui"}startServer(){return r(this,void 0,void 0,function*(){const e=yield this.getService("hapi","com.nucleus"),t=(yield this.getService("nes","com.nucleus"),yield this.getService("inert","com.nucleus")),n=e.server({port:8080});(()=>r(this,void 0,void 0,function*(){yield n.register(t),n.route({method:"GET",path:"/{param*}",handler:{directory:{path:"../",listing:!0}}}),yield n.start(),console.log("Server running at:",n.info.uri)}))()})}}}]);