const http = require("http");
const port = process.argv[2];
var map = require("through2-map");

const server = http.createServer((req, res) => {
  req
    .pipe(
      map((x) => {
        return x.toString().toUpperCase();
      })
    )
    .pipe(res);
});
server.listen(port);
