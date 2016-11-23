var fs = require('fs');
var path = require("path");


var src = 'testname';

fs.readdir(src, function(err, files){
    "use strict";
    files.forEach(function(filename, index){
        console.log(filename);
        var oldname = path.join(src, filename);
        var newname = path.join(src, 'name' + filename);

        fs.rename(oldname, newname, function(err){
            !err && console.log(filename + 'ok');
        })
    })
})