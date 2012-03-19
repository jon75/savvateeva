if (typeof Crypto == "undefined" || !Crypto.util)(function () {
    var i = window.Crypto = {}, l = i.util = {rotl:function (a, c) {
        return a << c | a >>> 32 - c
    }, rotr:function (a, c) {
        return a << 32 - c | a >>> c
    }, endian:function (a) {
        if (a.constructor == Number)return l.rotl(a, 8) & 16711935 | l.rotl(a, 24) & 4278255360;
        for (var c = 0; c < a.length; c++)a[c] = l.endian(a[c]);
        return a
    }, randomBytes:function (a) {
        for (var c = []; a > 0; a--)c.push(Math.floor(Math.random() * 256));
        return c
    }, bytesToWords:function (a) {
        for (var c = [], b = 0, d = 0; b < a.length; b++, d += 8)c[d >>> 5] |= a[b] << 24 -
            d % 32;
        return c
    }, wordsToBytes:function (a) {
        for (var c = [], b = 0; b < a.length * 32; b += 8)c.push(a[b >>> 5] >>> 24 - b % 32 & 255);
        return c
    }, bytesToHex:function (a) {
        for (var c = [], b = 0; b < a.length; b++) {
            c.push((a[b] >>> 4).toString(16));
            c.push((a[b] & 15).toString(16))
        }
        return c.join("")
    }, hexToBytes:function (a) {
        for (var c = [], b = 0; b < a.length; b += 2)c.push(parseInt(a.substr(b, 2), 16));
        return c
    }, bytesToBase64:function (a) {
        if (typeof btoa == "function")return btoa(m.bytesToString(a));
        for (var c = [], b = 0; b < a.length; b += 3)for (var d = a[b] << 16 | a[b + 1] <<
            8 | a[b + 2], e = 0; e < 4; e++)b * 8 + e * 6 <= a.length * 8 ? c.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(d >>> 6 * (3 - e) & 63)) : c.push("=");
        return c.join("")
    }, base64ToBytes:function (a) {
        if (typeof atob == "function")return m.stringToBytes(atob(a));
        a = a.replace(/[^A-Z0-9+\/]/ig, "");
        for (var c = [], b = 0, d = 0; b < a.length; d = ++b % 4)d != 0 && c.push(("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(a.charAt(b - 1)) & Math.pow(2, -2 * d + 8) - 1) << d * 2 | "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(a.charAt(b)) >>>
            6 - d * 2);
        return c
    }};
    i.mode = {};
    i = i.charenc = {};
    i.UTF8 = {stringToBytes:function (a) {
        return m.stringToBytes(unescape(encodeURIComponent(a)))
    }, bytesToString:function (a) {
        return decodeURIComponent(escape(m.bytesToString(a)))
    }};
    var m = i.Binary = {stringToBytes:function (a) {
        for (var c = [], b = 0; b < a.length; b++)c.push(a.charCodeAt(b) & 255);
        return c
    }, bytesToString:function (a) {
        for (var c = [], b = 0; b < a.length; b++)c.push(String.fromCharCode(a[b]));
        return c.join("")
    }}
})();
(function () {
    var i = Crypto, l = i.util, m = i.charenc, a = m.UTF8, c = m.Binary, b = i.SHA1 = function (d, e) {
        var g = l.wordsToBytes(b._sha1(d));
        return e && e.asBytes ? g : e && e.asString ? c.bytesToString(g) : l.bytesToHex(g)
    };
    b._sha1 = function (d) {
        if (d.constructor == String)d = a.stringToBytes(d);
        var e = l.bytesToWords(d), g = d.length * 8;
        d = [];
        var n = 1732584193, h = -271733879, j = -1732584194, k = 271733878, o = -1009589776;
        e[g >> 5] |= 128 << 24 - g % 32;
        e[(g + 64 >>> 9 << 4) + 15] = g;
        for (g = 0; g < e.length; g += 16) {
            for (var q = n, r = h, s = j, t = k, u = o, f = 0; f < 80; f++) {
                if (f < 16)d[f] = e[g +
                    f]; else {
                    var p = d[f - 3] ^ d[f - 8] ^ d[f - 14] ^ d[f - 16];
                    d[f] = p << 1 | p >>> 31
                }
                p = (n << 5 | n >>> 27) + o + (d[f] >>> 0) + (f < 20 ? (h & j | ~h & k) + 1518500249 : f < 40 ? (h ^ j ^ k) + 1859775393 : f < 60 ? (h & j | h & k | j & k) - 1894007588 : (h ^ j ^ k) - 899497514);
                o = k;
                k = j;
                j = h << 30 | h >>> 2;
                h = n;
                n = p
            }
            n += q;
            h += r;
            j += s;
            k += t;
            o += u
        }
        return[n, h, j, k, o]
    };
    b._blocksize = 16;
    b._digestsize = 20
})();
