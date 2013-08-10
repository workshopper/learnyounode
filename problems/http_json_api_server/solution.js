var http = require('http');
var urlparse = require('url').parse;

function json(res, obj) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(obj));
}

var server = http.createServer(function (req, res) {
  var url = urlparse(req.url, true);
  var time = new Date(url.query.iso);
  var obj;

  if (url.pathname === '/api/parse') {
    obj = {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds()
    };
    return json(res, obj);
  }
  if (url.pathname === '/api/unixtime')
    return json(res, {unixtime: +time});

  res.writeHead(404);
  res.end();
});
server.listen(8001);
