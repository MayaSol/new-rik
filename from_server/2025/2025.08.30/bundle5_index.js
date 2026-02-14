/*! For license information please see bundle5_index.js.LICENSE.txt */
!(function () {
  var t = {
      5969: function (t, e, n) {
        "use strict";
        n.r(e);
        var i = n(8127);
        const o = n(4783);
        var r = n(3096);
        o(function () {
          var t;
          function e() {
            if (
              document.querySelector(".areas__inner") &&
              document.documentElement.clientWidth < 1024
            ) {
              if (!t || !t.version) {
                var e = (t = (0, i.W)({
                    container: ".areas__inner",
                    items: 1,
                    slideBy: 1,
                    mouseDrag: !0,
                    controls: !1,
                    nav: !1,
                    loop: !1,
                    responsive: {
                      700: { items: 2, slideBy: 1, gutter: 20, controls: !0 },
                    },
                  })).getInfo(),
                  n = document.querySelector(".areas__range");
                n.value = e.index;
                var o = n.clientWidth / e.slideCount,
                  r = "";
                for (var a of [
                  "::-webkit-slider-thumb",
                  "::-moz-range-thumb",
                  "::-ms-thumb ",
                ])
                  r += " .areas__range"
                    .concat(a, " { width: ")
                    .concat(o, "px; } ");
                var u =
                    document.head || document.getElementsByTagName("head")[0],
                  c = document.createElement("style");
                u.appendChild(c),
                  (c.type = "text/css"),
                  c.styleSheet
                    ? (c.styleSheet.cssText = r)
                    : c.appendChild(document.createTextNode(r)),
                  n.setAttribute("min", 1),
                  n.setAttribute("max", e.slideCount),
                  n.addEventListener("input", function (e) {
                    t.goTo(this.value - 1);
                  }),
                  document.documentElement.clientWidth < 700 &&
                    t.events.on("transitionEnd", function () {
                      var e = t.getInfo();
                      n.value = e.index + 1;
                    });
              }
            } else t && t.destroy && t.destroy();
          }
          e(), window.addEventListener("resize", r(e, 100));
        });
      },
      3953: function (t, e, n) {
        "use strict";
        n.r(e);
        var i = n(8127);
        const o = n(4783),
          r = n(9828),
          a = n(6178);
        function u() {
          var t = document.querySelectorAll(".article-preview__ellipsis");
          for (var e of t) {
            var n = a(e, ".article-preview__content").querySelector(".hidden");
            if (n) e.innerHTML = n.innerHTML;
            else {
              let t = document.createElement("div");
              (t.className = "hidden"),
                (t.innerHTML = e.innerHTML),
                a(e, ".article-preview__content").append(t);
            }
          }
          r(".article-preview__ellipsis");
        }
        o(function () {
          setTimeout(() => {
            var t = document.querySelector(".article-preview__list.slider");
            if (t) {
              if (document.documentElement.clientWidth < 1440)
                var e = (0, i.W)({
                  container: ".article-preview__list.slider",
                  items: 1,
                  slideBy: 1,
                  mouseDrag: !0,
                  controls: !0,
                  nav: !1,
                  loop: !1,
                  preventScrollOnTouch: "force",
                  responsive: { 700: { items: 2, slideBy: 1, gutter: 20 } },
                });
              else {
                var n = !!document.documentElement.classList.contains("index"),
                  o = document.documentElement.classList.contains("index")
                    ? {}
                    : { 1440: { items: 3 } };
                console.log(n),
                  (e = (0, i.W)({
                    container: ".article-preview__list.slider",
                    items: 2,
                    slideBy: 1,
                    mouseDrag: !0,
                    controls: !0,
                    nav: !1,
                    loop: !1,
                    preventScrollOnTouch: "force",
                    autoWidth: n,
                    gutter: 32,
                    responsive: o,
                    onInit: function () {
                      u();
                    },
                  }));
              }
              e.events.on("transitionStart", function (e) {
                e.displayIndex > 1
                  ? t.classList.add("not-first-page")
                  : t.classList.remove("not-first-page");
              });
            }
            document.querySelector(".article-preview__list.slider-lg") &&
              document.documentElement.clientWidth < 1024 &&
              (e = (0, i.W)({
                container: ".article-preview__list.slider-lg",
                items: 1,
                slideBy: 1,
                mouseDrag: !0,
                controls: !0,
                nav: !1,
                loop: !1,
                preventScrollOnTouch: "force",
                responsive: { 600: { items: 2, gutter: 20 } },
              })),
              r(".article-preview__ellipsis--cure");
          }, 0);
        }),
          window.addEventListener("resize", u);
      },
      2448: function (t, e, n) {
        "use strict";
        n.r(e);
        var i = n(8127);
        n(4783)(function () {
          document.documentElement.clientWidth < 768 &&
            document.querySelector(".features__list") &&
            (0, i.W)({
              container: ".features__list",
              items: 1,
              slideBy: 1,
              mouseDrag: !0,
              controls: !0,
              nav: !1,
              responsive: { 680: { items: 2, slideBy: 2 } },
            });
        });
      },
      3993: function (t, e, n) {
        "use strict";
        n.r(e);
        var i = n(8127);
        const o = n(4783),
          r = n(6178);
        function a(t) {
          t.classList.add("cloudimage-360"), window.CI360.add(t.id);
          var e = r(t, ".product-main__slider-item"),
            n = e && e.querySelector(".product-info__preloader");
          n && n.classList.add("loaded");
        }
        o(function () {
          if (
            document.querySelector(".product-info__views-list") &&
            document.querySelector(".product-info__text-list")
          ) {
            var t = (0, i.W)({
                container: ".product-info__views-list",
                items: 1,
                slideBy: 1,
                mouseDrag: !1,
                controls: !0,
                nav: !1,
                loop: !1,
                preventScrollOnTouch: "force",
                touch: !1,
              }),
              e = (0, i.W)({
                container: ".product-info__text-list",
                items: 1,
                slideBy: 1,
                mouseDrag: !1,
                controls: !1,
                nav: !1,
                loop: !1,
              }),
              n = !1;
            t.events.on("transitionStart", function (t) {
              !(function (t) {
                console.log("init3dView"), console.log(t);
                var e = t.slideItems[t.displayIndex - 1].querySelectorAll(
                  ".product-info__view-content"
                );
                for (var n of (console.log(e), e))
                  !n.classList.contains(".cloudimage-360") &&
                    n.dataset.width &&
                    document.documentElement.clientWidth >= n.dataset.width &&
                    (console.log("2"),
                    n.classList.add("cloudimage-360"),
                    window.CI360.add(n.id));
              })(t);
            }),
              e.events.on("transitionStart", function (e, i) {
                n || ((n = !0), t.goTo(e.index), (n = !1));
              });
          }
          if (document.querySelector(".product-info__view-content.lazyload")) {
            var o = !1,
              u = document.getElementById("cloudimage-script");
            document.addEventListener("lazybeforeunveil", function (t) {
              console.log("lazybeforeunveil"), console.log(t.target);
              var e = t.target;
              if (void 0 !== t.target.dataset.folder && !o && u) {
                console.log("initialize 3d-view script"),
                  console.log(u),
                  u.addEventListener("load", function (t) {
                    console.log("script loaded"), (o = !0);
                    var n = e.dataset.width;
                    n &&
                      document.documentElement.clientWidth >= n &&
                      (0 == window.CI360._viewers.length && window.CI360.init(),
                      r(e, ".product-info")
                        ? r(e, ".tns-item").classList.contains(
                            "tns-slide-active"
                          ) &&
                          (console.log("1"),
                          e.classList.add("cloudimage-360"),
                          window.CI360.add(e.id))
                        : r(e, ".product-main__slider") && a(e));
                  });
                var n = u.getAttribute("delay");
                u.setAttribute("src", n);
              } else void 0 !== t.target.dataset.folder && o && r(e, ".product-main__slider") && a(e);
            });
          }
        });
      },
      5586: function (t, e, n) {
        "use strict";
        n.r(e);
        var i = n(8127);
        n(4783)(function () {
          document.querySelector(".product-list") &&
            (0, i.W)({
              container: ".product-list",
              items: 1,
              slideBy: 1,
              mouseDrag: !0,
              controls: !0,
              nav: !1,
              loop: !1,
              responsive: {
                700: { items: 2, slideBy: 1, gutter: 20 },
                1024: { items: 3 },
                1440: { gutter: 32 },
              },
            });
        });
      },
      9196: function (t, e, n) {
        "use strict";
        n.r(e);
        var i = n(8127);
        const o = n(4783),
          r = n(3180);
        n(6178),
          o(function () {
            var t,
              e = document.querySelectorAll(
                ".slider-main__media--video-bg video"
              );
            if (e.length > 0)
              for (let t = 0; t < e.length; t++) {
                let i = e[t];
                if (
                  (console.log("video", i.currentSrc),
                  0 == t && 1 == i.networkState && c(),
                  0 != t || i.currentSrc || (console.log("video no src"), c()),
                  i.currentSrc)
                ) {
                  console.log("video with src");
                  var n = r(i, ".slider-main__media")[0].querySelector(
                    ".slider-main__btn-play"
                  );
                  n &&
                    n.addEventListener("click", (t) => {
                      t.preventDefault(),
                        i.classList.contains("playing") ? a(i) : o(i);
                    }),
                    i.addEventListener("canplaythrough", (t) => {
                      c();
                    }),
                    i.addEventListener("pause", function () {
                      var t;
                      (t = i).classList.remove("playing"), (t.controls = !1);
                    }),
                    i.addEventListener("ended", function () {
                      o(i);
                    }),
                    i.addEventListener("play", function () {
                      u(i);
                    }),
                    i.addEventListener("playing", function () {
                      u(i);
                    }),
                    i.addEventListener("loaded", function () {
                      console.log("loaded");
                    });
                }
              }
            function o(t) {
              t.getElementsByTagName("source").length > 0 &&
                (t.play(), (t.controls = !0));
            }
            function a(t) {
              t.pause(), (t.controls = !1);
            }
            function u(t) {
              t.classList.add("playing");
            }
            function c() {
              document.querySelector(".slider-main") &&
                ((t && t.version) ||
                  (t = (0, i.W)({
                    container: ".slider-main",
                    items: 1,
                    slideBy: 1,
                    mode: "gallery",
                    autoplay: !0,
                    autoplayHoverPause: !1,
                    autoplayTimeout: 27e3,
                    autoplayButtonOutput: !1,
                    mouseDrag: !1,
                    controls: !0,
                    speed: 1e3,
                    nav: !1,
                    loop: !1,
                    onInit: function (t) {
                      o(t.slideItems[0].querySelector("video"));
                    },
                  })).events.on("transitionEnd", function (e) {
                    !(function () {
                      var t = document.querySelectorAll(
                        ".slider-main__media--video-bg video.playing"
                      );
                      if (t.length > 0) for (var e of t) a(e);
                    })();
                    var n = e.slideItems[e.index].querySelector("video");
                    n && o(n),
                      e.index === e.slideCount - 1 &&
                        setTimeout(function () {
                          t.goTo(0), t.play();
                        }, 27e3);
                  }));
            }
          });
      },
      4783: function (t) {
        t.exports = function (t) {
          (
            document.attachEvent
              ? "complete" === document.readyState
              : "loading" !== document.readyState
          )
            ? t()
            : document.addEventListener("DOMContentLoaded", t);
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
            var e = window.getComputedStyle(t)["line-height"];
            return "normal" === e
              ? 1.16 * parseFloat(window.getComputedStyle(o)["font-size"])
              : parseFloat(e);
          },
          i = function (t) {
            return (
              t.clientHeight -
              parseFloat(window.getComputedStyle(t)["padding-top"]) -
              parseFloat(window.getComputedStyle(t)["padding-bottom"])
            );
          },
          o = function (t, e) {
            for (
              var o = t.innerHTML.split(" "), r = e * n(t), a = i(t);
              a > r && o.length > 0;

            )
              o.pop(), (t.innerHTML = o.join(" ") + "..."), (a = i(t));
          };
        t.exports = function (t) {
          var n;
          if (
            (console.log("makeEllipsis"),
            console.log(t),
            "string" == typeof t
              ? (n = document.querySelectorAll(t))
              : "object" == typeof t && (n = [t]),
            console.log("ellipsisEls"),
            console.log(n),
            n)
          )
            for (var i of n) {
              var r = e(i);
              console.log(r), r && o(i, r);
            }
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
      6178: function (t, e, n) {
        var i = n(2670);
        t.exports = function (t, e, n) {
          for (var o = n ? t : t.parentNode; o && o !== document; ) {
            if (i(o, e)) return o;
            o = o.parentNode;
          }
        };
      },
      3096: function (t, e, n) {
        var i = "Expected a function",
          o = /^\s+|\s+$/g,
          r = /^[-+]0x[0-9a-f]+$/i,
          a = /^0b[01]+$/i,
          u = /^0o[0-7]+$/i,
          c = parseInt,
          s = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
          l = "object" == typeof self && self && self.Object === Object && self,
          d = s || l || Function("return this")(),
          f = Object.prototype.toString,
          v = Math.max,
          p = Math.min,
          m = function () {
            return d.Date.now();
          };
        function h(t) {
          var e = typeof t;
          return !!t && ("object" == e || "function" == e);
        }
        function y(t) {
          if ("number" == typeof t) return t;
          if (
            (function (t) {
              return (
                "symbol" == typeof t ||
                ((function (t) {
                  return !!t && "object" == typeof t;
                })(t) &&
                  "[object Symbol]" == f.call(t))
              );
            })(t)
          )
            return NaN;
          if (h(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = h(e) ? e + "" : e;
          }
          if ("string" != typeof t) return 0 === t ? t : +t;
          t = t.replace(o, "");
          var n = a.test(t);
          return n || u.test(t)
            ? c(t.slice(2), n ? 2 : 8)
            : r.test(t)
            ? NaN
            : +t;
        }
        t.exports = function (t, e, n) {
          var o = !0,
            r = !0;
          if ("function" != typeof t) throw new TypeError(i);
          return (
            h(n) &&
              ((o = "leading" in n ? !!n.leading : o),
              (r = "trailing" in n ? !!n.trailing : r)),
            (function (t, e, n) {
              var o,
                r,
                a,
                u,
                c,
                s,
                l = 0,
                d = !1,
                f = !1,
                g = !0;
              if ("function" != typeof t) throw new TypeError(i);
              function b(e) {
                var n = o,
                  i = r;
                return (o = r = void 0), (l = e), (u = t.apply(i, n));
              }
              function x(t) {
                return (l = t), (c = setTimeout(E, e)), d ? b(t) : u;
              }
              function w(t) {
                var n = t - s;
                return void 0 === s || n >= e || n < 0 || (f && t - l >= a);
              }
              function E() {
                var t = m();
                if (w(t)) return T(t);
                c = setTimeout(
                  E,
                  (function (t) {
                    var n = e - (t - s);
                    return f ? p(n, a - (t - l)) : n;
                  })(t)
                );
              }
              function T(t) {
                return (c = void 0), g && o ? b(t) : ((o = r = void 0), u);
              }
              function M() {
                var t = m(),
                  n = w(t);
                if (((o = arguments), (r = this), (s = t), n)) {
                  if (void 0 === c) return x(s);
                  if (f) return (c = setTimeout(E, e)), b(s);
                }
                return void 0 === c && (c = setTimeout(E, e)), u;
              }
              return (
                (e = y(e) || 0),
                h(n) &&
                  ((d = !!n.leading),
                  (a = (f = "maxWait" in n) ? v(y(n.maxWait) || 0, e) : a),
                  (g = "trailing" in n ? !!n.trailing : g)),
                (M.cancel = function () {
                  void 0 !== c && clearTimeout(c),
                    (l = 0),
                    (o = s = r = c = void 0);
                }),
                (M.flush = function () {
                  return void 0 === c ? u : T(m());
                }),
                M
              );
            })(t, e, { leading: o, maxWait: e, trailing: r })
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
            var i = t.parentNode.querySelectorAll(e), o = 0;
            o < i.length;
            ++o
          )
            if (i[o] == t) return !0;
          return !1;
        };
      },
      3588: function (t, e, n) {
        "use strict";
        function i(t, e, n, i) {
          "insertRule" in t
            ? t.insertRule(e + "{" + n + "}", i)
            : t.addRule(e, n, i);
        }
        n.d(e, {
          h: function () {
            return i;
          },
        }),
          n(3122);
      },
      5686: function (t, e, n) {
        "use strict";
        n.d(e, {
          c: function () {
            return o;
          },
        });
        var i = n(4789),
          o = i.q
            ? function (t, e) {
                (0, i.p)(t, e) || t.classList.add(e);
              }
            : function (t, e) {
                (0, i.p)(t, e) || (t.className += " " + e);
              };
      },
      9391: function (t, e, n) {
        "use strict";
        n.d(e, {
          o: function () {
            return o;
          },
        });
        var i = n(3735);
        function o(t, e, n) {
          for (var o in e) {
            var r = ["touchstart", "touchmove"].indexOf(o) >= 0 && !n && i.G;
            t.addEventListener(o, e[o], r);
          }
        }
      },
      3577: function (t, e, n) {
        "use strict";
        function i(t) {
          for (var e = [], n = 0, i = t.length; n < i; n++) e.push(t[n]);
          return e;
        }
        n.d(e, {
          Z: function () {
            return i;
          },
        });
      },
      4033: function (t, e, n) {
        "use strict";
        n.d(e, {
          N: function () {
            return o;
          },
        });
        var i = window,
          o =
            i.cancelAnimationFrame ||
            i.mozCancelAnimationFrame ||
            function (t) {
              clearTimeout(t);
            };
      },
      2418: function (t, e, n) {
        "use strict";
        n.d(e, {
          y: function () {
            return a;
          },
        });
        var i = n(4232),
          o = n(1514),
          r = n(1390);
        function a() {
          var t = document,
            e = (0, i.H)(),
            n = (0, o.y)(e),
            a = t.createElement("div"),
            u = !1;
          e.appendChild(a);
          try {
            for (
              var c,
                s = "(10px * 10)",
                l = ["calc" + s, "-moz-calc" + s, "-webkit-calc" + s],
                d = 0;
              d < 3;
              d++
            )
              if (((c = l[d]), (a.style.width = c), 100 === a.offsetWidth)) {
                u = c.replace(s, "");
                break;
              }
          } catch (t) {}
          return e.fake ? (0, r.Z)(e, n) : a.remove(), u;
        }
      },
      4342: function (t, e, n) {
        "use strict";
        function i(t) {
          return ["true", "false"].indexOf(t) >= 0 ? JSON.parse(t) : t;
        }
        n.d(e, {
          e: function () {
            return i;
          },
        });
      },
      1097: function (t, e, n) {
        "use strict";
        n.d(e, {
          q: function () {
            return i;
          },
        });
        var i = "classList" in document.createElement("_");
      },
      4219: function (t, e, n) {
        "use strict";
        function i(t, e) {
          var n = document.createElement("style");
          return (
            t && n.setAttribute("media", t),
            e && n.setAttribute("nonce", e),
            document.querySelector("head").appendChild(n),
            n.sheet ? n.sheet : n.styleSheet
          );
        }
        n.d(e, {
          d: function () {
            return i;
          },
        });
      },
      9801: function (t, e, n) {
        "use strict";
        n.d(e, {
          e: function () {
            return i;
          },
        });
        var i = document.documentElement;
      },
      8153: function (t, e, n) {
        "use strict";
        function i() {
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
        n.d(e, {
          z: function () {
            return i;
          },
        });
      },
      8058: function (t, e, n) {
        "use strict";
        function i() {
          for (
            var t, e, n, i = arguments[0] || {}, o = 1, r = arguments.length;
            o < r;
            o++
          )
            if (null !== (t = arguments[o]))
              for (e in t) i !== (n = t[e]) && void 0 !== n && (i[e] = n);
          return i;
        }
        n.d(e, {
          l: function () {
            return i;
          },
        });
      },
      8008: function (t, e, n) {
        "use strict";
        function i(t, e, n) {
          for (var i = 0, o = t.length; i < o; i++) e.call(n, t[i], i);
        }
        n.d(e, {
          E: function () {
            return i;
          },
        });
      },
      77: function (t, e, n) {
        "use strict";
        function i(t, e) {
          return t.getAttribute(e);
        }
        n.d(e, {
          U: function () {
            return i;
          },
        });
      },
      4232: function (t, e, n) {
        "use strict";
        function i() {
          var t = document,
            e = t.body;
          return e || ((e = t.createElement("body")).fake = !0), e;
        }
        n.d(e, {
          H: function () {
            return i;
          },
        });
      },
      3451: function (t, e, n) {
        "use strict";
        function i(t) {
          return ("insertRule" in t ? t.cssRules : t.rules).length;
        }
        n.d(e, {
          a: function () {
            return i;
          },
        });
      },
      8916: function (t, e, n) {
        "use strict";
        function i(t, e) {
          var n = !1;
          return (
            /^Webkit/.test(t)
              ? (n = "webkit" + e + "End")
              : /^O/.test(t)
              ? (n = "o" + e + "End")
              : t && (n = e.toLowerCase() + "end"),
            n
          );
        }
        n.d(e, {
          n: function () {
            return i;
          },
        });
      },
      8597: function (t, e, n) {
        "use strict";
        function i() {
          var t = window.tnsId;
          return (window.tnsId = t ? t + 1 : 1), "tns" + window.tnsId;
        }
        n.d(e, {
          G: function () {
            return i;
          },
        });
      },
      1459: function (t, e, n) {
        "use strict";
        function i(t, e) {
          var n = !1,
            i = Math.abs(90 - Math.abs(t));
          return (
            i >= 90 - e ? (n = "horizontal") : i <= e && (n = "vertical"), n
          );
        }
        n.d(e, {
          m: function () {
            return i;
          },
        });
      },
      8055: function (t, e, n) {
        "use strict";
        n.d(e, {
          R: function () {
            return a;
          },
        });
        var i = n(4232),
          o = n(1514),
          r = n(1390);
        function a(t) {
          if (!t) return !1;
          if (!window.getComputedStyle) return !1;
          var e,
            n = document,
            a = (0, i.H)(),
            u = (0, o.y)(a),
            c = n.createElement("p"),
            s = t.length > 9 ? "-" + t.slice(0, -9).toLowerCase() + "-" : "";
          return (
            (s += "transform"),
            a.insertBefore(c, null),
            (c.style[t] = "translate3d(1px,1px,1px)"),
            (e = window.getComputedStyle(c).getPropertyValue(s)),
            a.fake ? (0, r.Z)(a, u) : c.remove(),
            void 0 !== e && e.length > 0 && "none" !== e
          );
        }
      },
      1786: function (t, e, n) {
        "use strict";
        function i(t, e) {
          return t.hasAttribute(e);
        }
        n.d(e, {
          B: function () {
            return i;
          },
        });
      },
      4789: function (t, e, n) {
        "use strict";
        n.d(e, {
          p: function () {
            return o;
          },
          q: function () {
            return i.q;
          },
        });
        var i = n(1097),
          o = i.q
            ? function (t, e) {
                return t.classList.contains(e);
              }
            : function (t, e) {
                return t.className.indexOf(e) >= 0;
              };
      },
      3676: function (t, e, n) {
        "use strict";
        function i(t, e) {
          "none" !== t.style.display && (t.style.display = "none");
        }
        n.d(e, {
          e: function () {
            return i;
          },
        });
      },
      451: function (t, e, n) {
        "use strict";
        function i(t) {
          return void 0 !== t.item;
        }
        n.d(e, {
          M: function () {
            return i;
          },
        });
      },
      8217: function (t, e, n) {
        "use strict";
        function i(t) {
          return "none" !== window.getComputedStyle(t).display;
        }
        n.d(e, {
          p: function () {
            return i;
          },
        });
      },
      4768: function (t, e, n) {
        "use strict";
        function i(t, e, n, i, o, r, a) {
          var u = Math.min(r, 10),
            c = o.indexOf("%") >= 0 ? "%" : "px",
            s =
              ((o = o.replace(c, "")),
              Number(t.style[e].replace(n, "").replace(i, "").replace(c, ""))),
            l = ((o - s) / r) * u;
          setTimeout(function o() {
            (r -= u),
              (s += l),
              (t.style[e] = n + s + c + i),
              r > 0 ? setTimeout(o, u) : a();
          }, u);
        }
        n.d(e, {
          F: function () {
            return i;
          },
        });
      },
      3573: function (t, e, n) {
        "use strict";
        n.d(e, {
          K: function () {
            return a;
          },
        });
        var i = n(4232),
          o = n(1514),
          r = n(1390);
        function a() {
          if (window.matchMedia || window.msMatchMedia) return !0;
          var t,
            e = document,
            n = (0, i.H)(),
            a = (0, o.y)(n),
            u = e.createElement("div"),
            c = e.createElement("style"),
            s =
              "@media all and (min-width:1px){.tns-mq-test{position:absolute}}";
          return (
            (c.type = "text/css"),
            (u.className = "tns-mq-test"),
            n.appendChild(c),
            n.appendChild(u),
            c.styleSheet
              ? (c.styleSheet.cssText = s)
              : c.appendChild(e.createTextNode(s)),
            (t = window.getComputedStyle
              ? window.getComputedStyle(u).position
              : u.currentStyle.position),
            n.fake ? (0, r.Z)(n, a) : u.remove(),
            "absolute" === t
          );
        }
      },
      3735: function (t, e, n) {
        "use strict";
        n.d(e, {
          G: function () {
            return r;
          },
        });
        var i = !1;
        try {
          var o = Object.defineProperty({}, "passive", {
            get: function () {
              i = !0;
            },
          });
          window.addEventListener("test", null, o);
        } catch (t) {}
        var r = !!i && { passive: !0 };
      },
      764: function (t, e, n) {
        "use strict";
        n.d(e, {
          t: function () {
            return a;
          },
        });
        var i = n(4232),
          o = n(1514),
          r = n(1390);
        function a() {
          var t,
            e = document,
            n = (0, i.H)(),
            a = (0, o.y)(n),
            u = e.createElement("div"),
            c = e.createElement("div"),
            s = "";
          (u.className = "tns-t-subp2"), (c.className = "tns-t-ct");
          for (var l = 0; l < 70; l++) s += "<div></div>";
          return (
            (c.innerHTML = s),
            u.appendChild(c),
            n.appendChild(u),
            (t =
              Math.abs(
                u.getBoundingClientRect().left -
                  c.children[67].getBoundingClientRect().left
              ) < 2),
            n.fake ? (0, r.Z)(n, a) : u.remove(),
            t
          );
        }
      },
      3122: function (t, e, n) {
        "use strict";
        n.d(e, {
          W: function () {
            return o;
          },
        });
        var i = window,
          o =
            i.requestAnimationFrame ||
            i.webkitRequestAnimationFrame ||
            i.mozRequestAnimationFrame ||
            i.msRequestAnimationFrame ||
            function (t) {
              return setTimeout(t, 16);
            };
      },
      4378: function (t, e, n) {
        "use strict";
        n.d(e, {
          j: function () {
            return o;
          },
        });
        var i = n(451);
        function o(t, e) {
          t = (0, i.M)(t) || t instanceof Array ? t : [t];
          for (
            var n = (e = e instanceof Array ? e : [e]).length, o = t.length;
            o--;

          )
            for (var r = n; r--; ) t[o].removeAttribute(e[r]);
        }
      },
      7106: function (t, e, n) {
        "use strict";
        function i(t, e) {
          "deleteRule" in t ? t.deleteRule(e) : t.removeRule(e);
        }
        n.d(e, {
          v: function () {
            return i;
          },
        }),
          n(3122);
      },
      5505: function (t, e, n) {
        "use strict";
        n.d(e, {
          I: function () {
            return o;
          },
        });
        var i = n(4789),
          o = i.q
            ? function (t, e) {
                (0, i.p)(t, e) && t.classList.remove(e);
              }
            : function (t, e) {
                (0, i.p)(t, e) && (t.className = t.className.replace(e, ""));
              };
      },
      6850: function (t, e, n) {
        "use strict";
        n.d(e, {
          O: function () {
            return o;
          },
        });
        var i = n(3735);
        function o(t, e) {
          for (var n in e) {
            var o = ["touchstart", "touchmove"].indexOf(n) >= 0 && i.G;
            t.removeEventListener(n, e[n], o);
          }
        }
      },
      1390: function (t, e, n) {
        "use strict";
        n.d(e, {
          Z: function () {
            return o;
          },
        });
        var i = n(9801);
        function o(t, e) {
          t.fake && (t.remove(), (i.e.style.overflow = e), i.e.offsetHeight);
        }
      },
      431: function (t, e, n) {
        "use strict";
        n.d(e, {
          p: function () {
            return o;
          },
        });
        var i = n(451);
        function o(t, e) {
          if (
            ((t = (0, i.M)(t) || t instanceof Array ? t : [t]),
            "[object Object]" === Object.prototype.toString.call(e))
          )
            for (var n = t.length; n--; )
              for (var o in e) t[n].setAttribute(o, e[o]);
        }
      },
      1514: function (t, e, n) {
        "use strict";
        n.d(e, {
          y: function () {
            return o;
          },
        });
        var i = n(9801);
        function o(t) {
          var e = "";
          return (
            t.fake &&
              ((e = i.e.style.overflow),
              (t.style.background = ""),
              (t.style.overflow = i.e.style.overflow = "hidden"),
              i.e.appendChild(t)),
            e
          );
        }
      },
      3778: function (t, e, n) {
        "use strict";
        function i(t, e, n, i) {
          if (i)
            try {
              t.setItem(e, n);
            } catch (t) {}
          return n;
        }
        n.d(e, {
          q: function () {
            return i;
          },
        });
      },
      844: function (t, e, n) {
        "use strict";
        function i(t, e) {
          "none" === t.style.display && (t.style.display = "");
        }
        n.d(e, {
          V: function () {
            return i;
          },
        });
      },
      9173: function (t, e, n) {
        "use strict";
        function i(t, e) {
          return Math.atan2(t, e) * (180 / Math.PI);
        }
        n.d(e, {
          D: function () {
            return i;
          },
        });
      },
      5391: function (t, e, n) {
        "use strict";
        function i(t) {
          if ("string" == typeof t) {
            var e = [t],
              n = t.charAt(0).toUpperCase() + t.substr(1);
            ["Webkit", "Moz", "ms", "O"].forEach(function (i) {
              ("ms" === i && "transform" !== t) || e.push(i + n);
            }),
              (t = e);
          }
          for (
            var i = document.createElement("fakeelement"), o = (t.length, 0);
            o < t.length;
            o++
          ) {
            var r = t[o];
            if (void 0 !== i.style[r]) return r;
          }
          return !1;
        }
        n.d(e, {
          Z: function () {
            return i;
          },
        });
      },
      8127: function (t, e, n) {
        "use strict";
        n.d(e, {
          W: function () {
            return H;
          },
        });
        var i = n(3122),
          o = n(4033),
          r = n(8058),
          a = n(4342),
          u = n(3778),
          c = n(8597),
          s = n(2418),
          l = n(764),
          d = n(3573),
          f = n(4219),
          v = n(3588),
          p = n(7106),
          m = n(3451),
          h = n(9173),
          y = n(1459),
          g = n(8008),
          b = n(4789),
          x = n(5686),
          w = n(5505),
          E = n(1786),
          T = n(77),
          M = n(431),
          S = n(4378),
          C = n(3577),
          L = n(3676),
          O = n(844),
          B = n(8217),
          I = n(5391),
          N = n(8055),
          _ = n(8916),
          A = n(9391),
          q = n(6850),
          W = n(8153),
          D = n(4768);
        Object.keys ||
          (Object.keys = function (t) {
            var e = [];
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
            return e;
          }),
          "remove" in Element.prototype ||
            (Element.prototype.remove = function () {
              this.parentNode && this.parentNode.removeChild(this);
            });
        var H = function (t) {
          t = (0, r.l)(
            {
              container: ".slider",
              mode: "carousel",
              axis: "horizontal",
              items: 1,
              gutter: 0,
              edgePadding: 0,
              fixedWidth: !1,
              autoWidth: !1,
              viewportMax: !1,
              slideBy: 1,
              center: !1,
              controls: !0,
              controlsPosition: "top",
              controlsText: ["prev", "next"],
              controlsContainer: !1,
              prevButton: !1,
              nextButton: !1,
              nav: !0,
              navPosition: "top",
              navContainer: !1,
              navAsThumbnails: !1,
              arrowKeys: !1,
              speed: 300,
              autoplay: !1,
              autoplayPosition: "top",
              autoplayTimeout: 5e3,
              autoplayDirection: "forward",
              autoplayText: ["start", "stop"],
              autoplayHoverPause: !1,
              autoplayButton: !1,
              autoplayButtonOutput: !0,
              autoplayResetOnVisibility: !0,
              animateIn: "tns-fadeIn",
              animateOut: "tns-fadeOut",
              animateNormal: "tns-normal",
              animateDelay: !1,
              loop: !0,
              rewind: !1,
              autoHeight: !1,
              responsive: !1,
              lazyload: !1,
              lazyloadSelector: ".tns-lazy-img",
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
            k = { ENTER: 13, SPACE: 32, LEFT: 37, RIGHT: 39 },
            j = {},
            P = t.useLocalStorage;
          if (P) {
            var R = navigator.userAgent,
              z = new Date();
            try {
              (j = n.localStorage)
                ? (j.setItem(z, z), (P = j.getItem(z) == z), j.removeItem(z))
                : (P = !1),
                P || (j = {});
            } catch (t) {
              P = !1;
            }
            P &&
              (j.tnsApp &&
                j.tnsApp !== R &&
                [
                  "tC",
                  "tPL",
                  "tMQ",
                  "tTf",
                  "t3D",
                  "tTDu",
                  "tTDe",
                  "tADu",
                  "tADe",
                  "tTE",
                  "tAE",
                ].forEach(function (t) {
                  j.removeItem(t);
                }),
              (localStorage.tnsApp = R));
          }
          var F = j.tC ? (0, a.e)(j.tC) : (0, u.q)(j, "tC", (0, s.y)(), P),
            V = j.tPL ? (0, a.e)(j.tPL) : (0, u.q)(j, "tPL", (0, l.t)(), P),
            Z = j.tMQ ? (0, a.e)(j.tMQ) : (0, u.q)(j, "tMQ", (0, d.K)(), P),
            G = j.tTf
              ? (0, a.e)(j.tTf)
              : (0, u.q)(j, "tTf", (0, I.Z)("transform"), P),
            U = j.t3D ? (0, a.e)(j.t3D) : (0, u.q)(j, "t3D", (0, N.R)(G), P),
            K = j.tTDu
              ? (0, a.e)(j.tTDu)
              : (0, u.q)(j, "tTDu", (0, I.Z)("transitionDuration"), P),
            Q = j.tTDe
              ? (0, a.e)(j.tTDe)
              : (0, u.q)(j, "tTDe", (0, I.Z)("transitionDelay"), P),
            X = j.tADu
              ? (0, a.e)(j.tADu)
              : (0, u.q)(j, "tADu", (0, I.Z)("animationDuration"), P),
            Y = j.tADe
              ? (0, a.e)(j.tADe)
              : (0, u.q)(j, "tADe", (0, I.Z)("animationDelay"), P),
            $ = j.tTE
              ? (0, a.e)(j.tTE)
              : (0, u.q)(j, "tTE", (0, _.n)(K, "Transition"), P),
            J = j.tAE
              ? (0, a.e)(j.tAE)
              : (0, u.q)(j, "tAE", (0, _.n)(X, "Animation"), P),
            tt = n.console && "function" == typeof n.console.warn,
            et = [
              "container",
              "controlsContainer",
              "prevButton",
              "nextButton",
              "navContainer",
              "autoplayButton",
            ],
            nt = {};
          if (
            (et.forEach(function (n) {
              if ("string" == typeof t[n]) {
                var i = t[n],
                  o = e.querySelector(i);
                if (((nt[n] = i), !o || !o.nodeName))
                  return void (tt && console.warn("Can't find", t[n]));
                t[n] = o;
              }
            }),
            !(t.container.children.length < 1))
          ) {
            var it = t.responsive,
              ot = t.nested,
              rt = "carousel" === t.mode;
            if (it) {
              0 in it && ((t = (0, r.l)(t, it[0])), delete it[0]);
              var at = {};
              for (var ut in it) {
                var ct = it[ut];
                (ct = "number" == typeof ct ? { items: ct } : ct),
                  (at[ut] = ct);
              }
              (it = at), (at = null);
            }
            if (
              (rt ||
                (function t(e) {
                  for (var n in e)
                    rt ||
                      ("slideBy" === n && (e[n] = "page"),
                      "edgePadding" === n && (e[n] = !1),
                      "autoHeight" === n && (e[n] = !1)),
                      "responsive" === n && t(e[n]);
                })(t),
              !rt)
            ) {
              (t.axis = "horizontal"),
                (t.slideBy = "page"),
                (t.edgePadding = !1);
              var st = t.animateIn,
                lt = t.animateOut,
                dt = t.animateDelay,
                ft = t.animateNormal;
            }
            var vt,
              pt,
              mt = "horizontal" === t.axis,
              ht = e.createElement("div"),
              yt = e.createElement("div"),
              gt = t.container,
              bt = gt.parentNode,
              xt = gt.outerHTML,
              wt = gt.children,
              Et = wt.length,
              Tt = Dn(),
              Mt = !1;
            it && ii(), rt && (gt.className += " tns-vpfix");
            var St,
              Ct,
              Lt,
              Ot,
              Bt,
              It = t.autoWidth,
              Nt = Rn("fixedWidth"),
              _t = Rn("edgePadding"),
              At = Rn("gutter"),
              qt = jn(),
              Wt = Rn("center"),
              Dt = It ? 1 : Math.floor(Rn("items")),
              Ht = Rn("slideBy"),
              kt = t.viewportMax || t.fixedWidthViewportWidth,
              jt = Rn("arrowKeys"),
              Pt = Rn("speed"),
              Rt = t.rewind,
              zt = !Rt && t.loop,
              Ft = Rn("autoHeight"),
              Vt = Rn("controls"),
              Zt = Rn("controlsText"),
              Gt = Rn("nav"),
              Ut = Rn("touch"),
              Kt = Rn("mouseDrag"),
              Qt = Rn("autoplay"),
              Xt = Rn("autoplayTimeout"),
              Yt = Rn("autoplayText"),
              $t = Rn("autoplayHoverPause"),
              Jt = Rn("autoplayResetOnVisibility"),
              te = (0, f.d)(null, Rn("nonce")),
              ee = t.lazyload,
              ne = t.lazyloadSelector,
              ie = [],
              oe = zt
                ? ((Ot = (function () {
                    if (It || (Nt && !kt)) return Et - 1;
                    var e = Nt ? "fixedWidth" : "items",
                      n = [];
                    if (((Nt || t[e] < Et) && n.push(t[e]), it))
                      for (var i in it) {
                        var o = it[i][e];
                        o && (Nt || o < Et) && n.push(o);
                      }
                    return (
                      n.length || n.push(0),
                      Math.ceil(
                        Nt
                          ? kt / Math.min.apply(null, n)
                          : Math.max.apply(null, n)
                      )
                    );
                  })()),
                  (Bt = rt ? Math.ceil((5 * Ot - Et) / 2) : 4 * Ot - Et),
                  (Bt = Math.max(Ot, Bt)),
                  Pn("edgePadding") ? Bt + 1 : Bt)
                : 0,
              re = rt ? Et + 2 * oe : Et + oe,
              ae = !((!Nt && !It) || zt),
              ue = Nt ? Bi() : null,
              ce = !rt || !zt,
              se = mt ? "left" : "top",
              le = "",
              de = "",
              fe = Nt
                ? function () {
                    return Wt && !zt ? Et - 1 : Math.ceil(-ue / (Nt + At));
                  }
                : It
                ? function () {
                    for (var t = 0; t < re; t++) if (St[t] >= -ue) return t;
                  }
                : function () {
                    return Wt && rt && !zt
                      ? Et - 1
                      : zt || rt
                      ? Math.max(0, re - Math.ceil(Dt))
                      : re - 1;
                  },
              ve = An(Rn("startIndex")),
              pe = ve,
              me = (_n(), 0),
              he = It ? null : fe(),
              ye = t.preventActionWhenRunning,
              ge = t.swipeAngle,
              be = !ge || "?",
              xe = !1,
              we = t.onInit,
              Ee = new W.z(),
              Te = " tns-slider tns-" + t.mode,
              Me = gt.id || (0, c.G)(),
              Se = Rn("disable"),
              Ce = !1,
              Le = t.freezable,
              Oe = !(!Le || It) && ni(),
              Be = !1,
              Ie = {
                click: ki,
                keydown: function (t) {
                  t = Gi(t);
                  var e = [k.LEFT, k.RIGHT].indexOf(t.keyCode);
                  e >= 0 &&
                    (0 === e
                      ? $e.disabled || ki(t, -1)
                      : Je.disabled || ki(t, 1));
                },
              },
              Ne = {
                click: function (t) {
                  if (xe) {
                    if (ye) return;
                    Di();
                  }
                  for (
                    var e = Ui((t = Gi(t)));
                    e !== on && !(0, E.B)(e, "data-nav");

                  )
                    e = e.parentNode;
                  if ((0, E.B)(e, "data-nav")) {
                    var n = (cn = Number((0, T.U)(e, "data-nav"))),
                      i = Nt || It ? (n * Et) / an : n * Dt;
                    Hi(je ? n : Math.min(Math.ceil(i), Et - 1), t),
                      sn === n && (mn && Fi(), (cn = -1));
                  }
                },
                keydown: function (t) {
                  t = Gi(t);
                  var n = e.activeElement;
                  if ((0, E.B)(n, "data-nav")) {
                    var i = [k.LEFT, k.RIGHT, k.ENTER, k.SPACE].indexOf(
                        t.keyCode
                      ),
                      o = Number((0, T.U)(n, "data-nav"));
                    i >= 0 &&
                      (0 === i
                        ? o > 0 && Zi(nn[o - 1])
                        : 1 === i
                        ? o < an - 1 && Zi(nn[o + 1])
                        : ((cn = o), Hi(o, t)));
                  }
                },
              },
              _e = {
                mouseover: function () {
                  mn && (Pi(), (hn = !0));
                },
                mouseout: function () {
                  hn && (ji(), (hn = !1));
                },
              },
              Ae = {
                visibilitychange: function () {
                  e.hidden ? mn && (Pi(), (gn = !0)) : gn && (ji(), (gn = !1));
                },
              },
              qe = {
                keydown: function (t) {
                  t = Gi(t);
                  var e = [k.LEFT, k.RIGHT].indexOf(t.keyCode);
                  e >= 0 && ki(t, 0 === e ? -1 : 1);
                },
              },
              We = {
                touchstart: Yi,
                touchmove: $i,
                touchend: to,
                touchcancel: to,
              },
              De = {
                mousedown: Yi,
                mousemove: $i,
                mouseup: to,
                mouseleave: to,
              },
              He = Pn("controls"),
              ke = Pn("nav"),
              je = !!It || t.navAsThumbnails,
              Pe = Pn("autoplay"),
              Re = Pn("touch"),
              ze = Pn("mouseDrag"),
              Fe = "tns-slide-active",
              Ve = "tns-slide-cloned",
              Ze = "tns-complete",
              Ge = {
                load: function (t) {
                  fi(Ui(t));
                },
                error: function (t) {
                  var e;
                  (e = Ui(t)), (0, x.c)(e, "failed"), vi(e);
                },
              },
              Ue = "force" === t.preventScrollOnTouch;
            if (He)
              var Ke,
                Qe,
                Xe = t.controlsContainer,
                Ye = t.controlsContainer ? t.controlsContainer.outerHTML : "",
                $e = t.prevButton,
                Je = t.nextButton,
                tn = t.prevButton ? t.prevButton.outerHTML : "",
                en = t.nextButton ? t.nextButton.outerHTML : "";
            if (ke)
              var nn,
                on = t.navContainer,
                rn = t.navContainer ? t.navContainer.outerHTML : "",
                an = It ? Et : no(),
                un = 0,
                cn = -1,
                sn = Wn(),
                ln = sn,
                dn = "tns-nav-active",
                fn = "Carousel Page ",
                vn = " (Current Slide)";
            if (Pe)
              var pn,
                mn,
                hn,
                yn,
                gn,
                bn = "forward" === t.autoplayDirection ? 1 : -1,
                xn = t.autoplayButton,
                wn = t.autoplayButton ? t.autoplayButton.outerHTML : "",
                En = [
                  "<span class='tns-visually-hidden'>",
                  " animation</span>",
                ];
            if (Re || ze)
              var Tn,
                Mn,
                Sn = {},
                Cn = {},
                Ln = !1,
                On = mt
                  ? function (t, e) {
                      return t.x - e.x;
                    }
                  : function (t, e) {
                      return t.y - e.y;
                    };
            It || Nn(Se || Oe),
              G &&
                ((se = G),
                (le = "translate"),
                U
                  ? ((le += mt ? "3d(" : "3d(0px, "),
                    (de = mt ? ", 0px, 0px)" : ", 0px)"))
                  : ((le += mt ? "X(" : "Y("), (de = ")"))),
              rt && (gt.className = gt.className.replace("tns-vpfix", "")),
              (function () {
                if (
                  (Pn("gutter"),
                  (ht.className = "tns-outer"),
                  (yt.className = "tns-inner"),
                  (ht.id = Me + "-ow"),
                  (yt.id = Me + "-iw"),
                  "" === gt.id && (gt.id = Me),
                  (Te += V || It ? " tns-subpixel" : " tns-no-subpixel"),
                  (Te += F ? " tns-calc" : " tns-no-calc"),
                  It && (Te += " tns-autowidth"),
                  (Te += " tns-" + t.axis),
                  (gt.className += Te),
                  rt
                    ? (((vt = e.createElement("div")).id = Me + "-mw"),
                      (vt.className = "tns-ovh"),
                      ht.appendChild(vt),
                      vt.appendChild(yt))
                    : ht.appendChild(yt),
                  Ft && ((vt || yt).className += " tns-ah"),
                  bt.insertBefore(ht, gt),
                  yt.appendChild(gt),
                  (0, g.E)(wt, function (t, e) {
                    (0, x.c)(t, "tns-item"),
                      t.id || (t.id = Me + "-item" + e),
                      !rt && ft && (0, x.c)(t, ft),
                      (0, M.p)(t, { "aria-hidden": "true", tabindex: "-1" });
                  }),
                  oe)
                ) {
                  for (
                    var n = e.createDocumentFragment(),
                      i = e.createDocumentFragment(),
                      o = oe;
                    o--;

                  ) {
                    var r = o % Et,
                      a = wt[r].cloneNode(!0);
                    if (
                      ((0, x.c)(a, Ve),
                      (0, S.j)(a, "id"),
                      i.insertBefore(a, i.firstChild),
                      rt)
                    ) {
                      var u = wt[Et - 1 - r].cloneNode(!0);
                      (0, x.c)(u, Ve), (0, S.j)(u, "id"), n.appendChild(u);
                    }
                  }
                  gt.insertBefore(n, gt.firstChild),
                    gt.appendChild(i),
                    (wt = gt.children);
                }
              })(),
              (function () {
                if (!rt)
                  for (var e = ve, i = ve + Math.min(Et, Dt); e < i; e++) {
                    var o = wt[e];
                    (o.style.left = (100 * (e - ve)) / Dt + "%"),
                      (0, x.c)(o, st),
                      (0, w.I)(o, ft);
                  }
                if (
                  (mt &&
                    (V || It
                      ? ((0, v.h)(
                          te,
                          "#" + Me + " > .tns-item",
                          "font-size:" +
                            n.getComputedStyle(wt[0]).fontSize +
                            ";",
                          (0, m.a)(te)
                        ),
                        (0, v.h)(te, "#" + Me, "font-size:0;", (0, m.a)(te)))
                      : rt &&
                        (0, g.E)(wt, function (t, e) {
                          t.style.marginLeft = (function (t) {
                            return F
                              ? F + "(" + 100 * t + "% / " + re + ")"
                              : (100 * t) / re + "%";
                          })(e);
                        })),
                  Z)
                ) {
                  if (K) {
                    var r = vt && t.autoHeight ? Un(t.speed) : "";
                    (0, v.h)(te, "#" + Me + "-mw", r, (0, m.a)(te));
                  }
                  (r = zn(
                    t.edgePadding,
                    t.gutter,
                    t.fixedWidth,
                    t.speed,
                    t.autoHeight
                  )),
                    (0, v.h)(te, "#" + Me + "-iw", r, (0, m.a)(te)),
                    rt &&
                      ((r =
                        mt && !It
                          ? "width:" + Fn(t.fixedWidth, t.gutter, t.items) + ";"
                          : ""),
                      K && (r += Un(Pt)),
                      (0, v.h)(te, "#" + Me, r, (0, m.a)(te))),
                    (r = mt && !It ? Vn(t.fixedWidth, t.gutter, t.items) : ""),
                    t.gutter && (r += Zn(t.gutter)),
                    rt || (K && (r += Un(Pt)), X && (r += Kn(Pt))),
                    r &&
                      (0, v.h)(te, "#" + Me + " > .tns-item", r, (0, m.a)(te));
                } else
                  rt && Ft && (vt.style[K] = Pt / 1e3 + "s"),
                    (yt.style.cssText = zn(_t, At, Nt, Ft)),
                    rt && mt && !It && (gt.style.width = Fn(Nt, At, Dt)),
                    (r = mt && !It ? Vn(Nt, At, Dt) : ""),
                    At && (r += Zn(At)),
                    r &&
                      (0, v.h)(te, "#" + Me + " > .tns-item", r, (0, m.a)(te));
                if (it && Z)
                  for (var a in it) {
                    a = parseInt(a);
                    var u = it[a],
                      c = ((r = ""), ""),
                      s = "",
                      l = "",
                      d = "",
                      f = It ? null : Rn("items", a),
                      p = Rn("fixedWidth", a),
                      h = Rn("speed", a),
                      y = Rn("edgePadding", a),
                      b = Rn("autoHeight", a),
                      E = Rn("gutter", a);
                    K &&
                      vt &&
                      Rn("autoHeight", a) &&
                      "speed" in u &&
                      (c = "#" + Me + "-mw{" + Un(h) + "}"),
                      ("edgePadding" in u || "gutter" in u) &&
                        (s = "#" + Me + "-iw{" + zn(y, E, p, h, b) + "}"),
                      rt &&
                        mt &&
                        !It &&
                        ("fixedWidth" in u ||
                          "items" in u ||
                          (Nt && "gutter" in u)) &&
                        (l = "width:" + Fn(p, E, f) + ";"),
                      K && "speed" in u && (l += Un(h)),
                      l && (l = "#" + Me + "{" + l + "}"),
                      ("fixedWidth" in u ||
                        (Nt && "gutter" in u) ||
                        (!rt && "items" in u)) &&
                        (d += Vn(p, E, f)),
                      "gutter" in u && (d += Zn(E)),
                      !rt &&
                        "speed" in u &&
                        (K && (d += Un(h)), X && (d += Kn(h))),
                      d && (d = "#" + Me + " > .tns-item{" + d + "}"),
                      (r = c + s + l + d) &&
                        te.insertRule(
                          "@media (min-width: " + a / 16 + "em) {" + r + "}",
                          te.cssRules.length
                        );
                  }
              })(),
              Qn();
            var Bn = zt
                ? rt
                  ? function () {
                      var t = me,
                        e = he;
                      (t += Ht),
                        (e -= Ht),
                        _t
                          ? ((t += 1), (e -= 1))
                          : Nt && (qt + At) % (Nt + At) && (e -= 1),
                        oe && (ve > e ? (ve -= Et) : ve < t && (ve += Et));
                    }
                  : function () {
                      if (ve > he) for (; ve >= me + Et; ) ve -= Et;
                      else if (ve < me) for (; ve <= he - Et; ) ve += Et;
                    }
                : function () {
                    ve = Math.max(me, Math.min(he, ve));
                  },
              In = rt
                ? function () {
                    Li(gt, ""),
                      K || !Pt
                        ? (_i(), (Pt && (0, B.p)(gt)) || Di())
                        : (0, D.F)(gt, se, le, de, Ii(), Pt, Di),
                      mt || eo();
                  }
                : function () {
                    ie = [];
                    var t = {};
                    (t[$] = t[J] = Di),
                      (0, q.O)(wt[pe], t),
                      (0, A.o)(wt[ve], t),
                      Ai(pe, st, lt, !0),
                      Ai(ve, ft, st),
                      ($ && J && Pt && (0, B.p)(gt)) || Di();
                  };
            return {
              version: "2.9.4",
              getInfo: oo,
              events: Ee,
              goTo: Hi,
              play: function () {
                Qt && !mn && (zi(), (yn = !1));
              },
              pause: function () {
                mn && (Fi(), (yn = !0));
              },
              isOn: Mt,
              updateSliderHeight: bi,
              refresh: Qn,
              destroy: function () {
                if (
                  ((te.disabled = !0),
                  te.ownerNode && te.ownerNode.remove(),
                  (0, q.O)(n, { resize: ti }),
                  jt && (0, q.O)(e, qe),
                  Xe && (0, q.O)(Xe, Ie),
                  on && (0, q.O)(on, Ne),
                  (0, q.O)(gt, _e),
                  (0, q.O)(gt, Ae),
                  xn && (0, q.O)(xn, { click: Vi }),
                  Qt && clearInterval(pn),
                  rt && $)
                ) {
                  var i = {};
                  (i[$] = Di), (0, q.O)(gt, i);
                }
                Ut && (0, q.O)(gt, We), Kt && (0, q.O)(gt, De);
                var o = [xt, Ye, tn, en, rn, wn];
                for (var r in (et.forEach(function (e, n) {
                  var i = "container" === e ? ht : t[e];
                  if ("object" == typeof i && i) {
                    var r =
                        !!i.previousElementSibling && i.previousElementSibling,
                      a = i.parentNode;
                    (i.outerHTML = o[n]),
                      (t[e] = r ? r.nextElementSibling : a.firstElementChild);
                  }
                }),
                (et =
                  st =
                  lt =
                  dt =
                  ft =
                  mt =
                  ht =
                  yt =
                  gt =
                  bt =
                  xt =
                  wt =
                  Et =
                  pt =
                  Tt =
                  It =
                  Nt =
                  _t =
                  At =
                  qt =
                  Dt =
                  Ht =
                  kt =
                  jt =
                  Pt =
                  Rt =
                  zt =
                  Ft =
                  te =
                  ee =
                  St =
                  ie =
                  oe =
                  re =
                  ae =
                  ue =
                  ce =
                  se =
                  le =
                  de =
                  fe =
                  ve =
                  pe =
                  me =
                  he =
                  ge =
                  be =
                  xe =
                  we =
                  Ee =
                  Te =
                  Me =
                  Se =
                  Ce =
                  Le =
                  Oe =
                  Be =
                  Ie =
                  Ne =
                  _e =
                  Ae =
                  qe =
                  We =
                  De =
                  He =
                  ke =
                  je =
                  Pe =
                  Re =
                  ze =
                  Fe =
                  Ze =
                  Ge =
                  Ct =
                  Vt =
                  Zt =
                  Xe =
                  Ye =
                  $e =
                  Je =
                  Ke =
                  Qe =
                  Gt =
                  on =
                  rn =
                  nn =
                  an =
                  un =
                  cn =
                  sn =
                  ln =
                  dn =
                  fn =
                  vn =
                  Qt =
                  Xt =
                  bn =
                  Yt =
                  $t =
                  xn =
                  wn =
                  Jt =
                  En =
                  pn =
                  mn =
                  hn =
                  yn =
                  gn =
                  Sn =
                  Cn =
                  Tn =
                  Ln =
                  Mn =
                  On =
                  Ut =
                  Kt =
                    null),
                this))
                  "rebuild" !== r && (this[r] = null);
                Mt = !1;
              },
              rebuild: function () {
                return H((0, r.l)(t, nt));
              },
            };
          }
          function Nn(t) {
            t && (Vt = Gt = Ut = Kt = jt = Qt = $t = Jt = !1);
          }
          function _n() {
            for (var t = rt ? ve - oe : ve; t < 0; ) t += Et;
            return (t % Et) + 1;
          }
          function An(t) {
            return (
              (t = t ? Math.max(0, Math.min(zt ? Et - 1 : Et - Dt, t)) : 0),
              rt ? t + oe : t
            );
          }
          function qn(t) {
            for (null == t && (t = ve), rt && (t -= oe); t < 0; ) t += Et;
            return Math.floor(t % Et);
          }
          function Wn() {
            var t,
              e = qn();
            return (
              (t = je
                ? e
                : Nt || It
                ? Math.ceil(((e + 1) * an) / Et - 1)
                : Math.floor(e / Dt)),
              !zt && rt && ve === he && (t = an - 1),
              t
            );
          }
          function Dn() {
            return (
              n.innerWidth ||
              e.documentElement.clientWidth ||
              e.body.clientWidth
            );
          }
          function Hn(t) {
            return "top" === t ? "afterbegin" : "beforeend";
          }
          function kn(t) {
            if (null != t) {
              var n,
                i,
                o = e.createElement("div");
              return (
                t.appendChild(o),
                (i = (n = o.getBoundingClientRect()).right - n.left),
                o.remove(),
                i || kn(t.parentNode)
              );
            }
          }
          function jn() {
            var t = _t ? 2 * _t - At : 0;
            return kn(bt) - t;
          }
          function Pn(e) {
            if (t[e]) return !0;
            if (it) for (var n in it) if (it[n][e]) return !0;
            return !1;
          }
          function Rn(e, n) {
            if ((null == n && (n = Tt), "items" === e && Nt))
              return Math.floor((qt + At) / (Nt + At)) || 1;
            var i = t[e];
            if (it)
              for (var o in it)
                n >= parseInt(o) && e in it[o] && (i = it[o][e]);
            return (
              "slideBy" === e && "page" === i && (i = Rn("items")),
              rt || ("slideBy" !== e && "items" !== e) || (i = Math.floor(i)),
              i
            );
          }
          function zn(t, e, n, i, o) {
            var r = "";
            if (void 0 !== t) {
              var a = t;
              e && (a -= e),
                (r = mt
                  ? "margin: 0 " + a + "px 0 " + t + "px;"
                  : "margin: " + t + "px 0 " + a + "px 0;");
            } else if (e && !n) {
              var u = "-" + e + "px";
              r = "margin: 0 " + (mt ? u + " 0 0" : "0 " + u + " 0") + ";";
            }
            return !rt && o && K && i && (r += Un(i)), r;
          }
          function Fn(t, e, n) {
            return t
              ? (t + e) * re + "px"
              : F
              ? F + "(" + 100 * re + "% / " + n + ")"
              : (100 * re) / n + "%";
          }
          function Vn(t, e, n) {
            var i;
            if (t) i = t + e + "px";
            else {
              rt || (n = Math.floor(n));
              var o = rt ? re : n;
              i = F ? F + "(100% / " + o + ")" : 100 / o + "%";
            }
            return (
              (i = "width:" + i), "inner" !== ot ? i + ";" : i + " !important;"
            );
          }
          function Zn(t) {
            var e = "";
            return (
              !1 !== t &&
                (e =
                  (mt ? "padding-" : "margin-") +
                  (mt ? "right" : "bottom") +
                  ": " +
                  t +
                  "px;"),
              e
            );
          }
          function Gn(t, e) {
            var n = t.substring(0, t.length - e).toLowerCase();
            return n && (n = "-" + n + "-"), n;
          }
          function Un(t) {
            return Gn(K, 18) + "transition-duration:" + t / 1e3 + "s;";
          }
          function Kn(t) {
            return Gn(X, 17) + "animation-duration:" + t / 1e3 + "s;";
          }
          function Qn() {
            if (Pn("autoHeight") || It || !mt) {
              var t = gt.querySelectorAll("img");
              (0, g.E)(t, function (t) {
                var e = t.src;
                ee ||
                  (e && e.indexOf("data:image") < 0
                    ? ((t.src = ""),
                      (0, A.o)(t, Ge),
                      (0, x.c)(t, "loading"),
                      (t.src = e))
                    : fi(t));
              }),
                (0, i.W)(function () {
                  hi((0, C.Z)(t), function () {
                    Ct = !0;
                  });
                }),
                Pn("autoHeight") && (t = pi(ve, Math.min(ve + Dt - 1, re - 1))),
                ee
                  ? Xn()
                  : (0, i.W)(function () {
                      hi((0, C.Z)(t), Xn);
                    });
            } else rt && Ni(), $n(), Jn();
          }
          function Xn() {
            if (It && Et > 1) {
              var t = zt ? ve : Et - 1;
              !(function e() {
                var n = wt[t].getBoundingClientRect().left,
                  i = wt[t - 1].getBoundingClientRect().right;
                Math.abs(n - i) <= 1
                  ? Yn()
                  : setTimeout(function () {
                      e();
                    }, 16);
              })();
            } else Yn();
          }
          function Yn() {
            (mt && !It) ||
              (xi(),
              It
                ? ((ue = Bi()), Le && (Oe = ni()), (he = fe()), Nn(Se || Oe))
                : eo()),
              rt && Ni(),
              $n(),
              Jn();
          }
          function $n() {
            if (
              (wi(),
              ht.insertAdjacentHTML(
                "afterbegin",
                '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' +
                  si() +
                  "</span>  of " +
                  Et +
                  "</div>"
              ),
              (Lt = ht.querySelector(".tns-liveregion .current")),
              Pe)
            ) {
              var e = Qt ? "stop" : "start";
              xn
                ? (0, M.p)(xn, { "data-action": e })
                : t.autoplayButtonOutput &&
                  (ht.insertAdjacentHTML(
                    Hn(t.autoplayPosition),
                    '<button type="button" data-action="' +
                      e +
                      '">' +
                      En[0] +
                      e +
                      En[1] +
                      Yt[0] +
                      "</button>"
                  ),
                  (xn = ht.querySelector("[data-action]"))),
                xn && (0, A.o)(xn, { click: Vi }),
                Qt && (zi(), $t && (0, A.o)(gt, _e), Jt && (0, A.o)(gt, Ae));
            }
            if (ke) {
              if (on)
                (0, M.p)(on, { "aria-label": "Carousel Pagination" }),
                  (nn = on.children),
                  (0, g.E)(nn, function (t, e) {
                    (0,
                    M.p)(t, { "data-nav": e, tabindex: "-1", "aria-label": fn + (e + 1), "aria-controls": Me });
                  });
              else {
                for (
                  var n = "", i = je ? "" : 'style="display:none"', o = 0;
                  o < Et;
                  o++
                )
                  n +=
                    '<button type="button" data-nav="' +
                    o +
                    '" tabindex="-1" aria-controls="' +
                    Me +
                    '" ' +
                    i +
                    ' aria-label="' +
                    fn +
                    (o + 1) +
                    '"></button>';
                (n =
                  '<div class="tns-nav" aria-label="Carousel Pagination">' +
                  n +
                  "</div>"),
                  ht.insertAdjacentHTML(Hn(t.navPosition), n),
                  (on = ht.querySelector(".tns-nav")),
                  (nn = on.children);
              }
              if ((io(), K)) {
                var r = K.substring(0, K.length - 18).toLowerCase(),
                  a = "transition: all " + Pt / 1e3 + "s";
                r && (a = "-" + r + "-" + a),
                  (0, v.h)(
                    te,
                    "[aria-controls^=" + Me + "-item]",
                    a,
                    (0, m.a)(te)
                  );
              }
              (0, M.p)(nn[sn], { "aria-label": fn + (sn + 1) + vn }),
                (0, S.j)(nn[sn], "tabindex"),
                (0, x.c)(nn[sn], dn),
                (0, A.o)(on, Ne);
            }
            He &&
              (Xe ||
                ($e && Je) ||
                (ht.insertAdjacentHTML(
                  Hn(t.controlsPosition),
                  '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' +
                    Me +
                    '">' +
                    Zt[0] +
                    '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' +
                    Me +
                    '">' +
                    Zt[1] +
                    "</button></div>"
                ),
                (Xe = ht.querySelector(".tns-controls"))),
              ($e && Je) || (($e = Xe.children[0]), (Je = Xe.children[1])),
              t.controlsContainer &&
                (0, M.p)(Xe, {
                  "aria-label": "Carousel Navigation",
                  tabindex: "0",
                }),
              (t.controlsContainer || (t.prevButton && t.nextButton)) &&
                (0, M.p)([$e, Je], { "aria-controls": Me, tabindex: "-1" }),
              (t.controlsContainer || (t.prevButton && t.nextButton)) &&
                ((0, M.p)($e, { "data-controls": "prev" }),
                (0, M.p)(Je, { "data-controls": "next" })),
              (Ke = Ti($e)),
              (Qe = Ti(Je)),
              Ci(),
              Xe ? (0, A.o)(Xe, Ie) : ((0, A.o)($e, Ie), (0, A.o)(Je, Ie))),
              oi();
          }
          function Jn() {
            if (rt && $) {
              var i = {};
              (i[$] = Di), (0, A.o)(gt, i);
            }
            Ut && (0, A.o)(gt, We, t.preventScrollOnTouch),
              Kt && (0, A.o)(gt, De),
              jt && (0, A.o)(e, qe),
              "inner" === ot
                ? Ee.on("outerResized", function () {
                    ei(), Ee.emit("innerLoaded", oo());
                  })
                : (it || Nt || It || Ft || !mt) && (0, A.o)(n, { resize: ti }),
              Ft && ("outer" === ot ? Ee.on("innerLoaded", mi) : Se || mi()),
              di(),
              Se ? ui() : Oe && ai(),
              Ee.on("indexChanged", yi),
              "inner" === ot && Ee.emit("innerLoaded", oo()),
              "function" == typeof we && we(oo()),
              (Mt = !0);
          }
          function ti(t) {
            (0, i.W)(function () {
              ei(Gi(t));
            });
          }
          function ei(n) {
            if (Mt) {
              "outer" === ot && Ee.emit("outerResized", oo(n)), (Tt = Dn());
              var i,
                o = pt,
                r = !1;
              it &&
                (ii(), (i = o !== pt) && Ee.emit("newBreakpointStart", oo(n)));
              var a,
                u,
                c = Dt,
                s = Se,
                l = Oe,
                d = jt,
                f = Vt,
                h = Gt,
                y = Ut,
                b = Kt,
                E = Qt,
                T = $t,
                M = Jt,
                S = ve;
              if (i) {
                var C = Nt,
                  B = Ft,
                  I = Zt,
                  N = Wt,
                  _ = Yt;
                if (!Z)
                  var W = At,
                    D = _t;
              }
              if (
                ((jt = Rn("arrowKeys")),
                (Vt = Rn("controls")),
                (Gt = Rn("nav")),
                (Ut = Rn("touch")),
                (Wt = Rn("center")),
                (Kt = Rn("mouseDrag")),
                (Qt = Rn("autoplay")),
                ($t = Rn("autoplayHoverPause")),
                (Jt = Rn("autoplayResetOnVisibility")),
                i &&
                  ((Se = Rn("disable")),
                  (Nt = Rn("fixedWidth")),
                  (Pt = Rn("speed")),
                  (Ft = Rn("autoHeight")),
                  (Zt = Rn("controlsText")),
                  (Yt = Rn("autoplayText")),
                  (Xt = Rn("autoplayTimeout")),
                  Z || ((_t = Rn("edgePadding")), (At = Rn("gutter")))),
                Nn(Se),
                (qt = jn()),
                (mt && !It) || Se || (xi(), mt || (eo(), (r = !0))),
                (Nt || It) && ((ue = Bi()), (he = fe())),
                (i || Nt) &&
                  ((Dt = Rn("items")),
                  (Ht = Rn("slideBy")),
                  (u = Dt !== c) && (Nt || It || (he = fe()), Bn())),
                i &&
                  Se !== s &&
                  (Se
                    ? ui()
                    : (function () {
                        if (Ce) {
                          if (
                            ((te.disabled = !1), (gt.className += Te), Ni(), zt)
                          )
                            for (var t = oe; t--; )
                              rt && (0, O.V)(wt[t]), (0, O.V)(wt[re - t - 1]);
                          if (!rt)
                            for (var e = ve, n = ve + Et; e < n; e++) {
                              var i = wt[e],
                                o = e < ve + Dt ? st : ft;
                              (i.style.left = (100 * (e - ve)) / Dt + "%"),
                                (0, x.c)(i, o);
                            }
                          ri(), (Ce = !1);
                        }
                      })()),
                Le &&
                  (i || Nt || It) &&
                  (Oe = ni()) !== l &&
                  (Oe
                    ? (_i(Ii(An(0))), ai())
                    : ((function () {
                        if (Be) {
                          if ((_t && Z && (yt.style.margin = ""), oe))
                            for (var t = "tns-transparent", e = oe; e--; )
                              rt && (0, w.I)(wt[e], t),
                                (0, w.I)(wt[re - e - 1], t);
                          ri(), (Be = !1);
                        }
                      })(),
                      (r = !0))),
                Nn(Se || Oe),
                Qt || ($t = Jt = !1),
                jt !== d && (jt ? (0, A.o)(e, qe) : (0, q.O)(e, qe)),
                Vt !== f &&
                  (Vt
                    ? Xe
                      ? (0, O.V)(Xe)
                      : ($e && (0, O.V)($e), Je && (0, O.V)(Je))
                    : Xe
                    ? (0, L.e)(Xe)
                    : ($e && (0, L.e)($e), Je && (0, L.e)(Je))),
                Gt !== h && (Gt ? ((0, O.V)(on), io()) : (0, L.e)(on)),
                Ut !== y &&
                  (Ut
                    ? (0, A.o)(gt, We, t.preventScrollOnTouch)
                    : (0, q.O)(gt, We)),
                Kt !== b && (Kt ? (0, A.o)(gt, De) : (0, q.O)(gt, De)),
                Qt !== E &&
                  (Qt
                    ? (xn && (0, O.V)(xn), mn || yn || zi())
                    : (xn && (0, L.e)(xn), mn && Fi())),
                $t !== T && ($t ? (0, A.o)(gt, _e) : (0, q.O)(gt, _e)),
                Jt !== M && (Jt ? (0, A.o)(e, Ae) : (0, q.O)(e, Ae)),
                i)
              ) {
                if (
                  ((Nt === C && Wt === N) || (r = !0),
                  Ft !== B && (Ft || (yt.style.height = "")),
                  Vt &&
                    Zt !== I &&
                    (($e.innerHTML = Zt[0]), (Je.innerHTML = Zt[1])),
                  xn && Yt !== _)
                ) {
                  var H = Qt ? 1 : 0,
                    k = xn.innerHTML,
                    j = k.length - _[H].length;
                  k.substring(j) === _[H] &&
                    (xn.innerHTML = k.substring(0, j) + Yt[H]);
                }
              } else Wt && (Nt || It) && (r = !0);
              if (
                ((u || (Nt && !It)) && ((an = no()), io()),
                (a = ve !== S)
                  ? (Ee.emit("indexChanged", oo()), (r = !0))
                  : u
                  ? a || yi()
                  : (Nt || It) && (di(), wi(), ci()),
                u &&
                  !rt &&
                  (function () {
                    for (var t = ve + Math.min(Et, Dt), e = re; e--; ) {
                      var n = wt[e];
                      e >= ve && e < t
                        ? ((0, x.c)(n, "tns-moving"),
                          (n.style.left = (100 * (e - ve)) / Dt + "%"),
                          (0, x.c)(n, st),
                          (0, w.I)(n, ft))
                        : n.style.left &&
                          ((n.style.left = ""),
                          (0, x.c)(n, ft),
                          (0, w.I)(n, st)),
                        (0, w.I)(n, lt);
                    }
                    setTimeout(function () {
                      (0, g.E)(wt, function (t) {
                        (0, w.I)(t, "tns-moving");
                      });
                    }, 300);
                  })(),
                !Se && !Oe)
              ) {
                if (
                  i &&
                  !Z &&
                  ((_t === D && At === W) ||
                    (yt.style.cssText = zn(_t, At, Nt, Pt, Ft)),
                  mt)
                ) {
                  rt && (gt.style.width = Fn(Nt, At, Dt));
                  var P = Vn(Nt, At, Dt) + Zn(At);
                  (0, p.v)(te, (0, m.a)(te) - 1),
                    (0, v.h)(te, "#" + Me + " > .tns-item", P, (0, m.a)(te));
                }
                Ft && mi(), r && (Ni(), (pe = ve));
              }
              i && Ee.emit("newBreakpointEnd", oo(n));
            }
          }
          function ni() {
            if (!Nt && !It) return Et <= (Wt ? Dt - (Dt - 1) / 2 : Dt);
            var t = Nt ? (Nt + At) * Et : St[Et],
              e = _t ? qt + 2 * _t : qt + At;
            return (
              Wt &&
                (e -= Nt
                  ? (qt - Nt) / 2
                  : (qt - (St[ve + 1] - St[ve] - At)) / 2),
              t <= e
            );
          }
          function ii() {
            for (var t in ((pt = 0), it))
              (t = parseInt(t)), Tt >= t && (pt = t);
          }
          function oi() {
            !Qt && xn && (0, L.e)(xn),
              !Gt && on && (0, L.e)(on),
              Vt ||
                (Xe ? (0, L.e)(Xe) : ($e && (0, L.e)($e), Je && (0, L.e)(Je)));
          }
          function ri() {
            Qt && xn && (0, O.V)(xn),
              Gt && on && (0, O.V)(on),
              Vt &&
                (Xe ? (0, O.V)(Xe) : ($e && (0, O.V)($e), Je && (0, O.V)(Je)));
          }
          function ai() {
            if (!Be) {
              if ((_t && (yt.style.margin = "0px"), oe))
                for (var t = "tns-transparent", e = oe; e--; )
                  rt && (0, x.c)(wt[e], t), (0, x.c)(wt[re - e - 1], t);
              oi(), (Be = !0);
            }
          }
          function ui() {
            if (!Ce) {
              if (
                ((te.disabled = !0),
                (gt.className = gt.className.replace(Te.substring(1), "")),
                (0, S.j)(gt, ["style"]),
                zt)
              )
                for (var t = oe; t--; )
                  rt && (0, L.e)(wt[t]), (0, L.e)(wt[re - t - 1]);
              if (((mt && rt) || (0, S.j)(yt, ["style"]), !rt))
                for (var e = ve, n = ve + Et; e < n; e++) {
                  var i = wt[e];
                  (0, S.j)(i, ["style"]), (0, w.I)(i, st), (0, w.I)(i, ft);
                }
              oi(), (Ce = !0);
            }
          }
          function ci() {
            var t = si();
            Lt.innerHTML !== t && (Lt.innerHTML = t);
          }
          function si() {
            var t = li(),
              e = t[0] + 1,
              n = t[1] + 1;
            return e === n ? e + "" : e + " to " + n;
          }
          function li(t) {
            null == t && (t = Ii());
            var e,
              n,
              i,
              o = ve;
            if (
              (Wt || _t
                ? (It || Nt) &&
                  ((n = -(parseFloat(t) + _t)), (i = n + qt + 2 * _t))
                : It && ((n = St[ve]), (i = n + qt)),
              It)
            )
              St.forEach(function (t, r) {
                r < re &&
                  ((Wt || _t) && t <= n + 0.5 && (o = r),
                  i - t >= 0.5 && (e = r));
              });
            else {
              if (Nt) {
                var r = Nt + At;
                Wt || _t
                  ? ((o = Math.floor(n / r)), (e = Math.ceil(i / r - 1)))
                  : (e = o + Math.ceil(qt / r) - 1);
              } else if (Wt || _t) {
                var a = Dt - 1;
                if (
                  (Wt ? ((o -= a / 2), (e = ve + a / 2)) : (e = ve + a), _t)
                ) {
                  var u = (_t * Dt) / qt;
                  (o -= u), (e += u);
                }
                (o = Math.floor(o)), (e = Math.ceil(e));
              } else e = o + Dt - 1;
              (o = Math.max(o, 0)), (e = Math.min(e, re - 1));
            }
            return [o, e];
          }
          function di() {
            if (ee && !Se) {
              var t = li();
              t.push(ne),
                pi.apply(null, t).forEach(function (t) {
                  if (!(0, b.p)(t, Ze)) {
                    var e = {};
                    (e[$] = function (t) {
                      t.stopPropagation();
                    }),
                      (0, A.o)(t, e),
                      (0, A.o)(t, Ge),
                      (t.src = (0, T.U)(t, "data-src"));
                    var n = (0, T.U)(t, "data-srcset");
                    n && (t.srcset = n), (0, x.c)(t, "loading");
                  }
                });
            }
          }
          function fi(t) {
            (0, x.c)(t, "loaded"), vi(t);
          }
          function vi(t) {
            (0, x.c)(t, Ze), (0, w.I)(t, "loading"), (0, q.O)(t, Ge);
          }
          function pi(t, e, n) {
            var i = [];
            for (n || (n = "img"); t <= e; )
              (0, g.E)(wt[t].querySelectorAll(n), function (t) {
                i.push(t);
              }),
                t++;
            return i;
          }
          function mi() {
            var t = pi.apply(null, li());
            (0, i.W)(function () {
              hi(t, bi);
            });
          }
          function hi(t, e) {
            return Ct
              ? e()
              : (t.forEach(function (e, n) {
                  !ee && e.complete && vi(e), (0, b.p)(e, Ze) && t.splice(n, 1);
                }),
                t.length
                  ? void (0, i.W)(function () {
                      hi(t, e);
                    })
                  : e());
          }
          function yi() {
            di(),
              wi(),
              ci(),
              Ci(),
              (function () {
                if (Gt && ((sn = cn >= 0 ? cn : Wn()), (cn = -1), sn !== ln)) {
                  var t = nn[ln],
                    e = nn[sn];
                  (0, M.p)(t, { tabindex: "-1", "aria-label": fn + (ln + 1) }),
                    (0, w.I)(t, dn),
                    (0, M.p)(e, { "aria-label": fn + (sn + 1) + vn }),
                    (0, S.j)(e, "tabindex"),
                    (0, x.c)(e, dn),
                    (ln = sn);
                }
              })();
          }
          function gi(t, e) {
            for (var n = [], i = t, o = Math.min(t + e, re); i < o; i++)
              n.push(wt[i].offsetHeight);
            return Math.max.apply(null, n);
          }
          function bi() {
            var t = Ft ? gi(ve, Dt) : gi(oe, Et),
              e = vt || yt;
            e.style.height !== t && (e.style.height = t + "px");
          }
          function xi() {
            St = [0];
            var t = mt ? "left" : "top",
              e = mt ? "right" : "bottom",
              n = wt[0].getBoundingClientRect()[t];
            (0, g.E)(wt, function (i, o) {
              o && St.push(i.getBoundingClientRect()[t] - n),
                o === re - 1 && St.push(i.getBoundingClientRect()[e] - n);
            });
          }
          function wi() {
            var t = li(),
              e = t[0],
              n = t[1];
            (0, g.E)(wt, function (t, i) {
              i >= e && i <= n
                ? (0, E.B)(t, "aria-hidden") &&
                  ((0, S.j)(t, ["aria-hidden", "tabindex"]), (0, x.c)(t, Fe))
                : (0, E.B)(t, "aria-hidden") ||
                  ((0, M.p)(t, { "aria-hidden": "true", tabindex: "-1" }),
                  (0, w.I)(t, Fe));
            });
          }
          function Ei(t) {
            return t.nodeName.toLowerCase();
          }
          function Ti(t) {
            return "button" === Ei(t);
          }
          function Mi(t) {
            return "true" === t.getAttribute("aria-disabled");
          }
          function Si(t, e, n) {
            t
              ? (e.disabled = n)
              : e.setAttribute("aria-disabled", n.toString());
          }
          function Ci() {
            if (Vt && !Rt && !zt) {
              var t = Ke ? $e.disabled : Mi($e),
                e = Qe ? Je.disabled : Mi(Je),
                n = ve <= me,
                i = !Rt && ve >= he;
              n && !t && Si(Ke, $e, !0),
                !n && t && Si(Ke, $e, !1),
                i && !e && Si(Qe, Je, !0),
                !i && e && Si(Qe, Je, !1);
            }
          }
          function Li(t, e) {
            K && (t.style[K] = e);
          }
          function Oi(t) {
            return (
              null == t && (t = ve),
              It
                ? (qt - (_t ? At : 0) - (St[t + 1] - St[t] - At)) / 2
                : Nt
                ? (qt - Nt) / 2
                : (Dt - 1) / 2
            );
          }
          function Bi() {
            var t = qt + (_t ? At : 0) - (Nt ? (Nt + At) * re : St[re]);
            return (
              Wt &&
                !zt &&
                (t = Nt
                  ? -(Nt + At) * (re - 1) - Oi()
                  : Oi(re - 1) - St[re - 1]),
              t > 0 && (t = 0),
              t
            );
          }
          function Ii(t) {
            var e;
            if ((null == t && (t = ve), mt && !It))
              if (Nt) (e = -(Nt + At) * t), Wt && (e += Oi());
              else {
                var n = G ? re : Dt;
                Wt && (t -= Oi()), (e = (100 * -t) / n);
              }
            else (e = -St[t]), Wt && It && (e += Oi());
            return (
              ae && (e = Math.max(e, ue)), e + (!mt || It || Nt ? "px" : "%")
            );
          }
          function Ni(t) {
            Li(gt, "0s"), _i(t);
          }
          function _i(t) {
            null == t && (t = Ii()), (gt.style[se] = le + t + de);
          }
          function Ai(t, e, n, i) {
            var o = t + Dt;
            zt || (o = Math.min(o, re));
            for (var r = t; r < o; r++) {
              var a = wt[r];
              i || (a.style.left = (100 * (r - ve)) / Dt + "%"),
                dt &&
                  Q &&
                  (a.style[Q] = a.style[Y] = (dt * (r - t)) / 1e3 + "s"),
                (0, w.I)(a, e),
                (0, x.c)(a, n),
                i && ie.push(a);
            }
          }
          function qi(t, e) {
            ce && Bn(),
              (ve !== pe || e) &&
                (Ee.emit("indexChanged", oo()),
                Ee.emit("transitionStart", oo()),
                Ft && mi(),
                mn && t && ["click", "keydown"].indexOf(t.type) >= 0 && Fi(),
                (xe = !0),
                In());
          }
          function Wi(t) {
            return t.toLowerCase().replace(/-/g, "");
          }
          function Di(t) {
            if (rt || xe) {
              if ((Ee.emit("transitionEnd", oo(t)), !rt && ie.length > 0))
                for (var e = 0; e < ie.length; e++) {
                  var n = ie[e];
                  (n.style.left = ""),
                    Y && Q && ((n.style[Y] = ""), (n.style[Q] = "")),
                    (0, w.I)(n, lt),
                    (0, x.c)(n, ft);
                }
              if (
                !t ||
                (!rt && t.target.parentNode === gt) ||
                (t.target === gt && Wi(t.propertyName) === Wi(se))
              ) {
                if (!ce) {
                  var i = ve;
                  Bn(), ve !== i && (Ee.emit("indexChanged", oo()), Ni());
                }
                "inner" === ot && Ee.emit("innerLoaded", oo()),
                  (xe = !1),
                  (pe = ve);
              }
            }
          }
          function Hi(t, e) {
            if (!Oe)
              if ("prev" === t) ki(e, -1);
              else if ("next" === t) ki(e, 1);
              else {
                if (xe) {
                  if (ye) return;
                  Di();
                }
                var n = qn(),
                  i = 0;
                if (
                  ("first" === t
                    ? (i = -n)
                    : "last" === t
                    ? (i = rt ? Et - Dt - n : Et - 1 - n)
                    : ("number" != typeof t && (t = parseInt(t)),
                      isNaN(t) ||
                        (e || (t = Math.max(0, Math.min(Et - 1, t))),
                        (i = t - n))),
                  !rt && i && Math.abs(i) < Dt)
                ) {
                  var o = i > 0 ? 1 : -1;
                  i += ve + i - Et >= me ? Et * o : 2 * Et * o * -1;
                }
                (ve += i),
                  rt && zt && (ve < me && (ve += Et), ve > he && (ve -= Et)),
                  qn(ve) !== qn(pe) && qi(e);
              }
          }
          function ki(t, e) {
            if (xe) {
              if (ye) return;
              Di();
            }
            var n;
            if (!e) {
              for (
                var i = Ui((t = Gi(t)));
                i !== Xe && [$e, Je].indexOf(i) < 0;

              )
                i = i.parentNode;
              var o = [$e, Je].indexOf(i);
              o >= 0 && ((n = !0), (e = 0 === o ? -1 : 1));
            }
            if (Rt) {
              if (ve === me && -1 === e) return void Hi("last", t);
              if (ve === he && 1 === e) return void Hi("first", t);
            }
            e &&
              ((ve += Ht * e),
              It && (ve = Math.floor(ve)),
              qi(n || (t && "keydown" === t.type) ? t : null));
          }
          function ji() {
            (pn = setInterval(function () {
              ki(null, bn);
            }, Xt)),
              (mn = !0);
          }
          function Pi() {
            clearInterval(pn), (mn = !1);
          }
          function Ri(t, e) {
            (0, M.p)(xn, { "data-action": t }),
              (xn.innerHTML = En[0] + t + En[1] + e);
          }
          function zi() {
            ji(), xn && Ri("stop", Yt[1]);
          }
          function Fi() {
            Pi(), xn && Ri("start", Yt[0]);
          }
          function Vi() {
            mn ? (Fi(), (yn = !0)) : (zi(), (yn = !1));
          }
          function Zi(t) {
            t.focus();
          }
          function Gi(t) {
            return Ki((t = t || n.event)) ? t.changedTouches[0] : t;
          }
          function Ui(t) {
            return t.target || n.event.srcElement;
          }
          function Ki(t) {
            return t.type.indexOf("touch") >= 0;
          }
          function Qi(t) {
            t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
          }
          function Xi() {
            return (0, y.m)((0, h.D)(Cn.y - Sn.y, Cn.x - Sn.x), ge) === t.axis;
          }
          function Yi(t) {
            if (xe) {
              if (ye) return;
              Di();
            }
            Qt && mn && Pi(), (Ln = !0), Mn && ((0, o.N)(Mn), (Mn = null));
            var e = Gi(t);
            Ee.emit(Ki(t) ? "touchStart" : "dragStart", oo(t)),
              !Ki(t) && ["img", "a"].indexOf(Ei(Ui(t))) >= 0 && Qi(t),
              (Cn.x = Sn.x = e.clientX),
              (Cn.y = Sn.y = e.clientY),
              rt &&
                ((Tn = parseFloat(gt.style[se].replace(le, ""))), Li(gt, "0s"));
          }
          function $i(t) {
            if (Ln) {
              var e = Gi(t);
              (Cn.x = e.clientX),
                (Cn.y = e.clientY),
                rt
                  ? Mn ||
                    (Mn = (0, i.W)(function () {
                      Ji(t);
                    }))
                  : ("?" === be && (be = Xi()), be && (Ue = !0)),
                ("boolean" != typeof t.cancelable || t.cancelable) &&
                  Ue &&
                  t.preventDefault();
            }
          }
          function Ji(t) {
            if (be) {
              if (
                ((0, o.N)(Mn),
                Ln &&
                  (Mn = (0, i.W)(function () {
                    Ji(t);
                  })),
                "?" === be && (be = Xi()),
                be)
              ) {
                !Ue && Ki(t) && (Ue = !0);
                try {
                  t.type && Ee.emit(Ki(t) ? "touchMove" : "dragMove", oo(t));
                } catch (t) {}
                var e = Tn,
                  n = On(Cn, Sn);
                !mt || Nt || It
                  ? ((e += n), (e += "px"))
                  : ((e += G
                      ? (n * Dt * 100) / ((qt + At) * re)
                      : (100 * n) / (qt + At)),
                    (e += "%")),
                  (gt.style[se] = le + e + de);
              }
            } else Ln = !1;
          }
          function to(e) {
            if (Ln) {
              Mn && ((0, o.N)(Mn), (Mn = null)), rt && Li(gt, ""), (Ln = !1);
              var n = Gi(e);
              (Cn.x = n.clientX), (Cn.y = n.clientY);
              var r = On(Cn, Sn);
              if (Math.abs(r)) {
                if (!Ki(e)) {
                  var a = Ui(e);
                  (0, A.o)(a, {
                    click: function t(e) {
                      Qi(e), (0, q.O)(a, { click: t });
                    },
                  });
                }
                rt
                  ? (Mn = (0, i.W)(function () {
                      if (mt && !It) {
                        var t = (-r * Dt) / (qt + At);
                        (t = r > 0 ? Math.floor(t) : Math.ceil(t)), (ve += t);
                      } else {
                        var n = -(Tn + r);
                        if (n <= 0) ve = me;
                        else if (n >= St[re - 1]) ve = he;
                        else
                          for (var i = 0; i < re && n >= St[i]; )
                            (ve = i), n > St[i] && r < 0 && (ve += 1), i++;
                      }
                      qi(e, r), Ee.emit(Ki(e) ? "touchEnd" : "dragEnd", oo(e));
                    }))
                  : be && ki(e, r > 0 ? -1 : 1);
              }
            }
            "auto" === t.preventScrollOnTouch && (Ue = !1),
              ge && (be = "?"),
              Qt && !mn && ji();
          }
          function eo() {
            (vt || yt).style.height = St[ve + Dt] - St[ve] + "px";
          }
          function no() {
            var t = Nt ? ((Nt + At) * Et) / qt : Et / Dt;
            return Math.min(Math.ceil(t), Et);
          }
          function io() {
            if (Gt && !je && an !== un) {
              var t = un,
                e = an,
                n = O.V;
              for (un > an && ((t = an), (e = un), (n = L.e)); t < e; )
                n(nn[t]), t++;
              un = an;
            }
          }
          function oo(t) {
            return {
              container: gt,
              slideItems: wt,
              navContainer: on,
              navItems: nn,
              controlsContainer: Xe,
              hasControls: He,
              prevButton: $e,
              nextButton: Je,
              items: Dt,
              slideBy: Ht,
              cloneCount: oe,
              slideCount: Et,
              slideCountNew: re,
              index: ve,
              indexCached: pe,
              displayIndex: _n(),
              navCurrentIndex: sn,
              navCurrentIndexCached: ln,
              pages: an,
              pagesCached: un,
              sheet: te,
              isOn: Mt,
              event: t || {},
            };
          }
          tt && console.warn("No slides found in", t.container);
        };
      },
    },
    e = {};
  function n(i) {
    var o = e[i];
    if (void 0 !== o) return o.exports;
    var r = (e[i] = { exports: {} });
    return t[i](r, r.exports, n), r.exports;
  }
  (n.d = function (t, e) {
    for (var i in e)
      n.o(e, i) &&
        !n.o(t, i) &&
        Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
  }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    n(5969),
    n(2448),
    n(3993),
    n(9196),
    n(3953),
    n(5586);
})();
