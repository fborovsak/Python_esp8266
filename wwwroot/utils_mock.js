const t = (id) => {
    const template = document.getElementById(id).innerHTML;
    return Template7.compile(template);
}

const f = {
    get: async(url) => {
        if (url.includes('pins_')) {
            return JSON.parse('[["Pin(0)", 1], ["Pin(2)", 1], ["Pin(4)", 0], ["Pin(5)", 0], ["Pin(12)", 1], ["Pin(13)", 1], ["Pin(14)", 1], ["Pin(15)", 0]]');
        }
    }
}