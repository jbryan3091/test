function FindProxyForURL(url, host) {
    // Definir el host de retool
    var retoolHost = "*.retool.com";

    // Verificar si el tráfico es hacia retool.com
    if (shExpMatch(host, retoolHost)) {
        // Direccionar tráfico a través del proxy residencial de Oxilabs
        return "PROXY us-pr.oxylabs.io:10000";
    }

    // Si no es retool.com, no usar proxy
    return "DIRECT";
}