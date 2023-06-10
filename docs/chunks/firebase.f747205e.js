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
 */const vi=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},Aa=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],a=e[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},ba={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,a=o?e[r+1]:0,c=r+2<e.length,u=c?e[r+2]:0,h=i>>2,l=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,m=u&63;c||(m=64,o||(p=64)),s.push(n[h],n[l],n[p],n[m])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(vi(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Aa(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const u=r<e.length?n[e.charAt(r)]:64;++r;const l=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||a==null||u==null||l==null)throw Error();const p=i<<2|a>>4;if(s.push(p),u!==64){const m=a<<4&240|u>>2;if(s.push(m),l!==64){const T=u<<6&192|l;s.push(T)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Da=function(e){const t=vi(e);return ba.encodeByteArray(t,!0)},wi=function(e){return Da(e).replace(/\./g,"")};/**
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
 */class Na{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
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
 */function hn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _a(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(hn())}function ka(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Ra(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xa(){return hn().indexOf("Electron/")>=0}function Oa(){const e=hn();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function La(){return hn().indexOf("MSAppHost/")>=0}function Ma(){return typeof indexedDB=="object"}function Fa(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
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
 */const Pa="FirebaseError";class Gt extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=Pa,Object.setPrototypeOf(this,Gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ei.prototype.create)}}class Ei{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?Va(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Gt(r,a,s)}}function Va(e,t){return e.replace(Ba,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const Ba=/\{\$([^}]+)}/g;function Gn(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(mr(i)&&mr(o)){if(!Gn(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function mr(e){return e!==null&&typeof e=="object"}/**
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
 */function Ti(e){return e&&e._delegate?e._delegate:e}class le{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const wt="[DEFAULT]";/**
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
 */class Ua{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new Na;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t?.identifier),r=(n=t?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(ja(t))try{this.getOrInitializeService({instanceIdentifier:wt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=wt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=wt){return this.instances.has(t)}getOptions(t=wt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:$a(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=wt){return this.component?this.component.multipleInstances?t:wt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $a(e){return e===wt?void 0:e}function ja(e){return e.instantiationMode==="EAGER"}/**
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
 */class qa{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Ua(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var D;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(D||(D={}));const Ka={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},Ha=D.INFO,za={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},Ga=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=za[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ii{constructor(t){this.name=t,this._logLevel=Ha,this._logHandler=Ga,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in D))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ka[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...t),this._logHandler(this,D.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...t),this._logHandler(this,D.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,D.INFO,...t),this._logHandler(this,D.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,D.WARN,...t),this._logHandler(this,D.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...t),this._logHandler(this,D.ERROR,...t)}}const Qa=(e,t)=>t.some(n=>e instanceof n);let yr,vr;function Wa(){return yr||(yr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Xa(){return vr||(vr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ci=new WeakMap,Qn=new WeakMap,Si=new WeakMap,Rn=new WeakMap,Ts=new WeakMap;function Ya(e){const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(lt(e.result)),r()},o=()=>{s(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Ci.set(n,e)}).catch(()=>{}),Ts.set(t,e),t}function Ja(e){if(Qn.has(e))return;const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Qn.set(e,t)}let Wn={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Qn.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Si.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return lt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Za(e){Wn=e(Wn)}function tc(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(xn(this),t,...n);return Si.set(s,t.sort?t.sort():[t]),lt(s)}:Xa().includes(e)?function(...t){return e.apply(xn(this),t),lt(Ci.get(this))}:function(...t){return lt(e.apply(xn(this),t))}}function ec(e){return typeof e=="function"?tc(e):(e instanceof IDBTransaction&&Ja(e),Qa(e,Wa())?new Proxy(e,Wn):e)}function lt(e){if(e instanceof IDBRequest)return Ya(e);if(Rn.has(e))return Rn.get(e);const t=ec(e);return t!==e&&(Rn.set(e,t),Ts.set(t,e)),t}const xn=e=>Ts.get(e);function nc(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=lt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(lt(o.result),c.oldVersion,c.newVersion,lt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const sc=["get","getKey","getAll","getAllKeys","count"],rc=["put","add","delete","clear"],On=new Map;function wr(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(On.get(t))return On.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=rc.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||sc.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return On.set(t,i),i}Za(e=>({...e,get:(t,n,s)=>wr(t,n)||e.get(t,n,s),has:(t,n)=>!!wr(t,n)||e.has(t,n)}));/**
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
 */class ic{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(oc(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function oc(e){const t=e.getComponent();return t?.type==="VERSION"}const Xn="@firebase/app",Er="0.7.31";/**
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
 */const bt=new Ii("@firebase/app"),ac="@firebase/app-compat",cc="@firebase/analytics-compat",uc="@firebase/analytics",hc="@firebase/app-check-compat",lc="@firebase/app-check",dc="@firebase/auth",fc="@firebase/auth-compat",gc="@firebase/database",pc="@firebase/database-compat",mc="@firebase/functions",yc="@firebase/functions-compat",vc="@firebase/installations",wc="@firebase/installations-compat",Ec="@firebase/messaging",Tc="@firebase/messaging-compat",Ic="@firebase/performance",Cc="@firebase/performance-compat",Sc="@firebase/remote-config",Ac="@firebase/remote-config-compat",bc="@firebase/storage",Dc="@firebase/storage-compat",Nc="@firebase/firestore",_c="@firebase/firestore-compat",kc="firebase",Rc="9.9.3";/**
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
 */const Ai="[DEFAULT]",xc={[Xn]:"fire-core",[ac]:"fire-core-compat",[uc]:"fire-analytics",[cc]:"fire-analytics-compat",[lc]:"fire-app-check",[hc]:"fire-app-check-compat",[dc]:"fire-auth",[fc]:"fire-auth-compat",[gc]:"fire-rtdb",[pc]:"fire-rtdb-compat",[mc]:"fire-fn",[yc]:"fire-fn-compat",[vc]:"fire-iid",[wc]:"fire-iid-compat",[Ec]:"fire-fcm",[Tc]:"fire-fcm-compat",[Ic]:"fire-perf",[Cc]:"fire-perf-compat",[Sc]:"fire-rc",[Ac]:"fire-rc-compat",[bc]:"fire-gcs",[Dc]:"fire-gcs-compat",[Nc]:"fire-fst",[_c]:"fire-fst-compat","fire-js":"fire-js",[kc]:"fire-js-all"};/**
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
 */const Ge=new Map,Yn=new Map;function Oc(e,t){try{e.container.addComponent(t)}catch(n){bt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Qe(e){const t=e.name;if(Yn.has(t))return bt.debug(`There were multiple attempts to register component ${t}.`),!1;Yn.set(t,e);for(const n of Ge.values())Oc(n,e);return!0}function Lc(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Mc={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Dt=new Ei("app","Firebase",Mc);/**
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
 */class Fc{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new le("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Dt.create("app-deleted",{appName:this._name})}}/**
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
 */const Pc=Rc;function Vc(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:Ai,automaticDataCollectionEnabled:!1},t),s=n.name;if(typeof s!="string"||!s)throw Dt.create("bad-app-name",{appName:String(s)});const r=Ge.get(s);if(r){if(Gn(e,r.options)&&Gn(n,r.config))return r;throw Dt.create("duplicate-app",{appName:s})}const i=new qa(s);for(const a of Yn.values())i.addComponent(a);const o=new Fc(e,n,i);return Ge.set(s,o),o}function Bc(e=Ai){const t=Ge.get(e);if(!t)throw Dt.create("no-app",{appName:e});return t}function Ft(e,t,n){var s;let r=(s=xc[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),bt.warn(a.join(" "));return}Qe(new le(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const Uc="firebase-heartbeat-database",$c=1,de="firebase-heartbeat-store";let Ln=null;function bi(){return Ln||(Ln=nc(Uc,$c,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(de)}}}).catch(e=>{throw Dt.create("idb-open",{originalErrorMessage:e.message})})),Ln}async function jc(e){var t;try{return(await bi()).transaction(de).objectStore(de).get(Di(e))}catch(n){if(n instanceof Gt)bt.warn(n.message);else{const s=Dt.create("idb-get",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message});bt.warn(s.message)}}}async function Tr(e,t){var n;try{const r=(await bi()).transaction(de,"readwrite");return await r.objectStore(de).put(t,Di(e)),r.done}catch(s){if(s instanceof Gt)bt.warn(s.message);else{const r=Dt.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});bt.warn(r.message)}}}function Di(e){return`${e.name}!${e.options.appId}`}/**
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
 */const qc=1024,Kc=30*24*60*60*1e3;class Hc{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Gc(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ir();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Kc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ir(),{heartbeatsToSend:n,unsentEntries:s}=zc(this._heartbeatsCache.heartbeats),r=wi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ir(){return new Date().toISOString().substring(0,10)}function zc(e,t=qc){const n=[];let s=e.slice();for(const r of e){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Cr(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Cr(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Gc{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ma()?Fa().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await jc(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Tr(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Tr(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Cr(e){return wi(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Qc(e){Qe(new le("platform-logger",t=>new ic(t),"PRIVATE")),Qe(new le("heartbeat",t=>new Hc(t),"PRIVATE")),Ft(Xn,Er,e),Ft(Xn,Er,"esm2017"),Ft("fire-js","")}Qc("");var Wc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},g,Is=Is||{},E=Wc||self;function We(){}function Jn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Ce(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Xc(e){return Object.prototype.hasOwnProperty.call(e,Mn)&&e[Mn]||(e[Mn]=++Yc)}var Mn="closure_uid_"+(1e9*Math.random()>>>0),Yc=0;function Jc(e,t,n){return e.call.apply(e.bind,arguments)}function Zc(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function j(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?j=Jc:j=Zc,j.apply(null,arguments)}function Ve(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function H(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[r].apply(s,o)}}function yt(){this.s=this.s,this.o=this.o}var tu=0;yt.prototype.s=!1;yt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),tu!=0)&&Xc(this)};yt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ni=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},_i=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const s=e.length,r=typeof e=="string"?e.split(""):e;for(let i=0;i<s;i++)i in r&&t.call(n,r[i],i,e)};function eu(e){t:{var t=zu;const n=e.length,s=typeof e=="string"?e.split(""):e;for(let r=0;r<n;r++)if(r in s&&t.call(void 0,s[r],r,e)){t=r;break t}t=-1}return 0>t?null:typeof e=="string"?e.charAt(t):e[t]}function Sr(e){return Array.prototype.concat.apply([],arguments)}function Cs(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function Xe(e){return/^[\s\xa0]*$/.test(e)}var Ar=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Q(e,t){return e.indexOf(t)!=-1}function Fn(e,t){return e<t?-1:e>t?1:0}var W;t:{var br=E.navigator;if(br){var Dr=br.userAgent;if(Dr){W=Dr;break t}}W=""}function Ss(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function ki(e){const t={};for(const n in e)t[n]=e[n];return t}var Nr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ri(e,t){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)e[n]=s[n];for(let i=0;i<Nr.length;i++)n=Nr[i],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function As(e){return As[" "](e),e}As[" "]=We;function nu(e){var t=iu;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var su=Q(W,"Opera"),Ut=Q(W,"Trident")||Q(W,"MSIE"),xi=Q(W,"Edge"),Zn=xi||Ut,Oi=Q(W,"Gecko")&&!(Q(W.toLowerCase(),"webkit")&&!Q(W,"Edge"))&&!(Q(W,"Trident")||Q(W,"MSIE"))&&!Q(W,"Edge"),ru=Q(W.toLowerCase(),"webkit")&&!Q(W,"Edge");function Li(){var e=E.document;return e?e.documentMode:void 0}var Ye;t:{var Pn="",Vn=function(){var e=W;if(Oi)return/rv:([^\);]+)(\)|;)/.exec(e);if(xi)return/Edge\/([\d\.]+)/.exec(e);if(Ut)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(ru)return/WebKit\/(\S+)/.exec(e);if(su)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Vn&&(Pn=Vn?Vn[1]:""),Ut){var Bn=Li();if(Bn!=null&&Bn>parseFloat(Pn)){Ye=String(Bn);break t}}Ye=Pn}var iu={};function ou(){return nu(function(){let e=0;const t=Ar(String(Ye)).split("."),n=Ar("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var r=t[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;e=Fn(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Fn(r[2].length==0,i[2].length==0)||Fn(r[2],i[2]),r=r[3],i=i[3]}while(e==0)}return 0<=e})}var ts;if(E.document&&Ut){var _r=Li();ts=_r||parseInt(Ye,10)||void 0}else ts=void 0;var au=ts,cu=function(){if(!E.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{E.addEventListener("test",We,t),E.removeEventListener("test",We,t)}catch{}return e}();function G(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}G.prototype.h=function(){this.defaultPrevented=!0};function fe(e,t){if(G.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Oi){t:{try{As(t.nodeName);var r=!0;break t}catch{}r=!1}r||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:uu[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&fe.Z.h.call(this)}}H(fe,G);var uu={2:"touch",3:"pen",4:"mouse"};fe.prototype.h=function(){fe.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Se="closure_listenable_"+(1e6*Math.random()|0),hu=0;function lu(e,t,n,s,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ia=r,this.key=++hu,this.ca=this.fa=!1}function ln(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function dn(e){this.src=e,this.g={},this.h=0}dn.prototype.add=function(e,t,n,s,r){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=ns(e,t,s,r);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new lu(t,this.src,i,!!s,r),t.fa=n,e.push(t)),t};function es(e,t){var n=t.type;if(n in e.g){var s=e.g[n],r=Ni(s,t),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(ln(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function ns(e,t,n,s){for(var r=0;r<e.length;++r){var i=e[r];if(!i.ca&&i.listener==t&&i.capture==!!n&&i.ia==s)return r}return-1}var bs="closure_lm_"+(1e6*Math.random()|0),Un={};function Mi(e,t,n,s,r){if(s&&s.once)return Pi(e,t,n,s,r);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Mi(e,t[i],n,s,r);return null}return n=_s(n),e&&e[Se]?e.N(t,n,Ce(s)?!!s.capture:!!s,r):Fi(e,t,n,!1,s,r)}function Fi(e,t,n,s,r,i){if(!t)throw Error("Invalid event type");var o=Ce(r)?!!r.capture:!!r,a=Ns(e);if(a||(e[bs]=a=new dn(e)),n=a.add(t,n,s,o,i),n.proxy)return n;if(s=du(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)cu||(r=o),r===void 0&&(r=!1),e.addEventListener(t.toString(),s,r);else if(e.attachEvent)e.attachEvent(Bi(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function du(){function e(n){return t.call(e.src,e.listener,n)}var t=fu;return e}function Pi(e,t,n,s,r){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Pi(e,t[i],n,s,r);return null}return n=_s(n),e&&e[Se]?e.O(t,n,Ce(s)?!!s.capture:!!s,r):Fi(e,t,n,!0,s,r)}function Vi(e,t,n,s,r){if(Array.isArray(t))for(var i=0;i<t.length;i++)Vi(e,t[i],n,s,r);else s=Ce(s)?!!s.capture:!!s,n=_s(n),e&&e[Se]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=ns(i,n,s,r),-1<n&&(ln(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=Ns(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ns(t,n,s,r)),(n=-1<e?t[e]:null)&&Ds(n))}function Ds(e){if(typeof e!="number"&&e&&!e.ca){var t=e.src;if(t&&t[Se])es(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(Bi(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Ns(t))?(es(n,e),n.h==0&&(n.src=null,t[bs]=null)):ln(e)}}}function Bi(e){return e in Un?Un[e]:Un[e]="on"+e}function fu(e,t){if(e.ca)e=!0;else{t=new fe(t,this);var n=e.listener,s=e.ia||e.src;e.fa&&Ds(e),e=n.call(s,t)}return e}function Ns(e){return e=e[bs],e instanceof dn?e:null}var $n="__closure_events_fn_"+(1e9*Math.random()>>>0);function _s(e){return typeof e=="function"?e:(e[$n]||(e[$n]=function(t){return e.handleEvent(t)}),e[$n])}function V(){yt.call(this),this.i=new dn(this),this.P=this,this.I=null}H(V,yt);V.prototype[Se]=!0;V.prototype.removeEventListener=function(e,t,n,s){Vi(this,e,t,n,s)};function q(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new G(t,e);else if(t instanceof G)t.target=t.target||e;else{var r=t;t=new G(s,e),Ri(t,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];r=Be(o,s,!0,t)&&r}if(o=t.g=e,r=Be(o,s,!0,t)&&r,r=Be(o,s,!1,t)&&r,n)for(i=0;i<n.length;i++)o=t.g=n[i],r=Be(o,s,!1,t)&&r}V.prototype.M=function(){if(V.Z.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)ln(n[s]);delete e.g[t],e.h--}}this.I=null};V.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};V.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function Be(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&es(e.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var ks=E.JSON.stringify;function gu(){var e=$i;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class pu{constructor(){this.h=this.g=null}add(t,n){const s=Ui.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Ui=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new mu,e=>e.reset());class mu{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function yu(e){E.setTimeout(()=>{throw e},0)}function Rs(e,t){ss||vu(),rs||(ss(),rs=!0),$i.add(e,t)}var ss;function vu(){var e=E.Promise.resolve(void 0);ss=function(){e.then(wu)}}var rs=!1,$i=new pu;function wu(){for(var e;e=gu();){try{e.h.call(e.g)}catch(n){yu(n)}var t=Ui;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}rs=!1}function fn(e,t){V.call(this),this.h=e||1,this.g=t||E,this.j=j(this.kb,this),this.l=Date.now()}H(fn,V);g=fn.prototype;g.da=!1;g.S=null;g.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),q(this,"tick"),this.da&&(xs(this),this.start()))}};g.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function xs(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}g.M=function(){fn.Z.M.call(this),xs(this),delete this.g};function Os(e,t,n){if(typeof e=="function")n&&(e=j(e,n));else if(e&&typeof e.handleEvent=="function")e=j(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:E.setTimeout(e,t||0)}function ji(e){e.g=Os(()=>{e.g=null,e.i&&(e.i=!1,ji(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Eu extends yt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:ji(this)}M(){super.M(),this.g&&(E.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ge(e){yt.call(this),this.h=e,this.g={}}H(ge,yt);var kr=[];function qi(e,t,n,s){Array.isArray(n)||(n&&(kr[0]=n.toString()),n=kr);for(var r=0;r<n.length;r++){var i=Mi(t,n[r],s||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function Ki(e){Ss(e.g,function(t,n){this.g.hasOwnProperty(n)&&Ds(t)},e),e.g={}}ge.prototype.M=function(){ge.Z.M.call(this),Ki(this)};ge.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function gn(){this.g=!0}gn.prototype.Aa=function(){this.g=!1};function Tu(e,t,n,s,r,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&l[1]=="type"?o+(h+"="+u+"&"):o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+t+`
`+n+`
`+o})}function Iu(e,t,n,s,r,i,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+t+`
`+n+`
`+i+" "+o})}function Lt(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Su(e,n)+(s?" "+s:"")})}function Cu(e,t){e.info(function(){return"TIMEOUT: "+t})}gn.prototype.info=function(){};function Su(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return ks(n)}catch{return t}}var xt={},Rr=null;function pn(){return Rr=Rr||new V}xt.Ma="serverreachability";function Hi(e){G.call(this,xt.Ma,e)}H(Hi,G);function pe(e){const t=pn();q(t,new Hi(t))}xt.STAT_EVENT="statevent";function zi(e,t){G.call(this,xt.STAT_EVENT,e),this.stat=t}H(zi,G);function X(e){const t=pn();q(t,new zi(t,e))}xt.Na="timingevent";function Gi(e,t){G.call(this,xt.Na,e),this.size=t}H(Gi,G);function Ae(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return E.setTimeout(function(){e()},t)}var mn={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Qi={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Ls(){}Ls.prototype.h=null;function xr(e){return e.h||(e.h=e.i())}function Wi(){}var be={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ms(){G.call(this,"d")}H(Ms,G);function Fs(){G.call(this,"c")}H(Fs,G);var is;function yn(){}H(yn,Ls);yn.prototype.g=function(){return new XMLHttpRequest};yn.prototype.i=function(){return{}};is=new yn;function De(e,t,n,s){this.l=e,this.j=t,this.m=n,this.X=s||1,this.V=new ge(this),this.P=Au,e=Zn?125:void 0,this.W=new fn(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Xi}function Xi(){this.i=null,this.g="",this.h=!1}var Au=45e3,os={},Je={};g=De.prototype;g.setTimeout=function(e){this.P=e};function as(e,t,n){e.K=1,e.v=wn(ct(t)),e.s=n,e.U=!0,Yi(e,null)}function Yi(e,t){e.F=Date.now(),Ne(e),e.A=ct(e.v);var n=e.A,s=e.X;Array.isArray(s)||(s=[String(s)]),ro(n.h,"t",s),e.C=0,n=e.l.H,e.h=new Xi,e.g=Ao(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Eu(j(e.Ia,e,e.g),e.O)),qi(e.V,e.g,"readystatechange",e.gb),t=e.H?ki(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),pe(),Tu(e.j,e.u,e.A,e.m,e.X,e.s)}g.gb=function(e){e=e.target;const t=this.L;t&&at(e)==3?t.l():this.Ia(e)};g.Ia=function(e){try{if(e==this.g)t:{const h=at(this.g);var t=this.g.Da();const l=this.g.ba();if(!(3>h)&&(h!=3||Zn||this.g&&(this.h.h||this.g.ga()||Fr(this.g)))){this.I||h!=4||t==7||(t==8||0>=l?pe(3):pe(2)),vn(this);var n=this.g.ba();this.N=n;e:if(Ji(this)){var s=Fr(this.g);e="";var r=s.length,i=at(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Et(this),oe(this);var o="";break e}this.h.i=new E.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:i&&t==r-1});s.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,Iu(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Xe(a)){var u=a;break e}}u=null}if(n=u)Lt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,cs(this,n);else{this.i=!1,this.o=3,X(12),Et(this),oe(this);break t}}this.U?(Zi(this,h,o),Zn&&this.i&&h==3&&(qi(this.V,this.W,"tick",this.fb),this.W.start())):(Lt(this.j,this.m,o,null),cs(this,o)),h==4&&Et(this),this.i&&!this.I&&(h==4?To(this.l,this):(this.i=!1,Ne(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,X(12)):(this.o=0,X(13)),Et(this),oe(this)}}}catch{}finally{}};function Ji(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Ba:!1}function Zi(e,t,n){let s=!0,r;for(;!e.I&&e.C<n.length;)if(r=bu(e,n),r==Je){t==4&&(e.o=4,X(14),s=!1),Lt(e.j,e.m,null,"[Incomplete Response]");break}else if(r==os){e.o=4,X(15),Lt(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Lt(e.j,e.m,r,null),cs(e,r);Ji(e)&&r!=Je&&r!=os&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,X(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Hs(t),t.L=!0,X(11))):(Lt(e.j,e.m,n,"[Invalid Chunked Response]"),Et(e),oe(e))}g.fb=function(){if(this.g){var e=at(this.g),t=this.g.ga();this.C<t.length&&(vn(this),Zi(this,e,t),this.i&&e!=4&&Ne(this))}};function bu(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?Je:(n=Number(t.substring(n,s)),isNaN(n)?os:(s+=1,s+n>t.length?Je:(t=t.substr(s,n),e.C=s+n,t)))}g.cancel=function(){this.I=!0,Et(this)};function Ne(e){e.Y=Date.now()+e.P,to(e,e.P)}function to(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Ae(j(e.eb,e),t)}function vn(e){e.B&&(E.clearTimeout(e.B),e.B=null)}g.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Cu(this.j,this.A),this.K!=2&&(pe(),X(17)),Et(this),this.o=2,oe(this)):to(this,this.Y-e)};function oe(e){e.l.G==0||e.I||To(e.l,e)}function Et(e){vn(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,xs(e.W),Ki(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function cs(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||us(n.i,e))){if(n.I=e.N,!e.J&&us(n.i,e)&&n.G==3){try{var s=n.Ca.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)nn(n),In(n);else break t;Ks(n),X(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=Ae(j(n.ab,n),6e3));if(1>=ao(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Tt(n,11)}else if((e.J||n.g==e)&&nn(n),!Xe(t))for(r=n.Ca.g.parse(t),t=0;t<r.length;t++){let u=r[t];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const h=u[3];h!=null&&(n.ma=h,n.h.info("VER="+n.ma));const l=u[4];l!=null&&(n.za=l,n.h.info("SVER="+n.za));const p=u[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=e.g;if(m){const T=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(T){var i=s.i;!i.g&&(Q(T,"spdy")||Q(T,"quic")||Q(T,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Bs(i,i.h),i.h=null))}if(s.D){const z=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;z&&(s.sa=z,_(s.F,s.D,z))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=e;if(s.oa=So(s,s.H?s.la:null,s.W),o.J){co(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(vn(a),Ne(a)),s.g=o}else wo(s);0<n.l.length&&Cn(n)}else u[0]!="stop"&&u[0]!="close"||Tt(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Tt(n,7):qs(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}pe(4)}catch{}}function Du(e){if(e.R&&typeof e.R=="function")return e.R();if(typeof e=="string")return e.split("");if(Jn(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function Ps(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Jn(e)||typeof e=="string")_i(e,t,void 0);else{if(e.T&&typeof e.T=="function")var n=e.T();else if(e.R&&typeof e.R=="function")n=void 0;else if(Jn(e)||typeof e=="string"){n=[];for(var s=e.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,e)n[s++]=r;s=Du(e),r=s.length;for(var i=0;i<r;i++)t.call(void 0,s[i],n&&n[i],e)}}function Qt(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(e)if(e instanceof Qt)for(n=e.T(),s=0;s<n.length;s++)this.set(n[s],e.get(n[s]));else for(s in e)this.set(s,e[s])}g=Qt.prototype;g.R=function(){Vs(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e};g.T=function(){return Vs(this),this.g.concat()};function Vs(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var s=e.g[t];Nt(e.h,s)&&(e.g[n++]=s),t++}e.g.length=n}if(e.i!=e.g.length){var r={};for(n=t=0;t<e.g.length;)s=e.g[t],Nt(r,s)||(e.g[n++]=s,r[s]=1),t++;e.g.length=n}}g.get=function(e,t){return Nt(this.h,e)?this.h[e]:t};g.set=function(e,t){Nt(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t};g.forEach=function(e,t){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);e.call(t,i,r,this)}};function Nt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var eo=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Nu(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),r=null;if(0<=s){var i=e[n].substring(0,s);r=e[n].substring(s+1)}else i=e[n];t(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function _t(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof _t){this.g=t!==void 0?t:e.g,Ze(this,e.j),this.s=e.s,tn(this,e.i),en(this,e.m),this.l=e.l,t=e.h;var n=new me;n.i=t.i,t.g&&(n.g=new Qt(t.g),n.h=t.h),Or(this,n),this.o=e.o}else e&&(n=String(e).match(eo))?(this.g=!!t,Ze(this,n[1]||"",!0),this.s=ae(n[2]||""),tn(this,n[3]||"",!0),en(this,n[4]),this.l=ae(n[5]||"",!0),Or(this,n[6]||"",!0),this.o=ae(n[7]||"")):(this.g=!!t,this.h=new me(null,this.g))}_t.prototype.toString=function(){var e=[],t=this.j;t&&e.push(se(t,Lr,!0),":");var n=this.i;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(se(t,Lr,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&e.push("/"),e.push(se(n,n.charAt(0)=="/"?Ou:xu,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",se(n,Mu)),e.join("")};function ct(e){return new _t(e)}function Ze(e,t,n){e.j=n?ae(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function tn(e,t,n){e.i=n?ae(t,!0):t}function en(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Or(e,t,n){t instanceof me?(e.h=t,Fu(e.h,e.g)):(n||(t=se(t,Lu)),e.h=new me(t,e.g))}function _(e,t,n){e.h.set(t,n)}function wn(e){return _(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function _u(e){return e instanceof _t?ct(e):new _t(e,void 0)}function ku(e,t,n,s){var r=new _t(null,void 0);return e&&Ze(r,e),t&&tn(r,t),n&&en(r,n),s&&(r.l=s),r}function ae(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function se(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Ru),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Ru(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Lr=/[#\/\?@]/g,xu=/[#\?:]/g,Ou=/[#\?]/g,Lu=/[#\?@]/g,Mu=/#/g;function me(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function vt(e){e.g||(e.g=new Qt,e.h=0,e.i&&Nu(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}g=me.prototype;g.add=function(e,t){vt(this),this.i=null,e=Wt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function no(e,t){vt(e),t=Wt(e,t),Nt(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Nt(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Vs(e)))}function so(e,t){return vt(e),t=Wt(e,t),Nt(e.g.h,t)}g.forEach=function(e,t){vt(this),this.g.forEach(function(n,s){_i(n,function(r){e.call(t,r,s,this)},this)},this)};g.T=function(){vt(this);for(var e=this.g.R(),t=this.g.T(),n=[],s=0;s<t.length;s++)for(var r=e[s],i=0;i<r.length;i++)n.push(t[s]);return n};g.R=function(e){vt(this);var t=[];if(typeof e=="string")so(this,e)&&(t=Sr(t,this.g.get(Wt(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=Sr(t,e[n])}return t};g.set=function(e,t){return vt(this),this.i=null,e=Wt(this,e),so(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};g.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t};function ro(e,t,n){no(e,t),0<n.length&&(e.i=null,e.g.set(Wt(e,t),Cs(n)),e.h+=n.length)}g.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var s=t[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),e.push(o)}}return this.i=e.join("&")};function Wt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Fu(e,t){t&&!e.j&&(vt(e),e.i=null,e.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(no(this,s),ro(this,r,n))},e)),e.j=t}var Pu=class{constructor(e,t){this.h=e,this.g=t}};function io(e){this.l=e||Vu,E.PerformanceNavigationTiming?(e=E.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(E.g&&E.g.Ea&&E.g.Ea()&&E.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Vu=10;function oo(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function ao(e){return e.h?1:e.g?e.g.size:0}function us(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Bs(e,t){e.g?e.g.add(t):e.h=t}function co(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}io.prototype.cancel=function(){if(this.i=uo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function uo(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Cs(e.i)}function Us(){}Us.prototype.stringify=function(e){return E.JSON.stringify(e,void 0)};Us.prototype.parse=function(e){return E.JSON.parse(e,void 0)};function Bu(){this.g=new Us}function Uu(e,t,n){const s=n||"";try{Ps(e,function(r,i){let o=r;Ce(r)&&(o=ks(r)),t.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw t.push(s+"type="+encodeURIComponent("_badmap")),r}}function $u(e,t){const n=new gn;if(E.Image){const s=new Image;s.onload=Ve(Ue,n,s,"TestLoadImage: loaded",!0,t),s.onerror=Ve(Ue,n,s,"TestLoadImage: error",!1,t),s.onabort=Ve(Ue,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=Ve(Ue,n,s,"TestLoadImage: timeout",!1,t),E.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function Ue(e,t,n,s,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(s)}catch{}}function _e(e){this.l=e.$b||null,this.j=e.ib||!1}H(_e,Ls);_e.prototype.g=function(){return new En(this.l,this.j)};_e.prototype.i=function(e){return function(){return e}}({});function En(e,t){V.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=$s,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}H(En,V);var $s=0;g=En.prototype;g.open=function(e,t){if(this.readyState!=$s)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ye(this)};g.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||E).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))};g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ke(this)),this.readyState=$s};g.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ye(this)),this.g&&(this.readyState=3,ye(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof E.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ho(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))};function ho(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}g.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ke(this):ye(this),this.readyState==3&&ho(this)}};g.Ua=function(e){this.g&&(this.response=this.responseText=e,ke(this))};g.Ta=function(e){this.g&&(this.response=e,ke(this))};g.ha=function(){this.g&&ke(this)};function ke(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ye(e)}g.setRequestHeader=function(e,t){this.v.append(e,t)};g.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};g.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function ye(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(En.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var ju=E.JSON.parse;function L(e){V.call(this),this.headers=new Qt,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=lo,this.K=this.L=!1}H(L,V);var lo="",qu=/^https?$/i,Ku=["POST","PUT"];g=L.prototype;g.ea=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():is.g(),this.C=this.u?xr(this.u):xr(is),this.g.onreadystatechange=j(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){Mr(this,i);return}e=n||"";const r=new Qt(this.headers);s&&Ps(s,function(i,o){r.set(o,i)}),s=eu(r.T()),n=E.FormData&&e instanceof E.FormData,!(0<=Ni(Ku,t))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{po(this),0<this.B&&((this.K=Hu(this.g))?(this.g.timeout=this.B,this.g.ontimeout=j(this.pa,this)):this.A=Os(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Mr(this,i)}};function Hu(e){return Ut&&ou()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}function zu(e){return e.toLowerCase()=="content-type"}g.pa=function(){typeof Is<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,q(this,"timeout"),this.abort(8))};function Mr(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,fo(e),Tn(e)}function fo(e){e.D||(e.D=!0,q(e,"complete"),q(e,"error"))}g.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,q(this,"complete"),q(this,"abort"),Tn(this))};g.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Tn(this,!0)),L.Z.M.call(this)};g.Fa=function(){this.s||(this.F||this.v||this.l?go(this):this.cb())};g.cb=function(){go(this)};function go(e){if(e.h&&typeof Is<"u"&&(!e.C[1]||at(e)!=4||e.ba()!=2)){if(e.v&&at(e)==4)Os(e.Fa,0,e);else if(q(e,"readystatechange"),at(e)==4){e.h=!1;try{const a=e.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var r=String(e.H).match(eo)[1]||null;if(!r&&E.self&&E.self.location){var i=E.self.location.protocol;r=i.substr(0,i.length-1)}s=!qu.test(r?r.toLowerCase():"")}n=s}if(n)q(e,"complete"),q(e,"success");else{e.m=6;try{var o=2<at(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.ba()+"]",fo(e)}}finally{Tn(e)}}}}function Tn(e,t){if(e.g){po(e);const n=e.g,s=e.C[0]?We:null;e.g=null,e.C=null,t||q(e,"ready");try{n.onreadystatechange=s}catch{}}}function po(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(E.clearTimeout(e.A),e.A=null)}function at(e){return e.g?e.g.readyState:0}g.ba=function(){try{return 2<at(this)?this.g.status:-1}catch{return-1}};g.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};g.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),ju(t)}};function Fr(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case lo:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}g.Da=function(){return this.m};g.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Gu(e){let t="";return Ss(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function js(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Gu(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):_(e,t,n))}function ne(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function mo(e){this.za=0,this.l=[],this.h=new gn,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ne("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ne("baseRetryDelayMs",5e3,e),this.$a=ne("retryDelaySeedMs",1e4,e),this.Ya=ne("forwardChannelMaxRetries",2,e),this.ra=ne("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new io(e&&e.concurrentRequestLimit),this.Ca=new Bu,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||e.Xb!==!1}g=mo.prototype;g.ma=8;g.G=1;function qs(e){if(yo(e),e.G==3){var t=e.V++,n=ct(e.F);_(n,"SID",e.J),_(n,"RID",t),_(n,"TYPE","terminate"),Re(e,n),t=new De(e,e.h,t,void 0),t.K=2,t.v=wn(ct(n)),n=!1,E.navigator&&E.navigator.sendBeacon&&(n=E.navigator.sendBeacon(t.v.toString(),"")),!n&&E.Image&&(new Image().src=t.v,n=!0),n||(t.g=Ao(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Ne(t)}Co(e)}g.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch{}};function In(e){e.g&&(Hs(e),e.g.cancel(),e.g=null)}function yo(e){In(e),e.u&&(E.clearTimeout(e.u),e.u=null),nn(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&E.clearTimeout(e.m),e.m=null)}function jn(e,t){e.l.push(new Pu(e.Za++,t)),e.G==3&&Cn(e)}function Cn(e){oo(e.i)||e.m||(e.m=!0,Rs(e.Ha,e),e.C=0)}function Qu(e,t){return ao(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.l=t.D.concat(e.l),!0):e.G==1||e.G==2||e.C>=(e.Xa?0:e.Ya)?!1:(e.m=Ae(j(e.Ha,e,t),Io(e,e.C)),e.C++,!0)}g.Ha=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const r=new De(this,this.h,e,void 0);let i=this.s;if(this.P&&(i?(i=ki(i),Ri(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)t:{for(var t=0,n=0;n<this.l.length;n++){e:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.l.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=vo(this,r,t),n=ct(this.F),_(n,"RID",e),_(n,"CVER",22),this.D&&_(n,"X-HTTP-Session-Id",this.D),Re(this,n),this.o&&i&&js(n,this.o,i),Bs(this.i,r),this.Ra&&_(n,"TYPE","init"),this.ja?(_(n,"$req",t),_(n,"SID","null"),r.$=!0,as(r,n,null)):as(r,n,t),this.G=2}}else this.G==3&&(e?Pr(this,e):this.l.length==0||oo(this.i)||Pr(this))};function Pr(e,t){var n;t?n=t.m:n=e.V++;const s=ct(e.F);_(s,"SID",e.J),_(s,"RID",n),_(s,"AID",e.U),Re(e,s),e.o&&e.s&&js(s,e.o,e.s),n=new De(e,e.h,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=vo(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),Bs(e.i,n),as(n,s,t)}function Re(e,t){e.j&&Ps({},function(n,s){_(t,s,n)})}function vo(e,t,n){n=Math.min(e.l.length,n);var s=e.j?j(e.j.Oa,e.j,e):null;t:{var r=e.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const h=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{Uu(h,o,"req"+u+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break t}}}return e=e.l.splice(0,n),t.D=e,s}function wo(e){e.g||e.u||(e.Y=1,Rs(e.Ga,e),e.A=0)}function Ks(e){return e.g||e.u||3<=e.A?!1:(e.Y++,e.u=Ae(j(e.Ga,e),Io(e,e.A)),e.A++,!0)}g.Ga=function(){if(this.u=null,Eo(this),this.$&&!(this.L||this.g==null||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=Ae(j(this.bb,this),e)}};g.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,X(10),In(this),Eo(this))};function Hs(e){e.B!=null&&(E.clearTimeout(e.B),e.B=null)}function Eo(e){e.g=new De(e,e.h,"rpc",e.Y),e.o===null&&(e.g.H=e.s),e.g.O=0;var t=ct(e.oa);_(t,"RID","rpc"),_(t,"SID",e.J),_(t,"CI",e.N?"0":"1"),_(t,"AID",e.U),Re(e,t),_(t,"TYPE","xmlhttp"),e.o&&e.s&&js(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=wn(ct(t)),n.s=null,n.U=!0,Yi(n,e)}g.ab=function(){this.v!=null&&(this.v=null,In(this),Ks(this),X(19))};function nn(e){e.v!=null&&(E.clearTimeout(e.v),e.v=null)}function To(e,t){var n=null;if(e.g==t){nn(e),Hs(e),e.g=null;var s=2}else if(us(e.i,t))n=t.D,co(e.i,t),s=1;else return;if(e.I=t.N,e.G!=0){if(t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;s=pn(),q(s,new Gi(s,n)),Cn(e)}else wo(e);else if(r=t.o,r==3||r==0&&0<e.I||!(s==1&&Qu(e,t)||s==2&&Ks(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),r){case 1:Tt(e,5);break;case 4:Tt(e,10);break;case 3:Tt(e,6);break;default:Tt(e,2)}}}function Io(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function Tt(e,t){if(e.h.info("Error code "+t),t==2){var n=null;e.j&&(n=null);var s=j(e.jb,e);n||(n=new _t("//www.google.com/images/cleardot.gif"),E.location&&E.location.protocol=="http"||Ze(n,"https"),wn(n)),$u(n.toString(),s)}else X(2);e.G=0,e.j&&e.j.va(t),Co(e),yo(e)}g.jb=function(e){e?(this.h.info("Successfully pinged google.com"),X(2)):(this.h.info("Failed to ping google.com"),X(1))};function Co(e){e.G=0,e.I=-1,e.j&&((uo(e.i).length!=0||e.l.length!=0)&&(e.i.i.length=0,Cs(e.l),e.l.length=0),e.j.ua())}function So(e,t,n){let s=_u(n);if(s.i!="")t&&tn(s,t+"."+s.i),en(s,s.m);else{const r=E.location;s=ku(r.protocol,t?t+"."+r.hostname:r.hostname,+r.port,n)}return e.aa&&Ss(e.aa,function(r,i){_(s,i,r)}),t=e.D,n=e.sa,t&&n&&_(s,t,n),_(s,"VER",e.ma),Re(e,s),s}function Ao(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new L(new _e({ib:!0})):new L(e.qa),t.L=e.H,t}function bo(){}g=bo.prototype;g.xa=function(){};g.wa=function(){};g.va=function(){};g.ua=function(){};g.Oa=function(){};function sn(){if(Ut&&!(10<=Number(au)))throw Error("Environmental error: no available transport.")}sn.prototype.g=function(e,t){return new et(e,t)};function et(e,t){V.call(this),this.g=new mo(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!Xe(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Xe(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Xt(this)}H(et,V);et.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Rs(j(e.hb,e,t))),X(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=So(e,null,e.W),Cn(e)};et.prototype.close=function(){qs(this.g)};et.prototype.u=function(e){if(typeof e=="string"){var t={};t.__data__=e,jn(this.g,t)}else this.v?(t={},t.__data__=ks(e),jn(this.g,t)):jn(this.g,e)};et.prototype.M=function(){this.g.j=null,delete this.j,qs(this.g),delete this.g,et.Z.M.call(this)};function Do(e){Ms.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}H(Do,Ms);function No(){Fs.call(this),this.status=1}H(No,Fs);function Xt(e){this.g=e}H(Xt,bo);Xt.prototype.xa=function(){q(this.g,"a")};Xt.prototype.wa=function(e){q(this.g,new Do(e))};Xt.prototype.va=function(e){q(this.g,new No)};Xt.prototype.ua=function(){q(this.g,"b")};sn.prototype.createWebChannel=sn.prototype.g;et.prototype.send=et.prototype.u;et.prototype.open=et.prototype.m;et.prototype.close=et.prototype.close;mn.NO_ERROR=0;mn.TIMEOUT=8;mn.HTTP_ERROR=6;Qi.COMPLETE="complete";Wi.EventType=be;be.OPEN="a";be.CLOSE="b";be.ERROR="c";be.MESSAGE="d";V.prototype.listen=V.prototype.N;L.prototype.listenOnce=L.prototype.O;L.prototype.getLastError=L.prototype.La;L.prototype.getLastErrorCode=L.prototype.Da;L.prototype.getStatus=L.prototype.ba;L.prototype.getResponseJson=L.prototype.Qa;L.prototype.getResponseText=L.prototype.ga;L.prototype.send=L.prototype.ea;var Wu=function(){return new sn},Xu=function(){return pn()},qn=mn,Yu=Qi,Ju=xt,Vr={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Zu=_e,$e=Wi,th=L;const Br="@firebase/firestore";/**
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
 */class Y{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Y.UNAUTHENTICATED=new Y(null),Y.GOOGLE_CREDENTIALS=new Y("google-credentials-uid"),Y.FIRST_PARTY=new Y("first-party-uid"),Y.MOCK_USER=new Y("mock-user");/**
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
 */let Yt="9.9.2";/**
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
 */const kt=new Ii("@firebase/firestore");function Ur(){return kt.logLevel}function y(e,...t){if(kt.logLevel<=D.DEBUG){const n=t.map(zs);kt.debug(`Firestore (${Yt}): ${e}`,...n)}}function ut(e,...t){if(kt.logLevel<=D.ERROR){const n=t.map(zs);kt.error(`Firestore (${Yt}): ${e}`,...n)}}function $r(e,...t){if(kt.logLevel<=D.WARN){const n=t.map(zs);kt.warn(`Firestore (${Yt}): ${e}`,...n)}}function zs(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
 */function I(e="Unexpected state"){const t=`FIRESTORE (${Yt}) INTERNAL ASSERTION FAILED: `+e;throw ut(t),new Error(t)}function O(e,t){e||I()}function b(e,t){return e}/**
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
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class v extends Gt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class dt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class eh{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class nh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Y.UNAUTHENTICATED))}shutdown(){}}class sh{constructor(t){this.t=t,this.currentUser=Y.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new dt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new dt,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new dt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(O(typeof s.accessToken=="string"),new eh(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return O(t===null||typeof t=="string"),new Y(t)}}class rh{constructor(t,n,s){this.type="FirstParty",this.user=Y.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class ih{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new rh(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(Y.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class oh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ah{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,n){const s=i=>{i.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>s(i))};const r=i=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(O(typeof n.token=="string"),this.p=n.token,new oh(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function ch(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class _o{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const r=ch(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=t.charAt(r[i]%t.length))}return s}}function N(e,t){return e<t?-1:e>t?1:0}function $t(e,t,n){return e.length===t.length&&e.every((s,r)=>n(s,t[r]))}/**
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
 */class tt{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new v(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new v(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new v(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new v(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return tt.fromMillis(Date.now())}static fromDate(t){return tt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new tt(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?N(this.nanoseconds,t.nanoseconds):N(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class C{constructor(t){this.timestamp=t}static fromTimestamp(t){return new C(t)}static min(){return new C(new tt(0,0))}static max(){return new C(new tt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ve{constructor(t,n,s){n===void 0?n=0:n>t.length&&I(),s===void 0?s=t.length-n:s>t.length-n&&I(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return ve.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof ve?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let r=0;r<s;r++){const i=t.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class k extends ve{construct(t,n,s){return new k(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new v(f.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new k(n)}static emptyPath(){return new k([])}}const uh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class J extends ve{construct(t,n,s){return new J(t,n,s)}static isValidIdentifier(t){return uh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),J.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new J(["__name__"])}static fromServerFormat(t){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new v(f.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new v(f.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new v(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new v(f.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new J(n)}static emptyPath(){return new J([])}}/**
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
 */class w{constructor(t){this.path=t}static fromPath(t){return new w(k.fromString(t))}static fromName(t){return new w(k.fromString(t).popFirst(5))}static empty(){return new w(k.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&k.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return k.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new w(new k(t.slice()))}}function hh(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,r=C.fromTimestamp(s===1e9?new tt(n+1,0):new tt(n,s));return new gt(r,w.empty(),t)}function lh(e){return new gt(e.readTime,e.key,-1)}class gt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new gt(C.min(),w.empty(),-1)}static max(){return new gt(C.max(),w.empty(),-1)}}function dh(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=w.comparator(e.documentKey,t.documentKey),n!==0?n:N(e.largestBatchId,t.largestBatchId))}/**
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
 */const fh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Gs(e){if(e.code!==f.FAILED_PRECONDITION||e.message!==fh)throw e;y("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class d{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new d((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof d?n:d.resolve(n)}catch(n){return d.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):d.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):d.reject(n)}static resolve(t){return new d((n,s)=>{n(t)})}static reject(t){return new d((n,s)=>{s(t)})}static waitFor(t){return new d((n,s)=>{let r=0,i=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(t){let n=d.resolve(!1);for(const s of t)n=n.next(r=>r?d.resolve(r):s());return n}static forEach(t,n){const s=[];return t.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(t,n){return new d((s,r)=>{const i=t.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(t[u]).next(h=>{o[u]=h,++a,a===i&&s(o)},h=>r(h))}})}static doWhile(t,n){return new d((s,r)=>{const i=()=>{t()===!0?n().next(()=>{i()},r):s()};i()})}}function xe(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class Qs{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.it(s),this.rt=s=>n.writeSequenceNumber(s))}it(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.rt&&this.rt(t),t}}/**
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
 */function jr(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Sn(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ph(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */Qs.ot=-1;class B{constructor(t,n){this.comparator=t,this.root=n||U.EMPTY}insert(t,n){return new B(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,U.BLACK,null,null))}remove(t){return new B(this.comparator,this.root.remove(t,this.comparator).copy(null,null,U.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(t,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new je(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new je(this.root,t,this.comparator,!1)}getReverseIterator(){return new je(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new je(this.root,t,this.comparator,!0)}}class je{constructor(t,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?s(t.key,n):1,n&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class U{constructor(t,n,s,r,i){this.key=t,this.value=n,this.color=s??U.RED,this.left=r??U.EMPTY,this.right=i??U.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,r,i){return new U(t??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let r=this;const i=s(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return U.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return U.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,U.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,U.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();const t=this.left.check();if(t!==this.right.check())throw I();return t+(this.isRed()?0:1)}}U.EMPTY=null,U.RED=!0,U.BLACK=!1;U.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(e,t,n,s,r){return this}insert(e,t,n){return new U(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class F{constructor(t){this.comparator=t,this.data=new B(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new qr(this.data.getIterator())}getIteratorFrom(t){return new qr(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof F)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new F(this.comparator);return n.data=t,n}}class qr{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ct{constructor(t){this.fields=t,t.sort(J.comparator)}static empty(){return new Ct([])}unionWith(t){let n=new F(J.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new Ct(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return $t(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class K{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new K(n)}static fromUint8Array(t){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(t);return new K(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return N(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}K.EMPTY_BYTE_STRING=new K("");const mh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pt(e){if(O(!!e),typeof e=="string"){let t=0;const n=mh.exec(e);if(O(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:x(e.seconds),nanos:x(e.nanos)}}function x(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function jt(e){return typeof e=="string"?K.fromBase64String(e):K.fromUint8Array(e)}/**
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
 */function ko(e){var t,n;return((n=(((t=e?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ro(e){const t=e.mapValue.fields.__previous_value__;return ko(t)?Ro(t):t}function we(e){const t=pt(e.mapValue.fields.__local_write_time__.timestampValue);return new tt(t.seconds,t.nanos)}/**
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
 */class yh{constructor(t,n,s,r,i,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class qt{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new qt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof qt&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */function An(e){return e==null}function hs(e){return e===0&&1/e==-1/0}/**
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
 */const qe={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Rt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ko(e)?4:vh(e)?9007199254740991:10:I()}function rt(e,t){if(e===t)return!0;const n=Rt(e);if(n!==Rt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return we(e).isEqual(we(t));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=pt(s.timestampValue),o=pt(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,r){return jt(s.bytesValue).isEqual(jt(r.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,r){return x(s.geoPointValue.latitude)===x(r.geoPointValue.latitude)&&x(s.geoPointValue.longitude)===x(r.geoPointValue.longitude)}(e,t);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return x(s.integerValue)===x(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=x(s.doubleValue),o=x(r.doubleValue);return i===o?hs(i)===hs(o):isNaN(i)&&isNaN(o)}return!1}(e,t);case 9:return $t(e.arrayValue.values||[],t.arrayValue.values||[],rt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(jr(i)!==jr(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!rt(i[a],o[a])))return!1;return!0}(e,t);default:return I()}}function Ee(e,t){return(e.values||[]).find(n=>rt(n,t))!==void 0}function Kt(e,t){if(e===t)return 0;const n=Rt(e),s=Rt(t);if(n!==s)return N(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return N(e.booleanValue,t.booleanValue);case 2:return function(r,i){const o=x(r.integerValue||r.doubleValue),a=x(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Kr(e.timestampValue,t.timestampValue);case 4:return Kr(we(e),we(t));case 5:return N(e.stringValue,t.stringValue);case 6:return function(r,i){const o=jt(r),a=jt(i);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=N(o[c],a[c]);if(u!==0)return u}return N(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(r,i){const o=N(x(r.latitude),x(i.latitude));return o!==0?o:N(x(r.longitude),x(i.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Kt(o[c],a[c]);if(u)return u}return N(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(r,i){if(r===qe.mapValue&&i===qe.mapValue)return 0;if(r===qe.mapValue)return 1;if(i===qe.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let h=0;h<a.length&&h<u.length;++h){const l=N(a[h],u[h]);if(l!==0)return l;const p=Kt(o[a[h]],c[u[h]]);if(p!==0)return p}return N(a.length,u.length)}(e.mapValue,t.mapValue);default:throw I()}}function Kr(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return N(e,t);const n=pt(e),s=pt(t),r=N(n.seconds,s.seconds);return r!==0?r:N(n.nanos,s.nanos)}function Pt(e){return ls(e)}function ls(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const r=pt(s);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?jt(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,w.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=ls(o);return r+"]"}(e.arrayValue):"mapValue"in e?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${ls(s.fields[a])}`;return i+"}"}(e.mapValue):I();var t,n}function ds(e){return!!e&&"integerValue"in e}function Ws(e){return!!e&&"arrayValue"in e}function Hr(e){return!!e&&"nullValue"in e}function zr(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Kn(e){return!!e&&"mapValue"in e}function ce(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Sn(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=ce(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ce(e.arrayValue.values[n]);return t}return Object.assign({},e)}function vh(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class nt{constructor(t){this.value=t}static empty(){return new nt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Kn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=ce(n)}setAll(t){let n=J.emptyPath(),s={},r=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=ce(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(t){const n=this.field(t.popLast());Kn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return rt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let r=n.mapValue.fields[t.get(s)];Kn(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,s){Sn(n,(r,i)=>t[r]=i);for(const r of s)delete t[r]}clone(){return new nt(ce(this.value))}}/**
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
 */class ${constructor(t,n,s,r,i,o){this.key=t,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(t){return new $(t,0,C.min(),C.min(),nt.empty(),0)}static newFoundDocument(t,n,s){return new $(t,1,n,C.min(),s,0)}static newNoDocument(t,n){return new $(t,2,n,C.min(),nt.empty(),0)}static newUnknownDocument(t,n){return new $(t,3,n,C.min(),nt.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=nt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=C.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof $&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new $(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class wh{constructor(t,n=null,s=[],r=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ut=null}}function Gr(e,t=null,n=[],s=[],r=null,i=null,o=null){return new wh(e,t,n,s,r,i,o)}function Xs(e){const t=b(e);if(t.ut===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+Pt(r.value);var r}).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),An(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Pt(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Pt(s)).join(",")),t.ut=n}return t.ut}function Eh(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Pt(s.value)}`;var s}).join(", ")}]`),An(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>Pt(n)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>Pt(n)).join(",")),`Target(${t})`}function Ys(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let r=0;r<e.orderBy.length;r++)if(!Nh(e.orderBy[r],t.orderBy[r]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(n=e.filters[r],s=t.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!rt(n.value,s.value))return!1;var n,s;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Wr(e.startAt,t.startAt)&&Wr(e.endAt,t.endAt)}function fs(e){return w.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}class Z extends class{}{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.ct(t,n,s):new Th(t,n,s):n==="array-contains"?new Sh(t,s):n==="in"?new Ah(t,s):n==="not-in"?new bh(t,s):n==="array-contains-any"?new Dh(t,s):new Z(t,n,s)}static ct(t,n,s){return n==="in"?new Ih(t,s):new Ch(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.at(Kt(n,this.value)):n!==null&&Rt(this.value)===Rt(n)&&this.at(Kt(n,this.value))}at(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return I()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Th extends Z{constructor(t,n,s){super(t,n,s),this.key=w.fromName(s.referenceValue)}matches(t){const n=w.comparator(t.key,this.key);return this.at(n)}}class Ih extends Z{constructor(t,n){super(t,"in",n),this.keys=xo("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Ch extends Z{constructor(t,n){super(t,"not-in",n),this.keys=xo("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function xo(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>w.fromName(s.referenceValue))}class Sh extends Z{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Ws(n)&&Ee(n.arrayValue,this.value)}}class Ah extends Z{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ee(this.value.arrayValue,n)}}class bh extends Z{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ee(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Ee(this.value.arrayValue,n)}}class Dh extends Z{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Ws(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ee(this.value.arrayValue,s))}}class rn{constructor(t,n){this.position=t,this.inclusive=n}}class Vt{constructor(t,n="asc"){this.field=t,this.dir=n}}function Nh(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Qr(e,t,n){let s=0;for(let r=0;r<e.position.length;r++){const i=t[r],o=e.position[r];if(i.field.isKeyField()?s=w.comparator(w.fromName(o.referenceValue),n.key):s=Kt(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Wr(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!rt(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class Oe{constructor(t,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.lt=null,this.ft=null,this.startAt,this.endAt}}function _h(e,t,n,s,r,i,o,a){return new Oe(e,t,n,s,r,i,o,a)}function Js(e){return new Oe(e)}function Xr(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Oo(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Lo(e){for(const t of e.filters)if(t.ht())return t.field;return null}function kh(e){return e.collectionGroup!==null}function Te(e){const t=b(e);if(t.lt===null){t.lt=[];const n=Lo(t),s=Oo(t);if(n!==null&&s===null)n.isKeyField()||t.lt.push(new Vt(n)),t.lt.push(new Vt(J.keyField(),"asc"));else{let r=!1;for(const i of t.explicitOrderBy)t.lt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.lt.push(new Vt(J.keyField(),i))}}}return t.lt}function ht(e){const t=b(e);if(!t.ft)if(t.limitType==="F")t.ft=Gr(t.path,t.collectionGroup,Te(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const i of Te(t)){const o=i.dir==="desc"?"asc":"desc";n.push(new Vt(i.field,o))}const s=t.endAt?new rn(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new rn(t.startAt.position,t.startAt.inclusive):null;t.ft=Gr(t.path,t.collectionGroup,n,t.filters,t.limit,s,r)}return t.ft}function gs(e,t,n){return new Oe(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function bn(e,t){return Ys(ht(e),ht(t))&&e.limitType===t.limitType}function Mo(e){return`${Xs(ht(e))}|lt:${e.limitType}`}function ps(e){return`Query(target=${Eh(ht(e))}; limitType=${e.limitType})`}function Zs(e,t){return t.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):w.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(e,t)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Qr(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Te(n),s)||n.endAt&&!function(r,i,o){const a=Qr(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Te(n),s))}(e,t)}function Rh(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Fo(e){return(t,n)=>{let s=!1;for(const r of Te(e)){const i=xh(r,t,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function xh(e,t,n){const s=e.field.isKeyField()?w.comparator(t.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Kt(a,c):I()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return I()}}/**
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
 */function Oh(e,t){if(e.dt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hs(t)?"-0":t}}function Lh(e){return{integerValue:""+e}}/**
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
 */class Dn{constructor(){this._=void 0}}function Mh(e,t,n){return e instanceof ms?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,t):e instanceof on?Po(e,t):e instanceof an?Vo(e,t):function(s,r){const i=Ph(s,r),o=Yr(i)+Yr(s._t);return ds(i)&&ds(s._t)?Lh(o):Oh(s.wt,o)}(e,t)}function Fh(e,t,n){return e instanceof on?Po(e,t):e instanceof an?Vo(e,t):n}function Ph(e,t){return e instanceof ys?ds(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class ms extends Dn{}class on extends Dn{constructor(t){super(),this.elements=t}}function Po(e,t){const n=Bo(t);for(const s of e.elements)n.some(r=>rt(r,s))||n.push(s);return{arrayValue:{values:n}}}class an extends Dn{constructor(t){super(),this.elements=t}}function Vo(e,t){let n=Bo(t);for(const s of e.elements)n=n.filter(r=>!rt(r,s));return{arrayValue:{values:n}}}class ys extends Dn{constructor(t,n){super(),this.wt=t,this._t=n}}function Yr(e){return x(e.integerValue||e.doubleValue)}function Bo(e){return Ws(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Vh(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof on&&s instanceof on||n instanceof an&&s instanceof an?$t(n.elements,s.elements,rt):n instanceof ys&&s instanceof ys?rt(n._t,s._t):n instanceof ms&&s instanceof ms}(e.transform,t.transform)}class St{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new St}static exists(t){return new St(void 0,t)}static updateTime(t){return new St(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ke(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class tr{}function Uo(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Uh(e.key,St.none()):new er(e.key,e.data,St.none());{const n=e.data,s=nt.empty();let r=new F(J.comparator);for(let i of t.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Nn(e.key,s,new Ct(r.toArray()),St.none())}}function Bh(e,t,n){e instanceof er?function(s,r,i){const o=s.value.clone(),a=Zr(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Nn?function(s,r,i){if(!Ke(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Zr(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll($o(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(e,t,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,t,n)}function ue(e,t,n,s){return e instanceof er?function(r,i,o,a){if(!Ke(r.precondition,i))return o;const c=r.value.clone(),u=ti(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(e,t,n,s):e instanceof Nn?function(r,i,o,a){if(!Ke(r.precondition,i))return o;const c=ti(r.fieldTransforms,a,i),u=i.data;return u.setAll($o(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(e,t,n,s):function(r,i,o){return Ke(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(e,t,n)}function Jr(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&$t(n,s,(r,i)=>Vh(r,i))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class er extends tr{constructor(t,n,s,r=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Nn extends tr{constructor(t,n,s,r,i=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function $o(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function Zr(e,t,n){const s=new Map;O(e.length===n.length);for(let r=0;r<n.length;r++){const i=e[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,Fh(o,a,n[r]))}return s}function ti(e,t,n){const s=new Map;for(const r of e){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Mh(i,o,t))}return s}class Uh extends tr{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class $h{constructor(t){this.count=t}}/**
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
 */var R,S;function jo(e){if(e===void 0)return ut("GRPC error has no .code"),f.UNKNOWN;switch(e){case R.OK:return f.OK;case R.CANCELLED:return f.CANCELLED;case R.UNKNOWN:return f.UNKNOWN;case R.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case R.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case R.INTERNAL:return f.INTERNAL;case R.UNAVAILABLE:return f.UNAVAILABLE;case R.UNAUTHENTICATED:return f.UNAUTHENTICATED;case R.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case R.NOT_FOUND:return f.NOT_FOUND;case R.ALREADY_EXISTS:return f.ALREADY_EXISTS;case R.PERMISSION_DENIED:return f.PERMISSION_DENIED;case R.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case R.ABORTED:return f.ABORTED;case R.OUT_OF_RANGE:return f.OUT_OF_RANGE;case R.UNIMPLEMENTED:return f.UNIMPLEMENTED;case R.DATA_LOSS:return f.DATA_LOSS;default:return I()}}(S=R||(R={}))[S.OK=0]="OK",S[S.CANCELLED=1]="CANCELLED",S[S.UNKNOWN=2]="UNKNOWN",S[S.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",S[S.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",S[S.NOT_FOUND=5]="NOT_FOUND",S[S.ALREADY_EXISTS=6]="ALREADY_EXISTS",S[S.PERMISSION_DENIED=7]="PERMISSION_DENIED",S[S.UNAUTHENTICATED=16]="UNAUTHENTICATED",S[S.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",S[S.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",S[S.ABORTED=10]="ABORTED",S[S.OUT_OF_RANGE=11]="OUT_OF_RANGE",S[S.UNIMPLEMENTED=12]="UNIMPLEMENTED",S[S.INTERNAL=13]="INTERNAL",S[S.UNAVAILABLE=14]="UNAVAILABLE",S[S.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Jt{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),r=this.inner[s];if(r===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Sn(this.inner,(n,s)=>{for(const[r,i]of s)t(r,i)})}isEmpty(){return ph(this.inner)}size(){return this.innerSize}}/**
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
 */const jh=new B(w.comparator);function mt(){return jh}const qo=new B(w.comparator);function re(...e){let t=qo;for(const n of e)t=t.insert(n.key,n);return t}function qh(e){let t=qo;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function It(){return he()}function Ko(){return he()}function he(){return new Jt(e=>e.toString(),(e,t)=>e.isEqual(t))}new B(w.comparator);const Kh=new F(w.comparator);function A(...e){let t=Kh;for(const n of e)t=t.add(n);return t}const Hh=new F(N);function Ho(){return Hh}/**
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
 */class _n{constructor(t,n,s,r,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n){const s=new Map;return s.set(t,Le.createSynthesizedTargetChangeForCurrentChange(t,n)),new _n(C.min(),s,Ho(),mt(),A())}}class Le{constructor(t,n,s,r,i){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n){return new Le(K.EMPTY_BYTE_STRING,n,A(),A(),A())}}/**
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
 */class He{constructor(t,n,s,r){this.gt=t,this.removedTargetIds=n,this.key=s,this.yt=r}}class zo{constructor(t,n){this.targetId=t,this.It=n}}class Go{constructor(t,n,s=K.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=r}}class ei{constructor(){this.Tt=0,this.Et=si(),this.At=K.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(t){t.approximateByteSize()>0&&(this.bt=!0,this.At=t)}St(){let t=A(),n=A(),s=A();return this.Et.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:I()}}),new Le(this.At,this.Rt,t,n,s)}Dt(){this.bt=!1,this.Et=si()}Ct(t,n){this.bt=!0,this.Et=this.Et.insert(t,n)}xt(t){this.bt=!0,this.Et=this.Et.remove(t)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Mt(){this.bt=!0,this.Rt=!0}}class zh{constructor(t){this.Ot=t,this.Ft=new Map,this.$t=mt(),this.Bt=ni(),this.Lt=new F(N)}Ut(t){for(const n of t.gt)t.yt&&t.yt.isFoundDocument()?this.qt(n,t.yt):this.Kt(n,t.key,t.yt);for(const n of t.removedTargetIds)this.Kt(n,t.key,t.yt)}Gt(t){this.forEachTarget(t,n=>{const s=this.Qt(n);switch(t.state){case 0:this.jt(n)&&s.Vt(t.resumeToken);break;case 1:s.kt(),s.Pt||s.Dt(),s.Vt(t.resumeToken);break;case 2:s.kt(),s.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(s.Mt(),s.Vt(t.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),s.Vt(t.resumeToken));break;default:I()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Ft.forEach((s,r)=>{this.jt(r)&&n(r)})}zt(t){const n=t.targetId,s=t.It.count,r=this.Ht(n);if(r){const i=r.target;if(fs(i))if(s===0){const o=new w(i.path);this.Kt(n,o,$.newNoDocument(o,C.min()))}else O(s===1);else this.Jt(n)!==s&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(t){const n=new Map;this.Ft.forEach((i,o)=>{const a=this.Ht(o);if(a){if(i.current&&fs(a.target)){const c=new w(a.target.path);this.$t.get(c)!==null||this.Xt(o,c)||this.Kt(o,c,$.newNoDocument(c,t))}i.vt&&(n.set(o,i.St()),i.Dt())}});let s=A();this.Bt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ht(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.$t.forEach((i,o)=>o.setReadTime(t));const r=new _n(t,n,this.Lt,this.$t,s);return this.$t=mt(),this.Bt=ni(),this.Lt=new F(N),r}qt(t,n){if(!this.jt(t))return;const s=this.Xt(t,n.key)?2:0;this.Qt(t).Ct(n.key,s),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(t))}Kt(t,n,s){if(!this.jt(t))return;const r=this.Qt(t);this.Xt(t,n)?r.Ct(n,1):r.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(t)),s&&(this.$t=this.$t.insert(n,s))}removeTarget(t){this.Ft.delete(t)}Jt(t){const n=this.Qt(t).St();return this.Ot.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Nt(t){this.Qt(t).Nt()}Qt(t){let n=this.Ft.get(t);return n||(n=new ei,this.Ft.set(t,n)),n}Zt(t){let n=this.Bt.get(t);return n||(n=new F(N),this.Bt=this.Bt.insert(t,n)),n}jt(t){const n=this.Ht(t)!==null;return n||y("WatchChangeAggregator","Detected inactive target",t),n}Ht(t){const n=this.Ft.get(t);return n&&n.Pt?null:this.Ot.te(t)}Wt(t){this.Ft.set(t,new ei),this.Ot.getRemoteKeysForTarget(t).forEach(n=>{this.Kt(t,n,null)})}Xt(t,n){return this.Ot.getRemoteKeysForTarget(t).has(n)}}function ni(){return new B(w.comparator)}function si(){return new B(w.comparator)}/**
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
 */const Gh=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Qh=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Wh{constructor(t,n){this.databaseId=t,this.dt=n}}function Xh(e,t){return e.dt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Yh(e,t){return e.dt?t.toBase64():t.toUint8Array()}function Ie(e){return O(!!e),C.fromTimestamp(function(t){const n=pt(t);return new tt(n.seconds,n.nanos)}(e))}function Jh(e,t){return function(n){return new k(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function Qo(e){const t=k.fromString(e);return O(Yo(t)),t}function Hn(e,t){const n=Qo(t);if(n.get(1)!==e.databaseId.projectId)throw new v(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new v(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new w(Wo(n))}function vs(e,t){return Jh(e.databaseId,t)}function Zh(e){const t=Qo(e);return t.length===4?k.emptyPath():Wo(t)}function ri(e){return new k(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Wo(e){return O(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function tl(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:I()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=function(c,u){return c.dt?(O(u===void 0||typeof u=="string"),K.fromBase64String(u||"")):(O(u===void 0||u instanceof Uint8Array),K.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?f.UNKNOWN:jo(c.code);return new v(u,c.message||"")}(o);n=new Go(s,r,i,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const r=Hn(e,s.document.name),i=Ie(s.document.updateTime),o=new nt({mapValue:{fields:s.document.fields}}),a=$.newFoundDocument(r,i,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new He(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const r=Hn(e,s.document),i=s.readTime?Ie(s.readTime):C.min(),o=$.newNoDocument(r,i),a=s.removedTargetIds||[];n=new He([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const r=Hn(e,s.document),i=s.removedTargetIds||[];n=new He([],i,r,null)}else{if(!("filter"in t))return I();{t.filter;const s=t.filter;s.targetId;const r=s.count||0,i=new $h(r),o=s.targetId;n=new zo(o,i)}}return n}function el(e,t){return{documents:[vs(e,t.path)]}}function nl(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=vs(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=vs(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const u=c.map(h=>function(l){if(l.op==="=="){if(zr(l.value))return{unaryFilter:{field:Ot(l.field),op:"IS_NAN"}};if(Hr(l.value))return{unaryFilter:{field:Ot(l.field),op:"IS_NULL"}}}else if(l.op==="!="){if(zr(l.value))return{unaryFilter:{field:Ot(l.field),op:"IS_NOT_NAN"}};if(Hr(l.value))return{unaryFilter:{field:Ot(l.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ot(l.field),op:ol(l.op),value:l.value}}}(h));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(t.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:Ot(h.field),direction:il(h.dir)}}(u))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.dt||An(u)?u:{value:u}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function sl(e){let t=Zh(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){O(s===1);const h=n.from[0];h.allDescendants?r=h.collectionId:t=t.child(h.collectionId)}let i=[];n.where&&(i=Xo(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(l){return new Vt(Mt(l.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(h)));let a=null;n.limit&&(a=function(h){let l;return l=typeof h=="object"?h.value:h,An(l)?null:l}(n.limit));let c=null;n.startAt&&(c=function(h){const l=!!h.before,p=h.values||[];return new rn(p,l)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const l=!h.before,p=h.values||[];return new rn(p,l)}(n.endAt)),_h(t,r,o,i,a,"F",c,u)}function rl(e,t){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return I()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function Xo(e){return e?e.unaryFilter!==void 0?[cl(e)]:e.fieldFilter!==void 0?[al(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>Xo(t)).reduce((t,n)=>t.concat(n)):I():[]}function il(e){return Gh[e]}function ol(e){return Qh[e]}function Ot(e){return{fieldPath:e.canonicalString()}}function Mt(e){return J.fromServerFormat(e.fieldPath)}function al(e){return Z.create(Mt(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(e.fieldFilter.op),e.fieldFilter.value)}function cl(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Mt(e.unaryFilter.field);return Z.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Mt(e.unaryFilter.field);return Z.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Mt(e.unaryFilter.field);return Z.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Mt(e.unaryFilter.field);return Z.create(r,"!=",{nullValue:"NULL_VALUE"});default:return I()}}function Yo(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class ul{constructor(t,n,s,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(t.key)&&Bh(i,t,s[r])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=ue(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=ue(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=Ko();return this.mutations.forEach(r=>{const i=t.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Uo(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(C.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),A())}isEqual(t){return this.batchId===t.batchId&&$t(this.mutations,t.mutations,(n,s)=>Jr(n,s))&&$t(this.baseMutations,t.baseMutations,(n,s)=>Jr(n,s))}}/**
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
 */class hl{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class At{constructor(t,n,s,r,i=C.min(),o=C.min(),a=K.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new At(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new At(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new At(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
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
 */class ll{constructor(t){this.ne=t}}function dl(e){const t=sl({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?gs(t,t.limit,"L"):t}/**
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
 */class fl{constructor(){this.ze=new gl}addToCollectionParentIndex(t,n){return this.ze.add(n),d.resolve()}getCollectionParents(t,n){return d.resolve(this.ze.getEntries(n))}addFieldIndex(t,n){return d.resolve()}deleteFieldIndex(t,n){return d.resolve()}getDocumentsMatchingTarget(t,n){return d.resolve(null)}getIndexType(t,n){return d.resolve(0)}getFieldIndexes(t,n){return d.resolve([])}getNextCollectionGroupToUpdate(t){return d.resolve(null)}getMinOffset(t,n){return d.resolve(gt.min())}getMinOffsetFromCollectionGroup(t,n){return d.resolve(gt.min())}updateCollectionGroup(t,n,s){return d.resolve()}updateIndexEntries(t,n){return d.resolve()}}class gl{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n]||new F(k.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(t){return(this.index[t]||new F(k.comparator)).toArray()}}/**
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
 */class Ht{constructor(t){this.En=t}next(){return this.En+=2,this.En}static An(){return new Ht(0)}static Rn(){return new Ht(-1)}}/**
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
 */class pl{constructor(){this.changes=new Jt(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,$.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?d.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class ml{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class yl{constructor(t,n,s,r){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(r=>(s=r,this.getBaseDocument(t,n,s))).next(r=>(s!==null&&ue(s.mutation,r,Ct.empty(),tt.now()),r))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,A()).next(()=>s))}getLocalViewOfDocuments(t,n,s=A()){const r=It();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,s).next(i=>{let o=re();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=It();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,A()))}populateOverlays(t,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(t,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,r){let i=mt();const o=he(),a=he();return n.forEach((c,u)=>{const h=s.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof Nn)?i=i.insert(u.key,u):h!==void 0&&(o.set(u.key,h.mutation.getFieldMask()),ue(h.mutation,u,h.mutation.getFieldMask(),tt.now()))}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var l;return a.set(u,new ml(h,(l=o.get(u))!==null&&l!==void 0?l:null))}),a))}recalculateAndSaveOverlays(t,n){const s=he();let r=new B((o,a)=>o-a),i=A();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=s.get(c)||Ct.empty();h=a.applyToLocalView(u,h),s.set(c,h);const l=(r.get(a.batchId)||A()).add(c);r=r.insert(a.batchId,l)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,l=Ko();h.forEach(p=>{if(!i.has(p)){const m=Uo(n.get(p),s.get(p));m!==null&&l.set(p,m),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,l))}return d.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(r){return w.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):kh(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,r-i.size):d.resolve(It());let a=-1,c=i;return o.next(u=>d.forEach(u,(h,l)=>(a<l.largestBatchId&&(a=l.largestBatchId),i.get(h)?d.resolve():this.getBaseDocument(t,h,l).next(p=>{c=c.insert(h,p)}))).next(()=>this.populateOverlays(t,u,i)).next(()=>this.computeViews(t,c,u,A())).next(h=>({batchId:a,changes:qh(h)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new w(n)).next(s=>{let r=re();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const r=n.collectionGroup;let i=re();return this.indexManager.getCollectionParents(t,r).next(o=>d.forEach(o,a=>{const c=function(u,h){return new Oe(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(t,c,s).next(u=>{u.forEach((h,l)=>{i=i.insert(h,l)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(t,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const u=c.getKey();r.get(u)===null&&(r=r.insert(u,$.newInvalidDocument(u)))});let o=re();return r.forEach((a,c)=>{const u=i.get(a);u!==void 0&&ue(u.mutation,c,Ct.empty(),tt.now()),Zs(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(t,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(t,n):d.resolve($.newInvalidDocument(n))}}/**
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
 */class vl{constructor(t){this.wt=t,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(t,n){return d.resolve(this.Jn.get(n))}saveBundleMetadata(t,n){var s;return this.Jn.set(n.id,{id:(s=n).id,version:s.version,createTime:Ie(s.createTime)}),d.resolve()}getNamedQuery(t,n){return d.resolve(this.Yn.get(n))}saveNamedQuery(t,n){return this.Yn.set(n.name,function(s){return{name:s.name,query:dl(s.bundledQuery),readTime:Ie(s.readTime)}}(n)),d.resolve()}}/**
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
 */class wl{constructor(){this.overlays=new B(w.comparator),this.Xn=new Map}getOverlay(t,n){return d.resolve(this.overlays.get(n))}getOverlays(t,n){const s=It();return d.forEach(n,r=>this.getOverlay(t,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((r,i)=>{this.ie(t,n,i)}),d.resolve()}removeOverlaysForBatchId(t,n,s){const r=this.Xn.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Xn.delete(s)),d.resolve()}getOverlaysForCollection(t,n,s){const r=It(),i=n.length+1,o=new w(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return d.resolve(r)}getOverlaysForCollectionGroup(t,n,s,r){let i=new B((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let h=i.get(u.largestBatchId);h===null&&(h=It(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=It(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=r)););return d.resolve(a)}ie(t,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Xn.get(r.largestBatchId).delete(s.key);this.Xn.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new hl(n,s));let i=this.Xn.get(n);i===void 0&&(i=A(),this.Xn.set(n,i)),this.Xn.set(n,i.add(s.key))}}/**
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
 */class nr{constructor(){this.Zn=new F(P.ts),this.es=new F(P.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,n){const s=new P(t,n);this.Zn=this.Zn.add(s),this.es=this.es.add(s)}ss(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.rs(new P(t,n))}os(t,n){t.forEach(s=>this.removeReference(s,n))}us(t){const n=new w(new k([])),s=new P(n,t),r=new P(n,t+1),i=[];return this.es.forEachInRange([s,r],o=>{this.rs(o),i.push(o.key)}),i}cs(){this.Zn.forEach(t=>this.rs(t))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const n=new w(new k([])),s=new P(n,t),r=new P(n,t+1);let i=A();return this.es.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new P(t,0),s=this.Zn.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class P{constructor(t,n){this.key=t,this.ls=n}static ts(t,n){return w.comparator(t.key,n.key)||N(t.ls,n.ls)}static ns(t,n){return N(t.ls,n.ls)||w.comparator(t.key,n.key)}}/**
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
 */class El{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new F(P.ts)}checkEmpty(t){return d.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,r){const i=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ul(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.ds=this.ds.add(new P(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return d.resolve(o)}lookupMutationBatch(t,n){return d.resolve(this._s(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,r=this.ws(s),i=r<0?0:r;return d.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return d.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(t){return d.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new P(n,0),r=new P(n,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([s,r],o=>{const a=this._s(o.ls);i.push(a)}),d.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new F(N);return n.forEach(r=>{const i=new P(r,0),o=new P(r,Number.POSITIVE_INFINITY);this.ds.forEachInRange([i,o],a=>{s=s.add(a.ls)})}),d.resolve(this.gs(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,r=s.length+1;let i=s;w.isDocumentKey(i)||(i=i.child(""));const o=new P(new w(i),0);let a=new F(N);return this.ds.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.ls)),!0)},o),d.resolve(this.gs(a))}gs(t){const n=[];return t.forEach(s=>{const r=this._s(s);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){O(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ds;return d.forEach(n.mutations,r=>{const i=new P(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.ds=s})}In(t){}containsKey(t,n){const s=new P(n,0),r=this.ds.firstAfterOrEqual(s);return d.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,d.resolve()}ys(t,n){return this.ws(t)}ws(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}_s(t){const n=this.ws(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Tl{constructor(t){this.ps=t,this.docs=new B(w.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.ps(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return d.resolve(s?s.document.mutableCopy():$.newInvalidDocument(n))}getEntries(t,n){let s=mt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():$.newInvalidDocument(r))}),d.resolve(s)}getAllFromCollection(t,n,s){let r=mt();const i=new w(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||dh(lh(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return d.resolve(r)}getAllFromCollectionGroup(t,n,s,r){I()}Is(t,n){return d.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new Il(this)}getSize(t){return d.resolve(this.size)}}class Il extends pl{constructor(t){super(),this.zn=t}applyChanges(t){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.zn.addEntry(t,r)):this.zn.removeEntry(s)}),d.waitFor(n)}getFromCache(t,n){return this.zn.getEntry(t,n)}getAllFromCache(t,n){return this.zn.getEntries(t,n)}}/**
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
 */class Cl{constructor(t){this.persistence=t,this.Ts=new Jt(n=>Xs(n),Ys),this.lastRemoteSnapshotVersion=C.min(),this.highestTargetId=0,this.Es=0,this.As=new nr,this.targetCount=0,this.Rs=Ht.An()}forEachTarget(t,n){return this.Ts.forEach((s,r)=>n(r)),d.resolve()}getLastRemoteSnapshotVersion(t){return d.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return d.resolve(this.Es)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),d.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Es&&(this.Es=n),d.resolve()}vn(t){this.Ts.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Rs=new Ht(n),this.highestTargetId=n),t.sequenceNumber>this.Es&&(this.Es=t.sequenceNumber)}addTargetData(t,n){return this.vn(n),this.targetCount+=1,d.resolve()}updateTargetData(t,n){return this.vn(n),d.resolve()}removeTargetData(t,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,d.resolve()}removeTargets(t,n,s){let r=0;const i=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Ts.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),d.waitFor(i).next(()=>r)}getTargetCount(t){return d.resolve(this.targetCount)}getTargetData(t,n){const s=this.Ts.get(n)||null;return d.resolve(s)}addMatchingKeys(t,n,s){return this.As.ss(n,s),d.resolve()}removeMatchingKeys(t,n,s){this.As.os(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(t,o))}),d.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.As.us(n),d.resolve()}getMatchingKeysForTargetId(t,n){const s=this.As.hs(n);return d.resolve(s)}containsKey(t,n){return d.resolve(this.As.containsKey(n))}}/**
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
 */class Sl{constructor(t,n){this.bs={},this.overlays={},this.Ps=new Qs(0),this.vs=!1,this.vs=!0,this.referenceDelegate=t(this),this.Vs=new Cl(this),this.indexManager=new fl,this.remoteDocumentCache=function(s){return new Tl(s)}(s=>this.referenceDelegate.Ss(s)),this.wt=new ll(n),this.Ds=new vl(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new wl,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.bs[t.toKey()];return s||(s=new El(n,this.referenceDelegate),this.bs[t.toKey()]=s),s}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(t,n,s){y("MemoryPersistence","Starting transaction:",t);const r=new Al(this.Ps.next());return this.referenceDelegate.Cs(),s(r).next(i=>this.referenceDelegate.xs(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ns(t,n){return d.or(Object.values(this.bs).map(s=>()=>s.containsKey(t,n)))}}class Al extends gh{constructor(t){super(),this.currentSequenceNumber=t}}class sr{constructor(t){this.persistence=t,this.ks=new nr,this.Ms=null}static Os(t){return new sr(t)}get Fs(){if(this.Ms)return this.Ms;throw I()}addReference(t,n,s){return this.ks.addReference(s,n),this.Fs.delete(s.toString()),d.resolve()}removeReference(t,n,s){return this.ks.removeReference(s,n),this.Fs.add(s.toString()),d.resolve()}markPotentiallyOrphaned(t,n){return this.Fs.add(n.toString()),d.resolve()}removeTarget(t,n){this.ks.us(n.targetId).forEach(r=>this.Fs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(i=>this.Fs.add(i.toString()))}).next(()=>s.removeTargetData(t,n))}Cs(){this.Ms=new Set}xs(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return d.forEach(this.Fs,s=>{const r=w.fromPath(s);return this.$s(t,r).next(i=>{i||n.removeEntry(r,C.min())})}).next(()=>(this.Ms=null,n.apply(t)))}updateLimboDocument(t,n){return this.$s(t,n).next(s=>{s?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(t){return 0}$s(t,n){return d.or([()=>d.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ns(t,n)])}}/**
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
 */class rr{constructor(t,n,s,r){this.targetId=t,this.fromCache=n,this.Pi=s,this.vi=r}static Vi(t,n){let s=A(),r=A();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new rr(t,n.fromCache,s,r)}}/**
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
 */class bl{constructor(){this.Si=!1}initialize(t,n){this.Di=t,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(t,n,s,r){return this.Ci(t,n).next(i=>i||this.xi(t,n,r,s)).next(i=>i||this.Ni(t,n))}Ci(t,n){if(Xr(n))return d.resolve(null);let s=ht(n);return this.indexManager.getIndexType(t,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=gs(n,null,"F"),s=ht(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(i=>{const o=A(...i);return this.Di.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const u=this.ki(n,a);return this.Mi(n,u,o,c.readTime)?this.Ci(t,gs(n,null,"F")):this.Oi(t,u,n,c)}))})))}xi(t,n,s,r){return Xr(n)||r.isEqual(C.min())?this.Ni(t,n):this.Di.getDocuments(t,s).next(i=>{const o=this.ki(n,i);return this.Mi(n,o,s,r)?this.Ni(t,n):(Ur()<=D.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ps(n)),this.Oi(t,o,n,hh(r,-1)))})}ki(t,n){let s=new F(Fo(t));return n.forEach((r,i)=>{Zs(t,i)&&(s=s.add(i))}),s}Mi(t,n,s,r){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ni(t,n){return Ur()<=D.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",ps(n)),this.Di.getDocumentsMatchingQuery(t,n,gt.min())}Oi(t,n,s,r){return this.Di.getDocumentsMatchingQuery(t,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class Dl{constructor(t,n,s,r){this.persistence=t,this.Fi=n,this.wt=r,this.$i=new B(N),this.Bi=new Jt(i=>Xs(i),Ys),this.Li=new Map,this.Ui=t.getRemoteDocumentCache(),this.Vs=t.getTargetCache(),this.Ds=t.getBundleCache(),this.qi(s)}qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new yl(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.$i))}}function Nl(e,t,n,s){return new Dl(e,t,n,s)}async function Jo(e,t){const n=b(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.qi(t),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=A();for(const u of r){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(s,c).next(u=>({Ki:u,removedBatchIds:o,addedBatchIds:a}))})})}function Zo(e){const t=b(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Vs.getLastRemoteSnapshotVersion(n))}function _l(e,t){const n=b(e),s=t.snapshotVersion;let r=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});r=n.$i;const a=[];t.targetChanges.forEach((h,l)=>{const p=r.get(l);if(!p)return;a.push(n.Vs.removeMatchingKeys(i,h.removedDocuments,l).next(()=>n.Vs.addMatchingKeys(i,h.addedDocuments,l)));let m=p.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.has(l)?m=m.withResumeToken(K.EMPTY_BYTE_STRING,C.min()).withLastLimboFreeSnapshotVersion(C.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,s)),r=r.insert(l,m),function(T,z,M){return T.resumeToken.approximateByteSize()===0||z.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(p,m,h)&&a.push(n.Vs.updateTargetData(i,m))});let c=mt(),u=A();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(kl(i,o,t.documentUpdates).next(h=>{c=h.Gi,u=h.Qi})),!s.isEqual(C.min())){const h=n.Vs.getLastRemoteSnapshotVersion(i).next(l=>n.Vs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(h)}return d.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.$i=r,i))}function kl(e,t,n){let s=A(),r=A();return n.forEach(i=>s=s.add(i)),t.getEntries(e,s).next(i=>{let o=mt();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(C.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Gi:o,Qi:r}})}function Rl(e,t){const n=b(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Vs.getTargetData(s,t).next(i=>i?(r=i,d.resolve(r)):n.Vs.allocateTargetId(s).next(o=>(r=new At(t,o,0,s.currentSequenceNumber),n.Vs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.$i.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.$i=n.$i.insert(s.targetId,s),n.Bi.set(t,s.targetId)),s})}async function ws(e,t,n){const s=b(e),r=s.$i.get(t),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!xe(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.$i=s.$i.remove(t),s.Bi.delete(r.target)}function ii(e,t,n){const s=b(e);let r=C.min(),i=A();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const h=b(a),l=h.Bi.get(u);return l!==void 0?d.resolve(h.$i.get(l)):h.Vs.getTargetData(c,u)}(s,o,ht(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Vs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Fi.getDocumentsMatchingQuery(o,t,n?r:C.min(),n?i:A())).next(a=>(xl(s,Rh(t),a),{documents:a,ji:i})))}function xl(e,t,n){let s=C.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),e.Li.set(t,s)}class oi{constructor(){this.activeTargetIds=Ho()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ol{constructor(){this.Fr=new oi,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,n,s){this.$r[t]=n}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new oi,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Ll{Br(t){}shutdown(){}}/**
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
 */class ai{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(t){this.Gr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Gr)t(0)}Kr(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Gr)t(1)}static V(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Ml={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class Fl{constructor(t){this.jr=t.jr,this.Wr=t.Wr}zr(t){this.Hr=t}Jr(t){this.Yr=t}onMessage(t){this.Xr=t}close(){this.Wr()}send(t){this.jr(t)}Zr(){this.Hr()}eo(t){this.Yr(t)}no(t){this.Xr(t)}}/**
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
 */class Pl extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.so=n+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(t,n,s,r,i){const o=this.oo(t,n);y("RestConnection","Sending: ",o,s);const a={};return this.uo(a,r,i),this.co(t,o,a,s).then(c=>(y("RestConnection","Received: ",c),c),c=>{throw $r("RestConnection",`${t} failed with error: `,c,"url: ",o,"request:",s),c})}ao(t,n,s,r,i,o){return this.ro(t,n,s,r,i)}uo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+Yt,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>t[i]=r),s&&s.headers.forEach((r,i)=>t[i]=r)}oo(t,n){const s=Ml[t];return`${this.so}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,n,s,r){return new Promise((i,o)=>{const a=new th;a.listenOnce(Yu.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case qn.NO_ERROR:const u=a.getResponseJson();y("Connection","XHR received:",JSON.stringify(u)),i(u);break;case qn.TIMEOUT:y("Connection",'RPC "'+t+'" timed out'),o(new v(f.DEADLINE_EXCEEDED,"Request time out"));break;case qn.HTTP_ERROR:const h=a.getStatus();if(y("Connection",'RPC "'+t+'" failed with status:',h,"response text:",a.getResponseText()),h>0){const l=a.getResponseJson().error;if(l&&l.status&&l.message){const p=function(m){const T=m.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(T)>=0?T:f.UNKNOWN}(l.status);o(new v(p,l.message))}else o(new v(f.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new v(f.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{y("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}ho(t,n,s){const r=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Wu(),o=Xu(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Zu({})),this.uo(a.initMessageHeaders,n,s),_a()||Ra()||xa()||Oa()||La()||ka()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");y("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let h=!1,l=!1;const p=new Fl({jr:T=>{l?y("Connection","Not sending because WebChannel is closed:",T):(h||(y("Connection","Opening WebChannel transport."),u.open(),h=!0),y("Connection","WebChannel sending:",T),u.send(T))},Wr:()=>u.close()}),m=(T,z,M)=>{T.listen(z,it=>{try{M(it)}catch(ot){setTimeout(()=>{throw ot},0)}})};return m(u,$e.EventType.OPEN,()=>{l||y("Connection","WebChannel transport opened.")}),m(u,$e.EventType.CLOSE,()=>{l||(l=!0,y("Connection","WebChannel transport closed"),p.eo())}),m(u,$e.EventType.ERROR,T=>{l||(l=!0,$r("Connection","WebChannel transport errored:",T),p.eo(new v(f.UNAVAILABLE,"The operation could not be completed")))}),m(u,$e.EventType.MESSAGE,T=>{var z;if(!l){const M=T.data[0];O(!!M);const it=M,ot=it.error||((z=it[0])===null||z===void 0?void 0:z.error);if(ot){y("Connection","WebChannel received error:",ot);const te=ot.status;let ee=function(Sa){const pr=R[Sa];if(pr!==void 0)return jo(pr)}(te),gr=ot.message;ee===void 0&&(ee=f.INTERNAL,gr="Unknown error status: "+te+" with message "+ot.message),l=!0,p.eo(new v(ee,gr)),u.close()}else y("Connection","WebChannel received:",M),p.no(M)}}),m(o,Ju.STAT_EVENT,T=>{T.stat===Vr.PROXY?y("Connection","Detected buffering proxy"):T.stat===Vr.NOPROXY&&y("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.Zr()},0),p}}function zn(){return typeof document<"u"?document:null}/**
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
 */function ta(e){return new Wh(e,!0)}class ea{constructor(t,n,s=1e3,r=1.5,i=6e4){this.js=t,this.timerId=n,this.lo=s,this.fo=r,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const n=Math.floor(this.wo+this.To()),s=Math.max(0,Date.now()-this.yo),r=Math.max(0,n-s);r>0&&y("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,()=>(this.yo=Date.now(),t())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
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
 */class Vl{constructor(t,n,s,r,i,o,a,c){this.js=t,this.Ao=s,this.Ro=r,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new ea(t,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(t){this.Fo(),this.stream.send(t)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,t!==4?this.So.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(ut(n.toString()),ut("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Po===n&&this.Uo(s,r)},s=>{t(()=>{const r=new v(f.UNKNOWN,"Fetching auth token failed: "+s.message);return this.qo(r)})})}Uo(t,n){const s=this.Lo(this.Po);this.stream=this.Ko(t,n),this.stream.zr(()=>{s(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(r=>{s(()=>this.qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(t){return y("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return n=>{this.js.enqueueAndForget(()=>this.Po===t?n():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Bl extends Vl{constructor(t,n,s,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.wt=i}Ko(t,n){return this.bo.ho("Listen",t,n)}onMessage(t){this.So.reset();const n=tl(this.wt,t),s=function(r){if(!("targetChange"in r))return C.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?C.min():i.readTime?Ie(i.readTime):C.min()}(t);return this.listener.Go(n,s)}Qo(t){const n={};n.database=ri(this.wt),n.addTarget=function(r,i){let o;const a=i.target;return o=fs(a)?{documents:el(r,a)}:{query:nl(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Yh(r,i.resumeToken):i.snapshotVersion.compareTo(C.min())>0&&(o.readTime=Xh(r,i.snapshotVersion.toTimestamp())),o}(this.wt,t);const s=rl(this.wt,t);s&&(n.labels=s),this.Oo(n)}jo(t){const n={};n.database=ri(this.wt),n.removeTarget=t,this.Oo(n)}}/**
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
 */class Ul extends class{}{constructor(t,n,s,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.bo=s,this.wt=r,this.Zo=!1}tu(){if(this.Zo)throw new v(f.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.bo.ro(t,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new v(f.UNKNOWN,r.toString())})}ao(t,n,s,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.bo.ao(t,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new v(f.UNKNOWN,i.toString())})}terminate(){this.Zo=!0}}class $l{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(t){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.cu(),this.eu=0,t==="Online"&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(ut(n),this.su=!1):y("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
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
 */class jl{constructor(t,n,s,r,i){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br(o=>{s.enqueueAndForget(async()=>{Fe(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=b(a);c.lu.add(4),await Me(c),c._u.set("Unknown"),c.lu.delete(4),await kn(c)}(this))})}),this._u=new $l(s,r)}}async function kn(e){if(Fe(e))for(const t of e.fu)await t(!0)}async function Me(e){for(const t of e.fu)await t(!1)}function na(e,t){const n=b(e);n.hu.has(t.targetId)||(n.hu.set(t.targetId,t),ar(n)?or(n):Zt(n).Co()&&ir(n,t))}function sa(e,t){const n=b(e),s=Zt(n);n.hu.delete(t),s.Co()&&ra(n,t),n.hu.size===0&&(s.Co()?s.ko():Fe(n)&&n._u.set("Unknown"))}function ir(e,t){e.wu.Nt(t.targetId),Zt(e).Qo(t)}function ra(e,t){e.wu.Nt(t),Zt(e).jo(t)}function or(e){e.wu=new zh({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),te:t=>e.hu.get(t)||null}),Zt(e).start(),e._u.iu()}function ar(e){return Fe(e)&&!Zt(e).Do()&&e.hu.size>0}function Fe(e){return b(e).lu.size===0}function ia(e){e.wu=void 0}async function ql(e){e.hu.forEach((t,n)=>{ir(e,t)})}async function Kl(e,t){ia(e),ar(e)?(e._u.uu(t),or(e)):e._u.set("Unknown")}async function Hl(e,t,n){if(e._u.set("Online"),t instanceof Go&&t.state===2&&t.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.hu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.hu.delete(o),s.wu.removeTarget(o))}(e,t)}catch(s){y("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await ci(e,s)}else if(t instanceof He?e.wu.Ut(t):t instanceof zo?e.wu.zt(t):e.wu.Gt(t),!n.isEqual(C.min()))try{const s=await Zo(e.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.wu.Yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.hu.get(c);u&&r.hu.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.hu.get(a);if(!c)return;r.hu.set(a,c.withResumeToken(K.EMPTY_BYTE_STRING,c.snapshotVersion)),ra(r,a);const u=new At(c.target,a,1,c.sequenceNumber);ir(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){y("RemoteStore","Failed to raise snapshot:",s),await ci(e,s)}}async function ci(e,t,n){if(!xe(t))throw t;e.lu.add(1),await Me(e),e._u.set("Offline"),n||(n=()=>Zo(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await n(),e.lu.delete(1),await kn(e)})}async function ui(e,t){const n=b(e);n.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const s=Fe(n);n.lu.add(3),await Me(n),s&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.lu.delete(3),await kn(n)}async function zl(e,t){const n=b(e);t?(n.lu.delete(2),await kn(n)):t||(n.lu.add(2),await Me(n),n._u.set("Unknown"))}function Zt(e){return e.mu||(e.mu=function(t,n,s){const r=b(t);return r.tu(),new Bl(n,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,s)}(e.datastore,e.asyncQueue,{zr:ql.bind(null,e),Jr:Kl.bind(null,e),Go:Hl.bind(null,e)}),e.fu.push(async t=>{t?(e.mu.No(),ar(e)?or(e):e._u.set("Unknown")):(await e.mu.stop(),ia(e))})),e.mu}/**
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
 */class cr{constructor(t,n,s,r,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new dt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,r,i){const o=Date.now()+s,a=new cr(t,n,o,r,i);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new v(f.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function oa(e,t){if(ut("AsyncQueue",`${t}: ${e}`),xe(e))return new v(f.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class Bt{constructor(t){this.comparator=t?(n,s)=>t(n,s)||w.comparator(n.key,s.key):(n,s)=>w.comparator(n.key,s.key),this.keyedMap=re(),this.sortedSet=new B(this.comparator)}static emptySet(t){return new Bt(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Bt)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Bt;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
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
 */class hi{constructor(){this.yu=new B(w.comparator)}track(t){const n=t.doc.key,s=this.yu.get(n);s?t.type!==0&&s.type===3?this.yu=this.yu.insert(n,t):t.type===3&&s.type!==1?this.yu=this.yu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.yu=this.yu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.yu=this.yu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.yu=this.yu.remove(n):t.type===1&&s.type===2?this.yu=this.yu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.yu=this.yu.insert(n,{type:2,doc:t.doc}):I():this.yu=this.yu.insert(n,t)}pu(){const t=[];return this.yu.inorderTraversal((n,s)=>{t.push(s)}),t}}class zt{constructor(t,n,s,r,i,o,a,c){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(t,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new zt(t,n,Bt.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&bn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class Gl{constructor(){this.Iu=void 0,this.listeners=[]}}class Ql{constructor(){this.queries=new Jt(t=>Mo(t),bn),this.onlineState="Unknown",this.Tu=new Set}}async function aa(e,t){const n=b(e),s=t.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new Gl),r)try{i.Iu=await n.onListen(s)}catch(o){const a=oa(o,`Initialization of query '${ps(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,i),i.listeners.push(t),t.Eu(n.onlineState),i.Iu&&t.Au(i.Iu)&&ur(n)}async function ca(e,t){const n=b(e),s=t.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function Wl(e,t){const n=b(e);let s=!1;for(const r of t){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Au(r)&&(s=!0);o.Iu=r}}s&&ur(n)}function Xl(e,t,n){const s=b(e),r=s.queries.get(t);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(t)}function ur(e){e.Tu.forEach(t=>{t.next()})}class ua{constructor(t,n,s){this.query=t,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=s||{}}Au(t){if(!this.options.includeMetadataChanges){const s=[];for(const r of t.docChanges)r.type!==3&&s.push(r);t=new zt(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(t)&&(this.Ru.next(t),n=!0):this.Vu(t,this.onlineState)&&(this.Su(t),n=!0),this.Pu=t,n}onError(t){this.Ru.error(t)}Eu(t){this.onlineState=t;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,t)&&(this.Su(this.Pu),n=!0),n}Vu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Du||!s)&&(!t.docs.isEmpty()||n==="Offline")}vu(t){if(t.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(t){t=zt.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Ru.next(t)}}/**
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
 */class ha{constructor(t){this.key=t}}class la{constructor(t){this.key=t}}class Yl{constructor(t,n){this.query=t,this.Fu=n,this.$u=null,this.current=!1,this.Bu=A(),this.mutatedKeys=A(),this.Lu=Fo(t),this.Uu=new Bt(this.Lu)}get qu(){return this.Fu}Ku(t,n){const s=n?n.Gu:new hi,r=n?n.Uu:this.Uu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((h,l)=>{const p=r.get(h),m=Zs(this.query,l)?l:null,T=!!p&&this.mutatedKeys.has(p.key),z=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let M=!1;p&&m?p.data.isEqual(m.data)?T!==z&&(s.track({type:3,doc:m}),M=!0):this.Qu(p,m)||(s.track({type:2,doc:m}),M=!0,(c&&this.Lu(m,c)>0||u&&this.Lu(m,u)<0)&&(a=!0)):!p&&m?(s.track({type:0,doc:m}),M=!0):p&&!m&&(s.track({type:1,doc:p}),M=!0,(c||u)&&(a=!0)),M&&(m?(o=o.add(m),i=z?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),s.track({type:1,doc:h})}return{Uu:o,Gu:s,Mi:a,mutatedKeys:i}}Qu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const r=this.Uu;this.Uu=t.Uu,this.mutatedKeys=t.mutatedKeys;const i=t.Gu.pu();i.sort((u,h)=>function(l,p){const m=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return m(l)-m(p)}(u.type,h.type)||this.Lu(u.doc,h.doc)),this.ju(s);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,c=a!==this.$u;return this.$u=a,i.length!==0||c?{snapshot:new zt(this.query,t.Uu,r,i,t.mutatedKeys,a===0,c,!1),zu:o}:{zu:o}}Eu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new hi,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{zu:[]}}Hu(t){return!this.Fu.has(t)&&!!this.Uu.has(t)&&!this.Uu.get(t).hasLocalMutations}ju(t){t&&(t.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=t.current)}Wu(){if(!this.current)return[];const t=this.Bu;this.Bu=A(),this.Uu.forEach(s=>{this.Hu(s.key)&&(this.Bu=this.Bu.add(s.key))});const n=[];return t.forEach(s=>{this.Bu.has(s)||n.push(new la(s))}),this.Bu.forEach(s=>{t.has(s)||n.push(new ha(s))}),n}Ju(t){this.Fu=t.ji,this.Bu=A();const n=this.Ku(t.documents);return this.applyChanges(n,!0)}Yu(){return zt.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class Jl{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class Zl{constructor(t){this.key=t,this.Xu=!1}}class td{constructor(t,n,s,r,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new Jt(a=>Mo(a),bn),this.ec=new Map,this.nc=new Set,this.sc=new B(w.comparator),this.ic=new Map,this.rc=new nr,this.oc={},this.uc=new Map,this.cc=Ht.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function ed(e,t){const n=cd(e);let s,r;const i=n.tc.get(t);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.Yu();else{const o=await Rl(n.localStore,ht(t));n.isPrimaryClient&&na(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await nd(n,t,s,a==="current")}return r}async function nd(e,t,n,s){e.hc=(h,l,p)=>async function(m,T,z,M){let it=T.view.Ku(z);it.Mi&&(it=await ii(m.localStore,T.query,!1).then(({documents:ee})=>T.view.Ku(ee,it)));const ot=M&&M.targetChanges.get(T.targetId),te=T.view.applyChanges(it,m.isPrimaryClient,ot);return di(m,T.targetId,te.zu),te.snapshot}(e,h,l,p);const r=await ii(e.localStore,t,!0),i=new Yl(t,r.ji),o=i.Ku(r.documents),a=Le.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline"),c=i.applyChanges(o,e.isPrimaryClient,a);di(e,n,c.zu);const u=new Jl(t,n,i);return e.tc.set(t,u),e.ec.has(n)?e.ec.get(n).push(t):e.ec.set(n,[t]),c.snapshot}async function sd(e,t){const n=b(e),s=n.tc.get(t),r=n.ec.get(s.targetId);if(r.length>1)return n.ec.set(s.targetId,r.filter(i=>!bn(i,t))),void n.tc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ws(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),sa(n.remoteStore,s.targetId),Es(n,s.targetId)}).catch(Gs)):(Es(n,s.targetId),await ws(n.localStore,s.targetId,!0))}async function da(e,t){const n=b(e);try{const s=await _l(n.localStore,t);t.targetChanges.forEach((r,i)=>{const o=n.ic.get(i);o&&(O(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Xu=!0:r.modifiedDocuments.size>0?O(o.Xu):r.removedDocuments.size>0&&(O(o.Xu),o.Xu=!1))}),await ga(n,s,t)}catch(s){await Gs(s)}}function li(e,t,n){const s=b(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.tc.forEach((i,o)=>{const a=o.view.Eu(t);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=b(i);a.onlineState=o;let c=!1;a.queries.forEach((u,h)=>{for(const l of h.listeners)l.Eu(o)&&(c=!0)}),c&&ur(a)}(s.eventManager,t),r.length&&s.Zu.Go(r),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function rd(e,t,n){const s=b(e);s.sharedClientState.updateQueryState(t,"rejected",n);const r=s.ic.get(t),i=r&&r.key;if(i){let o=new B(w.comparator);o=o.insert(i,$.newNoDocument(i,C.min()));const a=A().add(i),c=new _n(C.min(),new Map,new F(N),o,a);await da(s,c),s.sc=s.sc.remove(i),s.ic.delete(t),hr(s)}else await ws(s.localStore,t,!1).then(()=>Es(s,t,n)).catch(Gs)}function Es(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.ec.get(t))e.tc.delete(s),n&&e.Zu.lc(s,n);e.ec.delete(t),e.isPrimaryClient&&e.rc.us(t).forEach(s=>{e.rc.containsKey(s)||fa(e,s)})}function fa(e,t){e.nc.delete(t.path.canonicalString());const n=e.sc.get(t);n!==null&&(sa(e.remoteStore,n),e.sc=e.sc.remove(t),e.ic.delete(n),hr(e))}function di(e,t,n){for(const s of n)s instanceof ha?(e.rc.addReference(s.key,t),id(e,s)):s instanceof la?(y("SyncEngine","Document no longer in limbo: "+s.key),e.rc.removeReference(s.key,t),e.rc.containsKey(s.key)||fa(e,s.key)):I()}function id(e,t){const n=t.key,s=n.path.canonicalString();e.sc.get(n)||e.nc.has(s)||(y("SyncEngine","New document in limbo: "+n),e.nc.add(s),hr(e))}function hr(e){for(;e.nc.size>0&&e.sc.size<e.maxConcurrentLimboResolutions;){const t=e.nc.values().next().value;e.nc.delete(t);const n=new w(k.fromString(t)),s=e.cc.next();e.ic.set(s,new Zl(n)),e.sc=e.sc.insert(n,s),na(e.remoteStore,new At(ht(Js(n.path)),s,2,Qs.ot))}}async function ga(e,t,n){const s=b(e),r=[],i=[],o=[];s.tc.isEmpty()||(s.tc.forEach((a,c)=>{o.push(s.hc(c,t,n).then(u=>{if(u){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),r.push(u);const h=rr.Vi(c.targetId,u);i.push(h)}}))}),await Promise.all(o),s.Zu.Go(r),await async function(a,c){const u=b(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>d.forEach(c,l=>d.forEach(l.Pi,p=>u.persistence.referenceDelegate.addReference(h,l.targetId,p)).next(()=>d.forEach(l.vi,p=>u.persistence.referenceDelegate.removeReference(h,l.targetId,p)))))}catch(h){if(!xe(h))throw h;y("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const l=h.targetId;if(!h.fromCache){const p=u.$i.get(l),m=p.snapshotVersion,T=p.withLastLimboFreeSnapshotVersion(m);u.$i=u.$i.insert(l,T)}}}(s.localStore,i))}async function od(e,t){const n=b(e);if(!n.currentUser.isEqual(t)){y("SyncEngine","User change. New user:",t.toKey());const s=await Jo(n.localStore,t);n.currentUser=t,function(r,i){r.uc.forEach(o=>{o.forEach(a=>{a.reject(new v(f.CANCELLED,i))})}),r.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await ga(n,s.Ki)}}function ad(e,t){const n=b(e),s=n.ic.get(t);if(s&&s.Xu)return A().add(s.key);{let r=A();const i=n.ec.get(t);if(!i)return r;for(const o of i){const a=n.tc.get(o);r=r.unionWith(a.view.qu)}return r}}function cd(e){const t=b(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=da.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=ad.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=rd.bind(null,t),t.Zu.Go=Wl.bind(null,t.eventManager),t.Zu.lc=Xl.bind(null,t.eventManager),t}class ud{constructor(){this.synchronizeTabs=!1}async initialize(t){this.wt=ta(t.databaseInfo.databaseId),this.sharedClientState=this.dc(t),this.persistence=this._c(t),await this.persistence.start(),this.localStore=this.wc(t),this.gcScheduler=this.mc(t,this.localStore),this.indexBackfillerScheduler=this.gc(t,this.localStore)}mc(t,n){return null}gc(t,n){return null}wc(t){return Nl(this.persistence,new bl,t.initialUser,this.wt)}_c(t){return new Sl(sr.Os,this.wt)}dc(t){return new Ol}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class hd{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>li(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=od.bind(null,this.syncEngine),await zl(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Ql}createDatastore(t){const n=ta(t.databaseInfo.databaseId),s=(r=t.databaseInfo,new Pl(r));var r;return function(i,o,a,c){return new Ul(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,r=t.asyncQueue,i=a=>li(this.syncEngine,a,0),o=ai.V()?new ai:new Ll,new jl(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(t,n){return function(s,r,i,o,a,c,u){const h=new td(s,r,i,o,a,c);return u&&(h.ac=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=b(t);y("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await Me(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
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
 */class pa{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ic(this.observer.next,t)}error(t){this.observer.error?this.Ic(this.observer.error,t):ut("Uncaught Error in snapshot listener:",t)}Tc(){this.muted=!0}Ic(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class ld{constructor(t,n,s,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Y.UNAUTHENTICATED,this.clientId=_o.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{y("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(y("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new v(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new dt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=oa(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function dd(e,t){e.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Jo(t.localStore,r),s=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function fd(e,t){e.asyncQueue.verifyOperationInProgress();const n=await gd(e);y("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(r=>ui(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>ui(t.remoteStore,i)),e.onlineComponents=t}async function gd(e){return e.offlineComponents||(y("FirestoreClient","Using default OfflineComponentProvider"),await dd(e,new ud)),e.offlineComponents}async function pd(e){return e.onlineComponents||(y("FirestoreClient","Using default OnlineComponentProvider"),await fd(e,new hd)),e.onlineComponents}async function ma(e){const t=await pd(e),n=t.eventManager;return n.onListen=ed.bind(null,t.syncEngine),n.onUnlisten=sd.bind(null,t.syncEngine),n}function md(e,t,n={}){const s=new dt;return e.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new pa({next:l=>{i.enqueueAndForget(()=>ca(r,h));const p=l.docs.has(o);!p&&l.fromCache?c.reject(new v(f.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&l.fromCache&&a&&a.source==="server"?c.reject(new v(f.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(l)},error:l=>c.reject(l)}),h=new ua(Js(o.path),u,{includeMetadataChanges:!0,Du:!0});return aa(r,h)}(await ma(e),e.asyncQueue,t,n,s)),s.promise}function yd(e,t,n={}){const s=new dt;return e.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new pa({next:l=>{i.enqueueAndForget(()=>ca(r,h)),l.fromCache&&a.source==="server"?c.reject(new v(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(l)},error:l=>c.reject(l)}),h=new ua(o,u,{includeMetadataChanges:!0,Du:!0});return aa(r,h)}(await ma(e),e.asyncQueue,t,n,s)),s.promise}const fi=new Map;/**
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
 */function ya(e,t,n){if(!n)throw new v(f.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function vd(e,t,n,s){if(t===!0&&s===!0)throw new v(f.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function gi(e){if(!w.isDocumentKey(e))throw new v(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function pi(e){if(w.isDocumentKey(e))throw new v(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function wd(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":I()}function cn(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new v(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=wd(e);throw new v(f.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class mi{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new v(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new v(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,vd("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class lr{constructor(t,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mi({}),this._settingsFrozen=!1,t instanceof qt?this._databaseId=t:(this._app=t,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new v(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qt(r.options.projectId)}(t))}get app(){if(!this._app)throw new v(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new v(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mi(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new nh;switch(n.type){case"gapi":const s=n.client;return O(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new ih(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new v(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=fi.get(t);n&&(y("ComponentProvider","Removing Datastore"),fi.delete(t),n.terminate())}(this),Promise.resolve()}}/**
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
 */class st{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ft(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new st(this.firestore,t,this._key)}}class Pe{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Pe(this.firestore,t,this._query)}}class ft extends Pe{constructor(t,n,s){super(t,n,Js(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new st(this.firestore,null,new w(t))}withConverter(t){return new ft(this.firestore,t,this._path)}}function Fd(e,t,...n){if(e=Ti(e),ya("collection","path",t),e instanceof lr){const s=k.fromString(t,...n);return pi(s),new ft(e,null,s)}{if(!(e instanceof st||e instanceof ft))throw new v(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(k.fromString(t,...n));return pi(s),new ft(e.firestore,null,s)}}function Pd(e,t,...n){if(e=Ti(e),arguments.length===1&&(t=_o.I()),ya("doc","path",t),e instanceof lr){const s=k.fromString(t,...n);return gi(s),new st(e,null,new w(s))}{if(!(e instanceof st||e instanceof ft))throw new v(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(k.fromString(t,...n));return gi(s),new st(e.firestore,e instanceof ft?e.converter:null,new w(s))}}/**
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
 */class Ed{constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new ea(this,"async_queue_retry"),this.Kc=()=>{const n=zn();n&&y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const t=zn();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const n=zn();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new dt;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Oc.push(t),this.jc()))}async jc(){if(this.Oc.length!==0){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(t){if(!xe(t))throw t;y("AsyncQueue","Operation failed with retryable error: "+t)}this.Oc.length>0&&this.So.Io(()=>this.jc())}}Qc(t){const n=this.Mc.then(()=>(this.Lc=!0,t().catch(s=>{this.Bc=s,this.Lc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw ut("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Lc=!1,s))));return this.Mc=n,n}enqueueAfterDelay(t,n,s){this.Gc(),this.qc.indexOf(t)>-1&&(n=0);const r=cr.createAndSchedule(this,t,n,s,i=>this.Wc(i));return this.$c.push(r),r}Gc(){this.Bc&&I()}verifyOperationInProgress(){}async zc(){let t;do t=this.Mc,await t;while(t!==this.Mc)}Hc(t){for(const n of this.$c)if(n.timerId===t)return!0;return!1}Jc(t){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.zc()})}Yc(t){this.qc.push(t)}Wc(t){const n=this.$c.indexOf(t);this.$c.splice(n,1)}}class dr extends lr{constructor(t,n,s){super(t,n,s),this.type="firestore",this._queue=new Ed,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||wa(this),this._firestoreClient.terminate()}}function Vd(e=Bc()){return Lc(e,"firestore").getImmediate()}function va(e){return e._firestoreClient||wa(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function wa(e){var t;const n=e._freezeSettings(),s=function(r,i,o,a){return new yh(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new ld(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
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
 */class Ea{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new v(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new J(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class un{constructor(t){this._byteString=t}static fromBase64String(t){try{return new un(K.fromBase64String(t))}catch(n){throw new v(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new un(K.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Td{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new v(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new v(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return N(this._lat,t._lat)||N(this._long,t._long)}}const Id=new RegExp("[~\\*/\\[\\]]");function Cd(e,t,n){if(t.search(Id)>=0)throw yi(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Ea(...t.split("."))._internalPath}catch{throw yi(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function yi(e,t,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new v(f.INVALID_ARGUMENT,a+e+c)}/**
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
 */class Ta{constructor(t,n,s,r,i){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new st(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Sd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(fr("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Sd extends Ta{data(){return super.data()}}function fr(e,t){return typeof t=="string"?Cd(e,t):t instanceof Ea?t._internalPath:t._delegate._internalPath}/**
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
 */class ie{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ia extends Ta{constructor(t,n,s,r,i,o){super(t,n,s,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new ze(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(fr("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class ze extends Ia{data(t={}){return super.data(t)}}class Ad{constructor(t,n,s,r){this._firestore=t,this._userDataWriter=n,this._snapshot=r,this.metadata=new ie(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new ze(this._firestore,this._userDataWriter,s.key,s,new ie(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new v(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new ze(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ie(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new ze(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ie(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:bd(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function bd(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I()}}/**
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
 */function Dd(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new v(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Nd{}function Bd(e,...t){for(const n of t)e=n._apply(e);return e}class _d extends Nd{constructor(t,n){super(),this.fa=t,this.wa=n,this.type="orderBy"}_apply(t){const n=function(s,r,i){if(s.startAt!==null)throw new v(f.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new v(f.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Vt(r,i);return function(a,c){if(Oo(a)===null){const u=Lo(a);u!==null&&kd(a,u,c.field)}}(s,o),o}(t._query,this.fa,this.wa);return new Pe(t.firestore,t.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new Oe(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,n))}}function Ud(e,t="asc"){const n=t,s=fr("orderBy",e);return new _d(s,n)}function kd(e,t,n){if(!n.isEqual(t))throw new v(f.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class Rd{convertValue(t,n="none"){switch(Rt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return x(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(jt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw I()}}convertObject(t,n){const s={};return Sn(t.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(t){return new Td(x(t.latitude),x(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=Ro(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(we(t));default:return null}}convertTimestamp(t){const n=pt(t);return new tt(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=k.fromString(t);O(Yo(s));const r=new qt(s.get(1),s.get(3)),i=new w(s.popFirst(5));return r.isEqual(n)||ut(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function $d(e){e=cn(e,st);const t=cn(e.firestore,dr);return md(va(t),e._key).then(n=>xd(t,e,n))}class Ca extends Rd{constructor(t){super(),this.firestore=t}convertBytes(t){return new un(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new st(this.firestore,null,n)}}function jd(e){e=cn(e,Pe);const t=cn(e.firestore,dr),n=va(t),s=new Ca(t);return Dd(e._query),yd(n,e._query).then(r=>new Ad(t,s,e,r))}function xd(e,t,n){const s=n.docs.get(t._key),r=new Ca(e);return new Ia(e,r,t._key,s,new ie(n.hasPendingWrites,n.fromCache),t.converter)}(function(e,t=!0){(function(n){Yt=n})(Pc),Qe(new le("firestore",(n,{options:s})=>{const r=n.getProvider("app").getImmediate(),i=new dr(r,new sh(n.getProvider("auth-internal")),new ah(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:t},s),i._setSettings(s),i},"PUBLIC")),Ft(Br,"3.4.14",e),Ft(Br,"3.4.14","esm2017")})();var Od="firebase",Ld="9.9.3";/**
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
 */Ft(Od,Ld,"app");const Md={apiKey:"AIzaSyBhQYRTNLmW3TSUnEtQe1abzBmH10UT8EE",authDomain:"github-pages-test.firebaseapp.com",projectId:"github-pages-test",storageBucket:"github-pages-test.appspot.com",messagingSenderId:"631373002471",appId:"1:631373002471:web:c6b4e7936561631b559442"},qd=Vc(Md);export{Fd as D,Bd as K,Vd as U,Ud as W,qd as a,$d as d,jd as g,Pd as x};
