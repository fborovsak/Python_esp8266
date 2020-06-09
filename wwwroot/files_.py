import uos
def serve(method):
    if (method == "GET"):
        import ujson
        return ujson.dumps([["/", getDirs()]])

def getDirContent(d=""):
    dir = "/" if d == "" else d
    yield (dir, 1, [p for p in getDirFiles(d)])

def getDirFiles(d):
    dir = "/" if d == "" else d
    for f in uos.ilistdir(dir):
        if (f[1] == 0x8000):
            yield (f[0], 0, f[3])
        else:
            yield from getDirContent(d + "/" + f[0])

def getDirs(d=""):
    dir = "/" if d == "" else d
    return [(f[0], f[3] if f[1] == 0x8000 else getDirs(d+"/"+f[0])) for f in uos.ilistdir(dir)]
