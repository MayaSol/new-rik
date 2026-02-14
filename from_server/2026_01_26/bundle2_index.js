/*! For license information please see bundle2_others.js.LICENSE.txt */
!(function () {
  var t = {
      8061: function (t) {
        t.exports = { mode: 'development' };
      },
      8585: function (t, e, n) {
        const i = n(4783),
          o = n(3863);
        i(function () {
          var t = document.querySelectorAll('.navbar-collapse');
          for (collapsed of t)
            console.log(collapsed),
              collapsed.addEventListener('show.bs.collapse', function () {
                let t = document.querySelectorAll('.navbar-collapse.show');
                for (other of t)
                  other != this && o.getOrCreateInstance(other).hide();
              });
        });
      },
      1929: function (t, e, n) {
        const i = n(4783);
        n(6178),
          n(3863),
          i(function () {
            var t = document.querySelectorAll('.question__collapse');
            for (var e of t)
              e.addEventListener('show.bs.collapse', function () {
                this.closest('.question__item-wrapper').classList.add(
                  'question__item-wrapper--open'
                );
              }),
                e.addEventListener('hide.bs.collapse', function () {
                  var t = this.closest('.question__item-wrapper');
                  t && t.classList.remove('question__item-wrapper--open');
                });
          });
      },
      5179: function (t, e, n) {
        'use strict';
        n.r(e);
        var i = window,
          o =
            i.requestAnimationFrame ||
            i.webkitRequestAnimationFrame ||
            i.mozRequestAnimationFrame ||
            i.msRequestAnimationFrame ||
            function (t) {
              return setTimeout(t, 16);
            },
          r = window,
          a =
            r.cancelAnimationFrame ||
            r.mozCancelAnimationFrame ||
            function (t) {
              clearTimeout(t);
            };
        function s() {
          for (
            var t, e, n, i = arguments[0] || {}, o = 1, r = arguments.length;
            o < r;
            o++
          )
            if (null !== (t = arguments[o]))
              for (e in t) i !== (n = t[e]) && void 0 !== n && (i[e] = n);
          return i;
        }
        function l(t) {
          return ['true', 'false'].indexOf(t) >= 0 ? JSON.parse(t) : t;
        }
        function u(t, e, n, i) {
          if (i)
            try {
              t.setItem(e, n);
            } catch (t) {}
          return n;
        }
        function c() {
          var t = document,
            e = t.body;
          return e || ((e = t.createElement('body')).fake = !0), e;
        }
        var d = document.documentElement;
        function f(t) {
          var e = '';
          return (
            t.fake &&
              ((e = d.style.overflow),
              (t.style.background = ''),
              (t.style.overflow = d.style.overflow = 'hidden'),
              d.appendChild(t)),
            e
          );
        }
        function h(t, e) {
          t.fake && (t.remove(), (d.style.overflow = e), d.offsetHeight);
        }
        function p(t, e, n, i) {
          'insertRule' in t
            ? t.insertRule(e + '{' + n + '}', i)
            : t.addRule(e, n, i);
        }
        function g(t) {
          return ('insertRule' in t ? t.cssRules : t.rules).length;
        }
        function m(t, e, n) {
          for (var i = 0, o = t.length; i < o; i++) e.call(n, t[i], i);
        }
        var v = 'classList' in document.createElement('_'),
          y = v
            ? function (t, e) {
                return t.classList.contains(e);
              }
            : function (t, e) {
                return t.className.indexOf(e) >= 0;
              },
          b = v
            ? function (t, e) {
                y(t, e) || t.classList.add(e);
              }
            : function (t, e) {
                y(t, e) || (t.className += ' ' + e);
              },
          w = v
            ? function (t, e) {
                y(t, e) && t.classList.remove(e);
              }
            : function (t, e) {
                y(t, e) && (t.className = t.className.replace(e, ''));
              };
        function _(t, e) {
          return t.hasAttribute(e);
        }
        function x(t, e) {
          return t.getAttribute(e);
        }
        function E(t) {
          return void 0 !== t.item;
        }
        function C(t, e) {
          if (
            ((t = E(t) || t instanceof Array ? t : [t]),
            '[object Object]' === Object.prototype.toString.call(e))
          )
            for (var n = t.length; n--; )
              for (var i in e) t[n].setAttribute(i, e[i]);
        }
        function A(t, e) {
          t = E(t) || t instanceof Array ? t : [t];
          for (
            var n = (e = e instanceof Array ? e : [e]).length, i = t.length;
            i--;

          )
            for (var o = n; o--; ) t[i].removeAttribute(e[o]);
        }
        function T(t) {
          for (var e = [], n = 0, i = t.length; n < i; n++) e.push(t[n]);
          return e;
        }
        function S(t, e) {
          'none' !== t.style.display && (t.style.display = 'none');
        }
        function M(t, e) {
          'none' === t.style.display && (t.style.display = '');
        }
        function L(t) {
          return 'none' !== window.getComputedStyle(t).display;
        }
        function D(t) {
          if ('string' == typeof t) {
            var e = [t],
              n = t.charAt(0).toUpperCase() + t.substr(1);
            ['Webkit', 'Moz', 'ms', 'O'].forEach(function (i) {
              ('ms' === i && 'transform' !== t) || e.push(i + n);
            }),
              (t = e);
          }
          for (
            var i = document.createElement('fakeelement'), o = (t.length, 0);
            o < t.length;
            o++
          ) {
            var r = t[o];
            if (void 0 !== i.style[r]) return r;
          }
          return !1;
        }
        function N(t, e) {
          var n = !1;
          return (
            /^Webkit/.test(t)
              ? (n = 'webkit' + e + 'End')
              : /^O/.test(t)
              ? (n = 'o' + e + 'End')
              : t && (n = e.toLowerCase() + 'end'),
            n
          );
        }
        var O = !1;
        try {
          var I = Object.defineProperty({}, 'passive', {
            get: function () {
              O = !0;
            },
          });
          window.addEventListener('test', null, I);
        } catch (t) {}
        var k = !!O && { passive: !0 };
        function B(t, e, n) {
          for (var i in e) {
            var o = ['touchstart', 'touchmove'].indexOf(i) >= 0 && !n && k;
            t.addEventListener(i, e[i], o);
          }
        }
        function q(t, e) {
          for (var n in e) {
            var i = ['touchstart', 'touchmove'].indexOf(n) >= 0 && k;
            t.removeEventListener(n, e[n], i);
          }
        }
        function P() {
          return {
            topics: {},
            on: function (t, e) {
              (this.topics[t] = this.topics[t] || []), this.topics[t].push(e);
            },
            off: function (t, e) {
              if (this.topics[t])
                for (var n = 0; n < this.topics[t].length; n++)
                  if (this.topics[t][n] === e) {
                    this.topics[t].splice(n, 1);
                    break;
                  }
            },
            emit: function (t, e) {
              (e.type = t),
                this.topics[t] &&
                  this.topics[t].forEach(function (n) {
                    n(e, t);
                  });
            },
          };
        }
        Object.keys ||
          (Object.keys = function (t) {
            var e = [];
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
            return e;
          }),
          'remove' in Element.prototype ||
            (Element.prototype.remove = function () {
              this.parentNode && this.parentNode.removeChild(this);
            });
        var j = function (t) {
          t = s(
            {
              container: '.slider',
              mode: 'carousel',
              axis: 'horizontal',
              items: 1,
              gutter: 0,
              edgePadding: 0,
              fixedWidth: !1,
              autoWidth: !1,
              viewportMax: !1,
              slideBy: 1,
              center: !1,
              controls: !0,
              controlsPosition: 'top',
              controlsText: ['prev', 'next'],
              controlsContainer: !1,
              prevButton: !1,
              nextButton: !1,
              nav: !0,
              navPosition: 'top',
              navContainer: !1,
              navAsThumbnails: !1,
              arrowKeys: !1,
              speed: 300,
              autoplay: !1,
              autoplayPosition: 'top',
              autoplayTimeout: 5e3,
              autoplayDirection: 'forward',
              autoplayText: ['start', 'stop'],
              autoplayHoverPause: !1,
              autoplayButton: !1,
              autoplayButtonOutput: !0,
              autoplayResetOnVisibility: !0,
              animateIn: 'tns-fadeIn',
              animateOut: 'tns-fadeOut',
              animateNormal: 'tns-normal',
              animateDelay: !1,
              loop: !0,
              rewind: !1,
              autoHeight: !1,
              responsive: !1,
              lazyload: !1,
              lazyloadSelector: '.tns-lazy-img',
              touch: !0,
              mouseDrag: !1,
              swipeAngle: 15,
              nested: !1,
              preventActionWhenRunning: !1,
              preventScrollOnTouch: !1,
              freezable: !0,
              onInit: !1,
              useLocalStorage: !0,
              nonce: !1,
            },
            t || {}
          );
          var e = document,
            n = window,
            i = { ENTER: 13, SPACE: 32, LEFT: 37, RIGHT: 39 },
            r = {},
            d = t.useLocalStorage;
          if (d) {
            var v = navigator.userAgent,
              E = new Date();
            try {
              (r = n.localStorage)
                ? (r.setItem(E, E), (d = r.getItem(E) == E), r.removeItem(E))
                : (d = !1),
                d || (r = {});
            } catch (t) {
              d = !1;
            }
            d &&
              (r.tnsApp &&
                r.tnsApp !== v &&
                [
                  'tC',
                  'tPL',
                  'tMQ',
                  'tTf',
                  't3D',
                  'tTDu',
                  'tTDe',
                  'tADu',
                  'tADe',
                  'tTE',
                  'tAE',
                ].forEach(function (t) {
                  r.removeItem(t);
                }),
              (localStorage.tnsApp = v));
          }
          var O = r.tC
              ? l(r.tC)
              : u(
                  r,
                  'tC',
                  (function () {
                    var t = document,
                      e = c(),
                      n = f(e),
                      i = t.createElement('div'),
                      o = !1;
                    e.appendChild(i);
                    try {
                      for (
                        var r,
                          a = '(10px * 10)',
                          s = ['calc' + a, '-moz-calc' + a, '-webkit-calc' + a],
                          l = 0;
                        l < 3;
                        l++
                      )
                        if (
                          ((r = s[l]),
                          (i.style.width = r),
                          100 === i.offsetWidth)
                        ) {
                          o = r.replace(a, '');
                          break;
                        }
                    } catch (t) {}
                    return e.fake ? h(e, n) : i.remove(), o;
                  })(),
                  d
                ),
            I = r.tPL
              ? l(r.tPL)
              : u(
                  r,
                  'tPL',
                  (function () {
                    var t,
                      e = document,
                      n = c(),
                      i = f(n),
                      o = e.createElement('div'),
                      r = e.createElement('div'),
                      a = '';
                    (o.className = 'tns-t-subp2'), (r.className = 'tns-t-ct');
                    for (var s = 0; s < 70; s++) a += '<div></div>';
                    return (
                      (r.innerHTML = a),
                      o.appendChild(r),
                      n.appendChild(o),
                      (t =
                        Math.abs(
                          o.getBoundingClientRect().left -
                            r.children[67].getBoundingClientRect().left
                        ) < 2),
                      n.fake ? h(n, i) : o.remove(),
                      t
                    );
                  })(),
                  d
                ),
            k = r.tMQ
              ? l(r.tMQ)
              : u(
                  r,
                  'tMQ',
                  (function () {
                    if (window.matchMedia || window.msMatchMedia) return !0;
                    var t,
                      e = document,
                      n = c(),
                      i = f(n),
                      o = e.createElement('div'),
                      r = e.createElement('style'),
                      a =
                        '@media all and (min-width:1px){.tns-mq-test{position:absolute}}';
                    return (
                      (r.type = 'text/css'),
                      (o.className = 'tns-mq-test'),
                      n.appendChild(r),
                      n.appendChild(o),
                      r.styleSheet
                        ? (r.styleSheet.cssText = a)
                        : r.appendChild(e.createTextNode(a)),
                      (t = window.getComputedStyle
                        ? window.getComputedStyle(o).position
                        : o.currentStyle.position),
                      n.fake ? h(n, i) : o.remove(),
                      'absolute' === t
                    );
                  })(),
                  d
                ),
            R = r.tTf ? l(r.tTf) : u(r, 'tTf', D('transform'), d),
            H = r.t3D
              ? l(r.t3D)
              : u(
                  r,
                  't3D',
                  (function (t) {
                    if (!t) return !1;
                    if (!window.getComputedStyle) return !1;
                    var e,
                      n = document,
                      i = c(),
                      o = f(i),
                      r = n.createElement('p'),
                      a =
                        t.length > 9
                          ? '-' + t.slice(0, -9).toLowerCase() + '-'
                          : '';
                    return (
                      (a += 'transform'),
                      i.insertBefore(r, null),
                      (r.style[t] = 'translate3d(1px,1px,1px)'),
                      (e = window.getComputedStyle(r).getPropertyValue(a)),
                      i.fake ? h(i, o) : r.remove(),
                      void 0 !== e && e.length > 0 && 'none' !== e
                    );
                  })(R),
                  d
                ),
            F = r.tTDu ? l(r.tTDu) : u(r, 'tTDu', D('transitionDuration'), d),
            z = r.tTDe ? l(r.tTDe) : u(r, 'tTDe', D('transitionDelay'), d),
            W = r.tADu ? l(r.tADu) : u(r, 'tADu', D('animationDuration'), d),
            $ = r.tADe ? l(r.tADe) : u(r, 'tADe', D('animationDelay'), d),
            V = r.tTE ? l(r.tTE) : u(r, 'tTE', N(F, 'Transition'), d),
            Y = r.tAE ? l(r.tAE) : u(r, 'tAE', N(W, 'Animation'), d),
            Q = n.console && 'function' == typeof n.console.warn,
            K = [
              'container',
              'controlsContainer',
              'prevButton',
              'nextButton',
              'navContainer',
              'autoplayButton',
            ],
            U = {};
          if (
            (K.forEach(function (n) {
              if ('string' == typeof t[n]) {
                var i = t[n],
                  o = e.querySelector(i);
                if (((U[n] = i), !o || !o.nodeName))
                  return void (Q && console.warn("Can't find", t[n]));
                t[n] = o;
              }
            }),
            !(t.container.children.length < 1))
          ) {
            var J = t.responsive,
              G = t.nested,
              X = 'carousel' === t.mode;
            if (J) {
              0 in J && ((t = s(t, J[0])), delete J[0]);
              var Z = {};
              for (var tt in J) {
                var et = J[tt];
                (et = 'number' == typeof et ? { items: et } : et), (Z[tt] = et);
              }
              (J = Z), (Z = null);
            }
            if (
              (X ||
                (function t(e) {
                  for (var n in e)
                    X ||
                      ('slideBy' === n && (e[n] = 'page'),
                      'edgePadding' === n && (e[n] = !1),
                      'autoHeight' === n && (e[n] = !1)),
                      'responsive' === n && t(e[n]);
                })(t),
              !X)
            ) {
              (t.axis = 'horizontal'),
                (t.slideBy = 'page'),
                (t.edgePadding = !1);
              var nt = t.animateIn,
                it = t.animateOut,
                ot = t.animateDelay,
                rt = t.animateNormal;
            }
            var at,
              st,
              lt = 'horizontal' === t.axis,
              ut = e.createElement('div'),
              ct = e.createElement('div'),
              dt = t.container,
              ft = dt.parentNode,
              ht = dt.outerHTML,
              pt = dt.children,
              gt = pt.length,
              mt = On(),
              vt = !1;
            J && Zn(), X && (dt.className += ' tns-vpfix');
            var yt,
              bt,
              wt,
              _t,
              xt,
              Et,
              Ct,
              At,
              Tt = t.autoWidth,
              St = Pn('fixedWidth'),
              Mt = Pn('edgePadding'),
              Lt = Pn('gutter'),
              Dt = Bn(),
              Nt = Pn('center'),
              Ot = Tt ? 1 : Math.floor(Pn('items')),
              It = Pn('slideBy'),
              kt = t.viewportMax || t.fixedWidthViewportWidth,
              Bt = Pn('arrowKeys'),
              qt = Pn('speed'),
              Pt = t.rewind,
              jt = !Pt && t.loop,
              Rt = Pn('autoHeight'),
              Ht = Pn('controls'),
              Ft = Pn('controlsText'),
              zt = Pn('nav'),
              Wt = Pn('touch'),
              $t = Pn('mouseDrag'),
              Vt = Pn('autoplay'),
              Yt = Pn('autoplayTimeout'),
              Qt = Pn('autoplayText'),
              Kt = Pn('autoplayHoverPause'),
              Ut = Pn('autoplayResetOnVisibility'),
              Jt =
                (null,
                (Ct = Pn('nonce')),
                (At = document.createElement('style')),
                Ct && At.setAttribute('nonce', Ct),
                document.querySelector('head').appendChild(At),
                At.sheet ? At.sheet : At.styleSheet),
              Gt = t.lazyload,
              Xt = t.lazyloadSelector,
              Zt = [],
              te = jt
                ? ((xt = (function () {
                    if (Tt || (St && !kt)) return gt - 1;
                    var e = St ? 'fixedWidth' : 'items',
                      n = [];
                    if (((St || t[e] < gt) && n.push(t[e]), J))
                      for (var i in J) {
                        var o = J[i][e];
                        o && (St || o < gt) && n.push(o);
                      }
                    return (
                      n.length || n.push(0),
                      Math.ceil(
                        St
                          ? kt / Math.min.apply(null, n)
                          : Math.max.apply(null, n)
                      )
                    );
                  })()),
                  (Et = X ? Math.ceil((5 * xt - gt) / 2) : 4 * xt - gt),
                  (Et = Math.max(xt, Et)),
                  qn('edgePadding') ? Et + 1 : Et)
                : 0,
              ee = X ? gt + 2 * te : gt + te,
              ne = !((!St && !Tt) || jt),
              ie = St ? Ai() : null,
              oe = !X || !jt,
              re = lt ? 'left' : 'top',
              ae = '',
              se = '',
              le = St
                ? function () {
                    return Nt && !jt ? gt - 1 : Math.ceil(-ie / (St + Lt));
                  }
                : Tt
                ? function () {
                    for (var t = 0; t < ee; t++) if (yt[t] >= -ie) return t;
                  }
                : function () {
                    return Nt && X && !jt
                      ? gt - 1
                      : jt || X
                      ? Math.max(0, ee - Math.ceil(Ot))
                      : ee - 1;
                  },
              ue = Ln(Pn('startIndex')),
              ce = ue,
              de = (Mn(), 0),
              fe = Tt ? null : le(),
              he = t.preventActionWhenRunning,
              pe = t.swipeAngle,
              ge = !pe || '?',
              me = !1,
              ve = t.onInit,
              ye = new P(),
              be = ' tns-slider tns-' + t.mode,
              we =
                dt.id ||
                ((_t = window.tnsId),
                (window.tnsId = _t ? _t + 1 : 1),
                'tns' + window.tnsId),
              _e = Pn('disable'),
              xe = !1,
              Ee = t.freezable,
              Ce = !(!Ee || Tt) && Xn(),
              Ae = !1,
              Te = {
                click: ki,
                keydown: function (t) {
                  t = zi(t);
                  var e = [i.LEFT, i.RIGHT].indexOf(t.keyCode);
                  e >= 0 &&
                    (0 === e
                      ? Ke.disabled || ki(t, -1)
                      : Ue.disabled || ki(t, 1));
                },
              },
              Se = {
                click: function (t) {
                  if (me) {
                    if (he) return;
                    Oi();
                  }
                  for (var e = Wi((t = zi(t))); e !== Ze && !_(e, 'data-nav'); )
                    e = e.parentNode;
                  if (_(e, 'data-nav')) {
                    var n = (on = Number(x(e, 'data-nav'))),
                      i = St || Tt ? (n * gt) / en : n * Ot;
                    Ii(Be ? n : Math.min(Math.ceil(i), gt - 1), t),
                      rn === n && (dn && Ri(), (on = -1));
                  }
                },
                keydown: function (t) {
                  t = zi(t);
                  var n = e.activeElement;
                  if (_(n, 'data-nav')) {
                    var o = [i.LEFT, i.RIGHT, i.ENTER, i.SPACE].indexOf(
                        t.keyCode
                      ),
                      r = Number(x(n, 'data-nav'));
                    o >= 0 &&
                      (0 === o
                        ? r > 0 && Fi(Xe[r - 1])
                        : 1 === o
                        ? r < en - 1 && Fi(Xe[r + 1])
                        : ((on = r), Ii(r, t)));
                  }
                },
              },
              Me = {
                mouseover: function () {
                  dn && (qi(), (fn = !0));
                },
                mouseout: function () {
                  fn && (Bi(), (fn = !1));
                },
              },
              Le = {
                visibilitychange: function () {
                  e.hidden ? dn && (qi(), (pn = !0)) : pn && (Bi(), (pn = !1));
                },
              },
              De = {
                keydown: function (t) {
                  t = zi(t);
                  var e = [i.LEFT, i.RIGHT].indexOf(t.keyCode);
                  e >= 0 && ki(t, 0 === e ? -1 : 1);
                },
              },
              Ne = {
                touchstart: Qi,
                touchmove: Ki,
                touchend: Ji,
                touchcancel: Ji,
              },
              Oe = {
                mousedown: Qi,
                mousemove: Ki,
                mouseup: Ji,
                mouseleave: Ji,
              },
              Ie = qn('controls'),
              ke = qn('nav'),
              Be = !!Tt || t.navAsThumbnails,
              qe = qn('autoplay'),
              Pe = qn('touch'),
              je = qn('mouseDrag'),
              Re = 'tns-slide-active',
              He = 'tns-slide-cloned',
              Fe = 'tns-complete',
              ze = {
                load: function (t) {
                  li(Wi(t));
                },
                error: function (t) {
                  var e;
                  (e = Wi(t)), b(e, 'failed'), ui(e);
                },
              },
              We = 'force' === t.preventScrollOnTouch;
            if (Ie)
              var $e,
                Ve,
                Ye = t.controlsContainer,
                Qe = t.controlsContainer ? t.controlsContainer.outerHTML : '',
                Ke = t.prevButton,
                Ue = t.nextButton,
                Je = t.prevButton ? t.prevButton.outerHTML : '',
                Ge = t.nextButton ? t.nextButton.outerHTML : '';
            if (ke)
              var Xe,
                Ze = t.navContainer,
                tn = t.navContainer ? t.navContainer.outerHTML : '',
                en = Tt ? gt : Xi(),
                nn = 0,
                on = -1,
                rn = Nn(),
                an = rn,
                sn = 'tns-nav-active',
                ln = 'Carousel Page ',
                un = ' (Current Slide)';
            if (qe)
              var cn,
                dn,
                fn,
                hn,
                pn,
                gn = 'forward' === t.autoplayDirection ? 1 : -1,
                mn = t.autoplayButton,
                vn = t.autoplayButton ? t.autoplayButton.outerHTML : '',
                yn = [
                  "<span class='tns-visually-hidden'>",
                  ' animation</span>',
                ];
            if (Pe || je)
              var bn,
                wn,
                _n = {},
                xn = {},
                En = !1,
                Cn = lt
                  ? function (t, e) {
                      return t.x - e.x;
                    }
                  : function (t, e) {
                      return t.y - e.y;
                    };
            Tt || Sn(_e || Ce),
              R &&
                ((re = R),
                (ae = 'translate'),
                H
                  ? ((ae += lt ? '3d(' : '3d(0px, '),
                    (se = lt ? ', 0px, 0px)' : ', 0px)'))
                  : ((ae += lt ? 'X(' : 'Y('), (se = ')'))),
              X && (dt.className = dt.className.replace('tns-vpfix', '')),
              (function () {
                if (
                  (qn('gutter'),
                  (ut.className = 'tns-outer'),
                  (ct.className = 'tns-inner'),
                  (ut.id = we + '-ow'),
                  (ct.id = we + '-iw'),
                  '' === dt.id && (dt.id = we),
                  (be += I || Tt ? ' tns-subpixel' : ' tns-no-subpixel'),
                  (be += O ? ' tns-calc' : ' tns-no-calc'),
                  Tt && (be += ' tns-autowidth'),
                  (be += ' tns-' + t.axis),
                  (dt.className += be),
                  X
                    ? (((at = e.createElement('div')).id = we + '-mw'),
                      (at.className = 'tns-ovh'),
                      ut.appendChild(at),
                      at.appendChild(ct))
                    : ut.appendChild(ct),
                  Rt && ((at || ct).className += ' tns-ah'),
                  ft.insertBefore(ut, dt),
                  ct.appendChild(dt),
                  m(pt, function (t, e) {
                    b(t, 'tns-item'),
                      t.id || (t.id = we + '-item' + e),
                      !X && rt && b(t, rt),
                      C(t, { 'aria-hidden': 'true', tabindex: '-1' });
                  }),
                  te)
                ) {
                  for (
                    var n = e.createDocumentFragment(),
                      i = e.createDocumentFragment(),
                      o = te;
                    o--;

                  ) {
                    var r = o % gt,
                      a = pt[r].cloneNode(!0);
                    if (
                      (b(a, He), A(a, 'id'), i.insertBefore(a, i.firstChild), X)
                    ) {
                      var s = pt[gt - 1 - r].cloneNode(!0);
                      b(s, He), A(s, 'id'), n.appendChild(s);
                    }
                  }
                  dt.insertBefore(n, dt.firstChild),
                    dt.appendChild(i),
                    (pt = dt.children);
                }
              })(),
              (function () {
                if (!X)
                  for (var e = ue, i = ue + Math.min(gt, Ot); e < i; e++) {
                    var o = pt[e];
                    (o.style.left = (100 * (e - ue)) / Ot + '%'),
                      b(o, nt),
                      w(o, rt);
                  }
                if (
                  (lt &&
                    (I || Tt
                      ? (p(
                          Jt,
                          '#' + we + ' > .tns-item',
                          'font-size:' +
                            n.getComputedStyle(pt[0]).fontSize +
                            ';',
                          g(Jt)
                        ),
                        p(Jt, '#' + we, 'font-size:0;', g(Jt)))
                      : X &&
                        m(pt, function (t, e) {
                          t.style.marginLeft = (function (t) {
                            return O
                              ? O + '(' + 100 * t + '% / ' + ee + ')'
                              : (100 * t) / ee + '%';
                          })(e);
                        })),
                  k)
                ) {
                  if (F) {
                    var r = at && t.autoHeight ? Wn(t.speed) : '';
                    p(Jt, '#' + we + '-mw', r, g(Jt));
                  }
                  (r = jn(
                    t.edgePadding,
                    t.gutter,
                    t.fixedWidth,
                    t.speed,
                    t.autoHeight
                  )),
                    p(Jt, '#' + we + '-iw', r, g(Jt)),
                    X &&
                      ((r =
                        lt && !Tt
                          ? 'width:' + Rn(t.fixedWidth, t.gutter, t.items) + ';'
                          : ''),
                      F && (r += Wn(qt)),
                      p(Jt, '#' + we, r, g(Jt))),
                    (r = lt && !Tt ? Hn(t.fixedWidth, t.gutter, t.items) : ''),
                    t.gutter && (r += Fn(t.gutter)),
                    X || (F && (r += Wn(qt)), W && (r += $n(qt))),
                    r && p(Jt, '#' + we + ' > .tns-item', r, g(Jt));
                } else
                  X && Rt && (at.style[F] = qt / 1e3 + 's'),
                    (ct.style.cssText = jn(Mt, Lt, St, Rt)),
                    X && lt && !Tt && (dt.style.width = Rn(St, Lt, Ot)),
                    (r = lt && !Tt ? Hn(St, Lt, Ot) : ''),
                    Lt && (r += Fn(Lt)),
                    r && p(Jt, '#' + we + ' > .tns-item', r, g(Jt));
                if (J && k)
                  for (var a in J) {
                    a = parseInt(a);
                    var s = J[a],
                      l = ((r = ''), ''),
                      u = '',
                      c = '',
                      d = '',
                      f = Tt ? null : Pn('items', a),
                      h = Pn('fixedWidth', a),
                      v = Pn('speed', a),
                      y = Pn('edgePadding', a),
                      _ = Pn('autoHeight', a),
                      x = Pn('gutter', a);
                    F &&
                      at &&
                      Pn('autoHeight', a) &&
                      'speed' in s &&
                      (l = '#' + we + '-mw{' + Wn(v) + '}'),
                      ('edgePadding' in s || 'gutter' in s) &&
                        (u = '#' + we + '-iw{' + jn(y, x, h, v, _) + '}'),
                      X &&
                        lt &&
                        !Tt &&
                        ('fixedWidth' in s ||
                          'items' in s ||
                          (St && 'gutter' in s)) &&
                        (c = 'width:' + Rn(h, x, f) + ';'),
                      F && 'speed' in s && (c += Wn(v)),
                      c && (c = '#' + we + '{' + c + '}'),
                      ('fixedWidth' in s ||
                        (St && 'gutter' in s) ||
                        (!X && 'items' in s)) &&
                        (d += Hn(h, x, f)),
                      'gutter' in s && (d += Fn(x)),
                      !X &&
                        'speed' in s &&
                        (F && (d += Wn(v)), W && (d += $n(v))),
                      d && (d = '#' + we + ' > .tns-item{' + d + '}'),
                      (r = l + u + c + d) &&
                        Jt.insertRule(
                          '@media (min-width: ' + a / 16 + 'em) {' + r + '}',
                          Jt.cssRules.length
                        );
                  }
              })(),
              Vn();
            var An = jt
                ? X
                  ? function () {
                      var t = de,
                        e = fe;
                      (t += It),
                        (e -= It),
                        Mt
                          ? ((t += 1), (e -= 1))
                          : St && (Dt + Lt) % (St + Lt) && (e -= 1),
                        te && (ue > e ? (ue -= gt) : ue < t && (ue += gt));
                    }
                  : function () {
                      if (ue > fe) for (; ue >= de + gt; ) ue -= gt;
                      else if (ue < de) for (; ue <= fe - gt; ) ue += gt;
                    }
                : function () {
                    ue = Math.max(de, Math.min(fe, ue));
                  },
              Tn = X
                ? function () {
                    var t, e, n, i, o, r, a, s, l, u, c;
                    Ei(dt, ''),
                      F || !qt
                        ? (Mi(), (qt && L(dt)) || Oi())
                        : ((t = dt),
                          (e = re),
                          (n = ae),
                          (i = se),
                          (o = Ti()),
                          (r = qt),
                          (a = Oi),
                          (s = Math.min(r, 10)),
                          (l = o.indexOf('%') >= 0 ? '%' : 'px'),
                          (o = o.replace(l, '')),
                          (u = Number(
                            t.style[e]
                              .replace(n, '')
                              .replace(i, '')
                              .replace(l, '')
                          )),
                          (c = ((o - u) / r) * s),
                          setTimeout(function o() {
                            (r -= s),
                              (u += c),
                              (t.style[e] = n + u + l + i),
                              r > 0 ? setTimeout(o, s) : a();
                          }, s)),
                      lt || Gi();
                  }
                : function () {
                    Zt = [];
                    var t = {};
                    (t[V] = t[Y] = Oi),
                      q(pt[ce], t),
                      B(pt[ue], t),
                      Li(ce, nt, it, !0),
                      Li(ue, rt, nt),
                      (V && Y && qt && L(dt)) || Oi();
                  };
            return {
              version: '2.9.4',
              getInfo: to,
              events: ye,
              goTo: Ii,
              play: function () {
                Vt && !dn && (ji(), (hn = !1));
              },
              pause: function () {
                dn && (Ri(), (hn = !0));
              },
              isOn: vt,
              updateSliderHeight: gi,
              refresh: Vn,
              destroy: function () {
                if (
                  ((Jt.disabled = !0),
                  Jt.ownerNode && Jt.ownerNode.remove(),
                  q(n, { resize: Jn }),
                  Bt && q(e, De),
                  Ye && q(Ye, Te),
                  Ze && q(Ze, Se),
                  q(dt, Me),
                  q(dt, Le),
                  mn && q(mn, { click: Hi }),
                  Vt && clearInterval(cn),
                  X && V)
                ) {
                  var i = {};
                  (i[V] = Oi), q(dt, i);
                }
                Wt && q(dt, Ne), $t && q(dt, Oe);
                var o = [ht, Qe, Je, Ge, tn, vn];
                for (var r in (K.forEach(function (e, n) {
                  var i = 'container' === e ? ut : t[e];
                  if ('object' == typeof i && i) {
                    var r =
                        !!i.previousElementSibling && i.previousElementSibling,
                      a = i.parentNode;
                    (i.outerHTML = o[n]),
                      (t[e] = r ? r.nextElementSibling : a.firstElementChild);
                  }
                }),
                (K =
                  nt =
                  it =
                  ot =
                  rt =
                  lt =
                  ut =
                  ct =
                  dt =
                  ft =
                  ht =
                  pt =
                  gt =
                  st =
                  mt =
                  Tt =
                  St =
                  Mt =
                  Lt =
                  Dt =
                  Ot =
                  It =
                  kt =
                  Bt =
                  qt =
                  Pt =
                  jt =
                  Rt =
                  Jt =
                  Gt =
                  yt =
                  Zt =
                  te =
                  ee =
                  ne =
                  ie =
                  oe =
                  re =
                  ae =
                  se =
                  le =
                  ue =
                  ce =
                  de =
                  fe =
                  pe =
                  ge =
                  me =
                  ve =
                  ye =
                  be =
                  we =
                  _e =
                  xe =
                  Ee =
                  Ce =
                  Ae =
                  Te =
                  Se =
                  Me =
                  Le =
                  De =
                  Ne =
                  Oe =
                  Ie =
                  ke =
                  Be =
                  qe =
                  Pe =
                  je =
                  Re =
                  Fe =
                  ze =
                  bt =
                  Ht =
                  Ft =
                  Ye =
                  Qe =
                  Ke =
                  Ue =
                  $e =
                  Ve =
                  zt =
                  Ze =
                  tn =
                  Xe =
                  en =
                  nn =
                  on =
                  rn =
                  an =
                  sn =
                  ln =
                  un =
                  Vt =
                  Yt =
                  gn =
                  Qt =
                  Kt =
                  mn =
                  vn =
                  Ut =
                  yn =
                  cn =
                  dn =
                  fn =
                  hn =
                  pn =
                  _n =
                  xn =
                  bn =
                  En =
                  wn =
                  Cn =
                  Wt =
                  $t =
                    null),
                this))
                  'rebuild' !== r && (this[r] = null);
                vt = !1;
              },
              rebuild: function () {
                return j(s(t, U));
              },
            };
          }
          function Sn(t) {
            t && (Ht = zt = Wt = $t = Bt = Vt = Kt = Ut = !1);
          }
          function Mn() {
            for (var t = X ? ue - te : ue; t < 0; ) t += gt;
            return (t % gt) + 1;
          }
          function Ln(t) {
            return (
              (t = t ? Math.max(0, Math.min(jt ? gt - 1 : gt - Ot, t)) : 0),
              X ? t + te : t
            );
          }
          function Dn(t) {
            for (null == t && (t = ue), X && (t -= te); t < 0; ) t += gt;
            return Math.floor(t % gt);
          }
          function Nn() {
            var t,
              e = Dn();
            return (
              (t = Be
                ? e
                : St || Tt
                ? Math.ceil(((e + 1) * en) / gt - 1)
                : Math.floor(e / Ot)),
              !jt && X && ue === fe && (t = en - 1),
              t
            );
          }
          function On() {
            return (
              n.innerWidth ||
              e.documentElement.clientWidth ||
              e.body.clientWidth
            );
          }
          function In(t) {
            return 'top' === t ? 'afterbegin' : 'beforeend';
          }
          function kn(t) {
            if (null != t) {
              var n,
                i,
                o = e.createElement('div');
              return (
                t.appendChild(o),
                (i = (n = o.getBoundingClientRect()).right - n.left),
                o.remove(),
                i || kn(t.parentNode)
              );
            }
          }
          function Bn() {
            var t = Mt ? 2 * Mt - Lt : 0;
            return kn(ft) - t;
          }
          function qn(e) {
            if (t[e]) return !0;
            if (J) for (var n in J) if (J[n][e]) return !0;
            return !1;
          }
          function Pn(e, n) {
            if ((null == n && (n = mt), 'items' === e && St))
              return Math.floor((Dt + Lt) / (St + Lt)) || 1;
            var i = t[e];
            if (J)
              for (var o in J) n >= parseInt(o) && e in J[o] && (i = J[o][e]);
            return (
              'slideBy' === e && 'page' === i && (i = Pn('items')),
              X || ('slideBy' !== e && 'items' !== e) || (i = Math.floor(i)),
              i
            );
          }
          function jn(t, e, n, i, o) {
            var r = '';
            if (void 0 !== t) {
              var a = t;
              e && (a -= e),
                (r = lt
                  ? 'margin: 0 ' + a + 'px 0 ' + t + 'px;'
                  : 'margin: ' + t + 'px 0 ' + a + 'px 0;');
            } else if (e && !n) {
              var s = '-' + e + 'px';
              r = 'margin: 0 ' + (lt ? s + ' 0 0' : '0 ' + s + ' 0') + ';';
            }
            return !X && o && F && i && (r += Wn(i)), r;
          }
          function Rn(t, e, n) {
            return t
              ? (t + e) * ee + 'px'
              : O
              ? O + '(' + 100 * ee + '% / ' + n + ')'
              : (100 * ee) / n + '%';
          }
          function Hn(t, e, n) {
            var i;
            if (t) i = t + e + 'px';
            else {
              X || (n = Math.floor(n));
              var o = X ? ee : n;
              i = O ? O + '(100% / ' + o + ')' : 100 / o + '%';
            }
            return (
              (i = 'width:' + i), 'inner' !== G ? i + ';' : i + ' !important;'
            );
          }
          function Fn(t) {
            var e = '';
            return (
              !1 !== t &&
                (e =
                  (lt ? 'padding-' : 'margin-') +
                  (lt ? 'right' : 'bottom') +
                  ': ' +
                  t +
                  'px;'),
              e
            );
          }
          function zn(t, e) {
            var n = t.substring(0, t.length - e).toLowerCase();
            return n && (n = '-' + n + '-'), n;
          }
          function Wn(t) {
            return zn(F, 18) + 'transition-duration:' + t / 1e3 + 's;';
          }
          function $n(t) {
            return zn(W, 17) + 'animation-duration:' + t / 1e3 + 's;';
          }
          function Vn() {
            if (qn('autoHeight') || Tt || !lt) {
              var t = dt.querySelectorAll('img');
              m(t, function (t) {
                var e = t.src;
                Gt ||
                  (e && e.indexOf('data:image') < 0
                    ? ((t.src = ''), B(t, ze), b(t, 'loading'), (t.src = e))
                    : li(t));
              }),
                o(function () {
                  fi(T(t), function () {
                    bt = !0;
                  });
                }),
                qn('autoHeight') && (t = ci(ue, Math.min(ue + Ot - 1, ee - 1))),
                Gt
                  ? Yn()
                  : o(function () {
                      fi(T(t), Yn);
                    });
            } else X && Si(), Kn(), Un();
          }
          function Yn() {
            if (Tt && gt > 1) {
              var t = jt ? ue : gt - 1;
              !(function e() {
                var n = pt[t].getBoundingClientRect().left,
                  i = pt[t - 1].getBoundingClientRect().right;
                Math.abs(n - i) <= 1
                  ? Qn()
                  : setTimeout(function () {
                      e();
                    }, 16);
              })();
            } else Qn();
          }
          function Qn() {
            (lt && !Tt) ||
              (mi(),
              Tt
                ? ((ie = Ai()), Ee && (Ce = Xn()), (fe = le()), Sn(_e || Ce))
                : Gi()),
              X && Si(),
              Kn(),
              Un();
          }
          function Kn() {
            if (
              (vi(),
              ut.insertAdjacentHTML(
                'afterbegin',
                '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' +
                  ri() +
                  '</span>  of ' +
                  gt +
                  '</div>'
              ),
              (wt = ut.querySelector('.tns-liveregion .current')),
              qe)
            ) {
              var e = Vt ? 'stop' : 'start';
              mn
                ? C(mn, { 'data-action': e })
                : t.autoplayButtonOutput &&
                  (ut.insertAdjacentHTML(
                    In(t.autoplayPosition),
                    '<button type="button" data-action="' +
                      e +
                      '">' +
                      yn[0] +
                      e +
                      yn[1] +
                      Qt[0] +
                      '</button>'
                  ),
                  (mn = ut.querySelector('[data-action]'))),
                mn && B(mn, { click: Hi }),
                Vt && (ji(), Kt && B(dt, Me), Ut && B(dt, Le));
            }
            if (ke) {
              if (Ze)
                C(Ze, { 'aria-label': 'Carousel Pagination' }),
                  m((Xe = Ze.children), function (t, e) {
                    C(t, {
                      'data-nav': e,
                      tabindex: '-1',
                      'aria-label': ln + (e + 1),
                      'aria-controls': we,
                    });
                  });
              else {
                for (
                  var n = '', i = Be ? '' : 'style="display:none"', o = 0;
                  o < gt;
                  o++
                )
                  n +=
                    '<button type="button" data-nav="' +
                    o +
                    '" tabindex="-1" aria-controls="' +
                    we +
                    '" ' +
                    i +
                    ' aria-label="' +
                    ln +
                    (o + 1) +
                    '"></button>';
                (n =
                  '<div class="tns-nav" aria-label="Carousel Pagination">' +
                  n +
                  '</div>'),
                  ut.insertAdjacentHTML(In(t.navPosition), n),
                  (Ze = ut.querySelector('.tns-nav')),
                  (Xe = Ze.children);
              }
              if ((Zi(), F)) {
                var r = F.substring(0, F.length - 18).toLowerCase(),
                  a = 'transition: all ' + qt / 1e3 + 's';
                r && (a = '-' + r + '-' + a),
                  p(Jt, '[aria-controls^=' + we + '-item]', a, g(Jt));
              }
              C(Xe[rn], { 'aria-label': ln + (rn + 1) + un }),
                A(Xe[rn], 'tabindex'),
                b(Xe[rn], sn),
                B(Ze, Se);
            }
            Ie &&
              (Ye ||
                (Ke && Ue) ||
                (ut.insertAdjacentHTML(
                  In(t.controlsPosition),
                  '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' +
                    we +
                    '">' +
                    Ft[0] +
                    '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' +
                    we +
                    '">' +
                    Ft[1] +
                    '</button></div>'
                ),
                (Ye = ut.querySelector('.tns-controls'))),
              (Ke && Ue) || ((Ke = Ye.children[0]), (Ue = Ye.children[1])),
              t.controlsContainer &&
                C(Ye, { 'aria-label': 'Carousel Navigation', tabindex: '0' }),
              (t.controlsContainer || (t.prevButton && t.nextButton)) &&
                C([Ke, Ue], { 'aria-controls': we, tabindex: '-1' }),
              (t.controlsContainer || (t.prevButton && t.nextButton)) &&
                (C(Ke, { 'data-controls': 'prev' }),
                C(Ue, { 'data-controls': 'next' })),
              ($e = bi(Ke)),
              (Ve = bi(Ue)),
              xi(),
              Ye ? B(Ye, Te) : (B(Ke, Te), B(Ue, Te))),
              ti();
          }
          function Un() {
            if (X && V) {
              var i = {};
              (i[V] = Oi), B(dt, i);
            }
            Wt && B(dt, Ne, t.preventScrollOnTouch),
              $t && B(dt, Oe),
              Bt && B(e, De),
              'inner' === G
                ? ye.on('outerResized', function () {
                    Gn(), ye.emit('innerLoaded', to());
                  })
                : (J || St || Tt || Rt || !lt) && B(n, { resize: Jn }),
              Rt && ('outer' === G ? ye.on('innerLoaded', di) : _e || di()),
              si(),
              _e ? ii() : Ce && ni(),
              ye.on('indexChanged', hi),
              'inner' === G && ye.emit('innerLoaded', to()),
              'function' == typeof ve && ve(to()),
              (vt = !0);
          }
          function Jn(t) {
            o(function () {
              Gn(zi(t));
            });
          }
          function Gn(n) {
            if (vt) {
              'outer' === G && ye.emit('outerResized', to(n)), (mt = On());
              var i,
                o = st,
                r = !1;
              J &&
                (Zn(), (i = o !== st) && ye.emit('newBreakpointStart', to(n)));
              var a,
                s,
                l = Ot,
                u = _e,
                c = Ce,
                d = Bt,
                f = Ht,
                h = zt,
                v = Wt,
                y = $t,
                _ = Vt,
                x = Kt,
                E = Ut,
                C = ue;
              if (i) {
                var A = St,
                  T = Rt,
                  L = Ft,
                  D = Nt,
                  N = Qt;
                if (!k)
                  var O = Lt,
                    I = Mt;
              }
              if (
                ((Bt = Pn('arrowKeys')),
                (Ht = Pn('controls')),
                (zt = Pn('nav')),
                (Wt = Pn('touch')),
                (Nt = Pn('center')),
                ($t = Pn('mouseDrag')),
                (Vt = Pn('autoplay')),
                (Kt = Pn('autoplayHoverPause')),
                (Ut = Pn('autoplayResetOnVisibility')),
                i &&
                  ((_e = Pn('disable')),
                  (St = Pn('fixedWidth')),
                  (qt = Pn('speed')),
                  (Rt = Pn('autoHeight')),
                  (Ft = Pn('controlsText')),
                  (Qt = Pn('autoplayText')),
                  (Yt = Pn('autoplayTimeout')),
                  k || ((Mt = Pn('edgePadding')), (Lt = Pn('gutter')))),
                Sn(_e),
                (Dt = Bn()),
                (lt && !Tt) || _e || (mi(), lt || (Gi(), (r = !0))),
                (St || Tt) && ((ie = Ai()), (fe = le())),
                (i || St) &&
                  ((Ot = Pn('items')),
                  (It = Pn('slideBy')),
                  (s = Ot !== l) && (St || Tt || (fe = le()), An())),
                i &&
                  _e !== u &&
                  (_e
                    ? ii()
                    : (function () {
                        if (xe) {
                          if (
                            ((Jt.disabled = !1), (dt.className += be), Si(), jt)
                          )
                            for (var t = te; t--; )
                              X && M(pt[t]), M(pt[ee - t - 1]);
                          if (!X)
                            for (var e = ue, n = ue + gt; e < n; e++) {
                              var i = pt[e],
                                o = e < ue + Ot ? nt : rt;
                              (i.style.left = (100 * (e - ue)) / Ot + '%'),
                                b(i, o);
                            }
                          ei(), (xe = !1);
                        }
                      })()),
                Ee &&
                  (i || St || Tt) &&
                  (Ce = Xn()) !== c &&
                  (Ce
                    ? (Mi(Ti(Ln(0))), ni())
                    : ((function () {
                        if (Ae) {
                          if ((Mt && k && (ct.style.margin = ''), te))
                            for (var t = 'tns-transparent', e = te; e--; )
                              X && w(pt[e], t), w(pt[ee - e - 1], t);
                          ei(), (Ae = !1);
                        }
                      })(),
                      (r = !0))),
                Sn(_e || Ce),
                Vt || (Kt = Ut = !1),
                Bt !== d && (Bt ? B(e, De) : q(e, De)),
                Ht !== f &&
                  (Ht
                    ? Ye
                      ? M(Ye)
                      : (Ke && M(Ke), Ue && M(Ue))
                    : Ye
                    ? S(Ye)
                    : (Ke && S(Ke), Ue && S(Ue))),
                zt !== h && (zt ? (M(Ze), Zi()) : S(Ze)),
                Wt !== v &&
                  (Wt ? B(dt, Ne, t.preventScrollOnTouch) : q(dt, Ne)),
                $t !== y && ($t ? B(dt, Oe) : q(dt, Oe)),
                Vt !== _ &&
                  (Vt
                    ? (mn && M(mn), dn || hn || ji())
                    : (mn && S(mn), dn && Ri())),
                Kt !== x && (Kt ? B(dt, Me) : q(dt, Me)),
                Ut !== E && (Ut ? B(e, Le) : q(e, Le)),
                i)
              ) {
                if (
                  ((St === A && Nt === D) || (r = !0),
                  Rt !== T && (Rt || (ct.style.height = '')),
                  Ht &&
                    Ft !== L &&
                    ((Ke.innerHTML = Ft[0]), (Ue.innerHTML = Ft[1])),
                  mn && Qt !== N)
                ) {
                  var P = Vt ? 1 : 0,
                    j = mn.innerHTML,
                    R = j.length - N[P].length;
                  j.substring(R) === N[P] &&
                    (mn.innerHTML = j.substring(0, R) + Qt[P]);
                }
              } else Nt && (St || Tt) && (r = !0);
              if (
                ((s || (St && !Tt)) && ((en = Xi()), Zi()),
                (a = ue !== C)
                  ? (ye.emit('indexChanged', to()), (r = !0))
                  : s
                  ? a || hi()
                  : (St || Tt) && (si(), vi(), oi()),
                s &&
                  !X &&
                  (function () {
                    for (var t = ue + Math.min(gt, Ot), e = ee; e--; ) {
                      var n = pt[e];
                      e >= ue && e < t
                        ? (b(n, 'tns-moving'),
                          (n.style.left = (100 * (e - ue)) / Ot + '%'),
                          b(n, nt),
                          w(n, rt))
                        : n.style.left &&
                          ((n.style.left = ''), b(n, rt), w(n, nt)),
                        w(n, it);
                    }
                    setTimeout(function () {
                      m(pt, function (t) {
                        w(t, 'tns-moving');
                      });
                    }, 300);
                  })(),
                !_e && !Ce)
              ) {
                if (
                  i &&
                  !k &&
                  ((Mt === I && Lt === O) ||
                    (ct.style.cssText = jn(Mt, Lt, St, qt, Rt)),
                  lt)
                ) {
                  X && (dt.style.width = Rn(St, Lt, Ot));
                  var H = Hn(St, Lt, Ot) + Fn(Lt);
                  !(function (t, e) {
                    'deleteRule' in t ? t.deleteRule(e) : t.removeRule(e);
                  })(Jt, g(Jt) - 1),
                    p(Jt, '#' + we + ' > .tns-item', H, g(Jt));
                }
                Rt && di(), r && (Si(), (ce = ue));
              }
              i && ye.emit('newBreakpointEnd', to(n));
            }
          }
          function Xn() {
            if (!St && !Tt) return gt <= (Nt ? Ot - (Ot - 1) / 2 : Ot);
            var t = St ? (St + Lt) * gt : yt[gt],
              e = Mt ? Dt + 2 * Mt : Dt + Lt;
            return (
              Nt &&
                (e -= St
                  ? (Dt - St) / 2
                  : (Dt - (yt[ue + 1] - yt[ue] - Lt)) / 2),
              t <= e
            );
          }
          function Zn() {
            for (var t in ((st = 0), J)) (t = parseInt(t)), mt >= t && (st = t);
          }
          function ti() {
            !Vt && mn && S(mn),
              !zt && Ze && S(Ze),
              Ht || (Ye ? S(Ye) : (Ke && S(Ke), Ue && S(Ue)));
          }
          function ei() {
            Vt && mn && M(mn),
              zt && Ze && M(Ze),
              Ht && (Ye ? M(Ye) : (Ke && M(Ke), Ue && M(Ue)));
          }
          function ni() {
            if (!Ae) {
              if ((Mt && (ct.style.margin = '0px'), te))
                for (var t = 'tns-transparent', e = te; e--; )
                  X && b(pt[e], t), b(pt[ee - e - 1], t);
              ti(), (Ae = !0);
            }
          }
          function ii() {
            if (!xe) {
              if (
                ((Jt.disabled = !0),
                (dt.className = dt.className.replace(be.substring(1), '')),
                A(dt, ['style']),
                jt)
              )
                for (var t = te; t--; ) X && S(pt[t]), S(pt[ee - t - 1]);
              if (((lt && X) || A(ct, ['style']), !X))
                for (var e = ue, n = ue + gt; e < n; e++) {
                  var i = pt[e];
                  A(i, ['style']), w(i, nt), w(i, rt);
                }
              ti(), (xe = !0);
            }
          }
          function oi() {
            var t = ri();
            wt.innerHTML !== t && (wt.innerHTML = t);
          }
          function ri() {
            var t = ai(),
              e = t[0] + 1,
              n = t[1] + 1;
            return e === n ? e + '' : e + ' to ' + n;
          }
          function ai(t) {
            null == t && (t = Ti());
            var e,
              n,
              i,
              o = ue;
            if (
              (Nt || Mt
                ? (Tt || St) &&
                  ((n = -(parseFloat(t) + Mt)), (i = n + Dt + 2 * Mt))
                : Tt && ((n = yt[ue]), (i = n + Dt)),
              Tt)
            )
              yt.forEach(function (t, r) {
                r < ee &&
                  ((Nt || Mt) && t <= n + 0.5 && (o = r),
                  i - t >= 0.5 && (e = r));
              });
            else {
              if (St) {
                var r = St + Lt;
                Nt || Mt
                  ? ((o = Math.floor(n / r)), (e = Math.ceil(i / r - 1)))
                  : (e = o + Math.ceil(Dt / r) - 1);
              } else if (Nt || Mt) {
                var a = Ot - 1;
                if (
                  (Nt ? ((o -= a / 2), (e = ue + a / 2)) : (e = ue + a), Mt)
                ) {
                  var s = (Mt * Ot) / Dt;
                  (o -= s), (e += s);
                }
                (o = Math.floor(o)), (e = Math.ceil(e));
              } else e = o + Ot - 1;
              (o = Math.max(o, 0)), (e = Math.min(e, ee - 1));
            }
            return [o, e];
          }
          function si() {
            if (Gt && !_e) {
              var t = ai();
              t.push(Xt),
                ci.apply(null, t).forEach(function (t) {
                  if (!y(t, Fe)) {
                    var e = {};
                    (e[V] = function (t) {
                      t.stopPropagation();
                    }),
                      B(t, e),
                      B(t, ze),
                      (t.src = x(t, 'data-src'));
                    var n = x(t, 'data-srcset');
                    n && (t.srcset = n), b(t, 'loading');
                  }
                });
            }
          }
          function li(t) {
            b(t, 'loaded'), ui(t);
          }
          function ui(t) {
            b(t, Fe), w(t, 'loading'), q(t, ze);
          }
          function ci(t, e, n) {
            var i = [];
            for (n || (n = 'img'); t <= e; )
              m(pt[t].querySelectorAll(n), function (t) {
                i.push(t);
              }),
                t++;
            return i;
          }
          function di() {
            var t = ci.apply(null, ai());
            o(function () {
              fi(t, gi);
            });
          }
          function fi(t, e) {
            return bt
              ? e()
              : (t.forEach(function (e, n) {
                  !Gt && e.complete && ui(e), y(e, Fe) && t.splice(n, 1);
                }),
                t.length
                  ? void o(function () {
                      fi(t, e);
                    })
                  : e());
          }
          function hi() {
            si(),
              vi(),
              oi(),
              xi(),
              (function () {
                if (zt && ((rn = on >= 0 ? on : Nn()), (on = -1), rn !== an)) {
                  var t = Xe[an],
                    e = Xe[rn];
                  C(t, { tabindex: '-1', 'aria-label': ln + (an + 1) }),
                    w(t, sn),
                    C(e, { 'aria-label': ln + (rn + 1) + un }),
                    A(e, 'tabindex'),
                    b(e, sn),
                    (an = rn);
                }
              })();
          }
          function pi(t, e) {
            for (var n = [], i = t, o = Math.min(t + e, ee); i < o; i++)
              n.push(pt[i].offsetHeight);
            return Math.max.apply(null, n);
          }
          function gi() {
            var t = Rt ? pi(ue, Ot) : pi(te, gt),
              e = at || ct;
            e.style.height !== t && (e.style.height = t + 'px');
          }
          function mi() {
            yt = [0];
            var t = lt ? 'left' : 'top',
              e = lt ? 'right' : 'bottom',
              n = pt[0].getBoundingClientRect()[t];
            m(pt, function (i, o) {
              o && yt.push(i.getBoundingClientRect()[t] - n),
                o === ee - 1 && yt.push(i.getBoundingClientRect()[e] - n);
            });
          }
          function vi() {
            var t = ai(),
              e = t[0],
              n = t[1];
            m(pt, function (t, i) {
              i >= e && i <= n
                ? _(t, 'aria-hidden') &&
                  (A(t, ['aria-hidden', 'tabindex']), b(t, Re))
                : _(t, 'aria-hidden') ||
                  (C(t, { 'aria-hidden': 'true', tabindex: '-1' }), w(t, Re));
            });
          }
          function yi(t) {
            return t.nodeName.toLowerCase();
          }
          function bi(t) {
            return 'button' === yi(t);
          }
          function wi(t) {
            return 'true' === t.getAttribute('aria-disabled');
          }
          function _i(t, e, n) {
            t
              ? (e.disabled = n)
              : e.setAttribute('aria-disabled', n.toString());
          }
          function xi() {
            if (Ht && !Pt && !jt) {
              var t = $e ? Ke.disabled : wi(Ke),
                e = Ve ? Ue.disabled : wi(Ue),
                n = ue <= de,
                i = !Pt && ue >= fe;
              n && !t && _i($e, Ke, !0),
                !n && t && _i($e, Ke, !1),
                i && !e && _i(Ve, Ue, !0),
                !i && e && _i(Ve, Ue, !1);
            }
          }
          function Ei(t, e) {
            F && (t.style[F] = e);
          }
          function Ci(t) {
            return (
              null == t && (t = ue),
              Tt
                ? (Dt - (Mt ? Lt : 0) - (yt[t + 1] - yt[t] - Lt)) / 2
                : St
                ? (Dt - St) / 2
                : (Ot - 1) / 2
            );
          }
          function Ai() {
            var t = Dt + (Mt ? Lt : 0) - (St ? (St + Lt) * ee : yt[ee]);
            return (
              Nt &&
                !jt &&
                (t = St
                  ? -(St + Lt) * (ee - 1) - Ci()
                  : Ci(ee - 1) - yt[ee - 1]),
              t > 0 && (t = 0),
              t
            );
          }
          function Ti(t) {
            var e;
            if ((null == t && (t = ue), lt && !Tt))
              if (St) (e = -(St + Lt) * t), Nt && (e += Ci());
              else {
                var n = R ? ee : Ot;
                Nt && (t -= Ci()), (e = (100 * -t) / n);
              }
            else (e = -yt[t]), Nt && Tt && (e += Ci());
            return (
              ne && (e = Math.max(e, ie)), e + (!lt || Tt || St ? 'px' : '%')
            );
          }
          function Si(t) {
            Ei(dt, '0s'), Mi(t);
          }
          function Mi(t) {
            null == t && (t = Ti()), (dt.style[re] = ae + t + se);
          }
          function Li(t, e, n, i) {
            var o = t + Ot;
            jt || (o = Math.min(o, ee));
            for (var r = t; r < o; r++) {
              var a = pt[r];
              i || (a.style.left = (100 * (r - ue)) / Ot + '%'),
                ot &&
                  z &&
                  (a.style[z] = a.style[$] = (ot * (r - t)) / 1e3 + 's'),
                w(a, e),
                b(a, n),
                i && Zt.push(a);
            }
          }
          function Di(t, e) {
            oe && An(),
              (ue !== ce || e) &&
                (ye.emit('indexChanged', to()),
                ye.emit('transitionStart', to()),
                Rt && di(),
                dn && t && ['click', 'keydown'].indexOf(t.type) >= 0 && Ri(),
                (me = !0),
                Tn());
          }
          function Ni(t) {
            return t.toLowerCase().replace(/-/g, '');
          }
          function Oi(t) {
            if (X || me) {
              if ((ye.emit('transitionEnd', to(t)), !X && Zt.length > 0))
                for (var e = 0; e < Zt.length; e++) {
                  var n = Zt[e];
                  (n.style.left = ''),
                    $ && z && ((n.style[$] = ''), (n.style[z] = '')),
                    w(n, it),
                    b(n, rt);
                }
              if (
                !t ||
                (!X && t.target.parentNode === dt) ||
                (t.target === dt && Ni(t.propertyName) === Ni(re))
              ) {
                if (!oe) {
                  var i = ue;
                  An(), ue !== i && (ye.emit('indexChanged', to()), Si());
                }
                'inner' === G && ye.emit('innerLoaded', to()),
                  (me = !1),
                  (ce = ue);
              }
            }
          }
          function Ii(t, e) {
            if (!Ce)
              if ('prev' === t) ki(e, -1);
              else if ('next' === t) ki(e, 1);
              else {
                if (me) {
                  if (he) return;
                  Oi();
                }
                var n = Dn(),
                  i = 0;
                if (
                  ('first' === t
                    ? (i = -n)
                    : 'last' === t
                    ? (i = X ? gt - Ot - n : gt - 1 - n)
                    : ('number' != typeof t && (t = parseInt(t)),
                      isNaN(t) ||
                        (e || (t = Math.max(0, Math.min(gt - 1, t))),
                        (i = t - n))),
                  !X && i && Math.abs(i) < Ot)
                ) {
                  var o = i > 0 ? 1 : -1;
                  i += ue + i - gt >= de ? gt * o : 2 * gt * o * -1;
                }
                (ue += i),
                  X && jt && (ue < de && (ue += gt), ue > fe && (ue -= gt)),
                  Dn(ue) !== Dn(ce) && Di(e);
              }
          }
          function ki(t, e) {
            if (me) {
              if (he) return;
              Oi();
            }
            var n;
            if (!e) {
              for (
                var i = Wi((t = zi(t)));
                i !== Ye && [Ke, Ue].indexOf(i) < 0;

              )
                i = i.parentNode;
              var o = [Ke, Ue].indexOf(i);
              o >= 0 && ((n = !0), (e = 0 === o ? -1 : 1));
            }
            if (Pt) {
              if (ue === de && -1 === e) return void Ii('last', t);
              if (ue === fe && 1 === e) return void Ii('first', t);
            }
            e &&
              ((ue += It * e),
              Tt && (ue = Math.floor(ue)),
              Di(n || (t && 'keydown' === t.type) ? t : null));
          }
          function Bi() {
            (cn = setInterval(function () {
              ki(null, gn);
            }, Yt)),
              (dn = !0);
          }
          function qi() {
            clearInterval(cn), (dn = !1);
          }
          function Pi(t, e) {
            C(mn, { 'data-action': t }), (mn.innerHTML = yn[0] + t + yn[1] + e);
          }
          function ji() {
            Bi(), mn && Pi('stop', Qt[1]);
          }
          function Ri() {
            qi(), mn && Pi('start', Qt[0]);
          }
          function Hi() {
            dn ? (Ri(), (hn = !0)) : (ji(), (hn = !1));
          }
          function Fi(t) {
            t.focus();
          }
          function zi(t) {
            return $i((t = t || n.event)) ? t.changedTouches[0] : t;
          }
          function Wi(t) {
            return t.target || n.event.srcElement;
          }
          function $i(t) {
            return t.type.indexOf('touch') >= 0;
          }
          function Vi(t) {
            t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
          }
          function Yi() {
            return (
              (r = xn.y - _n.y),
              (a = xn.x - _n.x),
              (e = Math.atan2(r, a) * (180 / Math.PI)),
              (n = pe),
              (i = !1),
              (o = Math.abs(90 - Math.abs(e))) >= 90 - n
                ? (i = 'horizontal')
                : o <= n && (i = 'vertical'),
              i === t.axis
            );
            var e, n, i, o, r, a;
          }
          function Qi(t) {
            if (me) {
              if (he) return;
              Oi();
            }
            Vt && dn && qi(), (En = !0), wn && (a(wn), (wn = null));
            var e = zi(t);
            ye.emit($i(t) ? 'touchStart' : 'dragStart', to(t)),
              !$i(t) && ['img', 'a'].indexOf(yi(Wi(t))) >= 0 && Vi(t),
              (xn.x = _n.x = e.clientX),
              (xn.y = _n.y = e.clientY),
              X &&
                ((bn = parseFloat(dt.style[re].replace(ae, ''))), Ei(dt, '0s'));
          }
          function Ki(t) {
            if (En) {
              var e = zi(t);
              (xn.x = e.clientX),
                (xn.y = e.clientY),
                X
                  ? wn ||
                    (wn = o(function () {
                      Ui(t);
                    }))
                  : ('?' === ge && (ge = Yi()), ge && (We = !0)),
                ('boolean' != typeof t.cancelable || t.cancelable) &&
                  We &&
                  t.preventDefault();
            }
          }
          function Ui(t) {
            if (ge) {
              if (
                (a(wn),
                En &&
                  (wn = o(function () {
                    Ui(t);
                  })),
                '?' === ge && (ge = Yi()),
                ge)
              ) {
                !We && $i(t) && (We = !0);
                try {
                  t.type && ye.emit($i(t) ? 'touchMove' : 'dragMove', to(t));
                } catch (t) {}
                var e = bn,
                  n = Cn(xn, _n);
                !lt || St || Tt
                  ? ((e += n), (e += 'px'))
                  : ((e += R
                      ? (n * Ot * 100) / ((Dt + Lt) * ee)
                      : (100 * n) / (Dt + Lt)),
                    (e += '%')),
                  (dt.style[re] = ae + e + se);
              }
            } else En = !1;
          }
          function Ji(e) {
            if (En) {
              wn && (a(wn), (wn = null)), X && Ei(dt, ''), (En = !1);
              var n = zi(e);
              (xn.x = n.clientX), (xn.y = n.clientY);
              var i = Cn(xn, _n);
              if (Math.abs(i)) {
                if (!$i(e)) {
                  var r = Wi(e);
                  B(r, {
                    click: function t(e) {
                      Vi(e), q(r, { click: t });
                    },
                  });
                }
                X
                  ? (wn = o(function () {
                      if (lt && !Tt) {
                        var t = (-i * Ot) / (Dt + Lt);
                        (t = i > 0 ? Math.floor(t) : Math.ceil(t)), (ue += t);
                      } else {
                        var n = -(bn + i);
                        if (n <= 0) ue = de;
                        else if (n >= yt[ee - 1]) ue = fe;
                        else
                          for (var o = 0; o < ee && n >= yt[o]; )
                            (ue = o), n > yt[o] && i < 0 && (ue += 1), o++;
                      }
                      Di(e, i), ye.emit($i(e) ? 'touchEnd' : 'dragEnd', to(e));
                    }))
                  : ge && ki(e, i > 0 ? -1 : 1);
              }
            }
            'auto' === t.preventScrollOnTouch && (We = !1),
              pe && (ge = '?'),
              Vt && !dn && Bi();
          }
          function Gi() {
            (at || ct).style.height = yt[ue + Ot] - yt[ue] + 'px';
          }
          function Xi() {
            var t = St ? ((St + Lt) * gt) / Dt : gt / Ot;
            return Math.min(Math.ceil(t), gt);
          }
          function Zi() {
            if (zt && !Be && en !== nn) {
              var t = nn,
                e = en,
                n = M;
              for (nn > en && ((t = en), (e = nn), (n = S)); t < e; )
                n(Xe[t]), t++;
              nn = en;
            }
          }
          function to(t) {
            return {
              container: dt,
              slideItems: pt,
              navContainer: Ze,
              navItems: Xe,
              controlsContainer: Ye,
              hasControls: Ie,
              prevButton: Ke,
              nextButton: Ue,
              items: Ot,
              slideBy: It,
              cloneCount: te,
              slideCount: gt,
              slideCountNew: ee,
              index: ue,
              indexCached: ce,
              displayIndex: Mn(),
              navCurrentIndex: rn,
              navCurrentIndexCached: an,
              pages: en,
              pagesCached: nn,
              sheet: Jt,
              isOn: vt,
              event: t || {},
            };
          }
          Q && console.warn('No slides found in', t.container);
        };
        const R = n(4783),
          H = n(8471),
          F = n(9828);
        R(function () {
          var t = {};
          const e = document.getElementById('reviews-tab-select');
          e &&
            (document.documentElement.clientWidth < 767 &&
              (i(),
              e.addEventListener('change', function (t) {
                i();
              })),
            o(e.value));
          var n = document.getElementById('reviewsTab');
          function i() {
            var t = document.querySelector(
                '[data-bs-target="' + e.value + '"]'
              ),
              n = new H(t);
            o(e.value), n.show();
          }
          function o(e) {
            if (
              void 0 === t[e] &&
              document.querySelector(e + ' .reviews__slider')
            ) {
              var n = j({
                container: e + ' .reviews__slider',
                items: 1,
                slideBy: 1,
                mouseDrag: !0,
                controls: !0,
                nav: !1,
                loop: !1,
                onInit: function (t) {
                  var n,
                    i = document.querySelector(
                      e + ' .reviews__item-text.ellipsis'
                    );
                  function o() {
                    !i.clientHeight > 0
                      ? (n = setTimeout(o, 300))
                      : F(e + ' .ellipsis');
                  }
                  (n = setTimeout(() => {
                    o();
                  }, 300)),
                    setTimeout(() => {
                      clearTimeout(n);
                    }, 5e3);
                },
              });
              t[e] = n;
            }
          }
          n &&
            (o(n.querySelector('.nav-link.active').dataset.bsTarget),
            n.addEventListener('click', function (t) {
              t.target.classList.contains('nav-link') &&
                o(t.target.dataset.bsTarget);
            }));
        });
      },
      436: function (t, e, n) {
        const i = n(4783),
          o = n(6178),
          r = (n(8471), n(8061));
        i(function () {
          console.log('env: '), console.log(r);
          var t = document.querySelector('.nav-steps');
          if (t) {
            var e = document.querySelector('.section__title');
            i(t.querySelector('.steps__nav-link.active'));
            var n = t.querySelectorAll('.steps__nav-link');
            for (stepBtn of n)
              stepBtn.addEventListener('shown.bs.tab', function (t) {
                i(t.target);
              });
            function i(t) {
              if (t) {
                var n = t.querySelector('span:nth-child(2)');
                n && (e.innerText = n.innerText);
              }
            }
          }
          var a = document.getElementById('bx-soa-delivery');
          if (a) {
            a.addEventListener('click', function (t) {
              console.log('delivery click'),
                (function (t) {
                  console.log('checkOption'),
                    console.log(t),
                    console.log(t.target),
                    console.log(
                      o(t.target, '.bx-soa-pp-company-graf-container', !0)
                    );
                })(t);
            });
            var s = document.querySelector('.delivery-data'),
              l = document.querySelector('.pickup-data'),
              u = document.getElementById('ID_DELIVERY_ID_27'),
              c = document.getElementById('ID_DELIVERY_ID_4');
            u.checked && s.classList.add('show'),
              c.checked && l.classList.add('show'),
              a.addEventListener('click', function (t) {
                console.log(t.target);
                var e = o(t.target, '.bx-soa-pp-company-graf-container');
                console.log(e);
                var n = e.querySelector('input');
                console.log(n),
                  s.classList.remove('show'),
                  l.classList.remove('show'),
                  n && 'ID_DELIVERY_ID_27' == n.id
                    ? s.classList.add('show')
                    : n &&
                      'ID_DELIVERY_ID_4' == n.id &&
                      l.classList.add('show');
              });
          }
        });
      },
      1357: function (t, e, n) {
        const i = n(4783),
          o = n(8471);
        i(function () {
          const t = document.querySelectorAll('select[data-tab-select]');
          for (select of t)
            select.addEventListener('change', function (t) {
              var e;
              (e = document.querySelector(
                '[data-bs-target="' + this.value + '"]'
              )),
                new o(e).show();
            });
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
                i = t.clientHeight;
              lines = parseInt(i / e);
            }
            return lines;
          },
          n = function (t) {
            var e = window.getComputedStyle(t)['line-height'];
            return 'normal' === e
              ? 1.16 * parseFloat(window.getComputedStyle(o)['font-size'])
              : parseFloat(e);
          },
          i = function (t) {
            return (
              t.clientHeight -
              parseFloat(window.getComputedStyle(t)['padding-top']) -
              parseFloat(window.getComputedStyle(t)['padding-bottom'])
            );
          },
          o = function (t, e) {
            for (
              var o = t.innerHTML.split(' '), r = e * n(t), a = i(t);
              a > r && o.length > 0;

            )
              o.pop(), (t.innerHTML = o.join(' ') + '...'), (a = i(t));
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
            for (var i of n) {
              var r = e(i);
              console.log(r), r && o(i, r);
            }
        };
      },
      5695: function (t, e, n) {
        t.exports = (function (t, e, n, i) {
          'use strict';
          const o = (t) =>
              t && 'object' == typeof t && 'default' in t ? t : { default: t },
            r = o(t),
            a = o(n),
            s = o(i);
          class l extends s.default {
            constructor(t, n) {
              super(),
                (t = e.getElement(t)) &&
                  ((this._element = t),
                  (this._config = this._getConfig(n)),
                  r.default.set(
                    this._element,
                    this.constructor.DATA_KEY,
                    this
                  ));
            }
            dispose() {
              r.default.remove(this._element, this.constructor.DATA_KEY),
                a.default.off(this._element, this.constructor.EVENT_KEY);
              for (const t of Object.getOwnPropertyNames(this)) this[t] = null;
            }
            _queueCallback(t, n, i = !0) {
              e.executeAfterTransition(t, n, i);
            }
            _getConfig(t) {
              return (
                (t = this._mergeConfigObj(t, this._element)),
                (t = this._configAfterMerge(t)),
                this._typeCheckConfig(t),
                t
              );
            }
            static getInstance(t) {
              return r.default.get(e.getElement(t), this.DATA_KEY);
            }
            static getOrCreateInstance(t, e = {}) {
              return (
                this.getInstance(t) ||
                new this(t, 'object' == typeof e ? e : null)
              );
            }
            static get VERSION() {
              return '5.2.0';
            }
            static get DATA_KEY() {
              return `bs.${this.NAME}`;
            }
            static get EVENT_KEY() {
              return `.${this.DATA_KEY}`;
            }
            static eventName(t) {
              return `${t}${this.EVENT_KEY}`;
            }
          }
          return l;
        })(n(493), n(4072), n(9286), n(4705));
      },
      3863: function (t, e, n) {
        t.exports = (function (t, e, n, i) {
          'use strict';
          const o = (t) =>
              t && 'object' == typeof t && 'default' in t ? t : { default: t },
            r = o(e),
            a = o(n),
            s = o(i),
            l = 'show',
            u = 'collapse',
            c = 'collapsing',
            d = '[data-bs-toggle="collapse"]',
            f = { parent: null, toggle: !0 },
            h = { parent: '(null|element)', toggle: 'boolean' };
          class p extends s.default {
            constructor(e, n) {
              console.log('Collapse !!!!'),
                console.log(e),
                super(e, n),
                (this._isTransitioning = !1),
                (this._triggerArray = []);
              const i = a.default.find(d);
              for (const e of i) {
                const n = t.getSelectorFromElement(e),
                  i = a.default.find(n).filter((t) => t === this._element);
                null !== n && i.length && this._triggerArray.push(e);
              }
              this._initializeChildren(),
                this._config.parent ||
                  this._addAriaAndCollapsedClass(
                    this._triggerArray,
                    this._isShown()
                  ),
                this._config.toggle && this.toggle();
            }
            static get Default() {
              return f;
            }
            static get DefaultType() {
              return h;
            }
            static get NAME() {
              return 'collapse';
            }
            toggle() {
              this._isShown() ? this.hide() : this.show();
            }
            show() {
              if (this._isTransitioning || this._isShown()) return;
              let t = [];
              if (
                (this._config.parent &&
                  (t = this._getFirstLevelChildren(
                    '.collapse.show, .collapse.collapsing'
                  )
                    .filter((t) => t !== this._element)
                    .map((t) => p.getOrCreateInstance(t, { toggle: !1 }))),
                t.length && t[0]._isTransitioning)
              )
                return;
              if (
                r.default.trigger(this._element, 'show.bs.collapse')
                  .defaultPrevented
              )
                return;
              for (const e of t) e.hide();
              const e = this._getDimension();
              this._element.classList.remove(u),
                this._element.classList.add(c),
                (this._element.style[e] = 0),
                this._addAriaAndCollapsedClass(this._triggerArray, !0),
                (this._isTransitioning = !0);
              const n = `scroll${e[0].toUpperCase() + e.slice(1)}`;
              this._queueCallback(
                () => {
                  (this._isTransitioning = !1),
                    this._element.classList.remove(c),
                    this._element.classList.add(u, l),
                    (this._element.style[e] = ''),
                    r.default.trigger(this._element, 'shown.bs.collapse');
                },
                this._element,
                !0
              ),
                (this._element.style[e] = `${this._element[n]}px`);
            }
            hide() {
              if (this._isTransitioning || !this._isShown()) return;
              if (
                r.default.trigger(this._element, 'hide.bs.collapse')
                  .defaultPrevented
              )
                return;
              const e = this._getDimension();
              (this._element.style[e] = `${
                this._element.getBoundingClientRect()[e]
              }px`),
                t.reflow(this._element),
                this._element.classList.add(c),
                this._element.classList.remove(u, l);
              for (const e of this._triggerArray) {
                const n = t.getElementFromSelector(e);
                n &&
                  !this._isShown(n) &&
                  this._addAriaAndCollapsedClass([e], !1);
              }
              this._isTransitioning = !0;
              (this._element.style[e] = ''),
                this._queueCallback(
                  () => {
                    (this._isTransitioning = !1),
                      this._element.classList.remove(c),
                      this._element.classList.add(u),
                      r.default.trigger(this._element, 'hidden.bs.collapse');
                  },
                  this._element,
                  !0
                );
            }
            _isShown(t = this._element) {
              return t.classList.contains(l);
            }
            _configAfterMerge(e) {
              return (
                (e.toggle = Boolean(e.toggle)),
                (e.parent = t.getElement(e.parent)),
                e
              );
            }
            _getDimension() {
              return this._element.classList.contains('collapse-horizontal')
                ? 'width'
                : 'height';
            }
            _initializeChildren() {
              if (!this._config.parent) return;
              const e = this._getFirstLevelChildren(d);
              for (const n of e) {
                const e = t.getElementFromSelector(n);
                e && this._addAriaAndCollapsedClass([n], this._isShown(e));
              }
            }
            _getFirstLevelChildren(t) {
              const e = a.default.find(
                ':scope .collapse .collapse',
                this._config.parent
              );
              return a.default
                .find(t, this._config.parent)
                .filter((t) => !e.includes(t));
            }
            _addAriaAndCollapsedClass(t, e) {
              if (t.length)
                for (const n of t)
                  n.classList.toggle('collapsed', !e),
                    n.setAttribute('aria-expanded', e);
            }
            static jQueryInterface(t) {
              const e = {};
              return (
                'string' == typeof t && /show|hide/.test(t) && (e.toggle = !1),
                this.each(function () {
                  const n = p.getOrCreateInstance(this, e);
                  if ('string' == typeof t) {
                    if (void 0 === n[t])
                      throw new TypeError(`No method named "${t}"`);
                    n[t]();
                  }
                })
              );
            }
          }
          return (
            r.default.on(
              document,
              'click.bs.collapse.data-api',
              d,
              function (e) {
                ('A' === e.target.tagName ||
                  (e.delegateTarget && 'A' === e.delegateTarget.tagName)) &&
                  e.preventDefault();
                const n = t.getSelectorFromElement(this),
                  i = a.default.find(n);
                for (const t of i)
                  p.getOrCreateInstance(t, { toggle: !1 }).toggle();
              }
            ),
            t.defineJQueryPlugin(p),
            p
          );
        })(n(4072), n(9286), n(8737), n(5695));
      },
      493: function (t) {
        t.exports = (function () {
          'use strict';
          const t = new Map();
          return {
            set(e, n, i) {
              t.has(e) || t.set(e, new Map());
              const o = t.get(e);
              o.has(n) || 0 === o.size
                ? o.set(n, i)
                : console.error(
                    `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                      Array.from(o.keys())[0]
                    }.`
                  );
            },
            get: (e, n) => (t.has(e) && t.get(e).get(n)) || null,
            remove(e, n) {
              if (!t.has(e)) return;
              const i = t.get(e);
              i.delete(n), 0 === i.size && t.delete(e);
            },
          };
        })();
      },
      9286: function (t, e, n) {
        t.exports = (function (t) {
          'use strict';
          const e = /[^.]*(?=\..*)\.|.*/,
            n = /\..*/,
            i = /::\d+$/,
            o = {};
          let r = 1;
          const a = { mouseenter: 'mouseover', mouseleave: 'mouseout' },
            s = new Set([
              'click',
              'dblclick',
              'mouseup',
              'mousedown',
              'contextmenu',
              'mousewheel',
              'DOMMouseScroll',
              'mouseover',
              'mouseout',
              'mousemove',
              'selectstart',
              'selectend',
              'keydown',
              'keypress',
              'keyup',
              'orientationchange',
              'touchstart',
              'touchmove',
              'touchend',
              'touchcancel',
              'pointerdown',
              'pointermove',
              'pointerup',
              'pointerleave',
              'pointercancel',
              'gesturestart',
              'gesturechange',
              'gestureend',
              'focus',
              'blur',
              'change',
              'reset',
              'select',
              'submit',
              'focusin',
              'focusout',
              'load',
              'unload',
              'beforeunload',
              'resize',
              'move',
              'DOMContentLoaded',
              'readystatechange',
              'error',
              'abort',
              'scroll',
            ]);
          function l(t, e) {
            return (e && `${e}::${r++}`) || t.uidEvent || r++;
          }
          function u(t) {
            const e = l(t);
            return (t.uidEvent = e), (o[e] = o[e] || {}), o[e];
          }
          function c(t, e, n = null) {
            return Object.values(t).find(
              (t) => t.callable === e && t.delegationSelector === n
            );
          }
          function d(t, e, n) {
            const i = 'string' == typeof e,
              o = i ? n : e || n;
            let r = g(t);
            return s.has(r) || (r = t), [i, o, r];
          }
          function f(t, n, i, o, r) {
            if ('string' != typeof n || !t) return;
            let [s, f, h] = d(n, i, o);
            if (n in a) {
              const t = (t) =>
                function (e) {
                  if (
                    !e.relatedTarget ||
                    (e.relatedTarget !== e.delegateTarget &&
                      !e.delegateTarget.contains(e.relatedTarget))
                  )
                    return t.call(this, e);
                };
              f = t(f);
            }
            const p = u(t),
              g = p[h] || (p[h] = {}),
              y = c(g, f, s ? i : null);
            if (y) return void (y.oneOff = y.oneOff && r);
            const b = l(f, n.replace(e, '')),
              w = s
                ? (function (t, e, n) {
                    return function i(o) {
                      const r = t.querySelectorAll(e);
                      for (
                        let { target: a } = o;
                        a && a !== this;
                        a = a.parentNode
                      )
                        for (const s of r)
                          if (s === a)
                            return (
                              v(o, { delegateTarget: a }),
                              i.oneOff && m.off(t, o.type, e, n),
                              n.apply(a, [o])
                            );
                    };
                  })(t, i, f)
                : (function (t, e) {
                    return function n(i) {
                      return (
                        v(i, { delegateTarget: t }),
                        n.oneOff && m.off(t, i.type, e),
                        e.apply(t, [i])
                      );
                    };
                  })(t, f);
            (w.delegationSelector = s ? i : null),
              (w.callable = f),
              (w.oneOff = r),
              (w.uidEvent = b),
              (g[b] = w),
              t.addEventListener(h, w, s);
          }
          function h(t, e, n, i, o) {
            const r = c(e[n], i, o);
            r &&
              (t.removeEventListener(n, r, Boolean(o)),
              delete e[n][r.uidEvent]);
          }
          function p(t, e, n, i) {
            const o = e[n] || {};
            for (const r of Object.keys(o))
              if (r.includes(i)) {
                const i = o[r];
                h(t, e, n, i.callable, i.delegationSelector);
              }
          }
          function g(t) {
            return (t = t.replace(n, '')), a[t] || t;
          }
          const m = {
            on(t, e, n, i) {
              f(t, e, n, i, !1);
            },
            one(t, e, n, i) {
              f(t, e, n, i, !0);
            },
            off(t, e, n, o) {
              if ('string' != typeof e || !t) return;
              const [r, a, s] = d(e, n, o),
                l = s !== e,
                c = u(t),
                f = c[s] || {},
                g = e.startsWith('.');
              if (void 0 === a) {
                if (g) for (const n of Object.keys(c)) p(t, c, n, e.slice(1));
                for (const n of Object.keys(f)) {
                  const o = n.replace(i, '');
                  if (!l || e.includes(o)) {
                    const e = f[n];
                    h(t, c, s, e.callable, e.delegationSelector);
                  }
                }
              } else {
                if (!Object.keys(f).length) return;
                h(t, c, s, a, r ? n : null);
              }
            },
            trigger(e, n, i) {
              if ('string' != typeof n || !e) return null;
              const o = t.getjQuery();
              let r = null,
                a = !0,
                s = !0,
                l = !1;
              n !== g(n) &&
                o &&
                ((r = o.Event(n, i)),
                o(e).trigger(r),
                (a = !r.isPropagationStopped()),
                (s = !r.isImmediatePropagationStopped()),
                (l = r.isDefaultPrevented()));
              let u = new Event(n, { bubbles: a, cancelable: !0 });
              return (
                (u = v(u, i)),
                l && u.preventDefault(),
                s && e.dispatchEvent(u),
                u.defaultPrevented && r && r.preventDefault(),
                u
              );
            },
          };
          function v(t, e) {
            for (const [n, i] of Object.entries(e || {}))
              try {
                t[n] = i;
              } catch (e) {
                Object.defineProperty(t, n, { configurable: !0, get: () => i });
              }
            return t;
          }
          return m;
        })(n(4072));
      },
      3175: function (t) {
        t.exports = (function () {
          'use strict';
          function t(t) {
            if ('true' === t) return !0;
            if ('false' === t) return !1;
            if (t === Number(t).toString()) return Number(t);
            if ('' === t || 'null' === t) return null;
            if ('string' != typeof t) return t;
            try {
              return JSON.parse(decodeURIComponent(t));
            } catch (e) {
              return t;
            }
          }
          function e(t) {
            return t.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
          }
          return {
            setDataAttribute(t, n, i) {
              t.setAttribute(`data-bs-${e(n)}`, i);
            },
            removeDataAttribute(t, n) {
              t.removeAttribute(`data-bs-${e(n)}`);
            },
            getDataAttributes(e) {
              if (!e) return {};
              const n = {},
                i = Object.keys(e.dataset).filter(
                  (t) => t.startsWith('bs') && !t.startsWith('bsConfig')
                );
              for (const o of i) {
                let i = o.replace(/^bs/, '');
                (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
                  (n[i] = t(e.dataset[o]));
              }
              return n;
            },
            getDataAttribute: (n, i) => t(n.getAttribute(`data-bs-${e(i)}`)),
          };
        })();
      },
      8737: function (t, e, n) {
        t.exports = (function (t) {
          'use strict';
          return {
            find: (t, e = document.documentElement) =>
              [].concat(...Element.prototype.querySelectorAll.call(e, t)),
            findOne: (t, e = document.documentElement) =>
              Element.prototype.querySelector.call(e, t),
            children: (t, e) =>
              [].concat(...t.children).filter((t) => t.matches(e)),
            parents(t, e) {
              const n = [];
              let i = t.parentNode.closest(e);
              for (; i; ) n.push(i), (i = i.parentNode.closest(e));
              return n;
            },
            prev(t, e) {
              let n = t.previousElementSibling;
              for (; n; ) {
                if (n.matches(e)) return [n];
                n = n.previousElementSibling;
              }
              return [];
            },
            next(t, e) {
              let n = t.nextElementSibling;
              for (; n; ) {
                if (n.matches(e)) return [n];
                n = n.nextElementSibling;
              }
              return [];
            },
            focusableChildren(e) {
              const n = [
                'a',
                'button',
                'input',
                'textarea',
                'select',
                'details',
                '[tabindex]',
                '[contenteditable="true"]',
              ]
                .map((t) => `${t}:not([tabindex^="-"])`)
                .join(',');
              return this.find(n, e).filter(
                (e) => !t.isDisabled(e) && t.isVisible(e)
              );
            },
          };
        })(n(4072));
      },
      8471: function (t, e, n) {
        t.exports = (function (t, e, n, i) {
          'use strict';
          const o = (t) =>
              t && 'object' == typeof t && 'default' in t ? t : { default: t },
            r = o(e),
            a = o(n),
            s = o(i),
            l = 'ArrowLeft',
            u = 'ArrowRight',
            c = 'ArrowUp',
            d = 'ArrowDown',
            f = 'active',
            h = 'fade',
            p = 'show',
            g =
              '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
            m = `.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${g}`;
          class v extends s.default {
            constructor(t) {
              super(t),
                (this._parent = this._element.closest(
                  '.list-group, .nav, [role="tablist"]'
                )),
                this._parent &&
                  (this._setInitialAttributes(
                    this._parent,
                    this._getChildren()
                  ),
                  r.default.on(this._element, 'keydown.bs.tab', (t) =>
                    this._keydown(t)
                  ));
            }
            static get NAME() {
              return 'tab';
            }
            show() {
              const t = this._element;
              if (this._elemIsActive(t)) return;
              const e = this._getActiveElem(),
                n = e
                  ? r.default.trigger(e, 'hide.bs.tab', { relatedTarget: t })
                  : null;
              r.default.trigger(t, 'show.bs.tab', { relatedTarget: e })
                .defaultPrevented ||
                (n && n.defaultPrevented) ||
                (this._deactivate(e, t), this._activate(t, e));
            }
            _activate(e, n) {
              if (!e) return;
              e.classList.add(f), this._activate(t.getElementFromSelector(e));
              this._queueCallback(
                () => {
                  'tab' === e.getAttribute('role')
                    ? (e.focus(),
                      e.removeAttribute('tabindex'),
                      e.setAttribute('aria-selected', !0),
                      this._toggleDropDown(e, !0),
                      r.default.trigger(e, 'shown.bs.tab', {
                        relatedTarget: n,
                      }))
                    : e.classList.add(p);
                },
                e,
                e.classList.contains(h)
              );
            }
            _deactivate(e, n) {
              if (!e) return;
              e.classList.remove(f),
                e.blur(),
                this._deactivate(t.getElementFromSelector(e));
              this._queueCallback(
                () => {
                  'tab' === e.getAttribute('role')
                    ? (e.setAttribute('aria-selected', !1),
                      e.setAttribute('tabindex', '-1'),
                      this._toggleDropDown(e, !1),
                      r.default.trigger(e, 'hidden.bs.tab', {
                        relatedTarget: n,
                      }))
                    : e.classList.remove(p);
                },
                e,
                e.classList.contains(h)
              );
            }
            _keydown(e) {
              if (![l, u, c, d].includes(e.key)) return;
              e.stopPropagation(), e.preventDefault();
              const n = [u, d].includes(e.key),
                i = t.getNextActiveElement(
                  this._getChildren().filter((e) => !t.isDisabled(e)),
                  e.target,
                  n,
                  !0
                );
              i && v.getOrCreateInstance(i).show();
            }
            _getChildren() {
              return a.default.find(m, this._parent);
            }
            _getActiveElem() {
              return (
                this._getChildren().find((t) => this._elemIsActive(t)) || null
              );
            }
            _setInitialAttributes(t, e) {
              this._setAttributeIfNotExists(t, 'role', 'tablist');
              for (const t of e) this._setInitialAttributesOnChild(t);
            }
            _setInitialAttributesOnChild(t) {
              t = this._getInnerElement(t);
              const e = this._elemIsActive(t),
                n = this._getOuterElement(t);
              t.setAttribute('aria-selected', e),
                n !== t &&
                  this._setAttributeIfNotExists(n, 'role', 'presentation'),
                e || t.setAttribute('tabindex', '-1'),
                this._setAttributeIfNotExists(t, 'role', 'tab'),
                this._setInitialAttributesOnTargetPanel(t);
            }
            _setInitialAttributesOnTargetPanel(e) {
              const n = t.getElementFromSelector(e);
              n &&
                (this._setAttributeIfNotExists(n, 'role', 'tabpanel'),
                e.id &&
                  this._setAttributeIfNotExists(
                    n,
                    'aria-labelledby',
                    `#${e.id}`
                  ));
            }
            _toggleDropDown(t, e) {
              const n = this._getOuterElement(t);
              if (!n.classList.contains('dropdown')) return;
              const i = (t, i) => {
                const o = a.default.findOne(t, n);
                o && o.classList.toggle(i, e);
              };
              i('.dropdown-toggle', f),
                i('.dropdown-menu', p),
                i('.dropdown-item', f),
                n.setAttribute('aria-expanded', e);
            }
            _setAttributeIfNotExists(t, e, n) {
              t.hasAttribute(e) || t.setAttribute(e, n);
            }
            _elemIsActive(t) {
              return t.classList.contains(f);
            }
            _getInnerElement(t) {
              return t.matches(m) ? t : a.default.findOne(m, t);
            }
            _getOuterElement(t) {
              return t.closest('.nav-item, .list-group-item') || t;
            }
            static jQueryInterface(t) {
              return this.each(function () {
                const e = v.getOrCreateInstance(this);
                if ('string' == typeof t) {
                  if (
                    void 0 === e[t] ||
                    t.startsWith('_') ||
                    'constructor' === t
                  )
                    throw new TypeError(`No method named "${t}"`);
                  e[t]();
                }
              });
            }
          }
          return (
            r.default.on(document, 'click.bs.tab', g, function (e) {
              ['A', 'AREA'].includes(this.tagName) && e.preventDefault(),
                t.isDisabled(this) || v.getOrCreateInstance(this).show();
            }),
            r.default.on(window, 'load.bs.tab', () => {
              for (const t of a.default.find(
                '.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'
              ))
                v.getOrCreateInstance(t);
            }),
            t.defineJQueryPlugin(v),
            v
          );
        })(n(4072), n(9286), n(8737), n(5695));
      },
      4705: function (t, e, n) {
        t.exports = (function (t, e) {
          'use strict';
          const n = ((t) =>
            t && 'object' == typeof t && 'default' in t ? t : { default: t })(
            e
          );
          return class {
            static get Default() {
              return {};
            }
            static get DefaultType() {
              return {};
            }
            static get NAME() {
              throw new Error(
                'You have to implement the static method "NAME", for each component!'
              );
            }
            _getConfig(t) {
              return (
                (t = this._mergeConfigObj(t)),
                (t = this._configAfterMerge(t)),
                this._typeCheckConfig(t),
                t
              );
            }
            _configAfterMerge(t) {
              return t;
            }
            _mergeConfigObj(e, i) {
              const o = t.isElement(i)
                ? n.default.getDataAttribute(i, 'config')
                : {};
              return {
                ...this.constructor.Default,
                ...('object' == typeof o ? o : {}),
                ...(t.isElement(i) ? n.default.getDataAttributes(i) : {}),
                ...('object' == typeof e ? e : {}),
              };
            }
            _typeCheckConfig(e, n = this.constructor.DefaultType) {
              for (const i of Object.keys(n)) {
                const o = n[i],
                  r = e[i],
                  a = t.isElement(r) ? 'element' : t.toType(r);
                if (!new RegExp(o).test(a))
                  throw new TypeError(
                    `${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${a}" but expected type "${o}".`
                  );
              }
            }
          };
        })(n(4072), n(3175));
      },
      4072: function (t, e) {
        !(function (t) {
          'use strict';
          const e = 'transitionend',
            n = (t) => {
              let e = t.getAttribute('data-bs-target');
              if (!e || '#' === e) {
                let n = t.getAttribute('href');
                if (!n || (!n.includes('#') && !n.startsWith('.'))) return null;
                n.includes('#') &&
                  !n.startsWith('#') &&
                  (n = `#${n.split('#')[1]}`),
                  (e = n && '#' !== n ? n.trim() : null);
              }
              return e;
            },
            i = (t) => {
              if (!t) return 0;
              let { transitionDuration: e, transitionDelay: n } =
                window.getComputedStyle(t);
              const i = Number.parseFloat(e),
                o = Number.parseFloat(n);
              return i || o
                ? ((e = e.split(',')[0]),
                  (n = n.split(',')[0]),
                  1e3 * (Number.parseFloat(e) + Number.parseFloat(n)))
                : 0;
            },
            o = (t) => {
              t.dispatchEvent(new Event(e));
            },
            r = (t) =>
              !(!t || 'object' != typeof t) &&
              (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
            a = (t) => {
              if (!document.documentElement.attachShadow) return null;
              if ('function' == typeof t.getRootNode) {
                const e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null;
              }
              return t instanceof ShadowRoot
                ? t
                : t.parentNode
                ? a(t.parentNode)
                : null;
            },
            s = () =>
              window.jQuery && !document.body.hasAttribute('data-bs-no-jquery')
                ? window.jQuery
                : null,
            l = [],
            u = (t) => {
              'loading' === document.readyState
                ? (l.length ||
                    document.addEventListener('DOMContentLoaded', () => {
                      for (const t of l) t();
                    }),
                  l.push(t))
                : t();
            },
            c = (t) => {
              'function' == typeof t && t();
            };
          (t.defineJQueryPlugin = (t) => {
            u(() => {
              const e = s();
              if (e) {
                const n = t.NAME,
                  i = e.fn[n];
                (e.fn[n] = t.jQueryInterface),
                  (e.fn[n].Constructor = t),
                  (e.fn[n].noConflict = () => (
                    (e.fn[n] = i), t.jQueryInterface
                  ));
              }
            });
          }),
            (t.execute = c),
            (t.executeAfterTransition = (t, n, r = !0) => {
              if (!r) return void c(t);
              const a = i(n) + 5;
              let s = !1;
              const l = ({ target: i }) => {
                i === n && ((s = !0), n.removeEventListener(e, l), c(t));
              };
              n.addEventListener(e, l),
                setTimeout(() => {
                  s || o(n);
                }, a);
            }),
            (t.findShadowRoot = a),
            (t.getElement = (t) =>
              r(t)
                ? t.jquery
                  ? t[0]
                  : t
                : 'string' == typeof t && t.length > 0
                ? document.querySelector(t)
                : null),
            (t.getElementFromSelector = (t) => {
              const e = n(t);
              return e ? document.querySelector(e) : null;
            }),
            (t.getNextActiveElement = (t, e, n, i) => {
              const o = t.length;
              let r = t.indexOf(e);
              return -1 === r
                ? !n && i
                  ? t[o - 1]
                  : t[0]
                : ((r += n ? 1 : -1),
                  i && (r = (r + o) % o),
                  t[Math.max(0, Math.min(r, o - 1))]);
            }),
            (t.getSelectorFromElement = (t) => {
              const e = n(t);
              return e && document.querySelector(e) ? e : null;
            }),
            (t.getTransitionDurationFromElement = i),
            (t.getUID = (t) => {
              do {
                t += Math.floor(1e6 * Math.random());
              } while (document.getElementById(t));
              return t;
            }),
            (t.getjQuery = s),
            (t.isDisabled = (t) =>
              !t ||
              t.nodeType !== Node.ELEMENT_NODE ||
              !!t.classList.contains('disabled') ||
              (void 0 !== t.disabled
                ? t.disabled
                : t.hasAttribute('disabled') &&
                  'false' !== t.getAttribute('disabled'))),
            (t.isElement = r),
            (t.isRTL = () => 'rtl' === document.documentElement.dir),
            (t.isVisible = (t) => {
              if (!r(t) || 0 === t.getClientRects().length) return !1;
              const e =
                  'visible' ===
                  getComputedStyle(t).getPropertyValue('visibility'),
                n = t.closest('details:not([open])');
              if (!n) return e;
              if (n !== t) {
                const e = t.closest('summary');
                if (e && e.parentNode !== n) return !1;
                if (null === e) return !1;
              }
              return e;
            }),
            (t.noop = () => {}),
            (t.onDOMContentLoaded = u),
            (t.reflow = (t) => {
              t.offsetHeight;
            }),
            (t.toType = (t) =>
              null == t
                ? `${t}`
                : Object.prototype.toString
                    .call(t)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase()),
            (t.triggerTransitionEnd = o),
            Object.defineProperties(t, {
              __esModule: { value: !0 },
              [Symbol.toStringTag]: { value: 'Module' },
            });
        })(e);
      },
      6178: function (t, e, n) {
        var i = n(2670);
        t.exports = function (t, e, n) {
          for (var o = n ? t : t.parentNode; o && o !== document; ) {
            if (i(o, e)) return o;
            o = o.parentNode;
          }
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
            var i = t.parentNode.querySelectorAll(e), o = 0;
            o < i.length;
            ++o
          )
            if (i[o] == t) return !0;
          return !1;
        };
      },
      9001: function (t, e, n) {
        const i = n(5179),
          o = n(4783);
        o(function() {
          console.log('ready medical');
          if (document.querySelector('#medical-list-main')) {
            console.log('ready medical 1');

            var sliderMedical = i.j({
              container: '#medical-list-main',
              items: 1,
              slideBy: 1,
              mouseDrag: true,
              controls: true,
              nav: false,
              loop: false,
              responsive: {
                600: {
                  items: 2,
                },
                768: {
                  items: 3,
                },
                1024: {
                  items: 4,
                },
                1440: {
                  gutter: 32
                }
              }
            });
          }
        });
      },
    },
    e = {};
  function n(i) {
    var o = e[i];
    if (void 0 !== o) return o.exports;
    var r = (e[i] = { exports: {} });
    return t[i].call(r.exports, r, r.exports, n), r.exports;
  }
  (n.r = function (t) {
    'undefined' != typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
      Object.defineProperty(t, '__esModule', { value: !0 });
  }),
    n(8585),
    n(5179),
    n(1929),
    n(436),
    n(1357),
    n(8471),
    n(9001);
})();
