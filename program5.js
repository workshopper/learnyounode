var fs = require("fs");
var path = require("path");

var file = process.argv[2];
var ext = process.argv[3];

fs.readdir(file, function(err, list) {
  list.forEach((element) => {
    if (path.extname(element) === "." + ext) {
      console.log(element);
    }
  });
});
