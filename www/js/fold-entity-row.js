function t(t, e, s, i) {
  var n,
    o = arguments.length,
    r =
      o < 3 ? e : null === i ? (i = Object.getOwnPropertyDescriptor(e, s)) : i;
  if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
    r = Reflect.decorate(t, e, s, i);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (n = t[a]) && (r = (o < 3 ? n(r) : o > 3 ? n(e, s, r) : n(e, s)) || r);
  return o > 3 && r && Object.defineProperty(e, s, r), r;
}
const e =
    "undefined" != typeof window &&
    null != window.customElements &&
    void 0 !== window.customElements.polyfillWrapFlushCallback,
  s = (t, e, s = null) => {
    for (; e !== s; ) {
      const s = e.nextSibling;
      t.removeChild(e), (e = s);
    }
  },
  i = `{{lit-${String(Math.random()).slice(2)}}}`,
  n = `\x3c!--${i}--\x3e`,
  o = new RegExp(`${i}|${n}`);
class r {
  constructor(t, e) {
    (this.parts = []), (this.element = e);
    const s = [],
      n = [],
      r = document.createTreeWalker(e.content, 133, null, !1);
    let l = 0,
      d = -1,
      p = 0;
    const {
      strings: u,
      values: { length: m },
    } = t;
    for (; p < m; ) {
      const t = r.nextNode();
      if (null !== t) {
        if ((d++, 1 === t.nodeType)) {
          if (t.hasAttributes()) {
            const e = t.attributes,
              { length: s } = e;
            let i = 0;
            for (let t = 0; t < s; t++) a(e[t].name, "$lit$") && i++;
            for (; i-- > 0; ) {
              const e = u[p],
                s = c.exec(e)[2],
                i = s.toLowerCase() + "$lit$",
                n = t.getAttribute(i);
              t.removeAttribute(i);
              const r = n.split(o);
              this.parts.push({
                type: "attribute",
                index: d,
                name: s,
                strings: r,
              }),
                (p += r.length - 1);
            }
          }
          "TEMPLATE" === t.tagName && (n.push(t), (r.currentNode = t.content));
        } else if (3 === t.nodeType) {
          const e = t.data;
          if (e.indexOf(i) >= 0) {
            const i = t.parentNode,
              n = e.split(o),
              r = n.length - 1;
            for (let e = 0; e < r; e++) {
              let s,
                o = n[e];
              if ("" === o) s = h();
              else {
                const t = c.exec(o);
                null !== t &&
                  a(t[2], "$lit$") &&
                  (o =
                    o.slice(0, t.index) +
                    t[1] +
                    t[2].slice(0, -"$lit$".length) +
                    t[3]),
                  (s = document.createTextNode(o));
              }
              i.insertBefore(s, t),
                this.parts.push({ type: "node", index: ++d });
            }
            "" === n[r] ? (i.insertBefore(h(), t), s.push(t)) : (t.data = n[r]),
              (p += r);
          }
        } else if (8 === t.nodeType)
          if (t.data === i) {
            const e = t.parentNode;
            (null !== t.previousSibling && d !== l) ||
              (d++, e.insertBefore(h(), t)),
              (l = d),
              this.parts.push({ type: "node", index: d }),
              null === t.nextSibling ? (t.data = "") : (s.push(t), d--),
              p++;
          } else {
            let e = -1;
            for (; -1 !== (e = t.data.indexOf(i, e + 1)); )
              this.parts.push({ type: "node", index: -1 }), p++;
          }
      } else r.currentNode = n.pop();
    }
    for (const t of s) t.parentNode.removeChild(t);
  }
}
const a = (t, e) => {
    const s = t.length - e.length;
    return s >= 0 && t.slice(s) === e;
  },
  l = (t) => -1 !== t.index,
  h = () => document.createComment(""),
  c = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
function d(t, e) {
  const {
      element: { content: s },
      parts: i,
    } = t,
    n = document.createTreeWalker(s, 133, null, !1);
  let o = u(i),
    r = i[o],
    a = -1,
    l = 0;
  const h = [];
  let c = null;
  for (; n.nextNode(); ) {
    a++;
    const t = n.currentNode;
    for (
      t.previousSibling === c && (c = null),
        e.has(t) && (h.push(t), null === c && (c = t)),
        null !== c && l++;
      void 0 !== r && r.index === a;

    )
      (r.index = null !== c ? -1 : r.index - l), (o = u(i, o)), (r = i[o]);
  }
  h.forEach((t) => t.parentNode.removeChild(t));
}
const p = (t) => {
    let e = 11 === t.nodeType ? 0 : 1;
    const s = document.createTreeWalker(t, 133, null, !1);
    for (; s.nextNode(); ) e++;
    return e;
  },
  u = (t, e = -1) => {
    for (let s = e + 1; s < t.length; s++) {
      const e = t[s];
      if (l(e)) return s;
    }
    return -1;
  };
const m = new WeakMap(),
  f = (t) => "function" == typeof t && m.has(t),
  _ = {},
  y = {};
class g {
  constructor(t, e, s) {
    (this.__parts = []),
      (this.template = t),
      (this.processor = e),
      (this.options = s);
  }
  update(t) {
    let e = 0;
    for (const s of this.__parts) void 0 !== s && s.setValue(t[e]), e++;
    for (const t of this.__parts) void 0 !== t && t.commit();
  }
  _clone() {
    const t = e
        ? this.template.element.content.cloneNode(!0)
        : document.importNode(this.template.element.content, !0),
      s = [],
      i = this.template.parts,
      n = document.createTreeWalker(t, 133, null, !1);
    let o,
      r = 0,
      a = 0,
      h = n.nextNode();
    for (; r < i.length; )
      if (((o = i[r]), l(o))) {
        for (; a < o.index; )
          a++,
            "TEMPLATE" === h.nodeName &&
              (s.push(h), (n.currentNode = h.content)),
            null === (h = n.nextNode()) &&
              ((n.currentNode = s.pop()), (h = n.nextNode()));
        if ("node" === o.type) {
          const t = this.processor.handleTextExpression(this.options);
          t.insertAfterNode(h.previousSibling), this.__parts.push(t);
        } else
          this.__parts.push(
            ...this.processor.handleAttributeExpressions(
              h,
              o.name,
              o.strings,
              this.options
            )
          );
        r++;
      } else this.__parts.push(void 0), r++;
    return e && (document.adoptNode(t), customElements.upgrade(t)), t;
  }
}
const w =
    window.trustedTypes &&
    trustedTypes.createPolicy("lit-html", { createHTML: (t) => t }),
  S = ` ${i} `;
class v {
  constructor(t, e, s, i) {
    (this.strings = t),
      (this.values = e),
      (this.type = s),
      (this.processor = i);
  }
  getHTML() {
    const t = this.strings.length - 1;
    let e = "",
      s = !1;
    for (let o = 0; o < t; o++) {
      const t = this.strings[o],
        r = t.lastIndexOf("\x3c!--");
      s = (r > -1 || s) && -1 === t.indexOf("--\x3e", r + 1);
      const a = c.exec(t);
      e +=
        null === a
          ? t + (s ? S : n)
          : t.substr(0, a.index) + a[1] + a[2] + "$lit$" + a[3] + i;
    }
    return (e += this.strings[t]), e;
  }
  getTemplateElement() {
    const t = document.createElement("template");
    let e = this.getHTML();
    return void 0 !== w && (e = w.createHTML(e)), (t.innerHTML = e), t;
  }
}
const b = (t) =>
    null === t || !("object" == typeof t || "function" == typeof t),
  x = (t) => Array.isArray(t) || !(!t || !t[Symbol.iterator]);
class P {
  constructor(t, e, s) {
    (this.dirty = !0),
      (this.element = t),
      (this.name = e),
      (this.strings = s),
      (this.parts = []);
    for (let t = 0; t < s.length - 1; t++) this.parts[t] = this._createPart();
  }
  _createPart() {
    return new N(this);
  }
  _getValue() {
    const t = this.strings,
      e = t.length - 1,
      s = this.parts;
    if (1 === e && "" === t[0] && "" === t[1]) {
      const t = s[0].value;
      if ("symbol" == typeof t) return String(t);
      if ("string" == typeof t || !x(t)) return t;
    }
    let i = "";
    for (let n = 0; n < e; n++) {
      i += t[n];
      const e = s[n];
      if (void 0 !== e) {
        const t = e.value;
        if (b(t) || !x(t)) i += "string" == typeof t ? t : String(t);
        else for (const e of t) i += "string" == typeof e ? e : String(e);
      }
    }
    return (i += t[e]), i;
  }
  commit() {
    this.dirty &&
      ((this.dirty = !1),
      this.element.setAttribute(this.name, this._getValue()));
  }
}
class N {
  constructor(t) {
    (this.value = void 0), (this.committer = t);
  }
  setValue(t) {
    t === _ ||
      (b(t) && t === this.value) ||
      ((this.value = t), f(t) || (this.committer.dirty = !0));
  }
  commit() {
    for (; f(this.value); ) {
      const t = this.value;
      (this.value = _), t(this);
    }
    this.value !== _ && this.committer.commit();
  }
}
class C {
  constructor(t) {
    (this.value = void 0), (this.__pendingValue = void 0), (this.options = t);
  }
  appendInto(t) {
    (this.startNode = t.appendChild(h())), (this.endNode = t.appendChild(h()));
  }
  insertAfterNode(t) {
    (this.startNode = t), (this.endNode = t.nextSibling);
  }
  appendIntoPart(t) {
    t.__insert((this.startNode = h())), t.__insert((this.endNode = h()));
  }
  insertAfterPart(t) {
    t.__insert((this.startNode = h())),
      (this.endNode = t.endNode),
      (t.endNode = this.startNode);
  }
  setValue(t) {
    this.__pendingValue = t;
  }
  commit() {
    if (null === this.startNode.parentNode) return;
    for (; f(this.__pendingValue); ) {
      const t = this.__pendingValue;
      (this.__pendingValue = _), t(this);
    }
    const t = this.__pendingValue;
    t !== _ &&
      (b(t)
        ? t !== this.value && this.__commitText(t)
        : t instanceof v
        ? this.__commitTemplateResult(t)
        : t instanceof Node
        ? this.__commitNode(t)
        : x(t)
        ? this.__commitIterable(t)
        : t === y
        ? ((this.value = y), this.clear())
        : this.__commitText(t));
  }
  __insert(t) {
    this.endNode.parentNode.insertBefore(t, this.endNode);
  }
  __commitNode(t) {
    this.value !== t && (this.clear(), this.__insert(t), (this.value = t));
  }
  __commitText(t) {
    const e = this.startNode.nextSibling,
      s = "string" == typeof (t = null == t ? "" : t) ? t : String(t);
    e === this.endNode.previousSibling && 3 === e.nodeType
      ? (e.data = s)
      : this.__commitNode(document.createTextNode(s)),
      (this.value = t);
  }
  __commitTemplateResult(t) {
    const e = this.options.templateFactory(t);
    if (this.value instanceof g && this.value.template === e)
      this.value.update(t.values);
    else {
      const s = new g(e, t.processor, this.options),
        i = s._clone();
      s.update(t.values), this.__commitNode(i), (this.value = s);
    }
  }
  __commitIterable(t) {
    Array.isArray(this.value) || ((this.value = []), this.clear());
    const e = this.value;
    let s,
      i = 0;
    for (const n of t)
      (s = e[i]),
        void 0 === s &&
          ((s = new C(this.options)),
          e.push(s),
          0 === i ? s.appendIntoPart(this) : s.insertAfterPart(e[i - 1])),
        s.setValue(n),
        s.commit(),
        i++;
    i < e.length && ((e.length = i), this.clear(s && s.endNode));
  }
  clear(t = this.startNode) {
    s(this.startNode.parentNode, t.nextSibling, this.endNode);
  }
}
class E {
  constructor(t, e, s) {
    if (
      ((this.value = void 0),
      (this.__pendingValue = void 0),
      2 !== s.length || "" !== s[0] || "" !== s[1])
    )
      throw new Error(
        "Boolean attributes can only contain a single expression"
      );
    (this.element = t), (this.name = e), (this.strings = s);
  }
  setValue(t) {
    this.__pendingValue = t;
  }
  commit() {
    for (; f(this.__pendingValue); ) {
      const t = this.__pendingValue;
      (this.__pendingValue = _), t(this);
    }
    if (this.__pendingValue === _) return;
    const t = !!this.__pendingValue;
    this.value !== t &&
      (t
        ? this.element.setAttribute(this.name, "")
        : this.element.removeAttribute(this.name),
      (this.value = t)),
      (this.__pendingValue = _);
  }
}
class T extends P {
  constructor(t, e, s) {
    super(t, e, s),
      (this.single = 2 === s.length && "" === s[0] && "" === s[1]);
  }
  _createPart() {
    return new A(this);
  }
  _getValue() {
    return this.single ? this.parts[0].value : super._getValue();
  }
  commit() {
    this.dirty &&
      ((this.dirty = !1), (this.element[this.name] = this._getValue()));
  }
}
class A extends N {}
let V = !1;
(() => {
  try {
    const t = {
      get capture() {
        return (V = !0), !1;
      },
    };
    window.addEventListener("test", t, t),
      window.removeEventListener("test", t, t);
  } catch (t) {}
})();
class k {
  constructor(t, e, s) {
    (this.value = void 0),
      (this.__pendingValue = void 0),
      (this.element = t),
      (this.eventName = e),
      (this.eventContext = s),
      (this.__boundHandleEvent = (t) => this.handleEvent(t));
  }
  setValue(t) {
    this.__pendingValue = t;
  }
  commit() {
    for (; f(this.__pendingValue); ) {
      const t = this.__pendingValue;
      (this.__pendingValue = _), t(this);
    }
    if (this.__pendingValue === _) return;
    const t = this.__pendingValue,
      e = this.value,
      s =
        null == t ||
        (null != e &&
          (t.capture !== e.capture ||
            t.once !== e.once ||
            t.passive !== e.passive)),
      i = null != t && (null == e || s);
    s &&
      this.element.removeEventListener(
        this.eventName,
        this.__boundHandleEvent,
        this.__options
      ),
      i &&
        ((this.__options = R(t)),
        this.element.addEventListener(
          this.eventName,
          this.__boundHandleEvent,
          this.__options
        )),
      (this.value = t),
      (this.__pendingValue = _);
  }
  handleEvent(t) {
    "function" == typeof this.value
      ? this.value.call(this.eventContext || this.element, t)
      : this.value.handleEvent(t);
  }
}
const R = (t) =>
  t &&
  (V ? { capture: t.capture, passive: t.passive, once: t.once } : t.capture);
function O(t) {
  let e = U.get(t.type);
  void 0 === e &&
    ((e = { stringsArray: new WeakMap(), keyString: new Map() }),
    U.set(t.type, e));
  let s = e.stringsArray.get(t.strings);
  if (void 0 !== s) return s;
  const n = t.strings.join(i);
  return (
    (s = e.keyString.get(n)),
    void 0 === s &&
      ((s = new r(t, t.getTemplateElement())), e.keyString.set(n, s)),
    e.stringsArray.set(t.strings, s),
    s
  );
}
const U = new Map(),
  $ = new WeakMap();
const M = new (class {
  handleAttributeExpressions(t, e, s, i) {
    const n = e[0];
    if ("." === n) {
      return new T(t, e.slice(1), s).parts;
    }
    if ("@" === n) return [new k(t, e.slice(1), i.eventContext)];
    if ("?" === n) return [new E(t, e.slice(1), s)];
    return new P(t, e, s).parts;
  }
  handleTextExpression(t) {
    return new C(t);
  }
})();
"undefined" != typeof window &&
  (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.3.0");
const q = (t, ...e) => new v(t, e, "html", M),
  I = (t, e) => `${t}--${e}`;
let j = !0;
void 0 === window.ShadyCSS
  ? (j = !1)
  : void 0 === window.ShadyCSS.prepareTemplateDom &&
    (console.warn(
      "Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."
    ),
    (j = !1));
const L = (t) => (e) => {
    const s = I(e.type, t);
    let n = U.get(s);
    void 0 === n &&
      ((n = { stringsArray: new WeakMap(), keyString: new Map() }),
      U.set(s, n));
    let o = n.stringsArray.get(e.strings);
    if (void 0 !== o) return o;
    const a = e.strings.join(i);
    if (((o = n.keyString.get(a)), void 0 === o)) {
      const s = e.getTemplateElement();
      j && window.ShadyCSS.prepareTemplateDom(s, t),
        (o = new r(e, s)),
        n.keyString.set(a, o);
    }
    return n.stringsArray.set(e.strings, o), o;
  },
  z = ["html", "svg"],
  F = new Set(),
  H = (t, e, s) => {
    F.add(t);
    const i = s ? s.element : document.createElement("template"),
      n = e.querySelectorAll("style"),
      { length: o } = n;
    if (0 === o) return void window.ShadyCSS.prepareTemplateStyles(i, t);
    const r = document.createElement("style");
    for (let t = 0; t < o; t++) {
      const e = n[t];
      e.parentNode.removeChild(e), (r.textContent += e.textContent);
    }
    ((t) => {
      z.forEach((e) => {
        const s = U.get(I(e, t));
        void 0 !== s &&
          s.keyString.forEach((t) => {
            const {
                element: { content: e },
              } = t,
              s = new Set();
            Array.from(e.querySelectorAll("style")).forEach((t) => {
              s.add(t);
            }),
              d(t, s);
          });
      });
    })(t);
    const a = i.content;
    s
      ? (function (t, e, s = null) {
          const {
            element: { content: i },
            parts: n,
          } = t;
          if (null == s) return void i.appendChild(e);
          const o = document.createTreeWalker(i, 133, null, !1);
          let r = u(n),
            a = 0,
            l = -1;
          for (; o.nextNode(); )
            for (
              l++,
                o.currentNode === s &&
                  ((a = p(e)), s.parentNode.insertBefore(e, s));
              -1 !== r && n[r].index === l;

            ) {
              if (a > 0) {
                for (; -1 !== r; ) (n[r].index += a), (r = u(n, r));
                return;
              }
              r = u(n, r);
            }
        })(s, r, a.firstChild)
      : a.insertBefore(r, a.firstChild),
      window.ShadyCSS.prepareTemplateStyles(i, t);
    const l = a.querySelector("style");
    if (window.ShadyCSS.nativeShadow && null !== l)
      e.insertBefore(l.cloneNode(!0), e.firstChild);
    else if (s) {
      a.insertBefore(r, a.firstChild);
      const t = new Set();
      t.add(r), d(s, t);
    }
  };
window.JSCompiler_renameProperty = (t, e) => t;
const D = {
    toAttribute(t, e) {
      switch (e) {
        case Boolean:
          return t ? "" : null;
        case Object:
        case Array:
          return null == t ? t : JSON.stringify(t);
      }
      return t;
    },
    fromAttribute(t, e) {
      switch (e) {
        case Boolean:
          return null !== t;
        case Number:
          return null === t ? null : Number(t);
        case Object:
        case Array:
          return JSON.parse(t);
      }
      return t;
    },
  },
  B = (t, e) => e !== t && (e == e || t == t),
  W = { attribute: !0, type: String, converter: D, reflect: !1, hasChanged: B };
class J extends HTMLElement {
  constructor() {
    super(), this.initialize();
  }
  static get observedAttributes() {
    this.finalize();
    const t = [];
    return (
      this._classProperties.forEach((e, s) => {
        const i = this._attributeNameForProperty(s, e);
        void 0 !== i && (this._attributeToPropertyMap.set(i, s), t.push(i));
      }),
      t
    );
  }
  static _ensureClassProperties() {
    if (
      !this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))
    ) {
      this._classProperties = new Map();
      const t = Object.getPrototypeOf(this)._classProperties;
      void 0 !== t && t.forEach((t, e) => this._classProperties.set(e, t));
    }
  }
  static createProperty(t, e = W) {
    if (
      (this._ensureClassProperties(),
      this._classProperties.set(t, e),
      e.noAccessor || this.prototype.hasOwnProperty(t))
    )
      return;
    const s = "symbol" == typeof t ? Symbol() : `__${t}`,
      i = this.getPropertyDescriptor(t, s, e);
    void 0 !== i && Object.defineProperty(this.prototype, t, i);
  }
  static getPropertyDescriptor(t, e, s) {
    return {
      get() {
        return this[e];
      },
      set(i) {
        const n = this[t];
        (this[e] = i), this.requestUpdateInternal(t, n, s);
      },
      configurable: !0,
      enumerable: !0,
    };
  }
  static getPropertyOptions(t) {
    return (this._classProperties && this._classProperties.get(t)) || W;
  }
  static finalize() {
    const t = Object.getPrototypeOf(this);
    if (
      (t.hasOwnProperty("finalized") || t.finalize(),
      (this.finalized = !0),
      this._ensureClassProperties(),
      (this._attributeToPropertyMap = new Map()),
      this.hasOwnProperty(JSCompiler_renameProperty("properties", this)))
    ) {
      const t = this.properties,
        e = [
          ...Object.getOwnPropertyNames(t),
          ...("function" == typeof Object.getOwnPropertySymbols
            ? Object.getOwnPropertySymbols(t)
            : []),
        ];
      for (const s of e) this.createProperty(s, t[s]);
    }
  }
  static _attributeNameForProperty(t, e) {
    const s = e.attribute;
    return !1 === s
      ? void 0
      : "string" == typeof s
      ? s
      : "string" == typeof t
      ? t.toLowerCase()
      : void 0;
  }
  static _valueHasChanged(t, e, s = B) {
    return s(t, e);
  }
  static _propertyValueFromAttribute(t, e) {
    const s = e.type,
      i = e.converter || D,
      n = "function" == typeof i ? i : i.fromAttribute;
    return n ? n(t, s) : t;
  }
  static _propertyValueToAttribute(t, e) {
    if (void 0 === e.reflect) return;
    const s = e.type,
      i = e.converter;
    return ((i && i.toAttribute) || D.toAttribute)(t, s);
  }
  initialize() {
    (this._updateState = 0),
      (this._updatePromise = new Promise(
        (t) => (this._enableUpdatingResolver = t)
      )),
      (this._changedProperties = new Map()),
      this._saveInstanceProperties(),
      this.requestUpdateInternal();
  }
  _saveInstanceProperties() {
    this.constructor._classProperties.forEach((t, e) => {
      if (this.hasOwnProperty(e)) {
        const t = this[e];
        delete this[e],
          this._instanceProperties || (this._instanceProperties = new Map()),
          this._instanceProperties.set(e, t);
      }
    });
  }
  _applyInstanceProperties() {
    this._instanceProperties.forEach((t, e) => (this[e] = t)),
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
  attributeChangedCallback(t, e, s) {
    e !== s && this._attributeToProperty(t, s);
  }
  _propertyToAttribute(t, e, s = W) {
    const i = this.constructor,
      n = i._attributeNameForProperty(t, s);
    if (void 0 !== n) {
      const t = i._propertyValueToAttribute(e, s);
      if (void 0 === t) return;
      (this._updateState = 8 | this._updateState),
        null == t ? this.removeAttribute(n) : this.setAttribute(n, t),
        (this._updateState = -9 & this._updateState);
    }
  }
  _attributeToProperty(t, e) {
    if (8 & this._updateState) return;
    const s = this.constructor,
      i = s._attributeToPropertyMap.get(t);
    if (void 0 !== i) {
      const t = s.getPropertyOptions(i);
      (this._updateState = 16 | this._updateState),
        (this[i] = s._propertyValueFromAttribute(e, t)),
        (this._updateState = -17 & this._updateState);
    }
  }
  requestUpdateInternal(t, e, s) {
    let i = !0;
    if (void 0 !== t) {
      const n = this.constructor;
      (s = s || n.getPropertyOptions(t)),
        n._valueHasChanged(this[t], e, s.hasChanged)
          ? (this._changedProperties.has(t) ||
              this._changedProperties.set(t, e),
            !0 !== s.reflect ||
              16 & this._updateState ||
              (void 0 === this._reflectingProperties &&
                (this._reflectingProperties = new Map()),
              this._reflectingProperties.set(t, s)))
          : (i = !1);
    }
    !this._hasRequestedUpdate &&
      i &&
      (this._updatePromise = this._enqueueUpdate());
  }
  requestUpdate(t, e) {
    return this.requestUpdateInternal(t, e), this.updateComplete;
  }
  async _enqueueUpdate() {
    this._updateState = 4 | this._updateState;
    try {
      await this._updatePromise;
    } catch (t) {}
    const t = this.performUpdate();
    return null != t && (await t), !this._hasRequestedUpdate;
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
    let t = !1;
    const e = this._changedProperties;
    try {
      (t = this.shouldUpdate(e)), t ? this.update(e) : this._markUpdated();
    } catch (e) {
      throw ((t = !1), this._markUpdated(), e);
    }
    t &&
      (1 & this._updateState ||
        ((this._updateState = 1 | this._updateState), this.firstUpdated(e)),
      this.updated(e));
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
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    void 0 !== this._reflectingProperties &&
      this._reflectingProperties.size > 0 &&
      (this._reflectingProperties.forEach((t, e) =>
        this._propertyToAttribute(e, this[e], t)
      ),
      (this._reflectingProperties = void 0)),
      this._markUpdated();
  }
  updated(t) {}
  firstUpdated(t) {}
}
J.finalized = !0;
const Y = (t, e) =>
  "method" === e.kind && e.descriptor && !("value" in e.descriptor)
    ? Object.assign(Object.assign({}, e), {
        finisher(s) {
          s.createProperty(e.key, t);
        },
      })
    : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        initializer() {
          "function" == typeof e.initializer &&
            (this[e.key] = e.initializer.call(this));
        },
        finisher(s) {
          s.createProperty(e.key, t);
        },
      };
function G(t) {
  return (e, s) =>
    void 0 !== s
      ? ((t, e, s) => {
          e.constructor.createProperty(s, t);
        })(t, e, s)
      : Y(t, e);
}
const K =
    window.ShadowRoot &&
    (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) &&
    "adoptedStyleSheets" in Document.prototype &&
    "replace" in CSSStyleSheet.prototype,
  Q = Symbol();
class X {
  constructor(t, e) {
    if (e !== Q)
      throw new Error(
        "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
      );
    this.cssText = t;
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
const Z = (t, ...e) => {
  const s = e.reduce(
    (e, s, i) =>
      e +
      ((t) => {
        if (t instanceof X) return t.cssText;
        if ("number" == typeof t) return t;
        throw new Error(
          `Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`
        );
      })(s) +
      t[i + 1],
    t[0]
  );
  return new X(s, Q);
};
(window.litElementVersions || (window.litElementVersions = [])).push("2.4.0");
const tt = {};
class et extends J {
  static getStyles() {
    return this.styles;
  }
  static _getUniqueStyles() {
    if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this))) return;
    const t = this.getStyles();
    if (Array.isArray(t)) {
      const e = (t, s) =>
          t.reduceRight(
            (t, s) => (Array.isArray(s) ? e(s, t) : (t.add(s), t)),
            s
          ),
        s = e(t, new Set()),
        i = [];
      s.forEach((t) => i.unshift(t)), (this._styles = i);
    } else this._styles = void 0 === t ? [] : [t];
    this._styles = this._styles.map((t) => {
      if (t instanceof CSSStyleSheet && !K) {
        const e = Array.prototype.slice
          .call(t.cssRules)
          .reduce((t, e) => t + e.cssText, "");
        return new X(String(e), Q);
      }
      return t;
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
    const t = this.constructor._styles;
    0 !== t.length &&
      (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow
        ? K
          ? (this.renderRoot.adoptedStyleSheets = t.map((t) =>
              t instanceof CSSStyleSheet ? t : t.styleSheet
            ))
          : (this._needsShimAdoptedStyleSheets = !0)
        : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(
            t.map((t) => t.cssText),
            this.localName
          ));
  }
  connectedCallback() {
    super.connectedCallback(),
      this.hasUpdated &&
        void 0 !== window.ShadyCSS &&
        window.ShadyCSS.styleElement(this);
  }
  update(t) {
    const e = this.render();
    super.update(t),
      e !== tt &&
        this.constructor.render(e, this.renderRoot, {
          scopeName: this.localName,
          eventContext: this,
        }),
      this._needsShimAdoptedStyleSheets &&
        ((this._needsShimAdoptedStyleSheets = !1),
        this.constructor._styles.forEach((t) => {
          const e = document.createElement("style");
          (e.textContent = t.cssText), this.renderRoot.appendChild(e);
        }));
  }
  render() {
    return tt;
  }
}
(et.finalized = !0),
  (et.render = (t, e, i) => {
    if (!i || "object" != typeof i || !i.scopeName)
      throw new Error("The `scopeName` option is required.");
    const n = i.scopeName,
      o = $.has(e),
      r = j && 11 === e.nodeType && !!e.host,
      a = r && !F.has(n),
      l = a ? document.createDocumentFragment() : e;
    if (
      (((t, e, i) => {
        let n = $.get(e);
        void 0 === n &&
          (s(e, e.firstChild),
          $.set(e, (n = new C(Object.assign({ templateFactory: O }, i)))),
          n.appendInto(e)),
          n.setValue(t),
          n.commit();
      })(t, l, Object.assign({ templateFactory: L(n) }, i)),
      a)
    ) {
      const t = $.get(l);
      $.delete(l);
      const i = t.value instanceof g ? t.value.template : void 0;
      H(n, l, i), s(e, e.firstChild), e.appendChild(l), $.set(e, t);
    }
    !o && r && window.ShadyCSS.styleElement(e.host);
  });
var st = "20.0.4";
async function it(t, e, s = !1) {
  let i = t;
  "string" == typeof e && (e = e.split(/(\$| )/)),
    "" === e[e.length - 1] && e.pop();
  for (const [t, n] of e.entries())
    if (n.trim().length) {
      if (!i) return null;
      i.localName &&
        i.localName.includes("-") &&
        (await customElements.whenDefined(i.localName)),
        i.updateComplete && (await i.updateComplete),
        (i =
          "$" === n
            ? s && t == e.length - 1
              ? [i.shadowRoot]
              : i.shadowRoot
            : s && t == e.length - 1
            ? i.querySelectorAll(n)
            : i.querySelector(n));
    }
  return i;
}
const nt = { open: !1, padding: 24, group_config: {}, tap_unfold: void 0 };
function ot(t) {
  if (void 0 !== t) return "string" == typeof t ? { entity: t } : t;
}
async function rt(t, e = 0) {
  return (
    100 != e &&
    !!t &&
    ("hui-entities-card" === t.localName ||
      "hui-picture-elements-card" === t.localName ||
      (t.updateComplete && (await t.updateComplete),
      t.parentElement
        ? rt(t.parentElement)
        : t.parentNode
        ? rt(t.parentNode)
        : !!t.host && rt(t.host)))
  );
}
class at extends et {
  constructor() {
    super(...arguments), (this.open = !1);
  }
  setConfig(t) {
    var e, s;
    (this._config = t = Object.assign({}, nt, t)),
      (this.open = this.open || this._config.open);
    let i = ot(t.entity || t.head);
    if (!i) throw new Error("No fold head specified");
    void 0 === this._config.clickable &&
      void 0 === i.entity &&
      void 0 === i.tap_action &&
      (this._config.clickable = !0);
    let n = t.entities || t.items;
    if (
      (i.entity &&
        void 0 === n &&
        (n =
          null ===
            (s =
              null ===
                (e = (document.querySelector("hc-main")
                  ? document.querySelector("hc-main").hass
                  : document.querySelector("home-assistant")
                  ? document.querySelector("home-assistant").hass
                  : void 0
                ).states[i.entity]) || void 0 === e
                ? void 0
                : e.attributes) || void 0 === s
            ? void 0
            : s.entity_id),
      void 0 === n)
    )
      throw new Error("No entities specified.");
    if (!n || !Array.isArray(n)) throw new Error("Entities must be a list.");
    (async () => {
      (this.head = await this._createRow(i, !0)),
        (this.rows = await Promise.all(
          n.map(async (t) => this._createRow(ot(t)))
        ));
    })();
  }
  async _createRow(t, e = !1) {
    const s = await window.loadCardHelpers();
    e || (t = Object.assign({}, this._config.group_config, t));
    const i = s.createRowElement(t);
    return this.applyStyle(i, t, e), this._hass && (i.hass = this._hass), i;
  }
  async applyStyle(t, e, s = !1) {
    if (s && "hui-section-row" === t.localName) {
      t.style.minHeight = "53px";
      (
        await (async function (t, e, s = !1, i = 1e4) {
          return Promise.race([
            it(t, e, s),
            new Promise((t, e) => setTimeout(() => e(new Error("timeout")), i)),
          ]).catch((t) => {
            if (!t.message || "timeout" !== t.message) throw t;
            return null;
          });
        })(t, "$.divider")
      ).style.marginRight = "-56px";
    }
    await customElements.whenDefined("card-mod"),
      customElements
        .get("card-mod")
        .applyToElement(t, "row", e.card_mod ? e.card_mod.style : e.style, {
          config: e,
        });
  }
  toggle(t) {
    t && t.stopPropagation(), (this.open = !this.open);
  }
  set hass(t) {
    var e;
    (this._hass = t),
      null === (e = this.rows) ||
        void 0 === e ||
        e.forEach((e) => (e.hass = t)),
      this.head && (this.head.hass = t);
  }
  firstUpdated() {
    this.shadowRoot
      .querySelector("#head")
      .addEventListener("click", (t) => this._handleClick(t), { capture: !0 }),
      rt(this).then((t) => {
        t ||
          !0 === this._config.mute ||
          (console.info(
            "%cYou are doing it wrong!",
            "color: red; font-weight: bold",
            ""
          ),
          console.info(
            "Fold-entity-row should only EVER be used INSIDE an ENTITIES CARD."
          ),
          console.info(
            "See https://github.com/thomasloven/lovelace-fold-entity-row/issues/146"
          ));
      });
  }
  _customEvent(t) {
    t.detail.fold_row && this.toggle(t);
  }
  _handleClick(t) {
    this._config.clickable && this.toggle(t);
  }
  render() {
    return q`
      <div id="head" @ll-custom=${this._customEvent} ?open=${this.open}>
        ${this.head}
        <ha-icon
          @click=${this.toggle}
          icon=${this.open ? "mdi:chevron-up" : "mdi:chevron-down"}
        ></ha-icon>
      </div>

      <div
        id="items"
        ?open=${this.open}
        style=${`padding-left: ${this._config.padding}px`}
      >
        ${this.rows}
      </div>
    `;
  }
  static get styles() {
    return Z`
      #head {
        display: flex;
        align-items: center;
        --toggle-icon-width: 24px;
      }
      #head :not(ha-icon) {
        flex-grow: 1;
        max-width: calc(100% - var(--toggle-icon-width));
      }
      #head ha-icon {
        width: var(--toggle-icon-width);
        cursor: pointer;
      }

      #items {
        padding: 0;
        margin: 0;
        overflow: hidden;
        max-height: 0;
      }
      #items[open] {
        overflow: visible;
        max-height: none;
      }
    `;
  }
}
t([G()], at.prototype, "open", void 0),
  t([G()], at.prototype, "head", void 0),
  t([G()], at.prototype, "rows", void 0),
  customElements.get("fold-entity-row") ||
    (customElements.define("fold-entity-row", at),
    console.info(
      `%cFOLD-ENTITY-ROW ${st} IS INSTALLED`,
      "color: green; font-weight: bold",
      ""
    ));
export { rt as findParentCard };
