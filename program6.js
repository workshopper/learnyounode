var modulefunc = require("./module6.js");
var dir = process.argv[2];
var ext = process.argv[3];

modulefunc(dir, ext, function(err, list) {
  if (err) throw err;

  list.forEach((element) => {
    console.log(element);
  });
});
