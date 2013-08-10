const through    = require('through')
    , hyperquest = require('hyperquest')
    , bogan      = require('boganipsum')
    , fs         = require('fs')
    , path       = require('path')
    , os         = require('os')

module.exports = function () {
  var file    = path.join(os.tmpDir(), 'learnyounode_' + process.pid + '.txt')
    , outputA = through()
    , outputB = through()

  setTimeout(function () {
    var hqa
      , hqb

    hqa = hyperquest.get('http://localhost:8000')
    hqa.pipe(outputA)

    hqb = hyperquest.get('http://localhost:8001')
    hqb.pipe(outputB)
  }, 500)

  fs.writeFileSync(file, bogan({ paragraphs: 1, sentenceMax: 1 }), 'utf8')

  return {
      args : [ file ]
    , a    : outputA
    , b    : outputB
    , long : true
  }
}