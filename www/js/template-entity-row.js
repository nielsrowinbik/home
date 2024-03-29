function t(t, e, i, s) {
  var o,
    n = arguments.length,
    r =
      n < 3 ? e : null === s ? (s = Object.getOwnPropertyDescriptor(e, i)) : s;
  if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
    r = Reflect.decorate(t, e, i, s);
  else
    for (var l = t.length - 1; l >= 0; l--)
      (o = t[l]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
  return n > 3 && r && Object.defineProperty(e, i, r), r;
}
const e =
    window.ShadowRoot &&
    (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) &&
    "adoptedStyleSheets" in Document.prototype &&
    "replace" in CSSStyleSheet.prototype,
  i = Symbol();
class s {
  constructor(t, e) {
    if (e !== i)
      throw Error(
        "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
      );
    this.cssText = t;
  }
  get styleSheet() {
    return (
      e &&
        void 0 === this.t &&
        ((this.t = new CSSStyleSheet()), this.t.replaceSync(this.cssText)),
      this.t
    );
  }
  toString() {
    return this.cssText;
  }
}
const o = new Map(),
  n = (t) => {
    let e = o.get(t);
    return void 0 === e && o.set(t, (e = new s(t, i))), e;
  },
  r = (t, ...e) => {
    const i =
      1 === t.length
        ? t[0]
        : e.reduce(
            (e, i, o) =>
              e +
              ((t) => {
                if (t instanceof s) return t.cssText;
                if ("number" == typeof t) return t;
                throw Error(
                  "Value passed to 'css' function must be a 'css' function result: " +
                    t +
                    ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                );
              })(i) +
              t[o + 1],
            t[0]
          );
    return n(i);
  },
  l = e
    ? (t) => t
    : (t) =>
        t instanceof CSSStyleSheet
          ? ((t) => {
              let e = "";
              for (const i of t.cssRules) e += i.cssText;
              return ((t) => n("string" == typeof t ? t : t + ""))(e);
            })(t)
          : t;
var a, c, h, d;
const u = {
    toAttribute(t, e) {
      switch (e) {
        case Boolean:
          t = t ? "" : null;
          break;
        case Object:
        case Array:
          t = null == t ? t : JSON.stringify(t);
      }
      return t;
    },
    fromAttribute(t, e) {
      let i = t;
      switch (e) {
        case Boolean:
          i = null !== t;
          break;
        case Number:
          i = null === t ? null : Number(t);
          break;
        case Object:
        case Array:
          try {
            i = JSON.parse(t);
          } catch (t) {
            i = null;
          }
      }
      return i;
    },
  },
  p = (t, e) => e !== t && (e == e || t == t),
  v = { attribute: !0, type: String, converter: u, reflect: !1, hasChanged: p };
class f extends HTMLElement {
  constructor() {
    super(),
      (this.Πi = new Map()),
      (this.Πo = void 0),
      (this.Πl = void 0),
      (this.isUpdatePending = !1),
      (this.hasUpdated = !1),
      (this.Πh = null),
      this.u();
  }
  static addInitializer(t) {
    var e;
    (null !== (e = this.v) && void 0 !== e) || (this.v = []), this.v.push(t);
  }
  static get observedAttributes() {
    this.finalize();
    const t = [];
    return (
      this.elementProperties.forEach((e, i) => {
        const s = this.Πp(i, e);
        void 0 !== s && (this.Πm.set(s, i), t.push(s));
      }),
      t
    );
  }
  static createProperty(t, e = v) {
    if (
      (e.state && (e.attribute = !1),
      this.finalize(),
      this.elementProperties.set(t, e),
      !e.noAccessor && !this.prototype.hasOwnProperty(t))
    ) {
      const i = "symbol" == typeof t ? Symbol() : "__" + t,
        s = this.getPropertyDescriptor(t, i, e);
      void 0 !== s && Object.defineProperty(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, e, i) {
    return {
      get() {
        return this[e];
      },
      set(s) {
        const o = this[t];
        (this[e] = s), this.requestUpdate(t, o, i);
      },
      configurable: !0,
      enumerable: !0,
    };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) || v;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized")) return !1;
    this.finalized = !0;
    const t = Object.getPrototypeOf(this);
    if (
      (t.finalize(),
      (this.elementProperties = new Map(t.elementProperties)),
      (this.Πm = new Map()),
      this.hasOwnProperty("properties"))
    ) {
      const t = this.properties,
        e = [
          ...Object.getOwnPropertyNames(t),
          ...Object.getOwnPropertySymbols(t),
        ];
      for (const i of e) this.createProperty(i, t[i]);
    }
    return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const i = new Set(t.flat(1 / 0).reverse());
      for (const t of i) e.unshift(l(t));
    } else void 0 !== t && e.push(l(t));
    return e;
  }
  static Πp(t, e) {
    const i = e.attribute;
    return !1 === i
      ? void 0
      : "string" == typeof i
      ? i
      : "string" == typeof t
      ? t.toLowerCase()
      : void 0;
  }
  u() {
    var t;
    (this.Πg = new Promise((t) => (this.enableUpdating = t))),
      (this.L = new Map()),
      this.Π_(),
      this.requestUpdate(),
      null === (t = this.constructor.v) ||
        void 0 === t ||
        t.forEach((t) => t(this));
  }
  addController(t) {
    var e, i;
    (null !== (e = this.ΠU) && void 0 !== e ? e : (this.ΠU = [])).push(t),
      void 0 !== this.renderRoot &&
        this.isConnected &&
        (null === (i = t.hostConnected) || void 0 === i || i.call(t));
  }
  removeController(t) {
    var e;
    null === (e = this.ΠU) ||
      void 0 === e ||
      e.splice(this.ΠU.indexOf(t) >>> 0, 1);
  }
  Π_() {
    this.constructor.elementProperties.forEach((t, e) => {
      this.hasOwnProperty(e) && (this.Πi.set(e, this[e]), delete this[e]);
    });
  }
  createRenderRoot() {
    var t;
    const i =
      null !== (t = this.shadowRoot) && void 0 !== t
        ? t
        : this.attachShadow(this.constructor.shadowRootOptions);
    return (
      ((t, i) => {
        e
          ? (t.adoptedStyleSheets = i.map((t) =>
              t instanceof CSSStyleSheet ? t : t.styleSheet
            ))
          : i.forEach((e) => {
              const i = document.createElement("style");
              (i.textContent = e.cssText), t.appendChild(i);
            });
      })(i, this.constructor.elementStyles),
      i
    );
  }
  connectedCallback() {
    var t;
    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()),
      this.enableUpdating(!0),
      null === (t = this.ΠU) ||
        void 0 === t ||
        t.forEach((t) => {
          var e;
          return null === (e = t.hostConnected) || void 0 === e
            ? void 0
            : e.call(t);
        }),
      this.Πl && (this.Πl(), (this.Πo = this.Πl = void 0));
  }
  enableUpdating(t) {}
  disconnectedCallback() {
    var t;
    null === (t = this.ΠU) ||
      void 0 === t ||
      t.forEach((t) => {
        var e;
        return null === (e = t.hostDisconnected) || void 0 === e
          ? void 0
          : e.call(t);
      }),
      (this.Πo = new Promise((t) => (this.Πl = t)));
  }
  attributeChangedCallback(t, e, i) {
    this.K(t, i);
  }
  Πj(t, e, i = v) {
    var s, o;
    const n = this.constructor.Πp(t, i);
    if (void 0 !== n && !0 === i.reflect) {
      const r = (
        null !==
          (o =
            null === (s = i.converter) || void 0 === s
              ? void 0
              : s.toAttribute) && void 0 !== o
          ? o
          : u.toAttribute
      )(e, i.type);
      (this.Πh = t),
        null == r ? this.removeAttribute(n) : this.setAttribute(n, r),
        (this.Πh = null);
    }
  }
  K(t, e) {
    var i, s, o;
    const n = this.constructor,
      r = n.Πm.get(t);
    if (void 0 !== r && this.Πh !== r) {
      const t = n.getPropertyOptions(r),
        l = t.converter,
        a =
          null !==
            (o =
              null !==
                (s =
                  null === (i = l) || void 0 === i
                    ? void 0
                    : i.fromAttribute) && void 0 !== s
                ? s
                : "function" == typeof l
                ? l
                : null) && void 0 !== o
            ? o
            : u.fromAttribute;
      (this.Πh = r), (this[r] = a(e, t.type)), (this.Πh = null);
    }
  }
  requestUpdate(t, e, i) {
    let s = !0;
    void 0 !== t &&
      (((i = i || this.constructor.getPropertyOptions(t)).hasChanged || p)(
        this[t],
        e
      )
        ? (this.L.has(t) || this.L.set(t, e),
          !0 === i.reflect &&
            this.Πh !== t &&
            (void 0 === this.Πk && (this.Πk = new Map()), this.Πk.set(t, i)))
        : (s = !1)),
      !this.isUpdatePending && s && (this.Πg = this.Πq());
  }
  async Πq() {
    this.isUpdatePending = !0;
    try {
      for (await this.Πg; this.Πo; ) await this.Πo;
    } catch (t) {
      Promise.reject(t);
    }
    const t = this.performUpdate();
    return null != t && (await t), !this.isUpdatePending;
  }
  performUpdate() {
    var t;
    if (!this.isUpdatePending) return;
    this.hasUpdated,
      this.Πi && (this.Πi.forEach((t, e) => (this[e] = t)), (this.Πi = void 0));
    let e = !1;
    const i = this.L;
    try {
      (e = this.shouldUpdate(i)),
        e
          ? (this.willUpdate(i),
            null === (t = this.ΠU) ||
              void 0 === t ||
              t.forEach((t) => {
                var e;
                return null === (e = t.hostUpdate) || void 0 === e
                  ? void 0
                  : e.call(t);
              }),
            this.update(i))
          : this.Π$();
    } catch (t) {
      throw ((e = !1), this.Π$(), t);
    }
    e && this.E(i);
  }
  willUpdate(t) {}
  E(t) {
    var e;
    null === (e = this.ΠU) ||
      void 0 === e ||
      e.forEach((t) => {
        var e;
        return null === (e = t.hostUpdated) || void 0 === e
          ? void 0
          : e.call(t);
      }),
      this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(t)),
      this.updated(t);
  }
  Π$() {
    (this.L = new Map()), (this.isUpdatePending = !1);
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this.Πg;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    void 0 !== this.Πk &&
      (this.Πk.forEach((t, e) => this.Πj(e, this[e], t)), (this.Πk = void 0)),
      this.Π$();
  }
  updated(t) {}
  firstUpdated(t) {}
}
var g, y, m, b;
(f.finalized = !0),
  (f.elementProperties = new Map()),
  (f.elementStyles = []),
  (f.shadowRootOptions = { mode: "open" }),
  null === (c = (a = globalThis).reactiveElementPlatformSupport) ||
    void 0 === c ||
    c.call(a, { ReactiveElement: f }),
  (null !== (h = (d = globalThis).reactiveElementVersions) && void 0 !== h
    ? h
    : (d.reactiveElementVersions = [])
  ).push("1.0.0-rc.2");
const S = globalThis.trustedTypes,
  w = S ? S.createPolicy("lit-html", { createHTML: (t) => t }) : void 0,
  $ = `lit$${(Math.random() + "").slice(9)}$`,
  _ = "?" + $,
  P = `<${_}>`,
  C = document,
  x = (t = "") => C.createComment(t),
  E = (t) => null === t || ("object" != typeof t && "function" != typeof t),
  O = Array.isArray,
  U = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  k = /-->/g,
  H = />/g,
  A =
    />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,
  T = /'/g,
  R = /"/g,
  N = /^(?:script|style|textarea)$/i,
  M = (
    (t) =>
    (e, ...i) => ({ _$litType$: t, strings: e, values: i })
  )(1),
  I = Symbol.for("lit-noChange"),
  j = Symbol.for("lit-nothing"),
  L = new WeakMap(),
  z = C.createTreeWalker(C, 129, null, !1),
  D = (t, e) => {
    const i = t.length - 1,
      s = [];
    let o,
      n = 2 === e ? "<svg>" : "",
      r = U;
    for (let e = 0; e < i; e++) {
      const i = t[e];
      let l,
        a,
        c = -1,
        h = 0;
      for (; h < i.length && ((r.lastIndex = h), (a = r.exec(i)), null !== a); )
        (h = r.lastIndex),
          r === U
            ? "!--" === a[1]
              ? (r = k)
              : void 0 !== a[1]
              ? (r = H)
              : void 0 !== a[2]
              ? (N.test(a[2]) && (o = RegExp("</" + a[2], "g")), (r = A))
              : void 0 !== a[3] && (r = A)
            : r === A
            ? ">" === a[0]
              ? ((r = null != o ? o : U), (c = -1))
              : void 0 === a[1]
              ? (c = -2)
              : ((c = r.lastIndex - a[2].length),
                (l = a[1]),
                (r = void 0 === a[3] ? A : '"' === a[3] ? R : T))
            : r === R || r === T
            ? (r = A)
            : r === k || r === H
            ? (r = U)
            : ((r = A), (o = void 0));
      const d = r === A && t[e + 1].startsWith("/>") ? " " : "";
      n +=
        r === U
          ? i + P
          : c >= 0
          ? (s.push(l), i.slice(0, c) + "$lit$" + i.slice(c) + $ + d)
          : i + $ + (-2 === c ? (s.push(void 0), e) : d);
    }
    const l = n + (t[i] || "<?>") + (2 === e ? "</svg>" : "");
    return [void 0 !== w ? w.createHTML(l) : l, s];
  };
class B {
  constructor({ strings: t, _$litType$: e }, i) {
    let s;
    this.parts = [];
    let o = 0,
      n = 0;
    const r = t.length - 1,
      l = this.parts,
      [a, c] = D(t, e);
    if (
      ((this.el = B.createElement(a, i)),
      (z.currentNode = this.el.content),
      2 === e)
    ) {
      const t = this.el.content,
        e = t.firstChild;
      e.remove(), t.append(...e.childNodes);
    }
    for (; null !== (s = z.nextNode()) && l.length < r; ) {
      if (1 === s.nodeType) {
        if (s.hasAttributes()) {
          const t = [];
          for (const e of s.getAttributeNames())
            if (e.endsWith("$lit$") || e.startsWith($)) {
              const i = c[n++];
              if ((t.push(e), void 0 !== i)) {
                const t = s.getAttribute(i.toLowerCase() + "$lit$").split($),
                  e = /([.?@])?(.*)/.exec(i);
                l.push({
                  type: 1,
                  index: o,
                  name: e[2],
                  strings: t,
                  ctor:
                    "." === e[1] ? K : "?" === e[1] ? Z : "@" === e[1] ? Y : J,
                });
              } else l.push({ type: 6, index: o });
            }
          for (const e of t) s.removeAttribute(e);
        }
        if (N.test(s.tagName)) {
          const t = s.textContent.split($),
            e = t.length - 1;
          if (e > 0) {
            s.textContent = S ? S.emptyScript : "";
            for (let i = 0; i < e; i++)
              s.append(t[i], x()),
                z.nextNode(),
                l.push({ type: 2, index: ++o });
            s.append(t[e], x());
          }
        }
      } else if (8 === s.nodeType)
        if (s.data === _) l.push({ type: 2, index: o });
        else {
          let t = -1;
          for (; -1 !== (t = s.data.indexOf($, t + 1)); )
            l.push({ type: 7, index: o }), (t += $.length - 1);
        }
      o++;
    }
  }
  static createElement(t, e) {
    const i = C.createElement("template");
    return (i.innerHTML = t), i;
  }
}
function q(t, e, i = t, s) {
  var o, n, r, l;
  if (e === I) return e;
  let a =
    void 0 !== s ? (null === (o = i.Σi) || void 0 === o ? void 0 : o[s]) : i.Σo;
  const c = E(e) ? void 0 : e._$litDirective$;
  return (
    (null == a ? void 0 : a.constructor) !== c &&
      (null === (n = null == a ? void 0 : a.O) || void 0 === n || n.call(a, !1),
      void 0 === c ? (a = void 0) : ((a = new c(t)), a.T(t, i, s)),
      void 0 !== s
        ? ((null !== (r = (l = i).Σi) && void 0 !== r ? r : (l.Σi = []))[s] = a)
        : (i.Σo = a)),
    void 0 !== a && (e = q(t, a.S(t, e.values), a, s)),
    e
  );
}
class V {
  constructor(t, e) {
    (this.l = []), (this.N = void 0), (this.D = t), (this.M = e);
  }
  u(t) {
    var e;
    const {
        el: { content: i },
        parts: s,
      } = this.D,
      o = (
        null !== (e = null == t ? void 0 : t.creationScope) && void 0 !== e
          ? e
          : C
      ).importNode(i, !0);
    z.currentNode = o;
    let n = z.nextNode(),
      r = 0,
      l = 0,
      a = s[0];
    for (; void 0 !== a; ) {
      if (r === a.index) {
        let e;
        2 === a.type
          ? (e = new W(n, n.nextSibling, this, t))
          : 1 === a.type
          ? (e = new a.ctor(n, a.name, a.strings, this, t))
          : 6 === a.type && (e = new F(n, this, t)),
          this.l.push(e),
          (a = s[++l]);
      }
      r !== (null == a ? void 0 : a.index) && ((n = z.nextNode()), r++);
    }
    return o;
  }
  v(t) {
    let e = 0;
    for (const i of this.l)
      void 0 !== i &&
        (void 0 !== i.strings
          ? (i.I(t, i, e), (e += i.strings.length - 2))
          : i.I(t[e])),
        e++;
  }
}
class W {
  constructor(t, e, i, s) {
    (this.type = 2),
      (this.N = void 0),
      (this.A = t),
      (this.B = e),
      (this.M = i),
      (this.options = s);
  }
  setConnected(t) {
    var e;
    null === (e = this.P) || void 0 === e || e.call(this, t);
  }
  get parentNode() {
    return this.A.parentNode;
  }
  get startNode() {
    return this.A;
  }
  get endNode() {
    return this.B;
  }
  I(t, e = this) {
    (t = q(this, t, e)),
      E(t)
        ? t === j || null == t || "" === t
          ? (this.H !== j && this.R(), (this.H = j))
          : t !== this.H && t !== I && this.m(t)
        : void 0 !== t._$litType$
        ? this._(t)
        : void 0 !== t.nodeType
        ? this.$(t)
        : ((t) => {
            var e;
            return (
              O(t) ||
              "function" ==
                typeof (null === (e = t) || void 0 === e
                  ? void 0
                  : e[Symbol.iterator])
            );
          })(t)
        ? this.g(t)
        : this.m(t);
  }
  k(t, e = this.B) {
    return this.A.parentNode.insertBefore(t, e);
  }
  $(t) {
    this.H !== t && (this.R(), (this.H = this.k(t)));
  }
  m(t) {
    const e = this.A.nextSibling;
    null !== e &&
    3 === e.nodeType &&
    (null === this.B ? null === e.nextSibling : e === this.B.previousSibling)
      ? (e.data = t)
      : this.$(C.createTextNode(t)),
      (this.H = t);
  }
  _(t) {
    var e;
    const { values: i, _$litType$: s } = t,
      o =
        "number" == typeof s
          ? this.C(t)
          : (void 0 === s.el && (s.el = B.createElement(s.h, this.options)), s);
    if ((null === (e = this.H) || void 0 === e ? void 0 : e.D) === o)
      this.H.v(i);
    else {
      const t = new V(o, this),
        e = t.u(this.options);
      t.v(i), this.$(e), (this.H = t);
    }
  }
  C(t) {
    let e = L.get(t.strings);
    return void 0 === e && L.set(t.strings, (e = new B(t))), e;
  }
  g(t) {
    O(this.H) || ((this.H = []), this.R());
    const e = this.H;
    let i,
      s = 0;
    for (const o of t)
      s === e.length
        ? e.push((i = new W(this.k(x()), this.k(x()), this, this.options)))
        : (i = e[s]),
        i.I(o),
        s++;
    s < e.length && (this.R(i && i.B.nextSibling, s), (e.length = s));
  }
  R(t = this.A.nextSibling, e) {
    var i;
    for (
      null === (i = this.P) || void 0 === i || i.call(this, !1, !0, e);
      t && t !== this.B;

    ) {
      const e = t.nextSibling;
      t.remove(), (t = e);
    }
  }
}
class J {
  constructor(t, e, i, s, o) {
    (this.type = 1),
      (this.H = j),
      (this.N = void 0),
      (this.V = void 0),
      (this.element = t),
      (this.name = e),
      (this.M = s),
      (this.options = o),
      i.length > 2 || "" !== i[0] || "" !== i[1]
        ? ((this.H = Array(i.length - 1).fill(j)), (this.strings = i))
        : (this.H = j);
  }
  get tagName() {
    return this.element.tagName;
  }
  I(t, e = this, i, s) {
    const o = this.strings;
    let n = !1;
    if (void 0 === o)
      (t = q(this, t, e, 0)),
        (n = !E(t) || (t !== this.H && t !== I)),
        n && (this.H = t);
    else {
      const s = t;
      let r, l;
      for (t = o[0], r = 0; r < o.length - 1; r++)
        (l = q(this, s[i + r], e, r)),
          l === I && (l = this.H[r]),
          n || (n = !E(l) || l !== this.H[r]),
          l === j ? (t = j) : t !== j && (t += (null != l ? l : "") + o[r + 1]),
          (this.H[r] = l);
    }
    n && !s && this.W(t);
  }
  W(t) {
    t === j
      ? this.element.removeAttribute(this.name)
      : this.element.setAttribute(this.name, null != t ? t : "");
  }
}
class K extends J {
  constructor() {
    super(...arguments), (this.type = 3);
  }
  W(t) {
    this.element[this.name] = t === j ? void 0 : t;
  }
}
class Z extends J {
  constructor() {
    super(...arguments), (this.type = 4);
  }
  W(t) {
    t && t !== j
      ? this.element.setAttribute(this.name, "")
      : this.element.removeAttribute(this.name);
  }
}
class Y extends J {
  constructor() {
    super(...arguments), (this.type = 5);
  }
  I(t, e = this) {
    var i;
    if ((t = null !== (i = q(this, t, e, 0)) && void 0 !== i ? i : j) === I)
      return;
    const s = this.H,
      o =
        (t === j && s !== j) ||
        t.capture !== s.capture ||
        t.once !== s.once ||
        t.passive !== s.passive,
      n = t !== j && (s === j || o);
    o && this.element.removeEventListener(this.name, this, s),
      n && this.element.addEventListener(this.name, this, t),
      (this.H = t);
  }
  handleEvent(t) {
    var e, i;
    "function" == typeof this.H
      ? this.H.call(
          null !==
            (i =
              null === (e = this.options) || void 0 === e ? void 0 : e.host) &&
            void 0 !== i
            ? i
            : this.element,
          t
        )
      : this.H.handleEvent(t);
  }
}
class F {
  constructor(t, e, i) {
    (this.element = t),
      (this.type = 6),
      (this.N = void 0),
      (this.V = void 0),
      (this.M = e),
      (this.options = i);
  }
  I(t) {
    q(this, t);
  }
}
var G, Q, X, tt, et, it;
null === (y = (g = globalThis).litHtmlPlatformSupport) ||
  void 0 === y ||
  y.call(g, B, W),
  (null !== (m = (b = globalThis).litHtmlVersions) && void 0 !== m
    ? m
    : (b.litHtmlVersions = [])
  ).push("2.0.0-rc.3"),
  (null !== (G = (it = globalThis).litElementVersions) && void 0 !== G
    ? G
    : (it.litElementVersions = [])
  ).push("3.0.0-rc.2");
class st extends f {
  constructor() {
    super(...arguments),
      (this.renderOptions = { host: this }),
      (this.Φt = void 0);
  }
  createRenderRoot() {
    var t, e;
    const i = super.createRenderRoot();
    return (
      (null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t) ||
        (e.renderBefore = i.firstChild),
      i
    );
  }
  update(t) {
    const e = this.render();
    super.update(t),
      (this.Φt = ((t, e, i) => {
        var s, o;
        const n =
          null !== (s = null == i ? void 0 : i.renderBefore) && void 0 !== s
            ? s
            : e;
        let r = n._$litPart$;
        if (void 0 === r) {
          const t =
            null !== (o = null == i ? void 0 : i.renderBefore) && void 0 !== o
              ? o
              : null;
          n._$litPart$ = r = new W(e.insertBefore(x(), t), t, void 0, i);
        }
        return r.I(t), r;
      })(e, this.renderRoot, this.renderOptions));
  }
  connectedCallback() {
    var t;
    super.connectedCallback(),
      null === (t = this.Φt) || void 0 === t || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(),
      null === (t = this.Φt) || void 0 === t || t.setConnected(!1);
  }
  render() {
    return I;
  }
}
(st.finalized = !0),
  (st._$litElement$ = !0),
  null === (X = (Q = globalThis).litElementHydrateSupport) ||
    void 0 === X ||
    X.call(Q, { LitElement: st }),
  null === (et = (tt = globalThis).litElementPlatformSupport) ||
    void 0 === et ||
    et.call(tt, { LitElement: st });
const ot = (t, e) =>
  "method" === e.kind && e.descriptor && !("value" in e.descriptor)
    ? {
        ...e,
        finisher(i) {
          i.createProperty(e.key, t);
        },
      }
    : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        originalKey: e.key,
        initializer() {
          "function" == typeof e.initializer &&
            (this[e.key] = e.initializer.call(this));
        },
        finisher(i) {
          i.createProperty(e.key, t);
        },
      };
function nt(t) {
  return (e, i) =>
    void 0 !== i
      ? ((t, e, i) => {
          e.constructor.createProperty(i, t);
        })(t, e, i)
      : ot(t, e);
}
function rt() {
  return document.querySelector("hc-main")
    ? document.querySelector("hc-main").hass
    : document.querySelector("home-assistant")
    ? document.querySelector("home-assistant").hass
    : void 0;
}
const lt = "lovelace-player-device-id";
function at() {
  if (!localStorage[lt]) {
    const t = () =>
      Math.floor(1e5 * (1 + Math.random()))
        .toString(16)
        .substring(1);
    window.fully && "function" == typeof fully.getDeviceId
      ? (localStorage[lt] = fully.getDeviceId())
      : (localStorage[lt] = `${t()}${t()}-${t()}${t()}`);
  }
  return localStorage[lt];
}
let ct = at();
const ht = new URLSearchParams(window.location.search);
var dt;
function ut(t) {
  return !!String(t).includes("{%") || !!String(t).includes("{{") || void 0;
}
function pt(t, e = {}) {
  return (
    customElements.whenDefined("long-press").then(() => {
      document.body.querySelector("long-press").bind(t);
    }),
    customElements.whenDefined("action-handler").then(() => {
      document.body.querySelector("action-handler").bind(t, e);
    }),
    t
  );
}
ht.get("deviceID") &&
  null !== (dt = ht.get("deviceID")) &&
  ("clear" === dt ? localStorage.removeItem(lt) : (localStorage[lt] = dt),
  (ct = at()));
var vt = "1.3.0";
window.cardMod_template_cache = window.cardMod_template_cache || {};
const ft = window.cardMod_template_cache;
async function gt(t, e, i) {
  const s = rt().connection,
    o = JSON.stringify([e, i]);
  let n = ft[o];
  n
    ? (n.callbacks.has(t) || yt(t), t(n.value), n.callbacks.add(t))
    : (yt(t),
      t(""),
      (i = Object.assign(
        {
          user: rt().user.name,
          browser: ct,
          hash: location.hash.substr(1) || "",
        },
        i
      )),
      (ft[o] = n =
        {
          template: e,
          variables: i,
          value: "",
          callbacks: new Set([t]),
          unsubscribe: s.subscribeMessage(
            (t) =>
              (function (t, e) {
                const i = ft[t];
                i &&
                  ((i.value = e.result),
                  i.callbacks.forEach((t) => t(e.result)));
              })(o, t),
            { type: "render_template", template: e, variables: i }
          ),
        }));
}
async function yt(t) {
  let e;
  for (const [i, s] of Object.entries(ft))
    if (s.callbacks.has(t)) {
      s.callbacks.delete(t),
        0 == s.callbacks.size && ((e = s.unsubscribe), delete ft[i]);
      break;
    }
  e && (await (await e)());
}
const mt = [
    "icon",
    "active",
    "name",
    "secondary",
    "state",
    "condition",
    "image",
    "entity",
    "color",
    "toggle",
    "tap_action",
    "hold_action",
    "double_tap_action",
  ],
  bt = /_\([^)]*\)/g;
class St extends st {
  setConfig(t) {
    (this._config = Object.assign({}, t)),
      (this.config = Object.assign({}, this._config));
    let e = this._config.entity_ids;
    e ||
      !this._config.entity ||
      ut(this._config.entity) ||
      (e = [this._config.entity]);
    for (const e of mt)
      this._config[e] &&
        ut(this._config[e]) &&
        gt(
          (t) => {
            const i = Object.assign({}, this.config);
            "string" == typeof t &&
              (t = t.replace(
                bt,
                (t) => rt().localize(t.substring(2, t.length - 1)) || t
              )),
              (i[e] = t),
              (this.config = i);
          },
          this._config[e],
          { config: t }
        );
  }
  async firstUpdated() {
    const t = this.shadowRoot.querySelector("#staging hui-generic-entity-row");
    if (!t) return;
    await t.updateComplete, (this._action = t._handleAction);
    const e = {
      hasHold: void 0 !== this._config.hold_action,
      hasDoubleClick: void 0 !== this._config.hold_action,
    };
    pt(this.shadowRoot.querySelector("state-badge"), e),
      pt(this.shadowRoot.querySelector(".info"), e);
  }
  _actionHandler(t) {
    if (this._action) return this._action(t);
  }
  render() {
    var t, e;
    const i = this.hass.states[this.config.entity],
      s = (i && JSON.parse(JSON.stringify(i))) || {
        entity_id: "light.",
        attributes: { icon: "no:icon" },
      },
      o = void 0 !== this.config.icon ? this.config.icon || "no:icon" : void 0,
      n = this.config.image,
      r =
        void 0 !== this.config.name
          ? this.config.name
          : (null === (t = null == i ? void 0 : i.attributes) || void 0 === t
              ? void 0
              : t.friendly_name) || (null == i ? void 0 : i.entity_id),
      l = this.config.secondary,
      a =
        void 0 !== this.config.state
          ? this.config.state
          : null == s
          ? void 0
          : s.state,
      c = this.config.active;
    void 0 !== c && (s.attributes.brightness = 255);
    const h = window.getComputedStyle(this),
      d =
        void 0 !== this.config.color || void 0 !== c
          ? null !== (e = this.config.color) && void 0 !== e
            ? e
            : void 0 !== c && c
            ? h.getPropertyValue("--paper-item-icon-active-color")
            : h.getPropertyValue("--paper-item-icon-color")
          : void 0;
    return M`
      <div
        id="wrapper"
        class="${
          void 0 !== this.config.condition &&
          "true" !== String(this.config.condition).toLowerCase()
            ? "hidden"
            : ""
        }"
      >
        <state-badge
          .hass=${this.hass}
          .stateObj=${s}
          @action=${this._actionHandler}
          style="${
            d
              ? `--paper-item-icon-color: ${d}; --paper-item-icon-active-color: ${d};`
              : ""
          }"
          .overrideIcon=${o}
          .overrideImage=${n}
          class="pointer"
        ></state-badge>
        <div class="info pointer" @action="${this._actionHandler}">
          ${r}
          <div class="secondary">${l}</div>
        </div>
        <div class="state">
          ${
            this.config.toggle && i
              ? M`<ha-entity-toggle
                .hass=${this.hass}
                .stateObj=${s}
              ></ha-entity-toggle>`
              : a
          }
        </div>
      </div>
      <div id="staging">
        <hui-generic-entity-row .hass=${this.hass} .config=${this.config}>
        </hui-generic-entity-row>
      </div>
    `;
  }
  static get styles() {
    return [
      customElements.get("hui-generic-entity-row").styles,
      r`
        :host {
          display: inline;
        }
        #wrapper {
          display: flex;
          align-items: center;
          flex-direction: row;
        }
        .state {
          text-align: right;
        }
        #wrapper {
          min-height: 40px;
        }
        #wrapper.hidden {
          display: none;
        }
        #staging {
          display: none;
        }
      `,
    ];
  }
}
t([nt()], St.prototype, "_config", void 0),
  t([nt()], St.prototype, "hass", void 0),
  t([nt()], St.prototype, "config", void 0),
  t([nt()], St.prototype, "_action", void 0),
  customElements.get("template-entity-row") ||
    (customElements.define("template-entity-row", St),
    console.info(
      `%cTEMPLATE-ENTITY-ROW ${vt} IS INSTALLED`,
      "color: green; font-weight: bold",
      ""
    ));
