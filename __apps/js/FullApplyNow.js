/*
* Copyright 2015. Elliemae Inc.
* Autor: Adiel Hercules
* Web Developer
* twitter: @adielhercules
*/


/************************ INICIO SEGUNDA PAGINA ***********************/
/***************************** SECOND PAGE ****************************/

(function (e) { function t() { var e = document.createElement("input"), t = "onpaste"; return e.setAttribute(t, ""), "function" == typeof e[t] ? "paste" : "input" } var n, a = t() + ".mask", r = navigator.userAgent, i = /iphone/i.test(r), o = /android/i.test(r); e.mask = { definitions: { 9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]" }, dataName: "rawMaskFn", placeholder: "_" }, e.fn.extend({ caret: function (e, t) { var n; if (0 !== this.length && !this.is(":hidden")) return "number" == typeof e ? (t = "number" == typeof t ? t : e, this.each(function () { this.setSelectionRange ? this.setSelectionRange(e, t) : this.createTextRange && (n = this.createTextRange(), n.collapse(!0), n.moveEnd("character", t), n.moveStart("character", e), n.select()) })) : (this[0].setSelectionRange ? (e = this[0].selectionStart, t = this[0].selectionEnd) : document.selection && document.selection.createRange && (n = document.selection.createRange(), e = 0 - n.duplicate().moveStart("character", -1e5), t = e + n.text.length), { begin: e, end: t }) }, unmask: function () { return this.trigger("unmask") }, mask: function (t, r) { var c, l, s, u, f, h; return !t && this.length > 0 ? (c = e(this[0]), c.data(e.mask.dataName)()) : (r = e.extend({ placeholder: e.mask.placeholder, completed: null }, r), l = e.mask.definitions, s = [], u = h = t.length, f = null, e.each(t.split(""), function (e, t) { "?" == t ? (h--, u = e) : l[t] ? (s.push(RegExp(l[t])), null === f && (f = s.length - 1)) : s.push(null) }), this.trigger("unmask").each(function () { function c(e) { for (; h > ++e && !s[e];); return e } function d(e) { for (; --e >= 0 && !s[e];); return e } function m(e, t) { var n, a; if (!(0 > e)) { for (n = e, a = c(t) ; h > n; n++) if (s[n]) { if (!(h > a && s[n].test(R[a]))) break; R[n] = R[a], R[a] = r.placeholder, a = c(a) } b(), x.caret(Math.max(f, e)) } } function p(e) { var t, n, a, i; for (t = e, n = r.placeholder; h > t; t++) if (s[t]) { if (a = c(t), i = R[t], R[t] = n, !(h > a && s[a].test(i))) break; n = i } } function g(e) { var t, n, a, r = e.which; 8 === r || 46 === r || i && 127 === r ? (t = x.caret(), n = t.begin, a = t.end, 0 === a - n && (n = 46 !== r ? d(n) : a = c(n - 1), a = 46 === r ? c(a) : a), k(n, a), m(n, a - 1), e.preventDefault()) : 27 == r && (x.val(S), x.caret(0, y()), e.preventDefault()) } function v(t) { var n, a, i, l = t.which, u = x.caret(); t.ctrlKey || t.altKey || t.metaKey || 32 > l || l && (0 !== u.end - u.begin && (k(u.begin, u.end), m(u.begin, u.end - 1)), n = c(u.begin - 1), h > n && (a = String.fromCharCode(l), s[n].test(a) && (p(n), R[n] = a, b(), i = c(n), o ? setTimeout(e.proxy(e.fn.caret, x, i), 0) : x.caret(i), r.completed && i >= h && r.completed.call(x))), t.preventDefault()) } function k(e, t) { var n; for (n = e; t > n && h > n; n++) s[n] && (R[n] = r.placeholder) } function b() { x.val(R.join("")) } function y(e) { var t, n, a = x.val(), i = -1; for (t = 0, pos = 0; h > t; t++) if (s[t]) { for (R[t] = r.placeholder; pos++ < a.length;) if (n = a.charAt(pos - 1), s[t].test(n)) { R[t] = n, i = t; break } if (pos > a.length) break } else R[t] === a.charAt(pos) && t !== u && (pos++, i = t); return e ? b() : u > i + 1 ? (x.val(""), k(0, h)) : (b(), x.val(x.val().substring(0, i + 1))), u ? t : f } var x = e(this), R = e.map(t.split(""), function (e) { return "?" != e ? l[e] ? r.placeholder : e : void 0 }), S = x.val(); x.data(e.mask.dataName, function () { return e.map(R, function (e, t) { return s[t] && e != r.placeholder ? e : null }).join("") }), x.attr("readonly") || x.one("unmask", function () { x.unbind(".mask").removeData(e.mask.dataName) }).bind("focus.mask", function () { clearTimeout(n); var e; S = x.val(), e = y(), n = setTimeout(function () { b(), e == t.length ? x.caret(0, e) : x.caret(e) }, 10) }).bind("blur.mask", function () { y(), x.val() != S && x.change() }).bind("keydown.mask", g).bind("keypress.mask", v).bind(a, function () { setTimeout(function () { var e = y(!0); x.caret(e), r.completed && e == x.val().length && r.completed.call(x) }, 0) }), y() })) } }) })(jQuery);



/*! iCheck v1.0.2 by Damir Sultanov, http://git.io/arlzeA, MIT Licensed */
(function(f){function A(a,b,d){var c=a[0],g=/er/.test(d)?_indeterminate:/bl/.test(d)?n:k,e=d==_update?{checked:c[k],disabled:c[n],indeterminate:"true"==a.attr(_indeterminate)||"false"==a.attr(_determinate)}:c[g];if(/^(ch|di|in)/.test(d)&&!e)x(a,g);else if(/^(un|en|de)/.test(d)&&e)q(a,g);else if(d==_update)for(var f in e)e[f]?x(a,f,!0):q(a,f,!0);else if(!b||"toggle"==d){if(!b)a[_callback]("ifClicked");e?c[_type]!==r&&q(a,g):x(a,g)}}function x(a,b,d){var c=a[0],g=a.parent(),e=b==k,u=b==_indeterminate,
v=b==n,s=u?_determinate:e?y:"enabled",F=l(a,s+t(c[_type])),B=l(a,b+t(c[_type]));if(!0!==c[b]){if(!d&&b==k&&c[_type]==r&&c.name){var w=a.closest("form"),p='input[name="'+c.name+'"]',p=w.length?w.find(p):f(p);p.each(function(){this!==c&&f(this).data(m)&&q(f(this),b)})}u?(c[b]=!0,c[k]&&q(a,k,"force")):(d||(c[b]=!0),e&&c[_indeterminate]&&q(a,_indeterminate,!1));D(a,e,b,d)}c[n]&&l(a,_cursor,!0)&&g.find("."+C).css(_cursor,"default");g[_add](B||l(a,b)||"");g.attr("role")&&!u&&g.attr("aria-"+(v?n:k),"true");
g[_remove](F||l(a,s)||"")}function q(a,b,d){var c=a[0],g=a.parent(),e=b==k,f=b==_indeterminate,m=b==n,s=f?_determinate:e?y:"enabled",q=l(a,s+t(c[_type])),r=l(a,b+t(c[_type]));if(!1!==c[b]){if(f||!d||"force"==d)c[b]=!1;D(a,e,s,d)}!c[n]&&l(a,_cursor,!0)&&g.find("."+C).css(_cursor,"pointer");g[_remove](r||l(a,b)||"");g.attr("role")&&!f&&g.attr("aria-"+(m?n:k),"false");g[_add](q||l(a,s)||"")}function E(a,b){if(a.data(m)){a.parent().html(a.attr("style",a.data(m).s||""));if(b)a[_callback](b);a.off(".i").unwrap();
f(_label+'[for="'+a[0].id+'"]').add(a.closest(_label)).off(".i")}}function l(a,b,f){if(a.data(m))return a.data(m).o[b+(f?"":"Class")]}function t(a){return a.charAt(0).toUpperCase()+a.slice(1)}function D(a,b,f,c){if(!c){if(b)a[_callback]("ifToggled");a[_callback]("ifChanged")[_callback]("if"+t(f))}}var m="iCheck",C=m+"-helper",r="radio",k="checked",y="un"+k,n="disabled";_determinate="determinate";_indeterminate="in"+_determinate;_update="update";_type="type";_click="click";_touch="touchbegin.i touchend.i";
_add="addClass";_remove="removeClass";_callback="trigger";_label="label";_cursor="cursor";_mobile=/ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);f.fn[m]=function(a,b){var d='input[type="checkbox"], input[type="'+r+'"]',c=f(),g=function(a){a.each(function(){var a=f(this);c=a.is(d)?c.add(a):c.add(a.find(d))})};if(/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(a))return a=a.toLowerCase(),g(this),c.each(function(){var c=
f(this);"destroy"==a?E(c,"ifDestroyed"):A(c,!0,a);f.isFunction(b)&&b()});if("object"!=typeof a&&a)return this;var e=f.extend({checkedClass:k,disabledClass:n,indeterminateClass:_indeterminate,labelHover:!0},a),l=e.handle,v=e.hoverClass||"hover",s=e.focusClass||"focus",t=e.activeClass||"active",B=!!e.labelHover,w=e.labelHoverClass||"hover",p=(""+e.increaseArea).replace("%","")|0;if("checkbox"==l||l==r)d='input[type="'+l+'"]';-50>p&&(p=-50);g(this);return c.each(function(){var a=f(this);E(a);var c=this,
b=c.id,g=-p+"%",d=100+2*p+"%",d={position:"absolute",top:g,left:g,display:"block",width:d,height:d,margin:0,padding:0,background:"#fff",border:0,opacity:0},g=_mobile?{position:"absolute",visibility:"hidden"}:p?d:{position:"absolute",opacity:0},l="checkbox"==c[_type]?e.checkboxClass||"icheckbox":e.radioClass||"i"+r,z=f(_label+'[for="'+b+'"]').add(a.closest(_label)),u=!!e.aria,y=m+"-"+Math.random().toString(36).substr(2,6),h='<div class="'+l+'" '+(u?'role="'+c[_type]+'" ':"");u&&z.each(function(){h+=
'aria-labelledby="';this.id?h+=this.id:(this.id=y,h+=y);h+='"'});h=a.wrap(h+"/>")[_callback]("ifCreated").parent().append(e.insert);d=f('<ins class="'+C+'"/>').css(d).appendTo(h);a.data(m,{o:e,s:a.attr("style")}).css(g);e.inheritClass&&h[_add](c.className||"");e.inheritID&&b&&h.attr("id",m+"-"+b);"static"==h.css("position")&&h.css("position","relative");A(a,!0,_update);if(z.length)z.on(_click+".i mouseover.i mouseout.i "+_touch,function(b){var d=b[_type],e=f(this);if(!c[n]){if(d==_click){if(f(b.target).is("a"))return;
A(a,!1,!0)}else B&&(/ut|nd/.test(d)?(h[_remove](v),e[_remove](w)):(h[_add](v),e[_add](w)));if(_mobile)b.stopPropagation();else return!1}});a.on(_click+".i focus.i blur.i keyup.i keydown.i keypress.i",function(b){var d=b[_type];b=b.keyCode;if(d==_click)return!1;if("keydown"==d&&32==b)return c[_type]==r&&c[k]||(c[k]?q(a,k):x(a,k)),!1;if("keyup"==d&&c[_type]==r)!c[k]&&x(a,k);else if(/us|ur/.test(d))h["blur"==d?_remove:_add](s)});d.on(_click+" mousedown mouseup mouseover mouseout "+_touch,function(b){var d=
b[_type],e=/wn|up/.test(d)?t:v;if(!c[n]){if(d==_click)A(a,!1,!0);else{if(/wn|er|in/.test(d))h[_add](e);else h[_remove](e+" "+t);if(z.length&&B&&e==v)z[/ut|nd/.test(d)?_remove:_add](w)}if(_mobile)b.stopPropagation();else return!1}})})}})(window.jQuery||window.Zepto);




/*! Select2 4.0.0 | https://github.com/select2/select2/blob/master/LICENSE.md */!function (a) { "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery) }(function (a) {
    var b = function () {
        if (a && a.fn && a.fn.select2 && a.fn.select2.amd) var b = a.fn.select2.amd; var b; return function () { if (!b || !b.requirejs) { b ? c = b : b = {}; var a, c, d; !function (b) { function e(a, b) { return u.call(a, b) } function f(a, b) { var c, d, e, f, g, h, i, j, k, l, m, n = b && b.split("/"), o = s.map, p = o && o["*"] || {}; if (a && "." === a.charAt(0)) if (b) { for (n = n.slice(0, n.length - 1), a = a.split("/"), g = a.length - 1, s.nodeIdCompat && w.test(a[g]) && (a[g] = a[g].replace(w, "")), a = n.concat(a), k = 0; k < a.length; k += 1) if (m = a[k], "." === m) a.splice(k, 1), k -= 1; else if (".." === m) { if (1 === k && (".." === a[2] || ".." === a[0])) break; k > 0 && (a.splice(k - 1, 2), k -= 2) } a = a.join("/") } else 0 === a.indexOf("./") && (a = a.substring(2)); if ((n || p) && o) { for (c = a.split("/"), k = c.length; k > 0; k -= 1) { if (d = c.slice(0, k).join("/"), n) for (l = n.length; l > 0; l -= 1) if (e = o[n.slice(0, l).join("/")], e && (e = e[d])) { f = e, h = k; break } if (f) break; !i && p && p[d] && (i = p[d], j = k) } !f && i && (f = i, h = j), f && (c.splice(0, h, f), a = c.join("/")) } return a } function g(a, c) { return function () { return n.apply(b, v.call(arguments, 0).concat([a, c])) } } function h(a) { return function (b) { return f(b, a) } } function i(a) { return function (b) { q[a] = b } } function j(a) { if (e(r, a)) { var c = r[a]; delete r[a], t[a] = !0, m.apply(b, c) } if (!e(q, a) && !e(t, a)) throw new Error("No " + a); return q[a] } function k(a) { var b, c = a ? a.indexOf("!") : -1; return c > -1 && (b = a.substring(0, c), a = a.substring(c + 1, a.length)), [b, a] } function l(a) { return function () { return s && s.config && s.config[a] || {} } } var m, n, o, p, q = {}, r = {}, s = {}, t = {}, u = Object.prototype.hasOwnProperty, v = [].slice, w = /\.js$/; o = function (a, b) { var c, d = k(a), e = d[0]; return a = d[1], e && (e = f(e, b), c = j(e)), e ? a = c && c.normalize ? c.normalize(a, h(b)) : f(a, b) : (a = f(a, b), d = k(a), e = d[0], a = d[1], e && (c = j(e))), { f: e ? e + "!" + a : a, n: a, pr: e, p: c } }, p = { require: function (a) { return g(a) }, exports: function (a) { var b = q[a]; return "undefined" != typeof b ? b : q[a] = {} }, module: function (a) { return { id: a, uri: "", exports: q[a], config: l(a) } } }, m = function (a, c, d, f) { var h, k, l, m, n, s, u = [], v = typeof d; if (f = f || a, "undefined" === v || "function" === v) { for (c = !c.length && d.length ? ["require", "exports", "module"] : c, n = 0; n < c.length; n += 1) if (m = o(c[n], f), k = m.f, "require" === k) u[n] = p.require(a); else if ("exports" === k) u[n] = p.exports(a), s = !0; else if ("module" === k) h = u[n] = p.module(a); else if (e(q, k) || e(r, k) || e(t, k)) u[n] = j(k); else { if (!m.p) throw new Error(a + " missing " + k); m.p.load(m.n, g(f, !0), i(k), {}), u[n] = q[k] } l = d ? d.apply(q[a], u) : void 0, a && (h && h.exports !== b && h.exports !== q[a] ? q[a] = h.exports : l === b && s || (q[a] = l)) } else a && (q[a] = d) }, a = c = n = function (a, c, d, e, f) { if ("string" == typeof a) return p[a] ? p[a](c) : j(o(a, c).f); if (!a.splice) { if (s = a, s.deps && n(s.deps, s.callback), !c) return; c.splice ? (a = c, c = d, d = null) : a = b } return c = c || function () { }, "function" == typeof d && (d = e, e = f), e ? m(b, a, c, d) : setTimeout(function () { m(b, a, c, d) }, 4), n }, n.config = function (a) { return n(a) }, a._defined = q, d = function (a, b, c) { b.splice || (c = b, b = []), e(q, a) || e(r, a) || (r[a] = [a, b, c]) }, d.amd = { jQuery: !0 } }(), b.requirejs = a, b.require = c, b.define = d } }(), b.define("almond", function () { }), b.define("jquery", [], function () { var b = a || $; return null == b && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), b }), b.define("select2/utils", ["jquery"], function (a) { function b(a) { var b = a.prototype, c = []; for (var d in b) { var e = b[d]; "function" == typeof e && "constructor" !== d && c.push(d) } return c } var c = {}; c.Extend = function (a, b) { function c() { this.constructor = a } var d = {}.hasOwnProperty; for (var e in b) d.call(b, e) && (a[e] = b[e]); return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a }, c.Decorate = function (a, c) { function d() { var b = Array.prototype.unshift, d = c.prototype.constructor.length, e = a.prototype.constructor; d > 0 && (b.call(arguments, a.prototype.constructor), e = c.prototype.constructor), e.apply(this, arguments) } function e() { this.constructor = d } var f = b(c), g = b(a); c.displayName = a.displayName, d.prototype = new e; for (var h = 0; h < g.length; h++) { var i = g[h]; d.prototype[i] = a.prototype[i] } for (var j = (function (a) { var b = function () { }; a in d.prototype && (b = d.prototype[a]); var e = c.prototype[a]; return function () { var a = Array.prototype.unshift; return a.call(arguments, b), e.apply(this, arguments) } }), k = 0; k < f.length; k++) { var l = f[k]; d.prototype[l] = j(l) } return d }; var d = function () { this.listeners = {} }; return d.prototype.on = function (a, b) { this.listeners = this.listeners || {}, a in this.listeners ? this.listeners[a].push(b) : this.listeners[a] = [b] }, d.prototype.trigger = function (a) { var b = Array.prototype.slice; this.listeners = this.listeners || {}, a in this.listeners && this.invoke(this.listeners[a], b.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments) }, d.prototype.invoke = function (a, b) { for (var c = 0, d = a.length; d > c; c++) a[c].apply(this, b) }, c.Observable = d, c.generateChars = function (a) { for (var b = "", c = 0; a > c; c++) { var d = Math.floor(36 * Math.random()); b += d.toString(36) } return b }, c.bind = function (a, b) { return function () { a.apply(b, arguments) } }, c._convertData = function (a) { for (var b in a) { var c = b.split("-"), d = a; if (1 !== c.length) { for (var e = 0; e < c.length; e++) { var f = c[e]; f = f.substring(0, 1).toLowerCase() + f.substring(1), f in d || (d[f] = {}), e == c.length - 1 && (d[f] = a[b]), d = d[f] } delete a[b] } } return a }, c.hasScroll = function (b, c) { var d = a(c), e = c.style.overflowX, f = c.style.overflowY; return e !== f || "hidden" !== f && "visible" !== f ? "scroll" === e || "scroll" === f ? !0 : d.innerHeight() < c.scrollHeight || d.innerWidth() < c.scrollWidth : !1 }, c.escapeMarkup = function (a) { var b = { "\\": "&#92;", "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#47;" }; return "string" != typeof a ? a : String(a).replace(/[&<>"'\/\\]/g, function (a) { return b[a] }) }, c.appendMany = function (b, c) { if ("1.7" === a.fn.jquery.substr(0, 3)) { var d = a(); a.map(c, function (a) { d = d.add(a) }), c = d } b.append(c) }, c }), b.define("select2/results", ["jquery", "./utils"], function (a, b) { function c(a, b, d) { this.$element = a, this.data = d, this.options = b, c.__super__.constructor.call(this) } return b.Extend(c, b.Observable), c.prototype.render = function () { var b = a('<ul class="select2-results__options" role="tree"></ul>'); return this.options.get("multiple") && b.attr("aria-multiselectable", "true"), this.$results = b, b }, c.prototype.clear = function () { this.$results.empty() }, c.prototype.displayMessage = function (b) { var c = this.options.get("escapeMarkup"); this.clear(), this.hideLoading(); var d = a('<li role="treeitem" class="select2-results__option"></li>'), e = this.options.get("translations").get(b.message); d.append(c(e(b.args))), this.$results.append(d) }, c.prototype.append = function (a) { this.hideLoading(); var b = []; if (null == a.results || 0 === a.results.length) return void (0 === this.$results.children().length && this.trigger("results:message", { message: "noResults" })); a.results = this.sort(a.results); for (var c = 0; c < a.results.length; c++) { var d = a.results[c], e = this.option(d); b.push(e) } this.$results.append(b) }, c.prototype.position = function (a, b) { var c = b.find(".select2-results"); c.append(a) }, c.prototype.sort = function (a) { var b = this.options.get("sorter"); return b(a) }, c.prototype.setClasses = function () { var b = this; this.data.current(function (c) { var d = a.map(c, function (a) { return a.id.toString() }), e = b.$results.find(".select2-results__option[aria-selected]"); e.each(function () { var b = a(this), c = a.data(this, "data"), e = "" + c.id; null != c.element && c.element.selected || null == c.element && a.inArray(e, d) > -1 ? b.attr("aria-selected", "true") : b.attr("aria-selected", "false") }); var f = e.filter("[aria-selected=true]"); f.length > 0 ? f.first().trigger("mouseenter") : e.first().trigger("mouseenter") }) }, c.prototype.showLoading = function (a) { this.hideLoading(); var b = this.options.get("translations").get("searching"), c = { disabled: !0, loading: !0, text: b(a) }, d = this.option(c); d.className += " loading-results", this.$results.prepend(d) }, c.prototype.hideLoading = function () { this.$results.find(".loading-results").remove() }, c.prototype.option = function (b) { var c = document.createElement("li"); c.className = "select2-results__option"; var d = { role: "treeitem", "aria-selected": "false" }; b.disabled && (delete d["aria-selected"], d["aria-disabled"] = "true"), null == b.id && delete d["aria-selected"], null != b._resultId && (c.id = b._resultId), b.title && (c.title = b.title), b.children && (d.role = "group", d["aria-label"] = b.text, delete d["aria-selected"]); for (var e in d) { var f = d[e]; c.setAttribute(e, f) } if (b.children) { var g = a(c), h = document.createElement("strong"); h.className = "select2-results__group"; { a(h) } this.template(b, h); for (var i = [], j = 0; j < b.children.length; j++) { var k = b.children[j], l = this.option(k); i.push(l) } var m = a("<ul></ul>", { "class": "select2-results__options select2-results__options--nested" }); m.append(i), g.append(h), g.append(m) } else this.template(b, c); return a.data(c, "data", b), c }, c.prototype.bind = function (b) { var c = this, d = b.id + "-results"; this.$results.attr("id", d), b.on("results:all", function (a) { c.clear(), c.append(a.data), b.isOpen() && c.setClasses() }), b.on("results:append", function (a) { c.append(a.data), b.isOpen() && c.setClasses() }), b.on("query", function (a) { c.showLoading(a) }), b.on("select", function () { b.isOpen() && c.setClasses() }), b.on("unselect", function () { b.isOpen() && c.setClasses() }), b.on("open", function () { c.$results.attr("aria-expanded", "true"), c.$results.attr("aria-hidden", "false"), c.setClasses(), c.ensureHighlightVisible() }), b.on("close", function () { c.$results.attr("aria-expanded", "false"), c.$results.attr("aria-hidden", "true"), c.$results.removeAttr("aria-activedescendant") }), b.on("results:toggle", function () { var a = c.getHighlightedResults(); 0 !== a.length && a.trigger("mouseup") }), b.on("results:select", function () { var a = c.getHighlightedResults(); if (0 !== a.length) { var b = a.data("data"); "true" == a.attr("aria-selected") ? c.trigger("close") : c.trigger("select", { data: b }) } }), b.on("results:previous", function () { var a = c.getHighlightedResults(), b = c.$results.find("[aria-selected]"), d = b.index(a); if (0 !== d) { var e = d - 1; 0 === a.length && (e = 0); var f = b.eq(e); f.trigger("mouseenter"); var g = c.$results.offset().top, h = f.offset().top, i = c.$results.scrollTop() + (h - g); 0 === e ? c.$results.scrollTop(0) : 0 > h - g && c.$results.scrollTop(i) } }), b.on("results:next", function () { var a = c.getHighlightedResults(), b = c.$results.find("[aria-selected]"), d = b.index(a), e = d + 1; if (!(e >= b.length)) { var f = b.eq(e); f.trigger("mouseenter"); var g = c.$results.offset().top + c.$results.outerHeight(!1), h = f.offset().top + f.outerHeight(!1), i = c.$results.scrollTop() + h - g; 0 === e ? c.$results.scrollTop(0) : h > g && c.$results.scrollTop(i) } }), b.on("results:focus", function (a) { a.element.addClass("select2-results__option--highlighted") }), b.on("results:message", function (a) { c.displayMessage(a) }), a.fn.mousewheel && this.$results.on("mousewheel", function (a) { var b = c.$results.scrollTop(), d = c.$results.get(0).scrollHeight - c.$results.scrollTop() + a.deltaY, e = a.deltaY > 0 && b - a.deltaY <= 0, f = a.deltaY < 0 && d <= c.$results.height(); e ? (c.$results.scrollTop(0), a.preventDefault(), a.stopPropagation()) : f && (c.$results.scrollTop(c.$results.get(0).scrollHeight - c.$results.height()), a.preventDefault(), a.stopPropagation()) }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (b) { var d = a(this), e = d.data("data"); return "true" === d.attr("aria-selected") ? void (c.options.get("multiple") ? c.trigger("unselect", { originalEvent: b, data: e }) : c.trigger("close")) : void c.trigger("select", { originalEvent: b, data: e }) }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function () { var b = a(this).data("data"); c.getHighlightedResults().removeClass("select2-results__option--highlighted"), c.trigger("results:focus", { data: b, element: a(this) }) }) }, c.prototype.getHighlightedResults = function () { var a = this.$results.find(".select2-results__option--highlighted"); return a }, c.prototype.destroy = function () { this.$results.remove() }, c.prototype.ensureHighlightVisible = function () { var a = this.getHighlightedResults(); if (0 !== a.length) { var b = this.$results.find("[aria-selected]"), c = b.index(a), d = this.$results.offset().top, e = a.offset().top, f = this.$results.scrollTop() + (e - d), g = e - d; f -= 2 * a.outerHeight(!1), 2 >= c ? this.$results.scrollTop(0) : (g > this.$results.outerHeight() || 0 > g) && this.$results.scrollTop(f) } }, c.prototype.template = function (b, c) { var d = this.options.get("templateResult"), e = this.options.get("escapeMarkup"), f = d(b); null == f ? c.style.display = "none" : "string" == typeof f ? c.innerHTML = e(f) : a(c).append(f) }, c }), b.define("select2/keys", [], function () { var a = { BACKSPACE: 8, TAB: 9, ENTER: 13, SHIFT: 16, CTRL: 17, ALT: 18, ESC: 27, SPACE: 32, PAGE_UP: 33, PAGE_DOWN: 34, END: 35, HOME: 36, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, DELETE: 46 }; return a }), b.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (a, b, c) { function d(a, b) { this.$element = a, this.options = b, d.__super__.constructor.call(this) } return b.Extend(d, b.Observable), d.prototype.render = function () { var b = a('<span class="select2-selection" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false"></span>'); return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), b.attr("title", this.$element.attr("title")), b.attr("tabindex", this._tabindex), this.$selection = b, b }, d.prototype.bind = function (a) { var b = this, d = (a.id + "-container", a.id + "-results"); this.container = a, this.$selection.on("focus", function (a) { b.trigger("focus", a) }), this.$selection.on("blur", function (a) { b.trigger("blur", a) }), this.$selection.on("keydown", function (a) { b.trigger("keypress", a), a.which === c.SPACE && a.preventDefault() }), a.on("results:focus", function (a) { b.$selection.attr("aria-activedescendant", a.data._resultId) }), a.on("selection:update", function (a) { b.update(a.data) }), a.on("open", function () { b.$selection.attr("aria-expanded", "true"), b.$selection.attr("aria-owns", d), b._attachCloseHandler(a) }), a.on("close", function () { b.$selection.attr("aria-expanded", "false"), b.$selection.removeAttr("aria-activedescendant"), b.$selection.removeAttr("aria-owns"), b.$selection.focus(), b._detachCloseHandler(a) }), a.on("enable", function () { b.$selection.attr("tabindex", b._tabindex) }), a.on("disable", function () { b.$selection.attr("tabindex", "-1") }) }, d.prototype._attachCloseHandler = function (b) { a(document.body).on("mousedown.select2." + b.id, function (b) { var c = a(b.target), d = c.closest(".select2"), e = a(".select2.select2-container--open"); e.each(function () { var b = a(this); if (this != d[0]) { var c = b.data("element"); c.select2("close") } }) }) }, d.prototype._detachCloseHandler = function (b) { a(document.body).off("mousedown.select2." + b.id) }, d.prototype.position = function (a, b) { var c = b.find(".selection"); c.append(a) }, d.prototype.destroy = function () { this._detachCloseHandler(this.container) }, d.prototype.update = function () { throw new Error("The `update` method must be defined in child classes.") }, d }), b.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (a, b, c) { function d() { d.__super__.constructor.apply(this, arguments) } return c.Extend(d, b), d.prototype.render = function () { var a = d.__super__.render.call(this); return a.addClass("select2-selection--single"), a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), a }, d.prototype.bind = function (a) { var b = this; d.__super__.bind.apply(this, arguments); var c = a.id + "-container"; this.$selection.find(".select2-selection__rendered").attr("id", c), this.$selection.attr("aria-labelledby", c), this.$selection.on("mousedown", function (a) { 1 === a.which && b.trigger("toggle", { originalEvent: a }) }), this.$selection.on("focus", function () { }), this.$selection.on("blur", function () { }), a.on("selection:update", function (a) { b.update(a.data) }) }, d.prototype.clear = function () { this.$selection.find(".select2-selection__rendered").empty() }, d.prototype.display = function (a) { var b = this.options.get("templateSelection"), c = this.options.get("escapeMarkup"); return c(b(a)) }, d.prototype.selectionContainer = function () { return a("<span></span>") }, d.prototype.update = function (a) { if (0 === a.length) return void this.clear(); var b = a[0], c = this.display(b), d = this.$selection.find(".select2-selection__rendered"); d.empty().append(c), d.prop("title", b.title || b.text) }, d }), b.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (a, b, c) { function d() { d.__super__.constructor.apply(this, arguments) } return c.Extend(d, b), d.prototype.render = function () { var a = d.__super__.render.call(this); return a.addClass("select2-selection--multiple"), a.html('<ul class="select2-selection__rendered"></ul>'), a }, d.prototype.bind = function () { var b = this; d.__super__.bind.apply(this, arguments), this.$selection.on("click", function (a) { b.trigger("toggle", { originalEvent: a }) }), this.$selection.on("click", ".select2-selection__choice__remove", function (c) { var d = a(this), e = d.parent(), f = e.data("data"); b.trigger("unselect", { originalEvent: c, data: f }) }) }, d.prototype.clear = function () { this.$selection.find(".select2-selection__rendered").empty() }, d.prototype.display = function (a) { var b = this.options.get("templateSelection"), c = this.options.get("escapeMarkup"); return c(b(a)) }, d.prototype.selectionContainer = function () { var b = a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>'); return b }, d.prototype.update = function (a) { if (this.clear(), 0 !== a.length) { for (var b = [], d = 0; d < a.length; d++) { var e = a[d], f = this.display(e), g = this.selectionContainer(); g.append(f), g.prop("title", e.title || e.text), g.data("data", e), b.push(g) } var h = this.$selection.find(".select2-selection__rendered"); c.appendMany(h, b) } }, d }), b.define("select2/selection/placeholder", ["../utils"], function () { function a(a, b, c) { this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c) } return a.prototype.normalizePlaceholder = function (a, b) { return "string" == typeof b && (b = { id: "", text: b }), b }, a.prototype.createPlaceholder = function (a, b) { var c = this.selectionContainer(); return c.html(this.display(b)), c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), c }, a.prototype.update = function (a, b) { var c = 1 == b.length && b[0].id != this.placeholder.id, d = b.length > 1; if (d || c) return a.call(this, b); this.clear(); var e = this.createPlaceholder(this.placeholder); this.$selection.find(".select2-selection__rendered").append(e) }, a }), b.define("select2/selection/allowClear", ["jquery", "../keys"], function (a, b) { function c() { } return c.prototype.bind = function (a, b, c) { var d = this; a.call(this, b, c), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function (a) { d._handleClear(a) }), b.on("keypress", function (a) { d._handleKeyboardClear(a, b) }) }, c.prototype._handleClear = function (a, b) { if (!this.options.get("disabled")) { var c = this.$selection.find(".select2-selection__clear"); if (0 !== c.length) { b.stopPropagation(); for (var d = c.data("data"), e = 0; e < d.length; e++) { var f = { data: d[e] }; if (this.trigger("unselect", f), f.prevented) return } this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle") } } }, c.prototype._handleKeyboardClear = function (a, c, d) { d.isOpen() || (c.which == b.DELETE || c.which == b.BACKSPACE) && this._handleClear(c) }, c.prototype.update = function (b, c) { if (b.call(this, c), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === c.length)) { var d = a('<span class="select2-selection__clear">&times;</span>'); d.data("data", c), this.$selection.find(".select2-selection__rendered").prepend(d) } }, c }), b.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (a, b, c) { function d(a, b, c) { a.call(this, b, c) } return d.prototype.render = function (b) { var c = a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></li>'); this.$searchContainer = c, this.$search = c.find("input"); var d = b.call(this); return d }, d.prototype.bind = function (a, b, d) { var e = this; a.call(this, b, d), b.on("open", function () { e.$search.attr("tabindex", 0), e.$search.focus() }), b.on("close", function () { e.$search.attr("tabindex", -1), e.$search.val(""), e.$search.focus() }), b.on("enable", function () { e.$search.prop("disabled", !1) }), b.on("disable", function () { e.$search.prop("disabled", !0) }), this.$selection.on("focusin", ".select2-search--inline", function (a) { e.trigger("focus", a) }), this.$selection.on("focusout", ".select2-search--inline", function (a) { e.trigger("blur", a) }), this.$selection.on("keydown", ".select2-search--inline", function (a) { a.stopPropagation(), e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented(); var b = a.which; if (b === c.BACKSPACE && "" === e.$search.val()) { var d = e.$searchContainer.prev(".select2-selection__choice"); if (d.length > 0) { var f = d.data("data"); e.searchRemoveChoice(f), a.preventDefault() } } }), this.$selection.on("input", ".select2-search--inline", function () { e.$selection.off("keyup.search") }), this.$selection.on("keyup.search input", ".select2-search--inline", function (a) { e.handleSearch(a) }) }, d.prototype.createPlaceholder = function (a, b) { this.$search.attr("placeholder", b.text) }, d.prototype.update = function (a, b) { this.$search.attr("placeholder", ""), a.call(this, b), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch() }, d.prototype.handleSearch = function () { if (this.resizeSearch(), !this._keyUpPrevented) { var a = this.$search.val(); this.trigger("query", { term: a }) } this._keyUpPrevented = !1 }, d.prototype.searchRemoveChoice = function (a, b) { this.trigger("unselect", { data: b }), this.trigger("open"), this.$search.val(b.text + " ") }, d.prototype.resizeSearch = function () { this.$search.css("width", "25px"); var a = ""; if ("" !== this.$search.attr("placeholder")) a = this.$selection.find(".select2-selection__rendered").innerWidth(); else { var b = this.$search.val().length + 1; a = .75 * b + "em" } this.$search.css("width", a) }, d }), b.define("select2/selection/eventRelay", ["jquery"], function (a) { function b() { } return b.prototype.bind = function (b, c, d) { var e = this, f = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"], g = ["opening", "closing", "selecting", "unselecting"]; b.call(this, c, d), c.on("*", function (b, c) { if (-1 !== a.inArray(b, f)) { c = c || {}; var d = a.Event("select2:" + b, { params: c }); e.$element.trigger(d), -1 !== a.inArray(b, g) && (c.prevented = d.isDefaultPrevented()) } }) }, b }), b.define("select2/translation", ["jquery", "require"], function (a, b) { function c(a) { this.dict = a || {} } return c.prototype.all = function () { return this.dict }, c.prototype.get = function (a) { return this.dict[a] }, c.prototype.extend = function (b) { this.dict = a.extend({}, b.all(), this.dict) }, c._cache = {}, c.loadPath = function (a) { if (!(a in c._cache)) { var d = b(a); c._cache[a] = d } return new c(c._cache[a]) }, c }), b.define("select2/diacritics", [], function () { var a = { "Ⓐ": "A", "Ａ": "A", "À": "A", "Á": "A", "Â": "A", "Ầ": "A", "Ấ": "A", "Ẫ": "A", "Ẩ": "A", "Ã": "A", "Ā": "A", "Ă": "A", "Ằ": "A", "Ắ": "A", "Ẵ": "A", "Ẳ": "A", "Ȧ": "A", "� ": "A", "Ä": "A", "Ǟ": "A", "Ả": "A", "Å": "A", "Ǻ": "A", "Ǎ": "A", "Ȁ": "A", "Ȃ": "A", "� ": "A", "Ậ": "A", "Ặ": "A", "Ḁ": "A", "Ą": "A", "Ⱥ": "A", "Ɐ": "A", "Ꜳ": "AA", "Æ": "AE", "Ǽ": "AE", "Ǣ": "AE", "Ꜵ": "AO", "Ꜷ": "AU", "Ꜹ": "AV", "Ꜻ": "AV", "Ꜽ": "AY", "Ⓑ": "B", "Ｂ": "B", "Ḃ": "B", "Ḅ": "B", "Ḇ": "B", "Ƀ": "B", "Ƃ": "B", "Ɓ": "B", "Ⓒ": "C", "Ｃ": "C", "Ć": "C", "Ĉ": "C", "Ċ": "C", "Č": "C", "Ç": "C", "Ḉ": "C", "Ƈ": "C", "Ȼ": "C", "Ꜿ": "C", "Ⓓ": "D", "Ｄ": "D", "Ḋ": "D", "Ď": "D", "Ḍ": "D", "Ḑ": "D", "Ḓ": "D", "Ḏ": "D", "Đ": "D", "Ƌ": "D", "Ɗ": "D", "Ɖ": "D", "Ꝺ": "D", "Ǳ": "DZ", "Ǆ": "DZ", "ǲ": "Dz", "ǅ": "Dz", "Ⓔ": "E", "Ｅ": "E", "È": "E", "É": "E", "Ê": "E", "Ề": "E", "Ế": "E", "Ễ": "E", "Ể": "E", "Ẽ": "E", "Ē": "E", "Ḕ": "E", "Ḗ": "E", "Ĕ": "E", "Ė": "E", "Ë": "E", "Ẻ": "E", "Ě": "E", "Ȅ": "E", "Ȇ": "E", "Ẹ": "E", "Ệ": "E", "Ȩ": "E", "Ḝ": "E", "Ę": "E", "Ḙ": "E", "Ḛ": "E", "Ɛ": "E", "Ǝ": "E", "Ⓕ": "F", "Ｆ": "F", "Ḟ": "F", "Ƒ": "F", "Ꝼ": "F", "Ⓖ": "G", "Ｇ": "G", "Ǵ": "G", "Ĝ": "G", "� ": "G", "Ğ": "G", "� ": "G", "Ǧ": "G", "Ģ": "G", "Ǥ": "G", "Ɠ": "G", "� ": "G", "Ᵹ": "G", "Ꝿ": "G", "Ⓗ": "H", "Ｈ": "H", "Ĥ": "H", "Ḣ": "H", "Ḧ": "H", "Ȟ": "H", "Ḥ": "H", "Ḩ": "H", "Ḫ": "H", "Ħ": "H", "Ⱨ": "H", "Ⱶ": "H", "Ɥ": "H", "Ⓘ": "I", "Ｉ": "I", "Ì": "I", "Í": "I", "Î": "I", "Ĩ": "I", "Ī": "I", "Ĭ": "I", "İ": "I", "Ï": "I", "Ḯ": "I", "Ỉ": "I", "Ǐ": "I", "Ȉ": "I", "Ȋ": "I", "Ị": "I", "Į": "I", "Ḭ": "I", "Ɨ": "I", "Ⓙ": "J", "Ｊ": "J", "Ĵ": "J", "Ɉ": "J", "Ⓚ": "K", "Ｋ": "K", "Ḱ": "K", "Ǩ": "K", "Ḳ": "K", "Ķ": "K", "Ḵ": "K", "Ƙ": "K", "Ⱪ": "K", "Ꝁ": "K", "Ꝃ": "K", "Ꝅ": "K", "Ꞣ": "K", "Ⓛ": "L", "Ｌ": "L", "Ŀ": "L", "Ĺ": "L", "Ľ": "L", "Ḷ": "L", "Ḹ": "L", "Ļ": "L", "Ḽ": "L", "Ḻ": "L", "Ł": "L", "Ƚ": "L", "Ɫ": "L", "� ": "L", "Ꝉ": "L", "Ꝇ": "L", "Ꞁ": "L", "Ǉ": "LJ", "ǈ": "Lj", "Ⓜ": "M", "Ｍ": "M", "Ḿ": "M", "Ṁ": "M", "Ṃ": "M", "Ɱ": "M", "Ɯ": "M", "Ⓝ": "N", "Ｎ": "N", "Ǹ": "N", "Ń": "N", "Ñ": "N", "Ṅ": "N", "Ň": "N", "Ṇ": "N", "Ņ": "N", "Ṋ": "N", "Ṉ": "N", "� ": "N", "Ɲ": "N", "Ꞑ": "N", "Ꞥ": "N", "Ǌ": "NJ", "ǋ": "Nj", "Ⓞ": "O", "Ｏ": "O", "Ò": "O", "Ó": "O", "Ô": "O", "Ồ": "O", "Ố": "O", "Ỗ": "O", "Ổ": "O", "Õ": "O", "Ṍ": "O", "Ȭ": "O", "Ṏ": "O", "Ō": "O", "Ṑ": "O", "Ṓ": "O", "Ŏ": "O", "Ȯ": "O", "Ȱ": "O", "Ö": "O", "Ȫ": "O", "Ỏ": "O", "Ő": "O", "Ǒ": "O", "Ȍ": "O", "Ȏ": "O", "� ": "O", "Ờ": "O", "Ớ": "O", "� ": "O", "Ở": "O", "Ợ": "O", "Ọ": "O", "Ộ": "O", "Ǫ": "O", "Ǭ": "O", "Ø": "O", "Ǿ": "O", "Ɔ": "O", "Ɵ": "O", "Ꝋ": "O", "Ꝍ": "O", "Ƣ": "OI", "Ꝏ": "OO", "Ȣ": "OU", "Ⓟ": "P", "Ｐ": "P", "Ṕ": "P", "Ṗ": "P", "Ƥ": "P", "Ᵽ": "P", "Ꝑ": "P", "Ꝓ": "P", "Ꝕ": "P", "Ⓠ": "Q", "Ｑ": "Q", "Ꝗ": "Q", "Ꝙ": "Q", "Ɋ": "Q", "Ⓡ": "R", "Ｒ": "R", "Ŕ": "R", "Ṙ": "R", "Ř": "R", "Ȑ": "R", "Ȓ": "R", "Ṛ": "R", "Ṝ": "R", "Ŗ": "R", "Ṟ": "R", "Ɍ": "R", "Ɽ": "R", "Ꝛ": "R", "Ꞧ": "R", "Ꞃ": "R", "Ⓢ": "S", "Ｓ": "S", "ẞ": "S", "Ś": "S", "Ṥ": "S", "Ŝ": "S", "� ": "S", "� ": "S", "Ṧ": "S", "Ṣ": "S", "Ṩ": "S", "Ș": "S", "Ş": "S", "Ȿ": "S", "Ꞩ": "S", "Ꞅ": "S", "Ⓣ": "T", "Ｔ": "T", "Ṫ": "T", "Ť": "T", "Ṭ": "T", "Ț": "T", "Ţ": "T", "Ṱ": "T", "Ṯ": "T", "Ŧ": "T", "Ƭ": "T", "Ʈ": "T", "Ⱦ": "T", "Ꞇ": "T", "Ꜩ": "TZ", "Ⓤ": "U", "Ｕ": "U", "Ù": "U", "Ú": "U", "Û": "U", "Ũ": "U", "Ṹ": "U", "Ū": "U", "Ṻ": "U", "Ŭ": "U", "Ü": "U", "Ǜ": "U", "Ǘ": "U", "Ǖ": "U", "Ǚ": "U", "Ủ": "U", "Ů": "U", "Ű": "U", "Ǔ": "U", "Ȕ": "U", "Ȗ": "U", "Ư": "U", "Ừ": "U", "Ứ": "U", "Ữ": "U", "Ử": "U", "Ự": "U", "Ụ": "U", "Ṳ": "U", "Ų": "U", "Ṷ": "U", "Ṵ": "U", "Ʉ": "U", "Ⓥ": "V", "Ｖ": "V", "Ṽ": "V", "Ṿ": "V", "Ʋ": "V", "Ꝟ": "V", "Ʌ": "V", "� ": "VY", "Ⓦ": "W", "Ｗ": "W", "Ẁ": "W", "Ẃ": "W", "Ŵ": "W", "Ẇ": "W", "Ẅ": "W", "Ẉ": "W", "Ⱳ": "W", "Ⓧ": "X", "Ｘ": "X", "Ẋ": "X", "Ẍ": "X", "Ⓨ": "Y", "Ｙ": "Y", "Ỳ": "Y", "Ý": "Y", "Ŷ": "Y", "Ỹ": "Y", "Ȳ": "Y", "Ẏ": "Y", "Ÿ": "Y", "Ỷ": "Y", "Ỵ": "Y", "Ƴ": "Y", "Ɏ": "Y", "Ỿ": "Y", "Ⓩ": "Z", "Ｚ": "Z", "Ź": "Z", "Ẑ": "Z", "Ż": "Z", "Ž": "Z", "Ẓ": "Z", "Ẕ": "Z", "Ƶ": "Z", "Ȥ": "Z", "Ɀ": "Z", "Ⱬ": "Z", "Ꝣ": "Z", "ⓐ": "a", "ａ": "a", "ẚ": "a", "� ": "a", "á": "a", "â": "a", "ầ": "a", "ấ": "a", "ẫ": "a", "ẩ": "a", "ã": "a", "ā": "a", "ă": "a", "ằ": "a", "ắ": "a", "ẵ": "a", "ẳ": "a", "ȧ": "a", "ǡ": "a", "ä": "a", "ǟ": "a", "ả": "a", "å": "a", "ǻ": "a", "ǎ": "a", "ȁ": "a", "ȃ": "a", "ạ": "a", "ậ": "a", "ặ": "a", "ḁ": "a", "ą": "a", "ⱥ": "a", "ɐ": "a", "ꜳ": "aa", "æ": "ae", "ǽ": "ae", "ǣ": "ae", "ꜵ": "ao", "ꜷ": "au", "ꜹ": "av", "ꜻ": "av", "ꜽ": "ay", "ⓑ": "b", "ｂ": "b", "ḃ": "b", "ḅ": "b", "ḇ": "b", "ƀ": "b", "ƃ": "b", "ɓ": "b", "ⓒ": "c", "ｃ": "c", "ć": "c", "ĉ": "c", "ċ": "c", "č": "c", "ç": "c", "ḉ": "c", "ƈ": "c", "ȼ": "c", "ꜿ": "c", "ↄ": "c", "ⓓ": "d", "ｄ": "d", "ḋ": "d", "ď": "d", "ḍ": "d", "ḑ": "d", "ḓ": "d", "ḏ": "d", "đ": "d", "ƌ": "d", "ɖ": "d", "ɗ": "d", "ꝺ": "d", "ǳ": "dz", "ǆ": "dz", "ⓔ": "e", "ｅ": "e", "è": "e", "é": "e", "ê": "e", "ề": "e", "ế": "e", "ễ": "e", "ể": "e", "ẽ": "e", "ē": "e", "ḕ": "e", "ḗ": "e", "ĕ": "e", "ė": "e", "ë": "e", "ẻ": "e", "ě": "e", "ȅ": "e", "ȇ": "e", "ẹ": "e", "ệ": "e", "ȩ": "e", "ḝ": "e", "ę": "e", "ḙ": "e", "ḛ": "e", "ɇ": "e", "ɛ": "e", "ǝ": "e", "ⓕ": "f", "ｆ": "f", "ḟ": "f", "ƒ": "f", "ꝼ": "f", "ⓖ": "g", "ｇ": "g", "ǵ": "g", "ĝ": "g", "ḡ": "g", "ğ": "g", "ġ": "g", "ǧ": "g", "ģ": "g", "ǥ": "g", "� ": "g", "ꞡ": "g", "ᵹ": "g", "ꝿ": "g", "ⓗ": "h", "ｈ": "h", "ĥ": "h", "ḣ": "h", "ḧ": "h", "ȟ": "h", "ḥ": "h", "ḩ": "h", "ḫ": "h", "ẖ": "h", "ħ": "h", "ⱨ": "h", "ⱶ": "h", "ɥ": "h", "ƕ": "hv", "ⓘ": "i", "ｉ": "i", "ì": "i", "í": "i", "î": "i", "ĩ": "i", "ī": "i", "ĭ": "i", "ï": "i", "ḯ": "i", "ỉ": "i", "ǐ": "i", "ȉ": "i", "ȋ": "i", "ị": "i", "į": "i", "ḭ": "i", "ɨ": "i", "ı": "i", "ⓙ": "j", "ｊ": "j", "ĵ": "j", "ǰ": "j", "ɉ": "j", "ⓚ": "k", "ｋ": "k", "ḱ": "k", "ǩ": "k", "ḳ": "k", "ķ": "k", "ḵ": "k", "ƙ": "k", "ⱪ": "k", "ꝁ": "k", "ꝃ": "k", "ꝅ": "k", "ꞣ": "k", "ⓛ": "l", "ｌ": "l", "ŀ": "l", "ĺ": "l", "ľ": "l", "ḷ": "l", "ḹ": "l", "ļ": "l", "ḽ": "l", "ḻ": "l", "ſ": "l", "ł": "l", "ƚ": "l", "ɫ": "l", "ⱡ": "l", "ꝉ": "l", "ꞁ": "l", "ꝇ": "l", "ǉ": "lj", "ⓜ": "m", "ｍ": "m", "ḿ": "m", "ṁ": "m", "ṃ": "m", "ɱ": "m", "ɯ": "m", "ⓝ": "n", "ｎ": "n", "ǹ": "n", "ń": "n", "ñ": "n", "ṅ": "n", "ň": "n", "ṇ": "n", "ņ": "n", "ṋ": "n", "ṉ": "n", "ƞ": "n", "ɲ": "n", "ŉ": "n", "ꞑ": "n", "ꞥ": "n", "ǌ": "nj", "ⓞ": "o", "ｏ": "o", "ò": "o", "ó": "o", "ô": "o", "ồ": "o", "ố": "o", "ỗ": "o", "ổ": "o", "õ": "o", "ṍ": "o", "ȭ": "o", "ṏ": "o", "ō": "o", "ṑ": "o", "ṓ": "o", "ŏ": "o", "ȯ": "o", "ȱ": "o", "ö": "o", "ȫ": "o", "ỏ": "o", "ő": "o", "ǒ": "o", "ȍ": "o", "ȏ": "o", "ơ": "o", "ờ": "o", "ớ": "o", "ỡ": "o", "ở": "o", "ợ": "o", "ọ": "o", "ộ": "o", "ǫ": "o", "ǭ": "o", "ø": "o", "ǿ": "o", "ɔ": "o", "ꝋ": "o", "ꝍ": "o", "ɵ": "o", "ƣ": "oi", "ȣ": "ou", "ꝏ": "oo", "ⓟ": "p", "ｐ": "p", "ṕ": "p", "ṗ": "p", "ƥ": "p", "ᵽ": "p", "ꝑ": "p", "ꝓ": "p", "ꝕ": "p", "� ": "q", "ｑ": "q", "ɋ": "q", "ꝗ": "q", "ꝙ": "q", "ⓡ": "r", "ｒ": "r", "ŕ": "r", "ṙ": "r", "ř": "r", "ȑ": "r", "ȓ": "r", "ṛ": "r", "ṝ": "r", "ŗ": "r", "ṟ": "r", "ɍ": "r", "ɽ": "r", "ꝛ": "r", "ꞧ": "r", "ꞃ": "r", "ⓢ": "s", "ｓ": "s", "ß": "s", "ś": "s", "ṥ": "s", "ŝ": "s", "ṡ": "s", "š": "s", "ṧ": "s", "ṣ": "s", "ṩ": "s", "ș": "s", "ş": "s", "ȿ": "s", "ꞩ": "s", "ꞅ": "s", "ẛ": "s", "ⓣ": "t", "ｔ": "t", "ṫ": "t", "ẗ": "t", "ť": "t", "ṭ": "t", "ț": "t", "ţ": "t", "ṱ": "t", "ṯ": "t", "ŧ": "t", "ƭ": "t", "ʈ": "t", "ⱦ": "t", "ꞇ": "t", "ꜩ": "tz", "ⓤ": "u", "ｕ": "u", "ù": "u", "ú": "u", "û": "u", "ũ": "u", "ṹ": "u", "ū": "u", "ṻ": "u", "ŭ": "u", "ü": "u", "ǜ": "u", "ǘ": "u", "ǖ": "u", "ǚ": "u", "ủ": "u", "ů": "u", "ű": "u", "ǔ": "u", "ȕ": "u", "ȗ": "u", "ư": "u", "ừ": "u", "ứ": "u", "ữ": "u", "ử": "u", "ự": "u", "ụ": "u", "ṳ": "u", "ų": "u", "ṷ": "u", "ṵ": "u", "ʉ": "u", "ⓥ": "v", "ｖ": "v", "ṽ": "v", "ṿ": "v", "ʋ": "v", "ꝟ": "v", "ʌ": "v", "ꝡ": "vy", "ⓦ": "w", "ｗ": "w", "ẁ": "w", "ẃ": "w", "ŵ": "w", "ẇ": "w", "ẅ": "w", "ẘ": "w", "ẉ": "w", "ⱳ": "w", "ⓧ": "x", "ｘ": "x", "ẋ": "x", "ẍ": "x", "ⓨ": "y", "ｙ": "y", "ỳ": "y", "ý": "y", "ŷ": "y", "ỹ": "y", "ȳ": "y", "ẏ": "y", "ÿ": "y", "ỷ": "y", "ẙ": "y", "ỵ": "y", "ƴ": "y", "ɏ": "y", "ỿ": "y", "ⓩ": "z", "ｚ": "z", "ź": "z", "ẑ": "z", "ż": "z", "ž": "z", "ẓ": "z", "ẕ": "z", "ƶ": "z", "ȥ": "z", "ɀ": "z", "ⱬ": "z", "ꝣ": "z", "Ά": "Α", "Έ": "Ε", "Ή": "Η", "Ί": "Ι", "Ϊ": "Ι", "Ό": "Ο", "Ύ": "Υ", "Ϋ": "Υ", "Ώ": "Ω", "ά": "α", "έ": "ε", "ή": "η", "ί": "ι", "ϊ": "ι", "ΐ": "ι", "ό": "ο", "ύ": "υ", "ϋ": "υ", "ΰ": "υ", "ω": "ω", "ς": "σ" }; return a }), b.define("select2/data/base", ["../utils"], function (a) { function b() { b.__super__.constructor.call(this) } return a.Extend(b, a.Observable), b.prototype.current = function () { throw new Error("The `current` method must be defined in child classes.") }, b.prototype.query = function () { throw new Error("The `query` method must be defined in child classes.") }, b.prototype.bind = function () { }, b.prototype.destroy = function () { }, b.prototype.generateResultId = function (b, c) { var d = b.id + "-result-"; return d += a.generateChars(4), d += null != c.id ? "-" + c.id.toString() : "-" + a.generateChars(4) }, b }), b.define("select2/data/select", ["./base", "../utils", "jquery"], function (a, b, c) {
            function d(a, b) { this.$element = a, this.options = b, d.__super__.constructor.call(this) } return b.Extend(d, a), d.prototype.current = function (a) { var b = [], d = this; this.$element.find(":selected").each(function () { var a = c(this), e = d.item(a); b.push(e) }), a(b) }, d.prototype.select = function (a) { var b = this; if (a.selected = !0, c(a.element).is("option")) return a.element.selected = !0, void this.$element.trigger("change"); if (this.$element.prop("multiple")) this.current(function (d) { var e = []; a = [a], a.push.apply(a, d); for (var f = 0; f < a.length; f++) { var g = a[f].id; -1 === c.inArray(g, e) && e.push(g) } b.$element.val(e), b.$element.trigger("change") }); else { var d = a.id; this.$element.val(d), this.$element.trigger("change") } }, d.prototype.unselect = function (a) { var b = this; if (this.$element.prop("multiple")) return a.selected = !1, c(a.element).is("option") ? (a.element.selected = !1, void this.$element.trigger("change")) : void this.current(function (d) { for (var e = [], f = 0; f < d.length; f++) { var g = d[f].id; g !== a.id && -1 === c.inArray(g, e) && e.push(g) } b.$element.val(e), b.$element.trigger("change") }) }, d.prototype.bind = function (a) { var b = this; this.container = a, a.on("select", function (a) { b.select(a.data) }), a.on("unselect", function (a) { b.unselect(a.data) }) }, d.prototype.destroy = function () { this.$element.find("*").each(function () { c.removeData(this, "data") }) }, d.prototype.query = function (a, b) { var d = [], e = this, f = this.$element.children(); f.each(function () { var b = c(this); if (b.is("option") || b.is("optgroup")) { var f = e.item(b), g = e.matches(a, f); null !== g && d.push(g) } }), b({ results: d }) }, d.prototype.addOptions = function (a) { b.appendMany(this.$element, a) }, d.prototype.option = function (a) { var b; a.children ? (b = document.createElement("optgroup"), b.label = a.text) : (b = document.createElement("option"), void 0 !== b.textContent ? b.textContent = a.text : b.innerText = a.text), a.id && (b.value = a.id), a.disabled && (b.disabled = !0), a.selected && (b.selected = !0), a.title && (b.title = a.title); var d = c(b), e = this._normalizeItem(a); return e.element = b, c.data(b, "data", e), d }, d.prototype.item = function (a) {
                var b = {};
                if (b = c.data(a[0], "data"), null != b) return b; if (a.is("option")) b = { id: a.val(), text: a.text(), disabled: a.prop("disabled"), selected: a.prop("selected"), title: a.prop("title") }; else if (a.is("optgroup")) { b = { text: a.prop("label"), children: [], title: a.prop("title") }; for (var d = a.children("option"), e = [], f = 0; f < d.length; f++) { var g = c(d[f]), h = this.item(g); e.push(h) } b.children = e } return b = this._normalizeItem(b), b.element = a[0], c.data(a[0], "data", b), b
            }, d.prototype._normalizeItem = function (a) { c.isPlainObject(a) || (a = { id: a, text: a }), a = c.extend({}, { text: "" }, a); var b = { selected: !1, disabled: !1 }; return null != a.id && (a.id = a.id.toString()), null != a.text && (a.text = a.text.toString()), null == a._resultId && a.id && null != this.container && (a._resultId = this.generateResultId(this.container, a)), c.extend({}, b, a) }, d.prototype.matches = function (a, b) { var c = this.options.get("matcher"); return c(a, b) }, d
        }), b.define("select2/data/array", ["./select", "../utils", "jquery"], function (a, b, c) { function d(a, b) { var c = b.get("data") || []; d.__super__.constructor.call(this, a, b), this.addOptions(this.convertToOptions(c)) } return b.Extend(d, a), d.prototype.select = function (a) { var b = this.$element.find("option").filter(function (b, c) { return c.value == a.id.toString() }); 0 === b.length && (b = this.option(a), this.addOptions(b)), d.__super__.select.call(this, a) }, d.prototype.convertToOptions = function (a) { function d(a) { return function () { return c(this).val() == a.id } } for (var e = this, f = this.$element.find("option"), g = f.map(function () { return e.item(c(this)).id }).get(), h = [], i = 0; i < a.length; i++) { var j = this._normalizeItem(a[i]); if (c.inArray(j.id, g) >= 0) { var k = f.filter(d(j)), l = this.item(k), m = (c.extend(!0, {}, l, j), this.option(l)); k.replaceWith(m) } else { var n = this.option(j); if (j.children) { var o = this.convertToOptions(j.children); b.appendMany(n, o) } h.push(n) } } return h }, d }), b.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (a, b, c) { function d(b, c) { this.ajaxOptions = this._applyDefaults(c.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), a.__super__.constructor.call(this, b, c) } return b.Extend(d, a), d.prototype._applyDefaults = function (a) { var b = { data: function (a) { return { q: a.term } }, transport: function (a, b, d) { var e = c.ajax(a); return e.then(b), e.fail(d), e } }; return c.extend({}, b, a, !0) }, d.prototype.processResults = function (a) { return a }, d.prototype.query = function (a, b) { function d() { var d = f.transport(f, function (d) { var f = e.processResults(d, a); e.options.get("debug") && window.console && console.error && (f && f.results && c.isArray(f.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), b(f) }, function () { }); e._request = d } var e = this; null != this._request && (c.isFunction(this._request.abort) && this._request.abort(), this._request = null); var f = c.extend({ type: "GET" }, this.ajaxOptions); "function" == typeof f.url && (f.url = f.url(a)), "function" == typeof f.data && (f.data = f.data(a)), this.ajaxOptions.delay && "" !== a.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(d, this.ajaxOptions.delay)) : d() }, d }), b.define("select2/data/tags", ["jquery"], function (a) { function b(b, c, d) { var e = d.get("tags"), f = d.get("createTag"); if (void 0 !== f && (this.createTag = f), b.call(this, c, d), a.isArray(e)) for (var g = 0; g < e.length; g++) { var h = e[g], i = this._normalizeItem(h), j = this.option(i); this.$element.append(j) } } return b.prototype.query = function (a, b, c) { function d(a, f) { for (var g = a.results, h = 0; h < g.length; h++) { var i = g[h], j = null != i.children && !d({ results: i.children }, !0), k = i.text === b.term; if (k || j) return f ? !1 : (a.data = g, void c(a)) } if (f) return !0; var l = e.createTag(b); if (null != l) { var m = e.option(l); m.attr("data-select2-tag", !0), e.addOptions([m]), e.insertTag(g, l) } a.results = g, c(a) } var e = this; return this._removeOldTags(), null == b.term || null != b.page ? void a.call(this, b, c) : void a.call(this, b, d) }, b.prototype.createTag = function (b, c) { var d = a.trim(c.term); return "" === d ? null : { id: d, text: d } }, b.prototype.insertTag = function (a, b, c) { b.unshift(c) }, b.prototype._removeOldTags = function () { var b = (this._lastTag, this.$element.find("option[data-select2-tag]")); b.each(function () { this.selected || a(this).remove() }) }, b }), b.define("select2/data/tokenizer", ["jquery"], function (a) { function b(a, b, c) { var d = c.get("tokenizer"); void 0 !== d && (this.tokenizer = d), a.call(this, b, c) } return b.prototype.bind = function (a, b, c) { a.call(this, b, c), this.$search = b.dropdown.$search || b.selection.$search || c.find(".select2-search__field") }, b.prototype.query = function (a, b, c) { function d(a) { e.select(a) } var e = this; b.term = b.term || ""; var f = this.tokenizer(b, this.options, d); f.term !== b.term && (this.$search.length && (this.$search.val(f.term), this.$search.focus()), b.term = f.term), a.call(this, b, c) }, b.prototype.tokenizer = function (b, c, d, e) { for (var f = d.get("tokenSeparators") || [], g = c.term, h = 0, i = this.createTag || function (a) { return { id: a.term, text: a.term } }; h < g.length;) { var j = g[h]; if (-1 !== a.inArray(j, f)) { var k = g.substr(0, h), l = a.extend({}, c, { term: k }), m = i(l); e(m), g = g.substr(h + 1) || "", h = 0 } else h++ } return { term: g } }, b }), b.define("select2/data/minimumInputLength", [], function () { function a(a, b, c) { this.minimumInputLength = c.get("minimumInputLength"), a.call(this, b, c) } return a.prototype.query = function (a, b, c) { return b.term = b.term || "", b.term.length < this.minimumInputLength ? void this.trigger("results:message", { message: "inputTooShort", args: { minimum: this.minimumInputLength, input: b.term, params: b } }) : void a.call(this, b, c) }, a }), b.define("select2/data/maximumInputLength", [], function () { function a(a, b, c) { this.maximumInputLength = c.get("maximumInputLength"), a.call(this, b, c) } return a.prototype.query = function (a, b, c) { return b.term = b.term || "", this.maximumInputLength > 0 && b.term.length > this.maximumInputLength ? void this.trigger("results:message", { message: "inputTooLong", args: { maximum: this.maximumInputLength, input: b.term, params: b } }) : void a.call(this, b, c) }, a }), b.define("select2/data/maximumSelectionLength", [], function () { function a(a, b, c) { this.maximumSelectionLength = c.get("maximumSelectionLength"), a.call(this, b, c) } return a.prototype.query = function (a, b, c) { var d = this; this.current(function (e) { var f = null != e ? e.length : 0; return d.maximumSelectionLength > 0 && f >= d.maximumSelectionLength ? void d.trigger("results:message", { message: "maximumSelected", args: { maximum: d.maximumSelectionLength } }) : void a.call(d, b, c) }) }, a }), b.define("select2/dropdown", ["jquery", "./utils"], function (a, b) { function c(a, b) { this.$element = a, this.options = b, c.__super__.constructor.call(this) } return b.Extend(c, b.Observable), c.prototype.render = function () { var b = a('<span class="select2-dropdown"><span class="select2-results"></span></span>'); return b.attr("dir", this.options.get("dir")), this.$dropdown = b, b }, c.prototype.position = function () { }, c.prototype.destroy = function () { this.$dropdown.remove() }, c }), b.define("select2/dropdown/search", ["jquery", "../utils"], function (a) { function b() { } return b.prototype.render = function (b) { var c = b.call(this), d = a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>'); return this.$searchContainer = d, this.$search = d.find("input"), c.prepend(d), c }, b.prototype.bind = function (b, c, d) { var e = this; b.call(this, c, d), this.$search.on("keydown", function (a) { e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented() }), this.$search.on("input", function () { a(this).off("keyup") }), this.$search.on("keyup input", function (a) { e.handleSearch(a) }), c.on("open", function () { e.$search.attr("tabindex", 0), e.$search.focus(), window.setTimeout(function () { e.$search.focus() }, 0) }), c.on("close", function () { e.$search.attr("tabindex", -1), e.$search.val("") }), c.on("results:all", function (a) { if (null == a.query.term || "" === a.query.term) { var b = e.showSearch(a); b ? e.$searchContainer.removeClass("select2-search--hide") : e.$searchContainer.addClass("select2-search--hide") } }) }, b.prototype.handleSearch = function () { if (!this._keyUpPrevented) { var a = this.$search.val(); this.trigger("query", { term: a }) } this._keyUpPrevented = !1 }, b.prototype.showSearch = function () { return !0 }, b }), b.define("select2/dropdown/hidePlaceholder", [], function () { function a(a, b, c, d) { this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c, d) } return a.prototype.append = function (a, b) { b.results = this.removePlaceholder(b.results), a.call(this, b) }, a.prototype.normalizePlaceholder = function (a, b) { return "string" == typeof b && (b = { id: "", text: b }), b }, a.prototype.removePlaceholder = function (a, b) { for (var c = b.slice(0), d = b.length - 1; d >= 0; d--) { var e = b[d]; this.placeholder.id === e.id && c.splice(d, 1) } return c }, a }), b.define("select2/dropdown/infiniteScroll", ["jquery"], function (a) { function b(a, b, c, d) { this.lastParams = {}, a.call(this, b, c, d), this.$loadingMore = this.createLoadingMore(), this.loading = !1 } return b.prototype.append = function (a, b) { this.$loadingMore.remove(), this.loading = !1, a.call(this, b), this.showLoadingMore(b) && this.$results.append(this.$loadingMore) }, b.prototype.bind = function (b, c, d) { var e = this; b.call(this, c, d), c.on("query", function (a) { e.lastParams = a, e.loading = !0 }), c.on("query:append", function (a) { e.lastParams = a, e.loading = !0 }), this.$results.on("scroll", function () { var b = a.contains(document.documentElement, e.$loadingMore[0]); if (!e.loading && b) { var c = e.$results.offset().top + e.$results.outerHeight(!1), d = e.$loadingMore.offset().top + e.$loadingMore.outerHeight(!1); c + 50 >= d && e.loadMore() } }) }, b.prototype.loadMore = function () { this.loading = !0; var b = a.extend({}, { page: 1 }, this.lastParams); b.page++, this.trigger("query:append", b) }, b.prototype.showLoadingMore = function (a, b) { return b.pagination && b.pagination.more }, b.prototype.createLoadingMore = function () { var b = a('<li class="option load-more" role="treeitem"></li>'), c = this.options.get("translations").get("loadingMore"); return b.html(c(this.lastParams)), b }, b }), b.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (a, b) { function c(a, b, c) { this.$dropdownParent = c.get("dropdownParent") || document.body, a.call(this, b, c) } return c.prototype.bind = function (a, b, c) { var d = this, e = !1; a.call(this, b, c), b.on("open", function () { d._showDropdown(), d._attachPositioningHandler(b), e || (e = !0, b.on("results:all", function () { d._positionDropdown(), d._resizeDropdown() }), b.on("results:append", function () { d._positionDropdown(), d._resizeDropdown() })) }), b.on("close", function () { d._hideDropdown(), d._detachPositioningHandler(b) }), this.$dropdownContainer.on("mousedown", function (a) { a.stopPropagation() }) }, c.prototype.position = function (a, b, c) { b.attr("class", c.attr("class")), b.removeClass("select2"), b.addClass("select2-container--open"), b.css({ position: "absolute", top: -999999 }), this.$container = c }, c.prototype.render = function (b) { var c = a("<span></span>"), d = b.call(this); return c.append(d), this.$dropdownContainer = c, c }, c.prototype._hideDropdown = function () { this.$dropdownContainer.detach() }, c.prototype._attachPositioningHandler = function (c) { var d = this, e = "scroll.select2." + c.id, f = "resize.select2." + c.id, g = "orientationchange.select2." + c.id, h = this.$container.parents().filter(b.hasScroll); h.each(function () { a(this).data("select2-scroll-position", { x: a(this).scrollLeft(), y: a(this).scrollTop() }) }), h.on(e, function () { var b = a(this).data("select2-scroll-position"); a(this).scrollTop(b.y) }), a(window).on(e + " " + f + " " + g, function () { d._positionDropdown(), d._resizeDropdown() }) }, c.prototype._detachPositioningHandler = function (c) { var d = "scroll.select2." + c.id, e = "resize.select2." + c.id, f = "orientationchange.select2." + c.id, g = this.$container.parents().filter(b.hasScroll); g.off(d), a(window).off(d + " " + e + " " + f) }, c.prototype._positionDropdown = function () { var b = a(window), c = this.$dropdown.hasClass("select2-dropdown--above"), d = this.$dropdown.hasClass("select2-dropdown--below"), e = null, f = (this.$container.position(), this.$container.offset()); f.bottom = f.top + this.$container.outerHeight(!1); var g = { height: this.$container.outerHeight(!1) }; g.top = f.top, g.bottom = f.top + g.height; var h = { height: this.$dropdown.outerHeight(!1) }, i = { top: b.scrollTop(), bottom: b.scrollTop() + b.height() }, j = i.top < f.top - h.height, k = i.bottom > f.bottom + h.height, l = { left: f.left, top: g.bottom }; c || d || (e = "below"), k || !j || c ? !j && k && c && (e = "below") : e = "above", ("above" == e || c && "below" !== e) && (l.top = g.top - h.height), null != e && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + e), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + e)), this.$dropdownContainer.css(l) }, c.prototype._resizeDropdown = function () { this.$dropdownContainer.width(); var a = { width: this.$container.outerWidth(!1) + "px" }; this.options.get("dropdownAutoWidth") && (a.minWidth = a.width, a.width = "auto"), this.$dropdown.css(a) }, c.prototype._showDropdown = function () { this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown() }, c }), b.define("select2/dropdown/minimumResultsForSearch", [], function () { function a(b) { for (var c = 0, d = 0; d < b.length; d++) { var e = b[d]; e.children ? c += a(e.children) : c++ } return c } function b(a, b, c, d) { this.minimumResultsForSearch = c.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), a.call(this, b, c, d) } return b.prototype.showSearch = function (b, c) { return a(c.data.results) < this.minimumResultsForSearch ? !1 : b.call(this, c) }, b }), b.define("select2/dropdown/selectOnClose", [], function () { function a() { } return a.prototype.bind = function (a, b, c) { var d = this; a.call(this, b, c), b.on("close", function () { d._handleSelectOnClose() }) }, a.prototype._handleSelectOnClose = function () { var a = this.getHighlightedResults(); a.length < 1 || this.trigger("select", { data: a.data("data") }) }, a }), b.define("select2/dropdown/closeOnSelect", [], function () { function a() { } return a.prototype.bind = function (a, b, c) { var d = this; a.call(this, b, c), b.on("select", function (a) { d._selectTriggered(a) }), b.on("unselect", function (a) { d._selectTriggered(a) }) }, a.prototype._selectTriggered = function (a, b) { var c = b.originalEvent; c && c.ctrlKey || this.trigger("close") }, a }), b.define("select2/i18n/en", [], function () { return { errorLoading: function () { return "The results could not be loaded." }, inputTooLong: function (a) { var b = a.input.length - a.maximum, c = "Please delete " + b + " character"; return 1 != b && (c += "s"), c }, inputTooShort: function (a) { var b = a.minimum - a.input.length, c = "Please enter " + b + " or more characters"; return c }, loadingMore: function () { return "Loading more results…" }, maximumSelected: function (a) { var b = "You can only select " + a.maximum + " item"; return 1 != a.maximum && (b += "s"), b }, noResults: function () { return "No results found" }, searching: function () { return "Searching…" } } }), b.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C) { function D() { this.reset() } D.prototype.apply = function (l) { if (l = a.extend({}, this.defaults, l), null == l.dataAdapter) { if (l.dataAdapter = null != l.ajax ? o : null != l.data ? n : m, l.minimumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, r)), l.maximumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, s)), l.maximumSelectionLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, t)), l.tags && (l.dataAdapter = j.Decorate(l.dataAdapter, p)), (null != l.tokenSeparators || null != l.tokenizer) && (l.dataAdapter = j.Decorate(l.dataAdapter, q)), null != l.query) { var C = b(l.amdBase + "compat/query"); l.dataAdapter = j.Decorate(l.dataAdapter, C) } if (null != l.initSelection) { var D = b(l.amdBase + "compat/initSelection"); l.dataAdapter = j.Decorate(l.dataAdapter, D) } } if (null == l.resultsAdapter && (l.resultsAdapter = c, null != l.ajax && (l.resultsAdapter = j.Decorate(l.resultsAdapter, x)), null != l.placeholder && (l.resultsAdapter = j.Decorate(l.resultsAdapter, w)), l.selectOnClose && (l.resultsAdapter = j.Decorate(l.resultsAdapter, A))), null == l.dropdownAdapter) { if (l.multiple) l.dropdownAdapter = u; else { var E = j.Decorate(u, v); l.dropdownAdapter = E } if (0 !== l.minimumResultsForSearch && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, z)), l.closeOnSelect && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, B)), null != l.dropdownCssClass || null != l.dropdownCss || null != l.adaptDropdownCssClass) { var F = b(l.amdBase + "compat/dropdownCss"); l.dropdownAdapter = j.Decorate(l.dropdownAdapter, F) } l.dropdownAdapter = j.Decorate(l.dropdownAdapter, y) } if (null == l.selectionAdapter) { if (l.selectionAdapter = l.multiple ? e : d, null != l.placeholder && (l.selectionAdapter = j.Decorate(l.selectionAdapter, f)), l.allowClear && (l.selectionAdapter = j.Decorate(l.selectionAdapter, g)), l.multiple && (l.selectionAdapter = j.Decorate(l.selectionAdapter, h)), null != l.containerCssClass || null != l.containerCss || null != l.adaptContainerCssClass) { var G = b(l.amdBase + "compat/containerCss"); l.selectionAdapter = j.Decorate(l.selectionAdapter, G) } l.selectionAdapter = j.Decorate(l.selectionAdapter, i) } if ("string" == typeof l.language) if (l.language.indexOf("-") > 0) { var H = l.language.split("-"), I = H[0]; l.language = [l.language, I] } else l.language = [l.language]; if (a.isArray(l.language)) { var J = new k; l.language.push("en"); for (var K = l.language, L = 0; L < K.length; L++) { var M = K[L], N = {}; try { N = k.loadPath(M) } catch (O) { try { M = this.defaults.amdLanguageBase + M, N = k.loadPath(M) } catch (P) { l.debug && window.console && console.warn && console.warn('Select2: The language file for "' + M + '" could not be automatically loaded. A fallback will be used instead.'); continue } } J.extend(N) } l.translations = J } else { var Q = k.loadPath(this.defaults.amdLanguageBase + "en"), R = new k(l.language); R.extend(Q), l.translations = R } return l }, D.prototype.reset = function () { function b(a) { function b(a) { return l[a] || a } return a.replace(/[^\u0000-\u007E]/g, b) } function c(d, e) { if ("" === a.trim(d.term)) return e; if (e.children && e.children.length > 0) { for (var f = a.extend(!0, {}, e), g = e.children.length - 1; g >= 0; g--) { var h = e.children[g], i = c(d, h); null == i && f.children.splice(g, 1) } return f.children.length > 0 ? f : c(d, f) } var j = b(e.text).toUpperCase(), k = b(d.term).toUpperCase(); return j.indexOf(k) > -1 ? e : null } this.defaults = { amdBase: "./", amdLanguageBase: "./i18n/", closeOnSelect: !0, debug: !1, dropdownAutoWidth: !1, escapeMarkup: j.escapeMarkup, language: C, matcher: c, minimumInputLength: 0, maximumInputLength: 0, maximumSelectionLength: 0, minimumResultsForSearch: 0, selectOnClose: !1, sorter: function (a) { return a }, templateResult: function (a) { return a.text }, templateSelection: function (a) { return a.text }, theme: "default", width: "resolve" } }, D.prototype.set = function (b, c) { var d = a.camelCase(b), e = {}; e[d] = c; var f = j._convertData(e); a.extend(this.defaults, f) }; var E = new D; return E }), b.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (a, b, c, d) { function e(b, e) { if (this.options = b, null != e && this.fromElement(e), this.options = c.apply(this.options), e && e.is("input")) { var f = a(this.get("amdBase") + "compat/inputData"); this.options.dataAdapter = d.Decorate(this.options.dataAdapter, f) } } return e.prototype.fromElement = function (a) { var c = ["select2"]; null == this.options.multiple && (this.options.multiple = a.prop("multiple")), null == this.options.disabled && (this.options.disabled = a.prop("disabled")), null == this.options.language && (a.prop("lang") ? this.options.language = a.prop("lang").toLowerCase() : a.closest("[lang]").prop("lang") && (this.options.language = a.closest("[lang]").prop("lang"))), null == this.options.dir && (this.options.dir = a.prop("dir") ? a.prop("dir") : a.closest("[dir]").prop("dir") ? a.closest("[dir]").prop("dir") : "ltr"), a.prop("disabled", this.options.disabled), a.prop("multiple", this.options.multiple), a.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), a.data("data", a.data("select2Tags")), a.data("tags", !0)), a.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), a.attr("ajax--url", a.data("ajaxUrl")), a.data("ajax--url", a.data("ajaxUrl"))); var e = {}; e = b.fn.jquery && "1." == b.fn.jquery.substr(0, 2) && a[0].dataset ? b.extend(!0, {}, a[0].dataset, a.data()) : a.data(); var f = b.extend(!0, {}, e); f = d._convertData(f); for (var g in f) b.inArray(g, c) > -1 || (b.isPlainObject(this.options[g]) ? b.extend(this.options[g], f[g]) : this.options[g] = f[g]); return this }, e.prototype.get = function (a) { return this.options[a] }, e.prototype.set = function (a, b) { this.options[a] = b }, e }), b.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (a, b, c, d) { var e = function (a, c) { null != a.data("select2") && a.data("select2").destroy(), this.$element = a, this.id = this._generateId(a), c = c || {}, this.options = new b(c, a), e.__super__.constructor.call(this); var d = a.attr("tabindex") || 0; a.data("old-tabindex", d), a.attr("tabindex", "-1"); var f = this.options.get("dataAdapter"); this.dataAdapter = new f(a, this.options); var g = this.render(); this._placeContainer(g); var h = this.options.get("selectionAdapter"); this.selection = new h(a, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, g); var i = this.options.get("dropdownAdapter"); this.dropdown = new i(a, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, g); var j = this.options.get("resultsAdapter"); this.results = new j(a, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown); var k = this; this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function (a) { k.trigger("selection:update", { data: a }) }), a.addClass("select2-hidden-accessible"), a.attr("aria-hidden", "true"), this._syncAttributes(), a.data("select2", this) }; return c.Extend(e, c.Observable), e.prototype._generateId = function (a) { var b = ""; return b = null != a.attr("id") ? a.attr("id") : null != a.attr("name") ? a.attr("name") + "-" + c.generateChars(2) : c.generateChars(4), b = "select2-" + b }, e.prototype._placeContainer = function (a) { a.insertAfter(this.$element); var b = this._resolveWidth(this.$element, this.options.get("width")); null != b && a.css("width", b) }, e.prototype._resolveWidth = function (a, b) { var c = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i; if ("resolve" == b) { var d = this._resolveWidth(a, "style"); return null != d ? d : this._resolveWidth(a, "element") } if ("element" == b) { var e = a.outerWidth(!1); return 0 >= e ? "auto" : e + "px" } if ("style" == b) { var f = a.attr("style"); if ("string" != typeof f) return null; for (var g = f.split(";"), h = 0, i = g.length; i > h; h += 1) { var j = g[h].replace(/\s/g, ""), k = j.match(c); if (null !== k && k.length >= 1) return k[1] } return null } return b }, e.prototype._bindAdapters = function () { this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container) }, e.prototype._registerDomEvents = function () { var b = this; this.$element.on("change.select2", function () { b.dataAdapter.current(function (a) { b.trigger("selection:update", { data: a }) }) }), this._sync = c.bind(this._syncAttributes, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._sync); var d = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver; null != d ? (this._observer = new d(function (c) { a.each(c, b._sync) }), this._observer.observe(this.$element[0], { attributes: !0, subtree: !1 })) : this.$element[0].addEventListener && this.$element[0].addEventListener("DOMAttrModified", b._sync, !1) }, e.prototype._registerDataEvents = function () { var a = this; this.dataAdapter.on("*", function (b, c) { a.trigger(b, c) }) }, e.prototype._registerSelectionEvents = function () { var b = this, c = ["toggle"]; this.selection.on("toggle", function () { b.toggleDropdown() }), this.selection.on("*", function (d, e) { -1 === a.inArray(d, c) && b.trigger(d, e) }) }, e.prototype._registerDropdownEvents = function () { var a = this; this.dropdown.on("*", function (b, c) { a.trigger(b, c) }) }, e.prototype._registerResultsEvents = function () { var a = this; this.results.on("*", function (b, c) { a.trigger(b, c) }) }, e.prototype._registerEvents = function () { var a = this; this.on("open", function () { a.$container.addClass("select2-container--open") }), this.on("close", function () { a.$container.removeClass("select2-container--open") }), this.on("enable", function () { a.$container.removeClass("select2-container--disabled") }), this.on("disable", function () { a.$container.addClass("select2-container--disabled") }), this.on("focus", function () { a.$container.addClass("select2-container--focus") }), this.on("blur", function () { a.$container.removeClass("select2-container--focus") }), this.on("query", function (b) { a.isOpen() || a.trigger("open"), this.dataAdapter.query(b, function (c) { a.trigger("results:all", { data: c, query: b }) }) }), this.on("query:append", function (b) { this.dataAdapter.query(b, function (c) { a.trigger("results:append", { data: c, query: b }) }) }), this.on("keypress", function (b) { var c = b.which; a.isOpen() ? c === d.ENTER ? (a.trigger("results:select"), b.preventDefault()) : c === d.SPACE && b.ctrlKey ? (a.trigger("results:toggle"), b.preventDefault()) : c === d.UP ? (a.trigger("results:previous"), b.preventDefault()) : c === d.DOWN ? (a.trigger("results:next"), b.preventDefault()) : (c === d.ESC || c === d.TAB) && (a.close(), b.preventDefault()) : (c === d.ENTER || c === d.SPACE || (c === d.DOWN || c === d.UP) && b.altKey) && (a.open(), b.preventDefault()) }) }, e.prototype._syncAttributes = function () { this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable")) : this.trigger("enable") }, e.prototype.trigger = function (a, b) { var c = e.__super__.trigger, d = { open: "opening", close: "closing", select: "selecting", unselect: "unselecting" }; if (a in d) { var f = d[a], g = { prevented: !1, name: a, args: b }; if (c.call(this, f, g), g.prevented) return void (b.prevented = !0) } c.call(this, a, b) }, e.prototype.toggleDropdown = function () { this.options.get("disabled") || (this.isOpen() ? this.close() : this.open()) }, e.prototype.open = function () { this.isOpen() || (this.trigger("query", {}), this.trigger("open")) }, e.prototype.close = function () { this.isOpen() && this.trigger("close") }, e.prototype.isOpen = function () { return this.$container.hasClass("select2-container--open") }, e.prototype.enable = function (a) { this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), (null == a || 0 === a.length) && (a = [!0]); var b = !a[0]; this.$element.prop("disabled", b) }, e.prototype.data = function () { this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.'); var a = []; return this.dataAdapter.current(function (b) { a = b }), a }, e.prototype.val = function (b) { if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == b || 0 === b.length) return this.$element.val(); var c = b[0]; a.isArray(c) && (c = a.map(c, function (a) { return a.toString() })), this.$element.val(c).trigger("change") }, e.prototype.destroy = function () { this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._sync), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && this.$element[0].removeEventListener("DOMAttrModified", this._sync, !1), this._sync = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null }, e.prototype.render = function () { var b = a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'); return b.attr("dir", this.options.get("dir")), this.$container = b, this.$container.addClass("select2-container--" + this.options.get("theme")), b.data("element", this.$element), b }, e }), b.define("jquery.select2", ["jquery", "require", "./select2/core", "./select2/defaults"], function (a, b, c, d) { if (b("jquery.mousewheel"), null == a.fn.select2) { var e = ["open", "close", "destroy"]; a.fn.select2 = function (b) { if (b = b || {}, "object" == typeof b) return this.each(function () { { var d = a.extend({}, b, !0); new c(a(this), d) } }), this; if ("string" == typeof b) { var d = this.data("select2"); null == d && window.console && console.error && console.error("The select2('" + b + "') method was called on an element that is not using Select2."); var f = Array.prototype.slice.call(arguments, 1), g = d[b](f); return a.inArray(b, e) > -1 ? this : g } throw new Error("Invalid arguments for Select2: " + b) } } return null == a.fn.select2.defaults && (a.fn.select2.defaults = d), c }), b.define("jquery.mousewheel", ["jquery"], function (a) { return a }), { define: b.define, require: b.require }
    }(), c = b.require("jquery.select2"); return a.fn.select2.amd = b, c
});



/* spin.js */
(function (t, e) { "object" == typeof exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Spinner = e() })(this, function () { "use strict"; function t(t, e) { var i, n = document.createElement(t || "div"); for (i in e) n[i] = e[i]; return n } function e(t) { for (var e = 1, i = arguments.length; i > e; e++) t.appendChild(arguments[e]); return t } function i(t, e, i, n) { var r = ["opacity", e, ~~(100 * t), i, n].join("-"), o = .01 + 100 * (i / n), a = Math.max(1 - (1 - t) / e * (100 - o), t), s = u.substring(0, u.indexOf("Animation")).toLowerCase(), l = s && "-" + s + "-" || ""; return c[r] || (p.insertRule("@" + l + "keyframes " + r + "{" + "0%{opacity:" + a + "}" + o + "%{opacity:" + t + "}" + (o + .01) + "%{opacity:1}" + (o + e) % 100 + "%{opacity:" + t + "}" + "100%{opacity:" + a + "}" + "}", p.cssRules.length), c[r] = 1), r } function n(t, e) { var i, n, r = t.style; for (e = e.charAt(0).toUpperCase() + e.slice(1), n = 0; d.length > n; n++) if (i = d[n] + e, void 0 !== r[i]) return i; return void 0 !== r[e] ? e : void 0 } function r(t, e) { for (var i in e) t.style[n(t, i) || i] = e[i]; return t } function o(t) { for (var e = 1; arguments.length > e; e++) { var i = arguments[e]; for (var n in i) void 0 === t[n] && (t[n] = i[n]) } return t } function a(t, e) { return "string" == typeof t ? t : t[e % t.length] } function s(t) { this.opts = o(t || {}, s.defaults, f) } function l() { function i(e, i) { return t("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', i) } p.addRule(".spin-vml", "behavior:url(#default#VML)"), s.prototype.lines = function (t, n) { function o() { return r(i("group", { coordsize: d + " " + d, coordorigin: -u + " " + -u }), { width: d, height: d }) } function s(t, s, l) { e(p, e(r(o(), { rotation: 360 / n.lines * t + "deg", left: ~~s }), e(r(i("roundrect", { arcsize: n.corners }), { width: u, height: n.width, left: n.radius, top: -n.width >> 1, filter: l }), i("fill", { color: a(n.color, t), opacity: n.opacity }), i("stroke", { opacity: 0 })))) } var l, u = n.length + n.width, d = 2 * u, c = 2 * -(n.width + n.length) + "px", p = r(o(), { position: "absolute", top: c, left: c }); if (n.shadow) for (l = 1; n.lines >= l; l++) s(l, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)"); for (l = 1; n.lines >= l; l++) s(l); return e(t, p) }, s.prototype.opacity = function (t, e, i, n) { var r = t.firstChild; n = n.shadow && n.lines || 0, r && r.childNodes.length > e + n && (r = r.childNodes[e + n], r = r && r.firstChild, r = r && r.firstChild, r && (r.opacity = i)) } } var u, d = ["webkit", "Moz", "ms", "O"], c = {}, p = function () { var i = t("style", { type: "text/css" }); return e(document.getElementsByTagName("head")[0], i), i.sheet || i.styleSheet }(), f = { lines: 12, length: 7, width: 5, radius: 10, rotate: 0, corners: 1, color: "#000", direction: 1, speed: 1, trail: 100, opacity: .25, fps: 20, zIndex: 2e9, className: "spinner", top: "50%", left: "50%", position: "absolute" }; s.defaults = {}, o(s.prototype, { spin: function (e) { this.stop(); var i = this, n = i.opts, o = i.el = r(t(0, { className: n.className }), { position: n.position, width: 0, zIndex: n.zIndex }); if (n.radius + n.length + n.width, r(o, { left: n.left, top: n.top }), e && e.insertBefore(o, e.firstChild || null), o.setAttribute("role", "progressbar"), i.lines(o, i.opts), !u) { var a, s = 0, l = (n.lines - 1) * (1 - n.direction) / 2, d = n.fps, c = d / n.speed, p = (1 - n.opacity) / (c * n.trail / 100), f = c / n.lines; (function h() { s++; for (var t = 0; n.lines > t; t++) a = Math.max(1 - (s + (n.lines - t) * f) % c * p, n.opacity), i.opacity(o, t * n.direction + l, a, n); i.timeout = i.el && setTimeout(h, ~~(1e3 / d)) })() } return i }, stop: function () { var t = this.el; return t && (clearTimeout(this.timeout), t.parentNode && t.parentNode.removeChild(t), this.el = void 0), this }, lines: function (n, o) { function s(e, i) { return r(t(), { position: "absolute", width: o.length + o.width + "px", height: o.width + "px", background: e, boxShadow: i, transformOrigin: "left", transform: "rotate(" + ~~(360 / o.lines * d + o.rotate) + "deg) translate(" + o.radius + "px" + ",0)", borderRadius: (o.corners * o.width >> 1) + "px" }) } for (var l, d = 0, c = (o.lines - 1) * (1 - o.direction) / 2; o.lines > d; d++) l = r(t(), { position: "absolute", top: 1 + ~(o.width / 2) + "px", transform: o.hwaccel ? "translate3d(0,0,0)" : "", opacity: o.opacity, animation: u && i(o.opacity, o.trail, c + d * o.direction, o.lines) + " " + 1 / o.speed + "s linear infinite" }), o.shadow && e(l, r(s("#000", "0 0 4px #000"), { top: "2px" })), e(n, e(l, s(a(o.color, d), "0 0 1px rgba(0,0,0,.1)"))); return n }, opacity: function (t, e, i) { t.childNodes.length > e && (t.childNodes[e].style.opacity = i) } }); var h = r(t("group"), { behavior: "url(#default#VML)" }); return !n(h, "transform") && h.adj ? l() : u = n(h, "animation"), s });

/*!
 * Ladda 0.9.8 (2015-03-19, 17:22)
 * http://lab.hakim.se/ladda
 * MIT licensed
 *
 * Copyright (C) 2015 Hakim El Hattab, http://hakim.se
 */
(function (t, e) { "object" == typeof exports ? module.exports = e(require("spin.js")) : "function" == typeof define && define.amd ? define(["spin"], e) : t.Ladda = e(t.Spinner) })(this, function (t) { "use strict"; function e(t) { if (t === void 0) return console.warn("Ladda button target must be defined."), void 0; t.querySelector(".ladda-label") || (t.innerHTML = '<span class="ladda-label">' + t.innerHTML + "</span>"); var e, n = t.querySelector(".ladda-spinner"); n || (n = document.createElement("span"), n.className = "ladda-spinner"), t.appendChild(n); var r, a = { start: function () { return e || (e = o(t)), t.setAttribute("disabled", ""), t.setAttribute("data-loading", ""), clearTimeout(r), e.spin(n), this.setProgress(0), this }, startAfter: function (t) { return clearTimeout(r), r = setTimeout(function () { a.start() }, t), this }, stop: function () { return t.removeAttribute("disabled"), t.removeAttribute("data-loading"), clearTimeout(r), e && (r = setTimeout(function () { e.stop() }, 1e3)), this }, toggle: function () { return this.isLoading() ? this.stop() : this.start(), this }, setProgress: function (e) { e = Math.max(Math.min(e, 1), 0); var n = t.querySelector(".ladda-progress"); 0 === e && n && n.parentNode ? n.parentNode.removeChild(n) : (n || (n = document.createElement("div"), n.className = "ladda-progress", t.appendChild(n)), n.style.width = (e || 0) * t.offsetWidth + "px") }, enable: function () { return this.stop(), this }, disable: function () { return this.stop(), t.setAttribute("disabled", ""), this }, isLoading: function () { return t.hasAttribute("data-loading") }, remove: function () { clearTimeout(r), t.removeAttribute("disabled", ""), t.removeAttribute("data-loading", ""), e && (e.stop(), e = null); for (var n = 0, i = u.length; i > n; n++) if (a === u[n]) { u.splice(n, 1); break } } }; return u.push(a), a } function n(t, e) { for (; t.parentNode && t.tagName !== e;) t = t.parentNode; return e === t.tagName ? t : void 0 } function r(t) { for (var e = ["input", "textarea", "select"], n = [], r = 0; e.length > r; r++) for (var a = t.getElementsByTagName(e[r]), i = 0; a.length > i; i++) a[i].hasAttribute("required") && n.push(a[i]); return n } function a(t, a) { a = a || {}; var i = []; "string" == typeof t ? i = s(document.querySelectorAll(t)) : "object" == typeof t && "string" == typeof t.nodeName && (i = [t]); for (var o = 0, u = i.length; u > o; o++) (function () { var t = i[o]; if ("function" == typeof t.addEventListener) { var s = e(t), u = -1; t.addEventListener("click", function () { var e = !0, i = n(t, "FORM"); if (i !== void 0) for (var o = r(i), d = 0; o.length > d; d++) "" === o[d].value.replace(/^\s+|\s+$/g, "") && (e = !1), "checkbox" !== o[d].type && "radio" !== o[d].type || o[d].checked || (e = !1), "email" === o[d].type && (e = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(o[d].value)); e && (s.startAfter(1), "number" == typeof a.timeout && (clearTimeout(u), u = setTimeout(s.stop, a.timeout)), "function" == typeof a.callback && a.callback.apply(null, [s])) }, !1) } })() } function i() { for (var t = 0, e = u.length; e > t; t++) u[t].stop() } function o(e) { var n, r = e.offsetHeight; 0 === r && (r = parseFloat(window.getComputedStyle(e).height)), r > 32 && (r *= .8), e.hasAttribute("data-spinner-size") && (r = parseInt(e.getAttribute("data-spinner-size"), 10)), e.hasAttribute("data-spinner-color") && (n = e.getAttribute("data-spinner-color")); var a = 12, i = .2 * r, o = .6 * i, s = 7 > i ? 2 : 3; return new t({ color: n || "#fff", lines: a, radius: i, length: o, width: s, zIndex: "auto", top: "auto", left: "auto", className: "" }) } function s(t) { for (var e = [], n = 0; t.length > n; n++) e.push(t[n]); return e } var u = []; return { bind: a, create: e, stopAll: i } });

/*!
 * Ladda for jQuery
 * http://lab.hakim.se/ladda
 * MIT licensed
 *
 * Copyright (C) 2015 Hakim El Hattab, http://hakim.se
 */
(function (t, e) { if (void 0 === e) return console.error("jQuery required for Ladda.jQuery"); var i = []; e = e.extend(e, { ladda: function (e) { "stopAll" === e && t.stopAll() } }), e.fn = e.extend(e.fn, { ladda: function (n) { var r = i.slice.call(arguments, 1); return "bind" === n ? (r.unshift(e(this).selector), t.bind.apply(t, r)) : e(this).each(function () { var i, o = e(this); void 0 === n ? o.data("ladda", t.create(this)) : (i = o.data("ladda"), i[n].apply(i, r)) }), this } }) })(this.Ladda, this.jQuery);





/*! $.noUiSlider - WTFPL - refreshless.com/nouislider/ */

/*jslint browser: true */
/*jslint devel: true */
/*jslint continue: true */
/*jslint plusplus: true */
/*jslint sub: true */
/*jslint white: true */

// ==ClosureCompiler==
// @externs_url http://refreshless.com/externs/jquery-1.8.js
// @compilation_level ADVANCED_OPTIMIZATIONS
// @warning_level VERBOSE
// ==/ClosureCompiler==

(function ($) {

    'use strict';

    var
	// Cache the document selector;
/** @const */ doc = $(document),
	// Namespace for binding and unbinding slider events;
/** @const */ namespace = '.nui',
	// Copy of the current value function;
/** @const */ $val = $.fn.val,
	// Determine the events to bind. IE11 implements pointerEvents without
	// a prefix, which breaks compatibility with the IE10 implementation.
/** @const */ actions = window.navigator.pointerEnabled ? {
    start: 'pointerdown',
    move: 'pointermove',
    end: 'pointerup'
} : window.navigator.msPointerEnabled ? {
    start: 'MSPointerDown',
    move: 'MSPointerMove',
    end: 'MSPointerUp'
} : {
    start: 'mousedown touchstart',
    move: 'mousemove touchmove',
    end: 'mouseup touchend'
},
	// Re-usable list of classes;
/** @const */ Classes = [
/*  0 */  'noUi-target'
/*  1 */, 'noUi-base'
/*  2 */, 'noUi-origin'
/*  3 */, 'noUi-handle'
/*  4 */, 'noUi-horizontal'
/*  5 */, 'noUi-vertical'
/*  6 */, 'noUi-background'
/*  7 */, 'noUi-connect'
/*  8 */, 'noUi-ltr'
/*  9 */, 'noUi-rtl'
/* 10 */, 'noUi-dragable'
/* 11 */, ''
/* 12 */, 'noUi-state-drag'
/* 13 */, ''
/* 14 */, 'noUi-state-tap'
/* 15 */, 'noUi-active'
/* 16 */, 'noUi-extended'
/* 17 */, 'noUi-stacking'
],
/** @const */ Formatting = [
/*  0 */  'decimals'
/*  1 */, 'mark'
/*  2 */, 'thousand'
/*  3 */, 'prefix'
/*  4 */, 'postfix'
/*  5 */, 'encoder'
/*  6 */, 'decoder'
/*  7 */, 'negative'
/*  8 */, 'negativeBefore'
],
/** @const */ FormatDefaults = [
/*  0 */  2
/*  1 */, '.'
/*  2 */, ''
/*  3 */, ''
/*  4 */, ''
/*  5 */, function (a) { return a; }
/*  6 */, function (a) { return a; }
/*  7 */, '-'
/*  8 */, ''
];


    // Error handling

    function throwError(message) {
        throw new RangeError('noUiSlider: ' + message);
    }

    // Throw an error if formatting options are incompatible.
    function throwEqualError(F, a, b) {
        if ((F[a] || F[b]) && (F[a] === F[b])) {
            throwError("(Link) '" + a + "' can't match '" + b + "'.'");
        }
    }


    // General helpers

    // Limits a value to 0 - 100
    function limit(a) {
        return Math.max(Math.min(a, 100), 0);
    }

    // Round a value to the closest 'to'.
    function closest(value, to) {
        return Math.round(value / to) * to;
    }

    // Determine the size of a sub-range in relation to a full range.
    function subRangeRatio(pa, pb) {
        return (100 / (pb - pa));
    }


    // Type validation

    function typeMatch(a, b) {
        return (typeof a) === (typeof b);
    }

    // Test in an object is an instance of jQuery or Zepto.
    function isInstance(a) {
        return a instanceof $ || ($['zepto'] && $['zepto']['isZ'](a));
    }

    // Checks whether a value is numerical.
    function isNumeric(a) {
        return typeof a === 'number' && !isNaN(a) && isFinite(a);
    }

    // Wraps a variable as an array, if it isn't one yet.
    function asArray(a) {
        return $.isArray(a) ? a : [a];
    }


    // Class handling

    // Sets a class and removes it after [duration] ms.
    function addClassFor(element, className, duration) {
        element.addClass(className);
        setTimeout(function () {
            element.removeClass(className);
        }, duration);
    }


    // Tests if element has a class, adds it if not. Returns original state.
    function getsClass(element, className) {

        var has = element.hasClass(className);

        if (!has) {
            element.addClass(className);
        }

        return has;
    }


    // Value calculation

    // (percentage) How many percent is this value of this range?
    function fromPercentage(range, value) {
        return (value * 100) / (range[1] - range[0]);
    }

    // (percentage) Where is this value on this range?
    function toPercentage(range, value) {
        return fromPercentage(range, range[0] < 0 ?
			value + Math.abs(range[0]) :
				value - range[0]);
    }

    // (value) How much is this percentage on this range?
    function isPercentage(range, value) {
        return ((value * (range[1] - range[0])) / 100) + range[0];
    }

    // (percentage)
    function toStepping(options, value) {

        if (value >= options.xVal.slice(-1)[0]) {
            return 100;
        }

        var j = 1, va, vb, pa, pb;
        while (value >= options.xVal[j]) {
            j++;
        }

        va = options.xVal[j - 1];
        vb = options.xVal[j];
        pa = options.xPct[j - 1];
        pb = options.xPct[j];

        return pa + (toPercentage([va, vb], value) / subRangeRatio(pa, pb));
    }

    // (value)
    function fromStepping(options, value) {

        // There is no range group that fits 100
        if (value >= 100) {
            return options.xVal.slice(-1)[0];
        }

        var j = 1, va, vb, pa, pb;
        while (value >= options.xPct[j]) {
            j++;
        }

        va = options.xVal[j - 1];
        vb = options.xVal[j];
        pa = options.xPct[j - 1];
        pb = options.xPct[j];

        return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
    }

    // (percentage) Get the step that applies at a certain value.
    function getStep(options, value) {

        var j = 1, a, b;
        while (value >= options.xPct[j]) {
            j++;
        }

        if (options.snap) {

            a = options.xPct[j - 1];
            b = options.xPct[j];

            if ((value - a) > ((b - a) / 2)) {
                return b;
            }

            return a;
        }

        if (!options.xSteps[j - 1]) {
            return value;
        }

        return options.xPct[j - 1] + closest(
			value - options.xPct[j - 1],
			options.xSteps[j - 1]
		);
    }


    // Event handling

    // Provide a clean event with standardized offset values.
    function fixEvent(e) {

        // Prevent scrolling and panning on touch events, while
        // attempting to slide. The tap event also depends on this.
        e.preventDefault();

        // Filter the event to register the type, which can be
        // touch, mouse or pointer. Offset changes need to be
        // made on an event specific basis.
        var touch = e.type.indexOf('touch') === 0
			, mouse = e.type.indexOf('mouse') === 0
			, pointer = e.type.indexOf('pointer') === 0
			, x, y, event = e;

        // IE10 implemented pointer events with a prefix;
        if (e.type.indexOf('MSPointer') === 0) {
            pointer = true;
        }

        // Get the originalEvent, if the event has been wrapped
        // by jQuery. Zepto doesn't wrap the event.
        if (e.originalEvent) {
            e = e.originalEvent;
        }

        if (touch) {
            // noUiSlider supports one movement at a time,
            // so we can select the first 'changedTouch'.
            x = e.changedTouches[0].pageX;
            y = e.changedTouches[0].pageY;
        }

        if (mouse || pointer) {

            // Polyfill the pageXOffset and pageYOffset
            // variables for IE7 and IE8;
            if (!pointer && window.pageXOffset === undefined) {
                window.pageXOffset = document.documentElement.scrollLeft;
                window.pageYOffset = document.documentElement.scrollTop;
            }

            x = e.clientX + window.pageXOffset;
            y = e.clientY + window.pageYOffset;
        }

        event.points = [x, y];
        event.cursor = mouse;

        return event;
    }


    // Organize formatting in an object.

    /** @constructor */
    function Format(options) {

        // If no settings where provided, the defaults will be loaded.
        if (options === undefined) {
            options = {};
        }

        if (typeof options !== 'object') {
            throwError("(Format) 'format' option must be an object.");
        }

        var settings = {};

        // Copy all values into a new object.
        $(Formatting).each(function (i, val) {

            if (options[val] === undefined) {

                settings[val] = FormatDefaults[i];

                // When we aren't loading defaults, validate the entry.
            } else if (typeMatch(options[val], FormatDefaults[i])) {

                // Support for up to 7 decimals.
                // More can't be guaranteed due to floating point issues.
                if (val === 'decimals') {
                    if (options[val] < 0 || options[val] > 7) {
                        throwError("(Format) 'format.decimals' option must be between 0 and 7.");
                    }
                }

                settings[val] = options[val];

                // If the value isn't valid, emit an error.
            } else {
                throwError("(Format) 'format." + val + "' must be a " + typeof FormatDefaults[i] + ".");
            }
        });

        // Some values can't be extracted from a
        // string if certain combinations are present.
        throwEqualError(settings, 'mark', 'thousand');
        throwEqualError(settings, 'prefix', 'negative');
        throwEqualError(settings, 'prefix', 'negativeBefore');

        this.settings = settings;
    }

    // Shorthand for internal value get
    Format.prototype.v = function (a) {
        return this.settings[a];
    };

    Format.prototype.to = function (number) {

        function reverse(a) {
            return a.split('').reverse().join('');
        }

        number = this.v('encoder')(number);

        var negative = '', preNegative = '', base = '', mark = '';

        if (number < 0) {
            negative = this.v('negative');
            preNegative = this.v('negativeBefore');
        }

        // Round to proper decimal count
        number = Math.abs(number).toFixed(this.v('decimals')).toString();
        number = number.split('.');

        // Rounding away decimals might cause a value of -0
        // when using very small ranges. Remove those cases.
        if (parseFloat(number) === 0) {
            number[0] = '0';
        }

        // Group numbers in sets of three.
        if (this.v('thousand')) {
            base = reverse(number[0]).match(/.{1,3}/g);
            base = reverse(base.join(reverse(this.v('thousand'))));
        } else {
            base = number[0];
        }

        // Ignore the decimal separator if decimals are set to 0.
        if (this.v('mark') && number.length > 1) {
            mark = this.v('mark') + number[1];
        }

        // Return the finalized formatted number.
        return preNegative +
			this.v('prefix') +
			negative +
			base +
			mark +
			this.v('postfix');
    };

    Format.prototype.from = function (input) {

        function esc(s) {
            return s.replace(/[\-\/\\\^$*+?.()|\[\]{}]/g, '\\$&');
        }

        var isNeg;
        // The set request might want to ignore this handle.
        // Test for 'undefined' too, as a two-handle slider
        // can still be set with an integer.
        if (input === null || input === undefined) {
            return false;
        }

        // Remove formatting and set period for float parsing.
        input = input.toString();

        // Replace the preNegative indicator.
        isNeg = input.replace(new RegExp('^' + esc(this.v('negativeBefore'))), '');

        // Check if the value changed by removing the negativeBefore symbol.
        if (input !== isNeg) {
            input = isNeg;
            isNeg = '-';
        } else {
            isNeg = '';
        }

        // If prefix is set and the number is actually prefixed.
        input = input.replace(new RegExp('^' + esc(this.v('prefix'))), '');

        // Only replace if a negative sign is set.
        if (this.v['negative']) {

            // Reset isNeg to prevent double '-' insertion.
            isNeg = '';

            // Reset the negative sign to '-'
            input = input.replace(new RegExp('^' + esc(this.v('negative'))), '-');
        }

        // Clean the input string
        input = input
		// If postfix is set and the number is postfixed.
			.replace(new RegExp(esc(this.v('postfix')) + '$'), '')
		// Remove the separator every three digits.
			.replace(new RegExp(esc(this.v('thousand')), 'g'), '')
		// Set the decimal separator back to period.
			.replace(this.v('mark'), '.');

        // Run the user defined decoder. Returns input by default.
        input = this.v('decoder')(parseFloat(isNeg + input));

        // Ignore invalid input
        if (isNaN(input)) {
            return false;
        }

        return input;
    };


    // Serialization target

    /** @constructor */
    function Link(entry, update) {

        // Make sure Link isn't called as a function, in which case
        // the 'this' scope would be the window.
        if (!(this instanceof Link)) {
            throw new Error("Link: " +
				"Don't use Link as a function. " +
				"Use the 'new' keyword.");
        }

        if (!entry) {
            throw new RangeError("Link: missing parameters.");
        }

        // Write all formatting to this object.
        // No validation needed, as we'll merge these with the parent
        // format options first.
        this.formatting = entry['format'] || {};

        // Store the update option.
        this.update = !update;

        // In IE < 9, .bind() isn't available, need this link in .change().
        var that = this,

            // Get values from the input.
            target = entry['target'] || function () { },
            method = entry['method'],

            // Find the type of this link.
            isTooltip = (typeof target === 'string' && target.indexOf('-tooltip-') === 0),
            isHidden = (typeof target === 'string' && target.indexOf('-') !== 0),
            isMethod = (typeof target === 'function'),
            is$ = (isInstance(target)),
            isInput = (is$ && target.is('input, select, textarea')),
            methodIsFunction = (is$ && typeof method === 'function'),
            methodIsName = (is$ && typeof method === 'string' && target[method]);

        // If target is a string, a new hidden input will be created.
        if (isTooltip) {

            // By default, use the 'html' method.
            this.method = method || 'html';

            // Use jQuery to create the element
            this.el = $(target.replace('-tooltip-', '') || '<div/>')[0];

            return;
        }

        // If the string doesn't begin with '-', which is reserved, add a new hidden input.
        if (isHidden) {

            this.method = 'val';

            this.el = document.createElement('input');
            this.el.name = target;
            this.el.type = 'hidden';

            return;
        }

        // The target can also be a function, which will be called.
        if (isMethod) {
            this.target = false;
            this.method = target;
            return;
        }

        // If the target is and $ element.
        if (is$) {

            // The method must exist on the element.
            if (method && (methodIsFunction || methodIsName)) {
                this.target = target;
                this.method = method;
                return;
            }

            // If a jQuery/Zepto input element is provided, but no method is set,
            // the element can assume it needs to respond to 'change'...
            if (!method && isInput) {

                // Default to .val if this is an input element.
                this.method = 'val';
                this.target = target;

                // Set the slider to a new value on change.
                this.target.on('change', function (e) {

                    // Returns null array.
                    function at(a, b, c) {
                        return [c ? a : b, c ? b : a];
                    }

                    var output = at(null, $(e.target).val(), that.N);

                    that.obj.val(output, { 'link': that });
                });

                return;
            }

            // ... or not.
            if (!method && !isInput) {

                // Default arbitrarily to 'html'.
                this.method = 'html';
                this.target = target;

                return;
            }
        }

        throw new RangeError("Link: Invalid Link.");
    }

    // Provides external items with the slider value.
    Link.prototype.write = function (options, value, handle, slider, update) {

        // Don't synchronize this Link.
        if (this.update && update === false) {
            return;
        }

        // Convert the value to the slider stepping/range.
        value = fromStepping(options, value);

        // Format values for display.
        value = this.format(value);

        // Store the numerical value.
        this.saved = value;

        // Branch between serialization to a function or an object.
        if (typeof this.method === 'function') {
            // When target is undefined, the target was a function.
            // In that case, provided the slider as the calling scope.
            // Use [0] to get the DOM element, not the $ instance.
            this.method.call(this.target[0] || slider[0], value, handle, slider);
        } else {
            this.target[this.method](value, handle, slider);
        }
    };

    // Parses slider value to user defined display.
    Link.prototype.format = function (a) {
        return this.formatting.to(a);
    };

    // Converts a formatted value back to a real number.
    Link.prototype.valueOf = function (a) {
        return this.formatting.from(a);
    };


    // Input validation

    function testStep(parsed, entry) {

        if (!isNumeric(entry)) {
            throwError("'step' is not numeric.");
        }

        // The step option can still be used to set stepping
        // for linear sliders. Overwritten if set in 'range'.
        parsed.xSteps[0] = entry;
    }

    function testRange(parsed, entry) {

        // Filter incorrect input.
        if (typeof entry !== 'object' || $.isArray(entry)) {
            throwError("'range' is not an object.");
        }

        // Loop all entries.
        $.each(entry, function (index, value) {

            var percentage;

            // Wrap numerical input in an array.
            if (typeof value === "number") {
                value = [value];
            }

            // Reject any invalid input.
            if (!$.isArray(value)) {
                throwError("'range' contains invalid value.");
            }

            // Covert min/max syntax to 0 and 100.
            if (index === 'min') {
                percentage = 0;
            } else if (index === 'max') {
                percentage = 100;
            } else {
                percentage = parseFloat(index);
            }

            // Check for correct input.
            if (!isNumeric(percentage) || !isNumeric(value[0])) {
                throwError("'range' value isn't numeric.");
            }

            // Store values.
            parsed.xPct.push(percentage);
            parsed.xVal.push(value[0]);

            // NaN will evaluate to false too, but to keep
            // logging clear, set step explicitly. Make sure
            // not to override the 'step' setting with false.
            if (!percentage) {
                if (!isNaN(value[1])) {
                    parsed.xSteps[0] = value[1];
                }
            } else {
                parsed.xSteps.push(isNaN(value[1]) ? false : value[1]);
            }
        });

        $.each(parsed.xSteps, function (i, n) {

            // Ignore 'false' stepping.
            if (!n) {
                return true;
            }

            // Check if step fits. Not required, but this might serve some goal.
            // !((parsed.xVal[i+1] - parsed.xVal[i]) % n);

            // Factor to range ratio
            parsed.xSteps[i] = fromPercentage([
				 parsed.xVal[i]
				, parsed.xVal[i + 1]
            ], n) / subRangeRatio(
				parsed.xPct[i],
				parsed.xPct[i + 1]);
        });
    }

    function testStart(parsed, entry) {

        if (typeof entry === "number") {
            entry = [entry];
        }

        // Validate input. Values aren't tested, the internal Link will do
        // that and provide a valid location.
        if (!$.isArray(entry) || !entry.length || entry.length > 2) {
            throwError("'start' option is incorrect.");
        }

        // Store the number of handles.
        parsed.handles = entry.length;

        // When the slider is initialized, the .val method will
        // be called with the start options.
        parsed.start = entry;
    }

    function testSnap(parsed, entry) {

        // Enforce 100% stepping within subranges.
        parsed.snap = entry;

        if (typeof entry !== 'boolean') {
            throwError("'snap' option must be a boolean.");
        }
    }

    function testConnect(parsed, entry) {

        if (entry === 'lower' && parsed.handles === 1) {
            parsed.connect = 1;
        } else if (entry === 'upper' && parsed.handles === 1) {
            parsed.connect = 2;
        } else if (entry === true && parsed.handles === 2) {
            parsed.connect = 3;
        } else if (entry === false) {
            parsed.connect = 0;
        } else {
            throwError("'connect' option was doesn't match handle count.");
        }
    }

    function testOrientation(parsed, entry) {

        // Set orientation to an a numerical value for easy
        // array selection.
        switch (entry) {
            case 'horizontal':
                parsed.ort = 0;
                break;
            case 'vertical':
                parsed.ort = 1;
                break;
            default:
                throwError("'orientation' option is invalid.");
        }
    }

    function testMargin(parsed, entry) {

        if (parsed.xPct.length > 2) {
            throwError("'margin' option is only supported on linear sliders.");
        }

        // Parse value to range and store. As xVal is checked
        // to be no bigger than 2, use it as range.
        parsed.margin = fromPercentage(parsed.xVal, entry);

        if (!isNumeric(entry)) {
            throwError("'margin' option must be numeric.");
        }
    }

    function testDirection(parsed, entry) {

        // Set direction as a numerical value for easy parsing.
        // Invert connection for RTL sliders, so that the proper
        // handles get the connect/background classes.
        switch (entry) {
            case 'ltr':
                parsed.dir = 0;
                break;
            case 'rtl':
                parsed.dir = 1;
                parsed.connect = [0, 2, 1, 3][parsed.connect];
                break;
            default:
                throwError("'direction' option was not recognized.");
        }
    }

    function testBehaviour(parsed, entry) {

        // Make sure the input is a string.
        if (typeof entry !== 'string') {
            throwError("'behaviour' must be a string containing options.");
        }

        // Check if the string contains any keywords.
        // None are required.
        var tap = entry.indexOf('tap') >= 0,
			extend = entry.indexOf('extend') >= 0,
			drag = entry.indexOf('drag') >= 0,
			fixed = entry.indexOf('fixed') >= 0,
			snap = entry.indexOf('snap') >= 0;

        parsed.events = {
            tap: tap || snap,
            extend: extend,
            drag: drag,
            fixed: fixed,
            snap: snap
        };
    }

    function testSerialization(parsed, entry, sliders) {

        parsed.ser = [entry['lower'], entry['upper']];
        parsed.formatting = new Format(entry['format']);

        $.each(parsed.ser, function (i, a) {

            // Check if the provided option is an array.
            if (!$.isArray(a)) {
                throwError("'serialization." + (!i ? 'lower' : 'upper') + "' must be an array.");
            }

            $.each(a, function () {

                // Check if entry is a Link.
                if (!(this instanceof Link)) {
                    throwError("'serialization." + (!i ? 'lower' : 'upper') + "' can only contain Link instances.");
                }

                // Assign other properties.
                this.N = i;
                this.obj = sliders;
                this.scope = this.scope || sliders;

                // Run internal validator.
                this.formatting = new Format($.extend({}
					, entry['format']
					, this.formatting
				));
            });
        });

        // If the slider has two handles and is RTL,
        // reverse the serialization input. For one handle,
        // lower is still lower.
        if (parsed.dir && parsed.handles > 1) {
            parsed.ser.reverse();
        }
    }

    // Test all developer settings and parse to assumption-safe values.
    function test(options, sliders) {

        /*	Every input option is tested and parsed. This'll prevent
            endless validation in internal methods. These tests are
            structured with an item for every option available. An
            option can be marked as required by setting the 'r' flag.
            The testing function is provided with three arguments:
                - The provided value for the option;
                - A reference to the options object;
                - The name for the option;
    
            The testing function returns false when an error is detected,
            or true when everything is OK. It can also modify the option
            object, to make sure all values can be correctly looped elsewhere. */

        var parsed = {
            xPct: []
			, xVal: []
			, xSteps: [false]
			, margin: 0
        }, tests;

        tests = {
            'step': { r: false, t: testStep },
            'range': { r: true, t: testRange },
            'start': { r: true, t: testStart },
            'snap': { r: false, t: testSnap },
            'connect': { r: true, t: testConnect },
            'orientation': { r: false, t: testOrientation },
            'margin': { r: false, t: testMargin },
            'direction': { r: true, t: testDirection },
            'behaviour': { r: true, t: testBehaviour },
            'serialization': { r: true, t: testSerialization }
        };

        // Set defaults where applicable.
        options = $.extend({
            'connect': false
			, 'direction': 'ltr'
			, 'behaviour': 'tap'
			, 'orientation': 'horizontal'
        }, options);

        // Make sure the test for serialization runs.
        options['serialization'] = $.extend({
            'lower': []
			, 'upper': []
			, 'format': {}
        }, options['serialization']);

        // Run all options through a testing mechanism to ensure correct
        // input. It should be noted that options might get modified to
        // be handled properly. E.g. wrapping integers in arrays.
        $.each(tests, function (name, test) {

            if (options[name] === undefined) {
                if (test.r) {
                    throwError("'" + name + "' is required.");
                } else {
                    return true;
                }
            }

            test.t(parsed, options[name], sliders);
        });

        // Pre-define the styles.
        parsed.style = parsed.ort ? 'top' : 'left';

        return parsed;
    }


    // DOM additions

    // Append a handle to the base.
    function addHandle(options, index) {

        var handle = $('<div><div/></div>').addClass(Classes[2]),
			additions = ['-lower', '-upper'];

        if (options.dir) {
            additions.reverse();
        }

        handle.children().addClass(
			Classes[3] + " " + Classes[3] + additions[index]
		);

        return handle;
    }

    // Create a copy of an element-creating Link.
    function addElement(handle, link) {

        // If the Link requires creation of a new element,
        // create this element and return a new Link instance.
        if (link.el) {
            link = new Link({
                'target': $(link.el).clone().appendTo(handle),
                'method': link.method,
                'format': link.formatting
            }, true);
        }

        // Otherwise, return the reference.
        return link;
    }

    // Loop all links for a handle.
    function addElements(elements, handle, formatting) {

        var index, list = [];

        // Use the Link interface to provide unified
        // formatting for the .val() method.
        list.push(
			new Link({
			    'format': formatting
			}, true)
		);

        // Loop all links in either 'lower' or 'upper'.
        for (index = 0; index < elements.length; index++) {
            list.push(addElement(handle, elements[index]));
        }

        return list;
    }

    // Go over all Links and assign them to a handle.
    function addLinks(options, handles) {

        var index, links = [];

        // Copy the links into a new array, instead of modifying
        // the 'options.ser' list. This allows replacement of the invalid
        // '.el' Links, while the others are still passed by reference.
        for (index = 0; index < options.handles; index++) {

            // Append a new array.
            links[index] = addElements(
				options.ser[index],
				handles[index].children(),
				options.formatting
			);
        }

        return links;
    }

    // Add the proper connection classes.
    function addConnection(connect, target, handles) {

        // Apply the required connection classes to the elements
        // that need them. Some classes are made up for several
        // segments listed in the class list, to allow easy
        // renaming and provide a minor compression benefit.
        switch (connect) {
            case 1: target.addClass(Classes[7]);
                handles[0].addClass(Classes[6]);
                break;
            case 3: handles[1].addClass(Classes[6]);
                /* falls through */
            case 2: handles[0].addClass(Classes[7]);
                /* falls through */
            case 0: target.addClass(Classes[6]);
                break;
        }
    }

    // Add handles and loop Link elements.
    function addHandles(options, base) {

        var index, handles = [];

        // Append handles.
        for (index = 0; index < options.handles; index++) {

            // Keep a list of all added handles.
            handles.push(addHandle(options, index).appendTo(base));
        }

        return handles;
    }

    // Initialize a single slider.
    function addSlider(options, target) {

        // Apply classes and data to the target.
        target.addClass([
			Classes[0],
			Classes[8 + options.dir],
			Classes[4 + options.ort]
        ].join(' '));

        return $('<div/>').appendTo(target).addClass(Classes[1]);
    }


    // Slider scope

    function closure(target, options, originalOptions) {

        // Internal variables

        // All variables local to 'closure' are marked $.
        var $Target = $(target),
            $Locations = [-1, -1],
            $Base,
            $Serialization,
            $Handles;

        // Shorthand for base dimensions.
        function baseSize() {
            return $Base[['width', 'height'][options.ort]]();
        }


        // External event handling

        function fireEvents(events) {

            // Use the external api to get the values.
            // Wrap the values in an array, as .trigger takes
            // only one additional argument.
            var index, values = [$Target.val()];

            for (index = 0; index < events.length; index++) {
                $Target.trigger(events[index], values);
            }
        }


        // Handle placement

        // Test suggested values and apply margin, step.
        function setHandle(handle, to, delimit) {

            var n = handle[0] !== $Handles[0][0] ? 1 : 0,
                lower = $Locations[0] + options.margin,
                upper = $Locations[1] - options.margin;

            // Don't delimit range dragging.
            if (delimit && $Handles.length > 1) {
                to = n ? Math.max(to, lower) : Math.min(to, upper);
            }

            // Handle the step option.
            if (to < 100) {
                to = getStep(options, to);
            }

            // Limit to 0/100 for .val input, trim anything beyond 7 digits, as
            // JavaScript has some issues in its floating point implementation.
            to = limit(parseFloat(to.toFixed(7)));

            // Return falsy if handle can't move. False for 0 or 100 limit,
            // '0' for limiting by another handle.
            if (to === $Locations[n]) {
                if ($Handles.length === 1) {
                    return false;
                }
                return (to === lower || to === upper) ? 0 : false;
            }

            // Set the handle to the new position.
            handle.css(options.style, to + '%');

            // Force proper handle stacking
            if (handle.is(':first-child')) {
                handle.toggleClass(Classes[17], to > 50);
            }

            // Update locations.
            $Locations[n] = to;

            // Invert the value if this is a right-to-left slider.
            if (options.dir) {
                to = 100 - to;
            }

            // Write values to serialization Links.
            // Convert the value to the correct relative representation.
            $($Serialization[n]).each(function () {
                this.write(options, to, handle.children(), $Target);
            });

            return true;
        }

        // Delimit proposed values for handle positions.
        function getPositions(a, b, delimit) {

            // Add movement to current position.
            var c = a + b[0], d = a + b[1];

            // Only alter the other position on drag,
            // not on standard sliding.
            if (delimit) {
                if (c < 0) {
                    d += Math.abs(c);
                }
                if (d > 100) {
                    c -= (d - 100);
                }

                // Limit values to 0 and 100.
                return [limit(c), limit(d)];
            }

            return [c, d];
        }

        // Handles movement by tapping.
        function jump(handle, to, instant) {

            if (!instant) {
                // Flag the slider as it is now in a transitional state.
                // Transition takes 300 ms, so re-enable the slider afterwards.
                addClassFor($Target, Classes[14], 300);
            }

            // Move the handle to the new position.
            setHandle(handle, to, false);

            fireEvents(['slide', 'set', 'change']);
        }


        // Events

        // Handler for attaching events trough a proxy.
        function attach(events, element, callback, data) {

            // Add the noUiSlider namespace to all events.
            events = events.replace(/\s/g, namespace + ' ') + namespace;

            // Bind a closure on the target.
            return element.on(events, function (e) {

                // jQuery and Zepto handle unset attributes differently.
                var disabled = $Target.attr('disabled');
                disabled = !(disabled === undefined || disabled === null);

                // Test if there is anything that should prevent an event
                // from being handled, such as a disabled state or an active
                // 'tap' transition.
                if ($Target.hasClass(Classes[14]) || disabled) {
                    return false;
                }

                e = fixEvent(e);
                e.calcPoint = e.points[options.ort];

                // Call the event handler with the event [ and additional data ].
                callback(e, data);
            });
        }

        // Handle movement on document for handle and range drag.
        function move(event, data) {

            var handles = data.handles || $Handles, positions, state = false,
                proposal = ((event.calcPoint - data.start) * 100) / baseSize(),
                h = handles[0][0] !== $Handles[0][0] ? 1 : 0;

            // Calculate relative positions for the handles.
            positions = getPositions(proposal, data.positions, handles.length > 1);

            state = setHandle(handles[0], positions[h], handles.length === 1);

            if (handles.length > 1) {
                state = setHandle(handles[1], positions[h ? 0 : 1], false) || state;
            }

            // Fire the 'slide' event if any handle moved.
            if (state) {
                fireEvents(['slide']);
            }
        }

        // Unbind move events on document, call callbacks.
        function end(event) {

            // The handle is no longer active, so remove the class.
            $('.' + Classes[15]).removeClass(Classes[15]);

            // Remove cursor styles and text-selection events bound to the body.
            if (event.cursor) {
                $('body').css('cursor', '').off(namespace);
            }

            // Unbind the move and end events, which are added on 'start'.
            doc.off(namespace);

            // Remove dragging class.
            $Target.removeClass(Classes[12]);

            // Fire the change and set events.
            fireEvents(['set', 'change']);
        }

        // Bind move events on document.
        function start(event, data) {

            // Mark the handle as 'active' so it can be styled.
            if (data.handles.length === 1) {
                data.handles[0].children().addClass(Classes[15]);
            }

            // A drag should never propagate up to the 'tap' event.
            event.stopPropagation();

            // Attach the move event.
            attach(actions.move, doc, move, {
                start: event.calcPoint,
                handles: data.handles,
                positions: [
                    $Locations[0],
                    $Locations[$Handles.length - 1]
                ]
            });

            // Unbind all movement when the drag ends.
            attach(actions.end, doc, end, null);

            // Text selection isn't an issue on touch devices,
            // so adding cursor styles can be skipped.
            if (event.cursor) {

                // Prevent the 'I' cursor and extend the range-drag cursor.
                $('body').css('cursor', $(event.target).css('cursor'));

                // Mark the target with a dragging state.
                if ($Handles.length > 1) {
                    $Target.addClass(Classes[12]);
                }

                // Prevent text selection when dragging the handles.
                $('body').on('selectstart' + namespace, false);
            }
        }

        // Move closest handle to tapped location.
        function tap(event) {

            var location = event.calcPoint, total = 0, to;

            // The tap event shouldn't propagate up and cause 'edge' to run.
            event.stopPropagation();

            // Add up the handle offsets.
            $.each($Handles, function () {
                total += this.offset()[options.style];
            });

            // Find the handle closest to the tapped position.
            total = (location < total / 2 || $Handles.length === 1) ? 0 : 1;

            location -= $Base.offset()[options.style];

            // Calculate the new position.
            to = (location * 100) / baseSize();

            // Find the closest handle and calculate the tapped point.
            // The set handle to the new position.
            jump($Handles[total], to, options.events.snap);

            if (options.events.snap) {
                start(event, { handles: [$Handles[total]] });
            }
        }

        // Move handle to edges when target gets tapped.
        function edge(event) {

            var i = event.calcPoint < $Base.offset()[options.style],
                to = i ? 0 : 100;

            i = i ? 0 : $Handles.length - 1;

            jump($Handles[i], to, false);
        }

        // Attach events to several slider parts.
        function events(behaviour) {

            var i, drag;

            // Attach the standard drag event to the handles.
            if (!behaviour.fixed) {

                for (i = 0; i < $Handles.length; i++) {

                    // These events are only bound to the visual handle
                    // element, not the 'real' origin element.
                    attach(actions.start, $Handles[i].children(), start, {
                        handles: [$Handles[i]]
                    });
                }
            }

            // Attach the tap event to the slider base.
            if (behaviour.tap) {
                attach(actions.start, $Base, tap, {
                    handles: $Handles
                });
            }

            // Extend tapping behaviour to target
            if (behaviour.extend) {

                $Target.addClass(Classes[16]);

                if (behaviour.tap) {
                    attach(actions.start, $Target, edge, {
                        handles: $Handles
                    });
                }
            }

            // Make the range dragable.
            if (behaviour.drag) {

                drag = $Base.find('.' + Classes[7]).addClass(Classes[10]);

                // When the range is fixed, the entire range can
                // be dragged by the handles. The handle in the first
                // origin will propagate the start event upward,
                // but it needs to be bound manually on the other.
                if (behaviour.fixed) {
                    drag = drag.add($Base.children().not(drag).children());
                }

                attach(actions.start, drag, start, {
                    handles: $Handles
                });
            }
        }


        // Initialize slider

        // Throw an error if the slider was already initialized.
        if (!$Target.is(':empty')) {
            throw new Error('Slider was already initialized.');
        }

        // Create the base element, initialise HTML and set classes.
        // Add handles and links.
        $Base = addSlider(options, $Target);
        $Handles = addHandles(options, $Base);
        $Serialization = addLinks(options, $Handles);

        // Set the connect classes.
        addConnection(options.connect, $Target, $Handles);

        // Attach user events.
        events(options.events);


        // Methods

        // Set the slider value.
        target.vSet = function (values, callback, link, update, animate) {

            var i, to;

            // The RTL settings is implemented by reversing the front-end,
            // internal mechanisms are the same.
            if (options.dir && options.handles > 1) {
                values.reverse();
            }

            // Animation is optional.
            if (animate) {
                addClassFor($Target, Classes[14], 300);
            }

            // If there are multiple handles to be set run the setting
            // mechanism twice for the first handle, to make sure it
            // can be bounced of the second one properly.
            for (i = 0; i < ($Handles.length > 1 ? 3 : 1) ; i++) {

                to = link || $Serialization[i % 2][0];
                to = to.valueOf(values[i % 2]);

                if (to === false) {
                    continue;
                }

                // Calculate the new handle position
                to = toStepping(options, to);

                // Invert the value if this is a right-to-left slider.
                if (options.dir) {
                    to = 100 - to;
                }

                // Force delimitation.
                if (setHandle($Handles[i % 2], to, true) === true) {
                    continue;
                }

                // Reset the input if it doesn't match the slider.
                $($Serialization[i % 2]).each(function () {
                    this.write(
                        options,
                        $Locations[i % 2],
                        $Handles[i % 2].children(),
                        $Target,
                        update
                    );
                });
            }

            // Optionally fire the 'set' event.
            if (callback === true) {
                fireEvents(['set']);
            }

            return this;
        };

        // Get the slider value.
        target.vGet = function () {

            var i, retour = [];

            // Get the value from all handles.
            for (i = 0; i < options.handles; i++) {
                retour[i] = $Serialization[i][0].saved;
            }

            // If only one handle is used, return a single value.
            if (retour.length === 1) {
                return retour[0];
            }

            if (options.dir && options.handles > 1) {
                return retour.reverse();
            }

            return retour;
        };

        // Destroy the slider and unbind all events.
        target.destroy = function () {

            // Loop all linked serialization objects and unbind all
            // events in the noUiSlider namespace.
            $.each($Serialization, function () {
                $.each(this, function () {
                    // Won't remove 'change' when bound implicitly.
                    if (this.target) {
                        this.target.off(namespace);
                    }
                });
            });

            // Unbind events on the slider, remove all classes and child elements.
            $(this).off(namespace)
                .removeClass(Classes.join(' '))
                .empty();

            // Return the original options from the closure.
            return originalOptions;
        };


        // Value setting

        // Use the public value method to set the start values.
        $Target.val(options.start);
    }


    // Access points

    // Run the standard initializer
    function initialize(originalOptions) {

        // Throw error if group is empty.
        if (!this.length) {
            throwError("Can't initialize slider on empty selection.");
        }

        // Test the options once, not for every slider.
        var options = test(originalOptions, this);

        // Loop all items, and provide a new closed-scope environment.
        return this.each(function () {
            closure(this, options, originalOptions);
        });
    }

    // Destroy the slider, then re-enter initialization.
    function rebuild(options) {

        return this.each(function () {

            // Get the current values from the slider,
            // including the initialization options.
            var values = $(this).val(),
				originalOptions = this.destroy(),

				// Extend the previous options with the newly provided ones.
				newOptions = $.extend({}, originalOptions, options);

            // Run the standard initializer.
            $(this).noUiSlider(newOptions);

            // If the start option hasn't changed,
            // reset the previous values.
            if (originalOptions.start === newOptions.start) {
                $(this).val(values);
            }
        });
    }


    // Expose serialization constructor.
    /** @expose */
    $.noUiSlider = { 'Link': Link };

    // Extend jQuery/Zepto with the noUiSlider method.
    /** @expose */
    $.fn.noUiSlider = function (options, re) {
        return (re ? rebuild : initialize).call(this, options);
    };

    $.fn.val = function () {

        // Convert the function arguments to an array.
        var args = Array.prototype.slice.call(arguments, 0),
			set, link, update, animate;

        // Test if there are arguments, and if not, call the 'get' method.
        if (!args.length) {

            // Determine whether to use the native val method.
            if (this.hasClass(Classes[0])) {
                return this[0].vGet();
            }

            return $val.apply(this);
        }

        // Extract modifiers for value method.
        if (typeof args[1] === 'object') {
            set = args[1]['set'];
            link = args[1]['link'];
            update = args[1]['update'];
            animate = args[1]['animate'];

            // Support the 'true' option.
        } else if (args[1] === true) {
            set = true;
        }

        // Loop all individual items, and handle setting appropriately.
        return this.each(function () {

            if ($(this).hasClass(Classes[0])) {
                this.vSet(asArray(args[0]), set, link, update, animate);
            } else {
                $val.apply($(this), args);
            }
        });
    };

}(window['jQuery'] || window['Zepto']));

















function enableSwipeIE(t) {
    if (ltIE9()) {

        jQuery.each(["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"], function (e) {
            t.fn[e] = function (i) {
                return t(this).on(e, i)
            }
        })

    } else {
        ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function (e) {
            t.fn[e] = function (i) {
                return t(this).on(e, i)
            }
        })
    }
};


















































(function (t) {
    if ("function" == typeof define && define.amd && define("uikit", function () {
        var e = t(window, window.jQuery, window.document);
        return e.load = function (t, i, n, o) {
            var s, a = t.split(","),
                r = [],
                l = (o.config && o.config.uikit && o.config.uikit.base ? o.config.uikit.base : "").replace(/\/+$/g, "");
            if (!l) throw Error("Please define base path to uikit in the requirejs config.");
            for (s = 0; a.length > s; s += 1) {
                var u = a[s].replace(/\./g, "/");
                r.push(l + "/js/addons/" + u)
    }
            i(r, function () {
                n(e)
    })
    }, e
    }), !window.jQuery) throw Error("UIkit requires jQuery");
    window && window.jQuery && t(window, window.jQuery, window.document)
})(function (t, e, i) {
    "use strict";
    var n = e.UIkit || {}, o = e("html"),
        s = e(window);
    return n.fn ? n : (n.version = "2.5.0", n.fn = function (t, i) {
        var o = arguments,
            s = t.match(/^([a-z\-]+)(?:\.([a-z]+))?/i),
            a = s[1],
            r = s[2];
        return n[a] ? this.each(function () {
            var t = e(this),
                s = t.data(a);
            s || t.data(a, s = new n[a](this, r ? void 0 : i)), r && s[r].apply(s, Array.prototype.slice.call(o, 1))
        }) : (e.error("UIkit component [" + a + "] does not exist."), this)
    }, n.support = {}, n.support.transition = function () {
        var t = function () {
            var t, e = i.body || i.documentElement,
                n = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (t in n)
                if (void 0 !== e.style[t]) return n[t]
        }();
        return t && {
            end: t
        }
    }(), n.support.animation = function () {
        var t = function () {
            var t, e = i.body || i.documentElement,
                n = {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd oanimationend",
                    animation: "animationend"
                };
            for (t in n)
                if (void 0 !== e.style[t]) return n[t]
        }();
        return t && {
            end: t
        }
    }(), n.support.requestAnimationFrame = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.msRequestAnimationFrame || t.oRequestAnimationFrame || function (e) {
        t.setTimeout(e, 1e3 / 60)
    }, n.support.touch = "ontouchstart" in window && navigator.userAgent.toLowerCase().match(/mobile|tablet/) || t.DocumentTouch && document instanceof t.DocumentTouch || t.navigator.msPointerEnabled && t.navigator.msMaxTouchPoints > 0 || t.navigator.pointerEnabled && t.navigator.maxTouchPoints > 0 || !1, n.support.mutationobserver = t.MutationObserver || t.WebKitMutationObserver || t.MozMutationObserver || null, n.Utils = {}, n.Utils.debounce = function (t, e, i) {
        var n;
        return function () {
            var o = this,
                s = arguments,
                a = function () {
                    n = null, i || t.apply(o, s)
                }, r = i && !n;
            clearTimeout(n), n = setTimeout(a, e), r && t.apply(o, s)
        }
    }, n.Utils.removeCssRules = function (t) {
        var e, i, n, o, s, a, r, l, u, c;
        t && setTimeout(function () {
            try {
                for (c = document.styleSheets, o = 0, r = c.length; r > o; o++) {
                    for (n = c[o], i = [], n.cssRules = n.cssRules, e = s = 0, l = n.cssRules.length; l > s; e = ++s) n.cssRules[e].type === CSSRule.STYLE_RULE && t.test(n.cssRules[e].selectorText) && i.unshift(e);
                    for (a = 0, u = i.length; u > a; a++) n.deleteRule(i[a])
                }
            } catch (h) { }
        }, 0)
    }, n.Utils.isInView = function (t, i) {
        var n = e(t);
        if (!n.is(":visible")) return !1;
        var o = s.scrollLeft(),
            a = s.scrollTop(),
            r = n.offset(),
            l = r.left,
            u = r.top;
        return i = e.extend({
            topoffset: 0,
            leftoffset: 0
        }, i), u + n.height() >= a && u - i.topoffset <= a + s.height() && l + n.width() >= o && l - i.leftoffset <= o + s.width() ? !0 : !1
    }, n.Utils.options = function (t) {
        if (e.isPlainObject(t)) return t;
        var i = t ? t.indexOf("{") : -1,
            n = {};
        if (-1 != i) try {
            n = Function("", "var json = " + t.substr(i) + "; return JSON.parse(JSON.stringify(json));")()
        } catch (o) { }
        return n
    }, n.Utils.template = function (t, e) {
        for (var i, n, o, s, a = t.replace(/\n/g, "\\n").replace(/\{\{\{\s*(.+?)\s*\}\}\}/g, "{{!$1}}").split(/(\{\{\s*(.+?)\s*\}\})/g), r = 0, l = [], u = 0; a.length > r;) {
            if (i = a[r], i.match(/\{\{\s*(.+?)\s*\}\}/)) switch (r += 1, i = a[r], n = i[0], o = i.substring(i.match(/^(\^|\#|\!|\~|\:)/) ? 1 : 0), n) {
                case "~":
                    l.push("for(var $i=0;$i<" + o + ".length;$i++) { var $item = " + o + "[$i];"), u++;
                    break;
                case ":":
                    l.push("for(var $key in " + o + ") { var $val = " + o + "[$key];"), u++;
                    break;
                case "#":
                    l.push("if(" + o + ") {"), u++;
                    break;
                case "^":
                    l.push("if(!" + o + ") {"), u++;
                    break;
                case "/":
                    l.push("}"), u--;
                    break;
                case "!":
                    l.push("__ret.push(" + o + ");");
                    break;
                default:
                    l.push("__ret.push(escape(" + o + "));")
            } else l.push("__ret.push('" + i.replace(/\'/g, "\\'") + "');");
            r += 1
        }
        s = ["var __ret = [];", "try {", "with($data){", u ? '__ret = ["Not all blocks are closed correctly."]' : l.join(""), "};", "}catch(e){__ret = [e.message];}", 'return __ret.join("").replace(/\\n\\n/g, "\\n");', "function escape(html) { return String(html).replace(/&/g, '&amp;').replace(/\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');}"].join("\n");
        var c = Function("$data", s);
        return e ? c(e) : c
    }, n.Utils.events = {}, n.Utils.events.click = n.support.touch ? "tap" : "click", e.UIkit = n, e.fn.uk = n.fn, e.UIkit.langdirection = "rtl" == o.attr("dir") ? "right" : "left", e(function () {
        if (e(i).trigger("uk-domready"), n.support.mutationobserver) {
            var t = new n.support.mutationobserver(n.Utils.debounce(function () {
                e(i).trigger("uk-domready")
            }, 300));
            t.observe(document.body, {
                childList: !0,
                subtree: !0
            }), n.support.touch && n.Utils.removeCssRules(/\.uk-(?!navbar).*:hover/)
        }
    }), o.addClass(n.support.touch ? "uk-touch" : "uk-notouch"), n)
}),
function (t, e) {
    "use strict";
    var i = t(window),
        n = "resize orientationchange",
        o = function (s, a) {
            var r = this,
                l = t(s);
            l.data("stackMargin") || (this.element = l, this.columns = this.element.children(), this.options = t.extend({}, o.defaults, a), this.columns.length && (i.on(n, function () {
                var n = function () {
                    r.process()
                };
                return t(function () {
                    n(), i.on("load", n)
                }), e.Utils.debounce(n, 150)
            }()), t(document).on("uk-domready", function () {
                r.columns = r.element.children(), r.process()
            }), this.element.data("stackMargin", this)))
        };
    t.extend(o.prototype, {
        process: function () {
            var e = this;
            this.revert();
            var i = !1,
                n = this.columns.filter(":visible:first"),
                o = n.length ? n.offset().top : !1;
            if (o !== !1) return this.columns.each(function () {
                var n = t(this);
                n.is(":visible") && (i ? n.addClass(e.options.cls) : n.offset().top != o && (n.addClass(e.options.cls), i = !0))
            }), this
        },
        revert: function () {
            return this.columns.removeClass(this.options.cls), this
        }
    }), o.defaults = {
        cls: "uk-margin-small-top"
    }, e.stackMargin = o, t(document).on("uk-domready", function () {
        t("[data-uk-margin]").each(function () {
            var i, n = t(this);
            n.data("stackMargin") || (i = new o(n, e.Utils.options(n.attr("data-uk-margin"))))
        })
    })
}(jQuery, jQuery.UIkit),
function (t) {
    function e(t, e, i, n) {
        return Math.abs(t - e) >= Math.abs(i - n) ? t - e > 0 ? "Left" : "Right" : i - n > 0 ? "Up" : "Down"
    }

    function i() {
        u = null, h.last && (h.el.trigger("longTap"), h = {})
    }

    function n() {
        u && clearTimeout(u), u = null
    }

    function o() {
        a && clearTimeout(a), r && clearTimeout(r), l && clearTimeout(l), u && clearTimeout(u), a = r = l = u = null, h = {}
    }

    function s(t) {
        return t.pointerType == t.MSPOINTER_TYPE_TOUCH && t.isPrimary
    }
    var a, r, l, u, c, h = {}, d = 750;
    t(function () {
        var f, p, m, g = 0,
            v = 0;
        "MSGesture" in window && (c = new MSGesture, c.target = document.body), t(document).bind("MSGestureEnd", function (t) {
            var e = t.originalEvent.velocityX > 1 ? "Right" : -1 > t.originalEvent.velocityX ? "Left" : t.originalEvent.velocityY > 1 ? "Down" : -1 > t.originalEvent.velocityY ? "Up" : null;
            e && (h.el.trigger("swipe"), h.el.trigger("swipe" + e))
        }).on("touchstart MSPointerDown", function (e) {
            ("MSPointerDown" != e.type || s(e.originalEvent)) && (m = "MSPointerDown" == e.type ? e : e.originalEvent.touches[0], f = Date.now(), p = f - (h.last || f), h.el = t("tagName" in m.target ? m.target : m.target.parentNode), a && clearTimeout(a), h.x1 = m.pageX, h.y1 = m.pageY, p > 0 && 250 >= p && (h.isDoubleTap = !0), h.last = f, u = setTimeout(i, d), c && "MSPointerDown" == e.type && c.addPointer(e.originalEvent.pointerId))
        }).on("touchmove MSPointerMove", function (t) {
            ("MSPointerMove" != t.type || s(t.originalEvent)) && (m = "MSPointerMove" == t.type ? t : t.originalEvent.touches[0], n(), h.x2 = m.pageX, h.y2 = m.pageY, g += Math.abs(h.x1 - h.x2), v += Math.abs(h.y1 - h.y2))
        }).on("touchend MSPointerUp", function (i) {
            ("MSPointerUp" != i.type || s(i.originalEvent)) && (n(), h.x2 && Math.abs(h.x1 - h.x2) > 30 || h.y2 && Math.abs(h.y1 - h.y2) > 30 ? l = setTimeout(function () {
                h.el.trigger("swipe"), h.el.trigger("swipe" + e(h.x1, h.x2, h.y1, h.y2)), h = {}
            }, 0) : "last" in h && (isNaN(g) || 30 > g && 30 > v ? r = setTimeout(function () {
                var e = t.Event("tap");
                e.cancelTouch = o, h.el.trigger(e), h.isDoubleTap ? (h.el.trigger("doubleTap"), h = {}) : a = setTimeout(function () {
                    a = null, h.el.trigger("singleTap"), h = {}
                }, 250)
            }, 0) : h = {}, g = v = 0))
        }).on("touchcancel MSPointerCancel", o), t(window).on("scroll", o)
    }), enableSwipeIE(t)
}(jQuery),
function (t, e) {
    "use strict";
    var i = function (e, n) {
        var o = this;
        this.options = t.extend({}, i.defaults, n), this.element = t(e), this.element.data("alert") || (this.element.on("click", this.options.trigger, function (t) {
            t.preventDefault(), o.close()
        }), this.element.data("alert", this))
    };
    t.extend(i.prototype, {
        close: function () {
            function t() {
                e.trigger("closed").remove()
            }
            var e = this.element.trigger("close");
            this.options.fade ? e.css("overflow", "hidden").css("max-height", e.height()).animate({
                height: 0,
                opacity: 0,
                "padding-top": 0,
                "padding-bottom": 0,
                "margin-top": 0,
                "margin-bottom": 0
            }, this.options.duration, t) : t()
        }
    }), i.defaults = {
        fade: !0,
        duration: 200,
        trigger: ".uk-alert-close"
    }, e.alert = i, t(document).on("click.alert.uikit", "[data-uk-alert]", function (n) {
        var o = t(this);
        if (!o.data("alert")) {
            var s = new i(o, e.Utils.options(o.data("uk-alert")));
            t(n.target).is(o.data("alert").options.trigger) && (n.preventDefault(), s.close())
        }
    })
}(jQuery, jQuery.UIkit),
function (t, e) {
    "use strict";
    var i = function (e, n) {
        var o = this,
            s = t(e);
        s.data("buttonRadio") || (this.options = t.extend({}, i.defaults, n), this.element = s.on("click", this.options.target, function (e) {
            e.preventDefault(), s.find(o.options.target).not(this).removeClass("uk-active").blur(), s.trigger("change", [t(this).addClass("uk-active")])
        }), this.element.data("buttonRadio", this))
    };
    t.extend(i.prototype, {
        getSelected: function () {
            this.element.find(".uk-active")
        }
    }), i.defaults = {
        target: ".uk-button"
    };
    var n = function (e, i) {
        var o = t(e);
        o.data("buttonCheckbox") || (this.options = t.extend({}, n.defaults, i), this.element = o.on("click", this.options.target, function (e) {
            e.preventDefault(), o.trigger("change", [t(this).toggleClass("uk-active").blur()])
        }), this.element.data("buttonCheckbox", this))
    };
    t.extend(n.prototype, {
        getSelected: function () {
            this.element.find(".uk-active")
        }
    }), n.defaults = {
        target: ".uk-button"
    };
    var o = function (e, i) {
        var n = this,
            s = t(e);
        s.data("button") || (this.options = t.extend({}, o.defaults, i), this.element = s.on("click", function (t) {
            t.preventDefault(), n.toggle(), s.trigger("change", [s.blur().hasClass("uk-active")])
        }), this.element.data("button", this))
    };
    t.extend(o.prototype, {
        options: {},
        toggle: function () {
            this.element.toggleClass("uk-active")
        }
    }), o.defaults = {}, e.button = o, e.buttonCheckbox = n, e.buttonRadio = i, t(document).on("click.buttonradio.uikit", "[data-uk-button-radio]", function (n) {
        var o = t(this);
        if (!o.data("buttonRadio")) {
            var s = new i(o, e.Utils.options(o.attr("data-uk-button-radio")));
            t(n.target).is(s.options.target) && t(n.target).trigger("click")
        }
    }), t(document).on("click.buttoncheckbox.uikit", "[data-uk-button-checkbox]", function (i) {
        var o = t(this);
        if (!o.data("buttonCheckbox")) {
            var s = new n(o, e.Utils.options(o.attr("data-uk-button-checkbox")));
            t(i.target).is(s.options.target) && t(i.target).trigger("click")
        }
    }), t(document).on("click.button.uikit", "[data-uk-button]", function () {
        var e = t(this);
        e.data("button") || (new o(e, e.attr("data-uk-button")), e.trigger("click"))
    })
}(jQuery, jQuery.UIkit),
function (t, e) {
    "use strict";
    var i = !1,
        n = function (o, s) {
            var a = this,
                r = t(o);
            r.data("dropdown") || (this.options = t.extend({}, n.defaults, s), this.element = r, this.dropdown = this.element.find(".uk-dropdown"), this.centered = this.dropdown.hasClass("uk-dropdown-center"), this.justified = this.options.justify ? t(this.options.justify) : !1, this.boundary = t(this.options.boundary), this.boundary.length || (this.boundary = t(window)), "click" == this.options.mode || e.support.touch ? this.element.on("click", function (e) {
                var n = t(e.target);
                n.parents(".uk-dropdown").length || ((n.is("a[href='#']") || n.parent().is("a[href='#']")) && e.preventDefault(), n.blur()), a.element.hasClass("uk-open") ? (n.is("a") || !a.element.find(".uk-dropdown").find(e.target).length) && (a.element.removeClass("uk-open"), i = !1) : a.show()
            }) : this.element.on("mouseenter", function () {
                a.remainIdle && clearTimeout(a.remainIdle), a.show()
            }).on("mouseleave", function () {
                a.remainIdle = setTimeout(function () {
                    a.element.removeClass("uk-open"), a.remainIdle = !1, i && i[0] == a.element[0] && (i = !1)
                }, a.options.remaintime)
            }), this.element.data("dropdown", this))
        };
    t.extend(n.prototype, {
        remainIdle: !1,
        show: function () {
            i && i[0] != this.element[0] && i.removeClass("uk-open"), this.checkDimensions(), this.element.addClass("uk-open"), i = this.element, this.registerOuterClick()
        },
        registerOuterClick: function () {
            var e = this;
            t(document).off("click.outer.dropdown"), setTimeout(function () {
                t(document).on("click.outer.dropdown", function (n) {
                    !i || i[0] != e.element[0] || !t(n.target).is("a") && e.element.find(".uk-dropdown").find(n.target).length || (i.removeClass("uk-open"), t(document).off("click.outer.dropdown"))
                })
            }, 10)
        },
        checkDimensions: function () {
            if (this.dropdown.length) {
                var e = this.dropdown.css("margin-" + t.UIkit.langdirection, "").css("min-width", ""),
                    i = e.show().offset(),
                    n = e.outerWidth(),
                    o = this.boundary.width(),
                    s = this.boundary.offset() ? this.boundary.offset().left : 0;
                if (this.centered && (e.css("margin-" + t.UIkit.langdirection, -1 * (parseFloat(n) / 2 - e.parent().width() / 2)), i = e.offset(), (n + i.left > o || 0 > i.left) && (e.css("margin-" + t.UIkit.langdirection, ""), i = e.offset())), this.justified && this.justified.length) {
                    var a = this.justified.outerWidth();
                    if (e.css("min-width", a), "right" == t.UIkit.langdirection) {
                        var r = o - (this.justified.offset().left + a),
                            l = o - (e.offset().left + e.outerWidth());
                        e.css("margin-right", r - l)
                    } else e.css("margin-left", this.justified.offset().left - i.left);
                    i = e.offset()
                }
                n + (i.left - s) > o && (e.addClass("uk-dropdown-flip"), i = e.offset()), 0 > i.left && e.addClass("uk-dropdown-stack"), e.css("display", "")
            }
        }
    }), n.defaults = {
        mode: "hover",
        remaintime: 800,
        justify: !1,
        boundary: t(window)
    }, e.dropdown = n;
    var o = e.support.touch ? "click" : "mouseenter";
    t(document).on(o + ".dropdown.uikit", "[data-uk-dropdown]", function (i) {
        var s = t(this);
        if (!s.data("dropdown")) {
            var a = new n(s, e.Utils.options(s.data("uk-dropdown")));
            ("click" == o || "mouseenter" == o && "hover" == a.options.mode) && a.show(), a.element.find(".uk-dropdown").length && i.preventDefault()
        }
    })
}(jQuery, jQuery.UIkit),
function (t, e) {
    "use strict";
    var i = t(window),
        n = "resize orientationchange",
        o = function (s, a) {
            var r = this,
                l = t(s);
            l.data("gridMatchHeight") || (this.options = t.extend({}, o.defaults, a), this.element = l, this.columns = this.element.children(), this.elements = this.options.target ? this.element.find(this.options.target) : this.columns, this.columns.length && (i.on(n, function () {
                var n = function () {
                    r.match()
                };
                return t(function () {
                    n(), i.on("load", n)
                }), e.Utils.debounce(n, 150)
            }()), t(document).on("uk-domready", function () {
                r.columns = r.element.children(), r.elements = r.options.target ? r.element.find(r.options.target) : r.columns, r.match()
            }), this.element.data("gridMatchHeight", this)))
        };
    t.extend(o.prototype, {
        match: function () {
            this.revert();
            var e = this.columns.filter(":visible:first");
            if (e.length) {
                var i = Math.ceil(100 * parseFloat(e.css("width")) / parseFloat(e.parent().css("width"))) >= 100 ? !0 : !1,
                    n = this;
                if (!i) return this.options.row ? (this.element.width(), setTimeout(function () {
                    var e = !1,
                        i = [];
                    n.elements.each(function () {
                        var o = t(this),
                            s = o.offset().top;
                        s != e && i.length && (n.matchHeights(t(i)), i = [], s = o.offset().top), i.push(o), e = s
                    }), i.length && n.matchHeights(t(i))
                }, 0)) : this.matchHeights(this.elements), this
            }
        },
        revert: function () {
            return this.elements.css("min-height", ""), this
        },
        matchHeights: function (e) {
            if (!(2 > e.length)) {
                var i = 0;
                e.each(function () {
                    i = Math.max(i, t(this).outerHeight())
                }).each(function () {
                    var e = t(this),
                        n = i - (e.outerHeight() - e.height());
                    e.css("min-height", n + "px")
                })
            }
        }
    }), o.defaults = {
        target: !1,
        row: !1
    };
    var s = function (i, n) {
        var o = t(i);
        if (!o.data("gridMargin")) {
            this.options = t.extend({}, s.defaults, n);
            var a = new e.stackMargin(o, this.options);
            o.data("gridMargin", a)
        }
    };
    s.defaults = {
        cls: "uk-grid-margin"
    }, e.gridMatchHeight = o, e.gridMargin = s, t(document).on("uk-domready", function () {
        t("[data-uk-grid-match],[data-uk-grid-margin]").each(function () {
            var i, n = t(this);
            n.is("[data-uk-grid-match]") && !n.data("gridMatchHeight") && (i = new o(n, e.Utils.options(n.attr("data-uk-grid-match")))), n.is("[data-uk-grid-margin]") && !n.data("gridMargin") && (i = new s(n, e.Utils.options(n.attr("data-uk-grid-margin"))))
        })
    })
}(jQuery, jQuery.UIkit),
function (t, e, i) {
    "use strict";

    function n(e, i) {
        return i ? ("object" == typeof e ? (e = e instanceof jQuery ? e : t(e), e.parent().length && (i.persist = e, i.persist.data("modalPersistParent", e.parent()))) : e = "string" == typeof e || "number" == typeof e ? t("<div></div>").html(e) : t("<div></div>").html("$.UIkitt.modal Error: Unsupported data type: " + typeof e), e.appendTo(i.element.find(".uk-modal-dialog")), i) : void 0
    }
    var o = !1,
        s = t("html"),
        a = function (i, n) {
            var o = this;
            this.element = t(i), this.options = t.extend({}, a.defaults, n), this.transition = e.support.transition, this.dialog = this.element.find(".uk-modal-dialog"), this.scrollable = function () {
                var t = o.dialog.find(".uk-overflow-container:first");
                return t.length ? t : !1
            }(), this.element.on("click", ".uk-modal-close", function (t) {
                t.preventDefault(), o.hide()
            }).on("click", function (e) {
                var i = t(e.target);
                i[0] == o.element[0] && o.options.bgclose && o.hide()
            })
        };
    t.extend(a.prototype, {
        scrollable: !1,
        transition: !1,
        toggle: function () {
            return this[this.isActive() ? "hide" : "show"]()
        },
        show: function () {
            return this.isActive() ? void 0 : (o && o.hide(!0), this.element.removeClass("uk-open").show(), this.resize(), o = this, s.addClass("uk-modal-page").height(), this.element.addClass("uk-open").trigger("uk.modal.show"), this)
        },
        hide: function (t) {
            if (this.isActive()) {
                if (!t && e.support.transition) {
                    var i = this;
                    this.element.one(e.support.transition.end, function () {
                        i._hide()
                    }).removeClass("uk-open")
                } else this._hide();
                return this
            }
        },
        resize: function () {
            var t = "padding-" + ("left" == e.langdirection ? "right" : "left");
            if (this.scrollbarwidth = window.innerWidth - s.width(), s.css(t, this.scrollbarwidth), this.element.css(t, ""), this.dialog.offset().left > this.scrollbarwidth && this.element.css(t, this.scrollbarwidth), this.scrollable) {
                this.scrollable.css("height", 0);
                var i = Math.abs(parseInt(this.dialog.css("margin-top"), 10)),
                    n = this.dialog.outerHeight(),
                    o = window.innerHeight,
                    a = o - 2 * (20 > i ? 20 : i) - n;
                this.scrollable.css("height", this.options.minScrollHeight > a ? "" : a)
            }
        },
        _hide: function () {
            this.element.hide().removeClass("uk-open"), s.removeClass("uk-modal-page").css("padding-" + ("left" == e.langdirection ? "right" : "left"), ""), o === this && (o = !1), this.element.trigger("uk.modal.hide")
        },
        isActive: function () {
            return o == this
        }
    }), a.dialog = {
        tpl: '<div class="uk-modal"><div class="uk-modal-dialog"></div></div>'
    }, a.defaults = {
        keyboard: !0,
        show: !1,
        bgclose: !0,
        minScrollHeight: 150
    };
    var r = function (e, i) {
        var n = this,
            o = t(e);
        o.data("modal") || (this.options = t.extend({
            target: o.is("a") ? o.attr("href") : !1
        }, i), this.element = o, this.modal = new a(this.options.target, i), o.on("click", function (t) {
            t.preventDefault(), n.show()
        }), t.each(["show", "hide", "isActive"], function (t, e) {
            n[e] = function () {
                return n.modal[e]()
            }
        }), this.element.data("modal", this))
    };
    r.dialog = function (e, i) {
        var o = new a(t(a.dialog.tpl).appendTo("body"), i);
        return o.element.on("uk.modal.hide", function () {
            o.persist && (o.persist.appendTo(o.persist.data("modalPersistParent")), o.persist = !1), o.element.remove()
        }), n(e, o), o
    }, r.alert = function (e, i) {
        r.dialog(['<div class="uk-margin uk-modal-content">' + (e + "") + "</div>", '<div class="uk-modal-buttons"><button class="uk-button uk-button-primary uk-modal-close">Ok</button></div>'].join(""), t.extend({
            bgclose: !1,
            keyboard: !1
        }, i)).show()
    }, r.confirm = function (e, i, n) {
        i = t.isFunction(i) ? i : function () { };
        var o = r.dialog(['<div class="uk-margin uk-modal-content">' + (e + "") + "</div>", '<div class="uk-modal-buttons"><button class="uk-button uk-button-primary js-modal-confirm">Ok</button> <button class="uk-button uk-modal-close">Cancel</button></div>'].join(""), t.extend({
            bgclose: !1,
            keyboard: !1
        }, n));
        o.element.find(".js-modal-confirm").on("click", function () {
            i(), o.hide()
        }), o.show()
    }, r.Modal = a, e.modal = r, t(document).on("click.modal.uikit", "[data-uk-modal]", function (i) {
        var n = t(this);
        if (n.is("a") && i.preventDefault(), !n.data("modal")) {
            var o = new r(n, e.Utils.options(n.attr("data-uk-modal")));
            o.show()
        }
    }), t(document).on("keydown.modal.uikit", function (t) {
        o && 27 === t.keyCode && o.options.keyboard && (t.preventDefault(), o.hide())
    }), i.on("resize orientationchange", e.Utils.debounce(function () {
        o && o.resize()
    }, 150))
}(jQuery, jQuery.UIkit, jQuery(window)),
function (t, e) {
    "use strict";
    var i, n = t(window),
        o = t(document),
        s = {
            show: function (e) {
                if (e = t(e), e.length) {
                    var a = t("html"),
                        r = e.find(".uk-offcanvas-bar:first"),
                        l = "right" == t.UIkit.langdirection,
                        u = (r.hasClass("uk-offcanvas-bar-flip") ? -1 : 1) * (l ? -1 : 1),
                        c = -1 == u && n.width() < window.innerWidth ? window.innerWidth - n.width() : 0;
                    i = {
                        x: window.scrollX,
                        y: window.scrollY
                    }, e.addClass("uk-active"), a.css({
                        width: window.innerWidth,
                        height: window.innerHeight
                    }).addClass("uk-offcanvas-page"), a.css(l ? "margin-right" : "margin-left", (l ? -1 : 1) * (r.outerWidth() - c) * u).width(), r.addClass("uk-offcanvas-bar-show").width(), e.off(".ukoffcanvas").on("click.ukoffcanvas swipeRight.ukoffcanvas swipeLeft.ukoffcanvas", function (e) {
                        var i = t(e.target);
                        if (!e.type.match(/swipe/) && !i.hasClass("uk-offcanvas-close")) {
                            if (i.hasClass("uk-offcanvas-bar")) return;
                            if (i.parents(".uk-offcanvas-bar:first").length) return
                        }
                        e.stopImmediatePropagation(), s.hide()
                    }), o.on("keydown.ukoffcanvas", function (t) {
                        27 === t.keyCode && s.hide()
                    })
                }
            },
            hide: function (e) {
                var n = t("html"),
                    s = t(".uk-offcanvas.uk-active"),
                    a = "right" == t.UIkit.langdirection,
                    r = s.find(".uk-offcanvas-bar:first");
                s.length && (t.UIkit.support.transition && !e ? (n.one(t.UIkit.support.transition.end, function () {
                    n.removeClass("uk-offcanvas-page").attr("style", ""), s.removeClass("uk-active"), window.scrollTo(i.x, i.y)
                }).css(a ? "margin-right" : "margin-left", ""), setTimeout(function () {
                    r.removeClass("uk-offcanvas-bar-show")
                }, 50)) : (n.removeClass("uk-offcanvas-page").attr("style", ""), s.removeClass("uk-active"), r.removeClass("uk-offcanvas-bar-show"), window.scrollTo(i.x, i.y)), s.off(".ukoffcanvas"), o.off(".ukoffcanvas"))
            }
        }, a = function (e, i) {
            var n = this,
                o = t(e);
            o.data("offcanvas") || (this.options = t.extend({
                target: o.is("a") ? o.attr("href") : !1
            }, i), this.element = o, o.on("click", function (t) {
                t.preventDefault(), s.show(n.options.target)
            }), this.element.data("offcanvas", this))
        };
    a.offcanvas = s, e.offcanvas = a, o.on("click.offcanvas.uikit", "[data-uk-offcanvas]", function (i) {
        i.preventDefault();
        var n = t(this);
        n.data("offcanvas") || (new a(n, e.Utils.options(n.attr("data-uk-offcanvas"))), n.trigger("click"))
    })
}(jQuery, jQuery.UIkit),
function (t, e) {
    "use strict";

    function i(e) {
        var i = t(e),
            n = "auto";
        if (i.is(":visible")) n = i.outerHeight();
        else {
            var o = {
                position: i.css("position"),
                visibility: i.css("visibility"),
                display: i.css("display")
            };
            n = i.css({
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }).outerHeight(), i.css(o)
        }
        return n
    }
    var n = function (e, i) {
        var o = this,
            s = t(e);
        s.data("nav") || (this.options = t.extend({}, n.defaults, i), this.element = s.on("click", this.options.toggle, function (e) {
            e.preventDefault();
            var i = t(this);
            o.open(i.parent()[0] == o.element[0] ? i : i.parent("li"))
        }), this.element.find(this.options.lists).each(function () {
            var e = t(this),
                i = e.parent(),
                n = i.hasClass("uk-active");
            e.wrap('<div style="overflow:hidden;height:0;position:relative;"></div>'), i.data("list-container", e.parent()), n && o.open(i, !0)
        }), this.element.data("nav", this))
    };
    t.extend(n.prototype, {
        open: function (e, n) {
            var o = this.element,
                s = t(e);
            this.options.multiple || o.children(".uk-open").not(e).each(function () {
                t(this).data("list-container") && t(this).data("list-container").stop().animate({
                    height: 0
                }, function () {
                    t(this).parent().removeClass("uk-open")
                })
            }), s.toggleClass("uk-open"), s.data("list-container") && (n ? s.data("list-container").stop().height(s.hasClass("uk-open") ? "auto" : 0) : s.data("list-container").stop().animate({
                height: s.hasClass("uk-open") ? i(s.data("list-container").find("ul:first")) : 0
            }))
        }
    }), n.defaults = {
        toggle: ">li.uk-parent > a[href='#']",
        lists: ">li.uk-parent > ul",
        multiple: !1
    }, e.nav = n, t(document).on("uk-domready", function () {
        t("[data-uk-nav]").each(function () {
            var i = t(this);
            i.data("nav") || new n(i, e.Utils.options(i.attr("data-uk-nav")))
        })
    })
}(jQuery, jQuery.UIkit),
function (t, e, i) {
    "use strict";
    var n, o, s = function (e, i) {
        var n = this,
            o = t(e);
        o.data("tooltip") || (this.options = t.extend({}, s.defaults, i), this.element = o.on({
            focus: function () {
                n.show()
            },
            blur: function () {
                n.hide()
            },
            mouseenter: function () {
                n.show()
            },
            mouseleave: function () {
                n.hide()
            }
        }), this.tip = "function" == typeof this.options.src ? this.options.src.call(this.element) : this.options.src, this.element.attr("data-cached-title", this.element.attr("title")).attr("title", ""), this.element.data("tooltip", this))
    };
    t.extend(s.prototype, {
        tip: "",
        show: function () {
            if (o && clearTimeout(o), this.tip.length) {
                n.stop().css({
                    top: -2e3,
                    visibility: "hidden"
                }).show(), n.html('<div class="uk-tooltip-inner">' + this.tip + "</div>");
                var e = this,
                    i = t.extend({}, this.element.offset(), {
                        width: this.element[0].offsetWidth,
                        height: this.element[0].offsetHeight
                    }),
                    s = n[0].offsetWidth,
                    a = n[0].offsetHeight,
                    r = "function" == typeof this.options.offset ? this.options.offset.call(this.element) : this.options.offset,
                    l = "function" == typeof this.options.pos ? this.options.pos.call(this.element) : this.options.pos,
                    u = {
                        display: "none",
                        visibility: "visible",
                        top: i.top + i.height + a,
                        left: i.left
                    }, c = l.split("-");
                "left" != c[0] && "right" != c[0] || "right" != t.UIkit.langdirection || (c[0] = "left" == c[0] ? "right" : "left");
                var h = {
                    bottom: {
                        top: i.top + i.height + r,
                        left: i.left + i.width / 2 - s / 2
                    },
                    top: {
                        top: i.top - a - r,
                        left: i.left + i.width / 2 - s / 2
                    },
                    left: {
                        top: i.top + i.height / 2 - a / 2,
                        left: i.left - s - r
                    },
                    right: {
                        top: i.top + i.height / 2 - a / 2,
                        left: i.left + i.width + r
                    }
                };
                t.extend(u, h[c[0]]), 2 == c.length && (u.left = "left" == c[1] ? i.left : i.left + i.width - s);
                var d = this.checkBoundary(u.left, u.top, s, a);
                if (d) {
                    switch (d) {
                        case "x":
                            l = 2 == c.length ? c[0] + "-" + (0 > u.left ? "left" : "right") : 0 > u.left ? "right" : "left";
                            break;
                        case "y":
                            l = 2 == c.length ? (0 > u.top ? "bottom" : "top") + "-" + c[1] : 0 > u.top ? "bottom" : "top";
                            break;
                        case "xy":
                            l = 2 == c.length ? (0 > u.top ? "bottom" : "top") + "-" + (0 > u.left ? "left" : "right") : 0 > u.left ? "right" : "left"
                    }
                    c = l.split("-"), t.extend(u, h[c[0]]), 2 == c.length && (u.left = "left" == c[1] ? i.left : i.left + i.width - s)
                }
                u.left -= t("body").position().left, o = setTimeout(function () {
                    n.css(u).attr("class", "uk-tooltip uk-tooltip-" + l), e.options.animation ? n.css({
                        opacity: 0,
                        display: "block"
                    }).animate({
                        opacity: 1
                    }, parseInt(e.options.animation, 10) || 400) : n.show(), o = !1
                }, parseInt(this.options.delay, 10) || 0)
            }
        },
        hide: function () {
            this.element.is("input") && this.element[0] === document.activeElement || (o && clearTimeout(o), n.stop(), this.options.animation ? n.fadeOut(parseInt(this.options.animation, 10) || 400) : n.hide())
        },
        content: function () {
            return this.tip
        },
        checkBoundary: function (t, e, n, o) {
            var s = "";
            return (0 > t || t - i.scrollLeft() + n > window.innerWidth) && (s += "x"), (0 > e || e - i.scrollTop() + o > window.innerHeight) && (s += "y"), s
        }
    }), s.defaults = {
        offset: 5,
        pos: "top",
        animation: !1,
        delay: 0,
        src: function () {
            return this.attr("title")
        }
    }, e.tooltip = s, t(function () {
        n = t('<div class="uk-tooltip"></div>').appendTo("body")
    }), t(document).on("mouseenter.tooltip.uikit focus.tooltip.uikit", "[data-uk-tooltip]", function () {
        var i = t(this);
        i.data("tooltip") || (new s(i, e.Utils.options(i.attr("data-uk-tooltip"))), i.trigger("mouseenter"))
    })
}(jQuery, jQuery.UIkit, jQuery(window)),
function (t, e) {
    "use strict";
    var i = function (e, n) {
        var o = this,
            s = t(e);
        if (!s.data("switcher")) {
            if (this.options = t.extend({}, i.defaults, n), this.element = s.on("click", this.options.toggle, function (t) {
                t.preventDefault(), o.show(this)
            }), this.options.connect) {
                this.connect = t(this.options.connect).find(".uk-active").removeClass(".uk-active").end();
                var a = this.element.find(this.options.toggle),
                    r = a.filter(".uk-active");
                r.length ? this.show(r) : (r = a.eq(this.options.active), this.show(r.length ? r : a.eq(0)))
            }
            this.element.data("switcher", this)
        }
    };
    t.extend(i.prototype, {
        show: function (e) {
            e = isNaN(e) ? t(e) : this.element.find(this.options.toggle).eq(e);
            var i = e;
            if (!i.hasClass("uk-disabled")) {
                if (this.element.find(this.options.toggle).filter(".uk-active").removeClass("uk-active"), i.addClass("uk-active"), this.options.connect && this.connect.length) {
                    var n = this.element.find(this.options.toggle).index(i);
                    this.connect.children().removeClass("uk-active").eq(n).addClass("uk-active")
                }
                this.element.trigger("uk.switcher.show", [i])
            }
        }
    }), i.defaults = {
        connect: !1,
        toggle: ">*",
        active: 0
    }, e.switcher = i, t(document).on("uk-domready", function () {
        t("[data-uk-switcher]").each(function () {
            var n = t(this);
            n.data("switcher") || new i(n, e.Utils.options(n.attr("data-uk-switcher")))
        })
    })
}(jQuery, jQuery.UIkit),
function (t, e) {
    "use strict";
    var i = function (e, n) {
        var o = this,
            s = t(e);
        if (!s.data("tab")) {
            if (this.element = s, this.options = t.extend({}, i.defaults, n), this.options.connect && (this.connect = t(this.options.connect)), window.location.hash) {
                var a = this.element.children().filter(window.location.hash);
                a.length && this.element.children().removeClass("uk-active").filter(a).addClass("uk-active")
            }
            var r = t('<li class="uk-tab-responsive uk-active"><a href="javascript:void(0);"></a></li>'),
                l = r.find("a:first"),
                u = t('<div class="uk-dropdown uk-dropdown-small"><ul class="uk-nav uk-nav-dropdown"></ul><div>'),
                c = u.find("ul");
            l.html(this.element.find("li.uk-active:first").find("a").text()), this.element.hasClass("uk-tab-bottom") && u.addClass("uk-dropdown-up"), this.element.hasClass("uk-tab-flip") && u.addClass("uk-dropdown-flip"), this.element.find("a").each(function (e) {
                var i = t(this).parent(),
                    n = t('<li><a href="javascript:void(0);">' + i.text() + "</a></li>").on("click", function () {
                        o.element.data("switcher").show(e)
                    });
                t(this).parents(".uk-disabled:first").length || c.append(n)
            }), this.element.uk("switcher", {
                toggle: ">li:not(.uk-tab-responsive)",
                connect: this.options.connect,
                active: this.options.active
            }), r.append(u).uk("dropdown", {
                mode: "click"
            }), this.element.append(r).data({
                dropdown: r.data("dropdown"),
                mobilecaption: l
            }).on("uk.switcher.show", function (t, e) {
                r.addClass("uk-active"), l.html(e.find("a").text())
            }), this.element.data("tab", this)
        }
    };
    i.defaults = {
        connect: !1,
        active: 0
    }, e.tab = i, t(document).on("uk-domready", function () {
        t("[data-uk-tab]").each(function () {
            var n = t(this);
            n.data("tab") || new i(n, e.Utils.options(n.attr("data-uk-tab")))
        })
    })
}(jQuery, jQuery.UIkit),
function (t, e) {
    "use strict";
    var i = t(window),
        n = [],
        o = function () {
            for (var t = 0; n.length > t; t++) e.support.requestAnimationFrame.apply(window, [n[t].check])
        }, s = function (i, o) {
            var a = t(i);
            if (!a.data("scrollspy")) {
                this.options = t.extend({}, s.defaults, o), this.element = t(i);
                var r, l, u, c = this,
                    h = function () {
                        var t = e.Utils.isInView(c.element, c.options);
                        t && !l && (r && clearTimeout(r), u || (c.element.addClass(c.options.initcls), c.offset = c.element.offset(), u = !0, c.element.trigger("uk-scrollspy-init")), r = setTimeout(function () {
                            t && c.element.addClass("uk-scrollspy-inview").addClass(c.options.cls).width()
                        }, c.options.delay), l = !0, c.element.trigger("uk.scrollspy.inview")), !t && l && c.options.repeat && (c.element.removeClass("uk-scrollspy-inview").removeClass(c.options.cls), l = !1, c.element.trigger("uk.scrollspy.outview"))
                    };
                h(), this.element.data("scrollspy", this), this.check = h, n.push(this)
            }
        };
    s.defaults = {
        cls: "uk-scrollspy-inview",
        initcls: "uk-scrollspy-init-inview",
        topoffset: 0,
        leftoffset: 0,
        repeat: !1,
        delay: 0
    }, e.scrollspy = s;
    var a = [],
        r = function () {
            for (var t = 0; a.length > t; t++) e.support.requestAnimationFrame.apply(window, [a[t].check])
        }, l = function (n, o) {
            var s = t(n);
            if (!s.data("scrollspynav")) {
                this.element = s, this.options = t.extend({}, l.defaults, o);
                var r, u = [],
                    c = this.element.find("a[href^='#']").each(function () {
                        u.push(t(this).attr("href"))
                    }),
                    h = t(u.join(",")),
                    d = this,
                    f = function () {
                        r = [];
                        for (var t = 0; h.length > t; t++) e.Utils.isInView(h.eq(t), d.options) && r.push(h.eq(t));
                        if (r.length) {
                            var n = i.scrollTop(),
                                o = function () {
                                    for (var t = 0; r.length > t; t++)
                                        if (r[t].offset().top >= n) return r[t]
                                }();
                            if (!o) return;
                            d.options.closest ? c.closest(d.options.closest).removeClass(d.options.cls).end().filter("a[href='#" + o.attr("id") + "']").closest(d.options.closest).addClass(d.options.cls) : c.removeClass(d.options.cls).filter("a[href='#" + o.attr("id") + "']").addClass(d.options.cls)
                        }
                    };
                this.options.smoothscroll && e.smoothScroll && c.each(function () {
                    new e.smoothScroll(this, d.options.smoothscroll)
                }), f(), this.element.data("scrollspynav", this), this.check = f, a.push(this)
            }
        };
    l.defaults = {
        cls: "uk-active",
        closest: !1,
        topoffset: 0,
        leftoffset: 0,
        smoothscroll: !1
    }, e.scrollspynav = l;
    var u = function () {
        o(), r()
    };
    i.on("scroll", u).on("resize orientationchange", e.Utils.debounce(u, 50)), t(document).on("uk-domready", function () {
        t("[data-uk-scrollspy]").each(function () {
            var i = t(this);
            i.data("scrollspy") || new s(i, e.Utils.options(i.attr("data-uk-scrollspy")))
        }), t("[data-uk-scrollspy-nav]").each(function () {
            var i = t(this);
            i.data("scrollspynav") || new l(i, e.Utils.options(i.attr("data-uk-scrollspy-nav")))
        })
    })
}(jQuery, jQuery.UIkit),
function (t, e) {
    "use strict";
    var i = function (e, n) {
        var o = this,
            s = t(e);
        s.data("smoothScroll") || (this.options = t.extend({}, i.defaults, n), this.element = s.on("click", function () {
            var e = t(this.hash).length ? t(this.hash) : t("body"),
                i = e.offset().top - o.options.offset,
                n = t(document).height(),
                s = t(window).height();
            return e.outerHeight(), i + s > n && (i = n - s), t("html,body").stop().animate({
                scrollTop: i
            }, o.options.duration, o.options.transition), !1
        }), this.element.data("smoothScroll", this))
    };
    i.defaults = {
        duration: 1e3,
        transition: "easeOutExpo",
        offset: 0
    }, e.smoothScroll = i, t.easing.easeOutExpo || (t.easing.easeOutExpo = function (t, e, i, n, o) {
        return e == o ? i + n : n * (-Math.pow(2, -10 * e / o) + 1) + i
    }), t(document).on("click.smooth-scroll.uikit", "[data-uk-smooth-scroll]", function () {
        var n = t(this);
        n.data("smoothScroll") || (new i(n, e.Utils.options(n.attr("data-uk-smooth-scroll"))), n.trigger("click"))
    })
}(jQuery, jQuery.UIkit),
function (t, e, i) {
    var n = function (t, i) {
        var o = this,
            s = e(t);
        s.data("toggle") || (this.options = e.extend({}, n.defaults, i), this.totoggle = this.options.target ? e(this.options.target) : [], this.element = s.on("click", function (t) {
            t.preventDefault(), o.toggle()
        }), this.element.data("toggle", this))
    };
    e.extend(n.prototype, {
        toggle: function () {
            this.totoggle.length && this.totoggle.toggleClass(this.options.cls)
        }
    }), n.defaults = {
        target: !1,
        cls: "uk-hidden"
    }, i.toggle = n, e(document).on("uk-domready", function () {
        e("[data-uk-toggle]").each(function () {
            var t = e(this);
            t.data("toggle") || new n(t, i.Utils.options(t.attr("data-uk-toggle")))
        })
    })
}(this, jQuery, jQuery.UIkit);




(function (t) {
    "function" == typeof define && define.amd && define("uikit-datepicker", ["uikit"], function () {
        return jQuery.UIkit.datepicker || t(window, window.jQuery, window.jQuery.UIkit)
    }), window && window.jQuery && window.jQuery.UIkit && t(window, window.jQuery, window.jQuery.UIkit)
})(function (t, e, n) {
    var i, s = !1,
        o = e('<div class="uk-dropdown uk-datepicker"></div>');
    o.on("click", ".uk-datepicker-next, .uk-datepicker-previous, [data-date]", function (t) {
        t.stopPropagation(), t.preventDefault();
        var n = e(this);
        n.is("[data-date]") ? (s.element.val(i(n.data("date")).format(s.options.format)).trigger("change"), o.hide(), s = !1) : s.add("months", 1 * (n.hasClass("uk-datepicker-next") ? 1 : -1))
    });
    var a = function (t, n) {
        var o = this,
            r = e(t);
        r.data("datepicker") || (this.element = r, this.options = e.extend({}, a.defaults, n), this.current = this.element.val() ? i(this.element.val(), this.options.format) : i(), this.element.on("click", function () {
            s !== o && o.pick(this.value)
        }).on("change", function () {
            o.element.val() && !i(o.element.val(), o.options.format).isValid() && o.element.val(i().format(o.options.format))
        }), this.element.data("datepicker", this))
    };
    return a.defaults = {
        weekstart: 1,
        i18n: {
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        },
        format: "DD.MM.YYYY",
        offsettop: 5,
        template: function (t, e) {
            var n = "";
            n += '<div class="uk-datepicker-nav">', n += '<a href="" class="uk-datepicker-previous"></a>', n += '<a href="" class="uk-datepicker-next"></a>', n += '<div class="uk-datepicker-heading">' + e.i18n.months[t.month] + " " + t.year + "</div>", n += "</div>", n += '<table class="uk-datepicker-table">', n += "<thead>";
            for (var i = 0; t.weekdays.length > i; i++) t.weekdays[i] && (n += "<th>" + t.weekdays[i] + "</th>");
            n += "</thead>", n += "<tbody>";
            for (var i = 0; t.days.length > i; i++)
                if (t.days[i] && t.days[i].length) {
                    n += "<tr>";
                    for (var s = 0; t.days[i].length > s; s++)
                        if (t.days[i][s]) {
                            var o = t.days[i][s],
                                a = [];
                            o.inmonth || a.push("uk-datepicker-table-muted"), o.selected && a.push("uk-active"), n += '<td><a href="" class="' + a.join(" ") + '" data-date="' + o.day.format() + '">' + o.day.format("D") + "</a></td>"
                        }
                    n += "</tr>"
                }
            return n += "</tbody>", n += "</table>"
        }
    }, e.extend(a.prototype, {
        pick: function (t) {
            var n = this.element.offset(),
                a = {
                    top: n.top + this.element.outerHeight() + this.options.offsettop,
                    left: n.left,
                    right: ""
                };
            this.current = t ? i(t, this.options.format) : i(), this.initdate = this.current.format("YYYY-MM-DD"), this.update(), "right" == e.UIkit.langdirection && (a.right = window.innerWidth - (a.left + this.element.outerWidth()), a.left = ""), o.css(a).show(), s = this
        },
        add: function (t, e) {
            this.current.add(t, e), this.update()
        },
        setMonth: function (t) {
            this.current.month(t), this.update()
        },
        setYear: function (t) {
            this.current.year(t), this.update()
        },
        update: function () {
            var t = this.getRows(this.current.year(), this.current.month()),
                e = this.options.template(t, this.options);
            o.html(e)
        },
        getRows: function (t, e) {
            var n = this.options,
                s = i().format("YYYY-MM-DD"),
                o = [31, 0 === t % 4 && 0 !== t % 100 || 0 === t % 400 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e],
                a = new Date(t, e, 1).getDay(),
                r = {
                    month: e,
                    year: t,
                    weekdays: [],
                    days: []
                }, u = [];
            r.weekdays = function () {
                for (var t = 0, e = []; 7 > t; t++) {
                    for (var i = t + (n.weekstart || 0) ; i >= 7;) i -= 7;
                    e.push(n.i18n.weekdays[i])
                }
                return e
            }(), n.weekstart && n.weekstart > 0 && (a -= n.weekstart, 0 > a && (a += 7));
            for (var l = o + a, d = l; d > 7;) d -= 7;
            l += 7 - d;
            for (var c, h, f, p, m, g = 0, v = 0; l > g; g++) c = new Date(t, e, 1 + (g - a)), h = n.mindate && n.mindate > c || n.maxdate && c > n.maxdate, m = !(a > g || g >= o + a), c = i(c), f = this.initdate == c.format("YYYY-MM-DD"), p = s == c.format("YYYY-MM-DD"), u.push({
                selected: f,
                today: p,
                disabled: h,
                day: c,
                inmonth: m
            }), 7 === ++v && (r.days.push(u), u = [], v = 0);
            return r
        }
    }), n.datepicker = a, e(document).on("focus.datepicker.uikit", "[data-uk-datepicker]", function (t) {
        var i = e(this);
        i.data("datepicker") || (t.preventDefault(), new a(i, n.Utils.options(i.attr("data-uk-datepicker"))), i.trigger("focus"))
    }), e(document).on("click.datepicker.uikit", function (t) {
        var n = e(t.target);
        !s || n[0] == o[0] || n.data("datepicker") || n.parents(".uk-datepicker:first").length || (o.hide(), s = !1)
    }), e(function () {
        o.appendTo("body")
    }), i = function (t) {
        function e() {
            return {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1
            }
        }

        function n(t, e) {
            return function (n) {
                return l(t.call(this, n), e)
            }
        }

        function i(t, e) {
            return function (n) {
                return this.lang().ordinal(t.call(this, n), e)
            }
        }

        function s() { }

        function o(t) {
            y(t), r(this, t)
        }

        function a(t) {
            t = p(t);
            var e = t.year || 0,
                n = t.month || 0,
                i = t.week || 0,
                s = t.day || 0;
            this._milliseconds = +(t.millisecond || 0) + 1e3 * (t.second || 0) + 6e4 * (t.minute || 0) + 36e5 * (t.hour || 0), this._days = +s + 7 * i, this._months = +n + 12 * e, this._data = {}, this._bubble()
        }

        function r(t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            return e.hasOwnProperty("toString") && (t.toString = e.toString), e.hasOwnProperty("valueOf") && (t.valueOf = e.valueOf), t
        }

        function u(t) {
            return 0 > t ? Math.ceil(t) : Math.floor(t)
        }

        function l(t, e, n) {
            for (var i = "" + Math.abs(t) ; e > i.length;) i = "0" + i;
            return (t >= 0 ? n ? "+" : "" : "-") + i
        }

        function d(t, e, n, i) {
            var s = e._milliseconds,
                o = e._days;
            e = e._months;
            var a, r;
            s && t._d.setTime(+t._d + s * n), (o || e) && (a = t.minute(), r = t.hour()), o && t.date(t.date() + o * n), e && t.month(t.month() + e * n), s && !i && q.updateOffset(t, o || e), (o || e) && (t.minute(a), t.hour(r))
        }

        function c(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }

        function h(t, e, n) {
            var i, s = Math.min(t.length, e.length),
                o = Math.abs(t.length - e.length),
                a = 0;
            for (i = 0; s > i; i++) (n && t[i] !== e[i] || !n && g(t[i]) !== g(e[i])) && a++;
            return a + o
        }

        function f(t) {
            if (t) {
                var e = t.toLowerCase().replace(/(.)s$/, "$1");
                t = Oe[t] || je[e] || e
            }
            return t
        }

        function p(t) {
            var e, n, i = {};
            for (n in t) t.hasOwnProperty(n) && (e = f(n)) && (i[e] = t[n]);
            return i
        }

        function m(e) {
            var n, i;
            if (0 === e.indexOf("week")) n = 7, i = "day";
            else {
                if (0 !== e.indexOf("month")) return;
                n = 12, i = "month"
            }
            q[e] = function (s, o) {
                var a, r, u = q.fn._lang[e],
                    l = [];
                if ("number" == typeof s && (o = s, s = t), r = function (t) {
                    return t = q().utc().set(i, t), u.call(q.fn._lang, t, s || "")
                }, null != o) return r(o);
                for (a = 0; n > a; a++) l.push(r(a));
                return l
            }
        }

        function g(t) {
            t = +t;
            var e = 0;
            return 0 !== t && isFinite(t) && (e = t >= 0 ? Math.floor(t) : Math.ceil(t)), e
        }

        function v(t, e) {
            return new Date(Date.UTC(t, e + 1, 0)).getUTCDate()
        }

        function k(t, e, n) {
            return Q(q([t, 11, 31 + e - n]), e, n).week
        }

        function w(t) {
            return 0 === t % 4 && 0 !== t % 100 || 0 === t % 400
        }

        function y(t) {
            var e;
            t._a && -2 === t._pf.overflow && (e = 0 > t._a[J] || t._a[J] > 11 ? J : 1 > t._a[V] || t._a[V] > v(t._a[Z], t._a[J]) ? V : 0 > t._a[X] || t._a[X] > 23 ? X : 0 > t._a[B] || t._a[B] > 59 ? B : 0 > t._a[K] || t._a[K] > 59 ? K : 0 > t._a[te] || t._a[te] > 999 ? te : -1, t._pf._overflowDayOfYear && (Z > e || e > V) && (e = V), t._pf.overflow = e)
        }

        function _(t) {
            return null == t._isValid && (t._isValid = !isNaN(t._d.getTime()) && 0 > t._pf.overflow && !t._pf.empty && !t._pf.invalidMonth && !t._pf.nullInput && !t._pf.invalidFormat && !t._pf.userInvalidated, t._strict && (t._isValid = t._isValid && 0 === t._pf.charsLeftOver && 0 === t._pf.unusedTokens.length)), t._isValid
        }

        function b(t) {
            return t ? t.toLowerCase().replace("_", "-") : t
        }

        function M(t, e) {
            return e._isUTC ? q(t).zone(e._offset || 0) : q(t).local()
        }

        function D(t) {
            var e, n, i, s, o = 0,
                a = function (t) {
                    if (!ee[t] && ie) try {
                        require("./lang/" + t)
                    } catch (e) { }
                    return ee[t]
                };
            if (!t) return q.fn._lang;
            if (!c(t)) {
                if (n = a(t)) return n;
                t = [t]
            }
            for (; t.length > o;) {
                for (s = b(t[o]).split("-"), e = s.length, i = (i = b(t[o + 1])) ? i.split("-") : null; e > 0;) {
                    if (n = a(s.slice(0, e).join("-"))) return n;
                    if (i && i.length >= e && h(s, i, !0) >= e - 1) break;
                    e--
                }
                o++
            }
            return q.fn._lang
        }

        function Y(t) {
            return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
        }

        function C(t) {
            var e, n, i = t.match(re);
            for (e = 0, n = i.length; n > e; e++) i[e] = Pe[i[e]] ? Pe[i[e]] : Y(i[e]);
            return function (s) {
                var o = "";
                for (e = 0; n > e; e++) o += i[e] instanceof Function ? i[e].call(s, t) : i[e];
                return o
            }
        }

        function T(t, e) {
            return t.isValid() ? (e = U(e, t.lang()), Ie[e] || (Ie[e] = C(e)), Ie[e](t)) : t.lang().invalidDate()
        }

        function U(t, e) {
            function n(t) {
                return e.longDateFormat(t) || t
            }
            var i = 5;
            for (ue.lastIndex = 0; i >= 0 && ue.test(t) ;) t = t.replace(ue, n), ue.lastIndex = 0, i -= 1;
            return t
        }

        function S(t, e) {
            var n = e._strict;
            switch (t) {
                case "DDDD":
                    return _e;
                case "YYYY":
                case "GGGG":
                case "gggg":
                    return n ? be : ce;
                case "Y":
                case "G":
                case "g":
                    return De;
                case "YYYYYY":
                case "YYYYY":
                case "GGGGG":
                case "ggggg":
                    return n ? Me : he;
                case "S":
                    if (n) return we;
                case "SS":
                    if (n) return ye;
                case "SSS":
                    if (n) return _e;
                case "DDD":
                    return de;
                case "MMM":
                case "MMMM":
                case "dd":
                case "ddd":
                case "dddd":
                    return pe;
                case "a":
                case "A":
                    return D(e._l)._meridiemParse;
                case "X":
                    return ve;
                case "Z":
                case "ZZ":
                    return me;
                case "T":
                    return ge;
                case "SSSS":
                    return fe;
                case "MM":
                case "DD":
                case "YY":
                case "GG":
                case "gg":
                case "HH":
                case "hh":
                case "mm":
                case "ss":
                case "ww":
                case "WW":
                    return n ? ye : le;
                case "M":
                case "D":
                case "d":
                case "H":
                case "h":
                case "m":
                case "s":
                case "w":
                case "W":
                case "e":
                case "E":
                    return le;
                case "Do":
                    return ke;
                default:
                    var i, n = RegExp;
                    return i = W(t.replace("\\", "")).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), new n(i)
            }
        }

        function x(t) {
            t = (t || "").match(me) || [], t = ((t[t.length - 1] || []) + "").match(Ue) || ["-", 0, 0];
            var e = +(60 * t[1]) + g(t[2]);
            return "+" === t[0] ? -e : e
        }

        function O(t) {
            var e, n, i, s, o, a, r = [];
            if (!t._d) {
                for (n = j(t), t._w && null == t._a[V] && null == t._a[J] && (e = function (e) {
                    var n = parseInt(e, 10);
                    return e ? 3 > e.length ? n > 68 ? 1900 + n : 2e3 + n : n : null == t._a[Z] ? q().weekYear() : t._a[Z]
                }, i = t._w, null != i.GG || null != i.W || null != i.E ? e = z(e(i.GG), i.W || 1, i.E, 4, 1) : (s = D(t._l), o = null != i.d ? G(i.d, s) : null != i.e ? parseInt(i.e, 10) + s._week.dow : 0, a = parseInt(i.w, 10) || 1, null != i.d && s._week.dow > o && a++, e = z(e(i.gg), a, o, s._week.doy, s._week.dow)), t._a[Z] = e.year, t._dayOfYear = e.dayOfYear), t._dayOfYear && (e = null == t._a[Z] ? n[Z] : t._a[Z], t._dayOfYear > (w(e) ? 366 : 365) && (t._pf._overflowDayOfYear = !0), e = P(e, 0, t._dayOfYear), t._a[J] = e.getUTCMonth(), t._a[V] = e.getUTCDate()), e = 0; 3 > e && null == t._a[e]; ++e) t._a[e] = r[e] = n[e];
                for (; 7 > e; e++) t._a[e] = r[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
                r[X] += g((t._tzm || 0) / 60), r[B] += g((t._tzm || 0) % 60), t._d = (t._useUTC ? P : F).apply(null, r)
            }
        }

        function j(t) {
            var e = new Date;
            return t._useUTC ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()] : [e.getFullYear(), e.getMonth(), e.getDate()]
        }

        function I(t) {
            t._a = [], t._pf.empty = !0;
            var e, n, i, s, o = D(t._l),
                a = "" + t._i,
                r = a.length,
                u = 0;
            for (n = U(t._f, o).match(re) || [], o = 0; n.length > o; o++)
                if (i = n[o], (e = (a.match(S(i, t)) || [])[0]) && (s = a.substr(0, a.indexOf(e)), s.length > 0 && t._pf.unusedInput.push(s), a = a.slice(a.indexOf(e) + e.length), u += e.length), Pe[i]) {
                    e ? t._pf.empty = !1 : t._pf.unusedTokens.push(i), s = t;
                    var l = void 0,
                        d = s._a;
                    switch (i) {
                        case "M":
                        case "MM":
                            null != e && (d[J] = g(e) - 1);
                            break;
                        case "MMM":
                        case "MMMM":
                            l = D(s._l).monthsParse(e), null != l ? d[J] = l : s._pf.invalidMonth = e;
                            break;
                        case "D":
                        case "DD":
                            null != e && (d[V] = g(e));
                            break;
                        case "Do":
                            null != e && (d[V] = g(parseInt(e, 10)));
                            break;
                        case "DDD":
                        case "DDDD":
                            null != e && (s._dayOfYear = g(e));
                            break;
                        case "YY":
                            d[Z] = g(e) + (g(e) > 68 ? 1900 : 2e3);
                            break;
                        case "YYYY":
                        case "YYYYY":
                        case "YYYYYY":
                            d[Z] = g(e);
                            break;
                        case "a":
                        case "A":
                            s._isPm = D(s._l).isPM(e);
                            break;
                        case "H":
                        case "HH":
                        case "h":
                        case "hh":
                            d[X] = g(e);
                            break;
                        case "m":
                        case "mm":
                            d[B] = g(e);
                            break;
                        case "s":
                        case "ss":
                            d[K] = g(e);
                            break;
                        case "S":
                        case "SS":
                        case "SSS":
                        case "SSSS":
                            d[te] = g(1e3 * ("0." + e));
                            break;
                        case "X":
                            s._d = new Date(1e3 * parseFloat(e));
                            break;
                        case "Z":
                        case "ZZ":
                            s._useUTC = !0, s._tzm = x(e);
                            break;
                        case "w":
                        case "ww":
                        case "W":
                        case "WW":
                        case "d":
                        case "dd":
                        case "ddd":
                        case "dddd":
                        case "e":
                        case "E":
                            i = i.substr(0, 1);
                        case "gg":
                        case "gggg":
                        case "GG":
                        case "GGGG":
                        case "GGGGG":
                            i = i.substr(0, 2), e && (s._w = s._w || {}, s._w[i] = e)
                    }
                } else t._strict && !e && t._pf.unusedTokens.push(i);
            t._pf.charsLeftOver = r - u, a.length > 0 && t._pf.unusedInput.push(a), t._isPm && 12 > t._a[X] && (t._a[X] += 12), !1 === t._isPm && 12 === t._a[X] && (t._a[X] = 0), O(t), y(t)
        }

        function W(t) {
            return t.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, e, n, i, s) {
                return e || n || i || s
            })
        }

        function F(t, e, n, i, s, o, a) {
            return e = new Date(t, e, n, i, s, o, a), 1970 > t && e.setFullYear(t), e
        }

        function P(t) {
            var e = new Date(Date.UTC.apply(null, arguments));
            return 1970 > t && e.setUTCFullYear(t), e
        }

        function G(t, e) {
            if ("string" == typeof t)
                if (isNaN(t)) {
                    if (t = e.weekdaysParse(t), "number" != typeof t) return null
                } else t = parseInt(t, 10);
            return t
        }

        function H(t, e, n, i, s) {
            return s.relativeTime(e || 1, !!n, t, i)
        }

        function Q(t, e, n) {
            return e = n - e, n -= t.day(), n > e && (n -= 7), e - 7 > n && (n += 7), t = q(t).add("d", n), {
                week: Math.ceil(t.dayOfYear() / 7),
                year: t.year()
            }
        }

        function z(t, e, n, i, s) {
            var o = P(t, 0, 1).getUTCDay();
            return e = 7 * (e - 1) + ((null != n ? n : s) - s) + (s - o + (o > i ? 7 : 0) - (s > o ? 7 : 0)) + 1, {
                year: e > 0 ? t : t - 1,
                dayOfYear: e > 0 ? e : (w(t - 1) ? 366 : 365) + e
            }
        }

        function L(n) {
            var i = n._i,
                s = n._f;
            if (null === i) return q.invalid({
                nullInput: !0
            });
            if ("string" == typeof i && (n._i = i = D().preparse(i)), q.isMoment(i)) {
                n = i;
                var a, u = {};
                for (a in n) n.hasOwnProperty(a) && ne.hasOwnProperty(a) && (u[a] = n[a]);
                n = u, n._d = new Date(+i._d)
            } else if (s)
                if (c(s)) {
                    var l, d, i = n;
                    if (0 === i._f.length) i._pf.invalidFormat = !0, i._d = new Date(0 / 0);
                    else {
                        for (a = 0; i._f.length > a; a++) s = 0, u = r({}, i), u._pf = e(), u._f = i._f[a], I(u), _(u) && (s += u._pf.charsLeftOver, s += 10 * u._pf.unusedTokens.length, u._pf.score = s, null == d || d > s) && (d = s, l = u);
                        r(i, l || u)
                    }
                } else I(n);
            else if (u = n, l = u._i, d = se.exec(l), l === t) u._d = new Date;
            else if (d) u._d = new Date(+d[1]);
            else if ("string" == typeof l)
                if (i = u._i, a = Ye.exec(i)) {
                    for (u._pf.iso = !0, l = 0, d = Ce.length; d > l; l++)
                        if (Ce[l][1].exec(i)) {
                            u._f = Ce[l][0] + (a[6] || " ");
                            break
                        }
                    for (l = 0, d = Te.length; d > l; l++)
                        if (Te[l][1].exec(i)) {
                            u._f += Te[l][0];
                            break
                        }
                    i.match(me) && (u._f += "Z"), I(u)
                } else u._d = new Date(i);
            else c(l) ? (u._a = l.slice(0), O(u)) : "[object Date]" === Object.prototype.toString.call(l) || l instanceof Date ? u._d = new Date(+l) : "object" == typeof l ? u._d || (l = p(u._i), u._a = [l.year, l.month, l.day, l.hour, l.minute, l.second, l.millisecond], O(u)) : u._d = new Date(l);
            return new o(n)
        }

        function E(t, e) {
            var n = "date" === e || "month" === e || "year" === e;
            q.fn[t] = q.fn[t + "s"] = function (t, i) {
                var s = this._isUTC ? "UTC" : "";
                return null == i && (i = n), null != t ? (this._d["set" + s + e](t), q.updateOffset(this, i), this) : this._d["get" + s + e]()
            }
        }

        function A(t) {
            q.duration.fn[t] = function () {
                return this._data[t]
            }
        }

        function R(t, e) {
            q.duration.fn["as" + t] = function () {
                return +this / e
            }
        }
        for (var q, $, N = Math.round, Z = 0, J = 1, V = 2, X = 3, B = 4, K = 5, te = 6, ee = {}, ne = {
            _isAMomentObject: null,
            _i: null,
            _f: null,
            _l: null,
            _strict: null,
            _isUTC: null,
            _offset: null,
            _pf: null,
            _lang: null
        }, ie = "undefined" != typeof module && module.exports && "undefined" != typeof require, se = /^\/?Date\((\-?\d+)/i, oe = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, ae = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, re = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, ue = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, le = /\d\d?/, de = /\d{1,3}/, ce = /\d{1,4}/, he = /[+\-]?\d{1,6}/, fe = /\d+/, pe = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, me = /Z|[\+\-]\d\d:?\d\d/gi, ge = /T/i, ve = /[\+\-]?\d+(\.\d{1,3})?/, ke = /\d{1,2}/, we = /\d/, ye = /\d\d/, _e = /\d{3}/, be = /\d{4}/, Me = /[+-]?\d{6}/, De = /[+-]?\d+/, Ye = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Ce = [
                ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
                ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
                ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
                ["GGGG-[W]WW", /\d{4}-W\d{2}/],
                ["YYYY-DDD", /\d{4}-\d{3}/]
        ], Te = [
                ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d{1,3}/],
                ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
                ["HH:mm", /(T| )\d\d:\d\d/],
                ["HH", /(T| )\d\d/]
        ], Ue = /([\+\-]|\d\d)/gi, Se = ["Date", "Hours", "Minutes", "Seconds", "Milliseconds"], xe = {
            Milliseconds: 1,
            Seconds: 1e3,
            Minutes: 6e4,
            Hours: 36e5,
            Days: 864e5,
            Months: 2592e6,
            Years: 31536e6
        }, Oe = {
            ms: "millisecond",
            s: "second",
            m: "minute",
            h: "hour",
            d: "day",
            D: "date",
            w: "week",
            W: "isoWeek",
            M: "month",
            y: "year",
            DDD: "dayOfYear",
            e: "weekday",
            E: "isoWeekday",
            gg: "weekYear",
            GG: "isoWeekYear"
        }, je = {
            dayofyear: "dayOfYear",
            isoweekday: "isoWeekday",
            isoweek: "isoWeek",
            weekyear: "weekYear",
            isoweekyear: "isoWeekYear"
        }, Ie = {}, We = "DDD w W M D d".split(" "), Fe = "MDHhmswW".split(""), Pe = {
            M: function () {
                    return this.month() + 1
        },
            MMM: function (t) {
                    return this.lang().monthsShort(this, t)
        },
            MMMM: function (t) {
                    return this.lang().months(this, t)
        },
            D: function () {
                    return this.date()
        },
            DDD: function () {
                    return this.dayOfYear()
        },
            d: function () {
                    return this.day()
        },
            dd: function (t) {
                    return this.lang().weekdaysMin(this, t)
        },
            ddd: function (t) {
                    return this.lang().weekdaysShort(this, t)
        },
            dddd: function (t) {
                    return this.lang().weekdays(this, t)
        },
            w: function () {
                    return this.week()
        },
            W: function () {
                    return this.isoWeek()
        },
            YY: function () {
                    return l(this.year() % 100, 2)
        },
            YYYY: function () {
                    return l(this.year(), 4)
        },
            YYYYY: function () {
                    return l(this.year(), 5)
        },
            YYYYYY: function () {
                    var t = this.year();
                    return (t >= 0 ? "+" : "-") + l(Math.abs(t), 6)
        },
            gg: function () {
                    return l(this.weekYear() % 100, 2)
        },
            gggg: function () {
                    return l(this.weekYear(), 4)
        },
            ggggg: function () {
                    return l(this.weekYear(), 5)
        },
            GG: function () {
                    return l(this.isoWeekYear() % 100, 2)
        },
            GGGG: function () {
                    return l(this.isoWeekYear(), 4)
        },
            GGGGG: function () {
                    return l(this.isoWeekYear(), 5)
        },
            e: function () {
                    return this.weekday()
        },
            E: function () {
                    return this.isoWeekday()
        },
            a: function () {
                    return this.lang().meridiem(this.hours(), this.minutes(), !0)
        },
            A: function () {
                    return this.lang().meridiem(this.hours(), this.minutes(), !1)
        },
            H: function () {
                    return this.hours()
        },
            h: function () {
                    return this.hours() % 12 || 12
        },
            m: function () {
                    return this.minutes()
        },
            s: function () {
                    return this.seconds()
        },
            S: function () {
                    return g(this.milliseconds() / 100)
        },
            SS: function () {
                    return l(g(this.milliseconds() / 10), 2)
        },
            SSS: function () {
                    return l(this.milliseconds(), 3)
        },
            SSSS: function () {
                    return l(this.milliseconds(), 3)
        },
            Z: function () {
                    var t = -this.zone(),
                        e = "+";
                    return 0 > t && (t = -t, e = "-"), e + l(g(t / 60), 2) + ":" + l(g(t) % 60, 2)
        },
            ZZ: function () {
                    var t = -this.zone(),
                        e = "+";
                    return 0 > t && (t = -t, e = "-"), e + l(g(t / 60), 2) + l(g(t) % 60, 2)
        },
            z: function () {
                    return this.zoneAbbr()
        },
            zz: function () {
                    return this.zoneName()
        },
            X: function () {
                    return this.unix()
        },
            Q: function () {
                    return this.quarter()
        }
        }, Ge = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"]; We.length;) $ = We.pop(), Pe[$ + "o"] = i(Pe[$], $);
        for (; Fe.length;) $ = Fe.pop(), Pe[$ + $] = n(Pe[$], 2);
        for (Pe.DDDD = n(Pe.DDD, 3), r(s.prototype, {
            set: function (t) {
                var e, n;
                for (n in t) e = t[n], "function" == typeof e ? this[n] = e : this["_" + n] = e
        },
            _months: "January February March April May June July August September October November December".split(" "),
            months: function (t) {
                return this._months[t.month()]
        },
            _monthsShort: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
            monthsShort: function (t) {
                return this._monthsShort[t.month()]
        },
            monthsParse: function (t) {
                var e, n;
                for (this._monthsParse || (this._monthsParse = []), e = 0; 12 > e; e++)
                    if (this._monthsParse[e] || (n = q.utc([2e3, e]), n = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""), this._monthsParse[e] = RegExp(n.replace(".", ""), "i")), this._monthsParse[e].test(t)) return e
        },
            _weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
            weekdays: function (t) {
                return this._weekdays[t.day()]
        },
            _weekdaysShort: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
            weekdaysShort: function (t) {
                return this._weekdaysShort[t.day()]
        },
            _weekdaysMin: "Su Mo Tu We Th Fr Sa".split(" "),
            weekdaysMin: function (t) {
                return this._weekdaysMin[t.day()]
        },
            weekdaysParse: function (t) {
                var e, n;
                for (this._weekdaysParse || (this._weekdaysParse = []), e = 0; 7 > e; e++)
                    if (this._weekdaysParse[e] || (n = q([2e3, 1]).day(e), n = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[e] = RegExp(n.replace(".", ""), "i")), this._weekdaysParse[e].test(t)) return e
        },
            _longDateFormat: {
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D YYYY",
            LLL: "MMMM D YYYY LT",
            LLLL: "dddd, MMMM D YYYY LT"
        },
            longDateFormat: function (t) {
                var e = this._longDateFormat[t];
                return !e && this._longDateFormat[t.toUpperCase()] && (e = this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (t) {
                    return t.slice(1)
        }), this._longDateFormat[t] = e), e
        },
            isPM: function (t) {
                return "p" === (t + "").toLowerCase().charAt(0)
        },
            _meridiemParse: /[ap]\.?m?\.?/i,
            meridiem: function (t, e, n) {
                return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
        },
            _calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
            calendar: function (t, e) {
                var n = this._calendar[t];
                return "function" == typeof n ? n.apply(e) : n
        },
            _relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
            relativeTime: function (t, e, n, i) {
                var s = this._relativeTime[n];
                return "function" == typeof s ? s(t, e, n, i) : s.replace(/%d/i, t)
        },
            pastFuture: function (t, e) {
                var n = this._relativeTime[t > 0 ? "future" : "past"];
                return "function" == typeof n ? n(e) : n.replace(/%s/i, e)
        },
            ordinal: function (t) {
                return this._ordinal.replace("%d", t)
        },
            _ordinal: "%d",
            preparse: function (t) {
                return t
        },
            postformat: function (t) {
                return t
        },
            week: function (t) {
                return Q(t, this._week.dow, this._week.doy).week
        },
            _week: {
            dow: 0,
            doy: 6
        },
            _invalidDate: "Invalid date",
            invalidDate: function () {
                return this._invalidDate
        }
        }), q = function (n, i, s, o) {
            var a;
            return "boolean" == typeof s && (o = s, s = t), a = {
            _isAMomentObject: !0
        }, a._i = n, a._f = i, a._l = s, a._strict = o, a._isUTC = !1, a._pf = e(), L(a)
        }, q.utc = function (n, i, s, o) {
            var a;
            return "boolean" == typeof s && (o = s, s = t), a = {
            _isAMomentObject: !0,
            _useUTC: !0,
            _isUTC: !0
        }, a._l = s, a._i = n, a._f = i, a._strict = o, a._pf = e(), L(a).utc()
        }, q.unix = function (t) {
            return q(1e3 * t)
        }, q.duration = function (t, e) {
            var n, i = t,
                s = null;
            return q.isDuration(t) ? i = {
            ms: t._milliseconds,
            d: t._days,
            M: t._months
        } : "number" == typeof t ? (i = {}, e ? i[e] = t : i.milliseconds = t) : (s = oe.exec(t)) ? (n = "-" === s[1] ? -1 : 1, i = {
            y: 0,
            d: g(s[V]) * n,
            h: g(s[X]) * n,
            m: g(s[B]) * n,
            s: g(s[K]) * n,
            ms: g(s[te]) * n
        }) : (s = ae.exec(t)) && (n = "-" === s[1] ? -1 : 1, i = function (t) {
                return t = t && parseFloat(t.replace(",", ".")), (isNaN(t) ? 0 : t) * n
        }, i = {
            y: i(s[2]),
            M: i(s[3]),
            d: i(s[4]),
            h: i(s[5]),
            m: i(s[6]),
            s: i(s[7]),
            w: i(s[8])
        }), s = new a(i), q.isDuration(t) && t.hasOwnProperty("_lang") && (s._lang = t._lang), s
        }, q.version = "2.5.1", q.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", q.updateOffset = function () { }, q.lang = function (t, e) {
            if (!t) return q.fn._lang._abbr;
            if (e) {
                var n = b(t);
                e.abbr = n, ee[n] || (ee[n] = new s), ee[n].set(e)
        } else null === e ? (delete ee[t], t = "en") : ee[t] || D(t);
            return (q.duration.fn._lang = q.fn._lang = D(t))._abbr
        }, q.langData = function (t) {
            return t && t._lang && t._lang._abbr && (t = t._lang._abbr), D(t)
        }, q.isMoment = function (t) {
            return t instanceof o || null != t && t.hasOwnProperty("_isAMomentObject")
        }, q.isDuration = function (t) {
            return t instanceof a
        }, $ = Ge.length - 1; $ >= 0; --$) m(Ge[$]);
        for (q.normalizeUnits = function (t) {
            return f(t)
        }, q.invalid = function (t) {
            var e = q.utc(0 / 0);
            return null != t ? r(e._pf, t) : e._pf.userInvalidated = !0, e
        }, q.parseZone = function () {
            return q.apply(null, arguments).parseZone()
        }, r(q.fn = o.prototype, {
            clone: function () {
                return q(this)
        },
            valueOf: function () {
                return +this._d + 6e4 * (this._offset || 0)
        },
            unix: function () {
                return Math.floor(+this / 1e3)
        },
            toString: function () {
                return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        },
            toDate: function () {
                return this._offset ? new Date(+this) : this._d
        },
            toISOString: function () {
                var t = q(this).utc();
                return t.year() > 0 && 9999 >= t.year() ? T(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : T(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        },
            toArray: function () {
                return [this.year(), this.month(), this.date(), this.hours(), this.minutes(), this.seconds(), this.milliseconds()]
        },
            isValid: function () {
                return _(this)
        },
            isDSTShifted: function () {
                return this._a ? this.isValid() && h(this._a, (this._isUTC ? q.utc(this._a) : q(this._a)).toArray()) > 0 : !1
        },
            parsingFlags: function () {
                return r({}, this._pf)
        },
            invalidAt: function () {
                return this._pf.overflow
        },
            utc: function () {
                return this.zone(0)
        },
            local: function () {
                return this.zone(0), this._isUTC = !1, this
        },
            format: function (t) {
                return t = T(this, t || q.defaultFormat), this.lang().postformat(t)
        },
            add: function (t, e) {
                var n;
                return n = "string" == typeof t ? q.duration(+e, t) : q.duration(t, e), d(this, n, 1), this
        },
            subtract: function (t, e) {
                var n;
                return n = "string" == typeof t ? q.duration(+e, t) : q.duration(t, e), d(this, n, -1), this
        },
            diff: function (t, e, n) {
                t = M(t, this);
                var i, s = 6e4 * (this.zone() - t.zone());
                return e = f(e), "year" === e || "month" === e ? (i = 432e5 * (this.daysInMonth() + t.daysInMonth()), s = 12 * (this.year() - t.year()) + (this.month() - t.month()), s += (this - q(this).startOf("month") - (t - q(t).startOf("month"))) / i, s -= 6e4 * (this.zone() - q(this).startOf("month").zone() - (t.zone() - q(t).startOf("month").zone())) / i, "year" === e && (s /= 12)) : (i = this - t, s = "second" === e ? i / 1e3 : "minute" === e ? i / 6e4 : "hour" === e ? i / 36e5 : "day" === e ? (i - s) / 864e5 : "week" === e ? (i - s) / 6048e5 : i), n ? s : u(s)
        },
            from: function (t, e) {
                return q.duration(this.diff(t)).lang(this.lang()._abbr).humanize(!e)
        },
            fromNow: function (t) {
                return this.from(q(), t)
        },
            calendar: function () {
                var t = M(q(), this).startOf("day"),
                    t = this.diff(t, "days", !0),
                    t = -6 > t ? "sameElse" : -1 > t ? "lastWeek" : 0 > t ? "lastDay" : 1 > t ? "sameDay" : 2 > t ? "nextDay" : 7 > t ? "nextWeek" : "sameElse";
                return this.format(this.lang().calendar(t, this))
        },
            isLeapYear: function () {
                return w(this.year())
        },
            isDST: function () {
                return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
        },
            day: function (t) {
                var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != t ? (t = G(t, this.lang()), this.add({
            d: t - e
        })) : e
        },
            month: function (t) {
                var e, n = this._isUTC ? "UTC" : "";
                return null != t ? "string" == typeof t && (t = this.lang().monthsParse(t), "number" != typeof t) ? this : (e = Math.min(this.date(), v(this.year(), t)), this._d["set" + n + "Month"](t, e), q.updateOffset(this, !0), this) : this._d["get" + n + "Month"]()
        },
            startOf: function (t) {
                switch (t = f(t)) {
                case "year":
                    this.month(0);
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
        }
                return "week" === t ? this.weekday(0) : "isoWeek" === t && this.isoWeekday(1), this
        },
            endOf: function (t) {
                return t = f(t), this.startOf(t).add("isoWeek" === t ? "week" : t, 1).subtract("ms", 1)
        },
            isAfter: function (t, e) {
                return e = e !== void 0 ? e : "millisecond", +this.clone().startOf(e) > +q(t).startOf(e)
        },
            isBefore: function (t, e) {
                return e = e !== void 0 ? e : "millisecond", +this.clone().startOf(e) < +q(t).startOf(e)
        },
            isSame: function (t, e) {
                return e = e || "ms", +this.clone().startOf(e) === +M(t, this).startOf(e)
        },
            min: function (t) {
                return t = q.apply(null, arguments), this > t ? this : t
        },
            max: function (t) {
                return t = q.apply(null, arguments), t > this ? this : t
        },
            zone: function (t, e) {
                e = null == e ? !0 : !1;
                var n = this._offset || 0;
                return null == t ? this._isUTC ? n : this._d.getTimezoneOffset() : ("string" == typeof t && (t = x(t)), 16 > Math.abs(t) && (t *= 60), this._offset = t, this._isUTC = !0, n !== t && e && d(this, q.duration(n - t, "m"), 1, !0), this)
        },
            zoneAbbr: function () {
                return this._isUTC ? "UTC" : ""
        },
            zoneName: function () {
                return this._isUTC ? "Coordinated Universal Time" : ""
        },
            parseZone: function () {
                return this._tzm ? this.zone(this._tzm) : "string" == typeof this._i && this.zone(this._i), this
        },
            hasAlignedHourOffset: function (t) {
                return t = t ? q(t).zone() : 0, 0 === (this.zone() - t) % 60
        },
            daysInMonth: function () {
                return v(this.year(), this.month())
        },
            dayOfYear: function (t) {
                var e = N((q(this).startOf("day") - q(this).startOf("year")) / 864e5) + 1;
                return null == t ? e : this.add("d", t - e)
        },
            quarter: function () {
                return Math.ceil((this.month() + 1) / 3)
        },
            weekYear: function (t) {
                var e = Q(this, this.lang()._week.dow, this.lang()._week.doy).year;
                return null == t ? e : this.add("y", t - e)
        },
            isoWeekYear: function (t) {
                var e = Q(this, 1, 4).year;
                return null == t ? e : this.add("y", t - e)
        },
            week: function (t) {
                var e = this.lang().week(this);
                return null == t ? e : this.add("d", 7 * (t - e))
        },
            isoWeek: function (t) {
                var e = Q(this, 1, 4).week;
                return null == t ? e : this.add("d", 7 * (t - e))
        },
            weekday: function (t) {
                var e = (this.day() + 7 - this.lang()._week.dow) % 7;
                return null == t ? e : this.add("d", t - e)
        },
            isoWeekday: function (t) {
                return null == t ? this.day() || 7 : this.day(this.day() % 7 ? t : t - 7)
        },
            isoWeeksInYear: function () {
                return k(this.year(), 1, 4)
        },
            weeksInYear: function () {
                var t = this._lang._week;
                return k(this.year(), t.dow, t.doy)
        },
            get: function (t) {
                return t = f(t), this[t]()
        },
            set: function (t, e) {
                return t = f(t), "function" == typeof this[t] && this[t](e), this
        },
            lang: function (e) {
                return e === t ? this._lang : (this._lang = D(e), this)
        }
        }), $ = 0; Se.length > $; $++) E(Se[$].toLowerCase().replace(/s$/, ""), Se[$]);
        E("year", "FullYear"), q.fn.days = q.fn.day, q.fn.months = q.fn.month, q.fn.weeks = q.fn.week, q.fn.isoWeeks = q.fn.isoWeek, q.fn.toJSON = q.fn.toISOString, r(q.duration.fn = a.prototype, {
            _bubble: function () {
                var t = this._milliseconds,
                    e = this._days,
                    n = this._months,
                    i = this._data;
                i.milliseconds = t % 1e3, t = u(t / 1e3), i.seconds = t % 60, t = u(t / 60), i.minutes = t % 60, t = u(t / 60), i.hours = t % 24, e += u(t / 24), i.days = e % 30, n += u(e / 30), i.months = n % 12, e = u(n / 12), i.years = e
            },
            weeks: function () {
                return u(this.days() / 7)
            },
            valueOf: function () {
                return this._milliseconds + 864e5 * this._days + 2592e6 * (this._months % 12) + 31536e6 * g(this._months / 12)
            },
            humanize: function (t) {
                var e, n = +this;
                e = !t;
                var i = this.lang(),
                    s = N(Math.abs(n) / 1e3),
                    o = N(s / 60),
                    a = N(o / 60),
                    r = N(a / 24),
                    u = N(r / 365),
                    s = 45 > s && ["s", s] || 1 === o && ["m"] || 45 > o && ["mm", o] || 1 === a && ["h"] || 22 > a && ["hh", a] || 1 === r && ["d"] || 25 >= r && ["dd", r] || 45 >= r && ["M"] || 345 > r && ["MM", N(r / 30)] || 1 === u && ["y"] || ["yy", u];
                return s[2] = e, s[3] = n > 0, s[4] = i, e = H.apply({}, s), t && (e = this.lang().pastFuture(n, e)), this.lang().postformat(e)
            },
            add: function (t, e) {
                var n = q.duration(t, e);
                return this._milliseconds += n._milliseconds, this._days += n._days, this._months += n._months, this._bubble(), this
            },
            subtract: function (t, e) {
                var n = q.duration(t, e);
                return this._milliseconds -= n._milliseconds, this._days -= n._days, this._months -= n._months, this._bubble(), this
            },
            get: function (t) {
                return t = f(t), this[t.toLowerCase() + "s"]()
            },
            as: function (t) {
                return t = f(t), this["as" + t.charAt(0).toUpperCase() + t.slice(1) + "s"]()
            },
            lang: q.fn.lang,
            toIsoString: function () {
                var t = Math.abs(this.years()),
                    e = Math.abs(this.months()),
                    n = Math.abs(this.days()),
                    i = Math.abs(this.hours()),
                    s = Math.abs(this.minutes()),
                    o = Math.abs(this.seconds() + this.milliseconds() / 1e3);
                return this.asSeconds() ? (0 > this.asSeconds() ? "-" : "") + "P" + (t ? t + "Y" : "") + (e ? e + "M" : "") + (n ? n + "D" : "") + (i || s || o ? "T" : "") + (i ? i + "H" : "") + (s ? s + "M" : "") + (o ? o + "S" : "") : "P0D"
            }
        });
        for ($ in xe) xe.hasOwnProperty($) && (R($, xe[$]), A($.toLowerCase()));
        return R("Weeks", 6048e5), q.duration.fn.asMonths = function () {
            return (+this - 31536e6 * this.years()) / 2592e6 + 12 * this.years()
        }, q.lang("en", {
            ordinal: function (t) {
                var e = t % 10,
                    e = 1 === g(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
                return t + e
            }
        }), q
    }.call(this), a.moment = i, a
});




$(document).on('ready', function () {
    //date inputmask
    !function (a) { "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery) }(function (a) {
        function b(a) { var b = document.createElement("input"), c = "on" + a, d = c in b; return d || (b.setAttribute(c, "return;"), d = "function" == typeof b[c]), b = null, d } function c(a) { var b = "text" == a || "tel" == a; if (!b) { var c = document.createElement("input"); c.setAttribute("type", a), b = "text" === c.type, c = null } return b } function d(b, c, e) { var f = e.aliases[b]; return f ? (f.alias && d(f.alias, void 0, e), a.extend(!0, e, f), a.extend(!0, e, c), !0) : !1 } function e(b) { function c(c) { function d(a, b, c, d) { this.matches = [], this.isGroup = a || !1, this.isOptional = b || !1, this.isQuantifier = c || !1, this.isAlternator = d || !1, this.quantifier = { min: 1, max: 1 } } function e(c, d, e) { var f = b.definitions[d], g = 0 == c.matches.length; if (e = void 0 != e ? e : c.matches.length, f && !m) { f.placeholder = a.isFunction(f.placeholder) ? f.placeholder.call(this, b) : f.placeholder; for (var h = f.prevalidator, i = h ? h.length : 0, j = 1; j < f.cardinality; j++) { var k = i >= j ? h[j - 1] : [], l = k.validator, n = k.cardinality; c.matches.splice(e++, 0, { fn: l ? "string" == typeof l ? new RegExp(l) : new function () { this.test = l } : new RegExp("."), cardinality: n ? n : 1, optionality: c.isOptional, newBlockMarker: g, casing: f.casing, def: f.definitionSymbol || d, placeholder: f.placeholder, mask: d }) } c.matches.splice(e++, 0, { fn: f.validator ? "string" == typeof f.validator ? new RegExp(f.validator) : new function () { this.test = f.validator } : new RegExp("."), cardinality: f.cardinality, optionality: c.isOptional, newBlockMarker: g, casing: f.casing, def: f.definitionSymbol || d, placeholder: f.placeholder, mask: d }) } else c.matches.splice(e++, 0, { fn: null, cardinality: 0, optionality: c.isOptional, newBlockMarker: g, casing: null, def: d, placeholder: void 0, mask: d }), m = !1 } for (var f, g, h, i, j, k, l = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})\??|[^.?*+^${[]()|\\]+|./g, m = !1, n = new d, o = [], p = []; f = l.exec(c) ;) switch (g = f[0], g.charAt(0)) { case b.optionalmarker.end: case b.groupmarker.end: if (h = o.pop(), o.length > 0) { if (i = o[o.length - 1], i.matches.push(h), i.isAlternator) { j = o.pop(); for (var q = 0; q < j.matches.length; q++) j.matches[q].isGroup = !1; o.length > 0 ? (i = o[o.length - 1], i.matches.push(j)) : n.matches.push(j) } } else n.matches.push(h); break; case b.optionalmarker.start: o.push(new d(!1, !0)); break; case b.groupmarker.start: o.push(new d(!0)); break; case b.quantifiermarker.start: var r = new d(!1, !1, !0); g = g.replace(/[{}]/g, ""); var s = g.split(","), t = isNaN(s[0]) ? s[0] : parseInt(s[0]), u = 1 == s.length ? t : isNaN(s[1]) ? s[1] : parseInt(s[1]); if (("*" == u || "+" == u) && (t = "*" == u ? 0 : 1), r.quantifier = { min: t, max: u }, o.length > 0) { var v = o[o.length - 1].matches; if (f = v.pop(), !f.isGroup) { var w = new d(!0); w.matches.push(f), f = w } v.push(f), v.push(r) } else { if (f = n.matches.pop(), !f.isGroup) { var w = new d(!0); w.matches.push(f), f = w } n.matches.push(f), n.matches.push(r) } break; case b.escapeChar: m = !0; break; case b.alternatormarker: o.length > 0 ? (i = o[o.length - 1], k = i.matches.pop()) : k = n.matches.pop(), k.isAlternator ? o.push(k) : (j = new d(!1, !1, !1, !0), j.matches.push(k), o.push(j)); break; default: if (o.length > 0) { if (i = o[o.length - 1], i.matches.length > 0 && (k = i.matches[i.matches.length - 1], k.isGroup && (k.isGroup = !1, e(k, b.groupmarker.start, 0), e(k, b.groupmarker.end))), e(i, g), i.isAlternator) { j = o.pop(); for (var q = 0; q < j.matches.length; q++) j.matches[q].isGroup = !1; o.length > 0 ? (i = o[o.length - 1], i.matches.push(j)) : n.matches.push(j) } } else n.matches.length > 0 && (k = n.matches[n.matches.length - 1], k.isGroup && (k.isGroup = !1, e(k, b.groupmarker.start, 0), e(k, b.groupmarker.end))), e(n, g) } return n.matches.length > 0 && (k = n.matches[n.matches.length - 1], k.isGroup && (k.isGroup = !1, e(k, b.groupmarker.start, 0), e(k, b.groupmarker.end)), p.push(n)), p } function d(d, e) { if (void 0 == d || "" == d) return void 0; if (1 == d.length && 0 == b.greedy && 0 != b.repeat && (b.placeholder = ""), b.repeat > 0 || "*" == b.repeat || "+" == b.repeat) { var f = "*" == b.repeat ? 0 : "+" == b.repeat ? 1 : b.repeat; d = b.groupmarker.start + d + b.groupmarker.end + b.quantifiermarker.start + f + "," + b.repeat + b.quantifiermarker.end } return void 0 == a.inputmask.masksCache[d] && (a.inputmask.masksCache[d] = { mask: d, maskToken: c(d), validPositions: {}, _buffer: void 0, buffer: void 0, tests: {}, metadata: e }), a.extend(!0, {}, a.inputmask.masksCache[d]) } function e(a) { if (a = a.toString(), b.numericInput) { a = a.split("").reverse(); for (var c = 0; c < a.length; c++) a[c] == b.optionalmarker.start ? a[c] = b.optionalmarker.end : a[c] == b.optionalmarker.end ? a[c] = b.optionalmarker.start : a[c] == b.groupmarker.start ? a[c] = b.groupmarker.end : a[c] == b.groupmarker.end && (a[c] = b.groupmarker.start); a = a.join("") } return a } var f = void 0; if (a.isFunction(b.mask) && (b.mask = b.mask.call(this, b)), a.isArray(b.mask)) { if (b.mask.length > 1) { b.keepStatic = void 0 == b.keepStatic ? !0 : b.keepStatic; var g = "("; return a.each(b.mask, function (b, c) { g.length > 1 && (g += ")|("), g += e(void 0 == c.mask || a.isFunction(c.mask) ? c : c.mask) }), g += ")", d(g, b.mask) } b.mask = b.mask.pop() } return b.mask && (f = void 0 == b.mask.mask || a.isFunction(b.mask.mask) ? d(e(b.mask), b.mask) : d(e(b.mask.mask), b.mask)), f } function f(d, e, f) {
            function g(a, b, c) { b = b || 0; var d, e, f, g = [], h = 0; do { if (a === !0 && k().validPositions[h]) { var i = k().validPositions[h]; e = i.match, d = i.locator.slice(), g.push(c === !0 ? i.input : F(h, e)) } else { if (b > h) { var j = s(h, d, h - 1); f = j[0] } else f = p(h, d, h - 1); e = f.match, d = f.locator.slice(), g.push(F(h, e)) } h++ } while ((void 0 == db || db > h - 1) && null != e.fn || null == e.fn && "" != e.def || b >= h); return g.pop(), g } function k() { return e } function l(a) { var b = k(); b.buffer = void 0, b.tests = {}, a !== !0 && (b._buffer = void 0, b.validPositions = {}, b.p = 0) } function m(a) { var b = k(), c = -1, d = b.validPositions; void 0 == a && (a = -1); var e = c, f = c; for (var g in d) { var h = parseInt(g); (-1 == a || null != d[h].match.fn) && (a >= h && (e = h), h >= a && (f = h)) } return c = -1 != e && a - e > 1 || a > f ? e : f } function n(b, c, d) { if (f.insertMode && void 0 != k().validPositions[b] && void 0 == d) { var e, g = a.extend(!0, {}, k().validPositions), h = m(); for (e = b; h >= e; e++) delete k().validPositions[e]; k().validPositions[b] = c; var i, j = !0; for (e = b; h >= e; e++) { var l = g[e]; if (void 0 != l) { var n = k().validPositions; i = !f.keepStatic && n[e] && (void 0 != n[e + 1] && s(e + 1, n[e].locator.slice(), e).length > 1 || void 0 != n[e].alternation) ? e + 1 : B(e), j = r(i, l.match.def) ? j && y(i, l.input, !0, !0) !== !1 : null == l.match.fn } if (!j) break } if (!j) return k().validPositions = a.extend(!0, {}, g), !1 } else k().validPositions[b] = c; return !0 } function o(a, b, c) { var d, e = a; void 0 != k().validPositions[a] && k().validPositions[a].input == f.radixPoint && (b++, e++); var g = b; for (d = e; b > d; d++) void 0 != k().validPositions[d] && (0 != f.canClearPosition(k(), d, m(), f) || c === !0 ? delete k().validPositions[d] : g--); for (d = e; d <= m() ;) { var h = k().validPositions[d], i = k().validPositions[e]; void 0 != h && void 0 == i ? (r(e, h.match.def) && y(e, h.input, !0) !== !1 && (delete k().validPositions[d], d++), e++) : d++ } var j = m(); j >= a && void 0 != k().validPositions[j] && k().validPositions[j].input == f.radixPoint && delete k().validPositions[j], l(!0) } function p(a, b, c) { for (var d, e = s(a, b, c), g = m(), h = k().validPositions[g] || s(0)[0], i = void 0 != h.alternation ? h.locator[h.alternation].split(",") : [], j = 0; j < e.length && (d = e[j], !(d.match && (f.greedy && d.match.optionalQuantifier !== !0 || (d.match.optionality === !1 || d.match.newBlockMarker === !1) && d.match.optionalQuantifier !== !0) && (void 0 == h.alternation || void 0 != d.locator[h.alternation] && x(d.locator[h.alternation].toString().split(","), i)))) ; j++); return d } function q(a) { return k().validPositions[a] ? k().validPositions[a].match : s(a)[0].match } function r(a, b) { for (var c = !1, d = s(a), e = 0; e < d.length; e++) if (d[e].match && d[e].match.def == b) { c = !0; break } return c } function s(b, c, d) { function e(c, d, f, h) { function l(f, h, n) { if (g > 1e4) return alert("jquery.inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + k().mask), !0; if (g == b && void 0 == f.matches) return i.push({ match: f, locator: h.reverse() }), !0; if (void 0 != f.matches) { if (f.isGroup && n !== !0) { if (f = l(c.matches[m + 1], h)) return !0 } else if (f.isOptional) { var o = f; if (f = e(f, d, h, n)) { var p = i[i.length - 1].match, q = 0 == a.inArray(p, o.matches); q && (j = !0), g = b } } else if (f.isAlternator) { var r, s = f, t = [], u = i.slice(), v = h.length, w = d.length > 0 ? d.shift() : -1; if (-1 == w || "string" == typeof w) { var x, y = g, z = d.slice(); "string" == typeof w && (x = w.split(",")); for (var A = 0; A < s.matches.length; A++) { i = [], f = l(s.matches[A], [A].concat(h), n) || f, r = i.slice(), g = y, i = []; for (var B = 0; B < z.length; B++) d[B] = z[B]; for (var C = 0; C < r.length; C++) for (var D = r[C], E = 0; E < t.length; E++) { var F = t[E]; if (D.match.mask == F.match.mask && ("string" != typeof w || -1 != a.inArray(D.locator[v].toString(), x))) { r.splice(C, 1), F.locator[v] = F.locator[v] + "," + D.locator[v], F.alternation = v; break } } t = t.concat(r) } "string" == typeof w && (t = a.map(t, function (b, c) { if (isFinite(c)) { var d, e = b.locator[v].toString().split(","); b.locator[v] = void 0, b.alternation = void 0; for (var f = 0; f < e.length; f++) d = -1 != a.inArray(e[f], x), d && (void 0 != b.locator[v] ? (b.locator[v] += ",", b.alternation = v, b.locator[v] += e[f]) : b.locator[v] = parseInt(e[f])); if (void 0 != b.locator[v]) return b } })), i = u.concat(t), j = !0 } else f = l(s.matches[w], [w].concat(h), n); if (f) return !0 } else if (f.isQuantifier && n !== !0) for (var G = f, H = d.length > 0 && n !== !0 ? d.shift() : 0; H < (isNaN(G.quantifier.max) ? H + 1 : G.quantifier.max) && b >= g; H++) { var I = c.matches[a.inArray(G, c.matches) - 1]; if (f = l(I, [H].concat(h), !0)) { var p = i[i.length - 1].match; p.optionalQuantifier = H > G.quantifier.min - 1; var q = 0 == a.inArray(p, I.matches); if (q) { if (H > G.quantifier.min - 1) { j = !0, g = b; break } return !0 } return !0 } } else if (f = e(f, d, h, n)) return !0 } else g++ } for (var m = d.length > 0 ? d.shift() : 0; m < c.matches.length; m++) if (c.matches[m].isQuantifier !== !0) { var n = l(c.matches[m], [m].concat(f), h); if (n && g == b) return n; if (g > b) break } } var f = k().maskToken, g = c ? d : 0, h = c || [0], i = [], j = !1; if (void 0 == c) { for (var l, m = b - 1; void 0 == (l = k().validPositions[m]) && m > -1;) m--; if (void 0 != l && m > -1) g = m, h = l.locator.slice(); else { for (m = b - 1; void 0 == (l = k().tests[m]) && m > -1;) m--; void 0 != l && m > -1 && (g = m, h = l[0].locator.slice()) } } for (var n = h.shift() ; n < f.length; n++) { var o = e(f[n], h, [n]); if (o && g == b || g > b) break } return (0 == i.length || j) && i.push({ match: { fn: null, cardinality: 0, optionality: !0, casing: null, def: "" }, locator: [] }), k().tests[b] = a.extend(!0, [], i), k().tests[b] } function t() { return void 0 == k()._buffer && (k()._buffer = g(!1, 1)), k()._buffer } function u() { return void 0 == k().buffer && (k().buffer = g(!0, m(), !0)), k().buffer } function v(a, b, c) { if (c = c || u().slice(), a === !0) l(), a = 0, b = c.length; else for (var d = a; b > d; d++) delete k().validPositions[d], delete k().tests[d]; for (var d = a; b > d; d++) c[d] != f.skipOptionalPartCharacter && y(d, c[d], !0, !0) } function w(a, b) { switch (b.casing) { case "upper": a = a.toUpperCase(); break; case "lower": a = a.toLowerCase() } return a } function x(b, c) { for (var d = f.greedy ? c : c.slice(0, 1), e = !1, g = 0; g < b.length; g++) if (-1 != a.inArray(b[g], d)) { e = !0; break } return e } function y(b, c, d, e) { function g(b, c, d, e) { var g = !1; return a.each(s(b), function (h, i) { for (var j = i.match, p = c ? 1 : 0, q = "", r = (u(), j.cardinality) ; r > p; r--) q += D(b - (r - 1)); if (c && (q += c), g = null != j.fn ? j.fn.test(q, k(), b, d, f) : c != j.def && c != f.skipOptionalPartCharacter || "" == j.def ? !1 : { c: j.def, pos: b }, g !== !1) { var s = void 0 != g.c ? g.c : c; s = s == f.skipOptionalPartCharacter && null === j.fn ? j.def : s; var t = b; if (void 0 != g.remove && o(g.remove, g.remove + 1, !0), g.refreshFromBuffer) { var x = g.refreshFromBuffer; if (d = !0, v(x === !0 ? x : x.start, x.end), void 0 == g.pos && void 0 == g.c) return g.pos = m(), !1; if (t = void 0 != g.pos ? g.pos : b, t != b) return g = a.extend(g, y(t, s, !0)), !1 } else if (g !== !0 && void 0 != g.pos && g.pos != b && (t = g.pos, v(b, t), t != b)) return g = a.extend(g, y(t, s, !0)), !1; return 1 != g && void 0 == g.pos && void 0 == g.c ? !1 : (h > 0 && l(!0), n(t, a.extend({}, i, { input: w(s, j) }), e) || (g = !1), !1) } }), g } function h(b, c, d, e) { var g, h, i = a.extend(!0, {}, k().validPositions); for (g = m() ; g >= 0; g--) if (k().validPositions[g] && void 0 != k().validPositions[g].alternation) { h = k().validPositions[g].alternation; break } if (void 0 != h) for (var j in k().validPositions) if (parseInt(j) > parseInt(g) && void 0 === k().validPositions[j].alternation) { for (var n = k().validPositions[j], o = n.locator[h], p = k().validPositions[g].locator[h].split(","), q = 0; q < p.length; q++) if (o < p[q]) { for (var r, s, t = j - 1; t >= 0; t--) if (r = k().validPositions[t], void 0 != r) { s = r.locator[h], r.locator[h] = p[q]; break } if (o != r.locator[h]) { for (var v = u().slice(), w = j; w < m() + 1; w++) delete k().validPositions[w], delete k().tests[w]; l(!0), f.keepStatic = !f.keepStatic; for (var w = j; w < v.length; w++) v[w] != f.skipOptionalPartCharacter && y(m() + 1, v[w], !1, !0); r.locator[h] = s; var x = y(b, c, d, e); if (f.keepStatic = !f.keepStatic, x) return x; l(), k().validPositions = a.extend(!0, {}, i) } } break } return !1 } function i(b, c) { for (var d = k().validPositions[c], e = d.locator, f = e.length, g = b; c > g; g++) if (!z(g)) { var h = s(g), i = h[0], j = -1; a.each(h, function (a, b) { for (var c = 0; f > c; c++) b.locator[c] && x(b.locator[c].toString().split(","), e[c].toString().split(",")) && c > j && (j = c, i = b) }), n(g, a.extend({}, i, { input: i.match.def }), !0) } } d = d === !0; for (var j = u(), p = b - 1; p > -1 && !k().validPositions[p]; p--); for (p++; b > p; p++) void 0 == k().validPositions[p] && ((!z(p) || j[p] != F(p)) && s(p).length > 1 || j[p] == f.radixPoint || "0" == j[p] && a.inArray(f.radixPoint, j) < p) && g(p, j[p], !0); var q = b, r = !1; if (e && q >= A() && l(!0), q < A() && (r = g(q, c, d, e), !d && r === !1)) { var t = k().validPositions[q]; if (!t || null != t.match.fn || t.match.def != c && c != f.skipOptionalPartCharacter) { if ((f.insertMode || void 0 == k().validPositions[B(q)]) && !z(q)) for (var C = q + 1, E = B(q) ; E >= C; C++) if (r = g(C, c, d, e), r !== !1) { i(q, C), q = C; break } } else r = { caret: B(q) } } return r === !1 && f.keepStatic && N(j) && (r = h(b, c, d, e)), r === !0 && (r = { pos: q }), r } function z(a) { var b = q(a); return null != b.fn ? b.fn : !1 } function A() { var a; db = cb.prop("maxLength"), -1 == db && (db = void 0); var b, c = m(), d = k().validPositions[c], e = void 0 != d ? d.locator.slice() : void 0; for (b = c + 1; void 0 == d || null != d.match.fn || null == d.match.fn && "" != d.match.def; b++) d = p(b, e, b - 1), e = d.locator.slice(); return a = b, void 0 == db || db > a ? a : db } function B(a) { var b = A(); if (a >= b) return b; for (var c = a; ++c < b && !z(c) && (f.nojumps !== !0 || f.nojumpsThreshold > c) ;); return c } function C(a) { var b = a; if (0 >= b) return 0; for (; --b > 0 && !z(b) ;); return b } function D(a) { return void 0 == k().validPositions[a] ? F(a) : k().validPositions[a].input } function E(b, c, d, e, g) { if (e && a.isFunction(f.onBeforeWrite)) { var h = f.onBeforeWrite.call(b, e, c, d, f); if (h && h.refreshFromBuffer) { var i = h.refreshFromBuffer; v(i === !0 ? i : i.start, i.end, h.buffer), l(!0), d = h.caret || d } } b._valueSet(c.join("")), void 0 != d && K(b, d), g === !0 && (gb = !0, a(b).trigger("input")) } function F(a, b) { return b = b || q(a), void 0 != b.placeholder ? b.placeholder : null == b.fn ? b.def : f.placeholder.charAt(a % f.placeholder.length) } function G(b, c, d, e) { function f() { var a = !1, b = t().slice(n, B(n)).join("").indexOf(j); if (-1 != b && !z(n)) { a = !0; for (var c = t().slice(n, n + b), d = 0; d < c.length; d++) if (" " != c[d]) { a = !1; break } } return a } var g = void 0 != e ? e.slice() : b._valueGet().split(""); l(), k().p = B(-1), c && b._valueSet(""); var h = t().slice(0, B(-1)).join(""), i = g.join("").match(new RegExp(H(h), "g")); i && i.length > 0 && g.splice(0, h.length * i.length); var j = "", n = 0; a.each(g, function (c, e) { var g = a.Event("keypress"); g.which = e.charCodeAt(0), j += e; var h = m(), i = k().validPositions[h], l = p(h + 1, i ? i.locator.slice() : void 0, h); if (!f() || d) { var o = d ? c : null == l.match.fn && l.match.optionality && h + 1 < k().p ? h + 1 : k().p; T.call(b, g, !0, !1, d, o), n = o + 1, j = "" } else T.call(b, g, !0, !1, !0, h + 1) }), c && E(b, u(), a(b).is(":focus") ? B(m(0)) : void 0, a.Event("checkval")) } function H(b) { return a.inputmask.escapeRegex.call(this, b) } function I(b) { if (b.data("_inputmask") && !b.hasClass("hasDatepicker")) { var c = [], d = k().validPositions; for (var e in d) d[e].match && null != d[e].match.fn && c.push(d[e].input); var g = (eb ? c.reverse() : c).join(""), h = (eb ? u().slice().reverse() : u()).join(""); return a.isFunction(f.onUnMask) && (g = f.onUnMask.call(b, h, g, f) || g), g } return b[0]._valueGet() } function J(a) { if (eb && "number" == typeof a && (!f.greedy || "" != f.placeholder)) { var b = u().length; a = b - a } return a } function K(b, c, d) { var e, g = b.jquery && b.length > 0 ? b[0] : b; if ("number" != typeof c) return g.setSelectionRange ? (c = g.selectionStart, d = g.selectionEnd) : document.selection && document.selection.createRange && (e = document.selection.createRange(), c = 0 - e.duplicate().moveStart("character", -1e5), d = c + e.text.length), { begin: J(c), end: J(d) }; if (c = J(c), d = J(d), d = "number" == typeof d ? d : c, a(g).is(":visible")) { var h = a(g).css("font-size").replace("px", "") * d; g.scrollLeft = h > g.scrollWidth ? h : 0, 0 == f.insertMode && c == d && d++, g.setSelectionRange ? (g.selectionStart = c, g.selectionEnd = d) : g.createTextRange && (e = g.createTextRange(), e.collapse(!0), e.moveEnd("character", d), e.moveStart("character", c), e.select()) } } function L(b) { var c, d, e = u(), f = e.length, g = m(), h = {}, i = k().validPositions[g], j = void 0 != i ? i.locator.slice() : void 0; for (c = g + 1; c < e.length; c++) d = p(c, j, c - 1), j = d.locator.slice(), h[c] = a.extend(!0, {}, d); var l = i && void 0 != i.alternation ? i.locator[i.alternation].split(",") : []; for (c = f - 1; c > g && (d = h[c].match, (d.optionality || d.optionalQuantifier || i && void 0 != i.alternation && void 0 != h[c].locator[i.alternation] && -1 != a.inArray(h[c].locator[i.alternation].toString(), l)) && e[c] == F(c, d)) ; c--) f--; return b ? { l: f, def: h[f] ? h[f].match : void 0 } : f } function M(a) { for (var b = L(), c = a.length - 1; c > b && !z(c) ; c--); a.splice(b, c + 1 - b) } function N(b) { if (a.isFunction(f.isComplete)) return f.isComplete.call(cb, b, f); if ("*" == f.repeat) return void 0; var c = !1, d = L(!0), e = C(d.l), g = m(); if (g == e && (void 0 == d.def || d.def.newBlockMarker || d.def.optionalQuantifier)) { c = !0; for (var h = 0; e >= h; h++) { var i = z(h); if (i && (void 0 == b[h] || b[h] == F(h)) || !i && b[h] != F(h)) { c = !1; break } } } return c } function O(a, b) { return eb ? a - b > 1 || a - b == 1 && f.insertMode : b - a > 1 || b - a == 1 && f.insertMode } function P(b) { var c = a._data(b).events; a.each(c, function (b, c) { a.each(c, function (a, b) { if ("inputmask" == b.namespace && "setvalue" != b.type) { var c = b.handler; b.handler = function (a) { if (!this.disabled && (!this.readOnly || "keydown" == a.type && a.ctrlKey && 67 == a.keyCode)) { switch (a.type) { case "input": if (gb === !0) return gb = !1, a.preventDefault(); break; case "keydown": fb = !1; break; case "keypress": if (fb === !0) return a.preventDefault(); fb = !0; break; case "compositionstart": break; case "compositionupdate": gb = !0; break; case "compositionend": } return c.apply(this, arguments) } a.preventDefault() } } }) }) } function Q(b) {
                function c(b) { if (void 0 == a.valHooks[b] || 1 != a.valHooks[b].inputmaskpatch) { var c = a.valHooks[b] && a.valHooks[b].get ? a.valHooks[b].get : function (a) { return a.value }, d = a.valHooks[b] && a.valHooks[b].set ? a.valHooks[b].set : function (a, b) { return a.value = b, a }; a.valHooks[b] = { get: function (b) { var d = a(b); if (d.data("_inputmask")) { if (d.data("_inputmask").opts.autoUnmask) return d.inputmask("unmaskedvalue"); var e = c(b), f = d.data("_inputmask"), g = f.maskset, h = g._buffer; return h = h ? h.join("") : "", e != h ? e : "" } return c(b) }, set: function (b, c) { var e, f = a(b), g = f.data("_inputmask"); return g ? (e = d(b, a.isFunction(g.opts.onBeforeMask) ? g.opts.onBeforeMask.call(nb, c, g.opts) || c : c), f.triggerHandler("setvalue.inputmask")) : e = d(b, c), e }, inputmaskpatch: !0 } } } function d() { var b = a(this), c = a(this).data("_inputmask"); return c ? c.opts.autoUnmask ? b.inputmask("unmaskedvalue") : h.call(this) != t().join("") ? h.call(this) : "" : h.call(this) } function e(b) { var c = a(this).data("_inputmask"); c ? (i.call(this, a.isFunction(c.opts.onBeforeMask) ? c.opts.onBeforeMask.call(nb, b, c.opts) || b : b), a(this).triggerHandler("setvalue.inputmask")) : i.call(this, b) } function g(b) {
                    a(b).bind("mouseenter.inputmask", function () { var b = a(this), c = this, d = c._valueGet(); "" != d && d != u().join("") && (this._valueSet(a.isFunction(f.onBeforeMask) ? f.onBeforeMask.call(nb, d, f) || d : d), b.triggerHandler("setvalue.inputmask")) });//!! the bound handlers are executed in the order they where bound
                    var c = a._data(b).events, d = c.mouseover; if (d) { for (var e = d[d.length - 1], g = d.length - 1; g > 0; g--) d[g] = d[g - 1]; d[0] = e }
                } var h, i; if (!b._valueGet) { if (Object.getOwnPropertyDescriptor) { Object.getOwnPropertyDescriptor(b, "value") } document.__lookupGetter__ && b.__lookupGetter__("value") ? (h = b.__lookupGetter__("value"), i = b.__lookupSetter__("value"), b.__defineGetter__("value", d), b.__defineSetter__("value", e)) : (h = function () { return b.value }, i = function (a) { b.value = a }, c(b.type), g(b)), b._valueGet = function (a) { return eb && a !== !0 ? h.call(this).split("").reverse().join("") : h.call(this) }, b._valueSet = function (a) { i.call(this, eb ? a.split("").reverse().join("") : a) } }
            } function R(b, c, d) { function e() { if (f.keepStatic) { l(!0); var c, d = []; for (c = m() ; c >= 0; c--) if (k().validPositions[c]) { if (void 0 != k().validPositions[c].alternation) break; d.push(k().validPositions[c].input), delete k().validPositions[c] } if (c > 0) for (; d.length > 0;) { k().p = B(m()); var e = a.Event("keypress"); e.which = d.pop().charCodeAt(0), T.call(b, e, !0, !1, !1, k().p) } } } if ((f.numericInput || eb) && (c == a.inputmask.keyCode.BACKSPACE ? c = a.inputmask.keyCode.DELETE : c == a.inputmask.keyCode.DELETE && (c = a.inputmask.keyCode.BACKSPACE), eb)) { var g = d.end; d.end = d.begin, d.begin = g } c == a.inputmask.keyCode.BACKSPACE && d.end - d.begin <= 1 ? d.begin = C(d.begin) : c == a.inputmask.keyCode.DELETE && d.begin == d.end && d.end++, o(d.begin, d.end), e(); var h = m(d.begin); h < d.begin ? (-1 == h && l(), k().p = B(h)) : k().p = d.begin } function S(c) { var d = this, e = a(d), g = c.keyCode, i = K(d); g == a.inputmask.keyCode.BACKSPACE || g == a.inputmask.keyCode.DELETE || h && 127 == g || c.ctrlKey && 88 == g && !b("cut") ? (c.preventDefault(), 88 == g && (_ = u().join("")), R(d, g, i), E(d, u(), k().p, c, _ != u().join("")), d._valueGet() == t().join("") && e.trigger("cleared"), f.showTooltip && e.prop("title", k().mask)) : g == a.inputmask.keyCode.END || g == a.inputmask.keyCode.PAGE_DOWN ? setTimeout(function () { var a = B(m()); f.insertMode || a != A() || c.shiftKey || a--, K(d, c.shiftKey ? i.begin : a, a) }, 0) : g == a.inputmask.keyCode.HOME && !c.shiftKey || g == a.inputmask.keyCode.PAGE_UP ? K(d, 0, c.shiftKey ? i.begin : 0) : f.undoOnEscape && g == a.inputmask.keyCode.ESCAPE || 90 == g && c.ctrlKey ? (G(d, !0, !1, _.split("")), e.click()) : g != a.inputmask.keyCode.INSERT || c.shiftKey || c.ctrlKey ? 0 != f.insertMode || c.shiftKey || (g == a.inputmask.keyCode.RIGHT ? setTimeout(function () { var a = K(d); K(d, a.begin) }, 0) : g == a.inputmask.keyCode.LEFT && setTimeout(function () { var a = K(d); K(d, eb ? a.begin + 1 : a.begin - 1) }, 0)) : (f.insertMode = !f.insertMode, K(d, f.insertMode || i.begin != A() ? i.begin : i.begin - 1)), hb = -1 != a.inArray(g, f.ignorables) } function T(b, c, d, e, g) { var h = this, i = a(h), j = b.which || b.charCode || b.keyCode; if (!(c === !0 || b.ctrlKey && b.altKey) && (b.ctrlKey || b.metaKey || hb)) return !0; if (j) { 46 == j && 0 == b.shiftKey && "," == f.radixPoint && (j = 44); var m, o = c ? { begin: g, end: g } : K(h), p = String.fromCharCode(j), q = O(o.begin, o.end); q && (k().undoPositions = a.extend(!0, {}, k().validPositions), R(h, a.inputmask.keyCode.DELETE, o), f.insertMode || (f.insertMode = !f.insertMode, n(o.begin, e), f.insertMode = !f.insertMode), q = !f.multi), k().writeOutBuffer = !0; var r = eb && !q ? o.end : o.begin, t = y(r, p, e); if (t !== !1) { if (t !== !0 && (r = void 0 != t.pos ? t.pos : r, p = void 0 != t.c ? t.c : p), l(!0), void 0 != t.caret) m = t.caret; else { var w = k().validPositions; m = !f.keepStatic && (void 0 != w[r + 1] && s(r + 1, w[r].locator.slice(), r).length > 1 || void 0 != w[r].alternation) ? r + 1 : B(r) } k().p = m } if (d !== !1) { var x = this; if (setTimeout(function () { f.onKeyValidation.call(x, t, f) }, 0), k().writeOutBuffer && t !== !1) { var z = u(); E(h, z, c ? void 0 : f.numericInput ? C(m) : m, b, c !== !0), c !== !0 && setTimeout(function () { N(z) === !0 && i.trigger("complete") }, 0) } else q && (k().buffer = void 0, k().validPositions = k().undoPositions) } else q && (k().buffer = void 0, k().validPositions = k().undoPositions); if (f.showTooltip && i.prop("title", k().mask), c && a.isFunction(f.onBeforeWrite)) { var A = f.onBeforeWrite.call(this, b, u(), m, f); if (A && A.refreshFromBuffer) { var D = A.refreshFromBuffer; v(D === !0 ? D : D.start, D.end, A.buffer), l(!0), A.caret && (k().p = A.caret) } } b.preventDefault() } } function U(b) { var c = (a(this), b.keyCode, u()); f.onKeyUp.call(this, b, c, f) } function V(b) { var c = this, d = a(c), e = c._valueGet(!0), g = K(c); if ("propertychange" == b.type && c._valueGet().length <= A()) return !0; if ("paste" == b.type) { var h = e.substr(0, g.begin), i = e.substr(g.end, e.length); h == t().slice(0, g.begin).join("") && (h = ""), i == t().slice(g.end).join("") && (i = ""), window.clipboardData && window.clipboardData.getData ? e = h + window.clipboardData.getData("Text") + i : b.originalEvent && b.originalEvent.clipboardData && b.originalEvent.clipboardData.getData && (e = h + b.originalEvent.clipboardData.getData("text/plain") + i) } var j = a.isFunction(f.onBeforePaste) ? f.onBeforePaste.call(c, e, f) || e : e; return G(c, !0, !1, eb ? j.split("").reverse() : j.split("")), d.click(), N(u()) === !0 && d.trigger("complete"), !1 } function W(b) { var c = this; G(c, !0, !1), N(u()) === !0 && a(c).trigger("complete"), b.preventDefault() } function X(a) { var b = this; _ = u().join(""), ("" == bb || 0 != a.originalEvent.data.indexOf(bb)) && (ab = K(b)) } function Y(b) { var c = this, d = ab || K(c); 0 == b.originalEvent.data.indexOf(bb) && (l(), d = { begin: 0, end: 0 }); var e = b.originalEvent.data; K(c, d.begin, d.end); for (var g = 0; g < e.length; g++) { var h = a.Event("keypress"); h.which = e.charCodeAt(g), fb = !1, hb = !1, T.call(c, h) } setTimeout(function () { var a = k().p; E(c, u(), f.numericInput ? C(a) : a) }, 0), bb = b.originalEvent.data } function Z() { } function $(b) { if (cb = a(b), cb.is(":input") && c(cb.attr("type"))) { if (cb.data("_inputmask", { maskset: e, opts: f, isRTL: !1 }), f.showTooltip && cb.prop("title", k().mask), ("rtl" == b.dir || f.rightAlign) && cb.css("text-align", "right"), "rtl" == b.dir || f.numericInput) { b.dir = "ltr", cb.removeAttr("dir"); var d = cb.data("_inputmask"); d.isRTL = !0, cb.data("_inputmask", d), eb = !0 } cb.unbind(".inputmask"), cb.closest("form").bind("submit", function () { _ != u().join("") && cb.change(), cb[0]._valueGet && cb[0]._valueGet() == t().join("") && cb[0]._valueSet(""), f.removeMaskOnSubmit && cb.inputmask("remove") }).bind("reset", function () { setTimeout(function () { cb.triggerHandler("setvalue.inputmask") }, 0) }), cb.bind("mouseenter.inputmask", function () { var b = a(this), c = this; !b.is(":focus") && f.showMaskOnHover && c._valueGet() != u().join("") && E(c, u()) }).bind("blur.inputmask", function (b) { var c = a(this), d = this; if (c.data("_inputmask")) { var e = d._valueGet(), g = u().slice(); ib = !0, _ != g.join("") && (c.change(), _ = g.join("")), "" != e && (f.clearMaskOnLostFocus && (e == t().join("") ? g = [] : M(g)), N(g) === !1 && (c.trigger("incomplete"), f.clearIncomplete && (l(), g = f.clearMaskOnLostFocus ? [] : t().slice())), E(d, g, void 0, b)) } }).bind("focus.inputmask", function () { var b = (a(this), this), c = b._valueGet(); f.showMaskOnFocus && (!f.showMaskOnHover || f.showMaskOnHover && "" == c) && b._valueGet() != u().join("") && E(b, u(), B(m())), _ = u().join("") }).bind("mouseleave.inputmask", function () { var b = a(this), c = this; if (f.clearMaskOnLostFocus) { var d = u().slice(), e = c._valueGet(); b.is(":focus") || e == b.attr("placeholder") || "" == e || (e == t().join("") ? d = [] : M(d), E(c, d)) } }).bind("click.inputmask", function () { var b = a(this), c = this; if (b.is(":focus")) { var d = K(c); if (d.begin == d.end) if (f.radixFocus && "" != f.radixPoint && -1 != a.inArray(f.radixPoint, u()) && (ib || u().join("") == t().join(""))) K(c, a.inArray(f.radixPoint, u())), ib = !1; else { var e = eb ? J(d.begin) : d.begin, g = B(m(e)); g > e ? K(c, z(e) ? e : B(e)) : K(c, g) } } }).bind("dblclick.inputmask", function () { var a = this; setTimeout(function () { K(a, 0, B(m())) }, 0) }).bind(j + ".inputmask dragdrop.inputmask drop.inputmask", V).bind("setvalue.inputmask", function () { var a = this; G(a, !0, !1), _ = u().join(""), (f.clearMaskOnLostFocus || f.clearIncomplete) && a._valueGet() == t().join("") && a._valueSet("") }).bind("cut.inputmask", function (b) { gb = !0; var c = this, d = a(c), e = K(c); R(c, a.inputmask.keyCode.DELETE, e), E(c, u(), k().p, b, _ != u().join("")), c._valueGet() == t().join("") && d.trigger("cleared"), f.showTooltip && d.prop("title", k().mask) }).bind("complete.inputmask", f.oncomplete).bind("incomplete.inputmask", f.onincomplete).bind("cleared.inputmask", f.oncleared), cb.bind("keydown.inputmask", S).bind("keypress.inputmask", T).bind("keyup.inputmask", U), i || cb.bind("compositionstart.inputmask", X).bind("compositionupdate.inputmask", Y).bind("compositionend.inputmask", Z), "paste" === j && cb.bind("input.inputmask", W), Q(b); var g = a.isFunction(f.onBeforeMask) ? f.onBeforeMask.call(b, b._valueGet(), f) || b._valueGet() : b._valueGet(); G(b, !0, !1, g.split("")); var h = u().slice(); _ = h.join(""); var n; try { n = document.activeElement } catch (o) { } N(h) === !1 && f.clearIncomplete && l(), f.clearMaskOnLostFocus && (h.join("") == t().join("") ? h = [] : M(h)), E(b, h), n === b && K(b, B(m())), P(b) } } var _, ab, bb, cb, db, eb = !1, fb = !1, gb = !1, hb = !1, ib = !0; if (void 0 != d) switch (d.action) { case "isComplete": return cb = a(d.el), e = cb.data("_inputmask").maskset, f = cb.data("_inputmask").opts, N(d.buffer); case "unmaskedvalue": return cb = d.$input, e = cb.data("_inputmask").maskset, f = cb.data("_inputmask").opts, eb = d.$input.data("_inputmask").isRTL, I(d.$input); case "mask": _ = u().join(""), $(d.el); break; case "format": cb = a({}), cb.data("_inputmask", { maskset: e, opts: f, isRTL: f.numericInput }), f.numericInput && (eb = !0); var jb = (a.isFunction(f.onBeforeMask) ? f.onBeforeMask.call(cb, d.value, f) || d.value : d.value).split(""); return G(cb, !1, !1, eb ? jb.reverse() : jb), a.isFunction(f.onBeforeWrite) && f.onBeforeWrite.call(this, void 0, u(), 0, f), d.metadata ? { value: eb ? u().slice().reverse().join("") : u().join(""), metadata: cb.inputmask("getmetadata") } : eb ? u().slice().reverse().join("") : u().join(""); case "isValid": cb = a({}), cb.data("_inputmask", { maskset: e, opts: f, isRTL: f.numericInput }), f.numericInput && (eb = !0); var jb = d.value.split(""); G(cb, !1, !0, eb ? jb.reverse() : jb); for (var kb = u(), lb = L(), mb = kb.length - 1; mb > lb && !z(mb) ; mb--); return kb.splice(lb, mb + 1 - lb), N(kb) && d.value == kb.join(""); case "getemptymask": return cb = a(d.el), e = cb.data("_inputmask").maskset, f = cb.data("_inputmask").opts, t(); case "remove": var nb = d.el; cb = a(nb), e = cb.data("_inputmask").maskset, f = cb.data("_inputmask").opts, nb._valueSet(I(cb)), cb.unbind(".inputmask"), cb.removeData("_inputmask"); var ob; Object.getOwnPropertyDescriptor && (ob = Object.getOwnPropertyDescriptor(nb, "value")), ob && ob.get ? nb._valueGet && Object.defineProperty(nb, "value", { get: nb._valueGet, set: nb._valueSet }) : document.__lookupGetter__ && nb.__lookupGetter__("value") && nb._valueGet && (nb.__defineGetter__("value", nb._valueGet), nb.__defineSetter__("value", nb._valueSet)); try { delete nb._valueGet, delete nb._valueSet } catch (pb) { nb._valueGet = void 0, nb._valueSet = void 0 } break; case "getmetadata": if (cb = a(d.el), e = cb.data("_inputmask").maskset, f = cb.data("_inputmask").opts, a.isArray(e.metadata)) { for (var qb, rb = m(), sb = rb; sb >= 0; sb--) if (k().validPositions[sb] && void 0 != k().validPositions[sb].alternation) { qb = k().validPositions[sb].alternation; break } return void 0 != qb ? e.metadata[k().validPositions[rb].locator[qb]] : e.metadata[0] } return e.metadata }
        } if (void 0 === a.fn.inputmask) { var g = navigator.userAgent, h = null !== g.match(new RegExp("iphone", "i")), i = (null !== g.match(new RegExp("android.*safari.*", "i")), null !== g.match(new RegExp("android.*chrome.*", "i")), null !== g.match(new RegExp("android.*firefox.*", "i"))), j = (/Kindle/i.test(g) || /Silk/i.test(g) || /KFTT/i.test(g) || /KFOT/i.test(g) || /KFJWA/i.test(g) || /KFJWI/i.test(g) || /KFSOWI/i.test(g) || /KFTHWA/i.test(g) || /KFTHWI/i.test(g) || /KFAPWA/i.test(g) || /KFAPWI/i.test(g), b("paste") ? "paste" : b("input") ? "input" : "propertychange"); a.inputmask = { defaults: { placeholder: "_", optionalmarker: { start: "[", end: "]" }, quantifiermarker: { start: "{", end: "}" }, groupmarker: { start: "(", end: ")" }, alternatormarker: "|", escapeChar: "\\", mask: null, oncomplete: a.noop, onincomplete: a.noop, oncleared: a.noop, repeat: 0, greedy: !0, autoUnmask: !1, removeMaskOnSubmit: !1, clearMaskOnLostFocus: !0, insertMode: !0, clearIncomplete: !1, aliases: {}, alias: null, onKeyUp: a.noop, onBeforeMask: void 0, onBeforePaste: void 0, onBeforeWrite: void 0, onUnMask: void 0, showMaskOnFocus: !0, showMaskOnHover: !0, onKeyValidation: a.noop, skipOptionalPartCharacter: " ", showTooltip: !1, numericInput: !1, rightAlign: !1, undoOnEscape: !0, radixPoint: "", radixFocus: !1, nojumps: !1, nojumpsThreshold: 0, keepStatic: void 0, definitions: { 9: { validator: "[0-9]", cardinality: 1, definitionSymbol: "*" }, a: { validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]", cardinality: 1, definitionSymbol: "*" }, "*": { validator: "[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]", cardinality: 1 } }, ignorables: [8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123], isComplete: void 0, canClearPosition: a.noop }, keyCode: { ALT: 18, BACKSPACE: 8, CAPS_LOCK: 20, COMMA: 188, COMMAND: 91, COMMAND_LEFT: 91, COMMAND_RIGHT: 93, CONTROL: 17, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, INSERT: 45, LEFT: 37, MENU: 93, NUMPAD_ADD: 107, NUMPAD_DECIMAL: 110, NUMPAD_DIVIDE: 111, NUMPAD_ENTER: 108, NUMPAD_MULTIPLY: 106, NUMPAD_SUBTRACT: 109, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SHIFT: 16, SPACE: 32, TAB: 9, UP: 38, WINDOWS: 91 }, masksCache: {}, escapeRegex: function (a) { var b = ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"]; return a.replace(new RegExp("(\\" + b.join("|\\") + ")", "gim"), "\\$1") }, format: function (b, c, g) { var h = a.extend(!0, {}, a.inputmask.defaults, c); return d(h.alias, c, h), f({ action: "format", value: b, metadata: g }, e(h), h) }, isValid: function (b, c) { var g = a.extend(!0, {}, a.inputmask.defaults, c); return d(g.alias, c, g), f({ action: "isValid", value: b }, e(g), g) } }, a.fn.inputmask = function (b, c) { function g(b, c, e) { var f = a(b); f.data("inputmask-alias") && d(f.data("inputmask-alias"), {}, c); for (var g in c) { var h = f.data("inputmask-" + g.toLowerCase()); void 0 != h && ("mask" == g && 0 == h.indexOf("[") ? (c[g] = h.replace(/[\s[\]]/g, "").split("','"), c[g][0] = c[g][0].replace("'", ""), c[g][c[g].length - 1] = c[g][c[g].length - 1].replace("'", "")) : c[g] = "boolean" == typeof h ? h : h.toString(), e && (e[g] = c[g])) } return c } var h, i = a.extend(!0, {}, a.inputmask.defaults, c); if ("string" == typeof b) switch (b) { case "mask": return d(i.alias, c, i), h = e(i), void 0 == h ? this : this.each(function () { f({ action: "mask", el: this }, a.extend(!0, {}, h), g(this, i)) }); case "unmaskedvalue": var j = a(this); return j.data("_inputmask") ? f({ action: "unmaskedvalue", $input: j }) : j.val(); case "remove": return this.each(function () { var b = a(this); b.data("_inputmask") && f({ action: "remove", el: this }) }); case "getemptymask": return this.data("_inputmask") ? f({ action: "getemptymask", el: this }) : ""; case "hasMaskedValue": return this.data("_inputmask") ? !this.data("_inputmask").opts.autoUnmask : !1; case "isComplete": return this.data("_inputmask") ? f({ action: "isComplete", buffer: this[0]._valueGet().split(""), el: this }) : !0; case "getmetadata": return this.data("_inputmask") ? f({ action: "getmetadata", el: this }) : void 0; default: return d(i.alias, c, i), d(b, c, i) || (i.mask = b), h = e(i), void 0 == h ? this : this.each(function () { f({ action: "mask", el: this }, a.extend(!0, {}, h), g(this, i)) }) } else { if ("object" == typeof b) return i = a.extend(!0, {}, a.inputmask.defaults, b), d(i.alias, b, i), h = e(i), void 0 == h ? this : this.each(function () { f({ action: "mask", el: this }, a.extend(!0, {}, h), g(this, i)) }); if (void 0 == b) return this.each(function () { var b = a(this).attr("data-inputmask"); if (b && "" != b) try { b = b.replace(new RegExp("'", "g"), '"'); var e = a.parseJSON("{" + b + "}"); a.extend(!0, e, c), i = a.extend(!0, {}, a.inputmask.defaults, e), i = g(this, i), d(i.alias, e, i), i.alias = void 0, a(this).inputmask("mask", i) } catch (f) { } if (a(this).attr("data-inputmask-mask") || a(this).attr("data-inputmask-alias")) { i = a.extend(!0, {}, a.inputmask.defaults, {}); var h = {}; i = g(this, i, h), d(i.alias, h, i), i.alias = void 0, a(this).inputmask("mask", i) } }) } } } return a.fn.inputmask
    });

    //date extension
    !function (a) { "function" == typeof define && define.amd ? define(["jquery", "./jquery.inputmask"], a) : a(jQuery) }(function (a) { return a.extend(a.inputmask.defaults.definitions, { h: { validator: "[01][0-9]|2[0-3]", cardinality: 2, prevalidator: [{ validator: "[0-2]", cardinality: 1 }] }, s: { validator: "[0-5][0-9]", cardinality: 2, prevalidator: [{ validator: "[0-5]", cardinality: 1 }] }, d: { validator: "0[1-9]|[12][0-9]|3[01]", cardinality: 2, prevalidator: [{ validator: "[0-3]", cardinality: 1 }] }, m: { validator: "0[1-9]|1[012]", cardinality: 2, prevalidator: [{ validator: "[01]", cardinality: 1 }] }, y: { validator: "(19|20)\\d{2}", cardinality: 4, prevalidator: [{ validator: "[12]", cardinality: 1 }, { validator: "(19|20)", cardinality: 2 }, { validator: "(19|20)\\d", cardinality: 3 }] } }), a.extend(a.inputmask.defaults.aliases, { "dd/mm/yyyy": { mask: "1/2/y", placeholder: "dd/mm/yyyy", regex: { val1pre: new RegExp("[0-3]"), val1: new RegExp("0[1-9]|[12][0-9]|3[01]"), val2pre: function (b) { var c = a.inputmask.escapeRegex.call(this, b); return new RegExp("((0[1-9]|[12][0-9]|3[01])" + c + "[01])") }, val2: function (b) { var c = a.inputmask.escapeRegex.call(this, b); return new RegExp("((0[1-9]|[12][0-9])" + c + "(0[1-9]|1[012]))|(30" + c + "(0[13-9]|1[012]))|(31" + c + "(0[13578]|1[02]))") } }, leapday: "29/02/", separator: "/", yearrange: { minyear: 1900, maxyear: 2099 }, isInYearRange: function (a, b, c) { if (isNaN(a)) return !1; var d = parseInt(a.concat(b.toString().slice(a.length))), e = parseInt(a.concat(c.toString().slice(a.length))); return (isNaN(d) ? !1 : d >= b && c >= d) || (isNaN(e) ? !1 : e >= b && c >= e) }, determinebaseyear: function (a, b, c) { var d = (new Date).getFullYear(); if (a > d) return a; if (d > b) { for (var e = b.toString().slice(0, 2), f = b.toString().slice(2, 4) ; e + c > b;) e--; var g = e + f; return a > g ? a : g } return d }, onKeyUp: function (b) { var c = a(this); if (b.ctrlKey && b.keyCode == a.inputmask.keyCode.RIGHT) { var d = new Date; c.val(d.getDate().toString() + (d.getMonth() + 1).toString() + d.getFullYear().toString()), c.triggerHandler("setvalue.inputmask") } }, getFrontValue: function (a, b, c) { for (var d = 0, e = 0, f = 0; f < a.length && "2" != a.charAt(f) ; f++) { var g = c.definitions[a.charAt(f)]; g ? (d += e, e = g.cardinality) : e++ } return b.join("").substr(d, e) }, definitions: { 1: { validator: function (a, b, c, d, e) { var f = e.regex.val1.test(a); return d || f || a.charAt(1) != e.separator && -1 == "-./".indexOf(a.charAt(1)) || !(f = e.regex.val1.test("0" + a.charAt(0))) ? f : (b.buffer[c - 1] = "0", { refreshFromBuffer: { start: c - 1, end: c }, pos: c, c: a.charAt(0) }) }, cardinality: 2, prevalidator: [{ validator: function (a, b, c, d, e) { isNaN(b.buffer[c + 1]) || (a += b.buffer[c + 1]); var f = 1 == a.length ? e.regex.val1pre.test(a) : e.regex.val1.test(a); return d || f || !(f = e.regex.val1.test("0" + a)) ? f : (b.buffer[c] = "0", c++, { pos: c }) }, cardinality: 1 }] }, 2: { validator: function (a, b, c, d, e) { var f = e.getFrontValue(b.mask, b.buffer, e); -1 != f.indexOf(e.placeholder[0]) && (f = "01" + e.separator); var g = e.regex.val2(e.separator).test(f + a); if (!d && !g && (a.charAt(1) == e.separator || -1 != "-./".indexOf(a.charAt(1))) && (g = e.regex.val2(e.separator).test(f + "0" + a.charAt(0)))) return b.buffer[c - 1] = "0", { refreshFromBuffer: { start: c - 1, end: c }, pos: c, c: a.charAt(0) }; if (e.mask.indexOf("2") == e.mask.length - 1 && g) { var h = b.buffer.join("").substr(4, 4) + a; if (h != e.leapday) return !0; var i = parseInt(b.buffer.join("").substr(0, 4), 10); return i % 4 === 0 ? i % 100 === 0 ? i % 400 === 0 ? !0 : !1 : !0 : !1 } return g }, cardinality: 2, prevalidator: [{ validator: function (a, b, c, d, e) { isNaN(b.buffer[c + 1]) || (a += b.buffer[c + 1]); var f = e.getFrontValue(b.mask, b.buffer, e); -1 != f.indexOf(e.placeholder[0]) && (f = "01" + e.separator); var g = 1 == a.length ? e.regex.val2pre(e.separator).test(f + a) : e.regex.val2(e.separator).test(f + a); return d || g || !(g = e.regex.val2(e.separator).test(f + "0" + a)) ? g : (b.buffer[c] = "0", c++, { pos: c }) }, cardinality: 1 }] }, y: { validator: function (a, b, c, d, e) { if (e.isInYearRange(a, e.yearrange.minyear, e.yearrange.maxyear)) { var f = b.buffer.join("").substr(0, 6); if (f != e.leapday) return !0; var g = parseInt(a, 10); return g % 4 === 0 ? g % 100 === 0 ? g % 400 === 0 ? !0 : !1 : !0 : !1 } return !1 }, cardinality: 4, prevalidator: [{ validator: function (a, b, c, d, e) { var f = e.isInYearRange(a, e.yearrange.minyear, e.yearrange.maxyear); if (!d && !f) { var g = e.determinebaseyear(e.yearrange.minyear, e.yearrange.maxyear, a + "0").toString().slice(0, 1); if (f = e.isInYearRange(g + a, e.yearrange.minyear, e.yearrange.maxyear)) return b.buffer[c++] = g.charAt(0), { pos: c }; if (g = e.determinebaseyear(e.yearrange.minyear, e.yearrange.maxyear, a + "0").toString().slice(0, 2), f = e.isInYearRange(g + a, e.yearrange.minyear, e.yearrange.maxyear)) return b.buffer[c++] = g.charAt(0), b.buffer[c++] = g.charAt(1), { pos: c } } return f }, cardinality: 1 }, { validator: function (a, b, c, d, e) { var f = e.isInYearRange(a, e.yearrange.minyear, e.yearrange.maxyear); if (!d && !f) { var g = e.determinebaseyear(e.yearrange.minyear, e.yearrange.maxyear, a).toString().slice(0, 2); if (f = e.isInYearRange(a[0] + g[1] + a[1], e.yearrange.minyear, e.yearrange.maxyear)) return b.buffer[c++] = g.charAt(1), { pos: c }; if (g = e.determinebaseyear(e.yearrange.minyear, e.yearrange.maxyear, a).toString().slice(0, 2), e.isInYearRange(g + a, e.yearrange.minyear, e.yearrange.maxyear)) { var h = b.buffer.join("").substr(0, 6); if (h != e.leapday) f = !0; else { var i = parseInt(a, 10); f = i % 4 === 0 ? i % 100 === 0 ? i % 400 === 0 ? !0 : !1 : !0 : !1 } } else f = !1; if (f) return b.buffer[c - 1] = g.charAt(0), b.buffer[c++] = g.charAt(1), b.buffer[c++] = a.charAt(0), { refreshFromBuffer: { start: c - 3, end: c }, pos: c } } return f }, cardinality: 2 }, { validator: function (a, b, c, d, e) { return e.isInYearRange(a, e.yearrange.minyear, e.yearrange.maxyear) }, cardinality: 3 }] } }, insertMode: !1, autoUnmask: !1 }, "mm/dd/yyyy": { placeholder: "mm/dd/yyyy", alias: "dd/mm/yyyy", regex: { val2pre: function (b) { var c = a.inputmask.escapeRegex.call(this, b); return new RegExp("((0[13-9]|1[012])" + c + "[0-3])|(02" + c + "[0-2])") }, val2: function (b) { var c = a.inputmask.escapeRegex.call(this, b); return new RegExp("((0[1-9]|1[012])" + c + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + c + "30)|((0[13578]|1[02])" + c + "31)") }, val1pre: new RegExp("[01]"), val1: new RegExp("0[1-9]|1[012]") }, leapday: "02/29/", onKeyUp: function (b) { var c = a(this); if (b.ctrlKey && b.keyCode == a.inputmask.keyCode.RIGHT) { var d = new Date; c.val((d.getMonth() + 1).toString() + d.getDate().toString() + d.getFullYear().toString()), c.triggerHandler("setvalue.inputmask") } } }, "yyyy/mm/dd": { mask: "y/1/2", placeholder: "yyyy/mm/dd", alias: "mm/dd/yyyy", leapday: "/02/29", onKeyUp: function (b) { var c = a(this); if (b.ctrlKey && b.keyCode == a.inputmask.keyCode.RIGHT) { var d = new Date; c.val(d.getFullYear().toString() + (d.getMonth() + 1).toString() + d.getDate().toString()), c.triggerHandler("setvalue.inputmask") } } }, "dd.mm.yyyy": { mask: "1.2.y", placeholder: "dd.mm.yyyy", leapday: "29.02.", separator: ".", alias: "dd/mm/yyyy" }, "dd-mm-yyyy": { mask: "1-2-y", placeholder: "dd-mm-yyyy", leapday: "29-02-", separator: "-", alias: "dd/mm/yyyy" }, "mm.dd.yyyy": { mask: "1.2.y", placeholder: "mm.dd.yyyy", leapday: "02.29.", separator: ".", alias: "mm/dd/yyyy" }, "mm-dd-yyyy": { mask: "1-2-y", placeholder: "mm-dd-yyyy", leapday: "02-29-", separator: "-", alias: "mm/dd/yyyy" }, "yyyy.mm.dd": { mask: "y.1.2", placeholder: "yyyy.mm.dd", leapday: ".02.29", separator: ".", alias: "yyyy/mm/dd" }, "yyyy-mm-dd": { mask: "y-1-2", placeholder: "yyyy-mm-dd", leapday: "-02-29", separator: "-", alias: "yyyy/mm/dd" }, datetime: { mask: "1/2/y h:s", placeholder: "dd/mm/yyyy hh:mm", alias: "dd/mm/yyyy", regex: { hrspre: new RegExp("[012]"), hrs24: new RegExp("2[0-4]|1[3-9]"), hrs: new RegExp("[01][0-9]|2[0-4]"), ampm: new RegExp("^[a|p|A|P][m|M]"), mspre: new RegExp("[0-5]"), ms: new RegExp("[0-5][0-9]") }, timeseparator: ":", hourFormat: "24", definitions: { h: { validator: function (a, b, c, d, e) { if ("24" == e.hourFormat && 24 == parseInt(a, 10)) return b.buffer[c - 1] = "0", b.buffer[c] = "0", { refreshFromBuffer: { start: c - 1, end: c }, c: "0" }; var f = e.regex.hrs.test(a); if (!d && !f && (a.charAt(1) == e.timeseparator || -1 != "-.:".indexOf(a.charAt(1))) && (f = e.regex.hrs.test("0" + a.charAt(0)))) return b.buffer[c - 1] = "0", b.buffer[c] = a.charAt(0), c++, { refreshFromBuffer: { start: c - 2, end: c }, pos: c, c: e.timeseparator }; if (f && "24" !== e.hourFormat && e.regex.hrs24.test(a)) { var g = parseInt(a, 10); return 24 == g ? (b.buffer[c + 5] = "a", b.buffer[c + 6] = "m") : (b.buffer[c + 5] = "p", b.buffer[c + 6] = "m"), g -= 12, 10 > g ? (b.buffer[c] = g.toString(), b.buffer[c - 1] = "0") : (b.buffer[c] = g.toString().charAt(1), b.buffer[c - 1] = g.toString().charAt(0)), { refreshFromBuffer: { start: c - 1, end: c + 6 }, c: b.buffer[c] } } return f }, cardinality: 2, prevalidator: [{ validator: function (a, b, c, d, e) { var f = e.regex.hrspre.test(a); return d || f || !(f = e.regex.hrs.test("0" + a)) ? f : (b.buffer[c] = "0", c++, { pos: c }) }, cardinality: 1 }] }, s: { validator: "[0-5][0-9]", cardinality: 2, prevalidator: [{ validator: function (a, b, c, d, e) { var f = e.regex.mspre.test(a); return d || f || !(f = e.regex.ms.test("0" + a)) ? f : (b.buffer[c] = "0", c++, { pos: c }) }, cardinality: 1 }] }, t: { validator: function (a, b, c, d, e) { return e.regex.ampm.test(a + "m") }, casing: "lower", cardinality: 1 } }, insertMode: !1, autoUnmask: !1 }, datetime12: { mask: "1/2/y h:s t\\m", placeholder: "dd/mm/yyyy hh:mm xm", alias: "datetime", hourFormat: "12" }, "hh:mm t": { mask: "h:s t\\m", placeholder: "hh:mm xm", alias: "datetime", hourFormat: "12" }, "h:s t": { mask: "h:s t\\m", placeholder: "hh:mm xm", alias: "datetime", hourFormat: "12" }, "hh:mm:ss": { mask: "h:s:s", placeholder: "hh:mm:ss", alias: "datetime", autoUnmask: !1 }, "hh:mm": { mask: "h:s", placeholder: "hh:mm", alias: "datetime", autoUnmask: !1 }, date: { alias: "dd/mm/yyyy" }, "mm/yyyy": { mask: "1/y", placeholder: "mm/yyyy", leapday: "donotuse", separator: "/", alias: "mm/dd/yyyy" } }), a.fn.inputmask });

});










































/********************************* PRIMER PRIMERA PAGINA - FIRST PAGE ONE *******************************/






var Page = null, _root_ = "responsive_gallery_one", globalErrors = null, scripts = 'Templates/' + _root_ + '/js/fullapplication.inc.0.1.js', icons = 'Templates/' + _root_ + '/css/font-awesome.min.css', style = 'Templates/' + _root_ + '/css/fullapplication.0.1.css', Link = null, enablCheck = [], checkBoxesCreated = false, radiosCreated = false, helpTimer = null, Notifications = null, error = [], errors = [];

/*
function r(f){Page.init==null?setTimeout('r('+f+')',9):f()}
function initialize(){
  r(function(){ Page.init(); });
}*/
function ltIE9() {
    var v, rv = -1;
    if (navigator.appName == 'Microsoft Internet Explorer') {
        if (v = navigator.userAgent.match(/MSIE ([0-9]{1,})/i)) {
            rv = parseInt(v[1], 10);
        }
        return true;
    }
    // return rv < 9 && rv !== -1;
}
Page = {};
$(document).on('ready', function () {


    Notifications = {};

    Notifications.set = function (txt) {
        $('.css-notifications .css-message .noti_txt').remove();
        $('.css-notifications .css-message').append('<div style="padding-bottom: 10px;border-top: 2px solid #f2f2f2;padding-top: 20px;font-weight: bolder; margin-top: 20px" class="noti_txt">' + txt + '</div>');
    }


    //fix for IE, IE lose the anchor link when is inside a link, example: <a> <button> Hello </button> </a>
    if (ltIE9()) {
        $('a').each(function () {
            if ($(this).children('button').length > 0) {
                var _link = $(this).attr('href');
                $(this).children('button').attr('onClick', 'window.location=\'' + _link + '\'');
            }
        });
    }



    Page.checkValidInput = function () {
        $('input[type="text"].valid, input[type="password"].valid').each(function (_index, _obj) {
            if ($(this).next('i').length > 0) { $(this).next('i').remove(); }
            $(this).after('<i class="fa fa-check input-flow valid"></i>');

        });
    }

    Page.checkInvalidInput = function () {
        $('input[type="text"].invalid, input[type="password"].invalid').each(function (_index, _obj) {
            if ($(this).next('i').length > 0) { $(this).next('i').remove(); }
            $(this).after('<i class="fa fa-times input-flow invalid"></i>');
        });
    }

    Page.createLabeling = function () {
        $('input[type="text"], input[type="password"]').not('.noPlaceholder').each(function (_index, _obj) {
            _placeholder = $(this).attr('placeholder');
            _id = $(this).attr('id');
            _id = _id != undefined && _id != null ? _id : ("input_" + Math.random()).replace(/\./g, '');
            _maxWidth = $(this).width();
            _required = $(this).attr('data-required') != undefined ? 'data-required="' + $(this).attr('data-required') + '"' : '';
            _iden = $(this).attr('data-identificator') != undefined ? $(this).attr('data-identificator') : "";
            if (_placeholder != undefined && _placeholder != null) {
                $(this).before('<label class="form-label ' + _iden + '" style="display:block;max-width: 90% " ' + _required + ' for="' + _id + '"><i class="fa fa-info-circle"></i> ' + _placeholder + '</label>');
                $(this).attr('id', _id).attr('placeholder', '').addClass(_iden);
            }
        });

        $('input[type="text"].noPlaceholder, input[type="password"].noPlaceholder').each(function (_index, _obj) {
            _placeholder = $(this).attr('placeholder');
            _id = $(this).attr('id');
            _id = _id != undefined && _id != null ? _id : ("input_" + Math.random()).replace(/\./g, '');
            if (_placeholder != undefined && _placeholder != null) {
                $(this).attr('id', _id).val(_placeholder);
            }
        });

        Page.checkLabeling();

    }

    Page.checkLabeling = function () {
        $('input[type="text"], input[type="password"]').not('.noPlaceholder').each(function (_index, _obj) {
            var _valIn = $(this).val();
            if (_valIn == undefined || _valIn.length == 0 || _valIn == null) {
                //$(this).prev('label').fadeIn();
                $(this).prev('label').show();
            }

            $(this).on('blur', function () {
                var _val = $(this).val();
                if (_val == undefined || _val.length == 0) {
                    //$(this).prev('label').fadeIn();
                }
            }).on('focus', function () {
                //$(this).prev('label').hide();
            });
        });


        $('input[type="text"].noPlaceholder, input[type="password"].noPlaceholder').each(function (_index, _obj) {

            var _valIn = $(this).val();
            var _ph = $(this).attr('placeholder');
            if (_valIn == undefined || _valIn.length == 0 || _valIn == null) {
                $(this).val(_ph);
            }

            $(this).on('blur', function () {
                var _val = $(this).val();
                if ($(this).hasClass('pw') && (_val == undefined || _val.length == 0 || _val == _ph)) {
                    $(this).get(0).type = 'text';
                }
                if (_val == undefined || _val.length == 0) {
                    $(this).val(_ph);
                }

            }).on('focus', function () {
                var _val = $(this).val();
                var _ph = $(this).attr('placeholder');
                if ((_val != undefined || _val.length > 0) && _val == _ph) {
                    $(this).val('');
                }
                if ($(this).hasClass('pw')) {
                    $(this).get(0).type = 'password';
                }
            });

        });



    }

    Page.requiredHelp = function () {
        $('input[type="text"][rel="require"], input[type="password"][rel="require"]').each(function (_index, _obj) {
            _helpText = $(this).attr('require-help') != undefined && $(this).attr('require-help').length > 0 ? $(this).attr('require-help') : false;
            _maxWidth = $(this).width() + 30;
            _autoShow = $(this).attr('require-help-autoshow') != undefined && $(this).attr('require-help-autoshow').length > 0 ? $(this).attr('require-help-autoshow') : false;
            _display = _autoShow ? 'display: block;' : 'display:none;';

            if (_helpText != false) {
                if ($(this).next('i').length > 0) {
                    $(this).next('i').after('<div class="input-help" style="' + _display + '"><div class="help-arrow"></div><div class="help-content"><i class="fa fa-info-circle"></i> ' + _helpText + '</div></div>');
                } else {
                    $(this).after('<div class="input-help" style="' + _display + '"><div class="help-arrow"></div><div class="help-content"><i class="fa fa-info-circle"></i> ' + _helpText + '</div></div>');
                }
            }


            $(this).on('focus', function () {
                if ($(this).next('.input-help').length > 0) {
                    $(this).next('.input-help').fadeIn();
                } else {
                    if ($(this).next('i').next('.input-help').length > 0) {
                        $(this).next('i').next('.input-help').fadeIn();
                    }
                }
            }).on('blur', function () {
                clearTimeout(helpTimer);
                if ($(this).next('.input-help').length > 0) {
                    $(this).next('.input-help').hide();
                } else {
                    if ($(this).next('i').next('.input-help').length > 0) {
                        $(this).next('i').next('.input-help').hide();
                    }
                }
            });


        });
    }





    Page.getDate = function () {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!

        var yyyy = today.getFullYear();
        if (dd < 10) { dd = '0' + dd } if (mm < 10) { mm = '0' + mm } var today = mm + '/' + dd + '/' + yyyy;
        return today;
    }






    Page.createCheckBoxes = function () {
        /*
        if (checkBoxesCreated == false) {
            $('input[type="checkbox"]').each(function (_index, _obj) {
                _id = $(this).attr('id');
                _id = _id != undefined && _id != null ? _id : ("input_" + Math.random()).replace(/\./g, '');
                _title = $(this).parent('span').attr('title') != undefined && $(this).parent('span').attr('title').length > 0 ? $(this).parent('span').attr('title') : ($(this).next('label').length > 0 ? $(this).next('label').text() : "Checkbox #" + _index);
                _isChecked = $(this).attr('checked') == "checked" ? "checked" : "";
                _toggleAction = $(this).attr('toggle-required') != undefined ? ' toggle-required="' + $(this).attr('toggle-required') + '"' : "";
                _required = $(this).parent('span').attr('data-required') != undefined ? ' data-required="' + $(this).parent('span').attr('data-required') + '"' : "";

                if ($(this).next('label').length > 0) { $(this).next('label').remove(); }
                $(this).attr('id', _id).addClass('form-checkbox-check').after('<label class="form-checkbox ' + _isChecked + '" ' + _required + ' for="' + _id + '" ' + _toggleAction + '><i class="fa fa-circle-o"></i><i class="fa fa-check-circle-o"></i> ' + _title + '</label>');
            });
            checkBoxesCreated = true;
        }




        if (radiosCreated == false) {
            $('input[type="radio"]').each(function (_index, _obj) {
                _id = $(this).attr('id');
                _id = _id != undefined && _id != null ? _id : ("input_" + Math.random()).replace(/\./g, '');
                _name = $(this).attr('name');
                _name = _name != undefined && _name != null ? _name : ("input_" + Math.random()).replace(/\./g, '');
                _title = $(this).parent('span').attr('title') != undefined && $(this).parent('span').attr('title').length > 0 ? $(this).parent('span').attr('title') : ($(this).next('label').length > 0 ? $(this).next('label').text() : "Radio #" + _index);
                _isChecked = $(this).attr('checked') == "checked" ? "checked" : "";

                if ($(this).next('label').length > 0) { $(this).next('label').remove(); }
                $(this).attr('id', _id).addClass('form-radio-radio ' + _isChecked).after('<label class="form-radio ' + _isChecked + '" for="' + _id + '" data-name="' + _name + '"><i class="fa fa-circle-o"></i><i class="fa fa-dot-circle-o"></i> ' + _title + '</label>');
            });
            radiosCreated = true;
        }

        */

        $('.fullApplicationForm input[type="radio"], .fullApplicationForm input[type="checkbox"]').iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue',
            increaseArea: '20%' // optional
        });


        Page.enableCheckBoxes();

    }

    Page.handleRanges = function () {
        $('[rel="range"]').each(function (_index, _obj) {
            $(this).next('.range-slider').noUiSlider({
                start: 100,
                step: 10,
                range: {
                    'min': 100,
                    'max': 1000
                },
                serialization: {
                    lower: [
                        new $.noUiSlider.Link({
                            target: $(_obj)
                        })
                    ],
                    format: {
                        decimals: 0,
                        mark: '',
                        prefix: '$',
                        thousand: ','
                    }
                }
            });


        });
    }


    Page.createRanges = function () {

        $('[rel="range"]').each(function (_index, _obj) {
            var _id = $(this).prev('input').attr('id');
            _id = _id != undefined && _id != null ? _id : ("input_" + Math.random()).replace(/\./g, '');
            _id = '#' + _id;

            $(this).css({ width: '250px' });
            _width = 210;
            $(this).attr('id', _id).after('<div class="range-slider" style="width: ' + _width + 'px; margin-top:5px; margin-left: 20px"></div>');
        });

        Page.handleRanges();

    }



    Page.createSelectBoxes = function () {

        $(".fullApplicationForm select").select2({
            minimumResultsForSearch: Infinity
        });

        /*

        $('.fullApplicationForm select').each(function (_index, _obj) {
            var _options = $(this).children('option');
            var _firstOption = _options.first();
            var _isSelected = '';
            var _w = $(this).width() + 20;
            var _iden = $(this).attr('data-identificator') != undefined ? $(this).attr('data-identificator') : "";
            var _required = $(this).attr('data-required') != undefined ? " data-required=\"" + $(this).attr('data-required') + "\"" : "";
            var _htmlSelect = '<div class="form-selectbox ' + _iden + '" ' + _required + ' style="width: ' + _w + 'px"><i class="fa fa-unsorted"></i>';
            var _htmlItems = "";
            var _selectedTitle = "Please Select";
            for (i = 0; i < _options.length; i++) {
                if ($(_options[i]).attr('selected') == 'selected') {
                    _isSelected = ' class="active"';
                    _selectedTitle = $(_options[i]).text();
                } else { _isSelected = ''; }
                _htmlItems += '<li data-value="' + $(_options[i]).attr('value') + '" ' + _isSelected + '>' + $(_options[i]).text() + '</li>';
            }
            _htmlSelect += '<a href="javascript:;"><span class="title">' + _selectedTitle + '</span></a><ul class="selection-options" style="width: ' + (_w - 5) + 'px">' + _htmlItems + '</ul></div>';
            $(this).addClass('form-combobox').after(_htmlSelect);
        });

        Page.handleSelectBoxes();

        */

    }



    Page.handleSelectBoxes = function () {
        $('.form-selectbox').on('click', '>a', function () {
            $('.theatre').toggleClass('show-phone show-tablet');

            if ($('.form-selectbox.drop').length > 0) {
                $('.form-selectbox.drop').not($(this).closest('.form-selectbox')).removeClass('drop');
            }

            $(this).closest('.form-selectbox').toggleClass('drop');
        }).on('click', 'ul', function () {
            $('.theatre').toggleClass('show-phone show-tablet');
            $(this).closest('.form-selectbox').toggleClass('drop');
        }).on('click', 'ul li', function () {
            var _title = $(this).text();
            var _val = $(this).attr('data-value');
            $(this).addClass('active').siblings().removeClass('active');
            $(this).closest('.form-selectbox').find('span').first().text(_title);

            
            $(this).closest('.form-selectbox').prev('select').val(_val).children('option[value="' + _val + '"]').attr('selected', 'selected').siblings().removeAttr('selected');
            $(this).closest('.form-selectbox').prev('select').trigger("change");
        });
    }


    var lastSelectBox = null;
    Page.removeClasses = function () {
        $('body').on('click', function (e) {
            var container = $(".form-selectbox");
            if (!container.is(e.target) // if the target of the click isn't the container...
                && container.has(e.target).length === 0) // ... nor a descendant of the container
            {
                container.removeClass('drop');
                $('.theatre').removeClass('show-phone show-tablet');
                lastSelectBox = container.index();
            } else {
                if (container.index() != lastSelectBox) {
                    $(e.target).siblings('.form-selectbox').removeClass('drop');
                }
            }


        });
    }



    Page.enableCheckBoxes = function () {

        $(".fullApplicationForm input[type='checkbox'], .fullApplicationForm input[type='radio']")
        .on("ifChecked", function () {
            _toggleActionAttr = $(this).closest('span.require-validation').attr('toggle-required') != undefined ? $(this).closest('span.require-validation').attr('toggle-required') : false;
            $_toggleAction = _toggleActionAttr != false ? $(_toggleActionAttr) : _toggleActionAttr;
            _isToggle = _toggleActionAttr != false ? true : false;

            if (_isToggle) {
                $_toggleAction.each(function (_index, _obj) {

                    if ($_toggleAction.eq(_index).is('div')) {
                        console.log('i am selectbox');
                        $_toggleAction.eq(_index).removeClass('invalid valid').attr('data-required', "false");
                    } else {
                        $_toggleAction.eq(_index).removeClass('invalid valid').removeAttr('data-required').prev('label').removeAttr('data-required');
                    }
                });
                Page.validateFields();
            }

            console.log("checked");
            
        })
        .on("ifUnchecked", function () {
            _toggleActionAttr = $(this).closest('span.require-validation').attr('toggle-required') != undefined ? $(this).closest('span.require-validation').attr('toggle-required') : false;
            $_toggleAction = _toggleActionAttr != false ? $(_toggleActionAttr) : _toggleActionAttr;
            _isToggle = _toggleActionAttr != false ? true : false;

            if (_isToggle) {

                $_toggleAction.each(function (_index, _obj) {
                    if ($_toggleAction.eq(_index).is('div')) {
                        $_toggleAction.eq(_index).attr('data-required', "true");
                    } else {
                        $_toggleAction.eq(_index).attr('data-required', "true").prev('label').attr('data-required', "true");;
                    }
                });
                Page.validateFields();
            }

        })
        .on("ifChanged", function () {
            if ($(this).is("[id*='CreditCheckAuthorization']") && !$(this).is(":checked")) {
                Page.validateFields();
            }
        });




        //checkbox what if is toggle action and is checked?
        $(".fullApplicationForm input[type='checkbox']").each(function () {
            console.log("deteted");
            _toggleActionAttr = $(this).closest('span.require-validation').attr('toggle-required') != undefined ? $(this).closest('span.require-validation').attr('toggle-required') : false;
            $_toggleAction = _toggleActionAttr != false ? $(_toggleActionAttr) : _toggleActionAttr;
            _isToggle = _toggleActionAttr != false ? true : false;


            if ($(this).is(':checked')) {
                //$(this).next('.form-checkbox').addClass('checked');
                if (_isToggle) {
                    $_toggleAction.each(function (_index, _obj) {

                        if ($_toggleAction.eq(_index).is('div')) {
                            //console.log('i am selectbox');
                            $_toggleAction.eq(_index).removeClass('invalid valid').attr('data-required', "false");
                        } else {
                            $_toggleAction.eq(_index).removeClass('invalid valid').removeAttr('data-required').prev('label').removeAttr('data-required');
                        }
                    });
                }
            } else {
                //$(this).next('.form-checkbox').removeClass('checked');
                if (_isToggle) {

                    $_toggleAction.each(function (_index, _obj) {
                        if ($_toggleAction.eq(_index).is('div')) {
                            $_toggleAction.eq(_index).attr('data-required', "true");
                        } else {
                            $_toggleAction.eq(_index).attr('data-required', "true").prev('label').attr('data-required', "true");;
                        }
                    });
                }
            }
        });


        /*
        //checkboxes on click
        $('input.form-checkbox-check').on('change', function () {
            _toggleActionAttr = $(this).parent('span.require-validation').attr('toggle-required') != undefined ? $(this).parent('span.require-validation').attr('toggle-required') : false;
            $_toggleAction = _toggleActionAttr != false ? $(_toggleActionAttr) : _toggleActionAttr;
            _isToggle = _toggleActionAttr != false ? true : false;


            if ($(this).is(':checked')) {
                $(this).next('.form-checkbox').addClass('checked');
                if (_isToggle) {
                    $_toggleAction.each(function (_index, _obj) {

                        if ($_toggleAction.eq(_index).is('div')) {
                            console.log('i am selectbox');
                            $_toggleAction.eq(_index).removeClass('invalid valid').attr('data-required', "false");
                        } else {
                            $_toggleAction.eq(_index).removeClass('invalid valid').removeAttr('data-required').prev('label').removeAttr('data-required');
                        }
                    });
                    Page.validateFields();
                }
            } else {
                $(this).next('.form-checkbox').removeClass('checked');
                if (_isToggle) {

                    $_toggleAction.each(function (_index, _obj) {
                        if ($_toggleAction.eq(_index).is('div')) {
                            $_toggleAction.eq(_index).attr('data-required', "true");
                        } else {
                            $_toggleAction.eq(_index).attr('data-required', "true").prev('label').attr('data-required', "true");;
                        }
                    });
                    Page.validateFields();
                }
            }
        });*/


        

        /*

        //radio buttons on click
        $('.form-radio').on('click', function () {
            var _name = $(this).attr('data-name');
            $('.form-radio[data-name="' + _name + '"]').removeClass('checked');
            $(this).addClass('checked');
        });

        */
    }






    Page.createAdditionIcons = function () {
        // <i class="fa fa-times input-flow invalid"></i>
        $('input[rel="date"]').after('<i class="fa fa-calendar input-flow input-calendar"></i>').inputmask("date", {yearrange: { minyear: 1901, maxyear: 2099 }});;

        // $('.pw').each(function(_index, _obj){
        // $(this).get(0).type = 'password';
        // });

        $('.notifications').on('click tap touch', function () {
            $(this).removeClass("css-modal-open");
            $('input[type="text"].invalid, input[type="password"].invalid').first().focus();
        });

    }





    Page.init = null;


    Page.enableTabs = function () {
        $('.simpleTabsNavigation[rel="tabs"] li:first').addClass('current');
        $('.simpleTabsContent:first').addClass('currentTab');

        $('.simpleTabsNavigation[rel="tabs"] li').on('click', function (e) {
            e.preventDefault();
            $(this).addClass('current').siblings().removeClass('current');
            var idx = $(this).index();
            $('.simpleTabsContent').eq(idx).removeClass('nocurrentTab').siblings().addClass('nocurrentTab')
        });
    }





    Page.sumarValores = function () {
        $('input[type="text"][id*="LiaBalance"]').on('keyup', function () {
            var _balance = 0;
            for (i = 0; i < $('input[type="text"][id*="LiaBalance"]').length; i++) {
                var _val = $('input[type="text"][id*="LiaBalance"]').eq(i).val().replace(/\$/g, '').replace(/\,/g, '');
                if (isNaN(_val) || (_val == undefined || _val.length == 0)) {
                    _balance = parseInt(_balance) + 0;
                    // $('input[type="text"][id*="LiaBalance"]').eq(i).val(0);
                } else {
                    _balance = parseInt(_balance) + parseInt(_val);
                }
            }
            $('input[type="text"][id*="total1"]').val(_balance);
        });



        $('input[type="text"][id*="LiaPayment"]').on('keyup', function () {
            var _balance = 0;
            for (i = 0; i < $('input[type="text"][id*="LiaPayment"]').length; i++) {
                var _val = $('input[type="text"][id*="LiaPayment"]').eq(i).val().replace(/\$/g, '').replace(/\,/g, '');
                if (isNaN(_val) || (_val == undefined || _val.length == 0)) {
                    _balance = parseInt(_balance) + 0;
                    // $('input[type="text"][id*="LiaPayment"]').eq(i).val(0);
                } else {
                    _balance = parseInt(_balance) + parseInt(_val);
                }
            }
            $('input[type="text"][id*="total2"]').val(_balance);
        });





        $('input[type="text"][id*="LiaMosLeft"]').on('keyup', function () {
            var _balance = 0;
            for (i = 0; i < $('input[type="text"][id*="LiaMosLeft"]').length; i++) {
                var _val = $('input[type="text"][id*="LiaMosLeft"]').eq(i).val();
                if (isNaN(_val) || (_val == undefined || _val.length == 0)) {
                    _balance = parseInt(_balance) + 0;
                    // $('input[type="text"][id*="LiaMosLeft"]').eq(i).val(0);
                } else {
                    _balance = parseInt(parseInt(_balance) + parseInt(_val), 10);
                }
            }
            $('input[type="text"][id*="total3"]').val(_balance);
        });





        $('input[type="text"].BorrowerBase').on('keyup', function () {
            var _balance = 0;
            for (i = 0; i < $('input[type="text"].BorrowerBase').length; i++) {
                var _val = $('input[type="text"].BorrowerBase').eq(i).val();
                if (isNaN(_val) || (_val == undefined || _val.length == 0)) {
                    _balance = parseInt(_balance) + 0;
                    // $('input[type="text"][id*="LiaMosLeft"]').eq(i).val(0);
                } else {
                    _balance = parseInt(parseInt(_balance) + parseInt(_val), 10);
                }
            }
            $('input[type="text"].BorrowerTotal').val(_balance);
        });




        $('input[type="text"].CoBorrowerBase').on('keyup', function () {
            var _balance = 0;
            for (i = 0; i < $('input[type="text"].CoBorrowerBase').length; i++) {
                var _val = $('input[type="text"].CoBorrowerBase').eq(i).val();
                if (isNaN(_val) || (_val == undefined || _val.length == 0)) {
                    _balance = parseInt(_balance) + 0;
                    // $('input[type="text"][id*="LiaMosLeft"]').eq(i).val(0);
                } else {
                    _balance = parseInt(parseInt(_balance) + parseInt(_val), 10);
                }
            }
            $('input[type="text"].CoBorrowerTotal').val(_balance);
        });




        $('input[type="text"].CalcRent').on('keyup', function () {
            var _balance = 0;
            for (i = 0; i < $('input[type="text"].CalcRent').length; i++) {
                var _val = $('input[type="text"].CalcRent').eq(i).val().replace(/\$/g, '').replace(/\,/g, '');
                if (isNaN(_val) || (_val == undefined || _val.length == 0)) {
                    _balance = parseInt(_balance) + 0;
                    // $('input[type="text"][id*="LiaMosLeft"]').eq(i).val(0);
                } else {
                    _balance = parseInt(parseInt(_balance) + parseInt(_val), 10);
                }
            }
            $('input[type="text"].CalcRentTotal').val(_balance);
        });








    }








    Page.validEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }






    Page.validateFields = function () {

        $('input[type="text"][data-required="true"],input[type="password"][data-required="true"]').not('.noPlaceholder').each(function (_index, _obj) {
            var _val = $(this).val();
            var _placeholder = $(this).attr('placeholder');
            $(this).removeClass('valid invalid');
            if (_val == undefined || _val.length < 1) {
                globalErrors++;
                $(this).addClass('invalid').removeClass('valid');
            } else {
                if ($(this).hasClass('email-valid')) {
                    if (!Page.validEmail(_val)) {
                        Notifications.set("Invalid email address");
                        globalErrors++;
                        $(this).addClass('invalid').removeClass('valid');
                    } else {
                        $(this).addClass('valid').removeClass('invalid');
                    }


                } else {
                    $(this).addClass('valid').removeClass('invalid');
                }
            }

        });





        $('input[type="text"][data-required="true"].noPlaceholder,input[type="password"][data-required="true"].noPlaceholder').each(function (_index, _obj) {
            var _val = $(this).val();
            var _placeholder = $(this).attr('placeholder');
            if (_val == undefined || _val.length < 1 || _val == _placeholder) {
                Notifications.set("Invalid values");
                globalErrors++;
                $(this).addClass('invalid').removeClass('valid');
            } else {
                $(this).addClass('valid').removeClass('invalid');
                if ($(this).hasClass('email-valid')) {
                    if (!Page.validEmail(_val)) {
                        Notifications.set("Invalid email address");
                        globalErrors++;
                        $(this).addClass('invalid').removeClass('valid');
                    } else {
                        $(this).addClass('valid').removeClass('invalid');
                    }
                } else {
                    if ($(this).hasClass('pw-confirm')) {
                        var _valPw = $(this).val();
                        var _valPwCfrm = $('.pw-to-confirm').val();
                        if (_valPw == _valPwCfrm) {
                            Notifications.set("");
                            $(this).addClass('valid').removeClass('invalid');
                        } else {
                            Notifications.set("Confirm password");
                            globalErrors++;
                            $(this).addClass('invalid').removeClass('valid');
                        }
                        errors.push(_valPw + "," + _valPw);




                    }else if ($(this).hasClass('password_length_control')) {
                            var str = $(this).val(),
                              input = $(this),
                              score = 0,
                              _errors = 0;
                            

                            if (/[!@#\$%\.\^\-\+\*=\w+]{2,}/g.test(str) && str.indexOf(' ') < 0) {
                                score = 0.5;
                            }

                            if (/[!@#\$%\.\^\-\+\*=\w+]{3,}/g.test(str) && str.indexOf(' ') < 0) {
                                score = 1;
                            }

                            if (/[!@#\$%\.\^\-\+\*=\w+]{4,}/g.test(str) && str.indexOf(' ') < 0) {
                                score = 1.33;
                            }

                            if (/[!@#\$%\.\^\-\+\*=\w+]{5,}/g.test(str) && str.indexOf(' ') < 0) {
                                score = 1.66;
                            }

                            if (/[!@#\$%\.\^\-\+\*=\w+]{6,}/g.test(str) && str.indexOf(' ') < 0) {
                                score = 2;
                            }

                            if (/[!@#\$%\.\^\-\+\*=\w+]{7,}/g.test(str) && str.indexOf(' ') < 0) {
                                score = 3;
                            }

                            if (/[!@#\$%\.\^\-\+\*=\w+]{8,}/g.test(str) && str.indexOf(' ') < 0) {
                                score = 4;
                            }

                            if (str.indexOf(' ') > -1 || str.length < 8) {
                                _errors = 1;
                            } else {
                                _errors = 0;
                            }

                            if ($(this).closest('.css-form-group').next("span.password-strength").length > 0) {
                                var bar = $(this).closest('.css-form-group').next(".password-strength")
                                    .find('.css-password-strength-bar').find(".css-password-level");

                                bar.attr('data-width', score * 25).css({ width: (score * 25 + '%') });
                                //.text(score * 25 + "%");
                                bar.parent().attr('data-width', score * 25);
                            }

                            if (_errors > 0) {
                                //$(this).addClass('invalid').removeClass("valid");
                                //globalErrors++;
                            } else {
                                // $(this).parent().removeClass('has-error');
                                //$(this).data('hasError', false);
                                //$(this).addClass("valid").removeClass("invalid");
                            }




                        } else {
                            $(this).addClass('valid').removeClass('invalid');
                        }
                }
            }

        });



        /*$('.form-selectbox[data-required="true"]').each(function (_index, _obj) {
            var _val = $(this).find('li.active').attr('data-value');
            $(this).removeClass('valid invalid');
            if (_val == undefined || _val.length == 0 || _val == " ") {
                globalErrors++;
                $(this).addClass('invalid').removeClass('valid');
            } else {
                $(this).addClass('valid').removeClass('invalid');
            }

        });*/

        $('select[data-required="true"]').each(function (_index, _obj) {
            var _val = $(this).val();
            $(this).removeClass('valid invalid');
            if (_val == undefined || _val.length == 0 || _val == " ") {
                globalErrors++;
                $(this).next(".select2-container").addClass('invalid').removeClass('valid');
            } else {
                $(this).next(".select2-container").addClass('valid').removeClass('invalid');
            }

        });


        $('.email-valid').not('[data-required="true"]').each(function () {
            var _val = $(this).val();
            if (_val != undefined && _val.length > 0) {
                if (!Page.validEmail(_val)) {
                    Notifications.set("Invalid email address");
                    globalErrors++;
                    $(this).addClass('invalid').removeClass('valid');
                } else {
                    $(this).addClass('valid').removeClass('invalid');
                }
            }
        });



        $('input[id*="CreditCheckAuthorization"]').each(function (_index, _obj) {
            var _el = $(this);

            if (_el.is(':checked')) {
                $(this).addClass('valid').removeClass('invalid');
            } else {
                Notifications.set("Please check that \"" + $(this).closest("span").find("label").text().toUpperCase() + "\" is a required field.");
                globalErrors++;
                $(this).addClass('invalid').removeClass('valid');
            }


        });





        Page.checkValidInput();
        Page.checkInvalidInput();

    }


    function cancelSubmit()
    {
        $('.loadingState').show();
            globalErrors = 0;
            Notifications.set("");
            Page.validateFields();
            if (globalErrors > 0) {
                //event.preventDefault();
                //event.stopPropagation();
                $('.css-notifications').addClass("css-modal-open");
                setTimeout(function () {
                    $('.css-notifications').removeClass("css-modal-open");
                }, 3000);
                $('.loadingState').hide();
                return false;
            }

            return true;
    }




    Page.formSubmit = function () {

        $('form').on('submit', function (e) {
            return true;
        });

        /*

        $('input[type="text"]').on("keyup", function(event){
            var charCode = (event.which) ? event.which : event.keyCode;
            if( charCode == 13 ){
                $("[type='submit']").not("[data-keepvalid]").first().trigger("click");
            }
        });

        */

        $("[type='submit'], .simulate-button").on("click", function (e) {

            if ($(this).is("[data-loading]")) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }

            if( !$(this).hasClass("keepvalid") ){
                if (cancelSubmit()) {
                    var l = $(this).ladda();
                    // Start loading
                    l.ladda('start');

                    return true;
                }

                return false;
            }

            var l = $(this).ladda();
            // Start loading
            l.ladda('start');

            return true;
        });




        $('.paginator a').on('click', function (e) {
            /*$('.loadingState').show();
            globalErrors = 0;
            Notifications.set("");
            Page.validateFields();
            if (globalErrors > 0) {
                e.preventDefault();
                e.stopPropagation();
                $('.notifications').fadeIn();
                setTimeout(function () {
                    $('.notifications').fadeOut();
                }, 2500);
                $('.loadingState').hide();
            }

            */
            if (!$(this).hasClass("keepvalid")) {
                if (cancelSubmit()) {
                    return true;
                }

                return false;
            }

            return true;
        });

    }








    Page.loadScripts = function () {
        // var fakeCSS = document.createElement('link');
        // fakeCSS.href = style;
        // fakeCSS.rel = 'stylesheet';
        // fakeCSS.type = 'text/css';
        // document.documentElement.firstChild.appendChild(fakeCSS);

        // var fakeCSS2 = document.createElement('link');
        // fakeCSS2.href = icons;
        // fakeCSS2.rel = 'stylesheet';
        // fakeCSS2.type = 'text/css';
        // document.documentElement.firstChild.appendChild(fakeCSS2);
        /*
        var fakeJS = document.createElement('script');
        fakeJS.src = scripts+"?callback="+initialize();
        fakeJS.setAttribute('async', 'true');
        document.documentElement.firstChild.appendChild(fakeJS);
        */
        /*initialize();*/
    }



    if (ltIE9()) {
        $('body').addClass('old-ie');
    }

    if ($('body link[href*="bootstrap"]').not('[href*="font"]').length > 0) {
        $('body').addClass('has-bootstrap');
    } else {
        $('body').addClass('no-bootstrap');
    }

    //initialize page
    //Page.loadScripts();



    Page.init = function () {

        Page.checkValidInput();
        Page.checkInvalidInput();
        Page.createLabeling();
        Page.createAdditionIcons();
        Page.createCheckBoxes();
        Page.requiredHelp();
        Page.createRanges();
        Page.createSelectBoxes();
        Page.createCheckBoxes();
        Page.removeClasses();
        Page.enableTabs();
        Page.formSubmit();
        Page.sumarValores();

        if ($.mask == undefined) {
            (function (e) { function t() { var e = document.createElement("input"), t = "onpaste"; return e.setAttribute(t, ""), "function" == typeof e[t] ? "paste" : "input" } var n, a = t() + ".mask", r = navigator.userAgent, i = /iphone/i.test(r), o = /android/i.test(r); e.mask = { definitions: { 9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]" }, dataName: "rawMaskFn", placeholder: "_" }, e.fn.extend({ caret: function (e, t) { var n; if (0 !== this.length && !this.is(":hidden")) return "number" == typeof e ? (t = "number" == typeof t ? t : e, this.each(function () { this.setSelectionRange ? this.setSelectionRange(e, t) : this.createTextRange && (n = this.createTextRange(), n.collapse(!0), n.moveEnd("character", t), n.moveStart("character", e), n.select()) })) : (this[0].setSelectionRange ? (e = this[0].selectionStart, t = this[0].selectionEnd) : document.selection && document.selection.createRange && (n = document.selection.createRange(), e = 0 - n.duplicate().moveStart("character", -1e5), t = e + n.text.length), { begin: e, end: t }) }, unmask: function () { return this.trigger("unmask") }, mask: function (t, r) { var c, l, s, u, f, h; return !t && this.length > 0 ? (c = e(this[0]), c.data(e.mask.dataName)()) : (r = e.extend({ placeholder: e.mask.placeholder, completed: null }, r), l = e.mask.definitions, s = [], u = h = t.length, f = null, e.each(t.split(""), function (e, t) { "?" == t ? (h--, u = e) : l[t] ? (s.push(RegExp(l[t])), null === f && (f = s.length - 1)) : s.push(null) }), this.trigger("unmask").each(function () { function c(e) { for (; h > ++e && !s[e];); return e } function d(e) { for (; --e >= 0 && !s[e];); return e } function m(e, t) { var n, a; if (!(0 > e)) { for (n = e, a = c(t) ; h > n; n++) if (s[n]) { if (!(h > a && s[n].test(R[a]))) break; R[n] = R[a], R[a] = r.placeholder, a = c(a) } b(), x.caret(Math.max(f, e)) } } function p(e) { var t, n, a, i; for (t = e, n = r.placeholder; h > t; t++) if (s[t]) { if (a = c(t), i = R[t], R[t] = n, !(h > a && s[a].test(i))) break; n = i } } function g(e) { var t, n, a, r = e.which; 8 === r || 46 === r || i && 127 === r ? (t = x.caret(), n = t.begin, a = t.end, 0 === a - n && (n = 46 !== r ? d(n) : a = c(n - 1), a = 46 === r ? c(a) : a), k(n, a), m(n, a - 1), e.preventDefault()) : 27 == r && (x.val(S), x.caret(0, y()), e.preventDefault()) } function v(t) { var n, a, i, l = t.which, u = x.caret(); t.ctrlKey || t.altKey || t.metaKey || 32 > l || l && (0 !== u.end - u.begin && (k(u.begin, u.end), m(u.begin, u.end - 1)), n = c(u.begin - 1), h > n && (a = String.fromCharCode(l), s[n].test(a) && (p(n), R[n] = a, b(), i = c(n), o ? setTimeout(e.proxy(e.fn.caret, x, i), 0) : x.caret(i), r.completed && i >= h && r.completed.call(x))), t.preventDefault()) } function k(e, t) { var n; for (n = e; t > n && h > n; n++) s[n] && (R[n] = r.placeholder) } function b() { x.val(R.join("")) } function y(e) { var t, n, a = x.val(), i = -1; for (t = 0, pos = 0; h > t; t++) if (s[t]) { for (R[t] = r.placeholder; pos++ < a.length;) if (n = a.charAt(pos - 1), s[t].test(n)) { R[t] = n, i = t; break } if (pos > a.length) break } else R[t] === a.charAt(pos) && t !== u && (pos++, i = t); return e ? b() : u > i + 1 ? (x.val(""), k(0, h)) : (b(), x.val(x.val().substring(0, i + 1))), u ? t : f } var x = e(this), R = e.map(t.split(""), function (e) { return "?" != e ? l[e] ? r.placeholder : e : void 0 }), S = x.val(); x.data(e.mask.dataName, function () { return e.map(R, function (e, t) { return s[t] && e != r.placeholder ? e : null }).join("") }), x.attr("readonly") || x.one("unmask", function () { x.unbind(".mask").removeData(e.mask.dataName) }).bind("focus.mask", function () { clearTimeout(n); var e; S = x.val(), e = y(), n = setTimeout(function () { b(), e == t.length ? x.caret(0, e) : x.caret(e) }, 10) }).bind("blur.mask", function () { y(), x.val() != S && x.change() }).bind("keydown.mask", g).bind("keypress.mask", v).bind(a, function () { setTimeout(function () { var e = y(!0); x.caret(e), r.completed && e == x.val().length && r.completed.call(x) }, 0) }), y() })) } }) })(jQuery);
        }

        if ($.mask != undefined) {
            $(".nmls").mask("999-99-9999");
            $(".zip-code, .mask-zip").mask("99999");
        }
        $('.ammount').keyup(function (event) {
            // skip for arrow keys
            if ($.inArray(event.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
                // Allow: Ctrl+A
                  (event.keyCode == 65 && event.ctrlKey === true) ||
                // Allow: home, end, left, right
                  (event.keyCode >= 35 && event.keyCode <= 39)) {
                return true;
            } else {
                // Ensure that it is a number and stop the keypress
                if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                    event.preventDefault();
                }


                var $this = $(this);
                var num = $this.val().replace('$', '').replace(/[^0-9]+/g, '').replace(/,/gi, "").split("").reverse().join("");
                var num2 = RemoveRougeChar(num.replace(/(.{3})/g, "$1,").split("").reverse().join(""));
                console.log(num2);
                // the following line has been simplified. Revision history contains original.
                $this.val('$' + num2);

            }
        });


        function RemoveRougeChar(convertString) {
            if (convertString.substring(0, 1) == ",") {
                return convertString.substring(1, convertString.length)
            }
            return convertString;
        }


        return true;
    }


    Page.init();





    function toggleState($input, state) {
        if (state == "enable") {
            $input.prop("disabled", false).css({ opacity: 1 });
            //.attr({ "rel": "required", "data-required": "true" });

            $input.closest(".css-form-group").removeClass("custom_hide");
        }

        if (state == "disable") {
            $input.prop("disabled", true).css({ opacity: 0.5 }).val("");
            //.removeAttr("rel").removeAttr("data-required");

            $input.closest(".css-form-group").addClass("custom_hide");
        }

        toggleStateLabel($input.prev("label"), state);
    }

    function toggleStateLabel($label, state) {
        if (state == "enable") {
            //$label.attr({ "rel": "required", "data-required": "true" });

        }

        if (state == "disable") {
            //$label.removeAttr("rel").removeAttr("data-required");
        }


    }

    var $input_one = $('[id*="LoanPurposeOther"]'),
        $dropdown_one = $('[id*="edtAPP_LOAN_PURPOSE"]'),
        $dropdown_two = $('[id*="DropDownLoanType"]'),
        $input_two = $('[id*="LoanTypeOther"]');


    if ($dropdown_one.val() != "Other") {
        toggleState($input_one, 'disable');
    }
    if ($dropdown_one.val() == "Refinance") {
        $("#refinance_purpose_options").removeClass("custom_hide");
    }

    if ($dropdown_two.val() != "Other") {
        toggleState($input_two, 'disable');
    }

    $dropdown_one.on("change",function () {
        var current = $(this).val();

        //console.log("changed to:", current);

        if (current == "Other") {
            toggleState($input_one, 'enable');
        } else {
            toggleState($input_one, 'disable');
        }

        if (current == "Refinance") {
            $("#refinance_purpose_options").removeClass("custom_hide");
        } else {
            $("#refinance_purpose_options").addClass("custom_hide");

            /*var $drop = $("[id*='REF_LOAN_PURPOSE']");
            $drop.next(".form-selectbox").find("li[data-value='No Cash-Out']").trigger('click').closest(".form-selectbox").removeClass("drop");*/
            $("[id*='REF_LOAN_PURPOSE']").val('No Cash-Out').trigger("change");
        }

    });


    $dropdown_two.on("change", function () {
        var current = $(this).val();

        //console.log("changed to:", current);

        if (current == "Other") {
            toggleState($input_two, 'enable');
        } else {
            toggleState($input_two, 'disable');
        }

    });


    $(".password_length_control").on("keyup", function () {
        var str = $(this).val(),
            input = $(this),
            score = 0,
            _errors = 0;

        if (/[!@#\$%\.\^\-\+\*=\w+]{2,}/g.test(str) && str.indexOf(' ') < 0) {
            score = 0.5;
        }

        if (/[!@#\$%\.\^\-\+\*=\w+]{3,}/g.test(str) && str.indexOf(' ') < 0) {
            score = 1;
        }

        if (/[!@#\$%\.\^\-\+\*=\w+]{4,}/g.test(str) && str.indexOf(' ') < 0) {
            score = 1.33;
        }

        if (/[!@#\$%\.\^\-\+\*=\w+]{5,}/g.test(str) && str.indexOf(' ') < 0) {
            score = 1.66;
        }

        if (/[!@#\$%\.\^\-\+\*=\w+]{6,}/g.test(str) && str.indexOf(' ') < 0) {
            score = 2;
        }

        if (/[!@#\$%\.\^\-\+\*=\w+]{7,}/g.test(str) && str.indexOf(' ') < 0) {
            score = 3;
        }

        if (/[!@#\$%\.\^\-\+\*=\w+]{8,}/g.test(str) && str.indexOf(' ') < 0) {
            score = 4;
        }

        if (str.indexOf(' ') > -1 || str.length < 8) {
            _errors = 1;
        } else {
            _errors = 0;
        }

        if ($(this).closest('.css-form-group').next("span.password-strength").length > 0) {
            var bar = $(this).closest('.css-form-group').next(".password-strength").find('.css-password-strength-bar')
                .find(".css-password-level");

            bar.attr('data-width', score * 25).css({ width: (score * 25 + '%') });
                //.text(score * 25 + "%");
            bar.parent().attr('data-width', score * 25);
        }

        if (_errors > 0) {

            //$(this).addClass('invalid').removeClass("valid");
            
        } else {
            // $(this).parent().removeClass('has-error');
            //$(this).data('hasError', false);
            //$(this).addClass("valid").removeClass("invalid");
        }

    });

    




});


/*************************** END FIRST PAGE / FINAL PRIMERA PAGINA **************************/
