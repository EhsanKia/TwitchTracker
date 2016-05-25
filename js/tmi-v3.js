! function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var f;
        "undefined" != typeof window ? f = window : "undefined" != typeof global ? f = global : "undefined" != typeof self && (f = self), f.TMI = e()
    }
}(function() {
    var define, module, exports;
    return function e(t, n, r) {
        function s(o, u) {
            if (!n[o]) {
                if (!t[o]) {
                    var a = typeof require == "function" && require;
                    if (!u && a) return a(o, !0);
                    if (i) return i(o, !0);
                    var f = new Error("Cannot find module '" + o + "'");
                    throw f.code = "MODULE_NOT_FOUND", f
                }
                var l = n[o] = {
                    exports: {}
                };
                t[o][0].call(l.exports, function(e) {
                    var n = t[o][1][e];
                    return s(n ? n : e)
                }, l, l.exports, e, t, n, r)
            }
            return n[o].exports
        }
        var i = typeof require == "function" && require;
        for (var o = 0; o < r.length; o++) s(r[o]);
        return s
    }({
        1: [function(require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor)
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor
                }
            }();
            var _get = function get(_x, _x2, _x3) {
                var _again = true;
                _function: while (_again) {
                    var object = _x,
                        property = _x2,
                        receiver = _x3;
                    _again = false;
                    if (object === null) object = Function.prototype;
                    var desc = Object.getOwnPropertyDescriptor(object, property);
                    if (desc === undefined) {
                        var parent = Object.getPrototypeOf(object);
                        if (parent === null) {
                            return undefined
                        } else {
                            _x = parent;
                            _x2 = property;
                            _x3 = receiver;
                            _again = true;
                            desc = parent = undefined;
                            continue _function
                        }
                    } else if ("value" in desc) {
                        return desc.value
                    } else {
                        var getter = desc.get;
                        if (getter === undefined) {
                            return undefined
                        }
                        return getter.call(receiver)
                    }
                }
            };

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                }
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function")
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass)
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
            }
            var _connJs = require("./conn.js");
            var _connJs2 = _interopRequireDefault(_connJs);
            var _events = require("./events");
            var _events2 = _interopRequireDefault(_events);
            var _ircJs = require("./irc.js");
            var _ircJs2 = _interopRequireDefault(_ircJs);
            var _logJs = require("./log.js");
            var _logJs2 = _interopRequireDefault(_logJs);
            var _utilJs = require("./util.js");
            var _utilJs2 = _interopRequireDefault(_utilJs);
            var _sessionJs = require("./session.js");
            var _sessionJs2 = _interopRequireDefault(_sessionJs);
            var _WebSocketJs = require("./WebSocket.js");
            var _WebSocketJs2 = _interopRequireDefault(_WebSocketJs);
            var logger = _logJs2["default"]._getLogger("TMI");
            var TMI = function(_EventsDispatcher) {
                _inherits(TMI, _EventsDispatcher);

                function TMI() {
                    _classCallCheck(this, TMI);
                    _get(Object.getPrototypeOf(TMI.prototype), "constructor", this).call(this);
                    this._logger = logger;
                    this.VERSION = 3;
                    this._sessions = []
                }
                _createClass(TMI, [{
                    key: "createSession",
                    value: function createSession(opts) {
                        var nickname = "justinfan" + _utilJs2["default"].randomInt(999999);
                        var password = "blah";
                        if (opts.username && opts.oauthToken) {
                            nickname = opts.username;
                            password = "oauth:" + opts.oauthToken
                        }
                        var session = new _sessionJs2["default"]({
                            nickname: nickname,
                            userId: opts.userId,
                            password: password,
                            oauthToken: opts.oauthToken,
                            apiHostport: opts.apiHostport
                        });
                        this._sessions.push(session);
                        return session
                    }
                }, {
                    key: "getMessageRate",
                    value: function getMessageRate() {
                        var rate = 0;
                        $.each(this._sessions, function(_, session) {
                            rate += session.getMessageRate()
                        });
                        return rate
                    }
                }, {
                    key: "usingWebSockets",
                    value: function usingWebSockets() {
                        for (var i = 0; i < this._sessions.length; i++) {
                            if (this._sessions[i].isUsingWebSockets()) {
                                return true
                            }
                        }
                        return false
                    }
                }, {
                    key: "_onSessionDestroyed",
                    value: function _onSessionDestroyed(session) {
                        _utilJs2["default"].array.remove(this._sessions, session)
                    }
                }]);
                return TMI
            }(_events2["default"]);
            exports["default"] = new TMI;
            module.exports = exports["default"]
        }, {
            "./WebSocket.js": 4,
            "./conn.js": 6,
            "./events": 7,
            "./irc.js": 8,
            "./log.js": 9,
            "./session.js": 11,
            "./util.js": 16
        }],
        2: [function(require, module, exports) {
            (function(global) {
                (function(root) {
                    var freeExports = typeof exports == "object" && exports;
                    var freeModule = typeof module == "object" && module && module.exports == freeExports && module;
                    var freeGlobal = typeof global == "object" && global;
                    if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
                        root = freeGlobal
                    }
                    var punycode, maxInt = 2147483647,
                        base = 36,
                        tMin = 1,
                        tMax = 26,
                        skew = 38,
                        damp = 700,
                        initialBias = 72,
                        initialN = 128,
                        delimiter = "-",
                        regexPunycode = /^xn--/,
                        regexNonASCII = /[^ -~]/,
                        regexSeparators = /\x2E|\u3002|\uFF0E|\uFF61/g,
                        errors = {
                            overflow: "Overflow: input needs wider integers to process",
                            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                            "invalid-input": "Invalid input"
                        },
                        baseMinusTMin = base - tMin,
                        floor = Math.floor,
                        stringFromCharCode = String.fromCharCode,
                        key;

                    function error(type) {
                        throw RangeError(errors[type])
                    }

                    function map(array, fn) {
                        var length = array.length;
                        while (length--) {
                            array[length] = fn(array[length])
                        }
                        return array
                    }

                    function mapDomain(string, fn) {
                        return map(string.split(regexSeparators), fn).join(".")
                    }

                    function ucs2decode(string) {
                        var output = [],
                            counter = 0,
                            length = string.length,
                            value, extra;
                        while (counter < length) {
                            value = string.charCodeAt(counter++);
                            if (value >= 55296 && value <= 56319 && counter < length) {
                                extra = string.charCodeAt(counter++);
                                if ((extra & 64512) == 56320) {
                                    output.push(((value & 1023) << 10) + (extra & 1023) + 65536)
                                } else {
                                    output.push(value);
                                    counter--
                                }
                            } else {
                                output.push(value)
                            }
                        }
                        return output
                    }

                    function ucs2encode(array) {
                        return map(array, function(value) {
                            var output = "";
                            if (value > 65535) {
                                value -= 65536;
                                output += stringFromCharCode(value >>> 10 & 1023 | 55296);
                                value = 56320 | value & 1023
                            }
                            output += stringFromCharCode(value);
                            return output
                        }).join("")
                    }

                    function basicToDigit(codePoint) {
                        if (codePoint - 48 < 10) {
                            return codePoint - 22
                        }
                        if (codePoint - 65 < 26) {
                            return codePoint - 65
                        }
                        if (codePoint - 97 < 26) {
                            return codePoint - 97
                        }
                        return base
                    }

                    function digitToBasic(digit, flag) {
                        return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5)
                    }

                    function adapt(delta, numPoints, firstTime) {
                        var k = 0;
                        delta = firstTime ? floor(delta / damp) : delta >> 1;
                        delta += floor(delta / numPoints);
                        for (; delta > baseMinusTMin * tMax >> 1; k += base) {
                            delta = floor(delta / baseMinusTMin)
                        }
                        return floor(k + (baseMinusTMin + 1) * delta / (delta + skew))
                    }

                    function decode(input) {
                        var output = [],
                            inputLength = input.length,
                            out, i = 0,
                            n = initialN,
                            bias = initialBias,
                            basic, j, index, oldi, w, k, digit, t, baseMinusT;
                        basic = input.lastIndexOf(delimiter);
                        if (basic < 0) {
                            basic = 0
                        }
                        for (j = 0; j < basic; ++j) {
                            if (input.charCodeAt(j) >= 128) {
                                error("not-basic")
                            }
                            output.push(input.charCodeAt(j))
                        }
                        for (index = basic > 0 ? basic + 1 : 0; index < inputLength;) {
                            for (oldi = i, w = 1, k = base;; k += base) {
                                if (index >= inputLength) {
                                    error("invalid-input")
                                }
                                digit = basicToDigit(input.charCodeAt(index++));
                                if (digit >= base || digit > floor((maxInt - i) / w)) {
                                    error("overflow")
                                }
                                i += digit * w;
                                t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                                if (digit < t) {
                                    break
                                }
                                baseMinusT = base - t;
                                if (w > floor(maxInt / baseMinusT)) {
                                    error("overflow")
                                }
                                w *= baseMinusT
                            }
                            out = output.length + 1;
                            bias = adapt(i - oldi, out, oldi == 0);
                            if (floor(i / out) > maxInt - n) {
                                error("overflow")
                            }
                            n += floor(i / out);
                            i %= out;
                            output.splice(i++, 0, n)
                        }
                        return ucs2encode(output)
                    }

                    function encode(input) {
                        var n, delta, handledCPCount, basicLength, bias, j, m, q, k, t, currentValue, output = [],
                            inputLength, handledCPCountPlusOne, baseMinusT, qMinusT;
                        input = ucs2decode(input);
                        inputLength = input.length;
                        n = initialN;
                        delta = 0;
                        bias = initialBias;
                        for (j = 0; j < inputLength; ++j) {
                            currentValue = input[j];
                            if (currentValue < 128) {
                                output.push(stringFromCharCode(currentValue))
                            }
                        }
                        handledCPCount = basicLength = output.length;
                        if (basicLength) {
                            output.push(delimiter)
                        }
                        while (handledCPCount < inputLength) {
                            for (m = maxInt, j = 0; j < inputLength; ++j) {
                                currentValue = input[j];
                                if (currentValue >= n && currentValue < m) {
                                    m = currentValue
                                }
                            }
                            handledCPCountPlusOne = handledCPCount + 1;
                            if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
                                error("overflow")
                            }
                            delta += (m - n) * handledCPCountPlusOne;
                            n = m;
                            for (j = 0; j < inputLength; ++j) {
                                currentValue = input[j];
                                if (currentValue < n && ++delta > maxInt) {
                                    error("overflow")
                                }
                                if (currentValue == n) {
                                    for (q = delta, k = base;; k += base) {
                                        t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                                        if (q < t) {
                                            break
                                        }
                                        qMinusT = q - t;
                                        baseMinusT = base - t;
                                        output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
                                        q = floor(qMinusT / baseMinusT)
                                    }
                                    output.push(stringFromCharCode(digitToBasic(q, 0)));
                                    bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
                                    delta = 0;
                                    ++handledCPCount
                                }
                            }++delta;
                            ++n
                        }
                        return output.join("")
                    }

                    function toUnicode(domain) {
                        return mapDomain(domain, function(string) {
                            return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string
                        })
                    }

                    function toASCII(domain) {
                        return mapDomain(domain, function(string) {
                            return regexNonASCII.test(string) ? "xn--" + encode(string) : string
                        })
                    }
                    punycode = {
                        version: "1.2.4",
                        ucs2: {
                            decode: ucs2decode,
                            encode: ucs2encode
                        },
                        decode: decode,
                        encode: encode,
                        toASCII: toASCII,
                        toUnicode: toUnicode
                    };
                    if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
                        define("punycode", function() {
                            return punycode
                        })
                    } else if (freeExports && !freeExports.nodeType) {
                        if (freeModule) {
                            freeModule.exports = punycode
                        } else {
                            for (key in punycode) {
                                punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key])
                            }
                        }
                    } else {
                        root.punycode = punycode
                    }
                })(this)
            }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
        }, {}],
        3: [function(require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor)
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor
                }
            }();

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                }
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function")
                }
            }
            var _logJs = require("./log.js");
            var _logJs2 = _interopRequireDefault(_logJs);
            var logger = _logJs2["default"]._getLogger("RateCounter");
            var RateCounter = function() {
                function RateCounter(opts) {
                    _classCallCheck(this, RateCounter);
                    opts = opts || {};
                    this._size = opts.size || 90;
                    this._times = new Array(this._size);
                    this._values = new Array(this._size);
                    this._initializeState()
                }
                _createClass(RateCounter, [{
                    key: "_initializeState",
                    value: function _initializeState() {
                        this._cursor = 0;
                        var initTime = this._getTimeInSeconds();
                        for (var i = 0; i < this._size; i++) {
                            this._values[i] = 0;
                            this._times[i] = initTime
                        }
                    }
                }, {
                    key: "_getTimeInSeconds",
                    value: function _getTimeInSeconds() {
                        return Math.floor(Date.now() / 1e3)
                    }
                }, {
                    key: "_incrementCursor",
                    value: function _incrementCursor() {
                        this._cursor = (this._cursor + 1) % this._size;
                        return this._cursor
                    }
                }, {
                    key: "_timeHead",
                    value: function _timeHead() {
                        return this._times[this._cursor]
                    }
                }, {
                    key: "add",
                    value: function add(count) {
                        count = count || 1;
                        var time = this._getTimeInSeconds();
                        if (time > this._timeHead()) {
                            this._incrementCursor();
                            this._values[this._cursor] = count;
                            this._times[this._cursor] = time
                        } else if (time < this._timeHead()) {
                            logger.error("Time ran backwards (local clock likely changed)");
                            this._initializeState();
                            this._values[this._cursor] += count
                        } else {
                            this._values[this._cursor] += count
                        }
                    }
                }, {
                    key: "getRateForSecond",
                    value: function getRateForSecond(time) {
                        time = time || this._getTimeInSeconds();
                        for (var i = this._size; i > 0; i--) {
                            var idx = (i + this._cursor) % this._size;
                            if (time === this._times[idx]) {
                                return this._values[idx]
                            } else if (time > this._times[idx]) {
                                return 0
                            }
                        }
                        return 0
                    }
                }, {
                    key: "getRatePerSecondForLastSeconds",
                    value: function getRatePerSecondForLastSeconds(seconds) {
                        var time = this._getTimeInSeconds() - 1;
                        var startTime = time - seconds;
                        var sum = 0;
                        for (var i = this._size; i > 0; i--) {
                            var idx = (i + this._cursor) % this._size;
                            if (this._times[idx] >= startTime) {
                                sum += this._values[idx]
                            } else {
                                return sum / seconds
                            }
                        }
                        return sum / seconds
                    }
                }]);
                return RateCounter
            }();
            exports["default"] = RateCounter;
            module.exports = exports["default"]
        }, {
            "./log.js": 9
        }],
        4: [function(require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor)
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor
                }
            }();
            var _get = function get(_x, _x2, _x3) {
                var _again = true;
                _function: while (_again) {
                    var object = _x,
                        property = _x2,
                        receiver = _x3;
                    _again = false;
                    if (object === null) object = Function.prototype;
                    var desc = Object.getOwnPropertyDescriptor(object, property);
                    if (desc === undefined) {
                        var parent = Object.getPrototypeOf(object);
                        if (parent === null) {
                            return undefined
                        } else {
                            _x = parent;
                            _x2 = property;
                            _x3 = receiver;
                            _again = true;
                            desc = parent = undefined;
                            continue _function
                        }
                    } else if ("value" in desc) {
                        return desc.value
                    } else {
                        var getter = desc.get;
                        if (getter === undefined) {
                            return undefined
                        }
                        return getter.call(receiver)
                    }
                }
            };

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                }
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function")
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass)
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
            }
            var _logJs = require("./log.js");
            var _logJs2 = _interopRequireDefault(_logJs);
            var _utilJs = require("./util.js");
            var _utilJs2 = _interopRequireDefault(_utilJs);
            var _statsJs = require("./stats.js");
            var _statsJs2 = _interopRequireDefault(_statsJs);
            var _eventsJs = require("./events.js");
            var _eventsJs2 = _interopRequireDefault(_eventsJs);
            var _RateCounterJs = require("./RateCounter.js");
            var _RateCounterJs2 = _interopRequireDefault(_RateCounterJs);
            var logger = _logJs2["default"]._getLogger("websocket");
            var BUFFER_FLUSH_DELAY_MS = 100;
            var _validProtocols = {
                ws: true,
                wss: true
            };
            var TMIWebSocket = function(_EventsDispatcher) {
                _inherits(TMIWebSocket, _EventsDispatcher);

                function TMIWebSocket(opts) {
                    _classCallCheck(this, TMIWebSocket);
                    _get(Object.getPrototypeOf(TMIWebSocket.prototype), "constructor", this).call(this, opts);
                    this._opts = opts;
                    this._socket = null;
                    this._logger = opts.logger || logger;
                    this._rateCounter = new _RateCounterJs2["default"]
                }
                _createClass(TMIWebSocket, [{
                    key: "load",
                    value: function load() {
                        this._logger.info("Socket Loaded")
                    }
                }, {
                    key: "connect",
                    value: function connect(addr) {
                        var host = addr.host;
                        var port = addr.port;
                        if (this._connected()) {
                            this._logger.error("Attempting to reopen opened socket");
                            return
                        } else if (this._socket) {
                            this.close()
                        }
                        this._logger.info("Opening Websocket to " + host + ":" + port);
                        try {
                            var prefix = _validProtocols.hasOwnProperty(addr.protocol) ? addr.protocol : "ws";
                            this._logger.info("websocket prefix: " + prefix);
                            if (this._opts.trackTimings) {
                                this._openTime = _utilJs2["default"].time.now()
                            }
                            this._socket = new WebSocket(prefix + "://" + host + ":" + port, "irc")
                        } catch (e) {
                            this.close();
                            this._onError(e);
                            return
                        }
                        this._socket.onmessage = this._onMessage.bind(this);
                        this._socket.onerror = this._onError.bind(this);
                        this._socket.onclose = this._onClose.bind(this);
                        this._socket.onopen = this._onOpen.bind(this)
                    }
                }, {
                    key: "close",
                    value: function close() {
                        if (!this._socket) {
                            this._logger.error("Attempting to close socket before connecting");
                            return
                        }
                        if (this._socket.bufferedAmount) {
                            this._logger.warning("Close called on socket with pending data")
                        }
                        this._socket.close()
                    }
                }, {
                    key: "send",
                    value: function send(data, appendNullByte) {
                        if (!this._connected()) {
                            this._logger.error("Attempted to write to unopened socket");
                            return
                        }
                        this._socket.send(data)
                    }
                }, {
                    key: "getMessageRate",
                    value: function getMessageRate() {
                        return this._rateCounter.getRatePerSecondForLastSeconds(60)
                    }
                }, {
                    key: "_connected",
                    value: function _connected() {
                        return this._socket && this._socket.readyState === WebSocket.OPEN
                    }
                }, {
                    key: "_onOpen",
                    value: function _onOpen(event) {
                        this._logger.info("Websocket open", event);
                        if (this._opts.trackTimings) {
                            var t = _utilJs2["default"].time.now() - this._openTime;
                            _statsJs2["default"].sendStatTimer("pubsub.tmi.websocket.connect", t)
                        }
                        this._trigger("connected")
                    }
                }, {
                    key: "_onMessage",
                    value: function _onMessage(event) {
                        this._logger.info(event);
                        var messages = event.data.split("\n");
                        for (var i = 0; i < messages.length; i++) {
                            if ($.trim(messages[i]).length === 0) {
                                continue
                            }
                            var data = {
                                data: messages[i]
                            };
                            this._rateCounter.add();
                            this._addMessage(data)
                        }
                    }
                }, {
                    key: "_addMessage",
                    value: function _addMessage(data) {
                        try {
                            this._trigger("data", data)
                        } catch (e) {
                            this._logger.error("Error emitting socket data: " + e)
                        }
                    }
                }, {
                    key: "_onError",
                    value: function _onError(event) {
                        this._logger.info("Websocket error", event);
                        this._trigger("error")
                    }
                }, {
                    key: "_onClose",
                    value: function _onClose(event) {
                        this._logger.info("Websocket closed", event);
                        this._trigger("closed")
                    }
                }], [{
                    key: "supported",
                    value: function supported() {
                        return !!window.WebSocket
                    }
                }]);
                return TMIWebSocket
            }(_eventsJs2["default"]);
            exports["default"] = TMIWebSocket;
            module.exports = exports["default"]
        }, {
            "./RateCounter.js": 3,
            "./events.js": 7,
            "./log.js": 9,
            "./stats.js": 13,
            "./util.js": 16
        }],
        5: [function(require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor)
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor
                }
            }();

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                }
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function")
                }
            }
            var _logJs = require("./log.js");
            var _logJs2 = _interopRequireDefault(_logJs);
            var _utilJs = require("./util.js");
            var _utilJs2 = _interopRequireDefault(_utilJs);
            var logger = _logJs2["default"]._getLogger("api");
            var DEFAULT_MAX_GET_ATTEMPTS = 3;
            var Api = function() {
                function Api(config) {
                    _classCallCheck(this, Api);
                    this.baseUrl = config.baseUrl;
                    this.data = config.data;
                    this.headers = config.headers
                }
                _createClass(Api, [{
                    key: "get",
                    value: function get(path, data, options) {
                        return this._ajaxRetry("GET", path, data, options)
                    }
                }, {
                    key: "post",
                    value: function post(path, data, options) {
                        return this._ajaxRetry("POST", path, data, options)
                    }
                }, {
                    key: "put",
                    value: function put(path, data, options) {
                        return this._ajaxRetry("PUT", path, data, options)
                    }
                }, {
                    key: "del",
                    value: function del(path, data, options) {
                        return this._ajaxRetry("DELETE", path, data, options)
                    }
                }, {
                    key: "destroy",
                    value: function destroy() {
                        $(this.iframe).remove()
                    }
                }, {
                    key: "_initIframeHack",
                    value: function _initIframeHack(receiverUrl, documentDomain) {
                        this._isIframeHackReady = false;
                        this.requestQueue = [];
                        this.iframe = $("<iframe>").attr("src", receiverUrl).appendTo("head").get(0);
                        document.domain = documentDomain
                    }
                }, {
                    key: "_iframeHackAjax",
                    value: function _iframeHackAjax(options) {
                        var _this = this;
                        options.xhr = function() {
                            var XhrConstructor = Twitch.api.xhrConstructor || _this.iframe.contentWindow.XMLHttpRequest;
                            return new XhrConstructor
                        };
                        options.beforeSend = function(jqXHR, settings) {
                            settings.crossDomain = false
                        };
                        if (this._isIframeHackReady) {
                            $.ajax(options)
                        } else {
                            logger.debug("API Iframe hack not ready. Queueing " + options.method + " " + options.url + " API request.");
                            this.requestQueue.push(options)
                        }
                    }
                }, {
                    key: "_onIframeHackReady",
                    value: function _onIframeHackReady() {
                        if (!this._isIframeHackReady) {
                            this._isIframeHackReady = true;
                            $.each(this.requestQueue, function(index, options) {
                                $.ajax(options)
                            })
                        }
                    }
                }, {
                    key: "_ajaxRetry",
                    value: function _ajaxRetry(method, path, data, options) {
                        var deferred = new $.Deferred;
                        options = options || {};
                        if (options.success) {
                            deferred.done(options.success);
                            delete options.success
                        }
                        if (options.error) {
                            deferred.fail(options.error);
                            delete options.error
                        }
                        if (method === "GET") {
                            options.numAttempts = options.numAttempts || DEFAULT_MAX_GET_ATTEMPTS
                        } else {
                            options.numAttempts = options.numAttempts || 1
                        }
                        deferred.fail(function(jqXHR, textStatus, errorThrown) {
                            TMI._trigger("api-fail", {
                                url: options.url,
                                jqXHR: jqXHR,
                                textStatus: textStatus,
                                errorThrown: errorThrown
                            })
                        });
                        options.headers = $.extend({}, this.headers, options.headers);
                        options.data = $.extend({}, this.data, data, options.data);
                        if (this.data && this.data.oauth_token) {
                            options.headers.Authorization = "OAuth " + this.data.oauth_token
                        }
                        options.type = options.type || method;
                        options = $.extend({
                            url: this.baseUrl + path,
                            dataType: "json",
                            cache: true,
                            global: false,
                            retryNum: 0,
                            reject: deferred.reject,
                            success: deferred.resolve
                        }, options);
                        this._doAjax(options);
                        return deferred
                    }
                }, {
                    key: "_doAjax",
                    value: function _doAjax(options) {
                        var self = this;
                        if (options.numAttempts === 1) {
                            options.error = function(jqXHR, textStatus, errorThrown) {
                                options.reject(jqXHR, textStatus, errorThrown)
                            }
                        } else {
                            options.error = function() {
                                options.numAttempts--;
                                var retryDelay = _utilJs2["default"].time.seconds(Math.pow(2, options.retryNum)) / 2;
                                setTimeout(function() {
                                    self._doAjax(options)
                                }, retryDelay);
                                options.retryNum++;
                                logger.warning("ajax error, retrying in " + retryDelay + " milliseconds...")
                            }
                        }
                        if (this.iframe) {
                            this._iframeHackAjax(options)
                        } else {
                            $.ajax(options)
                        }
                    }
                }]);
                return Api
            }();
            var api = {};
            api.twitch = {};
            api.twitch.init = function(opts) {
                opts = opts || {};
                var host = opts.hostport || "api.twitch.tv";
                var baseUrl = window.location.protocol + "//" + host;
                var api = new Api({
                    baseUrl: baseUrl,
                    data: {
                        on_site: "1"
                    },
                    headers: {
                        Accept: "application/vnd.twitchtv.v2+json",
                        "Twitch-Api-Token": _utilJs2["default"].readCookie("api_token")
                    }
                });
                window.TMI._twitchIframeReady = function() {
                    api._onIframeHackReady()
                };
                api._initIframeHack(baseUrl + "/assets/tmi_crossdomain_receiver.html", "twitch.tv");
                return api
            };
            api.twitch.getAcceptHeader = function(version) {
                return "application/vnd.twitchtv.v" + version + "+json"
            };
            api.chatdepot = {};
            api.chatdepot.init = function(oauthToken) {
                var baseUrl = "chatdepot.twitch.tv";
                var WHITELIST = ["chatdepot-staging.twitch.tv"];
                var url = _utilJs2["default"].urlParams.chatdepot_api_url;
                if (url) {
                    if (WHITELIST.indexOf(url) < 0) {
                        var error = "Non-whitelisted chatdepot_api_url: " + url;
                        logger.error(error);
                        throw error
                    }
                    baseUrl = _utilJs2["default"].urlParams.chatdepot_api_url
                }
                baseUrl = window.location.protocol + "//" + baseUrl;
                var api = new Api({
                    baseUrl: baseUrl,
                    data: {
                        oauth_token: oauthToken
                    }
                });
                window.TMI._api = {
                    iframeReady: function iframeReady() {
                        api._onIframeHackReady()
                    }
                };
                api._initIframeHack(baseUrl + "/crossdomain/tmi.html", "twitch.tv");
                return api
            };
            api.chatdepot.fail = function(deferred) {
                return function(jqXHR, textStatus, errorThrown) {
                    var errorCode, errors, message;
                    try {
                        var response = JSON.parse(jqXHR.responseText);
                        errorCode = response.code;
                        errors = response.errors;
                        message = response.message
                    } catch (e) {
                        logger.warning("Unable to parse body of error response.")
                    }
                    logger.error("Depot responded with: " + errorCode + " - " + message);
                    deferred.reject(errorCode, message, errors)
                }
            };
            api.tmi = {};
            api.tmi.init = function(oauthToken) {
                var baseUrl = window.location.protocol + "//tmi.twitch.tv";
                var api = new Api({
                    baseUrl: baseUrl,
                    data: {
                        oauth_token: oauthToken
                    }
                });
                window.TMI._tmiIframeReady = function() {
                    api._onIframeHackReady()
                };
                api._initIframeHack(baseUrl + "/static/crossdomain_receiver.html", "twitch.tv");
                return api
            };
            api.tmi.fail = function(deferred) {
                return function(jqXHR, textStatus, errorThrown) {
                    logger.error("TMI api error: " + jqXHR.statusCode() + ", " + textStatus + ", " + errorThrown);
                    deferred.reject()
                }
            };
            exports["default"] = api;
            module.exports = exports["default"]
        }, {
            "./log.js": 9,
            "./util.js": 16
        }],
        6: [function(require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                }
            }
            var _eventsJs = require("./events.js");
            var _eventsJs2 = _interopRequireDefault(_eventsJs);
            var _socketJs = require("./socket.js");
            var _socketJs2 = _interopRequireDefault(_socketJs);
            var _WebSocketJs = require("./WebSocket.js");
            var _WebSocketJs2 = _interopRequireDefault(_WebSocketJs);
            var _roomJs = require("./room.js");
            var _roomJs2 = _interopRequireDefault(_roomJs);
            var _logJs = require("./log.js");
            var _logJs2 = _interopRequireDefault(_logJs);
            var _utilJs = require("./util.js");
            var _utilJs2 = _interopRequireDefault(_utilJs);
            var _ircJs = require("./irc.js");
            var _ircJs2 = _interopRequireDefault(_ircJs);
            var _usersJs = require("./users.js");
            var _usersJs2 = _interopRequireDefault(_usersJs);
            var logger = _logJs2["default"]._getLogger("conn");
            var APPEND_NULL_BYTE = true;
            var SEND_SUFFIX = "\r\n";
            var INVALID_CHARS = [/[\r\n]+/, String.fromCharCode(0)];
            var MAX_CONNECTION_ATTEMPTS = 8;
            var MAX_WEB_SOCKET_CONNECTION_ATTEMPTS = 3;
            var Connection = function Connection(opts) {
                this._opts = opts;
                this.nickname = opts.nickname;
                this.cluster = opts.cluster;
                this._reconnecting = !!opts.reconnecting;
                this._logger = opts.logger ? opts.logger : logger;
                this._roomConns = [];
                this._addrs = _utilJs2["default"].array.shuffle(opts.addrs);
                this._wsAddrs = _utilJs2["default"].array.shuffle(opts.wsAddrs);
                if (opts.preferredAddr) {
                    for (var i = 0; i < this._addrs.length; i++) {
                        var addr = this._addrs[i];
                        if (addr.host === opts.preferredAddr.host && addr.port === opts.preferredAddr.port) {
                            this._addrs[i] = this._addrs[0];
                            this._addrs[0] = addr;
                            break
                        }
                    }
                    for (i = 0; i < this._wsAddrs.length; i++) {
                        var addr = this._wsAddrs[i];
                        if (addr.host === opts.preferredAddr.host && addr.port === opts.preferredAddr.port) {
                            this._wsAddrs[i] = this._wsAddrs[0];
                            this._wsAddrs[0] = addr;
                            break
                        }
                    }
                }
                this.isActive = false;
                this.isOpen = this.isConnected = false;
                this._wasCloseCalled = false;
                this._numSocketConnectAttempts = 0;
                this._retryConnectionTimeout = null;
                this._currentAddressIndex = -1;
                this._currentWSAddressIndex = -1;
                var useWebSockets = false;
                var websocketPct = opts.webSocketPct || 0;
                this._webSocketFailed = false;
                if (_utilJs2["default"].urlParams.useWebSockets && opts.allowWebSockets || opts.useWebSockets && opts.wsAddrs.length) {
                    useWebSockets = true
                } else if (this._canSupportWebSockets() && opts.allowWebSockets) {
                    var deviceId = Twitch.idsForMixpanel.getOrCreateUniqueId();
                    var value = parseInt(deviceId.slice(0, 8), 16) / Math.pow(2, 32);
                    useWebSockets = value < websocketPct
                }
                this._initSocket(useWebSockets)
            };
            Connection.prototype = new _eventsJs2["default"];
            Connection.prototype._initSocket = function(useWebSockets) {
                this._isUsingWebSockets = useWebSockets;
                if (useWebSockets) {
                    this._socket = new _WebSocketJs2["default"]({
                        trackTimings: Math.random() < .1,
                        logger: this._logger
                    })
                } else {
                    this._socket = new _socketJs2["default"]({
                        logger: this._logger
                    })
                }
                this._flashTimedOut = false;
                this._socket.on("connected", this._onSocketConnected, this);
                this._socket.on("closed", this._onSocketClosed, this);
                this._socket.on("error", this._onSocketConnectFailed, this);
                this._socket.on("data", this._onSocketDataReceived, this);
                this._socket.on("flashtimeout", this._onFlashTimeout, this);
                this._socket.on("wssupporterror", this._onWebSocketSupportError, this);
                this._socket.load()
            };
            Connection.prototype.isUsingWebSockets = function() {
                return this._isUsingWebSockets
            };
            Connection.prototype.open = function() {
                this._wasCloseCalled = false;
                if (!this.isActive) {
                    this._logger.info("Connecting...");
                    this.isActive = true;
                    if (!this._triggerIfFlashDisabled()) {
                        if (this._isReadyToConnect()) {
                            this._connectToNextAddress()
                        }
                    }
                }
                if (this._opts.darklaunchConn) {
                    try {
                        this._opts.darklaunchConn.open()
                    } catch (err) {}
                }
            };
            Connection.prototype.connect = function() {
                this._logger.warning("Connection.connect() is deprecated. Use open() instead.");
                this.open()
            };
            Connection.prototype.close = function() {
                if (this.isActive) {
                    this._logger.info("Closing connection...")
                }
                this.isActive = this.isOpen = this.isConnected = false;
                this._wasCloseCalled = true;
                this._stopConnecting();
                this._socket.close()
            };
            Connection.prototype.getMessageRate = function() {
                return this._socket.getMessageRate()
            };
            Connection.prototype._addRoomConn = function(roomConn) {
                this._roomConns.push(roomConn)
            };
            Connection.prototype._activeRoomConns = function() {
                return $.grep(this._roomConns, function(room) {
                    return room.isActive
                })
            };
            Connection.prototype._exitedRoomConn = function() {
                var activeRooms = this._activeRoomConns();
                if (activeRooms.length === 0 && this.cluster != "group") {
                    this.close()
                }
            };
            Connection.prototype._onSocketConnected = function(data) {
                this._logger.debug("Socket connected.");
                if (this.isActive) {
                    var addr = this._getCurrentAddress();
                    this._logger.info("Successfully opened connection to " + addr.host + ":" + addr.port + ". Attempting to register with IRC server.");
                    this._send("CAP REQ :twitch.tv/tags twitch.tv/commands");
                    this._send("PASS " + this._opts.password);
                    this._send("NICK " + this._opts.nickname)
                } else {
                    this._logger.warning("Socket connected but connection is not active. Closing socket...");
                    this._socket.close()
                }
            };
            Connection.prototype._onSocketConnectFailed = function(data) {
                this._logger.debug("Socket connect failed.");
                this.isOpen = this.isConnected = false;
                if (this.isActive) {
                    this._connectionFailed("Unable to connect.")
                } else if (this._wasCloseCalled) {
                    this._logger.info("Connection closed.");
                    this._connectionClosed()
                }
            };
            Connection.prototype._onSocketClosed = function(data) {
                this._logger.debug("Socket closed.");
                var wasOpen = this.isOpen;
                this.isOpen = this.isConnected = false;
                if (this.isActive) {
                    this._connectionFailed(wasOpen ? "Connection closed unexpectedly." : "Unable to connect.");
                    if (wasOpen) {
                        this._trigger("disconnected", this)
                    }
                } else if (this._wasCloseCalled) {
                    this._logger.info("Connection closed.");
                    this._connectionClosed()
                }
            };
            Connection.prototype._onSocketDataReceived = function(data) {
                this._logger.debug("Socket data received: " + data.data);
                var msg = _ircJs2["default"].parseMessage(data.data);
                switch (msg.command) {
                    case "PRIVMSG":
                        if (_ircJs2["default"].isChannel(msg.target)) {
                            var TEMPORARY_PROTOCOL_KLUDGE = msg.sender === "twitchnotify" && msg.message.slice(0, 11) === "ROOMCHANGED";
                            if (msg.sender === "jtv" || TEMPORARY_PROTOCOL_KLUDGE) {
                                this._handleTmiPrivmsg(msg)
                            } else {
                                this._trigger("message", msg)
                            }
                        } else {
                            this._handleTmiPrivmsg(msg)
                        }
                        break;
                    case "USERNOTICE":
                        this._trigger("usernotice", msg);
                        break;
                    case "HOSTTARGET":
                        this._trigger("hosttarget", msg.target, msg.hostTarget, msg.numViewers, msg.recentlyJoined);
                        break;
                    case "CLEARCHAT":
                        this._trigger("clearchat", msg.target, msg.user, msg.tags);
                        break;
                    case "USERSTATE":
                    case "GLOBALUSERSTATE":
                        this._trigger("userstate", msg);
                        break;
                    case "PING":
                        this._send("PONG");
                        break;
                    case "004":
                        this._ircRegistered();
                        break;
                    case "RECONNECT":
                        this._onReconnect();
                        break;
                    case "NOTICE":
                        this._trigger("notice", msg);
                        break;
                    case "WHISPER":
                        this._trigger("whisper", msg);
                        break;
                    case "ROOMSTATE":
                        this._trigger("roomstate", msg);
                        break;
                    default:
                        if (_ircJs2["default"].isChannel(msg.target)) {
                            this._trigger("message", msg)
                        }
                        break
                }
            };
            Connection.prototype._handleTmiPrivmsg = function(msg) {
                var tmiMsg = _ircJs2["default"].parseTmiPrivmsg(msg);
                switch (tmiMsg.type) {
                    case "ROOMBAN":
                        this._trigger("roomban", _ircJs2["default"].channel(tmiMsg.user));
                        break;
                    case "ROOMCHANGED":
                        this._trigger("roomchanged", tmiMsg.target);
                        break;
                    case "ROOMDELETED":
                        this._trigger("roomdeleted", tmiMsg.target);
                        break;
                    case "ROOMINVITE":
                        this._trigger("roominvite", tmiMsg.user, tmiMsg.payload.by);
                        break;
                    default:
                        this._trigger("privmsg", {
                            style: tmiMsg.style,
                            target: tmiMsg.target,
                            message: tmiMsg.payload
                        });
                        break
                }
            };
            Connection.prototype._ircRegistered = function() {
                this._setExperimentState();
                this._logger.info("IRC connected.");
                this._numSocketConnectAttempts = 1;
                this.isOpen = this.isConnected = true;
                this._trigger("opened");
                this._trigger("connected")
            };
            Connection.prototype._connectionClosed = function() {
                this._wasCloseCalled = false;
                this._trigger("closed")
            };
            Connection.prototype._connectionFailed = function(reasonMsg) {
                if (this._numSocketConnectAttempts < MAX_CONNECTION_ATTEMPTS) {
                    if (this._isUsingWebSockets && this._numSocketConnectAttempts >= MAX_WEB_SOCKET_CONNECTION_ATTEMPTS) {
                        this._webSocketFailOver();
                        this._logger.warning(reasonMsg + " Giving up on websockets, attempting to initialize flash socket...")
                    }
                    var retryDelay = _utilJs2["default"].time.seconds(Math.pow(2, this._numSocketConnectAttempts));
                    this._retryConnectionTimeout = setTimeout(_utilJs2["default"].callback(this._retryConnecting, this), retryDelay);
                    this._logger.warning(reasonMsg + " Attempting to connect again in " + retryDelay / 1e3 + " seconds...");
                    this._trigger("open:retry", {
                        delay: retryDelay
                    });
                    this._trigger("connect:retry", {
                        delay: retryDelay
                    })
                } else {
                    this._logger.critical("Connection failed repeatedly after " + this._numSocketConnectAttempts + " connection attempts. " + "There will be no more attempts to connect.");
                    this._stopConnecting();
                    this._trigger("open:failed");
                    this._trigger("connect:failed")
                }
            };
            Connection.prototype._webSocketFailOver = function() {
                this._webSocketFailed = true;
                this._socket.close();
                this._initSocket(false);
                if (this.isActive) {
                    this._triggerIfFlashDisabled()
                }
            };
            Connection.prototype._canSupportWebSockets = function() {
                return !this.webSocketFailed && this._wsAddrs.length > 0 && _WebSocketJs2["default"].supported()
            };
            Connection.prototype._setExperimentState = function() {
                if (this.cluster === "darklaunch" || this.cluster === "group") {
                    return
                }
                if (this._canSupportWebSockets() && !_utilJs2["default"].urlParams.useWebSockets) {
                    var tracking = {
                        experiment_id: "websocket_chat",
                        experiment_platform: "web"
                    };
                    if (this._isUsingWebSockets) {
                        tracking.experiment_group = "websocket"
                    } else {
                        tracking.experiment_group = "flash"
                    }
                    Twitch.tracking.spadeAndMixpanel.trackEvent("experiment_branch", tracking)
                }
            };
            Connection.prototype._onFlashDisabled = function(data) {
                this._logger.critical("Flash failed to load: " + data.error);
                this._trigger("flashdisabled")
            };
            Connection.prototype._onFlashTimeout = function(data) {
                this._logger.critical("Flash timeout: " + data.error);
                this._flashTimedOut = true;
                this._trigger("flashtimeout")
            };
            Connection.prototype._onWebSocketSupportError = function(data) {};
            Connection.prototype._onReconnect = function() {
                this._logger.info("Reconnect request received");
                if (!this._reconnecting) {
                    this._reconnecting = true;
                    var newConn = new Connection($.extend(this._opts, {
                        preferredAddr: this._getCurrentAddress(),
                        reconnecting: true
                    }));
                    this._trigger("reconnecting", newConn)
                }
            };
            Connection.prototype._retryConnecting = function() {
                this._stopConnecting();
                this._connectToNextAddress()
            };
            Connection.prototype._stopConnecting = function() {
                clearTimeout(this._retryConnectionTimeout);
                this._retryConnectionTimeout = null
            };
            Connection.prototype._isReadyToConnect = function() {
                return this._retryConnectionTimeout === null && this._numSocketConnectAttempts < MAX_CONNECTION_ATTEMPTS
            };
            Connection.prototype._send = function(data) {
                var sanitized = data;
                for (var i = 0; i < INVALID_CHARS.length; ++i) {
                    sanitized = sanitized.replace(INVALID_CHARS[i], "")
                }
                this._logger.debug("Sending: " + sanitized);
                this._socket.send(sanitized + SEND_SUFFIX, APPEND_NULL_BYTE);
                if (this._opts.darklaunchConn) {
                    try {
                        this._opts.darklaunchConn._send(data)
                    } catch (err) {}
                }
            };
            Connection.prototype._connectToNextAddress = function() {
                var addr = this._getNextAddress();
                this._numSocketConnectAttempts += 1;
                this._logger.info("Connecting to socket with address " + addr.host + ":" + addr.port);
                this._socket.connect(addr)
            };
            Connection.prototype._getNextAddress = function() {
                if (this._isUsingWebSockets) {
                    this._currentWSAddressIndex = _utilJs2["default"].array.getNextIndex(this._wsAddrs, this._currentWSAddressIndex);
                    return this._wsAddrs[this._currentWSAddressIndex]
                } else {
                    this._currentAddressIndex = _utilJs2["default"].array.getNextIndex(this._addrs, this._currentAddressIndex);
                    return this._addrs[this._currentAddressIndex]
                }
            };
            Connection.prototype._getCurrentAddress = function() {
                if (this._isUsingWebSockets) {
                    return this._wsAddrs[Math.max(this._currentWSAddressIndex, 0)]
                } else {
                    return this._addrs[Math.max(this._currentAddressIndex, 0)]
                }
            };
            Connection.prototype._triggerIfFlashDisabled = function() {
                if (this._socket._flashMissing) {
                    this._onFlashDisabled({
                        error: "VERSION_0"
                    });
                    return true
                } else if (this._socket._flashOld) {
                    this._onFlashDisabled({
                        error: "OLD_VERSION"
                    });
                    return true
                }
                return false
            };
            exports["default"] = Connection;
            module.exports = exports["default"]
        }, {
            "./WebSocket.js": 4,
            "./events.js": 7,
            "./irc.js": 8,
            "./log.js": 9,
            "./room.js": 10,
            "./socket.js": 12,
            "./users.js": 15,
            "./util.js": 16
        }],
        7: [function(require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor)
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor
                }
            }();

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function")
                }
            }
            var EventsDispatcher = function() {
                function EventsDispatcher() {
                    _classCallCheck(this, EventsDispatcher)
                }
                _createClass(EventsDispatcher, [{
                    key: "on",
                    value: function on(name, callback, context) {
                        this._events = this._events || {};
                        this._events[name] = this._events[name] || [];
                        this._events[name].push(callback, context);
                        return this
                    }
                }, {
                    key: "off",
                    value: function off(name, callback) {
                        if (this._events) {
                            var callbacks = this._events[name] || [];
                            var keep = this._events[name] = [];
                            for (var i = 0; i < callbacks.length; i += 2) {
                                if (callbacks[i] !== callback) {
                                    keep.push(callbacks[i]);
                                    keep.push(callbacks[i + 1])
                                }
                            }
                        }
                        return this
                    }
                }, {
                    key: "_trigger",
                    value: function _trigger(name) {
                        if (this._events) {
                            var callbacks = this._events[name] || [];
                            for (var i = 1; i < callbacks.length; i += 2) {
                                callbacks[i - 1].apply(callbacks[i], Array.prototype.slice.call(arguments, 1))
                            }
                        }
                        return this
                    }
                }]);
                return EventsDispatcher
            }();
            exports["default"] = EventsDispatcher;
            module.exports = exports["default"]
        }, {}],
        8: [function(require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                }
            }
            var _utilJs = require("./util.js");
            var _utilJs2 = _interopRequireDefault(_utilJs);
            var _logJs = require("./log.js");
            var _logJs2 = _interopRequireDefault(_logJs);
            var _punycode = require("punycode");
            var _punycode2 = _interopRequireDefault(_punycode);
            var logger = _logJs2["default"]._getLogger("irc");
            var TMI_MESSAGE_TYPES = {
                ROOMBAN: true,
                ROOMCHANGED: true,
                ROOMDELETED: true,
                ROOMINVITE: true
            };
            var parseEmotesTag = function parseEmotesTag(value) {
                var parsedEmotes = {};
                if (value === "") {
                    return parsedEmotes
                }
                var emotes = value.split("/");
                for (var i = 0; i < emotes.length; ++i) {
                    try {
                        var emoteParts = emotes[i].split(":");
                        if (emoteParts.length != 2) {
                            throw "invalid emotes"
                        }
                        var emoteIndices = [];
                        var emoteIndiceParts = emoteParts[1].split(",");
                        for (var j = 0; j < emoteIndiceParts.length; ++j) {
                            var startEnd = emoteIndiceParts[j].split("-");
                            if (startEnd.length != 2) {
                                throw "invalid emotes"
                            }
                            var start = parseInt(startEnd[0]),
                                end = parseInt(startEnd[1]);
                            if (isNaN(start) || isNaN(end)) {
                                throw "invalid emotes"
                            }
                            emoteIndices.push([start, end])
                        }
                        if (emoteIndices.length > 0) {
                            var emoteId = emoteParts[0];
                            parsedEmotes[emoteId] = emoteIndices
                        }
                    } catch (err) {
                        logger.warning("Invalid emotes tag: ", emotes[i], ". Ignoring.")
                    }
                }
                return parsedEmotes
            };
            var convertEmoteIndicesToUCS2 = function convertEmoteIndicesToUCS2(message, emotes) {
                emotes = emotes || {};
                var ucs2Offset = 0;
                var offsetByUTF8Index = [];
                var decoded = _punycode2["default"].ucs2.decode(message);
                for (var i = 0; i < decoded.length; i++) {
                    offsetByUTF8Index.push(ucs2Offset);
                    if (decoded[i] > 65535) {
                        ucs2Offset += 1
                    }
                }
                var ucs2Emotes = {};
                for (var emote in emotes) {
                    if (!emotes.hasOwnProperty(emote)) {
                        continue
                    }
                    ucs2Emotes[emote] = [];
                    var indices = emotes[emote];
                    for (i = 0; i < indices.length; i++) {
                        var start = indices[i][0];
                        var end = indices[i][1];
                        ucs2Emotes[emote].push([start + offsetByUTF8Index[start], end + offsetByUTF8Index[end]])
                    }
                }
                return ucs2Emotes
            };
            var parseTwitchTag = function parseTwitchTag(tag, value) {
                switch (tag) {
                    case "emotes":
                        return parseEmotesTag(value);
                    case "sent-ts":
                    case "tmi-sent-ts":
                        return value;
                    case "subscriber":
                    case "mod":
                    case "turbo":
                    case "r9k":
                    case "subs-only":
                        return value === "1" ? true : false;
                    case "slow":
                        return +value;
                    default:
                        try {
                            var unescaped = _utilJs2["default"].unescapeTagValue(value);
                            return unescaped
                        } catch (err) {
                            logger.warning("Improperly escaped tag: ", tag, "=", value, ". Setting to empty string.");
                            return ""
                        }
                }
            };
            var parseTwitchTags = function parseTwitchTags(tagsString) {
                var tags = {};
                var keyValues = tagsString.split(";");
                for (var i = 0; i < keyValues.length; ++i) {
                    var kv = keyValues[i].split("=");
                    if (kv.length === 2) {
                        tags[kv[0]] = parseTwitchTag(kv[0], kv[1])
                    } else {
                        logger.warning("Unexpected tag: " + keyValues[i] + ". Ignoring.")
                    }
                }
                return tags
            };
            var parseMessageParts = function parseMessageParts(msgString) {
                msgString = $.trim(msgString);
                var parsedMsg = {
                    tags: {},
                    prefix: null,
                    command: null,
                    params: null,
                    trailing: null
                };
                var tagsEnd = -1;
                if (msgString.charAt(0) === "@") {
                    tagsEnd = msgString.indexOf(" ");
                    parsedMsg.tags = parseTwitchTags(msgString.substr(1, tagsEnd - 1))
                }
                var prefixStart = tagsEnd + 1,
                    prefixEnd = -1;
                if (msgString.charAt(prefixStart) === ":") {
                    prefixEnd = msgString.indexOf(" ", prefixStart);
                    parsedMsg.prefix = msgString.substr(prefixStart + 1, prefixEnd - (prefixStart + 1))
                }
                var trailingStart = msgString.indexOf(" :", prefixStart);
                if (trailingStart >= 0) {
                    parsedMsg.trailing = msgString.substr(trailingStart + 2)
                } else {
                    trailingStart = msgString.length
                }
                var actionMatch = (parsedMsg.trailing || "").match(/^\u0001ACTION ([^\u0001]+)\u0001$/);
                if (actionMatch) {
                    parsedMsg.style = "action";
                    parsedMsg.action = actionMatch[1]
                }
                var commandAndParams = msgString.substr(prefixEnd + 1, trailingStart - prefixEnd - 1).split(" ");
                parsedMsg.command = commandAndParams[0];
                if (commandAndParams.length > 1) {
                    parsedMsg.params = commandAndParams.slice(1)
                }
                return parsedMsg
            };
            var parseSender = function parseSender(msgParts) {
                if (!msgParts.prefix) {
                    return null
                }
                var senderEnd = msgParts.prefix.indexOf("!");
                if (senderEnd >= 0) {
                    return msgParts.prefix.substr(0, senderEnd)
                }
                var sender = msgParts.prefix;
                if (sender === "tmi.twitch.tv" && msgParts.tags && msgParts.tags.login) {
                    sender = msgParts.tags.login
                }
                return sender
            };
            var isValidUCS2 = function isValidUCS2(message) {
                return message.length == _punycode2["default"].ucs2.decode(message).length
            };
            exports["default"] = {
                channel: function channel(name) {
                    return "#" + name
                },
                isChannel: function isChannel(target) {
                    return target && target.charAt(0) === "#"
                },
                constructTags: function constructTags(tags) {
                    var tagString = "";
                    for (var k in tags) {
                        if (!tags.hasOwnProperty(k)) {
                            continue
                        }
                        tagString += ";" + k + "=" + _utilJs2["default"].escapeTagValue(tags[k])
                    }
                    return tagString.substring(1)
                },
                parseMessage: function parseMessage(msgString) {
                    try {
                        var msgParts = parseMessageParts(msgString),
                            sender = parseSender(msgParts);
                        var parsedMsg = $.extend({
                            sender: sender
                        }, msgParts);
                        if (sender === "jtv") {
                            parsedMsg.style = "admin"
                        } else if (sender === "twitchnotify") {
                            parsedMsg.style = "notification"
                        }
                        var merge = function merge(obj) {
                            return $.extend(obj, parsedMsg)
                        };
                        switch (msgParts.command) {
                            case "JOIN":
                                parsedMsg = merge({
                                    target: msgParts.params[0]
                                });
                                break;
                            case "HOSTTARGET":
                                var hostParams = msgParts.trailing.split(" ", 2);
                                var numViewers = parseInt(hostParams[1], 10) || null;
                                var user = hostParams[0];
                                parsedMsg = merge({
                                    target: msgParts.params[0],
                                    hostTarget: user === "-" ? null : user,
                                    numViewers: numViewers,
                                    recentlyJoined: numViewers === null
                                });
                                break;
                            case "CLEARCHAT":
                                parsedMsg = merge({
                                    target: msgParts.params[0],
                                    user: msgParts.trailing
                                });
                                break;
                            case "PART":
                                parsedMsg = merge({
                                    target: msgParts.params[0]
                                });
                                break;
                            case "USERNOTICE":
                            case "PRIVMSG":
                                parsedMsg = merge({
                                    target: msgParts.params[0],
                                    message: msgParts.action || msgParts.trailing
                                });
                                if (parsedMsg.tags.emotes) {
                                    parsedMsg.tags.emotes = convertEmoteIndicesToUCS2(parsedMsg.message, parsedMsg.tags.emotes)
                                }
                                break;
                            case "GLOBALUSERSTATE":
                                break;
                            case "USERSTATE":
                                parsedMsg = merge({
                                    target: msgParts.params[0]
                                });
                                break;
                            case "PING":
                            case "001":
                            case "002":
                            case "003":
                            case "004":
                            case "375":
                            case "372":
                            case "376":
                            case "CAP":
                            case "353":
                            case "366":
                                break;
                            case "RECONNECT":
                                break;
                            case "NOTICE":
                                parsedMsg = merge({
                                    target: msgParts.params[0],
                                    message: msgParts.trailing
                                });
                                break;
                            case "WHISPER":
                                parsedMsg = merge({
                                    to: msgParts.params[0].toLowerCase(),
                                    message: msgParts.trailing
                                });
                                if (!isValidUCS2(parsedMsg.message)) {
                                    throw "Invalid UCS2 characters."
                                }
                                break;
                            case "ROOMSTATE":
                                parsedMsg = merge({
                                    target: msgParts.params[0]
                                });
                                break;
                            default:
                                logger.warning("Could not parse IRC message: " + msgParts.command + ".");
                                break
                        }
                        return parsedMsg
                    } catch (e) {
                        logger.error('Failed parsing IRC message "' + msgString + "'.");
                        throw e
                    }
                },
                parseTmiPrivmsg: function parseTmiPrivmsg(msg) {
                    var msgString = msg.message;
                    var tmiMsg = {
                        tags: msg.tags,
                        style: msg.style,
                        target: msg.target
                    };
                    var parts = msgString.split(" ", 3);
                    var type = parts[0];
                    var user = parts[1];
                    var payload = $.trim(msgString.substr((type || "").length + (user || "").length + 1));
                    if (TMI_MESSAGE_TYPES.hasOwnProperty(type)) {
                        var payloadConverter = null;
                        switch (type) {
                            case "ROOMINVITE":
                                payloadConverter = function(payload) {
                                    return {
                                        by: payload.split(" ", 1)[0]
                                    }
                                };
                                break;
                            default:
                                payloadConverter = String;
                                break
                        }
                        return $.extend(tmiMsg, {
                            type: type,
                            user: user,
                            payload: payloadConverter(payload)
                        })
                    } else {
                        return $.extend(tmiMsg, {
                            payload: msgString
                        })
                    }
                }
            };
            module.exports = exports["default"]
        }, {
            "./log.js": 9,
            "./util.js": 16,
            punycode: 2
        }],
        9: [function(require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor)
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor
                }
            }();

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                }
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function")
                }
            }
            var _utilJs = require("./util.js");
            var _utilJs2 = _interopRequireDefault(_utilJs);
            var noopLogFunc = function noopLogFunc() {};
            var _logFunc = noopLogFunc;
            var _loggers = {};
            var _logLevels = {
                DEBUG: 1,
                INFO: 2,
                WARNING: 3,
                ERROR: 4,
                CRITICAL: 5
            };
            var _currentLogLevel = _logLevels.WARNING;
            var Logger = function() {
                function Logger(opts) {
                    _classCallCheck(this, Logger);
                    this._opts = opts
                }
                _createClass(Logger, [{
                    key: "debug",
                    value: function debug(msg) {
                        if (_currentLogLevel <= _logLevels.DEBUG) {
                            this._log("DEBUG: " + msg)
                        }
                    }
                }, {
                    key: "info",
                    value: function info(msg) {
                        if (_currentLogLevel <= _logLevels.INFO) {
                            this._log("INFO: " + msg)
                        }
                    }
                }, {
                    key: "warning",
                    value: function warning(msg) {
                        if (_currentLogLevel <= _logLevels.WARNING) {
                            this._log("WARNING: " + msg)
                        }
                    }
                }, {
                    key: "error",
                    value: function error(msg) {
                        if (_currentLogLevel <= _logLevels.ERROR) {
                            this._log("ERROR: " + msg)
                        }
                    }
                }, {
                    key: "critical",
                    value: function critical(msg) {
                        if (_currentLogLevel <= _logLevels.CRITICAL) {
                            this._log("CRITICAL: " + msg)
                        }
                    }
                }, {
                    key: "_log",
                    value: function _log(msg) {
                        var logMsg = this._opts.prefix + msg;
                        if (this._opts.logFunc) {
                            this._opts.logFunc(logMsg)
                        } else {
                            _logFunc(logMsg)
                        }
                    }
                }]);
                return Logger
            }();
            var logging = {
                setLogger: function setLogger(logFunc) {
                    _logFunc = typeof logFunc === "function" ? logFunc : noopLogFunc
                },
                setLevel: function() {
                    var forcedLogLevel = (_utilJs2["default"].urlParams.tmi_log_level || "").toUpperCase();
                    if (forcedLogLevel) {
                        var forced = _logLevels[forcedLogLevel];
                        if (forced) {
                            _currentLogLevel = forced;
                            return function() {}
                        }
                    }
                    return function(logLevel) {
                        if (!logLevel) {
                            _currentLogLevel = _logLevels.WARNING
                        } else {
                            _currentLogLevel = _logLevels[logLevel.toUpperCase()] || _logLevels.WARNING
                        }
                    }
                }(),
                _getLogger: function _getLogger(name) {
                    if (!_loggers[name]) {
                        _loggers[name] = new Logger({
                            prefix: "TMI.js [" + name + "] "
                        })
                    }
                    return _loggers[name]
                },
                _noopLogger: new Logger({
                    prefix: "",
                    logFunc: noopLogFunc
                })
            };
            var console = window.console;
            if (console && console.log) {
                if (console.log.apply) {
                    logging.setLogger(function() {
                        console.log.apply(console, arguments)
                    })
                } else {
                    logging.setLogger(function() {
                        var args = [];
                        for (var i = 0; i < arguments.length; ++i) {
                            args.push(arguments[i])
                        }
                        console.log(args.join(" "))
                    })
                }
            }
            exports["default"] = logging;
            module.exports = exports["default"]
        }, {
            "./util.js": 16
        }],
        10: [function(require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                }
            }
            var _apiJs = require("./api.js");
            var _apiJs2 = _interopRequireDefault(_apiJs);
            var _eventsJs = require("./events.js");
            var _eventsJs2 = _interopRequireDefault(_eventsJs);
            var _ircJs = require("./irc.js");
            var _ircJs2 = _interopRequireDefault(_ircJs);
            var _logJs = require("./log.js");
            var _logJs2 = _interopRequireDefault(_logJs);
            var _usersJs = require("./users.js");
            var _usersJs2 = _interopRequireDefault(_usersJs);
            var _utilJs = require("./util.js");
            var _utilJs2 = _interopRequireDefault(_utilJs);
            var logger = _logJs2["default"]._getLogger("room");
            var RECONNECT_TIMEOUT = _utilJs2["default"].time.seconds(10);
            var MAX_JOIN_ATTEMPTS = 3;
            var ROOM_CONN_EVENTS = {
                "connection:opened": true,
                "connection:retry": true,
                "connection:failed": true,
                entered: true,
                joined: true,
                "enter:retry": true,
                "join:retry": true,
                "enter:failed": true,
                "join:failed": true,
                exited: true,
                "_room_conn:enter": true,
                "_room_conn:exit": true
            };
            var RoomConnection = function RoomConnection(opts) {
                this.ircChannel = _ircJs2["default"].channel(opts.name);
                this.name = opts.name;
                this._hasJoinedIrcChannel = false;
                this.room = opts.room;
                this._session = opts.session;
                this._resetActiveState();
                this._connection = opts.connection;
                this._connection._addRoomConn(this);
                this._bindConn(this._connection)
            };
            RoomConnection.prototype.on = function(name, callback, context) {
                var thisArg = ROOM_CONN_EVENTS[name] ? this : this._connection;
                _eventsJs2["default"].prototype.on.call(thisArg, name, callback, context)
            };
            RoomConnection.prototype.off = function(name, callback, context) {
                var thisArg = ROOM_CONN_EVENTS[name] ? this : this._connection;
                _eventsJs2["default"].prototype.off.call(thisArg, name, callback, context)
            };
            RoomConnection.prototype._trigger = function(name) {
                if (!ROOM_CONN_EVENTS[name]) throw new Error("Add to ROOM_CONN_EVENTS before triggering");
                _eventsJs2["default"].prototype._trigger.apply(this, arguments);
                if (this.room) {
                    _eventsJs2["default"].prototype._trigger.apply(this.room, arguments)
                }
            };
            RoomConnection.prototype.enter = function() {
                this._trigger("_room_conn:enter");
                if (!this.isActive) {
                    this.isActive = true;
                    this._enterTracker.startBenchmark("timing_room_enter");
                    if (this._hasJoinedIrcChannel) {
                        logger.info("Attempted to enter room " + this.name + " but room has already been " + "entered. Ignoring.")
                    } else {
                        this._joinIrcChannel()
                    }
                } else {
                    logger.warning("Attempted to enter room " + this.name + " again. Ignoring.")
                }
            };
            RoomConnection.prototype.exit = function() {
                this._trigger("_room_conn:exit");
                if (this.isActive) {
                    this._resetActiveState();
                    logger.info("Leaving room " + this.name + ".");
                    this._leaveIrcChannel()
                } else {
                    logger.warning("Attempted to leave room " + this.name + " which has not attempted to join. Ignoring.")
                }
            };
            RoomConnection.prototype._joinIrcChannel = function() {
                if (!this._isAllowedToJoin()) {
                    logger.warning("Attempted to enter room " + this.name + " but have already failed " + MAX_JOIN_ATTEMPTS + " attempts to enter. Ignoring.");
                    return
                }
                this._enterTracker.set("conn_opened", !this._connection.isActive);
                if (!this._connection.isActive) {
                    this._connection.open()
                }
                if (this._connection.isOpen) {
                    if (this._isWaitingToRetryJoin()) {
                        logger.info("Attempted to enter room " + this.name + " but room is already attempting " + "to enter. Ignoring.")
                    } else {
                        logger.info("Attempting to enter room " + this.name + ".");
                        this._attemptJoinIrcChannel()
                    }
                } else {
                    this._enterTracker.startBenchmark("timing_conn_open_wait")
                }
            };
            RoomConnection.prototype._attemptJoinIrcChannel = function() {
                this._joinTimeout = setTimeout(_utilJs2["default"].callback(this._onJoinTimeout, this), _utilJs2["default"].time.seconds(10));
                this._numJoinAttempts += 1;
                this._connection._send("JOIN " + this.ircChannel);
                this._enterTracker.startBenchmark("timing_irc_join_cmd")
            };
            RoomConnection.prototype._onConnOpened = function() {
                if (this.isActive) {
                    logger.info("Connection connected. Attempting to enter room " + this.name + ".");
                    this._enterTracker.endBenchmark("timing_conn_open_wait");
                    this._attemptJoinIrcChannel()
                }
                this._trigger("connection:opened")
            };
            RoomConnection.prototype._onConnOpenRetry = function(info) {
                this._hasJoinedIrcChannel = false;
                if (this._isWaitingToRetryJoin()) {
                    this._numJoinAttempts -= 1
                }
                this._clearJoinTimeouts();
                this._enterTracker.increment("conn_retry_count", 1);
                this._trigger("connection:retry", info)
            };
            RoomConnection.prototype._onConnOpenFailed = function() {
                this._hasJoinedIrcChannel = false;
                if (this._isWaitingToRetryJoin()) {
                    this._numJoinAttempts -= 1
                }
                this._clearJoinTimeouts();
                this._trigger("connection:failed");
                if (this.isActive) {
                    this._enterFailed("conn_failure")
                }
            };
            RoomConnection.prototype._leaveIrcChannel = function() {
                this._hasJoinedIrcChannel = false;
                if (this._connection) {
                    this._connection._send("PART " + this.ircChannel)
                }
            };
            RoomConnection.prototype._resetActiveState = function() {
                this.isActive = false;
                this._clearJoinTimeouts();
                this._numJoinAttempts = 0;
                this._hasEntered = false;
                this._hasEnterFailed = false;
                this._enterTracker = new _utilJs2["default"].types.Tracker
            };
            RoomConnection.prototype._onIrcJoin = function(ircMsg) {
                if (this.isActive) {
                    logger.info("Successfully entered room " + this.name + ".");
                    this._numJoinAttempts = 1;
                    this._clearJoinTimeouts();
                    if (!this._hasEntered) {
                        this._hasEntered = true;
                        this._enterTracker.endBenchmark("timing_room_enter");
                        this._enterTracker.endBenchmark("timing_irc_join_cmd");
                        var trackingData = this._enterTracker.data();
                        this._trigger("entered", trackingData);
                        this._trigger("joined", trackingData)
                    }
                } else {
                    logger.warning("Entered room " + this.name + " unexpectedly. Exiting.");
                    this._leaveIrcChannel()
                }
            };
            RoomConnection.prototype._onJoinTimeout = function() {
                this._clearJoinTimeouts();
                if (this._isAllowedToJoin()) {
                    var retryDelay = _utilJs2["default"].time.seconds(Math.pow(2, this._numJoinAttempts));
                    logger.warning("Enter attempt for room " + this.name + " timed out. Attempting to enter again " + "in " + retryDelay / 1e3 + " seconds.");
                    this._joinRetryTimeout = setTimeout(_utilJs2["default"].callback(this._onJoinRetryTimeout, this), retryDelay);
                    this._trigger("enter:retry", {
                        delay: retryDelay
                    });
                    this._trigger("join:retry", {
                        delay: retryDelay
                    })
                } else {
                    logger.critical("All " + MAX_JOIN_ATTEMPTS + " attempts to enter room " + this.name + " failed. " + "No more attempts will be made.");
                    this._enterFailed("irc_join_failed")
                }
            };
            RoomConnection.prototype._enterFailed = function(reason) {
                if (!this._hasEnterFailed) {
                    logger.info("Failed to enter room due to " + reason);
                    this._hasEnterFailed = true;
                    this._enterTracker.set(reason, true);
                    var trackingData = this._enterTracker.data();
                    this._trigger("enter:failed", trackingData);
                    this._trigger("join:failed", trackingData)
                }
            };
            RoomConnection.prototype._bindConn = function(conn) {
                if (!conn) return;
                conn.on("message", this._onIrcMessage, this);
                conn.on("opened", this._onConnOpened, this);
                conn.on("open:retry", this._onConnOpenRetry, this);
                conn.on("open:failed", this._onConnOpenFailed, this)
            };
            RoomConnection.prototype._unbindConn = function(conn) {
                if (!conn) return;
                conn.off("message", this._onIrcMessage, this);
                conn.off("opened", this._onConnOpened, this);
                conn.off("open:retry", this._onConnOpenRetry, this);
                conn.off("open:failed", this._onConnOpenFailed, this)
            };
            RoomConnection.prototype._send = function(msg) {
                this._connection._send(msg)
            };
            RoomConnection.prototype.destroy = function() {
                this._unbindConn(this._connection)
            };
            RoomConnection.prototype._onIrcMessage = function(ircMsg) {
                if (ircMsg.target != this.ircChannel) return;
                switch (ircMsg.command) {
                    case "JOIN":
                        this._onIrcJoin(ircMsg);
                        break;
                    case "PART":
                        if (ircMsg.sender === this._session.nickname) {
                            this._resetActiveState();
                            this._connection._exitedRoomConn();
                            this._trigger("exited")
                        }
                        break;
                    default:
                        logger.info("RoomConnection " + this.name + " ignoring IRC command " + ircMsg.command + ".")
                }
            };
            RoomConnection.prototype._onJoinRetryTimeout = function() {
                this._clearJoinTimeouts();
                this._attemptJoinIrcChannel()
            };
            RoomConnection.prototype._isWaitingToRetryJoin = function() {
                return this._joinTimeout !== null || this._joinRetryTimeout !== null
            };
            RoomConnection.prototype._isAllowedToJoin = function() {
                return this._numJoinAttempts <= MAX_JOIN_ATTEMPTS
            };
            RoomConnection.prototype._clearJoinTimeouts = function() {
                clearTimeout(this._joinTimeout);
                this._joinTimeout = null;
                clearTimeout(this._joinRetryTimeout);
                this._joinRetryTimeout = null
            };
            var Room = function Room(opts) {
                this._opts = opts;
                this.ircChannel = _ircJs2["default"].channel(opts.name);
                if (!opts.session) throw new Error("Required option for Room constructor: session");
                this.session = opts.session;
                this.displayName = opts.displayName;
                this.name = opts.name;
                this.isGroupRoom = Room.isGroupRoomName(this.name);
                this.ownerId = opts.ownerId;
                this.publicInvitesEnabled = opts.publicInvitesEnabled;
                this._chattersListUrl = opts.chattersListUrl;
                this._roomUserLabels = new _utilJs2["default"].types.SetStore;
                this.on("connection:retry", this._onConnRetry, this);
                this.on("entered", this._onEntered, this);
                this._setRoomConn(new RoomConnection({
                    connection: opts.connection,
                    name: this.name,
                    session: this.session
                }))
            };
            Room.prototype = new _eventsJs2["default"];
            Room.prototype.destroy = function() {
                this._roomConn.destroy()
            };
            Room.prototype._getConnection = function() {
                return this._roomConn._connection
            };
            Room.isGroupRoomName = function(name) {
                return name.charAt(0) === "_"
            };
            Room.prototype.enter = function() {
                this._roomConn.enter()
            };
            Room.prototype.exit = function() {
                this._roomConn.exit()
            };
            Room.prototype.invite = function(username) {
                var deferred = $.Deferred();
                this.session._depotApi.post("/room_memberships", {
                    irc_channel: this.name,
                    username: username
                }).done(function() {
                    deferred.resolve()
                }).fail(_apiJs2["default"].chatdepot.fail(deferred));
                return deferred
            };
            Room.prototype.acceptInvite = function() {
                var deferred = $.Deferred(),
                    self = this;
                this.session._depotApi.put("/room_memberships/" + this.name + "/" + this.userId, {
                    is_confirmed: 1
                }).done(function() {
                    self.acceptedInvite = true;
                    deferred.resolve()
                }).fail(_apiJs2["default"].chatdepot.fail(deferred));
                return deferred
            };
            Room.prototype.rejectInvite = function() {
                var deferred = $.Deferred(),
                    self = this;
                this.session._depotApi.del("/room_memberships/" + this.name + "/" + this.userId).done(function() {
                    delete self.session._invited[self.name];
                    self.session._rememberDeleted(self.name);
                    self.acceptedInvite = false;
                    deferred.resolve();
                    self.session._onListRoomsChanged()
                }).fail(_apiJs2["default"].chatdepot.fail(deferred));
                return deferred
            };
            Room.prototype.setPublicInvitesEnabled = function(enabled) {
                var deferred = $.Deferred(),
                    self = this;
                this.session._depotApi.put("/rooms/" + this.name, {
                    display_name: self.displayName,
                    public_invites_enabled: enabled ? "1" : "0"
                }).done(function() {
                    self.publicInvitesEnabled = enabled;
                    deferred.resolve()
                }).fail(_apiJs2["default"].chatdepot.fail(deferred));
                return deferred
            };
            Room.prototype.del = function() {
                var deferred = $.Deferred(),
                    self = this;
                self.session._depotApi.del("/rooms/" + self.name).done(function() {
                    self.session._rememberDeleted(self.name);
                    setTimeout(_utilJs2["default"].callback(self.session._onListRoomsChanged, self.session), 0);
                    deferred.resolve()
                }).fail(_apiJs2["default"].chatdepot.fail(deferred));
                return deferred
            };
            Room.prototype.list = function() {
                if (this._chattersListUrl) {
                    return $.ajax({
                        url: this._chattersListUrl,
                        cache: false,
                        dataType: "jsonp",
                        timeout: 6e3
                    })
                } else {
                    logger.warning("Attempted to list chatters but chatters list URL hasn't been set. Ignoring.");
                    var deferred = $.Deferred();
                    deferred.reject();
                    return deferred
                }
            };
            Room.prototype.hosts = function(options) {
                options = options || {};
                var deferred = $.Deferred(),
                    self = this;
                if (!this.isGroupRoom) {
                    this.session._tmiApi.get("/hosts", {
                        include_logins: options.useDeprecatedResponseFormat ? 1 : undefined,
                        target: this.ownerId
                    }).done(function(response) {
                        if (options.useDeprecatedResponseFormat) {
                            deferred.resolve({
                                hosts: $.map(response.hosts, function(host) {
                                    return {
                                        host: host.host_login
                                    }
                                })
                            })
                        } else {
                            deferred.resolve($.map(response.hosts, function(host) {
                                return host.host_id
                            }))
                        }
                    }).fail(_apiJs2["default"].tmi.fail(deferred))
                } else {
                    logger.warning("Attempted to get hosts for group room.");
                    deferred.reject()
                }
                return deferred
            };
            Room.prototype.hostTarget = function(options) {
                options = options || {};
                var deferred = $.Deferred(),
                    self = this;
                if (!this.isGroupRoom) {
                    this.session._tmiApi.get("/hosts", {
                        include_logins: options.useDeprecatedResponseFormat ? 1 : undefined,
                        host: this.ownerId
                    }, {
                        cache: false
                    }).done(function(response) {
                        if (options.useDeprecatedResponseFormat) {
                            deferred.resolve({
                                host_target: response.hosts[0].target_login || ""
                            })
                        } else {
                            deferred.resolve(response.hosts[0].target_id)
                        }
                    }).fail(_apiJs2["default"].tmi.fail(deferred))
                } else {
                    logger.warning("Attempted to fetch host target but group rooms cannot host. Ignoring.");
                    deferred.reject()
                }
                return deferred
            };
            Room.prototype.rename = function(newName) {
                var deferred = $.Deferred();
                this.session._depotApi.put("/rooms", {
                    irc_channel: this.name,
                    display_name: newName
                }).done(function() {
                    deferred.resolve()
                }).fail(_apiJs2["default"].chatdepot.fail(deferred));
                return deferred
            };
            Room.prototype.getEmotes = function(username) {
                if (this.session) {
                    return this.session._users.getEmotes(username)
                }
                return null
            };
            Room.prototype.getLabels = function(username) {
                var specials = this.session._users.getSpecials(username);
                return _utilJs2["default"].array.join(this.name === username ? ["owner"] : [], this._roomUserLabels.get(username), specials)
            };
            Room.prototype.sendMessage = function(msg) {
                if (!this._roomConn) {
                    logger.warning('Attempted to send "' + msg + '" prior to configuring room connection. Ignoring.');
                    return
                }
                var command = msg.split(" ", 1)[0],
                    action = command === "/me",
                    self = this,
                    target, message, tagString = _ircJs2["default"].constructTags({
                        "sent-ts": Date.now()
                    });
                message = action ? msg.substr(4) : msg;
                var msgObject = {
                    from: self.session.nickname,
                    message: message,
                    style: action ? "action" : undefined,
                    date: new Date,
                    tags: {
                        emotes: self.session._emotesParser.parseEmotesTag(message),
                        "display-name": self.session.getDisplayName(self.session.nickname)
                    },
                    labels: self.getLabels(self.session.nickname)
                };
                self._trigger("message-sent", msgObject);
                var sendMessage = function sendMessage() {
                    self._trigger("message", msgObject);
                    self._roomConn._send("@" + tagString + " " + "PRIVMSG" + " " + self.ircChannel + " :" + msg)
                };
                var ignoreUser = function ignoreUser() {
                    target = msg.split(" ")[1];
                    if (target) {
                        self.ignoreUser(target)
                    }
                    return
                };
                var unignoreUser = function unignoreUser() {
                    target = msg.split(" ")[1];
                    if (target) {
                        self.unignoreUser(target)
                    }
                };
                var runCommercial = function runCommercial() {
                    var time = 0;
                    var split = msg.split(" ");
                    if (split.length > 1) {
                        time = split[1]
                    }
                    self.runCommercial(time)
                };
                var sendCommand = function sendCommand() {
                    self._roomConn._send("PRIVMSG " + self.ircChannel + " :" + msg)
                };
                command = command.toLowerCase();
                if (command === "/me" || command.charAt(0) !== "/") {
                    sendMessage()
                } else if (command === "/ignore") {
                    ignoreUser()
                } else if (command === "/unignore") {
                    unignoreUser()
                } else if (command === "/commercial") {
                    runCommercial()
                } else {
                    sendCommand()
                }
            };
            Room.prototype.runCommercial = function(time) {
                var self = this;
                time = parseInt(time);
                if (!isNaN(time)) {
                    this.session.runCommercial(this.ircChannel.substring(1), time).done(function() {
                        self._showAdminMessage("Initiating commercial break. Please keep in mind that your stream is still live and not everyone will get a commercial!")
                    }).fail(function() {
                        self._showAdminMessage("Failed to start commercial.")
                    })
                } else {
                    self._showAdminMessage("That's an invalid commercial length!")
                }
            };
            Room.prototype.ignoreUser = function(username, reason) {
                var self = this;
                this.session.ignoreUser(username, reason).done(function() {
                    self._showAdminMessage("User successfully ignored")
                }).fail(function() {
                    self._showAdminMessage("There was a problem ignoring that user")
                })
            };
            Room.prototype.unignoreUser = function(username) {
                var self = this;
                this.session.unignoreUser(username).done(function() {
                    self._showAdminMessage("User successfully unignored")
                }).fail(function() {
                    self._showAdminMessage("There was a problem unignoring that user")
                })
            };
            Room.prototype.clearChat = function(username) {
                if (username) {
                    this.sendMessage("/clear " + username)
                } else {
                    this.sendMessage("/clear")
                }
            };
            Room.prototype.showCommercial = function(seconds) {
                this.sendMessage("/commercial " + seconds)
            };
            Room.prototype.banUser = function(username) {
                this.sendMessage("/ban " + username)
            };
            Room.prototype.unbanUser = function(username) {
                this.sendMessage("/unban " + username)
            };
            Room.prototype.modUser = function(username) {
                this.sendMessage("/mod " + username)
            };
            Room.prototype.unmodUser = function(username) {
                this.sendMessage("/unmod " + username)
            };
            Room.prototype.timeoutUser = function(username) {
                this.sendMessage("/timeout " + username)
            };
            Room.prototype.startSlowMode = function(seconds) {
                seconds = seconds || "";
                this.sendMessage("/slow " + seconds);
            };
            Room.prototype.stopSlowMode = function() {
                this.sendMessage("/slowoff")
            };
            Room.prototype.startSubscribersMode = function() {
                this.sendMessage("/subscribers")
            };
            Room.prototype.stopSubscribersMode = function() {
                this.sendMessage("/subscribersoff")
            };
            Room.prototype._setRoomConn = function(roomConn) {
                if (this._roomConn) {
                    this._unbindRoomConn(this._roomConn);
                    this._roomConn.room = undefined
                }
                this._bindRoomConn(roomConn);
                roomConn.room = this;
                this._roomConn = roomConn
            };
            Room.prototype._showAdminMessage = function(message) {
                this._trigger("message", {
                    style: "admin",
                    from: "jtv",
                    message: message,
                    date: new Date
                })
            };
            Room.prototype._hasModPrivileges = function() {
                var labels = this.getLabels(this.session.nickname);
                return labels.indexOf("owner") >= 0 || labels.indexOf("staff") >= 0 || labels.indexOf("admin") >= 0 || labels.indexOf("global_mod") >= 0 || labels.indexOf("mod") >= 0
            };
            Room.prototype._bindRoomConn = function(roomConn) {
                if (!roomConn) return;
                roomConn.on("clearchat", this._onClearChat, this);
                roomConn.on("flashtimeout", this._onFlashTimedOut, this);
                roomConn.on("hosttarget", this._onHostTargetUpdate, this);
                roomConn.on("message", this._onIrcMessage, this);
                roomConn.on("privmsg", this._onIrcPrivmsg, this);
                roomConn.on("usernotice", this._onUserNotice, this);
                roomConn.on("reconnecting", this._onReconnecting, this);
                roomConn.on("roomban", this._onRoomBan, this);
                roomConn.on("roomchanged", this._onRoomChanged, this);
                roomConn.on("roomdeleted", this._onRoomDeleted, this);
                roomConn.on("specialuser", this._onUserSpecialAdded, this);
                roomConn.on("userstate", this._onUserStateUpdated, this);
                roomConn.on("notice", this._onNotice, this);
                roomConn.on("roomstate", this._onRoomState, this)
            };
            Room.prototype._unbindRoomConn = function(roomConn) {
                if (!roomConn) return;
                roomConn.off("clearchat", this._onClearChat, this);
                roomConn.off("flashtimeout", this._onFlashTimedOut, this);
                roomConn.off("hosttarget", this._onHostTargetUpdate, this);
                roomConn.off("message", this._onIrcMessage, this);
                roomConn.off("privmsg", this._onIrcPrivmsg, this);
                roomConn.off("usernotice", this._onUserNotice, this);
                roomConn.off("reconnecting", this._onReconnecting, this);
                roomConn.off("roomban", this._onRoomBan, this);
                roomConn.off("roomchanged", this._onRoomChanged, this);
                roomConn.off("roomdeleted", this._onRoomDeleted, this);
                roomConn.off("specialuser", this._onUserSpecialAdded, this);
                roomConn.off("userstate", this._onUserStateUpdated, this);
                roomConn.off("notice", this._onNotice, this);
                roomConn.off("roomstate", this._onRoomState, this)
            };
            Room.prototype._onConnRetry = function(info) {
                this._showAdminMessage("Sorry, we were unable to connect to chat. Reconnecting in " + info.delay / 1e3 + " seconds.")
            };
            Room.prototype._onFlashTimedOut = function() {
                this._trigger("flashtimedout")
            };
            Room.prototype._onNotice = function(ircMsg) {
                if (ircMsg.target !== this.ircChannel && ircMsg.target != "#jtv") return;
                this._trigger("notice", {
                    msgId: ircMsg.tags["msg-id"],
                    message: ircMsg.message
                })
            };
            Room.prototype._onHostTargetUpdate = function(ircChannel, hostTarget, numViewers, recentlyJoined) {
                if (ircChannel != this.ircChannel) return;
                var infoMsg = "Received host target update for " + ircChannel + ". ";
                if (hostTarget !== null) {
                    infoMsg += "Adding host target: " + hostTarget
                } else {
                    infoMsg += "Removing host target."
                }
                logger.info(infoMsg);
                this._trigger("host_target", {
                    hostTarget: hostTarget,
                    numViewers: numViewers,
                    recentlyJoined: recentlyJoined
                })
            };
            Room.prototype._onIrcMessage = function(ircMsg) {
                if (ircMsg.target != this.ircChannel) return;
                switch (ircMsg.command) {
                    case "PRIVMSG":
                        this._onIrcPrivmsg(ircMsg);
                        break;
                    default:
                        logger.info("Room " + this.name + " ignoring IRC command " + ircMsg.command + ".")
                }
            };
            Room.prototype._onIrcMessageDeduped = function(ircMsg) {
                if (ircMsg.sender === this.session.nickname) return;
                if (!this._dedupeSeen) this._dedupeSeen = {};
                var id = ircMsg.sender + "|" + ircMsg.message;
                if (!this._dedupeSeen[id]) {
                    this._dedupeSeen[id] = true;
                    this._onIrcMessage(ircMsg)
                }
            };
            Room.prototype._onIrcPrivmsg = function(ircMsg) {
                if (_ircJs2["default"].isChannel(ircMsg.target) && ircMsg.target != this.ircChannel) return;
                switch (ircMsg.style) {
                    case "admin":
                        if (ircMsg.message.match(/^This room is now in slow mode. You may send messages every \d+ seconds$/)) {
                            this._trigger("slow")
                        } else if (ircMsg.message.match(/^This room is no longer in slow mode.$/)) {
                            this._trigger("slowoff")
                        }
                        break;
                    case "notification":
                    case "action":
                        break;
                    default:
                        this._updateUserStateAndSession(ircMsg.sender, ircMsg.tags);
                        break
                }
                if (this._shouldShowChatMessage(ircMsg.sender)) {
                    this._trigger("message", {
                        style: ircMsg.style,
                        from: ircMsg.sender,
                        message: ircMsg.message,
                        tags: ircMsg.tags,
                        date: new Date
                    })
                } else {
                    logger.warning("Ignored message from " + ircMsg.sender)
                }
            };
            Room.prototype._updateUserStateAndSession = function(sender, tags) {
                this._updateUserState(sender, tags);
                this.session._updateUserState(sender, tags)
            };
            Room.prototype._onUserNotice = function(ircMsg) {
                if (ircMsg.target != this.ircChannel) {
                    return
                }
                this._updateUserStateAndSession(ircMsg.sender, ircMsg.tags);
                if (this._shouldShowChatMessage(ircMsg.sender)) {
                    this._trigger("usernotice", {
                        style: ircMsg.style,
                        from: ircMsg.sender,
                        message: ircMsg.message,
                        tags: ircMsg.tags,
                        date: new Date
                    })
                } else {
                    logger.warning("Ignored message from " + ircMsg.sender)
                }
            };
            Room.prototype._shouldShowChatMessage = function(sender) {
                return this._hasModPrivileges() || !this.session.isIgnored(sender)
            };
            Room.prototype._onRoomState = function(ircMsg) {
                if (ircMsg.target != this.ircChannel) return;
                this._trigger("roomstate", {
                    tags: ircMsg.tags
                })
            };
            Room.prototype._onReconnecting = function(newConn) {
                logger.info("Room" + this.name + "reconnecting");
                var self = this;
                var oldRoomConn = this._roomConn;
                var newRoomConn = new RoomConnection({
                    connection: newConn,
                    name: self.name,
                    session: self.session
                });
                if (!oldRoomConn.isActive) {
                    self._setRoomConn(newRoomConn);
                    return
                }
                var syncEnter = function syncEnter() {
                    newRoomConn.enter()
                };
                var syncExit = function syncExit() {
                    newRoomConn.exit()
                };
                self.on("_room_conn:enter", syncEnter);
                self.on("_room_conn:exit", syncExit);
                var unbind = function unbind() {
                    self.off("_room_conn:enter", syncEnter);
                    self.off("_room_conn:exit", syncExit);
                    newRoomConn.off("exited", onExited);
                    newRoomConn.off("entered", onEntered);
                    newRoomConn.off("enter:failed", onEnterFailed)
                };
                var onExited = function onExited() {
                    unbind();
                    self._setRoomConn(newRoomConn)
                };
                newRoomConn.on("exited", onExited);
                var onEntered = function onEntered() {
                    unbind();
                    setTimeout(function() {
                        self.switchRoomConn(newRoomConn)
                    }, 0)
                };
                newRoomConn.on("entered", onEntered);
                var onEnterFailed = function onEnterFailed(trackingData) {
                    unbind();
                    logger.critical("Enter failed during reconnect.");
                    self._setRoomConn(newRoomConn);
                    oldRoomConn.exit();
                    self._trigger("exited")
                };
                newRoomConn.on("enter:failed", onEnterFailed);
                newRoomConn.enter()
            };
            Room.prototype.switchRoomConn = function(newRoomConn) {
                var self = this;
                var oldRoomConn = self._roomConn;
                oldRoomConn.room = undefined;
                newRoomConn.room = self;
                oldRoomConn.off("message", self._onIrcMessage, self);
                oldRoomConn.on("message", self._onIrcMessageDeduped, self);
                newRoomConn.on("message", self._onIrcMessageDeduped, self);
                setTimeout(function() {
                    oldRoomConn.exit();
                    setTimeout(function() {
                        self._setRoomConn(newRoomConn);
                        oldRoomConn.on("message", self._onIrcMessage, self);
                        oldRoomConn.off("message", self._onIrcMessageDeduped, self);
                        newRoomConn.off("message", self._onIrcMessageDeduped, self);
                        self._dedupeSeen = undefined
                    }, RECONNECT_TIMEOUT / 2)
                }, RECONNECT_TIMEOUT / 2)
            };
            Room.prototype._onRoomBan = function(ircChannel) {
                if (ircChannel != this.ircChannel) return;
                this.exit();
                this._trigger("banned")
            };
            Room.prototype._onRoomChanged = function(ircChannel) {
                if (ircChannel != this.ircChannel) return;
                this._isDirty = true;
                this._trigger("changed")
            };
            Room.prototype._onRoomDeleted = function(ircChannel) {
                if (ircChannel != this.ircChannel) return;
                this.exit();
                this._trigger("deleted")
            };
            Room.prototype._onUserSpecialAdded = function(username, special) {
                if (special === "subscriber") {
                    this._roomUserLabels.add(username, special)
                }
                this._onLabelsChanged(username)
            };
            Room.prototype._onUserStateUpdated = function(msg) {
                if (msg.target !== this.ircChannel) return;
                this._updateUserState(this.session.nickname, msg.tags)
            };
            Room.prototype._updateUserState = function(user, tags) {
                this._updateUserStateLabel(user, tags, "subscriber");
                this._updateUserStateLabel(user, tags, "mod")
            };
            Room.prototype._updateUserStateLabel = function(user, tags, label) {
                var labels = this._roomUserLabels.get(user);
                var hasStateChanged = tags[label] !== labels.indexOf(label) > -1;
                if (hasStateChanged) {
                    if (tags[label]) {
                        this._roomUserLabels.add(user, label)
                    } else {
                        this._roomUserLabels.remove(user, label)
                    }
                    this._onLabelsChanged(user)
                }
            };
            Room.prototype._onLabelsChanged = function(username) {
                this._trigger("labelschanged", username)
            };
            Room.prototype._onClearChat = function(ircChannel, username, tags) {
                if (ircChannel != this.ircChannel) return;
                this._trigger("clearchat", username, tags)
            };
            Room.prototype._onEntered = function() {
                this._showAdminMessage("Welcome to the chat room!")
            };
            exports["default"] = Room;
            module.exports = exports["default"]
        }, {
            "./api.js": 5,
            "./events.js": 7,
            "./irc.js": 8,
            "./log.js": 9,
            "./users.js": 15,
            "./util.js": 16
        }],
        11: [function(require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                }
            }
            var _apiJs = require("./api.js");
            var _apiJs2 = _interopRequireDefault(_apiJs);
            var _connJs = require("./conn.js");
            var _connJs2 = _interopRequireDefault(_connJs);
            var _eventsJs = require("./events.js");
            var _eventsJs2 = _interopRequireDefault(_eventsJs);
            var _twitchJs = require("./twitch.js");
            var _twitchJs2 = _interopRequireDefault(_twitchJs);
            var _ircJs = require("./irc.js");
            var _ircJs2 = _interopRequireDefault(_ircJs);
            var _logJs = require("./log.js");
            var _logJs2 = _interopRequireDefault(_logJs);
            var _roomJs = require("./room.js");
            var _roomJs2 = _interopRequireDefault(_roomJs);
            var _utilJs = require("./util.js");
            var _utilJs2 = _interopRequireDefault(_utilJs);
            var _usersJs = require("./users.js");
            var _usersJs2 = _interopRequireDefault(_usersJs);
            var _WebSocketJs = require("./WebSocket.js");
            var _WebSocketJs2 = _interopRequireDefault(_WebSocketJs);
            var logger = _logJs2["default"]._getLogger("session");
            var RECONNECT_TIMEOUT = _utilJs2["default"].time.seconds(20);
            var SessionManager = function SessionManager(opts) {
                this.isDestroyed = false;
                this._opts = opts;
                this.nickname = opts.nickname;
                this.userId = opts.userId;
                this._depotApi = _apiJs2["default"].chatdepot.init(opts.oauthToken);
                this._tmiApi = _apiJs2["default"].tmi.init(opts.oauthToken);
                this._twitchApi = _apiJs2["default"].twitch.init({
                    hostport: opts.apiHostport
                });
                this._emotesParser = new _twitchJs2["default"]({
                    twitchApi: this._twitchApi
                });
                this._secureWebsocketsEnabled = true;
                this._darklaunchEligible = _WebSocketJs2["default"].supported();
                var useWebSocketDarklaunch = Math.random() > .5;
                this._darklaunchConn = new _connJs2["default"]({
                    cluster: "darklaunch",
                    addrs: [{
                        host: "irc.darklaunch.us-west2.twitch.tv",
                        port: 80
                    }],
                    wsAddrs: [{
                        protocol: "wss",
                        host: "irc-ws-darklaunch.chat.twitch.tv",
                        port: 443
                    }],
                    nickname: this.nickname,
                    password: this._opts.password,
                    useWebSockets: useWebSocketDarklaunch,
                    logger: _logJs2["default"]._noopLogger
                });
                this._connections = {};
                this._ignored = {};
                this._rooms = {};
                this._invited = {};
                this._deletedRooms = {};
                this._createdRoomDeferreds = [];
                this._roomMembershipsDeferred = null;
                this._emoticonImagesResponse = null;
                this._users = new _usersJs2["default"];
                if (opts.oauthToken) {
                    this._fetchIgnored();
                    this._openGroupsConnection()
                }
                this._emotesParser.on("emotes_changed", this._onEmotesResponseReceived, this)
            };
            SessionManager.prototype = new _eventsJs2["default"];
            SessionManager.prototype.destroy = function() {
                $.each(this._rooms, function(name, room) {
                    room.exit()
                });
                $.each(this._connections, function(cluster, conn) {
                    conn.close()
                });
                this._depotApi.destroy();
                this._tmiApi.destroy();
                this._twitchApi.destroy();
                TMI._onSessionDestroyed(this);
                this.isDestroyed = true
            };
            SessionManager.prototype.createRoom = function(options) {
                var deferred = $.Deferred(),
                    self = this;
                options = options || {};
                if (!(options.ircChannel && options.displayName)) {
                    logger.error("createRoom requires name and displayName");
                    deferred.reject();
                    return deferred
                }
                self._depotApi.post("/rooms", {
                    irc_channel: options.ircChannel,
                    display_name: options.displayName
                }).done(function(response) {
                    var room = self._updateGroupRoom(response.room);
                    self._rememberCreated(room.name);
                    self._onListRoomsChanged();
                    deferred.resolve(room)
                }).fail(_apiJs2["default"].chatdepot.fail(deferred));
                return deferred
            };
            SessionManager.prototype._rememberCreated = function(roomName) {
                var deferred = $.Deferred(),
                    self = this;
                self._depotApi.get("/room_memberships/" + roomName + "/" + self.userId).done(function(membershipResponse) {
                    setTimeout(function() {
                        self._createdRoomDeferreds = $.grep(self._createdRoomDeferreds, function(createdRoomDeferred) {
                            return createdRoomDeferred !== deferred
                        })
                    }, _utilJs2["default"].time.seconds(5));
                    deferred.resolve(self._updateGroupRoomMembership(membershipResponse.membership))
                }).fail(function() {
                    deferred.reject()
                });
                self._createdRoomDeferreds.push(deferred)
            };
            SessionManager.prototype._rememberDeleted = function(name) {
                var self = this;
                self._deletedRooms[name] = true;
                setTimeout(function() {
                    delete self._deletedRooms[name]
                }, _utilJs2["default"].time.seconds(5))
            };
            SessionManager.prototype.getRoom = function(roomName) {
                var deferred = $.Deferred(),
                    self = this;
                if (_roomJs2["default"].isGroupRoomName(roomName)) {
                    var room = self._rooms[roomName];
                    if (room && !room._isDirty) {
                        deferred.resolve(room)
                    } else {
                        self._depotApi.get("/rooms/" + roomName).done(function(response) {
                            deferred.resolve(self._updateGroupRoom(response.room))
                        }).fail(_apiJs2["default"].chatdepot.fail(deferred))
                    }
                } else {
                    self._getRoomInfo(roomName).done(function(roomInfo) {
                        roomInfo.allowWebSockets = true;
                        var conn = self._getOrNewConnection(roomInfo);
                        deferred.resolve(self._updatePublicRoom({
                            name: roomName,
                            connection: conn,
                            ownerId: roomInfo.ownerId
                        }))
                    }).fail(function(msg) {
                        logger.error("Unable to get room info for " + roomName);
                        deferred.reject()
                    })
                }
                return deferred
            };
            SessionManager.prototype.listRooms = function() {
                var self = this,
                    deferred = $.Deferred();
                if (!self._opts.oauthToken) {
                    deferred.resolve([]);
                    return deferred
                }
                if (!self._roomMembershipsDeferred) {
                    setTimeout(function() {
                        self._roomMembershipsDeferred = null
                    }, _utilJs2["default"].time.seconds(30));
                    self._roomMembershipsDeferred = self._getRoomMemberships()
                }
                self._roomMembershipsDeferred.done(function(rooms) {
                    self._addCreatedRooms(rooms).done(function() {
                        rooms = $.grep(rooms, function(room) {
                            return self._deletedRooms[room.name] !== true
                        });
                        deferred.resolve(rooms)
                    }).fail(function() {})
                }).fail(function() {
                    self._roomMembershipsDeferred = null;
                    deferred.reject.apply(deferred, arguments)
                });
                return deferred
            };
            SessionManager.prototype._addCreatedRooms = function(rooms) {
                return $.when.apply($, this._createdRoomDeferreds).done(function() {
                    var createdRooms = arguments;
                    $.each(createdRooms, function(index, createdRoom) {
                        var matches = $.grep(rooms, function(room) {
                            return room.name === createdRoom.name
                        });
                        if (matches.length === 0) {
                            rooms.unshift(createdRoom)
                        }
                    })
                })
            };
            SessionManager.prototype._getRoomMemberships = function() {
                var deferred = $.Deferred(),
                    self = this;
                self._depotApi.get("/room_memberships", {}, {
                    cache: false
                }).done(function(response) {
                    var ircChannels = [],
                        ircChannel, rooms = [],
                        room;
                    $.each(response.memberships, function(index, data) {
                        room = self._updateGroupRoomMembership(data);
                        rooms.push(room);
                        ircChannel = data.room.irc_channel;
                        if (self._lastIrcChannels && self._lastIrcChannels.indexOf(ircChannel) < 0 && !room.acceptedInvite) {
                            self._onRoomInvite(ircChannel)
                        }
                        ircChannels.push(ircChannel)
                    });
                    self._lastIrcChannels = ircChannels;
                    deferred.resolve(rooms)
                }).fail(_apiJs2["default"].chatdepot.fail(deferred));
                return deferred
            };
            SessionManager.prototype.runCommercial = function(channel, time) {
                var deferred = $.Deferred(),
                    self = this;
                this._twitchApi.post("/kraken/channels/" + channel + "/commercial?length=" + time).done(function(response) {
                    deferred.resolve()
                }).fail(function(response) {
                    deferred.reject()
                });
                return deferred
            };
            SessionManager.prototype.ignoreUser = function(username, reason, isWhisper) {
                var deferred = $.Deferred(),
                    self = this;
                this._twitchApi.put("/kraken/users/" + this.nickname + "/blocks/" + username, {
                    reason: reason,
                    whisper: isWhisper
                }).done(function() {
                    self._ignored[username.toLowerCase()] = true;
                    deferred.resolve()
                }).fail(function(response) {
                    deferred.reject()
                });
                return deferred
            };
            SessionManager.prototype.isIgnored = function(username) {
                if (username) {
                    username = username.toLowerCase()
                }
                return !!this._ignored[username]
            };
            SessionManager.prototype.unignoreUser = function(username) {
                var deferred = $.Deferred(),
                    self = this;
                this._twitchApi.del("/kraken/users/" + this.nickname + "/blocks/" + username).done(function() {
                    delete self._ignored[username.toLowerCase()];
                    deferred.resolve()
                }).fail(function(response) {
                    deferred.reject()
                });
                return deferred
            };
            SessionManager.prototype.setColor = function(color) {
                var self = this;
                $.each(self._connections, function(clusterKey, conn) {
                    conn._send("PRIVMSG " + _ircJs2["default"].channel(self.nickname) + " :/color " + color)
                })
            };
            SessionManager.prototype.getColor = function(username) {
                var color = this._users.getColor(username);
                if (!color) {
                    color = _utilJs2["default"].array.pickRandom(_usersJs2["default"].COLORS);
                    this._users.setColor(username, color)
                }
                return color
            };
            SessionManager.prototype.getDisplayName = function(username) {
                return this._users.getDisplayName(username)
            };
            SessionManager.prototype.fetchDisplayName = function(username) {
                var self = this,
                    deferred = $.Deferred();
                var displayName = self._users.getDisplayName(username);
                if (displayName) {
                    deferred.resolve(displayName)
                } else {
                    self._twitchApi.get("/kraken/users/" + username).done(function(response) {
                        self._users.setDisplayName(username, response.display_name);
                        deferred.resolve(response.display_name)
                    }).fail(function() {
                        deferred.reject()
                    })
                }
                return deferred.promise()
            };
            SessionManager.prototype.isUsingWebSockets = function() {
                for (var cluster in this._connections) {
                    if (this._connections[cluster].isUsingWebSockets()) {
                        return true
                    }
                }
                return false
            };
            SessionManager.prototype.getMessageRate = function() {
                var rate = 0;
                $.each(this._connections, function(cluster, conn) {
                    rate += conn.getMessageRate()
                });
                return rate
            };
            SessionManager.prototype._getOrNewConnection = function(opts) {
                if (!this._connections.hasOwnProperty(opts.cluster) || this._connections[opts.cluster]._flashTimedOut) {
                    var addrs = opts.addrs,
                        wsAddrs = opts.wsAddrs || [],
                        forceHost = _utilJs2["default"].urlParams.tmi_host,
                        forcePort = parseInt(_utilJs2["default"].urlParams.tmi_port);
                    if (forceHost) {
                        var HOST_WHITELIST = [/^localhost$/, /\.twitch\.tv$/, /\.justin\.tv$/];
                        var rejected = true;
                        for (var index in HOST_WHITELIST) {
                            if (HOST_WHITELIST[index].test(forceHost)) {
                                rejected = false;
                                addrs = [{
                                    host: forceHost,
                                    port: forcePort
                                }];
                                wsAddrs = [{
                                    host: forceHost,
                                    port: forcePort,
                                    protocol: this._secureWebsocketsEnabled ? "wss" : "ws"
                                }];
                                break
                            }
                        }
                        if (rejected) {
                            var error = "Non-whitelisted tmi_host";
                            logger.error(error);
                            throw error
                        }
                    }
                    var enableDarklaunch = this._darklaunchEligible && opts.darklaunchEnabled;
                    var conn = new _connJs2["default"]({
                        cluster: opts.cluster,
                        addrs: addrs,
                        wsAddrs: wsAddrs,
                        nickname: this.nickname,
                        password: this._opts.password,
                        allowWebSockets: opts.useWebSockets || opts.allowWebSockets,
                        useWebSockets: opts.useWebSockets,
                        webSocketPct: opts.webSocketPct,
                        darklaunchConn: enableDarklaunch ? this._darklaunchConn : null
                    });
                    this._setConnection(conn)
                }
                return this._connections[opts.cluster]
            };
            SessionManager.prototype._bindConn = function(conn) {
                conn.on("disconnected", this._onConnDisconnected, this);
                conn.on("usercolor", this._onUserColorChanged, this);
                conn.on("specialuser", this._onUserSpecialAdded, this);
                conn.on("reconnecting", this._onReconnecting, this);
                conn.on("roomban", this._onListRoomsChanged, this);
                conn.on("roomchanged", this._onListRoomsChanged, this);
                conn.on("roomdeleted", this._onListRoomsChanged, this);
                conn.on("roominvite", this._onRoomInvite, this);
                conn.on("emoteset", this._onUserEmotesChanged, this);
                conn.on("flashdisabled", this._onFlashDisabled, this);
                conn.on("userstate", this._onUserStateUpdated, this);
                conn.on("flashtimeout", this._onFlashTimeout, this)
            };
            SessionManager.prototype._unbindConn = function(conn) {
                conn.off("disconnected", this._onConnDisconnected, this);
                conn.off("usercolor", this._onUserColorChanged, this);
                conn.off("specialuser", this._onUserSpecialAdded, this);
                conn.off("reconnecting", this._onReconnecting, this);
                conn.off("roomban", this._onListRoomsChanged, this);
                conn.off("roomchanged", this._onListRoomsChanged, this);
                conn.off("roomdeleted", this._onListRoomsChanged, this);
                conn.off("roominvite", this._onRoomInvite, this);
                conn.off("emoteset", this._onUserEmotesChanged, this);
                conn.off("flashdisabled", this._onFlashDisabled, this);
                conn.off("userstate", this._onUserStateUpdated, this);
                conn.off("flashtimeout", this._onFlashTimeout, this)
            };
            SessionManager.prototype._onUserStateUpdated = function(msg) {
                this._emotesParser.updateEmoticons(msg.tags["emote-sets"]);
                this._updateUserState(this.nickname, msg.tags)
            };
            SessionManager.prototype._updateUserState = function(user, tags) {
                if (tags.color) {
                    this._onUserColorChanged(user, tags.color)
                }
                if (tags["display-name"]) {
                    this._onUserDisplayNameChanged(user, tags["display-name"])
                }
                if (tags.turbo) {
                    this._onUserSpecialAdded(user, "turbo")
                }
                if (tags["golden-kappa"]) {
                    this._onUserSpecialAdded(user, "golden-kappa")
                }
                switch (tags["user-type"]) {
                    case "staff":
                    case "admin":
                    case "global_mod":
                        this._onUserSpecialAdded(user, tags["user-type"]);
                        this._trigger("labelschanged", user);
                        break
                }
            };
            SessionManager.prototype._setConnection = function(conn) {
                this._bindConn(conn);
                logger.info("Adding connection for cluster " + conn.cluster + " to session.");
                this._connections[conn.cluster] = conn
            };
            SessionManager.prototype._updateGroupRoom = function(roomData) {
                var room = this._rooms[roomData.irc_channel];
                if (room) {
                    room.displayName = roomData.display_name;
                    room.publicInvitesEnabled = !!roomData.public_invites_enabled
                } else {
                    var addrs = [{
                        host: "irc.chat.twitch.tv",
                        port: "80"
                    }, {
                        host: "irc.chat.twitch.tv",
                        port: "6667"
                    }];
                    var wsAddrs = [{
                        host: "irc-ws.chat.twitch.tv",
                        port: "80"
                    }];
                    var conn = this._getOrNewConnection({
                        cluster: roomData.cluster,
                        addrs: addrs,
                        wsAddrs: wsAddrs,
                        useWebSockets: true
                    });
                    room = this._rooms[roomData.irc_channel] = new _roomJs2["default"]({
                        name: roomData.irc_channel,
                        displayName: roomData.display_name,
                        ownerId: roomData.owner_id,
                        publicInvitesEnabled: !!roomData.public_invites_enabled,
                        chattersListUrl: roomData.chatters_list_url,
                        session: this,
                        connection: conn,
                        whisperConn: this._connections.group
                    })
                }
                room._isDirty = false;
                return room
            };
            SessionManager.prototype._updateGroupRoomMembership = function(membershipData) {
                var room = this._updateGroupRoom(membershipData.room);
                room.acceptedInvite = membershipData.is_confirmed;
                room.inviter = membershipData.inviter;
                room.isOwner = membershipData.is_owner;
                room.userId = membershipData.user.id;
                if (membershipData.is_mod) {
                    room._roomUserLabels.add(this.nickname, "mod")
                }
                return room
            };
            SessionManager.prototype._updatePublicRoom = function(roomData) {
                var room = this._rooms[roomData.name];
                if (!room) {
                    room = this._rooms[roomData.name] = new _roomJs2["default"]({
                        session: this,
                        name: roomData.name,
                        ownerId: roomData.ownerId,
                        chattersListUrl: this._buildChattersListUrl(roomData.name, roomData.connection._opts.cluster),
                        connection: roomData.connection,
                        whisperConn: this._connections.group
                    })
                }
                return room
            };
            SessionManager.prototype._buildChattersListUrl = function(roomName, cluster) {
                var forceBaseURL = _utilJs2["default"].urlParams.tmi_http_base_url;
                if (!forceBaseURL || !forceBaseURL.match(/\.twitch\.tv(:\d+)?/)) {
                    forceBaseURL = "tmi.twitch.tv"
                }
                return "//" + forceBaseURL + "/group/user/" + roomName + "/chatters"
            };
            SessionManager.prototype._fetchIgnored = function() {
                var deferred = $.Deferred(),
                    self = this;
                this._twitchApi.get("/kraken/users/" + this.nickname + "/blocks", {
                    limit: 500
                }).done(function(result) {
                    $.each(result.blocks, function(index, block) {
                        self._ignored[block.user.name.toLowerCase()] = true
                    });
                    deferred.resolve()
                }).fail(function() {
                    deferred.reject()
                });
                return deferred
            };
            SessionManager.prototype._getRoomInfo = function(roomName) {
                var deferred = $.Deferred();
                var self = this;
                this._twitchApi.get("/api/channels/" + roomName + "/chat_properties").done(function(info) {
                    var addrs = [],
                        wsAddrs = [];
                    addrs = _utilJs2["default"].parseAddressesFromServers(info.chat_servers);
                    wsAddrs = _utilJs2["default"].parseAddressesFromServers(info.web_socket_servers || []);
                    if (addrs.length + wsAddrs.length === 0) {
                        logger.error("No chat servers returned for room " + roomName + ".");
                        deferred.reject();
                        return
                    }
                    var darklaunchEnabled = typeof info.darklaunch_pct === "number" && Math.random() < info.darklaunch_pct;
                    if (self._secureWebsocketsEnabled) {
                        wsAddrs = [{
                            protocol: "wss",
                            host: "irc-ws.chat.twitch.tv",
                            port: "443"
                        }]
                    }
                    deferred.resolve({
                        darklaunchEnabled: darklaunchEnabled || _utilJs2["default"].urlParams.tmi_darklaunch,
                        cluster: info.cluster || "main",
                        addrs: addrs,
                        wsAddrs: wsAddrs,
                        ownerId: info._id,
                        useWebSockets: true
                    })
                }).fail(deferred.reject);
                return deferred
            };
            SessionManager.prototype._openGroupsConnection = function() {
                var self = this;
                var addrs = [{
                    host: "irc.chat.twitch.tv",
                    port: "80"
                }, {
                    host: "irc.chat.twitch.tv",
                    port: "6667"
                }];
                var wsAddrs = [{
                    host: "irc-ws.chat.twitch.tv",
                    port: "80"
                }];
                if (this._secureWebsocketsEnabled) {
                    wsAddrs = [{
                        protocol: "wss",
                        host: "irc-ws.chat.twitch.tv",
                        port: "443"
                    }]
                }
                var conn = this._getOrNewConnection({
                    darklaunchEnabled: false,
                    cluster: "group",
                    addrs: addrs,
                    wsAddrs: wsAddrs,
                    useWebSockets: true
                });
                conn.on("opened", function() {
                    logger.info("Groups connection opened.")
                });
                conn.on("open:retry", function() {
                    logger.info("Groups connection retrying.")
                });
                conn.on("open:failed", function() {
                    logger.info("Groups connection failed.")
                });
                conn.on("whisper", this._onGroupConnWhisper, this);
                conn.on("notice", this._onGroupConnNotice, this);
                conn.open()
            };
            SessionManager.prototype._onGroupConnWhisper = function(ircMsg) {
                if (ircMsg.tags.color) {
                    this._onUserColorChanged(ircMsg.sender, ircMsg.tags.color)
                }
                if (!this.isIgnored(ircMsg.sender)) {
                    this._triggerWhisper(ircMsg)
                }
            };
            SessionManager.prototype._onGroupConnNotice = function(ircMsg) {
                if (ircMsg.target != "#jtv") return;
                this._trigger("notice", {
                    msgId: ircMsg.tags["msg-id"],
                    message: ircMsg.message,
                    targetId: ircMsg.tags["target-user-id"]
                })
            };
            SessionManager.prototype._onRoomInvite = function(ircChannel, by) {
                logger.info("Received invite to " + ircChannel + " from " + by);
                if (this._invited[ircChannel]) {
                    logger.warning("Duplicate invite to " + ircChannel + " from " + by)
                } else if (by && this._ignored[by.toLowerCase()]) {
                    logger.warning("Ignored invite to " + ircChannel + " from " + by)
                } else {
                    this._invited[ircChannel] = true;
                    var self = this;
                    setTimeout(function() {
                        self._onListRoomsChanged();
                        self._trigger("invited", {
                            by: by,
                            ircChannel: ircChannel
                        })
                    }, _utilJs2["default"].time.seconds(3))
                }
            };
            SessionManager.prototype._onListRoomsChanged = function() {
                this._roomMembershipsDeferred = null;
                this._trigger("listroomschanged")
            };
            SessionManager.prototype._onUserColorChanged = function(username, color) {
                this._users.setColor(username, color);
                this._trigger("colorchanged", username)
            };
            SessionManager.prototype._onUserEmotesChanged = function(username, emotes) {
                this._users.setEmotes(username, emotes)
            };
            SessionManager.prototype._onUserSpecialAdded = function(username, special) {
                this._users.addSpecial(username, special)
            };
            SessionManager.prototype._onUserDisplayNameChanged = function(username, displayName) {
                this._users.setDisplayName(username, displayName)
            };
            SessionManager.prototype._onReconnecting = function(newConn) {
                var self = this;
                var oldConn = self._connections[newConn.cluster];
                var key = newConn.cluster + "_old";
                self._connections[key] = oldConn;
                self._setConnection(newConn);
                var closed = false;
                var onClosed = function onClosed() {
                    if (closed) return;
                    closed = true;
                    self._unbindConn(self._connections[key]);
                    delete self._connections[key];
                    newConn._reconnecting = oldConn._reconnecting = false;
                    oldConn.off("closed", onClosed)
                };
                oldConn.on("closed", onClosed);
                setTimeout(onClosed, RECONNECT_TIMEOUT)
            };
            SessionManager.prototype._onConnDisconnected = function(conn) {
                this._trigger("connection:disconnected", {
                    cluster: conn.cluster
                })
            };
            SessionManager.prototype._onFlashDisabled = function() {
                this._trigger("flashdisabled")
            };
            SessionManager.prototype._onFlashTimeout = function() {
                this._trigger("flashtimedout")
            };
            SessionManager.prototype._onEmotesResponseReceived = function(response) {
                this._trigger("emotes_changed", response);
                this._emoticonImagesResponse = response
            };
            SessionManager.prototype.getEmotes = function() {
                return this._emoticonImagesResponse
            };
            SessionManager.prototype.updateChannel = function(channelId, data) {
                return this._tmiApi.put("/api/channels/" + channelId, data)
            };
            SessionManager.prototype.sendWhisper = function(username, message) {
                var conn = this._getOrNewConnection({
                    cluster: "group"
                });
                var whisperMsg = "/w " + username + " " + message;
                conn._send("PRIVMSG #jtv :" + whisperMsg);
                this._triggerWhisper({
                    sender: this.nickname,
                    to: username,
                    message: message
                })
            };
            SessionManager.prototype._triggerWhisper = function(msg) {
                this._trigger("whisper", {
                    style: "whisper",
                    from: msg.sender,
                    to: msg.to,
                    message: msg.message,
                    tags: msg.tags || {
                        emotes: this._emotesParser.parseEmotesTag(msg.message),
                        "display-name": this.getDisplayName(msg.sender)
                    },
                    date: new Date
                })
            };
            exports["default"] = SessionManager;
            module.exports = exports["default"]
        }, {
            "./WebSocket.js": 4,
            "./api.js": 5,
            "./conn.js": 6,
            "./events.js": 7,
            "./irc.js": 8,
            "./log.js": 9,
            "./room.js": 10,
            "./twitch.js": 14,
            "./users.js": 15,
            "./util.js": 16
        }],
        12: [function(require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                }
            }
            var _logJs = require("./log.js");
            var _logJs2 = _interopRequireDefault(_logJs);
            var _utilJs = require("./util.js");
            var _utilJs2 = _interopRequireDefault(_utilJs);
            var _eventsJs = require("./events.js");
            var _eventsJs2 = _interopRequireDefault(_eventsJs);
            var logger = _logJs2["default"]._getLogger("socket");
            var MAX_LOAD_ATTEMPTS = 2;
            var _flashSockets = {};
            var _flashSocketId = 1;
            window._flashSocket = {
                eventsCallback: function eventsCallback(clientId, events) {
                    setTimeout(function() {
                        var flashSocket = _flashSockets[clientId],
                            event;
                        if (flashSocket) {
                            for (var i = 0; i < events.length; i++) {
                                event = events[i];
                                try {
                                    flashSocket._onEvent(event)
                                } catch (err) {
                                    logger.error("Error handling Flash socket event " + event.event + ": " + err.stack)
                                }
                            }
                        }
                    }, 1)
                }
            };
            var FlashSocket = function FlashSocket(opts) {
                this._opts = opts;
                this._resetSwfState();
                this._shouldConnectAddr = null;
                this._hasAttemptedConnecting = false;
                this._isConnected = false;
                this._numLoadAttempts = 0;
                this._msgRate = 0;
                this._isLoading = false;
                this._flashMissing = false;
                this._flashOld = false;
                this._logger = opts.logger ? opts.logger : logger
            };
            FlashSocket.prototype = new _eventsJs2["default"];
            FlashSocket.prototype.load = function() {
                if (!this._isLoading) {
                    this._isLoading = true;
                    this._logger.info("Loading Flash socket SWF...");
                    this._embedSocketSwf()
                }
            };
            FlashSocket.prototype.connect = function(addr) {
                if (!this._shouldConnectAddr) {
                    this._shouldConnectAddr = {
                        host: addr.host,
                        port: addr.port
                    };
                    if (this._isSwfLoaded) {
                        this._connectSwfSocket()
                    }
                }
            };
            FlashSocket.prototype.close = function() {
                var shouldCloseSocketSwf = this._isSwfLoaded && this._hasAttemptedConnecting;
                this._reset();
                if (shouldCloseSocketSwf) {
                    this._logger.debug("Calling close on SWF.");
                    this._socketSwf.close()
                }
            };
            FlashSocket.prototype.send = function(data, appendNullByte) {
                if (this._isSwfLoaded && this._isConnected) {
                    this._logger.debug("Calling send on SWF.");
                    this._socketSwf.send(data, appendNullByte)
                } else {
                    this._logger.warning("Attempted to send " + data + " over a disconnected Flash socket. Ignoring.")
                }
            };
            FlashSocket.prototype.getMessageRate = function() {
                return this._msgRate
            };
            FlashSocket.prototype._onEvent = function(event) {
                switch (event.event) {
                    case "loaded":
                        this._logger.debug("Flash socket loaded.");
                        this._onLoaded();
                        break;
                    case "connected":
                        this._logger.debug("Flash socket connected.");
                        this._onConnected(event);
                        break;
                    case "closed":
                        this._logger.debug("Flash socket closed.");
                        this._onClosed(event);
                        break;
                    case "data":
                        this._logger.debug("Flash socket received data.");
                        this._onDataReceived(event);
                        break;
                    case "data_buffer":
                        if (event.buffer.length > 0) {
                            this._logger.debug("Flash socket received buffered data.");
                            for (var i = 0; i < event.buffer.length; i++) {
                                try {
                                    this._onDataReceived({
                                        data: event.buffer[i]
                                    })
                                } catch (err) {
                                    this._logger.error("Error handling Flash socket data: " + err.stack)
                                }
                            }
                        }
                        break;
                    case "stats":
                        this._logger.debug("Flash socket received stats.");
                        this._msgRate = event.stats && event.stats.dataRate ? event.stats.dataRate : 0;
                        break;
                    case "error":
                        this._logger.debug("Flash socket error");
                        this._onError(event);
                        break;
                    case "exception":
                        this._logger.error("Flash socket threw an exception while calling " + event.method + " on SWF: " + event.message);
                        break;
                    default:
                        this._logger.warning("Invalid socket event: " + event.event);
                        break
                }
            };
            FlashSocket.prototype._connectSwfSocket = function() {
                this._hasAttemptedConnecting = true;
                this._logger.debug("Calling connect on SWF.");
                this._socketSwf.connect(this._shouldConnectAddr.host, this._shouldConnectAddr.port)
            };
            FlashSocket.prototype._onLoaded = function() {
                clearTimeout(this._swfLoadedTimeout);
                this._swfLoadedTimeout = null;
                this._socketSwf = document.getElementById(this._domId);
                this._isSwfLoaded = true;
                if (this._shouldConnectAddr) {
                    this._connectSwfSocket()
                }
            };
            FlashSocket.prototype._onConnected = function(data) {
                this._isConnected = true;
                this._trigger("connected", data)
            };
            FlashSocket.prototype._onClosed = function(data) {
                this._reset();
                this._trigger("closed", data)
            };
            FlashSocket.prototype._onError = function(data) {
                this._reset();
                this._trigger("error", data)
            };
            FlashSocket.prototype._onDataReceived = function(data) {
                data.data = decodeURIComponent(data.data);
                this._trigger("data", data)
            };
            FlashSocket.prototype._resetSwfState = function() {
                delete _flashSockets[this._clientId];
                this._clientId = _flashSocketId;
                _flashSockets[this._clientId] = this;
                _flashSocketId += 1;
                this._domId = "tmi_flash_socket_" + this._clientId;
                this._socketSwf = null;
                this._isSwfLoaded = false;
                this._swfLoadedTimeout = null;
                this._msgRate = 0
            };
            FlashSocket.prototype._reset = function() {
                this._shouldConnectAddr = null;
                this._hasAttemptedConnecting = false;
                this._isConnected = false;
                this._msgRate = 0
            };
            FlashSocket.prototype._onSwfLoadedTimeout = function() {
                this._clearSwfLoadedTimeout();
                this._logger.error("Could not load the Flash socket SWF. Timed out before receiving the 'loaded' event.");
                if (this._numLoadAttempts < MAX_LOAD_ATTEMPTS) {
                    this._logger.info("Attempting to reload Flash socket SWF...");
                    this._resetSwfState();
                    this._embedSocketSwf()
                } else {
                    this._logger.critical("Made " + MAX_LOAD_ATTEMPTS + " attempts to load the Flash socket SWF but they each " + "timed out. There will be no more attempts.");
                    this._trigger("flashtimeout", {
                        error: "TIMEOUT"
                    })
                }
            };
            FlashSocket.prototype._onFlashPlayerMissing = function() {
                this._logger.critical("Flash Player Missing. (Version 0 or DOM load failure)");
                this._flashMissing = true
            };
            FlashSocket.prototype._onOldFlashVersion = function(reqVersion) {
                this._logger.critical("FlashVersion too old. Current: " + swfobject.getFlashPlayerVersion + ", required: " + reqVersion);
                this._flashOld = true
            };
            FlashSocket.prototype._embedSocketSwf = function() {
                this._numLoadAttempts += 1;
                var self = this;
                this._swfLoadedTimeout = setTimeout(_utilJs2["default"].callback(this._onSwfLoadedTimeout, this), _utilJs2["default"].time.seconds(10));
                $(document).ready(function() {
                    var socketSwfUrl = "/tmilibs/JSSocket.swf";
                    var WHITELIST = [];
                    if (_utilJs2["default"].urlParams.tmi_socket_swf_url) {
                        if (WHITELIST.indexOf(_utilJs2["default"].urlParams.tmi_socket_swf_url) < 0) {
                            var error = "Non-whitelisted tmi_socket_swf_url";
                            this._logger.error(error);
                            throw error
                        }
                        socketSwfUrl = _utilJs2["default"].urlParams.tmi_socket_swf_url
                    }
                    $("<div/>").attr("id", self._domId).appendTo("body");
                    var embedOpts = {
                        swf: socketSwfUrl,
                        domId: self._domId,
                        width: "0px",
                        height: "0px",
                        flashVersion: "10",
                        installSwf: "/widgets/expressinstall.swf",
                        flashVars: {
                            eventsCallback: "_flashSocket.eventsCallback",
                            clientId: self._clientId
                        },
                        flashParams: {
                            allowScriptAccess: "always",
                            allowNetworking: "all"
                        },
                        htmlAttrs: {
                            name: self._domId,
                            style: "position: absolute;"
                        }
                    };
                    swfobject.embedSWF(embedOpts.swf, embedOpts.domId, embedOpts.width, embedOpts.height, embedOpts.flashVersion, embedOpts.installSwf, embedOpts.flashVars, embedOpts.flashParams, embedOpts.htmlAttrs, function(e) {
                        if (!e.success) {
                            self._clearSwfLoadedTimeout();
                            if (swfobject.getFlashPlayerVersion().major === 0) {
                                self._onFlashPlayerMissing()
                            } else if (!swfobject.hasFlashPlayerVersion(embedOpts.flashVersion)) {
                                self._onOldFlashVersion(embedOpts.flashVersion)
                            } else {
                                self._onFlashPlayerMissing()
                            }
                        }
                    })
                })
            };
            FlashSocket.prototype._clearSwfLoadedTimeout = function() {
                clearTimeout(this._swfLoadedTimeout);
                this._swfLoadedTimeout = null
            };
            exports["default"] = FlashSocket;
            module.exports = exports["default"]
        }, {
            "./events.js": 7,
            "./log.js": 9,
            "./util.js": 16
        }],
        13: [function(require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var statsBase = "https://client-event-reporter-darklaunch.twitch.tv";
            var stats = {};
            stats.sendStatCounter = function(key) {
                $.ajax({
                    type: "POST",
                    url: statsBase + "/counter",
                    data: {
                        key: key,
                        count: "1"
                    }
                })
            };
            stats.sendStatTimer = function(key, ms) {
                $.ajax({
                    type: "POST",
                    url: statsBase + "/timer",
                    data: {
                        key: key,
                        milliseconds: ms
                    }
                })
            };
            stats.sendStatLogger = function(line) {
                $.ajax({
                    type: "POST",
                    url: statsBase + "/logger",
                    data: {
                        log_line: line
                    }
                })
            };
            exports["default"] = stats;
            module.exports = exports["default"]
        }, {}],
        14: [function(require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                }
            }
            var _apiJs = require("./api.js");
            var _apiJs2 = _interopRequireDefault(_apiJs);
            var _eventsJs = require("./events.js");
            var _eventsJs2 = _interopRequireDefault(_eventsJs);
            var EmotesParser = function EmotesParser(opts) {
                opts = opts || {};
                this.emoticonSetIds = "";
                this.emoticonRegexToIds = {};
                this.twitchApi = opts.twitchApi
            };
            EmotesParser.prototype = new _eventsJs2["default"];
            EmotesParser.prototype.updateEmoticons = function(emoticonSetIds) {
                var self = this;
                if (!emoticonSetIds || this.emoticonSetIds === emoticonSetIds) {
                    return
                }
                this.emoticonSetIds = emoticonSetIds;
                this.twitchApi.get("/kraken/chat/emoticon_images", {
                    emotesets: emoticonSetIds
                }, {
                    headers: {
                        Accept: _apiJs2["default"].twitch.getAcceptHeader(3)
                    }
                }).done(function(response) {
                    self.emoticonRegexToIds = self._buildEmoticonsRegex(response.emoticon_sets);
                    self._trigger("emotes_changed", response)
                })
            };
            var regexRegex = /[\|\\\^\$\*\+\?\:\#]/;
            var _isRegex = function _isRegex(str) {
                return regexRegex.test(str)
            };
            var _preprocessRegex = function _preprocessRegex(regexString) {
                var pattern = regexString.replace(/\\(?=[&;:])/g, "");
                pattern = "^" + pattern + "$";
                return $("<textarea/>").html(pattern).text()
            };
            EmotesParser.prototype._buildEmoticonsRegex = function(emoticonSets) {
                var regexToIds = {},
                    isRegex, code;
                $.each(this.emoticonSetIds.split(","), function(setIndex, emoticonSetId) {
                    emoticonSets[emoticonSetId] = emoticonSets[emoticonSetId] || [];
                    $.each(emoticonSets[emoticonSetId], function(emoticonIndex, emoticon) {
                        code = emoticon.code;
                        isRegex = _isRegex(code);
                        if (isRegex) {
                            code = _preprocessRegex(code)
                        }
                        regexToIds[code] = {
                            id: emoticon.id,
                            isRegex: isRegex
                        }
                    })
                });
                return regexToIds
            };
            var _parseString = function _parseString(msg, emoticonCode, emoticonID, instances) {
                var spaceDelimitedRegex = /\S+/g,
                    match;
                while ((match = spaceDelimitedRegex.exec(msg)) !== null) {
                    if (match[0] === emoticonCode) {
                        instances[emoticonID] = instances[emoticonID] || [];
                        instances[emoticonID].push([match.index, spaceDelimitedRegex.lastIndex - 1])
                    }
                }
            };
            var _parseRegex = function _parseRegex(msg, emoticonCode, emoticonID, instances) {
                var spaceDelimitedRegex = /\S+/g,
                    re = new RegExp(emoticonCode),
                    match;
                while ((match = spaceDelimitedRegex.exec(msg)) !== null) {
                    if (re.test(match[0])) {
                        instances[emoticonID] = instances[emoticonID] || [];
                        instances[emoticonID].push([match.index, spaceDelimitedRegex.lastIndex - 1])
                    }
                }
            };
            EmotesParser.prototype.parseEmotesTag = function(msg) {
                var instances = {},
                    parser;
                $.each(this.emoticonRegexToIds, function(emoticonCode, emoticon) {
                    parser = emoticon.isRegex ? _parseRegex : _parseString;
                    parser.call(this, msg, emoticonCode, emoticon.id, instances)
                });
                return instances
            };
            exports["default"] = EmotesParser;
            module.exports = exports["default"]
        }, {
            "./api.js": 5,
            "./events.js": 7
        }],
        15: [function(require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                }
            }
            var _utilJs = require("./util.js");
            var _utilJs2 = _interopRequireDefault(_utilJs);
            var UserStore = function UserStore() {
                this._users = {};
                this._specials = new _utilJs2["default"].types.SetStore
            };
            UserStore.COLORS = ["#FF0000", "#0000FF", "#008000", "#B22222", "#FF7F50", "#9ACD32", "#FF4500", "#2E8B57", "#DAA520", "#D2691E", "#5F9EA0", "#1E90FF", "#FF69B4", "#8A2BE2", "#00FF7F"];
            UserStore.prototype.setColor = function(username, color) {
                this._user(username).color = color
            };
            UserStore.prototype.getColor = function(username) {
                return this._user(username).color
            };
            UserStore.prototype.setEmotes = function(username, emotes) {
                this._user(username).emotes = emotes
            };
            UserStore.prototype.getEmotes = function(username) {
                return this._user(username).emotes
            };
            UserStore.prototype.addSpecial = function(username, special) {
                this._specials.add(username, special)
            };
            UserStore.prototype.getSpecials = function(username) {
                return this._specials.get(username)
            };
            UserStore.prototype.getDisplayName = function(username) {
                return this._user(username).displayName
            };
            UserStore.prototype.setDisplayName = function(username, displayName) {
                this._user(username).displayName = displayName
            };
            UserStore.prototype._user = function(username) {
                if (!this._users[username]) {
                    this._users[username] = {}
                }
                return this._users[username]
            };
            exports["default"] = UserStore;
            module.exports = exports["default"]
        }, {
            "./util.js": 16
        }],
        16: [function(require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var util = {};
            var UNESCAPE_CHARS = {
                ":": ";",
                s: " ",
                r: "\r",
                n: "\n",
                "\\": "\\"
            };
            var ESCAPE_CHARS = {
                ";": ":",
                " ": "s",
                "\r": "r",
                "\n": "n",
                "\\": "\\\\"
            };
            util.callback = function(func, context) {
                return function() {
                    return func.apply(context, arguments)
                }
            };
            util.randomInt = function(maxInt) {
                return Math.round(maxInt * Math.random())
            };
            util.host = window.location.host;
            util.urlParams = function() {
                var urlParams = {};
                var params = window.location.search.substr(1);
                var keyValues = params.split("&");
                for (var i = 0; i < keyValues.length; ++i) {
                    var keyValue = keyValues[i].split("=");
                    urlParams[decodeURIComponent(keyValue[0])] = keyValue.length > 1 ? decodeURIComponent(keyValue[1]) : ""
                }
                return urlParams
            }();
            util.readCookie = function(name) {
                var nameEq = name + "=";
                var ca = window.document.cookie.split(";");
                for (var i = 0; i < ca.length; i++) {
                    var c = util.string.trim(ca[i]);
                    if (c.indexOf(nameEq) === 0) {
                        return c.substring(nameEq.length, c.length)
                    }
                }
                return null
            };
            util.unescapeTagValue = function(tag) {
                var result = "";
                for (var i = 0; i < tag.length; i++) {
                    var c = tag.charAt(i);
                    if (c == "\\") {
                        if (i == tag.length - 1) {
                            throw "Improperly escaped tag"
                        }
                        c = UNESCAPE_CHARS[tag.charAt(i + 1)];
                        if (c === undefined) {
                            throw "Improperly escaped tag"
                        }
                        i++
                    }
                    result += c
                }
                return result
            };
            util.escapeTagValue = function(tag) {
                var tagStr = tag.toString();
                var result = "";
                for (var i = 0; i < tagStr.length; i++) {
                    var c = tagStr.charAt(i);
                    if (!ESCAPE_CHARS[c]) {
                        result += c;
                        continue
                    }
                    result += ESCAPE_CHARS[c]
                }
                return result
            };
            util.parseAddressesFromServers = function(servers) {
                var addrs = [],
                    parts;
                for (var i = 0; i < servers.length; i++) {
                    parts = servers[i].split(":");
                    addrs.push({
                        host: parts[0],
                        port: parts[1]
                    })
                }
                return addrs
            };
            util.string = {
                trim: function trim(s) {
                    return s.replace(/^\s+/, "").replace(/\s+$/, "")
                }
            };
            util.time = {
                seconds: function seconds(num) {
                    return num * 1e3
                },
                now: function now() {
                    return (new Date).getTime()
                }
            };
            util.array = {
                remove: function remove(array, element) {
                    var i = array.indexOf(element);
                    if (i >= 0) {
                        array.splice(1, 1)
                    }
                },
                join: function join() {
                    var output = [];
                    for (var i = 0; i < arguments.length; ++i) {
                        Array.prototype.push.apply(output, arguments[i])
                    }
                    return output
                },
                pickRandom: function pickRandom(array) {
                    var randomIndex = Math.floor(Math.random() * array.length);
                    return array[randomIndex]
                },
                shuffle: function shuffle(array) {
                    var output = array.slice(0),
                        currentIndex = output.length,
                        randomIndex, temporaryValue;
                    while (0 !== currentIndex) {
                        randomIndex = Math.floor(Math.random() * currentIndex);
                        currentIndex -= 1;
                        temporaryValue = output[currentIndex];
                        output[currentIndex] = output[randomIndex];
                        output[randomIndex] = temporaryValue
                    }
                    return output
                },
                getNextIndex: function getNextIndex(array, currentIndex) {
                    return (currentIndex + 1) % array.length
                }
            };
            util.types = {};
            var SetStore = util.types.SetStore = function() {
                this._sets = {}
            };
            SetStore.prototype.add = function(key, value) {
                this._create(key)[value] = true
            };
            SetStore.prototype.remove = function(key, value) {
                var set = this._get(key);
                if (set) {
                    delete set[value]
                }
            };
            SetStore.prototype.get = function(key) {
                var output = [];
                var set = this._get(key);
                if (set) {
                    for (var value in set) {
                        if (set.hasOwnProperty(value)) {
                            output.push(value)
                        }
                    }
                }
                return output
            };
            SetStore.prototype._create = function(key) {
                if (!this._sets[key]) {
                    this._sets[key] = {}
                }
                return this._sets[key]
            };
            SetStore.prototype._get = function(key) {
                return this._sets[key]
            };
            var Tracker = util.types.Tracker = function() {
                this._data = {};
                this._timestamps = {};
                this._timings = {}
            };
            Tracker.prototype.startBenchmark = function(benchmark) {
                if (!this._timestamps.hasOwnProperty(benchmark)) {
                    this._timestamps[benchmark] = util.time.now()
                }
            };
            Tracker.prototype.endBenchmark = function(benchmark) {
                if (this._timestamps.hasOwnProperty(benchmark) && !this._timings.hasOwnProperty(benchmark)) {
                    this._timings[benchmark] = util.time.now() - this._timestamps[benchmark]
                }
            };
            Tracker.prototype.set = function(key, value) {
                if (!this._data.hasOwnProperty(key)) {
                    this._data[key] = value
                }
            };
            Tracker.prototype.increment = function(key, incrBy) {
                this._data[key] = (this._data[key] || 0) + incrBy
            };
            Tracker.prototype.data = function() {
                var data = {};
                $.extend(data, this._data);
                $.extend(data, this._timings);
                return data
            };
            exports["default"] = util;
            module.exports = exports["default"]
        }, {}]
    }, {}, [1])(1)
});