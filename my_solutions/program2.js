var fs = require('fs');
var fname = process.argv[2];
var file = fs.readFileSync(fname).toString();
var count = file.split('\n').length - 1;
console.log(count);