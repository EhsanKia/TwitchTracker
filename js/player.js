! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.video = t() : (e.Twitch = e.Twitch || {}, e.Twitch.video = t())
}(this, function() {
    return function(e) {
        function t(n) {
            if (r[n]) return r[n].exports;
            var i = r[n] = {
                exports: {},
                id: n,
                loaded: !1
            };
            return e[n].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
        }
        var n = window.webpackJsonpTwitch_video;
        window.webpackJsonpTwitch_video = function(r, a) {
            for (var o, s, u = 0, c = []; u < r.length; u++) s = r[u], i[s] && c.push.apply(c, i[s]), i[s] = 0;
            for (o in a) e[o] = a[o];
            for (n && n(r, a); c.length;) c.shift().call(null, t)
        };
        var r = {},
            i = {
                0: 0
            };
        return t.e = function(e, n) {
            if (0 === i[e]) return n.call(null, t);
            if (void 0 !== i[e]) i[e].push(n);
            else {
                i[e] = [n];
                var r = document.getElementsByTagName("head")[0],
                    a = document.createElement("script");
                a.type = "text/javascript", a.charset = "utf-8", a.async = !0, a.src = t.p + "" + e + ".js/" + ({}[e] || e) + "." + {
                    1: "25073adc869a9fbeb8dd",
                    2: "116b18c11368d59c4db4"
                }[e] + ".js", r.appendChild(a)
            }
        }, t.m = e, t.c = r, t.p = "", t(0)
    }([function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e, t) {
            function n() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? window : arguments[0];
                e.document.location.reload()
            }
            var r = (arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2], this),
                i = void 0,
                a = void 0,
                o = void 0,
                u = void 0,
                l = void 0,
                f = void 0,
                g = void 0,
                m = void 0,
                E = void 0,
                k = void 0,
                S = function() {
                    var t = void 0;
                    t = "string" == typeof e || e instanceof String ? document.getElementById(e) : e;
                    var s = C();
                    f = (0, G.init)(), s.debug && f.subscribe(function() {
                        console.debug("state change: %o", f.getState())
                    }), f.dispatch(K.loadExperiments({
                        login: O.get("login") || null,
                        deviceID: L.get(!1)
                    })), f.dispatch(Z.setUsherParams(s)), f.dispatch(J.loadDefaultLang(s.lang)), f.dispatch((0, ee.setPlayerType)(s.player)), i = new F.PubSub(f, s), i.addEventListener(F.EVENT_TOS, n), i.addEventListener(F.EVENT_ONLINE, function() {
                        var e = f.getState(),
                            t = e.stream;
                        f.dispatch(Y.setChannel(t.channel))
                    }), a = new v.AnalyticsTracker(f, s), f.dispatch((0, re.setAnalyticsTracker)(a)), o = new q.FullScreen(t), g = new N.Video(t, a, f, s), l = new j.State(g, i, o, f, a, s), s.debug && (window.state = l);
                    var c = f.getState().window;
                    k = new ue.ClipGenerator(l, c.open.bind(c), c.location.origin), (0, D.forwardProperties)(r, g), m = new h.Analytics(g, a, l, f, s), P(s), E = new R.EmbedHost(g, l, f), new x.PlayerHotkeys(g, t, f, s), s.quality && f.dispatch((0, ne.setQuality)(s.quality)), s.controls && (u = new U.PlayerUI(g, t, a, l, o, f, s)), window.Twitch.sentinel || _.getSentinel(), s.channel ? f.dispatch(Y.setChannel(s.channel)) : s.video && f.dispatch(Y.setVideo(s.video)), f.dispatch((0, te.initVodResume)()), (0, se.krakenUserInfo)().then(function(e) {
                        return f.dispatch((0, te.setUser)(e._id))
                    }), T.get(fe, !1) || (0, se.krakenUserInfo)().then(function(e) {
                        return "staff" === e.type ? f.getState().experiments.get(oe.ABS_V2) : Promise.reject()
                    }).then(function(e) {
                        "yes" === e && (f.dispatch((0, ne.setQuality)("auto")), T.set(fe, !0))
                    }, function() {}), (s.hasOwnProperty("force_preroll") || s.hasOwnProperty("force_midroll")) && ! function() {
                        var e = (0, de.subscribe)(f, ["adsManager"], function() {
                            var t = void 0;
                            s.force_preroll ? t = (0, le.requestAds)(ce.PREROLL, le.DEFAULT_AD_DURATION) : s.force_midroll && (t = (0, le.requestAds)(ce.MIDROLL, parseInt(s.force_midroll, 10) || le.DEFAULT_AD_DURATION)), f.dispatch(t), e()
                        })
                    }()
                },
                C = function() {
                    var e = (0, d["default"])(t) ? y.parse(t) : t;
                    return (0, b.isTwitchEmbed)() || (e = (0, p["default"])(e, w.embedParameters)), e.flash ? e.backend = "flash" : e.mse ? e.backend = "mse" : e.hls && (e.backend = "hls"), e.html5 && H.BackendHls.canPlay() ? e.backend = "hls" : e.html5 && V.BackendMse.canPlay() ? e.backend = "mse" : e.mseDev && B.BackendMseDevelopment.canPlay() && (e.backend = "mseDev"), e = (0, s["default"])(e, {
                        time: e.t
                    }), e = (0, s["default"])(e, {
                        volume: T.get("volume"),
                        muted: T.get("muted"),
                        quality: T.get("quality"),
                        backend: T.get("backend"),
                        player: A.getPlayerType()
                    }), e = (0, s["default"])(e, {
                        volume: .5,
                        muted: !1,
                        controls: !0,
                        autoplay: !0,
                        quality: "medium",
                        time: null,
                        leaveDialogEnabled: w.leaveDialog.enabled,
                        leaveDialogViewerThreshold: w.leaveDialog.viewerThreshold,
                        refreshWarningEnabled: w.leaveDialog.enabled,
                        lang: w.defaultLanguage
                    }), e.tracking = (0, s["default"])({}, e.tracking, {
                        player: e.player
                    }), e
                },
                P = function(e) {
                    if (g.setVolume(e.volume), g.setMuted(e.muted), e.time) {
                        var t = I.parse(e.time);
                        g.readyState > g.HAVE_NOTHING ? g.setCurrentTime(t) : g.addEventListener(ae.LOADED_METADATA, function() {
                            g.setCurrentTime(t)
                        })
                    }
                    e.debug && w.allEvents.forEach(function(e) {
                        (0, c["default"])(w.debugIgnoreEvents, e) || g.addEventListener(e, function() {
                            console.log("video event: ", e)
                        })
                    }), g.addEventListener(ae.ERROR, function() {
                        console.error("video error:", g.getError())
                    })
                };
            r.setChannel = function(e) {
                f.dispatch(Y.setChannel(e))
            }, r.setVideo = function(e) {
                f.dispatch(Y.setVideo(e))
            }, r.setLanguage = function(e) {
                f.dispatch(J.loadLanguage(e))
            }, r.recordClip = function() {
                k.recordClip()
            }, S(), r.destroy = function() {
                u.destroy(), g.destroy(), l.destroy(), o.destroy(), m.destroy(), E.destroy()
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Player = a;
        var o = n(1),
            s = i(o),
            u = n(35),
            c = i(u),
            l = n(33),
            d = i(l),
            f = n(44),
            p = i(f),
            h = n(49),
            v = n(203),
            g = n(210),
            _ = r(g),
            m = n(211),
            y = r(m),
            b = n(200),
            E = n(88),
            w = r(E),
            k = n(175),
            T = r(k),
            S = n(199),
            A = r(S),
            C = n(207),
            O = r(C),
            P = n(206),
            L = r(P),
            j = n(101),
            M = n(212),
            I = r(M),
            N = n(213),
            D = n(301),
            R = n(302),
            x = n(308),
            U = n(309),
            V = n(218),
            H = n(281),
            B = n(223),
            F = n(177),
            q = n(99),
            G = n(345),
            z = n(303),
            Y = r(z),
            W = n(362),
            K = r(W),
            Q = n(364),
            J = r(Q),
            X = n(421),
            Z = r(X),
            ee = n(360),
            te = n(323),
            ne = n(299),
            re = n(358),
            ie = n(98),
            ae = r(ie),
            oe = n(161),
            se = n(157),
            ue = n(343),
            ce = n(293),
            le = n(291),
            de = n(190);
        n(305).polyfill(), n.p = w.playerHost + "/", n(425), n(430), window.google || $.getScript("//imasdk.googleapis.com/js/sdkloader/ima3.js");
        var fe = "auto_quality_forced";
        window.Twitch = window.Twitch || {}, window.Twitch.video = window.Twitch.video || {}, window.Twitch.video.Player = a, window.Twitch.Player = a
    }, function(e, t, n) {
        var r = n(2),
            i = n(3),
            a = n(5),
            o = n(17),
            s = o(function(e) {
                return e.push(void 0, i), r(a, void 0, e)
            });
        e.exports = s
    }, function(e, t) {
        function n(e, t, n) {
            var r = n.length;
            switch (r) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, n[0]);
                case 2:
                    return e.call(t, n[0], n[1]);
                case 3:
                    return e.call(t, n[0], n[1], n[2])
            }
            return e.apply(t, n)
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e, t, n, r) {
            return void 0 === e || i(e, a[n]) && !o.call(r, n) ? t : e
        }
        var i = n(4),
            a = Object.prototype,
            o = a.hasOwnProperty;
        e.exports = r
    }, function(e, t) {
        function n(e, t) {
            return e === t || e !== e && t !== t
        }
        e.exports = n
    }, function(e, t, n) {
        var r = n(6),
            i = n(8),
            a = n(20),
            o = i(function(e, t, n, i) {
                r(t, a(t), e, i)
            });
        e.exports = o
    }, function(e, t, n) {
        function r(e, t, n, r) {
            n || (n = {});
            for (var a = -1, o = t.length; ++a < o;) {
                var s = t[a],
                    u = r ? r(n[s], e[s], s, n, e) : e[s];
                i(n, s, u)
            }
            return n
        }
        var i = n(7);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t, n) {
            var r = e[t];
            o.call(e, t) && i(r, n) && (void 0 !== n || t in e) || (e[t] = n)
        }
        var i = n(4),
            a = Object.prototype,
            o = a.hasOwnProperty;
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            return a(function(t, n) {
                var r = -1,
                    a = n.length,
                    o = a > 1 ? n[a - 1] : void 0,
                    s = a > 2 ? n[2] : void 0;
                for (o = "function" == typeof o ? (a--, o) : void 0, s && i(n[0], n[1], s) && (o = 3 > a ? void 0 : o, a = 1), t = Object(t); ++r < a;) {
                    var u = n[r];
                    u && e(t, u, r, o)
                }
                return t
            })
        }
        var i = n(9),
            a = n(17);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t, n) {
            if (!s(n)) return !1;
            var r = typeof t;
            return ("number" == r ? a(n) && o(t, n.length) : "string" == r && t in n) ? i(n[t], e) : !1
        }
        var i = n(4),
            a = n(10),
            o = n(16),
            s = n(14);
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            return null != e && o(i(e)) && !a(e)
        }
        var i = n(11),
            a = n(13),
            o = n(15);
        e.exports = r
    }, function(e, t, n) {
        var r = n(12),
            i = r("length");
        e.exports = i
    }, function(e, t) {
        function n(e) {
            return function(t) {
                return null == t ? void 0 : t[e]
            }
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e) {
            var t = i(e) ? u.call(e) : "";
            return t == a || t == o
        }
        var i = n(14),
            a = "[object Function]",
            o = "[object GeneratorFunction]",
            s = Object.prototype,
            u = s.toString;
        e.exports = r
    }, function(e, t) {
        function n(e) {
            var t = typeof e;
            return !!e && ("object" == t || "function" == t)
        }
        e.exports = n
    }, function(e, t) {
        function n(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && r >= e
        }
        var r = 9007199254740991;
        e.exports = n
    }, function(e, t) {
        function n(e, t) {
            return e = "number" == typeof e || i.test(e) ? +e : -1, t = null == t ? r : t, e > -1 && e % 1 == 0 && t > e
        }
        var r = 9007199254740991,
            i = /^(?:0|[1-9]\d*)$/;
        e.exports = n
    }, function(e, t, n) {
        function r(e, t) {
            if ("function" != typeof e) throw new TypeError(o);
            return t = s(void 0 === t ? e.length - 1 : a(t), 0),
                function() {
                    for (var n = arguments, r = -1, a = s(n.length - t, 0), o = Array(a); ++r < a;) o[r] = n[t + r];
                    switch (t) {
                        case 0:
                            return e.call(this, o);
                        case 1:
                            return e.call(this, n[0], o);
                        case 2:
                            return e.call(this, n[0], n[1], o)
                    }
                    var u = Array(t + 1);
                    for (r = -1; ++r < t;) u[r] = n[r];
                    return u[t] = o, i(e, this, u)
                }
        }
        var i = n(2),
            a = n(18),
            o = "Expected a function",
            s = Math.max;
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            if (!e) return 0 === e ? e : 0;
            if (e = i(e), e === a || e === -a) {
                var t = 0 > e ? -1 : 1;
                return t * o
            }
            var n = e % 1;
            return e === e ? n ? e - n : e : 0
        }
        var i = n(19),
            a = 1 / 0,
            o = 1.7976931348623157e308;
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            if (a(e)) {
                var t = i(e.valueOf) ? e.valueOf() : e;
                e = a(t) ? t + "" : t
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = e.replace(s, "");
            var n = c.test(e);
            return n || l.test(e) ? d(e.slice(2), n ? 2 : 8) : u.test(e) ? o : +e
        }
        var i = n(13),
            a = n(14),
            o = NaN,
            s = /^\s+|\s+$/g,
            u = /^[-+]0x[0-9a-f]+$/i,
            c = /^0b[01]+$/i,
            l = /^0o[0-7]+$/i,
            d = parseInt;
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            for (var t = -1, n = s(e), r = i(e), u = r.length, l = a(e), d = !!l, f = l || [], p = f.length; ++t < u;) {
                var h = r[t];
                d && ("length" == h || o(h, p)) || "constructor" == h && (n || !c.call(e, h)) || f.push(h)
            }
            return f
        }
        var i = n(21),
            a = n(27),
            o = n(16),
            s = n(34),
            u = Object.prototype,
            c = u.hasOwnProperty;
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            e = null == e ? e : Object(e);
            var t = [];
            for (var n in e) t.push(n);
            return t
        }
        var i = n(22),
            a = n(26),
            o = Object.prototype,
            s = i ? i.enumerate : void 0,
            u = o.propertyIsEnumerable;
        s && !u.call({
            valueOf: 1
        }, "valueOf") && (r = function(e) {
            return a(s(e))
        }), e.exports = r
    }, function(e, t, n) {
        var r = n(23),
            i = r.Reflect;
        e.exports = i
    }, function(e, t, n) {
        (function(e, r) {
            var i = n(25),
                a = {
                    "function": !0,
                    object: !0
                },
                o = a[typeof t] && t && !t.nodeType ? t : void 0,
                s = a[typeof e] && e && !e.nodeType ? e : void 0,
                u = i(o && s && "object" == typeof r && r),
                c = i(a[typeof self] && self),
                l = i(a[typeof window] && window),
                d = i(a[typeof this] && this),
                f = u || l !== (d && d.window) && l || c || d || Function("return this")();
            e.exports = f
        }).call(t, n(24)(e), function() {
            return this
        }())
    }, function(e, t) {
        e.exports = function(e) {
            return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children = [], e.webpackPolyfill = 1), e
        }
    }, function(e, t) {
        function n(e) {
            return e && e.Object === Object ? e : null
        }
        e.exports = n
    }, function(e, t) {
        function n(e) {
            for (var t, n = []; !(t = e.next()).done;) n.push(t.value);
            return n
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e) {
            var t = e ? e.length : void 0;
            return s(t) && (o(e) || u(e) || a(e)) ? i(t, String) : null
        }
        var i = n(28),
            a = n(29),
            o = n(32),
            s = n(15),
            u = n(33);
        e.exports = r
    }, function(e, t) {
        function n(e, t) {
            for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
            return r
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e) {
            return i(e) && s.call(e, "callee") && (!c.call(e, "callee") || u.call(e) == a)
        }
        var i = n(30),
            a = "[object Arguments]",
            o = Object.prototype,
            s = o.hasOwnProperty,
            u = o.toString,
            c = o.propertyIsEnumerable;
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            return a(e) && i(e)
        }
        var i = n(10),
            a = n(31);
        e.exports = r
    }, function(e, t) {
        function n(e) {
            return !!e && "object" == typeof e
        }
        e.exports = n
    }, function(e, t) {
        var n = Array.isArray;
        e.exports = n
    }, function(e, t, n) {
        function r(e) {
            return "string" == typeof e || !i(e) && a(e) && u.call(e) == o
        }
        var i = n(32),
            a = n(31),
            o = "[object String]",
            s = Object.prototype,
            u = s.toString;
        e.exports = r
    }, function(e, t) {
        function n(e) {
            var t = e && e.constructor,
                n = "function" == typeof t && t.prototype || r;
            return e === n
        }
        var r = Object.prototype;
        e.exports = n
    }, function(e, t, n) {
        function r(e, t, n, r) {
            e = a(e) ? e : u(e), n = n && !r ? s(n) : 0;
            var l = e.length;
            return 0 > n && (n = c(l + n, 0)), o(e) ? l >= n && e.indexOf(t, n) > -1 : !!l && i(e, t, n) > -1
        }
        var i = n(36),
            a = n(10),
            o = n(33),
            s = n(18),
            u = n(38),
            c = Math.max;
        e.exports = r
    }, function(e, t, n) {
        function r(e, t, n) {
            if (t !== t) return i(e, n);
            for (var r = n - 1, a = e.length; ++r < a;)
                if (e[r] === t) return r;
            return -1
        }
        var i = n(37);
        e.exports = r
    }, function(e, t) {
        function n(e, t, n) {
            for (var r = e.length, i = t + (n ? 0 : -1); n ? i-- : ++i < r;) {
                var a = e[i];
                if (a !== a) return i
            }
            return -1
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e) {
            return e ? i(e, a(e)) : []
        }
        var i = n(39),
            a = n(41);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            return i(t, function(t) {
                return e[t]
            })
        }
        var i = n(40);
        e.exports = r
    }, function(e, t) {
        function n(e, t) {
            for (var n = -1, r = e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
            return i
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e) {
            var t = c(e);
            if (!t && !s(e)) return a(e);
            var n = o(e),
                r = !!n,
                l = n || [],
                d = l.length;
            for (var f in e) !i(e, f) || r && ("length" == f || u(f, d)) || t && "constructor" == f || l.push(f);
            return l
        }
        var i = n(42),
            a = n(43),
            o = n(27),
            s = n(10),
            u = n(16),
            c = n(34);
        e.exports = r
    }, function(e, t) {
        function n(e, t) {
            return i.call(e, t) || "object" == typeof e && t in e && null === a(e)
        }
        var r = Object.prototype,
            i = r.hasOwnProperty,
            a = Object.getPrototypeOf;
        e.exports = n
    }, function(e, t) {
        function n(e) {
            return r(Object(e))
        }
        var r = Object.keys;
        e.exports = n
    }, function(e, t, n) {
        var r = n(45),
            i = n(47),
            a = n(17),
            o = a(function(e, t) {
                return null == e ? {} : i(e, r(t, 1))
            });
        e.exports = o
    }, function(e, t, n) {
        function r(e, t, n, u) {
            u || (u = []);
            for (var c = -1, l = e.length; ++c < l;) {
                var d = e[c];
                t > 0 && s(d) && (n || o(d) || a(d)) ? t > 1 ? r(d, t - 1, n, u) : i(u, d) : n || (u[u.length] = d)
            }
            return u
        }
        var i = n(46),
            a = n(29),
            o = n(32),
            s = n(30);
        e.exports = r
    }, function(e, t) {
        function n(e, t) {
            for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
            return e
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e, t) {
            return e = Object(e), i(t, function(t, n) {
                return n in e && (t[n] = e[n]), t
            }, {})
        }
        var i = n(48);
        e.exports = r
    }, function(e, t) {
        function n(e, t, n, r) {
            var i = -1,
                a = e.length;
            for (r && a && (n = e[++i]); ++i < a;) n = t(n, e[i], i, e);
            return n
        }
        e.exports = n
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Analytics = void 0;
        var o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            s = n(50),
            u = i(s),
            c = n(44),
            l = i(c),
            d = n(53),
            f = n(55),
            p = n(56),
            h = n(88),
            v = r(h),
            g = n(157),
            _ = n(197),
            m = r(_),
            y = n(198),
            b = n(161),
            E = n(190),
            w = n(199),
            k = n(201),
            T = n(97),
            S = r(T),
            A = n(98),
            C = r(A),
            O = "video_init",
            P = "video-play",
            L = "video_error",
            j = "minute-watched",
            M = "buffer-empty",
            I = "buffer-refill",
            N = "vod_seek",
            D = "player_caption_preset",
            R = "player_caption_learn_more",
            x = 500;
        t.Analytics = function() {
            function e(t, n, r, i, o) {
                a(this, e), this.player = t, this.tracker = n, this.state = r, this.stateStore = i, this.options = o, this.minutesWatchedTimer = new d.MinutesWatched, this.hasPlayed = !1, this.bufferEmptyStartTime = null, this.bufferEmptyCount, this.lastNetworkProfile = -(1 / 0), this.countessTracker, this.valveClient, this.lastSeekTime = null, this.timeStampBeforeSeek = 0, this.isSeekInProgress = !1, this.trackNetworkProfile = this.stateStore.getState().experiments.get(b.NETWORK_PROFILE_COLLECTION), this.countessTracker = new f.CountessTracker({
                    host: v.countessHost
                }), this.latencyTracker = new p.LatencyTracker(this, .001, this.player, this.stateStore), this.valveClient = new y.ValveClient, this.initProperties(), this.initEvents(), this.unsubscribes = [], this.unsubscribes.push(this._subscribeCaptions(this.stateStore))
            }
            return o(e, [{
                key: "_subscribeCaptions",
                value: function(e) {
                    var t = this;
                    return (0, E.subscribe)(e, ["captions"], function(e, n) {
                        var r = e.captions,
                            i = n.captions;
                        r.preset !== i.preset && t.trackEvent(D, {
                            captions_preset: r.preset
                        }), i.learnMoreClicks !== r.learnMoreClicks && t.trackEvent(R, {
                            learn_more_clicks: r.learnMoreClicks
                        })
                    })
                }
            }, {
                key: "initProperties",
                value: function() {
                    if (this.tracker.setProperties((0, g.userInfo)().then(function(e) {
                            return {
                                login: e.login,
                                turbo: Boolean(e.turbo)
                            }
                        })), this.options.channel) {
                        var e = (0, g.channelAPIInfo)(this.options.channel);
                        this.valveClient.channelInfo(e);
                        var t = (0, g.channelViewerInfo)(this.options.channel);
                        this.valveClient.viewerInfo(t), this.tracker.setProperties(t.then(function(e) {
                            return {
                                subscriber: Boolean(e.chansub)
                            }
                        }))
                    }
                }
            }, {
                key: "initEvents",
                value: function() {
                    this.minutesWatchedTimer.on(d.EVENT_MINUTE, this.onMinuteWatched.bind(this)), this.player.addEventListener(S.PLAYER_INIT, this.onBackendInit.bind(this)), this.player.addEventListener(C.LOADSTART, this.onLoadStart.bind(this)), this.player.addEventListener(C.PAUSE, this.onPause.bind(this)), this.player.addEventListener(C.WAITING, this.onWaiting.bind(this)), this.player.addEventListener(C.PLAYING, this.onPlaying.bind(this)), this.player.addEventListener(C.PLAYING, this.onQualityChange.bind(this)), this.player.addEventListener(C.ENDED, this.onEnded.bind(this)), this.player.addEventListener(S.QUALITY_CHANGE, this.onQualityChange.bind(this)), this.player.addEventListener(S.CASTING_CHANGE, this.onCastingChange.bind(this)), this.player.addEventListener(C.ERROR, this.onVideoError.bind(this)), this.player.addEventListener(C.SEEKING, this.onSeeking.bind(this)), this.player.addEventListener(C.TIME_UPDATE, this.onTimeUpdate.bind(this)), this.player.addEventListener(C.CAN_PLAY, this.onCanPlay.bind(this)), this.player.addEventListener(S.IS_SPECTRE, this.onSpectre.bind(this))
                }
            }, {
                key: "getNetworkProfileStats",
                value: function(e) {
                    function t(e, t) {
                        return e + t
                    }
                    if (0 === e.length) return {};
                    var n = e.map(function(e) {
                            return e.firstByteLatency
                        }).reduce(t),
                        r = e.map(function(e) {
                            return e.segmentDuration
                        }).reduce(t),
                        i = e.map(function(e) {
                            return e.downloadDuration
                        }).reduce(t),
                        a = e.map(function(e) {
                            return e.bytes
                        }).reduce(t);
                    return {
                        transport_segments: e.length,
                        transport_first_byte_latency: n,
                        transport_segment_duration: r,
                        transport_download_duration: i,
                        transport_download_bytes: a
                    }
                }
            }, {
                key: "trackEvent",
                value: function(e, t) {
                    var n = this.player.getVideoInfo(),
                        r = (0, u["default"])({}, (0, l["default"])(n, ["bandwidth", "cluster", "current_bitrate", "current_fps", "dropped_frames", "hls_latency_broadcaster", "hls_latency_encoder", "hls_latency_broadcaster_send_time", "hls_latency_ingest_receive_time", "hls_latency_ingest_send_time", "hls_latency_transcode_receive_time", "hls_latency_transcode_send_time", "hls_target_duration", "manifest_cluster", "manifest_node", "serving_id", "node", "origin", "stream_format", "user_ip", "vid_display_height", "vid_display_width", "vid_height", "vid_width", "video_buffer_size"]), {
                            volume: this.player.getVolume(),
                            muted: this.player.getMuted(),
                            is_https: "https" === n.segment_protocol
                        }, t);
                    this.tracker.trackEvent(e, r)
                }
            }, {
                key: "onMinuteWatched",
                value: function() {
                    var e = this,
                        t = this.player.getNetworkProfile().filter(function(e) {
                            return e.startTime > this.lastNetworkProfile
                        }.bind(this));
                    this.lastNetworkProfile = t.reduce(function(e, t) {
                        return Math.max(e, t.startTime)
                    }, this.lastNetworkProfile);
                    var n = this.getNetworkProfileStats(t);
                    this.player.video && (0, u["default"])(n, {
                        vod_timestamp: this.player.getCurrentTime()
                    }), this.trackEvent(j, (0, u["default"])(n, {
                        seconds_offset: this.minutesWatchedTimer.initialDelay / 1e3,
                        minutes_logged: this.minutesWatchedTimer.totalMinutes,
                        captions_enabled: this.stateStore.getState().captions.enabled,
                        quality_change_count: this.stateStore.getState().analytics.qualityChangeCount,
                        player_size_mode: this._getPlayerDisplayMode(),
                        broadcast_id: this.stateStore.getState().streamMetadata._id
                    })), this.stateStore.dispatch((0, k.resetQualityChangeCount)()), this.valveClient.notify(), this.trackNetworkProfile.then(function(n) {
                        "yes" === n && t.length > 0 && e.tracker.trackEvents(t.map(function(e) {
                            return {
                                event: "network_profile",
                                properties: {
                                    bytes: e.bytes,
                                    duration: e.segmentDuration,
                                    time: e.startTime + e.firstByteLatency + e.downloadDuration,
                                    time_to_first_byte: e.firstByteLatency,
                                    download_duration: e.downloadDuration
                                }
                            }
                        }))
                    })
                }
            }, {
                key: "onBackendInit",
                value: function() {
                    this.tracker.setProperty("app_version", this.player.getVersion()), this.tracker.setProperty("backend", this.player.getBackend()), this.tracker.trackEvent(O)
                }
            }, {
                key: "onLoadStart",
                value: function() {
                    this.player.getChannel() ? this.onLoadChannel() : this.player.getVideo() && this.onLoadVideo(), this.hasPlayed = !1, this.bufferEmptyCount = 0
                }
            }, {
                key: "onLoadChannel",
                value: function() {
                    var e = this.player.getChannel(),
                        t = (0, g.channelInfo)(e);
                    t.then(function(e) {
                        this.countessTracker.trackChannelView(e)
                    }.bind(this));
                    var n = t.then(function(e) {
                        return {
                            channel: e.name,
                            channel_id: e._id,
                            game: e.game,
                            live: !0,
                            content_mode: "live",
                            partner: e.partner
                        }
                    });
                    this.tracker.setProperties(n)
                }
            }, {
                key: "onLoadVideo",
                value: function() {
                    var e = this.player.getVideo(),
                        t = (0, g.videoInfo)(e);
                    this.tracker.setProperties(t.then(function(e) {
                        return (0, g.channelInfo)(e.channel.name)
                    }).then(function(e) {
                        return (0, l["default"])(e, "partner")
                    })), t.then(function(e) {
                        this.countessTracker.trackVODView(e)
                    }.bind(this));
                    var n = t.then(function(e) {
                        return {
                            channel: e.channel.name,
                            vod: e._id,
                            vod_id: e._id,
                            vod_type: e.broadcast_type,
                            game: e.game,
                            live: !1,
                            content_mode: "vod"
                        }
                    });
                    this.tracker.setProperties(n)
                }
            }, {
                key: "onWaiting",
                value: function() {
                    this.player.getSeeking() || (this.bufferEmptyStartTime = (new Date).getTime(), this.bufferEmptyCount++, this.trackEvent(M, {
                        buffer_empty_count: this.bufferEmptyCount
                    }))
                }
            }, {
                key: "onPlaying",
                value: function() {
                    if (null !== this.bufferEmptyStartTime) {
                        var e = (new Date).getTime();
                        this.trackEvent(I, {
                            buffering_time: (e - this.bufferEmptyStartTime) / 1e3
                        }), this.bufferEmptyStartTime = null
                    }
                    this.hasPlayed || (this.trackEvent(P, {
                        time_since_load_intent: Date.now() - this.stateStore.getState().analytics.playSessionStartTime
                    }), this.hasPlayed = !0, this.valveClient.notify(), this.stateStore.dispatch(m.sendPlayerBeacon()), this.stateStore.dispatch(m.sendVideoBeacon())), this.minutesWatchedTimer.start()
                }
            }, {
                key: "onCanPlay",
                value: function() {
                    this.isSeekInProgress && (this.isSeekInProgress = !1, this.trackEvent(N, {
                        timestamp_departed: this.timeStampBeforeSeek,
                        timestamp_target: this.player.getCurrentTime(),
                        time_spent_seeking: (Date.now() - this.lastSeekTime) / 1e3
                    })), this.timeStampBeforeSeek = this.player.getCurrentTime()
                }
            }, {
                key: "onSeeking",
                value: function() {
                    this.hasPlayed && !this.isSeekInProgress && (this.isSeekInProgress = !0, this.lastSeekTime = Date.now())
                }
            }, {
                key: "onTimeUpdate",
                value: function() {
                    if (!this.isSeekInProgress) {
                        var e = this.player.getCurrentTime();
                        e - this.timeStampBeforeSeek < x && this.timeStampBeforeSeek < e && (this.timeStampBeforeSeek = e)
                    }
                }
            }, {
                key: "onPause",
                value: function() {
                    this.minutesWatchedTimer.reset()
                }
            }, {
                key: "onEnded",
                value: function() {
                    this.minutesWatchedTimer.reset(), this.bufferEmptyStartTime = null
                }
            }, {
                key: "onSpectre",
                value: function(e) {
                    this.player.getChannel() && this.tracker.setProperties({
                        content_mode: e ? "playlist" : "live"
                    })
                }
            }, {
                key: "onQualityChange",
                value: function() {
                    var e = this.player.getQuality();
                    "chunked" === e && (e = "source"), this.tracker.setProperty("quality", e)
                }
            }, {
                key: "onCastingChange",
                value: function() {
                    var e = this.player.getCasting();
                    "connected" === e || "connecting" === e ? this.tracker.setProperties({
                        player: "chromecast",
                        chromecast_sender: v.trackingPlatform
                    }) : this.tracker.setProperties({
                        player: v.trackingPlatform,
                        chromecast_sender: null
                    })
                }
            }, {
                key: "onVideoError",
                value: function(e) {
                    this.tracker.trackEvent(L, {
                        error_type: e.error_type
                    })
                }
            }, {
                key: "_getPlayerDisplayMode",
                value: function() {
                    return this.state.isFullScreen() ? "fullscreen" : this.options.player === w.PLAYER_POPOUT ? "popout" : this.player.getTheatre() ? "theatre mode" : ""
                }
            }, {
                key: "destroy",
                value: function() {
                    this.minutesWatchedTimer.stop(), this.unsubscribes.map(function(e) {
                        e()
                    })
                }
            }]), e
        }()
    }, function(e, t, n) {
        e.exports = n(51)
    }, function(e, t, n) {
        var r = n(7),
            i = n(52),
            a = n(8),
            o = n(10),
            s = n(34),
            u = n(20),
            c = Object.prototype,
            l = c.propertyIsEnumerable,
            d = !l.call({
                valueOf: 1
            }, "valueOf"),
            f = a(function(e, t) {
                if (d || s(t) || o(t)) return void i(t, u(t), e);
                for (var n in t) r(e, n, t[n])
            });
        e.exports = f
    }, function(e, t, n) {
        function r(e, t, n) {
            return i(e, t, n)
        }
        var i = n(6);
        e.exports = r
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i() {
            this.initialDelay = Math.round(6e4 * Math.random()), this._remainingDelay = this.initialDelay, this._timeout = null, this._timeoutStart = null, this.totalMinutes = 0, this._events = new o["default"]
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.EVENT_MINUTE = void 0, t.MinutesWatched = i;
        var a = n(54),
            o = r(a),
            s = t.EVENT_MINUTE = "minute";
        i.EVENT_INTERVAL = 6e4, i.MAX_DRIFT = 1e4, i.prototype.start = function() {
            null === this._timeout && this._scheduleTick()
        }, i.prototype.stop = function() {
            null !== this._timeout && (clearTimeout(this._timeout), this._timeout = null, this._tick())
        }, i.prototype.reset = function() {
            this.stop(), this._remainingDelay = i.EVENT_INTERVAL
        }, i.prototype.on = function(e, t) {
            this._events.on(e, t)
        }, i.prototype.off = function(e, t) {
            this._events.off(e, t)
        }, i.prototype._tick = function() {
            var e = (new Date).getTime(),
                t = e - this._timeoutStart;
            for (this._remainingDelay -= t, this._remainingDelay <= -i.MAX_DRIFT && (this._remainingDelay = 0), this._remainingDelay >= i.EVENT_INTERVAL + i.MAX_DRIFT && (this._remainingDelay = 0); this._remainingDelay <= 0;) this._remainingDelay += i.EVENT_INTERVAL, this.totalMinutes += 1, setTimeout(this._events.emit.bind(this._events, s), 0)
        }, i.prototype._scheduleTick = function() {
            this._timeoutStart = (new Date).getTime();
            var e = this;
            this._timeout = setTimeout(function() {
                e._tick(), e._scheduleTick()
            }, this._remainingDelay)
        }
    }, function(e, t, n) {
        var r;
        (function() {
            "use strict";

            function t() {}

            function i(e, t) {
                for (var n = e.length; n--;)
                    if (e[n].listener === t) return n;
                return -1
            }

            function a(e) {
                return function() {
                    return this[e].apply(this, arguments)
                }
            }
            var o = t.prototype,
                s = this,
                u = s.EventEmitter;
            o.getListeners = function(e) {
                var t, n, r = this._getEvents();
                if (e instanceof RegExp) {
                    t = {};
                    for (n in r) r.hasOwnProperty(n) && e.test(n) && (t[n] = r[n])
                } else t = r[e] || (r[e] = []);
                return t
            }, o.flattenListeners = function(e) {
                var t, n = [];
                for (t = 0; t < e.length; t += 1) n.push(e[t].listener);
                return n
            }, o.getListenersAsObject = function(e) {
                var t, n = this.getListeners(e);
                return n instanceof Array && (t = {}, t[e] = n), t || n
            }, o.addListener = function(e, t) {
                var n, r = this.getListenersAsObject(e),
                    a = "object" == typeof t;
                for (n in r) r.hasOwnProperty(n) && -1 === i(r[n], t) && r[n].push(a ? t : {
                    listener: t,
                    once: !1
                });
                return this
            }, o.on = a("addListener"), o.addOnceListener = function(e, t) {
                return this.addListener(e, {
                    listener: t,
                    once: !0
                })
            }, o.once = a("addOnceListener"), o.defineEvent = function(e) {
                return this.getListeners(e), this
            }, o.defineEvents = function(e) {
                for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
                return this
            }, o.removeListener = function(e, t) {
                var n, r, a = this.getListenersAsObject(e);
                for (r in a) a.hasOwnProperty(r) && (n = i(a[r], t), -1 !== n && a[r].splice(n, 1));
                return this
            }, o.off = a("removeListener"), o.addListeners = function(e, t) {
                return this.manipulateListeners(!1, e, t)
            }, o.removeListeners = function(e, t) {
                return this.manipulateListeners(!0, e, t)
            }, o.manipulateListeners = function(e, t, n) {
                var r, i, a = e ? this.removeListener : this.addListener,
                    o = e ? this.removeListeners : this.addListeners;
                if ("object" != typeof t || t instanceof RegExp)
                    for (r = n.length; r--;) a.call(this, t, n[r]);
                else
                    for (r in t) t.hasOwnProperty(r) && (i = t[r]) && ("function" == typeof i ? a.call(this, r, i) : o.call(this, r, i));
                return this
            }, o.removeEvent = function(e) {
                var t, n = typeof e,
                    r = this._getEvents();
                if ("string" === n) delete r[e];
                else if (e instanceof RegExp)
                    for (t in r) r.hasOwnProperty(t) && e.test(t) && delete r[t];
                else delete this._events;
                return this
            }, o.removeAllListeners = a("removeEvent"), o.emitEvent = function(e, t) {
                var n, r, i, a, o, s = this.getListenersAsObject(e);
                for (a in s)
                    if (s.hasOwnProperty(a))
                        for (n = s[a].slice(0), i = n.length; i--;) r = n[i], r.once === !0 && this.removeListener(e, r.listener), o = r.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, r.listener);
                return this
            }, o.trigger = a("emitEvent"), o.emit = function(e) {
                var t = Array.prototype.slice.call(arguments, 1);
                return this.emitEvent(e, t)
            }, o.setOnceReturnValue = function(e) {
                return this._onceReturnValue = e, this
            }, o._getOnceReturnValue = function() {
                return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
            }, o._getEvents = function() {
                return this._events || (this._events = {})
            }, t.noConflict = function() {
                return s.EventEmitter = u, t
            }, r = function() {
                return t
            }.call(s, n, s, e), !(void 0 !== r && (e.exports = r))
        }).call(this)
    }, function(e, t) {
        "use strict";

        function n(e) {
            this._host = e.host
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.CountessTracker = n, n.prototype._trackEvent = function(e) {
            var t = new Image;
            t.src = e
        }, n.prototype.trackVODView = function(e) {
            this._trackEvent(e.increment_view_count_url)
        }, n.prototype.trackChannelView = function(e) {
            var t = {
                    type: "channel",
                    id: e._id
                },
                n = {
                    u: JSON.stringify(t)
                },
                r = this._host + "/ping.gif?" + $.param(n);
            this._trackEvent(r)
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e) {
            var t = 4294967295,
                n = 0;
            return function(r) {
                return c.v3(r, n) / t <= e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.LatencyTracker = void 0;
        var o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
        t.murmurSegmentSampler = a;
        var s = n(57),
            u = n(196),
            c = r(u),
            l = n(97),
            d = r(l);
        t.LatencyTracker = function() {
            function e(t, n, r, o) {
                i(this, e), this._analytics = t, this._sample = a(n), this._player = r, this._store = o, r.addEventListener(d.SEGMENT_CHANGE, this._onSegmentChange.bind(this))
            }
            return o(e, [{
                key: "_segmentName",
                value: function(e) {
                    var t = this._store.getState().stream.channel.toLowerCase(),
                        n = this._store.getState().playback.quality;
                    return t + "," + n + "," + e
                }
            }, {
                key: "_onSegmentChange",
                value: function(e) {
                    var t = this._segmentName(e.name);
                    this._sample(t) && this._store.getState().stream instanceof s.LiveContentStream && this._analytics.trackEvent("latency_report_playback", {
                        segment: t,
                        broadcaster_send: e.broadcaster_send,
                        ingest_receive: e.ingest_receive,
                        ingest_send: e.ingest_send,
                        transcode_receive: e.transcode_receive,
                        transcode_send: e.transcode_send,
                        playback_start: e.playback_start
                    })
                }
            }]), e
        }()
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.LiveContentStream = t.CONTENT_MODE_LIVE = void 0;
        var a = function() {
                function e(e, t) {
                    var n = [],
                        r = !0,
                        i = !1,
                        a = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                    } catch (u) {
                        i = !0, a = u
                    } finally {
                        try {
                            !r && s["return"] && s["return"]()
                        } finally {
                            if (i) throw a
                        }
                    }
                    return n
                }
                return function(t, n) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return e(t, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            s = n(50),
            u = r(s),
            c = n(58),
            l = r(c),
            d = n(88),
            f = n(195),
            p = t.CONTENT_MODE_LIVE = "live";
        t.LiveContentStream = function() {
            function e(t, n, r) {
                i(this, e), this._channelName = t, this._oAuthToken = n, this._usherParams = r, this._restrictedBitrates = []
            }
            return o(e, [{
                key: "contentType",
                get: function() {
                    return p
                }
            }, {
                key: "channel",
                get: function() {
                    return this._channelName
                }
            }, {
                key: "restrictedBitrates",
                get: function() {
                    return this._restrictedBitrates
                }
            }, {
                key: "videoId",
                get: function() {
                    return ""
                }
            }, {
                key: "accessToken",
                get: function() {
                    var e = this,
                        t = !1;
                    try {
                        if (this._nAuth) {
                            var n = JSON.parse(this._nAuth.token);
                            t = Date.now() >= 1e3 * n.expires
                        }
                    } catch (r) {
                        console.error("Unable to JSON.parse nAuth.token: " + this._nAuth.token)
                    }
                    return (!this._nAuthPromise || t) && (this._nAuthPromise = this._oAuthToken.then(function(t) {
                        return (0, f.fetchChannelAccessToken)(e._channelName, t)
                    }).then(function(t) {
                        return e._nAuth = t, t
                    })), this._nAuthPromise
                }
            }, {
                key: "streamUrl",
                get: function() {
                    var e = this;
                    return Promise.all([this.accessToken, this._usherParams]).then(function(t) {
                        var n = a(t, 2),
                            r = n[0],
                            i = n[1],
                            o = (0, u["default"])({
                                token: r.token,
                                sig: r.sig,
                                allow_source: !0,
                                allow_spectre: !0
                            }, (0, l["default"])(i, ["protocol"]));
                        return e._restrictedBitrates = JSON.parse(r.token).chansub.restricted_bitrates, "" + i.protocol + d.usherHost + "/api/channel/hls/" + e._channelName.toLowerCase() + ".m3u8?" + $.param(o)
                    })
                }
            }]), e
        }()
    }, function(e, t, n) {
        var r = n(40),
            i = n(59),
            a = n(45),
            o = n(47),
            s = n(20),
            u = n(17),
            c = u(function(e, t) {
                return null == e ? {} : (t = r(a(t, 1), String), o(e, i(s(e), t)))
            });
        e.exports = c
    }, function(e, t, n) {
        function r(e, t, n, r) {
            var d = -1,
                f = a,
                p = !0,
                h = e.length,
                v = [],
                g = t.length;
            if (!h) return v;
            n && (t = s(t, u(n))), r ? (f = o, p = !1) : t.length >= l && (f = c, p = !1, t = new i(t));
            e: for (; ++d < h;) {
                var _ = e[d],
                    m = n ? n(_) : _;
                if (p && m === m) {
                    for (var y = g; y--;)
                        if (t[y] === m) continue e;
                    v.push(_)
                } else f(t, m, r) || v.push(_)
            }
            return v
        }
        var i = n(60),
            a = n(84),
            o = n(85),
            s = n(40),
            u = n(86),
            c = n(87),
            l = 200;
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            var t = -1,
                n = e ? e.length : 0;
            for (this.__data__ = new i; ++t < n;) this.push(e[t])
        }
        var i = n(61),
            a = n(83);
        r.prototype.push = a, e.exports = r
    }, function(e, t, n) {
        function r(e) {
            var t = -1,
                n = e ? e.length : 0;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        var i = n(62),
            a = n(69),
            o = n(75),
            s = n(78),
            u = n(80);
        r.prototype.clear = i, r.prototype["delete"] = a, r.prototype.get = o, r.prototype.has = s, r.prototype.set = u, e.exports = r
    }, function(e, t, n) {
        function r() {
            this.__data__ = {
                hash: new i,
                map: a ? new a : [],
                string: new i
            }
        }
        var i = n(63),
            a = n(68);
        e.exports = r
    }, function(e, t, n) {
        function r() {}
        var i = n(64),
            a = Object.prototype;
        r.prototype = i ? i(null) : a, e.exports = r
    }, function(e, t, n) {
        var r = n(65),
            i = r(Object, "create");
        e.exports = i
    }, function(e, t, n) {
        function r(e, t) {
            var n = e[t];
            return i(n) ? n : void 0
        }
        var i = n(66);
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            return null == e ? !1 : i(e) ? f.test(l.call(e)) : o(e) && (a(e) ? f : u).test(e)
        }
        var i = n(13),
            a = n(67),
            o = n(31),
            s = /[\\^$.*+?()[\]{}|]/g,
            u = /^\[object .+?Constructor\]$/,
            c = Object.prototype,
            l = Function.prototype.toString,
            d = c.hasOwnProperty,
            f = RegExp("^" + l.call(d).replace(s, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        e.exports = r
    }, function(e, t) {
        function n(e) {
            var t = !1;
            if (null != e && "function" != typeof e.toString) try {
                t = !!(e + "")
            } catch (n) {}
            return t
        }
        e.exports = n
    }, function(e, t, n) {
        var r = n(65),
            i = n(23),
            a = r(i, "Map");
        e.exports = a
    }, function(e, t, n) {
        function r(e) {
            var t = this.__data__;
            return s(e) ? o("string" == typeof e ? t.string : t.hash, e) : i ? t.map["delete"](e) : a(t.map, e)
        }
        var i = n(68),
            a = n(70),
            o = n(72),
            s = n(74);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            var n = i(e, t);
            if (0 > n) return !1;
            var r = e.length - 1;
            return n == r ? e.pop() : o.call(e, n, 1), !0
        }
        var i = n(71),
            a = Array.prototype,
            o = a.splice;
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            for (var n = e.length; n--;)
                if (i(e[n][0], t)) return n;
            return -1
        }
        var i = n(4);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            return i(e, t) && delete e[t]
        }
        var i = n(73);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            return i ? void 0 !== e[t] : o.call(e, t)
        }
        var i = n(64),
            a = Object.prototype,
            o = a.hasOwnProperty;
        e.exports = r
    }, function(e, t) {
        function n(e) {
            var t = typeof e;
            return "number" == t || "boolean" == t || "string" == t && "__proto__" != e || null == e
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e) {
            var t = this.__data__;
            return s(e) ? o("string" == typeof e ? t.string : t.hash, e) : i ? t.map.get(e) : a(t.map, e)
        }
        var i = n(68),
            a = n(76),
            o = n(77),
            s = n(74);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            var n = i(e, t);
            return 0 > n ? void 0 : e[n][1]
        }
        var i = n(71);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            if (i) {
                var n = e[t];
                return n === a ? void 0 : n
            }
            return s.call(e, t) ? e[t] : void 0
        }
        var i = n(64),
            a = "__lodash_hash_undefined__",
            o = Object.prototype,
            s = o.hasOwnProperty;
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            var t = this.__data__;
            return s(e) ? o("string" == typeof e ? t.string : t.hash, e) : i ? t.map.has(e) : a(t.map, e)
        }
        var i = n(68),
            a = n(79),
            o = n(73),
            s = n(74);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            return i(e, t) > -1
        }
        var i = n(71);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            var n = this.__data__;
            return s(e) ? o("string" == typeof e ? n.string : n.hash, e, t) : i ? n.map.set(e, t) : a(n.map, e, t), this
        }
        var i = n(68),
            a = n(81),
            o = n(82),
            s = n(74);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t, n) {
            var r = i(e, t);
            0 > r ? e.push([t, n]) : e[r][1] = n
        }
        var i = n(71);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t, n) {
            e[t] = i && void 0 === n ? a : n
        }
        var i = n(64),
            a = "__lodash_hash_undefined__";
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            var t = this.__data__;
            if (i(e)) {
                var n = t.__data__,
                    r = "string" == typeof e ? n.string : n.hash;
                r[e] = a
            } else t.set(e, a)
        }
        var i = n(74),
            a = "__lodash_hash_undefined__";
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            return !!e.length && i(e, t, 0) > -1
        }
        var i = n(36);
        e.exports = r
    }, function(e, t) {
        function n(e, t, n) {
            for (var r = -1, i = e.length; ++r < i;)
                if (n(t, e[r])) return !0;
            return !1
        }
        e.exports = n
    }, function(e, t) {
        function n(e) {
            return function(t) {
                return e(t)
            }
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e, t) {
            var n = e.__data__;
            if (i(t)) {
                var r = n.__data__,
                    o = "string" == typeof t ? r.string : r.hash;
                return o[t] === a
            }
            return n.has(t)
        }
        var i = n(74),
            a = "__lodash_hash_undefined__";
        e.exports = r
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.resumewatchingHost = t.httpsQualityCarryover = t.unknownError = t.videoError = t.channelError = t.flashError = t.livestreamResumePushback = t.cancelResumeAmount = t.hotkeySeekAmount = t.defaultLanguage = t.leaveDialog = t.imaNetworkID = t.doubleClickUrl = t.flashTimeout = t.volumeStepAmount = t.embedParameters = t.mutedSegmentsMessage = t.chromecastStates = t.debugIgnoreEvents = t.allEvents = t.customEvents = t.mediaEvents = t.reportHideDelay = t.hoverControlsDelay = t.initialControlsDelay = t.qualityChangeDuration = t.qualityText = t.bufferPollDelay = t.pubSubEnviroment = t.version = t.chromecastId = t.popoutSize = t.gamePath = t.countessHost = t.spadeIgnore = t.spadeHost = t.mixpanelIgnore = t.mixpanelToken = t.mixpanelHost = t.trackingPlatform = t.apiTimeout = t.playerHost = t.valveApiHost = t.usherHost = t.spectreHost = t.apiHost = t.twitchHost = t.domain = void 0;
        var a = n(89),
            o = i(a),
            s = n(95),
            u = n(96),
            c = r(u),
            l = n(97),
            d = r(l),
            f = n(98),
            p = r(f),
            h = n(99),
            v = n(101),
            g = "testplayer.twitch.tv",
            _ = (t.domain = "twitch.tv", t.twitchHost = "//twitch.tv"),
            m = t.apiHost = "https://api.twitch.tv",
            y = (t.spectreHost = "//spectre.twitch.tv", t.usherHost = "//usher.ttvnw.net", t.valveApiHost = m + "/steam/watching", t.playerHost = function() {
                var e = document.currentScript,
                    t = document.getElementsByTagName("script");
                if (!e) {
                    var n = Array.prototype.filter.call(t, function(e) {
                        return e.src && e.src.match(/player(?:\.\w+)?\.js$/i)
                    });
                    e = 1 === n.length ? n[0] : t[t.length - 1]
                }
                var r = (0, s.parseUri)(e.src);
                if (r.authority === g) {
                    var i = r.path.split("/").slice(1, -2).join("/");
                    return r.protocol + "://" + r.authority + "/" + i
                }
                return r.protocol + "://" + r.authority
            }(), t.apiTimeout = 1e4, t.trackingPlatform = "web", t.mixpanelHost = "//api.mixpanel.com", t.mixpanelToken = "809576468572134f909dffa6bd0dcfcf", t.mixpanelIgnore = ["minute-buffered", "x_untrusted_video_init", "x_untrusted_video-play", "x_untrusted_minute-watched", "x_untrusted_buffer-empty", "x_untrusted_buffer-refill", "network_profile"], t.spadeHost = "//spade.twitch.tv", t.spadeIgnore = [], t.countessHost = "//countess.twitch.tv", t.gamePath = _ + "/directory/game", t.popoutSize = {
                width: 853,
                height: 480
            }, t.chromecastId = "358E83DC", t.version = "0.7.5", t.pubSubEnviroment = "production", t.bufferPollDelay = 1e3, t.qualityText = {
                chunked: "Source",
                high: "High",
                medium: "Medium",
                low: "Low",
                mobile: "Mobile",
                auto: "Auto"
            }, t.qualityChangeDuration = 6e3, t.initialControlsDelay = 8e3, t.hoverControlsDelay = 5e3, t.reportHideDelay = 2e3, t.mediaEvents = [p.LOADSTART, p.PROGRESS, p.SUSPEND, p.ABORT, p.ERROR, p.EMPTIED, p.STALLED, p.LOADED_METADATA, p.LOADED_DATA, p.CAN_PLAY, p.CAN_PLAY_THROUGH, p.PLAYING, p.WAITING, p.SEEKING, p.SEEKED, p.ENDED, p.DURATION_CHANGE, p.TIME_UPDATE, p.PLAY, p.PAUSE, p.VOLUME_CHANGE, p.RATE_CHANGE]),
            b = t.customEvents = [c.AD_START, c.AD_END, "adcompanionrendered", d.CASTING_CHANGE, d.BUFFER_CHANGE, d.STATS_CHANGE, d.QUALITY_CHANGE, d.QUALITIES_CHANGE, d.PLAYER_INIT, d.LOADED_CHANNEL, d.LOADED_VIDEO, d.VIEWERS_CHANGE, h.FULLSCREEN_CHANGE, d.RESTRICTED, d.SEGMENT_CHANGE, d.IS_SPECTRE, d.THEATRE_CHANGE, d.ONLINE, d.OFFLINE, "usherfail", d.CAPTION_UPDATE];
        t.allEvents = (0, o["default"])(y, b), t.debugIgnoreEvents = [d.STATS_CHANGE, p.TIME_UPDATE, d.BUFFER_CHANGE], t.chromecastStates = [v.CHROMECAST_UNAVAILABLE, v.CHROMECAST_AVAILABLE, v.CHROMECAST_CONNECTING, v.CHROMECAST_CONNECTED, p.ERROR], t.mutedSegmentsMessage = "Audio for portions of this video has been muted as it appears to contain copyrighted content owned or controlled by a third party.", t.embedParameters = ["channel", "video", "muted", "autoplay", "time", "t", "debug", "debug_ads", "html5", "quality", "controls", "devcaptions"], t.volumeStepAmount = .1, t.flashTimeout = 5e3, t.doubleClickUrl = "//pubads.g.doubleclick.net/gampad/ads", t.imaNetworkID = "3576121", t.leaveDialog = {
            enabled: !1,
            sinceEnded: 45,
            viewerThreshold: 5e4,
            text: "Don't panicBasket. The broadcast is down, but don't refresh just yet. When the broadcast is back, the player will automatically reload for you.",
            refreshTimeout: 20,
            warningDuration: 45
        }, t.defaultLanguage = "en-US", t.hotkeySeekAmount = 5, t.cancelResumeAmount = 120, t.livestreamResumePushback = 30, t.flashError = "No supported video backend available; Flash is not installed", t.channelError = "Channel could not be found, or has been deleted by its owner", t.videoError = "Video could not be found, or has been deleted by its owner", t.unknownError = "An unknown error has occured", t.httpsQualityCarryover = new Date(2016, 3, 30), t.resumewatchingHost = m + "/api/resumewatching/"
    }, function(e, t, n) {
        var r = n(45),
            i = n(90),
            a = n(17),
            o = a(function(e) {
                return i(r(e, 1, !0))
            });
        e.exports = o
    }, function(e, t, n) {
        function r(e, t, n) {
            var r = -1,
                d = a,
                f = e.length,
                p = !0,
                h = [],
                v = h;
            if (n) p = !1, d = o;
            else if (f >= l) {
                var g = t ? null : u(e);
                if (g) return c(g);
                p = !1, d = s, v = new i
            } else v = t ? [] : h;
            e: for (; ++r < f;) {
                var _ = e[r],
                    m = t ? t(_) : _;
                if (p && m === m) {
                    for (var y = v.length; y--;)
                        if (v[y] === m) continue e;
                    t && v.push(m), h.push(_)
                } else d(v, m, n) || (v !== h && v.push(m), h.push(_))
            }
            return h
        }
        var i = n(60),
            a = n(84),
            o = n(85),
            s = n(87),
            u = n(91),
            c = n(94),
            l = 200;
        e.exports = r
    }, function(e, t, n) {
        var r = n(92),
            i = n(93),
            a = r && 2 === new r([1, 2]).size ? function(e) {
                return new r(e)
            } : i;
        e.exports = a
    }, function(e, t, n) {
        var r = n(65),
            i = n(23),
            a = r(i, "Set");
        e.exports = a
    }, function(e, t) {
        function n() {}
        e.exports = n
    }, function(e, t) {
        function n(e) {
            var t = -1,
                n = Array(e.size);
            return e.forEach(function(e) {
                n[++t] = e
            }), n
        }
        e.exports = n
    }, function(e, t) {
        "use strict";

        function n(e) {
            for (var t = {
                    strictMode: !1,
                    key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
                    q: {
                        name: "queryKey",
                        parser: /(?:^|&)([^&=]*)=?([^&]*)/g
                    },
                    parser: {
                        strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                        loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                    }
                }, n = t.parser[t.strictMode ? "strict" : "loose"].exec(e), r = {}, i = 14; i--;) r[t.key[i]] = n[i] || "";
            return r[t.q.name] = {}, r[t.key[12]].replace(t.q.parser, function(e, n, i) {
                n && (r[t.q.name][n] = i)
            }), r
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.parseUri = n
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.AD_START = "adstart", t.AD_END = "adend", t.AD_DISPLAY_STARTED = "adDisplayStarted", t.AD_DISPLAY_ENDED = "adDisplayEnded", t.AD_REQUEST = "adRequested", t.AD_REQUEST_DECLINED = "adRequestDeclined", t.AD_REQUEST_RESPONSE = "adRequestResponse", t.AD_REQUEST_ERROR = "adRequestError", t.AD_ERROR = "adError", t.COMPANION_RENDERED = "adCompanionRendered"
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.PLAYER_INIT = "init", t.PLAYBACK_STATISTICS = "playbackStatistics", t.SPECTRE_PLAYLIST = "spectrePlaylist", t.CHANSUB_REQUIRED = "chansubRequired", t.LOADED_CHANNEL = "loadedchannel", t.LOADED_VIDEO = "loadedvideo", t.VIDEO_FAILURE = "videoFailure", t.FORMATS = "videoFormats", t.FORMAT_CHANGED = "videoFormatChanged", t.TIME_CHANGE = "timeChange", t.BUFFER_CHANGE = "bufferChange", t.SEGMENT_CHANGE = "segmentchange", t.USHER_FAIL_ERROR = "usherFail", t.CAPTION_UPDATE = "captions", t.SEEK_FAILED = "seekfailed", t.VIEWER_COUNT = "viewerCount", t.VIEWERS_CHANGE = "viewerschange", t.STREAM_LOADED = "streamLoaded", t.VIDEO_LOADED = "videoLoaded", t.VIDEO_PAUSED = "videoPaused", t.QUALITIES_CHANGE = "qualitieschange", t.QUALITY_CHANGE = "qualitychange", t.ONLINE = "online", t.OFFLINE = "offline", t.STATS_CHANGE = "statschange", t.RESTRICTED = "restricted", t.IS_SPECTRE = "isspectre", t.CASTING_CHANGE = "castingchange", t.THEATRE_CHANGE = "theatrechange", t.MIDROLL_REQUESTED = "midrollrequested", t.MANIFEST_EXTRA_INFO = "manifestExtraInfo"
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.LOADSTART = "loadstart", t.PROGRESS = "progress", t.SUSPEND = "suspend", t.ABORT = "abort", t.ERROR = "error", t.EMPTIED = "emptied", t.STALLED = "stalled", t.LOADED_METADATA = "loadedmetadata", t.LOADED_DATA = "loadeddata", t.CAN_PLAY = "canplay", t.CAN_PLAY_THROUGH = "canplaythrough", t.PLAYING = "playing", t.WAITING = "waiting", t.SEEKING = "seeking", t.SEEKED = "seeked", t.ENDED = "ended", t.DURATION_CHANGE = "durationchange", t.TIME_UPDATE = "timeupdate", t.PLAY = "play", t.PAUSE = "pause", t.VOLUME_CHANGE = "volumechange", t.RATE_CHANGE = "ratechange"
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.FullScreen = t.FULLSCREEN_CHANGE = void 0;
        var a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            o = n(100),
            s = r(o),
            u = n(54),
            c = r(u),
            l = t.FULLSCREEN_CHANGE = "fullscreenchange";
        t.FullScreen = function() {
            function e(t) {
                i(this, e), this._root = t, this._eventEmitter = new c["default"]
            }
            return a(e, [{
                key: "addEventListener",
                value: function(e, t) {
                    this._eventEmitter.addListener(e, t)
                }
            }, {
                key: "removeEventListener",
                value: function(e, t) {
                    this._eventEmitter.removeListener(e, t)
                }
            }, {
                key: "canFullScreen",
                value: function() {
                    return s["default"].enabled
                }
            }, {
                key: "isFullScreen",
                value: function() {
                    return s["default"].element === this._root
                }
            }, {
                key: "setFullScreen",
                value: function(e) {
                    if (this.isFullScreen() !== e) {
                        var t = this._onFullScreenChange.bind(this);
                        s["default"].toggle(this._root, t, t)
                    }
                }
            }, {
                key: "_onFullScreenChange",
                value: function() {
                    this._eventEmitter.emit(l)
                }
            }, {
                key: "destroy",
                value: function() {
                    this._eventEmitter.removeAllListeners()
                }
            }]), e
        }()
    }, function(e, t, n) {
        var r;
        /*! BigScreen
         * v2.0.5 - 2015-05-02
         * 
         * Copyright 2015 Brad Dougherty <me@brad.is>; MIT License
         */
        ! function(i, a, o) {
            "use strict";

            function s(e) {
                var t = null;
                if ("VIDEO" === e.tagName) t = e;
                else {
                    var n = e.getElementsByTagName("video");
                    n[0] && (t = n[0])
                }
                return t
            }

            function u(e) {
                var t = s(e);
                if (t && t.webkitEnterFullscreen) {
                    try {
                        t.readyState < t.HAVE_METADATA ? (t.addEventListener("loadedmetadata", function r() {
                            t.removeEventListener("loadedmetadata", r, !1), t.webkitEnterFullscreen(), v = !!t.getAttribute("controls")
                        }, !1), t.load()) : (t.webkitEnterFullscreen(), v = !!t.getAttribute("controls")), h = t
                    } catch (n) {
                        return E("not_supported", e)
                    }
                    return !0
                }
                return E(void 0 === p.request ? "not_supported" : "not_enabled", e)
            }

            function c() {
                w.element || (b(), d())
            }

            function l() {
                o && "webkitfullscreenchange" === p.change && window.addEventListener("resize", c, !1)
            }

            function d() {
                o && "webkitfullscreenchange" === p.change && window.removeEventListener("resize", c, !1)
            }
            var f = /i(Pad|Phone|Pod)/.test(navigator.userAgent) && parseInt(navigator.userAgent.replace(/^.*OS (\d+)_(\d+).*$/, "$1.$2"), 10) >= 7,
                p = function() {
                    var e = a.createElement("video"),
                        t = {
                            request: ["requestFullscreen", "webkitRequestFullscreen", "webkitRequestFullScreen", "mozRequestFullScreen", "msRequestFullscreen"],
                            exit: ["exitFullscreen", "webkitCancelFullScreen", "webkitExitFullscreen", "mozCancelFullScreen", "msExitFullscreen"],
                            enabled: ["fullscreenEnabled", "webkitFullscreenEnabled", "mozFullScreenEnabled", "msFullscreenEnabled"],
                            element: ["fullscreenElement", "webkitFullscreenElement", "webkitCurrentFullScreenElement", "mozFullScreenElement", "msFullscreenElement"],
                            change: ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"],
                            error: ["fullscreenerror", "webkitfullscreenerror", "mozfullscreenerror", "MSFullscreenError"]
                        },
                        n = {};
                    for (var r in t)
                        for (var i = 0, o = t[r].length; o > i; i++)
                            if (t[r][i] in e || t[r][i] in a || "on" + t[r][i].toLowerCase() in a) {
                                n[r] = t[r][i];
                                break
                            }
                    return n
                }(),
                h = null,
                v = null,
                g = function() {},
                _ = [],
                m = !1;
            navigator.userAgent.indexOf("Android") > -1 && navigator.userAgent.indexOf("Chrome") > -1 && (m = parseInt(navigator.userAgent.replace(/^.*Chrome\/(\d+).*$/, "$1"), 10) || !0);
            var y = function(e) {
                    var t = _[_.length - 1];
                    t && (e !== t.element && e !== h || !t.hasEntered) && ("VIDEO" === e.tagName && (h = e), 1 === _.length && w.onenter(w.element), t.enter.call(t.element, e || t.element), t.hasEntered = !0)
                },
                b = function() {
                    !h || v || f || (h.setAttribute("controls", "controls"), h.removeAttribute("controls")), h = null, v = null;
                    var e = _.pop();
                    e && (e.exit.call(e.element), w.element || (_.forEach(function(e) {
                        e.exit.call(e.element)
                    }), _ = [], w.onexit()))
                },
                E = function(e, t) {
                    if (_.length > 0) {
                        var n = _.pop();
                        t = t || n.element, n.error.call(t, e), w.onerror(t, e)
                    }
                },
                w = {
                    request: function(e, t, n, r) {
                        if (e = e || a.body, _.push({
                                element: e,
                                enter: t || g,
                                exit: n || g,
                                error: r || g
                            }), void 0 === p.request) return void u(e);
                        if (o && a[p.enabled] === !1) return void u(e);
                        if (m !== !1 && 32 > m) return void u(e);
                        if (o && void 0 === p.enabled) return p.enabled = "webkitFullscreenEnabled", e[p.request](), void setTimeout(function() {
                            a[p.element] ? a[p.enabled] = !0 : (a[p.enabled] = !1, u(e))
                        }, 250);
                        try {
                            e[p.request](), setTimeout(function() {
                                a[p.element] || E(o ? "not_enabled" : "not_allowed", e)
                            }, 100)
                        } catch (i) {
                            E("not_enabled", e)
                        }
                    },
                    exit: function() {
                        d(), a[p.exit]()
                    },
                    toggle: function(e, t, n, r) {
                        w.element ? w.exit() : w.request(e, t, n, r)
                    },
                    videoEnabled: function(e) {
                        if (w.enabled) return !0;
                        e = e || a.body;
                        var t = s(e);
                        return t && void 0 !== t.webkitSupportsFullscreen ? t.readyState < t.HAVE_METADATA ? "maybe" : t.webkitSupportsFullscreen : !1
                    },
                    onenter: g,
                    onexit: g,
                    onchange: g,
                    onerror: g
                };
            try {
                Object.defineProperties(w, {
                    element: {
                        enumerable: !0,
                        get: function() {
                            return h && h.webkitDisplayingFullscreen ? h : a[p.element] || null
                        }
                    },
                    enabled: {
                        enumerable: !0,
                        get: function() {
                            return "webkitCancelFullScreen" !== p.exit || o ? m !== !1 && 32 > m ? !1 : a[p.enabled] || !1 : !0
                        }
                    }
                }), p.change && a.addEventListener(p.change, function(e) {
                    if (w.onchange(w.element), w.element) {
                        var t = _[_.length - 2];
                        t && t.element === w.element ? b() : (y(w.element), l())
                    } else b()
                }, !1), a.addEventListener("webkitbeginfullscreen", function(e) {
                    var t = !0;
                    if (_.length > 0)
                        for (var n = 0, r = _.length; r > n; n++) {
                            var i = s(_[n].element);
                            if (i === e.srcElement) {
                                t = !1;
                                break
                            }
                        }
                    t && _.push({
                        element: e.srcElement,
                        enter: g,
                        exit: g,
                        error: g
                    }), w.onchange(e.srcElement), y(e.srcElement)
                }, !0), a.addEventListener("webkitendfullscreen", function(e) {
                    w.onchange(e.srcElement), b(e.srcElement)
                }, !0), p.error && a.addEventListener(p.error, function(e) {
                    E("not_allowed")
                }, !1)
            } catch (k) {
                w.element = null, w.enabled = !1
            }
            r = function() {
                return w
            }.call(t, n, t, e), !(void 0 !== r && (e.exports = r))
        }(this, document, self !== top)
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.State = t.KEY_CAPTIONS_MODAL_SEEN = t.CHROMECAST_CONNECTED = t.CHROMECAST_CONNECTING = t.CHROMECAST_AVAILABLE = t.CHROMECAST_UNAVAILABLE = t.PLAYBACK_ENDED = t.PLAYBACK_PLAYING = t.PLAYBACK_PAUSED = t.EVENT_PLAYER_UPDATE = t.EVENT_STATE_UPDATE = void 0;
        var o = function() {
                function e(e, t) {
                    var n = [],
                        r = !0,
                        i = !1,
                        a = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                    } catch (u) {
                        i = !0, a = u
                    } finally {
                        try {
                            !r && s["return"] && s["return"]()
                        } finally {
                            if (i) throw a
                        }
                    }
                    return n
                }
                return function(t, n) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return e(t, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            u = n(35),
            c = i(u),
            l = n(54),
            d = i(l),
            f = n(102),
            p = n(161),
            h = n(88),
            v = r(h),
            g = n(171),
            _ = n(157),
            m = r(_),
            y = n(175),
            b = r(y),
            E = n(176),
            w = i(E),
            k = n(177),
            T = n(99),
            S = n(98),
            A = r(S),
            C = n(97),
            O = r(C),
            P = n(174),
            L = r(P),
            j = n(192),
            M = n(57),
            I = n(193),
            N = n(194),
            D = t.EVENT_STATE_UPDATE = "stateupdate",
            R = t.EVENT_PLAYER_UPDATE = "player",
            x = t.PLAYBACK_PAUSED = "paused",
            U = t.PLAYBACK_PLAYING = "playing",
            V = t.PLAYBACK_ENDED = "ended",
            H = t.CHROMECAST_UNAVAILABLE = "unavailable",
            B = t.CHROMECAST_AVAILABLE = "available",
            $ = (t.CHROMECAST_CONNECTING = "connecting", t.CHROMECAST_CONNECTED = "connected"),
            F = "mature",
            q = "leaveData",
            G = t.KEY_CAPTIONS_MODAL_SEEN = "captionsModalSeen",
            z = [D, R],
            Y = "markerschange",
            W = "mutedsegmentschange",
            K = "previewschange";
        t.State = function() {
            function e(t, n, r, i, o, s) {
                a(this, e), this._options = s, this._backend = t, this._stateStore = i, this._pubSub = n, this._timelineMetadata = new f.TimelineMetadata(o), this._fullscreen = r, this._eventEmitter = new d["default"], this._theatreModeEnabled = !1, this._isVODRestricted = !1, this._hasCurrentStreamPlayed = !1, this._viewers = 0, this._markers = [], this._mutedSegments = [], this._previews = f.NULL_PREVIEW, v.allEvents.forEach(function(e) {
                    t.addEventListener(e, this.handleEvent.bind(this, e))
                }, this), r.addEventListener(T.FULLSCREEN_CHANGE, this.handleEvent.bind(this, T.FULLSCREEN_CHANGE)), n.addEventListener(k.EVENT_ONLINE, this.handleEvent.bind(this, k.EVENT_ONLINE)), n.addEventListener(k.EVENT_OFFLINE, this.handleEvent.bind(this, k.EVENT_OFFLINE))
            }
            return s(e, [{
                key: "_onViewersChange",
                value: function(e) {
                    this._viewers = e.viewers, this._backend.onViewersChange && this._backend.onViewersChange(e), this._eventEmitter.emit(D, this)
                }
            }, {
                key: "canFullScreen",
                value: function() {
                    return this._fullscreen.canFullScreen()
                }
            }, {
                key: "isFullScreen",
                value: function() {
                    return this._fullscreen.isFullScreen()
                }
            }, {
                key: "getMarkers",
                value: function() {
                    return this._markers
                }
            }, {
                key: "isMature",
                value: function() {
                    return b.get(F, !1)
                }
            }, {
                key: "setIsMature",
                value: function(e) {
                    b.set(F, e)
                }
            }, {
                key: "getMutedSegments",
                value: function() {
                    return this._mutedSegments
                }
            }, {
                key: "getPreviews",
                value: function() {
                    return this._previews
                }
            }, {
                key: "setSessionLeaveData",
                value: function(e) {
                    w["default"].setItem(q, e)
                }
            }, {
                key: "setTheatreEnabled",
                value: function(e) {
                    this._theatreModeEnabled = e, this._eventEmitter.emit(D, this)
                }
            }, {
                key: "isVODRestricted",
                value: function() {
                    return this._isVODRestricted
                }
            }, {
                key: "getChannelInfo",
                value: function(e) {
                    return m.channelInfo(e)
                }
            }, {
                key: "getStreamInfo",
                value: function(e) {
                    return m.streamInfo(e)
                }
            }, {
                key: "getVideoInfo",
                value: function(e) {
                    return m.videoInfo(e)
                }
            }, {
                key: "getChannelViewerInfo",
                value: function(e) {
                    return m.channelViewerInfo(e)
                }
            }, {
                key: "getOfflinePlaylistInfo",
                value: function(e) {
                    return this.getChannelInfo(e).then(function(e) {
                        return m.offlinePlaylistInfo(e._id)
                    })
                }
            }, {
                key: "getSeenCaptionsModal",
                value: function() {
                    return b.get(G, !1)
                }
            }, {
                key: "setSeenCaptionsModal",
                value: function() {
                    b.set(G, !0)
                }
            }, {
                key: "handleEvent",
                value: function(e, t) {
                    var n = this;
                    switch (this._logStateChange(e), e) {
                        case O.SEGMENT_CHANGE:
                            this._currentSegment = t.name;
                            break;
                        case A.LOADED_METADATA:
                            this._updateIsVODRestricted(), this._stateStore.getState().stream instanceof M.LiveContentStream ? (this._backend.getVideoInfo().broadcast_id && this._stateStore.dispatch((0, I.setBroadcastID)(this._backend.getVideoInfo().broadcast_id)), this._stateStore.dispatch((0, j.setOnline)(!this._backend.isSpectre())), this._stateStore.dispatch((0, I.fetchStreamMetadata)())) : this._stateStore.getState().stream instanceof N.VODContentStream && this._timelineMetadata.getMutedSegments(this.videoID).then(function(e) {
                                return n._updateMutedSegments(e)
                            });
                            break;
                        case A.LOADSTART:
                            this._hasCurrentStreamPlayed = !1, this._resetTimelineMetadata(), this._updateIsVODRestricted();
                            break;
                        case A.PLAYING:
                            !this._hasCurrentStreamPlayed && this.videoID && this._retrieveTimelineMetadata(), this._hasCurrentStreamPlayed = !0;
                            break;
                        case O.USHER_FAIL_ERROR:
                            this._updateIsVODRestricted()
                    }
                    this._eventEmitter.emit(R, e), this._eventEmitter.emit(D, this)
                }
            }, {
                key: "_resetTimelineMetadata",
                value: function() {
                    this._markers = [], this._previews = f.NULL_PREVIEW, this._mutedSegments = []
                }
            }, {
                key: "_retrieveTimelineMetadata",
                value: function() {
                    var e = this,
                        t = this._stateStore.getState(),
                        n = t.experiments;
                    m.videoInfo(this.videoID).then(function(t) {
                        return e._timelineMetadata.getPreviews(t)
                    }).then(function(t) {
                        return e._updatePreviews(t)
                    }), n.get(p.MARKERS).then(function(t) {
                        "no" !== t && m.videoInfo(e.videoID).then(function(t) {
                            return e._timelineMetadata.getMarkers(t)
                        }).then(function(t) {
                            return e._updateMarkers(t)
                        })
                    })
                }
            }, {
                key: "addEventListener",
                value: function(e, t) {
                    (0, c["default"])(z, e) && this._eventEmitter.addListener(e, t)
                }
            }, {
                key: "removeEventListener",
                value: function(e, t) {
                    this._eventEmitter.removeListener(e, t)
                }
            }, {
                key: "toJSON",
                value: function() {
                    return {
                        channelName: this.channelName,
                        currentTime: this.currentTime,
                        duration: this._stateStore.getState().playback.duration,
                        muted: this.muted,
                        playback: this.playback,
                        quality: this.quality,
                        qualitiesAvailable: this.qualitiesAvailable,
                        stats: this.stats,
                        videoID: this.videoID,
                        viewers: this.viewers,
                        volume: this.volume
                    }
                }
            }, {
                key: "_logStateChange",
                value: function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? null : arguments[0];
                    this._options.debug && !(0, c["default"])(v.debugIgnoreEvents, e) && null !== e && (console.groupCollapsed("state change: %s", e), console.log("partial state: %o", this.toJSON()), console.groupEnd())
                }
            }, {
                key: "_updateMarkers",
                value: function(e) {
                    this._markers = e, this._logStateChange(Y), this._eventEmitter.emit(D, this)
                }
            }, {
                key: "_updateMutedSegments",
                value: function(e) {
                    this._mutedSegments = e, this._logStateChange(W), this._eventEmitter.emit(D, this)
                }
            }, {
                key: "_updatePreviews",
                value: function(e) {
                    this._previews = e, this._logStateChange(K), this._eventEmitter.emit(D, this)
                }
            }, {
                key: "_updateIsVODRestricted",
                value: function() {
                    var e = this;
                    if (this._isVODRestricted = !1, this._eventEmitter.emit(D, this), null !== this.videoID && null === this.channelName) {
                        var t = m.videoInfo(this.videoID),
                            n = t.then(function(e) {
                                return m.channelViewerInfo(e.channel.name)
                            });
                        Promise.all([t, n]).then(function(t) {
                            var n = o(t, 2),
                                r = n[0],
                                i = n[1];
                            e._isVODRestricted = m.isVODRestricted(i, r), e._eventEmitter.emit(D, e)
                        })
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    var e = this;
                    z.map(function(t) {
                        e._eventEmitter.removeEvent(t)
                    })
                }
            }, {
                key: "autoplayEnabled",
                get: function() {
                    return this._backend.getAutoplay()
                }
            }, {
                key: "buffered",
                get: function() {
                    return this._backend.getBuffered()
                }
            }, {
                key: "castingDevice",
                get: function() {
                    return g.BackendChromecast.getDevice()
                }
            }, {
                key: "castingState",
                get: function() {
                    if (g.BackendChromecast.getReadyState() !== g.BackendChromecast.HAVE_NOTHING) return $;
                    switch (g.BackendChromecast.getNetworkState()) {
                        case g.BackendChromecast.NETWORK_EMPTY:
                            return H;
                        case g.BackendChromecast.NETWORK_IDLE:
                            return B;
                        default:
                            return $
                    }
                }
            }, {
                key: "channelName",
                get: function() {
                    return this._backend.getChannel()
                }
            }, {
                key: "currentBackend",
                get: function() {
                    return this._backend.getBackend()
                }
            }, {
                key: "currentTime",
                get: function() {
                    return this._backend.getCurrentTime()
                }
            }, {
                key: "error",
                get: function() {
                    return this._backend.error
                }
            }, {
                key: "isLoading",
                get: function() {
                    return this.playback === U && this._backend.getReadyState() <= L.HAVE_CURRENT_DATA
                }
            }, {
                key: "muted",
                get: function() {
                    return this._backend.getMuted()
                }
            }, {
                key: "online",
                get: function() {
                    return this._stateStore.getState().online
                }
            }, {
                key: "playback",
                get: function() {
                    return this._backend.getPaused() ? x : this._backend.getEnded() ? V : U
                }
            }, {
                key: "quality",
                get: function() {
                    return this._backend.getQuality()
                }
            }, {
                key: "qualitiesAvailable",
                get: function() {
                    return this._backend.getQualities()
                }
            }, {
                key: "sessionLeaveData",
                get: function() {
                    return w["default"].getItem(q)
                }
            }, {
                key: "isSeeking",
                get: function() {
                    return this._backend.getSeeking()
                }
            }, {
                key: "isSpectre",
                get: function() {
                    return this._backend.isSpectre()
                }
            }, {
                key: "stats",
                get: function() {
                    return this._backend.getStats()
                }
            }, {
                key: "supportedBackends",
                get: function() {
                    return this._backend.getSupportedBackends()
                }
            }, {
                key: "theatreEnabled",
                get: function() {
                    return this._theatreModeEnabled
                }
            }, {
                key: "viewers",
                get: function() {
                    return this._viewers
                }
            }, {
                key: "videoID",
                get: function() {
                    return this._backend.getVideo()
                }
            }, {
                key: "videoURL",
                get: function() {
                    return this._backend.getVideoURL()
                }
            }, {
                key: "volume",
                get: function() {
                    return this._backend.getVolume()
                }
            }, {
                key: "currentSegment",
                get: function() {
                    return this._currentSegment
                }
            }]), e
        }()
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.TimelineMetadata = t.NULL_MARKER_THUMBNAIL = t.NULL_PREVIEW = void 0;
        var o, s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            u = n(103),
            c = r(u),
            l = n(154),
            d = r(l),
            f = n(38),
            p = r(f),
            h = n(95),
            v = n(156),
            g = n(157),
            _ = t.NULL_PREVIEW = {
                count: 0,
                lq: {
                    width: 0,
                    height: 0,
                    rows: 0,
                    cols: 0,
                    URLs: [""]
                },
                hq: {
                    width: 0,
                    height: 0,
                    rows: 0,
                    cols: 0,
                    URLs: [""]
                }
            },
            m = t.NULL_MARKER_THUMBNAIL = {
                imageURL: "",
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                cols: 0
            },
            y = "low",
            b = "high",
            E = "https://clipmn.twitch.tv/prod/",
            w = "lol",
            k = "hs",
            T = "leagueOfLegendTags",
            S = "hearthStoneOpeningTags",
            A = "hearthStoneMatchTags",
            C = "ungroupedTags",
            O = (o = {}, a(o, T, function(e, t, n) {
                var r = {
                    title: "Match " + (t + 1),
                    info: "",
                    startTime: e.start_sec,
                    thumbnail: L(e, t, n)
                };
                return r
            }), a(o, A, function(e, t, n) {
                var r = {
                    title: "Match " + (t + 1),
                    info: "<strong>" + e.game_data.characters[0] + "</strong> vs " + e.game_data.characters[1],
                    startTime: e.start_sec,
                    thumbnail: L(e, t, n)
                };
                return r
            }), o),
            P = function() {
                return null
            },
            L = function(e, t, n) {
                return null === e.thumbnail_index ? m : {
                    imageURL: "" + E + n.thumbnail_sheet,
                    x: e.thumbnail_index[1] * n.thumbnail_size[0],
                    y: e.thumbnail_index[0] * n.thumbnail_size[1],
                    width: n.thumbnail_size[0],
                    height: n.thumbnail_size[1],
                    cols: n.sheet_dimensions[1]
                }
            };
        t.TimelineMetadata = function() {
            function e(t, n) {
                i(this, e), this._analytics = t, this._options = n
            }
            return s(e, [{
                key: "getPreviews",
                value: function(e) {
                    var t = this;
                    return (0, v.fetch)({
                        url: e.seek_previews_url,
                        dataType: "json"
                    }).then(function(n) {
                        return t._normalizedPreviews(n, e.seek_previews_url)
                    })["catch"](function() {
                        return _
                    })
                }
            }, {
                key: "getMutedSegments",
                value: function(e) {
                    var t = this;
                    return (0, g.videoInfo)(e).then(function(e) {
                        return t._normalizedMutedSegments(e.muted_segments)
                    })["catch"](function() {
                        return []
                    })
                }
            }, {
                key: "getMarkers",
                value: function(e) {
                    var t = this;
                    return (0, v.fetch)({
                        url: E + "channels.json",
                        dataType: "json"
                    }).then(function(t) {
                        return -1 === t.indexOf(e.channel.name) ? Promise.reject("Current channel is not marker enabled") : (0, v.fetch)({
                            url: "" + E + e._id + ".json",
                            dataType: "json"
                        })
                    }).then(function(e) {
                        return t._analytics.trackEvent("vod_metadata_request", {
                            response: "success"
                        }), e
                    }).then(this._normalizedMarkers)["catch"](function(n) {
                        return n.status && -1 !== n.responseText.indexOf(e._id + ".json") && t._analytics.trackEvent("vod_metadata_request", {
                            response: "404"
                        }), []
                    })
                }
            }, {
                key: "_normalizedPreviews",
                value: function(e, t) {
                    if (null === e) return _;
                    var n = (0, h.parseUri)(t),
                        r = n.protocol + "://" + n.host + n.directory,
                        i = e.map(function(e) {
                            return e.quality
                        }),
                        a = i.indexOf(y),
                        o = i.indexOf(b);
                    return {
                        count: e[a].count,
                        lq: {
                            width: e[a].width,
                            height: e[a].height,
                            rows: e[a].rows,
                            cols: e[a].cols,
                            URLs: e[a].images.map(function(e) {
                                return "" + r + e
                            })
                        },
                        hq: {
                            width: e[o].width,
                            height: e[o].height,
                            rows: e[o].rows,
                            cols: e[o].cols,
                            URLs: e[o].images.map(function(e) {
                                return "" + r + e
                            })
                        }
                    }
                }
            }, {
                key: "_normalizedMutedSegments",
                value: function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? [] : arguments[0];
                    if (e.length <= 1) return e;
                    var t = e.slice(0).sort(function(e, t) {
                        return e.offset - t.offset
                    });
                    return this._combineOverlappingSegments(t)
                }
            }, {
                key: "_normalizedMarkers",
                value: function(e) {
                    if (null === e) return [];
                    var t = (0, c["default"])(e.data.tags, function(e) {
                        switch (e.game_type) {
                            case w:
                                return T;
                            case k:
                                switch (e.game_data.type) {
                                    case 0:
                                        return A;
                                    case 1:
                                        return S
                                }
                        }
                        return C
                    });
                    return Array.prototype.concat.apply([], (0, p["default"])((0, d["default"])(t, function(t, n) {
                        return t.map(function(t, r) {
                            var i = O[n] || P;
                            return i(t, r, e.data)
                        })
                    }))).filter(function(e) {
                        return null !== e
                    }).sort()
                }
            }, {
                key: "_combineOverlappingSegments",
                value: function(e) {
                    return e.reduce(function(e, t) {
                        var n = e[e.length - 1],
                            r = n.offset + n.duration,
                            i = t.offset + t.duration;
                        return r < t.offset ? e.push(t) : i > r && (n.duration = i - n.offset), e
                    }, [e[0]])
                }
            }]), e
        }()
    }, function(e, t, n) {
        var r = n(104),
            i = Object.prototype,
            a = i.hasOwnProperty,
            o = r(function(e, t, n) {
                a.call(e, n) ? e[n].push(t) : e[n] = [t]
            });
        e.exports = o
    }, function(e, t, n) {
        function r(e, t) {
            return function(n, r) {
                var u = s(n) ? i : a,
                    c = t ? t() : {};
                return u(n, e, o(r), c)
            }
        }
        var i = n(105),
            a = n(106),
            o = n(112),
            s = n(32);
        e.exports = r
    }, function(e, t) {
        function n(e, t, n, r) {
            for (var i = -1, a = e.length; ++i < a;) {
                var o = e[i];
                t(r, o, n(o), e)
            }
            return r
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e, t, n, r) {
            return i(e, function(e, i, a) {
                t(r, e, n(e), a)
            }), r
        }
        var i = n(107);
        e.exports = r
    }, function(e, t, n) {
        var r = n(108),
            i = n(111),
            a = i(r);
        e.exports = a
    }, function(e, t, n) {
        function r(e, t) {
            return e && i(e, t, a)
        }
        var i = n(109),
            a = n(41);
        e.exports = r
    }, function(e, t, n) {
        var r = n(110),
            i = r();
        e.exports = i
    }, function(e, t) {
        function n(e) {
            return function(t, n, r) {
                for (var i = -1, a = Object(t), o = r(t), s = o.length; s--;) {
                    var u = o[e ? s : ++i];
                    if (n(a[u], u, a) === !1) break
                }
                return t
            }
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e, t) {
            return function(n, r) {
                if (null == n) return n;
                if (!i(n)) return e(n, r);
                for (var a = n.length, o = t ? a : -1, s = Object(n);
                    (t ? o-- : ++o < a) && r(s[o], o, s) !== !1;);
                return n
            }
        }
        var i = n(10);
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            var t = typeof e;
            return "function" == t ? e : null == e ? o : "object" == t ? s(e) ? a(e[0], e[1]) : i(e) : u(e)
        }
        var i = n(113),
            a = n(137),
            o = n(151),
            s = n(32),
            u = n(152);
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            var t = a(e);
            if (1 == t.length && t[0][2]) {
                var n = t[0][0],
                    r = t[0][1];
                return function(e) {
                    return null == e ? !1 : e[n] === r && (void 0 !== r || n in Object(e))
                }
            }
            return function(n) {
                return n === e || i(n, e, t)
            }
        }
        var i = n(114),
            a = n(133);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t, n, r) {
            var u = n.length,
                c = u,
                l = !r;
            if (null == e) return !c;
            for (e = Object(e); u--;) {
                var d = n[u];
                if (l && d[2] ? d[1] !== e[d[0]] : !(d[0] in e)) return !1
            }
            for (; ++u < c;) {
                d = n[u];
                var f = d[0],
                    p = e[f],
                    h = d[1];
                if (l && d[2]) {
                    if (void 0 === p && !(f in e)) return !1
                } else {
                    var v = new i,
                        g = r ? r(p, h, f, e, t, v) : void 0;
                    if (!(void 0 === g ? a(h, p, r, o | s, v) : g)) return !1
                }
            }
            return !0
        }
        var i = n(115),
            a = n(121),
            o = 1,
            s = 2;
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            var t = -1,
                n = e ? e.length : 0;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        var i = n(116),
            a = n(117),
            o = n(118),
            s = n(119),
            u = n(120);
        r.prototype.clear = i, r.prototype["delete"] = a, r.prototype.get = o, r.prototype.has = s, r.prototype.set = u, e.exports = r
    }, function(e, t) {
        function n() {
            this.__data__ = {
                array: [],
                map: null
            }
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e) {
            var t = this.__data__,
                n = t.array;
            return n ? i(n, e) : t.map["delete"](e)
        }
        var i = n(70);
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            var t = this.__data__,
                n = t.array;
            return n ? i(n, e) : t.map.get(e)
        }
        var i = n(76);
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            var t = this.__data__,
                n = t.array;
            return n ? i(n, e) : t.map.has(e)
        }
        var i = n(79);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            var n = this.__data__,
                r = n.array;
            r && (r.length < o - 1 ? a(r, e, t) : (n.array = null, n.map = new i(r)));
            var s = n.map;
            return s && s.set(e, t), this
        }
        var i = n(61),
            a = n(81),
            o = 200;
        e.exports = r
    }, function(e, t, n) {
        function r(e, t, n, s, u) {
            return e === t ? !0 : null == e || null == t || !a(e) && !o(t) ? e !== e && t !== t : i(e, t, r, n, s, u)
        }
        var i = n(122),
            a = n(14),
            o = n(31);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t, n, r, g, m) {
            var y = c(e),
                b = c(t),
                E = h,
                w = h;
            y || (E = u(e), E = E == p ? v : E), b || (w = u(t), w = w == p ? v : w);
            var k = E == v && !l(e),
                T = w == v && !l(t),
                S = E == w;
            if (S && !k) return m || (m = new i), y || d(e) ? a(e, t, n, r, g, m) : o(e, t, E, n, r, g, m);
            if (!(g & f)) {
                var A = k && _.call(e, "__wrapped__"),
                    C = T && _.call(t, "__wrapped__");
                if (A || C) return m || (m = new i), n(A ? e.value() : e, C ? t.value() : t, r, g, m)
            }
            return S ? (m || (m = new i), s(e, t, n, r, g, m)) : !1
        }
        var i = n(115),
            a = n(123),
            o = n(125),
            s = n(129),
            u = n(130),
            c = n(32),
            l = n(67),
            d = n(132),
            f = 2,
            p = "[object Arguments]",
            h = "[object Array]",
            v = "[object Object]",
            g = Object.prototype,
            _ = g.hasOwnProperty;
        e.exports = r
    }, function(e, t, n) {
        function r(e, t, n, r, s, u) {
            var c = -1,
                l = s & o,
                d = s & a,
                f = e.length,
                p = t.length;
            if (f != p && !(l && p > f)) return !1;
            var h = u.get(e);
            if (h) return h == t;
            var v = !0;
            for (u.set(e, t); ++c < f;) {
                var g = e[c],
                    _ = t[c];
                if (r) var m = l ? r(_, g, c, t, e, u) : r(g, _, c, e, t, u);
                if (void 0 !== m) {
                    if (m) continue;
                    v = !1;
                    break
                }
                if (d) {
                    if (!i(t, function(e) {
                            return g === e || n(g, e, r, s, u)
                        })) {
                        v = !1;
                        break
                    }
                } else if (g !== _ && !n(g, _, r, s, u)) {
                    v = !1;
                    break
                }
            }
            return u["delete"](e), v
        }
        var i = n(124),
            a = 1,
            o = 2;
        e.exports = r
    }, function(e, t) {
        function n(e, t) {
            for (var n = -1, r = e.length; ++n < r;)
                if (t(e[n], n, e)) return !0;
            return !1
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e, t, n, r, i, E, k) {
            switch (n) {
                case b:
                    return e.byteLength == t.byteLength && r(new a(e), new a(t)) ? !0 : !1;
                case d:
                case f:
                    return +e == +t;
                case p:
                    return e.name == t.name && e.message == t.message;
                case v:
                    return e != +e ? t != +t : e == +t;
                case g:
                case m:
                    return e == t + "";
                case h:
                    var T = s;
                case _:
                    var S = E & l;
                    if (T || (T = u), e.size != t.size && !S) return !1;
                    var A = k.get(e);
                    return A ? A == t : o(T(e), T(t), r, i, E | c, k.set(e, t));
                case y:
                    if (w) return w.call(e) == w.call(t)
            }
            return !1
        }
        var i = n(126),
            a = n(127),
            o = n(123),
            s = n(128),
            u = n(94),
            c = 1,
            l = 2,
            d = "[object Boolean]",
            f = "[object Date]",
            p = "[object Error]",
            h = "[object Map]",
            v = "[object Number]",
            g = "[object RegExp]",
            _ = "[object Set]",
            m = "[object String]",
            y = "[object Symbol]",
            b = "[object ArrayBuffer]",
            E = i ? i.prototype : void 0,
            w = E ? E.valueOf : void 0;
        e.exports = r
    }, function(e, t, n) {
        var r = n(23),
            i = r.Symbol;
        e.exports = i
    }, function(e, t, n) {
        var r = n(23),
            i = r.Uint8Array;
        e.exports = i
    }, function(e, t) {
        function n(e) {
            var t = -1,
                n = Array(e.size);
            return e.forEach(function(e, r) {
                n[++t] = [r, e]
            }), n
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e, t, n, r, s, u) {
            var c = s & o,
                l = a(e),
                d = l.length,
                f = a(t),
                p = f.length;
            if (d != p && !c) return !1;
            for (var h = d; h--;) {
                var v = l[h];
                if (!(c ? v in t : i(t, v))) return !1
            }
            var g = u.get(e);
            if (g) return g == t;
            var _ = !0;
            u.set(e, t);
            for (var m = c; ++h < d;) {
                v = l[h];
                var y = e[v],
                    b = t[v];
                if (r) var E = c ? r(b, y, v, t, e, u) : r(y, b, v, e, t, u);
                if (!(void 0 === E ? y === b || n(y, b, r, s, u) : E)) {
                    _ = !1;
                    break
                }
                m || (m = "constructor" == v)
            }
            if (_ && !m) {
                var w = e.constructor,
                    k = t.constructor;
                w != k && "constructor" in e && "constructor" in t && !("function" == typeof w && w instanceof w && "function" == typeof k && k instanceof k) && (_ = !1)
            }
            return u["delete"](e), _
        }
        var i = n(42),
            a = n(41),
            o = 2;
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            return p.call(e)
        }
        var i = n(68),
            a = n(92),
            o = n(131),
            s = "[object Map]",
            u = "[object Object]",
            c = "[object Set]",
            l = "[object WeakMap]",
            d = Object.prototype,
            f = Function.prototype.toString,
            p = d.toString,
            h = i ? f.call(i) : "",
            v = a ? f.call(a) : "",
            g = o ? f.call(o) : "";
        (i && r(new i) != s || a && r(new a) != c || o && r(new o) != l) && (r = function(e) {
            var t = p.call(e),
                n = t == u ? e.constructor : null,
                r = "function" == typeof n ? f.call(n) : "";
            if (r) switch (r) {
                case h:
                    return s;
                case v:
                    return c;
                case g:
                    return l
            }
            return t
        }), e.exports = r
    }, function(e, t, n) {
        var r = n(65),
            i = n(23),
            a = r(i, "WeakMap");
        e.exports = a
    }, function(e, t, n) {
        function r(e) {
            return a(e) && i(e.length) && !!P[j.call(e)]
        }
        var i = n(15),
            a = n(31),
            o = "[object Arguments]",
            s = "[object Array]",
            u = "[object Boolean]",
            c = "[object Date]",
            l = "[object Error]",
            d = "[object Function]",
            f = "[object Map]",
            p = "[object Number]",
            h = "[object Object]",
            v = "[object RegExp]",
            g = "[object Set]",
            _ = "[object String]",
            m = "[object WeakMap]",
            y = "[object ArrayBuffer]",
            b = "[object Float32Array]",
            E = "[object Float64Array]",
            w = "[object Int8Array]",
            k = "[object Int16Array]",
            T = "[object Int32Array]",
            S = "[object Uint8Array]",
            A = "[object Uint8ClampedArray]",
            C = "[object Uint16Array]",
            O = "[object Uint32Array]",
            P = {};
        P[b] = P[E] = P[w] = P[k] = P[T] = P[S] = P[A] = P[C] = P[O] = !0, P[o] = P[s] = P[y] = P[u] = P[c] = P[l] = P[d] = P[f] = P[p] = P[h] = P[v] = P[g] = P[_] = P[m] = !1;
        var L = Object.prototype,
            j = L.toString;
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            for (var t = a(e), n = t.length; n--;) t[n][2] = i(t[n][1]);
            return t
        }
        var i = n(134),
            a = n(135);
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            return e === e && !i(e)
        }
        var i = n(14);
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            return i(e, a(e))
        }
        var i = n(136),
            a = n(41);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            return i(t, function(t) {
                return [t, e[t]]
            })
        }
        var i = n(40);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            return function(n) {
                var r = a(n, e);
                return void 0 === r && r === t ? o(n, e) : i(t, r, void 0, s | u)
            }
        }
        var i = n(121),
            a = n(138),
            o = n(145),
            s = 1,
            u = 2;
        e.exports = r
    }, function(e, t, n) {
        function r(e, t, n) {
            var r = null == e ? void 0 : i(e, t);
            return void 0 === r ? n : r
        }
        var i = n(139);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            t = a(t, e) ? [t + ""] : i(t);
            for (var n = 0, r = t.length; null != e && r > n;) e = e[t[n++]];
            return n && n == r ? e : void 0
        }
        var i = n(140),
            a = n(144);
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            return i(e) ? e : a(e)
        }
        var i = n(32),
            a = n(141);
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            var t = [];
            return i(e).replace(a, function(e, n, r, i) {
                t.push(r ? i.replace(o, "$1") : n || e)
            }), t
        }
        var i = n(142),
            a = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g,
            o = /\\(\\)?/g;
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            if ("string" == typeof e) return e;
            if (null == e) return "";
            if (a(e)) return u ? u.call(e) : "";
            var t = e + "";
            return "0" == t && 1 / e == -o ? "-0" : t
        }
        var i = n(126),
            a = n(143),
            o = 1 / 0,
            s = i ? i.prototype : void 0,
            u = s ? s.toString : void 0;
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            return "symbol" == typeof e || i(e) && s.call(e) == a
        }
        var i = n(31),
            a = "[object Symbol]",
            o = Object.prototype,
            s = o.toString;
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            return "number" == typeof e ? !0 : !i(e) && (o.test(e) || !a.test(e) || null != t && e in Object(t))
        }
        var i = n(32),
            a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            o = /^\w*$/;
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            return a(e, t, i)
        }
        var i = n(146),
            a = n(147);
        e.exports = r
    }, function(e, t) {
        function n(e, t) {
            return t in Object(e)
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e, t, n) {
            if (null == e) return !1;
            var r = n(e, t);
            r || u(t) || (t = i(t), e = f(e, t), null != e && (t = d(t), r = n(e, t)));
            var p = e ? e.length : void 0;
            return r || !!p && c(p) && s(t, p) && (o(e) || l(e) || a(e))
        }
        var i = n(140),
            a = n(29),
            o = n(32),
            s = n(16),
            u = n(144),
            c = n(15),
            l = n(33),
            d = n(148),
            f = n(149);
        e.exports = r
    }, function(e, t) {
        function n(e) {
            var t = e ? e.length : 0;
            return t ? e[t - 1] : void 0
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e, t) {
            return 1 == t.length ? e : a(e, i(t, 0, -1))
        }
        var i = n(150),
            a = n(138);
        e.exports = r
    }, function(e, t) {
        function n(e, t, n) {
            var r = -1,
                i = e.length;
            0 > t && (t = -t > i ? 0 : i + t), n = n > i ? i : n, 0 > n && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
            for (var a = Array(i); ++r < i;) a[r] = e[r + t];
            return a
        }
        e.exports = n
    }, function(e, t) {
        function n(e) {
            return e
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e) {
            return o(e) ? i(e) : a(e)
        }
        var i = n(12),
            a = n(153),
            o = n(144);
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            return function(t) {
                return i(t, e)
            }
        }
        var i = n(139);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            var n = s(e) ? i : o;
            return n(e, a(t, 3))
        }
        var i = n(40),
            a = n(112),
            o = n(155),
            s = n(32);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            var n = -1,
                r = a(e) ? Array(e.length) : [];
            return i(e, function(e, i, a) {
                r[++n] = t(e, i, a)
            }), r
        }
        var i = n(107),
            a = n(10);
        e.exports = r
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e) {
            var t = (0, o["default"])({
                dataType: c,
                timeout: s.apiTimeout
            }, e);
            return e.hasOwnProperty("data") && (t.data = Object.keys(e.data).reduce(function(t, n) {
                return null !== e.data[n] && (t[n] = e.data[n]), t
            }, {})), Promise.resolve($.ajax(t))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.fetch = i;
        var a = n(50),
            o = r(a),
            s = n(88),
            u = !!("withCredentials" in new XMLHttpRequest),
            c = u ? "json" : "jsonp"
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e, t) {
            var n = {
                Accept: b,
                "Client-ID": y
            };
            return t ? void t.then(function(t) {
                return n.Authorization = "Oauth " + t.token, o(e, n)
            }) : o(e, n)
        }

        function o(e, t) {
            var n = $.ajax({
                url: g.apiHost + "/kraken/" + e,
                headers: t,
                dataType: m,
                timeout: g.apiTimeout
            });
            return Promise.resolve(n)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.acceptHeader = t.clientID = t.videoUrl = t.channelUrl = t.isVODRestricted = t.accessToken = t.oauthToken = t.channelAPIInfo = t.krakenUserInfo = t.userInfo = t.krakenRequest = t.channelViewerInfo = t.offlinePlaylistInfo = t.streamInfo = t.productInfo = t.videoInfo = t.channelInfo = void 0;
        var s = n(50),
            u = i(s),
            c = n(158),
            l = i(c),
            d = n(44),
            f = i(d),
            p = n(159),
            h = i(p),
            v = n(88),
            g = r(v),
            _ = !!("withCredentials" in new XMLHttpRequest),
            m = _ ? "json" : "jsonp",
            y = "jzkbprff40iqj646a697cyrvl0zt2m6",
            b = "application/vnd.twitchtv.v3+json",
            E = function(e) {
                return e.replace(/[^A-Za-z0-9_]/g, "")
            },
            w = (0, l["default"])(function(e) {
                if (null === e) return Promise.reject(new Error("No channel info available on null channel ID"));
                var t = $.ajax({
                    url: g.apiHost + "/kraken/channels/" + E(e),
                    dataType: m,
                    timeout: g.apiTimeout,
                    headers: {
                        Accept: b,
                        "Client-ID": y
                    }
                });
                return Promise.resolve(t)
            }),
            k = (0, l["default"])(function(e) {
                if (null === e) return Promise.reject(new Error("No video info available on null video ID"));
                var t = $.ajax({
                        url: g.apiHost + "/kraken/videos/" + E(e),
                        dataType: m,
                        timeout: g.apiTimeout,
                        headers: {
                            Accept: b,
                            "Client-ID": y
                        }
                    }),
                    n = $.ajax({
                        url: g.apiHost + "/api/videos/" + E(e),
                        dataType: "jsonp",
                        timeout: g.apiTimeout
                    }).then(function(e) {
                        return (0, f["default"])(e, ["muted_segments", "increment_view_count_url", "restrictions", "seek_previews_url"])
                    }),
                    r = Promise.all([t, n]);
                return r.then(function(e) {
                    return (0, u["default"])({}, e[0], e[1])
                })
            }),
            T = (0, l["default"])(function(e) {
                var t = $.ajax({
                    url: g.apiHost + "/api/channels/" + E(e) + "/product",
                    dataType: m,
                    timeout: g.apiTimeout
                });
                return Promise.resolve(t)
            }),
            S = function(e) {
                var t = $.ajax({
                    url: g.apiHost + "/kraken/streams/" + E(e),
                    dataType: m,
                    timeout: g.apiTimeout,
                    headers: {
                        Accept: b,
                        "Client-ID": y
                    }
                });
                return Promise.resolve(t)
            },
            A = function(e) {
                var t = $.ajax({
                    url: g.spectreHost + "/v1/channels/" + e,
                    dataType: "jsonp",
                    timeout: g.apiTimeout
                });
                return Promise.resolve(t)
            },
            C = (0, l["default"])(function(e) {
                var t = $.ajax({
                    url: g.apiHost + "/api/channels/" + E(e) + "/viewer",
                    xhrFields: {
                        withCredentials: !0
                    },
                    dataType: m,
                    timeout: g.apiTimeout
                });
                return Promise.resolve(t)
            }),
            O = (0, l["default"])(function() {
                return j().then(function() {
                    var e = $.ajax({
                        url: g.apiHost + "/api/viewer/info.json",
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: m,
                        timeout: g.apiTimeout
                    });
                    return Promise.resolve(e)
                })
            }),
            P = (0, l["default"])(function() {
                return j().then(function(e) {
                    var t = $.ajax({
                        url: g.apiHost + "/kraken/user",
                        headers: {
                            Authorization: "OAuth " + e.token,
                            Accept: b,
                            "Client-ID": y
                        },
                        dataType: m,
                        timeout: g.apiTimeout
                    });
                    return Promise.resolve(t)
                })
            }),
            L = (0, l["default"])(function(e) {
                return j().then(function() {
                    var t = $.ajax({
                        url: g.apiHost + "/api/channels/" + e,
                        dataType: m,
                        timeout: g.apiTimeout
                    });
                    return Promise.resolve(t)
                })
            }),
            j = (0, l["default"])(function() {
                var e = $.ajax({
                    url: g.apiHost + "/api/viewer/token.json",
                    xhrFields: {
                        withCredentials: !0
                    },
                    dataType: m,
                    timeout: g.apiTimeout
                });
                return Promise.resolve(e)
            }),
            M = function(e, t) {
                var n = function(n) {
                    var r;
                    "channel" === e ? r = g.apiHost + "/api/channels/" + E(t) + "/access_token" : "video" === e && (r = g.apiHost + "/api/vods/" + E(t) + "/access_token");
                    var i = $.ajax({
                        url: r,
                        data: {
                            oauth_token: n
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: m,
                        timeout: g.apiTimeout
                    });
                    return Promise.resolve(i)
                };
                return j().then(function(e) {
                    return n(e.token)
                }, function() {
                    return n()
                })
            },
            I = function(e, t) {
                return null !== e.chansub || e.is_admin ? !1 : (0, h["default"])(t.restrictions, function(e, t) {
                    return e || "chansub" === t
                }, !1)
            },
            N = function(e, t) {
                var n = g.twitchHost + "/" + E(e);
                return t && (n += "?" + $.param(t)), n
            },
            D = function(e, t, n) {
                var r = N(e),
                    i = t[0],
                    a = t.substring(1);
                return r += "/" + E(i) + "/" + E(a), n && (r += "?" + $.param(n)), r
            };
        t.channelInfo = w, t.videoInfo = k, t.productInfo = T, t.streamInfo = S, t.offlinePlaylistInfo = A, t.channelViewerInfo = C, t.krakenRequest = a, t.userInfo = O, t.krakenUserInfo = P, t.channelAPIInfo = L, t.oauthToken = j, t.accessToken = M, t.isVODRestricted = I, t.channelUrl = N, t.videoUrl = D, t.clientID = y, t.acceptHeader = b
    }, function(e, t, n) {
        function r(e, t) {
            if ("function" != typeof e || t && "function" != typeof t) throw new TypeError(a);
            var n = function() {
                var r = arguments,
                    i = t ? t.apply(this, r) : r[0],
                    a = n.cache;
                if (a.has(i)) return a.get(i);
                var o = e.apply(this, r);
                return n.cache = a.set(i, o), o
            };
            return n.cache = new r.Cache, n
        }
        var i = n(61),
            a = "Expected a function";
        r.Cache = i, e.exports = r
    }, function(e, t, n) {
        function r(e, t, n) {
            var r = u(e) ? i : s,
                c = arguments.length < 3;
            return r(e, o(t, 4), n, c, a)
        }
        var i = n(48),
            a = n(107),
            o = n(112),
            s = n(160),
            u = n(32);
        e.exports = r
    }, function(e, t) {
        function n(e, t, n, r, i) {
            return i(e, function(e, i, a) {
                n = r ? (r = !1, e) : t(n, e, i, a)
            }), n
        }
        e.exports = n
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function a(e) {
            var t, n;
            return new s["default"]({
                defaults: (t = {}, i(t, d, "no"), i(t, f, "no"), i(t, p, "no"), i(t, h, "http:"), i(t, g, "no"), i(t, v, "no"), i(t, m, "off"), i(t, y, "no"), i(t, b, "no"), i(t, E, "no"), i(t, w, "control"), t),
                deviceID: e.deviceID,
                overrides: (n = {}, i(n, g, k(_)), i(n, m, k("v2")), i(n, p, k("yes")), i(n, f, k("yes")), i(n, h, k("https:")), i(n, v, k("yes")), i(n, b, k("yes")), n),
                platform: "web",
                login: e.login,
                provider: new c["default"](c["default"].SERVICE_URL),
                Promise: Promise
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.FLASH_PLAYER_OPTIMIZATION = t.IN_PLAYER_RECOMMENDATIONS = t.USE_JS_ADS_IN_FLASH = t.USE_LANTERN = t.CAPTIONS = t.CLIPS_EXPERIMENT_ENABLED = t.CLIPS = t.HTML5_TOGGLE = t.USHER_PROTOCOL = t.MARKERS = t.ABS_V2 = t.NETWORK_PROFILE_COLLECTION = void 0, t.createClient = a;
        var o = n(162),
            s = r(o),
            u = n(170),
            c = r(u),
            l = n(157),
            d = t.NETWORK_PROFILE_COLLECTION = "5fbb67a0-b4ff-4775-b836-e9a348a87481",
            f = t.ABS_V2 = "c5824f4a-ecb8-4ef1-9d49-18885bf8bba5",
            p = t.MARKERS = "f725b4b2-bd4c-4cc9-a354-d0db1e762955",
            h = t.USHER_PROTOCOL = "fc2b4b0b-32dd-4e55-8e73-d87b9985a70e",
            v = t.HTML5_TOGGLE = "865ce2f3-52be-4a8c-87fe-d8ad580f4679",
            g = t.CLIPS = "b4d61bdb-c174-47e6-a2f9-a46a4088ac26",
            _ = t.CLIPS_EXPERIMENT_ENABLED = "yes",
            m = t.CAPTIONS = "4afcc1d7-b6f4-489a-beb3-0a32eb780592",
            y = t.USE_LANTERN = "c0168c60-b0f7-4766-aac6-b6edf7555302",
            b = t.USE_JS_ADS_IN_FLASH = "75025ac0-54d8-48fc-a634-1b30a3d3939b",
            E = t.IN_PLAYER_RECOMMENDATIONS = "c926728f-d1d3-4b09-b868-db3e2aa000cc",
            w = t.FLASH_PLAYER_OPTIMIZATION = "7c804f58-cae5-4d51-9d0f-b2dd44cd8baa",
            k = function(e) {
                return (0, l.krakenUserInfo)().then(function(t) {
                    return "staff" === t.type ? e : Promise.reject()
                })
            }
    }, function(e, t, n) {
        function r(e) {
            var t = i(e);
            if (null !== t) throw t;
            this._config = a(e), this._Promise = e.Promise, this._deviceID = e.deviceID, this._platform = e.platform, this._username = e.login || null, this._defaults = o(e.Promise, e.defaults, e.overrides || {}), this._assignments = s(e.Promise, this._config, this._defaults, e.overrides || {}, this._deviceID)
        }

        function i(e) {
            return e.defaults && Object.getPrototypeOf(e.defaults) === Object.prototype ? "string" != typeof e.deviceID || 0 === e.deviceID.length ? new Error("Invalid device ID; expected non-empty string, got `" + e.deviceID + "`") : "string" != typeof e.platform || 0 === e.platform.length ? new Error("Invalid platform; expected non-empty string, got `" + e.platform + "`") : "object" != typeof e.provider || "function" != typeof e.provider.getExperimentConfiguration ? new Error("Invalid provider") : "function" != typeof e.Promise ? new Error("Invalid Promise implementation") : null : new Error("Invalid defaults; expected object, got " + JSON.stringify(e.defaults))
        }

        function a(e) {
            return new e.Promise(function(t, n) {
                e.provider.getExperimentConfiguration(t, n)
            }).then(function(e) {
                var t = c.validate(e);
                if (t) throw t;
                return e
            })
        }

        function o(e, t, n) {
            var r = {};
            for (var i in t) r[i] = function(r) {
                return e.resolve(n[i]).then(function(e) {
                    return "string" == typeof e ? e : t[r]
                }, function() {
                    return t[r]
                })
            }(i);
            return r
        }

        function s(e, t, n, r, i) {
            var a = {};
            for (var o in n) n.hasOwnProperty(o) && (a[o] = function(a) {
                return t.then(function(e) {
                    if (!e.hasOwnProperty(a)) throw new Error("Experiment `" + a + "` is deprecated");
                    return c.selectTreatment(a, e[a], i)
                }, function(e) {
                    return n[a]
                }).then(function(t) {
                    return e.resolve(r[a]).then(function(e) {
                        return "string" == typeof e ? e : t
                    }, function() {
                        return t
                    })
                })
            }(o));
            return a
        }

        function u(e, t) {
            var n, r = {};
            for (n in e) e.hasOwnProperty(n) && (r[n] = e[n]);
            for (n in t) t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (r[n] = t[n]);
            return r
        }
        var c = n(163),
            l = n(166);
        e.exports = r, r.prototype.get = function(e, t) {
            var n = u(t || {}, {
                    mustTrack: !1
                }),
                r = this._assignments[e] || this._Promise.reject(new Error("No experiment with ID `" + e + "`")),
                i = this._Promise.all([this._config, r]).then(function(t) {
                    var n = t[0],
                        r = t[1],
                        i = {
                            client_time: (new Date).getTime() / 1e3,
                            device_id: this._deviceID,
                            experiment_id: e,
                            experiment_name: n[e].name,
                            experiment_group: r,
                            platform: this._platform
                        };
                    null !== this._username && (i.login = this._username);
                    var a = new this._Promise(function(e, t) {
                        l.sendEvent("experiment_branch", i, e)
                    }).then(null, function() {
                        return null
                    });
                    return a
                }.bind(this));
            return this._Promise.all([r, n.mustTrack ? i : null]).then(function(e) {
                return e[0]
            }, function(t) {
                return console.warn(t), this._defaults[e] || null
            }.bind(this))
        }
    }, function(e, t, n) {
        function r(e, t, n) {
            this.name = "InvalidExperimentConfigurationError", this.message = 'Invalid configuration for experiment "' + e + '": ' + n, this.stack = (new Error).stack
        }

        function i(e, t) {
            if (!t.hasOwnProperty("groups")) return new r(e, t, "missing a `groups` property");
            if (0 === t.groups.length) return new r(e, t, "`groups` has no members");
            var n, i;
            for (n = 0; n < t.groups.length; n++)
                if (t.groups[n].hasOwnProperty("value") ? t.groups[n].hasOwnProperty("weight") ? t.groups[n].weight !== Math.floor(t.groups[n].weight) ? i = "has a non-integer weight" : t.groups[n].weight < 0 && (i = "has a negative weight") : i = "is missing a `weight` property" : i = "is missing a `value` property", i) return new r(e, t, "Group " + t.groups[n].value + " " + i);
            return null
        }
        var a = n(164);
        t.validate = function(e) {
            for (var t in e)
                if (e.hasOwnProperty(t)) {
                    var n = i(t, e[t]);
                    if (null !== n) return n
                }
            return null
        }, t.selectTreatment = function(e, t, n) {
            var r = e + n,
                i = a(r),
                o = i.words[0] >>> 0,
                s = o / Math.pow(2, 32),
                u = t.groups.reduce(function(e, t) {
                    return e + t.weight
                }, 0);
            return t.groups.reduce(function(e, t) {
                return null === e.value && (e.current -= t.weight / u, e.current <= 0 && (e.value = t.value)), e
            }, {
                value: null,
                current: s
            }).value
        }
    }, function(e, t, n) {
        ! function(r, i) {
            e.exports = t = i(n(165))
        }(this, function(e) {
            return function() {
                var t = e,
                    n = t.lib,
                    r = n.WordArray,
                    i = n.Hasher,
                    a = t.algo,
                    o = [],
                    s = a.SHA1 = i.extend({
                        _doReset: function() {
                            this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                        },
                        _doProcessBlock: function(e, t) {
                            for (var n = this._hash.words, r = n[0], i = n[1], a = n[2], s = n[3], u = n[4], c = 0; 80 > c; c++) {
                                if (16 > c) o[c] = 0 | e[t + c];
                                else {
                                    var l = o[c - 3] ^ o[c - 8] ^ o[c - 14] ^ o[c - 16];
                                    o[c] = l << 1 | l >>> 31
                                }
                                var d = (r << 5 | r >>> 27) + u + o[c];
                                d += 20 > c ? (i & a | ~i & s) + 1518500249 : 40 > c ? (i ^ a ^ s) + 1859775393 : 60 > c ? (i & a | i & s | a & s) - 1894007588 : (i ^ a ^ s) - 899497514, u = s, s = a, a = i << 30 | i >>> 2, i = r, r = d
                            }
                            n[0] = n[0] + r | 0, n[1] = n[1] + i | 0, n[2] = n[2] + a | 0, n[3] = n[3] + s | 0, n[4] = n[4] + u | 0
                        },
                        _doFinalize: function() {
                            var e = this._data,
                                t = e.words,
                                n = 8 * this._nDataBytes,
                                r = 8 * e.sigBytes;
                            return t[r >>> 5] |= 128 << 24 - r % 32, t[(r + 64 >>> 9 << 4) + 14] = Math.floor(n / 4294967296), t[(r + 64 >>> 9 << 4) + 15] = n, e.sigBytes = 4 * t.length, this._process(), this._hash
                        },
                        clone: function() {
                            var e = i.clone.call(this);
                            return e._hash = this._hash.clone(), e
                        }
                    });
                t.SHA1 = i._createHelper(s), t.HmacSHA1 = i._createHmacHelper(s)
            }(), e.SHA1
        })
    }, function(e, t, n) {
        ! function(n, r) {
            e.exports = t = r()
        }(this, function() {
            var e = e || function(e, t) {
                var n = {},
                    r = n.lib = {},
                    i = r.Base = function() {
                        function e() {}
                        return {
                            extend: function(t) {
                                e.prototype = this;
                                var n = new e;
                                return t && n.mixIn(t), n.hasOwnProperty("init") || (n.init = function() {
                                    n.$super.init.apply(this, arguments)
                                }), n.init.prototype = n, n.$super = this, n
                            },
                            create: function() {
                                var e = this.extend();
                                return e.init.apply(e, arguments), e
                            },
                            init: function() {},
                            mixIn: function(e) {
                                for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                                e.hasOwnProperty("toString") && (this.toString = e.toString)
                            },
                            clone: function() {
                                return this.init.prototype.extend(this)
                            }
                        }
                    }(),
                    a = r.WordArray = i.extend({
                        init: function(e, n) {
                            e = this.words = e || [], n != t ? this.sigBytes = n : this.sigBytes = 4 * e.length
                        },
                        toString: function(e) {
                            return (e || s).stringify(this)
                        },
                        concat: function(e) {
                            var t = this.words,
                                n = e.words,
                                r = this.sigBytes,
                                i = e.sigBytes;
                            if (this.clamp(), r % 4)
                                for (var a = 0; i > a; a++) {
                                    var o = n[a >>> 2] >>> 24 - a % 4 * 8 & 255;
                                    t[r + a >>> 2] |= o << 24 - (r + a) % 4 * 8
                                } else
                                    for (var a = 0; i > a; a += 4) t[r + a >>> 2] = n[a >>> 2];
                            return this.sigBytes += i, this
                        },
                        clamp: function() {
                            var t = this.words,
                                n = this.sigBytes;
                            t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4)
                        },
                        clone: function() {
                            var e = i.clone.call(this);
                            return e.words = this.words.slice(0), e
                        },
                        random: function(t) {
                            for (var n, r = [], i = function(t) {
                                    var t = t,
                                        n = 987654321,
                                        r = 4294967295;
                                    return function() {
                                        n = 36969 * (65535 & n) + (n >> 16) & r, t = 18e3 * (65535 & t) + (t >> 16) & r;
                                        var i = (n << 16) + t & r;
                                        return i /= 4294967296, i += .5, i * (e.random() > .5 ? 1 : -1)
                                    }
                                }, o = 0; t > o; o += 4) {
                                var s = i(4294967296 * (n || e.random()));
                                n = 987654071 * s(), r.push(4294967296 * s() | 0)
                            }
                            return new a.init(r, t)
                        }
                    }),
                    o = n.enc = {},
                    s = o.Hex = {
                        stringify: function(e) {
                            for (var t = e.words, n = e.sigBytes, r = [], i = 0; n > i; i++) {
                                var a = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                r.push((a >>> 4).toString(16)), r.push((15 & a).toString(16))
                            }
                            return r.join("")
                        },
                        parse: function(e) {
                            for (var t = e.length, n = [], r = 0; t > r; r += 2) n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4;
                            return new a.init(n, t / 2)
                        }
                    },
                    u = o.Latin1 = {
                        stringify: function(e) {
                            for (var t = e.words, n = e.sigBytes, r = [], i = 0; n > i; i++) {
                                var a = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                r.push(String.fromCharCode(a))
                            }
                            return r.join("")
                        },
                        parse: function(e) {
                            for (var t = e.length, n = [], r = 0; t > r; r++) n[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - r % 4 * 8;
                            return new a.init(n, t)
                        }
                    },
                    c = o.Utf8 = {
                        stringify: function(e) {
                            try {
                                return decodeURIComponent(escape(u.stringify(e)))
                            } catch (t) {
                                throw new Error("Malformed UTF-8 data")
                            }
                        },
                        parse: function(e) {
                            return u.parse(unescape(encodeURIComponent(e)))
                        }
                    },
                    l = r.BufferedBlockAlgorithm = i.extend({
                        reset: function() {
                            this._data = new a.init, this._nDataBytes = 0
                        },
                        _append: function(e) {
                            "string" == typeof e && (e = c.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes
                        },
                        _process: function(t) {
                            var n = this._data,
                                r = n.words,
                                i = n.sigBytes,
                                o = this.blockSize,
                                s = 4 * o,
                                u = i / s;
                            u = t ? e.ceil(u) : e.max((0 | u) - this._minBufferSize, 0);
                            var c = u * o,
                                l = e.min(4 * c, i);
                            if (c) {
                                for (var d = 0; c > d; d += o) this._doProcessBlock(r, d);
                                var f = r.splice(0, c);
                                n.sigBytes -= l
                            }
                            return new a.init(f, l)
                        },
                        clone: function() {
                            var e = i.clone.call(this);
                            return e._data = this._data.clone(), e
                        },
                        _minBufferSize: 0
                    }),
                    d = (r.Hasher = l.extend({
                        cfg: i.extend(),
                        init: function(e) {
                            this.cfg = this.cfg.extend(e), this.reset()
                        },
                        reset: function() {
                            l.reset.call(this), this._doReset()
                        },
                        update: function(e) {
                            return this._append(e), this._process(), this
                        },
                        finalize: function(e) {
                            e && this._append(e);
                            var t = this._doFinalize();
                            return t
                        },
                        blockSize: 16,
                        _createHelper: function(e) {
                            return function(t, n) {
                                return new e.init(n).finalize(t)
                            }
                        },
                        _createHmacHelper: function(e) {
                            return function(t, n) {
                                return new d.HMAC.init(e, n).finalize(t)
                            }
                        }
                    }), n.algo = {});
                return n
            }(Math);
            return e
        })
    }, function(e, t, n) {
        var r = n(167),
            i = n(168),
            a = n(169);
        t.SPADE_URL = "//spade.twitch.tv/", t.sendEvent = function(e, n, o) {
            var s = {
                    event: e,
                    properties: n
                },
                u = r.stringify(i.parse(JSON.stringify(s)));
            a.fetch(t.SPADE_URL + "?data=" + encodeURIComponent(u), {}, o)
        }
    }, function(e, t, n) {
        ! function(r, i) {
            e.exports = t = i(n(165))
        }(this, function(e) {
            return function() {
                var t = e,
                    n = t.lib,
                    r = n.WordArray,
                    i = t.enc;
                i.Base64 = {
                    stringify: function(e) {
                        var t = e.words,
                            n = e.sigBytes,
                            r = this._map;
                        e.clamp();
                        for (var i = [], a = 0; n > a; a += 3)
                            for (var o = t[a >>> 2] >>> 24 - a % 4 * 8 & 255, s = t[a + 1 >>> 2] >>> 24 - (a + 1) % 4 * 8 & 255, u = t[a + 2 >>> 2] >>> 24 - (a + 2) % 4 * 8 & 255, c = o << 16 | s << 8 | u, l = 0; 4 > l && n > a + .75 * l; l++) i.push(r.charAt(c >>> 6 * (3 - l) & 63));
                        var d = r.charAt(64);
                        if (d)
                            for (; i.length % 4;) i.push(d);
                        return i.join("")
                    },
                    parse: function(e) {
                        var t = e.length,
                            n = this._map,
                            i = n.charAt(64);
                        if (i) {
                            var a = e.indexOf(i); - 1 != a && (t = a)
                        }
                        for (var o = [], s = 0, u = 0; t > u; u++)
                            if (u % 4) {
                                var c = n.indexOf(e.charAt(u - 1)) << u % 4 * 2,
                                    l = n.indexOf(e.charAt(u)) >>> 6 - u % 4 * 2,
                                    d = c | l;
                                o[s >>> 2] |= d << 24 - s % 4 * 8, s++
                            }
                        return r.create(o, s)
                    },
                    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                }
            }(), e.enc.Base64
        })
    }, function(e, t, n) {
        ! function(r, i) {
            e.exports = t = i(n(165))
        }(this, function(e) {
            return e.enc.Utf8
        })
    }, function(e, t) {
        function n(e, t) {
            var n = document.head || document.getElementsByTagName("head")[0];
            n || t(new Error("No head element to append script"));
            var r = document.createElement("script");
            r.onload = function() {
                t(null), setTimeout(function() {
                    n.removeChild(r)
                }, 0)
            }, r.onerror = function() {
                t(new Error("Unable to load script"))
            }, n.appendChild(r), r.src = e
        }

        function r(e, t) {
            var n = new XMLHttpRequest;
            n.open("GET", e, !0), n.onreadystatechange = function() {
                switch (n.readyState) {
                    case i:
                        return void(200 <= n.status && n.status < 300 ? t(null, n.responseText) : t(new Error("XHR error: " + n.status + " " + e), null))
                }
            }, n.send()
        }
        var i = 4;
        t.fetch = function(e, t, i) {
            t.injectScript ? n(e, i || function() {}) : r(e, i || function() {})
        }
    }, function(e, t, n) {
        function r(e) {
            this._url = e
        }
        var i = n(169);
        e.exports = r, r.SERVICE_URL = "//minixperiment.twitch.tv/experiments.json", r.prototype.getExperimentConfiguration = function(e, t) {
            i.fetch(this._url, {}, function(n, r) {
                if (null !== n) return void t(n);
                try {
                    e(JSON.parse(r))
                } catch (i) {
                    t(new Error("Invalid JSON response from server: " + r))
                }
            })
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.CAST_SENDER_URL = t.BackendChromecast = void 0;
        var a = n(54),
            o = i(a),
            s = n(172),
            u = n(88),
            c = r(u),
            l = n(157),
            d = n(98),
            f = r(d),
            p = n(173),
            h = r(p),
            v = n(174),
            g = r(v),
            _ = t.BackendChromecast = {},
            m = t.CAST_SENDER_URL = "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js",
            y = 5;
        ! function() {
            function e() {
                var e = new s.Deferred,
                    t = function() {
                        if (window.chrome)
                            if (chrome.cast && chrome.cast.isAvailable) e.resolve(!0);
                            else {
                                window.__onGCastApiAvailable = function(t) {
                                    e.resolve(t)
                                };
                                var t = y,
                                    n = setInterval(function() {
                                        var r = (chrome.cast && chrome.cast.isAvailable, !1);
                                        (r || 0 >= t) && (e.resolve(r), clearInterval(n)), t--
                                    }, 1e3)
                            }
                        else e.resolve(!1)
                    };
                return $.ajax({
                    url: m,
                    dataType: "script",
                    cache: !0,
                    success: t
                }), e.promise
            }

            function t(e) {
                if (e) {
                    var t = new chrome.cast.SessionRequest(c.chromecastId),
                        n = new chrome.cast.ApiConfig(t, r, a, chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED);
                    chrome.cast.initialize(n)
                }
            }

            function n() {
                O = !1, b()
            }

            function r(e) {
                S = e, S.addUpdateListener(i), C && N && p()
            }

            function i() {
                if (S.status === chrome.cast.SessionStatus.CONNECTED) {
                    var e = S.receiver;
                    return T.volume !== e.volume.level && (T.volume = e.volume.level, k.emit(f.VOLUME_CHANGE)), void(T.muted !== e.volume.muted && (T.muted = e.volume.muted, k.emit(f.VOLUME_CHANGE)))
                }
                return S.status === chrome.cast.SessionStatus.STOPPED ? (u(null), S.removeUpdateListener(i), S = null, L = !1, void b()) : void(S.status === chrome.cast.SessionStatus.DISCONNECTED)
            }

            function a(e) {
                O = e === chrome.cast.ReceiverAvailability.AVAILABLE, b()
            }

            function u(e) {
                A && A.removeUpdateListener(d), A = e, L = !1, b(), A && A.addUpdateListener(d)
            }

            function d() {
                T.currentTime !== A.currentTime && (T.currentTime = A.currentTime, k.emit(f.TIME_UPDATE)), T.volume !== A.volume.level && (T.volume = A.volume.level, k.emit(f.VOLUME_CHANGE)), T.muted !== A.volume.muted && (T.muted = A.volume.muted, k.emit(f.VOLUME_CHANGE)), T.playbackRate !== A.playbackRate && (T.playbackRate = A.playbackRate, k.emit(f.RATE_CHANGE));
                var e = A.playerState;
                T.playerState !== A.playerState && (e === chrome.cast.media.PlayerState.PLAYING ? k.emit(f.PLAYING) : e === chrome.cast.media.PlayerState.PAUSED ? k.emit(f.PAUSE) : e === chrome.cast.media.PlayerState.BUFFERING, T.playerState = A.playerState)
            }

            function p() {
                L = !0, b();
                var e = (0, l.channelInfo)(C);
                e.then(function(e) {
                    (0, l.offlinePlaylistInfo)(e._id).then(function(t) {
                        var n = t || {},
                            r = new chrome.cast.media.MediaInfo(N, "application/x-mpegurl");
                        r.streamType = chrome.cast.media.StreamType.LIVE;
                        var i = new chrome.cast.media.GenericMediaMetadata;
                        i.subtitle = e.game, i.title = e.display_name, i.images = [new chrome.cast.Image(e.logo)], r.metadata = i, r.customData = {
                            channel: C,
                            is_spectre: Boolean(n.active)
                        };
                        var a = new chrome.cast.media.LoadRequest(r);
                        a.autoplay = !0, S.loadMedia(a, u)
                    })
                }, function(e) {
                    S.stop(), v(e)
                })
            }

            function v(e) {
                e && (P = e, k.emit(f.ERROR))
            }

            function b() {
                var e = j,
                    t = M;
                A ? (j = h.NETWORK_LOADING, M = g.HAVE_METADATA, k.emit(f.CAN_PLAY)) : L ? (j = h.NETWORK_LOADING, M = g.HAVE_NOTHING) : O && C ? (j = h.NETWORK_IDLE, M = g.HAVE_NOTHING) : (j = h.NETWORK_EMPTY, M = g.HAVE_NOTHING), j !== e && (j === h.NETWORK_LOADING ? (k.emit(f.LOADSTART), k.emit(f.PROGRESS)) : j === h.NETWORK_IDLE ? k.emit(f.SUSPEND) : j === h.NETWORK_EMPTY && k.emit(f.EMPTIED)), M !== t && (M === g.HAVE_METADATA ? k.emit(f.LOADED_METADATA) : M === g.HAVE_NOTHING && k.emit(f.ENDED))
            }

            function E(e) {
                v(e)
            }
            var w = _,
                k = new o["default"],
                T = {},
                S = void 0,
                A = void 0,
                C = void 0,
                O = void 0,
                P = void 0,
                L = void 0,
                j = void 0,
                M = void 0,
                I = !1,
                N = null;
            w.init = function() {
                if (k.removeAllListeners(), !I) {
                    I = !0, n();
                    var r = e();
                    r.then(t)
                }
            }, w.destroy = function() {}, w.addEventListener = function(e, t) {
                k.on(e, t)
            }, w.removeEventListener = function(e, t) {
                k.off(e, t)
            }, w.getNetworkProfile = function() {
                return []
            }, w.getError = function() {
                return P
            }, w.getSrc = function() {}, w.setSrc = function() {}, w.getCurrentSrc = function() {}, w.getNetworkState = function() {
                return j
            }, w.getPreload = function() {}, w.setPreload = function() {}, w.load = function() {
                chrome.cast.requestSession(r, E)
            }, w.getBuffered = function() {
                return {
                    length: 0
                }
            }, w.getReadyState = function() {
                return M
            }, w.getSeeking = function() {}, w.getCurrentTime = function() {
                return A ? A.getEstimatedTime() : void 0
            }, w.setCurrentTime = function(e) {
                if (A) {
                    var t = new chrome.cast.media.SeekRequest;
                    t.time = e, A.seek(t)
                }
            }, w.getInitialTime = function() {}, w.getDuration = function() {}, w.getStartOffsetTime = function() {}, w.getPaused = function() {
                return A ? A.playerState === chrome.cast.media.PlayerState.PAUSED : void 0
            }, w.getDefaultPlaybackRate = function() {}, w.setDefaultPlaybackRate = function() {}, w.getPlaybackRate = function() {}, w.setPlaybackRate = function() {}, w.getPlayed = function() {}, w.getSeekable = function() {}, w.getEnded = function() {}, w.getAutoplay = function() {}, w.setAutoplay = function() {}, w.getLoop = function() {}, w.setLoop = function() {}, w.play = function() {
                if (A) {
                    var e = new chrome.cast.media.PlayRequest;
                    A.play(e)
                } else w.load()
            }, w.pause = function() {
                if (A) {
                    var e = new chrome.cast.media.PauseRequest;
                    A.pause(e)
                }
            }, w.getControls = function() {}, w.setControls = function() {}, w.getVolume = function() {
                return A ? A.volume.level : void 0
            }, w.setVolume = function(e) {
                if (A) {
                    var t = new chrome.cast.Volume(e, null),
                        n = new chrome.cast.media.VolumeRequest(t);
                    A.setVolume(n)
                }
            }, w.getMuted = function() {
                return A ? A.volume.muted : S ? S.receiver.volume.muted : void 0
            }, w.setMuted = function(e) {
                if (A) {
                    var t = new chrome.cast.Volume(null, e),
                        n = new chrome.cast.media.VolumeRequest(t);
                    A.setVolume(n)
                }
            }, w.getDefaultMuted = function() {}, w.setDefaultMuted = function() {}, w.getQuality = function() {
                return "auto"
            }, w.setQuality = function() {}, w.getQualities = function() {
                return ["auto"]
            }, w.getChannel = function() {
                return C
            }, w.setChannel = function(e, t) {
                C = e, t.streamUrl.then(function(e) {
                    N = e, S && C && N && p()
                })
            }, w.getVideo = function() {
                return null
            }, w.setVideo = function() {
                C = null, N = null
            }, w.getStats = function() {}, w.getStatsEnabled = function() {}, w.setStatsEnabled = function() {}, w.getVideoInfo = function() {}, w.getCaption = function() {}, w.getBackend = function() {
                return "chromecast"
            }, w.stop = function() {
                S && S.stop()
            }, w.getDevice = function() {
                return S && S.receiver ? S.receiver.friendlyName : void 0
            }
        }()
    }, function(e, t) {
        "use strict";

        function n() {
            var e = this;
            e.promise = new Promise(function(t, n) {
                e.resolve = t, e.reject = n
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Deferred = n
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.NETWORK_EMPTY = 0, t.NETWORK_IDLE = 1, t.NETWORK_LOADING = 2, t.NETWORK_NO_SOURCE = 3
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.HAVE_NOTHING = 0, t.HAVE_METADATA = 1, t.HAVE_CURRENT_DATA = 2, t.HAVE_FUTURE_DATA = 3, t.HAVE_ENOUGH_DATA = 4
    }, function(e, t, n) {
        var r, i, a;
        (function(n) {
            "use strict";
            ! function(n, o) {
                i = [], r = o, a = "function" == typeof r ? r.apply(t, i) : r, !(void 0 !== a && (e.exports = a))
            }(this, function() {
                function e() {
                    try {
                        return o in i && i[o]
                    } catch (e) {
                        return !1
                    }
                }
                var t, r = {},
                    i = "undefined" != typeof window ? window : n,
                    a = i.document,
                    o = "localStorage",
                    s = "script";
                if (r.disabled = !1, r.version = "1.3.20", r.set = function(e, t) {}, r.get = function(e, t) {}, r.has = function(e) {
                        return void 0 !== r.get(e)
                    }, r.remove = function(e) {}, r.clear = function() {}, r.transact = function(e, t, n) {
                        null == n && (n = t, t = null), null == t && (t = {});
                        var i = r.get(e, t);
                        n(i), r.set(e, i)
                    }, r.getAll = function() {}, r.forEach = function() {}, r.serialize = function(e) {
                        return JSON.stringify(e)
                    }, r.deserialize = function(e) {
                        if ("string" == typeof e) try {
                            return JSON.parse(e)
                        } catch (t) {
                            return e || void 0
                        }
                    }, e()) t = i[o], r.set = function(e, n) {
                    return void 0 === n ? r.remove(e) : (t.setItem(e, r.serialize(n)), n)
                }, r.get = function(e, n) {
                    var i = r.deserialize(t.getItem(e));
                    return void 0 === i ? n : i
                }, r.remove = function(e) {
                    t.removeItem(e)
                }, r.clear = function() {
                    t.clear()
                }, r.getAll = function() {
                    var e = {};
                    return r.forEach(function(t, n) {
                        e[t] = n
                    }), e
                }, r.forEach = function(e) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t.key(n);
                        e(i, r.get(i))
                    }
                };
                else if (a && a.documentElement.addBehavior) {
                    var u, c;
                    try {
                        c = new ActiveXObject("htmlfile"), c.open(), c.write("<" + s + ">document.w=window</" + s + '><iframe src="/favicon.ico"></iframe>'), c.close(), u = c.w.frames[0].document, t = u.createElement("div")
                    } catch (l) {
                        t = a.createElement("div"), u = a.body
                    }
                    var d = function(e) {
                            return function() {
                                var n = Array.prototype.slice.call(arguments, 0);
                                n.unshift(t), u.appendChild(t), t.addBehavior("#default#userData"), t.load(o);
                                var i = e.apply(r, n);
                                return u.removeChild(t), i
                            }
                        },
                        f = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g"),
                        p = function(e) {
                            return e.replace(/^d/, "___$&").replace(f, "___")
                        };
                    r.set = d(function(e, t, n) {
                        return t = p(t), void 0 === n ? r.remove(t) : (e.setAttribute(t, r.serialize(n)), e.save(o), n)
                    }), r.get = d(function(e, t, n) {
                        t = p(t);
                        var i = r.deserialize(e.getAttribute(t));
                        return void 0 === i ? n : i
                    }), r.remove = d(function(e, t) {
                        t = p(t), e.removeAttribute(t), e.save(o)
                    }), r.clear = d(function(e) {
                        var t = e.XMLDocument.documentElement.attributes;
                        e.load(o);
                        for (var n = t.length - 1; n >= 0; n--) e.removeAttribute(t[n].name);
                        e.save(o)
                    }), r.getAll = function(e) {
                        var t = {};
                        return r.forEach(function(e, n) {
                            t[e] = n
                        }), t
                    }, r.forEach = d(function(e, t) {
                        for (var n, i = e.XMLDocument.documentElement.attributes, a = 0; n = i[a]; ++a) t(n.name, r.deserialize(e.getAttribute(n.name)))
                    })
                }
                try {
                    var h = "__storejs__";
                    r.set(h, h), r.get(h) != h && (r.disabled = !0), r.remove(h)
                } catch (l) {
                    r.disabled = !0
                }
                return r.enabled = !r.disabled, r
            })
        }).call(t, function() {
            return this
        }())
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = {};
        t["default"] = n,
            function() {
                var e = n;
                e.key = function(e) {
                    return sessionStorage.key(e)
                }, e.getItem = function(e) {
                    var t = sessionStorage.getItem(e);
                    if (t) return JSON.parse(t)
                }, e.setItem = function(e, t) {
                    var n = JSON.stringify(t);
                    sessionStorage.setItem(e, n)
                }, e.removeItem = function(e) {
                    sessionStorage.removeItem(e)
                }, e.clear = function() {
                    sessionStorage.clear()
                }, Object.defineProperty(e, "length", {
                    get: function() {
                        return sessionStorage.length
                    }
                })
            }()
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PubSub = t.AVAILABLE_EVENTS = t.EVENT_TOS = t.EVENT_OFFLINE = t.EVENT_ONLINE = void 0;
        var o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            s = n(35),
            u = i(s),
            c = n(54),
            l = i(c),
            d = n(178),
            f = i(d),
            p = n(88),
            h = r(p),
            v = n(190),
            g = n(191),
            _ = n(192),
            m = n(57),
            y = t.EVENT_ONLINE = "online",
            b = t.EVENT_OFFLINE = "offline",
            E = t.EVENT_TOS = "tos",
            w = t.AVAILABLE_EVENTS = [y, b, E];
        t.PubSub = function() {
            function e(t) {
                var n = this,
                    r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                a(this, e), this._eventEmitter = new l["default"], this._debugMode = r.debug, this._onMessage = function(e) {
                    n.onPubSubMessage(e)
                }, this._stateStore = t, this._pubSub = f["default"].getInstance(h.pubSubEnviroment), this._handleStreamUpdate(this._stateStore.getState().stream), this._unsubscribe = this._subscribe(), this._seedViewercountTimeoutId = !1
            }
            return o(e, [{
                key: "onPubSubMessage",
                value: function(e) {
                    try {
                        var t = JSON.parse(e);
                        switch (this._debugMode && console.info("PubSub: " + JSON.stringify(t)), t.type) {
                            case "stream-up":
                                this._stateStore.dispatch((0, _.setOnline)(!0)), this._eventEmitter.emit(y);
                                break;
                            case "stream-down":
                                this._stateStore.dispatch((0, _.setOnline)(!1)), this._eventEmitter.emit(b);
                                break;
                            case "viewcount":
                                this._stateStore.dispatch((0, g.updateViewerCount)(t.viewers));
                                break;
                            case "tos-strike":
                                this._eventEmitter.emit(E);
                                break;
                            default:
                                this._debugMode && console.warn("PubSub: Invalid message - " + JSON.stringify(t))
                        }
                    } catch (n) {
                        console.error("Failed to parse Pubsub message as JSON: " + e)
                    }
                }
            }, {
                key: "_subscribe",
                value: function() {
                    var e = this;
                    return (0, v.subscribe)(this._stateStore, ["stream"], function(t, n) {
                        e._unlisten(n.stream.channel), e._handleStreamUpdate(t.stream)
                    })
                }
            }, {
                key: "_handleStreamUpdate",
                value: function(e) {
                    e.contentType === m.CONTENT_MODE_LIVE && this._listen(e.channel)
                }
            }, {
                key: "_listen",
                value: function(e) {
                    var t = this;
                    this._pubSub.Listen({
                        topic: "video-playback." + e,
                        success: function() {
                            t._debugMode && console.info("PubSub: successfully listened to video-playback." + e)
                        },
                        failure: function(e) {
                            console.error("PubSub: error listening: " + e)
                        },
                        message: this._onMessage
                    })
                }
            }, {
                key: "_unlisten",
                value: function(e) {
                    var t = this;
                    this._pubSub.Unlisten({
                        topic: "video-playback." + e,
                        success: function() {
                            t._debugMode && console.info("PubSub: successfully unlistened to video-playback." + e)
                        },
                        failure: function(e) {
                            console.error("PubSub: error unlistening: %o", e)
                        },
                        message: this._onMessage
                    })
                }
            }, {
                key: "addEventListener",
                value: function(e, t) {
                    (0, u["default"])(w, e) && this._eventEmitter.addListener(e, t)
                }
            }, {
                key: "removeEventListener",
                value: function(e, t) {
                    this._eventEmitter.removeListener(e, t)
                }
            }, {
                key: "destroy",
                value: function() {
                    this._unsubscribe(), this._seedViewercountTimeoutId && this._stateStore.getState().window.clearTimeout(this._seedViewercountTimeoutId), this._stateStore.getState().stream.contentType === m.CONTENT_MODE_LIVE && this._unlisten(this._stateStore.getState().stream.channel)
                }
            }]), e
        }()
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function s(e) {
            if ("production" !== e && "staging" !== e && "darklaunch" !== e) throw "Invalid Pubsub instance environment";
            return null === window.__Twitch__pubsubInstances[e] && (window.__Twitch__pubsubInstances[e] = new C(e)), window.__Twitch__pubsubInstances[e]
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            c = n(179),
            l = r(c),
            d = n(180),
            f = r(d),
            p = n(181),
            h = r(p),
            v = n(182),
            g = r(v),
            _ = n(184),
            m = r(_),
            y = n(185),
            b = r(y),
            E = n(187),
            w = n(189),
            k = r(w),
            T = f["default"]._getLogger("PubsubDriver"),
            S = /^https?:\/\/([\w-]+\.)*twitch\.tv(:\d+)?\/.*$/,
            A = 1,
            C = function(e) {
                function t(e) {
                    i(this, t);
                    var n = a(this, Object.getPrototypeOf(t).call(this, e));
                    return n._env = h["default"].urlParams.pubsub_environment || e, n._clientReady = !1, n._queuedRequests = [], n._stats = E.Stats.getInstance(n._env, "pubsub-js-client"), n._numDisconnects = 0, h["default"].inIframe() && S.test(document.referrer) ? (T.debug("Driver is in an iframe"), n._client = new g["default"]({
                        parentUrl: document.referrer
                    }), n._clientType = "iframe-verified") : (T.debug("Driver is not in an iframe"), n._client = new b["default"]({
                        env: n._env,
                        stats: n._stats
                    }), n._iframeHost = new m["default"](n._client), n._clientType = "ws"), n._stats.setPrefix("pubsub-js-client." + n._clientType), "true" === h["default"].urlParams.force_pubsub_tester ? A = 1 : "false" === h["default"].urlParams.force_pubsub_tester && (A = 0), Math.random() < A && (n._tester = new k["default"]({
                        env: n._env,
                        driver: n,
                        stats: n._stats
                    })), n._client.on("unverified", n._clientUnverified, n), n._client.on("verified", n._clientVerified, n), n._client.verify(), n
                }
                return o(t, e), u(t, [{
                    key: "connect",
                    value: function() {}
                }, {
                    key: "Listen",
                    value: function(e) {
                        this._clientReady ? this._client.Listen(e) : this._queuedRequests.push({
                            type: "LISTEN",
                            opts: e
                        })
                    }
                }, {
                    key: "Unlisten",
                    value: function(e) {
                        this._clientReady ? this._client.Unlisten(e) : this._queuedRequests.push({
                            type: "UNLISTEN",
                            opts: e
                        })
                    }
                }, {
                    key: "_flushQueuedRequests",
                    value: function() {
                        for (T.debug("Flushing " + this._queuedRequests.length + " queued requests"); this._queuedRequests.length > 0;) {
                            var e = this._queuedRequests.shift();
                            switch (e.type) {
                                case "LISTEN":
                                    this._client.Listen(e.opts);
                                    break;
                                case "UNLISTEN":
                                    this._client.Unlisten(e.opts)
                            }
                        }
                    }
                }, {
                    key: "_clientConnected",
                    value: function() {
                        T.debug("Client connected"), this._client.on("disconnected", this._clientDisconnected, this), this._stats.logCounter("connected", 1), this._trigger("connected"), this._clientReady = !0, this._flushQueuedRequests()
                    }
                }, {
                    key: "_clientDisconnected",
                    value: function() {
                        T.debug("Client disconnected"), this._trigger("disconnected"), this._clientReady = !1, this._numDisconnects += 1
                    }
                }, {
                    key: "_clientVerified",
                    value: function() {
                        T.debug("Client verified (type = " + this._clientType + ")"), this._stats.setPrefix("pubsub-js-client." + this._clientType), this._client.on("connected", this._clientConnected, this), this._client.connect(), window.setInterval(this._sendClientTypeGauge.bind(this), 6e4)
                    }
                }, {
                    key: "_clientUnverified",
                    value: function() {
                        T.debug("Unverified IframeClient"), this._client.off("verified", this._clientVerified, this), this._client.off("unverified", this._clientUnverified, this), this._client = new b["default"]({
                            env: this._env,
                            stats: this._stats
                        }), this._clientType = "iframe-unverified", this._client.on("unverified", this._clientUnverified, this), this._client.on("verified", this._clientVerified, this), this._client.verify()
                    }
                }, {
                    key: "_sendClientTypeGauge",
                    value: function() {
                        this._stats.logGauge("pubsub-js-client." + this._clientType)
                    }
                }]), t
            }(l["default"]);
        window.__Twitch__pubsubInstances = window.__Twitch__pubsubInstances || {
            production: null,
            staging: null,
            darklaunch: null
        }, t["default"] = {
            getInstance: s
        }
    }, function(e, t) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = function() {
                function e() {
                    n(this, e)
                }
                return r(e, [{
                    key: "on",
                    value: function(e, t, n) {
                        return this._events = this._events || {}, this._events[e] = this._events[e] || [], this._events[e].push(t, n), this
                    }
                }, {
                    key: "off",
                    value: function(e, t) {
                        if (this._events)
                            for (var n = this._events[e] || [], r = this._events[e] = [], i = 0; i < n.length; i += 2) n[i] !== t && (r.push(n[i]), r.push(n[i + 1]));
                        return this
                    }
                }, {
                    key: "_trigger",
                    value: function(e) {
                        if (this._events)
                            for (var t = this._events[e] || [], n = 1; n < t.length; n += 2) t[n - 1].apply(t[n], Array.prototype.slice.call(arguments, 1));
                        return this
                    }
                }, {
                    key: "count",
                    value: function(e) {
                        if (this._events) {
                            var t = this._events[e] || [];
                            return t.length / 2
                        }
                        return 0
                    }
                }]), e
            }();
        t["default"] = i
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            o = n(181),
            s = r(o),
            u = function() {},
            c = u,
            l = {},
            d = {
                DEBUG: 1,
                INFO: 2,
                WARNING: 3,
                ERROR: 4,
                CRITICAL: 5
            },
            f = d.WARNING,
            p = function() {
                function e(t) {
                    i(this, e), this._opts = t
                }
                return a(e, [{
                    key: "debug",
                    value: function(e) {
                        f <= d.DEBUG && this._log("DEBUG: " + e)
                    }
                }, {
                    key: "info",
                    value: function(e) {
                        f <= d.INFO && this._log("INFO: " + e)
                    }
                }, {
                    key: "warning",
                    value: function(e) {
                        f <= d.WARNING && this._log("WARNING: " + e)
                    }
                }, {
                    key: "error",
                    value: function(e) {
                        f <= d.ERROR && this._log("ERROR: " + e)
                    }
                }, {
                    key: "critical",
                    value: function(e) {
                        f <= d.CRITICAL && this._log("CRITICAL: " + e)
                    }
                }, {
                    key: "_log",
                    value: function(e) {
                        var t = this._opts.prefix + e;
                        this._opts.logFunc ? this._opts.logFunc(t) : c(t)
                    }
                }]), e
            }(),
            h = {
                setLogger: function(e) {
                    c = "function" == typeof e ? e : u
                },
                setLevel: function() {
                    var e = (s["default"].urlParams.pubsub_log_level || "").toUpperCase();
                    if (e) {
                        var t = d[e];
                        if (t) return f = t,
                            function() {}
                    }
                    return function(e) {
                        f = e ? d[e.toUpperCase()] || d.WARNING : d.WARNING
                    }
                }(),
                _getLogger: function(e) {
                    return l[e] || (l[e] = new p({
                        prefix: "pubsub.js [" + e + "] "
                    })), l[e]
                },
                _noopLogger: new p({
                    prefix: "",
                    logFunc: u
                })
            },
            v = window.console;
        v && v.log && (v.log.apply ? h.setLogger(function() {
            v.log.apply(v, arguments)
        }) : h.setLogger(function() {
            for (var e = [], t = 0; t < arguments.length; ++t) e.push(arguments[t]);
            v.log(e.join(" "))
        })), t["default"] = h
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = {};
        n.randomInt = function(e) {
            return Math.floor(Math.random() * e)
        }, n.time = {
            seconds: function(e) {
                return 1e3 * e
            },
            now: function() {
                return (new Date).getTime()
            }
        }, n.urlParams = function() {
            for (var e = {}, t = window.location.search.substr(1), n = t.split("&"), r = 0; r < n.length; ++r) {
                var i = n[r].split("=");
                e[decodeURIComponent(i[0])] = i.length > 1 ? decodeURIComponent(i[1]) : ""
            }
            return e
        }(), n.generateString = function(e) {
            for (var t = "", r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", i = 0; e > i; i++) t += r.charAt(n.randomInt(r.length));
            return t
        }, n.inIframe = function() {
            try {
                return window.self !== window.top
            } catch (e) {
                return !0
            }
        }, t["default"] = n
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            u = n(179),
            c = r(u),
            l = n(180),
            d = r(l),
            f = n(181),
            p = r(f),
            h = n(183),
            v = r(h),
            g = 30,
            _ = 3e4,
            m = 1e3,
            y = "pubsub",
            b = d["default"]._getLogger("IframeClient"),
            E = function(e) {
                function t(e) {
                    i(this, t);
                    var n = a(this, Object.getPrototypeOf(t).call(this, e));
                    return n._parentUrl = e.parentUrl, n._pendingResponses = new v["default"], n._listens = new c["default"], window.addEventListener("message", n.receiveMessage.bind(n), !1), n
                }
                return o(t, e), s(t, [{
                    key: "connect",
                    value: function() {
                        window.parent.postMessage({
                            twitch_protocol: y,
                            type: "connect"
                        }, this._parentUrl)
                    }
                }, {
                    key: "verify",
                    value: function() {
                        window.parent.postMessage({
                            twitch_protocol: y,
                            type: "verify"
                        }, this._parentUrl), this._verifyTimeout = setTimeout(this._unverified.bind(this), m)
                    }
                }, {
                    key: "Listen",
                    value: function(e) {
                        b.debug("listening on " + e.topic);
                        var t = this._generateNonce(),
                            n = {
                                twitch_protocol: y,
                                type: "LISTEN",
                                nonce: t,
                                data: {
                                    topics: [e.topic],
                                    auth_token: e.auth
                                }
                            };
                        this._send(t, n, e)
                    }
                }, {
                    key: "Unlisten",
                    value: function(e) {
                        if (b.debug("unlistening on " + e.topic + "(" + this._listens.count(e.topic) + " listeners)"), this._listens.count(e.topic) > 1) return e.message && this._listens.off(e.topic, e.message), e.success && e.success(), void b.debug("now have " + this._listens.count(e.topic) + " listeners");
                        var t = this._generateNonce(),
                            n = {
                                twitch_protocol: y,
                                type: "UNLISTEN",
                                nonce: t,
                                data: {
                                    topics: [e.topic]
                                }
                            };
                        this._send(t, n, e)
                    }
                }, {
                    key: "_send",
                    value: function(e, t, n) {
                        this._pendingResponses.set(e, {
                            timeout: setTimeout(this._onResponseTimeout.bind(this), _, e),
                            topic: n.topic,
                            auth: n.auth,
                            message: t,
                            callbacks: {
                                success: n.success,
                                failure: n.failure,
                                message: n.message
                            }
                        }), window.parent.postMessage(t, this._parentUrl)
                    }
                }, {
                    key: "receiveMessage",
                    value: function(e) {
                        if (e.data.twitch_protocol == y) switch (b.debug("Received message: " + JSON.stringify(e.data)), e.data.type) {
                            case "connected":
                                this._trigger("connected");
                                break;
                            case "disconnected":
                                this._trigger("disconnected");
                                break;
                            case "success":
                                this.handleResponse(!0, e.data);
                                break;
                            case "failure":
                                this.handleResponse(!1, e.data);
                                break;
                            case "message":
                                this.handleMessage(e.data.topic, e.data.message);
                                break;
                            case "verify":
                                this._verified()
                        }
                    }
                }, {
                    key: "handleResponse",
                    value: function(e, t) {
                        if (this._pendingResponses.has(t.nonce)) {
                            var n = this._pendingResponses.get(t.nonce);
                            b.debug("ResponseInfo: " + JSON.stringify(n)), clearTimeout(n.timeout), this._pendingResponses.remove(t.nonce), e ? (n.callbacks.message && ("LISTEN" === n.message.type ? this._listens.on(n.topic, n.callbacks.message, this) : "UNLISTEN" === n.message.type && this._listens.off(n.topic, n.callbacks.message, this)), n.callbacks.success && n.callbacks.success()) : n.callbacks.failure && n.callbacks.failure(t.error)
                        }
                    }
                }, {
                    key: "handleMessage",
                    value: function(e, t) {
                        b.debug("received '" + t + "' on topic " + e), this._listens._trigger(e, t)
                    }
                }, {
                    key: "_onResponseTimeout",
                    value: function(e) {
                        b.debug("response timed out: " + e)
                    }
                }, {
                    key: "_verified",
                    value: function() {
                        b.debug("Verified"), clearTimeout(this._verifyTimeout), this._trigger("verified")
                    }
                }, {
                    key: "_unverified",
                    value: function() {
                        window.removeEventListener("message", this.receiveMessage.bind(this), !1), this._trigger("unverified")
                    }
                }, {
                    key: "_generateNonce",
                    value: function() {
                        return p["default"].generateString(g)
                    }
                }]), t
            }(c["default"]);
        t["default"] = E
    }, function(e, t) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = function() {
                function e() {
                    n(this, e), this._map = {}, this._size = 0
                }
                return r(e, [{
                    key: "set",
                    value: function(e, t) {
                        this._map.hasOwnProperty(e) || (this._size += 1), this._map[e] = t
                    }
                }, {
                    key: "get",
                    value: function(e) {
                        return this._map[e]
                    }
                }, {
                    key: "has",
                    value: function(e) {
                        return this._map.hasOwnProperty(e)
                    }
                }, {
                    key: "remove",
                    value: function(e) {
                        this._map.hasOwnProperty(e) && (this._size -= 1), delete this._map[e]
                    }
                }, {
                    key: "size",
                    value: function() {
                        return this._size
                    }
                }, {
                    key: "map",
                    value: function() {
                        return this._map
                    }
                }, {
                    key: "values",
                    value: function() {
                        var e = [];
                        for (var t in this._map) this._map.hasOwnProperty(t) && e.push(this._map[t]);
                        return e
                    }
                }]), e
            }();
        t["default"] = i
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            o = n(180),
            s = r(o),
            u = "pubsub",
            c = s["default"]._getLogger("IframeHost"),
            l = function() {
                function e(t) {
                    i(this, e), this._driver = t, this._sources = [], this._driver.on("connected", this.handleConnected, this), this._driver.on("disconnected", this.handleDisconnected, this), window.addEventListener("message", this.receiveMessage.bind(this), !1)
                }
                return a(e, [{
                    key: "receiveMessage",
                    value: function(e) {
                        if (e.data.twitch_protocol == u) switch (c.debug("Received message: " + JSON.stringify(e.data)), e.data.type) {
                            case "LISTEN":
                                this.handleListen(e.source, e.data.nonce, e.data.data);
                                break;
                            case "UNLISTEN":
                                this.handleUnlisten(e.source, e.data.nonce, e.data.data);
                                break;
                            case "connect":
                                this._sources.push(e.source), this._driver.connect();
                                break;
                            case "verify":
                                e.source.postMessage({
                                    twitch_protocol: u,
                                    type: "verify"
                                }, "*")
                        }
                    }
                }, {
                    key: "handleListen",
                    value: function(e, t, n) {
                        var r = function() {
                                e.postMessage({
                                    twitch_protocol: u,
                                    type: "success",
                                    nonce: t
                                }, "*")
                            },
                            i = function(n) {
                                e.postMessage({
                                    twitch_protocol: u,
                                    type: "failure",
                                    nonce: t,
                                    error: n
                                }, "*")
                            },
                            a = function(t) {
                                e.postMessage({
                                    twitch_protocol: u,
                                    type: "message",
                                    topic: n.topics[0],
                                    message: t
                                }, "*")
                            };
                        this._driver.Listen({
                            topic: n.topics[0],
                            auth: n.auth_token,
                            success: r,
                            failure: i,
                            message: a
                        })
                    }
                }, {
                    key: "handleUnlisten",
                    value: function(e, t, n) {
                        var r = function() {
                                e.postMessage({
                                    twitch_protocol: u,
                                    type: "success",
                                    nonce: t
                                }, "*")
                            },
                            i = function(n) {
                                e.postMessage({
                                    twitch_protocol: u,
                                    type: "failure",
                                    nonce: t,
                                    error: n
                                }, "*")
                            },
                            a = function(t) {
                                e.postMessage({
                                    twitch_protocol: u,
                                    type: "message",
                                    topic: n.topics[0],
                                    message: t
                                }, "*")
                            };
                        this._driver.Unlisten({
                            topic: n.topics[0],
                            auth: n.auth_token,
                            success: r,
                            failure: i,
                            message: a
                        })
                    }
                }, {
                    key: "handleConnected",
                    value: function() {
                        for (var e = 0; e < this._sources.length; e++) this._sources[e].postMessage({
                            twitch_protocol: u,
                            type: "connected"
                        }, "*")
                    }
                }, {
                    key: "handleDisconnected",
                    value: function() {
                        for (var e = 0; e < this._sources.length; e++) this._sources[e].postMessage({
                            twitch_protocol: u,
                            type: "disconnected"
                        }, "*")
                    }
                }]), e
            }();
        t["default"] = l
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            u = n(179),
            c = r(u),
            l = n(180),
            d = r(l),
            f = n(181),
            p = r(f),
            h = n(186),
            v = r(h),
            g = n(183),
            _ = r(g),
            m = d["default"]._getLogger("WebsocketClient"),
            y = 3e4,
            b = "response timeout",
            E = 30,
            w = 45e3,
            k = "wss://pubsub-edge.twitch.tv:443/v1",
            T = "wss://pubsub-edge-darklaunch.twitch.tv:443/v1",
            S = "ws://localhost:6900/v1",
            A = function(e) {
                function t(e) {
                    i(this, t);
                    var n = a(this, Object.getPrototypeOf(t).call(this, e));
                    switch (n._opts = e, n._env = e.env, n._stats = e.stats, n._env) {
                        case "production":
                            n._addr = k;
                            break;
                        case "darklaunch":
                            n._addr = T;
                            break;
                        case "development":
                            n._addr = S;
                            break;
                        default:
                            n._addr = k
                    }
                    return window.WebSocket ? (n._queuedRequests = [], n._pendingResponses = new _["default"], n._pendingReplayResponses = new _["default"], n._listens = new c["default"], n._replays = new _["default"], n._replaysSize = 0, n._firstConnectTime = n._firstListenTime = 0, n._connectCalled = n._reconnecting = !1, n._primarySocket = new v["default"]({
                        stats: n._stats,
                        addr: n._addr
                    }), n._bindPrimary(n._primarySocket), n) : a(n)
                }
                return o(t, e), s(t, [{
                    key: "verify",
                    value: function() {
                        this._trigger("verified")
                    }
                }, {
                    key: "connect",
                    value: function() {
                        window.WebSocket && (this._connectCalled ? this._primarySocket._isReady() && this._trigger("connected") : (this._connectCalled = !0, this._primarySocket.connect()))
                    }
                }, {
                    key: "_bindPrimary",
                    value: function(e) {
                        e.on("open", this._onPrimaryOpen, this), e.on("response", this._onResponse, this), e.on("message", this._onMessage, this), e.on("reconnect", this._onReconnect, this), e.on("connection_failure", this._onConnectionFailure, this)
                    }
                }, {
                    key: "_unbindPrimary",
                    value: function(e) {
                        e.off("open", this._onPrimaryOpen, this), e.off("response", this._onResponse, this), e.off("message", this._onMessage, this), e.off("reconnect", this._onReconnect, this), e.off("connection_failure", this._onConnectionFailure, this)
                    }
                }, {
                    key: "_onPrimaryOpen",
                    value: function() {
                        m.debug("primary open: " + this._primarySocket._id), 0 === this._firstConnectTime && (this._firstConnectTime = p["default"].time.now(), this._firstListenTimeout = setTimeout(this._neverListened.bind(this), w)), this._connected = !0, this._trigger("connected"), this._flushQueuedRequests()
                    }
                }, {
                    key: "_onResponse",
                    value: function(e) {
                        if (m.debug("primary response: " + JSON.stringify(e)), this._pendingResponses.has(e.nonce)) {
                            var t = this._pendingResponses.get(e.nonce);
                            m.debug("responseInfo: " + JSON.stringify(t)), clearTimeout(t.timeout), this._pendingResponses.remove(e.nonce), "" === e.error ? ("LISTEN" === t.message.type ? (0 === this._firstListenTime && (clearTimeout(this._firstListenTimeout), this._firstListenTime = p["default"].time.now(), this._stats.logTimer("time_to_first_listen", this._firstListenTime - this._firstConnectTime, .1)), this._replays.set(e.nonce, {
                                nonce: e.nonce,
                                message: t.callbacks.message,
                                topic: t.topic,
                                auth: t.auth
                            }), t.callbacks.message && this._listens.on(t.topic, t.callbacks.message, this)) : "UNLISTEN" === t.message.type && (this._replays.remove(e.nonce), t.callbacks.message && this._listens.off(t.topic, t.callbacks.message, this)), t.callbacks.success && t.callbacks.success()) : t.callbacks.failure && t.callbacks.failure(e.error)
                        }
                    }
                }, {
                    key: "_onResponseTimeout",
                    value: function(e) {
                        if (this._pendingResponses.has(e)) {
                            var t = this._pendingResponses.get(e);
                            this._pendingResponses.remove(e), t.opts.failure && t.opts.failure(b)
                        }
                    }
                }, {
                    key: "_onMessage",
                    value: function(e) {
                        m.debug("primary message: " + JSON.stringify(e)), this._listens._trigger(e.data.topic, e.data.message)
                    }
                }, {
                    key: "_onConnectionFailure",
                    value: function() {
                        m.debug("connection failure"), this._trigger("disconnected"), this._notifyWhenOpen = !0, this._onReconnect()
                    }
                }, {
                    key: "_onReconnect",
                    value: function() {
                        m.debug("reconnecting..."), this._reconnecting = !0, this._backupSocket = new v["default"]({
                            stats: this._stats,
                            addr: this._addr
                        }), this._bindBackup(this._backupSocket), setTimeout(this._backupSocket.connect.bind(this._backupSocket), this._jitteredReconnectDelay())
                    }
                }, {
                    key: "_bindBackup",
                    value: function(e) {
                        e.on("open", this._onBackupOpen, this), e.on("response", this._onBackupResponse, this)
                    }
                }, {
                    key: "_unbindBackup",
                    value: function(e) {
                        e.off("open", this._onBackupOpen, this), e.off("response", this._onBackupResponse, this)
                    }
                }, {
                    key: "_onBackupOpen",
                    value: function() {
                        m.debug("Backup socket opened"), this._replays.size() > 0 ? this._replayBackup() : (this._swapSockets(), this._notifyWhenOpen && (m.debug("triggering connected"), this._notifyWhenOpen = !1, this._trigger("connected")))
                    }
                }, {
                    key: "_replayBackup",
                    value: function() {
                        for (var e = this._replays.values(), t = 0; t < e.length; t++) {
                            var n = {
                                type: "LISTEN",
                                nonce: this._generateNonce(),
                                data: {
                                    topics: [e[t].topic],
                                    auth_token: e[t].auth
                                }
                            };
                            this._pendingReplayResponses.set(n.nonce, !0), this._backupSocket.send(n)
                        }
                    }
                }, {
                    key: "_onBackupResponse",
                    value: function(e) {
                        this._pendingReplayResponses.has(e.nonce) && "" === e.error && (this._pendingReplayResponses.remove(e.nonce), 0 === this._pendingReplayResponses.size() && (this._swapSockets(), this._notifyWhenOpen && (m.debug("triggering connected"), this._notifyWhenOpen = !1, this._trigger("connected"))))
                    }
                }, {
                    key: "_swapSockets",
                    value: function() {
                        m.debug("swapping primary " + this._primarySocket._id + " and backup " + this._backupSocket._id), this._unbindPrimary(this._primarySocket), this._unbindBackup(this._backupSocket), this._bindPrimary(this._backupSocket), this._primarySocket.close(), this._primarySocket = this._backupSocket, this._reconnecting = !1, this._flushQueuedRequests()
                    }
                }, {
                    key: "Listen",
                    value: function(e) {
                        if (window.WebSocket) {
                            m.debug("listening on " + e.topic);
                            var t = this._generateNonce(),
                                n = {
                                    type: "LISTEN",
                                    nonce: t,
                                    data: {
                                        topics: [e.topic],
                                        auth_token: e.auth
                                    }
                                };
                            this._queuedSend(t, n, e)
                        }
                    }
                }, {
                    key: "Unlisten",
                    value: function(e) {
                        if (window.WebSocket) {
                            if (m.debug("unlistening on " + e.topic + "(" + this._listens.count(e.topic) + " listeners)"), this._listens.count(e.topic) > 1) {
                                this._listens.off(e.topic, e.message);
                                for (var t in this._replays.map())
                                    if (this._replays.get(t).message === e.message) {
                                        this._replays.remove(t);
                                        break
                                    }
                                return e.success && e.success(), void m.debug("now have " + this._listens.count(e.topic) + " listeners")
                            }
                            var n = this._generateNonce(),
                                r = {
                                    type: "UNLISTEN",
                                    nonce: n,
                                    data: {
                                        topics: [e.topic]
                                    }
                                };
                            this._queuedSend(n, r, e)
                        }
                    }
                }, {
                    key: "_queuedSend",
                    value: function(e, t, n) {
                        this._reconnecting || this._primarySocket._isReady() === !1 ? (m.debug("queuing"), this._queuedRequests.push({
                            nonce: e,
                            msg: t,
                            opts: n
                        })) : (m.debug("sending immediately"), this._send(e, t, n))
                    }
                }, {
                    key: "_flushQueuedRequests",
                    value: function() {
                        for (m.debug("flushing " + this._queuedRequests.length + " listen/unlistens"); this._queuedRequests.length > 0;) {
                            var e = this._queuedRequests.shift();
                            this._send(e.nonce, e.msg, e.opts)
                        }
                    }
                }, {
                    key: "_send",
                    value: function(e, t, n) {
                        this._pendingResponses.set(e, {
                            timeout: setTimeout(this._onResponseTimeout.bind(this), y, e),
                            topic: n.topic,
                            auth: n.auth,
                            message: t,
                            callbacks: {
                                success: n.success,
                                failure: n.failure,
                                message: n.message
                            }
                        }), this._primarySocket.send(t)
                    }
                }, {
                    key: "_neverListened",
                    value: function() {
                        this._stats.logCounter("first_listen_timeout", 1)
                    }
                }, {
                    key: "_generateNonce",
                    value: function() {
                        return p["default"].generateString(E)
                    }
                }, {
                    key: "_jitteredReconnectDelay",
                    value: function() {
                        return p["default"].randomInt(2e3)
                    }
                }]), t
            }(c["default"]);
        t["default"] = A
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            u = n(179),
            c = r(u),
            l = n(180),
            d = r(l),
            f = n(181),
            p = r(f),
            h = d["default"]._getLogger("PubsubSocket"),
            v = 120,
            g = "not_ready",
            _ = 3e4,
            m = 24e4,
            y = 1,
            b = .1,
            E = .1,
            w = function(e) {
                function t(e) {
                    i(this, t);
                    var n = a(this, Object.getPrototypeOf(t).call(this, e));
                    return n._opts = e, n._addr = e.addr, n._stats = e.stats, n._connectionAttempts = 0, n._sentPing = n._receivedPong = !1, n._id = "[" + p["default"].generateString(10) + "] ", window.addEventListener("beforeunload", n._beforeUnload.bind(n)), n
                }
                return o(t, e), s(t, [{
                    key: "connect",
                    value: function() {
                        h.debug(this._id + "connecting to " + this._addr), this._connecting = !0, this._socketConnectTime = p["default"].time.now();
                        try {
                            this._socket = new WebSocket(this._addr), this._socket.onmessage = this._onMessage.bind(this), this._socket.onerror = this._onError.bind(this), this._socket.onclose = this._onClose.bind(this), this._socket.onopen = this._onOpen.bind(this)
                        } catch (e) {
                            this._stats.logCounter("socket.error.security_err", 1, y), this._trigger("connection_failure")
                        }
                    }
                }, {
                    key: "close",
                    value: function() {
                        h.debug(this._id + "closing"), this._closing = !0, this._clearTimeouts(), this._socket.close()
                    }
                }, {
                    key: "send",
                    value: function(e) {
                        h.debug(this._id + "sending " + JSON.stringify(e)), this._isReady() ? this._socket.send(JSON.stringify(e)) : this._trigger("error", g)
                    }
                }, {
                    key: "_isReady",
                    value: function() {
                        return h.debug(this._id + "_isReady called"), this._socket ? this._socket.readyState === WebSocket.OPEN : !1
                    }
                }, {
                    key: "_onMessage",
                    value: function(e) {
                        h.debug(this._id + "received message: " + e.data);
                        try {
                            var t = JSON.parse(e.data);
                            switch (t.type) {
                                case "RESPONSE":
                                    this._trigger("response", t);
                                    break;
                                case "MESSAGE":
                                    this._trigger("message", t);
                                    break;
                                case "PONG":
                                    this._receivedPong = !0;
                                    break;
                                case "RECONNECT":
                                    this._trigger("reconnect")
                            }
                        } catch (n) {
                            this._stats.logLine("onMessage JSON Parse error: " + n)
                        }
                    }
                }, {
                    key: "_onError",
                    value: function(e) {
                        h.debug(this._id + "error: " + JSON.stringify(e))
                    }
                }, {
                    key: "_onClose",
                    value: function(e) {
                        if (h.debug(this._id + "onClose triggered with code " + e.code + "(closing = " + this._closing + ", connecting = " + this._connecting + ")"), this._clearTimeouts(), this._connecting) {
                            var t = Math.pow(2, this._connectionAttempts);
                            t > v && (t = v), h.debug(this._id + "reconnecting in " + t + " seconds"), this._connectionAttempts += 1, this._nextConnectionAttempt = setTimeout(this.connect.bind(this), 1e3 * t)
                        } else if (this._closing) this._closed = !0, this._trigger("connection_failure");
                        else {
                            if (this._windowUnloading) return;
                            h.debug(this._id + "unexpected close"), this._stats.logCounter("socket.error.unexpected_closed", 1, y), this._stats.logCounter("socket.error.close." + e.code, 1, y);
                            var n = "pubsub-js-client unexpected_close. code: " + e.code + ", reason: " + e.reason + ", wasClean: " + e.wasClean;
                            this._stats.logLine(n), this._closed = !0, this._trigger("connection_failure")
                        }
                    }
                }, {
                    key: "_onOpen",
                    value: function(e) {
                        h.debug(this._id + " socket opened"), this._connectionAttempts = 0, this._connecting = !1, this._socketConnectTime && this._stats.logTimer("socket.connect", p["default"].time.now() - this._socketConnectTime, b), this._stats.logCounter("socket.connection_retries." + this._connectionAttempts, 1, E), this._ping(), this._pingInterval = window.setInterval(this._ping.bind(this), m), this._trigger("open")
                    }
                }, {
                    key: "_ping",
                    value: function() {
                        h.debug(this._id + "sending PING");
                        try {
                            this._socket.send(JSON.stringify({
                                type: "PING"
                            })), this._sentPing = !0, this._pongTimeout && clearTimeout(this._pongTimeout), this._pongTimeout = setTimeout(this._pongTimedOut.bind(this), _)
                        } catch (e) {
                            this._stats.logCounter("socket.error.ping_send_error", 1, y), this._stats.logLine("ping error: closed: " + this._closed + ", error: " + e), this.close()
                        }
                    }
                }, {
                    key: "_pongTimedOut",
                    value: function() {
                        this._sentPing && !this._receivedPong && (h.debug(this._id + "Pong timed out!"), this._stats.logCounter("socket.error.pong_timed_out", 1, y), this.close())
                    }
                }, {
                    key: "_clearTimeouts",
                    value: function() {
                        this._sentPing = this._receivedPong = !1, clearTimeout(this._pongTimeout), clearInterval(this._pingInterval), clearTimeout(this._nextConnectionAttempt)
                    }
                }, {
                    key: "_beforeUnload",
                    value: function() {
                        this._windowUnloading = !0
                    }
                }]), t
            }(c["default"]);
        t["default"] = w
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Stats = void 0;
        var i = n(188),
            a = r(i);
        t.Stats = a["default"], t["default"] = {
            Stats: a["default"]
        }
    }, function(e, t) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t) {
            var n = u[e];
            if (!n) throw new Error("Invalid environment - got " + e);
            if (!t) throw new Error("Invalid prefix - got " + t);
            window[s] = window[s] || {};
            var r = window[s];
            r[e] || (r[e] = new c(n));
            var i = r[e];
            return new l(i, t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            a = 500,
            o = 20,
            s = "__Twitch__statsInstances_1",
            u = {
                production: {
                    addr: "https://client-event-reporter.twitch.tv"
                },
                darklaunch: {
                    addr: "https://client-event-reporter-darklaunch.twitch.tv"
                }
            };
        u.staging = u.darklaunch, u.development = u.darklaunch, u.test = u.darklaunch;
        var c = function() {
                function e(t) {
                    if (n(this, e), !t) throw new Error("config is required");
                    this._addr = t.addr, this._resetCombinedStats(), this._recordDelay = a, this._maxPendingStats = o
                }
                return i(e, [{
                    key: "logCounter",
                    value: function(e) {
                        var t = arguments.length <= 1 || void 0 === arguments[1] ? 1 : arguments[1],
                            n = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
                        this._combinedStats.counters.push({
                            key: e,
                            count: t,
                            sample_rate: n
                        }), this._record()
                    }
                }, {
                    key: "logTimer",
                    value: function(e, t) {
                        var n = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
                        this._combinedStats.timers.push({
                            key: e,
                            milliseconds: t,
                            sample_rate: n
                        }), this._record()
                    }
                }, {
                    key: "logLine",
                    value: function(e) {
                        this._combinedStats.log_lines.push({
                            log_line: e
                        }), this._record()
                    }
                }, {
                    key: "logGauge",
                    value: function(e) {
                        this._combinedStats.gauges.push({
                            key: e
                        }), this._record()
                    }
                }, {
                    key: "_resetCombinedStats",
                    value: function() {
                        this._combinedStats = {
                            timers: [],
                            counters: [],
                            log_lines: [],
                            gauges: []
                        }
                    }
                }, {
                    key: "_record",
                    value: function() {
                        var e = this;
                        this._numPendingStats() > this._maxPendingStats ? (this._flushTimeout && (clearTimeout(this._flushTimeout), this._flushTimeout = null), this._flush()) : this._flushTimeout || (this._flushTimeout = setTimeout(function() {
                            e._flushTimeout = null, e._flush()
                        }, this._recordDelay))
                    }
                }, {
                    key: "_flush",
                    value: function() {
                        var e = this._combinedStats;
                        this._resetCombinedStats();
                        var t = this._addr + "/v1/stats",
                            n = this._createCorsRequest("POST", t);
                        return n ? (n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n.setRequestHeader("Content-Type", "application/json"), void n.send(JSON.stringify(e))) : void console.log("WARNING: Cannot send stats because CORS is unsupported")
                    }
                }, {
                    key: "_numPendingStats",
                    value: function() {
                        var e = this._combinedStats;
                        return e.timers.length + e.counters.length + e.log_lines.length + e.gauges.length
                    }
                }, {
                    key: "_createCorsRequest",
                    value: function(e, t) {
                        var n = new XMLHttpRequest;
                        return "withCredentials" in n ? n.open(e, t, !0) : "undefined" != typeof XDomainRequest ? (n = new XDomainRequest, n.open(e, t)) : n = null, n
                    }
                }]), e
            }(),
            l = function() {
                function e(t, r) {
                    if (n(this, e), !t) throw new Error("Missing backend");
                    if (!r) throw new Error("Missing prefix");
                    this._backend = t, this._prefix = r
                }
                return i(e, [{
                    key: "logCounter",
                    value: function(e) {
                        var t = arguments.length <= 1 || void 0 === arguments[1] ? 1 : arguments[1],
                            n = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
                        this._backend.logCounter(this._prefix + "." + e, t, n)
                    }
                }, {
                    key: "logTimer",
                    value: function(e, t) {
                        var n = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
                        this._backend.logTimer(this._prefix + "." + e, t, n)
                    }
                }, {
                    key: "logLine",
                    value: function(e) {
                        this._backend.logLine(e)
                    }
                }, {
                    key: "logGauge",
                    value: function(e) {
                        this._backend.logGauge(e)
                    }
                }, {
                    key: "setPrefix",
                    value: function(e) {
                        if (!e) throw new Error("Missing prefix");
                        this._prefix = e
                    }
                }]), e
            }();
        t.StatsBackend = c, t.PrefixedStats = l, t["default"] = {
            getInstance: r
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            o = n(181),
            s = r(o),
            u = n(180),
            c = r(u),
            l = "https://pubster.twitch.tv/publish",
            d = "https://pubster-darklaunch.twitch.tv/publish",
            f = "pubsubtest.unique.",
            p = "pubsubtest.shared." + s["default"].randomInt(2),
            h = 1e-4,
            v = 6e4,
            g = 3e4,
            _ = .1,
            m = 1,
            y = c["default"]._getLogger("PubsubTest"),
            b = function() {
                function e(t) {
                    switch (i(this, e), y.debug("PubsubTest enabled"), this._env = t.env, this._driver = t.driver, this._stats = t.stats, this._env) {
                        case "production":
                            this._addr = l;
                            break;
                        case "darklaunch":
                            this._addr = d;
                            break;
                        default:
                            this._env = "production", this._addr = l
                    }
                    this._statKeys = {
                        uniqueSuccess: "test.unique.success",
                        uniqueFailure: "test.unique.failure",
                        sharedSuccess: "test.shared.success",
                        sharedFailure: "test.shared.failure"
                    }, this._uniqueKey = f + s["default"].generateString(20), this._sharedKey = p, this._listeningUnique = this._listeningShared = !1, this.sendListens()
                }
                return a(e, [{
                    key: "sendListens",
                    value: function() {
                        this._driver.Listen({
                            topic: this._uniqueKey,
                            auth: "",
                            success: this._gotUniqueOk.bind(this),
                            failure: this._gotUniqueFail.bind(this),
                            message: this._gotUniqueMessage.bind(this)
                        }), this._driver.Listen({
                            topic: this._sharedKey,
                            auth: "",
                            success: this._gotSharedOk.bind(this),
                            failure: this._gotSharedFail.bind(this),
                            message: this._gotSharedMessage.bind(this)
                        })
                    }
                }, {
                    key: "_gotUniqueOk",
                    value: function() {
                        this._listeningUnique = !0, this._listeningShared && this.startTesting()
                    }
                }, {
                    key: "_gotUniqueFail",
                    value: function(e) {}
                }, {
                    key: "_gotSharedOk",
                    value: function() {
                        this._listeningShared = !0, this._listeningUnique && this.startTesting()
                    }
                }, {
                    key: "_gotSharedFail",
                    value: function(e) {}
                }, {
                    key: "startTesting",
                    value: function() {
                        y.debug("startTesting"), this._driver.on("connected", this.resumeTesting, this), this._driver.on("disconnected", this.stopTesting, this), this.checkAndSend(), this._publishInterval = window.setInterval(this.checkAndSend.bind(this), v)
                    }
                }, {
                    key: "resumeTesting",
                    value: function() {
                        y.debug("resumeTesting"), this.checkAndSend(), this._publishInterval = window.setInterval(this.checkAndSend.bind(this), v)
                    }
                }, {
                    key: "stopTesting",
                    value: function() {
                        y.debug("stopTesting"), clearInterval(this._publishInterval), this._receivedUniqueMessage = this._sentUniqueMessage = !1, this._receivedSharedMessage = this._sentSharedMessage = !1
                    }
                }, {
                    key: "checkAndSend",
                    value: function() {
                        y.debug("checkAndSend: unique: sent = " + this._sentUniqueMessage + ", received = " + this._receivedUniqueMessage), !this._receivedUniqueMessage && this._sentUniqueMessage && (y.debug("unique failure"), this._stats.logCounter(this._statKeys.uniqueFailure, 1, m)), !this._receivedSharedMessage && this._sentSharedMessage && (y.debug("shared failure"), this._stats.logCounter(this._statKeys.sharedFailure, 1, m)), this._receivedUniqueMessage = this._sentUniqueMessage = !1, this._receivedSharedMessage = this._sentSharedMessage = !1, this._expectedMessage = s["default"].generateString(30), $.ajax({
                            type: "POST",
                            url: this._addr,
                            contentType: "application/json",
                            timeout: g,
                            data: JSON.stringify({
                                topics: [this._uniqueKey],
                                data: this._expectedMessage
                            }),
                            success: function() {
                                y.debug("unique message sent"), this._sentUniqueMessage = !0
                            }.bind(this)
                        }), this._sentUniqueMessageTime = s["default"].time.now(), Math.random() < h && ($.ajax({
                            type: "POST",
                            url: this._addr,
                            contentType: "application/json",
                            timeout: g,
                            data: JSON.stringify({
                                topics: [this._sharedKey],
                                data: this._expectedMessage
                            }),
                            success: function() {
                                y.debug("shared message sent"), this._sentSharedMessage = !0
                            }.bind(this)
                        }), this._sentSharedMessageTime = s["default"].time.now())
                    }
                }, {
                    key: "_gotUniqueMessage",
                    value: function(e) {
                        if (y.debug("received unique message: " + e), e === this._expectedMessage) {
                            var t = s["default"].time.now() - this._sentUniqueMessageTime;
                            this._receivedUniqueMessage = !0, this._stats.logTimer(this._statKeys.uniqueSuccess, t, _), this._stats.logCounter(this._statKeys.uniqueSuccess, 1, _)
                        }
                    }
                }, {
                    key: "_gotSharedMessage",
                    value: function(e) {
                        if (e === this._expectedMessage) {
                            var t = s["default"].time.now() - this._sentSharedMessageTime;
                            this._receivedSharedMessage = !0, this._stats.logTimer(this._statKeys.sharedSuccess, t, _), this._stats.logCounter(this._statKeys.sharedSuccess, 1, _)
                        }
                    }
                }]), e
            }();
        t["default"] = b
    }, function(e, t) {
        "use strict";

        function n(e, t, n) {
            var r = e.getState();
            return e.subscribe(function() {
                var i = !1,
                    a = e.getState(),
                    o = t.reduce(function(e, t) {
                        return a[t] !== r[t] && (e[t] = a[t], i = !0), e
                    }, {});
                i && n(o, r), r = a
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.subscribe = n
    }, function(e, t) {
        "use strict";

        function n(e) {
            return {
                type: r,
                count: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.updateViewerCount = n;
        var r = t.ACTION_UPDATE_VIEWERCOUNT = "update viewercount"
    }, function(e, t) {
        "use strict";

        function n(e) {
            return {
                type: r,
                online: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.setOnline = n;
        var r = t.ACTION_SET_ONLINE = "set online"
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return {
                type: c,
                streamMetadata: e
            }
        }

        function i(e) {
            return {
                type: l,
                id: e
            }
        }

        function a() {
            return function(e, t) {
                function n() {
                    a === t().stream.channel && (0, o.streamInfo)(a).then(function(a) {
                        a.stream && a.stream._id === t().streamMetadata.broadcastID ? (e((0, u.updateViewerCount)(a.stream.viewers)), e(r(a.stream))) : c < d.length && (i.setTimeout(n, d[c]), c += 1)
                    })
                }
                if (t().stream instanceof s.LiveContentStream) {
                    var i = t().window,
                        a = t().stream.channel,
                        c = 0;
                    n()
                }
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.FETCH_METADATA_TIMEOUT = t.ACTION_SET_BROADCAST_ID = t.ACTION_SET_STREAMMETADATA = void 0, t.setStreamMetadata = r, t.setBroadcastID = i, t.fetchStreamMetadata = a;
        var o = n(157),
            s = n(57),
            u = n(191),
            c = t.ACTION_SET_STREAMMETADATA = "set streammetadata",
            l = t.ACTION_SET_BROADCAST_ID = "set broadcastId",
            d = t.FETCH_METADATA_TIMEOUT = [15e3, 3e4, 6e4, 12e4, 3e5, 6e5]
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.VODContentStream = t.CONTENT_MODE_VOD = void 0;
        var a = function() {
                function e(e, t) {
                    var n = [],
                        r = !0,
                        i = !1,
                        a = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                    } catch (u) {
                        i = !0, a = u
                    } finally {
                        try {
                            !r && s["return"] && s["return"]()
                        } finally {
                            if (i) throw a
                        }
                    }
                    return n
                }
                return function(t, n) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return e(t, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            s = n(50),
            u = r(s),
            c = n(58),
            l = r(c),
            d = n(88),
            f = n(195),
            p = t.CONTENT_MODE_VOD = "vod";
        t.VODContentStream = function() {
            function e(t, n, r) {
                i(this, e), this._vodId = t, this._oAuthToken = n, this._usherParams = r, this._restrictedBitrates = []
            }
            return o(e, [{
                key: "contentType",
                get: function() {
                    return p
                }
            }, {
                key: "channel",
                get: function() {
                    return ""
                }
            }, {
                key: "restrictedBitrates",
                get: function() {
                    return this._restrictedBitrates
                }
            }, {
                key: "videoId",
                get: function() {
                    return this._vodId
                }
            }, {
                key: "accessToken",
                get: function() {
                    var e = this;
                    return this._oAuthToken.then(function(t) {
                        return (0, f.fetchVideoAccessToken)(e._vodId, t)
                    })
                }
            }, {
                key: "streamUrl",
                get: function() {
                    var e = this;
                    return Promise.all([this.accessToken, this._usherParams]).then(function(t) {
                        var n = a(t, 2),
                            r = n[0],
                            i = n[1],
                            o = (0, u["default"])({
                                nauth: r.token,
                                nauthsig: r.sig,
                                allow_source: !0,
                                allow_spectre: !0
                            }, (0, l["default"])(i, ["protocol"]));
                        return e._restrictedBitrates = JSON.parse(r.token).chansub.restricted_bitrates, "" + i.protocol + d.usherHost + "/vod/" + e._vodId.substring(1) + ".m3u8?" + $.param(o)
                    })
                }
            }]), e
        }()
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            return (0, o.fetch)({
                url: e,
                data: {
                    oauth_token: t
                },
                xhrFields: {
                    withCredentials: !0
                }
            })
        }

        function i(e, t) {
            var n = s.apiHost + "/api/vods/" + e.substring(1) + "/access_token";
            return r(n, t)
        }

        function a(e, t) {
            var n = s.apiHost + "/api/channels/" + e.toLowerCase() + "/access_token";
            return r(n, t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.fetchAccessToken = r, t.fetchVideoAccessToken = i, t.fetchChannelAccessToken = a;
        var o = n(156),
            s = n(88)
    }, function(e, t, n) {
        ! function() {
            function t(e, t) {
                for (var n, r = e.length, i = t ^ r, a = 0; r >= 4;) n = 255 & e.charCodeAt(a) | (255 & e.charCodeAt(++a)) << 8 | (255 & e.charCodeAt(++a)) << 16 | (255 & e.charCodeAt(++a)) << 24, n = 1540483477 * (65535 & n) + ((1540483477 * (n >>> 16) & 65535) << 16), n ^= n >>> 24, n = 1540483477 * (65535 & n) + ((1540483477 * (n >>> 16) & 65535) << 16), i = 1540483477 * (65535 & i) + ((1540483477 * (i >>> 16) & 65535) << 16) ^ n, r -= 4, ++a;
                switch (r) {
                    case 3:
                        i ^= (255 & e.charCodeAt(a + 2)) << 16;
                    case 2:
                        i ^= (255 & e.charCodeAt(a + 1)) << 8;
                    case 1:
                        i ^= 255 & e.charCodeAt(a), i = 1540483477 * (65535 & i) + ((1540483477 * (i >>> 16) & 65535) << 16)
                }
                return i ^= i >>> 13, i = 1540483477 * (65535 & i) + ((1540483477 * (i >>> 16) & 65535) << 16), i ^= i >>> 15, i >>> 0
            }

            function n(e, t) {
                var n, r, i, a, o, s, u, c;
                for (n = 3 & e.length, r = e.length - n, i = t, o = 3432918353, s = 461845907, c = 0; r > c;) u = 255 & e.charCodeAt(c) | (255 & e.charCodeAt(++c)) << 8 | (255 & e.charCodeAt(++c)) << 16 | (255 & e.charCodeAt(++c)) << 24, ++c, u = (65535 & u) * o + (((u >>> 16) * o & 65535) << 16) & 4294967295, u = u << 15 | u >>> 17, u = (65535 & u) * s + (((u >>> 16) * s & 65535) << 16) & 4294967295, i ^= u, i = i << 13 | i >>> 19, a = 5 * (65535 & i) + ((5 * (i >>> 16) & 65535) << 16) & 4294967295, i = (65535 & a) + 27492 + (((a >>> 16) + 58964 & 65535) << 16);
                switch (u = 0, n) {
                    case 3:
                        u ^= (255 & e.charCodeAt(c + 2)) << 16;
                    case 2:
                        u ^= (255 & e.charCodeAt(c + 1)) << 8;
                    case 1:
                        u ^= 255 & e.charCodeAt(c), u = (65535 & u) * o + (((u >>> 16) * o & 65535) << 16) & 4294967295, u = u << 15 | u >>> 17, u = (65535 & u) * s + (((u >>> 16) * s & 65535) << 16) & 4294967295, i ^= u
                }
                return i ^= e.length, i ^= i >>> 16, i = 2246822507 * (65535 & i) + ((2246822507 * (i >>> 16) & 65535) << 16) & 4294967295, i ^= i >>> 13, i = 3266489909 * (65535 & i) + ((3266489909 * (i >>> 16) & 65535) << 16) & 4294967295, i ^= i >>> 16, i >>> 0
            }
            var r = n;
            r.v2 = t, r.v3 = n;
            e.exports = r
        }()
    }, function(e, t) {
        "use strict";

        function n() {
            return function(e, t) {
                var n = t(),
                    r = n.window;
                i(r, o, s, "2246787049647177590", "", "", "")
            }
        }

        function r() {
            return function(e, t) {
                var n = t(),
                    r = n.window;
                i(r, a, s, "TWITCH", "twitch.tv", u, "")
            }
        }

        function i(e, t, n, r, i, a, o) {
            var s = {
                c1: t,
                c2: n,
                c3: r,
                c4: i,
                c5: a,
                c6: o
            };
            "COMSCORE" in e ? e.COMSCORE.beacon(s) : (e._comscore || (e._comscore = []), e._comscore.push(s))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.sendPlayerBeacon = n, t.sendVideoBeacon = r;
        var a = "1",
            o = "7",
            s = "6745306",
            u = "03"
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function i() {
            this._viewerSteamId = Promise.reject(), this._channelSteamId = Promise.reject(), this._viewerSteamId.then(null, function() {
                return null
            }), this._channelSteamId.then(null, function() {
                return null
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ValveClient = i;
        var a = n(88),
            o = r(a);
        i.prototype.viewerInfo = function(e) {
            this._viewerSteamId = e.then(function(e) {
                return e.steam_id ? e.steam_id : Promise.reject()
            }), this._viewerSteamId.then(null, function() {
                return null
            })
        }, i.prototype.channelInfo = function(e) {
            this._channelSteamId = e.then(function(e) {
                return e.steam_id ? e.steam_id : Promise.reject()
            }), this._channelSteamId.then(null, function() {
                return null
            })
        }, i.prototype.notify = function() {
            var e = Promise.all([this._channelSteamId, this._viewerSteamId]).then(function(e) {
                var t = e[0],
                    n = e[1];
                $.ajax({
                    url: o.valveApiHost,
                    method: "GET",
                    data: {
                        channel: t,
                        viewer: n
                    }
                })
            });
            e.then(null, function() {
                return null
            })
        }
    }, function(e, t, n) {
        "use strict";

        function r() {
            var e = !Twitch.notScript,
                t = function() {
                    try {
                        return window.self !== window.top
                    } catch (e) {
                        return !0
                    }
                };
            return e ? a : t() && !(0, i.isTwitchEmbed)() ? o : s
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PLAYER_FACEBOOK = t.PLAYER_CREATIVE = t.PLAYER_FRONTPAGE = t.PLAYER_POPOUT = t.PLAYER_EMBED = t.PLAYER_SITE = void 0, t.getPlayerType = r;
        var i = n(200),
            a = t.PLAYER_SITE = "site",
            o = t.PLAYER_EMBED = "embed",
            s = t.PLAYER_POPOUT = "popout";
        t.PLAYER_FRONTPAGE = "frontpage", t.PLAYER_CREATIVE = "creative", t.PLAYER_FACEBOOK = "facebook"
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function i() {
            var e;
            e = window.self !== window.parent ? document.referrer : window.location.href;
            var t = (0, a.parseUri)(e),
                n = t.host.split(".").slice(-2).join(".");
            return n === s.domain
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isTwitchEmbed = i;
        var a = n(95),
            o = n(88),
            s = r(o)
    }, function(e, t, n) {
        "use strict";

        function r() {
            return {
                type: u
            }
        }

        function i() {
            return {
                type: c
            }
        }

        function a() {
            return {
                type: l,
                playSessionId: (0, s.generate)(),
                playSessionStartTime: Date.now()
            }
        }

        function o(e) {
            return {
                type: d,
                clients: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ACTION_SET_TRACKING_CLIENTS = t.ACTION_RESET_PLAY_SESSION = t.ACTION_RESET_QUALITY_CHANGE_COUNT = t.ACTION_INCREMENT_QUALITY_CHANGE_COUNT = void 0, t.incrementQualityChangeCount = r, t.resetQualityChangeCount = i, t.resetPlaySession = a, t.setTrackingClients = o;
        var s = n(202),
            u = t.ACTION_INCREMENT_QUALITY_CHANGE_COUNT = "set quality change count",
            c = t.ACTION_RESET_QUALITY_CHANGE_COUNT = "reset quality change count",
            l = t.ACTION_RESET_PLAY_SESSION = "reset play session",
            d = t.ACTION_SET_TRACKING_CLIENTS = "set new tracking clients"
    }, function(e, t) {
        "use strict";

        function n() {
            for (var e = arguments.length <= 0 || void 0 === arguments[0] ? 32 : arguments[0], t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = "", r = 0; e > r; r++) {
                var i = Math.floor(Math.random() * t.length);
                n += t.charAt(i)
            }
            return n
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.generate = n
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e, t) {
            var n = this,
                r = [],
                i = void 0,
                a = function() {
                    var r = new u.MixpanelClient({
                            host: f.mixpanelHost,
                            token: f.mixpanelToken
                        }),
                        a = new c.SpadeClient({
                            host: f.spadeHost
                        });
                    e.dispatch((0, l.setTrackingClients)([r, a]));
                    var s = y.getFlashPlayerVersion(),
                        g = s.major + "," + s.minor + "," + s.release,
                        m = d(),
                        b = h(),
                        E = (0, p.parseUri)(b),
                        w = v.get(!1),
                        k = v.get(!0);
                    i = {
                        platform: f.trackingPlatform,
                        ui_version: f.version,
                        flash_version: g,
                        url: m.href,
                        host: m.host,
                        domain: o(m.host),
                        referrer_url: b,
                        referrer_host: E.host,
                        referrer_domain: o(E.host),
                        browser: navigator.appVersion || "",
                        device_id: w,
                        distinct_id: w,
                        session_device_id: k
                    }, n.setProperties(t.tracking), n.setProperty("benchmark_session_id", t.benchmarkId || _.generate()), n.setProperty("mse_support", "undefined" != typeof MediaSource)
                },
                o = function(e) {
                    var t = e.split(".");
                    return t.slice(-2).join(".")
                },
                d = function() {
                    var e;
                    try {
                        document.domain = f.domain, e = window.parent.location, e.host || (e = window.location)
                    } catch (t) {
                        e = window.location
                    }
                    return e
                },
                h = function() {
                    try {
                        return document.domain = f.domain, window.parent.document.referrer
                    } catch (e) {
                        return window.document.referrer
                    }
                };
            n.trackEvents = function(n) {
                var a = (new Date).getTime() / 1e3;
                Promise.all(r).then(function(r) {
                    var o = s["default"].apply(null, r),
                        u = n.map(function(t) {
                            var n = (0, s["default"])({}, t.properties, i, o);
                            return n.time || (n.time = a), n.play_session_id = e.getState().analytics.playSessionId, {
                                event: t.event,
                                properties: n
                            }
                        });
                    t.debug && u.forEach(function(e) {
                        console.log("track event:", e.event, e.properties)
                    });
                    var c = e.getState().analytics.trackingClients;
                    c.forEach(function(e) {
                        e.trackEvents(u)
                    })
                })
            }, n.trackEvent = function(e, t) {
                n.trackEvents([{
                    event: e,
                    properties: t
                }])
            }, n.setProperty = function(e, t) {
                var r = {};
                r[e] = t, n.setProperties(r)
            }, n.setProperties = function(e) {
                var t = Promise.resolve(e);
                t = t.then(null, function(e) {
                    return console.warn("failed to resolve properties promise", e), {}
                }), r.push(t)
            }, a()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.AnalyticsTracker = a;
        var o = n(50),
            s = i(o),
            u = n(204),
            c = n(205),
            l = n(201),
            d = n(88),
            f = r(d),
            p = n(95),
            h = n(206),
            v = r(h),
            g = n(202),
            _ = r(g),
            m = n(208),
            y = r(m)
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e) {
            this._host = e.host, this._token = e.token
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.MixpanelClient = a;
        var o = n(50),
            s = i(o),
            u = n(35),
            c = i(u),
            l = n(88),
            d = r(l);
        a.prototype.trackEvent = function(e, t) {
            if (!(0, c["default"])(d.mixpanelIgnore, e)) {
                var n = (0, s["default"])({}, t, {
                        token: this._token
                    }),
                    r = btoa(JSON.stringify({
                        event: e,
                        properties: n
                    }));
                $.ajax({
                    url: this._host + "/track",
                    method: "GET",
                    cache: !1,
                    data: {
                        data: r,
                        ip: 1
                    }
                })
            }
        }, a.prototype.trackEvents = function(e) {
            e.forEach(function(e) {
                this.trackEvent(e.event, e.properties)
            }, this)
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e) {
            this._host = e.host
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.SpadeClient = a;
        var o = n(35),
            s = i(o),
            u = n(88),
            c = r(u);
        a.prototype.trackEvent = function(e, t) {
            (0, s["default"])(c.spadeIgnore, e) || this._send({
                event: e,
                properties: t
            })
        }, a.prototype.trackEvents = function(e) {
            var t = e.filter(function(e) {
                return !(0, s["default"])(c.spadeIgnore, e.event)
            });
            t.length > 0 && this._send(t)
        }, a.prototype._send = function(e) {
            $.ajax({
                url: this._host,
                method: "POST",
                data: {
                    data: btoa(JSON.stringify(e))
                }
            })
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function i(e) {
            var t = e ? "session_unique_id" : "unique_id",
                n = o.get(t);
            if (n) return n;
            n = u.generate();
            var r = e ? "" : 3650;
            return o.set(t, n, {
                expires: r,
                domain: "." + l.domain,
                path: "/",
                secure: !1
            }), n
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.get = i;
        var a = n(207),
            o = r(a),
            s = n(202),
            u = r(s),
            c = n(88),
            l = r(c)
    }, function(e, t, n) {
        var r;
        ! function(i, a) {
            var o = function() {
                    return o.get.apply(o, arguments)
                },
                s = o.utils = {
                    isArray: Array.isArray || function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    },
                    isPlainObject: function(e) {
                        return !!e && "[object Object]" === Object.prototype.toString.call(e)
                    },
                    toArray: function(e) {
                        return Array.prototype.slice.call(e)
                    },
                    getKeys: Object.keys || function(e) {
                        var t = [],
                            n = "";
                        for (n in e) e.hasOwnProperty(n) && t.push(n);
                        return t
                    },
                    encode: function(e) {
                        return String(e).replace(/[,;"\\=\s%]/g, function(e) {
                            return encodeURIComponent(e)
                        })
                    },
                    decode: function(e) {
                        return decodeURIComponent(e)
                    },
                    retrieve: function(e, t) {
                        return null == e ? t : e
                    }
                };
            o.defaults = {}, o.expiresMultiplier = 86400, o.set = function(e, t, n) {
                if (s.isPlainObject(e))
                    for (var r in e) e.hasOwnProperty(r) && this.set(r, e[r], t);
                else {
                    n = s.isPlainObject(n) ? n : {
                        expires: n
                    };
                    var o = n.expires !== a ? n.expires : this.defaults.expires || "",
                        u = typeof o;
                    "string" === u && "" !== o ? o = new Date(o) : "number" === u && (o = new Date(+new Date + 1e3 * this.expiresMultiplier * o)), "" !== o && "toGMTString" in o && (o = ";expires=" + o.toGMTString());
                    var c = n.path || this.defaults.path;
                    c = c ? ";path=" + c : "";
                    var l = n.domain || this.defaults.domain;
                    l = l ? ";domain=" + l : "";
                    var d = n.secure || this.defaults.secure ? ";secure" : "";
                    n.secure === !1 && (d = ""), i.cookie = s.encode(e) + "=" + s.encode(t) + o + c + l + d
                }
                return this
            }, o.setDefault = function(e, t, n) {
                if (s.isPlainObject(e)) {
                    for (var r in e) this.get(r) === a && this.set(r, e[r], t);
                    return o
                }
                return this.get(e) === a ? this.set.apply(this, arguments) : void 0
            }, o.remove = function(e) {
                e = s.isArray(e) ? e : s.toArray(arguments);
                for (var t = 0, n = e.length; n > t; t++) this.set(e[t], "", -1);
                return this
            }, o.empty = function() {
                return this.remove(s.getKeys(this.all()))
            }, o.get = function(e, t) {
                var n = this.all();
                if (s.isArray(e)) {
                    for (var r = {}, i = 0, a = e.length; a > i; i++) {
                        var o = e[i];
                        r[o] = s.retrieve(n[o], t)
                    }
                    return r
                }
                return s.retrieve(n[e], t)
            }, o.all = function() {
                if ("" === i.cookie) return {};
                for (var e = i.cookie.split("; "), t = {}, n = 0, r = e.length; r > n; n++) {
                    var a = e[n].split("="),
                        o = s.decode(a.shift()),
                        u = s.decode(a.join("="));
                    t[o] = u
                }
                return t
            }, o.enabled = function() {
                if (navigator.cookieEnabled) return !0;
                var e = "_" === o.set("_", "_").get("_");
                return o.remove("_"), e
            }, r = function() {
                return o
            }.call(t, n, t, e), !(r !== a && (e.exports = r))
        }("undefined" == typeof document ? null : document)
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i() {
            return d["default"].getFlashPlayerVersion()
        }

        function a(e) {
            return d["default"].hasFlashPlayerVersion(e)
        }

        function o() {
            return a("1")
        }

        function s() {
            var e = "application/x-shockwave-flash",
                t = navigator.mimeTypes;
            if (t && t[e] && t[e].enabledPlugin) {
                var n = t[e].enabledPlugin.filename;
                return n.match(/pepflashplayer|Pepper/gi) ? "ppapi" : "npapi"
            }
            return o() ? "unknown" : ""
        }

        function u(e, t, n, r, i, a, o, s, u, c) {
            return d["default"].embedSWF(e, t, n, r, i, a, o, s, u, c)
        }

        function c(e) {
            return d["default"].removeSWF(e)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getFlashPlayerVersion = i, t.hasFlashPlayerVersion = a, t.hasFlashPlayer = o, t.getFlashPlayerType = s, t.embedSWF = u, t.removeSWF = c;
        var l = n(209),
            d = r(l)
    }, function(e, t) {
        /*!    SWFObject v2.3.20130521 <http://github.com/swfobject/swfobject>
        	    is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
        	*/
        var n = function() {
            function e() {
                if (!z && document.getElementsByTagName("body")[0]) {
                    try {
                        var e, t = m("span");
                        t.style.display = "none", e = V.getElementsByTagName("body")[0].appendChild(t), e.parentNode.removeChild(e), e = null, t = null
                    } catch (n) {
                        return
                    }
                    z = !0;
                    for (var r = $.length, i = 0; r > i; i++) $[i]()
                }
            }

            function t(e) {
                z ? e() : $[$.length] = e
            }

            function r(e) {
                if (typeof U.addEventListener != j) U.addEventListener("load", e, !1);
                else if (typeof V.addEventListener != j) V.addEventListener("load", e, !1);
                else if (typeof U.attachEvent != j) b(U, "onload", e);
                else if ("function" == typeof U.onload) {
                    var t = U.onload;
                    U.onload = function() {
                        t(), e()
                    }
                } else U.onload = e
            }

            function i() {
                var e = V.getElementsByTagName("body")[0],
                    t = m(M);
                t.setAttribute("style", "visibility: hidden;"), t.setAttribute("type", D);
                var n = e.appendChild(t);
                if (n) {
                    var r = 0;
                    ! function i() {
                        if (typeof n.GetVariable != j) try {
                            var o = n.GetVariable("$version");
                            o && (o = o.split(" ")[1].split(","), Q.pv = [y(o[0]), y(o[1]), y(o[2])])
                        } catch (s) {
                            Q.pv = [8, 0, 0]
                        } else if (10 > r) return r++, void setTimeout(i, 10);
                        e.removeChild(t), n = null, a()
                    }()
                } else a()
            }

            function a() {
                var e = F.length;
                if (e > 0)
                    for (var t = 0; e > t; t++) {
                        var n = F[t].id,
                            r = F[t].callbackFn,
                            i = {
                                success: !1,
                                id: n
                            };
                        if (Q.pv[0] > 0) {
                            var a = _(n);
                            if (a)
                                if (!E(F[t].swfVersion) || Q.wk && Q.wk < 312)
                                    if (F[t].expressInstall && s()) {
                                        var l = {};
                                        l.data = F[t].expressInstall, l.width = a.getAttribute("width") || "0", l.height = a.getAttribute("height") || "0", a.getAttribute("class") && (l.styleclass = a.getAttribute("class")), a.getAttribute("align") && (l.align = a.getAttribute("align"));
                                        for (var d = {}, f = a.getElementsByTagName("param"), p = f.length, h = 0; p > h; h++) "movie" != f[h].getAttribute("name").toLowerCase() && (d[f[h].getAttribute("name")] = f[h].getAttribute("value"));
                                        u(l, d, n, r)
                                    } else c(a), r && r(i);
                            else k(n, !0), r && (i.success = !0, i.ref = o(n), i.id = n, r(i))
                        } else if (k(n, !0), r) {
                            var v = o(n);
                            v && typeof v.SetVariable != j && (i.success = !0, i.ref = v, i.id = v.id), r(i)
                        }
                    }
            }

            function o(e) {
                var t = null,
                    n = _(e);
                return n && "OBJECT" === n.nodeName.toUpperCase() && (t = typeof n.SetVariable !== j ? n : n.getElementsByTagName(M)[0] || n), t
            }

            function s() {
                return !Y && E("6.0.65") && (Q.win || Q.mac) && !(Q.wk && Q.wk < 312)
            }

            function u(e, t, n, r) {
                var i = _(n);
                if (n = g(n), Y = !0, C = r || null, O = {
                        success: !1,
                        id: n
                    }, i) {
                    "OBJECT" == i.nodeName.toUpperCase() ? (S = l(i), A = null) : (S = i, A = n), e.id = R, (typeof e.width == j || !/%$/.test(e.width) && y(e.width) < 310) && (e.width = "310"), (typeof e.height == j || !/%$/.test(e.height) && y(e.height) < 137) && (e.height = "137");
                    var a = Q.ie ? "ActiveX" : "PlugIn",
                        o = "MMredirectURL=" + encodeURIComponent(U.location.toString().replace(/&/g, "%26")) + "&MMplayerType=" + a + "&MMdoctitle=" + encodeURIComponent(V.title.slice(0, 47) + " - Flash Player Installation");
                    if (typeof t.flashvars != j ? t.flashvars += "&" + o : t.flashvars = o, Q.ie && 4 != i.readyState) {
                        var s = m("div");
                        n += "SWFObjectNew", s.setAttribute("id", n), i.parentNode.insertBefore(s, i), i.style.display = "none", h(i)
                    }
                    f(e, t, n)
                }
            }

            function c(e) {
                if (Q.ie && 4 != e.readyState) {
                    e.style.display = "none";
                    var t = m("div");
                    e.parentNode.insertBefore(t, e), t.parentNode.replaceChild(l(e), t), h(e)
                } else e.parentNode.replaceChild(l(e), e)
            }

            function l(e) {
                var t = m("div");
                if (Q.win && Q.ie) t.innerHTML = e.innerHTML;
                else {
                    var n = e.getElementsByTagName(M)[0];
                    if (n) {
                        var r = n.childNodes;
                        if (r)
                            for (var i = r.length, a = 0; i > a; a++) 1 == r[a].nodeType && "PARAM" == r[a].nodeName || 8 == r[a].nodeType || t.appendChild(r[a].cloneNode(!0))
                    }
                }
                return t
            }

            function d(e, t) {
                var n = m("div");
                return n.innerHTML = "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'><param name='movie' value='" + e + "'>" + t + "</object>", n.firstChild
            }

            function f(e, t, n) {
                var r, i = _(n);
                if (n = g(n), Q.wk && Q.wk < 312) return r;
                if (i) {
                    var a, o, s, u = m(Q.ie ? "div" : M);
                    typeof e.id == j && (e.id = n);
                    for (s in t) t.hasOwnProperty(s) && "movie" !== s.toLowerCase() && p(u, s, t[s]);
                    Q.ie && (u = d(e.data, u.innerHTML));
                    for (a in e) e.hasOwnProperty(a) && (o = a.toLowerCase(), "styleclass" === o ? u.setAttribute("class", e[a]) : "classid" !== o && "data" !== o && u.setAttribute(a, e[a]));
                    Q.ie ? q[q.length] = e.id : (u.setAttribute("type", D), u.setAttribute("data", e.data)), i.parentNode.replaceChild(u, i), r = u
                }
                return r
            }

            function p(e, t, n) {
                var r = m("param");
                r.setAttribute("name", t), r.setAttribute("value", n), e.appendChild(r)
            }

            function h(e) {
                var t = _(e);
                t && "OBJECT" == t.nodeName.toUpperCase() && (Q.ie ? (t.style.display = "none", function n() {
                    if (4 == t.readyState) {
                        for (var e in t) "function" == typeof t[e] && (t[e] = null);
                        t.parentNode.removeChild(t)
                    } else setTimeout(n, 10)
                }()) : t.parentNode.removeChild(t))
            }

            function v(e) {
                return e && e.nodeType && 1 === e.nodeType
            }

            function g(e) {
                return v(e) ? e.id : e
            }

            function _(e) {
                if (v(e)) return e;
                var t = null;
                try {
                    t = V.getElementById(e)
                } catch (n) {}
                return t
            }

            function m(e) {
                return V.createElement(e)
            }

            function y(e) {
                return parseInt(e, 10)
            }

            function b(e, t, n) {
                e.attachEvent(t, n), G[G.length] = [e, t, n]
            }

            function E(e) {
                e += "";
                var t = Q.pv,
                    n = e.split(".");
                return n[0] = y(n[0]), n[1] = y(n[1]) || 0, n[2] = y(n[2]) || 0, t[0] > n[0] || t[0] == n[0] && t[1] > n[1] || t[0] == n[0] && t[1] == n[1] && t[2] >= n[2] ? !0 : !1
            }

            function w(e, t, n, r) {
                var i = V.getElementsByTagName("head")[0];
                if (i) {
                    var a = "string" == typeof n ? n : "screen";
                    if (r && (P = null, L = null), !P || L != a) {
                        var o = m("style");
                        o.setAttribute("type", "text/css"), o.setAttribute("media", a), P = i.appendChild(o), Q.ie && typeof V.styleSheets != j && V.styleSheets.length > 0 && (P = V.styleSheets[V.styleSheets.length - 1]), L = a
                    }
                    P && (typeof P.addRule != j ? P.addRule(e, t) : typeof V.createTextNode != j && P.appendChild(V.createTextNode(e + " {" + t + "}")))
                }
            }

            function k(e, t) {
                if (W) {
                    var n = t ? "visible" : "hidden",
                        r = _(e);
                    z && r ? r.style.visibility = n : "string" == typeof e && w("#" + e, "visibility:" + n)
                }
            }

            function T(e) {
                var t = /[\\\"<>\.;]/,
                    n = null != t.exec(e);
                return n && typeof encodeURIComponent != j ? encodeURIComponent(e) : e
            }
            var S, A, C, O, P, L, j = "undefined",
                M = "object",
                I = "Shockwave Flash",
                N = "ShockwaveFlash.ShockwaveFlash",
                D = "application/x-shockwave-flash",
                R = "SWFObjectExprInst",
                x = "onreadystatechange",
                U = window,
                V = document,
                H = navigator,
                B = !1,
                $ = [],
                F = [],
                q = [],
                G = [],
                z = !1,
                Y = !1,
                W = !0,
                K = !1,
                Q = function() {
                    var e = typeof V.getElementById != j && typeof V.getElementsByTagName != j && typeof V.createElement != j,
                        t = H.userAgent.toLowerCase(),
                        n = H.platform.toLowerCase(),
                        r = n ? /win/.test(n) : /win/.test(t),
                        i = n ? /mac/.test(n) : /mac/.test(t),
                        a = /webkit/.test(t) ? parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
                        o = "Microsoft Internet Explorer" === H.appName,
                        s = [0, 0, 0],
                        u = null;
                    if (typeof H.plugins != j && typeof H.plugins[I] == M) u = H.plugins[I].description, u && typeof H.mimeTypes != j && H.mimeTypes[D] && H.mimeTypes[D].enabledPlugin && (B = !0, o = !1, u = u.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), s[0] = y(u.replace(/^(.*)\..*$/, "$1")), s[1] = y(u.replace(/^.*\.(.*)\s.*$/, "$1")), s[2] = /[a-zA-Z]/.test(u) ? y(u.replace(/^.*[a-zA-Z]+(.*)$/, "$1")) : 0);
                    else if (typeof U.ActiveXObject != j) try {
                        var c = new ActiveXObject(N);
                        c && (u = c.GetVariable("$version"), u && (o = !0, u = u.split(" ")[1].split(","), s = [y(u[0]), y(u[1]), y(u[2])]))
                    } catch (l) {}
                    return {
                        w3: e,
                        pv: s,
                        wk: a,
                        ie: o,
                        win: r,
                        mac: i
                    }
                }();
            (function() {
                Q.w3 && ((typeof V.readyState != j && ("complete" === V.readyState || "interactive" === V.readyState) || typeof V.readyState == j && (V.getElementsByTagName("body")[0] || V.body)) && e(), z || (typeof V.addEventListener != j && V.addEventListener("DOMContentLoaded", e, !1), Q.ie && (V.attachEvent(x, function t() {
                    "complete" == V.readyState && (V.detachEvent(x, t), e())
                }), U == top && ! function n() {
                    if (!z) {
                        try {
                            V.documentElement.doScroll("left")
                        } catch (t) {
                            return void setTimeout(n, 0)
                        }
                        e()
                    }
                }()), Q.wk && ! function r() {
                    return z ? void 0 : /loaded|complete/.test(V.readyState) ? void e() : void setTimeout(r, 0)
                }()))
            })();
            $[0] = function() {
                B ? i() : a()
            };
            (function() {
                Q.ie && window.attachEvent("onunload", function() {
                    for (var e = G.length, t = 0; e > t; t++) G[t][0].detachEvent(G[t][1], G[t][2]);
                    for (var r = q.length, i = 0; r > i; i++) h(q[i]);
                    for (var a in Q) Q[a] = null;
                    Q = null;
                    for (var o in n) n[o] = null;
                    n = null
                })
            })();
            return {
                registerObject: function(e, t, n, r) {
                    if (Q.w3 && e && t) {
                        var i = {};
                        i.id = e, i.swfVersion = t, i.expressInstall = n, i.callbackFn = r, F[F.length] = i, k(e, !1)
                    } else r && r({
                        success: !1,
                        id: e
                    })
                },
                getObjectById: function(e) {
                    return Q.w3 ? o(e) : void 0
                },
                embedSWF: function(e, n, r, i, a, o, c, l, d, p) {
                    var h = g(n),
                        v = {
                            success: !1,
                            id: h
                        };
                    Q.w3 && !(Q.wk && Q.wk < 312) && e && n && r && i && a ? (k(h, !1), t(function() {
                        r += "", i += "";
                        var t = {};
                        if (d && typeof d === M)
                            for (var g in d) t[g] = d[g];
                        t.data = e, t.width = r, t.height = i;
                        var _ = {};
                        if (l && typeof l === M)
                            for (var m in l) _[m] = l[m];
                        if (c && typeof c === M)
                            for (var y in c)
                                if (c.hasOwnProperty(y)) {
                                    var b = K ? encodeURIComponent(y) : y,
                                        w = K ? encodeURIComponent(c[y]) : c[y];
                                    typeof _.flashvars != j ? _.flashvars += "&" + b + "=" + w : _.flashvars = b + "=" + w
                                }
                        if (E(a)) {
                            var T = f(t, _, n);
                            t.id == h && k(h, !0), v.success = !0, v.ref = T, v.id = T.id
                        } else {
                            if (o && s()) return t.data = o, void u(t, _, n, p);
                            k(h, !0)
                        }
                        p && p(v)
                    })) : p && p(v)
                },
                switchOffAutoHideShow: function() {
                    W = !1
                },
                enableUriEncoding: function(e) {
                    K = typeof e === j ? !0 : e
                },
                ua: Q,
                getFlashPlayerVersion: function() {
                    return {
                        major: Q.pv[0],
                        minor: Q.pv[1],
                        release: Q.pv[2]
                    }
                },
                hasFlashPlayerVersion: E,
                createSWF: function(e, t, n) {
                    return Q.w3 ? f(e, t, n) : void 0
                },
                showExpressInstall: function(e, t, n, r) {
                    Q.w3 && s() && u(e, t, n, r)
                },
                removeSWF: function(e) {
                    Q.w3 && h(e)
                },
                createCSS: function(e, t, n, r) {
                    Q.w3 && w(e, t, n, r)
                },
                addDomLoadEvent: t,
                addLoadEvent: r,
                getQueryParamValue: function(e) {
                    var t = V.location.search || V.location.hash;
                    if (t) {
                        if (/\?/.test(t) && (t = t.split("?")[1]), null == e) return T(t);
                        for (var n = t.split("&"), r = 0; r < n.length; r++)
                            if (n[r].substring(0, n[r].indexOf("=")) == e) return T(n[r].substring(n[r].indexOf("=") + 1))
                    }
                    return ""
                },
                expressInstallCallback: function() {
                    if (Y) {
                        var e = _(R);
                        e && S && (e.parentNode.replaceChild(S, e), A && (k(A, !0), Q.ie && (S.style.display = "block")), C && C(O)), Y = !1
                    }
                },
                version: "2.3"
            }
        }();
        e.exports = n
    }, function(e, t) {
        "use strict";

        function n() {
            window.sp_cid = r;
            var e = {
                    detect: {}
                },
                t = void 0,
                n = void 0,
                a = new Promise(function(e, r) {
                    Promise.resolve($.getScript(i)).then(null, r), t = function() {
                        return e(!0)
                    }, n = function() {
                        return e(!1)
                    }, document.addEventListener("sp.blocking", t), document.addEventListener("sp.not_blocking", n)
                });
            return a.then(function(r) {
                e.detect._result = r, document.removeEventListener("sp.blocking", t), document.removeEventListener("sp.not_blocking", n)
            }), window.Twitch.sentinel = e, a
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getSentinel = n;
        var r = "qFEaZsFQnwEdUIs",
            i = "//d2lv4zbk7v5f93.cloudfront.net/esf.js"
    }, function(e, t) {
        "use strict";

        function n(e) {
            for (var t = {}, n = e.split("&"), r = 0; r < n.length; r++) {
                var i = /^(.+?)(?:=(.+))?$/.exec(n[r]);
                if (i) {
                    var a = i[1],
                        o = i[2];
                    "true" === o ? o = !0 : "false" === o ? o = !1 : void 0 !== o ? o = decodeURIComponent(o) : "!" === a[0] ? (a = a.substring(1), o = !1) : o = !0, t[a] = o
                }
            }
            return t
        }

        function r(e) {
            var t = [];
            for (var n in e)
                if (e.hasOwnProperty(n)) {
                    var r = e[n];
                    n = encodeURIComponent(n), r === !0 ? t.push(n) : r === !1 ? t.push("!" + n) : (r = encodeURIComponent(r), t.push(n + "=" + r))
                }
            return t.join("&")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.parse = n, t.toString = r
    }, function(e, t) {
        "use strict";

        function n(e) {
            var t = /^(?:(\d+)[h])?(?:(\d+)[m])?(?:(\d+)[s])?$/,
                n = t.exec(e);
            if (!n) return null;
            for (var r = 0, i = 1; i < n.length; i++) {
                var a = parseInt(n[i], 10) || 0;
                r = 60 * r + a
            }
            return r
        }

        function r(e, t) {
            var n = [e / 3600, e / 60 % 60, e % 60];
            if (t)
                for (; n.length && n[0] < 1;) n.shift();
            for (var r = 0; r < n.length; r++) {
                var i = Math.floor(n[r]);
                n[r] = 10 > i ? "0" + i : i
            }
            return n
        }

        function i(e, t) {
            var n = r(e, t);
            return n.join(":")
        }

        function a(e) {
            var t = r(e, !0),
                n = ["h", "m", "s"],
                i = "";
            t = t.reverse(), n = n.reverse();
            for (var a = 0; a < t.length; a++) i = t[a] + n[a] + i;
            return i
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.parse = n, t.toArray = r, t.toString = i, t.toURLString = a
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e, t, n, r) {
            function i(i) {
                var o = document.createElement("div");
                o.className = "player-video", e.appendChild(o);
                var u = Z[i] || v.BackendBlank,
                    d = (0, V["default"])({
                        lastAdDisplay: m["default"].get("lastAdDisplay") || 0
                    }, r);
                te = new u(t, d, n), te.attach(o), ee = p.BackendChromecast, ee.init(), Q = new h.BackendMulti(ee, te), W.push(R()), n.dispatch((0, O.createAdsManager)(o, te, n, t)), te.addEventListener(F.LOADED_METADATA, s), te.addEventListener(F.DURATION_CHANGE, a), te.addEventListener(K.MIDROLL_REQUESTED, c), te.addEventListener(F.ENDED, f), te.addEventListener(F.PLAYING, l);
                var g = n.getState(),
                    _ = g.playback;
                te.setVolume(_.volume), te.setMuted(_.muted), ae()
            }

            function a() {
                n.dispatch((0, I.updateDuration)(te.getDuration()))
            }

            function s() {
                var e = n.getState().stream.restrictedBitrates;
                if ((0, B["default"])(e, q.getQuality())) {
                    var t = q.getQualities().filter(function(t) {
                        return !(0, B["default"])(e, t)
                    })[0];
                    n.dispatch((0, I.setQuality)(t))
                }
                n.dispatch((0, I.updateDuration)(te.getDuration())), r.autoplay && n.dispatch((0, O.requestAds)(P.PREROLL, O.DEFAULT_AD_DURATION))
            }

            function c(e) {
                n.dispatch((0, O.requestAds)(P.MIDROLL, e.duration))
            }

            function l() {
                n.dispatch((0, I.backendEventEmitted)(F.PLAYING))
            }

            function f() {
                n.dispatch((0, O.requestAds)(P.POSTROLL, O.DEFAULT_AD_DURATION))
            }

            function _() {
                return (0, A.subscribe)(n, ["stream"], function(e) {
                    var t = e.stream;
                    q._updateStream(t)
                })
            }

            function y() {
                return (0, A.subscribe)(n, ["viewercount"], function() {
                    z.emit(K.VIEWERS_CHANGE)
                })
            }

            function E() {
                return (0, A.subscribe)(n, ["playback"], function(e, t) {
                    var r = e.playback,
                        i = t.playback,
                        a = n.getState(),
                        o = a.adsManager,
                        s = o.adShowing ? o : Q;
                    r.quality !== i.quality && q.setQuality(r.quality), r.volume !== i.volume && s.setVolume(r.volume), r.muted !== i.muted && s.setMuted(r.muted)
                })
            }

            function R() {
                return (0, A.subscribe)(n, ["adsManager"], function(e) {
                    var t = e.adsManager;
                    t.addEventListener(J.AD_START, function() {
                        n.dispatch((0, N.pushScreen)(N.ADVERTISEMENT_SCREEN))
                    }), t.addEventListener(J.AD_END, function() {
                        m["default"].set("lastAdDisplay", (new Date).getTime()), n.dispatch((0, N.popScreen)())
                    })
                })
            }

            function U() {
                return (0, A.subscribe)(n, ["manifestInfo", "experiments", "stream"], function() {
                    var e = n.getState(),
                        t = e.manifestInfo,
                        r = e.experiments,
                        i = e.stream;
                    r.get(D.ABS_V2).then(function(e) {
                        i.contentType !== k.CONTENT_MODE_LIVE || "yes" !== e && !t.ABS || H()
                    })
                })
            }

            function H() {
                te.enableABS()
            }

            function $() {
                var e = function n() {
                    Q.removeEventListener(F.PLAYING, n);
                    var e = Date.now(),
                        r = !1,
                        i = function() {
                            r = !1
                        },
                        a = function o() {
                            if (r) {
                                var n = Date.now() - e;
                                t.trackEvent("quality_change_complete", {
                                    time_to_stable_quality: n
                                }), Q.removeEventListener(K.SEGMENT_CHANGE, o), Q.removeEventListener(K.QUALITY_CHANGE, i)
                            } else r = !0
                        };
                    Q.addEventListener(K.SEGMENT_CHANGE, a), Q.addEventListener(K.QUALITY_CHANGE, i)
                };
                Q.addEventListener(F.PLAYING, e)
            }
            var q = this,
                z = new u["default"],
                W = [],
                Q = void 0,
                ee = void 0,
                te = void 0,
                ne = !1,
                re = void 0,
                ie = function() {
                    var e = r.backend || q.getSupportedBackends()[0];
                    "mseDev" === e && "https:" === n.getState().window.location.protocol ? ! function() {
                        var e = (0, A.subscribe)(n, ["stream"], function(t) {
                            var r = t.stream;
                            r.contentType !== S.CONTENT_MODE_NONE && (e(), Promise.all([n.getState().experiments.get(D.HTML5_TOGGLE), n.getState().stream.accessToken]).then(function(e) {
                                var t = o(e, 2),
                                    n = t[0],
                                    r = t[1];
                                try {
                                    var i = JSON.parse(r.token);
                                    "yes" === n && i.https_required || q.setBackend(q.getSupportedBackends()[0])
                                } catch (a) {
                                    console.error("Could not parse NAuthToken: " + r.token)
                                }
                            }))
                        });
                        W.push(e)
                    }() : (0, g.krakenUserInfo)().then(function(e) {
                        "staff" === e.type && !m["default"].get("staff-html5-forced") && d.BackendMseDevelopment.canPlay() && (m["default"].set("staff-html5-forced", !0), q.setBackend("mseDev"))
                    }), i(e)
                },
                ae = function() {
                    Q.addEventListener(J.AD_START, function() {
                        n.dispatch((0, N.pushScreen)(N.ADVERTISEMENT_SCREEN))
                    }), Q.addEventListener(J.AD_END, function() {
                        m["default"].set("lastAdDisplay", (new Date).getTime()), n.dispatch((0, N.popScreen)())
                    }), Q.addEventListener(F.ENDED, function() {
                        null !== Q.getChannel() && (0, g.channelInfo)(Q.getChannel()).then(function(e) {
                            return (0, g.offlinePlaylistInfo)(e._id)
                        }).then(function(e) {
                            e.enabled && Q.load()
                        })
                    });
                    var e = [F.EMPTIED, F.SUSPEND, F.LOADSTART, F.LOADED_METADATA];
                    e.forEach(function(e) {
                        ee.addEventListener(e, function() {
                            z.emit(K.CASTING_CHANGE), r.debug && console.log("chromecast event: ", e)
                        })
                    }), W.push(_()), W.push(y()), W.push(E()), W.push(U()), Q.addEventListener(K.CAPTION_UPDATE, function() {
                        n.dispatch((0, C.setCaptionsData)(Q.getCaption()))
                    }), Q.addEventListener(K.QUALITY_CHANGE, function() {
                        n.dispatch((0, L.incrementQualityChangeCount)())
                    }), Q.addEventListener(K.MANIFEST_EXTRA_INFO, function(e) {
                        n.dispatch((0, j.setManifestInfo)(e))
                    })
                },
                oe = function() {
                    z.emit(K.THEATRE_CHANGE)
                },
                se = function() {
                    z.emit(M.FULLSCREEN_CHANGE)
                },
                ue = function() {
                    z.emit(M.FULLSCREEN_CHANGE)
                };
            q.destroy = function() {
                Q.destroy(), W.forEach(function(e) {
                    return e()
                }), z.removeAllListeners()
            }, q._updateStream = function(e) {
                e.contentType === k.CONTENT_MODE_LIVE ? (Q.setChannel(e.channel, e), $()) : e.contentType === T.CONTENT_MODE_VOD ? (Q.setVideo(e.videoId, e), $(), re = null, (0, g.videoInfo)(e.videoId).then(function(e) {
                    re = e.url
                })) : e.streamUrl.then(function(e) {
                    Q.setSrc(e)
                })
            }, q.addEventListener = function(e, t) {
                (0, B["default"])(b.allEvents, e) || console.error("subscribing to unknown event: ", e), Q.addEventListener(e, t), (0, B["default"])([J.AD_START, J.AD_END, F.VOLUME_CHANGE], e) && n.getState().adsManager.addEventListener(e, t), z.on(e, t)
            }, q.removeEventListener = function(e, t) {
                Q.removeEventListener(e, t), z.off(e, t)
            }, q.getNetworkProfile = function() {
                return te.getNetworkProfile()
            }, q.getError = function() {
                return Q.getError()
            }, q.getSrc = function() {}, q.setSrc = function() {}, q.getCurrentSrc = function() {}, q.getNetworkState = function() {
                return Q.getNetworkState()
            }, q.getPreload = function() {
                return Q.getPreload()
            }, q.setPreload = function(e) {
                return Q.setPreload(e)
            }, q.getBuffered = function() {
                return Q.getBuffered()
            }, q.load = function() {
                Q.load()
            }, q.getReadyState = function() {
                return Q.getReadyState()
            }, q.getSeeking = function() {
                return Q.getSeeking()
            }, q.getCurrentTime = function() {
                return Q.getCurrentTime()
            }, q.setCurrentTime = function(e) {
                Q.setCurrentTime(e)
            }, q.getInitialTime = function() {
                return Q.getInitialTime()
            }, q.getDuration = function() {
                return Q.getDuration()
            }, q.getStartOffsetTime = function() {
                return Q.getStartOffsetTime()
            }, q.getPaused = function() {
                var e = n.getState().adsManager;
                return e.adShowing ? e.paused : Q.getPaused()
            }, q.getDefaultPlaybackRate = function() {
                return Q.getDefaultPlaybackRate()
            }, q.setDefaultPlaybackRate = function(e) {
                Q.setDefaultPlaybackRate(e)
            }, q.getPlaybackRate = function() {
                return Q.getPlaybackRate()
            }, q.setPlaybackRate = function(e) {
                Q.setPlaybackRate(e)
            }, q.getPlayed = function() {
                return Q.getPlayed()
            }, q.getSeekable = function() {
                return Q.getSeekable()
            }, q.getEnded = function() {
                return Q.getEnded()
            }, q.getAutoplay = function() {
                return r.autoplay
            }, q.getLoop = function() {
                return Q.getLoop()
            }, q.setLoop = function(e) {
                Q.setLoop(e)
            }, q.play = function() {
                n.getState().playback.hasPlayed || n.dispatch((0, O.requestAds)(P.PREROLL, O.DEFAULT_AD_DURATION)), Q.getNetworkState === Q.NETWORK_EMPTY ? Q.load() : n.getState().adsManager.adShowing ? n.dispatch((0, O.playAd)()) : Q.play()
            }, q.pause = function() {
                n.getState().adsManager.adShowing ? n.dispatch((0, O.pauseAd)()) : Q.pause()
            }, q.getControls = function() {
                return !0
            }, q.setControls = function() {}, q.getVolume = function() {
                return n.getState().playback.volume
            }, q.setVolume = function(e) {
                n.dispatch((0, I.setVolume)(e)), m["default"].set("volume", n.getState().playback.volume)
            }, q.getMuted = function() {
                return n.getState().playback.muted
            }, q.setMuted = function(e, t) {
                n.dispatch((0, I.setMuted)(e)), t || m["default"].set("muted", e)
            }, q.getTheatre = function() {
                return ne
            }, q.setTheatre = function(e) {
                oe(), ne = e
            }, q.getDefaultMuted = function() {
                return Q.getDefaultMuted()
            }, q.setDefaultMuted = function(e) {
                Q.setDefaultMuted(e)
            }, q.getQuality = function() {
                return n.getState().playback.quality
            }, q.setQuality = function(e) {
                Q.setQuality(e), m["default"].set("quality", e)
            }, q.getQualities = function() {
                return Q.getQualities()
            }, q.getChannel = function() {
                return Q.getChannel()
            }, q.getVideo = function() {
                return Q.getVideo()
            }, q.getVideoURL = function() {
                return re
            }, q.getStats = function() {
                return Q.getStats()
            }, q.getStatsEnabled = function() {
                return Q.getStatsEnabled()
            }, q.setStatsEnabled = function(e) {
                Q.setStatsEnabled(e)
            }, q.startCast = function() {
                ee.load()
            }, q.stopCast = function() {
                ee.stop()
            }, q.getCasting = function() {
                var e = ee.getReadyState(),
                    t = ee.getNetworkState();
                return e === Y.HAVE_NOTHING ? t === G.NETWORK_EMPTY ? "unavailable" : t === G.NETWORK_IDLE ? "available" : "connecting" : "connected"
            }, q.getCastDevice = function() {
                return ee.getDevice()
            }, q.getFullscreen = function() {
                return w["default"].element === e
            }, q.setFullscreen = function(t) {
                var n = q.getFullscreen();
                n !== t && w["default"].toggle(e, se, ue)
            }, q.getFullscreenEnabled = function() {
                return w["default"].enabled
            }, q.getVideoInfo = function() {
                return Q.getVideoInfo()
            }, q.getBackend = function() {
                return Q.getBackend()
            }, q.setBackend = function(e) {
                m["default"].set("backend", e), window.document.location.reload()
            }, q.getSupportedBackends = function() {
                return X.filter(function(e) {
                    var t = Z[e];
                    return t.canPlay()
                })
            }, q.getVersion = function() {
                return te.getVersion()
            }, q.isSpectre = function() {
                return Q.isSpectre()
            }, q.getViewerCount = function() {
                return n.getState().viewercount
            }, q.getCaption = function() {
                return Q.getCaption()
            }, q.getEventEmitter = function() {
                return z
            };
            var ce = function(e, t) {
                try {
                    t = (0, x["default"])(t, {
                        enumerable: !0
                    }), Object.defineProperty(q, e, t)
                } catch (n) {}
            };
            ce("error", {
                get: q.getError
            }), ce("src", {
                get: q.getSrc,
                set: q.setSrc
            }), ce("currentSrc", {
                get: q.getCurrentSrc
            }), ce("networkState", {
                get: q.getNetworkState
            }), ce("preload", {
                get: q.getPreload,
                set: q.setPreload
            }), ce("buffered", {
                get: q.getBuffered
            }), ce("readyState", {
                get: q.getReadyState
            }), ce("seeking", {
                get: q.getSeeking
            }), ce("currentTime", {
                get: q.getCurrentTime,
                set: q.setCurrentTime
            }), ce("initialTime", {
                get: q.getInitialTime
            }), ce("duration", {
                get: q.getDuration
            }), ce("startOffsetTime", {
                get: q.getStartOffsetTime
            }), ce("paused", {
                get: q.getPaused
            }), ce("defaultPlaybackRate", {
                get: q.getDefaultPlaybackRate,
                set: q.setDefaultPlaybackRate
            }), ce("playbackRate", {
                get: q.getPlaybackRate,
                set: q.setPlaybackRate
            }), ce("played", {
                get: q.getPlayed
            }), ce("seekable", {
                get: q.getSeekable
            }), ce("ended", {
                get: q.getEnded
            }), ce("autoplay", {
                get: q.getAutoplay
            }), ce("loop", {
                get: q.getLoop,
                set: q.setLoop
            }), ce("controls", {
                get: q.getControls,
                set: q.setControls
            }), ce("volume", {
                get: q.getVolume,
                set: q.setVolume
            }), ce("muted", {
                get: q.getMuted,
                set: q.setMuted
            }), ce("defaultMuted", {
                get: q.getDefaultMuted,
                set: q.setDefaultMuted
            }), ce("quality", {
                get: q.getQuality,
                set: q.setQuality
            }), ce("qualities", {
                get: q.getQualities
            }), ce("channel", {
                get: q.getChannel,
                set: q.setChannel
            }), ce("video", {
                get: q.getVideo,
                set: q.setVideo
            }), ce("stats", {
                get: q.getStats
            }), ce("statsEnabled", {
                get: q.getStatsEnabled,
                set: q.setStatsEnabled
            }), ce("casting", {
                get: q.getCasting
            }), ce("castDevice", {
                get: q.getCastDevice
            }), ce("fullscreen", {
                get: q.getFullscreen,
                set: q.setFullscreen
            }), ce("fullscreenEnabled", {
                get: q.getFullscreenEnabled
            }), ce("theatre", {
                get: q.getTheatre,
                set: q.setTheatre
            }), ce("viewers", {
                get: q.getViewerCount
            }), ie()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
            function e(e, t) {
                var n = [],
                    r = !0,
                    i = !1,
                    a = void 0;
                try {
                    for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                } catch (u) {
                    i = !0, a = u
                } finally {
                    try {
                        !r && s["return"] && s["return"]()
                    } finally {
                        if (i) throw a
                    }
                }
                return n
            }
            return function(t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }();
        t.Video = a;
        var s = n(54),
            u = i(s),
            c = n(214),
            l = n(218),
            d = n(223),
            f = n(281),
            p = n(171),
            h = n(282),
            v = n(284),
            g = n(157),
            _ = n(175),
            m = i(_),
            y = n(88),
            b = r(y),
            E = n(100),
            w = i(E),
            k = n(57),
            T = n(194),
            S = n(285),
            A = n(190),
            C = n(286),
            O = n(291),
            P = n(293),
            L = n(201),
            j = n(298),
            M = n(99),
            I = n(299),
            N = n(300),
            D = n(161),
            R = n(1),
            x = i(R),
            U = n(50),
            V = i(U),
            H = n(35),
            B = i(H),
            $ = n(98),
            F = r($),
            q = n(173),
            G = r(q),
            z = n(174),
            Y = r(z),
            W = n(97),
            K = r(W),
            Q = n(96),
            J = r(Q),
            X = ["flash", "hls", "mse", "mseDev"],
            Z = {
                flash: c.BackendFlash,
                hls: f.BackendHls,
                mseDev: d.BackendMseDevelopment,
                mse: l.BackendMse
            }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e, t, r) {
            var i = this,
                s = (r.getState().experiments.get(O.FLASH_PLAYER_OPTIMIZATION), a.counter++);
            a.map[s] = i;
            var c = new l["default"],
                h = new l["default"],
                g = new d.Deferred,
                m = new f.ExtrapolatingTimer,
                b = [],
                w = !1,
                T = !1,
                A = null,
                j = 0,
                M = 0,
                I = null,
                N = null,
                D = void 0,
                R = void 0,
                x = !1,
                U = void 0,
                V = 0,
                H = void 0,
                B = void 0,
                $ = void 0,
                F = void 0,
                q = void 0,
                G = {
                    bufferSize: 0,
                    displayResolution: "",
                    skippedFrames: 0,
                    fps: 0,
                    hlsLatencyBroadcast: 0,
                    hlsLatencyEncoder: 0,
                    memoryUsage: 0,
                    playbackRate: 0,
                    playerVolume: 0,
                    videoResolution: ""
                },
                z = void 0,
                Y = void 0,
                W = void 0,
                K = "",
                Q = void 0,
                J = !1,
                X = !0,
                Z = !1,
                ee = !1,
                te = !1,
                ne = function() {
                    c.on(y.CAN_PLAY, le), c.on(y.DURATION_CHANGE, oe), c.on(y.SEEKING, me), c.on(y.SEEKED, ye), c.on(y.ENDED, ve), c.on(y.ERROR, he), c.on(y.PLAYING, de), c.on(y.WAITING, ke), c.on(y.VOLUME_CHANGE, ae), c.on(y.LOADSTART, ce), c.on(E.PLAYER_INIT, re), c.on(E.SEEK_FAILED, be), c.on(E.PLAYBACK_STATISTICS, Te), c.on(E.SPECTRE_PLAYLIST, Re), c.on(E.CHANSUB_REQUIRED, Ie), c.on(E.VIDEO_FAILURE, pe), c.on(E.FORMATS, se), c.on(E.FORMAT_CHANGED, ue), c.on(E.TIME_CHANGE, Ee), c.on(E.BUFFER_CHANGE, we), c.on(E.SEGMENT_CHANGE, De), c.on(E.USHER_FAIL_ERROR, Ne), c.on(E.CAPTION_UPDATE, ie), c.on(E.MIDROLL_REQUESTED, xe), c.on(E.VIDEO_PAUSED, fe), c.on(E.STREAM_LOADED, ge), c.on(E.VIDEO_LOADED, _e), c.on(k.AD_DISPLAY_STARTED, Se), c.on(k.AD_DISPLAY_ENDED, Ae), c.on(k.COMPANION_RENDERED, Me), c.on(k.AD_REQUEST, Ce), c.on(k.AD_REQUEST_DECLINED, Oe), c.on(k.AD_REQUEST_RESPONSE, Pe), c.on(k.AD_REQUEST_ERROR, Le), c.on(k.AD_ERROR, je)
                },
                re = function() {
                    T = !0, g.resolve(), h.emit(E.PLAYER_INIT)
                },
                ie = function(e) {
                    q = e, h.emit(E.CAPTION_UPDATE)
                },
                ae = function(e) {
                    (0, u["default"])(e.volume) && (H = Math.min(Math.max(e.volume, 0), 1), h.emit(y.VOLUME_CHANGE))
                },
                oe = function(e) {
                    V = e.duration || 0, h.emit(y.DURATION_CHANGE)
                },
                se = function(e) {
                    F = e.formats, h.emit(E.QUALITIES_CHANGE)
                },
                ue = function(e) {
                    $ = e.format, h.emit(E.QUALITY_CHANGE, e.format)
                },
                ce = function(e) {
                    e && e.format && $ !== e.format && ($ = e.format, h.emit(E.QUALITY_CHANGE)), M = S.NETWORK_LOADING, h.emit(y.LOADSTART), V = 0, h.emit(y.DURATION_CHANGE), Ve(qe("getVideoTime")), Be()
                },
                le = function() {
                    h.emit(y.CAN_PLAY)
                },
                de = function(e) {
                    x && (x = !1, h.emit(y.PLAY)), J = !1, $ = e.format, Ve(qe("getVideoTime")), He(), j < C.HAVE_METADATA && (null !== i.getChannel() && (V = 1 / 0), j = C.HAVE_METADATA, h.emit(y.LOADED_METADATA)), j < C.HAVE_CURRENT_DATA && (j = C.HAVE_CURRENT_DATA, h.emit(y.LOADED_DATA)), j = C.HAVE_FUTURE_DATA, h.emit(y.PLAYING)
                },
                fe = function() {
                    x = !0, h.emit(y.PAUSE), Q instanceof P.LiveContentStream && (j = C.HAVE_NOTHING), Be()
                },
                pe = function() {
                    h.emit(E.OFFLINE), J || j !== C.HAVE_NOTHING || (J = !0, h.emit(y.ENDED)), te = !1, J = !0, j = C.HAVE_NOTHING, Be()
                },
                he = function(e) {
                    W = D ? _.channelError : R ? _.videoError : _.unknownError, h.emit(y.ERROR, e)
                },
                ve = function() {
                    J = !0, te = !1, j = C.HAVE_NOTHING, h.emit(y.ENDED), Be()
                },
                ge = function(e) {
                    Be(), Ve(0), I = e.channel, N = null, h.emit(E.LOADED_CHANNEL), w && Fe("stopPlaybackStatistics"), w = !0, Fe("startPlaybackStatistics")
                },
                _e = function(e) {
                    Be(), Ve(0);
                    var t = e.videoId;
                    isNaN(t[0]) || (t = "v" + t), N = t, I = null, h.emit(E.LOADED_VIDEO), j = C.HAVE_METADATA, h.emit(y.LOADED_METADATA), w && Fe("stopPlaybackStatistics"), w = !0, Fe("startPlaybackStatistics")
                },
                me = function() {
                    Be(), U = !0, h.emit(y.SEEKING)
                },
                ye = function() {
                    U = !1, h.emit(y.SEEKED)
                },
                be = function() {
                    U = !1
                },
                Ee = function() {
                    Ve(qe("getVideoTime"))
                },
                we = function(e) {
                    z = e, h.emit(E.BUFFER_CHANGE)
                },
                ke = function() {
                    Be(), j = C.HAVE_CURRENT_DATA, h.emit(y.WAITING)
                },
                Te = function(e) {
                    G = e, h.emit(E.STATS_CHANGE)
                },
                Se = function(t) {
                    X = !1, x = !1, N && Be(), h.emit(k.AD_START), e.trackEvent("video_ad_impression", t)
                },
                Ae = function(t) {
                    X = !0, N && !J && (Ve(qe("getVideoTime")), He()), h.emit(k.AD_END), e.trackEvent("video_ad_impression_complete", t)
                },
                Ce = function(t) {
                    e.trackEvent("video_ad_request", t)
                },
                Oe = function(t) {
                    e.trackEvent("video_ad_request_declined", t)
                },
                Pe = function(t) {
                    e.trackEvent("video_ad_request_response", t)
                },
                Le = function(t) {
                    e.trackEvent("video_ad_error", t)
                },
                je = function(t) {
                    e.trackEvent("video_ad_error", t)
                },
                Me = function(e) {
                    h.emit("adcompanionrendered", e)
                },
                Ie = function() {
                    h.emit(E.RESTRICTED)
                },
                Ne = function() {
                    h.emit(E.USHER_FAIL_ERROR)
                },
                De = function(e) {
                    h.emit(E.SEGMENT_CHANGE, e)
                },
                Re = function(e) {
                    te = e.is_spectre, h.emit(E.IS_SPECTRE, e.is_spectre)
                },
                xe = function(e) {
                    h.emit(E.MIDROLL_REQUESTED, e)
                },
                Ue = function() {
                    h.emit(y.TIME_UPDATE, m.extrapolateTimeStamp())
                },
                Ve = function(e) {
                    m.setCurrentTimeStamp(e), h.emit(y.TIME_UPDATE, m.extrapolateTimeStamp())
                },
                He = function() {
                    null === A && (A = setInterval(Ue, L), m.resume())
                },
                Be = function() {
                    null !== A && (clearInterval(A), A = null, m.pause())
                };
            i.attach = function(e) {
                var i = n(217),
                    a = "10.2",
                    o = "playerProductInstall.swf",
                    u = "100%",
                    c = "100%",
                    l = {};
                l.eventsCallback = "window._BackendFlash_emitEvents", l.eventsContext = s, l.initCallback = null;
                var d = {};
                d.bgcolor = "#000", d.allowscriptaccess = "always", d.allowfullscreen = "true", "ppapi" === v.getFlashPlayerType() ? d.wmode = "direct" : d.wmode = "transparent";
                var f = {};
                f.align = "middle";
                var p = document.createElement("div");
                e.appendChild(p), K = "swfobject-" + s, p.setAttribute("id", K), v.embedSWF(i, K, u, c, a, o, l, d, f, function(e) {
                    Y = e.ref
                }), Fe("setLastAdDisplay", [t.lastAdDisplay]), Fe("setPlayerType", [t.player]), r.getState().experiments.get(O.USE_JS_ADS_IN_FLASH).then(function(e) {
                    var t = "yes" !== e;
                    Fe("setFlashIMAAdsEnabled", [t])
                })
            };
            var $e = function(e) {
                    var n = arguments.length <= 1 || void 0 === arguments[1] ? [] : arguments[1];
                    switch (t.debug && console.log("flash call:", e, n), n.length) {
                        case 0:
                            return Y[e]();
                        case 1:
                            return Y[e](n[0]);
                        case 2:
                            return Y[e](n[0], n[1]);
                        case 3:
                            return Y[e](n[0], n[1], n[2]);
                        default:
                            return console.log("WARNING, too many arguments passed to Flash"), Y[e].apply(this, n)
                    }
                },
                Fe = function(e, n) {
                    g.promise.then(function() {
                        setTimeout(function() {
                            var r = $e(e, n);
                            r && t.debug && console.log("flash return:", e, "=", r)
                        }, 0)
                    })
                },
                qe = function(e, n) {
                    if (T) {
                        var r = $e(e, n);
                        return r && t.debug && console.log("flash return:", e, "=", r), r
                    }
                };
            i._emitEvent = function(e, n) {
                setTimeout(function() {
                    t.debug && "timeupdate" !== e && "playbackStatistics" !== e && console.log("flash event:", e, n), c.emit(e, n)
                }, 0)
            }, i.addEventListener = function(e, t) {
                h.on(e, t)
            }, i.removeEventListener = function(e, t) {
                h.off(e, t)
            }, i.getNetworkProfile = function() {
                return qe("getNetworkProfile") || []
            }, i.getError = function() {
                return W
            }, i.getNetworkState = function() {
                return M
            }, i.getBuffered = function() {
                var e = z ? 1 : 0;
                return {
                    length: e,
                    start: function(t) {
                        return t >= e ? void 0 : z.start
                    },
                    end: function(t) {
                        return t >= e ? void 0 : z.end
                    }
                }
            }, i.load = function() {
                return D || R ? (j = C.HAVE_NOTHING, M = S.NETWORK_LOADING, h.emit(y.LOADSTART), R ? Promise.all([(0, p.videoInfo)(R), Q.streamUrl]).then(function(e) {
                    var t = o(e, 2),
                        n = t[0],
                        r = t[1];
                    ee = !0, Fe("loadStream", [r, n.channel.name, !1])
                }) : Q.streamUrl.then(function(e) {
                    ee = !0, Fe("loadStream", [e, D, !0])
                })) : void 0
            }, i.getReadyState = function() {
                return j
            }, i.getSeeking = function() {
                return U
            }, i.getCurrentTime = function() {
                return m.extrapolateTimeStamp()
            }, i.setCurrentTime = function(e) {
                J = !1, Be(), Ve(e), Fe("videoSeek", [e])
            }, i.getDuration = function() {
                return V
            }, i.getPaused = function() {
                return x
            }, i.getEnded = function() {
                return X ? J : X
            }, i.play = function() {
                J && X && N && i.setCurrentTime(0), x = !1, h.emit(y.PLAY);
                var e = function() {
                    Q.streamUrl.then(function(e) {
                        Fe("setStreamURI", [e]), Fe("playVideo")
                    })
                };
                ee ? e() : i.load().then(e())
            }, i.pause = function() {
                Fe("pauseVideo")
            }, i.getVolume = function() {
                return H
            }, i.setVolume = function(e) {
                e > 0 && (B = e), Fe("setVolume", [e])
            }, i.getMuted = function() {
                var e = i.getVolume();
                return 0 === e
            }, i.setMuted = function(e) {
                var t = e ? 0 : B || .5;
                i.setVolume(t)
            }, i.getVideoInfo = function() {
                return qe("getVideoInfo") || {}
            }, i.getChannel = function() {
                return D || I
            }, i.setChannel = function(e, n) {
                Q = n, D = e, R = null, t.autoplay || M > S.NETWORK_EMPTY ? i.load() : i.pause()
            }, i.getVideo = function() {
                return R || N
            }, i.setVideo = function(e, n) {
                Q = n, R = e, D = null, t.autoplay || M > S.NETWORK_EMPTY ? i.load() : i.pause()
            }, i.getQuality = function() {
                return $ || ""
            }, i.setQuality = function(e) {
                $ = e, Fe("setQuality", [e])
            }, i.getQualities = function() {
                return F || []
            }, i.getStatsEnabled = function() {
                return Z
            }, i.setStatsEnabled = function(e) {
                Z = e, Fe(Z ? "startPlaybackStatistics" : "stopPlaybackStatistics")
            }, i.getStats = function() {
                return G
            }, i.getBackend = function() {
                return "flash"
            }, i.getVersion = function() {
                return qe("getVersion")
            }, i.isSpectre = function() {
                return te
            }, i.getMediaGroup = function() {
                return null
            }, i.getController = function() {
                return null
            }, i.getControls = function() {
                return !1
            }, i.getLoop = function() {
                return !1
            }, i.getDefaultMuted = function() {
                return !1
            }, i.getAudioTracks = function() {
                return null
            }, i.getVideoTracks = function() {
                return null
            }, i.getTextTracks = function() {
                return null
            }, i.getDefaultPlaybackRate = function() {
                return 1
            }, i.getPlaybackRate = function() {
                return 1
            }, i.getInitialTime = function() {
                return 0
            }, i.getPreload = function() {
                return "none"
            }, i.addTextTrack = function() {}, i.setDefaultMuted = function() {}, i.setControls = function() {}, i.setLoop = function() {}, i.setPlaybackRate = function() {}, i.getPlayed = function() {}, i.getSeekable = function() {}, i.setDefaultPlaybackRate = function() {}, i.getStartOffsetTime = function() {}, i.setPreload = function() {}, i.getSrc = function() {}, i.setSrc = function() {}, i.getCurrentSrc = function() {}, i.getCaption = function() {
                return q
            }, i.enableABS = function() {
                Fe("setABSV2Enabled", [!0])
            }, i.destroy = function() {
                Be(), v.removeSWF(K), Y = null, b.forEach(function(e) {
                    return e()
                })
            }, ne()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
            function e(e, t) {
                var n = [],
                    r = !0,
                    i = !1,
                    a = void 0;
                try {
                    for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                } catch (u) {
                    i = !0, a = u
                } finally {
                    try {
                        !r && s["return"] && s["return"]()
                    } finally {
                        if (i) throw a
                    }
                }
                return n
            }
            return function(t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }();
        t.BackendFlash = a;
        var s = n(215),
            u = i(s),
            c = n(54),
            l = i(c),
            d = n(172),
            f = n(216),
            p = n(157),
            h = n(208),
            v = r(h),
            g = n(88),
            _ = r(g),
            m = n(98),
            y = r(m),
            b = n(97),
            E = r(b),
            w = n(96),
            k = r(w),
            T = n(173),
            S = r(T),
            A = n(174),
            C = r(A),
            O = n(161),
            P = n(57),
            L = 250;
        a.map = {}, a.counter = 0, a.canPlay = function() {
            return v.hasFlashPlayerVersion("10.2")
        }, window._BackendFlash_emitEvents = function(e, t) {
            for (var n = a.map[e], r = 0; r < t.length; r++) {
                var i = t[r];
                n._emitEvent(i.event, i.data)
            }
        }
    }, function(e, t, n) {
        function r(e) {
            return "number" == typeof e && a(e)
        }
        var i = n(23),
            a = i.isFinite;
        e.exports = r
    }, function(e, t) {
        "use strict";

        function n() {
            this._lastKnownTimeStamp = 0, this._paused = !0, this._lastTimeUpdated = (new Date).getTime()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ExtrapolatingTimer = n, n.prototype.pause = function() {
            this._updateLastKnownTimeStamp(), this._paused = !0
        }, n.prototype.resume = function() {
            this._updateLastKnownTimeStamp(), this._paused = !1
        }, n.prototype.extrapolateTimeStamp = function() {
            if (this._paused) return this._lastKnownTimeStamp / 1e3;
            var e = (new Date).getTime();
            return (this._lastKnownTimeStamp + (e - this._lastTimeUpdated)) / 1e3
        }, n.prototype.setCurrentTimeStamp = function(e) {
            isNaN(e) || (this._lastKnownTimeStamp = 1e3 * e, this._lastTimeUpdated = (new Date).getTime())
        }, n.prototype._updateLastKnownTimeStamp = function() {
            var e = (new Date).getTime();
            this._lastKnownTimeStamp += e - this._lastTimeUpdated, this._lastTimeUpdated = e
        }
    }, function(e, t, n) {
        e.exports = n.p + "vendor/TwitchPlayer.a19cb956e0d25492fe1022c8ca3e1ac3.swf"
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e, t) {
            var n = this,
                r = void 0,
                i = void 0,
                a = void 0,
                o = void 0,
                c = void 0,
                d = void 0,
                f = function() {
                    r = new s["default"], i = document.createElement("video"), i.autoplay = t.autoplay, a = new u.AdapterMse(i), r.emit(l.PLAYER_INIT)
                };
            n.attach = function(e) {
                e.appendChild(i)
            }, n.detach = function(e) {
                e.removeChild(i)
            }, n.destroy = function() {
                a.destroy()
            }, n.addEventListener = function(e, t) {
                r.on(e, t), i.addEventListener(e, t)
            }, n.removeEventListener = function(e, t) {
                r.off(e, t), i.removeEventListener(e, t)
            }, n.getNetworkProfile = function() {
                return []
            }, n.getError = function() {
                return i.error
            }, n.getSrc = function() {
                return o
            }, n.setSrc = function(e) {
                o = e, o && n.load()
            }, n.getCurrentSrc = function() {
                return o
            }, n.getNetworkState = function() {
                return i.networkState
            }, n.getBuffered = function() {
                return i.buffered
            }, n.load = function() {
                a.load(o)
            }, n.getReadyState = function() {
                return i.readyState
            }, n.getSeeking = function() {
                return i.seeking
            }, n.getCurrentTime = function() {
                return i.currentTime
            }, n.setCurrentTime = function(e) {
                i.currentTime = e
            }, n.getDuration = function() {
                return i.duration
            }, n.getPaused = function() {
                return i.paused
            }, n.getEnded = function() {
                return i.ended
            }, n.getAutoplay = function() {
                return i.autoplay
            }, n.setAutoplay = function(e) {
                i.autoplay = e
            }, n.play = function() {
                i.play()
            }, n.pause = function() {
                i.pause()
            }, n.getPaused = function() {
                return i.paused
            }, n.setCurrentTime = function(e) {
                i.currentTime = e
            }, n.getVolume = function() {
                return i.volume
            }, n.setVolume = function(e) {
                i.volume = e
            }, n.getMuted = function() {
                return i.muted
            }, n.setMuted = function(e) {
                i.muted = e
            }, n.getDefaultMuted = function() {
                return i.defaultMuted
            }, n.setDefaultMuted = function(e) {
                i.defaultMuted = e
            }, n.getQuality = function() {
                return a.getQuality()
            }, n.setQuality = function(e) {
                return a.setQuality(e)
            }, n.getQualities = function() {
                return a.getQualities()
            }, n.getChannel = function() {
                return c
            }, n.setChannel = function(e, t) {
                c = e, d = null, t.streamUrl.then(function(e) {
                    n.setSrc(e), r.emit(l.LOADED_CHANNEL)
                })
            }, n.getVideo = function() {
                return d
            }, n.setVideo = function(e, t) {
                d = e, c = null, t.streamUrl.then(function(e) {
                    n.setSrc(e), r.emit(l.LOADED_VIDEO)
                })
            }, n.getStats = function() {
                return {
                    bufferSize: 0,
                    displayResolution: "",
                    skippedFrames: 0,
                    fps: 0,
                    hlsLatencyBroadcast: 0,
                    hlsLatencyEncoder: 0,
                    memoryUsage: 0,
                    playbackRate: 0,
                    playerVolume: 0,
                    videoResolution: ""
                }
            }, n.getStatsEnabled = function() {}, n.setStatsEnabled = function() {}, n.getCaption = function() {}, n.getVideoInfo = function() {
                return {}
            }, n.getBackend = function() {
                return "mse"
            }, n.getVersion = function() {}, n.isSpectre = function() {
                return !1
            }, n.getInitialTime = function() {
                return i.initialTime
            }, n.getSeekable = function() {
                return i.seekable
            }, n.getControls = function() {
                return !1
            }, n.setControls = function() {}, n.getLoop = function() {
                return i.loop
            }, n.setLoop = function() {}, n.getDefaultPlaybackRate = function() {
                return i.defaultPlaybackRate
            }, n.setDefaultPlaybackRate = function() {}, n.getPlaybackRate = function() {
                return i.playbackRate
            }, n.setPlaybackRate = function() {}, n.getPlayed = function() {
                return i.played
            }, n.getPreload = function() {
                return "auto"
            }, n.setPreload = function() {}, n.getStartOffsetTime = function() {
                return i.startOffsetTime
            }, n.enableABS = function() {}, f()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.BackendMse = a;
        var o = n(54),
            s = i(o),
            u = n(219),
            c = n(97),
            l = r(c);
        a.canPlay = function() {
            return u.AdapterMse.canPlay()
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e) {
            var t = this,
                n = void 0,
                r = void 0,
                i = void 0,
                o = {},
                s = function() {
                    r = a.loadScript().then(u)
                },
                u = function() {
                    return n = new Hls, n.onWrite(f), n.onComplete(p), i = new MediaSource, e.addEventListener(c.PROGRESS, _), e.src = window.URL.createObjectURL(i), n
                },
                l = function() {
                    for (var e in o) {
                        var t = o[e];
                        i.removeSourceBuffer(t.buffer)
                    }
                    o = {}
                },
                d = function() {
                    i = new MediaSource, e.src = window.URL.createObjectURL(i), o = {}
                },
                f = function(e, t) {
                    var n = o[e];
                    n || (n = {}, n.queue = [], n.buffer = i.addSourceBuffer(e), n.buffer.mode = "segments", n.buffer.addEventListener("updateend", function() {
                        h(n)
                    }), o[e] = n);
                    var r = v(n, t);
                    if (!r) {
                        var a = new Uint8Array(t);
                        n.queue.push(a)
                    }
                },
                p = function() {
                    d()
                },
                h = function(e) {
                    if (!e.queue.length) return void g(e);
                    var t = e.queue.shift();
                    v(e, t) || e.queue.unshift(t)
                },
                v = function(e, t) {
                    return "ended" === i.readyState ? !0 : "closed" === i.readyStart ? !1 : e.queue.length ? !1 : e.buffer.updating ? !1 : (e.buffer.appendBuffer(t), !0)
                },
                g = function(t) {
                    if (t.buffer || !t.buffer.updating) {
                        var n = e.currentTime - 10;
                        e.buffered.length > 0 && e.buffered.start(0) < n && t.buffer.remove(0, n)
                    }
                },
                _ = function() {
                    if (0 !== e.buffered.length)
                        for (var t = e.currentTime, n = e.buffered, r = 0; r < n.length; r++) {
                            var i = n.start(r);
                            if (i > t) {
                                console.warn("seeking ahead " + (i - t) + " seconds"), e.currentTime = i;
                                break
                            }
                            var a = n.end(r);
                            if (a >= t) break
                        }
                },
                m = null,
                y = function b() {
                    var e = n.perform();
                    0 > e && (e = 1e3), e >= 0 && (clearTimeout(m), m = setTimeout(b, e))
                };
            t.destroy = function() {
                clearTimeout(m), m = null, l(), i.endOfStream(), i = null, o = {}, n.free(), n = null
            }, t.load = function(e) {
                r.then(function() {
                    n.load(e), y()
                })
            }, t.getQuality = function() {
                return n ? n.getQuality() : void 0
            }, t.setQuality = function(e) {
                r.then(function() {
                    n.setQuality(e)
                })
            }, t.getQualities = function() {
                return n ? n.getQualities() : void 0
            }, s()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.AdapterMse = a;
        var o = n(158),
            s = i(o),
            u = n(98),
            c = r(u);
        a.loadScript = (0, s["default"])(function() {
            return new Promise(function(e) {
                n.e(1, function() {
                    e(n(220))
                })
            })
        }), a.canPlay = function() {
            var e = 'video/mp4; codecs="avc1.42E01E,mp4a.40.2"';
            return window.MediaSource && MediaSource.isTypeSupported(e)
        }
    }, , , , function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.BackendMseDevelopment = void 0;
        var a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            o = n(54),
            s = r(o),
            u = n(97),
            c = n(193),
            l = n(57),
            d = n(224),
            f = r(d),
            p = t.BackendMseDevelopment = function() {
                function e(t) {
                    var n = this,
                        r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                        a = arguments[2];
                    i(this, e), this.events = new s["default"], this.stateStore = a, this.video = document.createElement("video"), this.video.autoplay = r.autoplay, this.loadPlayerCore().then(function(e) {
                        n._initPlayerCore(e)
                    })
                }
                return a(e, [{
                    key: "_initPlayerCore",
                    value: function(e) {
                        this.events.emit(u.PLAYER_INIT), this.core = new e, this.core.attachMedia(this.video), this.core.addEventListener(e.Event.HLS_MASTER_PARSED, this.onHLSMasterParsed.bind(this)), this.core.addEventListener(e.Event.HLS_VARIANT_PARSED, this.onHLSVariantParsed.bind(this)), this.core.addEventListener(e.Event.VARIANT_SWITCH_REQUESTED, this.onVariantSwitchRequested.bind(this)), this.core.addEventListener(e.Event.SEGMENT_CHANGED, this.onSegmentChanged.bind(this)), this.core.addEventListener(e.Event.CAPTION, this.onCaption.bind(this)), this.core.addEventListener(e.Event.ERROR, this.onError.bind(this)), this.pendingQuality && this.setQuality(this.pendingQuality), this.video.autoplay && this.load()
                    }
                }, {
                    key: "onHLSMasterParsed",
                    value: function(e) {
                        this.events.emit(u.IS_SPECTRE, this.isSpectre()), this.stateStore.dispatch((0, c.setBroadcastID)(parseInt(e["BROADCAST-ID"])))
                    }
                }, {
                    key: "onHLSVariantParsed",
                    value: function() {}
                }, {
                    key: "onVariantSwitchRequested",
                    value: function() {}
                }, {
                    key: "onSegmentChanged",
                    value: function(e) {
                        var t = (0, f["default"])(e.ID3, function(e) {
                            return "TOFN" === e.id
                        });
                        if (t) {
                            var n = {
                                name: t.info[0]
                            };
                            this.events.emit(u.SEGMENT_CHANGE, n)
                        }
                    }
                }, {
                    key: "onCaption",
                    value: function() {}
                }, {
                    key: "onError",
                    value: function() {}
                }, {
                    key: "addEventListener",
                    value: function(e, t) {
                        this.events.on(e, t), this.video.addEventListener(e, t)
                    }
                }, {
                    key: "removeEventListener",
                    value: function(e, t) {
                        this.events.off(e, t), this.video.removeEventListener(e, t)
                    }
                }, {
                    key: "attach",
                    value: function(e) {
                        e.appendChild(this.video)
                    }
                }, {
                    key: "detach",
                    value: function(e) {
                        e.removeChild(this.video)
                    }
                }, {
                    key: "isSpectre",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "load",
                    value: function() {
                        this.core && this.src && this.core.loadURL(this.src)
                    }
                }, {
                    key: "getSrc",
                    value: function() {
                        return this.src
                    }
                }, {
                    key: "setSrc",
                    value: function(e) {
                        this.src = e, this.src && this.load()
                    }
                }, {
                    key: "getCurrentSrc",
                    value: function() {
                        return this.src
                    }
                }, {
                    key: "getVolume",
                    value: function() {
                        return this.video.volume
                    }
                }, {
                    key: "setVolume",
                    value: function(e) {
                        this.video.volume = e
                    }
                }, {
                    key: "setMuted",
                    value: function(e) {
                        this.video.muted = e
                    }
                }, {
                    key: "getMuted",
                    value: function() {
                        return this.video.muted
                    }
                }, {
                    key: "getChannel",
                    value: function() {
                        return this.channel
                    }
                }, {
                    key: "setChannel",
                    value: function(e, t) {
                        var n = this;
                        return this.channel = e, this.videoId = null, t.streamUrl.then(function(e) {
                            n.setSrc(e), n.events.emit(u.LOADED_CHANNEL)
                        })
                    }
                }, {
                    key: "getVideo",
                    value: function() {
                        return this.videoId
                    }
                }, {
                    key: "setVideo",
                    value: function(e, t) {
                        var n = this;
                        this.videoId = e, this.channel = null, t.streamUrl.then(function(e) {
                            n.setSrc(e), n.events.emit(u.LOADED_VIDEO)
                        })
                    }
                }, {
                    key: "setQuality",
                    value: function(e) {
                        this.core ? this.core.setQuality(e) : this.pendingQuality = e
                    }
                }, {
                    key: "getQualities",
                    value: function() {
                        return this.core ? this.core.getQualities() : []
                    }
                }, {
                    key: "getQuality",
                    value: function() {
                        return this.core ? this.core.getQuality() : this.pendingQuality ? this.pendingQuality : ""
                    }
                }, {
                    key: "getCurrentTime",
                    value: function() {
                        return this.video.currentTime
                    }
                }, {
                    key: "setCurrentTime",
                    value: function(e) {
                        this.video.currentTime = e
                    }
                }, {
                    key: "getDuration",
                    value: function() {
                        return this.video.duration
                    }
                }, {
                    key: "getStats",
                    value: function() {
                        return this.core ? this.core.getPlaybackStatistics() : {}
                    }
                }, {
                    key: "getNetworkProfile",
                    value: function() {
                        return this.core ? this.core.getNetworkProfile() : []
                    }
                }, {
                    key: "getBuffered",
                    value: function() {
                        return this.video.buffered
                    }
                }, {
                    key: "getReadyState",
                    value: function() {
                        return this.video.readyState
                    }
                }, {
                    key: "getNetworkState",
                    value: function() {
                        return this.video.networkState
                    }
                }, {
                    key: "getEnded",
                    value: function() {
                        return this.video.ended
                    }
                }, {
                    key: "getError",
                    value: function() {
                        return this.video.error
                    }
                }, {
                    key: "getVersion",
                    value: function() {
                        return "0.01-pre_alpha"
                    }
                }, {
                    key: "getBackend",
                    value: function() {
                        return "mse-development"
                    }
                }, {
                    key: "play",
                    value: function() {
                        var e = this,
                            t = this.stateStore.getState().stream;
                        t instanceof l.LiveContentStream ? this.setChannel(t.channel, t).then(function() {
                            e.video.play()
                        }) : this.video.play()
                    }
                }, {
                    key: "pause",
                    value: function() {
                        this.video.pause(), this.stateStore.getState().stream instanceof l.LiveContentStream && this.core.stop()
                    }
                }, {
                    key: "getPaused",
                    value: function() {
                        return this.video.paused
                    }
                }, {
                    key: "getSeeking",
                    value: function() {
                        return this.video.seeking
                    }
                }, {
                    key: "getVideoInfo",
                    value: function() {
                        return {}
                    }
                }, {
                    key: "getPreload",
                    value: function() {
                        return this.video.preload
                    }
                }, {
                    key: "getStartOffsetTime",
                    value: function() {
                        return this.video.startOffsetTime
                    }
                }, {
                    key: "getPlaybackRate",
                    value: function() {
                        return 1
                    }
                }, {
                    key: "getDefaultPlaybackRate",
                    value: function() {
                        return this.video.defaultPlaybackRate
                    }
                }, {
                    key: "getPlayed",
                    value: function() {
                        return this.video.played
                    }
                }, {
                    key: "getSeekable",
                    value: function() {
                        return this.video.seekable
                    }
                }, {
                    key: "getLoop",
                    value: function() {
                        return this.video.loop
                    }
                }, {
                    key: "getDefaultMuted",
                    value: function() {
                        return this.video.defaultMuted
                    }
                }, {
                    key: "getStatsEnabled",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "enableABS",
                    value: function() {}
                }, {
                    key: "destroy",
                    value: function() {}
                }, {
                    key: "loadPlayerCore",
                    value: function() {
                        return new Promise(function(e) {
                            n.e(2, function(t) {
                                e(n(227))
                            })
                        })
                    }
                }]), e
            }();
        p.canPlay = function() {
            var e = 'video/mp4; codecs="avc1.42E01E,mp4a.40.2"';
            return window.MediaSource && MediaSource.isTypeSupported(e)
        }
    }, function(e, t, n) {
        function r(e, t) {
            if (t = s(t, 3), u(e)) {
                var n = o(e, t);
                return n > -1 ? e[n] : void 0
            }
            return a(e, t, i)
        }
        var i = n(107),
            a = n(225),
            o = n(226),
            s = n(112),
            u = n(32);
        e.exports = r
    }, function(e, t) {
        function n(e, t, n, r) {
            var i;
            return n(e, function(e, n, a) {
                return t(e, n, a) ? (i = r ? n : e, !1) : void 0
            }), i
        }
        e.exports = n
    }, function(e, t) {
        function n(e, t, n) {
            for (var r = e.length, i = n ? r : -1; n ? i-- : ++i < r;)
                if (t(e[i], i, e)) return i;
            return -1
        }
        e.exports = n
    }, , , , , , , function(e, t) {
        function n() {
            c = !1, o.length ? u = o.concat(u) : l = -1, u.length && r()
        }

        function r() {
            if (!c) {
                var e = setTimeout(n);
                c = !0;
                for (var t = u.length; t;) {
                    for (o = u, u = []; ++l < t;) o && o[l].run();
                    l = -1, t = u.length
                }
                o = null, c = !1, clearTimeout(e)
            }
        }

        function i(e, t) {
            this.fun = e, this.array = t
        }

        function a() {}
        var o, s = e.exports = {},
            u = [],
            c = !1,
            l = -1;
        s.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            u.push(new i(e, t)), 1 !== u.length || c || setTimeout(r, 0)
        }, i.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.version = "", s.versions = {}, s.on = a, s.addListener = a, s.once = a, s.off = a, s.removeListener = a, s.removeAllListeners = a, s.emit = a, s.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, s.cwd = function() {
            return "/"
        }, s.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, s.umask = function() {
            return 0
        }
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e, t) {
            var n = this,
                r = void 0,
                i = void 0,
                a = void 0,
                o = void 0,
                s = function() {
                    r = new c["default"], i = document.createElement("video"), i.autoplay = t.autoplay, r.emit(p.PLAYER_INIT)
                };
            n.attach = function(e) {
                $(e).append(i), i.addEventListener(v, function() {
                    null !== i.error && (i.error.code === i.error.MEDIA_ERR_SRC_NOT_SUPPORTED ? (r.emit(p.OFFLINE), r.emit(d.ENDED)) : r.emit(v))
                }), i.addEventListener(h, function() {
                    r.emit(p.IS_SPECTRE, n.isSpectre())
                })
            }, n.destroy = function() {}, n.addEventListener = function(e, t) {
                e !== v && i.addEventListener(e, t), r.on(e, t)
            }, n.removeEventListener = function(e, t) {
                i.removeEventListener(e, t), r.off(e, t)
            }, n.getNetworkProfile = function() {
                return []
            }, n.getError = function() {
                return null !== i.error && i.error.code !== i.error.MEDIA_ERR_SRC_NOT_SUPPORTED ? i.error : null
            }, n.getSrc = function() {
                return i.src
            }, n.setSrc = function(e) {
                i.src = e
            }, n.getCurrentSrc = function() {
                return i.currentSrc
            }, n.getNetworkState = function() {
                return i.networkState
            }, n.getPreload = function() {
                return i.preload
            }, n.setPreload = function(e) {
                i.preload = e
            }, n.getBuffered = function() {
                return i.buffered
            }, n.load = function() {
                i.load()
            }, n.getReadyState = function() {
                return i.readyState
            }, n.getSeeking = function() {
                return i.seeking
            }, n.getCurrentTime = function() {
                return i.currentTime
            }, n.setCurrentTime = function(e) {
                i.currentTime = e
            }, n.getInitialTime = function() {
                return i.initialTime
            }, n.getDuration = function() {
                return i.duration
            }, n.getStartOffsetTime = function() {
                return i.startOffsetTime
            }, n.getPaused = function() {
                return i.paused
            }, n.getDefaultPlaybackRate = function() {
                return i.defaultPlaybackRate
            }, n.setDefaultPlaybackRate = function(e) {
                i.defaultPlaybackRate = e
            }, n.getPlaybackRate = function() {
                return i.playbackRate
            }, n.setPlaybackRate = function(e) {
                i.playbackRate = e
            }, n.getPlayed = function() {
                return i.played
            }, n.getSeekable = function() {
                return i.seekable
            }, n.getEnded = function() {
                return i.ended || null !== i.error && i.error.code === i.error.MEDIA_ERR_SRC_NOT_SUPPORTED
            }, n.getAutoplay = function() {
                return i.autoplay
            }, n.setAutoplay = function(e) {
                i.autoplay = e
            }, n.getLoop = function() {
                return i.loop
            }, n.setLoop = function(e) {
                i.loop = e
            }, n.play = function() {
                i.play()
            }, n.pause = function() {
                i.pause()
            }, n.getControls = function() {
                return !1
            }, n.setControls = function() {}, n.getVolume = function() {
                return i.volume
            }, n.setVolume = function(e) {
                i.volume = e
            }, n.getMuted = function() {
                return i.muted
            }, n.setMuted = function(e) {
                i.muted = e
            }, n.getDefaultMuted = function() {
                return i.defaultMuted
            }, n.setDefaultMuted = function(e) {
                i.defaultMuted = e
            }, n.getChannel = function() {
                return a
            }, n.setChannel = function(e, t) {
                a = e, o = null, t.streamUrl.then(function(e) {
                    n.setSrc(e), r.emit(p.LOADED_CHANNEL)
                })
            }, n.getVideo = function() {
                return o
            }, n.setVideo = function(e, t) {
                o = e, a = null, t.streamUrl.then(function(e) {
                    n.setSrc(e), r.emit(p.LOADED_VIDEO)
                })
            }, n.getQuality = function() {
                return "auto"
            }, n.setQuality = function() {}, n.getQualities = function() {
                return ["auto"]
            }, n.getStats = function() {
                return {
                    bufferSize: 0,
                    displayResolution: "",
                    skippedFrames: 0,
                    fps: 0,
                    hlsLatencyBroadcast: 0,
                    hlsLatencyEncoder: 0,
                    memoryUsage: 0,
                    playbackRate: 0,
                    playerVolume: 0,
                    videoResolution: ""
                }
            }, n.getStatsEnabled = function() {}, n.setStatsEnabled = function() {}, n.getVideoInfo = function() {
                return {}
            }, n.getCaption = function() {}, n.getBackend = function() {
                return "hls_fallback"
            }, n.getVersion = function() {}, n.isSpectre = function() {
                return !1
            }, n.enableABS = function() {}, s()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.BackendHls = a;
        var o = n(13),
            s = i(o),
            u = n(54),
            c = i(u),
            l = n(98),
            d = r(l),
            f = n(97),
            p = r(f),
            h = "loadedmetadata",
            v = "error";
        a.canPlay = function() {
            var e = document.createElement("video");
            return (0, s["default"])(e.canPlayType) ? e.canPlayType("application/vnd.apple.mpegURL") : !1
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e, t) {
            var n, r = this,
                i = new d["default"],
                a = [],
                o = [e, t],
                u = {},
                l = function() {
                    n = e.getReadyState() >= e.HAVE_CURRENT_DATA && !e.getEnded() ? e : t, e.addEventListener(v.CAN_PLAY, function() {
                        n !== e && m(t, e)
                    }), e.addEventListener(v.ENDED, function() {
                        n === e && m(e, t)
                    }), o.forEach(function(e) {
                        p.allEvents.forEach(function(t) {
                            e.addEventListener(t, function() {
                                var n = Array.prototype.slice.call(arguments);
                                f(e, t, n)
                            })
                        })
                    })
                },
                f = function(r, i, o) {
                    o.unshift(i), (i !== v.ENDED || r !== e || t.getEnded()) && (n === r ? g(o) : a.push(o))
                },
                h = function() {
                    a.forEach(function(e) {
                        g(e)
                    }), a = []
                },
                g = function(e) {
                    var t = e[0],
                        n = [v.LOADSTART],
                        r = !1;
                    (0, c["default"])(n, t) && (r = (0, s["default"])(u, t), u[t] = !0), r || (t === v.ENDED && (u = []), i.emit.apply(i, e))
                },
                m = function(e, t) {
                    e.pause(), n = t, h(), e.getDuration() !== t.getDuration() && i.emit(v.DURATION_CHANGE), e.getCurrentTime() !== t.getCurrentTime() && i.emit(v.TIME_UPDATE), e.getBuffered() !== t.getBuffered() && i.emit(_.BUFFER_CHANGE), e.getQuality() !== t.getQuality() && i.emit(_.QUALITY_CHANGE), e.getQualities() !== t.getQualities() && i.emit(_.QUALITIES_CHANGE), t.play()
                };
            r.destroy = function() {
                e.destroy(), t.destroy()
            }, r.addEventListener = function(e, t) {
                i.on(e, t)
            }, r.removeEventListener = function(e, t) {
                i.off(e, t)
            }, r.getNetworkProfile = function() {
                return n.getNetworkProfile()
            }, r.getError = function() {
                return n.getError()
            }, r.getSrc = function() {
                return n.getSrc()
            }, r.setSrc = function(e) {
                o.forEach(function(t) {
                    t.setSrc(e)
                })
            }, r.getCurrentSrc = function() {
                return n.getCurrentSrc()
            }, r.getNetworkState = function() {
                return n.getNetworkState()
            }, r.getPreload = function() {
                return n.getPreload()
            }, r.setPreload = function(e) {
                o.forEach(function(t) {
                    t.setPreload(e)
                })
            }, r.getBuffered = function() {
                return n.getBuffered()
            }, r.load = function() {
                n.load()
            }, r.getReadyState = function() {
                return n.getReadyState()
            }, r.getSeeking = function() {
                return n.getSeeking()
            }, r.getCurrentTime = function() {
                return n.getCurrentTime()
            }, r.setCurrentTime = function(e) {
                o.forEach(function(t) {
                    return t.setCurrentTime(e)
                })
            }, r.getInitialTime = function() {
                return n.getCurrentTime()
            }, r.getDuration = function() {
                return n.getDuration()
            }, r.getStartOffsetTime = function() {
                return n.getStartOffsetTime()
            }, r.getPaused = function() {
                return n.getPaused()
            }, r.getDefaultPlaybackRate = function() {
                return n.getDefaultPlaybackRate()
            }, r.setDefaultPlaybackRate = function(e) {
                o.forEach(function(t) {
                    t.setDefaultPlaybackRate(e)
                })
            }, r.getPlaybackRate = function() {
                return n.getPlaybackRate()
            }, r.setPlaybackRate = function(e) {
                o.forEach(function(t) {
                    return t.setPlaybackRate(e)
                })
            }, r.getPlayed = function() {
                return n.getPlayed()
            }, r.getSeekable = function() {
                return n.getSeekable()
            }, r.getEnded = function() {
                return n.getEnded()
            }, r.getAutoplay = function() {
                return n.getAutoplay()
            }, r.setAutoplay = function(e) {
                o.forEach(function(t) {
                    t.setAutoplay(e)
                })
            }, r.getLoop = function() {
                return n.getLoop()
            }, r.setLoop = function(e) {
                o.forEach(function(t) {
                    t.setLoop(e)
                })
            }, r.play = function() {
                n.play()
            }, r.pause = function() {
                n.pause()
            }, r.getControls = function() {
                return n.getControls()
            }, r.setControls = function(e) {
                o.forEach(function(t) {
                    t.setControls(e)
                })
            }, r.getVolume = function() {
                return n.getVolume()
            }, r.setVolume = function(e) {
                o.forEach(function(t) {
                    t.setVolume(e)
                })
            }, r.getMuted = function() {
                return n.getMuted()
            }, r.setMuted = function(e) {
                o.forEach(function(t) {
                    t.setMuted(e)
                })
            }, r.getDefaultMuted = function() {
                return n.getDefaultMuted()
            }, r.setDefaultMuted = function(e) {
                o.forEach(function(t) {
                    t.setDefaultMuted(e)
                })
            }, r.getQuality = function() {
                return n.getQuality()
            }, r.setQuality = function(e) {
                o.forEach(function(t) {
                    t.setQuality(e)
                })
            }, r.getQualities = function() {
                return n.getQualities()
            }, r.getChannel = function() {
                return n.getChannel()
            }, r.setChannel = function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                u = {}, o.forEach(function(n) {
                    n.setChannel(e, t)
                })
            }, r.getVideo = function() {
                return n.getVideo()
            }, r.getBackend = function() {
                return n.getBackend()
            }, r.setVideo = function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                u = {}, o.forEach(function(n) {
                    n.setVideo(e, t)
                })
            }, r.getStats = function() {
                return n.getStats()
            }, r.getStatsEnabled = function() {
                return n.getStatsEnabled()
            }, r.setStatsEnabled = function(e) {
                o.forEach(function(t) {
                    t.setStatsEnabled(e)
                })
            }, r.getVideoInfo = function() {
                return n.getVideoInfo()
            }, r.isSpectre = function() {
                return n.isSpectre()
            }, r.getCaption = function() {
                return n.getCaption()
            }, l()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.BackendMulti = a;
        var o = n(283),
            s = i(o),
            u = n(35),
            c = i(u),
            l = n(54),
            d = i(l),
            f = n(88),
            p = r(f),
            h = n(98),
            v = r(h),
            g = n(97),
            _ = r(g)
    }, function(e, t, n) {
        function r(e, t) {
            return a(e, t, i)
        }
        var i = n(42),
            a = n(147);
        e.exports = r
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i() {
            var e = this,
                t = new s["default"];
            e.attach = function(e) {}, e.destroy = function() {}, e.addEventListener = function(e, n) {
                t.on(e, n)
            }, e.removeEventListener = function(e, n) {
                t.off(e, n)
            }, e.getError = function() {
                return a.flashError
            }, e.getSrc = function() {}, e.setSrc = function(e) {}, e.getCurrentSrc = function() {}, e.getNetworkState = function() {}, e.getPreload = function() {}, e.setPreload = function(e) {}, e.getBuffered = function() {}, e.load = function() {}, e.getReadyState = function() {}, e.getSeeking = function() {}, e.getCurrentTime = function() {}, e.setCurrentTime = function(e) {}, e.getInitialTime = function() {}, e.getDuration = function() {}, e.getStartOffsetTime = function() {}, e.getPaused = function() {}, e.getDefaultPlaybackRate = function() {}, e.setDefaultPlaybackRate = function(e) {}, e.getPlaybackRate = function() {}, e.setPlaybackRate = function(e) {}, e.getPlayed = function() {}, e.getSeekable = function() {}, e.getEnded = function() {}, e.getAutoplay = function() {}, e.setAutoplay = function(e) {}, e.getLoop = function() {}, e.setLoop = function(e) {}, e.play = function() {}, e.pause = function() {}, e.getControls = function() {}, e.setControls = function(e) {}, e.getVolume = function() {}, e.setVolume = function(e) {}, e.getMuted = function() {}, e.setMuted = function(e) {}, e.getDefaultMuted = function() {}, e.setDefaultMuted = function(e) {}, e.getQuality = function() {}, e.setQuality = function(e) {}, e.getQualities = function() {}, e.getChannel = function() {}, e.setChannel = function(e, t) {}, e.getVideo = function() {}, e.setVideo = function(e, t) {}, e.getStats = function() {}, e.getStatsEnabled = function() {}, e.setStatsEnabled = function(e) {}, e.getVideoInfo = function() {}, e.getCaption = function() {}, e.getBackend = function() {
                return "blank"
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.BackendBlank = i;
        var a = n(88),
            o = n(54),
            s = r(o)
    }, function(e, t) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = t.CONTENT_MODE_NONE = null,
            a = function() {
                function e() {
                    n(this, e)
                }
                return r(e, [{
                    key: "contentType",
                    get: function() {
                        return i
                    }
                }, {
                    key: "channel",
                    get: function() {
                        return ""
                    }
                }, {
                    key: "restrictedBitrates",
                    get: function() {
                        return []
                    }
                }, {
                    key: "videoId",
                    get: function() {
                        return ""
                    }
                }, {
                    key: "streamUrl",
                    get: function() {
                        return Promise.resolve("")
                    }
                }, {
                    key: "accessToken",
                    get: function() {
                        return Promise.resolve({})
                    }
                }]), e
            }();
        t.nullContentStream = new a
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function a() {
            return {
                type: w,
                captions: {
                    enabled: f.get(y, _.DEFAULT_CAPTION.enabled),
                    preset: f.get(b, _.DEFAULT_CAPTION.preset),
                    style: f.get(E, _.DEFAULT_CAPTION.style)
                }
            }
        }

        function o(e) {
            return {
                type: k,
                captions: {
                    data: e,
                    available: !0
                }
            }
        }

        function s(e) {
            return f.set(y, e), {
                type: S,
                captions: {
                    enabled: e
                }
            }
        }

        function u(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
            return f.set(b, e),
                function(n, r) {
                    var i = r().captions.style,
                        a = l((0, h["default"])({}, i, t));
                    return f.set(E, a), n({
                        type: T,
                        captions: {
                            preset: e,
                            style: a
                        }
                    })
                }
        }

        function c(e) {
            return {
                type: A,
                captions: {
                    learnMoreClicks: e
                }
            }
        }

        function l(e) {
            var t = (0, g["default"])(e.fontSize, m.fontSizeMap.min, m.fontSizeMap.max);
            return (0, h["default"])({}, e, {
                fontSize: t
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ACTION_CLICK_LEARN_MORE = t.ACTION_TOGGLE_CAPTIONS = t.ACTION_SET_CAPTIONS_PRESET = t.ACTION_SET_CAPTIONS_DATA = t.ACTION_SET_CAPTIONS_AVAILABLE = t.ACTION_INITIALIZE_CAPTIONS_SETTINGS = t.KEY_CAPTIONS_STYLE = t.KEY_CAPTIONS_PRESET = t.KEY_CAPTIONS_ENABLED = void 0, t.initializeCaptionsSettings = a, t.setCaptionsData = o, t.setCaptionsEnabled = s, t.setCaptionsPreset = u, t.setLearnMoreClicks = c;
        var d = n(175),
            f = i(d),
            p = n(50),
            h = r(p),
            v = n(287),
            g = r(v),
            _ = n(289),
            m = n(290),
            y = t.KEY_CAPTIONS_ENABLED = "captionsEnabled",
            b = t.KEY_CAPTIONS_PRESET = "captionsPreset",
            E = t.KEY_CAPTIONS_STYLE = "captionsStyle",
            w = t.ACTION_INITIALIZE_CAPTIONS_SETTINGS = "captions settings initialized",
            k = (t.ACTION_SET_CAPTIONS_AVAILABLE = "captions available", t.ACTION_SET_CAPTIONS_DATA = "captions data received"),
            T = t.ACTION_SET_CAPTIONS_PRESET = "captions preset selected",
            S = t.ACTION_TOGGLE_CAPTIONS = "captions toggled",
            A = t.ACTION_CLICK_LEARN_MORE = "learn more clicked"
    }, function(e, t, n) {
        function r(e, t, n) {
            return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = a(n), n = n === n ? n : 0), void 0 !== t && (t = a(t), t = t === t ? t : 0), i(a(e), t, n)
        }
        var i = n(288),
            a = n(19);
        e.exports = r
    }, function(e, t) {
        function n(e, t, n) {
            return e === e && (void 0 !== n && (e = n >= e ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
        }
        e.exports = n
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? c : arguments[0],
                t = arguments[1];
            switch (t.type) {
                case u.ACTION_INITIALIZE_CAPTIONS_SETTINGS:
                case u.ACTION_SET_CAPTIONS_AVAILABLE:
                case u.ACTION_SET_CAPTIONS_DATA:
                case u.ACTION_SET_CAPTIONS_PRESET:
                case u.ACTION_CLICK_LEARN_MORE:
                case u.ACTION_TOGGLE_CAPTIONS:
                    return (0, o["default"])({}, e, t.captions);
                default:
                    return e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DEFAULT_CAPTION = void 0, t.captions = i;
        var a = n(50),
            o = r(a),
            s = n(290),
            u = n(286),
            c = t.DEFAULT_CAPTION = {
                enabled: !1,
                available: !1,
                preset: "white-on-black",
                data: null,
                learnMoreClicks: 0,
                style: s.presetMap["white-on-black"]
            }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e, t) {
            return "transparent" === e ? "transparent" : "rgba(" + e + "," + t + ")"
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.fontSizeMap = t.backgroundColorMap = t.fontColorMap = t.verticalPositionMap = t.fontBoldMap = t.fontItalicMap = t.fontUnderlineMap = t.alignmentMap = t.edgeMap = t.opacityMap = t.fontMap = t.presetMap = void 0, t.calculateRGBA = i;
        var a = n(50),
            o = r(a),
            s = {
                fontSize: 20,
                font: "prop-sans-serif",
                fontOpacity: "solid",
                alignment: "left",
                edge: "none",
                verticalPosition: "bottom",
                backgroundColorName: "black",
                backgroundOpacity: "solid",
                windowColorName: "transparent",
                windowOpacity: "solid",
                fontUnderline: "none",
                fontBold: "none",
                fontItalic: "none"
            },
            u = (0, o["default"])({}, s, {
                backgroundColorName: "black",
                backgroundOpacity: "translucent"
            });
        t.presetMap = {
            "white-on-black": (0, o["default"])({}, s, {
                fontColorName: "white"
            }),
            "cyan-on-black": (0, o["default"])({}, s, {
                fontColorName: "cyan"
            }),
            "yellow-on-black": (0, o["default"])({}, s, {
                fontColorName: "yellow"
            }),
            "lime-on-black": (0, o["default"])({}, s, {
                fontColorName: "green"
            }),
            "magenta-on-black": (0, o["default"])({}, s, {
                fontColorName: "magenta"
            }),
            "white-on-trans-black": (0, o["default"])({}, u, {
                fontColorName: "white"
            }),
            "cyan-on-trans-black": (0, o["default"])({}, u, {
                fontColorName: "cyan"
            }),
            "yellow-on-trans-black": (0, o["default"])({}, u, {
                fontColorName: "yellow"
            }),
            "lime-on-trans-black": (0, o["default"])({}, u, {
                fontColorName: "green"
            }),
            "magenta-on-trans-black": (0, o["default"])({}, u, {
                fontColorName: "magenta"
            }),
            "black-on-white": (0, o["default"])({}, s, {
                backgroundColorName: "white",
                fontColorName: "black"
            })
        }, t.fontMap = {
            "mono-serif": {
                fontFamily: '"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace',
                fontVariant: "normal"
            },
            "prop-serif": {
                fontFamily: '"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif',
                fontVariant: "normal"
            },
            "mono-sans-serif": {
                fontFamily: '"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace',
                fontVariant: "normal"
            },
            "prop-sans-serif": {
                fontFamily: 'Verdana, Arial, Helvetica, "PT Sans Caption", sans-serif',
                fontVariant: "normal"
            },
            casual: {
                fontFamily: '"Comic Sans MS", Impact, Handlee, fantasy',
                fontVariant: "normal"
            },
            cursive: {
                fontFamily: '"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive',
                fontVariant: "normal"
            },
            "small-capitals": {
                fontFamily: '"Arial Unicode Ms", Arial, Helvetica, Verdana, "Marcellus SC", sans-serif',
                fontVariant: "small-caps"
            }
        }, t.opacityMap = {
            semiTransparent: {
                opacityValue: .3,
                animation: "none"
            },
            transparent: {
                opacityValue: 0,
                animation: "none"
            },
            translucent: {
                opacityValue: .6,
                animation: "none"
            },
            solid: {
                opacityValue: 1,
                animation: "none"
            },
            flashing: {
                opacityValue: 1,
                animation: "blink .75s linear infinite"
            }
        }, t.edgeMap = {
            depressed: {
                textShadow: "-1px -1px 2px #000"
            },
            uniform: {
                textShadow: "-2px -2px 0 #000, -2px 2px 0 #000, -2px 0 0 #000, 2px -2px 0 #000, 2px 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000, 0 2px 0 #000"
            },
            drop: {
                textShadow: "0 2px 5px #000"
            },
            raised: {
                textShadow: "1px 1px 2px #000"
            },
            none: {
                textShadow: "none"
            }
        }, t.alignmentMap = {
            left: {
                textAlign: "left"
            },
            center: {
                textAlign: "center"
            },
            right: {
                textAlign: "right"
            }
        }, t.fontUnderlineMap = {
            underline: {
                textDecoration: "underline"
            },
            none: {
                textDecoration: "normal"
            }
        }, t.fontItalicMap = {
            italic: {
                fontStyle: "italic"
            },
            none: {
                fontStyle: "normal"
            }
        }, t.fontBoldMap = {
            bold: {
                fontWeight: "bold"
            },
            none: {
                fontWeight: "normal"
            }
        }, t.verticalPositionMap = {
            top: {
                top: "18%",
                bottom: "auto"
            },
            bottom: {
                top: "auto",
                bottom: "10%"
            }
        }, t.fontColorMap = {
            black: {
                fontColorValue: "0,0,0"
            },
            white: {
                fontColorValue: "255,255,255"
            },
            red: {
                fontColorValue: "255,0,0"
            },
            green: {
                fontColorValue: "0,255,0"
            },
            blue: {
                fontColorValue: "0,0,255"
            },
            yellow: {
                fontColorValue: "255,255,0"
            },
            magenta: {
                fontColorValue: "255,0,255"
            },
            cyan: {
                fontColorValue: "0,255,255"
            }
        }, t.backgroundColorMap = {
            black: {
                backgroundColorValue: "0,0,0"
            },
            white: {
                backgroundColorValue: "255,255,255"
            },
            red: {
                backgroundColorValue: "255,0,0"
            },
            green: {
                backgroundColorValue: "0,255,0"
            },
            blue: {
                backgroundColorValue: "0,0,255"
            },
            yellow: {
                backgroundColorValue: "255,255,0"
            },
            magenta: {
                backgroundColorValue: "255,0,255"
            },
            cyan: {
                backgroundColorValue: "0,255,255"
            },
            lightgray: {
                backgroundColorValue: "199,199,199"
            },
            gray: {
                backgroundColorValue: "145,145,145"
            },
            darkgray: {
                backgroundColorValue: "91,91,91"
            },
            transparent: {
                backgroundColorValue: "transparent"
            }
        }, t.fontSizeMap = {
            increment: 5,
            decrement: -5,
            max: 40,
            min: 10
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e, t, n) {
            return function(r) {
                var i = u(e, t, n);
                return i.then(function(e) {
                    r({
                        type: w,
                        adsManager: e
                    })
                })
            }
        }

        function a(e, t) {
            return function(n, r) {
                var i = r(),
                    a = i.adsManager;
                return c(e, t, r()).then(function(e) {
                    a.requestAds(e)
                })
            }
        }

        function o() {
            return function(e, t) {
                var n = t(),
                    r = n.adsManager;
                r.pause()
            }
        }

        function s() {
            return function(e, t) {
                var n = t(),
                    r = n.adsManager;
                r.play()
            }
        }

        function u(e, t, n) {
            var r = n.getState(),
                i = r.experiments;
            switch (t.getBackend()) {
                case "hls":
                case "flash":
                    return i.get(g.USE_JS_ADS_IN_FLASH).then(function(r) {
                        return "yes" === r ? new p.DecliningAdsManager(n, new f.IMAManager(e, t, n)) : h.nullAdsManager
                    });
                case "mse-development":
                    return Promise.resolve(new p.DecliningAdsManager(n, new f.IMAManager(e, t, n)));
                default:
                    return Promise.resolve(h.nullAdsManager)
            }
        }

        function c(e, t, n) {
            return l(n.stream).then(function(e) {
                return Promise.all([(0, y.userInfo)(), (0, y.channelInfo)(e), (0, y.channelAPIInfo)(e), (0, y.channelViewerInfo)(e)])
            }).then(function(r) {
                var i = d(r, 4),
                    a = i[0],
                    o = i[1],
                    s = i[2],
                    u = i[3];
                return new v.AdsRequestContext({
                    adType: e,
                    lastAdDisplay: E["default"].get("lastAdDisplay", 0),
                    state: n,
                    duration: t,
                    userInfo: a,
                    channelAPIInfo: s,
                    channelInfo: o,
                    viewerInfo: u
                })
            })
        }

        function l(e) {
            return e instanceof _.LiveContentStream ? Promise.resolve(e.channel) : e instanceof m.VODContentStream ? (0, y.videoInfo)(e.videoId).then(function(e) {
                return e.channel.name
            }) : Promise.reject(new Error("Invalid stream: " + e))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ACTION_CREATE_ADS_MANAGER = t.DEFAULT_AD_DURATION = void 0;
        var d = function() {
            function e(e, t) {
                var n = [],
                    r = !0,
                    i = !1,
                    a = void 0;
                try {
                    for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                } catch (u) {
                    i = !0, a = u
                } finally {
                    try {
                        !r && s["return"] && s["return"]()
                    } finally {
                        if (i) throw a
                    }
                }
                return n
            }
            return function(t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }();
        t.createAdsManager = i, t.requestAds = a, t.pauseAd = o, t.playAd = s;
        var f = n(292),
            p = n(294),
            h = n(296),
            v = n(297),
            g = n(161),
            _ = n(57),
            m = n(194),
            y = n(157),
            b = n(175),
            E = r(b),
            w = (t.DEFAULT_AD_DURATION = 30, t.ACTION_CREATE_ADS_MANAGER = "create ads manager")
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.IMAManager = void 0;
        var a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            o = n(54),
            s = r(o),
            u = n(293),
            c = n(57),
            l = n(194),
            d = n(96),
            f = $('<div class="js-ima-ads-container ima-ads-container"></div>'),
            p = (t.IMAManager = function() {
                function e(t, n, r) {
                    var a = this;
                    i(this, e), this._videoContainer = t, this._backend = n, this._stateStore = r, this._paused = !1, this._eventEmitter = new s["default"], this._adShowing = !1, this._currentAdsManager = v;
                    var o = this._stateStore.getState(),
                        u = o.window,
                        c = u.google;
                    c && (c.ima.settings.setVpaidMode(c.ima.ImaSdkSettings.VpaidMode.ENABLED), this._adDisplayContainer = new c.ima.AdDisplayContainer(f.clone().appendTo(this._videoContainer).get(0), $(this._videoContainer).find("video, object").get(0)), this._adDisplayContainer.initialize(), this._adsLoader = new c.ima.AdsLoader(this._adDisplayContainer), this._adsLoader.addEventListener(c.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, function(e) {
                        return a._onAdsManagerLoaded(e)
                    }), this._adsLoader.addEventListener(c.ima.AdErrorEvent.Type.AD_ERROR, function(e) {
                        return a._onAdError(e)
                    }), u.addEventListener("resize", function() {
                        a._currentAdsManager.resize(a._videoContainer.offsetParent.offsetWidth, a._videoContainer.offsetParent.offsetHeight, c.ima.ViewMode.NORMAL)
                    }))
                }
                return a(e, [{
                    key: "destroy",
                    value: function() {
                        this._adsLoader.destroy(), this._adDisplayContainer.destroy()
                    }
                }, {
                    key: "requestAds",
                    value: function(e) {
                        var t = this._stateStore.getState(),
                            n = t.analyticsTracker;
                        n.trackEvent("video_ad_request", {
                            ad_session_id: e.adSessionId,
                            provider: "ima",
                            roll_type: e.adType,
                            time_break: e.duration
                        });
                        try {
                            var r = this._stateStore.getState().window.google,
                                i = this._videoContainer.offsetParent,
                                a = new r.ima.AdsRequest;
                            a.adTagUrl = (0, u.buildIMATags)(e), a.linearAdSlotWidth = i.offsetWidth, a.linearAdSlotHeight = i.offsetHeight, a.nonLinearAdSlotWidth = i.offsetWidth, a.nonLinearAdSlotHeight = i.offsetHeight, this._adsLoader.requestAds(a, e)
                        } catch (o) {
                            n.trackEvent("video_ad_request_error", {
                                ad_session_id: e.adSessionId,
                                provider: "ima",
                                reason: o.message,
                                roll_type: e.adType,
                                time_break: e.duration
                            })
                        }
                    }
                }, {
                    key: "pause",
                    value: function() {
                        this._paused = !0, this._currentAdsManager.pause()
                    }
                }, {
                    key: "play",
                    value: function() {
                        this._paused = !1, this._currentAdsManager.resume()
                    }
                }, {
                    key: "setVolume",
                    value: function(e) {
                        this._currentAdsManager.setVolume(e), this._eventEmitter.emit("volumechange")
                    }
                }, {
                    key: "setMuted",
                    value: function(e) {
                        var t = this._stateStore.getState(),
                            n = t.playback;
                        this._currentAdsManager.setVolume(e ? 0 : n.volume)
                    }
                }, {
                    key: "addEventListener",
                    value: function(e, t) {
                        this._eventEmitter.on(e, t)
                    }
                }, {
                    key: "_onAdsManagerLoaded",
                    value: function(e) {
                        var t = this,
                            n = this._stateStore.getState().window.google,
                            r = e.getUserRequestContext();
                        this._stateStore.getState().analyticsTracker.trackEvent("video_ad_request_response", {
                            ad_session_id: r.adSessionId,
                            provider: "ima",
                            roll_type: r.adType,
                            time_break: r.duration
                        });
                        var i = new n.ima.AdsRenderingSettings;
                        i.restoreCustomPlaybackStateOnAdBreakComplete = !0, this._currentAdsManager = e.getAdsManager(new p(this._backend), i), this._currentAdsManager.addEventListener(n.ima.AdErrorEvent.Type.AD_ERROR, function(e) {
                            return t._onAdError(e)
                        }), this._currentAdsManager.addEventListener(n.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, function(e) {
                            return t._onContentPauseRequested(e)
                        }), this._currentAdsManager.addEventListener(n.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, function(e) {
                            return t._onContentResumeRequested(e)
                        }), this._currentAdsManager.addEventListener(n.ima.AdEvent.Type.IMPRESSION, function(e) {
                            return t._onAdImpression(e, r)
                        }), this._currentAdsManager.addEventListener(n.ima.AdEvent.Type.COMPLETE, function(e) {
                            return t._onAdEnded(e, r)
                        }), this._currentAdsManager.init(this._videoContainer.offsetParent.offsetWidth, this._videoContainer.offsetParent.offsetHeight, n.ima.ViewMode.NORMAL), this._currentAdsManager.start()
                    }
                }, {
                    key: "_onAdError",
                    value: function(e) {
                        var t = e.getError(),
                            n = e.getUserRequestContext() || {
                                adSessionId: null,
                                adType: null,
                                duration: null
                            };
                        this._stateStore.getState().analyticsTracker.trackEvent("video_ad_error", {
                            ad_session_id: n.adSessionId,
                            provider: "ima",
                            roll_type: n.adType,
                            reason: t.getMessage(),
                            time_break: n.duration
                        }), this._currentAdsManager.destroy(), this._currentAdsManager = v
                    }
                }, {
                    key: "_onContentPauseRequested",
                    value: function() {
                        var e = this._stateStore.getState(),
                            t = e.playback,
                            n = e.stream;
                        n instanceof c.LiveContentStream ? this._backend.setMuted(!0) : n instanceof l.VODContentStream && this._backend.pause(), this._currentAdsManager.setVolume(t.muted ? 0 : t.volume), this._adShowing = !0, this._eventEmitter.emit(d.AD_START)
                    }
                }, {
                    key: "_onContentResumeRequested",
                    value: function() {
                        var e = this._stateStore.getState(),
                            t = e.playback,
                            n = e.stream;
                        n instanceof c.LiveContentStream ? (this._backend.setMuted(t.muted), this._backend.setVolume(t.volume)) : n instanceof l.VODContentStream && !this._backend.getEnded() && this._backend.play(), this._currentAdsManager = v, this._adShowing = !1, this._eventEmitter.emit(d.AD_END)
                    }
                }, {
                    key: "_onAdImpression",
                    value: function(e, t) {
                        var n = e.getAd();
                        this._stateStore.getState().analyticsTracker.trackEvent("video_ad_impression", {
                            ad_session_id: t.adSessionId,
                            ad_id: n.getAdId(),
                            adblock: t.adblock,
                            provider: "ima",
                            roll_type: t.adType
                        })
                    }
                }, {
                    key: "_onAdEnded",
                    value: function(e, t) {
                        var n = e.getAd();
                        this._stateStore.getState().analyticsTracker.trackEvent("video_ad_impression_complete", {
                            ad_session_id: t.adSessionId,
                            ad_id: n.getAdId(),
                            adblock: t.adblock,
                            duration: n.getDuration(),
                            provider: "ima",
                            roll_type: t.adType
                        })
                    }
                }, {
                    key: "adShowing",
                    get: function() {
                        return this._adShowing
                    }
                }, {
                    key: "paused",
                    get: function() {
                        return this._paused
                    }
                }]), e
            }(), function() {
                function e(t) {
                    i(this, e), this._backend = t
                }
                return a(e, [{
                    key: "currentTime",
                    get: function() {
                        return this._backend.getCurrentTime()
                    }
                }, {
                    key: "duration",
                    get: function() {
                        return this._backend.getDuration()
                    }
                }]), e
            }()),
            h = function() {
                function e() {
                    i(this, e)
                }
                return a(e, [{
                    key: "init",
                    value: function() {}
                }, {
                    key: "destroy",
                    value: function() {}
                }, {
                    key: "start",
                    value: function() {}
                }, {
                    key: "resize",
                    value: function() {}
                }, {
                    key: "pause",
                    value: function() {}
                }, {
                    key: "resume",
                    value: function() {}
                }, {
                    key: "setVolume",
                    value: function() {}
                }, {
                    key: "addEventListener",
                    value: function() {}
                }]), e
            }(),
            v = new h
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function a(e) {
            var t = {
                    iu: "/" + l.imaNetworkID + "/twitch/channels/" + e.channel,
                    ius_szs: "300x250",
                    sz: "640x480",
                    impl: "s",
                    gdfp_req: "1",
                    env: "vp",
                    output: "xml_vast3",
                    url: e.url,
                    correlator: Date.now(),
                    cust_params: o(e),
                    unviewed_position_start: "1"
                },
                n = (0, c["default"])(t, function(e, t, n) {
                    return e.push(n + "=" + t), e
                }, []).join("&");
            return l.doubleClickUrl + "?" + n
        }

        function o(e) {
            var t = {
                partner: e.partner,
                game: e.game,
                chan: e.channel,
                embed: e.playerType === d.PLAYER_EMBED,
                playerType: e.playerType,
                mature: e.mature,
                pos: g[e.adType],
                timebreak: e.duration,
                adblock: void 0 === e.adblock ? "unknown" : e.adblock,
                sdk: "html5"
            };
            if (null !== e.kruxId && (t.kuid = e.kruxId), t.embed) {
                var n = (0, f.parseUri)(e.referrer);
                t.embed_url = n.host.split(".").slice(-2).join(".")
            }
            return (0, c["default"])(t, function(e, t, n) {
                return e.push(n + "=" + String(t).toLowerCase()), e
            }, []).join("&").replace(/[=&,]/g, function(e) {
                switch (e) {
                    case "=":
                        return "%3D";
                    case "&":
                        return "%26";
                    case ",":
                        return "%2C"
                }
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.POSTROLL = t.MIDROLL = t.PREROLL = void 0;
        var s;
        t.buildIMATags = a;
        var u = n(159),
            c = r(u),
            l = n(88),
            d = n(199),
            f = n(95),
            p = t.PREROLL = "preroll",
            h = t.MIDROLL = "midroll",
            v = t.POSTROLL = "postroll",
            g = (s = {}, i(s, p, "1"), i(s, h, "2"), i(s, v, "3"), s)
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
            return {
                reason_turbo: Boolean(e.turboToken),
                reason_ratelimit: e.adType === f.PREROLL && e.requestTime - e.lastAdDisplay < v,
                reason_channelsub: Boolean(e.chansubToken) && e.hasAdFreeSubscription,
                reason_channeladfree: e.adType === f.PREROLL && !e.prerollsEnabled || e.adType === f.POSTROLL && !e.postrollsEnabled,
                reason_frontpage: e.playerType === p.PLAYER_FRONTPAGE,
                reason_creative_player: e.playerType === p.PLAYER_CREATIVE,
                reason_facebook: e.playerType === p.PLAYER_FACEBOOK,
                reason_already_seen_rolltype: Boolean(t[e.adType]) && (e.adType === f.PREROLL || e.adType === f.POSTROLL)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DecliningAdsManager = void 0;
        var s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            u = n(295),
            c = r(u),
            l = n(159),
            d = r(l),
            f = n(293),
            p = n(199),
            h = n(95),
            v = 3e5;
        t.DecliningAdsManager = function() {
            function e(t, n) {
                a(this, e), this._stateStore = t, this._adManager = n, this._streamRollTypes = {}
            }
            return s(e, [{
                key: "destroy",
                value: function() {
                    this._adManager.destroy()
                }
            }, {
                key: "requestAds",
                value: function(e) {
                    var t = this._stateStore.getState(),
                        n = t.window;
                    if (!this._streamRollTypes.hasOwnProperty(e.channel)) {
                        var r;
                        this._streamRollTypes[e.channel] = (r = {}, i(r, f.PREROLL, !1), i(r, f.MIDROLL, !1), i(r, f.POSTROLL, !1), r)
                    }
                    var a = o(e, this._streamRollTypes[e.channel]),
                        s = (0, d["default"])(a, function(e, t) {
                            return e || t
                        }, !1),
                        u = (0, h.parseUri)(n.location.href);
                    if ((u.queryKey.hasOwnProperty("force_preroll") || u.queryKey.hasOwnProperty("force_midroll")) && (s = !1), s) {
                        var l = this._stateStore.getState(),
                            p = l.analyticsTracker;
                        p.trackEvent("video_ad_request_declined", (0, c["default"])({
                            ad_session_id: e.adSessionId,
                            roll_type: e.adType,
                            time_break: e.duration,
                            provider: "ima"
                        }, a))
                    } else this._adManager.requestAds(e), this._streamRollTypes[e.channel][e.adType] = !0
                }
            }, {
                key: "addEventListener",
                value: function(e, t) {
                    this._adManager.addEventListener(e, t)
                }
            }, {
                key: "pause",
                value: function() {
                    this._adManager.pause()
                }
            }, {
                key: "play",
                value: function() {
                    this._adManager.play()
                }
            }, {
                key: "setVolume",
                value: function(e) {
                    this._adManager.setVolume(e)
                }
            }, {
                key: "setMuted",
                value: function(e) {
                    this._adManager.setMuted(e)
                }
            }, {
                key: "adShowing",
                get: function() {
                    return this._adManager.adShowing
                }
            }, {
                key: "paused",
                get: function() {
                    return this._adManager.paused
                }
            }]), e
        }()
    }, function(e, t, n) {
        var r = n(7),
            i = n(52),
            a = n(8),
            o = n(10),
            s = n(34),
            u = n(41),
            c = Object.prototype,
            l = c.hasOwnProperty,
            d = c.propertyIsEnumerable,
            f = !d.call({
                valueOf: 1
            }, "valueOf"),
            p = a(function(e, t) {
                if (f || s(t) || o(t)) return void i(t, u(t), e);
                for (var n in t) l.call(t, n) && r(e, n, t[n])
            });
        e.exports = p
    }, function(e, t) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = function() {
                function e() {
                    n(this, e)
                }
                return r(e, [{
                    key: "requestAds",
                    value: function() {}
                }, {
                    key: "pause",
                    value: function() {}
                }, {
                    key: "play",
                    value: function() {}
                }, {
                    key: "setVolume",
                    value: function() {}
                }, {
                    key: "setMuted",
                    value: function() {}
                }, {
                    key: "addEventListener",
                    value: function() {}
                }, {
                    key: "destroy",
                    value: function() {}
                }, {
                    key: "adShowing",
                    get: function() {
                        return !1
                    }
                }, {
                    key: "paused",
                    get: function() {
                        return !1
                    }
                }, {
                    key: "muted",
                    get: function() {
                        return !1
                    }
                }]), e
            }();
        t.nullAdsManager = new i
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.AdsRequestContext = void 0;
        var i = n(202),
            a = 30;
        t.AdsRequestContext = function o(e) {
            var t = e.adType,
                n = e.duration,
                s = e.state,
                u = e.lastAdDisplay,
                c = e.userInfo,
                l = e.channelInfo,
                d = e.channelAPIInfo,
                f = e.viewerInfo;
            r(this, o);
            var p = s.window;
            this.adSessionId = (0, i.generate)(a), this.adblock = p.Twitch.sentinel.detect._result, this.adType = t, this.channel = l.name, this.chansubToken = f.chansub, this.duration = n, this.game = l.game, this.hasAdFreeSubscription = Boolean(f.has_ad_free_subscription), this.kruxId = p.Krux ? p.Krux.user || "" : null, this.lastAdDisplay = u, this.mature = l.mature, this.partner = l.partner, this.playerType = s.env.playerType, this.postrollsEnabled = Boolean(d.postrolls), this.prerollsEnabled = Boolean(d.prerolls), this.referrer = p.document.referrer, this.requestTime = Date.now(), this.turboToken = c.turbo, this.url = p.location.href
        }
    }, function(e, t) {
        "use strict";

        function n(e) {
            return {
                type: r,
                info: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.setManifestInfo = n;
        var r = t.ACTION_SET_MANIFEST_INFO = "set manifest info"
    }, function(e, t) {
        "use strict";

        function n(e) {
            return function(t, n) {
                var r = n(),
                    i = r.stream,
                    a = r.playback,
                    o = r.analyticsTracker;
                return -1 !== i.restrictedBitrates.indexOf(e) ? void t({
                    type: l
                }) : (o.trackEvent("quality_change_request", {
                    prev_quality: a.quality,
                    new_quality: e
                }), void t({
                    type: u,
                    playback: {
                        quality: e
                    }
                }))
            }
        }

        function r() {
            return {
                type: d
            }
        }

        function i(e) {
            return {
                type: u,
                playback: {
                    duration: e
                }
            }
        }

        function a(e) {
            return {
                type: f,
                muted: e
            }
        }

        function o(e) {
            return {
                type: p,
                volume: Math.max(0, Math.min(1, e))
            }
        }

        function s(e) {
            return {
                type: c,
                event: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.setQuality = n, t.clearQualityRestrictedError = r, t.updateDuration = i, t.setMuted = a, t.setVolume = o, t.backendEventEmitted = s;
        var u = t.ACTION_UPDATE_PLAYBACK_STATE = "update playback state",
            c = t.ACTION_BACKEND_EVENT_EMITTED = "backend event emitted",
            l = t.ACTION_QUALITY_RESTRICTED_ERROR = "error quality restricted",
            d = t.ACTION_CLEAR_QUALITY_RESTRICTED_ERROR = "clear error quality restricted",
            f = t.ACTION_SET_MUTED = "set player muted",
            p = t.ACTION_SET_VOLUME = "set player volume"
    }, function(e, t) {
        "use strict";

        function n(e) {
            return {
                type: i,
                screen: e
            }
        }

        function r() {
            return {
                type: a
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.pushScreen = n, t.popScreen = r;
        var i = t.ACTION_PUSH_SCREEN = "push screen",
            a = t.ACTION_POP_SCREEN = "pop screen";
        t.CONTENT_SCREEN = "content", t.ADVERTISEMENT_SCREEN = "advertisement", t.STORM_WARNING_SCREEN = "stormwarning", t.VOD_RECOMMENDATION_SCREEN = "vodrecommendations"
    }, function(e, t) {
        "use strict";

        function n(e) {
            return Array.prototype.slice.call(arguments, 1).forEach(function(t) {
                if (t)
                    for (var n in t) {
                        var r = Object.getOwnPropertyDescriptor(t, n);
                        r.get && (r.get = r.get.bind(t)), r.set && (r.set = r.set.bind(t)), "function" == typeof r.value && (r.value = r.value.bind(t)), Object.defineProperty(e, n, r)
                    }
            }), e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.forwardProperties = n
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.EmbedHost = void 0;
        var o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            s = n(14),
            u = i(s),
            c = n(101),
            l = n(303),
            d = r(l),
            f = n(190),
            p = n(304),
            h = r(p),
            v = n(97),
            g = r(v);
        t.EmbedHost = function() {
            function e(t, n, r) {
                var i = this;
                a(this, e), this._player = t, this._stateStore = r, this._clients = [], this._window = this._stateStore.getState().window, n.addEventListener(c.EVENT_STATE_UPDATE, this._sendPlayerState.bind(this)), n.addEventListener(c.EVENT_PLAYER_UPDATE, this._sendPlayerEvent.bind(this)), this._window.addEventListener("message", this);
                var o = this._window.opener || this._window.parent;
                o && o !== this._window && this._addClient(o), this._unsubscribe = (0, f.subscribe)(this._stateStore, ["viewercount"], function() {
                    i._sendStoreState(), i._sendPlayerEvent(g.VIEWERS_CHANGE)
                }), this._sendStoreState()
            }
            return o(e, [{
                key: "_addClient",
                value: function(e) {
                    this._clients.push(e), this._send(e, h.BRIDGE_HOST_READY)
                }
            }, {
                key: "_send",
                value: function(e, t) {
                    var n = arguments.length <= 2 || void 0 === arguments[2] ? [] : arguments[2],
                        r = Array.isArray(n) ? n : [n],
                        i = {
                            namespace: h.BRIDGE_CLIENT_NAMESPACE,
                            method: t,
                            args: r
                        };
                    e.postMessage(i, "*")
                }
            }, {
                key: "_sendAll",
                value: function(e, t) {
                    var n = this;
                    this._clients.forEach(function(r) {
                        n._send(r, e, t)
                    })
                }
            }, {
                key: "handleEvent",
                value: function(e) {
                    if ((0, u["default"])(e.data) && e.data.namespace === h.BRIDGE_HOST_NAMESPACE) switch (e.data.method) {
                        case h.BRIDGE_REQ_SUBSCRIBE:
                            this._addClient(e.source);
                            break;
                        case h.METHOD_PLAY:
                            this._player.play();
                            break;
                        case h.METHOD_PAUSE:
                            this._player.pause();
                            break;
                        case h.METHOD_SET_CHANNEL:
                            this._stateStore.dispatch(d.setChannel(e.data.args[0]));
                            break;
                        case h.METHOD_SET_VIDEO:
                            this._stateStore.dispatch(d.setVideo(e.data.args[0]));
                            break;
                        case h.METHOD_SEEK:
                            this._player.setCurrentTime(parseFloat(e.data.args[0]));
                            break;
                        case h.METHOD_SET_QUALITY:
                            this._player.setQuality(e.data.args[0]);
                            break;
                        case h.METHOD_SET_MUTE:
                            this._player.setMuted(!!e.data.args[0]);
                            break;
                        case h.METHOD_SET_VOLUME:
                            this._player.setVolume(parseFloat(e.data.args[0]));
                            break;
                        case h.METHOD_DESTROY:
                            this._player.destroy()
                    }
                }
            }, {
                key: "_sendPlayerState",
                value: function(e) {
                    this._sendAll(h.BRIDGE_STATE_UPDATE, e.toJSON())
                }
            }, {
                key: "_sendPlayerEvent",
                value: function(e) {
                    this._sendAll(h.BRIDGE_PLAYER_EVENT, e)
                }
            }, {
                key: "_sendStoreState",
                value: function() {
                    this._sendAll(h.BRIDGE_STORE_STATE_UPDATE, {
                        viewercount: this._stateStore.getState().viewercount
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    this._window.removeEventListener("message", this)
                }
            }]), e
        }()
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e) {
            var t = o(e);
            return function(e, n) {
                e((0, b.resetPlaySession)());
                var r = n(),
                    i = r.experiments,
                    a = r.usher,
                    o = u(),
                    s = i.get(g.USHER_PROTOCOL),
                    c = (0, _.streamInfo)(t);
                return e({
                    type: w,
                    stream: new h.LiveContentStream(t, o, s.then(function(e) {
                        return (0, d["default"])({}, a, {
                            protocol: e
                        })
                    }))
                }), c.then(function(t) {
                    t.stream && (e((0, m.updateViewerCount)(t.stream.viewers)), e((0, y.setStreamMetadata)(t.stream)), e((0, E.setOnline)(!0)))
                })
            }
        }

        function a(e) {
            var t = s(e);
            return function(e, n) {
                e((0, b.resetPlaySession)());
                var r = n(),
                    i = r.experiments,
                    a = r.usher,
                    o = i.get(g.USHER_PROTOCOL),
                    s = i.get(g.USE_LANTERN),
                    l = u();
                e({
                    type: w,
                    stream: new v.VODContentStream(t, l, Promise.all([o, s]).then(function(e) {
                        var t = c(e, 2),
                            n = t[0],
                            r = t[1];
                        return (0, d["default"])({}, a, {
                            protocol: n,
                            use_lantern: r
                        })
                    }))
                })
            }
        }

        function o(e) {
            return e.replace(/[^A-Za-z0-9_]/g, "")
        }

        function s(e) {
            return e.replace(/[^A-Za-z0-9_]/g, "")
        }

        function u() {
            return (0, p.fetch)({
                url: f.apiHost + "/api/viewer/token.json",
                xhrFields: {
                    withCredentials: !0
                }
            }).then(function(e) {
                return e.token
            }, function() {
                return null
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ACTION_SET_STREAM = void 0;
        var c = function() {
            function e(e, t) {
                var n = [],
                    r = !0,
                    i = !1,
                    a = void 0;
                try {
                    for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                } catch (u) {
                    i = !0, a = u
                } finally {
                    try {
                        !r && s["return"] && s["return"]()
                    } finally {
                        if (i) throw a
                    }
                }
                return n
            }
            return function(t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }();
        t.setChannel = i, t.setVideo = a;
        var l = n(50),
            d = r(l),
            f = n(88),
            p = n(156),
            h = n(57),
            v = n(194),
            g = n(161),
            _ = n(157),
            m = n(191),
            y = n(193),
            b = n(201),
            E = n(192),
            w = t.ACTION_SET_STREAM = "set stream"
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e) {
            var t = (0, h.toString)((0, l["default"])(e, "width", "height")),
                n = g + "/?" + t,
                r = document.createElement("iframe");
            return r.setAttribute("src", n), e.width && r.setAttribute("width", e.width), e.height && r.setAttribute("height", e.height), r.setAttribute("frameBorder", "0"), r.setAttribute("allowFullScreen", ""), r.setAttribute("scrolling", "no"), r
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.EmbedClient = t.PLAYBACK_ENDED = t.PLAYBACK_PLAYING = t.PLAYBACK_PAUSED = t.BRIDGE_CLIENT_NAMESPACE = t.BRIDGE_HOST_NAMESPACE = t.BRIDGE_DOCUMENT_EVENT = t.BRIDGE_PLAYER_EVENT = t.BRIDGE_STORE_STATE_UPDATE = t.BRIDGE_STATE_UPDATE = t.BRIDGE_HOST_READY = t.BRIDGE_REQ_SUBSCRIBE = t.METHOD_DESTROY = t.METHOD_SET_VOLUME = t.METHOD_SET_MUTE = t.METHOD_SET_QUALITY = t.METHOD_SEEK = t.METHOD_SET_VIDEO = t.METHOD_SET_CHANNEL = t.METHOD_PAUSE = t.METHOD_PLAY = t.EVENT_EMBED_READY = void 0;
        var o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            s = n(215),
            u = r(s),
            c = n(58),
            l = r(c),
            d = n(54),
            f = r(d),
            p = n(95),
            h = n(211),
            v = n(305),
            g = function() {
                var e = "https://player.twitch.tv";
                if (document.currentScript) e = document.currentScript.src;
                else {
                    var t = Array.prototype.filter.call(document.scripts, function(e) {
                        return /twitch\.tv.*embed/.test(e.src)
                    });
                    e = t.length > 0 ? t[0].src : document.scripts[document.scripts.length - 1].src
                }
                var n = (0, p.parseUri)(e);
                return n.protocol + "://" + n.authority
            }(),
            _ = 15e3,
            m = {
                channelName: "",
                currentTime: 0,
                duration: 0,
                muted: !1,
                playback: "",
                quality: "",
                qualitiesAvailable: [],
                stats: {},
                videoID: "",
                viewers: 0,
                volume: 0
            },
            y = t.EVENT_EMBED_READY = "ready",
            b = (t.METHOD_PLAY = "play", t.METHOD_PAUSE = "pause", t.METHOD_SET_CHANNEL = "channel", t.METHOD_SET_VIDEO = "video", t.METHOD_SEEK = "seek", t.METHOD_SET_QUALITY = "quality", t.METHOD_SET_MUTE = "mute", t.METHOD_SET_VOLUME = "volume", t.METHOD_DESTROY = "destroy"),
            E = t.BRIDGE_REQ_SUBSCRIBE = "subscribe",
            w = t.BRIDGE_HOST_READY = "ready",
            k = t.BRIDGE_STATE_UPDATE = "bridgestateupdate",
            T = t.BRIDGE_STORE_STATE_UPDATE = "bridgestorestateupdate",
            S = t.BRIDGE_PLAYER_EVENT = "bridgeplayerevent",
            A = (t.BRIDGE_DOCUMENT_EVENT = "bridgedocumentevent", t.BRIDGE_HOST_NAMESPACE = "player.embed.host"),
            C = t.BRIDGE_CLIENT_NAMESPACE = "player.embed.client";
        t.PLAYBACK_PAUSED = "paused", t.PLAYBACK_PLAYING = "playing", t.PLAYBACK_ENDED = "ended", t.EmbedClient = function() {
            function e(t, n) {
                i(this, e), this._eventEmitter = new f["default"], this._playerState = m, this._storeState = {}, this._onHostReady = this._getHostReady(), this._iframe = a(n), t.appendChild(this._iframe), this._host = this._iframe.contentWindow, this._send(E)
            }
            return o(e, [{
                key: "destroy",
                value: function() {
                    this.callPlayerMethod(b), this._iframe.parentNode.removeChild(this._iframe)
                }
            }, {
                key: "_getHostReady",
                value: function() {
                    var e = this;
                    return new v.Promise(function(t, n) {
                        function r(e) {
                            this._isClientMessage(e) && e.data.method === w && (window.removeEventListener("message", i), window.addEventListener("message", this), this._eventEmitter.emit(y), t())
                        }
                        var i = r.bind(e);
                        window.addEventListener("message", i), setTimeout(n, _)
                    })
                }
            }, {
                key: "_send",
                value: function(e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; t > r; r++) n[r - 1] = arguments[r];
                    var i = {
                        namespace: A,
                        method: e,
                        args: n
                    };
                    this._host.postMessage(i, "*")
                }
            }, {
                key: "_deferSend",
                value: function() {
                    for (var e = this, t = arguments.length, n = Array(t), r = 0; t > r; r++) n[r] = arguments[r];
                    this._onHostReady.then(function() {
                        return e._send.apply(e, n)
                    })
                }
            }, {
                key: "_isClientMessage",
                value: function(e) {
                    return Boolean(e.data) && e.data.namespace === C && e.source === this._iframe.contentWindow
                }
            }, {
                key: "handleEvent",
                value: function(e) {
                    if (this._isClientMessage(e)) switch (e.data.method) {
                        case k:
                            this._playerState = e.data.args[0];
                            break;
                        case S:
                            this._eventEmitter.emit(e.data.args[0]);
                            break;
                        case T:
                            this._storeState = e.data.args[0]
                    }
                }
            }, {
                key: "getPlayerState",
                value: function() {
                    return this._playerState
                }
            }, {
                key: "getStoreState",
                value: function() {
                    return this._storeState
                }
            }, {
                key: "addEventListener",
                value: function(e, t) {
                    this._eventEmitter.on(e, t)
                }
            }, {
                key: "removeEventListener",
                value: function(e, t) {
                    this._eventEmitter.off(e, t)
                }
            }, {
                key: "callPlayerMethod",
                value: function(e, t) {
                    this._deferSend(e, t)
                }
            }, {
                key: "setWidth",
                value: function(e) {
                    (0, u["default"])(e) && e >= 0 && this._iframe.setAttribute("width", e)
                }
            }, {
                key: "setHeight",
                value: function(e) {
                    (0, u["default"])(e) && e >= 0 && this._iframe.setAttribute("height", e)
                }
            }]), e
        }()
    }, function(e, t, n) {
        var r;
        (function(e, i, a) {
            /*!
             * @overview es6-promise - a tiny implementation of Promises/A+.
             * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
             * @license   Licensed under MIT license
             *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
             * @version   3.1.2
             */
            (function() {
                "use strict";

                function o(e) {
                    return "function" == typeof e || "object" == typeof e && null !== e
                }

                function s(e) {
                    return "function" == typeof e
                }

                function u(e) {
                    Y = e
                }

                function c(e) {
                    J = e
                }

                function l() {
                    return function() {
                        e.nextTick(v)
                    }
                }

                function d() {
                    return function() {
                        z(v)
                    }
                }

                function f() {
                    var e = 0,
                        t = new ee(v),
                        n = document.createTextNode("");
                    return t.observe(n, {
                            characterData: !0
                        }),
                        function() {
                            n.data = e = ++e % 2
                        }
                }

                function p() {
                    var e = new MessageChannel;
                    return e.port1.onmessage = v,
                        function() {
                            e.port2.postMessage(0)
                        }
                }

                function h() {
                    return function() {
                        setTimeout(v, 1)
                    }
                }

                function v() {
                    for (var e = 0; Q > e; e += 2) {
                        var t = re[e],
                            n = re[e + 1];
                        t(n), re[e] = void 0, re[e + 1] = void 0
                    }
                    Q = 0
                }

                function g() {
                    try {
                        var e = n(306);
                        return z = e.runOnLoop || e.runOnContext, d()
                    } catch (t) {
                        return h()
                    }
                }

                function _(e, t) {
                    var n = this,
                        r = n._state;
                    if (r === se && !e || r === ue && !t) return this;
                    var i = new this.constructor(y),
                        a = n._result;
                    if (r) {
                        var o = arguments[r - 1];
                        J(function() {
                            D(r, i, o, a)
                        })
                    } else j(n, i, e, t);
                    return i
                }

                function m(e) {
                    var t = this;
                    if (e && "object" == typeof e && e.constructor === t) return e;
                    var n = new t(y);
                    return C(n, e), n
                }

                function y() {}

                function b() {
                    return new TypeError("You cannot resolve a promise with itself")
                }

                function E() {
                    return new TypeError("A promises callback cannot return that same promise.")
                }

                function w(e) {
                    try {
                        return e.then
                    } catch (t) {
                        return ce.error = t, ce
                    }
                }

                function k(e, t, n, r) {
                    try {
                        e.call(t, n, r)
                    } catch (i) {
                        return i
                    }
                }

                function T(e, t, n) {
                    J(function(e) {
                        var r = !1,
                            i = k(n, t, function(n) {
                                r || (r = !0, t !== n ? C(e, n) : P(e, n))
                            }, function(t) {
                                r || (r = !0, L(e, t))
                            }, "Settle: " + (e._label || " unknown promise"));
                        !r && i && (r = !0, L(e, i))
                    }, e)
                }

                function S(e, t) {
                    t._state === se ? P(e, t._result) : t._state === ue ? L(e, t._result) : j(t, void 0, function(t) {
                        C(e, t)
                    }, function(t) {
                        L(e, t)
                    })
                }

                function A(e, t, n) {
                    t.constructor === e.constructor && n === ie && constructor.resolve === ae ? S(e, t) : n === ce ? L(e, ce.error) : void 0 === n ? P(e, t) : s(n) ? T(e, t, n) : P(e, t)
                }

                function C(e, t) {
                    e === t ? L(e, b()) : o(t) ? A(e, t, w(t)) : P(e, t)
                }

                function O(e) {
                    e._onerror && e._onerror(e._result), M(e)
                }

                function P(e, t) {
                    e._state === oe && (e._result = t, e._state = se, 0 !== e._subscribers.length && J(M, e))
                }

                function L(e, t) {
                    e._state === oe && (e._state = ue, e._result = t, J(O, e))
                }

                function j(e, t, n, r) {
                    var i = e._subscribers,
                        a = i.length;
                    e._onerror = null, i[a] = t, i[a + se] = n, i[a + ue] = r, 0 === a && e._state && J(M, e)
                }

                function M(e) {
                    var t = e._subscribers,
                        n = e._state;
                    if (0 !== t.length) {
                        for (var r, i, a = e._result, o = 0; o < t.length; o += 3) r = t[o], i = t[o + n], r ? D(n, r, i, a) : i(a);
                        e._subscribers.length = 0
                    }
                }

                function I() {
                    this.error = null
                }

                function N(e, t) {
                    try {
                        return e(t)
                    } catch (n) {
                        return le.error = n, le
                    }
                }

                function D(e, t, n, r) {
                    var i, a, o, u, c = s(n);
                    if (c) {
                        if (i = N(n, r), i === le ? (u = !0, a = i.error, i = null) : o = !0, t === i) return void L(t, E())
                    } else i = r, o = !0;
                    t._state !== oe || (c && o ? C(t, i) : u ? L(t, a) : e === se ? P(t, i) : e === ue && L(t, i))
                }

                function R(e, t) {
                    try {
                        t(function(t) {
                            C(e, t)
                        }, function(t) {
                            L(e, t)
                        })
                    } catch (n) {
                        L(e, n)
                    }
                }

                function x(e) {
                    return new ge(this, e).promise
                }

                function U(e) {
                    function t(e) {
                        C(i, e)
                    }

                    function n(e) {
                        L(i, e)
                    }
                    var r = this,
                        i = new r(y);
                    if (!K(e)) return L(i, new TypeError("You must pass an array to race.")), i;
                    for (var a = e.length, o = 0; i._state === oe && a > o; o++) j(r.resolve(e[o]), void 0, t, n);
                    return i
                }

                function V(e) {
                    var t = this,
                        n = new t(y);
                    return L(n, e), n
                }

                function H() {
                    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                }

                function B() {
                    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                }

                function $(e) {
                    this._id = he++, this._state = void 0, this._result = void 0, this._subscribers = [], y !== e && ("function" != typeof e && H(), this instanceof $ ? R(this, e) : B())
                }

                function F(e, t) {
                    this._instanceConstructor = e, this.promise = new e(y), Array.isArray(t) ? (this._input = t, this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? P(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && P(this.promise, this._result))) : L(this.promise, this._validationError())
                }

                function q() {
                    var e;
                    if ("undefined" != typeof i) e = i;
                    else if ("undefined" != typeof self) e = self;
                    else try {
                        e = Function("return this")()
                    } catch (t) {
                        throw new Error("polyfill failed because global object is unavailable in this environment")
                    }
                    var n = e.Promise;
                    (!n || "[object Promise]" !== Object.prototype.toString.call(n.resolve()) || n.cast) && (e.Promise = ve)
                }
                var G;
                G = Array.isArray ? Array.isArray : function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                };
                var z, Y, W, K = G,
                    Q = 0,
                    J = function(e, t) {
                        re[Q] = e, re[Q + 1] = t, Q += 2, 2 === Q && (Y ? Y(v) : W())
                    },
                    X = "undefined" != typeof window ? window : void 0,
                    Z = X || {},
                    ee = Z.MutationObserver || Z.WebKitMutationObserver,
                    te = "undefined" != typeof e && "[object process]" === {}.toString.call(e),
                    ne = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                    re = new Array(1e3);
                W = te ? l() : ee ? f() : ne ? p() : void 0 === X ? g() : h();
                var ie = _,
                    ae = m,
                    oe = void 0,
                    se = 1,
                    ue = 2,
                    ce = new I,
                    le = new I,
                    de = x,
                    fe = U,
                    pe = V,
                    he = 0,
                    ve = $;
                $.all = de, $.race = fe, $.resolve = ae, $.reject = pe, $._setScheduler = u, $._setAsap = c, $._asap = J, $.prototype = {
                    constructor: $,
                    then: ie,
                    "catch": function(e) {
                        return this.then(null, e)
                    }
                };
                var ge = F;
                F.prototype._validationError = function() {
                    return new Error("Array Methods must be provided an Array")
                }, F.prototype._enumerate = function() {
                    for (var e = this.length, t = this._input, n = 0; this._state === oe && e > n; n++) this._eachEntry(t[n], n)
                }, F.prototype._eachEntry = function(e, t) {
                    var n = this._instanceConstructor,
                        r = n.resolve;
                    if (r === ae) {
                        var i = w(e);
                        if (i === ie && e._state !== oe) this._settledAt(e._state, t, e._result);
                        else if ("function" != typeof i) this._remaining--, this._result[t] = e;
                        else if (n === ve) {
                            var a = new n(y);
                            A(a, e, i), this._willSettleAt(a, t)
                        } else this._willSettleAt(new n(function(t) {
                            t(e)
                        }), t)
                    } else this._willSettleAt(r(e), t)
                }, F.prototype._settledAt = function(e, t, n) {
                    var r = this.promise;
                    r._state === oe && (this._remaining--, e === ue ? L(r, n) : this._result[t] = n), 0 === this._remaining && P(r, this._result)
                }, F.prototype._willSettleAt = function(e, t) {
                    var n = this;
                    j(e, void 0, function(e) {
                        n._settledAt(se, t, e)
                    }, function(e) {
                        n._settledAt(ue, t, e)
                    })
                };
                var _e = q,
                    me = {
                        Promise: ve,
                        polyfill: _e
                    };
                n(307).amd ? (r = function() {
                    return me
                }.call(t, n, t, a), !(void 0 !== r && (a.exports = r))) : "undefined" != typeof a && a.exports ? a.exports = me : "undefined" != typeof this && (this.ES6Promise = me), _e()
            }).call(this)
        }).call(t, n(233), function() {
            return this
        }(), n(24)(e))
    }, function(e, t) {}, function(e, t) {
        e.exports = function() {
            throw new Error("define cannot be used indirect")
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e, t, n, r) {
            var i = !1,
                a = function(t) {
                    var r = e.getChannel(),
                        i = n.getState().playback.duration,
                        a = e.getCurrentTime();
                    if (!r && (0, s["default"])(i) && !e.getPaused()) {
                        var u = o(a, t, y, i, e.getEnded());
                        u && e.setCurrentTime(u)
                    }
                },
                o = function(e, t, n, r, i) {
                    var a = i ? r + t : e + t;
                    return n > a ? n : a > r ? null : a
                };
            t.setAttribute("tabindex", r.tabindex || -1), t.addEventListener("keydown", function(t) {
                var n, r = t.which || t.keyCode || t.charCode;
                if (r === l && (i = !0), r === d) {
                    var o = e.getPaused();
                    o ? e.play() : e.pause()
                } else if (r === f) e.setMuted(!1);
                else if (r === p) e.setMuted(!0);
                else if (r === h) n = e.getVolume(), n = Math.min(n + c.volumeStepAmount, 1), e.setVolume(n);
                else if (r === v) n = e.getVolume(), n = Math.max(n - c.volumeStepAmount, 0), e.setVolume(n);
                else if (i && r === m) {
                    var s = e.getFullscreen();
                    e.setFullscreen(!s)
                } else if (r === _) a(c.hotkeySeekAmount);
                else {
                    if (r !== g) return;
                    a(-c.hotkeySeekAmount)
                }
                t.preventDefault()
            }), t.addEventListener("keyup", function(e) {
                var t = e.which || e.keyCode || e.charCode;
                t === l && (i = !1)
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PlayerHotkeys = a;
        var o = n(215),
            s = i(o),
            u = n(88),
            c = r(u),
            l = 17,
            d = 32,
            f = 33,
            p = 34,
            h = 38,
            v = 40,
            g = 37,
            _ = 39,
            m = 70,
            y = .01
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e, t, r, i, a, o, u) {
            var I = void 0,
                D = void 0,
                R = void 0,
                x = void 0,
                U = void 0,
                V = void 0,
                H = void 0,
                B = void 0,
                F = void 0,
                q = void 0,
                G = void 0,
                z = void 0,
                Y = void 0,
                W = void 0,
                K = void 0,
                Q = void 0,
                J = void 0,
                X = void 0,
                Z = void 0,
                ee = void 0,
                te = function() {
                    var k = (0, s["default"])(u, {
                        showInfo: u.channelInfo,
                        branding: !0,
                        devcaptions: !1
                    }, {
                        showInfo: !0
                    });
                    $(t).addClass("player"), $(t).append(n(344)), o.dispatch((0, P.initializeCaptionsSettings)()), I = new l.PlayerUIState(t, i), D = new f.PlayerUIInfo(e, t, i, o, k), R = new p.PlayerUISeek(e, t, o), x = new h.PlayerUIStats(t, i, o), U = new v.PlayerUIUpnext(e, t, i), ee = new g.PlayerUIRecommendations(e, t, o), V = new _.PlayerUILeaveDialog(e, t, r, o, k), H = new w.PlayerUILang(t, o), B = new m.PlayerUISubscribeOverlay(t, i), F = new y.PlayerUIResume(e, i, o, k), G = new A.PlayerUISeekBarPopup(t), q = new b.PlayerUISeekBarMarkers(e, t, i, o, G), z = new C.PlayerUIThumbnailPreviews(t, i, o, G), Y = new E.PlayerUIMutedSegments(t, i, o), K = new O.AgeRestrictionOverlay(t, e, o), Q = new S.PlayerUIControlsDisplay(e, t), J = new d.PlayerUIControls(e, t, i, o, Q, a, k), Z = new T.PlayerUISettings(e, t, i, o, r, Q, k);
                    var M = new j.ClipGenerator(i, window.open.bind(window), window.location.origin);
                    X = new L.PlayerUIClipsEnabler(t, o, c, M), ne(k), $(t).attr("data-initializing", !0), e.addEventListener(N.PLAYER_INIT, function() {
                        $(t).attr("data-initializing", !1)
                    })
                },
                ne = function(e) {
                    var n = void 0;
                    n = e.devcaptions ? Promise.resolve("v2") : o.getState().experiments.get(M.CAPTIONS), n.then(function(e) {
                        "v2" === e && (W = new k.PlayerUIClosedCaption(o, t)), $(t).attr("data-captions", e)
                    })
                };
            this.destroy = function() {
                I.destroy(), D.destroy(), R.destroy(), x.destroy(), U.destroy(), ee.destroy(), V.destroy(), H.destroy(), B.destroy(), F.destroy(), q.destroy(), G.destroy(), z.destroy(), Y.destroy(), Q.destroy(), J.destroy(), K.destroy(), Z.destroy(), X.destroy(), W && W.destroy(), ee.destroy()
            }, te()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PlayerUI = a;
        var o = n(1),
            s = i(o),
            u = n(175),
            c = r(u),
            l = n(310),
            d = n(312),
            f = n(313),
            p = n(314),
            h = n(315),
            v = n(316),
            g = n(317),
            _ = n(319),
            m = n(320),
            y = n(321),
            b = n(324),
            E = n(325),
            w = n(326),
            k = n(327),
            T = n(329),
            S = n(331),
            A = n(334),
            C = n(335),
            O = n(340),
            P = n(286),
            L = n(341),
            j = n(343),
            M = n(161),
            I = n(97),
            N = r(I)
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PlayerUIState = void 0;
        var o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            s = n(101),
            u = n(311);
        t.PlayerUIState = function(e) {
            function t(e, n) {
                r(this, t);
                var a = i(this, Object.getPrototypeOf(t).call(this));
                return a._root = e, a._state = n, a._state.addEventListener(s.EVENT_STATE_UPDATE, a.handleEvent.bind(a)), a.subscribe(n._stateStore, ["online"], a.handleEvent.bind(a)), a
            }
            return a(t, e), o(t, [{
                key: "handleEvent",
                value: function() {
                    $(this._root).attr({
                        "data-paused": this._state.playback === s.PLAYBACK_PAUSED,
                        "data-ended": this._state.playback === s.PLAYBACK_ENDED,
                        "data-loading": this._state.isLoading,
                        "data-online": this._state._stateStore.getState().online
                    })
                }
            }]), t
        }(u.UIStateSubscriber)
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.UIStateSubscriber = void 0;
        var i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            a = n(190),
            o = "unsub_" + Date.now();
        t.UIStateSubscriber = function() {
            function e() {
                r(this, e), this[o] = []
            }
            return i(e, [{
                key: "subscribe",
                value: function(e, t, n) {
                    this[o].push((0, a.subscribe)(e, t, n))
                }
            }, {
                key: "destroy",
                value: function() {
                    this[o].forEach(function(e) {
                        return e()
                    })
                }
            }]), e
        }()
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e, t, n, r, i, a, o) {
            function u() {
                return (0, E.subscribe)(r, ["playback"], function(e, t) {
                    (e.playback.volume !== t.playback.volume || e.playback.muted !== t.playback.muted) && N(e.playback)
                })
            }
            var d = void 0,
                p = void 0,
                v = [],
                _ = function() {
                    var e = o;
                    (0, l.isTwitchEmbed)() || (e = (0, s["default"])(e, {
                        branding: !0
                    })), w(), T(e), i.showControls(h.initialControlsDelay), $(t).attr("data-branding", e.branding), $(t).attr("data-theatre", !1), $(t).attr("data-showtheatre", e.showtheatre), N(r.getState().playback), U(), I(), v.push(u()), n.addEventListener(y.EVENT_STATE_UPDATE, C)
                },
                w = function() {
                    e.addEventListener(S.PLAYING, j), e.addEventListener(k.CASTING_CHANGE, U), e.addEventListener(k.THEATRE_CHANGE, R), e.addEventListener(S.SEEKING, x)
                },
                T = function(n) {
                    n.player !== f.PLAYER_FRONTPAGE && $(t).on("dblclick", ".js-control-fullscreen-overlay", function(e) {
                        e.preventDefault(), L()
                    }), $(t).on("click", ".js-control-playpause-button", O), $(t).on("click", ".js-control-play-button", O), $(t).on("click", ".js-control-fullscreen", L), $(t).on("click", ".js-control-theatre", D), $(t).on("click", ".js-control-volume", P), $(t).on("click", ".js-chromecast-button", function() {
                        var t = e.getCasting();
                        "available" === t ? e.startCast() : e.stopCast()
                    }), $(t).on("click", ".js-player-alert__close", function() {
                        $(this).closest(".js-player-alert").attr("data-active", !1)
                    }), $(t).on("click", ".js-meta-url", function() {
                        e.pause()
                    }), $(".js-volume-slider", t).slider({
                        range: "min",
                        value: 100,
                        min: 0,
                        max: 100,
                        slide: function(t, n) {
                            var r = e.getMuted();
                            r && e.setMuted(!1);
                            var i = n.value / 100;
                            e.setVolume(i)
                        },
                        start: function() {
                            d = !0, p = e.getVolume()
                        },
                        stop: function(e, t) {
                            d = !1;
                            var n = t.value / 100;
                            n > 0 && (p = null)
                        }
                    }), $(".js-volume-slider .ui-slider-handle").attr("tabindex", "-1"), $(t).on("click", ".js-popout-player", function(e) {
                        e.preventDefault(), V()
                    }), $(t).on("click", ".js-player-product-close", function(e) {
                        e.preventDefault(), H()
                    });
                    var i = r.getState().experiments.get(b.HTML5_TOGGLE);
                    i.then(function(e) {
                        A.BackendMseDevelopment.canPlay() && ($(".js-menu-html5", t).attr("data-enabled", "yes" === e ? !0 : !1), $(t).on("click", ".js-html5-slider", M))
                    })
                },
                C = function() {
                    $(t).attr("data-fullscreen", n.canFullScreen() ? n.isFullScreen() : "disabled")
                },
                O = function() {
                    e.getEnded() || e.getPaused() ? e.play() : e.pause()
                },
                P = function() {
                    var t = e.getMuted();
                    t && p ? e.setVolume(p) : e.setMuted(!t)
                },
                L = function() {
                    a.setFullScreen(!n.isFullScreen())
                },
                j = function() {
                    $(".js-quality", t).val(e.getQuality())
                },
                M = function() {
                    var t = e.getBackend();
                    if ("flash" === t) {
                        var n = e.getSupportedBackends();
                        t = n.filter(function(e) {
                            return "mseDev" === e
                        })[0]
                    } else t = "flash";
                    e.setBackend(t), I()
                },
                I = function() {
                    var n = e.getBackend(),
                        r = "flash" === n ? "off" : "on";
                    $(".js-html5-slider", t).attr("data-value", r)
                },
                N = function(e) {
                    var n = e.volume,
                        r = e.muted;
                    if ($(t).attr("data-muted", r || 0 === n), !d) {
                        var i = r ? 0 : n;
                        $(".js-volume-slider", t).slider("value", 100 * i)
                    }
                },
                D = function() {
                    var t = e.getTheatre();
                    e.setTheatre(!t)
                },
                R = function() {
                    var n = e.getTheatre();
                    $(t).attr("data-theatre", !n), i.setHovering(!1), i.showControls(h.hoverControlsDelay)
                },
                x = function() {
                    i.showControls(h.hoverControlsDelay)
                },
                U = function() {
                    var n = e.getCasting();
                    if ("error" === n && (n = "available"), $(t).attr("data-casting", n), "connected" === n) {
                        var r = e.getCastDevice();
                        r = (0, c["default"])(r) ? r : "Chromecast", $(".js-chromecast-device", t).text(r)
                    }
                    "connected" === n || "connecting" === n ? ($(t).attr("data-chromecast", "true"), i.showControls()) : ($(t).attr("data-chromecast", "false"), i.showControls(h.hoverControlsDelay))
                },
                V = function() {
                    var t = {};
                    t.volume = e.getVolume();
                    var n = e.getChannel(),
                        r = e.getVideo();
                    if (n) t.channel = n;
                    else {
                        t.video = r;
                        var i = e.getCurrentTime();
                        t.time = m.toURLString(i)
                    }
                    e.pause();
                    var a = h.popoutSize.width,
                        o = h.popoutSize.height,
                        s = h.playerHost + "/?" + g.toString(t),
                        u = "width=" + a + ",height=" + o;
                    u += ",toolbar=no,menubar=no,scrollbars=no,location=no,status=no", window.open(s, "_blank", u)
                },
                H = function() {
                    $(".js-player-product-overlay", t).attr("data-active", !1)
                };
            this.destroy = function() {
                $(t).off("click"), $(t).off("dblclick"), v.forEach(function(e) {
                    return e()
                })
            }, _()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PlayerUIControls = a;
        var o = n(50),
            s = i(o),
            u = n(33),
            c = i(u),
            l = n(200),
            d = n(199),
            f = r(d),
            p = n(88),
            h = r(p),
            v = n(211),
            g = r(v),
            _ = n(212),
            m = r(_),
            y = n(101),
            b = n(161),
            E = n(190),
            w = n(97),
            k = r(w),
            T = n(98),
            S = r(T),
            A = n(223)
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function i(e, t, n, r, i) {
            var a = Promise.reject();
            a.then(null, function() {
                return null
            });
            var u = [],
                l = void 0,
                f = void 0,
                m = !1,
                b = void 0,
                w = function() {
                    $(t).attr("data-showinfo", i.showInfo);
                    var n = i.player;
                    $(t).attr("data-playertype", n), n === o.PLAYER_FRONTPAGE && $(t).on("click", ".js-control-fullscreen-overlay", function() {
                        a.then(function(e) {
                            window.top.location.href = e
                        })
                    }), $(t).on("click", ".js-watch-twitch", function(t) {
                        t.preventDefault(), a.then(function(t) {
                            var n = e.getCurrentTime(),
                                r = t;
                            e.video && n && (r += "?t=" + p.toURLString(Math.round(n))), window.open(r, "_blank"), e.pause()
                        })
                    }), e.addEventListener(E.PLAYER_INIT, S), e.addEventListener(y.ENDED, M), e.addEventListener(E.IS_SPECTRE, A), e.addEventListener(y.LOADED_DATA, C), e.addEventListener(y.PLAYING, O), e.addEventListener(y.ERROR, j), e.addEventListener(k.AD_START, P), u.push((0, _.subscribe)(r, ["viewercount"], function(e) {
                        var n = e.viewercount;
                        $(t).attr("data-viewers", n);
                        var i = Number(n).toLocaleString("en");
                        $(".js-meta-viewers", t).text(i), $(".js-viewers-label").text(r.getState().lang.translate(" viewer", {
                            count: n
                        }))
                    })), u.push((0, _.subscribe)(r, ["stream"], function(e) {
                        var n = e.stream;
                        switch (n.contentType) {
                            case v.CONTENT_MODE_LIVE:
                                (0, s.channelInfo)(n.channel).then(I), a = Promise.resolve((0, s.channelUrl)(n.channel));
                                break;
                            case g.CONTENT_MODE_VOD:
                                (0, s.videoInfo)(n.videoId).then(function(e) {
                                    (0, s.channelInfo)(e.channel.name).then(I), e.preview && (f = e.preview.replace("320x240", T), D()), $(".js-meta-title", t).text(e.title)
                                }), a = (0, s.videoInfo)(n.videoId).then(function(e) {
                                    return (0, s.videoUrl)(e.channel.name, n.videoId)
                                })
                        }
                        a.then(function(e) {
                            $(".js-meta-url", t).attr("href", e)
                        })
                    })), u.push((0, _.subscribe)(r, ["screen"], function(e) {
                        var n = e.screen;
                        $(t).attr("data-screen", n[0])
                    })), u.push((0, _.subscribe)(r, ["online"], function(e) {
                        var t = e.online;
                        t && L()
                    })), u.push((0, _.subscribe)(r, ["streamMetadata"], function(e) {
                        var t = e.streamMetadata;
                        t.preview && (f = t.preview.template.replace("{width}x{height}", T), D())
                    }))
                },
                S = function() {
                    e.error && j()
                },
                A = function(e) {
                    b = e, $(t).attr("data-playlist", b)
                },
                C = function() {
                    m = !0
                },
                O = function() {
                    R()
                },
                P = function() {
                    R()
                },
                L = function() {
                    var n = e.getChannel(),
                        r = b,
                        i = m;
                    (0, s.channelInfo)(n).then(function(e) {
                        return (0, s.offlinePlaylistInfo)(e._id)
                    }).then(function(e) {
                        i && !r && e.enabled && $(t).attr("data-playlist", "pending")
                    })
                },
                j = function() {
                    var n = r.getState().lang.translate(e.error);
                    $(".js-player-error", t).text(n), $(t).attr("data-error", !0)
                },
                M = function() {
                    var n = e.getChannel();
                    n && (0, s.channelInfo)(n).then(function(e) {
                        return (0, s.offlinePlaylistInfo)(e._id)
                    }).then(function(e) {
                        m && !b && e.enabled ? $(t).attr("data-playlist", "pending") : ($(t).attr("data-playlist", !1), N(), $(t).attr("data-loading", !1))
                    })
                },
                I = function(n) {
                    var r = e.getChannel();
                    l = n.video_banner;
                    var i = e.getEnded();
                    if (i && N(), $(".js-meta-name", t).text(n.display_name), $(".js-meta-picture", t).attr("src", n.logo || null), $(t).attr({
                            "data-channel": r || null,
                            "data-video": e.getVideo() || null,
                            "data-game": r ? n.game : null
                        }), (0, s.channelInfo)(r).then(function(e) {
                            return (0, s.offlinePlaylistInfo)(e._id)
                        }).then(function(e) {
                            $(t).attr({
                                "data-playlist": e.active
                            })
                        }), r) {
                        $(".js-meta-title", t).text(n.status);
                        var a = d.gamePath + "/" + encodeURIComponent(n.game);
                        $(".js-meta-game", t).text(n.game).attr("href", a)
                    }
                },
                N = function() {
                    var n = e.getChannel();
                    l && n && $(".js-offline-banner", t).css("background-image", "url('" + l + "')")
                },
                D = function() {
                    var n = e.getPaused() || e.getReadyState() === c.HAVE_NOTHING;
                    (r.getState().stream === h.NullContentStream || !e.getAutoplay() && n) && ($(t).attr("data-background", !0), $(".js-video-background-banner", t).css("background-image", "url('" + f + "')"))
                },
                R = function() {
                    $(t).attr("data-background", !1)
                };
            this.destroy = function() {
                $(t).off("click"), u.forEach(function(e) {
                    return e()
                }), u = null
            }, w()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PlayerUIInfo = i;
        var a = n(199),
            o = r(a),
            s = n(157),
            u = n(174),
            c = r(u),
            l = n(88),
            d = r(l),
            f = n(212),
            p = r(f),
            h = n(285),
            v = n(57),
            g = n(194),
            _ = n(190),
            m = n(98),
            y = r(m),
            b = n(97),
            E = r(b),
            w = n(96),
            k = r(w),
            T = "1280x720"
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e, t, n) {
            var r = void 0,
                i = void 0,
                a = [],
                o = function() {
                    $(".js-seek-slider", t).slider({
                        range: "min",
                        value: 0,
                        min: 0,
                        max: 0,
                        stop: function(t, n) {
                            var i = n.value / 1e3;
                            e.setCurrentTime(i), r = !1
                        },
                        slide: function() {
                            r = !0
                        },
                        create: function() {
                            $(this).find(".ui-slider-handle").unbind("keydown")
                        }
                    }), $(t).on("mousemove", ".js-seek-slider", l), e.addEventListener("loadedmetadata", u), e.addEventListener(d.PAUSE, m), e.addEventListener(d.PLAYING, m), e.addEventListener(d.WAITING, m), e.addEventListener(d.TIME_UPDATE, m), e.addEventListener(p.BUFFER_CHANGE, b), a.push((0, h.subscribe)(n, ["playback"], function(e, t) {
                        var n = e.playback,
                            r = t.playback;
                        n.duration !== r.duration && y()
                    }))
                },
                u = function() {
                    i = e.getChannel()
                },
                l = function(e) {
                    var r = $(this).offset(),
                        i = e.pageX - r.left,
                        a = i / $(this).width();
                    a > 1 ? a = 1 : 0 > a && (a = 0);
                    var o = "",
                        u = n.getState().playback.duration;
                    if ((0, s["default"])(u)) {
                        var l = a * u;
                        o = c.toString(l, !1)
                    }
                    $(".js-slider-tip-container", t).css({
                        left: i + "px"
                    }), $(".js-slider-tip", t).attr("data-tip", o)
                },
                f = null,
                v = function E() {
                    var r = 0,
                        i = e.getCurrentTime(),
                        a = n.getState().playback.duration;
                    if ((0, s["default"])(a) && i > a && (i = a), (0, s["default"])(i)) {
                        var o = c.toString(i, !1);
                        $(".js-seek-currenttime", t).text(o), r = 1e3 * (Math.ceil(i) - i), 0 >= r && (r = 1)
                    }
                    r = Math.max(r, 16), f = setTimeout(E, r)
                },
                g = null,
                _ = function() {
                    var i = function() {
                            if (!r) {
                                var n = e.getCurrentTime();
                                (0, s["default"])(n) && $(".js-seek-slider", t).slider("value", 1e3 * n)
                            }
                        },
                        a = 0,
                        o = n.getState().playback.duration;
                    if ((0, s["default"])(o)) {
                        var u = $(t).width();
                        a = 1e3 * o / u
                    }
                    a = Math.max(a, 16), i(), g = setInterval(i, a)
                },
                m = function() {
                    if (clearTimeout(f), clearInterval(g), !i) {
                        var t = n.getState().playback.duration;
                        (0, s["default"])(t) && (e.getPaused() || (v(), _()))
                    }
                },
                y = function() {
                    var e = n.getState().playback.duration;
                    if ((0, s["default"])(e)) {
                        var r = c.toString(e, !1);
                        $(".js-seek-totaltime", t).text(r), $(".js-seek-slider", t).slider("option", "max", 1e3 * e)
                    }
                    m(), b()
                },
                b = function() {
                    var r = n.getState().playback.duration,
                        i = e.getBuffered();
                    if (i.length && (0, s["default"])(r)) {
                        var a = i.end(0),
                            o = 100 * a / r;
                        o > 100 && (o = 100), $(".js-seek-buffer", t).css("width", o + "%")
                    }
                };
            this.destroy = function() {
                $(t).off("mousemove"), a.forEach(function(e) {
                    return e()
                }), clearTimeout(f), clearInterval(g)
            }, o()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PlayerUISeek = a;
        var o = n(215),
            s = i(o),
            u = n(212),
            c = r(u),
            l = n(98),
            d = r(l),
            f = n(97),
            p = r(f),
            h = n(190)
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PlayerUIStats = void 0;
        var i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            a = n(101),
            o = n(190);
        t.PlayerUIStats = function() {
            function e(t, n, i) {
                var s = this;
                r(this, e), this._state = n, this._stateStore = i, this._root = t, $(this._root).on("click", ".js-stats-toggle", function(e) {
                    e.preventDefault(), s.toggleStats()
                }), $(this._root).on("click", ".js-stats-close", function(e) {
                    e.preventDefault(), s.toggleStats()
                }), this._state.addEventListener(a.EVENT_STATE_UPDATE, this.handleEvent.bind(this)), this._unsubscribeStore = (0, o.subscribe)(this._stateStore, ["stream"], this.onStreamUpdate.bind(this))
            }
            return i(e, [{
                key: "onStreamUpdate",
                value: function(e) {
                    var t = e.stream;
                    $(this._root).attr("data-content-stream", t.contentType)
                }
            }, {
                key: "handleEvent",
                value: function() {
                    var e = this._state.stats;
                    $(".js-stat-buffer-size", this._root).text(e.bufferSize), $(".js-stat-display-resolution", this._root).text(e.displayResolution), $(".js-stat-skipped-frames", this._root).text(e.skippedFrames), $(".js-stat-fps", this._root).text(e.fps), $(".js-stat-hls-latency-broadcaster", this._root).text(e.hlsLatencyBroadcaster), $(".js-stat-hls-latency-encoder", this._root).text(e.hlsLatencyEncoder), $(".js-stat-memory-usage", this._root).text(e.memoryUsage), $(".js-stat-playback-rate", this._root).text(e.playbackRate), $(".js-stat-player-volume", this._root).text(e.playerVolume), $(".js-stat-video-resolution", this._root).text(e.videoResolution)
                }
            }, {
                key: "toggleStats",
                value: function() {
                    var e = $(".js-playback-stats", this._root),
                        t = $(".js-stats-toggle-text", this._root),
                        n = "on" !== e.attr("data-state");
                    e.attr("data-state", n ? "on" : "off"), t.text(n ? "Hide Video Stats" : "Show Video Stats")
                }
            }, {
                key: "destroy",
                value: function() {
                    $(this._root).off("click"), this._unsubscribeStore()
                }
            }]), e
        }()
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function i(e, t, n) {
            var r = void 0,
                i = void 0,
                s = void 0,
                c = void 0,
                h = void 0,
                v = void 0,
                g = void 0,
                _ = void 0,
                m = void 0,
                y = void 0,
                b = void 0,
                E = void 0,
                w = {},
                k = void 0,
                T = void 0,
                S = function() {
                    e.addEventListener(u.OFFLINE, O), e.addEventListener(u.QUALITY_CHANGE, R), e.addEventListener(u.SEGMENT_CHANGE, x), e.addEventListener(l.PAUSE, M), e.addEventListener(u.IS_SPECTRE, L), e.addEventListener(u.ONLINE, C), e.addEventListener(l.WAITING, P), n.addEventListener(o.EVENT_STATE_UPDATE, A)
                },
                A = function() {},
                C = function() {
                    k && j(), k = !1, e.load()
                },
                O = function() {
                    j()
                },
                P = function() {
                    j()
                },
                L = function(e) {
                    k = e, k && H()
                },
                j = function() {
                    clearTimeout(h), clearTimeout(c), clearTimeout(g), clearTimeout(v)
                },
                M = function() {
                    j()
                },
                I = function() {
                    $(".js-transition", t).attr("data-stage", "0")
                },
                N = function() {
                    $(t).attr("data-transition", !1)
                },
                D = function() {
                    if (w = {}, e.quality && b && b.playhead)
                        for (var t = b.playhead.vods, n = 0; n < t.length; n++) {
                            var r = t[n].transition_segment;
                            if (r) {
                                var i = r.uris[e.quality];
                                w[i] = n
                            }
                        }
                },
                R = function() {
                    D()
                },
                x = function(e) {
                    var n = e.name;
                    if (!isNaN(w[n])) {
                        _ = w[n], q(), G();
                        var i = b.playhead.vods[_].transition_segment;
                        r = 1e3 * i.remaining_seconds, r >= d && (c = setTimeout(Y, r - d)), $(t).attr("data-transition", !0), setTimeout(I, r + f), setTimeout(N, r + f + p), v = setTimeout(U, r), clearTimeout(h), clearTimeout(g)
                    }
                },
                U = function() {
                    F(), z(), V(), G()
                },
                V = function() {
                    clearTimeout(h);
                    var e = 1e3 * b.playhead.vods[_].duration;
                    h = setTimeout(U, e), g = setTimeout(I, e)
                },
                H = function() {
                    N(), B()
                },
                B = function() {
                    var t = e.getChannel();
                    i = (0, a.channelInfo)(t), i.then(function(e) {
                        (e || e._id) && (0, a.offlinePlaylistInfo)(e._id).then(function(e) {
                            b = e, D(), y = b.playhead.vods.length, _ = b.playhead.active_vod_index, T = b.playhead.vods[_].id;
                            var t = b.playhead.remaining_seconds_in_active_vod;
                            z(), m = _ === y - 1 ? 0 : _ + 1;
                            var n = b.playhead.vods[m].id;
                            s = (0, a.videoInfo)("v" + n), s.then(function(e) {
                                E = e
                            }), v = setTimeout(U, 1e3 * t)
                        })
                    })
                },
                F = function() {
                    _ = _ === y - 1 ? 0 : _ + 1, q()
                },
                q = function() {
                    m = _ === y - 1 ? 0 : _ + 1
                },
                G = function() {
                    var e = b.playhead.vods[m].id;
                    (0, a.videoInfo)("v" + e).then(function(e) {
                        e && (E = e)
                    })
                },
                z = function() {
                    T = b.playhead.vods[_].id, (0, a.videoInfo)("v" + T).then(function(e) {
                        e && $(".js-currentvod-title", t).text(e.title)
                    })
                },
                Y = function() {
                    $(".js-next-video-title", t).text(E.title), $(".js-next-video-thumbnail", t).attr("src", E.preview), $(".js-transition", t).attr("data-stage", "1")
                };
            this.destroy = function() {}, S()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PlayerUIUpnext = i;
        var a = n(157),
            o = n(101),
            s = n(97),
            u = r(s),
            c = n(98),
            l = r(c),
            d = 6e3,
            f = 3500,
            p = 2e3
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PlayerUIRecommendations = void 0;
        var o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            s = n(311),
            u = n(161),
            c = n(318),
            l = n(300),
            d = n(98),
            f = 30;
        t.PlayerUIRecommendations = function(e) {
            function t(e, n, a) {
                r(this, t);
                var o = i(this, Object.getPrototypeOf(t).call(this));
                return o.$root = n, o._stateStore = a, o.subscribe(o._stateStore, ["online"], o.onOffline.bind(o)), o.subscribe(o._stateStore, ["recommendations"], o.onRecommendations.bind(o)), o.$template = $(".js-recommended-stream", o.$root), $(".js-recommendations-overlay", o.$root).empty(), $(".js-recommendations-overlay", o.$root).on("click", ".js-recommended-stream", o.onSelect.bind(o)), e.addEventListener(d.ENDED, o.onEnded.bind(o)), o
            }
            return a(t, e), o(t, [{
                key: "onOffline",
                value: function(e) {
                    var t = this,
                        n = e.online,
                        r = this._stateStore.getState(),
                        i = r.experiments;
                    i.get(u.IN_PLAYER_RECOMMENDATIONS).then(function(e) {
                        "no" === e || n || t._stateStore.dispatch((0, c.fetchRecommendedVODs)(10))
                    })
                }
            }, {
                key: "onRecommendations",
                value: function(e) {
                    var t = this,
                        n = e.recommendations;
                    $(".js-recommendations-overlay", this.$root).html(n.map(function(e, n) {
                        var r = t.$template.clone();
                        return r.attr("data-index", n), r.find(".js-recommended-stream__thumbnail").attr("src", e.thumbnails[0].url), r.find(".js-recommended-stream__title").text(e.title), r.find(".js-recommended-stream__time").text(e.created_at), r
                    }))
                }
            }, {
                key: "onSelect",
                value: function(e) {
                    var t = parseInt($(e.currentTarget).attr("data-index"), 10);
                    this._stateStore.dispatch((0, c.selectRecommendedVOD)(t))
                }
            }, {
                key: "destroy",
                value: function() {
                    $(".js-recommendations-overlay", this.$root).off("click")
                }
            }, {
                key: "onEnded",
                value: function() {
                    var e = this;
                    this._stateStore.dispatch((0, l.pushScreen)(l.VOD_RECOMMENDATION_SCREEN)), setTimeout(function() {
                        return e._stateStore.dispatch((0, l.popScreen)())
                    }, 1e3 * f)
                }
            }]), t
        }(s.UIStateSubscriber)
    }, function(e, t, n) {
        "use strict";

        function r() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? 10 : arguments[0];
            return function(t, n) {
                return (0, s.krakenRequest)("channels/" + n().stream.channel + "/videos?limit=" + e).then(function(e) {
                    t(i(e.videos))
                })
            }
        }

        function i(e) {
            return {
                type: u,
                videos: e
            }
        }

        function a() {
            return i([])
        }

        function o(e) {
            return function(t, n) {
                var r = n(),
                    i = r.recommendations,
                    a = r.analyticsTracker,
                    o = i[e];
                a.trackEvent("content_recommendation_click", {
                    destination_vod_id: o._id,
                    recommendation_position: e,
                    recommendation_content: "recent"
                })
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ACTION_VODS_DISPLAYED = t.ACTION_CHOOSE_RECOMMENDED_VOD = t.ACTION_SET_RECOMMENDED_VODS = void 0, t.fetchRecommendedVODs = r, t.clearRecommendedVODs = a, t.selectRecommendedVOD = o;
        var s = n(157),
            u = t.ACTION_SET_RECOMMENDED_VODS = "set VOD recommendations";
        t.ACTION_CHOOSE_RECOMMENDED_VOD = "select VOD recommendation", t.ACTION_VODS_DISPLAYED = "send vods displayed tracking event"
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e, t, n, r, i) {
            var a, o, u, d = function() {
                    e.addEventListener(f.LOADSTART, _), e.addEventListener(f.ENDED, m), window.addEventListener("beforeunload", y), e.getChannel() && _()
                },
                p = function(e) {
                    var t = s["default"].getItem("leaveData");
                    if (t) return t[e]
                },
                h = function(e, t) {
                    var n = s["default"].getItem("leaveData");
                    n || (n = {}), n[e] = t, s["default"].setItem("leaveData", n)
                },
                v = function() {
                    if (a) {
                        var e = p(a);
                        if (e) {
                            var t = (new Date).getTime() / 1e3;
                            e.time + c.leaveDialog.refreshTimeout < t || n.trackEvent("page_reload", {
                                storm_detected: e.stormDetected,
                                leave_dialog: e.stormDialog,
                                refresh_warning: e.stormWarning
                            })
                        }
                    }
                },
                g = function() {
                    if (!a) return !1;
                    if (!e.getEnded()) return !1;
                    if (!o || o < i.leaveDialogViewerThreshold) return !1;
                    var t = (new Date).getTime() / 1e3;
                    return !u || u + c.leaveDialog.sinceEnded < t ? !1 : !0
                },
                _ = function() {
                    a = e.getChannel(), o = null, u = null, v()
                },
                m = function() {
                    o = r.getState().viewercount, u = (new Date).getTime() / 1e3;
                    var e = g();
                    e && i.refreshWarningEnabled && b()
                },
                y = function(e) {
                    var t = g(),
                        n = t && i.leaveDialogEnabled;
                    return h(a, {
                        time: (new Date).getTime() / 1e3,
                        stormDetected: t,
                        stormDialog: n,
                        stormWarning: r.getState().screen === l.STORM_WARNING_SCREEN
                    }), n ? E(e) : void 0
                },
                b = function() {
                    r.dispatch((0, l.pushScreen)(l.STORM_WARNING_SCREEN)), setTimeout(function() {
                        r.dispatch((0, l.popScreen)())
                    }, 1e3 * c.leaveDialog.warningDuration)
                },
                E = function(e) {
                    return n.trackEvent("page_leave_attempt", {
                        viewers: o
                    }), setTimeout(function() {
                        setTimeout(function() {
                            n.trackEvent("page_leave_cancel", {
                                viewers: o
                            })
                        }, 1e3)
                    }, 1), e.returnValue = c.leaveDialog.text, c.leaveDialog.text
                };
            this.destroy = function() {
                window.removeEventListener("beforeunload", y)
            }, d()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PlayerUILeaveDialog = a;
        var o = n(176),
            s = i(o),
            u = n(88),
            c = r(u),
            l = n(300),
            d = n(98),
            f = r(d)
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PlayerUISubscribeOverlay = void 0;
        var i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            a = n(101),
            o = n(88),
            s = n(299),
            u = "This video is only available to subscribers. Subscribe now to watch and support %s.";
        t.PlayerUISubscribeOverlay = function() {
            function e(t, n) {
                r(this, e), this._root = t, this._state = n, this._state.addEventListener(a.EVENT_STATE_UPDATE, this.handleEvent.bind(this)), $(".js-close-label", this._root).on("click", this.onClickCloseSubscribeOverlay.bind(this))
            }
            return i(e, [{
                key: "handleEvent",
                value: function() {
                    this._state.videoID && this._state.isVODRestricted() && this._showVODOverlay()
                }
            }, {
                key: "subscribeUrl",
                value: function(e) {
                    return o.twitchHost + "/" + e + "/subscribe?ref=chansub_overlay_subscribe"
                }
            }, {
                key: "_showVODOverlay",
                value: function() {
                    var e = this;
                    $(".js-player-product-overlay", this._root).attr("data-active", !0), $(".js-player-product-close", this._root).attr("data-active", !1), this._state.getVideoInfo(this._state.videoID).then(function(t) {
                        var n = e._state._stateStore.getState().lang.translate(u, {
                            replacements: {
                                "%s": t.channel.name
                            }
                        });
                        $(".js-player-product p", e._root).text(n), $(".js-player-product .purchase_button", e._root).attr("href", e.subscribeUrl(t.channel.name))
                    })
                }
            }, {
                key: "onClickCloseSubscribeOverlay",
                value: function() {
                    this._state._stateStore.dispatch((0, s.clearQualityRestrictedError)())
                }
            }, {
                key: "destroy",
                value: function() {}
            }]), e
        }()
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function s(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PlayerUIResume = void 0;
        var u = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            c = n(322),
            l = i(c),
            d = n(88),
            f = n(101),
            p = n(98),
            h = r(p),
            v = n(323),
            g = n(157),
            _ = n(57),
            m = n(194),
            y = n(311);
        t.PlayerUIResume = function(e) {
            function t(e, n, r, i) {
                a(this, t);
                var s = o(this, Object.getPrototypeOf(t).call(this));
                return s._state = n, s._stateStore = r, s._player = e, s._options = i, s._state.addEventListener(f.EVENT_PLAYER_UPDATE, s.handleEvent.bind(s)), s.subscribe(r, ["playback"], function(e, t) {
                    var n = e.playback,
                        r = t.playback;
                    0 !== n.duration && n.duration !== r.duration && s._onChangedDuration()
                }), s
            }
            return s(t, e), u(t, [{
                key: "handleEvent",
                value: function(e) {
                    switch (e) {
                        case h.TIME_UPDATE:
                            this._state.isLoading || this._onTimeUpdate()
                    }
                }
            }, {
                key: "_seekToResumeTime",
                value: function(e) {
                    var t = this._stateStore.getState(),
                        n = t.resumeWatch,
                        r = t.stream,
                        i = t.playback,
                        a = n.times[r.videoId],
                        o = n.streamTimes[e.broadcast_id],
                        s = i.duration;
                    if ((0, l["default"])(a) && a < s - d.cancelResumeAmount) this._player.setCurrentTime(a);
                    else if ((0, l["default"])(o) && o < s - d.cancelResumeAmount) {
                        var u = Math.max(0, o - d.livestreamResumePushback);
                        this._player.setCurrentTime(u)
                    }
                    this._stateStore.dispatch((0, v.cancelLivestreamResumeTime)(e.broadcast_id))
                }
            }, {
                key: "_onChangedDuration",
                value: function() {
                    var e = this;
                    if (!this._options.time && this._stateStore.getState().stream instanceof m.VODContentStream) {
                        var t = (0, g.videoInfo)(this._state.videoID);
                        t.then(function(t) {
                            e._seekToResumeTime(t)
                        })
                    }
                }
            }, {
                key: "_onTimeUpdate",
                value: function() {
                    var e = void 0;
                    if (this._stateStore.getState().stream instanceof _.LiveContentStream) {
                        var t = this._player.getVideoInfo();
                        e = this._stateStore.getState().online ? (0, v.setLivestreamResumeTime)(t.broadcast_id, t.stream_time_offset + this._state.currentTime) : (0, v.cancelLivestreamResumeTime)(t.broadcast_id)
                    } else {
                        var n = this._stateStore.getState().playback.duration;
                        if (0 === n) return;
                        e = n - this._state.currentTime > d.cancelResumeAmount ? (0, v.setVodResumeTime)(this._state.videoID, this._state.currentTime) : (0, v.cancelVodResumeTime)(this._state.videoID)
                    }
                    this._stateStore.dispatch(e)
                }
            }]), t
        }(y.UIStateSubscriber)
    }, function(e, t, n) {
        function r(e) {
            return "number" == typeof e || i(e) && s.call(e) == a
        }
        var i = n(31),
            a = "[object Number]",
            o = Object.prototype,
            s = o.toString;
        e.exports = r
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function i() {
            return function(e, t) {
                e({
                    type: _,
                    times: v.get(L, {}),
                    watch: v.get(j, {}),
                    streamTimes: v.get(M, {}),
                    backendTime: 0,
                    userId: null,
                    initTime: t().analytics.playSessionStartTime
                })
            }
        }

        function a(e) {
            return function(t) {
                t({
                    type: k,
                    userId: e
                })
            }
        }

        function o(e, t, n, r) {
            var i = $.ajax({
                method: "PUT",
                url: g.resumewatchingHost + "user-video?id=" + e,
                xhrFields: {
                    withCredentials: !0
                },
                data: {
                    video_id: t,
                    position: Math.floor(n),
                    type: r
                },
                timeout: g.apiTimeout
            });
            return Promise.resolve(i)
        }

        function s(e, t) {
            return function(n, r) {
                var i = r(),
                    a = i.resumeWatch,
                    s = i.window;
                s.Date.now() - a.initTime > A && a.userId && Math.abs(t - a.backendTime) > T && (o(a.userId, e, t, O), n({
                    type: w,
                    backendTime: Math.floor(t)
                }))
            }
        }

        function u(e, t) {
            return function(n, r) {
                var i = r(),
                    a = i.resumeWatch,
                    s = i.window;
                s.Date.now() - a.initTime > C && a.userId && Math.abs(t - a.backendTime) > S && (o(a.userId, e, t, P), n({
                    type: w,
                    backendTime: Math.floor(t)
                }))
            }
        }

        function c(e, t) {
            return function(n, r) {
                n(s(e, t)), n({
                    type: y,
                    videoID: e,
                    time: t
                }), p(r())
            }
        }

        function l(e) {
            return function(t, n) {
                t(s(e, 0)), t({
                    type: m,
                    videoID: e
                }), p(n())
            }
        }

        function d(e, t) {
            return function(n, r) {
                n(u(e, t)), n({
                    type: E,
                    broadcastID: e,
                    time: t
                }), p(r())
            }
        }

        function f(e) {
            return function(t, n) {
                t(u(e, 0)), t({
                    type: b,
                    broadcastID: e
                }), p(n())
            }
        }

        function p(e) {
            v.set(L, e.resumeWatch.times), v.set(j, e.resumeWatch.watch), v.set(M, e.resumeWatch.streamTimes)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.TYPE_BACKEND_LIVESTREAM = t.TYPE_BACKEND_VOD = t.MIN_INIT_TIME_DIFF_LIVESTREAM_BACKEND_UPDATE = t.MIN_INIT_TIME_DIFF_VOD_BACKEND_UPDATE = t.MIN_TIME_DIFF_LIVESTREAM_BACKEND_UPDATE = t.MIN_TIME_DIFF_VOD_BACKEND_UPDATE = t.ACTION_VOD_SET_USER = t.ACTION_VOD_POST_BACKEND_TIME = t.ACTION_LIVESTREAM_SET_RESUME_TIME = t.ACTION_LIVESTREAM_CANCEL_RESUME = t.ACTION_VOD_SET_RESUME_TIME = t.ACTION_VOD_CANCEL_RESUME = t.ACTION_VOD_INIT_RESUME = void 0, t.initVodResume = i, t.setUser = a, t.setVodResumeTime = c, t.cancelVodResumeTime = l, t.setLivestreamResumeTime = d, t.cancelLivestreamResumeTime = f;
        var h = n(175),
            v = r(h),
            g = n(88),
            _ = t.ACTION_VOD_INIT_RESUME = "initialize vod resume",
            m = t.ACTION_VOD_CANCEL_RESUME = "cancel vod resume",
            y = t.ACTION_VOD_SET_RESUME_TIME = "set vod resume time",
            b = t.ACTION_LIVESTREAM_CANCEL_RESUME = "cancel livestream resume",
            E = t.ACTION_LIVESTREAM_SET_RESUME_TIME = "set livestream resume time",
            w = t.ACTION_VOD_POST_BACKEND_TIME = "post vod backend time",
            k = t.ACTION_VOD_SET_USER = "set user",
            T = t.MIN_TIME_DIFF_VOD_BACKEND_UPDATE = 20,
            S = t.MIN_TIME_DIFF_LIVESTREAM_BACKEND_UPDATE = 300,
            A = t.MIN_INIT_TIME_DIFF_VOD_BACKEND_UPDATE = 2e4,
            C = t.MIN_INIT_TIME_DIFF_LIVESTREAM_BACKEND_UPDATE = 6e4,
            O = t.TYPE_BACKEND_VOD = "vod",
            P = t.TYPE_BACKEND_LIVESTREAM = "live",
            L = "vodResumeTimes",
            j = "vodResumeWatcheds",
            M = "livestreamResumeTimes"
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PlayerUISeekBarMarkers = void 0;
        var a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            o = n(212),
            s = r(o),
            u = n(101),
            c = 148;
        t.PlayerUISeekBarMarkers = function() {
            function e(t, n, r, a, o) {
                var s = this;
                i(this, e), this._player = t, this._root = n, this._state = r, this._stateStore = a, this._popup = o, this._lastMarkers = [], this._dotsContainer = $(".js-marker-dots-container", this._root), this._state.addEventListener(u.EVENT_STATE_UPDATE, this.handleEvent.bind(this)), this._dotsContainer.on("mouseenter", ".js-marker-dot", function(e) {
                    var t = $(e.target),
                        n = parseFloat(t.css("left")) + .5 * parseFloat(t.css("width")) + parseFloat(t.css("margin-left")),
                        r = Number(t.attr("marker-index")),
                        i = s._state.getMarkers()[r];
                    s._popup.show(s._transformToPopupObject(i), n)
                }), this._dotsContainer.on("mouseleave", ".js-marker-dot", function() {
                    s._popup.hide()
                }), this._dotsContainer.on("click", ".js-marker-dot", function(e) {
                    e.stopPropagation();
                    var t = $(e.target);
                    s._player.setCurrentTime(parseFloat(t.attr("data-time")))
                })
            }
            return a(e, [{
                key: "handleEvent",
                value: function() {
                    if (this._updateDotsPassed(this._state.currentTime), this._lastMarkers !== this._state.getMarkers()) {
                        this._dotsContainer.empty(), this._lastMarkers = [];
                        var e = this._stateStore.getState().playback.duration;
                        e > 0 && (this._lastMarkers = this._state.getMarkers(), this._createDots(this._state.getMarkers(), e))
                    }
                }
            }, {
                key: "_createDots",
                value: function(e, t) {
                    var n = this;
                    if (0 !== e.length) {
                        var r = new Image;
                        r.src = e[0].imageURL;
                        var i = $("<span></span>").addClass("player-slider__marker-dot js-marker-dot");
                        this._dotsContainer.append(e.map(function(e, r) {
                            var a = i.clone().css("left", e.startTime / t * 100 + "%");
                            return a.attr("data-time", e.startTime), a.attr("marker-index", r), a.attr("data-passed", e.startTime <= n._state.currentTime), a
                        }))
                    }
                }
            }, {
                key: "_updateDotsPassed",
                value: function(e) {
                    $(".js-marker-dot", this._root).each(function(t, n) {
                        var r = $(n),
                            i = Number(r.attr("data-time")) <= e;
                        r.attr("data-passed", i)
                    })
                }
            }, {
                key: "_transformToPopupObject",
                value: function(e) {
                    var t = 1;
                    return e.thumbnail.width > 0 && (t = c / e.thumbnail.width), {
                        thumbOver: {
                            url: e.thumbnail.imageURL,
                            height: e.thumbnail.height * t,
                            width: e.thumbnail.width * t,
                            sheetWidth: e.thumbnail.width * e.thumbnail.cols * t,
                            x: e.thumbnail.x * t,
                            y: e.thumbnail.y * t
                        },
                        thumbUnder: {
                            url: "",
                            height: 0,
                            width: 0,
                            sheetWidth: 0,
                            x: 0,
                            y: 0
                        },
                        title: e.title,
                        info: e.info,
                        timestamp: s.toString(e.startTime, !1),
                        width: c
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    this._dotsContainer.off("mouseenter"), this._dotsContainer.off("mouseleave"), this._dotsContainer.off("click")
                }
            }]), e
        }()
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PlayerUIMutedSegments = void 0;
        var o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            s = n(101),
            u = n(88),
            c = n(311),
            l = $("<span></span>").addClass("player-slider__muted");
        t.PlayerUIMutedSegments = function(e) {
            function t(e, n, a) {
                r(this, t);
                var o = i(this, Object.getPrototypeOf(t).call(this));
                return o._root = e, o._state = n, o._stateStore = a, o._segmentsContainer = $(".js-seek-slider .js-muted-segments-container", o._root), o._alertElement = $(".js-player-alert", o._root), o._state.addEventListener(s.EVENT_STATE_UPDATE, o.handleEvent.bind(o)), o.subscribe(a, ["playback"], function(e, t) {
                    e.playback.duration !== t.playback.duration && o._displayMutedSegments()
                }), o
            }
            return a(t, e), o(t, [{
                key: "handleEvent",
                value: function() {
                    0 !== this._state.getMutedSegments().length && 0 !== this._stateStore.getState().duration && 0 === this._segmentsContainer.children().length && (this._displayMutedSegments(), this._showAlert())
                }
            }, {
                key: "_displayMutedSegments",
                value: function() {
                    var e = this,
                        t = this._state.getMutedSegments().map(function(t) {
                            var n = e._stateStore.getState().playback.duration;
                            return l.clone().css({
                                width: 100 * t.duration / n + "%",
                                left: 100 * t.offset / n + "%"
                            })
                        });
                    this._segmentsContainer.empty().append(t)
                }
            }, {
                key: "_showAlert",
                value: function() {
                    this._alertElement.find(".js-player-alert__message").text(u.mutedSegmentsMessage), this._alertElement.attr("data-active", !0)
                }
            }, {
                key: "destroy",
                value: function() {}
            }]), t
        }(c.UIStateSubscriber)
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PlayerUILang = void 0;
        var o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            s = n(88),
            u = n(311);
        t.PlayerUILang = function(e) {
            function t(e, n) {
                r(this, t);
                var a = i(this, Object.getPrototypeOf(t).call(this));
                return a.$root = e, a.subscribe(n, ["lang"], a.localizeUI.bind(a)), a
            }
            return a(t, e), o(t, [{
                key: "localizeUI",
                value: function(e) {
                    var t = this,
                        n = e.lang,
                        r = function(e, r) {
                            $(e, t.$root).text(n.translate(r))
                        };
                    r(".js-live-label", "Live"), r(".js-offline-label", "Offline"), r(".js-playlist-label", "Playlist"), r(".js-mature-accept-label", "Start Watching"), r(".js-playing-on-label", "Playing on"), r(".js-close-label", "Close"), r(".js-subscribe-label", "Subscribe"), r(".js-playlist-started-label", " has started a playlist."), r(".js-broadcast-down-label", "The broadcast is down."), r(".js-player-options-label", "Player Options"), r(".js-video-quality-label", "Video Quality:"), r(".js-popout-player", "Popout Player"), r(".js-stats-toggle", "Show Video Stats"), r(".js-copy-url", "Copy Video URL at Current Time"), r(".js-report-issue-label", "Report Playback Issue"), r(".js-select-label", "Select"), r(".js-audio-video-stutter-label", "Audio and video stutter"), r(".js-video-stutter-label", "Video stutters, but audio is fine"), r(".js-video-black-label", "Video is completely black or doesn't load"), r(".js-audio-video-desync-label", "Audio and video aren't synced"), r(".js-fullscreen-not-working-label", "Fullscreen playback doesn't work"), r(".js-ad-too-loud-label", "Advertisement can't be muted or is too loud"), r(".js-ad-too-often-label", "Advertisement has played too many times"), r(".js-submit-label", "Submit"), r(".js-report-thanks-label", "Thanks for your report"), r(".js-coming-up-label", "Coming Up"), r(".js-advertisement-label", "Advertisement"), r(".js-now-playing-label", "Now playing: "), r(".js-playing-label", "playing "), r(".js-for-label", "for"), r(".js-broadcast-reload-label", "The player will automatically reload when the broadcast is back."), r(".js-mature-warning-label", "The broadcaster indicated that the channel is intended for mature audiences."), r(".js-age-gate-warning-label", "You must be 21 to view this content. Please enter your date of birth."), r(".js-age-gate-failed-once-label", "Sorry, you must be over the age of 21 to view this content."), r(".js-age-gate-locked-out-label", "Sorry, you must be over the age of 21 to view this content."), r(".js-age-gate-submit", "Submit"), r(".js-player-alert__message", "Audio for portions of this video has been muted as it appears to contain copyrighted content owned or controlled by a third party."), r(".js-cc-label", "Closed Captioning"), r(".js-introducing-cc-label", "Click the CC button to enable closed captions and click the gear button to customize."), r(".js-introducing-cc-label-header", "Live Closed Captions"), r(".js-cc-modal-header", "Closed Caption Settings"), r(".js-cc-presets-tab", "Presets"), r(".js-cc-text-tab", "Text"), r(".js-cc-effects-tab", "Effects"), r(".js-cc-background-tab", "Background"), r(".js-cc-window-tab", "Window"), r(".js-cc-aa", "Aa"), r(".js-cc-font-label", "Font"), r('.js-cc-font-dropdown option[value="mono-serif"]', "Mono Serif"), r('.js-cc-font-dropdown option[value="prop-serif"]', "Serif"), r('.js-cc-font-dropdown option[value="mono-sans-serif"]', "Mono Sans-Serif"), r('.js-cc-font-dropdown option[value="prop-sans-serif"]', "Sans-Serif"), r('.js-cc-font-dropdown option[value="casual"]', "Casual"), r('.js-cc-font-dropdown option[value="cursive"]', "Cursive"), r('.js-cc-font-dropdown option[value="small-capitals"]', "Small Capitals"), r(".js-cc-position-label", "Position"), r('.js-cc-verticalPosition-dropdown option[value="bottom"]', "Bottom"), r('.js-cc-verticalPosition-dropdown option[value="top"]', "Top"), r(".js-cc-justification-label", "Alignment"), r('.js-cc-textAlign-dropdown option[value="center"]', "Center"), r('.js-cc-textAlign-dropdown option[value="left"]', "Left"), r('.js-cc-textAlign-dropdown option[value="right"]', "Right"), r(".js-cc-style-label", "Style"), r(".js-cc-edge-label", "Effect"), r(".js-cc-color-label", "Color"), r(".js-cc-size-label", "Size"), r(".js-cc-font-size", "A"), r(".js-cc-opacity-label", "Opacity"), r(".js-cc-opacity-solid", "Solid"), r(".js-cc-opacity-translucent", "Translucent"), r(".js-cc-opacity-semitransparent", "Semi-Transparent"), r(".js-cc-opacity-transparent", "Transparent"), r(".js-cc-opacity-flashing", "Flashing"), r(".js-cc-learn-more", "Learn more"), r(".js-clips-menu-title", "Introducing Clips"), r(".js-clips-menu-text", "Capture your favorite moments with a single click! Hit the Clips button below and be the first to start sharing."), r(".js-clips-learn-more", "Learn more");
                    var i = Number($(".js-meta-viewers").text());
                    i && ($(".js-viewers-label").text = n.translate(" viewer", {
                        count: i
                    }));
                    var a = function(e, r, i) {
                        $(e, t.$root).attr(r, n.translate(i))
                    };
                    a(".js-control-playpause-button .js-pause-button .js-tip", "data-tip", "Pause"), a(".js-control-playpause-button .js-play-button .js-tip", "data-tip", "Play"), a(".js-control-volume .js-mute .js-control-tip", "data-tip", "Mute"), a(".js-control-volume .js-unmute .js-control-tip", "data-tip", "Unmute"), a(".js-menu-button .js-tip", "data-tip", "Options"), a(".js-theatre-button .js-control-tip", "data-tip", "Theater Mode"), a(".js-exit-theatre-button .js-control-tip", "data-tip", "Exit Theater Mode"), a(".js-control-cc .js-tip", "data-tip", "Captions"), a(".js-control-fullscreen .js-fullscreen .js-control-tip", "data-tip", "Fullscreen"), a(".js-control-clips .js-tip", "data-tip", "Clip"), a(".js-control-fullscreen .js-exit-fullscreen .js-control-tip", "data-tip", "Exit Fullscreen"), a(".js-chromecast-btuton .js-tip", "data-tip", "Chromecast"), a(".js-watch-twitch .js-tip", "data-tip", "Watch on Twitch"), a(".js-font-increment-tip", "data-tip", "Increase Size"), a(".js-font-decrement-tip", "data-tip", "Decrease Size"), $(".js-quality", this.$root).children("option").each(function(e, t) {
                        var r = s.qualityText[$(t).val()];
                        $(t).text(n.translate(r))
                    })
                }
            }]), t
        }(u.UIStateSubscriber)
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PlayerUIClosedCaption = void 0;
        var o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            s = n(50),
            u = i(s),
            c = n(58),
            l = i(c),
            d = n(44),
            f = i(d),
            p = n(328),
            h = i(p),
            v = n(286),
            g = n(290),
            _ = r(g),
            m = n(190),
            y = ["top", "bottom", "textAlign", "fontSize", "lineHeight"];
        t.PlayerUIClosedCaption = function() {
            function e(t, n) {
                a(this, e), this._stateStore = t, this._root = n, this._initDefaults(), this._initHandlers(), this.unsubscribe = this._subscribe()
            }
            return o(e, [{
                key: "_initDefaults",
                value: function() {
                    var e = this._captionsState();
                    this.showCCAvailability(e.available), this.applyCCStyle(), this.setCCIconStatus(e.enabled)
                }
            }, {
                key: "_initHandlers",
                value: function() {
                    $(".js-control-cc", this._root).on("click", this.toggleCCStatus.bind(this))
                }
            }, {
                key: "_subscribe",
                value: function() {
                    var e = this;
                    return (0, m.subscribe)(this._stateStore, ["captions"], function(t, n) {
                        var r = t.captions,
                            i = n.captions;
                        r.available !== i.available && e.showCCAvailability(r.available), r.enabled !== i.enabled && (e.setCCIconStatus(r.enabled), e.showCaption(r)), r.data !== i.data && e.showCaption(r), (r.preset !== i.preset || r.style !== i.style) && e.applyCCStyle()
                    })
                }
            }, {
                key: "_captionsState",
                value: function() {
                    return this._stateStore.getState().captions
                }
            }, {
                key: "applyCCStyle",
                value: function() {
                    var e = this._stateStore.getState().captions.style,
                        t = _.calculateRGBA(_.fontColorMap[e.fontColorName].fontColorValue, _.opacityMap[e.fontOpacity].opacityValue),
                        n = {
                            color: t,
                            animation: _.opacityMap[e.fontOpacity].animation
                        },
                        r = _.calculateRGBA(_.backgroundColorMap[e.backgroundColorName].backgroundColorValue, _.opacityMap[e.backgroundOpacity].opacityValue),
                        i = (0, u["default"])({}, e, n, _.fontMap[e.font], _.edgeMap[e.edge], _.verticalPositionMap[e.verticalPosition], _.fontUnderlineMap[e.fontUnderline], _.fontItalicMap[e.fontItalic], _.fontBoldMap[e.fontBold], _.alignmentMap[e.alignment], {
                            backgroundColor: r
                        }),
                        a = (0, l["default"])(i, y);
                    $(".js-player-captions", this._root).css(a);
                    var o = (0, f["default"])(i, y);
                    $(".js-player-captions-container").css(o);
                    var s = _.calculateRGBA(_.backgroundColorMap[e.windowColorName].backgroundColorValue, _.opacityMap[e.windowOpacity].opacityValue);
                    $(".js-player-captions-window").css({
                        backgroundColor: s
                    }), this.setFontSizeStatus(e.fontSize)
                }
            }, {
                key: "setFontSizeStatus",
                value: function(e) {
                    var t = $(".js-cc-font-size", this._root);
                    t.filter('[value="increment"]').prop("disabled", e === _.fontSizeMap.max), t.filter('[value="decrement"]').prop("disabled", e === _.fontSizeMap.min)
                }
            }, {
                key: "setCCIconStatus",
                value: function(e) {
                    $(".js-player-icon-cc", this._root).toggle(e), $(".js-player-icon-cc-deactivated", this._root).toggle(!e)
                }
            }, {
                key: "showCaption",
                value: function(e) {
                    $(".js-player-captions", this._root).html(this.stringifyCaption(e))
                }
            }, {
                key: "showCCAvailability",
                value: function(e) {
                    $(".js-control-cc", this._root).toggle(e), $(".js-cc-open-modal", this._root).toggle(e)
                }
            }, {
                key: "stringifyCaption",
                value: function(e) {
                    if (e.available && e.enabled && e.data) {
                        var t = [];
                        e.data.data.forEach(function(e) {
                            t[e.row] || (t[e.row] = []), t[e.row].push(e["char"])
                        });
                        var n = t.map(function(e) {
                            return e.join("")
                        });
                        return (0, h["default"])(n).join("<br />")
                    }
                    return ""
                }
            }, {
                key: "toggleCCStatus",
                value: function() {
                    var e = this._captionsState().enabled;
                    this._stateStore.dispatch((0, v.setCaptionsEnabled)(!e))
                }
            }, {
                key: "destroy",
                value: function() {
                    $(this._root).off("click"), this.unsubscribe()
                }
            }]), e
        }()
    }, function(e, t) {
        function n(e) {
            for (var t = -1, n = e ? e.length : 0, r = 0, i = []; ++t < n;) {
                var a = e[t];
                a && (i[r++] = a)
            }
            return i
        }
        e.exports = n
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PlayerUISettings = void 0;
        var s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            u = n(50),
            c = i(u),
            l = n(88),
            d = r(l),
            f = n(330),
            p = i(f),
            h = n(212),
            v = r(h),
            g = n(299),
            _ = n(286),
            m = n(190),
            y = n(290),
            b = n(97),
            E = r(b),
            w = n(98),
            k = r(w),
            T = "This video quality is only available to subscribers. Subscribe now to watch and support %s.",
            S = "custom",
            A = ["font", "fontOpacity", "alignment", "verticalPosition", "backgroundOpacity", "windowOpacity"],
            C = ["fontColorName", "edge", "backgroundColorName", "windowColorName"],
            O = ["fontUnderline", "fontBold", "fontItalic"];
        t.PlayerUISettings = function() {
            function e(t, n, r, i, a, s, u) {
                o(this, e), this._player = t, this._root = n, this._state = r, this._stateStore = i, this._analytics = a, this._controlsDisplay = s, this._options = u, this._unsubscribes = [], this._unsubscribes.push(this._subscribePlayback()), this._initEvents(), this._initDom(), this._initCustomCaptionsForm()
            }
            return s(e, [{
                key: "_initEvents",
                value: function() {
                    this._player.addEventListener(k.LOADSTART, this.onLoadStart.bind(this)), this._player.addEventListener(k.LOADED_METADATA, this.onLoadedMetadata.bind(this)), this._player.addEventListener(k.SEEKED, this.onSeeked.bind(this)), this._player.addEventListener(E.QUALITY_CHANGE, this.onQualityChange.bind(this)), this._player.addEventListener(E.QUALITIES_CHANGE, this.onQualitiesChange.bind(this)), this._player.addEventListener(E.RESTRICTED, this.onRestricted.bind(this))
                }
            }, {
                key: "_initDom",
                value: function() {
                    var e = this;
                    $(this._root).on("change", ".js-quality", function(t) {
                        e._manualQualityChange = !0;
                        var n = $(t.currentTarget).val();
                        e._stateStore.dispatch((0, g.setQuality)(n)), e.hideMenu()
                    }), $(this._root).on("click", ".js-menu-button", this.toggleMenu.bind(this)), new p["default"](".js-copy-url", {
                        text: function() {
                            var t = v.toURLString(e._player.getCurrentTime()),
                                n = e._player.getVideoURL() + "?t=" + t;
                            return e.hideMenu(), n
                        }
                    }), $(this._root).on("click", function(t) {
                        $(t.target).closest(".js-menu, .js-menu-button").length || e.hideMenu()
                    }), $(window).on("blur", this.hideMenu.bind(this)), $(this._root).on("submit", ".js-video-issue-form", this.submitVideoIssueReport.bind(this)), $(".js-cc-preset", this._root).on("click", this.selectPreset.bind(this)), $(".js-control-cc", this._root).on("mouseenter", this.onHoverClosedCaptionIcon.bind(this)), $(".js-control-cc", this._root).on("click", this.closeCCIntroModal.bind(this)), $(".js-menu-button-settings", this._root).on("click", this.closeCCIntroModal.bind(this)), $(".js-cc-learn-more", this._root).on("click", this.onClickLearnMore.bind(this)), $(".js-cc-info-modal-dismiss", this._root).on("click", this.closeCCIntroModal.bind(this)), $(".js-cc-open-modal", this._root).on("click", this.openCCModal.bind(this)), $(".js-cc-modal-container", this._root).on("click", function(e) {
                        e.target === this && $(this).attr("data-state", "closed")
                    }), $(".js-cc-custom-modal-dismiss", this._root).on("click", function() {
                        $(this).closest(".js-cc-modal-container").attr("data-state", "closed")
                    }), $(".player-tabs__item", this._root).on("click", function(e) {
                        $(".player-tabs__item--active").removeClass("player-tabs__item--active");
                        var t = $(e.target).closest(".player-tabs__item");
                        t.addClass("player-tabs__item--active");
                        var n = t.attr("data-tab");
                        t.closest(".js-cc-modal").attr("data-tab-selected", n)
                    }), this.setCurrentPreset(), this._unsubscribes.push(this._subscribeCaptions())
                }
            }, {
                key: "_subscribePlayback",
                value: function() {
                    var e = this;
                    return (0, m.subscribe)(this._stateStore, ["playback"], function(t, n) {
                        var r = t.playback,
                            i = n.playback;
                        i.quality !== r.quality && (e._player.getPaused() || $(".js-quality-display-contain", e._root).attr("data-q", "loading")), i.restrictedQualityError !== r.restrictedQualityError && r.restrictedQualityError === !0 && e.onRestricted()
                    })
                }
            }, {
                key: "_subscribeCaptions",
                value: function() {
                    var e = this;
                    return (0, m.subscribe)(this._stateStore, ["captions"], function(t, n) {
                        var r = t.captions,
                            i = n.captions;
                        r.preset !== i.preset && (e.setCurrentPreset(), e.setCurrentStyles())
                    })
                }
            }, {
                key: "_initCustomCaptionsForm",
                value: function() {
                    var e = this,
                        t = this._stateStore.getState().captions.style;
                    C.forEach(function(n) {
                        e._setRadioAttribute(n, t)
                    }), A.forEach(function(n) {
                        e._setDropdownAttribute(n, t)
                    }), O.forEach(function(n) {
                        e._setCheckboxAttribute(n, t)
                    }), $(".js-cc-modal", this._root).on("change", ".js-cc-dropdown", function(t) {
                        var n = $(t.target);
                        e._stateStore.dispatch((0, _.setCaptionsPreset)(S, a({}, n.attr("name"), n.val())))
                    }), $(".js-cc-modal", this._root).on("click", ".js-cc-radio", function(t) {
                        var n = $(t.target);
                        e._stateStore.dispatch((0, _.setCaptionsPreset)(S, a({}, n.attr("name"), n.val())))
                    }), $(".js-cc-modal", this._root).on("click", ".js-cc-checkbox", function(t) {
                        var n = $(t.target);
                        e._stateStore.dispatch((0, _.setCaptionsPreset)(S, a({}, n.attr("name"), n.prop("checked") ? n.val() : y.presetMap["white-on-black"][n.attr("name")])))
                    }), $(".js-cc-font-size", this._root).on("click", function(t) {
                        var n = y.fontSizeMap[$(t.target).val()],
                            r = e._stateStore.getState().captions.style.fontSize,
                            i = r + parseInt(n, 10);
                        e._stateStore.dispatch((0, _.setCaptionsPreset)(S, {
                            fontSize: i
                        }))
                    })
                }
            }, {
                key: "openCCModal",
                value: function() {
                    $(".js-cc-modal-container", this._root).attr("data-state", "open"), this.hideMenu()
                }
            }, {
                key: "closeCCIntroModal",
                value: function() {
                    $(".js-cc-info-modal", this._root).attr("data-state", "closed")
                }
            }, {
                key: "setCurrentPreset",
                value: function() {
                    var e = this._stateStore.getState().captions.preset;
                    $(".js-cc-preset", this._root).each(function(t, n) {
                        var r = $(n).attr("data-preset") === e;
                        $(n).toggleClass("js-cc-preset-selected", r)
                    })
                }
            }, {
                key: "setCurrentStyles",
                value: function() {
                    var e = this,
                        t = this._stateStore.getState().captions.style;
                    A.forEach(function(n) {
                        e._setDropdownAttribute(n, t)
                    }), C.forEach(function(n) {
                        e._setRadioAttribute(n, t)
                    }), O.forEach(function(n) {
                        e._setCheckboxAttribute(n, t)
                    })
                }
            }, {
                key: "_setDropdownAttribute",
                value: function(e, t) {
                    $(".js-cc-dropdown", this._root).filter('[name="' + e + '"]').val(t[e])
                }
            }, {
                key: "_setRadioAttribute",
                value: function(e, t) {
                    $(".js-cc-radio", this._root).filter('[name="' + e + '"][value="' + t[e] + '"]').prop("checked", !0)
                }
            }, {
                key: "_setCheckboxAttribute",
                value: function(e, t) {
                    var n = $(".js-cc-checkbox", this._root).filter('[name="' + e + '"]'),
                        r = t[e] === n.val();
                    n.prop("checked", r)
                }
            }, {
                key: "onLoadStart",
                value: function() {
                    this.resetVideoIssueReport()
                }
            }, {
                key: "onLoadedMetadata",
                value: function() {
                    this.onQualitiesChange(), this.toggleCopyVODURLOption(Boolean(this._options.video))
                }
            }, {
                key: "onSeeked",
                value: function() {
                    this._manualQualityChange && this.onQualityChange()
                }
            }, {
                key: "onQualityChange",
                value: function() {
                    var e = this._stateStore.getState().playback.quality;
                    if (e !== this._previousQuality) {
                        this._previousQuality = e, $(".js-quality", this._root).val(e);
                        var t = this._stateStore.getState().lang.translate(d.qualityText[e] || e);
                        $(".js-quality-display", this._root).text(t);
                        var n = $(".js-quality-display-contain", this._root);
                        n.attr("data-q", "show"), setTimeout(function() {
                            n.attr("data-q", "hide")
                        }, d.qualityChangeDuration), this._controlsDisplay.showControls(d.qualityChangeDuration), this._manualQualityChange = !1
                    }
                }
            }, {
                key: "onQualitiesChange",
                value: function() {
                    for (var e = this._player.getQualities(), t = $(".js-quality", this._root).empty(), n = this._player.getQuality(), r = 0; r < e.length; r++) {
                        var i = e[r],
                            a = this._stateStore.getState().lang.translate(d.qualityText[i] || i);
                        $("<option>").val(i).text(a).appendTo(t)
                    }
                    t.val(n), t.prop("disabled", e.length < 2)
                }
            }, {
                key: "onRestricted",
                value: function() {
                    if (this._manualQualityChange) {
                        this.showLiveQualityChansubOverlay(), $(".js-quality", this._root).val(this._stateStore.getState().playback.quality);
                        var e = $(".js-quality-display-contain", this._root);
                        return void e.attr("data-q", "hide")
                    }
                    this.onQualityChange()
                }
            }, {
                key: "onHoverClosedCaptionIcon",
                value: function() {
                    this._state.getSeenCaptionsModal() || ($(".js-cc-info-modal").attr("data-state", "open"), this._state.setSeenCaptionsModal())
                }
            }, {
                key: "toggleMenu",
                value: function() {
                    var e = "open" === $(".js-menu", this._root).attr("data-state");
                    e ? this.hideMenu() : this.showMenu()
                }
            }, {
                key: "showMenu",
                value: function() {
                    $(".js-menu", this._root).attr("data-state", "open"), $(".js-menu-button", this._root).attr("data-state", "menu-open")
                }
            }, {
                key: "hideMenu",
                value: function() {
                    $(".js-menu", this._root).attr("data-state", "closed"), $(".js-menu-button", this._root).attr("data-state", "menu-closed")
                }
            }, {
                key: "onClickLearnMore",
                value: function() {
                    this.closeCCIntroModal();
                    var e = this._stateStore.getState().captions.learnMoreClicks;
                    this._stateStore.dispatch((0, _.setLearnMoreClicks)(e + 1))
                }
            }, {
                key: "selectPreset",
                value: function(e) {
                    var t = $(e.target).closest(".js-cc-preset").attr("data-preset");
                    this._stateStore.dispatch((0, _.setCaptionsPreset)(t, y.presetMap[t]))
                }
            }, {
                key: "submitVideoIssueReport",
                value: function(e) {
                    e.preventDefault();
                    var t = $(e.target).serializeArray(),
                        n = t.reduce(function(e, t) {
                            return e[t.name] = t.value, e
                        }, {});
                    if (n.issue) {
                        var r = {
                            issue: n.issue
                        };
                        r = (0, c["default"])(r, this._player.getVideoInfo()), this._analytics.trackEvent("vid_issue_report", r), $(".js-video-issue", this._root).attr("data-complete", !0), setTimeout(this.hideMenu, d.reportHideDelay)
                    }
                }
            }, {
                key: "resetVideoIssueReport",
                value: function() {
                    $(".js-video-issue", this._root).attr("data-complete", !1), $(".js-video-issue-form", this._root).get(0).reset()
                }
            }, {
                key: "toggleCopyVODURLOption",
                value: function(e) {
                    $(".js-copyurl-contain", this._root).attr("data-active", e)
                }
            }, {
                key: "showLiveQualityChansubOverlay",
                value: function() {
                    $(".js-player-product-overlay", this._root).attr("data-active", !0), $(".js-player-product-close", this._root).attr("data-active", !0);
                    var e = this._stateStore.getState().lang.translate(T);
                    e = e.replace("%s", this._options.channel), $(".js-player-product p", this._root).text(e), $(".js-player-product .purchase_button", this._root).attr("href", "http://www.twitch.tv/" + this._options.channel + "/subscribe?ref=chansub_overlay_subscribe")
                }
            }, {
                key: "destroy",
                value: function() {
                    $(this._root).off("click"), $(this._root).off("change"), $(this._root).off("submit"), $(window).off("blur"), this._unsubscribes.forEach(function(e) {
                        return e()
                    })
                }
            }]), e
        }()
    }, function(e, t, n) {
        var r, r;
        /*!
         * clipboard.js v1.5.8
         * https://zenorocha.github.io/clipboard.js
         *
         * Licensed MIT © Zeno Rocha
         */
        ! function(t) {
            e.exports = t()
        }(function() {
            return function e(t, n, i) {
                function a(s, u) {
                    if (!n[s]) {
                        if (!t[s]) {
                            var c = "function" == typeof r && r;
                            if (!u && c) return r(s, !0);
                            if (o) return o(s, !0);
                            var l = new Error("Cannot find module '" + s + "'");
                            throw l.code = "MODULE_NOT_FOUND", l
                        }
                        var d = n[s] = {
                            exports: {}
                        };
                        t[s][0].call(d.exports, function(e) {
                            var n = t[s][1][e];
                            return a(n ? n : e)
                        }, d, d.exports, e, t, n, i)
                    }
                    return n[s].exports
                }
                for (var o = "function" == typeof r && r, s = 0; s < i.length; s++) a(i[s]);
                return a
            }({
                1: [function(e, t, n) {
                    var r = e("matches-selector");
                    t.exports = function(e, t, n) {
                        for (var i = n ? e : e.parentNode; i && i !== document;) {
                            if (r(i, t)) return i;
                            i = i.parentNode
                        }
                    }
                }, {
                    "matches-selector": 5
                }],
                2: [function(e, t, n) {
                    function r(e, t, n, r, a) {
                        var o = i.apply(this, arguments);
                        return e.addEventListener(n, o, a), {
                            destroy: function() {
                                e.removeEventListener(n, o, a)
                            }
                        }
                    }

                    function i(e, t, n, r) {
                        return function(n) {
                            n.delegateTarget = a(n.target, t, !0), n.delegateTarget && r.call(e, n)
                        }
                    }
                    var a = e("closest");
                    t.exports = r
                }, {
                    closest: 1
                }],
                3: [function(e, t, n) {
                    n.node = function(e) {
                        return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
                    }, n.nodeList = function(e) {
                        var t = Object.prototype.toString.call(e);
                        return void 0 !== e && ("[object NodeList]" === t || "[object HTMLCollection]" === t) && "length" in e && (0 === e.length || n.node(e[0]))
                    }, n.string = function(e) {
                        return "string" == typeof e || e instanceof String
                    }, n.fn = function(e) {
                        var t = Object.prototype.toString.call(e);
                        return "[object Function]" === t
                    }
                }, {}],
                4: [function(e, t, n) {
                    function r(e, t, n) {
                        if (!e && !t && !n) throw new Error("Missing required arguments");
                        if (!s.string(t)) throw new TypeError("Second argument must be a String");
                        if (!s.fn(n)) throw new TypeError("Third argument must be a Function");
                        if (s.node(e)) return i(e, t, n);
                        if (s.nodeList(e)) return a(e, t, n);
                        if (s.string(e)) return o(e, t, n);
                        throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
                    }

                    function i(e, t, n) {
                        return e.addEventListener(t, n), {
                            destroy: function() {
                                e.removeEventListener(t, n)
                            }
                        }
                    }

                    function a(e, t, n) {
                        return Array.prototype.forEach.call(e, function(e) {
                            e.addEventListener(t, n)
                        }), {
                            destroy: function() {
                                Array.prototype.forEach.call(e, function(e) {
                                    e.removeEventListener(t, n)
                                })
                            }
                        }
                    }

                    function o(e, t, n) {
                        return u(document.body, e, t, n)
                    }
                    var s = e("./is"),
                        u = e("delegate");
                    t.exports = r
                }, {
                    "./is": 3,
                    delegate: 2
                }],
                5: [function(e, t, n) {
                    function r(e, t) {
                        if (a) return a.call(e, t);
                        for (var n = e.parentNode.querySelectorAll(t), r = 0; r < n.length; ++r)
                            if (n[r] == e) return !0;
                        return !1
                    }
                    var i = Element.prototype,
                        a = i.matchesSelector || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector || i.oMatchesSelector;
                    t.exports = r
                }, {}],
                6: [function(e, t, n) {
                    function r(e) {
                        var t;
                        if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) e.focus(), e.setSelectionRange(0, e.value.length), t = e.value;
                        else {
                            e.hasAttribute("contenteditable") && e.focus();
                            var n = window.getSelection(),
                                r = document.createRange();
                            r.selectNodeContents(e), n.removeAllRanges(), n.addRange(r), t = n.toString()
                        }
                        return t
                    }
                    t.exports = r
                }, {}],
                7: [function(e, t, n) {
                    function r() {}
                    r.prototype = {
                        on: function(e, t, n) {
                            var r = this.e || (this.e = {});
                            return (r[e] || (r[e] = [])).push({
                                fn: t,
                                ctx: n
                            }), this
                        },
                        once: function(e, t, n) {
                            function r() {
                                i.off(e, r), t.apply(n, arguments)
                            }
                            var i = this;
                            return r._ = t, this.on(e, r, n)
                        },
                        emit: function(e) {
                            var t = [].slice.call(arguments, 1),
                                n = ((this.e || (this.e = {}))[e] || []).slice(),
                                r = 0,
                                i = n.length;
                            for (r; i > r; r++) n[r].fn.apply(n[r].ctx, t);
                            return this
                        },
                        off: function(e, t) {
                            var n = this.e || (this.e = {}),
                                r = n[e],
                                i = [];
                            if (r && t)
                                for (var a = 0, o = r.length; o > a; a++) r[a].fn !== t && r[a].fn._ !== t && i.push(r[a]);
                            return i.length ? n[e] = i : delete n[e], this
                        }
                    }, t.exports = r
                }, {}],
                8: [function(e, t, n) {
                    "use strict";

                    function r(e) {
                        return e && e.__esModule ? e : {
                            "default": e
                        }
                    }

                    function i(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }
                    n.__esModule = !0;
                    var a = function() {
                            function e(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                }
                            }
                            return function(t, n, r) {
                                return n && e(t.prototype, n), r && e(t, r), t
                            }
                        }(),
                        o = e("select"),
                        s = r(o),
                        u = function() {
                            function e(t) {
                                i(this, e), this.resolveOptions(t), this.initSelection()
                            }
                            return e.prototype.resolveOptions = function() {
                                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                                this.action = e.action, this.emitter = e.emitter, this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = ""
                            }, e.prototype.initSelection = function() {
                                if (this.text && this.target) throw new Error('Multiple attributes declared, use either "target" or "text"');
                                if (this.text) this.selectFake();
                                else {
                                    if (!this.target) throw new Error('Missing required attributes, use either "target" or "text"');
                                    this.selectTarget()
                                }
                            }, e.prototype.selectFake = function() {
                                var e = this,
                                    t = "rtl" == document.documentElement.getAttribute("dir");
                                this.removeFake(), this.fakeHandler = document.body.addEventListener("click", function() {
                                    return e.removeFake()
                                }), this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[t ? "right" : "left"] = "-9999px", this.fakeElem.style.top = (window.pageYOffset || document.documentElement.scrollTop) + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, document.body.appendChild(this.fakeElem), this.selectedText = s["default"](this.fakeElem), this.copyText()
                            }, e.prototype.removeFake = function() {
                                this.fakeHandler && (document.body.removeEventListener("click"), this.fakeHandler = null), this.fakeElem && (document.body.removeChild(this.fakeElem), this.fakeElem = null)
                            }, e.prototype.selectTarget = function() {
                                this.selectedText = s["default"](this.target), this.copyText()
                            }, e.prototype.copyText = function() {
                                var e = void 0;
                                try {
                                    e = document.execCommand(this.action)
                                } catch (t) {
                                    e = !1
                                }
                                this.handleResult(e)
                            }, e.prototype.handleResult = function(e) {
                                e ? this.emitter.emit("success", {
                                    action: this.action,
                                    text: this.selectedText,
                                    trigger: this.trigger,
                                    clearSelection: this.clearSelection.bind(this)
                                }) : this.emitter.emit("error", {
                                    action: this.action,
                                    trigger: this.trigger,
                                    clearSelection: this.clearSelection.bind(this)
                                })
                            }, e.prototype.clearSelection = function() {
                                this.target && this.target.blur(), window.getSelection().removeAllRanges()
                            }, e.prototype.destroy = function() {
                                this.removeFake()
                            }, a(e, [{
                                key: "action",
                                set: function() {
                                    var e = arguments.length <= 0 || void 0 === arguments[0] ? "copy" : arguments[0];
                                    if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                                },
                                get: function() {
                                    return this._action
                                }
                            }, {
                                key: "target",
                                set: function(e) {
                                    if (void 0 !== e) {
                                        if (!e || "object" != typeof e || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                        this._target = e
                                    }
                                },
                                get: function() {
                                    return this._target
                                }
                            }]), e
                        }();
                    n["default"] = u, t.exports = n["default"]
                }, {
                    select: 6
                }],
                9: [function(e, t, n) {
                    "use strict";

                    function r(e) {
                        return e && e.__esModule ? e : {
                            "default": e
                        }
                    }

                    function i(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }

                    function a(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }

                    function o(e, t) {
                        var n = "data-clipboard-" + e;
                        if (t.hasAttribute(n)) return t.getAttribute(n)
                    }
                    n.__esModule = !0;
                    var s = e("./clipboard-action"),
                        u = r(s),
                        c = e("tiny-emitter"),
                        l = r(c),
                        d = e("good-listener"),
                        f = r(d),
                        p = function(e) {
                            function t(n, r) {
                                i(this, t), e.call(this), this.resolveOptions(r), this.listenClick(n)
                            }
                            return a(t, e), t.prototype.resolveOptions = function() {
                                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                                this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText
                            }, t.prototype.listenClick = function(e) {
                                var t = this;
                                this.listener = f["default"](e, "click", function(e) {
                                    return t.onClick(e)
                                })
                            }, t.prototype.onClick = function(e) {
                                var t = e.delegateTarget || e.currentTarget;
                                this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new u["default"]({
                                    action: this.action(t),
                                    target: this.target(t),
                                    text: this.text(t),
                                    trigger: t,
                                    emitter: this
                                })
                            }, t.prototype.defaultAction = function(e) {
                                return o("action", e)
                            }, t.prototype.defaultTarget = function(e) {
                                var t = o("target", e);
                                return t ? document.querySelector(t) : void 0
                            }, t.prototype.defaultText = function(e) {
                                return o("text", e)
                            }, t.prototype.destroy = function() {
                                this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                            }, t
                        }(l["default"]);
                    n["default"] = p, t.exports = n["default"]
                }, {
                    "./clipboard-action": 8,
                    "good-listener": 4,
                    "tiny-emitter": 7
                }]
            }, {}, [9])(9)
        })
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PlayerUIControlsDisplay = void 0;
        var a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            o = n(88),
            s = r(o),
            u = n(332),
            c = n(333);
        t.PlayerUIControlsDisplay = function() {
            function e(t, n) {
                var r = this;
                i(this, e), this._player = t, this._root = n, this._hovering = !1, this._hideControlsTimeout = null, this._mouseX = 0, this._mouseY = 0, $(this._root).on("mouseenter", ".js-controls-top, .js-controls-bottom", function() {
                    r.setHovering(!0)
                }), $(this._root).on("mouseleave", this.hideControls.bind(this)), $(this._root).on("mouseleave", ".js-controls-top, .js-controls-bottom", function() {
                    r.setHovering(!1)
                }), $(this._root).on("mousemove", function(e) {
                    (r._mouseX !== e.screenX || r._mouseY !== e.screenY) && (r._mouseX = e.screenX, r._mouseY = e.screenY, r.showControls(s.hoverControlsDelay))
                })
            }
            return a(e, [{
                key: "setHovering",
                value: function(e) {
                    (0, c.isTouchDevice)() || (this._hovering = e)
                }
            }, {
                key: "showControls",
                value: function(e) {
                    $(this._root).attr("data-controls", !0), e && (this._hideControlsTimeout = (0, u.extendTimeout)(this._hideControlsTimeout, this.hideControls.bind(this), e))
                }
            }, {
                key: "hideControls",
                value: function() {
                    if (!this._hovering && "open" !== $(".js-menu", this._root).attr("data-state")) {
                        var e = this._player.getCasting();
                        "connected" !== e && "connecting" !== e && $(this._root).attr("data-controls", !1)
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    $(this._root).off("mouseleave"), $(this._root).off("mouseenter"), $(this._root).off("mousemove")
                }
            }]), e
        }()
    }, function(e, t) {
        "use strict";

        function n(e, t, n) {
            this._estimate = n, this._handle = setTimeout(e, t)
        }

        function r(e, t, r) {
            var i;
            i = Date.now ? Date.now() : (new Date).getTime();
            var a = i + r;
            return e && e._estimate > a ? e : (e && clearTimeout(e._handle), new n(t, r, a))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.extendTimeout = r
    }, function(e, t) {
        "use strict";

        function n() {
            return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isTouchDevice = n
    }, function(e, t) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = 20;
        t.PlayerUISeekBarPopup = function() {
            function e(t) {
                n(this, e), this._root = t, this._$seekSlider = $(".js-seek-slider", this._root), this._$popupContainer = $(".js-popup-container", this._root), this._$popupInfo = $(".js-popup-info", this._root), this._$popupThumbOver = $(".js-popup-marker-thumbover", this._root), this._$popupThumbUnder = $(".js-popup-marker-thumbunder", this._root), this._$popupThumbWrapper = $(".js-popup-thumb-wrapper", this._root), this._$popupTimestamp = $(".js-popup-timestamp", this._root), this._$popupTitle = $(".js-popup-title", this._root), this._$popupArrow = $(".js-popup-arrow", this._root), $(".js-popup-container", this._root).on("mousemove", function(e) {
                    e.stopPropagation()
                }), $(".js-popup-arrow", this._root).on("mousemove", function(e) {
                    e.stopPropagation()
                }), $(".js-slider-tip-container", this._root).on("mousemove", function(e) {
                    e.stopPropagation()
                })
            }
            return r(e, [{
                key: "show",
                value: function(e, t) {
                    this._$popupTitle.text(e.title), this._$popupInfo.html(e.info), this._$popupTimestamp.text(e.timestamp), this._$popupThumbOver.css({
                        height: e.thumbOver.height,
                        width: e.thumbOver.width,
                        "background-size": e.thumbOver.sheetWidth + "px",
                        "background-image": "url(" + e.thumbOver.url + ")",
                        "background-position": "-" + e.thumbOver.x + "px -" + e.thumbOver.y + "px"
                    }), this._$popupThumbUnder.css({
                        height: e.thumbUnder.height,
                        width: e.thumbUnder.width,
                        "background-size": e.thumbUnder.sheetWidth + "px",
                        "background-image": "url(" + e.thumbUnder.url + ")",
                        "background-position": "-" + e.thumbUnder.x + "px -" + e.thumbUnder.y + "px"
                    }), this._$popupArrow.css("left", this._getLeftOffset(t, i)), this._$popupContainer.css("width", e.width);
                    var n = this._getLeftOffset(t, parseFloat(this._$popupContainer.css("width")));
                    this._$popupContainer.css("left", n), this._$popupThumbWrapper.css("width", e.thumbOver.width), this._$popupThumbWrapper.css("height", e.thumbOver.height), this._$popupThumbWrapper.css("max-height", e.thumbOver.height), this._$seekSlider.attr("show-popup", !0)
                }
            }, {
                key: "hide",
                value: function() {
                    this._$seekSlider.attr("show-popup", !1)
                }
            }, {
                key: "_getLeftOffset",
                value: function(e, t) {
                    var n = parseFloat(this._$seekSlider.css("width")),
                        r = e - .5 * t;
                    return Math.max(0, Math.min(r, n - t))
                }
            }, {
                key: "destroy",
                value: function() {}
            }]), e
        }()
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t, n) {
            var r = Math.floor(e.count * (t / n)),
                i = r % (e.hq.cols * e.hq.rows),
                a = g / e.hq.width;
            return {
                thumbOver: {
                    url: e.hq.URLs[Math.floor(r / (e.hq.cols * e.hq.rows))],
                    height: e.hq.height * a,
                    width: e.hq.width * a,
                    sheetWidth: e.hq.width * e.hq.cols * a,
                    x: i % e.hq.cols * e.hq.width * a,
                    y: Math.floor(i / e.hq.cols) * e.hq.height * a
                },
                thumbUnder: {
                    url: e.lq.URLs[0],
                    height: e.hq.height * a,
                    width: e.hq.width * a,
                    sheetWidth: e.hq.width * e.lq.cols * a,
                    x: r % e.lq.cols * e.hq.width * a,
                    y: Math.floor(r / e.lq.cols) * e.hq.height * a
                },
                title: "",
                info: "",
                timestamp: h.toString(t, !1),
                width: g
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PlayerUIThumbnailPreviews = void 0;
        var s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            u = n(101),
            c = n(336),
            l = i(c),
            d = n(339),
            f = i(d),
            p = n(212),
            h = r(p),
            v = 50,
            g = 148;
        t.PlayerUIThumbnailPreviews = function() {
            function e(t, n, r, i) {
                var o = this;
                a(this, e), this._root = t, this._state = n, this._stateStore = r, this._image = new Image, this._popup = i, this._seekSlider = $(".js-seek-slider", this._root), this._controlsBottom = $(".js-controls-bottom", this._root), this._lastPreviews = this._state.getPreviews(), this._preloadLowQualityThumbnail(), this._controlsBottom.on("mousemove", ".js-seek-slider", (0, l["default"])(this._onSeekBarMouseMoveHandler.bind(this), v)), this._controlsBottom.on("mouseout", ".js-seek-slider", function() {
                    return o._popup.hide()
                }), this._state.addEventListener(u.EVENT_STATE_UPDATE, this.handleEvent.bind(this))
            }
            return s(e, [{
                key: "handleEvent",
                value: function() {
                    this._lastPreviews !== this._state.getPreviews() && (this._lastPreviews = this._state.getPreviews(), this._preloadLowQualityThumbnail())
                }
            }, {
                key: "_onSeekBarMouseMoveHandler",
                value: function(e) {
                    if (!$(e.target).hasClass("js-marker-dot")) {
                        var t = this._stateStore.getState().playback.duration;
                        if (!(0 >= t) && this._state.getPreviews().count > 0 && !f["default"].msedge && !f["default"].msie) {
                            var n = e.clientX - this._seekSlider.offset().left,
                                r = t * (n / this._seekSlider.width()),
                                i = o(this._state.getPreviews(), r, t);
                            this._popup.show(i, n)
                        }
                    }
                }
            }, {
                key: "_preloadLowQualityThumbnail",
                value: function() {
                    this._image.src = this._state.getPreviews().lq.URLs[0]
                }
            }, {
                key: "destroy",
                value: function() {
                    this._controlsBottom.off("mousemove"), this._controlsBottom.off("mouseout")
                }
            }]), e
        }()
    }, function(e, t, n) {
        function r(e, t, n) {
            var r = !0,
                s = !0;
            if ("function" != typeof e) throw new TypeError(o);
            return a(n) && (r = "leading" in n ? !!n.leading : r, s = "trailing" in n ? !!n.trailing : s), i(e, t, {
                leading: r,
                maxWait: t,
                trailing: s
            })
        }
        var i = n(337),
            a = n(14),
            o = "Expected a function";
        e.exports = r
    }, function(e, t, n) {
        function r(e, t, n) {
            function r() {
                y && clearTimeout(y), v && clearTimeout(v), E = 0, h = v = m = y = b = void 0
            }

            function c(t, n) {
                n && clearTimeout(n), v = y = b = void 0, t && (E = a(), g = e.apply(m, h), y || v || (h = m = void 0))
            }

            function l() {
                var e = t - (a() - _);
                0 >= e || e > t ? c(b, v) : y = setTimeout(l, e)
            }

            function d() {
                return (y && b || v && T) && (g = e.apply(m, h)), r(), g
            }

            function f() {
                c(T, y)
            }

            function p() {
                if (h = arguments, _ = a(), m = this, b = T && (y || !w), k === !1) var n = w && !y;
                else {
                    E || v || w || (E = _);
                    var r = k - (_ - E),
                        i = (0 >= r || r > k) && (w || v);
                    i ? (v && (v = clearTimeout(v)), E = _, g = e.apply(m, h)) : v || (v = setTimeout(f, r))
                }
                return i && y ? y = clearTimeout(y) : y || t === k || (y = setTimeout(l, t)), n && (i = !0, g = e.apply(m, h)), !i || y || v || (h = m = void 0), g
            }
            var h, v, g, _, m, y, b, E = 0,
                w = !1,
                k = !1,
                T = !0;
            if ("function" != typeof e) throw new TypeError(s);
            return t = o(t) || 0, i(n) && (w = !!n.leading, k = "maxWait" in n && u(o(n.maxWait) || 0, t), T = "trailing" in n ? !!n.trailing : T), p.cancel = r, p.flush = d, p
        }
        var i = n(14),
            a = n(338),
            o = n(19),
            s = "Expected a function",
            u = Math.max;
        e.exports = r
    }, function(e, t) {
        var n = Date.now;
        e.exports = n
    }, function(e, t, n) {
        var r, i;
        /*!
         * Bowser - a browser detector
         * https://github.com/ded/bowser
         * MIT License | (c) Dustin Diaz 2015
         */
        ! function(a, o) {
            "undefined" != typeof e && e.exports ? e.exports = o() : (r = o, i = "function" == typeof r ? r.call(t, n, t, e) : r, !(void 0 !== i && (e.exports = i)))
        }("bowser", function() {
            function e(e) {
                function n(t) {
                    var n = e.match(t);
                    return n && n.length > 1 && n[1] || ""
                }

                function r(t) {
                    var n = e.match(t);
                    return n && n.length > 1 && n[2] || ""
                }
                var i, a = n(/(ipod|iphone|ipad)/i).toLowerCase(),
                    o = /like android/i.test(e),
                    s = !o && /android/i.test(e),
                    u = /nexus\s*[0-6]\s*/i.test(e),
                    c = !u && /nexus\s*[0-9]+/i.test(e),
                    l = /CrOS/.test(e),
                    d = /silk/i.test(e),
                    f = /sailfish/i.test(e),
                    p = /tizen/i.test(e),
                    h = /(web|hpw)os/i.test(e),
                    v = /windows phone/i.test(e),
                    g = !v && /windows/i.test(e),
                    _ = !a && !d && /macintosh/i.test(e),
                    m = !s && !f && !p && !h && /linux/i.test(e),
                    y = n(/edge\/(\d+(\.\d+)?)/i),
                    b = n(/version\/(\d+(\.\d+)?)/i),
                    E = /tablet/i.test(e),
                    w = !E && /[^-]mobi/i.test(e),
                    k = /xbox/i.test(e);
                /opera|opr|opios/i.test(e) ? i = {
                    name: "Opera",
                    opera: t,
                    version: b || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
                } : /coast/i.test(e) ? i = {
                    name: "Opera Coast",
                    coast: t,
                    version: b || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
                } : /yabrowser/i.test(e) ? i = {
                    name: "Yandex Browser",
                    yandexbrowser: t,
                    version: b || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
                } : /ucbrowser/i.test(e) ? i = {
                    name: "UC Browser",
                    ucbrowser: t,
                    version: n(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
                } : /mxios/i.test(e) ? i = {
                    name: "Maxthon",
                    maxthon: t,
                    version: n(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
                } : /epiphany/i.test(e) ? i = {
                    name: "Epiphany",
                    epiphany: t,
                    version: n(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
                } : /puffin/i.test(e) ? i = {
                    name: "Puffin",
                    puffin: t,
                    version: n(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
                } : /sleipnir/i.test(e) ? i = {
                    name: "Sleipnir",
                    sleipnir: t,
                    version: n(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
                } : /k-meleon/i.test(e) ? i = {
                    name: "K-Meleon",
                    kMeleon: t,
                    version: n(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
                } : v ? (i = {
                    name: "Windows Phone",
                    windowsphone: t
                }, y ? (i.msedge = t, i.version = y) : (i.msie = t, i.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(e) ? i = {
                    name: "Internet Explorer",
                    msie: t,
                    version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
                } : l ? i = {
                    name: "Chrome",
                    chromeos: t,
                    chromeBook: t,
                    chrome: t,
                    version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
                } : /chrome.+? edge/i.test(e) ? i = {
                    name: "Microsoft Edge",
                    msedge: t,
                    version: y
                } : /vivaldi/i.test(e) ? i = {
                    name: "Vivaldi",
                    vivaldi: t,
                    version: n(/vivaldi\/(\d+(\.\d+)?)/i) || b
                } : f ? i = {
                    name: "Sailfish",
                    sailfish: t,
                    version: n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
                } : /seamonkey\//i.test(e) ? i = {
                    name: "SeaMonkey",
                    seamonkey: t,
                    version: n(/seamonkey\/(\d+(\.\d+)?)/i)
                } : /firefox|iceweasel|fxios/i.test(e) ? (i = {
                    name: "Firefox",
                    firefox: t,
                    version: n(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
                }, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(e) && (i.firefoxos = t)) : d ? i = {
                    name: "Amazon Silk",
                    silk: t,
                    version: n(/silk\/(\d+(\.\d+)?)/i)
                } : /phantom/i.test(e) ? i = {
                    name: "PhantomJS",
                    phantom: t,
                    version: n(/phantomjs\/(\d+(\.\d+)?)/i)
                } : /blackberry|\bbb\d+/i.test(e) || /rim\stablet/i.test(e) ? i = {
                    name: "BlackBerry",
                    blackberry: t,
                    version: b || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
                } : h ? (i = {
                    name: "WebOS",
                    webos: t,
                    version: b || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
                }, /touchpad\//i.test(e) && (i.touchpad = t)) : /bada/i.test(e) ? i = {
                    name: "Bada",
                    bada: t,
                    version: n(/dolfin\/(\d+(\.\d+)?)/i)
                } : p ? i = {
                    name: "Tizen",
                    tizen: t,
                    version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || b
                } : /qupzilla/i.test(e) ? i = {
                    name: "QupZilla",
                    qupzilla: t,
                    version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || b
                } : /chrome|crios|crmo/i.test(e) ? i = {
                    name: "Chrome",
                    chrome: t,
                    version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
                } : s ? i = {
                    name: "Android",
                    version: b
                } : /safari|applewebkit/i.test(e) ? (i = {
                    name: "Safari",
                    safari: t
                }, b && (i.version = b)) : a ? (i = {
                    name: "iphone" == a ? "iPhone" : "ipad" == a ? "iPad" : "iPod"
                }, b && (i.version = b)) : i = /googlebot/i.test(e) ? {
                    name: "Googlebot",
                    googlebot: t,
                    version: n(/googlebot\/(\d+(\.\d+))/i) || b
                } : {
                    name: n(/^(.*)\/(.*) /),
                    version: r(/^(.*)\/(.*) /)
                }, !i.msedge && /(apple)?webkit/i.test(e) ? (/(apple)?webkit\/537\.36/i.test(e) ? (i.name = i.name || "Blink", i.blink = t) : (i.name = i.name || "Webkit", i.webkit = t), !i.version && b && (i.version = b)) : !i.opera && /gecko\//i.test(e) && (i.name = i.name || "Gecko", i.gecko = t, i.version = i.version || n(/gecko\/(\d+(\.\d+)?)/i)), i.msedge || !s && !i.silk ? a ? (i[a] = t, i.ios = t) : _ ? i.mac = t : k ? i.xbox = t : g ? i.windows = t : m && (i.linux = t) : i.android = t;
                var T = "";
                i.windowsphone ? T = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : a ? (T = n(/os (\d+([_\s]\d+)*) like mac os x/i), T = T.replace(/[_\s]/g, ".")) : s ? T = n(/android[ \/-](\d+(\.\d+)*)/i) : i.webos ? T = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : i.blackberry ? T = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : i.bada ? T = n(/bada\/(\d+(\.\d+)*)/i) : i.tizen && (T = n(/tizen[\/\s](\d+(\.\d+)*)/i)), T && (i.osversion = T);
                var S = T.split(".")[0];
                return E || c || "ipad" == a || s && (3 == S || S >= 4 && !w) || i.silk ? i.tablet = t : (w || "iphone" == a || "ipod" == a || s || u || i.blackberry || i.webos || i.bada) && (i.mobile = t), i.msedge || i.msie && i.version >= 10 || i.yandexbrowser && i.version >= 15 || i.vivaldi && i.version >= 1 || i.chrome && i.version >= 20 || i.firefox && i.version >= 20 || i.safari && i.version >= 6 || i.opera && i.version >= 10 || i.ios && i.osversion && i.osversion.split(".")[0] >= 6 || i.blackberry && i.version >= 10.1 ? i.a = t : i.msie && i.version < 10 || i.chrome && i.version < 20 || i.firefox && i.version < 20 || i.safari && i.version < 6 || i.opera && i.version < 10 || i.ios && i.osversion && i.osversion.split(".")[0] < 6 ? i.c = t : i.x = t, i
            }
            var t = !0,
                n = e("undefined" != typeof navigator ? navigator.userAgent : "");
            return n.test = function(e) {
                for (var t = 0; t < e.length; ++t) {
                    var r = e[t];
                    if ("string" == typeof r && r in n) return !0
                }
                return !1
            }, n._detect = e, n
        })
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.AgeRestrictionOverlay = t.NONE_ATTR = t.MATURE_ATTR = t.AGEGATE_LOCKED_OUT_ATTR = t.AGEGATE_FAILED_ATTR = t.AGEGATE_ATTR = t.KEY_MATURE = t.KEY_AGEGATES_FAILED = t.KEY_AGEGATE = t.AGEGATE_CHANNELS = void 0;
        var o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            s = n(175),
            u = i(s),
            c = n(57),
            l = n(194),
            d = n(190),
            f = n(157),
            p = n(35),
            h = r(p),
            v = n(98),
            g = i(v),
            _ = t.AGEGATE_CHANNELS = ["budlight"],
            m = t.KEY_AGEGATE = "age_gate",
            y = t.KEY_AGEGATES_FAILED = "age_gates_failed",
            b = t.KEY_MATURE = "mature",
            E = t.AGEGATE_ATTR = "age-gate",
            w = t.AGEGATE_FAILED_ATTR = "age-gate-failed",
            k = t.AGEGATE_LOCKED_OUT_ATTR = "age-gate-locked-out",
            T = t.MATURE_ATTR = "mature",
            S = t.NONE_ATTR = "none";
        t.AgeRestrictionOverlay = function() {
            function e(t, n, r) {
                var i = this;
                a(this, e), this.$root = $(t), this.player = n, this.stateStore = r, this._setOverlay(S), this._populateAgeDropdowns(), this._unsubscribes = [], this._unsubscribes.push(this._subscribeStream()), this._unsubscribes.push(this._subscribeOnline()), this.$root.on("click", ".js-player-mature-accept", function(e) {
                    e.preventDefault(), u.set(b, !0), i._setOverlay(S), i.player.play(), i.player.setMuted(!1)
                }), this.$root.on("click", ".js-age-gate-submit", function(e) {
                    e.preventDefault(), i._is21OrOlder() ? i._setAgeGatePassed() : (i._setAgeGateFailed(), i._getChannelName().then(i._checkOverlayRequired.bind(i)))
                }), this.player.addEventListener(g.PLAYING, this._onPlaying.bind(this)), this._handleStateUpdate()
            }
            return o(e, [{
                key: "_checkOverlayRequired",
                value: function(e) {
                    var t = this;
                    if ((0, h["default"])(_, e))
                        if (1 === this._getAgeGatesFailed(e)) this._setOverlay(w);
                        else if (this._getAgeGatesFailed(e) >= 2) this._setOverlay(k);
                    else {
                        var n = u.get(m, {});
                        n[e] || this._setOverlay(E)
                    } else(0, f.channelInfo)(e).then(function(e) {
                        var n = e.mature && !u.get(b, !1);
                        t._setOverlay(n ? T : S)
                    })
                }
            }, {
                key: "_getChannelName",
                value: function() {
                    var e = this.stateStore.getState().stream;
                    switch (e.contentType) {
                        case l.CONTENT_MODE_VOD:
                            return (0, f.videoInfo)(e.videoId).then(function(e) {
                                return e.channel.name
                            });
                        case c.CONTENT_MODE_LIVE:
                            return Promise.resolve(e.channel);
                        default:
                            return Promise.reject()
                    }
                }
            }, {
                key: "_subscribeStream",
                value: function() {
                    var e = this;
                    return (0, d.subscribe)(this.stateStore, ["stream"], function() {
                        e._handleStateUpdate()
                    })
                }
            }, {
                key: "_subscribeOnline",
                value: function() {
                    var e = this;
                    return (0, d.subscribe)(this.stateStore, ["online"], function() {
                        e._handleStateUpdate()
                    })
                }
            }, {
                key: "_handleStateUpdate",
                value: function() {
                    var e = this,
                        t = this.stateStore.getState(),
                        n = t.stream,
                        r = t.online;
                    switch (n.contentType) {
                        case l.CONTENT_MODE_VOD:
                            (0, f.videoInfo)(n.videoId).then(function(t) {
                                e._checkOverlayRequired(t.channel.name)
                            });
                            break;
                        case c.CONTENT_MODE_LIVE:
                            r ? this._checkOverlayRequired(n.channel) : this._setOverlay(S);
                            break;
                        default:
                            return
                    }
                }
            }, {
                key: "_onPlaying",
                value: function() {
                    this.$root.attr("data-overlay") !== S && (this.player.pause(), this.player.setMuted(!0))
                }
            }, {
                key: "_setOverlay",
                value: function(e) {
                    this.$root.attr("data-overlay", e), e !== S && this.player.setMuted(!0, !0)
                }
            }, {
                key: "_is21OrOlder",
                value: function() {
                    var e = $(".js-age-gate .js-select-year option:selected", this.$root)[0].value,
                        t = $(".js-age-gate .js-select-month option:selected", this.$root)[0].value,
                        n = $(".js-age-gate .js-select-day option:selected", this.$root)[0].value,
                        r = new Date(e, t, n),
                        i = new Date;
                    return i.setFullYear(i.getFullYear() - 21), r.getTime() <= i.getTime()
                }
            }, {
                key: "_setAgeGatePassed",
                value: function() {
                    var e = this,
                        t = u.get(m, {});
                    this._getChannelName().then(function(n) {
                        t[n] = !0, u.set(m, t), e._setOverlay(S), e.player.play(), e.player.setMuted(!1)
                    })
                }
            }, {
                key: "_getAgeGatesFailed",
                value: function(e) {
                    try {
                        var t = JSON.parse(sessionStorage.getItem(y)) || {};
                        return t[e] || 0
                    } catch (n) {
                        return 0
                    }
                }
            }, {
                key: "_setAgeGateFailed",
                value: function() {
                    this._getChannelName().then(function(e) {
                        var t = void 0;
                        try {
                            t = JSON.parse(sessionStorage.getItem(y)) || {}
                        } catch (n) {
                            t = {}
                        }
                        t[e] ? t[e] = t[e] + 1 : t[e] = 1, sessionStorage.setItem(y, JSON.stringify(t))
                    })
                }
            }, {
                key: "_populateAgeDropdowns",
                value: function() {
                    var e = $(".js-age-gate .js-select-month", this.$root),
                        t = $(".js-age-gate .js-select-year", this.$root);
                    this._populateYearDropdown(), e.on("change", this._populateDayDropdown.bind(this)), t.on("change", this._populateDayDropdown.bind(this)), this._populateDayDropdown()
                }
            }, {
                key: "_populateYearDropdown",
                value: function() {
                    for (var e = (new Date).getFullYear(), t = $(".js-age-gate .js-select-year", this.$root), n = e; n >= e - 100; n--) {
                        var r = document.createElement("option");
                        r.value = n, r.text = n, t[0].add(r)
                    }
                }
            }, {
                key: "_populateDayDropdown",
                value: function() {
                    var e = $(".js-age-gate .js-select-month option:selected", this.$root),
                        t = $(".js-age-gate .js-select-year option:selected", this.$root),
                        n = $(".js-age-gate .js-select-day", this.$root),
                        r = Number(e[0].value) + 1,
                        i = Number(t[0].value);
                    n.empty();
                    for (var a = 1; a <= this._getDaysInMonth(r, i); a++) {
                        var o = document.createElement("option");
                        o.value = a, o.text = a, n[0].add(o)
                    }
                }
            }, {
                key: "_getDaysInMonth",
                value: function(e, t) {
                    switch (e) {
                        case 1:
                        case 3:
                        case 5:
                        case 7:
                        case 8:
                        case 10:
                        case 12:
                            return 31;
                        case 4:
                        case 6:
                        case 9:
                        case 11:
                            return 30;
                        case 2:
                            return t % 4 === 0 ? 29 : 28;
                        default:
                            return console.error("Invalid month value"), 0
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    this.$root.off("click"), this._unsubscribes.forEach(function(e) {
                        return e()
                    }), $(".js-age-gate .js-select-month", this.$root).off("change"), $(".js-age-gate .js-select-year", this.$root).off("change")
                }
            }]), e
        }()
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PlayerUIClipsEnabler = void 0;
        var o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            s = function p(e, t, n) {
                null === e && (e = Function.prototype);
                var r = Object.getOwnPropertyDescriptor(e, t);
                if (void 0 === r) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : p(i, t, n)
                }
                if ("value" in r) return r.value;
                var a = r.get;
                if (void 0 !== a) return a.call(n)
            },
            u = n(161),
            c = n(57),
            l = n(157),
            d = n(342),
            f = n(311);
        t.PlayerUIClipsEnabler = function(e) {
            function t(e, n, a, o) {
                r(this, t);
                var s = i(this, Object.getPrototypeOf(t).call(this));
                return s._clipsControls = new d.PlayerUIClipsControls(e, a, o), s._stateStore = n, s.subscribe(s._stateStore, ["stream", "online", "streamMetadata"], s._subscriptionHandler.bind(s)), s
            }
            return a(t, e), o(t, [{
                key: "_subscriptionHandler",
                value: function(e, t) {
                    var n = e.stream || t.stream,
                        r = e.hasOwnProperty("online") ? e.online : t.online,
                        i = e.streamMetadata || t.streamMetadata,
                        a = i.channel,
                        o = a && a.hasOwnProperty("partner") ? a.partner : !1;
                    this._toggle(n.contentType, r, o)
                }
            }, {
                key: "_toggle",
                value: function(e, t, n) {
                    var r = this;
                    return e === c.CONTENT_MODE_LIVE && t && n ? void(0, l.oauthToken)().then(function(e) {
                        var t = e.token;
                        return t ? r._stateStore.getState().experiments.get(u.CLIPS) : Promise.reject("Viewer is not logged in.")
                    }).then(function(e) {
                        return e !== u.CLIPS_EXPERIMENT_ENABLED ? Promise.reject("Clips experiment not enabled") : void r._clipsControls.enableClipsButton()
                    })["catch"](function() {
                        return r._clipsControls.disableClipsButton()
                    }) : void this._clipsControls.disableClipsButton()
                }
            }, {
                key: "destroy",
                value: function() {
                    s(Object.getPrototypeOf(t.prototype), "destroy", this).call(this), this._clipsControls.destroy()
                }
            }]), t
        }(f.UIStateSubscriber)
    }, function(e, t) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = t.HAS_SEEN_CLIP_INTRO_KEY = "has-seen-clips-intro";
        t.PlayerUIClipsControls = function() {
            function e(t, r, i) {
                n(this, e), this.root = t, this.localStore = r, this.clipGenerator = i
            }
            return r(e, [{
                key: "enableClipsButton",
                value: function() {
                    var e = this;
                    this.clipButton.show(), this.clipButton.on("click", function() {
                        e.clipGenerator.recordClip()
                    });
                    var t = this.localStore.get(i);
                    t ? this.removeClipsIntroPopup() : (this.showClipsIntroPopup(), $(this.clipButton).on("click", function() {
                        e.dismissClipsIntroPopup()
                    }), $(this.clipsIntroCloseButton).on("click", function() {
                        e.dismissClipsIntroPopup()
                    }), $(this.settingsButton).on("click", function() {
                        e.dismissClipsIntroPopup()
                    }))
                }
            }, {
                key: "disableClipsButton",
                value: function() {
                    this.disableClickListeners(), this.clipButton.hide(), this.hideClipsIntroPopup()
                }
            }, {
                key: "disableClickListeners",
                value: function() {
                    this.clipButton.off("click"), this.clipsIntroCloseButton.off("click"), this.settingsButton.off("click")
                }
            }, {
                key: "showClipsIntroPopup",
                value: function() {
                    this.clipsIntroPopup.attr("data-state", "open"), this.clipButton.attr("data-state", "menu-open")
                }
            }, {
                key: "hideClipsIntroPopup",
                value: function() {
                    this.clipsIntroPopup.attr("data-state", "closed"), this.clipButton.attr("data-state", "menu-closed")
                }
            }, {
                key: "dismissClipsIntroPopup",
                value: function() {
                    this.localStore.set(i, !0), this.hideClipsIntroPopup()
                }
            }, {
                key: "removeClipsIntroPopup",
                value: function() {
                    this.clipsIntroPopup.remove(), this.clipButton.attr("data-state", null)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.disableClickListeners()
                }
            }, {
                key: "clipButton",
                get: function() {
                    return $(".js-control-clips", this.root)
                }
            }, {
                key: "clipsIntroPopup",
                get: function() {
                    return $(".js-clips-menu", this.root)
                }
            }, {
                key: "clipsIntroCloseButton",
                get: function() {
                    return $(".js-clips-menu__close", this.root)
                }
            }, {
                key: "settingsButton",
                get: function() {
                    return $(".js-menu-button", this.root)
                }
            }]), e
        }()
    }, function(e, t) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = "https://clips.twitch.tv",
            a = "https://clips-staging.twitch.tv";
        t.ClipGenerator = function() {
            function e(t, r, o) {
                n(this, e), this._state = t, this._urlOpener = r, /\/\/(?:www|player).twitch.tv/.test(o) ? this._clipsUrl = i : this._clipsUrl = a
            }
            return r(e, [{
                key: "recordClip",
                value: function() {
                    var e = $.param({
                        segment: this._state.currentSegment,
                        channel: this._state.channelName
                    });
                    this._urlOpener(this._clipsUrl + "/new?" + e)
                }
            }]), e
        }()
    }, function(e, t) {
        e.exports = '<div class="player-initializing player-center-content"> <div class=player-loading-spinner></div> </div> <div class="player-overlay player-playlist-transition js-transition" data-stage=0></div> <div class="player-overlay player-overlay--wall player-age-restriction-overlay js-age-restriction-overlay"> <div class=player-center-content> <div class=player-mature-overlay> <p class=js-mature-warning-label>The broadcaster indicated that the channel is intended for mature audiences.</p> <p><button type=button id=mature-link class="player-content-button js-player-mature-accept js-mature-accept-label">Start Watching</button></p> </div> <div class="player-age-gate js-age-gate"> <div class=player-age-gate-warning> <p> <svg class=player-age-gate--icon> <use xlink:href=#age-gate-icon /> </svg> </p> <p class=js-age-gate-warning-label>You must be 21 to view this content. Please enter your date of birth.</p> </div> <div class=player-age-gate-failed-once> <p> <svg class=player-age-gate--fail-icon> <use xlink:href=#age-gate-fail-icon /> </svg> </p> <p class=age-gate-locked-out-label>Sorry, you must be over the age of 21 to view this content.</p> </div> <div class=player-datepicker> <select class="player-datepicker--select js-select-month"> <option class=age-gate-jan value=0 selected=selected>January</option> <option class=age-gate-feb value=1>February</option> <option class=age-gate-mar value=2>March</option> <option class=age-gate-apr value=3>April</option> <option class=age-gate-may value=4>May</option> <option class=age-gate-jun value=5>June</option> <option class=age-gate-jul value=6>July</option> <option class=age-gate-aug value=7>August</option> <option class=age-gate-sept value=8>September</option> <option class=age-gate-oct value=9>October</option> <option class=age-gate-nov value=10>November</option> <option class=age-gate-dec value=11>December</option> </select> <select class="player-datepicker--select js-select-day"></select> <select class="player-datepicker--select js-select-year"></select> <button type=button class="js-age-gate-submit player-content-button">Submit</button> </div> </div> <div class=player-age-gate-locked-out> <p> <svg class=player-age-gate--fail-icon> <use xlink:href=#age-gate-fail-icon /> </svg> </p> <p class=age-gate-locked-out-label>Sorry, you must be over the age of 21 to view this content.</p> </div> </div> </div> <div class="player-overlay player-recommendations-overlay js-recommendations-overlay"> <a class="player-recommended-stream js-recommended-stream"> <img class="player-recommended-stream__thumbnail js-recommended-stream__thumbnail"/> <div class="player-recommended-stream__info js-recommended-stream__info"> <span class="player-recommended-stream__title js-recommended-stream__title"></span> <time class="player-recommended-stream__time js-recommended-stream__time"></time> </div> </a> </div> <div class="player-offline-banner js-offline-banner"> <img class=js-meta-offline /> </div> <div class="player-video-background-banner js-video-background-banner"> <img class=js-meta-video-background /> </div> <div class="player-overlay player-loading js-player-loading"> <div class=player-center-content> <div class=player-loading-spinner></div> </div> </div> <div class="player-overlay player-chromecast-overlay"> <div class=player-center-content> <p class=js-playing-on-label>Playing on <span class="player-chromecast-overlay-device js-chromecast-device">Chromecast</span></p> </div> </div> <div class="player-overlay player-fullscreen-overlay js-control-fullscreen-overlay"> </div> <div class="cc-flag player-captions-container js-player-captions-container"> <div class="player-captions-window js-player-captions-window"> <div class="player-captions js-player-captions"></div> </div> </div> <div class="player-overlay player-play-overlay"> <button type=button class="player-button player-button-play js-control-play-button"> <svg class=player-icon-play><use xlink:href=#icon_play /></svg> </button> </div> <div class="player-overlay player-overlay--wall player-product-overlay js-player-product-overlay"> <div class="player-product-overlay__close js-player-product-close"><a class=js-close-label href=#>Close</a></div> <div class="player-center-content player-product js-player-product"> <p></p> <a href="" target=_blank class="purchase_button js-subscribe-label">Subscribe</a> </div> </div> <div class="player-overlay player-playlist-comingup"> <div class=player-center-content> <div class=player-loading-spinner></div> <p> <span class=js-meta-name></span><span class=js-playlist-started-label> has started a playlist.</span> <br/> <span class=js-playlist-comingup></span> </p> </div> </div> <div class="player-hover player-controls-top js-controls-top"> <div class="player-userinfo js-user-info"> <a href=# target=_blank class="player-userinfo__picture js-meta-url"> <img class=js-meta-picture /> </a> <div class=player-userinfo__meta-container> <div class=player-userinfo__name> <a href=# target=_blank class="player-text-link player-text-link--no-color js-meta-name js-meta-url"></a> </div> <div class="player-userinfo__title js-meta-title"></div> <div class=player-userinfo__game> <span class=js-playing-label>playing </span><a href=# target=_blank class="player-text-link player-text-link--no-color js-meta-game"></a> <span class=player-userinfo__viewers><span class=js-for-label>for</span> <span class=js-meta-viewers></span><span class=js-viewers-label> viewers</span></span> </div> </div> </div> </div> <div class=player-storm-warning> <div class=player-center-content> <div class=player-loading-spinner></div> <p> <span class=js-broadcast-down-label>The broadcast is down.</span><br/> <span class=js-broadcast-reload-label>The player will automatically reload when the broadcast is back.</span> </p> </div> </div> <div class=player-error> <div class=player-center-content> <p class=js-player-error></p> </div> </div> <div class="player-hover player-livestatus js-livestatus"> <div class=player-livestatus__online><span class=js-live-label>Live</span></div> <div class=player-livestatus__offline><span class=js-offline-label>Offline</span></div> <div class=player-livestatus__playlist><span class=js-playlist-label>Playlist</span></div> </div> <div class="js-cc-modal-container player-modal__container" data-state=closed> <div class="js-cc-modal player-modal__content" data-tab-selected=presets> <button type=button class="player-modal__close js-cc-custom-modal-dismiss"> <svg><use xlink:href=#icon_close_modal /></svg> </button> <h2 class="js-cc-modal-header player-modal__header">Closed Caption Settings</h2> <ul class="player-tabs clearfix"> <li class="player-tabs__item player-tabs__item--active" data-tab=presets> <a href=# class=js-cc-presets-tab>Presets</a> </li> <li class="player-tabs__item js-cc-tab-text" data-tab=text> <a href=# class=js-cc-text-tab>Text</a> </li> <li class="player-tabs__item js-cc-tab-text" data-tab=effects> <a href=# class=js-cc-effects-tab>Effects</a> </li> <li class=player-tabs__item data-tab=background> <a href=# class=js-cc-background-tab>Background</a> </li> <li class=player-tabs__item data-tab=window> <a href=# class=js-cc-window-tab>Window</a> </li> </ul> <div class=cc-modal-menu-frame data-tab=presets> <div class="cc-preset-square js-cc-preset js-cc-aa" data-preset=white-on-black>aA</div> <div class="cc-preset-square js-cc-preset js-cc-aa" data-preset=lime-on-black>aA</div> <div class="cc-preset-square js-cc-preset js-cc-aa" data-preset=yellow-on-black>aA</div> <div class="cc-preset-square js-cc-preset js-cc-aa" data-preset=cyan-on-black>aA</div> <div class="cc-preset-square js-cc-preset js-cc-aa" data-preset=magenta-on-black>aA</div> <div class="cc-preset-square js-cc-preset js-cc-aa cc-transparent-bg" data-preset=white-on-trans-black>aA</div> <div class="cc-preset-square js-cc-preset js-cc-aa cc-transparent-bg" data-preset=lime-on-trans-black>aA</div> <div class="cc-preset-square js-cc-preset js-cc-aa cc-transparent-bg" data-preset=yellow-on-trans-black>aA</div> <div class="cc-preset-square js-cc-preset js-cc-aa cc-transparent-bg" data-preset=cyan-on-trans-black>aA</div> <div class="cc-preset-square js-cc-preset js-cc-aa cc-transparent-bg" data-preset=magenta-on-trans-black>aA</div> <div class="cc-preset-square js-cc-preset js-cc-aa" data-preset=black-on-white>aA</div> </div> <div class=cc-modal-menu-frame data-tab=text> <div class=cc-customize-field> <label class=js-cc-font-label for=cc-font>Font</label> <select class=js-cc-dropdown name=font id=cc-font> <option value=mono-serif>Mono Serif</option> <option value=prop-serif>Serif</option> <option value=mono-sans-serif>Mono Sans-Serif</option> <option value=prop-sans-serif>Sans-Serif</option> <option value=casual>Casual</option> <option value=cursive>Cursive</option> <option value=small-capitals>Small Capitals</option> </select> </div> <div class=cc-customize-field> <label class=js-cc-justification-label for=cc-font-justification>Alignment</label> <select class=js-cc-dropdown name=alignment id=cc-font-justification> <option value=left>Left</option> <option value=center>Center</option> <option value=right>Right</option> </select> </div> <div class=cc-customize-field> <label class=js-cc-color-label>Color</label> <div class=cc-color-palette> <div class=cc-color-palette__container> <input id=font-color-white type=radio name=fontColorName class=js-cc-radio value=white> <label for=font-color-white class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=font-color-black type=radio name=fontColorName class=js-cc-radio value=black> <label for=font-color-black class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=font-color-red type=radio name=fontColorName class=js-cc-radio value=red> <label for=font-color-red class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=font-color-green type=radio name=fontColorName class=js-cc-radio value=green> <label for=font-color-green class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=font-color-cyan type=radio name=fontColorName class=js-cc-radio value=cyan> <label for=font-color-cyan class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=font-color-magenta type=radio name=fontColorName class=js-cc-radio value=magenta> <label for=font-color-magenta class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=font-color-yellow type=radio name=fontColorName class=js-cc-radio value=yellow> <label for=font-color-yellow class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=font-color-blue type=radio name=fontColorName class=js-cc-radio value=blue> <label for=font-color-blue class=cc-color-palette__square></label> </div> </div> </div> <div class=cc-customize-field> <label class=js-cc-position-label for=cc-position>Position</label> <select class=js-cc-dropdown name=verticalPosition id=cc-position> <option value=bottom>Bottom</option> <option value=top>Top</option> </select> </div> <div class=cc-customize-field> <label class=js-cc-opacity-label for=cc-font-opacity>Opacity</label> <select class=js-cc-dropdown name=fontOpacity id=cc-font-opacity> <option value=solid>Solid</option> <option value=translucent>Translucent</option> <option value=semiTransparent>Semi-Transparent</option> <option value=flashing>Flashing</option> </select> </div> <div class=cc-customize-field> <label class=js-cc-size-label>Size</label> <button class="js-cc-font-size cc-font-size" value=increment>A <span class="js-font-increment-tip player-tip js-control-tip" data-tip="Increase Size"></span> </button> <button class="js-cc-font-size cc-font-size" value=decrement>A <span class="js-font-decrement-tip player-tip js-control-tip" data-tip="Decrease Size"></span> </button> </div> </div> <div class=cc-modal-menu-frame data-tab=effects> <div class=cc-customize-field> <label class=js-cc-style-label>Style</label> <div class=cc-style-palette> <div class=cc-style-palette__container> <input id=style-underline type=checkbox name=fontUnderline class=js-cc-checkbox value=underline> <label for=style-underline class=cc-style-palette__square>U</label> </div> <div class=cc-style-palette__container> <input id=style-italic type=checkbox name=fontItalic class=js-cc-checkbox value=italic> <label for=style-italic class=cc-style-palette__square>I</label> </div> <div class=cc-style-palette__container> <input id=style-bold type=checkbox name=fontBold class=js-cc-checkbox value=bold> <label for=style-bold class=cc-style-palette__square>B</label> </div> </div> </div> <div class=cc-customize-field> <label class=js-cc-edge-label>Effect</label> <div class=cc-edge-palette> <div class=cc-edge-palette__container> <hr class=cc-edge-disabled /> <input id=edge-effect-none type=radio name=edge class=js-cc-radio value=none> <label for=edge-effect-none class=cc-edge-palette__square>aA</label> </div> <div class=cc-edge-palette__container> <input id=edge-effect-raised type=radio name=edge class=js-cc-radio value=raised> <label for=edge-effect-raised class=cc-edge-palette__square>aA</label> </div> <div class=cc-edge-palette__container> <input id=edge-effect-drop-shadow type=radio name=edge class=js-cc-radio value=drop> <label for=edge-effect-drop-shadow class=cc-edge-palette__square>aA</label> </div> <div class=cc-edge-palette__container> <input id=edge-effect-depressed type=radio name=edge class=js-cc-radio value=depressed> <label for=edge-effect-depressed class=cc-edge-palette__square>aA</label> </div> <div class=cc-edge-palette__container> <input id=edge-effect-uniform type=radio name=edge class=js-cc-radio value=uniform> <label for=edge-effect-uniform class=cc-edge-palette__square>aA</label> </div> </div> </div> </div> <div class=cc-modal-menu-frame data-tab=background> <div class=cc-customize-field> <label class=js-cc-opacity-label for=cc-bg-opacity>Opacity</label> <select class=js-cc-dropdown name=backgroundOpacity id=cc-bg-opacity> <option class=js-cc-opacity-solid value=solid>Solid</option> <option class=js-cc-opacity-translucent value=translucent>Translucent</option> </select> </div> <div class=cc-customize-field> <label class=js-cc-color-label>Color</label> <div class=cc-color-palette> <div class=cc-color-palette__container> <hr class=cc-no-color /> <input id=background-transparent type=radio name=backgroundColorName class=js-cc-radio value=transparent> <label for=background-transparent class="cc-color-palette__square cc-color-palette__square-no-color"></label> </div> <div class=cc-color-palette__container> <input id=background-color-white type=radio name=backgroundColorName class=js-cc-radio value=white> <label for=background-color-white class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=background-color-lightgray type=radio name=backgroundColorName class=js-cc-radio value=lightgray> <label for=background-color-lightgray class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=background-color-gray type=radio name=backgroundColorName class=js-cc-radio value=gray> <label for=background-color-gray class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=background-color-darkgray type=radio name=backgroundColorName class=js-cc-radio value=darkgray> <label for=background-color-darkgray class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=background-color-black type=radio name=backgroundColorName class=js-cc-radio value=black> <label for=background-color-black class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=background-color-green type=radio name=backgroundColorName class=js-cc-radio value=green> <label for=background-color-green class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=background-color-blue type=radio name=backgroundColorName class=js-cc-radio value=blue> <label for=background-color-blue class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=background-color-cyan type=radio name=backgroundColorName class=js-cc-radio value=cyan> <label for=background-color-cyan class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=background-color-magenta type=radio name=backgroundColorName class=js-cc-radio value=magenta> <label for=background-color-magenta class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=background-color-yellow type=radio name=backgroundColorName class=js-cc-radio value=yellow> <label for=background-color-yellow class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=background-color-red type=radio name=backgroundColorName class=js-cc-radio value=red> <label for=background-color-red class=cc-color-palette__square></label> </div> </div> </div> </div> <div class=cc-modal-menu-frame data-tab=window> <div class=cc-customize-field> <label class=js-cc-opacity-label for=cc-window-opacity>Opacity</label> <select class=js-cc-dropdown name=windowOpacity id=cc-window-opacity> <option class=js-cc-opacity-solid value=solid>Solid</option> <option class=js-cc-opacity-translucent value=translucent>Translucent</option> </select> </div> <div class=cc-customize-field> <label class=js-cc-color-label>Color</label> <div class=cc-color-palette> <div class=cc-color-palette__container> <hr class=cc-no-color /> <input id=window-transparent type=radio name=windowColorName class=js-cc-radio value=transparent> <label for=window-transparent class="cc-color-palette__square cc-color-palette__square-no-color"></label> </div> <div class=cc-color-palette__container> <input id=window-color-white type=radio name=windowColorName class=js-cc-radio value=white> <label for=window-color-white class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=window-color-lightgray type=radio name=windowColorName class=js-cc-radio value=lightgray> <label for=window-color-lightgray class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=window-color-gray type=radio name=windowColorName class=js-cc-radio value=gray> <label for=window-color-gray class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=window-color-darkgray type=radio name=windowColorName class=js-cc-radio value=darkgray> <label for=window-color-darkgray class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=window-color-black type=radio name=windowColorName class=js-cc-radio value=black> <label for=window-color-black class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=window-color-green type=radio name=windowColorName class=js-cc-radio value=green> <label for=window-color-green class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=window-color-blue type=radio name=windowColorName class=js-cc-radio value=blue> <label for=window-color-blue class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=window-color-cyan type=radio name=windowColorName class=js-cc-radio value=cyan> <label for=window-color-cyan class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=window-color-magenta type=radio name=windowColorName class=js-cc-radio value=magenta> <label for=window-color-magenta class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=window-color-yellow type=radio name=windowColorName class=js-cc-radio value=yellow> <label for=window-color-yellow class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=window-color-red type=radio name=windowColorName class=js-cc-radio value=red> <label for=window-color-red class=cc-color-palette__square></label> </div> </div> </div> </div> </div> </div> <div class="player-hover player-controls-bottom js-controls-bottom"> <div class=player-seek> <div class=player-seek__time-container> <span class="player-seek__time js-seek-currenttime">00:00</span> <span class="player-seek__time player-seek__time--total js-seek-totaltime">00:00</span> </div> <div class="player-slider player-slider--roundhandle js-seek-slider" show-popup=false> <div class="player-slider__tip-container js-slider-tip-container"> <span class="player-tip player-tip--large js-slider-tip" data-tip=00:00></span> </div> <span class="player-slider__buffer js-seek-buffer"></span> <div class="player-slider__muted-segments js-muted-segments-container"></div> <div class="player-slider__marker-dots js-marker-dots-container"></div> <div class="player-slider__popup-container js-popup-container"> <div class="popup-thumb-wrapper js-popup-thumb-wrapper"> <div class="popup-marker-thumbunder js-popup-marker-thumbunder"></div> <div class="popup-marker-thumbover js-popup-marker-thumbover"></div> </div> <div class=popup-info-wrapper> <span class="popup-title js-popup-title"></span> <span class="popup-info js-popup-info"></span> </div> <span class="popup-timestamp js-popup-timestamp"></span> </div> <div class="popup-arrow js-popup-arrow"></div> </div> </div> <div class=player-buttons-left> <button type=button class="player-button player-button--playpause js-control-playpause-button" tabindex=-1> <span class="pause-button js-pause-button"> <span class="player-tip player-tip--aleft js-tip" data-tip=Pause></span> <svg class=player-icon-pause><use xlink:href=#icon_pause /></svg> </span> <span class="play-button js-play-button"> <span class="player-tip player-tip--aleft js-tip" data-tip=Play></span> <svg class=player-icon-play><use xlink:href=#icon_play /></svg> </span> </button> <div class=player-volume> <button type=button class="player-button player-button--volume js-control-volume" data-state=full tabindex=-1> <span class="mute-button js-mute"> <span class="player-tip js-control-tip" data-tip=Mute></span> <svg class=player-icon-volumefull><use xlink:href=#icon_volumefull /></svg> </span> <span class="unmute-button js-unmute"> <span class="player-tip js-control-tip" data-tip=Unmute></span> <svg class=player-icon-volumemute><use xlink:href=#icon_volumemute /></svg> </span> </button> <div class="player-volume__slider-container js-volume-container"> <div class="player-volume__slider player-slider js-volume-slider"></div> </div> </div> </div> <div class=player-buttons-right> <div class="player-menu player-settings-contain js-quality-display-contain" data-q=""> <div class=player-quality> <div class=player-quality__display><span class=js-quality-display></span></div> </div> <button type=button class="player-button player-button--settings js-menu-button js-menu-button-settings" data-state=menu-closed tabindex=-1> <span class="player-tip js-tip" data-tip=Options></span> <div class=player-settings-icon><svg><use xlink:href=#icon_settings /></svg></div> </button> <div class="player-menu__menu js-menu" data-menu=main> <div class="js-main-menu settings-menu--main"> <div class=player-menu__section> <p class="player-menu__header js-player-options-label">Player Options</p> <p class=player-menu__item> <span class="player-menu__item-label js-video-quality-label">Video Quality:</span> <select class="player-menu__select player-menu__item-control js-quality" tabindex=-1></select> </p> <div class="cc-flag player-menu__item js-cc-open-modal"> <a href=# class="player-text-link menu-cc-item"> <span class=js-cc-label>Closed Captioning</span> <div class=settings-menu-arrow> <svg class=arrow-right><use xlink:href=#icon_arrow /></svg> </div> </a> </div> <p class="player-menu__item player-menu__item--popout"> <a href=# class="player-text-link js-popout-player" tabindex=-1>Popout Player</a> </p> <p class="player-menu__item player-menu__item--stats"> <a href=# class="player-text-link js-stats-toggle js-stats-toggle-text" tabindex=-1>Show Video Stats</a> </p> <p class="player-menu__item player-menu__item--copyurl js-copyurl-contain"> <a href=# class="player-text-link js-copy-url">Copy Video URL at Current Time</a> </p> </div> <div class="player-menu__section player-video-issue js-video-issue"> <p class="player-menu__header js-report-issue-label">Report Playback Issue</p> <form class="player-menu__item player-video-issue__form js-video-issue-form"> <select name=issue class=player-menu__select tabindex=-1> <option value="" disabled=disabled selected=selected class=js-select-label>Select</option> <option value=stutter-both class=js-audio-video-stutter-label>Audio and video stutter</option> <option value=stutter-video class=js-video-stutter-label>Video stutters, but audio is fine</option> <option value=black-screen class=js-video-black-label>Video is completely black or doesn’t load</option> <option value=av-desync class=js-audio-video-desync-label>Audio and video aren\'t synced</option> <option value=fullscreen-broken class=js-fullscreen-not-working-label>Fullscreen playback doesn\'t work</option> <option value=ad-volume class=js-ad-too-loud-label>Advertisement can\'t be muted or is too loud</option> <option value=ad-repeat class=js-ad-too-often-label>Advertisement has played too many times</option> </select> <button type=submit class="player-video__submit player-video-issue__submit js-submit-label" tabindex=-1>Submit</button> </form> <p class="player-menu__item player-video-issue__complete js-report-thanks-label">Thanks for your report</p> </div> <div class="player-menu__section player-menu-html5 js-menu-html5"> <p class=player-menu__header>HTML5 Playback Beta</p> <div class=player-menu__item> <div class=clearfix> <a class="player-switch js-html5-slider" data-value=on> <div class=switch-label>ON</div> <div class=switch-toggle></div> <div class=switch-label>OFF</div> </a> </div> </div> </div> </div> </div> </div> <button type=button class="cc-flag player-button player-button--cc js-control-cc" tabindex=-1> <span class="player-tip js-control-tip" data-tip=Captions></span> <svg class=js-player-icon-cc><use xlink:href=#icon_cc_on /></svg> <svg class=js-player-icon-cc-deactivated><use xlink:href=#icon_cc_off /></svg> </button> <div class="cc-flag player-menu player-menu__modal player-settings-contain"> <div class="player-menu__menu player-menu__menu--intro js-cc-info-modal" id=cc-info-modal> <button type=button class="player-button player-button--noscale player-button--introClose js-cc-info-modal-dismiss"> <svg id=clip-info-close> <use xlink:href=#icon_close_md /> </svg> </button> <div class=player-menu__section> <p class="player-menu__introTitle js-introducing-cc-label-header"> Live Closed Captions </p> <p class="player-menu__introBlock js-introducing-cc-label"> Click the CC button to enable closed captions and click the gear button to customize. </p> <p class=player-menu__introBlock> <a class="js-cc-learn-more player-text-link" href=#> Learn more </a> </p> </div> </div> </div> <div class=player-menu> <button type=button class="player-button player-button--clips js-control-clips"> <span class="player-tip js-tip" data-tip=Clip></span> <svg class=player-icon-clips><use xlink:href=#icon_clips /></svg> </button> <div class="player-menu__menu player-menu__menu--intro js-clips-menu"> <button type=button class="player-button player-button--noscale player-button--introClose js-clips-menu__close"> <svg id=clip-info-close> <use xlink:href=#icon_close_md /> </svg> </button> <div class=player-menu__section> <p class="player-menu__introTitle js-clips-menu-title"> Introducing Clips </p> <p class="player-menu__introBlock js-clips-menu-text"> Capture your favorite moments with a single click! Hit the Clips button below and be the first to start sharing. </p> <p class=player-menu__introBlock> <a href=http://link.twitch.tv/clips-twitch-notification-launch-20160523 class="player-text-link js-clips-learn-more" target=_blank> Learn more </a> </p> </div> </div> </div> <button type=button class="player-button player-button--chromecast js-chromecast-button"> <span class="player-tip js-tip" data-tip=Chromecast></span> <svg class=player-icon-chromecast-p1><use xlink:href=#icon_chromecast_p1 /></svg> <svg class=player-icon-chromecast-p2><use xlink:href=#icon_chromecast_p2 /></svg> <svg class=player-icon-chromecast-p3><use xlink:href=#icon_chromecast_p3 /></svg> <svg class=player-icon-chromecast-p4><use xlink:href=#icon_chromecast_p4 /></svg> <svg class=player-icon-chromecast-p5><use xlink:href=#icon_chromecast_p5 /></svg> </button> <button type=button class="player-button player-button--theatre js-control-theatre" tabindex=-1> <span class="enter-theatre-button js-theatre-button"> <span class="player-tip theatre-inactive-tip js-control-tip" data-tip="Theater Mode"></span> <svg class=player-icon-theatre><use xlink:href=#icon_theatre /></svg> </span> <span class="exit-theatre-button js-exit-theatre-button"> <span class="player-tip theatre-inactive-tip js-control-tip" data-tip="Exit Theater Mode"></span> <svg class=player-icon-theatre-deactivate><use xlink:href=#icon_theatre_deactivate /></svg> </span> </button> <button type=button class="player-button player-button--fullscreen js-control-fullscreen" tabindex=-1> <span class="fullscreen-button js-fullscreen"> <span class="player-tip js-control-tip" data-tip=Fullscreen></span> <svg class=player-icon-fullscreen><use xlink:href=#icon_fullscreen /></svg> </span> <span class="exit-fullscreen-button js-exit-fullscreen"> <span class="player-tip js-control-tip" data-tip="Exit Fullscreen"></span> <svg class=player-icon-unfullscreen><use xlink:href=#icon_unfullscreen /></svg> </span> </button> </div> </div> <button type=button class="player-button player-button--twitch js-watch-twitch"> <span class="player-tip player-tip--aright js-tip" data-tip="Watch on Twitch"></span> <svg><use xlink:href=#icon_twitch /></svg> </button> <div class="player-nextvod js-transition" data-stage=0> <div class=player-nextvod-thumb> <img class="player-nextvod-thumb__image js-next-video-thumbnail"/> <div class=player-nextvod-thumb__timer></div> </div> <div class=player-nextvod-meta> <p class="player-nextvod-meta__next js-coming-up-label"><span>Coming Up</span></p> <p class=player-nextvod-meta__title><span class=js-next-video-title></span></p> </div> </div> <div class=player-ad-notice> <p class=js-advertisement-label>Advertisement</p> </div> <div class="player-hover player-playlist-currentvod"> <p class=js-now-playing-label>Now playing: <span class=js-currentvod-title></span></p> </div> <div class="player-alert js-player-alert"> <p class=js-player-alert__message></p> <button type=button class="player-button player-button--noscale player-button--close js-player-alert__close"> <svg><use xlink:href=#icon_close /></svg> </button> </div> <ul class="player-playback-stats js-playback-stats"> <button type=button class="player-button player-button--noscale player-button--close js-stats-close"> <svg><use xlink:href=#icon_close /></svg> </button> <li>Video Resolution: <div><span class=js-stat-video-resolution></span></div></li> <li>Display Resolution: <div><span class=js-stat-display-resolution></span></div></li> <li>FPS: <div><span class=js-stat-fps></span></div></li> <li>Skipped Frames: <div><span class=js-stat-skipped-frames></span></div></li> <li>Buffer Size: <div><span class=js-stat-buffer-size></span> sec.</div></li> <li class=stats__latency-broadcaster>Latency to Broadcaster: <div><span class=js-stat-hls-latency-broadcaster></span> sec.</div></li> <li class=stats__latency-encoder>Latency to Encoder: <div><span class=js-stat-hls-latency-encoder></span> sec.</div></li> <li>Playback Rate: <div><span class=js-stat-playback-rate></span> Kbps</div></li> <li>Player Volume: <div><span class=js-stat-player-volume></span></div></li> <li>Memory Usage: <div><span class=js-stat-memory-usage></span></div></li> </ul> <svg viewBox="0 0 30 30" xmlns=http://www.w3.org/2000/svg style=width:0;height:0;visibility:hidden;display:block> <symbol viewBox="0 0 30 30" id=icon_play><path clip-rule=evenodd d=M10,7l12,8l-12,8V7z fill-rule=evenodd></path></symbol> <symbol viewBox="0 0 30 30" id=icon_pause><path clip-rule=evenodd d="M9,22h4V8H9V22z M17,8v14h4V8H17z" fill-rule=evenodd></path></symbol> <symbol viewBox="0 0 30 30" id=icon_volumefull><path clip-rule=evenodd d="M22,21.5v-13L23,8v14L22,21.5z M18,10.5l1-0.5v10l-1-0.5V10.5z M7,18v-6l3,0l5-4v14l-5-4L7,18z" fill-rule=evenodd></path></symbol> <symbol viewBox="0 0 30 30" id=icon_volumemute><path clip-rule=evenodd d="M23,18L23,18h-0.7L20,15.7L17.7,18H17l0,0v-0.7l2.3-2.3L17,12.7V12l0,0h0.7l2.3,2.3l2.3-2.3H23l0,0v0.7L20.7,15l2.3,2.3V18z M7,18v-6l3,0l5-4v14l-5-4L7,18z" fill-rule=evenodd></path></symbol> <symbol viewBox="0 0 30 30" id=icon_fullscreen><path clip-rule=evenodd d="M7,7 L15.2,7 L12.8,9.4 L15.8,12.4 L12.4,15.8 L9.4,12.8 L7,15.2 L7,7 Z M23,23 L14.8,23 L17.2,20.6 L14.2,17.6 L17.6,14.2 L20.6,17.2 L23,14.8 L23,23 Z" fill-rule=evenodd></path></symbol> <symbol viewBox="0 0 30 30" id=icon_unfullscreen><path clip-rule=evenodd d="M15,15 L23.2,15 L20.8,17.4 L23.8,20.4 L20.4,23.8 L17.4,20.8 L15,23.2 L15,15 L15,15 Z M15,15 L6.8,15 L9.2,12.6 L6.2,9.6 L9.6,6.2 L12.6,9.2 L15,6.8 L15,15 L15,15 Z" fill-rule=evenodd></path></symbol> <symbol viewBox="0 0 30 30" id=icon_settings><path clip-rule=evenodd d="M13.3589744,7 L16.6410256,7 L18.0769231,9.8 L21.3589744,9.8 L23,12.2 L21.3589744,15 L23,17.8 L21.3589744,20.2 L18.0769231,20.2 L16.6410256,23 L13.3589744,23 L11.9230769,20.2 L8.64102564,20.2 L7,17.8 L8.64102564,15 L7,12.2 L8.64102564,9.8 L11.9230769,9.8 L13.3589744,7 Z M15,17.8 C16.5860485,17.8 17.8717949,16.5463973 17.8717949,15 C17.8717949,13.4536027 16.5860485,12.2 15,12.2 C13.4139515,12.2 12.1282051,13.4536027 12.1282051,15 C12.1282051,16.5463973 13.4139515,17.8 15,17.8 Z" fill-rule=evenodd></path></symbol> <symbol viewBox="0 0 30 30" id=icon_theatre><path d="M6 21h11V9H6v12zM19 9v12h5V9h-5z" fill-rule=evenodd></path></symbol> <symbol viewBox="0 0 30 30" id=icon_theatre_deactivate><path d="M6 9h11v12H6V9zm2 2h9v8H8v-8zm9-2h7v12h-7V9zm2 2h3v8h-3v-8z" fill-rule=evenodd></path></symbol> <symbol viewBox="0 0 63 30" id=icon_twitch><path clip-rule=evenodd d="M55,19 L52,19 L52,13 L49,13 L49,19 L46,19 L46,8 L49,8 L49,10 L53,10 L55,12 L55,19 L55,19 Z M45,13 L41,13 L41,16 L45,16 L45,19 L40,19 L38,17 L38,12 L40,10 L45,10 L45,13 L45,13 Z M37,13 L34,13 L34,16 L37,16 L37,19 L33,19 L31,17 L31,8 L34,8 L34,10 L37,10 L37,13 L37,13 Z M27,8 L30,8 L30,9 L27,9 L27,8 Z M27,10 L30,10 L30,19 L27,19 L27,10 Z M26,17 L24,19 L15,19 L15,10 L18,10 L18,16 L19,16 L19,10 L22,10 L22,16 L23,16 L23,10 L26,10 L26,17 L26,17 Z M14,13 L11,13 L11,16 L14,16 L14,19 L10,19 L8,17 L8,8 L11,8 L11,10 L14,10 L14,13 L14,13 Z M53.5,9 L50,9 L50,7 L45.5,7 L43,9 L39.5,9 L38,10.5 L38,9 L35,9 L35,7 L26,7 L26,9 L15,9 L12,7 L7,7 L7,17.5 L9.5,20.125 L14,23 L18,23 L18,22.25 L19.5,23 L25.5,23 L26.5,21.5 L27,23 L31,23 L31,21.5 L32.5,23 L37,23 L37.25,21.5 L38.5,23 L43.5,23 L45,21.5 L45,23 L47.5,23 L49,21.5 L49,23 L52.5,23 L56,19.5 L56,11.5 L53.5,9 L53.5,9 Z" fill-rule=evenodd></path></symbol> <symbol viewBox="0 0 30 30" id=icon_close><path clip-rule=evenodd d="M15.1035534,15.4571068 L11.5303301,19.0303301 L11.3535534,19.2071068 L11,18.8535534 L11.1767767,18.6767767 L14.75,15.1035534 L11.1767767,11.5303301 L11,11.3535534 L11.3535534,11 L11.5303301,11.1767767 L15.1035534,14.75 L18.6767767,11.1767767 L18.8535534,11 L19.2071068,11.3535534 L19.0303301,11.5303301 L15.4571068,15.1035534 L19.0303301,18.6767767 L19.2071068,18.8535534 L18.8535534,19.2071068 L18.6767767,19.0303301 L15.1035534,15.4571068 Z" fill-rule=evenodd></path></symbol> <symbol viewBox="0 0 30 30" id=icon_close_md><path clip-rule=evenodd d="M20.657 10.757L16.414 15l4.243 4.242-1.415 1.415L15 16.414l-4.243 4.243-1.414-1.415L13.586 15l-4.243-4.243 1.414-1.414L15 13.586l4.242-4.243 1.415 1.414z" fill-rule=evenodd></path></symbol> <symbol viewBox="0 0 30 30" id=icon_chromecast_p1><path fill-rule=evenodd clip-rule=evenodd d=M15,22c0-0.7-0.1-1.4-0.2-2H22V10H8v3.2C7.4,13.1,6.7,13,6,13V8h18v14H15z /></symbol> <symbol viewBox="0 0 30 30" id=icon_chromecast_p2><path fill-rule=evenodd clip-rule=evenodd d=M10,13.9V12h10v6h-5.9C13.2,16.2,11.8,14.8,10,13.9z /></symbol> <symbol viewBox="0 0 30 30" id=icon_chromecast_p3><path fill-rule=evenodd clip-rule=evenodd d=M13,22h-1c0-3.3-2.7-6-6-6v-1C9.9,15,13,18.1,13,22z /></symbol> <symbol viewBox="0 0 30 30" id=icon_chromecast_p4><path fill-rule=evenodd clip-rule=evenodd d=M10,22H9c0-1.7-1.3-3-3-3v-1C8.2,18,10,19.8,10,22z /></symbol> <symbol viewBox="0 0 30 30" id=icon_chromecast_p5><path fill-rule=evenodd clip-rule=evenodd d=M7,22H6v-1C6.6,21,7,21.4,7,22z /></symbol> <symbol viewBox="0 0 30 30" id=icon_clips><path d="M14.802 7.804l-3.83 1.026 2.928 2.321 3.83-1.026-2.928-2.321zm2.895-.776l3.981-1.067.777 2.898-1.83.49-2.928-2.321zM7.969 9.635l-1.745.467L7 13l3.898-1.044-2.929-2.321zM7 13h16v9H7v-9zm1.969 3h2.785l2.228-3h-2.785l-2.228 3zm7.018 0h2.785L21 13h-2.785l-2.228 3z" fill-rule=evenodd /></symbol> <symbol viewBox="0 0 30 30" id=icon_cc_on><path fill-rule=evenodd clip-rule=evenodd d="M5,8 L6,7 L24,7 L25,8 L25,22 L24,23 L6,23 L5,22 L5,8 Z M8,15 C8,17.2003155 9.48065348,18.75 11.5511608,18.75 C13.3929493,18.75 14.4763543,17.6735016 14.7411866,16.1829653 L12.8151333,16.1829653 C12.6225279,16.7271293 12.2252794,17.0820189 11.5511608,17.0820189 C10.527945,17.0820189 9.95012898,16.1829653 9.95012898,15 C9.95012898,13.805205 10.527945,12.9179811 11.5511608,12.9179811 C12.2252794,12.9179811 12.6225279,13.2728707 12.8151333,13.805205 L14.7411866,13.805205 C14.4763543,12.3264984 13.3929493,11.25 11.5511608,11.25 C9.48065348,11.25 8,12.7996845 8,15 Z M15.2588134,15 C15.2588134,17.2003155 16.7394669,18.75 18.8099742,18.75 C20.6517627,18.75 21.7351677,17.6735016 22,16.1829653 L20.0739467,16.1829653 C19.8813414,16.7271293 19.4840929,17.0820189 18.8099742,17.0820189 C17.7867584,17.0820189 17.2089424,16.1829653 17.2089424,15 C17.2089424,13.805205 17.7867584,12.9179811 18.8099742,12.9179811 C19.4840929,12.9179811 19.8813414,13.2728707 20.0739467,13.805205 L22,13.805205 C21.7351677,12.3264984 20.6517627,11.25 18.8099742,11.25 C16.7394669,11.25 15.2588134,12.7996845 15.2588134,15 Z"></path></symbol> <symbol viewBox="0 0 30 30" id=icon_cc_off><path fill-rule=evenodd clip-rule=evenodd d="M5,8 L6,7 L24,7 L25,8 L25,22 L24,23 L6,23 L5,22 L5,8 Z M24,8 L24,22 L6,22 L6,8 L24,8 Z M8,15 C8,17.2003155 9.48065348,18.75 11.5511608,18.75 C13.3929493,18.75 14.4763543,17.6735016 14.7411866,16.1829653 L12.8151333,16.1829653 C12.6225279,16.7271293 12.2252794,17.0820189 11.5511608,17.0820189 C10.527945,17.0820189 9.95012898,16.1829653 9.95012898,15 C9.95012898,13.805205 10.527945,12.9179811 11.5511608,12.9179811 C12.2252794,12.9179811 12.6225279,13.2728707 12.8151333,13.805205 L14.7411866,13.805205 C14.4763543,12.3264984 13.3929493,11.25 11.5511608,11.25 C9.48065348,11.25 8,12.7996845 8,15 Z M15.2588134,15 C15.2588134,17.2003155 16.7394669,18.75 18.8099742,18.75 C20.6517627,18.75 21.7351677,17.6735016 22,16.1829653 L20.0739467,16.1829653 C19.8813414,16.7271293 19.4840929,17.0820189 18.8099742,17.0820189 C17.7867584,17.0820189 17.2089424,16.1829653 17.2089424,15 C17.2089424,13.805205 17.7867584,12.9179811 18.8099742,12.9179811 C19.4840929,12.9179811 19.8813414,13.2728707 20.0739467,13.805205 L22,13.805205 C21.7351677,12.3264984 20.6517627,11.25 18.8099742,11.25 C16.7394669,11.25 15.2588134,12.7996845 15.2588134,15 Z"></path></symbol> <symbol viewBox="0 0 30 30" id=icon_close_modal><path clip-rule=evenodd d="M13.657 3.757l-4.243 4.243 4.243 4.242-1.415 1.415-4.242-4.243-4.243 4.243-1.414-1.415 4.243-4.242-4.243-4.243 1.414-1.414 4.243 4.243 4.242-4.243 1.415 1.414z" fill-rule=evenodd /></symbol> <symbol viewBox="0 0 14 14" id=icon_arrow><path d="M6.46765898,5.00010938 L6.46755335,5 L3.08055618,8.27078515 C2.97320936,8.37444877 2.97610632,8.52662201 3.07163118,8.6255409 L3.47144895,9.03956433 C3.56460436,9.13602957 3.72584608,9.14003286 3.82630008,9.04302556 L6.46765898,6.49229492 L9.10901788,9.04302556 C9.20947188,9.14003286 9.3707136,9.13602957 9.46386901,9.03956433 L9.86368678,8.6255409 C9.95921164,8.52662201 9.9621086,8.37444877 9.85476178,8.27078515 L6.46776461,5 L6.46765898,5.00010938 Z" transform="translate(6.467659, 7.056937) scale(-1, 1) rotate(-270.000000) translate(-6.467659, -7.056937) "></path></symbol> <symbol viewBox="0 0 98 86" id=age-gate-icon><path d="M24 8h50v10h12V8h12v78H0V8h12v10h12V8zm52-8h8v16h-8V0zM14 0h8v16h-8V0zm13.356 43.52h3.8c-.03-.954.068-1.9.29-2.84.225-.938.59-1.78 1.097-2.526.506-.745 1.155-1.348 1.945-1.81.79-.463 1.736-.694 2.84-.694.834 0 1.624.135 2.37.403.744.268 1.393.656 1.944 1.162.552.507.99 1.11 1.32 1.81.327.702.49 1.484.49 2.35 0 1.102-.17 2.07-.513 2.905-.344.835-.85 1.61-1.52 2.326-.672.715-1.514 1.423-2.528 2.124-1.013.7-2.19 1.468-3.532 2.303-1.103.655-2.16 1.356-3.175 2.1-1.014.746-1.923 1.61-2.728 2.595-.805.983-1.468 2.14-1.99 3.465-.52 1.327-.857 2.93-1.006 4.807h20.705v-3.354H30.888c.18-.983.56-1.855 1.14-2.616.582-.76 1.282-1.468 2.102-2.123.82-.656 1.722-1.275 2.705-1.856.984-.58 1.968-1.17 2.952-1.765.983-.626 1.937-1.282 2.86-1.968.925-.686 1.745-1.453 2.46-2.303.716-.85 1.29-1.81 1.722-2.884.432-1.073.648-2.31.648-3.71 0-1.492-.26-2.803-.783-3.936-.522-1.133-1.23-2.08-2.124-2.84-.893-.76-1.944-1.34-3.15-1.744-1.21-.402-2.498-.603-3.87-.603-1.67 0-3.16.283-4.47.85-1.312.566-2.408 1.348-3.287 2.347-.88 1-1.528 2.183-1.945 3.555-.418 1.37-.582 2.86-.492 4.47zM65.17 64V32.297H62.26c-.208 1.192-.596 2.176-1.162 2.95-.567.776-1.26 1.387-2.08 1.834-.82.448-1.736.754-2.75.918-1.013.164-2.057.246-3.13.246v3.04h8.228V64h3.8z" fill=#F9F7FC fill-rule=evenodd /></symbol> <symbol id=age-gate-fail-icon viewBox="0 0 92 81"><path d="M0 75.6l3.067-5.4L9.2 59.4l12.267-21.6 12.266-21.6 6.134-10.8L42.933 0h6.134l3.066 5.4 6.134 10.8 12.266 21.6L82.8 59.4l6.133 10.8L92 75.6 89.06 81H3.44L0 75.6zM40 27h12v13l-3 19h-6l-3-19V27zm1 34h10v10H41V61z" fill=#F9F7FC fill-rule=evenodd /></symbol> </svg>';
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i() {
            return (0, a.createStore)(C, (0, a.compose)((0, a.applyMiddleware)(s["default"]), (window.devToolsExtension, function(e) {
                return e
            })))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.init = i;
        var a = n(346),
            o = n(354),
            s = r(o),
            u = n(355),
            c = n(356),
            l = n(357),
            d = n(289),
            f = n(359),
            p = n(361),
            h = n(363),
            v = n(384),
            g = n(385),
            _ = n(387),
            m = n(388),
            y = n(389),
            b = n(390),
            E = n(417),
            w = n(418),
            k = n(419),
            T = n(420),
            S = n(422),
            A = n(423),
            C = (0, a.combineReducers)({
                adsManager: u.adsManager,
                analytics: c.analytics,
                analyticsTracker: l.analyticsTracker,
                captions: d.captions,
                env: f.env,
                experiments: p.experiments,
                lang: h.lang,
                manifestInfo: v.manifestInfo,
                navigator: g.navigatorReducer,
                online: _.online,
                playback: m.playback,
                recommendations: y.recommendations,
                resumeWatch: b.resumeWatch,
                stream: w.stream,
                streamMetadata: k.streamMetadata,
                usher: T.usher,
                viewercount: S.viewercount,
                screen: E.screen,
                window: A.windowReducer
            })
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0, t.compose = t.applyMiddleware = t.bindActionCreators = t.combineReducers = t.createStore = void 0;
        var i = n(347),
            a = r(i),
            o = n(349),
            s = r(o),
            u = n(351),
            c = r(u),
            l = n(352),
            d = r(l),
            f = n(353),
            p = r(f),
            h = n(350);
        r(h);
        t.createStore = a["default"], t.combineReducers = s["default"], t.bindActionCreators = c["default"], t.applyMiddleware = d["default"], t.compose = p["default"]
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e, t, n) {
            function r() {
                h === p && (h = p.slice())
            }

            function a() {
                return f
            }

            function u(e) {
                if ("function" != typeof e) throw new Error("Expected listener to be a function.");
                var t = !0;
                return r(), h.push(e),
                    function() {
                        if (t) {
                            t = !1, r();
                            var n = h.indexOf(e);
                            h.splice(n, 1)
                        }
                    }
            }

            function c(e) {
                if (!(0, o["default"])(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if ("undefined" == typeof e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (v) throw new Error("Reducers may not dispatch actions.");
                try {
                    v = !0, f = d(f, e)
                } finally {
                    v = !1
                }
                for (var t = p = h, n = 0; n < t.length; n++) t[n]();
                return e
            }

            function l(e) {
                if ("function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
                d = e, c({
                    type: s.INIT
                })
            }
            if ("function" == typeof t && "undefined" == typeof n && (n = t, t = void 0), "undefined" != typeof n) {
                if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
                return n(i)(e, t)
            }
            if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
            var d = e,
                f = t,
                p = [],
                h = p,
                v = !1;
            return c({
                type: s.INIT
            }), {
                dispatch: c,
                subscribe: u,
                getState: a,
                replaceReducer: l
            }
        }
        t.__esModule = !0, t.ActionTypes = void 0, t["default"] = i;
        var a = n(348),
            o = r(a),
            s = t.ActionTypes = {
                INIT: "@@redux/INIT"
            }
    }, function(e, t, n) {
        function r(e) {
            if (!a(e) || l.call(e) != o || i(e)) return !1;
            var t = d(e);
            if (null === t) return !0;
            var n = t.constructor;
            return "function" == typeof n && n instanceof n && u.call(n) == c
        }
        var i = n(67),
            a = n(31),
            o = "[object Object]",
            s = Object.prototype,
            u = Function.prototype.toString,
            c = u.call(Object),
            l = s.toString,
            d = Object.getPrototypeOf;
        e.exports = r
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e, t) {
            var n = t && t.type,
                r = n && '"' + n.toString() + '"' || "an action";
            return 'Reducer "' + e + '" returned undefined handling ' + r + ". To ignore an action, you must explicitly return the previous state."
        }

        function a(e) {
            Object.keys(e).forEach(function(t) {
                var n = e[t],
                    r = n(void 0, {
                        type: s.ActionTypes.INIT
                    });
                if ("undefined" == typeof r) throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if ("undefined" == typeof n(void 0, {
                        type: i
                    })) throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + s.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }

        function o(e) {
            for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
                var o = t[r];
                "function" == typeof e[o] && (n[o] = e[o])
            }
            var s, u = Object.keys(n);
            try {
                a(n)
            } catch (c) {
                s = c
            }
            return function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                    t = arguments[1];
                if (s) throw s;
                for (var r = !1, a = {}, o = 0; o < u.length; o++) {
                    var c = u[o],
                        l = n[c],
                        d = e[c],
                        f = l(d, t);
                    if ("undefined" == typeof f) {
                        var p = i(c, t);
                        throw new Error(p)
                    }
                    a[c] = f, r = r || f !== d
                }
                return r ? a : e
            }
        }
        t.__esModule = !0, t["default"] = o;
        var s = n(347),
            u = n(348),
            c = (r(u), n(350));
        r(c)
    }, function(e, t) {
        "use strict";

        function n(e) {
            "undefined" != typeof console && "function" == typeof console.error && console.error(e);
            try {
                throw new Error(e)
            } catch (t) {}
        }
        t.__esModule = !0, t["default"] = n
    }, function(e, t) {
        "use strict";

        function n(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }

        function r(e, t) {
            if ("function" == typeof e) return n(e, t);
            if ("object" != typeof e || null === e) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === e ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var r = Object.keys(e), i = {}, a = 0; a < r.length; a++) {
                var o = r[a],
                    s = e[o];
                "function" == typeof s && (i[o] = n(s, t))
            }
            return i
        }
        t.__esModule = !0, t["default"] = r
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i() {
            for (var e = arguments.length, t = Array(e), n = 0; e > n; n++) t[n] = arguments[n];
            return function(e) {
                return function(n, r, i) {
                    var o = e(n, r, i),
                        u = o.dispatch,
                        c = [],
                        l = {
                            getState: o.getState,
                            dispatch: function(e) {
                                return u(e)
                            }
                        };
                    return c = t.map(function(e) {
                        return e(l)
                    }), u = s["default"].apply(void 0, c)(o.dispatch), a({}, o, {
                        dispatch: u
                    })
                }
            }
        }
        var a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
        t.__esModule = !0, t["default"] = i;
        var o = n(353),
            s = r(o)
    }, function(e, t) {
        "use strict";

        function n() {
            for (var e = arguments.length, t = Array(e), n = 0; e > n; n++) t[n] = arguments[n];
            return function() {
                if (0 === t.length) return arguments.length <= 0 ? void 0 : arguments[0];
                var e = t[t.length - 1],
                    n = t.slice(0, -1);
                return n.reduceRight(function(e, t) {
                    return t(e)
                }, e.apply(void 0, arguments))
            }
        }
        t.__esModule = !0, t["default"] = n
    }, function(e, t) {
        "use strict";

        function n(e) {
            var t = e.dispatch,
                n = e.getState;
            return function(e) {
                return function(r) {
                    return "function" == typeof r ? r(t, n) : e(r)
                }
            }
        }
        t.__esModule = !0, t["default"] = n
    }, function(e, t, n) {
        "use strict";

        function r() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? a.nullAdsManager : arguments[0],
                t = arguments[1];
            switch (t.type) {
                case i.ACTION_CREATE_ADS_MANAGER:
                    return t.adsManager;
                default:
                    return e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.adsManager = r;
        var i = n(291),
            a = n(296)
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? u : arguments[0],
                t = arguments[1];
            switch (t.type) {
                case s.ACTION_INCREMENT_QUALITY_CHANGE_COUNT:
                    return (0, o["default"])({}, e, {
                        qualityChangeCount: e.qualityChangeCount + 1
                    });
                case s.ACTION_RESET_QUALITY_CHANGE_COUNT:
                    return (0, o["default"])({}, e, {
                        qualityChangeCount: 0
                    });
                case s.ACTION_SET_TRACKING_CLIENTS:
                    return (0, o["default"])({}, e, {
                        trackingClients: t.clients
                    });
                case s.ACTION_RESET_PLAY_SESSION:
                    return (0, o["default"])({}, e, {
                        playSessionId: t.playSessionId,
                        playSessionStartTime: t.playSessionStartTime
                    });
                default:
                    return e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DEFAULT_ANALYTICS = void 0, t.analytics = i;
        var a = n(50),
            o = r(a),
            s = n(201),
            u = t.DEFAULT_ANALYTICS = {
                qualityChangeCount: 0,
                playSessionId: "",
                playSessionStartTime: 0
            }
    }, function(e, t, n) {
        "use strict";

        function r() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? !1 : arguments[0],
                t = arguments[1];
            switch (t.type) {
                case i.ACTION_SET_ANALYTICS_TRACKER:
                    return t.tracker;
                default:
                    return e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.analyticsTracker = r;
        var i = n(358)
    }, function(e, t) {
        "use strict";

        function n(e) {
            return {
                type: r,
                tracker: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.setAnalyticsTracker = n;
        var r = t.ACTION_SET_ANALYTICS_TRACKER = "set analytics tracker"
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? c : arguments[0],
                t = arguments[1];
            switch (t.type) {
                case u.ACTION_SET_PLAYER_TYPE:
                    return (0, o["default"])({}, e, {
                        playerType: t.playerType
                    });
                default:
                    return e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.env = i;
        var a = n(295),
            o = r(a),
            s = n(199),
            u = n(360),
            c = {
                playerType: s.PLAYER_POPOUT
            }
    }, function(e, t) {
        "use strict";

        function n(e) {
            return {
                type: r,
                playerType: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.setPlayerType = n;
        var r = t.ACTION_SET_PLAYER_TYPE = "set player type"
    }, function(e, t, n) {
        "use strict";

        function r() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? o : arguments[0],
                t = arguments[1];
            switch (t.type) {
                case i.ACTION_SET_EXPERIMENTS:
                    return t.experiments;
                default:
                    return e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.experiments = r;
        var i = n(362),
            a = new Error("Attempting to use experiments too early"),
            o = {
                get: function() {
                    return Promise.reject(a)
                }
            }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return {
                type: o,
                experiments: e
            }
        }

        function i(e) {
            var t = e.login,
                n = e.deviceID;
            return r((0, a.createClient)({
                login: t,
                deviceID: n
            }))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ACTION_SET_EXPERIMENTS = void 0, t.setExperiments = r, t.loadExperiments = i;
        var a = n(161),
            o = t.ACTION_SET_EXPERIMENTS = "set experiments"
    }, function(e, t, n) {
        "use strict";

        function r() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? a.DEFAULT_LANGUAGE : arguments[0],
                t = arguments[1];
            switch (t.type) {
                case i.ACTION_SET_LANGUAGE:
                    return t.lang;
                default:
                    return e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.lang = r;
        var i = n(364),
            a = n(365)
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function i(e) {
            return {
                type: p,
                lang: e
            }
        }

        function a(e) {
            return function(t, n) {
                var r = n(),
                    a = r.lang;
                return a.shortCode === e ? Promise.resolve() : (0, d.getI18N)(e).then(i).then(t)
            }
        }

        function o(e) {
            return function(t, n) {
                var r = n(),
                    i = r.lang,
                    o = r.navigator,
                    s = l.get(h, i.shortCode),
                    c = t(a(s)),
                    d = (0, f.userInfo)().then(function(e) {
                        return l.set(h, e.received_language), e.received_language
                    }, function() {
                        return u.get("language", null) || o.languages && o.languages[0] || o.language || o.userLanguage || e
                    }).then(a).then(t);
                return Promise.all([c, d])
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.LAST_KNOWN_LANG = t.ACTION_SET_LANGUAGE = void 0, t.setLanguage = i, t.loadLanguage = a, t.loadDefaultLang = o;
        var s = n(207),
            u = r(s),
            c = n(175),
            l = r(c),
            d = n(365),
            f = n(157),
            p = t.ACTION_SET_LANGUAGE = "set language",
            h = t.LAST_KNOWN_LANG = "playerLanguage"
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e) {
            var t = e.replace(/-[a-zA-Z]{2}$/, function(e) {
                    return e.toUpperCase()
                }),
                n = e.replace(/-[a-zA-Z]{2}$/, "");
            return (0, _["default"])(["ar-SA", "bg-BG", "cs-CZ", "da-DK", "de-DE", "el-GR", "en-US", "es-MX", "es-US", "es-ES", "es-LA", "fi-FI", "fr-FR", "hi-IN", "hu-HU", "it-IT", "ja-JP", "ko-KR", "nl-NL", "no-NO", "pl-PL", "pt-BR", "pt-PT", "ro-RO", "ru-RU", "sk-SK", "sv-SE", "th-TH", "tr-TR", "vi-VN", "zh-TW", "zh-CN"], t) || (t = m[n] || n), new Promise(function(e, r) {
                u["default"].changeLanguage(t, function(i, a) {
                    i ? r(i) : e(new b(n, t, a))
                })
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DEFAULT_LANGUAGE = t.missingKeyHandler = void 0;
        var o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
        t.getI18N = a;
        var s = n(366),
            u = r(s),
            c = n(382),
            l = r(c),
            d = n(88),
            f = n(159),
            p = r(f),
            h = n(295),
            v = r(h),
            g = n(35),
            _ = r(g),
            m = (0, v["default"])((0, p["default"])(["ar-SA", "bg-BG", "cs-CZ", "da-DK", "de-DE", "el-GR", "en-US", "es-MX", "es-US", "es-ES", "es-LA", "fi-FI", "fr-FR", "hi-IN", "hu-HU", "it-IT", "ja-JP", "ko-KR", "nl-NL", "no-NO", "pl-PL", "pt-BR", "pt-PT", "ro-RO", "ru-RU", "sk-SK", "sv-SE", "th-TH", "tr-TR", "vi-VN", "zh-TW", "zh-CN"], function(e, t) {
                var n = t.replace(/-[a-zA-Z]{2}$/, "");
                return e[n] = t, e
            }, {}), {
                es: "es-ES",
                pt: "pt-PT",
                zh: "zh-CN"
            }),
            y = t.missingKeyHandler = function(e, t, n) {
                console.error("Tried to translate " + n + " and failed: no such key")
            };
        u["default"].use(l["default"]).init({
            fallbackLng: "en-US",
            load: "currentOnly",
            backend: {
                crossDomain: !0,
                loadPath: d.playerHost + "/localization/{{lng}}/strings.json"
            },
            nsSeparator: !1,
            keySeparator: !1,
            missingKeyHandler: y,
            saveMissing: !0
        }), u["default"].addResourceBundle("en-US", u["default"].options.ns[0], n(383));
        var b = function() {
            function e(t, n, r) {
                i(this, e), this.shortCode = t, this.langCode = n, this._translate = r
            }
            return o(e, [{
                key: "translate",
                value: function(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                        n = this._translate(e, t);
                    return t.replacements && Object.keys(t.replacements).map(function(e) {
                        n = n.replace(e, t.replacements[e])
                    }), n
                }
            }]), e
        }();
        t.DEFAULT_LANGUAGE = new b("en", "en-US", u["default"].getFixedT("en-US"))
    }, function(e, t, n) {
        e.exports = n(367)["default"]
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(368),
            a = r(i);
        t["default"] = a["default"]
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e, t) {
            for (var n = Object.getOwnPropertyNames(t), r = 0; r < n.length; r++) {
                var i = n[r],
                    a = Object.getOwnPropertyDescriptor(t, i);
                a && a.configurable && void 0 === e[i] && Object.defineProperty(e, i, a)
            }
            return e
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function u(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : a(e, t))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            },
            l = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            d = n(369),
            f = i(d),
            p = n(370),
            h = i(p),
            v = n(371),
            g = i(v),
            _ = n(373),
            m = i(_),
            y = n(376),
            b = i(y),
            E = n(377),
            w = i(E),
            k = n(378),
            T = i(k),
            S = n(379),
            A = i(S),
            C = n(380),
            O = i(C),
            P = n(381),
            L = n(374),
            j = i(L),
            M = n(375),
            I = r(M),
            N = function(e) {
                function t() {
                    var n = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                        r = arguments[1];
                    o(this, t);
                    var i = s(this, e.call(this));
                    return i.options = (0, P.transformOptions)(n), i.services = {}, i.logger = f["default"], i.modules = {}, r && !i.isInitialized && i.init(n, r), i
                }
                return u(t, e), t.prototype.init = function(e, t) {
                    function n(e) {
                        return e ? "function" == typeof e ? new e : e : void 0
                    }
                    var r = this;
                    if ("function" == typeof e && (t = e, e = {}), e || (e = {}), "v1" === e.compatibilityAPI ? this.options = l({}, (0, P.get)(), (0, P.transformOptions)(I.convertAPIOptions(e)), {}) : "v1" === e.compatibilityJSON ? this.options = l({}, (0, P.get)(), (0, P.transformOptions)(I.convertJSONOptions(e)), {}) : this.options = l({}, (0, P.get)(), this.options, (0, P.transformOptions)(e)), t || (t = function() {}), !this.options.isClone) {
                        this.modules.logger ? f["default"].init(n(this.modules.logger), this.options) : f["default"].init(null, this.options);
                        var i = new b["default"](this.options);
                        this.store = new g["default"](this.options.resources, this.options);
                        var a = this.services;
                        a.logger = f["default"], a.resourceStore = this.store, a.resourceStore.on("added removed", function(e, t) {
                            a.cacheConnector.save()
                        }), a.languageUtils = i, a.pluralResolver = new w["default"](i, {
                            prepend: this.options.pluralSeparator,
                            compatibilityJSON: this.options.compatibilityJSON
                        }), a.interpolator = new T["default"](this.options), a.backendConnector = new A["default"](n(this.modules.backend), a.resourceStore, a, this.options), a.backendConnector.on("*", function(e) {
                            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; t > i; i++) n[i - 1] = arguments[i];
                            r.emit.apply(r, [e].concat(n))
                        }), a.backendConnector.on("loaded", function(e) {
                            a.cacheConnector.save()
                        }), a.cacheConnector = new O["default"](n(this.modules.cache), a.resourceStore, a, this.options), a.cacheConnector.on("*", function(e) {
                            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; t > i; i++) n[i - 1] = arguments[i];
                            r.emit.apply(r, [e].concat(n))
                        }), this.modules.languageDetector && (a.languageDetector = n(this.modules.languageDetector), a.languageDetector.init(a, this.options.detection, this.options)), this.translator = new m["default"](this.services, this.options), this.translator.on("*", function(e) {
                            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; t > i; i++) n[i - 1] = arguments[i];
                            r.emit.apply(r, [e].concat(n))
                        })
                    }
                    var o = ["getResource", "addResource", "addResources", "addResourceBundle", "removeResourceBundle", "hasResourceBundle", "getResourceBundle"];
                    return o.forEach(function(e) {
                        r[e] = function() {
                            return this.store[e].apply(this.store, arguments)
                        }
                    }), "v1" === this.options.compatibilityAPI && I.appendBackwardsAPI(this), setTimeout(function() {
                        r.changeLanguage(r.options.lng, function(e, n) {
                            r.emit("initialized", r.options), r.logger.log("initialized", r.options), t(e, n)
                        })
                    }, 10), this
                }, t.prototype.loadResources = function(e) {
                    var t = this;
                    if (e || (e = function() {}), this.options.resources) e(null);
                    else {
                        var n = function() {
                            if (t.language && "cimode" === t.language.toLowerCase()) return {
                                v: e()
                            };
                            var n = [],
                                r = function(e) {
                                    var r = t.services.languageUtils.toResolveHierarchy(e);
                                    r.forEach(function(e) {
                                        n.indexOf(e) < 0 && n.push(e)
                                    })
                                };
                            r(t.language), t.options.preload && t.options.preload.forEach(function(e) {
                                r(e)
                            }), t.services.cacheConnector.load(n, t.options.ns, function() {
                                t.services.backendConnector.load(n, t.options.ns, e)
                            })
                        }();
                        if ("object" === ("undefined" == typeof n ? "undefined" : c(n))) return n.v
                    }
                }, t.prototype.use = function(e) {
                    return "backend" === e.type && (this.modules.backend = e), "cache" === e.type && (this.modules.cache = e), ("logger" === e.type || e.log && e.warn && e.warn) && (this.modules.logger = e), "languageDetector" === e.type && (this.modules.languageDetector = e), "postProcessor" === e.type && j["default"].addPostProcessor(e), this
                }, t.prototype.changeLanguage = function(e, t) {
                    var n = this,
                        r = function(r) {
                            e && (n.emit("languageChanged", e), n.logger.log("languageChanged", e)), t && t(r, function() {
                                for (var e = arguments.length, t = Array(e), r = 0; e > r; r++) t[r] = arguments[r];
                                return n.t.apply(n, t)
                            })
                        };
                    !e && this.services.languageDetector && (e = this.services.languageDetector.detect()), e && (this.language = e, this.languages = this.services.languageUtils.toResolveHierarchy(e), this.translator.changeLanguage(e), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage(e)), this.loadResources(function(e) {
                        r(e)
                    })
                }, t.prototype.getFixedT = function(e, t) {
                    var n = this,
                        r = function i(e, t) {
                            return t = t || {}, t.lng = t.lng || i.lng, t.ns = t.ns || i.ns, n.t(e, t)
                        };
                    return r.lng = e, r.ns = t, r
                }, t.prototype.t = function() {
                    return this.translator && this.translator.translate.apply(this.translator, arguments)
                }, t.prototype.exists = function() {
                    return this.translator && this.translator.exists.apply(this.translator, arguments)
                }, t.prototype.setDefaultNamespace = function(e) {
                    this.options.defaultNS = e
                }, t.prototype.loadNamespaces = function(e, t) {
                    var n = this;
                    return this.options.ns ? ("string" == typeof e && (e = [e]), e.forEach(function(e) {
                        n.options.ns.indexOf(e) < 0 && n.options.ns.push(e)
                    }), void this.loadResources(t)) : t && t()
                }, t.prototype.loadLanguages = function(e, t) {
                    "string" == typeof e && (e = [e]);
                    var n = this.options.preload || [],
                        r = e.filter(function(e) {
                            return n.indexOf(e) < 0
                        });
                    return r.length ? (this.options.preload = n.concat(r), void this.loadResources(t)) : t()
                }, t.prototype.dir = function(e) {
                    e || (e = this.language);
                    var t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam"];
                    return t.indexOf(this.services.languageUtils.getLanguagePartFromCode(e)) ? "ltr" : "rtl"
                }, t.prototype.createInstance = function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                        n = arguments[1];
                    return new t(e, n)
                }, t.prototype.cloneInstance = function() {
                    var e = this,
                        n = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                        r = arguments[1],
                        i = new t(l({}, n, this.options, {
                            isClone: !0
                        }), r),
                        a = ["store", "translator", "services", "language"];
                    return a.forEach(function(t) {
                        i[t] = e[t]
                    }), i
                }, t
            }(h["default"]);
        t["default"] = new N
    }, function(e, t) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            i = {
                type: "logger",
                log: function(e) {
                    this._output("log", e)
                },
                warn: function(e) {
                    this._output("warn", e)
                },
                error: function(e) {
                    this._output("error", e)
                },
                _output: function(e, t) {
                    console && console[e] && console[e].apply(console, Array.prototype.slice.call(t))
                }
            },
            a = function() {
                function e(t) {
                    var r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                    n(this, e), this.subs = [], this.init(t, r)
                }
                return e.prototype.init = function(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                    this.prefix = t.prefix || "i18next:", this.logger = e || i, this.options = t, this.debug = t.debug === !1 ? !1 : !0
                }, e.prototype.setDebug = function(e) {
                    this.debug = e, this.subs.forEach(function(t) {
                        t.setDebug(e)
                    })
                }, e.prototype.log = function() {
                    this.forward(arguments, "log", "", !0)
                }, e.prototype.warn = function() {
                    this.forward(arguments, "warn", "", !0)
                }, e.prototype.error = function() {
                    this.forward(arguments, "error", "")
                }, e.prototype.deprecate = function() {
                    this.forward(arguments, "warn", "WARNING DEPRECATED: ", !0)
                }, e.prototype.forward = function(e, t, n, r) {
                    (!r || this.debug) && ("string" == typeof e[0] && (e[0] = n + this.prefix + " " + e[0]), this.logger[t](e))
                }, e.prototype.create = function(t) {
                    var n = new e(this.logger, r({
                        prefix: this.prefix + ":" + t + ":"
                    }, this.options));
                    return this.subs.push(n), n
                }, e
            }();
        t["default"] = new a
    }, function(e, t) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
            function e() {
                n(this, e), this.observers = {}
            }
            return e.prototype.on = function(e, t) {
                var n = this;
                e.split(" ").forEach(function(e) {
                    n.observers[e] = n.observers[e] || [], n.observers[e].push(t)
                })
            }, e.prototype.off = function(e, t) {
                var n = this;
                this.observers[e] && this.observers[e].forEach(function() {
                    if (t) {
                        var r = n.observers[e].indexOf(t);
                        r > -1 && n.observers[e].splice(r, 1)
                    } else delete n.observers[e]
                })
            }, e.prototype.emit = function(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; t > r; r++) n[r - 1] = arguments[r];
                this.observers[e] && this.observers[e].forEach(function(e) {
                    e.apply(void 0, n)
                }), this.observers["*"] && this.observers["*"].forEach(function(t) {
                    var r;
                    t.apply(t, (r = [e]).concat.apply(r, n))
                })
            }, e
        }();
        t["default"] = r
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e, t) {
            for (var n = Object.getOwnPropertyNames(t), r = 0; r < n.length; r++) {
                var i = n[r],
                    a = Object.getOwnPropertyDescriptor(t, i);
                a && a.configurable && void 0 === e[i] && Object.defineProperty(e, i, a)
            }
            return e
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function u(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : a(e, t))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            l = n(370),
            d = i(l),
            f = n(372),
            p = r(f),
            h = function(e) {
                function t() {
                    var n = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                        r = arguments.length <= 1 || void 0 === arguments[1] ? {
                            ns: ["translation"],
                            defaultNS: "translation"
                        } : arguments[1];
                    o(this, t);
                    var i = s(this, e.call(this));
                    return i.data = n, i.options = r, i
                }
                return u(t, e), t.prototype.addNamespaces = function(e) {
                    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
                }, t.prototype.removeNamespaces = function(e) {
                    var t = this.options.ns.indexOf(e);
                    t > -1 && this.options.ns.splice(t, 1)
                }, t.prototype.getResource = function(e, t, n) {
                    var r = arguments.length <= 3 || void 0 === arguments[3] ? {} : arguments[3],
                        i = r.keySeparator || this.options.keySeparator;
                    void 0 === i && (i = ".");
                    var a = [e, t];
                    return n && "string" != typeof n && (a = a.concat(n)), n && "string" == typeof n && (a = a.concat(i ? n.split(i) : n)), e.indexOf(".") > -1 && (a = e.split(".")), p.getPath(this.data, a)
                }, t.prototype.addResource = function(e, t, n, r) {
                    var i = arguments.length <= 4 || void 0 === arguments[4] ? {
                            silent: !1
                        } : arguments[4],
                        a = this.options.keySeparator;
                    void 0 === a && (a = ".");
                    var o = [e, t];
                    n && (o = o.concat(a ? n.split(a) : n)), e.indexOf(".") > -1 && (o = e.split("."), r = t, t = o[1]), this.addNamespaces(t), p.setPath(this.data, o, r), i.silent || this.emit("added", e, t, n, r)
                }, t.prototype.addResources = function(e, t, n) {
                    for (var r in n) "string" == typeof n[r] && this.addResource(e, t, r, n[r], {
                        silent: !0
                    });
                    this.emit("added", e, t, n)
                }, t.prototype.addResourceBundle = function(e, t, n, r, i) {
                    var a = [e, t];
                    e.indexOf(".") > -1 && (a = e.split("."), r = n, n = t, t = a[1]), this.addNamespaces(t);
                    var o = p.getPath(this.data, a) || {};
                    r ? p.deepExtend(o, n, i) : o = c({}, o, n), p.setPath(this.data, a, o), this.emit("added", e, t, n)
                }, t.prototype.removeResourceBundle = function(e, t) {
                    this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t)
                }, t.prototype.hasResourceBundle = function(e, t) {
                    return void 0 !== this.getResource(e, t)
                }, t.prototype.getResourceBundle = function(e, t) {
                    return t || (t = this.options.defaultNS), "v1" === this.options.compatibilityAPI ? c({}, this.getResource(e, t)) : this.getResource(e, t)
                }, t.prototype.toJSON = function() {
                    return this.data
                }, t
            }(d["default"]);
        t["default"] = h
    }, function(e, t) {
        "use strict";

        function n(e) {
            return null == e ? "" : "" + e
        }

        function r(e, t, n) {
            e.forEach(function(e) {
                t[e] && (n[e] = t[e])
            })
        }

        function i(e, t, n) {
            function r(e) {
                return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e
            }
            for (var i = "string" != typeof t ? [].concat(t) : t.split("."); i.length > 1;) {
                if (!e) return {};
                var a = r(i.shift());
                !e[a] && n && (e[a] = new n), e = e[a]
            }
            return e ? {
                obj: e,
                k: r(i.shift())
            } : {}
        }

        function a(e, t, n) {
            var r = i(e, t, Object),
                a = r.obj,
                o = r.k;
            a[o] = n
        }

        function o(e, t, n, r) {
            var a = i(e, t, Object),
                o = a.obj,
                s = a.k;
            o[s] = o[s] || [], r && (o[s] = o[s].concat(n)), r || o[s].push(n)
        }

        function s(e, t) {
            var n = i(e, t),
                r = n.obj,
                a = n.k;
            return r ? r[a] : void 0
        }

        function u(e, t, n) {
            for (var r in t) r in e ? "string" == typeof e[r] || e[r] instanceof String || "string" == typeof t[r] || t[r] instanceof String ? n && (e[r] = t[r]) : u(e[r], t[r], n) : e[r] = t[r];
            return e
        }

        function c(e) {
            return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
        }

        function l(e) {
            return "string" == typeof e ? e.replace(/[&<>"'\/]/g, function(e) {
                return d[e]
            }) : e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.makeString = n, t.copy = r, t.setPath = a, t.pushPath = o, t.getPath = s, t.deepExtend = u, t.regexEscape = c, t.escape = l;
        var d = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;"
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e, t) {
            for (var n = Object.getOwnPropertyNames(t), r = 0; r < n.length; r++) {
                var i = n[r],
                    a = Object.getOwnPropertyDescriptor(t, i);
                a && a.configurable && void 0 === e[i] && Object.defineProperty(e, i, a)
            }
            return e
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function u(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : a(e, t))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            },
            d = n(369),
            f = i(d),
            p = n(370),
            h = i(p),
            v = n(374),
            g = i(v),
            _ = n(375),
            m = r(_),
            y = n(372),
            b = r(y),
            E = function(e) {
                function t(n) {
                    var r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                    o(this, t);
                    var i = s(this, e.call(this));
                    return b.copy(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector"], n, i), i.options = r, i.logger = f["default"].create("translator"), i
                }
                return u(t, e), t.prototype.changeLanguage = function(e) {
                    e && (this.language = e)
                }, t.prototype.exists = function(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? {
                        interpolation: {}
                    } : arguments[1];
                    return "v1" === this.options.compatibilityAPI && (t = m.convertTOptions(t)), void 0 !== this.resolve(e, t)
                }, t.prototype.extractFromKey = function(e, t) {
                    var n = t.nsSeparator || this.options.nsSeparator;
                    void 0 === n && (n = ":");
                    var r = t.ns || this.options.defaultNS;
                    if (n && e.indexOf(n) > -1) {
                        var i = e.split(n);
                        r = i[0], e = i[1]
                    }
                    return "string" == typeof r && (r = [r]), {
                        key: e,
                        namespaces: r
                    }
                }, t.prototype.translate = function(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                    if ("object" !== ("undefined" == typeof t ? "undefined" : l(t)) ? t = this.options.overloadTranslationOptionHandler(arguments) : "v1" === this.options.compatibilityAPI && (t = m.convertTOptions(t)), void 0 === e || null === e || "" === e) return "";
                    "number" == typeof e && (e = String(e)), "string" == typeof e && (e = [e]);
                    var n = t.lng || this.language;
                    if (n && "cimode" === n.toLowerCase()) return e[e.length - 1];
                    var r = t.keySeparator || this.options.keySeparator || ".",
                        i = this.extractFromKey(e[e.length - 1], t),
                        a = i.key,
                        o = i.namespaces,
                        s = o[o.length - 1],
                        u = this.resolve(e, t),
                        d = Object.prototype.toString.apply(u),
                        f = ["[object Number]", "[object Function]", "[object RegExp]"],
                        p = void 0 !== t.joinArrays ? t.joinArrays : this.options.joinArrays;
                    if (u && "string" != typeof u && f.indexOf(d) < 0 && (!p || "[object Array]" !== d)) {
                        if (!t.returnObjects && !this.options.returnObjects) return this.logger.warn("accessing an object - but returnObjects options is not enabled!"), this.options.returnedObjectHandler ? this.options.returnedObjectHandler(a, u, t) : "key '" + a + " (" + this.language + ")' returned an object instead of string.";
                        var h = "[object Array]" === d ? [] : {};
                        for (var v in u) h[v] = this.translate("" + a + r + v, c({
                            joinArrays: !1,
                            ns: o
                        }, t));
                        u = h
                    } else if (p && "[object Array]" === d) u = u.join(p), u && (u = this.extendTranslation(u, a, t));
                    else {
                        var g = !1,
                            _ = !1;
                        if (!this.isValidLookup(u) && t.defaultValue && (g = !0, u = t.defaultValue), this.isValidLookup(u) || (_ = !0, u = a), (_ || g) && (this.logger.log("missingKey", n, s, a, u), this.options.saveMissing)) {
                            var y = [];
                            if ("fallback" === this.options.saveMissingTo && this.options.fallbackLng && this.options.fallbackLng[0])
                                for (var b = 0; b < this.options.fallbackLng.length; b++) y.push(this.options.fallbackLng[b]);
                            else "all" === this.options.saveMissingTo ? y = this.languageUtils.toResolveHierarchy(t.lng || this.language) : y.push(t.lng || this.language);
                            this.options.missingKeyHandler ? this.options.missingKeyHandler(y, s, a, u) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(y, s, a, u),
                                this.emit("missingKey", y, s, a, u)
                        }
                        u = this.extendTranslation(u, a, t), _ && u === a && this.options.appendNamespaceToMissingKey && (u = s + ":" + a), _ && this.options.parseMissingKeyHandler && (u = this.options.parseMissingKeyHandler(u))
                    }
                    return u
                }, t.prototype.extendTranslation = function(e, t, n) {
                    var r = this;
                    n.interpolation && this.interpolator.init(n);
                    var i = n.replace && "string" != typeof n.replace ? n.replace : n;
                    this.options.interpolation.defaultVariables && (i = c({}, this.options.interpolation.defaultVariables, i)), e = this.interpolator.interpolate(e, i), e = this.interpolator.nest(e, function() {
                        for (var e = arguments.length, t = Array(e), n = 0; e > n; n++) t[n] = arguments[n];
                        return r.translate.apply(r, t)
                    }, n), n.interpolation && this.interpolator.reset();
                    var a = n.postProcess || this.options.postProcess,
                        o = "string" == typeof a ? [a] : a;
                    return void 0 !== e && o && o.length && n.applyPostProcessor !== !1 && (e = g["default"].handle(o, e, t, n, this)), e
                }, t.prototype.resolve = function(e) {
                    var t = this,
                        n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                        r = void 0;
                    return "string" == typeof e && (e = [e]), e.forEach(function(e) {
                        if (!t.isValidLookup(r)) {
                            var i = t.extractFromKey(e, n),
                                a = i.key,
                                o = i.namespaces;
                            t.options.fallbackNS && (o = o.concat(t.options.fallbackNS));
                            var s = void 0 !== n.count && "string" != typeof n.count,
                                u = void 0 !== n.context && "string" == typeof n.context && "" !== n.context,
                                c = n.lngs ? n.lngs : t.languageUtils.toResolveHierarchy(n.lng || t.language);
                            o.forEach(function(e) {
                                t.isValidLookup(r) || c.forEach(function(i) {
                                    if (!t.isValidLookup(r)) {
                                        var o = a,
                                            c = [o],
                                            l = void 0;
                                        s && (l = t.pluralResolver.getSuffix(i, n.count)), s && u && c.push(o + l), u && c.push(o += "" + t.options.contextSeparator + n.context), s && c.push(o += l);
                                        for (var d = void 0; d = c.pop();) t.isValidLookup(r) || (r = t.getResource(i, e, d, n))
                                    }
                                })
                            })
                        }
                    }), r
                }, t.prototype.isValidLookup = function(e) {
                    return !(void 0 === e || !this.options.returnNull && null === e || !this.options.returnEmptyString && "" === e)
                }, t.prototype.getResource = function(e, t, n) {
                    var r = arguments.length <= 3 || void 0 === arguments[3] ? {} : arguments[3];
                    return this.resourceStore.getResource(e, t, n, r)
                }, t
            }(h["default"]);
        t["default"] = E
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t["default"] = {
            processors: {},
            addPostProcessor: function(e) {
                this.processors[e.name] = e
            },
            handle: function(e, t, n, r, i) {
                var a = this;
                return e.forEach(function(e) {
                    a.processors[e] && (t = a.processors[e].process(t, n, r, i))
                }), t
            }
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e) {
            return e.interpolation = {
                unescapeSuffix: "HTML"
            }, e.interpolation.prefix = e.interpolationPrefix || "__", e.interpolation.suffix = e.interpolationSuffix || "__", e.interpolation.escapeValue = e.escapeInterpolation || !1, e.interpolation.nestingPrefix = e.reusePrefix || "$t(", e.interpolation.nestingSuffix = e.reuseSuffix || ")", e
        }

        function a(e) {
            return e.resStore && (e.resources = e.resStore), e.ns && e.ns.defaultNs ? (e.defaultNS = e.ns.defaultNs, e.ns = e.ns.namespaces) : e.defaultNS = e.ns || "translation", e.fallbackToDefaultNS && e.defaultNS && (e.fallbackNS = e.defaultNS), e.saveMissing = e.sendMissing, e.saveMissingTo = e.sendMissingTo || "current", e.returnNull = e.fallbackOnNull ? !1 : !0, e.returnEmptyString = e.fallbackOnEmpty ? !1 : !0, e.returnObjects = e.returnObjectTrees, e.joinArrays = "\n", e.returnedObjectHandler = e.objectTreeKeyHandler, e.parseMissingKeyHandler = e.parseMissingKey, e.appendNamespaceToMissingKey = !0, e.nsSeparator = e.nsseparator, e.keySeparator = e.keyseparator, "sprintf" === e.shortcutFunction && (e.overloadTranslationOptionHandler = function(e) {
                for (var t = [], n = 1; n < e.length; n++) t.push(e[n]);
                return {
                    postProcess: "sprintf",
                    sprintf: t
                }
            }), e.whitelist = e.lngWhitelist, e.preload = e.preload, "current" === e.load && (e.load = "currentOnly"), "unspecific" === e.load && (e.load = "languageOnly"), e.backend = e.backend || {}, e.backend.loadPath = e.resGetPath || "locales/__lng__/__ns__.json", e.backend.addPath = e.resPostPath || "locales/add/__lng__/__ns__", e.backend.allowMultiLoading = e.dynamicLoad, e.cache = e.cache || {}, e.cache.prefix = "res_", e.cache.expirationTime = 6048e5, e.cache.enabled = e.useLocalStorage ? !0 : !1, e = i(e), e.defaultVariables && (e.interpolation.defaultVariables = e.defaultVariables), e
        }

        function o(e) {
            return e = i(e), e.joinArrays = "\n", e
        }

        function s(e) {
            return (e.interpolationPrefix || e.interpolationSuffix || e.escapeInterpolation) && (e = i(e)), e.nsSeparator = e.nsseparator, e.keySeparator = e.keyseparator, e.returnObjects = e.returnObjectTrees, e
        }

        function u(e) {
            e.lng = function() {
                return l["default"].deprecate("i18next.lng() can be replaced by i18next.language for detected language or i18next.languages for languages ordered by translation lookup."), e.services.languageUtils.toResolveHierarchy(e.language)[0]
            }, e.preload = function(t, n) {
                l["default"].deprecate("i18next.preload() can be replaced with i18next.loadLanguages()"), e.loadLanguages(t, n)
            }, e.setLng = function(t, n, r) {
                return l["default"].deprecate("i18next.setLng() can be replaced with i18next.changeLanguage() or i18next.getFixedT() to get a translation function with fixed language or namespace."), "function" == typeof n && (r = n, n = {}), n || (n = {}), n.fixLng === !0 && r ? r(null, e.getFixedT(t)) : void e.changeLanguage(t, r)
            }, e.addPostProcessor = function(t, n) {
                l["default"].deprecate("i18next.addPostProcessor() can be replaced by i18next.use({ type: 'postProcessor', name: 'name', process: fc })"), e.use({
                    type: "postProcessor",
                    name: t,
                    process: n
                })
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.convertAPIOptions = a, t.convertJSONOptions = o, t.convertTOptions = s, t.appendBackwardsAPI = u;
        var c = n(369),
            l = r(c)
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(369),
            s = r(o),
            u = function() {
                function e(t) {
                    i(this, e), this.options = t, this.whitelist = this.options.whitelist || !1, this.logger = s["default"].create("languageUtils")
                }
                return e.prototype.getLanguagePartFromCode = function(e) {
                    if (e.indexOf("-") < 0) return e;
                    var t = ["NB-NO", "NN-NO", "nb-NO", "nn-NO", "nb-no", "nn-no"],
                        n = e.split("-");
                    return this.formatLanguageCode(t.indexOf(e) > -1 ? n[1].toLowerCase() : n[0])
                }, e.prototype.formatLanguageCode = function(e) {
                    if ("string" == typeof e && e.indexOf("-") > -1) {
                        var t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
                            n = e.split("-");
                        return this.options.lowerCaseLng ? n = n.map(function(e) {
                            return e.toLowerCase()
                        }) : 2 === n.length ? (n[0] = n[0].toLowerCase(), n[1] = n[1].toUpperCase(), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = a(n[1].toLowerCase()))) : 3 === n.length && (n[0] = n[0].toLowerCase(), 2 === n[1].length && (n[1] = n[1].toUpperCase()), "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = a(n[1].toLowerCase())), t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = a(n[2].toLowerCase()))), n.join("-")
                    }
                    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
                }, e.prototype.isWhitelisted = function(e) {
                    return "languageOnly" === this.options.load && (e = this.getLanguagePartFromCode(e)), !this.whitelist || !this.whitelist.length || this.whitelist.indexOf(e) > -1 ? !0 : !1
                }, e.prototype.toResolveHierarchy = function(e, t) {
                    var n = this;
                    t = t || this.options.fallbackLng || [], "string" == typeof t && (t = [t]);
                    var r = [],
                        i = function(e) {
                            n.isWhitelisted(e) ? r.push(e) : n.logger.warn("rejecting non-whitelisted language code: " + e)
                        };
                    return "string" == typeof e && e.indexOf("-") > -1 ? ("languageOnly" !== this.options.load && i(this.formatLanguageCode(e)), "currentOnly" !== this.options.load && i(this.getLanguagePartFromCode(e))) : "string" == typeof e && i(this.formatLanguageCode(e)), t.forEach(function(e) {
                        r.indexOf(e) < 0 && i(n.formatLanguageCode(e))
                    }), r
                }, e
            }();
        t["default"] = u
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a() {
            var e = {};
            return u.forEach(function(t) {
                t.lngs.forEach(function(n) {
                    return e[n] = {
                        numbers: t.nr,
                        plurals: c[t.fc]
                    }
                })
            }), e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(369),
            s = r(o),
            u = [{
                lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "tg", "ti", "tr", "uz", "wa"],
                nr: [1, 2],
                fc: 1
            }, {
                lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "es_ar", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "he", "hi", "hu", "hy", "ia", "it", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt", "pt_br", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
                nr: [1, 2],
                fc: 2
            }, {
                lngs: ["ay", "bo", "cgg", "fa", "id", "ja", "jbo", "ka", "kk", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
                nr: [1],
                fc: 3
            }, {
                lngs: ["be", "bs", "dz", "hr", "ru", "sr", "uk"],
                nr: [1, 2, 5],
                fc: 4
            }, {
                lngs: ["ar"],
                nr: [0, 1, 2, 3, 11, 100],
                fc: 5
            }, {
                lngs: ["cs", "sk"],
                nr: [1, 2, 5],
                fc: 6
            }, {
                lngs: ["csb", "pl"],
                nr: [1, 2, 5],
                fc: 7
            }, {
                lngs: ["cy"],
                nr: [1, 2, 3, 8],
                fc: 8
            }, {
                lngs: ["fr"],
                nr: [1, 2],
                fc: 9
            }, {
                lngs: ["ga"],
                nr: [1, 2, 3, 7, 11],
                fc: 10
            }, {
                lngs: ["gd"],
                nr: [1, 2, 3, 20],
                fc: 11
            }, {
                lngs: ["is"],
                nr: [1, 2],
                fc: 12
            }, {
                lngs: ["jv"],
                nr: [0, 1],
                fc: 13
            }, {
                lngs: ["kw"],
                nr: [1, 2, 3, 4],
                fc: 14
            }, {
                lngs: ["lt"],
                nr: [1, 2, 10],
                fc: 15
            }, {
                lngs: ["lv"],
                nr: [1, 2, 0],
                fc: 16
            }, {
                lngs: ["mk"],
                nr: [1, 2],
                fc: 17
            }, {
                lngs: ["mnk"],
                nr: [0, 1, 2],
                fc: 18
            }, {
                lngs: ["mt"],
                nr: [1, 2, 11, 20],
                fc: 19
            }, {
                lngs: ["or"],
                nr: [2, 1],
                fc: 2
            }, {
                lngs: ["ro"],
                nr: [1, 2, 20],
                fc: 20
            }, {
                lngs: ["sl"],
                nr: [5, 1, 2, 3],
                fc: 21
            }],
            c = {
                1: function(e) {
                    return Number(e > 1)
                },
                2: function(e) {
                    return Number(1 != e)
                },
                3: function(e) {
                    return 0
                },
                4: function(e) {
                    return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && 4 >= e % 10 && (10 > e % 100 || e % 100 >= 20) ? 1 : 2)
                },
                5: function(e) {
                    return Number(0 === e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && 10 >= e % 100 ? 3 : e % 100 >= 11 ? 4 : 5)
                },
                6: function(e) {
                    return Number(1 == e ? 0 : e >= 2 && 4 >= e ? 1 : 2)
                },
                7: function(e) {
                    return Number(1 == e ? 0 : e % 10 >= 2 && 4 >= e % 10 && (10 > e % 100 || e % 100 >= 20) ? 1 : 2)
                },
                8: function(e) {
                    return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3)
                },
                9: function(e) {
                    return Number(e >= 2)
                },
                10: function(e) {
                    return Number(1 == e ? 0 : 2 == e ? 1 : 7 > e ? 2 : 11 > e ? 3 : 4)
                },
                11: function(e) {
                    return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && 20 > e ? 2 : 3)
                },
                12: function(e) {
                    return Number(e % 10 != 1 || e % 100 == 11)
                },
                13: function(e) {
                    return Number(0 !== e)
                },
                14: function(e) {
                    return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3)
                },
                15: function(e) {
                    return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (10 > e % 100 || e % 100 >= 20) ? 1 : 2)
                },
                16: function(e) {
                    return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2)
                },
                17: function(e) {
                    return Number(1 == e || e % 10 == 1 ? 0 : 1)
                },
                18: function(e) {
                    return Number(0 == e ? 0 : 1 == e ? 1 : 2)
                },
                19: function(e) {
                    return Number(1 == e ? 0 : 0 === e || e % 100 > 1 && 11 > e % 100 ? 1 : e % 100 > 10 && 20 > e % 100 ? 2 : 3)
                },
                20: function(e) {
                    return Number(1 == e ? 0 : 0 === e || e % 100 > 0 && 20 > e % 100 ? 1 : 2)
                },
                21: function(e) {
                    return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0)
                }
            },
            l = function() {
                function e(t) {
                    var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                    i(this, e), this.languageUtils = t, this.options = n, this.logger = s["default"].create("pluralResolver"), this.rules = a()
                }
                return e.prototype.addRule = function(e, t) {
                    this.rules[e] = t
                }, e.prototype.getRule = function(e) {
                    return this.rules[this.languageUtils.getLanguagePartFromCode(e)]
                }, e.prototype.needsPlural = function(e) {
                    var t = this.getRule(e);
                    return t && t.numbers.length <= 1 ? !1 : !0
                }, e.prototype.getSuffix = function(e, t) {
                    var n = this.getRule(e);
                    if (n) {
                        if (1 === n.numbers.length) return "";
                        var r = n.noAbs ? n.plurals(t) : n.plurals(Math.abs(t)),
                            i = n.numbers[r];
                        if (2 === n.numbers.length && 1 === n.numbers[0] && (2 === i ? i = "plural" : 1 === i && (i = "")), "v1" === this.options.compatibilityJSON) {
                            if (1 === i) return "";
                            if ("number" == typeof i) return "_plural_" + i.toString()
                        }
                        return this.options.prepend && i.toString() ? this.options.prepend + i.toString() : i.toString()
                    }
                    return this.logger.warn("no plural rule found for: " + e), ""
                }, e
            }();
        t["default"] = l
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(372),
            s = i(o),
            u = n(369),
            c = r(u),
            l = function() {
                function e() {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                    a(this, e), this.logger = c["default"].create("interpolator"), this.init(t, !0)
                }
                return e.prototype.init = function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                        t = arguments[1];
                    t && (this.options = e), e.interpolation || (e.interpolation = {
                        escapeValue: !0
                    });
                    var n = e.interpolation;
                    this.escapeValue = n.escapeValue, this.prefix = n.prefix ? s.regexEscape(n.prefix) : n.prefixEscaped || "{{", this.suffix = n.suffix ? s.regexEscape(n.suffix) : n.suffixEscaped || "}}", this.unescapePrefix = n.unescapeSuffix ? "" : n.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : n.unescapeSuffix || "", this.nestingPrefix = n.nestingPrefix ? s.regexEscape(n.nestingPrefix) : n.nestingPrefixEscaped || s.regexEscape("$t("), this.nestingSuffix = n.nestingSuffix ? s.regexEscape(n.nestingSuffix) : n.nestingSuffixEscaped || s.regexEscape(")");
                    var r = this.prefix + "(.+?)" + this.suffix;
                    this.regexp = new RegExp(r, "g");
                    var i = this.prefix + this.unescapePrefix + "(.+?)" + this.unescapeSuffix + this.suffix;
                    this.regexpUnescape = new RegExp(i, "g");
                    var a = this.nestingPrefix + "(.+?)" + this.nestingSuffix;
                    this.nestingRegexp = new RegExp(a, "g")
                }, e.prototype.reset = function() {
                    this.options && this.init(this.options)
                }, e.prototype.interpolate = function(e, t) {
                    function n(e) {
                        return e.replace(/\$/g, "$$$$")
                    }
                    for (var r = void 0, i = void 0; r = this.regexpUnescape.exec(e);) {
                        var a = s.getPath(t, r[1].trim());
                        e = e.replace(r[0], a)
                    }
                    for (; r = this.regexp.exec(e);) i = s.getPath(t, r[1].trim()), "string" != typeof i && (i = s.makeString(i)), i || (this.logger.warn("missed to pass in variable " + r[1] + " for interpolating " + e), i = ""), i = n(this.escapeValue ? s.escape(i) : i), e = e.replace(r[0], i), this.regexp.lastIndex = 0;
                    return e
                }, e.prototype.nest = function(e, t) {
                    function n(e) {
                        return e.replace(/\$/g, "$$$$")
                    }

                    function r(e) {
                        if (e.indexOf(",") < 0) return e;
                        var t = e.split(",");
                        e = t.shift();
                        var n = t.join(",");
                        n = this.interpolate(n, u);
                        try {
                            u = JSON.parse(n)
                        } catch (r) {
                            this.logger.error("failed parsing options string in nesting for key " + e, r)
                        }
                        return e
                    }
                    var i = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2],
                        a = void 0,
                        o = void 0,
                        u = JSON.parse(JSON.stringify(i));
                    for (u.applyPostProcessor = !1; a = this.nestingRegexp.exec(e);) o = t(r.call(this, a[1].trim()), u), "string" != typeof o && (o = s.makeString(o)), o || (this.logger.warn("missed to pass in variable " + a[1] + " for interpolating " + e), o = ""), o = n(this.escapeValue ? s.escape(o) : o), e = e.replace(a[0], o), this.regexp.lastIndex = 0;
                    return e
                }, e
            }();
        t["default"] = l
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function a(e, t) {
            for (var n = Object.getOwnPropertyNames(t), r = 0; r < n.length; r++) {
                var i = n[r],
                    a = Object.getOwnPropertyDescriptor(t, i);
                a && a.configurable && void 0 === e[i] && Object.defineProperty(e, i, a)
            }
            return e
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function u(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : a(e, t))
        }

        function c(e, t) {
            for (var n = e.indexOf(t); - 1 !== n;) e.splice(n, 1), n = e.indexOf(t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            d = function() {
                function e(e, t) {
                    var n = [],
                        r = !0,
                        i = !1,
                        a = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                    } catch (u) {
                        i = !0, a = u
                    } finally {
                        try {
                            !r && s["return"] && s["return"]()
                        } finally {
                            if (i) throw a
                        }
                    }
                    return n
                }
                return function(t, n) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return e(t, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            f = n(372),
            p = i(f),
            h = n(369),
            v = r(h),
            g = n(370),
            _ = r(g),
            m = function(e) {
                function t(n, r, i) {
                    var a = arguments.length <= 3 || void 0 === arguments[3] ? {} : arguments[3];
                    o(this, t);
                    var u = s(this, e.call(this));
                    return u.backend = n, u.store = r, u.services = i, u.options = a, u.logger = v["default"].create("backendConnector"), u.state = {}, u.queue = [], u.backend && u.backend.init && u.backend.init(i, a.backend, a), u
                }
                return u(t, e), t.prototype.queueLoad = function(e, t, n) {
                    var r = this,
                        i = [],
                        a = [],
                        o = [],
                        s = [];
                    return e.forEach(function(e) {
                        var n = !0;
                        t.forEach(function(t) {
                            var o = e + "|" + t;
                            r.store.hasResourceBundle(e, t) ? r.state[o] = 2 : r.state[o] < 0 || (1 === r.state[o] ? a.indexOf(o) < 0 && a.push(o) : (r.state[o] = 1, n = !1, a.indexOf(o) < 0 && a.push(o), i.indexOf(o) < 0 && i.push(o), s.indexOf(t) < 0 && s.push(t)))
                        }), n || o.push(e)
                    }), (i.length || a.length) && this.queue.push({
                        pending: a,
                        loaded: {},
                        errors: [],
                        callback: n
                    }), {
                        toLoad: i,
                        pending: a,
                        toLoadLanguages: o,
                        toLoadNamespaces: s
                    }
                }, t.prototype.loaded = function(e, t, n) {
                    var r = this,
                        i = e.split("|"),
                        a = d(i, 2),
                        o = a[0],
                        s = a[1];
                    t && this.emit("failedLoading", o, s, t), n && this.store.addResourceBundle(o, s, n), this.state[e] = t ? -1 : 2, this.queue.forEach(function(n) {
                        p.pushPath(n.loaded, [o], s), c(n.pending, e), t && n.errors.push(t), 0 !== n.pending.length || n.done || (n.errors.length ? n.callback(n.errors) : n.callback(), r.emit("loaded", n.loaded), n.done = !0)
                    }), this.queue = this.queue.filter(function(e) {
                        return !e.done
                    })
                }, t.prototype.read = function(e, t, n, r, i, a) {
                    var o = this;
                    return r || (r = 0), i || (i = 250), e.length ? void this.backend[n](e, t, function(s, u) {
                        return s && u && 5 > r ? void setTimeout(function() {
                            o.read.call(o, e, t, n, ++r, 2 * i, a)
                        }, i) : void a(s, u)
                    }) : a(null, {})
                }, t.prototype.load = function(e, t, n) {
                    var r = this;
                    if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), n && n();
                    var i = l({}, this.backend.options, this.options.backend);
                    "string" == typeof e && (e = this.services.languageUtils.toResolveHierarchy(e)), "string" == typeof t && (t = [t]);
                    var a = this.queueLoad(e, t, n);
                    return a.toLoad.length ? void(i.allowMultiLoading && this.backend.readMulti ? this.read(a.toLoadLanguages, a.toLoadNamespaces, "readMulti", null, null, function(e, t) {
                        e && r.logger.warn("loading namespaces " + a.toLoadNamespaces.join(", ") + " for languages " + a.toLoadLanguages.join(", ") + " via multiloading failed", e), !e && t && r.logger.log("loaded namespaces " + a.toLoadNamespaces.join(", ") + " for languages " + a.toLoadLanguages.join(", ") + " via multiloading", t), a.toLoad.forEach(function(n) {
                            var i = n.split("|"),
                                a = d(i, 2),
                                o = a[0],
                                s = a[1],
                                u = p.getPath(t, [o, s]);
                            if (u) r.loaded(n, e, u);
                            else {
                                var c = "loading namespace " + s + " for language " + o + " via multiloading failed";
                                r.loaded(n, c), r.logger.error(c)
                            }
                        })
                    }) : ! function() {
                        var e = function(e) {
                            var t = this,
                                n = e.split("|"),
                                r = d(n, 2),
                                i = r[0],
                                a = r[1];
                            this.read(i, a, "read", null, null, function(n, r) {
                                n && t.logger.warn("loading namespace " + a + " for language " + i + " failed", n), !n && r && t.logger.log("loaded namespace " + a + " for language " + i, r), t.loaded(e, n, r)
                            })
                        };
                        a.toLoad.forEach(function(t) {
                            e.call(r, t)
                        })
                    }()) : void(a.pending.length || n())
                }, t.prototype.saveMissing = function(e, t, n, r) {
                    this.backend && this.backend.create && this.backend.create(e, t, n, r), this.store.addResource(e[0], t, n, r)
                }, t
            }(_["default"]);
        t["default"] = m
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function a(e, t) {
            for (var n = Object.getOwnPropertyNames(t), r = 0; r < n.length; r++) {
                var i = n[r],
                    a = Object.getOwnPropertyDescriptor(t, i);
                a && a.configurable && void 0 === e[i] && Object.defineProperty(e, i, a)
            }
            return e
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function u(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : a(e, t))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            l = n(372),
            d = (i(l), n(369)),
            f = r(d),
            p = n(370),
            h = r(p),
            v = function(e) {
                function t(n, r, i) {
                    var a = arguments.length <= 3 || void 0 === arguments[3] ? {} : arguments[3];
                    o(this, t);
                    var u = s(this, e.call(this));
                    return u.cache = n, u.store = r, u.services = i, u.options = a, u.logger = f["default"].create("cacheConnector"), u.cache && u.cache.init && u.cache.init(i, a.cache, a), u
                }
                return u(t, e), t.prototype.load = function(e, t, n) {
                    var r = this;
                    if (!this.cache) return n && n();
                    var i = c({}, this.cache.options, this.options.cache);
                    "string" == typeof e && (e = this.services.languageUtils.toResolveHierarchy(e)), "string" == typeof t && (t = [t]), i.enabled ? this.cache.load(e, function(t, i) {
                        if (t && r.logger.error("loading languages " + e.join(", ") + " from cache failed", t), i)
                            for (var a in i)
                                for (var o in i[a])
                                    if ("i18nStamp" !== o) {
                                        var s = i[a][o];
                                        s && r.store.addResourceBundle(a, o, s)
                                    }
                        n && n()
                    }) : n && n()
                }, t.prototype.save = function() {
                    this.cache && this.options.cache && this.options.cache.enabled && this.cache.save(this.store.data)
                }, t
            }(h["default"]);
        t["default"] = v
    }, function(e, t) {
        "use strict";

        function n() {
            return {
                debug: !1,
                ns: ["translation"],
                defaultNS: ["translation"],
                fallbackLng: ["dev"],
                fallbackNS: !1,
                whitelist: !1,
                load: "all",
                preload: !1,
                keySeparator: ".",
                nsSeparator: ":",
                pluralSeparator: "_",
                contextSeparator: "_",
                saveMissing: !1,
                saveMissingTo: "fallback",
                missingKeyHandler: !1,
                postProcess: !1,
                returnNull: !0,
                returnEmptyString: !0,
                returnObjects: !1,
                joinArrays: !1,
                returnedObjectHandler: function() {},
                parseMissingKeyHandler: !1,
                appendNamespaceToMissingKey: !1,
                overloadTranslationOptionHandler: function(e) {
                    return {
                        defaultValue: e[1]
                    }
                },
                interpolation: {
                    escapeValue: !0,
                    prefix: "{{",
                    suffix: "}}",
                    unescapePrefix: "-",
                    nestingPrefix: "$t(",
                    nestingSuffix: ")",
                    defaultVariables: void 0
                }
            }
        }

        function r(e) {
            return "string" == typeof e.ns && (e.ns = [e.ns]), "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]), "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]), e.whitelist && e.whitelist.indexOf("cimode") < 0 && e.whitelist.push("cimode"), e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.get = n, t.transformOptions = r
    }, function(e, t, n) {
        var r, r;
        ! function(t) {
            e.exports = t()
        }(function() {
            return function e(t, n, i) {
                function a(s, u) {
                    if (!n[s]) {
                        if (!t[s]) {
                            var c = "function" == typeof r && r;
                            if (!u && c) return r(s, !0);
                            if (o) return o(s, !0);
                            var l = new Error("Cannot find module '" + s + "'");
                            throw l.code = "MODULE_NOT_FOUND", l
                        }
                        var d = n[s] = {
                            exports: {}
                        };
                        t[s][0].call(d.exports, function(e) {
                            var n = t[s][1][e];
                            return a(n ? n : e)
                        }, d, d.exports, e, t, n, i)
                    }
                    return n[s].exports
                }
                for (var o = "function" == typeof r && r, s = 0; s < i.length; s++) a(i[s]);
                return a
            }({
                1: [function(e, t, n) {
                    "use strict";

                    function r(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t["default"] = e, t
                    }

                    function i(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }

                    function a(e, t, n, r, i) {
                        if (r && "object" == typeof r) {
                            var a = "",
                                o = encodeURIComponent;
                            for (var s in r) a += "&" + o(s) + "=" + o(r[s]);
                            r = a.slice(1) + (i ? "" : "&_t=" + new Date)
                        }
                        try {
                            var u = new(XMLHttpRequest || ActiveXObject)("MSXML2.XMLHTTP.3.0");
                            u.open(r ? "POST" : "GET", e, 1), t.crossDomain || u.setRequestHeader("X-Requested-With", "XMLHttpRequest"), u.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), u.onreadystatechange = function() {
                                u.readyState > 3 && n && n(u.responseText, u)
                            }, u.send(r)
                        } catch (o) {
                            window.console && console.log(o)
                        }
                    }

                    function o() {
                        return {
                            loadPath: "/locales/{{lng}}/{{ns}}.json",
                            addPath: "locales/add/{{lng}}/{{ns}}",
                            allowMultiLoading: !1,
                            parse: JSON.parse,
                            crossDomain: !1,
                            ajax: a
                        }
                    }
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    });
                    var s = function() {
                            function e(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                }
                            }
                            return function(t, n, r) {
                                return n && e(t.prototype, n), r && e(t, r), t
                            }
                        }(),
                        u = e("./utils"),
                        c = r(u),
                        l = function() {
                            function e(t) {
                                var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                                i(this, e), this.init(t, n), this.type = "backend"
                            }
                            return s(e, [{
                                key: "init",
                                value: function(e) {
                                    var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                                    this.services = e, this.options = c.defaults(t, this.options || {}, o())
                                }
                            }, {
                                key: "readMulti",
                                value: function(e, t, n) {
                                    var r = this.services.interpolator.interpolate(this.options.loadPath, {
                                        lng: e.join("+"),
                                        ns: t.join("+")
                                    });
                                    this.loadUrl(r, n)
                                }
                            }, {
                                key: "read",
                                value: function(e, t, n) {
                                    var r = this.services.interpolator.interpolate(this.options.loadPath, {
                                        lng: e,
                                        ns: t
                                    });
                                    this.loadUrl(r, n)
                                }
                            }, {
                                key: "loadUrl",
                                value: function(e, t) {
                                    var n = this;
                                    this.options.ajax(e, this.options, function(r, i) {
                                        var a = i.status.toString();
                                        if (0 === a.indexOf("5")) return t("failed loading " + e, !0);
                                        if (0 === a.indexOf("4")) return t("failed loading " + e, !1);
                                        var o = void 0,
                                            s = void 0;
                                        try {
                                            o = n.options.parse(r)
                                        } catch (u) {
                                            s = "failed parsing " + e + " to json"
                                        }
                                        return s ? t(s, !1) : void t(null, o)
                                    })
                                }
                            }, {
                                key: "create",
                                value: function(e, t, n, r) {
                                    var i = this;
                                    "string" == typeof e && (e = [e]);
                                    var a = {};
                                    a[n] = r || "", e.forEach(function(e) {
                                        var n = i.services.interpolator.interpolate(i.options.addPath, {
                                            lng: e,
                                            ns: t
                                        });
                                        i.options.ajax(n, i.options, function(e, t) {}, a)
                                    })
                                }
                            }]), e
                        }();
                    l.type = "backend", n["default"] = l, t.exports = n["default"]
                }, {
                    "./utils": 2
                }],
                2: [function(e, t, n) {
                    "use strict";

                    function r(e) {
                        return o.call(s.call(arguments, 1), function(t) {
                            if (t)
                                for (var n in t) void 0 === e[n] && (e[n] = t[n])
                        }), e
                    }

                    function i(e) {
                        return o.call(s.call(arguments, 1), function(t) {
                            if (t)
                                for (var n in t) e[n] = t[n]
                        }), e
                    }
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }), n.defaults = r, n.extend = i;
                    var a = [],
                        o = a.forEach,
                        s = a.slice
                }, {}]
            }, {}, [1])(1)
        })
    }, function(e, t) {
        e.exports = {
            Live: "Live",
            Advertisement: "Advertisement",
            Pause: "Pause",
            Play: "Play",
            Mute: "Mute",
            Unmute: "Unmute",
            Options: "Options",
            Fullscreen: "Fullscreen",
            "Exit Fullscreen": "Exit Fullscreen",
            "Player Options": "Player Options",
            "Video Quality:": "Video Quality:",
            Source: "Source",
            High: "High",
            Medium: "Medium",
            Low: "Low",
            Mobile: "Mobile",
            "Popout Player": "Popout Player",
            "Show Video Stats": "Show Video Stats",
            "Report Playback Issue": "Report Playback Issue",
            Captions: "Captions",
            "Closed Captioning": "Closed Captioning",
            "Click the CC button to enable closed captions and click the gear button to customize.": "Click the CC button to enable closed captions and click the gear button to customize.",
            "Live Closed Captions": "Live Closed Captions",
            "Closed Caption Settings": "Closed Caption Settings",
            Presets: "Presets",
            Text: "Text",
            Background: "Background",
            Window: "Window",
            Aa: "Aa",
            Font: "Font",
            "Mono Serif": "Mono Serif",
            Serif: "Serif",
            "Mono Sans-Serif": "Mono Sans-Serif",
            "Sans-Serif": "Sans-Serif",
            Casual: "Casual",
            Cursive: "Cursive",
            "Small Capitals": "Small Capitals",
            Position: "Position",
            Bottom: "Bottom",
            Top: "Top",
            Justification: "Justification",
            Center: "Center",
            Left: "Left",
            Right: "Right",
            Style: "Style",
            Effects: "Effects",
            Effect: "Effect",
            Color: "Color",
            Size: "Size",
            A: "A",
            Opacity: "Opacity",
            Solid: "Solid",
            Translucent: "Translucent",
            "Semi-Transparent": "Semi-Transparent",
            Transparent: "Transparent",
            Flashing: "Flashing",
            "Learn more": "Learn more",
            "Increase Size": "Increase Size",
            "Decrease Size": "Decrease Size",
            Select: "Select",
            "Audio and video stutter": "Audio and video stutter",
            "Video stutters, but audio is fine": "Video stutters, but audio is fine",
            "Video is completely black or doesn't load": "Video is completely black or doesn't load",
            "Audio and video aren't synced": "Audio and video aren't synced",
            "Fullscreen playback doesn't work": "Fullscreen playback doesn't work",
            "Advertisement can't be muted or is too loud": "Advertisement can't be muted or is too loud",
            "Advertisement has played too many times": "Advertisement has played too many times",
            Submit: "Submit",
            "Theater Mode": "Theater Mode",
            "Exit Theater Mode": "Exit Theater Mode",
            "Video could not be found, or has been deleted by its owner": "Video could not be found, or has been deleted by its owner",
            "Channel could not be found, or has been deleted by its owner": "Channel could not be found, or has been deleted by its owner",
            "Video is loading": "Video is loading",
            "Video is not available": "Video is not available",
            "Flash is not installed": "Flash is not installed",
            "The broadcaster indicated that the channel is intended for mature audiences.": "The broadcaster indicated that the channel is intended for mature audiences.",
            "Start Watching": "Start Watching",
            "This video is only available to subscribers. Subscribe now to watch and support %s.": "This video is only available to subscribers. Subscribe now to watch and support %s.",
            "This video quality is only available to subscribers. Subscribe now to watch and support %s.": "This video quality is only available to subscribers. Subscribe now to watch and support %s.",
            "Playing on ": "Playing on ",
            " has started a playlist.": " has started a playlist.",
            Offline: "Offline",
            Playlist: "Playlist",
            Subscribe: "Subscribe",
            Close: "Close",
            "The broadcast is down.": "The broadcast is down.",
            "The player will automatically reload when the broadcast is back.": "The player will automatically reload when the broadcast is back.",
            "Copy Video URL at Current Time": "Copy Video URL at Current Time",
            "Thanks for your report": "Thanks for your report",
            "Coming Up": "Coming Up",
            "Now playing: ": "Now playing: ",
            "playing ": "playing ",
            "for": "for",
            Chromecast: "Chromecast",
            "Watch on Twitch": "Watch on Twitch",
            " viewer": " viewer",
            " viewer_plural": " viewers",
            "You must be 21 to view this content. Please enter your date of birth.": "You must be 21 to view this content. Please enter your date of birth.",
            "Sorry, you must be over the age of 21 to view this content.": "Sorry, you must be over the age of 21 to view this content.",
            "Audio for portions of this video has been muted as it appears to contain copyrighted content owned or controlled by a third party.": "Audio for portions of this video has been muted as it appears to contain copyrighted content owned or controlled by a third party.",
            Clip: "Clip",
            "Introducing Clips": "Introducing Clips",
            "Capture your favorite moments with a single click! Hit the Clips button below and be the first to start sharing.": "Capture your favorite moments with a single click! Hit the Clips button below and be the first to start sharing.",
            Auto: "Auto"
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? l : arguments[0],
                t = arguments[1];
            switch (t.type) {
                case a.ACTION_SET_MANIFEST_INFO:
                    return (0, s["default"])({}, e, (0, c["default"])(t.info, Object.keys(l)));
                default:
                    return e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DEFAULT_MANIFEST_INFO = void 0, t.manifestInfo = i;
        var a = n(298),
            o = n(295),
            s = r(o),
            u = n(44),
            c = r(u),
            l = t.DEFAULT_MANIFEST_INFO = {
                hls_buffer_duration: 0,
                hls_latency_broadcaster: 0,
                hls_latency_encoder: 0,
                hls_target_duration: "0",
                ABS: !1
            }
    }, function(e, t, n) {
        "use strict";

        function r() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? window.navigator : arguments[0],
                t = arguments[1];
            switch (t.type) {
                case i.ACTION_SET_NAVIGATOR:
                    return t.navigator;
                default:
                    return e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.navigatorReducer = r;
        var i = n(386)
    }, function(e, t) {
        "use strict";

        function n(e) {
            return {
                type: r,
                navigator: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.setNavigator = n;
        var r = t.ACTION_SET_NAVIGATOR = "set navigator"
    }, function(e, t, n) {
        "use strict";

        function r() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? !1 : arguments[0],
                t = arguments[1];
            switch (t.type) {
                case i.ACTION_SET_ONLINE:
                    return t.online;
                default:
                    return e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.online = r;
        var i = n(192)
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? f : arguments[0],
                t = arguments[1];
            switch (t.type) {
                case l.ACTION_SET_STREAM:
                    return (0, o["default"])({}, e, {
                        hasPlayed: !1
                    });
                case c.ACTION_BACKEND_EVENT_EMITTED:
                    return (0, o["default"])({}, e, {
                        hasPlayed: e.hasPlayed || t.event === d.PLAYING
                    });
                case c.ACTION_SET_MUTED:
                    return (0, o["default"])({}, e, {
                        muted: t.muted
                    });
                case c.ACTION_SET_VOLUME:
                    return (0, o["default"])({}, e, {
                        volume: t.volume
                    });
                case c.ACTION_UPDATE_PLAYBACK_STATE:
                    return (0, o["default"])({}, e, (0, u["default"])(t.playback, p));
                case c.ACTION_QUALITY_RESTRICTED_ERROR:
                    return (0, o["default"])({}, e, {
                        restrictedQualityError: !0
                    });
                case c.ACTION_CLEAR_QUALITY_RESTRICTED_ERROR:
                    return (0, o["default"])({}, e, {
                        restrictedQualityError: !1
                    });
                default:
                    return e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.playback = i;
        var a = n(295),
            o = r(a),
            s = n(44),
            u = r(s),
            c = n(299),
            l = n(303),
            d = n(98),
            f = {
                duration: 0,
                hasPlayed: !1,
                muted: !1,
                quality: "",
                restrictedQualityError: !1,
                volume: .5
            },
            p = Object.keys(f)
    }, function(e, t, n) {
        "use strict";

        function r() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? [] : arguments[0],
                t = arguments[1];
            switch (t.type) {
                case i.ACTION_SET_RECOMMENDED_VODS:
                    return t.videos;
                default:
                    return e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.recommendations = r;
        var i = n(318)
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function a() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? v : arguments[0],
                t = arguments[1];
            switch (t.type) {
                case h.ACTION_VOD_INIT_RESUME:
                    return (0, p["default"])(t, Object.keys(v));
                case h.ACTION_VOD_SET_USER:
                    return (0, s["default"])({}, e, {
                        userId: t.userId
                    });
                case h.ACTION_VOD_SET_RESUME_TIME:
                    return (0, d["default"])({}, e, {
                        times: i({}, t.videoID, t.time),
                        watch: i({}, t.videoID, !0)
                    });
                case h.ACTION_VOD_CANCEL_RESUME:
                    return (0, s["default"])({}, e, {
                        times: (0, c["default"])(e.times, t.videoID),
                        watch: (0, c["default"])(e.watch, t.videoID)
                    });
                case h.ACTION_LIVESTREAM_SET_RESUME_TIME:
                    return (0, d["default"])({}, e, {
                        streamTimes: i({}, t.broadcastID, t.time)
                    });
                case h.ACTION_LIVESTREAM_CANCEL_RESUME:
                    return (0, s["default"])({}, e, {
                        streamTimes: (0, c["default"])(e.streamTimes, t.broadcastID)
                    });
                case h.ACTION_VOD_POST_BACKEND_TIME:
                    return (0, s["default"])({}, e, {
                        backendTime: t.backendTime
                    });
                default:
                    return e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.resumeWatch = a;
        var o = n(295),
            s = r(o),
            u = n(58),
            c = r(u),
            l = n(391),
            d = r(l),
            f = n(44),
            p = r(f),
            h = n(323),
            v = {
                times: {},
                watch: {},
                streamTimes: {},
                backendTime: 0,
                userId: null,
                initTime: 0
            }
    }, function(e, t, n) {
        var r = n(392),
            i = n(8),
            a = i(function(e, t, n) {
                r(e, t, n)
            });
        e.exports = a
    }, function(e, t, n) {
        function r(e, t, n, f, p) {
            if (e !== t) {
                var h = u(t) || l(t) ? void 0 : d(t);
                a(h || t, function(a, u) {
                    if (h && (u = a, a = t[u]), c(a)) p || (p = new i), s(e, t, u, n, r, f, p);
                    else {
                        var l = f ? f(e[u], a, u + "", e, t, p) : void 0;
                        void 0 === l && (l = a), o(e, u, l)
                    }
                })
            }
        }
        var i = n(115),
            a = n(393),
            o = n(394),
            s = n(395),
            u = n(32),
            c = n(14),
            l = n(132),
            d = n(20);
        e.exports = r
    }, function(e, t) {
        function n(e, t) {
            for (var n = -1, r = e.length; ++n < r && t(e[n], n, e) !== !1;);
            return e
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e, t, n) {
            (void 0 !== n && !i(e[t], n) || "number" == typeof t && void 0 === n && !(t in e)) && (e[t] = n)
        }
        var i = n(4);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t, n, r, v, g, _) {
            var m = e[n],
                y = t[n],
                b = _.get(y);
            if (b) return void i(e, n, b);
            var E = g ? g(m, y, n + "", e, t, _) : void 0,
                w = void 0 === E;
            w && (E = y, u(y) || p(y) ? u(m) ? E = m : c(m) ? E = o(m) : (w = !1, E = a(y, !g)) : f(y) || s(y) ? s(m) ? E = h(m) : !d(m) || r && l(m) ? (w = !1, E = a(y, !g)) : E = m : w = !1), _.set(y, E), w && v(E, y, r, g, _), _["delete"](y), i(e, n, E)
        }
        var i = n(394),
            a = n(396),
            o = n(399),
            s = n(29),
            u = n(32),
            c = n(30),
            l = n(13),
            d = n(14),
            f = n(348),
            p = n(132),
            h = n(416);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t, n, E, w, k, T) {
            var C;
            if (E && (C = k ? E(e, w, k, T) : E(e)), void 0 !== C) return C;
            if (!y(e)) return e;
            var O = g(e);
            if (O) {
                if (C = p(e), !t) return l(e, C)
            } else {
                var L = f(e),
                    j = L == S || L == A;
                if (_(e)) return c(e, t);
                if (L == P || L == b || j && !k) {
                    if (m(e)) return k ? e : {};
                    if (C = v(j ? {} : e), !t) return C = s(C, e), n ? d(e, C) : C
                } else {
                    if (!G[L]) return k ? e : {};
                    C = h(e, L, t)
                }
            }
            T || (T = new i);
            var M = T.get(e);
            return M ? M : (T.set(e, C), (O ? a : u)(e, function(i, a) {
                o(C, a, r(i, t, n, E, a, e, T))
            }), n && !O ? d(e, C) : C)
        }
        var i = n(115),
            a = n(393),
            o = n(7),
            s = n(397),
            u = n(108),
            c = n(398),
            l = n(399),
            d = n(400),
            f = n(130),
            p = n(402),
            h = n(403),
            v = n(412),
            g = n(32),
            _ = n(414),
            m = n(67),
            y = n(14),
            b = "[object Arguments]",
            E = "[object Array]",
            w = "[object Boolean]",
            k = "[object Date]",
            T = "[object Error]",
            S = "[object Function]",
            A = "[object GeneratorFunction]",
            C = "[object Map]",
            O = "[object Number]",
            P = "[object Object]",
            L = "[object RegExp]",
            j = "[object Set]",
            M = "[object String]",
            I = "[object Symbol]",
            N = "[object WeakMap]",
            D = "[object ArrayBuffer]",
            R = "[object Float32Array]",
            x = "[object Float64Array]",
            U = "[object Int8Array]",
            V = "[object Int16Array]",
            H = "[object Int32Array]",
            B = "[object Uint8Array]",
            $ = "[object Uint8ClampedArray]",
            F = "[object Uint16Array]",
            q = "[object Uint32Array]",
            G = {};
        G[b] = G[E] = G[D] = G[w] = G[k] = G[R] = G[x] = G[U] = G[V] = G[H] = G[C] = G[O] = G[P] = G[L] = G[j] = G[M] = G[I] = G[B] = G[$] = G[F] = G[q] = !0, G[T] = G[S] = G[N] = !1, e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            return e && i(t, a(t), e)
        }
        var i = n(52),
            a = n(41);
        e.exports = r
    }, function(e, t) {
        function n(e, t) {
            if (t) return e.slice();
            var n = new e.constructor(e.length);
            return e.copy(n), n
        }
        e.exports = n
    }, function(e, t) {
        function n(e, t) {
            var n = -1,
                r = e.length;
            for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
            return t
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e, t) {
            return i(e, a(e), t)
        }
        var i = n(52),
            a = n(401);
        e.exports = r
    }, function(e, t) {
        var n = Object.getOwnPropertySymbols,
            r = n || function() {
                return []
            };
        e.exports = r
    }, function(e, t) {
        function n(e) {
            var t = e.length,
                n = e.constructor(t);
            return t && "string" == typeof e[0] && i.call(e, "index") && (n.index = e.index, n.input = e.input), n
        }
        var r = Object.prototype,
            i = r.hasOwnProperty;
        e.exports = n
    }, function(e, t, n) {
        function r(e, t, n) {
            var r = e.constructor;
            switch (t) {
                case m:
                    return i(e);
                case l:
                case d:
                    return new r(+e);
                case y:
                case b:
                case E:
                case w:
                case k:
                case T:
                case S:
                case A:
                case C:
                    return c(e, n);
                case f:
                    return a(e);
                case p:
                case g:
                    return new r(e);
                case h:
                    return o(e);
                case v:
                    return s(e);
                case _:
                    return u(e)
            }
        }
        var i = n(404),
            a = n(405),
            o = n(407),
            s = n(408),
            u = n(410),
            c = n(411),
            l = "[object Boolean]",
            d = "[object Date]",
            f = "[object Map]",
            p = "[object Number]",
            h = "[object RegExp]",
            v = "[object Set]",
            g = "[object String]",
            _ = "[object Symbol]",
            m = "[object ArrayBuffer]",
            y = "[object Float32Array]",
            b = "[object Float64Array]",
            E = "[object Int8Array]",
            w = "[object Int16Array]",
            k = "[object Int32Array]",
            T = "[object Uint8Array]",
            S = "[object Uint8ClampedArray]",
            A = "[object Uint16Array]",
            C = "[object Uint32Array]";
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            var t = new e.constructor(e.byteLength);
            return new i(t).set(new i(e)), t
        }
        var i = n(127);
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            return a(o(e), i, new e.constructor)
        }
        var i = n(406),
            a = n(48),
            o = n(128);
        e.exports = r
    }, function(e, t) {
        function n(e, t) {
            return e.set(t[0], t[1]), e
        }
        e.exports = n
    }, function(e, t) {
        function n(e) {
            var t = new e.constructor(e.source, r.exec(e));
            return t.lastIndex = e.lastIndex, t
        }
        var r = /\w*$/;
        e.exports = n
    }, function(e, t, n) {
        function r(e) {
            return a(o(e), i, new e.constructor)
        }
        var i = n(409),
            a = n(48),
            o = n(94);
        e.exports = r
    }, function(e, t) {
        function n(e, t) {
            return e.add(t), e
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e) {
            return o ? Object(o.call(e)) : {}
        }
        var i = n(126),
            a = i ? i.prototype : void 0,
            o = a ? a.valueOf : void 0;
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            var n = t ? i(e.buffer) : e.buffer;
            return new e.constructor(n, e.byteOffset, e.length)
        }
        var i = n(404);
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            return "function" != typeof e.constructor || a(e) ? {} : i(o(e))
        }
        var i = n(413),
            a = n(34),
            o = Object.getPrototypeOf;
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            return i(e) ? a(e) : {}
        }
        var i = n(14),
            a = Object.create;
        e.exports = r
    }, function(e, t, n) {
        (function(e) {
            var r = n(415),
                i = n(23),
                a = {
                    "function": !0,
                    object: !0
                },
                o = a[typeof t] && t && !t.nodeType ? t : void 0,
                s = a[typeof e] && e && !e.nodeType ? e : void 0,
                u = s && s.exports === o ? o : void 0,
                c = u ? i.Buffer : void 0,
                l = c ? function(e) {
                    return e instanceof c
                } : r(!1);
            e.exports = l
        }).call(t, n(24)(e))
    }, function(e, t) {
        function n(e) {
            return function() {
                return e
            }
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e) {
            return i(e, a(e))
        }
        var i = n(52),
            a = n(20);
        e.exports = r
    }, function(e, t, n) {
        "use strict";

        function r() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? [i.CONTENT_SCREEN] : arguments[0],
                t = arguments[1];
            switch (t.type) {
                case i.ACTION_PUSH_SCREEN:
                    return [t.screen].concat(e);
                case i.ACTION_POP_SCREEN:
                    return 1 === e.length ? [i.CONTENT_SCREEN] : e.slice(1);
                default:
                    return e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.screen = r;
        var i = n(300)
    }, function(e, t, n) {
        "use strict";

        function r() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? a.nullContentStream : arguments[0],
                t = arguments[1];
            switch (t.type) {
                case i.ACTION_SET_STREAM:
                    return t.stream;
                default:
                    return e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.stream = r;
        var i = n(303),
            a = n(285)
    }, function(e, t, n) {
        "use strict";

        function r() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                t = arguments[1];
            switch (t.type) {
                case i.ACTION_SET_STREAMMETADATA:
                    return t.streamMetadata;
                case i.ACTION_SET_BROADCAST_ID:
                    return e.broadcastID === t.id ? e : {
                        broadcastID: t.id
                    };
                default:
                    return e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.streamMetadata = r;
        var i = n(193)
    }, function(e, t, n) {
        "use strict";

        function r() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                t = arguments[1];
            switch (t.type) {
                case i.ACTION_SET_USHER_PARAMS:
                    return t.params;
                default:
                    return e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.usher = r;
        var i = n(421)
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e) {
            var t = (0, o["default"])(e, u);
            return t.p = Math.floor(9999999 * Math.random()), {
                type: s,
                params: t
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ACTION_SET_USHER_PARAMS = void 0, t.setUsherParams = i;
        var a = n(44),
            o = r(a),
            s = t.ACTION_SET_USHER_PARAMS = "set usher params",
            u = ["allow_expired", "force_format", "force_geo", "force_https", "force_ip", "force_node", "force_node_password", "force_cluster", "godlike", "no_cdn"]
    }, function(e, t, n) {
        "use strict";

        function r() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0],
                t = arguments[1];
            switch (t.type) {
                case i.ACTION_UPDATE_VIEWERCOUNT:
                    return t.count;
                default:
                    return e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.viewercount = r;
        var i = n(191)
    }, function(e, t, n) {
        "use strict";

        function r() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? window : arguments[0],
                t = arguments[1];
            switch (t.type) {
                case i.ACTION_SET_WINDOW:
                    return t.window;
                default:
                    return e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.windowReducer = r;
        var i = n(424)
    }, function(e, t) {
        "use strict";

        function n(e) {
            return {
                type: r,
                window: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.setWindow = n;
        var r = t.ACTION_SET_WINDOW = "set window"
    }, function(e, t) {}, , , , , function(e, t, n) {
        var r, i, a;
        /*!
         * jQuery UI Slider 1.12.0-beta.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        ! function(o) {
            i = [n(431), n(432), n(436), n(434), n(435)], r = o, a = "function" == typeof r ? r.apply(t, i) : r, !(void 0 !== a && (e.exports = a))
        }(function(e) {
            return e.widget("ui.slider", e.ui.mouse, {
                version: "1.12.0-beta.1",
                widgetEventPrefix: "slide",
                options: {
                    animate: !1,
                    classes: {
                        "ui-slider": "ui-corner-all",
                        "ui-slider-handle": "ui-corner-all",
                        "ui-slider-range": "ui-corner-all ui-widget-header"
                    },
                    distance: 0,
                    max: 100,
                    min: 0,
                    orientation: "horizontal",
                    range: !1,
                    step: 1,
                    value: 0,
                    values: null,
                    change: null,
                    slide: null,
                    start: null,
                    stop: null
                },
                numPages: 5,
                _create: function() {
                    this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1
                },
                _refresh: function() {
                    this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
                },
                _createHandles: function() {
                    var t, n, r = this.options,
                        i = this.element.find(".ui-slider-handle"),
                        a = "<span tabindex='0'></span>",
                        o = [];
                    for (n = r.values && r.values.length || 1, i.length > n && (i.slice(n).remove(), i = i.slice(0, n)), t = i.length; n > t; t++) o.push(a);
                    this.handles = i.add(e(o.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function(t) {
                        e(this).data("ui-slider-handle-index", t)
                    })
                },
                _createRange: function() {
                    var t = this.options;
                    t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
                        left: "",
                        bottom: ""
                    })) : (this.range = e("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === t.range || "max" === t.range) && this._addClass(this.range, "ui-slider-range-" + t.range)) : (this.range && this.range.remove(), this.range = null)
                },
                _setupEvents: function() {
                    this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
                },
                _destroy: function() {
                    this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy()
                },
                _mouseCapture: function(t) {
                    var n, r, i, a, o, s, u, c, l = this,
                        d = this.options;
                    return d.disabled ? !1 : (this.elementSize = {
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight()
                    }, this.elementOffset = this.element.offset(), n = {
                        x: t.pageX,
                        y: t.pageY
                    }, r = this._normValueFromMouse(n), i = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) {
                        var n = Math.abs(r - l.values(t));
                        (i > n || i === n && (t === l._lastChangedValue || l.values(t) === d.min)) && (i = n, a = e(this), o = t)
                    }), s = this._start(t, o), s === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, this._addClass(a, null, "ui-state-active"), a.trigger("focus"), u = a.offset(), c = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = c ? {
                        left: 0,
                        top: 0
                    } : {
                        left: t.pageX - u.left - a.width() / 2,
                        top: t.pageY - u.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0)
                    }, this.handles.hasClass("ui-state-hover") || this._slide(t, o, r), this._animateOff = !0, !0))
                },
                _mouseStart: function() {
                    return !0
                },
                _mouseDrag: function(e) {
                    var t = {
                            x: e.pageX,
                            y: e.pageY
                        },
                        n = this._normValueFromMouse(t);
                    return this._slide(e, this._handleIndex, n), !1
                },
                _mouseStop: function(e) {
                    return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
                },
                _detectOrientation: function() {
                    this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
                },
                _normValueFromMouse: function(e) {
                    var t, n, r, i, a;
                    return "horizontal" === this.orientation ? (t = this.elementSize.width, n = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, n = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), r = n / t, r > 1 && (r = 1), 0 > r && (r = 0), "vertical" === this.orientation && (r = 1 - r), i = this._valueMax() - this._valueMin(), a = this._valueMin() + r * i, this._trimAlignValue(a)
                },
                _uiHash: function(e, t, n) {
                    var r = {
                        handle: this.handles[e],
                        handleIndex: e,
                        value: void 0 !== t ? t : this.value()
                    };
                    return this._hasMultipleValues() && (r.value = void 0 !== t ? t : this.values(e), r.values = n || this.values()), r
                },
                _hasMultipleValues: function() {
                    return this.options.values && this.options.values.length
                },
                _start: function(e, t) {
                    return this._trigger("start", e, this._uiHash(t))
                },
                _slide: function(e, t, n) {
                    var r, i, a = this.value(),
                        o = this.values();
                    this._hasMultipleValues() && (i = this.values(t ? 0 : 1), a = this.values(t), 2 === this.options.values.length && this.options.range === !0 && (n = 0 === t ? Math.min(i, n) : Math.max(i, n)), o[t] = n), n !== a && (r = this._trigger("slide", e, this._uiHash(t, n, o)), r !== !1 && (this._hasMultipleValues() ? this.values(t, n) : this.value(n)))
                },
                _stop: function(e, t) {
                    this._trigger("stop", e, this._uiHash(t))
                },
                _change: function(e, t) {
                    this._keySliding || this._mouseSliding || (this._lastChangedValue = t, this._trigger("change", e, this._uiHash(t)))
                },
                value: function(e) {
                    return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), void this._change(null, 0)) : this._value()
                },
                values: function(t, n) {
                    var r, i, a;
                    if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(n), this._refreshValue(), void this._change(null, t);
                    if (!arguments.length) return this._values();
                    if (!e.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(t) : this.value();
                    for (r = this.options.values, i = arguments[0], a = 0; a < r.length; a += 1) r[a] = this._trimAlignValue(i[a]), this._change(null, a);
                    this._refreshValue()
                },
                _setOption: function(t, n) {
                    var r, i = 0;
                    switch ("range" === t && this.options.range === !0 && ("min" === n ? (this.options.value = this._values(0), this.options.values = null) : "max" === n && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), e.isArray(this.options.values) && (i = this.options.values.length), this._super(t, n), t) {
                        case "orientation":
                            this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(n), this.handles.css("horizontal" === n ? "bottom" : "left", "");
                            break;
                        case "value":
                            this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                            break;
                        case "values":
                            for (this._animateOff = !0, this._refreshValue(), r = i - 1; r >= 0; r--) this._change(null, r);
                            this._animateOff = !1;
                            break;
                        case "step":
                        case "min":
                        case "max":
                            this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                            break;
                        case "range":
                            this._animateOff = !0, this._refresh(), this._animateOff = !1
                    }
                },
                _setOptionDisabled: function(e) {
                    this._super(e), this._toggleClass(null, "ui-state-disabled", !!e)
                },
                _value: function() {
                    var e = this.options.value;
                    return e = this._trimAlignValue(e)
                },
                _values: function(e) {
                    var t, n, r;
                    if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t);
                    if (this._hasMultipleValues()) {
                        for (n = this.options.values.slice(), r = 0; r < n.length; r += 1) n[r] = this._trimAlignValue(n[r]);
                        return n
                    }
                    return []
                },
                _trimAlignValue: function(e) {
                    if (e <= this._valueMin()) return this._valueMin();
                    if (e >= this._valueMax()) return this._valueMax();
                    var t = this.options.step > 0 ? this.options.step : 1,
                        n = (e - this._valueMin()) % t,
                        r = e - n;
                    return 2 * Math.abs(n) >= t && (r += n > 0 ? t : -t), parseFloat(r.toFixed(5))
                },
                _calculateNewMax: function() {
                    var e = this.options.max,
                        t = this._valueMin(),
                        n = this.options.step,
                        r = Math.floor(+(e - t).toFixed(this._precision()) / n) * n;
                    e = r + t, this.max = parseFloat(e.toFixed(this._precision()))
                },
                _precision: function() {
                    var e = this._precisionOf(this.options.step);
                    return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e
                },
                _precisionOf: function(e) {
                    var t = e.toString(),
                        n = t.indexOf(".");
                    return -1 === n ? 0 : t.length - n - 1
                },
                _valueMin: function() {
                    return this.options.min
                },
                _valueMax: function() {
                    return this.max
                },
                _refreshRange: function(e) {
                    "vertical" === e && this.range.css({
                        width: "",
                        left: ""
                    }), "horizontal" === e && this.range.css({
                        height: "",
                        bottom: ""
                    })
                },
                _refreshValue: function() {
                    var t, n, r, i, a, o = this.options.range,
                        s = this.options,
                        u = this,
                        c = this._animateOff ? !1 : s.animate,
                        l = {};
                    this._hasMultipleValues() ? this.handles.each(function(r) {
                        n = (u.values(r) - u._valueMin()) / (u._valueMax() - u._valueMin()) * 100, l["horizontal" === u.orientation ? "left" : "bottom"] = n + "%", e(this).stop(1, 1)[c ? "animate" : "css"](l, s.animate), u.options.range === !0 && ("horizontal" === u.orientation ? (0 === r && u.range.stop(1, 1)[c ? "animate" : "css"]({
                            left: n + "%"
                        }, s.animate), 1 === r && u.range[c ? "animate" : "css"]({
                            width: n - t + "%"
                        }, {
                            queue: !1,
                            duration: s.animate
                        })) : (0 === r && u.range.stop(1, 1)[c ? "animate" : "css"]({
                            bottom: n + "%"
                        }, s.animate), 1 === r && u.range[c ? "animate" : "css"]({
                            height: n - t + "%"
                        }, {
                            queue: !1,
                            duration: s.animate
                        }))), t = n
                    }) : (r = this.value(), i = this._valueMin(), a = this._valueMax(), n = a !== i ? (r - i) / (a - i) * 100 : 0, l["horizontal" === this.orientation ? "left" : "bottom"] = n + "%", this.handle.stop(1, 1)[c ? "animate" : "css"](l, s.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                        width: n + "%"
                    }, s.animate), "max" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                        width: 100 - n + "%"
                    }, s.animate), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                        height: n + "%"
                    }, s.animate), "max" === o && "vertical" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                        height: 100 - n + "%"
                    }, s.animate))
                },
                _handleEvents: {
                    keydown: function(t) {
                        var n, r, i, a, o = e(t.target).data("ui-slider-handle-index");
                        switch (t.keyCode) {
                            case e.ui.keyCode.HOME:
                            case e.ui.keyCode.END:
                            case e.ui.keyCode.PAGE_UP:
                            case e.ui.keyCode.PAGE_DOWN:
                            case e.ui.keyCode.UP:
                            case e.ui.keyCode.RIGHT:
                            case e.ui.keyCode.DOWN:
                            case e.ui.keyCode.LEFT:
                                if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(e(t.target), null, "ui-state-active"), n = this._start(t, o), n === !1)) return
                        }
                        switch (a = this.options.step, r = i = this._hasMultipleValues() ? this.values(o) : this.value(), t.keyCode) {
                            case e.ui.keyCode.HOME:
                                i = this._valueMin();
                                break;
                            case e.ui.keyCode.END:
                                i = this._valueMax();
                                break;
                            case e.ui.keyCode.PAGE_UP:
                                i = this._trimAlignValue(r + (this._valueMax() - this._valueMin()) / this.numPages);
                                break;
                            case e.ui.keyCode.PAGE_DOWN:
                                i = this._trimAlignValue(r - (this._valueMax() - this._valueMin()) / this.numPages);
                                break;
                            case e.ui.keyCode.UP:
                            case e.ui.keyCode.RIGHT:
                                if (r === this._valueMax()) return;
                                i = this._trimAlignValue(r + a);
                                break;
                            case e.ui.keyCode.DOWN:
                            case e.ui.keyCode.LEFT:
                                if (r === this._valueMin()) return;
                                i = this._trimAlignValue(r - a)
                        }
                        this._slide(t, o, i)
                    },
                    keyup: function(t) {
                        var n = e(t.target).data("ui-slider-handle-index");
                        this._keySliding && (this._keySliding = !1, this._stop(t, n), this._change(t, n), this._removeClass(e(t.target), null, "ui-state-active"))
                    }
                }
            })
        })
    }, function(e, t) {
        "use strict";
        e.exports = window.jQuery
    }, function(e, t, n) {
        var r, i, a;
        /*!
         * jQuery UI Mouse 1.12.0-beta.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        ! function(o) {
            i = [n(431), n(433), n(434), n(435)], r = o, a = "function" == typeof r ? r.apply(t, i) : r, !(void 0 !== a && (e.exports = a))
        }(function(e) {
            var t = !1;
            return e(document).on("mouseup", function() {
                t = !1
            }), e.widget("ui.mouse", {
                version: "1.12.0-beta.1",
                options: {
                    cancel: "input, textarea, button, select, option",
                    distance: 1,
                    delay: 0
                },
                _mouseInit: function() {
                    var t = this;
                    this.element.on("mousedown." + this.widgetName, function(e) {
                        return t._mouseDown(e)
                    }).on("click." + this.widgetName, function(n) {
                        return !0 === e.data(n.target, t.widgetName + ".preventClickEvent") ? (e.removeData(n.target, t.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1) : void 0
                    }), this.started = !1
                },
                _mouseDestroy: function() {
                    this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
                },
                _mouseDown: function(n) {
                    if (!t) {
                        this._mouseMoved = !1, this._mouseStarted && this._mouseUp(n), this._mouseDownEvent = n;
                        var r = this,
                            i = 1 === n.which,
                            a = "string" == typeof this.options.cancel && n.target.nodeName ? e(n.target).closest(this.options.cancel).length : !1;
                        return i && !a && this._mouseCapture(n) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                            r.mouseDelayMet = !0
                        }, this.options.delay)), this._mouseDistanceMet(n) && this._mouseDelayMet(n) && (this._mouseStarted = this._mouseStart(n) !== !1, !this._mouseStarted) ? (n.preventDefault(), !0) : (!0 === e.data(n.target, this.widgetName + ".preventClickEvent") && e.removeData(n.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                            return r._mouseMove(e)
                        }, this._mouseUpDelegate = function(e) {
                            return r._mouseUp(e)
                        }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), n.preventDefault(), t = !0, !0)) : !0
                    }
                },
                _mouseMove: function(t) {
                    if (this._mouseMoved) {
                        if (e.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button) return this._mouseUp(t);
                        if (!t.which)
                            if (t.originalEvent.altKey || t.originalEvent.ctrlKey || t.originalEvent.metaKey || t.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                            else if (!this.ignoreMissingWhich) return this._mouseUp(t)
                    }
                    return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
                },
                _mouseUp: function(n) {
                    this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, n.target === this._mouseDownEvent.target && e.data(n.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(n)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, t = !1, n.preventDefault()
                },
                _mouseDistanceMet: function(e) {
                    return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
                },
                _mouseDelayMet: function() {
                    return this.mouseDelayMet
                },
                _mouseStart: function() {},
                _mouseDrag: function() {},
                _mouseStop: function() {},
                _mouseCapture: function() {
                    return !0
                }
            })
        })
    }, function(e, t, n) {
        var r, i, a;
        ! function(o) {
            i = [n(431), n(434)], r = o, a = "function" == typeof r ? r.apply(t, i) : r, !(void 0 !== a && (e.exports = a))
        }(function(e) {
            return e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())
        })
    }, function(e, t, n) {
        var r, i, a;
        ! function(o) {
            i = [n(431)], r = o, a = "function" == typeof r ? r.apply(t, i) : r, !(void 0 !== a && (e.exports = a))
        }(function(e) {
            return e.ui = e.ui || {}, e.ui.version = "1.12.0-beta.1"
        })
    }, function(e, t, n) {
        var r, i, a;
        /*!
         * jQuery UI Widget 1.12.0-beta.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        ! function(o) {
            i = [n(431), n(434)], r = o, a = "function" == typeof r ? r.apply(t, i) : r, !(void 0 !== a && (e.exports = a))
        }(function(e) {
            var t = 0,
                n = Array.prototype.slice;
            return e.cleanData = function(t) {
                return function(n) {
                    var r, i, a;
                    for (a = 0; null != (i = n[a]); a++) try {
                        r = e._data(i, "events"), r && r.remove && e(i).triggerHandler("remove")
                    } catch (o) {}
                    t(n)
                }
            }(e.cleanData), e.widget = function(t, n, r) {
                var i, a, o, s = {},
                    u = t.split(".")[0];
                t = t.split(".")[1];
                var c = u + "-" + t;
                return r || (r = n, n = e.Widget), e.isArray(r) && (r = e.extend.apply(null, [{}].concat(r))), e.expr[":"][c.toLowerCase()] = function(t) {
                    return !!e.data(t, c)
                }, e[u] = e[u] || {}, i = e[u][t], a = e[u][t] = function(e, t) {
                    return this._createWidget ? void(arguments.length && this._createWidget(e, t)) : new a(e, t)
                }, e.extend(a, i, {
                    version: r.version,
                    _proto: e.extend({}, r),
                    _childConstructors: []
                }), o = new n, o.options = e.widget.extend({}, o.options), e.each(r, function(t, r) {
                    return e.isFunction(r) ? void(s[t] = function() {
                        function e() {
                            return n.prototype[t].apply(this, arguments)
                        }

                        function i(e) {
                            return n.prototype[t].apply(this, e)
                        }
                        return function() {
                            var t, n = this._super,
                                a = this._superApply;
                            return this._super = e, this._superApply = i, t = r.apply(this, arguments), this._super = n, this._superApply = a, t
                        }
                    }()) : void(s[t] = r)
                }), a.prototype = e.widget.extend(o, {
                    widgetEventPrefix: i ? o.widgetEventPrefix || t : t
                }, s, {
                    constructor: a,
                    namespace: u,
                    widgetName: t,
                    widgetFullName: c
                }), i ? (e.each(i._childConstructors, function(t, n) {
                    var r = n.prototype;
                    e.widget(r.namespace + "." + r.widgetName, a, n._proto)
                }), delete i._childConstructors) : n._childConstructors.push(a), e.widget.bridge(t, a), a
            }, e.widget.extend = function(t) {
                for (var r, i, a = n.call(arguments, 1), o = 0, s = a.length; s > o; o++)
                    for (r in a[o]) i = a[o][r], a[o].hasOwnProperty(r) && void 0 !== i && (e.isPlainObject(i) ? t[r] = e.isPlainObject(t[r]) ? e.widget.extend({}, t[r], i) : e.widget.extend({}, i) : t[r] = i);
                return t
            }, e.widget.bridge = function(t, r) {
                var i = r.prototype.widgetFullName || t;
                e.fn[t] = function(a) {
                    var o = "string" == typeof a,
                        s = n.call(arguments, 1),
                        u = this;
                    return o ? this.each(function() {
                        var n, r = e.data(this, i);
                        return "instance" === a ? (u = r, !1) : r ? e.isFunction(r[a]) && "_" !== a.charAt(0) ? (n = r[a].apply(r, s), n !== r && void 0 !== n ? (u = n && n.jquery ? u.pushStack(n.get()) : n, !1) : void 0) : e.error("no such method '" + a + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + a + "'")
                    }) : (s.length && (a = e.widget.extend.apply(null, [a].concat(s))), this.each(function() {
                        var t = e.data(this, i);
                        t ? (t.option(a || {}), t._init && t._init()) : e.data(this, i, new r(a, this))
                    })), u
                }
            }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
                widgetName: "widget",
                widgetEventPrefix: "",
                defaultElement: "<div>",
                options: {
                    classes: {},
                    disabled: !1,
                    create: null
                },
                _createWidget: function(n, r) {
                    r = e(r || this.defaultElement || this)[0], this.element = e(r), this.uuid = t++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), this.classesElementLookup = {}, r !== this && (e.data(r, this.widgetFullName, this), this._on(!0, this.element, {
                        remove: function(e) {
                            e.target === r && this.destroy()
                        }
                    }), this.document = e(r.style ? r.ownerDocument : r.document || r), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), n), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
                },
                _getCreateOptions: function() {
                    return {}
                },
                _getCreateEventData: e.noop,
                _create: e.noop,
                _init: e.noop,
                destroy: function() {
                    var t = this;
                    this._destroy(), e.each(this.classesElementLookup, function(e, n) {
                        t._removeClass(n, e)
                    }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
                },
                _destroy: e.noop,
                widget: function() {
                    return this.element
                },
                option: function(t, n) {
                    var r, i, a, o = t;
                    if (0 === arguments.length) return e.widget.extend({}, this.options);
                    if ("string" == typeof t)
                        if (o = {}, r = t.split("."), t = r.shift(), r.length) {
                            for (i = o[t] = e.widget.extend({}, this.options[t]), a = 0; a < r.length - 1; a++) i[r[a]] = i[r[a]] || {}, i = i[r[a]];
                            if (t = r.pop(), 1 === arguments.length) return void 0 === i[t] ? null : i[t];
                            i[t] = n
                        } else {
                            if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                            o[t] = n
                        }
                    return this._setOptions(o), this
                },
                _setOptions: function(e) {
                    var t;
                    for (t in e) this._setOption(t, e[t]);
                    return this
                },
                _setOption: function(e, t) {
                    return "classes" === e && this._setOptionClasses(t), this.options[e] = t, "disabled" === e && this._setOptionDisabled(t), this
                },
                _setOptionClasses: function(t) {
                    var n, r, i;
                    for (n in t) i = this.classesElementLookup[n], t[n] !== this.options.classes[n] && i && i.length && (r = e(i.get()), this._removeClass(i, n), r.addClass(this._classes({
                        element: r,
                        keys: n,
                        classes: t,
                        add: !0
                    })))
                },
                _setOptionDisabled: function(e) {
                    this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!e), e && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
                },
                enable: function() {
                    return this._setOptions({
                        disabled: !1
                    })
                },
                disable: function() {
                    return this._setOptions({
                        disabled: !0
                    })
                },
                _classes: function(t) {
                    function n(n, a) {
                        var o, s;
                        for (s = 0; s < n.length; s++) o = i.classesElementLookup[n[s]] || e(), o = e(t.add ? e.unique(o.get().concat(t.element.get())) : o.not(t.element).get()), i.classesElementLookup[n[s]] = o, r.push(n[s]), a && t.classes[n[s]] && r.push(t.classes[n[s]])
                    }
                    var r = [],
                        i = this;
                    return t = e.extend({
                        element: this.element,
                        classes: this.options.classes || {}
                    }, t), t.keys && n(t.keys.match(/\S+/g) || [], !0), t.extra && n(t.extra.match(/\S+/g) || []), r.join(" ")
                },
                _removeClass: function(e, t, n) {
                    return this._toggleClass(e, t, n, !1)
                },
                _addClass: function(e, t, n) {
                    return this._toggleClass(e, t, n, !0)
                },
                _toggleClass: function(e, t, n, r) {
                    r = "boolean" == typeof r ? r : n;
                    var i = "string" == typeof e || null === e,
                        a = {
                            extra: i ? t : n,
                            keys: i ? e : t,
                            element: i ? this.element : e,
                            add: r
                        };
                    return a.element.toggleClass(this._classes(a), r), this
                },
                _on: function(t, n, r) {
                    var i, a = this;
                    "boolean" != typeof t && (r = n, n = t, t = !1), r ? (n = i = e(n), this.bindings = this.bindings.add(n)) : (r = n, n = this.element, i = this.widget()), e.each(r, function(r, o) {
                        function s() {
                            return t || a.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? a[o] : o).apply(a, arguments) : void 0
                        }
                        "string" != typeof o && (s.guid = o.guid = o.guid || s.guid || e.guid++);
                        var u = r.match(/^([\w:-]*)\s*(.*)$/),
                            c = u[1] + a.eventNamespace,
                            l = u[2];
                        l ? i.on(c, l, s) : n.on(c, s)
                    })
                },
                _off: function(t, n) {
                    n = (n || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.off(n).off(n), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get())
                },
                _delay: function(e, t) {
                    function n() {
                        return ("string" == typeof e ? r[e] : e).apply(r, arguments)
                    }
                    var r = this;
                    return setTimeout(n, t || 0)
                },
                _hoverable: function(t) {
                    this.hoverable = this.hoverable.add(t), this._on(t, {
                        mouseenter: function(t) {
                            this._addClass(e(t.currentTarget), null, "ui-state-hover")
                        },
                        mouseleave: function(t) {
                            this._removeClass(e(t.currentTarget), null, "ui-state-hover")
                        }
                    })
                },
                _focusable: function(t) {
                    this.focusable = this.focusable.add(t), this._on(t, {
                        focusin: function(t) {
                            this._addClass(e(t.currentTarget), null, "ui-state-focus")
                        },
                        focusout: function(t) {
                            this._removeClass(e(t.currentTarget), null, "ui-state-focus")
                        }
                    })
                },
                _trigger: function(t, n, r) {
                    var i, a, o = this.options[t];
                    if (r = r || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], a = n.originalEvent)
                        for (i in a) i in n || (n[i] = a[i]);
                    return this.element.trigger(n, r), !(e.isFunction(o) && o.apply(this.element[0], [n].concat(r)) === !1 || n.isDefaultPrevented())
                }
            }, e.each({
                show: "fadeIn",
                hide: "fadeOut"
            }, function(t, n) {
                e.Widget.prototype["_" + t] = function(r, i, a) {
                    "string" == typeof i && (i = {
                        effect: i
                    });
                    var o, s = i ? i === !0 || "number" == typeof i ? n : i.effect || n : t;
                    i = i || {}, "number" == typeof i && (i = {
                        duration: i
                    }), o = !e.isEmptyObject(i), i.complete = a, i.delay && r.delay(i.delay), o && e.effects && e.effects.effect[s] ? r[t](i) : s !== t && r[s] ? r[s](i.duration, i.easing, a) : r.queue(function(n) {
                        e(this)[t](), a && a.call(r[0]), n()
                    })
                }
            }), e.widget
        })
    }, function(e, t, n) {
        var r, i, a;
        /*!
         * jQuery UI Keycode 1.12.0-beta.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        ! function(o) {
            i = [n(431), n(434)], r = o, a = "function" == typeof r ? r.apply(t, i) : r, !(void 0 !== a && (e.exports = a))
        }(function(e) {
            return e.ui.keyCode = {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        })
    }])
});