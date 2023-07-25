/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},Mu=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],a=e[n++],u=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(u>>10)),t[s++]=String.fromCharCode(56320+(u&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},co={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,a=o?e[r+1]:0,u=r+2<e.length,c=u?e[r+2]:0,h=i>>2,l=(i&3)<<4|a>>4;let p=(a&15)<<2|c>>6,y=c&63;u||(y=64,o||(p=64)),s.push(n[h],n[l],n[p],n[y])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(uo(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Mu(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const c=r<e.length?n[e.charAt(r)]:64;++r;const l=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||a==null||c==null||l==null)throw new Ou;const p=i<<2|a>>4;if(s.push(p),c!==64){const y=a<<4&240|c>>2;if(s.push(y),l!==64){const A=c<<6&192|l;s.push(A)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Ou extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lu=function(e){const t=uo(e);return co.encodeByteArray(t,!0)},mn=function(e){return Lu(e).replace(/\./g,"")},Pu=function(e){try{return co.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu=()=>Fu().__FIREBASE_DEFAULTS__,Uu=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},$u=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Pu(e[1]);return t&&JSON.parse(t)},ho=()=>{try{return Vu()||Uu()||$u()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Bu=e=>{var t,n;return(n=(t=ho())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},qu=e=>{const t=Bu(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},lo=()=>{var e;return(e=ho())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[mn(JSON.stringify(n)),mn(JSON.stringify(o)),a].join(".")}function Hu(){try{return typeof indexedDB=="object"}catch{return!1}}function Ku(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu="FirebaseError";class ue extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=Gu,Object.setPrototypeOf(this,ue.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fo.prototype.create)}}class fo{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?Qu(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new ue(r,a,s)}}function Qu(e,t){return e.replace(Wu,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const Wu=/\{\$([^}]+)}/g;function Es(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(ni(i)&&ni(o)){if(!Es(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function ni(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(e){return e&&e._delegate?e._delegate:e}class De{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new ju;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t?.identifier),r=(n=t?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ju(t))try{this.getOrInitializeService({instanceIdentifier:xt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=xt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=xt){return this.instances.has(t)}getOptions(t=xt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Xu(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=xt){return this.component?this.component.multipleInstances?t:xt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xu(e){return e===xt?void 0:e}function Ju(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Yu(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(N||(N={}));const tc={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},ec=N.INFO,nc={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},sc=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=nc[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class go{constructor(t){this.name=t,this._logLevel=ec,this._logHandler=sc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in N))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?tc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...t),this._logHandler(this,N.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...t),this._logHandler(this,N.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,N.INFO,...t),this._logHandler(this,N.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,N.WARN,...t),this._logHandler(this,N.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...t),this._logHandler(this,N.ERROR,...t)}}const rc=(e,t)=>t.some(n=>e instanceof n);let si,ri;function ic(){return si||(si=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function oc(){return ri||(ri=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const po=new WeakMap,Is=new WeakMap,mo=new WeakMap,ss=new WeakMap,Zs=new WeakMap;function ac(e){const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Tt(e.result)),r()},o=()=>{s(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&po.set(n,e)}).catch(()=>{}),Zs.set(t,e),t}function uc(e){if(Is.has(e))return;const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Is.set(e,t)}let Ts={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Is.get(e);if(t==="objectStoreNames")return e.objectStoreNames||mo.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function cc(e){Ts=e(Ts)}function hc(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(rs(this),t,...n);return mo.set(s,t.sort?t.sort():[t]),Tt(s)}:oc().includes(e)?function(...t){return e.apply(rs(this),t),Tt(po.get(this))}:function(...t){return Tt(e.apply(rs(this),t))}}function lc(e){return typeof e=="function"?hc(e):(e instanceof IDBTransaction&&uc(e),rc(e,ic())?new Proxy(e,Ts):e)}function Tt(e){if(e instanceof IDBRequest)return ac(e);if(ss.has(e))return ss.get(e);const t=lc(e);return t!==e&&(ss.set(e,t),Zs.set(t,e)),t}const rs=e=>Zs.get(e);function dc(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=Tt(o);return s&&o.addEventListener("upgradeneeded",u=>{s(Tt(o.result),u.oldVersion,u.newVersion,Tt(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{i&&u.addEventListener("close",()=>i()),r&&u.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const fc=["get","getKey","getAll","getAllKeys","count"],gc=["put","add","delete","clear"],is=new Map;function ii(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(is.get(t))return is.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=gc.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||fc.includes(n)))return;const i=async function(o,...a){const u=this.transaction(o,r?"readwrite":"readonly");let c=u.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&u.done]))[0]};return is.set(t,i),i}cc(e=>({...e,get:(t,n,s)=>ii(t,n)||e.get(t,n,s),has:(t,n)=>!!ii(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(mc(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function mc(e){const t=e.getComponent();return t?.type==="VERSION"}const Ss="@firebase/app",oi="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=new go("@firebase/app"),yc="@firebase/app-compat",vc="@firebase/analytics-compat",wc="@firebase/analytics",Ec="@firebase/app-check-compat",Ic="@firebase/app-check",Tc="@firebase/auth",Sc="@firebase/auth-compat",Cc="@firebase/database",Ac="@firebase/database-compat",_c="@firebase/functions",Dc="@firebase/functions-compat",Nc="@firebase/installations",bc="@firebase/installations-compat",kc="@firebase/messaging",xc="@firebase/messaging-compat",Rc="@firebase/performance",Mc="@firebase/performance-compat",Oc="@firebase/remote-config",Lc="@firebase/remote-config-compat",Pc="@firebase/storage",Fc="@firebase/storage-compat",Vc="@firebase/firestore",Uc="@firebase/firestore-compat",$c="firebase",Bc="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs="[DEFAULT]",qc={[Ss]:"fire-core",[yc]:"fire-core-compat",[wc]:"fire-analytics",[vc]:"fire-analytics-compat",[Ic]:"fire-app-check",[Ec]:"fire-app-check-compat",[Tc]:"fire-auth",[Sc]:"fire-auth-compat",[Cc]:"fire-rtdb",[Ac]:"fire-rtdb-compat",[_c]:"fire-fn",[Dc]:"fire-fn-compat",[Nc]:"fire-iid",[bc]:"fire-iid-compat",[kc]:"fire-fcm",[xc]:"fire-fcm-compat",[Rc]:"fire-perf",[Mc]:"fire-perf-compat",[Oc]:"fire-rc",[Lc]:"fire-rc-compat",[Pc]:"fire-gcs",[Fc]:"fire-gcs-compat",[Vc]:"fire-fst",[Uc]:"fire-fst-compat","fire-js":"fire-js",[$c]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn=new Map,As=new Map;function jc(e,t){try{e.container.addComponent(t)}catch(n){Ft.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function vn(e){const t=e.name;if(As.has(t))return Ft.debug(`There were multiple attempts to register component ${t}.`),!1;As.set(t,e);for(const n of yn.values())jc(n,e);return!0}function zc(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},St=new fo("app","Firebase",Hc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new De("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw St.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc=Bc;function yo(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:Cs,automaticDataCollectionEnabled:!1},t),r=s.name;if(typeof r!="string"||!r)throw St.create("bad-app-name",{appName:String(r)});if(n||(n=lo()),!n)throw St.create("no-options");const i=yn.get(r);if(i){if(Es(n,i.options)&&Es(s,i.config))return i;throw St.create("duplicate-app",{appName:r})}const o=new Zu(r);for(const u of As.values())o.addComponent(u);const a=new Kc(n,s,o);return yn.set(r,a),a}function Qc(e=Cs){const t=yn.get(e);if(!t&&e===Cs&&lo())return yo();if(!t)throw St.create("no-app",{appName:e});return t}function Gt(e,t,n){var s;let r=(s=qc[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ft.warn(a.join(" "));return}vn(new De(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc="firebase-heartbeat-database",Yc=1,Ne="firebase-heartbeat-store";let os=null;function vo(){return os||(os=dc(Wc,Yc,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ne)}}}).catch(e=>{throw St.create("idb-open",{originalErrorMessage:e.message})})),os}async function Xc(e){try{return await(await vo()).transaction(Ne).objectStore(Ne).get(wo(e))}catch(t){if(t instanceof ue)Ft.warn(t.message);else{const n=St.create("idb-get",{originalErrorMessage:t?.message});Ft.warn(n.message)}}}async function ai(e,t){try{const s=(await vo()).transaction(Ne,"readwrite");await s.objectStore(Ne).put(t,wo(e)),await s.done}catch(n){if(n instanceof ue)Ft.warn(n.message);else{const s=St.create("idb-set",{originalErrorMessage:n?.message});Ft.warn(s.message)}}}function wo(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc=1024,Zc=30*24*60*60*1e3;class th{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nh(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ui();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Zc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ui(),{heartbeatsToSend:n,unsentEntries:s}=eh(this._heartbeatsCache.heartbeats),r=mn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ui(){return new Date().toISOString().substring(0,10)}function eh(e,t=Jc){const n=[];let s=e.slice();for(const r of e){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),ci(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ci(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class nh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hu()?Ku().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Xc(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ai(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ai(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function ci(e){return mn(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(e){vn(new De("platform-logger",t=>new pc(t),"PRIVATE")),vn(new De("heartbeat",t=>new th(t),"PRIVATE")),Gt(Ss,oi,e),Gt(Ss,oi,"esm2017"),Gt("fire-js","")}sh("");var rh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},g,tr=tr||{},E=rh||self;function kn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function qe(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function ih(e){return Object.prototype.hasOwnProperty.call(e,as)&&e[as]||(e[as]=++oh)}var as="closure_uid_"+(1e9*Math.random()>>>0),oh=0;function ah(e,t,n){return e.call.apply(e.bind,arguments)}function uh(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function Y(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Y=ah:Y=uh,Y.apply(null,arguments)}function sn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function j(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[r].apply(s,o)}}function bt(){this.s=this.s,this.o=this.o}var ch=0;bt.prototype.s=!1;bt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),ch!=0)&&ih(this)};bt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Eo=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function er(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function hi(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(kn(s)){const r=e.length||0,i=s.length||0;e.length=r+i;for(let o=0;o<i;o++)e[r+o]=s[o]}else e.push(s)}}function X(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}X.prototype.h=function(){this.defaultPrevented=!0};var hh=function(){if(!E.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{E.addEventListener("test",()=>{},t),E.removeEventListener("test",()=>{},t)}catch{}return e}();function be(e){return/^[\s\xa0]*$/.test(e)}function xn(){var e=E.navigator;return e&&(e=e.userAgent)?e:""}function lt(e){return xn().indexOf(e)!=-1}function nr(e){return nr[" "](e),e}nr[" "]=function(){};function lh(e,t){var n=sl;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var dh=lt("Opera"),te=lt("Trident")||lt("MSIE"),Io=lt("Edge"),_s=Io||te,To=lt("Gecko")&&!(xn().toLowerCase().indexOf("webkit")!=-1&&!lt("Edge"))&&!(lt("Trident")||lt("MSIE"))&&!lt("Edge"),fh=xn().toLowerCase().indexOf("webkit")!=-1&&!lt("Edge");function So(){var e=E.document;return e?e.documentMode:void 0}var Ds;t:{var us="",cs=function(){var e=xn();if(To)return/rv:([^\);]+)(\)|;)/.exec(e);if(Io)return/Edge\/([\d\.]+)/.exec(e);if(te)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(fh)return/WebKit\/(\S+)/.exec(e);if(dh)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(cs&&(us=cs?cs[1]:""),te){var hs=So();if(hs!=null&&hs>parseFloat(us)){Ds=String(hs);break t}}Ds=us}var Ns;if(E.document&&te){var li=So();Ns=li||parseInt(Ds,10)||void 0}else Ns=void 0;var gh=Ns;function ke(e,t){if(X.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(To){t:{try{nr(t.nodeName);var r=!0;break t}catch{}r=!1}r||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:ph[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ke.$.h.call(this)}}j(ke,X);var ph={2:"touch",3:"pen",4:"mouse"};ke.prototype.h=function(){ke.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var je="closure_listenable_"+(1e6*Math.random()|0),mh=0;function yh(e,t,n,s,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.la=r,this.key=++mh,this.fa=this.ia=!1}function Rn(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function sr(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function vh(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function Co(e){const t={};for(const n in e)t[n]=e[n];return t}const di="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ao(e,t){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)e[n]=s[n];for(let i=0;i<di.length;i++)n=di[i],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Mn(e){this.src=e,this.g={},this.h=0}Mn.prototype.add=function(e,t,n,s,r){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=ks(e,t,s,r);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new yh(t,this.src,i,!!s,r),t.ia=n,e.push(t)),t};function bs(e,t){var n=t.type;if(n in e.g){var s=e.g[n],r=Eo(s,t),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Rn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function ks(e,t,n,s){for(var r=0;r<e.length;++r){var i=e[r];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==s)return r}return-1}var rr="closure_lm_"+(1e6*Math.random()|0),ls={};function _o(e,t,n,s,r){if(s&&s.once)return No(e,t,n,s,r);if(Array.isArray(t)){for(var i=0;i<t.length;i++)_o(e,t[i],n,s,r);return null}return n=ar(n),e&&e[je]?e.O(t,n,qe(s)?!!s.capture:!!s,r):Do(e,t,n,!1,s,r)}function Do(e,t,n,s,r,i){if(!t)throw Error("Invalid event type");var o=qe(r)?!!r.capture:!!r,a=or(e);if(a||(e[rr]=a=new Mn(e)),n=a.add(t,n,s,o,i),n.proxy)return n;if(s=wh(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)hh||(r=o),r===void 0&&(r=!1),e.addEventListener(t.toString(),s,r);else if(e.attachEvent)e.attachEvent(ko(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function wh(){function e(n){return t.call(e.src,e.listener,n)}const t=Eh;return e}function No(e,t,n,s,r){if(Array.isArray(t)){for(var i=0;i<t.length;i++)No(e,t[i],n,s,r);return null}return n=ar(n),e&&e[je]?e.P(t,n,qe(s)?!!s.capture:!!s,r):Do(e,t,n,!0,s,r)}function bo(e,t,n,s,r){if(Array.isArray(t))for(var i=0;i<t.length;i++)bo(e,t[i],n,s,r);else s=qe(s)?!!s.capture:!!s,n=ar(n),e&&e[je]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=ks(i,n,s,r),-1<n&&(Rn(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=or(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ks(t,n,s,r)),(n=-1<e?t[e]:null)&&ir(n))}function ir(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[je])bs(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(ko(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=or(t))?(bs(n,e),n.h==0&&(n.src=null,t[rr]=null)):Rn(e)}}}function ko(e){return e in ls?ls[e]:ls[e]="on"+e}function Eh(e,t){if(e.fa)e=!0;else{t=new ke(t,this);var n=e.listener,s=e.la||e.src;e.ia&&ir(e),e=n.call(s,t)}return e}function or(e){return e=e[rr],e instanceof Mn?e:null}var ds="__closure_events_fn_"+(1e9*Math.random()>>>0);function ar(e){return typeof e=="function"?e:(e[ds]||(e[ds]=function(t){return e.handleEvent(t)}),e[ds])}function q(){bt.call(this),this.i=new Mn(this),this.S=this,this.J=null}j(q,bt);q.prototype[je]=!0;q.prototype.removeEventListener=function(e,t,n,s){bo(this,e,t,n,s)};function K(e,t){var n,s=e.J;if(s)for(n=[];s;s=s.J)n.push(s);if(e=e.S,s=t.type||t,typeof t=="string")t=new X(t,e);else if(t instanceof X)t.target=t.target||e;else{var r=t;t=new X(s,e),Ao(t,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];r=rn(o,s,!0,t)&&r}if(o=t.g=e,r=rn(o,s,!0,t)&&r,r=rn(o,s,!1,t)&&r,n)for(i=0;i<n.length;i++)o=t.g=n[i],r=rn(o,s,!1,t)&&r}q.prototype.N=function(){if(q.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Rn(n[s]);delete e.g[t],e.h--}}this.J=null};q.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};q.prototype.P=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function rn(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&bs(e.i,o),r=a.call(u,s)!==!1&&r}}return r&&!s.defaultPrevented}var ur=E.JSON.stringify;class Ih{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Th(){var e=cr;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Sh{constructor(){this.h=this.g=null}add(t,n){const s=xo.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var xo=new Ih(()=>new Ch,e=>e.reset());class Ch{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Ah(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function _h(e){E.setTimeout(()=>{throw e},0)}let xe,Re=!1,cr=new Sh,Ro=()=>{const e=E.Promise.resolve(void 0);xe=()=>{e.then(Dh)}};var Dh=()=>{for(var e;e=Th();){try{e.h.call(e.g)}catch(n){_h(n)}var t=xo;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Re=!1};function On(e,t){q.call(this),this.h=e||1,this.g=t||E,this.j=Y(this.qb,this),this.l=Date.now()}j(On,q);g=On.prototype;g.ga=!1;g.T=null;g.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),K(this,"tick"),this.ga&&(hr(this),this.start()))}};g.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function hr(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}g.N=function(){On.$.N.call(this),hr(this),delete this.g};function lr(e,t,n){if(typeof e=="function")n&&(e=Y(e,n));else if(e&&typeof e.handleEvent=="function")e=Y(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:E.setTimeout(e,t||0)}function Mo(e){e.g=lr(()=>{e.g=null,e.i&&(e.i=!1,Mo(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Nh extends bt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Mo(this)}N(){super.N(),this.g&&(E.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Me(e){bt.call(this),this.h=e,this.g={}}j(Me,bt);var fi=[];function Oo(e,t,n,s){Array.isArray(n)||(n&&(fi[0]=n.toString()),n=fi);for(var r=0;r<n.length;r++){var i=_o(t,n[r],s||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function Lo(e){sr(e.g,function(t,n){this.g.hasOwnProperty(n)&&ir(t)},e),e.g={}}Me.prototype.N=function(){Me.$.N.call(this),Lo(this)};Me.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ln(){this.g=!0}Ln.prototype.Ea=function(){this.g=!1};function bh(e,t,n,s,r,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var h=c[0];c=c[1];var l=h.split("_");o=2<=l.length&&l[1]=="type"?o+(h+"="+c+"&"):o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+t+`
`+n+`
`+o})}function kh(e,t,n,s,r,i,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+t+`
`+n+`
`+i+" "+o})}function Kt(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Rh(e,n)+(s?" "+s:"")})}function xh(e,t){e.info(function(){return"TIMEOUT: "+t})}Ln.prototype.info=function(){};function Rh(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return ur(n)}catch{return t}}var Bt={},gi=null;function Pn(){return gi=gi||new q}Bt.Ta="serverreachability";function Po(e){X.call(this,Bt.Ta,e)}j(Po,X);function Oe(e){const t=Pn();K(t,new Po(t))}Bt.STAT_EVENT="statevent";function Fo(e,t){X.call(this,Bt.STAT_EVENT,e),this.stat=t}j(Fo,X);function et(e){const t=Pn();K(t,new Fo(t,e))}Bt.Ua="timingevent";function Vo(e,t){X.call(this,Bt.Ua,e),this.size=t}j(Vo,X);function ze(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return E.setTimeout(function(){e()},t)}var Fn={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Uo={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function dr(){}dr.prototype.h=null;function pi(e){return e.h||(e.h=e.i())}function $o(){}var He={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function fr(){X.call(this,"d")}j(fr,X);function gr(){X.call(this,"c")}j(gr,X);var xs;function Vn(){}j(Vn,dr);Vn.prototype.g=function(){return new XMLHttpRequest};Vn.prototype.i=function(){return{}};xs=new Vn;function Ke(e,t,n,s){this.l=e,this.j=t,this.m=n,this.W=s||1,this.U=new Me(this),this.P=Mh,e=_s?125:void 0,this.V=new On(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Bo}function Bo(){this.i=null,this.g="",this.h=!1}var Mh=45e3,Rs={},wn={};g=Ke.prototype;g.setTimeout=function(e){this.P=e};function Ms(e,t,n){e.L=1,e.v=$n(yt(t)),e.s=n,e.S=!0,qo(e,null)}function qo(e,t){e.G=Date.now(),Ge(e),e.A=yt(e.v);var n=e.A,s=e.W;Array.isArray(s)||(s=[String(s)]),Yo(n.i,"t",s),e.C=0,n=e.l.J,e.h=new Bo,e.g=ya(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Nh(Y(e.Pa,e,e.g),e.O)),Oo(e.U,e.g,"readystatechange",e.nb),t=e.I?Co(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Oe(),bh(e.j,e.u,e.A,e.m,e.W,e.s)}g.nb=function(e){e=e.target;const t=this.M;t&&ft(e)==3?t.l():this.Pa(e)};g.Pa=function(e){try{if(e==this.g)t:{const h=ft(this.g);var t=this.g.Ia();const l=this.g.da();if(!(3>h)&&(h!=3||_s||this.g&&(this.h.h||this.g.ja()||wi(this.g)))){this.J||h!=4||t==7||(t==8||0>=l?Oe(3):Oe(2)),Un(this);var n=this.g.da();this.ca=n;e:if(jo(this)){var s=wi(this.g);e="";var r=s.length,i=ft(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Rt(this),Te(this);var o="";break e}this.h.i=new E.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:i&&t==r-1});s.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,kh(this.j,this.u,this.A,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!be(a)){var c=a;break e}}c=null}if(n=c)Kt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Os(this,n);else{this.i=!1,this.o=3,et(12),Rt(this),Te(this);break t}}this.S?(zo(this,h,o),_s&&this.i&&h==3&&(Oo(this.U,this.V,"tick",this.mb),this.V.start())):(Kt(this.j,this.m,o,null),Os(this,o)),h==4&&Rt(this),this.i&&!this.J&&(h==4?fa(this.l,this):(this.i=!1,Ge(this)))}else tl(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,et(12)):(this.o=0,et(13)),Rt(this),Te(this)}}}catch{}finally{}};function jo(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function zo(e,t,n){let s=!0,r;for(;!e.J&&e.C<n.length;)if(r=Oh(e,n),r==wn){t==4&&(e.o=4,et(14),s=!1),Kt(e.j,e.m,null,"[Incomplete Response]");break}else if(r==Rs){e.o=4,et(15),Kt(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Kt(e.j,e.m,r,null),Os(e,r);jo(e)&&r!=wn&&r!=Rs&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,et(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Er(t),t.M=!0,et(11))):(Kt(e.j,e.m,n,"[Invalid Chunked Response]"),Rt(e),Te(e))}g.mb=function(){if(this.g){var e=ft(this.g),t=this.g.ja();this.C<t.length&&(Un(this),zo(this,e,t),this.i&&e!=4&&Ge(this))}};function Oh(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?wn:(n=Number(t.substring(n,s)),isNaN(n)?Rs:(s+=1,s+n>t.length?wn:(t=t.slice(s,s+n),e.C=s+n,t)))}g.cancel=function(){this.J=!0,Rt(this)};function Ge(e){e.Y=Date.now()+e.P,Ho(e,e.P)}function Ho(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=ze(Y(e.lb,e),t)}function Un(e){e.B&&(E.clearTimeout(e.B),e.B=null)}g.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(xh(this.j,this.A),this.L!=2&&(Oe(),et(17)),Rt(this),this.o=2,Te(this)):Ho(this,this.Y-e)};function Te(e){e.l.H==0||e.J||fa(e.l,e)}function Rt(e){Un(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,hr(e.V),Lo(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Os(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Ls(n.i,e))){if(!e.K&&Ls(n.i,e)&&n.H==3){try{var s=n.Ja.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Tn(n),jn(n);else break t;wr(n),et(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=ze(Y(n.ib,n),6e3));if(1>=Zo(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Mt(n,11)}else if((e.K||n.g==e)&&Tn(n),!be(t))for(r=n.Ja.g.parse(t),t=0;t<r.length;t++){let c=r[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const h=c[3];h!=null&&(n.ra=h,n.l.info("VER="+n.ra));const l=c[4];l!=null&&(n.Ga=l,n.l.info("SVER="+n.Ga));const p=c[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const y=e.g;if(y){const A=y.g?y.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(A){var i=s.i;i.g||A.indexOf("spdy")==-1&&A.indexOf("quic")==-1&&A.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(pr(i,i.h),i.h=null))}if(s.F){const x=y.g?y.g.getResponseHeader("X-HTTP-Session-Id"):null;x&&(s.Da=x,R(s.I,s.F,x))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=e;if(s.wa=ma(s,s.J?s.pa:null,s.Y),o.K){ta(s.i,o);var a=o,u=s.L;u&&a.setTimeout(u),a.B&&(Un(a),Ge(a)),s.g=o}else la(s);0<n.j.length&&zn(n)}else c[0]!="stop"&&c[0]!="close"||Mt(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Mt(n,7):vr(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Oe(4)}catch{}}function Lh(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(kn(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function Ph(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(kn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function Ko(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(kn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Ph(e),s=Lh(e),r=s.length,i=0;i<r;i++)t.call(void 0,s[i],n&&n[i],e)}var Go=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fh(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),r=null;if(0<=s){var i=e[n].substring(0,s);r=e[n].substring(s+1)}else i=e[n];t(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Lt(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Lt){this.h=e.h,En(this,e.j),this.s=e.s,this.g=e.g,In(this,e.m),this.l=e.l;var t=e.i,n=new Le;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),mi(this,n),this.o=e.o}else e&&(t=String(e).match(Go))?(this.h=!1,En(this,t[1]||"",!0),this.s=ye(t[2]||""),this.g=ye(t[3]||"",!0),In(this,t[4]),this.l=ye(t[5]||"",!0),mi(this,t[6]||"",!0),this.o=ye(t[7]||"")):(this.h=!1,this.i=new Le(null,this.h))}Lt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ve(t,yi,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(ve(t,yi,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(ve(n,n.charAt(0)=="/"?$h:Uh,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ve(n,qh)),e.join("")};function yt(e){return new Lt(e)}function En(e,t,n){e.j=n?ye(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function In(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function mi(e,t,n){t instanceof Le?(e.i=t,jh(e.i,e.h)):(n||(t=ve(t,Bh)),e.i=new Le(t,e.h))}function R(e,t,n){e.i.set(t,n)}function $n(e){return R(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ye(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ve(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Vh),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Vh(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var yi=/[#\/\?@]/g,Uh=/[#\?:]/g,$h=/[#\?]/g,Bh=/[#\?@]/g,qh=/#/g;function Le(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function kt(e){e.g||(e.g=new Map,e.h=0,e.i&&Fh(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}g=Le.prototype;g.add=function(e,t){kt(this),this.i=null,e=ce(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Qo(e,t){kt(e),t=ce(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Wo(e,t){return kt(e),t=ce(e,t),e.g.has(t)}g.forEach=function(e,t){kt(this),this.g.forEach(function(n,s){n.forEach(function(r){e.call(t,r,s,this)},this)},this)};g.ta=function(){kt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const r=e[s];for(let i=0;i<r.length;i++)n.push(t[s])}return n};g.Z=function(e){kt(this);let t=[];if(typeof e=="string")Wo(this,e)&&(t=t.concat(this.g.get(ce(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};g.set=function(e,t){return kt(this),this.i=null,e=ce(this,e),Wo(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};g.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Yo(e,t,n){Qo(e,t),0<n.length&&(e.i=null,e.g.set(ce(e,t),er(n)),e.h+=n.length)}g.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),e.push(r)}}return this.i=e.join("&")};function ce(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function jh(e,t){t&&!e.j&&(kt(e),e.i=null,e.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Qo(this,s),Yo(this,r,n))},e)),e.j=t}var zh=class{constructor(e,t){this.g=e,this.map=t}};function Xo(e){this.l=e||Hh,E.PerformanceNavigationTiming?(e=E.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(E.g&&E.g.Ka&&E.g.Ka()&&E.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Hh=10;function Jo(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Zo(e){return e.h?1:e.g?e.g.size:0}function Ls(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function pr(e,t){e.g?e.g.add(t):e.h=t}function ta(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Xo.prototype.cancel=function(){if(this.i=ea(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function ea(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return er(e.i)}var Kh=class{stringify(e){return E.JSON.stringify(e,void 0)}parse(e){return E.JSON.parse(e,void 0)}};function Gh(){this.g=new Kh}function Qh(e,t,n){const s=n||"";try{Ko(e,function(r,i){let o=r;qe(r)&&(o=ur(r)),t.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw t.push(s+"type="+encodeURIComponent("_badmap")),r}}function Wh(e,t){const n=new Ln;if(E.Image){const s=new Image;s.onload=sn(on,n,s,"TestLoadImage: loaded",!0,t),s.onerror=sn(on,n,s,"TestLoadImage: error",!1,t),s.onabort=sn(on,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=sn(on,n,s,"TestLoadImage: timeout",!1,t),E.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function on(e,t,n,s,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(s)}catch{}}function Qe(e){this.l=e.fc||null,this.j=e.ob||!1}j(Qe,dr);Qe.prototype.g=function(){return new Bn(this.l,this.j)};Qe.prototype.i=function(e){return function(){return e}}({});function Bn(e,t){q.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=mr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}j(Bn,q);var mr=0;g=Bn.prototype;g.open=function(e,t){if(this.readyState!=mr)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Pe(this)};g.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||E).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,We(this)),this.readyState=mr};g.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Pe(this)),this.g&&(this.readyState=3,Pe(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof E.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;na(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function na(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}g.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?We(this):Pe(this),this.readyState==3&&na(this)}};g.Za=function(e){this.g&&(this.response=this.responseText=e,We(this))};g.Ya=function(e){this.g&&(this.response=e,We(this))};g.ka=function(){this.g&&We(this)};function We(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Pe(e)}g.setRequestHeader=function(e,t){this.v.append(e,t)};g.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};g.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Pe(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Bn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Yh=E.JSON.parse;function O(e){q.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=sa,this.L=this.M=!1}j(O,q);var sa="",Xh=/^https?$/i,Jh=["POST","PUT"];g=O.prototype;g.Oa=function(e){this.M=e};g.ha=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():xs.g(),this.C=this.u?pi(this.u):pi(xs),this.g.onreadystatechange=Y(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){vi(this,i);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=E.FormData&&e instanceof E.FormData,!(0<=Eo(Jh,t))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{oa(this),0<this.B&&((this.L=Zh(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Y(this.ua,this)):this.A=lr(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){vi(this,i)}};function Zh(e){return te&&typeof e.timeout=="number"&&e.ontimeout!==void 0}g.ua=function(){typeof tr<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,K(this,"timeout"),this.abort(8))};function vi(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,ra(e),qn(e)}function ra(e){e.F||(e.F=!0,K(e,"complete"),K(e,"error"))}g.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,K(this,"complete"),K(this,"abort"),qn(this))};g.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),qn(this,!0)),O.$.N.call(this)};g.La=function(){this.s||(this.G||this.v||this.l?ia(this):this.kb())};g.kb=function(){ia(this)};function ia(e){if(e.h&&typeof tr<"u"&&(!e.C[1]||ft(e)!=4||e.da()!=2)){if(e.v&&ft(e)==4)lr(e.La,0,e);else if(K(e,"readystatechange"),ft(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=o===0){var r=String(e.I).match(Go)[1]||null;!r&&E.self&&E.self.location&&(r=E.self.location.protocol.slice(0,-1)),s=!Xh.test(r?r.toLowerCase():"")}n=s}if(n)K(e,"complete"),K(e,"success");else{e.m=6;try{var i=2<ft(e)?e.g.statusText:""}catch{i=""}e.j=i+" ["+e.da()+"]",ra(e)}}finally{qn(e)}}}}function qn(e,t){if(e.g){oa(e);const n=e.g,s=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||K(e,"ready");try{n.onreadystatechange=s}catch{}}}function oa(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(E.clearTimeout(e.A),e.A=null)}g.isActive=function(){return!!this.g};function ft(e){return e.g?e.g.readyState:0}g.da=function(){try{return 2<ft(this)?this.g.status:-1}catch{return-1}};g.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};g.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Yh(t)}};function wi(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case sa:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function tl(e){const t={};e=(e.g&&2<=ft(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<e.length;s++){if(be(e[s]))continue;var n=Ah(e[s]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=t[r]||[];t[r]=i,i.push(n)}vh(t,function(s){return s.join(", ")})}g.Ia=function(){return this.m};g.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function aa(e){let t="";return sr(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function yr(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=aa(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):R(e,t,n))}function pe(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function ua(e){this.Ga=0,this.j=[],this.l=new Ln,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=pe("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=pe("baseRetryDelayMs",5e3,e),this.hb=pe("retryDelaySeedMs",1e4,e),this.eb=pe("forwardChannelMaxRetries",2,e),this.xa=pe("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Xo(e&&e.concurrentRequestLimit),this.Ja=new Gh,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}g=ua.prototype;g.ra=8;g.H=1;function vr(e){if(ca(e),e.H==3){var t=e.W++,n=yt(e.I);if(R(n,"SID",e.K),R(n,"RID",t),R(n,"TYPE","terminate"),Ye(e,n),t=new Ke(e,e.l,t),t.L=2,t.v=$n(yt(n)),n=!1,E.navigator&&E.navigator.sendBeacon)try{n=E.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&E.Image&&(new Image().src=t.v,n=!0),n||(t.g=ya(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Ge(t)}pa(e)}function jn(e){e.g&&(Er(e),e.g.cancel(),e.g=null)}function ca(e){jn(e),e.u&&(E.clearTimeout(e.u),e.u=null),Tn(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&E.clearTimeout(e.m),e.m=null)}function zn(e){if(!Jo(e.i)&&!e.m){e.m=!0;var t=e.Na;xe||Ro(),Re||(xe(),Re=!0),cr.add(t,e),e.C=0}}function el(e,t){return Zo(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=ze(Y(e.Na,e,t),ga(e,e.C)),e.C++,!0)}g.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const r=new Ke(this,this.l,e);let i=this.s;if(this.U&&(i?(i=Co(i),Ao(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=ha(this,r,t),n=yt(this.I),R(n,"RID",e),R(n,"CVER",22),this.F&&R(n,"X-HTTP-Session-Id",this.F),Ye(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(aa(i)))+"&"+t:this.o&&yr(n,this.o,i)),pr(this.i,r),this.bb&&R(n,"TYPE","init"),this.P?(R(n,"$req",t),R(n,"SID","null"),r.aa=!0,Ms(r,n,null)):Ms(r,n,t),this.H=2}}else this.H==3&&(e?Ei(this,e):this.j.length==0||Jo(this.i)||Ei(this))};function Ei(e,t){var n;t?n=t.m:n=e.W++;const s=yt(e.I);R(s,"SID",e.K),R(s,"RID",n),R(s,"AID",e.V),Ye(e,s),e.o&&e.s&&yr(s,e.o,e.s),n=new Ke(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=ha(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),pr(e.i,n),Ms(n,s,t)}function Ye(e,t){e.na&&sr(e.na,function(n,s){R(t,s,n)}),e.h&&Ko({},function(n,s){R(t,s,n)})}function ha(e,t,n){n=Math.min(e.j.length,n);var s=e.h?Y(e.h.Va,e.h,e):null;t:{var r=e.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let u=0;u<n;u++){let c=r[u].g;const h=r[u].map;if(c-=i,0>c)i=Math.max(0,r[u].g-100),a=!1;else try{Qh(h,o,"req"+c+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,s}function la(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;xe||Ro(),Re||(xe(),Re=!0),cr.add(t,e),e.A=0}}function wr(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=ze(Y(e.Ma,e),ga(e,e.A)),e.A++,!0)}g.Ma=function(){if(this.u=null,da(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=ze(Y(this.jb,this),e)}};g.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,et(10),jn(this),da(this))};function Er(e){e.B!=null&&(E.clearTimeout(e.B),e.B=null)}function da(e){e.g=new Ke(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=yt(e.wa);R(t,"RID","rpc"),R(t,"SID",e.K),R(t,"AID",e.V),R(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&R(t,"TO",e.qa),R(t,"TYPE","xmlhttp"),Ye(e,t),e.o&&e.s&&yr(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=$n(yt(t)),n.s=null,n.S=!0,qo(n,e)}g.ib=function(){this.v!=null&&(this.v=null,jn(this),wr(this),et(19))};function Tn(e){e.v!=null&&(E.clearTimeout(e.v),e.v=null)}function fa(e,t){var n=null;if(e.g==t){Tn(e),Er(e),e.g=null;var s=2}else if(Ls(e.i,t))n=t.F,ta(e.i,t),s=1;else return;if(e.H!=0){if(t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var r=e.C;s=Pn(),K(s,new Vo(s,n)),zn(e)}else la(e);else if(r=t.o,r==3||r==0&&0<t.ca||!(s==1&&el(e,t)||s==2&&wr(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),r){case 1:Mt(e,5);break;case 4:Mt(e,10);break;case 3:Mt(e,6);break;default:Mt(e,2)}}}function ga(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Mt(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var s=Y(e.pb,e);n||(n=new Lt("//www.google.com/images/cleardot.gif"),E.location&&E.location.protocol=="http"||En(n,"https"),$n(n)),Wh(n.toString(),s)}else et(2);e.H=0,e.h&&e.h.za(t),pa(e),ca(e)}g.pb=function(e){e?(this.l.info("Successfully pinged google.com"),et(2)):(this.l.info("Failed to ping google.com"),et(1))};function pa(e){if(e.H=0,e.ma=[],e.h){const t=ea(e.i);(t.length!=0||e.j.length!=0)&&(hi(e.ma,t),hi(e.ma,e.j),e.i.i.length=0,er(e.j),e.j.length=0),e.h.ya()}}function ma(e,t,n){var s=n instanceof Lt?yt(n):new Lt(n);if(s.g!="")t&&(s.g=t+"."+s.g),In(s,s.m);else{var r=E.location;s=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var i=new Lt(null);s&&En(i,s),t&&(i.g=t),r&&In(i,r),n&&(i.l=n),s=i}return n=e.F,t=e.Da,n&&t&&R(s,n,t),R(s,"VER",e.ra),Ye(e,s),s}function ya(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new O(new Qe({ob:!0})):new O(e.va),t.Oa(e.J),t}g.isActive=function(){return!!this.h&&this.h.isActive(this)};function va(){}g=va.prototype;g.Ba=function(){};g.Aa=function(){};g.za=function(){};g.ya=function(){};g.isActive=function(){return!0};g.Va=function(){};function Sn(){if(te&&!(10<=Number(gh)))throw Error("Environmental error: no available transport.")}Sn.prototype.g=function(e,t){return new it(e,t)};function it(e,t){q.call(this),this.g=new ua(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!be(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!be(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new he(this)}j(it,q);it.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;et(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=ma(e,null,e.Y),zn(e)};it.prototype.close=function(){vr(this.g)};it.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=ur(e),e=n);t.j.push(new zh(t.fb++,e)),t.H==3&&zn(t)};it.prototype.N=function(){this.g.h=null,delete this.j,vr(this.g),delete this.g,it.$.N.call(this)};function wa(e){fr.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}j(wa,fr);function Ea(){gr.call(this),this.status=1}j(Ea,gr);function he(e){this.g=e}j(he,va);he.prototype.Ba=function(){K(this.g,"a")};he.prototype.Aa=function(e){K(this.g,new wa(e))};he.prototype.za=function(e){K(this.g,new Ea)};he.prototype.ya=function(){K(this.g,"b")};function nl(){this.blockSize=-1}function ut(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}j(ut,nl);ut.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function fs(e,t,n){n||(n=0);var s=Array(16);if(typeof t=="string")for(var r=0;16>r;++r)s[r]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],r=e.g[2];var i=e.g[3],o=t+(i^n&(r^i))+s[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=i+(r^t&(n^r))+s[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=r+(n^i&(t^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(t^r&(i^t))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(i^n&(r^i))+s[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(r^t&(n^r))+s[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=r+(n^i&(t^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(t^r&(i^t))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(i^n&(r^i))+s[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(r^t&(n^r))+s[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=r+(n^i&(t^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(t^r&(i^t))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(i^n&(r^i))+s[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(r^t&(n^r))+s[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=r+(n^i&(t^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(t^r&(i^t))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(r^i&(n^r))+s[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(t^n))+s[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(i^t))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^i&(n^r))+s[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(t^n))+s[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(i^t))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^i&(n^r))+s[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(t^n))+s[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(i^t))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^i&(n^r))+s[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(t^n))+s[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(i^t))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(n^r^i)+s[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^r)+s[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=r+(i^t^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^t)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^i)+s[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^r)+s[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=r+(i^t^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^t)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^i)+s[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^r)+s[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=r+(i^t^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^t)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^i)+s[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^r)+s[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=r+(i^t^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^t)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(r^(n|~i))+s[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~r))+s[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=r+(t^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~t))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~i))+s[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~r))+s[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=r+(t^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~t))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~i))+s[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~r))+s[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=r+(t^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~t))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~i))+s[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~r))+s[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=r+(t^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~t))+s[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+r&4294967295,e.g[3]=e.g[3]+i&4294967295}ut.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,s=this.m,r=this.h,i=0;i<t;){if(r==0)for(;i<=n;)fs(this,e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(s[r++]=e.charCodeAt(i++),r==this.blockSize){fs(this,s),r=0;break}}else for(;i<t;)if(s[r++]=e[i++],r==this.blockSize){fs(this,s),r=0;break}}this.h=r,this.i+=t};ut.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var s=0;32>s;s+=8)e[n++]=this.g[t]>>>s&255;return e};function k(e,t){this.h=t;for(var n=[],s=!0,r=e.length-1;0<=r;r--){var i=e[r]|0;s&&i==t||(n[r]=i,s=!1)}this.g=n}var sl={};function Ir(e){return-128<=e&&128>e?lh(e,function(t){return new k([t|0],0>t?-1:0)}):new k([e|0],0>e?-1:0)}function gt(e){if(isNaN(e)||!isFinite(e))return Qt;if(0>e)return H(gt(-e));for(var t=[],n=1,s=0;e>=n;s++)t[s]=e/n|0,n*=Ps;return new k(t,0)}function Ia(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return H(Ia(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=gt(Math.pow(t,8)),s=Qt,r=0;r<e.length;r+=8){var i=Math.min(8,e.length-r),o=parseInt(e.substring(r,r+i),t);8>i?(i=gt(Math.pow(t,i)),s=s.R(i).add(gt(o))):(s=s.R(n),s=s.add(gt(o)))}return s}var Ps=4294967296,Qt=Ir(0),Fs=Ir(1),Ii=Ir(16777216);g=k.prototype;g.ea=function(){if(at(this))return-H(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var s=this.D(n);e+=(0<=s?s:Ps+s)*t,t*=Ps}return e};g.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(mt(this))return"0";if(at(this))return"-"+H(this).toString(e);for(var t=gt(Math.pow(e,6)),n=this,s="";;){var r=An(n,t).g;n=Cn(n,r.R(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=r,mt(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};g.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function mt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function at(e){return e.h==-1}g.X=function(e){return e=Cn(this,e),at(e)?-1:mt(e)?0:1};function H(e){for(var t=e.g.length,n=[],s=0;s<t;s++)n[s]=~e.g[s];return new k(n,~e.h).add(Fs)}g.abs=function(){return at(this)?H(this):this};g.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0,r=0;r<=t;r++){var i=s+(this.D(r)&65535)+(e.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(e.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new k(n,n[n.length-1]&-2147483648?-1:0)};function Cn(e,t){return e.add(H(t))}g.R=function(e){if(mt(this)||mt(e))return Qt;if(at(this))return at(e)?H(this).R(H(e)):H(H(this).R(e));if(at(e))return H(this.R(H(e)));if(0>this.X(Ii)&&0>e.X(Ii))return gt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],s=0;s<2*t;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<e.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=e.D(r)>>>16,u=e.D(r)&65535;n[2*s+2*r]+=o*u,an(n,2*s+2*r),n[2*s+2*r+1]+=i*u,an(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,an(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,an(n,2*s+2*r+2)}for(s=0;s<t;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=t;s<2*t;s++)n[s]=0;return new k(n,0)};function an(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function me(e,t){this.g=e,this.h=t}function An(e,t){if(mt(t))throw Error("division by zero");if(mt(e))return new me(Qt,Qt);if(at(e))return t=An(H(e),t),new me(H(t.g),H(t.h));if(at(t))return t=An(e,H(t)),new me(H(t.g),t.h);if(30<e.g.length){if(at(e)||at(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Fs,s=t;0>=s.X(e);)n=Ti(n),s=Ti(s);var r=jt(n,1),i=jt(s,1);for(s=jt(s,2),n=jt(n,2);!mt(s);){var o=i.add(s);0>=o.X(e)&&(r=r.add(n),i=o),s=jt(s,1),n=jt(n,1)}return t=Cn(e,r.R(t)),new me(r,t)}for(r=Qt;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=gt(n),o=i.R(t);at(o)||0<o.X(e);)n-=s,i=gt(n),o=i.R(t);mt(i)&&(i=Fs),r=r.add(i),e=Cn(e,o)}return new me(r,e)}g.gb=function(e){return An(this,e).h};g.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)&e.D(s);return new k(n,this.h&e.h)};g.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)|e.D(s);return new k(n,this.h|e.h)};g.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)^e.D(s);return new k(n,this.h^e.h)};function Ti(e){for(var t=e.g.length+1,n=[],s=0;s<t;s++)n[s]=e.D(s)<<1|e.D(s-1)>>>31;return new k(n,e.h)}function jt(e,t){var n=t>>5;t%=32;for(var s=e.g.length-n,r=[],i=0;i<s;i++)r[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new k(r,e.h)}Sn.prototype.createWebChannel=Sn.prototype.g;it.prototype.send=it.prototype.u;it.prototype.open=it.prototype.m;it.prototype.close=it.prototype.close;Fn.NO_ERROR=0;Fn.TIMEOUT=8;Fn.HTTP_ERROR=6;Uo.COMPLETE="complete";$o.EventType=He;He.OPEN="a";He.CLOSE="b";He.ERROR="c";He.MESSAGE="d";q.prototype.listen=q.prototype.O;O.prototype.listenOnce=O.prototype.P;O.prototype.getLastError=O.prototype.Sa;O.prototype.getLastErrorCode=O.prototype.Ia;O.prototype.getStatus=O.prototype.da;O.prototype.getResponseJson=O.prototype.Wa;O.prototype.getResponseText=O.prototype.ja;O.prototype.send=O.prototype.ha;O.prototype.setWithCredentials=O.prototype.Oa;ut.prototype.digest=ut.prototype.l;ut.prototype.reset=ut.prototype.reset;ut.prototype.update=ut.prototype.j;k.prototype.add=k.prototype.add;k.prototype.multiply=k.prototype.R;k.prototype.modulo=k.prototype.gb;k.prototype.compare=k.prototype.X;k.prototype.toNumber=k.prototype.ea;k.prototype.toString=k.prototype.toString;k.prototype.getBits=k.prototype.D;k.fromNumber=gt;k.fromString=Ia;var rl=function(){return new Sn},il=function(){return Pn()},gs=Fn,ol=Uo,al=Bt,Si={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ul=Qe,un=$o,cl=O,hl=ut,Wt=k;const Ci="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Q.UNAUTHENTICATED=new Q(null),Q.GOOGLE_CREDENTIALS=new Q("google-credentials-uid"),Q.FIRST_PARTY=new Q("first-party-uid"),Q.MOCK_USER=new Q("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let le="9.23.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt=new go("@firebase/firestore");function Ai(){return Vt.logLevel}function v(e,...t){if(Vt.logLevel<=N.DEBUG){const n=t.map(Tr);Vt.debug(`Firestore (${le}): ${e}`,...n)}}function vt(e,...t){if(Vt.logLevel<=N.ERROR){const n=t.map(Tr);Vt.error(`Firestore (${le}): ${e}`,...n)}}function ee(e,...t){if(Vt.logLevel<=N.WARN){const n=t.map(Tr);Vt.warn(`Firestore (${le}): ${e}`,...n)}}function Tr(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e="Unexpected state"){const t=`FIRESTORE (${le}) INTERNAL ASSERTION FAILED: `+e;throw vt(t),new Error(t)}function U(e,t){e||T()}function _(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class m extends ue{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ll{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Q.UNAUTHENTICATED))}shutdown(){}}class dl{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class fl{constructor(t){this.t=t,this.currentUser=Q.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const r=u=>this.i!==s?(s=this.i,n(u)):Promise.resolve();let i=new Ct;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ct,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const u=i;t.enqueueRetryable(async()=>{await u.promise,await r(this.currentUser)})},a=u=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ct)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(U(typeof s.accessToken=="string"),new Ta(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return U(t===null||typeof t=="string"),new Q(t)}}class gl{constructor(t,n,s){this.h=t,this.l=n,this.m=s,this.type="FirstParty",this.user=Q.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class pl{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new gl(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(Q.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ml{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yl{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,n){const s=i=>{i.error!=null&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,v("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>s(i))};const r=i=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(U(typeof n.token=="string"),this.T=n.token,new ml(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const r=vl(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=t.charAt(r[i]%t.length))}return s}}function b(e,t){return e<t?-1:e>t?1:0}function ne(e,t,n){return e.length===t.length&&e.every((s,r)=>n(s,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new m(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new m(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new m(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new m(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return B.fromMillis(Date.now())}static fromDate(t){return B.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new B(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?b(this.nanoseconds,t.nanoseconds):b(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(t){this.timestamp=t}static fromTimestamp(t){return new I(t)}static min(){return new I(new B(0,0))}static max(){return new I(new B(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(t,n,s){n===void 0?n=0:n>t.length&&T(),s===void 0?s=t.length-n:s>t.length-n&&T(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return Fe.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Fe?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let r=0;r<s;r++){const i=t.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class M extends Fe{construct(t,n,s){return new M(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new m(d.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new M(n)}static emptyPath(){return new M([])}}const wl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends Fe{construct(t,n,s){return new tt(t,n,s)}static isValidIdentifier(t){return wl.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(t){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new m(d.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new m(d.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new m(d.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=u,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new m(d.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new tt(n)}static emptyPath(){return new tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(t){this.path=t}static fromPath(t){return new w(M.fromString(t))}static fromName(t){return new w(M.fromString(t).popFirst(5))}static empty(){return new w(M.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&M.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return M.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new w(new M(t.slice()))}}function El(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,r=I.fromTimestamp(s===1e9?new B(n+1,0):new B(n,s));return new _t(r,w.empty(),t)}function Il(e){return new _t(e.readTime,e.key,-1)}class _t{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new _t(I.min(),w.empty(),-1)}static max(){return new _t(I.max(),w.empty(),-1)}}function Tl(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=w.comparator(e.documentKey,t.documentKey),n!==0?n:b(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Cl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sr(e){if(e.code!==d.FAILED_PRECONDITION||e.message!==Sl)throw e;v("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&T(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new f((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof f?n:f.resolve(n)}catch(n){return f.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):f.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):f.reject(n)}static resolve(t){return new f((n,s)=>{n(t)})}static reject(t){return new f((n,s)=>{s(t)})}static waitFor(t){return new f((n,s)=>{let r=0,i=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},u=>s(u))}),o=!0,i===r&&n()})}static or(t){let n=f.resolve(!1);for(const s of t)n=n.next(r=>r?f.resolve(r):s());return n}static forEach(t,n){const s=[];return t.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(t,n){return new f((s,r)=>{const i=t.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const c=u;n(t[c]).next(h=>{o[c]=h,++a,a===i&&s(o)},h=>r(h))}})}static doWhile(t,n){return new f((s,r)=>{const i=()=>{t()===!0?n().next(()=>{i()},r):s()};i()})}}function Xe(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}Cr.ct=-1;function Hn(e){return e==null}function _n(e){return e===0&&1/e==-1/0}function Al(e){return typeof e=="number"&&Number.isInteger(e)&&!_n(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Je(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Ca(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(t,n){this.comparator=t,this.root=n||z.EMPTY}insert(t,n){return new L(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,z.BLACK,null,null))}remove(t){return new L(this.comparator,this.root.remove(t,this.comparator).copy(null,null,z.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(t,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new cn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new cn(this.root,t,this.comparator,!1)}getReverseIterator(){return new cn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new cn(this.root,t,this.comparator,!0)}}class cn{constructor(t,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?s(t.key,n):1,n&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class z{constructor(t,n,s,r,i){this.key=t,this.value=n,this.color=s??z.RED,this.left=r??z.EMPTY,this.right=i??z.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,r,i){return new z(t??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let r=this;const i=s(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return z.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return z.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,z.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,z.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw T();const t=this.left.check();if(t!==this.right.check())throw T();return t+(this.isRed()?0:1)}}z.EMPTY=null,z.RED=!0,z.BLACK=!1;z.EMPTY=new class{constructor(){this.size=0}get key(){throw T()}get value(){throw T()}get color(){throw T()}get left(){throw T()}get right(){throw T()}copy(e,t,n,s,r){return this}insert(e,t,n){return new z(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t){this.comparator=t,this.data=new L(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Di(this.data.getIterator())}getIteratorFrom(t){return new Di(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof J)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new J(this.comparator);return n.data=t,n}}class Di{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t){this.fields=t,t.sort(tt.comparator)}static empty(){return new Et([])}unionWith(t){let n=new J(tt.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new Et(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return ne(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Aa("Invalid base64 string: "+r):r}}(t);return new Z(n)}static fromUint8Array(t){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(t);return new Z(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return b(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Z.EMPTY_BYTE_STRING=new Z("");const _l=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Dt(e){if(U(!!e),typeof e=="string"){let t=0;const n=_l.exec(e);if(U(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:F(e.seconds),nanos:F(e.nanos)}}function F(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Ut(e){return typeof e=="string"?Z.fromBase64String(e):Z.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(e){var t,n;return((n=(((t=e?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function _r(e){const t=e.mapValue.fields.__previous_value__;return Ar(t)?_r(t):t}function Ve(e){const t=Dt(e.mapValue.fields.__local_write_time__.timestampValue);return new B(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(t,n,s,r,i,o,a,u,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Ue{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Ue("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ue&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function $t(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ar(e)?4:Nl(e)?9007199254740991:10:T()}function pt(e,t){if(e===t)return!0;const n=$t(e);if(n!==$t(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ve(e).isEqual(Ve(t));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Dt(s.timestampValue),o=Dt(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,r){return Ut(s.bytesValue).isEqual(Ut(r.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,r){return F(s.geoPointValue.latitude)===F(r.geoPointValue.latitude)&&F(s.geoPointValue.longitude)===F(r.geoPointValue.longitude)}(e,t);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return F(s.integerValue)===F(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=F(s.doubleValue),o=F(r.doubleValue);return i===o?_n(i)===_n(o):isNaN(i)&&isNaN(o)}return!1}(e,t);case 9:return ne(e.arrayValue.values||[],t.arrayValue.values||[],pt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(_i(i)!==_i(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!pt(i[a],o[a])))return!1;return!0}(e,t);default:return T()}}function $e(e,t){return(e.values||[]).find(n=>pt(n,t))!==void 0}function se(e,t){if(e===t)return 0;const n=$t(e),s=$t(t);if(n!==s)return b(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return b(e.booleanValue,t.booleanValue);case 2:return function(r,i){const o=F(r.integerValue||r.doubleValue),a=F(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Ni(e.timestampValue,t.timestampValue);case 4:return Ni(Ve(e),Ve(t));case 5:return b(e.stringValue,t.stringValue);case 6:return function(r,i){const o=Ut(r),a=Ut(i);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let u=0;u<o.length&&u<a.length;u++){const c=b(o[u],a[u]);if(c!==0)return c}return b(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(r,i){const o=b(F(r.latitude),F(i.latitude));return o!==0?o:b(F(r.longitude),F(i.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let u=0;u<o.length&&u<a.length;++u){const c=se(o[u],a[u]);if(c)return c}return b(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(r,i){if(r===hn.mapValue&&i===hn.mapValue)return 0;if(r===hn.mapValue)return 1;if(i===hn.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),u=i.fields||{},c=Object.keys(u);a.sort(),c.sort();for(let h=0;h<a.length&&h<c.length;++h){const l=b(a[h],c[h]);if(l!==0)return l;const p=se(o[a[h]],u[c[h]]);if(p!==0)return p}return b(a.length,c.length)}(e.mapValue,t.mapValue);default:throw T()}}function Ni(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return b(e,t);const n=Dt(e),s=Dt(t),r=b(n.seconds,s.seconds);return r!==0?r:b(n.nanos,s.nanos)}function re(e){return Vs(e)}function Vs(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const r=Dt(s);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Ut(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,w.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Vs(o);return r+"]"}(e.arrayValue):"mapValue"in e?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Vs(s.fields[a])}`;return i+"}"}(e.mapValue):T();var t,n}function bi(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Us(e){return!!e&&"integerValue"in e}function Dr(e){return!!e&&"arrayValue"in e}function ki(e){return!!e&&"nullValue"in e}function xi(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ps(e){return!!e&&"mapValue"in e}function Se(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Je(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=Se(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Se(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Nl(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t){this.value=t}static empty(){return new dt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!ps(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Se(n)}setAll(t){let n=tt.emptyPath(),s={},r=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Se(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(t){const n=this.field(t.popLast());ps(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return pt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let r=n.mapValue.fields[t.get(s)];ps(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,s){Je(n,(r,i)=>t[r]=i);for(const r of s)delete t[r]}clone(){return new dt(Se(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t,n,s,r,i,o,a){this.key=t,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new W(t,0,I.min(),I.min(),I.min(),dt.empty(),0)}static newFoundDocument(t,n,s,r){return new W(t,1,n,I.min(),s,r,0)}static newNoDocument(t,n){return new W(t,2,n,I.min(),I.min(),dt.empty(),0)}static newUnknownDocument(t,n){return new W(t,3,n,I.min(),I.min(),dt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(I.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=dt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=I.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof W&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new W(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(t,n){this.position=t,this.inclusive=n}}function Ri(e,t,n){let s=0;for(let r=0;r<e.position.length;r++){const i=t[r],o=e.position[r];if(i.field.isKeyField()?s=w.comparator(w.fromName(o.referenceValue),n.key):s=se(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Mi(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!pt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(t,n="asc"){this.field=t,this.dir=n}}function bl(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{}class V extends _a{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new xl(t,n,s):n==="array-contains"?new Ol(t,s):n==="in"?new Ll(t,s):n==="not-in"?new Pl(t,s):n==="array-contains-any"?new Fl(t,s):new V(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new Rl(t,s):new Ml(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(se(n,this.value)):n!==null&&$t(this.value)===$t(n)&&this.matchesComparison(se(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return T()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ct extends _a{constructor(t,n){super(),this.filters=t,this.op=n,this.lt=null}static create(t,n){return new ct(t,n)}matches(t){return Da(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.ft(n=>n.isInequality());return t!==null?t.field:null}ft(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function Da(e){return e.op==="and"}function Na(e){return kl(e)&&Da(e)}function kl(e){for(const t of e.filters)if(t instanceof ct)return!1;return!0}function $s(e){if(e instanceof V)return e.field.canonicalString()+e.op.toString()+re(e.value);if(Na(e))return e.filters.map(t=>$s(t)).join(",");{const t=e.filters.map(n=>$s(n)).join(",");return`${e.op}(${t})`}}function ba(e,t){return e instanceof V?function(n,s){return s instanceof V&&n.op===s.op&&n.field.isEqual(s.field)&&pt(n.value,s.value)}(e,t):e instanceof ct?function(n,s){return s instanceof ct&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&ba(i,s.filters[o]),!0):!1}(e,t):void T()}function ka(e){return e instanceof V?function(t){return`${t.field.canonicalString()} ${t.op} ${re(t.value)}`}(e):e instanceof ct?function(t){return t.op.toString()+" {"+t.getFilters().map(ka).join(" ,")+"}"}(e):"Filter"}class xl extends V{constructor(t,n,s){super(t,n,s),this.key=w.fromName(s.referenceValue)}matches(t){const n=w.comparator(t.key,this.key);return this.matchesComparison(n)}}class Rl extends V{constructor(t,n){super(t,"in",n),this.keys=xa("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Ml extends V{constructor(t,n){super(t,"not-in",n),this.keys=xa("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function xa(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>w.fromName(s.referenceValue))}class Ol extends V{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Dr(n)&&$e(n.arrayValue,this.value)}}class Ll extends V{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&$e(this.value.arrayValue,n)}}class Pl extends V{constructor(t,n){super(t,"not-in",n)}matches(t){if($e(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!$e(this.value.arrayValue,n)}}class Fl extends V{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Dr(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>$e(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(t,n=null,s=[],r=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.dt=null}}function Oi(e,t=null,n=[],s=[],r=null,i=null,o=null){return new Vl(e,t,n,s,r,i,o)}function Nr(e){const t=_(e);if(t.dt===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>$s(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Hn(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>re(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>re(s)).join(",")),t.dt=n}return t.dt}function br(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!bl(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!ba(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Mi(e.startAt,t.startAt)&&Mi(e.endAt,t.endAt)}function Bs(e){return w.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(t,n=null,s=[],r=[],i=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.wt=null,this._t=null,this.startAt,this.endAt}}function Ul(e,t,n,s,r,i,o,a){return new de(e,t,n,s,r,i,o,a)}function kr(e){return new de(e)}function Li(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function xr(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Kn(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function Ra(e){return e.collectionGroup!==null}function Xt(e){const t=_(e);if(t.wt===null){t.wt=[];const n=Kn(t),s=xr(t);if(n!==null&&s===null)n.isKeyField()||t.wt.push(new Yt(n)),t.wt.push(new Yt(tt.keyField(),"asc"));else{let r=!1;for(const i of t.explicitOrderBy)t.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new Yt(tt.keyField(),i))}}}return t.wt}function wt(e){const t=_(e);if(!t._t)if(t.limitType==="F")t._t=Oi(t.path,t.collectionGroup,Xt(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const i of Xt(t)){const o=i.dir==="desc"?"asc":"desc";n.push(new Yt(i.field,o))}const s=t.endAt?new Dn(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Dn(t.startAt.position,t.startAt.inclusive):null;t._t=Oi(t.path,t.collectionGroup,n,t.filters,t.limit,s,r)}return t._t}function qs(e,t){t.getFirstInequalityField(),Kn(e);const n=e.filters.concat([t]);return new de(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function js(e,t,n){return new de(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Gn(e,t){return br(wt(e),wt(t))&&e.limitType===t.limitType}function Ma(e){return`${Nr(wt(e))}|lt:${e.limitType}`}function zs(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>ka(s)).join(", ")}]`),Hn(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>re(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>re(s)).join(",")),`Target(${n})`}(wt(e))}; limitType=${e.limitType})`}function Qn(e,t){return t.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):w.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(e,t)&&function(n,s){for(const r of Xt(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Ri(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Xt(n),s)||n.endAt&&!function(r,i,o){const a=Ri(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Xt(n),s))}(e,t)}function $l(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Oa(e){return(t,n)=>{let s=!1;for(const r of Xt(e)){const i=Bl(r,t,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Bl(e,t,n){const s=e.field.isKeyField()?w.comparator(t.key,n.key):function(r,i,o){const a=i.data.field(r),u=o.data.field(r);return a!==null&&u!==null?se(a,u):T()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return T()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),r=this.inner[s];if(r===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Je(this.inner,(n,s)=>{for(const[r,i]of s)t(r,i)})}isEmpty(){return Ca(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql=new L(w.comparator);function Nt(){return ql}const La=new L(w.comparator);function we(...e){let t=La;for(const n of e)t=t.insert(n.key,n);return t}function jl(e){let t=La;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Ot(){return Ce()}function Pa(){return Ce()}function Ce(){return new fe(e=>e.toString(),(e,t)=>e.isEqual(t))}new L(w.comparator);const zl=new J(w.comparator);function C(...e){let t=zl;for(const n of e)t=t.add(n);return t}const Hl=new J(b);function Kl(){return Hl}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_n(t)?"-0":t}}function Va(e){return{integerValue:""+e}}function Gl(e,t){return Al(t)?Va(t):Fa(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(){this._=void 0}}function Ql(e,t,n){return e instanceof Hs?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Ar(r)&&(r=_r(r)),r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,t):e instanceof Nn?Ua(e,t):e instanceof bn?$a(e,t):function(s,r){const i=Yl(s,r),o=Pi(i)+Pi(s.gt);return Us(i)&&Us(s.gt)?Va(o):Fa(s.serializer,o)}(e,t)}function Wl(e,t,n){return e instanceof Nn?Ua(e,t):e instanceof bn?$a(e,t):n}function Yl(e,t){return e instanceof Ks?Us(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class Hs extends Wn{}class Nn extends Wn{constructor(t){super(),this.elements=t}}function Ua(e,t){const n=Ba(t);for(const s of e.elements)n.some(r=>pt(r,s))||n.push(s);return{arrayValue:{values:n}}}class bn extends Wn{constructor(t){super(),this.elements=t}}function $a(e,t){let n=Ba(t);for(const s of e.elements)n=n.filter(r=>!pt(r,s));return{arrayValue:{values:n}}}class Ks extends Wn{constructor(t,n){super(),this.serializer=t,this.gt=n}}function Pi(e){return F(e.integerValue||e.doubleValue)}function Ba(e){return Dr(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Xl(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof Nn&&s instanceof Nn||n instanceof bn&&s instanceof bn?ne(n.elements,s.elements,pt):n instanceof Ks&&s instanceof Ks?pt(n.gt,s.gt):n instanceof Hs&&s instanceof Hs}(e.transform,t.transform)}class Pt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Pt}static exists(t){return new Pt(void 0,t)}static updateTime(t){return new Pt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function fn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Rr{}function qa(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Zl(e.key,Pt.none()):new Mr(e.key,e.data,Pt.none());{const n=e.data,s=dt.empty();let r=new J(tt.comparator);for(let i of t.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Yn(e.key,s,new Et(r.toArray()),Pt.none())}}function Jl(e,t,n){e instanceof Mr?function(s,r,i){const o=s.value.clone(),a=Vi(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Yn?function(s,r,i){if(!fn(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Vi(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(ja(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(e,t,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,t,n)}function Ae(e,t,n,s){return e instanceof Mr?function(r,i,o,a){if(!fn(r.precondition,i))return o;const u=r.value.clone(),c=Ui(r.fieldTransforms,a,i);return u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),null}(e,t,n,s):e instanceof Yn?function(r,i,o,a){if(!fn(r.precondition,i))return o;const u=Ui(r.fieldTransforms,a,i),c=i.data;return c.setAll(ja(r)),c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(e,t,n,s):function(r,i,o){return fn(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(e,t,n)}function Fi(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ne(n,s,(r,i)=>Xl(r,i))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Mr extends Rr{constructor(t,n,s,r=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Yn extends Rr{constructor(t,n,s,r,i=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ja(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function Vi(e,t,n){const s=new Map;U(e.length===n.length);for(let r=0;r<n.length;r++){const i=e[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,Wl(o,a,n[r]))}return s}function Ui(e,t,n){const s=new Map;for(const r of e){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Ql(i,o,t))}return s}class Zl extends Rr{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(t,n,s,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(t.key)&&Jl(i,t,s[r])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Ae(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Ae(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=Pa();return this.mutations.forEach(r=>{const i=t.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const u=qa(o,a);u!==null&&s.set(r.key,u),o.isValidDocument()||o.convertToNoDocument(I.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),C())}isEqual(t){return this.batchId===t.batchId&&ne(this.mutations,t.mutations,(n,s)=>Fi(n,s))&&ne(this.baseMutations,t.baseMutations,(n,s)=>Fi(n,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var P,S;function za(e){if(e===void 0)return vt("GRPC error has no .code"),d.UNKNOWN;switch(e){case P.OK:return d.OK;case P.CANCELLED:return d.CANCELLED;case P.UNKNOWN:return d.UNKNOWN;case P.DEADLINE_EXCEEDED:return d.DEADLINE_EXCEEDED;case P.RESOURCE_EXHAUSTED:return d.RESOURCE_EXHAUSTED;case P.INTERNAL:return d.INTERNAL;case P.UNAVAILABLE:return d.UNAVAILABLE;case P.UNAUTHENTICATED:return d.UNAUTHENTICATED;case P.INVALID_ARGUMENT:return d.INVALID_ARGUMENT;case P.NOT_FOUND:return d.NOT_FOUND;case P.ALREADY_EXISTS:return d.ALREADY_EXISTS;case P.PERMISSION_DENIED:return d.PERMISSION_DENIED;case P.FAILED_PRECONDITION:return d.FAILED_PRECONDITION;case P.ABORTED:return d.ABORTED;case P.OUT_OF_RANGE:return d.OUT_OF_RANGE;case P.UNIMPLEMENTED:return d.UNIMPLEMENTED;case P.DATA_LOSS:return d.DATA_LOSS;default:return T()}}(S=P||(P={}))[S.OK=0]="OK",S[S.CANCELLED=1]="CANCELLED",S[S.UNKNOWN=2]="UNKNOWN",S[S.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",S[S.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",S[S.NOT_FOUND=5]="NOT_FOUND",S[S.ALREADY_EXISTS=6]="ALREADY_EXISTS",S[S.PERMISSION_DENIED=7]="PERMISSION_DENIED",S[S.UNAUTHENTICATED=16]="UNAUTHENTICATED",S[S.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",S[S.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",S[S.ABORTED=10]="ABORTED",S[S.OUT_OF_RANGE=11]="OUT_OF_RANGE",S[S.UNIMPLEMENTED=12]="UNIMPLEMENTED",S[S.INTERNAL=13]="INTERNAL",S[S.UNAVAILABLE=14]="UNAVAILABLE",S[S.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ln}static getOrCreateInstance(){return ln===null&&(ln=new Or),ln}onExistenceFilterMismatch(t){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,t),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(t))}}let ln=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd=new Wt([4294967295,4294967295],0);function $i(e){const t=sd().encode(e),n=new hl;return n.update(t),new Uint8Array(n.digest())}function Bi(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),r=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Wt([n,s],0),new Wt([r,i],0)]}class Lr{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Ee(`Invalid padding: ${n}`);if(s<0)throw new Ee(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new Ee(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new Ee(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*t.length-n,this.Tt=Wt.fromNumber(this.It)}Et(t,n,s){let r=t.add(n.multiply(Wt.fromNumber(s)));return r.compare(rd)===1&&(r=new Wt([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}vt(t){if(this.It===0)return!1;const n=$i(t),[s,r]=Bi(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);if(!this.At(o))return!1}return!0}static create(t,n,s){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new Lr(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(t){if(this.It===0)return;const n=$i(t),[s,r]=Bi(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);this.Rt(o)}}Rt(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class Ee extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(t,n,s,r,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const r=new Map;return r.set(t,Ze.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new Xn(I.min(),r,new L(b),Nt(),C())}}class Ze{constructor(t,n,s,r,i){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new Ze(s,n,C(),C(),C())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t,n,s,r){this.Pt=t,this.removedTargetIds=n,this.key=s,this.bt=r}}class Ha{constructor(t,n){this.targetId=t,this.Vt=n}}class Ka{constructor(t,n,s=Z.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=r}}class qi{constructor(){this.St=0,this.Dt=zi(),this.Ct=Z.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(t){t.approximateByteSize()>0&&(this.Nt=!0,this.Ct=t)}Ot(){let t=C(),n=C(),s=C();return this.Dt.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:T()}}),new Ze(this.Ct,this.xt,t,n,s)}Ft(){this.Nt=!1,this.Dt=zi()}Bt(t,n){this.Nt=!0,this.Dt=this.Dt.insert(t,n)}Lt(t){this.Nt=!0,this.Dt=this.Dt.remove(t)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class id{constructor(t){this.Gt=t,this.Qt=new Map,this.jt=Nt(),this.zt=ji(),this.Wt=new L(b)}Ht(t){for(const n of t.Pt)t.bt&&t.bt.isFoundDocument()?this.Jt(n,t.bt):this.Yt(n,t.key,t.bt);for(const n of t.removedTargetIds)this.Yt(n,t.key,t.bt)}Xt(t){this.forEachTarget(t,n=>{const s=this.Zt(n);switch(t.state){case 0:this.te(n)&&s.$t(t.resumeToken);break;case 1:s.Ut(),s.kt||s.Ft(),s.$t(t.resumeToken);break;case 2:s.Ut(),s.kt||this.removeTarget(n);break;case 3:this.te(n)&&(s.Kt(),s.$t(t.resumeToken));break;case 4:this.te(n)&&(this.ee(n),s.$t(t.resumeToken));break;default:T()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Qt.forEach((s,r)=>{this.te(r)&&n(r)})}ne(t){var n;const s=t.targetId,r=t.Vt.count,i=this.se(s);if(i){const o=i.target;if(Bs(o))if(r===0){const a=new w(o.path);this.Yt(s,a,W.newNoDocument(a,I.min()))}else U(r===1);else{const a=this.ie(s);if(a!==r){const u=this.re(t,a);if(u!==0){this.ee(s);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(s,c)}(n=Or.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(c,h,l){var p,y,A,x,D,ot;const nt={localCacheCount:h,existenceFilterCount:l.count},st=l.unchangedNames;return st&&(nt.bloomFilter={applied:c===0,hashCount:(p=st?.hashCount)!==null&&p!==void 0?p:0,bitmapLength:(x=(A=(y=st?.bits)===null||y===void 0?void 0:y.bitmap)===null||A===void 0?void 0:A.length)!==null&&x!==void 0?x:0,padding:(ot=(D=st?.bits)===null||D===void 0?void 0:D.padding)!==null&&ot!==void 0?ot:0}),nt}(u,a,t.Vt))}}}}re(t,n){const{unchangedNames:s,count:r}=t.Vt;if(!s||!s.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=s;let u,c;try{u=Ut(i).toUint8Array()}catch(h){if(h instanceof Aa)return ee("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw h}try{c=new Lr(u,o,a)}catch(h){return ee(h instanceof Ee?"BloomFilter error: ":"Applying bloom filter failed: ",h),1}return c.It===0?1:r!==n-this.oe(t.targetId,c)?2:0}oe(t,n){const s=this.Gt.getRemoteKeysForTarget(t);let r=0;return s.forEach(i=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.vt(a)||(this.Yt(t,i,null),r++)}),r}ce(t){const n=new Map;this.Qt.forEach((i,o)=>{const a=this.se(o);if(a){if(i.current&&Bs(a.target)){const u=new w(a.target.path);this.jt.get(u)!==null||this.ae(o,u)||this.Yt(o,u,W.newNoDocument(u,t))}i.Mt&&(n.set(o,i.Ot()),i.Ft())}});let s=C();this.zt.forEach((i,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.se(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.jt.forEach((i,o)=>o.setReadTime(t));const r=new Xn(t,n,this.Wt,this.jt,s);return this.jt=Nt(),this.zt=ji(),this.Wt=new L(b),r}Jt(t,n){if(!this.te(t))return;const s=this.ae(t,n.key)?2:0;this.Zt(t).Bt(n.key,s),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(t))}Yt(t,n,s){if(!this.te(t))return;const r=this.Zt(t);this.ae(t,n)?r.Bt(n,1):r.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(t)),s&&(this.jt=this.jt.insert(n,s))}removeTarget(t){this.Qt.delete(t)}ie(t){const n=this.Zt(t).Ot();return this.Gt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}qt(t){this.Zt(t).qt()}Zt(t){let n=this.Qt.get(t);return n||(n=new qi,this.Qt.set(t,n)),n}he(t){let n=this.zt.get(t);return n||(n=new J(b),this.zt=this.zt.insert(t,n)),n}te(t){const n=this.se(t)!==null;return n||v("WatchChangeAggregator","Detected inactive target",t),n}se(t){const n=this.Qt.get(t);return n&&n.kt?null:this.Gt.le(t)}ee(t){this.Qt.set(t,new qi),this.Gt.getRemoteKeysForTarget(t).forEach(n=>{this.Yt(t,n,null)})}ae(t,n){return this.Gt.getRemoteKeysForTarget(t).has(n)}}function ji(){return new L(w.comparator)}function zi(){return new L(w.comparator)}const od=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),ad=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),ud=(()=>({and:"AND",or:"OR"}))();class cd{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Gs(e,t){return e.useProto3Json||Hn(t)?t:{value:t}}function Qs(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ga(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Jt(e){return U(!!e),I.fromTimestamp(function(t){const n=Dt(t);return new B(n.seconds,n.nanos)}(e))}function Qa(e,t){return function(n){return new M(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function Wa(e){const t=M.fromString(e);return U(Za(t)),t}function ms(e,t){const n=Wa(t);if(n.get(1)!==e.databaseId.projectId)throw new m(d.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new m(d.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new w(Ya(n))}function Ws(e,t){return Qa(e.databaseId,t)}function hd(e){const t=Wa(e);return t.length===4?M.emptyPath():Ya(t)}function Hi(e){return new M(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Ya(e){return U(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function ld(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:T()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=function(u,c){return u.useProto3Json?(U(c===void 0||typeof c=="string"),Z.fromBase64String(c||"")):(U(c===void 0||c instanceof Uint8Array),Z.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const c=u.code===void 0?d.UNKNOWN:za(u.code);return new m(c,u.message||"")}(o);n=new Ka(s,r,i,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const r=ms(e,s.document.name),i=Jt(s.document.updateTime),o=s.document.createTime?Jt(s.document.createTime):I.min(),a=new dt({mapValue:{fields:s.document.fields}}),u=W.newFoundDocument(r,i,o,a),c=s.targetIds||[],h=s.removedTargetIds||[];n=new gn(c,h,u.key,u)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const r=ms(e,s.document),i=s.readTime?Jt(s.readTime):I.min(),o=W.newNoDocument(r,i),a=s.removedTargetIds||[];n=new gn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const r=ms(e,s.document),i=s.removedTargetIds||[];n=new gn([],i,r,null)}else{if(!("filter"in t))return T();{t.filter;const s=t.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new nd(r,i),a=s.targetId;n=new Ha(a,o)}}return n}function dd(e,t){return{documents:[Ws(e,t.path)]}}function fd(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=Ws(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Ws(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(u){if(u.length!==0)return Ja(ct.create(u,"and"))}(t.filters);r&&(n.structuredQuery.where=r);const i=function(u){if(u.length!==0)return u.map(c=>function(h){return{field:zt(h.field),direction:md(h.dir)}}(c))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Gs(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),n}function gd(e){let t=hd(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){U(s===1);const h=n.from[0];h.allDescendants?r=h.collectionId:t=t.child(h.collectionId)}let i=[];n.where&&(i=function(h){const l=Xa(h);return l instanceof ct&&Na(l)?l.getFilters():[l]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(l){return new Yt(Ht(l.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(h)));let a=null;n.limit&&(a=function(h){let l;return l=typeof h=="object"?h.value:h,Hn(l)?null:l}(n.limit));let u=null;n.startAt&&(u=function(h){const l=!!h.before,p=h.values||[];return new Dn(p,l)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const l=!h.before,p=h.values||[];return new Dn(p,l)}(n.endAt)),Ul(t,r,o,i,a,"F",u,c)}function pd(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return T()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function Xa(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Ht(t.unaryFilter.field);return V.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Ht(t.unaryFilter.field);return V.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ht(t.unaryFilter.field);return V.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ht(t.unaryFilter.field);return V.create(i,"!=",{nullValue:"NULL_VALUE"});default:return T()}}(e):e.fieldFilter!==void 0?function(t){return V.create(Ht(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return T()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return ct.create(t.compositeFilter.filters.map(n=>Xa(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return T()}}(t.compositeFilter.op))}(e):T()}function md(e){return od[e]}function yd(e){return ad[e]}function vd(e){return ud[e]}function zt(e){return{fieldPath:e.canonicalString()}}function Ht(e){return tt.fromServerFormat(e.fieldPath)}function Ja(e){return e instanceof V?function(t){if(t.op==="=="){if(xi(t.value))return{unaryFilter:{field:zt(t.field),op:"IS_NAN"}};if(ki(t.value))return{unaryFilter:{field:zt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(xi(t.value))return{unaryFilter:{field:zt(t.field),op:"IS_NOT_NAN"}};if(ki(t.value))return{unaryFilter:{field:zt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zt(t.field),op:yd(t.op),value:t.value}}}(e):e instanceof ct?function(t){const n=t.getFilters().map(s=>Ja(s));return n.length===1?n[0]:{compositeFilter:{op:vd(t.op),filters:n}}}(e):T()}function Za(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t,n,s,r,i=I.min(),o=I.min(),a=Z.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new It(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new It(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new It(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new It(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(t){this.fe=t}}function Ed(e){const t=gd({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?js(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(){this.rn=new Td}addToCollectionParentIndex(t,n){return this.rn.add(n),f.resolve()}getCollectionParents(t,n){return f.resolve(this.rn.getEntries(n))}addFieldIndex(t,n){return f.resolve()}deleteFieldIndex(t,n){return f.resolve()}getDocumentsMatchingTarget(t,n){return f.resolve(null)}getIndexType(t,n){return f.resolve(0)}getFieldIndexes(t,n){return f.resolve([])}getNextCollectionGroupToUpdate(t){return f.resolve(null)}getMinOffset(t,n){return f.resolve(_t.min())}getMinOffsetFromCollectionGroup(t,n){return f.resolve(_t.min())}updateCollectionGroup(t,n,s){return f.resolve()}updateIndexEntries(t,n){return f.resolve()}}class Td{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n]||new J(M.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(t){return(this.index[t]||new J(M.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static kn(){return new ie(0)}static Mn(){return new ie(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(){this.changes=new fe(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,W.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?f.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(t,n,s,r){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(t,n))).next(r=>(s!==null&&Ae(s.mutation,r,Et.empty(),B.now()),r))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,C()).next(()=>s))}getLocalViewOfDocuments(t,n,s=C()){const r=Ot();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,s).next(i=>{let o=we();return i.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=Ot();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,C()))}populateOverlays(t,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(t,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,r){let i=Nt();const o=Ce(),a=Ce();return n.forEach((u,c)=>{const h=s.get(c.key);r.has(c.key)&&(h===void 0||h.mutation instanceof Yn)?i=i.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),Ae(h.mutation,c,h.mutation.getFieldMask(),B.now())):o.set(c.key,Et.empty())}),this.recalculateAndSaveOverlays(t,i).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var l;return a.set(c,new Cd(h,(l=o.get(c))!==null&&l!==void 0?l:null))}),a))}recalculateAndSaveOverlays(t,n){const s=Ce();let r=new L((o,a)=>o-a),i=C();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=s.get(u)||Et.empty();h=a.applyToLocalView(c,h),s.set(u,h);const l=(r.get(a.batchId)||C()).add(u);r=r.insert(a.batchId,l)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,l=Pa();h.forEach(p=>{if(!i.has(p)){const y=qa(n.get(p),s.get(p));y!==null&&l.set(p,y),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,l))}return f.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(r){return w.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Ra(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,r-i.size):f.resolve(Ot());let a=-1,u=i;return o.next(c=>f.forEach(c,(h,l)=>(a<l.largestBatchId&&(a=l.largestBatchId),i.get(h)?f.resolve():this.remoteDocumentCache.getEntry(t,h).next(p=>{u=u.insert(h,p)}))).next(()=>this.populateOverlays(t,c,i)).next(()=>this.computeViews(t,u,c,C())).next(h=>({batchId:a,changes:jl(h)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new w(n)).next(s=>{let r=we();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const r=n.collectionGroup;let i=we();return this.indexManager.getCollectionParents(t,r).next(o=>f.forEach(o,a=>{const u=function(c,h){return new de(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(t,u,s).next(c=>{c.forEach((h,l)=>{i=i.insert(h,l)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,r))).next(i=>{r.forEach((a,u)=>{const c=u.getKey();i.get(c)===null&&(i=i.insert(c,W.newInvalidDocument(c)))});let o=we();return i.forEach((a,u)=>{const c=r.get(a);c!==void 0&&Ae(c.mutation,u,Et.empty(),B.now()),Qn(n,u)&&(o=o.insert(a,u))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(t){this.serializer=t,this.cs=new Map,this.hs=new Map}getBundleMetadata(t,n){return f.resolve(this.cs.get(n))}saveBundleMetadata(t,n){var s;return this.cs.set(n.id,{id:(s=n).id,version:s.version,createTime:Jt(s.createTime)}),f.resolve()}getNamedQuery(t,n){return f.resolve(this.hs.get(n))}saveNamedQuery(t,n){return this.hs.set(n.name,function(s){return{name:s.name,query:Ed(s.bundledQuery),readTime:Jt(s.readTime)}}(n)),f.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(){this.overlays=new L(w.comparator),this.ls=new Map}getOverlay(t,n){return f.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Ot();return f.forEach(n,r=>this.getOverlay(t,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((r,i)=>{this.we(t,n,i)}),f.resolve()}removeOverlaysForBatchId(t,n,s){const r=this.ls.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ls.delete(s)),f.resolve()}getOverlaysForCollection(t,n,s){const r=Ot(),i=n.length+1,o=new w(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>s&&r.set(u.getKey(),u)}return f.resolve(r)}getOverlaysForCollectionGroup(t,n,s,r){let i=new L((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let h=i.get(c.largestBatchId);h===null&&(h=Ot(),i=i.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=Ot(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=r)););return f.resolve(a)}we(t,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ls.get(r.largestBatchId).delete(s.key);this.ls.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new ed(n,s));let i=this.ls.get(n);i===void 0&&(i=C(),this.ls.set(n,i)),this.ls.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(){this.fs=new J($.ds),this.ws=new J($._s)}isEmpty(){return this.fs.isEmpty()}addReference(t,n){const s=new $(t,n);this.fs=this.fs.add(s),this.ws=this.ws.add(s)}gs(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.ys(new $(t,n))}ps(t,n){t.forEach(s=>this.removeReference(s,n))}Is(t){const n=new w(new M([])),s=new $(n,t),r=new $(n,t+1),i=[];return this.ws.forEachInRange([s,r],o=>{this.ys(o),i.push(o.key)}),i}Ts(){this.fs.forEach(t=>this.ys(t))}ys(t){this.fs=this.fs.delete(t),this.ws=this.ws.delete(t)}Es(t){const n=new w(new M([])),s=new $(n,t),r=new $(n,t+1);let i=C();return this.ws.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new $(t,0),s=this.fs.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class ${constructor(t,n){this.key=t,this.As=n}static ds(t,n){return w.comparator(t.key,n.key)||b(t.As,n.As)}static _s(t,n){return b(t.As,n.As)||w.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new J($.ds)}checkEmpty(t){return f.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new td(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.Rs=this.Rs.add(new $(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(t,n){return f.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,r=this.bs(s),i=r<0?0:r;return f.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(t){return f.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new $(n,0),r=new $(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([s,r],o=>{const a=this.Ps(o.As);i.push(a)}),f.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new J(b);return n.forEach(r=>{const i=new $(r,0),o=new $(r,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{s=s.add(a.As)})}),f.resolve(this.Vs(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,r=s.length+1;let i=s;w.isDocumentKey(i)||(i=i.child(""));const o=new $(new w(i),0);let a=new J(b);return this.Rs.forEachWhile(u=>{const c=u.key.path;return!!s.isPrefixOf(c)&&(c.length===r&&(a=a.add(u.As)),!0)},o),f.resolve(this.Vs(a))}Vs(t){const n=[];return t.forEach(s=>{const r=this.Ps(s);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){U(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return f.forEach(n.mutations,r=>{const i=new $(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.Rs=s})}Cn(t){}containsKey(t,n){const s=new $(n,0),r=this.Rs.firstAfterOrEqual(s);return f.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,f.resolve()}Ss(t,n){return this.bs(t)}bs(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Ps(t){const n=this.bs(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(t){this.Ds=t,this.docs=new L(w.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ds(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return f.resolve(s?s.document.mutableCopy():W.newInvalidDocument(n))}getEntries(t,n){let s=Nt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():W.newInvalidDocument(r))}),f.resolve(s)}getDocumentsMatchingQuery(t,n,s,r){let i=Nt();const o=n.path,a=new w(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Tl(Il(h),s)<=0||(r.has(h.key)||Qn(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return f.resolve(i)}getAllFromCollectionGroup(t,n,s,r){T()}Cs(t,n){return f.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new kd(this)}getSize(t){return f.resolve(this.size)}}class kd extends Sd{constructor(t){super(),this.os=t}applyChanges(t){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.os.addEntry(t,r)):this.os.removeEntry(s)}),f.waitFor(n)}getFromCache(t,n){return this.os.getEntry(t,n)}getAllFromCache(t,n){return this.os.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(t){this.persistence=t,this.xs=new fe(n=>Nr(n),br),this.lastRemoteSnapshotVersion=I.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Pr,this.targetCount=0,this.Ms=ie.kn()}forEachTarget(t,n){return this.xs.forEach((s,r)=>n(r)),f.resolve()}getLastRemoteSnapshotVersion(t){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return f.resolve(this.Ns)}allocateTargetId(t){return this.highestTargetId=this.Ms.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ns&&(this.Ns=n),f.resolve()}Fn(t){this.xs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Ms=new ie(n),this.highestTargetId=n),t.sequenceNumber>this.Ns&&(this.Ns=t.sequenceNumber)}addTargetData(t,n){return this.Fn(n),this.targetCount+=1,f.resolve()}updateTargetData(t,n){return this.Fn(n),f.resolve()}removeTargetData(t,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,f.resolve()}removeTargets(t,n,s){let r=0;const i=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.xs.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),f.waitFor(i).next(()=>r)}getTargetCount(t){return f.resolve(this.targetCount)}getTargetData(t,n){const s=this.xs.get(n)||null;return f.resolve(s)}addMatchingKeys(t,n,s){return this.ks.gs(n,s),f.resolve()}removeMatchingKeys(t,n,s){this.ks.ps(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(t,o))}),f.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.ks.Is(n),f.resolve()}getMatchingKeysForTargetId(t,n){const s=this.ks.Es(n);return f.resolve(s)}containsKey(t,n){return f.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(t,n){this.$s={},this.overlays={},this.Os=new Cr(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=t(this),this.Bs=new xd(this),this.indexManager=new Id,this.remoteDocumentCache=function(s){return new bd(s)}(s=>this.referenceDelegate.Ls(s)),this.serializer=new wd(n),this.qs=new _d(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Dd,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.$s[t.toKey()];return s||(s=new Nd(n,this.referenceDelegate),this.$s[t.toKey()]=s),s}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(t,n,s){v("MemoryPersistence","Starting transaction:",t);const r=new Md(this.Os.next());return this.referenceDelegate.Us(),s(r).next(i=>this.referenceDelegate.Ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Gs(t,n){return f.or(Object.values(this.$s).map(s=>()=>s.containsKey(t,n)))}}class Md extends Cl{constructor(t){super(),this.currentSequenceNumber=t}}class Fr{constructor(t){this.persistence=t,this.Qs=new Pr,this.js=null}static zs(t){return new Fr(t)}get Ws(){if(this.js)return this.js;throw T()}addReference(t,n,s){return this.Qs.addReference(s,n),this.Ws.delete(s.toString()),f.resolve()}removeReference(t,n,s){return this.Qs.removeReference(s,n),this.Ws.add(s.toString()),f.resolve()}markPotentiallyOrphaned(t,n){return this.Ws.add(n.toString()),f.resolve()}removeTarget(t,n){this.Qs.Is(n.targetId).forEach(r=>this.Ws.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(i=>this.Ws.add(i.toString()))}).next(()=>s.removeTargetData(t,n))}Us(){this.js=new Set}Ks(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Ws,s=>{const r=w.fromPath(s);return this.Hs(t,r).next(i=>{i||n.removeEntry(r,I.min())})}).next(()=>(this.js=null,n.apply(t)))}updateLimboDocument(t,n){return this.Hs(t,n).next(s=>{s?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(t){return 0}Hs(t,n){return f.or([()=>f.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gs(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(t,n,s,r){this.targetId=t,this.fromCache=n,this.Fi=s,this.Bi=r}static Li(t,n){let s=C(),r=C();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Vr(t,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(){this.qi=!1}initialize(t,n){this.Ui=t,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(t,n,s,r){return this.Ki(t,n).next(i=>i||this.Gi(t,n,r,s)).next(i=>i||this.Qi(t,n))}Ki(t,n){if(Li(n))return f.resolve(null);let s=wt(n);return this.indexManager.getIndexType(t,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=js(n,null,"F"),s=wt(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(i=>{const o=C(...i);return this.Ui.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(u=>{const c=this.ji(n,a);return this.zi(n,c,o,u.readTime)?this.Ki(t,js(n,null,"F")):this.Wi(t,c,n,u)}))})))}Gi(t,n,s,r){return Li(n)||r.isEqual(I.min())?this.Qi(t,n):this.Ui.getDocuments(t,s).next(i=>{const o=this.ji(n,i);return this.zi(n,o,s,r)?this.Qi(t,n):(Ai()<=N.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),zs(n)),this.Wi(t,o,n,El(r,-1)))})}ji(t,n){let s=new J(Oa(t));return n.forEach((r,i)=>{Qn(t,i)&&(s=s.add(i))}),s}zi(t,n,s,r){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(t,n){return Ai()<=N.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",zs(n)),this.Ui.getDocumentsMatchingQuery(t,n,_t.min())}Wi(t,n,s,r){return this.Ui.getDocumentsMatchingQuery(t,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(t,n,s,r){this.persistence=t,this.Hi=n,this.serializer=r,this.Ji=new L(b),this.Yi=new fe(i=>Nr(i),br),this.Xi=new Map,this.Zi=t.getRemoteDocumentCache(),this.Bs=t.getTargetCache(),this.qs=t.getBundleCache(),this.tr(s)}tr(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Ad(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ji))}}function Pd(e,t,n,s){return new Ld(e,t,n,s)}async function tu(e,t){const n=_(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.tr(t),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let u=C();for(const c of r){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of i){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(s,u).next(c=>({er:c,removedBatchIds:o,addedBatchIds:a}))})})}function eu(e){const t=_(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Bs.getLastRemoteSnapshotVersion(n))}function Fd(e,t){const n=_(e),s=t.snapshotVersion;let r=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});r=n.Ji;const a=[];t.targetChanges.forEach((h,l)=>{const p=r.get(l);if(!p)return;a.push(n.Bs.removeMatchingKeys(i,h.removedDocuments,l).next(()=>n.Bs.addMatchingKeys(i,h.addedDocuments,l)));let y=p.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(l)!==null?y=y.withResumeToken(Z.EMPTY_BYTE_STRING,I.min()).withLastLimboFreeSnapshotVersion(I.min()):h.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(h.resumeToken,s)),r=r.insert(l,y),function(A,x,D){return A.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(p,y,h)&&a.push(n.Bs.updateTargetData(i,y))});let u=Nt(),c=C();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(Vd(i,o,t.documentUpdates).next(h=>{u=h.nr,c=h.sr})),!s.isEqual(I.min())){const h=n.Bs.getLastRemoteSnapshotVersion(i).next(l=>n.Bs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(h)}return f.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.Ji=r,i))}function Vd(e,t,n){let s=C(),r=C();return n.forEach(i=>s=s.add(i)),t.getEntries(e,s).next(i=>{let o=Nt();return n.forEach((a,u)=>{const c=i.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(r=r.add(a)),u.isNoDocument()&&u.version.isEqual(I.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):v("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{nr:o,sr:r}})}function Ud(e,t){const n=_(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Bs.getTargetData(s,t).next(i=>i?(r=i,f.resolve(r)):n.Bs.allocateTargetId(s).next(o=>(r=new It(t,o,"TargetPurposeListen",s.currentSequenceNumber),n.Bs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ji.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(s.targetId,s),n.Yi.set(t,s.targetId)),s})}async function Ys(e,t,n){const s=_(e),r=s.Ji.get(t),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Xe(o))throw o;v("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.Ji=s.Ji.remove(t),s.Yi.delete(r.target)}function Ki(e,t,n){const s=_(e);let r=I.min(),i=C();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,u,c){const h=_(a),l=h.Yi.get(c);return l!==void 0?f.resolve(h.Ji.get(l)):h.Bs.getTargetData(u,c)}(s,o,wt(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{i=u})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,t,n?r:I.min(),n?i:C())).next(a=>($d(s,$l(t),a),{documents:a,ir:i})))}function $d(e,t,n){let s=e.Xi.get(t)||I.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),e.Xi.set(t,s)}class Gi{constructor(){this.activeTargetIds=Kl()}lr(t){this.activeTargetIds=this.activeTargetIds.add(t)}dr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}hr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Bd{constructor(){this.Hr=new Gi,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Hr.lr(t),this.Jr[t]||"not-current"}updateQueryState(t,n,s){this.Jr[t]=n}removeLocalQueryTarget(t){this.Hr.dr(t)}isLocalQueryTarget(t){return this.Hr.activeTargetIds.has(t)}clearQueryState(t){delete this.Jr[t]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(t){return this.Hr.activeTargetIds.has(t)}start(){return this.Hr=new Gi,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{Yr(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(t){this.so.push(t)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.so)t(0)}no(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.so)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dn=null;function ys(){return dn===null?dn=268435456+Math.round(2147483648*Math.random()):dn++,"0x"+dn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(t){this.ro=t.ro,this.oo=t.oo}uo(t){this.co=t}ao(t){this.ho=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.ro(t)}fo(){this.co()}wo(t){this.ho(t)}_o(t){this.lo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G="WebChannelConnection";class Hd extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.mo=n+"://"+t.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(t,n,s,r,i){const o=ys(),a=this.To(t,n);v("RestConnection",`Sending RPC '${t}' ${o}:`,a,s);const u={};return this.Eo(u,r,i),this.Ao(t,a,u,s).then(c=>(v("RestConnection",`Received RPC '${t}' ${o}: `,c),c),c=>{throw ee("RestConnection",`RPC '${t}' ${o} failed with error: `,c,"url: ",a,"request:",s),c})}vo(t,n,s,r,i,o){return this.Io(t,n,s,r,i)}Eo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+le,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>t[i]=r),s&&s.headers.forEach((r,i)=>t[i]=r)}To(t,n){const s=jd[t];return`${this.mo}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Ao(t,n,s,r){const i=ys();return new Promise((o,a)=>{const u=new cl;u.setWithCredentials(!0),u.listenOnce(ol.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case gs.NO_ERROR:const h=u.getResponseJson();v(G,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(h)),o(h);break;case gs.TIMEOUT:v(G,`RPC '${t}' ${i} timed out`),a(new m(d.DEADLINE_EXCEEDED,"Request time out"));break;case gs.HTTP_ERROR:const l=u.getStatus();if(v(G,`RPC '${t}' ${i} failed with status:`,l,"response text:",u.getResponseText()),l>0){let p=u.getResponseJson();Array.isArray(p)&&(p=p[0]);const y=p?.error;if(y&&y.status&&y.message){const A=function(x){const D=x.toLowerCase().replace(/_/g,"-");return Object.values(d).indexOf(D)>=0?D:d.UNKNOWN}(y.status);a(new m(A,y.message))}else a(new m(d.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new m(d.UNAVAILABLE,"Connection failed."));break;default:T()}}finally{v(G,`RPC '${t}' ${i} completed.`)}});const c=JSON.stringify(r);v(G,`RPC '${t}' ${i} sending request:`,r),u.send(n,"POST",c,s,15)})}Ro(t,n,s){const r=ys(),i=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=rl(),a=il(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new ul({})),this.Eo(u.initMessageHeaders,n,s),u.encodeInitMessageHeaders=!0;const h=i.join("");v(G,`Creating RPC '${t}' stream ${r}: ${h}`,u);const l=o.createWebChannel(h,u);let p=!1,y=!1;const A=new zd({ro:D=>{y?v(G,`Not sending because RPC '${t}' stream ${r} is closed:`,D):(p||(v(G,`Opening RPC '${t}' stream ${r} transport.`),l.open(),p=!0),v(G,`RPC '${t}' stream ${r} sending:`,D),l.send(D))},oo:()=>l.close()}),x=(D,ot,nt)=>{D.listen(ot,st=>{try{nt(st)}catch(ht){setTimeout(()=>{throw ht},0)}})};return x(l,un.EventType.OPEN,()=>{y||v(G,`RPC '${t}' stream ${r} transport opened.`)}),x(l,un.EventType.CLOSE,()=>{y||(y=!0,v(G,`RPC '${t}' stream ${r} transport closed`),A.wo())}),x(l,un.EventType.ERROR,D=>{y||(y=!0,ee(G,`RPC '${t}' stream ${r} transport errored:`,D),A.wo(new m(d.UNAVAILABLE,"The operation could not be completed")))}),x(l,un.EventType.MESSAGE,D=>{var ot;if(!y){const nt=D.data[0];U(!!nt);const st=nt,ht=st.error||((ot=st[0])===null||ot===void 0?void 0:ot.error);if(ht){v(G,`RPC '${t}' stream ${r} received error:`,ht);const nn=ht.status;let ns=function(Ru){const ei=P[Ru];if(ei!==void 0)return za(ei)}(nn),ti=ht.message;ns===void 0&&(ns=d.INTERNAL,ti="Unknown error status: "+nn+" with message "+ht.message),y=!0,A.wo(new m(ns,ti)),l.close()}else v(G,`RPC '${t}' stream ${r} received:`,nt),A._o(nt)}}),x(a,al.STAT_EVENT,D=>{D.stat===Si.PROXY?v(G,`RPC '${t}' stream ${r} detected buffering proxy`):D.stat===Si.NOPROXY&&v(G,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{A.fo()},0),A}}function vs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(e){return new cd(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(t,n,s=1e3,r=1.5,i=6e4){this.ii=t,this.timerId=n,this.Po=s,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(t){this.cancel();const n=Math.floor(this.So+this.ko()),s=Math.max(0,Date.now()-this.Co),r=Math.max(0,n-s);r>0&&v("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Co=Date.now(),t())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(t,n,s,r,i,o,a,u){this.ii=t,this.$o=s,this.Oo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new nu(t,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(t){this.Ho(),this.stream.send(t)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(t,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,t!==4?this.qo.reset():n&&n.code===d.RESOURCE_EXHAUSTED?(vt(n.toString()),vt("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===d.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const t=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Fo===n&&this.Zo(s,r)},s=>{t(()=>{const r=new m(d.UNKNOWN,"Fetching auth token failed: "+s.message);return this.tu(r)})})}Zo(t,n){const s=this.Xo(this.Fo);this.stream=this.eu(t,n),this.stream.uo(()=>{s(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(r=>{s(()=>this.tu(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(t){return v("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return n=>{this.ii.enqueueAndForget(()=>this.Fo===t?n():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Gd extends Kd{constructor(t,n,s,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}eu(t,n){return this.connection.Ro("Listen",t,n)}onMessage(t){this.qo.reset();const n=ld(this.serializer,t),s=function(r){if(!("targetChange"in r))return I.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?I.min():i.readTime?Jt(i.readTime):I.min()}(t);return this.listener.nu(n,s)}su(t){const n={};n.database=Hi(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;if(o=Bs(a)?{documents:dd(r,a)}:{query:fd(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=Ga(r,i.resumeToken);const u=Gs(r,i.expectedCount);u!==null&&(o.expectedCount=u)}else if(i.snapshotVersion.compareTo(I.min())>0){o.readTime=Qs(r,i.snapshotVersion.toTimestamp());const u=Gs(r,i.expectedCount);u!==null&&(o.expectedCount=u)}return o}(this.serializer,t);const s=pd(this.serializer,t);s&&(n.labels=s),this.Wo(n)}iu(t){const n={};n.database=Hi(this.serializer),n.removeTarget=t,this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd extends class{}{constructor(t,n,s,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new m(d.FAILED_PRECONDITION,"The client has already been terminated.")}Io(t,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.Io(t,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new m(d.UNKNOWN,r.toString())})}vo(t,n,s,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.vo(t,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new m(d.UNKNOWN,i.toString())})}terminate(){this.lu=!0}}class Wd{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(t){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.yu("Offline")))}set(t){this.Tu(),this.wu=0,t==="Online"&&(this.mu=!1),this.yu(t)}yu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}pu(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(vt(n),this.mu=!1):v("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(t,n,s,r,i){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr(o=>{s.enqueueAndForget(async()=>{en(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=_(a);u.vu.add(4),await tn(u),u.bu.set("Unknown"),u.vu.delete(4),await Zn(u)}(this))})}),this.bu=new Wd(s,r)}}async function Zn(e){if(en(e))for(const t of e.Ru)await t(!0)}async function tn(e){for(const t of e.Ru)await t(!1)}function su(e,t){const n=_(e);n.Au.has(t.targetId)||(n.Au.set(t.targetId,t),Br(n)?$r(n):ge(n).Ko()&&Ur(n,t))}function ru(e,t){const n=_(e),s=ge(n);n.Au.delete(t),s.Ko()&&iu(n,t),n.Au.size===0&&(s.Ko()?s.jo():en(n)&&n.bu.set("Unknown"))}function Ur(e,t){if(e.Vu.qt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(I.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}ge(e).su(t)}function iu(e,t){e.Vu.qt(t),ge(e).iu(t)}function $r(e){e.Vu=new id({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),le:t=>e.Au.get(t)||null,ue:()=>e.datastore.serializer.databaseId}),ge(e).start(),e.bu.gu()}function Br(e){return en(e)&&!ge(e).Uo()&&e.Au.size>0}function en(e){return _(e).vu.size===0}function ou(e){e.Vu=void 0}async function Xd(e){e.Au.forEach((t,n)=>{Ur(e,t)})}async function Jd(e,t){ou(e),Br(e)?(e.bu.Iu(t),$r(e)):e.bu.set("Unknown")}async function Zd(e,t,n){if(e.bu.set("Online"),t instanceof Ka&&t.state===2&&t.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.Au.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.Au.delete(o),s.Vu.removeTarget(o))}(e,t)}catch(s){v("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Wi(e,s)}else if(t instanceof gn?e.Vu.Ht(t):t instanceof Ha?e.Vu.ne(t):e.Vu.Xt(t),!n.isEqual(I.min()))try{const s=await eu(e.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Vu.ce(i);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const c=r.Au.get(u);c&&r.Au.set(u,c.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,u)=>{const c=r.Au.get(a);if(!c)return;r.Au.set(a,c.withResumeToken(Z.EMPTY_BYTE_STRING,c.snapshotVersion)),iu(r,a);const h=new It(c.target,a,u,c.sequenceNumber);Ur(r,h)}),r.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){v("RemoteStore","Failed to raise snapshot:",s),await Wi(e,s)}}async function Wi(e,t,n){if(!Xe(t))throw t;e.vu.add(1),await tn(e),e.bu.set("Offline"),n||(n=()=>eu(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await n(),e.vu.delete(1),await Zn(e)})}async function Yi(e,t){const n=_(e);n.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const s=en(n);n.vu.add(3),await tn(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.vu.delete(3),await Zn(n)}async function tf(e,t){const n=_(e);t?(n.vu.delete(2),await Zn(n)):t||(n.vu.add(2),await tn(n),n.bu.set("Unknown"))}function ge(e){return e.Su||(e.Su=function(t,n,s){const r=_(t);return r.fu(),new Gd(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(e.datastore,e.asyncQueue,{uo:Xd.bind(null,e),ao:Jd.bind(null,e),nu:Zd.bind(null,e)}),e.Ru.push(async t=>{t?(e.Su.Qo(),Br(e)?$r(e):e.bu.set("Unknown")):(await e.Su.stop(),ou(e))})),e.Su}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(t,n,s,r,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Ct,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,r,i){const o=Date.now()+s,a=new qr(t,n,o,r,i);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new m(d.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function au(e,t){if(vt("AsyncQueue",`${t}: ${e}`),Xe(e))return new m(d.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(t){this.comparator=t?(n,s)=>t(n,s)||w.comparator(n.key,s.key):(n,s)=>w.comparator(n.key,s.key),this.keyedMap=we(),this.sortedSet=new L(this.comparator)}static emptySet(t){return new Zt(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Zt)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Zt;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(){this.Cu=new L(w.comparator)}track(t){const n=t.doc.key,s=this.Cu.get(n);s?t.type!==0&&s.type===3?this.Cu=this.Cu.insert(n,t):t.type===3&&s.type!==1?this.Cu=this.Cu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Cu=this.Cu.remove(n):t.type===1&&s.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:t.doc}):T():this.Cu=this.Cu.insert(n,t)}xu(){const t=[];return this.Cu.inorderTraversal((n,s)=>{t.push(s)}),t}}class oe{constructor(t,n,s,r,i,o,a,u,c){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(t,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new oe(t,n,Zt.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Gn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(){this.Nu=void 0,this.listeners=[]}}class nf{constructor(){this.queries=new fe(t=>Ma(t),Gn),this.onlineState="Unknown",this.ku=new Set}}async function uu(e,t){const n=_(e),s=t.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new ef),r)try{i.Nu=await n.onListen(s)}catch(o){const a=au(o,`Initialization of query '${zs(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,i),i.listeners.push(t),t.Mu(n.onlineState),i.Nu&&t.$u(i.Nu)&&jr(n)}async function cu(e,t){const n=_(e),s=t.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function sf(e,t){const n=_(e);let s=!1;for(const r of t){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.$u(r)&&(s=!0);o.Nu=r}}s&&jr(n)}function rf(e,t,n){const s=_(e),r=s.queries.get(t);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(t)}function jr(e){e.ku.forEach(t=>{t.next()})}class hu{constructor(t,n,s){this.query=t,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=s||{}}$u(t){if(!this.options.includeMetadataChanges){const s=[];for(const r of t.docChanges)r.type!==3&&s.push(r);t=new oe(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Fu?this.Lu(t)&&(this.Ou.next(t),n=!0):this.qu(t,this.onlineState)&&(this.Uu(t),n=!0),this.Bu=t,n}onError(t){this.Ou.error(t)}Mu(t){this.onlineState=t;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,t)&&(this.Uu(this.Bu),n=!0),n}qu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ku||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Lu(t){if(t.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(t){t=oe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Fu=!0,this.Ou.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(t){this.key=t}}class du{constructor(t){this.key=t}}class of{constructor(t,n){this.query=t,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=C(),this.mutatedKeys=C(),this.tc=Oa(t),this.ec=new Zt(this.tc)}get nc(){return this.Yu}sc(t,n){const s=n?n.ic:new Xi,r=n?n.ec:this.ec;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const u=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,c=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((h,l)=>{const p=r.get(h),y=Qn(this.query,l)?l:null,A=!!p&&this.mutatedKeys.has(p.key),x=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let D=!1;p&&y?p.data.isEqual(y.data)?A!==x&&(s.track({type:3,doc:y}),D=!0):this.rc(p,y)||(s.track({type:2,doc:y}),D=!0,(u&&this.tc(y,u)>0||c&&this.tc(y,c)<0)&&(a=!0)):!p&&y?(s.track({type:0,doc:y}),D=!0):p&&!y&&(s.track({type:1,doc:p}),D=!0,(u||c)&&(a=!0)),D&&(y?(o=o.add(y),i=x?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),s.track({type:1,doc:h})}return{ec:o,ic:s,zi:a,mutatedKeys:i}}rc(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const r=this.ec;this.ec=t.ec,this.mutatedKeys=t.mutatedKeys;const i=t.ic.xu();i.sort((c,h)=>function(l,p){const y=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return T()}};return y(l)-y(p)}(c.type,h.type)||this.tc(c.doc,h.doc)),this.oc(s);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,u=a!==this.Xu;return this.Xu=a,i.length!==0||u?{snapshot:new oe(this.query,t.ec,r,i,t.mutatedKeys,a===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Xi,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(t){return!this.Yu.has(t)&&!!this.ec.has(t)&&!this.ec.get(t).hasLocalMutations}oc(t){t&&(t.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=t.current)}uc(){if(!this.current)return[];const t=this.Zu;this.Zu=C(),this.ec.forEach(s=>{this.ac(s.key)&&(this.Zu=this.Zu.add(s.key))});const n=[];return t.forEach(s=>{this.Zu.has(s)||n.push(new du(s))}),this.Zu.forEach(s=>{t.has(s)||n.push(new lu(s))}),n}hc(t){this.Yu=t.ir,this.Zu=C();const n=this.sc(t.documents);return this.applyChanges(n,!0)}lc(){return oe.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class af{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class uf{constructor(t){this.key=t,this.fc=!1}}class cf{constructor(t,n,s,r,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new fe(a=>Ma(a),Gn),this._c=new Map,this.mc=new Set,this.gc=new L(w.comparator),this.yc=new Map,this.Ic=new Pr,this.Tc={},this.Ec=new Map,this.Ac=ie.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function hf(e,t){const n=yf(e);let s,r;const i=n.wc.get(t);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.lc();else{const o=await Ud(n.localStore,wt(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await lf(n,t,s,a==="current",o.resumeToken),n.isPrimaryClient&&su(n.remoteStore,o)}return r}async function lf(e,t,n,s,r){e.Rc=(l,p,y)=>async function(A,x,D,ot){let nt=x.view.sc(D);nt.zi&&(nt=await Ki(A.localStore,x.query,!1).then(({documents:nn})=>x.view.sc(nn,nt)));const st=ot&&ot.targetChanges.get(x.targetId),ht=x.view.applyChanges(nt,A.isPrimaryClient,st);return Zi(A,x.targetId,ht.cc),ht.snapshot}(e,l,p,y);const i=await Ki(e.localStore,t,!0),o=new of(t,i.ir),a=o.sc(i.documents),u=Ze.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline",r),c=o.applyChanges(a,e.isPrimaryClient,u);Zi(e,n,c.cc);const h=new af(t,n,o);return e.wc.set(t,h),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),c.snapshot}async function df(e,t){const n=_(e),s=n.wc.get(t),r=n._c.get(s.targetId);if(r.length>1)return n._c.set(s.targetId,r.filter(i=>!Gn(i,t))),void n.wc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ys(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),ru(n.remoteStore,s.targetId),Xs(n,s.targetId)}).catch(Sr)):(Xs(n,s.targetId),await Ys(n.localStore,s.targetId,!0))}async function fu(e,t){const n=_(e);try{const s=await Fd(n.localStore,t);t.targetChanges.forEach((r,i)=>{const o=n.yc.get(i);o&&(U(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.fc=!0:r.modifiedDocuments.size>0?U(o.fc):r.removedDocuments.size>0&&(U(o.fc),o.fc=!1))}),await pu(n,s,t)}catch(s){await Sr(s)}}function Ji(e,t,n){const s=_(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.wc.forEach((i,o)=>{const a=o.view.Mu(t);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=_(i);a.onlineState=o;let u=!1;a.queries.forEach((c,h)=>{for(const l of h.listeners)l.Mu(o)&&(u=!0)}),u&&jr(a)}(s.eventManager,t),r.length&&s.dc.nu(r),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function ff(e,t,n){const s=_(e);s.sharedClientState.updateQueryState(t,"rejected",n);const r=s.yc.get(t),i=r&&r.key;if(i){let o=new L(w.comparator);o=o.insert(i,W.newNoDocument(i,I.min()));const a=C().add(i),u=new Xn(I.min(),new Map,new L(b),o,a);await fu(s,u),s.gc=s.gc.remove(i),s.yc.delete(t),zr(s)}else await Ys(s.localStore,t,!1).then(()=>Xs(s,t,n)).catch(Sr)}function Xs(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e._c.get(t))e.wc.delete(s),n&&e.dc.Pc(s,n);e._c.delete(t),e.isPrimaryClient&&e.Ic.Is(t).forEach(s=>{e.Ic.containsKey(s)||gu(e,s)})}function gu(e,t){e.mc.delete(t.path.canonicalString());const n=e.gc.get(t);n!==null&&(ru(e.remoteStore,n),e.gc=e.gc.remove(t),e.yc.delete(n),zr(e))}function Zi(e,t,n){for(const s of n)s instanceof lu?(e.Ic.addReference(s.key,t),gf(e,s)):s instanceof du?(v("SyncEngine","Document no longer in limbo: "+s.key),e.Ic.removeReference(s.key,t),e.Ic.containsKey(s.key)||gu(e,s.key)):T()}function gf(e,t){const n=t.key,s=n.path.canonicalString();e.gc.get(n)||e.mc.has(s)||(v("SyncEngine","New document in limbo: "+n),e.mc.add(s),zr(e))}function zr(e){for(;e.mc.size>0&&e.gc.size<e.maxConcurrentLimboResolutions;){const t=e.mc.values().next().value;e.mc.delete(t);const n=new w(M.fromString(t)),s=e.Ac.next();e.yc.set(s,new uf(n)),e.gc=e.gc.insert(n,s),su(e.remoteStore,new It(wt(kr(n.path)),s,"TargetPurposeLimboResolution",Cr.ct))}}async function pu(e,t,n){const s=_(e),r=[],i=[],o=[];s.wc.isEmpty()||(s.wc.forEach((a,u)=>{o.push(s.Rc(u,t,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(u.targetId,c?.fromCache?"not-current":"current"),c){r.push(c);const h=Vr.Li(u.targetId,c);i.push(h)}}))}),await Promise.all(o),s.dc.nu(r),await async function(a,u){const c=_(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>f.forEach(u,l=>f.forEach(l.Fi,p=>c.persistence.referenceDelegate.addReference(h,l.targetId,p)).next(()=>f.forEach(l.Bi,p=>c.persistence.referenceDelegate.removeReference(h,l.targetId,p)))))}catch(h){if(!Xe(h))throw h;v("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const l=h.targetId;if(!h.fromCache){const p=c.Ji.get(l),y=p.snapshotVersion,A=p.withLastLimboFreeSnapshotVersion(y);c.Ji=c.Ji.insert(l,A)}}}(s.localStore,i))}async function pf(e,t){const n=_(e);if(!n.currentUser.isEqual(t)){v("SyncEngine","User change. New user:",t.toKey());const s=await tu(n.localStore,t);n.currentUser=t,function(r,i){r.Ec.forEach(o=>{o.forEach(a=>{a.reject(new m(d.CANCELLED,i))})}),r.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await pu(n,s.er)}}function mf(e,t){const n=_(e),s=n.yc.get(t);if(s&&s.fc)return C().add(s.key);{let r=C();const i=n._c.get(t);if(!i)return r;for(const o of i){const a=n.wc.get(o);r=r.unionWith(a.view.nc)}return r}}function yf(e){const t=_(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=fu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=mf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ff.bind(null,t),t.dc.nu=sf.bind(null,t.eventManager),t.dc.Pc=rf.bind(null,t.eventManager),t}class to{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Jn(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return Pd(this.persistence,new Od,t.initialUser,this.serializer)}createPersistence(t){return new Rd(Fr.zs,this.serializer)}createSharedClientState(t){return new Bd}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class vf{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ji(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=pf.bind(null,this.syncEngine),await tf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new nf}createDatastore(t){const n=Jn(t.databaseInfo.databaseId),s=(r=t.databaseInfo,new Hd(r));var r;return function(i,o,a,u){return new Qd(i,o,a,u)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,r=t.asyncQueue,i=a=>Ji(this.syncEngine,a,0),o=Qi.D()?new Qi:new qd,new Yd(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(t,n){return function(s,r,i,o,a,u,c){const h=new cf(s,r,i,o,a,u);return c&&(h.vc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=_(t);v("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await tn(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Sc(this.observer.next,t)}error(t){this.observer.error?this.Sc(this.observer.error,t):vt("Uncaught Error in snapshot listener:",t.toString())}Dc(){this.muted=!0}Sc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(t,n,s,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Q.UNAUTHENTICATED,this.clientId=Sa.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{v("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(v("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new m(d.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ct;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=au(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function ws(e,t){e.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async r=>{s.isEqual(r)||(await tu(t.localStore,r),s=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function eo(e,t){e.asyncQueue.verifyOperationInProgress();const n=await If(e);v("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(r=>Yi(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>Yi(t.remoteStore,i)),e._onlineComponents=t}function Ef(e){return e.name==="FirebaseError"?e.code===d.FAILED_PRECONDITION||e.code===d.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function If(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){v("FirestoreClient","Using user provided OfflineComponentProvider");try{await ws(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Ef(n))throw n;ee("Error using user provided cache. Falling back to memory cache: "+n),await ws(e,new to)}}else v("FirestoreClient","Using default OfflineComponentProvider"),await ws(e,new to);return e._offlineComponents}async function Tf(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(v("FirestoreClient","Using user provided OnlineComponentProvider"),await eo(e,e._uninitializedComponentsProvider._online)):(v("FirestoreClient","Using default OnlineComponentProvider"),await eo(e,new vf))),e._onlineComponents}async function yu(e){const t=await Tf(e),n=t.eventManager;return n.onListen=hf.bind(null,t.syncEngine),n.onUnlisten=df.bind(null,t.syncEngine),n}function Sf(e,t,n={}){const s=new Ct;return e.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,u){const c=new mu({next:l=>{i.enqueueAndForget(()=>cu(r,h));const p=l.docs.has(o);!p&&l.fromCache?u.reject(new m(d.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&l.fromCache&&a&&a.source==="server"?u.reject(new m(d.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(l)},error:l=>u.reject(l)}),h=new hu(kr(o.path),c,{includeMetadataChanges:!0,Ku:!0});return uu(r,h)}(await yu(e),e.asyncQueue,t,n,s)),s.promise}function Cf(e,t,n={}){const s=new Ct;return e.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,u){const c=new mu({next:l=>{i.enqueueAndForget(()=>cu(r,h)),l.fromCache&&a.source==="server"?u.reject(new m(d.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(l)},error:l=>u.reject(l)}),h=new hu(o,c,{includeMetadataChanges:!0,Ku:!0});return uu(r,h)}(await yu(e),e.asyncQueue,t,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(e,t,n){if(!n)throw new m(d.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Af(e,t,n,s){if(t===!0&&s===!0)throw new m(d.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function so(e){if(!w.isDocumentKey(e))throw new m(d.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ro(e){if(w.isDocumentKey(e))throw new m(d.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ts(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":T()}function Be(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new m(d.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ts(e);throw new m(d.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(t){var n,s;if(t.host===void 0){if(t.ssl!==void 0)throw new m(d.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new m(d.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Af("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vu((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new m(d.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new m(d.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new m(d.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,s=t.experimentalLongPollingOptions,n.timeoutSeconds===s.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var n,s}}class es{constructor(t,n,s,r){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new io({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new m(d.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new m(d.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new io(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new ll;switch(n.type){case"firstParty":return new pl(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new m(d.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=no.get(t);n&&(v("ComponentProvider","Removing Datastore"),no.delete(t),n.terminate())}(this),Promise.resolve()}}function _f(e,t,n,s={}){var r;const i=(e=Be(e,es))._getSettings(),o=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ee("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let a,u;if(typeof s.mockUserToken=="string")a=s.mockUserToken,u=Q.MOCK_USER;else{a=zu(s.mockUserToken,(r=e._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new m(d.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Q(c)}e._authCredentials=new dl(new Ta(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new At(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new rt(this.firestore,t,this._key)}}class qt{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new qt(this.firestore,t,this._query)}}class At extends qt{constructor(t,n,s){super(t,n,kr(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new rt(this.firestore,null,new w(t))}withConverter(t){return new At(this.firestore,t,this._path)}}function Hf(e,t,...n){if(e=_e(e),wu("collection","path",t),e instanceof es){const s=M.fromString(t,...n);return ro(s),new At(e,null,s)}{if(!(e instanceof rt||e instanceof At))throw new m(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(M.fromString(t,...n));return ro(s),new At(e.firestore,null,s)}}function Kf(e,t,...n){if(e=_e(e),arguments.length===1&&(t=Sa.A()),wu("doc","path",t),e instanceof es){const s=M.fromString(t,...n);return so(s),new rt(e,null,new w(s))}{if(!(e instanceof rt||e instanceof At))throw new m(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(M.fromString(t,...n));return so(s),new rt(e.firestore,e instanceof At?e.converter:null,new w(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new nu(this,"async_queue_retry"),this.Xc=()=>{const n=vs();n&&v("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const t=vs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Zc(),this.ta(t)}enterRestrictedMode(t){if(!this.jc){this.jc=!0,this.Jc=t||!1;const n=vs();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(t){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new Ct;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Qc.push(t),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(t){if(!Xe(t))throw t;v("AsyncQueue","Operation failed with retryable error: "+t)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(t){const n=this.Gc.then(()=>(this.Hc=!0,t().catch(s=>{this.Wc=s,this.Hc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw vt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Hc=!1,s))));return this.Gc=n,n}enqueueAfterDelay(t,n,s){this.Zc(),this.Yc.indexOf(t)>-1&&(n=0);const r=qr.createAndSchedule(this,t,n,s,i=>this.na(i));return this.zc.push(r),r}Zc(){this.Wc&&T()}verifyOperationInProgress(){}async sa(){let t;do t=this.Gc,await t;while(t!==this.Gc)}ia(t){for(const n of this.zc)if(n.timerId===t)return!0;return!1}ra(t){return this.sa().then(()=>{this.zc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.sa()})}oa(t){this.Yc.push(t)}na(t){const n=this.zc.indexOf(t);this.zc.splice(n,1)}}class Hr extends es{constructor(t,n,s,r){super(t,n,s,r),this.type="firestore",this._queue=new Df,this._persistenceKey=r?.name||"[DEFAULT]"}_terminate(){return this._firestoreClient||Iu(this),this._firestoreClient.terminate()}}function Gf(e,t){const n=typeof e=="object"?e:Qc(),s=typeof e=="string"?e:t||"(default)",r=zc(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=qu("firestore");i&&_f(r,...i)}return r}function Eu(e){return e._firestoreClient||Iu(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Iu(e){var t,n,s;const r=e._freezeSettings(),i=function(o,a,u,c){return new Dl(o,a,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,vu(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,r);e._firestoreClient=new wf(e._authCredentials,e._appCheckCredentials,e._queue,i),((n=r.cache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((s=r.cache)===null||s===void 0?void 0:s._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ae(Z.fromBase64String(t))}catch(n){throw new m(d.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new ae(Z.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new m(d.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new m(d.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new m(d.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return b(this._lat,t._lat)||b(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf=/^__.*__$/;function Cu(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw T()}}class Gr{constructor(t,n,s,r,i,o){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(t){return new Gr(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.aa({path:s,la:!1});return r.fa(t),r}da(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.aa({path:s,la:!1});return r.ua(),r}wa(t){return this.aa({path:void 0,la:!0})}_a(t){return Js(t,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let t=0;t<this.path.length;t++)this.fa(this.path.get(t))}fa(t){if(t.length===0)throw this._a("Document fields must not be empty");if(Cu(this.ca)&&Nf.test(t))throw this._a('Document fields cannot begin and end with "__"')}}class bf{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||Jn(t)}ya(t,n,s,r=!1){return new Gr({ca:t,methodName:n,ga:s,path:tt.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function kf(e){const t=e._freezeSettings(),n=Jn(e._databaseId);return new bf(e._databaseId,!!t.ignoreUndefinedProperties,n)}function xf(e,t,n,s=!1){return Qr(n,e.ya(s?4:3,t))}function Qr(e,t){if(Au(e=_e(e)))return Mf("Unsupported field value:",t,e),Rf(e,t);if(e instanceof Su)return function(n,s){if(!Cu(s.ca))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.la&&t.ca!==4)throw t._a("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Qr(o,s.wa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(e,t)}return function(n,s){if((n=_e(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Gl(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=B.fromDate(n);return{timestampValue:Qs(s.serializer,r)}}if(n instanceof B){const r=new B(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Qs(s.serializer,r)}}if(n instanceof Kr)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ae)return{bytesValue:Ga(s.serializer,n._byteString)};if(n instanceof rt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Qa(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${ts(n)}`)}(e,t)}function Rf(e,t){const n={};return Ca(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Je(e,(s,r)=>{const i=Qr(r,t.ha(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Au(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof B||e instanceof Kr||e instanceof ae||e instanceof rt||e instanceof Su)}function Mf(e,t,n){if(!Au(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=ts(n);throw s==="an object"?t._a(e+" a custom object"):t._a(e+" "+s)}}const Of=new RegExp("[~\\*/\\[\\]]");function Lf(e,t,n){if(t.search(Of)>=0)throw Js(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Tu(...t.split("."))._internalPath}catch{throw Js(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Js(e,t,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${s}`),o&&(u+=` in document ${r}`),u+=")"),new m(d.INVALID_ARGUMENT,a+e+u)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(t,n,s,r,i){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Pf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Wr("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Pf extends _u{data(){return super.data()}}function Wr(e,t){return typeof t=="string"?Lf(e,t):t instanceof Tu?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new m(d.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Yr{}class Du extends Yr{}function Qf(e,t,...n){let s=[];t instanceof Yr&&s.push(t),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof Jr).length,o=r.filter(a=>a instanceof Xr).length;if(i>1||i>0&&o>0)throw new m(d.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)e=r._apply(e);return e}class Xr extends Du{constructor(t,n,s){super(),this._field=t,this._op=n,this._value=s,this.type="where"}static _create(t,n,s){return new Xr(t,n,s)}_apply(t){const n=this._parse(t);return Nu(t._query,n),new qt(t.firestore,t.converter,qs(t._query,n))}_parse(t){const n=kf(t.firestore);return function(r,i,o,a,u,c,h){let l;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new m(d.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){ao(h,c);const p=[];for(const y of h)p.push(oo(a,r,y));l={arrayValue:{values:p}}}else l=oo(a,r,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||ao(h,c),l=xf(o,i,h,c==="in"||c==="not-in");return V.create(u,c,l)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}class Jr extends Yr{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new Jr(t,n)}_parse(t){const n=this._queryConstraints.map(s=>s._parse(t)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:ct.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)Nu(i,a),i=qs(i,a)}(t._query,n),new qt(t.firestore,t.converter,qs(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Zr extends Du{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new Zr(t,n)}_apply(t){const n=function(s,r,i){if(s.startAt!==null)throw new m(d.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new m(d.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Yt(r,i);return function(a,u){if(xr(a)===null){const c=Kn(a);c!==null&&bu(a,c,u.field)}}(s,o),o}(t._query,this._field,this._direction);return new qt(t.firestore,t.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new de(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,n))}}function Wf(e,t="asc"){const n=t,s=Wr("orderBy",e);return Zr._create(s,n)}function oo(e,t,n){if(typeof(n=_e(n))=="string"){if(n==="")throw new m(d.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ra(t)&&n.indexOf("/")!==-1)throw new m(d.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(M.fromString(n));if(!w.isDocumentKey(s))throw new m(d.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return bi(e,new w(s))}if(n instanceof rt)return bi(e,n._key);throw new m(d.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ts(n)}.`)}function ao(e,t){if(!Array.isArray(e)||e.length===0)throw new m(d.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Nu(e,t){if(t.isInequality()){const s=Kn(e),r=t.field;if(s!==null&&!s.isEqual(r))throw new m(d.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=xr(e);i!==null&&bu(e,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(e.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new m(d.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new m(d.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function bu(e,t,n){if(!n.isEqual(t))throw new m(d.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Vf{convertValue(t,n="none"){switch($t(t)){case 0:return null;case 1:return t.booleanValue;case 2:return F(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Ut(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw T()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return Je(t,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(t){return new Kr(F(t.latitude),F(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=_r(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ve(t));default:return null}}convertTimestamp(t){const n=Dt(t);return new B(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=M.fromString(t);U(Za(s));const r=new Ue(s.get(1),s.get(3)),i=new w(s.popFirst(5));return r.isEqual(n)||vt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ku extends _u{constructor(t,n,s,r,i,o){super(t,n,s,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new pn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(Wr("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class pn extends ku{data(t={}){return super.data(t)}}class Uf{constructor(t,n,s,r){this._firestore=t,this._userDataWriter=n,this._snapshot=r,this.metadata=new Ie(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new pn(this._firestore,this._userDataWriter,s.key,s,new Ie(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new m(d.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new pn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ie(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new pn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ie(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,c=-1;return o.type!==0&&(u=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),c=i.indexOf(o.doc.key)),{type:$f(o.type),doc:a,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function $f(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return T()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(e){e=Be(e,rt);const t=Be(e.firestore,Hr);return Sf(Eu(t),e._key).then(n=>Bf(t,e,n))}class xu extends Vf{constructor(t){super(),this.firestore=t}convertBytes(t){return new ae(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new rt(this.firestore,null,n)}}function Xf(e){e=Be(e,qt);const t=Be(e.firestore,Hr),n=Eu(t),s=new xu(t);return Ff(e._query),Cf(n,e._query).then(r=>new Uf(t,s,e,r))}function Bf(e,t,n){const s=n.docs.get(t._key),r=new xu(e);return new ku(e,r,t._key,s,new Ie(n.hasPendingWrites,n.fromCache),t.converter)}(function(e,t=!0){(function(n){le=n})(Gc),vn(new De("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Hr(new fl(n.getProvider("auth-internal")),new yl(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new m(d.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ue(a.options.projectId,u)}(i,s),i);return r=Object.assign({useFetchStreams:t},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Gt(Ci,"3.13.0",e),Gt(Ci,"3.13.0","esm2017")})();var qf="firebase",jf="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gt(qf,jf,"app");const zf={apiKey:"AIzaSyBhQYRTNLmW3TSUnEtQe1abzBmH10UT8EE",authDomain:"github-pages-test.firebaseapp.com",projectId:"github-pages-test",storageBucket:"github-pages-test.appspot.com",messagingSenderId:"631373002471",appId:"1:631373002471:web:c6b4e7936561631b559442"},Jf=yo(zf);export{Gf as P,Qf as R,Hf as _,Yf as a,Jf as b,Xf as d,Kf as g,Wf as x};
