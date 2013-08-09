const http  = require('http')
    , words = require('boganipsum')({ paragraphs: 1, sentenceMax: 1 }).split(' ')

module.exports = function () {
  var server = http.createServer(function (req, res) {
    words.forEach(function (w) { res.write(w + ' ') })
    res.end()
  }).listen(9345)

  return {
      args  : [ 'http://localhost:9345' ]
    , stdin : null
    , long  : true
    , close : server.close.bind(server)
  }
}