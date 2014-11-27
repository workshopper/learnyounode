POSTリクエストのボディを大文字に書き換えて返事する HTTP の**サーバ** を書いてください。

サーバは最初の引数で供給されているポートをリッスンします。

----------------------------------------------------------------------
## ヒント

`request` や `response` オブジェクトは使う必要がありませんが使ったら楽になると思います。

Streamのデータを途中書き換えるためには npm に色んなパッケージがあります。この問題のために `through2-map` が一番簡単です。

`through2-map` はただ一つのメソードを使って新しい「transform stream」が作られます。`Array#map()`のStreamバーションと考えていいです：

```js
var map = require('through2-map')
inStream.pipe(map(function (chunk) {
  return chunk.toString().split('').reverse().join('')
})).pipe(outStream)
```

以前の例は`inStream`のデータを使って文字列に書き換えして裏面して`outStream`に書き出します。チャンクの文字裏面のコードが書いてあります！
入っているチャンクサイズがコントロールできないのを忘れないでください。

`through2-map`をインストールするためにこれをコマンドラインに書いてください：

```sh
$ npm install through2-map
```

インタネットのコネクションがない場合は`node_modules`に{rootdir:/node_modules}のフォルダのパッケージをコピーしてください。

  {rootdir:/node_modules/through2-map}

`through2-map`のモジュールドキュメントは{appname}と一緒にインストールされてブラウザーを使ってこのリンクにアクセスできます:

  {rootdir:/docs/through2-map.html}

----------------------------------------------------------------------
