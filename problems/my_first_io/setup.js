const boganipsum = require('boganipsum')
    , fs         = require('fs')
    , path       = require('path')
    , os         = require('os')

module.exports = function () {
  var lines = Math.ceil(Math.random() * 50)
    , txt   = boganipsum({ paragraphs: lines })
    , file  = path.join(os.tmpDir(), 'learnyounode_' + process.pid + '.tmp')

  fs.writeFileSync(file, txt, 'utf8')

  return { args: [ file ], stdin: null }
}