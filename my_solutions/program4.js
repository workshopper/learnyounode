const fs = require('fs');
const path = require('path');
var dir = process.argv[2];
var ext = '.' + process.argv[3];
var count = fs.readdir(dir, 'utf-8', function callback(err, dir_contents) {
    //console.log(file_contents);
    for(var i=0; i<dir_contents.length; i++) {
        if(path.extname(dir_contents[i]) === ext) {
            console.log(dir_contents[i]);
        }
    }
    });
