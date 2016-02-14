
var dx = [-1, 0, 1, 0];
var dy = [0, 1, 0, -1];

var h_walls = null;
var v_walls = null;

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
    [0, 0, 0, 15, 0, 0],
    [0, 0, 0, 0, 0, 0],
];

/* 插头 dp
var b = [], bb = [];
var _M = 3;

var encode = function(){

}

var decode = function(var s){

}

var ck = function(){

}

var pre, cur;

void roll(){
    cur >>= _M;
}

var genWalls = function(){
    h_walls = []; v_walls = [];

    var n = maze.length;
    var m = maze[0].length;

    cc.log(n);

    for (var i=0;i<n-1;++i){
        h_walls[i] = [];
        for (var j=0;j<m;++j){
            h_walls[i][j] = 0;
        }
    }

    for (var i=0;i<n;++i){
        v_walls[i] = [];
        for (var j=0;j<m-1;++j){
            v_walls[i][j] = 0;
        }
    }

    cur = Math.random() * (1<<m);
    var id = 0;
    for (var i=0;i<m;++i){
        b[i] = id;
        if (y & (1<<i))
    }

    for (var x=1; x<n; ++x){
        for (var y=0; y<m; ++y) {



        }
    }
}*/

/*
var Q = [];

var inMaze = function(x, y){
    var n = maze.length;
    var m = maze[0].length;
    return x >= 0 && x < n && y >= 0 && y < m;
}

var grid = cc.Layer.extend({
    x: 0,
    y: 0,
    xx: 0,
    yy: 0;
    isH: 0;
}

var genWalls = function(){
    h_walls = []; v_walls = [];

    var n = maze.length;
    var m = maze[0].length;

    cc.log(n);

    for (var i=0;i<n-1;++i){
        h_walls[i] = [];
        for (var j=0;j<m;++j){
            h_walls[i][j] = 1;
        }
    }

    for (var i=0;i<n;++i){
        v_walls[i] = [];
        for (var j=0;j<m-1;++j){
            v_walls[i][j] = 1;
        }
    }

    var vis = [];
    for (var i=0;i<n;++i){
        vis[i] = [];
        for (var j=0;j<m;++j){
            vis[i][j] = 0;
        }
    }

    var Q = [];
    var x = 0, y = m-1; vis[x][y] = 1;
    for (var d=0;d<4;++d) {
        var xx = x + dx[d], yy = y + dy[d];
        if (inMaze(xx, yy) && !vis[xx][yy]){
            var t = new grid();
            t.x = xx; t.y = yy;

            Q.push(t)
        }
    }

    while (Q.length()){
        var p = Math.random() * Q.length();

    }
}

var genWallsNaive = function(){
       h_walls = [];
    v_walls = [];

    var n = maze.length;
    var m = maze[0].length;

    for (var i=0;i<n-1;++i){
        h_walls[i] = [];
        for (var j=0;j<m;++j){
            h_walls[i][j] = (Math.random() * 2 < 1);
        }
    }

    for (var i=0;i<n;++i){
        v_walls[i] = [];
        for (var j=0;j<m-1;++j){
            v_walls[i][j] = (Math.random() * 2 < 1);
        }
    }
}
*/


var genWalls = function(){
    h_walls = [];
    v_walls = [];

    var n = maze.length;
    var m = maze[0].length;

    for (var i=0;i<n-1;++i){
        h_walls[i] = [];
        for (var j=0;j<m;++j){
            h_walls[i][j] = (Math.random() * 2 < 1);
        }
    }

    for (var i=0;i<n;++i){
        v_walls[i] = [];
        for (var j=0;j<m-1;++j){
            v_walls[i][j] = (Math.random() * 2 < 1);
        }
    }
}



var game = null;

var player = null;
var floor = null;
var tiles = null;
var walls = null;

var Item = cc.Layer.extend({
    ch:null,
    xx:0,
    yy:0,

    ctor:function () {
        this._super();
    },

    /*highlight:function(c){
        this.removeAllChildren();
        var xi = 3, yi = 0;
        if (this.ch == '*') ++yi;
        var bg = new cc.Sprite(res.tiles_theme1_png, cc.rect(xi*tileSize, yi*tileSize, tileSize, tileSize));
        bg.setAnchorPoint(0, 0);
        this.addChild(bg);
    },*/

    genFloor:function() {
        this.removeAllChildren();
        var bg; bg = new cc.Sprite(res.wall_png, cc.rect(65, 0, 32, 32));
        bg.setAnchorPoint(0, 0);
        this.addChild(bg);
    },
    genWall:function(t, d){
        this.removeAllChildren();
        var bg;

        var ox = 0;
        if (t == 1) ox = 32;

        if (d == 0) {
            bg = new cc.Sprite(res.wall_png, cc.rect(ox, 0, 32, 2));
        }
        else if (d == 1){
            bg = new cc.Sprite(res.wall_png, cc.rect(ox, 0, 2, 32));
            bg.setPosition(32-2, 0);
        }
        else if (d == 2){
            bg = new cc.Sprite(res.wall_png, cc.rect(ox, 0, 32, 2));
            bg.setPosition(0, 32-2);
        }
        else{
            bg = new cc.Sprite(res.wall_png, cc.rect(ox, 0, 2, 32));
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
    genStair:function(){
        this.removeAllChildren();
        var bg; bg = new cc.Sprite(res.tower_png, cc.rect(32*1, 32*31, 32, 32));
        bg.setAnchorPoint(0, 0);
        this.addChild(bg);
    },
    genImage:function(c){
    },

    tryMove:function(d){
    },

    doMove:function(d) {
    }
});

Item.create = function () {
    var t = new Item();
    return this;
};


var GameLayer = cc.Layer.extend({

    tilesLayer:null,

    setLv: function(){
        //this.scroll_view.removeAllChildren();
        var len = 5; var size = cc.winSize;
        var n = maze.length;
        var m = maze[0].length;

        tiles = [];
        this.tilesLayer = new cc.Layer();
        this.tilesLayer.setPosition(120, 120);
        this.addChild(this.tilesLayer);

        for (var i=0;i<n;++i){
            //grid[i] = [];
             tiles[i] = [];
            for (var j=0;j<m;++j){
                //grid[i][j] = _grid[m-j-1][i];
            }
        }

        genWalls();

        var size = cc.director.getWinSize();
        for (var i=0;i<n;i++){
            for (var j=0;j<m;j++){


                cc.log(i);

                var c = maze[i][j], t = new Item();
                t.setContentSize(tileSize, tileSize); t.genFloor(c);
                t.xx = i; t.yy = j; this.tilesLayer.addChild(t); t.setPosition(i*(tileSize), j*(tileSize)); tiles[i][j] = t;


                if (i == 0 && j == m-1){
                    var t = new Item(); t.setContentSize(tileSize, tileSize); t.genHero(c);
                    t.xx = i; t.yy = j; this.tilesLayer.addChild(t); t.setPosition(i*(tileSize), j*(tileSize));
                    player = t;

                    var arror = new cc.Sprite(res.tower_png, cc.rect(32*3, 32*29, 32, 32));
                    arror.setAnchorPoint(0, 0);

                    this.tilesLayer.addChild(arror); arror.setPosition((i-1)*(tileSize), j*(tileSize));


                }

                if (i != n-1) {
                    if (h_walls[i][j] == 1) {
                        var t = new Item(); t.setContentSize(tileSize, tileSize); t.genWall(1, 2);
                        t.xx = i; t.yy = j; this.tilesLayer.addChild(t);
                        t.setPosition(i * (tileSize), j * (tileSize));
                    }
                    if (j != 0 && h_walls[i][j-1] == 1){
                        var t = new Item(); t.setContentSize(tileSize, tileSize); t.genWall(1, 0);
                        t.xx = i; t.yy = j; this.tilesLayer.addChild(t);
                        t.setPosition(i * (tileSize), j * (tileSize));
                    }
                }

                if (j != m-1) {
                    if (v_walls[i][j] == 1) {
                        var t = new Item(); t.setContentSize(tileSize, tileSize); t.genWall(1, 1);
                        t.xx = i; t.yy = j; this.tilesLayer.addChild(t);
                        t.setPosition(i * (tileSize), j * (tileSize));
                    }
                    if (i != 0 && v_walls[i-1][j] == 1){
                        var t = new Item(); t.setContentSize(tileSize, tileSize); t.genWall(1, 3);
                        t.xx = i; t.yy = j; this.tilesLayer.addChild(t);
                        t.setPosition(i * (tileSize), j * (tileSize));
                    }
                }

                if (i == n-1 && j == 0){
                    var t = new Item(); t.setContentSize(tileSize, tileSize); t.genStair(1);
                    t.xx = i; t.yy = j; this.tilesLayer.addChild(t); t.setPosition(i*(tileSize), j*(tileSize));
                    player = t;
                }
                if (j == 0){
                    var t = new Item(); t.setContentSize(tileSize, tileSize); t.genWall(0, 0);
                    t.xx = i; t.yy = j; this.tilesLayer.addChild(t); t.setPosition(i*(tileSize), j*(tileSize));
                }
                if (i == n-1){
                    var t = new Item(); t.setContentSize(tileSize, tileSize); t.genWall(0, 1);
                    t.xx = i; t.yy = j; this.tilesLayer.addChild(t); t.setPosition(i*(tileSize), j*(tileSize));
                }
                if (j == m-1 && i != 0){
                    var t = new Item(); t.setContentSize(tileSize, tileSize); t.genWall(0, 2);
                    t.xx = i; t.yy = j; this.tilesLayer.addChild(t); t.setPosition(i*(tileSize), j*(tileSize));
                }
                if (i == 0 && j != m-1){
                    var t = new Item(); t.setContentSize(tileSize, tileSize); t.genWall(0, 3);
                    t.xx = i; t.yy = j; this.tilesLayer.addChild(t); t.setPosition(i*(tileSize), j*(tileSize));
                }
                //res.hero_png;
                //cc.eventManager.addListener(tilesClicked.clone(), t);
                /*if (c == '@'){
                    //t.setLocalZOrder(10);
                    player = t;
                }*/
            }
        }
     },

    ctor:function () {
        this._super(); game = this;
        //var sokoban_scene = ccs.load(res.SokobanScene_json);
        //this.addChild(sokoban_scene.node);

        if ('keyboard' in cc.sys.capabilities) {
            cc.eventManager.addListener({
                event: cc.EventListener.KEYBOARD,
                onKeyPressed: function (key, event) {
                    if (key == 37 || key == 65){ // A
                    }
                    else if (key == 38 || key == 87){ // W
                    }
                    else if (key == 39 || key == 68){ // D
                    }
                    else if (key == 40 || key == 83){ // S
                    }
                    else if (key == 79){ // O
                        document.getElementById('textField').value = orders.join('');
                    }
                    else if (key == 8 || key == 90){ // back, z
                        game.back();
                    }
                    else if (key == 80){ // p
                        var grid = getGrid();
                        //$('#textField').value = "";
                        document.getElementById('textField').value = "";
                        for (var i=0;i<grid.length;++i) {
                            //$('#textField').value += grid[i];
                            //$('#textField').value += '\n';
                            document.getElementById('textField').value += grid[i];
                            document.getElementById('textField').value += '\n';
                        }
                    }
                    else if (key == 81){
                        document.getElementById('textField').value = getGrid();
                        //$('#textField').value = "";
                        document.getElementById('textField').value = "";
                        for (var i=0;i<grid.length;++i) {
                            //$('#textField').value += grid[i];
                            //$('#textField').value += '\n';
                            document.getElementById('textField').value += grid[i];
                            document.getElementById('textField').value += '\n';
                        }
                        level_submit();
                    }

                    if (isWin()) doWin();
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