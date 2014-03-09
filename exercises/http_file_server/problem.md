----------------------------------------------------------------------

## Task

Write an HTTP Server that serves the same text file for each request it receives.

----------------------------------------------------------------------

## Description

You will be provided a port and filepath as the first and second arguments to your program.

Use the `http` module from Node core to create a HTTP server. Your server will listen on the supplied port and use use `fs.createReadStream()` to get a ReadableStream of the file's content and pipe it to the HTTP Response for every request.

## Conditions

* Your server must listen on the port provided as the first argument to your program.
* You must use the `fs.createReadStream()` method to stream the file contents to the response.
* Don't forget to set the content type header!

## Resources

Documentation on the `http` module can be found by pointing your browser here:
  {rootdir:/node_apidoc/http.html}

Documentation on the `fs` module can be found by pointing your browser here:
  {rootdir:/node_apidoc/fs.html}

----------------------------------------------------------------------

## Hints

Like the `net` module, `http` also has `createServer()` method, though this server speaks HTTP rather than TCP. A typical Node HTTP server looks like this:

```js
var http = require('http')
var server = http.createServer(function (req, res) {
  // request handling logic...
})
server.listen(8000)
```

`http.createServer(callback)` returns an instance of a `http.Server`. You must call the created server's `listen(portNumber)` method to start serving requests on a given port.

`http.createServer(callback)` takes a callback that is called once for each new connection received by your server. The callback function has the signature:

```js
function callback (request, response) { /* ... */ }
```

`request` and `response` are objects of type `http.IncomingMessage` and `http.ServerResponse` respectively. These objects are your interface for reading the incoming request (e.g. url, headers, etc) and writing a corresponding response.

`request` and `response` are Node streams: `request` is a ReadableStream, and `response` is a WritableStream.

The core `fs` module also provides a streaming API in the form of `fs.createReadStream` and `fs.createWriteStream`.

Piping a `ReadableStream` to a `WritableStream` sets up a pipeline for data to flow from readable to writable, like so:

```js
readable.pipe(writable) // sends data from readable to writable
```
