var dx = [-1, 0, 1, 0];
var dy = [0, 1, 0, -1];

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
var n = maze.length;
var m = maze[0].length;

var game = null;
var player = null;
var floor = null;
var tiles = null;

var Item = cc.Layer.extend({
    ch:null,
    xx:0,
    yy:0,
    ctor:function () {
        this._super();
    },
    genFloor:function(c) {
        this.removeAllChildren();
        var bg; if (c == 0) bg = new cc.Sprite(res.tower_png, cc.rect(1*32, 0, 32, 32));
        else bg = new cc.Sprite(res.tower_png, cc.rect(6*32, 0, 32, 32));
        bg.setAnchorPoint(0, 0);
        this.addChild(bg);
    },
    genHero:function(){
        this.removeAllChildren();
        var bg; bg = new cc.Sprite(res.hero_png, cc.rect(0, 0, 32, 32));
        bg.setAnchorPoint(0, 0);
        this.addChild(bg);
    },
    genStair:function(){
        this.removeAllChildren();
        var bg; bg = new cc.Sprite(res.tower_png, cc.rect(32*1, 32*31, 32, 32));
        bg.setAnchorPoint(0, 0);
        this.addChild(bg);
    },
    genImage:function(c){
    },
    tryMove:function(d){
        var t = new cc.moveBy(0.2, cc.p(dx[d] * 32, dy[d] * 32));
        this.runAction(t);
    },
    doMove:function(d) {
    }
});

Item.create = function () {
    var t = new Item();
    return this;
};


var GameLayer = cc.Layer.extend({

    floorLayer:null,
    tilesLayer:null,

    setLv: function(){

        this.floorLayer = new cc.Layer();
        this.floorLayer.setPosition(120, 120);
        this.addChild(this.floorLayer);

        this.tilesLayer = new cc.Layer();
        this.tilesLayer.setPosition(120, 120);
        this.addChild(this.tilesLayer);

        floor = []; tiles = [];
        for (var i=0;i<n;++i){
            floor[i] = []; tiles[i] = [];
            for (var j=0;j<m;++j){
            }
        }

        genWalls();

        var size = cc.director.getWinSize();
        for (var i=0;i<n;i++){
            for (var j=0;j<m;j++){
                var c = maze[i][j]; t = new Item(); t.setContentSize(tileSize, tileSize);
                t.genFloor(c); this.floorLayer.addChild(t); t.setPosition(i*(tileSize), j*(tileSize)); tiles[i][j] = t;

                if (i == 0 && j == m-1){
                    var t = new Item(); t.setContentSize(tileSize, tileSize); t.genHero(c);
                    t.xx = i; t.yy = j; this.tilesLayer.addChild(t); t.setPosition(i*(tileSize), j*(tileSize));
                    player = t;
                }
            }
        }
     },

    ctor:function () {
        this._super(); game = this;

        if ('keyboard' in cc.sys.capabilities) {
            cc.eventManager.addListener({
                event: cc.EventListener.KEYBOARD,
                onKeyPressed: function (key, event) {
                    if (key == 37 || key == 65){ // A
                        player.tryMove(0);
                    }
                    else if (key == 38 || key == 87){ // W
                        player.tryMove(1);
                    }
                    else if (key == 39 || key == 68){ // D
                        player.tryMove(2);
                    }
                    else if (key == 40 || key == 83){ // S
                        player.tryMove(3);
                    }
                    //if (isWin()) doWin();
                },
                onKeyReleased: function (key, event) {
                }
            }, this);
        } else {
            cc.log("KEYBOARD Not supported");
        }
        this.setLv();
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