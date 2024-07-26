function FindProxyForURL(url, host) {
    var staticResourcesRegex = /\.(css|js|jpg|jpeg|png|gif|svg|ico)$/i;
    var specificUrl = "https://whoer.net/zh/main/api/ip";
    var specificUrl = "https://myip.mili.one/";

    if (staticResourcesRegex.test(url) || url === specificUrl) {
        return "SOCKS5 127.0.0.1:10086";
    } else {
        return "DIRECT";
    }
}
