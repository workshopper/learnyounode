常に同じテキストファイルを返す、HTTP の**サーバ**を書いてください。

サーバは最初の引数で供給されているポートを listen するサーバです。

二つ目の引数は、返すテキストファイルのパスです。ファイルを返すためは `fs.createReadStream()` を使わないといけません。

----------------------------------------------------------------------
## ヒント

今回は HTTP 専用サーバになるので一般的な TCP サーバより Node.js の `http` コアモジュールを使った方が良いでしょう。 `net` モジュールと同じく `http.createServer()` 関数があります。ただ、そのサーバが受信するのは `HTTP` リクエストです。

`http.createServer()` の第一引数であるリスナー関数は毎コネクション時に呼ばれます。

一般的なHTTPリクエストリスナー関数の例：
```js
function listener (request, response) { /* ... */ }
```

上記の例の二つの引数は `HTTP` のリスナーにおける代表的なものです。第一引数の `request` には HTTP のプロパティが入ります。例えば：ヘッダーやクエリ文字列。第二引数の `response` はクライアントにヘッダーやボディを返すためのオブジェクトです。

`request` や `response` は Node.js における **Stream** です！**Stream** なので、他の **Stream** 由来のシステムとの送受信にうってつけです。

`http.createServer()` はあなたのサーバのオブジェクトを返します。ポートを listen するためにサーバオブジェクトの `server.listen(portNumber)` を呼んでください。

一般的な Node.js の HTTP サーバはこのように記述されています：

```js
var http = require('http')
var server = http.createServer(function (req, res) {
  // request handling logic...
})
server.listen(8000)
```

`http` モジュールのドキュメントはブラウザーでこのリンクを見てください:
  {rootdir:/node_apidoc/http.html}


`fs` と言う Node.js のコアモジュールにはファイルを stream できる API があります。コマンドラインの第二引数（テキストファイルへのパス）を `fs.createReadStream()` に渡すとそのファイルを表す Stream オブジェクトがもらえます。その Stream は `src.pipe(dst)` を使って `src` の Stream を `dst` の Stream に繋げることができます。このようにファイルのデータ Stream は HTTP のレスポンス Stream に繋げられます。

----------------------------------------------------------------------
