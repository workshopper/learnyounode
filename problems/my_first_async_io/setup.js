const boganipsum = require('boganipsum')
    , fs         = require('fs')
    , path       = require('path')
    , os         = require('os')
    , onlyAsync  = require('workshopper/verify-calls').verifyOnlyAsync

module.exports = function () {
  var lines     = Math.ceil(Math.random() * 50)
    , txt       = boganipsum({ paragraphs: lines })
    , file      = path.join(os.tmpDir(), 'learnyounode_' + process.pid + '.tmp')
    , trackFile = path.join(os.tmpDir(), 'learnyounode_' + process.pid + '.json')

  fs.writeFileSync(file, txt, 'utf8')

  return {
      args        : [ file ]
    , stdin       : null
    , modUseTrack : {
          trackFile : trackFile
        , modules   : [ 'fs' ]
      }
    , verify      : onlyAsync.bind(null, trackFile)
  }
}