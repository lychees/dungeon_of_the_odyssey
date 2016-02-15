
var Qx = [], Qy = []; //frontier
var vis = [];
var timer;

var inMaze = function(x, y){
    return x >= 0 && x < n && y >= 0 && y < m;
}


var enqueue = function(x, y){


    genTime[x][y] = timer++;

    var cnt = 0;
    for (var i=0;i<4;++i){
        var xx = x + dx[i], yy = y + dy[i];
        if (!inMaze(xx, yy)) continue;
        if (maze[xx][yy] == 0) ++cnt;
    }



    if (true){
        maze[x][y] = 0;
        var Ox = [], Oy = [];

        for (var i=0;i<4;++i){
            var xx = x + dx[i]*2, yy = y + dy[i]*2;
            if (!inMaze(xx, yy)) continue;
            if (maze[xx][yy] == 0){
                var xx = x + dx[i], yy = y + dy[i];
                genTime[xx][yy] = timer++;
                Ox.push(xx); Oy.push(yy);
                //maze[xx][yy] = 0;
            }
        }

        if (Ox.length) {
            var p = parseInt(Math.random() * Ox.length);
            var xx = Ox[p], yy = Oy[p];
            maze[xx][yy] = 0;
        }
    }
    else{
        //maze[x][y] = 0;
        return;
    }


    for (var i=0;i<4;++i){
        var xx = x + dx[i]*2, yy = y + dy[i]*2;
        if (!inMaze(xx, yy)) continue;
        if (!vis[xx][yy]){
            Qx.push(xx); Qy.push(yy);
            vis[xx][yy] = true;
        }
    }
}

var genWalls = function(){
    /*for (var i=0;i<n;++i){
        maze[i] = [];
        for (var j=0;j<m;++j){
            maze[i][j] = parseInt(Math.random() * 2);
        }
    }*/
    timer = 0;

    Qx = []; Qy = []; maze = []; vis = []; genTime = [];
    for (var i=0;i<n;++i){
        maze[i] = []; vis[i] = []; genTime[i] = [];
        for (var j=0;j<m;++j){
            maze[i][j] = 1; vis[i][j] = 0; genTime[i][j] = 0;
        }
    }

    ;
    var x = 0, y = m-1; vis[x][y] = true; enqueue(x, y);

    while (Qx.length){
        var len = Qx.length;
        var p = parseInt(Math.random() * len);
        var t = Qx[p]; Qx[p] = Qx[len-1]; Qx[len-1] = t; t = Qy[p]; Qy[p] = Qy[len-1]; Qy[len-1] = t;
        var x = Qx[len-1], y = Qy[len-1]; Qx.pop(); Qy.pop();
        //cc.log(x, y);
        enqueue(x, y);
    }



}