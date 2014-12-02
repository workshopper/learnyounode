いつも同じテキストファイルを返事する、HTTP の**サーバ**を書いてください。

サーバは最初の引数で供給されているポートをリッスンします。

二つ目の引数はサーブするファイルのパスです。ファイルを返事するためは`fs.createReadStream()`を使わないといけません。

----------------------------------------------------------------------
## ヒント

今回は HTTP 専用サーバになりますので一般的なTCPサーバより Node.js の`http`のコアモジュールを使うほうがいいです。`net`モジュールと同じく`http.createServer()`の関数があります。たたそのサーバは HTTP がわかります。

`http.createServer()`のコールバックはそれぞれのコネクションに呼ばれています。署名；

```js
function callback (request, response) { /* ... */ }
```

ある二つの引数は HTTP のリクエストやリスポンスを代表します。`request` は HTTP のプロパティーが置いてあります。例えば：ヘッダーやクエリ文字列。`response`はクライアントにヘッダーもボディも返事するためです。

`request`や`response`は Node.js の **Stream** です！役に立てば **Stream** のシステムを送るやもらえるために使えます。

`http.createServer()`はあなたのサーバのオブジェクトを返事します。ポートをリッスンのためにサーバに`server.listen(portNumber)`読んでください。


珍しくない　Node.js の HTTP サーバはこのように開発されています：

```js
var http = require('http')
var server = http.createServer(function (req, res) {
  // request handling logic...
})
server.listen(8000)
```

`http`のモジュールドキュメントはブラウザーを使ってこのリンクにアクセスできます:
  {rootdir:/node_apidoc/http.html}

`fs`と言うNode.jsのコアモジュールも stream できるAPIがあります。コマンドラインの引数を `fs.createReadStream()` に渡すとそのファイルの代表するStreamオブジェクトがもらえます。その Stream をは `src.pipe(dst)` を使って`src`の Stream を `dst` の Stream につながることができます。このようにファイルのデータ Stream を HTTP のリスポンス Stream と繋がれます。

----------------------------------------------------------------------
