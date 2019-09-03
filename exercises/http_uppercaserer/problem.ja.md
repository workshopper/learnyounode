POSTリクエストで渡される文字列を大文字に書き換えて返す **HTTP サーバ** を書いてください。

サーバは、1つ目のコマンドライン引数で与えられたポートで 起動 します。

----------------------------------------------------------------------
## ヒント

`request` や `response` オブジェクトを使う必要はありませんが、使えば楽になるでしょう。

npm には、 Stream のデータを途中で書き換えるための色々なパッケージがあります。
この問題を解決するためには `through2-map` というパッケージを使うのが最も簡単です。
`through2-map` が提供する関数を使うと、簡単に新しい「transform stream」が作成できます。`Array#map()` の Stream バーションと考えて良いです：

```js
const map = require('through2-map')
inStream.pipe(map(function (chunk) {
  return chunk.toString().split('').reverse().join('')
})).pipe(outStream)
```

上記の例では、 `inStream` のデータを使って文字列を逆順に並び替えて `outStream` に書き出しています。
入っているチャンクサイズがコントロールできないのを忘れないでください。

`through2-map` をインストールするために、以下のコマンドをコマンドラインに書いてください：

```sh
$ npm install through2-map
```

インターネットに接続できない場合は、 `node_modules` に {rootdir:/node_modules} のフォルダのパッケージをコピーしてください。

  {rootdir:/node_modules/through2-map}

`through2-map` モジュールのドキュメントは {appname} と一緒にインストールされているので、このリンクをブラウザで見てください:

  {rootdir:/docs/through2-map.html}
