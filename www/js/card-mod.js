function e() {
  return document.querySelector("hc-main")
    ? document.querySelector("hc-main").hass
    : document.querySelector("home-assistant")
    ? document.querySelector("home-assistant").hass
    : void 0;
}
function t(e, t, s = null) {
  if (
    (((e = new Event(e, { bubbles: !0, cancelable: !1, composed: !0 })).detail =
      t || {}),
    s)
  )
    s.dispatchEvent(e);
  else {
    var n = (function () {
      var e = document.querySelector("hc-main");
      return e
        ? ((e =
            (e = (e = e && e.shadowRoot) && e.querySelector("hc-lovelace")) &&
            e.shadowRoot) &&
            e.querySelector("hui-view")) ||
            e.querySelector("hui-panel-view")
        : (e =
            (e =
              (e =
                (e =
                  (e =
                    (e =
                      (e =
                        ((e =
                          (e =
                            (e =
                              (e =
                                (e =
                                  document.querySelector("home-assistant")) &&
                                e.shadowRoot) &&
                              e.querySelector("home-assistant-main")) &&
                            e.shadowRoot) &&
                          e.querySelector(
                            "app-drawer-layout partial-panel-resolver"
                          )) &&
                          e.shadowRoot) ||
                        e) && e.querySelector("ha-panel-lovelace")) &&
                    e.shadowRoot) && e.querySelector("hui-root")) &&
                e.shadowRoot) && e.querySelector("ha-app-layout")) &&
            e.querySelector("#view")) && e.firstElementChild;
    })();
    n && n.dispatchEvent(e);
  }
}
const s =
    "undefined" != typeof window &&
    null != window.customElements &&
    void 0 !== window.customElements.polyfillWrapFlushCallback,
  n = (e, t, s = null) => {
    for (; t !== s; ) {
      const s = t.nextSibling;
      e.removeChild(t), (t = s);
    }
  },
  o = `{{lit-${String(Math.random()).slice(2)}}}`,
  i = `\x3c!--${o}--\x3e`,
  r = new RegExp(`${o}|${i}`);
class a {
  constructor(e, t) {
    (this.parts = []), (this.element = t);
    const s = [],
      n = [],
      i = document.createTreeWalker(t.content, 133, null, !1);
    let a = 0,
      l = -1,
      p = 0;
    const {
      strings: u,
      values: { length: m },
    } = e;
    for (; p < m; ) {
      const e = i.nextNode();
      if (null !== e) {
        if ((l++, 1 === e.nodeType)) {
          if (e.hasAttributes()) {
            const t = e.attributes,
              { length: s } = t;
            let n = 0;
            for (let e = 0; e < s; e++) d(t[e].name, "$lit$") && n++;
            for (; n-- > 0; ) {
              const t = u[p],
                s = h.exec(t)[2],
                n = s.toLowerCase() + "$lit$",
                o = e.getAttribute(n);
              e.removeAttribute(n);
              const i = o.split(r);
              this.parts.push({
                type: "attribute",
                index: l,
                name: s,
                strings: i,
              }),
                (p += i.length - 1);
            }
          }
          "TEMPLATE" === e.tagName && (n.push(e), (i.currentNode = e.content));
        } else if (3 === e.nodeType) {
          const t = e.data;
          if (t.indexOf(o) >= 0) {
            const n = e.parentNode,
              o = t.split(r),
              i = o.length - 1;
            for (let t = 0; t < i; t++) {
              let s,
                i = o[t];
              if ("" === i) s = c();
              else {
                const e = h.exec(i);
                null !== e &&
                  d(e[2], "$lit$") &&
                  (i =
                    i.slice(0, e.index) +
                    e[1] +
                    e[2].slice(0, -"$lit$".length) +
                    e[3]),
                  (s = document.createTextNode(i));
              }
              n.insertBefore(s, e),
                this.parts.push({ type: "node", index: ++l });
            }
            "" === o[i] ? (n.insertBefore(c(), e), s.push(e)) : (e.data = o[i]),
              (p += i);
          }
        } else if (8 === e.nodeType)
          if (e.data === o) {
            const t = e.parentNode;
            (null !== e.previousSibling && l !== a) ||
              (l++, t.insertBefore(c(), e)),
              (a = l),
              this.parts.push({ type: "node", index: l }),
              null === e.nextSibling ? (e.data = "") : (s.push(e), l--),
              p++;
          } else {
            let t = -1;
            for (; -1 !== (t = e.data.indexOf(o, t + 1)); )
              this.parts.push({ type: "node", index: -1 }), p++;
          }
      } else i.currentNode = n.pop();
    }
    for (const e of s) e.parentNode.removeChild(e);
  }
}
const d = (e, t) => {
    const s = e.length - t.length;
    return s >= 0 && e.slice(s) === t;
  },
  l = (e) => -1 !== e.index,
  c = () => document.createComment(""),
  h =
    /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
function p(e, t) {
  const {
      element: { content: s },
      parts: n,
    } = e,
    o = document.createTreeWalker(s, 133, null, !1);
  let i = m(n),
    r = n[i],
    a = -1,
    d = 0;
  const l = [];
  let c = null;
  for (; o.nextNode(); ) {
    a++;
    const e = o.currentNode;
    for (
      e.previousSibling === c && (c = null),
        t.has(e) && (l.push(e), null === c && (c = e)),
        null !== c && d++;
      void 0 !== r && r.index === a;

    )
      (r.index = null !== c ? -1 : r.index - d), (i = m(n, i)), (r = n[i]);
  }
  l.forEach((e) => e.parentNode.removeChild(e));
}
const u = (e) => {
    let t = 11 === e.nodeType ? 0 : 1;
    const s = document.createTreeWalker(e, 133, null, !1);
    for (; s.nextNode(); ) t++;
    return t;
  },
  m = (e, t = -1) => {
    for (let s = t + 1; s < e.length; s++) {
      const t = e[s];
      if (l(t)) return s;
    }
    return -1;
  };
const f = new WeakMap(),
  y = (e) => "function" == typeof e && f.has(e),
  _ = {},
  g = {};
class v {
  constructor(e, t, s) {
    (this.__parts = []),
      (this.template = e),
      (this.processor = t),
      (this.options = s);
  }
  update(e) {
    let t = 0;
    for (const s of this.__parts) void 0 !== s && s.setValue(e[t]), t++;
    for (const e of this.__parts) void 0 !== e && e.commit();
  }
  _clone() {
    const e = s
        ? this.template.element.content.cloneNode(!0)
        : document.importNode(this.template.element.content, !0),
      t = [],
      n = this.template.parts,
      o = document.createTreeWalker(e, 133, null, !1);
    let i,
      r = 0,
      a = 0,
      d = o.nextNode();
    for (; r < n.length; )
      if (((i = n[r]), l(i))) {
        for (; a < i.index; )
          a++,
            "TEMPLATE" === d.nodeName &&
              (t.push(d), (o.currentNode = d.content)),
            null === (d = o.nextNode()) &&
              ((o.currentNode = t.pop()), (d = o.nextNode()));
        if ("node" === i.type) {
          const e = this.processor.handleTextExpression(this.options);
          e.insertAfterNode(d.previousSibling), this.__parts.push(e);
        } else
          this.__parts.push(
            ...this.processor.handleAttributeExpressions(
              d,
              i.name,
              i.strings,
              this.options
            )
          );
        r++;
      } else this.__parts.push(void 0), r++;
    return s && (document.adoptNode(e), customElements.upgrade(e)), e;
  }
}
const w =
    window.trustedTypes &&
    trustedTypes.createPolicy("lit-html", { createHTML: (e) => e }),
  S = ` ${o} `;
class b {
  constructor(e, t, s, n) {
    (this.strings = e),
      (this.values = t),
      (this.type = s),
      (this.processor = n);
  }
  getHTML() {
    const e = this.strings.length - 1;
    let t = "",
      s = !1;
    for (let n = 0; n < e; n++) {
      const e = this.strings[n],
        r = e.lastIndexOf("\x3c!--");
      s = (r > -1 || s) && -1 === e.indexOf("--\x3e", r + 1);
      const a = h.exec(e);
      t +=
        null === a
          ? e + (s ? S : i)
          : e.substr(0, a.index) + a[1] + a[2] + "$lit$" + a[3] + o;
    }
    return (t += this.strings[e]), t;
  }
  getTemplateElement() {
    const e = document.createElement("template");
    let t = this.getHTML();
    return void 0 !== w && (t = w.createHTML(t)), (e.innerHTML = t), e;
  }
}
const E = (e) =>
    null === e || !("object" == typeof e || "function" == typeof e),
  C = (e) => Array.isArray(e) || !(!e || !e[Symbol.iterator]);
class N {
  constructor(e, t, s) {
    (this.dirty = !0),
      (this.element = e),
      (this.name = t),
      (this.strings = s),
      (this.parts = []);
    for (let e = 0; e < s.length - 1; e++) this.parts[e] = this._createPart();
  }
  _createPart() {
    return new P(this);
  }
  _getValue() {
    const e = this.strings,
      t = e.length - 1,
      s = this.parts;
    if (1 === t && "" === e[0] && "" === e[1]) {
      const e = s[0].value;
      if ("symbol" == typeof e) return String(e);
      if ("string" == typeof e || !C(e)) return e;
    }
    let n = "";
    for (let o = 0; o < t; o++) {
      n += e[o];
      const t = s[o];
      if (void 0 !== t) {
        const e = t.value;
        if (E(e) || !C(e)) n += "string" == typeof e ? e : String(e);
        else for (const t of e) n += "string" == typeof t ? t : String(t);
      }
    }
    return (n += e[t]), n;
  }
  commit() {
    this.dirty &&
      ((this.dirty = !1),
      this.element.setAttribute(this.name, this._getValue()));
  }
}
class P {
  constructor(e) {
    (this.value = void 0), (this.committer = e);
  }
  setValue(e) {
    e === _ ||
      (E(e) && e === this.value) ||
      ((this.value = e), y(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; y(this.value); ) {
      const e = this.value;
      (this.value = _), e(this);
    }
    this.value !== _ && this.committer.commit();
  }
}
class x {
  constructor(e) {
    (this.value = void 0), (this.__pendingValue = void 0), (this.options = e);
  }
  appendInto(e) {
    (this.startNode = e.appendChild(c())), (this.endNode = e.appendChild(c()));
  }
  insertAfterNode(e) {
    (this.startNode = e), (this.endNode = e.nextSibling);
  }
  appendIntoPart(e) {
    e.__insert((this.startNode = c())), e.__insert((this.endNode = c()));
  }
  insertAfterPart(e) {
    e.__insert((this.startNode = c())),
      (this.endNode = e.endNode),
      (e.endNode = this.startNode);
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    if (null === this.startNode.parentNode) return;
    for (; y(this.__pendingValue); ) {
      const e = this.__pendingValue;
      (this.__pendingValue = _), e(this);
    }
    const e = this.__pendingValue;
    e !== _ &&
      (E(e)
        ? e !== this.value && this.__commitText(e)
        : e instanceof b
        ? this.__commitTemplateResult(e)
        : e instanceof Node
        ? this.__commitNode(e)
        : C(e)
        ? this.__commitIterable(e)
        : e === g
        ? ((this.value = g), this.clear())
        : this.__commitText(e));
  }
  __insert(e) {
    this.endNode.parentNode.insertBefore(e, this.endNode);
  }
  __commitNode(e) {
    this.value !== e && (this.clear(), this.__insert(e), (this.value = e));
  }
  __commitText(e) {
    const t = this.startNode.nextSibling,
      s = "string" == typeof (e = null == e ? "" : e) ? e : String(e);
    t === this.endNode.previousSibling && 3 === t.nodeType
      ? (t.data = s)
      : this.__commitNode(document.createTextNode(s)),
      (this.value = e);
  }
  __commitTemplateResult(e) {
    const t = this.options.templateFactory(e);
    if (this.value instanceof v && this.value.template === t)
      this.value.update(e.values);
    else {
      const s = new v(t, e.processor, this.options),
        n = s._clone();
      s.update(e.values), this.__commitNode(n), (this.value = s);
    }
  }
  __commitIterable(e) {
    Array.isArray(this.value) || ((this.value = []), this.clear());
    const t = this.value;
    let s,
      n = 0;
    for (const o of e)
      (s = t[n]),
        void 0 === s &&
          ((s = new x(this.options)),
          t.push(s),
          0 === n ? s.appendIntoPart(this) : s.insertAfterPart(t[n - 1])),
        s.setValue(o),
        s.commit(),
        n++;
    n < t.length && ((t.length = n), this.clear(s && s.endNode));
  }
  clear(e = this.startNode) {
    n(this.startNode.parentNode, e.nextSibling, this.endNode);
  }
}
class T {
  constructor(e, t, s) {
    if (
      ((this.value = void 0),
      (this.__pendingValue = void 0),
      2 !== s.length || "" !== s[0] || "" !== s[1])
    )
      throw new Error(
        "Boolean attributes can only contain a single expression"
      );
    (this.element = e), (this.name = t), (this.strings = s);
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; y(this.__pendingValue); ) {
      const e = this.__pendingValue;
      (this.__pendingValue = _), e(this);
    }
    if (this.__pendingValue === _) return;
    const e = !!this.__pendingValue;
    this.value !== e &&
      (e
        ? this.element.setAttribute(this.name, "")
        : this.element.removeAttribute(this.name),
      (this.value = e)),
      (this.__pendingValue = _);
  }
}
class A extends N {
  constructor(e, t, s) {
    super(e, t, s),
      (this.single = 2 === s.length && "" === s[0] && "" === s[1]);
  }
  _createPart() {
    return new O(this);
  }
  _getValue() {
    return this.single ? this.parts[0].value : super._getValue();
  }
  commit() {
    this.dirty &&
      ((this.dirty = !1), (this.element[this.name] = this._getValue()));
  }
}
class O extends P {}
let M = !1;
(() => {
  try {
    const e = {
      get capture() {
        return (M = !0), !1;
      },
    };
    window.addEventListener("test", e, e),
      window.removeEventListener("test", e, e);
  } catch (e) {}
})();
class U {
  constructor(e, t, s) {
    (this.value = void 0),
      (this.__pendingValue = void 0),
      (this.element = e),
      (this.eventName = t),
      (this.eventContext = s),
      (this.__boundHandleEvent = (e) => this.handleEvent(e));
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; y(this.__pendingValue); ) {
      const e = this.__pendingValue;
      (this.__pendingValue = _), e(this);
    }
    if (this.__pendingValue === _) return;
    const e = this.__pendingValue,
      t = this.value,
      s =
        null == e ||
        (null != t &&
          (e.capture !== t.capture ||
            e.once !== t.once ||
            e.passive !== t.passive)),
      n = null != e && (null == t || s);
    s &&
      this.element.removeEventListener(
        this.eventName,
        this.__boundHandleEvent,
        this.__options
      ),
      n &&
        ((this.__options = R(e)),
        this.element.addEventListener(
          this.eventName,
          this.__boundHandleEvent,
          this.__options
        )),
      (this.value = e),
      (this.__pendingValue = _);
  }
  handleEvent(e) {
    "function" == typeof this.value
      ? this.value.call(this.eventContext || this.element, e)
      : this.value.handleEvent(e);
  }
}
const R = (e) =>
  e &&
  (M ? { capture: e.capture, passive: e.passive, once: e.once } : e.capture);
function D(e) {
  let t = $.get(e.type);
  void 0 === t &&
    ((t = { stringsArray: new WeakMap(), keyString: new Map() }),
    $.set(e.type, t));
  let s = t.stringsArray.get(e.strings);
  if (void 0 !== s) return s;
  const n = e.strings.join(o);
  return (
    (s = t.keyString.get(n)),
    void 0 === s &&
      ((s = new a(e, e.getTemplateElement())), t.keyString.set(n, s)),
    t.stringsArray.set(e.strings, s),
    s
  );
}
const $ = new Map(),
  k = new WeakMap();
const V = new (class {
  handleAttributeExpressions(e, t, s, n) {
    const o = t[0];
    if ("." === o) {
      return new A(e, t.slice(1), s).parts;
    }
    if ("@" === o) return [new U(e, t.slice(1), n.eventContext)];
    if ("?" === o) return [new T(e, t.slice(1), s)];
    return new N(e, t, s).parts;
  }
  handleTextExpression(e) {
    return new x(e);
  }
})();
"undefined" != typeof window &&
  (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.3.0");
const q = (e, ...t) => new b(e, t, "html", V),
  L = (e, t) => `${e}--${t}`;
let I = !0;
void 0 === window.ShadyCSS
  ? (I = !1)
  : void 0 === window.ShadyCSS.prepareTemplateDom &&
    (console.warn(
      "Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."
    ),
    (I = !1));
const j = (e) => (t) => {
    const s = L(t.type, e);
    let n = $.get(s);
    void 0 === n &&
      ((n = { stringsArray: new WeakMap(), keyString: new Map() }),
      $.set(s, n));
    let i = n.stringsArray.get(t.strings);
    if (void 0 !== i) return i;
    const r = t.strings.join(o);
    if (((i = n.keyString.get(r)), void 0 === i)) {
      const s = t.getTemplateElement();
      I && window.ShadyCSS.prepareTemplateDom(s, e),
        (i = new a(t, s)),
        n.keyString.set(r, i);
    }
    return n.stringsArray.set(t.strings, i), i;
  },
  z = ["html", "svg"],
  H = new Set(),
  J = (e, t, s) => {
    H.add(e);
    const n = s ? s.element : document.createElement("template"),
      o = t.querySelectorAll("style"),
      { length: i } = o;
    if (0 === i) return void window.ShadyCSS.prepareTemplateStyles(n, e);
    const r = document.createElement("style");
    for (let e = 0; e < i; e++) {
      const t = o[e];
      t.parentNode.removeChild(t), (r.textContent += t.textContent);
    }
    ((e) => {
      z.forEach((t) => {
        const s = $.get(L(t, e));
        void 0 !== s &&
          s.keyString.forEach((e) => {
            const {
                element: { content: t },
              } = e,
              s = new Set();
            Array.from(t.querySelectorAll("style")).forEach((e) => {
              s.add(e);
            }),
              p(e, s);
          });
      });
    })(e);
    const a = n.content;
    s
      ? (function (e, t, s = null) {
          const {
            element: { content: n },
            parts: o,
          } = e;
          if (null == s) return void n.appendChild(t);
          const i = document.createTreeWalker(n, 133, null, !1);
          let r = m(o),
            a = 0,
            d = -1;
          for (; i.nextNode(); )
            for (
              d++,
                i.currentNode === s &&
                  ((a = u(t)), s.parentNode.insertBefore(t, s));
              -1 !== r && o[r].index === d;

            ) {
              if (a > 0) {
                for (; -1 !== r; ) (o[r].index += a), (r = m(o, r));
                return;
              }
              r = m(o, r);
            }
        })(s, r, a.firstChild)
      : a.insertBefore(r, a.firstChild),
      window.ShadyCSS.prepareTemplateStyles(n, e);
    const d = a.querySelector("style");
    if (window.ShadyCSS.nativeShadow && null !== d)
      t.insertBefore(d.cloneNode(!0), t.firstChild);
    else if (s) {
      a.insertBefore(r, a.firstChild);
      const e = new Set();
      e.add(r), p(s, e);
    }
  };
window.JSCompiler_renameProperty = (e, t) => e;
const F = {
    toAttribute(e, t) {
      switch (t) {
        case Boolean:
          return e ? "" : null;
        case Object:
        case Array:
          return null == e ? e : JSON.stringify(e);
      }
      return e;
    },
    fromAttribute(e, t) {
      switch (t) {
        case Boolean:
          return null !== e;
        case Number:
          return null === e ? null : Number(e);
        case Object:
        case Array:
          return JSON.parse(e);
      }
      return e;
    },
  },
  B = (e, t) => t !== e && (t == t || e == e),
  W = { attribute: !0, type: String, converter: F, reflect: !1, hasChanged: B };
class Y extends HTMLElement {
  constructor() {
    super(), this.initialize();
  }
  static get observedAttributes() {
    this.finalize();
    const e = [];
    return (
      this._classProperties.forEach((t, s) => {
        const n = this._attributeNameForProperty(s, t);
        void 0 !== n && (this._attributeToPropertyMap.set(n, s), e.push(n));
      }),
      e
    );
  }
  static _ensureClassProperties() {
    if (
      !this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))
    ) {
      this._classProperties = new Map();
      const e = Object.getPrototypeOf(this)._classProperties;
      void 0 !== e && e.forEach((e, t) => this._classProperties.set(t, e));
    }
  }
  static createProperty(e, t = W) {
    if (
      (this._ensureClassProperties(),
      this._classProperties.set(e, t),
      t.noAccessor || this.prototype.hasOwnProperty(e))
    )
      return;
    const s = "symbol" == typeof e ? Symbol() : `__${e}`,
      n = this.getPropertyDescriptor(e, s, t);
    void 0 !== n && Object.defineProperty(this.prototype, e, n);
  }
  static getPropertyDescriptor(e, t, s) {
    return {
      get() {
        return this[t];
      },
      set(n) {
        const o = this[e];
        (this[t] = n), this.requestUpdateInternal(e, o, s);
      },
      configurable: !0,
      enumerable: !0,
    };
  }
  static getPropertyOptions(e) {
    return (this._classProperties && this._classProperties.get(e)) || W;
  }
  static finalize() {
    const e = Object.getPrototypeOf(this);
    if (
      (e.hasOwnProperty("finalized") || e.finalize(),
      (this.finalized = !0),
      this._ensureClassProperties(),
      (this._attributeToPropertyMap = new Map()),
      this.hasOwnProperty(JSCompiler_renameProperty("properties", this)))
    ) {
      const e = this.properties,
        t = [
          ...Object.getOwnPropertyNames(e),
          ...("function" == typeof Object.getOwnPropertySymbols
            ? Object.getOwnPropertySymbols(e)
            : []),
        ];
      for (const s of t) this.createProperty(s, e[s]);
    }
  }
  static _attributeNameForProperty(e, t) {
    const s = t.attribute;
    return !1 === s
      ? void 0
      : "string" == typeof s
      ? s
      : "string" == typeof e
      ? e.toLowerCase()
      : void 0;
  }
  static _valueHasChanged(e, t, s = B) {
    return s(e, t);
  }
  static _propertyValueFromAttribute(e, t) {
    const s = t.type,
      n = t.converter || F,
      o = "function" == typeof n ? n : n.fromAttribute;
    return o ? o(e, s) : e;
  }
  static _propertyValueToAttribute(e, t) {
    if (void 0 === t.reflect) return;
    const s = t.type,
      n = t.converter;
    return ((n && n.toAttribute) || F.toAttribute)(e, s);
  }
  initialize() {
    (this._updateState = 0),
      (this._updatePromise = new Promise(
        (e) => (this._enableUpdatingResolver = e)
      )),
      (this._changedProperties = new Map()),
      this._saveInstanceProperties(),
      this.requestUpdateInternal();
  }
  _saveInstanceProperties() {
    this.constructor._classProperties.forEach((e, t) => {
      if (this.hasOwnProperty(t)) {
        const e = this[t];
        delete this[t],
          this._instanceProperties || (this._instanceProperties = new Map()),
          this._instanceProperties.set(t, e);
      }
    });
  }
  _applyInstanceProperties() {
    this._instanceProperties.forEach((e, t) => (this[t] = e)),
      (this._instanceProperties = void 0);
  }
  connectedCallback() {
    this.enableUpdating();
  }
  enableUpdating() {
    void 0 !== this._enableUpdatingResolver &&
      (this._enableUpdatingResolver(), (this._enableUpdatingResolver = void 0));
  }
  disconnectedCallback() {}
  attributeChangedCallback(e, t, s) {
    t !== s && this._attributeToProperty(e, s);
  }
  _propertyToAttribute(e, t, s = W) {
    const n = this.constructor,
      o = n._attributeNameForProperty(e, s);
    if (void 0 !== o) {
      const e = n._propertyValueToAttribute(t, s);
      if (void 0 === e) return;
      (this._updateState = 8 | this._updateState),
        null == e ? this.removeAttribute(o) : this.setAttribute(o, e),
        (this._updateState = -9 & this._updateState);
    }
  }
  _attributeToProperty(e, t) {
    if (8 & this._updateState) return;
    const s = this.constructor,
      n = s._attributeToPropertyMap.get(e);
    if (void 0 !== n) {
      const e = s.getPropertyOptions(n);
      (this._updateState = 16 | this._updateState),
        (this[n] = s._propertyValueFromAttribute(t, e)),
        (this._updateState = -17 & this._updateState);
    }
  }
  requestUpdateInternal(e, t, s) {
    let n = !0;
    if (void 0 !== e) {
      const o = this.constructor;
      (s = s || o.getPropertyOptions(e)),
        o._valueHasChanged(this[e], t, s.hasChanged)
          ? (this._changedProperties.has(e) ||
              this._changedProperties.set(e, t),
            !0 !== s.reflect ||
              16 & this._updateState ||
              (void 0 === this._reflectingProperties &&
                (this._reflectingProperties = new Map()),
              this._reflectingProperties.set(e, s)))
          : (n = !1);
    }
    !this._hasRequestedUpdate &&
      n &&
      (this._updatePromise = this._enqueueUpdate());
  }
  requestUpdate(e, t) {
    return this.requestUpdateInternal(e, t), this.updateComplete;
  }
  async _enqueueUpdate() {
    this._updateState = 4 | this._updateState;
    try {
      await this._updatePromise;
    } catch (e) {}
    const e = this.performUpdate();
    return null != e && (await e), !this._hasRequestedUpdate;
  }
  get _hasRequestedUpdate() {
    return 4 & this._updateState;
  }
  get hasUpdated() {
    return 1 & this._updateState;
  }
  performUpdate() {
    if (!this._hasRequestedUpdate) return;
    this._instanceProperties && this._applyInstanceProperties();
    let e = !1;
    const t = this._changedProperties;
    try {
      (e = this.shouldUpdate(t)), e ? this.update(t) : this._markUpdated();
    } catch (t) {
      throw ((e = !1), this._markUpdated(), t);
    }
    e &&
      (1 & this._updateState ||
        ((this._updateState = 1 | this._updateState), this.firstUpdated(t)),
      this.updated(t));
  }
  _markUpdated() {
    (this._changedProperties = new Map()),
      (this._updateState = -5 & this._updateState);
  }
  get updateComplete() {
    return this._getUpdateComplete();
  }
  _getUpdateComplete() {
    return this._updatePromise;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    void 0 !== this._reflectingProperties &&
      this._reflectingProperties.size > 0 &&
      (this._reflectingProperties.forEach((e, t) =>
        this._propertyToAttribute(t, this[t], e)
      ),
      (this._reflectingProperties = void 0)),
      this._markUpdated();
  }
  updated(e) {}
  firstUpdated(e) {}
}
Y.finalized = !0;
const G = (e, t) =>
  "method" === t.kind && t.descriptor && !("value" in t.descriptor)
    ? Object.assign(Object.assign({}, t), {
        finisher(s) {
          s.createProperty(t.key, e);
        },
      })
    : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        initializer() {
          "function" == typeof t.initializer &&
            (this[t.key] = t.initializer.call(this));
        },
        finisher(s) {
          s.createProperty(t.key, e);
        },
      };
const K =
    window.ShadowRoot &&
    (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) &&
    "adoptedStyleSheets" in Document.prototype &&
    "replace" in CSSStyleSheet.prototype,
  Q = Symbol();
class X {
  constructor(e, t) {
    if (t !== Q)
      throw new Error(
        "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
      );
    this.cssText = e;
  }
  get styleSheet() {
    return (
      void 0 === this._styleSheet &&
        (K
          ? ((this._styleSheet = new CSSStyleSheet()),
            this._styleSheet.replaceSync(this.cssText))
          : (this._styleSheet = null)),
      this._styleSheet
    );
  }
  toString() {
    return this.cssText;
  }
}
(window.litElementVersions || (window.litElementVersions = [])).push("2.4.0");
const Z = {};
class ee extends Y {
  static getStyles() {
    return this.styles;
  }
  static _getUniqueStyles() {
    if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this))) return;
    const e = this.getStyles();
    if (Array.isArray(e)) {
      const t = (e, s) =>
          e.reduceRight(
            (e, s) => (Array.isArray(s) ? t(s, e) : (e.add(s), e)),
            s
          ),
        s = t(e, new Set()),
        n = [];
      s.forEach((e) => n.unshift(e)), (this._styles = n);
    } else this._styles = void 0 === e ? [] : [e];
    this._styles = this._styles.map((e) => {
      if (e instanceof CSSStyleSheet && !K) {
        const t = Array.prototype.slice
          .call(e.cssRules)
          .reduce((e, t) => e + t.cssText, "");
        return new X(String(t), Q);
      }
      return e;
    });
  }
  initialize() {
    super.initialize(),
      this.constructor._getUniqueStyles(),
      (this.renderRoot = this.createRenderRoot()),
      window.ShadowRoot &&
        this.renderRoot instanceof window.ShadowRoot &&
        this.adoptStyles();
  }
  createRenderRoot() {
    return this.attachShadow({ mode: "open" });
  }
  adoptStyles() {
    const e = this.constructor._styles;
    0 !== e.length &&
      (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow
        ? K
          ? (this.renderRoot.adoptedStyleSheets = e.map((e) =>
              e instanceof CSSStyleSheet ? e : e.styleSheet
            ))
          : (this._needsShimAdoptedStyleSheets = !0)
        : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(
            e.map((e) => e.cssText),
            this.localName
          ));
  }
  connectedCallback() {
    super.connectedCallback(),
      this.hasUpdated &&
        void 0 !== window.ShadyCSS &&
        window.ShadyCSS.styleElement(this);
  }
  update(e) {
    const t = this.render();
    super.update(e),
      t !== Z &&
        this.constructor.render(t, this.renderRoot, {
          scopeName: this.localName,
          eventContext: this,
        }),
      this._needsShimAdoptedStyleSheets &&
        ((this._needsShimAdoptedStyleSheets = !1),
        this.constructor._styles.forEach((e) => {
          const t = document.createElement("style");
          (t.textContent = e.cssText), this.renderRoot.appendChild(t);
        }));
  }
  render() {
    return Z;
  }
}
(ee.finalized = !0),
  (ee.render = (e, t, s) => {
    if (!s || "object" != typeof s || !s.scopeName)
      throw new Error("The `scopeName` option is required.");
    const o = s.scopeName,
      i = k.has(t),
      r = I && 11 === t.nodeType && !!t.host,
      a = r && !H.has(o),
      d = a ? document.createDocumentFragment() : t;
    if (
      (((e, t, s) => {
        let o = k.get(t);
        void 0 === o &&
          (n(t, t.firstChild),
          k.set(t, (o = new x(Object.assign({ templateFactory: D }, s)))),
          o.appendInto(t)),
          o.setValue(e),
          o.commit();
      })(e, d, Object.assign({ templateFactory: j(o) }, s)),
      a)
    ) {
      const e = k.get(d);
      k.delete(d);
      const s = e.value instanceof v ? e.value.template : void 0;
      J(o, d, s), n(t, t.firstChild), t.appendChild(d), k.set(t, e);
    }
    !i && r && window.ShadyCSS.styleElement(t.host);
  });
const te = "lovelace-player-device-id";
function se() {
  if (!localStorage[te]) {
    const e = () =>
      Math.floor(1e5 * (1 + Math.random()))
        .toString(16)
        .substring(1);
    window.fully && "function" == typeof fully.getDeviceId
      ? (localStorage[te] = fully.getDeviceId())
      : (localStorage[te] = `${e()}${e()}-${e()}${e()}`);
  }
  return localStorage[te];
}
let ne = se();
const oe = new URLSearchParams(window.location.search);
var ie;
oe.get("deviceID") &&
  null !== (ie = oe.get("deviceID")) &&
  ("clear" === ie ? localStorage.removeItem(te) : (localStorage[te] = ie),
  (ne = se())),
  (window.cardMod_template_cache = window.cardMod_template_cache || {});
const re = window.cardMod_template_cache;
async function ae(t, s, n) {
  const o = e().connection,
    i = JSON.stringify([s, n]);
  let r = re[i];
  r
    ? (r.callbacks.has(t) || de(t), t(r.value), r.callbacks.add(t))
    : (de(t),
      t(""),
      (n = Object.assign(
        {
          user: e().user.name,
          browser: ne,
          hash: location.hash.substr(1) || "",
        },
        n
      )),
      (re[i] = r =
        {
          template: s,
          variables: n,
          value: "",
          callbacks: new Set([t]),
          unsubscribe: o.subscribeMessage(
            (e) =>
              (function (e, t) {
                const s = re[e];
                s &&
                  ((s.value = t.result),
                  s.callbacks.forEach((e) => e(t.result)));
              })(i, e),
            { type: "render_template", template: s, variables: n }
          ),
        }));
}
async function de(e) {
  let t;
  for (const [s, n] of Object.entries(re))
    if (n.callbacks.has(e)) {
      n.callbacks.delete(e),
        0 == n.callbacks.size && ((t = n.unsubscribe), delete re[s]);
      break;
    }
  t && (await (await t)());
}
var le = "3.0.13";
async function ce(e, t, s = !1) {
  let n = e;
  "string" == typeof t && (t = t.split(/(\$| )/)),
    "" === t[t.length - 1] && t.pop();
  for (const [e, o] of t.entries())
    if (o.trim().length) {
      if (!n) return null;
      n.localName &&
        n.localName.includes("-") &&
        (await customElements.whenDefined(n.localName)),
        n.updateComplete && (await n.updateComplete),
        (n =
          "$" === o
            ? s && e == t.length - 1
              ? [n.shadowRoot]
              : n.shadowRoot
            : s && e == t.length - 1
            ? n.querySelectorAll(o)
            : n.querySelector(o));
    }
  return n;
}
async function he(e, t, s = !1, n = 1e4) {
  return Promise.race([
    ce(e, t, s),
    new Promise((e, t) => setTimeout(() => t(new Error("timeout")), n)),
  ]).catch((e) => {
    if (!e.message || "timeout" !== e.message) throw e;
    return null;
  });
}
const pe = async (e) => {
  await (async () => {
    if (customElements.get("developer-tools-event")) return;
    await customElements.whenDefined("partial-panel-resolver");
    const e = document.createElement("partial-panel-resolver");
    (e.hass = {
      panels: [{ url_path: "tmp", component_name: "developer-tools" }],
    }),
      e._updateRoutes(),
      await e.routerOptions.routes.tmp.load(),
      await customElements.whenDefined("developer-tools-router");
    const t = document.createElement("developer-tools-router");
    await t.routerOptions.routes.event.load();
  })();
  return document
    .createElement("developer-tools-event")
    ._computeParsedEventData(e);
};
async function ue(e, t, s = "", n = {}, o = null, i = !0) {
  var r;
  let a;
  (null === (r = e.localName) || void 0 === r ? void 0 : r.includes("-")) &&
    (await customElements.whenDefined(e.localName)),
    e.updateComplete && (await e.updateComplete),
    void 0 === e._cardMod && (e._cardMod = []);
  for (const s of e._cardMod)
    if (s.type === t) {
      a = s;
      break;
    }
  return (
    a ||
      ((a = document.createElement("card-mod")),
      (a.type = t),
      e._cardMod.push(a)),
    queueMicrotask(async () => {
      (e.modElement ? e.modElement : (i && e.shadowRoot) || e).appendChild(a),
        (a.variables = n),
        (a.styles = s);
    }),
    a
  );
}
function me(e, t) {
  const s = (e) => e && "object" == typeof e && !Array.isArray(e);
  if (s(e) && s(t))
    for (const n in t)
      s(t[n])
        ? (e[n] || Object.assign(e, { [n]: {} }),
          "string" == typeof e[n] && (e[n] = { ".": e[n] }),
          me(e[n], t[n]))
        : e[n]
        ? (e[n] = t[n] + e[n])
        : (e[n] = t[n]);
  return e;
}
function fe(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (!(e instanceof Object && t instanceof Object)) return !1;
  for (const s in e)
    if (e.hasOwnProperty(s)) {
      if (!t.hasOwnProperty(s)) return !1;
      if (e[s] !== t[s]) {
        if ("object" != typeof e[s]) return !1;
        if (!fe(e[s], t[s])) return !1;
      }
    }
  for (const s in t) if (t.hasOwnProperty(s) && !e.hasOwnProperty(s)) return !1;
  return !0;
}
function ye(e) {
  return e.config
    ? e.config
    : e._config
    ? e._config
    : e.host
    ? ye(e.host)
    : e.parentElement
    ? ye(e.parentElement)
    : e.parentNode
    ? ye(e.parentNode)
    : null;
}
function _e(e, t) {
  for (const s of t) e.add(s);
}
async function ge(e, t = 0) {
  let s = new Set();
  if (10 == t) return s;
  if (!e) return s;
  if (e._cardMod) for (const t of e._cardMod) t.styles && s.add(t);
  return (
    e.updateComplete && (await e.updateComplete),
    e.parentElement
      ? _e(s, await ge(e.parentElement, t + 1))
      : e.parentNode && _e(s, await ge(e.parentNode, t + 1)),
    e.host && _e(s, await ge(e.host, t + 1)),
    s
  );
}
class ve extends ee {
  constructor() {
    super(),
      (this._rendered_styles = ""),
      (this._styleChildren = new Set()),
      (this._observer = new MutationObserver((e) => {
        for (const t of e) {
          if ("card-mod" === t.target.localName) return;
          let e = !0;
          if (
            (t.addedNodes.length &&
              t.addedNodes.forEach((t) => {
                "card-mod" !== t.localName && (e = !1);
              }),
            e)
          )
            return;
          if (
            ((e = !0),
            t.removedNodes.length &&
              t.removedNodes.forEach((t) => {
                "card-mod" !== t.localName && (e = !1);
              }),
            e)
          )
            return;
        }
        this.refresh();
      })),
      document.addEventListener("cm_update", () => {
        this.refresh();
      });
  }
  static get applyToElement() {
    return ue;
  }
  connectedCallback() {
    super.connectedCallback(),
      this._connect(),
      this.setAttribute("slot", "none");
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._disconnect();
  }
  set styles(e) {
    fe(e, this._input_styles) || ((this._input_styles = e), this._connect());
  }
  get styles() {
    return this._styles;
  }
  refresh() {
    this._connect();
  }
  async _connect() {
    const t = this._input_styles;
    let s = JSON.parse(JSON.stringify(t || {}));
    "string" == typeof s && (s = { ".": s });
    me(
      s,
      await (async function (t) {
        if (!t.type) return null;
        const s = t.parentElement ? t.parentElement : t,
          n = window.getComputedStyle(s).getPropertyValue("--card-mod-theme"),
          o = e().themes.themes;
        return o[n]
          ? o[n][`card-mod-${t.type}-yaml`]
            ? pe(o[n][`card-mod-${t.type}-yaml`])
            : o[n][`card-mod-${t.type}`]
            ? { ".": o[n][`card-mod-${t.type}`] }
            : {}
          : {};
      })(this)
    );
    const n = new Set();
    let o;
    const i = this.parentElement || this.parentNode;
    s["."] || (o = "");
    for (const [e, t] of Object.entries(s))
      if ("." === e) o = t;
      else {
        const s = await he(i, e, !0);
        if (!s) continue;
        for (const e of s)
          if (e) {
            const s = await ue(
              e,
              `${this.type}-child`,
              t,
              this.variables,
              null,
              !1
            );
            s.refresh(), n.add(s);
          }
      }
    for (const e of this._styleChildren) n.has(e) || (e && (e.styles = ""));
    var r;
    ((this._styleChildren = n), this._styles !== o) &&
      ((this._styles = o),
      this._styles &&
      ((r = this._styles), String(r).includes("{%") || String(r).includes("{{"))
        ? ((this._renderer = this._renderer || this._style_rendered.bind(this)),
          ae(this._renderer, this._styles, this.variables))
        : this._style_rendered(this._styles || ""),
      this._observer.observe(
        (function (e) {
          if (!e) return;
          const t = e.parentElement || e.parentNode;
          return t ? (t.host ? t.host : t) : void 0;
        })(this),
        { childList: !0 }
      ));
  }
  async _disconnect() {
    this._observer.disconnect(), (this._styles = ""), await de(this._renderer);
  }
  _style_rendered(e) {
    (this._rendered_styles = e),
      this.dispatchEvent(new Event("card-mod-update"));
  }
  createRenderRoot() {
    return this;
  }
  render() {
    return q`
      <style>
        ${this._rendered_styles}
        ${
          1 === new Date().getDate() && 3 === new Date().getMonth()
            ? q`:host{transform: rotate(${2 * Math.random() - 1}deg);}`
            : ""
        }
      </style>
    `;
  }
}
var we;
!(function (e, t, s, n) {
  var o,
    i = arguments.length,
    r =
      i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, s)) : n;
  if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
    r = Reflect.decorate(e, t, s, n);
  else
    for (var a = e.length - 1; a >= 0; a--)
      (o = e[a]) && (r = (i < 3 ? o(r) : i > 3 ? o(t, s, r) : o(t, s)) || r);
  i > 3 && r && Object.defineProperty(t, s, r);
})(
  [
    (e, t) =>
      void 0 !== t
        ? ((e, t, s) => {
            t.constructor.createProperty(s, e);
          })(we, e, t)
        : G(we, e),
  ],
  ve.prototype,
  "_rendered_styles",
  void 0
),
  customElements.get("card-mod") ||
    (customElements.define("card-mod", ve),
    console.info(
      `%cCARD-MOD ${le} IS INSTALLED`,
      "color: green; font-weight: bold",
      ""
    )),
  customElements.whenDefined("ha-card").then(() => {
    const e = customElements.get("ha-card");
    if (e.prototype.cardmod_patched) return;
    e.prototype.cardmod_patched = !0;
    const t = e.prototype.firstUpdated;
    e.prototype.firstUpdated = function (e) {
      var s, n;
      null == t || t.bind(this)(e);
      const o = this.shadowRoot.querySelector(".card-header");
      o && this.insertBefore(o, this.children[0]);
      const i = ye(this);
      (null === (s = null == i ? void 0 : i.card_mod) || void 0 === s
        ? void 0
        : s.class) && this.classList.add(i.card_mod.class),
        (null == i ? void 0 : i.type) &&
          this.classList.add(`type-${i.type.replace(":", "-")}`),
        ue(
          this,
          "card",
          (null === (n = null == i ? void 0 : i.card_mod) || void 0 === n
            ? void 0
            : n.style) ||
            (null == i ? void 0 : i.style) ||
            "",
          { config: i },
          null,
          !1
        ).then((e) => {
          var t;
          const s =
            null === (t = this.parentNode) || void 0 === t ? void 0 : t.host;
          if (s) {
            if (s.setConfig && !s.setConfig.cm_patched) {
              const t = s.setConfig;
              (s.setConfig = function (s) {
                var n;
                t.bind(this)(s),
                  (e.variables = { config: s }),
                  (e.styles =
                    (null === (n = s.card_mod) || void 0 === n
                      ? void 0
                      : n.style) || {});
              }),
                (s.setConfig.cm_patched = !0);
            }
            if (s.update && !s.update.cm_patched) {
              const t = s.update;
              (s.update = function (s) {
                t.bind(this)(s),
                  e.refresh(),
                  this.updateComplete.then(() => {
                    e.refresh();
                  });
              }),
                (s.update.cm_patched = !0);
            }
            window.setTimeout(() => e.refresh(), 100),
              window.setTimeout(() => e.refresh(), 500),
              window.setTimeout(() => e.refresh(), 1e3);
          }
        });
    };
  }),
  customElements.whenDefined("hui-entities-card").then(() => {
    const e = customElements.get("hui-entities-card");
    if (e.prototype.cardmod_patched) return;
    e.prototype.cardmod_patched = !0;
    const t = e.prototype.renderEntity;
    e.prototype.renderEntity = function (e) {
      var s;
      const n = t.bind(this)(e);
      if (!n || !n.values) return n;
      const o = n.values[0];
      if (!o) return n;
      (null === (s = null == e ? void 0 : e.card_mod) || void 0 === s
        ? void 0
        : s.class) && o.classList.add(e.card_mod.class),
        (null == e ? void 0 : e.type) &&
          o.classList.add(`type-${e.type.replace(":", "-")}`);
      const i = () => {
        var t;
        return ue(
          o,
          "row",
          (null === (t = null == e ? void 0 : e.card_mod) || void 0 === t
            ? void 0
            : t.style) ||
            (null == e ? void 0 : e.style) ||
            "",
          { config: e }
        );
      };
      return (
        this.updateComplete.then(() => i()),
        n.values[0] && n.values[0].addEventListener("ll-rebuild", i),
        n
      );
    };
  });
customElements.whenDefined("hui-glance-card").then(() => {
  const e = customElements.get("hui-glance-card");
  if (e.prototype.cardmod_patched) return;
  e.prototype.cardmod_patched = !0;
  const t = e.prototype.updated;
  e.prototype.updated = function (e) {
    var s, n;
    null == t || t.bind(this)(e);
    for (const e of this.shadowRoot.querySelectorAll("ha-card div.entity")) {
      if (!e.cardmod_patched) {
        e.cardmod_patched = !0;
        const t = e.attachShadow({ mode: "open" });
        for (; e.firstChild; ) t.append(e.firstChild);
        const s = document.createElement("style");
        t.appendChild(s),
          (s.innerHTML =
            "\ndiv {\n  width: 100%;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.name {\n  min-height: var(--paper-font-body1_-_line-height, 20px);\n}\nstate-badge {\n  margin: 8px 0;\n}\n");
      }
      const t = e.config || e.entityConf;
      (null === (s = null == t ? void 0 : t.card_mod) || void 0 === s
        ? void 0
        : s.class) && e.classList.add(t.card_mod.class),
        ue(
          e,
          "glance",
          (null === (n = null == t ? void 0 : t.card_mod) || void 0 === n
            ? void 0
            : n.style) ||
            (null == t ? void 0 : t.style) ||
            "",
          { config: t }
        );
    }
  };
}),
  customElements.whenDefined("hui-state-label-badge").then(() => {
    const e = customElements.get("hui-state-label-badge");
    if (e.prototype.cardmod_patched) return;
    e.prototype.cardmod_patched = !0;
    const t = e.prototype.firstUpdated;
    e.prototype.firstUpdated = function (e) {
      var s, n;
      null == t || t.bind(this)(e);
      const o = this._config;
      (null === (s = null == o ? void 0 : o.card_mod) || void 0 === s
        ? void 0
        : s.class) && this.classList.add(o.card_mod.class),
        ue(
          this,
          "badge",
          (null === (n = null == o ? void 0 : o.card_mod) || void 0 === n
            ? void 0
            : n.style) ||
            (null == o ? void 0 : o.style) ||
            "",
          { config: o }
        );
    };
  }),
  customElements.whenDefined("hui-view").then(() => {
    const e = customElements.get("hui-view");
    if (e.prototype.cardmod_patched) return;
    e.prototype.cardmod_patched = !0;
    const t = e.prototype.firstUpdated;
    e.prototype.firstUpdated = function (e) {
      null == t || t.bind(this)(e), ue(this, "view");
    };
  }),
  customElements.whenDefined("hui-root").then(() => {
    const e = customElements.get("hui-root");
    if (e.prototype.cardmod_patched) return;
    e.prototype.cardmod_patched = !0;
    const t = e.prototype.firstUpdated;
    (e.prototype.firstUpdated = async function (e) {
      null == t || t.bind(this)(e), ue(this, "root");
    }),
      he(
        document,
        "home-assistant$home-assistant-main$app-drawer-layout partial-panel-resolver ha-panel-lovelace$hui-root",
        !1
      ).then((e) => {
        null == e || e.firstUpdated();
      });
  }),
  customElements.whenDefined("ha-more-info-dialog").then(() => {
    const e = customElements.get("ha-more-info-dialog");
    if (e.prototype.cardmod_patched) return;
    e.prototype.cardmod_patched = !0;
    const t = e.prototype.showDialog;
    (e.prototype.showDialog = function (e) {
      null == t || t.bind(this)(e),
        this.requestUpdate(),
        this.updateComplete.then(async () => {
          ue(
            this.shadowRoot.querySelector("ha-dialog"),
            "more-info",
            "",
            { config: e },
            null,
            !1
          );
        });
    }),
      he(document, "home-assistant$ha-more-info-dialog", !1).then((t) => {
        t &&
          ((t.showDialog = e.prototype.showDialog.bind(t)),
          t.showDialog({ entityId: t.entityId }));
      });
  }),
  customElements.whenDefined("ha-sidebar").then(() => {
    const e = customElements.get("ha-sidebar");
    if (e.prototype.cardmod_patched) return;
    e.prototype.cardmod_patched = !0;
    const t = e.prototype.firstUpdated;
    (e.prototype.firstUpdated = async function (e) {
      null == t || t.bind(this)(e), ue(this, "sidebar");
    }),
      he(
        document,
        "home-assistant$home-assistant-main$app-drawer-layout app-drawer ha-sidebar",
        !1
      ).then((e) => (null == e ? void 0 : e.firstUpdated()));
  }),
  customElements.whenDefined("hui-card-element-editor").then(() => {
    const e = customElements.get("hui-card-element-editor");
    if (e.prototype.cardmod_patched) return;
    e.prototype.cardmod_patched = !0;
    const t = e.prototype.getConfigElement;
    e.prototype.getConfigElement = async function () {
      const e = await t.bind(this)();
      if (e) {
        const t = e.setConfig;
        e.setConfig = function (e) {
          var s, n;
          const o = JSON.parse(JSON.stringify(e));
          if (
            ((this._cardModData = { card: o.card_mod, entities: [] }),
            o.entities)
          )
            for (const [e, t] of null === (s = o.entities) || void 0 === s
              ? void 0
              : s.entries())
              (this._cardModData.entities[e] = t.card_mod), delete t.card_mod;
          if ((delete o.card_mod, t.bind(this)(o), o.entities))
            for (const [e, t] of null === (n = o.entities) || void 0 === n
              ? void 0
              : n.entries())
              this._cardModData.entities[e] &&
                (t.card_mod = this._cardModData.entities[e]);
        };
      }
      return e;
    };
    const s = e.prototype._handleUIConfigChanged;
    e.prototype._handleUIConfigChanged = function (e) {
      if (this._configElement && this._configElement._cardModData) {
        const t = this._configElement._cardModData;
        t.card && (e.detail.config.card_mod = t.card);
      }
      s.bind(this)(e);
    };
  }),
  customElements.whenDefined("hui-dialog-edit-card").then(() => {
    const e = customElements.get("hui-dialog-edit-card");
    if (e.prototype.cardmod_patched) return;
    e.prototype.cardmod_patched = !0;
    const t = e.prototype.updated;
    e.prototype.updated = function (e) {
      null == t || t.bind(this)(e),
        this.updateComplete.then(async () => {
          var e, t, s;
          this._cardModIcon ||
            ((this._cardModIcon = document.createElement("ha-icon")),
            (this._cardModIcon.icon = "mdi:brush"));
          const n = this.shadowRoot.querySelector(
            "mwc-button[slot=secondaryAction]"
          );
          n &&
            (n.appendChild(this._cardModIcon),
            (null === (e = this._cardConfig) || void 0 === e
              ? void 0
              : e.card_mod) ||
            (null ===
              (s =
                null === (t = this._cardConfig) || void 0 === t
                  ? void 0
                  : t.entities) || void 0 === s
              ? void 0
              : s.some((e) => e.card_mod))
              ? (this._cardModIcon.style.visibility = "visible")
              : (this._cardModIcon.style.visibility = "hidden"));
        });
    };
  }),
  customElements.whenDefined("hui-picture-elements-card").then(() => {
    const e = customElements.get("hui-picture-elements-card");
    if (e.prototype.cardmod_patched) return;
    e.prototype.cardmod_patched = !0;
    const t = e.prototype.setConfig;
    e.prototype.setConfig = function (e) {
      var s, n;
      null == t || t.bind(this)(e);
      for (const [e, t] of this._elements.entries()) {
        const o = this._config.elements[e];
        (null === (s = null == o ? void 0 : o.card_mod) || void 0 === s
          ? void 0
          : s.class) && t.classList.add(o.card_mod.class),
          (null == o ? void 0 : o.type) &&
            t.classList.add(`type-${o.type.replace(":", "-")}`),
          ue(
            t,
            "element",
            null === (n = null == o ? void 0 : o.card_mod) || void 0 === n
              ? void 0
              : n.style,
            { config: o }
          );
      }
    };
  }),
  customElements.whenDefined("ha-icon").then(() => {
    const e = customElements.get("ha-icon");
    if (e.prototype.cardmod_patched) return;
    e.prototype.cardmod_patched = !0;
    const t = e.prototype.firstUpdated;
    e.prototype.firstUpdated = function () {
      null == t || t.bind(this)();
      const e = () => {
        const e = window
          .getComputedStyle(this)
          .getPropertyValue("--card-mod-icon");
        e && (this.icon = e.trim());
        const t = window
          .getComputedStyle(this)
          .getPropertyValue("--card-mod-icon-color");
        t && (this.style.color = t);
      };
      (async () => {
        const t = await ge(this);
        for (const s of t)
          s.addEventListener("card-mod-update", async () => {
            await s.updateComplete, e();
          });
        e();
      })();
    };
  });
let Se = window.cardHelpers;
const be = new Promise(async (t, s) => {
  Se && t();
  const n = async () => {
    (Se = await window.loadCardHelpers()), (window.cardHelpers = Se), t();
  };
  window.loadCardHelpers
    ? n()
    : window.addEventListener("load", async () => {
        !(async function () {
          if (customElements.get("hui-view")) return !0;
          await customElements.whenDefined("partial-panel-resolver");
          const t = document.createElement("partial-panel-resolver");
          if (
            ((t.hass = {
              panels: [{ url_path: "tmp", component_name: "lovelace" }],
            }),
            t._updateRoutes(),
            await t.routerOptions.routes.tmp.load(),
            !customElements.get("ha-panel-lovelace"))
          )
            return !1;
          const s = document.createElement("ha-panel-lovelace");
          (s.hass = e()),
            void 0 === s.hass &&
              (await new Promise((e) => {
                window.addEventListener(
                  "connection-status",
                  (t) => {
                    console.log(t), e();
                  },
                  { once: !0 }
                );
              }),
              (s.hass = e())),
            (s.panel = { config: { mode: null } }),
            s._fetchConfig();
        })(),
          window.loadCardHelpers && n();
      });
});
function Ee(e, s) {
  const n = { type: "error", error: e, origConfig: s },
    o = document.createElement("hui-error-card");
  return (
    customElements.whenDefined("hui-error-card").then(() => {
      const e = document.createElement("hui-error-card");
      e.setConfig(n), o.parentElement && o.parentElement.replaceChild(e, o);
    }),
    be.then(() => {
      t("ll-rebuild", {}, o);
    }),
    o
  );
}
function Ce(e, s) {
  if (!s || "object" != typeof s || !s.type)
    return Ee(`No ${e} type configured`, s);
  let n = s.type;
  if (
    ((n = n.startsWith("custom:")
      ? n.substr("custom:".length)
      : `hui-${n}-${e}`),
    customElements.get(n))
  )
    return (function (e, s) {
      let n = document.createElement(e);
      try {
        n.setConfig(JSON.parse(JSON.stringify(s)));
      } catch (e) {
        n = Ee(e, s);
      }
      return (
        be.then(() => {
          t("ll-rebuild", {}, n);
        }),
        n
      );
    })(n, s);
  const o = Ee(`Custom element doesn't exist: ${n}.`, s);
  o.style.display = "None";
  const i = setTimeout(() => {
    o.style.display = "";
  }, 2e3);
  return (
    customElements.whenDefined(n).then(() => {
      clearTimeout(i), t("ll-rebuild", {}, o);
    }),
    o
  );
}
const Ne = "\nha-card {\n  background: none;\n  box-shadow: none;\n}";
function Pe() {
  document.dispatchEvent(new Event("cm_update"));
}
customElements.define(
  "mod-card",
  class extends ee {
    static get properties() {
      return { hass: {} };
    }
    setConfig(t) {
      var s;
      this._config = JSON.parse(JSON.stringify(t));
      let n =
        (null === (s = this._config.card_mod) || void 0 === s
          ? void 0
          : s.style) || this._config.style;
      void 0 === n
        ? (n = Ne)
        : "string" == typeof n
        ? (n = Ne + n)
        : n["."]
        ? (n["."] = Ne + n["."])
        : (n["."] = Ne),
        (this._config.card_mod = { style: n }),
        (this.card = (function (e) {
          return Se ? Se.createCardElement(e) : Ce("card", e);
        })(t.card)),
        (this.card.hass = e());
    }
    firstUpdated() {
      window.setTimeout(() => {
        var e, t;
        if (
          null ===
            (t =
              null === (e = this.card) || void 0 === e
                ? void 0
                : e.shadowRoot) || void 0 === t
            ? void 0
            : t.querySelector("ha-card")
        ) {
          console.info(
            "%cYou are doing it wrong!",
            "color: red; font-weight: bold",
            ""
          );
          let e = this.card.localName.replace(/hui-(.*)-card/, "$1");
          console.info(
            `mod-card should NEVER be used with a card that already has a ha-card element, such as ${e}`
          );
        }
      }, 3e3);
    }
    render() {
      return q` <ha-card modcard> ${this.card} </ha-card> `;
    }
    set hass(e) {
      this.card && (this.card.hass = e);
    }
    getCardSize() {
      if (this._config.report_size) return this._config.report_size;
      let e = this.shadowRoot;
      return (
        e && (e = e.querySelector("ha-card card-maker")),
        e && (e = e.getCardSize),
        e && (e = e()),
        e || 1
      );
    }
  }
);
const xe = [
  customElements.whenDefined("home-assistant"),
  customElements.whenDefined("hc-main"),
];
Promise.race(xe).then(() => {
  window.setTimeout(() => {
    var t, s;
    e().connection.subscribeEvents(() => {
      window.setTimeout(Pe, 500);
    }, "themes_updated"),
      null === (t = document.querySelector("home-assistant")) ||
        void 0 === t ||
        t.addEventListener("settheme", Pe),
      null === (s = document.querySelector("hc-main")) ||
        void 0 === s ||
        s.addEventListener("settheme", Pe);
  }, 1e3);
}),
  t("ll-rebuild", {});
