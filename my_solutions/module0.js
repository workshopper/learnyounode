const fs = require('fs');
const path = require('path');
module.exports = function(dir, ext, callback) {
    fs.readdir(dir, 'utf-8', function (err, dir_contents) {
        if(err) {
            return callback(err);
        } else {
            var files = [];
            ext = '.' + ext;
            dir_contents.forEach(function(element) {
                var file_extension = path.extname(element);
                if(file_extension === ext) {
                    files.push(element);
                }
            });
            callback(null, files);
        }
    }); 
};
