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
function e(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o}var t=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,i="[^\\s]+",s=/\[([^]*?)\]/gm;function r(e,t){for(var i=[],s=0,r=e.length;s<r;s++)i.push(e[s].substr(0,t));return i}var n=function(e){return function(t,i){var s=i[e].map((function(e){return e.toLowerCase()})).indexOf(t.toLowerCase());return s>-1?s:null}};function o(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];for(var s=0,r=t;s<r.length;s++){var n=r[s];for(var o in n)e[o]=n[o]}return e}var a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],l=["January","February","March","April","May","June","July","August","September","October","November","December"],c=r(l,3),d={dayNamesShort:r(a,3),dayNames:a,monthNamesShort:c,monthNames:l,amPm:["am","pm"],DoFn:function(e){return e+["th","st","nd","rd"][e%10>3?0:(e-e%10!=10?1:0)*e%10]}},u=o({},d),h=function(e,t){for(void 0===t&&(t=2),e=String(e);e.length<t;)e="0"+e;return e},p={D:function(e){return String(e.getDate())},DD:function(e){return h(e.getDate())},Do:function(e,t){return t.DoFn(e.getDate())},d:function(e){return String(e.getDay())},dd:function(e){return h(e.getDay())},ddd:function(e,t){return t.dayNamesShort[e.getDay()]},dddd:function(e,t){return t.dayNames[e.getDay()]},M:function(e){return String(e.getMonth()+1)},MM:function(e){return h(e.getMonth()+1)},MMM:function(e,t){return t.monthNamesShort[e.getMonth()]},MMMM:function(e,t){return t.monthNames[e.getMonth()]},YY:function(e){return h(String(e.getFullYear()),4).substr(2)},YYYY:function(e){return h(e.getFullYear(),4)},h:function(e){return String(e.getHours()%12||12)},hh:function(e){return h(e.getHours()%12||12)},H:function(e){return String(e.getHours())},HH:function(e){return h(e.getHours())},m:function(e){return String(e.getMinutes())},mm:function(e){return h(e.getMinutes())},s:function(e){return String(e.getSeconds())},ss:function(e){return h(e.getSeconds())},S:function(e){return String(Math.round(e.getMilliseconds()/100))},SS:function(e){return h(Math.round(e.getMilliseconds()/10),2)},SSS:function(e){return h(e.getMilliseconds(),3)},a:function(e,t){return e.getHours()<12?t.amPm[0]:t.amPm[1]},A:function(e,t){return e.getHours()<12?t.amPm[0].toUpperCase():t.amPm[1].toUpperCase()},ZZ:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+h(100*Math.floor(Math.abs(t)/60)+Math.abs(t)%60,4)},Z:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+h(Math.floor(Math.abs(t)/60),2)+":"+h(Math.abs(t)%60,2)}},m=function(e){return+e-1},f=[null,"[1-9]\\d?"],g=[null,i],y=["isPm",i,function(e,t){var i=e.toLowerCase();return i===t.amPm[0]?0:i===t.amPm[1]?1:null}],v=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(e){var t=(e+"").match(/([+-]|\d\d)/gi);if(t){var i=60*+t[1]+parseInt(t[2],10);return"+"===t[0]?i:-i}return 0}],_=(n("monthNamesShort"),n("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var b=function(e,i,r){if(void 0===i&&(i=_.default),void 0===r&&(r={}),"number"==typeof e&&(e=new Date(e)),"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))throw new Error("Invalid Date pass to format");var n=[];i=(i=_[i]||i).replace(s,(function(e,t){return n.push(t),"@@@"}));var a=o(o({},u),r);return(i=i.replace(t,(function(t){return p[t](e,a)}))).replace(/@@@/g,(function(){return n.shift()}))};(function(){try{(new Date).toLocaleDateString("i")}catch(e){return"RangeError"===e.name}})(),function(){try{(new Date).toLocaleString("i")}catch(e){return"RangeError"===e.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(e){return"RangeError"===e.name}}();function w(e){return e.substr(0,e.indexOf("."))}var x=["closed","locked","off"],S=function(e,t,i,s){s=s||{},i=null==i?{}:i;var r=new Event(t,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return r.detail=i,e.dispatchEvent(r),r},$=new Set(["call-service","divider","section","weblink","cast","select"]),P={alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"},C=function(e,t){void 0===t&&(t=!1);var i=function(e,t){return s("hui-error-card",{type:"error",error:e,config:t})},s=function(e,t){var s=window.document.createElement(e);try{s.setConfig(t)}catch(s){return console.error(e,s),i(s.message,t)}return s};if(!e||"object"!=typeof e||!t&&!e.type)return i("No type defined",e);var r=e.type;if(r&&r.startsWith("custom:"))r=r.substr("custom:".length);else if(t)if($.has(r))r="hui-"+r+"-row";else{if(!e.entity)return i("Invalid config given.",e);var n=e.entity.split(".",1)[0];r="hui-"+(P[n]||"text")+"-entity-row"}else r="hui-"+r+"-card";if(customElements.get(r))return s(r,e);var o=i("Custom element doesn't exist: "+e.type+".",e);o.style.display="None";var a=setTimeout((function(){o.style.display=""}),2e3);return customElements.whenDefined(e.type).then((function(){clearTimeout(a),S(o,"ll-rebuild",{},o)})),o},N=function(e){S(window,"haptic",e)},k=function(e,t){return function(e,t,i){void 0===i&&(i=!0);var s,r=w(t),n="group"===r?"homeassistant":r;switch(r){case"lock":s=i?"unlock":"lock";break;case"cover":s=i?"open_cover":"close_cover";break;default:s=i?"turn_on":"turn_off"}return e.callService(n,s,{entity_id:t})}(e,t,x.includes(e.states[t].state))},E=function(e,t,i,s,r){var n;if(r&&i.double_tap_action?n=i.double_tap_action:s&&i.hold_action?n=i.hold_action:!s&&i.tap_action&&(n=i.tap_action),n||(n={action:"more-info"}),!n.confirmation||n.confirmation.exemptions&&n.confirmation.exemptions.some((function(e){return e.user===t.user.id}))||confirm(n.confirmation.text||"Are you sure you want to "+n.action+"?"))switch(n.action){case"more-info":(n.entity||i.entity||i.camera_image)&&(S(e,"hass-more-info",{entityId:n.entity?n.entity:i.entity?i.entity:i.camera_image}),n.haptic&&N(n.haptic));break;case"navigate":n.navigation_path&&(function(e,t,i){void 0===i&&(i=!1),i?history.replaceState(null,"",t):history.pushState(null,"",t),S(window,"location-changed",{replace:i})}(0,n.navigation_path),n.haptic&&N(n.haptic));break;case"url":n.url_path&&window.open(n.url_path),n.haptic&&N(n.haptic);break;case"toggle":i.entity&&(k(t,i.entity),n.haptic&&N(n.haptic));break;case"call-service":if(!n.service)return;var o=n.service.split(".",2),a=o[0],l=o[1],c=Object.assign({},n.service_data);"entity"===c.entity_id&&(c.entity_id=i.entity),t.callService(a,l,c),n.haptic&&N(n.haptic)}};
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
const M="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,T=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},A=`{{lit-${String(Math.random()).slice(2)}}}`,O=`\x3c!--${A}--\x3e`,D=new RegExp(`${A}|${O}`);class U{constructor(e,t){this.parts=[],this.element=t;const i=[],s=[],r=document.createTreeWalker(t.content,133,null,!1);let n=0,o=-1,a=0;const{strings:l,values:{length:c}}=e;for(;a<c;){const e=r.nextNode();if(null!==e){if(o++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let s=0;for(let e=0;e<i;e++)V(t[e].name,"$lit$")&&s++;for(;s-- >0;){const t=l[a],i=Y.exec(t)[2],s=i.toLowerCase()+"$lit$",r=e.getAttribute(s);e.removeAttribute(s);const n=r.split(D);this.parts.push({type:"attribute",index:o,name:i,strings:n}),a+=n.length-1}}"TEMPLATE"===e.tagName&&(s.push(e),r.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(A)>=0){const s=e.parentNode,r=t.split(D),n=r.length-1;for(let t=0;t<n;t++){let i,n=r[t];if(""===n)i=j();else{const e=Y.exec(n);null!==e&&V(e[2],"$lit$")&&(n=n.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),i=document.createTextNode(n)}s.insertBefore(i,e),this.parts.push({type:"node",index:++o})}""===r[n]?(s.insertBefore(j(),e),i.push(e)):e.data=r[n],a+=n}}else if(8===e.nodeType)if(e.data===A){const t=e.parentNode;null!==e.previousSibling&&o!==n||(o++,t.insertBefore(j(),e)),n=o,this.parts.push({type:"node",index:o}),null===e.nextSibling?e.data="":(i.push(e),o--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(A,t+1));)this.parts.push({type:"node",index:-1}),a++}}else r.currentNode=s.pop()}for(const e of i)e.parentNode.removeChild(e)}}const V=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},R=e=>-1!==e.index,j=()=>document.createComment(""),Y=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function z(e,t){const{element:{content:i},parts:s}=e,r=document.createTreeWalker(i,133,null,!1);let n=I(s),o=s[n],a=-1,l=0;const c=[];let d=null;for(;r.nextNode();){a++;const e=r.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==o&&o.index===a;)o.index=null!==d?-1:o.index-l,n=I(s,n),o=s[n]}c.forEach(e=>e.parentNode.removeChild(e))}const H=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,133,null,!1);for(;i.nextNode();)t++;return t},I=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(R(t))return i}return-1};
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
const L=new WeakMap,q=e=>"function"==typeof e&&L.has(e),F={},B={};
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
class W{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=M?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],i=this.template.parts,s=document.createTreeWalker(e,133,null,!1);let r,n=0,o=0,a=s.nextNode();for(;n<i.length;)if(r=i[n],R(r)){for(;o<r.index;)o++,"TEMPLATE"===a.nodeName&&(t.push(a),s.currentNode=a.content),null===(a=s.nextNode())&&(s.currentNode=t.pop(),a=s.nextNode());if("node"===r.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,r.name,r.strings,this.options));n++}else this.__parts.push(void 0),n++;return M&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */const J=` ${A} `;class Z{constructor(e,t,i,s){this.strings=e,this.values=t,this.type=i,this.processor=s}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let s=0;s<e;s++){const e=this.strings[s],r=e.lastIndexOf("\x3c!--");i=(r>-1||i)&&-1===e.indexOf("--\x3e",r+1);const n=Y.exec(e);t+=null===n?e+(i?J:O):e.substr(0,n.index)+n[1]+n[2]+"$lit$"+n[3]+A}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
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
 */const G=e=>null===e||!("object"==typeof e||"function"==typeof e),K=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class Q{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new X(this)}_getValue(){const e=this.strings,t=e.length-1;let i="";for(let s=0;s<t;s++){i+=e[s];const t=this.parts[s];if(void 0!==t){const e=t.value;if(G(e)||!K(e))i+="string"==typeof e?e:String(e);else for(const t of e)i+="string"==typeof t?t:String(t)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class X{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===F||G(e)&&e===this.value||(this.value=e,q(e)||(this.committer.dirty=!0))}commit(){for(;q(this.value);){const e=this.value;this.value=F,e(this)}this.value!==F&&this.committer.commit()}}class ee{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(j()),this.endNode=e.appendChild(j())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=j()),e.__insert(this.endNode=j())}insertAfterPart(e){e.__insert(this.startNode=j()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;q(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=F,e(this)}const e=this.__pendingValue;e!==F&&(G(e)?e!==this.value&&this.__commitText(e):e instanceof Z?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):K(e)?this.__commitIterable(e):e===B?(this.value=B,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof W&&this.value.template===t)this.value.update(e.values);else{const i=new W(t,e.processor,this.options),s=i._clone();i.update(e.values),this.__commitNode(s),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,s=0;for(const r of e)i=t[s],void 0===i&&(i=new ee(this.options),t.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(t[s-1])),i.setValue(r),i.commit(),s++;s<t.length&&(t.length=s,this.clear(i&&i.endNode))}clear(e=this.startNode){T(this.startNode.parentNode,e.nextSibling,this.endNode)}}class te{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;q(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=F,e(this)}if(this.__pendingValue===F)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=F}}class ie extends Q{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new se(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class se extends X{}let re=!1;(()=>{try{const e={get capture(){return re=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class ne{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;q(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=F,e(this)}if(this.__pendingValue===F)return;const e=this.__pendingValue,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),s=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=oe(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=F}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const oe=e=>e&&(re?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
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
 */;function ae(e){let t=le.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},le.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const s=e.strings.join(A);return i=t.keyString.get(s),void 0===i&&(i=new U(e,e.getTemplateElement()),t.keyString.set(s,i)),t.stringsArray.set(e.strings,i),i}const le=new Map,ce=new WeakMap;
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
 */const de=new
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
class{handleAttributeExpressions(e,t,i,s){const r=t[0];if("."===r){return new ie(e,t.slice(1),i).parts}return"@"===r?[new ne(e,t.slice(1),s.eventContext)]:"?"===r?[new te(e,t.slice(1),i)]:new Q(e,t,i).parts}handleTextExpression(e){return new ee(e)}};
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
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const ue=(e,...t)=>new Z(e,t,"html",de)
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
 */,he=(e,t)=>`${e}--${t}`;let pe=!0;void 0===window.ShadyCSS?pe=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),pe=!1);const me=e=>t=>{const i=he(t.type,e);let s=le.get(i);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},le.set(i,s));let r=s.stringsArray.get(t.strings);if(void 0!==r)return r;const n=t.strings.join(A);if(r=s.keyString.get(n),void 0===r){const i=t.getTemplateElement();pe&&window.ShadyCSS.prepareTemplateDom(i,e),r=new U(t,i),s.keyString.set(n,r)}return s.stringsArray.set(t.strings,r),r},fe=["html","svg"],ge=new Set,ye=(e,t,i)=>{ge.add(e);const s=i?i.element:document.createElement("template"),r=t.querySelectorAll("style"),{length:n}=r;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(s,e);const o=document.createElement("style");for(let e=0;e<n;e++){const t=r[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}(e=>{fe.forEach(t=>{const i=le.get(he(t,e));void 0!==i&&i.keyString.forEach(e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{i.add(e)}),z(e,i)})})})(e);const a=s.content;i?function(e,t,i=null){const{element:{content:s},parts:r}=e;if(null==i)return void s.appendChild(t);const n=document.createTreeWalker(s,133,null,!1);let o=I(r),a=0,l=-1;for(;n.nextNode();){for(l++,n.currentNode===i&&(a=H(t),i.parentNode.insertBefore(t,i));-1!==o&&r[o].index===l;){if(a>0){for(;-1!==o;)r[o].index+=a,o=I(r,o);return}o=I(r,o)}}}(i,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(s,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(i){a.insertBefore(o,a.firstChild);const e=new Set;e.add(o),z(i,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const ve={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},_e=(e,t)=>t!==e&&(t==t||e==e),be={attribute:!0,type:String,converter:ve,reflect:!1,hasChanged:_e};class we extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,i)=>{const s=this._attributeNameForProperty(i,t);void 0!==s&&(this._attributeToPropertyMap.set(s,i),e.push(s))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=be){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);void 0!==s&&Object.defineProperty(this.prototype,e,s)}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(i){const s=this[e];this[t]=i,this._requestUpdate(e,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||be}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=_e){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,s=t.converter||ve,r="function"==typeof s?s:s.fromAttribute;return r?r(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,s=t.converter;return(s&&s.toAttribute||ve.toAttribute)(e,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=be){const s=this.constructor,r=s._attributeNameForProperty(e,i);if(void 0!==r){const e=s._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(r):this.setAttribute(r,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const i=this.constructor,s=i._attributeToPropertyMap.get(e);if(void 0!==s){const e=i.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=i._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let i=!0;if(void 0!==e){const s=this.constructor,r=s.getPropertyOptions(e);s._valueHasChanged(this[e],t,r.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==r.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,r))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}we.finalized=!0;
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
const xe=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:s}=t;return{kind:i,elements:s,finisher(t){window.customElements.define(e,t)}}})(e,t),Se=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(i){i.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function $e(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):Se(e,t)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Pe="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ce=Symbol();class Ne{constructor(e,t){if(t!==Ce)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(Pe?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ke=(e,...t)=>{const i=t.reduce((t,i,s)=>t+(e=>{if(e instanceof Ne)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[s+1],e[0]);return new Ne(i,Ce)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const Ee={};class Me extends we{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(void 0===e)this._styles=[];else if(Array.isArray(e)){const t=(e,i)=>e.reduceRight((e,i)=>Array.isArray(i)?t(i,e):(e.add(i),e),i),i=t(e,new Set),s=[];i.forEach(e=>s.unshift(e)),this._styles=s}else this._styles=[e]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Pe?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==Ee&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return Ee}}Me.finalized=!0,Me.render=(e,t,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const s=i.scopeName,r=ce.has(t),n=pe&&11===t.nodeType&&!!t.host,o=n&&!ge.has(s),a=o?document.createDocumentFragment():t;if(((e,t,i)=>{let s=ce.get(t);void 0===s&&(T(t,t.firstChild),ce.set(t,s=new ee(Object.assign({templateFactory:ae},i))),s.appendInto(t)),s.setValue(e),s.commit()})(e,a,Object.assign({templateFactory:me(s)},i)),o){const e=ce.get(a);ce.delete(a);const i=e.value instanceof W?e.value.template:void 0;ye(s,a,i),T(t,t.firstChild),t.appendChild(a),ce.set(t,e)}!r&&n&&window.ShadyCSS.styleElement(t.host)};const Te=(e,t,i,s)=>e.subscribeMessage(({result:e})=>{t[i]=e},{type:"render_template",template:s}),Ae=e=>{var t;return null===(t=document.querySelector("home-assistant"))||void 0===t?void 0:t.provideHass(e)},Oe=["animation","icon","name"];let De=class extends Me{constructor(){super(...arguments),this.setConfig=e=>{if(!e)throw new Error("Invalid configuration");this.hass||Ae(this),Object.keys(e).forEach(t=>{var i;const s=e[t];if(Oe.includes(t)){if(!this.hass)throw new Error("Hass is undefined!");Te(null===(i=this.hass)||void 0===i?void 0:i.connection,this,t,s)}else this[t]=e[t]}),this.isGroup="group"===w(e.entity)},this.render=()=>ue`
            <div id="wrapper">
                <button @click=${this._handleButtonClick} type="button">
                    ${this._renderIcon()} ${this._renderFriendlyName()}
                </button>
                <ul class="actions">
                    ${this._renderActionButtons()}
                </ul>
                ${this._renderBadge()}
            </div>
        `,this.shouldUpdate=e=>{var t;if(e.has("actions")||e.has("animation")||e.has("entity")||e.has("group_size")||e.has("icon")||e.has("name"))return!0;if(e.has("hass")){const i=null===(t=this.hass)||void 0===t?void 0:t.states[this.entity],s=e.get("hass");if(i!==(null==s?void 0:s.states[this.entity]))return!0}return!1},this._handleActionButtonClick=(e,t)=>{const[i,s]=e.split(".");return()=>{var e;return null===(e=this.hass)||void 0===e?void 0:e.callService(i,s,t||{entity_id:this.entity})}},this._handleButtonClick=()=>E(this,this.hass,{entity:this.entity,tap_action:{action:"more-info"}},!1,!1),this._renderActionButtons=()=>{var e,t;const i=null===(e=this.hass)||void 0===e?void 0:e.states[this.entity];return((null===(t=this.actions)||void 0===t?void 0:t.filter(({state:e})=>void 0===e||(null==i?void 0:i.state)===e).slice(0,2))||[]).map(({label:e,service:t,service_data:i},s)=>{const r=ue`
                <button
                    @click=${this._handleActionButtonClick(t,i)}
                    type="button"
                >
                    ${e}
                </button>
            `;return s%2!=0?ue`
                    <span></span>
                    ${r}
                `:r})},this._renderIcon=()=>{var e;const t=null===(e=this.hass)||void 0===e?void 0:e.states[this.entity],i=this.icon||(null==t?void 0:t.attributes.icon);return(null==i?void 0:i.startsWith("mdi:"))?ue` <ha-icon icon=${i}></ha-icon> `:ue` <img src=${i} /> `},this._renderBadge=()=>{var e;if(this.group_size||this.isGroup){const t=null===(e=this.hass)||void 0===e?void 0:e.states[this.entity],i=this.group_size||(null==t?void 0:t.attributes.entity_id.length);return ue` <span class="badge">${i}</span> `}return ue``},this._renderFriendlyName=()=>{var e;const t=null===(e=this.hass)||void 0===e?void 0:e.states[this.entity];return ue`
            <h4>
                ${this.name||(null==t?void 0:t.attributes.friendly_name)}
            </h4>
        `}}static get styles(){return ke`
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
                color: var(--primary-text-color, #131313);
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
                color: var(--primary-color, #4285f4);
                flex: 0;
                font-weight: 500;
                white-space: nowrap;
            }

            .actions span {
                background-color: var(--material-divider-color, #dadce0);
                border-radius: 100%;
                height: 4px;
                width: 4px;
            }

            .badge {
                border: 1px solid var(--material-divider-color, #dadce0);
                border-radius: 100%;
                color: var(--primary-text-color, #131313);
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
        `}};e([$e()],De.prototype,"actions",void 0),e([$e()],De.prototype,"animation",void 0),e([$e()],De.prototype,"entity",void 0),e([$e()],De.prototype,"group_size",void 0),e([$e()],De.prototype,"icon",void 0),e([$e()],De.prototype,"name",void 0),e([$e()],De.prototype,"hass",void 0),e([$e()],De.prototype,"isGroup",void 0),De=e([xe("google-home-grid-item")],De);"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var Ue=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e,t){!function(t,i){e.exports=i()}(0,(function(){var e=[],t=[],i={},s={},r={};function n(e){return"string"==typeof e?new RegExp("^"+e+"$","i"):e}function o(e,t){return e===t?t:e===e.toLowerCase()?t.toLowerCase():e===e.toUpperCase()?t.toUpperCase():e[0]===e[0].toUpperCase()?t.charAt(0).toUpperCase()+t.substr(1).toLowerCase():t.toLowerCase()}function a(e,t){return e.replace(/\$(\d{1,2})/g,(function(e,i){return t[i]||""}))}function l(e,t){return e.replace(t[0],(function(i,s){var r=a(t[1],arguments);return o(""===i?e[s-1]:i,r)}))}function c(e,t,s){if(!e.length||i.hasOwnProperty(e))return t;for(var r=s.length;r--;){var n=s[r];if(n[0].test(t))return l(t,n)}return t}function d(e,t,i){return function(s){var r=s.toLowerCase();return t.hasOwnProperty(r)?o(s,r):e.hasOwnProperty(r)?o(s,e[r]):c(r,s,i)}}function u(e,t,i,s){return function(s){var r=s.toLowerCase();return!!t.hasOwnProperty(r)||!e.hasOwnProperty(r)&&c(r,r,i)===r}}function h(e,t,i){return(i?t+" ":"")+(1===t?h.singular(e):h.plural(e))}return h.plural=d(r,s,e),h.isPlural=u(r,s,e),h.singular=d(s,r,t),h.isSingular=u(s,r,t),h.addPluralRule=function(t,i){e.push([n(t),i])},h.addSingularRule=function(e,i){t.push([n(e),i])},h.addUncountableRule=function(e){"string"!=typeof e?(h.addPluralRule(e,"$0"),h.addSingularRule(e,"$0")):i[e.toLowerCase()]=!0},h.addIrregularRule=function(e,t){t=t.toLowerCase(),e=e.toLowerCase(),r[e]=t,s[t]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach((function(e){return h.addIrregularRule(e[0],e[1])})),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach((function(e){return h.addPluralRule(e[0],e[1])})),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach((function(e){return h.addSingularRule(e[0],e[1])})),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[eé]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(h.addUncountableRule),h}))}));const Ve=[];let Re=class extends Me{constructor(){super(...arguments),this.setConfig=e=>{if(!e)throw new Error("Invalid configuration");this.hass||Ae(this),Object.keys(e).forEach(t=>{var i;const s=e[t];if(Ve.includes(t)){if(!this.hass)throw new Error("Hass is undefined!");Te(null===(i=this.hass)||void 0===i?void 0:i.connection,this,t,s)}else this[t]=e[t]})},this.render=()=>ue`
        <div id="wrapper">
            <h2>${this.title}</h2>
            ${this._renderDeviceCounter()}
            <div class="grid">
                ${this._renderCards()}
            </div>
        </div>
    `,this.shouldUpdate=e=>!!(e.has("cards")||e.has("counter_text")||e.has("disable_counter")||e.has("title")),this._renderCards=()=>{var e;const t=null===(e=this.cards)||void 0===e?void 0:e.map(e=>C(e));return ue` ${t} `},this._renderDeviceCounter=()=>{var e;if(!0===this.disable_counter)return ue``;const t=Ue(this.counter_text||"device",null===(e=this.cards)||void 0===e?void 0:e.length,!0);return ue` <h3>${t}</h3> `}}static get styles(){return ke`
            :host {
                /* Override margin added by any of the stack cards this card may be used inside of */
                margin: 0 10px !important;
            }

            #wrapper {
                border-top: 1px solid var(--material-divider-color, #dadce0);
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
                color: var(--primary-text-color, #131313);
                font-size: 1.4rem;
                font-weight: 500;
                margin: 0;
            }

            h3 {
                color: var(--secondary-text-color, #616870);
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
        `}};e([$e()],Re.prototype,"cards",void 0),e([$e()],Re.prototype,"counter_text",void 0),e([$e()],Re.prototype,"disable_counter",void 0),e([$e()],Re.prototype,"hass",void 0),Re=e([xe("google-home-grid")],Re);const je=["color","icon","name"];let Ye=class extends Me{constructor(){super(...arguments),this.setConfig=e=>{if(!e)throw new Error("Invalid configuration");this.hass||Ae(this),Object.keys(e).forEach(t=>{var i;const s=e[t];if(je.includes(t)){if(!this.hass)throw new Error("Hass is undefined!");Te(null===(i=this.hass)||void 0===i?void 0:i.connection,this,t,s)}else this[t]=e[t]})},this.render=()=>ue`
            <button
                @click=${this._handleButtonClick}
                data-color=${this.color}
                type="button"
            >
                ${this._renderIconWithDerivedStyles()}
                ${this._renderFriendlyName()}
            </button>
        `,this.shouldUpdate=e=>{var t;if(e.has("color")||e.has("entity")||e.has("icon")||e.has("name")||e.has("tap_action"))return!0;if(e.has("hass")){const i=null===(t=this.hass)||void 0===t?void 0:t.states[this.entity],s=e.get("hass");if(i!==(null==s?void 0:s.states[this.entity]))return!0}return!1},this._handleButtonClick=()=>E(this,this.hass,{entity:this.entity,tap_action:this.tap_action||{action:"more-info"}},!1,!1),this._renderIconWithDerivedStyles=()=>{var e;const t=(e=>{switch(e){case"blue":return ke`
                background-color: #e8f0fe;
                border: 1px solid #e8f0fe;
                color: #4285f4;
            `;case"cyan":return ke`
                background-color: #e4f7fb;
                border: 1px solid #e4f7fb;
                color: #12b5cb;
            `;case"dark-green":return ke`
                background-color: #dff1f0;
                border: 1px solid #dff1f0;
                color: #00887a;
            `;case"green":return ke`
                background-color: #e6f4ea;
                border: 1px solid #e6f4ea;
                color: #34a853;
            `;case"indigo":return ke`
                background-color: #e8eaf6;
                border: 1px solid #e8eaf6;
                color: #3f51b5;
            `;case"purple":return ke`
                background-color: #f3e8fd;
                border: 1px solid #f3e8fd;
                color: #ab47bc;
            `;case"red":return ke`
                background-color: #fce8e6;
                border: 1px solid #fce8e6;
                color: #ea4335;
            `;case"yellow":return ke`
                background-color: #fef7e0;
                border: 1px solid #fef7e0;
                color: #af5c00;
            `;case"none":default:return ke`
                color: #5f6268;
                border: 1px solid #acb1b7;
            `}})(this.color),i=null===(e=this.hass)||void 0===e?void 0:e.states[this.entity],s=this.icon||(null==i?void 0:i.attributes.icon);return ue` <ha-icon icon=${s} style=${t}></ha-icon> `},this._renderFriendlyName=()=>{var e;const t=null===(e=this.hass)||void 0===e?void 0:e.states[this.entity];return ue`
            <span>
                ${this.name||(null==t?void 0:t.attributes.friendly_name)}
            </span>
        `}}static get styles(){return ke`
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
                color: var(--secondary-text-color, #616870);
                margin-top: 6px;
            }
        `}};e([$e()],Ye.prototype,"color",void 0),e([$e()],Ye.prototype,"entity",void 0),e([$e()],Ye.prototype,"icon",void 0),e([$e()],Ye.prototype,"name",void 0),e([$e()],Ye.prototype,"tap_action",void 0),e([$e()],Ye.prototype,"hass",void 0),Ye=e([xe("google-home-menu-item")],Ye);const ze=[];let He=class extends Me{constructor(){super(...arguments),this.setConfig=e=>{if(!e)throw new Error("Invalid configuration");this.hass||Ae(this),Object.keys(e).forEach(t=>{var i;const s=e[t];if(ze.includes(t)){if(!this.hass)throw new Error("Hass is undefined!");Te(null===(i=this.hass)||void 0===i?void 0:i.connection,this,t,s)}else this[t]=e[t]})},this.render=()=>ue`
        <div id="wrapper">
            <h1>${this.title}</h1>
            <div class="flex">
                ${this._renderCards()}
            </div>
        </div>
    `,this.shouldUpdate=e=>!(!e.has("cards")&&!e.has("title")),this._renderCards=()=>{var e;const t=null===(e=this.cards)||void 0===e?void 0:e.map(e=>C(e));return ue` ${t} `}}static get styles(){return ke`
            :host {
                /* Override margin added by any of the stack cards this card may be used inside of */
                margin: 0 10px !important;
            }

            #wrapper {
                margin: 0 auto;
                max-width: 960px;
            }

            h1 {
                color: var(--primary-text-color, #131313);
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
        `}};e([$e()],He.prototype,"cards",void 0),e([$e()],He.prototype,"hass",void 0),He=e([xe("google-home-menu")],He);const Ie=[];let Le=class extends Me{constructor(){super(...arguments),this.setConfig=e=>{if(!e)throw new Error("Invalid configuration");this.hass||Ae(this),Object.keys(e).forEach(t=>{var i;const s=e[t];if(Ie.includes(t)){if(!this.hass)throw new Error("Hass is undefined!");Te(null===(i=this.hass)||void 0===i?void 0:i.connection,this,t,s)}else this[t]=e[t]})},this.render=()=>ue`
        <div id="wrapper">
            <div class="flex">
                ${this._renderCards()}
            </div>
        </div>
    `,this.shouldUpdate=e=>!(!e.has("cards")&&!e.has("title")),this._renderCards=()=>{var e;const t=null===(e=this.cards)||void 0===e?void 0:e.map(e=>C(e));return ue`
            ${t}
        `}}static get styles(){return ke`
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
        `}};e([$e()],Le.prototype,"cards",void 0),e([$e()],Le.prototype,"hass",void 0),Le=e([xe("google-home-settings")],Le);
