!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.constantTree=function e(t,n=""){for(let o in t){const r=`${n}${""!==n?".":""}${o}`;"string"==typeof t[o]&&0===t[o].length?t[o]=r:"object"==typeof t[o]&&e(t[o],r)}return t}},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(r,i){function s(e){try{u(o.next(e))}catch(e){i(e)}}function c(e){try{u(o.throw(e))}catch(e){i(e)}}function u(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(s,c)}u((o=o.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const r=n(2),i=n(6),s={UPLOAD:{SESSION:{OPEN:"",OPENED:"",CLOSE:"",CLOSED:"",SEND_CHUNK:"",CHUNK_SENT:""}}};r.UtilConstant.constantTree(s);r.connect(class{constructor(){this.streamWriters={}}entryPoint(e){return o(this,void 0,void 0,function*(){const t={cmpName:"upload",cmpId:"com.nucleus"};console.log("REGISTERING MODULE UPLOAD");const n=e.Service.activateService(r.BaseComponent);n._Receive(s.UPLOAD.SESSION.OPEN,e=>{console.log(`fs.mkdirSync(./${e.payload.guid});`),i.mkdirSync(`./__upload__/${e.payload.guid}`);const o=i.openSync(`./__upload__/${e.payload.guid}/${e.payload.name}`,"a");this.streamWriters[e.payload.guid]=o,n._send(s.UPLOAD.SESSION.OPENED,{sender:t,payload:{guid:e.payload.guid}})}),n._Receive(s.UPLOAD.SESSION.CLOSE,e=>{const o=this.streamWriters[e.payload.guid];i.closeSync(o),delete this.streamWriters[e.payload.guid],n._send(s.UPLOAD.SESSION.CLOSED,{sender:t,payload:{guid:e.payload.guid}})}),n._Receive(s.UPLOAD.SESSION.SEND_CHUNK,e=>{const o=this.streamWriters[e.payload.guid];i.writeSync(o,new Buffer(e.payload.chunk)),n._send(s.UPLOAD.SESSION.CHUNK_SENT,{sender:t,payload:{guid:e.payload.guid}})})})}})},function(e,t,n){"use strict";var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const r=n(3);t.BaseComponent=r.BaseComponent;const i=o(n(5));t.UtilEnv=i;const s=o(n(0));t.UtilConstant=s,t.connect=function(e){_nucleus(e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(4);t.BaseComponent=class{constructor(){this.cmpId="",this.cmpName="",this.getService=void 0}_send(e,t){this._evtBus&&this._evtBus.emitAsync(e,t)}_sendWithReturn(e,t,n){return new Promise((r,i)=>{this._evtBus?(this._evtBus.once(t,e=>{r(e)}),this._evtBus.emitAsync(e,n)):i(Error(o.Errors.TECHNICAL.EVENTBUS_IS_NOT_DEFINED))})}_Receive(e,t){return this._evtBus?this._evtBus.on(e,t):{off:()=>void 0}}_ReceiveOnce(e,t){return this._evtBus?this._evtBus.once(e,t):{off:()=>void 0}}get identity(){return{cmpId:this.cmpId,cmpName:this.cmpName}}initialize(){}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let o=n(0).constantTree({TYPE:{TECHNICAL:"",BUSINESS:""},TECHNICAL:{EVENTBUS_IS_NOT_DEFINED:""}});t.Errors=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isNode=function(){return"[object process]"===Object.prototype.toString.call("undefined"!=typeof process?process:0)}},function(e,t){e.exports=require("fs")}]);