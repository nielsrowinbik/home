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
function e(e,t,i,n){var s,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,i,o):s(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o}var t={},i=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,n="[^\\s]+",s=/\[([^]*?)\]/gm,r=function(){};function o(e,t){for(var i=[],n=0,s=e.length;n<s;n++)i.push(e[n].substr(0,t));return i}function a(e){return function(t,i,n){var s=n[e].indexOf(i.charAt(0).toUpperCase()+i.substr(1).toLowerCase());~s&&(t.month=s)}}function l(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e}var c=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],d=["January","February","March","April","May","June","July","August","September","October","November","December"],u=o(d,3),h=o(c,3);t.i18n={dayNamesShort:h,dayNames:c,monthNamesShort:u,monthNames:d,amPm:["am","pm"],DoFn:function(e){return e+["th","st","nd","rd"][e%10>3?0:(e-e%10!=10)*e%10]}};var p={D:function(e){return e.getDate()},DD:function(e){return l(e.getDate())},Do:function(e,t){return t.DoFn(e.getDate())},d:function(e){return e.getDay()},dd:function(e){return l(e.getDay())},ddd:function(e,t){return t.dayNamesShort[e.getDay()]},dddd:function(e,t){return t.dayNames[e.getDay()]},M:function(e){return e.getMonth()+1},MM:function(e){return l(e.getMonth()+1)},MMM:function(e,t){return t.monthNamesShort[e.getMonth()]},MMMM:function(e,t){return t.monthNames[e.getMonth()]},YY:function(e){return l(String(e.getFullYear()),4).substr(2)},YYYY:function(e){return l(e.getFullYear(),4)},h:function(e){return e.getHours()%12||12},hh:function(e){return l(e.getHours()%12||12)},H:function(e){return e.getHours()},HH:function(e){return l(e.getHours())},m:function(e){return e.getMinutes()},mm:function(e){return l(e.getMinutes())},s:function(e){return e.getSeconds()},ss:function(e){return l(e.getSeconds())},S:function(e){return Math.round(e.getMilliseconds()/100)},SS:function(e){return l(Math.round(e.getMilliseconds()/10),2)},SSS:function(e){return l(e.getMilliseconds(),3)},a:function(e,t){return e.getHours()<12?t.amPm[0]:t.amPm[1]},A:function(e,t){return e.getHours()<12?t.amPm[0].toUpperCase():t.amPm[1].toUpperCase()},ZZ:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+l(100*Math.floor(Math.abs(t)/60)+Math.abs(t)%60,4)}},m={D:["\\d\\d?",function(e,t){e.day=t}],Do:["\\d\\d?"+n,function(e,t){e.day=parseInt(t,10)}],M:["\\d\\d?",function(e,t){e.month=t-1}],YY:["\\d\\d?",function(e,t){var i=+(""+(new Date).getFullYear()).substr(0,2);e.year=""+(t>68?i-1:i)+t}],h:["\\d\\d?",function(e,t){e.hour=t}],m:["\\d\\d?",function(e,t){e.minute=t}],s:["\\d\\d?",function(e,t){e.second=t}],YYYY:["\\d{4}",function(e,t){e.year=t}],S:["\\d",function(e,t){e.millisecond=100*t}],SS:["\\d{2}",function(e,t){e.millisecond=10*t}],SSS:["\\d{3}",function(e,t){e.millisecond=t}],d:["\\d\\d?",r],ddd:[n,r],MMM:[n,a("monthNamesShort")],MMMM:[n,a("monthNames")],a:[n,function(e,t,i){var n=t.toLowerCase();n===i.amPm[0]?e.isPm=!1:n===i.amPm[1]&&(e.isPm=!0)}],ZZ:["[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z",function(e,t){var i,n=(t+"").match(/([+-]|\d\d)/gi);n&&(i=60*n[1]+parseInt(n[2],10),e.timezoneOffset="+"===n[0]?i:-i)}]};m.dd=m.d,m.dddd=m.ddd,m.DD=m.D,m.mm=m.m,m.hh=m.H=m.HH=m.h,m.MM=m.M,m.ss=m.s,m.A=m.a,t.masks={default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"},t.format=function(e,n,r){var o=r||t.i18n;if("number"==typeof e&&(e=new Date(e)),"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))throw new Error("Invalid Date in fecha.format");n=t.masks[n]||n||t.masks.default;var a=[];return(n=(n=n.replace(s,(function(e,t){return a.push(t),"@@@"}))).replace(i,(function(t){return t in p?p[t](e,o):t.slice(1,t.length-1)}))).replace(/@@@/g,(function(){return a.shift()}))},t.parse=function(e,n,r){var o=r||t.i18n;if("string"!=typeof n)throw new Error("Invalid format in fecha.parse");if(n=t.masks[n]||n,e.length>1e3)return null;var a={},l=[],c=[];n=n.replace(s,(function(e,t){return c.push(t),"@@@"}));var d,u=(d=n,d.replace(/[|\\{()[^$+*?.-]/g,"\\$&")).replace(i,(function(e){if(m[e]){var t=m[e];return l.push(t[1]),"("+t[0]+")"}return e}));u=u.replace(/@@@/g,(function(){return c.shift()}));var h=e.match(new RegExp(u,"i"));if(!h)return null;for(var p=1;p<h.length;p++)l[p-1](a,h[p],o);var f,g=new Date;return!0===a.isPm&&null!=a.hour&&12!=+a.hour?a.hour=+a.hour+12:!1===a.isPm&&12==+a.hour&&(a.hour=0),null!=a.timezoneOffset?(a.minute=+(a.minute||0)-+a.timezoneOffset,f=new Date(Date.UTC(a.year||g.getFullYear(),a.month||0,a.day||1,a.hour||0,a.minute||0,a.second||0,a.millisecond||0))):f=new Date(a.year||g.getFullYear(),a.month||0,a.day||1,a.hour||0,a.minute||0,a.second||0,a.millisecond||0),f};(function(){try{(new Date).toLocaleDateString("i")}catch(e){return"RangeError"===e.name}})(),function(){try{(new Date).toLocaleString("i")}catch(e){return"RangeError"===e.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(e){return"RangeError"===e.name}}();function f(e){return e.substr(0,e.indexOf("."))}var g=["closed","locked","off"],y=function(e,t,i,n){n=n||{},i=null==i?{}:i;var s=new Event(t,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return s.detail=i,e.dispatchEvent(s),s},v=new Set(["call-service","divider","section","weblink","cast","select"]),_={alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"},w=function(e,t){void 0===t&&(t=!1);var i=function(e,t){return n("hui-error-card",{type:"error",error:e,config:t})},n=function(e,t){var n=window.document.createElement(e);try{n.setConfig(t)}catch(n){return console.error(e,n),i(n.message,t)}return n};if(!e||"object"!=typeof e||!t&&!e.type)return i("No type defined",e);var s=e.type;if(s&&s.startsWith("custom:"))s=s.substr("custom:".length);else if(t)if(v.has(s))s="hui-"+s+"-row";else{if(!e.entity)return i("Invalid config given.",e);var r=e.entity.split(".",1)[0];s="hui-"+(_[r]||"text")+"-entity-row"}else s="hui-"+s+"-card";if(customElements.get(s))return n(s,e);var o=i("Custom element doesn't exist: "+e.type+".",e);o.style.display="None";var a=setTimeout((function(){o.style.display=""}),2e3);return customElements.whenDefined(e.type).then((function(){clearTimeout(a),y(o,"ll-rebuild",{},o)})),o},b=function(e){y(window,"haptic",e)},x=function(e,t){return function(e,t,i){void 0===i&&(i=!0);var n,s=f(t),r="group"===s?"homeassistant":s;switch(s){case"lock":n=i?"unlock":"lock";break;case"cover":n=i?"open_cover":"close_cover";break;default:n=i?"turn_on":"turn_off"}return e.callService(r,n,{entity_id:t})}(e,t,g.includes(e.states[t].state))},S=function(e,t,i,n,s){var r;if(s&&i.double_tap_action?r=i.double_tap_action:n&&i.hold_action?r=i.hold_action:!n&&i.tap_action&&(r=i.tap_action),r||(r={action:"more-info"}),!r.confirmation||r.confirmation.exemptions&&r.confirmation.exemptions.some((function(e){return e.user===t.user.id}))||confirm(r.confirmation.text||"Are you sure you want to "+r.action+"?"))switch(r.action){case"more-info":(i.entity||i.camera_image)&&(y(e,"hass-more-info",{entityId:r.entity?r.entity:i.entity?i.entity:i.camera_image}),r.haptic&&b(r.haptic));break;case"navigate":r.navigation_path&&(function(e,t,i){void 0===i&&(i=!1),i?history.replaceState(null,"",t):history.pushState(null,"",t),y(window,"location-changed",{replace:i})}(0,r.navigation_path),r.haptic&&b(r.haptic));break;case"url":r.url_path&&window.open(r.url_path),r.haptic&&b(r.haptic);break;case"toggle":i.entity&&(x(t,i.entity),r.haptic&&b(r.haptic));break;case"call-service":if(!r.service)return;var o=r.service.split(".",2),a=o[0],l=o[1],c=Object.assign({},r.service_data);"entity"===c.entity_id&&(c.entity_id=i.entity),t.callService(a,l,c),r.haptic&&b(r.haptic)}};
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
const $=new WeakMap,C=e=>"function"==typeof e&&$.has(e),P=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,k=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},N={},E={},M=`{{lit-${String(Math.random()).slice(2)}}}`,T=`\x3c!--${M}--\x3e`,A=new RegExp(`${M}|${T}`);class D{constructor(e,t){this.parts=[],this.element=t;const i=[],n=[],s=document.createTreeWalker(t.content,133,null,!1);let r=0,o=-1,a=0;const{strings:l,values:{length:c}}=e;for(;a<c;){const e=s.nextNode();if(null!==e){if(o++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let n=0;for(let e=0;e<i;e++)O(t[e].name,"$lit$")&&n++;for(;n-- >0;){const t=l[a],i=U.exec(t)[2],n=i.toLowerCase()+"$lit$",s=e.getAttribute(n);e.removeAttribute(n);const r=s.split(A);this.parts.push({type:"attribute",index:o,name:i,strings:r}),a+=r.length-1}}"TEMPLATE"===e.tagName&&(n.push(e),s.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(M)>=0){const n=e.parentNode,s=t.split(A),r=s.length-1;for(let t=0;t<r;t++){let i,r=s[t];if(""===r)i=R();else{const e=U.exec(r);null!==e&&O(e[2],"$lit$")&&(r=r.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),i=document.createTextNode(r)}n.insertBefore(i,e),this.parts.push({type:"node",index:++o})}""===s[r]?(n.insertBefore(R(),e),i.push(e)):e.data=s[r],a+=r}}else if(8===e.nodeType)if(e.data===M){const t=e.parentNode;null!==e.previousSibling&&o!==r||(o++,t.insertBefore(R(),e)),r=o,this.parts.push({type:"node",index:o}),null===e.nextSibling?e.data="":(i.push(e),o--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(M,t+1));)this.parts.push({type:"node",index:-1}),a++}}else s.currentNode=n.pop()}for(const e of i)e.parentNode.removeChild(e)}}const O=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},V=e=>-1!==e.index,R=()=>document.createComment(""),U=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class z{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=P?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],i=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let s,r=0,o=0,a=n.nextNode();for(;r<i.length;)if(s=i[r],V(s)){for(;o<s.index;)o++,"TEMPLATE"===a.nodeName&&(t.push(a),n.currentNode=a.content),null===(a=n.nextNode())&&(n.currentNode=t.pop(),a=n.nextNode());if("node"===s.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,s.name,s.strings,this.options));r++}else this.__parts.push(void 0),r++;return P&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */const Y=` ${M} `;class H{constructor(e,t,i,n){this.strings=e,this.values=t,this.type=i,this.processor=n}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let n=0;n<e;n++){const e=this.strings[n],s=e.lastIndexOf("\x3c!--");i=(s>-1||i)&&-1===e.indexOf("--\x3e",s+1);const r=U.exec(e);t+=null===r?e+(i?Y:T):e.substr(0,r.index)+r[1]+r[2]+"$lit$"+r[3]+M}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
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
 */const j=e=>null===e||!("object"==typeof e||"function"==typeof e),I=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class F{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new L(this)}_getValue(){const e=this.strings,t=e.length-1;let i="";for(let n=0;n<t;n++){i+=e[n];const t=this.parts[n];if(void 0!==t){const e=t.value;if(j(e)||!I(e))i+="string"==typeof e?e:String(e);else for(const t of e)i+="string"==typeof t?t:String(t)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class L{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===N||j(e)&&e===this.value||(this.value=e,C(e)||(this.committer.dirty=!0))}commit(){for(;C(this.value);){const e=this.value;this.value=N,e(this)}this.value!==N&&this.committer.commit()}}class q{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(R()),this.endNode=e.appendChild(R())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=R()),e.__insert(this.endNode=R())}insertAfterPart(e){e.__insert(this.startNode=R()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;C(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=N,e(this)}const e=this.__pendingValue;e!==N&&(j(e)?e!==this.value&&this.__commitText(e):e instanceof H?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):I(e)?this.__commitIterable(e):e===E?(this.value=E,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof z&&this.value.template===t)this.value.update(e.values);else{const i=new z(t,e.processor,this.options),n=i._clone();i.update(e.values),this.__commitNode(n),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,n=0;for(const s of e)i=t[n],void 0===i&&(i=new q(this.options),t.push(i),0===n?i.appendIntoPart(this):i.insertAfterPart(t[n-1])),i.setValue(s),i.commit(),n++;n<t.length&&(t.length=n,this.clear(i&&i.endNode))}clear(e=this.startNode){k(this.startNode.parentNode,e.nextSibling,this.endNode)}}class B{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;C(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=N,e(this)}if(this.__pendingValue===N)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=N}}class W extends F{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new J(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class J extends L{}let Z=!1;try{const e={get capture(){return Z=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class G{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;C(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=N,e(this)}if(this.__pendingValue===N)return;const e=this.__pendingValue,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=K(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=N}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const K=e=>e&&(Z?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
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
 */;const Q=new class{handleAttributeExpressions(e,t,i,n){const s=t[0];if("."===s){return new W(e,t.slice(1),i).parts}return"@"===s?[new G(e,t.slice(1),n.eventContext)]:"?"===s?[new B(e,t.slice(1),i)]:new F(e,t,i).parts}handleTextExpression(e){return new q(e)}};
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
 */function X(e){let t=ee.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},ee.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const n=e.strings.join(M);return i=t.keyString.get(n),void 0===i&&(i=new D(e,e.getTemplateElement()),t.keyString.set(n,i)),t.stringsArray.set(e.strings,i),i}const ee=new Map,te=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const ie=(e,...t)=>new H(e,t,"html",Q)
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
 */;function ne(e,t){const{element:{content:i},parts:n}=e,s=document.createTreeWalker(i,133,null,!1);let r=re(n),o=n[r],a=-1,l=0;const c=[];let d=null;for(;s.nextNode();){a++;const e=s.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==o&&o.index===a;)o.index=null!==d?-1:o.index-l,r=re(n,r),o=n[r]}c.forEach(e=>e.parentNode.removeChild(e))}const se=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,133,null,!1);for(;i.nextNode();)t++;return t},re=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(V(t))return i}return-1};
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
const oe=(e,t)=>`${e}--${t}`;let ae=!0;void 0===window.ShadyCSS?ae=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),ae=!1);const le=e=>t=>{const i=oe(t.type,e);let n=ee.get(i);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},ee.set(i,n));let s=n.stringsArray.get(t.strings);if(void 0!==s)return s;const r=t.strings.join(M);if(s=n.keyString.get(r),void 0===s){const i=t.getTemplateElement();ae&&window.ShadyCSS.prepareTemplateDom(i,e),s=new D(t,i),n.keyString.set(r,s)}return n.stringsArray.set(t.strings,s),s},ce=["html","svg"],de=new Set,ue=(e,t,i)=>{de.add(e);const n=i?i.element:document.createElement("template"),s=t.querySelectorAll("style"),{length:r}=s;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(n,e);const o=document.createElement("style");for(let e=0;e<r;e++){const t=s[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}(e=>{ce.forEach(t=>{const i=ee.get(oe(t,e));void 0!==i&&i.keyString.forEach(e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{i.add(e)}),ne(e,i)})})})(e);const a=n.content;i?function(e,t,i=null){const{element:{content:n},parts:s}=e;if(null==i)return void n.appendChild(t);const r=document.createTreeWalker(n,133,null,!1);let o=re(s),a=0,l=-1;for(;r.nextNode();){for(l++,r.currentNode===i&&(a=se(t),i.parentNode.insertBefore(t,i));-1!==o&&s[o].index===l;){if(a>0){for(;-1!==o;)s[o].index+=a,o=re(s,o);return}o=re(s,o)}}}(i,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(i){a.insertBefore(o,a.firstChild);const e=new Set;e.add(o),ne(i,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const he={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},pe=(e,t)=>t!==e&&(t==t||e==e),me={attribute:!0,type:String,converter:he,reflect:!1,hasChanged:pe},fe=Promise.resolve(!0);class ge extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=fe,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,i)=>{const n=this._attributeNameForProperty(i,t);void 0!==n&&(this._attributeToPropertyMap.set(n,i),e.push(n))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=me){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[i]},set(t){const n=this[e];this[i]=t,this._requestUpdate(e,n)},configurable:!0,enumerable:!0})}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=pe){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,n=t.converter||he,s="function"==typeof n?n:n.fromAttribute;return s?s(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,n=t.converter;return(n&&n.toAttribute||he.toAttribute)(e,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=32|this._updateState,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=me){const n=this.constructor,s=n._attributeNameForProperty(e,i);if(void 0!==s){const e=n._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(s):this.setAttribute(s,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const i=this.constructor,n=i._attributeToPropertyMap.get(e);if(void 0!==n){const e=i._classProperties.get(n)||me;this._updateState=16|this._updateState,this[n]=i._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let i=!0;if(void 0!==e){const n=this.constructor,s=n._classProperties.get(e)||me;n._valueHasChanged(this[e],t,s.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==s.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,s))):i=!1}!this._hasRequestedUpdate&&i&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=4|this._updateState;const i=this._updatePromise;this._updatePromise=new Promise((i,n)=>{e=i,t=n});try{await i}catch(e){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return 32&this._updateState}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}ge.finalized=!0;
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
const ye=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:n}=t;return{kind:i,elements:n,finisher(t){window.customElements.define(e,t)}}})(e,t),ve=(e,t)=>"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}}:Object.assign({},t,{finisher(i){i.createProperty(t.key,e)}});function _e(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):ve(e,t)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const we="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,be=Symbol();class xe{constructor(e,t){if(t!==be)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(we?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Se=(e,...t)=>{const i=t.reduce((t,i,n)=>t+(e=>{if(e instanceof xe)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[n+1],e[0]);return new xe(i,be)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const $e=e=>e.flat?e.flat(1/0):function e(t,i=[]){for(let n=0,s=t.length;n<s;n++){const s=t[n];Array.isArray(s)?e(s,i):i.push(s)}return i}(e);class Ce extends ge{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){$e(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?we?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof H&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}Ce.finalized=!0,Ce.render=(e,t,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const n=i.scopeName,s=te.has(t),r=ae&&11===t.nodeType&&!!t.host,o=r&&!de.has(n),a=o?document.createDocumentFragment():t;if(((e,t,i)=>{let n=te.get(t);void 0===n&&(k(t,t.firstChild),te.set(t,n=new q(Object.assign({templateFactory:X},i))),n.appendInto(t)),n.setValue(e),n.commit()})(e,a,Object.assign({templateFactory:le(n)},i)),o){const e=te.get(a);te.delete(a);const i=e.value instanceof z?e.value.template:void 0;ue(n,a,i),k(t,t.firstChild),t.appendChild(a),te.set(t,e)}!s&&r&&window.ShadyCSS.styleElement(t.host)};const Pe=(e,t,i,n)=>e.subscribeMessage(({result:e})=>{t[i]=e},{type:"render_template",template:n}),ke=e=>{var t;return null===(t=document.querySelector("home-assistant"))||void 0===t?void 0:t.provideHass(e)},Ne=["animation","icon","name"];let Ee=class extends Ce{constructor(){super(...arguments),this.setConfig=e=>{if(!e)throw new Error("Invalid configuration");this.hass||ke(this),Object.keys(e).forEach(t=>{var i;const n=e[t];if(Ne.includes(t)){if(!this.hass)throw new Error("Hass is undefined!");Pe(null===(i=this.hass)||void 0===i?void 0:i.connection,this,t,n)}else this[t]=e[t]}),this.isGroup="group"===f(e.entity)},this.render=()=>ie`
            <div id="wrapper">
                <button @click=${this._handleButtonClick} type="button">
                    ${this._renderIcon()} ${this._renderFriendlyName()}
                </button>
                <ul class="actions">
                    ${this._renderActionButtons()}
                </ul>
                ${this._renderBadge()}
            </div>
        `,this.shouldUpdate=e=>{var t;if(e.has("actions")||e.has("animation")||e.has("entity")||e.has("group_size")||e.has("icon")||e.has("name"))return!0;if(e.has("hass")){const i=null===(t=this.hass)||void 0===t?void 0:t.states[this.entity],n=e.get("hass");if(i!==(null==n?void 0:n.states[this.entity]))return!0}return!1},this._handleActionButtonClick=(e,t)=>{const[i,n]=e.split(".");return()=>{var e;return null===(e=this.hass)||void 0===e?void 0:e.callService(i,n,t||{entity_id:this.entity})}},this._handleButtonClick=()=>S(this,this.hass,{entity:this.entity,tap_action:{action:"more-info"}},!1,!1),this._renderActionButtons=()=>{var e,t;const i=null===(e=this.hass)||void 0===e?void 0:e.states[this.entity];return((null===(t=this.actions)||void 0===t?void 0:t.filter(({state:e})=>void 0===e||(null==i?void 0:i.state)===e).slice(0,2))||[]).map(({label:e,service:t,service_data:i},n)=>{const s=ie`
                <button
                    @click=${this._handleActionButtonClick(t,i)}
                    type="button"
                >
                    ${e}
                </button>
            `;return n%2!=0?ie`
                    <span></span>
                    ${s}
                `:s})},this._renderIcon=()=>{var e;const t=null===(e=this.hass)||void 0===e?void 0:e.states[this.entity],i=this.icon||(null==t?void 0:t.attributes.icon);return(null==i?void 0:i.startsWith("mdi:"))?ie`
                <ha-icon icon=${i}></ha-icon>
            `:ie`
            <img src=${i} />
        `},this._renderBadge=()=>{var e;if(this.group_size||this.isGroup){const t=null===(e=this.hass)||void 0===e?void 0:e.states[this.entity],i=this.group_size||(null==t?void 0:t.attributes.entity_id.length);return ie`
                <span class="badge">${i}</span>
            `}return ie``},this._renderFriendlyName=()=>{var e;const t=null===(e=this.hass)||void 0===e?void 0:e.states[this.entity];return ie`
            <h4>
                ${this.name||(null==t?void 0:t.attributes.friendly_name)}
            </h4>
        `}}static get styles(){return Se`
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

            #wrapper > button img,
            #wrapper > button svg {
                height: 100%;
                max-height: 50%;
                max-width: 70px;
                width: 100%;
            }

            #wrapper > button h4 {
                color: #131313;
                font-family: 'Product Sans';
                font-size: 1.15rem;
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
                font-weight: 500;
                white-space: nowrap;
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
        `}};e([_e()],Ee.prototype,"actions",void 0),e([_e()],Ee.prototype,"animation",void 0),e([_e()],Ee.prototype,"entity",void 0),e([_e()],Ee.prototype,"group_size",void 0),e([_e()],Ee.prototype,"icon",void 0),e([_e()],Ee.prototype,"name",void 0),e([_e()],Ee.prototype,"hass",void 0),e([_e()],Ee.prototype,"isGroup",void 0),Ee=e([ye("google-home-grid-item")],Ee);"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var Me=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e,t){!function(t,i){e.exports=i()}(0,(function(){var e=[],t=[],i={},n={},s={};function r(e){return"string"==typeof e?new RegExp("^"+e+"$","i"):e}function o(e,t){return e===t?t:e===e.toLowerCase()?t.toLowerCase():e===e.toUpperCase()?t.toUpperCase():e[0]===e[0].toUpperCase()?t.charAt(0).toUpperCase()+t.substr(1).toLowerCase():t.toLowerCase()}function a(e,t){return e.replace(/\$(\d{1,2})/g,(function(e,i){return t[i]||""}))}function l(e,t){return e.replace(t[0],(function(i,n){var s=a(t[1],arguments);return o(""===i?e[n-1]:i,s)}))}function c(e,t,n){if(!e.length||i.hasOwnProperty(e))return t;for(var s=n.length;s--;){var r=n[s];if(r[0].test(t))return l(t,r)}return t}function d(e,t,i){return function(n){var s=n.toLowerCase();return t.hasOwnProperty(s)?o(n,s):e.hasOwnProperty(s)?o(n,e[s]):c(s,n,i)}}function u(e,t,i,n){return function(n){var s=n.toLowerCase();return!!t.hasOwnProperty(s)||!e.hasOwnProperty(s)&&c(s,s,i)===s}}function h(e,t,i){return(i?t+" ":"")+(1===t?h.singular(e):h.plural(e))}return h.plural=d(s,n,e),h.isPlural=u(s,n,e),h.singular=d(n,s,t),h.isSingular=u(n,s,t),h.addPluralRule=function(t,i){e.push([r(t),i])},h.addSingularRule=function(e,i){t.push([r(e),i])},h.addUncountableRule=function(e){"string"!=typeof e?(h.addPluralRule(e,"$0"),h.addSingularRule(e,"$0")):i[e.toLowerCase()]=!0},h.addIrregularRule=function(e,t){t=t.toLowerCase(),e=e.toLowerCase(),s[e]=t,n[t]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach((function(e){return h.addIrregularRule(e[0],e[1])})),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach((function(e){return h.addPluralRule(e[0],e[1])})),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach((function(e){return h.addSingularRule(e[0],e[1])})),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[eé]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(h.addUncountableRule),h}))}));const Te=[];let Ae=class extends Ce{constructor(){super(...arguments),this.setConfig=e=>{if(!e)throw new Error("Invalid configuration");this.hass||ke(this),Object.keys(e).forEach(t=>{var i;const n=e[t];if(Te.includes(t)){if(!this.hass)throw new Error("Hass is undefined!");Pe(null===(i=this.hass)||void 0===i?void 0:i.connection,this,t,n)}else this[t]=e[t]})},this.render=()=>ie`
        <div id="wrapper">
            <h2>${this.title}</h2>
            ${this._renderDeviceCounter()}
            <div class="grid">
                ${this._renderCards()}
            </div>
        </div>
    `,this.shouldUpdate=e=>!!(e.has("cards")||e.has("counter_text")||e.has("disable_counter")||e.has("title")),this._renderCards=()=>{var e;const t=null===(e=this.cards)||void 0===e?void 0:e.map(e=>w(e));return ie`
            ${t}
        `},this._renderDeviceCounter=()=>{var e;if(!0===this.disable_counter)return ie``;const t=Me(this.counter_text||"device",null===(e=this.cards)||void 0===e?void 0:e.length,!0);return ie`
            <h3>${t}</h3>
        `}}static get styles(){return Se`
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
        `}};e([_e()],Ae.prototype,"cards",void 0),e([_e()],Ae.prototype,"counter_text",void 0),e([_e()],Ae.prototype,"disable_counter",void 0),e([_e()],Ae.prototype,"hass",void 0),Ae=e([ye("google-home-grid")],Ae);const De=["color","icon","name"];let Oe=class extends Ce{constructor(){super(...arguments),this.setConfig=e=>{if(!e)throw new Error("Invalid configuration");this.hass||ke(this),Object.keys(e).forEach(t=>{var i;const n=e[t];if(De.includes(t)){if(!this.hass)throw new Error("Hass is undefined!");Pe(null===(i=this.hass)||void 0===i?void 0:i.connection,this,t,n)}else this[t]=e[t]})},this.render=()=>ie`
            <button
                @click=${this._handleButtonClick}
                data-color=${this.color}
                type="button"
            >
                ${this._renderIconWithDerivedStyles()}
                ${this._renderFriendlyName()}
            </button>
        `,this.shouldUpdate=e=>{var t;if(e.has("color")||e.has("entity")||e.has("icon")||e.has("name")||e.has("tap_action"))return!0;if(e.has("hass")){const i=null===(t=this.hass)||void 0===t?void 0:t.states[this.entity],n=e.get("hass");if(i!==(null==n?void 0:n.states[this.entity]))return!0}return!1},this._handleButtonClick=()=>S(this,this.hass,{entity:this.entity,tap_action:this.tap_action||{action:"more-info"}},!1,!1),this._renderIconWithDerivedStyles=()=>{var e;const t=(e=>{switch(e){case"blue":return Se`
                background-color: #e8f0fe;
                border: 1px solid #e8f0fe;
                color: #4285f4;
            `;case"cyan":return Se`
                background-color: #e4f7fb;
                border: 1px solid #e4f7fb;
                color: #12b5cb;
            `;case"dark-green":return Se`
                background-color: #dff1f0;
                border: 1px solid #dff1f0;
                color: #00887a;
            `;case"green":return Se`
                background-color: #e6f4ea;
                border: 1px solid #e6f4ea;
                color: #34a853;
            `;case"indigo":return Se`
                background-color: #e8eaf6;
                border: 1px solid #e8eaf6;
                color: #3f51b5;
            `;case"purple":return Se`
                background-color: #f3e8fd;
                border: 1px solid #f3e8fd;
                color: #ab47bc;
            `;case"red":return Se`
                background-color: #fce8e6;
                border: 1px solid #fce8e6;
                color: #ea4335;
            `;case"yellow":return Se`
                background-color: #fef7e0;
                border: 1px solid #fef7e0;
                color: #af5c00;
            `;case"none":default:return Se`
                color: #5f6268;
                border: 1px solid #acb1b7;
            `}})(this.color),i=null===(e=this.hass)||void 0===e?void 0:e.states[this.entity],n=this.icon||(null==i?void 0:i.attributes.icon);return ie`
            <ha-icon icon=${n} style=${t}></ha-icon>
        `},this._renderFriendlyName=()=>{var e;const t=null===(e=this.hass)||void 0===e?void 0:e.states[this.entity];return ie`
            <span>
                ${this.name||(null==t?void 0:t.attributes.friendly_name)}
            </span>
        `}}static get styles(){return Se`
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
        `}};e([_e()],Oe.prototype,"color",void 0),e([_e()],Oe.prototype,"entity",void 0),e([_e()],Oe.prototype,"icon",void 0),e([_e()],Oe.prototype,"name",void 0),e([_e()],Oe.prototype,"tap_action",void 0),e([_e()],Oe.prototype,"hass",void 0),Oe=e([ye("google-home-menu-item")],Oe);const Ve=[];let Re=class extends Ce{constructor(){super(...arguments),this.setConfig=e=>{if(!e)throw new Error("Invalid configuration");this.hass||ke(this),Object.keys(e).forEach(t=>{var i;const n=e[t];if(Ve.includes(t)){if(!this.hass)throw new Error("Hass is undefined!");Pe(null===(i=this.hass)||void 0===i?void 0:i.connection,this,t,n)}else this[t]=e[t]})},this.render=()=>ie`
        <div id="wrapper">
            <h1>${this.title}</h1>
            <div class="flex">
                ${this._renderCards()}
            </div>
        </div>
    `,this.shouldUpdate=e=>!(!e.has("cards")&&!e.has("title")),this._renderCards=()=>{var e;const t=null===(e=this.cards)||void 0===e?void 0:e.map(e=>w(e));return ie`
            ${t}
        `}}static get styles(){return Se`
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
        `}};e([_e()],Re.prototype,"cards",void 0),e([_e()],Re.prototype,"hass",void 0),Re=e([ye("google-home-menu")],Re);const Ue=[];let ze=class extends Ce{constructor(){super(...arguments),this.setConfig=e=>{if(!e)throw new Error("Invalid configuration");this.hass||ke(this),Object.keys(e).forEach(t=>{var i;const n=e[t];if(Ue.includes(t)){if(!this.hass)throw new Error("Hass is undefined!");Pe(null===(i=this.hass)||void 0===i?void 0:i.connection,this,t,n)}else this[t]=e[t]})},this.render=()=>ie`
        <div id="wrapper">
            <div class="flex">
                ${this._renderCards()}
            </div>
        </div>
    `,this.shouldUpdate=e=>!(!e.has("cards")&&!e.has("title")),this._renderCards=()=>{var e;const t=null===(e=this.cards)||void 0===e?void 0:e.map(e=>w(e));return ie`
            ${t}
        `}}static get styles(){return Se`
            :host {
                /* Override margin added by any of the stack cards this card may be used inside of */
                margin: 0 10px !important;
            }

            #wrapper {
                margin: 0 auto;
                max-width: 640px;
            }

            .flex {
                align-items: center;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                margin: 20px 0;
            }
        `}};e([_e()],ze.prototype,"cards",void 0),e([_e()],ze.prototype,"hass",void 0),ze=e([ye("google-home-settings")],ze);
