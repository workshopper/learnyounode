const mymodule = require('./module0.js');
var dir = process.argv[2];
var ext = process.argv[3];
mymodule(dir, ext, callback);

function callback(err, data) {
    if(err) {
        console.log("Error: " + err);
    }
    data.forEach(function(element) {
        console.log(element);
    });
}