const http  = require('http')
    , words = require('boganipsum/clean_words')
        .sort(function () { return 0.5 - Math.random() })
        .slice(0, 10)


module.exports = function () {
  var server = http.createServer(function (req, res) {
    words.forEach(function (w) { res.write(w.trim()) })
    res.end()
  }).listen(9345)

  return {
      args  : [ 'http://localhost:9345' ]
    , stdin : null
    , close : server.close.bind(server)
  }
}