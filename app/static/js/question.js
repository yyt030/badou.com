!function (e) {
    function t(t, n, r, i) {
        var o = {
            data: i || 0 === i || i === !1 ? i : n ? n.data : {},
            _wrap: n ? n._wrap : null,
            tmpl: null,
            parent: n || null,
            nodes: [],
            calls: c,
            nest: u,
            wrap: d,
            html: f,
            update: p
        };
        return t && e.extend(o, t, {
            nodes: [],
            parent: n
        }), r && (o.tmpl = r, o._ctnt = o._ctnt || o.tmpl(e, o), o.key = ++_, (x.length ? y : b)[_] = o), o
    }

    function n(t, i, o) {
        var a, s = o ? e.map(o, function (e) {
            return "string" == typeof e ? t.key ? e.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g, "$1 " + g + '="' + t.key + '" $2') : e : n(e, t, e._ctnt)
        }) : t;
        return i ? s : (s = s.join(""), s.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/, function (t, n, i, o) {
            a = e(i).get(), l(a), n && (a = r(n).concat(a)), o && (a = a.concat(r(o)))
        }), a ? a : r(s))
    }

    function r(t) {
        var n = document.createElement("div");
        return n.innerHTML = t, e.makeArray(n.childNodes)
    }

    function i(t) {
        return new Function("jQuery", "$item", "var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('" + e.trim(t).replace(/([\\'])/g, "\\$1").replace(/[\r\t\n]/g, " ").replace(/\$\{([^\}]*)\}/g, "{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g, function (t, n, r, i, o, s, l) {
                var c, u, d, f = e.tmpl.tag[r];
                if (!f)throw"Unknown template tag: " + r;
                return c = f._default || [], s && !/\w$/.test(o) && (o += s, s = ""), o ? (o = a(o), l = l ? "," + a(l) + ")" : s ? ")" : "", u = s ? o.indexOf(".") > -1 ? o + a(s) : "(" + o + ").call($item" + l : o, d = s ? u : "(typeof(" + o + ")==='function'?(" + o + ").call($item):(" + o + "))") : d = u = c.$1 || "null", i = a(i), "');" + f[n ? "close" : "open"].split("$notnull_1").join(o ? "typeof(" + o + ")!=='undefined' && (" + o + ")!=null" : "true").split("$1a").join(d).split("$1").join(u).split("$2").join(i || c.$2 || "") + "__.push('"
            }) + "');}return __;")
    }

    function o(t, r) {
        t._wrap = n(t, !0, e.isArray(r) ? r : [v.test(r) ? r : e(r).html()]).join("")
    }

    function a(e) {
        return e ? e.replace(/\\'/g, "'").replace(/\\\\/g, "\\") : null
    }

    function s(e) {
        var t = document.createElement("div");
        return t.appendChild(e.cloneNode(!0)), t.innerHTML
    }

    function l(n) {
        function r(n) {
            function r(e) {
                e += c, a = u[e] = u[e] || t(a, b[a.parent.key + c] || a.parent)
            }

            var i, o, a, s, l = n;
            if (s = n.getAttribute(g)) {
                for (; l.parentNode && 1 === (l = l.parentNode).nodeType && !(i = l.getAttribute(g)););
                i !== s && (l = l.parentNode ? 11 === l.nodeType ? 0 : l.getAttribute(g) || 0 : 0, (a = b[s]) || (a = y[s], a = t(a, b[l] || y[l]), a.key = ++_, b[_] = a), k && r(s)), n.removeAttribute(g)
            } else k && (a = e.data(n, "tmplItem")) && (r(a.key), b[a.key] = a, l = e.data(n.parentNode, "tmplItem"), l = l ? l.key : 0);
            if (a) {
                for (o = a; o && o.key != l;)o.nodes.push(n), o = o.parent;
                delete a._ctnt, delete a._wrap, e.data(n, "tmplItem", a)
            }
        }

        var i, o, a, s, l, c = "_" + k, u = {};
        for (a = 0, s = n.length; s > a; a++)if (1 === (i = n[a]).nodeType) {
            for (o = i.getElementsByTagName("*"), l = o.length - 1; l >= 0; l--)r(o[l]);
            r(i)
        }
    }

    function c(e, t, n, r) {
        return e ? void x.push({_: e, tmpl: t, item: this, data: n, options: r}) : x.pop()
    }

    function u(t, n, r) {
        return e.tmpl(e.template(t), n, r, this)
    }

    function d(t, n) {
        var r = t.options || {};
        return r.wrapped = n, e.tmpl(e.template(t.tmpl), t.data, r, t.item)
    }

    function f(t, n) {
        var r = this._wrap;
        return e.map(e(e.isArray(r) ? r.join("") : r).filter(t || "*"), function (e) {
            return n ? e.innerText || e.textContent : e.outerHTML || s(e)
        })
    }

    function p() {
        var t = this.nodes;
        e.tmpl(null, null, null, this).insertBefore(t[0]), e(t).remove()
    }

    var h, m = e.fn.domManip, g = "_tmplitem", v = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /, b = {}, y = {}, w = {
        key: 0,
        data: {}
    }, _ = 0, k = 0, x = [];
    e.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, n) {
        e.fn[t] = function (r) {
            var i, o, a, s, l = [], c = e(r), u = 1 === this.length && this[0].parentNode;
            if (h = b || {}, u && 11 === u.nodeType && 1 === u.childNodes.length && 1 === c.length)c[n](this[0]), l = this; else {
                for (o = 0, a = c.length; a > o; o++)k = o, i = (o > 0 ? this.clone(!0) : this).get(), e(c[o])[n](i), l = l.concat(i);
                k = 0, l = this.pushStack(l, t, c.selector)
            }
            return s = h, h = null, e.tmpl.complete(s), l
        }
    }), e.fn.extend({
        tmpl: function (t, n, r) {
            return e.tmpl(this[0], t, n, r)
        }, tmplItem: function () {
            return e.tmplItem(this[0])
        }, template: function (t) {
            return e.template(t, this[0])
        }, domManip: function (t, n, r) {
            if (t[0] && e.isArray(t[0])) {
                for (var i, o = e.makeArray(arguments), a = t[0], s = a.length, l = 0; s > l && !(i = e.data(a[l++], "tmplItem")););
                i && k && (o[2] = function (t) {
                    e.tmpl.afterManip(this, t, r)
                }), m.apply(this, o)
            } else m.apply(this, arguments);
            return k = 0, !h && e.tmpl.complete(b), this
        }
    }), e.extend({
        tmpl: function (r, i, a, s) {
            var l, c = !s;
            if (c)s = w, r = e.template[r] || e.template(null, r), y = {}; else if (!r)return r = s.tmpl, b[s.key] = s, s.nodes = [], s.wrapped && o(s, s.wrapped), e(n(s, null, s.tmpl(e, s)));
            return r ? ("function" == typeof i && (i = i.call(s || {})), a && a.wrapped && o(a, a.wrapped), l = e.isArray(i) ? e.map(i, function (e) {
                return e ? t(a, s, r, e) : null
            }) : [t(a, s, r, i)], c ? e(n(s, null, l)) : l) : []
        }, tmplItem: function (t) {
            var n;
            for (t instanceof e && (t = t[0]); t && 1 === t.nodeType && !(n = e.data(t, "tmplItem")) && (t = t.parentNode););
            return n || w
        }, template: function (t, n) {
            return n ? ("string" == typeof n ? n = i(n) : n instanceof e && (n = n[0] || {}), n.nodeType && (n = e.data(n, "tmpl") || e.data(n, "tmpl", i(n.innerHTML))), "string" == typeof t ? e.template[t] = n : n) : t ? "string" != typeof t ? e.template(null, t) : e.template[t] || e.template(null, v.test(t) ? t : e(t)) : null
        }, encode: function (e) {
            return ("" + e).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")
        }
    }), e.extend(e.tmpl, {
        tag: {
            tmpl: {
                _default: {$2: "null"},
                open: "if($notnull_1){__=__.concat($item.nest($1,$2));}"
            },
            wrap: {
                _default: {$2: "null"},
                open: "$item.calls(__,$1,$2);__=[];",
                close: "call=$item.calls();__=call._.concat($item.wrap(call,__));"
            },
            each: {
                _default: {$2: "$index, $value"},
                open: "if($notnull_1){$.each($1a,function($2){with(this){",
                close: "}});}"
            },
            "if": {open: "if(($notnull_1) && $1a){", close: "}"},
            "else": {_default: {$1: "true"}, open: "}else if(($notnull_1) && $1a){"},
            html: {open: "if($notnull_1){__.push($1a);}"},
            "=": {_default: {$1: "$data"}, open: "if($notnull_1){__.push($.encode($1a));}"},
            "!": {open: ""}
        }, complete: function () {
            b = {}
        }, afterManip: function (t, n, r) {
            var i = 11 === n.nodeType ? e.makeArray(n.childNodes) : 1 === n.nodeType ? [n] : [];
            r.call(t, n), l(i), k++
        }
    })
}(jQuery), define("jquery_tmpl", ["jquery"], function (e) {
    return function () {
        var t;
        return t || e.$.fn.tmpl
    }
}(this)), define("likeHate", ["jquery", "jquery_tmpl"], function (e) {
    "use strict";
    var t, n;
    n = '<div class="alert alert-danger alert-dismissible unlike-alert" role="alert">                              <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>                              如果该问题有可改进的余地，欢迎在评论里给作者建议。                            </div>', t = '<div class="alert alert-danger alert-dismissible unlike-alert" role="alert">                              <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>                              如果该回答有可改进的余地，欢迎在评论里给作者建议。                            </div>', e.fn.likeHate = function () {
        var r;
        r = null, e(this).click(function () {
            var i, o, a, s, l, c;
            i = e(this), l = i.siblings(".active").hasClass("hate"), s = i.siblings(".active").hasClass("like"), a = i.data("do"), c = "", c = 0 === a.indexOf("un") ? a.slice(2) : "un" + a, o = i.parents(".widget-vote").find(".count"), i.siblings(".like, .hate").removeClass("active"), i.toggleClass("active"), "like" === a ? l && i.siblings(".hate").data("do", "hate") : "hate" === a ? s && e(this).siblings(".like").data("do", "like") : "unlike" === a ? console.log(1) : "unhate" === a && console.log(1), r && clearTimeout(r), r = setTimeout(function () {
                "like" === a ? (i.addClass("active"), i.after('<span class="ani-num">+1</span>'), function (e) {
                    setTimeout(function () {
                        e.next(".ani-num").addClass("active")
                    }, 0)
                }(i), e.sfAjax(i, function (e) {
                    o.text(e.data)
                }, {}, function () {
                    i.removeClass("active"), i.next(".ani-num").remove()
                })) : "hate" === a ? e.sfAjax(i, function (r) {
                    i.addClass("active"), o.text(r.data), "question" === i.data("type") ? i.parent().after(e.tmpl(n)) : "answer" === i.data("type") && i.parent().after(e.tmpl(t))
                }, {}, function () {
                    i.removeClass("active")
                }) : e.sfAjax(i, function (e) {
                    i.removeClass("active"), o.text(e.data), i.next(".ani-num").remove()
                })
            }, 300)
        })
    }
}), define("template", ["jquery"], function (e) {
    "use strict";
    return function (t, n) {
        var r;
        return r = t || "", e.each(n, function (t, n) {
            var i, o;
            i = typeof n, o = new RegExp("{{\\s*" + t + "\\s*}}", "g"), "object" === i && null !== n ? e.each(n, function (e, n) {
                var i;
                i = new RegExp("{{\\s*" + t + "." + e + "\\s*}}", "g"), r = r.replace(i, n)
            }) : r = r.replace(o, n)
        }), r
    }
}), define("sfModal", ["jquery", "template"], function (e, t) {
    "use strict";
    return function (n) {
        var r, i;
        if ("object" != typeof n) {
            if ("hide" === n)return void e(".sfmodal").modal("hide");
            if ("toggle" === n)return void e(".sfmodal").modal("toggle");
            n = {content: n, hideDone: !0}
        }
        r = e.extend({
            hideTitle: !1,
            hideFooter: !1,
            modalSize: "",
            title: "警告：前方高能！",
            content: "玩脱了",
            wrapper: null,
            $content: null,
            hideClose: !1,
            closeText: "取消",
            closeClass: "btn-default",
            hideDone: !1,
            doneText: "确认",
            doneClass: "btn-primary",
            doneFn: function () {
                e(".sfmodal").modal("hide")
            },
            show: function () {
            },
            shown: function () {
            },
            hide: function () {
            },
            hidden: function () {
            },
            loaded: function () {
            }
        }, n), i = '<div class="sfmodal modal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">  <div class="modal-dialog {{modalSize}}">    <div class="modal-content">      ' + (r.hideTitle ? "" : '<div class="modal-header">        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>        <h4 class="modal-title">{{title}}</h4>      </div>') + '<div class="modal-body">        <p class="sfModal-content">          </div>          <div class="modal-footer ' + (r.hideFooter ? "hidden" : "") + '">' + (r.hideClose ? "" : '<button type="button" class="btn {{closeClass}}" data-dismiss="modal">{{closeText}}</button>') + (r.hideDone ? "" : '<button type="button" class="btn {{doneClass}} done-btn">{{doneText}}</button>') + "</div>        </div>      </div>    </div>", e(".sfmodal").length > 0 && (e(".sfmodal").remove(), e(".modal-backdrop").remove()), r.wrapper ? (e(r.wrapper).append(t(i, r)), e(r.wrapper).append('<div class="modal-backdrop in"></div>')) : e("body").append(t(i, r)), r.$content ? e(".sfmodal .sfModal-content").append(r.$content) : e(".sfmodal .sfModal-content").html(r.content), e(".sfmodal").modal({keyboard: !0}), e(".sfmodal").on("show.bs.modal", r.show).on("shown.bs.modal", r.shown).on("hide.bs.modal", function (t) {
            r.hide(t), r.wrapper && e(".modal-backdrop").remove()
        }).on("hidden.bs.modal", r.hidden).on("loaded.bs.modal", r.loaded).modal("show"), e(".sfmodal .done-btn").click(function (t) {
            r.doneFn(t), r.wrapper && e(".modal-backdrop").remove()
        })
    }
}), define("getRelated", ["jquery", "template", "sfModal"], function (e, t, n) {
    "use strict";
    return function (r, i, o, a, s) {
        var l, c, u;
        r && (c = r + "", i = i || '<li class="widget-links__item">                <a href="javascript:void(0);" class="ranks" data-toggle="tooltip" data-placement="top" title="{{ answers }}个回答">{{ answers }}</a>                <a href="{{ url }}">{{ title }}</a>            </li>', u = {}, l = "", 16 === c.length && 0 === c.indexOf("101") ? (l = "GET", u = {
            "do": "related",
            id: c
        }) : (l = "GET", u = {q: c}), e.ajax({
            url: "/api/question/search",
            data: u,
            type: l,
            dataType: "json"
        }).done(function (r) {
            var l;
            if (0 !== r.status)n("○|￣|_ 服务器跪了！"); else {
                if (0 === r.data.length)return void(a && (e("#titleSuggest").hide(), e(o).html(a)));
                s && (r.data = r.data.slice(0, s)), l = "", r.data.forEach(function (e) {
                    e.isAccepted ? (e.acceptedWord = " | 解决", e.isSolved = " | 已解决") : (e.acceptedWord = "", e.isSolved = ""), l += t(i, e)
                }), e("#titleSuggest").removeClass("hidden").show(), e(o).html(l), e(o).find(".ranks").tooltip()
            }
        }))
    }
}), define("mobile", ["jquery"], function (e) {
    return window.innerWidth > 767 ? {
        login: null,
        signup: null
    } : (e(".hate, .like").data("toggle", "false"), {
        login: function () {
            location.href = "/user/login"
        }, signup: function () {
            location.href = "/user/register"
        }
    })
}), function (e) {
    e.fn.hoverIntent = function (t, n, r, i) {
        var o = {interval: i || 400, sensitivity: 5, timeout: 600};
        o = "object" == typeof t ? e.extend(o, t) : e.isFunction(n) ? e.extend(o, {
            over: t,
            out: n,
            selector: r
        }) : e.extend(o, {over: t, out: t, selector: n});
        var a, s, l, c, u = function (e) {
            a = e.pageX, s = e.pageY
        }, d = function (t, n) {
            return n.hoverIntent_t = clearTimeout(n.hoverIntent_t), Math.sqrt((l - a) * (l - a) + (c - s) * (c - s)) < o.sensitivity ? (e(n).off("mousemove.hoverIntent", u), n.hoverIntent_s = !0, o.over.apply(n, [t])) : (l = a, c = s, n.hoverIntent_t = setTimeout(function () {
                d(t, n)
            }, o.interval), void 0)
        }, f = function (e, t) {
            return t.hoverIntent_t = clearTimeout(t.hoverIntent_t), t.hoverIntent_s = !1, o.out.apply(t, [e])
        }, p = function (t) {
            var n = e.extend({}, t), r = this;
            r.hoverIntent_t && (r.hoverIntent_t = clearTimeout(r.hoverIntent_t)), "mouseenter" === t.type ? (l = n.pageX, c = n.pageY, e(r).on("mousemove.hoverIntent", u), r.hoverIntent_s || (r.hoverIntent_t = setTimeout(function () {
                d(n, r)
            }, o.interval))) : (e(r).off("mousemove.hoverIntent", u), r.hoverIntent_s && (r.hoverIntent_t = setTimeout(function () {
                f(n, r)
            }, o.timeout)))
        };
        return this.on({"mouseenter.hoverIntent": p, "mouseleave.hoverIntent": p}, o.selector)
    }
}(jQuery), define("jquery_hoverIntent", ["jquery"], function (e) {
    return function () {
        var t;
        return t || e.$.fn.hoverIntent
    }
}(this)), define("sfAjax", ["jquery"], function (e) {
    "use strict";
    e.sfAjax = function (t, n, r, i) {
        var o, a, s, l;
        a = e.extend({
            id: t.data("id"),
            "do": t.data("do"),
            type: t.data("type")
        }, r), o = a["do"], s = o.indexOf("/cancel") > 0 ? o.replace("/cancel", "") : o + "/cancel", l = "/api/" + a.type + "/" + a.id + "/" + a["do"], e.post(l, function (e) {
            0 === e.status ? (t.data("do", s), n ? n(e) : location.reload()) : i && i(e)
        })
    }
}), function (e) {
    "function" == typeof define && define.amd ? define("jquery_cookie", ["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function (e) {
    function t(e) {
        return s.raw ? e : encodeURIComponent(e)
    }

    function n(e) {
        return s.raw ? e : decodeURIComponent(e)
    }

    function r(e) {
        return t(s.json ? JSON.stringify(e) : String(e))
    }

    function i(e) {
        0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return e = decodeURIComponent(e.replace(a, " ")), s.json ? JSON.parse(e) : e
        } catch (t) {
        }
    }

    function o(t, n) {
        var r = s.raw ? t : i(t);
        return e.isFunction(n) ? n(r) : r
    }

    var a = /\+/g, s = e.cookie = function (i, a, l) {
        if (void 0 !== a && !e.isFunction(a)) {
            if (l = e.extend({}, s.defaults, l), "number" == typeof l.expires) {
                var c = l.expires, u = l.expires = new Date;
                u.setTime(+u + 864e5 * c)
            }
            return document.cookie = [t(i), "=", r(a), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("")
        }
        for (var d = i ? void 0 : {}, f = document.cookie ? document.cookie.split("; ") : [], p = 0, h = f.length; h > p; p++) {
            var m = f[p].split("="), g = n(m.shift()), v = m.join("=");
            if (i && i === g) {
                d = o(v, a);
                break
            }
            i || void 0 === (v = o(v)) || (d[g] = v)
        }
        return d
    };
    s.defaults = {}, e.removeCookie = function (t, n) {
        return void 0 === e.cookie(t) ? !1 : (e.cookie(t, "", e.extend({}, n, {expires: -1})), !e.cookie(t))
    }
}), function (e, t, n, r) {
    var i = e(t);
    e.fn.lazyload = function (o) {
        function a() {
            var t = 0;
            l.each(function () {
                var n = e(this);
                if (!c.skip_invisible || n.is(":visible"))if (e.abovethetop(this, c) || e.leftofbegin(this, c)); else if (e.belowthefold(this, c) || e.rightoffold(this, c)) {
                    if (++t > c.failure_limit)return !1
                } else n.trigger("appear"), t = 0
            })
        }

        var s, l = this, c = {
            threshold: 0,
            failure_limit: 0,
            event: "scroll",
            effect: "show",
            container: t,
            data_attribute: "original",
            skip_invisible: !0,
            appear: null,
            load: null,
            placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
        };
        return o && (r !== o.failurelimit && (o.failure_limit = o.failurelimit, delete o.failurelimit), r !== o.effectspeed && (o.effect_speed = o.effectspeed, delete o.effectspeed), e.extend(c, o)), s = c.container === r || c.container === t ? i : e(c.container), 0 === c.event.indexOf("scroll") && s.bind(c.event, function () {
            return a()
        }), this.each(function () {
            var t = this, n = e(t);
            t.loaded = !1, (n.attr("src") === r || n.attr("src") === !1) && n.is("img") && n.attr("src", c.placeholder), n.one("appear", function () {
                if (!this.loaded) {
                    if (c.appear) {
                        var r = l.length;
                        c.appear.call(t, r, c)
                    }
                    e("<img />").bind("load", function () {
                        var r = n.attr("data-" + c.data_attribute);
                        n.hide(), n.is("img") ? n.attr("src", r) : n.css("background-image", "url('" + r + "')"), n[c.effect](c.effect_speed), t.loaded = !0;
                        var i = e.grep(l, function (e) {
                            return !e.loaded
                        });
                        if (l = e(i), c.load) {
                            var o = l.length;
                            c.load.call(t, o, c)
                        }
                    }).attr("src", n.attr("data-" + c.data_attribute))
                }
            }), 0 !== c.event.indexOf("scroll") && n.bind(c.event, function () {
                t.loaded || n.trigger("appear")
            })
        }), i.bind("resize", function () {
            a()
        }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && i.bind("pageshow", function (t) {
            t.originalEvent && t.originalEvent.persisted && l.each(function () {
                e(this).trigger("appear")
            })
        }), e(n).ready(function () {
            a()
        }), this
    }, e.belowthefold = function (n, o) {
        var a;
        return a = o.container === r || o.container === t ? (t.innerHeight ? t.innerHeight : i.height()) + i.scrollTop() : e(o.container).offset().top + e(o.container).height(), a <= e(n).offset().top - o.threshold
    }, e.rightoffold = function (n, o) {
        var a;
        return a = o.container === r || o.container === t ? i.width() + i.scrollLeft() : e(o.container).offset().left + e(o.container).width(), a <= e(n).offset().left - o.threshold
    }, e.abovethetop = function (n, o) {
        var a;
        return a = o.container === r || o.container === t ? i.scrollTop() : e(o.container).offset().top, a >= e(n).offset().top + o.threshold + e(n).height()
    }, e.leftofbegin = function (n, o) {
        var a;
        return a = o.container === r || o.container === t ? i.scrollLeft() : e(o.container).offset().left, a >= e(n).offset().left + o.threshold + e(n).width()
    }, e.inviewport = function (t, n) {
        return !(e.rightoffold(t, n) || e.leftofbegin(t, n) || e.belowthefold(t, n) || e.abovethetop(t, n))
    }, e.extend(e.expr[":"], {
        "below-the-fold": function (t) {
            return e.belowthefold(t, {threshold: 0})
        }, "above-the-top": function (t) {
            return !e.belowthefold(t, {threshold: 0})
        }, "right-of-screen": function (t) {
            return e.rightoffold(t, {threshold: 0})
        }, "left-of-screen": function (t) {
            return !e.rightoffold(t, {threshold: 0})
        }, "in-viewport": function (t) {
            return e.inviewport(t, {threshold: 0})
        }, "above-the-fold": function (t) {
            return !e.belowthefold(t, {threshold: 0})
        }, "right-of-fold": function (t) {
            return e.rightoffold(t, {threshold: 0})
        }, "left-of-fold": function (t) {
            return !e.rightoffold(t, {threshold: 0})
        }
    })
}(jQuery, window, document), define("jquery_lazyload", ["jquery"], function (e) {
    return function () {
        var t;
        return t || e.$.fn.lazyload
    }
}(this)), function () {
    var e = this, t = e._, n = Array.prototype, r = Object.prototype, i = Function.prototype, o = n.push, a = n.slice, s = n.concat, l = r.toString, c = r.hasOwnProperty, u = Array.isArray, d = Object.keys, f = i.bind, p = function (e) {
        return e instanceof p ? e : this instanceof p ? void(this._wrapped = e) : new p(e)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = p), exports._ = p) : e._ = p, p.VERSION = "1.7.0";
    var h = function (e, t, n) {
        if (void 0 === t)return e;
        switch (null == n ? 3 : n) {
            case 1:
                return function (n) {
                    return e.call(t, n)
                };
            case 2:
                return function (n, r) {
                    return e.call(t, n, r)
                };
            case 3:
                return function (n, r, i) {
                    return e.call(t, n, r, i)
                };
            case 4:
                return function (n, r, i, o) {
                    return e.call(t, n, r, i, o)
                }
        }
        return function () {
            return e.apply(t, arguments)
        }
    };
    p.iteratee = function (e, t, n) {
        return null == e ? p.identity : p.isFunction(e) ? h(e, t, n) : p.isObject(e) ? p.matches(e) : p.property(e)
    }, p.each = p.forEach = function (e, t, n) {
        if (null == e)return e;
        t = h(t, n);
        var r, i = e.length;
        if (i === +i)for (r = 0; i > r; r++)t(e[r], r, e); else {
            var o = p.keys(e);
            for (r = 0, i = o.length; i > r; r++)t(e[o[r]], o[r], e)
        }
        return e
    }, p.map = p.collect = function (e, t, n) {
        if (null == e)return [];
        t = p.iteratee(t, n);
        for (var r, i = e.length !== +e.length && p.keys(e), o = (i || e).length, a = Array(o), s = 0; o > s; s++)r = i ? i[s] : s, a[s] = t(e[r], r, e);
        return a
    };
    var m = "Reduce of empty array with no initial value";
    p.reduce = p.foldl = p.inject = function (e, t, n, r) {
        null == e && (e = []), t = h(t, r, 4);
        var i, o = e.length !== +e.length && p.keys(e), a = (o || e).length, s = 0;
        if (arguments.length < 3) {
            if (!a)throw new TypeError(m);
            n = e[o ? o[s++] : s++]
        }
        for (; a > s; s++)i = o ? o[s] : s, n = t(n, e[i], i, e);
        return n
    }, p.reduceRight = p.foldr = function (e, t, n, r) {
        null == e && (e = []), t = h(t, r, 4);
        var i, o = e.length !== +e.length && p.keys(e), a = (o || e).length;
        if (arguments.length < 3) {
            if (!a)throw new TypeError(m);
            n = e[o ? o[--a] : --a]
        }
        for (; a--;)i = o ? o[a] : a, n = t(n, e[i], i, e);
        return n
    }, p.find = p.detect = function (e, t, n) {
        var r;
        return t = p.iteratee(t, n), p.some(e, function (e, n, i) {
            return t(e, n, i) ? (r = e, !0) : void 0
        }), r
    }, p.filter = p.select = function (e, t, n) {
        var r = [];
        return null == e ? r : (t = p.iteratee(t, n), p.each(e, function (e, n, i) {
            t(e, n, i) && r.push(e)
        }), r)
    }, p.reject = function (e, t, n) {
        return p.filter(e, p.negate(p.iteratee(t)), n)
    }, p.every = p.all = function (e, t, n) {
        if (null == e)return !0;
        t = p.iteratee(t, n);
        var r, i, o = e.length !== +e.length && p.keys(e), a = (o || e).length;
        for (r = 0; a > r; r++)if (i = o ? o[r] : r, !t(e[i], i, e))return !1;
        return !0
    }, p.some = p.any = function (e, t, n) {
        if (null == e)return !1;
        t = p.iteratee(t, n);
        var r, i, o = e.length !== +e.length && p.keys(e), a = (o || e).length;
        for (r = 0; a > r; r++)if (i = o ? o[r] : r, t(e[i], i, e))return !0;
        return !1
    }, p.contains = p.include = function (e, t) {
        return null == e ? !1 : (e.length !== +e.length && (e = p.values(e)), p.indexOf(e, t) >= 0)
    }, p.invoke = function (e, t) {
        var n = a.call(arguments, 2), r = p.isFunction(t);
        return p.map(e, function (e) {
            return (r ? t : e[t]).apply(e, n)
        })
    }, p.pluck = function (e, t) {
        return p.map(e, p.property(t))
    }, p.where = function (e, t) {
        return p.filter(e, p.matches(t))
    }, p.findWhere = function (e, t) {
        return p.find(e, p.matches(t))
    }, p.max = function (e, t, n) {
        var r, i, o = -1 / 0, a = -1 / 0;
        if (null == t && null != e) {
            e = e.length === +e.length ? e : p.values(e);
            for (var s = 0, l = e.length; l > s; s++)r = e[s], r > o && (o = r)
        } else t = p.iteratee(t, n), p.each(e, function (e, n, r) {
            i = t(e, n, r), (i > a || i === -1 / 0 && o === -1 / 0) && (o = e, a = i)
        });
        return o
    }, p.min = function (e, t, n) {
        var r, i, o = 1 / 0, a = 1 / 0;
        if (null == t && null != e) {
            e = e.length === +e.length ? e : p.values(e);
            for (var s = 0, l = e.length; l > s; s++)r = e[s], o > r && (o = r)
        } else t = p.iteratee(t, n), p.each(e, function (e, n, r) {
            i = t(e, n, r), (a > i || 1 / 0 === i && 1 / 0 === o) && (o = e, a = i)
        });
        return o
    }, p.shuffle = function (e) {
        for (var t, n = e && e.length === +e.length ? e : p.values(e), r = n.length, i = Array(r), o = 0; r > o; o++)t = p.random(0, o), t !== o && (i[o] = i[t]), i[t] = n[o];
        return i
    }, p.sample = function (e, t, n) {
        return null == t || n ? (e.length !== +e.length && (e = p.values(e)), e[p.random(e.length - 1)]) : p.shuffle(e).slice(0, Math.max(0, t))
    }, p.sortBy = function (e, t, n) {
        return t = p.iteratee(t, n), p.pluck(p.map(e, function (e, n, r) {
            return {value: e, index: n, criteria: t(e, n, r)}
        }).sort(function (e, t) {
            var n = e.criteria, r = t.criteria;
            if (n !== r) {
                if (n > r || void 0 === n)return 1;
                if (r > n || void 0 === r)return -1
            }
            return e.index - t.index
        }), "value")
    };
    var g = function (e) {
        return function (t, n, r) {
            var i = {};
            return n = p.iteratee(n, r), p.each(t, function (r, o) {
                var a = n(r, o, t);
                e(i, r, a)
            }), i
        }
    };
    p.groupBy = g(function (e, t, n) {
        p.has(e, n) ? e[n].push(t) : e[n] = [t]
    }), p.indexBy = g(function (e, t, n) {
        e[n] = t
    }), p.countBy = g(function (e, t, n) {
        p.has(e, n) ? e[n]++ : e[n] = 1
    }), p.sortedIndex = function (e, t, n, r) {
        n = p.iteratee(n, r, 1);
        for (var i = n(t), o = 0, a = e.length; a > o;) {
            var s = o + a >>> 1;
            n(e[s]) < i ? o = s + 1 : a = s
        }
        return o
    }, p.toArray = function (e) {
        return e ? p.isArray(e) ? a.call(e) : e.length === +e.length ? p.map(e, p.identity) : p.values(e) : []
    }, p.size = function (e) {
        return null == e ? 0 : e.length === +e.length ? e.length : p.keys(e).length
    }, p.partition = function (e, t, n) {
        t = p.iteratee(t, n);
        var r = [], i = [];
        return p.each(e, function (e, n, o) {
            (t(e, n, o) ? r : i).push(e)
        }), [r, i]
    }, p.first = p.head = p.take = function (e, t, n) {
        return null == e ? void 0 : null == t || n ? e[0] : 0 > t ? [] : a.call(e, 0, t)
    }, p.initial = function (e, t, n) {
        return a.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
    }, p.last = function (e, t, n) {
        return null == e ? void 0 : null == t || n ? e[e.length - 1] : a.call(e, Math.max(e.length - t, 0))
    }, p.rest = p.tail = p.drop = function (e, t, n) {
        return a.call(e, null == t || n ? 1 : t)
    }, p.compact = function (e) {
        return p.filter(e, p.identity)
    };
    var v = function (e, t, n, r) {
        if (t && p.every(e, p.isArray))return s.apply(r, e);
        for (var i = 0, a = e.length; a > i; i++) {
            var l = e[i];
            p.isArray(l) || p.isArguments(l) ? t ? o.apply(r, l) : v(l, t, n, r) : n || r.push(l)
        }
        return r
    };
    p.flatten = function (e, t) {
        return v(e, t, !1, [])
    }, p.without = function (e) {
        return p.difference(e, a.call(arguments, 1))
    }, p.uniq = p.unique = function (e, t, n, r) {
        if (null == e)return [];
        p.isBoolean(t) || (r = n, n = t, t = !1), null != n && (n = p.iteratee(n, r));
        for (var i = [], o = [], a = 0, s = e.length; s > a; a++) {
            var l = e[a];
            if (t)a && o === l || i.push(l), o = l; else if (n) {
                var c = n(l, a, e);
                p.indexOf(o, c) < 0 && (o.push(c), i.push(l))
            } else p.indexOf(i, l) < 0 && i.push(l)
        }
        return i
    }, p.union = function () {
        return p.uniq(v(arguments, !0, !0, []))
    }, p.intersection = function (e) {
        if (null == e)return [];
        for (var t = [], n = arguments.length, r = 0, i = e.length; i > r; r++) {
            var o = e[r];
            if (!p.contains(t, o)) {
                for (var a = 1; n > a && p.contains(arguments[a], o); a++);
                a === n && t.push(o)
            }
        }
        return t
    }, p.difference = function (e) {
        var t = v(a.call(arguments, 1), !0, !0, []);
        return p.filter(e, function (e) {
            return !p.contains(t, e)
        })
    }, p.zip = function (e) {
        if (null == e)return [];
        for (var t = p.max(arguments, "length").length, n = Array(t), r = 0; t > r; r++)n[r] = p.pluck(arguments, r);
        return n
    }, p.object = function (e, t) {
        if (null == e)return {};
        for (var n = {}, r = 0, i = e.length; i > r; r++)t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
        return n
    }, p.indexOf = function (e, t, n) {
        if (null == e)return -1;
        var r = 0, i = e.length;
        if (n) {
            if ("number" != typeof n)return r = p.sortedIndex(e, t), e[r] === t ? r : -1;
            r = 0 > n ? Math.max(0, i + n) : n
        }
        for (; i > r; r++)if (e[r] === t)return r;
        return -1
    }, p.lastIndexOf = function (e, t, n) {
        if (null == e)return -1;
        var r = e.length;
        for ("number" == typeof n && (r = 0 > n ? r + n + 1 : Math.min(r, n + 1)); --r >= 0;)if (e[r] === t)return r;
        return -1
    }, p.range = function (e, t, n) {
        arguments.length <= 1 && (t = e || 0, e = 0), n = n || 1;
        for (var r = Math.max(Math.ceil((t - e) / n), 0), i = Array(r), o = 0; r > o; o++, e += n)i[o] = e;
        return i
    };
    var b = function () {
    };
    p.bind = function (e, t) {
        var n, r;
        if (f && e.bind === f)return f.apply(e, a.call(arguments, 1));
        if (!p.isFunction(e))throw new TypeError("Bind must be called on a function");
        return n = a.call(arguments, 2), r = function () {
            if (!(this instanceof r))return e.apply(t, n.concat(a.call(arguments)));
            b.prototype = e.prototype;
            var i = new b;
            b.prototype = null;
            var o = e.apply(i, n.concat(a.call(arguments)));
            return p.isObject(o) ? o : i
        }
    }, p.partial = function (e) {
        var t = a.call(arguments, 1);
        return function () {
            for (var n = 0, r = t.slice(), i = 0, o = r.length; o > i; i++)r[i] === p && (r[i] = arguments[n++]);
            for (; n < arguments.length;)r.push(arguments[n++]);
            return e.apply(this, r)
        }
    }, p.bindAll = function (e) {
        var t, n, r = arguments.length;
        if (1 >= r)throw new Error("bindAll must be passed function names");
        for (t = 1; r > t; t++)n = arguments[t], e[n] = p.bind(e[n], e);
        return e
    }, p.memoize = function (e, t) {
        var n = function (r) {
            var i = n.cache, o = t ? t.apply(this, arguments) : r;
            return p.has(i, o) || (i[o] = e.apply(this, arguments)), i[o]
        };
        return n.cache = {}, n
    }, p.delay = function (e, t) {
        var n = a.call(arguments, 2);
        return setTimeout(function () {
            return e.apply(null, n)
        }, t)
    }, p.defer = function (e) {
        return p.delay.apply(p, [e, 1].concat(a.call(arguments, 1)))
    }, p.throttle = function (e, t, n) {
        var r, i, o, a = null, s = 0;
        n || (n = {});
        var l = function () {
            s = n.leading === !1 ? 0 : p.now(), a = null, o = e.apply(r, i), a || (r = i = null)
        };
        return function () {
            var c = p.now();
            s || n.leading !== !1 || (s = c);
            var u = t - (c - s);
            return r = this, i = arguments, 0 >= u || u > t ? (clearTimeout(a), a = null, s = c, o = e.apply(r, i), a || (r = i = null)) : a || n.trailing === !1 || (a = setTimeout(l, u)), o
        }
    }, p.debounce = function (e, t, n) {
        var r, i, o, a, s, l = function () {
            var c = p.now() - a;
            t > c && c > 0 ? r = setTimeout(l, t - c) : (r = null, n || (s = e.apply(o, i), r || (o = i = null)))
        };
        return function () {
            o = this, i = arguments, a = p.now();
            var c = n && !r;
            return r || (r = setTimeout(l, t)), c && (s = e.apply(o, i), o = i = null), s
        }
    }, p.wrap = function (e, t) {
        return p.partial(t, e)
    }, p.negate = function (e) {
        return function () {
            return !e.apply(this, arguments)
        }
    }, p.compose = function () {
        var e = arguments, t = e.length - 1;
        return function () {
            for (var n = t, r = e[t].apply(this, arguments); n--;)r = e[n].call(this, r);
            return r
        }
    }, p.after = function (e, t) {
        return function () {
            return --e < 1 ? t.apply(this, arguments) : void 0
        }
    }, p.before = function (e, t) {
        var n;
        return function () {
            return --e > 0 ? n = t.apply(this, arguments) : t = null, n
        }
    }, p.once = p.partial(p.before, 2), p.keys = function (e) {
        if (!p.isObject(e))return [];
        if (d)return d(e);
        var t = [];
        for (var n in e)p.has(e, n) && t.push(n);
        return t
    }, p.values = function (e) {
        for (var t = p.keys(e), n = t.length, r = Array(n), i = 0; n > i; i++)r[i] = e[t[i]];
        return r
    }, p.pairs = function (e) {
        for (var t = p.keys(e), n = t.length, r = Array(n), i = 0; n > i; i++)r[i] = [t[i], e[t[i]]];
        return r
    }, p.invert = function (e) {
        for (var t = {}, n = p.keys(e), r = 0, i = n.length; i > r; r++)t[e[n[r]]] = n[r];
        return t
    }, p.functions = p.methods = function (e) {
        var t = [];
        for (var n in e)p.isFunction(e[n]) && t.push(n);
        return t.sort()
    }, p.extend = function (e) {
        if (!p.isObject(e))return e;
        for (var t, n, r = 1, i = arguments.length; i > r; r++) {
            t = arguments[r];
            for (n in t)c.call(t, n) && (e[n] = t[n])
        }
        return e
    }, p.pick = function (e, t, n) {
        var r, i = {};
        if (null == e)return i;
        if (p.isFunction(t)) {
            t = h(t, n);
            for (r in e) {
                var o = e[r];
                t(o, r, e) && (i[r] = o)
            }
        } else {
            var l = s.apply([], a.call(arguments, 1));
            e = new Object(e);
            for (var c = 0, u = l.length; u > c; c++)r = l[c], r in e && (i[r] = e[r])
        }
        return i
    }, p.omit = function (e, t, n) {
        if (p.isFunction(t))t = p.negate(t); else {
            var r = p.map(s.apply([], a.call(arguments, 1)), String);
            t = function (e, t) {
                return !p.contains(r, t)
            }
        }
        return p.pick(e, t, n)
    }, p.defaults = function (e) {
        if (!p.isObject(e))return e;
        for (var t = 1, n = arguments.length; n > t; t++) {
            var r = arguments[t];
            for (var i in r)void 0 === e[i] && (e[i] = r[i])
        }
        return e
    }, p.clone = function (e) {
        return p.isObject(e) ? p.isArray(e) ? e.slice() : p.extend({}, e) : e
    }, p.tap = function (e, t) {
        return t(e), e
    };
    var y = function (e, t, n, r) {
        if (e === t)return 0 !== e || 1 / e === 1 / t;
        if (null == e || null == t)return e === t;
        e instanceof p && (e = e._wrapped), t instanceof p && (t = t._wrapped);
        var i = l.call(e);
        if (i !== l.call(t))return !1;
        switch (i) {
            case"[object RegExp]":
            case"[object String]":
                return "" + e == "" + t;
            case"[object Number]":
                return +e !== +e ? +t !== +t : 0 === +e ? 1 / +e === 1 / t : +e === +t;
            case"[object Date]":
            case"[object Boolean]":
                return +e === +t
        }
        if ("object" != typeof e || "object" != typeof t)return !1;
        for (var o = n.length; o--;)if (n[o] === e)return r[o] === t;
        var a = e.constructor, s = t.constructor;
        if (a !== s && "constructor"in e && "constructor"in t && !(p.isFunction(a) && a instanceof a && p.isFunction(s) && s instanceof s))return !1;
        n.push(e), r.push(t);
        var c, u;
        if ("[object Array]" === i) {
            if (c = e.length, u = c === t.length)for (; c-- && (u = y(e[c], t[c], n, r)););
        } else {
            var d, f = p.keys(e);
            if (c = f.length, u = p.keys(t).length === c)for (; c-- && (d = f[c], u = p.has(t, d) && y(e[d], t[d], n, r)););
        }
        return n.pop(), r.pop(), u
    };
    p.isEqual = function (e, t) {
        return y(e, t, [], [])
    }, p.isEmpty = function (e) {
        if (null == e)return !0;
        if (p.isArray(e) || p.isString(e) || p.isArguments(e))return 0 === e.length;
        for (var t in e)if (p.has(e, t))return !1;
        return !0
    }, p.isElement = function (e) {
        return !(!e || 1 !== e.nodeType)
    }, p.isArray = u || function (e) {
            return "[object Array]" === l.call(e)
        }, p.isObject = function (e) {
        var t = typeof e;
        return "function" === t || "object" === t && !!e
    }, p.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (e) {
        p["is" + e] = function (t) {
            return l.call(t) === "[object " + e + "]"
        }
    }), p.isArguments(arguments) || (p.isArguments = function (e) {
        return p.has(e, "callee")
    }), "function" != typeof/./ && (p.isFunction = function (e) {
        return "function" == typeof e || !1
    }), p.isFinite = function (e) {
        return isFinite(e) && !isNaN(parseFloat(e))
    }, p.isNaN = function (e) {
        return p.isNumber(e) && e !== +e
    }, p.isBoolean = function (e) {
        return e === !0 || e === !1 || "[object Boolean]" === l.call(e)
    }, p.isNull = function (e) {
        return null === e
    }, p.isUndefined = function (e) {
        return void 0 === e
    }, p.has = function (e, t) {
        return null != e && c.call(e, t)
    }, p.noConflict = function () {
        return e._ = t, this
    }, p.identity = function (e) {
        return e
    }, p.constant = function (e) {
        return function () {
            return e
        }
    }, p.noop = function () {
    }, p.property = function (e) {
        return function (t) {
            return t[e]
        }
    }, p.matches = function (e) {
        var t = p.pairs(e), n = t.length;
        return function (e) {
            if (null == e)return !n;
            e = new Object(e);
            for (var r = 0; n > r; r++) {
                var i = t[r], o = i[0];
                if (i[1] !== e[o] || !(o in e))return !1
            }
            return !0
        }
    }, p.times = function (e, t, n) {
        var r = Array(Math.max(0, e));
        t = h(t, n, 1);
        for (var i = 0; e > i; i++)r[i] = t(i);
        return r
    }, p.random = function (e, t) {
        return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
    }, p.now = Date.now || function () {
            return (new Date).getTime()
        };
    var w = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    }, _ = p.invert(w), k = function (e) {
        var t = function (t) {
            return e[t]
        }, n = "(?:" + p.keys(e).join("|") + ")", r = RegExp(n), i = RegExp(n, "g");
        return function (e) {
            return e = null == e ? "" : "" + e, r.test(e) ? e.replace(i, t) : e
        }
    };
    p.escape = k(w), p.unescape = k(_), p.result = function (e, t) {
        if (null == e)return void 0;
        var n = e[t];
        return p.isFunction(n) ? e[t]() : n
    };
    var x = 0;
    p.uniqueId = function (e) {
        var t = ++x + "";
        return e ? e + t : t
    }, p.templateSettings = {evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g};
    var C = /(.)^/, S = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, T = /\\|'|\r|\n|\u2028|\u2029/g, $ = function (e) {
        return "\\" + S[e]
    };
    p.template = function (e, t, n) {
        !t && n && (t = n), t = p.defaults({}, t, p.templateSettings);
        var r = RegExp([(t.escape || C).source, (t.interpolate || C).source, (t.evaluate || C).source].join("|") + "|$", "g"), i = 0, o = "__p+='";
        e.replace(r, function (t, n, r, a, s) {
            return o += e.slice(i, s).replace(T, $), i = s + t.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : a && (o += "';\n" + a + "\n__p+='"), t
        }), o += "';\n", t.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
            var a = new Function(t.variable || "obj", "_", o)
        } catch (s) {
            throw s.source = o, s
        }
        var l = function (e) {
            return a.call(this, e, p)
        }, c = t.variable || "obj";
        return l.source = "function(" + c + "){\n" + o + "}", l
    }, p.chain = function (e) {
        var t = p(e);
        return t._chain = !0, t
    };
    var M = function (e) {
        return this._chain ? p(e).chain() : e
    };
    p.mixin = function (e) {
        p.each(p.functions(e), function (t) {
            var n = p[t] = e[t];
            p.prototype[t] = function () {
                var e = [this._wrapped];
                return o.apply(e, arguments), M.call(this, n.apply(p, e))
            }
        })
    }, p.mixin(p), p.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
        var t = n[e];
        p.prototype[e] = function () {
            var n = this._wrapped;
            return t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0], M.call(this, n)
        }
    }), p.each(["concat", "join", "slice"], function (e) {
        var t = n[e];
        p.prototype[e] = function () {
            return M.call(this, t.apply(this._wrapped, arguments))
        }
    }), p.prototype.value = function () {
        return this._wrapped
    }, "function" == typeof define && define.amd && define("underscore", [], function () {
        return p
    })
}.call(this), define("typeHelper", ["jquery", "jquery_tmpl"], function (e) {
    "use strict";
    var t, n, r, i, o, a, s, l;
    s = '<ul class="dropdown-menu" role="menu"></ul>', i = void 0, t = void 0, r = void 0, n = void 0, o = void 0, a = ["gmail.com", "qq.com", "163.com", "hotmail.com", "sina.com", "126.com", "live.com", "live.cn", "vip.sina.com", "vip.qq.com", "sina.cn", "sohu.com", "139.com", "wo.com.cn", "189.cn", "21cn.com"], l = '<button class="btn btn-default result" type="button">${result}</button><a href="#" class="i-cancel ml10 delete-result">&times;</a>', e.fn.typeHelperOld = function (c) {
        var u;
        i = e.extend({
            data: null,
            tpl: '<li><a href="#" data-value="${name}">${name}</a></li>',
            defaultList: [],
            showNum: 5,
            remoteData: null,
            submitKey: null,
            onlyResult: !0,
            autoSelect: !0,
            emailMode: !1,
            insertHandler: function () {
            }
        }, c), u = [], n = e(this), 0 !== n.length && (n.after(e("<div></div>").addClass("typehelper")).siblings(".typehelper").append(n), t = n.parent().css("position", "relative"), e.tmpl(s).insertAfter(n), r = t.find("ul").hide().css("minWidth", n.outerWidth()), e.each(i.defaultList, function (t, n) {
            e.tmpl(i.tpl, n).appendTo(r)
        }), n.on("focus", function () {
            i.defaultList.length > 0 && e(this).parent().trigger("show.typehelper")
        }), n.on("input", function () {
            e(this).parent().trigger("search.typehelper"), e(this).parent().trigger("show.typehelper")
        }), n.on("keydown", function (t) {
            e(this).parent().trigger("select.typehelper", t)
        }), r.delegate("li", "mouseover", function () {
            e(this).siblings("li").removeClass("active"), e(this).addClass("active")
        }), n.on("blur", function () {
            var t, n;
            e(this).parent().trigger("hide.typehelper"), i.autoSelect && (e(this).siblings("ul").find(".active").length > 0 ? (t = r.find(".active").index(), n = u[t], e(this).parent().trigger("insert.typehelper", [r.find(".active a"), n])) : e(this).val(""))
        }), t.on("show.typehelper", function () {
            e(this).find("ul").show()
        }), t.on("hide.typehelper", function () {
            e(this).find("ul").hide()
        }), t.on("insert.typehelper", function (o, a, s) {
            t = e(this), n = t.find("input"), r = t.find("ul"), n.val(e(a).data("value")), e(".result", t).length > 0 && (e(".result", t).remove(), t.find(".delete-result").remove()), i.onlyResult && (n.hide(), r.after(e.tmpl(l, {result: n.val()})), i.submitKey && n.data(i.submitKey, e(a).data(i.submitKey)), t.find(".result").on("click", function () {
                e(this).siblings(".delete-result").remove(), e(this).remove(), n.show().focus(), t.trigger("search.typehelper")
            }), t.find(".delete-result").on("click", function () {
                return e(this).siblings(".result").remove(), e(this).remove(), n.val("").show(), !1
            })), t.parents(".form-group").next(".form-group").find("input").focus(), i.insertHandler(s)
        }), t.on("select.typehelper", function (i, o) {
            var a, s, l, c, d, f;
            if (t = e(this), n = t.find("input"), r = t.find("ul"), a = r.find("li"), o)switch (o.keyCode) {
                case 38:
                    o.preventDefault(), a.length && (r.find(".active").length ? r.find(".active").removeClass("active").prev("li").addClass("active") : a.last().addClass("active"));
                    break;
                case 40:
                    o.preventDefault(), a.length && (r.find(".active").length ? r.find(".active").removeClass("active").next("li").addClass("active") : a.first().addClass("active"));
                    break;
                case 13:
                    if (o.stopPropagation(), o.preventDefault(), r.find(".active").length <= 0)return;
                    c = r.find(".active").index(), f = u[c], t.trigger("insert.typehelper", [r.find(".active a"), f]), t.trigger("hide.typehelper");
                    break;
                case 9:
                    s = e(this).parents("form").find("input"), l = s.index(e("input:focus")), -1 !== l && (d = s.slice(l + 1), d.length && d.each(function () {
                        var t, n;
                        return n = e(this).attr("type"), t = ["text", "email", "password", "url"], e(this).val() || -1 === t.indexOf(n) ? void 0 : (e(this).focus(), !1)
                    }));
                    break;
                case 27:
                    o.preventDefault();
                    break;
                default:
                    return
            }
        }), t.on("search.typehelper", function () {
            var s, l, c, d;
            if (t = e(this), n = t.find("input"), r = t.find("ul"), n.val().length)if (c = [], i.remoteData)i.remoteData(n.val(), function (t) {
                u = t, c = t, c.length > 0 && (r.children().remove(), e.tmpl(i.tpl, c).appendTo(r), 1 === c.length && r.children().first().addClass("active"))
            }); else {
                for (d = 0, i.emailMode && (i.data = [{name: n.val()}], e.each(a, function (e, t) {
                    i.data.push({name: n.val().replace(/@.*$/, "") + "@" + t})
                })), o = i.data.length, l = 0; o > l && (s = i.data[l], !(0 === s.name.toLowerCase().indexOf(n.val().toLowerCase()) && (c.push(s), d++, d >= i.showNum)));)l++;
                c.length > 0 && (r.children().remove(), e.tmpl(i.tpl, c).appendTo(r), (1 === c.length || i.emailMode) && r.children().first().addClass("active"))
            }
        }), n.val().length > 0 && t.trigger("insert.typehelper", n))
    }
}), define("main", ["sfModal", "mobile", "jquery_hoverIntent", "sfAjax", "bootstrap", "jquery_cookie", "jquery_lazyload", "underscore", "typeHelper"], function (e, t) {
    var n, r, i, o, a, s, l, c, u, d, f, p, h, m, g, v, b, y;
    return $(".menu__item--dotted").on("click", function () {
        var e, t, n;
        return e = $(this), t = e.find(".header__menu--highlight"), t.hasClass("hide") ? void 0 : (n = t.data("mod"), $.cookie("hideDot__" + n, 1, {expires: 365}))
    }), l = {
        note: parseInt(null != (p = $.cookie("hideDot__note")) ? p : 0),
        job: parseInt(null != (h = $.cookie("hideDot__job")) ? h : 0)
    }, d = Date.now(), f = new Date("2015-10-26 00:00").getTime(), f > d && _.each(l, function (e, t) {
        return 0 === e ? $(".header__menu--highlight[data-mod=" + t + "]").removeClass("hide") : void 0
    }), c = function () {
        var e, t, n;
        n = "test", t = window.sessionStorage;
        try {
            return t.setItem(n, "1"), t.removeItem(n), !0
        } catch (r) {
            return e = r, !1
        }
    }, b = function (e) {
        var t;
        if (c() && !(e > 500))return t = localStorage.getItem("show-app-promotion-bar"), t = t || !0, t !== !0 ? $(".app-promotion-bar").hide() : $(".app-promotion-bar").show(), $("body").on("click", ".close", function () {
            return $(".app-promotion-bar").hide(), localStorage.setItem("show-app-promotion-bar", !1)
        }), $("body").on("click", ".icon", function () {
            return $(".app-promotion-bar").hide(), localStorage.setItem("show-app-promotion-bar", !1)
        })
    }, b(document.body.clientWidth), o = function (e) {
        var t, n;
        switch (n = "", t = new Date(e), t.getDay()) {
            case 0:
                n = "周日";
                break;
            case 1:
                n = "周一";
                break;
            case 2:
                n = "周二";
                break;
            case 3:
                n = "周三";
                break;
            case 4:
                n = "周四";
                break;
            case 5:
                n = "周五";
                break;
            case 6:
                n = "周六"
        }
        return n
    }, a = {
        events: function (e) {
            var t;
            t = $("title"), e.data.events > 0 ? (e.data.events > 99 && (e.data.events = "99+"), $("#messageCount").siblings(".has-unread__count").remove(), $("#messageCount").after('<span class="has-unread__count">' + e.data.events + "</span>"), $("#m-messageCount").text(e.data.events), $(".mobile-menu__unreadpoint").show(), t.text(/^\(\d+[\+]?\)/.test(t.text()) ? t.text().replace(/^\(\d+[\+]?\)/, "(" + e.data.events + ")") : "(" + e.data.events + ")" + $("title").text())) : 0 === e.data.events && ($(".has-unread__count").remove(), t.text(t.text().replace(/^\(\d+[\+]?\)/, "")))
        }, drafts: function (e) {
            0 !== e.data.drafts && ($("#draftCount .badge").remove(), $("#draftCount").append('<span class="badge">' + e.data.drafts + "</span>"))
        }, invites: function (e) {
            0 !== e.data.invites && ($("#inviteCount .badge").remove(), $("#inviteCount").append('<span class="badge">' + e.data.invites + "</span>"))
        }
    }, i = function (e, t) {
        return $.ajax({
            dataType: "json", url: "/api/user/stat", data: {types: e}, success: function (e) {
                0 === e.status && e.data && t && t(e)
            }
        })
    }, m = function () {
        i(["events", "drafts", "invites"], function (e) {
            return a.events(e), a.drafts(e), a.invites(e)
        })
    }, g = function () {
        i(["events"], function (e) {
            return a.events(e)
        })
    }, u = function () {
        e({
            modalSize: "modal-lg",
            title: "登录",
            doneText: "登陆",
            hideClose: !0,
            hideDone: !0,
            hideFooter: !0,
            content: $("#loginModal").text(),
            show: function () {
                return $("[name=mail]").first().focus(), $("#loginShowMore").click(function (e) {
                    e.preventDefault(), $(this).hide(), $(this).siblings().removeClass("hidden")
                }), $(".sfmodal .widget-login a").click(function (e) {
                    e.preventDefault(), window.open($(this).attr("href"), "_blank", "toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=500")
                }), $("#loginReloadCaptcha").click(function () {
                    $(this).find("img").attr("src", "/user/captcha?w=240&h=50")
                })
            }
        }), $(".register-mail").typeHelperOld({emailMode: !0, onlyResult: !1})
    }, $(".addWeek").each(function () {
        $(this).append(" " + o($(this).html()))
    }), $('[data-toggle="tooltip"]').tooltip({container: "body"}), $("img.lazy").lazyload({effect: "fadeIn"}), window.oauthLogin = function () {
        -1 !== location.hostname.indexOf("segmentfault") ? location.reload() : location.href = "/"
    }, window.oauthRegister = function () {
        location.href = "/user/bind"
    }, n = {
        _: window.SF.token,
        staticUrl: window.SF.staticUrl,
        userId: $("#SFUserId").attr("value"),
        userRank: $("#SFUserRank").attr("value"),
        renderUserStatEvents: g,
        login: t.login || u
    }, $(document).ajaxError(function (e, t, n) {
        413 === t.status ? ($("#uploading") && $("#uploading").text(""), alert("文件大小或尺寸超出限制，请修改后重新上传！")) : console.log("Ajax " + t.status + ": ", n.url)
    }), $(document).ajaxSend(function (e, t, r) {
        r.url = -1 === r.url.indexOf("?") ? r.url + "?_=" + n._ : r.url + "&_=" + n._
    }), $(document).ajaxComplete(function (t, r, i) {
        var o, a, s, l, c;
        r.responseText && (-1 !== r.responseText.indexOf("<br />") || -1 !== r.responseText.indexOf("<pre>exception ") ? console.log("警告：前方高能！", r.responseText) : r.responseJSON && 0 === r.responseJSON.status ? (-1 === i.url.indexOf("do=autoComplete") || -1 === i.url.indexOf("draft")) && ($(".error, .has-error").removeClass("error has-error"), $(".error--msg").remove()) : r.responseJSON && 1 === r.responseJSON.status && (c = r.responseJSON, -1 === i.url.indexOf("/user/stat") && "login" === c.data[0] ? n.login() : "robot" === c.data[0] ? location.href = "/stop-robot" : "unactivated" === c.data[0] ? $("#activate").modal("show") : "author" === c.data[0] ? e({
            title: "限制作者本人",
            content: "你是作者，无法对自己进行此操作",
            hideDone: !0
        }) : "follow" === c.data[0] ? e({
            title: "限制本人",
            content: "无法对自己进行此操作",
            hideDone: !0
        }) : "rank" === c.data[0] ? e({
            title: "声望值不够",
            content: "此操作要求你的声望值至少达到 " + c.data[1] + '，<a href="http://segmentfault.com/repu">如何获得声望？</a>',
            hideDone: !0
        }) : "like" === c.data[0] ? e({
            title: "无法进行此操作",
            content: "你已经赞过该条目。",
            hideDone: !0
        }) : "blocked" === c.data[0] ? e({
            title: "账号问题",
            content: '你的帐号因未知原因已被系统自动锁定，如需帮助，请发送邮件至 <a target="_blank" href="mailto:pr@segmentfault.com">pr@segmentfault.com</a> 联系管理员解决。',
            hideDone: !0
        }) : "form" === c.data[0] && (l = i.url.split("/")[2], l = l.split("?")[0], a = new RegExp("[?&]_=" + n._), s = i.url.replace(a, ""), o = !0, $.each(c.data[1], function (e, t) {
            var n, r, i, a;
            return "captcha" === e && ($("[name=captcha]").parents(".form-group").show(), $(".captcha").parent("a").click()), i = e.toLowerCase().replace(/\b[a-z]/g, function (e) {
                return e.toUpperCase()
            }), a = "#" + l + i, r = $("form#" + l + " *[name=" + e + "]").not("[type=hidden]").parents(".form-group"), 0 === r.length && (r = $("form#" + l.replace(/s$/, "") + " *[name=" + e + "]").not("[type=hidden]").parents(".form-group")), n = $('form[action="' + s + '"] *[name=' + e + "]").not("[type=hidden]").parents(".form-group"), n.length || (n = $("form *[name=" + e + "]").not("[type=hidden]").parents(".form-group")), n.length ? (n.find(".help-block").remove(), n.addClass("has-error"), n.find(".input-group").length > 0 ? n.find(".input-group").after('<span class="help-block err">' + t + "</span>") : n.find(".bootstrap-tagsinput").length ? n.find(".bootstrap-tagsinput").addClass("error").after('<span class="help-block err">' + t + "</span>") : n.find("[name=" + e + "]").not("[type=hidden]").after('<span class="help-block err">' + t + "</span>")) : r.length ? (r.find(".help-block.err").remove(), r.addClass("has-error"), r.find("[name=" + e + "]").not("[type=hidden]").after('<span class="help-block err">' + t + "</span>")) : ($("form#" + l + " *[name=" + e + "]").not("[type=hidden]").siblings(".error--msg").remove(), $("form#" + l + " *[name=" + e + "]").not("[type=hidden]").addClass("error").attr("data-error", t).after('<span class="error--msg">' + t + "</span>")), $(a).length ? $(a).addClass("error").attr("data-error", t) : (a = "#" + l.replace(/s$/, "") + i, $(a).addClass("error").attr("data-error", t).after('<span class="error--msg">' + t + "</span>")), o ? (n.length && n.find("[name=" + e + "]").not("[type=hidden]").focus(), r.length && r.find("[name=" + e + "]").not("[type=hidden]").focus(), $(a).length && $(a).focus(), o = !1) : void 0
        }))))
    }), $("body").delegate("form", "submit", function (e) {
        var t;
        t = $(this), t.attr("method") && t.attr("action") && (e.preventDefault(), t.find("button[type=submit]").attr("disabled", "disabled"), $.ajax({
            url: t.attr("action"),
            type: t.attr("method"),
            data: t.serialize(),
            success: function (e) {
                t.find("button[type=submit]").removeAttr("disabled"), 0 === e.status && ("/api/user?do=login" === t.attr("action") && "/user/login" !== location.pathname ? window.location.reload() : /^\//.test(e.data) ? window.location = e.data : window.location.reload())
            }
        }))
    }), $("body").delegate("form input", "keydown", function () {
        $(this).removeClass("error"), $(this).parents(".form-group").removeClass("has-error"), $(this).next(".help-block.err").remove(), $(this).next(".error--msg").remove()
    }), r = null, n.userId && (m(), r = setInterval(g, 6e4)), s = void 0, y = void 0, "undefined" != typeof document.hidden ? (s = "hidden", y = "visibilitychange") : "undefined" != typeof document.mozHidden ? (s = "mozHidden", y = "mozvisibilitychange") : "undefined" != typeof document.msHidden ? (s = "msHidden", y = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (s = "webkitHidden", y = "webkitvisibilitychange"), $(document).on(y, function () {
        document[s] ? clearInterval(r) : n.userId ? (m(), r = setInterval(g, 6e4)) : $.getJSON("/api/user/stat", function (e) {
            0 === e.status && ($("body").addClass("have-notify"), $("body").prepend('<div class="alert alert-warning topframe" role="alert">您已登录，请 <button class="btn btn-warning btn-xs" type="button" onclick="location.reload()">重新加载</button></div>'))
        })
    }), $("#searchBox").focus(function () {
        var e;
        e = $(".nav .menu").width() + 180 + "px", $(".nav .menu").hide(), $(this).animate({width: e}, 200)
    }), $("#searchBox").blur(function () {
        $(this).animate({width: "180px"}, 200, "swing", function () {
            $(".nav .menu").show()
        })
    }), $("#backtop").click(function () {
        return $("body,html").animate({scrollTop: 0}), !1
    }), $(document).scroll(function () {
        $(this).scrollTop() > 720 ? $("#backtop").removeClass("hidden") : $("#backtop").addClass("hidden")
    }), $(".topframe").length && $(".topframe .close").click(function () {
        $(this).parent().remove(), 0 !== $(".topframe").length && $(".topframe .content").text() || $("body").removeClass("have-notify")
    }), window.SFHacker = {
        setOldVersion: function () {
            $.cookie("v", "old"), window.location.reload()
        }, unSetOldVersion: function () {
            $.removeCookie("v", {path: "/"}), window.location.reload()
        }, makePureTextarea: function () {
            $.cookie("typemode", "native"), window.location.reload()
        }, unMakePureTextarea: function () {
            $.removeCookie("typemode", {path: "/"}), window.location.reload()
        }
    }, $(".SFLogin").click(function (e) {
        e.preventDefault(), n.login()
    }), $(".3rdLogin").click(function (e) {
        e.preventDefault(), window.open($(this).attr("href"), "_blank", "toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=500")
    }), $(".hoverDropdown").hoverIntent(function () {
        $(this).hasClass("open") || $(this).find(".dropdownBtn").dropdown("toggle")
    }, function () {
        $(this).hasClass("open") && $(this).find(".dropdownBtn").dropdown("toggle")
    }, null, 1), $(".dropdownBtn").click(function (e) {
        var t;
        $(this).parent(".hoverDropdown").hasClass("open") && (e.preventDefault(), t = $(this).attr("href"), e.ctrlKey || e.metaKey ? window.open(t) : location.href = t)
    }), v = function (e, t, n, r) {
        var i;
        return i = e, i.length > 0 && $(".write-btns a").each(function () {
            $(this).click(function () {
                return i.modal("show"), !1
            })
        }), $(".activate-change", i).click(function () {
            $(".activate-showmail").hide(), $(".activate-form").show()
        }), $(".activate-cancel", i).click(function () {
            $(".activate-showmail").show(), $(".activate-form").hide()
        }), $(".activate-form").on("submit", function (e) {
            var t;
            return e.preventDefault(), t = $(this), $.post(n, {mail: t.find(".mail").val()}, function (e) {
                0 === e.status && (t.parent().find(".session-mail").text(t.find(".mail").val()), $(".activate-showmail").show(), $(".activate-form").hide(), location.reload())
            }), !1
        }), $(".activate-resend", i).click(function () {
            var e, n, i, o;
            n = $(this), e = n.siblings("span").find("span"), i = void 0, o = void 0, i = 120, i--, $.post(t, function (t) {
                0 === t.status ? ($(".company-activete-tips").length && $(".company-activete-tips").html('<div class="alert alert-success">' + t.message + "</div>"), r && r(), o = setInterval(function () {
                    return 0 === i ? (clearInterval(o), n.show(), void n.siblings("span").hide()) : void e.text(i--)
                }, 1e3)) : ($(".company-activete-tips").length && $(".company-activete-tips").html('<div class="alert alert-danger">' + t.data[1] + "</div>"), setTimeout(function () {
                    $(".company-activete-tips").length && $(".company-activete-tips").html('<div class="alert alert-success">激活邮件已发送 （<span>120</span>）</div>'), n.show()
                }, 9e5))
            })
        })
    }, v($("#activate"), "/api/user/reactivate", "/api/settings/mail/edit"), v($("#companyActivate"), "/api/company/reactivate", "/api/settings/mail/edit"), n
}), define("bookmark", ["jquery", "sfModal", "main", "jquery_tmpl"], function (e, t) {
    "use strict";
    var n, r;
    return n = '<form class="bookmarklist-form" id="bookmarkArchive"><label for="bookmarkArchiveName" class="required">名称</label>    <input type="text" name="name" id="name" id="bookmarkArchiveName" class="form-control" value="${name}" placeholder="最多输入32个字" maxlength="32">    <br /><label for="bookmarkArchiveDescription" class="mt10">描述</label>    <textarea name="description" id="bookmarkArchiveDescription" class="form-control" placeholder="最多输入256个字">${description}</textarea>    <br /><input type="radio" name="isPrivate" class="mt10" value="0" id="bookmark-public"{{if !isPrivate}} checked{{/if}}/><label class="ml10" for="bookmark-public">公开</label>    <span class="text-muted">&mdash; 公开后不可再设置为私密</span><br />    <input type="radio" name="isPrivate" value="1" id="bookmark-private"{{if isPrivate}} checked{{/if}}{{if !isPrivate}} disabled{{/if}}/><label class="ml10" for="bookmark-private">私密</label>    <span class="text-muted">&mdash; 仅自己可见</span>    </form>', r = '<form class="bookmarklist-form"><p class="required">添加到收藏夹</p><ul class="bookmarklist list-unstyled mb0">    {{each list}}<li data-id="${id}"{{if isBookmarked}}class="active"{{/if}}><input type="checkbox" {{if isBookmarked}}checked{{/if}}>${name}{{if ~~isPrivate}}<span class="text-muted label label-default ml10">私密</span>{{/if}}</li>{{/each}}</ul>    <div class="mt20"><a href="#" class="new-bookmark">+ 创建新收藏夹</a></div></form>', {
        createArchive: function (r, i, o) {
            var a;
            a = this, t({
                title: "创建收藏夹",
                content: e.tmpl(n, {name: "", description: "", isPrivate: !0}),
                doneText: "提交",
                doneFn: function () {
                    var t;
                    t = e(".bookmarklist-form"), e.post("/api/bookmarkArchives/add", {
                        name: t.find("[name=name]").val(),
                        description: t.find("[name=description]").val(),
                        isPrivate: t.find("[name=isPrivate]:checked").val()
                    }, function (e) {
                        0 === e.status && ("edit" === i ? a.editBookmark(r, o) : "bookmark" === i ? a.addBookmark(r, o, e.data.id) : "other" === i ? o(e) : window.location.reload())
                    })
                },
                hide: function () {
                    "edit" === i ? a.editBookmark(r, o) : "bookmark" === i && a.addBookmark(r, o)
                }
            })
        }, editArchive: function (r) {
            t({
                title: "编辑收藏夹",
                $content: e.tmpl(n, {
                    name: r.data("name"),
                    description: r.data("desc"),
                    isPrivate: r.data("isprivate")
                }),
                doneText: "提交",
                doneFn: function () {
                    var t;
                    t = e(".bookmarklist-form"), e.post("/api/bookmarkArchive/" + r.data("id") + "/edit", {
                        name: t.find("[name=name]").val(),
                        description: t.find("[name=description]").val(),
                        isPrivate: t.find("[name=isPrivate]:checked").val()
                    }, function (e) {
                        0 === e.status && window.location.reload()
                    })
                }
            })
        }, deleteArchive: function (n) {
            t({
                title: "删除收藏夹",
                content: '确认要删除收藏夹「<span class="fuckXss"></span>」么？<br /><span class="text-danger">注意：收藏夹下的收藏也会被删除！</span>',
                doneText: "删除",
                doneClass: "btn-danger",
                closeText: "取消",
                show: function () {
                    e(".fuckXss").text(n.data("name"))
                },
                doneFn: function () {
                    e.post("/api/bookmarkArchive/" + n.data("id") + "/delete", function (e) {
                        e.status || (location.href = e.data)
                    })
                }
            })
        }, addBookmark: function (e, t, n) {
            this.getArchive(e, t, "bookmark", n)
        }, editBookmark: function (e, t) {
            this.getArchive(e, t, "edit")
        }, successFn: null, getArchive: function (n, i, o, a) {
            var s;
            s = this, s.successFn = i, e.get("/api/user/bookmarkArchives", {objectId: n.data("id")}, function (l) {
                var c;
                c = "", 0 === l.status && (t({
                    title: "收藏", content: e.tmpl(r), doneText: "提交", doneFn: function () {
                        var r, o, a;
                        o = e(this), e(".bookmarklist").removeClass("error").siblings(".error--msg").remove(), a = [], r = e(".bookmarklist-form").length > 1 ? e(".bookmarklist-form").eq(1) : e(".bookmarklist-form"), r.find("li.active").each(function () {
                            a.push(e(this).data("id"))
                        }), e(".sfmodal").find(".done-btn").text("加载中").attr("disabled", "disabled"), e.post("/api/" + n.data("type") + "/" + n.data("id") + "/bookmark", {archiveIds: a}, function (n) {
                            var r;
                            0 === n.status ? ("false" === n.data && window.location.reload(), i && i(n, a.length), t("hide"), r = location.pathname.split("/"), "bookmark" === r[1] && -1 === a.indexOf(r[2]) && location.reload()) : (e(".bookmarklist").addClass("error").after('<span class="error--msg">必须选择收藏夹</span>'), e(".sfmodal").find(".done-btn").text("发布").removeAttr("disabled"))
                        })
                    }
                }), e(".sfModal-content").html(e.tmpl(r, [{list: l.data}])), e(".bookmarklist").delegate("li", "click", function () {
                    var t;
                    t = e(this).find("input[type=checkbox]"), e(this).toggleClass("active"), e(this).hasClass("active") ? t.prop("checked", !0) : t.prop("checked", !1)
                }), a && e(".bookmarklist li[data-id=" + a + "]").click(), e(".sfmodal .new-bookmark").click(function () {
                    return s.createArchive(n, o, i), !1
                }))
            })
        }, deleteBookmark: function (n) {
            t({
                title: "删除收藏",
                content: '确认要从收藏夹「<span class="delete-archivemodal"></span>」中删除收藏「<span class="delete-bookmarkmodal"></span>」么？',
                doneText: "删除",
                doneClass: "btn-danger",
                closeText: "取消",
                show: function () {
                    e(".delete-archivemodal").text(n.data("archive")), e(".delete-bookmarkmodal").text(n.data("title"))
                },
                doneFn: function () {
                    e.post("/api/" + n.data("type") + "/" + n.data("id") + "/bookmark", {archiveId: null}, function (e) {
                        0 === e.status && (n.parents(".stream-list__item").fadeOut().remove(), t("hide"))
                    })
                }
            })
        }
    }
}), !function (e) {
    "undefined" != typeof exports ? e(exports) : (window.hljs = e({}), "function" == typeof define && define.amd && define("highlightjs", [], function () {
        return window.hljs
    }))
}(function (e) {
    function t(e) {
        return e.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;")
    }

    function n(e) {
        return e.nodeName.toLowerCase()
    }

    function r(e, t) {
        var n = e && e.exec(t);
        return n && 0 == n.index
    }

    function i(e) {
        var t = (e.className + " " + (e.parentNode ? e.parentNode.className : "")).split(/\s+/);
        return t = t.map(function (e) {
            return e.replace(/^lang(uage)?-/, "")
        }), t.filter(function (e) {
            return y(e) || /no(-?)highlight/.test(e)
        })[0]
    }

    function o(e, t) {
        var n = {};
        for (var r in e)n[r] = e[r];
        if (t)for (var r in t)n[r] = t[r];
        return n
    }

    function a(e) {
        var t = [];
        return function r(e, i) {
            for (var o = e.firstChild; o; o = o.nextSibling)3 == o.nodeType ? i += o.nodeValue.length : 1 == o.nodeType && (t.push({
                event: "start",
                offset: i,
                node: o
            }), i = r(o, i), n(o).match(/br|hr|img|input/) || t.push({event: "stop", offset: i, node: o}));
            return i
        }(e, 0), t
    }

    function s(e, r, i) {
        function o() {
            return e.length && r.length ? e[0].offset != r[0].offset ? e[0].offset < r[0].offset ? e : r : "start" == r[0].event ? e : r : e.length ? e : r
        }

        function a(e) {
            function r(e) {
                return " " + e.nodeName + '="' + t(e.value) + '"'
            }

            u += "<" + n(e) + Array.prototype.map.call(e.attributes, r).join("") + ">"
        }

        function s(e) {
            u += "</" + n(e) + ">"
        }

        function l(e) {
            ("start" == e.event ? a : s)(e.node)
        }

        for (var c = 0, u = "", d = []; e.length || r.length;) {
            var f = o();
            if (u += t(i.substr(c, f[0].offset - c)), c = f[0].offset, f == e) {
                d.reverse().forEach(s);
                do l(f.splice(0, 1)[0]), f = o(); while (f == e && f.length && f[0].offset == c);
                d.reverse().forEach(a)
            } else"start" == f[0].event ? d.push(f[0].node) : d.pop(), l(f.splice(0, 1)[0])
        }
        return u + t(i.substr(c))
    }

    function l(e) {
        function t(e) {
            return e && e.source || e
        }

        function n(n, r) {
            return RegExp(t(n), "m" + (e.cI ? "i" : "") + (r ? "g" : ""))
        }

        function r(i, a) {
            if (!i.compiled) {
                if (i.compiled = !0, i.k = i.k || i.bK, i.k) {
                    var s = {}, l = function (t, n) {
                        e.cI && (n = n.toLowerCase()), n.split(" ").forEach(function (e) {
                            var n = e.split("|");
                            s[n[0]] = [t, n[1] ? Number(n[1]) : 1]
                        })
                    };
                    "string" == typeof i.k ? l("keyword", i.k) : Object.keys(i.k).forEach(function (e) {
                        l(e, i.k[e])
                    }), i.k = s
                }
                i.lR = n(i.l || /\b[A-Za-z0-9_]+\b/, !0), a && (i.bK && (i.b = "\\b(" + i.bK.split(" ").join("|") + ")\\b"), i.b || (i.b = /\B|\b/), i.bR = n(i.b), i.e || i.eW || (i.e = /\B|\b/), i.e && (i.eR = n(i.e)), i.tE = t(i.e) || "", i.eW && a.tE && (i.tE += (i.e ? "|" : "") + a.tE)), i.i && (i.iR = n(i.i)), void 0 === i.r && (i.r = 1), i.c || (i.c = []);
                var c = [];
                i.c.forEach(function (e) {
                    e.v ? e.v.forEach(function (t) {
                        c.push(o(e, t))
                    }) : c.push("self" == e ? i : e)
                }), i.c = c, i.c.forEach(function (e) {
                    r(e, i)
                }), i.starts && r(i.starts, a);
                var u = i.c.map(function (e) {
                    return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b
                }).concat([i.tE, i.i]).map(t).filter(Boolean);
                i.t = u.length ? n(u.join("|"), !0) : {
                    exec: function () {
                        return null
                    }
                }
            }
        }

        r(e)
    }

    function c(e, n, i, o) {
        function a(e, t) {
            for (var n = 0; n < t.c.length; n++)if (r(t.c[n].bR, e))return t.c[n]
        }

        function s(e, t) {
            return r(e.eR, t) ? e : e.eW ? s(e.parent, t) : void 0
        }

        function d(e, t) {
            return !i && r(t.iR, e)
        }

        function f(e, t) {
            var n = k.cI ? t[0].toLowerCase() : t[0];
            return e.k.hasOwnProperty(n) && e.k[n]
        }

        function p(e, t, n, r) {
            var i = r ? "" : w.classPrefix, o = '<span class="' + i, a = n ? "" : "</span>";
            return o += e + '">', o + t + a
        }

        function h() {
            if (!x.k)return t($);
            var e = "", n = 0;
            x.lR.lastIndex = 0;
            for (var r = x.lR.exec($); r;) {
                e += t($.substr(n, r.index - n));
                var i = f(x, r);
                i ? (M += i[1], e += p(i[0], t(r[0]))) : e += t(r[0]), n = x.lR.lastIndex, r = x.lR.exec($)
            }
            return e + t($.substr(n))
        }

        function m() {
            if (x.sL && !_[x.sL])return t($);
            var e = x.sL ? c(x.sL, $, !0, C[x.sL]) : u($);
            return x.r > 0 && (M += e.r), "continuous" == x.subLanguageMode && (C[x.sL] = e.top), p(e.language, e.value, !1, !0)
        }

        function g() {
            return void 0 !== x.sL ? m() : h()
        }

        function v(e, n) {
            var r = e.cN ? p(e.cN, "", !0) : "";
            e.rB ? (S += r, $ = "") : e.eB ? (S += t(n) + r, $ = "") : (S += r, $ = n), x = Object.create(e, {parent: {value: x}})
        }

        function b(e, n) {
            if ($ += e, void 0 === n)return S += g(), 0;
            var r = a(n, x);
            if (r)return S += g(), v(r, n), r.rB ? 0 : n.length;
            var i = s(x, n);
            if (i) {
                var o = x;
                o.rE || o.eE || ($ += n), S += g();
                do x.cN && (S += "</span>"), M += x.r, x = x.parent; while (x != i.parent);
                return o.eE && (S += t(n)), $ = "", i.starts && v(i.starts, ""), o.rE ? 0 : n.length
            }
            if (d(n, x))throw new Error('Illegal lexeme "' + n + '" for mode "' + (x.cN || "<unnamed>") + '"');
            return $ += n, n.length || 1
        }

        var k = y(e);
        if (!k)throw new Error('Unknown language: "' + e + '"');
        l(k);
        for (var x = o || k, C = {}, S = "", T = x; T != k; T = T.parent)T.cN && (S = p(T.cN, "", !0) + S);
        var $ = "", M = 0;
        try {
            for (var E, L, N = 0; x.t.lastIndex = N, E = x.t.exec(n), E;)L = b(n.substr(N, E.index - N), E[0]), N = E.index + L;
            b(n.substr(N));
            for (var T = x; T.parent; T = T.parent)T.cN && (S += "</span>");
            return {r: M, value: S, language: e, top: x}
        } catch (I) {
            if (-1 != I.message.indexOf("Illegal"))return {r: 0, value: t(n)};
            throw I
        }
    }

    function u(e, n) {
        n = n || w.languages || Object.keys(_);
        var r = {r: 0, value: t(e)}, i = r;
        return n.forEach(function (t) {
            if (y(t)) {
                var n = c(t, e, !1);
                n.language = t, n.r > i.r && (i = n), n.r > r.r && (i = r, r = n)
            }
        }), i.language && (r.second_best = i), r
    }

    function d(e) {
        return w.tabReplace && (e = e.replace(/^((<[^>]+>|\t)+)/gm, function (e, t) {
            return t.replace(/\t/g, w.tabReplace)
        })), w.useBR && (e = e.replace(/\n/g, "<br>")), e
    }

    function f(e, t, n) {
        var r = t ? k[t] : n, i = [e.trim()];
        return e.match(/(\s|^)hljs(\s|$)/) || i.push("hljs"), r && i.push(r), i.join(" ").trim()
    }

    function p(e) {
        var t = i(e);
        if (!/no(-?)highlight/.test(t)) {
            var n;
            w.useBR ? (n = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), n.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n")) : n = e;
            var r = n.textContent, o = t ? c(t, r, !0) : u(r), l = a(n);
            if (l.length) {
                var p = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
                p.innerHTML = o.value, o.value = s(l, a(p), r)
            }
            o.value = d(o.value), e.innerHTML = o.value, e.className = f(e.className, t, o.language), e.result = {
                language: o.language,
                re: o.r
            }, o.second_best && (e.second_best = {language: o.second_best.language, re: o.second_best.r})
        }
    }

    function h(e) {
        w = o(w, e)
    }

    function m() {
        if (!m.called) {
            m.called = !0;
            var e = document.querySelectorAll("pre code");
            Array.prototype.forEach.call(e, p)
        }
    }

    function g() {
        addEventListener("DOMContentLoaded", m, !1), addEventListener("load", m, !1)
    }

    function v(t, n) {
        var r = _[t] = n(e);
        r.aliases && r.aliases.forEach(function (e) {
            k[e] = t
        })
    }

    function b() {
        return Object.keys(_)
    }

    function y(e) {
        return _[e] || _[k[e]]
    }

    var w = {classPrefix: "hljs-", tabReplace: null, useBR: !1, languages: void 0}, _ = {}, k = {};
    return e.highlight = c, e.highlightAuto = u, e.fixMarkup = d, e.highlightBlock = p, e.configure = h, e.initHighlighting = m, e.initHighlightingOnLoad = g, e.registerLanguage = v, e.listLanguages = b, e.getLanguage = y, e.inherit = o, e.IR = "[a-zA-Z][a-zA-Z0-9_]*", e.UIR = "[a-zA-Z_][a-zA-Z0-9_]*", e.NR = "\\b\\d+(\\.\\d+)?", e.CNR = "(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", e.BNR = "\\b(0b[01]+)", e.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", e.BE = {
        b: "\\\\[\\s\\S]",
        r: 0
    }, e.ASM = {cN: "string", b: "'", e: "'", i: "\\n", c: [e.BE]}, e.QSM = {
        cN: "string",
        b: '"',
        e: '"',
        i: "\\n",
        c: [e.BE]
    }, e.PWM = {b: /\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/}, e.CLCM = {
        cN: "comment",
        b: "//",
        e: "$",
        c: [e.PWM]
    }, e.CBCM = {cN: "comment", b: "/\\*", e: "\\*/", c: [e.PWM]}, e.HCM = {
        cN: "comment",
        b: "#",
        e: "$",
        c: [e.PWM]
    }, e.NM = {cN: "number", b: e.NR, r: 0}, e.CNM = {cN: "number", b: e.CNR, r: 0}, e.BNM = {
        cN: "number",
        b: e.BNR,
        r: 0
    }, e.CSSNM = {
        cN: "number",
        b: e.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
        r: 0
    }, e.RM = {
        cN: "regexp",
        b: /\//,
        e: /\/[gimuy]*/,
        i: /\n/,
        c: [e.BE, {b: /\[/, e: /\]/, r: 0, c: [e.BE]}]
    }, e.TM = {cN: "title", b: e.IR, r: 0}, e.UTM = {cN: "title", b: e.UIR, r: 0}, e
}), hljs.registerLanguage("coffeescript", function (e) {
    var t = {
        keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",
        literal: "true false null undefined yes no on off",
        reserved: "case default function var void with const let enum export import native __hasProp __extends __slice __bind __indexOf",
        built_in: "npm require console print module global window document"
    }, n = "[A-Za-z$_][0-9A-Za-z$_]*", r = {
        cN: "subst",
        b: /#\{/,
        e: /}/,
        k: t
    }, i = [e.BNM, e.inherit(e.CNM, {starts: {e: "(\\s*/)?", r: 0}}), {
        cN: "string",
        v: [{b: /'''/, e: /'''/, c: [e.BE]}, {b: /'/, e: /'/, c: [e.BE]}, {b: /"""/, e: /"""/, c: [e.BE, r]}, {
            b: /"/,
            e: /"/,
            c: [e.BE, r]
        }]
    }, {
        cN: "regexp",
        v: [{b: "///", e: "///", c: [r, e.HCM]}, {b: "//[gim]*", r: 0}, {b: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/}]
    }, {cN: "property", b: "@" + n}, {b: "`", e: "`", eB: !0, eE: !0, sL: "javascript"}];
    r.c = i;
    var o = e.inherit(e.TM, {b: n}), a = "(\\(.*\\))?\\s*\\B[-=]>", s = {
        cN: "params",
        b: "\\([^\\(]",
        rB: !0,
        c: [{b: /\(/, e: /\)/, k: t, c: ["self"].concat(i)}]
    };
    return {
        aliases: ["coffee", "cson", "iced"],
        k: t,
        i: /\/\*/,
        c: i.concat([{cN: "comment", b: "###", e: "###", c: [e.PWM]}, e.HCM, {
            cN: "function",
            b: "^\\s*" + n + "\\s*=\\s*" + a,
            e: "[-=]>",
            rB: !0,
            c: [o, s]
        }, {b: /[:\(,=]\s*/, r: 0, c: [{cN: "function", b: a, e: "[-=]>", rB: !0, c: [s]}]}, {
            cN: "class",
            bK: "class",
            e: "$",
            i: /[:="\[\]]/,
            c: [{bK: "extends", eW: !0, i: /[:="\[\]]/, c: [o]}, o]
        }, {cN: "attribute", b: n + ":", e: ":", rB: !0, rE: !0, r: 0}])
    }
}), hljs.registerLanguage("apache", function (e) {
    var t = {cN: "number", b: "[\\$%]\\d+"};
    return {
        aliases: ["apacheconf"],
        cI: !0,
        c: [e.HCM, {cN: "tag", b: "</?", e: ">"}, {
            cN: "keyword",
            b: /\w+/,
            r: 0,
            k: {common: "order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"},
            starts: {
                e: /$/,
                r: 0,
                k: {literal: "on off all"},
                c: [{cN: "sqbracket", b: "\\s\\[", e: "\\]$"}, {
                    cN: "cbracket",
                    b: "[\\$%]\\{",
                    e: "\\}",
                    c: ["self", t]
                }, t, e.QSM]
            }
        }],
        i: /\S/
    }
}), hljs.registerLanguage("http", function () {
    return {
        i: "\\S",
        c: [{cN: "status", b: "^HTTP/[0-9\\.]+", e: "$", c: [{cN: "number", b: "\\b\\d{3}\\b"}]}, {
            cN: "request",
            b: "^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",
            rB: !0,
            e: "$",
            c: [{cN: "string", b: " ", e: " ", eB: !0, eE: !0}]
        }, {cN: "attribute", b: "^\\w", e: ": ", eE: !0, i: "\\n|\\s|=", starts: {cN: "string", e: "$"}}, {
            b: "\\n\\n",
            starts: {sL: "", eW: !0}
        }]
    }
}), hljs.registerLanguage("cs", function (e) {
    var t = "abstract as base bool break byte case catch char checked const continue decimal default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long null object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async protected public private internal ascending descending from get group into join let orderby partial select set value var where yield", n = e.IR + "(<" + e.IR + ">)?";
    return {
        aliases: ["csharp"],
        k: t,
        i: /::/,
        c: [{
            cN: "comment",
            b: "///",
            e: "$",
            rB: !0,
            c: [{cN: "xmlDocTag", v: [{b: "///", r: 0}, {b: "<!--|-->"}, {b: "</?", e: ">"}]}]
        }, e.CLCM, e.CBCM, {
            cN: "preprocessor",
            b: "#",
            e: "$",
            k: "if else elif endif define undef warning error line region endregion pragma checksum"
        }, {cN: "string", b: '@"', e: '"', c: [{b: '""'}]}, e.ASM, e.QSM, e.CNM, {
            bK: "class namespace interface",
            e: /[{;=]/,
            i: /[^\s:]/,
            c: [e.TM, e.CLCM, e.CBCM]
        }, {bK: "new return throw await", r: 0}, {
            cN: "function",
            b: "(" + n + "\\s+)+" + e.IR + "\\s*\\(",
            rB: !0,
            e: /[{;=]/,
            eE: !0,
            k: t,
            c: [{b: e.IR + "\\s*\\(", rB: !0, c: [e.TM], r: 0}, {
                cN: "params",
                b: /\(/,
                e: /\)/,
                k: t,
                r: 0,
                c: [e.ASM, e.QSM, e.CNM, e.CBCM]
            }, e.CLCM, e.CBCM]
        }]
    }
}), hljs.registerLanguage("java", function (e) {
    var t = e.UIR + "(<" + e.UIR + ">)?", n = "false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private", r = "(\\b(0b[01_]+)|\\b0[xX][a-fA-F0-9_]+|(\\b[\\d_]+(\\.[\\d_]*)?|\\.[\\d_]+)([eE][-+]?\\d+)?)[lLfF]?", i = {
        cN: "number",
        b: r,
        r: 0
    };
    return {
        aliases: ["jsp"],
        k: n,
        i: /<\//,
        c: [{
            cN: "javadoc",
            b: "/\\*\\*",
            e: "\\*/",
            r: 0,
            c: [{cN: "javadoctag", b: "(^|\\s)@[A-Za-z]+"}]
        }, e.CLCM, e.CBCM, e.ASM, e.QSM, {
            cN: "class",
            bK: "class interface",
            e: /[{;=]/,
            eE: !0,
            k: "class interface",
            i: /[:"\[\]]/,
            c: [{bK: "extends implements"}, e.UTM]
        }, {bK: "new throw return", r: 0}, {
            cN: "function",
            b: "(" + t + "\\s+)+" + e.UIR + "\\s*\\(",
            rB: !0,
            e: /[{;=]/,
            eE: !0,
            k: n,
            c: [{b: e.UIR + "\\s*\\(", rB: !0, r: 0, c: [e.UTM]}, {
                cN: "params",
                b: /\(/,
                e: /\)/,
                k: n,
                r: 0,
                c: [e.ASM, e.QSM, e.CNM, e.CBCM]
            }, e.CLCM, e.CBCM]
        }, i, {cN: "annotation", b: "@[A-Za-z]+"}]
    }
}), hljs.registerLanguage("sql", function (e) {
    var t = {cN: "comment", b: "--", e: "$"};
    return {
        cI: !0,
        i: /[<>]/,
        c: [{
            cN: "operator",
            bK: "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate savepoint release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup",
            e: /;/,
            eW: !0,
            k: {
                keyword: "abs absolute acos action add adddate addtime aes_decrypt aes_encrypt after aggregate all allocate alter analyze and any are as asc ascii asin assertion at atan atan2 atn2 authorization authors avg backup before begin benchmark between bin binlog bit_and bit_count bit_length bit_or bit_xor both by cache call cascade cascaded case cast catalog ceil ceiling chain change changed char_length character_length charindex charset check checksum checksum_agg choose close coalesce coercibility collate collation collationproperty column columns columns_updated commit compress concat concat_ws concurrent connect connection connection_id consistent constraint constraints continue contributors conv convert convert_tz corresponding cos cot count count_big crc32 create cross cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime data database databases datalength date_add date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts datetimeoffsetfromparts day dayname dayofmonth dayofweek dayofyear deallocate declare decode default deferrable deferred degrees delayed delete des_decrypt des_encrypt des_key_file desc describe descriptor diagnostics difference disconnect distinct distinctrow div do domain double drop dumpfile each else elt enclosed encode encrypt end end-exec engine engines eomonth errors escape escaped event eventdata events except exception exec execute exists exp explain export_set extended external extract fast fetch field fields find_in_set first first_value floor flush for force foreign format found found_rows from from_base64 from_days from_unixtime full function get get_format get_lock getdate getutcdate global go goto grant grants greatest group group_concat grouping grouping_id gtid_subset gtid_subtract handler having help hex high_priority hosts hour ident_current ident_incr ident_seed identified identity if ifnull ignore iif ilike immediate in index indicator inet6_aton inet6_ntoa inet_aton inet_ntoa infile initially inner innodb input insert install instr intersect into is is_free_lock is_ipv4 is_ipv4_compat is_ipv4_mapped is_not is_not_null is_used_lock isdate isnull isolation join key kill language last last_day last_insert_id last_value lcase lead leading least leaves left len lenght level like limit lines ln load load_file local localtime localtimestamp locate lock log log10 log2 logfile logs low_priority lower lpad ltrim make_set makedate maketime master master_pos_wait match matched max md5 medium merge microsecond mid min minute mod mode module month monthname mutex name_const names national natural nchar next no no_write_to_binlog not now nullif nvarchar oct octet_length of old_password on only open optimize option optionally or ord order outer outfile output pad parse partial partition password patindex percent_rank percentile_cont percentile_disc period_add period_diff pi plugin position pow power pragma precision prepare preserve primary prior privileges procedure procedure_analyze processlist profile profiles public publishingservername purge quarter query quick quote quotename radians rand read references regexp relative relaylog release release_lock rename repair repeat replace replicate reset restore restrict return returns reverse revoke right rlike rollback rollup round row row_count rows rpad rtrim savepoint schema scroll sec_to_time second section select serializable server session session_user set sha sha1 sha2 share show sign sin size slave sleep smalldatetimefromparts snapshot some soname soundex sounds_like space sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sql_variant_property sqlstate sqrt square start starting status std stddev stddev_pop stddev_samp stdev stdevp stop str str_to_date straight_join strcmp string stuff subdate substr substring subtime subtring_index sum switchoffset sysdate sysdatetime sysdatetimeoffset system_user sysutcdatetime table tables tablespace tan temporary terminated tertiary_weights then time time_format time_to_sec timediff timefromparts timestamp timestampadd timestampdiff timezone_hour timezone_minute to to_base64 to_days to_seconds todatetimeoffset trailing transaction translation trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse ucase uncompress uncompressed_length unhex unicode uninstall union unique unix_timestamp unknown unlock update upgrade upped upper usage use user user_resources using utc_date utc_time utc_timestamp uuid uuid_short validate_password_strength value values var var_pop var_samp variables variance varp version view warnings week weekday weekofyear weight_string when whenever where with work write xml xor year yearweek zon",
                literal: "true false null",
                built_in: "array bigint binary bit blob boolean char character date dec decimal float int integer interval number numeric real serial smallint varchar varying int8 serial8 text"
            },
            c: [{cN: "string", b: "'", e: "'", c: [e.BE, {b: "''"}]}, {
                cN: "string",
                b: '"',
                e: '"',
                c: [e.BE, {b: '""'}]
            }, {cN: "string", b: "`", e: "`", c: [e.BE]}, e.CNM, e.CBCM, t]
        }, e.CBCM, t]
    }
}), hljs.registerLanguage("nginx", function (e) {
    var t = {cN: "variable", v: [{b: /\$\d+/}, {b: /\$\{/, e: /}/}, {b: "[\\$\\@]" + e.UIR}]}, n = {
        eW: !0,
        l: "[a-z/_]+",
        k: {built_in: "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"},
        r: 0,
        i: "=>",
        c: [e.HCM, {cN: "string", c: [e.BE, t], v: [{b: /"/, e: /"/}, {b: /'/, e: /'/}]}, {
            cN: "url",
            b: "([a-z]+):/",
            e: "\\s",
            eW: !0,
            eE: !0,
            c: [t]
        }, {
            cN: "regexp",
            c: [e.BE, t],
            v: [{b: "\\s\\^", e: "\\s|{|;", rE: !0}, {
                b: "~\\*?\\s+",
                e: "\\s|{|;",
                rE: !0
            }, {b: "\\*(\\.[a-z\\-]+)+"}, {b: "([a-z\\-]+\\.)+\\*"}]
        }, {cN: "number", b: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"}, {
            cN: "number",
            b: "\\b\\d+[kKmMgGdshdwy]*\\b",
            r: 0
        }, t]
    };
    return {
        aliases: ["nginxconf"],
        c: [e.HCM, {b: e.UIR + "\\s", e: ";|{", rB: !0, c: [{cN: "title", b: e.UIR, starts: n}], r: 0}],
        i: "[^\\s\\}]"
    }
}), hljs.registerLanguage("xml", function () {
    var e = "[A-Za-z0-9\\._:-]+", t = {
        b: /<\?(php)?(?!\w)/,
        e: /\?>/,
        sL: "php",
        subLanguageMode: "continuous"
    }, n = {
        eW: !0,
        i: /</,
        r: 0,
        c: [t, {cN: "attribute", b: e, r: 0}, {
            b: "=",
            r: 0,
            c: [{cN: "value", c: [t], v: [{b: /"/, e: /"/}, {b: /'/, e: /'/}, {b: /[^\s\/>]+/}]}]
        }]
    };
    return {
        aliases: ["html", "xhtml", "rss", "atom", "xsl", "plist"],
        cI: !0,
        c: [{cN: "doctype", b: "<!DOCTYPE", e: ">", r: 10, c: [{b: "\\[", e: "\\]"}]}, {
            cN: "comment",
            b: "<!--",
            e: "-->",
            r: 10
        }, {cN: "cdata", b: "<\\!\\[CDATA\\[", e: "\\]\\]>", r: 10}, {
            cN: "tag",
            b: "<style(?=\\s|>|$)",
            e: ">",
            k: {title: "style"},
            c: [n],
            starts: {e: "</style>", rE: !0, sL: "css"}
        }, {
            cN: "tag",
            b: "<script(?=\\s|>|$)",
            e: ">",
            k: {title: "script"},
            c: [n],
            starts: {e: "</script>", rE: !0, sL: "javascript"}
        }, t, {cN: "pi", b: /<\?\w+/, e: /\?>/, r: 10}, {
            cN: "tag",
            b: "</?",
            e: "/?>",
            c: [{cN: "title", b: /[^ \/><\n\t]+/, r: 0}, n]
        }]
    }
}), hljs.registerLanguage("diff", function () {
    return {
        aliases: ["patch"],
        c: [{
            cN: "chunk",
            r: 10,
            v: [{b: /^\@\@ +\-\d+,\d+ +\+\d+,\d+ +\@\@$/}, {b: /^\*\*\* +\d+,\d+ +\*\*\*\*$/}, {b: /^\-\-\- +\d+,\d+ +\-\-\-\-$/}]
        }, {
            cN: "header",
            v: [{b: /Index: /, e: /$/}, {b: /=====/, e: /=====$/}, {b: /^\-\-\-/, e: /$/}, {
                b: /^\*{3} /,
                e: /$/
            }, {b: /^\+\+\+/, e: /$/}, {b: /\*{5}/, e: /\*{5}$/}]
        }, {cN: "addition", b: "^\\+", e: "$"}, {cN: "deletion", b: "^\\-", e: "$"}, {cN: "change", b: "^\\!", e: "$"}]
    }
}), hljs.registerLanguage("javascript", function (e) {
    return {
        aliases: ["js"],
        k: {
            keyword: "in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class",
            literal: "true false null undefined NaN Infinity",
            built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document"
        },
        c: [{
            cN: "pi",
            r: 10,
            v: [{b: /^\s*('|")use strict('|")/}, {b: /^\s*('|")use asm('|")/}]
        }, e.ASM, e.QSM, e.CLCM, e.CBCM, e.CNM, {
            b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
            k: "return throw case",
            c: [e.CLCM, e.CBCM, e.RM, {b: /</, e: />;/, r: 0, sL: "xml"}],
            r: 0
        }, {
            cN: "function",
            bK: "function",
            e: /\{/,
            eE: !0,
            c: [e.inherit(e.TM, {b: /[A-Za-z$_][0-9A-Za-z$_]*/}), {
                cN: "params",
                b: /\(/,
                e: /\)/,
                c: [e.CLCM, e.CBCM],
                i: /["'\(]/
            }],
            i: /\[|%/
        }, {b: /\$[(.]/}, {b: "\\." + e.IR, r: 0}]
    }
}), hljs.registerLanguage("bash", function (e) {
    var t = {cN: "variable", v: [{b: /\$[\w\d#@][\w\d_]*/}, {b: /\$\{(.*?)\}/}]}, n = {
        cN: "string",
        b: /"/,
        e: /"/,
        c: [e.BE, t, {cN: "variable", b: /\$\(/, e: /\)/, c: [e.BE]}]
    }, r = {cN: "string", b: /'/, e: /'/};
    return {
        aliases: ["sh", "zsh"],
        l: /-?[a-z\.]+/,
        k: {
            keyword: "if then else elif fi for while in do done case esac function",
            literal: "true false",
            built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
            operator: "-ne -eq -lt -gt -f -d -e -s -l -a"
        },
        c: [{cN: "shebang", b: /^#![^\n]+sh\s*$/, r: 10}, {
            cN: "function",
            b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
            rB: !0,
            c: [e.inherit(e.TM, {b: /\w[\w\d_]*/})],
            r: 0
        }, e.HCM, e.NM, n, r, t]
    }
}), hljs.registerLanguage("objectivec", function (e) {
    var t = {
        keyword: "int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required",
        literal: "false true FALSE TRUE nil YES NO NULL",
        built_in: "NSString NSData NSDictionary CGRect CGPoint UIButton UILabel UITextView UIWebView MKMapView NSView NSViewController NSWindow NSWindowController NSSet NSUUID NSIndexSet UISegmentedControl NSObject UITableViewDelegate UITableViewDataSource NSThread UIActivityIndicator UITabbar UIToolBar UIBarButtonItem UIImageView NSAutoreleasePool UITableView BOOL NSInteger CGFloat NSException NSLog NSMutableString NSMutableArray NSMutableDictionary NSURL NSIndexPath CGSize UITableViewCell UIView UIViewController UINavigationBar UINavigationController UITabBarController UIPopoverController UIPopoverControllerDelegate UIImage NSNumber UISearchBar NSFetchedResultsController NSFetchedResultsChangeType UIScrollView UIScrollViewDelegate UIEdgeInsets UIColor UIFont UIApplication NSNotFound NSNotificationCenter NSNotification UILocalNotification NSBundle NSFileManager NSTimeInterval NSDate NSCalendar NSUserDefaults UIWindow NSRange NSArray NSError NSURLRequest NSURLConnection NSURLSession NSURLSessionDataTask NSURLSessionDownloadTask NSURLSessionUploadTask NSURLResponseUIInterfaceOrientation MPMoviePlayerController dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"
    }, n = /[a-zA-Z@][a-zA-Z0-9_]*/, r = "@interface @class @protocol @implementation";
    return {
        aliases: ["m", "mm", "objc", "obj-c"],
        k: t,
        l: n,
        i: "</",
        c: [e.CLCM, e.CBCM, e.CNM, e.QSM, {
            cN: "string",
            v: [{b: '@"', e: '"', i: "\\n", c: [e.BE]}, {b: "'", e: "[^\\\\]'", i: "[^\\\\][^']"}]
        }, {
            cN: "preprocessor",
            b: "#",
            e: "$",
            c: [{cN: "title", v: [{b: '"', e: '"'}, {b: "<", e: ">"}]}]
        }, {
            cN: "class",
            b: "(" + r.split(" ").join("|") + ")\\b",
            e: "({|$)",
            eE: !0,
            k: r,
            l: n,
            c: [e.UTM]
        }, {cN: "variable", b: "\\." + e.UIR, r: 0}]
    }
}), hljs.registerLanguage("markdown", function () {
    return {
        aliases: ["md", "mkdown", "mkd"],
        c: [{cN: "header", v: [{b: "^#{1,6}", e: "$"}, {b: "^.+?\\n[=-]{2,}$"}]}, {
            b: "<",
            e: ">",
            sL: "xml",
            r: 0
        }, {cN: "bullet", b: "^([*+-]|(\\d+\\.))\\s+"}, {cN: "strong", b: "[*_]{2}.+?[*_]{2}"}, {
            cN: "emphasis",
            v: [{b: "\\*.+?\\*"}, {b: "_.+?_", r: 0}]
        }, {cN: "blockquote", b: "^>\\s+", e: "$"}, {
            cN: "code",
            v: [{b: "`.+?`"}, {b: "^( {4}|	)", e: "$", r: 0}]
        }, {cN: "horizontal_rule", b: "^[-\\*]{3,}", e: "$"}, {
            b: "\\[.+?\\][\\(\\[].*?[\\)\\]]",
            rB: !0,
            c: [{cN: "link_label", b: "\\[", e: "\\]", eB: !0, rE: !0, r: 0}, {
                cN: "link_url",
                b: "\\]\\(",
                e: "\\)",
                eB: !0,
                eE: !0
            }, {cN: "link_reference", b: "\\]\\[", e: "\\]", eB: !0, eE: !0}],
            r: 10
        }, {
            b: "^\\[.+\\]:",
            rB: !0,
            c: [{cN: "link_reference", b: "\\[", e: "\\]:", eB: !0, eE: !0, starts: {cN: "link_url", e: "$"}}]
        }]
    }
}), hljs.registerLanguage("json", function (e) {
    var t = {literal: "true false null"}, n = [e.QSM, e.CNM], r = {
        cN: "value",
        e: ",",
        eW: !0,
        eE: !0,
        c: n,
        k: t
    }, i = {
        b: "{",
        e: "}",
        c: [{cN: "attribute", b: '\\s*"', e: '"\\s*:\\s*', eB: !0, eE: !0, c: [e.BE], i: "\\n", starts: r}],
        i: "\\S"
    }, o = {b: "\\[", e: "\\]", c: [e.inherit(r, {cN: null})], i: "\\S"};
    return n.splice(n.length, 0, i, o), {c: n, k: t, i: "\\S"}
}), hljs.registerLanguage("python", function (e) {
    var t = {cN: "prompt", b: /^(>>>|\.\.\.) /}, n = {
        cN: "string",
        c: [e.BE],
        v: [{b: /(u|b)?r?'''/, e: /'''/, c: [t], r: 10}, {b: /(u|b)?r?"""/, e: /"""/, c: [t], r: 10}, {
            b: /(u|r|ur)'/,
            e: /'/,
            r: 10
        }, {b: /(u|r|ur)"/, e: /"/, r: 10}, {b: /(b|br)'/, e: /'/}, {b: /(b|br)"/, e: /"/}, e.ASM, e.QSM]
    }, r = {
        cN: "number",
        r: 0,
        v: [{b: e.BNR + "[lLjJ]?"}, {b: "\\b(0o[0-7]+)[lLjJ]?"}, {b: e.CNR + "[lLjJ]?"}]
    }, i = {cN: "params", b: /\(/, e: /\)/, c: ["self", t, r, n]};
    return {
        aliases: ["py", "gyp"],
        k: {
            keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10 None True False",
            built_in: "Ellipsis NotImplemented"
        },
        i: /(<\/|->|\?)/,
        c: [t, r, n, e.HCM, {
            v: [{cN: "function", bK: "def", r: 10}, {cN: "class", bK: "class"}],
            e: /:/,
            i: /[${=;\n]/,
            c: [e.UTM, i]
        }, {cN: "decorator", b: /@/, e: /$/}, {b: /\b(print|exec)\(/}]
    }
}), hljs.registerLanguage("ruby", function (e) {
    var t = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?", n = "and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor", r = {
        cN: "yardoctag",
        b: "@[A-Za-z]+"
    }, i = {cN: "value", b: "#<", e: ">"}, o = {
        cN: "comment",
        v: [{b: "#", e: "$", c: [r]}, {b: "^\\=begin", e: "^\\=end", c: [r], r: 10}, {b: "^__END__", e: "\\n$"}]
    }, a = {cN: "subst", b: "#\\{", e: "}", k: n}, s = {
        cN: "string",
        c: [e.BE, a],
        v: [{b: /'/, e: /'/}, {b: /"/, e: /"/}, {b: /`/, e: /`/}, {b: "%[qQwWx]?\\(", e: "\\)"}, {
            b: "%[qQwWx]?\\[",
            e: "\\]"
        }, {b: "%[qQwWx]?{", e: "}"}, {b: "%[qQwWx]?<", e: ">"}, {b: "%[qQwWx]?/", e: "/"}, {
            b: "%[qQwWx]?%",
            e: "%"
        }, {b: "%[qQwWx]?-", e: "-"}, {
            b: "%[qQwWx]?\\|",
            e: "\\|"
        }, {b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/}]
    }, l = {cN: "params", b: "\\(", e: "\\)", k: n}, c = [s, i, o, {
        cN: "class",
        bK: "class module",
        e: "$|;",
        i: /=/,
        c: [e.inherit(e.TM, {b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"}), {
            cN: "inheritance",
            b: "<\\s*",
            c: [{cN: "parent", b: "(" + e.IR + "::)?" + e.IR}]
        }, o]
    }, {cN: "function", bK: "def", e: " |$|;", r: 0, c: [e.inherit(e.TM, {b: t}), l, o]}, {
        cN: "constant",
        b: "(::)?(\\b[A-Z]\\w*(::)?)+",
        r: 0
    }, {cN: "symbol", b: e.UIR + "(\\!|\\?)?:", r: 0}, {cN: "symbol", b: ":", c: [s, {b: t}], r: 0}, {
        cN: "number",
        b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
        r: 0
    }, {cN: "variable", b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"}, {
        b: "(" + e.RSR + ")\\s*",
        c: [i, o, {
            cN: "regexp",
            c: [e.BE, a],
            i: /\n/,
            v: [{b: "/", e: "/[a-z]*"}, {b: "%r{", e: "}[a-z]*"}, {b: "%r\\(", e: "\\)[a-z]*"}, {
                b: "%r!",
                e: "![a-z]*"
            }, {b: "%r\\[", e: "\\][a-z]*"}]
        }],
        r: 0
    }];
    a.c = c, l.c = c;
    var u = "[>?]>", d = "[\\w#]+\\(\\w+\\):\\d+:\\d+>", f = "(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>", p = [{
        b: /^\s*=>/,
        cN: "status",
        starts: {e: "$", c: c}
    }, {cN: "prompt", b: "^(" + u + "|" + d + "|" + f + ")", starts: {e: "$", c: c}}];
    return {aliases: ["rb", "gemspec", "podspec", "thor", "irb"], k: n, c: [o].concat(p).concat(c)}
}), hljs.registerLanguage("cpp", function (e) {
    var t = {
        keyword: "false int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using true class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue wchar_t inline delete alignof char16_t char32_t constexpr decltype noexcept nullptr static_assert thread_local restrict _Bool complex _Complex _Imaginaryintmax_t uintmax_t int8_t uint8_t int16_t uint16_t int32_t uint32_t  int64_t uint64_tint_least8_t uint_least8_t int_least16_t uint_least16_t int_least32_t uint_least32_tint_least64_t uint_least64_t int_fast8_t uint_fast8_t int_fast16_t uint_fast16_t int_fast32_tuint_fast32_t int_fast64_t uint_fast64_t intptr_t uintptr_t atomic_bool atomic_char atomic_scharatomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llongatomic_ullong atomic_wchar_t atomic_char16_t atomic_char32_t atomic_intmax_t atomic_uintmax_tatomic_intptr_t atomic_uintptr_t atomic_size_t atomic_ptrdiff_t atomic_int_least8_t atomic_int_least16_tatomic_int_least32_t atomic_int_least64_t atomic_uint_least8_t atomic_uint_least16_t atomic_uint_least32_tatomic_uint_least64_t atomic_int_fast8_t atomic_int_fast16_t atomic_int_fast32_t atomic_int_fast64_tatomic_uint_fast8_t atomic_uint_fast16_t atomic_uint_fast32_t atomic_uint_fast64_t",
        built_in: "std string cin cout cerr clog stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf"
    };
    return {
        aliases: ["c", "h", "c++", "h++"],
        k: t,
        i: "</",
        c: [e.CLCM, e.CBCM, e.QSM, {cN: "string", b: "'\\\\?.", e: "'", i: "."}, {
            cN: "number",
            b: "\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"
        }, e.CNM, {
            cN: "preprocessor",
            b: "#",
            e: "$",
            k: "if else elif endif define undef warning error line pragma",
            c: [{b: 'include\\s*[<"]', e: '[>"]', k: "include", i: "\\n"}, e.CLCM]
        }, {
            cN: "stl_container",
            b: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
            e: ">",
            k: t,
            c: ["self"]
        }, {b: e.IR + "::"}, {bK: "new throw return", r: 0}, {
            cN: "function",
            b: "(" + e.IR + "\\s+)+" + e.IR + "\\s*\\(",
            rB: !0,
            e: /[{;=]/,
            eE: !0,
            k: t,
            c: [{b: e.IR + "\\s*\\(", rB: !0, c: [e.TM], r: 0}, {
                cN: "params",
                b: /\(/,
                e: /\)/,
                k: t,
                r: 0,
                c: [e.CBCM]
            }, e.CLCM, e.CBCM]
        }]
    }
}), hljs.registerLanguage("css", function (e) {
    var t = "[a-zA-Z-][a-zA-Z0-9_-]*", n = {cN: "function", b: t + "\\(", rB: !0, eE: !0, e: "\\("};
    return {
        cI: !0,
        i: "[=/|']",
        c: [e.CBCM, {cN: "id", b: "\\#[A-Za-z0-9_-]+"}, {
            cN: "class",
            b: "\\.[A-Za-z0-9_-]+",
            r: 0
        }, {cN: "attr_selector", b: "\\[", e: "\\]", i: "$"}, {
            cN: "pseudo",
            b: ":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"
        }, {cN: "at_rule", b: "@(font-face|page)", l: "[a-z-]+", k: "font-face page"}, {
            cN: "at_rule",
            b: "@",
            e: "[{;]",
            c: [{cN: "keyword", b: /\S+/}, {b: /\s/, eW: !0, eE: !0, r: 0, c: [n, e.ASM, e.QSM, e.CSSNM]}]
        }, {cN: "tag", b: t, r: 0}, {
            cN: "rules",
            b: "{",
            e: "}",
            i: "[^\\s]",
            r: 0,
            c: [e.CBCM, {
                cN: "rule",
                b: "[^\\s]",
                rB: !0,
                e: ";",
                eW: !0,
                c: [{
                    cN: "attribute",
                    b: "[A-Z\\_\\.\\-]+",
                    e: ":",
                    eE: !0,
                    i: "[^\\s]",
                    starts: {
                        cN: "value",
                        eW: !0,
                        eE: !0,
                        c: [n, e.CSSNM, e.QSM, e.ASM, e.CBCM, {cN: "hexcolor", b: "#[0-9A-Fa-f]+"}, {
                            cN: "important",
                            b: "!important"
                        }]
                    }
                }]
            }]
        }]
    }
}), hljs.registerLanguage("php", function (e) {
    var t = {cN: "variable", b: "\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"}, n = {
        cN: "preprocessor",
        b: /<\?(php)?|\?>/
    }, r = {
        cN: "string",
        c: [e.BE, n],
        v: [{b: 'b"', e: '"'}, {b: "b'", e: "'"}, e.inherit(e.ASM, {i: null}), e.inherit(e.QSM, {i: null})]
    }, i = {v: [e.BNM, e.CNM]};
    return {
        aliases: ["php3", "php4", "php5", "php6"],
        cI: !0,
        k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
        c: [e.CLCM, e.HCM, {
            cN: "comment",
            b: "/\\*",
            e: "\\*/",
            c: [{cN: "phpdoc", b: "\\s@[A-Za-z]+"}, n]
        }, {cN: "comment", b: "__halt_compiler.+?;", eW: !0, k: "__halt_compiler", l: e.UIR}, {
            cN: "string",
            b: "<<<['\"]?\\w+['\"]?$",
            e: "^\\w+;",
            c: [e.BE]
        }, n, t, {b: /->+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/}, {
            cN: "function",
            bK: "function",
            e: /[;{]/,
            eE: !0,
            i: "\\$|\\[|%",
            c: [e.UTM, {cN: "params", b: "\\(", e: "\\)", c: ["self", t, e.CBCM, r, i]}]
        }, {
            cN: "class",
            bK: "class interface",
            e: "{",
            eE: !0,
            i: /[:\(\$"]/,
            c: [{bK: "extends implements"}, e.UTM]
        }, {bK: "namespace", e: ";", i: /[\.']/, c: [e.UTM]}, {bK: "use", e: ";", c: [e.UTM]}, {b: "=>"}, r, i]
    }
}), hljs.registerLanguage("perl", function (e) {
    var t = "getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when", n = {
        cN: "subst",
        b: "[$@]\\{",
        e: "\\}",
        k: t
    }, r = {b: "->{", e: "}"}, i = {
        cN: "variable",
        v: [{b: /\$\d/}, {b: /[\$\%\@](\^\w\b|#\w+(\:\:\w+)*|{\w+}|\w+(\:\:\w*)*)/}, {b: /[\$\%\@][^\s\w{]/, r: 0}]
    }, o = {
        cN: "comment",
        b: "^(__END__|__DATA__)",
        e: "\\n$",
        r: 5
    }, a = [e.BE, n, i], s = [i, e.HCM, o, {cN: "comment", b: "^\\=\\w", e: "\\=cut", eW: !0}, r, {
        cN: "string",
        c: a,
        v: [{b: "q[qwxr]?\\s*\\(", e: "\\)", r: 5}, {b: "q[qwxr]?\\s*\\[", e: "\\]", r: 5}, {
            b: "q[qwxr]?\\s*\\{",
            e: "\\}",
            r: 5
        }, {b: "q[qwxr]?\\s*\\|", e: "\\|", r: 5}, {b: "q[qwxr]?\\s*\\<", e: "\\>", r: 5}, {
            b: "qw\\s+q",
            e: "q",
            r: 5
        }, {b: "'", e: "'", c: [e.BE]}, {b: '"', e: '"'}, {b: "`", e: "`", c: [e.BE]}, {
            b: "{\\w+}",
            c: [],
            r: 0
        }, {b: "-?\\w+\\s*\\=\\>", c: [], r: 0}]
    }, {
        cN: "number",
        b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
        r: 0
    }, {
        b: "(\\/\\/|" + e.RSR + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
        k: "split return print reverse grep",
        r: 0,
        c: [e.HCM, o, {cN: "regexp", b: "(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*", r: 10}, {
            cN: "regexp",
            b: "(m|qr)?/",
            e: "/[a-z]*",
            c: [e.BE],
            r: 0
        }]
    }, {cN: "sub", bK: "sub", e: "(\\s*\\(.*?\\))?[;{]", r: 5}, {cN: "operator", b: "-\\w\\b", r: 0}];
    return n.c = s, r.c = s, {aliases: ["pl"], k: t, c: s}
}), hljs.registerLanguage("ini", function (e) {
    return {
        cI: !0,
        i: /\S/,
        c: [{cN: "comment", b: ";", e: "$"}, {cN: "title", b: "^\\[", e: "\\]"}, {
            cN: "setting",
            b: "^[a-z0-9\\[\\]_-]+[ \\t]*=[ \\t]*",
            e: "$",
            c: [{cN: "value", eW: !0, k: "on off true false yes no", c: [e.QSM, e.NM], r: 0}]
        }]
    }
}), hljs.registerLanguage("makefile", function (e) {
    var t = {cN: "variable", b: /\$\(/, e: /\)/, c: [e.BE]};
    return {
        aliases: ["mk", "mak"],
        c: [e.HCM, {
            b: /^\w+\s*\W*=/,
            rB: !0,
            r: 0,
            starts: {cN: "constant", e: /\s*\W*=/, eE: !0, starts: {e: /$/, r: 0, c: [t]}}
        }, {cN: "title", b: /^[\w]+:\s*$/}, {
            cN: "phony",
            b: /^\.PHONY:/,
            e: /$/,
            k: ".PHONY",
            l: /[\.\w]+/
        }, {b: /^\t+/, e: /$/, r: 0, c: [e.QSM, t]}]
    }
}), define("math", ["jquery", "main"], function (e, t) {
    "use strict";
    return function (n) {
        var r, i;
        r = n || e(".fmt"), "undefined" != typeof MathJax ? r.each(function () {
            MathJax.Hub.Queue(["Typeset", MathJax.Hub, e(this).get(0)])
        }) : (i = t.staticUrl + "/build/3rd/MathJax/MathJax.js", e.getScript(i, function () {
            r.each(function () {
                MathJax.Hub.Queue(["Typeset", MathJax.Hub, e(this).get(0)])
            })
        }))
    }
}), define("flowChart", [], function () {
    "use strict";
    return function (e, t) {
        require(["jquery", "Raphael", "flow_diagram"], function (n, r, i) {
            var o;
            o = i.parse(e), o.drawSVG(t)
        })
    }
}), define("sequenceChart", [], function () {
    "use strict";
    return function (e) {
        require(["jquery", "Raphael", "underscore", "sequence_diagram"], function () {
            e.sequenceDiagram({theme: "simple"})
        })
    }
}), function (e, t) {
    "use strict";
    var n, r, i = e, o = i.document, a = i.navigator, s = i.setTimeout, l = i.encodeURIComponent, c = i.ActiveXObject, u = (i.Error, i.Number.parseInt || i.parseInt), d = i.Number.parseFloat || i.parseFloat, f = i.Number.isNaN || i.isNaN, p = i.Math.round, h = i.Date.now, m = i.Object.keys, g = i.Object.defineProperty, v = i.Object.prototype.hasOwnProperty, b = i.Array.prototype.slice, y = function () {
        var e = function (e) {
            return e
        };
        if ("function" == typeof i.wrap && "function" == typeof i.unwrap)try {
            var t = o.createElement("div"), n = i.unwrap(t);
            1 === t.nodeType && n && 1 === n.nodeType && (e = i.unwrap)
        } catch (r) {
        }
        return e
    }(), w = function (e) {
        return b.call(e, 0)
    }, _ = function () {
        var e, n, r, i, o, a, s = w(arguments), l = s[0] || {};
        for (e = 1, n = s.length; n > e; e++)if (null != (r = s[e]))for (i in r)v.call(r, i) && (o = l[i], a = r[i], l !== a && a !== t && (l[i] = a));
        return l
    }, k = function (e) {
        var t, n, r, i;
        if ("object" != typeof e || null == e)t = e; else if ("number" == typeof e.length)for (t = [], n = 0, r = e.length; r > n; n++)v.call(e, n) && (t[n] = k(e[n])); else {
            t = {};
            for (i in e)v.call(e, i) && (t[i] = k(e[i]))
        }
        return t
    }, x = function (e, t) {
        for (var n = {}, r = 0, i = t.length; i > r; r++)t[r]in e && (n[t[r]] = e[t[r]]);
        return n
    }, C = function (e, t) {
        var n = {};
        for (var r in e)-1 === t.indexOf(r) && (n[r] = e[r]);
        return n
    }, S = function (e) {
        if (e)for (var t in e)v.call(e, t) && delete e[t];
        return e
    }, T = function (e, t) {
        if (e && 1 === e.nodeType && e.ownerDocument && t && (1 === t.nodeType && t.ownerDocument && t.ownerDocument === e.ownerDocument || 9 === t.nodeType && !t.ownerDocument && t === e.ownerDocument))do {
            if (e === t)return !0;
            e = e.parentNode
        } while (e);
        return !1
    }, $ = function () {
        var e = SF.staticUrl + "/build/3rd/zeroclipboard/dist/";
        return e + "ZeroClipboard.swf"
    }, M = {
        bridge: null,
        version: "0.0.0",
        pluginType: "unknown",
        disabled: null,
        outdated: null,
        unavailable: null,
        deactivated: null,
        overdue: null,
        ready: null
    }, E = "11.0.0", L = {}, N = {}, I = null, A = {
        ready: "Flash communication is established",
        error: {
            "flash-disabled": "Flash is disabled or not installed",
            "flash-outdated": "Flash is too outdated to support ZeroClipboard",
            "flash-unavailable": "Flash is unable to communicate bidirectionally with JavaScript",
            "flash-deactivated": "Flash is too outdated for your browser and/or is configured as click-to-activate",
            "flash-overdue": "Flash communication was established but NOT within the acceptable time limit"
        }
    }, j = {
        swfPath: $(),
        trustedDomains: e.location.host ? [e.location.host] : [],
        cacheBust: !0,
        forceEnhancedClipboard: !1,
        flashLoadTimeout: 3e4,
        autoActivate: !0,
        bubbleEvents: !0,
        containerId: "global-zeroclipboard-html-bridge",
        containerClass: "global-zeroclipboard-container",
        swfObjectId: "global-zeroclipboard-flash-bridge",
        hoverClass: "zeroclipboard-is-hover",
        activeClass: "zeroclipboard-is-active",
        forceHandCursor: !1,
        title: null,
        zIndex: 999999999
    }, O = function (e) {
        if ("object" == typeof e && null !== e)for (var t in e)if (v.call(e, t))if (/^(?:forceHandCursor|title|zIndex|bubbleEvents)$/.test(t))j[t] = e[t]; else if (null == M.bridge)if ("containerId" === t || "swfObjectId" === t) {
            if (!Z(e[t]))throw new Error("The specified `" + t + "` value is not valid as an HTML4 Element ID");
            j[t] = e[t]
        } else j[t] = e[t];
        {
            if ("string" != typeof e || !e)return k(j);
            if (v.call(j, e))return j[e]
        }
    }, z = function () {
        return {
            browser: x(a, ["userAgent", "platform", "appName"]),
            flash: C(M, ["bridge"]),
            zeroclipboard: {version: St.version, config: St.config()}
        }
    }, D = function () {
        return !!(M.disabled || M.outdated || M.unavailable || M.deactivated)
    }, R = function (e, t) {
        var n, r, i, o = {};
        if ("string" == typeof e && e)i = e.toLowerCase().split(/\s+/); else if ("object" == typeof e && e && "undefined" == typeof t)for (n in e)v.call(e, n) && "string" == typeof n && n && "function" == typeof e[n] && St.on(n, e[n]);
        if (i && i.length) {
            for (n = 0, r = i.length; r > n; n++)e = i[n].replace(/^on/, ""), o[e] = !0, L[e] || (L[e] = []), L[e].push(t);
            if (o.ready && M.ready && St.emit({type: "ready"}), o.error) {
                var a = ["disabled", "outdated", "unavailable", "deactivated", "overdue"];
                for (n = 0, r = a.length; r > n; n++)if (M[a[n]] === !0) {
                    St.emit({type: "error", name: "flash-" + a[n]});
                    break
                }
            }
        }
        return St
    }, B = function (e, t) {
        var n, r, i, o, a;
        if (0 === arguments.length)o = m(L); else if ("string" == typeof e && e)o = e.split(/\s+/); else if ("object" == typeof e && e && "undefined" == typeof t)for (n in e)v.call(e, n) && "string" == typeof n && n && "function" == typeof e[n] && St.off(n, e[n]);
        if (o && o.length)for (n = 0, r = o.length; r > n; n++)if (e = o[n].toLowerCase().replace(/^on/, ""), a = L[e], a && a.length)if (t)for (i = a.indexOf(t); -1 !== i;)a.splice(i, 1), i = a.indexOf(t, i); else a.length = 0;
        return St
    }, q = function (e) {
        var t;
        return t = "string" == typeof e && e ? k(L[e]) || null : k(L)
    }, P = function (e) {
        var t, n, r;
        return e = Y(e), e && !rt(e) ? "ready" === e.type && M.overdue === !0 ? St.emit({
            type: "error",
            name: "flash-overdue"
        }) : (t = _({}, e), nt.call(this, t), "copy" === e.type && (r = ct(N), n = r.data, I = r.formatMap), n) : void 0
    }, F = function () {
        if ("boolean" != typeof M.ready && (M.ready = !1), !St.isFlashUnusable() && null === M.bridge) {
            var e = j.flashLoadTimeout;
            "number" == typeof e && e >= 0 && s(function () {
                "boolean" != typeof M.deactivated && (M.deactivated = !0), M.deactivated === !0 && St.emit({
                    type: "error",
                    name: "flash-deactivated"
                })
            }, e), M.overdue = !1, st()
        }
    }, H = function () {
        St.clearData(), St.blur(), St.emit("destroy"), lt(), St.off()
    }, W = function (e, t) {
        var n;
        if ("object" == typeof e && e && "undefined" == typeof t)n = e, St.clearData(); else {
            if ("string" != typeof e || !e)return;
            n = {}, n[e] = t
        }
        for (var r in n)"string" == typeof r && r && v.call(n, r) && "string" == typeof n[r] && n[r] && (N[r] = n[r])
    }, U = function (e) {
        "undefined" == typeof e ? (S(N), I = null) : "string" == typeof e && v.call(N, e) && delete N[e]
    }, K = function (e) {
        return "undefined" == typeof e ? k(N) : "string" == typeof e && v.call(N, e) ? N[e] : void 0
    }, V = function (e) {
        if (e && 1 === e.nodeType) {
            n && (vt(n, j.activeClass), n !== e && vt(n, j.hoverClass)), n = e, gt(e, j.hoverClass);
            var t = e.getAttribute("title") || j.title;
            if ("string" == typeof t && t) {
                var r = at(M.bridge);
                r && r.setAttribute("title", t)
            }
            var i = j.forceHandCursor === !0 || "pointer" === bt(e, "cursor");
            kt(i), _t()
        }
    }, G = function () {
        var e = at(M.bridge);
        e && (e.removeAttribute("title"), e.style.left = "0px", e.style.top = "-9999px", e.style.width = "1px", e.style.top = "1px"), n && (vt(n, j.hoverClass), vt(n, j.activeClass), n = null)
    }, X = function () {
        return n || null
    }, Z = function (e) {
        return "string" == typeof e && e && /^[A-Za-z][A-Za-z0-9_:\-\.]*$/.test(e)
    }, Y = function (e) {
        var t;
        if ("string" == typeof e && e ? (t = e, e = {}) : "object" == typeof e && e && "string" == typeof e.type && e.type && (t = e.type), t) {
            !e.target && /^(copy|aftercopy|_click)$/.test(t.toLowerCase()) && (e.target = r), _(e, {
                type: t.toLowerCase(),
                target: e.target || n || null,
                relatedTarget: e.relatedTarget || null,
                currentTarget: M && M.bridge || null,
                timeStamp: e.timeStamp || h() || null
            });
            var i = A[e.type];
            return "error" === e.type && e.name && i && (i = i[e.name]), i && (e.message = i), "ready" === e.type && _(e, {
                target: null,
                version: M.version
            }), "error" === e.type && (/^flash-(disabled|outdated|unavailable|deactivated|overdue)$/.test(e.name) && _(e, {
                target: null,
                minimumVersion: E
            }), /^flash-(outdated|unavailable|deactivated|overdue)$/.test(e.name) && _(e, {version: M.version})), "copy" === e.type && (e.clipboardData = {
                setData: St.setData,
                clearData: St.clearData
            }), "aftercopy" === e.type && (e = ut(e, I)), e.target && !e.relatedTarget && (e.relatedTarget = Q(e.target)), e = J(e)
        }
    }, Q = function (e) {
        var t = e && e.getAttribute && e.getAttribute("data-clipboard-target");
        return t ? o.getElementById(t) : null
    }, J = function (e) {
        if (e && /^_(?:click|mouse(?:over|out|down|up|move))$/.test(e.type)) {
            var n = e.target, r = "_mouseover" === e.type && e.relatedTarget ? e.relatedTarget : t, a = "_mouseout" === e.type && e.relatedTarget ? e.relatedTarget : t, s = wt(n), l = i.screenLeft || i.screenX || 0, c = i.screenTop || i.screenY || 0, u = o.body.scrollLeft + o.documentElement.scrollLeft, d = o.body.scrollTop + o.documentElement.scrollTop, f = s.left + ("number" == typeof e._stageX ? e._stageX : 0), p = s.top + ("number" == typeof e._stageY ? e._stageY : 0), h = f - u, m = p - d, g = l + h, v = c + m, b = "number" == typeof e.movementX ? e.movementX : 0, y = "number" == typeof e.movementY ? e.movementY : 0;
            delete e._stageX, delete e._stageY, _(e, {
                srcElement: n,
                fromElement: r,
                toElement: a,
                screenX: g,
                screenY: v,
                pageX: f,
                pageY: p,
                clientX: h,
                clientY: m,
                x: h,
                y: m,
                movementX: b,
                movementY: y,
                offsetX: 0,
                offsetY: 0,
                layerX: 0,
                layerY: 0
            })
        }
        return e
    }, et = function (e) {
        var t = e && "string" == typeof e.type && e.type || "";
        return !/^(?:(?:before)?copy|destroy)$/.test(t)
    }, tt = function (e, t, n, r) {
        r ? s(function () {
            e.apply(t, n)
        }, 0) : e.apply(t, n)
    }, nt = function (e) {
        if ("object" == typeof e && e && e.type) {
            var t = et(e), n = L["*"] || [], r = L[e.type] || [], o = n.concat(r);
            if (o && o.length) {
                var a, s, l, c, u, d = this;
                for (a = 0, s = o.length; s > a; a++)l = o[a], c = d, "string" == typeof l && "function" == typeof i[l] && (l = i[l]), "object" == typeof l && l && "function" == typeof l.handleEvent && (c = l, l = l.handleEvent), "function" == typeof l && (u = _({}, e), tt(l, c, [u], t))
            }
            return this
        }
    }, rt = function (e) {
        var t = e.target || n || null, i = "swf" === e._source;
        delete e._source;
        var o = ["flash-disabled", "flash-outdated", "flash-unavailable", "flash-deactivated", "flash-overdue"];
        switch (e.type) {
            case"error":
                -1 !== o.indexOf(e.name) && _(M, {
                    disabled: "flash-disabled" === e.name,
                    outdated: "flash-outdated" === e.name,
                    unavailable: "flash-unavailable" === e.name,
                    deactivated: "flash-deactivated" === e.name,
                    overdue: "flash-overdue" === e.name,
                    ready: !1
                });
                break;
            case"ready":
                var a = M.deactivated === !0;
                _(M, {disabled: !1, outdated: !1, unavailable: !1, deactivated: !1, overdue: a, ready: !a});
                break;
            case"beforecopy":
                r = t;
                break;
            case"copy":
                var s, l, c = e.relatedTarget;
                !N["text/html"] && !N["text/plain"] && c && (l = c.value || c.outerHTML || c.innerHTML) && (s = c.value || c.textContent || c.innerText) ? (e.clipboardData.clearData(), e.clipboardData.setData("text/plain", s), l !== s && e.clipboardData.setData("text/html", l)) : !N["text/plain"] && e.target && (s = e.target.getAttribute("data-clipboard-text")) && (e.clipboardData.clearData(), e.clipboardData.setData("text/plain", s));
                break;
            case"aftercopy":
                St.clearData(), t && t !== mt() && t.focus && t.focus();
                break;
            case"_mouseover":
                St.focus(t), j.bubbleEvents === !0 && i && (t && t !== e.relatedTarget && !T(e.relatedTarget, t) && it(_({}, e, {
                    type: "mouseenter",
                    bubbles: !1,
                    cancelable: !1
                })), it(_({}, e, {type: "mouseover"})));
                break;
            case"_mouseout":
                St.blur(), j.bubbleEvents === !0 && i && (t && t !== e.relatedTarget && !T(e.relatedTarget, t) && it(_({}, e, {
                    type: "mouseleave",
                    bubbles: !1,
                    cancelable: !1
                })), it(_({}, e, {type: "mouseout"})));
                break;
            case"_mousedown":
                gt(t, j.activeClass), j.bubbleEvents === !0 && i && it(_({}, e, {type: e.type.slice(1)}));
                break;
            case"_mouseup":
                vt(t, j.activeClass), j.bubbleEvents === !0 && i && it(_({}, e, {type: e.type.slice(1)}));
                break;
            case"_click":
                r = null, j.bubbleEvents === !0 && i && it(_({}, e, {type: e.type.slice(1)}));
                break;
            case"_mousemove":
                j.bubbleEvents === !0 && i && it(_({}, e, {type: e.type.slice(1)}))
        }
        return /^_(?:click|mouse(?:over|out|down|up|move))$/.test(e.type) ? !0 : void 0
    }, it = function (e) {
        if (e && "string" == typeof e.type && e) {
            var t, n = e.target || null, r = n && n.ownerDocument || o, a = {
                view: r.defaultView || i,
                canBubble: !0,
                cancelable: !0,
                detail: "click" === e.type ? 1 : 0,
                button: "number" == typeof e.which ? e.which - 1 : "number" == typeof e.button ? e.button : r.createEvent ? 0 : 1
            }, s = _(a, e);
            n && r.createEvent && n.dispatchEvent && (s = [s.type, s.canBubble, s.cancelable, s.view, s.detail, s.screenX, s.screenY, s.clientX, s.clientY, s.ctrlKey, s.altKey, s.shiftKey, s.metaKey, s.button, s.relatedTarget], t = r.createEvent("MouseEvents"), t.initMouseEvent && (t.initMouseEvent.apply(t, s), t._source = "js", n.dispatchEvent(t)))
        }
    }, ot = function () {
        var e = o.createElement("div");
        return e.id = j.containerId, e.className = j.containerClass, e.style.position = "absolute", e.style.left = "0px", e.style.top = "-9999px", e.style.width = "1px", e.style.height = "1px", e.style.zIndex = "" + xt(j.zIndex), e
    }, at = function (e) {
        for (var t = e && e.parentNode; t && "OBJECT" === t.nodeName && t.parentNode;)t = t.parentNode;
        return t || null
    }, st = function () {
        var e, t = M.bridge, n = at(t);
        if (!t) {
            var r = ht(i.location.host, j), a = "never" === r ? "none" : "all", s = ft(j), l = j.swfPath + dt(j.swfPath, j);
            n = ot();
            var c = o.createElement("div");
            n.appendChild(c), o.body.appendChild(n);
            var u = o.createElement("div"), d = "activex" === M.pluginType;
            u.innerHTML = '<object id="' + j.swfObjectId + '" name="' + j.swfObjectId + '" width="100%" height="100%" ' + (d ? 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"' : 'type="application/x-shockwave-flash" data="' + l + '"') + ">" + (d ? '<param name="movie" value="' + l + '"/>' : "") + '<param name="allowScriptAccess" value="' + r + '"/><param name="allowNetworking" value="' + a + '"/><param name="menu" value="false"/><param name="wmode" value="transparent"/><param name="flashvars" value="' + s + '"/></object>', t = u.firstChild, u = null, y(t).ZeroClipboard = St, n.replaceChild(t, c)
        }
        return t || (t = o[j.swfObjectId], t && (e = t.length) && (t = t[e - 1]), !t && n && (t = n.firstChild)), M.bridge = t || null, t
    }, lt = function () {
        var e = M.bridge;
        if (e) {
            var t = at(e);
            t && ("activex" === M.pluginType && "readyState"in e ? (e.style.display = "none", function n() {
                if (4 === e.readyState) {
                    for (var r in e)"function" == typeof e[r] && (e[r] = null);
                    e.parentNode && e.parentNode.removeChild(e), t.parentNode && t.parentNode.removeChild(t)
                } else s(n, 10)
            }()) : (e.parentNode && e.parentNode.removeChild(e), t.parentNode && t.parentNode.removeChild(t))), M.ready = null, M.bridge = null, M.deactivated = null
        }
    }, ct = function (e) {
        var t = {}, n = {};
        if ("object" == typeof e && e) {
            for (var r in e)if (r && v.call(e, r) && "string" == typeof e[r] && e[r])switch (r.toLowerCase()) {
                case"text/plain":
                case"text":
                case"air:text":
                case"flash:text":
                    t.text = e[r], n.text = r;
                    break;
                case"text/html":
                case"html":
                case"air:html":
                case"flash:html":
                    t.html = e[r], n.html = r;
                    break;
                case"application/rtf":
                case"text/rtf":
                case"rtf":
                case"richtext":
                case"air:rtf":
                case"flash:rtf":
                    t.rtf = e[r], n.rtf = r
            }
            return {data: t, formatMap: n}
        }
    }, ut = function (e, t) {
        if ("object" != typeof e || !e || "object" != typeof t || !t)return e;
        var n = {};
        for (var r in e)if (v.call(e, r)) {
            if ("success" !== r && "data" !== r) {
                n[r] = e[r];
                continue
            }
            n[r] = {};
            var i = e[r];
            for (var o in i)o && v.call(i, o) && v.call(t, o) && (n[r][t[o]] = i[o])
        }
        return n
    }, dt = function (e, t) {
        var n = null == t || t && t.cacheBust === !0;
        return n ? (-1 === e.indexOf("?") ? "?" : "&") + "noCache=" + h() : ""
    }, ft = function (e) {
        var t, n, r, o, a = "", s = [];
        if (e.trustedDomains && ("string" == typeof e.trustedDomains ? o = [e.trustedDomains] : "object" == typeof e.trustedDomains && "length"in e.trustedDomains && (o = e.trustedDomains)), o && o.length)for (t = 0, n = o.length; n > t; t++)if (v.call(o, t) && o[t] && "string" == typeof o[t]) {
            if (r = pt(o[t]), !r)continue;
            if ("*" === r) {
                s.length = 0, s.push(r);
                break
            }
            s.push.apply(s, [r, "//" + r, i.location.protocol + "//" + r])
        }
        return s.length && (a += "trustedOrigins=" + l(s.join(","))), e.forceEnhancedClipboard === !0 && (a += (a ? "&" : "") + "forceEnhancedClipboard=true"), "string" == typeof e.swfObjectId && e.swfObjectId && (a += (a ? "&" : "") + "swfObjectId=" + l(e.swfObjectId)), a
    }, pt = function (e) {
        if (null == e || "" === e)return null;
        if (e = e.replace(/^\s+|\s+$/g, ""), "" === e)return null;
        var t = e.indexOf("//");
        e = -1 === t ? e : e.slice(t + 2);
        var n = e.indexOf("/");
        return e = -1 === n ? e : -1 === t || 0 === n ? null : e.slice(0, n), e && ".swf" === e.slice(-4).toLowerCase() ? null : e || null
    }, ht = function () {
        var e = function (e) {
            var t, n, r, i = [];
            if ("string" == typeof e && (e = [e]), "object" != typeof e || !e || "number" != typeof e.length)return i;
            for (t = 0, n = e.length; n > t; t++)if (v.call(e, t) && (r = pt(e[t]))) {
                if ("*" === r) {
                    i.length = 0, i.push("*");
                    break
                }
                -1 === i.indexOf(r) && i.push(r)
            }
            return i
        };
        return function (t, n) {
            var r = pt(n.swfPath);
            null === r && (r = t);
            var i = e(n.trustedDomains), o = i.length;
            if (o > 0) {
                if (1 === o && "*" === i[0])return "always";
                if (-1 !== i.indexOf(t))return 1 === o && t === r ? "sameDomain" : "always"
            }
            return "never"
        }
    }(), mt = function () {
        try {
            return o.activeElement
        } catch (e) {
            return null
        }
    }, gt = function (e, t) {
        if (!e || 1 !== e.nodeType)return e;
        if (e.classList)return e.classList.contains(t) || e.classList.add(t), e;
        if (t && "string" == typeof t) {
            var n = (t || "").split(/\s+/);
            if (1 === e.nodeType)if (e.className) {
                for (var r = " " + e.className + " ", i = e.className, o = 0, a = n.length; a > o; o++)r.indexOf(" " + n[o] + " ") < 0 && (i += " " + n[o]);
                e.className = i.replace(/^\s+|\s+$/g, "")
            } else e.className = t
        }
        return e
    }, vt = function (e, t) {
        if (!e || 1 !== e.nodeType)return e;
        if (e.classList)return e.classList.contains(t) && e.classList.remove(t), e;
        if ("string" == typeof t && t) {
            var n = t.split(/\s+/);
            if (1 === e.nodeType && e.className) {
                for (var r = (" " + e.className + " ").replace(/[\n\t]/g, " "), i = 0, o = n.length; o > i; i++)r = r.replace(" " + n[i] + " ", " ");
                e.className = r.replace(/^\s+|\s+$/g, "")
            }
        }
        return e
    }, bt = function (e, t) {
        var n = i.getComputedStyle(e, null).getPropertyValue(t);
        return "cursor" !== t || n && "auto" !== n || "A" !== e.nodeName ? n : "pointer"
    }, yt = function () {
        var e, t, n, r = 1;
        return "function" == typeof o.body.getBoundingClientRect && (e = o.body.getBoundingClientRect(), t = e.right - e.left, n = o.body.offsetWidth, r = p(t / n * 100) / 100), r
    }, wt = function (e) {
        var t = {left: 0, top: 0, width: 0, height: 0};
        if (e.getBoundingClientRect) {
            var n, r, a, s = e.getBoundingClientRect();
            "pageXOffset"in i && "pageYOffset"in i ? (n = i.pageXOffset, r = i.pageYOffset) : (a = yt(), n = p(o.documentElement.scrollLeft / a), r = p(o.documentElement.scrollTop / a));
            var l = o.documentElement.clientLeft || 0, c = o.documentElement.clientTop || 0;
            t.left = s.left + n - l, t.top = s.top + r - c, t.width = "width"in s ? s.width : s.right - s.left, t.height = "height"in s ? s.height : s.bottom - s.top
        }
        return t
    }, _t = function () {
        var e;
        if (n && (e = at(M.bridge))) {
            var t = wt(n);
            _(e.style, {
                width: t.width + "px",
                height: t.height + "px",
                top: t.top + "px",
                left: t.left + "px",
                zIndex: "" + xt(j.zIndex)
            })
        }
    }, kt = function (e) {
        M.ready === !0 && (M.bridge && "function" == typeof M.bridge.setHandCursor ? M.bridge.setHandCursor(e) : M.ready = !1)
    }, xt = function (e) {
        if (/^(?:auto|inherit)$/.test(e))return e;
        var t;
        return "number" != typeof e || f(e) ? "string" == typeof e && (t = xt(u(e, 10))) : t = e, "number" == typeof t ? t : "auto"
    }, Ct = function (e) {
        function t(e) {
            var t = e.match(/[\d]+/g);
            return t.length = 3, t.join(".")
        }

        function n(e) {
            return !!e && (e = e.toLowerCase()) && (/^(pepflashplayer\.dll|libpepflashplayer\.so|pepperflashplayer\.plugin)$/.test(e) || "chrome.plugin" === e.slice(-13))
        }

        function r(e) {
            e && (l = !0, e.version && (f = t(e.version)), !f && e.description && (f = t(e.description)), e.filename && (u = n(e.filename)))
        }

        var i, o, s, l = !1, c = !1, u = !1, f = "";
        if (a.plugins && a.plugins.length)i = a.plugins["Shockwave Flash"], r(i), a.plugins["Shockwave Flash 2.0"] && (l = !0, f = "2.0.0.11"); else if (a.mimeTypes && a.mimeTypes.length)s = a.mimeTypes["application/x-shockwave-flash"], i = s && s.enabledPlugin, r(i); else if ("undefined" != typeof e) {
            c = !0;
            try {
                o = new e("ShockwaveFlash.ShockwaveFlash.7"), l = !0, f = t(o.GetVariable("$version"))
            } catch (p) {
                try {
                    o = new e("ShockwaveFlash.ShockwaveFlash.6"), l = !0, f = "6.0.21"
                } catch (h) {
                    try {
                        o = new e("ShockwaveFlash.ShockwaveFlash"), l = !0, f = t(o.GetVariable("$version"))
                    } catch (m) {
                        c = !1
                    }
                }
            }
        }
        M.disabled = l !== !0, M.outdated = f && d(f) < d(E), M.version = f || "0.0.0", M.pluginType = u ? "pepper" : c ? "activex" : l ? "netscape" : "unknown"
    };
    Ct(c);
    var St = function () {
        return this instanceof St ? void("function" == typeof St._createClient && St._createClient.apply(this, w(arguments))) : new St
    };
    g(St, "version", {value: "2.1.6", writable: !1, configurable: !0, enumerable: !0}), St.config = function () {
        return O.apply(this, w(arguments))
    }, St.state = function () {
        return z.apply(this, w(arguments))
    }, St.isFlashUnusable = function () {
        return D.apply(this, w(arguments))
    }, St.on = function () {
        return R.apply(this, w(arguments))
    }, St.off = function () {
        return B.apply(this, w(arguments))
    }, St.handlers = function () {
        return q.apply(this, w(arguments))
    }, St.emit = function () {
        return P.apply(this, w(arguments))
    }, St.create = function () {
        return F.apply(this, w(arguments))
    }, St.destroy = function () {
        return H.apply(this, w(arguments))
    }, St.setData = function () {
        return W.apply(this, w(arguments))
    }, St.clearData = function () {
        return U.apply(this, w(arguments))
    }, St.getData = function () {
        return K.apply(this, w(arguments))
    }, St.focus = St.activate = function () {
        return V.apply(this, w(arguments))
    }, St.blur = St.deactivate = function () {
        return G.apply(this, w(arguments))
    }, St.activeElement = function () {
        return X.apply(this, w(arguments))
    };
    var Tt = 0, $t = {}, Mt = 0, Et = {}, Lt = {};
    _(j, {autoActivate: !0});
    var Nt = function (e) {
        var t = this;
        t.id = "" + Tt++, $t[t.id] = {
            instance: t,
            elements: [],
            handlers: {}
        }, e && t.clip(e), St.on("*", function (e) {
            return t.emit(e)
        }), St.on("destroy", function () {
            t.destroy()
        }), St.create()
    }, It = function (e, t) {
        var n, r, i, o = {}, a = $t[this.id] && $t[this.id].handlers;
        if ("string" == typeof e && e)i = e.toLowerCase().split(/\s+/); else if ("object" == typeof e && e && "undefined" == typeof t)for (n in e)v.call(e, n) && "string" == typeof n && n && "function" == typeof e[n] && this.on(n, e[n]);
        if (i && i.length) {
            for (n = 0, r = i.length; r > n; n++)e = i[n].replace(/^on/, ""), o[e] = !0, a[e] || (a[e] = []), a[e].push(t);
            if (o.ready && M.ready && this.emit({type: "ready", client: this}), o.error) {
                var s = ["disabled", "outdated", "unavailable", "deactivated", "overdue"];
                for (n = 0, r = s.length; r > n; n++)if (M[s[n]]) {
                    this.emit({type: "error", name: "flash-" + s[n], client: this});
                    break
                }
            }
        }
        return this
    }, At = function (e, t) {
        var n, r, i, o, a, s = $t[this.id] && $t[this.id].handlers;
        if (0 === arguments.length)o = m(s); else if ("string" == typeof e && e)o = e.split(/\s+/); else if ("object" == typeof e && e && "undefined" == typeof t)for (n in e)v.call(e, n) && "string" == typeof n && n && "function" == typeof e[n] && this.off(n, e[n]);
        if (o && o.length)for (n = 0, r = o.length; r > n; n++)if (e = o[n].toLowerCase().replace(/^on/, ""), a = s[e], a && a.length)if (t)for (i = a.indexOf(t); -1 !== i;)a.splice(i, 1), i = a.indexOf(t, i); else a.length = 0;
        return this
    }, jt = function (e) {
        var t = null, n = $t[this.id] && $t[this.id].handlers;
        return n && (t = "string" == typeof e && e ? n[e] ? n[e].slice(0) : [] : k(n)), t
    }, Ot = function (e) {
        if (qt.call(this, e)) {
            "object" == typeof e && e && "string" == typeof e.type && e.type && (e = _({}, e));
            var t = _({}, Y(e), {client: this});
            Pt.call(this, t)
        }
        return this
    }, zt = function (e) {
        e = Ft(e);
        for (var t = 0; t < e.length; t++)if (v.call(e, t) && e[t] && 1 === e[t].nodeType) {
            e[t].zcClippingId ? -1 === Et[e[t].zcClippingId].indexOf(this.id) && Et[e[t].zcClippingId].push(this.id) : (e[t].zcClippingId = "zcClippingId_" + Mt++, Et[e[t].zcClippingId] = [this.id], j.autoActivate === !0 && Ht(e[t]));
            var n = $t[this.id] && $t[this.id].elements;
            -1 === n.indexOf(e[t]) && n.push(e[t])
        }
        return this
    }, Dt = function (e) {
        var t = $t[this.id];
        if (!t)return this;
        var n, r = t.elements;
        e = "undefined" == typeof e ? r.slice(0) : Ft(e);
        for (var i = e.length; i--;)if (v.call(e, i) && e[i] && 1 === e[i].nodeType) {
            for (n = 0; -1 !== (n = r.indexOf(e[i], n));)r.splice(n, 1);
            var o = Et[e[i].zcClippingId];
            if (o) {
                for (n = 0; -1 !== (n = o.indexOf(this.id, n));)o.splice(n, 1);
                0 === o.length && (j.autoActivate === !0 && Wt(e[i]), delete e[i].zcClippingId)
            }
        }
        return this
    }, Rt = function () {
        var e = $t[this.id];
        return e && e.elements ? e.elements.slice(0) : []
    }, Bt = function () {
        this.unclip(), this.off(), delete $t[this.id]
    }, qt = function (e) {
        if (!e || !e.type)return !1;
        if (e.client && e.client !== this)return !1;
        var t = $t[this.id] && $t[this.id].elements, n = !!t && t.length > 0, r = !e.target || n && -1 !== t.indexOf(e.target), i = e.relatedTarget && n && -1 !== t.indexOf(e.relatedTarget), o = e.client && e.client === this;
        return r || i || o ? !0 : !1
    }, Pt = function (e) {
        if ("object" == typeof e && e && e.type) {
            var t = et(e), n = $t[this.id] && $t[this.id].handlers["*"] || [], r = $t[this.id] && $t[this.id].handlers[e.type] || [], o = n.concat(r);
            if (o && o.length) {
                var a, s, l, c, u, d = this;
                for (a = 0, s = o.length; s > a; a++)l = o[a], c = d, "string" == typeof l && "function" == typeof i[l] && (l = i[l]), "object" == typeof l && l && "function" == typeof l.handleEvent && (c = l, l = l.handleEvent), "function" == typeof l && (u = _({}, e), tt(l, c, [u], t))
            }
            return this
        }
    }, Ft = function (e) {
        return "string" == typeof e && (e = []), "number" != typeof e.length ? [e] : e
    }, Ht = function (e) {
        if (e && 1 === e.nodeType) {
            var t = function (e) {
                (e || (e = i.event)) && ("js" !== e._source && (e.stopImmediatePropagation(), e.preventDefault()), delete e._source)
            }, n = function (n) {
                (n || (n = i.event)) && (t(n), St.focus(e))
            };
            e.addEventListener("mouseover", n, !1), e.addEventListener("mouseout", t, !1), e.addEventListener("mouseenter", t, !1), e.addEventListener("mouseleave", t, !1), e.addEventListener("mousemove", t, !1), Lt[e.zcClippingId] = {
                mouseover: n,
                mouseout: t,
                mouseenter: t,
                mouseleave: t,
                mousemove: t
            }
        }
    }, Wt = function (e) {
        if (e && 1 === e.nodeType) {
            var t = Lt[e.zcClippingId];
            if ("object" == typeof t && t) {
                for (var n, r, i = ["move", "leave", "enter", "out", "over"], o = 0, a = i.length; a > o; o++)n = "mouse" + i[o], r = t[n], "function" == typeof r && e.removeEventListener(n, r, !1);
                delete Lt[e.zcClippingId]
            }
        }
    };
    St._createClient = function () {
        Nt.apply(this, w(arguments))
    }, St.prototype.on = function () {
        return It.apply(this, w(arguments))
    }, St.prototype.off = function () {
        return At.apply(this, w(arguments))
    }, St.prototype.handlers = function () {
        return jt.apply(this, w(arguments))
    }, St.prototype.emit = function () {
        return Ot.apply(this, w(arguments))
    }, St.prototype.clip = function () {
        return zt.apply(this, w(arguments))
    }, St.prototype.unclip = function () {
        return Dt.apply(this, w(arguments))
    }, St.prototype.elements = function () {
        return Rt.apply(this, w(arguments))
    }, St.prototype.destroy = function () {
        return Bt.apply(this, w(arguments))
    }, St.prototype.setText = function (e) {
        return St.setData("text/plain", e), this
    }, St.prototype.setHtml = function (e) {
        return St.setData("text/html", e), this
    }, St.prototype.setRichText = function (e) {
        return St.setData("application/rtf", e), this
    }, St.prototype.setData = function () {
        return St.setData.apply(this, w(arguments)), this
    }, St.prototype.clearData = function () {
        return St.clearData.apply(this, w(arguments)), this
    }, St.prototype.getData = function () {
        return St.getData.apply(this, w(arguments))
    }, "function" == typeof define && define.amd ? define("ZeroClipboard", [], function () {
        return St
    }) : "object" == typeof module && module && "object" == typeof module.exports && module.exports ? module.exports = St : e.ZeroClipboard = St
}(function () {
    return this || window
}()), function (e) {
    if ("object" == typeof exports && "object" == typeof module)module.exports = e(); else {
        if ("function" == typeof define && define.amd)return define("codemirror/lib/codemirror", [], e);
        this.CodeMirror = e()
    }
}(function () {
    "use strict";
    function e(n, r) {
        if (!(this instanceof e))return new e(n, r);
        this.options = r = r || {}, oo(ya, r, !1), h(r);
        var i = r.value;
        "string" == typeof i && (i = new Ha(i, r.mode)), this.doc = i;
        var o = this.display = new t(n, i);
        o.wrapper.CodeMirror = this, u(this), l(this), r.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), r.autofocus && !Qo && mn(this), this.state = {
            keyMaps: [],
            overlays: [],
            modeGen: 0,
            overwrite: !1,
            focused: !1,
            suppressEdits: !1,
            pasteIncoming: !1,
            cutIncoming: !1,
            draggingText: !1,
            highlight: new Qi
        }, Po && 11 > Fo && setTimeout(ao(hn, this, !0), 20), bn(this), _o();
        var a = this;
        Yt(this, function () {
            a.curOp.forceUpdate = !0, yi(a, i), r.autofocus && !Qo || mo() == o.input ? setTimeout(ao(Pn, a), 20) : Fn(a);
            for (var e in wa)wa.hasOwnProperty(e) && wa[e](a, r[e], _a);
            for (var t = 0; t < Sa.length; ++t)Sa[t](a)
        })
    }

    function t(e, t) {
        var n = this, r = n.input = uo("textarea", null, null, "position: absolute; padding: 0; width: 1px; height: 1em; outline: none");
        Ho ? r.style.width = "1000px" : r.setAttribute("wrap", "off"), Yo && (r.style.border = "1px solid black"), r.setAttribute("autocorrect", "off"), r.setAttribute("autocapitalize", "off"), r.setAttribute("spellcheck", "false"), n.inputDiv = uo("div", [r], null, "overflow: hidden; position: relative; width: 3px; height: 0px;"), n.scrollbarH = uo("div", [uo("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar"), n.scrollbarV = uo("div", [uo("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"), n.scrollbarFiller = uo("div", null, "CodeMirror-scrollbar-filler"), n.gutterFiller = uo("div", null, "CodeMirror-gutter-filler"), n.lineDiv = uo("div", null, "CodeMirror-code"), n.selectionDiv = uo("div", null, null, "position: relative; z-index: 1"), n.cursorDiv = uo("div", null, "CodeMirror-cursors"), n.measure = uo("div", null, "CodeMirror-measure"), n.lineMeasure = uo("div", null, "CodeMirror-measure"), n.lineSpace = uo("div", [n.measure, n.lineMeasure, n.selectionDiv, n.cursorDiv, n.lineDiv], null, "position: relative; outline: none"), n.mover = uo("div", [uo("div", [n.lineSpace], "CodeMirror-lines")], null, "position: relative"), n.sizer = uo("div", [n.mover], "CodeMirror-sizer"), n.heightForcer = uo("div", null, null, "position: absolute; height: " + es + "px; width: 1px;"), n.gutters = uo("div", null, "CodeMirror-gutters"), n.lineGutter = null, n.scroller = uo("div", [n.sizer, n.heightForcer, n.gutters], "CodeMirror-scroll"), n.scroller.setAttribute("tabIndex", "-1"), n.wrapper = uo("div", [n.inputDiv, n.scrollbarH, n.scrollbarV, n.scrollbarFiller, n.gutterFiller, n.scroller], "CodeMirror"), Po && 8 > Fo && (n.gutters.style.zIndex = -1, n.scroller.style.paddingRight = 0), Yo && (r.style.width = "0px"), Ho || (n.scroller.draggable = !0), Go && (n.inputDiv.style.height = "1px", n.inputDiv.style.position = "absolute"), Po && 8 > Fo && (n.scrollbarH.style.minHeight = n.scrollbarV.style.minWidth = "18px"), e.appendChild ? e.appendChild(n.wrapper) : e(n.wrapper), n.viewFrom = n.viewTo = t.first, n.view = [], n.externalMeasured = null, n.viewOffset = 0, n.lastSizeC = 0, n.updateLineNumbers = null, n.lineNumWidth = n.lineNumInnerWidth = n.lineNumChars = null, n.prevInput = "", n.alignWidgets = !1, n.pollingFast = !1, n.poll = new Qi, n.cachedCharWidth = n.cachedTextHeight = n.cachedPaddingH = null, n.inaccurateSelection = !1, n.maxLine = null, n.maxLineLength = 0, n.maxLineChanged = !1, n.wheelDX = n.wheelDY = n.wheelStartX = n.wheelStartY = null, n.shift = !1, n.selForContextMenu = null
    }

    function n(t) {
        t.doc.mode = e.getMode(t.options, t.doc.modeOption), r(t)
    }

    function r(e) {
        e.doc.iter(function (e) {
            e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null)
        }), e.doc.frontier = e.doc.first, yt(e, 100), e.state.modeGen++, e.curOp && rn(e)
    }

    function i(e) {
        e.options.lineWrapping ? (bo(e.display.wrapper, "CodeMirror-wrap"), e.display.sizer.style.minWidth = "") : (vo(e.display.wrapper, "CodeMirror-wrap"), p(e)), a(e), rn(e), zt(e), setTimeout(function () {
            v(e)
        }, 100)
    }

    function o(e) {
        var t = Vt(e.display), n = e.options.lineWrapping, r = n && Math.max(5, e.display.scroller.clientWidth / Gt(e.display) - 3);
        return function (i) {
            if (Kr(e.doc, i))return 0;
            var o = 0;
            if (i.widgets)for (var a = 0; a < i.widgets.length; a++)i.widgets[a].height && (o += i.widgets[a].height);
            return n ? o + (Math.ceil(i.text.length / r) || 1) * t : o + t
        }
    }

    function a(e) {
        var t = e.doc, n = o(e);
        t.iter(function (e) {
            var t = n(e);
            t != e.height && xi(e, t)
        })
    }

    function s(e) {
        var t = La[e.options.keyMap], n = t.style;
        e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-keymap-\S+/g, "") + (n ? " cm-keymap-" + n : "")
    }

    function l(e) {
        e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), zt(e)
    }

    function c(e) {
        u(e), rn(e), setTimeout(function () {
            y(e)
        }, 20)
    }

    function u(e) {
        var t = e.display.gutters, n = e.options.gutters;
        fo(t);
        for (var r = 0; r < n.length; ++r) {
            var i = n[r], o = t.appendChild(uo("div", null, "CodeMirror-gutter " + i));
            "CodeMirror-linenumbers" == i && (e.display.lineGutter = o, o.style.width = (e.display.lineNumWidth || 1) + "px")
        }
        t.style.display = r ? "" : "none", d(e)
    }

    function d(e) {
        var t = e.display.gutters.offsetWidth;
        e.display.sizer.style.marginLeft = t + "px", e.display.scrollbarH.style.left = e.options.fixedGutter ? t + "px" : 0
    }

    function f(e) {
        if (0 == e.height)return 0;
        for (var t, n = e.text.length, r = e; t = Br(r);) {
            var i = t.find(0, !0);
            r = i.from.line, n += i.from.ch - i.to.ch
        }
        for (r = e; t = qr(r);) {
            var i = t.find(0, !0);
            n -= r.text.length - i.from.ch, r = i.to.line, n += r.text.length - i.to.ch
        }
        return n
    }

    function p(e) {
        var t = e.display, n = e.doc;
        t.maxLine = wi(n, n.first), t.maxLineLength = f(t.maxLine), t.maxLineChanged = !0, n.iter(function (e) {
            var n = f(e);
            n > t.maxLineLength && (t.maxLineLength = n, t.maxLine = e)
        })
    }

    function h(e) {
        var t = no(e.gutters, "CodeMirror-linenumbers");
        -1 == t && e.lineNumbers ? e.gutters = e.gutters.concat(["CodeMirror-linenumbers"]) : t > -1 && !e.lineNumbers && (e.gutters = e.gutters.slice(0), e.gutters.splice(t, 1))
    }

    function m(e) {
        return e.display.scroller.clientHeight - e.display.wrapper.clientHeight < es - 3
    }

    function g(e) {
        var t = e.display.scroller;
        return {
            clientHeight: t.clientHeight,
            barHeight: e.display.scrollbarV.clientHeight,
            scrollWidth: t.scrollWidth,
            clientWidth: t.clientWidth,
            hScrollbarTakesSpace: m(e),
            barWidth: e.display.scrollbarH.clientWidth,
            docHeight: Math.round(e.doc.height + Ct(e.display))
        }
    }

    function v(e, t) {
        t || (t = g(e));
        var n = e.display, r = xo(n.measure), i = t.docHeight + es, o = t.scrollWidth > t.clientWidth;
        o && t.scrollWidth <= t.clientWidth + 1 && r > 0 && !t.hScrollbarTakesSpace && (o = !1);
        var a = i > t.clientHeight;
        if (a ? (n.scrollbarV.style.display = "block", n.scrollbarV.style.bottom = o ? r + "px" : "0", n.scrollbarV.firstChild.style.height = Math.max(0, i - t.clientHeight + (t.barHeight || n.scrollbarV.clientHeight)) + "px") : (n.scrollbarV.style.display = "", n.scrollbarV.firstChild.style.height = "0"), o ? (n.scrollbarH.style.display = "block", n.scrollbarH.style.right = a ? r + "px" : "0", n.scrollbarH.firstChild.style.width = t.scrollWidth - t.clientWidth + (t.barWidth || n.scrollbarH.clientWidth) + "px") : (n.scrollbarH.style.display = "", n.scrollbarH.firstChild.style.width = "0"), o && a ? (n.scrollbarFiller.style.display = "block", n.scrollbarFiller.style.height = n.scrollbarFiller.style.width = r + "px") : n.scrollbarFiller.style.display = "", o && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (n.gutterFiller.style.display = "block", n.gutterFiller.style.height = r + "px", n.gutterFiller.style.width = n.gutters.offsetWidth + "px") : n.gutterFiller.style.display = "", !e.state.checkedOverlayScrollbar && t.clientHeight > 0) {
            if (0 === r) {
                var s = Jo && !Xo ? "12px" : "18px";
                n.scrollbarV.style.minWidth = n.scrollbarH.style.minHeight = s;
                var l = function (t) {
                    Wi(t) != n.scrollbarV && Wi(t) != n.scrollbarH && Qt(e, kn)(t)
                };
                Za(n.scrollbarV, "mousedown", l), Za(n.scrollbarH, "mousedown", l)
            }
            e.state.checkedOverlayScrollbar = !0
        }
    }

    function b(e, t, n) {
        var r = n && null != n.top ? Math.max(0, n.top) : e.scroller.scrollTop;
        r = Math.floor(r - xt(e));
        var i = n && null != n.bottom ? n.bottom : r + e.wrapper.clientHeight, o = Si(t, r), a = Si(t, i);
        if (n && n.ensure) {
            var s = n.ensure.from.line, l = n.ensure.to.line;
            if (o > s)return {from: s, to: Si(t, Ti(wi(t, s)) + e.wrapper.clientHeight)};
            if (Math.min(l, t.lastLine()) >= a)return {from: Si(t, Ti(wi(t, l)) - e.wrapper.clientHeight), to: l}
        }
        return {from: o, to: Math.max(a, o + 1)}
    }

    function y(e) {
        var t = e.display, n = t.view;
        if (t.alignWidgets || t.gutters.firstChild && e.options.fixedGutter) {
            for (var r = k(t) - t.scroller.scrollLeft + e.doc.scrollLeft, i = t.gutters.offsetWidth, o = r + "px", a = 0; a < n.length; a++)if (!n[a].hidden) {
                e.options.fixedGutter && n[a].gutter && (n[a].gutter.style.left = o);
                var s = n[a].alignable;
                if (s)for (var l = 0; l < s.length; l++)s[l].style.left = o
            }
            e.options.fixedGutter && (t.gutters.style.left = r + i + "px")
        }
    }

    function w(e) {
        if (!e.options.lineNumbers)return !1;
        var t = e.doc, n = _(e.options, t.first + t.size - 1), r = e.display;
        if (n.length != r.lineNumChars) {
            var i = r.measure.appendChild(uo("div", [uo("div", n)], "CodeMirror-linenumber CodeMirror-gutter-elt")), o = i.firstChild.offsetWidth, a = i.offsetWidth - o;
            return r.lineGutter.style.width = "", r.lineNumInnerWidth = Math.max(o, r.lineGutter.offsetWidth - a), r.lineNumWidth = r.lineNumInnerWidth + a, r.lineNumChars = r.lineNumInnerWidth ? n.length : -1, r.lineGutter.style.width = r.lineNumWidth + "px", d(e), !0
        }
        return !1
    }

    function _(e, t) {
        return String(e.lineNumberFormatter(t + e.firstLineNumber))
    }

    function k(e) {
        return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left
    }

    function x(e, t, n) {
        for (var r, i = e.display.viewFrom, o = e.display.viewTo, a = b(e.display, e.doc, t), s = !0; ; s = !1) {
            var l = e.display.scroller.clientWidth;
            if (!C(e, a, n))break;
            r = !0, e.display.maxLineChanged && !e.options.lineWrapping && S(e);
            var c = g(e);
            if (mt(e), T(e, c), v(e, c), Ho && e.options.lineWrapping && $(e, c), Ho && c.scrollWidth > c.clientWidth && c.scrollWidth < c.clientWidth + 1 && !m(e) && v(e), s && e.options.lineWrapping && l != e.display.scroller.clientWidth)n = !0; else if (n = !1, t && null != t.top && (t = {top: Math.min(c.docHeight - es - c.clientHeight, t.top)}), a = b(e.display, e.doc, t), a.from >= e.display.viewFrom && a.to <= e.display.viewTo)break
        }
        return e.display.updateLineNumbers = null, r && (Ki(e, "update", e), (e.display.viewFrom != i || e.display.viewTo != o) && Ki(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo)), r
    }

    function C(e, t, n) {
        var r = e.display, i = e.doc;
        if (!r.wrapper.offsetWidth)return void an(e);
        if (!(!n && t.from >= r.viewFrom && t.to <= r.viewTo && (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo) && 0 == un(e))) {
            w(e) && an(e);
            var o = L(e), a = i.first + i.size, s = Math.max(t.from - e.options.viewportMargin, i.first), l = Math.min(a, t.to + e.options.viewportMargin);
            r.viewFrom < s && s - r.viewFrom < 20 && (s = Math.max(i.first, r.viewFrom)), r.viewTo > l && r.viewTo - l < 20 && (l = Math.min(a, r.viewTo)), oa && (s = Wr(e.doc, s), l = Ur(e.doc, l));
            var c = s != r.viewFrom || l != r.viewTo || r.lastSizeC != r.wrapper.clientHeight;
            cn(e, s, l), r.viewOffset = Ti(wi(e.doc, r.viewFrom)), e.display.mover.style.top = r.viewOffset + "px";
            var u = un(e);
            if (c || 0 != u || n) {
                var d = mo();
                return u > 4 && (r.lineDiv.style.display = "none"), N(e, r.updateLineNumbers, o), u > 4 && (r.lineDiv.style.display = ""), d && mo() != d && d.offsetHeight && d.focus(), fo(r.cursorDiv), fo(r.selectionDiv), c && (r.lastSizeC = r.wrapper.clientHeight, yt(e, 400)), M(e), !0
            }
        }
    }

    function S(e) {
        var t = e.display, n = Et(e, t.maxLine, t.maxLine.text.length).left;
        t.maxLineChanged = !1;
        var r = Math.max(0, n + 3), i = Math.max(0, t.sizer.offsetLeft + r + es - t.scroller.clientWidth);
        t.sizer.style.minWidth = r + "px", i < e.doc.scrollLeft && Nn(e, Math.min(t.scroller.scrollLeft, i), !0)
    }

    function T(e, t) {
        e.display.sizer.style.minHeight = e.display.heightForcer.style.top = t.docHeight + "px", e.display.gutters.style.height = Math.max(t.docHeight, t.clientHeight - es) + "px"
    }

    function $(e, t) {
        e.display.sizer.offsetWidth + e.display.gutters.offsetWidth < e.display.scroller.clientWidth - 1 && (e.display.sizer.style.minHeight = e.display.heightForcer.style.top = "0px", e.display.gutters.style.height = t.docHeight + "px")
    }

    function M(e) {
        for (var t = e.display, n = t.lineDiv.offsetTop, r = 0; r < t.view.length; r++) {
            var i, o = t.view[r];
            if (!o.hidden) {
                if (Po && 8 > Fo) {
                    var a = o.node.offsetTop + o.node.offsetHeight;
                    i = a - n, n = a
                } else {
                    var s = o.node.getBoundingClientRect();
                    i = s.bottom - s.top
                }
                var l = o.line.height - i;
                if (2 > i && (i = Vt(t)), (l > .001 || -.001 > l) && (xi(o.line, i), E(o.line), o.rest))for (var c = 0; c < o.rest.length; c++)E(o.rest[c])
            }
        }
    }

    function E(e) {
        if (e.widgets)for (var t = 0; t < e.widgets.length; ++t)e.widgets[t].height = e.widgets[t].node.offsetHeight
    }

    function L(e) {
        for (var t = e.display, n = {}, r = {}, i = t.gutters.firstChild, o = 0; i; i = i.nextSibling, ++o)n[e.options.gutters[o]] = i.offsetLeft, r[e.options.gutters[o]] = i.offsetWidth;
        return {
            fixedPos: k(t),
            gutterTotalWidth: t.gutters.offsetWidth,
            gutterLeft: n,
            gutterWidth: r,
            wrapperWidth: t.wrapper.clientWidth
        }
    }

    function N(e, t, n) {
        function r(t) {
            var n = t.nextSibling;
            return Ho && Jo && e.display.currentWheelTarget == t ? t.style.display = "none" : t.parentNode.removeChild(t), n
        }

        for (var i = e.display, o = e.options.lineNumbers, a = i.lineDiv, s = a.firstChild, l = i.view, c = i.viewFrom, u = 0; u < l.length; u++) {
            var d = l[u];
            if (d.hidden); else if (d.node) {
                for (; s != d.node;)s = r(s);
                var f = o && null != t && c >= t && d.lineNumber;
                d.changes && (no(d.changes, "gutter") > -1 && (f = !1), I(e, d, c, n)), f && (fo(d.lineNumber), d.lineNumber.appendChild(document.createTextNode(_(e.options, c)))), s = d.node.nextSibling
            } else {
                var p = q(e, d, c, n);
                a.insertBefore(p, s)
            }
            c += d.size
        }
        for (; s;)s = r(s)
    }

    function I(e, t, n, r) {
        for (var i = 0; i < t.changes.length; i++) {
            var o = t.changes[i];
            "text" == o ? z(e, t) : "gutter" == o ? R(e, t, n, r) : "class" == o ? D(t) : "widget" == o && B(t, r)
        }
        t.changes = null
    }

    function A(e) {
        return e.node == e.text && (e.node = uo("div", null, null, "position: relative"), e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text), e.node.appendChild(e.text), Po && 8 > Fo && (e.node.style.zIndex = 2)), e.node
    }

    function j(e) {
        var t = e.bgClass ? e.bgClass + " " + (e.line.bgClass || "") : e.line.bgClass;
        if (t && (t += " CodeMirror-linebackground"), e.background)t ? e.background.className = t : (e.background.parentNode.removeChild(e.background), e.background = null); else if (t) {
            var n = A(e);
            e.background = n.insertBefore(uo("div", null, t), n.firstChild)
        }
    }

    function O(e, t) {
        var n = e.display.externalMeasured;
        return n && n.line == t.line ? (e.display.externalMeasured = null, t.measure = n.measure, n.built) : si(e, t)
    }

    function z(e, t) {
        var n = t.text.className, r = O(e, t);
        t.text == t.node && (t.node = r.pre), t.text.parentNode.replaceChild(r.pre, t.text), t.text = r.pre, r.bgClass != t.bgClass || r.textClass != t.textClass ? (t.bgClass = r.bgClass, t.textClass = r.textClass, D(t)) : n && (t.text.className = n)
    }

    function D(e) {
        j(e), e.line.wrapClass ? A(e).className = e.line.wrapClass : e.node != e.text && (e.node.className = "");
        var t = e.textClass ? e.textClass + " " + (e.line.textClass || "") : e.line.textClass;
        e.text.className = t || ""
    }

    function R(e, t, n, r) {
        t.gutter && (t.node.removeChild(t.gutter), t.gutter = null);
        var i = t.line.gutterMarkers;
        if (e.options.lineNumbers || i) {
            var o = A(t), a = t.gutter = o.insertBefore(uo("div", null, "CodeMirror-gutter-wrapper", "position: absolute; left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px"), t.text);
            if (!e.options.lineNumbers || i && i["CodeMirror-linenumbers"] || (t.lineNumber = a.appendChild(uo("div", _(e.options, n), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + r.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"))), i)for (var s = 0; s < e.options.gutters.length; ++s) {
                var l = e.options.gutters[s], c = i.hasOwnProperty(l) && i[l];
                c && a.appendChild(uo("div", [c], "CodeMirror-gutter-elt", "left: " + r.gutterLeft[l] + "px; width: " + r.gutterWidth[l] + "px"))
            }
        }
    }

    function B(e, t) {
        e.alignable && (e.alignable = null);
        for (var n, r = e.node.firstChild; r; r = n) {
            var n = r.nextSibling;
            "CodeMirror-linewidget" == r.className && e.node.removeChild(r)
        }
        P(e, t)
    }

    function q(e, t, n, r) {
        var i = O(e, t);
        return t.text = t.node = i.pre, i.bgClass && (t.bgClass = i.bgClass), i.textClass && (t.textClass = i.textClass), D(t), R(e, t, n, r), P(t, r), t.node
    }

    function P(e, t) {
        if (F(e.line, e, t, !0), e.rest)for (var n = 0; n < e.rest.length; n++)F(e.rest[n], e, t, !1)
    }

    function F(e, t, n, r) {
        if (e.widgets)for (var i = A(t), o = 0, a = e.widgets; o < a.length; ++o) {
            var s = a[o], l = uo("div", [s.node], "CodeMirror-linewidget");
            s.handleMouseEvents || (l.ignoreEvents = !0), H(s, l, t, n), r && s.above ? i.insertBefore(l, t.gutter || t.text) : i.appendChild(l), Ki(s, "redraw")
        }
    }

    function H(e, t, n, r) {
        if (e.noHScroll) {
            (n.alignable || (n.alignable = [])).push(t);
            var i = r.wrapperWidth;
            t.style.left = r.fixedPos + "px", e.coverGutter || (i -= r.gutterTotalWidth, t.style.paddingLeft = r.gutterTotalWidth + "px"), t.style.width = i + "px"
        }
        e.coverGutter && (t.style.zIndex = 5, t.style.position = "relative", e.noHScroll || (t.style.marginLeft = -r.gutterTotalWidth + "px"))
    }

    function W(e) {
        return aa(e.line, e.ch)
    }

    function U(e, t) {
        return sa(e, t) < 0 ? t : e
    }

    function K(e, t) {
        return sa(e, t) < 0 ? e : t
    }

    function V(e, t) {
        this.ranges = e, this.primIndex = t
    }

    function G(e, t) {
        this.anchor = e, this.head = t
    }

    function X(e, t) {
        var n = e[t];
        e.sort(function (e, t) {
            return sa(e.from(), t.from())
        }), t = no(e, n);
        for (var r = 1; r < e.length; r++) {
            var i = e[r], o = e[r - 1];
            if (sa(o.to(), i.from()) >= 0) {
                var a = K(o.from(), i.from()), s = U(o.to(), i.to()), l = o.empty() ? i.from() == i.head : o.from() == o.head;
                t >= r && --t, e.splice(--r, 2, new G(l ? s : a, l ? a : s))
            }
        }
        return new V(e, t)
    }

    function Z(e, t) {
        return new V([new G(e, t || e)], 0)
    }

    function Y(e, t) {
        return Math.max(e.first, Math.min(t, e.first + e.size - 1))
    }

    function Q(e, t) {
        if (t.line < e.first)return aa(e.first, 0);
        var n = e.first + e.size - 1;
        return t.line > n ? aa(n, wi(e, n).text.length) : J(t, wi(e, t.line).text.length)
    }

    function J(e, t) {
        var n = e.ch;
        return null == n || n > t ? aa(e.line, t) : 0 > n ? aa(e.line, 0) : e
    }

    function et(e, t) {
        return t >= e.first && t < e.first + e.size
    }

    function tt(e, t) {
        for (var n = [], r = 0; r < t.length; r++)n[r] = Q(e, t[r]);
        return n
    }

    function nt(e, t, n, r) {
        if (e.cm && e.cm.display.shift || e.extend) {
            var i = t.anchor;
            if (r) {
                var o = sa(n, i) < 0;
                o != sa(r, i) < 0 ? (i = n, n = r) : o != sa(n, r) < 0 && (n = r)
            }
            return new G(i, n)
        }
        return new G(r || n, n)
    }

    function rt(e, t, n, r) {
        ct(e, new V([nt(e, e.sel.primary(), t, n)], 0), r)
    }

    function it(e, t, n) {
        for (var r = [], i = 0; i < e.sel.ranges.length; i++)r[i] = nt(e, e.sel.ranges[i], t[i], null);
        var o = X(r, e.sel.primIndex);
        ct(e, o, n)
    }

    function ot(e, t, n, r) {
        var i = e.sel.ranges.slice(0);
        i[t] = n, ct(e, X(i, e.sel.primIndex), r)
    }

    function at(e, t, n, r) {
        ct(e, Z(t, n), r)
    }

    function st(e, t) {
        var n = {
            ranges: t.ranges, update: function (t) {
                this.ranges = [];
                for (var n = 0; n < t.length; n++)this.ranges[n] = new G(Q(e, t[n].anchor), Q(e, t[n].head))
            }
        };
        return Qa(e, "beforeSelectionChange", e, n), e.cm && Qa(e.cm, "beforeSelectionChange", e.cm, n), n.ranges != t.ranges ? X(n.ranges, n.ranges.length - 1) : t
    }

    function lt(e, t, n) {
        var r = e.history.done, i = to(r);
        i && i.ranges ? (r[r.length - 1] = t, ut(e, t, n)) : ct(e, t, n)
    }

    function ct(e, t, n) {
        ut(e, t, n), ji(e, e.sel, e.cm ? e.cm.curOp.id : 0 / 0, n)
    }

    function ut(e, t, n) {
        (Zi(e, "beforeSelectionChange") || e.cm && Zi(e.cm, "beforeSelectionChange")) && (t = st(e, t));
        var r = n && n.bias || (sa(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
        dt(e, pt(e, t, r, !0)), n && n.scroll === !1 || !e.cm || lr(e.cm)
    }

    function dt(e, t) {
        t.equals(e.sel) || (e.sel = t, e.cm && (e.cm.curOp.updateInput = e.cm.curOp.selectionChanged = !0, Xi(e.cm)), Ki(e, "cursorActivity", e))
    }

    function ft(e) {
        dt(e, pt(e, e.sel, null, !1), ns)
    }

    function pt(e, t, n, r) {
        for (var i, o = 0; o < t.ranges.length; o++) {
            var a = t.ranges[o], s = ht(e, a.anchor, n, r), l = ht(e, a.head, n, r);
            (i || s != a.anchor || l != a.head) && (i || (i = t.ranges.slice(0, o)), i[o] = new G(s, l))
        }
        return i ? X(i, t.primIndex) : t
    }

    function ht(e, t, n, r) {
        var i = !1, o = t, a = n || 1;
        e.cantEdit = !1;
        e:for (; ;) {
            var s = wi(e, o.line);
            if (s.markedSpans)for (var l = 0; l < s.markedSpans.length; ++l) {
                var c = s.markedSpans[l], u = c.marker;
                if ((null == c.from || (u.inclusiveLeft ? c.from <= o.ch : c.from < o.ch)) && (null == c.to || (u.inclusiveRight ? c.to >= o.ch : c.to > o.ch))) {
                    if (r && (Qa(u, "beforeCursorEnter"), u.explicitlyCleared)) {
                        if (s.markedSpans) {
                            --l;
                            continue
                        }
                        break
                    }
                    if (!u.atomic)continue;
                    var d = u.find(0 > a ? -1 : 1);
                    if (0 == sa(d, o) && (d.ch += a, d.ch < 0 ? d = d.line > e.first ? Q(e, aa(d.line - 1)) : null : d.ch > s.text.length && (d = d.line < e.first + e.size - 1 ? aa(d.line + 1, 0) : null), !d)) {
                        if (i)return r ? (e.cantEdit = !0, aa(e.first, 0)) : ht(e, t, n, !0);
                        i = !0, d = t, a = -a
                    }
                    o = d;
                    continue e
                }
            }
            return o
        }
    }

    function mt(e) {
        for (var t = e.display, n = e.doc, r = document.createDocumentFragment(), i = document.createDocumentFragment(), o = 0; o < n.sel.ranges.length; o++) {
            var a = n.sel.ranges[o], s = a.empty();
            (s || e.options.showCursorWhenSelecting) && gt(e, a, r), s || vt(e, a, i)
        }
        if (e.options.moveInputWithCursor) {
            var l = Ft(e, n.sel.primary().head, "div"), c = t.wrapper.getBoundingClientRect(), u = t.lineDiv.getBoundingClientRect(), d = Math.max(0, Math.min(t.wrapper.clientHeight - 10, l.top + u.top - c.top)), f = Math.max(0, Math.min(t.wrapper.clientWidth - 10, l.left + u.left - c.left));
            t.inputDiv.style.top = d + "px", t.inputDiv.style.left = f + "px"
        }
        po(t.cursorDiv, r), po(t.selectionDiv, i)
    }

    function gt(e, t, n) {
        var r = Ft(e, t.head, "div", null, null, !e.options.singleCursorHeightPerLine), i = n.appendChild(uo("div", " ", "CodeMirror-cursor"));
        if (i.style.left = r.left + "px", i.style.top = r.top + "px", i.style.height = Math.max(0, r.bottom - r.top) * e.options.cursorHeight + "px", r.other) {
            var o = n.appendChild(uo("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
            o.style.display = "", o.style.left = r.other.left + "px", o.style.top = r.other.top + "px", o.style.height = .85 * (r.other.bottom - r.other.top) + "px"
        }
    }

    function vt(e, t, n) {
        function r(e, t, n, r) {
            0 > t && (t = 0), t = Math.round(t), r = Math.round(r), s.appendChild(uo("div", null, "CodeMirror-selected", "position: absolute; left: " + e + "px; top: " + t + "px; width: " + (null == n ? u - e : n) + "px; height: " + (r - t) + "px"))
        }

        function i(t, n, i) {
            function o(n, r) {
                return Pt(e, aa(t, n), "div", d, r)
            }

            var s, l, d = wi(a, t), f = d.text.length;
            return To($i(d), n || 0, null == i ? f : i, function (e, t, a) {
                var d, p, h, m = o(e, "left");
                if (e == t)d = m, p = h = m.left; else {
                    if (d = o(t - 1, "right"), "rtl" == a) {
                        var g = m;
                        m = d, d = g
                    }
                    p = m.left, h = d.right
                }
                null == n && 0 == e && (p = c), d.top - m.top > 3 && (r(p, m.top, null, m.bottom), p = c, m.bottom < d.top && r(p, m.bottom, null, d.top)), null == i && t == f && (h = u), (!s || m.top < s.top || m.top == s.top && m.left < s.left) && (s = m), (!l || d.bottom > l.bottom || d.bottom == l.bottom && d.right > l.right) && (l = d), c + 1 > p && (p = c), r(p, d.top, h - p, d.bottom)
            }), {start: s, end: l}
        }

        var o = e.display, a = e.doc, s = document.createDocumentFragment(), l = St(e.display), c = l.left, u = o.lineSpace.offsetWidth - l.right, d = t.from(), f = t.to();
        if (d.line == f.line)i(d.line, d.ch, f.ch); else {
            var p = wi(a, d.line), h = wi(a, f.line), m = Fr(p) == Fr(h), g = i(d.line, d.ch, m ? p.text.length + 1 : null).end, v = i(f.line, m ? 0 : null, f.ch).start;
            m && (g.top < v.top - 2 ? (r(g.right, g.top, null, g.bottom), r(c, v.top, v.left, v.bottom)) : r(g.right, g.top, v.left - g.right, g.bottom)), g.bottom < v.top && r(c, g.bottom, null, v.top)
        }
        n.appendChild(s)
    }

    function bt(e) {
        if (e.state.focused) {
            var t = e.display;
            clearInterval(t.blinker);
            var n = !0;
            t.cursorDiv.style.visibility = "", e.options.cursorBlinkRate > 0 ? t.blinker = setInterval(function () {
                t.cursorDiv.style.visibility = (n = !n) ? "" : "hidden"
            }, e.options.cursorBlinkRate) : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = "hidden")
        }
    }

    function yt(e, t) {
        e.doc.mode.startState && e.doc.frontier < e.display.viewTo && e.state.highlight.set(t, ao(wt, e))
    }

    function wt(e) {
        var t = e.doc;
        if (t.frontier < t.first && (t.frontier = t.first), !(t.frontier >= e.display.viewTo)) {
            var n = +new Date + e.options.workTime, r = $a(t.mode, kt(e, t.frontier));
            Yt(e, function () {
                t.iter(t.frontier, Math.min(t.first + t.size, e.display.viewTo + 500), function (i) {
                    if (t.frontier >= e.display.viewFrom) {
                        var o = i.styles, a = ri(e, i, r, !0);
                        i.styles = a.styles;
                        var s = i.styleClasses, l = a.classes;
                        l ? i.styleClasses = l : s && (i.styleClasses = null);
                        for (var c = !o || o.length != i.styles.length || s != l && (!s || !l || s.bgClass != l.bgClass || s.textClass != l.textClass), u = 0; !c && u < o.length; ++u)c = o[u] != i.styles[u];
                        c && on(e, t.frontier, "text"), i.stateAfter = $a(t.mode, r)
                    } else oi(e, i.text, r), i.stateAfter = t.frontier % 5 == 0 ? $a(t.mode, r) : null;
                    return ++t.frontier, +new Date > n ? (yt(e, e.options.workDelay), !0) : void 0
                })
            })
        }
    }

    function _t(e, t, n) {
        for (var r, i, o = e.doc, a = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), s = t; s > a; --s) {
            if (s <= o.first)return o.first;
            var l = wi(o, s - 1);
            if (l.stateAfter && (!n || s <= o.frontier))return s;
            var c = os(l.text, null, e.options.tabSize);
            (null == i || r > c) && (i = s - 1, r = c)
        }
        return i
    }

    function kt(e, t, n) {
        var r = e.doc, i = e.display;
        if (!r.mode.startState)return !0;
        var o = _t(e, t, n), a = o > r.first && wi(r, o - 1).stateAfter;
        return a = a ? $a(r.mode, a) : Ma(r.mode), r.iter(o, t, function (n) {
            oi(e, n.text, a);
            var s = o == t - 1 || o % 5 == 0 || o >= i.viewFrom && o < i.viewTo;
            n.stateAfter = s ? $a(r.mode, a) : null, ++o
        }), n && (r.frontier = o), a
    }

    function xt(e) {
        return e.lineSpace.offsetTop
    }

    function Ct(e) {
        return e.mover.offsetHeight - e.lineSpace.offsetHeight
    }

    function St(e) {
        if (e.cachedPaddingH)return e.cachedPaddingH;
        var t = po(e.measure, uo("pre", "x")), n = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle, r = {
            left: parseInt(n.paddingLeft),
            right: parseInt(n.paddingRight)
        };
        return isNaN(r.left) || isNaN(r.right) || (e.cachedPaddingH = r), r
    }

    function Tt(e, t, n) {
        var r = e.options.lineWrapping, i = r && e.display.scroller.clientWidth;
        if (!t.measure.heights || r && t.measure.width != i) {
            var o = t.measure.heights = [];
            if (r) {
                t.measure.width = i;
                for (var a = t.text.firstChild.getClientRects(), s = 0; s < a.length - 1; s++) {
                    var l = a[s], c = a[s + 1];
                    Math.abs(l.bottom - c.bottom) > 2 && o.push((l.bottom + c.top) / 2 - n.top)
                }
            }
            o.push(n.bottom - n.top)
        }
    }

    function $t(e, t, n) {
        if (e.line == t)return {map: e.measure.map, cache: e.measure.cache};
        for (var r = 0; r < e.rest.length; r++)if (e.rest[r] == t)return {
            map: e.measure.maps[r],
            cache: e.measure.caches[r]
        };
        for (var r = 0; r < e.rest.length; r++)if (Ci(e.rest[r]) > n)return {
            map: e.measure.maps[r],
            cache: e.measure.caches[r],
            before: !0
        }
    }

    function Mt(e, t) {
        t = Fr(t);
        var n = Ci(t), r = e.display.externalMeasured = new tn(e.doc, t, n);
        r.lineN = n;
        var i = r.built = si(e, r);
        return r.text = i.pre, po(e.display.lineMeasure, i.pre), r
    }

    function Et(e, t, n, r) {
        return It(e, Nt(e, t), n, r)
    }

    function Lt(e, t) {
        if (t >= e.display.viewFrom && t < e.display.viewTo)return e.display.view[sn(e, t)];
        var n = e.display.externalMeasured;
        return n && t >= n.lineN && t < n.lineN + n.size ? n : void 0
    }

    function Nt(e, t) {
        var n = Ci(t), r = Lt(e, n);
        r && !r.text ? r = null : r && r.changes && I(e, r, n, L(e)), r || (r = Mt(e, t));
        var i = $t(r, t, n);
        return {line: t, view: r, rect: null, map: i.map, cache: i.cache, before: i.before, hasHeights: !1}
    }

    function It(e, t, n, r, i) {
        t.before && (n = -1);
        var o, a = n + (r || "");
        return t.cache.hasOwnProperty(a) ? o = t.cache[a] : (t.rect || (t.rect = t.view.text.getBoundingClientRect()), t.hasHeights || (Tt(e, t.view, t.rect), t.hasHeights = !0), o = At(e, t, n, r), o.bogus || (t.cache[a] = o)), {
            left: o.left,
            right: o.right,
            top: i ? o.rtop : o.top,
            bottom: i ? o.rbottom : o.bottom
        }
    }

    function At(e, t, n, r) {
        for (var i, o, a, s, l = t.map, c = 0; c < l.length; c += 3) {
            var u = l[c], d = l[c + 1];
            if (u > n ? (o = 0, a = 1, s = "left") : d > n ? (o = n - u, a = o + 1) : (c == l.length - 3 || n == d && l[c + 3] > n) && (a = d - u, o = a - 1, n >= d && (s = "right")), null != o) {
                if (i = l[c + 2], u == d && r == (i.insertLeft ? "left" : "right") && (s = r), "left" == r && 0 == o)for (; c && l[c - 2] == l[c - 3] && l[c - 1].insertLeft;)i = l[(c -= 3) + 2], s = "left";
                if ("right" == r && o == d - u)for (; c < l.length - 3 && l[c + 3] == l[c + 4] && !l[c + 5].insertLeft;)i = l[(c += 3) + 2], s = "right";
                break
            }
        }
        var f;
        if (3 == i.nodeType) {
            for (; o && co(t.line.text.charAt(u + o));)--o;
            for (; d > u + a && co(t.line.text.charAt(u + a));)++a;
            if (Po && 9 > Fo && 0 == o && a == d - u)f = i.parentNode.getBoundingClientRect(); else if (Po && e.options.lineWrapping) {
                var p = ls(i, o, a).getClientRects();
                f = p.length ? p["right" == r ? p.length - 1 : 0] : da
            } else f = ls(i, o, a).getBoundingClientRect() || da
        } else {
            o > 0 && (s = r = "right");
            var p;
            f = e.options.lineWrapping && (p = i.getClientRects()).length > 1 ? p["right" == r ? p.length - 1 : 0] : i.getBoundingClientRect()
        }
        if (Po && 9 > Fo && !o && (!f || !f.left && !f.right)) {
            var h = i.parentNode.getClientRects()[0];
            f = h ? {left: h.left, right: h.left + Gt(e.display), top: h.top, bottom: h.bottom} : da
        }
        for (var m = f.top - t.rect.top, g = f.bottom - t.rect.top, v = (m + g) / 2, b = t.view.measure.heights, c = 0; c < b.length - 1 && !(v < b[c]); c++);
        var y = c ? b[c - 1] : 0, w = b[c], _ = {
            left: ("right" == s ? f.right : f.left) - t.rect.left,
            right: ("left" == s ? f.left : f.right) - t.rect.left,
            top: y,
            bottom: w
        };
        return f.left || f.right || (_.bogus = !0), e.options.singleCursorHeightPerLine || (_.rtop = m, _.rbottom = g), _
    }

    function jt(e) {
        if (e.measure && (e.measure.cache = {}, e.measure.heights = null, e.rest))for (var t = 0; t < e.rest.length; t++)e.measure.caches[t] = {}
    }

    function Ot(e) {
        e.display.externalMeasure = null, fo(e.display.lineMeasure);
        for (var t = 0; t < e.display.view.length; t++)jt(e.display.view[t])
    }

    function zt(e) {
        Ot(e), e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null, e.options.lineWrapping || (e.display.maxLineChanged = !0), e.display.lineNumChars = null
    }

    function Dt() {
        return window.pageXOffset || (document.documentElement || document.body).scrollLeft
    }

    function Rt() {
        return window.pageYOffset || (document.documentElement || document.body).scrollTop
    }

    function Bt(e, t, n, r) {
        if (t.widgets)for (var i = 0; i < t.widgets.length; ++i)if (t.widgets[i].above) {
            var o = Xr(t.widgets[i]);
            n.top += o, n.bottom += o
        }
        if ("line" == r)return n;
        r || (r = "local");
        var a = Ti(t);
        if ("local" == r ? a += xt(e.display) : a -= e.display.viewOffset, "page" == r || "window" == r) {
            var s = e.display.lineSpace.getBoundingClientRect();
            a += s.top + ("window" == r ? 0 : Rt());
            var l = s.left + ("window" == r ? 0 : Dt());
            n.left += l, n.right += l
        }
        return n.top += a, n.bottom += a, n
    }

    function qt(e, t, n) {
        if ("div" == n)return t;
        var r = t.left, i = t.top;
        if ("page" == n)r -= Dt(), i -= Rt(); else if ("local" == n || !n) {
            var o = e.display.sizer.getBoundingClientRect();
            r += o.left, i += o.top
        }
        var a = e.display.lineSpace.getBoundingClientRect();
        return {left: r - a.left, top: i - a.top}
    }

    function Pt(e, t, n, r, i) {
        return r || (r = wi(e.doc, t.line)), Bt(e, r, Et(e, r, t.ch, i), n)
    }

    function Ft(e, t, n, r, i, o) {
        function a(t, a) {
            var s = It(e, i, t, a ? "right" : "left", o);
            return a ? s.left = s.right : s.right = s.left, Bt(e, r, s, n)
        }

        function s(e, t) {
            var n = l[t], r = n.level % 2;
            return e == $o(n) && t && n.level < l[t - 1].level ? (n = l[--t], e = Mo(n) - (n.level % 2 ? 0 : 1), r = !0) : e == Mo(n) && t < l.length - 1 && n.level < l[t + 1].level && (n = l[++t], e = $o(n) - n.level % 2, r = !1), r && e == n.to && e > n.from ? a(e - 1) : a(e, r)
        }

        r = r || wi(e.doc, t.line), i || (i = Nt(e, r));
        var l = $i(r), c = t.ch;
        if (!l)return a(c);
        var u = jo(l, c), d = s(c, u);
        return null != _s && (d.other = s(c, _s)), d
    }

    function Ht(e, t) {
        var n = 0, t = Q(e.doc, t);
        e.options.lineWrapping || (n = Gt(e.display) * t.ch);
        var r = wi(e.doc, t.line), i = Ti(r) + xt(e.display);
        return {left: n, right: n, top: i, bottom: i + r.height}
    }

    function Wt(e, t, n, r) {
        var i = aa(e, t);
        return i.xRel = r, n && (i.outside = !0), i
    }

    function Ut(e, t, n) {
        var r = e.doc;
        if (n += e.display.viewOffset, 0 > n)return Wt(r.first, 0, !0, -1);
        var i = Si(r, n), o = r.first + r.size - 1;
        if (i > o)return Wt(r.first + r.size - 1, wi(r, o).text.length, !0, 1);
        0 > t && (t = 0);
        for (var a = wi(r, i); ;) {
            var s = Kt(e, a, i, t, n), l = qr(a), c = l && l.find(0, !0);
            if (!l || !(s.ch > c.from.ch || s.ch == c.from.ch && s.xRel > 0))return s;
            i = Ci(a = c.to.line)
        }
    }

    function Kt(e, t, n, r, i) {
        function o(r) {
            var i = Ft(e, aa(n, r), "line", t, c);
            return s = !0, a > i.bottom ? i.left - l : a < i.top ? i.left + l : (s = !1, i.left)
        }

        var a = i - Ti(t), s = !1, l = 2 * e.display.wrapper.clientWidth, c = Nt(e, t), u = $i(t), d = t.text.length, f = Eo(t), p = Lo(t), h = o(f), m = s, g = o(p), v = s;
        if (r > g)return Wt(n, p, v, 1);
        for (; ;) {
            if (u ? p == f || p == zo(t, f, 1) : 1 >= p - f) {
                for (var b = h > r || g - r >= r - h ? f : p, y = r - (b == f ? h : g); co(t.text.charAt(b));)++b;
                var w = Wt(n, b, b == f ? m : v, -1 > y ? -1 : y > 1 ? 1 : 0);
                return w
            }
            var _ = Math.ceil(d / 2), k = f + _;
            if (u) {
                k = f;
                for (var x = 0; _ > x; ++x)k = zo(t, k, 1)
            }
            var C = o(k);
            C > r ? (p = k, g = C, (v = s) && (g += 1e3), d = _) : (f = k, h = C, m = s, d -= _)
        }
    }

    function Vt(e) {
        if (null != e.cachedTextHeight)return e.cachedTextHeight;
        if (null == la) {
            la = uo("pre");
            for (var t = 0; 49 > t; ++t)la.appendChild(document.createTextNode("x")), la.appendChild(uo("br"));
            la.appendChild(document.createTextNode("x"))
        }
        po(e.measure, la);
        var n = la.offsetHeight / 50;
        return n > 3 && (e.cachedTextHeight = n), fo(e.measure), n || 1
    }

    function Gt(e) {
        if (null != e.cachedCharWidth)return e.cachedCharWidth;
        var t = uo("span", "xxxxxxxxxx"), n = uo("pre", [t]);
        po(e.measure, n);
        var r = t.getBoundingClientRect(), i = (r.right - r.left) / 10;
        return i > 2 && (e.cachedCharWidth = i), i || 10
    }

    function Xt(e) {
        e.curOp = {
            viewChanged: !1,
            startHeight: e.doc.height,
            forceUpdate: !1,
            updateInput: null,
            typing: !1,
            changeObjs: null,
            cursorActivityHandlers: null,
            selectionChanged: !1,
            updateMaxLine: !1,
            scrollLeft: null,
            scrollTop: null,
            scrollToPos: null,
            id: ++fa
        }, Ja++ || (Ka = [])
    }

    function Zt(e) {
        var t = e.curOp, n = e.doc, r = e.display;
        if (e.curOp = null, t.updateMaxLine && p(e), t.viewChanged || t.forceUpdate || null != t.scrollTop || t.scrollToPos && (t.scrollToPos.from.line < r.viewFrom || t.scrollToPos.to.line >= r.viewTo) || r.maxLineChanged && e.options.lineWrapping) {
            var i = x(e, {top: t.scrollTop, ensure: t.scrollToPos}, t.forceUpdate);
            e.display.scroller.offsetHeight && (e.doc.scrollTop = e.display.scroller.scrollTop)
        }
        if (!i && t.selectionChanged && mt(e), i || t.startHeight == e.doc.height || v(e), null == r.wheelStartX || null == t.scrollTop && null == t.scrollLeft && !t.scrollToPos || (r.wheelStartX = r.wheelStartY = null), null != t.scrollTop && r.scroller.scrollTop != t.scrollTop) {
            var o = Math.max(0, Math.min(r.scroller.scrollHeight - r.scroller.clientHeight, t.scrollTop));
            r.scroller.scrollTop = r.scrollbarV.scrollTop = n.scrollTop = o
        }
        if (null != t.scrollLeft && r.scroller.scrollLeft != t.scrollLeft) {
            var a = Math.max(0, Math.min(r.scroller.scrollWidth - r.scroller.clientWidth, t.scrollLeft));
            r.scroller.scrollLeft = r.scrollbarH.scrollLeft = n.scrollLeft = a, y(e)
        }
        if (t.scrollToPos) {
            var s = ir(e, Q(e.doc, t.scrollToPos.from), Q(e.doc, t.scrollToPos.to), t.scrollToPos.margin);
            t.scrollToPos.isCursor && e.state.focused && rr(e, s)
        }
        t.selectionChanged && bt(e), e.state.focused && t.updateInput && hn(e, t.typing);
        var l = t.maybeHiddenMarkers, c = t.maybeUnhiddenMarkers;
        if (l)for (var u = 0; u < l.length; ++u)l[u].lines.length || Qa(l[u], "hide");
        if (c)for (var u = 0; u < c.length; ++u)c[u].lines.length && Qa(c[u], "unhide");
        var d;
        if (--Ja || (d = Ka, Ka = null), t.changeObjs && Qa(e, "changes", e, t.changeObjs), d)for (var u = 0; u < d.length; ++u)d[u]();
        if (t.cursorActivityHandlers)for (var u = 0; u < t.cursorActivityHandlers.length; u++)t.cursorActivityHandlers[u](e)
    }

    function Yt(e, t) {
        if (e.curOp)return t();
        Xt(e);
        try {
            return t()
        } finally {
            Zt(e)
        }
    }

    function Qt(e, t) {
        return function () {
            if (e.curOp)return t.apply(e, arguments);
            Xt(e);
            try {
                return t.apply(e, arguments)
            } finally {
                Zt(e)
            }
        }
    }

    function Jt(e) {
        return function () {
            if (this.curOp)return e.apply(this, arguments);
            Xt(this);
            try {
                return e.apply(this, arguments)
            } finally {
                Zt(this)
            }
        }
    }

    function en(e) {
        return function () {
            var t = this.cm;
            if (!t || t.curOp)return e.apply(this, arguments);
            Xt(t);
            try {
                return e.apply(this, arguments)
            } finally {
                Zt(t)
            }
        }
    }

    function tn(e, t, n) {
        this.line = t, this.rest = Hr(t), this.size = this.rest ? Ci(to(this.rest)) - n + 1 : 1, this.node = this.text = null, this.hidden = Kr(e, t)
    }

    function nn(e, t, n) {
        for (var r, i = [], o = t; n > o; o = r) {
            var a = new tn(e.doc, wi(e.doc, o), o);
            r = o + a.size, i.push(a)
        }
        return i
    }

    function rn(e, t, n, r) {
        null == t && (t = e.doc.first), null == n && (n = e.doc.first + e.doc.size), r || (r = 0);
        var i = e.display;
        if (r && n < i.viewTo && (null == i.updateLineNumbers || i.updateLineNumbers > t) && (i.updateLineNumbers = t), e.curOp.viewChanged = !0, t >= i.viewTo)oa && Wr(e.doc, t) < i.viewTo && an(e); else if (n <= i.viewFrom)oa && Ur(e.doc, n + r) > i.viewFrom ? an(e) : (i.viewFrom += r, i.viewTo += r); else if (t <= i.viewFrom && n >= i.viewTo)an(e); else if (t <= i.viewFrom) {
            var o = ln(e, n, n + r, 1);
            o ? (i.view = i.view.slice(o.index), i.viewFrom = o.lineN, i.viewTo += r) : an(e)
        } else if (n >= i.viewTo) {
            var o = ln(e, t, t, -1);
            o ? (i.view = i.view.slice(0, o.index), i.viewTo = o.lineN) : an(e)
        } else {
            var a = ln(e, t, t, -1), s = ln(e, n, n + r, 1);
            a && s ? (i.view = i.view.slice(0, a.index).concat(nn(e, a.lineN, s.lineN)).concat(i.view.slice(s.index)), i.viewTo += r) : an(e)
        }
        var l = i.externalMeasured;
        l && (n < l.lineN ? l.lineN += r : t < l.lineN + l.size && (i.externalMeasured = null))
    }

    function on(e, t, n) {
        e.curOp.viewChanged = !0;
        var r = e.display, i = e.display.externalMeasured;
        if (i && t >= i.lineN && t < i.lineN + i.size && (r.externalMeasured = null), !(t < r.viewFrom || t >= r.viewTo)) {
            var o = r.view[sn(e, t)];
            if (null != o.node) {
                var a = o.changes || (o.changes = []);
                -1 == no(a, n) && a.push(n)
            }
        }
    }

    function an(e) {
        e.display.viewFrom = e.display.viewTo = e.doc.first, e.display.view = [], e.display.viewOffset = 0
    }

    function sn(e, t) {
        if (t >= e.display.viewTo)return null;
        if (t -= e.display.viewFrom, 0 > t)return null;
        for (var n = e.display.view, r = 0; r < n.length; r++)if (t -= n[r].size, 0 > t)return r
    }

    function ln(e, t, n, r) {
        var i, o = sn(e, t), a = e.display.view;
        if (!oa || n == e.doc.first + e.doc.size)return {index: o, lineN: n};
        for (var s = 0, l = e.display.viewFrom; o > s; s++)l += a[s].size;
        if (l != t) {
            if (r > 0) {
                if (o == a.length - 1)return null;
                i = l + a[o].size - t, o++
            } else i = l - t;
            t += i, n += i
        }
        for (; Wr(e.doc, n) != n;) {
            if (o == (0 > r ? 0 : a.length - 1))return null;
            n += r * a[o - (0 > r ? 1 : 0)].size, o += r
        }
        return {index: o, lineN: n}
    }

    function cn(e, t, n) {
        var r = e.display, i = r.view;
        0 == i.length || t >= r.viewTo || n <= r.viewFrom ? (r.view = nn(e, t, n), r.viewFrom = t) : (r.viewFrom > t ? r.view = nn(e, t, r.viewFrom).concat(r.view) : r.viewFrom < t && (r.view = r.view.slice(sn(e, t))), r.viewFrom = t, r.viewTo < n ? r.view = r.view.concat(nn(e, r.viewTo, n)) : r.viewTo > n && (r.view = r.view.slice(0, sn(e, n)))), r.viewTo = n
    }

    function un(e) {
        for (var t = e.display.view, n = 0, r = 0; r < t.length; r++) {
            var i = t[r];
            i.hidden || i.node && !i.changes || ++n
        }
        return n
    }

    function dn(e) {
        e.display.pollingFast || e.display.poll.set(e.options.pollInterval, function () {
            pn(e), e.state.focused && dn(e)
        })
    }

    function fn(e) {
        function t() {
            var r = pn(e);
            r || n ? (e.display.pollingFast = !1, dn(e)) : (n = !0, e.display.poll.set(60, t))
        }

        var n = !1;
        e.display.pollingFast = !0, e.display.poll.set(20, t)
    }

    function pn(e) {
        var t = e.display.input, n = e.display.prevInput, r = e.doc;
        if (!e.state.focused || bs(t) && !n || vn(e) || e.options.disableInput)return !1;
        e.state.pasteIncoming && e.state.fakedLastChar && (t.value = t.value.substring(0, t.value.length - 1), e.state.fakedLastChar = !1);
        var i = t.value;
        if (i == n && !e.somethingSelected())return !1;
        if (Po && Fo >= 9 && e.display.inputHasSelection === i)return hn(e), !1;
        var o = !e.curOp;
        o && Xt(e), e.display.shift = !1, 8203 != i.charCodeAt(0) || r.sel != e.display.selForContextMenu || n || (n = "​");
        for (var a = 0, s = Math.min(n.length, i.length); s > a && n.charCodeAt(a) == i.charCodeAt(a);)++a;
        for (var l = i.slice(a), c = vs(l), u = e.state.pasteIncoming && c.length > 1 && r.sel.ranges.length == c.length, d = r.sel.ranges.length - 1; d >= 0; d--) {
            var f = r.sel.ranges[d], p = f.from(), h = f.to();
            a < n.length ? p = aa(p.line, p.ch - (n.length - a)) : e.state.overwrite && f.empty() && !e.state.pasteIncoming && (h = aa(h.line, Math.min(wi(r, h.line).text.length, h.ch + to(c).length)));
            var m = e.curOp.updateInput, g = {
                from: p,
                to: h,
                text: u ? [c[d]] : c,
                origin: e.state.pasteIncoming ? "paste" : e.state.cutIncoming ? "cut" : "+input"
            };
            if (Zn(e.doc, g), Ki(e, "inputRead", e, g), l && !e.state.pasteIncoming && e.options.electricChars && e.options.smartIndent && f.head.ch < 100 && (!d || r.sel.ranges[d - 1].head.line != f.head.line)) {
                var v = e.getModeAt(f.head);
                if (v.electricChars) {
                    for (var b = 0; b < v.electricChars.length; b++)if (l.indexOf(v.electricChars.charAt(b)) > -1) {
                        ur(e, f.head.line, "smart");
                        break
                    }
                } else if (v.electricInput) {
                    var y = ba(g);
                    v.electricInput.test(wi(r, y.line).text.slice(0, y.ch)) && ur(e, f.head.line, "smart")
                }
            }
        }
        return lr(e), e.curOp.updateInput = m, e.curOp.typing = !0, i.length > 1e3 || i.indexOf("\n") > -1 ? t.value = e.display.prevInput = "" : e.display.prevInput = i, o && Zt(e), e.state.pasteIncoming = e.state.cutIncoming = !1, !0
    }

    function hn(e, t) {
        var n, r, i = e.doc;
        if (e.somethingSelected()) {
            e.display.prevInput = "";
            var o = i.sel.primary();
            n = ys && (o.to().line - o.from().line > 100 || (r = e.getSelection()).length > 1e3);
            var a = n ? "-" : r || e.getSelection();
            e.display.input.value = a, e.state.focused && ss(e.display.input), Po && Fo >= 9 && (e.display.inputHasSelection = a)
        } else t || (e.display.prevInput = e.display.input.value = "", Po && Fo >= 9 && (e.display.inputHasSelection = null));
        e.display.inaccurateSelection = n
    }

    function mn(e) {
        "nocursor" == e.options.readOnly || Qo && mo() == e.display.input || e.display.input.focus()
    }

    function gn(e) {
        e.state.focused || (mn(e), Pn(e))
    }

    function vn(e) {
        return e.options.readOnly || e.doc.cantEdit
    }

    function bn(e) {
        function t() {
            e.state.focused && setTimeout(ao(mn, e), 0)
        }

        function n(t) {
            Gi(e, t) || Xa(t)
        }

        function r(t) {
            if (e.somethingSelected())i.inaccurateSelection && (i.prevInput = "", i.inaccurateSelection = !1, i.input.value = e.getSelection(), ss(i.input)); else {
                for (var n = "", r = [], o = 0; o < e.doc.sel.ranges.length; o++) {
                    var a = e.doc.sel.ranges[o].head.line, s = {anchor: aa(a, 0), head: aa(a + 1, 0)};
                    r.push(s), n += e.getRange(s.anchor, s.head)
                }
                "cut" == t.type ? e.setSelections(r, null, ns) : (i.prevInput = "", i.input.value = n, ss(i.input))
            }
            "cut" == t.type && (e.state.cutIncoming = !0)
        }

        var i = e.display;
        Za(i.scroller, "mousedown", Qt(e, kn)), Po && 11 > Fo ? Za(i.scroller, "dblclick", Qt(e, function (t) {
            if (!Gi(e, t)) {
                var n = _n(e, t);
                if (n && !$n(e, t) && !wn(e.display, t)) {
                    Va(t);
                    var r = mr(e, n);
                    rt(e.doc, r.anchor, r.head)
                }
            }
        })) : Za(i.scroller, "dblclick", function (t) {
            Gi(e, t) || Va(t)
        }), Za(i.lineSpace, "selectstart", function (e) {
            wn(i, e) || Va(e)
        }), ra || Za(i.scroller, "contextmenu", function (t) {
            Hn(e, t)
        }), Za(i.scroller, "scroll", function () {
            i.scroller.clientHeight && (Ln(e, i.scroller.scrollTop), Nn(e, i.scroller.scrollLeft, !0), Qa(e, "scroll", e))
        }), Za(i.scrollbarV, "scroll", function () {
            i.scroller.clientHeight && Ln(e, i.scrollbarV.scrollTop)
        }), Za(i.scrollbarH, "scroll", function () {
            i.scroller.clientHeight && Nn(e, i.scrollbarH.scrollLeft)
        }), Za(i.scroller, "mousewheel", function (t) {
            In(e, t)
        }), Za(i.scroller, "DOMMouseScroll", function (t) {
            In(e, t)
        }), Za(i.scrollbarH, "mousedown", t), Za(i.scrollbarV, "mousedown", t), Za(i.wrapper, "scroll", function () {
            i.wrapper.scrollTop = i.wrapper.scrollLeft = 0
        }), Za(i.input, "keyup", Qt(e, Bn)), Za(i.input, "input", function () {
            Po && Fo >= 9 && e.display.inputHasSelection && (e.display.inputHasSelection = null), fn(e)
        }), Za(i.input, "keydown", Qt(e, Dn)), Za(i.input, "keypress", Qt(e, qn)), Za(i.input, "focus", ao(Pn, e)), Za(i.input, "blur", ao(Fn, e)), e.options.dragDrop && (Za(i.scroller, "dragstart", function (t) {
            En(e, t)
        }), Za(i.scroller, "dragenter", n), Za(i.scroller, "dragover", n), Za(i.scroller, "drop", Qt(e, Mn))), Za(i.scroller, "paste", function (t) {
            wn(i, t) || (e.state.pasteIncoming = !0, mn(e), fn(e))
        }), Za(i.input, "paste", function () {
            if (Ho && !e.state.fakedLastChar && !(new Date - e.state.lastMiddleDown < 200)) {
                var t = i.input.selectionStart, n = i.input.selectionEnd;
                i.input.value += "$", i.input.selectionEnd = n, i.input.selectionStart = t, e.state.fakedLastChar = !0
            }
            e.state.pasteIncoming = !0, fn(e)
        }), Za(i.input, "cut", r), Za(i.input, "copy", r), Go && Za(i.sizer, "mouseup", function () {
            mo() == i.input && i.input.blur(), mn(e)
        })
    }

    function yn(e) {
        var t = e.display;
        t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null, e.setSize()
    }

    function wn(e, t) {
        for (var n = Wi(t); n != e.wrapper; n = n.parentNode)if (!n || n.ignoreEvents || n.parentNode == e.sizer && n != e.mover)return !0
    }

    function _n(e, t, n, r) {
        var i = e.display;
        if (!n) {
            var o = Wi(t);
            if (o == i.scrollbarH || o == i.scrollbarV || o == i.scrollbarFiller || o == i.gutterFiller)return null
        }
        var a, s, l = i.lineSpace.getBoundingClientRect();
        try {
            a = t.clientX - l.left, s = t.clientY - l.top
        } catch (t) {
            return null
        }
        var c, u = Ut(e, a, s);
        if (r && 1 == u.xRel && (c = wi(e.doc, u.line).text).length == u.ch) {
            var d = os(c, c.length, e.options.tabSize) - c.length;
            u = aa(u.line, Math.max(0, Math.round((a - St(e.display).left) / Gt(e.display)) - d))
        }
        return u
    }

    function kn(e) {
        if (!Gi(this, e)) {
            var t = this, n = t.display;
            if (n.shift = e.shiftKey, wn(n, e))return void(Ho || (n.scroller.draggable = !1, setTimeout(function () {
                n.scroller.draggable = !0
            }, 100)));
            if (!$n(t, e)) {
                var r = _n(t, e);
                switch (window.focus(), Ui(e)) {
                    case 1:
                        r ? xn(t, e, r) : Wi(e) == n.scroller && Va(e);
                        break;
                    case 2:
                        Ho && (t.state.lastMiddleDown = +new Date), r && rt(t.doc, r), setTimeout(ao(mn, t), 20), Va(e);
                        break;
                    case 3:
                        ra && Hn(t, e)
                }
            }
        }
    }

    function xn(e, t, n) {
        setTimeout(ao(gn, e), 0);
        var r, i = +new Date;
        ua && ua.time > i - 400 && 0 == sa(ua.pos, n) ? r = "triple" : ca && ca.time > i - 400 && 0 == sa(ca.pos, n) ? (r = "double", ua = {
            time: i,
            pos: n
        }) : (r = "single", ca = {time: i, pos: n});
        var o = e.doc.sel, a = Jo ? t.metaKey : t.ctrlKey;
        e.options.dragDrop && gs && !vn(e) && "single" == r && o.contains(n) > -1 && o.somethingSelected() ? Cn(e, t, n, a) : Sn(e, t, n, r, a)
    }

    function Cn(e, t, n, r) {
        var i = e.display, o = Qt(e, function (a) {
            Ho && (i.scroller.draggable = !1), e.state.draggingText = !1, Ya(document, "mouseup", o), Ya(i.scroller, "drop", o), Math.abs(t.clientX - a.clientX) + Math.abs(t.clientY - a.clientY) < 10 && (Va(a), r || rt(e.doc, n), mn(e), Po && 9 == Fo && setTimeout(function () {
                document.body.focus(), mn(e)
            }, 20))
        });
        Ho && (i.scroller.draggable = !0), e.state.draggingText = o, i.scroller.dragDrop && i.scroller.dragDrop(), Za(document, "mouseup", o), Za(i.scroller, "drop", o)
    }

    function Sn(e, t, n, r, i) {
        function o(t) {
            if (0 != sa(m, t))if (m = t, "rect" == r) {
                for (var i = [], o = e.options.tabSize, a = os(wi(c, n.line).text, n.ch, o), s = os(wi(c, t.line).text, t.ch, o), l = Math.min(a, s), p = Math.max(a, s), h = Math.min(n.line, t.line), g = Math.min(e.lastLine(), Math.max(n.line, t.line)); g >= h; h++) {
                    var v = wi(c, h).text, b = Ji(v, l, o);
                    l == p ? i.push(new G(aa(h, b), aa(h, b))) : v.length > b && i.push(new G(aa(h, b), aa(h, Ji(v, p, o))))
                }
                i.length || i.push(new G(n, n)), ct(c, X(f.ranges.slice(0, d).concat(i), d), {
                    origin: "*mouse",
                    scroll: !1
                }), e.scrollIntoView(t)
            } else {
                var y = u, w = y.anchor, _ = t;
                if ("single" != r) {
                    if ("double" == r)var k = mr(e, t); else var k = new G(aa(t.line, 0), Q(c, aa(t.line + 1, 0)));
                    sa(k.anchor, w) > 0 ? (_ = k.head, w = K(y.from(), k.anchor)) : (_ = k.anchor, w = U(y.to(), k.head))
                }
                var i = f.ranges.slice(0);
                i[d] = new G(Q(c, w), _), ct(c, X(i, d), rs)
            }
        }

        function a(t) {
            var n = ++v, i = _n(e, t, !0, "rect" == r);
            if (i)if (0 != sa(i, m)) {
                gn(e), o(i);
                var s = b(l, c);
                (i.line >= s.to || i.line < s.from) && setTimeout(Qt(e, function () {
                    v == n && a(t)
                }), 150)
            } else {
                var u = t.clientY < g.top ? -20 : t.clientY > g.bottom ? 20 : 0;
                u && setTimeout(Qt(e, function () {
                    v == n && (l.scroller.scrollTop += u, a(t))
                }), 50)
            }
        }

        function s(t) {
            v = 1 / 0, Va(t), mn(e), Ya(document, "mousemove", y), Ya(document, "mouseup", w), c.history.lastSelOrigin = null
        }

        var l = e.display, c = e.doc;
        Va(t);
        var u, d, f = c.sel;
        if (i && !t.shiftKey ? (d = c.sel.contains(n), u = d > -1 ? c.sel.ranges[d] : new G(n, n)) : u = c.sel.primary(), t.altKey)r = "rect", i || (u = new G(n, n)), n = _n(e, t, !0, !0), d = -1; else if ("double" == r) {
            var p = mr(e, n);
            u = e.display.shift || c.extend ? nt(c, u, p.anchor, p.head) : p
        } else if ("triple" == r) {
            var h = new G(aa(n.line, 0), Q(c, aa(n.line + 1, 0)));
            u = e.display.shift || c.extend ? nt(c, u, h.anchor, h.head) : h
        } else u = nt(c, u, n);
        i ? d > -1 ? ot(c, d, u, rs) : (d = c.sel.ranges.length, ct(c, X(c.sel.ranges.concat([u]), d), {
            scroll: !1,
            origin: "*mouse"
        })) : (d = 0, ct(c, new V([u], 0), rs), f = c.sel);
        var m = n, g = l.wrapper.getBoundingClientRect(), v = 0, y = Qt(e, function (e) {
            Ui(e) ? a(e) : s(e)
        }), w = Qt(e, s);
        Za(document, "mousemove", y), Za(document, "mouseup", w)
    }

    function Tn(e, t, n, r, i) {
        try {
            var o = t.clientX, a = t.clientY
        } catch (t) {
            return !1
        }
        if (o >= Math.floor(e.display.gutters.getBoundingClientRect().right))return !1;
        r && Va(t);
        var s = e.display, l = s.lineDiv.getBoundingClientRect();
        if (a > l.bottom || !Zi(e, n))return Hi(t);
        a -= l.top - s.viewOffset;
        for (var c = 0; c < e.options.gutters.length; ++c) {
            var u = s.gutters.childNodes[c];
            if (u && u.getBoundingClientRect().right >= o) {
                var d = Si(e.doc, a), f = e.options.gutters[c];
                return i(e, n, e, d, f, t), Hi(t)
            }
        }
    }

    function $n(e, t) {
        return Tn(e, t, "gutterClick", !0, Ki)
    }

    function Mn(e) {
        var t = this;
        if (!Gi(t, e) && !wn(t.display, e)) {
            Va(e), Po && (pa = +new Date);
            var n = _n(t, e, !0), r = e.dataTransfer.files;
            if (n && !vn(t))if (r && r.length && window.FileReader && window.File)for (var i = r.length, o = Array(i), a = 0, s = function (e, r) {
                var s = new FileReader;
                s.onload = Qt(t, function () {
                    if (o[r] = s.result, ++a == i) {
                        n = Q(t.doc, n);
                        var e = {from: n, to: n, text: vs(o.join("\n")), origin: "paste"};
                        Zn(t.doc, e), lt(t.doc, Z(n, ba(e)))
                    }
                }), s.readAsText(e)
            }, l = 0; i > l; ++l)s(r[l], l); else {
                if (t.state.draggingText && t.doc.sel.contains(n) > -1)return t.state.draggingText(e), void setTimeout(ao(mn, t), 20);
                try {
                    var o = e.dataTransfer.getData("Text");
                    if (o) {
                        if (t.state.draggingText && !(Jo ? e.metaKey : e.ctrlKey))var c = t.listSelections();
                        if (ut(t.doc, Z(n, n)), c)for (var l = 0; l < c.length; ++l)nr(t.doc, "", c[l].anchor, c[l].head, "drag");
                        t.replaceSelection(o, "around", "paste"), mn(t)
                    }
                } catch (e) {
                }
            }
        }
    }

    function En(e, t) {
        if (Po && (!e.state.draggingText || +new Date - pa < 100))return void Xa(t);
        if (!Gi(e, t) && !wn(e.display, t) && (t.dataTransfer.setData("Text", e.getSelection()), t.dataTransfer.setDragImage && !Vo)) {
            var n = uo("img", null, null, "position: fixed; left: 0; top: 0;");
            n.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", Ko && (n.width = n.height = 1, e.display.wrapper.appendChild(n), n._top = n.offsetTop), t.dataTransfer.setDragImage(n, 0, 0), Ko && n.parentNode.removeChild(n)
        }
    }

    function Ln(e, t) {
        Math.abs(e.doc.scrollTop - t) < 2 || (e.doc.scrollTop = t, Ro || x(e, {top: t}), e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t), e.display.scrollbarV.scrollTop != t && (e.display.scrollbarV.scrollTop = t), Ro && x(e), yt(e, 100))
    }

    function Nn(e, t, n) {
        (n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) || (t = Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth), e.doc.scrollLeft = t, y(e), e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t), e.display.scrollbarH.scrollLeft != t && (e.display.scrollbarH.scrollLeft = t))
    }

    function In(e, t) {
        var n = t.wheelDeltaX, r = t.wheelDeltaY;
        null == n && t.detail && t.axis == t.HORIZONTAL_AXIS && (n = t.detail), null == r && t.detail && t.axis == t.VERTICAL_AXIS ? r = t.detail : null == r && (r = t.wheelDelta);
        var i = e.display, o = i.scroller;
        if (n && o.scrollWidth > o.clientWidth || r && o.scrollHeight > o.clientHeight) {
            if (r && Jo && Ho)e:for (var a = t.target, s = i.view; a != o; a = a.parentNode)for (var l = 0; l < s.length; l++)if (s[l].node == a) {
                e.display.currentWheelTarget = a;
                break e
            }
            if (n && !Ro && !Ko && null != ma)return r && Ln(e, Math.max(0, Math.min(o.scrollTop + r * ma, o.scrollHeight - o.clientHeight))), Nn(e, Math.max(0, Math.min(o.scrollLeft + n * ma, o.scrollWidth - o.clientWidth))), Va(t), void(i.wheelStartX = null);
            if (r && null != ma) {
                var c = r * ma, u = e.doc.scrollTop, d = u + i.wrapper.clientHeight;
                0 > c ? u = Math.max(0, u + c - 50) : d = Math.min(e.doc.height, d + c + 50), x(e, {top: u, bottom: d})
            }
            20 > ha && (null == i.wheelStartX ? (i.wheelStartX = o.scrollLeft, i.wheelStartY = o.scrollTop, i.wheelDX = n, i.wheelDY = r, setTimeout(function () {
                if (null != i.wheelStartX) {
                    var e = o.scrollLeft - i.wheelStartX, t = o.scrollTop - i.wheelStartY, n = t && i.wheelDY && t / i.wheelDY || e && i.wheelDX && e / i.wheelDX;
                    i.wheelStartX = i.wheelStartY = null, n && (ma = (ma * ha + n) / (ha + 1), ++ha)
                }
            }, 200)) : (i.wheelDX += n, i.wheelDY += r))
        }
    }

    function An(e, t, n) {
        if ("string" == typeof t && (t = Ea[t], !t))return !1;
        e.display.pollingFast && pn(e) && (e.display.pollingFast = !1);
        var r = e.display.shift, i = !1;
        try {
            vn(e) && (e.state.suppressEdits = !0), n && (e.display.shift = !1), i = t(e) != ts
        } finally {
            e.display.shift = r, e.state.suppressEdits = !1
        }
        return i
    }

    function jn(e) {
        var t = e.state.keyMaps.slice(0);
        return e.options.extraKeys && t.push(e.options.extraKeys), t.push(e.options.keyMap), t
    }

    function On(e, t) {
        var n = vr(e.options.keyMap), r = n.auto;
        clearTimeout(ga), r && !Ia(t) && (ga = setTimeout(function () {
            vr(e.options.keyMap) == n && (e.options.keyMap = r.call ? r.call(null, e) : r, s(e))
        }, 50));
        var i = Aa(t, !0), o = !1;
        if (!i)return !1;
        var a = jn(e);
        return o = t.shiftKey ? Na("Shift-" + i, a, function (t) {
            return An(e, t, !0)
        }) || Na(i, a, function (t) {
            return ("string" == typeof t ? /^go[A-Z]/.test(t) : t.motion) ? An(e, t) : void 0
        }) : Na(i, a, function (t) {
            return An(e, t)
        }), o && (Va(t), bt(e), Ki(e, "keyHandled", e, i, t)), o
    }

    function zn(e, t, n) {
        var r = Na("'" + n + "'", jn(e), function (t) {
            return An(e, t, !0)
        });
        return r && (Va(t), bt(e), Ki(e, "keyHandled", e, "'" + n + "'", t)), r
    }

    function Dn(e) {
        var t = this;
        if (gn(t), !Gi(t, e)) {
            Po && 11 > Fo && 27 == e.keyCode && (e.returnValue = !1);
            var n = e.keyCode;
            t.display.shift = 16 == n || e.shiftKey;
            var r = On(t, e);
            Ko && (va = r ? n : null, !r && 88 == n && !ys && (Jo ? e.metaKey : e.ctrlKey) && t.replaceSelection("", null, "cut")), 18 != n || /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) || Rn(t)
        }
    }

    function Rn(e) {
        function t(e) {
            18 != e.keyCode && e.altKey || (vo(n, "CodeMirror-crosshair"), Ya(document, "keyup", t), Ya(document, "mouseover", t))
        }

        var n = e.display.lineDiv;
        bo(n, "CodeMirror-crosshair"), Za(document, "keyup", t), Za(document, "mouseover", t)
    }

    function Bn(e) {
        Gi(this, e) || 16 == e.keyCode && (this.doc.sel.shift = !1)
    }

    function qn(e) {
        var t = this;
        if (!(Gi(t, e) || e.ctrlKey || Jo && e.metaKey)) {
            var n = e.keyCode, r = e.charCode;
            if (Ko && n == va)return va = null, void Va(e);
            if (!(Ko && (!e.which || e.which < 10) || Go) || !On(t, e)) {
                var i = String.fromCharCode(null == r ? n : r);
                zn(t, e, i) || (Po && Fo >= 9 && (t.display.inputHasSelection = null), fn(t))
            }
        }
    }

    function Pn(e) {
        "nocursor" != e.options.readOnly && (e.state.focused || (Qa(e, "focus", e), e.state.focused = !0, bo(e.display.wrapper, "CodeMirror-focused"), e.curOp || e.display.selForContextMenu == e.doc.sel || (hn(e), Ho && setTimeout(ao(hn, e, !0), 0))), dn(e), bt(e))
    }

    function Fn(e) {
        e.state.focused && (Qa(e, "blur", e), e.state.focused = !1, vo(e.display.wrapper, "CodeMirror-focused")), clearInterval(e.display.blinker), setTimeout(function () {
            e.state.focused || (e.display.shift = !1)
        }, 150)
    }

    function Hn(e, t) {
        function n() {
            if (null != i.input.selectionStart) {
                var t = e.somethingSelected(), n = i.input.value = "​" + (t ? i.input.value : "");
                i.prevInput = t ? "" : "​", i.input.selectionStart = 1, i.input.selectionEnd = n.length, i.selForContextMenu = e.doc.sel
            }
        }

        function r() {
            if (i.inputDiv.style.position = "relative", i.input.style.cssText = l, Po && 9 > Fo && (i.scrollbarV.scrollTop = i.scroller.scrollTop = a), dn(e), null != i.input.selectionStart) {
                (!Po || Po && 9 > Fo) && n();
                var t = 0, r = function () {
                    i.selForContextMenu == e.doc.sel && 0 == i.input.selectionStart ? Qt(e, Ea.selectAll)(e) : t++ < 10 ? i.detectingSelectAll = setTimeout(r, 500) : hn(e)
                };
                i.detectingSelectAll = setTimeout(r, 200)
            }
        }

        if (!Gi(e, t, "contextmenu")) {
            var i = e.display;
            if (!wn(i, t) && !Wn(e, t)) {
                var o = _n(e, t), a = i.scroller.scrollTop;
                if (o && !Ko) {
                    var s = e.options.resetSelectionOnContextMenu;
                    s && -1 == e.doc.sel.contains(o) && Qt(e, ct)(e.doc, Z(o), ns);
                    var l = i.input.style.cssText;
                    if (i.inputDiv.style.position = "absolute", i.input.style.cssText = "position: fixed; width: 30px; height: 30px; top: " + (t.clientY - 5) + "px; left: " + (t.clientX - 5) + "px; z-index: 1000; background: " + (Po ? "rgba(255, 255, 255, .05)" : "transparent") + "; outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);", mn(e), hn(e), e.somethingSelected() || (i.input.value = i.prevInput = " "), i.selForContextMenu = e.doc.sel, clearTimeout(i.detectingSelectAll), Po && Fo >= 9 && n(), ra) {
                        Xa(t);
                        var c = function () {
                            Ya(window, "mouseup", c), setTimeout(r, 20)
                        };
                        Za(window, "mouseup", c)
                    } else setTimeout(r, 50)
                }
            }
        }
    }

    function Wn(e, t) {
        return Zi(e, "gutterContextMenu") ? Tn(e, t, "gutterContextMenu", !1, Qa) : !1
    }

    function Un(e, t) {
        if (sa(e, t.from) < 0)return e;
        if (sa(e, t.to) <= 0)return ba(t);
        var n = e.line + t.text.length - (t.to.line - t.from.line) - 1, r = e.ch;
        return e.line == t.to.line && (r += ba(t).ch - t.to.ch), aa(n, r)
    }

    function Kn(e, t) {
        for (var n = [], r = 0; r < e.sel.ranges.length; r++) {
            var i = e.sel.ranges[r];
            n.push(new G(Un(i.anchor, t), Un(i.head, t)))
        }
        return X(n, e.sel.primIndex)
    }

    function Vn(e, t, n) {
        return e.line == t.line ? aa(n.line, e.ch - t.ch + n.ch) : aa(n.line + (e.line - t.line), e.ch)
    }

    function Gn(e, t, n) {
        for (var r = [], i = aa(e.first, 0), o = i, a = 0; a < t.length; a++) {
            var s = t[a], l = Vn(s.from, i, o), c = Vn(ba(s), i, o);
            if (i = s.to, o = c, "around" == n) {
                var u = e.sel.ranges[a], d = sa(u.head, u.anchor) < 0;
                r[a] = new G(d ? c : l, d ? l : c)
            } else r[a] = new G(l, l)
        }
        return new V(r, e.sel.primIndex)
    }

    function Xn(e, t, n) {
        var r = {
            canceled: !1, from: t.from, to: t.to, text: t.text, origin: t.origin, cancel: function () {
                this.canceled = !0
            }
        };
        return n && (r.update = function (t, n, r, i) {
            t && (this.from = Q(e, t)), n && (this.to = Q(e, n)), r && (this.text = r), void 0 !== i && (this.origin = i)
        }), Qa(e, "beforeChange", e, r), e.cm && Qa(e.cm, "beforeChange", e.cm, r), r.canceled ? null : {
            from: r.from,
            to: r.to,
            text: r.text,
            origin: r.origin
        }
    }

    function Zn(e, t, n) {
        if (e.cm) {
            if (!e.cm.curOp)return Qt(e.cm, Zn)(e, t, n);
            if (e.cm.state.suppressEdits)return
        }
        if (!(Zi(e, "beforeChange") || e.cm && Zi(e.cm, "beforeChange")) || (t = Xn(e, t, !0))) {
            var r = ia && !n && Ir(e, t.from, t.to);
            if (r)for (var i = r.length - 1; i >= 0; --i)Yn(e, {
                from: r[i].from,
                to: r[i].to,
                text: i ? [""] : t.text
            }); else Yn(e, t)
        }
    }

    function Yn(e, t) {
        if (1 != t.text.length || "" != t.text[0] || 0 != sa(t.from, t.to)) {
            var n = Kn(e, t);
            Ii(e, t, n, e.cm ? e.cm.curOp.id : 0 / 0), er(e, t, n, Er(e, t));
            var r = [];
            bi(e, function (e, n) {
                n || -1 != no(r, e.history) || (Fi(e.history, t), r.push(e.history)), er(e, t, null, Er(e, t))
            })
        }
    }

    function Qn(e, t, n) {
        if (!e.cm || !e.cm.state.suppressEdits) {
            for (var r, i = e.history, o = e.sel, a = "undo" == t ? i.done : i.undone, s = "undo" == t ? i.undone : i.done, l = 0; l < a.length && (r = a[l], n ? !r.ranges || r.equals(e.sel) : r.ranges); l++);
            if (l != a.length) {
                for (i.lastOrigin = i.lastSelOrigin = null; r = a.pop(), r.ranges;) {
                    if (Oi(r, s), n && !r.equals(e.sel))return void ct(e, r, {clearRedo: !1});
                    o = r
                }
                var c = [];
                Oi(o, s), s.push({
                    changes: c,
                    generation: i.generation
                }), i.generation = r.generation || ++i.maxGeneration;
                for (var u = Zi(e, "beforeChange") || e.cm && Zi(e.cm, "beforeChange"), l = r.changes.length - 1; l >= 0; --l) {
                    var d = r.changes[l];
                    if (d.origin = t, u && !Xn(e, d, !1))return void(a.length = 0);
                    c.push(Ei(e, d));
                    var f = l ? Kn(e, d, null) : to(a);
                    er(e, d, f, Nr(e, d)), !l && e.cm && e.cm.scrollIntoView(d);
                    var p = [];
                    bi(e, function (e, t) {
                        t || -1 != no(p, e.history) || (Fi(e.history, d), p.push(e.history)), er(e, d, null, Nr(e, d))
                    })
                }
            }
        }
    }

    function Jn(e, t) {
        if (0 != t && (e.first += t, e.sel = new V(ro(e.sel.ranges, function (e) {
                return new G(aa(e.anchor.line + t, e.anchor.ch), aa(e.head.line + t, e.head.ch))
            }), e.sel.primIndex), e.cm)) {
            rn(e.cm, e.first, e.first - t, t);
            for (var n = e.cm.display, r = n.viewFrom; r < n.viewTo; r++)on(e.cm, r, "gutter")
        }
    }

    function er(e, t, n, r) {
        if (e.cm && !e.cm.curOp)return Qt(e.cm, er)(e, t, n, r);
        if (t.to.line < e.first)return void Jn(e, t.text.length - 1 - (t.to.line - t.from.line));
        if (!(t.from.line > e.lastLine())) {
            if (t.from.line < e.first) {
                var i = t.text.length - 1 - (e.first - t.from.line);
                Jn(e, i), t = {
                    from: aa(e.first, 0),
                    to: aa(t.to.line + i, t.to.ch),
                    text: [to(t.text)],
                    origin: t.origin
                }
            }
            var o = e.lastLine();
            t.to.line > o && (t = {
                from: t.from,
                to: aa(o, wi(e, o).text.length),
                text: [t.text[0]],
                origin: t.origin
            }), t.removed = _i(e, t.from, t.to), n || (n = Kn(e, t, null)), e.cm ? tr(e.cm, t, r) : mi(e, t, r), ut(e, n, ns)
        }
    }

    function tr(e, t, n) {
        var r = e.doc, i = e.display, a = t.from, s = t.to, l = !1, c = a.line;
        e.options.lineWrapping || (c = Ci(Fr(wi(r, a.line))), r.iter(c, s.line + 1, function (e) {
            return e == i.maxLine ? (l = !0, !0) : void 0
        })), r.sel.contains(t.from, t.to) > -1 && Xi(e), mi(r, t, n, o(e)), e.options.lineWrapping || (r.iter(c, a.line + t.text.length, function (e) {
            var t = f(e);
            t > i.maxLineLength && (i.maxLine = e, i.maxLineLength = t, i.maxLineChanged = !0, l = !1)
        }), l && (e.curOp.updateMaxLine = !0)), r.frontier = Math.min(r.frontier, a.line), yt(e, 400);
        var u = t.text.length - (s.line - a.line) - 1;
        a.line != s.line || 1 != t.text.length || hi(e.doc, t) ? rn(e, a.line, s.line + 1, u) : on(e, a.line, "text");
        var d = Zi(e, "changes"), p = Zi(e, "change");
        if (p || d) {
            var h = {from: a, to: s, text: t.text, removed: t.removed, origin: t.origin};
            p && Ki(e, "change", e, h), d && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(h)
        }
        e.display.selForContextMenu = null
    }

    function nr(e, t, n, r, i) {
        if (r || (r = n), sa(r, n) < 0) {
            var o = r;
            r = n, n = o
        }
        "string" == typeof t && (t = vs(t)), Zn(e, {from: n, to: r, text: t, origin: i})
    }

    function rr(e, t) {
        var n = e.display, r = n.sizer.getBoundingClientRect(), i = null;
        if (t.top + r.top < 0 ? i = !0 : t.bottom + r.top > (window.innerHeight || document.documentElement.clientHeight) && (i = !1), null != i && !Zo) {
            var o = uo("div", "​", null, "position: absolute; top: " + (t.top - n.viewOffset - xt(e.display)) + "px; height: " + (t.bottom - t.top + es) + "px; left: " + t.left + "px; width: 2px;");
            e.display.lineSpace.appendChild(o), o.scrollIntoView(i), e.display.lineSpace.removeChild(o)
        }
    }

    function ir(e, t, n, r) {
        for (null == r && (r = 0); ;) {
            var i = !1, o = Ft(e, t), a = n && n != t ? Ft(e, n) : o, s = ar(e, Math.min(o.left, a.left), Math.min(o.top, a.top) - r, Math.max(o.left, a.left), Math.max(o.bottom, a.bottom) + r), l = e.doc.scrollTop, c = e.doc.scrollLeft;
            if (null != s.scrollTop && (Ln(e, s.scrollTop), Math.abs(e.doc.scrollTop - l) > 1 && (i = !0)), null != s.scrollLeft && (Nn(e, s.scrollLeft), Math.abs(e.doc.scrollLeft - c) > 1 && (i = !0)), !i)return o
        }
    }

    function or(e, t, n, r, i) {
        var o = ar(e, t, n, r, i);
        null != o.scrollTop && Ln(e, o.scrollTop), null != o.scrollLeft && Nn(e, o.scrollLeft)
    }

    function ar(e, t, n, r, i) {
        var o = e.display, a = Vt(e.display);
        0 > n && (n = 0);
        var s = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop : o.scroller.scrollTop, l = o.scroller.clientHeight - es, c = {}, u = e.doc.height + Ct(o), d = a > n, f = i > u - a;
        if (s > n)c.scrollTop = d ? 0 : n; else if (i > s + l) {
            var p = Math.min(n, (f ? u : i) - l);
            p != s && (c.scrollTop = p)
        }
        var h = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft : o.scroller.scrollLeft, m = o.scroller.clientWidth - es;
        t += o.gutters.offsetWidth, r += o.gutters.offsetWidth;
        var g = o.gutters.offsetWidth, v = g + 10 > t;
        return h + g > t || v ? (v && (t = 0), c.scrollLeft = Math.max(0, t - 10 - g)) : r > m + h - 3 && (c.scrollLeft = r + 10 - m), c
    }

    function sr(e, t, n) {
        (null != t || null != n) && cr(e), null != t && (e.curOp.scrollLeft = (null == e.curOp.scrollLeft ? e.doc.scrollLeft : e.curOp.scrollLeft) + t), null != n && (e.curOp.scrollTop = (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) + n)
    }

    function lr(e) {
        cr(e);
        var t = e.getCursor(), n = t, r = t;
        e.options.lineWrapping || (n = t.ch ? aa(t.line, t.ch - 1) : t, r = aa(t.line, t.ch + 1)), e.curOp.scrollToPos = {
            from: n,
            to: r,
            margin: e.options.cursorScrollMargin,
            isCursor: !0
        }
    }

    function cr(e) {
        var t = e.curOp.scrollToPos;
        if (t) {
            e.curOp.scrollToPos = null;
            var n = Ht(e, t.from), r = Ht(e, t.to), i = ar(e, Math.min(n.left, r.left), Math.min(n.top, r.top) - t.margin, Math.max(n.right, r.right), Math.max(n.bottom, r.bottom) + t.margin);
            e.scrollTo(i.scrollLeft, i.scrollTop)
        }
    }

    function ur(e, t, n, r) {
        var i, o = e.doc;
        null == n && (n = "add"), "smart" == n && (e.doc.mode.indent ? i = kt(e, t) : n = "prev");
        var a = e.options.tabSize, s = wi(o, t), l = os(s.text, null, a);
        s.stateAfter && (s.stateAfter = null);
        var c, u = s.text.match(/^\s*/)[0];
        if (r || /\S/.test(s.text)) {
            if ("smart" == n && (c = e.doc.mode.indent(i, s.text.slice(u.length), s.text), c == ts)) {
                if (!r)return;
                n = "prev"
            }
        } else c = 0, n = "not";
        "prev" == n ? c = t > o.first ? os(wi(o, t - 1).text, null, a) : 0 : "add" == n ? c = l + e.options.indentUnit : "subtract" == n ? c = l - e.options.indentUnit : "number" == typeof n && (c = l + n), c = Math.max(0, c);
        var d = "", f = 0;
        if (e.options.indentWithTabs)for (var p = Math.floor(c / a); p; --p)f += a, d += "	";
        if (c > f && (d += eo(c - f)), d != u)nr(e.doc, d, aa(t, 0), aa(t, u.length), "+input"); else for (var p = 0; p < o.sel.ranges.length; p++) {
            var h = o.sel.ranges[p];
            if (h.head.line == t && h.head.ch < u.length) {
                var f = aa(t, u.length);
                ot(o, p, new G(f, f));
                break
            }
        }
        s.stateAfter = null
    }

    function dr(e, t, n, r) {
        var i = t, o = t;
        return "number" == typeof t ? o = wi(e, Y(e, t)) : i = Ci(t), null == i ? null : (r(o, i) && e.cm && on(e.cm, i, n), o)
    }

    function fr(e, t) {
        for (var n = e.doc.sel.ranges, r = [], i = 0; i < n.length; i++) {
            for (var o = t(n[i]); r.length && sa(o.from, to(r).to) <= 0;) {
                var a = r.pop();
                if (sa(a.from, o.from) < 0) {
                    o.from = a.from;
                    break
                }
            }
            r.push(o)
        }
        Yt(e, function () {
            for (var t = r.length - 1; t >= 0; t--)nr(e.doc, "", r[t].from, r[t].to, "+delete");
            lr(e)
        })
    }

    function pr(e, t, n, r, i) {
        function o() {
            var t = s + n;
            return t < e.first || t >= e.first + e.size ? d = !1 : (s = t, u = wi(e, t))
        }

        function a(e) {
            var t = (i ? zo : Do)(u, l, n, !0);
            if (null == t) {
                if (e || !o())return d = !1;
                l = i ? (0 > n ? Lo : Eo)(u) : 0 > n ? u.text.length : 0
            } else l = t;
            return !0
        }

        var s = t.line, l = t.ch, c = n, u = wi(e, s), d = !0;
        if ("char" == r)a(); else if ("column" == r)a(!0); else if ("word" == r || "group" == r)for (var f = null, p = "group" == r, h = e.cm && e.cm.getHelper(t, "wordChars"), m = !0; !(0 > n) || a(!m); m = !1) {
            var g = u.text.charAt(l) || "\n", v = so(g, h) ? "w" : p && "\n" == g ? "n" : !p || /\s/.test(g) ? null : "p";
            if (!p || m || v || (v = "s"), f && f != v) {
                0 > n && (n = 1, a());
                break
            }
            if (v && (f = v), n > 0 && !a(!m))break
        }
        var b = ht(e, aa(s, l), c, !0);
        return d || (b.hitSide = !0), b
    }

    function hr(e, t, n, r) {
        var i, o = e.doc, a = t.left;
        if ("page" == r) {
            var s = Math.min(e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight);
            i = t.top + n * (s - (0 > n ? 1.5 : .5) * Vt(e.display))
        } else"line" == r && (i = n > 0 ? t.bottom + 3 : t.top - 3);
        for (; ;) {
            var l = Ut(e, a, i);
            if (!l.outside)break;
            if (0 > n ? 0 >= i : i >= o.height) {
                l.hitSide = !0;
                break
            }
            i += 5 * n
        }
        return l
    }

    function mr(e, t) {
        var n = e.doc, r = wi(n, t.line).text, i = t.ch, o = t.ch;
        if (r) {
            var a = e.getHelper(t, "wordChars");
            (t.xRel < 0 || o == r.length) && i ? --i : ++o;
            for (var s = r.charAt(i), l = so(s, a) ? function (e) {
                return so(e, a)
            } : /\s/.test(s) ? function (e) {
                return /\s/.test(e)
            } : function (e) {
                return !/\s/.test(e) && !so(e)
            }; i > 0 && l(r.charAt(i - 1));)--i;
            for (; o < r.length && l(r.charAt(o));)++o
        }
        return new G(aa(t.line, i), aa(t.line, o))
    }

    function gr(t, n, r, i) {
        e.defaults[t] = n, r && (wa[t] = i ? function (e, t, n) {
            n != _a && r(e, t, n)
        } : r)
    }

    function vr(e) {
        return "string" == typeof e ? La[e] : e
    }

    function br(e, t, n, r, i) {
        if (r && r.shared)return yr(e, t, n, r, i);
        if (e.cm && !e.cm.curOp)return Qt(e.cm, br)(e, t, n, r, i);
        var o = new Oa(e, i), a = sa(t, n);
        if (r && oo(r, o, !1), a > 0 || 0 == a && o.clearWhenEmpty !== !1)return o;
        if (o.replacedWith && (o.collapsed = !0, o.widgetNode = uo("span", [o.replacedWith], "CodeMirror-widget"), r.handleMouseEvents || (o.widgetNode.ignoreEvents = !0), r.insertLeft && (o.widgetNode.insertLeft = !0)), o.collapsed) {
            if (Pr(e, t.line, t, n, o) || t.line != n.line && Pr(e, n.line, t, n, o))throw new Error("Inserting collapsed marker partially overlapping an existing one");
            oa = !0
        }
        o.addToHistory && Ii(e, {from: t, to: n, origin: "markText"}, e.sel, 0 / 0);
        var s, l = t.line, c = e.cm;
        if (e.iter(l, n.line + 1, function (e) {
                c && o.collapsed && !c.options.lineWrapping && Fr(e) == c.display.maxLine && (s = !0), o.collapsed && l != t.line && xi(e, 0), Tr(e, new xr(o, l == t.line ? t.ch : null, l == n.line ? n.ch : null)), ++l
            }), o.collapsed && e.iter(t.line, n.line + 1, function (t) {
                Kr(e, t) && xi(t, 0)
            }), o.clearOnEnter && Za(o, "beforeCursorEnter", function () {
                o.clear()
            }), o.readOnly && (ia = !0, (e.history.done.length || e.history.undone.length) && e.clearHistory()), o.collapsed && (o.id = ++za, o.atomic = !0), c) {
            if (s && (c.curOp.updateMaxLine = !0), o.collapsed)rn(c, t.line, n.line + 1); else if (o.className || o.title || o.startStyle || o.endStyle)for (var u = t.line; u <= n.line; u++)on(c, u, "text");
            o.atomic && ft(c.doc), Ki(c, "markerAdded", c, o)
        }
        return o
    }

    function yr(e, t, n, r, i) {
        r = oo(r), r.shared = !1;
        var o = [br(e, t, n, r, i)], a = o[0], s = r.widgetNode;
        return bi(e, function (e) {
            s && (r.widgetNode = s.cloneNode(!0)), o.push(br(e, Q(e, t), Q(e, n), r, i));
            for (var l = 0; l < e.linked.length; ++l)if (e.linked[l].isParent)return;
            a = to(o)
        }), new Da(o, a)
    }

    function wr(e) {
        return e.findMarks(aa(e.first, 0), e.clipPos(aa(e.lastLine())), function (e) {
            return e.parent
        })
    }

    function _r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n], i = r.find(), o = e.clipPos(i.from), a = e.clipPos(i.to);
            if (sa(o, a)) {
                var s = br(e, o, a, r.primary, r.primary.type);
                r.markers.push(s), s.parent = r
            }
        }
    }

    function kr(e) {
        for (var t = 0; t < e.length; t++) {
            var n = e[t], r = [n.primary.doc];
            bi(n.primary.doc, function (e) {
                r.push(e)
            });
            for (var i = 0; i < n.markers.length; i++) {
                var o = n.markers[i];
                -1 == no(r, o.doc) && (o.parent = null, n.markers.splice(i--, 1))
            }
        }
    }

    function xr(e, t, n) {
        this.marker = e, this.from = t, this.to = n
    }

    function Cr(e, t) {
        if (e)for (var n = 0; n < e.length; ++n) {
            var r = e[n];
            if (r.marker == t)return r
        }
    }

    function Sr(e, t) {
        for (var n, r = 0; r < e.length; ++r)e[r] != t && (n || (n = [])).push(e[r]);
        return n
    }

    function Tr(e, t) {
        e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t], t.marker.attachLine(e)
    }

    function $r(e, t, n) {
        if (e)for (var r, i = 0; i < e.length; ++i) {
            var o = e[i], a = o.marker, s = null == o.from || (a.inclusiveLeft ? o.from <= t : o.from < t);
            if (s || o.from == t && "bookmark" == a.type && (!n || !o.marker.insertLeft)) {
                var l = null == o.to || (a.inclusiveRight ? o.to >= t : o.to > t);
                (r || (r = [])).push(new xr(a, o.from, l ? null : o.to))
            }
        }
        return r
    }

    function Mr(e, t, n) {
        if (e)for (var r, i = 0; i < e.length; ++i) {
            var o = e[i], a = o.marker, s = null == o.to || (a.inclusiveRight ? o.to >= t : o.to > t);
            if (s || o.from == t && "bookmark" == a.type && (!n || o.marker.insertLeft)) {
                var l = null == o.from || (a.inclusiveLeft ? o.from <= t : o.from < t);
                (r || (r = [])).push(new xr(a, l ? null : o.from - t, null == o.to ? null : o.to - t))
            }
        }
        return r
    }

    function Er(e, t) {
        var n = et(e, t.from.line) && wi(e, t.from.line).markedSpans, r = et(e, t.to.line) && wi(e, t.to.line).markedSpans;
        if (!n && !r)return null;
        var i = t.from.ch, o = t.to.ch, a = 0 == sa(t.from, t.to), s = $r(n, i, a), l = Mr(r, o, a), c = 1 == t.text.length, u = to(t.text).length + (c ? i : 0);
        if (s)for (var d = 0; d < s.length; ++d) {
            var f = s[d];
            if (null == f.to) {
                var p = Cr(l, f.marker);
                p ? c && (f.to = null == p.to ? null : p.to + u) : f.to = i
            }
        }
        if (l)for (var d = 0; d < l.length; ++d) {
            var f = l[d];
            if (null != f.to && (f.to += u), null == f.from) {
                var p = Cr(s, f.marker);
                p || (f.from = u, c && (s || (s = [])).push(f))
            } else f.from += u, c && (s || (s = [])).push(f)
        }
        s && (s = Lr(s)), l && l != s && (l = Lr(l));
        var h = [s];
        if (!c) {
            var m, g = t.text.length - 2;
            if (g > 0 && s)for (var d = 0; d < s.length; ++d)null == s[d].to && (m || (m = [])).push(new xr(s[d].marker, null, null));
            for (var d = 0; g > d; ++d)h.push(m);
            h.push(l)
        }
        return h
    }

    function Lr(e) {
        for (var t = 0; t < e.length; ++t) {
            var n = e[t];
            null != n.from && n.from == n.to && n.marker.clearWhenEmpty !== !1 && e.splice(t--, 1)
        }
        return e.length ? e : null
    }

    function Nr(e, t) {
        var n = Ri(e, t), r = Er(e, t);
        if (!n)return r;
        if (!r)return n;
        for (var i = 0; i < n.length; ++i) {
            var o = n[i], a = r[i];
            if (o && a)e:for (var s = 0; s < a.length; ++s) {
                for (var l = a[s], c = 0; c < o.length; ++c)if (o[c].marker == l.marker)continue e;
                o.push(l)
            } else a && (n[i] = a)
        }
        return n
    }

    function Ir(e, t, n) {
        var r = null;
        if (e.iter(t.line, n.line + 1, function (e) {
                if (e.markedSpans)for (var t = 0; t < e.markedSpans.length; ++t) {
                    var n = e.markedSpans[t].marker;
                    !n.readOnly || r && -1 != no(r, n) || (r || (r = [])).push(n)
                }
            }), !r)return null;
        for (var i = [{
            from: t,
            to: n
        }], o = 0; o < r.length; ++o)for (var a = r[o], s = a.find(0), l = 0; l < i.length; ++l) {
            var c = i[l];
            if (!(sa(c.to, s.from) < 0 || sa(c.from, s.to) > 0)) {
                var u = [l, 1], d = sa(c.from, s.from), f = sa(c.to, s.to);
                (0 > d || !a.inclusiveLeft && !d) && u.push({
                    from: c.from,
                    to: s.from
                }), (f > 0 || !a.inclusiveRight && !f) && u.push({
                    from: s.to,
                    to: c.to
                }), i.splice.apply(i, u), l += u.length - 1
            }
        }
        return i
    }

    function Ar(e) {
        var t = e.markedSpans;
        if (t) {
            for (var n = 0; n < t.length; ++n)t[n].marker.detachLine(e);
            e.markedSpans = null
        }
    }

    function jr(e, t) {
        if (t) {
            for (var n = 0; n < t.length; ++n)t[n].marker.attachLine(e);
            e.markedSpans = t
        }
    }

    function Or(e) {
        return e.inclusiveLeft ? -1 : 0
    }

    function zr(e) {
        return e.inclusiveRight ? 1 : 0
    }

    function Dr(e, t) {
        var n = e.lines.length - t.lines.length;
        if (0 != n)return n;
        var r = e.find(), i = t.find(), o = sa(r.from, i.from) || Or(e) - Or(t);
        if (o)return -o;
        var a = sa(r.to, i.to) || zr(e) - zr(t);
        return a ? a : t.id - e.id
    }

    function Rr(e, t) {
        var n, r = oa && e.markedSpans;
        if (r)for (var i, o = 0; o < r.length; ++o)i = r[o], i.marker.collapsed && null == (t ? i.from : i.to) && (!n || Dr(n, i.marker) < 0) && (n = i.marker);
        return n
    }

    function Br(e) {
        return Rr(e, !0)
    }

    function qr(e) {
        return Rr(e, !1)
    }

    function Pr(e, t, n, r, i) {
        var o = wi(e, t), a = oa && o.markedSpans;
        if (a)for (var s = 0; s < a.length; ++s) {
            var l = a[s];
            if (l.marker.collapsed) {
                var c = l.marker.find(0), u = sa(c.from, n) || Or(l.marker) - Or(i), d = sa(c.to, r) || zr(l.marker) - zr(i);
                if (!(u >= 0 && 0 >= d || 0 >= u && d >= 0) && (0 >= u && (sa(c.to, n) > 0 || l.marker.inclusiveRight && i.inclusiveLeft) || u >= 0 && (sa(c.from, r) < 0 || l.marker.inclusiveLeft && i.inclusiveRight)))return !0
            }
        }
    }

    function Fr(e) {
        for (var t; t = Br(e);)e = t.find(-1, !0).line;
        return e
    }

    function Hr(e) {
        for (var t, n; t = qr(e);)e = t.find(1, !0).line, (n || (n = [])).push(e);
        return n
    }

    function Wr(e, t) {
        var n = wi(e, t), r = Fr(n);
        return n == r ? t : Ci(r)
    }

    function Ur(e, t) {
        if (t > e.lastLine())return t;
        var n, r = wi(e, t);
        if (!Kr(e, r))return t;
        for (; n = qr(r);)r = n.find(1, !0).line;
        return Ci(r) + 1
    }

    function Kr(e, t) {
        var n = oa && t.markedSpans;
        if (n)for (var r, i = 0; i < n.length; ++i)if (r = n[i], r.marker.collapsed) {
            if (null == r.from)return !0;
            if (!r.marker.widgetNode && 0 == r.from && r.marker.inclusiveLeft && Vr(e, t, r))return !0
        }
    }

    function Vr(e, t, n) {
        if (null == n.to) {
            var r = n.marker.find(1, !0);
            return Vr(e, r.line, Cr(r.line.markedSpans, n.marker))
        }
        if (n.marker.inclusiveRight && n.to == t.text.length)return !0;
        for (var i, o = 0; o < t.markedSpans.length; ++o)if (i = t.markedSpans[o], i.marker.collapsed && !i.marker.widgetNode && i.from == n.to && (null == i.to || i.to != n.from) && (i.marker.inclusiveLeft || n.marker.inclusiveRight) && Vr(e, t, i))return !0
    }

    function Gr(e, t, n) {
        Ti(t) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && sr(e, null, n)
    }

    function Xr(e) {
        if (null != e.height)return e.height;
        if (!ho(document.body, e.node)) {
            var t = "position: relative;";
            e.coverGutter && (t += "margin-left: -" + e.cm.getGutterElement().offsetWidth + "px;"), po(e.cm.display.measure, uo("div", [e.node], null, t))
        }
        return e.height = e.node.offsetHeight
    }

    function Zr(e, t, n, r) {
        var i = new Ra(e, n, r);
        return i.noHScroll && (e.display.alignWidgets = !0), dr(e.doc, t, "widget", function (t) {
            var n = t.widgets || (t.widgets = []);
            if (null == i.insertAt ? n.push(i) : n.splice(Math.min(n.length - 1, Math.max(0, i.insertAt)), 0, i), i.line = t, !Kr(e.doc, t)) {
                var r = Ti(t) < e.doc.scrollTop;
                xi(t, t.height + Xr(i)), r && sr(e, null, i.height), e.curOp.forceUpdate = !0
            }
            return !0
        }), i
    }

    function Yr(e, t, n, r) {
        e.text = t, e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null), null != e.order && (e.order = null), Ar(e), jr(e, n);
        var i = r ? r(e) : 1;
        i != e.height && xi(e, i)
    }

    function Qr(e) {
        e.parent = null, Ar(e)
    }

    function Jr(e, t) {
        if (e)for (; ;) {
            var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
            if (!n)break;
            e = e.slice(0, n.index) + e.slice(n.index + n[0].length);
            var r = n[1] ? "bgClass" : "textClass";
            null == t[r] ? t[r] = n[2] : new RegExp("(?:^|s)" + n[2] + "(?:$|s)").test(t[r]) || (t[r] += " " + n[2])
        }
        return e
    }

    function ei(t, n) {
        if (t.blankLine)return t.blankLine(n);
        if (t.innerMode) {
            var r = e.innerMode(t, n);
            return r.mode.blankLine ? r.mode.blankLine(r.state) : void 0
        }
    }

    function ti(e, t, n) {
        for (var r = 0; 10 > r; r++) {
            var i = e.token(t, n);
            if (t.pos > t.start)return i
        }
        throw new Error("Mode " + e.name + " failed to advance stream.")
    }

    function ni(t, n, r, i, o, a, s) {
        var l = r.flattenSpans;
        null == l && (l = t.options.flattenSpans);
        var c, u = 0, d = null, f = new ja(n, t.options.tabSize);
        for ("" == n && Jr(ei(r, i), a); !f.eol();) {
            if (f.pos > t.options.maxHighlightLength ? (l = !1, s && oi(t, n, i, f.pos), f.pos = n.length, c = null) : c = Jr(ti(r, f, i), a), t.options.addModeClass) {
                var p = e.innerMode(r, i).mode.name;
                p && (c = "m-" + (c ? p + " " + c : p))
            }
            l && d == c || (u < f.start && o(f.start, d), u = f.start, d = c), f.start = f.pos
        }
        for (; u < f.pos;) {
            var h = Math.min(f.pos, u + 5e4);
            o(h, d), u = h
        }
    }

    function ri(e, t, n, r) {
        var i = [e.state.modeGen], o = {};
        ni(e, t.text, e.doc.mode, n, function (e, t) {
            i.push(e, t)
        }, o, r);
        for (var a = 0; a < e.state.overlays.length; ++a) {
            var s = e.state.overlays[a], l = 1, c = 0;
            ni(e, t.text, s.mode, !0, function (e, t) {
                for (var n = l; e > c;) {
                    var r = i[l];
                    r > e && i.splice(l, 1, e, i[l + 1], r), l += 2, c = Math.min(e, r)
                }
                if (t)if (s.opaque)i.splice(n, l - n, e, "cm-overlay " + t), l = n + 2; else for (; l > n; n += 2) {
                    var o = i[n + 1];
                    i[n + 1] = (o ? o + " " : "") + "cm-overlay " + t
                }
            }, o)
        }
        return {styles: i, classes: o.bgClass || o.textClass ? o : null}
    }

    function ii(e, t) {
        if (!t.styles || t.styles[0] != e.state.modeGen) {
            var n = ri(e, t, t.stateAfter = kt(e, Ci(t)));
            t.styles = n.styles, n.classes ? t.styleClasses = n.classes : t.styleClasses && (t.styleClasses = null)
        }
        return t.styles
    }

    function oi(e, t, n, r) {
        var i = e.doc.mode, o = new ja(t, e.options.tabSize);
        for (o.start = o.pos = r || 0, "" == t && ei(i, n); !o.eol() && o.pos <= e.options.maxHighlightLength;)ti(i, o, n), o.start = o.pos
    }

    function ai(e, t) {
        if (!e || /^\s*$/.test(e))return null;
        var n = t.addModeClass ? Pa : qa;
        return n[e] || (n[e] = e.replace(/\S+/g, "cm-$&"))
    }

    function si(e, t) {
        var n = uo("span", null, null, Ho ? "padding-right: .1px" : null), r = {
            pre: uo("pre", [n]),
            content: n,
            col: 0,
            pos: 0,
            cm: e
        };
        t.measure = {};
        for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
            var o, a = i ? t.rest[i - 1] : t.line;
            r.pos = 0, r.addToken = ci, (Po || Ho) && e.getOption("lineWrapping") && (r.addToken = ui(r.addToken)), So(e.display.measure) && (o = $i(a)) && (r.addToken = di(r.addToken, o)), r.map = [], pi(a, r, ii(e, a)), a.styleClasses && (a.styleClasses.bgClass && (r.bgClass = yo(a.styleClasses.bgClass, r.bgClass || "")), a.styleClasses.textClass && (r.textClass = yo(a.styleClasses.textClass, r.textClass || ""))), 0 == r.map.length && r.map.push(0, 0, r.content.appendChild(Co(e.display.measure))), 0 == i ? (t.measure.map = r.map, t.measure.cache = {}) : ((t.measure.maps || (t.measure.maps = [])).push(r.map), (t.measure.caches || (t.measure.caches = [])).push({}))
        }
        return Qa(e, "renderLine", e, t.line, r.pre), r.pre.className && (r.textClass = yo(r.pre.className, r.textClass || "")), r
    }

    function li(e) {
        var t = uo("span", "•", "cm-invalidchar");
        return t.title = "\\u" + e.charCodeAt(0).toString(16), t
    }

    function ci(e, t, n, r, i, o) {
        if (t) {
            var a = e.cm.options.specialChars, s = !1;
            if (a.test(t))for (var l = document.createDocumentFragment(), c = 0; ;) {
                a.lastIndex = c;
                var u = a.exec(t), d = u ? u.index - c : t.length - c;
                if (d) {
                    var f = document.createTextNode(t.slice(c, c + d));
                    l.appendChild(Po && 9 > Fo ? uo("span", [f]) : f), e.map.push(e.pos, e.pos + d, f), e.col += d, e.pos += d
                }
                if (!u)break;
                if (c += d + 1, "	" == u[0]) {
                    var p = e.cm.options.tabSize, h = p - e.col % p, f = l.appendChild(uo("span", eo(h), "cm-tab"));
                    e.col += h
                } else {
                    var f = e.cm.options.specialCharPlaceholder(u[0]);
                    l.appendChild(Po && 9 > Fo ? uo("span", [f]) : f), e.col += 1
                }
                e.map.push(e.pos, e.pos + 1, f), e.pos++
            } else {
                e.col += t.length;
                var l = document.createTextNode(t);
                e.map.push(e.pos, e.pos + t.length, l), Po && 9 > Fo && (s = !0), e.pos += t.length
            }
            if (n || r || i || s) {
                var m = n || "";
                r && (m += r), i && (m += i);
                var g = uo("span", [l], m);
                return o && (g.title = o), e.content.appendChild(g)
            }
            e.content.appendChild(l)
        }
    }

    function ui(e) {
        function t(e) {
            for (var t = " ", n = 0; n < e.length - 2; ++n)t += n % 2 ? " " : " ";
            return t += " "
        }

        return function (n, r, i, o, a, s) {
            e(n, r.replace(/ {3,}/g, t), i, o, a, s)
        }
    }

    function di(e, t) {
        return function (n, r, i, o, a, s) {
            i = i ? i + " cm-force-border" : "cm-force-border";
            for (var l = n.pos, c = l + r.length; ;) {
                for (var u = 0; u < t.length; u++) {
                    var d = t[u];
                    if (d.to > l && d.from <= l)break
                }
                if (d.to >= c)return e(n, r, i, o, a, s);
                e(n, r.slice(0, d.to - l), i, o, null, s), o = null, r = r.slice(d.to - l), l = d.to
            }
        }
    }

    function fi(e, t, n, r) {
        var i = !r && n.widgetNode;
        i && (e.map.push(e.pos, e.pos + t, i), e.content.appendChild(i)), e.pos += t
    }

    function pi(e, t, n) {
        var r = e.markedSpans, i = e.text, o = 0;
        if (r)for (var a, s, l, c, u, d, f = i.length, p = 0, h = 1, m = "", g = 0; ;) {
            if (g == p) {
                s = l = c = u = "", d = null, g = 1 / 0;
                for (var v = [], b = 0; b < r.length; ++b) {
                    var y = r[b], w = y.marker;
                    y.from <= p && (null == y.to || y.to > p) ? (null != y.to && g > y.to && (g = y.to, l = ""), w.className && (s += " " + w.className), w.startStyle && y.from == p && (c += " " + w.startStyle), w.endStyle && y.to == g && (l += " " + w.endStyle), w.title && !u && (u = w.title), w.collapsed && (!d || Dr(d.marker, w) < 0) && (d = y)) : y.from > p && g > y.from && (g = y.from), "bookmark" == w.type && y.from == p && w.widgetNode && v.push(w)
                }
                if (d && (d.from || 0) == p && (fi(t, (null == d.to ? f + 1 : d.to) - p, d.marker, null == d.from), null == d.to))return;
                if (!d && v.length)for (var b = 0; b < v.length; ++b)fi(t, 0, v[b])
            }
            if (p >= f)break;
            for (var _ = Math.min(f, g); ;) {
                if (m) {
                    var k = p + m.length;
                    if (!d) {
                        var x = k > _ ? m.slice(0, _ - p) : m;
                        t.addToken(t, x, a ? a + s : s, c, p + x.length == g ? l : "", u)
                    }
                    if (k >= _) {
                        m = m.slice(_ - p), p = _;
                        break
                    }
                    p = k, c = ""
                }
                m = i.slice(o, o = n[h++]), a = ai(n[h++], t.cm.options)
            }
        } else for (var h = 1; h < n.length; h += 2)t.addToken(t, i.slice(o, o = n[h]), ai(n[h + 1], t.cm.options))
    }

    function hi(e, t) {
        return 0 == t.from.ch && 0 == t.to.ch && "" == to(t.text) && (!e.cm || e.cm.options.wholeLineUpdateBefore)
    }

    function mi(e, t, n, r) {
        function i(e) {
            return n ? n[e] : null
        }

        function o(e, n, i) {
            Yr(e, n, i, r), Ki(e, "change", e, t)
        }

        var a = t.from, s = t.to, l = t.text, c = wi(e, a.line), u = wi(e, s.line), d = to(l), f = i(l.length - 1), p = s.line - a.line;
        if (hi(e, t)) {
            for (var h = 0, m = []; h < l.length - 1; ++h)m.push(new Ba(l[h], i(h), r));
            o(u, u.text, f), p && e.remove(a.line, p), m.length && e.insert(a.line, m)
        } else if (c == u)if (1 == l.length)o(c, c.text.slice(0, a.ch) + d + c.text.slice(s.ch), f); else {
            for (var m = [], h = 1; h < l.length - 1; ++h)m.push(new Ba(l[h], i(h), r));
            m.push(new Ba(d + c.text.slice(s.ch), f, r)), o(c, c.text.slice(0, a.ch) + l[0], i(0)), e.insert(a.line + 1, m)
        } else if (1 == l.length)o(c, c.text.slice(0, a.ch) + l[0] + u.text.slice(s.ch), i(0)), e.remove(a.line + 1, p); else {
            o(c, c.text.slice(0, a.ch) + l[0], i(0)), o(u, d + u.text.slice(s.ch), f);
            for (var h = 1, m = []; h < l.length - 1; ++h)m.push(new Ba(l[h], i(h), r));
            p > 1 && e.remove(a.line + 1, p - 1), e.insert(a.line + 1, m)
        }
        Ki(e, "change", e, t)
    }

    function gi(e) {
        this.lines = e, this.parent = null;
        for (var t = 0, n = 0; t < e.length; ++t)e[t].parent = this, n += e[t].height;
        this.height = n
    }

    function vi(e) {
        this.children = e;
        for (var t = 0, n = 0, r = 0; r < e.length; ++r) {
            var i = e[r];
            t += i.chunkSize(), n += i.height, i.parent = this
        }
        this.size = t, this.height = n, this.parent = null
    }

    function bi(e, t, n) {
        function r(e, i, o) {
            if (e.linked)for (var a = 0; a < e.linked.length; ++a) {
                var s = e.linked[a];
                if (s.doc != i) {
                    var l = o && s.sharedHist;
                    (!n || l) && (t(s.doc, l), r(s.doc, e, l))
                }
            }
        }

        r(e, null, !0)
    }

    function yi(e, t) {
        if (t.cm)throw new Error("This document is already in use.");
        e.doc = t, t.cm = e, a(e), n(e), e.options.lineWrapping || p(e), e.options.mode = t.modeOption, rn(e)
    }

    function wi(e, t) {
        if (t -= e.first, 0 > t || t >= e.size)throw new Error("There is no line " + (t + e.first) + " in the document.");
        for (var n = e; !n.lines;)for (var r = 0; ; ++r) {
            var i = n.children[r], o = i.chunkSize();
            if (o > t) {
                n = i;
                break
            }
            t -= o
        }
        return n.lines[t]
    }

    function _i(e, t, n) {
        var r = [], i = t.line;
        return e.iter(t.line, n.line + 1, function (e) {
            var o = e.text;
            i == n.line && (o = o.slice(0, n.ch)), i == t.line && (o = o.slice(t.ch)), r.push(o), ++i
        }), r
    }

    function ki(e, t, n) {
        var r = [];
        return e.iter(t, n, function (e) {
            r.push(e.text)
        }), r
    }

    function xi(e, t) {
        var n = t - e.height;
        if (n)for (var r = e; r; r = r.parent)r.height += n
    }

    function Ci(e) {
        if (null == e.parent)return null;
        for (var t = e.parent, n = no(t.lines, e), r = t.parent; r; t = r, r = r.parent)for (var i = 0; r.children[i] != t; ++i)n += r.children[i].chunkSize();
        return n + t.first
    }

    function Si(e, t) {
        var n = e.first;
        e:do {
            for (var r = 0; r < e.children.length; ++r) {
                var i = e.children[r], o = i.height;
                if (o > t) {
                    e = i;
                    continue e
                }
                t -= o, n += i.chunkSize()
            }
            return n
        } while (!e.lines);
        for (var r = 0; r < e.lines.length; ++r) {
            var a = e.lines[r], s = a.height;
            if (s > t)break;
            t -= s
        }
        return n + r
    }

    function Ti(e) {
        e = Fr(e);
        for (var t = 0, n = e.parent, r = 0; r < n.lines.length; ++r) {
            var i = n.lines[r];
            if (i == e)break;
            t += i.height
        }
        for (var o = n.parent; o; n = o, o = n.parent)for (var r = 0; r < o.children.length; ++r) {
            var a = o.children[r];
            if (a == n)break;
            t += a.height
        }
        return t
    }

    function $i(e) {
        var t = e.order;
        return null == t && (t = e.order = ks(e.text)), t
    }

    function Mi(e) {
        this.done = [], this.undone = [], this.undoDepth = 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = e || 1
    }

    function Ei(e, t) {
        var n = {from: W(t.from), to: ba(t), text: _i(e, t.from, t.to)};
        return zi(e, n, t.from.line, t.to.line + 1), bi(e, function (e) {
            zi(e, n, t.from.line, t.to.line + 1)
        }, !0), n
    }

    function Li(e) {
        for (; e.length;) {
            var t = to(e);
            if (!t.ranges)break;
            e.pop()
        }
    }

    function Ni(e, t) {
        return t ? (Li(e.done), to(e.done)) : e.done.length && !to(e.done).ranges ? to(e.done) : e.done.length > 1 && !e.done[e.done.length - 2].ranges ? (e.done.pop(), to(e.done)) : void 0
    }

    function Ii(e, t, n, r) {
        var i = e.history;
        i.undone.length = 0;
        var o, a = +new Date;
        if ((i.lastOp == r || i.lastOrigin == t.origin && t.origin && ("+" == t.origin.charAt(0) && e.cm && i.lastModTime > a - e.cm.options.historyEventDelay || "*" == t.origin.charAt(0))) && (o = Ni(i, i.lastOp == r))) {
            var s = to(o.changes);
            0 == sa(t.from, t.to) && 0 == sa(t.from, s.to) ? s.to = ba(t) : o.changes.push(Ei(e, t))
        } else {
            var l = to(i.done);
            for (l && l.ranges || Oi(e.sel, i.done), o = {
                changes: [Ei(e, t)],
                generation: i.generation
            }, i.done.push(o); i.done.length > i.undoDepth;)i.done.shift(), i.done[0].ranges || i.done.shift()
        }
        i.done.push(n), i.generation = ++i.maxGeneration, i.lastModTime = i.lastSelTime = a, i.lastOp = r, i.lastOrigin = i.lastSelOrigin = t.origin, s || Qa(e, "historyAdded")
    }

    function Ai(e, t, n, r) {
        var i = t.charAt(0);
        return "*" == i || "+" == i && n.ranges.length == r.ranges.length && n.somethingSelected() == r.somethingSelected() && new Date - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500)
    }

    function ji(e, t, n, r) {
        var i = e.history, o = r && r.origin;
        n == i.lastOp || o && i.lastSelOrigin == o && (i.lastModTime == i.lastSelTime && i.lastOrigin == o || Ai(e, o, to(i.done), t)) ? i.done[i.done.length - 1] = t : Oi(t, i.done), i.lastSelTime = +new Date, i.lastSelOrigin = o, i.lastOp = n, r && r.clearRedo !== !1 && Li(i.undone)
    }

    function Oi(e, t) {
        var n = to(t);
        n && n.ranges && n.equals(e) || t.push(e)
    }

    function zi(e, t, n, r) {
        var i = t["spans_" + e.id], o = 0;
        e.iter(Math.max(e.first, n), Math.min(e.first + e.size, r), function (n) {
            n.markedSpans && ((i || (i = t["spans_" + e.id] = {}))[o] = n.markedSpans), ++o
        })
    }

    function Di(e) {
        if (!e)return null;
        for (var t, n = 0; n < e.length; ++n)e[n].marker.explicitlyCleared ? t || (t = e.slice(0, n)) : t && t.push(e[n]);
        return t ? t.length ? t : null : e
    }

    function Ri(e, t) {
        var n = t["spans_" + e.id];
        if (!n)return null;
        for (var r = 0, i = []; r < t.text.length; ++r)i.push(Di(n[r]));
        return i
    }

    function Bi(e, t, n) {
        for (var r = 0, i = []; r < e.length; ++r) {
            var o = e[r];
            if (o.ranges)i.push(n ? V.prototype.deepCopy.call(o) : o); else {
                var a = o.changes, s = [];
                i.push({changes: s});
                for (var l = 0; l < a.length; ++l) {
                    var c, u = a[l];
                    if (s.push({
                            from: u.from,
                            to: u.to,
                            text: u.text
                        }), t)for (var d in u)(c = d.match(/^spans_(\d+)$/)) && no(t, Number(c[1])) > -1 && (to(s)[d] = u[d], delete u[d])
                }
            }
        }
        return i
    }

    function qi(e, t, n, r) {
        n < e.line ? e.line += r : t < e.line && (e.line = t, e.ch = 0)
    }

    function Pi(e, t, n, r) {
        for (var i = 0; i < e.length; ++i) {
            var o = e[i], a = !0;
            if (o.ranges) {
                o.copied || (o = e[i] = o.deepCopy(), o.copied = !0);
                for (var s = 0; s < o.ranges.length; s++)qi(o.ranges[s].anchor, t, n, r), qi(o.ranges[s].head, t, n, r)
            } else {
                for (var s = 0; s < o.changes.length; ++s) {
                    var l = o.changes[s];
                    if (n < l.from.line)l.from = aa(l.from.line + r, l.from.ch), l.to = aa(l.to.line + r, l.to.ch); else if (t <= l.to.line) {
                        a = !1;
                        break
                    }
                }
                a || (e.splice(0, i + 1), i = 0)
            }
        }
    }

    function Fi(e, t) {
        var n = t.from.line, r = t.to.line, i = t.text.length - (r - n) - 1;
        Pi(e.done, n, r, i), Pi(e.undone, n, r, i)
    }

    function Hi(e) {
        return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue
    }

    function Wi(e) {
        return e.target || e.srcElement
    }

    function Ui(e) {
        var t = e.which;
        return null == t && (1 & e.button ? t = 1 : 2 & e.button ? t = 3 : 4 & e.button && (t = 2)), Jo && e.ctrlKey && 1 == t && (t = 3), t
    }

    function Ki(e, t) {
        function n(e) {
            return function () {
                e.apply(null, i)
            }
        }

        var r = e._handlers && e._handlers[t];
        if (r) {
            var i = Array.prototype.slice.call(arguments, 2);
            Ka || (++Ja, Ka = [], setTimeout(Vi, 0));
            for (var o = 0; o < r.length; ++o)Ka.push(n(r[o]))
        }
    }

    function Vi() {
        --Ja;
        var e = Ka;
        Ka = null;
        for (var t = 0; t < e.length; ++t)e[t]()
    }

    function Gi(e, t, n) {
        return Qa(e, n || t.type, e, t), Hi(t) || t.codemirrorIgnore
    }

    function Xi(e) {
        var t = e._handlers && e._handlers.cursorActivity;
        if (t)for (var n = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), r = 0; r < t.length; ++r)-1 == no(n, t[r]) && n.push(t[r])
    }

    function Zi(e, t) {
        var n = e._handlers && e._handlers[t];
        return n && n.length > 0
    }

    function Yi(e) {
        e.prototype.on = function (e, t) {
            Za(this, e, t)
        }, e.prototype.off = function (e, t) {
            Ya(this, e, t)
        }
    }

    function Qi() {
        this.id = null
    }

    function Ji(e, t, n) {
        for (var r = 0, i = 0; ;) {
            var o = e.indexOf("	", r);
            -1 == o && (o = e.length);
            var a = o - r;
            if (o == e.length || i + a >= t)return r + Math.min(a, t - i);
            if (i += o - r, i += n - i % n, r = o + 1, i >= t)return r
        }
    }

    function eo(e) {
        for (; as.length <= e;)as.push(to(as) + " ");
        return as[e]
    }

    function to(e) {
        return e[e.length - 1]
    }

    function no(e, t) {
        for (var n = 0; n < e.length; ++n)if (e[n] == t)return n;
        return -1
    }

    function ro(e, t) {
        for (var n = [], r = 0; r < e.length; r++)n[r] = t(e[r], r);
        return n
    }

    function io(e, t) {
        var n;
        if (Object.create)n = Object.create(e); else {
            var r = function () {
            };
            r.prototype = e, n = new r
        }
        return t && oo(t, n), n
    }

    function oo(e, t, n) {
        t || (t = {});
        for (var r in e)!e.hasOwnProperty(r) || n === !1 && t.hasOwnProperty(r) || (t[r] = e[r]);
        return t
    }

    function ao(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return function () {
            return e.apply(null, t)
        }
    }

    function so(e, t) {
        return t ? t.source.indexOf("\\w") > -1 && us(e) ? !0 : t.test(e) : us(e)
    }

    function lo(e) {
        for (var t in e)if (e.hasOwnProperty(t) && e[t])return !1;
        return !0
    }

    function co(e) {
        return e.charCodeAt(0) >= 768 && ds.test(e)
    }

    function uo(e, t, n, r) {
        var i = document.createElement(e);
        if (n && (i.className = n), r && (i.style.cssText = r), "string" == typeof t)i.appendChild(document.createTextNode(t)); else if (t)for (var o = 0; o < t.length; ++o)i.appendChild(t[o]);
        return i
    }

    function fo(e) {
        for (var t = e.childNodes.length; t > 0; --t)e.removeChild(e.firstChild);
        return e
    }

    function po(e, t) {
        return fo(e).appendChild(t)
    }

    function ho(e, t) {
        if (e.contains)return e.contains(t);
        for (; t = t.parentNode;)if (t == e)return !0
    }

    function mo() {
        return document.activeElement
    }

    function go(e) {
        return new RegExp("\\b" + e + "\\b\\s*")
    }

    function vo(e, t) {
        var n = go(t);
        n.test(e.className) && (e.className = e.className.replace(n, ""))
    }

    function bo(e, t) {
        go(t).test(e.className) || (e.className += " " + t)
    }

    function yo(e, t) {
        for (var n = e.split(" "), r = 0; r < n.length; r++)n[r] && !go(n[r]).test(t) && (t += " " + n[r]);
        return t
    }

    function wo(e) {
        if (document.body.getElementsByClassName)for (var t = document.body.getElementsByClassName("CodeMirror"), n = 0; n < t.length; n++) {
            var r = t[n].CodeMirror;
            r && e(r)
        }
    }

    function _o() {
        ms || (ko(), ms = !0)
    }

    function ko() {
        var e;
        Za(window, "resize", function () {
            null == e && (e = setTimeout(function () {
                e = null, fs = null, wo(yn)
            }, 100))
        }), Za(window, "blur", function () {
            wo(Fn)
        })
    }

    function xo(e) {
        if (null != fs)return fs;
        var t = uo("div", null, null, "width: 50px; height: 50px; overflow-x: scroll");
        return po(e, t), t.offsetWidth && (fs = t.offsetHeight - t.clientHeight), fs || 0
    }

    function Co(e) {
        if (null == ps) {
            var t = uo("span", "​");
            po(e, uo("span", [t, document.createTextNode("x")])), 0 != e.firstChild.offsetHeight && (ps = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(Po && 8 > Fo))
        }
        return ps ? uo("span", "​") : uo("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px")
    }

    function So(e) {
        if (null != hs)return hs;
        var t = po(e, document.createTextNode("AخA")), n = ls(t, 0, 1).getBoundingClientRect();
        if (n.left == n.right)return !1;
        var r = ls(t, 1, 2).getBoundingClientRect();
        return hs = r.right - n.right < 3
    }

    function To(e, t, n, r) {
        if (!e)return r(t, n, "ltr");
        for (var i = !1, o = 0; o < e.length; ++o) {
            var a = e[o];
            (a.from < n && a.to > t || t == n && a.to == t) && (r(Math.max(a.from, t), Math.min(a.to, n), 1 == a.level ? "rtl" : "ltr"), i = !0)
        }
        i || r(t, n, "ltr")
    }

    function $o(e) {
        return e.level % 2 ? e.to : e.from
    }

    function Mo(e) {
        return e.level % 2 ? e.from : e.to
    }

    function Eo(e) {
        var t = $i(e);
        return t ? $o(t[0]) : 0
    }

    function Lo(e) {
        var t = $i(e);
        return t ? Mo(to(t)) : e.text.length
    }

    function No(e, t) {
        var n = wi(e.doc, t), r = Fr(n);
        r != n && (t = Ci(r));
        var i = $i(r), o = i ? i[0].level % 2 ? Lo(r) : Eo(r) : 0;
        return aa(t, o)
    }

    function Io(e, t) {
        for (var n, r = wi(e.doc, t); n = qr(r);)r = n.find(1, !0).line, t = null;
        var i = $i(r), o = i ? i[0].level % 2 ? Eo(r) : Lo(r) : r.text.length;
        return aa(null == t ? Ci(r) : t, o)
    }

    function Ao(e, t, n) {
        var r = e[0].level;
        return t == r ? !0 : n == r ? !1 : n > t
    }

    function jo(e, t) {
        _s = null;
        for (var n, r = 0; r < e.length; ++r) {
            var i = e[r];
            if (i.from < t && i.to > t)return r;
            if (i.from == t || i.to == t) {
                if (null != n)return Ao(e, i.level, e[n].level) ? (i.from != i.to && (_s = n), r) : (i.from != i.to && (_s = r), n);
                n = r
            }
        }
        return n
    }

    function Oo(e, t, n, r) {
        if (!r)return t + n;
        do t += n; while (t > 0 && co(e.text.charAt(t)));
        return t
    }

    function zo(e, t, n, r) {
        var i = $i(e);
        if (!i)return Do(e, t, n, r);
        for (var o = jo(i, t), a = i[o], s = Oo(e, t, a.level % 2 ? -n : n, r); ;) {
            if (s > a.from && s < a.to)return s;
            if (s == a.from || s == a.to)return jo(i, s) == o ? s : (a = i[o += n], n > 0 == a.level % 2 ? a.to : a.from);
            if (a = i[o += n], !a)return null;
            s = n > 0 == a.level % 2 ? Oo(e, a.to, -1, r) : Oo(e, a.from, 1, r)
        }
    }

    function Do(e, t, n, r) {
        var i = t + n;
        if (r)for (; i > 0 && co(e.text.charAt(i));)i += n;
        return 0 > i || i > e.text.length ? null : i
    }

    var Ro = /gecko\/\d/i.test(navigator.userAgent), Bo = /MSIE \d/.test(navigator.userAgent), qo = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), Po = Bo || qo, Fo = Po && (Bo ? document.documentMode || 6 : qo[1]), Ho = /WebKit\//.test(navigator.userAgent), Wo = Ho && /Qt\/\d+\.\d+/.test(navigator.userAgent), Uo = /Chrome\//.test(navigator.userAgent), Ko = /Opera\//.test(navigator.userAgent), Vo = /Apple Computer/.test(navigator.vendor), Go = /KHTML\//.test(navigator.userAgent), Xo = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(navigator.userAgent), Zo = /PhantomJS/.test(navigator.userAgent), Yo = /AppleWebKit/.test(navigator.userAgent) && /Mobile\/\w+/.test(navigator.userAgent), Qo = Yo || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(navigator.userAgent), Jo = Yo || /Mac/.test(navigator.platform), ea = /win/i.test(navigator.platform), ta = Ko && navigator.userAgent.match(/Version\/(\d*\.\d*)/);
    ta && (ta = Number(ta[1])), ta && ta >= 15 && (Ko = !1, Ho = !0);
    var na = Jo && (Wo || Ko && (null == ta || 12.11 > ta)), ra = Ro || Po && Fo >= 9, ia = !1, oa = !1, aa = e.Pos = function (e, t) {
        return this instanceof aa ? (this.line = e, void(this.ch = t)) : new aa(e, t)
    }, sa = e.cmpPos = function (e, t) {
        return e.line - t.line || e.ch - t.ch
    };
    V.prototype = {
        primary: function () {
            return this.ranges[this.primIndex]
        }, equals: function (e) {
            if (e == this)return !0;
            if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length)return !1;
            for (var t = 0; t < this.ranges.length; t++) {
                var n = this.ranges[t], r = e.ranges[t];
                if (0 != sa(n.anchor, r.anchor) || 0 != sa(n.head, r.head))return !1
            }
            return !0
        }, deepCopy: function () {
            for (var e = [], t = 0; t < this.ranges.length; t++)e[t] = new G(W(this.ranges[t].anchor), W(this.ranges[t].head));
            return new V(e, this.primIndex)
        }, somethingSelected: function () {
            for (var e = 0; e < this.ranges.length; e++)if (!this.ranges[e].empty())return !0;
            return !1
        }, contains: function (e, t) {
            t || (t = e);
            for (var n = 0; n < this.ranges.length; n++) {
                var r = this.ranges[n];
                if (sa(t, r.from()) >= 0 && sa(e, r.to()) <= 0)return n
            }
            return -1
        }
    }, G.prototype = {
        from: function () {
            return K(this.anchor, this.head)
        }, to: function () {
            return U(this.anchor, this.head)
        }, empty: function () {
            return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
        }
    };
    var la, ca, ua, da = {left: 0, right: 0, top: 0, bottom: 0}, fa = 0, pa = 0, ha = 0, ma = null;
    Po ? ma = -.53 : Ro ? ma = 15 : Uo ? ma = -.7 : Vo && (ma = -1 / 3);
    var ga, va = null, ba = e.changeEnd = function (e) {
        return e.text ? aa(e.from.line + e.text.length - 1, to(e.text).length + (1 == e.text.length ? e.from.ch : 0)) : e.to
    };
    e.prototype = {
        constructor: e, focus: function () {
            window.focus(), mn(this), fn(this)
        }, setOption: function (e, t) {
            var n = this.options, r = n[e];
            (n[e] != t || "mode" == e) && (n[e] = t, wa.hasOwnProperty(e) && Qt(this, wa[e])(this, t, r))
        }, getOption: function (e) {
            return this.options[e]
        }, getDoc: function () {
            return this.doc
        }, addKeyMap: function (e, t) {
            this.state.keyMaps[t ? "push" : "unshift"](e)
        }, removeKeyMap: function (e) {
            for (var t = this.state.keyMaps, n = 0; n < t.length; ++n)if (t[n] == e || "string" != typeof t[n] && t[n].name == e)return t.splice(n, 1), !0
        }, addOverlay: Jt(function (t, n) {
            var r = t.token ? t : e.getMode(this.options, t);
            if (r.startState)throw new Error("Overlays may not be stateful.");
            this.state.overlays.push({mode: r, modeSpec: t, opaque: n && n.opaque}), this.state.modeGen++, rn(this)
        }), removeOverlay: Jt(function (e) {
            for (var t = this.state.overlays, n = 0; n < t.length; ++n) {
                var r = t[n].modeSpec;
                if (r == e || "string" == typeof e && r.name == e)return t.splice(n, 1), this.state.modeGen++, void rn(this)
            }
        }), indentLine: Jt(function (e, t, n) {
            "string" != typeof t && "number" != typeof t && (t = null == t ? this.options.smartIndent ? "smart" : "prev" : t ? "add" : "subtract"), et(this.doc, e) && ur(this, e, t, n)
        }), indentSelection: Jt(function (e) {
            for (var t = this.doc.sel.ranges, n = -1, r = 0; r < t.length; r++) {
                var i = t[r];
                if (i.empty())i.head.line > n && (ur(this, i.head.line, e, !0), n = i.head.line, r == this.doc.sel.primIndex && lr(this)); else {
                    var o = Math.max(n, i.from().line), a = i.to();
                    n = Math.min(this.lastLine(), a.line - (a.ch ? 0 : 1)) + 1;
                    for (var s = o; n > s; ++s)ur(this, s, e)
                }
            }
        }), getTokenAt: function (e, t) {
            var n = this.doc;
            e = Q(n, e);
            for (var r = kt(this, e.line, t), i = this.doc.mode, o = wi(n, e.line), a = new ja(o.text, this.options.tabSize); a.pos < e.ch && !a.eol();) {
                a.start = a.pos;
                var s = ti(i, a, r)
            }
            return {start: a.start, end: a.pos, string: a.current(), type: s || null, state: r}
        }, getTokenTypeAt: function (e) {
            e = Q(this.doc, e);
            var t, n = ii(this, wi(this.doc, e.line)), r = 0, i = (n.length - 1) / 2, o = e.ch;
            if (0 == o)t = n[2]; else for (; ;) {
                var a = r + i >> 1;
                if ((a ? n[2 * a - 1] : 0) >= o)i = a; else {
                    if (!(n[2 * a + 1] < o)) {
                        t = n[2 * a + 2];
                        break
                    }
                    r = a + 1
                }
            }
            var s = t ? t.indexOf("cm-overlay ") : -1;
            return 0 > s ? t : 0 == s ? null : t.slice(0, s - 1)
        }, getModeAt: function (t) {
            var n = this.doc.mode;
            return n.innerMode ? e.innerMode(n, this.getTokenAt(t).state).mode : n
        }, getHelper: function (e, t) {
            return this.getHelpers(e, t)[0]
        }, getHelpers: function (e, t) {
            var n = [];
            if (!Ta.hasOwnProperty(t))return Ta;
            var r = Ta[t], i = this.getModeAt(e);
            if ("string" == typeof i[t])r[i[t]] && n.push(r[i[t]]); else if (i[t])for (var o = 0; o < i[t].length; o++) {
                var a = r[i[t][o]];
                a && n.push(a)
            } else i.helperType && r[i.helperType] ? n.push(r[i.helperType]) : r[i.name] && n.push(r[i.name]);
            for (var o = 0; o < r._global.length; o++) {
                var s = r._global[o];
                s.pred(i, this) && -1 == no(n, s.val) && n.push(s.val)
            }
            return n
        }, getStateAfter: function (e, t) {
            var n = this.doc;
            return e = Y(n, null == e ? n.first + n.size - 1 : e), kt(this, e + 1, t)
        }, cursorCoords: function (e, t) {
            var n, r = this.doc.sel.primary();
            return n = null == e ? r.head : "object" == typeof e ? Q(this.doc, e) : e ? r.from() : r.to(), Ft(this, n, t || "page")
        }, charCoords: function (e, t) {
            return Pt(this, Q(this.doc, e), t || "page")
        }, coordsChar: function (e, t) {
            return e = qt(this, e, t || "page"), Ut(this, e.left, e.top)
        }, lineAtHeight: function (e, t) {
            return e = qt(this, {top: e, left: 0}, t || "page").top, Si(this.doc, e + this.display.viewOffset)
        }, heightAtLine: function (e, t) {
            var n = !1, r = this.doc.first + this.doc.size - 1;
            e < this.doc.first ? e = this.doc.first : e > r && (e = r, n = !0);
            var i = wi(this.doc, e);
            return Bt(this, i, {top: 0, left: 0}, t || "page").top + (n ? this.doc.height - Ti(i) : 0)
        }, defaultTextHeight: function () {
            return Vt(this.display)
        }, defaultCharWidth: function () {
            return Gt(this.display)
        }, setGutterMarker: Jt(function (e, t, n) {
            return dr(this.doc, e, "gutter", function (e) {
                var r = e.gutterMarkers || (e.gutterMarkers = {});
                return r[t] = n, !n && lo(r) && (e.gutterMarkers = null), !0
            })
        }), clearGutter: Jt(function (e) {
            var t = this, n = t.doc, r = n.first;
            n.iter(function (n) {
                n.gutterMarkers && n.gutterMarkers[e] && (n.gutterMarkers[e] = null, on(t, r, "gutter"), lo(n.gutterMarkers) && (n.gutterMarkers = null)), ++r
            })
        }), addLineWidget: Jt(function (e, t, n) {
            return Zr(this, e, t, n)
        }), removeLineWidget: function (e) {
            e.clear()
        }, lineInfo: function (e) {
            if ("number" == typeof e) {
                if (!et(this.doc, e))return null;
                var t = e;
                if (e = wi(this.doc, e), !e)return null
            } else {
                var t = Ci(e);
                if (null == t)return null
            }
            return {
                line: t,
                handle: e,
                text: e.text,
                gutterMarkers: e.gutterMarkers,
                textClass: e.textClass,
                bgClass: e.bgClass,
                wrapClass: e.wrapClass,
                widgets: e.widgets
            }
        }, getViewport: function () {
            return {from: this.display.viewFrom, to: this.display.viewTo}
        }, addWidget: function (e, t, n, r, i) {
            var o = this.display;
            e = Ft(this, Q(this.doc, e));
            var a = e.bottom, s = e.left;
            if (t.style.position = "absolute", o.sizer.appendChild(t), "over" == r)a = e.top; else if ("above" == r || "near" == r) {
                var l = Math.max(o.wrapper.clientHeight, this.doc.height), c = Math.max(o.sizer.clientWidth, o.lineSpace.clientWidth);
                ("above" == r || e.bottom + t.offsetHeight > l) && e.top > t.offsetHeight ? a = e.top - t.offsetHeight : e.bottom + t.offsetHeight <= l && (a = e.bottom), s + t.offsetWidth > c && (s = c - t.offsetWidth)
            }
            t.style.top = a + "px", t.style.left = t.style.right = "", "right" == i ? (s = o.sizer.clientWidth - t.offsetWidth, t.style.right = "0px") : ("left" == i ? s = 0 : "middle" == i && (s = (o.sizer.clientWidth - t.offsetWidth) / 2), t.style.left = s + "px"), n && or(this, s, a, s + t.offsetWidth, a + t.offsetHeight)
        }, triggerOnKeyDown: Jt(Dn), triggerOnKeyPress: Jt(qn), triggerOnKeyUp: Jt(Bn), execCommand: function (e) {
            return Ea.hasOwnProperty(e) ? Ea[e](this) : void 0
        }, findPosH: function (e, t, n, r) {
            var i = 1;
            0 > t && (i = -1, t = -t);
            for (var o = 0, a = Q(this.doc, e); t > o && (a = pr(this.doc, a, i, n, r), !a.hitSide); ++o);
            return a
        }, moveH: Jt(function (e, t) {
            var n = this;
            n.extendSelectionsBy(function (r) {
                return n.display.shift || n.doc.extend || r.empty() ? pr(n.doc, r.head, e, t, n.options.rtlMoveVisually) : 0 > e ? r.from() : r.to()
            }, is)
        }), deleteH: Jt(function (e, t) {
            var n = this.doc.sel, r = this.doc;
            n.somethingSelected() ? r.replaceSelection("", null, "+delete") : fr(this, function (n) {
                var i = pr(r, n.head, e, t, !1);
                return 0 > e ? {from: i, to: n.head} : {from: n.head, to: i}
            })
        }), findPosV: function (e, t, n, r) {
            var i = 1, o = r;
            0 > t && (i = -1, t = -t);
            for (var a = 0, s = Q(this.doc, e); t > a; ++a) {
                var l = Ft(this, s, "div");
                if (null == o ? o = l.left : l.left = o, s = hr(this, l, i, n), s.hitSide)break
            }
            return s
        }, moveV: Jt(function (e, t) {
            var n = this, r = this.doc, i = [], o = !n.display.shift && !r.extend && r.sel.somethingSelected();
            if (r.extendSelectionsBy(function (a) {
                    if (o)return 0 > e ? a.from() : a.to();
                    var s = Ft(n, a.head, "div");
                    null != a.goalColumn && (s.left = a.goalColumn), i.push(s.left);
                    var l = hr(n, s, e, t);
                    return "page" == t && a == r.sel.primary() && sr(n, null, Pt(n, l, "div").top - s.top), l
                }, is), i.length)for (var a = 0; a < r.sel.ranges.length; a++)r.sel.ranges[a].goalColumn = i[a]
        }), toggleOverwrite: function (e) {
            (null == e || e != this.state.overwrite) && ((this.state.overwrite = !this.state.overwrite) ? bo(this.display.cursorDiv, "CodeMirror-overwrite") : vo(this.display.cursorDiv, "CodeMirror-overwrite"), Qa(this, "overwriteToggle", this, this.state.overwrite))
        }, hasFocus: function () {
            return mo() == this.display.input
        }, scrollTo: Jt(function (e, t) {
            (null != e || null != t) && cr(this), null != e && (this.curOp.scrollLeft = e), null != t && (this.curOp.scrollTop = t)
        }), getScrollInfo: function () {
            var e = this.display.scroller, t = es;
            return {
                left: e.scrollLeft,
                top: e.scrollTop,
                height: e.scrollHeight - t,
                width: e.scrollWidth - t,
                clientHeight: e.clientHeight - t,
                clientWidth: e.clientWidth - t
            }
        }, scrollIntoView: Jt(function (e, t) {
            if (null == e ? (e = {
                    from: this.doc.sel.primary().head,
                    to: null
                }, null == t && (t = this.options.cursorScrollMargin)) : "number" == typeof e ? e = {
                    from: aa(e, 0),
                    to: null
                } : null == e.from && (e = {
                    from: e,
                    to: null
                }), e.to || (e.to = e.from), e.margin = t || 0, null != e.from.line)cr(this), this.curOp.scrollToPos = e; else {
                var n = ar(this, Math.min(e.from.left, e.to.left), Math.min(e.from.top, e.to.top) - e.margin, Math.max(e.from.right, e.to.right), Math.max(e.from.bottom, e.to.bottom) + e.margin);
                this.scrollTo(n.scrollLeft, n.scrollTop)
            }
        }), setSize: Jt(function (e, t) {
            function n(e) {
                return "number" == typeof e || /^\d+$/.test(String(e)) ? e + "px" : e
            }

            var r = this;
            null != e && (r.display.wrapper.style.width = n(e)), null != t && (r.display.wrapper.style.height = n(t)), r.options.lineWrapping && Ot(this);
            var i = r.display.viewFrom;
            r.doc.iter(i, r.display.viewTo, function (e) {
                if (e.widgets)for (var t = 0; t < e.widgets.length; t++)if (e.widgets[t].noHScroll) {
                    on(r, i, "widget");
                    break
                }
                ++i
            }), r.curOp.forceUpdate = !0, Qa(r, "refresh", this)
        }), operation: function (e) {
            return Yt(this, e)
        }, refresh: Jt(function () {
            var e = this.display.cachedTextHeight;
            rn(this), this.curOp.forceUpdate = !0, zt(this), this.scrollTo(this.doc.scrollLeft, this.doc.scrollTop), d(this), (null == e || Math.abs(e - Vt(this.display)) > .5) && a(this), Qa(this, "refresh", this)
        }), swapDoc: Jt(function (e) {
            var t = this.doc;
            return t.cm = null, yi(this, e), zt(this), hn(this), this.scrollTo(e.scrollLeft, e.scrollTop), Ki(this, "swapDoc", this, t), t
        }), getInputField: function () {
            return this.display.input
        }, getWrapperElement: function () {
            return this.display.wrapper
        }, getScrollerElement: function () {
            return this.display.scroller
        }, getGutterElement: function () {
            return this.display.gutters
        }
    }, Yi(e);
    var ya = e.defaults = {}, wa = e.optionHandlers = {}, _a = e.Init = {
        toString: function () {
            return "CodeMirror.Init"
        }
    };
    gr("value", "", function (e, t) {
        e.setValue(t)
    }, !0), gr("mode", null, function (e, t) {
        e.doc.modeOption = t, n(e)
    }, !0), gr("indentUnit", 2, n, !0), gr("indentWithTabs", !1), gr("smartIndent", !0), gr("tabSize", 4, function (e) {
        r(e), zt(e), rn(e)
    }, !0), gr("specialChars", /[\t\u0000-\u0019\u00ad\u200b\u2028\u2029\ufeff]/g, function (e, t) {
        e.options.specialChars = new RegExp(t.source + (t.test("	") ? "" : "|	"), "g"), e.refresh()
    }, !0), gr("specialCharPlaceholder", li, function (e) {
        e.refresh()
    }, !0), gr("electricChars", !0), gr("rtlMoveVisually", !ea), gr("wholeLineUpdateBefore", !0), gr("theme", "default", function (e) {
        l(e), c(e)
    }, !0), gr("keyMap", "default", s), gr("extraKeys", null), gr("lineWrapping", !1, i, !0), gr("gutters", [], function (e) {
        h(e.options), c(e)
    }, !0), gr("fixedGutter", !0, function (e, t) {
        e.display.gutters.style.left = t ? k(e.display) + "px" : "0", e.refresh()
    }, !0), gr("coverGutterNextToScrollbar", !1, v, !0), gr("lineNumbers", !1, function (e) {
        h(e.options), c(e)
    }, !0), gr("firstLineNumber", 1, c, !0), gr("lineNumberFormatter", function (e) {
        return e
    }, c, !0), gr("showCursorWhenSelecting", !1, mt, !0), gr("resetSelectionOnContextMenu", !0), gr("readOnly", !1, function (e, t) {
        "nocursor" == t ? (Fn(e), e.display.input.blur(), e.display.disabled = !0) : (e.display.disabled = !1, t || hn(e))
    }), gr("disableInput", !1, function (e, t) {
        t || hn(e)
    }, !0), gr("dragDrop", !0), gr("cursorBlinkRate", 530), gr("cursorScrollMargin", 0), gr("cursorHeight", 1, mt, !0), gr("singleCursorHeightPerLine", !0, mt, !0), gr("workTime", 100), gr("workDelay", 100), gr("flattenSpans", !0, r, !0), gr("addModeClass", !1, r, !0), gr("pollInterval", 100), gr("undoDepth", 200, function (e, t) {
        e.doc.history.undoDepth = t
    }), gr("historyEventDelay", 1250), gr("viewportMargin", 10, function (e) {
        e.refresh()
    }, !0), gr("maxHighlightLength", 1e4, r, !0), gr("moveInputWithCursor", !0, function (e, t) {
        t || (e.display.inputDiv.style.top = e.display.inputDiv.style.left = 0)
    }), gr("tabindex", null, function (e, t) {
        e.display.input.tabIndex = t || ""
    }), gr("autofocus", null);
    var ka = e.modes = {}, xa = e.mimeModes = {};
    e.defineMode = function (t, n) {
        if (e.defaults.mode || "null" == t || (e.defaults.mode = t), arguments.length > 2) {
            n.dependencies = [];
            for (var r = 2; r < arguments.length; ++r)n.dependencies.push(arguments[r])
        }
        ka[t] = n
    }, e.defineMIME = function (e, t) {
        xa[e] = t
    }, e.resolveMode = function (t) {
        if ("string" == typeof t && xa.hasOwnProperty(t))t = xa[t]; else if (t && "string" == typeof t.name && xa.hasOwnProperty(t.name)) {
            var n = xa[t.name];
            "string" == typeof n && (n = {name: n}), t = io(n, t), t.name = n.name
        } else if ("string" == typeof t && /^[\w\-]+\/[\w\-]+\+xml$/.test(t))return e.resolveMode("application/xml");
        return "string" == typeof t ? {name: t} : t || {name: "null"}
    }, e.getMode = function (t, n) {
        var n = e.resolveMode(n), r = ka[n.name];
        if (!r)return e.getMode(t, "text/plain");
        var i = r(t, n);
        if (Ca.hasOwnProperty(n.name)) {
            var o = Ca[n.name];
            for (var a in o)o.hasOwnProperty(a) && (i.hasOwnProperty(a) && (i["_" + a] = i[a]), i[a] = o[a])
        }
        if (i.name = n.name, n.helperType && (i.helperType = n.helperType), n.modeProps)for (var a in n.modeProps)i[a] = n.modeProps[a];
        return i
    }, e.defineMode("null", function () {
        return {
            token: function (e) {
                e.skipToEnd()
            }
        }
    }), e.defineMIME("text/plain", "null");
    var Ca = e.modeExtensions = {};
    e.extendMode = function (e, t) {
        var n = Ca.hasOwnProperty(e) ? Ca[e] : Ca[e] = {};
        oo(t, n)
    }, e.defineExtension = function (t, n) {
        e.prototype[t] = n
    }, e.defineDocExtension = function (e, t) {
        Ha.prototype[e] = t
    }, e.defineOption = gr;
    var Sa = [];
    e.defineInitHook = function (e) {
        Sa.push(e)
    };
    var Ta = e.helpers = {};
    e.registerHelper = function (t, n, r) {
        Ta.hasOwnProperty(t) || (Ta[t] = e[t] = {_global: []}), Ta[t][n] = r
    }, e.registerGlobalHelper = function (t, n, r, i) {
        e.registerHelper(t, n, i), Ta[t]._global.push({pred: r, val: i})
    };
    var $a = e.copyState = function (e, t) {
        if (t === !0)return t;
        if (e.copyState)return e.copyState(t);
        var n = {};
        for (var r in t) {
            var i = t[r];
            i instanceof Array && (i = i.concat([])), n[r] = i
        }
        return n
    }, Ma = e.startState = function (e, t, n) {
        return e.startState ? e.startState(t, n) : !0
    };
    e.innerMode = function (e, t) {
        for (; e.innerMode;) {
            var n = e.innerMode(t);
            if (!n || n.mode == e)break;
            t = n.state, e = n.mode
        }
        return n || {mode: e, state: t}
    };
    var Ea = e.commands = {
        selectAll: function (e) {
            e.setSelection(aa(e.firstLine(), 0), aa(e.lastLine()), ns)
        }, singleSelection: function (e) {
            e.setSelection(e.getCursor("anchor"), e.getCursor("head"), ns)
        }, killLine: function (e) {
            fr(e, function (t) {
                if (t.empty()) {
                    var n = wi(e.doc, t.head.line).text.length;
                    return t.head.ch == n && t.head.line < e.lastLine() ? {
                        from: t.head,
                        to: aa(t.head.line + 1, 0)
                    } : {from: t.head, to: aa(t.head.line, n)}
                }
                return {from: t.from(), to: t.to()}
            })
        }, deleteLine: function (e) {
            fr(e, function (t) {
                return {from: aa(t.from().line, 0), to: Q(e.doc, aa(t.to().line + 1, 0))}
            })
        }, delLineLeft: function (e) {
            fr(e, function (e) {
                return {from: aa(e.from().line, 0), to: e.from()}
            })
        }, undo: function (e) {
            e.undo()
        }, redo: function (e) {
            e.redo()
        }, undoSelection: function (e) {
            e.undoSelection()
        }, redoSelection: function (e) {
            e.redoSelection()
        }, goDocStart: function (e) {
            e.extendSelection(aa(e.firstLine(), 0))
        }, goDocEnd: function (e) {
            e.extendSelection(aa(e.lastLine()))
        }, goLineStart: function (e) {
            e.extendSelectionsBy(function (t) {
                return No(e, t.head.line)
            }, {origin: "+move", bias: 1})
        }, goLineStartSmart: function (e) {
            e.extendSelectionsBy(function (t) {
                var n = No(e, t.head.line), r = e.getLineHandle(n.line), i = $i(r);
                if (!i || 0 == i[0].level) {
                    var o = Math.max(0, r.text.search(/\S/)), a = t.head.line == n.line && t.head.ch <= o && t.head.ch;
                    return aa(n.line, a ? 0 : o)
                }
                return n
            }, {origin: "+move", bias: 1})
        }, goLineEnd: function (e) {
            e.extendSelectionsBy(function (t) {
                return Io(e, t.head.line)
            }, {origin: "+move", bias: -1})
        }, goLineRight: function (e) {
            e.extendSelectionsBy(function (t) {
                var n = e.charCoords(t.head, "div").top + 5;
                return e.coordsChar({left: e.display.lineDiv.offsetWidth + 100, top: n}, "div")
            }, is)
        }, goLineLeft: function (e) {
            e.extendSelectionsBy(function (t) {
                var n = e.charCoords(t.head, "div").top + 5;
                return e.coordsChar({left: 0, top: n}, "div")
            }, is)
        }, goLineUp: function (e) {
            e.moveV(-1, "line")
        }, goLineDown: function (e) {
            e.moveV(1, "line")
        }, goPageUp: function (e) {
            e.moveV(-1, "page")
        }, goPageDown: function (e) {
            e.moveV(1, "page")
        }, goCharLeft: function (e) {
            e.moveH(-1, "char")
        }, goCharRight: function (e) {
            e.moveH(1, "char")
        }, goColumnLeft: function (e) {
            e.moveH(-1, "column")
        }, goColumnRight: function (e) {
            e.moveH(1, "column")
        }, goWordLeft: function (e) {
            e.moveH(-1, "word")
        }, goGroupRight: function (e) {
            e.moveH(1, "group")
        }, goGroupLeft: function (e) {
            e.moveH(-1, "group")
        }, goWordRight: function (e) {
            e.moveH(1, "word")
        }, delCharBefore: function (e) {
            e.deleteH(-1, "char")
        }, delCharAfter: function (e) {
            e.deleteH(1, "char")
        }, delWordBefore: function (e) {
            e.deleteH(-1, "word")
        }, delWordAfter: function (e) {
            e.deleteH(1, "word")
        }, delGroupBefore: function (e) {
            e.deleteH(-1, "group")
        }, delGroupAfter: function (e) {
            e.deleteH(1, "group")
        }, indentAuto: function (e) {
            e.indentSelection("smart")
        }, indentMore: function (e) {
            e.indentSelection("add")
        }, indentLess: function (e) {
            e.indentSelection("subtract")
        }, insertTab: function (e) {
            e.replaceSelection("	")
        }, insertSoftTab: function (e) {
            for (var t = [], n = e.listSelections(), r = e.options.tabSize, i = 0; i < n.length; i++) {
                var o = n[i].from(), a = os(e.getLine(o.line), o.ch, r);
                t.push(new Array(r - a % r + 1).join(" "))
            }
            e.replaceSelections(t)
        }, defaultTab: function (e) {
            e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab")
        }, transposeChars: function (e) {
            Yt(e, function () {
                for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++) {
                    var i = t[r].head, o = wi(e.doc, i.line).text;
                    if (o)if (i.ch == o.length && (i = new aa(i.line, i.ch - 1)), i.ch > 0)i = new aa(i.line, i.ch + 1), e.replaceRange(o.charAt(i.ch - 1) + o.charAt(i.ch - 2), aa(i.line, i.ch - 2), i, "+transpose"); else if (i.line > e.doc.first) {
                        var a = wi(e.doc, i.line - 1).text;
                        a && e.replaceRange(o.charAt(0) + "\n" + a.charAt(a.length - 1), aa(i.line - 1, a.length - 1), aa(i.line, 1), "+transpose")
                    }
                    n.push(new G(i, i))
                }
                e.setSelections(n)
            })
        }, newlineAndIndent: function (e) {
            Yt(e, function () {
                for (var t = e.listSelections().length, n = 0; t > n; n++) {
                    var r = e.listSelections()[n];
                    e.replaceRange("\n", r.anchor, r.head, "+input"), e.indentLine(r.from().line + 1, null, !0), lr(e)
                }
            })
        }, toggleOverwrite: function (e) {
            e.toggleOverwrite()
        }
    }, La = e.keyMap = {};
    La.basic = {
        Left: "goCharLeft",
        Right: "goCharRight",
        Up: "goLineUp",
        Down: "goLineDown",
        End: "goLineEnd",
        Home: "goLineStartSmart",
        PageUp: "goPageUp",
        PageDown: "goPageDown",
        Delete: "delCharAfter",
        Backspace: "delCharBefore",
        "Shift-Backspace": "delCharBefore",
        Tab: "defaultTab",
        "Shift-Tab": "indentAuto",
        Enter: "newlineAndIndent",
        Insert: "toggleOverwrite",
        Esc: "singleSelection"
    }, La.pcDefault = {
        "Ctrl-A": "selectAll",
        "Ctrl-D": "deleteLine",
        "Ctrl-Z": "undo",
        "Shift-Ctrl-Z": "redo",
        "Ctrl-Y": "redo",
        "Ctrl-Home": "goDocStart",
        "Ctrl-Up": "goDocStart",
        "Ctrl-End": "goDocEnd",
        "Ctrl-Down": "goDocEnd",
        "Ctrl-Left": "goGroupLeft",
        "Ctrl-Right": "goGroupRight",
        "Alt-Left": "goLineStart",
        "Alt-Right": "goLineEnd",
        "Ctrl-Backspace": "delGroupBefore",
        "Ctrl-Delete": "delGroupAfter",
        "Ctrl-S": "save",
        "Ctrl-F": "find",
        "Ctrl-G": "findNext",
        "Shift-Ctrl-G": "findPrev",
        "Shift-Ctrl-F": "replace",
        "Shift-Ctrl-R": "replaceAll",
        "Ctrl-[": "indentLess",
        "Ctrl-]": "indentMore",
        "Ctrl-U": "undoSelection",
        "Shift-Ctrl-U": "redoSelection",
        "Alt-U": "redoSelection",
        fallthrough: "basic"
    }, La.macDefault = {
        "Cmd-A": "selectAll",
        "Cmd-D": "deleteLine",
        "Cmd-Z": "undo",
        "Shift-Cmd-Z": "redo",
        "Cmd-Y": "redo",
        "Cmd-Up": "goDocStart",
        "Cmd-End": "goDocEnd",
        "Cmd-Down": "goDocEnd",
        "Alt-Left": "goGroupLeft",
        "Alt-Right": "goGroupRight",
        "Cmd-Left": "goLineStart",
        "Cmd-Right": "goLineEnd",
        "Alt-Backspace": "delGroupBefore",
        "Ctrl-Alt-Backspace": "delGroupAfter",
        "Alt-Delete": "delGroupAfter",
        "Cmd-S": "save",
        "Cmd-F": "find",
        "Cmd-G": "findNext",
        "Shift-Cmd-G": "findPrev",
        "Cmd-Alt-F": "replace",
        "Shift-Cmd-Alt-F": "replaceAll",
        "Cmd-[": "indentLess",
        "Cmd-]": "indentMore",
        "Cmd-Backspace": "delLineLeft",
        "Cmd-U": "undoSelection",
        "Shift-Cmd-U": "redoSelection",
        fallthrough: ["basic", "emacsy"]
    }, La.emacsy = {
        "Ctrl-F": "goCharRight",
        "Ctrl-B": "goCharLeft",
        "Ctrl-P": "goLineUp",
        "Ctrl-N": "goLineDown",
        "Alt-F": "goWordRight",
        "Alt-B": "goWordLeft",
        "Ctrl-A": "goLineStart",
        "Ctrl-E": "goLineEnd",
        "Ctrl-V": "goPageDown",
        "Shift-Ctrl-V": "goPageUp",
        "Ctrl-D": "delCharAfter",
        "Ctrl-H": "delCharBefore",
        "Alt-D": "delWordAfter",
        "Alt-Backspace": "delWordBefore",
        "Ctrl-K": "killLine",
        "Ctrl-T": "transposeChars"
    }, La["default"] = Jo ? La.macDefault : La.pcDefault;
    var Na = e.lookupKey = function (e, t, n) {
        function r(t) {
            t = vr(t);
            var i = t[e];
            if (i === !1)return "stop";
            if (null != i && n(i))return !0;
            if (t.nofallthrough)return "stop";
            var o = t.fallthrough;
            if (null == o)return !1;
            if ("[object Array]" != Object.prototype.toString.call(o))return r(o);
            for (var a = 0; a < o.length; ++a) {
                var s = r(o[a]);
                if (s)return s
            }
            return !1
        }

        for (var i = 0; i < t.length; ++i) {
            var o = r(t[i]);
            if (o)return "stop" != o
        }
    }, Ia = e.isModifierKey = function (e) {
        var t = ws[e.keyCode];
        return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t
    }, Aa = e.keyName = function (e, t) {
        if (Ko && 34 == e.keyCode && e["char"])return !1;
        var n = ws[e.keyCode];
        return null == n || e.altGraphKey ? !1 : (e.altKey && (n = "Alt-" + n), (na ? e.metaKey : e.ctrlKey) && (n = "Ctrl-" + n), (na ? e.ctrlKey : e.metaKey) && (n = "Cmd-" + n), !t && e.shiftKey && (n = "Shift-" + n), n)
    };
    e.fromTextArea = function (t, n) {
        function r() {
            t.value = c.getValue()
        }

        if (n || (n = {}), n.value = t.value, !n.tabindex && t.tabindex && (n.tabindex = t.tabindex), !n.placeholder && t.placeholder && (n.placeholder = t.placeholder), null == n.autofocus) {
            var i = mo();
            n.autofocus = i == t || null != t.getAttribute("autofocus") && i == document.body
        }
        if (t.form && (Za(t.form, "submit", r), !n.leaveSubmitMethodAlone)) {
            var o = t.form, a = o.submit;
            try {
                var s = o.submit = function () {
                    r(), o.submit = a, o.submit(), o.submit = s
                }
            } catch (l) {
            }
        }
        t.style.display = "none";
        var c = e(function (e) {
            t.parentNode.insertBefore(e, t.nextSibling)
        }, n);
        return c.save = r, c.getTextArea = function () {
            return t
        }, c.toTextArea = function () {
            r(), t.parentNode.removeChild(c.getWrapperElement()), t.style.display = "", t.form && (Ya(t.form, "submit", r), "function" == typeof t.form.submit && (t.form.submit = a))
        }, c
    };
    var ja = e.StringStream = function (e, t) {
        this.pos = this.start = 0, this.string = e, this.tabSize = t || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0
    };
    ja.prototype = {
        eol: function () {
            return this.pos >= this.string.length
        }, sol: function () {
            return this.pos == this.lineStart
        }, peek: function () {
            return this.string.charAt(this.pos) || void 0
        }, next: function () {
            return this.pos < this.string.length ? this.string.charAt(this.pos++) : void 0
        }, eat: function (e) {
            var t = this.string.charAt(this.pos);
            if ("string" == typeof e)var n = t == e; else var n = t && (e.test ? e.test(t) : e(t));
            return n ? (++this.pos, t) : void 0
        }, eatWhile: function (e) {
            for (var t = this.pos; this.eat(e););
            return this.pos > t
        }, eatSpace: function () {
            for (var e = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;
            return this.pos > e
        }, skipToEnd: function () {
            this.pos = this.string.length
        }, skipTo: function (e) {
            var t = this.string.indexOf(e, this.pos);
            return t > -1 ? (this.pos = t, !0) : void 0
        }, backUp: function (e) {
            this.pos -= e
        }, column: function () {
            return this.lastColumnPos < this.start && (this.lastColumnValue = os(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? os(this.string, this.lineStart, this.tabSize) : 0)
        }, indentation: function () {
            return os(this.string, null, this.tabSize) - (this.lineStart ? os(this.string, this.lineStart, this.tabSize) : 0)
        }, match: function (e, t, n) {
            if ("string" != typeof e) {
                var r = this.string.slice(this.pos).match(e);
                return r && r.index > 0 ? null : (r && t !== !1 && (this.pos += r[0].length), r)
            }
            var i = function (e) {
                return n ? e.toLowerCase() : e
            }, o = this.string.substr(this.pos, e.length);
            return i(o) == i(e) ? (t !== !1 && (this.pos += e.length), !0) : void 0
        }, current: function () {
            return this.string.slice(this.start, this.pos)
        }, hideFirstChars: function (e, t) {
            this.lineStart += e;
            try {
                return t()
            } finally {
                this.lineStart -= e
            }
        }
    };
    var Oa = e.TextMarker = function (e, t) {
        this.lines = [], this.type = t, this.doc = e
    };
    Yi(Oa), Oa.prototype.clear = function () {
        if (!this.explicitlyCleared) {
            var e = this.doc.cm, t = e && !e.curOp;
            if (t && Xt(e), Zi(this, "clear")) {
                var n = this.find();
                n && Ki(this, "clear", n.from, n.to)
            }
            for (var r = null, i = null, o = 0; o < this.lines.length; ++o) {
                var a = this.lines[o], s = Cr(a.markedSpans, this);
                e && !this.collapsed ? on(e, Ci(a), "text") : e && (null != s.to && (i = Ci(a)), null != s.from && (r = Ci(a))), a.markedSpans = Sr(a.markedSpans, s), null == s.from && this.collapsed && !Kr(this.doc, a) && e && xi(a, Vt(e.display))
            }
            if (e && this.collapsed && !e.options.lineWrapping)for (var o = 0; o < this.lines.length; ++o) {
                var l = Fr(this.lines[o]), c = f(l);
                c > e.display.maxLineLength && (e.display.maxLine = l, e.display.maxLineLength = c, e.display.maxLineChanged = !0)
            }
            null != r && e && this.collapsed && rn(e, r, i + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, e && ft(e.doc)), e && Ki(e, "markerCleared", e, this), t && Zt(e), this.parent && this.parent.clear()
        }
    }, Oa.prototype.find = function (e, t) {
        null == e && "bookmark" == this.type && (e = 1);
        for (var n, r, i = 0; i < this.lines.length; ++i) {
            var o = this.lines[i], a = Cr(o.markedSpans, this);
            if (null != a.from && (n = aa(t ? o : Ci(o), a.from), -1 == e))return n;
            if (null != a.to && (r = aa(t ? o : Ci(o), a.to), 1 == e))return r
        }
        return n && {from: n, to: r}
    }, Oa.prototype.changed = function () {
        var e = this.find(-1, !0), t = this, n = this.doc.cm;
        e && n && Yt(n, function () {
            var r = e.line, i = Ci(e.line), o = Lt(n, i);
            if (o && (jt(o), n.curOp.selectionChanged = n.curOp.forceUpdate = !0), n.curOp.updateMaxLine = !0, !Kr(t.doc, r) && null != t.height) {
                var a = t.height;
                t.height = null;
                var s = Xr(t) - a;
                s && xi(r, r.height + s)
            }
        })
    }, Oa.prototype.attachLine = function (e) {
        if (!this.lines.length && this.doc.cm) {
            var t = this.doc.cm.curOp;
            t.maybeHiddenMarkers && -1 != no(t.maybeHiddenMarkers, this) || (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this)
        }
        this.lines.push(e)
    }, Oa.prototype.detachLine = function (e) {
        if (this.lines.splice(no(this.lines, e), 1), !this.lines.length && this.doc.cm) {
            var t = this.doc.cm.curOp;
            (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this)
        }
    };
    var za = 0, Da = e.SharedTextMarker = function (e, t) {
        this.markers = e, this.primary = t;
        for (var n = 0; n < e.length; ++n)e[n].parent = this
    };
    Yi(Da), Da.prototype.clear = function () {
        if (!this.explicitlyCleared) {
            this.explicitlyCleared = !0;
            for (var e = 0; e < this.markers.length; ++e)this.markers[e].clear();
            Ki(this, "clear")
        }
    }, Da.prototype.find = function (e, t) {
        return this.primary.find(e, t)
    };
    var Ra = e.LineWidget = function (e, t, n) {
        if (n)for (var r in n)n.hasOwnProperty(r) && (this[r] = n[r]);
        this.cm = e, this.node = t
    };
    Yi(Ra), Ra.prototype.clear = function () {
        var e = this.cm, t = this.line.widgets, n = this.line, r = Ci(n);
        if (null != r && t) {
            for (var i = 0; i < t.length; ++i)t[i] == this && t.splice(i--, 1);
            t.length || (n.widgets = null);
            var o = Xr(this);
            Yt(e, function () {
                Gr(e, n, -o), on(e, r, "widget"), xi(n, Math.max(0, n.height - o))
            })
        }
    }, Ra.prototype.changed = function () {
        var e = this.height, t = this.cm, n = this.line;
        this.height = null;
        var r = Xr(this) - e;
        r && Yt(t, function () {
            t.curOp.forceUpdate = !0, Gr(t, n, r), xi(n, n.height + r)
        })
    };
    var Ba = e.Line = function (e, t, n) {
        this.text = e, jr(this, t), this.height = n ? n(this) : 1
    };
    Yi(Ba), Ba.prototype.lineNo = function () {
        return Ci(this)
    };
    var qa = {}, Pa = {};
    gi.prototype = {
        chunkSize: function () {
            return this.lines.length
        }, removeInner: function (e, t) {
            for (var n = e, r = e + t; r > n; ++n) {
                var i = this.lines[n];
                this.height -= i.height, Qr(i), Ki(i, "delete")
            }
            this.lines.splice(e, t)
        }, collapse: function (e) {
            e.push.apply(e, this.lines)
        }, insertInner: function (e, t, n) {
            this.height += n, this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e));
            for (var r = 0; r < t.length; ++r)t[r].parent = this
        }, iterN: function (e, t, n) {
            for (var r = e + t; r > e; ++e)if (n(this.lines[e]))return !0
        }
    }, vi.prototype = {
        chunkSize: function () {
            return this.size
        }, removeInner: function (e, t) {
            this.size -= t;
            for (var n = 0; n < this.children.length; ++n) {
                var r = this.children[n], i = r.chunkSize();
                if (i > e) {
                    var o = Math.min(t, i - e), a = r.height;
                    if (r.removeInner(e, o), this.height -= a - r.height, i == o && (this.children.splice(n--, 1), r.parent = null), 0 == (t -= o))break;
                    e = 0
                } else e -= i
            }
            if (this.size - t < 25 && (this.children.length > 1 || !(this.children[0]instanceof gi))) {
                var s = [];
                this.collapse(s), this.children = [new gi(s)], this.children[0].parent = this
            }
        }, collapse: function (e) {
            for (var t = 0; t < this.children.length; ++t)this.children[t].collapse(e)
        }, insertInner: function (e, t, n) {
            this.size += t.length, this.height += n;
            for (var r = 0; r < this.children.length; ++r) {
                var i = this.children[r], o = i.chunkSize();
                if (o >= e) {
                    if (i.insertInner(e, t, n), i.lines && i.lines.length > 50) {
                        for (; i.lines.length > 50;) {
                            var a = i.lines.splice(i.lines.length - 25, 25), s = new gi(a);
                            i.height -= s.height, this.children.splice(r + 1, 0, s), s.parent = this
                        }
                        this.maybeSpill()
                    }
                    break
                }
                e -= o
            }
        }, maybeSpill: function () {
            if (!(this.children.length <= 10)) {
                var e = this;
                do {
                    var t = e.children.splice(e.children.length - 5, 5), n = new vi(t);
                    if (e.parent) {
                        e.size -= n.size, e.height -= n.height;
                        var r = no(e.parent.children, e);
                        e.parent.children.splice(r + 1, 0, n)
                    } else {
                        var i = new vi(e.children);
                        i.parent = e, e.children = [i, n], e = i
                    }
                    n.parent = e.parent
                } while (e.children.length > 10);
                e.parent.maybeSpill()
            }
        }, iterN: function (e, t, n) {
            for (var r = 0; r < this.children.length; ++r) {
                var i = this.children[r], o = i.chunkSize();
                if (o > e) {
                    var a = Math.min(t, o - e);
                    if (i.iterN(e, a, n))return !0;
                    if (0 == (t -= a))break;
                    e = 0
                } else e -= o
            }
        }
    };
    var Fa = 0, Ha = e.Doc = function (e, t, n) {
        if (!(this instanceof Ha))return new Ha(e, t, n);
        null == n && (n = 0), vi.call(this, [new gi([new Ba("", null)])]), this.first = n, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.frontier = n;
        var r = aa(n, 0);
        this.sel = Z(r), this.history = new Mi(null), this.id = ++Fa, this.modeOption = t, "string" == typeof e && (e = vs(e)), mi(this, {
            from: r,
            to: r,
            text: e
        }), ct(this, Z(r), ns)
    };
    Ha.prototype = io(vi.prototype, {
        constructor: Ha, iter: function (e, t, n) {
            n ? this.iterN(e - this.first, t - e, n) : this.iterN(this.first, this.first + this.size, e)
        }, insert: function (e, t) {
            for (var n = 0, r = 0; r < t.length; ++r)n += t[r].height;
            this.insertInner(e - this.first, t, n)
        }, remove: function (e, t) {
            this.removeInner(e - this.first, t)
        }, getValue: function (e) {
            var t = ki(this, this.first, this.first + this.size);
            return e === !1 ? t : t.join(e || "\n")
        }, setValue: en(function (e) {
            var t = aa(this.first, 0), n = this.first + this.size - 1;
            Zn(this, {from: t, to: aa(n, wi(this, n).text.length), text: vs(e), origin: "setValue"}, !0), ct(this, Z(t))
        }), replaceRange: function (e, t, n, r) {
            t = Q(this, t), n = n ? Q(this, n) : t, nr(this, e, t, n, r)
        }, getRange: function (e, t, n) {
            var r = _i(this, Q(this, e), Q(this, t));
            return n === !1 ? r : r.join(n || "\n")
        }, getLine: function (e) {
            var t = this.getLineHandle(e);
            return t && t.text
        }, getLineHandle: function (e) {
            return et(this, e) ? wi(this, e) : void 0
        }, getLineNumber: function (e) {
            return Ci(e)
        }, getLineHandleVisualStart: function (e) {
            return "number" == typeof e && (e = wi(this, e)), Fr(e)
        }, lineCount: function () {
            return this.size
        }, firstLine: function () {
            return this.first
        }, lastLine: function () {
            return this.first + this.size - 1
        }, clipPos: function (e) {
            return Q(this, e)
        }, getCursor: function (e) {
            var t, n = this.sel.primary();
            return t = null == e || "head" == e ? n.head : "anchor" == e ? n.anchor : "end" == e || "to" == e || e === !1 ? n.to() : n.from()
        }, listSelections: function () {
            return this.sel.ranges
        }, somethingSelected: function () {
            return this.sel.somethingSelected()
        }, setCursor: en(function (e, t, n) {
            at(this, Q(this, "number" == typeof e ? aa(e, t || 0) : e), null, n)
        }), setSelection: en(function (e, t, n) {
            at(this, Q(this, e), Q(this, t || e), n)
        }), extendSelection: en(function (e, t, n) {
            rt(this, Q(this, e), t && Q(this, t), n)
        }), extendSelections: en(function (e, t) {
            it(this, tt(this, e, t))
        }), extendSelectionsBy: en(function (e, t) {
            it(this, ro(this.sel.ranges, e), t)
        }), setSelections: en(function (e, t, n) {
            if (e.length) {
                for (var r = 0, i = []; r < e.length; r++)i[r] = new G(Q(this, e[r].anchor), Q(this, e[r].head));
                null == t && (t = Math.min(e.length - 1, this.sel.primIndex)), ct(this, X(i, t), n)
            }
        }), addSelection: en(function (e, t, n) {
            var r = this.sel.ranges.slice(0);
            r.push(new G(Q(this, e), Q(this, t || e))), ct(this, X(r, r.length - 1), n)
        }), getSelection: function (e) {
            for (var t, n = this.sel.ranges, r = 0; r < n.length; r++) {
                var i = _i(this, n[r].from(), n[r].to());
                t = t ? t.concat(i) : i
            }
            return e === !1 ? t : t.join(e || "\n")
        }, getSelections: function (e) {
            for (var t = [], n = this.sel.ranges, r = 0; r < n.length; r++) {
                var i = _i(this, n[r].from(), n[r].to());
                e !== !1 && (i = i.join(e || "\n")), t[r] = i
            }
            return t
        }, replaceSelection: function (e, t, n) {
            for (var r = [], i = 0; i < this.sel.ranges.length; i++)r[i] = e;
            this.replaceSelections(r, t, n || "+input")
        }, replaceSelections: en(function (e, t, n) {
            for (var r = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
                var a = i.ranges[o];
                r[o] = {from: a.from(), to: a.to(), text: vs(e[o]), origin: n}
            }
            for (var s = t && "end" != t && Gn(this, r, t), o = r.length - 1; o >= 0; o--)Zn(this, r[o]);
            s ? lt(this, s) : this.cm && lr(this.cm)
        }), undo: en(function () {
            Qn(this, "undo")
        }), redo: en(function () {
            Qn(this, "redo")
        }), undoSelection: en(function () {
            Qn(this, "undo", !0)
        }), redoSelection: en(function () {
            Qn(this, "redo", !0)
        }), setExtending: function (e) {
            this.extend = e
        }, getExtending: function () {
            return this.extend
        }, historySize: function () {
            for (var e = this.history, t = 0, n = 0, r = 0; r < e.done.length; r++)e.done[r].ranges || ++t;
            for (var r = 0; r < e.undone.length; r++)e.undone[r].ranges || ++n;
            return {undo: t, redo: n}
        }, clearHistory: function () {
            this.history = new Mi(this.history.maxGeneration)
        }, markClean: function () {
            this.cleanGeneration = this.changeGeneration(!0)
        }, changeGeneration: function (e) {
            return e && (this.history.lastOp = this.history.lastOrigin = null), this.history.generation
        }, isClean: function (e) {
            return this.history.generation == (e || this.cleanGeneration)
        }, getHistory: function () {
            return {done: Bi(this.history.done), undone: Bi(this.history.undone)}
        }, setHistory: function (e) {
            var t = this.history = new Mi(this.history.maxGeneration);
            t.done = Bi(e.done.slice(0), null, !0), t.undone = Bi(e.undone.slice(0), null, !0)
        }, addLineClass: en(function (e, t, n) {
            return dr(this, e, "class", function (e) {
                var r = "text" == t ? "textClass" : "background" == t ? "bgClass" : "wrapClass";
                if (e[r]) {
                    if (new RegExp("(?:^|\\s)" + n + "(?:$|\\s)").test(e[r]))return !1;
                    e[r] += " " + n
                } else e[r] = n;
                return !0
            })
        }), removeLineClass: en(function (e, t, n) {
            return dr(this, e, "class", function (e) {
                var r = "text" == t ? "textClass" : "background" == t ? "bgClass" : "wrapClass", i = e[r];
                if (!i)return !1;
                if (null == n)e[r] = null; else {
                    var o = i.match(new RegExp("(?:^|\\s+)" + n + "(?:$|\\s+)"));
                    if (!o)return !1;
                    var a = o.index + o[0].length;
                    e[r] = i.slice(0, o.index) + (o.index && a != i.length ? " " : "") + i.slice(a) || null
                }
                return !0
            })
        }), markText: function (e, t, n) {
            return br(this, Q(this, e), Q(this, t), n, "range")
        }, setBookmark: function (e, t) {
            var n = {
                replacedWith: t && (null == t.nodeType ? t.widget : t),
                insertLeft: t && t.insertLeft,
                clearWhenEmpty: !1,
                shared: t && t.shared
            };
            return e = Q(this, e), br(this, e, e, n, "bookmark")
        }, findMarksAt: function (e) {
            e = Q(this, e);
            var t = [], n = wi(this, e.line).markedSpans;
            if (n)for (var r = 0; r < n.length; ++r) {
                var i = n[r];
                (null == i.from || i.from <= e.ch) && (null == i.to || i.to >= e.ch) && t.push(i.marker.parent || i.marker)
            }
            return t
        }, findMarks: function (e, t, n) {
            e = Q(this, e), t = Q(this, t);
            var r = [], i = e.line;
            return this.iter(e.line, t.line + 1, function (o) {
                var a = o.markedSpans;
                if (a)for (var s = 0; s < a.length; s++) {
                    var l = a[s];
                    i == e.line && e.ch > l.to || null == l.from && i != e.line || i == t.line && l.from > t.ch || n && !n(l.marker) || r.push(l.marker.parent || l.marker)
                }
                ++i
            }), r
        }, getAllMarks: function () {
            var e = [];
            return this.iter(function (t) {
                var n = t.markedSpans;
                if (n)for (var r = 0; r < n.length; ++r)null != n[r].from && e.push(n[r].marker)
            }), e
        }, posFromIndex: function (e) {
            var t, n = this.first;
            return this.iter(function (r) {
                var i = r.text.length + 1;
                return i > e ? (t = e, !0) : (e -= i, void++n)
            }), Q(this, aa(n, t))
        }, indexFromPos: function (e) {
            e = Q(this, e);
            var t = e.ch;
            return e.line < this.first || e.ch < 0 ? 0 : (this.iter(this.first, e.line, function (e) {
                t += e.text.length + 1
            }), t)
        }, copy: function (e) {
            var t = new Ha(ki(this, this.first, this.first + this.size), this.modeOption, this.first);
            return t.scrollTop = this.scrollTop, t.scrollLeft = this.scrollLeft, t.sel = this.sel, t.extend = !1, e && (t.history.undoDepth = this.history.undoDepth, t.setHistory(this.getHistory())), t
        }, linkedDoc: function (e) {
            e || (e = {});
            var t = this.first, n = this.first + this.size;
            null != e.from && e.from > t && (t = e.from), null != e.to && e.to < n && (n = e.to);
            var r = new Ha(ki(this, t, n), e.mode || this.modeOption, t);
            return e.sharedHist && (r.history = this.history), (this.linked || (this.linked = [])).push({
                doc: r,
                sharedHist: e.sharedHist
            }), r.linked = [{doc: this, isParent: !0, sharedHist: e.sharedHist}], _r(r, wr(this)), r
        }, unlinkDoc: function (t) {
            if (t instanceof e && (t = t.doc), this.linked)for (var n = 0; n < this.linked.length; ++n) {
                var r = this.linked[n];
                if (r.doc == t) {
                    this.linked.splice(n, 1), t.unlinkDoc(this), kr(wr(this));
                    break
                }
            }
            if (t.history == this.history) {
                var i = [t.id];
                bi(t, function (e) {
                    i.push(e.id)
                }, !0), t.history = new Mi(null), t.history.done = Bi(this.history.done, i), t.history.undone = Bi(this.history.undone, i)
            }
        }, iterLinkedDocs: function (e) {
            bi(this, e)
        }, getMode: function () {
            return this.mode
        }, getEditor: function () {
            return this.cm
        }
    }), Ha.prototype.eachLine = Ha.prototype.iter;
    var Wa = "iter insert remove copy getEditor".split(" ");
    for (var Ua in Ha.prototype)Ha.prototype.hasOwnProperty(Ua) && no(Wa, Ua) < 0 && (e.prototype[Ua] = function (e) {
        return function () {
            return e.apply(this.doc, arguments)
        }
    }(Ha.prototype[Ua]));
    Yi(Ha);
    var Ka, Va = e.e_preventDefault = function (e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1
    }, Ga = e.e_stopPropagation = function (e) {
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
    }, Xa = e.e_stop = function (e) {
        Va(e), Ga(e)
    }, Za = e.on = function (e, t, n) {
        if (e.addEventListener)e.addEventListener(t, n, !1); else if (e.attachEvent)e.attachEvent("on" + t, n); else {
            var r = e._handlers || (e._handlers = {}), i = r[t] || (r[t] = []);
            i.push(n)
        }
    }, Ya = e.off = function (e, t, n) {
        if (e.removeEventListener)e.removeEventListener(t, n, !1); else if (e.detachEvent)e.detachEvent("on" + t, n); else {
            var r = e._handlers && e._handlers[t];
            if (!r)return;
            for (var i = 0; i < r.length; ++i)if (r[i] == n) {
                r.splice(i, 1);
                break
            }
        }
    }, Qa = e.signal = function (e, t) {
        var n = e._handlers && e._handlers[t];
        if (n)for (var r = Array.prototype.slice.call(arguments, 2), i = 0; i < n.length; ++i)n[i].apply(null, r)
    }, Ja = 0, es = 30, ts = e.Pass = {
        toString: function () {
            return "CodeMirror.Pass"
        }
    }, ns = {scroll: !1}, rs = {origin: "*mouse"}, is = {origin: "+move"};
    Qi.prototype.set = function (e, t) {
        clearTimeout(this.id), this.id = setTimeout(t, e)
    };
    var os = e.countColumn = function (e, t, n, r, i) {
        null == t && (t = e.search(/[^\s\u00a0]/), -1 == t && (t = e.length));
        for (var o = r || 0, a = i || 0; ;) {
            var s = e.indexOf("	", o);
            if (0 > s || s >= t)return a + (t - o);
            a += s - o, a += n - a % n, o = s + 1
        }
    }, as = [""], ss = function (e) {
        e.select()
    };
    Yo ? ss = function (e) {
        e.selectionStart = 0, e.selectionEnd = e.value.length
    } : Po && (ss = function (e) {
        try {
            e.select()
        } catch (t) {
        }
    }), [].indexOf && (no = function (e, t) {
        return e.indexOf(t)
    }), [].map && (ro = function (e, t) {
        return e.map(t)
    });
    var ls, cs = /[\u00df\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/, us = e.isWordChar = function (e) {
        return /\w/.test(e) || e > "" && (e.toUpperCase() != e.toLowerCase() || cs.test(e))
    }, ds = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
    ls = document.createRange ? function (e, t, n) {
        var r = document.createRange();
        return r.setEnd(e, n), r.setStart(e, t), r
    } : function (e, t, n) {
        var r = document.body.createTextRange();
        return r.moveToElementText(e.parentNode), r.collapse(!0), r.moveEnd("character", n), r.moveStart("character", t), r
    }, Po && 11 > Fo && (mo = function () {
        try {
            return document.activeElement
        } catch (e) {
            return document.body
        }
    });
    var fs, ps, hs, ms = !1, gs = function () {
        if (Po && 9 > Fo)return !1;
        var e = uo("div");
        return "draggable"in e || "dragDrop"in e
    }(), vs = e.splitLines = 3 != "\n\nb".split(/\n/).length ? function (e) {
        for (var t = 0, n = [], r = e.length; r >= t;) {
            var i = e.indexOf("\n", t);
            -1 == i && (i = e.length);
            var o = e.slice(t, "\r" == e.charAt(i - 1) ? i - 1 : i), a = o.indexOf("\r");
            -1 != a ? (n.push(o.slice(0, a)), t += a + 1) : (n.push(o), t = i + 1)
        }
        return n
    } : function (e) {
        return e.split(/\r\n?|\n/)
    }, bs = window.getSelection ? function (e) {
        try {
            return e.selectionStart != e.selectionEnd
        } catch (t) {
            return !1
        }
    } : function (e) {
        try {
            var t = e.ownerDocument.selection.createRange()
        } catch (n) {
        }
        return t && t.parentElement() == e ? 0 != t.compareEndPoints("StartToEnd", t) : !1
    }, ys = function () {
        var e = uo("div");
        return "oncopy"in e ? !0 : (e.setAttribute("oncopy", "return;"), "function" == typeof e.oncopy)
    }(), ws = {
        3: "Enter",
        8: "Backspace",
        9: "Tab",
        13: "Enter",
        16: "Shift",
        17: "Ctrl",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Esc",
        32: "Space",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "Left",
        38: "Up",
        39: "Right",
        40: "Down",
        44: "PrintScrn",
        45: "Insert",
        46: "Delete",
        59: ";",
        61: "=",
        91: "Mod",
        92: "Mod",
        93: "Mod",
        107: "=",
        109: "-",
        127: "Delete",
        173: "-",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'",
        63232: "Up",
        63233: "Down",
        63234: "Left",
        63235: "Right",
        63272: "Delete",
        63273: "Home",
        63275: "End",
        63276: "PageUp",
        63277: "PageDown",
        63302: "Insert"
    };
    e.keyNames = ws, function () {
        for (var e = 0; 10 > e; e++)ws[e + 48] = ws[e + 96] = String(e);
        for (var e = 65; 90 >= e; e++)ws[e] = String.fromCharCode(e);
        for (var e = 1; 12 >= e; e++)ws[e + 111] = ws[e + 63235] = "F" + e
    }();
    var _s, ks = function () {
        function e(e) {
            return 247 >= e ? n.charAt(e) : e >= 1424 && 1524 >= e ? "R" : e >= 1536 && 1773 >= e ? r.charAt(e - 1536) : e >= 1774 && 2220 >= e ? "r" : e >= 8192 && 8203 >= e ? "w" : 8204 == e ? "b" : "L"
        }

        function t(e, t, n) {
            this.level = e, this.from = t, this.to = n
        }

        var n = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN", r = "rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmm", i = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/, o = /[stwN]/, a = /[LRr]/, s = /[Lb1n]/, l = /[1n]/, c = "L";
        return function (n) {
            if (!i.test(n))return !1;
            for (var r, u = n.length, d = [], f = 0; u > f; ++f)d.push(r = e(n.charCodeAt(f)));
            for (var f = 0, p = c; u > f; ++f) {
                var r = d[f];
                "m" == r ? d[f] = p : p = r
            }
            for (var f = 0, h = c; u > f; ++f) {
                var r = d[f];
                "1" == r && "r" == h ? d[f] = "n" : a.test(r) && (h = r, "r" == r && (d[f] = "R"))
            }
            for (var f = 1, p = d[0]; u - 1 > f; ++f) {
                var r = d[f];
                "+" == r && "1" == p && "1" == d[f + 1] ? d[f] = "1" : "," != r || p != d[f + 1] || "1" != p && "n" != p || (d[f] = p), p = r
            }
            for (var f = 0; u > f; ++f) {
                var r = d[f];
                if ("," == r)d[f] = "N"; else if ("%" == r) {
                    for (var m = f + 1; u > m && "%" == d[m]; ++m);
                    for (var g = f && "!" == d[f - 1] || u > m && "1" == d[m] ? "1" : "N", v = f; m > v; ++v)d[v] = g;
                    f = m - 1
                }
            }
            for (var f = 0, h = c; u > f; ++f) {
                var r = d[f];
                "L" == h && "1" == r ? d[f] = "L" : a.test(r) && (h = r)
            }
            for (var f = 0; u > f; ++f)if (o.test(d[f])) {
                for (var m = f + 1; u > m && o.test(d[m]); ++m);
                for (var b = "L" == (f ? d[f - 1] : c), y = "L" == (u > m ? d[m] : c), g = b || y ? "L" : "R", v = f; m > v; ++v)d[v] = g;
                f = m - 1
            }
            for (var w, _ = [], f = 0; u > f;)if (s.test(d[f])) {
                var k = f;
                for (++f; u > f && s.test(d[f]); ++f);
                _.push(new t(0, k, f))
            } else {
                var x = f, C = _.length;
                for (++f; u > f && "L" != d[f]; ++f);
                for (var v = x; f > v;)if (l.test(d[v])) {
                    v > x && _.splice(C, 0, new t(1, x, v));
                    var S = v;
                    for (++v; f > v && l.test(d[v]); ++v);
                    _.splice(C, 0, new t(2, S, v)), x = v
                } else++v;
                f > x && _.splice(C, 0, new t(1, x, f))
            }
            return 1 == _[0].level && (w = n.match(/^\s+/)) && (_[0].from = w[0].length, _.unshift(new t(0, 0, w[0].length))), 1 == to(_).level && (w = n.match(/\s+$/)) && (to(_).to -= w[0].length, _.push(new t(0, u - w[0].length, u))), _[0].level != to(_).level && _.push(new t(_[0].level, u, u)), _
        }
    }();
    return e.version = "4.3.0", e
}), define("codemirror", ["codemirror/lib/codemirror"], function (e) {
    return e
}), define("autoSave", ["jquery"], function (e) {
    "use strict";
    var t, n, r, i;
    return n = void 0, i = void 0, r = void 0, t = function () {
    }, t.prototype.bind = function (t, i) {
        var o, a, s, l;
        o = e("#editorStatus"), n = t, this.form = i, r = this, e("[name=title]").on("input", function () {
            "" !== e.trim(e(this).val()) && r.change(), window.localStorage && localStorage.setItem("autoSaveTitle_" + location.pathname + location.search, e(this).val())
        }), a = e("#license"), a.length && a.on("change", function () {
            return r.change()
        }), l = e(".reasons"), l.length && l.on("click", function () {
            return r.change()
        }), s = e("input[name=noticeAnswerers]"), s.length && s.on("change", function () {
            return r.change()
        }), n.change ? n.change(function () {
            "" !== e.trim(n.getVal()) && r.change(), window.localStorage && window.localStorage.setItem("autoSaveContent_" + location.pathname + location.search, n.getVal())
        }) : n.on("change", function () {
            "" !== e.trim(n.getValue()) && r.change(), window.localStorage && window.localStorage.setItem("autoSaveContent_" + location.pathname + location.search, n.getValue())
        }), e("#dropIt").click(function () {
            e.post("/api/draft/" + e("#draftId").val() + "/delete", function (t) {
                0 === t.status ? (o.html("已舍弃"), e("#draftId").val(""), window.localStorage && localStorage.removeItem("autoSaveContent_" + location.pathname), window.localStorage && localStorage.removeItem("autoSaveTitle_" + location.pathname), window.localStorage && localStorage.removeItem("autoSaveTag_" + location.pathname)) : o.html("舍弃失败"), e("#dropIt").addClass("hidden")
            })
        })
    }, t.prototype.change = function () {
        var t;
        t = e("#editorStatus"), t.html("保存中...").removeClass("hidden"), e("#dropIt").addClass("hidden"), clearTimeout(i), i = setTimeout(function () {
            r.save()
        }, 4e3)
    }, t.prototype.save = function () {
        var t, n, r;
        t = e("#editorStatus"), n = this, e("#publishIt").attr("disabled", "disabled"), r = new n.form, e.post("/api/" + r.type + "/draft/save", r, function (n) {
            e("#publishIt").removeAttr("disabled"), 0 === n.status ? (t.html("已保存草稿"), e("#dropIt").data("id", n.data).removeClass("hidden"), e("#draftId").val(n.data), window.localStorage && (window.localStorage.removeItem("autoSaveContent_" + location.pathname + location.search), window.localStorage.removeItem("autoSaveTitle_" + location.pathname + location.search))) : t.html("保存失败")
        })
    }, new t
}), function (e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define("codemirror/mode/python/python", ["../../lib/codemirror"], e) : e(CodeMirror)
}(function (e) {
    "use strict";
    function t(e) {
        return new RegExp("^((" + e.join(")|(") + "))\\b")
    }

    function n(e) {
        return e.scopes[e.scopes.length - 1]
    }

    var r = t(["and", "or", "not", "is", "in"]), i = ["as", "assert", "break", "class", "continue", "def", "del", "elif", "else", "except", "finally", "for", "from", "global", "if", "import", "lambda", "pass", "raise", "return", "try", "while", "with", "yield"], o = ["abs", "all", "any", "bin", "bool", "bytearray", "callable", "chr", "classmethod", "compile", "complex", "delattr", "dict", "dir", "divmod", "enumerate", "eval", "filter", "float", "format", "frozenset", "getattr", "globals", "hasattr", "hash", "help", "hex", "id", "input", "int", "isinstance", "issubclass", "iter", "len", "list", "locals", "map", "max", "memoryview", "min", "next", "object", "oct", "open", "ord", "pow", "property", "range", "repr", "reversed", "round", "set", "setattr", "slice", "sorted", "staticmethod", "str", "sum", "super", "tuple", "type", "vars", "zip", "__import__", "NotImplemented", "Ellipsis", "__debug__"], a = {
        builtins: ["apply", "basestring", "buffer", "cmp", "coerce", "execfile", "file", "intern", "long", "raw_input", "reduce", "reload", "unichr", "unicode", "xrange", "False", "True", "None"],
        keywords: ["exec", "print"]
    }, s = {builtins: ["ascii", "bytes", "exec", "print"], keywords: ["nonlocal", "False", "True", "None"]};
    e.registerHelper("hintWords", "python", i.concat(o)), e.defineMode("python", function (l, c) {
        function u(e, t) {
            if (e.sol() && "py" == n(t).type) {
                var r = n(t).offset;
                if (e.eatSpace()) {
                    var i = e.indentation();
                    return i > r ? p(e, t, "py") : r > i && h(e, t) && (t.errorToken = !0), null
                }
                var o = d(e, t);
                return r > 0 && h(e, t) && (o += " " + g), o
            }
            return d(e, t)
        }

        function d(e, t) {
            if (e.eatSpace())return null;
            var n = e.peek();
            if ("#" == n)return e.skipToEnd(), "comment";
            if (e.match(/^[0-9\.]/, !1)) {
                var i = !1;
                if (e.match(/^\d*\.\d+(e[\+\-]?\d+)?/i) && (i = !0), e.match(/^\d+\.\d*/) && (i = !0), e.match(/^\.\d+/) && (i = !0), i)return e.eat(/J/i), "number";
                var o = !1;
                if (e.match(/^0x[0-9a-f]+/i) && (o = !0), e.match(/^0b[01]+/i) && (o = !0), e.match(/^0o[0-7]+/i) && (o = !0), e.match(/^[1-9]\d*(e[\+\-]?\d+)?/) && (e.eat(/J/i), o = !0), e.match(/^0(?![\dx])/i) && (o = !0), o)return e.eat(/L/i), "number"
            }
            return e.match(T) ? (t.tokenize = f(e.current()), t.tokenize(e, t)) : e.match(_) || e.match(w) ? null : e.match(y) || e.match(v) || e.match(r) ? "operator" : e.match(b) ? null : e.match($) ? "keyword" : e.match(M) ? "builtin" : e.match(/^(self|cls)\b/) ? "variable-2" : e.match(k) ? "def" == t.lastToken || "class" == t.lastToken ? "def" : "variable" : (e.next(), g)
        }

        function f(e) {
            function t(t, i) {
                for (; !t.eol();)if (t.eatWhile(/[^'"\\]/), t.eat("\\")) {
                    if (t.next(), n && t.eol())return r
                } else {
                    if (t.match(e))return i.tokenize = u, r;
                    t.eat(/['"]/)
                }
                if (n) {
                    if (c.singleLineStringErrors)return g;
                    i.tokenize = u
                }
                return r
            }

            for (; "rub".indexOf(e.charAt(0).toLowerCase()) >= 0;)e = e.substr(1);
            var n = 1 == e.length, r = "string";
            return t.isString = !0, t
        }

        function p(e, t, r) {
            var i = 0, o = null;
            if ("py" == r)for (; "py" != n(t).type;)t.scopes.pop();
            i = n(t).offset + ("py" == r ? l.indentUnit : x), "py" == r || e.match(/^(\s|#.*)*$/, !1) || (o = e.column() + 1), t.scopes.push({
                offset: i,
                type: r,
                align: o
            })
        }

        function h(e, t) {
            for (var r = e.indentation(); n(t).offset > r;) {
                if ("py" != n(t).type)return !0;
                t.scopes.pop()
            }
            return n(t).offset != r
        }

        function m(e, t) {
            var r = t.tokenize(e, t), i = e.current();
            if ("." == i)return r = e.match(k, !1) ? null : g, null == r && "meta" == t.lastStyle && (r = "meta"), r;
            if ("@" == i)return e.match(k, !1) ? "meta" : g;
            "variable" != r && "builtin" != r || "meta" != t.lastStyle || (r = "meta"), ("pass" == i || "return" == i) && (t.dedent += 1), "lambda" == i && (t.lambda = !0), ":" != i || t.lambda || "py" != n(t).type || p(e, t, "py");
            var o = 1 == i.length ? "[({".indexOf(i) : -1;
            if (-1 != o && p(e, t, "])}".slice(o, o + 1)), o = "])}".indexOf(i), -1 != o) {
                if (n(t).type != i)return g;
                t.scopes.pop()
            }
            return t.dedent > 0 && e.eol() && "py" == n(t).type && (t.scopes.length > 1 && t.scopes.pop(), t.dedent -= 1), r
        }

        var g = "error", v = c.singleOperators || new RegExp("^[\\+\\-\\*/%&|\\^~<>!]"), b = c.singleDelimiters || new RegExp("^[\\(\\)\\[\\]\\{\\}@,:`=;\\.]"), y = c.doubleOperators || new RegExp("^((==)|(!=)|(<=)|(>=)|(<>)|(<<)|(>>)|(//)|(\\*\\*))"), w = c.doubleDelimiters || new RegExp("^((\\+=)|(\\-=)|(\\*=)|(%=)|(/=)|(&=)|(\\|=)|(\\^=))"), _ = c.tripleDelimiters || new RegExp("^((//=)|(>>=)|(<<=)|(\\*\\*=))"), k = c.identifiers || new RegExp("^[_A-Za-z][_A-Za-z0-9]*"), x = c.hangingIndent || l.indentUnit, C = i, S = o;
        if (void 0 != c.extra_keywords && (C = C.concat(c.extra_keywords)), void 0 != c.extra_builtins && (S = S.concat(c.extra_builtins)), c.version && 3 == parseInt(c.version, 10)) {
            C = C.concat(s.keywords), S = S.concat(s.builtins);
            var T = new RegExp("^(([rb]|(br))?('{3}|\"{3}|['\"]))", "i")
        } else {
            C = C.concat(a.keywords), S = S.concat(a.builtins);
            var T = new RegExp("^(([rub]|(ur)|(br))?('{3}|\"{3}|['\"]))", "i")
        }
        var $ = t(C), M = t(S), E = {
            startState: function (e) {
                return {
                    tokenize: u,
                    scopes: [{offset: e || 0, type: "py", align: null}],
                    lastStyle: null,
                    lastToken: null,
                    lambda: !1,
                    dedent: 0
                }
            }, token: function (e, t) {
                var n = t.errorToken;
                n && (t.errorToken = !1);
                var r = m(e, t);
                t.lastStyle = r;
                var i = e.current();
                return i && r && (t.lastToken = i), e.eol() && t.lambda && (t.lambda = !1), n ? r + " " + g : r
            }, indent: function (t, r) {
                if (t.tokenize != u)return t.tokenize.isString ? e.Pass : 0;
                var i = n(t), o = r && r.charAt(0) == i.type;
                return null != i.align ? i.align - (o ? 1 : 0) : o && t.scopes.length > 1 ? t.scopes[t.scopes.length - 2].offset : i.offset
            }, lineComment: "#", fold: "indent"
        };
        return E
    }), e.defineMIME("text/x-python", "python");
    var l = function (e) {
        return e.split(" ")
    };
    e.defineMIME("text/x-cython", {
        name: "python",
        extra_keywords: l("by cdef cimport cpdef ctypedef enum exceptextern gil include nogil property publicreadonly struct union DEF IF ELIF ELSE")
    })
}), function (e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define("codemirror/mode/ruby/ruby", ["../../lib/codemirror"], e) : e(CodeMirror)
}(function (e) {
    "use strict";
    e.defineMode("ruby", function (e) {
        function t(e) {
            for (var t = {}, n = 0, r = e.length; r > n; ++n)t[e[n]] = !0;
            return t
        }

        function n(e, t, n) {
            return n.tokenize.push(e), e(t, n)
        }

        function r(e, t) {
            if (c = null, e.sol() && e.match("=begin") && e.eol())return t.tokenize.push(l), "comment";
            if (e.eatSpace())return null;
            var r, i = e.next();
            if ("`" == i || "'" == i || '"' == i)return n(a(i, "string", '"' == i || "`" == i), e, t);
            if ("/" != i || e.eol() || " " == e.peek()) {
                if ("%" == i) {
                    var o = "string", u = !0;
                    e.eat("s") ? o = "atom" : e.eat(/[WQ]/) ? o = "string" : e.eat(/[r]/) ? o = "string-2" : e.eat(/[wxq]/) && (o = "string", u = !1);
                    var d = e.eat(/[^\w\s]/);
                    return d ? (p.propertyIsEnumerable(d) && (d = p[d]), n(a(d, o, u, !0), e, t)) : "operator"
                }
                if ("#" == i)return e.skipToEnd(), "comment";
                if ("<" == i && (r = e.match(/^<-?[\`\"\']?([a-zA-Z_?]\w*)[\`\"\']?(?:;|$)/)))return n(s(r[1]), e, t);
                if ("0" == i)return e.eatWhile(e.eat("x") ? /[\da-fA-F]/ : e.eat("b") ? /[01]/ : /[0-7]/), "number";
                if (/\d/.test(i))return e.match(/^[\d_]*(?:\.[\d_]+)?(?:[eE][+\-]?[\d_]+)?/), "number";
                if ("?" == i) {
                    for (; e.match(/^\\[CM]-/););
                    return e.eat("\\") ? e.eatWhile(/\w/) : e.next(), "string"
                }
                return ":" == i ? e.eat("'") ? n(a("'", "atom", !1), e, t) : e.eat('"') ? n(a('"', "atom", !0), e, t) : e.eat(/[\<\>]/) ? (e.eat(/[\<\>]/), "atom") : e.eat(/[\+\-\*\/\&\|\:\!]/) ? "atom" : e.eat(/[a-zA-Z$@_]/) ? (e.eatWhile(/[\w]/), e.eat(/[\?\!\=]/), "atom") : "operator" : "@" == i && e.match(/^@?[a-zA-Z_]/) ? (e.eat("@"), e.eatWhile(/[\w]/), "variable-2") : "$" == i ? (e.eat(/[a-zA-Z_]/) ? e.eatWhile(/[\w]/) : e.eat(/\d/) ? e.eat(/\d/) : e.next(), "variable-3") : /[a-zA-Z_]/.test(i) ? (e.eatWhile(/[\w]/), e.eat(/[\?\!]/), e.eat(":") ? "atom" : "ident") : "|" != i || !t.varList && "{" != t.lastTok && "do" != t.lastTok ? /[\(\)\[\]{}\\;]/.test(i) ? (c = i, null) : "-" == i && e.eat(">") ? "arrow" : /[=+\-\/*:\.^%<>~|]/.test(i) ? (e.eatWhile(/[=+\-\/*:\.^%<>~|]/), "operator") : null : (c = "|", null)
            }
            return e.eat("=") ? "operator" : n(a(i, "string-2", !0), e, t)
        }

        function i() {
            var e = 1;
            return function (t, n) {
                if ("}" == t.peek()) {
                    if (e--, 0 == e)return n.tokenize.pop(), n.tokenize[n.tokenize.length - 1](t, n)
                } else"{" == t.peek() && e++;
                return r(t, n)
            }
        }

        function o() {
            var e = !1;
            return function (t, n) {
                return e ? (n.tokenize.pop(), n.tokenize[n.tokenize.length - 1](t, n)) : (e = !0, r(t, n))
            }
        }

        function a(e, t, n, r) {
            return function (a, s) {
                var l, c = !1;
                for ("read-quoted-paused" === s.context.type && (s.context = s.context.prev, a.eat("}")); null != (l = a.next());) {
                    if (l == e && (r || !c)) {
                        s.tokenize.pop();
                        break
                    }
                    if (n && "#" == l && !c) {
                        if (a.eat("{")) {
                            "}" == e && (s.context = {
                                prev: s.context,
                                type: "read-quoted-paused"
                            }), s.tokenize.push(i());
                            break
                        }
                        if (/[@\$]/.test(a.peek())) {
                            s.tokenize.push(o());
                            break
                        }
                    }
                    c = !c && "\\" == l
                }
                return t
            }
        }

        function s(e) {
            return function (t, n) {
                return t.match(e) ? n.tokenize.pop() : t.skipToEnd(), "string"
            }
        }

        function l(e, t) {
            return e.sol() && e.match("=end") && e.eol() && t.tokenize.pop(), e.skipToEnd(), "comment"
        }

        var c, u = t(["alias", "and", "BEGIN", "begin", "break", "case", "class", "def", "defined?", "do", "else", "elsif", "END", "end", "ensure", "false", "for", "if", "in", "module", "next", "not", "or", "redo", "rescue", "retry", "return", "self", "super", "then", "true", "undef", "unless", "until", "when", "while", "yield", "nil", "raise", "throw", "catch", "fail", "loop", "callcc", "caller", "lambda", "proc", "public", "protected", "private", "require", "load", "require_relative", "extend", "autoload", "__END__", "__FILE__", "__LINE__", "__dir__"]), d = t(["def", "class", "case", "for", "while", "module", "then", "catch", "loop", "proc", "begin"]), f = t(["end", "until"]), p = {
            "[": "]",
            "{": "}",
            "(": ")"
        };
        return {
            startState: function () {
                return {
                    tokenize: [r],
                    indented: 0,
                    context: {type: "top", indented: -e.indentUnit},
                    continuedLine: !1,
                    lastTok: null,
                    varList: !1
                }
            }, token: function (e, t) {
                e.sol() && (t.indented = e.indentation());
                var n, r = t.tokenize[t.tokenize.length - 1](e, t);
                if ("ident" == r) {
                    var i = e.current();
                    r = u.propertyIsEnumerable(e.current()) ? "keyword" : /^[A-Z]/.test(i) ? "tag" : "def" == t.lastTok || "class" == t.lastTok || t.varList ? "def" : "variable", d.propertyIsEnumerable(i) ? n = "indent" : f.propertyIsEnumerable(i) ? n = "dedent" : "if" != i && "unless" != i || e.column() != e.indentation() ? "do" == i && t.context.indented < t.indented && (n = "indent") : n = "indent"
                }
                return (c || r && "comment" != r) && (t.lastTok = i || c || r), "|" == c && (t.varList = !t.varList), "indent" == n || /[\(\[\{]/.test(c) ? t.context = {
                    prev: t.context,
                    type: c || r,
                    indented: t.indented
                } : ("dedent" == n || /[\)\]\}]/.test(c)) && t.context.prev && (t.context = t.context.prev), e.eol() && (t.continuedLine = "\\" == c || "operator" == r), r
            }, indent: function (t, n) {
                if (t.tokenize[t.tokenize.length - 1] != r)return 0;
                var i = n && n.charAt(0), o = t.context, a = o.type == p[i] || "keyword" == o.type && /^(?:end|until|else|elsif|when|rescue)\b/.test(n);
                return o.indented + (a ? 0 : e.indentUnit) + (t.continuedLine ? e.indentUnit : 0)
            }, electricChars: "}de", lineComment: "#"
        }
    }), e.defineMIME("text/x-ruby", "ruby")
}), function (e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define("codemirror/mode/xml/xml", ["codemirror"], e) : e(CodeMirror)
}(function (e) {
    "use strict";
    e.defineMode("xml", function (t, n) {
        function r(e, t) {
            function n(n) {
                return t.tokenize = n, n(e, t)
            }

            var r = e.next();
            if ("<" == r)return e.eat("!") ? e.eat("[") ? e.match("CDATA[") ? n(a("atom", "]]>")) : null : e.match("--") ? n(a("comment", "-->")) : e.match("DOCTYPE", !0, !0) ? (e.eatWhile(/[\w\._\-]/), n(s(1))) : null : e.eat("?") ? (e.eatWhile(/[\w\._\-]/), t.tokenize = a("meta", "?>"), "meta") : (x = e.eat("/") ? "closeTag" : "openTag", t.tokenize = i, "tag bracket");
            if ("&" == r) {
                var o;
                return o = e.eat("#") ? e.eat("x") ? e.eatWhile(/[a-fA-F\d]/) && e.eat(";") : e.eatWhile(/[\d]/) && e.eat(";") : e.eatWhile(/[\w\.\-:]/) && e.eat(";"), o ? "atom" : "error"
            }
            return e.eatWhile(/[^&<]/), null
        }

        function i(e, t) {
            var n = e.next();
            if (">" == n || "/" == n && e.eat(">"))return t.tokenize = r, x = ">" == n ? "endTag" : "selfcloseTag", "tag bracket";
            if ("=" == n)return x = "equals", null;
            if ("<" == n) {
                t.tokenize = r, t.state = d, t.tagName = t.tagStart = null;
                var i = t.tokenize(e, t);
                return i ? i + " tag error" : "tag error"
            }
            return /[\'\"]/.test(n) ? (t.tokenize = o(n), t.stringStartCol = e.column(), t.tokenize(e, t)) : (e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), "word")
        }

        function o(e) {
            var t = function (t, n) {
                for (; !t.eol();)if (t.next() == e) {
                    n.tokenize = i;
                    break
                }
                return "string"
            };
            return t.isInAttribute = !0, t
        }

        function a(e, t) {
            return function (n, i) {
                for (; !n.eol();) {
                    if (n.match(t)) {
                        i.tokenize = r;
                        break
                    }
                    n.next()
                }
                return e
            }
        }

        function s(e) {
            return function (t, n) {
                for (var i; null != (i = t.next());) {
                    if ("<" == i)return n.tokenize = s(e + 1), n.tokenize(t, n);
                    if (">" == i) {
                        if (1 == e) {
                            n.tokenize = r;
                            break
                        }
                        return n.tokenize = s(e - 1), n.tokenize(t, n)
                    }
                }
                return "meta"
            }
        }

        function l(e, t, n) {
            this.prev = e.context, this.tagName = t, this.indent = e.indented, this.startOfLine = n, (S.doNotIndent.hasOwnProperty(t) || e.context && e.context.noIndent) && (this.noIndent = !0)
        }

        function c(e) {
            e.context && (e.context = e.context.prev)
        }

        function u(e, t) {
            for (var n; ;) {
                if (!e.context)return;
                if (n = e.context.tagName, !S.contextGrabbers.hasOwnProperty(n) || !S.contextGrabbers[n].hasOwnProperty(t))return;
                c(e)
            }
        }

        function d(e, t, n) {
            return "openTag" == e ? (n.tagStart = t.column(), f) : "closeTag" == e ? p : d
        }

        function f(e, t, n) {
            return "word" == e ? (n.tagName = t.current(), C = "tag", g) : (C = "error", f)
        }

        function p(e, t, n) {
            if ("word" == e) {
                var r = t.current();
                return n.context && n.context.tagName != r && S.implicitlyClosed.hasOwnProperty(n.context.tagName) && c(n), n.context && n.context.tagName == r ? (C = "tag", h) : (C = "tag error", m)
            }
            return C = "error", m
        }

        function h(e, t, n) {
            return "endTag" != e ? (C = "error", h) : (c(n), d)
        }

        function m(e, t, n) {
            return C = "error", h(e, t, n)
        }

        function g(e, t, n) {
            if ("word" == e)return C = "attribute", v;
            if ("endTag" == e || "selfcloseTag" == e) {
                var r = n.tagName, i = n.tagStart;
                return n.tagName = n.tagStart = null, "selfcloseTag" == e || S.autoSelfClosers.hasOwnProperty(r) ? u(n, r) : (u(n, r), n.context = new l(n, r, i == n.indented)), d
            }
            return C = "error", g
        }

        function v(e, t, n) {
            return "equals" == e ? b : (S.allowMissing || (C = "error"), g(e, t, n))
        }

        function b(e, t, n) {
            return "string" == e ? y : "word" == e && S.allowUnquoted ? (C = "string", g) : (C = "error", g(e, t, n))
        }

        function y(e, t, n) {
            return "string" == e ? y : g(e, t, n)
        }

        var w = t.indentUnit, _ = n.multilineTagIndentFactor || 1, k = n.multilineTagIndentPastTag;
        null == k && (k = !0);
        var x, C, S = n.htmlMode ? {
            autoSelfClosers: {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                command: !0,
                embed: !0,
                frame: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0
            },
            implicitlyClosed: {
                dd: !0,
                li: !0,
                optgroup: !0,
                option: !0,
                p: !0,
                rp: !0,
                rt: !0,
                tbody: !0,
                td: !0,
                tfoot: !0,
                th: !0,
                tr: !0
            },
            contextGrabbers: {
                dd: {dd: !0, dt: !0},
                dt: {dd: !0, dt: !0},
                li: {li: !0},
                option: {option: !0, optgroup: !0},
                optgroup: {optgroup: !0},
                p: {
                    address: !0,
                    article: !0,
                    aside: !0,
                    blockquote: !0,
                    dir: !0,
                    div: !0,
                    dl: !0,
                    fieldset: !0,
                    footer: !0,
                    form: !0,
                    h1: !0,
                    h2: !0,
                    h3: !0,
                    h4: !0,
                    h5: !0,
                    h6: !0,
                    header: !0,
                    hgroup: !0,
                    hr: !0,
                    menu: !0,
                    nav: !0,
                    ol: !0,
                    p: !0,
                    pre: !0,
                    section: !0,
                    table: !0,
                    ul: !0
                },
                rp: {rp: !0, rt: !0},
                rt: {rp: !0, rt: !0},
                tbody: {tbody: !0, tfoot: !0},
                td: {td: !0, th: !0},
                tfoot: {tbody: !0},
                th: {td: !0, th: !0},
                thead: {tbody: !0, tfoot: !0},
                tr: {tr: !0}
            },
            doNotIndent: {pre: !0},
            allowUnquoted: !0,
            allowMissing: !0,
            caseFold: !0
        } : {
            autoSelfClosers: {},
            implicitlyClosed: {},
            contextGrabbers: {},
            doNotIndent: {},
            allowUnquoted: !1,
            allowMissing: !1,
            caseFold: !1
        }, T = n.alignCDATA;
        return {
            startState: function () {
                return {tokenize: r, state: d, indented: 0, tagName: null, tagStart: null, context: null}
            },
            token: function (e, t) {
                if (!t.tagName && e.sol() && (t.indented = e.indentation()), e.eatSpace())return null;
                x = null;
                var n = t.tokenize(e, t);
                return (n || x) && "comment" != n && (C = null, t.state = t.state(x || n, e, t), C && (n = "error" == C ? n + " error" : C)), n
            },
            indent: function (t, n, o) {
                var a = t.context;
                if (t.tokenize.isInAttribute)return t.tagStart == t.indented ? t.stringStartCol + 1 : t.indented + w;
                if (a && a.noIndent)return e.Pass;
                if (t.tokenize != i && t.tokenize != r)return o ? o.match(/^(\s*)/)[0].length : 0;
                if (t.tagName)return k ? t.tagStart + t.tagName.length + 2 : t.tagStart + w * _;
                if (T && /<!\[CDATA\[/.test(n))return 0;
                var s = n && /^<(\/)?([\w_:\.-]*)/.exec(n);
                if (s && s[1])for (; a;) {
                    if (a.tagName == s[2]) {
                        a = a.prev;
                        break
                    }
                    if (!S.implicitlyClosed.hasOwnProperty(a.tagName))break;
                    a = a.prev
                } else if (s)for (; a;) {
                    var l = S.contextGrabbers[a.tagName];
                    if (!l || !l.hasOwnProperty(s[2]))break;
                    a = a.prev
                }
                for (; a && !a.startOfLine;)a = a.prev;
                return a ? a.indent + w : 0
            },
            electricInput: /<\/[\s\w:]+>$/,
            blockCommentStart: "<!--",
            blockCommentEnd: "-->",
            configuration: n.htmlMode ? "html" : "xml",
            helperType: n.htmlMode ? "html" : "xml"
        }
    }), e.defineMIME("text/xml", "xml"), e.defineMIME("application/xml", "xml"), e.mimeModes.hasOwnProperty("text/html") || e.defineMIME("text/html", {
        name: "xml",
        htmlMode: !0
    })
}), function (e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define("codemirror/mode/javascript/javascript", ["../../lib/codemirror"], e) : e(CodeMirror)
}(function (e) {
    "use strict";
    e.defineMode("javascript", function (t, n) {
        function r(e) {
            for (var t, n = !1, r = !1; null != (t = e.next());) {
                if (!n) {
                    if ("/" == t && !r)return;
                    "[" == t ? r = !0 : r && "]" == t && (r = !1)
                }
                n = !n && "\\" == t
            }
        }

        function i(e, t, n) {
            return ht = e, mt = n, t
        }

        function o(e, t) {
            var n = e.next();
            if ('"' == n || "'" == n)return t.tokenize = a(n), t.tokenize(e, t);
            if ("." == n && e.match(/^\d+(?:[eE][+\-]?\d+)?/))return i("number", "number");
            if ("." == n && e.match(".."))return i("spread", "meta");
            if (/[\[\]{}\(\),;\:\.]/.test(n))return i(n);
            if ("=" == n && e.eat(">"))return i("=>", "operator");
            if ("0" == n && e.eat(/x/i))return e.eatWhile(/[\da-f]/i), i("number", "number");
            if (/\d/.test(n))return e.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/), i("number", "number");
            if ("/" == n)return e.eat("*") ? (t.tokenize = s, s(e, t)) : e.eat("/") ? (e.skipToEnd(), i("comment", "comment")) : "operator" == t.lastType || "keyword c" == t.lastType || "sof" == t.lastType || /^[\[{}\(,;:]$/.test(t.lastType) ? (r(e), e.eatWhile(/[gimy]/), i("regexp", "string-2")) : (e.eatWhile(kt), i("operator", "operator", e.current()));
            if ("`" == n)return t.tokenize = l, l(e, t);
            if ("#" == n)return e.skipToEnd(), i("error", "error");
            if (kt.test(n))return e.eatWhile(kt), i("operator", "operator", e.current());
            e.eatWhile(/[\w\$_]/);
            var o = e.current(), c = _t.propertyIsEnumerable(o) && _t[o];
            return c && "." != t.lastType ? i(c.type, c.style, o) : i("variable", "variable", o)
        }

        function a(e) {
            return function (t, n) {
                var r, a = !1;
                if (bt && "@" == t.peek() && t.match(xt))return n.tokenize = o, i("jsonld-keyword", "meta");
                for (; null != (r = t.next()) && (r != e || a);)a = !a && "\\" == r;
                return a || (n.tokenize = o), i("string", "string")
            }
        }

        function s(e, t) {
            for (var n, r = !1; n = e.next();) {
                if ("/" == n && r) {
                    t.tokenize = o;
                    break
                }
                r = "*" == n
            }
            return i("comment", "comment")
        }

        function l(e, t) {
            for (var n, r = !1; null != (n = e.next());) {
                if (!r && ("`" == n || "$" == n && e.eat("{"))) {
                    t.tokenize = o;
                    break
                }
                r = !r && "\\" == n
            }
            return i("quasi", "string-2", e.current())
        }

        function c(e, t) {
            t.fatArrowAt && (t.fatArrowAt = null);
            var n = e.string.indexOf("=>", e.start);
            if (!(0 > n)) {
                for (var r = 0, i = !1, o = n - 1; o >= 0; --o) {
                    var a = e.string.charAt(o), s = Ct.indexOf(a);
                    if (s >= 0 && 3 > s) {
                        if (!r) {
                            ++o;
                            break
                        }
                        if (0 == --r)break
                    } else if (s >= 3 && 6 > s)++r; else if (/[$\w]/.test(a))i = !0; else if (i && !r) {
                        ++o;
                        break
                    }
                }
                i && !r && (t.fatArrowAt = o)
            }
        }

        function u(e, t, n, r, i, o) {
            this.indented = e, this.column = t, this.type = n, this.prev = i, this.info = o, null != r && (this.align = r)
        }

        function d(e, t) {
            for (var n = e.localVars; n; n = n.next)if (n.name == t)return !0;
            for (var r = e.context; r; r = r.prev)for (var n = r.vars; n; n = n.next)if (n.name == t)return !0
        }

        function f(e, t, n, r, i) {
            var o = e.cc;
            for (Tt.state = e, Tt.stream = i, Tt.marked = null, Tt.cc = o, Tt.style = t, e.lexical.hasOwnProperty("align") || (e.lexical.align = !0); ;) {
                var a = o.length ? o.pop() : yt ? k : _;
                if (a(n, r)) {
                    for (; o.length && o[o.length - 1].lex;)o.pop()();
                    return Tt.marked ? Tt.marked : "variable" == n && d(e, r) ? "variable-2" : t
                }
            }
        }

        function p() {
            for (var e = arguments.length - 1; e >= 0; e--)Tt.cc.push(arguments[e])
        }

        function h() {
            return p.apply(null, arguments), !0
        }

        function m(e) {
            function t(t) {
                for (var n = t; n; n = n.next)if (n.name == e)return !0;
                return !1
            }

            var r = Tt.state;
            if (r.context) {
                if (Tt.marked = "def", t(r.localVars))return;
                r.localVars = {name: e, next: r.localVars}
            } else {
                if (t(r.globalVars))return;
                n.globalVars && (r.globalVars = {name: e, next: r.globalVars})
            }
        }

        function g() {
            Tt.state.context = {prev: Tt.state.context, vars: Tt.state.localVars}, Tt.state.localVars = $t
        }

        function v() {
            Tt.state.localVars = Tt.state.context.vars, Tt.state.context = Tt.state.context.prev
        }

        function b(e, t) {
            var n = function () {
                var n = Tt.state, r = n.indented;
                "stat" == n.lexical.type && (r = n.lexical.indented), n.lexical = new u(r, Tt.stream.column(), e, null, n.lexical, t)
            };
            return n.lex = !0, n
        }

        function y() {
            var e = Tt.state;
            e.lexical.prev && (")" == e.lexical.type && (e.indented = e.lexical.indented), e.lexical = e.lexical.prev)
        }

        function w(e) {
            function t(n) {
                return n == e ? h() : ";" == e ? p() : h(t)
            }

            return t
        }

        function _(e, t) {
            return "var" == e ? h(b("vardef", t.length), H, w(";"), y) : "keyword a" == e ? h(b("form"), k, _, y) : "keyword b" == e ? h(b("form"), _, y) : "{" == e ? h(b("}"), q, y) : ";" == e ? h() : "if" == e ? ("else" == Tt.state.lexical.info && Tt.state.cc[Tt.state.cc.length - 1] == y && Tt.state.cc.pop()(), h(b("form"), k, _, y, G)) : "function" == e ? h(et) : "for" == e ? h(b("form"), X, _, y) : "variable" == e ? h(b("stat"), A) : "switch" == e ? h(b("form"), k, b("}", "switch"), w("{"), q, y, y) : "case" == e ? h(k, w(":")) : "default" == e ? h(w(":")) : "catch" == e ? h(b("form"), g, w("("), tt, w(")"), _, y, v) : "module" == e ? h(b("form"), g, at, v, y) : "class" == e ? h(b("form"), nt, y) : "export" == e ? h(b("form"), st, y) : "import" == e ? h(b("form"), lt, y) : p(b("stat"), k, w(";"), y)
        }

        function k(e) {
            return C(e, !1)
        }

        function x(e) {
            return C(e, !0)
        }

        function C(e, t) {
            if (Tt.state.fatArrowAt == Tt.stream.start) {
                var n = t ? I : N;
                if ("(" == e)return h(g, b(")"), R(W, ")"), y, w("=>"), n, v);
                if ("variable" == e)return p(g, W, w("=>"), n, v)
            }
            var r = t ? M : $;
            return St.hasOwnProperty(e) ? h(r) : "function" == e ? h(et, r) : "keyword c" == e ? h(t ? T : S) : "(" == e ? h(b(")"), S, pt, w(")"), y, r) : "operator" == e || "spread" == e ? h(t ? x : k) : "[" == e ? h(b("]"), dt, y, r) : "{" == e ? B(O, "}", null, r) : "quasi" == e ? p(E, r) : h()
        }

        function S(e) {
            return e.match(/[;\}\)\],]/) ? p() : p(k)
        }

        function T(e) {
            return e.match(/[;\}\)\],]/) ? p() : p(x)
        }

        function $(e, t) {
            return "," == e ? h(k) : M(e, t, !1)
        }

        function M(e, t, n) {
            var r = 0 == n ? $ : M, i = 0 == n ? k : x;
            return "=>" == t ? h(g, n ? I : N, v) : "operator" == e ? /\+\+|--/.test(t) ? h(r) : "?" == t ? h(k, w(":"), i) : h(i) : "quasi" == e ? p(E, r) : ";" != e ? "(" == e ? B(x, ")", "call", r) : "." == e ? h(j, r) : "[" == e ? h(b("]"), S, w("]"), y, r) : void 0 : void 0
        }

        function E(e, t) {
            return "quasi" != e ? p() : "${" != t.slice(t.length - 2) ? h(E) : h(k, L)
        }

        function L(e) {
            return "}" == e ? (Tt.marked = "string-2", Tt.state.tokenize = l, h(E)) : void 0
        }

        function N(e) {
            return c(Tt.stream, Tt.state), p("{" == e ? _ : k)
        }

        function I(e) {
            return c(Tt.stream, Tt.state), p("{" == e ? _ : x)
        }

        function A(e) {
            return ":" == e ? h(y, _) : p($, w(";"), y)
        }

        function j(e) {
            return "variable" == e ? (Tt.marked = "property", h()) : void 0
        }

        function O(e, t) {
            return "variable" == e || "keyword" == Tt.style ? (Tt.marked = "property", h("get" == t || "set" == t ? z : D)) : "number" == e || "string" == e ? (Tt.marked = bt ? "property" : Tt.style + " property", h(D)) : "jsonld-keyword" == e ? h(D) : "[" == e ? h(k, w("]"), D) : void 0
        }

        function z(e) {
            return "variable" != e ? p(D) : (Tt.marked = "property", h(et))
        }

        function D(e) {
            return ":" == e ? h(x) : "(" == e ? p(et) : void 0
        }

        function R(e, t) {
            function n(r) {
                if ("," == r) {
                    var i = Tt.state.lexical;
                    return "call" == i.info && (i.pos = (i.pos || 0) + 1), h(e, n)
                }
                return r == t ? h() : h(w(t))
            }

            return function (r) {
                return r == t ? h() : p(e, n)
            }
        }

        function B(e, t, n) {
            for (var r = 3; r < arguments.length; r++)Tt.cc.push(arguments[r]);
            return h(b(t, n), R(e, t), y)
        }

        function q(e) {
            return "}" == e ? h() : p(_, q)
        }

        function P(e) {
            return wt && ":" == e ? h(F) : void 0
        }

        function F(e) {
            return "variable" == e ? (Tt.marked = "variable-3", h()) : void 0
        }

        function H() {
            return p(W, P, K, V)
        }

        function W(e, t) {
            return "variable" == e ? (m(t), h()) : "[" == e ? B(W, "]") : "{" == e ? B(U, "}") : void 0
        }

        function U(e, t) {
            return "variable" != e || Tt.stream.match(/^\s*:/, !1) ? ("variable" == e && (Tt.marked = "property"), h(w(":"), W, K)) : (m(t), h(K))
        }

        function K(e, t) {
            return "=" == t ? h(x) : void 0
        }

        function V(e) {
            return "," == e ? h(H) : void 0
        }

        function G(e, t) {
            return "keyword b" == e && "else" == t ? h(b("form", "else"), _, y) : void 0
        }

        function X(e) {
            return "(" == e ? h(b(")"), Z, w(")"), y) : void 0
        }

        function Z(e) {
            return "var" == e ? h(H, w(";"), Q) : ";" == e ? h(Q) : "variable" == e ? h(Y) : p(k, w(";"), Q)
        }

        function Y(e, t) {
            return "in" == t || "of" == t ? (Tt.marked = "keyword", h(k)) : h($, Q)
        }

        function Q(e, t) {
            return ";" == e ? h(J) : "in" == t || "of" == t ? (Tt.marked = "keyword", h(k)) : p(k, w(";"), J)
        }

        function J(e) {
            ")" != e && h(k)
        }

        function et(e, t) {
            return "*" == t ? (Tt.marked = "keyword", h(et)) : "variable" == e ? (m(t), h(et)) : "(" == e ? h(g, b(")"), R(tt, ")"), y, _, v) : void 0
        }

        function tt(e) {
            return "spread" == e ? h(tt) : p(W, P)
        }

        function nt(e, t) {
            return "variable" == e ? (m(t), h(rt)) : void 0
        }

        function rt(e, t) {
            return "extends" == t ? h(k, rt) : "{" == e ? h(b("}"), it, y) : void 0
        }

        function it(e, t) {
            return "variable" == e || "keyword" == Tt.style ? (Tt.marked = "property", "get" == t || "set" == t ? h(ot, et, it) : h(et, it)) : "*" == t ? (Tt.marked = "keyword", h(it)) : ";" == e ? h(it) : "}" == e ? h() : void 0
        }

        function ot(e) {
            return "variable" != e ? p() : (Tt.marked = "property", h())
        }

        function at(e, t) {
            return "string" == e ? h(_) : "variable" == e ? (m(t), h(ut)) : void 0
        }

        function st(e, t) {
            return "*" == t ? (Tt.marked = "keyword", h(ut, w(";"))) : "default" == t ? (Tt.marked = "keyword", h(k, w(";"))) : p(_)
        }

        function lt(e) {
            return "string" == e ? h() : p(ct, ut)
        }

        function ct(e, t) {
            return "{" == e ? B(ct, "}") : ("variable" == e && m(t), h())
        }

        function ut(e, t) {
            return "from" == t ? (Tt.marked = "keyword", h(k)) : void 0
        }

        function dt(e) {
            return "]" == e ? h() : p(x, ft)
        }

        function ft(e) {
            return "for" == e ? p(pt, w("]")) : "," == e ? h(R(x, "]")) : p(R(x, "]"))
        }

        function pt(e) {
            return "for" == e ? h(X, pt) : "if" == e ? h(k, pt) : void 0
        }

        var ht, mt, gt = t.indentUnit, vt = n.statementIndent, bt = n.jsonld, yt = n.json || bt, wt = n.typescript, _t = function () {
            function e(e) {
                return {type: e, style: "keyword"}
            }

            var t = e("keyword a"), n = e("keyword b"), r = e("keyword c"), i = e("operator"), o = {
                type: "atom",
                style: "atom"
            }, a = {
                "if": e("if"),
                "while": t,
                "with": t,
                "else": n,
                "do": n,
                "try": n,
                "finally": n,
                "return": r,
                "break": r,
                "continue": r,
                "new": r,
                "delete": r,
                "throw": r,
                "debugger": r,
                "var": e("var"),
                "const": e("var"),
                let: e("var"),
                "function": e("function"),
                "catch": e("catch"),
                "for": e("for"),
                "switch": e("switch"),
                "case": e("case"),
                "default": e("default"),
                "in": i,
                "typeof": i,
                "instanceof": i,
                "true": o,
                "false": o,
                "null": o,
                undefined: o,
                NaN: o,
                Infinity: o,
                "this": e("this"),
                module: e("module"),
                "class": e("class"),
                "super": e("atom"),
                "yield": r,
                "export": e("export"),
                "import": e("import"),
                "extends": r
            };
            if (wt) {
                var s = {type: "variable", style: "variable-3"}, l = {
                    "interface": e("interface"),
                    "extends": e("extends"),
                    constructor: e("constructor"),
                    "public": e("public"),
                    "private": e("private"),
                    "protected": e("protected"),
                    "static": e("static"),
                    string: s,
                    number: s,
                    bool: s,
                    any: s
                };
                for (var c in l)a[c] = l[c]
            }
            return a
        }(), kt = /[+\-*&%=<>!?|~^]/, xt = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/, Ct = "([{}])", St = {
            atom: !0,
            number: !0,
            variable: !0,
            string: !0,
            regexp: !0,
            "this": !0,
            "jsonld-keyword": !0
        }, Tt = {state: null, column: null, marked: null, cc: null}, $t = {name: "this", next: {name: "arguments"}};
        return y.lex = !0, {
            startState: function (e) {
                var t = {
                    tokenize: o,
                    lastType: "sof",
                    cc: [],
                    lexical: new u((e || 0) - gt, 0, "block", !1),
                    localVars: n.localVars,
                    context: n.localVars && {vars: n.localVars},
                    indented: 0
                };
                return n.globalVars && "object" == typeof n.globalVars && (t.globalVars = n.globalVars), t
            },
            token: function (e, t) {
                if (e.sol() && (t.lexical.hasOwnProperty("align") || (t.lexical.align = !1), t.indented = e.indentation(), c(e, t)), t.tokenize != s && e.eatSpace())return null;
                var n = t.tokenize(e, t);
                return "comment" == ht ? n : (t.lastType = "operator" != ht || "++" != mt && "--" != mt ? ht : "incdec", f(t, n, ht, mt, e))
            },
            indent: function (t, r) {
                if (t.tokenize == s)return e.Pass;
                if (t.tokenize != o)return 0;
                var i = r && r.charAt(0), a = t.lexical;
                if (!/^\s*else\b/.test(r))for (var l = t.cc.length - 1; l >= 0; --l) {
                    var c = t.cc[l];
                    if (c == y)a = a.prev; else if (c != G)break
                }
                "stat" == a.type && "}" == i && (a = a.prev), vt && ")" == a.type && "stat" == a.prev.type && (a = a.prev);
                var u = a.type, d = i == u;
                return "vardef" == u ? a.indented + ("operator" == t.lastType || "," == t.lastType ? a.info + 1 : 0) : "form" == u && "{" == i ? a.indented : "form" == u ? a.indented + gt : "stat" == u ? a.indented + ("operator" == t.lastType || "," == t.lastType ? vt || gt : 0) : "switch" != a.info || d || 0 == n.doubleIndentSwitch ? a.align ? a.column + (d ? 0 : 1) : a.indented + (d ? 0 : gt) : a.indented + (/^(?:case|default)\b/.test(r) ? gt : 2 * gt)
            },
            electricChars: ":{}",
            blockCommentStart: yt ? null : "/*",
            blockCommentEnd: yt ? null : "*/",
            lineComment: yt ? null : "//",
            fold: "brace",
            helperType: yt ? "json" : "javascript",
            jsonldMode: bt,
            jsonMode: yt
        }
    }), e.registerHelper("wordChars", "javascript", /[\\w$]/), e.defineMIME("text/javascript", "javascript"), e.defineMIME("text/ecmascript", "javascript"), e.defineMIME("application/javascript", "javascript"), e.defineMIME("application/x-javascript", "javascript"), e.defineMIME("application/ecmascript", "javascript"), e.defineMIME("application/json", {
        name: "javascript",
        json: !0
    }), e.defineMIME("application/x-json", {
        name: "javascript",
        json: !0
    }), e.defineMIME("application/ld+json", {
        name: "javascript",
        jsonld: !0
    }), e.defineMIME("text/typescript", {
        name: "javascript",
        typescript: !0
    }), e.defineMIME("application/typescript", {name: "javascript", typescript: !0})
}), function (e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define("codemirror/mode/css/css", ["../../lib/codemirror"], e) : e(CodeMirror)
}(function (e) {
    "use strict";
    function t(e) {
        for (var t = {}, n = 0; n < e.length; ++n)t[e[n]] = !0;
        return t
    }

    function n(e, t) {
        for (var n, r = !1; null != (n = e.next());) {
            if (r && "/" == n) {
                t.tokenize = null;
                break
            }
            r = "*" == n
        }
        return ["comment", "comment"]
    }

    function r(e, t) {
        return e.skipTo("-->") ? (e.match("-->"), t.tokenize = null) : e.skipToEnd(), ["comment", "comment"]
    }

    e.defineMode("css", function (t, n) {
        function r(e, t) {
            return p = t, e
        }

        function i(e, t) {
            var n = e.next();
            if (g[n]) {
                var i = g[n](e, t);
                if (i !== !1)return i
            }
            return "@" == n ? (e.eatWhile(/[\w\\\-]/), r("def", e.current())) : "=" == n || ("~" == n || "|" == n) && e.eat("=") ? r(null, "compare") : '"' == n || "'" == n ? (t.tokenize = o(n), t.tokenize(e, t)) : "#" == n ? (e.eatWhile(/[\w\\\-]/), r("atom", "hash")) : "!" == n ? (e.match(/^\s*\w*/), r("keyword", "important")) : /\d/.test(n) || "." == n && e.eat(/\d/) ? (e.eatWhile(/[\w.%]/), r("number", "unit")) : "-" !== n ? /[,+>*\/]/.test(n) ? r(null, "select-op") : "." == n && e.match(/^-?[_a-z][_a-z0-9-]*/i) ? r("qualifier", "qualifier") : /[:;{}\[\]\(\)]/.test(n) ? r(null, n) : "u" == n && e.match("rl(") ? (e.backUp(1), t.tokenize = a, r("property", "word")) : /[\w\\\-]/.test(n) ? (e.eatWhile(/[\w\\\-]/), r("property", "word")) : r(null, null) : /[\d.]/.test(e.peek()) ? (e.eatWhile(/[\w.%]/), r("number", "unit")) : e.match(/^\w+-/) ? r("meta", "meta") : void 0
        }

        function o(e) {
            return function (t, n) {
                for (var i, o = !1; null != (i = t.next());) {
                    if (i == e && !o) {
                        ")" == e && t.backUp(1);
                        break
                    }
                    o = !o && "\\" == i
                }
                return (i == e || !o && ")" != e) && (n.tokenize = null), r("string", "string")
            }
        }

        function a(e, t) {
            return e.next(), t.tokenize = e.match(/\s*[\"\')]/, !1) ? null : o(")"), r(null, "(")
        }

        function s(e, t, n) {
            this.type = e, this.indent = t, this.prev = n
        }

        function l(e, t, n) {
            return e.context = new s(n, t.indentation() + m, e.context), n
        }

        function c(e) {
            return e.context = e.context.prev, e.context.type
        }

        function u(e, t, n) {
            return S[n.context.type](e, t, n)
        }

        function d(e, t, n, r) {
            for (var i = r || 1; i > 0; i--)n.context = n.context.prev;
            return u(e, t, n)
        }

        function f(e) {
            var t = e.current().toLowerCase();
            h = k.hasOwnProperty(t) ? "atom" : _.hasOwnProperty(t) ? "keyword" : "variable"
        }

        n.propertyKeywords || (n = e.resolveMode("text/css"));
        var p, h, m = t.indentUnit, g = n.tokenHooks, v = n.mediaTypes || {}, b = n.mediaFeatures || {}, y = n.propertyKeywords || {}, w = n.nonStandardPropertyKeywords || {}, _ = n.colorKeywords || {}, k = n.valueKeywords || {}, x = n.fontProperties || {}, C = n.allowNested, S = {};
        return S.top = function (e, t, n) {
            if ("{" == e)return l(n, t, "block");
            if ("}" == e && n.context.prev)return c(n);
            if ("@media" == e)return l(n, t, "media");
            if ("@font-face" == e)return "font_face_before";
            if (/^@(-(moz|ms|o|webkit)-)?keyframes$/.test(e))return "keyframes";
            if (e && "@" == e.charAt(0))return l(n, t, "at");
            if ("hash" == e)h = "builtin"; else if ("word" == e)h = "tag"; else {
                if ("variable-definition" == e)return "maybeprop";
                if ("interpolation" == e)return l(n, t, "interpolation");
                if (":" == e)return "pseudo";
                if (C && "(" == e)return l(n, t, "parens")
            }
            return n.context.type
        }, S.block = function (e, t, n) {
            if ("word" == e) {
                var r = t.current().toLowerCase();
                return y.hasOwnProperty(r) ? (h = "property", "maybeprop") : w.hasOwnProperty(r) ? (h = "string-2", "maybeprop") : C ? (h = t.match(/^\s*:/, !1) ? "property" : "tag", "block") : (h += " error", "maybeprop")
            }
            return "meta" == e ? "block" : C || "hash" != e && "qualifier" != e ? S.top(e, t, n) : (h = "error", "block")
        }, S.maybeprop = function (e, t, n) {
            return ":" == e ? l(n, t, "prop") : u(e, t, n)
        }, S.prop = function (e, t, n) {
            if (";" == e)return c(n);
            if ("{" == e && C)return l(n, t, "propBlock");
            if ("}" == e || "{" == e)return d(e, t, n);
            if ("(" == e)return l(n, t, "parens");
            if ("hash" != e || /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(t.current())) {
                if ("word" == e)f(t); else if ("interpolation" == e)return l(n, t, "interpolation")
            } else h += " error";
            return "prop"
        }, S.propBlock = function (e, t, n) {
            return "}" == e ? c(n) : "word" == e ? (h = "property", "maybeprop") : n.context.type
        }, S.parens = function (e, t, n) {
            return "{" == e || "}" == e ? d(e, t, n) : ")" == e ? c(n) : "(" == e ? l(n, t, "parens") : ("word" == e && f(t), "parens")
        }, S.pseudo = function (e, t, n) {
            return "word" == e ? (h = "variable-3", n.context.type) : u(e, t, n)
        }, S.media = function (e, t, n) {
            if ("(" == e)return l(n, t, "media_parens");
            if ("}" == e)return d(e, t, n);
            if ("{" == e)return c(n) && l(n, t, C ? "block" : "top");
            if ("word" == e) {
                var r = t.current().toLowerCase();
                h = "only" == r || "not" == r || "and" == r ? "keyword" : v.hasOwnProperty(r) ? "attribute" : b.hasOwnProperty(r) ? "property" : "error"
            }
            return n.context.type
        }, S.media_parens = function (e, t, n) {
            return ")" == e ? c(n) : "{" == e || "}" == e ? d(e, t, n, 2) : S.media(e, t, n)
        }, S.font_face_before = function (e, t, n) {
            return "{" == e ? l(n, t, "font_face") : u(e, t, n)
        }, S.font_face = function (e, t, n) {
            return "}" == e ? c(n) : "word" == e ? (h = x.hasOwnProperty(t.current().toLowerCase()) ? "property" : "error", "maybeprop") : "font_face"
        }, S.keyframes = function (e, t, n) {
            return "word" == e ? (h = "variable", "keyframes") : "{" == e ? l(n, t, "top") : u(e, t, n)
        }, S.at = function (e, t, n) {
            return ";" == e ? c(n) : "{" == e || "}" == e ? d(e, t, n) : ("word" == e ? h = "tag" : "hash" == e && (h = "builtin"), "at")
        }, S.interpolation = function (e, t, n) {
            return "}" == e ? c(n) : "{" == e || ";" == e ? d(e, t, n) : ("variable" != e && (h = "error"), "interpolation")
        }, {
            startState: function (e) {
                return {tokenize: null, state: "top", context: new s("top", e || 0, null)}
            }, token: function (e, t) {
                if (!t.tokenize && e.eatSpace())return null;
                var n = (t.tokenize || i)(e, t);
                return n && "object" == typeof n && (p = n[1], n = n[0]), h = n, t.state = S[t.state](p, e, t), h
            }, indent: function (e, t) {
                var n = e.context, r = t && t.charAt(0), i = n.indent;
                return "prop" != n.type || "}" != r && ")" != r || (n = n.prev), !n.prev || ("}" != r || "block" != n.type && "top" != n.type && "interpolation" != n.type && "font_face" != n.type) && (")" != r || "parens" != n.type && "media_parens" != n.type) && ("{" != r || "at" != n.type && "media" != n.type) || (i = n.indent - m, n = n.prev), i
            }, electricChars: "}", blockCommentStart: "/*", blockCommentEnd: "*/", fold: "brace"
        }
    });
    var i = ["all", "aural", "braille", "handheld", "print", "projection", "screen", "tty", "tv", "embossed"], o = t(i), a = ["width", "min-width", "max-width", "height", "min-height", "max-height", "device-width", "min-device-width", "max-device-width", "device-height", "min-device-height", "max-device-height", "aspect-ratio", "min-aspect-ratio", "max-aspect-ratio", "device-aspect-ratio", "min-device-aspect-ratio", "max-device-aspect-ratio", "color", "min-color", "max-color", "color-index", "min-color-index", "max-color-index", "monochrome", "min-monochrome", "max-monochrome", "resolution", "min-resolution", "max-resolution", "scan", "grid"], s = t(a), l = ["align-content", "align-items", "align-self", "alignment-adjust", "alignment-baseline", "anchor-point", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "appearance", "azimuth", "backface-visibility", "background", "background-attachment", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "baseline-shift", "binding", "bleed", "bookmark-label", "bookmark-level", "bookmark-state", "bookmark-target", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "clear", "clip", "color", "color-profile", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "content", "counter-increment", "counter-reset", "crop", "cue", "cue-after", "cue-before", "cursor", "direction", "display", "dominant-baseline", "drop-initial-after-adjust", "drop-initial-after-align", "drop-initial-before-adjust", "drop-initial-before-align", "drop-initial-size", "drop-initial-value", "elevation", "empty-cells", "fit", "fit-position", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "float-offset", "flow-from", "flow-into", "font", "font-feature-settings", "font-family", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-alternates", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-weight", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-position", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-start", "grid-row", "grid-row-end", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "hanging-punctuation", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "inline-box-align", "justify-content", "left", "letter-spacing", "line-break", "line-height", "line-stacking", "line-stacking-ruby", "line-stacking-shift", "line-stacking-strategy", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marker-offset", "marks", "marquee-direction", "marquee-loop", "marquee-play-count", "marquee-speed", "marquee-style", "max-height", "max-width", "min-height", "min-width", "move-to", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-style", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page", "page-break-after", "page-break-before", "page-break-inside", "page-policy", "pause", "pause-after", "pause-before", "perspective", "perspective-origin", "pitch", "pitch-range", "play-during", "position", "presentation-level", "punctuation-trim", "quotes", "region-break-after", "region-break-before", "region-break-inside", "region-fragment", "rendering-intent", "resize", "rest", "rest-after", "rest-before", "richness", "right", "rotation", "rotation-point", "ruby-align", "ruby-overhang", "ruby-position", "ruby-span", "shape-image-threshold", "shape-inside", "shape-margin", "shape-outside", "size", "speak", "speak-as", "speak-header", "speak-numeral", "speak-punctuation", "speech-rate", "stress", "string-set", "tab-size", "table-layout", "target", "target-name", "target-new", "target-position", "text-align", "text-align-last", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-skip", "text-decoration-style", "text-emphasis", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-height", "text-indent", "text-justify", "text-outline", "text-overflow", "text-shadow", "text-size-adjust", "text-space-collapse", "text-transform", "text-underline-position", "text-wrap", "top", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "voice-balance", "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress", "voice-volume", "volume", "white-space", "widows", "width", "word-break", "word-spacing", "word-wrap", "z-index", "clip-path", "clip-rule", "mask", "enable-background", "filter", "flood-color", "flood-opacity", "lighting-color", "stop-color", "stop-opacity", "pointer-events", "color-interpolation", "color-interpolation-filters", "color-rendering", "fill", "fill-opacity", "fill-rule", "image-rendering", "marker", "marker-end", "marker-mid", "marker-start", "shape-rendering", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-rendering", "baseline-shift", "dominant-baseline", "glyph-orientation-horizontal", "glyph-orientation-vertical", "text-anchor", "writing-mode"], c = t(l), u = ["scrollbar-arrow-color", "scrollbar-base-color", "scrollbar-dark-shadow-color", "scrollbar-face-color", "scrollbar-highlight-color", "scrollbar-shadow-color", "scrollbar-3d-light-color", "scrollbar-track-color", "shape-inside", "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button", "searchfield-results-decoration", "zoom"], u = t(u), d = ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"], f = t(d), p = ["above", "absolute", "activeborder", "activecaption", "afar", "after-white-space", "ahead", "alias", "all", "all-scroll", "alternate", "always", "amharic", "amharic-abegede", "antialiased", "appworkspace", "arabic-indic", "armenian", "asterisks", "auto", "avoid", "avoid-column", "avoid-page", "avoid-region", "background", "backwards", "baseline", "below", "bidi-override", "binary", "bengali", "blink", "block", "block-axis", "bold", "bolder", "border", "border-box", "both", "bottom", "break", "break-all", "break-word", "button", "button-bevel", "buttonface", "buttonhighlight", "buttonshadow", "buttontext", "cambodian", "capitalize", "caps-lock-indicator", "caption", "captiontext", "caret", "cell", "center", "checkbox", "circle", "cjk-earthly-branch", "cjk-heavenly-stem", "cjk-ideographic", "clear", "clip", "close-quote", "col-resize", "collapse", "column", "compact", "condensed", "contain", "content", "content-box", "context-menu", "continuous", "copy", "cover", "crop", "cross", "crosshair", "currentcolor", "cursive", "dashed", "decimal", "decimal-leading-zero", "default", "default-button", "destination-atop", "destination-in", "destination-out", "destination-over", "devanagari", "disc", "discard", "document", "dot-dash", "dot-dot-dash", "dotted", "double", "down", "e-resize", "ease", "ease-in", "ease-in-out", "ease-out", "element", "ellipse", "ellipsis", "embed", "end", "ethiopic", "ethiopic-abegede", "ethiopic-abegede-am-et", "ethiopic-abegede-gez", "ethiopic-abegede-ti-er", "ethiopic-abegede-ti-et", "ethiopic-halehame-aa-er", "ethiopic-halehame-aa-et", "ethiopic-halehame-am-et", "ethiopic-halehame-gez", "ethiopic-halehame-om-et", "ethiopic-halehame-sid-et", "ethiopic-halehame-so-et", "ethiopic-halehame-ti-er", "ethiopic-halehame-ti-et", "ethiopic-halehame-tig", "ew-resize", "expanded", "extra-condensed", "extra-expanded", "fantasy", "fast", "fill", "fixed", "flat", "footnotes", "forwards", "from", "geometricPrecision", "georgian", "graytext", "groove", "gujarati", "gurmukhi", "hand", "hangul", "hangul-consonant", "hebrew", "help", "hidden", "hide", "higher", "highlight", "highlighttext", "hiragana", "hiragana-iroha", "horizontal", "hsl", "hsla", "icon", "ignore", "inactiveborder", "inactivecaption", "inactivecaptiontext", "infinite", "infobackground", "infotext", "inherit", "initial", "inline", "inline-axis", "inline-block", "inline-table", "inset", "inside", "intrinsic", "invert", "italic", "justify", "kannada", "katakana", "katakana-iroha", "keep-all", "khmer", "landscape", "lao", "large", "larger", "left", "level", "lighter", "line-through", "linear", "lines", "list-item", "listbox", "listitem", "local", "logical", "loud", "lower", "lower-alpha", "lower-armenian", "lower-greek", "lower-hexadecimal", "lower-latin", "lower-norwegian", "lower-roman", "lowercase", "ltr", "malayalam", "match", "media-controls-background", "media-current-time-display", "media-fullscreen-button", "media-mute-button", "media-play-button", "media-return-to-realtime-button", "media-rewind-button", "media-seek-back-button", "media-seek-forward-button", "media-slider", "media-sliderthumb", "media-time-remaining-display", "media-volume-slider", "media-volume-slider-container", "media-volume-sliderthumb", "medium", "menu", "menulist", "menulist-button", "menulist-text", "menulist-textfield", "menutext", "message-box", "middle", "min-intrinsic", "mix", "mongolian", "monospace", "move", "multiple", "myanmar", "n-resize", "narrower", "ne-resize", "nesw-resize", "no-close-quote", "no-drop", "no-open-quote", "no-repeat", "none", "normal", "not-allowed", "nowrap", "ns-resize", "nw-resize", "nwse-resize", "oblique", "octal", "open-quote", "optimizeLegibility", "optimizeSpeed", "oriya", "oromo", "outset", "outside", "outside-shape", "overlay", "overline", "padding", "padding-box", "painted", "page", "paused", "persian", "plus-darker", "plus-lighter", "pointer", "polygon", "portrait", "pre", "pre-line", "pre-wrap", "preserve-3d", "progress", "push-button", "radio", "read-only", "read-write", "read-write-plaintext-only", "rectangle", "region", "relative", "repeat", "repeat-x", "repeat-y", "reset", "reverse", "rgb", "rgba", "ridge", "right", "round", "row-resize", "rtl", "run-in", "running", "s-resize", "sans-serif", "scroll", "scrollbar", "se-resize", "searchfield", "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button", "searchfield-results-decoration", "semi-condensed", "semi-expanded", "separate", "serif", "show", "sidama", "single", "skip-white-space", "slide", "slider-horizontal", "slider-vertical", "sliderthumb-horizontal", "sliderthumb-vertical", "slow", "small", "small-caps", "small-caption", "smaller", "solid", "somali", "source-atop", "source-in", "source-out", "source-over", "space", "square", "square-button", "start", "static", "status-bar", "stretch", "stroke", "sub", "subpixel-antialiased", "super", "sw-resize", "table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row", "table-row-group", "telugu", "text", "text-bottom", "text-top", "textarea", "textfield", "thai", "thick", "thin", "threeddarkshadow", "threedface", "threedhighlight", "threedlightshadow", "threedshadow", "tibetan", "tigre", "tigrinya-er", "tigrinya-er-abegede", "tigrinya-et", "tigrinya-et-abegede", "to", "top", "transparent", "ultra-condensed", "ultra-expanded", "underline", "up", "upper-alpha", "upper-armenian", "upper-greek", "upper-hexadecimal", "upper-latin", "upper-norwegian", "upper-roman", "uppercase", "urdu", "url", "vertical", "vertical-text", "visible", "visibleFill", "visiblePainted", "visibleStroke", "visual", "w-resize", "wait", "wave", "wider", "window", "windowframe", "windowtext", "x-large", "x-small", "xor", "xx-large", "xx-small"], h = t(p), m = ["font-family", "src", "unicode-range", "font-variant", "font-feature-settings", "font-stretch", "font-weight", "font-style"], g = t(m), v = i.concat(a).concat(l).concat(u).concat(d).concat(p);
    e.registerHelper("hintWords", "css", v), e.defineMIME("text/css", {
        mediaTypes: o,
        mediaFeatures: s,
        propertyKeywords: c,
        nonStandardPropertyKeywords: u,
        colorKeywords: f,
        valueKeywords: h,
        fontProperties: g,
        tokenHooks: {
            "<": function (e, t) {
                return e.match("!--") ? (t.tokenize = r, r(e, t)) : !1
            }, "/": function (e, t) {
                return e.eat("*") ? (t.tokenize = n, n(e, t)) : !1
            }
        },
        name: "css"
    }), e.defineMIME("text/x-scss", {
        mediaTypes: o,
        mediaFeatures: s,
        propertyKeywords: c,
        nonStandardPropertyKeywords: u,
        colorKeywords: f,
        valueKeywords: h,
        fontProperties: g,
        allowNested: !0,
        tokenHooks: {
            "/": function (e, t) {
                return e.eat("/") ? (e.skipToEnd(), ["comment", "comment"]) : e.eat("*") ? (t.tokenize = n, n(e, t)) : ["operator", "operator"]
            }, ":": function (e) {
                return e.match(/\s*\{/) ? [null, "{"] : !1
            }, $: function (e) {
                return e.match(/^[\w-]+/), e.match(/^\s*:/, !1) ? ["variable-2", "variable-definition"] : ["variable-2", "variable"]
            }, "#": function (e) {
                return e.eat("{") ? [null, "interpolation"] : !1
            }
        },
        name: "css",
        helperType: "scss"
    }), e.defineMIME("text/x-less", {
        mediaTypes: o,
        mediaFeatures: s,
        propertyKeywords: c,
        nonStandardPropertyKeywords: u,
        colorKeywords: f,
        valueKeywords: h,
        fontProperties: g,
        allowNested: !0,
        tokenHooks: {
            "/": function (e, t) {
                return e.eat("/") ? (e.skipToEnd(), ["comment", "comment"]) : e.eat("*") ? (t.tokenize = n, n(e, t)) : ["operator", "operator"]
            }, "@": function (e) {
                return e.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/, !1) ? !1 : (e.eatWhile(/[\w\\\-]/), e.match(/^\s*:/, !1) ? ["variable-2", "variable-definition"] : ["variable-2", "variable"])
            }, "&": function () {
                return ["atom", "atom"]
            }
        },
        name: "css",
        helperType: "less"
    })
}), function (e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror"), require("../xml/xml"), require("../javascript/javascript"), require("../css/css")) : "function" == typeof define && define.amd ? define("codemirror/mode/htmlmixed/htmlmixed", ["../../lib/codemirror", "../xml/xml", "../javascript/javascript", "../css/css"], e) : e(CodeMirror)
}(function (e) {
    "use strict";
    e.defineMode("htmlmixed", function (t, n) {
        function r(e, t) {
            var n = t.htmlState.tagName, r = s.token(e, t.htmlState);
            if ("script" == n && /\btag\b/.test(r) && ">" == e.current()) {
                var i = e.string.slice(Math.max(0, e.pos - 100), e.pos).match(/\btype\s*=\s*("[^"]+"|'[^']+'|\S+)[^<]*$/i);
                i = i ? i[1] : "", i && /[\"\']/.test(i.charAt(0)) && (i = i.slice(1, i.length - 1));
                for (var u = 0; u < c.length; ++u) {
                    var d = c[u];
                    if ("string" == typeof d.matches ? i == d.matches : d.matches.test(i)) {
                        d.mode && (t.token = o, t.localMode = d.mode, t.localState = d.mode.startState && d.mode.startState(s.indent(t.htmlState, "")));
                        break
                    }
                }
            } else"style" == n && /\btag\b/.test(r) && ">" == e.current() && (t.token = a, t.localMode = l, t.localState = l.startState(s.indent(t.htmlState, "")));
            return r
        }

        function i(e, t, n) {
            var r, i = e.current(), o = i.search(t);
            return o > -1 ? e.backUp(i.length - o) : (r = i.match(/<\/?$/)) && (e.backUp(i.length), e.match(t, !1) || e.match(i)), n
        }

        function o(e, t) {
            return e.match(/^<\/\s*script\s*>/i, !1) ? (t.token = r, t.localState = t.localMode = null, r(e, t)) : i(e, /<\/\s*script\s*>/, t.localMode.token(e, t.localState))
        }

        function a(e, t) {
            return e.match(/^<\/\s*style\s*>/i, !1) ? (t.token = r, t.localState = t.localMode = null, r(e, t)) : i(e, /<\/\s*style\s*>/, l.token(e, t.localState))
        }

        var s = e.getMode(t, {
            name: "xml",
            htmlMode: !0,
            multilineTagIndentFactor: n.multilineTagIndentFactor,
            multilineTagIndentPastTag: n.multilineTagIndentPastTag
        }), l = e.getMode(t, "css"), c = [], u = n && n.scriptTypes;
        if (c.push({
                matches: /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^$/i,
                mode: e.getMode(t, "javascript")
            }), u)for (var d = 0; d < u.length; ++d) {
            var f = u[d];
            c.push({matches: f.matches, mode: f.mode && e.getMode(t, f.mode)})
        }
        return c.push({matches: /./, mode: e.getMode(t, "text/plain")}), {
            startState: function () {
                var e = s.startState();
                return {token: r, localMode: null, localState: null, htmlState: e}
            }, copyState: function (t) {
                if (t.localState)var n = e.copyState(t.localMode, t.localState);
                return {token: t.token, localMode: t.localMode, localState: n, htmlState: e.copyState(s, t.htmlState)}
            }, token: function (e, t) {
                return t.token(e, t)
            }, indent: function (t, n) {
                return !t.localMode || /^\s*<\//.test(n) ? s.indent(t.htmlState, n) : t.localMode.indent ? t.localMode.indent(t.localState, n) : e.Pass
            }, innerMode: function (e) {
                return {state: e.localState || e.htmlState, mode: e.localMode || s}
            }
        }
    }, "xml", "javascript", "css"), e.defineMIME("text/html", "htmlmixed")
}), function (e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define("codemirror/mode/clike/clike", ["../../lib/codemirror"], e) : e(CodeMirror)
}(function (e) {
    "use strict";
    function t(e) {
        for (var t = {}, n = e.split(" "), r = 0; r < n.length; ++r)t[n[r]] = !0;
        return t
    }

    function n(e, t) {
        if (!t.startOfLine)return !1;
        for (; ;) {
            if (!e.skipTo("\\")) {
                e.skipToEnd(), t.tokenize = null;
                break
            }
            if (e.next(), e.eol()) {
                t.tokenize = n;
                break
            }
        }
        return "meta"
    }

    function r(e, t) {
        if (e.backUp(1), e.match(/(R|u8R|uR|UR|LR)/)) {
            var n = e.match(/"([^\s\\()]{0,16})\(/);
            return n ? (t.cpp11RawStringDelim = n[1], t.tokenize = o, o(e, t)) : !1
        }
        return e.match(/(u8|u|U|L)/) ? e.match(/["']/, !1) ? "string" : !1 : (e.next(), !1)
    }

    function i(e, t) {
        for (var n; null != (n = e.next());)if ('"' == n && !e.eat('"')) {
            t.tokenize = null;
            break
        }
        return "string"
    }

    function o(e, t) {
        var n = t.cpp11RawStringDelim.replace(/[^\w\s]/g, "\\$&"), r = e.match(new RegExp(".*?\\)" + n + '"'));
        return r ? t.tokenize = null : e.skipToEnd(), "string"
    }

    function a(t, n) {
        function r(e) {
            if (e)for (var t in e)e.hasOwnProperty(t) && i.push(t)
        }

        "string" == typeof t && (t = [t]);
        var i = [];
        r(n.keywords), r(n.builtin), r(n.atoms), i.length && (n.helperType = t[0], e.registerHelper("hintWords", t[0], i));
        for (var o = 0; o < t.length; ++o)e.defineMIME(t[o], n)
    }

    e.defineMode("clike", function (t, n) {
        function r(e, t) {
            var n = e.next();
            if (v[n]) {
                var r = v[n](e, t);
                if (r !== !1)return r
            }
            if ('"' == n || "'" == n)return t.tokenize = i(n), t.tokenize(e, t);
            if (/[\[\]{}\(\),;\:\.]/.test(n))return c = n, null;
            if (/\d/.test(n))return e.eatWhile(/[\w\.]/), "number";
            if ("/" == n) {
                if (e.eat("*"))return t.tokenize = o, o(e, t);
                if (e.eat("/"))return e.skipToEnd(), "comment"
            }
            if (y.test(n))return e.eatWhile(y), "operator";
            e.eatWhile(/[\w\$_]/);
            var a = e.current();
            return p.propertyIsEnumerable(a) ? (m.propertyIsEnumerable(a) && (c = "newstatement"), "keyword") : h.propertyIsEnumerable(a) ? (m.propertyIsEnumerable(a) && (c = "newstatement"), "builtin") : g.propertyIsEnumerable(a) ? "atom" : "variable"
        }

        function i(e) {
            return function (t, n) {
                for (var r, i = !1, o = !1; null != (r = t.next());) {
                    if (r == e && !i) {
                        o = !0;
                        break
                    }
                    i = !i && "\\" == r
                }
                return (o || !i && !b) && (n.tokenize = null), "string"
            }
        }

        function o(e, t) {
            for (var n, r = !1; n = e.next();) {
                if ("/" == n && r) {
                    t.tokenize = null;
                    break
                }
                r = "*" == n
            }
            return "comment"
        }

        function a(e, t, n, r, i) {
            this.indented = e, this.column = t, this.type = n, this.align = r, this.prev = i
        }

        function s(e, t, n) {
            var r = e.indented;
            return e.context && "statement" == e.context.type && (r = e.context.indented), e.context = new a(r, t, n, null, e.context)
        }

        function l(e) {
            var t = e.context.type;
            return (")" == t || "]" == t || "}" == t) && (e.indented = e.context.indented), e.context = e.context.prev
        }

        var c, u = t.indentUnit, d = n.statementIndentUnit || u, f = n.dontAlignCalls, p = n.keywords || {}, h = n.builtin || {}, m = n.blockKeywords || {}, g = n.atoms || {}, v = n.hooks || {}, b = n.multiLineStrings, y = /[+\-*&%=<>!?|\/]/;
        return {
            startState: function (e) {
                return {tokenize: null, context: new a((e || 0) - u, 0, "top", !1), indented: 0, startOfLine: !0}
            }, token: function (e, t) {
                var n = t.context;
                if (e.sol() && (null == n.align && (n.align = !1), t.indented = e.indentation(), t.startOfLine = !0), e.eatSpace())return null;
                c = null;
                var i = (t.tokenize || r)(e, t);
                if ("comment" == i || "meta" == i)return i;
                if (null == n.align && (n.align = !0), ";" != c && ":" != c && "," != c || "statement" != n.type)if ("{" == c)s(t, e.column(), "}"); else if ("[" == c)s(t, e.column(), "]"); else if ("(" == c)s(t, e.column(), ")"); else if ("}" == c) {
                    for (; "statement" == n.type;)n = l(t);
                    for ("}" == n.type && (n = l(t)); "statement" == n.type;)n = l(t)
                } else c == n.type ? l(t) : (("}" == n.type || "top" == n.type) && ";" != c || "statement" == n.type && "newstatement" == c) && s(t, e.column(), "statement"); else l(t);
                return t.startOfLine = !1, i
            }, indent: function (t, n) {
                if (t.tokenize != r && null != t.tokenize)return e.Pass;
                var i = t.context, o = n && n.charAt(0);
                "statement" == i.type && "}" == o && (i = i.prev);
                var a = o == i.type;
                return "statement" == i.type ? i.indented + ("{" == o ? 0 : d) : !i.align || f && ")" == i.type ? ")" != i.type || a ? i.indented + (a ? 0 : u) : i.indented + d : i.column + (a ? 0 : 1)
            }, electricChars: "{}", blockCommentStart: "/*", blockCommentEnd: "*/", lineComment: "//", fold: "brace"
        }
    });
    var s = "auto if break int case long char register continue return default short do sizeof double static else struct entry switch extern typedef float union for unsigned goto while enum void const signed volatile";
    a(["text/x-csrc", "text/x-c", "text/x-chdr"], {
        name: "clike",
        keywords: t(s),
        blockKeywords: t("case do else for if switch while struct"),
        atoms: t("null"),
        hooks: {"#": n},
        modeProps: {fold: ["brace", "include"]}
    }), a(["text/x-c++src", "text/x-c++hdr"], {
        name: "clike",
        keywords: t(s + " asm dynamic_cast namespace reinterpret_cast try bool explicit new static_cast typeid catch operator template typename class friend private this using const_cast inline public throw virtual delete mutable protected wchar_t alignas alignof constexpr decltype nullptr noexcept thread_local final static_assert override"),
        blockKeywords: t("catch class do else finally for if struct switch try while"),
        atoms: t("true false null"),
        hooks: {"#": n, u: r, U: r, L: r, R: r},
        modeProps: {fold: ["brace", "include"]}
    }), a("text/x-java", {
        name: "clike",
        keywords: t("abstract assert boolean break byte case catch char class const continue default do double else enum extends final finally float for goto if implements import instanceof int interface long native new package private protected public return short static strictfp super switch synchronized this throw throws transient try void volatile while"),
        blockKeywords: t("catch class do else finally for if switch try while"),
        atoms: t("true false null"),
        hooks: {
            "@": function (e) {
                return e.eatWhile(/[\w\$_]/), "meta"
            }
        },
        modeProps: {fold: ["brace", "import"]}
    }), a("text/x-csharp", {
        name: "clike",
        keywords: t("abstract as base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in interface internal is lock namespace new operator out override params private protected public readonly ref return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield"),
        blockKeywords: t("catch class do else finally for foreach if struct switch try while"),
        builtin: t("Boolean Byte Char DateTime DateTimeOffset Decimal Double Guid Int16 Int32 Int64 Object SByte Single String TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong"),
        atoms: t("true false null"),
        hooks: {
            "@": function (e, t) {
                return e.eat('"') ? (t.tokenize = i, i(e, t)) : (e.eatWhile(/[\w\$_]/), "meta")
            }
        }
    }), a("text/x-scala", {
        name: "clike",
        keywords: t("abstract case catch class def do else extends false final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try trye type val var while with yield _ : = => <- <: <% >: # @ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector :: #:: Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"),
        blockKeywords: t("catch class do else finally for forSome if match switch try while"),
        atoms: t("true false null"),
        hooks: {
            "@": function (e) {
                return e.eatWhile(/[\w\$_]/), "meta"
            }
        }
    }), a(["x-shader/x-vertex", "x-shader/x-fragment"], {
        name: "clike",
        keywords: t("float int bool void vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 mat2 mat3 mat4 sampler1D sampler2D sampler3D samplerCube sampler1DShadow sampler2DShadowconst attribute uniform varying break continue discard return for while do if else struct in out inout"),
        blockKeywords: t("for while do if else struct"),
        builtin: t("radians degrees sin cos tan asin acos atan pow exp log exp2 sqrt inversesqrt abs sign floor ceil fract mod min max clamp mix step smootstep length distance dot cross normalize ftransform faceforward reflect refract matrixCompMult lessThan lessThanEqual greaterThan greaterThanEqual equal notEqual any all not texture1D texture1DProj texture1DLod texture1DProjLod texture2D texture2DProj texture2DLod texture2DProjLod texture3D texture3DProj texture3DLod texture3DProjLod textureCube textureCubeLod shadow1D shadow2D shadow1DProj shadow2DProj shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod dFdx dFdy fwidth noise1 noise2 noise3 noise4"),
        atoms: t("true false gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_FogCoord gl_Position gl_PointSize gl_ClipVertex gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor gl_TexCoord gl_FogFragCoord gl_FragCoord gl_FrontFacing gl_FragColor gl_FragData gl_FragDepth gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse gl_TexureMatrixTranspose gl_ModelViewMatrixInverseTranspose gl_ProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixInverseTranspose gl_TextureMatrixInverseTranspose gl_NormalScale gl_DepthRange gl_ClipPlane gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel gl_FrontLightModelProduct gl_BackLightModelProduct gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ gl_FogParameters gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits gl_MaxDrawBuffers"),
        hooks: {"#": n},
        modeProps: {fold: ["brace", "include"]}
    })
}), function (e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror"), require("../htmlmixed/htmlmixed"), require("../clike/clike")) : "function" == typeof define && define.amd ? define("codemirror/mode/php/php", ["../../lib/codemirror", "../htmlmixed/htmlmixed", "../clike/clike"], e) : e(CodeMirror)
}(function (e) {
    "use strict";
    function t(e) {
        for (var t = {}, n = e.split(" "), r = 0; r < n.length; ++r)t[n[r]] = !0;
        return t
    }

    function n(e) {
        return function (t, n) {
            return t.match(e) ? n.tokenize = null : t.skipToEnd(), "string"
        }
    }

    function r(e) {
        return 0 == e.length ? i : function (t, n) {
            for (var o = e[0], a = 0; a < o.length; a++)if (t.match(o[a][0]))return n.tokenize = r(e.slice(1)), o[a][1];
            return n.tokenize = i, "string"
        }
    }

    function i(e, t) {
        var n, i = !1, o = !1;
        if ('"' == e.current())return "string";
        if (e.match("${", !1) || e.match("{$", !1))return t.tokenize = null, "string";
        if (e.match(/\$[a-zA-Z_][a-zA-Z0-9_]*/))return e.match("[", !1) && (t.tokenize = r([[["[", null]], [[/\d[\w\.]*/, "number"], [/\$[a-zA-Z_][a-zA-Z0-9_]*/, "variable-2"], [/[\w\$]+/, "variable"]], [["]", null]]])), e.match(/\-\>\w/, !1) && (t.tokenize = r([[["->", null]], [[/[\w]+/, "variable"]]])), "variable-2";
        for (; !(e.eol() || e.match("{$", !1) || e.match(/(\$[a-zA-Z_][a-zA-Z0-9_]*|\$\{)/, !1) && !i);) {
            if (n = e.next(), !i && '"' == n) {
                o = !0;
                break
            }
            i = !i && "\\" == n
        }
        return o && (t.tokenize = null, t.phpEncapsStack.pop()), "string"
    }

    var o = "abstract and array as break case catch class clone const continue declare default do else elseif enddeclare endfor endforeach endif endswitch endwhile extends final for foreach function global goto if implements interface instanceof namespace new or private protected public static switch throw trait try use var while xor die echo empty exit eval include include_once isset list require require_once return print unset __halt_compiler self static parent yield insteadof finally", a = "true false null TRUE FALSE NULL __CLASS__ __DIR__ __FILE__ __LINE__ __METHOD__ __FUNCTION__ __NAMESPACE__ __TRAIT__", s = "func_num_args func_get_arg func_get_args strlen strcmp strncmp strcasecmp strncasecmp each error_reporting define defined trigger_error user_error set_error_handler restore_error_handler get_declared_classes get_loaded_extensions extension_loaded get_extension_funcs debug_backtrace constant bin2hex hex2bin sleep usleep time mktime gmmktime strftime gmstrftime strtotime date gmdate getdate localtime checkdate flush wordwrap htmlspecialchars htmlentities html_entity_decode md5 md5_file crc32 getimagesize image_type_to_mime_type phpinfo phpversion phpcredits strnatcmp strnatcasecmp substr_count strspn strcspn strtok strtoupper strtolower strpos strrpos strrev hebrev hebrevc nl2br basename dirname pathinfo stripslashes stripcslashes strstr stristr strrchr str_shuffle str_word_count strcoll substr substr_replace quotemeta ucfirst ucwords strtr addslashes addcslashes rtrim str_replace str_repeat count_chars chunk_split trim ltrim strip_tags similar_text explode implode setlocale localeconv parse_str str_pad chop strchr sprintf printf vprintf vsprintf sscanf fscanf parse_url urlencode urldecode rawurlencode rawurldecode readlink linkinfo link unlink exec system escapeshellcmd escapeshellarg passthru shell_exec proc_open proc_close rand srand getrandmax mt_rand mt_srand mt_getrandmax base64_decode base64_encode abs ceil floor round is_finite is_nan is_infinite bindec hexdec octdec decbin decoct dechex base_convert number_format fmod ip2long long2ip getenv putenv getopt microtime gettimeofday getrusage uniqid quoted_printable_decode set_time_limit get_cfg_var magic_quotes_runtime set_magic_quotes_runtime get_magic_quotes_gpc get_magic_quotes_runtime import_request_variables error_log serialize unserialize memory_get_usage var_dump var_export debug_zval_dump print_r highlight_file show_source highlight_string ini_get ini_get_all ini_set ini_alter ini_restore get_include_path set_include_path restore_include_path setcookie header headers_sent connection_aborted connection_status ignore_user_abort parse_ini_file is_uploaded_file move_uploaded_file intval floatval doubleval strval gettype settype is_null is_resource is_bool is_long is_float is_int is_integer is_double is_real is_numeric is_string is_array is_object is_scalar ereg ereg_replace eregi eregi_replace split spliti join sql_regcase dl pclose popen readfile rewind rmdir umask fclose feof fgetc fgets fgetss fread fopen fpassthru ftruncate fstat fseek ftell fflush fwrite fputs mkdir rename copy tempnam tmpfile file file_get_contents stream_select stream_context_create stream_context_set_params stream_context_set_option stream_context_get_options stream_filter_prepend stream_filter_append fgetcsv flock get_meta_tags stream_set_write_buffer set_file_buffer set_socket_blocking stream_set_blocking socket_set_blocking stream_get_meta_data stream_register_wrapper stream_wrapper_register stream_set_timeout socket_set_timeout socket_get_status realpath fnmatch fsockopen pfsockopen pack unpack get_browser crypt opendir closedir chdir getcwd rewinddir readdir dir glob fileatime filectime filegroup fileinode filemtime fileowner fileperms filesize filetype file_exists is_writable is_writeable is_readable is_executable is_file is_dir is_link stat lstat chown touch clearstatcache mail ob_start ob_flush ob_clean ob_end_flush ob_end_clean ob_get_flush ob_get_clean ob_get_length ob_get_level ob_get_status ob_get_contents ob_implicit_flush ob_list_handlers ksort krsort natsort natcasesort asort arsort sort rsort usort uasort uksort shuffle array_walk count end prev next reset current key min max in_array array_search extract compact array_fill range array_multisort array_push array_pop array_shift array_unshift array_splice array_slice array_merge array_merge_recursive array_keys array_values array_count_values array_reverse array_reduce array_pad array_flip array_change_key_case array_rand array_unique array_intersect array_intersect_assoc array_diff array_diff_assoc array_sum array_filter array_map array_chunk array_key_exists pos sizeof key_exists assert assert_options version_compare ftok str_rot13 aggregate session_name session_module_name session_save_path session_id session_regenerate_id session_decode session_register session_unregister session_is_registered session_encode session_start session_destroy session_unset session_set_save_handler session_cache_limiter session_cache_expire session_set_cookie_params session_get_cookie_params session_write_close preg_match preg_match_all preg_replace preg_replace_callback preg_split preg_quote preg_grep overload ctype_alnum ctype_alpha ctype_cntrl ctype_digit ctype_lower ctype_graph ctype_print ctype_punct ctype_space ctype_upper ctype_xdigit virtual apache_request_headers apache_note apache_lookup_uri apache_child_terminate apache_setenv apache_response_headers apache_get_version getallheaders mysql_connect mysql_pconnect mysql_close mysql_select_db mysql_create_db mysql_drop_db mysql_query mysql_unbuffered_query mysql_db_query mysql_list_dbs mysql_list_tables mysql_list_fields mysql_list_processes mysql_error mysql_errno mysql_affected_rows mysql_insert_id mysql_result mysql_num_rows mysql_num_fields mysql_fetch_row mysql_fetch_array mysql_fetch_assoc mysql_fetch_object mysql_data_seek mysql_fetch_lengths mysql_fetch_field mysql_field_seek mysql_free_result mysql_field_name mysql_field_table mysql_field_len mysql_field_type mysql_field_flags mysql_escape_string mysql_real_escape_string mysql_stat mysql_thread_id mysql_client_encoding mysql_get_client_info mysql_get_host_info mysql_get_proto_info mysql_get_server_info mysql_info mysql mysql_fieldname mysql_fieldtable mysql_fieldlen mysql_fieldtype mysql_fieldflags mysql_selectdb mysql_createdb mysql_dropdb mysql_freeresult mysql_numfields mysql_numrows mysql_listdbs mysql_listtables mysql_listfields mysql_db_name mysql_dbname mysql_tablename mysql_table_name pg_connect pg_pconnect pg_close pg_connection_status pg_connection_busy pg_connection_reset pg_host pg_dbname pg_port pg_tty pg_options pg_ping pg_query pg_send_query pg_cancel_query pg_fetch_result pg_fetch_row pg_fetch_assoc pg_fetch_array pg_fetch_object pg_fetch_all pg_affected_rows pg_get_result pg_result_seek pg_result_status pg_free_result pg_last_oid pg_num_rows pg_num_fields pg_field_name pg_field_num pg_field_size pg_field_type pg_field_prtlen pg_field_is_null pg_get_notify pg_get_pid pg_result_error pg_last_error pg_last_notice pg_put_line pg_end_copy pg_copy_to pg_copy_from pg_trace pg_untrace pg_lo_create pg_lo_unlink pg_lo_open pg_lo_close pg_lo_read pg_lo_write pg_lo_read_all pg_lo_import pg_lo_export pg_lo_seek pg_lo_tell pg_escape_string pg_escape_bytea pg_unescape_bytea pg_client_encoding pg_set_client_encoding pg_meta_data pg_convert pg_insert pg_update pg_delete pg_select pg_exec pg_getlastoid pg_cmdtuples pg_errormessage pg_numrows pg_numfields pg_fieldname pg_fieldsize pg_fieldtype pg_fieldnum pg_fieldprtlen pg_fieldisnull pg_freeresult pg_result pg_loreadall pg_locreate pg_lounlink pg_loopen pg_loclose pg_loread pg_lowrite pg_loimport pg_loexport http_response_code get_declared_traits getimagesizefromstring socket_import_stream stream_set_chunk_size trait_exists header_register_callback class_uses session_status session_register_shutdown echo print global static exit array empty eval isset unset die include require include_once require_once";
    e.registerHelper("hintWords", "php", [o, a, s].join(" ").split(" ")), e.registerHelper("wordChars", "php", /[\\w$]/);
    var l = {
        name: "clike",
        helperType: "php",
        keywords: t(o),
        blockKeywords: t("catch do else elseif for foreach if switch try while finally"),
        atoms: t(a),
        builtin: t(s),
        multiLineStrings: !0,
        hooks: {
            $: function (e) {
                return e.eatWhile(/[\w\$_]/), "variable-2"
            }, "<": function (e, t) {
                return e.match(/<</) ? (e.eatWhile(/[\w\.]/), t.tokenize = n(e.current().slice(3)), t.tokenize(e, t)) : !1
            }, "#": function (e) {
                for (; !e.eol() && !e.match("?>", !1);)e.next();
                return "comment"
            }, "/": function (e) {
                if (e.eat("/")) {
                    for (; !e.eol() && !e.match("?>", !1);)e.next();
                    return "comment"
                }
                return !1
            }, '"': function (e, t) {
                return t.phpEncapsStack || (t.phpEncapsStack = []), t.phpEncapsStack.push(0), t.tokenize = i, t.tokenize(e, t)
            }, "{": function (e, t) {
                return t.phpEncapsStack && t.phpEncapsStack.length > 0 && t.phpEncapsStack[t.phpEncapsStack.length - 1]++, !1
            }, "}": function (e, t) {
                return t.phpEncapsStack && t.phpEncapsStack.length > 0 && 0 == --t.phpEncapsStack[t.phpEncapsStack.length - 1] && (t.tokenize = i), !1
            }
        }
    };
    e.defineMode("php", function (t, n) {
        function r(e, t) {
            var n = t.curMode == o;
            if (e.sol() && t.pending && '"' != t.pending && "'" != t.pending && (t.pending = null), n)return n && null == t.php.tokenize && e.match("?>") ? (t.curMode = i, t.curState = t.html, "meta") : o.token(e, t.curState);
            if (e.match(/^<\?\w*/))return t.curMode = o, t.curState = t.php, "meta";
            if ('"' == t.pending || "'" == t.pending) {
                for (; !e.eol() && e.next() != t.pending;);
                var r = "string"
            } else if (t.pending && e.pos < t.pending.end) {
                e.pos = t.pending.end;
                var r = t.pending.style
            } else var r = i.token(e, t.curState);
            t.pending && (t.pending = null);
            var a, s = e.current(), l = s.search(/<\?/);
            return -1 != l && (t.pending = "string" == r && (a = s.match(/[\'\"]$/)) && !/\?>/.test(s) ? a[0] : {
                end: e.pos,
                style: r
            }, e.backUp(s.length - l)), r
        }

        var i = e.getMode(t, "text/html"), o = e.getMode(t, l);
        return {
            startState: function () {
                var t = e.startState(i), r = e.startState(o);
                return {html: t, php: r, curMode: n.startOpen ? o : i, curState: n.startOpen ? r : t, pending: null}
            }, copyState: function (t) {
                var n, r = t.html, a = e.copyState(i, r), s = t.php, l = e.copyState(o, s);
                return n = t.curMode == i ? a : l, {
                    html: a,
                    php: l,
                    curMode: t.curMode,
                    curState: n,
                    pending: t.pending
                }
            }, token: r, indent: function (e, t) {
                return e.curMode != o && /^\s*<\//.test(t) || e.curMode == o && /^\?>/.test(t) ? i.indent(e.html, t) : e.curMode.indent(e.curState, t)
            }, blockCommentStart: "/*", blockCommentEnd: "*/", lineComment: "//", innerMode: function (e) {
                return {state: e.curState, mode: e.curMode}
            }
        }
    }, "htmlmixed", "clike"), e.defineMIME("application/x-httpd-php", "php"), e.defineMIME("application/x-httpd-php-open", {
        name: "php",
        startOpen: !0
    }), e.defineMIME("text/x-php", l)
}), function (e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define("codemirror/mode/go/go", ["../../lib/codemirror"], e) : e(CodeMirror)
}(function (e) {
    "use strict";
    e.defineMode("go", function (e) {
        function t(e, t) {
            var i = e.next();
            if ('"' == i || "'" == i || "`" == i)return t.tokenize = n(i), t.tokenize(e, t);
            if (/[\d\.]/.test(i))return "." == i ? e.match(/^[0-9]+([eE][\-+]?[0-9]+)?/) : "0" == i ? e.match(/^[xX][0-9a-fA-F]+/) || e.match(/^0[0-7]+/) : e.match(/^[0-9]*\.?[0-9]*([eE][\-+]?[0-9]+)?/), "number";
            if (/[\[\]{}\(\),;\:\.]/.test(i))return s = i, null;
            if ("/" == i) {
                if (e.eat("*"))return t.tokenize = r, r(e, t);
                if (e.eat("/"))return e.skipToEnd(), "comment"
            }
            if (d.test(i))return e.eatWhile(d), "operator";
            e.eatWhile(/[\w\$_]/);
            var o = e.current();
            return c.propertyIsEnumerable(o) ? (("case" == o || "default" == o) && (s = "case"), "keyword") : u.propertyIsEnumerable(o) ? "atom" : "variable"
        }

        function n(e) {
            return function (n, r) {
                for (var i, o = !1, a = !1; null != (i = n.next());) {
                    if (i == e && !o) {
                        a = !0;
                        break
                    }
                    o = !o && "\\" == i
                }
                return (a || !o && "`" != e) && (r.tokenize = t), "string"
            }
        }

        function r(e, n) {
            for (var r, i = !1; r = e.next();) {
                if ("/" == r && i) {
                    n.tokenize = t;
                    break
                }
                i = "*" == r
            }
            return "comment"
        }

        function i(e, t, n, r, i) {
            this.indented = e, this.column = t, this.type = n, this.align = r, this.prev = i
        }

        function o(e, t, n) {
            return e.context = new i(e.indented, t, n, null, e.context)
        }

        function a(e) {
            var t = e.context.type;
            return (")" == t || "]" == t || "}" == t) && (e.indented = e.context.indented), e.context = e.context.prev
        }

        var s, l = e.indentUnit, c = {
            "break": !0,
            "case": !0,
            chan: !0,
            "const": !0,
            "continue": !0,
            "default": !0,
            defer: !0,
            "else": !0,
            fallthrough: !0,
            "for": !0,
            func: !0,
            go: !0,
            "goto": !0,
            "if": !0,
            "import": !0,
            "interface": !0,
            map: !0,
            "package": !0,
            range: !0,
            "return": !0,
            select: !0,
            struct: !0,
            "switch": !0,
            type: !0,
            "var": !0,
            bool: !0,
            "byte": !0,
            complex64: !0,
            complex128: !0,
            float32: !0,
            float64: !0,
            int8: !0,
            int16: !0,
            int32: !0,
            int64: !0,
            string: !0,
            uint8: !0,
            uint16: !0,
            uint32: !0,
            uint64: !0,
            "int": !0,
            uint: !0,
            uintptr: !0
        }, u = {
            "true": !0,
            "false": !0,
            iota: !0,
            nil: !0,
            append: !0,
            cap: !0,
            close: !0,
            complex: !0,
            copy: !0,
            imag: !0,
            len: !0,
            make: !0,
            "new": !0,
            panic: !0,
            print: !0,
            println: !0,
            real: !0,
            recover: !0
        }, d = /[+\-*&^%:=<>!|\/]/;
        return {
            startState: function (e) {
                return {tokenize: null, context: new i((e || 0) - l, 0, "top", !1), indented: 0, startOfLine: !0}
            }, token: function (e, n) {
                var r = n.context;
                if (e.sol() && (null == r.align && (r.align = !1), n.indented = e.indentation(), n.startOfLine = !0, "case" == r.type && (r.type = "}")), e.eatSpace())return null;
                s = null;
                var i = (n.tokenize || t)(e, n);
                return "comment" == i ? i : (null == r.align && (r.align = !0), "{" == s ? o(n, e.column(), "}") : "[" == s ? o(n, e.column(), "]") : "(" == s ? o(n, e.column(), ")") : "case" == s ? r.type = "case" : "}" == s && "}" == r.type ? r = a(n) : s == r.type && a(n), n.startOfLine = !1, i)
            }, indent: function (e, n) {
                if (e.tokenize != t && null != e.tokenize)return 0;
                var r = e.context, i = n && n.charAt(0);
                if ("case" == r.type && /^(?:case|default)\b/.test(n))return e.context.type = "}", r.indented;
                var o = i == r.type;
                return r.align ? r.column + (o ? 0 : 1) : r.indented + (o ? 0 : l)
            }, electricChars: "{}):", fold: "brace", blockCommentStart: "/*", blockCommentEnd: "*/", lineComment: "//"
        }
    }), e.defineMIME("text/x-go", "go")
}), function (e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror", require("../xml/xml"))) : "function" == typeof define && define.amd ? define("codemirror/mode/markdown/markdown", ["codemirror", "codemirror/mode/xml/xml"], e) : e(CodeMirror)
}(function (e) {
    "use strict";
    e.defineMode("markdown", function (t, n) {
        function r(e, t, n) {
            return t.f = t.inline = n, n(e, t)
        }

        function i(e, t, n) {
            return t.f = t.block = n, n(e, t)
        }

        function o(e) {
            return e.linkTitle = !1, e.em = !1, e.strong = !1, e.quote = 0, y || e.f != s || (e.f = d, e.block = a), e.trailingSpace = 0, e.trailingSpaceNewLine = !1, e.thisLineHasContent = !1, null
        }

        function a(e, t) {
            var o = e.sol(), a = t.list !== !1;
            t.list !== !1 && t.indentationDiff >= 0 ? (t.indentationDiff < 4 && (t.indentation -= t.indentationDiff), t.list = null) : t.list !== !1 && t.indentation > 0 ? (t.list = null, t.listDepth = Math.floor(t.indentation / 4)) : t.list !== !1 && (t.list = !1, t.listDepth = 0);
            var s = null;
            if (t.indentationDiff >= 4)return t.indentation -= 4, e.skipToEnd(), S;
            if (e.eatSpace())return null;
            if (s = e.match(H))return t.header = s[0].length <= 6 ? s[0].length : 6, n.highlightFormatting && (t.formatting = "header"), t.f = t.inline, c(t);
            if (t.prevLineHasContent && (s = e.match(W)))return t.header = "=" == s[0].charAt(0) ? 1 : 2, n.highlightFormatting && (t.formatting = "header"), t.f = t.inline, c(t);
            if (e.eat(">"))return t.indentation++, t.quote = o ? 1 : t.quote + 1, n.highlightFormatting && (t.formatting = "quote"), e.eatSpace(), c(t);
            if ("[" === e.peek())return r(e, t, m);
            if (e.match(B, !0))return L;
            if ((!t.prevLineHasContent || a) && (e.match(q, !1) || e.match(P, !1))) {
                var u = null;
                return e.match(q, !0) ? u = "ul" : (e.match(P, !0), u = "ol"), t.indentation += 4, t.list = !0, t.listDepth++, n.taskLists && e.match(F, !1) && (t.taskList = !0), t.f = t.inline, n.highlightFormatting && (t.formatting = ["list", "list-" + u]), c(t)
            }
            return n.fencedCodeBlocks && e.match(/^```([\w+#]*)/, !0) ? (t.localMode = k(RegExp.$1), t.localMode && (t.localState = t.localMode.startState()), i(e, t, l), n.highlightFormatting && (t.formatting = "code-block"), t.code = !0, c(t)) : r(e, t, t.inline)
        }

        function s(e, t) {
            var n = w.token(e, t.htmlState);
            return (y && null === t.htmlState.tagStart && !t.htmlState.context || t.md_inside && e.current().indexOf(">") > -1) && (t.f = d, t.block = a, t.htmlState = null), n
        }

        function l(e, t) {
            if (e.sol() && e.match(/^```/, !0)) {
                t.localMode = t.localState = null, t.f = d, t.block = a, n.highlightFormatting && (t.formatting = "code-block"), t.code = !0;
                var r = c(t);
                return t.code = !1, r
            }
            return t.localMode ? t.localMode.token(e, t.localState) : (e.skipToEnd(), S)
        }

        function c(e) {
            var t = [];
            if (e.formatting) {
                t.push(I), "string" == typeof e.formatting && (e.formatting = [e.formatting]);
                for (var r = 0; r < e.formatting.length; r++)t.push(I + "-" + e.formatting[r]), "header" === e.formatting[r] && t.push(I + "-" + e.formatting[r] + "-" + e.header), "quote" === e.formatting[r] && t.push(!n.maxBlockquoteDepth || n.maxBlockquoteDepth >= e.quote ? I + "-" + e.formatting[r] + "-" + e.quote : "error")
            }
            if (e.taskOpen)return t.push("meta"), t.length ? t.join(" ") : null;
            if (e.taskClosed)return t.push("property"), t.length ? t.join(" ") : null;
            if (e.linkHref)return t.push(z), t.length ? t.join(" ") : null;
            if (e.strong && t.push(R), e.em && t.push(D), e.linkText && t.push(O), e.code && t.push(S), e.header && (t.push(C), t.push(C + "-" + e.header)), e.quote && (t.push(T), t.push(!n.maxBlockquoteDepth || n.maxBlockquoteDepth >= e.quote ? T + "-" + e.quote : T + "-" + n.maxBlockquoteDepth)), e.list !== !1) {
                var i = (e.listDepth - 1) % 3;
                t.push(i ? 1 === i ? M : E : $)
            }
            return e.trailingSpaceNewLine ? t.push("trailing-space-new-line") : e.trailingSpace && t.push("trailing-space-" + (e.trailingSpace % 2 ? "a" : "b")), t.length ? t.join(" ") : null
        }

        function u(e, t) {
            return e.match(U, !0) ? c(t) : void 0
        }

        function d(t, r) {
            var o = r.text(t, r);
            if ("undefined" != typeof o)return o;
            if (r.list)return r.list = null, c(r);
            if (r.taskList) {
                var a = "x" !== t.match(F, !0)[1];
                return a ? r.taskOpen = !0 : r.taskClosed = !0, n.highlightFormatting && (r.formatting = "task"), r.taskList = !1, c(r)
            }
            if (r.taskOpen = !1, r.taskClosed = !1, r.header && t.match(/^#+$/, !0))return n.highlightFormatting && (r.formatting = "header"), c(r);
            var l = t.sol(), u = t.next();
            if (r.escape)return r.escape = !1, c(r);
            if (r.linkTitle) {
                r.linkTitle = !1;
                var d = u;
                "(" === u && (d = ")"), d = (d + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
                var h = "^\\s*(?:[^" + d + "\\\\]+|\\\\\\\\|\\\\.)" + d;
                if (t.match(new RegExp(h), !0))return z
            }
            if ("`" === u) {
                var m = r.formatting;
                n.highlightFormatting && (r.formatting = "code");
                var g = c(r), v = t.pos;
                t.eatWhile("`");
                var b = 1 + t.pos - v;
                return r.code ? b === x ? (r.code = !1, g) : (r.formatting = m, c(r)) : (x = b, r.code = !0, c(r))
            }
            if (r.code)return c(r);
            if ("!" === u && t.match(/\[[^\]]*\] ?(?:\(|\[)/, !1))return t.match(/\[[^\]]*\]/), r.inline = r.f = p, N;
            if ("[" === u && t.match(/.*\](\(| ?\[)/, !1))return r.linkText = !0, n.highlightFormatting && (r.formatting = "link"), c(r);
            if ("]" === u && r.linkText) {
                n.highlightFormatting && (r.formatting = "link");
                var y = c(r);
                return r.linkText = !1, r.inline = r.f = p, y
            }
            if ("<" === u && t.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/, !1)) {
                r.f = r.inline = f, n.highlightFormatting && (r.formatting = "link");
                var y = c(r);
                return y ? y += " " : y = "", y + A
            }
            if ("<" === u && t.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/, !1)) {
                r.f = r.inline = f, n.highlightFormatting && (r.formatting = "link");
                var y = c(r);
                return y ? y += " " : y = "", y + j
            }
            if ("<" === u && t.match(/^\w/, !1)) {
                if (-1 != t.string.indexOf(">")) {
                    var _ = t.string.substring(1, t.string.indexOf(">"));
                    /markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(_) && (r.md_inside = !0)
                }
                return t.backUp(1), r.htmlState = e.startState(w), i(t, r, s)
            }
            if ("<" === u && t.match(/^\/\w*?>/))return r.md_inside = !1, "tag";
            var k = !1;
            if (!n.underscoresBreakWords && "_" === u && "_" !== t.peek() && t.match(/(\w)/, !1)) {
                var C = t.pos - 2;
                if (C >= 0) {
                    var S = t.string.charAt(C);
                    "_" !== S && S.match(/(\w)/, !1) && (k = !0)
                }
            }
            if ("*" === u || "_" === u && !k)if (l && " " === t.peek()); else {
                if (r.strong === u && t.eat(u)) {
                    n.highlightFormatting && (r.formatting = "strong");
                    var g = c(r);
                    return r.strong = !1, g
                }
                if (!r.strong && t.eat(u))return r.strong = u, n.highlightFormatting && (r.formatting = "strong"), c(r);
                if (r.em === u) {
                    n.highlightFormatting && (r.formatting = "em");
                    var g = c(r);
                    return r.em = !1, g
                }
                if (!r.em)return r.em = u, n.highlightFormatting && (r.formatting = "em"), c(r)
            } else if (" " === u && (t.eat("*") || t.eat("_"))) {
                if (" " === t.peek())return c(r);
                t.backUp(1)
            }
            return " " === u && (t.match(/ +$/, !1) ? r.trailingSpace++ : r.trailingSpace && (r.trailingSpaceNewLine = !0)), c(r)
        }

        function f(e, t) {
            var r = e.next();
            if (">" === r) {
                t.f = t.inline = d, n.highlightFormatting && (t.formatting = "link");
                var i = c(t);
                return i ? i += " " : i = "", i + A
            }
            return e.match(/^[^>]+/, !0), A
        }

        function p(e, t) {
            if (e.eatSpace())return null;
            var r = e.next();
            return "(" === r || "[" === r ? (t.f = t.inline = h("(" === r ? ")" : "]"), n.highlightFormatting && (t.formatting = "link-string"), t.linkHref = !0, c(t)) : "error"
        }

        function h(e) {
            return function (t, r) {
                var i = t.next();
                if (i === e) {
                    r.f = r.inline = d, n.highlightFormatting && (r.formatting = "link-string");
                    var o = c(r);
                    return r.linkHref = !1, o
                }
                return t.match(b(e), !0) && t.backUp(1), r.linkHref = !0, c(r)
            }
        }

        function m(e, t) {
            return e.match(/^[^\]]*\]:/, !1) ? (t.f = g, e.next(), n.highlightFormatting && (t.formatting = "link"), t.linkText = !0, c(t)) : r(e, t, d)
        }

        function g(e, t) {
            if (e.match(/^\]:/, !0)) {
                t.f = t.inline = v, n.highlightFormatting && (t.formatting = "link");
                var r = c(t);
                return t.linkText = !1, r
            }
            return e.match(/^[^\]]+/, !0), O
        }

        function v(e, t) {
            return e.eatSpace() ? null : (e.match(/^[^\s]+/, !0), void 0 === e.peek() ? t.linkTitle = !0 : e.match(/^(?:\s+(?:"(?:[^"\\]|\\\\|\\.)+"|'(?:[^'\\]|\\\\|\\.)+'|\((?:[^)\\]|\\\\|\\.)+\)))?/, !0), t.f = t.inline = d, z)
        }

        function b(e) {
            return K[e] || (e = (e + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"), K[e] = new RegExp("^(?:[^\\\\]|\\\\.)*?(" + e + ")")), K[e]
        }

        var y = e.modes.hasOwnProperty("xml"), w = e.getMode(t, y ? {
            name: "xml",
            htmlMode: !0
        } : "text/plain"), _ = {
            html: "htmlmixed",
            js: "javascript",
            json: "application/json",
            c: "text/x-csrc",
            "c++": "text/x-c++src",
            java: "text/x-java",
            csharp: "text/x-csharp",
            "c#": "text/x-csharp",
            scala: "text/x-scala"
        }, k = function () {
            var n, r, i = {}, o = {}, a = [];
            for (var s in e.modes)e.modes.propertyIsEnumerable(s) && a.push(s);
            for (n = 0; n < a.length; n++)i[a[n]] = a[n];
            var l = [];
            for (var s in e.mimeModes)e.mimeModes.propertyIsEnumerable(s) && l.push({mime: s, mode: e.mimeModes[s]});
            for (n = 0; n < l.length; n++)r = l[n].mime, o[r] = l[n].mime;
            for (var c in _)(_[c]in i || _[c]in o) && (i[c] = _[c]);
            return function (n) {
                return i[n] ? e.getMode(t, i[n]) : null
            }
        }();
        void 0 === n.highlightFormatting && (n.highlightFormatting = !1), void 0 === n.maxBlockquoteDepth && (n.maxBlockquoteDepth = 0), void 0 === n.underscoresBreakWords && (n.underscoresBreakWords = !0), void 0 === n.fencedCodeBlocks && (n.fencedCodeBlocks = !1), void 0 === n.taskLists && (n.taskLists = !1);
        var x = 0, C = "header", S = "comment", T = "quote", $ = "variable-2", M = "variable-3", E = "keyword", L = "hr", N = "tag", I = "formatting", A = "link", j = "link", O = "link", z = "string", D = "em", R = "strong", B = /^([*\-=_])(?:\s*\1){2,}\s*$/, q = /^[*\-+]\s+/, P = /^[0-9]+\.\s+/, F = /^\[(x| )\](?=\s)/, H = /^#+/, W = /^(?:\={1,}|-{1,})$/, U = /^[^#!\[\]*_\\<>` "'(]+/, K = [], V = {
            startState: function () {
                return {
                    f: a,
                    prevLineHasContent: !1,
                    thisLineHasContent: !1,
                    block: a,
                    htmlState: null,
                    indentation: 0,
                    inline: d,
                    text: u,
                    escape: !1,
                    formatting: !1,
                    linkText: !1,
                    linkHref: !1,
                    linkTitle: !1,
                    em: !1,
                    strong: !1,
                    header: 0,
                    taskList: !1,
                    list: !1,
                    listDepth: 0,
                    quote: 0,
                    trailingSpace: 0,
                    trailingSpaceNewLine: !1
                }
            }, copyState: function (t) {
                return {
                    f: t.f,
                    prevLineHasContent: t.prevLineHasContent,
                    thisLineHasContent: t.thisLineHasContent,
                    block: t.block,
                    htmlState: t.htmlState && e.copyState(w, t.htmlState),
                    indentation: t.indentation,
                    localMode: t.localMode,
                    localState: t.localMode ? e.copyState(t.localMode, t.localState) : null,
                    inline: t.inline,
                    text: t.text,
                    escape: !1,
                    formatting: !1,
                    linkTitle: t.linkTitle,
                    em: t.em,
                    strong: t.strong,
                    header: t.header,
                    taskList: t.taskList,
                    list: t.list,
                    listDepth: t.listDepth,
                    quote: t.quote,
                    trailingSpace: t.trailingSpace,
                    trailingSpaceNewLine: t.trailingSpaceNewLine,
                    md_inside: t.md_inside
                }
            }, token: function (e, t) {
                if (t.formatting = !1, e.sol()) {
                    var n = e.match(/^\s*$/, !0) || t.header;
                    if (t.header = 0, n)return t.prevLineHasContent = !1, o(t);
                    t.prevLineHasContent = t.thisLineHasContent, t.thisLineHasContent = !0, t.escape = !1, t.taskList = !1, t.code = !1, t.trailingSpace = 0, t.trailingSpaceNewLine = !1, t.f = t.block;
                    var r = e.match(/^\s*/, !0)[0].replace(/\t/g, "    ").length, i = 4 * Math.floor((r - t.indentation) / 4);
                    i > 4 && (i = 4);
                    var a = t.indentation + i;
                    if (t.indentationDiff = a - t.indentation, t.indentation = a, r > 0)return null
                }
                var s = t.f(e, t);
                return e.start == e.pos ? this.token(e, t) : s
            }, innerMode: function (e) {
                return e.block == s ? {state: e.htmlState, mode: w} : e.localState ? {
                    state: e.localState,
                    mode: e.localMode
                } : {state: e, mode: V}
            }, blankLine: o, getType: c, fold: "markdown"
        };
        return V
    }, "xml"), e.defineMIME("text/x-markdown", "markdown")
}), function (e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define("codemirror/mode/shell/shell", ["../../lib/codemirror"], e) : e(CodeMirror)
}(function (e) {
    "use strict";
    e.defineMode("shell", function () {
        function e(e, t) {
            for (var n = t.split(" "), r = 0; r < n.length; r++)i[n[r]] = e
        }

        function t(e, t) {
            if (e.eatSpace())return null;
            var a = e.sol(), s = e.next();
            if ("\\" === s)return e.next(), null;
            if ("'" === s || '"' === s || "`" === s)return t.tokens.unshift(n(s)), r(e, t);
            if ("#" === s)return a && e.eat("!") ? (e.skipToEnd(), "meta") : (e.skipToEnd(), "comment");
            if ("$" === s)return t.tokens.unshift(o), r(e, t);
            if ("+" === s || "=" === s)return "operator";
            if ("-" === s)return e.eat("-"), e.eatWhile(/\w/), "attribute";
            if (/\d/.test(s) && (e.eatWhile(/\d/), e.eol() || !/\w/.test(e.peek())))return "number";
            e.eatWhile(/[\w-]/);
            var l = e.current();
            return "=" === e.peek() && /\w+/.test(l) ? "def" : i.hasOwnProperty(l) ? i[l] : null
        }

        function n(e) {
            return function (t, n) {
                for (var r, i = !1, a = !1; null != (r = t.next());) {
                    if (r === e && !a) {
                        i = !0;
                        break
                    }
                    if ("$" === r && !a && "'" !== e) {
                        a = !0, t.backUp(1), n.tokens.unshift(o);
                        break
                    }
                    a = !a && "\\" === r
                }
                return (i || !a) && n.tokens.shift(), "`" === e || ")" === e ? "quote" : "string"
            }
        }

        function r(e, n) {
            return (n.tokens[0] || t)(e, n)
        }

        var i = {};
        e("atom", "true false"), e("keyword", "if then do else elif while until for in esac fi fin fil done exit set unset export function"), e("builtin", "ab awk bash beep cat cc cd chown chmod chroot clear cp curl cut diff echo find gawk gcc get git grep kill killall ln ls make mkdir openssl mv nc node npm ping ps restart rm rmdir sed service sh shopt shred source sort sleep ssh start stop su sudo tee telnet top touch vi vim wall wc wget who write yes zsh");
        var o = function (e, t) {
            t.tokens.length > 1 && e.eat("$");
            var i = e.next(), o = /\w/;
            return "{" === i && (o = /[^}]/), "(" === i ? (t.tokens[0] = n(")"), r(e, t)) : (/\d/.test(i) || (e.eatWhile(o), e.eat("}")), t.tokens.shift(), "def")
        };
        return {
            startState: function () {
                return {tokens: []}
            }, token: function (e, t) {
                return r(e, t)
            }
        }
    }), e.defineMIME("text/x-sh", "shell")
}), function (e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define("codemirror/addon/selection/active-line", ["../../lib/codemirror"], e) : e(CodeMirror)
}(function (e) {
    "use strict";
    function t(e) {
        for (var t = 0; t < e.state.activeLines.length; t++)e.removeLineClass(e.state.activeLines[t], "wrap", o), e.removeLineClass(e.state.activeLines[t], "background", a)
    }

    function n(e, t) {
        if (e.length != t.length)return !1;
        for (var n = 0; n < e.length; n++)if (e[n] != t[n])return !1;
        return !0
    }

    function r(e, r) {
        for (var i = [], s = 0; s < r.length; s++) {
            var l = r[s];
            if (l.empty()) {
                var c = e.getLineHandleVisualStart(l.head.line);
                i[i.length - 1] != c && i.push(c)
            }
        }
        n(e.state.activeLines, i) || e.operation(function () {
            t(e);
            for (var n = 0; n < i.length; n++)e.addLineClass(i[n], "wrap", o), e.addLineClass(i[n], "background", a);
            e.state.activeLines = i
        })
    }

    function i(e, t) {
        r(e, t.ranges)
    }

    var o = "CodeMirror-activeline", a = "CodeMirror-activeline-background";
    e.defineOption("styleActiveLine", !1, function (n, o, a) {
        var s = a && a != e.Init;
        o && !s ? (n.state.activeLines = [], r(n, n.listSelections()), n.on("beforeSelectionChange", i)) : !o && s && (n.off("beforeSelectionChange", i), t(n), delete n.state.activeLines)
    })
}), function (e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define("codemirror/addon/edit/matchbrackets", ["../../lib/codemirror"], e) : e(CodeMirror)
}(function (e) {
    function t(e, t, r, i) {
        var o = e.getLineHandle(t.line), l = t.ch - 1, c = l >= 0 && s[o.text.charAt(l)] || s[o.text.charAt(++l)];
        if (!c)return null;
        var u = ">" == c.charAt(1) ? 1 : -1;
        if (r && u > 0 != (l == t.ch))return null;
        var d = e.getTokenTypeAt(a(t.line, l + 1)), f = n(e, a(t.line, l + (u > 0 ? 1 : 0)), u, d || null, i);
        return null == f ? null : {from: a(t.line, l), to: f && f.pos, match: f && f.ch == c.charAt(0), forward: u > 0}
    }

    function n(e, t, n, r, i) {
        for (var o = i && i.maxScanLineLength || 1e4, l = i && i.maxScanLines || 1e3, c = [], u = i && i.bracketRegex ? i.bracketRegex : /[(){}[\]]/, d = n > 0 ? Math.min(t.line + l, e.lastLine() + 1) : Math.max(e.firstLine() - 1, t.line - l), f = t.line; f != d; f += n) {
            var p = e.getLine(f);
            if (p) {
                var h = n > 0 ? 0 : p.length - 1, m = n > 0 ? p.length : -1;
                if (!(p.length > o))for (f == t.line && (h = t.ch - (0 > n ? 1 : 0)); h != m; h += n) {
                    var g = p.charAt(h);
                    if (u.test(g) && (void 0 === r || e.getTokenTypeAt(a(f, h + 1)) == r)) {
                        var v = s[g];
                        if (">" == v.charAt(1) == n > 0)c.push(g); else {
                            if (!c.length)return {pos: a(f, h), ch: g};
                            c.pop()
                        }
                    }
                }
            }
        }
        return f - n == (n > 0 ? e.lastLine() : e.firstLine()) ? !1 : null
    }

    function r(e, n, r) {
        for (var i = e.state.matchBrackets.maxHighlightLineLength || 1e3, s = [], l = e.listSelections(), c = 0; c < l.length; c++) {
            var u = l[c].empty() && t(e, l[c].head, !1, r);
            if (u && e.getLine(u.from.line).length <= i) {
                var d = u.match ? "CodeMirror-matchingbracket" : "CodeMirror-nonmatchingbracket";
                s.push(e.markText(u.from, a(u.from.line, u.from.ch + 1), {className: d})), u.to && e.getLine(u.to.line).length <= i && s.push(e.markText(u.to, a(u.to.line, u.to.ch + 1), {className: d}))
            }
        }
        if (s.length) {
            o && e.state.focused && e.display.input.focus();
            var f = function () {
                e.operation(function () {
                    for (var e = 0; e < s.length; e++)s[e].clear()
                })
            };
            if (!n)return f;
            setTimeout(f, 800)
        }
    }

    function i(e) {
        e.operation(function () {
            l && (l(), l = null), l = r(e, !1, e.state.matchBrackets)
        })
    }

    var o = /MSIE \d/.test(navigator.userAgent) && (null == document.documentMode || document.documentMode < 8), a = e.Pos, s = {
        "(": ")>",
        ")": "(<",
        "[": "]>",
        "]": "[<",
        "{": "}>",
        "}": "{<"
    }, l = null;
    e.defineOption("matchBrackets", !1, function (t, n, r) {
        r && r != e.Init && t.off("cursorActivity", i), n && (t.state.matchBrackets = "object" == typeof n ? n : {}, t.on("cursorActivity", i))
    }), e.defineExtension("matchBrackets", function () {
        r(this, !0)
    }), e.defineExtension("findMatchingBracket", function (e, n, r) {
        return t(this, e, n, r)
    }), e.defineExtension("scanForBracket", function (e, t, r, i) {
        return n(this, e, t, r, i)
    })
}), define("NoteWidget", ["main", "codemirror", "autoSave", "codemirror/mode/python/python", "codemirror/mode/ruby/ruby", "codemirror/mode/php/php", "codemirror/mode/css/css", "codemirror/mode/clike/clike", "codemirror/mode/htmlmixed/htmlmixed", "codemirror/mode/go/go", "codemirror/mode/markdown/markdown", "codemirror/mode/shell/shell", "codemirror/mode/javascript/javascript", "codemirror/addon/selection/active-line", "codemirror/addon/edit/matchbrackets"], function (e, t, n) {
    var r, i;
    return r = function () {
        var e, r, i, o;
        r = '<div id="noteWidget" class="noteWidget hidden hidden-xs">\n    <div class="noteWidget-header clearfix">\n        <h2 class="h4 pull-left">记笔记</h2>\n        <ul class="list-inline pull-right mb0">\n            <li id="noteWidgetMinimize"><span class="icon-minimize"></span></li><li id="noteWidgetZoom"><span class="icon-zoom"></span></li><li id="noteWidgetClose"><span class="icon-close"></span></li>\n        </ul>\n    </div>\n    <form method="POST" action="/api/notes/add" role="form">\n        <div class="form-group">\n            <label for="title" class="sr-only">标题</label>\n            <input type="hidden" value="" id="draftId">\n            <input type="text" name="title" data-error="" autocomplete="off" class="form-control" placeholder="笔记描述" value="">\n        </div>\n        <div class="editor-config clearfix">\n            <select name="lang" class="form-control pull-left input-sm">\n                <optgroup label="文本语法">\n                    <option value="text" data-mode="text">纯文本</option>\n                    <option value="markdown" data-mode="markdown">Markdown</option>\n                    <option value="javascript" data-mode="javascript">Javascript</option>\n                    <option value="css" data-mode="css">CSS</option>\n                    <option value="html5" data-mode="htmlmixed">HTML</option>\n                    <option value="php" data-mode="php">PHP</option>\n                    <option value="python" data-mode="python">Python</option>\n                    <option value="ruby" data-mode="ruby">Ruby</option>\n                    <option value="go" data-mode="go">Go</option>\n                    <option value="c" data-mode="clike">C/C++</option>\n                    <option value="java" data-mode="java">Java</option>\n                    <option value="bash" data-mode="shell">Shell/Bash</option>\n                </optgroup>\n            </select>\n            <div class="pull-right hidden-xs">\n                <select name="indentWithTabs" class="form-control inline-block input-sm">\n                    <optgroup label="缩进模式">\n                        <option value="false">空格缩进</option>\n                        <option value="true">Tabs 缩进</option>\n                    </optgroup>\n                </select>\n                <select name="tabSize" class="form-control inline-block input-sm">\n                    <optgroup label="缩进大小">\n                        <option value="2">2</option>\n                        <option value="4" selected="">4</option>\n                    </optgroup>\n                </select>\n                <select name="lineWrap" class="form-control inline-block input-sm">\n                    <optgroup label="换行方式">\n                        <option value="true">自动换行</option>\n                        <option value="false">不换行</option>\n                    </optgroup>\n                </select>\n            </div>\n        </div>\n        <textarea id="codeMirror" class="form-control" style="display: none;"></textarea>\n        <div class="mt20 clearfix">\n            <div class="pull-right">\n                <span class="text-muted hidden" id="editorStatus">已保存</span>\n                <a id="dropIt" href="javascript:void(0);" class="mr10 hidden">[舍弃]</a>\n                <button data-type="note" id="publishIt2" class="btn btn-default ml10" data-id="" data-do="add" data-url="" data-text="保存私密笔记" data-name="">保存私密笔记</button>\n                <button data-type="note" id="publishIt" class="btn btn-primary ml10" data-id="" data-do="add" data-url="" data-text="保存公开笔记" data-name="">保存公开笔记</button>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>', this.content = $(r), $("body").append(this.content), this.option = i = {
            mode: $("#noteWidget [name=lang] option:selected").data("mode"),
            indentUnit: $("#noteWidget [name=tabSize]").val(),
            tabSize: $("#noteWidget [name=tabSize]").val(),
            lineWrapping: "true" === $("#noteWidget [name=lineWrap]").val(),
            indentWithTabs: "true" === $("#noteWidget [name=indentWithTabs]").val()
        }, e = t.fromTextArea($("#codeMirror")[0], {
            lineNumbers: !0,
            styleActiveLine: !0,
            matchBrackets: !0,
            mode: i.mode,
            indentUnit: i.indentUnit,
            tabSize: i.tabSize,
            lineWrapping: i.lineWrapping,
            indentWithTabs: i.indentWithTabs
        }), t.on($("#noteWidget [name=lang]")[0], "change", function () {
            var t;
            return t = $(this).find("option:selected").data("mode"), e.setOption("mode", t)
        }), $("#noteWidget [name=tabSize]").change(function () {
            var t;
            return t = $(this).val(), e.setOption("indentUnit", t), e.setOption("tabSize", t)
        }), $("#noteWidget [name=lineWrap]").change(function () {
            var t;
            return t = "true" === $(this).val(), e.setOption("lineWrapping", t)
        }), $("#noteWidget [name=indentWithTabs]").change(function () {
            var t;
            return t = "true" === $(this).val(), e.setOption("indentWithTabs", t)
        }), n.bind(e, function () {
            return this["do"] = "saveNote", this.type = "note", this.title = $("#noteWidget [name=title]").val(), this.text = e.getValue(), this.id = $("#draftId").val(), this.noteId = $("#publishIt").data("id"), this.language = $("#noteWidget [name=lang]").val(), this.language = $("#noteWidget [name=lang]").val()
        }), o = function (t, n) {
            var r, i, o;
            return r = t, r.text("加载中").attr("disabled", "disabled"), o = {
                title: r.parents("form").find("input[name=title]").val(),
                text: e.getValue(),
                isPrivate: $("#isEditPrivate").val() || n,
                language: r.parents("form").find("[name=lang]").val()
            }, i = "/api/notes/add", $.post(i, o, function (e) {
                0 === e.status ? location.href = e.data.url : r.text(r.data("text")).removeAttr("disabled")
            }, "json")
        }, $(".noteWidget form").submit(function (e) {
            return e.preventDefault(), o($("#publishIt"), 0), !1
        }), $("#publishIt2").click(function (e) {
            return e.preventDefault(), o($(this), 1)
        }), $("#noteWidgetMinimize").click(function () {
            return $("#noteWidget").toggleClass("minimize")
        }), $("#noteWidgetZoom").click(function () {
            var t;
            return $("#noteWidget").toggleClass("zoom"), $("#noteWidget").removeClass("minimize"), $("#noteWidget").hasClass("zoom") ? (t = $(window).height() - 215, e.setSize("100%", t)) : e.setSize("100%", 240), e.refresh()
        }), $("#noteWidgetClose").click(function () {
            return $("#noteWidget").removeClass("zoom minimize"), $("#noteWidget").addClass("hidden")
        }), this.codemirror = e
    }, r.prototype.init = function (e, t) {
        var n, r, i, o;
        $("#noteWidget").removeClass("hidden"), i = [], $("#noteWidget [name=lang] option").each(function () {
            return i.push($(this).attr("value"))
        }), r = {
            javascript: /^(js|coffeescript)$/i,
            markdown: /^md$/i,
            c: /^(|cs|cpp|oc|objective-c)$/i,
            php: /^php[1-6]$/i,
            html5: /^(xml|html|html5|xhtml)$/i
        };
        for (n in r)t.match(r[n]) && (t = n);
        return -1 !== i.indexOf(t) ? o = $("#noteWidget [name=lang] option[value=" + t + "]").data("mode") : (t = "text", o = "text"), $("#noteWidget [name=lang]").val(t), this.codemirror.setOption("mode", o), this.codemirror.setValue(e)
    }, i = new r, $("body").on("click", ".saveToNote", function () {
        var e, t, n, r, o;
        return $("#saveToNote").remove(), n = window.getSelection().toString(), n ? i.init(n, "text") : (t = $(this).parents(".widget-codetool").next("pre"), e = t.find("code"), r = e.text(), o = e.attr("class") ? e.attr("class") : t.attr("class").replace("hljs ", ""), i.init(r, o))
    }), "on" === e.notePortal && $(".fmt").mouseup(function (e) {
        var t, n;
        return $("#saveToNote").length && $("#saveToNote").remove(), n = window.getSelection(), n.toString() && $(n.focusNode).parents(".fmt").length ? (t = $('<button id="saveToNote" class="hidden-xs btn btn-xs widget-saveToNote saveToNote" style="color: #FFF; left: ' + (e.pageX - 65) + "px; top:" + (e.pageY - 40) + 'px">放进笔记</button>'), $("body").append(t)) : void 0
    }), r
}), define("highLight", ["jquery", "highlightjs", "math", "flowChart", "sequenceChart", "ZeroClipboard", "NoteWidget", "jquery_hoverIntent"], function (e, t, n, r, i, o) {
    "use strict";
    return function (a) {
        var s, l, c, u;
        u = function (e) {
            var t, n, r, i;
            return t = document, i = e.get(0), t.body.createTextRange ? (n = t.body.createTextRange(), n.moveToElementText(i), n.select()) : window.getSelection ? (r = window.getSelection(), n = t.createRange(), n.selectNodeContents(i), r.removeAllRanges(), r.addRange(n)) : void 0
        }, l = function (t) {
            var n, r, i, a, s;
            return s = '<div class="widget-codetool" style="display:none;"><button class="selectCode btn btn-xs">全选</button><button href="javascript:void(0);" class="copyCode btn btn-xs" data-clipboard-text="" data-toggle="tooltip" data-placement="top" title="">复制</button><button href="javascript:void(0);" class="saveToNote btn btn-xs">放进笔记</button></div>', i = e(s), t.before(i), r = i.find(".copyCode"), n = t.children("code"), t.hoverIntent(function () {
                return i.fadeIn(), r.attr("title", ""), r.tooltip("destroy")
            }, function () {
                return i.is(":hover") || r.hasClass("zeroclipboard-is-hover") ? void 0 : i.fadeOut()
            }), i.hoverIntent(function () {
            }, function () {
                return t.is(":hover") ? void 0 : i.fadeOut()
            }), i.find(".selectCode").click(function () {
                return u(n)
            }), r.attr("data-clipboard-text", n.text()), a = new o(i.find(".copyCode")), a.on("ready", function () {
                return a.on("aftercopy", function () {
                    return r.attr("title", "已复制"), r.tooltip("show")
                })
            })
        }, c = function (n) {
            var o, s, c, u, d, f, p, h, m, g, v, b;
            v = n, f = {
                actionscript: /^as[1-3]$/i,
                cmake: /^(make|makefile)$/i,
                cs: /^csharp$/i,
                css: /^css[1-3]$/i,
                delphi: /^pascal$/i,
                javascript: /^js$/i,
                markdown: /^md$/i,
                objectivec: /^(oc|objective-c)$/i,
                php: /^php[1-6]$/i,
                sql: /^mysql$/i,
                xml: /^(html|html5|xhtml)$/i,
                flow: /^flow$/i,
                sequence: /^sequence$/i
            }, u = void 0, d = t.listLanguages(), c = void 0, o = void 0, m = !1, 2 === v.children("code").length ? (o = v.children("code").first().text(), v.children("code").first().remove(), c = v.children("code").addClass(o)) : (c = v.children("code"), o = c.attr("class")), o && (s = o.split(/\s+/), -1 !== s.indexOf("nohighlight") && (m = !0), s.forEach(function (e) {
                var t, n;
                if (n = e.toLowerCase(), -1 !== d.indexOf(n))u = n; else for (t in f)n.match(f[t]) && (u = t)
            })), u ? "flow" === u ? (h = e(".flowChart").length, c.parent().after('<div id="flowDiagram' + h + '" class="flowChart"></div>'), r(c.text(), "flowDiagram" + h), c.parent().remove()) : "sequence" === u ? (a = c.parent(), b = c.text(), h = e(".sequenceChart").length, a.replaceWith('<div id="sequenceDiagram' + h + '" class="sequenceChart">' + b + "</div>"), i(e("#sequenceDiagram" + h))) : (g = t.highlight(u, c.text(), !0), c.html(g.value)) : m || (p = v.html(), p.length < 1e4 && t.highlightBlock(v[0])), l(v)
        }, "undefined" != typeof t && (a ? (a.hasClass("fmt") && a.find("table").each(function () {
            e(this).wrap('<div class="x-scroll"></div>')
        }), s = a.text().indexOf("$$"), -1 !== s && n(a), a.find("pre").each(function () {
            c(e(this))
        })) : (s = !1, e(".fmt").each(function () {
            -1 !== e(this).text().indexOf("$$") && (s = !0)
        }), s && n(), e(".fmt").mouseup(function () {
            return console.log(window.getSelection())
        }), e(".fmt pre").each(function () {
            c(e(this))
        })))
    }
}), define("statusToggle", [], function () {
    "use strict";
    return function (e) {
        e.data("toggle", "false"), e.data("toggle") && (e.on("active", function (t, n) {
            e.data("toggle", "true"), n.call(this)
        }), e.on("unactive", function (t, n) {
            e.data("toggle", "true"), n.call(this)
        }))
    }
}), function (e) {
    var t, n = {
        className: "autosizejs",
        id: "autosizejs",
        append: "\n",
        callback: !1,
        resizeDelay: 10,
        placeholder: !0
    }, r = '<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>', i = ["fontFamily", "fontSize", "fontWeight", "fontStyle", "letterSpacing", "textTransform", "wordSpacing", "textIndent", "whiteSpace"], o = e(r).data("autosize", !0)[0];
    o.style.lineHeight = "99px", "99px" === e(o).css("lineHeight") && i.push("lineHeight"), o.style.lineHeight = "", e.fn.autosize = function (r) {
        return this.length ? (r = e.extend({}, n, r || {}), o.parentNode !== document.body && e(document.body).append(o), this.each(function () {
            function n() {
                var t, n = window.getComputedStyle ? window.getComputedStyle(f, null) : !1;
                n ? (t = f.getBoundingClientRect().width, (0 === t || "number" != typeof t) && (t = parseInt(n.width, 10)), e.each(["paddingLeft", "paddingRight", "borderLeftWidth", "borderRightWidth"], function (e, r) {
                    t -= parseInt(n[r], 10)
                })) : t = p.width(), o.style.width = Math.max(t, 0) + "px"
            }

            function a() {
                var a = {};
                if (t = f, o.className = r.className, o.id = r.id, c = parseInt(p.css("maxHeight"), 10), e.each(i, function (e, t) {
                        a[t] = p.css(t)
                    }), e(o).css(a).attr("wrap", p.attr("wrap")), n(), window.chrome) {
                    var s = f.style.width;
                    f.style.width = "0px";
                    {
                        f.offsetWidth
                    }
                    f.style.width = s
                }
            }

            function s() {
                var e, i;
                t !== f ? a() : n(), o.value = !f.value && r.placeholder ? (p.attr("placeholder") || "") + r.append : f.value + r.append, o.style.overflowY = f.style.overflowY, i = parseInt(f.style.height, 10), o.scrollTop = 0, o.scrollTop = 9e4, e = o.scrollTop, c && e > c ? (f.style.overflowY = "scroll", e = c) : (f.style.overflowY = "hidden", u > e && (e = u)), e += h, e -= 28, i !== e && (f.style.height = e + "px", m && r.callback.call(f, f), p.trigger("autosize.resized"))
            }

            function l() {
                clearTimeout(d), d = setTimeout(function () {
                    var e = p.width();
                    e !== v && (v = e, s())
                }, parseInt(r.resizeDelay, 10))
            }

            var c, u, d, f = this, p = e(f), h = 0, m = e.isFunction(r.callback), g = {
                height: f.style.height,
                overflow: f.style.overflow,
                overflowY: f.style.overflowY,
                wordWrap: f.style.wordWrap,
                resize: f.style.resize
            }, v = p.width(), b = p.css("resize");
            p.data("autosize") || (p.data("autosize", !0), ("border-box" === p.css("box-sizing") || "border-box" === p.css("-moz-box-sizing") || "border-box" === p.css("-webkit-box-sizing")) && (h = p.outerHeight() - p.height()), u = Math.max(parseInt(p.css("minHeight"), 10) - h || 0, p.height()), p.css({
                overflow: "hidden",
                overflowY: "hidden",
                wordWrap: "break-word"
            }), "vertical" === b ? p.css("resize", "none") : "both" === b && p.css("resize", "horizontal"), "onpropertychange"in f ? "oninput"in f ? p.on("input.autosize keyup.autosize", s) : p.on("propertychange.autosize", function () {
                "value" === event.propertyName && s()
            }) : p.on("input.autosize", s), r.resizeDelay !== !1 && e(window).on("resize.autosize", l), p.on("autosize.resize", s), p.on("autosize.resizeIncludeStyle", function () {
                t = null, s()
            }), p.on("autosize.destroy", function () {
                t = null, clearTimeout(d), e(window).off("resize", l), p.off("autosize").off(".autosize").css(g).removeData("autosize")
            }), s())
        })) : this
    }
}(jQuery || $), define("jquery_autosize", ["jquery"], function (e) {
    return function () {
        var t;
        return t || e.$.fn.autosize
    }
}(this)), function () {
    !function (e) {
        return "function" == typeof define && define.amd ? define("atwho", ["jquery"], e) : e(window.jQuery)
    }(function (e) {
        var t, n, r, i, o, a, s, l, c = [].slice;
        r = function () {
            function t(t) {
                this.current_flag = null, this.controllers = {}, this.alias_maps = {}, this.$inputor = e(t), this.iframe = null, this.setIframe(), this.listen()
            }

            return t.prototype.setIframe = function (e) {
                return e ? (this.window = e.contentWindow, this.document = e.contentDocument || this.window.document, this.iframe = e) : (this.document = document, this.window = window, this.iframe = null)
            }, t.prototype.controller = function (e) {
                var t, n, r, i;
                if (this.alias_maps[e])n = this.controllers[this.alias_maps[e]]; else {
                    i = this.controllers;
                    for (r in i)if (t = i[r], r === e) {
                        n = t;
                        break
                    }
                }
                return n ? n : this.controllers[this.current_flag]
            }, t.prototype.set_context_for = function (e) {
                return this.current_flag = e, this
            }, t.prototype.reg = function (e, t) {
                var n, r;
                return n = (r = this.controllers)[e] || (r[e] = new i(this, e)), t.alias && (this.alias_maps[t.alias] = e), n.init(t), this
            }, t.prototype.listen = function () {
                return this.$inputor.on("keyup.atwhoInner", function (e) {
                    return function (t) {
                        return e.on_keyup(t)
                    }
                }(this)).on("keydown.atwhoInner", function (e) {
                    return function (t) {
                        return e.on_keydown(t)
                    }
                }(this)).on("scroll.atwhoInner", function (e) {
                    return function (t) {
                        var n;
                        return null != (n = e.controller()) ? n.view.hide(t) : void 0
                    }
                }(this)).on("blur.atwhoInner", function (e) {
                    return function (t) {
                        var n;
                        return (n = e.controller()) ? n.view.hide(t, n.get_opt("display_timeout")) : void 0
                    }
                }(this)).on("click.atwhoInner", function (e) {
                    return function (t) {
                        var n;
                        return null != (n = e.controller()) ? n.view.hide(t) : void 0
                    }
                }(this))
            }, t.prototype.shutdown = function () {
                var e, t, n;
                n = this.controllers;
                for (t in n)e = n[t], e.destroy(), delete this.controllers[t];
                return this.$inputor.off(".atwhoInner")
            }, t.prototype.dispatch = function () {
                return e.map(this.controllers, function (e) {
                    return function (t) {
                        var n;
                        return (n = t.get_opt("delay")) ? (clearTimeout(e.delayedCallback), e.delayedCallback = setTimeout(function () {
                            return t.look_up() ? e.set_context_for(t.at) : void 0
                        }, n)) : t.look_up() ? e.set_context_for(t.at) : void 0
                    }
                }(this))
            }, t.prototype.on_keyup = function (t) {
                var n;
                switch (t.keyCode) {
                    case a.ESC:
                        t.preventDefault(), null != (n = this.controller()) && n.view.hide();
                        break;
                    case a.DOWN:
                    case a.UP:
                    case a.CTRL:
                        e.noop();
                        break;
                    case a.P:
                    case a.N:
                        t.ctrlKey || this.dispatch();
                        break;
                    default:
                        this.dispatch()
                }
            }, t.prototype.on_keydown = function (t) {
                var n, r;
                if (n = null != (r = this.controller()) ? r.view : void 0, n && n.visible())switch (t.keyCode) {
                    case a.ESC:
                        t.preventDefault(), n.hide(t);
                        break;
                    case a.UP:
                        t.preventDefault(), n.prev();
                        break;
                    case a.DOWN:
                        t.preventDefault(), n.next();
                        break;
                    case a.P:
                        if (!t.ctrlKey)return;
                        t.preventDefault(), n.prev();
                        break;
                    case a.N:
                        if (!t.ctrlKey)return;
                        t.preventDefault(), n.next();
                        break;
                    case a.TAB:
                    case a.ENTER:
                        if (!n.visible())return;
                        t.preventDefault(), n.choose(t);
                        break;
                    default:
                        e.noop()
                }
            }, t
        }(), i = function () {
            function n(n, r) {
                this.app = n, this.at = r, this.$inputor = this.app.$inputor, this.id = this.$inputor[0].id || this.uid(), this.setting = null, this.query = null, this.pos = 0, this.cur_rect = null, this.range = null, t.append(this.$el = e("<div id='atwho-ground-" + this.id + "'></div>")), this.model = new s(this), this.view = new l(this)
            }

            return n.prototype.uid = function () {
                return (Math.random().toString(16) + "000000000").substr(2, 8) + (new Date).getTime()
            }, n.prototype.init = function (t) {
                return this.setting = e.extend({}, this.setting || e.fn.atwho["default"], t), this.view.init(), this.model.reload(this.setting.data)
            }, n.prototype.destroy = function () {
                return this.trigger("beforeDestroy"), this.model.destroy(), this.view.destroy(), this.$el.remove()
            }, n.prototype.call_default = function () {
                var t, n, r;
                r = arguments[0], t = 2 <= arguments.length ? c.call(arguments, 1) : [];
                try {
                    return o[r].apply(this, t)
                } catch (i) {
                    return n = i, e.error("" + n + " Or maybe At.js doesn't have function " + r)
                }
            }, n.prototype.trigger = function (e, t) {
                var n, r;
                return null == t && (t = []), t.push(this), n = this.get_opt("alias"), r = n ? "" + e + "-" + n + ".atwho" : "" + e + ".atwho", this.$inputor.trigger(r, t)
            }, n.prototype.callbacks = function (e) {
                return this.get_opt("callbacks")[e] || o[e]
            }, n.prototype.get_opt = function (e) {
                var t;
                try {
                    return this.setting[e]
                } catch (n) {
                    return t = n, null
                }
            }, n.prototype.content = function () {
                return this.$inputor.is("textarea, input") ? this.$inputor.val() : this.$inputor.text()
            }, n.prototype.catch_query = function () {
                var e, t, n, r, i, o;
                return t = this.content(), e = this.$inputor.caret("pos", {iframe: this.app.iframe}), o = t.slice(0, e), r = this.callbacks("matcher").call(this, this.at, o, this.get_opt("start_with_space")), "string" == typeof r && r.length <= this.get_opt("max_len", 20) ? (i = e - r.length, n = i + r.length, this.pos = i, r = {
                    text: r,
                    head_pos: i,
                    end_pos: n
                }, this.trigger("matched", [this.at, r.text])) : (r = null, this.view.hide()), this.query = r
            }, n.prototype.rect = function () {
                var e, t;
                if (e = this.$inputor.caret("offset", this.pos - 1, {iframe: this.app.iframe}))return "true" === this.$inputor.attr("contentEditable") && (e = this.cur_rect || (this.cur_rect = e) || e), t = this.app.document.selection ? 0 : 2, {
                    left: e.left,
                    top: e.top,
                    bottom: e.top + e.height + t
                }
            }, n.prototype.reset_rect = function () {
                return "true" === this.$inputor.attr("contentEditable") ? this.cur_rect = null : void 0
            }, n.prototype.mark_range = function () {
                return "true" === this.$inputor.attr("contentEditable") && (this.app.window.getSelection && (this.range = this.app.window.getSelection().getRangeAt(0)), this.app.document.selection) ? this.ie8_range = this.app.document.selection.createRange() : void 0
            }, n.prototype.insert_content_for = function (t) {
                var n, r, i;
                return r = t.data("value"), i = this.get_opt("insert_tpl"), this.$inputor.is("textarea, input") || !i ? r : (n = e.extend({}, t.data("item-data"), {
                    "atwho-data-value": r,
                    "atwho-at": this.at
                }), this.callbacks("tpl_eval").call(this, i, n))
            }, n.prototype.insert = function (t) {
                var n, r, i, o, a, s, l, c, u;
                return n = this.$inputor, u = this.callbacks("inserting_wrapper").call(this, n, t, this.get_opt("suffix")), n.is("textarea, input") ? (s = n.val(), l = s.slice(0, Math.max(this.query.head_pos - this.at.length, 0)), c = "" + l + u + s.slice(this.query.end_pos || 0), n.val(c), n.caret("pos", l.length + u.length, {iframe: this.app.iframe})) : (o = this.range) ? (i = o.startOffset - (this.query.end_pos - this.query.head_pos) - this.at.length, o.setStart(o.endContainer, Math.max(i, 0)), o.setEnd(o.endContainer, o.endOffset), o.deleteContents(), r = e(u, this.app.document)[0], o.insertNode(r), o.setEndAfter(r), o.collapse(!1), a = this.app.window.getSelection(), a.removeAllRanges(), a.addRange(o)) : (o = this.ie8_range) && (o.moveStart("character", this.query.end_pos - this.query.head_pos - this.at.length), o.pasteHTML(u), o.collapse(!1), o.select()), n.is(":focus") || n.focus(), n.change()
            }, n.prototype.render_view = function (e) {
                var t;
                return t = this.get_opt("search_key"), e = this.callbacks("sorter").call(this, this.query.text, e.slice(0, 1001), t), this.view.render(e.slice(0, this.get_opt("limit")))
            }, n.prototype.look_up = function () {
                var t, n;
                if (t = this.catch_query())return n = function (e) {
                    return e && e.length > 0 ? this.render_view(e) : this.view.hide()
                }, this.model.query(t.text, e.proxy(n, this)), t
            }, n
        }(), s = function () {
            function t(e) {
                this.context = e, this.at = this.context.at, this.storage = this.context.$inputor
            }

            return t.prototype.destroy = function () {
                return this.storage.data(this.at, null)
            }, t.prototype.saved = function () {
                return this.fetch() > 0
            }, t.prototype.query = function (e, t) {
                var n, r, i;
                return n = this.fetch(), r = this.context.get_opt("search_key"), n = this.context.callbacks("filter").call(this.context, e, n, r) || [], i = this.context.callbacks("remote_filter"), n.length > 0 || !i && 0 === n.length ? t(n) : i.call(this.context, e, t)
            }, t.prototype.fetch = function () {
                return this.storage.data(this.at) || []
            }, t.prototype.save = function (e) {
                return this.storage.data(this.at, this.context.callbacks("before_save").call(this.context, e || []))
            }, t.prototype.load = function (e) {
                return !this.saved() && e ? this._load(e) : void 0
            }, t.prototype.reload = function (e) {
                return this._load(e)
            }, t.prototype._load = function (t) {
                return "string" == typeof t ? e.ajax(t, {dataType: "json"}).done(function (e) {
                    return function (t) {
                        return e.save(t)
                    }
                }(this)) : this.save(t)
            }, t
        }(), l = function () {
            function t(t) {
                this.context = t, this.$el = e("<div class='atwho-view'><ul class='atwho-view-ul'></ul></div>"), this.timeout_id = null, this.context.$el.append(this.$el), this.bind_event()
            }

            return t.prototype.init = function () {
                var e;
                return e = this.context.get_opt("alias") || this.context.at.charCodeAt(0), this.$el.attr({id: "at-view-" + e})
            }, t.prototype.destroy = function () {
                return this.$el.remove()
            }, t.prototype.bind_event = function () {
                var t;
                return t = this.$el.find("ul"), t.on("mouseenter.atwho-view", "li", function (n) {
                    return t.find(".cur").removeClass("cur"), e(n.currentTarget).addClass("cur")
                }).on("click", function (e) {
                    return function (t) {
                        return e.choose(t), t.preventDefault()
                    }
                }(this))
            }, t.prototype.visible = function () {
                return this.$el.is(":visible")
            }, t.prototype.choose = function (e) {
                var t, n;
                return (t = this.$el.find(".cur")).length && (n = this.context.insert_content_for(t), this.context.insert(this.context.callbacks("before_insert").call(this.context, n, t), t), this.context.trigger("inserted", [t, e]), this.hide(e)), this.context.get_opt("hide_without_suffix") ? this.stop_showing = !0 : void 0
            }, t.prototype.reposition = function (t) {
                var n, r;
                return t.bottom + this.$el.height() - e(window).scrollTop() > e(window).height() && (t.bottom = t.top - this.$el.height()), n = {
                    left: t.left,
                    top: t.bottom
                }, null != (r = this.context.callbacks("before_reposition")) && r.call(this.context, n), this.$el.offset(n), this.context.trigger("reposition", [n])
            }, t.prototype.next = function () {
                var e, t;
                return e = this.$el.find(".cur").removeClass("cur"), t = e.next(), t.length || (t = this.$el.find("li:first")), t.addClass("cur")
            }, t.prototype.prev = function () {
                var e, t;
                return e = this.$el.find(".cur").removeClass("cur"), t = e.prev(), t.length || (t = this.$el.find("li:last")), t.addClass("cur")
            }, t.prototype.show = function () {
                var e;
                return this.stop_showing ? void(this.stop_showing = !1) : (this.context.mark_range(), this.visible() || (this.$el.show(), this.context.trigger("shown")), (e = this.context.rect()) ? this.reposition(e) : void 0)
            }, t.prototype.hide = function (e, t) {
                var n;
                if (this.visible())return isNaN(t) ? (this.context.reset_rect(), this.$el.hide(), this.context.trigger("hidden", [e])) : (n = function (e) {
                    return function () {
                        return e.hide()
                    }
                }(this), clearTimeout(this.timeout_id), this.timeout_id = setTimeout(n, t))
            }, t.prototype.render = function (t) {
                var n, r, i, o, a, s, l;
                if (!(e.isArray(t) && t.length > 0))return void this.hide();
                for (this.$el.find("ul").empty(), r = this.$el.find("ul"), a = this.context.get_opt("tpl"), s = 0, l = t.length; l > s; s++)i = t[s], i = e.extend({}, i, {"atwho-at": this.context.at}), o = this.context.callbacks("tpl_eval").call(this.context, a, i), n = e(this.context.callbacks("highlighter").call(this.context, o, this.context.query.text)), n.data("item-data", i), r.append(n);
                return this.show(), this.context.get_opt("highlight_first") ? r.find("li:first").addClass("cur") : void 0
            }, t
        }(), a = {
            DOWN: 40,
            UP: 38,
            ESC: 27,
            TAB: 9,
            ENTER: 13,
            CTRL: 17,
            P: 80,
            N: 78
        }, o = {
            before_save: function (t) {
                var n, r, i, o;
                if (!e.isArray(t))return t;
                for (o = [], r = 0, i = t.length; i > r; r++)n = t[r], o.push(e.isPlainObject(n) ? n : {name: n});
                return o
            }, matcher: function (e, t, n) {
                var r, i;
                return e = e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), n && (e = "(?:^|\\s)" + e), i = new RegExp(e + "([A-Za-z0-9_+-]*)$|" + e + "([^\\x00-\\xff]*)$", "gi"), r = i.exec(t), r ? r[2] || r[1] : null
            }, filter: function (e, t, n) {
                var r, i, o, a;
                for (a = [], i = 0, o = t.length; o > i; i++)r = t[i], ~r[n].toLowerCase().indexOf(e.toLowerCase()) && a.push(r);
                return a
            }, remote_filter: null, sorter: function (e, t, n) {
                var r, i, o, a;
                if (!e)return t;
                for (a = [], i = 0, o = t.length; o > i; i++)r = t[i], r.atwho_order = r[n].toLowerCase().indexOf(e.toLowerCase()), r.atwho_order > -1 && a.push(r);
                return a.sort(function (e, t) {
                    return e.atwho_order - t.atwho_order
                })
            }, tpl_eval: function (e, t) {
                var n;
                try {
                    return e.replace(/\$\{([^\}]*)\}/g, function (e, n) {
                        return t[n]
                    })
                } catch (r) {
                    return n = r, ""
                }
            }, highlighter: function (e, t) {
                var n;
                return t ? (n = new RegExp(">\\s*(\\w*?)(" + t.replace("+", "\\+") + ")(\\w*)\\s*<", "ig"), e.replace(n, function (e, t, n, r) {
                    return "> " + t + "<strong>" + n + "</strong>" + r + " <"
                })) : e
            }, before_insert: function (e) {
                return e
            }, inserting_wrapper: function (e, t, n) {
                var r, i;
                return r = "" === n ? n : n || " ", e.is("textarea, input") ? "" + t + r : "true" === e.attr("contentEditable") ? (r = "" === n ? n : n || "&nbsp;", /firefox/i.test(navigator.userAgent) ? i = "<span>" + t + r + "</span>" : (n = "<span contenteditable='false'>" + r + "<span>", i = "<span contenteditable='false'>" + t + n + "</span>"), this.app.document.selection && (i = "<span contenteditable='true'>" + t + "</span>"), i) : void 0
            }
        }, n = {
            load: function (e, t) {
                var n;
                return (n = this.controller(e)) ? n.model.load(t) : void 0
            }, setIframe: function (e) {
                return this.setIframe(e), null
            }, run: function () {
                return this.dispatch()
            }, destroy: function () {
                return this.shutdown(), this.$inputor.data("atwho", null)
            }
        }, t = e("<div id='atwho-container'></div>"), e.fn.atwho = function (i) {
            var o, a;
            return a = arguments, e("body").append(t), o = null, this.filter("textarea, input, [contenteditable=true]").each(function () {
                var t, s;
                return (s = (t = e(this)).data("atwho")) || t.data("atwho", s = new r(this)), "object" != typeof i && i ? n[i] && s ? o = n[i].apply(s, Array.prototype.slice.call(a, 1)) : e.error("Method " + i + " does not exist on jQuery.caret") : s.reg(i.at, i)
            }), o || this
        }, e.fn.atwho["default"] = {
            at: void 0,
            alias: void 0,
            data: null,
            tpl: "<li data-value='${atwho-at}${name}'>${name}</li>",
            insert_tpl: "<span id='${id}'>${atwho-data-value}</span>",
            callbacks: o,
            search_key: "name",
            suffix: void 0,
            hide_without_suffix: !1,
            start_with_space: !0,
            highlight_first: !0,
            limit: 5,
            max_len: 20,
            display_timeout: 300,
            delay: null
        }
    })
}.call(this), function () {
    !function (e) {
        return "function" == typeof define && define.amd ? define("caret", ["jquery"], e) : e(window.jQuery)
    }(function (e) {
        "use strict";
        var t, n, r, i, o, a, s, l, c, u, d;
        return u = "caret", t = function () {
            function t(e) {
                this.$inputor = e, this.domInputor = this.$inputor[0]
            }

            return t.prototype.setPos = function () {
                return this.domInputor
            }, t.prototype.getIEPosition = function () {
                return e.noop()
            }, t.prototype.getPosition = function () {
                return e.noop()
            }, t.prototype.getOldIEPos = function () {
                var e, t;
                return t = s.selection.createRange(), e = s.body.createTextRange(), e.moveToElementText(this.domInputor), e.setEndPoint("EndToEnd", t), e.text.length
            }, t.prototype.getPos = function () {
                var e, t, n;
                return (n = this.range()) ? (e = n.cloneRange(), e.selectNodeContents(this.domInputor), e.setEnd(n.endContainer, n.endOffset), t = e.toString().length, e.detach(), t) : s.selection ? this.getOldIEPos() : void 0
            }, t.prototype.getOldIEOffset = function () {
                var e, t;
                return e = s.selection.createRange().duplicate(), e.moveStart("character", -1), t = e.getBoundingClientRect(), {
                    height: t.bottom - t.top,
                    left: t.left,
                    top: t.top
                }
            }, t.prototype.getOffset = function () {
                var t, n, r, i;
                if (c.getSelection && (r = this.range())) {
                    if (r.endOffset - 1 < 0)return null;
                    t = r.cloneRange(), t.setStart(r.endContainer, r.endOffset - 1), t.setEnd(r.endContainer, r.endOffset), i = t.getBoundingClientRect(), n = {
                        height: i.height,
                        left: i.left + i.width,
                        top: i.top
                    }, t.detach()
                } else s.selection && (n = this.getOldIEOffset());
                return n && !l && (n.top += e(c).scrollTop(), n.left += e(c).scrollLeft()), n
            }, t.prototype.range = function () {
                var e;
                return c.getSelection ? (e = c.getSelection(), e.rangeCount > 0 ? e.getRangeAt(0) : null) : void 0
            }, t
        }(), n = function () {
            function t(e) {
                this.$inputor = e, this.domInputor = this.$inputor[0]
            }

            return t.prototype.getIEPos = function () {
                var e, t, n, r, i, o, a;
                return t = this.domInputor, o = s.selection.createRange(), i = 0, o && o.parentElement() === t && (r = t.value.replace(/\r\n/g, "\n"), n = r.length, a = t.createTextRange(), a.moveToBookmark(o.getBookmark()), e = t.createTextRange(), e.collapse(!1), i = a.compareEndPoints("StartToEnd", e) > -1 ? n : -a.moveStart("character", -n)), i
            }, t.prototype.getPos = function () {
                return s.selection ? this.getIEPos() : this.domInputor.selectionStart
            }, t.prototype.setPos = function (e) {
                var t, n;
                return t = this.domInputor, s.selection ? (n = t.createTextRange(), n.move("character", e), n.select()) : t.setSelectionRange && t.setSelectionRange(e, e), t
            }, t.prototype.getIEOffset = function (e) {
                var t, n, r, i;
                return n = this.domInputor.createTextRange(), e || (e = this.getPos()), n.move("character", e), r = n.boundingLeft, i = n.boundingTop, t = n.boundingHeight, {
                    left: r,
                    top: i,
                    height: t
                }
            }, t.prototype.getOffset = function (t) {
                var n, r, i;
                return n = this.$inputor, s.selection ? (r = this.getIEOffset(t), r.top += e(c).scrollTop() + n.scrollTop(), r.left += e(c).scrollLeft() + n.scrollLeft(), r) : (r = n.offset(), i = this.getPosition(t), r = {
                    left: r.left + i.left - n.scrollLeft(),
                    top: r.top + i.top - n.scrollTop(),
                    height: i.height
                })
            }, t.prototype.getPosition = function (e) {
                var t, n, i, o, a, s, l;
                return t = this.$inputor, o = function (e) {
                    return e.replace(/</g, "&lt").replace(/>/g, "&gt").replace(/`/g, "&#96").replace(/"/g, "&quot").replace(/\r\n|\r|\n/g, "<br />")
                }, void 0 === e && (e = this.getPos()), l = t.val().slice(0, e), i = t.val().slice(e), a = "<span style='position: relative; display: inline;'>" + o(l) + "</span>", a += "<span id='caret' style='position: relative; display: inline;'>|</span>", a += "<span style='position: relative; display: inline;'>" + o(i) + "</span>", s = new r(t), n = s.create(a).rect()
            }, t.prototype.getIEPosition = function (e) {
                var t, n, r, i, o;
                return r = this.getIEOffset(e), n = this.$inputor.offset(), i = r.left - n.left, o = r.top - n.top, t = r.height, {
                    left: i,
                    top: o,
                    height: t
                }
            }, t
        }(), r = function () {
            function t(e) {
                this.$inputor = e
            }

            return t.prototype.css_attr = ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopStyle", "borderRightStyle", "borderBottomStyle", "borderLeftStyle", "borderTopWidth", "boxSizing", "fontFamily", "fontSize", "fontWeight", "height", "letterSpacing", "lineHeight", "marginBottom", "marginLeft", "marginRight", "marginTop", "outlineWidth", "overflow", "overflowX", "overflowY", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "textAlign", "textOverflow", "textTransform", "whiteSpace", "wordBreak", "wordWrap"], t.prototype.mirrorCss = function () {
                var t, n = this;
                return t = {
                    position: "absolute",
                    left: -9999,
                    top: 0,
                    zIndex: -2e4
                }, "TEXTAREA" === this.$inputor.prop("tagName") && this.css_attr.push("width"), e.each(this.css_attr, function (e, r) {
                    return t[r] = n.$inputor.css(r)
                }), t
            }, t.prototype.create = function (t) {
                return this.$mirror = e("<div></div>"), this.$mirror.css(this.mirrorCss()), this.$mirror.html(t), this.$inputor.after(this.$mirror), this
            }, t.prototype.rect = function () {
                var e, t, n;
                return e = this.$mirror.find("#caret"), t = e.position(), n = {
                    left: t.left,
                    top: t.top,
                    height: e.height()
                }, this.$mirror.remove(), n
            }, t
        }(), i = {
            contentEditable: function (e) {
                return !(!e[0].contentEditable || "true" !== e[0].contentEditable)
            }
        }, a = {
            pos: function (e) {
                return e || 0 === e ? this.setPos(e) : this.getPos()
            }, position: function (e) {
                return s.selection ? this.getIEPosition(e) : this.getPosition(e)
            }, offset: function (t) {
                var n, r;
                return r = this.getOffset(t), l && (n = e(l).offset(), r.top += n.top, r.left += n.left), r
            }
        }, s = null, c = null, l = null, d = function (e) {
            var t;
            return (t = null != e ? e.iframe : void 0) ? (l = t, c = t.contentWindow, s = t.contentDocument || c.document) : (l = void 0, c = window, s = document)
        }, o = function (e) {
            var t;
            s = e[0].ownerDocument, c = s.defaultView || s.parentWindow;
            try {
                return l = c.frameElement
            } catch (n) {
                t = n
            }
        }, e.fn.caret = function (r, o, s) {
            var l;
            return a[r] ? (e.isPlainObject(o) ? (d(o), o = void 0) : d(s), l = i.contentEditable(this) ? new t(this) : new n(this), a[r].apply(l, [o])) : e.error("Method " + r + " does not exist on jQuery.caret")
        }, e.fn.caret.EditableCaret = t, e.fn.caret.InputCaret = n, e.fn.caret.Utils = i, e.fn.caret.apis = a
    })
}.call(this), define("comment", ["jquery", "sfModal", "jquery_tmpl", "main", "highLight", "likeHate", "statusToggle", "jquery_autosize", "atwho", "caret"], function (e, t, n, r, i) {
    var o, a;
    return o = function (e) {
        var t;
        return e += "", t = {
            101: "question",
            102: "answer",
            119: "article",
            116: "activity",
            133: "note"
        }, t[e.slice(0, 3)]
    }, a = '<div class="widget-comments__item hover-show ${pos}" id="${id}">    <div class="votes widget-vote">        <button class="like {{if isLiked}}active{{/if}}" data-id="${id}" type="button" {{if isLiked}}data-do="unlike" {{else}}data-do="like" {{/if}} data-type="comment"></button><span class="count">{{if votes!=0 }}${votes}{{else}}&nbsp;{{/if}}</span>    </div>    <div class="comment-content wordbreak">  {{if replyUser}}<span>回复 <a href="${replyUser.url}">${replyUser.name}</a>：</span>{{/if}}        <div class="content fmt">{{html parsedText }} </div>        <textarea name="text" rows="3" id="commentText-${id}" class="editTextarea form-control mb10 hidden">${originalText}</textarea>        <p class="comment-meta">            <a href="/c/${id}" class="text-muted">#${index}</a>&nbsp;<a href="${user.url}" class="commentUser" data-userid="${user.id}" data-username="${user.name}" data-userslug="${user.slug}" data-useravatar="${user.avatarUrl}"><strong>${user.name}</strong></a> &middot; <span class="createdDate">${createdDate}</span>            {{if !isSelf}}            &middot; <a href="#" class="commentReply" data-userid="${user.id}" data-id="${id}" data-username="${user.name}">回复</a>            {{/if}}            {{if canEdit}}            <span class="pull-right editBtns hidden">                <button class="btn btn-link btn-xs cancel" type="button">取消</button>                <button class="btn btn-primary btn-xs edit ml10" type="button">保存</button>            </span>            {{/if}}            <span class="pull-right commentTools hover-show-obj">                {{if canEdit}}<a href="javascript:void(0);" class="commentEdit ml10" data-id="${id}">编辑</a>{{/if}}                {{if canDelete}}<a href="javascript:void(0);" class="commentDel ml10" data-id="${id}" data-username="${user.name}">删除</a>{{/if}}                {{if !isSelf}}<a href="#911" class="ml10" data-toggle="modal" data-target="#911" data-type="comment" data-id="${id}" data-typetext="评论" data-placement="top" title="举报">举报</a>{{/if}}            </span>        </p>    </div></div>', {
        init: function (t) {
            var n, i, o, a;
            t.removeClass("hidden"), i = e(".comment-helper", t), o = e(".toggle-comment-helper", t), o.click(function () {
                i.toggle()
            }), a = i.data("rank"), 15 > a && i.show(), n = e("#activate"), n.length > 0 && e(".widget-comments__form textarea", t).focus(function () {
                n.modal("show")
            }), e(".widget-comments__form textarea", t).atwho({
                at: "@", callbacks: {
                    remote_filter: function (n, r) {
                        var i, o, a, s;
                        if (!n) {
                            if (a = t.data("id") + "", s = [], 0 === a.indexOf("101") || 0 === a.indexOf("102"))e.getJSON("/api/users/search", {questionId: e("#questionTitle").data("id")}, function (t) {
                                t.status || (s = t.data, e(".comment-meta").each(function () {
                                    var t, n, r;
                                    t = e(this).find(".commentUser"), n = {
                                        id: t.data("userid"),
                                        name: t.data("username"),
                                        slug: t.data("userslug"),
                                        url: "/u/" + t.data("userslug"),
                                        avatarUrl: t.data("useravatar")
                                    }, r = !1, s.forEach(function (e) {
                                        e.slug === n.slug && (r = !0)
                                    }), r || s.push(n)
                                }), r(s))
                            }); else {
                                if (0 !== a.indexOf("119"))return;
                                i = e(".author"), o = {
                                    id: i.data("userid"),
                                    name: i.data("username"),
                                    slug: i.data("userslug"),
                                    url: "/u/" + i.data("userslug"),
                                    avatarUrl: i.data("useravatar")
                                }, s.push(o)
                            }
                            return e(".comment-meta").each(function () {
                                var t, n, r;
                                t = e(this).find(".commentUser"), n = {
                                    id: t.data("userid"),
                                    name: t.data("username"),
                                    slug: t.data("userslug"),
                                    url: "/u/" + t.data("userslug"),
                                    avatarUrl: t.data("useravatar")
                                }, r = !1, s.forEach(function (e) {
                                    e.slug === n.slug && (r = !0)
                                }), r || s.push(n)
                            }), void r(s)
                        }
                        e.getJSON("/api/users/search", {q: n}, function (e) {
                            e.status || r(e.data)
                        })
                    }, tpl_eval: function (e, t) {
                        return '<li data-value="@' + t.name + '">' + (t.avatarUrl ? '<img class="avatar-24 mr10" src="' + t.avatarUrl + '" />' : "") + t.name + " &nbsp; <small>@" + t.slug + "</small></li>"
                    }
                }
            }).on("keydown", function (t) {
                var n;
                return n = e(this).parents(".widget-comments__form").find("button[type=submit]"), !t.ctrlKey && !t.metaKey || 13 !== t.keyCode || n.attr("disabled") ? void 0 : (n.click(), !1)
            }).autosize(), e(".commentLogin").click(function () {
                r.login()
            })
        }, get: function (t, n, r, s, l) {
            var c, u, d;
            return c = this, u = [], d = r, e(".ajax-error", n).remove(), d && n.hasClass("show") ? void n.removeClass("show").hide() : (n.prepend('<span class="load-text text-muted">加载中<br /></span>'), void e.get("/api/" + o(t) + "/" + t + "/comments", function (r) {
                var o, d, f, p;
                if (e(".load-text", n).remove(), e(".widget-comments__item", n).remove(), 0 === r.status) {
                    if (null === r.data)return;
                    r.data.total > 0 && (d = e(".showMoreComments[data-target=#comment-" + t + "]"), d.next(".widget-comments__form").removeClass("hidden"), d.remove(), e("[data-target=#comment-" + t + "]").text(r.data.total + " 评论")), e.each(r.data.rows, function (t, n) {
                        n.userId && (n.isSelf = n.userId === e("#SFUserId").attr("value"), n.pos = n.id === s ? "high" : "", n.parsedText = n.parsedText.replace(/^[\r\n]/g, ""), -1 !== n.parsedText.indexOf("<p></p>") && (n.parsedText = n.parsedText.replace(/<[\/a-z]+>/g, ""), n.parsedText = "<p>" + n.parsedText + "</p>"), u.push(n), n.index = t + 1)
                    }), n.prepend(e.tmpl(a, u)), i(n), s && s.length && (f = e("#" + s.join(", #")), e("body").scrollTop(f.eq(0).offset().top - 20), f.addClass("comment-warning"), window.setTimeout(function () {
                        return f.removeClass("comment-warning")
                    }, 5e3)), n.on("click", ".commentEdit", function () {
                        return c.edit({id: e(this).data("id"), content: e(this).parents(".comment-content")}), !1
                    }), n.on("click", ".commentDel", function () {
                        return c["delete"]({
                            id: e(this).data("id"),
                            commentId: t,
                            username: e(this).data("username")
                        }), !1
                    }), n.on("click", ".commentReply", function () {
                        return c.reply({
                            userId: e(this).data("userid"),
                            username: e(this).data("username"),
                            commentId: e(this).data("id"),
                            form: e(this).parents(".widget-comments__item").siblings(".widget-comments__form")
                        }), !1
                    }), n.find(".like").likeHate(), p = new RegExp(window.location.host, "ig"), o = void 0, n.find("a").each(function () {
                        o = e(this), !p.test(o.attr("href")) && /^http/.test(o.attr("href")) && o.attr("target", "_blank")
                    }), n.data("opened", !0), 0 === r.data.rows.length && (/^101/.test(t) || /^102/.test(t)) && e("#commentText-" + t).focus(), l && l()
                }
            }))
        }, set: function (t) {
            var n;
            e(".ajax-error", t.form.parent()).remove(), t.form.before('<p class="load-text text-muted">加载中</p>'), t.trigger.attr("disabled", "disabled"), n = t.trigger.data("id"), e.post("/api/" + o(n) + "/" + n + "/comments/add", {
                text: t.textarea.val(),
                reply: t.reply || ""
            }, function (n) {
                var r;
                e(".load-text", t.form.parent()).remove(), t.trigger.removeAttr("disabled"), 0 === n.status && (r = n.data.comment, t.textarea.val("").attr("style", "height:56px"), t.form.removeData("reply").find(".reply").remove(), r.isSelf = r.userId === e("#SFUserId").attr("value"), r.canDelete = !0, r.canEdit = !0, e("[data-target=#comment-" + t.textarea.data("id") + "]").text(n.data.total + " 评论"), r.index = n.data.total, t.form.before(e.tmpl(a, r)))
            })
        }, reply: function (t) {
            var n, r;
            r = t.userId, n = t.form, e(".reply", n).remove(), n.removeData("reply"), n.siblings(".reply").remove(), n.data("reply", r).prepend('<div class="reply col-sm-12 mb5"><span>回复：' + t.username + '</span> <a href="" class="removeReply">[&times;]</a></div>'), n.find("textarea").focus(), e(".reply .removeReply", n).click(function () {
                return e(this).parent().remove(), n.removeData("reply"), !1
            })
        }, "delete": function (n) {
            var r, i;
            r = this, i = n.commentId, t({
                title: "删除评论",
                content: "确认删除来自「" + n.username + "」的评论吗？",
                closeText: "取消",
                doneClass: "btn-danger",
                doneText: "删除",
                doneFn: function () {
                    e(this).text("加载中").attr("disabled", "disabled"), e.post("/api/comment/" + n.id + "/delete", function (n) {
                        0 === n.status && (e("[data-target=#comment-" + i + "]").text(n.data + " 评论"), r.get(i, e("#comment-" + i), !1), t("hide"))
                    })
                }
            })
        }, edit: function (t) {
            var n, r, i, o, a, s, l, c, u;
            r = t.content, u = t.id, c = r.find(".content").height(), s = r.find(".content").addClass("hidden"), o = r.find(".editBtns").removeClass("hidden"), n = o.find(".cancel"), i = o.find(".edit"), a = r.find(".commentEdit").addClass("hidden"), l = r.find(".editTextarea").css("height", c).removeClass("hidden").autosize().focus(), r.find(".commentTools").addClass("hidden"), l.on("keydown", function (t) {
                return (t.ctrlKey || t.metaKey) && 13 === t.keyCode ? (e(this).siblings(".comment-meta").find("button.edit").click(), !1) : 27 === t.keyCode ? (e(this).siblings(".comment-meta").find("button.cancel").click(), !1) : 9 === t.keyCode ? (e(this).siblings(".comment-meta").find("button.edit").focus(), !1) : void 0
            }), n.click(function () {
                return l.addClass("hidden"), o.addClass("hidden"), s.removeClass("hidden"), a.removeClass("hidden"), r.find(".commentTools").removeClass("hidden"), r.find(".editTextarea").removeClass("error"), r.find(".error--msg").remove(), !1
            }).on("keydown", function (t) {
                return 9 === t.keyCode ? (e(this).parent().siblings(".commentDel").focus(), r.find(".commentTools").removeClass("hidden"), !1) : void 0
            }), i.click(function () {
                e.post("/api/comment/" + u + "/edit", {text: l.val()}, function (e) {
                    0 === e.status && (s.html(e.data.parsedText), r.find(".createdDate").text(e.data.createdDate), n.click(), r.find(".commentTools").removeClass("hidden"))
                })
            }).on("keydown", function (t) {
                return 9 === t.keyCode ? (e(this).siblings("button.cancel").focus(), !1) : void 0
            })
        }
    }
}), !function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("sf_share", t) : "object" == typeof exports ? exports.WidgetShare = t() : e.WidgetShare = t()
}(this, function () {
    return function (e) {
        function t(r) {
            if (n[r])return n[r].exports;
            var i = n[r] = {exports: {}, id: r, loaded: !1};
            return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
        }

        var n = {};
        return t.m = e, t.c = n, t.p = "", t(0)
    }([function (e, t, n) {
        e.exports = n(1)
    }, function (e, t, n) {
        var r = n(4);
        e.exports = r
    }, function (e) {
        function t() {
        }

        function n(e, t) {
            var n;
            return this.element = document.querySelector(e), this.el = {
                head: document.getElementsByTagName("head")[0],
                body: document.getElementsByTagName("body")[0]
            }, this.config = {
                enabled_networks: 0,
                protocol: -1 === ["http", "https"].indexOf(window.location.href.split(":")[0]) ? "https://" : "//",
                url: this.data(this.element, "url") || window.location.href,
                text: this.data(this.element, "text"),
                caption: null,
                title: this.data(this.element, "text") ? this.data(this.element, "text") : (n = document.querySelector('meta[property="og:title"]') || document.querySelector('meta[name="twitter:title"]')) ? n.getAttribute("content") : (n = document.querySelector("title")) ? n.innerText : void 0,
                image: this.data(this.element, "image") || "http://s.segmentfault.com/img/sf-114.png",
                pic: this.data(this.element, "pic") || "http://static.segmentfault.com/global/img/touch-icon.png",
                description: (n = document.querySelector('meta[property="og:description"]') || document.querySelector('meta[name="twitter:description"]') || document.querySelector('meta[name="description"]')) ? n.getAttribute("content") : "",
                networks: {
                    weibo: {
                        enabled: !0,
                        url: null,
                        appkey: null,
                        title: null,
                        text: null,
                        caption: null,
                        description: null,
                        image: null,
                        pic: null,
                        appkey: "1742025894"
                    },
                    wechart: {enabled: !0, url: null},
                    renren: {
                        enabled: !0,
                        url: null,
                        title: null,
                        text: null,
                        description: null,
                        image: null,
                        comment: null
                    },
                    tqq: {enabled: !0, url: null, appkey: "", title: null, text: null, image: null},
                    douban: {
                        enabled: !0,
                        url: null,
                        href: null,
                        appkey: null,
                        text: null,
                        title: null,
                        caption: null,
                        description: null,
                        image: null,
                        comment: null
                    },
                    google_plus: {enabled: !1, url: null},
                    twitter: {enabled: !0, url: null, text: null, description: null},
                    facebook: {
                        enabled: !0,
                        load_sdk: !0,
                        url: null,
                        app_id: null,
                        title: null,
                        caption: null,
                        description: null,
                        image: null
                    },
                    pinterest: {enabled: !1, url: null, image: null, description: null},
                    email: {enabled: !1, title: null, description: null}
                }
            }, this.setup(e, t), this
        }

        "classList"in document.documentElement || !Object.defineProperty || "undefined" == typeof HTMLElement || Object.defineProperty(HTMLElement.prototype, "classList", {
            get: function () {
                var e, t, n;
                return n = function (e) {
                    return function (n) {
                        var r, i;
                        r = t.className.split(/\s+/), i = r.indexOf(n), e(r, i, n), t.className = r.join(" ")
                    }
                }, t = this, e = {
                    add: n(function (e, t, n) {
                        ~t || e.push(n)
                    }), remove: n(function (e, t) {
                        ~t && e.splice(t, 1)
                    }), toggle: n(function (e, t, n) {
                        ~t ? e.splice(t, 1) : e.push(n)
                    }), contains: function (e) {
                        return !!~t.className.split(/\s+/).indexOf(e)
                    }, item: function (e) {
                        return t.className.split(/\s+/)[e] || null
                    }
                }, Object.defineProperty(e, "length", {
                    get: function () {
                        return t.className.split(/\s+/).length
                    }
                }), e
            }
        });
        var r = {}.hasOwnProperty, i = function (e, t) {
            function n() {
                this.constructor = e
            }

            for (var i in t)r.call(t, i) && (e[i] = t[i]);
            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
        };
        t.prototype.extend = function (e, t, n) {
            var r, i;
            for (i in t)r = void 0 !== e[i], r && "object" == typeof t[i] ? this.extend(e[i], t[i], n) : (n || !r) && (e[i] = t[i])
        }, t.prototype.hide = function (e) {
            return e.style.display = "none"
        }, t.prototype.show = function (e) {
            return e.style.display = "block"
        }, t.prototype.has_class = function (e, t) {
            return e.classList.contains(t)
        }, t.prototype.add_class = function (e, t) {
            return e.classList.add(t)
        }, t.prototype.remove_class = function (e, t) {
            return e.classList.remove(t)
        }, t.prototype.is_encoded = function (e) {
            return e = e.replace(/\%/g, ""), decodeURIComponent(e) !== e
        }, t.prototype.encode = function (e) {
            return this.is_encoded(e) ? e : encodeURIComponent(e)
        }, t.prototype.data = function (e, t) {
            return e.getAttribute("data-" + t)
        }, t.prototype.popover = function (e) {
            var t = document.createElement("div");
            t.innerHTML = '<div class="share-modal"> <div class="share-modal-content"> <p class="share-modal-title">打开微信“扫一扫”，打开网页后点击屏幕右上角分享按钮</p> <button type="button" class="share-modal-close">×</button> <img width="300" height="300" src="' + e + '"> </div> </div>', document.body.appendChild(t);
            var n = document.getElementsByClassName("share-modal")[0], r = document.getElementsByClassName("share-modal-close")[0];
            r.onclick = function () {
                n.parentNode.removeChild(n), r.onclick = null
            }
        }, t.prototype.popup = function (e, t) {
            var n, r, i, o;
            return null == t && (t = {}), r = {
                width: 500,
                height: 350
            }, r.top = screen.height / 2 - r.height / 2, r.left = screen.width / 2 - r.width / 2, i = function () {
                var e;
                e = [];
                for (n in t)o = t[n], e.push(n + "=" + this.encode(o));
                return e
            }.call(this).join("&"), i && (i = "?" + i), window.open(e + i, "_blank", "toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=550,height=500")
        }, i(n, t), n.prototype.setup = function (e, t) {
            var n, r, i, o, a;
            for (i = document.querySelectorAll(e), this.extend(this.config, t, !0), this.set_global_configuration(), this.normalize_network_configuration(), n = o = 0, a = i.length; a > o; n = ++o)r = i[n], this.setup_instance(e, n);
            this.config.callback()
        }, n.prototype.setup_instance = function (e, t) {
            var n, r, i, o, a, s, l;
            for (n = document.querySelectorAll(e)[t], this.hide(n), this.add_class(n, "sharer-" + t), this.inject_html(n), this.show(n), i = n.getElementsByTagName("li"), l = this, s = [], t = o = 0, a = i.length; a > o; t = ++o)r = i[t], s.push(r.addEventListener("click", function () {
                return l.event_network(n, this)
            }));
            return s
        }, n.prototype.event_network = function (e, t) {
            var n;
            return n = t.getAttribute("data-network"), this["network_" + n]()
        }, n.prototype["public"] = function (e) {
            var t, n, r, i, o, a, s;
            for (a = document.querySelectorAll(this.element), s = [], n = i = 0, o = a.length; o > i; n = ++i)r = a[n], t = r.getElementsByClassName("social")[0], s.push(this["event_" + e](t));
            return s
        }, n.prototype.network_facebook = function () {
            return this.config.networks.facebook.load_sdk ? window.FB ? FB.ui({
                method: "feed",
                name: this.config.networks.facebook.title,
                link: this.config.networks.facebook.url,
                picture: this.config.networks.facebook.image,
                caption: this.config.networks.facebook.caption,
                description: this.config.networks.facebook.description
            }) : console.error("The Facebook JS SDK hasn't loaded yet.") : this.popup("https://www.facebook.com/sharer/sharer.php", {u: this.config.networks.facebook.url})
        }, n.prototype.network_twitter = function () {
            return this.popup("https://twitter.com/intent/tweet", {
                text: this.config.networks.twitter.text,
                url: this.config.networks.twitter.url + "?utm_source=Twitter&utm_medium=shareLink&utm_campaign=socialShare"
            })
        }, n.prototype.network_google_plus = function () {
            return this.popup("https://plus.google.com/share", {url: this.config.networks.google_plus.url})
        }, n.prototype.network_pinterest = function () {
            return this.popup("https://www.pinterest.com/pin/create/button", {
                url: this.config.networks.pinterest.url,
                media: this.config.networks.pinterest.image,
                description: this.config.networks.pinterest.description
            })
        }, n.prototype.network_email = function () {
            return this.popup("mailto:", {
                subject: this.config.networks.email.title,
                body: this.config.networks.email.description
            })
        }, n.prototype.network_weibo = function () {
            return this.popup("http://service.weibo.com/share/share.php", {
                title: this.config.networks.weibo.title.replace(/"/g, "%2522"),
                url: this.config.networks.weibo.url + "?utm_source=Weibo&utm_medium=shareLink&utm_campaign=socialShare",
                pic: this.config.networks.weibo.image,
                appkey: this.config.networks.weibo.appkey,
                searchPic: "false"
            })
        }, n.prototype.network_wechart = function () {
            return this.popover("http://qr.liantu.com/api.php?text=" + this.config.networks.wechart.url + "?utm_source=Wechat&utm_medium=shareLink&utm_campaign=socialShare")
        }, n.prototype.network_renren = function () {
            return this.popup("http://widget.renren.com/dialog/share", {
                resourceUrl: this.config.networks.renren.image,
                pic: this.config.networks.renren.image,
                srcUrl: this.config.networks.renren.url + "?utm_source=Renren&utm_medium=shareLink&utm_campaign=socialShare",
                title: this.config.networks.renren.title,
                description: this.config.networks.renren.description,
                comment: this.config.networks.renren.comment || ""
            })
        }, n.prototype.network_tqq = function () {
            return this.popup("http://share.v.t.qq.com/index.php", {
                c: "share",
                a: "index",
                url: this.config.networks.tqq.url + "?utm_source=Tqq&utm_medium=shareLink&utm_campaign=socialShare",
                title: this.config.networks.tqq.title,
                appkey: this.config.networks.tqq.appkey,
                pic: this.config.networks.tqq.image
            })
        }, n.prototype.network_douban = function () {
            return this.popup("http://www.douban.com/share/service", {
                href: this.config.networks.douban.url + "?utm_source=Douban&utm_medium=shareLink&utm_campaign=socialShare",
                name: this.config.networks.douban.title,
                image: this.config.networks.douban.image,
                text: this.config.networks.douban.description,
                comment: this.config.networks.douban.comment || ""
            })
        }, n.prototype.inject_html = function (e) {
            e.innerHTML = '<ul class="sn-inline"><li data-network="weibo"><a href="javascript:void(0);" class="entypo-weibo icon-sn-weibo share-1" data-toggle="tooltip" data-placement="top" title="分享至新浪微博">新浪微博</a></li><li data-network="wechart"><a href="javascript:void(0);" class="entypo-wechart icon-sn-wechat share-2" data-toggle="tooltip" data-placement="top" title="分享至微信">微信</a></li><li data-network="twitter"><a href="javascript:void(0);" class="entypo-twitter icon-sn-twitter share-3" data-toggle="tooltip" data-placement="top" title="分享至 Twitter">Twitter</a></li><li data-network="facebook"><a href="javascript:void(0);" class="entypo-facebook icon-sn-facebook share-4" data-toggle="tooltip" data-placement="top" title="分享至 Facebook">Facebook</a></li><li data-network="renren"><a href="javascript:void(0);" class="entypo-renren icon-sn-renren share-5" data-toggle="tooltip" data-placement="top" title="分享至人人网">人人网</a></li><li data-network="douban"><a href="javascript:void(0);" class="entypo-douban icon-sn-douban share-6" data-toggle="tooltip" data-placement="top" title="分享至豆瓣">豆瓣</a></li></ul>'
        }, n.prototype.hook = function (e, t, n) {
            var r, i;
            r = this.config.networks[t][e], "function" == typeof r && (i = r.call(this.config.networks[t], n), void 0 !== i && (i = this.normalize_filter_config_updates(i), this.extend(this.config.networks[t], i, !0), this.normalize_network_configuration()))
        }, n.prototype.set_global_configuration = function () {
            var e, t, n, r, i, o;
            for (n in r)n || (this.config[n] = r[n]);
            i = this.config.networks, o = [];
            for (t in i) {
                r = i[t];
                for (n in r)null == this.config.networks[t][n] && (this.config.networks[t][n] = this.config[n]);
                this.config.networks[t].enabled ? (e = "block", this.config.enabled_networks += 1) : e = "none", o.push(this.config.networks[t].display = e)
            }
            return o
        }, n.prototype.normalize_network_configuration = function () {
            return this.config.networks.facebook.app_id || (this.config.networks.facebook.load_sdk = !1), this.is_encoded(this.config.networks.twitter.description) || (this.config.networks.twitter.description = encodeURIComponent(this.config.networks.twitter.description)), "integer" == typeof this.config.networks.facebook.app_id ? this.config.networks.facebook.app_id = this.config.networks.facebook.app_id.toString() : void 0
        }, n.prototype.normalize_filter_config_updates = function (e) {
            return this.config.networks.facebook.app_id !== e.app_id && (console.warn("You are unable to change the Facebook app_id after the button has been initialized. Please update your Facebook filters accordingly."), delete e.app_id), this.config.networks.facebook.load_sdk !== e.load_sdk && (console.warn("You are unable to change the Facebook load_sdk option after the button has been initialized. Please update your Facebook filters accordingly."), delete e.app_id), e
        }, e.exports = n
    }, function (e) {
        function t(e, t) {
            this.setup(e, t)
        }

        t.prototype = {
            constructor: t, setup: function (e, t) {
                this.initAttr(e, t), this.initDom(), this.eventHandler()
            }, initAttr: function (e, t) {
                this.element = $(e), this.options = $.extend({
                    url: this.element.data("url"),
                    shorturl: this.element.data("shorturl")
                }, t)
            }, initDom: function () {
                var e = this.options.url, t = this.options.shorturl, n = '<div class="input-group"> <input type="text" class="form-control input-sm" readonly="readonly" data-url="{{url}}" data-shorturl="{{shorturl}}" value="{{url}}"> <span class="input-group-btn"> <button class="btn btn-default btn-sm" type="button" data-share-target="shorturl">缩短</button> </span> </div> '.replace(/{{url}}/g, e).replace(/{{shorturl}}/g, t);
                this.element.html(n), this.input = this.element.find("input")
            }, eventHandler: function () {
                var e = this.element, t = this.input;
                e.on("click", "[data-share-target]", function () {
                    var e = $(this).data("shareTarget"), n = t.data(e);
                    t.val(n).select(), "url" === e ? $(this).data("shareTarget", "shorturl").removeClass("active") : $(this).data("shareTarget", "url").addClass("active")
                }), e.on("mouseenter", "input", function () {
                    $(this).select()
                })
            }, destroy: function () {
                this.element.off().remove()
            }
        }, e.exports = t
    }, function (e, t, n) {
        function r(e, t, n) {
            this.setup(e, t, n)
        }

        var i = n(3), o = n(2);
        r.prototype = {
            constructor: r, setup: function (e, t, n) {
                return this.initAttr(e, t), n ? (this.initDom(), this.initSwitchUrl(), void this.initNetwork()) : void this.initNetwork(e)
            }, initAttr: function (e, t) {
                this.element = $(e), this.options = $.extend({
                    url: this.element.data("url"),
                    shorturl: this.element.data("shorturl"),
                    title: this.element.data("title"),
                    text: this.element.data("text"),
                    image: this.element.data("image")
                }, t)
            }, initDom: function () {
                var e = this.options.url, t = this.options.shorturl, n = (this.options.text, this.options.image, this.options.title, '<div style="margin-bottom:5px;">分享扩散：</div> <div class="widget-share-url" data-url="{{url}}" data-shorturl="{{shorturl}}"> </div> <div class="widget-share-network"> </div>'.replace(/{{url}}/g, e).replace(/{{shorturl}}/g, t));
                this.element.html(n)
            }, initSwitchUrl: function () {
                this.switchUrl = new i(".widget-share-url")
            }, initNetwork: function (e) {
                this.network = new o(e || ".widget-share-network", {
                    image: this.options.image,
                    title: this.options.title,
                    text: this.options.text,
                    callback: function () {
                        $((e || ".widget-share-network") + " .sn-inline a").tooltip()
                    },
                    networks: this.options.networks || {}
                })
            }, destroy: function () {
                this.element.empty(), this.switchUrl && this.switchUrl.destroy(), this.network.destroy()
            }
        }, e.exports = r
    }])
}), function (e, t) {
    var n = function (t) {
        i || (e("head:first").append(t), i = !0), document.write = r
    }, r = function (t) {
        o = {}, o.ordered = [];
        var n = e(t);
        n.find("div.gist-file").each(function () {
            var t = e(this), n = t.find("div.gist-meta a").filter(function () {
                return -1 === e(this).text().search(new RegExp("^\\s*(view raw|this gist|github)", "i"))
            }), r = e.trim(n.first().text()), i = e("<div class='gist'></div>").append(t);
            o[r] = {fileName: r, content: i}, o.ordered.push(o[r])
        })
    }, i = !1, o = null;
    e.getGist = function (r) {
        document.write = n;
        var i = e.Deferred();
        return e.ajax({
            url: "https://gist.github.com/" + r + ".js", dataType: "script", success: function () {
                console.log(o), i.resolve(o)
            }, error: function (e, t, n) {
                i.reject(t, n)
            }, complete: function () {
                document.write = t
            }
        }), i.promise()
    }
}(jQuery, document.write), define("jquery_gist", ["jquery"], function (e) {
    return function () {
        var t;
        return t || e.$.fn.getGist
    }
}(this)), define("specialUrl", ["jquery", "jquery_tmpl", "jquery_gist"], function (e) {
    var t, n, r, i, o, a, s, l, c, u;
    return c = function (t, n) {
        var r, i;
        r = e(".v_" + t), i = r.after(e.tmpl(l, n)).next(".video-prev"), i.click(function () {
            i.hide(), i.after(e.tmpl(s, n)).next(".video-body").find(".hide-video").click(function () {
                i.show(), e(this).parent().remove()
            })
        }), r.remove()
    }, i = 0, o = [{
        reg: /^https?:\/\/jsfiddle\.net\/([_a-z0-9-\/,]+)$/i, fn: function (t) {
            t.indexOf("embedded") < 0 && (t += /\/$/.test(t) ? "embedded" : "/embedded"), t = "http://jsfiddle.net/" + t, e('<iframe style="width: 100%; height: 300px" src="' + t + '" allowfullscreen="allowfullscreen" frameborder="0"></iframe>').insertAfter(this)
        }
    }, {
        reg: /^https?:\/\/gist\.github\.com\/([_a-z0-9-]+)$/i, fn: function (t) {
            var n, r, o, a, s, l, c;
            e("#special-gist" + t).length > 0 || (c = "https://gist.github.com/" + t + ".json?callback=special_" + i, o = e('<iframe id="special-gist' + t + '" style="width: 100%;" src="about:blank" frameborder="0"></iframe>').insertAfter(this), s = o[0], a = s.contentWindow ? s.contentWindow.document : s.contentDocument ? s.contentDocument : s.document, l = a.createElement("script"), r = e(a), n = e("body", r), o.ready(function () {
                o.height(r.height())
            }), s.contentWindow["special_" + i] = function (e) {
                n.append(e.div).css({
                    padding: 0,
                    margin: 0
                }), r.find("head").append('<link rel="stylesheet" href="' + e.stylesheet + '" />'), r.find("head").append("<style>html{background:#fff;}.gist .gist-file .gist-data{background:none;}                .gist .gist-file .gist-meta{background:#eee;text-shadow:none;}.gist .gist-file .gist-meta a{color:#017e66}                </style>"), setTimeout(function () {
                    o.height(r.height())
                }, 5e3)
            }, l.type = "text/javascript", l.src = c, a.body.appendChild(l), i++)
        }
    }, {
        reg: /^http:\/\/runjs\.cn\/detail\/([_0-9a-z-]+)$/i, fn: function (t) {
            var n, r, i, o, a, s, l;
            n = function () {
                e("body", r).css("margin", 0), e(".runjs_gist", r).css("border", "none"), e(".gist_content", r).css("font-size", "14px")
            }, e("#special-runjs" + t).length > 0 || (l = "http://runjs.cn/gist/" + t + "/all", i = e('<iframe id="special-runjs' + t + '" style="width: 100%; height: 300px" src="about:blank" frameborder="0"></iframe>').insertAfter(this), o = i[0], r = o.contentWindow ? o.contentWindow.document : o.contentDocument ? o.contentDocument : o.document, s = r.createElement("script"), a = r.prototype.or(r.__proto__), a.write = function (t) {
                e(t).appendTo(r.body)
            }, s.type = "text/javascript", s.src = l, r.body.appendChild(s), s.onreadystatechange = n, s.onload = n)
        }
    }, {
        reg: /^http:\/\/codepen\.io\/([_a-zA-Z0-9-\/,]+)$/i, fn: function (t) {
            t.indexOf("embed") < 0 && (t = t.replace("pen", "embed")), t = "http://codepen.io/" + t, e('<iframe style="width: 100%; height: 300px" src="' + t + '" allowfullscreen="allowfullscreen" frameborder="0"></iframe>').insertAfter(this)
        }
    }, {
        reg: /^https:\/\/gist\.github\.com\/([_a-zA-Z0-9-\/,\.]+)$/i, fn: function (t) {
            var n, r, i;
            i = e(this).closest("p"), n = t.replace(/\w+\//, "").replace(/\.\w+/, ""), r = e.getGist(n), r.done(function (t) {
                var n, r, o;
                return n = "", o = t.ordered, r = o[0], n += "<h3>" + r.fileName + "</h3>", n += r.content.html(), e("<div class='gist'>" + n + "</div>").insertAfter(i)
            })
        }
    }, {
        reg: /^http:\/\/segmentfault\.com\/n\/([_a-zA-Z0-9-\/,\.]+)$/i, fn: function (t) {
            return t = "http://segmentfault.com/n/" + t + "/widget", e('<iframe style="width: 100%;height: 300px;" src="' + t + '" allowfullscreen="allowfullscreen" frameborder="0"></iframe>').insertAfter(this), e(this).prev("a").remove()
        }
    }], l = '<div class="video-prev vp_${id}"><div class="clearfix video-header"><img class="pull-left" src="${thumbnail}"><div class="pull-left"><h5>${title}</h5><span class="text-muted">${link}</span></div></div>', s = '<div class="video-body"><embed class="player" src="${player}" type="application/x-shockwave-flash" /><br /><a href="javascript:void(0)" class="hide-video text-muted"><span class="glyphicon glyphicon-open mr5"></span>收起视频</a></div>', t = void 0, r = void 0, a = void 0, u = void 0, n = new RegExp(window.location.host, "ig"), function () {
        e(".fmt a").each(function (i) {
            var a, s;
            t = e(this), a = t.attr("href"), !n.test(a) && /^http/.test(a) && t.attr("target", "_blank"), e.each(o, function (e, n) {
                a && (r = a.match(n.reg), r && t.after('<button class="btn btn-xs btn-default ml10 preview" data-url="' + r[1] + '" data-typeid="' + e + '">点击预览</button>'))
            }), a && a.match(/youku\.com/g) && (s = a.match(/id_\w+/), s && (s = s[0].slice(3), t.addClass("v_" + s + "_" + i), e.get("https://openapi.youku.com/v2/videos/show_basic.json?video_id=" + s + "&client_id=8fdab46779dd5d25", function (e) {
                c(s + "_" + i, e)
            }))), a && a.match(/tudou\.com/g) && (/albumplay/.test(a) || /listplay/.test(a)) && (s = a.match(/http:\/\/www\.tudou\.com\/.+\/.+\/(.+)\.html/)[1], s && (t.addClass("v_" + s + "_" + i), e.get("/api/util/video/info?app_key=269fe846bb7a17ec&format=json&itemCodes=" + s, function (e) {
                var t;
                e = e.data[0], t = {
                    thumbnail: e.picUrl,
                    title: e.title,
                    link: e.playUrl,
                    player: e.outerPlayerUrl
                }, c(s + "_" + i, t)
            })))
        }), e(".fmt").delegate(".preview", "click", function () {
            o[e(this).data("typeid")].fn.call(this, e(this).data("url")), e(this).siblings("iframe").addClass("loading"), e(this).remove()
        }), e(".fmt img").each(function () {
            var t, n;
            n = new RegExp(window.location.origin, "i"), t = e(this).attr("src"), (n.test(t) || /^\/img\//i.test(t)) && (e(this).css("cursor", "pointer"), e(this).click(function () {
                0 === e("#previewImg").length && (e("body").addClass("isPreviewing").append('<div id="previewImg"><div class="loadingDot"><span class="glyphicon glyphicon-refresh rotate white"></span></div><div class="imgWrapper"><img></div><div class="menu"><a target="_blank" href="javascript:void(0);" class="link-orign">查看原图</a></div></div>'), e("#previewImg img")[0].src = e(this).attr("src") + "/view", e("#previewImg .link-orign").attr("href", e(this).attr("src") + "/view"), e("#previewImg img")[0].onload = function () {
                    e("#previewImg .loadingDot").remove(), this.height > window.innerHeight && (e("#previewImg .imgWrapper").css({lineHeight: window.innerHeight + "px"}), e("#previewImg").css("overflow-y", "scroll")), this.width > window.innerWidth && (e("#previewImg img").css("width", "100%"), e("#previewImg .imgWrapper").css({lineHeight: "initial"}))
                }, e("#previewImg").click(function () {
                    e(this).remove(), e("body").removeClass("isPreviewing")
                }))
            }))
        })
    }
}), function (e) {
    function t(r) {
        if (n[r])return n[r].exports;
        var i = n[r] = {exports: {}, id: r, loaded: !1};
        return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
    }

    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0)
}([function (e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function i(e, t) {
        if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var o = function () {
        function e(e, t) {
            var n = [], r = !0, i = !1, o = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (l) {
                i = !0, o = l
            } finally {
                try {
                    !r && s["return"] && s["return"]()
                } finally {
                    if (i)throw o
                }
            }
            return n
        }

        return function (t, n) {
            if (Array.isArray(t))return t;
            if (Symbol.iterator in Object(t))return e(t, n);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }(), a = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value"in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    n(1);
    var s = n(185), l = r(s), c = function () {
        function e() {
            i(this, e), this.commonWhiteList = "kbd|b|i|strong|em|sup|sub|br|code|del|a|hr|small", this.specialWhiteList = {table: "table|tbody|thead|tfoot|tr|td|th"}, this.footnotes = [], this.blocks = [], this.current = "normal", this.pos = -1, this.definitions = [], this.hooks = {}, this.holders = new Map, this.uniqid = l["default"]((new Date).getTime()), this.id = 0
        }

        return a(e, [{
            key: "makeHtml", value: function (e) {
                e = this.initText(e);
                var t = this.parse(e);
                return this.makeFootnotes(t)
            }
        }, {
            key: "hook", value: function (e, t) {
                this.hooks[e] ? this.hooks[e].push(t) : this.hooks[e] = [t]
            }
        }, {
            key: "makeHolder", value: function (e) {
                var t = "|\r" + this.uniqid + this.id + "\r|";
                return this.id++, this.holders[t] = e, t
            }
        }, {
            key: "initText", value: function (e) {
                return e ? (e = e.replace(/\t/g, "    "), e = e.replace(/\r/g, "")) : e = "", e
            }
        }, {
            key: "makeFootnotes", value: function (e) {
                if (this.footnotes.length > 0) {
                    e += '<div class="footnotes"><hr><ol>';
                    for (var t = 1, n = this.footnotes.pop(); n;)"string" == typeof n ? n += ' <a href="#fnref-' + t + '" class="footnote-backref">&#8617;</a>' : (n[n.length - 1] += ' <a href="#fnref-' + t + '" class="footnote-backref">&#8617;</a>', n = n.length > 1 ? this.parse(n.join("\n")) : this.parseInline(n[0])), e += '<li id="fn-' + t + '">' + n + "</li>", t++, n = this.footnotes.pop();
                    e += "</ol></div>"
                }
                return e
            }
        }, {
            key: "parse", value: function (e) {
                var t = this, n = e.split("\n"), r = this.parseBlock(e, n), i = "";
                return r.forEach(function (e) {
                    var r = o(e, 4), a = r[0], s = r[1], l = r[2], c = r[3], u = n.slice(s, l + 1), d = "parse" + a.slice(0, 1).toUpperCase() + a.slice(1), f = "beforeParse" + a.slice(0, 1).toUpperCase() + a.slice(1);
                    u = t.call(f, u, c);
                    var p = t[d](u, c);
                    p = t.call("after" + d.slice(0, 1).toUpperCase() + d.slice(1), p, c), i += p
                }), this.hooks.afterParse && (i = this.call("afterParse", i)), i
            }
        }, {
            key: "call", value: function (e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; t > r; r++)n[r - 1] = arguments[r];
                if (!this.hooks[e])return n[0];
                var i = n;
                return this.hooks[e].forEach(function (e) {
                    n = e(i), i[0] = n
                }), n[0]
            }
        }, {
            key: "releaseHolder", value: function (e) {
                for (var t = arguments.length <= 1 || void 0 === arguments[1] ? !0 : arguments[1], n = 0; -1 !== e.indexOf("|\r") && 10 > n;) {
                    for (var r in this.holders) {
                        var i = this.holders[r];
                        e = e.replace(r, i)
                    }
                    n++
                }
                return t && this.holders.clear(), e
            }
        }, {
            key: "parseInline", value: function (e) {
                var t = this, n = arguments.length <= 1 || void 0 === arguments[1] ? "" : arguments[1], r = arguments.length <= 2 || void 0 === arguments[2] ? !0 : arguments[2];
                e = this.call("beforeParseInline", e);
                var i = this;
                e = e.replace(/(^|[^\\])(`+)(.+?)\2/g, function (e, t, n, r) {
                    return t + i.makeHolder("<code>" + i.htmlspecialchars(r) + "</code>")
                }), e = e.replace(/<(https?:\/\/.+)>/gi, function (e, n) {
                    return t.makeHolder('<a href="' + n + '">' + n + "</a>")
                }), e = e.replace(/<(\/?)([a-z0-9-]+)(\s+[^>]*)?>/gi, function (e, r, i) {
                    var o = t.commonWhiteList + "|" + n;
                    return -1 !== o.toLowerCase().indexOf(i.toLowerCase()) ? t.makeHolder(e) : t.htmlspecialchars(e)
                }), e = e.replace(/</g, "&lt;"), e = e.replace(/>/g, "&gt;");
                var o = /\[\^((?:[^\]]|\]|\[)+?)\]/g;
                e = e.replace(o, function (e, n) {
                    var r = i.footnotes.indexOf(n);
                    return -1 === r && (r = i.footnotes.length + 1, i.footnotes[r] = t.parseInline(n, "", !1)), i.makeHolder('<sup id="fnref-' + r + '"><a href="#fn-' + r + '" class="footnote-ref">' + r + "</a></sup>")
                });
                var a = /!\[((?:[^\]]|\]|\[)*?)\]\(((?:[^\)]|\)|\()+?)\)/;
                e = e.replace(a, function (e, t, n) {
                    var r = i.escapeBracket(t), o = i.escapeBracket(n);
                    return i.makeHolder('<img src="' + o + '" alt="' + r + '" title="' + r + '">')
                });
                var s = /!\[((?:[^\]]|\]|\[)*?)\]\[((?:[^\]]|\]|\[)+?)\]/;
                e = e.replace(s, function (e, t, n) {
                    var r = i.escapeBracket(t), o = "";
                    return o = i.definitions[n] ? '<img src="' + i.definitions[n] + '" alt="' + r + '" title="' + r + '">' : r, i.makeHolder(o)
                });
                var l = /\[((?:[^\]]|\]|\[)+?)\]\(((?:[^\)]|\)|\()+?)\)/;
                e = e.replace(l, function (e, t, n) {
                    var r = i.parseInline(i.escapeBracket(t), "", !1), o = i.escapeBracket(n);
                    return i.makeHolder('<a href="' + o + '">' + r + "</a>")
                });
                var c = /\[((?:[^\]]|\]|\[)+?)\]\[((?:[^\]]|\]|\[)+?)\]/;
                return e = e.replace(c, function (e, t, n) {
                    var r = i.parseInline(i.escapeBracket(t), "", !1), o = i.definitions[n] ? '<a href="' + i.definitions[n] + '">' + r + "</a>" : r;
                    return i.makeHolder(o)
                }), e = e.replace(/\\(`|\*|_|~)/g, function (e, t) {
                    return i.makeHolder(i.htmlspecialchars(t))
                }), e = this.parseInlineCallback(e), e = e.replace(/<([_a-z0-9-\.\+]+@[^@]+\.[a-z]{2,})>/gi, '<a href="mailto:$1">$1</a>'), e = e.replace(/(^|[^"])((http|https|ftp|mailto):[_a-z0-9-\.\/%#@\?\+=~\|\,&\(\)]+)($|[^"])/gi, '$1<a href="$2">$2</a>$4'), e = this.call("afterParseInlineBeforeRelease", e), e = this.releaseHolder(e, r), e = this.call("afterParseInline", e)
            }
        }, {
            key: "parseInlineCallback", value: function (e) {
                var t = this;
                return e = e.replace(/(\*{3})(.+?)\1/g, function (e, n, r) {
                    return "<strong><em>" + t.parseInlineCallback(r) + "</em></strong>"
                }), e = e.replace(/(\*{2})(.+?)\1/g, function (e, n, r) {
                    return "<strong>" + t.parseInlineCallback(r) + "</strong>"
                }), e = e.replace(/(\*)(.+?)\1/g, function (e, n, r) {
                    return "<em>" + t.parseInlineCallback(r) + "</em>"
                }), e = e.replace(/(\s+|^)(_{3})(.+?)\2(\s+|$)/g, function (e, n, r, i, o) {
                    return n + "<strong><em>" + t.parseInlineCallback(i) + "</em></strong>" + o
                }), e = e.replace(/(\s+|^)(_{2})(.+?)\2(\s+|$)/g, function (e, n, r, i, o) {
                    return n + "<strong>" + t.parseInlineCallback(i) + "</strong>" + o
                }), e = e.replace(/(\s+|^)(_)(.+?)\2(\s+|$)/g, function (e, n, r, i, o) {
                    return n + "<em>" + t.parseInlineCallback(i) + "</em>" + o
                }), e = e.replace(/(~{2})(.+?)\1/g, function (e, n, r) {
                    return "<del>" + t.parseInlineCallback(r) + "</del>"
                })
            }
        }, {
            key: "parseBlock", value: function (e, t) {
                var n = this;
                this.blocks = [], this.current = "normal", this.pos = -1;
                var r = Object.keys(this.specialWhiteList).join("|"), i = 0;
                for (var o in t) {
                    o = parseInt(o);
                    var a = t[o];
                    if (p = a.match(/^(\s*)(~|`){3,}([^`~]*)$/i))if (this.isBlock("code")) {
                        var s = this.getBlock(), l = s[3][2];
                        l ? this.combineBlock().setBlock(o) : this.setBlock(o).endBlock()
                    } else {
                        var l = !1;
                        if (this.isBlock("list")) {
                            var s = this.getBlock(), c = s[3];
                            l = c > 0 && p[1].length >= c || p[1].length > c
                        }
                        this.startBlock("code", o, [p[1], p[3], l])
                    } else if (this.isBlock("code"))this.setBlock(o); else {
                        var u = new RegExp("^s*<(" + r + ")(s+[^>]*)?>", "i"), d = new RegExp("</(" + r + ")>s*$", "i");
                        if (p = a.match(u)) {
                            var f = p[1].toLowerCase();
                            this.isBlock("html", f) || this.isBlock("pre") || this.startBlock("html", o, f)
                        } else if (p = a.match(d)) {
                            var f = p[1].toLowerCase();
                            this.isBlock("html", f) && this.setBlock(o).endBlock()
                        } else if (this.isBlock("html"))this.setBlock(o); else switch (!0) {
                            case/^(\s*)((?:[0-9a-z]\.)|\-|\+|\*)\s+/.test(a):
                                var p = a.match(/^(\s*)((?:[0-9a-z]\.)|\-|\+|\*)\s+/), h = p[1].length;
                                i = 0, this.isBlock("list") ? this.setBlock(o, h) : this.startBlock("list", o, h);
                                break;
                            case/^\[\^((?:[^\]]|\]|\[)+?)\]:/.test(a):
                                var m = /^\[\^((?:[^\]]|\]|\[)+?)\]:/.exec(a), g = m[0].length - 1;
                                this.startBlock("footnote", o, [g, m[1]]);
                                break;
                            case/^\s*\[((?:[^\]]|\]|\[)+?)\]:\s*(.+)$/.test(a):
                                var v = a.match(/^\s*\[((?:[^\]]|\]|\[)+?)\]:\s*(.+)$/);
                                this.definitions[v[1]] = v[2], this.startBlock("definition", o).endBlock();
                                break;
                            case/^\s*>/.test(a):
                                this.isBlock("quote") ? this.setBlock(o) : this.startBlock("quote", o);
                                break;
                            case/^ {4}/.test(a):
                                i = 0, this.isBlock("pre") || this.isBlock("list") ? this.setBlock(o) : this.isBlock("normal") && this.startBlock("pre", o);
                                break;
                            case/^((?:(?:(?:[ :]*\-[ :]*)+(?:\||\+))|(?:(?:\||\+)(?:[ :]*\-[ :]*)+)|(?:(?:[ :]*\-[ :]*)+(?:\||\+)(?:[ :]*\-[ :]*)+))+)$/g.test(a):
                                var b = /^((?:(?:(?:[ :]*\-[ :]*)+(?:\||\+))|(?:(?:\||\+)(?:[ :]*\-[ :]*)+)|(?:(?:[ :]*\-[ :]*)+(?:\||\+)(?:[ :]*\-[ :]*)+))+)$/g.exec(a);
                                this.isBlock("normal") && !function () {
                                    var e = n.getBlock(), r = !1;
                                    0 === e.length || "normal" !== e[0] || /^\s*$/.test(t[e[2]]) ? n.startBlock("table", o) : (r = !0, n.backBlock(1, "table")), "|" == b[1][0] && (b[1] = b[1].substr(1), "|" == b[1][b[1].length - 1] && (b[1] = b[1].slice(0, -1)));
                                    var i = b[1].split(/(\+|\|)/), a = [];
                                    i.forEach(function (e) {
                                        var t = "none";
                                        (b = e.match(/^\s*(:?)\-+(:?)\s*$/)) && (b[1] && b[2] ? t = "center" : b[1] ? t = "left" : b[2] && (t = "right")), a.push(t)
                                    }), n.setBlock(o, [r, a])
                                }();
                                break;
                            case/^(#+)(.*)$/.test(a):
                                var y = a.match(/^(#+)(.*)$/), w = Math.min(y[1].length, 6);
                                this.startBlock("sh", o, w).endBlock();
                                break;
                            case/^\s*((=|-){2,})\s*$/.test(a) && this.getBlock() && "normal" === this.getBlock()[0] && !/^\s*$/.test(t[this.getBlock()[2]]):
                                var _ = a.match(/^\s*((=|-){2,})\s*$/);
                                this.isBlock("normal") ? this.backBlock(1, "mh", "=" == _[1][0] ? 1 : 2).setBlock(o).endBlock() : this.startBlock("normal", o);
                                break;
                            case/^[-\*]{3,}\s*$/.test(a):
                                this.startBlock("hr", o).endBlock();
                                break;
                            default:
                                if (this.isBlock("list")) {
                                    var k = a.match(/^(\s*)/);
                                    a.length == k[1].length ? (i > 0 ? this.startBlock("normal", o) : this.setBlock(o), i++) : 0 === i ? this.setBlock(o) : this.startBlock("normal", o)
                                } else if (this.isBlock("footnote")) {
                                    var x = a.match(/^(\s*)/);
                                    x[1].length >= this.getBlock()[3][0] ? this.setBlock(o) : this.startBlock("normal", o)
                                } else if (this.isBlock("table"))-1 !== a.indexOf("|") ? this.setBlock(o) : this.startBlock("normal", o); else if (this.isBlock("pre"))/^\s*$/.test(a) ? (i > 0 ? this.startBlock("normal", o) : this.setBlock(o), i++) : this.startBlock("normal", o); else {
                                    var s = this.getBlock();
                                    null === s || 0 === s.length || "normal" !== s[0] ? this.startBlock("normal", o) : this.setBlock(o)
                                }
                        }
                    }
                }
                return this.optimizeBlocks(this.blocks, t)
            }
        }, {
            key: "optimizeBlocks", value: function (e, t) {
                return e = this.call("beforeOptimizeBlocks", e, t), e.forEach(function (n, r) {
                    var i = e[r - 1] ? e[r - 1] : null, a = e[r + 1] ? e[r + 1] : null, s = o(n, 3), l = s[0], c = s[1], u = s[2];
                    if ("pre" === l) {
                        var d = t.reduce(function (e, t) {
                            return t.match(/^\s*$/) && e
                        }, !0);
                        d && (n[0] = l = "normal")
                    }
                    "normal" === l && c === u && t[c].match(/^\s*$/) && i && a && "list" === i[0] && "list" === a[0] && (e[r - 1] = ["list", i[1], a[2], null], e.splice(r, 2))
                }), this.call("afterOptimizeBlocks", e, t)
            }
        }, {
            key: "parseCode", value: function (e, t) {
                var n = o(t, 2), r = n[0], i = n[1];
                i = i.trim();
                var a = r.length;
                /^[_a-z0-9-\+\#]+$/i.test(i) || (i = null), e = e.slice(1, -1).map(function (e) {
                    var t = new RegExp("/^[ ]{" + a + "}/");
                    return e.replace(t, "")
                });
                var s = e.join("\n");
                return /^\s*$/.test(s) ? "" : "<pre><code" + (i ? ' class="' + i + '"' : "") + ">" + this.htmlspecialchars(e.join("\n")) + "</code></pre>"
            }
        }, {
            key: "parsePre", value: function (e) {
                var t = this;
                e.forEach(function (n, r) {
                    e[r] = t.htmlspecialchars(n.substr(4))
                });
                var n = e.join("\n");
                return /^\s*$/.test(n) ? "" : "<pre><code>" + n + "</code></pre>"
            }
        }, {
            key: "parseSh", value: function (e, t) {
                if (e[0]) {
                    var n = this.parseInline(e[0].trim().replace(/^#+|#+$/g, ""));
                    return /^\s*$/.test(n) ? "" : "<h" + t + ">" + n + "</h" + t + ">"
                }
                return ""
            }
        }, {
            key: "parseMh", value: function (e, t) {
                if (e[0]) {
                    var n = this.parseInline(e[0].trim().replace(/^#+|#+$/g, ""));
                    return /^\s*$/.test(n) ? "" : "<h" + t + ">" + n + "</h" + t + ">"
                }
                return ""
            }
        }, {
            key: "parseQuote", value: function (e) {
                e.forEach(function (t, n) {
                    e[n] = t.replace(/^\s*> ?/, "")
                });
                var t = e.join("\n");
                return /^\s*$/.test(t) ? "" : "<blockquote>" + this.parse(t) + "</blockquote>"
            }
        }, {
            key: "parseList", value: function (e) {
                var t = this, n = "", r = 99999, i = [];
                e.forEach(function (e) {
                    var t = e.match(/^(\s*)((?:[0-9a-z]+\.?)|\-|\+|\*)(\s+)(.*)$/);
                    if (t) {
                        var n = t[1].length, o = /[\+\-\*]/.test(t[2]) ? "ul" : "ol";
                        r = Math.min(n, r), i.push([n, o, e, t[4]])
                    } else i.push(e)
                });
                var a = !1, s = 99999;
                i.forEach(function (e) {
                    Array.isArray(e) && e[0] != r && (s = Math.min(s, e[0]), a = !0)
                }), s = a ? 0 : r;
                var l = "", c = [];
                return i.forEach(function (e) {
                    if (Array.isArray(e)) {
                        var i = o(e, 4), a = i[0], u = i[1], d = i[2], f = i[3];
                        if (a !== r) {
                            var p = new RegExp("^s{" + s + "}");
                            c.push(d.replace(p, ""))
                        } else c.length && (n += "<li>" + t.parse(c.join("\n")) + "</li>"), l !== u && (l.length && (n += "</" + l + ">"), n += "<" + u + ">"), c = [f], l = u
                    } else {
                        var p = new RegExp("^s{" + s + "}");
                        c.push(e.replace(p, ""))
                    }
                }), c.length && (n += "<li>" + this.parse(c.join("\n")) + ("</li></" + l + ">")), n
            }
        }, {
            key: "parseTable", value: function (e, t) {
                var n = this, r = o(t, 2), i = r[0], a = r[1], s = i ? 1 : 0, l = "<table>", c = !1, u = function (t) {
                    var r = e[t];
                    if (parseInt(t) === s)return i = !1, c = !0, "continue";
                    r && (r = r.trim()), "|" === r[0] && (r = r.substr(1), "|" === r[r.length - 1] && (r = r.slice(0, -1)));
                    var u = r.split("|").map(function (e) {
                        return e.match(/^\s+$/) ? " " : e.trim()
                    }), d = [], f = -1;
                    u.forEach(function (e) {
                        e.length > 0 ? (f++, d[f] = [d[f] ? d[f][0] + 1 : 1, e]) : d[f] ? d[f][0]++ : d[0] = [1, e]
                    }), i === !0 ? l += "<thead>" : c === !0 && (l += "<tbody>"), l += "<tr>", d.forEach(function (e, t) {
                        var r = o(e, 2), s = r[0], c = r[1], u = i ? "th" : "td";
                        l += "<" + u, s > 1 && (l += ' colspan="' + s + '"'), a[t] && "none" != a[t] && (l += ' align="' + a[t] + '"'), l += ">" + n.parseInline(c) + ("</" + u + ">")
                    }), l += "</tr>", i ? l += "</thead>" : c && (c = !1)
                };
                for (var d in e) {
                    {
                        u(d)
                    }
                }
                return null !== c && (l += "</tbody>"), l += "</table>"
            }
        }, {
            key: "parseHr", value: function () {
                return "<hr>"
            }
        }, {
            key: "parseNormal", value: function (e) {
                var t = this;
                e = e.map(function (e) {
                    return t.parseInline(e)
                });
                var n = e.join("\n").trim();
                return n = n.replace(/(\n\s*){2,}/g, "</p><p>"), n = n.replace(/\n/g, "<br>"), /^\s*$/.test(n) ? "" : "<p>" + n + "</p>"
            }
        }, {
            key: "parseFootnote", value: function (e, t) {
                var n = o(t, 2), r = (n[0], n[1]), i = this.footnotes.indexOf(r);
                return -1 !== i && (e[0] && (e[0] = e[0].replace(/^\[\^((?:[^\]]|\]|\[)+?)\]:/, "")), this.footnotes[i] = e), ""
            }
        }, {
            key: "parseDefinition", value: function () {
                return ""
            }
        }, {
            key: "parseHtml", value: function (e, t) {
                var n = this;
                return e.forEach(function (e) {
                    e = n.parseInline(e, n.specialWhiteList[t] ? n.specialWhiteList[t] : "")
                }), e.join("\n")
            }
        }, {
            key: "escapeBracket", value: function (e) {
                return e ? (e = e.replace(/\[/g, "["), e = e.replace(/\]/g, "]"), e = e.replace(/\(/g, "("), e = e.replace(/\)/g, ")")) : void 0
            }
        }, {
            key: "startBlock", value: function (e, t) {
                var n = arguments.length <= 2 || void 0 === arguments[2] ? null : arguments[2];
                return this.pos++, this.current = e, this.blocks[this.pos] = [e, t, t, n], this
            }
        }, {
            key: "endBlock", value: function () {
                return this.current = "normal", this
            }
        }, {
            key: "isBlock", value: function (e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                return this.current == e && (null === t ? !0 : this.blocks[this.pos][3] == t)
            }
        }, {
            key: "getBlock", value: function () {
                return this.blocks[this.pos] ? this.blocks[this.pos] : null
            }
        }, {
            key: "setBlock", value: function () {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? null : arguments[0], t = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                return null !== e && (this.blocks[this.pos][2] = e), null !== t && (this.blocks[this.pos][3] = t), this
            }
        }, {
            key: "backBlock", value: function (e, t) {
                var n = arguments.length <= 2 || void 0 === arguments[2] ? null : arguments[2];
                if (this.pos < 0)return this.startBlock(t, 0, n);
                var r = this.blocks[this.pos][2];
                return this.blocks[this.pos][2] = r - e, this.blocks[this.pos][1] <= this.blocks[this.pos][2] && this.pos++, this.current = t, this.blocks[this.pos] = [t, r - e + 1, r, n], this
            }
        }, {
            key: "htmlspecialchars", value: function (e) {
                var t = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"};
                return e.replace(/[&<>"']/g, function (e) {
                    return t[e]
                })
            }
        }, {
            key: "combineBlock", value: function () {
                if (this.pos < 1)return this;
                var e = this.blocks[this.pos - 1], t = this.blocks[this.pos];
                return e[2] = t[2], this.blocks[this.pos - 1] = e, this.current = e[0], this.blocks.splice(this.pos, 1), this.pos--, this
            }
        }]), e
    }();
    t["default"] = c, e.exports = t["default"], define("hyperdown", [], function () {
        return c
    })
}, function (e, t, n) {
    e.exports = n(2)
}, function (e, t, n) {
    (function (e) {
        "use strict";
        if (n(3), n(183), e._babelPolyfill)throw new Error("only one instance of babel/polyfill is allowed");
        e._babelPolyfill = !0
    }).call(t, function () {
        return this
    }())
}, function (e, t, n) {
    n(4), n(33), n(41), n(43), n(45), n(47), n(49), n(51), n(52), n(53), n(54), n(55), n(56), n(57), n(58), n(59), n(60), n(61), n(62), n(63), n(64), n(65), n(67), n(68), n(69), n(70), n(71), n(72), n(73), n(75), n(76), n(77), n(79), n(80), n(81), n(83), n(84), n(85), n(86), n(87), n(88), n(89), n(90), n(91), n(92), n(93), n(94), n(95), n(97), n(103), n(104), n(106), n(107), n(109), n(110), n(115), n(116), n(119), n(121), n(122), n(123), n(124), n(125), n(127), n(128), n(130), n(131), n(132), n(133), n(139), n(142), n(143), n(145), n(146), n(147), n(148), n(149), n(150), n(151), n(152), n(153), n(154), n(155), n(156), n(158), n(159), n(160), n(161), n(162), n(163), n(165), n(166), n(167), n(168), n(170), n(171), n(173), n(174), n(176), n(177), n(178),n(181),n(182),e.exports = n(16)
}, function (e, t, n) {
    "use strict";
    var r, i = n(5), o = n(6), a = n(8), s = n(9), l = n(11), c = n(13), u = n(14), d = n(15), f = n(20), p = n(21), h = n(19)("__proto__"), m = n(12), g = n(29), v = n(23), b = n(25), y = n(30), w = n(28), _ = n(31), k = n(27), x = n(24), C = n(7), S = Object.prototype, T = [], $ = T.slice, M = T.join, E = i.setDesc, L = i.getDesc, N = i.setDescs, I = n(32)(!1), A = {};
    o || (r = !C(function () {
        return 7 != E(l("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
    }), i.setDesc = function (e, t, n) {
        if (r)try {
            return E(e, t, n)
        } catch (i) {
        }
        if ("get"in n || "set"in n)throw TypeError("Accessors not supported!");
        return "value"in n && (g(e)[t] = n.value), e
    }, i.getDesc = function (e, t) {
        if (r)try {
            return L(e, t)
        } catch (n) {
        }
        return c(e, t) ? a(!S.propertyIsEnumerable.call(e, t), e[t]) : void 0
    }, i.setDescs = N = function (e, t) {
        g(e);
        for (var n, r = i.getKeys(t), o = r.length, a = 0; o > a;)i.setDesc(e, n = r[a++], t[n]);
        return e
    }), d(d.S + d.F * !o, "Object", {
        getOwnPropertyDescriptor: i.getDesc,
        defineProperty: i.setDesc,
        defineProperties: N
    });
    var j = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","), O = j.concat("length", "prototype"), z = j.length, D = function () {
        var e, t = l("iframe"), n = z, r = ">";
        for (t.style.display = "none", s.appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write("<script>document.F=Object</script" + r), e.close(), D = e.F; n--;)delete D.prototype[j[n]];
        return D()
    }, R = function (e, t) {
        return function (n) {
            var r, i = y(n), o = 0, a = [];
            for (r in i)r != h && c(i, r) && a.push(r);
            for (; t > o;)c(i, r = e[o++]) && (~I(a, r) || a.push(r));
            return a
        }
    }, B = function () {
    };
    d(d.S, "Object", {
        getPrototypeOf: i.getProto = i.getProto || function (e) {
                return e = b(e), c(e, h) ? e[h] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? S : null
            },
        getOwnPropertyNames: i.getNames = i.getNames || R(O, O.length, !0),
        create: i.create = i.create || function (e, t) {
                var n;
                return null !== e ? (B.prototype = g(e), n = new B, B.prototype = null, n[h] = e) : n = D(), void 0 === t ? n : N(n, t)
            },
        keys: i.getKeys = i.getKeys || R(j, z, !1)
    });
    var q = function (e, t, n) {
        if (!(t in A)) {
            for (var r = [], i = 0; t > i; i++)r[i] = "a[" + i + "]";
            A[t] = Function("F,a", "return new F(" + r.join(",") + ")")
        }
        return A[t](e, n)
    };
    d(d.P, "Function", {
        bind: function (e) {
            var t = v(this), n = $.call(arguments, 1), r = function () {
                var i = n.concat($.call(arguments));
                return this instanceof r ? q(t, i.length, i) : f(t, i, e)
            };
            return m(t.prototype) && (r.prototype = t.prototype), r
        }
    });
    var P = C(function () {
        s && $.call(s)
    });
    d(d.P + d.F * P, "Array", {
        slice: function (e, t) {
            var n = k(this.length), r = u(this);
            if (t = void 0 === t ? n : t, "Array" == r)return $.call(this, e, t);
            for (var i = _(e, n), o = _(t, n), a = k(o - i), s = Array(a), l = 0; a > l; l++)s[l] = "String" == r ? this.charAt(i + l) : this[i + l];
            return s
        }
    }), d(d.P + d.F * (x != Object), "Array", {
        join: function () {
            return M.apply(x(this), arguments)
        }
    }), d(d.S, "Array", {
        isArray: function (e) {
            return "Array" == u(e)
        }
    });
    var F = function (e) {
        return function (t, n) {
            v(t);
            var r = x(this), i = k(r.length), o = e ? i - 1 : 0, a = e ? -1 : 1;
            if (arguments.length < 2)for (; ;) {
                if (o in r) {
                    n = r[o], o += a;
                    break
                }
                if (o += a, e ? 0 > o : o >= i)throw TypeError("Reduce of empty array with no initial value")
            }
            for (; e ? o >= 0 : i > o; o += a)o in r && (n = t(n, r[o], o, this));
            return n
        }
    }, H = function (e) {
        return function (t) {
            return e(this, t, arguments[1])
        }
    };
    d(d.P, "Array", {
        forEach: i.each = i.each || H(p(0)),
        map: H(p(1)),
        filter: H(p(2)),
        some: H(p(3)),
        every: H(p(4)),
        reduce: F(!1),
        reduceRight: F(!0),
        indexOf: H(I),
        lastIndexOf: function (e, t) {
            var n = y(this), r = k(n.length), i = r - 1;
            for (arguments.length > 1 && (i = Math.min(i, w(t))), 0 > i && (i = k(r + i)); i >= 0; i--)if (i in n && n[i] === e)return i;
            return -1
        }
    }), d(d.S, "Date", {
        now: function () {
            return +new Date
        }
    });
    var W = function (e) {
        return e > 9 ? e : "0" + e
    }, U = new Date(-5e13 - 1), K = !(U.toISOString && "0385-07-25T07:06:39.999Z" == U.toISOString() && C(function () {
        new Date(0 / 0).toISOString()
    }));
    d(d.P + d.F * K, "Date", {
        toISOString: function () {
            if (!isFinite(this))throw RangeError("Invalid time value");
            var e = this, t = e.getUTCFullYear(), n = e.getUTCMilliseconds(), r = 0 > t ? "-" : t > 9999 ? "+" : "";
            return r + ("00000" + Math.abs(t)).slice(r ? -6 : -4) + "-" + W(e.getUTCMonth() + 1) + "-" + W(e.getUTCDate()) + "T" + W(e.getUTCHours()) + ":" + W(e.getUTCMinutes()) + ":" + W(e.getUTCSeconds()) + "." + (n > 99 ? n : "0" + W(n)) + "Z"
        }
    })
}, function (e) {
    var t = Object;
    e.exports = {
        create: t.create,
        getProto: t.getPrototypeOf,
        isEnum: {}.propertyIsEnumerable,
        getDesc: t.getOwnPropertyDescriptor,
        setDesc: t.defineProperty,
        setDescs: t.defineProperties,
        getKeys: t.keys,
        getNames: t.getOwnPropertyNames,
        getSymbols: t.getOwnPropertySymbols,
        each: [].forEach
    }
}, function (e, t, n) {
    e.exports = !n(7)(function () {
        return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
    })
}, function (e) {
    e.exports = function (e) {
        try {
            return !!e()
        } catch (t) {
            return !0
        }
    }
}, function (e) {
    e.exports = function (e, t) {
        return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t}
    }
}, function (e, t, n) {
    e.exports = n(10).document && document.documentElement
}, function (e) {
    var t = "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    e.exports = t, "number" == typeof __g && (__g = t)
}, function (e, t, n) {
    var r = n(12), i = n(10).document, o = r(i) && r(i.createElement);
    e.exports = function (e) {
        return o ? i.createElement(e) : {}
    }
}, function (e) {
    e.exports = function (e) {
        return null !== e && ("object" == typeof e || "function" == typeof e)
    }
}, function (e) {
    var t = {}.hasOwnProperty;
    e.exports = function (e, n) {
        return t.call(e, n)
    }
}, function (e) {
    var t = {}.toString;
    e.exports = function (e) {
        return t.call(e).slice(8, -1)
    }
}, function (e, t, n) {
    var r = n(10), i = n(16), o = n(17), a = n(18), s = "prototype", l = function (e, t) {
        return function () {
            return e.apply(t, arguments)
        }
    }, c = function (e, t, n) {
        var u, d, f, p, h = e & c.G, m = e & c.P, g = h ? r : e & c.S ? r[t] || (r[t] = {}) : (r[t] || {})[s], v = h ? i : i[t] || (i[t] = {});
        h && (n = t);
        for (u in n)d = !(e & c.F) && g && u in g, f = (d ? g : n)[u], p = e & c.B && d ? l(f, r) : m && "function" == typeof f ? l(Function.call, f) : f, g && !d && a(g, u, f), v[u] != f && o(v, u, p), m && ((v[s] || (v[s] = {}))[u] = f)
    };
    r.core = i, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, e.exports = c
}, function (e) {
    var t = e.exports = {};
    "number" == typeof __e && (__e = t)
}, function (e, t, n) {
    var r = n(5), i = n(8);
    e.exports = n(6) ? function (e, t, n) {
        return r.setDesc(e, t, i(1, n))
    } : function (e, t, n) {
        return e[t] = n, e
    }
}, function (e, t, n) {
    var r = n(10), i = n(17), o = n(19)("src"), a = "toString", s = Function[a], l = ("" + s).split(a);
    n(16).inspectSource = function (e) {
        return s.call(e)
    }, (e.exports = function (e, t, n, a) {
        "function" == typeof n && (i(n, o, e[t] ? "" + e[t] : l.join(String(t))), "name"in n || (n.name = t)), e === r ? e[t] = n : (a || delete e[t], i(e, t, n))
    })(Function.prototype, a, function () {
        return "function" == typeof this && this[o] || s.call(this)
    })
}, function (e) {
    var t = 0, n = Math.random();
    e.exports = function (e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++t + n).toString(36))
    }
}, function (e) {
    e.exports = function (e, t, n) {
        var r = void 0 === n;
        switch (t.length) {
            case 0:
                return r ? e() : e.call(n);
            case 1:
                return r ? e(t[0]) : e.call(n, t[0]);
            case 2:
                return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
            case 3:
                return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
            case 4:
                return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
        }
        return e.apply(n, t)
    }
}, function (e, t, n) {
    var r = n(22), i = n(24), o = n(25), a = n(27);
    e.exports = function (e) {
        var t = 1 == e, n = 2 == e, s = 3 == e, l = 4 == e, c = 6 == e, u = 5 == e || c;
        return function (d, f, p) {
            for (var h, m, g = o(d), v = i(g), b = r(f, p, 3), y = a(v.length), w = 0, _ = t ? Array(y) : n ? [] : void 0; y > w; w++)if ((u || w in v) && (h = v[w], m = b(h, w, g), e))if (t)_[w] = m; else if (m)switch (e) {
                case 3:
                    return !0;
                case 5:
                    return h;
                case 6:
                    return w;
                case 2:
                    _.push(h)
            } else if (l)return !1;
            return c ? -1 : s || l ? l : _
        }
    }
}, function (e, t, n) {
    var r = n(23);
    e.exports = function (e, t, n) {
        if (r(e), void 0 === t)return e;
        switch (n) {
            case 1:
                return function (n) {
                    return e.call(t, n)
                };
            case 2:
                return function (n, r) {
                    return e.call(t, n, r)
                };
            case 3:
                return function (n, r, i) {
                    return e.call(t, n, r, i)
                }
        }
        return function () {
            return e.apply(t, arguments)
        }
    }
}, function (e) {
    e.exports = function (e) {
        if ("function" != typeof e)throw TypeError(e + " is not a function!");
        return e
    }
}, function (e, t, n) {
    var r = n(14);
    e.exports = 0 in Object("z") ? Object : function (e) {
        return "String" == r(e) ? e.split("") : Object(e)
    }
}, function (e, t, n) {
    var r = n(26);
    e.exports = function (e) {
        return Object(r(e))
    }
}, function (e) {
    e.exports = function (e) {
        if (void 0 == e)throw TypeError("Can't call method on  " + e);
        return e
    }
}, function (e, t, n) {
    var r = n(28), i = Math.min;
    e.exports = function (e) {
        return e > 0 ? i(r(e), 9007199254740991) : 0
    }
}, function (e) {
    var t = Math.ceil, n = Math.floor;
    e.exports = function (e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? n : t)(e)
    }
}, function (e, t, n) {
    var r = n(12);
    e.exports = function (e) {
        if (!r(e))throw TypeError(e + " is not an object!");
        return e
    }
}, function (e, t, n) {
    var r = n(24), i = n(26);
    e.exports = function (e) {
        return r(i(e))
    }
}, function (e, t, n) {
    var r = n(28), i = Math.max, o = Math.min;
    e.exports = function (e, t) {
        return e = r(e), 0 > e ? i(e + t, 0) : o(e, t)
    }
}, function (e, t, n) {
    var r = n(30), i = n(27), o = n(31);
    e.exports = function (e) {
        return function (t, n, a) {
            var s, l = r(t), c = i(l.length), u = o(a, c);
            if (e && n != n) {
                for (; c > u;)if (s = l[u++], s != s)return !0
            } else for (; c > u; u++)if ((e || u in l) && l[u] === n)return e || u;
            return !e && -1
        }
    }
}, function (e, t, n) {
    "use strict";
    function r(e, t, n) {
        return n && f(O, t) ? (n.enumerable ? (f(e, I) && e[I][t] && (e[I][t] = !1), n = M(n, {enumerable: S(0, !1)})) : (f(e, I) || $(e, I, S(1, {})), e[I][t] = !0), R(e, t, n)) : $(e, t, n)
    }

    function i(e, t) {
        x(e);
        for (var n, i = k(t = C(t)), o = 0, a = i.length; a > o;)r(e, n = i[o++], t[n]);
        return e
    }

    function o(e, t) {
        return void 0 === t ? M(e) : i(M(e), t)
    }

    function a(e) {
        var t = A.call(this, e);
        return t || !f(this, e) || !f(O, e) || f(this, I) && this[I][e] ? t : !0
    }

    function s(e, t) {
        var n = T(e = C(e), t);
        return !n || !f(O, t) || f(e, I) && e[I][t] || (n.enumerable = !0), n
    }

    function l(e) {
        for (var t, n = E(C(e)), r = [], i = 0; n.length > i;)f(O, t = n[i++]) || t == I || r.push(t);
        return r
    }

    function c(e) {
        for (var t, n = E(C(e)), r = [], i = 0; n.length > i;)f(O, t = n[i++]) && r.push(O[t]);
        return r
    }

    var u = n(5), d = n(10), f = n(13), p = n(6), h = n(15), m = n(18), g = n(34), v = n(35), b = n(19), y = n(36), w = n(37), _ = n(38), k = n(39), x = n(29), C = n(30), S = n(8), T = u.getDesc, $ = u.setDesc, M = u.create, E = _.get, L = d.Symbol, N = !1, I = y("_hidden"), A = u.isEnum, j = g("symbol-registry"), O = g("symbols"), z = "function" == typeof L, D = Object.prototype, R = p ? function () {
        try {
            return M($({}, I, {
                    get: function () {
                        return $(this, I, {value: !1})[I]
                    }
                }))[I] || $
        } catch (e) {
            return function (e, t, n) {
                var r = T(D, t);
                r && delete D[t], $(e, t, n), r && e !== D && $(D, t, r)
            }
        }
    }() : $, B = function (e) {
        var t = O[e] = M(L.prototype);
        return t._k = e, p && N && R(D, e, {
            configurable: !0, set: function (t) {
                f(this, I) && f(this[I], e) && (this[I][e] = !1), R(this, e, S(1, t))
            }
        }), t
    };
    z || (L = function () {
        if (this instanceof L)throw TypeError("Symbol is not a constructor");
        return B(b(arguments[0]))
    }, m(L.prototype, "toString", function () {
        return this._k
    }), u.create = o, u.isEnum = a, u.getDesc = s, u.setDesc = r, u.setDescs = i, u.getNames = _.get = l, u.getSymbols = c, p && !n(40) && m(D, "propertyIsEnumerable", a, !0));
    var q = {
        "for": function (e) {
            return f(j, e += "") ? j[e] : j[e] = L(e)
        }, keyFor: function (e) {
            return w(j, e)
        }, useSetter: function () {
            N = !0
        }, useSimple: function () {
            N = !1
        }
    };
    u.each.call("hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), function (e) {
        var t = y(e);
        q[e] = z ? t : B(t)
    }), N = !0, h(h.G + h.W, {Symbol: L}), h(h.S, "Symbol", q), h(h.S + h.F * !z, "Object", {
        create: o,
        defineProperty: r,
        defineProperties: i,
        getOwnPropertyDescriptor: s,
        getOwnPropertyNames: l,
        getOwnPropertySymbols: c
    }), v(L, "Symbol"), v(Math, "Math", !0), v(d.JSON, "JSON", !0)
}, function (e, t, n) {
    var r = n(10), i = "__core-js_shared__", o = r[i] || (r[i] = {});
    e.exports = function (e) {
        return o[e] || (o[e] = {})
    }
}, function (e, t, n) {
    var r = n(13), i = n(17), o = n(36)("toStringTag");
    e.exports = function (e, t, n) {
        e && !r(e = n ? e : e.prototype, o) && i(e, o, t)
    }
}, function (e, t, n) {
    var r = n(34)("wks"), i = n(10).Symbol;
    e.exports = function (e) {
        return r[e] || (r[e] = i && i[e] || (i || n(19))("Symbol." + e))
    }
}, function (e, t, n) {
    var r = n(5), i = n(30);
    e.exports = function (e, t) {
        for (var n, o = i(e), a = r.getKeys(o), s = a.length, l = 0; s > l;)if (o[n = a[l++]] === t)return n
    }
}, function (e, t, n) {
    var r = {}.toString, i = n(30), o = n(5).getNames, a = "object" == typeof window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], s = function (e) {
        try {
            return o(e)
        } catch (t) {
            return a.slice()
        }
    };
    e.exports.get = function (e) {
        return a && "[object Window]" == r.call(e) ? s(e) : o(i(e))
    }
}, function (e, t, n) {
    var r = n(5);
    e.exports = function (e) {
        var t = r.getKeys(e), n = r.getSymbols;
        if (n)for (var i, o = n(e), a = r.isEnum, s = 0; o.length > s;)a.call(e, i = o[s++]) && t.push(i);
        return t
    }
}, function (e) {
    e.exports = !1
}, function (e, t, n) {
    var r = n(15);
    r(r.S, "Object", {assign: n(42)})
}, function (e, t, n) {
    var r = n(25), i = n(24), o = n(39);
    e.exports = Object.assign || function (e) {
            for (var t = r(e), n = arguments.length, a = 1; n > a;)for (var s, l = i(arguments[a++]), c = o(l), u = c.length, d = 0; u > d;)t[s = c[d++]] = l[s];
            return t
        }
}, function (e, t, n) {
    var r = n(15);
    r(r.S, "Object", {is: n(44)})
}, function (e) {
    e.exports = Object.is || function (e, t) {
            return e === t ? 0 !== e || 1 / e === 1 / t : e != e && t != t
        }
}, function (e, t, n) {
    var r = n(15);
    r(r.S, "Object", {setPrototypeOf: n(46).set})
}, function (e, t, n) {
    var r = n(5).getDesc, i = n(12), o = n(29), a = function (e, t) {
        if (o(e), !i(t) && null !== t)throw TypeError(t + ": can't set as prototype!")
    };
    e.exports = {
        set: Object.setPrototypeOf || ("__proto__"in{} ? function (e, t) {
            try {
                t = n(22)(Function.call, r(Object.prototype, "__proto__").set, 2), t({}, [])
            } catch (i) {
                e = !0
            }
            return function (n, r) {
                return a(n, r), e ? n.__proto__ = r : t(n, r), n
            }
        }() : void 0), check: a
    }
}, function (e, t, n) {
    "use strict";
    var r = n(48), i = {};
    i[n(36)("toStringTag")] = "z", i + "" != "[object z]" && n(18)(Object.prototype, "toString", function () {
        return "[object " + r(this) + "]"
    }, !0)
}, function (e, t, n) {
    var r = n(14), i = n(36)("toStringTag"), o = "Arguments" == r(function () {
            return arguments
        }());
    e.exports = function (e) {
        var t, n, a;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = (t = Object(e))[i]) ? n : o ? r(t) : "Object" == (a = r(t)) && "function" == typeof t.callee ? "Arguments" : a
    }
}, function (e, t, n) {
    var r = n(12);
    n(50)("freeze", function (e) {
        return function (t) {
            return e && r(t) ? e(t) : t
        }
    })
}, function (e, t, n) {
    e.exports = function (e, t) {
        var r = n(15), i = (n(16).Object || {})[e] || Object[e], o = {};
        o[e] = t(i), r(r.S + r.F * n(7)(function () {
                i(1)
            }), "Object", o)
    }
}, function (e, t, n) {
    var r = n(12);
    n(50)("seal", function (e) {
        return function (t) {
            return e && r(t) ? e(t) : t
        }
    })
}, function (e, t, n) {
    var r = n(12);
    n(50)("preventExtensions", function (e) {
        return function (t) {
            return e && r(t) ? e(t) : t
        }
    })
}, function (e, t, n) {
    var r = n(12);
    n(50)("isFrozen", function (e) {
        return function (t) {
            return r(t) ? e ? e(t) : !1 : !0
        }
    })
}, function (e, t, n) {
    var r = n(12);
    n(50)("isSealed", function (e) {
        return function (t) {
            return r(t) ? e ? e(t) : !1 : !0
        }
    })
}, function (e, t, n) {
    var r = n(12);
    n(50)("isExtensible", function (e) {
        return function (t) {
            return r(t) ? e ? e(t) : !0 : !1
        }
    })
}, function (e, t, n) {
    var r = n(30);
    n(50)("getOwnPropertyDescriptor", function (e) {
        return function (t, n) {
            return e(r(t), n)
        }
    })
}, function (e, t, n) {
    var r = n(25);
    n(50)("getPrototypeOf", function (e) {
        return function (t) {
            return e(r(t))
        }
    })
}, function (e, t, n) {
    var r = n(25);
    n(50)("keys", function (e) {
        return function (t) {
            return e(r(t))
        }
    })
}, function (e, t, n) {
    n(50)("getOwnPropertyNames", function () {
        return n(38).get
    })
}, function (e, t, n) {
    var r = n(5).setDesc, i = n(8), o = n(13), a = Function.prototype, s = /^\s*function ([^ (]*)/, l = "name";
    l in a || n(6) && r(a, l, {
        configurable: !0, get: function () {
            var e = ("" + this).match(s), t = e ? e[1] : "";
            return o(this, l) || r(this, l, i(5, t)), t
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(5), i = n(12), o = n(36)("hasInstance"), a = Function.prototype;
    o in a || r.setDesc(a, o, {
        value: function (e) {
            if ("function" != typeof this || !i(e))return !1;
            if (!i(this.prototype))return e instanceof this;
            for (; e = r.getProto(e);)if (this.prototype === e)return !0;
            return !1
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(5), i = n(10), o = n(13), a = n(14), s = n(12), l = n(7), c = "Number", u = i[c], d = u, f = u.prototype, p = a(r.create(f)) == c, h = function (e) {
        var t, n;
        if ("function" == typeof(t = e.valueOf) && !s(n = t.call(e)))return n;
        if ("function" == typeof(t = e.toString) && !s(n = t.call(e)))return n;
        throw TypeError("Can't convert object to number")
    }, m = function (e) {
        if (s(e) && (e = h(e)), "string" == typeof e && e.length > 2 && 48 == e.charCodeAt(0)) {
            var t = !1;
            switch (e.charCodeAt(1)) {
                case 66:
                case 98:
                    t = !0;
                case 79:
                case 111:
                    return parseInt(e.slice(2), t ? 2 : 8)
            }
        }
        return +e
    };
    u("0o1") && u("0b1") || (u = function (e) {
        var t = this;
        return t instanceof u && (p ? l(function () {
            f.valueOf.call(t)
        }) : a(t) != c) ? new d(m(e)) : m(e)
    }, r.each.call(n(6) ? r.getNames(d) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), function (e) {
        o(d, e) && !o(u, e) && r.setDesc(u, e, r.getDesc(d, e))
    }), u.prototype = f, f.constructor = u, n(18)(i, c, u))
}, function (e, t, n) {
    var r = n(15);
    r(r.S, "Number", {EPSILON: Math.pow(2, -52)})
}, function (e, t, n) {
    var r = n(15), i = n(10).isFinite;
    r(r.S, "Number", {
        isFinite: function (e) {
            return "number" == typeof e && i(e)
        }
    })
}, function (e, t, n) {
    var r = n(15);
    r(r.S, "Number", {isInteger: n(66)})
}, function (e, t, n) {
    var r = n(12), i = Math.floor;
    e.exports = function (e) {
        return !r(e) && isFinite(e) && i(e) === e
    }
}, function (e, t, n) {
    var r = n(15);
    r(r.S, "Number", {
        isNaN: function (e) {
            return e != e
        }
    })
}, function (e, t, n) {
    var r = n(15), i = n(66), o = Math.abs;
    r(r.S, "Number", {
        isSafeInteger: function (e) {
            return i(e) && o(e) <= 9007199254740991
        }
    })
}, function (e, t, n) {
    var r = n(15);
    r(r.S, "Number", {MAX_SAFE_INTEGER: 9007199254740991})
}, function (e, t, n) {
    var r = n(15);
    r(r.S, "Number", {MIN_SAFE_INTEGER: -9007199254740991})
}, function (e, t, n) {
    var r = n(15);
    r(r.S, "Number", {parseFloat: parseFloat})
}, function (e, t, n) {
    var r = n(15);
    r(r.S, "Number", {parseInt: parseInt})
}, function (e, t, n) {
    var r = n(15), i = n(74), o = Math.sqrt, a = Math.acosh;
    r(r.S + r.F * !(a && 710 == Math.floor(a(Number.MAX_VALUE))), "Math", {
        acosh: function (e) {
            return (e = +e) < 1 ? 0 / 0 : e > 94906265.62425156 ? Math.log(e) + Math.LN2 : i(e - 1 + o(e - 1) * o(e + 1))
        }
    })
}, function (e) {
    e.exports = Math.log1p || function (e) {
            return (e = +e) > -1e-8 && 1e-8 > e ? e - e * e / 2 : Math.log(1 + e)
        }
}, function (e, t, n) {
    function r(e) {
        return isFinite(e = +e) && 0 != e ? 0 > e ? -r(-e) : Math.log(e + Math.sqrt(e * e + 1)) : e
    }

    var i = n(15);
    i(i.S, "Math", {asinh: r})
}, function (e, t, n) {
    var r = n(15);
    r(r.S, "Math", {
        atanh: function (e) {
            return 0 == (e = +e) ? e : Math.log((1 + e) / (1 - e)) / 2
        }
    })
}, function (e, t, n) {
    var r = n(15), i = n(78);
    r(r.S, "Math", {
        cbrt: function (e) {
            return i(e = +e) * Math.pow(Math.abs(e), 1 / 3)
        }
    })
}, function (e) {
    e.exports = Math.sign || function (e) {
            return 0 == (e = +e) || e != e ? e : 0 > e ? -1 : 1
        }
}, function (e, t, n) {
    var r = n(15);
    r(r.S, "Math", {
        clz32: function (e) {
            return (e >>>= 0) ? 31 - Math.floor(Math.log(e + .5) * Math.LOG2E) : 32
        }
    })
}, function (e, t, n) {
    var r = n(15), i = Math.exp;
    r(r.S, "Math", {
        cosh: function (e) {
            return (i(e = +e) + i(-e)) / 2
        }
    })
}, function (e, t, n) {
    var r = n(15);
    r(r.S, "Math", {expm1: n(82)})
}, function (e) {
    e.exports = Math.expm1 || function (e) {
            return 0 == (e = +e) ? e : e > -1e-6 && 1e-6 > e ? e + e * e / 2 : Math.exp(e) - 1
        }
}, function (e, t, n) {
    var r = n(15), i = n(78), o = Math.pow, a = o(2, -52), s = o(2, -23), l = o(2, 127) * (2 - s), c = o(2, -126), u = function (e) {
        return e + 1 / a - 1 / a
    };
    r(r.S, "Math", {
        fround: function (e) {
            var t, n, r = Math.abs(e), o = i(e);
            return c > r ? o * u(r / c / s) * c * s : (t = (1 + s / a) * r, n = t - (t - r), n > l || n != n ? 1 / 0 * o : o * n)
        }
    })
}, function (e, t, n) {
    var r = n(15), i = Math.abs;
    r(r.S, "Math", {
        hypot: function () {
            for (var e, t, n = 0, r = 0, o = arguments.length, a = 0; o > r;)e = i(arguments[r++]), e > a ? (t = a / e, n = n * t * t + 1, a = e) : e > 0 ? (t = e / a, n += t * t) : n += e;
            return 1 / 0 === a ? 1 / 0 : a * Math.sqrt(n)
        }
    })
}, function (e, t, n) {
    var r = n(15);
    r(r.S + r.F * n(7)(function () {
            return -5 != Math.imul(4294967295, 5)
        }), "Math", {
        imul: function (e, t) {
            var n = 65535, r = +e, i = +t, o = n & r, a = n & i;
            return 0 | o * a + ((n & r >>> 16) * a + o * (n & i >>> 16) << 16 >>> 0)
        }
    })
}, function (e, t, n) {
    var r = n(15);
    r(r.S, "Math", {
        log10: function (e) {
            return Math.log(e) / Math.LN10
        }
    })
}, function (e, t, n) {
    var r = n(15);
    r(r.S, "Math", {log1p: n(74)})
}, function (e, t, n) {
    var r = n(15);
    r(r.S, "Math", {
        log2: function (e) {
            return Math.log(e) / Math.LN2
        }
    })
}, function (e, t, n) {
    var r = n(15);
    r(r.S, "Math", {sign: n(78)})
}, function (e, t, n) {
    var r = n(15), i = n(82), o = Math.exp;
    r(r.S, "Math", {
        sinh: function (e) {
            return Math.abs(e = +e) < 1 ? (i(e) - i(-e)) / 2 : (o(e - 1) - o(-e - 1)) * (Math.E / 2)
        }
    })
}, function (e, t, n) {
    var r = n(15), i = n(82), o = Math.exp;
    r(r.S, "Math", {
        tanh: function (e) {
            var t = i(e = +e), n = i(-e);
            return 1 / 0 == t ? 1 : 1 / 0 == n ? -1 : (t - n) / (o(e) + o(-e))
        }
    })
}, function (e, t, n) {
    var r = n(15);
    r(r.S, "Math", {
        trunc: function (e) {
            return (e > 0 ? Math.floor : Math.ceil)(e)
        }
    })
}, function (e, t, n) {
    var r = n(15), i = n(31), o = String.fromCharCode, a = String.fromCodePoint;
    r(r.S + r.F * (!!a && 1 != a.length), "String", {
        fromCodePoint: function () {
            for (var e, t = [], n = arguments.length, r = 0; n > r;) {
                if (e = +arguments[r++], i(e, 1114111) !== e)throw RangeError(e + " is not a valid code point");
                t.push(65536 > e ? o(e) : o(((e -= 65536) >> 10) + 55296, e % 1024 + 56320))
            }
            return t.join("")
        }
    })
}, function (e, t, n) {
    var r = n(15), i = n(30), o = n(27);
    r(r.S, "String", {
        raw: function (e) {
            for (var t = i(e.raw), n = o(t.length), r = arguments.length, a = [], s = 0; n > s;)a.push(String(t[s++])), r > s && a.push(String(arguments[s]));
            return a.join("")
        }
    })
}, function (e, t, n) {
    "use strict";
    n(96)("trim", function (e) {
        return function () {
            return e(this, 3)
        }
    })
}, function (e, t, n) {
    var r = function (e, t) {
        return e = String(o(e)), 1 & t && (e = e.replace(c, "")), 2 & t && (e = e.replace(u, "")), e
    }, i = n(15), o = n(26), a = "	\n\f\r   ᠎             　\u2028\u2029﻿", s = "[" + a + "]", l = "​", c = RegExp("^" + s + s + "*"), u = RegExp(s + s + "*$");
    e.exports = function (e, t) {
        var o = {};
        o[e] = t(r), i(i.P + i.F * n(7)(function () {
                return !!a[e]() || l[e]() != l
            }), "String", o)
    }
}, function (e, t, n) {
    "use strict";
    var r = n(98)(!0);
    n(99)(String, "String", function (e) {
        this._t = String(e), this._i = 0
    }, function () {
        var e, t = this._t, n = this._i;
        return n >= t.length ? {value: void 0, done: !0} : (e = r(t, n), this._i += e.length, {value: e, done: !1})
    })
}, function (e, t, n) {
    var r = n(28), i = n(26);
    e.exports = function (e) {
        return function (t, n) {
            var o, a, s = String(i(t)), l = r(n), c = s.length;
            return 0 > l || l >= c ? e ? "" : void 0 : (o = s.charCodeAt(l), 55296 > o || o > 56319 || l + 1 === c || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? e ? s.charAt(l) : o : e ? s.slice(l, l + 2) : (o - 55296 << 10) + (a - 56320) + 65536)
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = n(40), i = n(15), o = n(18), a = n(17), s = n(13), l = n(36)("iterator"), c = n(100), u = "@@iterator", d = "keys", f = "values", p = function () {
        return this
    };
    e.exports = function (e, t, h, m, g, v, b) {
        n(101)(h, t, m);
        var y, w, _ = function (e) {
            switch (e) {
                case d:
                    return function () {
                        return new h(this, e)
                    };
                case f:
                    return function () {
                        return new h(this, e)
                    }
            }
            return function () {
                return new h(this, e)
            }
        }, k = t + " Iterator", x = e.prototype, C = x[l] || x[u] || g && x[g], S = C || _(g);
        if (C) {
            var T = n(5).getProto(S.call(new e));
            n(35)(T, k, !0), !r && s(x, u) && a(T, l, p)
        }
        if ((!r || b) && a(x, l, S), c[t] = S, c[k] = p, g)if (y = {
                keys: v ? S : _(d),
                values: g == f ? S : _(f),
                entries: g != f ? S : _("entries")
            }, b)for (w in y)w in x || o(x, w, y[w]); else i(i.P + i.F * n(102), t, y)
    }
}, function (e) {
    e.exports = {}
}, function (e, t, n) {
    "use strict";
    var r = n(5), i = {};
    n(17)(i, n(36)("iterator"), function () {
        return this
    }), e.exports = function (e, t, o) {
        e.prototype = r.create(i, {next: n(8)(1, o)}), n(35)(e, t + " Iterator")
    }
}, function (e) {
    e.exports = "keys"in[] && !("next"in[].keys())
}, function (e, t, n) {
    "use strict";
    var r = n(15), i = n(98)(!1);
    r(r.P, "String", {
        codePointAt: function (e) {
            return i(this, e)
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(15), i = n(27), o = n(105);
    r(r.P + r.F * !n(7)(function () {
            "q".endsWith(/./)
        }), "String", {
        endsWith: function (e) {
            var t = o(this, e, "endsWith"), n = arguments[1], r = i(t.length), a = void 0 === n ? r : Math.min(i(n), r), s = String(e);
            return t.slice(a - s.length, a) === s
        }
    })
}, function (e, t, n) {
    var r = n(26), i = n(14);
    e.exports = function (e, t, n) {
        if ("RegExp" == i(t))throw TypeError("String#" + n + " doesn't accept regex!");
        return String(r(e))
    }
}, function (e, t, n) {
    "use strict";
    var r = n(15), i = n(105);
    r(r.P, "String", {
        includes: function (e) {
            return !!~i(this, e, "includes").indexOf(e, arguments[1])
        }
    })
}, function (e, t, n) {
    var r = n(15);
    r(r.P, "String", {repeat: n(108)})
}, function (e, t, n) {
    "use strict";
    var r = n(28), i = n(26);
    e.exports = function (e) {
        var t = String(i(this)), n = "", o = r(e);
        if (0 > o || 1 / 0 == o)throw RangeError("Count can't be negative");
        for (; o > 0; (o >>>= 1) && (t += t))1 & o && (n += t);
        return n
    }
}, function (e, t, n) {
    "use strict";
    var r = n(15), i = n(27), o = n(105);
    r(r.P + r.F * !n(7)(function () {
            "q".startsWith(/./)
        }), "String", {
        startsWith: function (e) {
            var t = o(this, e, "startsWith"), n = i(Math.min(arguments[1], t.length)), r = String(e);
            return t.slice(n, n + r.length) === r
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(22), i = n(15), o = n(25), a = n(111), s = n(112), l = n(27), c = n(113);
    i(i.S + i.F * !n(114)(function (e) {
            Array.from(e)
        }), "Array", {
        from: function (e) {
            var t, n, i, u, d = o(e), f = "function" == typeof this ? this : Array, p = arguments[1], h = void 0 !== p, m = 0, g = c(d);
            if (h && (p = r(p, arguments[2], 2)), void 0 == g || f == Array && s(g))for (n = new f(t = l(d.length)); t > m; m++)n[m] = h ? p(d[m], m) : d[m]; else for (u = g.call(d), n = new f; !(i = u.next()).done; m++)n[m] = h ? a(u, p, [i.value, m], !0) : i.value;
            return n.length = m, n
        }
    })
}, function (e, t, n) {
    var r = n(29);
    e.exports = function (e, t, n, i) {
        try {
            return i ? t(r(n)[0], n[1]) : t(n)
        } catch (o) {
            var a = e["return"];
            throw void 0 !== a && r(a.call(e)), o
        }
    }
}, function (e, t, n) {
    var r = n(100), i = n(36)("iterator");
    e.exports = function (e) {
        return (r.Array || Array.prototype[i]) === e
    }
}, function (e, t, n) {
    var r = n(48), i = n(36)("iterator"), o = n(100);
    e.exports = n(16).getIteratorMethod = function (e) {
        return void 0 != e ? e[i] || e["@@iterator"] || o[r(e)] : void 0
    }
}, function (e, t, n) {
    var r = n(36)("iterator"), i = !1;
    try {
        var o = [7][r]();
        o["return"] = function () {
            i = !0
        }, Array.from(o, function () {
            throw 2
        })
    } catch (a) {
    }
    e.exports = function (e) {
        if (!i)return !1;
        var t = !1;
        try {
            var n = [7], o = n[r]();
            o.next = function () {
                t = !0
            }, n[r] = function () {
                return o
            }, e(n)
        } catch (a) {
        }
        return t
    }
}, function (e, t, n) {
    "use strict";
    var r = n(15);
    r(r.S, "Array", {
        of: function () {
            for (var e = 0, t = arguments.length, n = new ("function" == typeof this ? this : Array)(t); t > e;)n[e] = arguments[e++];
            return n.length = t, n
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(117), i = n(118), o = n(100), a = n(30);
    n(99)(Array, "Array", function (e, t) {
        this._t = a(e), this._i = 0, this._k = t
    }, function () {
        var e = this._t, t = this._k, n = this._i++;
        return !e || n >= e.length ? (this._t = void 0, i(1)) : "keys" == t ? i(0, n) : "values" == t ? i(0, e[n]) : i(0, [n, e[n]])
    }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries")
}, function (e, t, n) {
    var r = n(36)("unscopables");
    r in[] || n(17)(Array.prototype, r, {}), e.exports = function (e) {
        [][r][e] = !0
    }
}, function (e) {
    e.exports = function (e, t) {
        return {value: t, done: !!e}
    }
}, function (e, t, n) {
    n(120)(Array)
}, function (e, t, n) {
    "use strict";
    var r = n(5), i = n(36)("species");
    e.exports = function (e) {
        !n(6) || i in e || r.setDesc(e, i, {
            configurable: !0, get: function () {
                return this
            }
        })
    }
}, function (e, t, n) {
    "use strict";
    var r = n(15), i = n(25), o = n(31), a = n(27);
    r(r.P, "Array", {
        copyWithin: function (e, t) {
            var n = i(this), r = a(n.length), s = o(e, r), l = o(t, r), c = arguments[2], u = void 0 === c ? r : o(c, r), d = Math.min(u - l, r - s), f = 1;
            for (s > l && l + d > s && (f = -1, l = l + d - 1, s = s + d - 1); d-- > 0;)l in n ? n[s] = n[l] : delete n[s], s += f, l += f;
            return n
        }
    }), n(117)("copyWithin")
}, function (e, t, n) {
    "use strict";
    var r = n(15), i = n(25), o = n(31), a = n(27);
    r(r.P, "Array", {
        fill: function (e) {
            for (var t = i(this, !0), n = a(t.length), r = o(arguments[1], n), s = arguments[2], l = void 0 === s ? n : o(s, n); l > r;)t[r++] = e;
            return t
        }
    }), n(117)("fill")
}, function (e, t, n) {
    "use strict";
    var r = "find", i = n(15), o = !0, a = n(21)(5);
    r in[] && Array(1)[r](function () {
        o = !1
    }), i(i.P + i.F * o, "Array", {
        find: function (e) {
            return a(this, e, arguments[1])
        }
    }), n(117)(r)
}, function (e, t, n) {
    "use strict";
    var r = "findIndex", i = n(15), o = !0, a = n(21)(6);
    r in[] && Array(1)[r](function () {
        o = !1
    }), i(i.P + i.F * o, "Array", {
        findIndex: function (e) {
            return a(this, e, arguments[1])
        }
    }), n(117)(r)
}, function (e, t, n) {
    var r = n(5), i = n(10), o = n(14), a = n(126), s = i.RegExp, l = s, c = s.prototype, u = /a/g, d = new s(u) !== u, f = function () {
        try {
            return "/a/i" == s(u, "i")
        } catch (e) {
        }
    }();
    n(6) && (d && f || (s = function (e, t) {
        var n = "RegExp" == o(e), r = void 0 === t;
        return this instanceof s || !n || !r ? d ? new l(n && !r ? e.source : e, t) : new l(n ? e.source : e, n && r ? a.call(e) : t) : e
    }, r.each.call(r.getNames(l), function (e) {
        e in s || r.setDesc(s, e, {
            configurable: !0, get: function () {
                return l[e]
            }, set: function (t) {
                l[e] = t
            }
        })
    }), c.constructor = s, s.prototype = c, n(18)(i, "RegExp", s))), n(120)(s)
}, function (e, t, n) {
    "use strict";
    var r = n(29);
    e.exports = function () {
        var e = r(this), t = "";
        return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
    }
}, function (e, t, n) {
    var r = n(5);
    n(6) && "g" != /./g.flags && r.setDesc(RegExp.prototype, "flags", {configurable: !0, get: n(126)})
}, function (e, t, n) {
    n(129)("match", 1, function (e, t) {
        return function (n) {
            "use strict";
            var r = e(this), i = void 0 == n ? void 0 : n[t];
            return void 0 !== i ? i.call(n, r) : new RegExp(n)[t](String(r))
        }
    })
}, function (e, t, n) {
    "use strict";
    e.exports = function (e, t, r) {
        var i = n(26), o = n(36)(e), a = ""[e];
        n(7)(function () {
            var t = {};
            return t[o] = function () {
                return 7
            }, 7 != ""[e](t)
        }) && (n(18)(String.prototype, e, r(i, o, a)), n(17)(RegExp.prototype, o, 2 == t ? function (e, t) {
            return a.call(e, this, t)
        } : function (e) {
            return a.call(e, this)
        }))
    }
}, function (e, t, n) {
    n(129)("replace", 2, function (e, t, n) {
        return function (r, i) {
            "use strict";
            var o = e(this), a = void 0 == r ? void 0 : r[t];
            return void 0 !== a ? a.call(r, o, i) : n.call(String(o), r, i)
        }
    })
}, function (e, t, n) {
    n(129)("search", 1, function (e, t) {
        return function (n) {
            "use strict";
            var r = e(this), i = void 0 == n ? void 0 : n[t];
            return void 0 !== i ? i.call(n, r) : new RegExp(n)[t](String(r))
        }
    })
}, function (e, t, n) {
    n(129)("split", 2, function (e, t, n) {
        return function (r, i) {
            "use strict";
            var o = e(this), a = void 0 == r ? void 0 : r[t];
            return void 0 !== a ? a.call(r, o, i) : n.call(String(o), r, i)
        }
    })
}, function (e, t, n) {
    "use strict";
    var r, i = n(5), o = n(40), a = n(10), s = n(22), l = n(48), c = n(15), u = n(12), d = n(29), f = n(23), p = n(134), h = n(135), m = n(46).set, g = n(44), v = n(120), b = n(36)("species"), y = n(19)("record"), w = n(136), _ = "Promise", k = a.process, x = "process" == l(k), C = a[_], S = function (e) {
        var t = new C(function () {
        });
        return e && (t.constructor = Object), C.resolve(t) === t
    }, T = function () {
        function e(t) {
            var n = new C(t);
            return m(n, e.prototype), n
        }

        var t = !1;
        try {
            if (t = C && C.resolve && S(), m(e, C), e.prototype = i.create(C.prototype, {constructor: {value: e}}), e.resolve(5).then(function () {
                })instanceof e || (t = !1), t && n(6)) {
                var r = !1;
                C.resolve(i.setDesc({}, "then", {
                    get: function () {
                        r = !0
                    }
                })), t = r
            }
        } catch (o) {
            t = !1
        }
        return t
    }(), $ = function (e) {
        return u(e) && (T ? "Promise" == l(e) : y in e)
    }, M = function (e, t) {
        return o && e === C && t === r ? !0 : g(e, t)
    }, E = function (e) {
        var t = d(e)[b];
        return void 0 != t ? t : e
    }, L = function (e) {
        var t;
        return u(e) && "function" == typeof(t = e.then) ? t : !1
    }, N = function (e, t) {
        if (!e.n) {
            e.n = !0;
            var n = e.c;
            w(function () {
                for (var r = e.v, i = 1 == e.s, o = 0, s = function (t) {
                    var n, o, a = i ? t.ok : t.fail;
                    try {
                        a ? (i || (e.h = !0), n = a === !0 ? r : a(r), n === t.P ? t.rej(TypeError("Promise-chain cycle")) : (o = L(n)) ? o.call(n, t.res, t.rej) : t.res(n)) : t.rej(r)
                    } catch (s) {
                        t.rej(s)
                    }
                }; n.length > o;)s(n[o++]);
                n.length = 0, e.n = !1, t && setTimeout(function () {
                    w(function () {
                        I(e.p) && (x ? k.emit("unhandledRejection", r, e.p) : a.console && console.error && console.error("Unhandled promise rejection", r)), e.a = void 0
                    })
                }, 1)
            })
        }
    }, I = function (e) {
        var t, n = e[y], r = n.a || n.c, i = 0;
        if (n.h)return !1;
        for (; r.length > i;)if (t = r[i++], t.fail || !I(t.P))return !1;
        return !0
    }, A = function (e) {
        var t = this;
        t.d || (t.d = !0, t = t.r || t, t.v = e, t.s = 2, t.a = t.c.slice(), N(t, !0))
    }, j = function (e) {
        var t, n = this;
        if (!n.d) {
            n.d = !0, n = n.r || n;
            try {
                (t = L(e)) ? w(function () {
                    var r = {r: n, d: !1};
                    try {
                        t.call(e, s(j, r, 1), s(A, r, 1))
                    } catch (i) {
                        A.call(r, i)
                    }
                }) : (n.v = e, n.s = 1, N(n, !1))
            } catch (r) {
                A.call({r: n, d: !1}, r)
            }
        }
    };
    T || (C = function (e) {
        f(e);
        var t = {p: p(this, C, _), c: [], a: void 0, s: 0, d: !1, v: void 0, h: !1, n: !1};
        this[y] = t;
        try {
            e(s(j, t, 1), s(A, t, 1))
        } catch (n) {
            A.call(t, n)
        }
    }, n(138)(C.prototype, {
        then: function (e, t) {
            var n = d(d(this).constructor)[b], r = {
                ok: "function" == typeof e ? e : !0,
                fail: "function" == typeof t ? t : !1
            }, i = r.P = new (void 0 != n ? n : C)(function (e, t) {
                r.res = f(e), r.rej = f(t)
            }), o = this[y];
            return o.c.push(r), o.a && o.a.push(r), o.s && N(o, !1), i
        }, "catch": function (e) {
            return this.then(void 0, e)
        }
    })), c(c.G + c.W + c.F * !T, {Promise: C}), n(35)(C, _), v(C), v(r = n(16)[_]), c(c.S + c.F * !T, _, {
        reject: function (e) {
            return new this(function (t, n) {
                n(e)
            })
        }
    }), c(c.S + c.F * (!T || S(!0)), _, {
        resolve: function (e) {
            return $(e) && M(e.constructor, this) ? e : new this(function (t) {
                t(e)
            })
        }
    }), c(c.S + c.F * !(T && n(114)(function (e) {
            C.all(e)["catch"](function () {
            })
        })), _, {
        all: function (e) {
            var t = E(this), n = [];
            return new t(function (r, o) {
                h(e, !1, n.push, n);
                var a = n.length, s = Array(a);
                a ? i.each.call(n, function (e, n) {
                    t.resolve(e).then(function (e) {
                        s[n] = e, --a || r(s)
                    }, o)
                }) : r(s)
            })
        }, race: function (e) {
            var t = E(this);
            return new t(function (n, r) {
                h(e, !1, function (e) {
                    t.resolve(e).then(n, r)
                })
            })
        }
    })
}, function (e) {
    e.exports = function (e, t, n) {
        if (!(e instanceof t))throw TypeError(n + ": use the 'new' operator!");
        return e
    }
}, function (e, t, n) {
    var r = n(22), i = n(111), o = n(112), a = n(29), s = n(27), l = n(113);
    e.exports = function (e, t, n, c) {
        var u, d, f, p = l(e), h = r(n, c, t ? 2 : 1), m = 0;
        if ("function" != typeof p)throw TypeError(e + " is not iterable!");
        if (o(p))for (u = s(e.length); u > m; m++)t ? h(a(d = e[m])[0], d[1]) : h(e[m]); else for (f = p.call(e); !(d = f.next()).done;)i(f, h, d.value, t)
    }
}, function (e, t, n) {
    function r() {
        for (; i;)i.fn.call(), i = i.next;
        o = void 0
    }

    var i, o, a, s = n(10), l = n(137).set, c = s.MutationObserver || s.WebKitMutationObserver, u = s.process;
    if ("process" == n(14)(u))a = function () {
        u.nextTick(r)
    }; else if (c) {
        var d = 1, f = document.createTextNode("");
        new c(r).observe(f, {characterData: !0}), a = function () {
            f.data = d = -d
        }
    } else a = function () {
        l.call(s, r)
    };
    e.exports = function (e) {
        var t = {fn: e, next: void 0};
        o && (o.next = t), i || (i = t, a()), o = t
    }
}, function (e, t, n) {
    "use strict";
    var r, i, o, a = n(22), s = n(20), l = n(9), c = n(11), u = n(10), d = u.process, f = u.setImmediate, p = u.clearImmediate, h = u.MessageChannel, m = 0, g = {}, v = "onreadystatechange", b = function () {
        var e = +this;
        if (g.hasOwnProperty(e)) {
            var t = g[e];
            delete g[e], t()
        }
    }, y = function (e) {
        b.call(e.data)
    };
    f && p || (f = function (e) {
        for (var t = [], n = 1; arguments.length > n;)t.push(arguments[n++]);
        return g[++m] = function () {
            s("function" == typeof e ? e : Function(e), t)
        }, r(m), m
    }, p = function (e) {
        delete g[e]
    }, "process" == n(14)(d) ? r = function (e) {
        d.nextTick(a(b, e, 1))
    } : h ? (i = new h, o = i.port2, i.port1.onmessage = y, r = a(o.postMessage, o, 1)) : u.addEventListener && "function" == typeof postMessage && !u.importScript ? (r = function (e) {
        u.postMessage(e + "", "*")
    }, u.addEventListener("message", y, !1)) : r = v in c("script") ? function (e) {
        l.appendChild(c("script"))[v] = function () {
            l.removeChild(this), b.call(e)
        }
    } : function (e) {
        setTimeout(a(b, e, 1), 0)
    }), e.exports = {set: f, clear: p}
}, function (e, t, n) {
    var r = n(18);
    e.exports = function (e, t) {
        for (var n in t)r(e, n, t[n]);
        return e
    }
}, function (e, t, n) {
    "use strict";
    var r = n(140);
    n(141)("Map", function (e) {
        return function () {
            return e(this, arguments[0])
        }
    }, {
        get: function (e) {
            var t = r.getEntry(this, e);
            return t && t.v
        }, set: function (e, t) {
            return r.def(this, 0 === e ? 0 : e, t)
        }
    }, r, !0)
}, function (e, t, n) {
    "use strict";
    var r = n(5), i = n(17), o = n(22), a = n(120), s = n(134), l = n(26), c = n(135), u = n(118), d = n(19)("id"), f = n(13), p = n(12), h = Object.isExtensible || p, m = n(6), g = m ? "_s" : "size", v = 0, b = function (e, t) {
        if (!p(e))return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
        if (!f(e, d)) {
            if (!h(e))return "F";
            if (!t)return "E";
            i(e, d, ++v)
        }
        return "O" + e[d]
    }, y = function (e, t) {
        var n, r = b(t);
        if ("F" !== r)return e._i[r];
        for (n = e._f; n; n = n.n)if (n.k == t)return n
    };
    e.exports = {
        getConstructor: function (e, t, i, a) {
            var u = e(function (e, n) {
                s(e, u, t), e._i = r.create(null), e._f = void 0, e._l = void 0, e[g] = 0, void 0 != n && c(n, i, e[a], e)
            });
            return n(138)(u.prototype, {
                clear: function () {
                    for (var e = this, t = e._i, n = e._f; n; n = n.n)n.r = !0, n.p && (n.p = n.p.n = void 0), delete t[n.i];
                    e._f = e._l = void 0, e[g] = 0
                }, "delete": function (e) {
                    var t = this, n = y(t, e);
                    if (n) {
                        var r = n.n, i = n.p;
                        delete t._i[n.i], n.r = !0, i && (i.n = r), r && (r.p = i), t._f == n && (t._f = r), t._l == n && (t._l = i), t[g]--
                    }
                    return !!n
                }, forEach: function (e) {
                    for (var t, n = o(e, arguments[1], 3); t = t ? t.n : this._f;)for (n(t.v, t.k, this); t && t.r;)t = t.p
                }, has: function (e) {
                    return !!y(this, e)
                }
            }), m && r.setDesc(u.prototype, "size", {
                get: function () {
                    return l(this[g])
                }
            }), u
        }, def: function (e, t, n) {
            var r, i, o = y(e, t);
            return o ? o.v = n : (e._l = o = {
                i: i = b(t, !0),
                k: t,
                v: n,
                p: r = e._l,
                n: void 0,
                r: !1
            }, e._f || (e._f = o), r && (r.n = o), e[g]++, "F" !== i && (e._i[i] = o)), e
        }, getEntry: y, setStrong: function (e, t, r) {
            n(99)(e, t, function (e, t) {
                this._t = e, this._k = t, this._l = void 0
            }, function () {
                for (var e = this, t = e._k, n = e._l; n && n.r;)n = n.p;
                return e._t && (e._l = n = n ? n.n : e._t._f) ? "keys" == t ? u(0, n.k) : "values" == t ? u(0, n.v) : u(0, [n.k, n.v]) : (e._t = void 0, u(1))
            }, r ? "entries" : "values", !r, !0), a(e), a(n(16)[t])
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = n(10), i = n(15), o = n(102), a = n(135), s = n(134);
    e.exports = function (e, t, l, c, u, d) {
        var f = r[e], p = f, h = u ? "set" : "add", m = p && p.prototype, g = {}, v = function (e) {
            var t = m[e];
            n(18)(m, e, "delete" == e ? function (e) {
                return t.call(this, 0 === e ? 0 : e)
            } : "has" == e ? function (e) {
                return t.call(this, 0 === e ? 0 : e)
            } : "get" == e ? function (e) {
                return t.call(this, 0 === e ? 0 : e)
            } : "add" == e ? function (e) {
                return t.call(this, 0 === e ? 0 : e), this
            } : function (e, n) {
                return t.call(this, 0 === e ? 0 : e, n), this
            })
        };
        if ("function" == typeof p && (d || !o && m.forEach && m.entries)) {
            var b, y = new p, w = y[h](d ? {} : -0, 1);
            n(114)(function (e) {
                new p(e)
            }) || (p = t(function (t, n) {
                s(t, p, e);
                var r = new f;
                return void 0 != n && a(n, u, r[h], r), r
            }), p.prototype = m, m.constructor = p), d || y.forEach(function (e, t) {
                b = 1 / t === -1 / 0
            }), b && (v("delete"), v("has"), u && v("get")), (b || w !== y) && v(h), d && m.clear && delete m.clear
        } else p = c.getConstructor(t, e, u, h), n(138)(p.prototype, l);
        return n(35)(p, e), g[e] = p, i(i.G + i.W + i.F * (p != f), g), d || c.setStrong(p, e, u), p
    }
}, function (e, t, n) {
    "use strict";
    var r = n(140);
    n(141)("Set", function (e) {
        return function () {
            return e(this, arguments[0])
        }
    }, {
        add: function (e) {
            return r.def(this, e = 0 === e ? 0 : e, e)
        }
    }, r)
}, function (e, t, n) {
    "use strict";
    var r = n(5), i = n(144), o = n(12), a = n(13), s = i.frozenStore, l = i.WEAK, c = Object.isExtensible || o, u = {}, d = n(141)("WeakMap", function (e) {
        return function () {
            return e(this, arguments[0])
        }
    }, {
        get: function (e) {
            if (o(e)) {
                if (!c(e))return s(this).get(e);
                if (a(e, l))return e[l][this._i]
            }
        }, set: function (e, t) {
            return i.def(this, e, t)
        }
    }, i, !0, !0);
    7 != (new d).set((Object.freeze || Object)(u), 7).get(u) && r.each.call(["delete", "has", "get", "set"], function (e) {
        var t = d.prototype, r = t[e];
        n(18)(t, e, function (t, n) {
            if (o(t) && !c(t)) {
                var i = s(this)[e](t, n);
                return "set" == e ? this : i
            }
            return r.call(this, t, n)
        })
    })
}, function (e, t, n) {
    "use strict";
    var r = n(17), i = n(29), o = n(134), a = n(135), s = n(21), l = n(19)("weak"), c = n(12), u = n(13), d = Object.isExtensible || c, f = s(5), p = s(6), h = 0, m = function (e) {
        return e._l || (e._l = new g)
    }, g = function () {
        this.a = []
    }, v = function (e, t) {
        return f(e.a, function (e) {
            return e[0] === t
        })
    };
    g.prototype = {
        get: function (e) {
            var t = v(this, e);
            return t ? t[1] : void 0
        }, has: function (e) {
            return !!v(this, e)
        }, set: function (e, t) {
            var n = v(this, e);
            n ? n[1] = t : this.a.push([e, t])
        }, "delete": function (e) {
            var t = p(this.a, function (t) {
                return t[0] === e
            });
            return ~t && this.a.splice(t, 1), !!~t
        }
    }, e.exports = {
        getConstructor: function (e, t, r, i) {
            var s = e(function (e, n) {
                o(e, s, t), e._i = h++, e._l = void 0, void 0 != n && a(n, r, e[i], e)
            });
            return n(138)(s.prototype, {
                "delete": function (e) {
                    return c(e) ? d(e) ? u(e, l) && u(e[l], this._i) && delete e[l][this._i] : m(this)["delete"](e) : !1
                }, has: function (e) {
                    return c(e) ? d(e) ? u(e, l) && u(e[l], this._i) : m(this).has(e) : !1
                }
            }), s
        }, def: function (e, t, n) {
            return d(i(t)) ? (u(t, l) || r(t, l, {}), t[l][e._i] = n) : m(e).set(t, n), e
        }, frozenStore: m, WEAK: l
    }
}, function (e, t, n) {
    "use strict";
    var r = n(144);
    n(141)("WeakSet", function (e) {
        return function () {
            return e(this, arguments[0])
        }
    }, {
        add: function (e) {
            return r.def(this, e, !0)
        }
    }, r, !1, !0)
}, function (e, t, n) {
    var r = n(15), i = Function.apply;
    r(r.S, "Reflect", {
        apply: function (e, t, n) {
            return i.call(e, t, n)
        }
    })
}, function (e, t, n) {
    var r = n(5), i = n(15), o = n(23), a = n(29), s = n(12), l = Function.bind || n(16).Function.prototype.bind;
    i(i.S, "Reflect", {
        construct: function (e, t) {
            if (o(e), arguments.length < 3) {
                if (void 0 != t)switch (a(t).length) {
                    case 0:
                        return new e;
                    case 1:
                        return new e(t[0]);
                    case 2:
                        return new e(t[0], t[1]);
                    case 3:
                        return new e(t[0], t[1], t[2]);
                    case 4:
                        return new e(t[0], t[1], t[2], t[3])
                }
                var n = [null];
                return n.push.apply(n, t), new (l.apply(e, n))
            }
            var i = o(arguments[2]).prototype, c = r.create(s(i) ? i : Object.prototype), u = Function.apply.call(e, c, t);
            return s(u) ? u : c
        }
    })
}, function (e, t, n) {
    var r = n(5), i = n(15), o = n(29);
    i(i.S + i.F * n(7)(function () {
            Reflect.defineProperty(r.setDesc({}, 1, {value: 1}), 1, {value: 2})
        }), "Reflect", {
        defineProperty: function (e, t, n) {
            o(e);
            try {
                return r.setDesc(e, t, n), !0
            } catch (i) {
                return !1
            }
        }
    })
}, function (e, t, n) {
    var r = n(15), i = n(5).getDesc, o = n(29);
    r(r.S, "Reflect", {
        deleteProperty: function (e, t) {
            var n = i(o(e), t);
            return n && !n.configurable ? !1 : delete e[t]
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(15), i = n(29), o = function (e) {
        this._t = i(e), this._i = 0;
        var t, n = this._k = [];
        for (t in e)n.push(t)
    };
    n(101)(o, "Object", function () {
        var e, t = this, n = t._k;
        do if (t._i >= n.length)return {value: void 0, done: !0}; while (!((e = n[t._i++])in t._t));
        return {value: e, done: !1}
    }), r(r.S, "Reflect", {
        enumerate: function (e) {
            return new o(e)
        }
    })
}, function (e, t, n) {
    function r(e, t) {
        var n, a, c = arguments.length < 3 ? e : arguments[2];
        return l(e) === c ? e[t] : (n = i.getDesc(e, t)) ? o(n, "value") ? n.value : void 0 !== n.get ? n.get.call(c) : void 0 : s(a = i.getProto(e)) ? r(a, t, c) : void 0
    }

    var i = n(5), o = n(13), a = n(15), s = n(12), l = n(29);
    a(a.S, "Reflect", {get: r})
}, function (e, t, n) {
    var r = n(5), i = n(15), o = n(29);
    i(i.S, "Reflect", {
        getOwnPropertyDescriptor: function (e, t) {
            return r.getDesc(o(e), t)
        }
    })
}, function (e, t, n) {
    var r = n(15), i = n(5).getProto, o = n(29);
    r(r.S, "Reflect", {
        getPrototypeOf: function (e) {
            return i(o(e))
        }
    })
}, function (e, t, n) {
    var r = n(15);
    r(r.S, "Reflect", {
        has: function (e, t) {
            return t in e
        }
    })
}, function (e, t, n) {
    var r = n(15), i = n(29), o = Object.isExtensible;
    r(r.S, "Reflect", {
        isExtensible: function (e) {
            return i(e), o ? o(e) : !0
        }
    })
}, function (e, t, n) {
    var r = n(15);
    r(r.S, "Reflect", {ownKeys: n(157)})
}, function (e, t, n) {
    var r = n(5), i = n(29);
    e.exports = function (e) {
        var t = r.getNames(i(e)), n = r.getSymbols;
        return n ? t.concat(n(e)) : t
    }
}, function (e, t, n) {
    var r = n(15), i = n(29), o = Object.preventExtensions;
    r(r.S, "Reflect", {
        preventExtensions: function (e) {
            i(e);
            try {
                return o && o(e), !0
            } catch (t) {
                return !1
            }
        }
    })
}, function (e, t, n) {
    function r(e, t, n) {
        var a, u, d = arguments.length < 4 ? e : arguments[3], f = i.getDesc(l(e), t);
        if (!f) {
            if (c(u = i.getProto(e)))return r(u, t, n, d);
            f = s(0)
        }
        return o(f, "value") ? f.writable !== !1 && c(d) ? (a = i.getDesc(d, t) || s(0), a.value = n, i.setDesc(d, t, a), !0) : !1 : void 0 === f.set ? !1 : (f.set.call(d, n), !0)
    }

    var i = n(5), o = n(13), a = n(15), s = n(8), l = n(29), c = n(12);
    a(a.S, "Reflect", {set: r})
}, function (e, t, n) {
    var r = n(15), i = n(46);
    i && r(r.S, "Reflect", {
        setPrototypeOf: function (e, t) {
            i.check(e, t);
            try {
                return i.set(e, t), !0
            } catch (n) {
                return !1
            }
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(15), i = n(32)(!0);
    r(r.P, "Array", {
        includes: function (e) {
            return i(this, e, arguments[1])
        }
    }), n(117)("includes")
}, function (e, t, n) {
    "use strict";
    var r = n(15), i = n(98)(!0);
    r(r.P, "String", {
        at: function (e) {
            return i(this, e)
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(15), i = n(164);
    r(r.P, "String", {
        padLeft: function (e) {
            return i(this, e, arguments[1], !0)
        }
    })
}, function (e, t, n) {
    var r = n(27), i = n(108), o = n(26);
    e.exports = function (e, t, n, a) {
        var s = String(o(e)), l = s.length, c = void 0 === n ? " " : String(n), u = r(t);
        if (l >= u)return s;
        "" == c && (c = " ");
        var d = u - l, f = i.call(c, Math.ceil(d / c.length));
        return f.length > d && (f = a ? f.slice(f.length - d) : f.slice(0, d)), a ? f + s : s + f
    }
}, function (e, t, n) {
    "use strict";
    var r = n(15), i = n(164);
    r(r.P, "String", {
        padRight: function (e) {
            return i(this, e, arguments[1], !1)
        }
    })
}, function (e, t, n) {
    "use strict";
    n(96)("trimLeft", function (e) {
        return function () {
            return e(this, 1)
        }
    })
}, function (e, t, n) {
    "use strict";
    n(96)("trimRight", function (e) {
        return function () {
            return e(this, 2)
        }
    })
}, function (e, t, n) {
    var r = n(15), i = n(169)(/[\\^$*+?.()|[\]{}]/g, "\\$&");
    r(r.S, "RegExp", {
        escape: function (e) {
            return i(e)
        }
    })
}, function (e) {
    e.exports = function (e, t) {
        var n = t === Object(t) ? function (e) {
            return t[e]
        } : t;
        return function (t) {
            return String(t).replace(e, n)
        }
    }
}, function (e, t, n) {
    var r = n(5), i = n(15), o = n(157), a = n(30), s = n(8);
    i(i.S, "Object", {
        getOwnPropertyDescriptors: function (e) {
            for (var t, n, i = a(e), l = r.setDesc, c = r.getDesc, u = o(i), d = {}, f = 0; u.length > f;)n = c(i, t = u[f++]), t in d ? l(d, t, s(0, n)) : d[t] = n;
            return d
        }
    })
}, function (e, t, n) {
    var r = n(15), i = n(172)(!1);
    r(r.S, "Object", {
        values: function (e) {
            return i(e)
        }
    })
}, function (e, t, n) {
    var r = n(5), i = n(30);
    e.exports = function (e) {
        return function (t) {
            var n, o = i(t), a = r.getKeys(o), s = a.length, l = 0, c = Array(s);
            if (e)for (; s > l;)c[l] = [n = a[l++], o[n]]; else for (; s > l;)c[l] = o[a[l++]];
            return c
        }
    }
}, function (e, t, n) {
    var r = n(15), i = n(172)(!0);
    r(r.S, "Object", {
        entries: function (e) {
            return i(e)
        }
    })
}, function (e, t, n) {
    var r = n(15);
    r(r.P, "Map", {toJSON: n(175)("Map")})
}, function (e, t, n) {
    var r = n(135), i = n(48);
    e.exports = function (e) {
        return function () {
            if (i(this) != e)throw TypeError(e + "#toJSON isn't generic");
            var t = [];
            return r(this, !1, t.push, t), t
        }
    }
}, function (e, t, n) {
    var r = n(15);
    r(r.P, "Set", {toJSON: n(175)("Set")})
}, function (e, t, n) {
    var r = n(5), i = n(15), o = n(16).Array || Array, a = {}, s = function (e, t) {
        r.each.call(e.split(","), function (e) {
            void 0 == t && e in o ? a[e] = o[e] : e in[] && (a[e] = n(22)(Function.call, [][e], t))
        })
    };
    s("pop,reverse,shift,keys,values,entries", 1), s("indexOf,every,some,forEach,map,filter,find,findIndex,includes", 3), s("join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill"), i(i.S, "Array", a)
}, function (e, t, n) {
    var r = n(10), i = n(15), o = n(20), a = n(179), s = r.navigator, l = !!s && /MSIE .\./.test(s.userAgent), c = function (e) {
        return l ? function (t, n) {
            return e(o(a, [].slice.call(arguments, 2), "function" == typeof t ? t : Function(t)), n)
        } : e
    };
    i(i.G + i.B + i.F * l, {setTimeout: c(r.setTimeout), setInterval: c(r.setInterval)})
}, function (e, t, n) {
    "use strict";
    var r = n(180), i = n(20), o = n(23);
    e.exports = function () {
        for (var e = o(this), t = arguments.length, n = Array(t), a = 0, s = r._, l = !1; t > a;)(n[a] = arguments[a++]) === s && (l = !0);
        return function () {
            var r, o = this, a = arguments.length, c = 0, u = 0;
            if (!l && !a)return i(e, n, o);
            if (r = n.slice(), l)for (; t > c; c++)r[c] === s && (r[c] = arguments[u++]);
            for (; a > u;)r.push(arguments[u++]);
            return i(e, r, o)
        }
    }
}, function (e, t, n) {
    e.exports = n(10)
}, function (e, t, n) {
    var r = n(15), i = n(137);
    r(r.G + r.B, {setImmediate: i.set, clearImmediate: i.clear})
}, function (e, t, n) {
    n(116);
    var r = n(10), i = n(17), o = n(100), a = n(36)("iterator"), s = r.NodeList, l = r.HTMLCollection, c = s && s.prototype, u = l && l.prototype, d = o.NodeList = o.HTMLCollection = o.Array;
    !s || a in c || i(c, a, d), !l || a in u || i(u, a, d)
}, function (e, t, n) {
    (function (t, n) {
        !function (t) {
            "use strict";
            function r(e, t, n, r) {
                var i = Object.create((t || o).prototype);
                return i._invoke = d(e, n || null, new h(r || [])), i
            }

            function i(e, t, n) {
                try {
                    return {type: "normal", arg: e.call(t, n)}
                } catch (r) {
                    return {type: "throw", arg: r}
                }
            }

            function o() {
            }

            function a() {
            }

            function s() {
            }

            function l(e) {
                ["next", "throw", "return"].forEach(function (t) {
                    e[t] = function (e) {
                        return this._invoke(t, e)
                    }
                })
            }

            function c(e) {
                this.arg = e
            }

            function u(e) {
                function t(t, n) {
                    var r = e[t](n), i = r.value;
                    return i instanceof c ? Promise.resolve(i.arg).then(o, a) : Promise.resolve(i).then(function (e) {
                        return r.value = e, r
                    })
                }

                function r(e, n) {
                    var r = i ? i.then(function () {
                        return t(e, n)
                    }) : new Promise(function (r) {
                        r(t(e, n))
                    });
                    return i = r["catch"](function () {
                    }), r
                }

                "object" == typeof n && n.domain && (t = n.domain.bind(t));
                {
                    var i, o = t.bind(e, "next"), a = t.bind(e, "throw");
                    t.bind(e, "return")
                }
                this._invoke = r
            }

            function d(e, t, n) {
                var r = k;
                return function (o, a) {
                    if (r === C)throw new Error("Generator is already running");
                    if (r === S) {
                        if ("throw" === o)throw a;
                        return g()
                    }
                    for (; ;) {
                        var s = n.delegate;
                        if (s) {
                            if ("return" === o || "throw" === o && s.iterator[o] === v) {
                                n.delegate = null;
                                var l = s.iterator["return"];
                                if (l) {
                                    var c = i(l, s.iterator, a);
                                    if ("throw" === c.type) {
                                        o = "throw", a = c.arg;
                                        continue
                                    }
                                }
                                if ("return" === o)continue
                            }
                            var c = i(s.iterator[o], s.iterator, a);
                            if ("throw" === c.type) {
                                n.delegate = null, o = "throw", a = c.arg;
                                continue
                            }
                            o = "next", a = v;
                            var u = c.arg;
                            if (!u.done)return r = x, u;
                            n[s.resultName] = u.value, n.next = s.nextLoc, n.delegate = null
                        }
                        if ("next" === o)n.sent = r === x ? a : v; else if ("throw" === o) {
                            if (r === k)throw r = S, a;
                            n.dispatchException(a) && (o = "next", a = v)
                        } else"return" === o && n.abrupt("return", a);
                        r = C;
                        var c = i(e, t, n);
                        if ("normal" === c.type) {
                            r = n.done ? S : x;
                            var u = {value: c.arg, done: n.done};
                            if (c.arg !== T)return u;
                            n.delegate && "next" === o && (a = v)
                        } else"throw" === c.type && (r = S, o = "throw", a = c.arg)
                    }
                }
            }

            function f(e) {
                var t = {tryLoc: e[0]};
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function p(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function h(e) {
                this.tryEntries = [{tryLoc: "root"}], e.forEach(f, this), this.reset(!0)
            }

            function m(e) {
                if (e) {
                    var t = e[y];
                    if (t)return t.call(e);
                    if ("function" == typeof e.next)return e;
                    if (!isNaN(e.length)) {
                        var n = -1, r = function i() {
                            for (; ++n < e.length;)if (b.call(e, n))return i.value = e[n], i.done = !1, i;
                            return i.value = v, i.done = !0, i
                        };
                        return r.next = r
                    }
                }
                return {next: g}
            }

            function g() {
                return {value: v, done: !0}
            }

            var v, b = Object.prototype.hasOwnProperty, y = "function" == typeof Symbol && Symbol.iterator || "@@iterator", w = "object" == typeof e, _ = t.regeneratorRuntime;
            if (_)return void(w && (e.exports = _));
            _ = t.regeneratorRuntime = w ? e.exports : {}, _.wrap = r;
            var k = "suspendedStart", x = "suspendedYield", C = "executing", S = "completed", T = {}, $ = s.prototype = o.prototype;
            a.prototype = $.constructor = s, s.constructor = a, a.displayName = "GeneratorFunction", _.isGeneratorFunction = function (e) {
                var t = "function" == typeof e && e.constructor;
                return t ? t === a || "GeneratorFunction" === (t.displayName || t.name) : !1
            }, _.mark = function (e) {
                return e.__proto__ = s, e.prototype = Object.create($), e
            }, _.awrap = function (e) {
                return new c(e)
            }, l(u.prototype), _.async = function (e, t, n, i) {
                var o = new u(r(e, t, n, i));
                return _.isGeneratorFunction(t) ? o : o.next().then(function (e) {
                    return e.done ? e.value : o.next()
                })
            }, l($), $[y] = function () {
                return this
            }, $.toString = function () {
                return "[object Generator]"
            }, _.keys = function (e) {
                var t = [];
                for (var n in e)t.push(n);
                return t.reverse(), function r() {
                    for (; t.length;) {
                        var n = t.pop();
                        if (n in e)return r.value = n, r.done = !1, r
                    }
                    return r.done = !0, r
                }
            }, _.values = m, h.prototype = {
                constructor: h, reset: function (e) {
                    if (this.prev = 0, this.next = 0, this.sent = v, this.done = !1, this.delegate = null, this.tryEntries.forEach(p), !e)for (var t in this)"t" === t.charAt(0) && b.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = v)
                }, stop: function () {
                    this.done = !0;
                    var e = this.tryEntries[0], t = e.completion;
                    if ("throw" === t.type)throw t.arg;
                    return this.rval
                }, dispatchException: function (e) {
                    function t(t, r) {
                        return o.type = "throw", o.arg = e, n.next = t, !!r
                    }

                    if (this.done)throw e;
                    for (var n = this, r = this.tryEntries.length - 1; r >= 0; --r) {
                        var i = this.tryEntries[r], o = i.completion;
                        if ("root" === i.tryLoc)return t("end");
                        if (i.tryLoc <= this.prev) {
                            var a = b.call(i, "catchLoc"), s = b.call(i, "finallyLoc");
                            if (a && s) {
                                if (this.prev < i.catchLoc)return t(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc)return t(i.finallyLoc)
                            } else if (a) {
                                if (this.prev < i.catchLoc)return t(i.catchLoc, !0)
                            } else {
                                if (!s)throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc)return t(i.finallyLoc)
                            }
                        }
                    }
                }, abrupt: function (e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var r = this.tryEntries[n];
                        if (r.tryLoc <= this.prev && b.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var i = r;
                            break
                        }
                    }
                    i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                    var o = i ? i.completion : {};
                    return o.type = e, o.arg = t, i ? this.next = i.finallyLoc : this.complete(o), T
                }, complete: function (e, t) {
                    if ("throw" === e.type)throw e.arg;
                    "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = e.arg, this.next = "end") : "normal" === e.type && t && (this.next = t)
                }, finish: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e)return this.complete(n.completion, n.afterLoc), p(n), T
                    }
                }, "catch": function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var i = r.arg;
                                p(n)
                            }
                            return i
                        }
                    }
                    throw new Error("illegal catch attempt")
                }, delegateYield: function (e, t, n) {
                    return this.delegate = {iterator: m(e), resultName: t, nextLoc: n}, T
                }
            }
        }("object" == typeof t ? t : "object" == typeof window ? window : "object" == typeof self ? self : this)
    }).call(t, function () {
        return this
    }(), n(184))
}, function (e) {
    function t() {
        l = !1, o.length ? s = o.concat(s) : c = -1, s.length && n()
    }

    function n() {
        if (!l) {
            var e = setTimeout(t);
            l = !0;
            for (var n = s.length; n;) {
                for (o = s, s = []; ++c < n;)o[c].run();
                c = -1, n = s.length
            }
            o = null, l = !1, clearTimeout(e)
        }
    }

    function r(e, t) {
        this.fun = e, this.array = t
    }

    function i() {
    }

    var o, a = e.exports = {}, s = [], l = !1, c = -1;
    a.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)for (var i = 1; i < arguments.length; i++)t[i - 1] = arguments[i];
        s.push(new r(e, t)), 1 !== s.length || l || setTimeout(n, 0)
    }, r.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = i, a.addListener = i, a.once = i, a.off = i, a.removeListener = i, a.removeAllListeners = i, a.emit = i, a.binding = function () {
        throw new Error("process.binding is not supported")
    }, a.cwd = function () {
        return "/"
    }, a.chdir = function () {
        throw new Error("process.chdir is not supported")
    }, a.umask = function () {
        return 0
    }
}, function (e, t, n) {
    !function () {
        var t = n(186), r = n(187).utf8, i = n(188), o = n(187).bin, a = function (e, n) {
            e.constructor == String ? e = n && "binary" === n.encoding ? o.stringToBytes(e) : r.stringToBytes(e) : i(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || (e = e.toString());
            for (var s = t.bytesToWords(e), l = 8 * e.length, c = 1732584193, u = -271733879, d = -1732584194, f = 271733878, p = 0; p < s.length; p++)s[p] = 16711935 & (s[p] << 8 | s[p] >>> 24) | 4278255360 & (s[p] << 24 | s[p] >>> 8);
            s[l >>> 5] |= 128 << l % 32, s[(l + 64 >>> 9 << 4) + 14] = l;
            for (var h = a._ff, m = a._gg, g = a._hh, v = a._ii, p = 0; p < s.length; p += 16) {
                var b = c, y = u, w = d, _ = f;
                c = h(c, u, d, f, s[p + 0], 7, -680876936), f = h(f, c, u, d, s[p + 1], 12, -389564586), d = h(d, f, c, u, s[p + 2], 17, 606105819), u = h(u, d, f, c, s[p + 3], 22, -1044525330), c = h(c, u, d, f, s[p + 4], 7, -176418897), f = h(f, c, u, d, s[p + 5], 12, 1200080426), d = h(d, f, c, u, s[p + 6], 17, -1473231341), u = h(u, d, f, c, s[p + 7], 22, -45705983), c = h(c, u, d, f, s[p + 8], 7, 1770035416), f = h(f, c, u, d, s[p + 9], 12, -1958414417), d = h(d, f, c, u, s[p + 10], 17, -42063), u = h(u, d, f, c, s[p + 11], 22, -1990404162), c = h(c, u, d, f, s[p + 12], 7, 1804603682), f = h(f, c, u, d, s[p + 13], 12, -40341101), d = h(d, f, c, u, s[p + 14], 17, -1502002290), u = h(u, d, f, c, s[p + 15], 22, 1236535329), c = m(c, u, d, f, s[p + 1], 5, -165796510), f = m(f, c, u, d, s[p + 6], 9, -1069501632), d = m(d, f, c, u, s[p + 11], 14, 643717713), u = m(u, d, f, c, s[p + 0], 20, -373897302), c = m(c, u, d, f, s[p + 5], 5, -701558691), f = m(f, c, u, d, s[p + 10], 9, 38016083), d = m(d, f, c, u, s[p + 15], 14, -660478335), u = m(u, d, f, c, s[p + 4], 20, -405537848), c = m(c, u, d, f, s[p + 9], 5, 568446438), f = m(f, c, u, d, s[p + 14], 9, -1019803690), d = m(d, f, c, u, s[p + 3], 14, -187363961), u = m(u, d, f, c, s[p + 8], 20, 1163531501), c = m(c, u, d, f, s[p + 13], 5, -1444681467), f = m(f, c, u, d, s[p + 2], 9, -51403784), d = m(d, f, c, u, s[p + 7], 14, 1735328473), u = m(u, d, f, c, s[p + 12], 20, -1926607734), c = g(c, u, d, f, s[p + 5], 4, -378558), f = g(f, c, u, d, s[p + 8], 11, -2022574463), d = g(d, f, c, u, s[p + 11], 16, 1839030562), u = g(u, d, f, c, s[p + 14], 23, -35309556), c = g(c, u, d, f, s[p + 1], 4, -1530992060), f = g(f, c, u, d, s[p + 4], 11, 1272893353), d = g(d, f, c, u, s[p + 7], 16, -155497632), u = g(u, d, f, c, s[p + 10], 23, -1094730640), c = g(c, u, d, f, s[p + 13], 4, 681279174), f = g(f, c, u, d, s[p + 0], 11, -358537222), d = g(d, f, c, u, s[p + 3], 16, -722521979), u = g(u, d, f, c, s[p + 6], 23, 76029189), c = g(c, u, d, f, s[p + 9], 4, -640364487), f = g(f, c, u, d, s[p + 12], 11, -421815835), d = g(d, f, c, u, s[p + 15], 16, 530742520), u = g(u, d, f, c, s[p + 2], 23, -995338651), c = v(c, u, d, f, s[p + 0], 6, -198630844), f = v(f, c, u, d, s[p + 7], 10, 1126891415), d = v(d, f, c, u, s[p + 14], 15, -1416354905), u = v(u, d, f, c, s[p + 5], 21, -57434055), c = v(c, u, d, f, s[p + 12], 6, 1700485571), f = v(f, c, u, d, s[p + 3], 10, -1894986606), d = v(d, f, c, u, s[p + 10], 15, -1051523), u = v(u, d, f, c, s[p + 1], 21, -2054922799), c = v(c, u, d, f, s[p + 8], 6, 1873313359), f = v(f, c, u, d, s[p + 15], 10, -30611744), d = v(d, f, c, u, s[p + 6], 15, -1560198380), u = v(u, d, f, c, s[p + 13], 21, 1309151649), c = v(c, u, d, f, s[p + 4], 6, -145523070), f = v(f, c, u, d, s[p + 11], 10, -1120210379), d = v(d, f, c, u, s[p + 2], 15, 718787259), u = v(u, d, f, c, s[p + 9], 21, -343485551), c = c + b >>> 0, u = u + y >>> 0, d = d + w >>> 0, f = f + _ >>> 0
            }
            return t.endian([c, u, d, f])
        };
        a._ff = function (e, t, n, r, i, o, a) {
            var s = e + (t & n | ~t & r) + (i >>> 0) + a;
            return (s << o | s >>> 32 - o) + t
        }, a._gg = function (e, t, n, r, i, o, a) {
            var s = e + (t & r | n & ~r) + (i >>> 0) + a;
            return (s << o | s >>> 32 - o) + t
        }, a._hh = function (e, t, n, r, i, o, a) {
            var s = e + (t ^ n ^ r) + (i >>> 0) + a;
            return (s << o | s >>> 32 - o) + t
        }, a._ii = function (e, t, n, r, i, o, a) {
            var s = e + (n ^ (t | ~r)) + (i >>> 0) + a;
            return (s << o | s >>> 32 - o) + t
        }, a._blocksize = 16, a._digestsize = 16, e.exports = function (e, n) {
            if ("undefined" != typeof e) {
                var r = t.wordsToBytes(a(e, n));
                return n && n.asBytes ? r : n && n.asString ? o.bytesToString(r) : t.bytesToHex(r)
            }
        }
    }()
}, function (e) {
    !function () {
        var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = {
            rotl: function (e, t) {
                return e << t | e >>> 32 - t
            }, rotr: function (e, t) {
                return e << 32 - t | e >>> t
            }, endian: function (e) {
                if (e.constructor == Number)return 16711935 & n.rotl(e, 8) | 4278255360 & n.rotl(e, 24);
                for (var t = 0; t < e.length; t++)e[t] = n.endian(e[t]);
                return e
            }, randomBytes: function (e) {
                for (var t = []; e > 0; e--)t.push(Math.floor(256 * Math.random()));
                return t
            }, bytesToWords: function (e) {
                for (var t = [], n = 0, r = 0; n < e.length; n++, r += 8)t[r >>> 5] |= e[n] << 24 - r % 32;
                return t
            }, wordsToBytes: function (e) {
                for (var t = [], n = 0; n < 32 * e.length; n += 8)t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
                return t
            }, bytesToHex: function (e) {
                for (var t = [], n = 0; n < e.length; n++)t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16));
                return t.join("")
            }, hexToBytes: function (e) {
                for (var t = [], n = 0; n < e.length; n += 2)t.push(parseInt(e.substr(n, 2), 16));
                return t
            }, bytesToBase64: function (e) {
                for (var n = [], r = 0; r < e.length; r += 3)for (var i = e[r] << 16 | e[r + 1] << 8 | e[r + 2], o = 0; 4 > o; o++)n.push(8 * r + 6 * o <= 8 * e.length ? t.charAt(i >>> 6 * (3 - o) & 63) : "=");
                return n.join("")
            }, base64ToBytes: function (e) {
                e = e.replace(/[^A-Z0-9+\/]/gi, "");
                for (var n = [], r = 0, i = 0; r < e.length; i = ++r % 4)0 != i && n.push((t.indexOf(e.charAt(r - 1)) & Math.pow(2, -2 * i + 8) - 1) << 2 * i | t.indexOf(e.charAt(r)) >>> 6 - 2 * i);
                return n
            }
        };
        e.exports = n
    }()
}, function (e) {
    var t = {
        utf8: {
            stringToBytes: function (e) {
                return t.bin.stringToBytes(unescape(encodeURIComponent(e)))
            }, bytesToString: function (e) {
                return decodeURIComponent(escape(t.bin.bytesToString(e)))
            }
        }, bin: {
            stringToBytes: function (e) {
                for (var t = [], n = 0; n < e.length; n++)t.push(255 & e.charCodeAt(n));
                return t
            }, bytesToString: function (e) {
                for (var t = [], n = 0; n < e.length; n++)t.push(String.fromCharCode(e[n]));
                return t.join("")
            }
        }
    };
    e.exports = t
}, function (e) {
    e.exports = function (e) {
        return !(null == e || !e.constructor || "function" != typeof e.constructor.isBuffer || !e.constructor.isBuffer(e))
    }
}]), define("emojiList", [], function () {
    return ["+1", "-1", "100", "1234", "8ball", "a", "ab", "abc", "abcd", "accept", "aerial_tramway", "airplane", "alarm_clock", "alien", "ambulance", "anchor", "angel", "anger", "angry", "anguished", "ant", "apple", "aquarius", "aries", "arrow_backward", "arrow_double_down", "arrow_double_up", "arrow_down", "arrow_down_small", "arrow_forward", "arrow_heading_down", "arrow_heading_up", "arrow_left", "arrow_lower_left", "arrow_lower_right", "arrow_right", "arrow_right_hook", "arrow_up", "arrow_up_down", "arrow_up_small", "arrow_upper_left", "arrow_upper_right", "arrows_clockwise", "arrows_counterclockwise", "art", "articulated_lorry", "astonished", "atm", "b", "baby", "baby_bottle", "baby_chick", "baby_symbol", "back", "baggage_claim", "balloon", "ballot_box_with_check", "bamboo", "banana", "bangbang", "bank", "bar_chart", "barber", "baseball", "basketball", "bath", "bathtub", "battery", "bear", "bee", "beer", "beers", "beetle", "beginner", "bell", "bento", "bicyclist", "bike", "bikini", "bird", "birthday", "black_circle", "black_joker", "black_medium_small_square", "black_medium_square", "black_nib", "black_small_square", "black_square", "black_square_button", "blossom", "blowfish", "blue_book", "blue_car", "blue_heart", "blush", "boar", "boat", "bomb", "book", "bookmark", "bookmark_tabs", "books", "boom", "boot", "bouquet", "bow", "bowling", "bowtie", "boy", "bread", "bride_with_veil", "bridge_at_night", "briefcase", "broken_heart", "bug", "bulb", "bullettrain_front", "bullettrain_side", "bus", "busstop", "bust_in_silhouette", "busts_in_silhouette", "cactus", "cake", "calendar", "calling", "camel", "camera", "cancer", "candy", "capital_abcd", "capricorn", "car", "card_index", "carousel_horse", "cat", "cat2", "cd", "chart", "chart_with_downwards_trend", "chart_with_upwards_trend", "checkered_flag", "cherries", "cherry_blossom", "chestnut", "chicken", "children_crossing", "chocolate_bar", "christmas_tree", "church", "cinema", "circus_tent", "city_sunrise", "city_sunset", "cl", "clap", "clapper", "clipboard", "clock1", "clock10", "clock1030", "clock11", "clock1130", "clock12", "clock1230", "clock130", "clock2", "clock230", "clock3", "clock330", "clock4", "clock430", "clock5", "clock530", "clock6", "clock630", "clock7", "clock730", "clock8", "clock830", "clock9", "clock930", "closed_book", "closed_lock_with_key", "closed_umbrella", "cloud", "clubs", "cn", "cocktail", "coffee", "cold_sweat", "collision", "computer", "confetti_ball", "confounded", "confused", "congratulations", "construction", "construction_worker", "convenience_store", "cookie", "cool", "cop", "copyright", "corn", "couple", "couple_with_heart", "couplekiss", "cow", "cow2", "credit_card", "crescent_moon", "crocodile", "crossed_flags", "crown", "cry", "crying_cat_face", "crystal_ball", "cupid", "curly_loop", "currency_exchange", "curry", "custard", "customs", "cyclone", "dancer", "dancers", "dango", "dart", "dash", "date", "de", "deciduous_tree", "department_store", "diamond_shape_with_a_dot_inside", "diamonds", "disappointed", "disappointed_relieved", "dizzy", "dizzy_face", "do_not_litter", "dog", "dog2", "dollar", "dolls", "dolphin", "donut", "door", "doughnut", "dragon", "dragon_face", "dress", "dromedary_camel", "droplet", "dvd", "e-mail", "ear", "ear_of_rice", "earth_africa", "earth_americas", "earth_asia", "egg", "eggplant", "eight", "eight_pointed_black_star", "eight_spoked_asterisk", "electric_plug", "elephant", "email", "end", "envelope", "es", "euro", "european_castle", "european_post_office", "evergreen_tree", "exclamation", "expressionless", "eyeglasses", "eyes", "facepunch", "factory", "fallen_leaf", "family", "fast_forward", "fax", "fearful", "feelsgood", "feet", "ferris_wheel", "file_folder", "finnadie", "fire", "fire_engine", "fireworks", "first_quarter_moon", "first_quarter_moon_with_face", "fish", "fish_cake", "fishing_pole_and_fish", "fist", "five", "flags", "flashlight", "floppy_disk", "flower_playing_cards", "flushed", "foggy", "football", "fork_and_knife", "fountain", "four", "four_leaf_clover", "fr", "free", "fried_shrimp", "fries", "frog", "frowning", "fu", "fuelpump", "full_moon", "full_moon_with_face", "game_die", "gb", "gem", "gemini", "ghost", "gift", "gift_heart", "girl", "globe_with_meridians", "goat", "goberserk", "godmode", "golf", "grapes", "green_apple", "green_book", "green_heart", "grey_exclamation", "grey_question", "grimacing", "grin", "grinning", "guardsman", "guitar", "gun", "haircut", "hamburger", "hammer", "hamster", "hand", "handbag", "hankey", "hash", "hatched_chick", "hatching_chick", "headphones", "hear_no_evil", "heart", "heart_decoration", "heart_eyes", "heart_eyes_cat", "heartbeat", "heartpulse", "hearts", "heavy_check_mark", "heavy_division_sign", "heavy_dollar_sign", "heavy_exclamation_mark", "heavy_minus_sign", "heavy_multiplication_x", "heavy_plus_sign", "helicopter", "herb", "hibiscus", "high_brightness", "high_heel", "hocho", "honey_pot", "honeybee", "horse", "horse_racing", "hospital", "hotel", "hotsprings", "hourglass", "hourglass_flowing_sand", "house", "house_with_garden", "hurtrealbad", "hushed", "ice_cream", "icecream", "id", "ideograph_advantage", "imp", "inbox_tray", "incoming_envelope", "information_desk_person", "information_source", "innocent", "interrobang", "iphone", "it", "izakaya_lantern", "jack_o_lantern", "japan", "japanese_castle", "japanese_goblin", "japanese_ogre", "jeans", "joy", "joy_cat", "jp", "key", "keycap_ten", "kimono", "kiss", "kissing", "kissing_cat", "kissing_closed_eyes", "kissing_face", "kissing_heart", "kissing_smiling_eyes", "koala", "koko", "kr", "large_blue_circle", "large_blue_diamond", "large_orange_diamond", "last_quarter_moon", "last_quarter_moon_with_face", "laughing", "leaves", "ledger", "left_luggage", "left_right_arrow", "leftwards_arrow_with_hook", "lemon", "leo", "leopard", "libra", "light_rail", "link", "lips", "lipstick", "lock", "lock_with_ink_pen", "lollipop", "loop", "loudspeaker", "love_hotel", "love_letter", "low_brightness", "m", "mag", "mag_right", "mahjong", "mailbox", "mailbox_closed", "mailbox_with_mail", "mailbox_with_no_mail", "man", "man_with_gua_pi_mao", "man_with_turban", "mans_shoe", "maple_leaf", "mask", "massage", "meat_on_bone", "mega", "melon", "memo", "mens", "metal", "metro", "microphone", "microscope", "milky_way", "minibus", "minidisc", "mobile_phone_off", "money_with_wings", "moneybag", "monkey", "monkey_face", "monorail", "mortar_board", "mount_fuji", "mountain_bicyclist", "mountain_cableway", "mountain_railway", "mouse", "mouse2", "movie_camera", "moyai", "muscle", "mushroom", "musical_keyboard", "musical_note", "musical_score", "mute", "nail_care", "name_badge", "neckbeard", "necktie", "negative_squared_cross_mark", "neutral_face", "new", "new_moon", "new_moon_with_face", "newspaper", "ng", "nine", "no_bell", "no_bicycles", "no_entry", "no_entry_sign", "no_good", "no_mobile_phones", "no_mouth", "no_pedestrians", "no_smoking", "non-potable_water", "nose", "notebook", "notebook_with_decorative_cover", "notes", "nut_and_bolt", "o", "o2", "ocean", "octocat", "octopus", "oden", "office", "ok", "ok_hand", "ok_woman", "older_man", "older_woman", "on", "oncoming_automobile", "oncoming_bus", "oncoming_police_car", "oncoming_taxi", "one", "open_file_folder", "open_hands", "open_mouth", "ophiuchus", "orange_book", "outbox_tray", "ox", "package", "page_facing_up", "page_with_curl", "pager", "palm_tree", "panda_face", "paperclip", "parking", "part_alternation_mark", "partly_sunny", "passport_control", "paw_prints", "peach", "pear", "pencil", "pencil2", "penguin", "pensive", "performing_arts", "persevere", "person_frowning", "person_with_blond_hair", "person_with_pouting_face", "phone", "pig", "pig2", "pig_nose", "pill", "pineapple", "pisces", "pizza", "plus1", "point_down", "point_left", "point_right", "point_up", "point_up_2", "police_car", "poodle", "poop", "post_office", "postal_horn", "postbox", "potable_water", "pouch", "poultry_leg", "pound", "pouting_cat", "pray", "princess", "punch", "purple_heart", "purse", "pushpin", "put_litter_in_its_place", "question", "rabbit", "rabbit2", "racehorse", "radio", "radio_button", "rage", "rage1", "rage2", "rage3", "rage4", "railway_car", "rainbow", "raised_hand", "raised_hands", "raising_hand", "ram", "ramen", "rat", "recycle", "red_car", "red_circle", "registered", "relaxed", "relieved", "repeat", "repeat_one", "restroom", "revolving_hearts", "rewind", "ribbon", "rice", "rice_ball", "rice_cracker", "rice_scene", "ring", "rocket", "roller_coaster", "rooster", "rose", "rotating_light", "round_pushpin", "rowboat", "ru", "rugby_football", "runner", "running", "running_shirt_with_sash", "sa", "sagittarius", "sailboat", "sake", "sandal", "santa", "satellite", "satisfied", "saxophone", "school", "school_satchel", "scissors", "scorpius", "scream", "scream_cat", "scroll", "seat", "secret", "see_no_evil", "seedling", "seven", "shaved_ice", "sheep", "shell", "ship", "shipit", "shirt", "shit", "shoe", "shower", "signal_strength", "six", "six_pointed_star", "ski", "skull", "sleeping", "sleepy", "slot_machine", "small_blue_diamond", "small_orange_diamond", "small_red_triangle", "small_red_triangle_down", "smile", "smile_cat", "smiley", "smiley_cat", "smiling_imp", "smirk", "smirk_cat", "smoking", "snail", "snake", "snowboarder", "snowflake", "snowman", "sob", "soccer", "soon", "sos", "sound", "space_invader", "spades", "spaghetti", "sparkle", "sparkler", "sparkles", "sparkling_heart", "speak_no_evil", "speaker", "speech_balloon", "speedboat", "squirrel", "star", "star2", "stars", "station", "statue_of_liberty", "steam_locomotive", "stew", "straight_ruler", "strawberry", "stuck_out_tongue", "stuck_out_tongue_closed_eyes", "stuck_out_tongue_winking_eye", "sun_with_face", "sunflower", "sunglasses", "sunny", "sunrise", "sunrise_over_mountains", "surfer", "sushi", "suspect", "suspension_railway", "sweat", "sweat_drops", "sweat_smile", "sweet_potato", "swimmer", "symbols", "syringe", "tada", "tanabata_tree", "tangerine", "taurus", "taxi", "tea", "telephone", "telephone_receiver", "telescope", "tennis", "tent", "thought_balloon", "three", "thumbsdown", "thumbsup", "ticket", "tiger", "tiger2", "tired_face", "tm", "toilet", "tokyo_tower", "tomato", "tongue", "top", "tophat", "tractor", "traffic_light", "train", "train2", "tram", "triangular_flag_on_post", "triangular_ruler", "trident", "triumph", "trolleybus", "trollface", "trophy", "tropical_drink", "tropical_fish", "truck", "trumpet", "tshirt", "tulip", "turtle", "tv", "twisted_rightwards_arrows", "two", "two_hearts", "two_men_holding_hands", "two_women_holding_hands", "u5272", "u5408", "u55b6", "u6307", "u6708", "u6709", "u6e80", "u7121", "u7533", "u7981", "u7a7a", "uk", "umbrella", "unamused", "underage", "unlock", "up", "us", "v", "vertical_traffic_light", "vhs", "vibration_mode", "video_camera", "video_game", "violin", "virgo", "volcano", "vs", "walking", "waning_crescent_moon", "waning_gibbous_moon", "warning", "watch", "water_buffalo", "watermelon", "wave", "wavy_dash", "waxing_crescent_moon", "waxing_gibbous_moon", "wc", "weary", "wedding", "whale", "whale2", "wheelchair", "white_check_mark", "white_circle", "white_flower", "white_large_square", "white_medium_small_square", "white_medium_square", "white_small_square", "white_square_button", "wind_chime", "wine_glass", "wink", "wolf", "woman", "womans_clothes", "womans_hat", "womens", "worried", "wrench", "x", "yellow_heart", "yen", "yum", "zap", "zero", "zzz"]
}), define("pagedown_converter", ["hyperdown", "emojiList"], function (e, t) {
    "use strict";
    function n(e) {
        return e
    }

    function r() {
        return !1
    }

    function i() {
    }

    function o() {
    }

    var a = {};
    i.prototype = {
        chain: function (e, t) {
            var r = this[e];
            if (!r)throw new Error("unknown hook " + e);
            this[e] = r === n ? t : function () {
                var e = Array.prototype.slice.call(arguments, 0);
                return e[0] = r.apply(null, e), t.apply(null, e)
            }
        }, set: function (e, t) {
            if (!this[e])throw new Error("unknown hook " + e);
            this[e] = t
        }, addNoop: function (e) {
            this[e] = n
        }, addFalse: function (e) {
            this[e] = r
        }
    }, a.HookCollection = i, o.prototype = {
        set: function (e, t) {
            this["s_" + e] = t
        }, get: function (e) {
            return this["s_" + e]
        }
    }, a.Converter = new e;
    var s = a.Converter.hooks = new i;
    return s.addNoop("plainLinkText"), s.addNoop("preConversion"), s.addNoop("postNormalization"), s.addNoop("preBlockGamut"), s.addNoop("postBlockGamut"), s.addNoop("preSpanGamut"), s.addNoop("postSpanGamut"), s.addNoop("postConversion"), a.Converter.hook("beforeParseInline", function (e) {
        return e.map(function (e) {
            return e = e.replace(/\$\$(.+?)\$\$/g, function (e) {
                return a.Converter.makeHolder("$$" + a.Converter.htmlspecialchars(e) + "$$")
            })
        })
    }), a.Converter.hook("afterParseInlineBeforeRelease", function (e) {
        return e.map(function (e) {
            return e = e.replace(/:([_a-z0-9]+):/g, function (e, n) {
                if (-1 !== t.indexOf(n)) {
                    var r = '<img src="' + SF.staticUrl + "/build/global/img/emojis/" + n + '.png" class="emoji" alt="' + n + '" title="' + n + '">';
                    return a.Converter.makeHolder(r)
                }
                return e
            })
        })
    }), a
}), define("pagedown_sanitizer", ["pagedown_converter"], function (e) {
    "use strict";
    function t(e) {
        return e.replace(/<[^>]*>?/gi, n)
    }

    function n(e) {
        return e.match(a) || e.match(s) || e.match(l) ? e : ""
    }

    function r(e) {
        if ("" == e)return "";
        var t = /<\/?\w+[^>]*(\s|$|>)/g, n = e.toLowerCase().match(t), r = (n || []).length;
        if (0 == r)return e;
        for (var i, o, a, s = "<p><img><br><li><hr><th>", l = [], c = [], u = !1, d = 0; r > d; d++)if (i = n[d].replace(/<\/?(\w+).*/, "$1"), !(l[d] || s.search("<" + i + ">") > -1)) {
            if (o = n[d], a = -1, !/^<\//.test(o))for (var f = d + 1; r > f; f++)if (!l[f] && n[f] == "</" + i + ">") {
                a = f;
                break
            }
            -1 == a ? u = c[d] = !0 : l[a] = !0
        }
        if (!u)return e;
        var d = 0;
        return e = e.replace(t, function (e) {
            var t = c[d] ? "" : e;
            return d++, t
        })
    }

    var i, o;
    "object" == typeof exports && "function" == typeof require ? (i = exports, o = require("../hyperdown/hyperdown.js")) : (i = e, o = i.Converter), i.getSanitizingConverter = function () {
        var e = o;
        return e.hooks.chain("postConversion", t), e.hooks.chain("postConversion", r), e
    };
    var a = /^(<\/?(b|blockquote|code|del|dd|dl|dt|em|h1|h2|h3|h4|i|kbd|li|ol|p|pre|s|sup|sub|strong|strike|ul|table|td|tbody|th|thead|tr)>|<(br|hr)\s?\/?>)$/i, s = /^(<a\shref="((https?|ftp):\/\/|\/)[-A-Za-z0-9+&@#\/%?=~_|!:,.;\(\)]+"(\stitle="[^"<>]+")?\s?>|<\/a>)$/i, l = /^(<img\ssrc="(https?:\/\/|\/)[-A-Za-z0-9+&@#\/%?=~_|!:,.;\(\)]+"(\swidth="\d{1,3}")?(\sheight="\d{1,3}")?(\salt="[^"<>]*")?(\stitle="[^"<>]*")?\s?\/?>)$/i;
    return i
}), define("pagedown_extra", ["pagedown_converter"], function (e) {
    function t(e) {
        return e.replace(/^\s+|\s+$/g, "")
    }

    function n(e) {
        return e.replace(/\s+$/g, "")
    }

    function r(e) {
        return e.replace(new RegExp("^(\\t|[ ]{1,4})", "gm"), "")
    }

    function i(e, t) {
        return -1 != e.indexOf(t)
    }

    function o(e, t) {
        return e.replace(/<[^>]*>?/gi, function (e) {
            return e.match(t) ? e : ""
        })
    }

    function a(e, t) {
        for (var n = {}, r = 0; r < e.length; r++)n[e[r]] = e[r];
        for (r = 0; r < t.length; r++)n[t[r]] = t[r];
        var i = [];
        for (var o in n)n.hasOwnProperty(o) && i.push(n[o]);
        return i
    }

    function s(e) {
        return "" != e.charAt(0) && (e = "" + e), "" != e.charAt(e.length - 1) && (e += ""), e
    }

    function l(e) {
        return "" == e.charAt(0) && (e = e.substr(1)), "" == e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), e
    }

    function c(e, t) {
        return o(u(e, t), g)
    }

    function u(e, t) {
        var n = t.blockGamutHookCallback(e);
        return n = p(n), n = n.replace(/~D/g, "$$").replace(/~T/g, "~"), n = t.previousPostConversion(n)
    }

    function d(e) {
        return e.replace(/\\\|/g, "~I").replace(/\\:/g, "~i")
    }

    function f(e) {
        return e.replace(/~I/g, "|").replace(/~i/g, ":")
    }

    function p(e) {
        return e = e.replace(/~E(\d+)E/g, function (e, t) {
            var n = parseInt(t);
            return String.fromCharCode(n)
        })
    }

    function h(e) {
        return e.toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
    }

    function m(e, t) {
        var n = t;
        return n = n.replace(/&\#8220;/g, '"'), n = n.replace(/&\#8221;/g, '"'), n = n.replace(/&\#8216;/g, "'"), n = n.replace(/&\#8217;/g, "'"), n = n.replace(/&\#8212;/g, "---"), n = n.replace(/&\#8211;/g, "--"), n = n.replace(/&\#8230;/g, "...")
    }

    var g = new RegExp(["^(<\\/?(a|abbr|acronym|applet|area|b|basefont|", "bdo|big|button|cite|code|del|dfn|em|figcaption|", "font|i|iframe|img|input|ins|kbd|label|map|", "mark|meter|object|param|progress|q|ruby|rp|rt|s|", "samp|script|select|small|span|strike|strong|", "sub|sup|textarea|time|tt|u|var|wbr)[^>]*>|", "<(br)\\s?\\/?>)$"].join(""), "i");
    Array.indexOf || (Array.prototype.indexOf = function (e) {
        for (var t = 0; t < this.length; t++)if (this[t] == e)return t;
        return -1
    }), e.Extra = function () {
        this.converter = null, this.hashBlocks = [], this.footnotes = {}, this.usedFootnotes = [], this.attributeBlocks = !1, this.googleCodePrettify = !1, this.highlightJs = !1, this.tableClass = "", this.tabWidth = 4
    }, e.Extra.init = function (t, n) {
        var r = new e.Extra, o = [], a = [], s = [], l = ["unHashExtraBlocks"];
        return n = n || {}, n.extensions = n.extensions || ["all"], i(n.extensions, "all") && (n.extensions = ["tables", "fenced_code_gfm", "def_list", "attr_list", "footnotes", "smartypants", "strikethrough", "newlines"]), a.push("wrapHeaders"), i(n.extensions, "attr_list") && (o.push("hashFcbAttributeBlocks"), a.push("hashHeaderAttributeBlocks"), l.push("applyAttributeBlocks"), r.attributeBlocks = !0), i(n.extensions, "fenced_code_gfm") && (a.push("fencedCodeBlocks"), o.push("fencedCodeBlocks")), i(n.extensions, "tables") && a.push("tables"), i(n.extensions, "def_list") && a.push("definitionLists"), i(n.extensions, "footnotes") && (o.push("stripFootnoteDefinitions"), a.push("doFootnotes"), l.push("printFootnotes")), i(n.extensions, "smartypants") && l.push("runSmartyPants"), i(n.extensions, "strikethrough") && s.push("strikethrough"), i(n.extensions, "newlines") && s.push("newlines"), t.hooks.chain("postNormalization", function (e) {
            return r.doTransform(o, e) + "\n"
        }), t.hooks.chain("preBlockGamut", function (e, t) {
            return r.blockGamutHookCallback = t, e = d(e), e = r.doTransform(a, e) + "\n", e = f(e)
        }), t.hooks.chain("postSpanGamut", function (e) {
            return r.doTransform(s, e)
        }), r.previousPostConversion = t.hooks.postConversion, t.hooks.chain("postConversion", function (e) {
            return e = r.doTransform(l, e), r.hashBlocks = [], r.footnotes = {}, r.usedFootnotes = [], e
        }), "highlighter"in n && (r.googleCodePrettify = "prettify" === n.highlighter, r.highlightJs = "highlight" === n.highlighter), "table_class"in n && (r.tableClass = n.table_class), r.converter = t, r
    }, e.Extra.prototype.doTransform = function (e, t) {
        for (var n = 0; n < e.length; n++)t = this[e[n]](t);
        return t
    }, e.Extra.prototype.hashExtraBlock = function (e) {
        return "\n<p>~X" + (this.hashBlocks.push(e) - 1) + "X</p>\n"
    }, e.Extra.prototype.hashExtraInline = function (e) {
        return "~X" + (this.hashBlocks.push(e) - 1) + "X"
    }, e.Extra.prototype.unHashExtraBlocks = function (e) {
        function t() {
            var r = !1;
            e = e.replace(/(?:<p>)?~X(\d+)X(?:<\/p>)?/g, function (e, t) {
                r = !0;
                var i = parseInt(t, 10);
                return n.hashBlocks[i]
            }), r === !0 && t()
        }

        var n = this;
        return t(), e
    }, e.Extra.prototype.wrapHeaders = function (e) {
        function t(e) {
            return "\n" + e + "\n"
        }

        return e = e.replace(/^.+[ \t]*\n=+[ \t]*\n+/gm, t), e = e.replace(/^.+[ \t]*\n-+[ \t]*\n+/gm, t), e = e.replace(/^\#{1,6}[ \t]*.+?[ \t]*\#*\n+/gm, t)
    };
    var v = "\\{[ \\t]*((?:[#.][-_:a-zA-Z0-9]+[ \\t]*)+)\\}", b = new RegExp("^(#{1,6}.*#{0,6})[ \\t]+" + v + "[ \\t]*(?:\\n|0x03)", "gm"), y = new RegExp("^(.*)[ \\t]+" + v + "[ \\t]*\\n(?=[\\-|=]+\\s*(?:\\n|0x03))", "gm"), w = new RegExp("^(```[ \\t]*[^{\\s]*)[ \\t]+" + v + "[ \\t]*\\n(?=([\\s\\S]*?)\\n```[ \\t]*(\\n|0x03))", "gm");
    e.Extra.prototype.hashHeaderAttributeBlocks = function (e) {
        function t(e, t, r) {
            return "<p>~XX" + (n.hashBlocks.push(r) - 1) + "XX</p>\n" + t + "\n"
        }

        var n = this;
        return e = e.replace(b, t), e = e.replace(y, t)
    }, e.Extra.prototype.hashFcbAttributeBlocks = function (e) {
        function t(e, t, r) {
            return "<p>~XX" + (n.hashBlocks.push(r) - 1) + "XX</p>\n" + t + "\n"
        }

        var n = this;
        return e.replace(w, t)
    }, e.Extra.prototype.applyAttributeBlocks = function (e) {
        var t = this, n = new RegExp('<p>~XX(\\d+)XX</p>[\\s]*(?:<(h[1-6]|pre)(?: +class="(\\S+)")?(>[\\s\\S]*?</\\2>))', "gm");
        return e = e.replace(n, function (e, n, r, i, o) {
            if (!r)return "";
            for (var s = parseInt(n, 10), l = t.hashBlocks[s], c = l.match(/#[^\s#.]+/g) || [], u = c[0] ? ' id="' + c[0].substr(1, c[0].length - 1) + '"' : "", d = l.match(/\.[^\s#.]+/g) || [], f = 0; f < d.length; f++)d[f] = d[f].substr(1, d[f].length - 1);
            var p = "";
            return i && (d = a(d, [i])), d.length > 0 && (p = ' class="' + d.join(" ") + '"'), "<" + r + u + p + o
        })
    }, e.Extra.prototype.tables = function (e) {
        function n(e, n, i, o) {
            n = n.replace(/^ *[|]/m, ""), i = i.replace(/^ *[|]/m, ""), o = o.replace(/^ *[|]/gm, ""), n = n.replace(/[|] *$/m, ""), i = i.replace(/[|] *$/m, ""), o = o.replace(/[|] *$/gm, ""), alignspecs = i.split(/ *[|] */), align = [];
            for (var a = 0; a < alignspecs.length; a++) {
                var s = alignspecs[a];
                align[a] = s.match(/^ *-+: *$/m) ? ' style="text-align:right;"' : s.match(/^ *:-+: *$/m) ? ' style="text-align:center;"' : s.match(/^ *:-+ *$/m) ? ' style="text-align:left;"' : ""
            }
            var l = n.split(/ *[|] */), u = l.length, d = r.tableClass ? ' class="' + r.tableClass + '"' : "", f = ["<table", d, ">\n", "<thead>\n", "<tr>\n"].join("");
            for (a = 0; u > a; a++) {
                var p = c(t(l[a]), r);
                f += ["  <th", align[a], ">", p, "</th>\n"].join("")
            }
            f += "</tr>\n</thead>\n";
            var h = o.split("\n");
            for (a = 0; a < h.length; a++)if (!h[a].match(/^\s*$/)) {
                for (var m = h[a].split(/ *[|] */), g = u - m.length, v = 0; g > v; v++)m.push("");
                for (f += "<tr>\n", v = 0; u > v; v++) {
                    var b = c(t(m[v]), r);
                    f += ["  <td", align[v], ">", b, "</td>\n"].join("")
                }
                f += "</tr>\n"
            }
            return f += "</table>\n", r.hashExtraBlock(f)
        }

        var r = this, i = new RegExp(["^", "[ ]{0,3}", "[|]", "(.+)\\n", "[ ]{0,3}", "[|]([ ]*[-:]+[-| :]*)\\n", "(", "(?:[ ]*[|].*\\n?)*", ")", "(?:\\n|$)"].join(""), "gm"), o = new RegExp(["^", "[ ]{0,3}", "(\\S.*[|].*)\\n", "[ ]{0,3}", "([-:]+[ ]*[|][-| :]*)\\n", "(", "(?:.*[|].*\\n?)*", ")", "(?:\\n|$)"].join(""), "gm");
        return e = e.replace(i, n), e = e.replace(o, n)
    }, e.Extra.prototype.stripFootnoteDefinitions = function (e) {
        var t = this;
        return e = e.replace(/\n[ ]{0,3}\[\^(.+?)\]\:[ \t]*\n?([\s\S]*?)\n{1,2}((?=\n[ ]{0,3}\S)|$)/g, function (e, n, r) {
            return n = h(n), r += "\n", r = r.replace(/^[ ]{0,3}/g, ""), t.footnotes[n] = r, "\n"
        })
    }, e.Extra.prototype.doFootnotes = function (e) {
        var t = this;
        if (t.isConvertingFootnote === !0)return e;
        var n = 0;
        return e = e.replace(/\[\^(.+?)\]/g, function (e, r) {
            var i = h(r), o = t.footnotes[i];
            if (void 0 === o)return e;
            n++, t.usedFootnotes.push(i);
            var a = '<a href="#fn:' + i + '" id="fnref:' + i + '" title="See footnote" class="footnote">' + n + "</a>";
            return t.hashExtraInline(a)
        })
    }, e.Extra.prototype.printFootnotes = function (e) {
        var t = this;
        if (0 === t.usedFootnotes.length)return e;
        e += '\n\n<div class="footnotes">\n<hr>\n<ol>\n\n';
        for (var n = 0; n < t.usedFootnotes.length; n++) {
            var r = t.usedFootnotes[n], i = t.footnotes[r];
            t.isConvertingFootnote = !0;
            var o = c(i, t);
            delete t.isConvertingFootnote, e += '<li id="fn:' + r + '">' + o + ' <a href="#fnref:' + r + '" title="Return to article" class="reversefootnote">&#8617;</a></li>\n\n'
        }
        return e += "</ol>\n</div>"
    }, e.Extra.prototype.fencedCodeBlocks = function (e) {
        function t(e) {
            return e = e.replace(/&/g, "&amp;"), e = e.replace(/</g, "&lt;"), e = e.replace(/>/g, "&gt;"), e = e.replace(/~D/g, "$$"), e = e.replace(/~T/g, "~")
        }

        var n = this;
        return e = e.replace(/(?:^|\n)```[ \t]*(\S*)[ \t]*\n([\s\S]*?)\n```[ \t]*(?=\n)/g, function (e, r, i) {
            var o = r, a = i, s = n.googleCodePrettify ? ' class="prettyprint"' : "", l = "";
            o && (l = n.googleCodePrettify || n.highlightJs ? ' class="language-' + o + '"' : ' class="' + o + '"');
            var c = ["<pre", s, "><code", l, ">", t(a), "</code></pre>"].join("");
            return n.hashExtraBlock(c)
        })
    }, e.Extra.prototype.educatePants = function (e) {
        var t = this, n = "", r = 0;
        e.replace(/(?:<!--[\s\S]*?-->)|(<)([a-zA-Z1-6]+)([^\n]*?>)([\s\S]*?)(<\/\2>)/g, function (i, o, a, s, l, c, u) {
            var d = e.substring(r, u);
            return n += t.applyPants(d), t.smartyPantsLastChar = n.substring(n.length - 1), r = u + i.length, o ? (/code|kbd|pre|script|noscript|iframe|math|ins|del|pre/i.test(a) ? t.smartyPantsLastChar = l.substring(l.length - 1) : l = t.educatePants(l), void(n += o + a + s + l + c)) : void(n += i)
        });
        var i = e.substring(r);
        return n += t.applyPants(i), t.smartyPantsLastChar = n.substring(n.length - 1), n
    }, e.Extra.prototype.applyPants = function (e) {
        return e = e.replace(/---/g, "&#8212;").replace(/--/g, "&#8211;"), e = e.replace(/\.\.\./g, "&#8230;").replace(/\.\s\.\s\./g, "&#8230;"), e = e.replace(/``/g, "&#8220;").replace(/''/g, "&#8221;"), /^'$/.test(e) ? /\S/.test(this.smartyPantsLastChar) ? "&#8217;" : "&#8216;" : /^"$/.test(e) ? /\S/.test(this.smartyPantsLastChar) ? "&#8221;" : "&#8220;" : (e = e.replace(/^'(?=[!"#\$\%'()*+,\-.\/:;<=>?\@\[\\]\^_`{|}~]\B)/, "&#8217;"), e = e.replace(/^"(?=[!"#\$\%'()*+,\-.\/:;<=>?\@\[\\]\^_`{|}~]\B)/, "&#8221;"), e = e.replace(/"'(?=\w)/g, "&#8220;&#8216;"), e = e.replace(/'"(?=\w)/g, "&#8216;&#8220;"), e = e.replace(/'(?=\d{2}s)/g, "&#8217;"), e = e.replace(/(\s|&nbsp;|--|&[mn]dash;|&\#8211;|&\#8212;|&\#x201[34];)'(?=\w)/g, "$1&#8216;"), e = e.replace(/([^\s\[\{\(\-])'/g, "$1&#8217;"), e = e.replace(/'(?=\s|s\b)/g, "&#8217;"), e = e.replace(/'/g, "&#8216;"), e = e.replace(/(\s|&nbsp;|--|&[mn]dash;|&\#8211;|&\#8212;|&\#x201[34];)"(?=\w)/g, "$1&#8220;"), e = e.replace(/([^\s\[\{\(\-])"/g, "$1&#8221;"), e = e.replace(/"(?=\s)/g, "&#8221;"), e = e.replace(/"/gi, "&#8220;"))
    }, e.Extra.prototype.runSmartyPants = function (e) {
        return this.smartyPantsLastChar = "", e = this.educatePants(e), e = e.replace(/(<([a-zA-Z1-6]+)\b([^\n>]*?)(\/)?>)/g, m)
    }, e.Extra.prototype.definitionLists = function (e) {
        var n = new RegExp(["(\\x02\\n?|\\n\\n)", "(?:", "(", "(", "[ ]{0,3}", "((?:[ \\t]*\\S.*\\n)+)", "\\n?", "[ ]{0,3}:[ ]+", ")", "([\\s\\S]+?)", "(", "(?=\\0x03)", "|", "(?=", "\\n{2,}", "(?=\\S)", "(?!", "[ ]{0,3}", "(?:\\S.*\\n)+?", "\\n?", "[ ]{0,3}:[ ]+", ")", "(?!", "[ ]{0,3}:[ ]+", ")", ")", ")", ")", ")"].join(""), "gm"), r = this;
        return e = s(e), e = e.replace(n, function (e, n, i) {
            var o = t(r.processDefListItems(i));
            return o = "<dl>\n" + o + "\n</dl>", n + r.hashExtraBlock(o) + "\n\n"
        }), l(e)
    }, e.Extra.prototype.processDefListItems = function (e) {
        var i = this, o = new RegExp(["(\\x02\\n?|\\n\\n+)", "(", "[ ]{0,3}", "(?![:][ ]|[ ])", "(?:\\S.*\\n)+?", ")", "(?=\\n?[ ]{0,3}:[ ])"].join(""), "gm"), a = new RegExp(["\\n(\\n+)?", "(", "[ ]{0,3}", "[:][ ]+", ")", "([\\s\\S]+?)", "(?=\\n*", "(?:", "\\n[ ]{0,3}[:][ ]|", "<dt>|\\x03", ")", ")"].join(""), "gm");
        return e = s(e), e = e.replace(/\n{2,}(?=\\x03)/, "\n"), e = e.replace(o, function (e, n, r) {
            for (var o = t(r).split("\n"), a = "", s = 0; s < o.length; s++) {
                var l = o[s];
                l = c(t(l), i), a += "\n<dt>" + l + "</dt>"
            }
            return a + "\n"
        }), e = e.replace(a, function (e, t, o, a) {
            return t || a.match(/\n{2,}/) ? (a = Array(o.length + 1).join(" ") + a, a = r(a) + "\n\n", a = "\n" + u(a, i) + "\n") : (a = n(a), a = c(r(a), i)), "\n<dd>" + a + "</dd>\n"
        }), l(e)
    }, e.Extra.prototype.strikethrough = function (e) {
        return e.replace(/([\W_]|^)~T~T(?=\S)([^\r]*?\S[\*_]*)~T~T([\W_]|$)/g, "$1<del>$2</del>$3")
    }, e.Extra.prototype.newlines = function (e) {
        return e.replace(/(<(?:br|\/li)>)?\n/g, function (e, t) {
            return t ? e : " <br>\n"
        })
    }
}), function () {
    var e = window.log || $.noop, t = {
        fileError: function (e, t, n) {
            window.alert(n)
        }
    }, n = window.FileReader || window.File && window.File.prototype.getAsBinary, r = !!window.FormData, i = window.FileReader || window.File && window.File.prototype.getAsDataURL, o = !!document.createElement("canvas").toDataURL, a = o && window.atob, s = !!document.createElement("canvas").mozGetAsFile, l = window.XMLHttpRequest && window.XMLHttpRequest.prototype.sendAsBinary || window.Blob && window.Uint8Array && window.ProgressEvent || window.ArrayBuffer && window.BlobBuilder, c = !!window.FormData, u = !!document.createElement("canvas").toDataURL, d = n && l || r && c, f = i && (a && l || s && c), p = i, h = i && o, m = function (e) {
        return e.substring(e.indexOf(",") + 1, e.length)
    }, g = function (t, n) {
        var i = {type: n.type || "", size: n.size || n.fileSize, name: n.name || n.fileName};
        if (t.resizeImage && !f && t.allowUploadOriginalImage && (e("WARN: Fall back to upload original un-resized image."), t.resizeImage = !1), !t.resizeImage) {
            if (t.fileType && t.fileType.test && !t.fileType.test(i.name.substr(i.name.lastIndexOf(".") + 1)))return e("ERROR: Invalid Filetype."), void t.fileError.call(this, i, "INVALID_FILETYPE", "Invalid filetype.");
            if (t.fileMaxSize && n.size > t.fileMaxSize)return e("ERROR: File exceeds size limit."), void t.fileError.call(this, i, "FILE_EXCEEDS_SIZE_LIMIT", "File exceeds size limit.")
        }
        if (!t.resizeImage && r)e("INFO: Bypass file reading, insert file object into FormData object directly."), b(t, "file", n, i); else if (window.FileReader) {
            e("INFO: Using FileReader to do asynchronously file reading.");
            var o = new FileReader;
            o.onerror = function (n) {
                if (n.target.error)switch (n.target.error) {
                    case 8:
                        e("ERROR: File not found."), t.fileError.call(this, i, "FILE_NOT_FOUND", "File not found.");
                        break;
                    case 24:
                        e("ERROR: File not readable."), t.fileError.call(this, i, "IO_ERROR", "File not readable.");
                        break;
                    case 18:
                        e("ERROR: File cannot be access due to security constrant."), t.fileError.call(this, i, "SECURITY_ERROR", "File cannot be access due to security constrant.");
                        break;
                    case 20:
                }
            }, t.resizeImage ? (o.onloadend = function (e) {
                var r = e.target.result;
                v(t, r, i, n)
            }, o.readAsDataURL(n)) : l ? (o.onloadend = function (e) {
                var n = e.target.result;
                b(t, "bin", n, i)
            }, o.readAsBinaryString(n)) : t.allowDataInBase64 ? (o.onloadend = function (e) {
                b(t, "base64", m(e.target.result), i)
            }, o.readAsDataURL(n)) : (e("ERROR: No available method to extract file; allowDataInBase64 not set."), t.fileError.call(this, i, "NO_BIN_SUPPORT_AND_BASE64_NOT_SET", "No available method to extract file; allowDataInBase64 not set."))
        } else if (window.File && window.File.prototype.getAsBinary)if (e("WARN: FileReader does not exist, UI will be blocked when reading big file."), t.resizeImage) {
            try {
                var a = n.getAsDataURL()
            } catch (s) {
                return e("ERROR: File not readable."), void t.fileError.call(this, i, "IO_ERROR", "File not readable.")
            }
            v(t, dataurl, i, n)
        } else {
            try {
                var a = n.getAsBinary()
            } catch (s) {
                return e("ERROR: File not readable."), void t.fileError.call(this, i, "IO_ERROR", "File not readable.")
            }
            b(t, "bin", a, i)
        } else t.fallback ? t.fallback() : t.fileError.call(this, i, "NOT_SUPPORT", "ERROR: No available method to extract file; this browser is not supported.")
    }, v = function (t, n, r, i) {
        var d = new Image;
        d.onerror = function () {
            e("ERROR: <img> failed to load, file is not a supported image format."), t.fileError.call(this, r, "FILE_NOT_IMAGE", "File is not a supported image format.")
        }, d.onload = function () {
            var n = document.createElement("canvas"), f = function (n) {
                t.imageType && "auto" !== t.imageType || (t.imageType = "image/jpeg" === r.type ? "jpeg" : "png");
                var d = {
                    type: "image/" + t.imageType,
                    name: r.name.substr(0, r.name.indexOf(".")) + ".resized." + t.imageType
                };
                if (s && c) {
                    var f = n.mozGetAsFile(d.name, "image/" + t.imageType);
                    d.size = i.size || i.fileSize, b(t, "file", f, d)
                } else if (a && l) {
                    var p = window.atob(m(n.toDataURL("image/" + t.imageType)));
                    d.size = p.length, b(t, "bin", p, d)
                } else t.allowDataInBase64 && o && u ? b(t, "base64", m(n.toDataURL("image/" + t.imageType)), d) : (e("ERROR: No available method to extract image; allowDataInBase64 not set."), t.fileError.call(this, r, "NO_BIN_SUPPORT_AND_BASE64_NOT_SET", "No available method to extract file; allowDataInBase64 not set."))
            };
            t.resizeImage(d, n, f)
        }, d.src = n
    }, b = function (t, n, r, i) {
        if (c && "file" === n) {
            e("INFO: Using FormData to construct form.");
            var o = new FormData;
            o.append(t.name, r), t.processData = !1, t.contentType = !1, t.__beforeSend = t.beforeSend, t.beforeSend = function (e, t) {
                return t.data = o, t.__beforeSend ? t.__beforeSend.call(this, e, t) : void 0
            }
        } else if (l && "bin" === n) {
            e("INFO: Concat our own multipart/form-data data string."), i.type || (i.type = "application/octet-stream"), /[^\x20-\x7E]/.test(i.name) && (e("INFO: Filename contains non-ASCII code, do UTF8-binary string conversion."), i.name_bin = unescape(encodeURIComponent(i.name)));
            var a = "xhrupload-" + parseInt(Math.random() * (2 << 16));
            t.contentType = "multipart/form-data; boundary=" + a;
            var o = "--" + a + '\ncontent-disposition: form-data; name="' + t.name + '"; filename="' + (i.name_bin || i.name) + '"\nContent-Type: ' + i.type + "\n\n" + r + "\n\n--" + a + "--";
            if (window.XMLHttpRequest && window.XMLHttpRequest.prototype.sendAsBinary)e("INFO: Pass binary string to xhr."), t.data = o; else if (window.Blob && window.Uint8Array && window.ProgressEvent) {
                e("INFO: Make XH2 blob string");
                for (var s = new Uint8Array(o.length), u = 0; u < o.length; u++)s[u] = o.charCodeAt(u);
                var d = s.buffer;
                t.processData = !1, t.__beforeSend = t.beforeSend, t.beforeSend = function (e, t) {
                    return t.data = d, t.__beforeSend ? t.__beforeSend.call(this, e, t) : void 0
                }
            } else {
                e("INFO: Convert binary string into Blob.");
                var f = new ArrayBuffer(o.length), s = new Uint8Array(f);
                $.each(o, function (e, t) {
                    s[e] = t.charCodeAt(0)
                });
                var p = new BlobBuilder;
                p.append(f);
                var d = p.getBlob();
                t.processData = !1, t.__beforeSend = t.beforeSend, t.beforeSend = function (e, t) {
                    return t.data = d, t.__beforeSend ? t.__beforeSend.call(this, e, t) : void 0
                }
            }
        } else {
            if (!t.allowDataInBase64 || "base64" !== n)return e("ERROR: Data is not given in processable form."), void t.fileError.call(this, i, "INTERNAL_ERROR", "Data is not given in processable form.");
            e("INFO: Concat our own multipart/form-data data string; send the file in base64 because binary xhr is not supported."), i.type || (i.type = "application/octet-stream"), t.url += "?enc=base64";
            var a = "xhrupload-" + parseInt(Math.random() * (2 << 16));
            t.contentType = "multipart/form-data; boundary=" + a, t.data = "--" + a + '\ncontent-disposition: form-data; name="' + t.name + '"; filename="' + encodeURIComponent(i.name) + '.base64"\nContent-Transfer-Encoding: base64\nContent-Type: ' + i.type + "\n\n" + r + "\n\n--" + a + "--"
        }
        y(t)
    }, y = function (t) {
        e("INFO: Sending file."), "string" == typeof t.data && l && (e("INFO: Using xhr.sendAsBinary."), t.___beforeSend = t.beforeSend, t.beforeSend = function (e, t) {
            return window.XMLHttpRequest.prototype.sendAsBinary && (e.send = e.sendAsBinary), t.___beforeSend ? t.___beforeSend.call(this, e, t) : void 0
        }), $.ajax(t)
    };
    $.fn.fileUpload = function (n) {
        return this.each(function (r, i) {
            $(i).is("input[type=file]") && (e("INFO: binding onchange event to a input[type=file]."), $(i).bind("change", function () {
                if (!this.files)return void(n.fallback && n.fallback());
                if (!this.files.length)return void e("ERROR: no file selected.");
                this.files.length > 1 && e("WARN: Multiple file upload not implemented yet, only first file will be uploaded."), n.name = $(this).attr("name");
                var r = this.files[0];
                if (n.callback) {
                    var o = function (e) {
                        n.url = n.url || e, g($.extend({}, t, n), r)
                    };
                    n.callback(o)
                } else if ($(i).parents("#localPic").length) {
                    var a = $(i).val();
                    -1 !== a.indexOf("\\fakepath") && (a = a.split("\\fakepath\\")[1]), $("#fileName").val(a), $(".done-btn").click(function () {
                        g($.extend({}, t, n), r)
                    })
                } else g($.extend({}, t, n), this.files[0]);
                this.form ? this.form.reset() : e("WARN: Unable to reset file selection, upload won't be triggered again if user selects the same file.")
            })), $(i).is("form") ? e("ERROR: <form> not implemented yet.") : (e("INFO: binding ondrop event."), $(i).bind("dragover", function () {
                return !1
            }).bind("drop", function (r) {
                return r.originalEvent.dataTransfer.files ? r.originalEvent.dataTransfer.files.length ? (!r.originalEvent.dataTransfer.files.length > 1 && e("WARN: Multiple file upload not implemented yet, only first file will be uploaded."), g($.extend({}, t, n), r.originalEvent.dataTransfer.files[0]), !1) : (e('ERROR: User had dropped a virual file (e.g. "My Computer")'), !1) : (e("ERROR: No FileList object present; user might had dropped text."), !1)
            }))
        }), this
    }, $.fileUploadSupported = d, $.imageUploadSupported = f, $.fileUploadAsBase64Supported = p, $.imageUploadAsBase64Supported = h
}(), define("fileUpload", ["jquery"], function (e) {
    return function () {
        var t;
        return t || e.$.fn.fileUpload
    }
}(this)), define("pagedown_editor", ["jquery", "pagedown_sanitizer", "sfModal", "pagedown_extra", "fileUpload"], function (e, t, n) {
    "use strict";
    function r() {
    }

    function i(e, t) {
        t = t || "wmd-input", this.buttonBar = h.getElementById("wmd-button-bar" + e), this.preview = h.getElementById("wmd-preview" + e), this.input = h.getElementById(t + e)
    }

    function o(e, t) {
        var n, r, i, o = this, s = [], l = 0, c = "none", u = function (e, t) {
            c != e && (c = e, t || p()), b.isIE && "moving" == c ? i = null : r = setTimeout(f, 1)
        }, f = function (e) {
            i = new a(t, e), r = void 0
        };
        this.setCommandMode = function () {
            c = "command", p(), r = setTimeout(f, 0)
        }, this.canUndo = function () {
            return l > 1
        }, this.canRedo = function () {
            return s[l + 1] ? !0 : !1
        }, this.undo = function () {
            o.canUndo() && (n ? (n.restore(), n = null) : (s[l] = new a(t), s[--l].restore(), e && e())), c = "none", t.input.focus(), f()
        }, this.redo = function () {
            o.canRedo() && (s[++l].restore(), e && e()), c = "none", t.input.focus(), f()
        };
        var p = function () {
            var r = i || new a(t);
            return r ? "moving" == c ? void(n || (n = r)) : (n && (s[l - 1].text != n.text && (s[l++] = n), n = null), s[l++] = r, s[l + 1] = null, void(e && e())) : !1
        }, h = function (e) {
            var t = !1;
            if ((e.ctrlKey || e.metaKey) && !e.altKey) {
                var n = e.charCode || e.keyCode, r = String.fromCharCode(n);
                switch (r.toLowerCase()) {
                    case"y":
                        o.redo(), t = !0;
                        break;
                    case"z":
                        e.shiftKey ? o.redo() : o.undo(), t = !0
                }
            }
            return t ? (e.preventDefault && e.preventDefault(), void(window.event && (window.event.returnValue = !1))) : void 0
        }, m = function (e) {
            if (!e.ctrlKey && !e.metaKey) {
                var t = e.keyCode;
                t >= 33 && 40 >= t || t >= 63232 && 63235 >= t ? u("moving") : 8 == t || 46 == t || 127 == t ? u("deleting") : 13 == t ? u("newlines") : 27 == t ? u("escape") : (16 > t || t > 20 || 9 === t) && 91 != t && u("typing")
            }
        }, g = function () {
            d.addEvent(t.input, "keypress", function (e) {
                !e.ctrlKey && !e.metaKey || e.altKey || 89 != e.keyCode && 90 != e.keyCode || e.preventDefault()
            });
            var e = function () {
                (b.isIE || i && i.text != t.input.value) && void 0 == r && (c = "paste", p(), f())
            };
            d.addEvent(t.input, "keydown", h), d.addEvent(t.input, "keydown", m), d.addEvent(t.input, "mousedown", function () {
                u("moving")
            }), t.input.onpaste = e, t.input.ondrop = e
        }, v = function () {
            g(), f(!0), p()
        };
        v()
    }

    function a(e, t) {
        var n = this, i = e.input;
        this.init = function () {
            d.isVisible(i) && (t || !h.activeElement || h.activeElement === i) && (this.setInputAreaSelectionStartEnd(), this.scrollTop = i.scrollTop, (!this.text && i.selectionStart || 0 === i.selectionStart) && (this.text = i.value))
        }, this.setInputAreaSelection = function () {
            if (d.isVisible(i))if (void 0 === i.selectionStart || b.isOpera) {
                if (h.selection) {
                    if (h.activeElement && h.activeElement !== i)return;
                    i.focus();
                    var e = i.createTextRange();
                    e.moveStart("character", -i.value.length), e.moveEnd("character", -i.value.length), e.moveEnd("character", n.end), e.moveStart("character", n.start), e.select()
                }
            } else i.focus(), i.selectionStart = n.start, i.selectionEnd = n.end, i.scrollTop = n.scrollTop
        }, this.setInputAreaSelectionStartEnd = function () {
            if (e.ieCachedRange || !i.selectionStart && 0 !== i.selectionStart) {
                if (h.selection) {
                    n.text = d.fixEolChars(i.value);
                    var t = e.ieCachedRange || h.selection.createRange(), r = d.fixEolChars(t.text), o = "", a = o + r + o;
                    t.text = a;
                    var s = d.fixEolChars(i.value);
                    t.moveStart("character", -a.length), t.text = r, n.start = s.indexOf(o), n.end = s.lastIndexOf(o) - o.length;
                    var l = n.text.length - d.fixEolChars(i.value).length;
                    if (l) {
                        for (t.moveStart("character", -r.length); l--;)r += "\n", n.end += 1;
                        t.text = r
                    }
                    e.ieCachedRange && (n.scrollTop = e.ieCachedScrollTop), e.ieCachedRange = null, this.setInputAreaSelection()
                }
            } else n.start = i.selectionStart, n.end = i.selectionEnd
        }, this.restore = function () {
            void 0 != n.text && n.text != i.value && (i.value = n.text), this.setInputAreaSelection(), i.scrollTop = n.scrollTop
        }, this.getChunks = function () {
            var e = new r;
            return e.before = d.fixEolChars(n.text.substring(0, n.start)), e.startTag = "", e.selection = d.fixEolChars(n.text.substring(n.start, n.end)), e.endTag = "", e.after = d.fixEolChars(n.text.substring(n.end)), e.scrollTop = n.scrollTop, e
        }, this.setChunks = function (e) {
            e.before = e.before + e.startTag, e.after = e.endTag + e.after, this.start = e.before.length, this.end = e.before.length + e.selection.length, this.text = e.before + e.selection + e.after, this.scrollTop = e.scrollTop
        }, this.init()
    }

    function s(e, t, n) {
        var r, i, o, a = 3e3, s = "delayed", l = function (e, t) {
            d.addEvent(e, "input", t), e.onpaste = t, e.ondrop = t, d.addEvent(e, "keypress", t), d.addEvent(e, "keydown", t)
        }, c = function () {
            var e = 0;
            return window.innerHeight ? e = window.pageYOffset : h.documentElement && h.documentElement.scrollTop ? e = h.documentElement.scrollTop : h.body && (e = h.body.scrollTop), e
        }, u = function () {
            if (t.preview) {
                var n = t.input.value;
                if (!n || n != o) {
                    o = n;
                    var r = (new Date).getTime();
                    n = e.makeHtml(n);
                    var a = (new Date).getTime();
                    i = a - r, x(n)
                }
            }
        }, p = function () {
            if (r && (clearTimeout(r), r = void 0), "manual" !== s) {
                var e = 0;
                "delayed" === s && (e = i), e > a && (e = a), r = setTimeout(u, e)
            }
        }, m = function (e) {
            return e.scrollHeight <= e.clientHeight ? 1 : e.scrollTop / (e.scrollHeight - e.clientHeight)
        }, g = function () {
            t.preview && (t.preview.scrollTop = (t.preview.scrollHeight - t.preview.clientHeight) * m(t.preview))
        };
        this.refresh = function (e) {
            e ? (o = "", u()) : p()
        }, this.processingTime = function () {
            return i
        };
        var v, y = !0, w = function (e) {
            var n = t.preview, r = n.parentNode, i = n.nextSibling;
            r.removeChild(n), n.innerHTML = e, i ? r.insertBefore(n, i) : r.appendChild(n)
        }, _ = function (e) {
            t.preview.innerHTML = e
        }, k = function (e) {
            if (v)return v(e);
            try {
                _(e), v = _
            } catch (t) {
                v = w, v(e)
            }
        }, x = function (e) {
            var r = f.getTop(t.input) - c();
            if (t.preview && (k(e), n()), g(), y)return void(y = !1);
            var i = f.getTop(t.input) - c();
            b.isIE ? setTimeout(function () {
                window.scrollBy(0, i - r)
            }, 0) : window.scrollBy(0, i - r)
        }, C = function () {
            l(t.input, p), u(), t.preview && (t.preview.scrollTop = 0)
        };
        C()
    }

    function l(e, t, n, r, i, o, s) {
        function l(e) {
            if (m.focus(), e.textOp) {
                n && n.setCommandMode();
                var i = new a(t);
                if (!i)return;
                var o = i.getChunks(), s = function () {
                    m.focus(), o && i.setChunks(o), i.restore(), r.refresh()
                }, l = e.textOp(o, s);
                l || s()
            }
            e.execute && e.execute(n)
        }

        function c(e, n) {
            var r = "0px", i = "-20px", o = "-40px", a = e.getElementsByTagName("a")[0];
            n ? (a.style.backgroundPosition = e.XShift + " " + r, e.onmouseover = function () {
                a.style.backgroundPosition = this.XShift + " " + o
            }, e.onmouseout = function () {
                a.style.backgroundPosition = this.XShift + " " + r
            }, b.isIE && (e.onmousedown = function () {
                h.activeElement && h.activeElement !== t.input || (t.ieCachedRange = document.selection.createRange(), t.ieCachedScrollTop = t.input.scrollTop)
            }), e.isHelp || (e.onclick = function () {
                return this.onmouseout && this.onmouseout(), l(this), !1
            })) : (a.style.backgroundPosition = e.XShift + " " + i, e.onmouseover = e.onmouseout = e.onclick = function () {
            })
        }

        function u(e) {
            return "string" == typeof e && (e = i[e]), function () {
                e.apply(i, arguments)
            }
        }

        function f() {
            var n = t.buttonBar, r = document.createElement("ul");
            r.id = "wmd-button-row" + e, r.className = "editor__menu clearfix", r = n.appendChild(r);
            var i = 0, a = function (t, n, o, a) {
                var s = document.createElement("li");
                s.className = "wmd-button", s.style.left = i + "px", i += 25;
                var l = document.createElement("a");
                return l.className = "editor__menu--bold", s.id = t + e, s.appendChild(l), s.title = n, s.XShift = o, a && (s.textOp = a), c(s, !0), r.appendChild(s), s
            }, l = function (t) {
                var n = document.createElement("li");
                n.className = "editor__menu--divider wmd-spacer" + t, n.id = "wmd-spacer" + t + e, r.appendChild(n), i += 25
            };
            v.bold = a("wmd-bold-button", s("bold"), "0px", u("doBold")), v.italic = a("wmd-italic-button", s("italic"), "-20px", u("doItalic")), l(1), v.link = a("wmd-link-button", s("link"), "-40px", u(function (e, t) {
                return this.doLinkOrImage(e, t, !1)
            })), v.quote = a("wmd-quote-button", s("quote"), "-60px", u("doBlockquote")), v.code = a("wmd-code-button", s("code"), "-80px", u("doCode")), v.image = a("wmd-image-button", s("image"), "-100px", u(function (e, t) {
                return this.doLinkOrImage(e, t, !0)
            })), l(2), v.olist = a("wmd-olist-button", s("olist"), "-120px", u(function (e, t) {
                this.doList(e, t, !0)
            })), v.ulist = a("wmd-ulist-button", s("ulist"), "-140px", u(function (e, t) {
                this.doList(e, t, !1)
            })), v.heading = a("wmd-heading-button", s("heading"), "-160px", u("doHeading")), v.hr = a("wmd-hr-button", s("hr"), "-180px", u("doHorizontalRule")), l(3), v.undo = a("wmd-undo-button", s("undo"), "-200px", null), v.undo.execute = function (e) {
                e && e.undo()
            };
            var d = s(/win/.test(g.platform.toLowerCase()) ? "redo" : "redomac");
            if (v.redo = a("wmd-redo-button", d, "-220px", null), v.redo.execute = function (e) {
                    e && e.redo()
                }, o) {
                var f = document.createElement("li"), h = document.createElement("span");
                f.appendChild(h), f.className = "wmd-button wmd-help-button", f.id = "wmd-help-button" + e, f.XShift = "-240px", f.isHelp = !0, f.style.right = "0px", f.title = s("help"), f.onclick = o.handler, c(f, !0), r.appendChild(f), v.help = f
            }
            p(), l(4), v.help = a("wmd-help-button", s("help"), "-300px")
        }

        function p() {
            n && (c(v.undo, n.canUndo()), c(v.redo, n.canRedo()))
        }

        var m = t.input, v = {};
        f();
        var y = "keydown";
        b.isOpera && (y = "keypress"), d.addEvent(m, y, function (e) {
            if ((e.ctrlKey || e.metaKey) && !e.altKey && !e.shiftKey) {
                var t = e.charCode || e.keyCode, n = String.fromCharCode(t).toLowerCase();
                switch (n) {
                    case"b":
                        e.preventDefault(), l(v.bold);
                        break;
                    case"i":
                        e.preventDefault(), l(v.italic);
                        break;
                    case"l":
                        e.preventDefault(), l(v.link);
                        break;
                    case"q":
                        e.preventDefault(), l(v.quote);
                        break;
                    case"k":
                        e.preventDefault(), l(v.code);
                        break;
                    case"g":
                        e.preventDefault(), l(v.image);
                        break;
                    case"o":
                        e.preventDefault(), l(v.olist);
                        break;
                    case"u":
                        e.preventDefault(), l(v.ulist);
                        break;
                    case"h":
                        e.preventDefault(), l(v.heading);
                        break;
                    case"r":
                        e.preventDefault(), l(v.hr);
                        break;
                    case"y":
                        e.preventDefault(), l(v.redo);
                        break;
                    case"z":
                        e.shiftKey ? (e.preventDefault(), l(v.redo)) : (e.preventDefault(), l(v.undo));
                        break;
                    default:
                        return
                }
            }
        }), d.addEvent(m, "keyup", function (e) {
            if (e.shiftKey && !e.ctrlKey && !e.metaKey) {
                var t = e.charCode || e.keyCode;
                if (13 === t) {
                    var n = {};
                    n.textOp = u("doAutoindent"), l(n)
                }
            }
        }), b.isIE && d.addEvent(m, "keydown", function (e) {
            var t = e.keyCode;
            return 27 === t ? !1 : void 0
        }), this.setUndoRedoButtonStates = p
    }

    function c(e, t) {
        this.hooks = e, this.getString = t
    }

    function u(e) {
        return e.replace(/^\s*(.*?)(?:\s+"(.+)")?\s*$/, function (e, t, n) {
            return t = t.replace(/\?.*$/, function (e) {
                return e.replace(/\+/g, " ")
            }), t = decodeURIComponent(t), t = encodeURI(t).replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29"), t = t.replace(/\?.*$/, function (e) {
                return e.replace(/\+/g, "%2b")
            }), n && (n = n.trim ? n.trim() : n.replace(/^\s*/, "").replace(/\s*$/, ""), n = n.replace(/"/g, "quot;").replace(/\(/g, "&#40;").replace(/\)/g, "&#41;").replace(/</g, "&lt;").replace(/>/g, "&gt;")), n ? t + ' "' + n + '"' : t
        })
    }

    var d = {}, f = {}, p = {}, h = window.document, m = window.RegExp, g = window.navigator, v = {lineLength: 72}, b = {
        isIE: /msie/.test(g.userAgent.toLowerCase()),
        isIE_5or6: /msie 6/.test(g.userAgent.toLowerCase()) || /msie 5/.test(g.userAgent.toLowerCase()),
        isOpera: /opera/.test(g.userAgent.toLowerCase())
    }, y = {
        bold: "加粗 <strong> Ctrl+B",
        boldexample: "加粗文字",
        italic: "斜体 <em> Ctrl+I",
        italicexample: "斜体文字",
        link: "链接 <a> Ctrl+L",
        linkdescription: "链接描述",
        linkdialog: '<input type="text" id="editorLinkText" class="form-control text-28" placeholder="请输入链接地址">',
        quote: "引用 <blockquote> Ctrl+Q",
        quoteexample: "引用文字",
        code: "代码 <pre><code> Ctrl+K",
        codeexample: "请输入代码",
        image: "图片 <img> Ctrl+G",
        imagedescription: "图片描述",
        imagedialog: '<ul class="nav nav-tabs" role="tablist"><li class="active"><a href="#localPic" role="tab" data-toggle="tab">本地上传</a></li>    <li><a href="#remotePic" role="tab" data-toggle="tab">远程地址获取</a></li></ul><div class="tab-content">    <div class="tab-pane fade active in pt20 form-horizontal" id="localPic">        <span class="text-muted">图片体积不得大于 4 MB</span>        <br>        <div class="widget-upload form-group">        <input type="file" id="editorUpload" name="image" class="widget-upload__file">        <div class="col-sm-8">        <input type="text" id="fileName" class="form-control col-sm-10 widget-upload__text" placeholder="拖动图片到这里" readonly="">        </div>        <a href="javascript:void(0);" class="btn col-sm-2 btn-default">选择图片</a>        </div>    </div>    <div class="tab-pane fade pt20" id="remotePic">    <input type="url" name="img" id="remotePicUrl" class="form-control text-28" placeholder="请输入图片所在网址">    </div></div>',
        olist: "数字列表 <ol> Ctrl+O",
        ulist: "普通列表 <ul> Ctrl+U",
        litem: "列表项目",
        heading: "标题 <h1>/<h2> Ctrl+H",
        headingexample: "标题文字",
        hr: "分割线 <hr> Ctrl+R",
        undo: "撤销 - Ctrl+Z",
        redo: "重做 - Ctrl+Y",
        redomac: "重做 - Ctrl+Shift+Z",
        zen: "全屏",
        help: "Markdown 语法"
    };
    t.Editor = function (e, n, r) {
        r = r || {}, "function" == typeof r.handler && (r = {helpButton: r}), r.strings = r.strings || {}, r.helpButton && (r.strings.help = r.strings.help || r.helpButton.title);
        var a = function (e) {
            return r.strings[e] || y[e]
        };
        n = n || "";
        var u = this.hooks = new t.HookCollection;
        u.addNoop("onPreviewRefresh"), u.addNoop("postBlockquoteCreation"), u.addFalse("insertImageDialog"), this.getConverter = function () {
            return e
        };
        var d, f = this;
        this.run = function (t) {
            if (!d) {
                d = new i(n, t);
                var p, m, g = new c(u, a), v = new s(e, d, function () {
                    u.onPreviewRefresh()
                });
                /\?noundo/.test(h.location.href) || (p = new o(function () {
                    v.refresh(), m && m.setUndoRedoButtonStates()
                }, d), this.textOperation = function (e) {
                    p.setCommandMode(), e(), f.refreshPreview()
                }), m = new l(n, d, p, v, g, r.helpButton, a), m.setUndoRedoButtonStates();
                var b = f.refreshPreview = function () {
                    v.refresh(!0)
                };
                b()
            }
        }
    }, r.prototype.findTags = function (e, t) {
        var n, r = this;
        e && (n = d.extendRegExp(e, "", "$"), this.before = this.before.replace(n, function (e) {
            return r.startTag = r.startTag + e, ""
        }), n = d.extendRegExp(e, "^", ""), this.selection = this.selection.replace(n, function (e) {
            return r.startTag = r.startTag + e, ""
        })), t && (n = d.extendRegExp(t, "", "$"), this.selection = this.selection.replace(n, function (e) {
            return r.endTag = e + r.endTag, ""
        }), n = d.extendRegExp(t, "^", ""), this.after = this.after.replace(n, function (e) {
            return r.endTag = e + r.endTag, ""
        }))
    }, r.prototype.trimWhitespace = function (e) {
        var t, n, r = this;
        e ? t = n = "" : (t = function (e) {
            return r.before += e, ""
        }, n = function (e) {
            return r.after = e + r.after, ""
        }), this.selection = this.selection.replace(/^(\s*)/, t).replace(/(\s*)$/, n)
    }, r.prototype.skipLines = function (e, t, n) {
        void 0 === e && (e = 1), void 0 === t && (t = 1), e++, t++;
        var r, i;
        if (navigator.userAgent.match(/Chrome/) && "X".match(/()./), this.selection = this.selection.replace(/(^\n*)/, ""), this.startTag = this.startTag + m.$1, this.selection = this.selection.replace(/(\n*$)/, ""), this.endTag = this.endTag + m.$1, this.startTag = this.startTag.replace(/(^\n*)/, ""), this.before = this.before + m.$1, this.endTag = this.endTag.replace(/(\n*$)/, ""), this.after = this.after + m.$1, this.before) {
            for (r = i = ""; e--;)r += "\\n?", i += "\n";
            n && (r = "\\n*"), this.before = this.before.replace(new m(r + "$", ""), i)
        }
        if (this.after) {
            for (r = i = ""; t--;)r += "\\n?", i += "\n";
            n && (r = "\\n*"), this.after = this.after.replace(new m(r, ""), i)
        }
    }, d.isVisible = function (e) {
        return window.getComputedStyle ? "none" !== window.getComputedStyle(e, null).getPropertyValue("display") : e.currentStyle ? "none" !== e.currentStyle.display : void 0
    }, d.addEvent = function (e, t, n) {
        e.attachEvent ? e.attachEvent("on" + t, n) : e.addEventListener(t, n, !1)
    }, d.removeEvent = function (e, t, n) {
        e.detachEvent ? e.detachEvent("on" + t, n) : e.removeEventListener(t, n, !1)
    }, d.fixEolChars = function (e) {
        return e = e.replace(/\r\n/g, "\n"), e = e.replace(/\r/g, "\n")
    }, d.extendRegExp = function (e, t, n) {
        (null === t || void 0 === t) && (t = ""), (null === n || void 0 === n) && (n = "");
        var r, i = e.toString();
        return i = i.replace(/\/([gim]*)$/, function (e, t) {
            return r = t, ""
        }), i = i.replace(/(^\/|\/$)/g, ""), i = t + i + n, new m(i, r)
    }, f.getTop = function (e, t) {
        var n = e.offsetTop;
        if (!t)for (; e = e.offsetParent;)n += e.offsetTop;
        return n
    }, f.getHeight = function (e) {
        return e.offsetHeight || e.scrollHeight
    }, f.getWidth = function (e) {
        return e.offsetWidth || e.scrollWidth
    }, f.getPageSize = function () {
        var e, t, n, r;
        self.innerHeight && self.scrollMaxY ? (e = h.body.scrollWidth, t = self.innerHeight + self.scrollMaxY) : h.body.scrollHeight > h.body.offsetHeight ? (e = h.body.scrollWidth, t = h.body.scrollHeight) : (e = h.body.offsetWidth, t = h.body.offsetHeight), self.innerHeight ? (n = self.innerWidth, r = self.innerHeight) : h.documentElement && h.documentElement.clientHeight ? (n = h.documentElement.clientWidth, r = h.documentElement.clientHeight) : h.body && (n = h.body.clientWidth, r = h.body.clientHeight);
        var i = Math.max(e, n), o = Math.max(t, r);
        return [i, o, n, r]
    }, p.createBackground = function () {
        var e = h.createElement("div"), t = e.style;
        e.className = "modal-backdrop wmd-prompt-background", t.position = "absolute", t.top = "0", t.zIndex = "1000", b.isIE ? t.filter = "alpha(opacity=50)" : t.opacity = "0.5";
        var n = f.getPageSize();
        return t.height = n[1] + "px", b.isIE ? (t.left = h.documentElement.scrollLeft, t.width = h.documentElement.clientWidth) : (t.left = "0", t.width = "100%"), h.body.appendChild(e), e
    }, p.prompt = function (e, t, n, r) {
        var i, o;
        void 0 === n && (n = "");
        var a = function (e) {
            var t = e.charCode || e.keyCode;
            27 === t && s(!0)
        }, s = function (e) {
            d.removeEvent(h.body, "keydown", a);
            var t = o.value;
            return e ? t = null : (t = t.replace(/^http:\/\/(https?|ftp):\/\//, "$1://"), /^(?:https?|ftp):\/\//.test(t) || (t = "http://" + t)), i.parentNode.removeChild(i), r(t), !1
        }, l = function () {
            i = h.createElement("div"), i.className = "modal-content wmd-prompt-dialog", i.style.padding = "10px;", i.style.position = "fixed", i.style.width = "600px", i.style.zIndex = "1001";
            var r = h.createElement("div");
            r.className = "modal-header", r.innerHTML = '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button><h4 class="ml20">' + e + "</h4>", i.appendChild(r);
            var l = h.createElement("div");
            l.innerHTML = t, l.style.padding = "5px", l.style.margin = "20px", i.appendChild(l);
            var c = h.createElement("form"), u = c.style;
            c.onsubmit = function () {
                return s(!1)
            }, u.padding = "0", u.margin = "0 0 20px", u.cssFloat = "left", u.width = "100%", u.textAlign = "center", u.position = "relative", i.appendChild(c), o = h.createElement("input"), o.className = "form-control text-28", o.type = "text", o.value = n, u = o.style, u.display = "block", u.width = "80%", u.marginLeft = u.marginRight = "auto", c.appendChild(o);
            var p = h.createElement("input");
            p.className = "btn btn-primary", p.type = "button", p.onclick = function () {
                return s(!1)
            }, p.value = "确定", u = p.style, u.margin = "10px", u.display = "inline", u.width = "7em";
            var m = h.createElement("input");
            m.className = "btn btn-default", m.type = "button", m.onclick = function () {
                return s(!0)
            }, m.value = "取消", u = m.style, u.margin = "10px", u.display = "inline", u.width = "7em", c.appendChild(p), c.appendChild(m), d.addEvent(h.body, "keydown", a), i.style.top = "50%", i.style.left = "50%", i.style.display = "block", b.isIE_5or6 && (i.style.position = "absolute", i.style.top = h.documentElement.scrollTop + 200 + "px", i.style.left = "50%"), h.body.appendChild(i), i.style.marginTop = -(f.getHeight(i) / 2) + "px", i.style.marginLeft = -(f.getWidth(i) / 2) + "px"
        };
        setTimeout(function () {
            l();
            var e = n.length;
            if (void 0 !== o.selectionStart)o.selectionStart = 0, o.selectionEnd = e; else if (o.createTextRange) {
                var t = o.createTextRange();
                t.collapse(!1), t.moveStart("character", -e), t.moveEnd("character", e), t.select()
            }
            o.focus()
        }, 0)
    };
    var w = c.prototype;
    return w.prefixes = "(?:\\s{4,}|\\s*>|\\s*-\\s+|\\s*\\d+\\.|=|\\+|-|_|\\*|#|\\s*\\[[^\n]]+\\]:)", w.unwrap = function (e) {
        var t = new m("([^\\n])\\n(?!(\\n|" + this.prefixes + "))", "g");
        e.selection = e.selection.replace(t, "$1 $2")
    }, w.wrap = function (e, t) {
        this.unwrap(e);
        var n = new m("(.{1," + t + "})( +|$\\n?)", "gm"), r = this;
        e.selection = e.selection.replace(n, function (e, t) {
            return new m("^" + r.prefixes, "").test(e) ? e : t + "\n"
        }), e.selection = e.selection.replace(/\s+$/, "")
    }, w.doBold = function (e, t) {
        return this.doBorI(e, t, 2, this.getString("boldexample"))
    }, w.doItalic = function (e, t) {
        return this.doBorI(e, t, 1, this.getString("italicexample"))
    }, w.doBorI = function (e, t, n, r) {
        e.trimWhitespace(), e.selection = e.selection.replace(/\n{2,}/g, "\n");
        var i = /(\**$)/.exec(e.before)[0], o = /(^\**)/.exec(e.after)[0], a = Math.min(i.length, o.length);
        if (a >= n && (2 != a || 1 != n))e.before = e.before.replace(m("[*]{" + n + "}$", ""), ""), e.after = e.after.replace(m("^[*]{" + n + "}", ""), ""); else if (!e.selection && o) {
            e.after = e.after.replace(/^([*_]*)/, ""), e.before = e.before.replace(/(\s?)$/, "");
            var s = m.$1;
            e.before = e.before + o + s
        } else {
            e.selection || o || (e.selection = r);
            var l = 1 >= n ? "*" : "**";
            e.before = e.before + l, e.after = l + e.after
        }
    }, w.stripLinkDefs = function (e, t) {
        return e = e.replace(/^[ ]{0,3}\[(\d+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?[ \t]*\n?[ \t]*(?:(\n*)["(](.+?)[")][ \t]*)?(?:\n+|$)/gm, function (e, n, r, i, o) {
            return t[n] = e.replace(/\s*$/, ""), i ? (t[n] = e.replace(/["(](.+?)[")]$/, ""), i + o) : ""
        })
    }, w.addLinkDef = function (e, t) {
        var n = 0, r = {};
        e.before = this.stripLinkDefs(e.before, r), e.selection = this.stripLinkDefs(e.selection, r), e.after = this.stripLinkDefs(e.after, r);
        var i = "", o = /(\[)((?:\[[^\]]*\]|[^\[\]])*)(\][ ]?(?:\n[ ]*)?\[)(\d+)(\])/g, a = function (e) {
            n++, e = e.replace(/^[ ]{0,3}\[(\d+)\]:/, "  [" + n + "]:"), i += "\n" + e
        }, s = function (e, t, i, l, c, u) {
            return i = i.replace(o, s), r[c] ? (a(r[c]), t + i + l + n + u) : e
        };
        e.before = e.before.replace(o, s), t ? a(t) : e.selection = e.selection.replace(o, s);
        var l = n;
        return e.after = e.after.replace(o, s), e.after && (e.after = e.after.replace(/\n*$/, "")), e.after || (e.selection = e.selection.replace(/\n*$/, "")), e.after += "\n\n" + i, l
    }, w.doLinkOrImage = function (t, r, i) {
        t.trimWhitespace(), t.findTags(/\s*!?\[/, /\][ ]?(?:\n[ ]*)?(\[.*?\])?/);
        if (!(t.endTag.length > 1 && t.startTag.length > 0)) {
            if (t.selection = t.startTag + t.selection + t.endTag, t.startTag = t.endTag = "", /\n\n/.test(t.selection))return void this.addLinkDef(t, null);
            var o = this, a = function (e, a) {
                if (n("hide"), null !== e) {
                    t.selection = (" " + t.selection).replace(/([^\\](?:\\\\)*)(?=[[\]])/g, "$1\\").substr(1);
                    var s = " [999]: " + u(e), l = o.addLinkDef(t, s);
                    t.startTag = i ? "![" : "[", t.endTag = "][" + l + "]", t.selection || (t.selection = i ? a || o.getString("imagedescription") : o.getString("linkdescription"))
                }
                r()
            };
            if (i) {
                if (!this.hooks.insertImageDialog(a)) {
                    var s, l, c = this.getString("imagedialog");
                    n({
                        title: "插入图片", content: c, closeText: "取消", doneText: "插入", hidden: function () {
                            e(".wmd-input").focus()
                        }, show: function () {
                            e("#editorUpload").fileUpload({
                                url: "/img/upload/image",
                                type: "POST",
                                dataType: "json",
                                beforeSend: function () {
                                    var t = e("#editorUpload").val();
                                    -1 !== t.indexOf("\\fakepath") && (t = t.split("\\fakepath\\")[1]), t || t.fuckYou(), e("#fileName").addClass("loading"), e(".done-btn").attr("disabled", "disabled")
                                },
                                complete: function () {
                                    e("#fileName").removeClass("loading"), e(".done-btn").attr("disabled", !1)
                                },
                                success: function (e) {
                                    var t = e[0], r = e[1];
                                    t ? n("对不起，上传图片失败，请联系管理员或稍后再试。") : (l = r, a(l, s))
                                }
                            })
                        }, doneFn: function (t) {
                            t.preventDefault(), e("#remotePic").hasClass("active") && e("#remotePicUrl").val() && (e("#remotePicUrl").addClass("loading"), e(".done-btn").attr("disabled", "disabled"), s = e("#remotePicUrl").val().match(/\/([^\/]+)$/)[1], e.post("/img/fetch/image", {src: e("#remotePicUrl").val()}, function (t) {
                                e(".done-btn").attr("disabled", !1), e("#remotePicUrl").removeClass("loading");
                                var r = t.match(/\[(\d),/)[1], i = t.match(/\[\d,"(\S*)"\]/)[1];
                                i = i.replace(/\\/g, ""), "0" !== r ? n(i) : (l = i, a(l, s))
                            }, "text"))
                        }
                    })
                }
            } else {
                var c = this.getString("linkdialog");
                n({
                    title: "插入链接", content: c, closeText: "取消", doneText: "插入", doneFn: function () {
                        a(e("#editorLinkText").val())
                    }, show: function () {
                        setTimeout(function () {
                            e("#editorLinkText").focus()
                        }, 100), e("#editorLinkText").keydown(function (t) {
                            13 === t.which && (t.preventDefault(), a(e(this).val()))
                        })
                    }, hidden: function () {
                        e(".wmd-input").focus()
                    }
                })
            }
            return !0
        }
        t.startTag = t.startTag.replace(/!?\[/, ""), t.endTag = "", this.addLinkDef(t, null)
    }, w.doAutoindent = function (e) {
        var t = this, n = !1;
        e.before = e.before.replace(/(\n|^)[ ]{0,3}([*+-]|\d+[.])[ \t]*\n$/, "\n\n"), e.before = e.before.replace(/(\n|^)[ ]{0,3}>[ \t]*\n$/, "\n\n"), e.before = e.before.replace(/(\n|^)[ \t]+\n$/, "\n\n"), e.selection || /^[ \t]*(?:\n|$)/.test(e.after) || (e.after = e.after.replace(/^[^\n]*/, function (t) {
            return e.selection = t, ""
        }), n = !0), /(\n|^)[ ]{0,3}([*+-]|\d+[.])[ \t]+.*\n$/.test(e.before) && t.doList && t.doList(e), /(\n|^)[ ]{0,3}>[ \t]+.*\n$/.test(e.before) && t.doBlockquote && t.doBlockquote(e), /(\n|^)(\t|[ ]{4,}).*\n$/.test(e.before) && t.doCode && t.doCode(e), n && (e.after = e.selection + e.after, e.selection = "")
    }, w.doBlockquote = function (e) {
        e.selection = e.selection.replace(/^(\n*)([^\r]+?)(\n*)$/, function (t, n, r, i) {
            return e.before += n, e.after = i + e.after, r
        }), e.before = e.before.replace(/(>[ \t]*)$/, function (t, n) {
            return e.selection = n + e.selection, ""
        }), e.selection = e.selection.replace(/^(\s|>)+$/, ""), e.selection = e.selection || this.getString("quoteexample");
        var t, n = "", r = "";
        if (e.before) {
            for (var i = e.before.replace(/\n$/, "").split("\n"), o = !1, a = 0; a < i.length; a++) {
                var s = !1;
                t = i[a], o = o && t.length > 0, /^>/.test(t) ? (s = !0, !o && t.length > 1 && (o = !0)) : s = /^[ \t]*$/.test(t) ? !0 : o, s ? n += t + "\n" : (r += n + t, n = "\n")
            }
            /(^|\n)>/.test(n) || (r += n, n = "")
        }
        e.startTag = n, e.before = r, e.after && (e.after = e.after.replace(/^\n?/, "\n")), e.after = e.after.replace(/^(((\n|^)(\n[ \t]*)*>(.+\n)*.*)+(\n[ \t]*)*)/, function (t) {
            return e.endTag = t, ""
        });
        var l = function (t) {
            var n = t ? "> " : "";
            e.startTag && (e.startTag = e.startTag.replace(/\n((>|\s)*)\n$/, function (e, t) {
                return "\n" + t.replace(/^[ ]{0,3}>?[ \t]*$/gm, n) + "\n"
            })), e.endTag && (e.endTag = e.endTag.replace(/^\n((>|\s)*)\n/, function (e, t) {
                return "\n" + t.replace(/^[ ]{0,3}>?[ \t]*$/gm, n) + "\n"
            }))
        };
        /^(?![ ]{0,3}>)/m.test(e.selection) ? (this.wrap(e, v.lineLength - 2), e.selection = e.selection.replace(/^/gm, "> "), l(!0), e.skipLines()) : (e.selection = e.selection.replace(/^[ ]{0,3}> ?/gm, ""), this.unwrap(e), l(!1), !/^(\n|^)[ ]{0,3}>/.test(e.selection) && e.startTag && (e.startTag = e.startTag.replace(/\n{0,2}$/, "\n\n")), !/(\n|^)[ ]{0,3}>.*$/.test(e.selection) && e.endTag && (e.endTag = e.endTag.replace(/^\n{0,2}/, "\n\n"))), e.selection = this.hooks.postBlockquoteCreation(e.selection), /\n/.test(e.selection) || (e.selection = e.selection.replace(/^(> *)/, function (t, n) {
            return e.startTag += n, ""
        }))
    }, w.doCode = function (e) {
        var t = /\S[ ]*$/.test(e.before), n = /^[ ]*\S/.test(e.after);
        if (!n && !t || /\n/.test(e.selection)) {
            e.before = e.before.replace(/[ ]{4}$/, function (t) {
                return e.selection = t + e.selection, ""
            });
            var r = 1, i = 1;
            /(\n|^)(\t|[ ]{4,}).*\n$/.test(e.before) && (r = 0), /^\n(\t|[ ]{4,})/.test(e.after) && (i = 0), e.skipLines(r, i), e.selection ? /^[ ]{0,3}\S/m.test(e.selection) ? /\n/.test(e.selection) ? e.selection = e.selection.replace(/^/gm, "    ") : e.before += "    " : e.selection = e.selection.replace(/^(?:[ ]{4}|[ ]{0,3}\t)/gm, "") : (e.startTag = "```\n", e.selection = this.getString("codeexample"), e.endTag = "\n```")
        } else e.trimWhitespace(), e.findTags(/`/, /`/), e.startTag || e.endTag ? e.endTag && !e.startTag ? (e.before += e.endTag, e.endTag = "") : e.startTag = e.endTag = "" : (e.startTag = e.endTag = "`", e.selection || (e.selection = this.getString("codeexample")))
    }, w.doList = function (e, t, n) {
        var r = /(\n|^)(([ ]{0,3}([*+-]|\d+[.])[ \t]+.*)(\n.+|\n{2,}([*+-].*|\d+[.])[ \t]+.*|\n{2,}[ \t]+\S.*)*)\n*$/, i = /^\n*(([ ]{0,3}([*+-]|\d+[.])[ \t]+.*)(\n.+|\n{2,}([*+-].*|\d+[.])[ \t]+.*|\n{2,}[ \t]+\S.*)*)\n*/, o = "-", a = 1, s = function () {
            var e;
            return n ? (e = " " + a + ". ", a++) : e = " " + o + " ", e
        }, l = function (e) {
            return void 0 === n && (n = /^\s*\d/.test(e)), e = e.replace(/^[ ]{0,3}([*+-]|\d+[.])\s/gm, function () {
                return s()
            })
        };
        if (e.findTags(/(\n|^)*[ ]{0,3}([*+-]|\d+[.])\s+/, null), !e.before || /\n$/.test(e.before) || /^\n/.test(e.startTag) || (e.before += e.startTag, e.startTag = ""), e.startTag) {
            var c = /\d+[.]/.test(e.startTag);
            if (e.startTag = "", e.selection = e.selection.replace(/\n[ ]{4}/g, "\n"), this.unwrap(e), e.skipLines(), c && (e.after = e.after.replace(i, l)), n == c)return
        }
        var u = 1;
        e.before = e.before.replace(r, function (e) {
            return /^\s*([*+-])/.test(e) && (o = m.$1), u = /[^\n]\n\n[^\n]/.test(e) ? 1 : 0, l(e)
        }), e.selection || (e.selection = this.getString("litem"));
        var d = s(), f = 1;
        e.after = e.after.replace(i, function (e) {
            return f = /[^\n]\n\n[^\n]/.test(e) ? 1 : 0, l(e)
        }), e.trimWhitespace(!0), e.skipLines(u, f, !0), e.startTag = d;
        var p = d.replace(/./g, " ");
        this.wrap(e, v.lineLength - p.length), e.selection = e.selection.replace(/\n/g, "\n" + p)
    }, w.doHeading = function (e) {
        if (e.selection = e.selection.replace(/\s+/g, " "), e.selection = e.selection.replace(/(^\s+|\s+$)/g, ""), !e.selection)return e.startTag = "## ", e.selection = this.getString("headingexample"), void(e.endTag = " ##");
        var t = 0;
        e.findTags(/#+[ ]*/, /[ ]*#+/), /#+/.test(e.startTag) && (t = m.lastMatch.length), e.startTag = e.endTag = "", e.findTags(null, /\s?(-+|=+)/), /=+/.test(e.endTag) && (t = 1), /-+/.test(e.endTag) && (t = 2), e.startTag = e.endTag = "", e.skipLines(1, 1);
        var n = 0 == t ? 2 : t - 1;
        if (n > 0) {
            var r = n >= 2 ? "-" : "=", i = e.selection.length;
            for (i > v.lineLength && (i = v.lineLength), e.endTag = "\n"; i--;)e.endTag += r
        }
    }, w.doHorizontalRule = function (e) {
        e.startTag = "----------\n", e.selection = "", e.skipLines(2, 1, !0)
    }, t
}), define("tabIndent", [], function () {
    "use strict";
    var e = {
        version: "0.1.8", config: {tab: "	"}, events: {
            keydown: function (t) {
                var n = e.config.tab, r = n.length;
                if (9 === t.keyCode) {
                    t.preventDefault();
                    var i = this.selectionStart, o = this.selectionEnd;
                    if (t.shiftKey === !1)if (e.isMultiLine(this)) {
                        for (var a = e.findStartIndices(this), s = a.length, l = void 0, c = void 0, u = 0; s--;) {
                            var d = a[s];
                            a[s + 1] && i != a[s + 1] && (d = a[s + 1]), d >= i && a[s] < o && (this.value = this.value.slice(0, a[s]) + n + this.value.slice(a[s]), l = a[s], c || (c = a[s + 1] ? a[s + 1] - 1 : "end"), u++)
                        }
                        this.selectionStart = l, this.selectionEnd = "end" !== c ? c + r * u : this.value.length
                    } else this.value = this.value.slice(0, i) + n + this.value.slice(i), this.selectionStart = i + r, this.selectionEnd = o + r; else if (e.isMultiLine(this)) {
                        for (var a = e.findStartIndices(this), s = a.length, l = void 0, c = void 0, u = 0; s--;) {
                            var d = a[s];
                            a[s + 1] && i != a[s + 1] && (d = a[s + 1]), d >= i && a[s] < o && (this.value.substr(a[s], r) == n && (this.value = this.value.slice(0, a[s]) + this.value.slice(a[s] + r), u++), l = a[s], c || (c = a[s + 1] ? a[s + 1] - 1 : "end"))
                        }
                        this.selectionStart = l, this.selectionEnd = "end" !== c ? c - u * r : this.value.length
                    } else this.value.substr(i - r, r) == n ? (this.value = this.value.substr(0, i - r) + this.value.substr(i), this.selectionStart = i - r, this.selectionEnd = o - r) : "\n" == this.value.substr(i - 1, 1) && this.value.substr(i, r) == n && (this.value = this.value.substring(0, i) + this.value.substr(i + r), this.selectionStart = i, this.selectionEnd = o - r)
                } else if (27 === t.keyCode)e.events.disable(t); else if (13 === t.keyCode && t.shiftKey === !1) {
                    for (var f = e, p = this.selectionStart, a = f.findStartIndices(this), h = a.length, m = 0, g = 0, v = new RegExp("^" + n.replace("	", "\\t").replace(/ /g, "\\s") + "+", "g"), b = "", y = null, w = 0; h > w; w++) {
                        if (a[w + 1] && p >= a[w] && p < a[w + 1]) {
                            m = a[w], g = a[w + 1] - 1;
                            break
                        }
                        m = a[h - 1], g = this.value.length
                    }
                    if (b = this.value.slice(m, g), y = b.match(v), null !== y) {
                        t.preventDefault();
                        var _ = y[0], k = _.length, x = p - m;
                        k > x && (k = x, _ = _.slice(0, x)), this.value = this.value.slice(0, p) + "\n" + _ + this.value.slice(p), this.selectionStart = p + k + 1, this.selectionEnd = this.selectionStart
                    }
                }
            }, disable: function (t) {
                e.remove(t.target)
            }, focus: function () {
                var t = e, n = this, r = setTimeout(function () {
                    var e = (n.getAttribute("class") || "").split(" "), r = e.indexOf("tabIndent");
                    n.addEventListener("keydown", t.events.keydown), n.style.backgroundPosition = "top right", n.style.backgroundRepeat = "no-repeat", -1 !== r && e.splice(r, 1), e.push("tabIndent-rendered"), n.setAttribute("class", e.join(" ")), n.removeEventListener("focus", t.events.keydown)
                }, 500);
                n.addEventListener("blur", function i() {
                    clearTimeout(r), n.removeEventListener("blur", i)
                })
            }
        }, render: function (e) {
            var t = this;
            "TEXTAREA" === e.nodeName && (e.addEventListener("focus", t.events.focus), e.addEventListener("blur", function (e) {
                t.events.disable(e)
            }))
        }, renderAll: function () {
            for (var e = document.getElementsByTagName("textarea"), t = e.length, n = -1, r = [], i = void 0; t--;)r = (e[t].getAttribute("class") || "").split(" "), n = r.indexOf("tabIndent"), -1 !== n && (i = e[t], this.render(i)), n = -1, r = [], i = void 0
        }, remove: function (e) {
            if ("TEXTAREA" === e.nodeName) {
                var t = (e.getAttribute("class") || "").split(" "), n = t.indexOf("tabIndent-rendered");
                -1 !== n && (e.removeEventListener("keydown", this.events.keydown), e.style.backgroundImage = "", t.splice(n, 1), t.push("tabIndent"), e.setAttribute("class", t.length > 1 ? t.join(" ") : t[0]))
            }
        }, removeAll: function () {
            for (var e = document.getElementsByTagName("textarea"), t = e.length, n = -1, r = [], i = void 0; t--;)r = (e[t].getAttribute("class") || "").split(" "), n = r.indexOf("tabIndent-rendered"), -1 !== n && (i = e[t], this.remove(i)), n = -1, r = [], i = void 0
        }, isMultiLine: function (e) {
            var t = e.value.slice(e.selectionStart, e.selectionEnd), n = new RegExp(/\n/);
            return n.test(t) ? !0 : !1
        }, findStartIndices: function (e) {
            for (var t = e.value, n = [], r = 0; t.match(/\n/) && t.match(/\n/).length > 0;) {
                r = n.length > 0 ? n[n.length - 1] : 0;
                var i = t.search("\n");
                n.push(i + r + 1), t = t.substring(i + 1)
            }
            return n.unshift(0), n
        }
    };
    return e
}), define("diff_match_patch", [], function () {
    function e() {
        this.Diff_Timeout = 1, this.Diff_EditCost = 4, this.Match_Threshold = .5, this.Match_Distance = 1e3, this.Patch_DeleteThreshold = .5, this.Patch_Margin = 4, this.Match_MaxBits = 32
    }

    var t = -1, n = 1, r = 0;
    return e.Diff, e.prototype.diff_main = function (e, t, n, i) {
        "undefined" == typeof i && (i = this.Diff_Timeout <= 0 ? Number.MAX_VALUE : (new Date).getTime() + 1e3 * this.Diff_Timeout);
        var o = i;
        if (null == e || null == t)throw new Error("Null input. (diff_main)");
        if (e == t)return e ? [[r, e]] : [];
        "undefined" == typeof n && (n = !0);
        var a = n, s = this.diff_commonPrefix(e, t), l = e.substring(0, s);
        e = e.substring(s), t = t.substring(s), s = this.diff_commonSuffix(e, t);
        var c = e.substring(e.length - s);
        e = e.substring(0, e.length - s), t = t.substring(0, t.length - s);
        var u = this.diff_compute_(e, t, a, o);
        return l && u.unshift([r, l]), c && u.push([r, c]), this.diff_cleanupMerge(u), u
    }, e.prototype.diff_compute_ = function (e, i, o, a) {
        var s;
        if (!e)return [[n, i]];
        if (!i)return [[t, e]];
        var l = e.length > i.length ? e : i, c = e.length > i.length ? i : e, u = l.indexOf(c);
        if (-1 != u)return s = [[n, l.substring(0, u)], [r, c], [n, l.substring(u + c.length)]], e.length > i.length && (s[0][0] = s[2][0] = t), s;
        if (1 == c.length)return [[t, e], [n, i]];
        var d = this.diff_halfMatch_(e, i);
        if (d) {
            var f = d[0], p = d[1], h = d[2], m = d[3], g = d[4], v = this.diff_main(f, h, o, a), b = this.diff_main(p, m, o, a);
            return v.concat([[r, g]], b)
        }
        return o && e.length > 100 && i.length > 100 ? this.diff_lineMode_(e, i, a) : this.diff_bisect_(e, i, a)
    }, e.prototype.diff_lineMode_ = function (e, i, o) {
        var a = this.diff_linesToChars_(e, i);
        e = a.chars1, i = a.chars2;
        var s = a.lineArray, l = this.diff_main(e, i, !1, o);
        this.diff_charsToLines_(l, s), this.diff_cleanupSemantic(l), l.push([r, ""]);
        for (var c = 0, u = 0, d = 0, f = "", p = ""; c < l.length;) {
            switch (l[c][0]) {
                case n:
                    d++, p += l[c][1];
                    break;
                case t:
                    u++, f += l[c][1];
                    break;
                case r:
                    if (u >= 1 && d >= 1) {
                        l.splice(c - u - d, u + d), c = c - u - d;
                        for (var a = this.diff_main(f, p, !1, o), h = a.length - 1; h >= 0; h--)l.splice(c, 0, a[h]);
                        c += a.length
                    }
                    d = 0, u = 0, f = "", p = ""
            }
            c++
        }
        return l.pop(), l
    }, e.prototype.diff_bisect_ = function (e, r, i) {
        for (var o = e.length, a = r.length, s = Math.ceil((o + a) / 2), l = s, c = 2 * s, u = new Array(c), d = new Array(c), f = 0; c > f; f++)u[f] = -1, d[f] = -1;
        u[l + 1] = 0, d[l + 1] = 0;
        for (var p = o - a, h = p % 2 != 0, m = 0, g = 0, v = 0, b = 0, y = 0; s > y && !((new Date).getTime() > i); y++) {
            for (var w = -y + m; y - g >= w; w += 2) {
                var _, k = l + w;
                _ = w == -y || w != y && u[k - 1] < u[k + 1] ? u[k + 1] : u[k - 1] + 1;
                for (var x = _ - w; o > _ && a > x && e.charAt(_) == r.charAt(x);)_++, x++;
                if (u[k] = _, _ > o)g += 2; else if (x > a)m += 2; else if (h) {
                    var C = l + p - w;
                    if (C >= 0 && c > C && -1 != d[C]) {
                        var S = o - d[C];
                        if (_ >= S)return this.diff_bisectSplit_(e, r, _, x, i)
                    }
                }
            }
            for (var T = -y + v; y - b >= T; T += 2) {
                var S, C = l + T;
                S = T == -y || T != y && d[C - 1] < d[C + 1] ? d[C + 1] : d[C - 1] + 1;
                for (var $ = S - T; o > S && a > $ && e.charAt(o - S - 1) == r.charAt(a - $ - 1);)S++, $++;
                if (d[C] = S, S > o)b += 2; else if ($ > a)v += 2; else if (!h) {
                    var k = l + p - T;
                    if (k >= 0 && c > k && -1 != u[k]) {
                        var _ = u[k], x = l + _ - k;
                        if (S = o - S, _ >= S)return this.diff_bisectSplit_(e, r, _, x, i)
                    }
                }
            }
        }
        return [[t, e], [n, r]]
    }, e.prototype.diff_bisectSplit_ = function (e, t, n, r, i) {
        var o = e.substring(0, n), a = t.substring(0, r), s = e.substring(n), l = t.substring(r), c = this.diff_main(o, a, !1, i), u = this.diff_main(s, l, !1, i);
        return c.concat(u)
    }, e.prototype.diff_linesToChars_ = function (e, t) {
        function n(e) {
            for (var t = "", n = 0, o = -1, a = r.length; o < e.length - 1;) {
                o = e.indexOf("\n", n), -1 == o && (o = e.length - 1);
                var s = e.substring(n, o + 1);
                n = o + 1, (i.hasOwnProperty ? i.hasOwnProperty(s) : void 0 !== i[s]) ? t += String.fromCharCode(i[s]) : (t += String.fromCharCode(a), i[s] = a, r[a++] = s)
            }
            return t
        }

        var r = [], i = {};
        r[0] = "";
        var o = n(e), a = n(t);
        return {chars1: o, chars2: a, lineArray: r}
    }, e.prototype.diff_charsToLines_ = function (e, t) {
        for (var n = 0; n < e.length; n++) {
            for (var r = e[n][1], i = [], o = 0; o < r.length; o++)i[o] = t[r.charCodeAt(o)];
            e[n][1] = i.join("")
        }
    }, e.prototype.diff_commonPrefix = function (e, t) {
        if (!e || !t || e.charAt(0) != t.charAt(0))return 0;
        for (var n = 0, r = Math.min(e.length, t.length), i = r, o = 0; i > n;)e.substring(o, i) == t.substring(o, i) ? (n = i, o = n) : r = i, i = Math.floor((r - n) / 2 + n);
        return i
    }, e.prototype.diff_commonSuffix = function (e, t) {
        if (!e || !t || e.charAt(e.length - 1) != t.charAt(t.length - 1))return 0;
        for (var n = 0, r = Math.min(e.length, t.length), i = r, o = 0; i > n;)e.substring(e.length - i, e.length - o) == t.substring(t.length - i, t.length - o) ? (n = i, o = n) : r = i, i = Math.floor((r - n) / 2 + n);
        return i
    }, e.prototype.diff_commonOverlap_ = function (e, t) {
        var n = e.length, r = t.length;
        if (0 == n || 0 == r)return 0;
        n > r ? e = e.substring(n - r) : r > n && (t = t.substring(0, n));
        var i = Math.min(n, r);
        if (e == t)return i;
        for (var o = 0, a = 1; ;) {
            var s = e.substring(i - a), l = t.indexOf(s);
            if (-1 == l)return o;
            a += l, (0 == l || e.substring(i - a) == t.substring(0, a)) && (o = a, a++)
        }
    }, e.prototype.diff_halfMatch_ = function (e, t) {
        function n(e, t, n) {
            for (var r, i, o, s, l = e.substring(n, n + Math.floor(e.length / 4)), c = -1, u = ""; -1 != (c = t.indexOf(l, c + 1));) {
                var d = a.diff_commonPrefix(e.substring(n), t.substring(c)), f = a.diff_commonSuffix(e.substring(0, n), t.substring(0, c));
                u.length < f + d && (u = t.substring(c - f, c) + t.substring(c, c + d), r = e.substring(0, n - f), i = e.substring(n + d), o = t.substring(0, c - f), s = t.substring(c + d))
            }
            return 2 * u.length >= e.length ? [r, i, o, s, u] : null
        }

        if (this.Diff_Timeout <= 0)return null;
        var r = e.length > t.length ? e : t, i = e.length > t.length ? t : e;
        if (r.length < 4 || 2 * i.length < r.length)return null;
        var o, a = this, s = n(r, i, Math.ceil(r.length / 4)), l = n(r, i, Math.ceil(r.length / 2));
        if (!s && !l)return null;
        o = l ? s && s[4].length > l[4].length ? s : l : s;
        var c, u, d, f;
        e.length > t.length ? (c = o[0], u = o[1], d = o[2], f = o[3]) : (d = o[0], f = o[1], c = o[2], u = o[3]);
        var p = o[4];
        return [c, u, d, f, p]
    }, e.prototype.diff_cleanupSemantic = function (e) {
        for (var i = !1, o = [], a = 0, s = null, l = 0, c = 0, u = 0, d = 0, f = 0; l < e.length;)e[l][0] == r ? (o[a++] = l, c = d, u = f, d = 0, f = 0, s = e[l][1]) : (e[l][0] == n ? d += e[l][1].length : f += e[l][1].length, s && s.length <= Math.max(c, u) && s.length <= Math.max(d, f) && (e.splice(o[a - 1], 0, [t, s]), e[o[a - 1] + 1][0] = n, a--, a--, l = a > 0 ? o[a - 1] : -1, c = 0, u = 0, d = 0, f = 0, s = null, i = !0)), l++;
        for (i && this.diff_cleanupMerge(e), this.diff_cleanupSemanticLossless(e), l = 1; l < e.length;) {
            if (e[l - 1][0] == t && e[l][0] == n) {
                var p = e[l - 1][1], h = e[l][1], m = this.diff_commonOverlap_(p, h), g = this.diff_commonOverlap_(h, p);
                m >= g ? (m >= p.length / 2 || m >= h.length / 2) && (e.splice(l, 0, [r, h.substring(0, m)]), e[l - 1][1] = p.substring(0, p.length - m), e[l + 1][1] = h.substring(m), l++) : (g >= p.length / 2 || g >= h.length / 2) && (e.splice(l, 0, [r, p.substring(0, g)]), e[l - 1][0] = n, e[l - 1][1] = h.substring(0, h.length - g), e[l + 1][0] = t, e[l + 1][1] = p.substring(g), l++), l++
            }
            l++
        }
    }, e.prototype.diff_cleanupSemanticLossless = function (t) {
        function n(t, n) {
            if (!t || !n)return 6;
            var r = t.charAt(t.length - 1), i = n.charAt(0), o = r.match(e.nonAlphaNumericRegex_), a = i.match(e.nonAlphaNumericRegex_), s = o && r.match(e.whitespaceRegex_), l = a && i.match(e.whitespaceRegex_), c = s && r.match(e.linebreakRegex_), u = l && i.match(e.linebreakRegex_), d = c && t.match(e.blanklineEndRegex_), f = u && n.match(e.blanklineStartRegex_);
            return d || f ? 5 : c || u ? 4 : o && !s && l ? 3 : s || l ? 2 : o || a ? 1 : 0
        }

        for (var i = 1; i < t.length - 1;) {
            if (t[i - 1][0] == r && t[i + 1][0] == r) {
                var o = t[i - 1][1], a = t[i][1], s = t[i + 1][1], l = this.diff_commonSuffix(o, a);
                if (l) {
                    var c = a.substring(a.length - l);
                    o = o.substring(0, o.length - l), a = c + a.substring(0, a.length - l), s = c + s
                }
                for (var u = o, d = a, f = s, p = n(o, a) + n(a, s); a.charAt(0) === s.charAt(0);) {
                    o += a.charAt(0), a = a.substring(1) + s.charAt(0), s = s.substring(1);
                    var h = n(o, a) + n(a, s);
                    h >= p && (p = h, u = o, d = a, f = s)
                }
                t[i - 1][1] != u && (u ? t[i - 1][1] = u : (t.splice(i - 1, 1), i--), t[i][1] = d, f ? t[i + 1][1] = f : (t.splice(i + 1, 1), i--))
            }
            i++
        }
    }, e.nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/, e.whitespaceRegex_ = /\s/, e.linebreakRegex_ = /[\r\n]/, e.blanklineEndRegex_ = /\n\r?\n$/, e.blanklineStartRegex_ = /^\r?\n\r?\n/, e.prototype.diff_cleanupEfficiency = function (e) {
        for (var i = !1, o = [], a = 0, s = null, l = 0, c = !1, u = !1, d = !1, f = !1; l < e.length;)e[l][0] == r ? (e[l][1].length < this.Diff_EditCost && (d || f) ? (o[a++] = l, c = d, u = f, s = e[l][1]) : (a = 0, s = null), d = f = !1) : (e[l][0] == t ? f = !0 : d = !0, s && (c && u && d && f || s.length < this.Diff_EditCost / 2 && c + u + d + f == 3) && (e.splice(o[a - 1], 0, [t, s]), e[o[a - 1] + 1][0] = n, a--, s = null, c && u ? (d = f = !0, a = 0) : (a--, l = a > 0 ? o[a - 1] : -1, d = f = !1), i = !0)), l++;
        i && this.diff_cleanupMerge(e)
    }, e.prototype.diff_cleanupMerge = function (e) {
        e.push([r, ""]);
        for (var i, o = 0, a = 0, s = 0, l = "", c = ""; o < e.length;)switch (e[o][0]) {
            case n:
                s++, c += e[o][1], o++;
                break;
            case t:
                a++, l += e[o][1], o++;
                break;
            case r:
                a + s > 1 ? (0 !== a && 0 !== s && (i = this.diff_commonPrefix(c, l), 0 !== i && (o - a - s > 0 && e[o - a - s - 1][0] == r ? e[o - a - s - 1][1] += c.substring(0, i) : (e.splice(0, 0, [r, c.substring(0, i)]), o++), c = c.substring(i), l = l.substring(i)), i = this.diff_commonSuffix(c, l), 0 !== i && (e[o][1] = c.substring(c.length - i) + e[o][1], c = c.substring(0, c.length - i), l = l.substring(0, l.length - i))), 0 === a ? e.splice(o - s, a + s, [n, c]) : 0 === s ? e.splice(o - a, a + s, [t, l]) : e.splice(o - a - s, a + s, [t, l], [n, c]), o = o - a - s + (a ? 1 : 0) + (s ? 1 : 0) + 1) : 0 !== o && e[o - 1][0] == r ? (e[o - 1][1] += e[o][1], e.splice(o, 1)) : o++, s = 0, a = 0, l = "", c = ""
        }
        "" === e[e.length - 1][1] && e.pop();
        var u = !1;
        for (o = 1; o < e.length - 1;)e[o - 1][0] == r && e[o + 1][0] == r && (e[o][1].substring(e[o][1].length - e[o - 1][1].length) == e[o - 1][1] ? (e[o][1] = e[o - 1][1] + e[o][1].substring(0, e[o][1].length - e[o - 1][1].length), e[o + 1][1] = e[o - 1][1] + e[o + 1][1], e.splice(o - 1, 1), u = !0) : e[o][1].substring(0, e[o + 1][1].length) == e[o + 1][1] && (e[o - 1][1] += e[o + 1][1], e[o][1] = e[o][1].substring(e[o + 1][1].length) + e[o + 1][1], e.splice(o + 1, 1), u = !0)), o++;
        u && this.diff_cleanupMerge(e)
    }, e.prototype.diff_xIndex = function (e, r) {
        var i, o = 0, a = 0, s = 0, l = 0;
        for (i = 0; i < e.length && (e[i][0] !== n && (o += e[i][1].length), e[i][0] !== t && (a += e[i][1].length), !(o > r)); i++)s = o, l = a;
        return e.length != i && e[i][0] === t ? l : l + (r - s)
    }, e.prototype.diff_prettyHtml = function (e) {
        for (var i = [], o = /&/g, a = /</g, s = />/g, l = /\n/g, c = 0; c < e.length; c++) {
            var u = e[c][0], d = e[c][1], f = d.replace(o, "&amp;").replace(a, "&lt;").replace(s, "&gt;").replace(l, "&para;<br>");
            switch (u) {
                case n:
                    i[c] = '<ins style="background:#e6ffe6;">' + f + "</ins>";
                    break;
                case t:
                    i[c] = '<del style="background:#ffe6e6;">' + f + "</del>";
                    break;
                case r:
                    i[c] = "<span>" + f + "</span>"
            }
        }
        return i.join("")
    }, e.prototype.diff_text1 = function (e) {
        for (var t = [], r = 0; r < e.length; r++)e[r][0] !== n && (t[r] = e[r][1]);
        return t.join("")
    }, e.prototype.diff_text2 = function (e) {
        for (var n = [], r = 0; r < e.length; r++)e[r][0] !== t && (n[r] = e[r][1]);
        return n.join("")
    }, e.prototype.diff_levenshtein = function (e) {
        for (var i = 0, o = 0, a = 0, s = 0; s < e.length; s++) {
            var l = e[s][0], c = e[s][1];
            switch (l) {
                case n:
                    o += c.length;
                    break;
                case t:
                    a += c.length;
                    break;
                case r:
                    i += Math.max(o, a), o = 0, a = 0
            }
        }
        return i += Math.max(o, a)
    }, e.prototype.diff_toDelta = function (e) {
        for (var i = [], o = 0; o < e.length; o++)switch (e[o][0]) {
            case n:
                i[o] = "+" + encodeURI(e[o][1]);
                break;
            case t:
                i[o] = "-" + e[o][1].length;
                break;
            case r:
                i[o] = "=" + e[o][1].length
        }
        return i.join("	").replace(/%20/g, " ")
    }, e.prototype.diff_fromDelta = function (e, i) {
        for (var o = [], a = 0, s = 0, l = i.split(/\t/g), c = 0; c < l.length; c++) {
            var u = l[c].substring(1);
            switch (l[c].charAt(0)) {
                case"+":
                    try {
                        o[a++] = [n, decodeURI(u)]
                    } catch (d) {
                        throw new Error("Illegal escape in diff_fromDelta: " + u)
                    }
                    break;
                case"-":
                case"=":
                    var f = parseInt(u, 10);
                    if (isNaN(f) || 0 > f)throw new Error("Invalid number in diff_fromDelta: " + u);
                    var p = e.substring(s, s += f);
                    o[a++] = "=" == l[c].charAt(0) ? [r, p] : [t, p];
                    break;
                default:
                    if (l[c])throw new Error("Invalid diff operation in diff_fromDelta: " + l[c])
            }
        }
        if (s != e.length)throw new Error("Delta length (" + s + ") does not equal source text length (" + e.length + ").");
        return o
    }, e.prototype.match_main = function (e, t, n) {
        if (null == e || null == t || null == n)throw new Error("Null input. (match_main)");
        return n = Math.max(0, Math.min(n, e.length)), e == t ? 0 : e.length ? e.substring(n, n + t.length) == t ? n : this.match_bitap_(e, t, n) : -1
    }, e.prototype.match_bitap_ = function (e, t, n) {
        function r(e, r) {
            var i = e / t.length, a = Math.abs(n - r);
            return o.Match_Distance ? i + a / o.Match_Distance : a ? 1 : i
        }

        if (t.length > this.Match_MaxBits)throw new Error("Pattern too long for this browser.");
        var i = this.match_alphabet_(t), o = this, a = this.Match_Threshold, s = e.indexOf(t, n);
        -1 != s && (a = Math.min(r(0, s), a), s = e.lastIndexOf(t, n + t.length), -1 != s && (a = Math.min(r(0, s), a)));
        var l = 1 << t.length - 1;
        s = -1;
        for (var c, u, d, f = t.length + e.length, p = 0; p < t.length; p++) {
            for (c = 0, u = f; u > c;)r(p, n + u) <= a ? c = u : f = u, u = Math.floor((f - c) / 2 + c);
            f = u;
            var h = Math.max(1, n - u + 1), m = Math.min(n + u, e.length) + t.length, g = Array(m + 2);
            g[m + 1] = (1 << p) - 1;
            for (var v = m; v >= h; v--) {
                var b = i[e.charAt(v - 1)];
                if (g[v] = 0 === p ? (g[v + 1] << 1 | 1) & b : (g[v + 1] << 1 | 1) & b | ((d[v + 1] | d[v]) << 1 | 1) | d[v + 1], g[v] & l) {
                    var y = r(p, v - 1);
                    if (a >= y) {
                        if (a = y, s = v - 1, !(s > n))break;
                        h = Math.max(1, 2 * n - s)
                    }
                }
            }
            if (r(p + 1, n) > a)break;
            d = g
        }
        return s
    }, e.prototype.match_alphabet_ = function (e) {
        for (var t = {}, n = 0; n < e.length; n++)t[e.charAt(n)] = 0;
        for (var n = 0; n < e.length; n++)t[e.charAt(n)] |= 1 << e.length - n - 1;
        return t
    }, e.prototype.patch_addContext_ = function (e, t) {
        if (0 != t.length) {
            for (var n = t.substring(e.start2, e.start2 + e.length1), i = 0; t.indexOf(n) != t.lastIndexOf(n) && n.length < this.Match_MaxBits - this.Patch_Margin - this.Patch_Margin;)i += this.Patch_Margin, n = t.substring(e.start2 - i, e.start2 + e.length1 + i);
            i += this.Patch_Margin;
            var o = t.substring(e.start2 - i, e.start2);
            o && e.diffs.unshift([r, o]);
            var a = t.substring(e.start2 + e.length1, e.start2 + e.length1 + i);
            a && e.diffs.push([r, a]), e.start1 -= o.length, e.start2 -= o.length, e.length1 += o.length + a.length, e.length2 += o.length + a.length
        }
    }, e.prototype.patch_make = function (i, o, a) {
        var s, l;
        if ("string" == typeof i && "string" == typeof o && "undefined" == typeof a)s = i, l = this.diff_main(s, o, !0), l.length > 2 && (this.diff_cleanupSemantic(l), this.diff_cleanupEfficiency(l)); else if (i && "object" == typeof i && "undefined" == typeof o && "undefined" == typeof a)l = i, s = this.diff_text1(l); else if ("string" == typeof i && o && "object" == typeof o && "undefined" == typeof a)s = i, l = o; else {
            if ("string" != typeof i || "string" != typeof o || !a || "object" != typeof a)throw new Error("Unknown call format to patch_make.");
            s = i, l = a
        }
        if (0 === l.length)return [];
        for (var c = [], u = new e.patch_obj, d = 0, f = 0, p = 0, h = s, m = s, g = 0; g < l.length; g++) {
            var v = l[g][0], b = l[g][1];
            switch (d || v === r || (u.start1 = f, u.start2 = p), v) {
                case n:
                    u.diffs[d++] = l[g], u.length2 += b.length, m = m.substring(0, p) + b + m.substring(p);
                    break;
                case t:
                    u.length1 += b.length, u.diffs[d++] = l[g], m = m.substring(0, p) + m.substring(p + b.length);
                    break;
                case r:
                    b.length <= 2 * this.Patch_Margin && d && l.length != g + 1 ? (u.diffs[d++] = l[g], u.length1 += b.length, u.length2 += b.length) : b.length >= 2 * this.Patch_Margin && d && (this.patch_addContext_(u, h), c.push(u), u = new e.patch_obj, d = 0, h = m, f = p)
            }
            v !== n && (f += b.length), v !== t && (p += b.length)
        }
        return d && (this.patch_addContext_(u, h), c.push(u)), c
    }, e.prototype.patch_deepCopy = function (t) {
        for (var n = [], r = 0; r < t.length; r++) {
            var i = t[r], o = new e.patch_obj;
            o.diffs = [];
            for (var a = 0; a < i.diffs.length; a++)o.diffs[a] = i.diffs[a].slice();
            o.start1 = i.start1, o.start2 = i.start2, o.length1 = i.length1, o.length2 = i.length2, n[r] = o
        }
        return n
    }, e.prototype.patch_apply = function (e, i) {
        if (0 == e.length)return [i, []];
        e = this.patch_deepCopy(e);
        var o = this.patch_addPadding(e);
        i = o + i + o, this.patch_splitMax(e);
        for (var a = 0, s = [], l = 0; l < e.length; l++) {
            var c, u = e[l].start2 + a, d = this.diff_text1(e[l].diffs), f = -1;
            if (d.length > this.Match_MaxBits ? (c = this.match_main(i, d.substring(0, this.Match_MaxBits), u), -1 != c && (f = this.match_main(i, d.substring(d.length - this.Match_MaxBits), u + d.length - this.Match_MaxBits), (-1 == f || c >= f) && (c = -1))) : c = this.match_main(i, d, u), -1 == c)s[l] = !1, a -= e[l].length2 - e[l].length1; else {
                s[l] = !0, a = c - u;
                var p;
                if (p = -1 == f ? i.substring(c, c + d.length) : i.substring(c, f + this.Match_MaxBits), d == p)i = i.substring(0, c) + this.diff_text2(e[l].diffs) + i.substring(c + d.length); else {
                    var h = this.diff_main(d, p, !1);
                    if (d.length > this.Match_MaxBits && this.diff_levenshtein(h) / d.length > this.Patch_DeleteThreshold)s[l] = !1; else {
                        this.diff_cleanupSemanticLossless(h);
                        for (var m, g = 0, v = 0; v < e[l].diffs.length; v++) {
                            var b = e[l].diffs[v];
                            b[0] !== r && (m = this.diff_xIndex(h, g)), b[0] === n ? i = i.substring(0, c + m) + b[1] + i.substring(c + m) : b[0] === t && (i = i.substring(0, c + m) + i.substring(c + this.diff_xIndex(h, g + b[1].length))), b[0] !== t && (g += b[1].length)
                        }
                    }
                }
            }
        }
        return i = i.substring(o.length, i.length - o.length), [i, s]
    }, e.prototype.patch_addPadding = function (e) {
        for (var t = this.Patch_Margin, n = "", i = 1; t >= i; i++)n += String.fromCharCode(i);
        for (var i = 0; i < e.length; i++)e[i].start1 += t, e[i].start2 += t;
        var o = e[0], a = o.diffs;
        if (0 == a.length || a[0][0] != r)a.unshift([r, n]), o.start1 -= t, o.start2 -= t, o.length1 += t, o.length2 += t; else if (t > a[0][1].length) {
            var s = t - a[0][1].length;
            a[0][1] = n.substring(a[0][1].length) + a[0][1], o.start1 -= s, o.start2 -= s, o.length1 += s, o.length2 += s
        }
        if (o = e[e.length - 1], a = o.diffs, 0 == a.length || a[a.length - 1][0] != r)a.push([r, n]), o.length1 += t, o.length2 += t; else if (t > a[a.length - 1][1].length) {
            var s = t - a[a.length - 1][1].length;
            a[a.length - 1][1] += n.substring(0, s), o.length1 += s, o.length2 += s
        }
        return n
    }, e.prototype.patch_splitMax = function (i) {
        for (var o = this.Match_MaxBits, a = 0; a < i.length; a++)if (!(i[a].length1 <= o)) {
            var s = i[a];
            i.splice(a--, 1);
            for (var l = s.start1, c = s.start2, u = ""; 0 !== s.diffs.length;) {
                var d = new e.patch_obj, f = !0;
                for (d.start1 = l - u.length, d.start2 = c - u.length, "" !== u && (d.length1 = d.length2 = u.length, d.diffs.push([r, u])); 0 !== s.diffs.length && d.length1 < o - this.Patch_Margin;) {
                    var p = s.diffs[0][0], h = s.diffs[0][1];
                    p === n ? (d.length2 += h.length, c += h.length, d.diffs.push(s.diffs.shift()), f = !1) : p === t && 1 == d.diffs.length && d.diffs[0][0] == r && h.length > 2 * o ? (d.length1 += h.length, l += h.length, f = !1, d.diffs.push([p, h]), s.diffs.shift()) : (h = h.substring(0, o - d.length1 - this.Patch_Margin), d.length1 += h.length, l += h.length, p === r ? (d.length2 += h.length, c += h.length) : f = !1, d.diffs.push([p, h]), h == s.diffs[0][1] ? s.diffs.shift() : s.diffs[0][1] = s.diffs[0][1].substring(h.length))
                }
                u = this.diff_text2(d.diffs), u = u.substring(u.length - this.Patch_Margin);
                var m = this.diff_text1(s.diffs).substring(0, this.Patch_Margin);
                "" !== m && (d.length1 += m.length, d.length2 += m.length, 0 !== d.diffs.length && d.diffs[d.diffs.length - 1][0] === r ? d.diffs[d.diffs.length - 1][1] += m : d.diffs.push([r, m])), f || i.splice(++a, 0, d)
            }
        }
    }, e.prototype.patch_toText = function (e) {
        for (var t = [], n = 0; n < e.length; n++)t[n] = e[n];
        return t.join("")
    }, e.prototype.patch_fromText = function (i) {
        var o = [];
        if (!i)return o;
        for (var a = i.split("\n"), s = 0, l = /^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/; s < a.length;) {
            var c = a[s].match(l);
            if (!c)throw new Error("Invalid patch string: " + a[s]);
            var u = new e.patch_obj;
            for (o.push(u), u.start1 = parseInt(c[1], 10), "" === c[2] ? (u.start1--, u.length1 = 1) : "0" == c[2] ? u.length1 = 0 : (u.start1--, u.length1 = parseInt(c[2], 10)), u.start2 = parseInt(c[3], 10), "" === c[4] ? (u.start2--, u.length2 = 1) : "0" == c[4] ? u.length2 = 0 : (u.start2--, u.length2 = parseInt(c[4], 10)), s++; s < a.length;) {
                var d = a[s].charAt(0);
                try {
                    var f = decodeURI(a[s].substring(1))
                } catch (p) {
                    throw new Error("Illegal escape in patch_fromText: " + f)
                }
                if ("-" == d)u.diffs.push([t, f]); else if ("+" == d)u.diffs.push([n, f]); else if (" " == d)u.diffs.push([r, f]); else {
                    if ("@" == d)break;
                    if ("" !== d)throw new Error('Invalid patch mode "' + d + '" in: ' + f)
                }
                s++
            }
        }
        return o
    }, e.patch_obj = function () {
        this.diffs = [], this.start1 = null, this.start2 = null, this.length1 = 0, this.length2 = 0
    }, e.patch_obj.prototype.toString = function () {
        var e, i;
        e = 0 === this.length1 ? this.start1 + ",0" : 1 == this.length1 ? this.start1 + 1 : this.start1 + 1 + "," + this.length1, i = 0 === this.length2 ? this.start2 + ",0" : 1 == this.length2 ? this.start2 + 1 : this.start2 + 1 + "," + this.length2;
        for (var o, a = ["@@ -" + e + " +" + i + " @@\n"], s = 0; s < this.diffs.length; s++) {
            switch (this.diffs[s][0]) {
                case n:
                    o = "+";
                    break;
                case t:
                    o = "-";
                    break;
                case r:
                    o = " "
            }
            a[s + 1] = o + encodeURI(this.diffs[s][1]) + "\n"
        }
        return a.join("").replace(/%20/g, " ")
    }, this.diff_match_patch = e, this.DIFF_DELETE = t, this.DIFF_INSERT = n, this.DIFF_EQUAL = r, e
}), function (e) {
    "use strict";
    e("jquery_scrollTo", ["jquery"], function (e) {
        function t(t) {
            return e.isFunction(t) || e.isPlainObject(t) ? t : {top: t, left: t}
        }

        var n = e.scrollTo = function (t, n, r) {
            return e(window).scrollTo(t, n, r)
        };
        return n.defaults = {axis: "xy", duration: 0, limit: !0}, n.window = function () {
            return e(window)._scrollable()
        }, e.fn._scrollable = function () {
            return this.map(function () {
                var t = this, n = !t.nodeName || -1 !== e.inArray(t.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]);
                if (!n)return t;
                var r = (t.contentWindow || t).document || t.ownerDocument || t;
                return /webkit/i.test(navigator.userAgent) || "BackCompat" === r.compatMode ? r.body : r.documentElement
            })
        }, e.fn.scrollTo = function (r, i, o) {
            return "object" == typeof i && (o = i, i = 0), "function" == typeof o && (o = {onAfter: o}), "max" === r && (r = 9e9), o = e.extend({}, n.defaults, o), i = i || o.duration, o.queue = o.queue && o.axis.length > 1, o.queue && (i /= 2), o.offset = t(o.offset), o.over = t(o.over), this._scrollable().each(function () {
                function a(e) {
                    c.animate(d, i, o.easing, e && function () {
                            e.call(this, u, o)
                        })
                }

                if (null !== r) {
                    var s, l = this, c = e(l), u = r, d = {}, f = c.is("html,body");
                    switch (typeof u) {
                        case"number":
                        case"string":
                            if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(u)) {
                                u = t(u);
                                break
                            }
                            if (u = f ? e(u) : e(u, this), !u.length)return;
                        case"object":
                            (u.is || u.style) && (s = (u = e(u)).offset())
                    }
                    var p = e.isFunction(o.offset) && o.offset(l, u) || o.offset;
                    e.each(o.axis.split(""), function (e, t) {
                        var r = "x" === t ? "Left" : "Top", i = r.toLowerCase(), h = "scroll" + r, m = l[h], g = n.max(l, t);
                        if (s)d[h] = s[i] + (f ? 0 : m - c.offset()[i]), o.margin && (d[h] -= parseInt(u.css("margin" + r), 10) || 0, d[h] -= parseInt(u.css("border" + r + "Width"), 10) || 0), d[h] += p[i] || 0, o.over[i] && (d[h] += u["x" === t ? "width" : "height"]() * o.over[i]); else {
                            var v = u[i];
                            d[h] = v.slice && "%" === v.slice(-1) ? parseFloat(v) / 100 * g : v
                        }
                        o.limit && /^\d+$/.test(d[h]) && (d[h] = d[h] <= 0 ? 0 : Math.min(d[h], g)), !e && o.queue && (m !== d[h] && a(o.onAfterFirst), delete d[h])
                    }), a(o.onAfter)
                }
            }).end()
        }, n.max = function (t, n) {
            var r = "x" === n ? "Width" : "Height", i = "scroll" + r;
            if (!e(t).is("html,body"))return t[i] - e(t)[r.toLowerCase()]();
            var o = "client" + r, a = t.ownerDocument.documentElement, s = t.ownerDocument.body;
            return Math.max(a[i], s[i]) - Math.min(a[o], s[o])
        }, n
    })
}("function" == typeof define && define.amd ? define : function (e, t) {
    "use strict";
    "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}), function (e) {
    var t;
    return e.event.fix = function (e) {
        return function (t) {
            return t = e.apply(this, arguments), (0 === t.type.indexOf("copy") || 0 === t.type.indexOf("paste")) && (t.clipboardData = t.originalEvent.clipboardData), t
        }
    }(e.event.fix), t = {callback: e.noop, matchType: /image.*/}, e.fn.pasteImageReader = function (n) {
        return "function" == typeof n && (n = {callback: n}), n = e.extend({}, t, n), this.each(function () {
            var t, r;
            return r = this, t = e(this), t.bind("paste", function (e) {
                var t, i;
                return i = !1, t = e.clipboardData, Array.prototype.forEach.call(t.types, function (e, o) {
                    var a, s;
                    if (!i)return e.match(n.matchType) || t.items[o].type.match(n.matchType) ? (a = t.items[o].getAsFile(), s = new FileReader, s.onload = function (e) {
                        return n.callback.call(r, {dataURL: e.target.result, event: e, file: a, name: a.name})
                    }, s.readAsDataURL(a), i = !0) : void 0
                })
            })
        })
    }
}(jQuery), define("jquery_pasteImage", ["jquery"], function (e) {
    return function () {
        var t;
        return t || e.$.fn.pasteImageReader
    }
}(this)), define("Editor", ["main", "sfModal", "template", "highLight", "pagedown_editor", "tabIndent", "diff_match_patch", "jquery_scrollTo", "jquery_pasteImage", "atwho", "caret", "fileUpload"], function (e, t, n, r, i, o, a) {
    var s, l, c, u, d;
    return s = function (e) {
        e = $.extend({
            toolbar: s.toolbar,
            statusbar: !0,
            status: s.statusbar
        }, e), this.options = e, this.converter = null, this.isBig = !1, this.isLive = !1, this.originHeight = 420
    }, d = function (e) {
        var t, n;
        n = function () {
            $(".editor__menu--zen").addClass("editor__menu--unzen").removeClass("editor__menu--zen"), $(".editor").addClass("editor_fullscreen"), $("body").addClass("noscroll"), $(".editor__resize").hide(), $(".wmd-input").css("height", "100%"), e.isBig = !0
        }, t = function () {
            $(".editor__resize").show(), $(".editor__menu--unzen").addClass("editor__menu--zen").removeClass("editor__menu--unzen"), $(".editor").removeClass("editor_fullscreen"), $("body").removeClass("noscroll"), e.isBig = !1
        }, $(".editor__menu--zen").length ? n() : t && t()
    }, u = function (e) {
        e.mode = "preview", $(".editor").removeClass("liveMode editMode").addClass("previewMode"), $(".editor-mode a").removeClass("muted"), $(".editor__menu--preview").addClass("muted"), r($("#wmd-preview"))
    }, l = function (e) {
        e.mode = "edit", $(".editor").removeClass("liveMode previewMode").addClass("editMode"), $(".editor-mode a").removeClass("muted"), $(".editor__menu--edit").addClass("muted")
    }, c = function (e) {
        e.mode = "live", $(".editor").removeClass("editMode previewMode").addClass("liveMode"), $(".editor-mode a").removeClass("muted"), $(".editor__menu--live").addClass("muted"), r($("#wmd-preview"))
    }, s.prototype.getVal = function () {
        return $(".wmd-input").val()
    }, s.prototype.setVal = function (e) {
        var t;
        return t = $(".wmd-input").val(e), this.pagedownEditor.refreshPreview(), t
    }, s.prototype.change = function (e) {
        e && $(".wmd-input").on("input", function () {
            e()
        })
    }, s.prototype.render = function (e, n, s) {
        var l, c, u, d, f, p, h, m, g, v, b, y, w, _, k, x, C, S, T, M, E, L, N, I, A, j, O;
        if (L = this, !this._rendered || this._rendered !== e) {
            if (document.cookie.indexOf("typemode") > -1)return void $(e).addClass("wmd-input");
            n = n || "live", $(e).removeClass("hidden hide").addClass("mono form-control wmd-input"), $(e).before('<div class="editor-toolbar" id="wmd-button-bar"><ul class="editor-mode"></ul></div>'), $(e).wrap('<div class="wmd"></div>'), $(".wmd").after("<div class=\"editor-line\"></div><div class=\"editor-preview\"><div class='fmt' id='wmd-preview'></div></div>"), o.config.tab = "    ", o.render($(e)[0]), $(".wmd-input").pasteImageReader(function (e) {
                v(e.name, e.dataURL)
            }), v = function (n, r) {
                var i, o, a, s, l;
                return s = $(".wmd-input").val(), o = $(".wmd-input")[0].selectionStart, $(".wmd-input").val(s.slice(0, o) + "\n![图片上传中...]\n" + s.slice(o)), l = "image/png", a = {type: "POST"}, a.url = "/img/upload/image?enc=base64", a.name = "image", i = "xhrupload-" + parseInt(Math.random() * (2 << 16)), a.contentType = "multipart/form-data; boundary=" + i, a.data = "--" + i + '\ncontent-disposition: form-data; enc="base64"; name="' + a.name + '"; filename="' + encodeURIComponent(n) + '.base64"\nContent-Transfer-Encoding: base64\nContent-Type: ' + l + "\n\n" + r.slice(22) + "\n\n--" + i + "--", $.ajax(a).success(function (n) {
                    var r, i, a, l;
                    l = n[0], r = n[1], i = "clipboard.png", l ? (t(r), $(e).val(s.slice(0, o) + s.slice(o + 13))) : (a = "\n![" + i + "](" + r + ")\n", s = $(e).val(), $(e).val(s.slice(0, o) + a + s.slice(o + 13)), L.pagedownEditor.refreshPreview())
                }).error(function (t) {
                    return 413 === t.status ? $(e).val(s.slice(0, o) + s.slice(o + 13)) : void 0
                })
            }, C = function () {
                return $(".editor").addClass("dragging")
            }, k = function () {
                return $(".editor").removeClass("dragging")
            }, x = function (e) {
                return e.stopPropagation(), e.preventDefault(), e.originalEvent.dataTransfer.dropEffect = "copy"
            }, _ = function (e) {
                var t, n, r, i, o, a, s, l;
                for (e.preventDefault(), e.stopPropagation(), $(".editor").removeClass("dragging"), a = e.originalEvent.dataTransfer.files, i = 0, o = a.length; o > i; i++)n = a[i], window.FileReader && (r = new FileReader, r.onload = function (e) {
                    return v(n.name, e.currentTarget.result)
                }, r.readAsDataURL(n));
                return l = e.originalEvent.dataTransfer.getData("text/plain"), l ? (s = $(".wmd-input").val(), t = $(".wmd-input")[0].selectionStart, $(".wmd-input").val(s.slice(0, t) + l + s.slice(t))) : void 0
            }, $(".wmd-input").on({
                "dragenter.dragevent": C,
                "dragleave.dragevent": k,
                "dragover.dragevent": x,
                "drop.dragevent": _
            }), $(e).atwho({
                at: "@", callbacks: {
                    remote_filter: function (e, t) {
                        var n, r;
                        if (r = {q: e}, !e && $("#answerIt").length)n = $("#answerIt").data("id"), r = {questionId: n}; else if (!e)return;
                        $.getJSON("/api/users/search", r, function (e) {
                            e.status || t(e.data)
                        })
                    }, tpl_eval: function (e, t) {
                        return '<li data-value="@' + t.name + '">' + (t.avatarUrl ? '<img class="avatar-24 mr10" src="' + t.avatarUrl + '" />' : "") + t.name + " &nbsp; <small>@" + t.slug + "</small></li>"
                    }
                }
            }), this.element = $(e)[0], S = this.options, d = new i.getSanitizingConverter, i.Extra.init(d), p = new i.Editor(d), p.run(e.slice(1)), this.converter = d, this.pagedownEditor = p, f = new a, y = "@mark" + Math.ceil(1e8 * Math.random()) + "@", M = $("#wmd-preview"), b = "", N = '<span class="diff" />', d.hook("afterParse", function (e) {
                var t, n, r, i, o, a, s, l, c, u, d, p, h, m;
                if (e = e[0], n = f.diff_main(b, e), b = e, n.length > 0) {
                    for (h = [], s = y, i = 0; i < n.length;)t = n[i], c = t[0], m = t[1], p = m.lastIndexOf("<"), r = m.lastIndexOf(">"), 0 !== c ? (p >= 0 && p > r ? c > 0 ? h.push(m.substring(0, p) + s + m.substring(p)) : (a = h[h.length - 1], o = a.lastIndexOf("<"), h[h.length - 1] = a.substring(0, o) + s + a.substring(o)) : h.push(c > 0 ? m + s : s), s = "") : h.push(m), i++;
                    e = h.join(""), s || (u = e.indexOf(y), d = e.substring(0, u), l = e.substr(u + y.length), p = d.lastIndexOf("<"), r = d.lastIndexOf(">"), e = p >= 0 && p > r ? d.substring(0, p) + N + d.substring(p) + l : d + N + l)
                }
                return [e]
            }), O = void 0, p.hooks.chain("onPreviewRefresh", function () {
                var e, t, n, i, o;
                $("#wmd-preview pre").length && r(M), t = $(".diff", M), o = !1, O && clearTimeout(O), e = $(".diff", M).parent(), e.is(M) || (e.css("background-color", "#D9EDF7"), O = setTimeout(function () {
                    e.css("background-color", "transparent")
                }, 4500)), t.length > 0 && (i = t.position(), n = t.parent().css("line-height"), n = n ? parseInt(n) : 0, (i.top < 0 || i.top > $(".editor-preview").height() - n) && ($(".editor-preview").scrollTo(t), o = !0))
            }), S.toolbar !== !1 && this.createToolbar(), E = '<a class="editor__resize" href="javascript:void(0);">调整高度</a>', $(".editor").after(E), A = void 0, m = 0, g = 32, j = void 0, I = function (e) {
                return j = $(".wmd-input"), m = w(e).y, A = j.height() - m, j.css("opacity", .3), $(document).mousemove(T).mouseup(h), !1
            }, T = function (e) {
                var t, n;
                return n = w(e).y, t = A + n, m >= n && (t -= 5), m = n, t = Math.max(g, t), j.height(t + "px"), g > t && h(e), !1
            }, h = function () {
                $(document).unbind("mousemove", T).unbind("mouseup", h), j.css({opacity: 1}), j.focus(), j = null, A = null, m = 0
            }, w = function (e) {
                return {
                    x: e.clientX + document.documentElement.scrollLeft,
                    y: e.clientY + document.documentElement.scrollTop
                }
            }, $(".editor__resize").on("mousedown", I), $(window).scroll(function () {
                var e, t, n, r;
                L.isBig || (r = $(".editor").width(), n = $(".editor").offset().top, t = $(this).scrollTop(), e = 62 + $(".editor-help .tab-content").height(), t >= n ? ($(".editor-help-content.active").removeClass("active"), $(".editor__menu").css({
                    position: "fixed",
                    top: 0,
                    "z-index": 1e3,
                    width: r,
                    "border-bottom": "1px solid #CCC"
                }), $(".editor-help").css({
                    position: "fixed",
                    top: "31px",
                    "z-index": 1e3,
                    width: r
                })) : $(".editor__menu, .editor-help").css({
                    position: "static",
                    width: "auto",
                    "border-bottom": "none"
                }))
            }), this._rendered = e, "live" === n ? $(".editor__menu--live").trigger("click") : "edit" === n ? $(".editor__menu--edit").trigger("click") : "preview" === n && $(".editor__menu--preview").trigger("click"), window.localStorage && (l = "autoSaveContent_" + location.pathname + location.search, u = "autoSaveTitle_" + location.pathname + location.search, c = "autoSaveTags_" + location.pathname + location.search, localStorage[l] && $(e).val(localStorage[l]), localStorage[u] && $("#myTitle").val(localStorage[u])), s && s(L)
        }
    }, s.prototype.createToolbar = function () {
        var e, t, n, r, i, o;
        n = this, i = '<li class="pull-right"><a class="editor__menu--preview" title="预览模式"></a></li><li class="pull-right"><a class="editor__menu--live" title="实况模式"></a></li><li class="pull-right"><a class="editor__menu--edit" title="编辑模式"></a></li><li class="pull-right editor__menu--divider"></li><li id="wmd-zen-button" class="pull-right" title="全屏"><a class="editor__menu--zen"></a></li>', r = $(i), $(".editor-mode").append(r), $(".editor").delegate(".editor__menu--edit", "click", function () {
            $(this).hasClass("muted") || l(n)
        }), $(".editor").delegate(".editor__menu--preview", "click", function () {
            $(this).hasClass("muted") || u(n)
        }), $(".editor").delegate(".editor__menu--live", "click", function () {
            $(this).hasClass("muted") || c(n)
        }), $("#wmd-zen-button").find("a").removeClass("editor__menu--bold").addClass("editor__menu--zen"), $("#wmd-zen-button").click(function () {
            d(n)
        }), e = '<title>Markdown 语法指南</title><link rel="stylesheet" href="' + $('head link[rel="stylesheet"]').attr("href") + '"><script src="http://cdn.bootcss.com/jquery/1.11.1/jquery.min.js"></script><script src="http://cdn.bootcss.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>', t = e + '<body style="background-color:#FAF2CC"><div class="editor-help"><ul class="editor-help-tabs nav nav-tabs" id="editorHelpTab" role="tablist">    <li rel="heading"><a href="#editorHelpHeading" role="tab" data-toggle="tab">标题 / 粗斜体</a></li>    <li rel="code"><a href="#editorHelpCode" role="tab" data-toggle="tag">代码</a></li>    <li rel="link"><a href="#editorHelpLink" role="tab" data-toggle="tag">链接</a></li>    <li rel="image"><a href="#editorHelpImage" role="tab" data-toggle="tag">图片</a></li>    <li rel="split"><a href="#editorHelpSplit" role="tab" data-toggle="tag">换行 / 分隔符</a></li>    <li rel="list"><a href="#editorHelpList" role="tab" data-toggle="tag">列表 / 引用</li></a>    <li class="pull-right"><a href="http://segmentfault.com/markdown" target="_blank">高级技巧</a></li>    </ul><div class="tab-content"><!-- 粗斜体、标题 --><div class="editor-help-content tab-pane fade" id="editorHelpHeading" rel="heading"><p>文章内容较多时，可以用标题分段：</p><pre>## 大标题 ##\n### 小标题 ###</pre><p>粗体 / 斜体</p><pre>*斜体文本*    _斜体文本_\n**粗体文本**    __粗体文本__\n***粗斜体文本***    ___粗斜体文本___</pre></div><!-- end 粗斜体、标题 --><!-- 代码 --><div class="editor-help-content tab-pane fade" id="editorHelpCode" rel="code"><p>如果你只想高亮语句中的某个函数名或关键字，可以使用 <code>`function_name()`</code> 实现</p><p>通常我们会根据您的代码片段适配合适的高亮方法，但你也可以用 <code>```</code> 包裹一段代码，并指定一种语言</p><pre>```<strong>javascript</strong>\n$(document).ready(function () {\n    alert(\'hello world\');\n});\n```</pre><p>支持的语言：<code>actionscript, apache, bash, clojure, cmake, coffeescript, cpp, cs, css, d, delphi, django, erlang, go, haskell, html, http, ini, java, javascript, json, lisp, lua, markdown, matlab, nginx, objectivec, perl, php, python, r, ruby, scala, smalltalk, sql, tex, vbscript, xml</code></p><p>您也可以使用 4 空格缩进，再贴上代码，实现相同的的效果</p><pre><i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i>def g(x):\n<i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i>yield from range(x, 0, -1)\n<i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i>yield from range(x)</pre></div><!-- end 代码 --><!-- 链接 --><div class="editor-help-content tab-pane fade" rel="link" id="editorHelpLink"><p>常用链接方法</p><pre>文字链接 [链接名称](http://链接网址)\n网址链接 &lt;http://链接网址&gt;</pre><p>高级链接技巧</p><pre>这个链接用 1 作为网址变量 [Google][1].\n这个链接用 yahoo 作为网址变量 [Yahoo!][yahoo].\n然后在文档的结尾为变量赋值（网址）\n\n<i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i>[1]: http://www.google.com/\n<i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i>[yahoo]: http://www.yahoo.com/</pre></div><!-- end 链接 --><!-- 图片 --><div class="editor-help-content tab-pane fade" id="editorHelpImage" rel="image"><p>跟链接的方法区别在于前面加了个感叹号 <code>!</code>，这样是不是觉得好记多了呢？</p><pre>![图片名称](http://图片网址)</pre><p>当然，你也可以像网址那样对图片网址使用变量</p><pre>这个链接用 1 作为网址变量 [Google][1].\n然后在文档的结尾位变量赋值（网址）\n\n<i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i>[1]: http://www.google.com/logo.png</pre></div><!-- end 图片 --><!-- 换行、分隔符 --><div class="editor-help-content tab-pane fade" id="editorHelpSplit" rel="split"><p>如果另起一行，只需在当前行结尾加 2 个空格</p><pre>在当前行的结尾加 2 个空格<i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i>\n这行就会新起一行</pre><p>如果是要起一个新段落，只需要空出一行即可。</p><p>如果你有写分割线的习惯，可以新起一行输入三个减号 <code>-</code>：</p><pre>---\n</pre></div><!-- end 换行、分隔符 --><!-- 列表、引用 --><div class="editor-help-content tab-pane fade" id="editorHelpList" rel="list"><p>普通列表</p><pre>-<i class="nbsp">&nbsp;</i>列表文本前使用 [减号+空格]\n+<i class="nbsp">&nbsp;</i>列表文本前使用 [加号+空格]\n*<i class="nbsp">&nbsp;</i>列表文本前使用 [星号+空格]</pre><p>带数字的列表</p><pre>1.<i class="nbsp">&nbsp;</i>列表前使用 [数字+空格]\n2.<i class="nbsp">&nbsp;</i>我们会自动帮你添加数字\n7.<i class="nbsp">&nbsp;</i>不用担心数字不对，显示的时候我们会自动把这行的 7 纠正为 3</pre><p>引用</p><pre>&gt;<i class="nbsp">&nbsp;</i>引用文本前使用 [大于号+空格]\n&gt;<i class="nbsp">&nbsp;</i>折行可以不加，新起一行都要加上哦</pre></div><!-- end 列表、引用 --></div></div><script>$("#editorHelpTab a").eq(0).tab("show");$("#editorHelpTab a").click(function (e) {    var _$wrap = $(this).parent();    if(! _$wrap.hasClass("pull-right")) {        e.preventDefault();        $(this).tab("show");    }});</script></body>', o = null, $("#wmd-help-button").click(function () {
            o && o.window ? o.focus() : (o = window.open("", "Markdown Help", "channelmode=yes, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, width=505, height=400, top=100, left=100"), o.document.write(t))
        })
    }, s
}), define("follow", ["statusToggle"], function (e) {
    "use strict";
    return function (t) {
        var n, r;
        n = $.extend({
            element: null,
            event: "click",
            url: null,
            toggleClass: "active",
            loadText: "加载中",
            unActiveText: "加关注",
            activeText: "已关注",
            "do": "follow",
            successFn: function () {
            },
            failFn: function () {
            }
        }, t), r = t.element, e(r), r.on(n.event, function () {
            r.hasClass(n.toggleClass) ? r.trigger("unactive", function () {
                r.text(n.unActiveText).removeClass(n.toggleClass).attr("disabled", "disabled"), $.post(n.url + "/" + n.element.data("id") + "/" + n["do"] + "/cancel", function (e) {
                    0 === e.status ? n.successFn.call(this, e) : (r.text(n.activeText), n.failFn.call(this, e)), r.removeAttr("disabled")
                })
            }) : r.trigger("active", function () {
                r.text(n.activeText).addClass(n.toggleClass).attr("disabled", "disabled"), $.post(n.url + "/" + n.element.data("id") + "/" + n["do"], function (e) {
                    0 === e.status ? n.successFn.call(this, e) : (r.text(n.unActiveText), n.failFn.call(this, e)), r.removeAttr("disabled")
                })
            })
        })
    }
}), define("tagPopup", ["jquery", "sfModal", "follow", "jquery_tmpl"], function (e, t, n) {
    "use strict";
    e.fn.tagPopup = function (t) {
        var r, i, o, a;
        o = function () {
            e.getJSON("/api/tag/" + r.data("id"), function (t) {
                var i, o;
                0 !== t.data.length && (a.content = t.data.excerpt ? "<p>" + t.data.excerpt + "</p>" : '<p class="text-muted">目前还没有关于这个标签的解释</p>', t.data.isFollowed ? (t.data.isFollowedClass = "active", t.data.isFollowedBtn = "已关注") : (t.data.isFollowedClass = "", t.data.isFollowedBtn = "加关注"), a.template = e.tmpl(a.template, t.data)[0], r.popover(a), r.popover("show"), o = e(".tag-popup-" + r.data("id")), i = o.find("button"), n({
                    element: i,
                    url: "/api/tag",
                    successFn: function (t) {
                        e(".tag-popup-" + i.data("id") + " .followers").text(t.data + "人")
                    }
                }))
            })
        }, r = e(this), i = e(".tag-popup-" + r.data("id")), a = {
            placement: r.data("placement") || "top",
            trigger: "manual",
            container: "body",
            content: "",
            html: !0,
            template: '<div class="popover tag-popup tag-popup-${id}">                <div class="arrow"></div>                <h3 class="popover-title"></h3>                <div class="popover-content"></div>                <div class="popover-footer">                    <a href="${url}">查看</a>                    <span class="text-muted">&middot;</span>                    <a href="${editUrl}">编辑</a>                    <span class="text-muted">&middot;</span>                    <a href="/feeds/tag/${name}">订阅</a>                    <div class="pull-right">                        <span class="text-muted followers">${followers} 人</span><button class="btn btn-default btn-xs tagfollow ${isFollowedClass}" data-id="${id}">${isFollowedBtn}</button></div></div></div>'
        }, "show" === t ? 0 === i.length ? o() : i.show() : "hide" === t && i.remove()
    }
}), define("911", ["jquery", "main"], function (e) {
    "use strict";
    var t, n;
    t = "", n = "", e("#911").on("shown.bs.modal", function (r) {
        var i;
        e(this).find("[type=radio]").first().focus(), n = e(r.relatedTarget).data("type"), t = e(r.relatedTarget).data("id"), i = e(r.relatedTarget).data("typetext"), e(".type-911").text(i), e(".radio-911").hide(), e(".radio-911.all, ." + n + "-only").show(), e("#J_returnMsg").hide().empty()
    }), e("#btwRadio input").change(function () {
        e("#911Desc").val("").text(""), e(".btw").removeClass("hide")
    }), e(".radio-911 input").not("#btwRadio input").change(function () {
        e(".btw").addClass("hide"), e("#911Desc").text(e(this).attr("value"))
    }), e("#911Submit").click(function () {
        e.post("/api/" + n + "/" + t + "/report", {reason: e("#911Desc").val() || e(".radio-911 input:checked").val()}, function (t) {
            0 === t.status ? location.reload() : e("#J_returnMsg").text(t.data[1].id).show()
        }, "json")
    })
}), function (e, t) {
    var n, r;
    return r = {
        initData: [],
        remoteData: [],
        inputTpl: '<span class="sf-typeHelper-item<%= itemClass %> "> <%= name %> <span class="fa fa-times" data-role="remove"></span></span>',
        tpl: "<li data-id='<%= id %>' ><a data-role='typeHelper' href='javascript:;'><% if (typeof(img)!='undefined'){ %> <img src='<%= img %>'> <% } %> <%= name %> </a></li>",
        maxNum: 5,
        confirmKeys: [13, 44, 32],
        emptyTip: "",
        emptyFunc: function () {
        },
        afterAdd: function () {
        },
        afterRemove: function () {
        },
        beforeAdd: function () {
        }
    }, n = function (n, i) {
        return 0 === n.length ? void console.warn("element not found in DOM") : (t.each(r, function (e, t) {
            var n;
            return i[t] = null != (n = i[t]) ? n : e
        }), this.opt = i, this.items = [], this.result = [], this.query = "", this.$element = e(n), this.$element.addClass("hidden"), this.placeholderText = n.hasAttribute("placeholder") ? this.$element.attr("placeholder") : "", this.$container = e('<div class="sf-typeHelper"></div>'), this.$input = e('<input type="text" data-role="sf_typeHelper-input" class="sf-typeHelper-input" placeholder="' + this.placeholderText + '"/>').appendTo(this.$container), this.$list = e('<ul class="sf-typeHelper-list dropdown-menu"></ul>'), this.$element.after(this.$container), this.$container.append(this.$list), this.build(i))
    }, n.prototype = {
        constructor: n, formatter: function (e) {
            var n;
            return e = null != e ? e : [], n = t.map(e, function (e, t) {
                var n, r, i, o;
                return "object" != typeof e && (n = {}, n.name = e, n.id = t, e = n), e.name = null != (r = e.name) ? r : e, e.id = null != (i = e.id) ? i : t, e.img = null != (o = e.img) ? o : e.avatarUrl, e
            })
        }, getRemoteData: function (n, r) {
            var i, o;
            return o = this, i = [], "object" != typeof o.opt.remoteData ? (o.timer && clearTimeout(o.timer), o.timer = setTimeout(function () {
                return e.ajax({
                    url: o.opt.remoteData, data: {q: n}, dataType: "json", success: function (e) {
                        return i = e.data, i = o.formatter(i), r ? r(i) : void 0
                    }
                })
            }, 300)) : (i = o.formatter(o.opt.remoteData), i = t.filter(i, function (e) {
                return -1 !== e.name.search(n)
            }), r ? r(i) : void 0)
        }, renderList: function (e) {
            var n, r;
            return r = this, e.length > 0 ? r.getRemoteData(e, function (e) {
                var n;
                return e = t.difference(e, r.result), 0 === e.length && r.opt.emptyTip.length > 0 && e.push({
                    id: -1,
                    name: r.opt.emptyTip
                }), r.items = e, n = t.reduce(e, function (e, n) {
                    return e + t.template(r.opt.tpl)(n)
                }, ""), n.length > 0 ? r.$list.show() : r.$list.hide(), r.$list.html(n), r.$list.find("li:first").addClass("active")
            }) : (n = "", r.$list.hide(), r.$list.html(n))
        }, renderInput: function () {
            var e, n, r;
            return r = this, r.$container.find(".sf-typeHelper-item").remove(), r.$container.find(".sf-typeHelper-item-single").remove(), n = "", 1 === r.opt.maxNum && (n = "-single"), r.opt.inputTpl.length > 0 && (e = t.reduce(r.result, function (e, i) {
                return i.itemClass = n, e + t.template(r.opt.inputTpl)(i)
            }, ""), r.$container.prepend(e)), 0 === r.opt.maxNum || r.result.length !== r.opt.maxNum ? r.$input.attr("placeholder", this.placeholderText) : void r.$input.attr("placeholder", "")
        }, add: function (e) {
            var t;
            return t = this, t.$list.trigger("hide"), t.result.push(e), t.renderInput(), t.opt.afterAdd ? t.opt.afterAdd(e, t) : void 0
        }, remove: function (e) {
            var n;
            return n = this, n.result = t.filter(n.result, function (t) {
                return t.name !== e.name
            }), n.renderInput(), n.opt.afterRemove ? n.opt.afterRemove(e, n) : void 0
        }, init: function (e) {
            var t;
            return t = this, t.result = t.formatter(e.initData), t.renderInput()
        }, build: function (n) {
            var r;
            r = this, r.placeholderText.length > 0 && r.$input.css("width", r.placeholderText.length + "em"), n.initData.length > 0 && r.init(n), r.$container.on("click", function () {
                return r.$container.trigger("focus"), r.$input.trigger("focus")
            }), r.$list.on("hide", function () {
                return r.$input.val(""), r.renderList(""), r.query = ""
            }), r.$input.on("keydown", function (e) {
                var n;
                return n = e.keyCode, 8 === n && 0 === r.query.length && (r.remove(t.last(r.result)), r.renderInput()), 13 === n && e.preventDefault(), r.result.length === r.opt.maxNum && 0 !== r.opt.maxNum ? e.preventDefault() : void 0
            }), r.$input.on("keyup", function (n) {
                var i, o, a, s;
                if (r.result.length !== r.opt.maxNum || 0 === r.opt.maxNum)switch (r.query = e(this).val(), a = n.keyCode) {
                    case 8:
                        return r.renderList(r.query);
                    case 13:
                        return o = r.$list.find("li.active").index(), s = r.items[o], -1 === s.id || t.find(r.result, function (e) {
                            return e.id === s.id
                        }) ? r.opt.emptyFunc && r.opt.emptyFunc() : r.add(s), r.$list.trigger("hide");
                    case 38:
                        if (i = r.$list.find("li.active"), o = i.index(), o > 0)return i.removeClass("active"), i.prev("li").addClass("active");
                        break;
                    case 40:
                        if (i = r.$list.find("li.active"), o = i.index(), o < r.items.length - 1)return i.removeClass("active"), i.next("li").addClass("active");
                        break;
                    default:
                        return r.renderList(r.query)
                }
            }), e("body").on("click", function (t) {
                var n, i;
                return n = e(t.target), i = n.attr("data-role"), "typeHelper" !== i ? r.$list.trigger("hide") : void 0
            }), r.$container.on("click", "[data-role=remove]", function () {
                var t, n, i, o;
                return t = e(this), n = t.closest(".sf-typeHelper-item"), o = n.index(), i = r.result[o], r.remove(i)
            }), r.$list.on("click", "li", function () {
                var n, i;
                return n = e(this).index(), i = r.items[n], -1 === i.id || t.find(r.result, function (e) {
                    return e.id === i.id
                }) ? r.opt.emptyFunc && r.opt.emptyFunc() : r.add(i), r.$list.trigger("hide")
            })
        }
    }, e.fn.typeHelper = function (t) {
        return new n(e(this)[0], t)
    }
}($, _), define("sf_typeHelper", ["jquery", "underscore"], function (e) {
    return function () {
        var t;
        return t || e.$.fn.typeHelper
    }
}(this)), requirejs(["likeHate", "getRelated", "bookmark", "comment", "autoSave", "sfModal", "sf_share", "specialUrl", "highLight", "template", "main", "Editor", "jquery_hoverIntent", "tagPopup", "911", "jquery_hoverIntent", "tagPopup", "caret", "atwho", "typeHelper", "sf_typeHelper", "jquery_cookie"], function (e, t, n, r, i, o, a, s, l, c, u, d) {
    "use strict";
    var f, p, h, m, g, v, b, y, w, k, x, C, S, T, M, E, L;
    $(".comments").click(function () {
        var e, t;
        t = $(this).data("id"), e = $("#comment-" + t), !!e.data("opened") == !1 ? (r.init(e), r.get(t, e, !1), e.removeClass("hidden"), e.data("opened", !0)) : e.toggleClass("hidden")
    }), $(document).scroll(function () {
        $.cookie("showRegister") || ($(".widget-register").removeClass("hidden"), $(".widget-register .close").on("click", function () {
            $.cookie("showRegister", "false", {
                expires: 30,
                path: "/"
            }), $(".widget-register").addClass("widget-register-slideDown"), setTimeout(function () {
                $(".widget-register").remove()
            }, 1e3)
        }))
    }), $(".widget-vote button, .answerAccept, #sideFollow,.edit-btn").tooltip({container: "body"}), S = new d, f = $("#activate"), $("#answerEditor").focus(function () {
        u.userId || u.login(), S.render("#answerEditor", "edit", function () {
            var e;
            setTimeout(function () {
                $(".wmd-input").focus()
            }, 0), u.userRank < 30 && (e = $('<div id="answerNotify" class="alert alert-warning mb0"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><p class="h4 mt0">你正在撰写答案</p><p>如果你是要对问题或其他回答进行点评或询问，请使用“评论”功能。</p></div>').hide(), $("form.editor-wrap").before(e), e.slideDown(), $("#answerNotify .close").click(function () {
                return e.slideUp(), !1
            }))
        }), $("#answerSubmit").removeClass("hide"), i.bind(S, function () {
            this["do"] = "saveAnswer", this.type = "answer", this.text = S.getVal(), this.id = $("#draftId").val(), this.questionId = $("#questionId").val(), this.weibo = $("#shareToWeibo:checked").length
        })
    }), x = void 0, $("#questionDel, #questionClose, .answerIgnore, .answerDel").click(function (e) {
        x = e.target, $("#delete-modal").on("shown.bs.modal", function () {
            $(this).find("[type=radio]").first().focus()
        }).modal("show")
    }), "true" === $.cookie("dontlikeShare") && $("#shareToWeibo").removeAttr("checked"), $("#shareToWeibo").click(function () {
        $("#shareToWeibo:checked").length > 0 ? $.cookie("dontlikeShare", !1, {path: "/"}) : $.cookie("dontlikeShare", !0, {path: "/"})
    }), f.length > 0 && $("#answerText").click(function () {
        f.modal("show")
    }), $("#answerIt").click(function (e) {
        var t, n, r;
        t = $(this), e.preventDefault(), r = S.getVal(), n = $(this).data("id"), t.attr("disabled", "disabled"), $("#shareToWeibo:checked").length > 0 && $.cookie("shareAnswerToWeibo", !0, {path: "/"}), $.post("/api/question/" + n + "/answers/add", {
            text: r,
            id: n,
            draftId: $("#draftId").val()
        }, function (e) {
            e.status ? t.removeAttr("disabled") : (S.isSubmited = !0, window.localStorage && localStorage.removeItem("autoSaveContent_" + location.pathname), window.localStorage && localStorage.removeItem("autoSaveTitle_" + location.pathname), location.reload())
        })
    }), $(".like, .hate").likeHate(), $(".commentReply").click(function () {
        var e, t, n, i, o, a;
        t = $(this).parents(".widget-comments").data("id"), e = $("#comment-" + t), o = $(this).data("userid"), a = $(this).data("username"), n = $(this).data("id"), i = $(this).parents(".widget-comments__item").siblings(".widget-comments__form"), r.init(e), r.get(t, e, !1, null, function () {
            r.reply({userId: o, username: a, commentId: n, form: i})
        }), e.removeClass("hidden"), e.data("opened", !0)
    }), $(".commentDel").click(function () {
        var e, t, n, i;
        t = $(this).parents(".widget-comments").data("id"), e = $("#comment-" + t), i = $(this).data("username"), n = $(this).data("id"), r.init(e), r.get(t, e, !1, null, function () {
            var e;
            e = {id: n, commentId: t, username: i}, r["delete"](e)
        }), e.removeClass("hidden"), e.data("opened", !0)
    }), $(".commentEdit").click(function () {
        var e, t, n;
        n = $(this).data("id"), t = $(this).parents(".widget-comments").data("id"), e = $("#comment-" + t), r.init(e), r.get(t, e, !1, null, function () {
            r.edit({id: n, content: e.find("#" + n + " .comment-content")})
        }), e.removeClass("hidden"), e.data("opened", !0)
    }), $("#SFEventObject").length > 0 && (M = JSON.parse($("#SFEventObject").attr("value")), v = M.current[0], g = M.current[1], w = M.root[1], h = void 0, "comment" === v ? (h = $("#comment-" + w), r.init(h), r.get(w, h, !0, g), h.addClass("in")) : "answer" === v && (Array.isArray(g) || (g = [g]), m = null, g.forEach(function (e) {
        $("#a-" + e).length && ($("#a-" + e + " .post-offset").addClass("highlight"), setTimeout(function () {
            $("#a-" + e + " .post-offset").removeClass("highlight")
        }, 3e3), m = $("#a-" + e))
    }), $("body").scrollTop(m.offset().top))), $(".postComment").click(function () {
        r.set({
            trigger: $(this),
            form: $(this).parents(".widget-comments__form"),
            textarea: $(this).parents(".widget-comments__form").find("textarea"),
            reply: $(this).parents(".widget-comments__form").data("reply")
        })
    }), $("#sideBookmark").click(function () {
        var e;
        e = $(this), e.hasClass("active") ? n.editBookmark(e, function (t, n) {
            0 === n && e.removeClass("active").text("收藏"), $("#sideBookmarked").text(t.data)
        }) : n.addBookmark(e, function (t) {
            e.addClass("active").text("已收藏"), $("#sideBookmarked").text(t.data)
        })
    }), $("#sideFollow").click(function () {
        var e, t;
        e = $(this), t = e.hasClass("active"), e.text("加载中").attr("disabled", "disabled"), $.post("/api/" + e.data("type") + "/" + e.data("id") + "/" + e.data("do"), function (n) {
            0 === n.status ? (e.siblings("strong").text(n.data), t ? e.removeClass("active").data("do", "follow").text("关注") : e.addClass("active").data("do", "follow/cancel").text("已关注")) : e.text(t ? "已关注" : "关注"), e.removeAttr("disabled")
        })
    }), $(".answerAccept").click(function () {
        var e, t, n;
        e = $(this), n = e.hasClass("active"), t = n ? "/accept/cancel" : "/accept", e.text("加载中").attr("disabled", "disabled"), $.post("/api/answer/" + e.data("id") + t, function (t) {
            0 === t.status ? window.location.reload() : e.text(n ? "取消采纳" : "采纳答案"), e.removeAttr("disabled")
        })
    }), $(".answerUnIgnore").click(function () {
        var e;
        return e = $(this), e.text("加载中"), $.post("/api/answer/" + e.data("id") + "/ignore/cancel", function (t) {
            0 === t.status ? window.location.reload() : e.text("取消忽略")
        }), !1
    }), $(".answerUnDel").click(function () {
        var e;
        return e = $(this), e.text("加载中"), $.post("/api/answer/" + e.data("id") + "/delete/cancel", function (t) {
            0 === t.status ? window.location.reload() : e.text("取消删除")
        }), !1
    }), $(".showIgnored").click(function () {
        return $(".ignored").each(function () {
            $(this).toggle()
        }), !1
    }), $("#questionOpen, #questionHide, #questionShow, #questionPublish, #questionPush, #questionUnpush").click(function () {
        $.sfAjax($(this), function () {
            location.reload()
        })
    }), $("#questionSite").click(function () {
        var e;
        e = $(this).data("id"), o({
            title: "推送到子站",
            content: '<label class="required">请选择子站:</label><ul id="siteList" class="list-inline mb0"></ul>',
            show: function () {
                $.getJSON("/api/sites", function (e) {
                    var t, n;
                    n = '<li><a href="javascript:void(0);" class="btn btn-default btn-sm mb10" data-id="{{ id }}"><img class="avatar-16 mr5" src="{{ thumbnailUrl }}">{{ name }}</a></li>', t = "", e.data.forEach(function (e) {
                        t += c(n, e)
                    }), $("#siteList").html(t), $("#siteList .btn").click(function () {
                        $("#siteList .btn").removeClass("active btn-success"), $(this).addClass("active btn-success")
                    })
                })
            },
            doneFn: function () {
                var t;
                t = $("#siteList .active").data("id"), $.post("/api/question/" + e + "/site/" + t, function (e) {
                    0 === e.status && location.reload()
                }, "json")
            }
        })
    }), $("#draftId").val() && ($("body,html").animate({scrollTop: $("#draftId").siblings("h4").offset().top}), $("#answerEditor").click()), E = $("#questionId").val(), T = '<form class="invite-popup" autocomplete="off" action="/api/question/' + E + '/invite/user" method="POST" id="question">\n    <div style="position: relative;">\n        <ul class="nav nav-tabs">\n            <li class="active"><a data-by="username" href="#by-username" data-toggle="tab">站内邀请</a></li>\n            <li><a data-by="email" href="#by-email" data-toggle="tab">Email 邀请</a></li>\n            <li><a data-by="weibo" href="#by-weibo" data-toggle="tab">新浪微博邀请</a></li>\n        </ul>\n        <br>\n        <div class="tab-content">\n            <div class="tab-pane active" id="by-username" data-type="username">\n                <div class="search-user" id="questionSlug">\n                    <input id="atInput" class="text-28 form-control" type="text" name="slug" autocomplete="off" placeholder="输入对方用户名" />\n                </div>\n                <p class="help-block">您可以邀请站内用户来解答问题<br/>有针对性的邀请才能提高问题解决效率</p>\n            </div>\n            <div class="tab-pane" id="by-email" data-type="email">\n                <div class="mb10">\n                    <input class="text-28 form-control" type="email" name="mail" placeholder="Email 地址" />\n                </div>\n                <p><textarea class="textarea-13 form-control share-content" rows="5"></textarea></p>\n            </div>\n            <div class="tab-pane" id="by-weibo" data-type="weibo">\n                <div class="input-group mb10">\n                    <span class="input-group-addon">@</span>\n                    <input type="text" class="text-28 form-control" placeholder="微博用户名">\n                </div>\n                <p><textarea class="textarea-13 form-control share-content" rows="5"></textarea></p>\n            </div>\n        </div>\n    </div>\n</form>', $(".inviteBtn").click(function () {
        var e, t;
        return t = "", e = $(this), E = $(this).data("id"), o({
            title: "邀请", content: T, show: function () {
                $(".share-content").each(function () {
                    $(this).val("我在 @SegmentFault 上遇到了问题「" + e.data("title") + "」 → " + e.data("url") + "，希望您能帮我解答 ")
                }), $(".modal-content").css("overflow", "initial"), t = $("#atInput").typeHelper({
                    maxNum: 1,
                    remoteData: "/api/users/search"
                }), $("#atInput").focus()
            }, doneFn: function () {
                var e, n, r, i, o, a;
                switch (n = $(".tab-pane.active").data("type"), e = $(".invite-popup"), n) {
                    case"username":
                        if (a = _.map(t.result, function (e) {
                                return e.slug
                            }), a.length)return $.post("/api/question/" + E + "/invite/user", {slug: a[0]}, function (e) {
                            0 === e.status && window.location.reload()
                        });
                        break;
                    case"email":
                        return r = $("#by-email input.text-28", e).val(), i = $("#by-email textarea.textarea-13", e).val(), $.post("/api/question/" + E + "/invite/mail", {
                            mail: r,
                            text: i
                        }, function (e) {
                            0 === e.status && window.location.reload()
                        });
                    case"weibo":
                        return i = $("#by-weibo textarea.textarea-13", e).val(), o = $("#by-weibo input.text-28").val(), o = "" === o ? "" : " @" + o, window.open("http://service.weibo.com/share/share.php?title=" + i + o + "&appkey=1742025894", "_blank")
                }
            }
        }), !1
    }), C = $(".widget-share").data("text"), k = "", $(".tagPopup .tag").each(function () {
        var e;
        e = $(this).data("img"), e && (k = e)
    }), k || (k = "http://tp1.sinaimg.cn/2036070420/180/40003289296/0"), b = $(".question.fmt").text().trim().replace(/\s+/g, " "), b = b.slice(0, 40), new a(".widget-share", {
        image: k,
        text: "【" + C + "】分享自 @SegmentFault，问题传送门：",
        title: "【" + C + "】分享自 @SegmentFault，问题传送门：",
        networks: {
            renren: {title: C + " - SegmentFault", description: b + "... ", comment: ""},
            douban: {title: C + " - SegmentFault", description: b + "... ", comment: ""},
            twitter: {text: "【" + C + "】分享自 @segment_fault，问题传送门：", title: "【" + C + "】分享自 @segment_fault，问题传送门："}
        }
    }), $(".tagPopup").hoverIntent(function () {
        var e;
        e = $(this).find(".tag"), $(".tag").tagPopup("hide"), e.tagPopup("show")
    }, function () {
        var e;
        e = $(this).find(".tag"), e.tagPopup("hide")
    }), l($(".main")), s(), $("#questionLoginMore").click(function (e) {
        e.preventDefault(), u.login()
    }), $("#delete-modal").on("show.bs.modal", function () {
        var e, t, n, r;
        r = $(x).data("type"), t = $(x).data("do"), n = $(x).data("isauthor"), e = $("#delete-modal .btw"), e.hide(), $(".radio-del input[type=radio]").change(function () {
            $(".radio-del.btwRadio input").prop("checked") ? e.show() : e.hide()
        }), $(".radio-del").hide(), $(".radio-del.all, ." + r + "-" + t + "-only").show(), n && (e.siblings().hide(), e.show(), e.find(".mt20").hide())
    }), $("#submit-delete").click(function () {
        var e, t;
        return t = $(this), (e = $("#deleteDesc").val() || $(".radio-del input:checked").val()) ? ($(this).attr("disabled", "disabled"), void $.post("/api/" + $(x).data("type") + "/" + $(x).data("id") + "/" + $(x).data("do"), {reason: e}, function (e) {
            t.removeAttr("disabled"), 0 === e.status && location.reload()
        }, "json")) : ($(".btw").addClass("has-error"), void $("#deleteDesc").after('<p class="help-block">请填写理由</p>'))
    }), $("#directReport").click(function () {
        var e;
        e = $(this).data("id"), o({
            title: "与已有问题重复",
            content: '<form><div class="form-group"><input class="form-control" name="redirectId" type="text" id="directId" placeholder="已有问题的 URL 或 ID" autofocus="true" /></div></form>',
            show: function () {
                $("#directId").bind("input", function () {
                    var e;
                    e = $("#directId").val().replace(/[^\d]/g, ""), $.get("/api/question/" + e, function (e) {
                        !e.status && e.data ? ($("#directId").hide().after('<p><a class="btn btn-default" href="' + e.data.url + '" target="_blank">' + e.data.title + '</a><a href="javascript:void(0);" class="i-cancel ml10 delete-result">×</a></p>'), $(".delete-result").click(function () {
                            $(this).parent("p").remove(), $("#directId").val("").show().focus()
                        })) : $(this).parent("p").remove()
                    })
                })
            },
            doneFn: function () {
                var t;
                t = $("#directId").val().replace(/[^\d]/g, ""), $.post("/api/question/" + e + "/redirect", {redirectId: t}, function (e) {
                    console.log(e), e.status || location.reload()
                })
            }
        })
    }), L = void 0, p = $(".dont-likeweibo"), p.click(function () {
        $.cookie("dontlikeShare", !0, {path: "/"})
    }), "true" === $.cookie("shareQuestionToWeibo") && (L = "http://service.weibo.com/share/share.php?url=" + window.location + "&title=我在 @SegmentFault 提问了【" + $("#questionTitle").text() + "】，传送门：&appkey=1742025894", $("#shareToWeiboModal").find("#shareLink").attr("href", L), $("#shareToWeiboModal").modal("show"), $.removeCookie("shareQuestionToWeibo", {path: "/"})), "true" === $.cookie("shareAnswerToWeibo") && (L = "http://service.weibo.com/share/share.php?url=" + window.location + "/" + $(".widget-answers__item").last().attr("id") + "?utm_source=Weibo&title=我在 @SegmentFault 回答了【" + $("#questionTitle").text() + "】，传送门：&appkey=1742025894", $("#shareToWeiboModal").find("#shareLink").attr("href", L), $("#shareToWeiboModal").modal("show"), $.removeCookie("shareAnswerToWeibo", {path: "/"})), $("#reloadCaptcha").click(function () {
        $(this).find("img").attr("src", "/user/captcha?w=178&h=35")
    }), y = $("#mail").val(), $("#user").submit(function (e) {
        var t, n, r, i, o, a;
        e.preventDefault(), t = $(this), n = t.find("input").not("input[disabled]"), i = n.index($("input:focus")), o = n.slice(i + 1), r = !1, o.length && o.each(function () {
            var e, t;
            return t = $(this).attr("type"), e = ["text", "email", "password", "url"], $(this).val() || -1 === e.indexOf(t) ? void 0 : ($(this).focus(), r = !0, !1)
        }), r || (t.find("button[type=submit]").attr("disabled", "disabled"), y = $("input[name=mail]").val(), a = {
            mail: y,
            name: $("input[name=name]").val(),
            password: $("input[name=password]").val(),
            captcha: $("#captcha").val(),
            ref: $("input[name=ref]").val()
        }, $.post("/api/user/register", a, function (e) {
            t.find("button[type=submit]").removeAttr("disabled"), 0 === e.status ? location.reload() : ($("#captcha").val(""), $("#reloadCaptcha img").attr("src", "/user/captcha?w=178&h=35"), e.data[1].captcha && ($("#captcha").removeAttr("disabled"), $("#captcha").parents(".captcha-part").show()))
        }))
    })
}), define("qa_question", function () {
});