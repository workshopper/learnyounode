const path = require('path')
    , bold = require('../bin/term-util').bold

function fetchRequires (trackFile, callback) {
  var track    = require(trackFile)
    , main     = require.resolve(path.join(track.cwd, track.argv[1]))
    , required = track.required.filter(function (r) {
        return r != require.resolve('../bin/exec-wrapper.js')
          && r != require.resolve('../bin/module-use-tracker.js')
      })

  callback(null, main, required)
}

module.exports = fetchRequires