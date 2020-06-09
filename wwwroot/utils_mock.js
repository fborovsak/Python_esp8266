Element.prototype.appendBefore = function (element) {
    element.parentNode.insertBefore(this, element);
}, false;

Element.prototype.appendAfter = function (element) {
    element.parentNode.insertBefore(this, element.nextSibling);
}, false;

const t7 = async () => {
    const $ = document.querySelectorAll.bind(document);
    const temps = $("template");
    const decode = (h) => {
        const t = document.createElement('textarea');
        t.innerHTML = h;
        return t.value;
    };
    const t = {};
    for (let temp of temps) {
        const s = decode(temp.innerHTML.trim());
        if (temp.hasAttribute("partial")) {
            Template7.registerPartial(temp.id, s);
        } else {
            t[temp.id] = Template7.compile(s);
        }
        temp.remove();
    }
    const tags = $("t7");
    for (let tag of tags) {
        const {tipo,def,get} = tag.attributes;
        if (tipo && def) {
            const node = document.createElement(tipo.value);
            if (get) {
                const r = await f.getJ(get.value);
                node.innerHTML = t[def.value](r);
            } else {
                node.innerHTML = t[def.value]();
            }
            node.appendAfter(tag);
        }
        tag.remove();
    }
    const elems = $("[t7]");
    for (let elem of elems) {
        const {def,get} = elem.attributes;
        if (def) {
            if (get) {
                const r = await f.getJ(get.value);
                elem.innerHTML = t[def.value](r);
                elem.removeAttribute("get");
            } else {
                elem.innerHTML = t[def.value]();
            }
            elem.removeAttribute("def");
        }
        elem.removeAttribute("t7");
    }
}

const f = {
    get: async(url) => {
        if (url.includes('pins_')) {
            return '[["Pin(0)", 1], ["Pin(2)", 1], ["Pin(4)", 0], ["Pin(5)", 0], ["Pin(12)", 1], ["Pin(13)", 1], ["Pin(14)", 1], ["Pin(15)", 0]]';
        } else if (url.includes('files_')) {
            return '["/", [["boot.py", 228], ["main.py", 263], ["webrepl_cfg.py", 18], ["utilidades.py", 506], ["ap.txt", 66], ["files_.py", 442], ["miniHttp.py", 497], ["server.py", 3120], ["wwwroot", [["index.html", 210], ["files.html", 1317], ["pins.html", 936], ["pins_.py", 393], ["files_.py", 591], ["utils.js", 1947]]]]]';
        }
    },
    getJ: async(url) => {
        return JSON.parse(await f.get(url));
    }
}

t7();
