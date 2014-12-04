一つ目のコマンドラインの引数が URL 文字列である、 HTTP のデーターをロード (※)するアプリを書いてください。サーバからの**全て**（最初のイベントだけではなく）のデータを集めて二行をコンソールに書き出してください。

一行目は文字数です。二行目はサーバから受け取った全てのデータを文字列で出力してください。

----------------------------------------------------------------------
## ヒント

二つの方法があります：

**1)** 全ての `data` イベントの結果を集めて `end` イベントの時に書き出してください。

**2)** サードパーティのパッケージを使ってもいいです。以下の二つのパッケージはこの問題に関して役に立ちます。 `bl` (Buffer List) や `concat-stream`。いずれかを選んでください。

  <http://npm.im/bl>
  <http://npm.im/concat-stream>

Node.js のパッケージをインストールするために Node.js のパッケージ管理ツールである `npm`を使ってください。コマンドラインに以下を書いてください：

```sh
$ npm install bl
```

上記を実行すると、指定されたパッケージの一番新しいバーションをダウンロードして `node_modules` という新しいフォルダに格納します。そのフォルダにあるパッケージは `require` を使って `.` の接頭辞なしで利用できます：

```js
var bl = require('bl')
```

メモ： Node.js のロードの優先順位は、まずNode.jsのコア、その後は上述の `node_modules`のフォルダの順です。

インターネットに接続出来ない場合には `node_modules` に{rootdir:/node_modules}のフォルダのパッケージをコピーしてください：

  {rootdir:/node_modules/bl}
  {rootdir:/node_modules/concat-stream}

`bl` にも `concat-stream` にも `Stream` を入力として *pipe* (※) できます。以下の例では`Stream` が終わってからコールバックが呼ばれています：
※ pipe: Stream中に流れるデータが次々と橋渡しされる関数を登録すること。

```js
response.pipe(bl(function (err, data) { /* ... */ }))
// or
response.pipe(concatStream(function (data) { /* ... */ }))
```

メモ：もしかしたら `Buffer` から `data.toString()` をつかって文字列に変換する必要があるかもしれません。

モジュールのドキュメントは `{appname}` と一緒にインストールされているのでブラウザーでこのリンクを見てください:

  {rootdir:/docs/bl.html}
  {rootdir:/docs/concat-stream.html}

----------------------------------------------------------------------



