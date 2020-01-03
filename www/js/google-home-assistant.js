/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function t(t,e,n,i){var r,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(s<3?r(o):s>3?r(e,n,o):r(e,n))||o);return s>3&&o&&Object.defineProperty(e,n,o),o}var e={},n=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,i="[^\\s]+",r=/\[([^]*?)\]/gm,s=function(){};function o(t,e){for(var n=[],i=0,r=t.length;i<r;i++)n.push(t[i].substr(0,e));return n}function a(t){return function(e,n,i){var r=i[t].indexOf(n.charAt(0).toUpperCase()+n.substr(1).toLowerCase());~r&&(e.month=r)}}function c(t,e){for(t=String(t),e=e||2;t.length<e;)t="0"+t;return t}var l=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],d=["January","February","March","April","May","June","July","August","September","October","November","December"],u=o(d,3),h=o(l,3);e.i18n={dayNamesShort:h,dayNames:l,monthNamesShort:u,monthNames:d,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10)*t%10]}};var p={D:function(t){return t.getDate()},DD:function(t){return c(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return t.getDay()},dd:function(t){return c(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return t.getMonth()+1},MM:function(t){return c(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return c(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return c(t.getFullYear(),4)},h:function(t){return t.getHours()%12||12},hh:function(t){return c(t.getHours()%12||12)},H:function(t){return t.getHours()},HH:function(t){return c(t.getHours())},m:function(t){return t.getMinutes()},mm:function(t){return c(t.getMinutes())},s:function(t){return t.getSeconds()},ss:function(t){return c(t.getSeconds())},S:function(t){return Math.round(t.getMilliseconds()/100)},SS:function(t){return c(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return c(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+c(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)}},f={D:["\\d\\d?",function(t,e){t.day=e}],Do:["\\d\\d?"+i,function(t,e){t.day=parseInt(e,10)}],M:["\\d\\d?",function(t,e){t.month=e-1}],YY:["\\d\\d?",function(t,e){var n=+(""+(new Date).getFullYear()).substr(0,2);t.year=""+(e>68?n-1:n)+e}],h:["\\d\\d?",function(t,e){t.hour=e}],m:["\\d\\d?",function(t,e){t.minute=e}],s:["\\d\\d?",function(t,e){t.second=e}],YYYY:["\\d{4}",function(t,e){t.year=e}],S:["\\d",function(t,e){t.millisecond=100*e}],SS:["\\d{2}",function(t,e){t.millisecond=10*e}],SSS:["\\d{3}",function(t,e){t.millisecond=e}],d:["\\d\\d?",s],ddd:[i,s],MMM:[i,a("monthNamesShort")],MMMM:[i,a("monthNames")],a:[i,function(t,e,n){var i=e.toLowerCase();i===n.amPm[0]?t.isPm=!1:i===n.amPm[1]&&(t.isPm=!0)}],ZZ:["[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z",function(t,e){var n,i=(e+"").match(/([+-]|\d\d)/gi);i&&(n=60*i[1]+parseInt(i[2],10),t.timezoneOffset="+"===i[0]?n:-n)}]};f.dd=f.d,f.dddd=f.ddd,f.DD=f.D,f.mm=f.m,f.hh=f.H=f.HH=f.h,f.MM=f.M,f.ss=f.s,f.A=f.a,e.masks={default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"},e.format=function(t,i,s){var o=s||e.i18n;if("number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date in fecha.format");i=e.masks[i]||i||e.masks.default;var a=[];return(i=(i=i.replace(r,(function(t,e){return a.push(e),"@@@"}))).replace(n,(function(e){return e in p?p[e](t,o):e.slice(1,e.length-1)}))).replace(/@@@/g,(function(){return a.shift()}))},e.parse=function(t,i,s){var o=s||e.i18n;if("string"!=typeof i)throw new Error("Invalid format in fecha.parse");if(i=e.masks[i]||i,t.length>1e3)return null;var a={},c=[],l=[];i=i.replace(r,(function(t,e){return l.push(e),"@@@"}));var d,u=(d=i,d.replace(/[|\\{()[^$+*?.-]/g,"\\$&")).replace(n,(function(t){if(f[t]){var e=f[t];return c.push(e[1]),"("+e[0]+")"}return t}));u=u.replace(/@@@/g,(function(){return l.shift()}));var h=t.match(new RegExp(u,"i"));if(!h)return null;for(var p=1;p<h.length;p++)c[p-1](a,h[p],o);var m,g=new Date;return!0===a.isPm&&null!=a.hour&&12!=+a.hour?a.hour=+a.hour+12:!1===a.isPm&&12==+a.hour&&(a.hour=0),null!=a.timezoneOffset?(a.minute=+(a.minute||0)-+a.timezoneOffset,m=new Date(Date.UTC(a.year||g.getFullYear(),a.month||0,a.day||1,a.hour||0,a.minute||0,a.second||0,a.millisecond||0))):m=new Date(a.year||g.getFullYear(),a.month||0,a.day||1,a.hour||0,a.minute||0,a.second||0,a.millisecond||0),m};(function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}})(),function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}}();function m(t){return t.substr(0,t.indexOf("."))}var g=["closed","locked","off"],y=function(t,e,n,i){i=i||{},n=null==n?{}:n;var r=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return r.detail=n,t.dispatchEvent(r),r},v=new Set(["call-service","divider","section","weblink","cast","select"]),_={alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"},b=function(t,e){void 0===e&&(e=!1);var n=function(t,e){return i("hui-error-card",{type:"error",error:t,config:e})},i=function(t,e){var i=window.document.createElement(t);try{i.setConfig(e)}catch(i){return console.error(t,i),n(i.message,e)}return i};if(!t||"object"!=typeof t||!e&&!t.type)return n("No type defined",t);var r=t.type;if(r&&r.startsWith("custom:"))r=r.substr("custom:".length);else if(e)if(v.has(r))r="hui-"+r+"-row";else{if(!t.entity)return n("Invalid config given.",t);var s=t.entity.split(".",1)[0];r="hui-"+(_[s]||"text")+"-entity-row"}else r="hui-"+r+"-card";if(customElements.get(r))return i(r,t);var o=n("Custom element doesn't exist: "+t.type+".",t);o.style.display="None";var a=setTimeout((function(){o.style.display=""}),2e3);return customElements.whenDefined(t.type).then((function(){clearTimeout(a),y(o,"ll-rebuild",{},o)})),o},w=function(t){y(window,"haptic",t)},S=function(t,e){return function(t,e,n){void 0===n&&(n=!0);var i,r=m(e),s="group"===r?"homeassistant":r;switch(r){case"lock":i=n?"unlock":"lock";break;case"cover":i=n?"open_cover":"close_cover";break;default:i=n?"turn_on":"turn_off"}return t.callService(s,i,{entity_id:e})}(t,e,g.includes(t.states[e].state))},x=function(t,e,n,i,r){var s;if(r&&n.double_tap_action?s=n.double_tap_action:i&&n.hold_action?s=n.hold_action:!i&&n.tap_action&&(s=n.tap_action),s||(s={action:"more-info"}),!s.confirmation||s.confirmation.exemptions&&s.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||confirm(s.confirmation.text||"Are you sure you want to "+s.action+"?"))switch(s.action){case"more-info":(n.entity||n.camera_image)&&(y(t,"hass-more-info",{entityId:s.entity?s.entity:n.entity?n.entity:n.camera_image}),s.haptic&&w(s.haptic));break;case"navigate":s.navigation_path&&(function(t,e,n){void 0===n&&(n=!1),n?history.replaceState(null,"",e):history.pushState(null,"",e),y(window,"location-changed",{replace:n})}(0,s.navigation_path),s.haptic&&w(s.haptic));break;case"url":s.url_path&&window.open(s.url_path),s.haptic&&w(s.haptic);break;case"toggle":n.entity&&(S(e,n.entity),s.haptic&&w(s.haptic));break;case"call-service":if(!s.service)return;var o=s.service.split(".",2),a=o[0],c=o[1],l=Object.assign({},s.service_data);"entity"===l.entity_id&&(l.entity_id=n.entity),e.callService(a,c,l),s.haptic&&w(s.haptic)}};function P(t,e,n){if(e.has("config")||n)return!0;if(t._config.entity){var i=e.get("hass");return!i||i.states[t._config.entity]!==t.hass.states[t._config.entity]}return!1}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const C=new WeakMap,E=t=>"function"==typeof t&&C.has(t),N=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,k=(t,e,n=null)=>{for(;e!==n;){const n=e.nextSibling;t.removeChild(e),e=n}},M={},O={},A=`{{lit-${String(Math.random()).slice(2)}}}`,T=`\x3c!--${A}--\x3e`,D=new RegExp(`${A}|${T}`),j="$lit$";class ${constructor(t,e){this.parts=[],this.element=e;const n=[],i=[],r=document.createTreeWalker(e.content,133,null,!1);let s=0,o=-1,a=0;const{strings:c,values:{length:l}}=t;for(;a<l;){const t=r.nextNode();if(null!==t){if(o++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:n}=e;let i=0;for(let t=0;t<n;t++)V(e[t].name,j)&&i++;for(;i-- >0;){const e=c[a],n=H.exec(e)[2],i=n.toLowerCase()+j,r=t.getAttribute(i);t.removeAttribute(i);const s=r.split(D);this.parts.push({type:"attribute",index:o,name:n,strings:s}),a+=s.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),r.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(A)>=0){const i=t.parentNode,r=e.split(D),s=r.length-1;for(let e=0;e<s;e++){let n,s=r[e];if(""===s)n=R();else{const t=H.exec(s);null!==t&&V(t[2],j)&&(s=s.slice(0,t.index)+t[1]+t[2].slice(0,-j.length)+t[3]),n=document.createTextNode(s)}i.insertBefore(n,t),this.parts.push({type:"node",index:++o})}""===r[s]?(i.insertBefore(R(),t),n.push(t)):t.data=r[s],a+=s}}else if(8===t.nodeType)if(t.data===A){const e=t.parentNode;null!==t.previousSibling&&o!==s||(o++,e.insertBefore(R(),t)),s=o,this.parts.push({type:"node",index:o}),null===t.nextSibling?t.data="":(n.push(t),o--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(A,e+1));)this.parts.push({type:"node",index:-1}),a++}}else r.currentNode=i.pop()}for(const t of n)t.parentNode.removeChild(t)}}const V=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},Y=t=>-1!==t.index,R=()=>document.createComment(""),H=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class U{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this.__parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=N?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],n=this.template.parts,i=document.createTreeWalker(t,133,null,!1);let r,s=0,o=0,a=i.nextNode();for(;s<n.length;)if(r=n[s],Y(r)){for(;o<r.index;)o++,"TEMPLATE"===a.nodeName&&(e.push(a),i.currentNode=a.content),null===(a=i.nextNode())&&(i.currentNode=e.pop(),a=i.nextNode());if("node"===r.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,r.name,r.strings,this.options));s++}else this.__parts.push(void 0),s++;return N&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const I=` ${A} `;class q{constructor(t,e,n,i){this.strings=t,this.values=e,this.type=n,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let i=0;i<t;i++){const t=this.strings[i],r=t.lastIndexOf("\x3c!--");n=(r>-1||n)&&-1===t.indexOf("--\x3e",r+1);const s=H.exec(t);e+=null===s?t+(n?I:T):t.substr(0,s.index)+s[1]+s[2]+j+s[3]+A}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const z=t=>null===t||!("object"==typeof t||"function"==typeof t),F=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class L{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new W(this)}_getValue(){const t=this.strings,e=t.length-1;let n="";for(let i=0;i<e;i++){n+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(z(t)||!F(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+=t[e],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class W{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===M||z(t)&&t===this.value||(this.value=t,E(t)||(this.committer.dirty=!0))}commit(){for(;E(this.value);){const t=this.value;this.value=M,t(this)}this.value!==M&&this.committer.commit()}}class B{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(R()),this.endNode=t.appendChild(R())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=R()),t.__insert(this.endNode=R())}insertAfterPart(t){t.__insert(this.startNode=R()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;E(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=M,t(this)}const t=this.__pendingValue;t!==M&&(z(t)?t!==this.value&&this.__commitText(t):t instanceof q?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):F(t)?this.__commitIterable(t):t===O?(this.value=O,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof U&&this.value.template===e)this.value.update(t.values);else{const n=new U(e,t.processor,this.options),i=n._clone();n.update(t.values),this.__commitNode(i),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,i=0;for(const r of t)n=e[i],void 0===n&&(n=new B(this.options),e.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(e[i-1])),n.setValue(r),n.commit(),i++;i<e.length&&(e.length=i,this.clear(n&&n.endNode))}clear(t=this.startNode){k(this.startNode.parentNode,t.nextSibling,this.endNode)}}class J{constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;E(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=M,t(this)}if(this.__pendingValue===M)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=M}}class Z extends L{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new G(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class G extends W{}let K=!1;try{const t={get capture(){return K=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class Q{constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;E(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=M,t(this)}if(this.__pendingValue===M)return;const t=this.__pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=X(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=M}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const X=t=>t&&(K?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const tt=new class{handleAttributeExpressions(t,e,n,i){const r=e[0];if("."===r){return new Z(t,e.slice(1),n).parts}return"@"===r?[new Q(t,e.slice(1),i.eventContext)]:"?"===r?[new J(t,e.slice(1),n)]:new L(t,e,n).parts}handleTextExpression(t){return new B(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function et(t){let e=nt.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},nt.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const i=t.strings.join(A);return n=e.keyString.get(i),void 0===n&&(n=new $(t,t.getTemplateElement()),e.keyString.set(i,n)),e.stringsArray.set(t.strings,n),n}const nt=new Map,it=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const rt=(t,...e)=>new q(t,e,"html",tt),st=133;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function ot(t,e){const{element:{content:n},parts:i}=t,r=document.createTreeWalker(n,st,null,!1);let s=ct(i),o=i[s],a=-1,c=0;const l=[];let d=null;for(;r.nextNode();){a++;const t=r.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(l.push(t),null===d&&(d=t)),null!==d&&c++;void 0!==o&&o.index===a;)o.index=null!==d?-1:o.index-c,s=ct(i,s),o=i[s]}l.forEach(t=>t.parentNode.removeChild(t))}const at=t=>{let e=11===t.nodeType?0:1;const n=document.createTreeWalker(t,st,null,!1);for(;n.nextNode();)e++;return e},ct=(t,e=-1)=>{for(let n=e+1;n<t.length;n++){const e=t[n];if(Y(e))return n}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const lt=(t,e)=>`${t}--${e}`;let dt=!0;void 0===window.ShadyCSS?dt=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),dt=!1);const ut=t=>e=>{const n=lt(e.type,t);let i=nt.get(n);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},nt.set(n,i));let r=i.stringsArray.get(e.strings);if(void 0!==r)return r;const s=e.strings.join(A);if(r=i.keyString.get(s),void 0===r){const n=e.getTemplateElement();dt&&window.ShadyCSS.prepareTemplateDom(n,t),r=new $(e,n),i.keyString.set(s,r)}return i.stringsArray.set(e.strings,r),r},ht=["html","svg"],pt=new Set,ft=(t,e,n)=>{pt.add(t);const i=n?n.element:document.createElement("template"),r=e.querySelectorAll("style"),{length:s}=r;if(0===s)return void window.ShadyCSS.prepareTemplateStyles(i,t);const o=document.createElement("style");for(let t=0;t<s;t++){const e=r[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{ht.forEach(e=>{const n=nt.get(lt(e,t));void 0!==n&&n.keyString.forEach(t=>{const{element:{content:e}}=t,n=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{n.add(t)}),ot(t,n)})})})(t);const a=i.content;n?function(t,e,n=null){const{element:{content:i},parts:r}=t;if(null==n)return void i.appendChild(e);const s=document.createTreeWalker(i,st,null,!1);let o=ct(r),a=0,c=-1;for(;s.nextNode();){for(c++,s.currentNode===n&&(a=at(e),n.parentNode.insertBefore(e,n));-1!==o&&r[o].index===c;){if(a>0){for(;-1!==o;)r[o].index+=a,o=ct(r,o);return}o=ct(r,o)}}}(n,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(n){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),ot(n,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const mt={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},gt=(t,e)=>e!==t&&(e==e||t==t),yt={attribute:!0,type:String,converter:mt,reflect:!1,hasChanged:gt},vt=Promise.resolve(!0),_t=1,bt=4,wt=8,St=16,xt=32,Pt="finalized";class Ct extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=vt,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,n)=>{const i=this._attributeNameForProperty(n,e);void 0!==i&&(this._attributeToPropertyMap.set(i,n),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=yt){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[n]},set(e){const i=this[t];this[n]=e,this._requestUpdate(t,i)},configurable:!0,enumerable:!0})}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(Pt)||t.finalize(),this[Pt]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const n of e)this.createProperty(n,t[n])}}static _attributeNameForProperty(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,n=gt){return n(t,e)}static _propertyValueFromAttribute(t,e){const n=e.type,i=e.converter||mt,r="function"==typeof i?i:i.fromAttribute;return r?r(t,n):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const n=e.type,i=e.converter;return(i&&i.toAttribute||mt.toAttribute)(t,n)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|xt,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,e,n=yt){const i=this.constructor,r=i._attributeNameForProperty(t,n);if(void 0!==r){const t=i._propertyValueToAttribute(e,n);if(void 0===t)return;this._updateState=this._updateState|wt,null==t?this.removeAttribute(r):this.setAttribute(r,t),this._updateState=this._updateState&~wt}}_attributeToProperty(t,e){if(this._updateState&wt)return;const n=this.constructor,i=n._attributeToPropertyMap.get(t);if(void 0!==i){const t=n._classProperties.get(i)||yt;this._updateState=this._updateState|St,this[i]=n._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~St}}_requestUpdate(t,e){let n=!0;if(void 0!==t){const i=this.constructor,r=i._classProperties.get(t)||yt;i._valueHasChanged(this[t],e,r.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==r.reflect||this._updateState&St||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,r))):n=!1}!this._hasRequestedUpdate&&n&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=this._updateState|bt;const n=this._updatePromise;this._updatePromise=new Promise((n,i)=>{t=n,e=i});try{await n}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&xt}get _hasRequestedUpdate(){return this._updateState&bt}get hasUpdated(){return this._updateState&_t}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(this._updateState&_t||(this._updateState=this._updateState|_t,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~bt}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}Ct[Pt]=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Et=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:n,elements:i}=e;return{kind:n,elements:i,finisher(e){window.customElements.define(t,e)}}})(t,e),Nt=(t,e)=>"method"!==e.kind||!e.descriptor||"value"in e.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}}:Object.assign({},e,{finisher(n){n.createProperty(e.key,t)}}),kt=(t,e,n)=>{e.constructor.createProperty(n,t)};function Mt(t){return(e,n)=>void 0!==n?kt(t,e,n):Nt(t,e)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Ot="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,At=Symbol();class Tt{constructor(t,e){if(e!==At)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Ot?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Dt=(t,...e)=>{const n=e.reduce((e,n,i)=>e+(t=>{if(t instanceof Tt)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+t[i+1],t[0]);return new Tt(n,At)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const jt=t=>t.flat?t.flat(1/0):function t(e,n=[]){for(let i=0,r=e.length;i<r;i++){const r=e[i];Array.isArray(r)?t(r,n):n.push(r)}return n}(t);class $t extends Ct{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){jt(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Ot?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof q&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}$t.finalized=!0,$t.render=(t,e,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const i=n.scopeName,r=it.has(e),s=dt&&11===e.nodeType&&!!e.host,o=s&&!pt.has(i),a=o?document.createDocumentFragment():e;if(((t,e,n)=>{let i=it.get(e);void 0===i&&(k(e,e.firstChild),it.set(e,i=new B(Object.assign({templateFactory:et},n))),i.appendInto(e)),i.setValue(t),i.commit()})(t,a,Object.assign({templateFactory:ut(i)},n)),o){const t=it.get(a);it.delete(a);const n=t.value instanceof U?t.value.template:void 0;ft(i,a,n),k(e,e.firstChild),e.appendChild(a),it.set(e,t)}!r&&s&&window.ShadyCSS.styleElement(e.host)};const Vt=t=>{var e;return null===(e=document.querySelector("home-assistant"))||void 0===e?void 0:e.provideHass(t)};let Yt=class extends $t{constructor(){super(...arguments),this.setConfig=t=>{if(!t)throw new Error("Invalid configuration");if("string"!=typeof t.entity)throw new Error("Invalid configuration: field `entity` is required and should be of type `string`");t.actions&&t.actions.forEach((t,e)=>{if("string"!=typeof t.label)throw new Error(`Invalid configuration: field \`label\` in \`action[${e}]\` is required and should be of type \`string\``);if("string"!=typeof t.service)throw new Error(`Invalid configuration: field \`service\` in \`action[${e}]\` is required and should be of type \`string\``);if(2!==t.service.split(".").length)throw new Error(`Invalid configuration: field \`service\` in \`action[${e}]\` is required and should be formatted as \`<domain>.<service>\``)}),this.hass||Vt(this),this._config=t},this.shouldUpdate=t=>P(this,t,!1),this.render=()=>{var t,e,n,i,r,s,o,a,c;const l=this._config.entity,d=null===(t=this.hass)||void 0===t?void 0:t.states[l],u=(null===(e=this._config)||void 0===e?void 0:e.actions)?null===(i=null===(n=this._config)||void 0===n?void 0:n.actions)||void 0===i?void 0:i.filter(({state:t})=>{var e;return!t||(null===(e=d)||void 0===e?void 0:e.state)===t}).slice(0,2):[],h=(null===(r=this._config)||void 0===r?void 0:r.icon)||(null===(s=d)||void 0===s?void 0:s.attributes.icon),p=(null===(o=this._config)||void 0===o?void 0:o.name)||(null===(a=d)||void 0===a?void 0:a.attributes.friendly_name),f=h.startsWith("mdi:"),g="group"===m(l);return rt`
            <div id="wrapper">
                <button @click=${this._handleButtonClick} type="button">
                    ${f?rt`
                              <ha-icon icon=${h}></ha-icon>
                          `:rt`
                              <img src=${h} />
                          `}
                    <h4>
                        ${p}
                    </h4>
                </button>
                <ul class="actions">
                    ${u.map(({label:t,service:e},n)=>{const i=rt`
                            <button @click=${this._handleActionClick(e)}>
                                ${t}
                            </button>
                        `;return n%2!=0?rt`
                                  <span></span>
                                  ${i}
                              `:i})}
                </ul>
                <span class="badge"
                    >${g?null===(c=d)||void 0===c?void 0:c.attributes.entity_id.length:rt``}</span
                >
            </div>
        `},this._handleButtonClick=()=>x(this,this.hass,this._config,!1,!1),this._handleActionClick=t=>{const e=this._config.entity,[n,i]=t.split(".");return()=>{var t;return null===(t=this.hass)||void 0===t?void 0:t.callService(n,i,{entity_id:e})}}}static get styles(){return Dt`
            button {
                background-color: transparent;
                border: none;
                cursor: pointer;
                font-family: 'Product Sans';
                padding: 0;
                outline: none;
                width: 100%;
            }

            #wrapper {
                display: flex;
                flex-direction: column;
                position: relative;
            }

            #wrapper > button img {
                height: 100%;
                max-height: 50%;
                max-width: 70px;
                width: 100%;
            }

            #wrapper > button h4 {
                color: #131313;
                font-family: 'Product Sans';
                font-size: 1.1rem;
                font-weight: 400;
                margin: 12px 0px 0px;
            }

            .actions {
                align-items: center;
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                height: 16px;
                justify-content: space-around;
                list-style: none;
                max-width: 170px;
                margin: 12px auto 0px;
                padding: 0;
                width: 100%;
            }

            .actions button {
                color: #4285f4;
                flex: 0;
                font-size: 0.95rem;
                font-weight: 500;
            }

            .actions span {
                background-color: #dadce0;
                border-radius: 100%;
                height: 4px;
                width: 4px;
            }

            .badge {
                border: 1px solid #dadce0;
                border-radius: 100%;
                color: #131313;
                font-family: 'Product Sans';
                font-size: 1.1rem;
                height: 24px;
                line-height: 24px;
                position: absolute;
                right: calc(50% - 64px);
                text-align: center;
                top: 0;
                width: 24px;
            }

            .badge:empty {
                display: none;
            }
        `}};t([Mt()],Yt.prototype,"hass",void 0),t([Mt()],Yt.prototype,"_config",void 0),Yt=t([Et("google-home-grid-item")],Yt);const Rt=customElements.get("home-assistant-main")?Object.getPrototypeOf(customElements.get("home-assistant-main")):Object.getPrototypeOf(customElements.get("hui-view")),Ht=Rt.prototype.html;Rt.prototype.css;const Ut="custom:";function It(t,e){const n=document.createElement("hui-error-card");return n.setConfig({type:"error",error:t,origConfig:e}),n}function qt(t,e){if(!e||"object"!=typeof e||!e.type)return It(`No ${t} type configured`,e);let n=e.type;if(n=n.startsWith(Ut)?n.substr(Ut.length):`hui-${n}-${t}`,customElements.get(n))return function(t,e){const n=document.createElement(t);try{n.setConfig(e)}catch(t){return It(t,e)}return n}(n,e);const i=It(`Custom element doesn't exist: ${n}.`,e);i.style.display="None";const r=setTimeout(()=>{i.style.display=""},2e3);return customElements.whenDefined(n).then(()=>{clearTimeout(r),function(t,e,n=null){if((t=new Event(t,{bubbles:!0,cancelable:!1,composed:!0})).detail=e||{},n)n.dispatchEvent(t);else{var i=document.querySelector("home-assistant");(i=(i=(i=(i=(i=(i=(i=(i=(i=(i=(i=i&&i.shadowRoot)&&i.querySelector("home-assistant-main"))&&i.shadowRoot)&&i.querySelector("app-drawer-layout partial-panel-resolver"))&&i.shadowRoot||i)&&i.querySelector("ha-panel-lovelace"))&&i.shadowRoot)&&i.querySelector("hui-root"))&&i.shadowRoot)&&i.querySelector("ha-app-layout #view"))&&i.firstElementChild)&&i.dispatchEvent(t)}}("ll-rebuild",{},i)}),i}const zt=2;class Ft extends Rt{static get version(){return zt}static get properties(){return{noHass:{type:Boolean}}}setConfig(t){var e;this._config=t,this.el?this.el.setConfig(t):(this.el=this.create(t),this._hass&&(this.el.hass=this._hass),this.noHass&&(e=this,document.querySelector("home-assistant").provideHass(e)))}set config(t){this.setConfig(t)}set hass(t){this._hass=t,this.el&&(this.el.hass=t)}createRenderRoot(){return this}render(){return Ht`${this.el}`}}const Lt=function(t,e){const n=Object.getOwnPropertyDescriptors(e.prototype);for(const[e,i]of Object.entries(n))"constructor"!==e&&Object.defineProperty(t.prototype,e,i);const i=Object.getOwnPropertyDescriptors(e);for(const[e,n]of Object.entries(i))"prototype"!==e&&Object.defineProperty(t,e,n);const r=Object.getPrototypeOf(e),s=Object.getOwnPropertyDescriptors(r.prototype);for(const[e,n]of Object.entries(s))"constructor"!==e&&Object.defineProperty(Object.getPrototypeOf(t).prototype,e,n);const o=Object.getOwnPropertyDescriptors(r);for(const[e,n]of Object.entries(o))"prototype"!==e&&Object.defineProperty(Object.getPrototypeOf(t),e,n)},Wt=customElements.get("card-maker");if(!Wt||!Wt.version||Wt.version<zt){class t extends Ft{create(t){return function(t){return qt("card",t)}(t)}getCardSize(){return this.firstElementChild&&this.firstElementChild.getCardSize?this.firstElementChild.getCardSize():1}}Wt?Lt(Wt,t):customElements.define("card-maker",t)}const Bt=customElements.get("element-maker");if(!Bt||!Bt.version||Bt.version<zt){class t extends Ft{create(t){return function(t){return qt("element",t)}(t)}}Bt?Lt(Bt,t):customElements.define("element-maker",t)}const Jt=customElements.get("entity-row-maker");if(!Jt||!Jt.version||Jt.version<zt){class t extends Ft{create(t){return function(t){const e=new Set(["call-service","divider","section","weblink"]);if(!t)return It("Invalid configuration given.",t);if("string"==typeof t&&(t={entity:t}),"object"!=typeof t||!t.entity&&!t.type)return It("Invalid configuration given.",t);const n=t.type||"default";if(e.has(n)||n.startsWith(Ut))return qt("row",t);const i=t.entity.split(".",1)[0];return Object.assign(t,{type:{alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"}[i]||"text"}),qt("entity-row",t)}(t)}}Jt?Lt(Jt,t):customElements.define("entity-row-maker",t)}let Zt=class extends $t{constructor(){super(...arguments),this.setConfig=t=>{if(!t||!t.cards||!Array.isArray(t.cards))throw new Error("Invalid configuration");this._config=t,this._cards=t.cards.map(t=>b(t))},this.shouldUpdate=t=>t.has("_config"),this.render=()=>{var t,e,n;return rt`
        <div id="wrapper">
            <h2>${null===(t=this._config)||void 0===t?void 0:t.title}</h2>
            <h3>
                ${null===(e=this._cards)||void 0===e?void 0:e.length}
                ${1===(null===(n=this._cards)||void 0===n?void 0:n.length)?"device":"devices"}
            </h3>
            <div class="grid">
                ${this._cards}
            </div>
        </div>
    `}}static get styles(){return Dt`
            :host {
                /* Override margin added by any of the stack cards this card may be used inside of */
                margin: 0 10px !important;
            }

            #wrapper {
                border-top: 1px solid #dadce0;
                margin: 0 auto;
                max-width: 960px;
                padding: 20px 0;
            }

            h2,
            h3 {
                font-family: 'Product Sans';
                text-align: center;
            }

            h2 {
                color: #131313;
                font-size: 1.4rem;
                font-weight: 500;
                margin: 0;
            }

            h3 {
                color: #616870;
                font-size: 0.95rem;
                font-weight: 400;
                margin: 6px 0 0;
            }

            h2:empty,
            h3:empty {
                display: none;
            }

            .grid {
                display: grid;
                grid-template-columns: repeat(2, minmax(1px, 250px));
                gap: 24px 20px;
                justify-content: center;
                padding: 14px 20px 0;
            }
        `}};t([Mt()],Zt.prototype,"hass",void 0),t([Mt()],Zt.prototype,"_config",void 0),t([Mt()],Zt.prototype,"_cards",void 0),Zt=t([Et("google-home-grid")],Zt);const Gt=["blue","cyan","green","indigo","purple","red","yellow","none"];let Kt=class extends $t{constructor(){super(...arguments),this.setConfig=t=>{if(!t)throw new Error("Invalid configuration");if("string"!=typeof t.entity)throw new Error("Invalid configuration: field `entity` is required and should be of type `string`");if(t.color&&!Gt.includes(t.color))throw new Error(`Invalid configuration: field \`color should be one of: ${Gt.map(t=>`\`${t}\``).join(", ")}`);if(t.icon&&!t.icon.startsWith("mdi:"))throw new Error("Invalid configuration: field `icon should start with `mdi:`");this.hass||Vt(this),this._config=t},this.shouldUpdate=t=>P(this,t,!1),this.render=()=>{var t,e,n,i,r,s,o;const a=(t=>{switch(t){case"blue":return Dt`
                background-color: #e8f0fe;
                border: 1px solid #e8f0fe;
                color: #4285f4;
            `;case"cyan":return Dt`
                background-color: #e4f7fb;
                border: 1px solid #e4f7fb;
                color: #12b5cb;
            `;case"green":return Dt`
                background-color: #e6f4ea;
                border: 1px solid #e6f4ea;
                color: #34a853;
            `;case"indigo":return Dt`
                background-color: #e8eaf6;
                border: 1px solid #e8eaf6;
                color: #3f51b5;
            `;case"purple":return Dt`
                background-color: #f3e8fd;
                border: 1px solid #f3e8fd;
                color: #ab47bc;
            `;case"red":return Dt`
                background-color: #fce8e6;
                border: 1px solid #fce8e6;
                color: #ea4335;
            `;case"yellow":return Dt`
                background-color: #fef7e0;
                border: 1px solid #fef7e0;
                color: #af5c00;
            `;case"none":default:return Dt`
                color: #5f6268;
                border: 1px solid #acb1b7;
            `}})(null===(t=this._config)||void 0===t?void 0:t.color),c=this._config.entity,l=null===(e=this.hass)||void 0===e?void 0:e.states[c],d=(null===(n=this._config)||void 0===n?void 0:n.icon)||(null===(i=l)||void 0===i?void 0:i.attributes.icon),u=(null===(r=this._config)||void 0===r?void 0:r.name)||(null===(s=l)||void 0===s?void 0:s.attributes.friendly_name);return rt`
            <button
                @click=${this._handleClick}
                data-color=${null===(o=this._config)||void 0===o?void 0:o.color}
                type="button"
            >
                <ha-icon icon=${d} style=${a}></ha-icon>
                <span>${u}</span>
            </button>
        `},this._handleClick=()=>x(this,this.hass,this._config,!1,!1)}static get styles(){return Dt`
            button {
                align-items: center;
                background-color: transparent;
                border: none;
                cursor: pointer;
                display: flex;
                font-family: 'Product Sans';
                font-size: 0.9rem;
                flex-direction: column;
                height: 96px;
                justify-content: center;
                margin: 0 auto;
                outline: none;
                padding: 0;
                width: 96px;
            }

            ha-icon {
                border-radius: 100%;
                padding: 17px;
            }

            span {
                color: #616870;
                margin-top: 6px;
            }
        `}};t([Mt()],Kt.prototype,"hass",void 0),t([Mt()],Kt.prototype,"_config",void 0),Kt=t([Et("google-home-menu-item")],Kt);let Qt=class extends $t{constructor(){super(...arguments),this.setConfig=t=>{if(!t||!t.cards||!Array.isArray(t.cards))throw new Error("Invalid configuration");this._config=t,this._cards=t.cards.map(t=>b(t))},this.shouldUpdate=t=>t.has("_config"),this.render=()=>{var t;return rt`
        <div id="wrapper">
            <h1>${null===(t=this._config)||void 0===t?void 0:t.title}</h1>
            <div class="flex">
                ${this._cards}
            </div>
        </div>
    `}}static get styles(){return Dt`
            :host {
                /* Override margin added by any of the stack cards this card may be used inside of */
                margin: 0 10px !important;
            }

            #wrapper {
                margin: 0 auto;
                max-width: 960px;
            }

            h1 {
                color: #131313;
                font-family: 'Product Sans';
                font-size: 32px;
                font-weight: 400;
                margin: 20px 0;
                text-align: center;
            }

            h1:empty {
                display: none;
            }

            .flex {
                align-items: center;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                margin: 20px 0;
            }
        `}};t([Mt()],Qt.prototype,"hass",void 0),t([Mt()],Qt.prototype,"_config",void 0),t([Mt()],Qt.prototype,"_cards",void 0),Qt=t([Et("google-home-menu")],Qt);export{Zt as GoogleHomeGrid,Yt as GoogleHomeGridItem,Qt as GoogleHomeMenu,Kt as GoogleHomeMenuItem};
