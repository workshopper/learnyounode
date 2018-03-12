const fs = require('fs');
const path = require('path');

function fileFilter(dir, filterFiles, cb) {
  fs.readdir(dir, function (err, files) {
    if (err) {
      return cb(err);
    }

    files = files.filter(function(file) {
      return path.extname(file) === '.' + filterFiles;
    })

    cb(null, files);
  });
}

module.exports = fileFilter;
