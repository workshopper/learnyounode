var dir = process.argv[2]
var ext = process.argv[3]
var cmd = 'ls -1 '+dir
var pathUtil = require('path')
require('child_process').exec(cmd, function(err,stdout){
    var files = stdout.split('\n')
    if ( ext ) {
        files = files.filter(function(file){
            return pathUtil.extname(file) === '.'+ext
        })
    }
    console.log(files.join('\n'))
})