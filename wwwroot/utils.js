Element.prototype.appendBefore = function (element) {
    element.parentNode.insertBefore(this, element);
}, false;

Element.prototype.appendAfter = function (element) {
    element.parentNode.insertBefore(this, element.nextSibling);
}, false;

const t7 = async () => {
    const temps = document.body.getElementsByTagName("template");
    const t = {};
    for (let temp of temps) {
        if (temp.hasAttribute("partial")) {
            Template7.registerPartial(temp.id, temp.innerHTML);
        } else {
            t[temp.id] = Template7.compile(temp.innerHTML);
        }
        temp.remove();
    }
    const tags = document.body.getElementsByTagName("t7");
    for (let tag of tags) {
        const {tipo,def,get} = tag.attributes;
        if (tipo && def) {
            const node = document.createElement(tipo.value);
            if (get) {
                const r = { result: await f.getJ(get.value) };
                node.innerHTML = t[def.value](r);
            } else {
                node.innerHTML = t[def.value]();
            }
            node.appendAfter(tag);
        }
        tag.remove();
    }
    const elems = document.body.querySelectorAll("[t7]");
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
        try{ 
            return (await fetch(url, { method: 'GET' })).text();
        } catch (e) {
            throw e;
        }
    },
    getJ: async(url) => {
        return JSON.parse(await f.get(url));
    }
}

t7();