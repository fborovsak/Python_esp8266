import utilidades as utils

aps = [i[0].decode('utf-8') for i in utils.listarAPs()]

aplist = utils.leerCsv('ap.txt')
for p in aplist:
    if any(p[0] in ap for ap in aps):
        ssid, password = aplist[0]
        utils.conectarAP(ssid, password)
        break
