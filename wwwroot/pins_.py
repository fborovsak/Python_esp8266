def serve(method):
    import machine
    pins = [machine.Pin(i, machine.Pin.IN) for i in (0, 2, 4, 5, 12, 13, 14, 15)]

    if (method == "GET"):
        values = [(str(p), p.value()) for p in pins]
        import ujson
        return ujson.dumps(values)
    elif (method == "POST"):
        values = ['["%s",%d]' % (str(p), p.value()) for p in pins]
        return '[%s]' % ','.join(values)
