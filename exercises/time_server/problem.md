撰寫一個 **TCP 時間伺服器** ！

Write a **TCP time server**!

你的伺服器應該持續傾聽在第一個參數提供的 port 上。每個連線，你都必須以底下的格式回應當前的日期及24小時制的時間：

Your server should listen to TCP connections on the port provided by the first argument to your program. For each connection you must write the current date & 24 hour time in the format:

```
"YYYY-MM-DD hh:mm"
```

緊接著是一個 **換行（newline）** 字元。月、日、小時、時間都必須 *填入零* 到成為2位數。例如：

followed by a **newline** character. Month, day, hour and minute must be *zero-filled* to 2 integers. For example:

```
"2013-07-06 17:42"
```

----------------------------------------------------------------------
## 提示

在這個問題中，你必須建立一個 TCP 伺服器。這裡不涉及任何 HTTP 協議，所以你需要使用擁有完整基礎網路功能，屬於 Node 核心的 `net` 模組。

For this exercise we'll be creating a raw TCP server. There's no HTTP involved here so we need to use the `net` module from Node core which has all the basic networking functions.

這個 net 模組有一個名為 `net.createServer()` 的方法，這個方法需要一個 callback 函式作為參數。不像其他的 Node callback 函式，作為參數傳入的 callback 函式會被 `createServer()` 呼叫不只一次。你的伺服器所收到的每個連線都會呼叫 callback 函式。這個 callback 函式有以下的語法特徵：

The `net` module has a method named `net.createServer()` that takes a callback function. Unlike most callbacks in Node, the callback used by `createServer()` is called more than once. Every connection received by your server triggers another call to the callback. The callback function has the signature:

```js
function callback (socket) { /* ... */ }
```

`net.createServer()` 還會回傳一個您的 `server` 的實例（instance）。您必須呼叫 `server.listen(portNumber)` 以開始監聽特定的 port 。

`net.createServer()` also returns an instance of your `server`. You must call `server.listen(portNumber)` to start listening on a particular port.

一個標準的 Node TCP 伺服器大概像這個樣子：

A typical Node TCP server looks like this:

```js
var net = require('net')
var server = net.createServer(function (socket) {
  // socket handling logic
})
server.listen(8000)
```

記得要使用第一個參數傳給你的 port number 。

Remember to use the port number supplied to you as the first command-line argument.

`socket` 物件包含一堆和連線有關的 meta-data ，不過這也是一個可讀、可寫的 Node 雙工串流（duplex Stream）。在這個問題中，我們只需要寫入資料，然後關閉 socket。

The `socket` object contains a lot of meta-data regarding the connection, but it is also a Node duplex Stream, in that it can be both read from, and written to. For this exercise we only need to write data and then close the socket.

使用 `socket.write(data)` 可以對 socket 寫入資料，以及使用 `socket.end()` 以關閉 socket 。另外， `.end()` 方法也可以加上一個 data 物件作為參數，所以你可以很簡單的這樣使用： `socket.end(data)` 。

Use `socket.write(data)` to write data to the socket and `socket.end()` to close the socket. Alternatively, the `.end()` method also takes a data object so you can simplify to just: `socket.end(data)`.

要閱讀 `net` 模組的文件，可以在瀏覽器中打開這個頁面：

Documentation on the `net` module can be found by pointing your browser here:

  {rootdir:/node_apidoc/net.html}

你會需要從 `new Date()` 建立一個自定格式的日期。這個方法的使用方式如下：

To create the date, you'll need to create a custom format from a `new Date()` object. The methods that will be useful are:

```js
date.getFullYear()
date.getMonth()     // starts at 0
date.getDate()      // returns the day of month
date.getHours()
date.getMinutes()
```

或者，你如果想要大膽一點，可以使用 npm 的 `strftime` 套件。這個 `strftime(fmt, date)` 函式使用的日期格式參數和以 unix 系統 `date` 命令相同。你可以再這裡了解更多關於 strftime 套件的使用方法： https://github.com/samsonjs/strftime

Or, if you want to be adventurous, use the `strftime` package from npm. The `strftime(fmt, date)` function takes date formats just like the unix `date` command. You can read more about strftime at: https://github.com/samsonjs/strftime

----------------------------------------------------------------------
