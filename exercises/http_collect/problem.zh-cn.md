编写一个程序，发起一个 HTTP GET 请求，请求的 URL 为所提供给你的命令行参数的第一个。收集**所有**服务器所返回的数据（不仅仅包括 "data" 事件）然后在终端（标准输出 stdout）用两行打印出来。

你所打印的内容，第一行应该是一个整数，用来表示你所收到的字符串内容长度，第二行则是服务器返回给你的完整的字符串结果。

----------------------------------------------------------------------
## 提示

你有两种解题方法：

**1)** 你可以把所有 "data" 事件所得的结果收集起来，暂存并追加在一起，而不是在收到后立刻打印出来。通过监听 "end" 事件，可以确定 stream 是否完成传输，如果传输结束了，你就可以将你收集到的结果打印出来了。

**2)** 使用一个第三方模块，来简化从 stream 中收集数据的繁琐步骤。这里有两个不同的模块都提供了一些有用的 API 来解决这个问题（似乎还有好多另外的模块可以选哦！）：`bl (Buffer list)` 或者 `concat-stream`，来选一个吧！

  <https://npmjs.com/bl>
  <https://npmjs.com/concat-stream>

要安装一个 Node 模块，需用到 Node 的包管理工具 `npm`，输入：

```sh
$ npm install bl
```

这样，相应的模块的最新版本便会被下载到当前目录下一个名为 `node_modules` 的子目录中。任何在这个子目录中的模块都可以简单地使用 `require` 语法来将模块载入到你的程序中，并且不需要加 `./` 这样的路径前缀，如下所示：

```js
const bl = require('bl')
```

这里，Node 会先查找是否有这个名字的核心模块，如果没有，再查找在 `node_modules` 目录下是否有这个模块。

如果你的设备没有联网，你可以简单地手工新建一个 `node_modules` 子目录，然后将你需要的模块从 {appname} 的安装目录中完整复制到 `node_modules` 中。在这里，上文提到的两个模块所在路径如下：

  {rootdir:/node_modules/bl}
  {rootdir:/node_modules/concat-stream}

你可以把一个 stream *pipe* 到 `bl` 或 `concat-stream` 中去，它们会为你收集数据。一旦 stream 传输结束，一个回调函数会被执行，并且，这个回调函数会带上所收集的数据：

```js
response.pipe(bl(function (err, data) { /* ... */ }))
// 或
response.pipe(concatStream(function (data) { /* ... */ }))
```

要注意的是你可能需要使用 `data.toString()` 来把 Buffer 转换为字符串。

这两个模块的文档已经随 {appname} 安装到你的系统中了，你可以使用浏览器访问并阅读它们：

  {rootdir:/docs/bl.html}
  {rootdir:/docs/concat-stream.html}
