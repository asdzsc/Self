/*! modernizr 3.1.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-backgroundsize-bgsizecover-borderradius-boxshadow-cssanimations-csstransforms-csstransforms3d-csstransitions-touchevents !*/
! function(e, n, t) {
    function s(e) { var n = C.className,
            t = Modernizr._config.classPrefix || ""; if (S && (n = n.baseVal), Modernizr._config.enableJSClass) { var s = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
            n = n.replace(s, "$1" + t + "js$2") }
        Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), S ? C.className.baseVal = n : C.className = n) }

    function o(e, n) { return typeof e === n }

    function r() { var e, n, t, s, r, i, a; for (var f in x) { if (e = [], n = x[f], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
                for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase()); for (s = o(n.fn, "function") ? n.fn() : n.fn, r = 0; r < e.length; r++) i = e[r], a = i.split("."), 1 === a.length ? Modernizr[a[0]] = s : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = s), y.push((s ? "" : "no-") + a.join("-")) } }

    function i() { return "function" != typeof n.createElement ? n.createElement(arguments[0]) : S ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments) }

    function a() { var e = n.body; return e || (e = i(S ? "svg" : "body"), e.fake = !0), e }

    function f(e, t, s, o) { var r, f, u, l, d = "modernizr",
            p = i("div"),
            c = a(); if (parseInt(s, 10))
            for (; s--;) u = i("div"), u.id = o ? o[s] : d + (s + 1), p.appendChild(u); return r = i("style"), r.type = "text/css", r.id = "s" + d, (c.fake ? c : p).appendChild(r), c.appendChild(p), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(n.createTextNode(e)), p.id = d, c.fake && (c.style.background = "", c.style.overflow = "hidden", l = C.style.overflow, C.style.overflow = "hidden", C.appendChild(c)), f = t(p, e), c.fake ? (c.parentNode.removeChild(c), C.style.overflow = l, C.offsetHeight) : p.parentNode.removeChild(p), !!f }

    function u(e, n) { return !!~("" + e).indexOf(n) }

    function l(e) { return e.replace(/([a-z])-([a-z])/g, function(e, n, t) { return n + t.toUpperCase() }).replace(/^-/, "") }

    function d(e, n) { return function() { return e.apply(n, arguments) } }

    function p(e, n, t) { var s; for (var r in e)
            if (e[r] in n) return t === !1 ? e[r] : (s = n[e[r]], o(s, "function") ? d(s, t || n) : s);
        return !1 }

    function c(e) { return e.replace(/([A-Z])/g, function(e, n) { return "-" + n.toLowerCase() }).replace(/^ms-/, "-ms-") }

    function m(n, s) { var o = n.length; if ("CSS" in e && "supports" in e.CSS) { for (; o--;)
                if (e.CSS.supports(c(n[o]), s)) return !0;
            return !1 } if ("CSSSupportsRule" in e) { for (var r = []; o--;) r.push("(" + c(n[o]) + ":" + s + ")"); return r = r.join(" or "), f("@supports (" + r + ") { #modernizr { position: absolute; } }", function(e) { return "absolute" == getComputedStyle(e, null).position }) } return t }

    function v(e, n, s, r) {
        function a() { d && (delete j.style, delete j.modElem) } if (r = o(r, "undefined") ? !1 : r, !o(s, "undefined")) { var f = m(e, s); if (!o(f, "undefined")) return f } for (var d, p, c, v, h, g = ["modernizr", "tspan"]; !j.style;) d = !0, j.modElem = i(g.shift()), j.style = j.modElem.style; for (c = e.length, p = 0; c > p; p++)
            if (v = e[p], h = j.style[v], u(v, "-") && (v = l(v)), j.style[v] !== t) { if (r || o(s, "undefined")) return a(), "pfx" == n ? v : !0; try { j.style[v] = s } catch (y) {} if (j.style[v] != h) return a(), "pfx" == n ? v : !0 }
        return a(), !1 }

    function h(e, n, t, s, r) { var i = e.charAt(0).toUpperCase() + e.slice(1),
            a = (e + " " + P.join(i + " ") + i).split(" "); return o(n, "string") || o(n, "undefined") ? v(a, n, s, r) : (a = (e + " " + E.join(i + " ") + i).split(" "), p(a, n, t)) }

    function g(e, n, s) { return h(e, t, t, n, s) } var y = [],
        x = [],
        b = { _version: "3.1.0", _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 }, _q: [], on: function(e, n) { var t = this;
                setTimeout(function() { n(t[e]) }, 0) }, addTest: function(e, n, t) { x.push({ name: e, fn: n, options: t }) }, addAsyncTest: function(e) { x.push({ name: null, fn: e }) } },
        Modernizr = function() {};
    Modernizr.prototype = b, Modernizr = new Modernizr; var C = n.documentElement,
        S = "svg" === C.nodeName.toLowerCase(),
        w = b._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : [];
    b._prefixes = w; var _ = "CSS" in e && "supports" in e.CSS,
        T = "supportsCSS" in e;
    Modernizr.addTest("supports", _ || T); var z = b.testStyles = f;
    Modernizr.addTest("touchevents", function() { var t; if ("ontouchstart" in e || e.DocumentTouch && n instanceof DocumentTouch) t = !0;
        else { var s = ["@media (", w.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            z(s, function(e) { t = 9 === e.offsetTop }) } return t }); var k = "Moz O ms Webkit",
        P = b._config.usePrefixes ? k.split(" ") : [];
    b._cssomPrefixes = P; var E = b._config.usePrefixes ? k.toLowerCase().split(" ") : [];
    b._domPrefixes = E; var N = { elem: i("modernizr") };
    Modernizr._q.push(function() { delete N.elem }); var j = { style: N.elem.style };
    Modernizr._q.unshift(function() { delete j.style }), b.testAllProps = h, b.testAllProps = g, Modernizr.addTest("cssanimations", g("animationName", "a", !0)), Modernizr.addTest("backgroundsize", g("backgroundSize", "100%", !0)), Modernizr.addTest("csstransitions", g("transition", "all", !0)), Modernizr.addTest("csstransforms3d", function() { var e = !!g("perspective", "1px", !0),
            n = Modernizr._config.usePrefixes; if (e && (!n || "webkitPerspective" in C.style)) { var t;
            Modernizr.supports ? t = "@supports (perspective: 1px)" : (t = "@media (transform-3d)", n && (t += ",(-webkit-transform-3d)")), t += "{#modernizr{left:9px;position:absolute;height:5px;margin:0;padding:0;border:0}}", z(t, function(n) { e = 9 === n.offsetLeft && 5 === n.offsetHeight }) } return e }), Modernizr.addTest("bgsizecover", g("backgroundSize", "cover")), Modernizr.addTest("borderradius", g("borderRadius", "0px", !0)), Modernizr.addTest("boxshadow", g("boxShadow", "1px 1px", !0)), Modernizr.addTest("csstransforms", function() { return -1 === navigator.userAgent.indexOf("Android 2.") && g("transform", "scale(1)", !0) }), r(), s(y), delete b.addTest, delete b.addAsyncTest; for (var A = 0; A < Modernizr._q.length; A++) Modernizr._q[A]();
    e.Modernizr = Modernizr }(window, document);
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 */
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, { def: "easeOutQuad", swing: function(e, f, a, h, g) { return jQuery.easing[jQuery.easing.def](e, f, a, h, g) }, easeInQuad: function(e, f, a, h, g) { return h * (f /= g) * f + a }, easeOutQuad: function(e, f, a, h, g) { return -h * (f /= g) * (f - 2) + a }, easeInOutQuad: function(e, f, a, h, g) { if ((f /= g / 2) < 1) { return h / 2 * f * f + a } return -h / 2 * ((--f) * (f - 2) - 1) + a }, easeInCubic: function(e, f, a, h, g) { return h * (f /= g) * f * f + a }, easeOutCubic: function(e, f, a, h, g) { return h * ((f = f / g - 1) * f * f + 1) + a }, easeInOutCubic: function(e, f, a, h, g) { if ((f /= g / 2) < 1) { return h / 2 * f * f * f + a } return h / 2 * ((f -= 2) * f * f + 2) + a }, easeInQuart: function(e, f, a, h, g) { return h * (f /= g) * f * f * f + a }, easeOutQuart: function(e, f, a, h, g) { return -h * ((f = f / g - 1) * f * f * f - 1) + a }, easeInOutQuart: function(e, f, a, h, g) { if ((f /= g / 2) < 1) { return h / 2 * f * f * f * f + a } return -h / 2 * ((f -= 2) * f * f * f - 2) + a }, easeInQuint: function(e, f, a, h, g) { return h * (f /= g) * f * f * f * f + a }, easeOutQuint: function(e, f, a, h, g) { return h * ((f = f / g - 1) * f * f * f * f + 1) + a }, easeInOutQuint: function(e, f, a, h, g) { if ((f /= g / 2) < 1) { return h / 2 * f * f * f * f * f + a } return h / 2 * ((f -= 2) * f * f * f * f + 2) + a }, easeInSine: function(e, f, a, h, g) { return -h * Math.cos(f / g * (Math.PI / 2)) + h + a }, easeOutSine: function(e, f, a, h, g) { return h * Math.sin(f / g * (Math.PI / 2)) + a }, easeInOutSine: function(e, f, a, h, g) { return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a }, easeInExpo: function(e, f, a, h, g) { return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a }, easeOutExpo: function(e, f, a, h, g) { return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a }, easeInOutExpo: function(e, f, a, h, g) { if (f == 0) { return a } if (f == g) { return a + h } if ((f /= g / 2) < 1) { return h / 2 * Math.pow(2, 10 * (f - 1)) + a } return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a }, easeInCirc: function(e, f, a, h, g) { return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a }, easeOutCirc: function(e, f, a, h, g) { return h * Math.sqrt(1 - (f = f / g - 1) * f) + a }, easeInOutCirc: function(e, f, a, h, g) { if ((f /= g / 2) < 1) { return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a } return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a }, easeInElastic: function(f, h, e, l, k) { var i = 1.70158; var j = 0; var g = l; if (h == 0) { return e } if ((h /= k) == 1) { return e + l } if (!j) { j = k * 0.3 } if (g < Math.abs(l)) { g = l; var i = j / 4 } else { var i = j / (2 * Math.PI) * Math.asin(l / g) } return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e }, easeOutElastic: function(f, h, e, l, k) { var i = 1.70158; var j = 0; var g = l; if (h == 0) { return e } if ((h /= k) == 1) { return e + l } if (!j) { j = k * 0.3 } if (g < Math.abs(l)) { g = l; var i = j / 4 } else { var i = j / (2 * Math.PI) * Math.asin(l / g) } return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e }, easeInOutElastic: function(f, h, e, l, k) { var i = 1.70158; var j = 0; var g = l; if (h == 0) { return e } if ((h /= k / 2) == 2) { return e + l } if (!j) { j = k * (0.3 * 1.5) } if (g < Math.abs(l)) { g = l; var i = j / 4 } else { var i = j / (2 * Math.PI) * Math.asin(l / g) } if (h < 1) { return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e } return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e }, easeInBack: function(e, f, a, i, h, g) { if (g == undefined) { g = 1.70158 } return i * (f /= h) * f * ((g + 1) * f - g) + a }, easeOutBack: function(e, f, a, i, h, g) { if (g == undefined) { g = 1.70158 } return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a }, easeInOutBack: function(e, f, a, i, h, g) { if (g == undefined) { g = 1.70158 } if ((f /= h / 2) < 1) { return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a } return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a }, easeInBounce: function(e, f, a, h, g) { return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a }, easeOutBounce: function(e, f, a, h, g) { if ((f /= g) < (1 / 2.75)) { return h * (7.5625 * f * f) + a } else { if (f < (2 / 2.75)) { return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a } else { if (f < (2.5 / 2.75)) { return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a } else { return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a } } } }, easeInOutBounce: function(e, f, a, h, g) { if (f < g / 2) { return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a } return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a } });
(function($) { $.fn.running = function() {
        function n() { var t = $(".animateNum"); var n = { top: $(window).scrollTop(), bottom: $(window).scrollTop() + $(window).height() };
            t.each(function() { var t = $(this).attr("data-animateTarget");
                n.top <= $(this).offset().top + $(this).height() && n.bottom >= $(this).offset().top && !$(this).data("start") && ($(this).data("start", !0), new AnimateNum({ obj: $(this), target: t, totalTime: 1e3 })) }) };

        function b() { var t = $(".animateBar"); var n = { top: $(window).scrollTop(), bottom: $(window).scrollTop() + $(window).height() };
            t.each(function() { var t = $(this).attr("data-animateTarget");
                n.top <= $(this).offset().top + $(this).height() && n.bottom >= $(this).offset().top && !$(this).data("start") && ($(this).data("start", !0), new AnimateBar({ obj: $(this), target: t, totalTime: 1e3 })) }) };

        function p() { var t = $(".animatePie"); var n = { top: $(window).scrollTop(), bottom: $(window).scrollTop() + $(window).height() };
            t.each(function() { var t = $(this).attr("data-animateTarget");
                n.top <= $(this).offset().top + $(this).height() && n.bottom >= $(this).offset().top && !$(this).data("start") && ($(this).data("start", !0), new AnimatePie({ obj: $(this), target: t, totalTime: 1e3 })) }) };
        $(window).bind("scroll", function() { n();
            b();
            p() });

        function AnimateNum(t) { this.obj = t.obj, this.target = t.target.toString(), this.totalTime = t.totalTime || 1e3, this.init() };

        function AnimateBar(t) { this.obj = t.obj, this.target = t.target.toString(), this.totalTime = t.totalTime || 1e3, this.init() };

        function AnimatePie(t) { this.obj = t.obj, this.target = t.target.toString(), this.totalTime = t.totalTime || 1e3, this.init() };
        AnimateNum.prototype = { init: function() { return this.target ? (this.animation(), void 0) : !1 }, animation: function() { var t = this,
                    i = this.target.indexOf("."),
                    e = 0;
                i >= 0 && (e = this.target.length - i - 1); var n = this.target.replace(".", ""),
                    s = this.totalTime / 30 | 0,
                    a = n / s | 0,
                    r = 0,
                    h = 0;
                t.timer = setInterval(function() { r++, h += a, t.obj.html(h / Math.pow(10, e)), r >= s && (clearInterval(t.timer), t.obj.html(t.target)) }, 30) } };
        AnimateBar.prototype = { init: function() { return this.target ? (this.animation(), void 0) : !1 }, animation: function() { var t = this,
                    i = this.target.indexOf("."),
                    e = 0;
                i >= 0 && (e = this.target.length - i - 1); var n = this.target.replace(".", ""),
                    s = this.totalTime / 30 | 0,
                    a = n / s | 0,
                    r = 0,
                    h = 0;
                t.timer = setInterval(function() { r++, h += a, t.obj.css('width', h / Math.pow(10, e) + '%'), r >= s && (clearInterval(t.timer), t.obj.animate({ 'width': t.target + '%' })) }, 30) } };
        AnimatePie.prototype = { init: function() { return this.target ? (this.animation(), void 0) : !1 }, animation: function() { var t = this;
                s = this.totalTime / 60 | 0;
                r = 0;
                t.i = 0;
                t.count = 0;
                t.j = 0;
                num = t.target;

                function start1() { t.obj.find('.pieInner span').html(t.i + 1); if (num == 0) return false;
                    t.i = t.i + 1; if (t.i == num) { clearInterval(t.t1) } if (t.i == 50) { clearInterval(t.t1);
                        num2 = num - 50;
                        t.t2 = setInterval(start2, 1) };
                    t.obj.find(".pieLeftInner").css("-o-transform", "rotate(" + t.i * 3.6 + "deg)");
                    t.obj.find(".pieLeftInner").css("-moz-transform", "rotate(" + t.i * 3.6 + "deg)");
                    t.obj.find(".pieLeftInner").css("-webkit-transform", "rotate(" + t.i * 3.6 + "deg)") };

                function start2() { t.obj.find('.pieInner span').html(50 + t.j + 1); if (num2 == 0) return false;
                    t.j = t.j + 1; if (t.j == num2) { clearInterval(t.t2) } if (t.j == 50) { clearInterval(t.t2) };
                    t.obj.find(".pieRightInner").css("-o-transform", "rotate(" + t.j * 3.6 + "deg)");
                    t.obj.find(".pieRightInner").css("-moz-transform", "rotate(" + t.j * 3.6 + "deg)");
                    t.obj.find(".pieRightInner").css("-webkit-transform", "rotate(" + t.j * 3.6 + "deg)") };
                t.t1 = setInterval(function() { r++;
                    r >= s && (clearInterval(t.timer), start1()) }, 30) } } } })(jQuery);

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
! function(a) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery) }(function(a) {
    "use strict";
    var b = window.Slick || {};
    b = function() {
        function c(c, d) { var f, e = this;
            e.defaults = { accessibility: !0, adaptiveHeight: !1, appendArrows: a(c), appendDots: a(c), arrows: !0, asNavFor: null, prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>', nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>', autoplay: !1, autoplaySpeed: 3e3, centerMode: !1, centerPadding: "50px", cssEase: "ease", customPaging: function(b, c) { return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1) }, dots: !1, dotsClass: "slick-dots", draggable: !0, easing: "linear", edgeFriction: .35, fade: !1, focusOnSelect: !1, infinite: !0, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: !1, pauseOnHover: !0, pauseOnFocus: !0, pauseOnDotsHover: !1, respondTo: "window", responsive: null, rows: 1, rtl: !1, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: !0, swipeToSlide: !1, touchMove: !0, touchThreshold: 5, useCSS: !0, useTransform: !0, variableWidth: !1, vertical: !1, verticalSwiping: !1, waitForAnimate: !0, zIndex: 1e3 }, e.initials = { animating: !1, dragging: !1, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: !1, slideOffset: 0, swipeLeft: null, $list: null, touchObject: {}, transformsEnabled: !1, unslicked: !1 }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.focussed = !1, e.interrupted = !1, e.hidden = "hidden", e.paused = !0, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, d, f), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0) } var b = 0; return c }(), b.prototype.activateADA = function() { var a = this;
        a.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" }) }, b.prototype.addSlide = b.prototype.slickAdd = function(b, c, d) { var e = this; if ("boolean" == typeof c) d = c, c = null;
        else if (0 > c || c >= e.slideCount) return !1;
        e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function(b, c) { a(c).attr("data-slick-index", b) }), e.$slidesCache = e.$slides, e.reinit() }, b.prototype.animateHeight = function() { var a = this; if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) { var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.animate({ height: b }, a.options.speed) } }, b.prototype.animateSlide = function(b, c) { var d = {},
            e = this;
        e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({ left: b }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({ top: b }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({ animStart: e.currentLeft }).animate({ animStart: b }, { duration: e.options.speed, easing: e.options.easing, step: function(a) { a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d)) }, complete: function() { c && c.call() } })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function() { e.disableTransition(), c.call() }, e.options.speed)) }, b.prototype.getNavTarget = function() { var b = this,
            c = b.options.asNavFor; return c && null !== c && (c = a(c).not(b.$slider)), c }, b.prototype.asNavFor = function(b) { var c = this,
            d = c.getNavTarget();
        null !== d && "object" == typeof d && d.each(function() { var c = a(this).slick("getSlick");
            c.unslicked || c.slideHandler(b, !0) }) }, b.prototype.applyTransition = function(a) { var b = this,
            c = {};
        b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c) }, b.prototype.autoPlay = function() { var a = this;
        a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed)) }, b.prototype.autoPlayClear = function() { var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer) }, b.prototype.autoPlayIterator = function() { var a = this,
            b = a.currentSlide + a.options.slidesToScroll;
        a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, a.currentSlide - 1 === 0 && (a.direction = 1))), a.slideHandler(b)) }, b.prototype.buildArrows = function() { var b = this;
        b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" })) }, b.prototype.buildDots = function() { var c, d, b = this; if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) { for (b.$slider.addClass("slick-dotted"), d = a("<ul />").addClass(b.options.dotsClass), c = 0; c <= b.getDotCount(); c += 1) d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
            b.$dots = d.appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false") } }, b.prototype.buildOut = function() { var b = this;
        b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function(b, c) { a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "") }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable") }, b.prototype.buildRows = function() { var b, c, d, e, f, g, h, a = this; if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) { for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) { var i = document.createElement("div"); for (c = 0; c < a.options.rows; c++) { var j = document.createElement("div"); for (d = 0; d < a.options.slidesPerRow; d++) { var k = b * h + (c * a.options.slidesPerRow + d);
                        g.get(k) && j.appendChild(g.get(k)) }
                    i.appendChild(j) }
                e.appendChild(i) }
            a.$slider.empty().append(e), a.$slider.children().children().children().css({ width: 100 / a.options.slidesPerRow + "%", display: "inline-block" }) } }, b.prototype.checkResponsive = function(b, c) { var e, f, g, d = this,
            h = !1,
            i = d.$slider.width(),
            j = window.innerWidth || a(window).width(); if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) { f = null; for (e in d.breakpoints) d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
            null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h]) } }, b.prototype.changeSlide = function(b, c) { var f, g, h, d = this,
            e = a(b.currentTarget); switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
            case "previous":
                g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c); break;
            case "next":
                g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c); break;
            case "index":
                var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
                d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus"); break;
            default:
                return } }, b.prototype.checkNavigable = function(a) { var c, d, b = this; if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1];
        else
            for (var e in c) { if (a < c[e]) { a = d; break }
                d = c[e] }
        return a }, b.prototype.cleanUpEvents = function() { var b = this;
        b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), b.$slider.off("focus.slick blur.slick"), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition) }, b.prototype.cleanUpSlideEvents = function() { var b = this;
        b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1)) }, b.prototype.cleanUpRows = function() { var b, a = this;
        a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.empty().append(b)) }, b.prototype.clickHandler = function(a) { var b = this;
        b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault()) }, b.prototype.destroy = function(b) { var c = this;
        c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() { a(this).attr("style", a(this).data("originalStyling")) }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.$slider.removeClass("slick-dotted"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c]) }, b.prototype.disableTransition = function(a) { var b = this,
            c = {};
        c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c) }, b.prototype.fadeSlide = function(a, b) { var c = this;
        c.cssTransitions === !1 ? (c.$slides.eq(a).css({ zIndex: c.options.zIndex }), c.$slides.eq(a).animate({ opacity: 1 }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({ opacity: 1, zIndex: c.options.zIndex }), b && setTimeout(function() { c.disableTransition(a), b.call() }, c.options.speed)) }, b.prototype.fadeSlideOut = function(a) { var b = this;
        b.cssTransitions === !1 ? b.$slides.eq(a).animate({ opacity: 0, zIndex: b.options.zIndex - 2 }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({ opacity: 0, zIndex: b.options.zIndex - 2 })) }, b.prototype.filterSlides = b.prototype.slickFilter = function(a) { var b = this;
        null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit()) }, b.prototype.focusHandler = function() { var b = this;
        b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(c) { c.stopImmediatePropagation(); var d = a(this);
            setTimeout(function() { b.options.pauseOnFocus && (b.focussed = d.is(":focus"), b.autoPlay()) }, 0) }) }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function() { var a = this; return a.currentSlide }, b.prototype.getDotCount = function() { var a = this,
            b = 0,
            c = 0,
            d = 0; if (a.options.infinite === !0)
            for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        else if (a.options.centerMode === !0) d = a.slideCount;
        else if (a.options.asNavFor)
            for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll); return d - 1 }, b.prototype.getLeft = function(a) { var c, d, f, b = this,
            e = 0; return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c }, b.prototype.getOption = b.prototype.slickGetOption = function(a) { var b = this; return b.options[a] }, b.prototype.getNavigableIndexes = function() { var e, a = this,
            b = 0,
            c = 0,
            d = []; for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow; return d }, b.prototype.getSlick = function() { return this }, b.prototype.getSlideCount = function() { var c, d, e, b = this; return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function(c, f) { return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0 }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll }, b.prototype.goTo = b.prototype.slickGoTo = function(a, b) { var c = this;
        c.changeSlide({ data: { message: "index", index: parseInt(a) } }, b) }, b.prototype.init = function(b) { var c = this;
        a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA(), c.options.autoplay && (c.paused = !1, c.autoPlay()) }, b.prototype.initADA = function() { var b = this;
        b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c) { a(this).attr({ role: "option", "aria-describedby": "slick-slide" + b.instanceUid + c }) }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function(c) { a(this).attr({ role: "presentation", "aria-selected": "false", "aria-controls": "navigation" + b.instanceUid + c, id: "slick-slide" + b.instanceUid + c }) }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA() }, b.prototype.initArrowEvents = function() { var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, a.changeSlide)) }, b.prototype.initDotEvents = function() { var b = this;
        b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", { message: "index" }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1)) }, b.prototype.initSlideEvents = function() { var b = this;
        b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1))) }, b.prototype.initializeEvents = function() { var b = this;
        b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", { action: "start" }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", { action: "move" }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", { action: "end" }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition) }, b.prototype.initUI = function() { var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show() }, b.prototype.keyHandler = function(a) { var b = this;
        a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({ data: { message: b.options.rtl === !0 ? "next" : "previous" } }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({ data: { message: b.options.rtl === !0 ? "previous" : "next" } })) }, b.prototype.lazyLoad = function() {
        function g(c) { a("img[data-lazy]", c).each(function() { var c = a(this),
                    d = a(this).attr("data-lazy"),
                    e = document.createElement("img");
                e.onload = function() { c.animate({ opacity: 0 }, 100, function() { c.attr("src", d).animate({ opacity: 1 }, 200, function() { c.removeAttr("data-lazy").removeClass("slick-loading") }), b.$slider.trigger("lazyLoaded", [b, c, d]) }) }, e.onerror = function() { c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), b.$slider.trigger("lazyLoadError", [b, c, d]) }, e.src = d }) } var c, d, e, f, b = this;
        b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = Math.ceil(e + b.options.slidesToShow), b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d)) }, b.prototype.loadSlider = function() { var a = this;
        a.setPosition(), a.$slideTrack.css({ opacity: 1 }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad() }, b.prototype.next = b.prototype.slickNext = function() { var a = this;
        a.changeSlide({ data: { message: "next" } }) }, b.prototype.orientationChange = function() { var a = this;
        a.checkResponsive(), a.setPosition() }, b.prototype.pause = b.prototype.slickPause = function() { var a = this;
        a.autoPlayClear(), a.paused = !0 }, b.prototype.play = b.prototype.slickPlay = function() { var a = this;
        a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1 }, b.prototype.postSlide = function(a) { var b = this;
        b.unslicked || (b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay && b.autoPlay(), b.options.accessibility === !0 && b.initADA()) }, b.prototype.prev = b.prototype.slickPrev = function() { var a = this;
        a.changeSlide({ data: { message: "previous" } }) }, b.prototype.preventDefault = function(a) { a.preventDefault() }, b.prototype.progressiveLazyLoad = function(b) { b = b || 1; var e, f, g, c = this,
            d = a("img[data-lazy]", c.$slider);
        d.length ? (e = d.first(), f = e.attr("data-lazy"), g = document.createElement("img"), g.onload = function() { e.attr("src", f).removeAttr("data-lazy").removeClass("slick-loading"), c.options.adaptiveHeight === !0 && c.setPosition(), c.$slider.trigger("lazyLoaded", [c, e, f]), c.progressiveLazyLoad() }, g.onerror = function() { 3 > b ? setTimeout(function() { c.progressiveLazyLoad(b + 1) }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), c.$slider.trigger("lazyLoadError", [c, e, f]), c.progressiveLazyLoad()) }, g.src = f) : c.$slider.trigger("allImagesLoaded", [c]) }, b.prototype.refresh = function(b) { var d, e, c = this;
        e = c.slideCount - c.options.slidesToShow, !c.options.infinite && c.currentSlide > e && (c.currentSlide = e), c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, { currentSlide: d }), c.init(), b || c.changeSlide({ data: { message: "index", index: d } }, !1) }, b.prototype.registerBreakpoints = function() { var c, d, e, b = this,
            f = b.options.responsive || null; if ("array" === a.type(f) && f.length) { b.respondTo = b.options.respondTo || "window"; for (c in f)
                if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) { for (; e >= 0;) b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
                    b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings }
            b.breakpoints.sort(function(a, c) { return b.options.mobileFirst ? a - c : c - a }) } }, b.prototype.reinit = function() { var b = this;
        b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger("reInit", [b]) }, b.prototype.resize = function() { var b = this;
        a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function() { b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition() }, 50)) }, b.prototype.removeSlide = b.prototype.slickRemove = function(a, b, c) { var d = this; return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit()) }, b.prototype.setCSS = function(a) { var d, e, b = this,
            c = {};
        b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c))) }, b.prototype.setDimensions = function() { var a = this;
        a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({ padding: "0px " + a.options.centerPadding }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({ padding: a.options.centerPadding + " 0px" })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length))); var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
        a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b) }, b.prototype.setFade = function() { var c, b = this;
        b.$slides.each(function(d, e) { c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({ position: "relative", right: c, top: 0, zIndex: b.options.zIndex - 2, opacity: 0 }) : a(e).css({ position: "relative", left: c, top: 0, zIndex: b.options.zIndex - 2, opacity: 0 }) }), b.$slides.eq(b.currentSlide).css({ zIndex: b.options.zIndex - 1, opacity: 1 }) }, b.prototype.setHeight = function() { var a = this; if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) { var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.css("height", b) } }, b.prototype.setOption = b.prototype.slickSetOption = function() { var c, d, e, f, h, b = this,
            g = !1; if ("object" === a.type(arguments[0]) ? (e = arguments[0], g = arguments[1], h = "multiple") : "string" === a.type(arguments[0]) && (e = arguments[0], f = arguments[1], g = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? h = "responsive" : "undefined" != typeof arguments[1] && (h = "single")), "single" === h) b.options[e] = f;
        else if ("multiple" === h) a.each(e, function(a, c) { b.options[a] = c });
        else if ("responsive" === h)
            for (d in f)
                if ("array" !== a.type(b.options.responsive)) b.options.responsive = [f[d]];
                else { for (c = b.options.responsive.length - 1; c >= 0;) b.options.responsive[c].breakpoint === f[d].breakpoint && b.options.responsive.splice(c, 1), c--;
                    b.options.responsive.push(f[d]) }
        g && (b.unload(), b.reinit()) }, b.prototype.setPosition = function() { var a = this;
        a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a]) }, b.prototype.setProps = function() { var a = this,
            b = document.body.style;
        a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1 }, b.prototype.setSlideClasses = function(a) {
        var c, d, e, f, b = this;
        d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a,
            d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad()
    }, b.prototype.setupInfinite = function() { var c, d, e, b = this; if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) { for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned"); for (c = 0; e > c; c += 1) d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
            b.$slideTrack.find(".slick-cloned").find("[id]").each(function() { a(this).attr("id", "") }) } }, b.prototype.interrupt = function(a) { var b = this;
        a || b.autoPlay(), b.interrupted = a }, b.prototype.selectHandler = function(b) { var c = this,
            d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
            e = parseInt(d.attr("data-slick-index")); return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e) }, b.prototype.slideHandler = function(a, b, c) { var d, e, f, g, j, h = null,
            i = this; return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() { i.postSlide(d) }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() { i.postSlide(d) }) : i.postSlide(d))) : (i.options.autoplay && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.options.asNavFor && (j = i.getNavTarget(), j = j.slick("getSlick"), j.slideCount <= j.options.slidesToShow && j.setSlideClasses(i.currentSlide)), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function() { i.postSlide(e) })) : i.postSlide(e), void i.animateHeight()) : void(c !== !0 ? i.animateSlide(h, function() { i.postSlide(e) }) : i.postSlide(e)))) }, b.prototype.startLoad = function() { var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading") }, b.prototype.swipeDirection = function() { var a, b, c, d, e = this; return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "down" : "up" : "vertical" }, b.prototype.swipeEnd = function(a) { var c, d, b = this; if (b.dragging = !1, b.interrupted = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1; if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) { switch (d = b.swipeDirection()) {
                case "left":
                case "down":
                    c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.currentDirection = 0; break;
                case "right":
                case "up":
                    c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.currentDirection = 1 } "vertical" != d && (b.slideHandler(c), b.touchObject = {}, b.$slider.trigger("swipe", [b, d])) } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {}) }, b.prototype.swipeHandler = function(a) { var b = this; if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
            case "start":
                b.swipeStart(a); break;
            case "move":
                b.swipeMove(a); break;
            case "end":
                b.swipeEnd(a) } }, b.prototype.swipeMove = function(a) { var d, e, f, g, h, b = this; return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0) }, b.prototype.swipeStart = function(a) { var c, b = this; return b.interrupted = !0, 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void(b.dragging = !0)) }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function() { var a = this;
        null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit()) }, b.prototype.unload = function() { var b = this;
        a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "") }, b.prototype.unslick = function(a) { var b = this;
        b.$slider.trigger("unslick", [b, a]), b.destroy() }, b.prototype.updateArrows = function() { var b, a = this;
        b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))) }, b.prototype.updateDots = function() { var a = this;
        null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false")) }, b.prototype.visibility = function() { var a = this;
        a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1) }, a.fn.slick = function() { var f, g, a = this,
            c = arguments[0],
            d = Array.prototype.slice.call(arguments, 1),
            e = a.length; for (f = 0; e > f; f++)
            if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
        return a }
});


jQuery(window).load(function() {
    jQuery('.article-block').delay(300).scrollClass();
});

/*********************************************************************************************/


/*********************************************************************************************/
// 渐入效果
/*********************************************************************************************/
(function(jQuery) {
    $.fn.scrollClass = function(config) {
        var defaults = {};
        var config = jQuery.extend(defaults, config);
        var target = this;

        function addAction() {
            var length = target.length;
            for (var i = 0; i < length; i++) {
                if (target.eq(i).hasClass('articleShow')) continue;

                var in_position = target.eq(i).offset().top + 100;
                var window_bottom_position = jQuery(window).scrollTop() + jQuery(window).height();
                if (in_position < window_bottom_position) {
                    target.eq(i).addClass('articleShow');
                }
            }
        }
        addAction();

        jQuery(window).on('scroll', function() {
            addAction();
        });
        return target;
    };
})(jQuery);
/*********************************************************************************************/

(function(e) { "use strict";
    e.fn.counterUp = function(t) { var n = e.extend({ time: 400, delay: 10 }, t); return this.each(function() { var t = e(this),
                r = n,
                i = function() { var e = [],
                        n = r.time / r.delay,
                        i = t.text(),
                        s = /[0-9]+,[0-9]+/.test(i);
                    i = i.replace(/,/g, ""); var o = /^[0-9]+$/.test(i),
                        u = /^[0-9]+\.[0-9]+$/.test(i),
                        a = u ? (i.split(".")[1] || []).length : 0; for (var f = n; f >= 1; f--) { var l = parseInt(i / n * f);
                        u && (l = parseFloat(i / n * f).toFixed(a)); if (s)
                            while (/(\d+)(\d{3})/.test(l.toString())) l = l.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                        e.unshift(l) }
                    t.data("counterup-nums", e);
                    t.text("0"); var c = function() { t.text(t.data("counterup-nums").shift()); if (t.data("counterup-nums").length) setTimeout(t.data("counterup-func"), r.delay);
                        else { delete t.data("counterup-nums");
                            t.data("counterup-nums", null);
                            t.data("counterup-func", null) } };
                    t.data("counterup-func", c);
                    setTimeout(t.data("counterup-func"), r.delay) };
            t.waypoint(i, { offset: "100%", triggerOnce: !0 }) }) } })(jQuery);

(function() { var t = [].indexOf || function(t) { for (var e = 0, n = this.length; e < n; e++) { if (e in this && this[e] === t) return e } return -1 },
        e = [].slice;
    (function(t, e) { if (typeof define === "function" && define.amd) { return define("waypoints", ["jquery"], function(n) { return e(n, t) }) } else { return e(t.jQuery, t) } })(this, function(n, r) { var i, o, l, s, f, u, a, c, h, d, p, y, v, w, g, m;
        i = n(r);
        c = t.call(r, "ontouchstart") >= 0;
        s = { horizontal: {}, vertical: {} };
        f = 1;
        a = {};
        u = "waypoints-context-id";
        p = "resize.waypoints";
        y = "scroll.waypoints";
        v = 1;
        w = "waypoints-waypoint-ids";
        g = "waypoint";
        m = "waypoints";
        o = function() {
            function t(t) { var e = this;
                this.$element = t;
                this.element = t[0];
                this.didResize = false;
                this.didScroll = false;
                this.id = "context" + f++;
                this.oldScroll = { x: t.scrollLeft(), y: t.scrollTop() };
                this.waypoints = { horizontal: {}, vertical: {} };
                t.data(u, this.id);
                a[this.id] = this;
                t.bind(y, function() { var t; if (!(e.didScroll || c)) { e.didScroll = true;
                        t = function() { e.doScroll(); return e.didScroll = false }; return r.setTimeout(t, n[m].settings.scrollThrottle) } });
                t.bind(p, function() { var t; if (!e.didResize) { e.didResize = true;
                        t = function() { n[m]("refresh"); return e.didResize = false }; return r.setTimeout(t, n[m].settings.resizeThrottle) } }) }
            t.prototype.doScroll = function() { var t, e = this;
                t = { horizontal: { newScroll: this.$element.scrollLeft(), oldScroll: this.oldScroll.x, forward: "right", backward: "left" }, vertical: { newScroll: this.$element.scrollTop(), oldScroll: this.oldScroll.y, forward: "down", backward: "up" } }; if (c && (!t.vertical.oldScroll || !t.vertical.newScroll)) { n[m]("refresh") }
                n.each(t, function(t, r) { var i, o, l;
                    l = [];
                    o = r.newScroll > r.oldScroll;
                    i = o ? r.forward : r.backward;
                    n.each(e.waypoints[t], function(t, e) { var n, i; if (r.oldScroll < (n = e.offset) && n <= r.newScroll) { return l.push(e) } else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) { return l.push(e) } });
                    l.sort(function(t, e) { return t.offset - e.offset }); if (!o) { l.reverse() } return n.each(l, function(t, e) { if (e.options.continuous || t === l.length - 1) { return e.trigger([i]) } }) }); return this.oldScroll = { x: t.horizontal.newScroll, y: t.vertical.newScroll } };
            t.prototype.refresh = function() { var t, e, r, i = this;
                r = n.isWindow(this.element);
                e = this.$element.offset();
                this.doScroll();
                t = { horizontal: { contextOffset: r ? 0 : e.left, contextScroll: r ? 0 : this.oldScroll.x, contextDimension: this.$element.width(), oldScroll: this.oldScroll.x, forward: "right", backward: "left", offsetProp: "left" }, vertical: { contextOffset: r ? 0 : e.top, contextScroll: r ? 0 : this.oldScroll.y, contextDimension: r ? n[m]("viewportHeight") : this.$element.height(), oldScroll: this.oldScroll.y, forward: "down", backward: "up", offsetProp: "top" } }; return n.each(t, function(t, e) { return n.each(i.waypoints[t], function(t, r) { var i, o, l, s, f;
                        i = r.options.offset;
                        l = r.offset;
                        o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp]; if (n.isFunction(i)) { i = i.apply(r.element) } else if (typeof i === "string") { i = parseFloat(i); if (r.options.offset.indexOf("%") > -1) { i = Math.ceil(e.contextDimension * i / 100) } }
                        r.offset = o - e.contextOffset + e.contextScroll - i; if (r.options.onlyOnScroll && l != null || !r.enabled) { return } if (l !== null && l < (s = e.oldScroll) && s <= r.offset) { return r.trigger([e.backward]) } else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) { return r.trigger([e.forward]) } else if (l === null && e.oldScroll >= r.offset) { return r.trigger([e.forward]) } }) }) };
            t.prototype.checkEmpty = function() { if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) { this.$element.unbind([p, y].join(" ")); return delete a[this.id] } }; return t }();
        l = function() {
            function t(t, e, r) { var i, o;
                r = n.extend({}, n.fn[g].defaults, r); if (r.offset === "bottom-in-view") { r.offset = function() { var t;
                        t = n[m]("viewportHeight"); if (!n.isWindow(e.element)) { t = e.$element.height() } return t - n(this).outerHeight() } }
                this.$element = t;
                this.element = t[0];
                this.axis = r.horizontal ? "horizontal" : "vertical";
                this.callback = r.handler;
                this.context = e;
                this.enabled = r.enabled;
                this.id = "waypoints" + v++;
                this.offset = null;
                this.options = r;
                e.waypoints[this.axis][this.id] = this;
                s[this.axis][this.id] = this;
                i = (o = t.data(w)) != null ? o : [];
                i.push(this.id);
                t.data(w, i) }
            t.prototype.trigger = function(t) { if (!this.enabled) { return } if (this.callback != null) { this.callback.apply(this.element, t) } if (this.options.triggerOnce) { return this.destroy() } };
            t.prototype.disable = function() { return this.enabled = false };
            t.prototype.enable = function() { this.context.refresh(); return this.enabled = true };
            t.prototype.destroy = function() { delete s[this.axis][this.id];
                delete this.context.waypoints[this.axis][this.id]; return this.context.checkEmpty() };
            t.getWaypointsByElement = function(t) { var e, r;
                r = n(t).data(w); if (!r) { return [] }
                e = n.extend({}, s.horizontal, s.vertical); return n.map(r, function(t) { return e[t] }) }; return t }();
        d = { init: function(t, e) { var r; if (e == null) { e = {} } if ((r = e.handler) == null) { e.handler = t }
                this.each(function() { var t, r, i, s;
                    t = n(this);
                    i = (s = e.context) != null ? s : n.fn[g].defaults.context; if (!n.isWindow(i)) { i = t.closest(i) }
                    i = n(i);
                    r = a[i.data(u)]; if (!r) { r = new o(i) } return new l(t, r, e) });
                n[m]("refresh"); return this }, disable: function() { return d._invoke(this, "disable") }, enable: function() { return d._invoke(this, "enable") }, destroy: function() { return d._invoke(this, "destroy") }, prev: function(t, e) { return d._traverse.call(this, t, e, function(t, e, n) { if (e > 0) { return t.push(n[e - 1]) } }) }, next: function(t, e) { return d._traverse.call(this, t, e, function(t, e, n) { if (e < n.length - 1) { return t.push(n[e + 1]) } }) }, _traverse: function(t, e, i) { var o, l; if (t == null) { t = "vertical" } if (e == null) { e = r }
                l = h.aggregate(e);
                o = [];
                this.each(function() { var e;
                    e = n.inArray(this, l[t]); return i(o, e, l[t]) }); return this.pushStack(o) }, _invoke: function(t, e) { t.each(function() { var t;
                    t = l.getWaypointsByElement(this); return n.each(t, function(t, n) { n[e](); return true }) }); return this } };
        n.fn[g] = function() { var t, r;
            r = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : []; if (d[r]) { return d[r].apply(this, t) } else if (n.isFunction(r)) { return d.init.apply(this, arguments) } else if (n.isPlainObject(r)) { return d.init.apply(this, [null, r]) } else if (!r) { return n.error("jQuery Waypoints needs a callback function or handler option.") } else { return n.error("The " + r + " method does not exist in jQuery Waypoints.") } };
        n.fn[g].defaults = { context: r, continuous: true, enabled: true, horizontal: false, offset: 0, triggerOnce: false };
        h = { refresh: function() { return n.each(a, function(t, e) { return e.refresh() }) }, viewportHeight: function() { var t; return (t = r.innerHeight) != null ? t : i.height() }, aggregate: function(t) { var e, r, i;
                e = s; if (t) { e = (i = a[n(t).data(u)]) != null ? i.waypoints : void 0 } if (!e) { return [] }
                r = { horizontal: [], vertical: [] };
                n.each(r, function(t, i) { n.each(e[t], function(t, e) { return i.push(e) });
                    i.sort(function(t, e) { return t.offset - e.offset });
                    r[t] = n.map(i, function(t) { return t.element }); return r[t] = n.unique(r[t]) }); return r }, above: function(t) { if (t == null) { t = r } return h._filter(t, "vertical", function(t, e) { return e.offset <= t.oldScroll.y }) }, below: function(t) { if (t == null) { t = r } return h._filter(t, "vertical", function(t, e) { return e.offset > t.oldScroll.y }) }, left: function(t) { if (t == null) { t = r } return h._filter(t, "horizontal", function(t, e) { return e.offset <= t.oldScroll.x }) }, right: function(t) { if (t == null) { t = r } return h._filter(t, "horizontal", function(t, e) { return e.offset > t.oldScroll.x }) }, enable: function() { return h._invoke("enable") }, disable: function() { return h._invoke("disable") }, destroy: function() { return h._invoke("destroy") }, extendFn: function(t, e) { return d[t] = e }, _invoke: function(t) { var e;
                e = n.extend({}, s.vertical, s.horizontal); return n.each(e, function(e, n) { n[t](); return true }) }, _filter: function(t, e, r) { var i, o;
                i = a[n(t).data(u)]; if (!i) { return [] }
                o = [];
                n.each(i.waypoints[e], function(t, e) { if (r(i, e)) { return o.push(e) } });
                o.sort(function(t, e) { return t.offset - e.offset }); return n.map(o, function(t) { return t.element }) } };
        n[m] = function() { var t, n;
            n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : []; if (h[n]) { return h[n].apply(null, t) } else { return h.aggregate.call(null, n) } };
        n[m].settings = { resizeThrottle: 100, scrollThrottle: 30 }; return i.load(function() { return n[m]("refresh") }) }) }).call(this);