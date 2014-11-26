コマンドラインの一つ目の引数がURLを使ってHTTPのGETリクエストをするアプリを書いてください。サーバからの**全て**（初めてのイベントだけじゃなくて）のデータを集めて二行をコンソールに書き出してください。

一行目は文字カウントの整数です。二行目はサーバからの全てのいただいたデータの文字列にしてください。

----------------------------------------------------------------------
## ヒント

この問題は二つの方法があります：

**1)** 全ての`data`イベントの結果を集めて`end`イベントの時に書き出してください。

**2)** 問題が少なくなるようにサードパーティのパッケージを使ってもいいです。二つのパッケージはこの問題に関して役に立っています。`bl` (Buffer List)や `concat-stream`。一つを選んでください。

  <http://npm.im/bl>
  <http://npm.im/concat-stream>

Node.jsのパッケージをインストールためにNode.jsのパッケージマネジャー`npm`を使ってください。コマンドラインにこれを書いてください：

```sh
$ npm install bl
```

それは一番新しいバーションをダウンロードして`node_modules`という新しいフォルダに保村しています。そのフォルダにあるパッケージは`require`を使って`.`の接頭辞なしロードできます：

```js
var bl = require('bl')
```

メモ：Node.jsのロード順番ならはコアのフォルダにルックしてその後は`node_modules`のフォルダにルックします。

インタネットのコネクションがない場合は`node_modules`に{rootdir:/node_modules}のフォルダのパッケージをコピーしてください：

  {rootdir:/node_modules/bl}
  {rootdir:/node_modules/concat-stream}

集まるために`bl`にも`concat-stream`にもStreamが入力として*pipe*できます。Streamが終わってからコールバックが呼ばれています：

```js
response.pipe(bl(function (err, data) { /* ... */ }))
// or
response.pipe(concatStream(function (data) { /* ... */ }))
```

メモ：もしかしてBufferから`data.toString()`をつかって文字列に変えないといけません。

両方のモジュールドキュメントは{appname}と一緒にインストールされてブラウザーを使ってこのリンクにアクセスできます:

  {rootdir:/docs/bl.html}
  {rootdir:/docs/concat-stream.html}

----------------------------------------------------------------------
