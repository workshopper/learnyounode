1つ目のコマンドライン引数は URL 文字列です。 そのURL文字列を使ってHTTP のデータをロード (※)するアプリを書いてください。

サーバから**全て**（最初のイベントだけではなく）のデータを集め、次の2行をコンソールに出力して下さい。

1行目は文字数です。2行目はサーバから受け取った全てのデータを文字列で出力してください。

----------------------------------------------------------------------
## ヒント

2つの方法があります：

**1)** 全ての `data` イベントの結果をまとめて `end` イベントの時に書き出してください。

**2)** サードパーティ製のパッケージを使っても良いです。以下の2つのパッケージはこの問題に関して役に立ちます。 `bl` (Buffer List) か `concat-stream`のいずれかを選んでください。

  <https://npmjs.com/bl>
  <https://npmjs.com/concat-stream>

Node.js のパッケージをインストールするために Node.js のパッケージ管理ツールである `npm`を使ってください。
コマンドラインに次のコマンドを書いてください：

```sh
$ npm install bl
```

上記のコマンド実行すると、指定されたパッケージの一番新しいバーションをダウンロードして `node_modules` という新しいフォルダに格納します。
そのフォルダにあるパッケージは `require` を使って `.` の接頭辞なしで利用できます：

```js
const bl = require('bl')
```

メモ： Node.js のロードの優先順位は、まずNode.jsのコア、その後は上述の `node_modules`のフォルダの順です。
インターネットに接続できない場合には `node_modules` に{rootdir:/node_modules}のフォルダのパッケージをコピーしてください：

  {rootdir:/node_modules/bl}
  {rootdir:/node_modules/concat-stream}

`bl` も `concat-stream` も `Stream` を入力として *pipe* (※) することができます。次の例では`Stream` が終わってからコールバックが呼ばれています：
※ pipe: Stream中に流れるデータを次々と橋渡しする関数を登録すること。

```js
response.pipe(bl(function (err, data) { /* ... */ }))
// or
response.pipe(concatStream(function (data) { /* ... */ }))
```

メモ：もしかしたら `Buffer` から `data.toString()` をつかって文字列に変換する必要があるかもしれません。

モジュールのドキュメントは `{appname}` と一緒にインストールされているため、このリンクをブラウザで見てください:

  {rootdir:/docs/bl.html}
  {rootdir:/docs/concat-stream.html}
