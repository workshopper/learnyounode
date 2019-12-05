const http = require("http");
const url = require("url");
var port = process.argv[2];

function parsetime(time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  };
}

function unixtime(time) {
  return { unixtime: time.getTime() };
}

var server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  var urlParse = url.parse(req.url, true);
  var time = new Date(urlParse.query.iso);
  var result;
  if (urlParse.pathname == "/api/parsetime") {
    result = parsetime(time);
  } else if (urlParse.pathname == "/api/unixtime") {
    result = unixtime(time);
  }
  res.end(JSON.stringify(result));
});

server.listen(port);
