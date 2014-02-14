const fs        = require('fs')
    , path      = require('path')
    , os        = require('os')
    , verify    = require('./verify')
    , files     = require('../filtered_ls/file-list')

    , dir       = path.join(os.tmpDir(), 'learnyounode_' + process.pid)
    , trackFile = path.join(os.tmpDir(), 'learnyounode_' + process.pid + '.json')

function setup () {
  fs.mkdirSync(dir)
  files.forEach(function (f) {
    fs.writeFileSync(path.join(dir, f), 'nothing to see here', 'utf8')
  })
}

module.exports = function () {
  setup()

  return {
      args        : [ dir, 'md' ]
    , stdin       : null
    , modUseTrack : {
          trackFile : trackFile
        , modules   : [ 'fs' ]
      }
    , verify      : verify.bind(null, dir, trackFile)
  }
}
