function FindProxyForURL(url, host) {
    // 定义静态资源的正则表达式
    var staticResourcesRegex = /\.(css|js|jpg|jpeg|png|gif|svg|ico)$/i;
    // 指定详细网址链接
    var specificUrl = "https://whoer.net/zh/main/api/ip";

    // 检查URL是否匹配静态资源或指定网址
    if (staticResourcesRegex.test(url) || url === specificUrl) {
        // 走本地网络
        return "DIRECT";
    } else {
        // 其他请求使用默认代理设置
        return "DIRECT";
    }
}
