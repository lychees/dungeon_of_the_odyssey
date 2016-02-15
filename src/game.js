var dx = [-1, 0, 1, 0];
var dy = [0, 1, 0, -1];

var genTime = [];

var maze = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0],
];

var monsters = [];

var n = maze.length;
var m = maze[0].length;
var tx, ty;
//alert('ok2');

var game = null;
var player = null;
var floor = null;
var tiles = null;

var Item = cc.Layer.extend({
    ch:null,
    xx:0,
    yy:0,
    dir:0,
    state:0,

    ctor:function () {
        this._super();
    },
    genShadow:function(c) {
        this.removeAllChildren();
        var bg;
        if (c == 0) bg = new cc.Sprite(res.tower_png, cc.rect(1*32, 3*32, 32, 32));
        else if (c == 1) bg = new cc.Sprite(res.tower_png, cc.rect(6*32, 1*32, 32, 32));
        else bg = new cc.Sprite(res.tower_png, cc.rect(3*32, 4*32, 32, 32));

        bg.setAnchorPoint(0, 0);
        this.addChild(bg);
    },
    genFloor:function(c) {
        this.removeAllChildren();
        var bg; if (c == 0) bg = new cc.Sprite(res.tower_png, cc.rect(1*32, 0, 32, 32));
        else{
            //bg = new cc.Sprite(res.tower_png, cc.rect(6*32, 0, 32, 32));
            bg = new cc.Sprite(res.tower_png, cc.rect(3*32, 4*32, 32, 32));
        }
        bg.setAnchorPoint(0, 0);
        this.addChild(bg);
    },
    genHero:function(){
        this.removeAllChildren();
        var bg; bg = new cc.Sprite(res.hero_png, cc.rect(0, 0, 32, 32));
        bg.setAnchorPoint(0, 0);
        this.addChild(bg);
    },
    genMonster:function(){
        this.removeAllChildren();
        var bg; bg = new cc.Sprite(res.monster01_png, cc.rect(0, 0, 32, 32));
        bg.setAnchorPoint(0, 0);
        this.addChild(bg);
    },
    genStair:function(d){
        this.removeAllChildren();
        var bg; bg = new cc.Sprite(res.tower_png, cc.rect(32*1, 32*31, 32, 32));
        bg.setAnchorPoint(0, 0);
        this.addChild(bg);
    },
    genImage:function(c){
    },
    tryMove:function(d){
        var x = this.xx + dx[d], y = this.yy + dy[d];
        if (!inMaze(x, y)) return false;
        if (maze[x][y]) return false;
        this.doMove(d);
        return true;
    },
    doMove:function(d) {
        this.xx += dx[d]; this.yy += dy[d];
        if (this.xx == tx && this.yy == ty){
            game.setLv(tx, ty);
        }
        var t = new cc.moveBy(0.2, cc.p(dx[d] * 32, dy[d] * 32));
        this.runAction(t);
    }
});

Item.create = function () {
    var t = new Item();
    return this;
};

var _T = 0.1;

var GameLayer = cc.Layer.extend({

    scroll_view:null,
    floorLayer:null,
    tilesLayer:null,
    shadowLayer:null,
    timer:0,

    update: function(){
        this.timer -= 1.0/60;
        if (this.timer < 0) {
            this.timer = _T;
            if (player.state == 1){
                player.tryMove(player.dir);
            }
        }
    },


    onCallback: function()
    {
        var angle = this.getChildByTag(101).getAngle();
        cc.log("回调:" + angle);
    },

    setLv: function(sx, sy){


        this.floorLayer.removeAllChildren();
        this.tilesLayer.removeAllChildren();
        this.shadowLayer.removeAllChildren();

        floor = []; tiles = []; monsters = [];
        for (var i=0;i<n;++i){
            floor[i] = []; tiles[i] = []; monsters[i] = [];
            for (var j=0;j<m;++j){
                monsters[i][j] = 0;
            }
        }

        genWalls(sx, sy);


        var E = [];
        for (var i=0;i<n;i++) {
            for (var j=0;j<m; j++) {
                if (maze[i][j] == 0 && (i != sx || j != sy)){
                    E.push(i*m+j);
                }
            }
        }

        //var tt = parseInt(Math.random() * E.length);

        random_shuffl(E);

        var tt = 0;
        tx = parseInt(E[tt] / m);
        ty = E[tt] % m;

        //if (Math.random < 0.5){
        tt = 1;
        var xx = parseInt(E[tt] / m);
        var yy = E[tt] % m;
        monsters[xx][yy] = 1;
        //}


        //cc.log(tx); cc.log(ty);

        var size = cc.director.getWinSize();
        for (var i=0;i<n;i++){
            for (var j=0;j<m;j++){

                var t = new Item(); t.setContentSize(tileSize, tileSize);
                t.genShadow(0); this.shadowLayer.addChild(t); t.setPosition(i*(tileSize), j*(tileSize));

                //setInterval(t.genShadow(1), 10000);

                t.runAction(new cc.Sequence(new cc.DelayTime(genTime[i][j] / 100), new cc.CallFunc(function(t) {
                    t.genShadow(1);
                    t.runAction(new cc.Sequence(new cc.DelayTime(0.2), new cc.CallFunc(function(t) {
                        t.genShadow(2);
                    })));
                })));

                //var action = new cc.moveBy(2, cc.p(cageb.x, size.height*0.336)); //定义一个action
                //var callback = new cc.CallFunc(function(){},this);  //定义一个回调
                //var act = new cc.Sequence(action, callback);  //顺序执行
                //cageb.runAction(act);

                var c = maze[i][j]; var t = new Item(); t.setContentSize(tileSize, tileSize);
                t.genFloor(c); this.floorLayer.addChild(t); t.setPosition(i*(tileSize), j*(tileSize)); tiles[i][j] = t;

                if (i == sx && j == sy){
                    var t = new Item(); t.setContentSize(tileSize, tileSize); t.genHero();
                    t.xx = i; t.yy = j; this.tilesLayer.addChild(t); t.setPosition(i*(tileSize), j*(tileSize));
                    player = t;
                }

                if (i == tx && j == ty){
                    var t = new Item(); t.setContentSize(tileSize, tileSize); t.genStair(0);
                    t.xx = i; t.yy = j; this.tilesLayer.addChild(t); t.setPosition(i*(tileSize), j*(tileSize));
                }

                if (monsters[i][j] != 0){
                    var t = new Item(); t.setContentSize(tileSize, tileSize); t.genMonster(monsters[i][j]);
                    t.xx = i; t.yy = j; this.tilesLayer.addChild(t); t.setPosition(i*(tileSize), j*(tileSize));
                }
            }
        }
     },


    ctor:function () {
        this._super(); game = this; this.timer = 0.5;
        n = 31, m = 15;

        var GameScene = ccs.load(res.GameScene_json);
        this.addChild(GameScene.node);
        this.scroll_view = ccui.helper.seekWidgetByName(GameScene.node, "scroll_view");

        this.scroll_view.setInnerContainerSize(cc.size(n*tileSize, m*tileSize));
        this.floorLayer = new cc.Layer();
        this.floorLayer.setPosition(0, 0);
        this.scroll_view.addChild(this.floorLayer);

        this.tilesLayer = new cc.Layer();
        this.tilesLayer.setPosition(0, 0);
        this.scroll_view.addChild(this.tilesLayer);


        this.shadowLayer = new cc.Layer();
        this.shadowLayer.setPosition(0, 0);
        this.scroll_view.addChild(this.shadowLayer);


        var joystick = new Joystick(res.JoystickBG_png, res.Joystick_png, 50, TouchType.FOLLOW, DirectionType.EIGHT);
        joystick.setPosition(cc.p(100, 100));
        joystick.setSpeedwithLevel1(1);
        joystick.setSpeedwithLevel2(2);
        //joystick.setOpacity(128);
        //joystick.setEnable(true);
        joystick.callback = this.onCallback.bind(this);
        this.addChild(joystick, 10, 101);


        var size = cc.winSize;

        if ('keyboard' in cc.sys.capabilities) {
            cc.eventManager.addListener({
                event: cc.EventListener.KEYBOARD,
                onKeyPressed: function (key, event) {
                    var _T = _T * 2;
                    if (key == 37 || key == 65){ // A
                        //if (player.state == 1 && player.dir == 0) return;
                        player.tryMove(0);
                        /*this.timer = _T;
                        player.state = 1;
                        player.dir = 0;*/
                    }
                    else if (key == 38 || key == 87){ // W
                        //if (player.state == 1 && player.dir == 1) return;
                        player.tryMove(1);
                        /*this.timer = _T;
                        player.state = 1;
                        player.dir = 1;*/
                    }
                    else if (key == 39 || key == 68){ // D
                        //if (player.state == 1 && player.dir == 2) return;
                        player.tryMove(2)
                        /*this.timer = _T;
                        player.state = 1;
                        player.dir = 2;*/
                    }
                    else if (key == 40 || key == 83){ // S
                        //if (player.state == 1 && player.dir == 3) return;
                        player.tryMove(3)
                        /*this.timer = _T;;
                        player.state = 1;
                        player.dir = 3;*/
                    }
                    //if (isWin()) doWin();
                },
                onKeyReleased: function (key, event) {
                    player.state = 0;
                }
            }, this);
        } else {
            cc.log("KEYBOARD Not supported");
        }
        this.setLv(0, m-1);
        this.scheduleUpdate();
        return true;
    }
});

var GameScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new GameLayer();
        this.addChild(layer);
        //cc.audioEngine.playMusic("res/sounds/bgm.mp3", true);
    }
});


var WelcomeLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        this.scheduleUpdate();
        var size = cc.winSize;
        var welcome_scene = ccs.load(res.WelcomeScene_json);
        this.addChild(welcome_scene.node);

        var lbl_Title = ccui.helper.seekWidgetByName(welcome_scene.node, "lbl_title");
        var btn_Start = ccui.helper.seekWidgetByName(welcome_scene.node, "btn_start");
        var btn_Setting = ccui.helper.seekWidgetByName(welcome_scene.node, "btn_setting");
        var btn_About = ccui.helper.seekWidgetByName(welcome_scene.node, "btn_about");

        if ("touches" in cc.sys.capabilities){
            btn_Start.addTouchEventListener(this.startBtnTouched, this);
            btn_Setting.addTouchEventListener(this.settingBtnTouched, this);
            btn_About.addTouchEventListener(this.aboutBtnTouched, this);

        } else {
            btn_Start.addClickEventListener(this.startBtnClicked.bind(this));
            btn_Setting.addClickEventListener(this.settingBtnClicked.bind(this));
            btn_About.addClickEventListener(this.aboutBtnClicked.bind(this));

        }
        return true;

    },

    update: function () {
    },

    startBtnTouched: function (sender, type){
        switch (type) {
            case ccui.Widget.TOUCH_BEGAN:
                cc.audioEngine.stopAllEffects();
                cc.audioEngine.playEffect(res.Effect_mp3, false);
                cc.director.runScene(new cc.TransitionSlideInR(0.5, new GameScene()));
                break;
        }
    },

    startBtnClicked: function (sender) {
        cc.audioEngine.stopAllEffects();
        cc.audioEngine.playEffect(res.Effect_mp3, false);
        cc.director.runScene(new cc.TransitionSlideInR(0.5, new GameScene()));
    },

    settingBtnTouched: function (sender, type){
        /*switch (type) {
            case ccui.Widget.TOUCH_BEGAN:
                cc.audioEngine.stopAllEffects();
                cc.audioEngine.playEffect(res.Effect_mp3, false);
                cc.director.runScene(new cc.TransitionSlideInR(0.5, new SettingScene()));
                break;
        }*/
    },

    settingBtnClicked: function (sender) {
        //cc.audioEngine.stopAllEffects();
        //cc.audioEngine.playEffect(res.Effect_mp3, false);
        //cc.director.runScene(new cc.TransitionSlideInR(0.5, new SettingScene()));
    },

    aboutBtnTouched: function (sender, type){
        /*switch (type) {
            case ccui.Widget.TOUCH_BEGAN:
                cc.audioEngine.stopAllEffects();
                cc.audioEngine.playEffect(res.Effect_mp3, false);
                cc.director.runScene(new cc.TransitionSlideInR(0.5, new AboutScene()));
                break;
        }*/
    },

    aboutBtnClicked: function (sender) {
        //cc.audioEngine.stopAllEffects();
        //cc.audioEngine.playEffect(res.Effect_mp3, false);
        //cc.director.runScene(new cc.TransitionSlideInR(0.5, new AboutScene()));
    }
});

var WelcomeScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new WelcomeLayer();
        this.addChild(layer);
    }
});