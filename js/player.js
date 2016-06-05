! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.video = t() : (e.Twitch = e.Twitch || {}, e.Twitch.video = t())
}(this, function() {
    return function(e) {
        function t(n) {
            if (i[n]) return i[n].exports;
            var r = i[n] = {
                exports: {},
                id: n,
                loaded: !1
            };
            return e[n].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
        }
        var n = window.webpackJsonpTwitch_video;
        window.webpackJsonpTwitch_video = function(i, o) {
            for (var a, s, u = 0, l = []; u < i.length; u++) s = i[u], r[s] && l.push.apply(l, r[s]), r[s] = 0;
            for (a in o) e[a] = o[a];
            for (n && n(i, o); l.length;) l.shift().call(null, t)
        };
        var i = {},
            r = {
                0: 0
            };
        return t.e = function(e, n) {
            if (0 === r[e]) return n.call(null, t);
            if (void 0 !== r[e]) r[e].push(n);
            else {
                r[e] = [n];
                var i = document.getElementsByTagName("head")[0],
                    o = document.createElement("script");
                o.type = "text/javascript", o.charset = "utf-8", o.async = !0, o.src = t.p + "" + e + ".js/" + ({}[e] || e) + "." + {
                    1: "d040aaf06c9e5c7972e3",
                    2: "ef7e0742b93b5504e375"
                }[e] + ".js", i.appendChild(o)
            }
        }, t.m = e, t.c = i, t.p = "", t(0)
    }([function(e, t, n) {
        "use strict";

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            function n() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? window : arguments[0];
                e.document.location.reload()
            }
            var i = (arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2], this),
                r = void 0,
                o = void 0,
                a = void 0,
                u = void 0,
                c = void 0,
                f = void 0,
                g = void 0,
                _ = void 0,
                E = void 0,
                k = function() {
                    var t = void 0;
                    t = "string" == typeof e || e instanceof String ? document.getElementById(e) : e;
                    var s = S();
                    f = (0, F.init)(), s.debug && f.subscribe(function() {
                        console.debug("state change: %o", f.getState())
                    }), f.dispatch(Q.loadExperiments({
                        login: A.get("login") || null,
                        deviceID: j.get(!1)
                    })), f.dispatch(X.setUsherParams(s)), f.dispatch(K.loadDefaultLang(s.lang)), f.dispatch((0, Z.initVodResume)()), (0, oe.krakenUserInfo)().then(function(e) {
                        return f.dispatch((0, Z.setUser)(e._id))
                    }), r = new $.PubSub(f, s), r.addEventListener($.EVENT_TOS, n), r.addEventListener($.EVENT_ONLINE, function() {
                        var e = f.getState(),
                            t = e.stream;
                        f.dispatch(z.setChannel(t.channel))
                    }), o = new v.AnalyticsTracker(f, s), f.dispatch((0, te.setAnalyticsTracker)(o)), a = new q.FullScreen(t), g = new N.Video(t, o, f, s), c = new L.State(g, r, a, f, o, s), s.debug && (window.state = c), (0, x.forwardProperties)(i, g), _ = new h.Analytics(g, o, c, f, s), O(s), E = new R.EmbedHost(g, c, f), new D.PlayerHotkeys(g, t, s), s.quality && f.dispatch((0, ee.setQuality)(s.quality)), s.controls && (u = new V.PlayerUI(g, t, o, c, a, f, s)), window.Twitch.sentinel || m.getSentinel(), s.channel ? f.dispatch(z.setChannel(s.channel)) : s.video && f.dispatch(z.setVideo(s.video)), T.get(ae, !1) || (0, oe.krakenUserInfo)().then(function(e) {
                        return "staff" === e.type ? f.getState().experiments.get(re.ABS_V2) : Promise.reject()
                    }).then(function(e) {
                        "yes" === e && (f.dispatch((0, ee.setQuality)("auto")), T.set(ae, !0))
                    }, function() {})
                },
                S = function() {
                    var e = (0, d["default"])(t) ? y.parse(t) : t;
                    return (0, b.isTwitchEmbed)() || (e = (0, p["default"])(e, w.embedParameters)), e.flash ? e.backend = "flash" : e.mse ? e.backend = "mse" : e.hls && (e.backend = "hls"), e.html5 && B.BackendHls.canPlay() ? e.backend = "hls" : e.html5 && U.BackendMse.canPlay() ? e.backend = "mse" : e.mseDev && H.BackendMseDevelopment.canPlay() && (e.backend = "mseDev"), e = (0, s["default"])(e, {
                        time: e.t
                    }), e = (0, s["default"])(e, {
                        volume: T.get("volume"),
                        muted: T.get("muted"),
                        quality: T.get("quality"),
                        backend: T.get("backend"),
                        player: C.getPlayerType()
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
                O = function(e) {
                    if (g.setVolume(e.volume), g.setMuted(e.muted), e.time) {
                        var t = I.parse(e.time);
                        g.readyState > g.HAVE_NOTHING ? g.setCurrentTime(t) : g.addEventListener(ie.LOADED_METADATA, function() {
                            g.setCurrentTime(t)
                        })
                    }
                    e.debug && w.allEvents.forEach(function(e) {
                        (0, l["default"])(w.debugIgnoreEvents, e) || g.addEventListener(e, function() {
                            console.log("video event: ", e)
                        })
                    }), g.addEventListener(ie.ERROR, function() {
                        console.error("video error:", g.getError())
                    })
                };
            i.setChannel = function(e) {
                f.dispatch(z.setChannel(e))
            }, i.setVideo = function(e) {
                f.dispatch(z.setVideo(e))
            }, i.setLanguage = function(e) {
                f.dispatch(K.loadLanguage(e))
            }, k(), i.destroy = function() {
                u.destroy(), g.destroy(), c.destroy(), a.destroy(), _.destroy(), E.destroy()
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Player = o;
        var a = n(1),
            s = r(a),
            u = n(35),
            l = r(u),
            c = n(33),
            d = r(c),
            f = n(44),
            p = r(f),
            h = n(49),
            v = n(162),
            g = n(170),
            m = i(g),
            _ = n(171),
            y = i(_),
            b = n(160),
            E = n(59),
            w = i(E),
            k = n(172),
            T = i(k),
            S = n(159),
            C = i(S),
            O = n(166),
            A = i(O),
            P = n(165),
            j = i(P),
            L = n(173),
            M = n(210),
            I = i(M),
            N = n(211),
            x = n(264),
            R = n(265),
            D = n(269),
            V = n(270),
            U = n(217),
            B = n(250),
            H = n(222),
            $ = n(188),
            q = n(208),
            F = n(305),
            G = n(266),
            z = i(G),
            W = n(320),
            Q = i(W),
            Y = n(322),
            K = i(Y),
            J = n(350),
            X = i(J),
            Z = n(282),
            ee = n(263),
            te = n(317),
            ne = n(184),
            ie = i(ne),
            re = n(148),
            oe = n(94);
        n(354).polyfill(), n.p = w.playerHost + "/", n(357), n(362);
        var ae = "auto_quality_forced";
        window.Twitch = window.Twitch || {}, window.Twitch.video = window.Twitch.video || {}, window.Twitch.video.Player = o, window.Twitch.Player = o
    }, function(e, t, n) {
        var i = n(2),
            r = n(3),
            o = n(5),
            a = n(17),
            s = a(function(e) {
                return e.push(void 0, r), i(o, void 0, e)
            });
        e.exports = s
    }, function(e, t) {
        function n(e, t, n) {
            var i = n.length;
            switch (i) {
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
        function i(e, t, n, i) {
            return void 0 === e || r(e, o[n]) && !a.call(i, n) ? t : e
        }
        var r = n(4),
            o = Object.prototype,
            a = o.hasOwnProperty;
        e.exports = i
    }, function(e, t) {
        function n(e, t) {
            return e === t || e !== e && t !== t
        }
        e.exports = n
    }, function(e, t, n) {
        var i = n(6),
            r = n(8),
            o = n(20),
            a = r(function(e, t, n, r) {
                i(t, o(t), e, r)
            });
        e.exports = a
    }, function(e, t, n) {
        function i(e, t, n, i) {
            n || (n = {});
            for (var o = -1, a = t.length; ++o < a;) {
                var s = t[o],
                    u = i ? i(n[s], e[s], s, n, e) : e[s];
                r(n, s, u)
            }
            return n
        }
        var r = n(7);
        e.exports = i
    }, function(e, t, n) {
        function i(e, t, n) {
            var i = e[t];
            a.call(e, t) && r(i, n) && (void 0 !== n || t in e) || (e[t] = n)
        }
        var r = n(4),
            o = Object.prototype,
            a = o.hasOwnProperty;
        e.exports = i
    }, function(e, t, n) {
        function i(e) {
            return o(function(t, n) {
                var i = -1,
                    o = n.length,
                    a = o > 1 ? n[o - 1] : void 0,
                    s = o > 2 ? n[2] : void 0;
                for (a = "function" == typeof a ? (o--, a) : void 0, s && r(n[0], n[1], s) && (a = 3 > o ? void 0 : a, o = 1), t = Object(t); ++i < o;) {
                    var u = n[i];
                    u && e(t, u, i, a)
                }
                return t
            })
        }
        var r = n(9),
            o = n(17);
        e.exports = i
    }, function(e, t, n) {
        function i(e, t, n) {
            if (!s(n)) return !1;
            var i = typeof t;
            return ("number" == i ? o(n) && a(t, n.length) : "string" == i && t in n) ? r(n[t], e) : !1
        }
        var r = n(4),
            o = n(10),
            a = n(16),
            s = n(14);
        e.exports = i
    }, function(e, t, n) {
        function i(e) {
            return null != e && a(r(e)) && !o(e)
        }
        var r = n(11),
            o = n(13),
            a = n(15);
        e.exports = i
    }, function(e, t, n) {
        var i = n(12),
            r = i("length");
        e.exports = r
    }, function(e, t) {
        function n(e) {
            return function(t) {
                return null == t ? void 0 : t[e]
            }
        }
        e.exports = n
    }, function(e, t, n) {
        function i(e) {
            var t = r(e) ? u.call(e) : "";
            return t == o || t == a
        }
        var r = n(14),
            o = "[object Function]",
            a = "[object GeneratorFunction]",
            s = Object.prototype,
            u = s.toString;
        e.exports = i
    }, function(e, t) {
        function n(e) {
            var t = typeof e;
            return !!e && ("object" == t || "function" == t)
        }
        e.exports = n
    }, function(e, t) {
        function n(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && i >= e
        }
        var i = 9007199254740991;
        e.exports = n
    }, function(e, t) {
        function n(e, t) {
            return e = "number" == typeof e || r.test(e) ? +e : -1, t = null == t ? i : t, e > -1 && e % 1 == 0 && t > e
        }
        var i = 9007199254740991,
            r = /^(?:0|[1-9]\d*)$/;
        e.exports = n
    }, function(e, t, n) {
        function i(e, t) {
            if ("function" != typeof e) throw new TypeError(a);
            return t = s(void 0 === t ? e.length - 1 : o(t), 0),
                function() {
                    for (var n = arguments, i = -1, o = s(n.length - t, 0), a = Array(o); ++i < o;) a[i] = n[t + i];
                    switch (t) {
                        case 0:
                            return e.call(this, a);
                        case 1:
                            return e.call(this, n[0], a);
                        case 2:
                            return e.call(this, n[0], n[1], a)
                    }
                    var u = Array(t + 1);
                    for (i = -1; ++i < t;) u[i] = n[i];
                    return u[t] = a, r(e, this, u)
                }
        }
        var r = n(2),
            o = n(18),
            a = "Expected a function",
            s = Math.max;
        e.exports = i
    }, function(e, t, n) {
        function i(e) {
            if (!e) return 0 === e ? e : 0;
            if (e = r(e), e === o || e === -o) {
                var t = 0 > e ? -1 : 1;
                return t * a
            }
            var n = e % 1;
            return e === e ? n ? e - n : e : 0
        }
        var r = n(19),
            o = 1 / 0,
            a = 1.7976931348623157e308;
        e.exports = i
    }, function(e, t, n) {
        function i(e) {
            if (o(e)) {
                var t = r(e.valueOf) ? e.valueOf() : e;
                e = o(t) ? t + "" : t
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = e.replace(s, "");
            var n = l.test(e);
            return n || c.test(e) ? d(e.slice(2), n ? 2 : 8) : u.test(e) ? a : +e
        }
        var r = n(13),
            o = n(14),
            a = NaN,
            s = /^\s+|\s+$/g,
            u = /^[-+]0x[0-9a-f]+$/i,
            l = /^0b[01]+$/i,
            c = /^0o[0-7]+$/i,
            d = parseInt;
        e.exports = i
    }, function(e, t, n) {
        function i(e) {
            for (var t = -1, n = s(e), i = r(e), u = i.length, c = o(e), d = !!c, f = c || [], p = f.length; ++t < u;) {
                var h = i[t];
                d && ("length" == h || a(h, p)) || "constructor" == h && (n || !l.call(e, h)) || f.push(h)
            }
            return f
        }
        var r = n(21),
            o = n(27),
            a = n(16),
            s = n(34),
            u = Object.prototype,
            l = u.hasOwnProperty;
        e.exports = i
    }, function(e, t, n) {
        function i(e) {
            e = null == e ? e : Object(e);
            var t = [];
            for (var n in e) t.push(n);
            return t
        }
        var r = n(22),
            o = n(26),
            a = Object.prototype,
            s = r ? r.enumerate : void 0,
            u = a.propertyIsEnumerable;
        s && !u.call({
            valueOf: 1
        }, "valueOf") && (i = function(e) {
            return o(s(e))
        }), e.exports = i
    }, function(e, t, n) {
        var i = n(23),
            r = i.Reflect;
        e.exports = r
    }, function(e, t, n) {
        (function(e, i) {
            var r = n(25),
                o = {
                    "function": !0,
                    object: !0
                },
                a = o[typeof t] && t && !t.nodeType ? t : void 0,
                s = o[typeof e] && e && !e.nodeType ? e : void 0,
                u = r(a && s && "object" == typeof i && i),
                l = r(o[typeof self] && self),
                c = r(o[typeof window] && window),
                d = r(o[typeof this] && this),
                f = u || c !== (d && d.window) && c || l || d || Function("return this")();
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
        function i(e) {
            var t = e ? e.length : void 0;
            return s(t) && (a(e) || u(e) || o(e)) ? r(t, String) : null
        }
        var r = n(28),
            o = n(29),
            a = n(32),
            s = n(15),
            u = n(33);
        e.exports = i
    }, function(e, t) {
        function n(e, t) {
            for (var n = -1, i = Array(e); ++n < e;) i[n] = t(n);
            return i
        }
        e.exports = n
    }, function(e, t, n) {
        function i(e) {
            return r(e) && s.call(e, "callee") && (!l.call(e, "callee") || u.call(e) == o)
        }
        var r = n(30),
            o = "[object Arguments]",
            a = Object.prototype,
            s = a.hasOwnProperty,
            u = a.toString,
            l = a.propertyIsEnumerable;
        e.exports = i
    }, function(e, t, n) {
        function i(e) {
            return o(e) && r(e)
        }
        var r = n(10),
            o = n(31);
        e.exports = i
    }, function(e, t) {
        function n(e) {
            return !!e && "object" == typeof e
        }
        e.exports = n
    }, function(e, t) {
        var n = Array.isArray;
        e.exports = n
    }, function(e, t, n) {
        function i(e) {
            return "string" == typeof e || !r(e) && o(e) && u.call(e) == a
        }
        var r = n(32),
            o = n(31),
            a = "[object String]",
            s = Object.prototype,
            u = s.toString;
        e.exports = i
    }, function(e, t) {
        function n(e) {
            var t = e && e.constructor,
                n = "function" == typeof t && t.prototype || i;
            return e === n
        }
        var i = Object.prototype;
        e.exports = n
    }, function(e, t, n) {
        function i(e, t, n, i) {
            e = o(e) ? e : u(e), n = n && !i ? s(n) : 0;
            var c = e.length;
            return 0 > n && (n = l(c + n, 0)), a(e) ? c >= n && e.indexOf(t, n) > -1 : !!c && r(e, t, n) > -1
        }
        var r = n(36),
            o = n(10),
            a = n(33),
            s = n(18),
            u = n(38),
            l = Math.max;
        e.exports = i
    }, function(e, t, n) {
        function i(e, t, n) {
            if (t !== t) return r(e, n);
            for (var i = n - 1, o = e.length; ++i < o;)
                if (e[i] === t) return i;
            return -1
        }
        var r = n(37);
        e.exports = i
    }, function(e, t) {
        function n(e, t, n) {
            for (var i = e.length, r = t + (n ? 0 : -1); n ? r-- : ++r < i;) {
                var o = e[r];
                if (o !== o) return r
            }
            return -1
        }
        e.exports = n
    }, function(e, t, n) {
        function i(e) {
            return e ? r(e, o(e)) : []
        }
        var r = n(39),
            o = n(41);
        e.exports = i
    }, function(e, t, n) {
        function i(e, t) {
            return r(t, function(t) {
                return e[t]
            })
        }
        var r = n(40);
        e.exports = i
    }, function(e, t) {
        function n(e, t) {
            for (var n = -1, i = e.length, r = Array(i); ++n < i;) r[n] = t(e[n], n, e);
            return r
        }
        e.exports = n
    }, function(e, t, n) {
        function i(e) {
            var t = l(e);
            if (!t && !s(e)) return o(e);
            var n = a(e),
                i = !!n,
                c = n || [],
                d = c.length;
            for (var f in e) !r(e, f) || i && ("length" == f || u(f, d)) || t && "constructor" == f || c.push(f);
            return c
        }
        var r = n(42),
            o = n(43),
            a = n(27),
            s = n(10),
            u = n(16),
            l = n(34);
        e.exports = i
    }, function(e, t) {
        function n(e, t) {
            return r.call(e, t) || "object" == typeof e && t in e && null === o(e)
        }
        var i = Object.prototype,
            r = i.hasOwnProperty,
            o = Object.getPrototypeOf;
        e.exports = n
    }, function(e, t) {
        function n(e) {
            return i(Object(e))
        }
        var i = Object.keys;
        e.exports = n
    }, function(e, t, n) {
        var i = n(45),
            r = n(47),
            o = n(17),
            a = o(function(e, t) {
                return null == e ? {} : r(e, i(t, 1))
            });
        e.exports = a
    }, function(e, t, n) {
        function i(e, t, n, u) {
            u || (u = []);
            for (var l = -1, c = e.length; ++l < c;) {
                var d = e[l];
                t > 0 && s(d) && (n || a(d) || o(d)) ? t > 1 ? i(d, t - 1, n, u) : r(u, d) : n || (u[u.length] = d)
            }
            return u
        }
        var r = n(46),
            o = n(29),
            a = n(32),
            s = n(30);
        e.exports = i
    }, function(e, t) {
        function n(e, t) {
            for (var n = -1, i = t.length, r = e.length; ++n < i;) e[r + n] = t[n];
            return e
        }
        e.exports = n
    }, function(e, t, n) {
        function i(e, t) {
            return e = Object(e), r(t, function(t, n) {
                return n in e && (t[n] = e[n]), t
            }, {})
        }
        var r = n(48);
        e.exports = i
    }, function(e, t) {
        function n(e, t, n, i) {
            var r = -1,
                o = e.length;
            for (i && o && (n = e[++r]); ++r < o;) n = t(n, e[r], r, e);
            return n
        }
        e.exports = n
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Analytics = t.CAPTION_LEARN_MORE = t.CAPTION_PRESET = t.MINUTE_WATCHED = void 0;
        var a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            s = n(50),
            u = r(s),
            l = n(44),
            c = r(l),
            d = n(53),
            f = n(55),
            p = n(56),
            h = n(59),
            v = i(h),
            g = n(94),
            m = n(145),
            _ = i(m),
            y = n(146),
            b = i(y),
            E = n(147),
            w = n(148),
            k = n(158),
            T = n(159),
            S = n(161),
            C = "video_init",
            O = "video-play",
            A = "video_error",
            P = t.MINUTE_WATCHED = "minute-watched",
            j = "buffer-empty",
            L = "buffer-refill",
            M = "vod_seek",
            I = t.CAPTION_PRESET = "player_caption_preset",
            N = t.CAPTION_LEARN_MORE = "player_caption_learn_more",
            x = 500;
        t.Analytics = function() {
            function e(t, n, i, r, a) {
                o(this, e), this.player = t, this.tracker = n, this.state = i, this.stateStore = r, this.options = a, this.minutesWatchedTimer = new d.MinutesWatched, this.hasPlayed = !1, this.bufferEmptyStartTime = null, this.bufferEmptyCount, this.lastNetworkProfile = -(1 / 0), this.countessTracker, this.valveClient, this.lastSeekTime = null, this.timeStampBeforeSeek = 0, this.isSeekInProgress = !1, this.trackNetworkProfile = this.stateStore.getState().experiments.get(w.NETWORK_PROFILE_COLLECTION), this.countessTracker = new f.CountessTracker({
                    host: v.countessHost
                }), this.latencyTracker = new p.LatencyTracker(this, 1e-6, this.player, this.stateStore), this.valveClient = new E.ValveClient, this.initProperties(), this.initEvents(), this.unsubscribes = [], this.unsubscribes.push(this._subscribeCaptions(this.stateStore))
            }
            return a(e, [{
                key: "_subscribeCaptions",
                value: function(e) {
                    var t = this;
                    return (0, k.subscribe)(e, ["captions"], function(e, n) {
                        var i = e.captions,
                            r = n.captions;
                        i.preset !== r.preset && t.trackEvent(I, {
                            captions_preset: i.preset
                        }), r.learnMoreClicks !== i.learnMoreClicks && t.trackEvent(N, {
                            learn_more_clicks: i.learnMoreClicks
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
                    this.minutesWatchedTimer.on("minute", this.onMinuteWatched.bind(this)), this.player.addEventListener("init", this.onBackendInit.bind(this)), this.player.addEventListener("loadstart", this.onLoadStart.bind(this)), this.player.addEventListener("pause", this.onPause.bind(this)), this.player.addEventListener("waiting", this.onWaiting.bind(this)), this.player.addEventListener("playing", this.onPlaying.bind(this)), this.player.addEventListener("playing", this.onQualityChange.bind(this)), this.player.addEventListener("ended", this.onEnded.bind(this)), this.player.addEventListener("qualitychange", this.onQualityChange.bind(this)), this.player.addEventListener("castingchange", this.onCastingChange.bind(this)), this.player.addEventListener("error", this.onVideoError.bind(this)), this.player.addEventListener("seeking", this.onSeeking.bind(this)), this.player.addEventListener("timeupdate", this.onTimeUpdate.bind(this)), this.player.addEventListener("canplay", this.onCanPlay.bind(this)), this.player.addEventListener("isspectre", this.onSpectre.bind(this))
                }
            }, {
                key: "getNetworkProfileStats",
                value: function(e) {
                    if (0 === e.length) return {};
                    var t = _.getStats(e.map(function(e) {
                            return e.firstByteLatency
                        })),
                        n = _.getStats(e.map(function(e) {
                            return e.downloadDuration
                        })),
                        i = e.reduce(function(e, t) {
                            return {
                                bytes: e.bytes + t.bytes,
                                duration: e.duration + t.segmentDuration
                            }
                        }, {
                            bytes: 0,
                            duration: 0
                        }),
                        r = 8 * i.bytes / 1024 / (i.duration / 1e3);
                    return {
                        time_to_first_byte: t.mean,
                        stdev_time_to_first_byte: t.stdev,
                        download_duration: n.mean,
                        stdev_download_duration: n.stdev,
                        bitrate: r
                    }
                }
            }, {
                key: "trackEvent",
                value: function(e, t) {
                    var n = this.player.getVideoInfo();
                    n = (0, c["default"])(n, "bandwidth", "cluster", "current_bitrate", "current_fps", "dropped_frames", "hls_latency_broadcaster", "hls_latency_encoder", "hls_latency_broadcaster_send_time", "hls_latency_ingest_receive_time", "hls_latency_ingest_send_time", "hls_latency_transcode_receive_time", "hls_latency_transcode_send_time", "hls_target_duration", "manifest_cluster", "manifest_node", "node", "origin", "stream_format", "user_ip", "vid_display_height", "vid_display_width", "vid_height", "vid_width", "video_buffer_size");
                    var i = (0, u["default"])({}, n, t);
                    i.volume = this.player.getVolume(), i.muted = this.player.getMuted(), this.tracker.trackEvent(e, i)
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
                    }), this.trackEvent(P, (0, u["default"])(n, {
                        seconds_offset: this.minutesWatchedTimer.initialDelay / 1e3,
                        minutes_logged: this.minutesWatchedTimer.totalMinutes,
                        captions_enabled: this.stateStore.getState().captions.enabled,
                        quality_change_count: this.stateStore.getState().analytics.qualityChangeCount,
                        player_size_mode: this._getPlayerDisplayMode(),
                        broadcast_id: this.stateStore.getState().streamMetadata._id
                    })), this.stateStore.dispatch((0, S.resetQualityChangeCount)()), this.valveClient.notify(), this.trackNetworkProfile.then(function(n) {
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
                    this.tracker.setProperty("app_version", this.player.getVersion()), this.tracker.setProperty("backend", this.player.getBackend()), this.tracker.trackEvent(C)
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
                        return (0, c["default"])(e, "partner")
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
                    this.player.getSeeking() || (this.bufferEmptyStartTime = (new Date).getTime(), this.bufferEmptyCount++, this.trackEvent(j, {
                        buffer_empty_count: this.bufferEmptyCount
                    }))
                }
            }, {
                key: "onPlaying",
                value: function() {
                    if (null !== this.bufferEmptyStartTime) {
                        var e = (new Date).getTime();
                        this.trackEvent(L, {
                            buffering_time: (e - this.bufferEmptyStartTime) / 1e3
                        }), this.bufferEmptyStartTime = null
                    }
                    this.hasPlayed || (this.trackEvent(O), this.hasPlayed = !0, this.valveClient.notify(), this.stateStore.dispatch(b.sendPlayerBeacon()), this.stateStore.dispatch(b.sendVideoBeacon())), this.minutesWatchedTimer.start()
                }
            }, {
                key: "onCanPlay",
                value: function() {
                    this.isSeekInProgress && (this.isSeekInProgress = !1, this.trackEvent(M, {
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
                    this.tracker.trackEvent(A, {
                        error_type: e.error_type
                    })
                }
            }, {
                key: "_getPlayerDisplayMode",
                value: function() {
                    return this.state.isFullScreen() ? "fullscreen" : this.options.player === T.PLAYER_POPOUT ? "popout" : this.player.getTheatre() ? "theatre mode" : ""
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
        var i = n(7),
            r = n(52),
            o = n(8),
            a = n(10),
            s = n(34),
            u = n(20),
            l = Object.prototype,
            c = l.propertyIsEnumerable,
            d = !c.call({
                valueOf: 1
            }, "valueOf"),
            f = o(function(e, t) {
                if (d || s(t) || a(t)) return void r(t, u(t), e);
                for (var n in t) i(e, n, t[n])
            });
        e.exports = f
    }, function(e, t, n) {
        function i(e, t, n) {
            return r(e, t, n)
        }
        var r = n(6);
        e.exports = i
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r() {
            this.initialDelay = Math.round(6e4 * Math.random()), this._remainingDelay = this.initialDelay, this._timeout = null, this._timeoutStart = null, this.totalMinutes = 0, this._events = new a["default"]
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.MinutesWatched = r;
        var o = n(54),
            a = i(o);
        r.EVENT_INTERVAL = 6e4, r.MAX_DRIFT = 1e4, r.prototype.start = function() {
            null === this._timeout && this._scheduleTick()
        }, r.prototype.stop = function() {
            null !== this._timeout && (clearTimeout(this._timeout), this._timeout = null, this._tick())
        }, r.prototype.reset = function() {
            this.stop(), this._remainingDelay = r.EVENT_INTERVAL
        }, r.prototype.on = function(e, t) {
            this._events.on(e, t)
        }, r.prototype.off = function(e, t) {
            this._events.off(e, t)
        }, r.prototype._tick = function() {
            var e = (new Date).getTime(),
                t = e - this._timeoutStart;
            for (this._remainingDelay -= t, this._remainingDelay <= -r.MAX_DRIFT && (this._remainingDelay = 0), this._remainingDelay >= r.EVENT_INTERVAL + r.MAX_DRIFT && (this._remainingDelay = 0); this._remainingDelay <= 0;) this._remainingDelay += r.EVENT_INTERVAL, this.totalMinutes += 1, setTimeout(this._events.emit.bind(this._events, "minute"), 0)
        }, r.prototype._scheduleTick = function() {
            this._timeoutStart = (new Date).getTime();
            var e = this;
            this._timeout = setTimeout(function() {
                e._tick(), e._scheduleTick()
            }, this._remainingDelay)
        }
    }, function(e, t, n) {
        var i;
        (function() {
            "use strict";

            function t() {}

            function r(e, t) {
                for (var n = e.length; n--;)
                    if (e[n].listener === t) return n;
                return -1
            }

            function o(e) {
                return function() {
                    return this[e].apply(this, arguments)
                }
            }
            var a = t.prototype,
                s = this,
                u = s.EventEmitter;
            a.getListeners = function(e) {
                var t, n, i = this._getEvents();
                if (e instanceof RegExp) {
                    t = {};
                    for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
                } else t = i[e] || (i[e] = []);
                return t
            }, a.flattenListeners = function(e) {
                var t, n = [];
                for (t = 0; t < e.length; t += 1) n.push(e[t].listener);
                return n
            }, a.getListenersAsObject = function(e) {
                var t, n = this.getListeners(e);
                return n instanceof Array && (t = {}, t[e] = n), t || n
            }, a.addListener = function(e, t) {
                var n, i = this.getListenersAsObject(e),
                    o = "object" == typeof t;
                for (n in i) i.hasOwnProperty(n) && -1 === r(i[n], t) && i[n].push(o ? t : {
                    listener: t,
                    once: !1
                });
                return this
            }, a.on = o("addListener"), a.addOnceListener = function(e, t) {
                return this.addListener(e, {
                    listener: t,
                    once: !0
                })
            }, a.once = o("addOnceListener"), a.defineEvent = function(e) {
                return this.getListeners(e), this
            }, a.defineEvents = function(e) {
                for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
                return this
            }, a.removeListener = function(e, t) {
                var n, i, o = this.getListenersAsObject(e);
                for (i in o) o.hasOwnProperty(i) && (n = r(o[i], t), -1 !== n && o[i].splice(n, 1));
                return this
            }, a.off = o("removeListener"), a.addListeners = function(e, t) {
                return this.manipulateListeners(!1, e, t)
            }, a.removeListeners = function(e, t) {
                return this.manipulateListeners(!0, e, t)
            }, a.manipulateListeners = function(e, t, n) {
                var i, r, o = e ? this.removeListener : this.addListener,
                    a = e ? this.removeListeners : this.addListeners;
                if ("object" != typeof t || t instanceof RegExp)
                    for (i = n.length; i--;) o.call(this, t, n[i]);
                else
                    for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : a.call(this, i, r));
                return this
            }, a.removeEvent = function(e) {
                var t, n = typeof e,
                    i = this._getEvents();
                if ("string" === n) delete i[e];
                else if (e instanceof RegExp)
                    for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
                else delete this._events;
                return this
            }, a.removeAllListeners = o("removeEvent"), a.emitEvent = function(e, t) {
                var n, i, r, o, a, s = this.getListenersAsObject(e);
                for (o in s)
                    if (s.hasOwnProperty(o))
                        for (n = s[o].slice(0), r = n.length; r--;) i = n[r], i.once === !0 && this.removeListener(e, i.listener), a = i.listener.apply(this, t || []), a === this._getOnceReturnValue() && this.removeListener(e, i.listener);
                return this
            }, a.trigger = o("emitEvent"), a.emit = function(e) {
                var t = Array.prototype.slice.call(arguments, 1);
                return this.emitEvent(e, t)
            }, a.setOnceReturnValue = function(e) {
                return this._onceReturnValue = e, this
            }, a._getOnceReturnValue = function() {
                return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
            }, a._getEvents = function() {
                return this._events || (this._events = {})
            }, t.noConflict = function() {
                return s.EventEmitter = u, t
            }, i = function() {
                return t
            }.call(s, n, s, e), !(void 0 !== i && (e.exports = i))
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
                i = this._host + "/ping.gif?" + $.param(n);
            this._trackEvent(i)
        }
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e) {
            var t = 4294967295,
                n = 0;
            return function(i) {
                return u.v3(i, n) / t <= e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.LatencyTracker = void 0;
        var a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();
        t.murmurSegmentSampler = o;
        var s = n(57),
            u = i(s),
            l = n(58),
            c = i(l);
        t.LatencyTracker = function() {
            function e(t, n, i, a) {
                r(this, e), this._analytics = t, this._sample = o(n), this._player = i, this._store = a, i.addEventListener(c.SEGMENT_CHANGE, this._onSegmentChange.bind(this))
            }
            return a(e, [{
                key: "_segmentName",
                value: function(e) {
                    var t = this._store.getState().stream.channel,
                        n = this._store.getState().playback.quality;
                    return t + "," + n + "," + e
                }
            }, {
                key: "_onSegmentChange",
                value: function(e) {
                    var t = this._segmentName(e.name);
                    this._sample(t) && this._analytics.trackEvent("latency_report_playback", {
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
        ! function() {
            function t(e, t) {
                for (var n, i = e.length, r = t ^ i, o = 0; i >= 4;) n = 255 & e.charCodeAt(o) | (255 & e.charCodeAt(++o)) << 8 | (255 & e.charCodeAt(++o)) << 16 | (255 & e.charCodeAt(++o)) << 24, n = 1540483477 * (65535 & n) + ((1540483477 * (n >>> 16) & 65535) << 16), n ^= n >>> 24, n = 1540483477 * (65535 & n) + ((1540483477 * (n >>> 16) & 65535) << 16), r = 1540483477 * (65535 & r) + ((1540483477 * (r >>> 16) & 65535) << 16) ^ n, i -= 4, ++o;
                switch (i) {
                    case 3:
                        r ^= (255 & e.charCodeAt(o + 2)) << 16;
                    case 2:
                        r ^= (255 & e.charCodeAt(o + 1)) << 8;
                    case 1:
                        r ^= 255 & e.charCodeAt(o), r = 1540483477 * (65535 & r) + ((1540483477 * (r >>> 16) & 65535) << 16)
                }
                return r ^= r >>> 13, r = 1540483477 * (65535 & r) + ((1540483477 * (r >>> 16) & 65535) << 16), r ^= r >>> 15, r >>> 0
            }

            function n(e, t) {
                var n, i, r, o, a, s, u, l;
                for (n = 3 & e.length, i = e.length - n, r = t, a = 3432918353, s = 461845907, l = 0; i > l;) u = 255 & e.charCodeAt(l) | (255 & e.charCodeAt(++l)) << 8 | (255 & e.charCodeAt(++l)) << 16 | (255 & e.charCodeAt(++l)) << 24, ++l, u = (65535 & u) * a + (((u >>> 16) * a & 65535) << 16) & 4294967295, u = u << 15 | u >>> 17, u = (65535 & u) * s + (((u >>> 16) * s & 65535) << 16) & 4294967295, r ^= u, r = r << 13 | r >>> 19, o = 5 * (65535 & r) + ((5 * (r >>> 16) & 65535) << 16) & 4294967295, r = (65535 & o) + 27492 + (((o >>> 16) + 58964 & 65535) << 16);
                switch (u = 0, n) {
                    case 3:
                        u ^= (255 & e.charCodeAt(l + 2)) << 16;
                    case 2:
                        u ^= (255 & e.charCodeAt(l + 1)) << 8;
                    case 1:
                        u ^= 255 & e.charCodeAt(l), u = (65535 & u) * a + (((u >>> 16) * a & 65535) << 16) & 4294967295, u = u << 15 | u >>> 17, u = (65535 & u) * s + (((u >>> 16) * s & 65535) << 16) & 4294967295, r ^= u
                }
                return r ^= e.length, r ^= r >>> 16, r = 2246822507 * (65535 & r) + ((2246822507 * (r >>> 16) & 65535) << 16) & 4294967295, r ^= r >>> 13, r = 3266489909 * (65535 & r) + ((3266489909 * (r >>> 16) & 65535) << 16) & 4294967295, r ^= r >>> 16, r >>> 0
            }
            var i = n;
            i.v2 = t, i.v3 = n;
            e.exports = i
        }()
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.PLAYER_INIT = "init", t.PLAYBACK_STATISTICS = "playbackStatistics", t.SPECTRE_PLAYLIST = "spectrePlaylist", t.CHANSUB_REQUIRED = "chansubRequired", t.LOADED_CHANNEL = "loadedchannel", t.LOADED_VIDEO = "loadedvideo", t.VIDEO_FAILURE = "videoFailure", t.FORMATS = "videoFormats", t.FORMAT_CHANGED = "videoFormatChanged", t.TIME_CHANGE = "timeChange", t.BUFFER_CHANGE = "bufferChange", t.SEGMENT_CHANGE = "segmentchange", t.USHER_FAIL_ERROR = "usherFail", t.CAPTION_UPDATE = "captions", t.SEEK_FAILED = "seekfailed", t.VIEWER_COUNT = "viewerCount", t.VIEWERS_CHANGE = "viewerschange", t.STREAM_LOADED = "streamLoaded", t.VIDEO_LOADED = "videoLoaded", t.VIDEO_PAUSED = "videoPaused", t.QUALITIES_CHANGE = "qualitieschange", t.QUALITY_CHANGE = "qualitychange", t.OFFLINE = "offline", t.STATS_CHANGE = "statschange", t.RESTRICTED = "restricted", t.IS_SPECTRE = "isspectre"
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.resumewatchingHost = t.httpsQualityCarryover = t.unknownError = t.videoError = t.channelError = t.flashError = t.cancelResumeAmount = t.hotkeySeekAmount = t.defaultLanguage = t.leaveDialog = t.doubleClickUrl = t.flashTimeout = t.volumeStepAmount = t.embedParameters = t.mutedSegmentsMessage = t.chromecastStates = t.debugIgnoreEvents = t.allEvents = t.customEvents = t.mediaEvents = t.reportHideDelay = t.hoverControlsDelay = t.initialControlsDelay = t.qualityChangeDuration = t.qualityText = t.bufferPollDelay = t.pubSubEnviroment = t.version = t.chromecastId = t.popoutSize = t.gamePath = t.countessHost = t.spadeIgnore = t.spadeHost = t.mixpanelIgnore = t.mixpanelToken = t.mixpanelHost = t.trackingPlatform = t.apiTimeout = t.playerHost = t.valveApiHost = t.usherHost = t.spectreHost = t.apiHost = t.twitchHost = t.domain = void 0;
        var o = n(60),
            a = r(o),
            s = n(93),
            u = n(58),
            l = i(u),
            c = "testplayer.twitch.tv",
            d = (t.domain = "twitch.tv", t.twitchHost = "//twitch.tv"),
            f = t.apiHost = "https://api.twitch.tv",
            p = (t.spectreHost = "//spectre.twitch.tv", t.usherHost = "//usher.ttvnw.net", t.valveApiHost = f + "/steam/watching", t.playerHost = function() {
                var e = document.currentScript,
                    t = document.getElementsByTagName("script");
                if (!e) {
                    var n = Array.prototype.filter.call(t, function(e) {
                        return e.src && e.src.match(/player(?:\.\w+)?\.js$/i)
                    });
                    e = 1 === n.length ? n[0] : t[t.length - 1]
                }
                var i = (0, s.parseUri)(e.src);
                if (i.authority === c) {
                    var r = i.path.split("/").slice(1, -2).join("/");
                    return i.protocol + "://" + i.authority + "/" + r
                }
                return i.protocol + "://" + i.authority
            }(), t.apiTimeout = 1e4, t.trackingPlatform = "web", t.mixpanelHost = "//api.mixpanel.com", t.mixpanelToken = "809576468572134f909dffa6bd0dcfcf", t.mixpanelIgnore = ["minute-buffered", "x_untrusted_video_init", "x_untrusted_video-play", "x_untrusted_minute-watched", "x_untrusted_buffer-empty", "x_untrusted_buffer-refill", "network_profile"], t.spadeHost = "//spade.twitch.tv", t.spadeIgnore = [], t.countessHost = "//countess.twitch.tv", t.gamePath = d + "/directory/game", t.popoutSize = {
                width: 853,
                height: 480
            }, t.chromecastId = "358E83DC", t.version = "0.7.1", t.pubSubEnviroment = "production", t.bufferPollDelay = 1e3, t.qualityText = {
                chunked: "Source",
                high: "High",
                medium: "Medium",
                low: "Low",
                mobile: "Mobile",
                auto: "Auto"
            }, t.qualityChangeDuration = 6e3, t.initialControlsDelay = 8e3, t.hoverControlsDelay = 5e3, t.reportHideDelay = 2e3, t.mediaEvents = ["loadstart", "progress", "suspend", "abort", "error", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "waiting", "seeking", "seeked", "ended", "durationchange", "timeupdate", "play", "pause", "ratechange", "volumechange"]),
            h = t.customEvents = ["adcompanionrendered", "castingchange", "bufferChange", "statschange", "qualitychange", "qualitieschange", "adstart", "adend", "init", "loadedchannel", "loadedvideo", "viewerschange", "fullscreenchange", "restricted", l.SEGMENT_CHANGE, "isspectre", "theatrechange", "online", "offline", "usherfail", "captions"];
        t.allEvents = (0, a["default"])(p, h), t.debugIgnoreEvents = ["statschange", "timeupdate", "bufferChange"], t.chromecastStates = ["unavailable", "available", "connecting", "connected", "error"], t.mutedSegmentsMessage = "Audio for portions of this video has been muted as it appears to contain copyrighted content owned or controlled by a third party.", t.embedParameters = ["channel", "video", "muted", "autoplay", "time", "t", "debug", "debug_ads", "html5", "quality", "controls", "devcaptions"], t.volumeStepAmount = .1, t.flashTimeout = 5e3, t.doubleClickUrl = "//pubads.g.doubleclick.net/gampad/ads", t.leaveDialog = {
            enabled: !1,
            sinceEnded: 45,
            viewerThreshold: 5e4,
            text: "Don't panicBasket. The broadcast is down, but don't refresh just yet. When the broadcast is back, the player will automatically reload for you.",
            refreshTimeout: 20,
            warningDuration: 45
        }, t.defaultLanguage = "en-US", t.hotkeySeekAmount = 5, t.cancelResumeAmount = 10, t.flashError = "No supported video backend available; Flash is not installed", t.channelError = "Channel could not be found, or has been deleted by its owner", t.videoError = "Video could not be found, or has been deleted by its owner", t.unknownError = "An unknown error has occured", t.httpsQualityCarryover = new Date(2016, 3, 30), t.resumewatchingHost = f + "/api/resumewatching/user-video"
    }, function(e, t, n) {
        var i = n(45),
            r = n(61),
            o = n(17),
            a = o(function(e) {
                return r(i(e, 1, !0))
            });
        e.exports = a
    }, function(e, t, n) {
        function i(e, t, n) {
            var i = -1,
                d = o,
                f = e.length,
                p = !0,
                h = [],
                v = h;
            if (n) p = !1, d = a;
            else if (f >= c) {
                var g = t ? null : u(e);
                if (g) return l(g);
                p = !1, d = s, v = new r
            } else v = t ? [] : h;
            e: for (; ++i < f;) {
                var m = e[i],
                    _ = t ? t(m) : m;
                if (p && _ === _) {
                    for (var y = v.length; y--;)
                        if (v[y] === _) continue e;
                    t && v.push(_), h.push(m)
                } else d(v, _, n) || (v !== h && v.push(_), h.push(m))
            }
            return h
        }
        var r = n(62),
            o = n(86),
            a = n(87),
            s = n(88),
            u = n(89),
            l = n(92),
            c = 200;
        e.exports = i
    }, function(e, t, n) {
        function i(e) {
            var t = -1,
                n = e ? e.length : 0;
            for (this.__data__ = new r; ++t < n;) this.push(e[t])
        }
        var r = n(63),
            o = n(85);
        i.prototype.push = o, e.exports = i
    }, function(e, t, n) {
        function i(e) {
            var t = -1,
                n = e ? e.length : 0;
            for (this.clear(); ++t < n;) {
                var i = e[t];
                this.set(i[0], i[1])
            }
        }
        var r = n(64),
            o = n(71),
            a = n(77),
            s = n(80),
            u = n(82);
        i.prototype.clear = r, i.prototype["delete"] = o, i.prototype.get = a, i.prototype.has = s, i.prototype.set = u, e.exports = i
    }, function(e, t, n) {
        function i() {
            this.__data__ = {
                hash: new r,
                map: o ? new o : [],
                string: new r
            }
        }
        var r = n(65),
            o = n(70);
        e.exports = i
    }, function(e, t, n) {
        function i() {}
        var r = n(66),
            o = Object.prototype;
        i.prototype = r ? r(null) : o, e.exports = i
    }, function(e, t, n) {
        var i = n(67),
            r = i(Object, "create");
        e.exports = r
    }, function(e, t, n) {
        function i(e, t) {
            var n = e[t];
            return r(n) ? n : void 0
        }
        var r = n(68);
        e.exports = i
    }, function(e, t, n) {
        function i(e) {
            return null == e ? !1 : r(e) ? f.test(c.call(e)) : a(e) && (o(e) ? f : u).test(e)
        }
        var r = n(13),
            o = n(69),
            a = n(31),
            s = /[\\^$.*+?()[\]{}|]/g,
            u = /^\[object .+?Constructor\]$/,
            l = Object.prototype,
            c = Function.prototype.toString,
            d = l.hasOwnProperty,
            f = RegExp("^" + c.call(d).replace(s, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        e.exports = i
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
        var i = n(67),
            r = n(23),
            o = i(r, "Map");
        e.exports = o
    }, function(e, t, n) {
        function i(e) {
            var t = this.__data__;
            return s(e) ? a("string" == typeof e ? t.string : t.hash, e) : r ? t.map["delete"](e) : o(t.map, e)
        }
        var r = n(70),
            o = n(72),
            a = n(74),
            s = n(76);
        e.exports = i
    }, function(e, t, n) {
        function i(e, t) {
            var n = r(e, t);
            if (0 > n) return !1;
            var i = e.length - 1;
            return n == i ? e.pop() : a.call(e, n, 1), !0
        }
        var r = n(73),
            o = Array.prototype,
            a = o.splice;
        e.exports = i
    }, function(e, t, n) {
        function i(e, t) {
            for (var n = e.length; n--;)
                if (r(e[n][0], t)) return n;
            return -1
        }
        var r = n(4);
        e.exports = i
    }, function(e, t, n) {
        function i(e, t) {
            return r(e, t) && delete e[t]
        }
        var r = n(75);
        e.exports = i
    }, function(e, t, n) {
        function i(e, t) {
            return r ? void 0 !== e[t] : a.call(e, t)
        }
        var r = n(66),
            o = Object.prototype,
            a = o.hasOwnProperty;
        e.exports = i
    }, function(e, t) {
        function n(e) {
            var t = typeof e;
            return "number" == t || "boolean" == t || "string" == t && "__proto__" != e || null == e
        }
        e.exports = n
    }, function(e, t, n) {
        function i(e) {
            var t = this.__data__;
            return s(e) ? a("string" == typeof e ? t.string : t.hash, e) : r ? t.map.get(e) : o(t.map, e)
        }
        var r = n(70),
            o = n(78),
            a = n(79),
            s = n(76);
        e.exports = i
    }, function(e, t, n) {
        function i(e, t) {
            var n = r(e, t);
            return 0 > n ? void 0 : e[n][1]
        }
        var r = n(73);
        e.exports = i
    }, function(e, t, n) {
        function i(e, t) {
            if (r) {
                var n = e[t];
                return n === o ? void 0 : n
            }
            return s.call(e, t) ? e[t] : void 0
        }
        var r = n(66),
            o = "__lodash_hash_undefined__",
            a = Object.prototype,
            s = a.hasOwnProperty;
        e.exports = i
    }, function(e, t, n) {
        function i(e) {
            var t = this.__data__;
            return s(e) ? a("string" == typeof e ? t.string : t.hash, e) : r ? t.map.has(e) : o(t.map, e)
        }
        var r = n(70),
            o = n(81),
            a = n(75),
            s = n(76);
        e.exports = i
    }, function(e, t, n) {
        function i(e, t) {
            return r(e, t) > -1
        }
        var r = n(73);
        e.exports = i
    }, function(e, t, n) {
        function i(e, t) {
            var n = this.__data__;
            return s(e) ? a("string" == typeof e ? n.string : n.hash, e, t) : r ? n.map.set(e, t) : o(n.map, e, t), this
        }
        var r = n(70),
            o = n(83),
            a = n(84),
            s = n(76);
        e.exports = i
    }, function(e, t, n) {
        function i(e, t, n) {
            var i = r(e, t);
            0 > i ? e.push([t, n]) : e[i][1] = n
        }
        var r = n(73);
        e.exports = i
    }, function(e, t, n) {
        function i(e, t, n) {
            e[t] = r && void 0 === n ? o : n
        }
        var r = n(66),
            o = "__lodash_hash_undefined__";
        e.exports = i
    }, function(e, t, n) {
        function i(e) {
            var t = this.__data__;
            if (r(e)) {
                var n = t.__data__,
                    i = "string" == typeof e ? n.string : n.hash;
                i[e] = o
            } else t.set(e, o)
        }
        var r = n(76),
            o = "__lodash_hash_undefined__";
        e.exports = i
    }, function(e, t, n) {
        function i(e, t) {
            return !!e.length && r(e, t, 0) > -1
        }
        var r = n(36);
        e.exports = i
    }, function(e, t) {
        function n(e, t, n) {
            for (var i = -1, r = e.length; ++i < r;)
                if (n(t, e[i])) return !0;
            return !1
        }
        e.exports = n
    }, function(e, t, n) {
        function i(e, t) {
            var n = e.__data__;
            if (r(t)) {
                var i = n.__data__,
                    a = "string" == typeof t ? i.string : i.hash;
                return a[t] === o
            }
            return n.has(t)
        }
        var r = n(76),
            o = "__lodash_hash_undefined__";
        e.exports = i
    }, function(e, t, n) {
        var i = n(90),
            r = n(91),
            o = i && 2 === new i([1, 2]).size ? function(e) {
                return new i(e)
            } : r;
        e.exports = o
    }, function(e, t, n) {
        var i = n(67),
            r = n(23),
            o = i(r, "Set");
        e.exports = o
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
                }, n = t.parser[t.strictMode ? "strict" : "loose"].exec(e), i = {}, r = 14; r--;) i[t.key[r]] = n[r] || "";
            return i[t.q.name] = {}, i[t.key[12]].replace(t.q.parser, function(e, n, r) {
                n && (i[t.q.name][n] = r)
            }), i
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.parseUri = n
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.acceptHeader = t.clientID = t.videoUrl = t.channelUrl = t.isVODRestricted = t.accessToken = t.oauthToken = t.channelAPIInfo = t.krakenUserInfo = t.userInfo = t.channelViewerInfo = t.offlinePlaylistInfo = t.streamInfo = t.productInfo = t.videoInfo = t.channelInfo = void 0;
        var o = n(50),
            a = r(o),
            s = n(95),
            u = r(s),
            l = n(44),
            c = r(l),
            d = n(96),
            f = r(d),
            p = n(59),
            h = i(p),
            v = !!("withCredentials" in new XMLHttpRequest),
            g = v ? "json" : "jsonp",
            m = "jzkbprff40iqj646a697cyrvl0zt2m6",
            _ = "application/vnd.twitchtv.v3+json",
            y = function(e) {
                return e.replace(/[^A-Za-z0-9_]/g, "")
            },
            b = (0, u["default"])(function(e) {
                if (null === e) return Promise.reject(new Error("No channel info available on null channel ID"));
                var t = $.ajax({
                    url: h.apiHost + "/kraken/channels/" + y(e),
                    dataType: g,
                    timeout: h.apiTimeout,
                    headers: {
                        Accept: _,
                        "Client-ID": m
                    }
                });
                return Promise.resolve(t)
            }),
            E = (0, u["default"])(function(e) {
                if (null === e) return Promise.reject(new Error("No video info available on null video ID"));
                var t = $.ajax({
                        url: h.apiHost + "/kraken/videos/" + y(e),
                        dataType: g,
                        timeout: h.apiTimeout,
                        headers: {
                            Accept: _,
                            "Client-ID": m
                        }
                    }),
                    n = $.ajax({
                        url: h.apiHost + "/api/videos/" + y(e),
                        dataType: "jsonp",
                        timeout: h.apiTimeout
                    }).then(function(e) {
                        return (0, c["default"])(e, ["muted_segments", "increment_view_count_url", "restrictions", "seek_previews_url"])
                    }),
                    i = Promise.all([t, n]);
                return i.then(function(e) {
                    return (0, a["default"])({}, e[0], e[1])
                })
            }),
            w = (0, u["default"])(function(e) {
                var t = $.ajax({
                    url: h.apiHost + "/api/channels/" + y(e) + "/product",
                    dataType: g,
                    timeout: h.apiTimeout
                });
                return Promise.resolve(t)
            }),
            k = (0, u["default"])(function(e) {
                var t = $.ajax({
                    url: h.apiHost + "/kraken/streams/" + y(e),
                    dataType: g,
                    timeout: h.apiTimeout,
                    headers: {
                        Accept: _,
                        "Client-ID": m
                    }
                });
                return Promise.resolve(t)
            }),
            T = function(e) {
                var t = $.ajax({
                    url: h.spectreHost + "/v1/channels/" + e,
                    dataType: "jsonp",
                    timeout: h.apiTimeout
                });
                return Promise.resolve(t)
            },
            S = (0, u["default"])(function(e) {
                var t = $.ajax({
                    url: h.apiHost + "/api/channels/" + y(e) + "/viewer",
                    xhrFields: {
                        withCredentials: !0
                    },
                    dataType: g,
                    timeout: h.apiTimeout
                });
                return Promise.resolve(t)
            }),
            C = (0, u["default"])(function() {
                return P().then(function() {
                    var e = $.ajax({
                        url: h.apiHost + "/api/viewer/info.json",
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: g,
                        timeout: h.apiTimeout
                    });
                    return Promise.resolve(e)
                })
            }),
            O = (0, u["default"])(function() {
                return P().then(function(e) {
                    var t = $.ajax({
                        url: h.apiHost + "/kraken/user",
                        headers: {
                            Authorization: "OAuth " + e.token,
                            Accept: _,
                            "Client-ID": m
                        },
                        dataType: g,
                        timeout: h.apiTimeout
                    });
                    return Promise.resolve(t)
                })
            }),
            A = (0, u["default"])(function(e) {
                return P().then(function() {
                    var t = $.ajax({
                        url: h.apiHost + "/api/channels/" + e,
                        dataType: g,
                        timeout: h.apiTimeout
                    });
                    return Promise.resolve(t)
                })
            }),
            P = (0, u["default"])(function() {
                var e = $.ajax({
                    url: h.apiHost + "/api/viewer/token.json",
                    xhrFields: {
                        withCredentials: !0
                    },
                    dataType: g,
                    timeout: h.apiTimeout
                });
                return Promise.resolve(e)
            }),
            j = function(e, t) {
                var n = function(n) {
                    var i;
                    "channel" === e ? i = h.apiHost + "/api/channels/" + y(t) + "/access_token" : "video" === e && (i = h.apiHost + "/api/vods/" + y(t) + "/access_token");
                    var r = $.ajax({
                        url: i,
                        data: {
                            oauth_token: n
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: g,
                        timeout: h.apiTimeout
                    });
                    return Promise.resolve(r)
                };
                return P().then(function(e) {
                    return n(e.token)
                }, function() {
                    return n()
                })
            },
            L = function(e, t) {
                return null !== e.chansub || e.is_admin ? !1 : (0, f["default"])(t.restrictions, function(e, t) {
                    return e || "chansub" === t
                }, !1)
            },
            M = function(e, t) {
                var n = h.twitchHost + "/" + y(e);
                return t && (n += "?" + $.param(t)), n
            },
            I = function(e, t, n) {
                var i = M(e),
                    r = t[0],
                    o = t.substring(1);
                return i += "/" + y(r) + "/" + y(o), n && (i += "?" + $.param(n)), i
            };
        t.channelInfo = b, t.videoInfo = E, t.productInfo = w, t.streamInfo = k, t.offlinePlaylistInfo = T, t.channelViewerInfo = S, t.userInfo = C, t.krakenUserInfo = O, t.channelAPIInfo = A, t.oauthToken = P, t.accessToken = j, t.isVODRestricted = L, t.channelUrl = M, t.videoUrl = I, t.clientID = m, t.acceptHeader = _
    }, function(e, t, n) {
        function i(e, t) {
            if ("function" != typeof e || t && "function" != typeof t) throw new TypeError(o);
            var n = function() {
                var i = arguments,
                    r = t ? t.apply(this, i) : i[0],
                    o = n.cache;
                if (o.has(r)) return o.get(r);
                var a = e.apply(this, i);
                return n.cache = o.set(r, a), a
            };
            return n.cache = new i.Cache, n
        }
        var r = n(63),
            o = "Expected a function";
        i.Cache = r, e.exports = i
    }, function(e, t, n) {
        function i(e, t, n) {
            var i = u(e) ? r : s,
                l = arguments.length < 3;
            return i(e, a(t, 4), n, l, o)
        }
        var r = n(48),
            o = n(97),
            a = n(102),
            s = n(144),
            u = n(32);
        e.exports = i
    }, function(e, t, n) {
        var i = n(98),
            r = n(101),
            o = r(i);
        e.exports = o
    }, function(e, t, n) {
        function i(e, t) {
            return e && r(e, t, o)
        }
        var r = n(99),
            o = n(41);
        e.exports = i
    }, function(e, t, n) {
        var i = n(100),
            r = i();
        e.exports = r
    }, function(e, t) {
        function n(e) {
            return function(t, n, i) {
                for (var r = -1, o = Object(t), a = i(t), s = a.length; s--;) {
                    var u = a[e ? s : ++r];
                    if (n(o[u], u, o) === !1) break
                }
                return t
            }
        }
        e.exports = n
    }, function(e, t, n) {
        function i(e, t) {
            return function(n, i) {
                if (null == n) return n;
                if (!r(n)) return e(n, i);
                for (var o = n.length, a = t ? o : -1, s = Object(n);
                    (t ? a-- : ++a < o) && i(s[a], a, s) !== !1;);
                return n
            }
        }
        var r = n(10);
        e.exports = i
    }, function(e, t, n) {
        function i(e) {
            var t = typeof e;
            return "function" == t ? e : null == e ? a : "object" == t ? s(e) ? o(e[0], e[1]) : r(e) : u(e)
        }
        var r = n(103),
            o = n(127),
            a = n(141),
            s = n(32),
            u = n(142);
        e.exports = i
    }, function(e, t, n) {
        function i(e) {
            var t = o(e);
            if (1 == t.length && t[0][2]) {
                var n = t[0][0],
                    i = t[0][1];
                return function(e) {
                    return null == e ? !1 : e[n] === i && (void 0 !== i || n in Object(e))
                }
            }
            return function(n) {
                return n === e || r(n, e, t)
            }
        }
        var r = n(104),
            o = n(123);
        e.exports = i
    }, function(e, t, n) {
        function i(e, t, n, i) {
            var u = n.length,
                l = u,
                c = !i;
            if (null == e) return !l;
            for (e = Object(e); u--;) {
                var d = n[u];
                if (c && d[2] ? d[1] !== e[d[0]] : !(d[0] in e)) return !1
            }
            for (; ++u < l;) {
                d = n[u];
                var f = d[0],
                    p = e[f],
                    h = d[1];
                if (c && d[2]) {
                    if (void 0 === p && !(f in e)) return !1
                } else {
                    var v = new r,
                        g = i ? i(p, h, f, e, t, v) : void 0;
                    if (!(void 0 === g ? o(h, p, i, a | s, v) : g)) return !1
                }
            }
            return !0
        }
        var r = n(105),
            o = n(111),
            a = 1,
            s = 2;
        e.exports = i
    }, function(e, t, n) {
        function i(e) {
            var t = -1,
                n = e ? e.length : 0;
            for (this.clear(); ++t < n;) {
                var i = e[t];
                this.set(i[0], i[1])
            }
        }
        var r = n(106),
            o = n(107),
            a = n(108),
            s = n(109),
            u = n(110);
        i.prototype.clear = r, i.prototype["delete"] = o, i.prototype.get = a, i.prototype.has = s, i.prototype.set = u, e.exports = i
    }, function(e, t) {
        function n() {
            this.__data__ = {
                array: [],
                map: null
            }
        }
        e.exports = n
    }, function(e, t, n) {
        function i(e) {
            var t = this.__data__,
                n = t.array;
            return n ? r(n, e) : t.map["delete"](e)
        }
        var r = n(72);
        e.exports = i
    }, function(e, t, n) {
        function i(e) {
            var t = this.__data__,
                n = t.array;
            return n ? r(n, e) : t.map.get(e)
        }
        var r = n(78);
        e.exports = i
    }, function(e, t, n) {
        function i(e) {
            var t = this.__data__,
                n = t.array;
            return n ? r(n, e) : t.map.has(e)
        }
        var r = n(81);
        e.exports = i
    }, function(e, t, n) {
        function i(e, t) {
            var n = this.__data__,
                i = n.array;
            i && (i.length < a - 1 ? o(i, e, t) : (n.array = null, n.map = new r(i)));
            var s = n.map;
            return s && s.set(e, t), this
        }
        var r = n(63),
            o = n(83),
            a = 200;
        e.exports = i
    }, function(e, t, n) {
        function i(e, t, n, s, u) {
            return e === t ? !0 : null == e || null == t || !o(e) && !a(t) ? e !== e && t !== t : r(e, t, i, n, s, u)
        }
        var r = n(112),
            o = n(14),
            a = n(31);
        e.exports = i
    }, function(e, t, n) {
        function i(e, t, n, i, g, _) {
            var y = l(e),
                b = l(t),
                E = h,
                w = h;
            y || (E = u(e), E = E == p ? v : E), b || (w = u(t), w = w == p ? v : w);
            var k = E == v && !c(e),
                T = w == v && !c(t),
                S = E == w;
            if (S && !k) return _ || (_ = new r), y || d(e) ? o(e, t, n, i, g, _) : a(e, t, E, n, i, g, _);
            if (!(g & f)) {
                var C = k && m.call(e, "__wrapped__"),
                    O = T && m.call(t, "__wrapped__");
                if (C || O) return _ || (_ = new r), n(C ? e.value() : e, O ? t.value() : t, i, g, _)
            }
            return S ? (_ || (_ = new r), s(e, t, n, i, g, _)) : !1
        }
        var r = n(105),
            o = n(113),
            a = n(115),
            s = n(119),
            u = n(120),
            l = n(32),
            c = n(69),
            d = n(122),
            f = 2,
            p = "[object Arguments]",
            h = "[object Array]",
            v = "[object Object]",
            g = Object.prototype,
            m = g.hasOwnProperty;
        e.exports = i
    }, function(e, t, n) {
        function i(e, t, n, i, s, u) {
            var l = -1,
                c = s & a,
                d = s & o,
                f = e.length,
                p = t.length;
            if (f != p && !(c && p > f)) return !1;
            var h = u.get(e);
            if (h) return h == t;
            var v = !0;
            for (u.set(e, t); ++l < f;) {
                var g = e[l],
                    m = t[l];
                if (i) var _ = c ? i(m, g, l, t, e, u) : i(g, m, l, e, t, u);
                if (void 0 !== _) {
                    if (_) continue;
                    v = !1;
                    break
                }
                if (d) {
                    if (!r(t, function(e) {
                            return g === e || n(g, e, i, s, u)
                        })) {
                        v = !1;
                        break
                    }
                } else if (g !== m && !n(g, m, i, s, u)) {
                    v = !1;
                    break
                }
            }
            return u["delete"](e), v
        }
        var r = n(114),
            o = 1,
            a = 2;
        e.exports = i
    }, function(e, t) {
        function n(e, t) {
            for (var n = -1, i = e.length; ++n < i;)
                if (t(e[n], n, e)) return !0;
            return !1
        }
        e.exports = n
    }, function(e, t, n) {
        function i(e, t, n, i, r, E, k) {
            switch (n) {
                case b:
                    return e.byteLength == t.byteLength && i(new o(e), new o(t)) ? !0 : !1;
                case d:
                case f:
                    return +e == +t;
                case p:
                    return e.name == t.name && e.message == t.message;
                case v:
                    return e != +e ? t != +t : e == +t;
                case g:
                case _:
                    return e == t + "";
                case h:
                    var T = s;
                case m:
                    var S = E & c;
                    if (T || (T = u), e.size != t.size && !S) return !1;
                    var C = k.get(e);
                    return C ? C == t : a(T(e), T(t), i, r, E | l, k.set(e, t));
                case y:
                    if (w) return w.call(e) == w.call(t)
            }
            return !1
        }
        var r = n(116),
            o = n(117),
            a = n(113),
            s = n(118),
            u = n(92),
            l = 1,
            c = 2,
            d = "[object Boolean]",
            f = "[object Date]",
            p = "[object Error]",
            h = "[object Map]",
            v = "[object Number]",
            g = "[object RegExp]",
            m = "[object Set]",
            _ = "[object String]",
            y = "[object Symbol]",
            b = "[object ArrayBuffer]",
            E = r ? r.prototype : void 0,
            w = E ? E.valueOf : void 0;
        e.exports = i
    }, function(e, t, n) {
        var i = n(23),
            r = i.Symbol;
        e.exports = r
    }, function(e, t, n) {
        var i = n(23),
            r = i.Uint8Array;
        e.exports = r
    }, function(e, t) {
        function n(e) {
            var t = -1,
                n = Array(e.size);
            return e.forEach(function(e, i) {
                n[++t] = [i, e]
            }), n
        }
        e.exports = n
    }, function(e, t, n) {
        function i(e, t, n, i, s, u) {
            var l = s & a,
                c = o(e),
                d = c.length,
                f = o(t),
                p = f.length;
            if (d != p && !l) return !1;
            for (var h = d; h--;) {
                var v = c[h];
                if (!(l ? v in t : r(t, v))) return !1
            }
            var g = u.get(e);
            if (g) return g == t;
            var m = !0;
            u.set(e, t);
            for (var _ = l; ++h < d;) {
                v = c[h];
                var y = e[v],
                    b = t[v];
                if (i) var E = l ? i(b, y, v, t, e, u) : i(y, b, v, e, t, u);
                if (!(void 0 === E ? y === b || n(y, b, i, s, u) : E)) {
                    m = !1;
                    break
                }
                _ || (_ = "constructor" == v)
            }
            if (m && !_) {
                var w = e.constructor,
                    k = t.constructor;
                w != k && "constructor" in e && "constructor" in t && !("function" == typeof w && w instanceof w && "function" == typeof k && k instanceof k) && (m = !1)
            }
            return u["delete"](e), m
        }
        var r = n(42),
            o = n(41),
            a = 2;
        e.exports = i
    }, function(e, t, n) {
        function i(e) {
            return p.call(e)
        }
        var r = n(70),
            o = n(90),
            a = n(121),
            s = "[object Map]",
            u = "[object Object]",
            l = "[object Set]",
            c = "[object WeakMap]",
            d = Object.prototype,
            f = Function.prototype.toString,
            p = d.toString,
            h = r ? f.call(r) : "",
            v = o ? f.call(o) : "",
            g = a ? f.call(a) : "";
        (r && i(new r) != s || o && i(new o) != l || a && i(new a) != c) && (i = function(e) {
            var t = p.call(e),
                n = t == u ? e.constructor : null,
                i = "function" == typeof n ? f.call(n) : "";
            if (i) switch (i) {
                case h:
                    return s;
                case v:
                    return l;
                case g:
                    return c
            }
            return t
        }), e.exports = i
    }, function(e, t, n) {
        var i = n(67),
            r = n(23),
            o = i(r, "WeakMap");
        e.exports = o
    }, function(e, t, n) {
        function i(e) {
            return o(e) && r(e.length) && !!P[L.call(e)]
        }
        var r = n(15),
            o = n(31),
            a = "[object Arguments]",
            s = "[object Array]",
            u = "[object Boolean]",
            l = "[object Date]",
            c = "[object Error]",
            d = "[object Function]",
            f = "[object Map]",
            p = "[object Number]",
            h = "[object Object]",
            v = "[object RegExp]",
            g = "[object Set]",
            m = "[object String]",
            _ = "[object WeakMap]",
            y = "[object ArrayBuffer]",
            b = "[object Float32Array]",
            E = "[object Float64Array]",
            w = "[object Int8Array]",
            k = "[object Int16Array]",
            T = "[object Int32Array]",
            S = "[object Uint8Array]",
            C = "[object Uint8ClampedArray]",
            O = "[object Uint16Array]",
            A = "[object Uint32Array]",
            P = {};
        P[b] = P[E] = P[w] = P[k] = P[T] = P[S] = P[C] = P[O] = P[A] = !0, P[a] = P[s] = P[y] = P[u] = P[l] = P[c] = P[d] = P[f] = P[p] = P[h] = P[v] = P[g] = P[m] = P[_] = !1;
        var j = Object.prototype,
            L = j.toString;
        e.exports = i
    }, function(e, t, n) {
        function i(e) {
            for (var t = o(e), n = t.length; n--;) t[n][2] = r(t[n][1]);
            return t
        }
        var r = n(124),
            o = n(125);
        e.exports = i
    }, function(e, t, n) {
        function i(e) {
            return e === e && !r(e)
        }
        var r = n(14);
        e.exports = i
    }, function(e, t, n) {
        function i(e) {
            return r(e, o(e))
        }
        var r = n(126),
            o = n(41);
        e.exports = i
    }, function(e, t, n) {
        function i(e, t) {
            return r(t, function(t) {
                return [t, e[t]]
            })
        }
        var r = n(40);
        e.exports = i
    }, function(e, t, n) {
        function i(e, t) {
            return function(n) {
                var i = o(n, e);
                return void 0 === i && i === t ? a(n, e) : r(t, i, void 0, s | u)
            }
        }
        var r = n(111),
            o = n(128),
            a = n(135),
            s = 1,
            u = 2;
        e.exports = i
    }, function(e, t, n) {
        function i(e, t, n) {
            var i = null == e ? void 0 : r(e, t);
            return void 0 === i ? n : i
        }
        var r = n(129);
        e.exports = i
    }, function(e, t, n) {
        function i(e, t) {
            t = o(t, e) ? [t + ""] : r(t);
            for (var n = 0, i = t.length; null != e && i > n;) e = e[t[n++]];
            return n && n == i ? e : void 0
        }
        var r = n(130),
            o = n(134);
        e.exports = i
    }, function(e, t, n) {
        function i(e) {
            return r(e) ? e : o(e)
        }
        var r = n(32),
            o = n(131);
        e.exports = i
    }, function(e, t, n) {
        function i(e) {
            var t = [];
            return r(e).replace(o, function(e, n, i, r) {
                t.push(i ? r.replace(a, "$1") : n || e)
            }), t
        }
        var r = n(132),
            o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g,
            a = /\\(\\)?/g;
        e.exports = i
    }, function(e, t, n) {
        function i(e) {
            if ("string" == typeof e) return e;
            if (null == e) return "";
            if (o(e)) return u ? u.call(e) : "";
            var t = e + "";
            return "0" == t && 1 / e == -a ? "-0" : t
        }
        var r = n(116),
            o = n(133),
            a = 1 / 0,
            s = r ? r.prototype : void 0,
            u = s ? s.toString : void 0;
        e.exports = i
    }, function(e, t, n) {
        function i(e) {
            return "symbol" == typeof e || r(e) && s.call(e) == o
        }
        var r = n(31),
            o = "[object Symbol]",
            a = Object.prototype,
            s = a.toString;
        e.exports = i
    }, function(e, t, n) {
        function i(e, t) {
            return "number" == typeof e ? !0 : !r(e) && (a.test(e) || !o.test(e) || null != t && e in Object(t))
        }
        var r = n(32),
            o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            a = /^\w*$/;
        e.exports = i
    }, function(e, t, n) {
        function i(e, t) {
            return o(e, t, r)
        }
        var r = n(136),
            o = n(137);
        e.exports = i
    }, function(e, t) {
        function n(e, t) {
            return t in Object(e)
        }
        e.exports = n
    }, function(e, t, n) {
        function i(e, t, n) {
            if (null == e) return !1;
            var i = n(e, t);
            i || u(t) || (t = r(t), e = f(e, t), null != e && (t = d(t), i = n(e, t)));
            var p = e ? e.length : void 0;
            return i || !!p && l(p) && s(t, p) && (a(e) || c(e) || o(e))
        }
        var r = n(130),
            o = n(29),
            a = n(32),
            s = n(16),
            u = n(134),
            l = n(15),
            c = n(33),
            d = n(138),
            f = n(139);
        e.exports = i
    }, function(e, t) {
        function n(e) {
            var t = e ? e.length : 0;
            return t ? e[t - 1] : void 0
        }
        e.exports = n
    }, function(e, t, n) {
        function i(e, t) {
            return 1 == t.length ? e : o(e, r(t, 0, -1))
        }
        var r = n(140),
            o = n(128);
        e.exports = i
    }, function(e, t) {
        function n(e, t, n) {
            var i = -1,
                r = e.length;
            0 > t && (t = -t > r ? 0 : r + t), n = n > r ? r : n, 0 > n && (n += r), r = t > n ? 0 : n - t >>> 0, t >>>= 0;
            for (var o = Array(r); ++i < r;) o[i] = e[i + t];
            return o
        }
        e.exports = n
    }, function(e, t) {
        function n(e) {
            return e
        }
        e.exports = n
    }, function(e, t, n) {
        function i(e) {
            return a(e) ? r(e) : o(e)
        }
        var r = n(12),
            o = n(143),
            a = n(134);
        e.exports = i
    }, function(e, t, n) {
        function i(e) {
            return function(t) {
                return r(t, e)
            }
        }
        var r = n(129);
        e.exports = i
    }, function(e, t) {
        function n(e, t, n, i, r) {
            return r(e, function(e, r, o) {
                n = i ? (i = !1, e) : t(n, e, r, o)
            }), n
        }
        e.exports = n
    }, function(e, t) {
        "use strict";

        function n(e) {
            var t = e.reduce(function(e, t) {
                    return e + t
                }, 0) / e.length,
                n = e.reduce(function(e, n) {
                    return e + Math.pow(n - t, 2)
                }, 0) / e.length,
                i = Math.sqrt(n);
            return {
                mean: t,
                stdev: i
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getStats = n
    }, function(e, t) {
        "use strict";

        function n() {
            return function(e, t) {
                var n = t(),
                    i = n.window;
                r(i, a, s, "2246787049647177590", "", "", "")
            }
        }

        function i() {
            return function(e, t) {
                var n = t(),
                    i = n.window;
                r(i, o, s, "TWITCH", "twitch.tv", u, "")
            }
        }

        function r(e, t, n, i, r, o, a) {
            var s = {
                c1: t,
                c2: n,
                c3: i,
                c4: r,
                c5: o,
                c6: a
            };
            "COMSCORE" in e ? e.COMSCORE.beacon(s) : (e._comscore || (e._comscore = []), e._comscore.push(s))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.sendPlayerBeacon = n, t.sendVideoBeacon = i;
        var o = "1",
            a = "7",
            s = "6745306",
            u = "03"
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function r() {
            this._viewerSteamId = Promise.reject(), this._channelSteamId = Promise.reject(), this._viewerSteamId.then(null, function() {
                return null
            }), this._channelSteamId.then(null, function() {
                return null
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ValveClient = r;
        var o = n(59),
            a = i(o);
        r.prototype.viewerInfo = function(e) {
            this._viewerSteamId = e.then(function(e) {
                return e.steam_id ? e.steam_id : Promise.reject()
            }), this._viewerSteamId.then(null, function() {
                return null
            })
        }, r.prototype.channelInfo = function(e) {
            this._channelSteamId = e.then(function(e) {
                return e.steam_id ? e.steam_id : Promise.reject()
            }), this._channelSteamId.then(null, function() {
                return null
            })
        }, r.prototype.notify = function() {
            var e = Promise.all([this._channelSteamId, this._viewerSteamId]).then(function(e) {
                var t = e[0],
                    n = e[1];
                $.ajax({
                    url: a.valveApiHost,
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

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function o(e) {
            var t, n;
            return new s["default"]({
                defaults: (t = {}, r(t, d, "yes"), r(t, f, "no"), r(t, p, "no"), r(t, h, "no"), r(t, v, "http:"), r(t, m, "no"), r(t, g, "no"), r(t, y, "off"), r(t, b, "no"), t),
                deviceID: e.deviceID,
                overrides: (n = {}, r(n, m, E(_)), r(n, y, E("v2")), r(n, h, E("yes")), r(n, p, E("yes")), r(n, v, E("https:")), r(n, g, E("yes")), n),
                platform: "web",
                login: e.login,
                provider: new l["default"](l["default"].SERVICE_URL),
                Promise: Promise
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.USE_LANTERN = t.CAPTIONS = t.CLIPS_EXPERIMENT_ENABLED = t.CLIPS = t.HTML5_TOGGLE = t.USHER_PROTOCOL = t.MARKERS = t.ABS_V2 = t.NETWORK_PROFILE_COLLECTION = t.ENABLE_REPEAT_ADS = void 0, t.createClient = o;
        var a = n(149),
            s = i(a),
            u = n(157),
            l = i(u),
            c = n(94),
            d = t.ENABLE_REPEAT_ADS = "c3e8c522-b537-47e6-9920-743360618b4a",
            f = t.NETWORK_PROFILE_COLLECTION = "5fbb67a0-b4ff-4775-b836-e9a348a87481",
            p = t.ABS_V2 = "c5824f4a-ecb8-4ef1-9d49-18885bf8bba5",
            h = t.MARKERS = "f725b4b2-bd4c-4cc9-a354-d0db1e762955",
            v = t.USHER_PROTOCOL = "fc2b4b0b-32dd-4e55-8e73-d87b9985a70e",
            g = t.HTML5_TOGGLE = "865ce2f3-52be-4a8c-87fe-d8ad580f4679",
            m = t.CLIPS = "b4d61bdb-c174-47e6-a2f9-a46a4088ac26",
            _ = t.CLIPS_EXPERIMENT_ENABLED = "yes",
            y = t.CAPTIONS = "4afcc1d7-b6f4-489a-beb3-0a32eb780592",
            b = t.USE_LANTERN = "c0168c60-b0f7-4766-aac6-b6edf7555302",
            E = function(e) {
                return (0, c.krakenUserInfo)().then(function(t) {
                    return "staff" === t.type ? e : Promise.reject()
                })
            }
    }, function(e, t, n) {
        function i(e) {
            var t = r(e);
            if (null !== t) throw t;
            this._config = o(e), this._Promise = e.Promise, this._deviceID = e.deviceID, this._platform = e.platform, this._username = e.login || null, this._defaults = a(e.Promise, e.defaults, e.overrides || {}), this._assignments = s(e.Promise, this._config, this._defaults, e.overrides || {}, this._deviceID)
        }

        function r(e) {
            return e.defaults && Object.getPrototypeOf(e.defaults) === Object.prototype ? "string" != typeof e.deviceID || 0 === e.deviceID.length ? new Error("Invalid device ID; expected non-empty string, got `" + e.deviceID + "`") : "string" != typeof e.platform || 0 === e.platform.length ? new Error("Invalid platform; expected non-empty string, got `" + e.platform + "`") : "object" != typeof e.provider || "function" != typeof e.provider.getExperimentConfiguration ? new Error("Invalid provider") : "function" != typeof e.Promise ? new Error("Invalid Promise implementation") : null : new Error("Invalid defaults; expected object, got " + JSON.stringify(e.defaults))
        }

        function o(e) {
            return new e.Promise(function(t, n) {
                e.provider.getExperimentConfiguration(t, n)
            }).then(function(e) {
                var t = l.validate(e);
                if (t) throw t;
                return e
            })
        }

        function a(e, t, n) {
            var i = {};
            for (var r in t) i[r] = function(i) {
                return e.resolve(n[r]).then(function(e) {
                    return "string" == typeof e ? e : t[i]
                }, function() {
                    return t[i]
                })
            }(r);
            return i
        }

        function s(e, t, n, i, r) {
            var o = {};
            for (var a in n) n.hasOwnProperty(a) && (o[a] = function(o) {
                return t.then(function(e) {
                    if (!e.hasOwnProperty(o)) throw new Error("Experiment `" + o + "` is deprecated");
                    return l.selectTreatment(o, e[o], r)
                }, function(e) {
                    return n[o]
                }).then(function(t) {
                    return e.resolve(i[o]).then(function(e) {
                        return "string" == typeof e ? e : t
                    }, function() {
                        return t
                    })
                })
            }(a));
            return o
        }

        function u(e, t) {
            var n, i = {};
            for (n in e) e.hasOwnProperty(n) && (i[n] = e[n]);
            for (n in t) t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (i[n] = t[n]);
            return i
        }
        var l = n(150),
            c = n(153);
        e.exports = i, i.prototype.get = function(e, t) {
            var n = u(t || {}, {
                    mustTrack: !1
                }),
                i = this._assignments[e] || this._Promise.reject(new Error("No experiment with ID `" + e + "`")),
                r = this._Promise.all([this._config, i]).then(function(t) {
                    var n = t[0],
                        i = t[1],
                        r = {
                            client_time: (new Date).getTime() / 1e3,
                            device_id: this._deviceID,
                            experiment_id: n[e].name,
                            experiment_group: i,
                            platform: this._platform
                        };
                    null !== this._username && (r.login = this._username);
                    var o = new this._Promise(function(e, t) {
                        c.sendEvent("experiment_branch", r, e)
                    }).then(null, function() {
                        return null
                    });
                    return o
                }.bind(this));
            return this._Promise.all([i, n.mustTrack ? r : null]).then(function(e) {
                return e[0]
            }, function(t) {
                return console.warn(t), this._defaults[e] || null
            }.bind(this))
        }
    }, function(e, t, n) {
        function i(e, t, n) {
            this.name = "InvalidExperimentConfigurationError", this.message = 'Invalid configuration for experiment "' + e + '": ' + n, this.stack = (new Error).stack
        }

        function r(e, t) {
            if (!t.hasOwnProperty("groups")) return new i(e, t, "missing a `groups` property");
            if (0 === t.groups.length) return new i(e, t, "`groups` has no members");
            var n, r;
            for (n = 0; n < t.groups.length; n++)
                if (t.groups[n].hasOwnProperty("value") ? t.groups[n].hasOwnProperty("weight") ? t.groups[n].weight !== Math.floor(t.groups[n].weight) ? r = "has a non-integer weight" : t.groups[n].weight < 0 && (r = "has a negative weight") : r = "is missing a `weight` property" : r = "is missing a `value` property", r) return new i(e, t, "Group " + t.groups[n].value + " " + r);
            return null
        }
        var o = n(151);
        t.validate = function(e) {
            for (var t in e)
                if (e.hasOwnProperty(t)) {
                    var n = r(t, e[t]);
                    if (null !== n) return n
                }
            return null
        }, t.selectTreatment = function(e, t, n) {
            var i = e + n,
                r = o(i),
                a = r.words[0] >>> 0,
                s = a / Math.pow(2, 32),
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
        ! function(i, r) {
            e.exports = t = r(n(152))
        }(this, function(e) {
            return function() {
                var t = e,
                    n = t.lib,
                    i = n.WordArray,
                    r = n.Hasher,
                    o = t.algo,
                    a = [],
                    s = o.SHA1 = r.extend({
                        _doReset: function() {
                            this._hash = new i.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                        },
                        _doProcessBlock: function(e, t) {
                            for (var n = this._hash.words, i = n[0], r = n[1], o = n[2], s = n[3], u = n[4], l = 0; 80 > l; l++) {
                                if (16 > l) a[l] = 0 | e[t + l];
                                else {
                                    var c = a[l - 3] ^ a[l - 8] ^ a[l - 14] ^ a[l - 16];
                                    a[l] = c << 1 | c >>> 31
                                }
                                var d = (i << 5 | i >>> 27) + u + a[l];
                                d += 20 > l ? (r & o | ~r & s) + 1518500249 : 40 > l ? (r ^ o ^ s) + 1859775393 : 60 > l ? (r & o | r & s | o & s) - 1894007588 : (r ^ o ^ s) - 899497514, u = s, s = o, o = r << 30 | r >>> 2, r = i, i = d
                            }
                            n[0] = n[0] + i | 0, n[1] = n[1] + r | 0, n[2] = n[2] + o | 0, n[3] = n[3] + s | 0, n[4] = n[4] + u | 0
                        },
                        _doFinalize: function() {
                            var e = this._data,
                                t = e.words,
                                n = 8 * this._nDataBytes,
                                i = 8 * e.sigBytes;
                            return t[i >>> 5] |= 128 << 24 - i % 32, t[(i + 64 >>> 9 << 4) + 14] = Math.floor(n / 4294967296), t[(i + 64 >>> 9 << 4) + 15] = n, e.sigBytes = 4 * t.length, this._process(), this._hash
                        },
                        clone: function() {
                            var e = r.clone.call(this);
                            return e._hash = this._hash.clone(), e
                        }
                    });
                t.SHA1 = r._createHelper(s), t.HmacSHA1 = r._createHmacHelper(s)
            }(), e.SHA1
        })
    }, function(e, t, n) {
        ! function(n, i) {
            e.exports = t = i()
        }(this, function() {
            var e = e || function(e, t) {
                var n = {},
                    i = n.lib = {},
                    r = i.Base = function() {
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
                    o = i.WordArray = r.extend({
                        init: function(e, n) {
                            e = this.words = e || [], n != t ? this.sigBytes = n : this.sigBytes = 4 * e.length
                        },
                        toString: function(e) {
                            return (e || s).stringify(this)
                        },
                        concat: function(e) {
                            var t = this.words,
                                n = e.words,
                                i = this.sigBytes,
                                r = e.sigBytes;
                            if (this.clamp(), i % 4)
                                for (var o = 0; r > o; o++) {
                                    var a = n[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                                    t[i + o >>> 2] |= a << 24 - (i + o) % 4 * 8
                                } else
                                    for (var o = 0; r > o; o += 4) t[i + o >>> 2] = n[o >>> 2];
                            return this.sigBytes += r, this
                        },
                        clamp: function() {
                            var t = this.words,
                                n = this.sigBytes;
                            t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4)
                        },
                        clone: function() {
                            var e = r.clone.call(this);
                            return e.words = this.words.slice(0), e
                        },
                        random: function(t) {
                            for (var n, i = [], r = function(t) {
                                    var t = t,
                                        n = 987654321,
                                        i = 4294967295;
                                    return function() {
                                        n = 36969 * (65535 & n) + (n >> 16) & i, t = 18e3 * (65535 & t) + (t >> 16) & i;
                                        var r = (n << 16) + t & i;
                                        return r /= 4294967296, r += .5, r * (e.random() > .5 ? 1 : -1)
                                    }
                                }, a = 0; t > a; a += 4) {
                                var s = r(4294967296 * (n || e.random()));
                                n = 987654071 * s(), i.push(4294967296 * s() | 0)
                            }
                            return new o.init(i, t)
                        }
                    }),
                    a = n.enc = {},
                    s = a.Hex = {
                        stringify: function(e) {
                            for (var t = e.words, n = e.sigBytes, i = [], r = 0; n > r; r++) {
                                var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                                i.push((o >>> 4).toString(16)), i.push((15 & o).toString(16))
                            }
                            return i.join("")
                        },
                        parse: function(e) {
                            for (var t = e.length, n = [], i = 0; t > i; i += 2) n[i >>> 3] |= parseInt(e.substr(i, 2), 16) << 24 - i % 8 * 4;
                            return new o.init(n, t / 2)
                        }
                    },
                    u = a.Latin1 = {
                        stringify: function(e) {
                            for (var t = e.words, n = e.sigBytes, i = [], r = 0; n > r; r++) {
                                var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                                i.push(String.fromCharCode(o))
                            }
                            return i.join("")
                        },
                        parse: function(e) {
                            for (var t = e.length, n = [], i = 0; t > i; i++) n[i >>> 2] |= (255 & e.charCodeAt(i)) << 24 - i % 4 * 8;
                            return new o.init(n, t)
                        }
                    },
                    l = a.Utf8 = {
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
                    c = i.BufferedBlockAlgorithm = r.extend({
                        reset: function() {
                            this._data = new o.init, this._nDataBytes = 0
                        },
                        _append: function(e) {
                            "string" == typeof e && (e = l.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes
                        },
                        _process: function(t) {
                            var n = this._data,
                                i = n.words,
                                r = n.sigBytes,
                                a = this.blockSize,
                                s = 4 * a,
                                u = r / s;
                            u = t ? e.ceil(u) : e.max((0 | u) - this._minBufferSize, 0);
                            var l = u * a,
                                c = e.min(4 * l, r);
                            if (l) {
                                for (var d = 0; l > d; d += a) this._doProcessBlock(i, d);
                                var f = i.splice(0, l);
                                n.sigBytes -= c
                            }
                            return new o.init(f, c)
                        },
                        clone: function() {
                            var e = r.clone.call(this);
                            return e._data = this._data.clone(), e
                        },
                        _minBufferSize: 0
                    }),
                    d = (i.Hasher = c.extend({
                        cfg: r.extend(),
                        init: function(e) {
                            this.cfg = this.cfg.extend(e), this.reset()
                        },
                        reset: function() {
                            c.reset.call(this), this._doReset()
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
        var i = n(154),
            r = n(155),
            o = n(156);
        t.SPADE_URL = "//spade.twitch.tv/", t.sendEvent = function(e, n, a) {
            var s = {
                    event: e,
                    properties: n
                },
                u = i.stringify(r.parse(JSON.stringify(s)));
            o.fetch(t.SPADE_URL + "?data=" + encodeURIComponent(u), {}, a)
        }
    }, function(e, t, n) {
        ! function(i, r) {
            e.exports = t = r(n(152))
        }(this, function(e) {
            return function() {
                var t = e,
                    n = t.lib,
                    i = n.WordArray,
                    r = t.enc;
                r.Base64 = {
                    stringify: function(e) {
                        var t = e.words,
                            n = e.sigBytes,
                            i = this._map;
                        e.clamp();
                        for (var r = [], o = 0; n > o; o += 3)
                            for (var a = t[o >>> 2] >>> 24 - o % 4 * 8 & 255, s = t[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255, u = t[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, l = a << 16 | s << 8 | u, c = 0; 4 > c && n > o + .75 * c; c++) r.push(i.charAt(l >>> 6 * (3 - c) & 63));
                        var d = i.charAt(64);
                        if (d)
                            for (; r.length % 4;) r.push(d);
                        return r.join("")
                    },
                    parse: function(e) {
                        var t = e.length,
                            n = this._map,
                            r = n.charAt(64);
                        if (r) {
                            var o = e.indexOf(r); - 1 != o && (t = o)
                        }
                        for (var a = [], s = 0, u = 0; t > u; u++)
                            if (u % 4) {
                                var l = n.indexOf(e.charAt(u - 1)) << u % 4 * 2,
                                    c = n.indexOf(e.charAt(u)) >>> 6 - u % 4 * 2,
                                    d = l | c;
                                a[s >>> 2] |= d << 24 - s % 4 * 8, s++
                            }
                        return i.create(a, s)
                    },
                    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                }
            }(), e.enc.Base64
        })
    }, function(e, t, n) {
        ! function(i, r) {
            e.exports = t = r(n(152))
        }(this, function(e) {
            return e.enc.Utf8
        })
    }, function(e, t) {
        function n(e, t) {
            var n = document.head || document.getElementsByTagName("head")[0];
            n || t(new Error("No head element to append script"));
            var i = document.createElement("script");
            i.onload = function() {
                t(null), setTimeout(function() {
                    n.removeChild(i)
                }, 0)
            }, i.onerror = function() {
                t(new Error("Unable to load script"))
            }, n.appendChild(i), i.src = e
        }

        function i(e, t) {
            var n = new XMLHttpRequest;
            n.open("GET", e, !0), n.onreadystatechange = function() {
                switch (n.readyState) {
                    case r:
                        return void(200 <= n.status && n.status < 300 ? t(null, n.responseText) : t(new Error("XHR error: " + n.status + " " + e), null))
                }
            }, n.send()
        }
        var r = 4;
        t.fetch = function(e, t, r) {
            t.injectScript ? n(e, r || function() {}) : i(e, r || function() {})
        }
    }, function(e, t, n) {
        function i(e) {
            this._url = e
        }
        var r = n(156);
        e.exports = i, i.SERVICE_URL = "//minixperiment.twitch.tv/experiments.json", i.prototype.getExperimentConfiguration = function(e, t) {
            r.fetch(this._url, {}, function(n, i) {
                if (null !== n) return void t(n);
                try {
                    e(JSON.parse(i))
                } catch (r) {
                    t(new Error("Invalid JSON response from server: " + i))
                }
            })
        }
    }, function(e, t) {
        "use strict";

        function n(e, t, n) {
            var i = e.getState();
            return e.subscribe(function() {
                var r = !1,
                    o = e.getState(),
                    a = t.reduce(function(e, t) {
                        return o[t] !== i[t] && (e[t] = o[t], r = !0), e
                    }, {});
                r && n(a, i), i = o
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.subscribe = n
    }, function(e, t, n) {
        "use strict";

        function i() {
            var e = !Twitch.notScript,
                t = function() {
                    try {
                        return window.self !== window.top
                    } catch (e) {
                        return !0
                    }
                };
            return e ? o : t() && !(0, r.isTwitchEmbed)() ? a : s
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PLAYER_FRONTPAGE = t.PLAYER_POPOUT = t.PLAYER_EMBED = t.PLAYER_SITE = void 0, t.getPlayerType = i;
        var r = n(160),
            o = t.PLAYER_SITE = "site",
            a = t.PLAYER_EMBED = "embed",
            s = t.PLAYER_POPOUT = "popout";
        t.PLAYER_FRONTPAGE = "frontpage"
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function r() {
            var e;
            e = window.self !== window.parent ? document.referrer : window.location.href;
            var t = (0, o.parseUri)(e),
                n = t.host.split(".").slice(-2).join(".");
            return n === s.domain
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isTwitchEmbed = r;
        var o = n(93),
            a = n(59),
            s = i(a)
    }, function(e, t) {
        "use strict";

        function n() {
            return {
                type: o
            }
        }

        function i() {
            return {
                type: a
            }
        }

        function r(e) {
            return {
                type: s,
                clients: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.incrementQualityChangeCount = n, t.resetQualityChangeCount = i, t.setTrackingClients = r;
        var o = t.ACTION_INCREMENT_QUALITY_CHANGE_COUNT = "set quality change count",
            a = t.ACTION_RESET_QUALITY_CHANGE_COUNT = "reset quality change count",
            s = t.ACTION_SET_TRACKING_CLIENTS = "set new tracking clients"
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            var n = this,
                i = [],
                r = void 0,
                o = function() {
                    var i = new u.MixpanelClient({
                            host: f.mixpanelHost,
                            token: f.mixpanelToken
                        }),
                        o = new l.SpadeClient({
                            host: f.spadeHost
                        });
                    e.dispatch((0, c.setTrackingClients)([i, o]));
                    var s = y.getFlashPlayerVersion(),
                        g = s.major + "," + s.minor + "," + s.release,
                        _ = d(),
                        b = h(),
                        E = (0, p.parseUri)(b),
                        w = v.get(!1),
                        k = v.get(!0);
                    r = {
                        platform: f.trackingPlatform,
                        ui_version: f.version,
                        flash_version: g,
                        url: _.href,
                        host: _.host,
                        domain: a(_.host),
                        referrer_url: b,
                        referrer_host: E.host,
                        referrer_domain: a(E.host),
                        browser: navigator.appVersion || "",
                        device_id: w,
                        distinct_id: w,
                        session_device_id: k,
                        play_session_id: m.generate()
                    }, n.setProperties(t.tracking), n.setProperty("benchmark_session_id", t.benchmarkId || m.generate()), n.setProperty("mse_support", "undefined" != typeof MediaSource)
                },
                a = function(e) {
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
                var o = (new Date).getTime() / 1e3;
                Promise.all(i).then(function(i) {
                    var a = s["default"].apply(null, i),
                        u = n.map(function(e) {
                            var t = (0, s["default"])({}, e.properties, r, a);
                            return t.time || (t.time = o), {
                                event: e.event,
                                properties: t
                            }
                        });
                    t.debug && u.forEach(function(e) {
                        console.log("track event:", e.event, e.properties)
                    });
                    var l = e.getState().analytics.trackingClients;
                    l.forEach(function(e) {
                        e.trackEvents(u)
                    })
                })
            }, n.trackEvent = function(e, t) {
                n.trackEvents([{
                    event: e,
                    properties: t
                }])
            }, n.setProperty = function(e, t) {
                var i = {};
                i[e] = t, n.setProperties(i)
            }, n.setProperties = function(e) {
                var t = Promise.resolve(e);
                t = t.then(null, function(e) {
                    return console.warn("failed to resolve properties promise", e), {}
                }), i.push(t)
            }, o()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.AnalyticsTracker = o;
        var a = n(50),
            s = r(a),
            u = n(163),
            l = n(164),
            c = n(161),
            d = n(59),
            f = i(d),
            p = n(93),
            h = n(165),
            v = i(h),
            g = n(167),
            m = i(g),
            _ = n(168),
            y = i(_)
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e) {
            this._host = e.host, this._token = e.token
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.MixpanelClient = o;
        var a = n(50),
            s = r(a),
            u = n(35),
            l = r(u),
            c = n(59),
            d = i(c);
        o.prototype.trackEvent = function(e, t) {
            if (!(0, l["default"])(d.mixpanelIgnore, e)) {
                var n = (0, s["default"])({}, t, {
                        token: this._token
                    }),
                    i = btoa(JSON.stringify({
                        event: e,
                        properties: n
                    }));
                $.ajax({
                    url: this._host + "/track",
                    method: "GET",
                    cache: !1,
                    data: {
                        data: i,
                        ip: 1
                    }
                })
            }
        }, o.prototype.trackEvents = function(e) {
            e.forEach(function(e) {
                this.trackEvent(e.event, e.properties)
            }, this)
        }
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e) {
            this._host = e.host
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.SpadeClient = o;
        var a = n(35),
            s = r(a),
            u = n(59),
            l = i(u);
        o.prototype.trackEvent = function(e, t) {
            (0, s["default"])(l.spadeIgnore, e) || this._send({
                event: e,
                properties: t
            })
        }, o.prototype.trackEvents = function(e) {
            var t = e.filter(function(e) {
                return !(0, s["default"])(l.spadeIgnore, e.event)
            });
            t.length > 0 && this._send(t)
        }, o.prototype._send = function(e) {
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

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function r(e) {
            var t = e ? "session_unique_id" : "unique_id",
                n = a.get(t);
            if (n) return n;
            n = u.generate();
            var i = e ? "" : 3650;
            return a.set(t, n, {
                expires: i,
                domain: "." + c.domain,
                path: "/",
                secure: !1
            }), n
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.get = r;
        var o = n(166),
            a = i(o),
            s = n(167),
            u = i(s),
            l = n(59),
            c = i(l)
    }, function(e, t, n) {
        var i;
        ! function(r, o) {
            var a = function() {
                    return a.get.apply(a, arguments)
                },
                s = a.utils = {
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
            a.defaults = {}, a.expiresMultiplier = 86400, a.set = function(e, t, n) {
                if (s.isPlainObject(e))
                    for (var i in e) e.hasOwnProperty(i) && this.set(i, e[i], t);
                else {
                    n = s.isPlainObject(n) ? n : {
                        expires: n
                    };
                    var a = n.expires !== o ? n.expires : this.defaults.expires || "",
                        u = typeof a;
                    "string" === u && "" !== a ? a = new Date(a) : "number" === u && (a = new Date(+new Date + 1e3 * this.expiresMultiplier * a)), "" !== a && "toGMTString" in a && (a = ";expires=" + a.toGMTString());
                    var l = n.path || this.defaults.path;
                    l = l ? ";path=" + l : "";
                    var c = n.domain || this.defaults.domain;
                    c = c ? ";domain=" + c : "";
                    var d = n.secure || this.defaults.secure ? ";secure" : "";
                    n.secure === !1 && (d = ""), r.cookie = s.encode(e) + "=" + s.encode(t) + a + l + c + d
                }
                return this
            }, a.setDefault = function(e, t, n) {
                if (s.isPlainObject(e)) {
                    for (var i in e) this.get(i) === o && this.set(i, e[i], t);
                    return a
                }
                return this.get(e) === o ? this.set.apply(this, arguments) : void 0
            }, a.remove = function(e) {
                e = s.isArray(e) ? e : s.toArray(arguments);
                for (var t = 0, n = e.length; n > t; t++) this.set(e[t], "", -1);
                return this
            }, a.empty = function() {
                return this.remove(s.getKeys(this.all()))
            }, a.get = function(e, t) {
                var n = this.all();
                if (s.isArray(e)) {
                    for (var i = {}, r = 0, o = e.length; o > r; r++) {
                        var a = e[r];
                        i[a] = s.retrieve(n[a], t)
                    }
                    return i
                }
                return s.retrieve(n[e], t)
            }, a.all = function() {
                if ("" === r.cookie) return {};
                for (var e = r.cookie.split("; "), t = {}, n = 0, i = e.length; i > n; n++) {
                    var o = e[n].split("="),
                        a = s.decode(o.shift()),
                        u = s.decode(o.join("="));
                    t[a] = u
                }
                return t
            }, a.enabled = function() {
                if (navigator.cookieEnabled) return !0;
                var e = "_" === a.set("_", "_").get("_");
                return a.remove("_"), e
            }, i = function() {
                return a
            }.call(t, n, t, e), !(i !== o && (e.exports = i))
        }("undefined" == typeof document ? null : document)
    }, function(e, t) {
        "use strict";

        function n() {
            for (var e = arguments.length <= 0 || void 0 === arguments[0] ? 32 : arguments[0], t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = "", i = 0; e > i; i++) {
                var r = Math.floor(Math.random() * t.length);
                n += t.charAt(r)
            }
            return n
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.generate = n
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r() {
            return d["default"].getFlashPlayerVersion()
        }

        function o(e) {
            return d["default"].hasFlashPlayerVersion(e)
        }

        function a() {
            return o("1")
        }

        function s() {
            var e = "application/x-shockwave-flash",
                t = navigator.mimeTypes;
            if (t && t[e] && t[e].enabledPlugin) {
                var n = t[e].enabledPlugin.filename;
                return n.match(/pepflashplayer|Pepper/gi) ? "ppapi" : "npapi"
            }
            return a() ? "unknown" : ""
        }

        function u(e, t, n, i, r, o, a, s, u, l) {
            return d["default"].embedSWF(e, t, n, i, r, o, a, s, u, l)
        }

        function l(e) {
            return d["default"].removeSWF(e)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getFlashPlayerVersion = r, t.hasFlashPlayerVersion = o, t.hasFlashPlayer = a, t.getFlashPlayerType = s, t.embedSWF = u, t.removeSWF = l;
        var c = n(169),
            d = i(c)
    }, function(e, t) {
        /*!    SWFObject v2.3.20130521 <http://github.com/swfobject/swfobject>
        	    is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
        	*/
        var n = function() {
            function e() {
                if (!z && document.getElementsByTagName("body")[0]) {
                    try {
                        var e, t = _("span");
                        t.style.display = "none", e = U.getElementsByTagName("body")[0].appendChild(t), e.parentNode.removeChild(e), e = null, t = null
                    } catch (n) {
                        return
                    }
                    z = !0;
                    for (var i = $.length, r = 0; i > r; r++) $[r]()
                }
            }

            function t(e) {
                z ? e() : $[$.length] = e
            }

            function i(e) {
                if (typeof V.addEventListener != L) V.addEventListener("load", e, !1);
                else if (typeof U.addEventListener != L) U.addEventListener("load", e, !1);
                else if (typeof V.attachEvent != L) b(V, "onload", e);
                else if ("function" == typeof V.onload) {
                    var t = V.onload;
                    V.onload = function() {
                        t(), e()
                    }
                } else V.onload = e
            }

            function r() {
                var e = U.getElementsByTagName("body")[0],
                    t = _(M);
                t.setAttribute("style", "visibility: hidden;"), t.setAttribute("type", x);
                var n = e.appendChild(t);
                if (n) {
                    var i = 0;
                    ! function r() {
                        if (typeof n.GetVariable != L) try {
                            var a = n.GetVariable("$version");
                            a && (a = a.split(" ")[1].split(","), K.pv = [y(a[0]), y(a[1]), y(a[2])])
                        } catch (s) {
                            K.pv = [8, 0, 0]
                        } else if (10 > i) return i++, void setTimeout(r, 10);
                        e.removeChild(t), n = null, o()
                    }()
                } else o()
            }

            function o() {
                var e = q.length;
                if (e > 0)
                    for (var t = 0; e > t; t++) {
                        var n = q[t].id,
                            i = q[t].callbackFn,
                            r = {
                                success: !1,
                                id: n
                            };
                        if (K.pv[0] > 0) {
                            var o = m(n);
                            if (o)
                                if (!E(q[t].swfVersion) || K.wk && K.wk < 312)
                                    if (q[t].expressInstall && s()) {
                                        var c = {};
                                        c.data = q[t].expressInstall, c.width = o.getAttribute("width") || "0", c.height = o.getAttribute("height") || "0", o.getAttribute("class") && (c.styleclass = o.getAttribute("class")), o.getAttribute("align") && (c.align = o.getAttribute("align"));
                                        for (var d = {}, f = o.getElementsByTagName("param"), p = f.length, h = 0; p > h; h++) "movie" != f[h].getAttribute("name").toLowerCase() && (d[f[h].getAttribute("name")] = f[h].getAttribute("value"));
                                        u(c, d, n, i)
                                    } else l(o), i && i(r);
                            else k(n, !0), i && (r.success = !0, r.ref = a(n), r.id = n, i(r))
                        } else if (k(n, !0), i) {
                            var v = a(n);
                            v && typeof v.SetVariable != L && (r.success = !0, r.ref = v, r.id = v.id), i(r)
                        }
                    }
            }

            function a(e) {
                var t = null,
                    n = m(e);
                return n && "OBJECT" === n.nodeName.toUpperCase() && (t = typeof n.SetVariable !== L ? n : n.getElementsByTagName(M)[0] || n), t
            }

            function s() {
                return !W && E("6.0.65") && (K.win || K.mac) && !(K.wk && K.wk < 312)
            }

            function u(e, t, n, i) {
                var r = m(n);
                if (n = g(n), W = !0, O = i || null, A = {
                        success: !1,
                        id: n
                    }, r) {
                    "OBJECT" == r.nodeName.toUpperCase() ? (S = c(r), C = null) : (S = r, C = n), e.id = R, (typeof e.width == L || !/%$/.test(e.width) && y(e.width) < 310) && (e.width = "310"), (typeof e.height == L || !/%$/.test(e.height) && y(e.height) < 137) && (e.height = "137");
                    var o = K.ie ? "ActiveX" : "PlugIn",
                        a = "MMredirectURL=" + encodeURIComponent(V.location.toString().replace(/&/g, "%26")) + "&MMplayerType=" + o + "&MMdoctitle=" + encodeURIComponent(U.title.slice(0, 47) + " - Flash Player Installation");
                    if (typeof t.flashvars != L ? t.flashvars += "&" + a : t.flashvars = a, K.ie && 4 != r.readyState) {
                        var s = _("div");
                        n += "SWFObjectNew", s.setAttribute("id", n), r.parentNode.insertBefore(s, r), r.style.display = "none", h(r)
                    }
                    f(e, t, n)
                }
            }

            function l(e) {
                if (K.ie && 4 != e.readyState) {
                    e.style.display = "none";
                    var t = _("div");
                    e.parentNode.insertBefore(t, e), t.parentNode.replaceChild(c(e), t), h(e)
                } else e.parentNode.replaceChild(c(e), e)
            }

            function c(e) {
                var t = _("div");
                if (K.win && K.ie) t.innerHTML = e.innerHTML;
                else {
                    var n = e.getElementsByTagName(M)[0];
                    if (n) {
                        var i = n.childNodes;
                        if (i)
                            for (var r = i.length, o = 0; r > o; o++) 1 == i[o].nodeType && "PARAM" == i[o].nodeName || 8 == i[o].nodeType || t.appendChild(i[o].cloneNode(!0))
                    }
                }
                return t
            }

            function d(e, t) {
                var n = _("div");
                return n.innerHTML = "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'><param name='movie' value='" + e + "'>" + t + "</object>", n.firstChild
            }

            function f(e, t, n) {
                var i, r = m(n);
                if (n = g(n), K.wk && K.wk < 312) return i;
                if (r) {
                    var o, a, s, u = _(K.ie ? "div" : M);
                    typeof e.id == L && (e.id = n);
                    for (s in t) t.hasOwnProperty(s) && "movie" !== s.toLowerCase() && p(u, s, t[s]);
                    K.ie && (u = d(e.data, u.innerHTML));
                    for (o in e) e.hasOwnProperty(o) && (a = o.toLowerCase(), "styleclass" === a ? u.setAttribute("class", e[o]) : "classid" !== a && "data" !== a && u.setAttribute(o, e[o]));
                    K.ie ? F[F.length] = e.id : (u.setAttribute("type", x), u.setAttribute("data", e.data)), r.parentNode.replaceChild(u, r), i = u
                }
                return i
            }

            function p(e, t, n) {
                var i = _("param");
                i.setAttribute("name", t), i.setAttribute("value", n), e.appendChild(i)
            }

            function h(e) {
                var t = m(e);
                t && "OBJECT" == t.nodeName.toUpperCase() && (K.ie ? (t.style.display = "none", function n() {
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

            function m(e) {
                if (v(e)) return e;
                var t = null;
                try {
                    t = U.getElementById(e)
                } catch (n) {}
                return t
            }

            function _(e) {
                return U.createElement(e)
            }

            function y(e) {
                return parseInt(e, 10)
            }

            function b(e, t, n) {
                e.attachEvent(t, n), G[G.length] = [e, t, n]
            }

            function E(e) {
                e += "";
                var t = K.pv,
                    n = e.split(".");
                return n[0] = y(n[0]), n[1] = y(n[1]) || 0, n[2] = y(n[2]) || 0, t[0] > n[0] || t[0] == n[0] && t[1] > n[1] || t[0] == n[0] && t[1] == n[1] && t[2] >= n[2] ? !0 : !1
            }

            function w(e, t, n, i) {
                var r = U.getElementsByTagName("head")[0];
                if (r) {
                    var o = "string" == typeof n ? n : "screen";
                    if (i && (P = null, j = null), !P || j != o) {
                        var a = _("style");
                        a.setAttribute("type", "text/css"), a.setAttribute("media", o), P = r.appendChild(a), K.ie && typeof U.styleSheets != L && U.styleSheets.length > 0 && (P = U.styleSheets[U.styleSheets.length - 1]), j = o
                    }
                    P && (typeof P.addRule != L ? P.addRule(e, t) : typeof U.createTextNode != L && P.appendChild(U.createTextNode(e + " {" + t + "}")))
                }
            }

            function k(e, t) {
                if (Q) {
                    var n = t ? "visible" : "hidden",
                        i = m(e);
                    z && i ? i.style.visibility = n : "string" == typeof e && w("#" + e, "visibility:" + n)
                }
            }

            function T(e) {
                var t = /[\\\"<>\.;]/,
                    n = null != t.exec(e);
                return n && typeof encodeURIComponent != L ? encodeURIComponent(e) : e
            }
            var S, C, O, A, P, j, L = "undefined",
                M = "object",
                I = "Shockwave Flash",
                N = "ShockwaveFlash.ShockwaveFlash",
                x = "application/x-shockwave-flash",
                R = "SWFObjectExprInst",
                D = "onreadystatechange",
                V = window,
                U = document,
                B = navigator,
                H = !1,
                $ = [],
                q = [],
                F = [],
                G = [],
                z = !1,
                W = !1,
                Q = !0,
                Y = !1,
                K = function() {
                    var e = typeof U.getElementById != L && typeof U.getElementsByTagName != L && typeof U.createElement != L,
                        t = B.userAgent.toLowerCase(),
                        n = B.platform.toLowerCase(),
                        i = n ? /win/.test(n) : /win/.test(t),
                        r = n ? /mac/.test(n) : /mac/.test(t),
                        o = /webkit/.test(t) ? parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
                        a = "Microsoft Internet Explorer" === B.appName,
                        s = [0, 0, 0],
                        u = null;
                    if (typeof B.plugins != L && typeof B.plugins[I] == M) u = B.plugins[I].description, u && typeof B.mimeTypes != L && B.mimeTypes[x] && B.mimeTypes[x].enabledPlugin && (H = !0, a = !1, u = u.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), s[0] = y(u.replace(/^(.*)\..*$/, "$1")), s[1] = y(u.replace(/^.*\.(.*)\s.*$/, "$1")), s[2] = /[a-zA-Z]/.test(u) ? y(u.replace(/^.*[a-zA-Z]+(.*)$/, "$1")) : 0);
                    else if (typeof V.ActiveXObject != L) try {
                        var l = new ActiveXObject(N);
                        l && (u = l.GetVariable("$version"), u && (a = !0, u = u.split(" ")[1].split(","), s = [y(u[0]), y(u[1]), y(u[2])]))
                    } catch (c) {}
                    return {
                        w3: e,
                        pv: s,
                        wk: o,
                        ie: a,
                        win: i,
                        mac: r
                    }
                }();
            (function() {
                K.w3 && ((typeof U.readyState != L && ("complete" === U.readyState || "interactive" === U.readyState) || typeof U.readyState == L && (U.getElementsByTagName("body")[0] || U.body)) && e(), z || (typeof U.addEventListener != L && U.addEventListener("DOMContentLoaded", e, !1), K.ie && (U.attachEvent(D, function t() {
                    "complete" == U.readyState && (U.detachEvent(D, t), e())
                }), V == top && ! function n() {
                    if (!z) {
                        try {
                            U.documentElement.doScroll("left")
                        } catch (t) {
                            return void setTimeout(n, 0)
                        }
                        e()
                    }
                }()), K.wk && ! function i() {
                    return z ? void 0 : /loaded|complete/.test(U.readyState) ? void e() : void setTimeout(i, 0)
                }()))
            })();
            $[0] = function() {
                H ? r() : o()
            };
            (function() {
                K.ie && window.attachEvent("onunload", function() {
                    for (var e = G.length, t = 0; e > t; t++) G[t][0].detachEvent(G[t][1], G[t][2]);
                    for (var i = F.length, r = 0; i > r; r++) h(F[r]);
                    for (var o in K) K[o] = null;
                    K = null;
                    for (var a in n) n[a] = null;
                    n = null
                })
            })();
            return {
                registerObject: function(e, t, n, i) {
                    if (K.w3 && e && t) {
                        var r = {};
                        r.id = e, r.swfVersion = t, r.expressInstall = n, r.callbackFn = i, q[q.length] = r, k(e, !1)
                    } else i && i({
                        success: !1,
                        id: e
                    })
                },
                getObjectById: function(e) {
                    return K.w3 ? a(e) : void 0
                },
                embedSWF: function(e, n, i, r, o, a, l, c, d, p) {
                    var h = g(n),
                        v = {
                            success: !1,
                            id: h
                        };
                    K.w3 && !(K.wk && K.wk < 312) && e && n && i && r && o ? (k(h, !1), t(function() {
                        i += "", r += "";
                        var t = {};
                        if (d && typeof d === M)
                            for (var g in d) t[g] = d[g];
                        t.data = e, t.width = i, t.height = r;
                        var m = {};
                        if (c && typeof c === M)
                            for (var _ in c) m[_] = c[_];
                        if (l && typeof l === M)
                            for (var y in l)
                                if (l.hasOwnProperty(y)) {
                                    var b = Y ? encodeURIComponent(y) : y,
                                        w = Y ? encodeURIComponent(l[y]) : l[y];
                                    typeof m.flashvars != L ? m.flashvars += "&" + b + "=" + w : m.flashvars = b + "=" + w
                                }
                        if (E(o)) {
                            var T = f(t, m, n);
                            t.id == h && k(h, !0), v.success = !0, v.ref = T, v.id = T.id
                        } else {
                            if (a && s()) return t.data = a, void u(t, m, n, p);
                            k(h, !0)
                        }
                        p && p(v)
                    })) : p && p(v)
                },
                switchOffAutoHideShow: function() {
                    Q = !1
                },
                enableUriEncoding: function(e) {
                    Y = typeof e === L ? !0 : e
                },
                ua: K,
                getFlashPlayerVersion: function() {
                    return {
                        major: K.pv[0],
                        minor: K.pv[1],
                        release: K.pv[2]
                    }
                },
                hasFlashPlayerVersion: E,
                createSWF: function(e, t, n) {
                    return K.w3 ? f(e, t, n) : void 0
                },
                showExpressInstall: function(e, t, n, i) {
                    K.w3 && s() && u(e, t, n, i)
                },
                removeSWF: function(e) {
                    K.w3 && h(e)
                },
                createCSS: function(e, t, n, i) {
                    K.w3 && w(e, t, n, i)
                },
                addDomLoadEvent: t,
                addLoadEvent: i,
                getQueryParamValue: function(e) {
                    var t = U.location.search || U.location.hash;
                    if (t) {
                        if (/\?/.test(t) && (t = t.split("?")[1]), null == e) return T(t);
                        for (var n = t.split("&"), i = 0; i < n.length; i++)
                            if (n[i].substring(0, n[i].indexOf("=")) == e) return T(n[i].substring(n[i].indexOf("=") + 1))
                    }
                    return ""
                },
                expressInstallCallback: function() {
                    if (W) {
                        var e = m(R);
                        e && S && (e.parentNode.replaceChild(S, e), C && (k(C, !0), K.ie && (S.style.display = "block")), O && O(A)), W = !1
                    }
                },
                version: "2.3"
            }
        }();
        e.exports = n
    }, function(e, t) {
        "use strict";

        function n() {
            window.sp_cid = i;
            var e = {
                    detect: {}
                },
                t = void 0,
                n = void 0,
                o = new Promise(function(e, i) {
                    Promise.resolve($.getScript(r)).then(null, i), t = function() {
                        return e(!0)
                    }, n = function() {
                        return e(!1)
                    }, document.addEventListener("sp.blocking", t), document.addEventListener("sp.not_blocking", n)
                });
            return o.then(function(i) {
                e.detect._result = i, document.removeEventListener("sp.blocking", t), document.removeEventListener("sp.not_blocking", n)
            }), window.Twitch.sentinel = e, o
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getSentinel = n;
        var i = "qFEaZsFQnwEdUIs",
            r = "//d2lv4zbk7v5f93.cloudfront.net/esf.js"
    }, function(e, t) {
        "use strict";

        function n(e) {
            for (var t = {}, n = e.split("&"), i = 0; i < n.length; i++) {
                var r = /^(.+?)(?:=(.+))?$/.exec(n[i]);
                if (r) {
                    var o = r[1],
                        a = r[2];
                    "true" === a ? a = !0 : "false" === a ? a = !1 : void 0 !== a ? a = decodeURIComponent(a) : "!" === o[0] ? (o = o.substring(1), a = !1) : a = !0, t[o] = a
                }
            }
            return t
        }

        function i(e) {
            var t = [];
            for (var n in e)
                if (e.hasOwnProperty(n)) {
                    var i = e[n];
                    n = encodeURIComponent(n), i === !0 ? t.push(n) : i === !1 ? t.push("!" + n) : (i = encodeURIComponent(i), t.push(n + "=" + i))
                }
            return t.join("&")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.parse = n, t.toString = i
    }, function(e, t, n) {
        var i, r, o;
        (function(n) {
            "use strict";
            ! function(n, a) {
                r = [], i = a, o = "function" == typeof i ? i.apply(t, r) : i, !(void 0 !== o && (e.exports = o))
            }(this, function() {
                function e() {
                    try {
                        return a in r && r[a]
                    } catch (e) {
                        return !1
                    }
                }
                var t, i = {},
                    r = "undefined" != typeof window ? window : n,
                    o = r.document,
                    a = "localStorage",
                    s = "script";
                if (i.disabled = !1, i.version = "1.3.20", i.set = function(e, t) {}, i.get = function(e, t) {}, i.has = function(e) {
                        return void 0 !== i.get(e)
                    }, i.remove = function(e) {}, i.clear = function() {}, i.transact = function(e, t, n) {
                        null == n && (n = t, t = null), null == t && (t = {});
                        var r = i.get(e, t);
                        n(r), i.set(e, r)
                    }, i.getAll = function() {}, i.forEach = function() {}, i.serialize = function(e) {
                        return JSON.stringify(e)
                    }, i.deserialize = function(e) {
                        if ("string" == typeof e) try {
                            return JSON.parse(e)
                        } catch (t) {
                            return e || void 0
                        }
                    }, e()) t = r[a], i.set = function(e, n) {
                    return void 0 === n ? i.remove(e) : (t.setItem(e, i.serialize(n)), n)
                }, i.get = function(e, n) {
                    var r = i.deserialize(t.getItem(e));
                    return void 0 === r ? n : r
                }, i.remove = function(e) {
                    t.removeItem(e)
                }, i.clear = function() {
                    t.clear()
                }, i.getAll = function() {
                    var e = {};
                    return i.forEach(function(t, n) {
                        e[t] = n
                    }), e
                }, i.forEach = function(e) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t.key(n);
                        e(r, i.get(r))
                    }
                };
                else if (o && o.documentElement.addBehavior) {
                    var u, l;
                    try {
                        l = new ActiveXObject("htmlfile"), l.open(), l.write("<" + s + ">document.w=window</" + s + '><iframe src="/favicon.ico"></iframe>'), l.close(), u = l.w.frames[0].document, t = u.createElement("div")
                    } catch (c) {
                        t = o.createElement("div"), u = o.body
                    }
                    var d = function(e) {
                            return function() {
                                var n = Array.prototype.slice.call(arguments, 0);
                                n.unshift(t), u.appendChild(t), t.addBehavior("#default#userData"), t.load(a);
                                var r = e.apply(i, n);
                                return u.removeChild(t), r
                            }
                        },
                        f = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g"),
                        p = function(e) {
                            return e.replace(/^d/, "___$&").replace(f, "___")
                        };
                    i.set = d(function(e, t, n) {
                        return t = p(t), void 0 === n ? i.remove(t) : (e.setAttribute(t, i.serialize(n)), e.save(a), n)
                    }), i.get = d(function(e, t, n) {
                        t = p(t);
                        var r = i.deserialize(e.getAttribute(t));
                        return void 0 === r ? n : r
                    }), i.remove = d(function(e, t) {
                        t = p(t), e.removeAttribute(t), e.save(a)
                    }), i.clear = d(function(e) {
                        var t = e.XMLDocument.documentElement.attributes;
                        e.load(a);
                        for (var n = t.length - 1; n >= 0; n--) e.removeAttribute(t[n].name);
                        e.save(a)
                    }), i.getAll = function(e) {
                        var t = {};
                        return i.forEach(function(e, n) {
                            t[e] = n
                        }), t
                    }, i.forEach = d(function(e, t) {
                        for (var n, r = e.XMLDocument.documentElement.attributes, o = 0; n = r[o]; ++o) t(n.name, i.deserialize(e.getAttribute(n.name)))
                    })
                }
                try {
                    var h = "__storejs__";
                    i.set(h, h), i.get(h) != h && (i.disabled = !0), i.remove(h)
                } catch (c) {
                    i.disabled = !0
                }
                return i.enabled = !i.disabled, i
            })
        }).call(t, function() {
            return this
        }())
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.State = t.EVENT_AD_END = t.EVENT_AD_START = t.KEY_CAPTIONS_MODAL_SEEN = t.CHROMECAST_CONNECTED = t.CHROMECAST_CONNECTING = t.CHROMECAST_AVAILABLE = t.CHROMECAST_UNAVAILABLE = t.PLAYBACK_ENDED = t.PLAYBACK_PLAYING = t.PLAYBACK_PAUSED = t.EVENT_PLAYER_UPDATE = t.EVENT_STATE_UPDATE = void 0;
        var a = function() {
                function e(e, t) {
                    var n = [],
                        i = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
                    } catch (u) {
                        r = !0, o = u
                    } finally {
                        try {
                            !i && s["return"] && s["return"]()
                        } finally {
                            if (r) throw o
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
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            u = n(35),
            l = r(u),
            c = n(54),
            d = r(c),
            f = n(174),
            p = n(148),
            h = n(59),
            v = i(h),
            g = n(182),
            m = n(94),
            _ = i(m),
            y = n(172),
            b = i(y),
            E = n(187),
            w = r(E),
            k = n(188),
            T = n(208),
            S = n(184),
            C = i(S),
            O = n(58),
            A = i(O),
            P = n(186),
            j = i(P),
            L = n(202),
            M = n(203),
            I = t.EVENT_STATE_UPDATE = "stateupdate",
            N = t.EVENT_PLAYER_UPDATE = "player",
            x = t.PLAYBACK_PAUSED = "paused",
            R = t.PLAYBACK_PLAYING = "playing",
            D = t.PLAYBACK_ENDED = "ended",
            V = t.CHROMECAST_UNAVAILABLE = "unavailable",
            U = t.CHROMECAST_AVAILABLE = "available",
            B = (t.CHROMECAST_CONNECTING = "connecting", t.CHROMECAST_CONNECTED = "connected"),
            H = "mature",
            $ = "leaveData",
            q = t.KEY_CAPTIONS_MODAL_SEEN = "captionsModalSeen",
            F = [I, N],
            G = t.EVENT_AD_START = "adstart",
            z = t.EVENT_AD_END = "adend",
            W = "markerschange",
            Q = "mutedsegmentschange",
            Y = "previewschange";
        t.State = function() {
            function e(t, n, i, r, a, s) {
                o(this, e), this._options = s, this._backend = t, this._stateStore = r, this._pubSub = n, this._timelineMetadata = new f.TimelineMetadata(a), this._fullscreen = i, this._eventEmitter = new d["default"], this._adrunning = !1, this._theatreModeEnabled = !1, this._isVODRestricted = !1, this._hasCurrentStreamPlayed = !1, this._viewers = 0, this._markers = [], this._mutedSegments = [], this._previews = f.NULL_PREVIEW, v.allEvents.forEach(function(e) {
                    t.addEventListener(e, this.handleEvent.bind(this, e))
                }, this), i.addEventListener(T.FULLSCREEN_CHANGE, this.handleEvent.bind(this, T.FULLSCREEN_CHANGE)), n.addEventListener(k.EVENT_ONLINE, this.handleEvent.bind(this, k.EVENT_ONLINE)), n.addEventListener(k.EVENT_OFFLINE, this.handleEvent.bind(this, k.EVENT_OFFLINE))
            }
            return s(e, [{
                key: "_onViewersChange",
                value: function(e) {
                    this._viewers = e.viewers, this._backend.onViewersChange && this._backend.onViewersChange(e), this._eventEmitter.emit(I, this)
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
                    return b.get(H, !1)
                }
            }, {
                key: "setIsMature",
                value: function(e) {
                    b.set(H, e)
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
                    w["default"].setItem($, e)
                }
            }, {
                key: "setTheatreEnabled",
                value: function(e) {
                    this._theatreModeEnabled = e, this._eventEmitter.emit(I, this)
                }
            }, {
                key: "isVODRestricted",
                value: function() {
                    return this._isVODRestricted
                }
            }, {
                key: "getChannelInfo",
                value: function(e) {
                    return _.channelInfo(e)
                }
            }, {
                key: "getStreamInfo",
                value: function(e) {
                    return _.streamInfo(e)
                }
            }, {
                key: "getVideoInfo",
                value: function(e) {
                    return _.videoInfo(e)
                }
            }, {
                key: "getChannelViewerInfo",
                value: function(e) {
                    return _.channelViewerInfo(e)
                }
            }, {
                key: "getOfflinePlaylistInfo",
                value: function(e) {
                    return this.getChannelInfo(e).then(function(e) {
                        return _.offlinePlaylistInfo(e._id)
                    })
                }
            }, {
                key: "getSeenCaptionsModal",
                value: function() {
                    return b.get(q, !1)
                }
            }, {
                key: "setSeenCaptionsModal",
                value: function() {
                    b.set(q, !0)
                }
            }, {
                key: "handleEvent",
                value: function(e, t) {
                    var n = this;
                    switch (this._logStateChange(e), e) {
                        case G:
                            this._adrunning = !0;
                            break;
                        case z:
                            this._adrunning = !1;
                            break;
                        case A.SEGMENT_CHANGE:
                            this._currentSegment = t.name;
                            break;
                        case A.LOADED_VIDEO:
                            this._timelineMetadata.getMutedSegments(this.videoID).then(function(e) {
                                return n._updateMutedSegments(e)
                            });
                            break;
                        case C.LOADED_METADATA:
                            this._updateIsVODRestricted(), this._stateStore.getState().stream instanceof M.LiveContentStream && this._stateStore.dispatch((0, L.setOnline)(!0));
                            break;
                        case C.LOADSTART:
                            this._hasCurrentStreamPlayed = !1, this._resetTimelineMetadata(), this._updateIsVODRestricted();
                            break;
                        case C.PLAYING:
                            !this._hasCurrentStreamPlayed && this.videoID && this._retrieveTimelineMetadata(), this._hasCurrentStreamPlayed = !0;
                            break;
                        case A.USHER_FAIL_ERROR:
                            this._updateIsVODRestricted()
                    }
                    this._eventEmitter.emit(N, e), this._eventEmitter.emit(I, this)
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
                    _.videoInfo(this.videoID).then(function(t) {
                        return e._timelineMetadata.getPreviews(t)
                    }).then(function(t) {
                        return e._updatePreviews(t)
                    }), n.get(p.MARKERS).then(function(t) {
                        "no" !== t && _.videoInfo(e.videoID).then(function(t) {
                            return e._timelineMetadata.getMarkers(t)
                        }).then(function(t) {
                            return e._updateMarkers(t)
                        })
                    })
                }
            }, {
                key: "addEventListener",
                value: function(e, t) {
                    (0, l["default"])(F, e) && this._eventEmitter.addListener(e, t)
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
                        duration: this.duration,
                        muted: this.muted,
                        online: this.online,
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
                    this._options.debug && !(0, l["default"])(v.debugIgnoreEvents, e) && null !== e && (console.groupCollapsed("state change: %s", e), console.log("partial state: %o", this.toJSON()), console.groupEnd())
                }
            }, {
                key: "_updateMarkers",
                value: function(e) {
                    this._markers = e, this._logStateChange(W), this._eventEmitter.emit(I, this)
                }
            }, {
                key: "_updateMutedSegments",
                value: function(e) {
                    this._mutedSegments = e, this._logStateChange(Q), this._eventEmitter.emit(I, this)
                }
            }, {
                key: "_updatePreviews",
                value: function(e) {
                    this._previews = e, this._logStateChange(Y), this._eventEmitter.emit(I, this)
                }
            }, {
                key: "_updateIsVODRestricted",
                value: function() {
                    var e = this;
                    if (this._isVODRestricted = !1, this._eventEmitter.emit(I, this), null !== this.videoID && null === this.channelName) {
                        var t = _.videoInfo(this.videoID),
                            n = t.then(function(e) {
                                return _.channelViewerInfo(e.channel.name)
                            });
                        Promise.all([t, n]).then(function(t) {
                            var n = a(t, 2),
                                i = n[0],
                                r = n[1];
                            e._isVODRestricted = _.isVODRestricted(r, i), e._eventEmitter.emit(I, e)
                        })
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    var e = this;
                    F.map(function(t) {
                        e._eventEmitter.removeEvent(t)
                    })
                }
            }, {
                key: "isAdRunning",
                get: function() {
                    return this._adrunning
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
                    if (g.BackendChromecast.getReadyState() !== g.BackendChromecast.HAVE_NOTHING) return B;
                    switch (g.BackendChromecast.getNetworkState()) {
                        case g.BackendChromecast.NETWORK_EMPTY:
                            return V;
                        case g.BackendChromecast.NETWORK_IDLE:
                            return U;
                        default:
                            return B
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
                key: "duration",
                get: function() {
                    return this._backend.getDuration()
                }
            }, {
                key: "error",
                get: function() {
                    return this._backend.error
                }
            }, {
                key: "isLoading",
                get: function() {
                    return this.playback === R && this._backend.getReadyState() <= j.HAVE_CURRENT_DATA
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
                    return this._backend.getPaused() ? x : this._backend.getEnded() ? D : R
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
                    return w["default"].getItem($)
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

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t, n) {
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
        var a, s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            u = n(175),
            l = i(u),
            c = n(179),
            d = i(c),
            f = n(38),
            p = i(f),
            h = n(93),
            v = n(181),
            g = n(94),
            m = t.NULL_PREVIEW = {
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
            _ = t.NULL_MARKER_THUMBNAIL = {
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
            C = "hearthStoneMatchTags",
            O = "ungroupedTags",
            A = (a = {}, o(a, T, function(e, t, n) {
                var i = {
                    title: "Match " + (t + 1),
                    info: "",
                    startTime: e.start_sec,
                    thumbnail: j(e, t, n)
                };
                return i
            }), o(a, C, function(e, t, n) {
                var i = {
                    title: "Match " + (t + 1),
                    info: "<strong>" + e.game_data.characters[0] + "</strong> vs " + e.game_data.characters[1],
                    startTime: e.start_sec,
                    thumbnail: j(e, t, n)
                };
                return i
            }), a),
            P = function() {
                return null
            },
            j = function(e, t, n) {
                return null === e.thumbnail_index ? _ : {
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
                r(this, e), this._analytics = t, this._options = n
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
                        return m
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
                    if (null === e) return m;
                    var n = (0, h.parseUri)(t),
                        i = n.protocol + "://" + n.host + n.directory,
                        r = e.map(function(e) {
                            return e.quality
                        }),
                        o = r.indexOf(y),
                        a = r.indexOf(b);
                    return {
                        count: e[o].count,
                        lq: {
                            width: e[o].width,
                            height: e[o].height,
                            rows: e[o].rows,
                            cols: e[o].cols,
                            URLs: e[o].images.map(function(e) {
                                return "" + i + e
                            })
                        },
                        hq: {
                            width: e[a].width,
                            height: e[a].height,
                            rows: e[a].rows,
                            cols: e[a].cols,
                            URLs: e[a].images.map(function(e) {
                                return "" + i + e
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
                    var t = (0, l["default"])(e.data.tags, function(e) {
                        switch (e.game_type) {
                            case w:
                                return T;
                            case k:
                                switch (e.game_data.type) {
                                    case 0:
                                        return C;
                                    case 1:
                                        return S
                                }
                        }
                        return O
                    });
                    return Array.prototype.concat.apply([], (0, p["default"])((0, d["default"])(t, function(t, n) {
                        return t.map(function(t, i) {
                            var r = A[n] || P;
                            return r(t, i, e.data)
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
                            i = n.offset + n.duration,
                            r = t.offset + t.duration;
                        return i < t.offset ? e.push(t) : r > i && (n.duration = r - n.offset), e
                    }, [e[0]])
                }
            }]), e
        }()
    }, function(e, t, n) {
        var i = n(176),
            r = Object.prototype,
            o = r.hasOwnProperty,
            a = i(function(e, t, n) {
                o.call(e, n) ? e[n].push(t) : e[n] = [t]
            });
        e.exports = a
    }, function(e, t, n) {
        function i(e, t) {
            return function(n, i) {
                var u = s(n) ? r : o,
                    l = t ? t() : {};
                return u(n, e, a(i), l)
            }
        }
        var r = n(177),
            o = n(178),
            a = n(102),
            s = n(32);
        e.exports = i
    }, function(e, t) {
        function n(e, t, n, i) {
            for (var r = -1, o = e.length; ++r < o;) {
                var a = e[r];
                t(i, a, n(a), e)
            }
            return i
        }
        e.exports = n
    }, function(e, t, n) {
        function i(e, t, n, i) {
            return r(e, function(e, r, o) {
                t(i, e, n(e), o)
            }), i
        }
        var r = n(97);
        e.exports = i
    }, function(e, t, n) {
        function i(e, t) {
            var n = s(e) ? r : a;
            return n(e, o(t, 3))
        }
        var r = n(40),
            o = n(102),
            a = n(180),
            s = n(32);
        e.exports = i
    }, function(e, t, n) {
        function i(e, t) {
            var n = -1,
                i = o(e) ? Array(e.length) : [];
            return r(e, function(e, r, o) {
                i[++n] = t(e, r, o)
            }), i
        }
        var r = n(97),
            o = n(10);
        e.exports = i
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e) {
            var t = (0, a["default"])({
                dataType: l,
                timeout: s.apiTimeout
            }, e);
            return e.hasOwnProperty("data") && (t.data = Object.keys(e.data).reduce(function(t, n) {
                return null !== e.data[n] && (t[n] = e.data[n]), t
            }, {})), Promise.resolve($.ajax(t))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.fetch = r;
        var o = n(50),
            a = i(o),
            s = n(59),
            u = !!("withCredentials" in new XMLHttpRequest),
            l = u ? "json" : "jsonp"
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.CAST_SENDER_URL = t.BackendChromecast = void 0;
        var o = n(54),
            a = r(o),
            s = n(183),
            u = n(59),
            l = i(u),
            c = n(94),
            d = n(184),
            f = i(d),
            p = n(185),
            h = i(p),
            v = n(186),
            g = i(v),
            m = t.BackendChromecast = {},
            _ = t.CAST_SENDER_URL = "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js",
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
                                        var i = (chrome.cast && chrome.cast.isAvailable, !1);
                                        (i || 0 >= t) && (e.resolve(i), clearInterval(n)), t--
                                    }, 1e3)
                            }
                        else e.resolve(!1)
                    };
                return $.ajax({
                    url: _,
                    dataType: "script",
                    cache: !0,
                    success: t
                }), e.promise
            }

            function t(e) {
                if (e) {
                    var t = new chrome.cast.SessionRequest(l.chromecastId),
                        n = new chrome.cast.ApiConfig(t, i, o, chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED);
                    chrome.cast.initialize(n)
                }
            }

            function n() {
                A = !1, b()
            }

            function i(e) {
                S = e, S.addUpdateListener(r), O && N && p()
            }

            function r() {
                if (S.status === chrome.cast.SessionStatus.CONNECTED) {
                    var e = S.receiver;
                    return T.volume !== e.volume.level && (T.volume = e.volume.level, k.emit(f.VOLUME_CHANGE)), void(T.muted !== e.volume.muted && (T.muted = e.volume.muted, k.emit(f.VOLUME_CHANGE)))
                }
                return S.status === chrome.cast.SessionStatus.STOPPED ? (u(null), S.removeUpdateListener(r), S = null, j = !1, void b()) : void(S.status === chrome.cast.SessionStatus.DISCONNECTED)
            }

            function o(e) {
                A = e === chrome.cast.ReceiverAvailability.AVAILABLE, b()
            }

            function u(e) {
                C && C.removeUpdateListener(d), C = e, j = !1, b(), C && C.addUpdateListener(d)
            }

            function d() {
                T.currentTime !== C.currentTime && (T.currentTime = C.currentTime, k.emit(f.TIME_UPDATE)), T.volume !== C.volume.level && (T.volume = C.volume.level, k.emit(f.VOLUME_CHANGE)), T.muted !== C.volume.muted && (T.muted = C.volume.muted, k.emit(f.VOLUME_CHANGE)), T.playbackRate !== C.playbackRate && (T.playbackRate = C.playbackRate, k.emit(f.RATE_CHANGE));
                var e = C.playerState;
                T.playerState !== C.playerState && (e === chrome.cast.media.PlayerState.PLAYING ? k.emit(f.PLAYING) : e === chrome.cast.media.PlayerState.PAUSED ? k.emit(f.PAUSE) : e === chrome.cast.media.PlayerState.BUFFERING, T.playerState = C.playerState)
            }

            function p() {
                j = !0, b();
                var e = (0, c.channelInfo)(O);
                e.then(function(e) {
                    (0, c.offlinePlaylistInfo)(e._id).then(function(t) {
                        var n = t || {},
                            i = new chrome.cast.media.MediaInfo(N, "application/x-mpegurl");
                        i.streamType = chrome.cast.media.StreamType.LIVE;
                        var r = new chrome.cast.media.GenericMediaMetadata;
                        r.subtitle = e.game, r.title = e.display_name, r.images = [new chrome.cast.Image(e.logo)], i.metadata = r, i.customData = {
                            channel: O,
                            is_spectre: Boolean(n.active)
                        };
                        var o = new chrome.cast.media.LoadRequest(i);
                        o.autoplay = !0, S.loadMedia(o, u)
                    })
                }, function(e) {
                    S.stop(), v(e)
                })
            }

            function v(e) {
                e && (P = e, k.emit(f.ERROR))
            }

            function b() {
                var e = L,
                    t = M;
                C ? (L = h.NETWORK_LOADING, M = g.HAVE_METADATA, k.emit(f.CAN_PLAY)) : j ? (L = h.NETWORK_LOADING, M = g.HAVE_NOTHING) : A && O ? (L = h.NETWORK_IDLE, M = g.HAVE_NOTHING) : (L = h.NETWORK_EMPTY, M = g.HAVE_NOTHING), L !== e && (L === h.NETWORK_LOADING ? (k.emit(f.LOADSTART), k.emit(f.PROGRESS)) : L === h.NETWORK_IDLE ? k.emit(f.SUSPEND) : L === h.NETWORK_EMPTY && k.emit(f.EMPTIED)), M !== t && (M === g.HAVE_METADATA ? k.emit(f.LOADED_METADATA) : M === g.HAVE_NOTHING && k.emit(f.ENDED))
            }

            function E(e) {
                v(e)
            }
            var w = m,
                k = new a["default"],
                T = {},
                S = void 0,
                C = void 0,
                O = void 0,
                A = void 0,
                P = void 0,
                j = void 0,
                L = void 0,
                M = void 0,
                I = !1,
                N = null;
            w.init = function() {
                if (k.removeAllListeners(), !I) {
                    I = !0, n();
                    var i = e();
                    i.then(t)
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
                return L
            }, w.getPreload = function() {}, w.setPreload = function() {}, w.load = function() {
                chrome.cast.requestSession(i, E)
            }, w.getBuffered = function() {
                return {
                    length: 0
                }
            }, w.getReadyState = function() {
                return M
            }, w.getSeeking = function() {}, w.getCurrentTime = function() {
                return C ? C.getEstimatedTime() : void 0
            }, w.setCurrentTime = function(e) {
                if (C) {
                    var t = new chrome.cast.media.SeekRequest;
                    t.time = e, C.seek(t)
                }
            }, w.getInitialTime = function() {}, w.getDuration = function() {}, w.getStartOffsetTime = function() {}, w.getPaused = function() {
                return C ? C.playerState === chrome.cast.media.PlayerState.PAUSED : void 0;
            }, w.getDefaultPlaybackRate = function() {}, w.setDefaultPlaybackRate = function() {}, w.getPlaybackRate = function() {}, w.setPlaybackRate = function() {}, w.getPlayed = function() {}, w.getSeekable = function() {}, w.getEnded = function() {}, w.getAutoplay = function() {}, w.setAutoplay = function() {}, w.getLoop = function() {}, w.setLoop = function() {}, w.play = function() {
                if (C) {
                    var e = new chrome.cast.media.PlayRequest;
                    C.play(e)
                } else w.load()
            }, w.pause = function() {
                if (C) {
                    var e = new chrome.cast.media.PauseRequest;
                    C.pause(e)
                }
            }, w.getControls = function() {}, w.setControls = function() {}, w.getVolume = function() {
                return C ? C.volume.level : void 0
            }, w.setVolume = function(e) {
                if (C) {
                    var t = new chrome.cast.Volume(e, null),
                        n = new chrome.cast.media.VolumeRequest(t);
                    C.setVolume(n)
                }
            }, w.getMuted = function() {
                return C ? C.volume.muted : S ? S.receiver.volume.muted : void 0
            }, w.setMuted = function(e) {
                if (C) {
                    var t = new chrome.cast.Volume(null, e),
                        n = new chrome.cast.media.VolumeRequest(t);
                    C.setVolume(n)
                }
            }, w.getDefaultMuted = function() {}, w.setDefaultMuted = function() {}, w.getQuality = function() {
                return "auto"
            }, w.setQuality = function() {}, w.getQualities = function() {
                return ["auto"]
            }, w.getChannel = function() {
                return O
            }, w.setChannel = function(e, t) {
                O = e, t.streamUrl.then(function(e) {
                    N = e, S && O && N && p()
                })
            }, w.getVideo = function() {
                return null
            }, w.setVideo = function() {
                O = null, N = null
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
        t.LOADSTART = "loadstart", t.PROGRESS = "progress", t.SUSPEND = "suspend", t.ABORT = "abort", t.ERROR = "error", t.EMPTIED = "emptied", t.STALLED = "stalled", t.LOADED_METADATA = "loadedmetadata", t.LOADED_DATA = "loadeddata", t.CAN_PLAY = "canplay", t.PLAYING = "playing", t.WAITING = "waiting", t.SEEKING = "seeking", t.SEEKED = "seeked", t.ENDED = "ended", t.DURATION_CHANGE = "durationchange", t.TIME_UPDATE = "timeupdate", t.PLAY = "play", t.PAUSE = "pause", t.RESIZE = "resize", t.VOLUME_CHANGE = "volumechange", t.RATE_CHANGE = "ratechange"
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

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PubSub = t.VIEWERCOUNT_SEED_TIMEOUT = t.AVAILABLE_EVENTS = t.EVENT_TOS = t.EVENT_OFFLINE = t.EVENT_ONLINE = void 0;
        var a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            s = n(35),
            u = r(s),
            l = n(54),
            c = r(l),
            d = n(189),
            f = r(d),
            p = n(59),
            h = i(p),
            v = n(158),
            g = n(201),
            m = n(202),
            _ = n(203),
            y = n(94),
            b = t.EVENT_ONLINE = "online",
            E = t.EVENT_OFFLINE = "offline",
            w = t.EVENT_TOS = "tos",
            k = t.AVAILABLE_EVENTS = [b, E, w],
            T = t.VIEWERCOUNT_SEED_TIMEOUT = 5e3;
        t.PubSub = function() {
            function e(t) {
                var n = this,
                    i = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                o(this, e), this._eventEmitter = new c["default"], this._debugMode = i.debug, this._onMessage = function(e) {
                    n.onPubSubMessage(e)
                }, this._stateStore = t, this._pubSub = f["default"].getInstance(h.pubSubEnviroment), this._handleStreamUpdate(this._stateStore.getState().stream), this._unsubscribe = this._subscribe(), this._seedViewercountTimeoutId = !1
            }
            return a(e, [{
                key: "onPubSubMessage",
                value: function(e) {
                    try {
                        var t = JSON.parse(e);
                        switch (this._debugMode && console.info("PubSub: " + JSON.stringify(t)), t.type) {
                            case "stream-up":
                                this._stateStore.dispatch((0, m.setOnline)(!0)), this._eventEmitter.emit(b), this._seedViewercounts();
                                break;
                            case "stream-down":
                                this._stateStore.dispatch((0, m.setOnline)(!1)), this._eventEmitter.emit(E);
                                break;
                            case "viewcount":
                                this._stateStore.dispatch((0, g.updateViewerCount)(t.viewers));
                                break;
                            case "tos-strike":
                                this._eventEmitter.emit(w);
                                break;
                            default:
                                this._debugMode && console.warn("PubSub: Invalid message - " + JSON.stringify(t))
                        }
                    } catch (n) {
                        console.error("Failed to parse Pubsub message as JSON: " + e)
                    }
                }
            }, {
                key: "_seedViewercounts",
                value: function() {
                    var e = this,
                        t = this._stateStore.getState().window,
                        n = this._stateStore.getState().stream.channel;
                    y.streamInfo.cache.clear(), (0, y.streamInfo)(n).then(function(n) {
                        n.stream ? e._stateStore.dispatch((0, g.updateViewerCount)(n.stream.viewers)) : e._seedViewercountTimeoutId = t.setTimeout(e._seedViewercounts.bind(e), T)
                    })
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
                    e.contentType === _.CONTENT_MODE_LIVE && this._listen(e.channel)
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
                    (0, u["default"])(k, e) && this._eventEmitter.addListener(e, t)
                }
            }, {
                key: "removeEventListener",
                value: function(e, t) {
                    this._eventEmitter.removeListener(e, t)
                }
            }, {
                key: "destroy",
                value: function() {
                    this._unsubscribe(), this._seedViewercountTimeoutId && this._stateStore.getState().window.clearTimeout(this._seedViewercountTimeoutId), this._stateStore.getState().stream.contentType === _.CONTENT_MODE_LIVE && this._unlisten(this._stateStore.getState().stream.channel)
                }
            }]), e
        }()
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
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

        function s(e) {
            if ("production" !== e && "staging" !== e && "darklaunch" !== e) throw "Invalid Pubsub instance environment";
            return null === window.__Twitch__pubsubInstances[e] && (window.__Twitch__pubsubInstances[e] = new O(e)), window.__Twitch__pubsubInstances[e]
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            l = n(190),
            c = i(l),
            d = n(191),
            f = i(d),
            p = n(192),
            h = i(p),
            v = n(193),
            g = i(v),
            m = n(195),
            _ = i(m),
            y = n(196),
            b = i(y),
            E = n(198),
            w = n(200),
            k = i(w),
            T = f["default"]._getLogger("PubsubDriver"),
            S = /^https?:\/\/([\w-]+\.)*twitch\.tv(:\d+)?\/.*$/,
            C = 1,
            O = function(e) {
                function t(e) {
                    r(this, t);
                    var n = o(this, Object.getPrototypeOf(t).call(this, e));
                    return n._env = h["default"].urlParams.pubsub_environment || e, n._clientReady = !1, n._queuedRequests = [], n._stats = E.Stats.getInstance(n._env, "pubsub-js-client"), n._numDisconnects = 0, h["default"].inIframe() && S.test(document.referrer) ? (T.debug("Driver is in an iframe"), n._client = new g["default"]({
                        parentUrl: document.referrer
                    }), n._clientType = "iframe-verified") : (T.debug("Driver is not in an iframe"), n._client = new b["default"]({
                        env: n._env,
                        stats: n._stats
                    }), n._iframeHost = new _["default"](n._client), n._clientType = "ws"), n._stats.setPrefix("pubsub-js-client." + n._clientType), "true" === h["default"].urlParams.force_pubsub_tester ? C = 1 : "false" === h["default"].urlParams.force_pubsub_tester && (C = 0), Math.random() < C && (n._tester = new k["default"]({
                        env: n._env,
                        driver: n,
                        stats: n._stats
                    })), n._client.on("unverified", n._clientUnverified, n), n._client.on("verified", n._clientVerified, n), n._client.verify(), n
                }
                return a(t, e), u(t, [{
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
            }(c["default"]);
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
        var i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            r = function() {
                function e() {
                    n(this, e)
                }
                return i(e, [{
                    key: "on",
                    value: function(e, t, n) {
                        return this._events = this._events || {}, this._events[e] = this._events[e] || [], this._events[e].push(t, n), this
                    }
                }, {
                    key: "off",
                    value: function(e, t) {
                        if (this._events)
                            for (var n = this._events[e] || [], i = this._events[e] = [], r = 0; r < n.length; r += 2) n[r] !== t && (i.push(n[r]), i.push(n[r + 1]));
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
        t["default"] = r
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            a = n(192),
            s = i(a),
            u = function() {},
            l = u,
            c = {},
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
                    r(this, e), this._opts = t
                }
                return o(e, [{
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
                        this._opts.logFunc ? this._opts.logFunc(t) : l(t)
                    }
                }]), e
            }(),
            h = {
                setLogger: function(e) {
                    l = "function" == typeof e ? e : u
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
                    return c[e] || (c[e] = new p({
                        prefix: "pubsub.js [" + e + "] "
                    })), c[e]
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
            for (var e = {}, t = window.location.search.substr(1), n = t.split("&"), i = 0; i < n.length; ++i) {
                var r = n[i].split("=");
                e[decodeURIComponent(r[0])] = r.length > 1 ? decodeURIComponent(r[1]) : ""
            }
            return e
        }(), n.generateString = function(e) {
            for (var t = "", i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", r = 0; e > r; r++) t += i.charAt(n.randomInt(i.length));
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

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
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
        });
        var s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            u = n(190),
            l = i(u),
            c = n(191),
            d = i(c),
            f = n(192),
            p = i(f),
            h = n(194),
            v = i(h),
            g = 30,
            m = 3e4,
            _ = 1e3,
            y = "pubsub",
            b = d["default"]._getLogger("IframeClient"),
            E = function(e) {
                function t(e) {
                    r(this, t);
                    var n = o(this, Object.getPrototypeOf(t).call(this, e));
                    return n._parentUrl = e.parentUrl, n._pendingResponses = new v["default"], n._listens = new l["default"], window.addEventListener("message", n.receiveMessage.bind(n), !1), n
                }
                return a(t, e), s(t, [{
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
                        }, this._parentUrl), this._verifyTimeout = setTimeout(this._unverified.bind(this), _)
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
                            timeout: setTimeout(this._onResponseTimeout.bind(this), m, e),
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
            }(l["default"]);
        t["default"] = E
    }, function(e, t) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            r = function() {
                function e() {
                    n(this, e), this._map = {}, this._size = 0
                }
                return i(e, [{
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
        t["default"] = r
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            a = n(191),
            s = i(a),
            u = "pubsub",
            l = s["default"]._getLogger("IframeHost"),
            c = function() {
                function e(t) {
                    r(this, e), this._driver = t, this._sources = [], this._driver.on("connected", this.handleConnected, this), this._driver.on("disconnected", this.handleDisconnected, this), window.addEventListener("message", this.receiveMessage.bind(this), !1)
                }
                return o(e, [{
                    key: "receiveMessage",
                    value: function(e) {
                        if (e.data.twitch_protocol == u) switch (l.debug("Received message: " + JSON.stringify(e.data)), e.data.type) {
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
                        var i = function() {
                                e.postMessage({
                                    twitch_protocol: u,
                                    type: "success",
                                    nonce: t
                                }, "*")
                            },
                            r = function(n) {
                                e.postMessage({
                                    twitch_protocol: u,
                                    type: "failure",
                                    nonce: t,
                                    error: n
                                }, "*")
                            },
                            o = function(t) {
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
                            success: i,
                            failure: r,
                            message: o
                        })
                    }
                }, {
                    key: "handleUnlisten",
                    value: function(e, t, n) {
                        var i = function() {
                                e.postMessage({
                                    twitch_protocol: u,
                                    type: "success",
                                    nonce: t
                                }, "*")
                            },
                            r = function(n) {
                                e.postMessage({
                                    twitch_protocol: u,
                                    type: "failure",
                                    nonce: t,
                                    error: n
                                }, "*")
                            },
                            o = function(t) {
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
                            success: i,
                            failure: r,
                            message: o
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
        t["default"] = c
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
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
        });
        var s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            u = n(190),
            l = i(u),
            c = n(191),
            d = i(c),
            f = n(192),
            p = i(f),
            h = n(197),
            v = i(h),
            g = n(194),
            m = i(g),
            _ = d["default"]._getLogger("WebsocketClient"),
            y = 3e4,
            b = "response timeout",
            E = 30,
            w = 45e3,
            k = "wss://pubsub-edge.twitch.tv:443/v1",
            T = "wss://pubsub-edge-darklaunch.twitch.tv:443/v1",
            S = "ws://localhost:6900/v1",
            C = function(e) {
                function t(e) {
                    r(this, t);
                    var n = o(this, Object.getPrototypeOf(t).call(this, e));
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
                    return window.WebSocket ? (n._queuedRequests = [], n._pendingResponses = new m["default"], n._pendingReplayResponses = new m["default"], n._listens = new l["default"], n._replays = new m["default"], n._replaysSize = 0, n._firstConnectTime = n._firstListenTime = 0, n._connectCalled = n._reconnecting = !1, n._primarySocket = new v["default"]({
                        stats: n._stats,
                        addr: n._addr
                    }), n._bindPrimary(n._primarySocket), n) : o(n)
                }
                return a(t, e), s(t, [{
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
                        _.debug("primary open: " + this._primarySocket._id), 0 === this._firstConnectTime && (this._firstConnectTime = p["default"].time.now(), this._firstListenTimeout = setTimeout(this._neverListened.bind(this), w)), this._connected = !0, this._trigger("connected"), this._flushQueuedRequests()
                    }
                }, {
                    key: "_onResponse",
                    value: function(e) {
                        if (_.debug("primary response: " + JSON.stringify(e)), this._pendingResponses.has(e.nonce)) {
                            var t = this._pendingResponses.get(e.nonce);
                            _.debug("responseInfo: " + JSON.stringify(t)), clearTimeout(t.timeout), this._pendingResponses.remove(e.nonce), "" === e.error ? ("LISTEN" === t.message.type ? (0 === this._firstListenTime && (clearTimeout(this._firstListenTimeout), this._firstListenTime = p["default"].time.now(), this._stats.logTimer("time_to_first_listen", this._firstListenTime - this._firstConnectTime, .1)), this._replays.set(e.nonce, {
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
                        _.debug("primary message: " + JSON.stringify(e)), this._listens._trigger(e.data.topic, e.data.message)
                    }
                }, {
                    key: "_onConnectionFailure",
                    value: function() {
                        _.debug("connection failure"), this._trigger("disconnected"), this._notifyWhenOpen = !0, this._onReconnect()
                    }
                }, {
                    key: "_onReconnect",
                    value: function() {
                        _.debug("reconnecting..."), this._reconnecting = !0, this._backupSocket = new v["default"]({
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
                        _.debug("Backup socket opened"), this._replays.size() > 0 ? this._replayBackup() : (this._swapSockets(), this._notifyWhenOpen && (_.debug("triggering connected"), this._notifyWhenOpen = !1, this._trigger("connected")))
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
                        this._pendingReplayResponses.has(e.nonce) && "" === e.error && (this._pendingReplayResponses.remove(e.nonce), 0 === this._pendingReplayResponses.size() && (this._swapSockets(), this._notifyWhenOpen && (_.debug("triggering connected"), this._notifyWhenOpen = !1, this._trigger("connected"))))
                    }
                }, {
                    key: "_swapSockets",
                    value: function() {
                        _.debug("swapping primary " + this._primarySocket._id + " and backup " + this._backupSocket._id), this._unbindPrimary(this._primarySocket), this._unbindBackup(this._backupSocket), this._bindPrimary(this._backupSocket), this._primarySocket.close(), this._primarySocket = this._backupSocket, this._reconnecting = !1, this._flushQueuedRequests()
                    }
                }, {
                    key: "Listen",
                    value: function(e) {
                        if (window.WebSocket) {
                            _.debug("listening on " + e.topic);
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
                            if (_.debug("unlistening on " + e.topic + "(" + this._listens.count(e.topic) + " listeners)"), this._listens.count(e.topic) > 1) {
                                this._listens.off(e.topic, e.message);
                                for (var t in this._replays.map())
                                    if (this._replays.get(t).message === e.message) {
                                        this._replays.remove(t);
                                        break
                                    }
                                return e.success && e.success(), void _.debug("now have " + this._listens.count(e.topic) + " listeners")
                            }
                            var n = this._generateNonce(),
                                i = {
                                    type: "UNLISTEN",
                                    nonce: n,
                                    data: {
                                        topics: [e.topic]
                                    }
                                };
                            this._queuedSend(n, i, e)
                        }
                    }
                }, {
                    key: "_queuedSend",
                    value: function(e, t, n) {
                        this._reconnecting || this._primarySocket._isReady() === !1 ? (_.debug("queuing"), this._queuedRequests.push({
                            nonce: e,
                            msg: t,
                            opts: n
                        })) : (_.debug("sending immediately"), this._send(e, t, n))
                    }
                }, {
                    key: "_flushQueuedRequests",
                    value: function() {
                        for (_.debug("flushing " + this._queuedRequests.length + " listen/unlistens"); this._queuedRequests.length > 0;) {
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
            }(l["default"]);
        t["default"] = C
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
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
        });
        var s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            u = n(190),
            l = i(u),
            c = n(191),
            d = i(c),
            f = n(192),
            p = i(f),
            h = d["default"]._getLogger("PubsubSocket"),
            v = 120,
            g = "not_ready",
            m = 3e4,
            _ = 24e4,
            y = 1,
            b = .1,
            E = .1,
            w = function(e) {
                function t(e) {
                    r(this, t);
                    var n = o(this, Object.getPrototypeOf(t).call(this, e));
                    return n._opts = e, n._addr = e.addr, n._stats = e.stats, n._connectionAttempts = 0, n._sentPing = n._receivedPong = !1, n._id = "[" + p["default"].generateString(10) + "] ", window.addEventListener("beforeunload", n._beforeUnload.bind(n)), n
                }
                return a(t, e), s(t, [{
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
                        h.debug(this._id + "closing"),
                            this._closing = !0, this._clearTimeouts(), this._socket.close()
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
                        h.debug(this._id + " socket opened"), this._connectionAttempts = 0, this._connecting = !1, this._socketConnectTime && this._stats.logTimer("socket.connect", p["default"].time.now() - this._socketConnectTime, b), this._stats.logCounter("socket.connection_retries." + this._connectionAttempts, 1, E), this._ping(), this._pingInterval = window.setInterval(this._ping.bind(this), _), this._trigger("open")
                    }
                }, {
                    key: "_ping",
                    value: function() {
                        h.debug(this._id + "sending PING");
                        try {
                            this._socket.send(JSON.stringify({
                                type: "PING"
                            })), this._sentPing = !0, this._pongTimeout && clearTimeout(this._pongTimeout), this._pongTimeout = setTimeout(this._pongTimedOut.bind(this), m)
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
            }(l["default"]);
        t["default"] = w
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Stats = void 0;
        var r = n(199),
            o = i(r);
        t.Stats = o["default"], t["default"] = {
            Stats: o["default"]
        }
    }, function(e, t) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            var n = u[e];
            if (!n) throw new Error("Invalid environment - got " + e);
            if (!t) throw new Error("Invalid prefix - got " + t);
            window[s] = window[s] || {};
            var i = window[s];
            i[e] || (i[e] = new l(n));
            var r = i[e];
            return new c(r, t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            o = 500,
            a = 20,
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
        var l = function() {
                function e(t) {
                    if (n(this, e), !t) throw new Error("config is required");
                    this._addr = t.addr, this._resetCombinedStats(), this._recordDelay = o, this._maxPendingStats = a
                }
                return r(e, [{
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
            c = function() {
                function e(t, i) {
                    if (n(this, e), !t) throw new Error("Missing backend");
                    if (!i) throw new Error("Missing prefix");
                    this._backend = t, this._prefix = i
                }
                return r(e, [{
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
        t.StatsBackend = l, t.PrefixedStats = c, t["default"] = {
            getInstance: i
        }
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            a = n(192),
            s = i(a),
            u = n(191),
            l = i(u),
            c = "https://pubster.twitch.tv/publish",
            d = "https://pubster-darklaunch.twitch.tv/publish",
            f = "pubsubtest.unique.",
            p = "pubsubtest.shared." + s["default"].randomInt(2),
            h = 1e-4,
            v = 6e4,
            g = 3e4,
            m = .1,
            _ = 1,
            y = l["default"]._getLogger("PubsubTest"),
            b = function() {
                function e(t) {
                    switch (r(this, e), y.debug("PubsubTest enabled"), this._env = t.env, this._driver = t.driver, this._stats = t.stats, this._env) {
                        case "production":
                            this._addr = c;
                            break;
                        case "darklaunch":
                            this._addr = d;
                            break;
                        default:
                            this._env = "production", this._addr = c
                    }
                    this._statKeys = {
                        uniqueSuccess: "test.unique.success",
                        uniqueFailure: "test.unique.failure",
                        sharedSuccess: "test.shared.success",
                        sharedFailure: "test.shared.failure"
                    }, this._uniqueKey = f + s["default"].generateString(20), this._sharedKey = p, this._listeningUnique = this._listeningShared = !1, this.sendListens()
                }
                return o(e, [{
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
                        y.debug("checkAndSend: unique: sent = " + this._sentUniqueMessage + ", received = " + this._receivedUniqueMessage), !this._receivedUniqueMessage && this._sentUniqueMessage && (y.debug("unique failure"), this._stats.logCounter(this._statKeys.uniqueFailure, 1, _)), !this._receivedSharedMessage && this._sentSharedMessage && (y.debug("shared failure"), this._stats.logCounter(this._statKeys.sharedFailure, 1, _)), this._receivedUniqueMessage = this._sentUniqueMessage = !1, this._receivedSharedMessage = this._sentSharedMessage = !1, this._expectedMessage = s["default"].generateString(30), $.ajax({
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
                            this._receivedUniqueMessage = !0, this._stats.logTimer(this._statKeys.uniqueSuccess, t, m), this._stats.logCounter(this._statKeys.uniqueSuccess, 1, m)
                        }
                    }
                }, {
                    key: "_gotSharedMessage",
                    value: function(e) {
                        if (e === this._expectedMessage) {
                            var t = s["default"].time.now() - this._sentSharedMessageTime;
                            this._receivedSharedMessage = !0, this._stats.logTimer(this._statKeys.sharedSuccess, t, m), this._stats.logCounter(this._statKeys.sharedSuccess, 1, m)
                        }
                    }
                }]), e
            }();
        t["default"] = b
    }, function(e, t) {
        "use strict";

        function n(e) {
            return {
                type: i,
                count: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.updateViewerCount = n;
        var i = t.ACTION_UPDATE_VIEWERCOUNT = "update viewercount"
    }, function(e, t) {
        "use strict";

        function n(e) {
            return {
                type: i,
                online: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.setOnline = n;
        var i = t.ACTION_SET_ONLINE = "set online"
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.LiveContentStream = t.CONTENT_MODE_LIVE = void 0;
        var o = function() {
                function e(e, t) {
                    var n = [],
                        i = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
                    } catch (u) {
                        r = !0, o = u
                    } finally {
                        try {
                            !i && s["return"] && s["return"]()
                        } finally {
                            if (r) throw o
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
            a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            s = n(50),
            u = i(s),
            l = n(204),
            c = i(l),
            d = n(59),
            f = n(207),
            p = t.CONTENT_MODE_LIVE = "live";
        t.LiveContentStream = function() {
            function e(t, n, i) {
                r(this, e), this._channelName = t, this._oAuthToken = n, this._usherParams = i, this._restrictedBitrates = []
            }
            return a(e, [{
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
                key: "streamUrl",
                get: function() {
                    var e = this,
                        t = this._oAuthToken.then(function(t) {
                            return (0, f.fetchChannelAccessToken)(e._channelName, t)
                        });
                    return Promise.all([t, this._usherParams]).then(function(t) {
                        var n = o(t, 2),
                            i = n[0],
                            r = n[1],
                            a = (0, u["default"])({
                                token: i.token,
                                sig: i.sig,
                                allow_source: !0,
                                allow_spectre: !0
                            }, (0, c["default"])(r, ["protocol"]));
                        return e._restrictedBitrates = JSON.parse(i.token).chansub.restricted_bitrates, "" + r.protocol + d.usherHost + "/api/channel/hls/" + e._channelName.toLowerCase() + ".m3u8?" + $.param(a)
                    })
                }
            }]), e
        }()
    }, function(e, t, n) {
        var i = n(40),
            r = n(205),
            o = n(45),
            a = n(47),
            s = n(20),
            u = n(17),
            l = u(function(e, t) {
                return null == e ? {} : (t = i(o(t, 1), String), a(e, r(s(e), t)))
            });
        e.exports = l
    }, function(e, t, n) {
        function i(e, t, n, i) {
            var d = -1,
                f = o,
                p = !0,
                h = e.length,
                v = [],
                g = t.length;
            if (!h) return v;
            n && (t = s(t, u(n))), i ? (f = a, p = !1) : t.length >= c && (f = l, p = !1, t = new r(t));
            e: for (; ++d < h;) {
                var m = e[d],
                    _ = n ? n(m) : m;
                if (p && _ === _) {
                    for (var y = g; y--;)
                        if (t[y] === _) continue e;
                    v.push(m)
                } else f(t, _, i) || v.push(m)
            }
            return v
        }
        var r = n(62),
            o = n(86),
            a = n(87),
            s = n(40),
            u = n(206),
            l = n(88),
            c = 200;
        e.exports = i
    }, function(e, t) {
        function n(e) {
            return function(t) {
                return e(t)
            }
        }
        e.exports = n
    }, function(e, t, n) {
        "use strict";

        function i(e, t) {
            return (0, a.fetch)({
                url: e,
                data: {
                    oauth_token: t
                },
                xhrFields: {
                    withCredentials: !0
                }
            })
        }

        function r(e, t) {
            var n = s.apiHost + "/api/vods/" + e.substring(1) + "/access_token";
            return i(n, t)
        }

        function o(e, t) {
            var n = s.apiHost + "/api/channels/" + e.toLowerCase() + "/access_token";
            return i(n, t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.fetchAccessToken = i, t.fetchVideoAccessToken = r, t.fetchChannelAccessToken = o;
        var a = n(181),
            s = n(59)
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.FullScreen = t.FULLSCREEN_CHANGE = void 0;
        var o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            a = n(209),
            s = i(a),
            u = n(54),
            l = i(u),
            c = t.FULLSCREEN_CHANGE = "fullscreenchange";
        t.FullScreen = function() {
            function e(t) {
                r(this, e), this._root = t, this._eventEmitter = new l["default"]
            }
            return o(e, [{
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
                    this._eventEmitter.emit(c)
                }
            }, {
                key: "destroy",
                value: function() {
                    this._eventEmitter.removeAllListeners()
                }
            }]), e
        }()
    }, function(e, t, n) {
        var i;
        /*! BigScreen
         * v2.0.5 - 2015-05-02
         * 
         * Copyright 2015 Brad Dougherty <me@brad.is>; MIT License
         */
        ! function(r, o, a) {
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
                        t.readyState < t.HAVE_METADATA ? (t.addEventListener("loadedmetadata", function i() {
                            t.removeEventListener("loadedmetadata", i, !1), t.webkitEnterFullscreen(), v = !!t.getAttribute("controls")
                        }, !1), t.load()) : (t.webkitEnterFullscreen(), v = !!t.getAttribute("controls")), h = t
                    } catch (n) {
                        return E("not_supported", e)
                    }
                    return !0
                }
                return E(void 0 === p.request ? "not_supported" : "not_enabled", e)
            }

            function l() {
                w.element || (b(), d())
            }

            function c() {
                a && "webkitfullscreenchange" === p.change && window.addEventListener("resize", l, !1)
            }

            function d() {
                a && "webkitfullscreenchange" === p.change && window.removeEventListener("resize", l, !1)
            }
            var f = /i(Pad|Phone|Pod)/.test(navigator.userAgent) && parseInt(navigator.userAgent.replace(/^.*OS (\d+)_(\d+).*$/, "$1.$2"), 10) >= 7,
                p = function() {
                    var e = o.createElement("video"),
                        t = {
                            request: ["requestFullscreen", "webkitRequestFullscreen", "webkitRequestFullScreen", "mozRequestFullScreen", "msRequestFullscreen"],
                            exit: ["exitFullscreen", "webkitCancelFullScreen", "webkitExitFullscreen", "mozCancelFullScreen", "msExitFullscreen"],
                            enabled: ["fullscreenEnabled", "webkitFullscreenEnabled", "mozFullScreenEnabled", "msFullscreenEnabled"],
                            element: ["fullscreenElement", "webkitFullscreenElement", "webkitCurrentFullScreenElement", "mozFullScreenElement", "msFullscreenElement"],
                            change: ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"],
                            error: ["fullscreenerror", "webkitfullscreenerror", "mozfullscreenerror", "MSFullscreenError"]
                        },
                        n = {};
                    for (var i in t)
                        for (var r = 0, a = t[i].length; a > r; r++)
                            if (t[i][r] in e || t[i][r] in o || "on" + t[i][r].toLowerCase() in o) {
                                n[i] = t[i][r];
                                break
                            }
                    return n
                }(),
                h = null,
                v = null,
                g = function() {},
                m = [],
                _ = !1;
            navigator.userAgent.indexOf("Android") > -1 && navigator.userAgent.indexOf("Chrome") > -1 && (_ = parseInt(navigator.userAgent.replace(/^.*Chrome\/(\d+).*$/, "$1"), 10) || !0);
            var y = function(e) {
                    var t = m[m.length - 1];
                    t && (e !== t.element && e !== h || !t.hasEntered) && ("VIDEO" === e.tagName && (h = e), 1 === m.length && w.onenter(w.element), t.enter.call(t.element, e || t.element), t.hasEntered = !0)
                },
                b = function() {
                    !h || v || f || (h.setAttribute("controls", "controls"), h.removeAttribute("controls")), h = null, v = null;
                    var e = m.pop();
                    e && (e.exit.call(e.element), w.element || (m.forEach(function(e) {
                        e.exit.call(e.element)
                    }), m = [], w.onexit()))
                },
                E = function(e, t) {
                    if (m.length > 0) {
                        var n = m.pop();
                        t = t || n.element, n.error.call(t, e), w.onerror(t, e)
                    }
                },
                w = {
                    request: function(e, t, n, i) {
                        if (e = e || o.body, m.push({
                                element: e,
                                enter: t || g,
                                exit: n || g,
                                error: i || g
                            }), void 0 === p.request) return void u(e);
                        if (a && o[p.enabled] === !1) return void u(e);
                        if (_ !== !1 && 32 > _) return void u(e);
                        if (a && void 0 === p.enabled) return p.enabled = "webkitFullscreenEnabled", e[p.request](), void setTimeout(function() {
                            o[p.element] ? o[p.enabled] = !0 : (o[p.enabled] = !1, u(e))
                        }, 250);
                        try {
                            e[p.request](), setTimeout(function() {
                                o[p.element] || E(a ? "not_enabled" : "not_allowed", e)
                            }, 100)
                        } catch (r) {
                            E("not_enabled", e)
                        }
                    },
                    exit: function() {
                        d(), o[p.exit]()
                    },
                    toggle: function(e, t, n, i) {
                        w.element ? w.exit() : w.request(e, t, n, i)
                    },
                    videoEnabled: function(e) {
                        if (w.enabled) return !0;
                        e = e || o.body;
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
                            return h && h.webkitDisplayingFullscreen ? h : o[p.element] || null
                        }
                    },
                    enabled: {
                        enumerable: !0,
                        get: function() {
                            return "webkitCancelFullScreen" !== p.exit || a ? _ !== !1 && 32 > _ ? !1 : o[p.enabled] || !1 : !0
                        }
                    }
                }), p.change && o.addEventListener(p.change, function(e) {
                    if (w.onchange(w.element), w.element) {
                        var t = m[m.length - 2];
                        t && t.element === w.element ? b() : (y(w.element), c())
                    } else b()
                }, !1), o.addEventListener("webkitbeginfullscreen", function(e) {
                    var t = !0;
                    if (m.length > 0)
                        for (var n = 0, i = m.length; i > n; n++) {
                            var r = s(m[n].element);
                            if (r === e.srcElement) {
                                t = !1;
                                break
                            }
                        }
                    t && m.push({
                        element: e.srcElement,
                        enter: g,
                        exit: g,
                        error: g
                    }), w.onchange(e.srcElement), y(e.srcElement)
                }, !0), o.addEventListener("webkitendfullscreen", function(e) {
                    w.onchange(e.srcElement), b(e.srcElement)
                }, !0), p.error && o.addEventListener(p.error, function(e) {
                    E("not_allowed")
                }, !1)
            } catch (k) {
                w.element = null, w.enabled = !1
            }
            i = function() {
                return w
            }.call(t, n, t, e), !(void 0 !== i && (e.exports = i))
        }(this, document, self !== top)
    }, function(e, t) {
        "use strict";

        function n(e) {
            var t = /^(?:(\d+)[h])?(?:(\d+)[m])?(?:(\d+)[s])?$/,
                n = t.exec(e);
            if (!n) return null;
            for (var i = 0, r = 1; r < n.length; r++) {
                var o = parseInt(n[r], 10) || 0;
                i = 60 * i + o
            }
            return i
        }

        function i(e, t) {
            var n = [e / 3600, e / 60 % 60, e % 60];
            if (t)
                for (; n.length && n[0] < 1;) n.shift();
            for (var i = 0; i < n.length; i++) {
                var r = Math.floor(n[i]);
                n[i] = 10 > r ? "0" + r : r
            }
            return n
        }

        function r(e, t) {
            var n = i(e, t);
            return n.join(":")
        }

        function o(e) {
            var t = i(e, !0),
                n = ["h", "m", "s"],
                r = "";
            t = t.reverse(), n = n.reverse();
            for (var o = 0; o < t.length; o++) r = t[o] + n[o] + r;
            return r
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.parse = n, t.toArray = i, t.toString = r, t.toURLString = o
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t, n, i) {
            function r() {
                var e = n.getState().stream.restrictedBitrates;
                if ((0, N["default"])(e, d.getQuality())) {
                    var t = d.getQualities().filter(function(t) {
                        return !(0, N["default"])(e, t)
                    })[0];
                    n.dispatch((0, A.setQuality)(t))
                }
            }

            function o() {
                return (0, S.subscribe)(n, ["stream"], function(e) {
                    var t = e.stream;
                    d._updateStream(t)
                })
            }

            function a() {
                return (0, S.subscribe)(n, ["viewercount"], function() {
                    m.emit("viewerschange")
                })
            }

            function l() {
                return (0, S.subscribe)(n, ["playback"], function(e, t) {
                    var n = e.playback,
                        i = t.playback;
                    n.quality !== i.quality && d.setQuality(n.quality)
                })
            }

            function c() {
                var e = function n() {
                    E.removeEventListener(R.PLAYING, n);
                    var e = Date.now(),
                        i = !1,
                        r = function() {
                            i = !1
                        },
                        o = function a() {
                            if (i) {
                                var n = Date.now() - e;
                                t.trackEvent("quality_change_complete", {
                                    time_to_stable_quality: n
                                }), E.removeEventListener($.SEGMENT_CHANGE, a), E.removeEventListener($.QUALITY_CHANGE, r)
                            } else i = !0
                        };
                    E.addEventListener($.SEGMENT_CHANGE, o), E.addEventListener($.QUALITY_CHANGE, r)
                };
                E.addEventListener(R.PLAYING, e)
            }
            var d = this,
                m = new s["default"],
                y = [],
                E = void 0,
                P = void 0,
                L = void 0,
                I = void 0,
                x = !1,
                D = void 0,
                U = function() {
                    var o = document.createElement("div");
                    o.className = "player-video", e.appendChild(o);
                    var a = i.backend || d.getSupportedBackends()[0],
                        s = F[a] || v.BackendBlank,
                        l = (0, M["default"])({
                            lastAdDisplay: _["default"].get("lastAdDisplay") || 0,
                            experiments: n.getState().experiments
                        }, i);
                    if (I = new s(t, l), I.attach(o), P = f.BackendChromecast, P.init(), E = new p.BackendMulti(P, I), s !== u.BackendFlash && h.BackendIMA.canPlay() && i.html5Ads) {
                        var c = document.createElement("div");
                        c.className = "player-advertisement", e.appendChild(c), L = new h.BackendIMA(c, t, l), E = new p.BackendMulti(L, E), I.addEventListener(R.LOADED_METADATA, function() {
                            L.requestAds("preroll")
                        })
                    }
                    I.addEventListener(R.LOADED_METADATA, r), H()
                },
                H = function() {
                    E.addEventListener("adend", function() {
                        _["default"].set("lastAdDisplay", (new Date).getTime())
                    }), E.addEventListener("ended", function() {
                        null !== E.getChannel() && (0, g.channelInfo)(E.getChannel()).then(function(e) {
                            return (0, g.offlinePlaylistInfo)(e._id)
                        }).then(function(e) {
                            e.enabled && E.load()
                        })
                    });
                    var e = ["emptied", "suspend", "loadstart", "loadedmetadata"];
                    e.forEach(function(e) {
                        P.addEventListener(e, function() {
                            m.emit("castingchange"), i.debug && console.log("chromecast event: ", e)
                        })
                    }), y.push(o()), y.push(a()), y.push(l()), E.addEventListener("captions", function() {
                        n.dispatch((0, C.setCaptionsData)(E.getCaption()))
                    }), E.addEventListener($.QUALITY_CHANGE, function() {
                        n.dispatch((0, O.incrementQualityChangeCount)())
                    })
                },
                G = function() {
                    m.emit("theatrechange")
                },
                z = function() {
                    m.emit("fullscreenchange")
                },
                W = function() {
                    m.emit("fullscreenchange")
                };
            d.destroy = function() {
                E.destroy(), y.forEach(function(e) {
                    return e()
                }), m.removeAllListeners()
            }, d._updateStream = function(e) {
                e.contentType === k.CONTENT_MODE_LIVE ? (E.setChannel(e.channel, e), c()) : e.contentType === T.CONTENT_MODE_VOD ? (E.setVideo(e.videoId, e), c(), D = null, (0, g.videoInfo)(e.videoId).then(function(e) {
                    D = e.url
                })) : e.streamUrl.then(function(e) {
                    E.setSrc(e)
                })
            }, d.addEventListener = function(e, t) {
                (0, N["default"])(b.allEvents, e) || console.error("subscribing to unknown event: ", e), E.addEventListener(e, t), m.on(e, t)
            }, d.removeEventListener = function(e, t) {
                E.removeEventListener(e, t), m.off(e, t)
            }, d.getNetworkProfile = function() {
                return I.getNetworkProfile()
            }, d.getError = function() {
                return E.getError()
            }, d.getSrc = function() {}, d.setSrc = function() {}, d.getCurrentSrc = function() {}, d.getNetworkState = function() {
                return E.getNetworkState()
            }, d.getPreload = function() {
                return E.getPreload()
            }, d.setPreload = function(e) {
                return E.setPreload(e)
            }, d.getBuffered = function() {
                return E.getBuffered()
            }, d.load = function() {
                E.load()
            }, d.getReadyState = function() {
                return E.getReadyState()
            }, d.getSeeking = function() {
                return E.getSeeking()
            }, d.getCurrentTime = function() {
                return E.getCurrentTime()
            }, d.setCurrentTime = function(e) {
                E.setCurrentTime(e)
            }, d.getInitialTime = function() {
                return E.getInitialTime()
            }, d.getDuration = function() {
                return E.getDuration()
            }, d.getStartOffsetTime = function() {
                return E.getStartOffsetTime()
            }, d.getPaused = function() {
                return E.getPaused()
            }, d.getDefaultPlaybackRate = function() {
                return E.getDefaultPlaybackRate()
            }, d.setDefaultPlaybackRate = function(e) {
                E.setDefaultPlaybackRate(e)
            }, d.getPlaybackRate = function() {
                return E.getPlaybackRate()
            }, d.setPlaybackRate = function(e) {
                E.setPlaybackRate(e)
            }, d.getPlayed = function() {
                return E.getPlayed()
            }, d.getSeekable = function() {
                return E.getSeekable()
            }, d.getEnded = function() {
                return E.getEnded()
            }, d.getAutoplay = function() {
                return i.autoplay
            }, d.getLoop = function() {
                return E.getLoop()
            }, d.setLoop = function(e) {
                E.setLoop(e)
            }, d.play = function() {
                E.getNetworkState === E.NETWORK_EMPTY ? E.load() : E.play()
            }, d.pause = function() {
                E.pause()
            }, d.getControls = function() {
                return !0
            }, d.setControls = function() {}, d.getVolume = function() {
                return E.getVolume()
            }, d.setVolume = function(e) {
                var t = Math.max(0, Math.min(1, e));
                E.setVolume(t), _["default"].set("volume", t)
            }, d.getMuted = function() {
                return E.getMuted()
            }, d.setMuted = function(e, t) {
                E.setMuted(e), t || _["default"].set("muted", e)
            }, d.getTheatre = function() {
                return x
            }, d.setTheatre = function(e) {
                G(), x = e
            }, d.getDefaultMuted = function() {
                return E.getDefaultMuted()
            }, d.setDefaultMuted = function(e) {
                E.setDefaultMuted(e)
            }, d.getQuality = function() {
                return n.getState().playback.quality
            }, d.setQuality = function(e) {
                E.setQuality(e), _["default"].set("quality", e)
            }, d.getQualities = function() {
                return E.getQualities()
            }, d.getChannel = function() {
                return E.getChannel()
            }, d.getVideo = function() {
                return E.getVideo()
            }, d.getVideoURL = function() {
                return D
            }, d.getStats = function() {
                return E.getStats()
            }, d.getStatsEnabled = function() {
                return E.getStatsEnabled()
            }, d.setStatsEnabled = function(e) {
                E.setStatsEnabled(e)
            }, d.startCast = function() {
                P.load()
            }, d.stopCast = function() {
                P.stop()
            }, d.getCasting = function() {
                var e = P.getReadyState(),
                    t = P.getNetworkState();
                return e === B.HAVE_NOTHING ? t === V.NETWORK_EMPTY ? "unavailable" : t === V.NETWORK_IDLE ? "available" : "connecting" : "connected"
            }, d.getCastDevice = function() {
                return P.getDevice()
            }, d.getFullscreen = function() {
                return w["default"].element === e
            }, d.setFullscreen = function(t) {
                var n = d.getFullscreen();
                n !== t && w["default"].toggle(e, z, W)
            }, d.getFullscreenEnabled = function() {
                return w["default"].enabled
            }, d.midroll = function(e) {
                L && L.requestAds("midroll", e)
            }, d.getVideoInfo = function() {
                return E.getVideoInfo()
            }, d.getBackend = function() {
                return E.getBackend()
            }, d.setBackend = function(e) {
                _["default"].set("backend", e), window.document.location.reload()
            }, d.getSupportedBackends = function() {
                return q.filter(function(e) {
                    var t = F[e];
                    return t.canPlay()
                })
            }, d.getVersion = function() {
                return I.getVersion()
            }, d.isSpectre = function() {
                return E.isSpectre()
            }, d.getViewerCount = function() {
                return n.getState().viewercount
            }, d.getCaption = function() {
                return E.getCaption()
            }, d.getEventEmitter = function() {
                return m
            };
            var Q = function(e, t) {
                try {
                    t = (0, j["default"])(t, {
                        enumerable: !0
                    }), Object.defineProperty(d, e, t)
                } catch (n) {}
            };
            Q("error", {
                get: d.getError
            }), Q("src", {
                get: d.getSrc,
                set: d.setSrc
            }), Q("currentSrc", {
                get: d.getCurrentSrc
            }), Q("networkState", {
                get: d.getNetworkState
            }), Q("preload", {
                get: d.getPreload,
                set: d.setPreload
            }), Q("buffered", {
                get: d.getBuffered
            }), Q("readyState", {
                get: d.getReadyState
            }), Q("seeking", {
                get: d.getSeeking
            }), Q("currentTime", {
                get: d.getCurrentTime,
                set: d.setCurrentTime
            }), Q("initialTime", {
                get: d.getInitialTime
            }), Q("duration", {
                get: d.getDuration
            }), Q("startOffsetTime", {
                get: d.getStartOffsetTime
            }), Q("paused", {
                get: d.getPaused
            }), Q("defaultPlaybackRate", {
                get: d.getDefaultPlaybackRate,
                set: d.setDefaultPlaybackRate
            }), Q("playbackRate", {
                get: d.getPlaybackRate,
                set: d.setPlaybackRate
            }), Q("played", {
                get: d.getPlayed
            }), Q("seekable", {
                get: d.getSeekable
            }), Q("ended", {
                get: d.getEnded
            }), Q("autoplay", {
                get: d.getAutoplay
            }), Q("loop", {
                get: d.getLoop,
                set: d.setLoop
            }), Q("controls", {
                get: d.getControls,
                set: d.setControls
            }), Q("volume", {
                get: d.getVolume,
                set: d.setVolume
            }), Q("muted", {
                get: d.getMuted,
                set: d.setMuted
            }), Q("defaultMuted", {
                get: d.getDefaultMuted,
                set: d.setDefaultMuted
            }), Q("quality", {
                get: d.getQuality,
                set: d.setQuality
            }), Q("qualities", {
                get: d.getQualities
            }), Q("channel", {
                get: d.getChannel,
                set: d.setChannel
            }), Q("video", {
                get: d.getVideo,
                set: d.setVideo
            }), Q("stats", {
                get: d.getStats
            }), Q("statsEnabled", {
                get: d.getStatsEnabled,
                set: d.setStatsEnabled
            }), Q("casting", {
                get: d.getCasting
            }), Q("castDevice", {
                get: d.getCastDevice
            }), Q("fullscreen", {
                get: d.getFullscreen,
                set: d.setFullscreen
            }), Q("fullscreenEnabled", {
                get: d.getFullscreenEnabled
            }), Q("theatre", {
                get: d.getTheatre,
                set: d.setTheatre
            }), Q("viewers", {
                get: d.getViewerCount
            }), U()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Video = o;
        var a = n(54),
            s = r(a),
            u = n(212),
            l = n(217),
            c = n(222),
            d = n(250),
            f = n(182),
            p = n(251),
            h = n(253),
            v = n(256),
            g = n(94),
            m = n(172),
            _ = r(m),
            y = n(59),
            b = i(y),
            E = n(209),
            w = r(E),
            k = n(203),
            T = n(257),
            S = n(158),
            C = n(258),
            O = n(161),
            A = n(263),
            P = n(1),
            j = r(P),
            L = n(50),
            M = r(L),
            I = n(35),
            N = r(I),
            x = n(184),
            R = i(x),
            D = n(185),
            V = i(D),
            U = n(186),
            B = i(U),
            H = n(58),
            $ = i(H),
            q = ["flash", "hls", "mseDev", "mse"],
            F = {
                flash: u.BackendFlash,
                hls: d.BackendHls,
                mseDev: c.BackendMseDevelopment,
                mse: l.BackendMse
            }
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            var i = this,
                r = o.counter++;
            o.map[r] = i;
            var s = new c["default"],
                l = new c["default"],
                h = new d.Deferred,
                g = new f.ExtrapolatingTimer,
                _ = !1,
                b = !1,
                w = null,
                T = 0,
                C = 0,
                L = null,
                M = null,
                I = void 0,
                N = void 0,
                x = !1,
                R = void 0,
                D = null,
                V = void 0,
                U = void 0,
                B = void 0,
                H = void 0,
                $ = void 0,
                q = {
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
                F = void 0,
                G = void 0,
                z = void 0,
                W = "",
                Q = void 0,
                Y = !1,
                K = !0,
                J = !1,
                X = !1,
                Z = !1,
                ee = function() {
                    s.on(y.CAN_PLAY, ue), s.on(y.DURATION_CHANGE, re), s.on(y.SEEKING, ge), s.on(y.SEEKED, me), s.on(y.ENDED, pe), s.on(y.ERROR, fe), s.on(y.PLAYING, le), s.on(y.WAITING, Ee), s.on(y.VOLUME_CHANGE, ie), s.on(y.LOADSTART, se), s.on(E.PLAYER_INIT, te), s.on(E.SEEK_FAILED, _e), s.on(E.PLAYBACK_STATISTICS, we), s.on(E.SPECTRE_PLAYLIST, Ne), s.on(E.CHANSUB_REQUIRED, Le), s.on(E.VIDEO_FAILURE, de), s.on(E.FORMATS, oe), s.on(E.FORMAT_CHANGED, ae), s.on(E.TIME_CHANGE, ye), s.on(E.BUFFER_CHANGE, be), s.on(E.SEGMENT_CHANGE, Ie), s.on(E.USHER_FAIL_ERROR, Me), s.on(E.CAPTION_UPDATE, ne), s.on(E.VIDEO_PAUSED, ce), s.on(E.STREAM_LOADED, he), s.on(E.VIDEO_LOADED, ve), s.on(k.AD_DISPLAY_STARTED, ke), s.on(k.AD_DISPLAY_ENDED, Te), s.on(k.COMPANION_RENDERED, je), s.on(k.AD_REQUEST, Se), s.on(k.AD_REQUEST_DECLINED, Ce), s.on(k.AD_REQUEST_RESPONSE, Oe), s.on(k.AD_REQUEST_ERROR, Ae), s.on(k.AD_ERROR, Pe)
                },
                te = function() {
                    b = !0, h.resolve(), l.emit(E.PLAYER_INIT)
                },
                ne = function(e) {
                    $ = e, l.emit(E.CAPTION_UPDATE)
                },
                ie = function(e) {
                    (0, u["default"])(e.volume) && (V = Math.min(Math.max(e.volume, 0), 1), l.emit(y.VOLUME_CHANGE))
                },
                re = function(e) {
                    D = e.duration || null, l.emit(y.DURATION_CHANGE)
                },
                oe = function(e) {
                    H = e.formats, l.emit(E.QUALITIES_CHANGE)
                },
                ae = function(e) {
                    B = e.format, l.emit(E.QUALITY_CHANGE, e.format)
                },
                se = function(e) {
                    e && e.format && B !== e.format && (B = e.format, l.emit(E.QUALITY_CHANGE)), C = S.NETWORK_LOADING, l.emit(y.LOADSTART), D = null, l.emit(y.DURATION_CHANGE), Re(He("getVideoTime")), Ve()
                },
                ue = function() {
                    l.emit(y.CAN_PLAY)
                },
                le = function(e) {
                    x && (x = !1, l.emit(y.PLAY)), Y = !1, B = e.format, Re(He("getVideoTime")), De(), T < O.HAVE_METADATA && (T = O.HAVE_METADATA, l.emit(y.LOADED_METADATA)), T < O.HAVE_CURRENT_DATA && (T = O.HAVE_CURRENT_DATA, l.emit(y.LOADED_DATA)), T = O.HAVE_FUTURE_DATA, l.emit(y.PLAYING)
                },
                ce = function() {
                    x = !0, l.emit(y.PAUSE), Q instanceof P.LiveContentStream && (T = O.HAVE_NOTHING), Ve()
                },
                de = function() {
                    l.emit(E.OFFLINE), Y || T !== O.HAVE_NOTHING || (Y = !0, l.emit(y.ENDED)), Z = !1, Y = !0, T = O.HAVE_NOTHING, Ve()
                },
                fe = function(e) {
                    z = I ? m.channelError : N ? m.videoError : m.unknownError, l.emit(y.ERROR, e)
                },
                pe = function() {
                    Y = !0, Z = !1, T = O.HAVE_NOTHING, l.emit(y.ENDED), Ve()
                },
                he = function(e) {
                    Ve(), Re(0), L = e.channel, M = null, l.emit(E.LOADED_CHANNEL), _ && Be("stopPlaybackStatistics"), _ = !0, Be("startPlaybackStatistics")
                },
                ve = function(e) {
                    Ve(), Re(0);
                    var t = e.videoId;
                    isNaN(t[0]) || (t = "v" + t), M = t, L = null, l.emit(E.LOADED_VIDEO), T = O.HAVE_METADATA, l.emit(y.LOADED_METADATA), _ && Be("stopPlaybackStatistics"), _ = !0, Be("startPlaybackStatistics")
                },
                ge = function() {
                    Ve(), R = !0, l.emit(y.SEEKING)
                },
                me = function() {
                    R = !1, l.emit(y.SEEKED)
                },
                _e = function() {
                    R = !1
                },
                ye = function() {
                    Re(He("getVideoTime"))
                },
                be = function(e) {
                    F = e, l.emit(E.BUFFER_CHANGE)
                },
                Ee = function() {
                    Ve(), T = O.HAVE_CURRENT_DATA, l.emit(y.WAITING)
                },
                we = function(e) {
                    q = e, l.emit(E.STATS_CHANGE)
                },
                ke = function(t) {
                    K = !1, x = !1, M && Ve(), l.emit("adstart"), e.trackEvent("video_ad_impression", t)
                },
                Te = function(t) {
                    K = !0, M && !Y && (Re(He("getVideoTime")), De()), l.emit("adend"), e.trackEvent("video_ad_impression_complete", t)
                },
                Se = function(t) {
                    e.trackEvent("video_ad_request", t)
                },
                Ce = function(t) {
                    e.trackEvent("video_ad_request_declined", t)
                },
                Oe = function(t) {
                    e.trackEvent("video_ad_request_response", t)
                },
                Ae = function(t) {
                    e.trackEvent("video_ad_error", t)
                },
                Pe = function(t) {
                    e.trackEvent("video_ad_error", t)
                },
                je = function(e) {
                    l.emit("adcompanionrendered", e)
                },
                Le = function() {
                    l.emit(E.RESTRICTED)
                },
                Me = function() {
                    l.emit(E.USHER_FAIL_ERROR)
                },
                Ie = function(e) {
                    l.emit(E.SEGMENT_CHANGE, e)
                },
                Ne = function(e) {
                    Z = e.is_spectre, l.emit(E.IS_SPECTRE, e.is_spectre)
                },
                xe = function() {
                    l.emit(y.TIME_UPDATE, g.extrapolateTimeStamp())
                },
                Re = function(e) {
                    g.setCurrentTimeStamp(e), l.emit(y.TIME_UPDATE, g.extrapolateTimeStamp())
                },
                De = function() {
                    null === w && (w = setInterval(xe, j), g.resume())
                },
                Ve = function() {
                    null !== w && (clearInterval(w), w = null, g.pause())
                };
            i.attach = function(e) {
                var i = n(216),
                    o = "10.2",
                    a = "playerProductInstall.swf",
                    s = "100%",
                    u = "100%",
                    l = {};
                l.eventsCallback = "window._BackendFlash_emitEvents", l.eventsContext = r, l.initCallback = null;
                var c = {};
                c.bgcolor = "#000", c.allowscriptaccess = "always", c.allowfullscreen = "true", "ppapi" === v.getFlashPlayerType() ? c.wmode = "direct" : c.wmode = "transparent";
                var d = {};
                d.align = "middle";
                var f = document.createElement("div");
                e.appendChild(f), W = "swfobject-" + r, f.setAttribute("id", W), v.embedSWF(i, W, s, u, o, a, l, c, d, function(e) {
                    G = e.ref
                }), Promise.all([t.experiments.get(A.ABS_V2), h.promise]).then(function(e) {
                    var t = "yes" === e[0];
                    He("setABSV2Enabled", [t])
                }), Promise.all([t.experiments.get(A.ENABLE_REPEAT_ADS), h.promise]).then(function(e) {
                    var t = "yes" === e[0];
                    He("setRepeatingAdsEnabled", [t])
                }), Be("setLastAdDisplay", [t.lastAdDisplay]), Be("setPlayerType", [t.player])
            };
            var Ue = function(e) {
                    var n = arguments.length <= 1 || void 0 === arguments[1] ? [] : arguments[1];
                    switch (t.debug && console.log("flash call:", e, n), n.length) {
                        case 0:
                            return G[e]();
                        case 1:
                            return G[e](n[0]);
                        case 2:
                            return G[e](n[0], n[1]);
                        case 3:
                            return G[e](n[0], n[1], n[2]);
                        default:
                            return console.log("WARNING, too many arguments passed to Flash"), G[e].apply(this, n)
                    }
                },
                Be = function(e, n) {
                    h.promise.then(function() {
                        setTimeout(function() {
                            var i = Ue(e, n);
                            i && t.debug && console.log("flash return:", e, "=", i)
                        }, 0)
                    })
                },
                He = function(e, n) {
                    if (b) {
                        var i = Ue(e, n);
                        return i && t.debug && console.log("flash return:", e, "=", i), i
                    }
                };
            i._emitEvent = function(e, n) {
                setTimeout(function() {
                    t.debug && "timeupdate" !== e && "playbackStatistics" !== e && console.log("flash event:", e, n), s.emit(e, n)
                }, 0)
            }, i.addEventListener = function(e, t) {
                l.on(e, t)
            }, i.removeEventListener = function(e, t) {
                l.off(e, t)
            }, i.getNetworkProfile = function() {
                return He("getNetworkProfile") || []
            }, i.getError = function() {
                return z
            }, i.getNetworkState = function() {
                return C
            }, i.getBuffered = function() {
                var e = F ? 1 : 0;
                return {
                    length: e,
                    start: function(t) {
                        return t >= e ? void 0 : F.start
                    },
                    end: function(t) {
                        return t >= e ? void 0 : F.end
                    }
                }
            }, i.load = function() {
                return I || N ? (T = O.HAVE_NOTHING, C = S.NETWORK_LOADING, l.emit(y.LOADSTART), N ? Promise.all([(0, p.videoInfo)(N), Q.streamUrl]).then(function(e) {
                    var t = a(e, 2),
                        n = t[0],
                        i = t[1];
                    X = !0, Be("loadStream", [i, n.channel.name, !1])
                }) : Q.streamUrl.then(function(e) {
                    X = !0, Be("loadStream", [e, I, !0])
                })) : void 0
            }, i.getReadyState = function() {
                return T
            }, i.getSeeking = function() {
                return R
            }, i.getCurrentTime = function() {
                return g.extrapolateTimeStamp()
            }, i.setCurrentTime = function(e) {
                Y = !1, Ve(), Re(e), Be("videoSeek", [e])
            }, i.getDuration = function() {
                return D
            }, i.getPaused = function() {
                return x
            }, i.getEnded = function() {
                return K ? Y : K
            }, i.play = function() {
                Y && K && M && i.setCurrentTime(0), x = !1, l.emit(y.PLAY);
                var e = function() {
                    Q.streamUrl.then(function(e) {
                        Be("setStreamURI", [e]), Be("playVideo")
                    })
                };
                X ? e() : i.load().then(e())
            }, i.pause = function() {
                Be("pauseVideo")
            }, i.getVolume = function() {
                return V
            }, i.setVolume = function(e) {
                e > 0 && (U = e), Be("setVolume", [e])
            }, i.getMuted = function() {
                var e = i.getVolume();
                return 0 === e
            }, i.setMuted = function(e) {
                var t = e ? 0 : U || .5;
                i.setVolume(t)
            }, i.getVideoInfo = function() {
                return He("getVideoInfo") || {}
            }, i.getChannel = function() {
                return I || L
            }, i.setChannel = function(e, n) {
                Q = n, I = e, N = null, t.autoplay || C > S.NETWORK_EMPTY ? i.load() : i.pause()
            }, i.getVideo = function() {
                return N || M
            }, i.setVideo = function(e, n) {
                Q = n, N = e, I = null, t.autoplay || C > S.NETWORK_EMPTY ? i.load() : i.pause()
            }, i.getQuality = function() {
                return B || ""
            }, i.setQuality = function(e) {
                B = e, Be("setQuality", [e])
            }, i.getQualities = function() {
                return H || []
            }, i.getStatsEnabled = function() {
                return J
            }, i.setStatsEnabled = function(e) {
                J = e, Be(J ? "startPlaybackStatistics" : "stopPlaybackStatistics")
            }, i.getStats = function() {
                return q
            }, i.getBackend = function() {
                return "flash"
            }, i.getVersion = function() {
                return He("getVersion")
            }, i.isSpectre = function() {
                return Z
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
                return $
            }, i.destroy = function() {
                Ve(), v.removeSWF(W), G = null
            }, ee()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
            function e(e, t) {
                var n = [],
                    i = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
                } catch (u) {
                    r = !0, o = u
                } finally {
                    try {
                        !i && s["return"] && s["return"]()
                    } finally {
                        if (r) throw o
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
        t.BackendFlash = o;
        var s = n(213),
            u = r(s),
            l = n(54),
            c = r(l),
            d = n(183),
            f = n(214),
            p = n(94),
            h = n(168),
            v = i(h),
            g = n(59),
            m = i(g),
            _ = n(184),
            y = i(_),
            b = n(58),
            E = i(b),
            w = n(215),
            k = i(w),
            T = n(185),
            S = i(T),
            C = n(186),
            O = i(C),
            A = n(148),
            P = n(203),
            j = 250;
        o.map = {}, o.counter = 0, o.canPlay = function() {
            return v.hasFlashPlayerVersion("10.2")
        }, window._BackendFlash_emitEvents = function(e, t) {
            for (var n = o.map[e], i = 0; i < t.length; i++) {
                var r = t[i];
                n._emitEvent(r.event, r.data)
            }
        }
    }, function(e, t, n) {
        function i(e) {
            return "number" == typeof e && o(e)
        }
        var r = n(23),
            o = r.isFinite;
        e.exports = i
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
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.AD_DISPLAY_STARTED = "adDisplayStarted", t.AD_DISPLAY_ENDED = "adDisplayEnded", t.AD_REQUEST = "adRequested", t.AD_REQUEST_DECLINED = "adRequestDeclined", t.AD_REQUEST_RESPONSE = "adRequestResponse", t.AD_REQUEST_ERROR = "adRequestError", t.AD_ERROR = "adError", t.COMPANION_RENDERED = "adCompanionRendered"
    }, function(e, t, n) {
        e.exports = n.p + "vendor/TwitchPlayer.9913eac82efd992233d8a6e410c38f8a.swf"
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            var n = this,
                i = void 0,
                r = void 0,
                o = void 0,
                a = void 0,
                l = void 0,
                d = void 0,
                f = function() {
                    i = new s["default"], r = document.createElement("video"), r.autoplay = t.autoplay, o = new u.AdapterMse(r), i.emit(c.PLAYER_INIT)
                };
            n.attach = function(e) {
                e.appendChild(r)
            }, n.detach = function(e) {
                e.removeChild(r)
            }, n.destroy = function() {
                o.destroy()
            }, n.addEventListener = function(e, t) {
                i.on(e, t), r.addEventListener(e, t)
            }, n.removeEventListener = function(e, t) {
                i.off(e, t), r.removeEventListener(e, t)
            }, n.getNetworkProfile = function() {
                return []
            }, n.getError = function() {
                return r.error
            }, n.getSrc = function() {
                return a
            }, n.setSrc = function(e) {
                a = e, a && n.load()
            }, n.getCurrentSrc = function() {
                return a
            }, n.getNetworkState = function() {
                return r.networkState
            }, n.getBuffered = function() {
                return r.buffered
            }, n.load = function() {
                o.load(a)
            }, n.getReadyState = function() {
                return r.readyState
            }, n.getSeeking = function() {
                return r.seeking
            }, n.getCurrentTime = function() {
                return r.currentTime
            }, n.setCurrentTime = function(e) {
                r.currentTime = e
            }, n.getDuration = function() {
                return r.duration
            }, n.getPaused = function() {
                return r.paused
            }, n.getEnded = function() {
                return r.ended
            }, n.getAutoplay = function() {
                return r.autoplay
            }, n.setAutoplay = function(e) {
                r.autoplay = e
            }, n.play = function() {
                r.play()
            }, n.pause = function() {
                r.pause()
            }, n.getPaused = function() {
                return r.paused
            }, n.setCurrentTime = function(e) {
                r.currentTime = e
            }, n.getVolume = function() {
                return r.volume
            }, n.setVolume = function(e) {
                r.volume = e
            }, n.getMuted = function() {
                return r.muted
            }, n.setMuted = function(e) {
                r.muted = e
            }, n.getDefaultMuted = function() {
                return r.defaultMuted
            }, n.setDefaultMuted = function(e) {
                r.defaultMuted = e
            }, n.getQuality = function() {
                return o.getQuality()
            }, n.setQuality = function(e) {
                return o.setQuality(e)
            }, n.getQualities = function() {
                return o.getQualities()
            }, n.getChannel = function() {
                return l
            }, n.setChannel = function(e, t) {
                l = e, d = null, t.streamUrl.then(function(e) {
                    n.setSrc(e), i.emit(c.LOADED_CHANNEL)
                })
            }, n.getVideo = function() {
                return d
            }, n.setVideo = function(e, t) {
                d = e, l = null, t.streamUrl.then(function(e) {
                    n.setSrc(e), i.emit(c.LOADED_VIDEO)
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
            }, n.getStatsEnabled = function() {}, n.setStatsEnabled = function() {}, n.getCaption = function() {}, n.getVideoInfo = function() {}, n.getBackend = function() {
                return "mse"
            }, n.getVersion = function() {}, n.isSpectre = function() {
                return !1
            }, n.getInitialTime = function() {
                return r.initialTime
            }, n.getSeekable = function() {
                return r.seekable
            }, n.getControls = function() {
                return !1
            }, n.setControls = function() {}, n.getLoop = function() {
                return r.loop
            }, n.setLoop = function() {}, n.getDefaultPlaybackRate = function() {
                return r.defaultPlaybackRate
            }, n.setDefaultPlaybackRate = function() {}, n.getPlaybackRate = function() {
                return r.playbackRate
            }, n.setPlaybackRate = function() {}, n.getPlayed = function() {
                return r.played
            }, n.getPreload = function() {
                return "auto"
            }, n.setPreload = function() {}, n.getStartOffsetTime = function() {
                return r.startOffsetTime
            }, f()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.BackendMse = o;
        var a = n(54),
            s = r(a),
            u = n(218),
            l = n(58),
            c = i(l);
        o.canPlay = function() {
            return u.AdapterMse.canPlay()
        }
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e) {
            var t = this,
                n = void 0,
                i = void 0,
                o = void 0,
                a = {},
                s = function() {
                    i = r.loadScript().then(u)
                },
                u = function() {
                    return n = new Hls, n.onWrite(d), n.onComplete(f), o = new MediaSource, e.addEventListener("progress", g), e.src = window.URL.createObjectURL(o), n
                },
                l = function() {
                    for (var e in a) {
                        var t = a[e];
                        o.removeSourceBuffer(t.buffer)
                    }
                    a = {}
                },
                c = function() {
                    o = new MediaSource, e.src = window.URL.createObjectURL(o), a = {}
                },
                d = function(e, t) {
                    var n = a[e];
                    n || (n = {}, n.queue = [], n.buffer = o.addSourceBuffer(e), n.buffer.mode = "segments", n.buffer.addEventListener("updateend", function() {
                        p(n)
                    }), a[e] = n);
                    var i = h(n, t);
                    if (!i) {
                        var r = new Uint8Array(t);
                        n.queue.push(r)
                    }
                },
                f = function() {
                    c()
                },
                p = function(e) {
                    if (!e.queue.length) return void v(e);
                    var t = e.queue.shift();
                    h(e, t) || e.queue.unshift(t)
                },
                h = function(e, t) {
                    return "ended" === o.readyState ? !0 : "closed" === o.readyStart ? !1 : e.queue.length ? !1 : e.buffer.updating ? !1 : (e.buffer.appendBuffer(t), !0)
                },
                v = function(t) {
                    if (t.buffer || !t.buffer.updating) {
                        var n = e.currentTime - 10;
                        e.buffered.length > 0 && e.buffered.start(0) < n && t.buffer.remove(0, n)
                    }
                },
                g = function() {
                    if (0 !== e.buffered.length)
                        for (var t = e.currentTime, n = e.buffered, i = 0; i < n.length; i++) {
                            var r = n.start(i);
                            if (r > t) {
                                console.warn("seeking ahead " + (r - t) + " seconds"), e.currentTime = r;
                                break
                            }
                            var o = n.end(i);
                            if (o >= t) break
                        }
                },
                m = null,
                _ = function y() {
                    var e = n.perform();
                    0 > e && (e = 1e3), e >= 0 && (clearTimeout(m), m = setTimeout(y, e))
                };
            t.destroy = function() {
                clearTimeout(m), m = null, l(), o.endOfStream(), o = null, a = {}, n.free(), n = null
            }, t.load = function(e) {
                i.then(function() {
                    n.load(e), _()
                })
            }, t.getQuality = function() {
                return n ? n.getQuality() : void 0
            }, t.setQuality = function(e) {
                i.then(function() {
                    n.setQuality(e)
                })
            }, t.getQualities = function() {
                return n ? n.getQualities() : void 0
            }, s()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.AdapterMse = r;
        var o = n(95),
            a = i(o);
        r.loadScript = (0, a["default"])(function() {
            return new Promise(function(e) {
                n.e(1, function() {
                    e(n(219))
                })
            })
        }), r.canPlay = function() {
            var e = 'video/mp4; codecs="avc1.42E01E,mp4a.40.2"';
            return window.MediaSource && MediaSource.isTypeSupported(e)
        }
    }, , , , function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.BackendMseDevelopment = void 0;
        var o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            a = n(54),
            s = i(a),
            u = n(58),
            l = t.BackendMseDevelopment = function() {
                function e(t) {
                    var n = this,
                        i = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                    r(this, e), this.events = new s["default"], this.video = document.createElement("video"), this.video.autoplay = i.autoplay, this.loadPlayerCore().then(function(e) {
                        n._initPlayerCore(e)
                    })
                }
                return o(e, [{
                    key: "_initPlayerCore",
                    value: function(e) {
                        this.events.emit(u.PLAYER_INIT), this.core = new e, this.core.attachMedia(this.video), this.core.addEventListener(e.Event.HLS_MASTER_PARSED, this.onHLSMasterParsed.bind(this)), this.core.addEventListener(e.Event.HLS_VARIANT_PARSED, this.onHLSVariantParsed.bind(this)), this.core.addEventListener(e.Event.VARIANT_SWITCH_REQUESTED, this.onVariantSwitchRequested.bind(this)), this.core.addEventListener(e.Event.SEGMENT_CHANGED, this.onSegmentChanged.bind(this)), this.core.addEventListener(e.Event.CAPTION, this.onCaption.bind(this)),
                            this.core.addEventListener(e.Event.ERROR, this.onError.bind(this)), this.pendingQuality && this.setQuality(this.pendingQuality), this.video.autoplay && this.load()
                    }
                }, {
                    key: "onHLSMasterParsed",
                    value: function() {
                        var e = !1;
                        this.events.emit(u.IS_SPECTRE, e)
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
                        var t = {
                            name: e.ID3[3].info[0]
                        };
                        this.events.emit(u.SEGMENT_CHANGE, t)
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
                        this.channel = e, this.videoId = null, t.streamUrl.then(function(e) {
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
                        this.video.paused ? this.load() : this.video.play()
                    }
                }, {
                    key: "pause",
                    value: function() {
                        this.video.pause()
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
                    key: "destroy",
                    value: function() {}
                }, {
                    key: "loadPlayerCore",
                    value: function() {
                        return new Promise(function(e) {
                            n.e(2, function(t) {
                                e(n(223))
                            })
                        })
                    }
                }]), e
            }();
        l.canPlay = function() {
            var e = 'video/mp4; codecs="avc1.42E01E,mp4a.40.2"';
            return window.MediaSource && MediaSource.isTypeSupported(e)
        }
    }, , , , , , , function(e, t) {
        function n() {
            l = !1, a.length ? u = a.concat(u) : c = -1, u.length && i()
        }

        function i() {
            if (!l) {
                var e = setTimeout(n);
                l = !0;
                for (var t = u.length; t;) {
                    for (a = u, u = []; ++c < t;) a && a[c].run();
                    c = -1, t = u.length
                }
                a = null, l = !1, clearTimeout(e)
            }
        }

        function r(e, t) {
            this.fun = e, this.array = t
        }

        function o() {}
        var a, s = e.exports = {},
            u = [],
            l = !1,
            c = -1;
        s.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            u.push(new r(e, t)), 1 !== u.length || l || setTimeout(i, 0)
        }, r.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.version = "", s.versions = {}, s.on = o, s.addListener = o, s.once = o, s.off = o, s.removeListener = o, s.removeAllListeners = o, s.emit = o, s.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, s.cwd = function() {
            return "/"
        }, s.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, s.umask = function() {
            return 0
        }
    }, , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
        "use strict";

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            var n = this,
                i = void 0,
                r = void 0,
                o = void 0,
                a = void 0,
                s = function() {
                    i = new l["default"], r = document.createElement("video"), r.autoplay = t.autoplay, i.emit(p.PLAYER_INIT)
                };
            n.attach = function(e) {
                $(e).append(r), r.addEventListener(v, function() {
                    null !== r.error && (r.error.code === r.error.MEDIA_ERR_SRC_NOT_SUPPORTED ? (i.emit(p.OFFLINE), i.emit(d.ENDED)) : i.emit(v))
                }), r.addEventListener(h, function() {
                    i.emit(p.IS_SPECTRE, n.isSpectre())
                })
            }, n.destroy = function() {}, n.addEventListener = function(e, t) {
                e !== v && r.addEventListener(e, t), i.on(e, t)
            }, n.removeEventListener = function(e, t) {
                r.removeEventListener(e, t), i.off(e, t)
            }, n.getNetworkProfile = function() {
                return []
            }, n.getError = function() {
                return null !== r.error && r.error.code !== r.error.MEDIA_ERR_SRC_NOT_SUPPORTED ? r.error : null
            }, n.getSrc = function() {
                return r.src
            }, n.setSrc = function(e) {
                r.src = e
            }, n.getCurrentSrc = function() {
                return r.currentSrc
            }, n.getNetworkState = function() {
                return r.networkState
            }, n.getPreload = function() {
                return r.preload
            }, n.setPreload = function(e) {
                r.preload = e
            }, n.getBuffered = function() {
                return r.buffered
            }, n.load = function() {
                r.load()
            }, n.getReadyState = function() {
                return r.readyState
            }, n.getSeeking = function() {
                return r.seeking
            }, n.getCurrentTime = function() {
                return r.currentTime
            }, n.setCurrentTime = function(e) {
                r.currentTime = e
            }, n.getInitialTime = function() {
                return r.initialTime
            }, n.getDuration = function() {
                return r.duration
            }, n.getStartOffsetTime = function() {
                return r.startOffsetTime
            }, n.getPaused = function() {
                return r.paused
            }, n.getDefaultPlaybackRate = function() {
                return r.defaultPlaybackRate
            }, n.setDefaultPlaybackRate = function(e) {
                r.defaultPlaybackRate = e
            }, n.getPlaybackRate = function() {
                return r.playbackRate
            }, n.setPlaybackRate = function(e) {
                r.playbackRate = e
            }, n.getPlayed = function() {
                return r.played
            }, n.getSeekable = function() {
                return r.seekable
            }, n.getEnded = function() {
                return r.ended || null !== r.error && r.error.code === r.error.MEDIA_ERR_SRC_NOT_SUPPORTED
            }, n.getAutoplay = function() {
                return r.autoplay
            }, n.setAutoplay = function(e) {
                r.autoplay = e
            }, n.getLoop = function() {
                return r.loop
            }, n.setLoop = function(e) {
                r.loop = e
            }, n.play = function() {
                r.play()
            }, n.pause = function() {
                r.pause()
            }, n.getControls = function() {
                return !1
            }, n.setControls = function() {}, n.getVolume = function() {
                return r.volume
            }, n.setVolume = function(e) {
                r.volume = e
            }, n.getMuted = function() {
                return r.muted
            }, n.setMuted = function(e) {
                r.muted = e
            }, n.getDefaultMuted = function() {
                return r.defaultMuted
            }, n.setDefaultMuted = function(e) {
                r.defaultMuted = e
            }, n.getChannel = function() {
                return o
            }, n.setChannel = function(e, t) {
                o = e, a = null, t.streamUrl.then(function(e) {
                    n.setSrc(e), i.emit(p.LOADED_CHANNEL)
                })
            }, n.getVideo = function() {
                return a
            }, n.setVideo = function(e, t) {
                a = e, o = null, t.streamUrl.then(function(e) {
                    n.setSrc(e), i.emit(p.LOADED_VIDEO)
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
            }, n.getStatsEnabled = function() {}, n.setStatsEnabled = function() {}, n.getVideoInfo = function() {}, n.getCaption = function() {}, n.getBackend = function() {
                return "hls_fallback"
            }, n.getVersion = function() {}, n.isSpectre = function() {
                return !1
            }, s()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.BackendHls = o;
        var a = n(13),
            s = r(a),
            u = n(54),
            l = r(u),
            c = n(184),
            d = i(c),
            f = n(58),
            p = i(f),
            h = "loadedmetadata",
            v = "error";
        o.canPlay = function() {
            var e = document.createElement("video");
            return (0, s["default"])(e.canPlayType) ? e.canPlayType("application/vnd.apple.mpegURL") : !1
        }
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            var n, i = this,
                r = new d["default"],
                o = [],
                a = [e, t],
                u = {},
                c = function() {
                    n = e.getReadyState() >= e.HAVE_CURRENT_DATA && !e.getEnded() ? e : t, e.addEventListener(v.CAN_PLAY, function() {
                        n !== e && _(t, e)
                    }), e.addEventListener(v.ENDED, function() {
                        n === e && _(e, t)
                    }), a.forEach(function(e) {
                        p.allEvents.forEach(function(t) {
                            e.addEventListener(t, function() {
                                var n = Array.prototype.slice.call(arguments);
                                f(e, t, n)
                            })
                        })
                    })
                },
                f = function(i, r, a) {
                    a.unshift(r), (r !== v.ENDED || i !== e || t.getEnded()) && (n === i ? g(a) : o.push(a))
                },
                h = function() {
                    o.forEach(function(e) {
                        g(e)
                    }), o = []
                },
                g = function(e) {
                    var t = e[0],
                        n = [v.LOADSTART],
                        i = !1;
                    (0, l["default"])(n, t) && (i = (0, s["default"])(u, t), u[t] = !0), i || (t === v.ENDED && (u = []), r.emit.apply(r, e))
                },
                _ = function(e, t) {
                    e.pause(), n = t, h(), e.getDuration() !== t.getDuration() && r.emit(v.DURATION_CHANGE), e.getCurrentTime() !== t.getCurrentTime() && r.emit(v.TIME_UPDATE), e.getBuffered() !== t.getBuffered() && r.emit(m.BUFFER_CHANGE), e.getQuality() !== t.getQuality() && r.emit(m.QUALITY_CHANGE), e.getQualities() !== t.getQualities() && r.emit(m.QUALITIES_CHANGE), t.play()
                };
            i.destroy = function() {
                e.destroy(), t.destroy()
            }, i.addEventListener = function(e, t) {
                r.on(e, t)
            }, i.removeEventListener = function(e, t) {
                r.off(e, t)
            }, i.getNetworkProfile = function() {
                return n.getNetworkProfile()
            }, i.getError = function() {
                return n.getError()
            }, i.getSrc = function() {
                return n.getSrc()
            }, i.setSrc = function(e) {
                a.forEach(function(t) {
                    t.setSrc(e)
                })
            }, i.getCurrentSrc = function() {
                return n.getCurrentSrc()
            }, i.getNetworkState = function() {
                return n.getNetworkState()
            }, i.getPreload = function() {
                return n.getPreload()
            }, i.setPreload = function(e) {
                a.forEach(function(t) {
                    t.setPreload(e)
                })
            }, i.getBuffered = function() {
                return n.getBuffered()
            }, i.load = function() {
                n.load()
            }, i.getReadyState = function() {
                return n.getReadyState()
            }, i.getSeeking = function() {
                return n.getSeeking()
            }, i.getCurrentTime = function() {
                return n.getCurrentTime()
            }, i.setCurrentTime = function(e) {
                a.forEach(function(t) {
                    return t.setCurrentTime(e)
                })
            }, i.getInitialTime = function() {
                return n.getCurrentTime()
            }, i.getDuration = function() {
                return n.getDuration()
            }, i.getStartOffsetTime = function() {
                return n.getStartOffsetTime()
            }, i.getPaused = function() {
                return n.getPaused()
            }, i.getDefaultPlaybackRate = function() {
                return n.getDefaultPlaybackRate()
            }, i.setDefaultPlaybackRate = function(e) {
                a.forEach(function(t) {
                    t.setDefaultPlaybackRate(e)
                })
            }, i.getPlaybackRate = function() {
                return n.getPlaybackRate()
            }, i.setPlaybackRate = function(e) {
                a.forEach(function(t) {
                    return t.setPlaybackRate(e)
                })
            }, i.getPlayed = function() {
                return n.getPlayed()
            }, i.getSeekable = function() {
                return n.getSeekable()
            }, i.getEnded = function() {
                return n.getEnded()
            }, i.getAutoplay = function() {
                return n.getAutoplay()
            }, i.setAutoplay = function(e) {
                a.forEach(function(t) {
                    t.setAutoplay(e)
                })
            }, i.getLoop = function() {
                return n.getLoop()
            }, i.setLoop = function(e) {
                a.forEach(function(t) {
                    t.setLoop(e)
                })
            }, i.play = function() {
                n.play()
            }, i.pause = function() {
                n.pause()
            }, i.getControls = function() {
                return n.getControls()
            }, i.setControls = function(e) {
                a.forEach(function(t) {
                    t.setControls(e)
                })
            }, i.getVolume = function() {
                return n.getVolume()
            }, i.setVolume = function(e) {
                a.forEach(function(t) {
                    t.setVolume(e)
                })
            }, i.getMuted = function() {
                return n.getMuted()
            }, i.setMuted = function(e) {
                a.forEach(function(t) {
                    t.setMuted(e)
                })
            }, i.getDefaultMuted = function() {
                return n.getDefaultMuted()
            }, i.setDefaultMuted = function(e) {
                a.forEach(function(t) {
                    t.setDefaultMuted(e)
                })
            }, i.getQuality = function() {
                return n.getQuality()
            }, i.setQuality = function(e) {
                a.forEach(function(t) {
                    t.setQuality(e)
                })
            }, i.getQualities = function() {
                return n.getQualities()
            }, i.getChannel = function() {
                return n.getChannel()
            }, i.setChannel = function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                u = {}, a.forEach(function(n) {
                    n.setChannel(e, t)
                })
            }, i.getVideo = function() {
                return n.getVideo()
            }, i.getBackend = function() {
                return n.getBackend()
            }, i.setVideo = function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                u = {}, a.forEach(function(n) {
                    n.setVideo(e, t)
                })
            }, i.getStats = function() {
                return n.getStats()
            }, i.getStatsEnabled = function() {
                return n.getStatsEnabled()
            }, i.setStatsEnabled = function(e) {
                a.forEach(function(t) {
                    t.setStatsEnabled(e)
                })
            }, i.getVideoInfo = function() {
                return n.getVideoInfo()
            }, i.isSpectre = function() {
                return n.isSpectre()
            }, i.getCaption = function() {
                return n.getCaption()
            }, c()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.BackendMulti = o;
        var a = n(252),
            s = r(a),
            u = n(35),
            l = r(u),
            c = n(54),
            d = r(c),
            f = n(59),
            p = i(f),
            h = n(184),
            v = i(h),
            g = n(58),
            m = i(g)
    }, function(e, t, n) {
        function i(e, t) {
            return o(e, t, r)
        }
        var r = n(42),
            o = n(137);
        e.exports = i
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t, n) {
            var i = this,
                r = new d["default"],
                o = void 0,
                a = void 0,
                u = void 0,
                c = void 0,
                v = void 0,
                m = void 0,
                y = void 0,
                E = void 0,
                w = function() {
                    f.BackendIMAFlash.canPlay() ? (a = f.BackendIMAFlash, u = "ima_flash") : p.BackendIMAHtml5.canPlay() ? (a = p.BackendIMAHtml5, u = "ima_html5") : (a = null, u = "unsupported"), a && k()
                },
                k = function A() {
                    var t = new a(e, n);
                    t.addEventListener(b.ENDED, function() {
                        t.setSrc("")
                    }), t.addEventListener(b.ERROR, function() {
                        o.setSrc(""), a === f.BackendIMAFlash && p.BackendIMAHtml5.canPlay() && (a = p.BackendIMAHtml5, u = "ima_html5_failover", A(), i.requestAds(m, y))
                    }), g.allEvents.forEach(function(e) {
                        t.addEventListener(e, function() {
                            r.emit(e)
                        })
                    }), t.addEventListener(b.LOADED_DATA, function() {
                        O("video_ad_request_response", {
                            playlist_length: t.getPlaylistLength(),
                            time_break: t.getPlaylistDuration(),
                            time_break_requested: y
                        })
                    }), t.addEventListener("adstart", function() {
                        var e = t.getAdInfo();
                        O("video_ad_impression", e)
                    }), t.addEventListener("adend", function() {
                        var e = t.getAdInfo();
                        O("video_ad_impression_complete", e)
                    }), t.addEventListener(b.ERROR, function() {
                        var e = t.getAdInfo();
                        e ? O("video_ad_impression_timeout", e) : O("video_ad_request_error", {
                            time_break: y
                        })
                    }), o && (T(o, t), o.destroy()), o = t
                },
                T = function(e, t) {
                    t.setPreload(e.getPreload()), t.setDefaultPlaybackRate(e.getDefaultPlaybackRate()), t.setPlaybackRate(e.getPlaybackRate()), t.setAutoplay(e.getAutoplay()), t.setLoop(e.getLoop()), t.setControls(e.getControls()), t.setVolume(e.getVolume()), t.setMuted(e.getMuted()), t.setDefaultMuted(e.getDefaultMuted()), t.setQuality(e.getQuality()), e.getChannel() ? t.setChannel(e.getChannel()) : t.setVideo(e.getVideo()), t.setSrc(e.getSrc())
                },
                S = function(e, t) {
                    var n, i = o.getChannel();
                    if (i) n = Promise.resolve(i);
                    else {
                        var r = o.getVideo();
                        n = (0, h.videoInfo)(r).then(function(e) {
                            return e.channel
                        }, function() {
                            return ""
                        })
                    }
                    var a = n.then(function(e) {
                        return e ? (0, h.channelInfo)(e).then(null, function() {
                            return {}
                        }) : {}
                    });
                    return a.then(function(n) {
                        return C(e, t, n)
                    })
                },
                C = function(e) {
                    var t, n = arguments.length <= 1 || void 0 === arguments[1] ? 30 : arguments[1],
                        i = arguments[2],
                        r = g.doubleClickUrl;
                    "preroll" === e ? t = 1 : "midroll" === e ? t = 2 : "postroll" === e && (t = 3);
                    var o = {
                        partner: i.partner,
                        noAd: !1,
                        game: i.game,
                        chan: i.name,
                        embed: !1,
                        playerType: "site",
                        mature: i.mature,
                        pos: t,
                        timebreak: n
                    };
                    window.Krux && (o.kuid = window.Krux.user);
                    var a = (0, l["default"])(o, function(e, t) {
                            return t + "=" + e
                        }).join("&"),
                        s = {
                            iu: "/3576121/twitch/channels/" + i.name,
                            ciu_szs: "300x250",
                            sz: "640x480",
                            impl: "s",
                            gdfp_req: "1",
                            env: "vp",
                            output: "vast",
                            cust_params: a,
                            unviewed_position_start: "1",
                            url: window.location.href,
                            correlator: (new Date).getTime() / 1e3
                        };
                    return r + "?" + $.param(s)
                };
            i.requestAds = function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? 30 : arguments[1];
                if (m = e, y = t, E = _.generate(), O("video_ad_request", {
                        time_break: y
                    }), !o) return void O("video_ad_request_error", {
                    time_break: y
                });
                var n = S(e, t);
                n.then(function(e) {
                    o.setSrc(e)
                })
            };
            var O = function(e, n) {
                var i = (0, s["default"])({}, n, {
                    ad_session_id: E,
                    ad_backend: u,
                    roll_type: m
                });
                t.trackEvent(e, i)
            };
            i.addEventListener = function(e, t) {
                r.on(e, t)
            }, i.removeEventListener = function(e, t) {
                r.off(e, t)
            }, i.destroy = function() {
                o.destroy()
            }, i.getError = function() {
                return o.getError()
            }, i.getSrc = function() {
                return o.getSrc()
            }, i.setSrc = function(e) {
                o.setSrc(e)
            }, i.getCurrentSrc = function() {
                return o.getCurrentSrc()
            }, i.getNetworkState = function() {
                return o.getNetworkState()
            }, i.getPreload = function() {
                return o.getPreload()
            }, i.setPreload = function(e) {
                o.setPreload(e)
            }, i.getBuffered = function() {
                return o.getBuffered()
            }, i.load = function() {
                o.load()
            }, i.getReadyState = function() {
                return o.getReadyState()
            }, i.getSeeking = function() {
                return o.getSeeking()
            }, i.getCurrentTime = function() {
                return o.getCurrentTime()
            }, i.setCurrentTime = function(e) {
                o.setCurrentTime(e)
            }, i.getInitialTime = function() {
                return o.getInitialTime()
            }, i.getDuration = function() {
                return o.getDuration()
            }, i.getStartOffsetTime = function() {
                return o.getStartOffsetTime()
            }, i.getPaused = function() {
                return o.getPaused()
            }, i.getDefaultPlaybackRate = function() {
                return o.getDefaultPlaybackRate()
            }, i.setDefaultPlaybackRate = function(e) {
                o.setDefaultPlaybackRate(e)
            }, i.getPlaybackRate = function() {
                return o.getPlaybackRate()
            }, i.setPlaybackRate = function(e) {
                o.setPlaybackRate(e)
            }, i.getPlayed = function() {
                return o.getPlayed()
            }, i.getSeekable = function() {
                return o.getSeekable()
            }, i.getEnded = function() {
                return o.getEnded()
            }, i.getAutoplay = function() {
                return o.getAutoplay()
            }, i.setAutoplay = function(e) {
                o.setAutoplay(e)
            }, i.getLoop = function() {
                return o.getLoop()
            }, i.setLoop = function(e) {
                o.setLoop(e)
            }, i.play = function() {
                o.play()
            }, i.pause = function() {
                o.pause()
            }, i.getControls = function() {
                return o.getControls()
            }, i.setControls = function(e) {
                o.setControls(e)
            }, i.getVolume = function() {
                return o.getVolume()
            }, i.setVolume = function(e) {
                o.setVolume(e)
            }, i.getMuted = function() {
                return o.getMuted()
            }, i.setMuted = function(e) {
                o.setMuted(e)
            }, i.getDefaultMuted = function() {
                return o.getDefaultMuted()
            }, i.setDefaultMuted = function(e) {
                o.setDefaultMuted(e)
            }, i.getQuality = function() {
                return o.getQuality()
            }, i.setQuality = function(e) {
                o.setQuality(e)
            }, i.getQualities = function() {
                return o.getQualities()
            }, i.getChannel = function() {
                return c
            }, i.setChannel = function(e) {
                c = e, o && o.setChannel(e)
            }, i.getVideo = function() {
                return v
            }, i.setVideo = function(e) {
                v = e, o && o.setVideo(e)
            }, i.getStats = function() {
                return o.getStats()
            }, i.getStatsEnabled = function() {
                return o.getStatsEnabled()
            }, i.setStatsEnabled = function() {
                return o.setStatsEnabled()
            }, i.getVideoInfo = function() {
                return o.getVideoInfo()
            }, i.getCaption = function() {
                return o.getCaption()
            }, w()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.BackendIMA = o;
        var a = n(50),
            s = r(a),
            u = n(179),
            l = r(u),
            c = n(54),
            d = r(c),
            f = n(254),
            p = n(255),
            h = n(94),
            v = n(59),
            g = i(v),
            m = n(167),
            _ = i(m),
            y = n(184),
            b = i(y);
        o.canPlay = function() {
            return f.BackendIMAFlash.canPlay() || p.BackendIMAHtml5.canPlay()
        }
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            var n = this,
                i = o.counter++;
            o.map[i] = n;
            var r = new s["default"],
                a = void 0,
                u = void 0,
                d = void 0,
                p = void 0,
                v = void 0,
                m = void 0,
                _ = void 0,
                y = void 0,
                b = void 0,
                E = void 0,
                w = void 0,
                k = void 0,
                T = void 0,
                S = void 0,
                C = void 0,
                O = void 0,
                A = function() {
                    r.on(g.PLAYER_INIT, function() {
                        d = !0, a.resolve()
                    }), r.on(h.ERROR, function() {
                        O = N("getError")
                    }), P()
                },
                P = function() {
                    a = new c.Deferred, d = !1, u = null, a.promise.then(null, function(e) {
                        O = e, r.emit(h.ERROR)
                    }), a.promise.then(function() {
                        N("setPreload", [v]), N("setAutoplay", [m]), N("setLoop", [_]), N("setControls", [y]), N("setDefaultPlaybackRate", [b]), N("setPlaybackRate", [E]), N("setVolume", [w]), N("setMuted", [k]), N("setDefaultMuted", [T]), N("setSrc", [p])
                    })
                },
                j = function() {
                    if (!u) {
                        var t = f.playerHost + "/vendor/IMAPlayer.swf",
                            n = "10.2",
                            r = "playerProductInstall.swf",
                            o = "100%",
                            s = "100%",
                            c = {};
                        c.eventCallback = "window._BackendIMAFlash_emitEvent", c.eventCallbackArg = i;
                        var d = {};
                        d.bgcolor = "#000", d.allowscriptaccess = "always", d.allowfullscreen = "true", d.wmode = "transparent";
                        var p = {};
                        p.align = "middle";
                        var h = document.createElement("div");
                        e.appendChild(h);
                        var v = "swfobject-ima-" + i;
                        h.setAttribute("id", v), l.embedSWF(t, v, o, s, n, r, c, d, p, function(e) {
                            e.success ? u = e.ref : a.reject("failed to create flash element")
                        }), setTimeout(function() {
                            a.reject("failed to initialize flash")
                        }, f.flashTimeout)
                    }
                },
                L = function() {
                    u && (e.removeChild(u), P())
                },
                M = function(e) {
                    var n = arguments.length <= 1 || void 0 === arguments[1] ? [] : arguments[1];
                    if (t.debug && console.log("flash ima call:", e, n), !u[e]) return void console.error(e + " is not a valid Flash function");
                    switch (n.length) {
                        case 0:
                            return u[e]();
                        case 1:
                            return u[e](n[0]);
                        case 2:
                            return u[e](n[0], n[1]);
                        default:
                            return console.log("WARNING, too many arguments passed to Flash"), u[e].apply(this, n)
                    }
                },
                I = function(e, t, n) {
                    a.promise.then(function() {
                        var i = N(e, t);
                        n && n(i)
                    })
                },
                N = function(e, n) {
                    if (d) {
                        var i = M(e, n);
                        return i && t.debug && console.log("flash ima return:", e, "=", i), i
                    }
                };
            n.addEventListener = function(e, t) {
                r.on(e, t)
            }, n.removeEventListener = function(e, t) {
                r.off(e, t)
            }, n._emitEvent = function(e) {
                t.debug && console.log("flash ima event:", e), r.emit(e)
            }, n.destroy = function() {
                L()
            }, n.getError = function() {
                return O
            }, n.getSrc = function() {
                return p
            }, n.setSrc = function(e) {
                p = e, e ? j() : L(), N("setSrc", [e])
            }, n.getCurrentSrc = function() {
                return N("getCurrentSrc")
            }, n.getNetworkState = function() {
                return N("getNetworkState")
            }, n.getPreload = function() {
                return v
            }, n.setPreload = function(e) {
                v = e, N("setPreload", [e])
            }, n.getBuffered = function() {
                return N("getBuffered")
            }, n.load = function() {
                I("load")
            }, n.getReadyState = function() {
                return N("getReadyState")
            }, n.getSeeking = function() {
                return N("getSeeking")
            }, n.getCurrentTime = function() {
                return N("getCurrentTime")
            }, n.setCurrentTime = function(e) {
                I("setCurrentTime", [e])
            }, n.getInitialTime = function() {
                return N("getInitialTime")
            }, n.getDuration = function() {
                return N("getDuration")
            }, n.getStartOffsetTime = function() {
                return N("getStartOffsetTime")
            }, n.getPaused = function() {
                return N("getPaused")
            }, n.getDefaultPlaybackRate = function() {
                return b
            }, n.setDefaultPlaybackRate = function(e) {
                b = e, N("setDefaultPlaybackRate", [e])
            }, n.getPlaybackRate = function() {
                return E
            }, n.setPlaybackRate = function(e) {
                E = e, N("setPlaybackRate", [e])
            }, n.getPlayed = function() {
                return N("getPlayed")
            }, n.getSeekable = function() {
                return N("getSeekable")
            }, n.getEnded = function() {
                return N("getEnded")
            }, n.getAutoplay = function() {
                return m
            }, n.setAutoplay = function(e) {
                m = e, N("setAutoplay", [e])
            }, n.getLoop = function() {
                return _
            }, n.setLoop = function(e) {
                _ = e, N("setLoop", [e])
            }, n.play = function() {
                I("play")
            }, n.pause = function() {
                I("pause")
            }, n.getControls = function() {
                return y
            }, n.setControls = function(e) {
                y = e, N("setControls", [e])
            }, n.getVolume = function() {
                return w
            }, n.setVolume = function(e) {
                w = e, N("setVolume", [e])
            }, n.getMuted = function() {
                return k
            }, n.setMuted = function(e) {
                k = e, N("setMuted", [e])
            }, n.getDefaultMuted = function() {
                return T
            }, n.setDefaultMuted = function(e) {
                T = e, N("setDefaultMuted", [e])
            }, n.getQuality = function() {
                return "auto"
            }, n.setQuality = function() {}, n.getQualities = function() {
                return ["auto"]
            }, n.getChannel = function() {
                return S
            }, n.setChannel = function(e) {
                S = e, C = null
            }, n.getVideo = function() {
                return C
            }, n.setVideo = function(e) {
                S = null, C = e
            }, n.getStats = function() {}, n.getStatsEnabled = function() {}, n.setStatsEnabled = function() {}, n.getCaption = function() {}, n.getPlaylistLength = function() {
                return N("getPlaylistLength")
            }, n.getPlaylistDuration = function() {
                return N("getPlaylistDuration")
            }, n.getAdInfo = function() {
                return N("getAdInfo")
            }, A()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.BackendIMAFlash = o;
        var a = n(54),
            s = r(a),
            u = n(168),
            l = i(u),
            c = n(183),
            d = n(59),
            f = i(d),
            p = n(184),
            h = i(p),
            v = n(58),
            g = i(v);
        o.map = {}, o.counter = 0, o.canPlay = function() {
            return l.hasFlashPlayerVersion("10.2")
        }, window._BackendIMAFlash_emitEvent = function(e, t) {
            var n = o.map[e];
            n._emitEvent(t)
        }
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e) {
            var t = this,
                n = new a["default"],
                i = document.createElement("video"),
                r = void 0,
                o = void 0,
                s = void 0,
                u = void 0,
                l = void 0,
                c = void 0,
                d = void 0,
                f = void 0,
                p = void 0,
                h = void 0,
                v = void 0,
                g = void 0,
                m = void 0,
                _ = void 0,
                y = void 0,
                b = void 0,
                E = void 0,
                w = void 0,
                k = function() {
                    c = !0, l = !1, v = t.NETWORK_EMPTY, g = t.HAVE_NOTHING
                },
                T = function() {
                    if (!m) {
                        m = new google.ima.AdDisplayContainer(e, i), m.initialize(), _ = new google.ima.AdsLoader(m), _.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, O, !1), _.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, A, !1);
                        var t = _.getSettings();
                        t.setAutoPlayAdBreaks(!1), t.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.DISABLED)
                    }
                },
                S = function() {
                    m && (m.destroy(), _.destroy(), m = null, _ = null)
                },
                C = function() {
                    var t = new google.ima.AdsRequest;
                    t.adTagUrl = f, t.setAdWillAutoPlay(!0), t.linearAdSlotWidth = e.offsetWidth, t.linearAdSlotHeight = e.offsetHeight, t.nonLinearAdSlotWidth = e.offsetWidth, t.nonLinearAdSlotHeight = e.offsetHeight, _.requestAds(t)
                },
                O = function(e) {
                    y && y.destroy(), y = e.getAdsManager(i), y.setVolume(o ? 0 : r), y.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, A), y.addEventListener(google.ima.AdEvent.Type.AD_BREAK_READY, P), y.addEventListener(google.ima.AdEvent.Type.AD_METADATA, j), y.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, L), y.addEventListener(google.ima.AdEvent.Type.COMPLETE, M), y.addEventListener(google.ima.AdEvent.Type.LOADED, R), y.addEventListener(google.ima.AdEvent.Type.LOG, D), y.addEventListener(google.ima.AdEvent.Type.STARTED, V), y.addEventListener(google.ima.AdEvent.Type.IMPRESSION, x), y.addEventListener(google.ima.AdEvent.Type.VOLUME_CHANGED, U), y.addEventListener(google.ima.AdEvent.Type.VOLUME_MUTED, U), y.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, I), y.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, N);
                    try {
                        y.init(-1, -1, google.ima.ViewMode.NORMAL), y.start()
                    } catch (t) {
                        d = t.getMessage(), n.emit("error")
                    }
                },
                A = function(e) {
                    var t = e.getError();
                    d = t.getMessage(), n.emit("error"), y && (y.destroy(), y = null)
                },
                P = function() {},
                j = function() {
                    g = t.HAVE_METADATA, n.emit("loadedmetadata")
                },
                L = function() {
                    h = 0, c = !0, g = t.HAVE_NOTHING, v = t.NETWORK_EMPTY, n.emit("ended"), y.destroy(), y = null
                },
                M = function() {
                    n.emit("adend"), w = {}
                },
                I = function() {},
                N = function() {},
                x = function() {},
                R = function(e) {
                    var i = e.getAd(),
                        r = i.getAdPodInfo();
                    h = i.getDuration(), b = r.getTotalAds(), E = r.getMaxDuration(), w = {
                        ad_id: i.getAdId(),
                        ad_system: i.getAdSystem(),
                        ad_framework: "VAST",
                        video_type: i.getContentType(),
                        video_duration: i.getDuration(),
                        video_linear: i.isLinear(),
                        video_skippable: i.isSkippable(),
                        playlist_length: r.getTotalAds(),
                        playlist_position: r.getAdPosition()
                    }, g < t.HAVE_CURRENT_DATA && (g = t.HAVE_CURRENT_DATA, n.emit("loadeddata"))
                },
                D = function(e) {
                    var t = e.getAdData(),
                        n = t.adError;
                    n && console.warn("non-fatal ad error occurred:", n.getMessage())
                },
                V = function() {
                    g < t.HAVE_FUTURE_DATA && (g = t.HAVE_FUTURE_DATA, n.emit("canplay")), n.emit("adstart"), n.emit("playing")
                },
                U = function() {
                    var e = y.getVolume();
                    e ? r = e : o = !0, n.emit("volumechange")
                };
            t.addEventListener = function(e, t) {
                n.on(e, t)
            }, t.removeEventListener = function(e, t) {
                n.off(e, t)
            }, t.destroy = function() {
                S()
            }, t.getError = function() {
                return d
            }, t.getSrc = function() {
                return f
            }, t.setSrc = function(e) {
                f = e, e ? T() : S(), p && f && t.load()
            }, t.getCurrentSrc = function() {}, t.NETWORK_EMPTY = 0, t.NETWORK_IDLE = 1, t.NETWORK_LOADING = 2, t.NETWORK_NO_SOURCE = 3, t.getNetworkState = function() {
                return v
            }, t.getPreload = function() {}, t.setPreload = function() {}, t.getBuffered = function() {
                return {
                    length: 0
                }
            }, t.load = function() {
                c = !1, C()
            }, t.HAVE_NOTHING = 0, t.HAVE_METADATA = 1, t.HAVE_CURRENT_DATA = 2, t.HAVE_FUTURE_DATA = 3, t.HAVE_ENOUGH_DATA = 4, t.getReadyState = function() {
                return g
            }, t.getSeeking = function() {}, t.getCurrentTime = function() {
                if (h && y) {
                    var e = y.getRemainingTime();
                    return h - e
                }
                return 0
            }, t.setCurrentTime = function() {}, t.getInitialTime = function() {}, t.getDuration = function() {
                return h ? h : 0
            }, t.getStartOffsetTime = function() {}, t.getPaused = function() {
                return l
            }, t.getDefaultPlaybackRate = function() {}, t.setDefaultPlaybackRate = function() {}, t.getPlaybackRate = function() {}, t.setPlaybackRate = function() {}, t.getPlayed = function() {}, t.getSeekable = function() {}, t.getEnded = function() {
                return y ? -1 === y.getRemainingTime() : !0
            }, t.getAutoplay = function() {
                return p
            }, t.setAutoplay = function(e) {
                p = e, p && f && t.load()
            }, t.getLoop = function() {}, t.setLoop = function() {}, t.play = function() {
                c && t.load(), y && y.resume(), l = !1, n.emit("play")
            }, t.pause = function() {
                y && y.pause(), l = !0, n.emit("pause")
            }, t.getControls = function() {}, t.setControls = function() {}, t.getVolume = function() {
                return r
            }, t.setVolume = function(e) {
                r = e, y && y.setVolume(o ? 0 : e), n.emit("volumechange")
            }, t.getMuted = function() {
                return o
            }, t.setMuted = function(e) {
                o = e, y && y.setVolume(o ? 0 : r), n.emit("volumechange")
            }, t.getDefaultMuted = function() {}, t.setDefaultMuted = function() {}, t.getQuality = function() {
                return "auto"
            }, t.setQuality = function() {}, t.getQualities = function() {
                return ["auto"]
            }, t.getChannel = function() {
                return s
            }, t.setChannel = function(e) {
                s = e, u = null
            }, t.getVideo = function() {
                return u
            }, t.setVideo = function(e) {
                s = null, u = e
            }, t.getStats = function() {}, t.getStatsEnabled = function() {}, t.setStatsEnabled = function() {}, t.getCaption = function() {}, t.getPlaylistLength = function() {
                return b
            }, t.getPlaylistDuration = function() {
                return E
            }, t.getAdInfo = function() {
                return w
            }, k()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.BackendIMAHtml5 = r;
        var o = n(54),
            a = i(o);
        r.canPlay = function() {
            return !(!window.google || !window.google.ima)
        }
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r() {
            var e = this,
                t = new s["default"];
            e.attach = function(e) {}, e.destroy = function() {}, e.addEventListener = function(e, n) {
                t.on(e, n)
            }, e.removeEventListener = function(e, n) {
                t.off(e, n)
            }, e.getError = function() {
                return o.flashError
            }, e.getSrc = function() {}, e.setSrc = function(e) {}, e.getCurrentSrc = function() {}, e.getNetworkState = function() {}, e.getPreload = function() {}, e.setPreload = function(e) {}, e.getBuffered = function() {}, e.load = function() {}, e.getReadyState = function() {}, e.getSeeking = function() {}, e.getCurrentTime = function() {}, e.setCurrentTime = function(e) {}, e.getInitialTime = function() {}, e.getDuration = function() {}, e.getStartOffsetTime = function() {}, e.getPaused = function() {}, e.getDefaultPlaybackRate = function() {}, e.setDefaultPlaybackRate = function(e) {}, e.getPlaybackRate = function() {}, e.setPlaybackRate = function(e) {}, e.getPlayed = function() {}, e.getSeekable = function() {}, e.getEnded = function() {}, e.getAutoplay = function() {}, e.setAutoplay = function(e) {}, e.getLoop = function() {}, e.setLoop = function(e) {}, e.play = function() {}, e.pause = function() {}, e.getControls = function() {}, e.setControls = function(e) {}, e.getVolume = function() {}, e.setVolume = function(e) {}, e.getMuted = function() {}, e.setMuted = function(e) {}, e.getDefaultMuted = function() {}, e.setDefaultMuted = function(e) {}, e.getQuality = function() {}, e.setQuality = function(e) {}, e.getQualities = function() {}, e.getChannel = function() {}, e.setChannel = function(e, t) {}, e.getVideo = function() {}, e.setVideo = function(e, t) {}, e.getStats = function() {}, e.getStatsEnabled = function() {}, e.setStatsEnabled = function(e) {}, e.getVideoInfo = function() {}, e.getCaption = function() {}, e.getBackend = function() {
                return "blank"
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.BackendBlank = r;
        var o = n(59),
            a = n(54),
            s = i(a)
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.VODContentStream = t.CONTENT_MODE_VOD = void 0;
        var o = function() {
                function e(e, t) {
                    var n = [],
                        i = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
                    } catch (u) {
                        r = !0, o = u
                    } finally {
                        try {
                            !i && s["return"] && s["return"]()
                        } finally {
                            if (r) throw o
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
            a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            s = n(50),
            u = i(s),
            l = n(204),
            c = i(l),
            d = n(59),
            f = n(207),
            p = t.CONTENT_MODE_VOD = "vod";
        t.VODContentStream = function() {
            function e(t, n, i) {
                r(this, e), this._vodId = t, this._oAuthToken = n, this._usherParams = i, this._restrictedBitrates = []
            }
            return a(e, [{
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
                key: "streamUrl",
                get: function() {
                    var e = this,
                        t = this._oAuthToken.then(function(t) {
                            return (0, f.fetchVideoAccessToken)(e._vodId, t)
                        });
                    return Promise.all([t, this._usherParams]).then(function(t) {
                        var n = o(t, 2),
                            i = n[0],
                            r = n[1],
                            a = (0, u["default"])({
                                nauth: i.token,
                                nauthsig: i.sig,
                                allow_source: !0,
                                allow_spectre: !0
                            }, (0, c["default"])(r, ["protocol"]));
                        return e._restrictedBitrates = JSON.parse(i.token).chansub.restricted_bitrates, "" + r.protocol + d.usherHost + "/vod/" + e._vodId.substring(1) + ".m3u8?" + $.param(a)
                    })
                }
            }]), e
        }()
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function o() {
            return {
                type: w,
                captions: {
                    enabled: f.get(y, m.DEFAULT_CAPTION.enabled),
                    preset: f.get(b, m.DEFAULT_CAPTION.preset),
                    style: f.get(E, m.DEFAULT_CAPTION.style)
                }
            }
        }

        function a(e) {
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
                function(n, i) {
                    var r = i().captions.style,
                        o = c((0, h["default"])({}, r, t));
                    return f.set(E, o), n({
                        type: T,
                        captions: {
                            preset: e,
                            style: o
                        }
                    })
                }
        }

        function l(e) {
            return {
                type: C,
                captions: {
                    learnMoreClicks: e
                }
            }
        }

        function c(e) {
            var t = (0, g["default"])(e.fontSize, _.fontSizeMap.min, _.fontSizeMap.max);
            return (0, h["default"])({}, e, {
                fontSize: t
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ACTION_CLICK_LEARN_MORE = t.ACTION_TOGGLE_CAPTIONS = t.ACTION_SET_CAPTIONS_PRESET = t.ACTION_SET_CAPTIONS_DATA = t.ACTION_SET_CAPTIONS_AVAILABLE = t.ACTION_INITIALIZE_CAPTIONS_SETTINGS = t.KEY_CAPTIONS_STYLE = t.KEY_CAPTIONS_PRESET = t.KEY_CAPTIONS_ENABLED = void 0, t.initializeCaptionsSettings = o, t.setCaptionsData = a, t.setCaptionsEnabled = s, t.setCaptionsPreset = u, t.setLearnMoreClicks = l;
        var d = n(172),
            f = r(d),
            p = n(50),
            h = i(p),
            v = n(259),
            g = i(v),
            m = n(261),
            _ = n(262),
            y = t.KEY_CAPTIONS_ENABLED = "captionsEnabled",
            b = t.KEY_CAPTIONS_PRESET = "captionsPreset",
            E = t.KEY_CAPTIONS_STYLE = "captionsStyle",
            w = t.ACTION_INITIALIZE_CAPTIONS_SETTINGS = "captions settings initialized",
            k = (t.ACTION_SET_CAPTIONS_AVAILABLE = "captions available", t.ACTION_SET_CAPTIONS_DATA = "captions data received"),
            T = t.ACTION_SET_CAPTIONS_PRESET = "captions preset selected",
            S = t.ACTION_TOGGLE_CAPTIONS = "captions toggled",
            C = t.ACTION_CLICK_LEARN_MORE = "learn more clicked"
    }, function(e, t, n) {
        function i(e, t, n) {
            return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = o(n), n = n === n ? n : 0), void 0 !== t && (t = o(t), t = t === t ? t : 0), r(o(e), t, n)
        }
        var r = n(260),
            o = n(19);
        e.exports = i
    }, function(e, t) {
        function n(e, t, n) {
            return e === e && (void 0 !== n && (e = n >= e ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
        }
        e.exports = n
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? l : arguments[0],
                t = arguments[1];
            switch (t.type) {
                case u.ACTION_INITIALIZE_CAPTIONS_SETTINGS:
                case u.ACTION_SET_CAPTIONS_AVAILABLE:
                case u.ACTION_SET_CAPTIONS_DATA:
                case u.ACTION_SET_CAPTIONS_PRESET:
                case u.ACTION_CLICK_LEARN_MORE:
                case u.ACTION_TOGGLE_CAPTIONS:
                    return (0, a["default"])({}, e, t.captions);
                default:
                    return e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DEFAULT_CAPTION = void 0, t.captions = r;
        var o = n(50),
            a = i(o),
            s = n(262),
            u = n(258),
            l = t.DEFAULT_CAPTION = {
                enabled: !1,
                available: !1,
                preset: "white-on-black",
                data: null,
                learnMoreClicks: 0,
                style: s.presetMap["white-on-black"]
            }
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e, t) {
            return "transparent" === e ? "transparent" : "rgba(" + e + "," + t + ")"
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.fontSizeMap = t.backgroundColorMap = t.fontColorMap = t.verticalPositionMap = t.fontBoldMap = t.fontItalicMap = t.fontUnderlineMap = t.alignmentMap = t.edgeMap = t.opacityMap = t.fontMap = t.presetMap = void 0, t.calculateRGBA = r;
        var o = n(50),
            a = i(o),
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
            u = (0, a["default"])({}, s, {
                backgroundColorName: "black",
                backgroundOpacity: "translucent"
            });
        t.presetMap = {
            "white-on-black": (0, a["default"])({}, s, {
                fontColorName: "white"
            }),
            "cyan-on-black": (0, a["default"])({}, s, {
                fontColorName: "cyan"
            }),
            "yellow-on-black": (0, a["default"])({}, s, {
                fontColorName: "yellow"
            }),
            "lime-on-black": (0, a["default"])({}, s, {
                fontColorName: "green"
            }),
            "magenta-on-black": (0, a["default"])({}, s, {
                fontColorName: "magenta"
            }),
            "white-on-trans-black": (0, a["default"])({}, u, {
                fontColorName: "white"
            }),
            "cyan-on-trans-black": (0, a["default"])({}, u, {
                fontColorName: "cyan"
            }),
            "yellow-on-trans-black": (0, a["default"])({}, u, {
                fontColorName: "yellow"
            }),
            "lime-on-trans-black": (0, a["default"])({}, u, {
                fontColorName: "green"
            }),
            "magenta-on-trans-black": (0, a["default"])({}, u, {
                fontColorName: "magenta"
            }),
            "black-on-white": (0, a["default"])({}, s, {
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
    }, function(e, t) {
        "use strict";

        function n(e) {
            return function(t, n) {
                var i = n(),
                    a = i.stream,
                    s = i.playback,
                    u = i.analyticsTracker;
                return -1 !== a.restrictedBitrates.indexOf(e) ? void t({
                    type: o
                }) : (u.trackEvent("quality_change_request", {
                    prev_quality: s.quality,
                    new_quality: e
                }), void t({
                    type: r,
                    playback: {
                        quality: e
                    }
                }))
            }
        }

        function i() {
            return {
                type: a
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.setQuality = n, t.clearQualityRestrictedError = i;
        var r = t.ACTION_SET_QUALITY = "set quality",
            o = t.ACTION_QUALITY_RESTRICTED_ERROR = "error quality restricted",
            a = t.ACTION_CLEAR_QUALITY_RESTRICTED_ERROR = "clear error quality restricted"
    }, function(e, t) {
        "use strict";

        function n(e) {
            return Array.prototype.slice.call(arguments, 1).forEach(function(t) {
                if (t)
                    for (var n in t) {
                        var i = Object.getOwnPropertyDescriptor(t, n);
                        i.get && (i.get = i.get.bind(t)), i.set && (i.set = i.set.bind(t)), "function" == typeof i.value && (i.value = i.value.bind(t)), Object.defineProperty(e, n, i)
                    }
            }), e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.forwardProperties = n
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.EmbedHost = void 0;
        var a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            s = n(14),
            u = r(s),
            l = n(173),
            c = n(266),
            d = i(c),
            f = n(158),
            p = n(268),
            h = i(p);
        t.EmbedHost = function() {
            function e(t, n, i) {
                var r = this;
                o(this, e), this._player = t, this._stateStore = i, this._clients = [], this._window = this._stateStore.getState().window, n.addEventListener(l.EVENT_STATE_UPDATE, this._sendPlayerState.bind(this)), n.addEventListener(l.EVENT_PLAYER_UPDATE, this._sendPlayerEvent.bind(this)), this._window.addEventListener("message", this);
                var a = this._window.opener || this._window.parent;
                a && a !== this._window && this._addClient(a), this._unsubscribe = (0, f.subscribe)(this._stateStore, ["viewercount"], function() {
                    r._sendStoreState(), r._sendPlayerEvent("viewerschange")
                }), this._sendStoreState()
            }
            return a(e, [{
                key: "_addClient",
                value: function(e) {
                    this._clients.push(e), this._send(e, h.BRIDGE_HOST_READY)
                }
            }, {
                key: "_send",
                value: function(e, t) {
                    var n = arguments.length <= 2 || void 0 === arguments[2] ? [] : arguments[2],
                        i = Array.isArray(n) ? n : [n],
                        r = {
                            namespace: h.BRIDGE_CLIENT_NAMESPACE,
                            method: t,
                            args: i
                        };
                    e.postMessage(r, "*")
                }
            }, {
                key: "_sendAll",
                value: function(e, t) {
                    var n = this;
                    this._clients.forEach(function(i) {
                        n._send(i, e, t)
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

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e) {
            var t = a(e);
            return function(e, n) {
                var i = n(),
                    r = i.experiments,
                    o = i.usher,
                    a = u(),
                    s = r.get(g.USHER_PROTOCOL),
                    l = (0, m.streamInfo)(t);
                return e({
                    type: b,
                    stream: new h.LiveContentStream(t, a, s.then(function(e) {
                        return (0, d["default"])({}, o, {
                            protocol: e
                        })
                    }))
                }), l.then(function(t) {
                    t.stream && (e((0, _.updateViewerCount)(t.stream.viewers)), e((0, y.setStreamMetadata)(t.stream)))
                })
            }
        }

        function o(e) {
            var t = s(e);
            return function(e, n) {
                var i = n(),
                    r = i.experiments,
                    o = i.usher,
                    a = r.get(g.USHER_PROTOCOL),
                    s = r.get(g.USE_LANTERN),
                    c = u();
                e({
                    type: b,
                    stream: new v.VODContentStream(t, c, Promise.all([a, s]).then(function(e) {
                        var t = l(e, 2),
                            n = t[0],
                            i = t[1];
                        return (0, d["default"])({}, o, {
                            protocol: n,
                            use_lantern: i
                        })
                    }))
                })
            }
        }

        function a(e) {
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
        var l = function() {
            function e(e, t) {
                var n = [],
                    i = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
                } catch (u) {
                    r = !0, o = u
                } finally {
                    try {
                        !i && s["return"] && s["return"]()
                    } finally {
                        if (r) throw o
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
        t.setChannel = r, t.setVideo = o;
        var c = n(50),
            d = i(c),
            f = n(59),
            p = n(181),
            h = n(203),
            v = n(257),
            g = n(148),
            m = n(94),
            _ = n(201),
            y = n(267),
            b = t.ACTION_SET_STREAM = "set stream"
    }, function(e, t) {
        "use strict";

        function n(e) {
            return {
                type: i,
                streamMetadata: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.setStreamMetadata = n;
        var i = t.ACTION_SET_STREAMMETADATA = "set streammetadata"
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e) {
            var t = (0, h.toString)((0, c["default"])(e, "width", "height")),
                n = v + "/?" + t,
                i = document.createElement("iframe");
            return i.setAttribute("src", n), e.width && i.setAttribute("width", e.width), e.height && i.setAttribute("height", e.height), i.setAttribute("frameBorder", "0"), i.setAttribute("allowFullScreen", ""), i.setAttribute("scrolling", "no"), i
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.EmbedClient = t.PLAYBACK_ENDED = t.PLAYBACK_PLAYING = t.PLAYBACK_PAUSED = t.BRIDGE_CLIENT_NAMESPACE = t.BRIDGE_HOST_NAMESPACE = t.BRIDGE_DOCUMENT_EVENT = t.BRIDGE_PLAYER_EVENT = t.BRIDGE_STORE_STATE_UPDATE = t.BRIDGE_STATE_UPDATE = t.BRIDGE_HOST_READY = t.BRIDGE_REQ_SUBSCRIBE = t.METHOD_DESTROY = t.METHOD_SET_VOLUME = t.METHOD_SET_MUTE = t.METHOD_SET_QUALITY = t.METHOD_SEEK = t.METHOD_SET_VIDEO = t.METHOD_SET_CHANNEL = t.METHOD_PAUSE = t.METHOD_PLAY = t.EVENT_EMBED_READY = void 0;
        var a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            s = n(213),
            u = i(s),
            l = n(204),
            c = i(l),
            d = n(54),
            f = i(d),
            p = n(93),
            h = n(171),
            v = function() {
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
            g = 15e3,
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
            _ = t.EVENT_EMBED_READY = "ready",
            y = (t.METHOD_PLAY = "play", t.METHOD_PAUSE = "pause", t.METHOD_SET_CHANNEL = "channel", t.METHOD_SET_VIDEO = "video", t.METHOD_SEEK = "seek", t.METHOD_SET_QUALITY = "quality", t.METHOD_SET_MUTE = "mute", t.METHOD_SET_VOLUME = "volume", t.METHOD_DESTROY = "destroy"),
            b = t.BRIDGE_REQ_SUBSCRIBE = "subscribe",
            E = t.BRIDGE_HOST_READY = "ready",
            w = t.BRIDGE_STATE_UPDATE = "bridgestateupdate",
            k = t.BRIDGE_STORE_STATE_UPDATE = "bridgestorestateupdate",
            T = t.BRIDGE_PLAYER_EVENT = "bridgeplayerevent",
            S = (t.BRIDGE_DOCUMENT_EVENT = "bridgedocumentevent", t.BRIDGE_HOST_NAMESPACE = "player.embed.host"),
            C = t.BRIDGE_CLIENT_NAMESPACE = "player.embed.client";
        t.PLAYBACK_PAUSED = "paused", t.PLAYBACK_PLAYING = "playing", t.PLAYBACK_ENDED = "ended", t.EmbedClient = function() {
            function e(t, n) {
                r(this, e), this._eventEmitter = new f["default"], this._playerState = m, this._storeState = {}, this._onHostReady = this._getHostReady(), this._iframe = o(n), t.appendChild(this._iframe), this._host = this._iframe.contentWindow, this._send(b)
            }
            return a(e, [{
                key: "destroy",
                value: function() {
                    this.callPlayerMethod(y), this._iframe.parentNode.removeChild(this._iframe)
                }
            }, {
                key: "_getHostReady",
                value: function() {
                    var e = this;
                    return new Promise(function(t, n) {
                        function i(e) {
                            this._isClientMessage(e) && e.data.method === E && (window.removeEventListener("message", r), window.addEventListener("message", this), this._eventEmitter.emit(_), t())
                        }
                        var r = i.bind(e);
                        window.addEventListener("message", r), setTimeout(n, g)
                    })
                }
            }, {
                key: "_send",
                value: function(e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; t > i; i++) n[i - 1] = arguments[i];
                    var r = {
                        namespace: S,
                        method: e,
                        args: n
                    };
                    this._host.postMessage(r, "*")
                }
            }, {
                key: "_deferSend",
                value: function() {
                    for (var e = this, t = arguments.length, n = Array(t), i = 0; t > i; i++) n[i] = arguments[i];
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
                        case w:
                            this._playerState = e.data.args[0];
                            break;
                        case T:
                            this._eventEmitter.emit(e.data.args[0]);
                            break;
                        case k:
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
        "use strict";

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t, n) {
            var i = !1,
                r = function(t) {
                    var n = e.getChannel(),
                        i = e.getDuration(),
                        r = e.getCurrentTime();
                    if (!n && (0, s["default"])(i) && !e.getPaused()) {
                        var a = o(r, t, y, i, e.getEnded());
                        a && e.setCurrentTime(a)
                    }
                },
                o = function(e, t, n, i, r) {
                    var o = r ? i + t : e + t;
                    return n > o ? n : o > i ? null : o
                };
            t.setAttribute("tabindex", n.tabindex || -1), t.addEventListener("keydown", function(t) {
                var n, o = t.which || t.keyCode || t.charCode;
                if (o === c && (i = !0), o === d) {
                    var a = e.getPaused();
                    a ? e.play() : e.pause()
                } else if (o === f) e.setMuted(!1);
                else if (o === p) e.setMuted(!0);
                else if (o === h) n = e.getVolume(), n = Math.min(n + l.volumeStepAmount, 1), e.setVolume(n);
                else if (o === v) n = e.getVolume(), n = Math.max(n - l.volumeStepAmount, 0), e.setVolume(n);
                else if (i && o === _) {
                    var s = e.getFullscreen();
                    e.setFullscreen(!s)
                } else if (o === m) r(l.hotkeySeekAmount);
                else {
                    if (o !== g) return;
                    r(-l.hotkeySeekAmount)
                }
                t.preventDefault()
            }), t.addEventListener("keyup", function(e) {
                var t = e.which || e.keyCode || e.charCode;
                t === c && (i = !1)
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PlayerHotkeys = o;
        var a = n(213),
            s = r(a),
            u = n(59),
            l = i(u),
            c = 17,
            d = 32,
            f = 33,
            p = 34,
            h = 38,
            v = 40,
            g = 37,
            m = 39,
            _ = 70,
            y = .01
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t, i, r, o, a, u) {
            var M = void 0,
                I = void 0,
                N = void 0,
                x = void 0,
                R = void 0,
                D = void 0,
                V = void 0,
                U = void 0,
                B = void 0,
                H = void 0,
                q = void 0,
                F = void 0,
                G = void 0,
                z = void 0,
                W = void 0,
                Q = void 0,
                Y = void 0,
                K = void 0,
                J = void 0,
                X = function() {
                    var w = (0, s["default"])(u, {
                        showInfo: u.channelInfo,
                        branding: !0,
                        devcaptions: !1
                    }, {
                        showInfo: !0
                    });
                    $(t).addClass("player"), $(t).append(n(304)), a.dispatch((0, A.initializeCaptionsSettings)()), M = new c.PlayerUIState(t, r), I = new f.PlayerUIInfo(e, t, r, a, w), N = new p.PlayerUISeek(e, t, r), x = new h.PlayerUIStats(t, r, a), R = new v.PlayerUIUpnext(e, t, r), D = new g.PlayerUILeaveDialog(e, t, i, r, w), V = new E.PlayerUILang(t, a), U = new m.PlayerUISubscribeOverlay(t, r), B = new _.PlayerUIResume(e, r, a, w), q = new S.PlayerUISeekBarPopup(t), H = new y.PlayerUISeekBarMarkers(e, t, r, q), F = new C.PlayerUIThumbnailPreviews(t, r, q), G = new b.PlayerUIMutedSegments(t, r), W = new O.AgeRestrictionOverlay(t, e, a), Q = new T.PlayerUIControlsDisplay(e, t), Y = new d.PlayerUIControls(e, t, r, a, Q, o, w), J = new k.PlayerUISettings(e, t, r, a, i, Q, w);
                    var L = new j.ClipGenerator(r, window.open.bind(window), window.location.origin);
                    K = new P.PlayerUIClipsEnabler(t, a, l, L), Z(w), $(t).attr("data-initializing", !0), e.addEventListener("init", function() {
                        $(t).attr("data-initializing", !1)
                    })
                },
                Z = function(e) {
                    var n = void 0;
                    n = e.devcaptions ? Promise.resolve("v2") : a.getState().experiments.get(L.CAPTIONS), n.then(function(e) {
                        "v2" === e && (z = new w.PlayerUIClosedCaption(a, t)), $(t).attr("data-captions", e)
                    })
                };
            this.destroy = function() {
                M.destroy(), I.destroy(), N.destroy(), x.destroy(), R.destroy(), D.destroy(), V.destroy(), U.destroy(), B.destroy(), H.destroy(), q.destroy(), F.destroy(), G.destroy(), Q.destroy(), Y.destroy(), W.destroy(), J.destroy(), K.destroy(), z && z.destroy()
            }, X()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PlayerUI = o;
        var a = n(1),
            s = r(a),
            u = n(172),
            l = i(u),
            c = n(271),
            d = n(272),
            f = n(273),
            p = n(275),
            h = n(276),
            v = n(277),
            g = n(278),
            m = n(279),
            _ = n(280),
            y = n(283),
            b = n(284),
            E = n(285),
            w = n(287),
            k = n(289),
            T = n(291),
            S = n(294),
            C = n(295),
            O = n(300),
            A = n(258),
            P = n(301),
            j = n(303),
            L = n(148)
    }, function(e, t, n) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PlayerUIState = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            o = n(173);
        t.PlayerUIState = function() {
            function e(t, n) {
                i(this, e), this._root = t, this._state = n, this._state.addEventListener(o.EVENT_STATE_UPDATE, this.handleEvent.bind(this))
            }
            return r(e, [{
                key: "handleEvent",
                value: function() {
                    $(this._root).attr({
                        "data-paused": this._state.playback === o.PLAYBACK_PAUSED,
                        "data-ended": this._state.playback === o.PLAYBACK_ENDED,
                        "data-loading": this._state.isLoading,
                        "data-online": this._state.online
                    })
                }
            }, {
                key: "destroy",
                value: function() {}
            }]), e
        }()
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t, n, i, r, o, a) {
            var u = void 0,
                d = void 0,
                p = function() {
                    var e = a;
                    (0, c.isTwitchEmbed)() || (e = (0, s["default"])(e, {
                        branding: !0
                    })), v(), m(e), r.showControls(h.initialControlsDelay), $(t).attr("data-branding", e.branding), $(t).attr("data-advertisement", !1), $(t).attr("data-theatre", !1), $(t).attr("data-showtheatre", e.showtheatre), P(), I(), A(), n.addEventListener(y.EVENT_STATE_UPDATE, w)
                },
                v = function() {
                    e.addEventListener("playing", C), e.addEventListener("volumechange", P), e.addEventListener("castingchange", I), e.addEventListener("theatrechange", L), e.addEventListener("seeking", M), e.addEventListener("adstart", N), e.addEventListener("adend", x)
                },
                m = function(n) {
                    n.player !== f.PLAYER_FRONTPAGE && $(t).on("dblclick", ".js-control-fullscreen-overlay", function(e) {
                        e.preventDefault(), S()
                    }), $(t).on("click", ".js-control-playpause-button", k), $(t).on("click", ".js-control-play-button", k), $(t).on("click", ".js-control-fullscreen", S), $(t).on("click", ".js-control-theatre", j), $(t).on("click", ".js-control-volume", T), $(t).on("click", ".js-chromecast-button", function() {
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
                            var i = e.getMuted();
                            i && e.setMuted(!1);
                            var r = n.value / 100;
                            e.setVolume(r)
                        },
                        start: function() {
                            u = !0, d = e.getVolume()
                        },
                        stop: function(e, t) {
                            u = !1;
                            var n = t.value / 100;
                            n > 0 && (d = null)
                        }
                    }), $(".js-volume-slider .ui-slider-handle").attr("tabindex", "-1"), $(t).on("click", ".js-popout-player", function(e) {
                        e.preventDefault(), R()
                    }), $(t).on("click", ".js-player-product-close", function(e) {
                        e.preventDefault(), D()
                    });
                    var r = i.getState().experiments.get(b.HTML5_TOGGLE);
                    r.then(function(e) {
                        E.BackendMseDevelopment.canPlay() && ($(".js-menu-html5", t).attr("data-enabled", "yes" === e ? !0 : !1), $(t).on("click", ".js-html5-slider", O))
                    })
                },
                w = function() {
                    $(t).attr("data-fullscreen", n.canFullScreen() ? n.isFullScreen() : "disabled")
                },
                k = function() {
                    e.getEnded() || e.getPaused() ? e.play() : e.pause()
                },
                T = function() {
                    var t = e.getMuted();
                    t && d ? e.setVolume(d) : e.setMuted(!t)
                },
                S = function() {
                    o.setFullScreen(!n.isFullScreen())
                },
                C = function() {
                    $(".js-quality", t).val(e.getQuality())
                },
                O = function() {
                    var t = e.getBackend();
                    if ("flash" === t) {
                        var n = e.getSupportedBackends();
                        t = n.filter(function(e) {
                            return "mseDev" === e
                        })[0]
                    } else t = "flash";
                    e.setBackend(t), A()
                },
                A = function() {
                    var n = e.getBackend(),
                        i = "flash" === n ? "off" : "on";
                    $(".js-html5-slider", t).attr("data-value", i)
                },
                P = function() {
                    var n = e.getMuted(),
                        i = e.getVolume();
                    n ? i = 0 : 0 === i && (n = !0), $(t).attr("data-muted", n), u || $(".js-volume-slider", t).slider("value", 100 * i)
                },
                j = function() {
                    var t = e.getTheatre();
                    e.setTheatre(!t)
                },
                L = function() {
                    var n = e.getTheatre();
                    $(t).attr("data-theatre", !n), r.setHovering(!1), r.showControls(h.hoverControlsDelay)
                },
                M = function() {
                    r.showControls(h.hoverControlsDelay)
                },
                I = function() {
                    var n = e.getCasting();
                    if ("error" === n && (n = "available"), $(t).attr("data-casting", n), "connected" === n) {
                        var i = e.getCastDevice();
                        i = (0, l["default"])(i) ? i : "Chromecast", $(".js-chromecast-device", t).text(i)
                    }
                    "connected" === n || "connecting" === n ? ($(t).attr("data-chromecast", "true"), r.showControls()) : ($(t).attr("data-chromecast", "false"), r.showControls(h.hoverControlsDelay))
                },
                N = function() {
                    $(t).attr("data-advertisement", !0)
                },
                x = function() {
                    $(t).attr("data-advertisement", !1)
                },
                R = function() {
                    var t = {};
                    t.volume = e.getVolume();
                    var n = e.getChannel(),
                        i = e.getVideo();
                    if (n) t.channel = n;
                    else {
                        t.video = i;
                        var r = e.getCurrentTime();
                        t.time = _.toURLString(r)
                    }
                    e.pause();
                    var o = h.popoutSize.width,
                        a = h.popoutSize.height,
                        s = h.playerHost + "/?" + g.toString(t),
                        u = "width=" + o + ",height=" + a;
                    u += ",toolbar=no,menubar=no,scrollbars=no,location=no,status=no", window.open(s, "_blank", u)
                },
                D = function() {
                    $(".js-player-product-overlay", t).attr("data-active", !1)
                };
            this.destroy = function() {
                $(t).off("click"), $(t).off("dblclick")
            }, p()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PlayerUIControls = o;
        var a = n(50),
            s = r(a),
            u = n(33),
            l = r(u),
            c = n(160),
            d = n(159),
            f = i(d),
            p = n(59),
            h = i(p),
            v = n(171),
            g = i(v),
            m = n(210),
            _ = i(m),
            y = n(173),
            b = n(148),
            E = n(222)
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function r(e, t, n, i, r) {
            var o = Promise.reject();
            o.then(null, function() {
                return null
            });
            var u = [],
                c = void 0,
                f = void 0,
                y = !1,
                b = void 0,
                E = function() {
                    $(t).attr("data-showinfo", r.showInfo);
                    var n = r.player;
                    $(t).attr("data-playertype", n), n === a.PLAYER_FRONTPAGE && $(t).on("click", ".js-control-fullscreen-overlay", function() {
                        o.then(function(e) {
                            window.top.location.href = e
                        })
                    }), $(t).on("click", ".js-watch-twitch", function(t) {
                        t.preventDefault(), o.then(function(t) {
                            var n = e.getCurrentTime(),
                                i = t;
                            e.video && n && (i += "?t=" + p.toURLString(Math.round(n))), window.open(i, "_blank"), e.pause()
                        })
                    }), e.addEventListener("init", w), e.addEventListener("ended", P), e.addEventListener("isspectre", k), e.addEventListener("loadeddata", T), e.addEventListener("playing", S), e.addEventListener("error", A), e.addEventListener("adstart", C), u.push((0, m.subscribe)(i, ["viewercount"], function(e) {
                        var n = e.viewercount;
                        $(t).attr("data-viewers", n);
                        var r = Number(n).toLocaleString("en");
                        $(".js-meta-viewers", t).text(r), $(".js-viewers-label").text(i.getState().lang.translate(" viewer", {
                            count: n
                        }))
                    })), u.push((0, m.subscribe)(i, ["stream"], function(e) {
                        var n = e.stream;
                        switch (n.contentType) {
                            case v.CONTENT_MODE_LIVE:
                                (0, s.channelInfo)(n.channel).then(j), (0, s.streamInfo)(n.channel).then(function(e) {
                                    e.stream && (f = e.stream.preview.template.replace("{width}x{height}", _), M())
                                }), o = Promise.resolve((0, s.channelUrl)(n.channel));
                                break;
                            case g.CONTENT_MODE_VOD:
                                (0, s.videoInfo)(n.videoId).then(function(e) {
                                    (0, s.channelInfo)(e.channel.name).then(j), e.preview && (f = e.preview.replace("320x240", _), M()), $(".js-meta-title", t).text(e.title)
                                }), o = (0, s.videoInfo)(n.videoId).then(function(e) {
                                    return (0, s.videoUrl)(e.channel.name, n.videoId)
                                })
                        }
                        o.then(function(e) {
                            $(".js-meta-url", t).attr("href", e)
                        })
                    })), u.push((0, m.subscribe)(i, ["online"], function(e) {
                        var t = e.online;
                        t && O()
                    }))
                },
                w = function() {
                    e.error && A()
                },
                k = function(e) {
                    b = e, $(t).attr("data-playlist", b)
                },
                T = function() {
                    y = !0
                },
                S = function() {
                    I()
                },
                C = function() {
                    I()
                },
                O = function() {
                    var n = e.getChannel(),
                        i = b,
                        r = y;
                    (0, s.channelInfo)(n).then(function(e) {
                        return (0, s.offlinePlaylistInfo)(e._id)
                    }).then(function(e) {
                        r && !i && e.enabled && $(t).attr("data-playlist", "pending")
                    })
                },
                A = function() {
                    var n = i.getState().lang.translate(e.error);
                    $(".js-player-error", t).text(n), $(t).attr("data-error", !0)
                },
                P = function() {
                    var n = e.getChannel();
                    n && (0, s.channelInfo)(n).then(function(e) {
                        return (0, s.offlinePlaylistInfo)(e._id)
                    }).then(function(e) {
                        y && !b && e.enabled ? $(t).attr("data-playlist", "pending") : ($(t).attr("data-playlist", !1), L(), $(t).attr("data-loading", !1))
                    })
                },
                j = function(n) {
                    var i = e.getChannel();
                    c = n.video_banner;
                    var r = e.getEnded();
                    if (r && L(), $(".js-meta-name", t).text(n.display_name), $(".js-meta-picture", t).attr("src", n.logo || null), $(t).attr({
                            "data-channel": i || null,
                            "data-video": e.getVideo() || null,
                            "data-game": i ? n.game : null
                        }), i) {
                        $(".js-meta-title", t).text(n.status);
                        var o = d.gamePath + "/" + encodeURIComponent(n.game);
                        $(".js-meta-game", t).text(n.game).attr("href", o)
                    }
                },
                L = function() {
                    var n = e.getChannel();
                    c && n && $(".js-offline-banner", t).css("background-image", "url('" + c + "')")
                },
                M = function() {
                    var n = e.getPaused() || e.getReadyState() === l.HAVE_NOTHING;
                    (i.getState().stream === h.NullContentStream || !e.getAutoplay() && n) && ($(t).attr("data-background", !0), $(".js-video-background-banner", t).css("background-image", "url('" + f + "')"))
                },
                I = function() {
                    $(t).attr("data-background", !1)
                };
            this.destroy = function() {
                $(t).off("click"), u.forEach(function(e) {
                    return e()
                }), u = null
            }, E()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PlayerUIInfo = r;
        var o = n(159),
            a = i(o),
            s = n(94),
            u = n(186),
            l = i(u),
            c = n(59),
            d = i(c),
            f = n(210),
            p = i(f),
            h = n(274),
            v = n(203),
            g = n(257),
            m = n(158),
            _ = "1280x720"
    }, function(e, t) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            r = t.CONTENT_MODE_NONE = null,
            o = function() {
                function e() {
                    n(this, e)
                }
                return i(e, [{
                    key: "contentType",
                    get: function() {
                        return r
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
                }]), e
            }();
        t.nullContentStream = new o
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t, n) {
            var i = void 0,
                r = void 0,
                o = function() {
                    $(".js-seek-slider", t).slider({
                        range: "min",
                        value: 0,
                        min: 0,
                        max: 0,
                        stop: function(t, n) {
                            var r = n.value / 1e3;
                            e.setCurrentTime(r), i = !1
                        },
                        slide: function() {
                            i = !0
                        },
                        create: function() {
                            $(this).find(".ui-slider-handle").unbind("keydown")
                        }
                    }), $(t).on("mousemove", ".js-seek-slider", d), e.addEventListener("loadedmetadata", u), e.addEventListener("pause", g), e.addEventListener("playing", g), e.addEventListener("waiting", g), e.addEventListener("timeupdate", g), e.addEventListener("durationchange", m), e.addEventListener("bufferChange", _), n.addEventListener(c.EVENT_STATE_UPDATE, a)
                },
                a = function() {},
                u = function() {
                    r = e.getChannel()
                },
                d = function(n) {
                    var i = $(this).offset(),
                        r = n.pageX - i.left,
                        o = r / $(this).width();
                    o > 1 ? o = 1 : 0 > o && (o = 0);
                    var a = "",
                        u = e.getDuration();
                    if ((0, s["default"])(u)) {
                        var c = o * u;
                        a = l.toString(c, !1)
                    }
                    $(".js-slider-tip-container", t).css({
                        left: r + "px"
                    }), $(".js-slider-tip", t).attr("data-tip", a)
                },
                f = null,
                p = function y() {
                    var n = 0,
                        i = e.getCurrentTime(),
                        r = e.getDuration();
                    if ((0, s["default"])(r) && i > r && (i = r), (0, s["default"])(i)) {
                        var o = l.toString(i, !1);
                        $(".js-seek-currenttime", t).text(o), n = 1e3 * (Math.ceil(i) - i), 0 >= n && (n = 1)
                    }
                    n = Math.max(n, 16), f = setTimeout(y, n)
                },
                h = null,
                v = function() {
                    var n = function() {
                            if (!i) {
                                var n = e.getCurrentTime();
                                (0, s["default"])(n) && $(".js-seek-slider", t).slider("value", 1e3 * n)
                            }
                        },
                        r = 0,
                        o = e.getDuration();
                    if ((0, s["default"])(o)) {
                        var a = $(t).width();
                        r = 1e3 * o / a
                    }
                    r = Math.max(r, 16), n(), h = setInterval(n, r)
                },
                g = function() {
                    if (clearTimeout(f), clearInterval(h), !r) {
                        var t = e.getDuration();
                        (0, s["default"])(t) && (e.getPaused() || (p(), v()))
                    }
                },
                m = function() {
                    var n = e.getDuration();
                    if ((0, s["default"])(n)) {
                        var i = l.toString(n, !1);
                        $(".js-seek-totaltime", t).text(i), $(".js-seek-slider", t).slider("option", "max", 1e3 * n)
                    }
                    g(), _()
                },
                _ = function() {
                    var n = e.getDuration(),
                        i = e.getBuffered();
                    if (i.length && (0, s["default"])(n)) {
                        var r = i.end(0),
                            o = 100 * r / n;
                        o > 100 && (o = 100), $(".js-seek-buffer", t).css("width", o + "%")
                    }
                };
            this.destroy = function() {
                $(t).off("mousemove"), clearTimeout(f), clearInterval(h)
            }, o()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PlayerUISeek = o;
        var a = n(213),
            s = r(a),
            u = n(210),
            l = i(u),
            c = n(173)
    }, function(e, t, n) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PlayerUIStats = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            o = n(173),
            a = n(158);
        t.PlayerUIStats = function() {
            function e(t, n, r) {
                var s = this;
                i(this, e), this._state = n, this._stateStore = r, this._root = t, $(this._root).on("click", ".js-stats-toggle", function(e) {
                    e.preventDefault(), s.toggleStats()
                }), $(this._root).on("click", ".js-stats-close", function(e) {
                    e.preventDefault(), s.toggleStats()
                }), this._state.addEventListener(o.EVENT_STATE_UPDATE, this.handleEvent.bind(this)), this._unsubscribeStore = (0, a.subscribe)(this._stateStore, ["stream"], this.onStreamUpdate.bind(this))
            }
            return r(e, [{
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

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function r(e, t, n) {
            var i = void 0,
                r = void 0,
                s = void 0,
                f = void 0,
                p = void 0,
                h = void 0,
                v = void 0,
                g = void 0,
                m = void 0,
                _ = void 0,
                y = void 0,
                b = void 0,
                E = {},
                w = void 0,
                k = void 0,
                T = function() {
                    e.addEventListener("offline", O), e.addEventListener("qualitychange", x), e.addEventListener(u.SEGMENT_CHANGE, R), e.addEventListener("pause", L), e.addEventListener("isspectre", P), e.addEventListener("online", C), e.addEventListener("waiting", A), n.addEventListener(a.EVENT_STATE_UPDATE, S)
                },
                S = function() {},
                C = function() {
                    w && j(), w = !1, e.load()
                },
                O = function() {
                    j()
                },
                A = function() {
                    j()
                },
                P = function(e) {
                    w = e, w && U()
                },
                j = function() {
                    clearTimeout(p), clearTimeout(f), clearTimeout(v), clearTimeout(h)
                },
                L = function() {
                    j()
                },
                M = function() {
                    $(".js-transition", t).attr("data-stage", "0")
                },
                I = function() {
                    $(t).attr("data-transition", !1)
                },
                N = function() {
                    if (E = {}, e.quality && y && y.playhead)
                        for (var t = y.playhead.vods, n = 0; n < t.length; n++) {
                            var i = t[n].transition_segment;
                            if (i) {
                                var r = i.uris[e.quality];
                                E[r] = n
                            }
                        }
                },
                x = function() {
                    N()
                },
                R = function(e) {
                    var n = e.name;
                    if (!isNaN(E[n])) {
                        g = E[n], q(), F();
                        var r = y.playhead.vods[g].transition_segment;
                        i = 1e3 * r.remaining_seconds, i >= l && (f = setTimeout(z, i - l)), $(t).attr("data-transition", !0), setTimeout(M, i + c), setTimeout(I, i + c + d), h = setTimeout(D, i), clearTimeout(p), clearTimeout(v)
                    }
                },
                D = function() {
                    H(), G(), V(), F()
                },
                V = function() {
                    clearTimeout(p);
                    var e = 1e3 * y.playhead.vods[g].duration;
                    p = setTimeout(D, e), v = setTimeout(M, e)
                },
                U = function() {
                    I(), B()
                },
                B = function() {
                    var t = e.getChannel();
                    r = (0, o.channelInfo)(t), r.then(function(e) {
                        (e || e._id) && (0, o.offlinePlaylistInfo)(e._id).then(function(e) {
                            y = e, N(), _ = y.playhead.vods.length, g = y.playhead.active_vod_index, k = y.playhead.vods[g].id;
                            var t = y.playhead.remaining_seconds_in_active_vod;
                            G(), m = g === _ - 1 ? 0 : g + 1;
                            var n = y.playhead.vods[m].id;
                            s = (0, o.videoInfo)("v" + n), s.then(function(e) {
                                b = e
                            }), h = setTimeout(D, 1e3 * t)
                        })
                    })
                },
                H = function() {
                    g = g === _ - 1 ? 0 : g + 1, q()
                },
                q = function() {
                    m = g === _ - 1 ? 0 : g + 1
                },
                F = function() {
                    var e = y.playhead.vods[m].id;
                    (0, o.videoInfo)("v" + e).then(function(e) {
                        e && (b = e)
                    })
                },
                G = function() {
                    k = y.playhead.vods[g].id, (0, o.videoInfo)("v" + k).then(function(e) {
                        e && $(".js-currentvod-title", t).text(e.title)
                    })
                },
                z = function() {
                    $(".js-next-video-title", t).text(b.title), $(".js-next-video-thumbnail", t).attr("src", b.preview), $(".js-transition", t).attr("data-stage", "1")
                };
            this.destroy = function() {}, T()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PlayerUIUpnext = r;
        var o = n(94),
            a = n(173),
            s = n(58),
            u = i(s),
            l = 6e3,
            c = 3500,
            d = 2e3
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t, n, i, r) {
            var o, a, u, d, f = function() {
                    e.addEventListener("loadstart", _), e.addEventListener("ended", y), window.addEventListener("beforeunload", b), i.addEventListener(c.EVENT_STATE_UPDATE, p), e.getChannel() && _()
                },
                p = function() {},
                h = function(e) {
                    var t = s["default"].getItem("leaveData");
                    if (t) return t[e]
                },
                v = function(e, t) {
                    var n = s["default"].getItem("leaveData");
                    n || (n = {}), n[e] = t, s["default"].setItem("leaveData", n)
                },
                g = function() {
                    if (o) {
                        var e = h(o);
                        if (e) {
                            var t = (new Date).getTime() / 1e3;
                            e.time + l.leaveDialog.refreshTimeout < t || n.trackEvent("page_reload", {
                                storm_detected: e.stormDetected,
                                leave_dialog: e.stormDialog,
                                refresh_warning: e.stormWarning
                            })
                        }
                    }
                },
                m = function() {
                    if (!o) return !1;
                    if (!e.getEnded()) return !1;
                    if (!a || a < r.leaveDialogViewerThreshold) return !1;
                    var t = (new Date).getTime() / 1e3;
                    return !d || d + l.leaveDialog.sinceEnded < t ? !1 : !0
                },
                _ = function() {
                    o = e.getChannel(), a = null, d = null, g()
                },
                y = function() {
                    a = i.toJSON().viewers, d = (new Date).getTime() / 1e3;
                    var e = m();
                    e && r.refreshWarningEnabled && E()
                },
                b = function(e) {
                    var t = m(),
                        n = t && r.leaveDialogEnabled;
                    return v(o, {
                        time: (new Date).getTime() / 1e3,
                        stormDetected: t,
                        stormDialog: n,
                        stormWarning: u
                    }), n ? w(e) : void 0
                },
                E = function() {
                    u = !0, $(t).attr("data-storm-warning", u), setTimeout(function() {
                        u = !1, $(t).attr("data-storm-warning", u)
                    }, 1e3 * l.leaveDialog.warningDuration)
                },
                w = function(e) {
                    return n.trackEvent("page_leave_attempt", {
                        viewers: a
                    }), setTimeout(function() {
                        setTimeout(function() {
                            n.trackEvent("page_leave_cancel", {
                                viewers: a
                            })
                        }, 1e3)
                    }, 1), e.returnValue = l.leaveDialog.text, l.leaveDialog.text
                };
            this.destroy = function() {
                window.removeEventListener("beforeunload", b)
            }, f()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PlayerUILeaveDialog = o;
        var a = n(187),
            s = r(a),
            u = n(59),
            l = i(u),
            c = n(173)
    }, function(e, t, n) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PlayerUISubscribeOverlay = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            o = n(173),
            a = n(59),
            s = n(263),
            u = "This video is only available to subscribers. Subscribe now to watch and support %s.";
        t.PlayerUISubscribeOverlay = function() {
            function e(t, n) {
                i(this, e), this._root = t, this._state = n, this._state.addEventListener(o.EVENT_STATE_UPDATE, this.handleEvent.bind(this)), $(".js-close-label", this._root).on("click", this.onClickCloseSubscribeOverlay.bind(this))
            }
            return r(e, [{
                key: "handleEvent",
                value: function() {
                    this._state.videoID && this._state.isVODRestricted() && this._showVODOverlay()
                }
            }, {
                key: "subscribeUrl",
                value: function(e) {
                    return a.twitchHost + "/" + e + "/subscribe?ref=chansub_overlay_subscribe"
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

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PlayerUIResume = void 0;
        var o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            a = n(281),
            s = i(a),
            u = n(59),
            l = n(173),
            c = n(282);
        t.PlayerUIResume = function() {
            function e(t, n, i, o) {
                r(this, e), this._state = n, this._stateStore = i, this._player = t, this._options = o, this._state.addEventListener(l.EVENT_PLAYER_UPDATE, this.handleEvent.bind(this))
            }
            return o(e, [{
                key: "handleEvent",
                value: function(e) {
                    if (!this._state.channelName) switch (e) {
                        case "loadedmetadata":
                            this._onLoadedMetadata();
                            break;
                        case "timeupdate":
                            this._state.isLoading || this._onTimeUpdate()
                    }
                }
            }, {
                key: "_onLoadedMetadata",
                value: function() {
                    var e = this._stateStore.getState().resumeWatch.times[this._state.videoID];
                    null === this._options.time && (0, s["default"])(e) && this._player.setCurrentTime(e)
                }
            }, {
                key: "_onTimeUpdate",
                value: function() {
                    if (this._state.duration) {
                        var e = void 0;
                        e = this._state.duration - this._state.currentTime > u.cancelResumeAmount ? (0, c.setVodResumeTime)(this._state.videoID, this._state.currentTime) : (0, c.cancelVodResumeTime)(this._state.videoID), this._stateStore.dispatch(e)
                    }
                }
            }, {
                key: "destroy",
                value: function() {}
            }]), e
        }()
    }, function(e, t, n) {
        function i(e) {
            return "number" == typeof e || r(e) && s.call(e) == o
        }
        var r = n(31),
            o = "[object Number]",
            a = Object.prototype,
            s = a.toString;
        e.exports = i
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function r() {
            return {
                type: p,
                times: d.get(_, {}),
                watch: d.get(y, {}),
                backendTime: 0,
                userId: null
            }
        }

        function o(e) {
            return function(t) {
                t({
                    type: m,
                    userId: e
                })
            }
        }

        function a(e, t, n, i) {
            e.resumeWatch.userId && Math.abs(n - e.resumeWatch.backendTime) > b && ($.ajax({
                method: "PUT",
                url: f.resumewatchingHost + "?id=" + e.resumeWatch.userId,
                xhrFields: {
                    withCredentials: !0
                },
                data: {
                    video_id: t,
                    position: Math.floor(n)
                },
                timeout: f.apiTimeout
            }), i({
                type: g,
                backendTime: Math.floor(n)
            }))
        }

        function s(e, t) {
            return function(n, i) {
                a(i(), e, t, n), n({
                    type: v,
                    videoID: e,
                    time: t
                }), l(i())
            }
        }

        function u(e) {
            return function(t, n) {
                a(n(), e, 0, t), t({
                    type: h,
                    videoID: e
                }), l(n())
            }
        }

        function l(e) {
            d.set(_, e.resumeWatch.times), d.set(y, e.resumeWatch.watch)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ACTION_VOD_SET_USER = t.ACTION_VOD_POST_BACKEND_TIME = t.ACTION_VOD_SET_RESUME_TIME = t.ACTION_VOD_CANCEL_RESUME = t.ACTION_VOD_INIT_RESUME = void 0, t.initVodResume = r, t.setUser = o, t.setBackendVodResumeTime = a, t.setVodResumeTime = s, t.cancelVodResumeTime = u;
        var c = n(172),
            d = i(c),
            f = n(59),
            p = t.ACTION_VOD_INIT_RESUME = "initialize vod resume",
            h = t.ACTION_VOD_CANCEL_RESUME = "cancel vod resume",
            v = t.ACTION_VOD_SET_RESUME_TIME = "set vod resume time",
            g = t.ACTION_VOD_POST_BACKEND_TIME = "post vod backend time",
            m = t.ACTION_VOD_SET_USER = "set user",
            _ = "vodResumeTimes",
            y = "vodResumeWatcheds",
            b = 20
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PlayerUISeekBarMarkers = void 0;
        var o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            a = n(210),
            s = i(a),
            u = n(173),
            l = 148;
        t.PlayerUISeekBarMarkers = function() {
            function e(t, n, i, o) {
                var a = this;
                r(this, e), this._player = t, this._root = n, this._state = i, this._popup = o, this._lastMarkers = [], this._dotsContainer = $(".js-marker-dots-container", this._root), this._state.addEventListener(u.EVENT_STATE_UPDATE, this.handleEvent.bind(this)), this._dotsContainer.on("mouseenter", ".js-marker-dot", function(e) {
                    var t = $(e.target),
                        n = parseFloat(t.css("left")) + .5 * parseFloat(t.css("width")) + parseFloat(t.css("margin-left")),
                        i = Number(t.attr("marker-index")),
                        r = a._state.getMarkers()[i];
                    a._popup.show(a._transformToPopupObject(r), n)
                }), this._dotsContainer.on("mouseleave", ".js-marker-dot", function() {
                    a._popup.hide()
                }), this._dotsContainer.on("click", ".js-marker-dot", function(e) {
                    e.stopPropagation();
                    var t = $(e.target);
                    a._player.setCurrentTime(parseFloat(t.attr("data-time")))
                })
            }
            return o(e, [{
                key: "handleEvent",
                value: function() {
                    this._updateDotsPassed(this._state.currentTime), this._lastMarkers !== this._state.getMarkers() && (this._dotsContainer.empty(), this._lastMarkers = [], null !== this._state.duration && (this._lastMarkers = this._state.getMarkers(), this._createDots(this._state.getMarkers(), this._state.duration)))
                }
            }, {
                key: "_createDots",
                value: function(e, t) {
                    var n = this;
                    if (0 !== e.length && null !== t) {
                        var i = new Image;
                        i.src = e[0].imageURL;
                        var r = $("<span></span>").addClass("player-slider__marker-dot js-marker-dot");
                        this._dotsContainer.append(e.map(function(e, i) {
                            var o = r.clone().css("left", e.startTime / t * 100 + "%");
                            return o.attr("data-time", e.startTime), o.attr("marker-index", i), o.attr("data-passed", e.startTime <= n._state.currentTime), o
                        }))
                    }
                }
            }, {
                key: "_updateDotsPassed",
                value: function(e) {
                    $(".js-marker-dot", this._root).each(function(t, n) {
                        var i = $(n),
                            r = Number(i.attr("data-time")) <= e;
                        i.attr("data-passed", r)
                    })
                }
            }, {
                key: "_transformToPopupObject",
                value: function(e) {
                    var t = 1;
                    return e.thumbnail.width > 0 && (t = l / e.thumbnail.width), {
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
                        width: l
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

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PlayerUIMutedSegments = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            o = n(173),
            a = n(59),
            s = $("<span></span>").addClass("player-slider__muted");
        t.PlayerUIMutedSegments = function() {
            function e(t, n) {
                i(this, e), this._root = t, this._state = n, this._segmentsContainer = $(".js-seek-slider .js-muted-segments-container", this._root), this._alertElement = $(".js-player-alert", this._root), this._state.addEventListener(o.EVENT_STATE_UPDATE, this.handleEvent.bind(this))
            }
            return r(e, [{
                key: "handleEvent",
                value: function() {
                    0 !== this._state.getMutedSegments().length && null !== this._state.duration && 0 === this._segmentsContainer.children().length && (this._displayMutedSegments(), this._showAlert())
                }
            }, {
                key: "_displayMutedSegments",
                value: function() {
                    var e = this,
                        t = this._state.getMutedSegments().map(function(t) {
                            return s.clone().css({
                                width: 100 * t.duration / e._state.duration + "%",
                                left: 100 * t.offset / e._state.duration + "%"
                            })
                        });
                    this._segmentsContainer.empty().append(t)
                }
            }, {
                key: "_showAlert",
                value: function() {
                    this._alertElement.find(".js-player-alert__message").text(a.mutedSegmentsMessage), this._alertElement.attr("data-active", !0)
                }
            }, {
                key: "destroy",
                value: function() {}
            }]), e
        }()
    }, function(e, t, n) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t) {
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
        }), t.PlayerUILang = void 0;
        var a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            s = n(59),
            u = n(286);
        t.PlayerUILang = function(e) {
            function t(e, n) {
                i(this, t);
                var o = r(this, Object.getPrototypeOf(t).call(this));
                return o.$root = e, o.subscribe(n, ["lang"], o.localizeUI.bind(o)), o
            }
            return o(t, e), a(t, [{
                key: "localizeUI",
                value: function(e) {
                    var t = this,
                        n = e.lang,
                        i = function(e, i) {
                            $(e, t.$root).text(n.translate(i))
                        };
                    i(".js-live-label", "Live"), i(".js-offline-label", "Offline"), i(".js-playlist-label", "Playlist"), i(".js-mature-accept-label", "Start Watching"), i(".js-playing-on-label", "Playing on"), i(".js-close-label", "Close"), i(".js-subscribe-label", "Subscribe"), i(".js-playlist-started-label", " has started a playlist."), i(".js-broadcast-down-label", "The broadcast is down."), i(".js-player-options-label", "Player Options"), i(".js-video-quality-label", "Video Quality:"), i(".js-popout-player", "Popout Player"), i(".js-stats-toggle", "Show Video Stats"), i(".js-copy-url", "Copy Video URL at Current Time"), i(".js-report-issue-label", "Report Playback Issue"), i(".js-select-label", "Select"), i(".js-audio-video-stutter-label", "Audio and video stutter"), i(".js-video-stutter-label", "Video stutters, but audio is fine"), i(".js-video-black-label", "Video is completely black or doesn't load"), i(".js-audio-video-desync-label", "Audio and video aren't synced"), i(".js-fullscreen-not-working-label", "Fullscreen playback doesn't work"), i(".js-ad-too-loud-label", "Advertisement can't be muted or is too loud"), i(".js-ad-too-often-label", "Advertisement has played too many times"), i(".js-submit-label", "Submit"), i(".js-report-thanks-label", "Thanks for your report"), i(".js-coming-up-label", "Coming Up"), i(".js-advertisement-label", "Advertisement"), i(".js-now-playing-label", "Now playing: "), i(".js-playing-label", "playing "), i(".js-for-label", "for"), i(".js-broadcast-reload-label", "The player will automatically reload when the broadcast is back."), i(".js-mature-warning-label", "The broadcaster indicated that the channel is intended for mature audiences."), i(".js-age-gate-warning-label", "You must be 21 to view this content. Please enter your date of birth."), i(".js-age-gate-failed-once-label", "Sorry, you must be over the age of 21 to view this content."), i(".js-age-gate-locked-out-label", "Sorry, you must be over the age of 21 to view this content."), i(".js-age-gate-submit", "Submit"), i(".js-player-alert__message", "Audio for portions of this video has been muted as it appears to contain copyrighted content owned or controlled by a third party."), i(".js-cc-label", "Closed Captioning"), i(".js-introducing-cc-label", "Click the CC button to enable closed captions and click the gear button to customize."), i(".js-introducing-cc-label-header", "Live Closed Captions"), i(".js-cc-modal-header", "Closed Caption Settings"), i(".js-cc-presets-tab", "Presets"), i(".js-cc-text-tab", "Text"), i(".js-cc-effects-tab", "Effects"), i(".js-cc-background-tab", "Background"), i(".js-cc-window-tab", "Window"), i(".js-cc-aa", "Aa"), i(".js-cc-font-label", "Font"), i('.js-cc-font-dropdown option[value="mono-serif"]', "Mono Serif"), i('.js-cc-font-dropdown option[value="prop-serif"]', "Serif"), i('.js-cc-font-dropdown option[value="mono-sans-serif"]', "Mono Sans-Serif"), i('.js-cc-font-dropdown option[value="prop-sans-serif"]', "Sans-Serif"), i('.js-cc-font-dropdown option[value="casual"]', "Casual"), i('.js-cc-font-dropdown option[value="cursive"]', "Cursive"), i('.js-cc-font-dropdown option[value="small-capitals"]', "Small Capitals"), i(".js-cc-position-label", "Position"), i('.js-cc-verticalPosition-dropdown option[value="bottom"]', "Bottom"), i('.js-cc-verticalPosition-dropdown option[value="top"]', "Top"), i(".js-cc-justification-label", "Alignment"), i('.js-cc-textAlign-dropdown option[value="center"]', "Center"), i('.js-cc-textAlign-dropdown option[value="left"]', "Left"), i('.js-cc-textAlign-dropdown option[value="right"]', "Right"), i(".js-cc-style-label", "Style"), i(".js-cc-edge-label", "Effect"), i(".js-cc-color-label", "Color"), i(".js-cc-size-label", "Size"), i(".js-cc-font-size", "A"), i(".js-cc-opacity-label", "Opacity"), i(".js-cc-opacity-solid", "Solid"), i(".js-cc-opacity-translucent", "Translucent"), i(".js-cc-opacity-semitransparent", "Semi-Transparent"), i(".js-cc-opacity-transparent", "Transparent"), i(".js-cc-opacity-flashing", "Flashing"), i(".js-cc-learn-more", "Learn more"), i(".js-clips-menu-title", "Introducing Clips"), i(".js-clips-menu-text", "Capture your favorite moments with a single click! Hit the Clips button below and be the first to start sharing."), i(".js-clips-learn-more", "Learn more");
                    var r = Number($(".js-meta-viewers").text());
                    r && ($(".js-viewers-label").text = n.translate(" viewer", {
                        count: r
                    }));
                    var o = function(e, i, r) {
                        $(e, t.$root).attr(i, n.translate(r))
                    };
                    o(".js-control-playpause-button .js-pause-button .js-tip", "data-tip", "Pause"), o(".js-control-playpause-button .js-play-button .js-tip", "data-tip", "Play"), o(".js-control-volume .js-mute .js-control-tip", "data-tip", "Mute"), o(".js-control-volume .js-unmute .js-control-tip", "data-tip", "Unmute"), o(".js-menu-button .js-tip", "data-tip", "Options"), o(".js-theatre-button .js-control-tip", "data-tip", "Theater Mode"), o(".js-exit-theatre-button .js-control-tip", "data-tip", "Exit Theater Mode"), o(".js-control-cc .js-tip", "data-tip", "Captions"), o(".js-control-fullscreen .js-fullscreen .js-control-tip", "data-tip", "Fullscreen"), o(".js-control-clips .js-tip", "data-tip", "Clip"), o(".js-control-fullscreen .js-exit-fullscreen .js-control-tip", "data-tip", "Exit Fullscreen"), o(".js-chromecast-btuton .js-tip", "data-tip", "Chromecast"), o(".js-watch-twitch .js-tip", "data-tip", "Watch on Twitch"), o(".js-font-increment-tip", "data-tip", "Increase Size"), o(".js-font-decrement-tip", "data-tip", "Decrease Size"), $(".js-quality", this.$root).children("option").each(function(e, t) {
                        var i = s.qualityText[$(t).val()];
                        $(t).text(n.translate(i))
                    })
                }
            }]), t
        }(u.UIStateSubscriber)
    }, function(e, t, n) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.UIStateSubscriber = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            o = n(158),
            a = "unsub_" + Date.now();
        t.UIStateSubscriber = function() {
            function e() {
                i(this, e), this[a] = []
            }
            return r(e, [{
                key: "subscribe",
                value: function(e, t, n) {
                    this[a].push((0, o.subscribe)(e, t, n))
                }
            }, {
                key: "destroy",
                value: function() {
                    this[a].forEach(function(e) {
                        return e()
                    })
                }
            }]), e
        }()
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PlayerUIClosedCaption = void 0;
        var a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            s = n(50),
            u = r(s),
            l = n(204),
            c = r(l),
            d = n(44),
            f = r(d),
            p = n(288),
            h = r(p),
            v = n(258),
            g = n(262),
            m = i(g),
            _ = n(158),
            y = ["top", "bottom", "textAlign", "fontSize", "lineHeight"];
        t.PlayerUIClosedCaption = function() {
            function e(t, n) {
                o(this, e), this._stateStore = t, this._root = n, this._initDefaults(), this._initHandlers(), this.unsubscribe = this._subscribe()
            }
            return a(e, [{
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
                    return (0, _.subscribe)(this._stateStore, ["captions"], function(t, n) {
                        var i = t.captions,
                            r = n.captions;
                        i.available !== r.available && e.showCCAvailability(i.available), i.enabled !== r.enabled && (e.setCCIconStatus(i.enabled), e.showCaption(i)), i.data !== r.data && e.showCaption(i), (i.preset !== r.preset || i.style !== r.style) && e.applyCCStyle()
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
                        t = m.calculateRGBA(m.fontColorMap[e.fontColorName].fontColorValue, m.opacityMap[e.fontOpacity].opacityValue),
                        n = {
                            color: t,
                            animation: m.opacityMap[e.fontOpacity].animation
                        },
                        i = m.calculateRGBA(m.backgroundColorMap[e.backgroundColorName].backgroundColorValue, m.opacityMap[e.backgroundOpacity].opacityValue),
                        r = (0, u["default"])({}, e, n, m.fontMap[e.font], m.edgeMap[e.edge], m.verticalPositionMap[e.verticalPosition], m.fontUnderlineMap[e.fontUnderline], m.fontItalicMap[e.fontItalic], m.fontBoldMap[e.fontBold], m.alignmentMap[e.alignment], {
                            backgroundColor: i
                        }),
                        o = (0, c["default"])(r, y);
                    $(".js-player-captions", this._root).css(o);
                    var a = (0, f["default"])(r, y);
                    $(".js-player-captions-container").css(a);
                    var s = m.calculateRGBA(m.backgroundColorMap[e.windowColorName].backgroundColorValue, m.opacityMap[e.windowOpacity].opacityValue);
                    $(".js-player-captions-window").css({
                        backgroundColor: s
                    }), this.setFontSizeStatus(e.fontSize)
                }
            }, {
                key: "setFontSizeStatus",
                value: function(e) {
                    var t = $(".js-cc-font-size", this._root);
                    t.filter('[value="increment"]').prop("disabled", e === m.fontSizeMap.max), t.filter('[value="decrement"]').prop("disabled", e === m.fontSizeMap.min)
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
            for (var t = -1, n = e ? e.length : 0, i = 0, r = []; ++t < n;) {
                var o = e[t];
                o && (r[i++] = o)
            }
            return r
        }
        e.exports = n
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t, n) {
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
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PlayerUISettings = void 0;
        var s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            u = n(50),
            l = r(u),
            c = n(59),
            d = i(c),
            f = n(290),
            p = r(f),
            h = n(210),
            v = i(h),
            g = n(263),
            m = n(258),
            _ = n(158),
            y = n(262),
            b = "This video quality is only available to subscribers. Subscribe now to watch and support %s.",
            E = "custom",
            w = ["font", "fontOpacity", "alignment", "verticalPosition", "backgroundOpacity", "windowOpacity"],
            k = ["fontColorName", "edge", "backgroundColorName", "windowColorName"],
            T = ["fontUnderline", "fontBold", "fontItalic"];
        t.PlayerUISettings = function() {
            function e(t, n, i, r, o, s, u) {
                a(this, e), this._player = t, this._root = n, this._state = i, this._stateStore = r, this._analytics = o, this._controlsDisplay = s, this._options = u, this._unsubscribes = [], this._unsubscribes.push(this._subscribePlayback()), this._initEvents(), this._initDom(), this._initCustomCaptionsForm()
            }
            return s(e, [{
                key: "_initEvents",
                value: function() {
                    this._player.addEventListener("loadstart", this.onLoadStart.bind(this)), this._player.addEventListener("loadedmetadata", this.onLoadedMetadata.bind(this)), this._player.addEventListener("qualitychange", this.onQualityChange.bind(this)), this._player.addEventListener("qualitieschange", this.onQualitiesChange.bind(this)), this._player.addEventListener("restricted", this.onRestricted.bind(this))
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
                        }), $(window).on("blur", this.hideMenu.bind(this)), $(this._root).on("submit", ".js-video-issue-form", this.submitVideoIssueReport.bind(this)),
                        $(".js-cc-preset", this._root).on("click", this.selectPreset.bind(this)), $(".js-control-cc", this._root).on("mouseenter", this.onHoverClosedCaptionIcon.bind(this)), $(".js-control-cc", this._root).on("click", this.closeCCIntroModal.bind(this)), $(".js-menu-button-settings", this._root).on("click", this.closeCCIntroModal.bind(this)), $(".js-cc-learn-more", this._root).on("click", this.onClickLearnMore.bind(this)), $(".js-cc-info-modal-dismiss", this._root).on("click", this.closeCCIntroModal.bind(this)), $(".js-cc-open-modal", this._root).on("click", this.openCCModal.bind(this)), $(".js-cc-modal-container", this._root).on("click", function(e) {
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
                    return (0, _.subscribe)(this._stateStore, ["playback"], function(t, n) {
                        var i = t.playback,
                            r = n.playback;
                        r.quality !== i.quality && (e._player.getPaused() || $(".js-quality-display-contain", e._root).attr("data-q", "loading")), r.restrictedQualityError !== i.restrictedQualityError && i.restrictedQualityError === !0 && e.onRestricted()
                    })
                }
            }, {
                key: "_subscribeCaptions",
                value: function() {
                    var e = this;
                    return (0, _.subscribe)(this._stateStore, ["captions"], function(t, n) {
                        var i = t.captions,
                            r = n.captions;
                        i.preset !== r.preset && (e.setCurrentPreset(), e.setCurrentStyles())
                    })
                }
            }, {
                key: "_initCustomCaptionsForm",
                value: function() {
                    var e = this,
                        t = this._stateStore.getState().captions.style;
                    k.forEach(function(n) {
                        e._setRadioAttribute(n, t)
                    }), w.forEach(function(n) {
                        e._setDropdownAttribute(n, t)
                    }), T.forEach(function(n) {
                        e._setCheckboxAttribute(n, t)
                    }), $(".js-cc-modal", this._root).on("change", ".js-cc-dropdown", function(t) {
                        var n = $(t.target);
                        e._stateStore.dispatch((0, m.setCaptionsPreset)(E, o({}, n.attr("name"), n.val())))
                    }), $(".js-cc-modal", this._root).on("click", ".js-cc-radio", function(t) {
                        var n = $(t.target);
                        e._stateStore.dispatch((0, m.setCaptionsPreset)(E, o({}, n.attr("name"), n.val())))
                    }), $(".js-cc-modal", this._root).on("click", ".js-cc-checkbox", function(t) {
                        var n = $(t.target);
                        e._stateStore.dispatch((0, m.setCaptionsPreset)(E, o({}, n.attr("name"), n.prop("checked") ? n.val() : y.presetMap["white-on-black"][n.attr("name")])))
                    }), $(".js-cc-font-size", this._root).on("click", function(t) {
                        var n = y.fontSizeMap[$(t.target).val()],
                            i = e._stateStore.getState().captions.style.fontSize,
                            r = i + parseInt(n, 10);
                        e._stateStore.dispatch((0, m.setCaptionsPreset)(E, {
                            fontSize: r
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
                        var i = $(n).attr("data-preset") === e;
                        $(n).toggleClass("js-cc-preset-selected", i)
                    })
                }
            }, {
                key: "setCurrentStyles",
                value: function() {
                    var e = this,
                        t = this._stateStore.getState().captions.style;
                    w.forEach(function(n) {
                        e._setDropdownAttribute(n, t)
                    }), k.forEach(function(n) {
                        e._setRadioAttribute(n, t)
                    }), T.forEach(function(n) {
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
                        i = t[e] === n.val();
                    n.prop("checked", i)
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
                key: "onQualityChange",
                value: function() {
                    var e = this._player.getQuality();
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
                    for (var e = this._player.getQualities(), t = $(".js-quality", this._root).empty(), n = this._player.getQuality(), i = 0; i < e.length; i++) {
                        var r = e[i],
                            o = this._stateStore.getState().lang.translate(d.qualityText[r] || r);
                        $("<option>").val(r).text(o).appendTo(t)
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
                    this._stateStore.dispatch((0, m.setLearnMoreClicks)(e + 1))
                }
            }, {
                key: "selectPreset",
                value: function(e) {
                    var t = $(e.target).closest(".js-cc-preset").attr("data-preset");
                    this._stateStore.dispatch((0, m.setCaptionsPreset)(t, y.presetMap[t]))
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
                        var i = {
                            issue: n.issue
                        };
                        i = (0, l["default"])(i, this._player.getVideoInfo()), this._analytics.trackEvent("vid_issue_report", i), $(".js-video-issue", this._root).attr("data-complete", !0), setTimeout(this.hideMenu, d.reportHideDelay)
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
                    var e = this._stateStore.getState().lang.translate(b);
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
        var i, i;
        /*!
         * clipboard.js v1.5.8
         * https://zenorocha.github.io/clipboard.js
         *
         * Licensed MIT © Zeno Rocha
         */
        ! function(t) {
            e.exports = t()
        }(function() {
            return function e(t, n, r) {
                function o(s, u) {
                    if (!n[s]) {
                        if (!t[s]) {
                            var l = "function" == typeof i && i;
                            if (!u && l) return i(s, !0);
                            if (a) return a(s, !0);
                            var c = new Error("Cannot find module '" + s + "'");
                            throw c.code = "MODULE_NOT_FOUND", c
                        }
                        var d = n[s] = {
                            exports: {}
                        };
                        t[s][0].call(d.exports, function(e) {
                            var n = t[s][1][e];
                            return o(n ? n : e)
                        }, d, d.exports, e, t, n, r)
                    }
                    return n[s].exports
                }
                for (var a = "function" == typeof i && i, s = 0; s < r.length; s++) o(r[s]);
                return o
            }({
                1: [function(e, t, n) {
                    var i = e("matches-selector");
                    t.exports = function(e, t, n) {
                        for (var r = n ? e : e.parentNode; r && r !== document;) {
                            if (i(r, t)) return r;
                            r = r.parentNode
                        }
                    }
                }, {
                    "matches-selector": 5
                }],
                2: [function(e, t, n) {
                    function i(e, t, n, i, o) {
                        var a = r.apply(this, arguments);
                        return e.addEventListener(n, a, o), {
                            destroy: function() {
                                e.removeEventListener(n, a, o)
                            }
                        }
                    }

                    function r(e, t, n, i) {
                        return function(n) {
                            n.delegateTarget = o(n.target, t, !0), n.delegateTarget && i.call(e, n)
                        }
                    }
                    var o = e("closest");
                    t.exports = i
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
                    function i(e, t, n) {
                        if (!e && !t && !n) throw new Error("Missing required arguments");
                        if (!s.string(t)) throw new TypeError("Second argument must be a String");
                        if (!s.fn(n)) throw new TypeError("Third argument must be a Function");
                        if (s.node(e)) return r(e, t, n);
                        if (s.nodeList(e)) return o(e, t, n);
                        if (s.string(e)) return a(e, t, n);
                        throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
                    }

                    function r(e, t, n) {
                        return e.addEventListener(t, n), {
                            destroy: function() {
                                e.removeEventListener(t, n)
                            }
                        }
                    }

                    function o(e, t, n) {
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

                    function a(e, t, n) {
                        return u(document.body, e, t, n)
                    }
                    var s = e("./is"),
                        u = e("delegate");
                    t.exports = i
                }, {
                    "./is": 3,
                    delegate: 2
                }],
                5: [function(e, t, n) {
                    function i(e, t) {
                        if (o) return o.call(e, t);
                        for (var n = e.parentNode.querySelectorAll(t), i = 0; i < n.length; ++i)
                            if (n[i] == e) return !0;
                        return !1
                    }
                    var r = Element.prototype,
                        o = r.matchesSelector || r.webkitMatchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector;
                    t.exports = i
                }, {}],
                6: [function(e, t, n) {
                    function i(e) {
                        var t;
                        if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) e.focus(), e.setSelectionRange(0, e.value.length), t = e.value;
                        else {
                            e.hasAttribute("contenteditable") && e.focus();
                            var n = window.getSelection(),
                                i = document.createRange();
                            i.selectNodeContents(e), n.removeAllRanges(), n.addRange(i), t = n.toString()
                        }
                        return t
                    }
                    t.exports = i
                }, {}],
                7: [function(e, t, n) {
                    function i() {}
                    i.prototype = {
                        on: function(e, t, n) {
                            var i = this.e || (this.e = {});
                            return (i[e] || (i[e] = [])).push({
                                fn: t,
                                ctx: n
                            }), this
                        },
                        once: function(e, t, n) {
                            function i() {
                                r.off(e, i), t.apply(n, arguments)
                            }
                            var r = this;
                            return i._ = t, this.on(e, i, n)
                        },
                        emit: function(e) {
                            var t = [].slice.call(arguments, 1),
                                n = ((this.e || (this.e = {}))[e] || []).slice(),
                                i = 0,
                                r = n.length;
                            for (i; r > i; i++) n[i].fn.apply(n[i].ctx, t);
                            return this
                        },
                        off: function(e, t) {
                            var n = this.e || (this.e = {}),
                                i = n[e],
                                r = [];
                            if (i && t)
                                for (var o = 0, a = i.length; a > o; o++) i[o].fn !== t && i[o].fn._ !== t && r.push(i[o]);
                            return r.length ? n[e] = r : delete n[e], this
                        }
                    }, t.exports = i
                }, {}],
                8: [function(e, t, n) {
                    "use strict";

                    function i(e) {
                        return e && e.__esModule ? e : {
                            "default": e
                        }
                    }

                    function r(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }
                    n.__esModule = !0;
                    var o = function() {
                            function e(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var i = t[n];
                                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                }
                            }
                            return function(t, n, i) {
                                return n && e(t.prototype, n), i && e(t, i), t
                            }
                        }(),
                        a = e("select"),
                        s = i(a),
                        u = function() {
                            function e(t) {
                                r(this, e), this.resolveOptions(t), this.initSelection()
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
                            }, o(e, [{
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

                    function i(e) {
                        return e && e.__esModule ? e : {
                            "default": e
                        }
                    }

                    function r(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
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

                    function a(e, t) {
                        var n = "data-clipboard-" + e;
                        if (t.hasAttribute(n)) return t.getAttribute(n)
                    }
                    n.__esModule = !0;
                    var s = e("./clipboard-action"),
                        u = i(s),
                        l = e("tiny-emitter"),
                        c = i(l),
                        d = e("good-listener"),
                        f = i(d),
                        p = function(e) {
                            function t(n, i) {
                                r(this, t), e.call(this), this.resolveOptions(i), this.listenClick(n)
                            }
                            return o(t, e), t.prototype.resolveOptions = function() {
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
                                return a("action", e)
                            }, t.prototype.defaultTarget = function(e) {
                                var t = a("target", e);
                                return t ? document.querySelector(t) : void 0
                            }, t.prototype.defaultText = function(e) {
                                return a("text", e)
                            }, t.prototype.destroy = function() {
                                this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                            }, t
                        }(c["default"]);
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

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PlayerUIControlsDisplay = void 0;
        var o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            a = n(59),
            s = i(a),
            u = n(292),
            l = n(293);
        t.PlayerUIControlsDisplay = function() {
            function e(t, n) {
                var i = this;
                r(this, e), this._player = t, this._root = n, this._hovering = !1, this._hideControlsTimeout = null, this._mouseX = 0, this._mouseY = 0, $(this._root).on("mouseenter", ".js-controls-top, .js-controls-bottom", function() {
                    i.setHovering(!0)
                }), $(this._root).on("mouseleave", this.hideControls.bind(this)), $(this._root).on("mouseleave", ".js-controls-top, .js-controls-bottom", function() {
                    i.setHovering(!1)
                }), $(this._root).on("mousemove", function(e) {
                    (i._mouseX !== e.screenX || i._mouseY !== e.screenY) && (i._mouseX = e.screenX, i._mouseY = e.screenY, i.showControls(s.hoverControlsDelay))
                })
            }
            return o(e, [{
                key: "setHovering",
                value: function(e) {
                    (0, l.isTouchDevice)() || (this._hovering = e)
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

        function i(e, t, i) {
            var r;
            r = Date.now ? Date.now() : (new Date).getTime();
            var o = r + i;
            return e && e._estimate > o ? e : (e && clearTimeout(e._handle), new n(t, i, o))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.extendTimeout = i
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
        var i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            r = 20;
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
            return i(e, [{
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
                    }), this._$popupArrow.css("left", this._getLeftOffset(t, r)), this._$popupContainer.css("width", e.width);
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
                        i = e - .5 * t;
                    return Math.max(0, Math.min(i, n - t))
                }
            }, {
                key: "destroy",
                value: function() {}
            }]), e
        }()
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t, n) {
            var i = Math.floor(e.count * (t / n)),
                r = i % (e.hq.cols * e.hq.rows),
                o = g / e.hq.width;
            return {
                thumbOver: {
                    url: e.hq.URLs[Math.floor(i / (e.hq.cols * e.hq.rows))],
                    height: e.hq.height * o,
                    width: e.hq.width * o,
                    sheetWidth: e.hq.width * e.hq.cols * o,
                    x: r % e.hq.cols * e.hq.width * o,
                    y: Math.floor(r / e.hq.cols) * e.hq.height * o
                },
                thumbUnder: {
                    url: e.lq.URLs[0],
                    height: e.hq.height * o,
                    width: e.hq.width * o,
                    sheetWidth: e.hq.width * e.lq.cols * o,
                    x: i % e.lq.cols * e.hq.width * o,
                    y: Math.floor(i / e.lq.cols) * e.hq.height * o
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
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            u = n(173),
            l = n(296),
            c = r(l),
            d = n(299),
            f = r(d),
            p = n(210),
            h = i(p),
            v = 50,
            g = 148;
        t.PlayerUIThumbnailPreviews = function() {
            function e(t, n, i) {
                var r = this;
                o(this, e), this._root = t, this._state = n, this._image = new Image, this._popup = i, this._seekSlider = $(".js-seek-slider", this._root), this._controlsBottom = $(".js-controls-bottom", this._root), this._lastPreviews = this._state.getPreviews(), this._preloadLowQualityThumbnail(), this._controlsBottom.on("mousemove", ".js-seek-slider", (0, c["default"])(this._onSeekBarMouseMoveHandler.bind(this), v)), this._controlsBottom.on("mouseout", ".js-seek-slider", function() {
                    return r._popup.hide()
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
                    if (!$(e.target).hasClass("js-marker-dot") && null !== this._state.duration && this._state.getPreviews().count > 0 && !f["default"].msedge && !f["default"].msie) {
                        var t = e.clientX - this._seekSlider.offset().left,
                            n = this._state.duration * (t / this._seekSlider.width()),
                            i = a(this._state.getPreviews(), n, this._state.duration);
                        this._popup.show(i, t)
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
        function i(e, t, n) {
            var i = !0,
                s = !0;
            if ("function" != typeof e) throw new TypeError(a);
            return o(n) && (i = "leading" in n ? !!n.leading : i, s = "trailing" in n ? !!n.trailing : s), r(e, t, {
                leading: i,
                maxWait: t,
                trailing: s
            })
        }
        var r = n(297),
            o = n(14),
            a = "Expected a function";
        e.exports = i
    }, function(e, t, n) {
        function i(e, t, n) {
            function i() {
                y && clearTimeout(y), v && clearTimeout(v), E = 0, h = v = _ = y = b = void 0
            }

            function l(t, n) {
                n && clearTimeout(n), v = y = b = void 0, t && (E = o(), g = e.apply(_, h), y || v || (h = _ = void 0))
            }

            function c() {
                var e = t - (o() - m);
                0 >= e || e > t ? l(b, v) : y = setTimeout(c, e)
            }

            function d() {
                return (y && b || v && T) && (g = e.apply(_, h)), i(), g
            }

            function f() {
                l(T, y)
            }

            function p() {
                if (h = arguments, m = o(), _ = this, b = T && (y || !w), k === !1) var n = w && !y;
                else {
                    E || v || w || (E = m);
                    var i = k - (m - E),
                        r = (0 >= i || i > k) && (w || v);
                    r ? (v && (v = clearTimeout(v)), E = m, g = e.apply(_, h)) : v || (v = setTimeout(f, i))
                }
                return r && y ? y = clearTimeout(y) : y || t === k || (y = setTimeout(c, t)), n && (r = !0, g = e.apply(_, h)), !r || y || v || (h = _ = void 0), g
            }
            var h, v, g, m, _, y, b, E = 0,
                w = !1,
                k = !1,
                T = !0;
            if ("function" != typeof e) throw new TypeError(s);
            return t = a(t) || 0, r(n) && (w = !!n.leading, k = "maxWait" in n && u(a(n.maxWait) || 0, t), T = "trailing" in n ? !!n.trailing : T), p.cancel = i, p.flush = d, p
        }
        var r = n(14),
            o = n(298),
            a = n(19),
            s = "Expected a function",
            u = Math.max;
        e.exports = i
    }, function(e, t) {
        var n = Date.now;
        e.exports = n
    }, function(e, t, n) {
        var i, r;
        /*!
         * Bowser - a browser detector
         * https://github.com/ded/bowser
         * MIT License | (c) Dustin Diaz 2015
         */
        ! function(o, a) {
            "undefined" != typeof e && e.exports ? e.exports = a() : (i = a, r = "function" == typeof i ? i.call(t, n, t, e) : i, !(void 0 !== r && (e.exports = r)))
        }("bowser", function() {
            function e(e) {
                function n(t) {
                    var n = e.match(t);
                    return n && n.length > 1 && n[1] || ""
                }

                function i(t) {
                    var n = e.match(t);
                    return n && n.length > 1 && n[2] || ""
                }
                var r, o = n(/(ipod|iphone|ipad)/i).toLowerCase(),
                    a = /like android/i.test(e),
                    s = !a && /android/i.test(e),
                    u = /nexus\s*[0-6]\s*/i.test(e),
                    l = !u && /nexus\s*[0-9]+/i.test(e),
                    c = /CrOS/.test(e),
                    d = /silk/i.test(e),
                    f = /sailfish/i.test(e),
                    p = /tizen/i.test(e),
                    h = /(web|hpw)os/i.test(e),
                    v = /windows phone/i.test(e),
                    g = !v && /windows/i.test(e),
                    m = !o && !d && /macintosh/i.test(e),
                    _ = !s && !f && !p && !h && /linux/i.test(e),
                    y = n(/edge\/(\d+(\.\d+)?)/i),
                    b = n(/version\/(\d+(\.\d+)?)/i),
                    E = /tablet/i.test(e),
                    w = !E && /[^-]mobi/i.test(e),
                    k = /xbox/i.test(e);
                /opera|opr|opios/i.test(e) ? r = {
                    name: "Opera",
                    opera: t,
                    version: b || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
                } : /coast/i.test(e) ? r = {
                    name: "Opera Coast",
                    coast: t,
                    version: b || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
                } : /yabrowser/i.test(e) ? r = {
                    name: "Yandex Browser",
                    yandexbrowser: t,
                    version: b || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
                } : /ucbrowser/i.test(e) ? r = {
                    name: "UC Browser",
                    ucbrowser: t,
                    version: n(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
                } : /mxios/i.test(e) ? r = {
                    name: "Maxthon",
                    maxthon: t,
                    version: n(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
                } : /epiphany/i.test(e) ? r = {
                    name: "Epiphany",
                    epiphany: t,
                    version: n(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
                } : /puffin/i.test(e) ? r = {
                    name: "Puffin",
                    puffin: t,
                    version: n(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
                } : /sleipnir/i.test(e) ? r = {
                    name: "Sleipnir",
                    sleipnir: t,
                    version: n(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
                } : /k-meleon/i.test(e) ? r = {
                    name: "K-Meleon",
                    kMeleon: t,
                    version: n(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
                } : v ? (r = {
                    name: "Windows Phone",
                    windowsphone: t
                }, y ? (r.msedge = t, r.version = y) : (r.msie = t, r.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(e) ? r = {
                    name: "Internet Explorer",
                    msie: t,
                    version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
                } : c ? r = {
                    name: "Chrome",
                    chromeos: t,
                    chromeBook: t,
                    chrome: t,
                    version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
                } : /chrome.+? edge/i.test(e) ? r = {
                    name: "Microsoft Edge",
                    msedge: t,
                    version: y
                } : /vivaldi/i.test(e) ? r = {
                    name: "Vivaldi",
                    vivaldi: t,
                    version: n(/vivaldi\/(\d+(\.\d+)?)/i) || b
                } : f ? r = {
                    name: "Sailfish",
                    sailfish: t,
                    version: n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
                } : /seamonkey\//i.test(e) ? r = {
                    name: "SeaMonkey",
                    seamonkey: t,
                    version: n(/seamonkey\/(\d+(\.\d+)?)/i)
                } : /firefox|iceweasel|fxios/i.test(e) ? (r = {
                    name: "Firefox",
                    firefox: t,
                    version: n(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
                }, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(e) && (r.firefoxos = t)) : d ? r = {
                    name: "Amazon Silk",
                    silk: t,
                    version: n(/silk\/(\d+(\.\d+)?)/i)
                } : /phantom/i.test(e) ? r = {
                    name: "PhantomJS",
                    phantom: t,
                    version: n(/phantomjs\/(\d+(\.\d+)?)/i)
                } : /blackberry|\bbb\d+/i.test(e) || /rim\stablet/i.test(e) ? r = {
                    name: "BlackBerry",
                    blackberry: t,
                    version: b || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
                } : h ? (r = {
                    name: "WebOS",
                    webos: t,
                    version: b || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
                }, /touchpad\//i.test(e) && (r.touchpad = t)) : /bada/i.test(e) ? r = {
                    name: "Bada",
                    bada: t,
                    version: n(/dolfin\/(\d+(\.\d+)?)/i)
                } : p ? r = {
                    name: "Tizen",
                    tizen: t,
                    version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || b
                } : /qupzilla/i.test(e) ? r = {
                    name: "QupZilla",
                    qupzilla: t,
                    version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || b
                } : /chrome|crios|crmo/i.test(e) ? r = {
                    name: "Chrome",
                    chrome: t,
                    version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
                } : s ? r = {
                    name: "Android",
                    version: b
                } : /safari|applewebkit/i.test(e) ? (r = {
                    name: "Safari",
                    safari: t
                }, b && (r.version = b)) : o ? (r = {
                    name: "iphone" == o ? "iPhone" : "ipad" == o ? "iPad" : "iPod"
                }, b && (r.version = b)) : r = /googlebot/i.test(e) ? {
                    name: "Googlebot",
                    googlebot: t,
                    version: n(/googlebot\/(\d+(\.\d+))/i) || b
                } : {
                    name: n(/^(.*)\/(.*) /),
                    version: i(/^(.*)\/(.*) /)
                }, !r.msedge && /(apple)?webkit/i.test(e) ? (/(apple)?webkit\/537\.36/i.test(e) ? (r.name = r.name || "Blink", r.blink = t) : (r.name = r.name || "Webkit", r.webkit = t), !r.version && b && (r.version = b)) : !r.opera && /gecko\//i.test(e) && (r.name = r.name || "Gecko", r.gecko = t, r.version = r.version || n(/gecko\/(\d+(\.\d+)?)/i)), r.msedge || !s && !r.silk ? o ? (r[o] = t, r.ios = t) : m ? r.mac = t : k ? r.xbox = t : g ? r.windows = t : _ && (r.linux = t) : r.android = t;
                var T = "";
                r.windowsphone ? T = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : o ? (T = n(/os (\d+([_\s]\d+)*) like mac os x/i), T = T.replace(/[_\s]/g, ".")) : s ? T = n(/android[ \/-](\d+(\.\d+)*)/i) : r.webos ? T = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : r.blackberry ? T = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : r.bada ? T = n(/bada\/(\d+(\.\d+)*)/i) : r.tizen && (T = n(/tizen[\/\s](\d+(\.\d+)*)/i)), T && (r.osversion = T);
                var S = T.split(".")[0];
                return E || l || "ipad" == o || s && (3 == S || S >= 4 && !w) || r.silk ? r.tablet = t : (w || "iphone" == o || "ipod" == o || s || u || r.blackberry || r.webos || r.bada) && (r.mobile = t), r.msedge || r.msie && r.version >= 10 || r.yandexbrowser && r.version >= 15 || r.vivaldi && r.version >= 1 || r.chrome && r.version >= 20 || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 ? r.a = t : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 ? r.c = t : r.x = t, r
            }
            var t = !0,
                n = e("undefined" != typeof navigator ? navigator.userAgent : "");
            return n.test = function(e) {
                for (var t = 0; t < e.length; ++t) {
                    var i = e[t];
                    if ("string" == typeof i && i in n) return !0
                }
                return !1
            }, n._detect = e, n
        })
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.AgeRestrictionOverlay = t.NONE_ATTR = t.MATURE_ATTR = t.AGEGATE_LOCKED_OUT_ATTR = t.AGEGATE_FAILED_ATTR = t.AGEGATE_ATTR = t.KEY_MATURE = t.KEY_AGEGATES_FAILED = t.KEY_AGEGATE = t.AGEGATE_CHANNELS = void 0;
        var a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            s = n(172),
            u = r(s),
            l = n(203),
            c = n(257),
            d = n(158),
            f = n(94),
            p = n(35),
            h = i(p),
            v = t.AGEGATE_CHANNELS = ["budlight"],
            g = t.KEY_AGEGATE = "age_gate",
            m = t.KEY_AGEGATES_FAILED = "age_gates_failed",
            _ = t.KEY_MATURE = "mature",
            y = t.AGEGATE_ATTR = "age-gate",
            b = t.AGEGATE_FAILED_ATTR = "age-gate-failed",
            E = t.AGEGATE_LOCKED_OUT_ATTR = "age-gate-locked-out",
            w = t.MATURE_ATTR = "mature",
            k = t.NONE_ATTR = "none";
        t.AgeRestrictionOverlay = function() {
            function e(t, n, i) {
                var r = this;
                o(this, e), this.$root = $(t), this.player = n, this.stateStore = i, this._setOverlay(k), this._populateAgeDropdowns(), this._unsubscribes = [], this._unsubscribes.push(this._subscribeStream()), this._unsubscribes.push(this._subscribeOnline()), this.$root.on("click", ".js-player-mature-accept", function(e) {
                    e.preventDefault(), u.set(_, !0), r._setOverlay(k), r.player.play(), r.player.setMuted(!1)
                }), this.$root.on("click", ".js-age-gate-submit", function(e) {
                    e.preventDefault(), r._is21OrOlder() ? r._setAgeGatePassed() : (r._setAgeGateFailed(), r._getChannelName().then(r._checkOverlayRequired.bind(r)))
                }), this.player.addEventListener("playing", this._onPlaying.bind(this)), this._handleStateUpdate()
            }
            return a(e, [{
                key: "_checkOverlayRequired",
                value: function(e) {
                    var t = this;
                    if ((0, h["default"])(v, e))
                        if (1 === this._getAgeGatesFailed(e)) this._setOverlay(b);
                        else if (this._getAgeGatesFailed(e) >= 2) this._setOverlay(E);
                    else {
                        var n = u.get(g, {});
                        n[e] || this._setOverlay(y)
                    } else(0, f.channelInfo)(e).then(function(e) {
                        var n = e.mature && !u.get(_, !1);
                        t._setOverlay(n ? w : k)
                    })
                }
            }, {
                key: "_getChannelName",
                value: function() {
                    var e = this.stateStore.getState().stream;
                    switch (e.contentType) {
                        case c.CONTENT_MODE_VOD:
                            return (0, f.videoInfo)(e.videoId).then(function(e) {
                                return e.channel.name
                            });
                        case l.CONTENT_MODE_LIVE:
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
                        i = t.online;
                    switch (n.contentType) {
                        case c.CONTENT_MODE_VOD:
                            (0, f.videoInfo)(n.videoId).then(function(t) {
                                e._checkOverlayRequired(t.channel.name)
                            });
                            break;
                        case l.CONTENT_MODE_LIVE:
                            i ? this._checkOverlayRequired(n.channel) : this._setOverlay(k);
                            break;
                        default:
                            return
                    }
                }
            }, {
                key: "_onPlaying",
                value: function() {
                    this.$root.attr("data-overlay") !== k && (this.player.pause(), this.player.setMuted(!0))
                }
            }, {
                key: "_setOverlay",
                value: function(e) {
                    this.$root.attr("data-overlay", e), e !== k && this.player.setMuted(!0, !0)
                }
            }, {
                key: "_is21OrOlder",
                value: function() {
                    var e = $(".js-age-gate .js-select-year option:selected", this.$root)[0].value,
                        t = $(".js-age-gate .js-select-month option:selected", this.$root)[0].value,
                        n = $(".js-age-gate .js-select-day option:selected", this.$root)[0].value,
                        i = new Date(e, t, n),
                        r = new Date;
                    return r.setFullYear(r.getFullYear() - 21), i.getTime() <= r.getTime()
                }
            }, {
                key: "_setAgeGatePassed",
                value: function() {
                    var e = this,
                        t = u.get(g, {});
                    this._getChannelName().then(function(n) {
                        t[n] = !0, u.set(g, t), e._setOverlay(k), e.player.play(), e.player.setMuted(!1)
                    })
                }
            }, {
                key: "_getAgeGatesFailed",
                value: function(e) {
                    try {
                        var t = JSON.parse(sessionStorage.getItem(m)) || {};
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
                            t = JSON.parse(sessionStorage.getItem(m)) || {}
                        } catch (n) {
                            t = {}
                        }
                        t[e] ? t[e] = t[e] + 1 : t[e] = 1, sessionStorage.setItem(m, JSON.stringify(t))
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
                        var i = document.createElement("option");
                        i.value = n, i.text = n, t[0].add(i)
                    }
                }
            }, {
                key: "_populateDayDropdown",
                value: function() {
                    var e = $(".js-age-gate .js-select-month option:selected", this.$root),
                        t = $(".js-age-gate .js-select-year option:selected", this.$root),
                        n = $(".js-age-gate .js-select-day", this.$root),
                        i = Number(e[0].value) + 1,
                        r = Number(t[0].value);
                    n.empty();
                    for (var o = 1; o <= this._getDaysInMonth(i, r); o++) {
                        var a = document.createElement("option");
                        a.value = o, a.text = o, n[0].add(a)
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

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t) {
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
        }), t.PlayerUIClipsEnabler = void 0;
        var a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            s = function p(e, t, n) {
                null === e && (e = Function.prototype);
                var i = Object.getOwnPropertyDescriptor(e, t);
                if (void 0 === i) {
                    var r = Object.getPrototypeOf(e);
                    return null === r ? void 0 : p(r, t, n)
                }
                if ("value" in i) return i.value;
                var o = i.get;
                if (void 0 !== o) return o.call(n)
            },
            u = n(148),
            l = n(203),
            c = n(94),
            d = n(302),
            f = n(286);
        t.PlayerUIClipsEnabler = function(e) {
            function t(e, n, o, a) {
                i(this, t);
                var s = r(this, Object.getPrototypeOf(t).call(this));
                return s._clipsControls = new d.PlayerUIClipsControls(e, o, a), s._stateStore = n, s.subscribe(s._stateStore, ["stream", "online", "streamMetadata"], s._subscriptionHandler.bind(s)), s
            }
            return o(t, e), a(t, [{
                key: "_subscriptionHandler",
                value: function(e, t) {
                    var n = e.stream || t.stream,
                        i = e.hasOwnProperty("online") ? e.online : t.online,
                        r = e.streamMetadata || t.streamMetadata,
                        o = r.channel,
                        a = o && o.hasOwnProperty("partner") ? o.partner : !1;
                    this._toggle(n.contentType, i, a)
                }
            }, {
                key: "_toggle",
                value: function(e, t, n) {
                    var i = this;
                    return e === l.CONTENT_MODE_LIVE && t && n ? void(0, c.oauthToken)().then(function(e) {
                        var t = e.token;
                        return t ? i._stateStore.getState().experiments.get(u.CLIPS) : Promise.reject("Viewer is not logged in.")
                    }).then(function(e) {
                        return e !== u.CLIPS_EXPERIMENT_ENABLED ? Promise.reject("Clips experiment not enabled") : void i._clipsControls.enableClipsButton()
                    })["catch"](function() {
                        return i._clipsControls.disableClipsButton()
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
        var i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            r = t.HAS_SEEN_CLIP_INTRO_KEY = "has-seen-clips-intro";
        t.PlayerUIClipsControls = function() {
            function e(t, i, r) {
                n(this, e), this.root = t, this.localStore = i, this.clipGenerator = r
            }
            return i(e, [{
                key: "enableClipsButton",
                value: function() {
                    var e = this;
                    this.clipButton.show(), this.clipButton.on("click", function() {
                        e.clipGenerator.recordClip()
                    });
                    var t = this.localStore.get(r);
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
                    this.localStore.set(r, !0), this.hideClipsIntroPopup()
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
        var i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            r = "https://clips.twitch.tv",
            o = "https://clips-staging.twitch.tv";
        t.ClipGenerator = function() {
            function e(t, i, a) {
                n(this, e), this._state = t, this._urlOpener = i, /\/\/(?:www|player).twitch.tv/.test(a) ? this._clipsUrl = r : this._clipsUrl = o
            }
            return i(e, [{
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
        e.exports = '<div class="player-initializing player-center-content"> <div class=player-loading-spinner></div> </div> <div class="player-overlay player-playlist-transition js-transition" data-stage=0></div> <div class="player-overlay player-overlay--wall player-age-restriction-overlay js-age-restriction-overlay"> <div class=player-center-content> <div class=player-mature-overlay> <p class=js-mature-warning-label>The broadcaster indicated that the channel is intended for mature audiences.</p> <p><button type=button id=mature-link class="player-content-button js-player-mature-accept js-mature-accept-label">Start Watching</button></p> </div> <div class="player-age-gate js-age-gate"> <div class=player-age-gate-warning> <p> <svg class=player-age-gate--icon> <use xlink:href=#age-gate-icon /> </svg> </p> <p class=js-age-gate-warning-label>You must be 21 to view this content. Please enter your date of birth.</p> </div> <div class=player-age-gate-failed-once> <p> <svg class=player-age-gate--fail-icon> <use xlink:href=#age-gate-fail-icon /> </svg> </p> <p class=age-gate-locked-out-label>Sorry, you must be over the age of 21 to view this content.</p> </div> <div class=player-datepicker> <select class="player-datepicker--select js-select-month"> <option class=age-gate-jan value=0 selected=selected>January</option> <option class=age-gate-feb value=1>February</option> <option class=age-gate-mar value=2>March</option> <option class=age-gate-apr value=3>April</option> <option class=age-gate-may value=4>May</option> <option class=age-gate-jun value=5>June</option> <option class=age-gate-jul value=6>July</option> <option class=age-gate-aug value=7>August</option> <option class=age-gate-sept value=8>September</option> <option class=age-gate-oct value=9>October</option> <option class=age-gate-nov value=10>November</option> <option class=age-gate-dec value=11>December</option> </select> <select class="player-datepicker--select js-select-day"></select> <select class="player-datepicker--select js-select-year"></select> <button type=button class="js-age-gate-submit player-content-button">Submit</button> </div> </div> <div class=player-age-gate-locked-out> <p> <svg class=player-age-gate--fail-icon> <use xlink:href=#age-gate-fail-icon /> </svg> </p> <p class=age-gate-locked-out-label>Sorry, you must be over the age of 21 to view this content.</p> </div> </div> </div> <div class="player-offline-banner js-offline-banner"> <img class=js-meta-offline /> </div> <div class="player-video-background-banner js-video-background-banner"> <img class=js-meta-video-background /> </div> <div class="player-overlay player-loading js-player-loading"> <div class=player-center-content> <div class=player-loading-spinner></div> </div> </div> <div class="player-overlay player-chromecast-overlay"> <div class=player-center-content> <p class=js-playing-on-label>Playing on <span class="player-chromecast-overlay-device js-chromecast-device">Chromecast</span></p> </div> </div> <div class="player-overlay player-fullscreen-overlay js-control-fullscreen-overlay"> </div> <div class="cc-flag player-captions-container js-player-captions-container"> <div class="player-captions-window js-player-captions-window"> <div class="player-captions js-player-captions"></div> </div> </div> <div class="player-overlay player-play-overlay"> <button type=button class="player-button player-button-play js-control-play-button"> <svg class=player-icon-play><use xlink:href=#icon_play /></svg> </button> </div> <div class="player-overlay player-overlay--wall player-product-overlay js-player-product-overlay"> <div class="player-product-overlay__close js-player-product-close"><a class=js-close-label href=#>Close</a></div> <div class="player-center-content player-product js-player-product"> <p></p> <a href="" target=_blank class="purchase_button js-subscribe-label">Subscribe</a> </div> </div> <div class="player-overlay player-playlist-comingup"> <div class=player-center-content> <div class=player-loading-spinner></div> <p> <span class=js-meta-name></span><span class=js-playlist-started-label> has started a playlist.</span> <br/> <span class=js-playlist-comingup></span> </p> </div> </div> <div class="player-hover player-controls-top js-controls-top"> <div class="player-userinfo js-user-info"> <a href=# target=_blank class="player-userinfo__picture js-meta-url"> <img class=js-meta-picture /> </a> <div class=player-userinfo__meta-container> <div class=player-userinfo__name> <a href=# target=_blank class="player-text-link player-text-link--no-color js-meta-name js-meta-url"></a> </div> <div class="player-userinfo__title js-meta-title"></div> <div class=player-userinfo__game> <span class=js-playing-label>playing </span><a href=# target=_blank class="player-text-link player-text-link--no-color js-meta-game"></a> <span class=player-userinfo__viewers><span class=js-for-label>for</span> <span class=js-meta-viewers></span><span class=js-viewers-label> viewers</span></span> </div> </div> </div> </div> <div class=player-storm-warning> <div class=player-center-content> <div class=player-loading-spinner></div> <p> <span class=js-broadcast-down-label>The broadcast is down.</span><br/> <span class=js-broadcast-reload-label>The player will automatically reload when the broadcast is back.</span> </p> </div> </div> <div class=player-error> <div class=player-center-content> <p class=js-player-error></p> </div> </div> <div class="player-hover player-livestatus js-livestatus"> <div class=player-livestatus__online><span class=js-live-label>Live</span></div> <div class=player-livestatus__offline><span class=js-offline-label>Offline</span></div> <div class=player-livestatus__playlist><span class=js-playlist-label>Playlist</span></div> </div> <div class="js-cc-modal-container player-modal__container" data-state=closed> <div class="js-cc-modal player-modal__content" data-tab-selected=presets> <button type=button class="player-modal__close js-cc-custom-modal-dismiss"> <svg><use xlink:href=#icon_close_modal /></svg> </button> <h2 class="js-cc-modal-header player-modal__header">Closed Caption Settings</h2> <ul class="player-tabs clearfix"> <li class="player-tabs__item player-tabs__item--active" data-tab=presets> <a href=# class=js-cc-presets-tab>Presets</a> </li> <li class="player-tabs__item js-cc-tab-text" data-tab=text> <a href=# class=js-cc-text-tab>Text</a> </li> <li class="player-tabs__item js-cc-tab-text" data-tab=effects> <a href=# class=js-cc-effects-tab>Effects</a> </li> <li class=player-tabs__item data-tab=background> <a href=# class=js-cc-background-tab>Background</a> </li> <li class=player-tabs__item data-tab=window> <a href=# class=js-cc-window-tab>Window</a> </li> </ul> <div class=cc-modal-menu-frame data-tab=presets> <div class="cc-preset-square js-cc-preset js-cc-aa" data-preset=white-on-black>aA</div> <div class="cc-preset-square js-cc-preset js-cc-aa" data-preset=lime-on-black>aA</div> <div class="cc-preset-square js-cc-preset js-cc-aa" data-preset=yellow-on-black>aA</div> <div class="cc-preset-square js-cc-preset js-cc-aa" data-preset=cyan-on-black>aA</div> <div class="cc-preset-square js-cc-preset js-cc-aa" data-preset=magenta-on-black>aA</div> <div class="cc-preset-square js-cc-preset js-cc-aa cc-transparent-bg" data-preset=white-on-trans-black>aA</div> <div class="cc-preset-square js-cc-preset js-cc-aa cc-transparent-bg" data-preset=lime-on-trans-black>aA</div> <div class="cc-preset-square js-cc-preset js-cc-aa cc-transparent-bg" data-preset=yellow-on-trans-black>aA</div> <div class="cc-preset-square js-cc-preset js-cc-aa cc-transparent-bg" data-preset=cyan-on-trans-black>aA</div> <div class="cc-preset-square js-cc-preset js-cc-aa cc-transparent-bg" data-preset=magenta-on-trans-black>aA</div> <div class="cc-preset-square js-cc-preset js-cc-aa" data-preset=black-on-white>aA</div> </div> <div class=cc-modal-menu-frame data-tab=text> <div class=cc-customize-field> <label class=js-cc-font-label for=cc-font>Font</label> <select class=js-cc-dropdown name=font id=cc-font> <option value=mono-serif>Mono Serif</option> <option value=prop-serif>Serif</option> <option value=mono-sans-serif>Mono Sans-Serif</option> <option value=prop-sans-serif>Sans-Serif</option> <option value=casual>Casual</option> <option value=cursive>Cursive</option> <option value=small-capitals>Small Capitals</option> </select> </div> <div class=cc-customize-field> <label class=js-cc-justification-label for=cc-font-justification>Alignment</label> <select class=js-cc-dropdown name=alignment id=cc-font-justification> <option value=left>Left</option> <option value=center>Center</option> <option value=right>Right</option> </select> </div> <div class=cc-customize-field> <label class=js-cc-color-label>Color</label> <div class=cc-color-palette> <div class=cc-color-palette__container> <input id=font-color-white type=radio name=fontColorName class=js-cc-radio value=white> <label for=font-color-white class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=font-color-black type=radio name=fontColorName class=js-cc-radio value=black> <label for=font-color-black class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=font-color-red type=radio name=fontColorName class=js-cc-radio value=red> <label for=font-color-red class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=font-color-green type=radio name=fontColorName class=js-cc-radio value=green> <label for=font-color-green class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=font-color-cyan type=radio name=fontColorName class=js-cc-radio value=cyan> <label for=font-color-cyan class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=font-color-magenta type=radio name=fontColorName class=js-cc-radio value=magenta> <label for=font-color-magenta class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=font-color-yellow type=radio name=fontColorName class=js-cc-radio value=yellow> <label for=font-color-yellow class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=font-color-blue type=radio name=fontColorName class=js-cc-radio value=blue> <label for=font-color-blue class=cc-color-palette__square></label> </div> </div> </div> <div class=cc-customize-field> <label class=js-cc-position-label for=cc-position>Position</label> <select class=js-cc-dropdown name=verticalPosition id=cc-position> <option value=bottom>Bottom</option> <option value=top>Top</option> </select> </div> <div class=cc-customize-field> <label class=js-cc-opacity-label for=cc-font-opacity>Opacity</label> <select class=js-cc-dropdown name=fontOpacity id=cc-font-opacity> <option value=solid>Solid</option> <option value=translucent>Translucent</option> <option value=semiTransparent>Semi-Transparent</option> <option value=flashing>Flashing</option> </select> </div> <div class=cc-customize-field> <label class=js-cc-size-label>Size</label> <button class="js-cc-font-size cc-font-size" value=increment>A <span class="js-font-increment-tip player-tip js-control-tip" data-tip="Increase Size"></span> </button> <button class="js-cc-font-size cc-font-size" value=decrement>A <span class="js-font-decrement-tip player-tip js-control-tip" data-tip="Decrease Size"></span> </button> </div> </div> <div class=cc-modal-menu-frame data-tab=effects> <div class=cc-customize-field> <label class=js-cc-style-label>Style</label> <div class=cc-style-palette> <div class=cc-style-palette__container> <input id=style-underline type=checkbox name=fontUnderline class=js-cc-checkbox value=underline> <label for=style-underline class=cc-style-palette__square>U</label> </div> <div class=cc-style-palette__container> <input id=style-italic type=checkbox name=fontItalic class=js-cc-checkbox value=italic> <label for=style-italic class=cc-style-palette__square>I</label> </div> <div class=cc-style-palette__container> <input id=style-bold type=checkbox name=fontBold class=js-cc-checkbox value=bold> <label for=style-bold class=cc-style-palette__square>B</label> </div> </div> </div> <div class=cc-customize-field> <label class=js-cc-edge-label>Effect</label> <div class=cc-edge-palette> <div class=cc-edge-palette__container> <hr class=cc-edge-disabled /> <input id=edge-effect-none type=radio name=edge class=js-cc-radio value=none> <label for=edge-effect-none class=cc-edge-palette__square>aA</label> </div> <div class=cc-edge-palette__container> <input id=edge-effect-raised type=radio name=edge class=js-cc-radio value=raised> <label for=edge-effect-raised class=cc-edge-palette__square>aA</label> </div> <div class=cc-edge-palette__container> <input id=edge-effect-drop-shadow type=radio name=edge class=js-cc-radio value=drop> <label for=edge-effect-drop-shadow class=cc-edge-palette__square>aA</label> </div> <div class=cc-edge-palette__container> <input id=edge-effect-depressed type=radio name=edge class=js-cc-radio value=depressed> <label for=edge-effect-depressed class=cc-edge-palette__square>aA</label> </div> <div class=cc-edge-palette__container> <input id=edge-effect-uniform type=radio name=edge class=js-cc-radio value=uniform> <label for=edge-effect-uniform class=cc-edge-palette__square>aA</label> </div> </div> </div> </div> <div class=cc-modal-menu-frame data-tab=background> <div class=cc-customize-field> <label class=js-cc-opacity-label for=cc-bg-opacity>Opacity</label> <select class=js-cc-dropdown name=backgroundOpacity id=cc-bg-opacity> <option class=js-cc-opacity-solid value=solid>Solid</option> <option class=js-cc-opacity-translucent value=translucent>Translucent</option> </select> </div> <div class=cc-customize-field> <label class=js-cc-color-label>Color</label> <div class=cc-color-palette> <div class=cc-color-palette__container> <hr class=cc-no-color /> <input id=background-transparent type=radio name=backgroundColorName class=js-cc-radio value=transparent> <label for=background-transparent class="cc-color-palette__square cc-color-palette__square-no-color"></label> </div> <div class=cc-color-palette__container> <input id=background-color-white type=radio name=backgroundColorName class=js-cc-radio value=white> <label for=background-color-white class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=background-color-lightgray type=radio name=backgroundColorName class=js-cc-radio value=lightgray> <label for=background-color-lightgray class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=background-color-gray type=radio name=backgroundColorName class=js-cc-radio value=gray> <label for=background-color-gray class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=background-color-darkgray type=radio name=backgroundColorName class=js-cc-radio value=darkgray> <label for=background-color-darkgray class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=background-color-black type=radio name=backgroundColorName class=js-cc-radio value=black> <label for=background-color-black class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=background-color-green type=radio name=backgroundColorName class=js-cc-radio value=green> <label for=background-color-green class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=background-color-blue type=radio name=backgroundColorName class=js-cc-radio value=blue> <label for=background-color-blue class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=background-color-cyan type=radio name=backgroundColorName class=js-cc-radio value=cyan> <label for=background-color-cyan class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=background-color-magenta type=radio name=backgroundColorName class=js-cc-radio value=magenta> <label for=background-color-magenta class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=background-color-yellow type=radio name=backgroundColorName class=js-cc-radio value=yellow> <label for=background-color-yellow class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=background-color-red type=radio name=backgroundColorName class=js-cc-radio value=red> <label for=background-color-red class=cc-color-palette__square></label> </div> </div> </div> </div> <div class=cc-modal-menu-frame data-tab=window> <div class=cc-customize-field> <label class=js-cc-opacity-label for=cc-window-opacity>Opacity</label> <select class=js-cc-dropdown name=windowOpacity id=cc-window-opacity> <option class=js-cc-opacity-solid value=solid>Solid</option> <option class=js-cc-opacity-translucent value=translucent>Translucent</option> </select> </div> <div class=cc-customize-field> <label class=js-cc-color-label>Color</label> <div class=cc-color-palette> <div class=cc-color-palette__container> <hr class=cc-no-color /> <input id=window-transparent type=radio name=windowColorName class=js-cc-radio value=transparent> <label for=window-transparent class="cc-color-palette__square cc-color-palette__square-no-color"></label> </div> <div class=cc-color-palette__container> <input id=window-color-white type=radio name=windowColorName class=js-cc-radio value=white> <label for=window-color-white class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=window-color-lightgray type=radio name=windowColorName class=js-cc-radio value=lightgray> <label for=window-color-lightgray class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=window-color-gray type=radio name=windowColorName class=js-cc-radio value=gray> <label for=window-color-gray class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=window-color-darkgray type=radio name=windowColorName class=js-cc-radio value=darkgray> <label for=window-color-darkgray class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=window-color-black type=radio name=windowColorName class=js-cc-radio value=black> <label for=window-color-black class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=window-color-green type=radio name=windowColorName class=js-cc-radio value=green> <label for=window-color-green class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=window-color-blue type=radio name=windowColorName class=js-cc-radio value=blue> <label for=window-color-blue class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=window-color-cyan type=radio name=windowColorName class=js-cc-radio value=cyan> <label for=window-color-cyan class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=window-color-magenta type=radio name=windowColorName class=js-cc-radio value=magenta> <label for=window-color-magenta class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=window-color-yellow type=radio name=windowColorName class=js-cc-radio value=yellow> <label for=window-color-yellow class=cc-color-palette__square></label> </div> <div class=cc-color-palette__container> <input id=window-color-red type=radio name=windowColorName class=js-cc-radio value=red> <label for=window-color-red class=cc-color-palette__square></label> </div> </div> </div> </div> </div> </div> <div class="player-hover player-controls-bottom js-controls-bottom"> <div class=player-seek> <div class=player-seek__time-container> <span class="player-seek__time js-seek-currenttime">00:00</span> <span class="player-seek__time player-seek__time--total js-seek-totaltime">00:00</span> </div> <div class="player-slider player-slider--roundhandle js-seek-slider" show-popup=false> <div class="player-slider__tip-container js-slider-tip-container"> <span class="player-tip player-tip--large js-slider-tip" data-tip=00:00></span> </div> <span class="player-slider__buffer js-seek-buffer"></span> <div class="player-slider__muted-segments js-muted-segments-container"></div> <div class="player-slider__marker-dots js-marker-dots-container"></div> <div class="player-slider__popup-container js-popup-container"> <div class="popup-thumb-wrapper js-popup-thumb-wrapper"> <div class="popup-marker-thumbunder js-popup-marker-thumbunder"></div> <div class="popup-marker-thumbover js-popup-marker-thumbover"></div> </div> <div class=popup-info-wrapper> <span class="popup-title js-popup-title"></span> <span class="popup-info js-popup-info"></span> </div> <span class="popup-timestamp js-popup-timestamp"></span> </div> <div class="popup-arrow js-popup-arrow"></div> </div> </div> <div class=player-buttons-left> <button type=button class="player-button player-button--playpause js-control-playpause-button" tabindex=-1> <span class="pause-button js-pause-button"> <span class="player-tip player-tip--aleft js-tip" data-tip=Pause></span> <svg class=player-icon-pause><use xlink:href=#icon_pause /></svg> </span> <span class="play-button js-play-button"> <span class="player-tip player-tip--aleft js-tip" data-tip=Play></span> <svg class=player-icon-play><use xlink:href=#icon_play /></svg> </span> </button> <div class=player-volume> <button type=button class="player-button player-button--volume js-control-volume" data-state=full tabindex=-1> <span class="mute-button js-mute"> <span class="player-tip js-control-tip" data-tip=Mute></span> <svg class=player-icon-volumefull><use xlink:href=#icon_volumefull /></svg> </span> <span class="unmute-button js-unmute"> <span class="player-tip js-control-tip" data-tip=Unmute></span> <svg class=player-icon-volumemute><use xlink:href=#icon_volumemute /></svg> </span> </button> <div class="player-volume__slider-container js-volume-container"> <div class="player-volume__slider player-slider js-volume-slider"></div> </div> </div> </div> <div class=player-buttons-right> <div class="player-menu player-settings-contain js-quality-display-contain" data-q=""> <div class=player-quality> <div class=player-quality__display><span class=js-quality-display></span></div> </div> <button type=button class="player-button player-button--settings js-menu-button js-menu-button-settings" data-state=menu-closed tabindex=-1> <span class="player-tip js-tip" data-tip=Options></span> <div class=player-settings-icon><svg><use xlink:href=#icon_settings /></svg></div> </button> <div class="player-menu__menu js-menu" data-menu=main> <div class="js-main-menu settings-menu--main"> <div class=player-menu__section> <p class="player-menu__header js-player-options-label">Player Options</p> <p class=player-menu__item> <span class="player-menu__item-label js-video-quality-label">Video Quality:</span> <select class="player-menu__select player-menu__item-control js-quality" tabindex=-1></select> </p> <div class="cc-flag player-menu__item js-cc-open-modal"> <a href=# class="player-text-link menu-cc-item"> <span class=js-cc-label>Closed Captioning</span> <div class=settings-menu-arrow> <svg class=arrow-right><use xlink:href=#icon_arrow /></svg> </div> </a> </div> <p class="player-menu__item player-menu__item--popout"> <a href=# class="player-text-link js-popout-player" tabindex=-1>Popout Player</a> </p> <p class="player-menu__item player-menu__item--stats"> <a href=# class="player-text-link js-stats-toggle js-stats-toggle-text" tabindex=-1>Show Video Stats</a> </p> <p class="player-menu__item player-menu__item--copyurl js-copyurl-contain"> <a href=# class="player-text-link js-copy-url">Copy Video URL at Current Time</a> </p> </div> <div class="player-menu__section player-video-issue js-video-issue"> <p class="player-menu__header js-report-issue-label">Report Playback Issue</p> <form class="player-menu__item player-video-issue__form js-video-issue-form"> <select name=issue class=player-menu__select tabindex=-1> <option value="" disabled=disabled selected=selected class=js-select-label>Select</option> <option value=stutter-both class=js-audio-video-stutter-label>Audio and video stutter</option> <option value=stutter-video class=js-video-stutter-label>Video stutters, but audio is fine</option> <option value=black-screen class=js-video-black-label>Video is completely black or doesn’t load</option> <option value=av-desync class=js-audio-video-desync-label>Audio and video aren\'t synced</option> <option value=fullscreen-broken class=js-fullscreen-not-working-label>Fullscreen playback doesn\'t work</option> <option value=ad-volume class=js-ad-too-loud-label>Advertisement can\'t be muted or is too loud</option> <option value=ad-repeat class=js-ad-too-often-label>Advertisement has played too many times</option> </select> <button type=submit class="player-video__submit player-video-issue__submit js-submit-label" tabindex=-1>Submit</button> </form> <p class="player-menu__item player-video-issue__complete js-report-thanks-label">Thanks for your report</p> </div> <div class="player-menu__section player-menu-html5 js-menu-html5"> <p class=player-menu__header>HTML5 Playback Beta</p> <div class=player-menu__item> <div class="player-menu-html5__slider js-html5-slider" data-value=on> <div class=value>ON</div> <div class=value>OFF</div> <div class=cover></div> </div> </div> </div> </div> </div> </div> <button type=button class="cc-flag player-button player-button--cc js-control-cc" tabindex=-1> <span class="player-tip js-control-tip" data-tip=Captions></span> <svg class=js-player-icon-cc><use xlink:href=#icon_cc_on /></svg> <svg class=js-player-icon-cc-deactivated><use xlink:href=#icon_cc_off /></svg> </button> <div class="cc-flag player-menu player-menu__modal player-settings-contain"> <div class="player-menu__menu player-menu__menu--intro js-cc-info-modal" id=cc-info-modal> <button type=button class="player-button player-button--noscale player-button--introClose js-cc-info-modal-dismiss"> <svg id=clip-info-close> <use xlink:href=#icon_close_md /> </svg> </button> <div class=player-menu__section> <p class="player-menu__introTitle js-introducing-cc-label-header"> Live Closed Captions </p> <p class="player-menu__introBlock js-introducing-cc-label"> Click the CC button to enable closed captions and click the gear button to customize. </p> <p class=player-menu__introBlock> <a class="js-cc-learn-more player-text-link" href=#> Learn more </a> </p> </div> </div> </div> <div class=player-menu> <button type=button class="player-button player-button--clips js-control-clips"> <span class="player-tip js-tip" data-tip=Clip></span> <svg class=player-icon-clips><use xlink:href=#icon_clips /></svg> </button> <div class="player-menu__menu player-menu__menu--intro js-clips-menu"> <button type=button class="player-button player-button--noscale player-button--introClose js-clips-menu__close"> <svg id=clip-info-close> <use xlink:href=#icon_close_md /> </svg> </button> <div class=player-menu__section> <p class="player-menu__introTitle js-clips-menu-title"> Introducing Clips </p> <p class="player-menu__introBlock js-clips-menu-text"> Capture your favorite moments with a single click! Hit the Clips button below and be the first to start sharing. </p> <p class=player-menu__introBlock> <a href=http://link.twitch.tv/clips-twitch-notification-launch-20160523 class="player-text-link js-clips-learn-more" target=_blank> Learn more </a> </p> </div> </div> </div> <button type=button class="player-button player-button--chromecast js-chromecast-button"> <span class="player-tip js-tip" data-tip=Chromecast></span> <svg class=player-icon-chromecast-p1><use xlink:href=#icon_chromecast_p1 /></svg> <svg class=player-icon-chromecast-p2><use xlink:href=#icon_chromecast_p2 /></svg> <svg class=player-icon-chromecast-p3><use xlink:href=#icon_chromecast_p3 /></svg> <svg class=player-icon-chromecast-p4><use xlink:href=#icon_chromecast_p4 /></svg> <svg class=player-icon-chromecast-p5><use xlink:href=#icon_chromecast_p5 /></svg> </button> <button type=button class="player-button player-button--theatre js-control-theatre" tabindex=-1> <span class="enter-theatre-button js-theatre-button"> <span class="player-tip theatre-inactive-tip js-control-tip" data-tip="Theater Mode"></span> <svg class=player-icon-theatre><use xlink:href=#icon_theatre /></svg> </span> <span class="exit-theatre-button js-exit-theatre-button"> <span class="player-tip theatre-inactive-tip js-control-tip" data-tip="Exit Theater Mode"></span> <svg class=player-icon-theatre-deactivate><use xlink:href=#icon_theatre_deactivate /></svg> </span> </button> <button type=button class="player-button player-button--fullscreen js-control-fullscreen" tabindex=-1> <span class="fullscreen-button js-fullscreen"> <span class="player-tip js-control-tip" data-tip=Fullscreen></span> <svg class=player-icon-fullscreen><use xlink:href=#icon_fullscreen /></svg> </span> <span class="exit-fullscreen-button js-exit-fullscreen"> <span class="player-tip js-control-tip" data-tip="Exit Fullscreen"></span> <svg class=player-icon-unfullscreen><use xlink:href=#icon_unfullscreen /></svg> </span> </button> </div> </div> <button type=button class="player-button player-button--twitch js-watch-twitch"> <span class="player-tip player-tip--aright js-tip" data-tip="Watch on Twitch"></span> <svg><use xlink:href=#icon_twitch /></svg> </button> <div class="player-nextvod js-transition" data-stage=0> <div class=player-nextvod-thumb> <img class="player-nextvod-thumb__image js-next-video-thumbnail"/> <div class=player-nextvod-thumb__timer></div> </div> <div class=player-nextvod-meta> <p class="player-nextvod-meta__next js-coming-up-label"><span>Coming Up</span></p> <p class=player-nextvod-meta__title><span class=js-next-video-title></span></p> </div> </div> <div class=player-ad-notice> <p class=js-advertisement-label>Advertisement</p> </div> <div class="player-hover player-playlist-currentvod"> <p class=js-now-playing-label>Now playing: <span class=js-currentvod-title></span></p> </div> <div class="player-alert js-player-alert"> <p class=js-player-alert__message></p> <button type=button class="player-button player-button--noscale player-button--close js-player-alert__close"> <svg><use xlink:href=#icon_close /></svg> </button> </div> <ul class="player-playback-stats js-playback-stats"> <button type=button class="player-button player-button--noscale player-button--close js-stats-close"> <svg><use xlink:href=#icon_close /></svg> </button> <li>Video Resolution: <div><span class=js-stat-video-resolution></span></div></li> <li>Display Resolution: <div><span class=js-stat-display-resolution></span></div></li> <li>FPS: <div><span class=js-stat-fps></span></div></li> <li>Skipped Frames: <div><span class=js-stat-skipped-frames></span></div></li> <li>Buffer Size: <div><span class=js-stat-buffer-size></span> sec.</div></li> <li class=stats__latency-broadcaster>Latency to Broadcaster: <div><span class=js-stat-hls-latency-broadcaster></span> sec.</div></li> <li class=stats__latency-encoder>Latency to Encoder: <div><span class=js-stat-hls-latency-encoder></span> sec.</div></li> <li>Playback Rate: <div><span class=js-stat-playback-rate></span> Kbps</div></li> <li>Player Volume: <div><span class=js-stat-player-volume></span></div></li> <li>Memory Usage: <div><span class=js-stat-memory-usage></span></div></li> </ul> <svg viewBox="0 0 30 30" xmlns=http://www.w3.org/2000/svg style=width:0;height:0;visibility:hidden;display:block> <symbol viewBox="0 0 30 30" id=icon_play><path clip-rule=evenodd d=M10,7l12,8l-12,8V7z fill-rule=evenodd></path></symbol> <symbol viewBox="0 0 30 30" id=icon_pause><path clip-rule=evenodd d="M9,22h4V8H9V22z M17,8v14h4V8H17z" fill-rule=evenodd></path></symbol> <symbol viewBox="0 0 30 30" id=icon_volumefull><path clip-rule=evenodd d="M22,21.5v-13L23,8v14L22,21.5z M18,10.5l1-0.5v10l-1-0.5V10.5z M7,18v-6l3,0l5-4v14l-5-4L7,18z" fill-rule=evenodd></path></symbol> <symbol viewBox="0 0 30 30" id=icon_volumemute><path clip-rule=evenodd d="M23,18L23,18h-0.7L20,15.7L17.7,18H17l0,0v-0.7l2.3-2.3L17,12.7V12l0,0h0.7l2.3,2.3l2.3-2.3H23l0,0v0.7L20.7,15l2.3,2.3V18z M7,18v-6l3,0l5-4v14l-5-4L7,18z" fill-rule=evenodd></path></symbol> <symbol viewBox="0 0 30 30" id=icon_fullscreen><path clip-rule=evenodd d="M7,7 L15.2,7 L12.8,9.4 L15.8,12.4 L12.4,15.8 L9.4,12.8 L7,15.2 L7,7 Z M23,23 L14.8,23 L17.2,20.6 L14.2,17.6 L17.6,14.2 L20.6,17.2 L23,14.8 L23,23 Z" fill-rule=evenodd></path></symbol> <symbol viewBox="0 0 30 30" id=icon_unfullscreen><path clip-rule=evenodd d="M15,15 L23.2,15 L20.8,17.4 L23.8,20.4 L20.4,23.8 L17.4,20.8 L15,23.2 L15,15 L15,15 Z M15,15 L6.8,15 L9.2,12.6 L6.2,9.6 L9.6,6.2 L12.6,9.2 L15,6.8 L15,15 L15,15 Z" fill-rule=evenodd></path></symbol> <symbol viewBox="0 0 30 30" id=icon_settings><path clip-rule=evenodd d="M13.3589744,7 L16.6410256,7 L18.0769231,9.8 L21.3589744,9.8 L23,12.2 L21.3589744,15 L23,17.8 L21.3589744,20.2 L18.0769231,20.2 L16.6410256,23 L13.3589744,23 L11.9230769,20.2 L8.64102564,20.2 L7,17.8 L8.64102564,15 L7,12.2 L8.64102564,9.8 L11.9230769,9.8 L13.3589744,7 Z M15,17.8 C16.5860485,17.8 17.8717949,16.5463973 17.8717949,15 C17.8717949,13.4536027 16.5860485,12.2 15,12.2 C13.4139515,12.2 12.1282051,13.4536027 12.1282051,15 C12.1282051,16.5463973 13.4139515,17.8 15,17.8 Z" fill-rule=evenodd></path></symbol> <symbol viewBox="0 0 30 30" id=icon_theatre><path d="M6 21h11V9H6v12zM19 9v12h5V9h-5z" fill-rule=evenodd></path></symbol> <symbol viewBox="0 0 30 30" id=icon_theatre_deactivate><path d="M6 9h11v12H6V9zm2 2h9v8H8v-8zm9-2h7v12h-7V9zm2 2h3v8h-3v-8z" fill-rule=evenodd></path></symbol> <symbol viewBox="0 0 63 30" id=icon_twitch><path clip-rule=evenodd d="M55,19 L52,19 L52,13 L49,13 L49,19 L46,19 L46,8 L49,8 L49,10 L53,10 L55,12 L55,19 L55,19 Z M45,13 L41,13 L41,16 L45,16 L45,19 L40,19 L38,17 L38,12 L40,10 L45,10 L45,13 L45,13 Z M37,13 L34,13 L34,16 L37,16 L37,19 L33,19 L31,17 L31,8 L34,8 L34,10 L37,10 L37,13 L37,13 Z M27,8 L30,8 L30,9 L27,9 L27,8 Z M27,10 L30,10 L30,19 L27,19 L27,10 Z M26,17 L24,19 L15,19 L15,10 L18,10 L18,16 L19,16 L19,10 L22,10 L22,16 L23,16 L23,10 L26,10 L26,17 L26,17 Z M14,13 L11,13 L11,16 L14,16 L14,19 L10,19 L8,17 L8,8 L11,8 L11,10 L14,10 L14,13 L14,13 Z M53.5,9 L50,9 L50,7 L45.5,7 L43,9 L39.5,9 L38,10.5 L38,9 L35,9 L35,7 L26,7 L26,9 L15,9 L12,7 L7,7 L7,17.5 L9.5,20.125 L14,23 L18,23 L18,22.25 L19.5,23 L25.5,23 L26.5,21.5 L27,23 L31,23 L31,21.5 L32.5,23 L37,23 L37.25,21.5 L38.5,23 L43.5,23 L45,21.5 L45,23 L47.5,23 L49,21.5 L49,23 L52.5,23 L56,19.5 L56,11.5 L53.5,9 L53.5,9 Z" fill-rule=evenodd></path></symbol> <symbol viewBox="0 0 30 30" id=icon_close><path clip-rule=evenodd d="M15.1035534,15.4571068 L11.5303301,19.0303301 L11.3535534,19.2071068 L11,18.8535534 L11.1767767,18.6767767 L14.75,15.1035534 L11.1767767,11.5303301 L11,11.3535534 L11.3535534,11 L11.5303301,11.1767767 L15.1035534,14.75 L18.6767767,11.1767767 L18.8535534,11 L19.2071068,11.3535534 L19.0303301,11.5303301 L15.4571068,15.1035534 L19.0303301,18.6767767 L19.2071068,18.8535534 L18.8535534,19.2071068 L18.6767767,19.0303301 L15.1035534,15.4571068 Z" fill-rule=evenodd></path></symbol> <symbol viewBox="0 0 30 30" id=icon_close_md><path clip-rule=evenodd d="M20.657 10.757L16.414 15l4.243 4.242-1.415 1.415L15 16.414l-4.243 4.243-1.414-1.415L13.586 15l-4.243-4.243 1.414-1.414L15 13.586l4.242-4.243 1.415 1.414z" fill-rule=evenodd></path></symbol> <symbol viewBox="0 0 30 30" id=icon_chromecast_p1><path fill-rule=evenodd clip-rule=evenodd d=M15,22c0-0.7-0.1-1.4-0.2-2H22V10H8v3.2C7.4,13.1,6.7,13,6,13V8h18v14H15z /></symbol> <symbol viewBox="0 0 30 30" id=icon_chromecast_p2><path fill-rule=evenodd clip-rule=evenodd d=M10,13.9V12h10v6h-5.9C13.2,16.2,11.8,14.8,10,13.9z /></symbol> <symbol viewBox="0 0 30 30" id=icon_chromecast_p3><path fill-rule=evenodd clip-rule=evenodd d=M13,22h-1c0-3.3-2.7-6-6-6v-1C9.9,15,13,18.1,13,22z /></symbol> <symbol viewBox="0 0 30 30" id=icon_chromecast_p4><path fill-rule=evenodd clip-rule=evenodd d=M10,22H9c0-1.7-1.3-3-3-3v-1C8.2,18,10,19.8,10,22z /></symbol> <symbol viewBox="0 0 30 30" id=icon_chromecast_p5><path fill-rule=evenodd clip-rule=evenodd d=M7,22H6v-1C6.6,21,7,21.4,7,22z /></symbol> <symbol viewBox="0 0 30 30" id=icon_clips><path d="M14.802 7.804l-3.83 1.026 2.928 2.321 3.83-1.026-2.928-2.321zm2.895-.776l3.981-1.067.777 2.898-1.83.49-2.928-2.321zM7.969 9.635l-1.745.467L7 13l3.898-1.044-2.929-2.321zM7 13h16v9H7v-9zm1.969 3h2.785l2.228-3h-2.785l-2.228 3zm7.018 0h2.785L21 13h-2.785l-2.228 3z" fill-rule=evenodd /></symbol> <symbol viewBox="0 0 30 30" id=icon_cc_on><path fill-rule=evenodd clip-rule=evenodd d="M5,8 L6,7 L24,7 L25,8 L25,22 L24,23 L6,23 L5,22 L5,8 Z M8,15 C8,17.2003155 9.48065348,18.75 11.5511608,18.75 C13.3929493,18.75 14.4763543,17.6735016 14.7411866,16.1829653 L12.8151333,16.1829653 C12.6225279,16.7271293 12.2252794,17.0820189 11.5511608,17.0820189 C10.527945,17.0820189 9.95012898,16.1829653 9.95012898,15 C9.95012898,13.805205 10.527945,12.9179811 11.5511608,12.9179811 C12.2252794,12.9179811 12.6225279,13.2728707 12.8151333,13.805205 L14.7411866,13.805205 C14.4763543,12.3264984 13.3929493,11.25 11.5511608,11.25 C9.48065348,11.25 8,12.7996845 8,15 Z M15.2588134,15 C15.2588134,17.2003155 16.7394669,18.75 18.8099742,18.75 C20.6517627,18.75 21.7351677,17.6735016 22,16.1829653 L20.0739467,16.1829653 C19.8813414,16.7271293 19.4840929,17.0820189 18.8099742,17.0820189 C17.7867584,17.0820189 17.2089424,16.1829653 17.2089424,15 C17.2089424,13.805205 17.7867584,12.9179811 18.8099742,12.9179811 C19.4840929,12.9179811 19.8813414,13.2728707 20.0739467,13.805205 L22,13.805205 C21.7351677,12.3264984 20.6517627,11.25 18.8099742,11.25 C16.7394669,11.25 15.2588134,12.7996845 15.2588134,15 Z"></path></symbol> <symbol viewBox="0 0 30 30" id=icon_cc_off><path fill-rule=evenodd clip-rule=evenodd d="M5,8 L6,7 L24,7 L25,8 L25,22 L24,23 L6,23 L5,22 L5,8 Z M24,8 L24,22 L6,22 L6,8 L24,8 Z M8,15 C8,17.2003155 9.48065348,18.75 11.5511608,18.75 C13.3929493,18.75 14.4763543,17.6735016 14.7411866,16.1829653 L12.8151333,16.1829653 C12.6225279,16.7271293 12.2252794,17.0820189 11.5511608,17.0820189 C10.527945,17.0820189 9.95012898,16.1829653 9.95012898,15 C9.95012898,13.805205 10.527945,12.9179811 11.5511608,12.9179811 C12.2252794,12.9179811 12.6225279,13.2728707 12.8151333,13.805205 L14.7411866,13.805205 C14.4763543,12.3264984 13.3929493,11.25 11.5511608,11.25 C9.48065348,11.25 8,12.7996845 8,15 Z M15.2588134,15 C15.2588134,17.2003155 16.7394669,18.75 18.8099742,18.75 C20.6517627,18.75 21.7351677,17.6735016 22,16.1829653 L20.0739467,16.1829653 C19.8813414,16.7271293 19.4840929,17.0820189 18.8099742,17.0820189 C17.7867584,17.0820189 17.2089424,16.1829653 17.2089424,15 C17.2089424,13.805205 17.7867584,12.9179811 18.8099742,12.9179811 C19.4840929,12.9179811 19.8813414,13.2728707 20.0739467,13.805205 L22,13.805205 C21.7351677,12.3264984 20.6517627,11.25 18.8099742,11.25 C16.7394669,11.25 15.2588134,12.7996845 15.2588134,15 Z"></path></symbol> <symbol viewBox="0 0 30 30" id=icon_close_modal><path clip-rule=evenodd d="M13.657 3.757l-4.243 4.243 4.243 4.242-1.415 1.415-4.242-4.243-4.243 4.243-1.414-1.415 4.243-4.242-4.243-4.243 1.414-1.414 4.243 4.243 4.242-4.243 1.415 1.414z" fill-rule=evenodd /></symbol> <symbol viewBox="0 0 14 14" id=icon_arrow><path d="M6.46765898,5.00010938 L6.46755335,5 L3.08055618,8.27078515 C2.97320936,8.37444877 2.97610632,8.52662201 3.07163118,8.6255409 L3.47144895,9.03956433 C3.56460436,9.13602957 3.72584608,9.14003286 3.82630008,9.04302556 L6.46765898,6.49229492 L9.10901788,9.04302556 C9.20947188,9.14003286 9.3707136,9.13602957 9.46386901,9.03956433 L9.86368678,8.6255409 C9.95921164,8.52662201 9.9621086,8.37444877 9.85476178,8.27078515 L6.46776461,5 L6.46765898,5.00010938 Z" transform="translate(6.467659, 7.056937) scale(-1, 1) rotate(-270.000000) translate(-6.467659, -7.056937) "></path></symbol> <symbol viewBox="0 0 98 86" id=age-gate-icon><path d="M24 8h50v10h12V8h12v78H0V8h12v10h12V8zm52-8h8v16h-8V0zM14 0h8v16h-8V0zm13.356 43.52h3.8c-.03-.954.068-1.9.29-2.84.225-.938.59-1.78 1.097-2.526.506-.745 1.155-1.348 1.945-1.81.79-.463 1.736-.694 2.84-.694.834 0 1.624.135 2.37.403.744.268 1.393.656 1.944 1.162.552.507.99 1.11 1.32 1.81.327.702.49 1.484.49 2.35 0 1.102-.17 2.07-.513 2.905-.344.835-.85 1.61-1.52 2.326-.672.715-1.514 1.423-2.528 2.124-1.013.7-2.19 1.468-3.532 2.303-1.103.655-2.16 1.356-3.175 2.1-1.014.746-1.923 1.61-2.728 2.595-.805.983-1.468 2.14-1.99 3.465-.52 1.327-.857 2.93-1.006 4.807h20.705v-3.354H30.888c.18-.983.56-1.855 1.14-2.616.582-.76 1.282-1.468 2.102-2.123.82-.656 1.722-1.275 2.705-1.856.984-.58 1.968-1.17 2.952-1.765.983-.626 1.937-1.282 2.86-1.968.925-.686 1.745-1.453 2.46-2.303.716-.85 1.29-1.81 1.722-2.884.432-1.073.648-2.31.648-3.71 0-1.492-.26-2.803-.783-3.936-.522-1.133-1.23-2.08-2.124-2.84-.893-.76-1.944-1.34-3.15-1.744-1.21-.402-2.498-.603-3.87-.603-1.67 0-3.16.283-4.47.85-1.312.566-2.408 1.348-3.287 2.347-.88 1-1.528 2.183-1.945 3.555-.418 1.37-.582 2.86-.492 4.47zM65.17 64V32.297H62.26c-.208 1.192-.596 2.176-1.162 2.95-.567.776-1.26 1.387-2.08 1.834-.82.448-1.736.754-2.75.918-1.013.164-2.057.246-3.13.246v3.04h8.228V64h3.8z" fill=#F9F7FC fill-rule=evenodd /></symbol> <symbol id=age-gate-fail-icon viewBox="0 0 92 81"><path d="M0 75.6l3.067-5.4L9.2 59.4l12.267-21.6 12.266-21.6 6.134-10.8L42.933 0h6.134l3.066 5.4 6.134 10.8 12.266 21.6L82.8 59.4l6.133 10.8L92 75.6 89.06 81H3.44L0 75.6zM40 27h12v13l-3 19h-6l-3-19V27zm1 34h10v10H41V61z" fill=#F9F7FC fill-rule=evenodd /></symbol> </svg>';
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r() {
            return (0, o.createStore)(w, (0, o.compose)((0, o.applyMiddleware)(s["default"]), (window.devToolsExtension, function(e) {
                return e
            })))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.init = r;
        var o = n(306),
            a = n(314),
            s = i(a),
            u = n(315),
            l = n(316),
            c = n(261),
            d = n(318),
            f = n(319),
            p = n(321),
            h = n(343),
            v = n(345),
            g = n(346),
            m = n(347),
            _ = n(348),
            y = n(349),
            b = n(351),
            E = n(352),
            w = (0, o.combineReducers)({
                analytics: u.analytics,
                analyticsTracker: l.analyticsTracker,
                captions: c.captions,
                experiments: f.experiments,
                lang: p.lang,
                navigator: h.navigatorReducer,
                online: v.online,
                playback: g.playback,
                resumeWatch: m.resumeWatch,
                stream: _.stream,
                streamMetadata: d.streamMetadata,
                usher: y.usher,
                viewercount: b.viewercount,
                window: E.windowReducer
            })
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0, t.compose = t.applyMiddleware = t.bindActionCreators = t.combineReducers = t.createStore = void 0;
        var r = n(307),
            o = i(r),
            a = n(309),
            s = i(a),
            u = n(311),
            l = i(u),
            c = n(312),
            d = i(c),
            f = n(313),
            p = i(f),
            h = n(310);
        i(h);
        t.createStore = o["default"], t.combineReducers = s["default"], t.bindActionCreators = l["default"], t.applyMiddleware = d["default"], t.compose = p["default"]
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e, t, n) {
            function i() {
                h === p && (h = p.slice())
            }

            function o() {
                return f
            }

            function u(e) {
                if ("function" != typeof e) throw new Error("Expected listener to be a function.");
                var t = !0;
                return i(), h.push(e),
                    function() {
                        if (t) {
                            t = !1, i();
                            var n = h.indexOf(e);
                            h.splice(n, 1)
                        }
                    }
            }

            function l(e) {
                if (!(0, a["default"])(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
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

            function c(e) {
                if ("function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
                d = e, l({
                    type: s.INIT
                })
            }
            if ("function" == typeof t && "undefined" == typeof n && (n = t, t = void 0), "undefined" != typeof n) {
                if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
                return n(r)(e, t)
            }
            if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
            var d = e,
                f = t,
                p = [],
                h = p,
                v = !1;
            return l({
                type: s.INIT
            }), {
                dispatch: l,
                subscribe: u,
                getState: o,
                replaceReducer: c
            }
        }
        t.__esModule = !0, t.ActionTypes = void 0, t["default"] = r;
        var o = n(308),
            a = i(o),
            s = t.ActionTypes = {
                INIT: "@@redux/INIT"
            }
    }, function(e, t, n) {
        function i(e) {
            if (!o(e) || c.call(e) != a || r(e)) return !1;
            var t = d(e);
            if (null === t) return !0;
            var n = t.constructor;
            return "function" == typeof n && n instanceof n && u.call(n) == l
        }
        var r = n(69),
            o = n(31),
            a = "[object Object]",
            s = Object.prototype,
            u = Function.prototype.toString,
            l = u.call(Object),
            c = s.toString,
            d = Object.getPrototypeOf;
        e.exports = i
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e, t) {
            var n = t && t.type,
                i = n && '"' + n.toString() + '"' || "an action";
            return 'Reducer "' + e + '" returned undefined handling ' + i + ". To ignore an action, you must explicitly return the previous state."
        }

        function o(e) {
            Object.keys(e).forEach(function(t) {
                var n = e[t],
                    i = n(void 0, {
                        type: s.ActionTypes.INIT
                    });
                if ("undefined" == typeof i) throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var r = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if ("undefined" == typeof n(void 0, {
                        type: r
                    })) throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + s.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }

        function a(e) {
            for (var t = Object.keys(e), n = {}, i = 0; i < t.length; i++) {
                var a = t[i];
                "function" == typeof e[a] && (n[a] = e[a])
            }
            var s, u = Object.keys(n);
            try {
                o(n)
            } catch (l) {
                s = l
            }
            return function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                    t = arguments[1];
                if (s) throw s;
                for (var i = !1, o = {}, a = 0; a < u.length; a++) {
                    var l = u[a],
                        c = n[l],
                        d = e[l],
                        f = c(d, t);
                    if ("undefined" == typeof f) {
                        var p = r(l, t);
                        throw new Error(p)
                    }
                    o[l] = f, i = i || f !== d
                }
                return i ? o : e
            }
        }
        t.__esModule = !0, t["default"] = a;
        var s = n(307),
            u = n(308),
            l = (i(u), n(310));
        i(l)
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

        function i(e, t) {
            if ("function" == typeof e) return n(e, t);
            if ("object" != typeof e || null === e) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === e ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var i = Object.keys(e), r = {}, o = 0; o < i.length; o++) {
                var a = i[o],
                    s = e[a];
                "function" == typeof s && (r[a] = n(s, t))
            }
            return r
        }
        t.__esModule = !0, t["default"] = i
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r() {
            for (var e = arguments.length, t = Array(e), n = 0; e > n; n++) t[n] = arguments[n];
            return function(e) {
                return function(n, i, r) {
                    var a = e(n, i, r),
                        u = a.dispatch,
                        l = [],
                        c = {
                            getState: a.getState,
                            dispatch: function(e) {
                                return u(e)
                            }
                        };
                    return l = t.map(function(e) {
                        return e(c)
                    }), u = s["default"].apply(void 0, l)(a.dispatch), o({}, a, {
                        dispatch: u
                    })
                }
            }
        }
        var o = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        };
        t.__esModule = !0, t["default"] = r;
        var a = n(313),
            s = i(a)
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
                return function(i) {
                    return "function" == typeof i ? i(t, n) : e(i)
                }
            }
        }
        t.__esModule = !0, t["default"] = n
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? u : arguments[0],
                t = arguments[1];
            switch (t.type) {
                case s.ACTION_INCREMENT_QUALITY_CHANGE_COUNT:
                    return (0, a["default"])({}, e, {
                        qualityChangeCount: e.qualityChangeCount + 1
                    });
                case s.ACTION_RESET_QUALITY_CHANGE_COUNT:
                    return (0, a["default"])({}, e, {
                        qualityChangeCount: 0
                    });
                case s.ACTION_SET_TRACKING_CLIENTS:
                    return (0, a["default"])({}, e, {
                        trackingClients: t.clients
                    });
                default:
                    return e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DEFAULT_ANALYTICS = void 0, t.analytics = r;
        var o = n(50),
            a = i(o),
            s = n(161),
            u = t.DEFAULT_ANALYTICS = {
                qualityChangeCount: 0
            }
    }, function(e, t, n) {
        "use strict";

        function i() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? !1 : arguments[0],
                t = arguments[1];
            switch (t.type) {
                case r.ACTION_SET_ANALYTICS_TRACKER:
                    return t.tracker;
                default:
                    return e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.analyticsTracker = i;
        var r = n(317)
    }, function(e, t) {
        "use strict";

        function n(e) {
            return {
                type: i,
                tracker: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.setAnalyticsTracker = n;
        var i = t.ACTION_SET_ANALYTICS_TRACKER = "set analytics tracker"
    }, function(e, t, n) {
        "use strict";

        function i() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                t = arguments[1];
            switch (t.type) {
                case r.ACTION_SET_STREAMMETADATA:
                    return t.streamMetadata;
                default:
                    return e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.streamMetadata = i;
        var r = n(267)
    }, function(e, t, n) {
        "use strict";

        function i() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? a : arguments[0],
                t = arguments[1];
            switch (t.type) {
                case r.ACTION_SET_EXPERIMENTS:
                    return t.experiments;
                default:
                    return e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.experiments = i;
        var r = n(320),
            o = new Error("Attempting to use experiments too early"),
            a = {
                get: function() {
                    return Promise.reject(o)
                }
            }
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                type: a,
                experiments: e
            }
        }

        function r(e) {
            var t = e.login,
                n = e.deviceID;
            return i((0, o.createClient)({
                login: t,
                deviceID: n
            }))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ACTION_SET_EXPERIMENTS = void 0, t.setExperiments = i, t.loadExperiments = r;
        var o = n(148),
            a = t.ACTION_SET_EXPERIMENTS = "set experiments"
    }, function(e, t, n) {
        "use strict";

        function i() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? o.DEFAULT_LANGUAGE : arguments[0],
                t = arguments[1];
            switch (t.type) {
                case r.ACTION_SET_LANGUAGE:
                    return t.lang;
                default:
                    return e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.lang = i;
        var r = n(322),
            o = n(323)
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function r(e) {
            return {
                type: p,
                lang: e
            }
        }

        function o(e) {
            return function(t, n) {
                var i = n(),
                    o = i.lang;
                return o.shortCode === e ? Promise.resolve() : (0, d.getI18N)(e).then(r).then(t)
            }
        }

        function a(e) {
            return function(t, n) {
                var i = n(),
                    r = i.lang,
                    a = i.navigator,
                    s = c.get(h, r.shortCode),
                    l = t(o(s)),
                    d = (0, f.userInfo)().then(function(e) {
                        return c.set(h, e.received_language), e.received_language
                    }, function() {
                        return u.get("language", null) || a.languages && a.languages[0] || a.language || a.userLanguage || e
                    }).then(o).then(t);
                return Promise.all([l, d])
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.LAST_KNOWN_LANG = t.ACTION_SET_LANGUAGE = void 0, t.setLanguage = r, t.loadLanguage = o, t.loadDefaultLang = a;
        var s = n(166),
            u = i(s),
            l = n(172),
            c = i(l),
            d = n(323),
            f = n(94),
            p = t.ACTION_SET_LANGUAGE = "set language",
            h = t.LAST_KNOWN_LANG = "playerLanguage"
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e) {
            var t = e.replace(/-[a-zA-Z]{2}$/, function(e) {
                    return e.toUpperCase()
                }),
                n = e.replace(/-[a-zA-Z]{2}$/, "");
            return (0, m["default"])(["ar-SA", "bg-BG", "cs-CZ", "da-DK", "de-DE", "el-GR", "en-US", "es-MX", "es-US", "es-ES", "es-LA", "fi-FI", "fr-FR", "hi-IN", "hu-HU", "it-IT", "ja-JP", "ko-KR", "nl-NL", "no-NO", "pl-PL", "pt-BR", "pt-PT", "ro-RO", "ru-RU", "sk-SK", "sv-SE", "th-TH", "tr-TR", "vi-VN", "zh-TW", "zh-CN"], t) || (t = _[n] || n), new Promise(function(e, i) {
                u["default"].changeLanguage(t, function(r, o) {
                    r ? i(r) : e(new b(n, t, o))
                })
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DEFAULT_LANGUAGE = t.missingKeyHandler = void 0;
        var a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();
        t.getI18N = o;
        var s = n(324),
            u = i(s),
            l = n(340),
            c = i(l),
            d = n(59),
            f = n(96),
            p = i(f),
            h = n(341),
            v = i(h),
            g = n(35),
            m = i(g),
            _ = (0, v["default"])((0, p["default"])(["ar-SA", "bg-BG", "cs-CZ", "da-DK", "de-DE", "el-GR", "en-US", "es-MX", "es-US", "es-ES", "es-LA", "fi-FI", "fr-FR", "hi-IN", "hu-HU", "it-IT", "ja-JP", "ko-KR", "nl-NL", "no-NO", "pl-PL", "pt-BR", "pt-PT", "ro-RO", "ru-RU", "sk-SK", "sv-SE", "th-TH", "tr-TR", "vi-VN", "zh-TW", "zh-CN"], function(e, t) {
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
        u["default"].use(c["default"]).init({
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
        }), u["default"].addResourceBundle("en-US", u["default"].options.ns[0], n(342));
        var b = function() {
            function e(t, n, i) {
                r(this, e), this.shortCode = t, this.langCode = n, this._translate = i
            }
            return a(e, [{
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
        e.exports = n(325)["default"]
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(326),
            o = i(r);
        t["default"] = o["default"]
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            for (var n = Object.getOwnPropertyNames(t), i = 0; i < n.length; i++) {
                var r = n[i],
                    o = Object.getOwnPropertyDescriptor(t, r);
                o && o.configurable && void 0 === e[r] && Object.defineProperty(e, r, o)
            }
            return e
        }

        function a(e, t) {
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
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : o(e, t))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            },
            c = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            },
            d = n(327),
            f = r(d),
            p = n(328),
            h = r(p),
            v = n(329),
            g = r(v),
            m = n(331),
            _ = r(m),
            y = n(334),
            b = r(y),
            E = n(335),
            w = r(E),
            k = n(336),
            T = r(k),
            S = n(337),
            C = r(S),
            O = n(338),
            A = r(O),
            P = n(339),
            j = n(332),
            L = r(j),
            M = n(333),
            I = i(M),
            N = function(e) {
                function t() {
                    var n = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                        i = arguments[1];
                    a(this, t);
                    var r = s(this, e.call(this));
                    return r.options = (0, P.transformOptions)(n), r.services = {}, r.logger = f["default"], r.modules = {}, i && !r.isInitialized && r.init(n, i), r
                }
                return u(t, e), t.prototype.init = function(e, t) {
                    function n(e) {
                        return e ? "function" == typeof e ? new e : e : void 0
                    }
                    var i = this;
                    if ("function" == typeof e && (t = e, e = {}), e || (e = {}), "v1" === e.compatibilityAPI ? this.options = c({}, (0, P.get)(), (0, P.transformOptions)(I.convertAPIOptions(e)), {}) : "v1" === e.compatibilityJSON ? this.options = c({}, (0, P.get)(), (0, P.transformOptions)(I.convertJSONOptions(e)), {}) : this.options = c({}, (0, P.get)(), this.options, (0, P.transformOptions)(e)), t || (t = function() {}), !this.options.isClone) {
                        this.modules.logger ? f["default"].init(n(this.modules.logger), this.options) : f["default"].init(null, this.options);
                        var r = new b["default"](this.options);
                        this.store = new g["default"](this.options.resources, this.options);
                        var o = this.services;
                        o.logger = f["default"], o.resourceStore = this.store, o.resourceStore.on("added removed", function(e, t) {
                            o.cacheConnector.save()
                        }), o.languageUtils = r, o.pluralResolver = new w["default"](r, {
                            prepend: this.options.pluralSeparator,
                            compatibilityJSON: this.options.compatibilityJSON
                        }), o.interpolator = new T["default"](this.options), o.backendConnector = new C["default"](n(this.modules.backend), o.resourceStore, o, this.options), o.backendConnector.on("*", function(e) {
                            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; t > r; r++) n[r - 1] = arguments[r];
                            i.emit.apply(i, [e].concat(n))
                        }), o.backendConnector.on("loaded", function(e) {
                            o.cacheConnector.save()
                        }), o.cacheConnector = new A["default"](n(this.modules.cache), o.resourceStore, o, this.options), o.cacheConnector.on("*", function(e) {
                            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; t > r; r++) n[r - 1] = arguments[r];
                            i.emit.apply(i, [e].concat(n))
                        }), this.modules.languageDetector && (o.languageDetector = n(this.modules.languageDetector), o.languageDetector.init(o, this.options.detection, this.options)), this.translator = new _["default"](this.services, this.options), this.translator.on("*", function(e) {
                            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; t > r; r++) n[r - 1] = arguments[r];
                            i.emit.apply(i, [e].concat(n))
                        })
                    }
                    var a = ["getResource", "addResource", "addResources", "addResourceBundle", "removeResourceBundle", "hasResourceBundle", "getResourceBundle"];
                    return a.forEach(function(e) {
                        i[e] = function() {
                            return this.store[e].apply(this.store, arguments)
                        }
                    }), "v1" === this.options.compatibilityAPI && I.appendBackwardsAPI(this), setTimeout(function() {
                        i.changeLanguage(i.options.lng, function(e, n) {
                            i.emit("initialized", i.options), i.logger.log("initialized", i.options), t(e, n)
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
                                i = function(e) {
                                    var i = t.services.languageUtils.toResolveHierarchy(e);
                                    i.forEach(function(e) {
                                        n.indexOf(e) < 0 && n.push(e)
                                    })
                                };
                            i(t.language), t.options.preload && t.options.preload.forEach(function(e) {
                                i(e)
                            }), t.services.cacheConnector.load(n, t.options.ns, function() {
                                t.services.backendConnector.load(n, t.options.ns, e)
                            })
                        }();
                        if ("object" === ("undefined" == typeof n ? "undefined" : l(n))) return n.v
                    }
                }, t.prototype.use = function(e) {
                    return "backend" === e.type && (this.modules.backend = e), "cache" === e.type && (this.modules.cache = e), ("logger" === e.type || e.log && e.warn && e.warn) && (this.modules.logger = e), "languageDetector" === e.type && (this.modules.languageDetector = e), "postProcessor" === e.type && L["default"].addPostProcessor(e), this
                }, t.prototype.changeLanguage = function(e, t) {
                    var n = this,
                        i = function(i) {
                            e && (n.emit("languageChanged", e), n.logger.log("languageChanged", e)), t && t(i, function() {
                                for (var e = arguments.length, t = Array(e), i = 0; e > i; i++) t[i] = arguments[i];
                                return n.t.apply(n, t)
                            })
                        };
                    !e && this.services.languageDetector && (e = this.services.languageDetector.detect()), e && (this.language = e, this.languages = this.services.languageUtils.toResolveHierarchy(e), this.translator.changeLanguage(e), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage(e)), this.loadResources(function(e) {
                        i(e)
                    })
                }, t.prototype.getFixedT = function(e, t) {
                    var n = this,
                        i = function r(e, t) {
                            return t = t || {}, t.lng = t.lng || r.lng, t.ns = t.ns || r.ns, n.t(e, t)
                        };
                    return i.lng = e, i.ns = t, i
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
                        i = e.filter(function(e) {
                            return n.indexOf(e) < 0
                        });
                    return i.length ? (this.options.preload = n.concat(i), void this.loadResources(t)) : t()
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
                        i = arguments[1],
                        r = new t(c({}, n, this.options, {
                            isClone: !0
                        }), i),
                        o = ["store", "translator", "services", "language"];
                    return o.forEach(function(t) {
                        r[t] = e[t]
                    }), r
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
        var i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            },
            r = {
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
            o = function() {
                function e(t) {
                    var i = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                    n(this, e), this.subs = [], this.init(t, i)
                }
                return e.prototype.init = function(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                    this.prefix = t.prefix || "i18next:", this.logger = e || r, this.options = t, this.debug = t.debug === !1 ? !1 : !0
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
                }, e.prototype.forward = function(e, t, n, i) {
                    (!i || this.debug) && ("string" == typeof e[0] && (e[0] = n + this.prefix + " " + e[0]), this.logger[t](e))
                }, e.prototype.create = function(t) {
                    var n = new e(this.logger, i({
                        prefix: this.prefix + ":" + t + ":"
                    }, this.options));
                    return this.subs.push(n), n
                }, e
            }();
        t["default"] = new o
    }, function(e, t) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
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
                        var i = n.observers[e].indexOf(t);
                        i > -1 && n.observers[e].splice(i, 1)
                    } else delete n.observers[e]
                })
            }, e.prototype.emit = function(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; t > i; i++) n[i - 1] = arguments[i];
                this.observers[e] && this.observers[e].forEach(function(e) {
                    e.apply(void 0, n)
                }), this.observers["*"] && this.observers["*"].forEach(function(t) {
                    var i;
                    t.apply(t, (i = [e]).concat.apply(i, n))
                })
            }, e
        }();
        t["default"] = i
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            for (var n = Object.getOwnPropertyNames(t), i = 0; i < n.length; i++) {
                var r = n[i],
                    o = Object.getOwnPropertyDescriptor(t, r);
                o && o.configurable && void 0 === e[r] && Object.defineProperty(e, r, o)
            }
            return e
        }

        function a(e, t) {
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
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : o(e, t))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            },
            c = n(328),
            d = r(c),
            f = n(330),
            p = i(f),
            h = function(e) {
                function t() {
                    var n = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                        i = arguments.length <= 1 || void 0 === arguments[1] ? {
                            ns: ["translation"],
                            defaultNS: "translation"
                        } : arguments[1];
                    a(this, t);
                    var r = s(this, e.call(this));
                    return r.data = n, r.options = i, r
                }
                return u(t, e), t.prototype.addNamespaces = function(e) {
                    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
                }, t.prototype.removeNamespaces = function(e) {
                    var t = this.options.ns.indexOf(e);
                    t > -1 && this.options.ns.splice(t, 1)
                }, t.prototype.getResource = function(e, t, n) {
                    var i = arguments.length <= 3 || void 0 === arguments[3] ? {} : arguments[3],
                        r = i.keySeparator || this.options.keySeparator;
                    void 0 === r && (r = ".");
                    var o = [e, t];
                    return n && "string" != typeof n && (o = o.concat(n)), n && "string" == typeof n && (o = o.concat(r ? n.split(r) : n)), e.indexOf(".") > -1 && (o = e.split(".")), p.getPath(this.data, o)
                }, t.prototype.addResource = function(e, t, n, i) {
                    var r = arguments.length <= 4 || void 0 === arguments[4] ? {
                            silent: !1
                        } : arguments[4],
                        o = this.options.keySeparator;
                    void 0 === o && (o = ".");
                    var a = [e, t];
                    n && (a = a.concat(o ? n.split(o) : n)), e.indexOf(".") > -1 && (a = e.split("."), i = t, t = a[1]), this.addNamespaces(t), p.setPath(this.data, a, i), r.silent || this.emit("added", e, t, n, i)
                }, t.prototype.addResources = function(e, t, n) {
                    for (var i in n) "string" == typeof n[i] && this.addResource(e, t, i, n[i], {
                        silent: !0
                    });
                    this.emit("added", e, t, n)
                }, t.prototype.addResourceBundle = function(e, t, n, i, r) {
                    var o = [e, t];
                    e.indexOf(".") > -1 && (o = e.split("."), i = n, n = t, t = o[1]), this.addNamespaces(t);
                    var a = p.getPath(this.data, o) || {};
                    i ? p.deepExtend(a, n, r) : a = l({}, a, n), p.setPath(this.data, o, a), this.emit("added", e, t, n)
                }, t.prototype.removeResourceBundle = function(e, t) {
                    this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t)
                }, t.prototype.hasResourceBundle = function(e, t) {
                    return void 0 !== this.getResource(e, t)
                }, t.prototype.getResourceBundle = function(e, t) {
                    return t || (t = this.options.defaultNS), "v1" === this.options.compatibilityAPI ? l({}, this.getResource(e, t)) : this.getResource(e, t)
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

        function i(e, t, n) {
            e.forEach(function(e) {
                t[e] && (n[e] = t[e])
            })
        }

        function r(e, t, n) {
            function i(e) {
                return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e
            }
            for (var r = "string" != typeof t ? [].concat(t) : t.split("."); r.length > 1;) {
                if (!e) return {};
                var o = i(r.shift());
                !e[o] && n && (e[o] = new n), e = e[o]
            }
            return e ? {
                obj: e,
                k: i(r.shift())
            } : {}
        }

        function o(e, t, n) {
            var i = r(e, t, Object),
                o = i.obj,
                a = i.k;
            o[a] = n
        }

        function a(e, t, n, i) {
            var o = r(e, t, Object),
                a = o.obj,
                s = o.k;
            a[s] = a[s] || [], i && (a[s] = a[s].concat(n)), i || a[s].push(n)
        }

        function s(e, t) {
            var n = r(e, t),
                i = n.obj,
                o = n.k;
            return i ? i[o] : void 0
        }

        function u(e, t, n) {
            for (var i in t) i in e ? "string" == typeof e[i] || e[i] instanceof String || "string" == typeof t[i] || t[i] instanceof String ? n && (e[i] = t[i]) : u(e[i], t[i], n) : e[i] = t[i];
            return e
        }

        function l(e) {
            return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
        }

        function c(e) {
            return "string" == typeof e ? e.replace(/[&<>"'\/]/g, function(e) {
                return d[e]
            }) : e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.makeString = n, t.copy = i, t.setPath = o, t.pushPath = a, t.getPath = s, t.deepExtend = u, t.regexEscape = l, t.escape = c;
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

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            for (var n = Object.getOwnPropertyNames(t), i = 0; i < n.length; i++) {
                var r = n[i],
                    o = Object.getOwnPropertyDescriptor(t, r);
                o && o.configurable && void 0 === e[r] && Object.defineProperty(e, r, o)
            }
            return e
        }

        function a(e, t) {
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
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : o(e, t))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            },
            c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            },
            d = n(327),
            f = r(d),
            p = n(328),
            h = r(p),
            v = n(332),
            g = r(v),
            m = n(333),
            _ = i(m),
            y = n(330),
            b = i(y),
            E = function(e) {
                function t(n) {
                    var i = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                    a(this, t);
                    var r = s(this, e.call(this));
                    return b.copy(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector"], n, r), r.options = i, r.logger = f["default"].create("translator"), r
                }
                return u(t, e), t.prototype.changeLanguage = function(e) {
                    e && (this.language = e)
                }, t.prototype.exists = function(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? {
                        interpolation: {}
                    } : arguments[1];
                    return "v1" === this.options.compatibilityAPI && (t = _.convertTOptions(t)), void 0 !== this.resolve(e, t)
                }, t.prototype.extractFromKey = function(e, t) {
                    var n = t.nsSeparator || this.options.nsSeparator;
                    void 0 === n && (n = ":");
                    var i = t.ns || this.options.defaultNS;
                    if (n && e.indexOf(n) > -1) {
                        var r = e.split(n);
                        i = r[0], e = r[1]
                    }
                    return "string" == typeof i && (i = [i]), {
                        key: e,
                        namespaces: i
                    }
                }, t.prototype.translate = function(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                    if ("object" !== ("undefined" == typeof t ? "undefined" : c(t)) ? t = this.options.overloadTranslationOptionHandler(arguments) : "v1" === this.options.compatibilityAPI && (t = _.convertTOptions(t)), void 0 === e || null === e || "" === e) return "";
                    "number" == typeof e && (e = String(e)), "string" == typeof e && (e = [e]);
                    var n = t.lng || this.language;
                    if (n && "cimode" === n.toLowerCase()) return e[e.length - 1];
                    var i = t.keySeparator || this.options.keySeparator || ".",
                        r = this.extractFromKey(e[e.length - 1], t),
                        o = r.key,
                        a = r.namespaces,
                        s = a[a.length - 1],
                        u = this.resolve(e, t),
                        d = Object.prototype.toString.apply(u),
                        f = ["[object Number]", "[object Function]", "[object RegExp]"],
                        p = void 0 !== t.joinArrays ? t.joinArrays : this.options.joinArrays;
                    if (u && "string" != typeof u && f.indexOf(d) < 0 && (!p || "[object Array]" !== d)) {
                        if (!t.returnObjects && !this.options.returnObjects) return this.logger.warn("accessing an object - but returnObjects options is not enabled!"), this.options.returnedObjectHandler ? this.options.returnedObjectHandler(o, u, t) : "key '" + o + " (" + this.language + ")' returned an object instead of string.";
                        var h = "[object Array]" === d ? [] : {};
                        for (var v in u) h[v] = this.translate("" + o + i + v, l({
                            joinArrays: !1,
                            ns: a
                        }, t));
                        u = h
                    } else if (p && "[object Array]" === d) u = u.join(p), u && (u = this.extendTranslation(u, o, t));
                    else {
                        var g = !1,
                            m = !1;
                        if (!this.isValidLookup(u) && t.defaultValue && (g = !0, u = t.defaultValue), this.isValidLookup(u) || (m = !0, u = o), (m || g) && (this.logger.log("missingKey", n, s, o, u), this.options.saveMissing)) {
                            var y = [];
                            if ("fallback" === this.options.saveMissingTo && this.options.fallbackLng && this.options.fallbackLng[0])
                                for (var b = 0; b < this.options.fallbackLng.length; b++) y.push(this.options.fallbackLng[b]);
                            else "all" === this.options.saveMissingTo ? y = this.languageUtils.toResolveHierarchy(t.lng || this.language) : y.push(t.lng || this.language);
                            this.options.missingKeyHandler ? this.options.missingKeyHandler(y, s, o, u) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(y, s, o, u), this.emit("missingKey", y, s, o, u)
                        }
                        u = this.extendTranslation(u, o, t), m && u === o && this.options.appendNamespaceToMissingKey && (u = s + ":" + o), m && this.options.parseMissingKeyHandler && (u = this.options.parseMissingKeyHandler(u))
                    }
                    return u
                }, t.prototype.extendTranslation = function(e, t, n) {
                    var i = this;
                    n.interpolation && this.interpolator.init(n);
                    var r = n.replace && "string" != typeof n.replace ? n.replace : n;
                    this.options.interpolation.defaultVariables && (r = l({}, this.options.interpolation.defaultVariables, r)), e = this.interpolator.interpolate(e, r), e = this.interpolator.nest(e, function() {
                        for (var e = arguments.length, t = Array(e), n = 0; e > n; n++) t[n] = arguments[n];
                        return i.translate.apply(i, t)
                    }, n), n.interpolation && this.interpolator.reset();
                    var o = n.postProcess || this.options.postProcess,
                        a = "string" == typeof o ? [o] : o;
                    return void 0 !== e && a && a.length && n.applyPostProcessor !== !1 && (e = g["default"].handle(a, e, t, n, this)),
                        e
                }, t.prototype.resolve = function(e) {
                    var t = this,
                        n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                        i = void 0;
                    return "string" == typeof e && (e = [e]), e.forEach(function(e) {
                        if (!t.isValidLookup(i)) {
                            var r = t.extractFromKey(e, n),
                                o = r.key,
                                a = r.namespaces;
                            t.options.fallbackNS && (a = a.concat(t.options.fallbackNS));
                            var s = void 0 !== n.count && "string" != typeof n.count,
                                u = void 0 !== n.context && "string" == typeof n.context && "" !== n.context,
                                l = n.lngs ? n.lngs : t.languageUtils.toResolveHierarchy(n.lng || t.language);
                            a.forEach(function(e) {
                                t.isValidLookup(i) || l.forEach(function(r) {
                                    if (!t.isValidLookup(i)) {
                                        var a = o,
                                            l = [a],
                                            c = void 0;
                                        s && (c = t.pluralResolver.getSuffix(r, n.count)), s && u && l.push(a + c), u && l.push(a += "" + t.options.contextSeparator + n.context), s && l.push(a += c);
                                        for (var d = void 0; d = l.pop();) t.isValidLookup(i) || (i = t.getResource(r, e, d, n))
                                    }
                                })
                            })
                        }
                    }), i
                }, t.prototype.isValidLookup = function(e) {
                    return !(void 0 === e || !this.options.returnNull && null === e || !this.options.returnEmptyString && "" === e)
                }, t.prototype.getResource = function(e, t, n) {
                    var i = arguments.length <= 3 || void 0 === arguments[3] ? {} : arguments[3];
                    return this.resourceStore.getResource(e, t, n, i)
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
            handle: function(e, t, n, i, r) {
                var o = this;
                return e.forEach(function(e) {
                    o.processors[e] && (t = o.processors[e].process(t, n, i, r))
                }), t
            }
        }
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e) {
            return e.interpolation = {
                unescapeSuffix: "HTML"
            }, e.interpolation.prefix = e.interpolationPrefix || "__", e.interpolation.suffix = e.interpolationSuffix || "__", e.interpolation.escapeValue = e.escapeInterpolation || !1, e.interpolation.nestingPrefix = e.reusePrefix || "$t(", e.interpolation.nestingSuffix = e.reuseSuffix || ")", e
        }

        function o(e) {
            return e.resStore && (e.resources = e.resStore), e.ns && e.ns.defaultNs ? (e.defaultNS = e.ns.defaultNs, e.ns = e.ns.namespaces) : e.defaultNS = e.ns || "translation", e.fallbackToDefaultNS && e.defaultNS && (e.fallbackNS = e.defaultNS), e.saveMissing = e.sendMissing, e.saveMissingTo = e.sendMissingTo || "current", e.returnNull = e.fallbackOnNull ? !1 : !0, e.returnEmptyString = e.fallbackOnEmpty ? !1 : !0, e.returnObjects = e.returnObjectTrees, e.joinArrays = "\n", e.returnedObjectHandler = e.objectTreeKeyHandler, e.parseMissingKeyHandler = e.parseMissingKey, e.appendNamespaceToMissingKey = !0, e.nsSeparator = e.nsseparator, e.keySeparator = e.keyseparator, "sprintf" === e.shortcutFunction && (e.overloadTranslationOptionHandler = function(e) {
                for (var t = [], n = 1; n < e.length; n++) t.push(e[n]);
                return {
                    postProcess: "sprintf",
                    sprintf: t
                }
            }), e.whitelist = e.lngWhitelist, e.preload = e.preload, "current" === e.load && (e.load = "currentOnly"), "unspecific" === e.load && (e.load = "languageOnly"), e.backend = e.backend || {}, e.backend.loadPath = e.resGetPath || "locales/__lng__/__ns__.json", e.backend.addPath = e.resPostPath || "locales/add/__lng__/__ns__", e.backend.allowMultiLoading = e.dynamicLoad, e.cache = e.cache || {}, e.cache.prefix = "res_", e.cache.expirationTime = 6048e5, e.cache.enabled = e.useLocalStorage ? !0 : !1, e = r(e), e.defaultVariables && (e.interpolation.defaultVariables = e.defaultVariables), e
        }

        function a(e) {
            return e = r(e), e.joinArrays = "\n", e
        }

        function s(e) {
            return (e.interpolationPrefix || e.interpolationSuffix || e.escapeInterpolation) && (e = r(e)), e.nsSeparator = e.nsseparator, e.keySeparator = e.keyseparator, e.returnObjects = e.returnObjectTrees, e
        }

        function u(e) {
            e.lng = function() {
                return c["default"].deprecate("i18next.lng() can be replaced by i18next.language for detected language or i18next.languages for languages ordered by translation lookup."), e.services.languageUtils.toResolveHierarchy(e.language)[0]
            }, e.preload = function(t, n) {
                c["default"].deprecate("i18next.preload() can be replaced with i18next.loadLanguages()"), e.loadLanguages(t, n)
            }, e.setLng = function(t, n, i) {
                return c["default"].deprecate("i18next.setLng() can be replaced with i18next.changeLanguage() or i18next.getFixedT() to get a translation function with fixed language or namespace."), "function" == typeof n && (i = n, n = {}), n || (n = {}), n.fixLng === !0 && i ? i(null, e.getFixedT(t)) : void e.changeLanguage(t, i)
            }, e.addPostProcessor = function(t, n) {
                c["default"].deprecate("i18next.addPostProcessor() can be replaced by i18next.use({ type: 'postProcessor', name: 'name', process: fc })"), e.use({
                    type: "postProcessor",
                    name: t,
                    process: n
                })
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.convertAPIOptions = o, t.convertJSONOptions = a, t.convertTOptions = s, t.appendBackwardsAPI = u;
        var l = n(327),
            c = i(l)
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n(327),
            s = i(a),
            u = function() {
                function e(t) {
                    r(this, e), this.options = t, this.whitelist = this.options.whitelist || !1, this.logger = s["default"].create("languageUtils")
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
                        }) : 2 === n.length ? (n[0] = n[0].toLowerCase(), n[1] = n[1].toUpperCase(), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = o(n[1].toLowerCase()))) : 3 === n.length && (n[0] = n[0].toLowerCase(), 2 === n[1].length && (n[1] = n[1].toUpperCase()), "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = o(n[1].toLowerCase())), t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = o(n[2].toLowerCase()))), n.join("-")
                    }
                    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
                }, e.prototype.isWhitelisted = function(e) {
                    return "languageOnly" === this.options.load && (e = this.getLanguagePartFromCode(e)), !this.whitelist || !this.whitelist.length || this.whitelist.indexOf(e) > -1 ? !0 : !1
                }, e.prototype.toResolveHierarchy = function(e, t) {
                    var n = this;
                    t = t || this.options.fallbackLng || [], "string" == typeof t && (t = [t]);
                    var i = [],
                        r = function(e) {
                            n.isWhitelisted(e) ? i.push(e) : n.logger.warn("rejecting non-whitelisted language code: " + e)
                        };
                    return "string" == typeof e && e.indexOf("-") > -1 ? ("languageOnly" !== this.options.load && r(this.formatLanguageCode(e)), "currentOnly" !== this.options.load && r(this.getLanguagePartFromCode(e))) : "string" == typeof e && r(this.formatLanguageCode(e)), t.forEach(function(e) {
                        i.indexOf(e) < 0 && r(n.formatLanguageCode(e))
                    }), i
                }, e
            }();
        t["default"] = u
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o() {
            var e = {};
            return u.forEach(function(t) {
                t.lngs.forEach(function(n) {
                    return e[n] = {
                        numbers: t.nr,
                        plurals: l[t.fc]
                    }
                })
            }), e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n(327),
            s = i(a),
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
            l = {
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
            c = function() {
                function e(t) {
                    var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                    r(this, e), this.languageUtils = t, this.options = n, this.logger = s["default"].create("pluralResolver"), this.rules = o()
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
                        var i = n.noAbs ? n.plurals(t) : n.plurals(Math.abs(t)),
                            r = n.numbers[i];
                        if (2 === n.numbers.length && 1 === n.numbers[0] && (2 === r ? r = "plural" : 1 === r && (r = "")), "v1" === this.options.compatibilityJSON) {
                            if (1 === r) return "";
                            if ("number" == typeof r) return "_plural_" + r.toString()
                        }
                        return this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString()
                    }
                    return this.logger.warn("no plural rule found for: " + e), ""
                }, e
            }();
        t["default"] = c
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n(330),
            s = r(a),
            u = n(327),
            l = i(u),
            c = function() {
                function e() {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                    o(this, e), this.logger = l["default"].create("interpolator"), this.init(t, !0)
                }
                return e.prototype.init = function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                        t = arguments[1];
                    t && (this.options = e), e.interpolation || (e.interpolation = {
                        escapeValue: !0
                    });
                    var n = e.interpolation;
                    this.escapeValue = n.escapeValue, this.prefix = n.prefix ? s.regexEscape(n.prefix) : n.prefixEscaped || "{{", this.suffix = n.suffix ? s.regexEscape(n.suffix) : n.suffixEscaped || "}}", this.unescapePrefix = n.unescapeSuffix ? "" : n.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : n.unescapeSuffix || "", this.nestingPrefix = n.nestingPrefix ? s.regexEscape(n.nestingPrefix) : n.nestingPrefixEscaped || s.regexEscape("$t("), this.nestingSuffix = n.nestingSuffix ? s.regexEscape(n.nestingSuffix) : n.nestingSuffixEscaped || s.regexEscape(")");
                    var i = this.prefix + "(.+?)" + this.suffix;
                    this.regexp = new RegExp(i, "g");
                    var r = this.prefix + this.unescapePrefix + "(.+?)" + this.unescapeSuffix + this.suffix;
                    this.regexpUnescape = new RegExp(r, "g");
                    var o = this.nestingPrefix + "(.+?)" + this.nestingSuffix;
                    this.nestingRegexp = new RegExp(o, "g")
                }, e.prototype.reset = function() {
                    this.options && this.init(this.options)
                }, e.prototype.interpolate = function(e, t) {
                    function n(e) {
                        return e.replace(/\$/g, "$$$$")
                    }
                    for (var i = void 0, r = void 0; i = this.regexpUnescape.exec(e);) {
                        var o = s.getPath(t, i[1].trim());
                        e = e.replace(i[0], o)
                    }
                    for (; i = this.regexp.exec(e);) r = s.getPath(t, i[1].trim()), "string" != typeof r && (r = s.makeString(r)), r || (this.logger.warn("missed to pass in variable " + i[1] + " for interpolating " + e), r = ""), r = n(this.escapeValue ? s.escape(r) : r), e = e.replace(i[0], r), this.regexp.lastIndex = 0;
                    return e
                }, e.prototype.nest = function(e, t) {
                    function n(e) {
                        return e.replace(/\$/g, "$$$$")
                    }

                    function i(e) {
                        if (e.indexOf(",") < 0) return e;
                        var t = e.split(",");
                        e = t.shift();
                        var n = t.join(",");
                        n = this.interpolate(n, u);
                        try {
                            u = JSON.parse(n)
                        } catch (i) {
                            this.logger.error("failed parsing options string in nesting for key " + e, i)
                        }
                        return e
                    }
                    var r = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2],
                        o = void 0,
                        a = void 0,
                        u = JSON.parse(JSON.stringify(r));
                    for (u.applyPostProcessor = !1; o = this.nestingRegexp.exec(e);) a = t(i.call(this, o[1].trim()), u), "string" != typeof a && (a = s.makeString(a)), a || (this.logger.warn("missed to pass in variable " + o[1] + " for interpolating " + e), a = ""), a = n(this.escapeValue ? s.escape(a) : a), e = e.replace(o[0], a), this.regexp.lastIndex = 0;
                    return e
                }, e
            }();
        t["default"] = c
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function o(e, t) {
            for (var n = Object.getOwnPropertyNames(t), i = 0; i < n.length; i++) {
                var r = n[i],
                    o = Object.getOwnPropertyDescriptor(t, r);
                o && o.configurable && void 0 === e[r] && Object.defineProperty(e, r, o)
            }
            return e
        }

        function a(e, t) {
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
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : o(e, t))
        }

        function l(e, t) {
            for (var n = e.indexOf(t); - 1 !== n;) e.splice(n, 1), n = e.indexOf(t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            },
            d = function() {
                function e(e, t) {
                    var n = [],
                        i = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
                    } catch (u) {
                        r = !0, o = u
                    } finally {
                        try {
                            !i && s["return"] && s["return"]()
                        } finally {
                            if (r) throw o
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
            f = n(330),
            p = r(f),
            h = n(327),
            v = i(h),
            g = n(328),
            m = i(g),
            _ = function(e) {
                function t(n, i, r) {
                    var o = arguments.length <= 3 || void 0 === arguments[3] ? {} : arguments[3];
                    a(this, t);
                    var u = s(this, e.call(this));
                    return u.backend = n, u.store = i, u.services = r, u.options = o, u.logger = v["default"].create("backendConnector"), u.state = {}, u.queue = [], u.backend && u.backend.init && u.backend.init(r, o.backend, o), u
                }
                return u(t, e), t.prototype.queueLoad = function(e, t, n) {
                    var i = this,
                        r = [],
                        o = [],
                        a = [],
                        s = [];
                    return e.forEach(function(e) {
                        var n = !0;
                        t.forEach(function(t) {
                            var a = e + "|" + t;
                            i.store.hasResourceBundle(e, t) ? i.state[a] = 2 : i.state[a] < 0 || (1 === i.state[a] ? o.indexOf(a) < 0 && o.push(a) : (i.state[a] = 1, n = !1, o.indexOf(a) < 0 && o.push(a), r.indexOf(a) < 0 && r.push(a), s.indexOf(t) < 0 && s.push(t)))
                        }), n || a.push(e)
                    }), (r.length || o.length) && this.queue.push({
                        pending: o,
                        loaded: {},
                        errors: [],
                        callback: n
                    }), {
                        toLoad: r,
                        pending: o,
                        toLoadLanguages: a,
                        toLoadNamespaces: s
                    }
                }, t.prototype.loaded = function(e, t, n) {
                    var i = this,
                        r = e.split("|"),
                        o = d(r, 2),
                        a = o[0],
                        s = o[1];
                    t && this.emit("failedLoading", a, s, t), n && this.store.addResourceBundle(a, s, n), this.state[e] = t ? -1 : 2, this.queue.forEach(function(n) {
                        p.pushPath(n.loaded, [a], s), l(n.pending, e), t && n.errors.push(t), 0 !== n.pending.length || n.done || (n.errors.length ? n.callback(n.errors) : n.callback(), i.emit("loaded", n.loaded), n.done = !0)
                    }), this.queue = this.queue.filter(function(e) {
                        return !e.done
                    })
                }, t.prototype.read = function(e, t, n, i, r, o) {
                    var a = this;
                    return i || (i = 0), r || (r = 250), e.length ? void this.backend[n](e, t, function(s, u) {
                        return s && u && 5 > i ? void setTimeout(function() {
                            a.read.call(a, e, t, n, ++i, 2 * r, o)
                        }, r) : void o(s, u)
                    }) : o(null, {})
                }, t.prototype.load = function(e, t, n) {
                    var i = this;
                    if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), n && n();
                    var r = c({}, this.backend.options, this.options.backend);
                    "string" == typeof e && (e = this.services.languageUtils.toResolveHierarchy(e)), "string" == typeof t && (t = [t]);
                    var o = this.queueLoad(e, t, n);
                    return o.toLoad.length ? void(r.allowMultiLoading && this.backend.readMulti ? this.read(o.toLoadLanguages, o.toLoadNamespaces, "readMulti", null, null, function(e, t) {
                        e && i.logger.warn("loading namespaces " + o.toLoadNamespaces.join(", ") + " for languages " + o.toLoadLanguages.join(", ") + " via multiloading failed", e), !e && t && i.logger.log("loaded namespaces " + o.toLoadNamespaces.join(", ") + " for languages " + o.toLoadLanguages.join(", ") + " via multiloading", t), o.toLoad.forEach(function(n) {
                            var r = n.split("|"),
                                o = d(r, 2),
                                a = o[0],
                                s = o[1],
                                u = p.getPath(t, [a, s]);
                            if (u) i.loaded(n, e, u);
                            else {
                                var l = "loading namespace " + s + " for language " + a + " via multiloading failed";
                                i.loaded(n, l), i.logger.error(l)
                            }
                        })
                    }) : ! function() {
                        var e = function(e) {
                            var t = this,
                                n = e.split("|"),
                                i = d(n, 2),
                                r = i[0],
                                o = i[1];
                            this.read(r, o, "read", null, null, function(n, i) {
                                n && t.logger.warn("loading namespace " + o + " for language " + r + " failed", n), !n && i && t.logger.log("loaded namespace " + o + " for language " + r, i), t.loaded(e, n, i)
                            })
                        };
                        o.toLoad.forEach(function(t) {
                            e.call(i, t)
                        })
                    }()) : void(o.pending.length || n())
                }, t.prototype.saveMissing = function(e, t, n, i) {
                    this.backend && this.backend.create && this.backend.create(e, t, n, i), this.store.addResource(e[0], t, n, i)
                }, t
            }(m["default"]);
        t["default"] = _
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function o(e, t) {
            for (var n = Object.getOwnPropertyNames(t), i = 0; i < n.length; i++) {
                var r = n[i],
                    o = Object.getOwnPropertyDescriptor(t, r);
                o && o.configurable && void 0 === e[r] && Object.defineProperty(e, r, o)
            }
            return e
        }

        function a(e, t) {
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
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : o(e, t))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            },
            c = n(330),
            d = (r(c), n(327)),
            f = i(d),
            p = n(328),
            h = i(p),
            v = function(e) {
                function t(n, i, r) {
                    var o = arguments.length <= 3 || void 0 === arguments[3] ? {} : arguments[3];
                    a(this, t);
                    var u = s(this, e.call(this));
                    return u.cache = n, u.store = i, u.services = r, u.options = o, u.logger = f["default"].create("cacheConnector"), u.cache && u.cache.init && u.cache.init(r, o.cache, o), u
                }
                return u(t, e), t.prototype.load = function(e, t, n) {
                    var i = this;
                    if (!this.cache) return n && n();
                    var r = l({}, this.cache.options, this.options.cache);
                    "string" == typeof e && (e = this.services.languageUtils.toResolveHierarchy(e)), "string" == typeof t && (t = [t]), r.enabled ? this.cache.load(e, function(t, r) {
                        if (t && i.logger.error("loading languages " + e.join(", ") + " from cache failed", t), r)
                            for (var o in r)
                                for (var a in r[o])
                                    if ("i18nStamp" !== a) {
                                        var s = r[o][a];
                                        s && i.store.addResourceBundle(o, a, s)
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

        function i(e) {
            return "string" == typeof e.ns && (e.ns = [e.ns]), "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]), "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]), e.whitelist && e.whitelist.indexOf("cimode") < 0 && e.whitelist.push("cimode"), e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.get = n, t.transformOptions = i
    }, function(e, t, n) {
        var i, i;
        ! function(t) {
            e.exports = t()
        }(function() {
            return function e(t, n, r) {
                function o(s, u) {
                    if (!n[s]) {
                        if (!t[s]) {
                            var l = "function" == typeof i && i;
                            if (!u && l) return i(s, !0);
                            if (a) return a(s, !0);
                            var c = new Error("Cannot find module '" + s + "'");
                            throw c.code = "MODULE_NOT_FOUND", c
                        }
                        var d = n[s] = {
                            exports: {}
                        };
                        t[s][0].call(d.exports, function(e) {
                            var n = t[s][1][e];
                            return o(n ? n : e)
                        }, d, d.exports, e, t, n, r)
                    }
                    return n[s].exports
                }
                for (var a = "function" == typeof i && i, s = 0; s < r.length; s++) o(r[s]);
                return o
            }({
                1: [function(e, t, n) {
                    "use strict";

                    function i(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t["default"] = e, t
                    }

                    function r(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }

                    function o(e, t, n, i, r) {
                        if (i && "object" == typeof i) {
                            var o = "",
                                a = encodeURIComponent;
                            for (var s in i) o += "&" + a(s) + "=" + a(i[s]);
                            i = o.slice(1) + (r ? "" : "&_t=" + new Date)
                        }
                        try {
                            var u = new(XMLHttpRequest || ActiveXObject)("MSXML2.XMLHTTP.3.0");
                            u.open(i ? "POST" : "GET", e, 1), t.crossDomain || u.setRequestHeader("X-Requested-With", "XMLHttpRequest"), u.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), u.onreadystatechange = function() {
                                u.readyState > 3 && n && n(u.responseText, u)
                            }, u.send(i)
                        } catch (a) {
                            window.console && console.log(a)
                        }
                    }

                    function a() {
                        return {
                            loadPath: "/locales/{{lng}}/{{ns}}.json",
                            addPath: "locales/add/{{lng}}/{{ns}}",
                            allowMultiLoading: !1,
                            parse: JSON.parse,
                            crossDomain: !1,
                            ajax: o
                        }
                    }
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    });
                    var s = function() {
                            function e(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var i = t[n];
                                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                }
                            }
                            return function(t, n, i) {
                                return n && e(t.prototype, n), i && e(t, i), t
                            }
                        }(),
                        u = e("./utils"),
                        l = i(u),
                        c = function() {
                            function e(t) {
                                var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                                r(this, e), this.init(t, n), this.type = "backend"
                            }
                            return s(e, [{
                                key: "init",
                                value: function(e) {
                                    var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                                    this.services = e, this.options = l.defaults(t, this.options || {}, a())
                                }
                            }, {
                                key: "readMulti",
                                value: function(e, t, n) {
                                    var i = this.services.interpolator.interpolate(this.options.loadPath, {
                                        lng: e.join("+"),
                                        ns: t.join("+")
                                    });
                                    this.loadUrl(i, n)
                                }
                            }, {
                                key: "read",
                                value: function(e, t, n) {
                                    var i = this.services.interpolator.interpolate(this.options.loadPath, {
                                        lng: e,
                                        ns: t
                                    });
                                    this.loadUrl(i, n)
                                }
                            }, {
                                key: "loadUrl",
                                value: function(e, t) {
                                    var n = this;
                                    this.options.ajax(e, this.options, function(i, r) {
                                        var o = r.status.toString();
                                        if (0 === o.indexOf("5")) return t("failed loading " + e, !0);
                                        if (0 === o.indexOf("4")) return t("failed loading " + e, !1);
                                        var a = void 0,
                                            s = void 0;
                                        try {
                                            a = n.options.parse(i)
                                        } catch (u) {
                                            s = "failed parsing " + e + " to json"
                                        }
                                        return s ? t(s, !1) : void t(null, a)
                                    })
                                }
                            }, {
                                key: "create",
                                value: function(e, t, n, i) {
                                    var r = this;
                                    "string" == typeof e && (e = [e]);
                                    var o = {};
                                    o[n] = i || "", e.forEach(function(e) {
                                        var n = r.services.interpolator.interpolate(r.options.addPath, {
                                            lng: e,
                                            ns: t
                                        });
                                        r.options.ajax(n, r.options, function(e, t) {}, o)
                                    })
                                }
                            }]), e
                        }();
                    c.type = "backend", n["default"] = c, t.exports = n["default"]
                }, {
                    "./utils": 2
                }],
                2: [function(e, t, n) {
                    "use strict";

                    function i(e) {
                        return a.call(s.call(arguments, 1), function(t) {
                            if (t)
                                for (var n in t) void 0 === e[n] && (e[n] = t[n])
                        }), e
                    }

                    function r(e) {
                        return a.call(s.call(arguments, 1), function(t) {
                            if (t)
                                for (var n in t) e[n] = t[n]
                        }), e
                    }
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }), n.defaults = i, n.extend = r;
                    var o = [],
                        a = o.forEach,
                        s = o.slice
                }, {}]
            }, {}, [1])(1)
        })
    }, function(e, t, n) {
        var i = n(7),
            r = n(52),
            o = n(8),
            a = n(10),
            s = n(34),
            u = n(41),
            l = Object.prototype,
            c = l.hasOwnProperty,
            d = l.propertyIsEnumerable,
            f = !d.call({
                valueOf: 1
            }, "valueOf"),
            p = o(function(e, t) {
                if (f || s(t) || a(t)) return void r(t, u(t), e);
                for (var n in t) c.call(t, n) && i(e, n, t[n])
            });
        e.exports = p
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
            "Capture your favorite moments with a single click! Hit the Clips button below and be the first to start sharing.": "Capture your favorite moments with a single click! Hit the Clips button below and be the first to start sharing."
        }
    }, function(e, t, n) {
        "use strict";

        function i() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? window.navigator : arguments[0],
                t = arguments[1];
            switch (t.type) {
                case r.ACTION_SET_NAVIGATOR:
                    return t.navigator;
                default:
                    return e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.navigatorReducer = i;
        var r = n(344)
    }, function(e, t) {
        "use strict";

        function n(e) {
            return {
                type: i,
                navigator: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.setNavigator = n;
        var i = t.ACTION_SET_NAVIGATOR = "set navigator"
    }, function(e, t, n) {
        "use strict";

        function i() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? !1 : arguments[0],
                t = arguments[1];
            switch (t.type) {
                case r.ACTION_SET_ONLINE:
                    return t.online;
                default:
                    return e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.online = i;
        var r = n(202)
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? u : arguments[0],
                t = arguments[1];
            switch (t.type) {
                case s.ACTION_SET_QUALITY:
                    return (0, a["default"])({}, e, t.playback);
                case s.ACTION_QUALITY_RESTRICTED_ERROR:
                    return (0, a["default"])({}, e, {
                        restrictedQualityError: !0
                    });
                case s.ACTION_CLEAR_QUALITY_RESTRICTED_ERROR:
                    return (0, a["default"])({}, e, {
                        restrictedQualityError: !1
                    });
                default:
                    return e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DEFAULT_PLAYBACK = void 0, t.playback = r;
        var o = n(50),
            a = i(o),
            s = n(263),
            u = t.DEFAULT_PLAYBACK = {
                quality: "",
                restrictedQualityError: !1
            }
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function o() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? p : arguments[0],
                t = arguments[1];
            switch (t.type) {
                case f.ACTION_VOD_INIT_RESUME:
                    return {
                        times: t.times,
                        watch: t.watch,
                        backendTime: t.backendTime,
                        userId: t.userId
                    };
                case f.ACTION_VOD_SET_USER:
                    return (0, s["default"])({}, e, {
                        userId: t.userId
                    });
                case f.ACTION_VOD_SET_RESUME_TIME:
                    return {
                        times: (0, l["default"])({}, e.times, r({}, t.videoID, t.time)),
                        watch: (0, l["default"])({}, e.watch, r({}, t.videoID, !0)),
                        backendTime: e.backendTime,
                        userId: e.userId
                    };
                case f.ACTION_VOD_CANCEL_RESUME:
                    return {
                        times: (0, d["default"])(e.times, t.videoID),
                        watch: (0, d["default"])(e.watch, t.videoID),
                        backendTime: e.backendTime,
                        userId: e.userId
                    };
                case f.ACTION_VOD_POST_BACKEND_TIME:
                    return (0, s["default"])({}, e, {
                        backendTime: t.backendTime
                    });
                default:
                    return e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.resumeWatch = o;
        var a = n(341),
            s = i(a),
            u = n(50),
            l = i(u),
            c = n(204),
            d = i(c),
            f = n(282),
            p = {
                times: {},
                watch: {},
                backendTime: 0,
                userId: null
            }
    }, function(e, t, n) {
        "use strict";

        function i() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? o.nullContentStream : arguments[0],
                t = arguments[1];
            switch (t.type) {
                case r.ACTION_SET_STREAM:
                    return t.stream;
                default:
                    return e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.stream = i;
        var r = n(266),
            o = n(274)
    }, function(e, t, n) {
        "use strict";

        function i() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                t = arguments[1];
            switch (t.type) {
                case r.ACTION_SET_USHER_PARAMS:
                    return t.params;
                default:
                    return e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.usher = i;
        var r = n(350)
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e) {
            var t = (0, a["default"])(e, u);
            return t.p = Math.floor(9999999 * Math.random()), {
                type: s,
                params: t
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ACTION_SET_USHER_PARAMS = void 0, t.setUsherParams = r;
        var o = n(44),
            a = i(o),
            s = t.ACTION_SET_USHER_PARAMS = "set usher params",
            u = ["allow_expired", "force_format", "force_geo", "force_https", "force_ip", "force_node", "force_node_password", "force_cluster", "godlike", "no_cdn"]
    }, function(e, t, n) {
        "use strict";

        function i() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0],
                t = arguments[1];
            switch (t.type) {
                case r.ACTION_UPDATE_VIEWERCOUNT:
                    return t.count;
                default:
                    return e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.viewercount = i;
        var r = n(201)
    }, function(e, t, n) {
        "use strict";

        function i() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? window : arguments[0],
                t = arguments[1];
            switch (t.type) {
                case r.ACTION_SET_WINDOW:
                    return t.window;
                default:
                    return e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.windowReducer = i;
        var r = n(353)
    }, function(e, t) {
        "use strict";

        function n(e) {
            return {
                type: i,
                window: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.setWindow = n;
        var i = t.ACTION_SET_WINDOW = "set window"
    }, function(e, t, n) {
        var i;
        (function(e, r, o) {
            /*!
             * @overview es6-promise - a tiny implementation of Promises/A+.
             * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
             * @license   Licensed under MIT license
             *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
             * @version   3.1.2
             */
            (function() {
                "use strict";

                function a(e) {
                    return "function" == typeof e || "object" == typeof e && null !== e
                }

                function s(e) {
                    return "function" == typeof e
                }

                function u(e) {
                    W = e
                }

                function l(e) {
                    J = e
                }

                function c() {
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
                    for (var e = 0; K > e; e += 2) {
                        var t = ie[e],
                            n = ie[e + 1];
                        t(n), ie[e] = void 0, ie[e + 1] = void 0
                    }
                    K = 0
                }

                function g() {
                    try {
                        var e = n(355);
                        return z = e.runOnLoop || e.runOnContext, d()
                    } catch (t) {
                        return h()
                    }
                }

                function m(e, t) {
                    var n = this,
                        i = n._state;
                    if (i === se && !e || i === ue && !t) return this;
                    var r = new this.constructor(y),
                        o = n._result;
                    if (i) {
                        var a = arguments[i - 1];
                        J(function() {
                            x(i, r, a, o)
                        })
                    } else L(n, r, e, t);
                    return r
                }

                function _(e) {
                    var t = this;
                    if (e && "object" == typeof e && e.constructor === t) return e;
                    var n = new t(y);
                    return O(n, e), n
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
                        return le.error = t, le
                    }
                }

                function k(e, t, n, i) {
                    try {
                        e.call(t, n, i)
                    } catch (r) {
                        return r
                    }
                }

                function T(e, t, n) {
                    J(function(e) {
                        var i = !1,
                            r = k(n, t, function(n) {
                                i || (i = !0, t !== n ? O(e, n) : P(e, n))
                            }, function(t) {
                                i || (i = !0, j(e, t))
                            }, "Settle: " + (e._label || " unknown promise"));
                        !i && r && (i = !0, j(e, r))
                    }, e)
                }

                function S(e, t) {
                    t._state === se ? P(e, t._result) : t._state === ue ? j(e, t._result) : L(t, void 0, function(t) {
                        O(e, t)
                    }, function(t) {
                        j(e, t)
                    })
                }

                function C(e, t, n) {
                    t.constructor === e.constructor && n === re && constructor.resolve === oe ? S(e, t) : n === le ? j(e, le.error) : void 0 === n ? P(e, t) : s(n) ? T(e, t, n) : P(e, t)
                }

                function O(e, t) {
                    e === t ? j(e, b()) : a(t) ? C(e, t, w(t)) : P(e, t)
                }

                function A(e) {
                    e._onerror && e._onerror(e._result), M(e)
                }

                function P(e, t) {
                    e._state === ae && (e._result = t, e._state = se, 0 !== e._subscribers.length && J(M, e))
                }

                function j(e, t) {
                    e._state === ae && (e._state = ue, e._result = t, J(A, e))
                }

                function L(e, t, n, i) {
                    var r = e._subscribers,
                        o = r.length;
                    e._onerror = null, r[o] = t, r[o + se] = n, r[o + ue] = i, 0 === o && e._state && J(M, e)
                }

                function M(e) {
                    var t = e._subscribers,
                        n = e._state;
                    if (0 !== t.length) {
                        for (var i, r, o = e._result, a = 0; a < t.length; a += 3) i = t[a], r = t[a + n], i ? x(n, i, r, o) : r(o);
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
                        return ce.error = n, ce
                    }
                }

                function x(e, t, n, i) {
                    var r, o, a, u, l = s(n);
                    if (l) {
                        if (r = N(n, i), r === ce ? (u = !0, o = r.error, r = null) : a = !0, t === r) return void j(t, E())
                    } else r = i, a = !0;
                    t._state !== ae || (l && a ? O(t, r) : u ? j(t, o) : e === se ? P(t, r) : e === ue && j(t, r))
                }

                function R(e, t) {
                    try {
                        t(function(t) {
                            O(e, t)
                        }, function(t) {
                            j(e, t)
                        })
                    } catch (n) {
                        j(e, n)
                    }
                }

                function D(e) {
                    return new ge(this, e).promise
                }

                function V(e) {
                    function t(e) {
                        O(r, e)
                    }

                    function n(e) {
                        j(r, e)
                    }
                    var i = this,
                        r = new i(y);
                    if (!Y(e)) return j(r, new TypeError("You must pass an array to race.")), r;
                    for (var o = e.length, a = 0; r._state === ae && o > a; a++) L(i.resolve(e[a]), void 0, t, n);
                    return r
                }

                function U(e) {
                    var t = this,
                        n = new t(y);
                    return j(n, e), n
                }

                function B() {
                    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                }

                function H() {
                    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                }

                function $(e) {
                    this._id = he++, this._state = void 0, this._result = void 0, this._subscribers = [], y !== e && ("function" != typeof e && B(), this instanceof $ ? R(this, e) : H())
                }

                function q(e, t) {
                    this._instanceConstructor = e, this.promise = new e(y), Array.isArray(t) ? (this._input = t, this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? P(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && P(this.promise, this._result))) : j(this.promise, this._validationError())
                }

                function F() {
                    var e;
                    if ("undefined" != typeof r) e = r;
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
                var z, W, Q, Y = G,
                    K = 0,
                    J = function(e, t) {
                        ie[K] = e, ie[K + 1] = t, K += 2, 2 === K && (W ? W(v) : Q())
                    },
                    X = "undefined" != typeof window ? window : void 0,
                    Z = X || {},
                    ee = Z.MutationObserver || Z.WebKitMutationObserver,
                    te = "undefined" != typeof e && "[object process]" === {}.toString.call(e),
                    ne = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                    ie = new Array(1e3);
                Q = te ? c() : ee ? f() : ne ? p() : void 0 === X ? g() : h();
                var re = m,
                    oe = _,
                    ae = void 0,
                    se = 1,
                    ue = 2,
                    le = new I,
                    ce = new I,
                    de = D,
                    fe = V,
                    pe = U,
                    he = 0,
                    ve = $;
                $.all = de, $.race = fe, $.resolve = oe, $.reject = pe, $._setScheduler = u, $._setAsap = l, $._asap = J, $.prototype = {
                    constructor: $,
                    then: re,
                    "catch": function(e) {
                        return this.then(null, e)
                    }
                };
                var ge = q;
                q.prototype._validationError = function() {
                    return new Error("Array Methods must be provided an Array")
                }, q.prototype._enumerate = function() {
                    for (var e = this.length, t = this._input, n = 0; this._state === ae && e > n; n++) this._eachEntry(t[n], n)
                }, q.prototype._eachEntry = function(e, t) {
                    var n = this._instanceConstructor,
                        i = n.resolve;
                    if (i === oe) {
                        var r = w(e);
                        if (r === re && e._state !== ae) this._settledAt(e._state, t, e._result);
                        else if ("function" != typeof r) this._remaining--, this._result[t] = e;
                        else if (n === ve) {
                            var o = new n(y);
                            C(o, e, r), this._willSettleAt(o, t)
                        } else this._willSettleAt(new n(function(t) {
                            t(e)
                        }), t)
                    } else this._willSettleAt(i(e), t)
                }, q.prototype._settledAt = function(e, t, n) {
                    var i = this.promise;
                    i._state === ae && (this._remaining--, e === ue ? j(i, n) : this._result[t] = n), 0 === this._remaining && P(i, this._result)
                }, q.prototype._willSettleAt = function(e, t) {
                    var n = this;
                    L(e, void 0, function(e) {
                        n._settledAt(se, t, e)
                    }, function(e) {
                        n._settledAt(ue, t, e)
                    })
                };
                var me = F,
                    _e = {
                        Promise: ve,
                        polyfill: me
                    };
                n(356).amd ? (i = function() {
                    return _e
                }.call(t, n, t, o), !(void 0 !== i && (o.exports = i))) : "undefined" != typeof o && o.exports ? o.exports = _e : "undefined" != typeof this && (this.ES6Promise = _e), me()
            }).call(this)
        }).call(t, n(229), function() {
            return this
        }(), n(24)(e))
    }, function(e, t) {}, function(e, t) {
        e.exports = function() {
            throw new Error("define cannot be used indirect")
        }
    }, function(e, t) {}, , , , , function(e, t, n) {
        var i, r, o;
        /*!
         * jQuery UI Slider 1.12.0-beta.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        ! function(a) {
            r = [n(363), n(364), n(368), n(366), n(367)], i = a, o = "function" == typeof i ? i.apply(t, r) : i, !(void 0 !== o && (e.exports = o))
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
                    var t, n, i = this.options,
                        r = this.element.find(".ui-slider-handle"),
                        o = "<span tabindex='0'></span>",
                        a = [];
                    for (n = i.values && i.values.length || 1, r.length > n && (r.slice(n).remove(), r = r.slice(0, n)), t = r.length; n > t; t++) a.push(o);
                    this.handles = r.add(e(a.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function(t) {
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
                    var n, i, r, o, a, s, u, l, c = this,
                        d = this.options;
                    return d.disabled ? !1 : (this.elementSize = {
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight()
                    }, this.elementOffset = this.element.offset(), n = {
                        x: t.pageX,
                        y: t.pageY
                    }, i = this._normValueFromMouse(n), r = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) {
                        var n = Math.abs(i - c.values(t));
                        (r > n || r === n && (t === c._lastChangedValue || c.values(t) === d.min)) && (r = n, o = e(this), a = t)
                    }), s = this._start(t, a), s === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = a, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), u = o.offset(), l = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
                        left: 0,
                        top: 0
                    } : {
                        left: t.pageX - u.left - o.width() / 2,
                        top: t.pageY - u.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
                    }, this.handles.hasClass("ui-state-hover") || this._slide(t, a, i), this._animateOff = !0, !0))
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
                    var t, n, i, r, o;
                    return "horizontal" === this.orientation ? (t = this.elementSize.width, n = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, n = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), i = n / t, i > 1 && (i = 1), 0 > i && (i = 0), "vertical" === this.orientation && (i = 1 - i), r = this._valueMax() - this._valueMin(), o = this._valueMin() + i * r, this._trimAlignValue(o)
                },
                _uiHash: function(e, t, n) {
                    var i = {
                        handle: this.handles[e],
                        handleIndex: e,
                        value: void 0 !== t ? t : this.value()
                    };
                    return this._hasMultipleValues() && (i.value = void 0 !== t ? t : this.values(e), i.values = n || this.values()), i
                },
                _hasMultipleValues: function() {
                    return this.options.values && this.options.values.length
                },
                _start: function(e, t) {
                    return this._trigger("start", e, this._uiHash(t))
                },
                _slide: function(e, t, n) {
                    var i, r, o = this.value(),
                        a = this.values();
                    this._hasMultipleValues() && (r = this.values(t ? 0 : 1), o = this.values(t), 2 === this.options.values.length && this.options.range === !0 && (n = 0 === t ? Math.min(r, n) : Math.max(r, n)), a[t] = n), n !== o && (i = this._trigger("slide", e, this._uiHash(t, n, a)), i !== !1 && (this._hasMultipleValues() ? this.values(t, n) : this.value(n)))
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
                    var i, r, o;
                    if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(n), this._refreshValue(), void this._change(null, t);
                    if (!arguments.length) return this._values();
                    if (!e.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(t) : this.value();
                    for (i = this.options.values, r = arguments[0], o = 0; o < i.length; o += 1) i[o] = this._trimAlignValue(r[o]), this._change(null, o);
                    this._refreshValue()
                },
                _setOption: function(t, n) {
                    var i, r = 0;
                    switch ("range" === t && this.options.range === !0 && ("min" === n ? (this.options.value = this._values(0), this.options.values = null) : "max" === n && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), e.isArray(this.options.values) && (r = this.options.values.length), this._super(t, n), t) {
                        case "orientation":
                            this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(n), this.handles.css("horizontal" === n ? "bottom" : "left", "");
                            break;
                        case "value":
                            this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                            break;
                        case "values":
                            for (this._animateOff = !0, this._refreshValue(), i = r - 1; i >= 0; i--) this._change(null, i);
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
                    var t, n, i;
                    if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t);
                    if (this._hasMultipleValues()) {
                        for (n = this.options.values.slice(), i = 0; i < n.length; i += 1) n[i] = this._trimAlignValue(n[i]);
                        return n
                    }
                    return []
                },
                _trimAlignValue: function(e) {
                    if (e <= this._valueMin()) return this._valueMin();
                    if (e >= this._valueMax()) return this._valueMax();
                    var t = this.options.step > 0 ? this.options.step : 1,
                        n = (e - this._valueMin()) % t,
                        i = e - n;
                    return 2 * Math.abs(n) >= t && (i += n > 0 ? t : -t), parseFloat(i.toFixed(5))
                },
                _calculateNewMax: function() {
                    var e = this.options.max,
                        t = this._valueMin(),
                        n = this.options.step,
                        i = Math.floor(+(e - t).toFixed(this._precision()) / n) * n;
                    e = i + t, this.max = parseFloat(e.toFixed(this._precision()))
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
                    var t, n, i, r, o, a = this.options.range,
                        s = this.options,
                        u = this,
                        l = this._animateOff ? !1 : s.animate,
                        c = {};
                    this._hasMultipleValues() ? this.handles.each(function(i) {
                        n = (u.values(i) - u._valueMin()) / (u._valueMax() - u._valueMin()) * 100, c["horizontal" === u.orientation ? "left" : "bottom"] = n + "%", e(this).stop(1, 1)[l ? "animate" : "css"](c, s.animate), u.options.range === !0 && ("horizontal" === u.orientation ? (0 === i && u.range.stop(1, 1)[l ? "animate" : "css"]({
                            left: n + "%"
                        }, s.animate), 1 === i && u.range[l ? "animate" : "css"]({
                            width: n - t + "%"
                        }, {
                            queue: !1,
                            duration: s.animate
                        })) : (0 === i && u.range.stop(1, 1)[l ? "animate" : "css"]({
                            bottom: n + "%"
                        }, s.animate), 1 === i && u.range[l ? "animate" : "css"]({
                            height: n - t + "%"
                        }, {
                            queue: !1,
                            duration: s.animate
                        }))), t = n
                    }) : (i = this.value(), r = this._valueMin(), o = this._valueMax(), n = o !== r ? (i - r) / (o - r) * 100 : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = n + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](c, s.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                        width: n + "%"
                    }, s.animate), "max" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                        width: 100 - n + "%"
                    }, s.animate), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                        height: n + "%"
                    }, s.animate), "max" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                        height: 100 - n + "%"
                    }, s.animate))
                },
                _handleEvents: {
                    keydown: function(t) {
                        var n, i, r, o, a = e(t.target).data("ui-slider-handle-index");
                        switch (t.keyCode) {
                            case e.ui.keyCode.HOME:
                            case e.ui.keyCode.END:
                            case e.ui.keyCode.PAGE_UP:
                            case e.ui.keyCode.PAGE_DOWN:
                            case e.ui.keyCode.UP:
                            case e.ui.keyCode.RIGHT:
                            case e.ui.keyCode.DOWN:
                            case e.ui.keyCode.LEFT:
                                if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(e(t.target), null, "ui-state-active"), n = this._start(t, a), n === !1)) return
                        }
                        switch (o = this.options.step, i = r = this._hasMultipleValues() ? this.values(a) : this.value(), t.keyCode) {
                            case e.ui.keyCode.HOME:
                                r = this._valueMin();
                                break;
                            case e.ui.keyCode.END:
                                r = this._valueMax();
                                break;
                            case e.ui.keyCode.PAGE_UP:
                                r = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / this.numPages);
                                break;
                            case e.ui.keyCode.PAGE_DOWN:
                                r = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / this.numPages);
                                break;
                            case e.ui.keyCode.UP:
                            case e.ui.keyCode.RIGHT:
                                if (i === this._valueMax()) return;
                                r = this._trimAlignValue(i + o);
                                break;
                            case e.ui.keyCode.DOWN:
                            case e.ui.keyCode.LEFT:
                                if (i === this._valueMin()) return;
                                r = this._trimAlignValue(i - o)
                        }
                        this._slide(t, a, r)
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
        var i, r, o;
        /*!
         * jQuery UI Mouse 1.12.0-beta.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        ! function(a) {
            r = [n(363), n(365), n(366), n(367)], i = a, o = "function" == typeof i ? i.apply(t, r) : i, !(void 0 !== o && (e.exports = o))
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
                        var i = this,
                            r = 1 === n.which,
                            o = "string" == typeof this.options.cancel && n.target.nodeName ? e(n.target).closest(this.options.cancel).length : !1;
                        return r && !o && this._mouseCapture(n) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                            i.mouseDelayMet = !0
                        }, this.options.delay)), this._mouseDistanceMet(n) && this._mouseDelayMet(n) && (this._mouseStarted = this._mouseStart(n) !== !1, !this._mouseStarted) ? (n.preventDefault(), !0) : (!0 === e.data(n.target, this.widgetName + ".preventClickEvent") && e.removeData(n.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                            return i._mouseMove(e)
                        }, this._mouseUpDelegate = function(e) {
                            return i._mouseUp(e)
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
        var i, r, o;
        ! function(a) {
            r = [n(363), n(366)], i = a, o = "function" == typeof i ? i.apply(t, r) : i, !(void 0 !== o && (e.exports = o))
        }(function(e) {
            return e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())
        })
    }, function(e, t, n) {
        var i, r, o;
        ! function(a) {
            r = [n(363)], i = a, o = "function" == typeof i ? i.apply(t, r) : i, !(void 0 !== o && (e.exports = o))
        }(function(e) {
            return e.ui = e.ui || {}, e.ui.version = "1.12.0-beta.1"
        })
    }, function(e, t, n) {
        var i, r, o;
        /*!
         * jQuery UI Widget 1.12.0-beta.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        ! function(a) {
            r = [n(363), n(366)], i = a, o = "function" == typeof i ? i.apply(t, r) : i, !(void 0 !== o && (e.exports = o))
        }(function(e) {
            var t = 0,
                n = Array.prototype.slice;
            return e.cleanData = function(t) {
                return function(n) {
                    var i, r, o;
                    for (o = 0; null != (r = n[o]); o++) try {
                        i = e._data(r, "events"), i && i.remove && e(r).triggerHandler("remove")
                    } catch (a) {}
                    t(n)
                }
            }(e.cleanData), e.widget = function(t, n, i) {
                var r, o, a, s = {},
                    u = t.split(".")[0];
                t = t.split(".")[1];
                var l = u + "-" + t;
                return i || (i = n, n = e.Widget), e.isArray(i) && (i = e.extend.apply(null, [{}].concat(i))), e.expr[":"][l.toLowerCase()] = function(t) {
                    return !!e.data(t, l)
                }, e[u] = e[u] || {}, r = e[u][t], o = e[u][t] = function(e, t) {
                    return this._createWidget ? void(arguments.length && this._createWidget(e, t)) : new o(e, t)
                }, e.extend(o, r, {
                    version: i.version,
                    _proto: e.extend({}, i),
                    _childConstructors: []
                }), a = new n, a.options = e.widget.extend({}, a.options), e.each(i, function(t, i) {
                    return e.isFunction(i) ? void(s[t] = function() {
                        function e() {
                            return n.prototype[t].apply(this, arguments)
                        }

                        function r(e) {
                            return n.prototype[t].apply(this, e)
                        }
                        return function() {
                            var t, n = this._super,
                                o = this._superApply;
                            return this._super = e, this._superApply = r, t = i.apply(this, arguments), this._super = n, this._superApply = o, t
                        }
                    }()) : void(s[t] = i)
                }), o.prototype = e.widget.extend(a, {
                    widgetEventPrefix: r ? a.widgetEventPrefix || t : t
                }, s, {
                    constructor: o,
                    namespace: u,
                    widgetName: t,
                    widgetFullName: l
                }), r ? (e.each(r._childConstructors, function(t, n) {
                    var i = n.prototype;
                    e.widget(i.namespace + "." + i.widgetName, o, n._proto)
                }), delete r._childConstructors) : n._childConstructors.push(o), e.widget.bridge(t, o), o
            }, e.widget.extend = function(t) {
                for (var i, r, o = n.call(arguments, 1), a = 0, s = o.length; s > a; a++)
                    for (i in o[a]) r = o[a][i], o[a].hasOwnProperty(i) && void 0 !== r && (e.isPlainObject(r) ? t[i] = e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], r) : e.widget.extend({}, r) : t[i] = r);
                return t
            }, e.widget.bridge = function(t, i) {
                var r = i.prototype.widgetFullName || t;
                e.fn[t] = function(o) {
                    var a = "string" == typeof o,
                        s = n.call(arguments, 1),
                        u = this;
                    return a ? this.each(function() {
                        var n, i = e.data(this, r);
                        return "instance" === o ? (u = i, !1) : i ? e.isFunction(i[o]) && "_" !== o.charAt(0) ? (n = i[o].apply(i, s), n !== i && void 0 !== n ? (u = n && n.jquery ? u.pushStack(n.get()) : n, !1) : void 0) : e.error("no such method '" + o + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + o + "'")
                    }) : (s.length && (o = e.widget.extend.apply(null, [o].concat(s))), this.each(function() {
                        var t = e.data(this, r);
                        t ? (t.option(o || {}), t._init && t._init()) : e.data(this, r, new i(o, this))
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
                _createWidget: function(n, i) {
                    i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = t++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), this.classesElementLookup = {}, i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                        remove: function(e) {
                            e.target === i && this.destroy()
                        }
                    }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), n), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
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
                    var i, r, o, a = t;
                    if (0 === arguments.length) return e.widget.extend({}, this.options);
                    if ("string" == typeof t)
                        if (a = {}, i = t.split("."), t = i.shift(), i.length) {
                            for (r = a[t] = e.widget.extend({}, this.options[t]), o = 0; o < i.length - 1; o++) r[i[o]] = r[i[o]] || {}, r = r[i[o]];
                            if (t = i.pop(), 1 === arguments.length) return void 0 === r[t] ? null : r[t];
                            r[t] = n
                        } else {
                            if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                            a[t] = n
                        }
                    return this._setOptions(a), this
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
                    var n, i, r;
                    for (n in t) r = this.classesElementLookup[n], t[n] !== this.options.classes[n] && r && r.length && (i = e(r.get()), this._removeClass(r, n), i.addClass(this._classes({
                        element: i,
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
                    function n(n, o) {
                        var a, s;
                        for (s = 0; s < n.length; s++) a = r.classesElementLookup[n[s]] || e(), a = e(t.add ? e.unique(a.get().concat(t.element.get())) : a.not(t.element).get()), r.classesElementLookup[n[s]] = a, i.push(n[s]), o && t.classes[n[s]] && i.push(t.classes[n[s]])
                    }
                    var i = [],
                        r = this;
                    return t = e.extend({
                        element: this.element,
                        classes: this.options.classes || {}
                    }, t), t.keys && n(t.keys.match(/\S+/g) || [], !0), t.extra && n(t.extra.match(/\S+/g) || []), i.join(" ")
                },
                _removeClass: function(e, t, n) {
                    return this._toggleClass(e, t, n, !1)
                },
                _addClass: function(e, t, n) {
                    return this._toggleClass(e, t, n, !0)
                },
                _toggleClass: function(e, t, n, i) {
                    i = "boolean" == typeof i ? i : n;
                    var r = "string" == typeof e || null === e,
                        o = {
                            extra: r ? t : n,
                            keys: r ? e : t,
                            element: r ? this.element : e,
                            add: i
                        };
                    return o.element.toggleClass(this._classes(o), i), this
                },
                _on: function(t, n, i) {
                    var r, o = this;
                    "boolean" != typeof t && (i = n, n = t, t = !1), i ? (n = r = e(n), this.bindings = this.bindings.add(n)) : (i = n, n = this.element, r = this.widget()), e.each(i, function(i, a) {
                        function s() {
                            return t || o.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0
                        }
                        "string" != typeof a && (s.guid = a.guid = a.guid || s.guid || e.guid++);
                        var u = i.match(/^([\w:-]*)\s*(.*)$/),
                            l = u[1] + o.eventNamespace,
                            c = u[2];
                        c ? r.on(l, c, s) : n.on(l, s)
                    })
                },
                _off: function(t, n) {
                    n = (n || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.off(n).off(n), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get())
                },
                _delay: function(e, t) {
                    function n() {
                        return ("string" == typeof e ? i[e] : e).apply(i, arguments)
                    }
                    var i = this;
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
                _trigger: function(t, n, i) {
                    var r, o, a = this.options[t];
                    if (i = i || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], o = n.originalEvent)
                        for (r in o) r in n || (n[r] = o[r]);
                    return this.element.trigger(n, i), !(e.isFunction(a) && a.apply(this.element[0], [n].concat(i)) === !1 || n.isDefaultPrevented())
                }
            }, e.each({
                show: "fadeIn",
                hide: "fadeOut"
            }, function(t, n) {
                e.Widget.prototype["_" + t] = function(i, r, o) {
                    "string" == typeof r && (r = {
                        effect: r
                    });
                    var a, s = r ? r === !0 || "number" == typeof r ? n : r.effect || n : t;
                    r = r || {}, "number" == typeof r && (r = {
                        duration: r
                    }), a = !e.isEmptyObject(r), r.complete = o, r.delay && i.delay(r.delay), a && e.effects && e.effects.effect[s] ? i[t](r) : s !== t && i[s] ? i[s](r.duration, r.easing, o) : i.queue(function(n) {
                        e(this)[t](), o && o.call(i[0]), n()
                    })
                }
            }), e.widget
        })
    }, function(e, t, n) {
        var i, r, o;
        /*!
         * jQuery UI Keycode 1.12.0-beta.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        ! function(a) {
            r = [n(363), n(366)], i = a, o = "function" == typeof i ? i.apply(t, r) : i, !(void 0 !== o && (e.exports = o))
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