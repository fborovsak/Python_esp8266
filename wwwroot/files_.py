import uos
def serve(method):
    if (method == "GET"):
        return '[%s]' % getDirContent()

def getDirContent(d=""):
    dir = "/" if d == "" else d
    return '["%s",%d,%s]' % (dir, 1, '[%s]' % ','.join(getDirFiles(d)))

def getDirFiles(d):
    dir = "/" if d == "" else d
    for f in uos.ilistdir(dir):
        if (f[1] == 0x8000):
            yield '["%s",%d,%s]' % (f[0], 0, f[3])
        else:
            yield getDirContent(d + "/" + f[0])
