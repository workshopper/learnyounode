const fs        = require('fs')
    , path      = require('path')
    , os        = require('os')
    , onlyAsync = require('workshopper/verify-calls').verifyOnlyAsync

    , files = [
          'learnyounode.dat'
        , 'learnyounode.txt'
        , 'learnyounode.sql'
        , 'api.html'
        , 'README.md'
        , 'data.json'
        , 'data.dat'
        , 'words.dat'
        , 'w00t.dat'
        , 'w00t.txt'
        , 'wrrrrongdat'
      ]

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
    , modUseTrack : trackFile
    , verify      : onlyAsync.bind(null, trackFile)
  }
}