var fs = require('fs');
var fname = process.argv[2];
var count = fs.readFile(fname, 'utf-8', function callback(err, file_contents) {
    //console.log(file_contents);
    console.log(file_contents.split('\n').length - 1);
    });
