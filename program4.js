var fs = require("fs");
var file = process.argv[2];

fs.readFile(file, function(err, data) {
  var result = data.toString().split("\n").length - 1;
  console.log(result);
});
