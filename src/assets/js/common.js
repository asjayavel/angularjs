function hasAttributes(obj) {
    if (!obj)
        return false;
    return Object.keys(obj).length > 0;
}

function getFirstAttribute(obj) {
    var first = null;
    if (!obj)
        return first;
    var keys = Object.keys(obj);
    first = (keys.length > 0) ? keys[0] : null;
    return first;
}

function formatOutput(e) {
    return void 0 === e || null === e || "boolean" == typeof e ? String(e) : "number" == typeof e ? Object.is(e, -0) ? "-0" : String(e) : "string" == typeof e ? '"' + e + '"' : Array.isArray(e) ? "Array [" + this.formatArray(e) + "]" : this.formatObject(e)
}

function writeOutput(e) {
    var t = document.querySelector("#js_out"),
        n = t.textContent,
        r = "> " + e + "\n";
    t.textContent = n + r;
}

console.log = function () {
    for (var e = [], r = 0, i = arguments.length; r < i; r++) {
        var o = formatOutput(arguments[r]);
        e.push(o)
    }
    var a = e.join(" ");
    writeOutput(a);
    //n.apply(console, arguments)
}