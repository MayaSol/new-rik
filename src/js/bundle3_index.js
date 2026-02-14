/*! For license information please see bundle3_index.js.LICENSE.txt */
!(function () {
  var t = {
      2897: function (t, e, n) {
        n(4783)(function () {});
      },
      1469: function (t, e, n) {
        const o = n(4783),
          r = n(9828);
        o(function () {
          console.log('add-info.js'), r('.add-info__text.ellipsis');
        });
      },
      5154: function (t, e, n) {
        const o = n(4783),
          { mobileSearchOpen: r } = n(802),
          { mobileSearchClose: i } = n(802);
        o(function () {
          for (
            var t = document.querySelectorAll('.burger'), e = 0;
            e < t.length;
            e++
          )
            t[e].addEventListener('click', n);
          function n() {
            var t = this.getAttribute('data-target-id'),
              e = this.getAttribute('data-target-class-toggle');
            if (
              t &&
              e &&
              (this.classList.contains('burger--animated') &&
                this.classList.toggle('burger--close'),
              document.getElementById(t).classList.toggle(e),
              document.body.classList.toggle('noscroll'),
              'nav-mobile' === t)
            ) {
              var n = document.getElementsByClassName('search-form')[0];
              n &&
                (void 0 === n.navMobileOpen && (n.navMobileOpen = !1),
                (n.navMobileOpen = !n.navMobileOpen),
                n.navMobileOpen ? r(n) : i(n));
            }
          }
        });
      },
      4761: function (t, e, n) {
        n(4783)(function () {
          var t = document.querySelectorAll('.field-select__wrapper');
          for (selectWrapper of t)
            selectWrapper.addEventListener('click', function (t) {
              var e = this.querySelector('select');
              e && e.click();
            });
        });
      },
      3630: function (t, e, n) {
        'use strict';
        function o(t) {
          if (null == t) return window;
          if ('[object Window]' !== t.toString()) {
            var e = t.ownerDocument;
            return (e && e.defaultView) || window;
          }
          return t;
        }
        function r(t) {
          return t instanceof o(t).Element || t instanceof Element;
        }
        function i(t) {
          return t instanceof o(t).HTMLElement || t instanceof HTMLElement;
        }
        function a(t) {
          return (
            'undefined' != typeof ShadowRoot &&
            (t instanceof o(t).ShadowRoot || t instanceof ShadowRoot)
          );
        }
        n.r(e);
        var s = Math.max,
          c = Math.min,
          l = Math.round;
        function u(t, e) {
          void 0 === e && (e = !1);
          var n = t.getBoundingClientRect(),
            o = 1,
            r = 1;
          if (i(t) && e) {
            var a = t.offsetHeight,
              s = t.offsetWidth;
            s > 0 && (o = l(n.width) / s || 1),
              a > 0 && (r = l(n.height) / a || 1);
          }
          return {
            width: n.width / o,
            height: n.height / r,
            top: n.top / r,
            right: n.right / o,
            bottom: n.bottom / r,
            left: n.left / o,
            x: n.left / o,
            y: n.top / r,
          };
        }
        function d(t) {
          var e = o(t);
          return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
        }
        function f(t) {
          return t ? (t.nodeName || '').toLowerCase() : null;
        }
        function p(t) {
          return ((r(t) ? t.ownerDocument : t.document) || window.document)
            .documentElement;
        }
        function v(t) {
          return u(p(t)).left + d(t).scrollLeft;
        }
        function m(t) {
          return o(t).getComputedStyle(t);
        }
        function h(t) {
          var e = m(t),
            n = e.overflow,
            o = e.overflowX,
            r = e.overflowY;
          return /auto|scroll|overlay|hidden/.test(n + r + o);
        }
        function g(t, e, n) {
          void 0 === n && (n = !1);
          var r,
            a,
            s = i(e),
            c =
              i(e) &&
              (function (t) {
                var e = t.getBoundingClientRect(),
                  n = l(e.width) / t.offsetWidth || 1,
                  o = l(e.height) / t.offsetHeight || 1;
                return 1 !== n || 1 !== o;
              })(e),
            m = p(e),
            g = u(t, c),
            y = { scrollLeft: 0, scrollTop: 0 },
            b = { x: 0, y: 0 };
          return (
            (s || (!s && !n)) &&
              (('body' !== f(e) || h(m)) &&
                (y =
                  (r = e) !== o(r) && i(r)
                    ? { scrollLeft: (a = r).scrollLeft, scrollTop: a.scrollTop }
                    : d(r)),
              i(e)
                ? (((b = u(e, !0)).x += e.clientLeft), (b.y += e.clientTop))
                : m && (b.x = v(m))),
            {
              x: g.left + y.scrollLeft - b.x,
              y: g.top + y.scrollTop - b.y,
              width: g.width,
              height: g.height,
            }
          );
        }
        function y(t) {
          var e = u(t),
            n = t.offsetWidth,
            o = t.offsetHeight;
          return (
            Math.abs(e.width - n) <= 1 && (n = e.width),
            Math.abs(e.height - o) <= 1 && (o = e.height),
            { x: t.offsetLeft, y: t.offsetTop, width: n, height: o }
          );
        }
        function b(t) {
          return 'html' === f(t)
            ? t
            : t.assignedSlot || t.parentNode || (a(t) ? t.host : null) || p(t);
        }
        function w(t) {
          return ['html', 'body', '#document'].indexOf(f(t)) >= 0
            ? t.ownerDocument.body
            : i(t) && h(t)
            ? t
            : w(b(t));
        }
        function x(t, e) {
          var n;
          void 0 === e && (e = []);
          var r = w(t),
            i = r === (null == (n = t.ownerDocument) ? void 0 : n.body),
            a = o(r),
            s = i ? [a].concat(a.visualViewport || [], h(r) ? r : []) : r,
            c = e.concat(s);
          return i ? c : c.concat(x(b(s)));
        }
        function O(t) {
          return ['table', 'td', 'th'].indexOf(f(t)) >= 0;
        }
        function E(t) {
          return i(t) && 'fixed' !== m(t).position ? t.offsetParent : null;
        }
        function L(t) {
          for (
            var e = o(t), n = E(t);
            n && O(n) && 'static' === m(n).position;

          )
            n = E(n);
          return n &&
            ('html' === f(n) || ('body' === f(n) && 'static' === m(n).position))
            ? e
            : n ||
                (function (t) {
                  var e =
                    -1 !== navigator.userAgent.toLowerCase().indexOf('firefox');
                  if (
                    -1 !== navigator.userAgent.indexOf('Trident') &&
                    i(t) &&
                    'fixed' === m(t).position
                  )
                    return null;
                  var n = b(t);
                  for (
                    a(n) && (n = n.host);
                    i(n) && ['html', 'body'].indexOf(f(n)) < 0;

                  ) {
                    var o = m(n);
                    if (
                      'none' !== o.transform ||
                      'none' !== o.perspective ||
                      'paint' === o.contain ||
                      -1 !==
                        ['transform', 'perspective'].indexOf(o.willChange) ||
                      (e && 'filter' === o.willChange) ||
                      (e && o.filter && 'none' !== o.filter)
                    )
                      return n;
                    n = n.parentNode;
                  }
                  return null;
                })(t) ||
                e;
        }
        var S = 'top',
          A = 'bottom',
          T = 'right',
          _ = 'left',
          C = 'auto',
          k = [S, A, T, _],
          M = 'start',
          j = 'end',
          D = 'viewport',
          P = 'popper',
          $ = k.reduce(function (t, e) {
            return t.concat([e + '-' + M, e + '-' + j]);
          }, []),
          V = [].concat(k, [C]).reduce(function (t, e) {
            return t.concat([e, e + '-' + M, e + '-' + j]);
          }, []),
          N = [
            'beforeRead',
            'read',
            'afterRead',
            'beforeMain',
            'main',
            'afterMain',
            'beforeWrite',
            'write',
            'afterWrite',
          ];
        function I(t) {
          var e = new Map(),
            n = new Set(),
            o = [];
          function r(t) {
            n.add(t.name),
              []
                .concat(t.requires || [], t.requiresIfExists || [])
                .forEach(function (t) {
                  if (!n.has(t)) {
                    var o = e.get(t);
                    o && r(o);
                  }
                }),
              o.push(t);
          }
          return (
            t.forEach(function (t) {
              e.set(t.name, t);
            }),
            t.forEach(function (t) {
              n.has(t.name) || r(t);
            }),
            o
          );
        }
        var q = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
        function B() {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          return !e.some(function (t) {
            return !(t && 'function' == typeof t.getBoundingClientRect);
          });
        }
        function W(t) {
          void 0 === t && (t = {});
          var e = t,
            n = e.defaultModifiers,
            o = void 0 === n ? [] : n,
            i = e.defaultOptions,
            a = void 0 === i ? q : i;
          return function (t, e, n) {
            void 0 === n && (n = a);
            var i,
              s,
              c = {
                placement: 'bottom',
                orderedModifiers: [],
                options: Object.assign({}, q, a),
                modifiersData: {},
                elements: { reference: t, popper: e },
                attributes: {},
                styles: {},
              },
              l = [],
              u = !1,
              d = {
                state: c,
                setOptions: function (n) {
                  var i = 'function' == typeof n ? n(c.options) : n;
                  f(),
                    (c.options = Object.assign({}, a, c.options, i)),
                    (c.scrollParents = {
                      reference: r(t)
                        ? x(t)
                        : t.contextElement
                        ? x(t.contextElement)
                        : [],
                      popper: x(e),
                    });
                  var s,
                    u,
                    p = (function (t) {
                      var e = I(t);
                      return N.reduce(function (t, n) {
                        return t.concat(
                          e.filter(function (t) {
                            return t.phase === n;
                          })
                        );
                      }, []);
                    })(
                      ((s = [].concat(o, c.options.modifiers)),
                      (u = s.reduce(function (t, e) {
                        var n = t[e.name];
                        return (
                          (t[e.name] = n
                            ? Object.assign({}, n, e, {
                                options: Object.assign(
                                  {},
                                  n.options,
                                  e.options
                                ),
                                data: Object.assign({}, n.data, e.data),
                              })
                            : e),
                          t
                        );
                      }, {})),
                      Object.keys(u).map(function (t) {
                        return u[t];
                      }))
                    );
                  return (
                    (c.orderedModifiers = p.filter(function (t) {
                      return t.enabled;
                    })),
                    c.orderedModifiers.forEach(function (t) {
                      var e = t.name,
                        n = t.options,
                        o = void 0 === n ? {} : n,
                        r = t.effect;
                      if ('function' == typeof r) {
                        var i = r({
                          state: c,
                          name: e,
                          instance: d,
                          options: o,
                        });
                        l.push(i || function () {});
                      }
                    }),
                    d.update()
                  );
                },
                forceUpdate: function () {
                  if (!u) {
                    var t = c.elements,
                      e = t.reference,
                      n = t.popper;
                    if (B(e, n)) {
                      (c.rects = {
                        reference: g(e, L(n), 'fixed' === c.options.strategy),
                        popper: y(n),
                      }),
                        (c.reset = !1),
                        (c.placement = c.options.placement),
                        c.orderedModifiers.forEach(function (t) {
                          return (c.modifiersData[t.name] = Object.assign(
                            {},
                            t.data
                          ));
                        });
                      for (var o = 0; o < c.orderedModifiers.length; o++)
                        if (!0 !== c.reset) {
                          var r = c.orderedModifiers[o],
                            i = r.fn,
                            a = r.options,
                            s = void 0 === a ? {} : a,
                            l = r.name;
                          'function' == typeof i &&
                            (c =
                              i({
                                state: c,
                                options: s,
                                name: l,
                                instance: d,
                              }) || c);
                        } else (c.reset = !1), (o = -1);
                    }
                  }
                },
                update:
                  ((i = function () {
                    return new Promise(function (t) {
                      d.forceUpdate(), t(c);
                    });
                  }),
                  function () {
                    return (
                      s ||
                        (s = new Promise(function (t) {
                          Promise.resolve().then(function () {
                            (s = void 0), t(i());
                          });
                        })),
                      s
                    );
                  }),
                destroy: function () {
                  f(), (u = !0);
                },
              };
            if (!B(t, e)) return d;
            function f() {
              l.forEach(function (t) {
                return t();
              }),
                (l = []);
            }
            return (
              d.setOptions(n).then(function (t) {
                !u && n.onFirstUpdate && n.onFirstUpdate(t);
              }),
              d
            );
          };
        }
        var H = { passive: !0 };
        function R(t) {
          return t.split('-')[0];
        }
        function z(t) {
          return t.split('-')[1];
        }
        function F(t) {
          return ['top', 'bottom'].indexOf(t) >= 0 ? 'x' : 'y';
        }
        function Y(t) {
          var e,
            n = t.reference,
            o = t.element,
            r = t.placement,
            i = r ? R(r) : null,
            a = r ? z(r) : null,
            s = n.x + n.width / 2 - o.width / 2,
            c = n.y + n.height / 2 - o.height / 2;
          switch (i) {
            case S:
              e = { x: s, y: n.y - o.height };
              break;
            case A:
              e = { x: s, y: n.y + n.height };
              break;
            case T:
              e = { x: n.x + n.width, y: c };
              break;
            case _:
              e = { x: n.x - o.width, y: c };
              break;
            default:
              e = { x: n.x, y: n.y };
          }
          var l = i ? F(i) : null;
          if (null != l) {
            var u = 'y' === l ? 'height' : 'width';
            switch (a) {
              case M:
                e[l] = e[l] - (n[u] / 2 - o[u] / 2);
                break;
              case j:
                e[l] = e[l] + (n[u] / 2 - o[u] / 2);
            }
          }
          return e;
        }
        var X = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
        function U(t) {
          var e,
            n = t.popper,
            r = t.popperRect,
            i = t.placement,
            a = t.variation,
            s = t.offsets,
            c = t.position,
            u = t.gpuAcceleration,
            d = t.adaptive,
            f = t.roundOffsets,
            v = t.isFixed,
            h = s.x,
            g = void 0 === h ? 0 : h,
            y = s.y,
            b = void 0 === y ? 0 : y,
            w = 'function' == typeof f ? f({ x: g, y: b }) : { x: g, y: b };
          (g = w.x), (b = w.y);
          var x = s.hasOwnProperty('x'),
            O = s.hasOwnProperty('y'),
            E = _,
            C = S,
            k = window;
          if (d) {
            var M = L(n),
              D = 'clientHeight',
              P = 'clientWidth';
            M === o(n) &&
              'static' !== m((M = p(n))).position &&
              'absolute' === c &&
              ((D = 'scrollHeight'), (P = 'scrollWidth')),
              (i === S || ((i === _ || i === T) && a === j)) &&
                ((C = A),
                (b -=
                  (v && M === k && k.visualViewport
                    ? k.visualViewport.height
                    : M[D]) - r.height),
                (b *= u ? 1 : -1)),
              (i !== _ && ((i !== S && i !== A) || a !== j)) ||
                ((E = T),
                (g -=
                  (v && M === k && k.visualViewport
                    ? k.visualViewport.width
                    : M[P]) - r.width),
                (g *= u ? 1 : -1));
          }
          var $,
            V = Object.assign({ position: c }, d && X),
            N =
              !0 === f
                ? (function (t) {
                    var e = t.x,
                      n = t.y,
                      o = window.devicePixelRatio || 1;
                    return { x: l(e * o) / o || 0, y: l(n * o) / o || 0 };
                  })({ x: g, y: b })
                : { x: g, y: b };
          return (
            (g = N.x),
            (b = N.y),
            u
              ? Object.assign(
                  {},
                  V,
                  ((($ = {})[C] = O ? '0' : ''),
                  ($[E] = x ? '0' : ''),
                  ($.transform =
                    (k.devicePixelRatio || 1) <= 1
                      ? 'translate(' + g + 'px, ' + b + 'px)'
                      : 'translate3d(' + g + 'px, ' + b + 'px, 0)'),
                  $)
                )
              : Object.assign(
                  {},
                  V,
                  (((e = {})[C] = O ? b + 'px' : ''),
                  (e[E] = x ? g + 'px' : ''),
                  (e.transform = ''),
                  e)
                )
          );
        }
        var J = {
            name: 'applyStyles',
            enabled: !0,
            phase: 'write',
            fn: function (t) {
              var e = t.state;
              Object.keys(e.elements).forEach(function (t) {
                var n = e.styles[t] || {},
                  o = e.attributes[t] || {},
                  r = e.elements[t];
                i(r) &&
                  f(r) &&
                  (Object.assign(r.style, n),
                  Object.keys(o).forEach(function (t) {
                    var e = o[t];
                    !1 === e
                      ? r.removeAttribute(t)
                      : r.setAttribute(t, !0 === e ? '' : e);
                  }));
              });
            },
            effect: function (t) {
              var e = t.state,
                n = {
                  popper: {
                    position: e.options.strategy,
                    left: '0',
                    top: '0',
                    margin: '0',
                  },
                  arrow: { position: 'absolute' },
                  reference: {},
                };
              return (
                Object.assign(e.elements.popper.style, n.popper),
                (e.styles = n),
                e.elements.arrow &&
                  Object.assign(e.elements.arrow.style, n.arrow),
                function () {
                  Object.keys(e.elements).forEach(function (t) {
                    var o = e.elements[t],
                      r = e.attributes[t] || {},
                      a = Object.keys(
                        e.styles.hasOwnProperty(t) ? e.styles[t] : n[t]
                      ).reduce(function (t, e) {
                        return (t[e] = ''), t;
                      }, {});
                    i(o) &&
                      f(o) &&
                      (Object.assign(o.style, a),
                      Object.keys(r).forEach(function (t) {
                        o.removeAttribute(t);
                      }));
                  });
                }
              );
            },
            requires: ['computeStyles'],
          },
          K = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
        function G(t) {
          return t.replace(/left|right|bottom|top/g, function (t) {
            return K[t];
          });
        }
        var Z = { start: 'end', end: 'start' };
        function Q(t) {
          return t.replace(/start|end/g, function (t) {
            return Z[t];
          });
        }
        function tt(t, e) {
          var n = e.getRootNode && e.getRootNode();
          if (t.contains(e)) return !0;
          if (n && a(n)) {
            var o = e;
            do {
              if (o && t.isSameNode(o)) return !0;
              o = o.parentNode || o.host;
            } while (o);
          }
          return !1;
        }
        function et(t) {
          return Object.assign({}, t, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height,
          });
        }
        function nt(t, e) {
          return e === D
            ? et(
                (function (t) {
                  var e = o(t),
                    n = p(t),
                    r = e.visualViewport,
                    i = n.clientWidth,
                    a = n.clientHeight,
                    s = 0,
                    c = 0;
                  return (
                    r &&
                      ((i = r.width),
                      (a = r.height),
                      /^((?!chrome|android).)*safari/i.test(
                        navigator.userAgent
                      ) || ((s = r.offsetLeft), (c = r.offsetTop))),
                    { width: i, height: a, x: s + v(t), y: c }
                  );
                })(t)
              )
            : r(e)
            ? (function (t) {
                var e = u(t);
                return (
                  (e.top = e.top + t.clientTop),
                  (e.left = e.left + t.clientLeft),
                  (e.bottom = e.top + t.clientHeight),
                  (e.right = e.left + t.clientWidth),
                  (e.width = t.clientWidth),
                  (e.height = t.clientHeight),
                  (e.x = e.left),
                  (e.y = e.top),
                  e
                );
              })(e)
            : et(
                (function (t) {
                  var e,
                    n = p(t),
                    o = d(t),
                    r = null == (e = t.ownerDocument) ? void 0 : e.body,
                    i = s(
                      n.scrollWidth,
                      n.clientWidth,
                      r ? r.scrollWidth : 0,
                      r ? r.clientWidth : 0
                    ),
                    a = s(
                      n.scrollHeight,
                      n.clientHeight,
                      r ? r.scrollHeight : 0,
                      r ? r.clientHeight : 0
                    ),
                    c = -o.scrollLeft + v(t),
                    l = -o.scrollTop;
                  return (
                    'rtl' === m(r || n).direction &&
                      (c += s(n.clientWidth, r ? r.clientWidth : 0) - i),
                    { width: i, height: a, x: c, y: l }
                  );
                })(p(t))
              );
        }
        function ot(t) {
          return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t);
        }
        function rt(t, e) {
          return e.reduce(function (e, n) {
            return (e[n] = t), e;
          }, {});
        }
        function it(t, e) {
          void 0 === e && (e = {});
          var n = e,
            o = n.placement,
            a = void 0 === o ? t.placement : o,
            l = n.boundary,
            d = void 0 === l ? 'clippingParents' : l,
            v = n.rootBoundary,
            h = void 0 === v ? D : v,
            g = n.elementContext,
            y = void 0 === g ? P : g,
            w = n.altBoundary,
            O = void 0 !== w && w,
            E = n.padding,
            _ = void 0 === E ? 0 : E,
            C = ot('number' != typeof _ ? _ : rt(_, k)),
            M = y === P ? 'reference' : P,
            j = t.rects.popper,
            $ = t.elements[O ? M : y],
            V = (function (t, e, n) {
              var o =
                  'clippingParents' === e
                    ? (function (t) {
                        var e = x(b(t)),
                          n =
                            ['absolute', 'fixed'].indexOf(m(t).position) >= 0 &&
                            i(t)
                              ? L(t)
                              : t;
                        return r(n)
                          ? e.filter(function (t) {
                              return r(t) && tt(t, n) && 'body' !== f(t);
                            })
                          : [];
                      })(t)
                    : [].concat(e),
                a = [].concat(o, [n]),
                l = a[0],
                u = a.reduce(function (e, n) {
                  var o = nt(t, n);
                  return (
                    (e.top = s(o.top, e.top)),
                    (e.right = c(o.right, e.right)),
                    (e.bottom = c(o.bottom, e.bottom)),
                    (e.left = s(o.left, e.left)),
                    e
                  );
                }, nt(t, l));
              return (
                (u.width = u.right - u.left),
                (u.height = u.bottom - u.top),
                (u.x = u.left),
                (u.y = u.top),
                u
              );
            })(r($) ? $ : $.contextElement || p(t.elements.popper), d, h),
            N = u(t.elements.reference),
            I = Y({
              reference: N,
              element: j,
              strategy: 'absolute',
              placement: a,
            }),
            q = et(Object.assign({}, j, I)),
            B = y === P ? q : N,
            W = {
              top: V.top - B.top + C.top,
              bottom: B.bottom - V.bottom + C.bottom,
              left: V.left - B.left + C.left,
              right: B.right - V.right + C.right,
            },
            H = t.modifiersData.offset;
          if (y === P && H) {
            var R = H[a];
            Object.keys(W).forEach(function (t) {
              var e = [T, A].indexOf(t) >= 0 ? 1 : -1,
                n = [S, A].indexOf(t) >= 0 ? 'y' : 'x';
              W[t] += R[n] * e;
            });
          }
          return W;
        }
        function at(t, e, n) {
          return s(t, c(e, n));
        }
        function st(t, e, n) {
          return (
            void 0 === n && (n = { x: 0, y: 0 }),
            {
              top: t.top - e.height - n.y,
              right: t.right - e.width + n.x,
              bottom: t.bottom - e.height + n.y,
              left: t.left - e.width - n.x,
            }
          );
        }
        function ct(t) {
          return [S, T, A, _].some(function (e) {
            return t[e] >= 0;
          });
        }
        var lt = W({
            defaultModifiers: [
              {
                name: 'eventListeners',
                enabled: !0,
                phase: 'write',
                fn: function () {},
                effect: function (t) {
                  var e = t.state,
                    n = t.instance,
                    r = t.options,
                    i = r.scroll,
                    a = void 0 === i || i,
                    s = r.resize,
                    c = void 0 === s || s,
                    l = o(e.elements.popper),
                    u = [].concat(
                      e.scrollParents.reference,
                      e.scrollParents.popper
                    );
                  return (
                    a &&
                      u.forEach(function (t) {
                        t.addEventListener('scroll', n.update, H);
                      }),
                    c && l.addEventListener('resize', n.update, H),
                    function () {
                      a &&
                        u.forEach(function (t) {
                          t.removeEventListener('scroll', n.update, H);
                        }),
                        c && l.removeEventListener('resize', n.update, H);
                    }
                  );
                },
                data: {},
              },
              {
                name: 'popperOffsets',
                enabled: !0,
                phase: 'read',
                fn: function (t) {
                  var e = t.state,
                    n = t.name;
                  e.modifiersData[n] = Y({
                    reference: e.rects.reference,
                    element: e.rects.popper,
                    strategy: 'absolute',
                    placement: e.placement,
                  });
                },
                data: {},
              },
              {
                name: 'computeStyles',
                enabled: !0,
                phase: 'beforeWrite',
                fn: function (t) {
                  var e = t.state,
                    n = t.options,
                    o = n.gpuAcceleration,
                    r = void 0 === o || o,
                    i = n.adaptive,
                    a = void 0 === i || i,
                    s = n.roundOffsets,
                    c = void 0 === s || s,
                    l = {
                      placement: R(e.placement),
                      variation: z(e.placement),
                      popper: e.elements.popper,
                      popperRect: e.rects.popper,
                      gpuAcceleration: r,
                      isFixed: 'fixed' === e.options.strategy,
                    };
                  null != e.modifiersData.popperOffsets &&
                    (e.styles.popper = Object.assign(
                      {},
                      e.styles.popper,
                      U(
                        Object.assign({}, l, {
                          offsets: e.modifiersData.popperOffsets,
                          position: e.options.strategy,
                          adaptive: a,
                          roundOffsets: c,
                        })
                      )
                    )),
                    null != e.modifiersData.arrow &&
                      (e.styles.arrow = Object.assign(
                        {},
                        e.styles.arrow,
                        U(
                          Object.assign({}, l, {
                            offsets: e.modifiersData.arrow,
                            position: 'absolute',
                            adaptive: !1,
                            roundOffsets: c,
                          })
                        )
                      )),
                    (e.attributes.popper = Object.assign(
                      {},
                      e.attributes.popper,
                      { 'data-popper-placement': e.placement }
                    ));
                },
                data: {},
              },
              J,
              {
                name: 'offset',
                enabled: !0,
                phase: 'main',
                requires: ['popperOffsets'],
                fn: function (t) {
                  var e = t.state,
                    n = t.options,
                    o = t.name,
                    r = n.offset,
                    i = void 0 === r ? [0, 0] : r,
                    a = V.reduce(function (t, n) {
                      return (
                        (t[n] = (function (t, e, n) {
                          var o = R(t),
                            r = [_, S].indexOf(o) >= 0 ? -1 : 1,
                            i =
                              'function' == typeof n
                                ? n(Object.assign({}, e, { placement: t }))
                                : n,
                            a = i[0],
                            s = i[1];
                          return (
                            (a = a || 0),
                            (s = (s || 0) * r),
                            [_, T].indexOf(o) >= 0
                              ? { x: s, y: a }
                              : { x: a, y: s }
                          );
                        })(n, e.rects, i)),
                        t
                      );
                    }, {}),
                    s = a[e.placement],
                    c = s.x,
                    l = s.y;
                  null != e.modifiersData.popperOffsets &&
                    ((e.modifiersData.popperOffsets.x += c),
                    (e.modifiersData.popperOffsets.y += l)),
                    (e.modifiersData[o] = a);
                },
              },
              {
                name: 'flip',
                enabled: !0,
                phase: 'main',
                fn: function (t) {
                  var e = t.state,
                    n = t.options,
                    o = t.name;
                  if (!e.modifiersData[o]._skip) {
                    for (
                      var r = n.mainAxis,
                        i = void 0 === r || r,
                        a = n.altAxis,
                        s = void 0 === a || a,
                        c = n.fallbackPlacements,
                        l = n.padding,
                        u = n.boundary,
                        d = n.rootBoundary,
                        f = n.altBoundary,
                        p = n.flipVariations,
                        v = void 0 === p || p,
                        m = n.allowedAutoPlacements,
                        h = e.options.placement,
                        g = R(h),
                        y =
                          c ||
                          (g !== h && v
                            ? (function (t) {
                                if (R(t) === C) return [];
                                var e = G(t);
                                return [Q(t), e, Q(e)];
                              })(h)
                            : [G(h)]),
                        b = [h].concat(y).reduce(function (t, n) {
                          return t.concat(
                            R(n) === C
                              ? (function (t, e) {
                                  void 0 === e && (e = {});
                                  var n = e,
                                    o = n.placement,
                                    r = n.boundary,
                                    i = n.rootBoundary,
                                    a = n.padding,
                                    s = n.flipVariations,
                                    c = n.allowedAutoPlacements,
                                    l = void 0 === c ? V : c,
                                    u = z(o),
                                    d = u
                                      ? s
                                        ? $
                                        : $.filter(function (t) {
                                            return z(t) === u;
                                          })
                                      : k,
                                    f = d.filter(function (t) {
                                      return l.indexOf(t) >= 0;
                                    });
                                  0 === f.length && (f = d);
                                  var p = f.reduce(function (e, n) {
                                    return (
                                      (e[n] = it(t, {
                                        placement: n,
                                        boundary: r,
                                        rootBoundary: i,
                                        padding: a,
                                      })[R(n)]),
                                      e
                                    );
                                  }, {});
                                  return Object.keys(p).sort(function (t, e) {
                                    return p[t] - p[e];
                                  });
                                })(e, {
                                  placement: n,
                                  boundary: u,
                                  rootBoundary: d,
                                  padding: l,
                                  flipVariations: v,
                                  allowedAutoPlacements: m,
                                })
                              : n
                          );
                        }, []),
                        w = e.rects.reference,
                        x = e.rects.popper,
                        O = new Map(),
                        E = !0,
                        L = b[0],
                        j = 0;
                      j < b.length;
                      j++
                    ) {
                      var D = b[j],
                        P = R(D),
                        N = z(D) === M,
                        I = [S, A].indexOf(P) >= 0,
                        q = I ? 'width' : 'height',
                        B = it(e, {
                          placement: D,
                          boundary: u,
                          rootBoundary: d,
                          altBoundary: f,
                          padding: l,
                        }),
                        W = I ? (N ? T : _) : N ? A : S;
                      w[q] > x[q] && (W = G(W));
                      var H = G(W),
                        F = [];
                      if (
                        (i && F.push(B[P] <= 0),
                        s && F.push(B[W] <= 0, B[H] <= 0),
                        F.every(function (t) {
                          return t;
                        }))
                      ) {
                        (L = D), (E = !1);
                        break;
                      }
                      O.set(D, F);
                    }
                    if (E)
                      for (
                        var Y = function (t) {
                            var e = b.find(function (e) {
                              var n = O.get(e);
                              if (n)
                                return n.slice(0, t).every(function (t) {
                                  return t;
                                });
                            });
                            if (e) return (L = e), 'break';
                          },
                          X = v ? 3 : 1;
                        X > 0 && 'break' !== Y(X);
                        X--
                      );
                    e.placement !== L &&
                      ((e.modifiersData[o]._skip = !0),
                      (e.placement = L),
                      (e.reset = !0));
                  }
                },
                requiresIfExists: ['offset'],
                data: { _skip: !1 },
              },
              {
                name: 'preventOverflow',
                enabled: !0,
                phase: 'main',
                fn: function (t) {
                  var e = t.state,
                    n = t.options,
                    o = t.name,
                    r = n.mainAxis,
                    i = void 0 === r || r,
                    a = n.altAxis,
                    l = void 0 !== a && a,
                    u = n.boundary,
                    d = n.rootBoundary,
                    f = n.altBoundary,
                    p = n.padding,
                    v = n.tether,
                    m = void 0 === v || v,
                    h = n.tetherOffset,
                    g = void 0 === h ? 0 : h,
                    b = it(e, {
                      boundary: u,
                      rootBoundary: d,
                      padding: p,
                      altBoundary: f,
                    }),
                    w = R(e.placement),
                    x = z(e.placement),
                    O = !x,
                    E = F(w),
                    C = 'x' === E ? 'y' : 'x',
                    k = e.modifiersData.popperOffsets,
                    j = e.rects.reference,
                    D = e.rects.popper,
                    P =
                      'function' == typeof g
                        ? g(
                            Object.assign({}, e.rects, {
                              placement: e.placement,
                            })
                          )
                        : g,
                    $ =
                      'number' == typeof P
                        ? { mainAxis: P, altAxis: P }
                        : Object.assign({ mainAxis: 0, altAxis: 0 }, P),
                    V = e.modifiersData.offset
                      ? e.modifiersData.offset[e.placement]
                      : null,
                    N = { x: 0, y: 0 };
                  if (k) {
                    if (i) {
                      var I,
                        q = 'y' === E ? S : _,
                        B = 'y' === E ? A : T,
                        W = 'y' === E ? 'height' : 'width',
                        H = k[E],
                        Y = H + b[q],
                        X = H - b[B],
                        U = m ? -D[W] / 2 : 0,
                        J = x === M ? j[W] : D[W],
                        K = x === M ? -D[W] : -j[W],
                        G = e.elements.arrow,
                        Z = m && G ? y(G) : { width: 0, height: 0 },
                        Q = e.modifiersData['arrow#persistent']
                          ? e.modifiersData['arrow#persistent'].padding
                          : { top: 0, right: 0, bottom: 0, left: 0 },
                        tt = Q[q],
                        et = Q[B],
                        nt = at(0, j[W], Z[W]),
                        ot = O
                          ? j[W] / 2 - U - nt - tt - $.mainAxis
                          : J - nt - tt - $.mainAxis,
                        rt = O
                          ? -j[W] / 2 + U + nt + et + $.mainAxis
                          : K + nt + et + $.mainAxis,
                        st = e.elements.arrow && L(e.elements.arrow),
                        ct = st
                          ? 'y' === E
                            ? st.clientTop || 0
                            : st.clientLeft || 0
                          : 0,
                        lt = null != (I = null == V ? void 0 : V[E]) ? I : 0,
                        ut = H + rt - lt,
                        dt = at(
                          m ? c(Y, H + ot - lt - ct) : Y,
                          H,
                          m ? s(X, ut) : X
                        );
                      (k[E] = dt), (N[E] = dt - H);
                    }
                    if (l) {
                      var ft,
                        pt = 'x' === E ? S : _,
                        vt = 'x' === E ? A : T,
                        mt = k[C],
                        ht = 'y' === C ? 'height' : 'width',
                        gt = mt + b[pt],
                        yt = mt - b[vt],
                        bt = -1 !== [S, _].indexOf(w),
                        wt = null != (ft = null == V ? void 0 : V[C]) ? ft : 0,
                        xt = bt ? gt : mt - j[ht] - D[ht] - wt + $.altAxis,
                        Ot = bt ? mt + j[ht] + D[ht] - wt - $.altAxis : yt,
                        Et =
                          m && bt
                            ? (function (t, e, n) {
                                var o = at(t, e, n);
                                return o > n ? n : o;
                              })(xt, mt, Ot)
                            : at(m ? xt : gt, mt, m ? Ot : yt);
                      (k[C] = Et), (N[C] = Et - mt);
                    }
                    e.modifiersData[o] = N;
                  }
                },
                requiresIfExists: ['offset'],
              },
              {
                name: 'arrow',
                enabled: !0,
                phase: 'main',
                fn: function (t) {
                  var e,
                    n = t.state,
                    o = t.name,
                    r = t.options,
                    i = n.elements.arrow,
                    a = n.modifiersData.popperOffsets,
                    s = R(n.placement),
                    c = F(s),
                    l = [_, T].indexOf(s) >= 0 ? 'height' : 'width';
                  if (i && a) {
                    var u = (function (t, e) {
                        return ot(
                          'number' !=
                            typeof (t =
                              'function' == typeof t
                                ? t(
                                    Object.assign({}, e.rects, {
                                      placement: e.placement,
                                    })
                                  )
                                : t)
                            ? t
                            : rt(t, k)
                        );
                      })(r.padding, n),
                      d = y(i),
                      f = 'y' === c ? S : _,
                      p = 'y' === c ? A : T,
                      v =
                        n.rects.reference[l] +
                        n.rects.reference[c] -
                        a[c] -
                        n.rects.popper[l],
                      m = a[c] - n.rects.reference[c],
                      h = L(i),
                      g = h
                        ? 'y' === c
                          ? h.clientHeight || 0
                          : h.clientWidth || 0
                        : 0,
                      b = v / 2 - m / 2,
                      w = u[f],
                      x = g - d[l] - u[p],
                      O = g / 2 - d[l] / 2 + b,
                      E = at(w, O, x),
                      C = c;
                    n.modifiersData[o] =
                      (((e = {})[C] = E), (e.centerOffset = E - O), e);
                  }
                },
                effect: function (t) {
                  var e = t.state,
                    n = t.options.element,
                    o = void 0 === n ? '[data-popper-arrow]' : n;
                  null != o &&
                    ('string' != typeof o ||
                      (o = e.elements.popper.querySelector(o))) &&
                    tt(e.elements.popper, o) &&
                    (e.elements.arrow = o);
                },
                requires: ['popperOffsets'],
                requiresIfExists: ['preventOverflow'],
              },
              {
                name: 'hide',
                enabled: !0,
                phase: 'main',
                requiresIfExists: ['preventOverflow'],
                fn: function (t) {
                  var e = t.state,
                    n = t.name,
                    o = e.rects.reference,
                    r = e.rects.popper,
                    i = e.modifiersData.preventOverflow,
                    a = it(e, { elementContext: 'reference' }),
                    s = it(e, { altBoundary: !0 }),
                    c = st(a, o),
                    l = st(s, r, i),
                    u = ct(c),
                    d = ct(l);
                  (e.modifiersData[n] = {
                    referenceClippingOffsets: c,
                    popperEscapeOffsets: l,
                    isReferenceHidden: u,
                    hasPopperEscaped: d,
                  }),
                    (e.attributes.popper = Object.assign(
                      {},
                      e.attributes.popper,
                      {
                        'data-popper-reference-hidden': u,
                        'data-popper-escaped': d,
                      }
                    ));
                },
              },
            ],
          }),
          ut = 'tippy-content',
          dt = 'tippy-arrow',
          ft = 'tippy-svg-arrow',
          pt = { passive: !0, capture: !0 },
          vt = function () {
            return document.body;
          };
        function mt(t, e, n) {
          if (Array.isArray(t)) {
            var o = t[e];
            return null == o ? (Array.isArray(n) ? n[e] : n) : o;
          }
          return t;
        }
        function ht(t, e) {
          var n = {}.toString.call(t);
          return 0 === n.indexOf('[object') && n.indexOf(e + ']') > -1;
        }
        function gt(t, e) {
          return 'function' == typeof t ? t.apply(void 0, e) : t;
        }
        function yt(t, e) {
          return 0 === e
            ? t
            : function (o) {
                clearTimeout(n),
                  (n = setTimeout(function () {
                    t(o);
                  }, e));
              };
          var n;
        }
        function bt(t) {
          return [].concat(t);
        }
        function wt(t, e) {
          -1 === t.indexOf(e) && t.push(e);
        }
        function xt(t) {
          return [].slice.call(t);
        }
        function Ot(t) {
          return Object.keys(t).reduce(function (e, n) {
            return void 0 !== t[n] && (e[n] = t[n]), e;
          }, {});
        }
        function Et() {
          return document.createElement('div');
        }
        function Lt(t) {
          return ['Element', 'Fragment'].some(function (e) {
            return ht(t, e);
          });
        }
        function St(t, e) {
          t.forEach(function (t) {
            t && (t.style.transitionDuration = e + 'ms');
          });
        }
        function At(t, e) {
          t.forEach(function (t) {
            t && t.setAttribute('data-state', e);
          });
        }
        function Tt(t, e, n) {
          var o = e + 'EventListener';
          ['transitionend', 'webkitTransitionEnd'].forEach(function (e) {
            t[o](e, n);
          });
        }
        function _t(t, e) {
          for (var n = e; n; ) {
            var o;
            if (t.contains(n)) return !0;
            n =
              null == n.getRootNode || null == (o = n.getRootNode())
                ? void 0
                : o.host;
          }
          return !1;
        }
        var Ct = { isTouch: !1 },
          kt = 0;
        function Mt() {
          Ct.isTouch ||
            ((Ct.isTouch = !0),
            window.performance && document.addEventListener('mousemove', jt));
        }
        function jt() {
          var t = performance.now();
          t - kt < 20 &&
            ((Ct.isTouch = !1), document.removeEventListener('mousemove', jt)),
            (kt = t);
        }
        function Dt() {
          var t,
            e = document.activeElement;
          if ((t = e) && t._tippy && t._tippy.reference === t) {
            var n = e._tippy;
            e.blur && !n.state.isVisible && e.blur();
          }
        }
        var Pt = !(
            'undefined' == typeof window ||
            'undefined' == typeof document ||
            !window.msCrypto
          ),
          $t = Object.assign(
            {
              appendTo: vt,
              aria: { content: 'auto', expanded: 'auto' },
              delay: 0,
              duration: [300, 250],
              getReferenceClientRect: null,
              hideOnClick: !0,
              ignoreAttributes: !1,
              interactive: !1,
              interactiveBorder: 2,
              interactiveDebounce: 0,
              moveTransition: '',
              offset: [0, 10],
              onAfterUpdate: function () {},
              onBeforeUpdate: function () {},
              onCreate: function () {},
              onDestroy: function () {},
              onHidden: function () {},
              onHide: function () {},
              onMount: function () {},
              onShow: function () {},
              onShown: function () {},
              onTrigger: function () {},
              onUntrigger: function () {},
              onClickOutside: function () {},
              placement: 'top',
              plugins: [],
              popperOptions: {},
              render: null,
              showOnCreate: !1,
              touch: !0,
              trigger: 'mouseenter focus',
              triggerTarget: null,
            },
            {
              animateFill: !1,
              followCursor: !1,
              inlinePositioning: !1,
              sticky: !1,
            },
            {
              allowHTML: !1,
              animation: 'fade',
              arrow: !0,
              content: '',
              inertia: !1,
              maxWidth: 350,
              role: 'tooltip',
              theme: '',
              zIndex: 9999,
            }
          ),
          Vt = Object.keys($t);
        function Nt(t) {
          var e = (t.plugins || []).reduce(function (e, n) {
            var o,
              r = n.name,
              i = n.defaultValue;
            return (
              r &&
                (e[r] = void 0 !== t[r] ? t[r] : null != (o = $t[r]) ? o : i),
              e
            );
          }, {});
          return Object.assign({}, t, e);
        }
        function It(t, e) {
          var n = Object.assign(
            {},
            e,
            { content: gt(e.content, [t]) },
            e.ignoreAttributes
              ? {}
              : (function (t, e) {
                  return (
                    e
                      ? Object.keys(Nt(Object.assign({}, $t, { plugins: e })))
                      : Vt
                  ).reduce(function (e, n) {
                    var o = (t.getAttribute('data-tippy-' + n) || '').trim();
                    if (!o) return e;
                    if ('content' === n) e[n] = o;
                    else
                      try {
                        e[n] = JSON.parse(o);
                      } catch (t) {
                        e[n] = o;
                      }
                    return e;
                  }, {});
                })(t, e.plugins)
          );
          return (
            (n.aria = Object.assign({}, $t.aria, n.aria)),
            (n.aria = {
              expanded:
                'auto' === n.aria.expanded ? e.interactive : n.aria.expanded,
              content:
                'auto' === n.aria.content
                  ? e.interactive
                    ? null
                    : 'describedby'
                  : n.aria.content,
            }),
            n
          );
        }
        function qt(t, e) {
          t.innerHTML = e;
        }
        function Bt(t) {
          var e = Et();
          return (
            !0 === t
              ? (e.className = dt)
              : ((e.className = ft), Lt(t) ? e.appendChild(t) : qt(e, t)),
            e
          );
        }
        function Wt(t, e) {
          Lt(e.content)
            ? (qt(t, ''), t.appendChild(e.content))
            : 'function' != typeof e.content &&
              (e.allowHTML ? qt(t, e.content) : (t.textContent = e.content));
        }
        function Ht(t) {
          var e = t.firstElementChild,
            n = xt(e.children);
          return {
            box: e,
            content: n.find(function (t) {
              return t.classList.contains(ut);
            }),
            arrow: n.find(function (t) {
              return t.classList.contains(dt) || t.classList.contains(ft);
            }),
            backdrop: n.find(function (t) {
              return t.classList.contains('tippy-backdrop');
            }),
          };
        }
        function Rt(t) {
          var e = Et(),
            n = Et();
          (n.className = 'tippy-box'),
            n.setAttribute('data-state', 'hidden'),
            n.setAttribute('tabindex', '-1');
          var o = Et();
          function r(n, o) {
            var r = Ht(e),
              i = r.box,
              a = r.content,
              s = r.arrow;
            o.theme
              ? i.setAttribute('data-theme', o.theme)
              : i.removeAttribute('data-theme'),
              'string' == typeof o.animation
                ? i.setAttribute('data-animation', o.animation)
                : i.removeAttribute('data-animation'),
              o.inertia
                ? i.setAttribute('data-inertia', '')
                : i.removeAttribute('data-inertia'),
              (i.style.maxWidth =
                'number' == typeof o.maxWidth ? o.maxWidth + 'px' : o.maxWidth),
              o.role
                ? i.setAttribute('role', o.role)
                : i.removeAttribute('role'),
              (n.content === o.content && n.allowHTML === o.allowHTML) ||
                Wt(a, t.props),
              o.arrow
                ? s
                  ? n.arrow !== o.arrow &&
                    (i.removeChild(s), i.appendChild(Bt(o.arrow)))
                  : i.appendChild(Bt(o.arrow))
                : s && i.removeChild(s);
          }
          return (
            (o.className = ut),
            o.setAttribute('data-state', 'hidden'),
            Wt(o, t.props),
            e.appendChild(n),
            n.appendChild(o),
            r(t.props, t.props),
            { popper: e, onUpdate: r }
          );
        }
        Rt.$$tippy = !0;
        var zt = 1,
          Ft = [],
          Yt = [];
        function Xt(t, e) {
          var n,
            o,
            r,
            i,
            a,
            s,
            c,
            l,
            u = It(t, Object.assign({}, $t, Nt(Ot(e)))),
            d = !1,
            f = !1,
            p = !1,
            v = !1,
            m = [],
            h = yt(X, u.interactiveDebounce),
            g = zt++,
            y = (l = u.plugins).filter(function (t, e) {
              return l.indexOf(t) === e;
            }),
            b = {
              id: g,
              reference: t,
              popper: Et(),
              popperInstance: null,
              props: u,
              state: {
                isEnabled: !0,
                isVisible: !1,
                isDestroyed: !1,
                isMounted: !1,
                isShown: !1,
              },
              plugins: y,
              clearDelayTimeouts: function () {
                clearTimeout(n), clearTimeout(o), cancelAnimationFrame(r);
              },
              setProps: function (e) {
                if (!b.state.isDestroyed) {
                  D('onBeforeUpdate', [b, e]), F();
                  var n = b.props,
                    o = It(
                      t,
                      Object.assign({}, n, Ot(e), { ignoreAttributes: !0 })
                    );
                  (b.props = o),
                    z(),
                    n.interactiveDebounce !== o.interactiveDebounce &&
                      (V(), (h = yt(X, o.interactiveDebounce))),
                    n.triggerTarget && !o.triggerTarget
                      ? bt(n.triggerTarget).forEach(function (t) {
                          t.removeAttribute('aria-expanded');
                        })
                      : o.triggerTarget && t.removeAttribute('aria-expanded'),
                    $(),
                    j(),
                    O && O(n, o),
                    b.popperInstance &&
                      (G(),
                      Q().forEach(function (t) {
                        requestAnimationFrame(
                          t._tippy.popperInstance.forceUpdate
                        );
                      })),
                    D('onAfterUpdate', [b, e]);
                }
              },
              setContent: function (t) {
                b.setProps({ content: t });
              },
              show: function () {
                var t = b.state.isVisible,
                  e = b.state.isDestroyed,
                  n = !b.state.isEnabled,
                  o = Ct.isTouch && !b.props.touch,
                  r = mt(b.props.duration, 0, $t.duration);
                if (
                  !(
                    t ||
                    e ||
                    n ||
                    o ||
                    _().hasAttribute('disabled') ||
                    (D('onShow', [b], !1), !1 === b.props.onShow(b))
                  )
                ) {
                  if (
                    ((b.state.isVisible = !0),
                    T() && (x.style.visibility = 'visible'),
                    j(),
                    B(),
                    b.state.isMounted || (x.style.transition = 'none'),
                    T())
                  ) {
                    var i = k();
                    St([i.box, i.content], 0);
                  }
                  var a, c, l;
                  (s = function () {
                    var t;
                    if (b.state.isVisible && !v) {
                      if (
                        ((v = !0),
                        x.offsetHeight,
                        (x.style.transition = b.props.moveTransition),
                        T() && b.props.animation)
                      ) {
                        var e = k(),
                          n = e.box,
                          o = e.content;
                        St([n, o], r), At([n, o], 'visible');
                      }
                      P(),
                        $(),
                        wt(Yt, b),
                        null == (t = b.popperInstance) || t.forceUpdate(),
                        D('onMount', [b]),
                        b.props.animation &&
                          T() &&
                          (function (t, e) {
                            H(t, function () {
                              (b.state.isShown = !0), D('onShown', [b]);
                            });
                          })(r);
                    }
                  }),
                    (c = b.props.appendTo),
                    (l = _()),
                    (a =
                      (b.props.interactive && c === vt) || 'parent' === c
                        ? l.parentNode
                        : gt(c, [l])).contains(x) || a.appendChild(x),
                    (b.state.isMounted = !0),
                    G();
                }
              },
              hide: function () {
                var t = !b.state.isVisible,
                  e = b.state.isDestroyed,
                  n = !b.state.isEnabled,
                  o = mt(b.props.duration, 1, $t.duration);
                if (
                  !(t || e || n) &&
                  (D('onHide', [b], !1), !1 !== b.props.onHide(b))
                ) {
                  if (
                    ((b.state.isVisible = !1),
                    (b.state.isShown = !1),
                    (v = !1),
                    (d = !1),
                    T() && (x.style.visibility = 'hidden'),
                    V(),
                    W(),
                    j(!0),
                    T())
                  ) {
                    var r = k(),
                      i = r.box,
                      a = r.content;
                    b.props.animation && (St([i, a], o), At([i, a], 'hidden'));
                  }
                  P(),
                    $(),
                    b.props.animation
                      ? T() &&
                        (function (t, e) {
                          H(t, function () {
                            !b.state.isVisible &&
                              x.parentNode &&
                              x.parentNode.contains(x) &&
                              e();
                          });
                        })(o, b.unmount)
                      : b.unmount();
                }
              },
              hideWithInteractivity: function (t) {
                C().addEventListener('mousemove', h), wt(Ft, h), h(t);
              },
              enable: function () {
                b.state.isEnabled = !0;
              },
              disable: function () {
                b.hide(), (b.state.isEnabled = !1);
              },
              unmount: function () {
                b.state.isVisible && b.hide(),
                  b.state.isMounted &&
                    (Z(),
                    Q().forEach(function (t) {
                      t._tippy.unmount();
                    }),
                    x.parentNode && x.parentNode.removeChild(x),
                    (Yt = Yt.filter(function (t) {
                      return t !== b;
                    })),
                    (b.state.isMounted = !1),
                    D('onHidden', [b]));
              },
              destroy: function () {
                b.state.isDestroyed ||
                  (b.clearDelayTimeouts(),
                  b.unmount(),
                  F(),
                  delete t._tippy,
                  (b.state.isDestroyed = !0),
                  D('onDestroy', [b]));
              },
            };
          if (!u.render) return b;
          var w = u.render(b),
            x = w.popper,
            O = w.onUpdate;
          x.setAttribute('data-tippy-root', ''),
            (x.id = 'tippy-' + b.id),
            (b.popper = x),
            (t._tippy = b),
            (x._tippy = b);
          var E = y.map(function (t) {
              return t.fn(b);
            }),
            L = t.hasAttribute('aria-expanded');
          return (
            z(),
            $(),
            j(),
            D('onCreate', [b]),
            u.showOnCreate && tt(),
            x.addEventListener('mouseenter', function () {
              b.props.interactive &&
                b.state.isVisible &&
                b.clearDelayTimeouts();
            }),
            x.addEventListener('mouseleave', function () {
              b.props.interactive &&
                b.props.trigger.indexOf('mouseenter') >= 0 &&
                C().addEventListener('mousemove', h);
            }),
            b
          );
          function S() {
            var t = b.props.touch;
            return Array.isArray(t) ? t : [t, 0];
          }
          function A() {
            return 'hold' === S()[0];
          }
          function T() {
            var t;
            return !(null == (t = b.props.render) || !t.$$tippy);
          }
          function _() {
            return c || t;
          }
          function C() {
            var t,
              e,
              n = _().parentNode;
            return n
              ? null != (e = bt(n)[0]) &&
                null != (t = e.ownerDocument) &&
                t.body
                ? e.ownerDocument
                : document
              : document;
          }
          function k() {
            return Ht(x);
          }
          function M(t) {
            return (b.state.isMounted && !b.state.isVisible) ||
              Ct.isTouch ||
              (i && 'focus' === i.type)
              ? 0
              : mt(b.props.delay, t ? 0 : 1, $t.delay);
          }
          function j(t) {
            void 0 === t && (t = !1),
              (x.style.pointerEvents = b.props.interactive && !t ? '' : 'none'),
              (x.style.zIndex = '' + b.props.zIndex);
          }
          function D(t, e, n) {
            var o;
            void 0 === n && (n = !0),
              E.forEach(function (n) {
                n[t] && n[t].apply(n, e);
              }),
              n && (o = b.props)[t].apply(o, e);
          }
          function P() {
            var e = b.props.aria;
            if (e.content) {
              var n = 'aria-' + e.content,
                o = x.id;
              bt(b.props.triggerTarget || t).forEach(function (t) {
                var e = t.getAttribute(n);
                if (b.state.isVisible) t.setAttribute(n, e ? e + ' ' + o : o);
                else {
                  var r = e && e.replace(o, '').trim();
                  r ? t.setAttribute(n, r) : t.removeAttribute(n);
                }
              });
            }
          }
          function $() {
            !L &&
              b.props.aria.expanded &&
              bt(b.props.triggerTarget || t).forEach(function (t) {
                b.props.interactive
                  ? t.setAttribute(
                      'aria-expanded',
                      b.state.isVisible && t === _() ? 'true' : 'false'
                    )
                  : t.removeAttribute('aria-expanded');
              });
          }
          function V() {
            C().removeEventListener('mousemove', h),
              (Ft = Ft.filter(function (t) {
                return t !== h;
              }));
          }
          function N(e) {
            if (!Ct.isTouch || (!p && 'mousedown' !== e.type)) {
              var n = (e.composedPath && e.composedPath()[0]) || e.target;
              if (!b.props.interactive || !_t(x, n)) {
                if (
                  bt(b.props.triggerTarget || t).some(function (t) {
                    return _t(t, n);
                  })
                ) {
                  if (Ct.isTouch) return;
                  if (
                    b.state.isVisible &&
                    b.props.trigger.indexOf('click') >= 0
                  )
                    return;
                } else D('onClickOutside', [b, e]);
                !0 === b.props.hideOnClick &&
                  (b.clearDelayTimeouts(),
                  b.hide(),
                  (f = !0),
                  setTimeout(function () {
                    f = !1;
                  }),
                  b.state.isMounted || W());
              }
            }
          }
          function I() {
            p = !0;
          }
          function q() {
            p = !1;
          }
          function B() {
            var t = C();
            t.addEventListener('mousedown', N, !0),
              t.addEventListener('touchend', N, pt),
              t.addEventListener('touchstart', q, pt),
              t.addEventListener('touchmove', I, pt);
          }
          function W() {
            var t = C();
            t.removeEventListener('mousedown', N, !0),
              t.removeEventListener('touchend', N, pt),
              t.removeEventListener('touchstart', q, pt),
              t.removeEventListener('touchmove', I, pt);
          }
          function H(t, e) {
            var n = k().box;
            function o(t) {
              t.target === n && (Tt(n, 'remove', o), e());
            }
            if (0 === t) return e();
            Tt(n, 'remove', a), Tt(n, 'add', o), (a = o);
          }
          function R(e, n, o) {
            void 0 === o && (o = !1),
              bt(b.props.triggerTarget || t).forEach(function (t) {
                t.addEventListener(e, n, o),
                  m.push({ node: t, eventType: e, handler: n, options: o });
              });
          }
          function z() {
            var t;
            A() &&
              (R('touchstart', Y, { passive: !0 }),
              R('touchend', U, { passive: !0 })),
              ((t = b.props.trigger), t.split(/\s+/).filter(Boolean)).forEach(
                function (t) {
                  if ('manual' !== t)
                    switch ((R(t, Y), t)) {
                      case 'mouseenter':
                        R('mouseleave', U);
                        break;
                      case 'focus':
                        R(Pt ? 'focusout' : 'blur', J);
                        break;
                      case 'focusin':
                        R('focusout', J);
                    }
                }
              );
          }
          function F() {
            m.forEach(function (t) {
              var e = t.node,
                n = t.eventType,
                o = t.handler,
                r = t.options;
              e.removeEventListener(n, o, r);
            }),
              (m = []);
          }
          function Y(t) {
            var e,
              n = !1;
            if (b.state.isEnabled && !K(t) && !f) {
              var o = 'focus' === (null == (e = i) ? void 0 : e.type);
              (i = t),
                (c = t.currentTarget),
                $(),
                !b.state.isVisible &&
                  ht(t, 'MouseEvent') &&
                  Ft.forEach(function (e) {
                    return e(t);
                  }),
                'click' === t.type &&
                (b.props.trigger.indexOf('mouseenter') < 0 || d) &&
                !1 !== b.props.hideOnClick &&
                b.state.isVisible
                  ? (n = !0)
                  : tt(t),
                'click' === t.type && (d = !n),
                n && !o && et(t);
            }
          }
          function X(t) {
            var e = t.target,
              n = _().contains(e) || x.contains(e);
            if ('mousemove' !== t.type || !n) {
              var o = Q()
                .concat(x)
                .map(function (t) {
                  var e,
                    n =
                      null == (e = t._tippy.popperInstance) ? void 0 : e.state;
                  return n
                    ? {
                        popperRect: t.getBoundingClientRect(),
                        popperState: n,
                        props: u,
                      }
                    : null;
                })
                .filter(Boolean);
              (function (t, e) {
                var n = e.clientX,
                  o = e.clientY;
                return t.every(function (t) {
                  var e = t.popperRect,
                    r = t.popperState,
                    i = t.props.interactiveBorder,
                    a = r.placement.split('-')[0],
                    s = r.modifiersData.offset;
                  if (!s) return !0;
                  var c = 'bottom' === a ? s.top.y : 0,
                    l = 'top' === a ? s.bottom.y : 0,
                    u = 'right' === a ? s.left.x : 0,
                    d = 'left' === a ? s.right.x : 0,
                    f = e.top - o + c > i,
                    p = o - e.bottom - l > i,
                    v = e.left - n + u > i,
                    m = n - e.right - d > i;
                  return f || p || v || m;
                });
              })(o, t) && (V(), et(t));
            }
          }
          function U(t) {
            K(t) ||
              (b.props.trigger.indexOf('click') >= 0 && d) ||
              (b.props.interactive ? b.hideWithInteractivity(t) : et(t));
          }
          function J(t) {
            (b.props.trigger.indexOf('focusin') < 0 && t.target !== _()) ||
              (b.props.interactive &&
                t.relatedTarget &&
                x.contains(t.relatedTarget)) ||
              et(t);
          }
          function K(t) {
            return !!Ct.isTouch && A() !== t.type.indexOf('touch') >= 0;
          }
          function G() {
            Z();
            var e = b.props,
              n = e.popperOptions,
              o = e.placement,
              r = e.offset,
              i = e.getReferenceClientRect,
              a = e.moveTransition,
              c = T() ? Ht(x).arrow : null,
              l = i
                ? {
                    getBoundingClientRect: i,
                    contextElement: i.contextElement || _(),
                  }
                : t,
              u = [
                { name: 'offset', options: { offset: r } },
                {
                  name: 'preventOverflow',
                  options: {
                    padding: { top: 2, bottom: 2, left: 5, right: 5 },
                  },
                },
                { name: 'flip', options: { padding: 5 } },
                { name: 'computeStyles', options: { adaptive: !a } },
                {
                  name: '$$tippy',
                  enabled: !0,
                  phase: 'beforeWrite',
                  requires: ['computeStyles'],
                  fn: function (t) {
                    var e = t.state;
                    if (T()) {
                      var n = k().box;
                      ['placement', 'reference-hidden', 'escaped'].forEach(
                        function (t) {
                          'placement' === t
                            ? n.setAttribute('data-placement', e.placement)
                            : e.attributes.popper['data-popper-' + t]
                            ? n.setAttribute('data-' + t, '')
                            : n.removeAttribute('data-' + t);
                        }
                      ),
                        (e.attributes.popper = {});
                    }
                  },
                },
              ];
            T() &&
              c &&
              u.push({ name: 'arrow', options: { element: c, padding: 3 } }),
              u.push.apply(u, (null == n ? void 0 : n.modifiers) || []),
              (b.popperInstance = lt(
                l,
                x,
                Object.assign({}, n, {
                  placement: o,
                  onFirstUpdate: s,
                  modifiers: u,
                })
              ));
          }
          function Z() {
            b.popperInstance &&
              (b.popperInstance.destroy(), (b.popperInstance = null));
          }
          function Q() {
            return xt(x.querySelectorAll('[data-tippy-root]'));
          }
          function tt(t) {
            b.clearDelayTimeouts(), t && D('onTrigger', [b, t]), B();
            var e = M(!0),
              o = S(),
              r = o[0],
              i = o[1];
            Ct.isTouch && 'hold' === r && i && (e = i),
              e
                ? (n = setTimeout(function () {
                    b.show();
                  }, e))
                : b.show();
          }
          function et(t) {
            if (
              (b.clearDelayTimeouts(),
              D('onUntrigger', [b, t]),
              b.state.isVisible)
            ) {
              if (
                !(
                  b.props.trigger.indexOf('mouseenter') >= 0 &&
                  b.props.trigger.indexOf('click') >= 0 &&
                  ['mouseleave', 'mousemove'].indexOf(t.type) >= 0 &&
                  d
                )
              ) {
                var e = M(!1);
                e
                  ? (o = setTimeout(function () {
                      b.state.isVisible && b.hide();
                    }, e))
                  : (r = requestAnimationFrame(function () {
                      b.hide();
                    }));
              }
            } else W();
          }
        }
        function Ut(t, e) {
          void 0 === e && (e = {});
          var n = $t.plugins.concat(e.plugins || []);
          document.addEventListener('touchstart', Mt, pt),
            window.addEventListener('blur', Dt);
          var o,
            r = Object.assign({}, e, { plugins: n }),
            i = ((o = t),
            Lt(o)
              ? [o]
              : (function (t) {
                  return ht(t, 'NodeList');
                })(o)
              ? xt(o)
              : Array.isArray(o)
              ? o
              : xt(document.querySelectorAll(o))).reduce(function (t, e) {
              var n = e && Xt(e, r);
              return n && t.push(n), t;
            }, []);
          return Lt(t) ? i[0] : i;
        }
        (Ut.defaultProps = $t),
          (Ut.setDefaultProps = function (t) {
            Object.keys(t).forEach(function (e) {
              $t[e] = t[e];
            });
          }),
          (Ut.currentInput = Ct),
          Object.assign({}, J, {
            effect: function (t) {
              var e = t.state,
                n = {
                  popper: {
                    position: e.options.strategy,
                    left: '0',
                    top: '0',
                    margin: '0',
                  },
                  arrow: { position: 'absolute' },
                  reference: {},
                };
              Object.assign(e.elements.popper.style, n.popper),
                (e.styles = n),
                e.elements.arrow &&
                  Object.assign(e.elements.arrow.style, n.arrow);
            },
          }),
          Ut.setDefaultProps({ render: Rt });
        var Jt = Ut;
        n(4783)(function () {
          var t = document.querySelectorAll('.info-tip');
          for (var e of t) {
            var n = e.dataset.content,
              o = 'top';
            e.classList.contains('info-tip--right') && (o = 'right');
            var r,
              i = e.dataset && e.dataset.theme ? e.dataset.theme : 'info-tip';
            'link-tip' == i && (r = [70, 0]),
              n &&
                Jt(e, {
                  content: n,
                  theme: i,
                  allowHTML: !0,
                  interactive: !0,
                  placement: o,
                  maxWidth: 468,
                  offset: r,
                });
          }
        });
      },
      651: function (t, e, n) {
        'use strict';
        function o(t, e) {
          if (b(t)) for (let n = 0; n < t.length && !1 !== e(t[n], n, t); n++);
          else t && o(Object.keys(t), (n) => e(t[n], n, t));
          return t;
        }
        function r(t, e) {
          const n = v(e);
          if (g(e) || n) {
            let o = n ? '' : {};
            if (t) {
              const r = window.getComputedStyle(t, null);
              o = n
                ? St(t, r, e)
                : e.reduce((e, n) => ((e[n] = St(t, r, n)), e), o);
            }
            return o;
          }
          t && o(C(e), (n) => At(t, n, e[n]));
        }
        n.r(e);
        const i = (t, e) => {
            const { o: n, u: o, _: r } = t;
            let i,
              a = n;
            const s = (t, e) => {
              const n = a,
                s = t,
                c = e || (o ? !o(n, s) : n !== s);
              return (c || r) && ((a = s), (i = n)), [a, c, i];
            };
            return [e ? (t) => s(e(a, i), t) : s, (t) => [a, !!t, i]];
          },
          a = () => 'undefined' != typeof window,
          s = a() && Node.ELEMENT_NODE,
          { toString: c, hasOwnProperty: l } = Object.prototype,
          u = (t) => void 0 === t,
          d = (t) => null === t,
          f = (t) =>
            u(t) || d(t)
              ? `${t}`
              : c
                  .call(t)
                  .replace(/^\[object (.+)\]$/, '$1')
                  .toLowerCase(),
          p = (t) => 'number' == typeof t,
          v = (t) => 'string' == typeof t,
          m = (t) => 'boolean' == typeof t,
          h = (t) => 'function' == typeof t,
          g = (t) => Array.isArray(t),
          y = (t) => 'object' == typeof t && !g(t) && !d(t),
          b = (t) => {
            const e = !!t && t.length,
              n = p(e) && e > -1 && e % 1 == 0;
            return !(
              !(g(t) || (!h(t) && n)) ||
              (e > 0 && y(t) && !(e - 1 in t))
            );
          },
          w = (t) => {
            if (!t || !y(t) || 'object' !== f(t)) return !1;
            let e;
            const n = 'constructor',
              o = t[n],
              r = o && o.prototype,
              i = l.call(t, n),
              a = r && l.call(r, 'isPrototypeOf');
            if (o && !i && !a) return !1;
            for (e in t);
            return u(e) || l.call(t, e);
          },
          x = (t) => {
            const e = HTMLElement;
            return !!t && (e ? t instanceof e : t.nodeType === s);
          },
          O = (t) => {
            const e = Element;
            return !!t && (e ? t instanceof e : t.nodeType === s);
          },
          E = (t, e, n) => t.indexOf(e, n),
          L = (t, e, n) => (
            n || v(e) || !b(e) ? t.push(e) : Array.prototype.push.apply(t, e), t
          ),
          S = (t) => {
            const e = Array.from,
              n = [];
            return e && t
              ? e(t)
              : (t instanceof Set
                  ? t.forEach((t) => {
                      L(n, t);
                    })
                  : o(t, (t) => {
                      L(n, t);
                    }),
                n);
          },
          A = (t) => !!t && 0 === t.length,
          T = (t, e, n) => {
            o(t, (t) => t && t.apply(void 0, e || [])), !n && (t.length = 0);
          },
          _ = (t, e) => Object.prototype.hasOwnProperty.call(t, e),
          C = (t) => (t ? Object.keys(t) : []),
          k = (t, e, n, r, i, a, s) => {
            const c = [e, n, r, i, a, s];
            return (
              ('object' == typeof t && !d(t)) || h(t) || (t = {}),
              o(c, (e) => {
                o(C(e), (n) => {
                  const o = e[n];
                  if (t === o) return !0;
                  const r = g(o);
                  if (o && (w(o) || r)) {
                    const e = t[n];
                    let i = e;
                    r && !g(e) ? (i = []) : r || w(e) || (i = {}),
                      (t[n] = k(i, o));
                  } else t[n] = o;
                });
              }),
              t
            );
          },
          M = (t) => {
            for (const e in t) return !1;
            return !0;
          },
          j = (t, e, n, o) => {
            if (u(o)) return n ? n[t] : e;
            n && (v(o) || p(o)) && (n[t] = o);
          },
          D = (t, e, n) => {
            if (u(n)) return t ? t.getAttribute(e) : null;
            t && t.setAttribute(e, n);
          },
          P = (t, e, n, o) => {
            if (n) {
              const r = D(t, e) || '',
                i = new Set(r.split(' '));
              i[o ? 'add' : 'delete'](n), D(t, e, S(i).join(' ').trim());
            }
          },
          $ = (t, e) => {
            t && t.removeAttribute(e);
          },
          V = (t, e) => j('scrollLeft', 0, t, e),
          N = (t, e) => j('scrollTop', 0, t, e),
          I = a() && Element.prototype,
          q = (t, e) => {
            const n = [],
              o = e ? (O(e) ? e : null) : document;
            return o ? L(n, o.querySelectorAll(t)) : n;
          },
          B = (t, e) => !!O(t) && (I.matches || I.msMatchesSelector).call(t, e),
          W = (t) => (t ? S(t.childNodes) : []),
          H = (t) => (t ? t.parentElement : null),
          R = (t, e) => {
            if (O(t)) {
              const n = I.closest;
              if (n) return n.call(t, e);
              do {
                if (B(t, e)) return t;
                t = H(t);
              } while (t);
            }
            return null;
          },
          z = (t, e, n) => {
            if (n && t) {
              let r,
                i = e;
              b(n)
                ? ((r = document.createDocumentFragment()),
                  o(n, (t) => {
                    t === i && (i = t.previousSibling), r.appendChild(t);
                  }))
                : (r = n),
                e && (i ? i !== e && (i = i.nextSibling) : (i = t.firstChild)),
                t.insertBefore(r, i || null);
            }
          },
          F = (t, e) => {
            z(t, null, e);
          },
          Y = (t, e) => {
            z(H(t), t && t.nextSibling, e);
          },
          X = (t) => {
            if (b(t)) o(S(t), (t) => X(t));
            else if (t) {
              const e = H(t);
              e && e.removeChild(t);
            }
          },
          U = (t) => {
            const e = document.createElement('div');
            return t && D(e, 'class', t), e;
          },
          J = (t) => {
            const e = U();
            return (e.innerHTML = t.trim()), o(W(e), (t) => X(t));
          },
          K = (t) => t.charAt(0).toUpperCase() + t.slice(1),
          G = ['-webkit-', '-moz-', '-o-', '-ms-'],
          Z = ['WebKit', 'Moz', 'O', 'MS', 'webkit', 'moz', 'o', 'ms'],
          Q = {},
          tt = {},
          et = (t) => {
            let e = tt[t];
            if (_(tt, t)) return e;
            const n = K(t),
              r = U().style;
            return (
              o(G, (o) => {
                const i = o.replace(/-/g, ''),
                  a = [t, o + t, i + n, K(i) + n];
                return !(e = a.find((t) => void 0 !== r[t]));
              }),
              (tt[t] = e || '')
            );
          },
          nt = (t) => {
            if (a()) {
              let e = Q[t] || window[t];
              return (
                _(Q, t) ||
                  (o(Z, (n) => ((e = e || window[n + K(t)]), !e)), (Q[t] = e)),
                e
              );
            }
          },
          ot = nt('MutationObserver'),
          rt = nt('IntersectionObserver'),
          it = nt('ResizeObserver'),
          at = nt('cancelAnimationFrame'),
          st = nt('requestAnimationFrame'),
          ct = a() && window.setTimeout,
          lt = a() && window.clearTimeout,
          ut = (t, e, n, r) => {
            if (t && e) {
              let i = !0;
              return (
                o(n, (n) => {
                  (r ? r(t[n]) : t[n]) !== (r ? r(e[n]) : e[n]) && (i = !1);
                }),
                i
              );
            }
            return !1;
          },
          dt = (t, e) => ut(t, e, ['w', 'h']),
          ft = (t, e) => ut(t, e, ['x', 'y']),
          pt = (t, e) => ut(t, e, ['t', 'r', 'b', 'l']),
          vt = (t, e, n) =>
            ut(t, e, ['width', 'height'], n && ((t) => Math.round(t))),
          mt = () => {},
          ht = (t) => {
            let e;
            const n = t ? ct : st,
              o = t ? lt : at;
            return [
              (r) => {
                o(e), (e = n(r, h(t) ? t() : t));
              },
              () => o(e),
            ];
          },
          gt = (t, e) => {
            let n,
              o,
              r,
              i = mt;
            const { g: a, v: s, p: c } = e || {},
              l = function (e) {
                i(), lt(n), (n = o = void 0), (i = mt), t.apply(this, e);
              },
              u = (t) => (c && o ? c(o, t) : t),
              d = () => {
                i !== mt && l(u(r) || r);
              },
              f = function () {
                const t = S(arguments),
                  e = h(a) ? a() : a,
                  c = p(e) && e >= 0;
                if (c) {
                  const a = h(s) ? s() : s,
                    c = p(a) && a >= 0,
                    f = e > 0 ? ct : st,
                    v = e > 0 ? lt : at,
                    m = u(t) || t,
                    g = l.bind(0, m);
                  i();
                  const y = f(g, e);
                  (i = () => v(y)), c && !n && (n = ct(d, a)), (o = r = m);
                } else l(t);
              };
            return (f.m = d), f;
          },
          { max: yt } = Math,
          bt = /[^\x20\t\r\n\f]+/g,
          wt = (t, e, n) => {
            const o = t && t.classList;
            let r,
              i = 0,
              a = !1;
            if (o && e && v(e)) {
              const t = e.match(bt) || [];
              for (a = t.length > 0; (r = t[i++]); ) a = !!n(o, r) && a;
            }
            return a;
          },
          xt = (t, e) => {
            wt(t, e, (t, e) => t.remove(e));
          },
          Ot = (t, e) => (wt(t, e, (t, e) => t.add(e)), xt.bind(0, t, e)),
          Et = { opacity: 1, zindex: 1 },
          Lt = (t, e) => {
            const n = e ? parseFloat(t) : parseInt(t, 10);
            return n == n ? n : 0;
          },
          St = (t, e, n) =>
            null != e ? e[n] || e.getPropertyValue(n) : t.style[n],
          At = (t, e, n) => {
            try {
              const { style: o } = t;
              u(o[e])
                ? o.setProperty(e, n)
                : (o[e] = ((t, e) =>
                    !Et[t.toLowerCase()] && p(e) ? `${e}px` : e)(e, n));
            } catch (t) {}
          },
          Tt = (t) => 'rtl' === r(t, 'direction'),
          _t = (t, e, n) => {
            const o = e ? `${e}-` : '',
              i = n ? `-${n}` : '',
              a = `${o}top${i}`,
              s = `${o}right${i}`,
              c = `${o}bottom${i}`,
              l = `${o}left${i}`,
              u = r(t, [a, s, c, l]);
            return {
              t: Lt(u[a], !0),
              r: Lt(u[s], !0),
              b: Lt(u[c], !0),
              l: Lt(u[l], !0),
            };
          },
          { round: Ct } = Math,
          kt = { w: 0, h: 0 },
          Mt = (t) => (t ? { w: t.offsetWidth, h: t.offsetHeight } : kt),
          jt = (t) => (t ? { w: t.clientWidth, h: t.clientHeight } : kt),
          Dt = (t) => (t ? { w: t.scrollWidth, h: t.scrollHeight } : kt),
          Pt = (t) => {
            const e = parseFloat(r(t, 'height')) || 0,
              n = parseFloat(r(t, 'width')) || 0;
            return { w: n - Ct(n), h: e - Ct(e) };
          },
          $t = (t) => t.getBoundingClientRect();
        let Vt;
        const Nt = (t) => t.split(' '),
          It = (t, e, n, r) => {
            o(Nt(e), (e) => {
              t.removeEventListener(e, n, r);
            });
          },
          qt = (t, e, n, r) => {
            var i;
            const a = (() => {
                if (u(Vt)) {
                  Vt = !1;
                  try {
                    window.addEventListener(
                      'test',
                      null,
                      Object.defineProperty({}, 'passive', {
                        get() {
                          Vt = !0;
                        },
                      })
                    );
                  } catch (t) {}
                }
                return Vt;
              })(),
              s = null != (i = a && r && r.S) ? i : a,
              c = (r && r.$) || !1,
              l = (r && r.C) || !1,
              d = [],
              f = a ? { passive: s, capture: c } : c;
            return (
              o(Nt(e), (e) => {
                const o = l
                  ? (r) => {
                      t.removeEventListener(e, o, c), n && n(r);
                    }
                  : n;
                L(d, It.bind(null, t, e, o, c)), t.addEventListener(e, o, f);
              }),
              T.bind(0, d)
            );
          },
          Bt = (t) => t.stopPropagation(),
          Wt = (t) => t.preventDefault(),
          Ht = { x: 0, y: 0 },
          Rt = (t) => {
            const e = t ? $t(t) : 0;
            return e
              ? {
                  x: e.left + window.pageYOffset,
                  y: e.top + window.pageXOffset,
                }
              : Ht;
          },
          zt = (t, e) => {
            o(g(e) ? e : [e], t);
          },
          Ft = (t) => {
            const e = new Map(),
              n = (t, n) => {
                if (t) {
                  const o = e.get(t);
                  zt((t) => {
                    o && o[t ? 'delete' : 'clear'](t);
                  }, n);
                } else
                  e.forEach((t) => {
                    t.clear();
                  }),
                    e.clear();
              },
              r = (t, i) => {
                if (v(t)) {
                  const o = e.get(t) || new Set();
                  return (
                    e.set(t, o),
                    zt((t) => {
                      h(t) && o.add(t);
                    }, i),
                    n.bind(0, t, i)
                  );
                }
                m(i) && i && n();
                const a = C(t),
                  s = [];
                return (
                  o(a, (e) => {
                    const n = t[e];
                    n && L(s, r(e, n));
                  }),
                  T.bind(0, s)
                );
              };
            return (
              r(t || {}),
              [
                r,
                n,
                (t, n) => {
                  const r = e.get(t);
                  o(S(r), (t) => {
                    n && !A(n) ? t.apply(0, n) : t();
                  });
                },
              ]
            );
          },
          Yt = (t) =>
            JSON.stringify(t, (t, e) => {
              if (h(e)) throw new Error();
              return e;
            }),
          Xt = {
            paddingAbsolute: !1,
            showNativeOverlaidScrollbars: !1,
            update: {
              elementEvents: [['img', 'load']],
              debounce: [0, 33],
              attributes: null,
              ignoreMutation: null,
            },
            overflow: { x: 'scroll', y: 'scroll' },
            scrollbars: {
              theme: 'os-theme-dark',
              visibility: 'auto',
              autoHide: 'never',
              autoHideDelay: 1300,
              dragScroll: !0,
              clickScroll: !1,
              pointers: ['mouse', 'touch', 'pen'],
            },
          },
          Ut = (t, e) => {
            const n = {};
            return (
              o(C(e).concat(C(t)), (o) => {
                const r = t[o],
                  i = e[o];
                if (y(r) && y(i))
                  k((n[o] = {}), Ut(r, i)), M(n[o]) && delete n[o];
                else if (_(e, o) && i !== r) {
                  let t = !0;
                  if (g(r) || g(i))
                    try {
                      Yt(r) === Yt(i) && (t = !1);
                    } catch (t) {}
                  t && (n[o] = i);
                }
              }),
              n
            );
          },
          Jt = 'os-environment',
          Kt = `${Jt}-flexbox-glue`,
          Gt = `${Kt}-max`,
          Zt = 'data-overlayscrollbars',
          Qt = 'data-overlayscrollbars-initialize',
          te = `${Zt}-overflow-x`,
          ee = `${Zt}-overflow-y`,
          ne = 'overflowVisible',
          oe = 'updating',
          re = 'os-viewport',
          ie = `${re}-arrange`,
          ae = `${re}-scrollbar-hidden`,
          se = 'os-overflow-visible',
          ce = 'os-size-observer',
          le = `${ce}-appear`,
          ue = `${ce}-listener`,
          de = 'os-scrollbar',
          fe = `${de}-rtl`,
          pe = `${de}-horizontal`,
          ve = `${de}-vertical`,
          me = `${de}-track`,
          he = `${de}-handle`,
          ge = `${de}-visible`,
          ye = `${de}-cornerless`,
          be = `${de}-transitionless`,
          we = `${de}-interaction`,
          xe = `${de}-unusable`,
          Oe = `${de}-auto-hidden`,
          Ee = `${de}-wheel`,
          Le = `${me}-interactive`,
          Se = `${he}-interactive`,
          Ae = {},
          Te = () => Ae,
          { round: _e, abs: Ce } = Math,
          ke = '__osScrollbarsHidingPlugin';
        let Me;
        const je = (t, e, n, o) => {
            F(t, e);
            const r = jt(e),
              i = Mt(e),
              a = Pt(n);
            return o && X(e), { x: i.h - r.h + a.h, y: i.w - r.w + a.w };
          },
          De = (t, e) => {
            const n = 'hidden';
            r(t, { overflowX: n, overflowY: n, direction: 'rtl' }), V(t, 0);
            const o = Rt(t),
              i = Rt(e);
            V(t, -999);
            const a = Rt(e);
            return { i: o.x === i.x, n: i.x !== a.x };
          },
          Pe = (t, e) => {
            const n = Ot(t, Kt),
              o = $t(t),
              r = $t(e),
              i = vt(r, o, !0),
              a = Ot(t, Gt),
              s = $t(t),
              c = $t(e),
              l = vt(c, s, !0);
            return n(), a(), i && l;
          },
          $e = () => (
            Me ||
              (Me = (() => {
                const { body: t } = document,
                  e = J(`<div class="${Jt}"><div></div></div>`)[0],
                  n = e.firstChild,
                  [o, , a] = Ft(),
                  [s, c] = i(
                    { o: je(t, e, n), u: ft },
                    je.bind(0, t, e, n, !0)
                  ),
                  [l] = c(),
                  u = ((t) => {
                    let e = !1;
                    const n = Ot(t, ae);
                    try {
                      e =
                        'none' === r(t, et('scrollbar-width')) ||
                        'none' ===
                          window
                            .getComputedStyle(t, '::-webkit-scrollbar')
                            .getPropertyValue('display');
                    } catch (t) {}
                    return n(), e;
                  })(e),
                  d = { x: 0 === l.x, y: 0 === l.y },
                  f = {
                    elements: {
                      host: null,
                      padding: !u,
                      viewport: (t) => u && t === t.ownerDocument.body && t,
                      content: !1,
                    },
                    scrollbars: { slot: !0 },
                    cancel: { nativeScrollbarsOverlaid: !1, body: null },
                  },
                  p = k({}, Xt),
                  v = k.bind(0, {}, p),
                  m = k.bind(0, {}, f),
                  h = {
                    k: l,
                    A: d,
                    I: u,
                    L: '-1' === r(e, 'zIndex'),
                    B: De(e, n),
                    V: Pe(e, n),
                    Y: o.bind(0, 'z'),
                    j: o.bind(0, 'r'),
                    N: m,
                    q: (t) => k(f, t) && m(),
                    F: v,
                    G: (t) => k(p, t) && v(),
                    X: k({}, f),
                    U: k({}, p),
                  },
                  g = window.addEventListener,
                  y = gt((t) => a(t ? 'z' : 'r'), { g: 33, v: 99 });
                if (
                  ($(e, 'style'),
                  X(e),
                  g('resize', y.bind(0, !1)),
                  !(u || (d.x && d.y)))
                ) {
                  let t;
                  g('resize', () => {
                    const e = Te()[ke];
                    (t = t || (e && e.R())), t && t(h, s, y.bind(0, !0));
                  });
                }
                return h;
              })()),
            Me
          ),
          Ve = (t, e) => (h(e) ? e.apply(0, t) : e),
          Ne = (t, e, n, o) => {
            const r = u(o) ? n : o;
            return Ve(t, r) || e.apply(0, t);
          },
          Ie = (t, e, n, o) => {
            const r = u(o) ? n : o,
              i = Ve(t, r);
            return !!i && (x(i) ? i : e.apply(0, t));
          },
          qe = new WeakMap(),
          Be = (t) => qe.get(t),
          We = (t, e) =>
            t
              ? e.split('.').reduce((t, e) => (t && _(t, e) ? t[e] : void 0), t)
              : void 0,
          He = (t, e, n) => (o) => [We(t, o), n || void 0 !== We(e, o)],
          Re = (t) => {
            let e = t;
            return [
              () => e,
              (t) => {
                e = k({}, e, t);
              },
            ];
          },
          ze = 'tabindex',
          Fe = U.bind(0, ''),
          Ye = (t) => {
            F(H(t), W(t)), X(t);
          },
          Xe = (t) => {
            const e = $e(),
              { N: n, I: o } = e,
              r = Te()[ke],
              i = r && r.T,
              { elements: a } = n(),
              { host: s, padding: c, viewport: l, content: u } = a,
              d = x(t),
              f = d ? {} : t,
              { elements: p } = f,
              { host: v, padding: m, viewport: h, content: g } = p || {},
              y = d ? t : f.target,
              b = B(y, 'textarea'),
              w = y.ownerDocument,
              O = w.documentElement,
              S = y === w.body,
              A = w.defaultView,
              _ = Ne.bind(0, [y]),
              k = Ie.bind(0, [y]),
              M = Ve.bind(0, [y]),
              j = _.bind(0, Fe, l),
              V = k.bind(0, Fe, u),
              N = j(h),
              I = N === y,
              q = I && S,
              R = !I && V(g),
              U = !I && x(N) && N === R,
              J = U && !!M(u),
              K = J ? j() : N,
              G = J ? R : V(),
              Z = q ? O : U ? K : N,
              Q = b ? _(Fe, s, v) : y,
              tt = q ? Z : Q,
              et = U ? G : R,
              nt = w.activeElement,
              ot = !I && A.top === A && nt === y,
              rt = {
                W: y,
                Z: tt,
                J: Z,
                K: !I && k(Fe, c, m),
                tt: et,
                nt: !I && !o && i && i(e),
                ot: q ? O : Z,
                st: q ? w : Z,
                et: A,
                ct: w,
                rt: b,
                it: S,
                lt: d,
                ut: I,
                dt: U,
                ft: (t, e) =>
                  I
                    ? ((t, e, n) => {
                        const o = D(t, 'data-overlayscrollbars') || '';
                        return new Set(o.split(' ')).has(n);
                      })(Z, 0, e)
                    : ((t, e) => wt(t, e, (t, e) => t.contains(e)))(Z, t),
                _t: (t, e, n) => (I ? P(Z, Zt, e, n) : (n ? Ot : xt)(Z, t)),
              },
              it = C(rt).reduce((t, e) => {
                const n = rt[e];
                return L(t, !(!n || H(n)) && n);
              }, []),
              at = (t) => (t ? E(it, t) > -1 : null),
              { W: st, Z: ct, K: lt, J: ut, tt: dt, nt: ft } = rt,
              pt = [
                () => {
                  $(ct, Zt), $(ct, Qt), $(st, Qt), S && ($(O, Zt), $(O, Qt));
                },
              ],
              vt = b && at(ct);
            let ht = b ? st : W([dt, ut, lt, ct, st].find((t) => !1 === at(t)));
            const gt = q ? st : dt || ut;
            return [
              rt,
              () => {
                D(ct, Zt, I ? 'viewport' : 'host');
                const t = Ot(lt, 'os-padding'),
                  e = Ot(ut, !I && re),
                  n = Ot(dt, 'os-content'),
                  r = S && !I ? Ot(H(y), ae) : mt;
                if (
                  (vt &&
                    (Y(st, ct),
                    L(pt, () => {
                      Y(ct, st), X(ct);
                    })),
                  F(gt, ht),
                  F(ct, lt),
                  F(lt || ct, !I && ut),
                  F(ut, dt),
                  L(pt, () => {
                    r(),
                      $(ut, te),
                      $(ut, ee),
                      at(dt) && Ye(dt),
                      at(ut) && Ye(ut),
                      at(lt) && Ye(lt),
                      t(),
                      e(),
                      n();
                  }),
                  o && !I && L(pt, xt.bind(0, ut, ae)),
                  ft &&
                    (((t, e) => {
                      z(H(t), t, e);
                    })(ut, ft),
                    L(pt, X.bind(0, ft))),
                  ot)
                ) {
                  const t = D(ut, ze);
                  D(ut, ze, '-1'), ut.focus();
                  const e = () => (t ? D(ut, ze, t) : $(ut, ze)),
                    n = qt(w, 'pointerdown keydown', () => {
                      e(), n();
                    });
                  L(pt, [e, n]);
                } else nt && nt.focus && nt.focus();
                ht = 0;
              },
              T.bind(0, pt),
            ];
          },
          Ue = (t, e) => {
            const { tt: n } = t,
              [o] = e;
            return (t) => {
              const { V: e } = $e(),
                { ht: i } = o(),
                { gt: a } = t,
                s = (n || !e) && a;
              return s && r(n, { height: i ? '' : '100%' }), { vt: s, wt: s };
            };
          },
          Je = (t, e) => {
            const [n, o] = e,
              { Z: a, K: s, J: c, ut: l } = t,
              [u, d] = i({ u: pt, o: _t() }, _t.bind(0, a, 'padding', ''));
            return (t, e, i) => {
              let [a, f] = d(i);
              const { I: p, V: v } = $e(),
                { bt: m } = n(),
                { vt: h, wt: g, yt: y } = t,
                [b, w] = e('paddingAbsolute');
              (h || f || (!v && g)) && ([a, f] = u(i));
              const x = !l && (w || y || f);
              if (x) {
                const t = !b || (!s && !p),
                  e = a.r + a.l,
                  n = a.t + a.b,
                  i = {
                    marginRight: t && !m ? -e : 0,
                    marginBottom: t ? -n : 0,
                    marginLeft: t && m ? -e : 0,
                    top: t ? -a.t : 0,
                    right: t ? (m ? -a.r : 'auto') : 0,
                    left: t ? (m ? 'auto' : -a.l) : 0,
                    width: t ? `calc(100% + ${e}px)` : '',
                  },
                  l = {
                    paddingTop: t ? a.t : 0,
                    paddingRight: t ? a.r : 0,
                    paddingBottom: t ? a.b : 0,
                    paddingLeft: t ? a.l : 0,
                  };
                r(s || c, i),
                  r(c, l),
                  o({ K: a, St: !t, M: s ? l : k({}, i, l) });
              }
              return { xt: x };
            };
          },
          { max: Ke } = Math,
          Ge = Ke.bind(0, 0),
          Ze = 'visible',
          Qe = 'hidden',
          tn = { u: dt, o: { w: 0, h: 0 } },
          en = { u: ft, o: { x: Qe, y: Qe } },
          nn = (t, e, n) => (n ? Ot(t, e) : xt(t, e)),
          on = (t) => 0 === t.indexOf(Ze),
          rn = (t, e) => {
            const [n, o] = e,
              { Z: a, K: s, J: c, nt: l, ut: u, _t: d, it: f, et: p } = t,
              { k: v, V: m, I: h, A: g } = $e(),
              y = Te()[ke],
              b = !u && !h && (g.x || g.y),
              w = f && u,
              [x, O] = i(tn, Pt.bind(0, c)),
              [E, L] = i(tn, Dt.bind(0, c)),
              [S, A] = i(tn),
              [T, _] = i(tn),
              [C] = i(en),
              k = (t, e) => {
                if ((r(c, { height: '' }), e)) {
                  const { St: e, K: o } = n(),
                    { $t: i, P: s } = t,
                    l = Pt(a),
                    u = jt(a),
                    d = 'content-box' === r(c, 'boxSizing'),
                    f = e || d ? o.b + o.t : 0,
                    p = !(g.x && d);
                  r(c, { height: u.h + l.h + (i.x && p ? s.x : 0) - f });
                }
              },
              M = (t, e) => {
                const n = h || t ? 0 : 42,
                  o = (t, o, i) => {
                    const a = r(c, t),
                      s = 'scroll' === (e ? e[t] : a);
                    return [a, s, s && !h ? (o ? n : i) : 0, o && !!n];
                  },
                  [i, a, s, l] = o('overflowX', g.x, v.x),
                  [u, d, f, p] = o('overflowY', g.y, v.y);
                return {
                  Ct: { x: i, y: u },
                  $t: { x: a, y: d },
                  P: { x: s, y: f },
                  D: { x: l, y: p },
                };
              },
              j = (t, e, o, r) => {
                const { P: i, D: a } = t,
                  { x: s, y: c } = a,
                  { x: l, y: u } = i,
                  { M: d } = n(),
                  f = e ? 'marginLeft' : 'marginRight',
                  p = e ? 'paddingLeft' : 'paddingRight',
                  v = d[f],
                  m = d.marginBottom,
                  h = d[p],
                  g = d.paddingBottom;
                (r.width = `calc(100% + ${u + -1 * v}px)`),
                  (r[f] = -u + v),
                  (r.marginBottom = -l + m),
                  o &&
                    ((r[p] = h + (c ? u : 0)),
                    (r.paddingBottom = g + (s ? l : 0)));
              },
              [$, V] = y ? y.H(b, m, c, l, n, M, j) : [() => b, () => [mt]];
            return (t, e, i) => {
              const { vt: l, Ot: f, wt: v, xt: y, gt: b, yt: N } = t,
                { ht: I, bt: q } = n(),
                [B, W] = e('showNativeOverlaidScrollbars'),
                [H, R] = e('overflow'),
                z = B && g.x && g.y,
                F = !u && !m && (l || v || f || W || b),
                Y = on(H.x),
                X = on(H.y),
                U = Y || X;
              let J,
                K = O(i),
                G = L(i),
                Z = A(i),
                Q = _(i);
              if (
                (W && h && d(ae, 'scrollbarHidden', !z),
                F && ((J = M(z)), k(J, I)),
                l || y || v || N || W)
              ) {
                U && d(se, ne, !1);
                const [t, e] = V(z, q, J),
                  [n, o] = (K = x(i)),
                  [r, a] = (G = E(i)),
                  s = jt(c);
                let l = r,
                  u = s;
                t(),
                  (a || o || W) &&
                    e &&
                    !z &&
                    $(e, r, n, q) &&
                    ((u = jt(c)), (l = Dt(c)));
                const f = {
                    w: Ge(Ke(r.w, l.w) + n.w),
                    h: Ge(Ke(r.h, l.h) + n.h),
                  },
                  v = {
                    w: Ge((w ? p.innerWidth : u.w + Ge(s.w - r.w)) + n.w),
                    h: Ge(
                      (w ? p.innerHeight + n.h : u.h + Ge(s.h - r.h)) + n.h
                    ),
                  };
                (Q = T(v)),
                  (Z = S(
                    ((t, e) => {
                      const n = window.devicePixelRatio % 1 != 0 ? 1 : 0,
                        o = { w: Ge(t.w - e.w), h: Ge(t.h - e.h) };
                      return { w: o.w > n ? o.w : 0, h: o.h > n ? o.h : 0 };
                    })(f, v),
                    i
                  ));
              }
              const [tt, et] = Q,
                [nt, ot] = Z,
                [rt, it] = G,
                [at, st] = K,
                ct = { x: nt.w > 0, y: nt.h > 0 },
                lt =
                  (Y && X && (ct.x || ct.y)) ||
                  (Y && ct.x && !ct.y) ||
                  (X && ct.y && !ct.x);
              if (y || N || st || it || et || ot || R || W || F) {
                const t = {
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                    width: '',
                    overflowY: '',
                    overflowX: '',
                  },
                  e = ((t, e, n, o) => {
                    const r = (t, e) => {
                        const n = on(t),
                          o = (e && n && t.replace(`${Ze}-`, '')) || '';
                        return [e && !n ? t : '', on(o) ? 'hidden' : o];
                      },
                      [i, a] = r(n.x, e.x),
                      [s, c] = r(n.y, e.y);
                    return (
                      (o.overflowX = a && s ? a : i),
                      (o.overflowY = c && i ? c : s),
                      M(t, o)
                    );
                  })(z, ct, H, t),
                  n = $(e, rt, at, q);
                u || j(e, q, n, t),
                  F && k(e, I),
                  u ? (D(a, te, t.overflowX), D(a, ee, t.overflowY)) : r(c, t);
              }
              P(a, Zt, ne, lt), nn(s, se, lt), !u && nn(c, se, U);
              const [ut, dt] = C(M(z).Ct);
              return (
                o({
                  Ct: ut,
                  zt: { x: tt.w, y: tt.h },
                  Tt: { x: nt.w, y: nt.h },
                  Et: ct,
                }),
                { It: dt, At: et, Lt: ot }
              );
            };
          },
          an = (t, e, n) => {
            const r = {},
              i = e || {};
            return (
              o(C(t).concat(C(i)), (e) => {
                const o = t[e],
                  a = i[e];
                r[e] = !!(n || o || a);
              }),
              r
            );
          },
          sn = (t, e, n, r) => {
            let i = !1;
            const { Ht: a, Mt: s, Pt: c, Dt: l, Rt: u, kt: d } = r || {},
              f = gt(
                () => {
                  i && n(!0);
                },
                { g: 33, v: 99 }
              ),
              [p, m] = ((t, e, n) => {
                let r,
                  i = !1;
                const a = (a) => {
                  if (n) {
                    const s = n.reduce((e, n) => {
                      if (n) {
                        const [o, r] = n,
                          i = r && o && (a ? a(o) : q(o, t));
                        i && i.length && r && v(r) && L(e, [i, r.trim()], !0);
                      }
                      return e;
                    }, []);
                    o(s, (n) =>
                      o(n[0], (o) => {
                        const a = n[1],
                          s = r.get(o) || [];
                        if (t.contains(o)) {
                          const t = qt(o, a, (n) => {
                            i ? (t(), r.delete(o)) : e(n);
                          });
                          r.set(o, L(s, t));
                        } else T(s), r.delete(o);
                      })
                    );
                  }
                };
                return (
                  n && ((r = new WeakMap()), a()),
                  [
                    () => {
                      i = !0;
                    },
                    a,
                  ]
                );
              })(t, f, c),
              h = s || [],
              g = (a || []).concat(h),
              y = (i, a) => {
                const s = u || mt,
                  c = d || mt,
                  f = new Set(),
                  p = new Set();
                let g = !1,
                  y = !1;
                if (
                  (o(i, (n) => {
                    const {
                        attributeName: i,
                        target: a,
                        type: u,
                        oldValue: d,
                        addedNodes: m,
                        removedNodes: b,
                      } = n,
                      w = 'attributes' === u,
                      x = 'childList' === u,
                      O = t === a,
                      L = w && v(i) ? D(a, i) : 0,
                      S = 0 !== L && d !== L,
                      A = E(h, i) > -1 && S;
                    if (e && (x || !O)) {
                      const e = !w,
                        u = w && S,
                        p = u && l && B(a, l),
                        v = (p ? !s(a, i, d, L) : e || u) && !c(n, !!p, t, r);
                      o(m, (t) => f.add(t)),
                        o(b, (t) => f.add(t)),
                        (y = y || v);
                    }
                    !e && O && S && !s(a, i, d, L) && (p.add(i), (g = g || A));
                  }),
                  f.size > 0 &&
                    m((t) =>
                      S(f).reduce(
                        (e, n) => (L(e, q(t, n)), B(n, t) ? L(e, n) : e),
                        []
                      )
                    ),
                  e)
                )
                  return !a && y && n(!1), [!1];
                if (p.size > 0 || g) {
                  const t = [S(p), g];
                  return !a && n.apply(0, t), t;
                }
              },
              b = new ot((t) => y(t));
            return (
              b.observe(t, {
                attributes: !0,
                attributeOldValue: !0,
                attributeFilter: g,
                subtree: e,
                childList: e,
                characterData: e,
              }),
              (i = !0),
              [
                () => {
                  i && (p(), b.disconnect(), (i = !1));
                },
                () => {
                  if (i) {
                    f.m();
                    const t = b.takeRecords();
                    return !A(t) && y(t, !0);
                  }
                },
              ]
            );
          },
          cn = 3333333,
          ln = (t) => t && (t.height || t.width),
          un = (t, e, n) => {
            const { Bt: o = !1, Vt: r = !1 } = n || {},
              a = Te().__osSizeObserverPlugin,
              { B: s } = $e(),
              c = J(`<div class="${ce}"><div class="${ue}"></div></div>`)[0],
              l = c.firstChild,
              u = Tt.bind(0, t),
              [d] = i({
                o: void 0,
                _: !0,
                u: (t, e) => !(!t || (!ln(t) && ln(e))),
              }),
              f = (t) => {
                const n = g(t) && t.length > 0 && y(t[0]),
                  r = !n && m(t[0]);
                let i = !1,
                  a = !1,
                  l = !0;
                if (n) {
                  const [e, , n] = d(t.pop().contentRect),
                    o = ln(e),
                    r = ln(n);
                  (i = !n || !o), (a = !r && o), (l = !i);
                } else r ? ([, l] = t) : (a = !0 === t);
                if (o && l) {
                  const e = r ? t[0] : Tt(c);
                  V(c, e ? (s.n ? -cn : s.i ? 0 : cn) : cn), N(c, cn);
                }
                i || e({ vt: !r, Yt: r ? t : void 0, Vt: !!a });
              },
              p = [];
            let v = !!r && f;
            return [
              () => {
                T(p), X(c);
              },
              () => {
                if (it) {
                  const t = new it(f);
                  t.observe(l),
                    L(p, () => {
                      t.disconnect();
                    });
                } else if (a) {
                  const [t, e] = a.O(l, f, r);
                  (v = t), L(p, e);
                }
                if (o) {
                  const [t] = i({ o: !u() }, u);
                  L(
                    p,
                    qt(c, 'scroll', (e) => {
                      const n = t(),
                        [o, r] = n;
                      r && (xt(l, 'ltr rtl'), Ot(l, o ? 'rtl' : 'ltr'), f(n)),
                        Bt(e);
                    })
                  );
                }
                v && (Ot(c, le), L(p, qt(c, 'animationstart', v, { C: !!it }))),
                  (it || a) && F(t, c);
              },
            ];
          },
          dn = (t, e) => {
            let n;
            const o = U('os-trinsic-observer'),
              r = [],
              [a] = i({ o: !1 }),
              s = (t, n) => {
                if (t) {
                  const o = a(
                      ((t) =>
                        0 === t.h ||
                        t.isIntersecting ||
                        t.intersectionRatio > 0)(t)
                    ),
                    [, r] = o;
                  if (r) return !n && e(o), [o];
                }
              },
              c = (t, e) => {
                if (t && t.length > 0) return s(t.pop(), e);
              };
            return [
              () => {
                T(r), X(o);
              },
              () => {
                if (rt)
                  (n = new rt((t) => c(t), { root: t })),
                    n.observe(o),
                    L(r, () => {
                      n.disconnect();
                    });
                else {
                  const t = () => {
                      const t = Mt(o);
                      s(t);
                    },
                    [e, n] = un(o, t);
                  L(r, e), n(), t();
                }
                F(t, o);
              },
              () => {
                if (n) return c(n.takeRecords(), !0);
              },
            ];
          },
          fn = `[${Zt}]`,
          pn = `.${re}`,
          vn = ['tabindex'],
          mn = ['wrap', 'cols', 'rows'],
          hn = ['id', 'class', 'style', 'open'],
          gn = (t, e, n) => {
            let r, a, s;
            const { Z: c, J: l, tt: u, rt: d, ut: f, ft: m, _t: y } = t,
              { V: b } = $e(),
              [w] = i({ u: dt, o: { w: 0, h: 0 } }, () => {
                const t = m(se, ne),
                  e = m(ie, ''),
                  n = e && V(l),
                  o = e && N(l);
                y(se, ne), y(ie, ''), y('', oe, !0);
                const r = Dt(u),
                  i = Dt(l),
                  a = Pt(l);
                return (
                  y(se, ne, t),
                  y(ie, '', e),
                  y('', oe),
                  V(l, n),
                  N(l, o),
                  { w: i.w + r.w + a.w, h: i.h + r.h + a.h }
                );
              }),
              x = d ? mn : hn.concat(mn),
              S = gt(n, {
                g: () => r,
                v: () => a,
                p(t, e) {
                  const [n] = t,
                    [o] = e;
                  return [
                    C(n)
                      .concat(C(o))
                      .reduce((t, e) => ((t[e] = n[e] || o[e]), t), {}),
                  ];
                },
              }),
              A = (t) => {
                o(t || vn, (t) => {
                  if (E(vn, t) > -1) {
                    const e = D(c, t);
                    v(e) ? D(l, t, e) : $(l, t);
                  }
                });
              },
              T = (t, o) => {
                const [r, i] = t,
                  a = { gt: i };
                return e({ ht: r }), !o && n(a), a;
              },
              _ = ({ vt: t, Yt: o, Vt: r }) => {
                const i = !t || r ? n : S;
                let a = !1;
                if (o) {
                  const [t, n] = o;
                  (a = n), e({ bt: t });
                }
                i({ vt: t, yt: a });
              },
              M = (t, e) => {
                const [, o] = w(),
                  r = { wt: o };
                return o && !e && (t ? n : S)(r), r;
              },
              j = (t, e, n) => {
                const o = { Ot: e };
                return e ? !n && S(o) : f || A(t), o;
              },
              [P, I, q] = u || !b ? dn(c, T) : [mt, mt, mt],
              [B, W] = f ? [mt, mt] : un(c, _, { Vt: !0, Bt: !0 }),
              [H, z] = sn(c, !1, j, { Mt: hn, Ht: hn.concat(vn) }),
              F = f && it && new it(_.bind(0, { vt: !0 }));
            return (
              F && F.observe(c),
              A(),
              [
                () => {
                  P(), B(), s && s[0](), F && F.disconnect(), H();
                },
                () => {
                  W(), I();
                },
                () => {
                  const t = {},
                    e = z(),
                    n = q(),
                    o = s && s[1]();
                  return (
                    e && k(t, j.apply(0, L(e, !0))),
                    n && k(t, T.apply(0, L(n, !0))),
                    o && k(t, M.apply(0, L(o, !0))),
                    t
                  );
                },
                (t) => {
                  const [e] = t('update.ignoreMutation'),
                    [n, o] = t('update.attributes'),
                    [i, c] = t('update.elementEvents'),
                    [d, v] = t('update.debounce'),
                    m = (t) => h(e) && e(t);
                  if (
                    ((c || o) &&
                      (s && (s[1](), s[0]()),
                      (s = sn(u || l, !0, M, {
                        Ht: x.concat(n || []),
                        Pt: i,
                        Dt: fn,
                        kt: (t, e) => {
                          const { target: n, attributeName: o } = t;
                          return (
                            (!(e || !o || f) &&
                              ((t, e, n) => {
                                const o = t && R(t, e),
                                  r =
                                    t &&
                                    ((t, e) => {
                                      const n = e
                                        ? O(e)
                                          ? e
                                          : null
                                        : document;
                                      return n ? n.querySelector(t) : null;
                                    })(n, o),
                                  i = R(r, e) === o;
                                return (
                                  !(!o || !r) &&
                                  (o === t ||
                                    r === t ||
                                    (i && R(R(t, n), e) !== o))
                                );
                              })(n, fn, pn)) ||
                            !!R(n, `.${de}`) ||
                            !!m(t)
                          );
                        },
                      }))),
                    v)
                  )
                    if ((S.m(), g(d))) {
                      const t = d[0],
                        e = d[1];
                      (r = p(t) && t), (a = p(e) && e);
                    } else p(d) ? ((r = d), (a = !1)) : ((r = !1), (a = !1));
                },
              ]
            );
          },
          yn = { x: 0, y: 0 },
          bn = {
            K: { t: 0, r: 0, b: 0, l: 0 },
            St: !1,
            M: {
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
              paddingTop: 0,
              paddingRight: 0,
              paddingBottom: 0,
              paddingLeft: 0,
            },
            zt: yn,
            Tt: yn,
            Ct: { x: 'hidden', y: 'hidden' },
            Et: { x: !1, y: !1 },
            ht: !1,
            bt: !1,
          },
          { round: wn } = Math,
          xn = (t, e) =>
            qt(t, 'mousedown', qt.bind(0, e, 'click', Bt, { C: !0, $: !0 }), {
              $: !0,
            }),
          On = (t, e, n, o, r, i) => {
            const { B: a } = $e(),
              { Ft: s, Gt: c, Xt: l } = n,
              u = 'scroll' + (i ? 'Left' : 'Top'),
              d = 'client' + (i ? 'X' : 'Y'),
              f = i ? 'width' : 'height',
              p = i ? 'left' : 'top',
              v = i ? 'w' : 'h',
              m = i ? 'x' : 'y',
              h = (t, e) => (n) => {
                const { Tt: d } = r(),
                  f = Mt(c)[v] - Mt(s)[v],
                  p = ((e * n) / f) * d[m],
                  h = Tt(l) && i ? (a.n || a.i ? 1 : -1) : 1;
                o[u] = t + p * h;
              };
            return qt(c, 'pointerdown', (n) => {
              const r = R(n.target, `.${he}`) === s;
              if (
                ((t, e, n) => {
                  const o = e.scrollbars,
                    { button: r, isPrimary: i, pointerType: a } = t,
                    { pointers: s } = o;
                  return (
                    0 === r &&
                    i &&
                    o[n ? 'dragScroll' : 'clickScroll'] &&
                    (s || []).includes(a)
                  );
                })(n, t, r)
              ) {
                const t = !r && n.shiftKey,
                  i = () => $t(s),
                  a = () => $t(c),
                  l = (t, e) => (t || i())[p] - (e || a())[p],
                  v = h(
                    o[u] || 0,
                    1 /
                      ((t) => {
                        const { width: e, height: n } = $t(t),
                          { w: o, h: r } = Mt(t);
                        return { x: wn(e) / o || 1, y: wn(n) / r || 1 };
                      })(o)[m]
                  ),
                  g = n[d],
                  y = i(),
                  b = a(),
                  w = y[f],
                  x = l(y, b) + w / 2,
                  O = g - b[p],
                  E = r ? 0 : O - x,
                  S = [
                    qt(e, 'selectstart', (t) => Wt(t), { S: !1 }),
                    qt(c, 'pointermove', (e) => {
                      const n = e[d] - g;
                      (r || t) && v(E + n);
                    }),
                  ];
                if (t) v(E);
                else if (!r) {
                  const t = Te().__osClickScrollPlugin;
                  t && L(S, t.O(v, l, E, w, O));
                }
                qt(
                  c,
                  'pointerup',
                  (t) => {
                    T(S), c.releasePointerCapture(t.pointerId);
                  },
                  { C: !0 }
                ),
                  c.setPointerCapture(n.pointerId);
              }
            });
          },
          { min: En, max: Ln, abs: Sn, round: An } = Math,
          Tn = (t, e, n, o) => {
            if (o) {
              const t = n ? 'x' : 'y',
                { Tt: e, zt: r } = o,
                i = r[t],
                a = e[t];
              return Ln(0, En(1, i / (i + a)));
            }
            const r = n ? 'w' : 'h',
              i = Mt(t)[r],
              a = Mt(e)[r];
            return Ln(0, En(1, i / a));
          },
          _n = (t, e, n) => {
            const { N: i } = $e(),
              { scrollbars: a } = i(),
              { slot: s } = a,
              { ct: c, W: l, Z: u, J: d, lt: f, ot: p, it: v, ut: h } = e,
              { scrollbars: g } = f ? {} : t,
              { slot: y } = g || {},
              b = Ie([l, u, d], () => (h && v ? l : u), s, y),
              w = (t, e, n) => {
                const r = n ? Ot : xt;
                o(t, (t) => {
                  r(t.Xt, e);
                });
              },
              x = (t, e) => {
                o(t, (t) => {
                  const [n, o] = e(t);
                  r(n, o);
                });
              },
              O = (t, e, n) => {
                x(t, (t) => {
                  const { Ft: o, Gt: r } = t;
                  return [
                    o,
                    {
                      [n ? 'width' : 'height']: `${(
                        100 * Tn(o, r, n, e)
                      ).toFixed(3)}%`,
                    },
                  ];
                });
              },
              E = (t, e, n) => {
                const o = n ? 'X' : 'Y';
                x(t, (t) => {
                  const { Ft: r, Gt: i, Xt: a } = t,
                    s = ((t, e, n, o, r, i) => {
                      const { B: a } = $e(),
                        s = i ? 'x' : 'y',
                        c = i ? 'Left' : 'Top',
                        { Tt: l } = o,
                        u = An(l[s]),
                        d = Sn(n[`scroll${c}`]),
                        f = i && r,
                        p = a.i ? d : u - d,
                        v = En(1, (f ? p : d) / u),
                        m = Tn(t, e, i);
                      return (1 / m) * (1 - m) * v;
                    })(r, i, p, e, Tt(a), n);
                  return [
                    r,
                    {
                      transform:
                        s == s ? `translate${o}(${(100 * s).toFixed(3)}%)` : '',
                    },
                  ];
                });
              },
              S = [],
              _ = [],
              C = [],
              k = (t, e, n) => {
                const o = m(n),
                  r = !o || !n;
                (!o || n) && w(_, t, e), r && w(C, t, e);
              },
              M = (t) => {
                const e = t ? pe : ve,
                  o = t ? _ : C,
                  r = A(o) ? be : '',
                  i = U(`${de} ${e} ${r}`),
                  a = U(me),
                  s = U(he),
                  l = { Xt: i, Gt: a, Ft: s };
                return (
                  F(i, a),
                  F(a, s),
                  L(o, l),
                  L(S, [X.bind(0, i), n(l, k, c, u, p, t)]),
                  l
                );
              },
              j = M.bind(0, !0),
              D = M.bind(0, !1);
            return (
              j(),
              D(),
              [
                {
                  Ut: (t) => {
                    O(_, t, !0), O(C, t);
                  },
                  Wt: (t) => {
                    E(_, t, !0), E(C, t);
                  },
                  Zt: k,
                  Jt: { Kt: _, Qt: j, tn: x.bind(0, _) },
                  nn: { Kt: C, Qt: D, tn: x.bind(0, C) },
                },
                () => {
                  F(b, _[0].Xt),
                    F(b, C[0].Xt),
                    ct(() => {
                      k(be);
                    }, 300);
                },
                T.bind(0, S),
              ]
            );
          },
          Cn = (t, e, n) => {
            h(t) && t(e || void 0, n || void 0);
          },
          kn = (t, e, n) => {
            const { F: r, N: i, Y: a, j: s } = $e(),
              c = Te(),
              l = x(t),
              f = l ? t : t.target,
              p = Be(f);
            if (e && !p) {
              let p = !1;
              const v = (t) => {
                  const e = Te().__osOptionsValidationPlugin,
                    n = e && e.O;
                  return n ? n(t, !0) : t;
                },
                m = k({}, r(), v(e)),
                [h, g, y] = Ft(n),
                [b, w, x] = ((t, e) => {
                  const n = He(e, {}),
                    r = Re(bn),
                    [i, a, s] = Ft(),
                    [c, l] = r,
                    [u, d, f] = Xe(t),
                    p = ((t, e) => {
                      const { W: n, J: r, _t: i, ut: a } = t,
                        { I: s, A: c, V: l } = $e(),
                        u = !s && (c.x || c.y),
                        d = [Ue(t, e), Je(t, e), rn(t, e)];
                      return (t, e, s) => {
                        const c = an(
                            k(
                              {
                                vt: !1,
                                xt: !1,
                                yt: !1,
                                gt: !1,
                                At: !1,
                                Lt: !1,
                                It: !1,
                                Ot: !1,
                                wt: !1,
                              },
                              e
                            ),
                            {},
                            s
                          ),
                          f = u || !l,
                          p = f && V(r),
                          v = f && N(r);
                        i('', oe, !0);
                        let m = c;
                        return (
                          o(d, (e) => {
                            m = an(m, e(m, t, !!s) || {}, s);
                          }),
                          V(r, p),
                          N(r, v),
                          i('', oe),
                          a || (V(n, 0), N(n, 0)),
                          m
                        );
                      };
                    })(u, r),
                    v = (t, e, n) => {
                      const o = C(t).some((e) => t[e]),
                        r = o || !M(e) || n;
                      return r && s('u', [t, e, n]), r;
                    },
                    [m, h, g, y] = gn(u, l, (t) => v(p(n, t), {}, !1)),
                    b = c.bind(0);
                  return (
                    (b.jt = (t) => i('u', t)),
                    (b.Nt = () => {
                      const { W: t, J: e } = u,
                        n = V(t),
                        o = N(t);
                      h(), d(), V(e, n), N(e, o);
                    }),
                    (b.qt = u),
                    [
                      (t, n) => {
                        const o = He(e, t, n);
                        return y(o), v(p(o, g(), n), t, !!n);
                      },
                      b,
                      () => {
                        a(), m(), f();
                      },
                    ]
                  );
                })(t, m),
                [O, E, L] = ((t, e, n, o) => {
                  let r,
                    i,
                    a,
                    s,
                    c,
                    l = 0;
                  const u = Re({}),
                    [d] = u,
                    [f, p] = ht(),
                    [v, m] = ht(),
                    [h, g] = ht(100),
                    [y, b] = ht(100),
                    [w, x] = ht(() => l),
                    [O, E, L] = _n(
                      t,
                      n.qt,
                      ((t, e) => (n, o, r, i, a, s) => {
                        const { Xt: c } = n,
                          [l, u] = ht(333),
                          d = !!a.scrollBy;
                        let f = !0;
                        return T.bind(0, [
                          qt(c, 'pointerenter', () => {
                            o(we, !0);
                          }),
                          qt(c, 'pointerleave pointercancel', () => {
                            o(we);
                          }),
                          qt(
                            c,
                            'wheel',
                            (t) => {
                              const { deltaX: e, deltaY: n, deltaMode: r } = t;
                              d &&
                                f &&
                                0 === r &&
                                H(c) === i &&
                                a.scrollBy({
                                  left: e,
                                  top: n,
                                  behavior: 'smooth',
                                }),
                                (f = !1),
                                o(Ee, !0),
                                l(() => {
                                  (f = !0), o(Ee);
                                }),
                                Wt(t);
                            },
                            { S: !1, $: !0 }
                          ),
                          xn(c, r),
                          On(t, r, n, a, e, s),
                          u,
                        ]);
                      })(e, n)
                    ),
                    { Z: S, J: A, ot: _, st: C, ut: k, it: M } = n.qt,
                    { Jt: j, nn: D, Zt: P, Ut: $, Wt: I } = O,
                    { tn: q } = j,
                    { tn: B } = D,
                    W = (t) => {
                      const { Xt: e } = t,
                        n = k && !M && H(e) === A && e;
                      return [
                        n,
                        {
                          transform: n ? `translate(${V(_)}px, ${N(_)}px)` : '',
                        },
                      ];
                    },
                    R = (t, e) => {
                      if ((x(), t)) P(Oe);
                      else {
                        const t = () => P(Oe, !0);
                        l > 0 && !e ? w(t) : t();
                      }
                    },
                    z = () => {
                      (s = i), s && R(!0);
                    },
                    F = [
                      g,
                      x,
                      b,
                      m,
                      p,
                      L,
                      qt(S, 'pointerover', z, { C: !0 }),
                      qt(S, 'pointerenter', z),
                      qt(S, 'pointerleave', () => {
                        (s = !1), i && R(!1);
                      }),
                      qt(S, 'pointermove', () => {
                        r &&
                          f(() => {
                            g(),
                              R(!0),
                              y(() => {
                                r && R(!1);
                              });
                          });
                      }),
                      qt(C, 'scroll', (t) => {
                        v(() => {
                          I(n()),
                            a && R(!0),
                            h(() => {
                              a && !s && R(!1);
                            });
                        }),
                          o(t),
                          k && q(W),
                          k && B(W);
                      }),
                    ],
                    Y = d.bind(0);
                  return (
                    (Y.qt = O),
                    (Y.Nt = E),
                    [
                      (t, o, s) => {
                        const { At: u, Lt: d, It: f, yt: p } = s,
                          { A: v } = $e(),
                          m = He(e, t, o),
                          h = n(),
                          { Tt: g, Ct: y, bt: b } = h,
                          [w, x] = m('showNativeOverlaidScrollbars'),
                          [O, E] = m('scrollbars.theme'),
                          [L, S] = m('scrollbars.visibility'),
                          [A, T] = m('scrollbars.autoHide'),
                          [_] = m('scrollbars.autoHideDelay'),
                          [C, k] = m('scrollbars.dragScroll'),
                          [j, D] = m('scrollbars.clickScroll'),
                          V = u || d || p,
                          N = f || S,
                          q = w && v.x && v.y,
                          B = (t, e) => {
                            const n =
                              'visible' === L ||
                              ('auto' === L && 'scroll' === t);
                            return P(ge, n, e), n;
                          };
                        if (
                          ((l = _),
                          x && P('os-theme-none', q),
                          E && (P(c), P(O, !0), (c = O)),
                          T &&
                            ((r = 'move' === A),
                            (i = 'leave' === A),
                            (a = 'never' !== A),
                            R(!a, !0)),
                          k && P(Se, C),
                          D && P(Le, j),
                          N)
                        ) {
                          const t = B(y.x, !0),
                            e = B(y.y, !1);
                          P(ye, !(t && e));
                        }
                        V &&
                          ($(h),
                          I(h),
                          P(xe, !g.x, !0),
                          P(xe, !g.y, !1),
                          P(fe, b && !M));
                      },
                      Y,
                      T.bind(0, F),
                    ]
                  );
                })(t, m, w, (t) => y('scroll', [P, t])),
                S = (t, e) => b(t, !!e),
                A = S.bind(0, {}, !0),
                _ = a(A),
                j = s(A),
                D = (t) => {
                  ((t) => {
                    qe.delete(t);
                  })(f),
                    _(),
                    j(),
                    L(),
                    x(),
                    (p = !0),
                    y('destroyed', [P, !!t]),
                    g();
                },
                P = {
                  options(t, e) {
                    if (t) {
                      const n = e ? r() : {},
                        o = Ut(m, k(n, v(t)));
                      M(o) || (k(m, o), S(o));
                    }
                    return k({}, m);
                  },
                  on: h,
                  off: (t, e) => {
                    t && e && g(t, e);
                  },
                  state() {
                    const {
                      zt: t,
                      Tt: e,
                      Ct: n,
                      Et: o,
                      K: r,
                      St: i,
                      bt: a,
                    } = w();
                    return k(
                      {},
                      {
                        overflowEdge: t,
                        overflowAmount: e,
                        overflowStyle: n,
                        hasOverflow: o,
                        padding: r,
                        paddingAbsolute: i,
                        directionRTL: a,
                        destroyed: p,
                      }
                    );
                  },
                  elements() {
                    const {
                        W: t,
                        Z: e,
                        K: n,
                        J: o,
                        tt: r,
                        ot: i,
                        st: a,
                      } = w.qt,
                      { Jt: s, nn: c } = E.qt,
                      l = (t) => {
                        const { Ft: e, Gt: n, Xt: o } = t;
                        return { scrollbar: o, track: n, handle: e };
                      },
                      u = (t) => {
                        const { Kt: e, Qt: n } = t,
                          o = l(e[0]);
                        return k({}, o, {
                          clone: () => {
                            const t = l(n());
                            return O({}, !0, {}), t;
                          },
                        });
                      };
                    return k(
                      {},
                      {
                        target: t,
                        host: e,
                        padding: n || o,
                        viewport: o,
                        content: r || o,
                        scrollOffsetElement: i,
                        scrollEventElement: a,
                        scrollbarHorizontal: u(s),
                        scrollbarVertical: u(c),
                      }
                    );
                  },
                  update: (t) => S({}, t),
                  destroy: D.bind(0),
                };
              return (
                w.jt((t, e, n) => {
                  O(e, n, t);
                }),
                ((t, e) => {
                  qe.set(t, e);
                })(f, P),
                o(C(c), (t) => Cn(c[t], 0, P)),
                ((t, e, n) => {
                  const { nativeScrollbarsOverlaid: o, body: r } = n || {},
                    { A: i, I: a } = $e(),
                    { nativeScrollbarsOverlaid: s, body: c } = e,
                    l = null != o ? o : s,
                    f = u(r) ? c : r,
                    p = (i.x || i.y) && l,
                    v = t && (d(f) ? !a : f);
                  return !!p || !!v;
                })(w.qt.it, i().cancel, !l && t.cancel)
                  ? (D(!0), P)
                  : (w.Nt(),
                    E.Nt(),
                    y('initialized', [P]),
                    w.jt((t, e, n) => {
                      const {
                        vt: o,
                        yt: r,
                        gt: i,
                        At: a,
                        Lt: s,
                        It: c,
                        wt: l,
                        Ot: u,
                      } = t;
                      y('updated', [
                        P,
                        {
                          updateHints: {
                            sizeChanged: o,
                            directionChanged: r,
                            heightIntrinsicChanged: i,
                            overflowEdgeChanged: a,
                            overflowAmountChanged: s,
                            overflowStyleChanged: c,
                            contentMutation: l,
                            hostMutation: u,
                          },
                          changedOptions: e,
                          force: n,
                        },
                      ]);
                    }),
                    P.update(!0),
                    P)
              );
            }
            return p;
          };
        (kn.plugin = (t) => {
          o(
            ((t) => {
              const e = [];
              return (
                o(g(t) ? t : [t], (t) => {
                  o(C(t), (n) => {
                    L(e, (Ae[n] = t[n]));
                  });
                }),
                e
              );
            })(t),
            (t) => Cn(t, kn)
          );
        }),
          (kn.valid = (t) => {
            const e = t && t.elements,
              n = h(e) && e();
            return w(n) && !!Be(n.target);
          }),
          (kn.env = () => {
            const {
              k: t,
              A: e,
              I: n,
              B: o,
              V: r,
              L: i,
              X: a,
              U: s,
              N: c,
              q: l,
              F: u,
              G: d,
            } = $e();
            return k(
              {},
              {
                scrollbarsSize: t,
                scrollbarsOverlaid: e,
                scrollbarsHiding: n,
                rtlScrollBehavior: o,
                flexboxGlue: r,
                cssCustomProperties: i,
                staticDefaultInitialization: a,
                staticDefaultOptions: s,
                getDefaultInitialization: c,
                setDefaultInitialization: l,
                getDefaultOptions: u,
                setDefaultOptions: d,
              }
            );
          });
        const Mn = n(4783),
          jn = n(3180);
        Mn(function () {
          console.log('main-nav.js'),
            setTimeout(() => {
              var t = 'main-nav__item--show-child',
                e = new RegExp('main-nav__link');
              document.addEventListener(
                'focus',
                function (n) {
                  var o = jn(n.target, '.main-nav__link');
                  if (
                    o.length > 0 &&
                    e.test(o.className) &&
                    jn(n.target, '.nav--main').length > 0
                  )
                    for (
                      var r = jn(n.target, '.main-nav__item'), i = 0;
                      i < r.length;
                      i++
                    )
                      r[i].classList.add(t);
                },
                !0
              ),
                document.addEventListener(
                  'blur',
                  function (n) {
                    var o = jn(n.target, '.main-nav__link');
                    if (e.test(o.className))
                      for (
                        var r = document.querySelectorAll('.' + t), i = 0;
                        i < r.length;
                        i++
                      )
                        r[i].classList.remove(t);
                  },
                  !0
                ),
                document
                  .querySelector('.nav--mobile')
                  .addEventListener('click', function (t) {
                    console.log('navMobile click'), console.log(t.target);
                    var e = jn(t.target, '.main-nav__link');
                    if (
                      e.length > 0 &&
                      e[0].classList.contains('main-nav__link') &&
                      (console.log(e),
                      console.log(
                        e[0].classList.contains('main-nav__link--lvl-2')
                      ),
                      !e[0].classList.contains('main-nav__link--lvl-2'))
                    ) {
                      var n = jn(t.target, '.main-nav__item--has-child');
                      n.length > 0 &&
                        (console.log('parents'),
                        console.log(n),
                        t.preventDefault(),
                        n[0].classList.toggle('main-nav__item--show-child'));
                    }
                  });
              var n = document.querySelector(
                '#nav-mobile .main-nav__inner > .main-nav__list'
              );
              n && kn(n, {});
              var o = document.querySelector(
                '#nav-mobile .main-nav__sublist-wrapper--lvl-2'
              );
              o && kn(o, {});
            }, 0);
        });
      },
      8105: function (t, e, n) {
        n(4783)(function () {
          window.addEventListener('scroll', function () {
            var t = document.getElementsByClassName('.scroll-btn')[0];
            t && (t.style.display = 'none');
          });
        });
      },
      802: function (t, e, n) {
        const o = n(4783),
          r = n(3180),
          i = n(953);
        var a = n(3096);
        o(function() {

  const INPUT_SELECTOR = '.search-form__input';
  const searchForm = document.getElementsByClassName('search-form')[0];

  if (searchForm.navMobileOpen) {
    mobileSearchOpen(searchForm);
  }

  //  Открыть поиск
  let btnSearch = document.getElementById('btnSearch');
  btnSearch.addEventListener('click', function(event) {
    let searchForm = r(this, '.search-form');
    if (searchForm.length > 0) {
      if (searchForm[0].navMobileOpen) {
        return;
      }
      if (searchForm[0].classList.contains('active')) {
        mobileSearchClose(searchForm[0]);
        searchForm[0].classList.remove('active');
      } else {
        mobileSearchOpen(searchForm[0]);
        searchForm[0].classList.add('active');
        searchForm[0].querySelector(INPUT_SELECTOR).focus();
      }
    }
    event.stopPropagation();
  });

  // Закрыть поиск по клику вне формы
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('search-form')) {
      if (event.target.classList.contains('active')) {
        return;
      }
    } else {
      let parent = r(event.target, '.search-form');
      if (parent.length > 0) {
        if (parent[0].classList.contains('active')) {
          return;
        }
      } else if (searchForm.navMobileOpen) {
        return;
      };
    }
    // клик не внутри формы поиска
    closeSearchForms();
  });


  document.addEventListener('keydown', function(event) {
    if (event.code === 'Escape') {
      closeSearchForms();
    }
  })

  function closeSearchForms() {
    let searchForms = document.querySelectorAll('.search-form');
    if (document.documentElement.clientWidth < 1024) {
      for (form of searchForms) {
        mobileSearchClose(form);
      }
    } else {
      for (form of searchForms) {
        form.classList.remove('active');
      }
    }
  }


  var searchForms = document.querySelectorAll('.search-form');

  var screenPrev = document.documentElement.clientWidth;

  function onResize() {
    var screenNext = document.documentElement.clientWidth;
    if (screenPrev != screenNext) {
      for (var form of searchForms) {
        mobileSearchClose(form);
      }
    }
    screenPrev = screenNext;
  }

  window.addEventListener('resize', a(onResize, 200));


});
  var mobileSearchOpened = false;


  var mobileSearchOpen = function(searchFormEl) {
    var screenWidth = document.documentElement.clientWidth;
    var widthDelta = 0;
    if (searchFormEl.navMobileOpen) {
      widthDelta = 50;
    }

    if (screenWidth < 1024) {
      var offsetLeft = i(searchFormEl)[0];
      var closeBtn = document.getElementsByClassName('off-canvas__toggler')[0];
      var offsetCloseBtn = i(closeBtn)[0];
      console.log(screenWidth);
      console.log(offsetCloseBtn);
      var inputWrapper = searchFormEl.querySelector('.search-form__input-wrapper');
      searchFormEl.style.transform = `translateX(${offsetCloseBtn - offsetLeft}px)`;
      inputWrapper.style.width = offsetCloseBtn + 'px';
      inputWrapper.style.maxWidth = offsetCloseBtn + 'px';
      searchFormEl.classList.add('active');
      mobileSearchOpened = true;
    }
  }

  function mobileSearchClose(searchFormEl) {
    searchFormEl.style.transform = 'none';
    var inputWrapper = searchFormEl.querySelector('.search-form__input-wrapper');
    if (mobileSearchOpened) {
      inputWrapper.addEventListener('transitionend', function(event) {
        inputWrapper.style.width = '';
      }, { once: true });
    }
    inputWrapper.style.maxWidth = '';
    searchFormEl.classList.remove('active');
    mobileSearchOpened = false;
  }
  (e.mobileSearchOpen = mobileSearchOpen), (e.mobileSearchClose = mobileSearchClose);


      },
      6264: function (t, e, n) {
        const o = n(4783);
        n(6178),
          o(function () {
            if (document.querySelector('.video-yt')) {
              var t = !1,
                e = [];
              function n(n) {
                return function (o) {
                  if ((console.log('btnGoClick function'), t)) {
                    console.log('ytApiInserted');
                    var r = o.target
                        .closest('.video-yt')
                        .querySelector('.video-yt__frame'),
                      i = o.target
                        .closest('.video-yt')
                        .querySelector('.video-yt__poster');
                    e[n].getPlayerState() == YT.PlayerState.PLAYING
                      ? (e[n].stopVideo(),
                        i.classList.remove('video-yt__poster--hidden'),
                        r.classList.add('video-hidden'))
                      : (r.classList.remove('video-hidden'),
                        i.classList.add('video-yt__poster--hidden'),
                        e[n].playVideo());
                  } else {
                    console.log('!ytApiInserted');
                    var a = document.createElement('script');
                    (a.id = 'iframe-demo'),
                      (a.src = 'https://www.youtube.com/iframe_api');
                    var s = document.getElementsByTagName('script')[0];
                    s.parentNode.insertBefore(a, s), (t = !0);
                    var c = o.target.closest('.video-yt');
                    (firstVideoIndexClicked = c),
                      console.log('firstVideoIndexClicked = '),
                      console.log(firstVideoIndexClicked);
                  }
                };
              }
              var o = document.querySelectorAll('.video-yt');
              for (let a = 0; a < o.length; a++) {
                console.log(o[a]);
                var r = o[a].querySelector('.btn-play'),
                  i = o[a].querySelector('.video-yt__frame');
                i &&
                  r &&
                  ((i.dataset.index = a), r.addEventListener('click', n(a))),
                  i &&
                    i.addEventListener('custom-stop-video', function (t) {
                      e &&
                        e[this.dataset.index] &&
                        e[this.dataset.index].stopVideo();
                    });
              }
              (window.onPlayerReady = function (t) {
                if (
                  (console.log('onPlayerReady'),
                  console.log(t.target),
                  firstVideoIndexClicked)
                ) {
                  var e =
                    firstVideoIndexClicked.querySelector('.video-yt__frame');
                  if (e && e.dataset.index == t.target.g.dataset.index) {
                    console.log('go');
                    var n = firstVideoIndexClicked.querySelector('.btn-play');
                    n && n.click(), (firstVideoIndexClicked = null);
                  }
                }
              }),
                (window.onPlayerStateChange = function (t) {
                  console.log('onPlayerStateChange'), console.log(t.target);
                  var n = t.target.g.closest('.video-yt'),
                    o = n.querySelector('.video-yt__frame'),
                    r = n.querySelector('.video-yt__poster'),
                    i = o.dataset.index;
                  t.data == YT.PlayerState.ENDED
                    ? (e[i].stopVideo(),
                      r.classList.remove('video-yt__poster--hidden'),
                      o.classList.add('video-hidden'))
                    : (t.data != YT.PlayerState.PLAYING &&
                        t.data != YT.PlayerState.BUFFERING) ||
                      (o.classList.remove('video-hidden'),
                      r.classList.add('video-yt__poster--hidden'),
                      e[i].playVideo());
                }),
                (window.onYouTubeIframeAPIReady = function () {
                  console.log('onYouTubeIframeAPIReady');
                  for (
                    var t = document.querySelectorAll('.video-yt__frame'),
                      n = 0;
                    n < t.length;
                    n++
                  ) {
                    var o = {
                      events: {
                        onReady: onPlayerReady,
                        onStateChange: onPlayerStateChange,
                      },
                    };
                    e[n] = new YT.Player(t[n], o);
                  }
                  console.log(e);
                });
            }
          });
      },
      6229: function (t, e, n) {
        const o = n(4783),
          r = n(4148),
          i = n(6178);
        o(function () {
          var t = document.querySelectorAll('.video__btn-play');
          for (btn of t)
            btn.addEventListener('click', function (t) {
              t.preventDefault();
              var e = i(this, '.video');
              e.classList.contains('playing')
                ? r.pauseVideo(e.querySelector('video'))
                : (console.log('play'),
                  console.log(e.querySelector('video')),
                  r.playVideo(e.querySelector('video')));
            });
          var e = document.querySelectorAll('.video video');
          for (video of e) r.addEvents(video);
        });
      },
      17: function (t, e, n) {
        const o = n(4783),
          r = n(9828),
          i = n(3096);
        function a() {
          document.documentElement.clientHeight < 750
            ? document.documentElement.classList.add('screen-low')
            : document.documentElement.classList.remove('screen-low');
        }
        o(function () {
          console.log('script.js'), r('.add-info__text.ellipsis');
          var t = document.querySelectorAll('script[data-src]');
          for (script of t)
            console.log(script.getAttribute('data-src')),
              script.setAttribute('src', script.getAttribute('data-src'));
          document.addEventListener(
            'touchstart',
            function t() {
              console.log('touch start'),
                document.documentElement.classList.remove('no-touch'),
                document.documentElement.classList.add('touch'),
                document.removeEventListener('touchstart', t, !1);
            },
            !1
          ),
            a(),
            (window.onresize = i(a, 500));
        });
      },
      4783: function (t) {
        t.exports = function (t) {
          (
            document.attachEvent
              ? 'complete' === document.readyState
              : 'loading' !== document.readyState
          )
            ? t()
            : document.addEventListener('DOMContentLoaded', t);
        };
      },
      9828: function (t) {
        var e = function (t) {
            if (
              document.documentElement.clientWidth >= 1024 &&
              t.dataset.lgLines
            )
              lines = t.dataset.lgLines;
            else if (((lines = t.dataset.lines), !lines)) {
              var e = n(t),
                o = t.clientHeight;
              lines = parseInt(o / e);
            }
            return lines;
          },
          n = function (t) {
            var e = window.getComputedStyle(t)['line-height'];
            return 'normal' === e
              ? 1.16 * parseFloat(window.getComputedStyle(r)['font-size'])
              : parseFloat(e);
          },
          o = function (t) {
            return (
              t.clientHeight -
              parseFloat(window.getComputedStyle(t)['padding-top']) -
              parseFloat(window.getComputedStyle(t)['padding-bottom'])
            );
          },
          r = function (t, e) {
            for (
              var r = t.innerHTML.split(' '), i = e * n(t), a = o(t);
              a > i && r.length > 0;

            )
              r.pop(), (t.innerHTML = r.join(' ') + '...'), (a = o(t));
          };
        t.exports = function (t) {
          var n;
          if (
            (console.log('makeEllipsis'),
            console.log(t),
            'string' == typeof t
              ? (n = document.querySelectorAll(t))
              : 'object' == typeof t && (n = [t]),
            console.log('ellipsisEls'),
            console.log(n),
            n)
          )
            for (var o of n) {
              var i = e(o);
              console.log(i), i && r(o, i);
            }
        };
      },
      953: function (t) {
        t.exports = function (t) {
          if (!t) return;
          let e = (curTop = 0);
          if (t.offsetParent)
            do {
              console.log(t), (e += t.offsetLeft), (curTop += t.offsetTop);
            } while (t.offsetParent && (t = t.offsetParent));
          return [e, curTop];
        };
      },
      3180: function (t) {
        t.exports = function (t, e) {
          Element.prototype.matches ||
            (Element.prototype.matches =
              Element.prototype.matchesSelector ||
              Element.prototype.mozMatchesSelector ||
              Element.prototype.msMatchesSelector ||
              Element.prototype.oMatchesSelector ||
              Element.prototype.webkitMatchesSelector ||
              function (t) {
                for (
                  var e = (
                      this.document || this.ownerDocument
                    ).querySelectorAll(t),
                    n = e.length;
                  --n >= 0 && e.item(n) !== this;

                );
                return n > -1;
              });
          for (var n = []; t && t !== document; t = t.parentNode)
            e ? t.matches(e) && n.push(t) : n.push(t);
          return n;
        };
      },
      4148: function (t, e, n) {
        var o = n(6178),
          r = {
            playVideo: function (t) {
              console.log('playVideo'),
                console.log(t),
                t.play(),
                t.setAttribute('controls', !0);
            },
            pauseVideo: function (t) {
              t.pause(), (t.controls = !1);
            },
          },
          i = function (t) {
            console.log('onPlay'), o(t, '.video', !0).classList.add('playing');
          };
        r.onPlay = i;
        var a = function (t) {
          o(t, '.video', !0).classList.remove('playing'), (t.controls = !1);
        };
        r.onStop = a;
        var s = function (t) {
          o(t, '.video', !0).classList.remove('playing'), (t.controls = !1);
        };
        (r.onEnded = s),
          (r.addEvents = function (t) {
            t.addEventListener('pause', function () {
              a(t);
            }),
              t.addEventListener('ended', function () {
                s(t);
              }),
              t.addEventListener('play', function () {
                i(t);
              }),
              t.addEventListener('playing', function () {
                i(t);
              });
          }),
          (t.exports = r);
      },
      6178: function (t, e, n) {
        var o = n(2670);
        t.exports = function (t, e, n) {
          for (var r = n ? t : t.parentNode; r && r !== document; ) {
            if (o(r, e)) return r;
            r = r.parentNode;
          }
        };
      },
      3096: function (t, e, n) {
        var o = 'Expected a function',
          r = /^\s+|\s+$/g,
          i = /^[-+]0x[0-9a-f]+$/i,
          a = /^0b[01]+$/i,
          s = /^0o[0-7]+$/i,
          c = parseInt,
          l = 'object' == typeof n.g && n.g && n.g.Object === Object && n.g,
          u = 'object' == typeof self && self && self.Object === Object && self,
          d = l || u || Function('return this')(),
          f = Object.prototype.toString,
          p = Math.max,
          v = Math.min,
          m = function () {
            return d.Date.now();
          };
        function h(t) {
          var e = typeof t;
          return !!t && ('object' == e || 'function' == e);
        }
        function g(t) {
          if ('number' == typeof t) return t;
          if (
            (function (t) {
              return (
                'symbol' == typeof t ||
                ((function (t) {
                  return !!t && 'object' == typeof t;
                })(t) &&
                  '[object Symbol]' == f.call(t))
              );
            })(t)
          )
            return NaN;
          if (h(t)) {
            var e = 'function' == typeof t.valueOf ? t.valueOf() : t;
            t = h(e) ? e + '' : e;
          }
          if ('string' != typeof t) return 0 === t ? t : +t;
          t = t.replace(r, '');
          var n = a.test(t);
          return n || s.test(t)
            ? c(t.slice(2), n ? 2 : 8)
            : i.test(t)
            ? NaN
            : +t;
        }
        t.exports = function (t, e, n) {
          var r = !0,
            i = !0;
          if ('function' != typeof t) throw new TypeError(o);
          return (
            h(n) &&
              ((r = 'leading' in n ? !!n.leading : r),
              (i = 'trailing' in n ? !!n.trailing : i)),
            (function (t, e, n) {
              var r,
                i,
                a,
                s,
                c,
                l,
                u = 0,
                d = !1,
                f = !1,
                y = !0;
              if ('function' != typeof t) throw new TypeError(o);
              function b(e) {
                var n = r,
                  o = i;
                return (r = i = void 0), (u = e), (s = t.apply(o, n));
              }
              function w(t) {
                return (u = t), (c = setTimeout(O, e)), d ? b(t) : s;
              }
              function x(t) {
                var n = t - l;
                return void 0 === l || n >= e || n < 0 || (f && t - u >= a);
              }
              function O() {
                var t = m();
                if (x(t)) return E(t);
                c = setTimeout(
                  O,
                  (function (t) {
                    var n = e - (t - l);
                    return f ? v(n, a - (t - u)) : n;
                  })(t)
                );
              }
              function E(t) {
                return (c = void 0), y && r ? b(t) : ((r = i = void 0), s);
              }
              function L() {
                var t = m(),
                  n = x(t);
                if (((r = arguments), (i = this), (l = t), n)) {
                  if (void 0 === c) return w(l);
                  if (f) return (c = setTimeout(O, e)), b(l);
                }
                return void 0 === c && (c = setTimeout(O, e)), s;
              }
              return (
                (e = g(e) || 0),
                h(n) &&
                  ((d = !!n.leading),
                  (a = (f = 'maxWait' in n) ? p(g(n.maxWait) || 0, e) : a),
                  (y = 'trailing' in n ? !!n.trailing : y)),
                (L.cancel = function () {
                  void 0 !== c && clearTimeout(c),
                    (u = 0),
                    (r = l = i = c = void 0);
                }),
                (L.flush = function () {
                  return void 0 === c ? s : E(m());
                }),
                L
              );
            })(t, e, { leading: r, maxWait: e, trailing: i })
          );
        };
      },
      2670: function (t) {
        var e = Element.prototype,
          n =
            e.matchesSelector ||
            e.webkitMatchesSelector ||
            e.mozMatchesSelector ||
            e.msMatchesSelector ||
            e.oMatchesSelector;
        t.exports = function (t, e) {
          if (n) return n.call(t, e);
          for (
            var o = t.parentNode.querySelectorAll(e), r = 0;
            r < o.length;
            ++r
          )
            if (o[r] == t) return !0;
          return !1;
        };
      },
    },
    e = {};
  function n(o) {
    var r = e[o];
    if (void 0 !== r) return r.exports;
    var i = (e[o] = { exports: {} });
    return t[o](i, i.exports, n), i.exports;
  }
  (n.g = (function () {
    if ('object' == typeof globalThis) return globalThis;
    try {
      return this || new Function('return this')();
    } catch (t) {
      if ('object' == typeof window) return window;
    }
  })()),
    (n.r = function (t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    n(1469),
    n(5154),
    n(802),
    n(2897),
    n(6264),
    n(17),
    n(3630),
    n(651),
    n(6229),
    n(4761),
    n(8105);
})();
