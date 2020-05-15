import network

def conectarAP(ssid, password):
    sta_if = network.WLAN(network.STA_IF)
    sta_if.connect(ssid, password)

def infoConexion():
    sta_if = network.WLAN(network.STA_IF)
    return sta_if.ifconfig()

def listarAPs():
    sta_if = network.WLAN(network.STA_IF)
    return sta_if.scan()

def leerCsv(archivo):
    lineas = []
    with open (archivo) as myfile:
        for line in myfile:
            ap = line.rstrip().split(",")
            lineas.append((ap[0], ap[1]))
    return lineas
