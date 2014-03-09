----------------------------------------------------------------------

## Task

Write a **TCP time server**! The server should respond to each request with the current date and time.

----------------------------------------------------------------------

## Description

Your program will be passed the port to listen on as the first argument.

Your server should listen to TCP connections on the supplied port. For each connection you must write the current date & time in the below format, followed by a **newline** character:

```
"YYYY-MM-DD hh:mm"
```

Month, day, hour and minute must be *zero-filled* to 2 integers. For example:

```
"2013-07-06 07:42"
```

## Example

```
  node mytimeserver.js 5000 # start my timeserver on port 5000
```
```
  # in another terminal:
  # the following connects to port 5000 and pipes response to stdout
  node -e "require('net').connect(5000).pipe(process.stdout)"
  2014-03-09 18:56
```

## Resources

Documentation on the `net` module can be found by pointing your browser here:

  {rootdir:/node_apidoc/net.html}

----------------------------------------------------------------------

## Hints

For this exercise we'll be creating a raw TCP server. There's no HTTP involved here, so we need to use the `net` module from Node core which has all the basic networking functions.

A typical Node TCP server looks like this:

```js
var net = require('net')
var server = net.createServer(function (socket) {
  // socket handling logic
})
server.listen(8000)
```

`net.createServer()` returns an instance of `net.Server`. You must call the server's `listen(portNumber)` method to start serving requests on a given port. Remember to use the port number supplied to you as the first command-line argument.

`net.createServer()` takes a callback function. Unlike most callbacks in Node, this callback is triggered more than once. This callback is a shorthand for a 'connection' event handler, i.e. `server.on('connection', callback)`. Every connection received by your server triggers the 'connection' event and thus triggers the callback to `createServer`.

The callback function has the signature:

```js
function callback (socket) { /* ... */ }
```

A TCP connection is naturally readable and writable (i.e. Duplex) and is represented in Node as a DuplexStream passed to the `createServer()` callback (`socket` in the example above). A `DuplexStream` supports both and reading and writing. The `socket` Object also contains connection meta-data such as remote IP address and number of bytes received.

For this exercise, use `socket.write(data)` to write data to the socket and `socket.end()` to close the socket. Alternatively, the `.end()` method takes data to send a parameter, so you can simplify to just: `socket.end(data)`.

To create the date, you'll need to create a custom format from a `new Date()` object. The methods that will be useful are:

```js
date.getFullYear()
date.getMonth()     // starts at 0
date.getDate()      // returns the day of month
date.getHours()
date.getMinutes()
```

Alternatively, if you want to be adventurous, use the `strftime` package from npm. The `strftime(fmt, date)` function takes date formats just like the unix `date` command. You can read more about strftime at: https://github.com/samsonjs/strftime

----------------------------------------------------------------------
