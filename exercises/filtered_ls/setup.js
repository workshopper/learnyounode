const fs        = require('fs')
    , path      = require('path')
    , os        = require('os')
    , onlyAsync = require('workshopper/verify-calls').verifyOnlyAsync
    , files     = require('./file-list')

module.exports = function () {
  var dir       = path.join(os.tmpDir(), 'learnyounode_' + process.pid)
    , trackFile = path.join(os.tmpDir(), 'learnyounode_' + process.pid + '.json')

  fs.mkdirSync(dir)
  files.forEach(function (f) {
    fs.writeFileSync(path.join(dir, f), 'nothing to see here', 'utf8')
  })

  return {
      args        : [ dir, 'dat' ]
    , stdin       : null
    , modUseTrack : {
          trackFile : trackFile
        , modules   : [ 'fs' ]
      }
    , verify      : onlyAsync.bind(null, trackFile)
  }
}
