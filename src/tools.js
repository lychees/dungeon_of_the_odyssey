var trace = function(){
    cc.log(Array.prototype.join.call(arguments, ", "));
};

var readJson = function(str){
    var result = undefined;
    cc.loader.load(str, function(err, results){
        if(err){
            trace("Failed to load" + res.beatmaps_json);
            return;
        }
        result = results[0];
    });
    return result;
};

var objLog = function(o){
    var cache = [];
    var result = JSON.stringify(o, function(key, value) {
        if (typeof value === 'object' && value !== null) {
            if (cache.indexOf(value) !== -1) {
                // Circular reference found, discard key
                return;
            }
            // Store value in our collection
            cache.push(value);
        }
        return value;
    });
    cache = null; // Enable garbage collection
    return result;
};

var traceObj = function(obj){
  trace(objLog(obj));
};

var findFont = function(resource) {
    if (cc.sys.isNative) {
        return resource.srcs[0];
    } else {
        return resource.name;
    }
};