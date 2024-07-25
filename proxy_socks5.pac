function FindProxyForURL(url, host) {
    var staticResourcesRegex = /\.(css|js|jpg|jpeg|png|gif)$/i;
    var specificUrl = "https://whoer.net/zh/main/api/ip";

    if (staticResourcesRegex.test(url) || url === specificUrl) {
        return "SOCKS5 127.0.0.1:10086";
    } else {
        return "DIRECT";
    }
}
