常に同じテキストファイルを返す、HTTP の**サーバ**を書いてください。

1つ目のコマンドライン引数で供給されているポートでサーバを 起動 します。

2つ目の引数は、返すテキストファイルのパスです。ファイルを返すためは `fs.createReadStream()` を使う必要があります。

----------------------------------------------------------------------
## ヒント

今回は HTTP 専用のサーバになるので一般的な TCP サーバよりも Node.js の `http` コアモジュールを使った方が良いでしょう。
`net` モジュールと同じく `http.createServer()` 関数があります。
ただし、そのサーバが受信するのは `HTTP` リクエストです。

`http.createServer()` の第1引数であるリスナー関数は、コネクションの度に毎回呼ばれます。

一般的なHTTPリクエストリスナー関数の例：

```js
function listener (request, response) { /* ... */ }
```

上記の例の2つの引数は `HTTP` のリスナーにおける代表的なものです。
第1引数の `request` には HTTP のプロパティが入ります。例：ヘッダーやクエリ文字列。
第2引数の `response` は、クライアントにヘッダーやボディを返すためのオブジェクトです。
また、`request` や `response` は Node.js における **Stream** です！**Stream** なので、他の **Stream** 由来のシステムと送受信するのにぴったりです。

`http.createServer()` はサーバのオブジェクトを返します。指定したポートで起動するためには、サーバオブジェクトの `server.listen(portNumber)` を呼んでください。

一般的な Node の HTTP サーバは次のように記述されています：

```js
const http = require('http')
const server = http.createServer(function (req, res) {
  // request handling logic...
})
server.listen(8000)
```

`http` モジュールのドキュメントは、このリンクをブラウザで見てください:

  {rootdir:/docs-nodejs/http.html}

`fs` と言う Node のコアモジュールには、ファイルを stream できる API があります。
コマンドラインの第2引数（テキストファイルへのパス）を `fs.createReadStream()` に渡すとそのファイルを表す Stream オブジェクトがもらえます。
その Stream は `src.pipe(dst)` を使って `src` の Stream を `dst` の Stream に繋げることができます。

このようにファイルのデータ Stream は HTTP のレスポンス Stream に繋げられます。
