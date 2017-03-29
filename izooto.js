try { window.izConfig = JSON.parse('{"client":8898,"sourceOrigin":"https://izooto.ryzo.io","domainRoot":"","webPushId":"","webServiceUrl":"","isSdkHttps":1,"customPixelLink":"","mobileAllowed":1,"serviceWorkerName":"https://raw.githubusercontent.com/ryuichl/izooto/master/service-worker.js","manifestName":"https://raw.githubusercontent.com/ryuichl/izooto/master/manifest.json","desktopAllowed":1,"setEnr":1,"izootoStatus":1,"debug":0,"siteUrl":"https://izooto.ryzo.io","promptDelay":0,"repeatPromptDelay":0,"tagsEnabled":1,"welcomeNotification":{"status":0,"title":"","body":"","icon":"","url":"","showAfter":0,"clickTimeout":0},"locale":"zh"}');
    var container = document.body ? document.body : document.head;
    if ("" !== izConfig.customPixelLink) {
        var _izAlt = document.createElement("script");
        _izAlt.id = "izootoAlt", _izAlt.src = izConfig.customPixelLink, container.appendChild(_izAlt) } else {
        var _iz = document.createElement("script");
        _iz.id = "izootoSdk", _iz.src = "//cdn.izooto.com/scripts/sdk/izooto.js", container.appendChild(_iz) } } catch (err) {}
