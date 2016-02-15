var genWalls = function(){
    for (var i=0;i<n;++i){
        maze[i] = [];
        for (var j=0;j<m;++j){
            maze[i][j] = parseInt(Math.random() * 2);
        }
    }
}