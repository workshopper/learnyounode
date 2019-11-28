const http = require("http");
const fs = require("fs");
var port = Number(process.argv[2]);
var path = process.argv[3];

const server = http.createServer((req, res) => {
  var file = fs.createReadStream(path);
  file.pipe(res);
});
server.listen(port);
