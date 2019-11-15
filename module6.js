var fs = require("fs");
var path = require("path");

module.exports = function(dir, ext, returnfunc) {
  fs.readdir(dir, function(err, list) {
    var returnList = [];

    if (err) return returnfunc(err);

    for (var i in list) {
      if (path.extname(list[i]) === "." + ext) {
        returnList.push(list[i]);
      }
    }
    returnfunc(null, returnList);
  });
};
