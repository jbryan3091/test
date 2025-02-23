function FindProxyForURL(url, host) {
    // Definir los dominios excluidos del proxy
    var excludedDomains = ["*.slack.com", "*.meet.google.com", "*.youtube.com"];
    
    // Verificar si el tráfico es hacia alguno de los dominios excluidos
    for (var i = 0; i < excludedDomains.length; i++) {
        if (shExpMatch(host, excludedDomains[i])) {
            return "DIRECT";
        }
    }
    
    // Direccionar tráfico a través del proxy residencial de Oxilabs
    return "PROXY 35.203.170.228:10000";
}
