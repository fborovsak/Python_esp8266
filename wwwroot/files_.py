import uos
def serve(method):
    html = """<!DOCTYPE html>
    <html>
        <head> <title>ESP8266 Files</title><meta charset="utf-8"></head>
        <body> <h1>ESP8266 Files</h1>
            <table border="1"> <tr><th>Archivos</th><th>Peso</th><th colspan="3">Acciones</th></tr> %s </table>
        </body>
    </html>
    """
    return html % '\n'.join(getRowsDir())

def getRowsDir(d=""):
    dir = "/" if d == "" else d
    for f in uos.ilistdir(dir):
        if (f[1] == 0x8000):
            yield '<tr><td>%s</td><td>%d</td><td>📥</td><td>❌</td><td>♻️</td></tr>' % (f[0], f[3])
        else:
            yield '<tr><td colspan="2">%s</td><td></td><td>❌</td><td>➕</td></tr>' % f[0]
            yield from getRowsDir(d + "/" + f[0])