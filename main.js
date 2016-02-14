var trace = function(){
    cc.log(Array.prototype.join.call(arguments, ", "));
};

cc.game.onStart = function(){
    if(!cc.sys.isNative && document.getElementById("cocosLoading")) //If referenced loading.js, please remove it
        document.body.removeChild(document.getElementById("cocosLoading"));

    cc.view.enableRetina(cc.sys.os === cc.sys.OS_IOS || cc.sys.os === cc.sys.OS_OSX);
    cc.view.adjustViewPort(true);
    cc.view.setDesignResolutionSize(1136, 640, cc.ResolutionPolicy.SHOW_ALL);
    cc.view.resizeWithBrowserSize(true);

    cc.LoaderScene.preload(g_resources, function () {
        cc.director.runScene(new GameScene());
    }, this);
};
cc.game.run();