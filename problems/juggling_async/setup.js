const http  = require('http')
    , bogan = require('boganipsum')
    , words = [
          bogan({ paragraphs: 1, sentenceMax: 1 }).split(' ')
        , bogan({ paragraphs: 1, sentenceMax: 1 }).split(' ')
        , bogan({ paragraphs: 1, sentenceMax: 1 }).split(' ')
      ]

function writeWords(i, delay, res) {
  words[i].forEach(function (w) { res.write(w + ' ') })
  res.end()
}

function server (i, delay, port) {
  return http.createServer(function (req, res) {
    writeWords(i, delay, res)
  }).listen(port)
}

module.exports = function () {
  var servers = [
      server(0, 100, 9345)
    , server(1, 0,   9346)
    , server(2, 50,  9347)
  ]

  return {
      args  : [
          'http://localhost:9345'
        , 'http://localhost:9346'
        , 'http://localhost:9347'
      ]
    , stdin : null
    , long  : true
    , close : function () {
        servers.forEach(function (server) {
          server.close()
        })
      }
  }
}