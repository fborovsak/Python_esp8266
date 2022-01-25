const $10 = async () => {
    const $ = document.querySelectorAll.bind(document);
    const dummy = {nodeValue: ""};
    const elems = [];
    let body = null;
    const renders = [];
    const $gs = (nodes) => {
        const ret = [];
        for (let node of nodes) {
            ret.push($g(node));
        }
        return ret;
    }
    const $g = (node) => {
        let n = null, t = null, f = null, g = null, ch = null;
        switch (node.nodeType) {
            case (1):
                if (node.nodeName !== "SCRIPT") {
                    const {$for, $get} = node.attributes;
                    n = node.nodeName;
                    g = $get ? $get.value : null;
                    f = $for ? $for.value : null;
                }
                break;
            case (3):
                t=node.textContent.trim();
                break;
        }
        if (node.childNodes.length) {
            ch = $gs(node.childNodes);
        }
        return {n,g,f,t,ch};
    }
    /* const tags = $("[\\$get]");
    for (let tag of tags) {
        const e = {
            node: tag.parentNode,
            cont: $gs(tag.parentNode.childNodes)
        }
        elems.push(e);
        tag.remove();
    }*/
    body = $g(document.body);

    console.log(body);
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

$10();