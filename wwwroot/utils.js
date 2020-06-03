const t = (id) => {
    const template = document.getElementById(id).innerHTML;
    return Template7.compile(template);
}

const f = {
    get: async(url) => {
        try{ 
            const r = await fetch(url, { method: 'GET' });
            return r.json();
        } catch (e) {
            throw e;
        }
    }
}