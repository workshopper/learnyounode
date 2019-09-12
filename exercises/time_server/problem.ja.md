**TCPのタイムサーバ**を書いてください！

最初のコマンドライン引数は、サーバ起動するためのポートです。それぞれのコネクションに今の日付と時間(24時間表記）を返すようにして下さい。

```
"YYYY-MM-DD hh:mm"
```

その後は改行です。
月、日、時間や分は２桁にゼロパディング(※)してください。

例：

```
"2013-07-06 17:42"
```

※ ゼロパディング：足りない桁を0で埋めること。例えば `1` を2桁にする場合は `01` となります。

----------------------------------------------------------------------
## ヒント

この例題のために生の TCP サーバを書いてください。 HTTP 専用の TCP は使っていないので Node.js の `net` モジュールが必要になります。
`net` モジュールには、基本的なネットワークの機能が全て含まれています。

`net` には、イベントハンドラのような関数を引数に取る `net.createServer()` という関数があります。
引数が関数のみでイベント名が無いのでコールバックのようですが、コールバック関数と違って何度も呼ばれます。

それぞれの接続が確立するごとに引数に定義した関数が呼ばれます。

一般的なイベントハンドラ用関数の例：

```js
function handler (eventData) { /* ... */ }
```

`net.createServer()` もサーバのオブジェクトを返します。特定のポートでリッスンするためは `server.listen(portNumber)` を呼んでください。

一般的な Node の TCP サーバは次のように記述されています：

```js
const net = require('net')
const server = net.createServer(function (socket) {
  // socket handling logic
})
server.listen(8000)
```

ポート番号には1つ目のコマンドライン引数を使いましょう。忘れないでください！

`socket` と言うオブジェクトには、色々な meta のデータが含まれます。
ただし、その `socket` は読み書きもできます。 読み書き可能なStream は`duplex Stream` といわれています。

今回の問題は、データを送信して接続を閉じるだけです。
`socket.write(data)` を使ってデータが送り出せます。

`socket.end()` は、その Socket (接続)を閉じます。`.end()` は任意の引数を1つ取ることができます。
その引数は `.write` と同じく data ですので、`socket.end(data)` などとするとコードが簡単になると思います。

`net` モジュールのドキュメントは、このリンクをブラウザで見てください:

  {rootdir:/docs-nodejs/net.html}

問題に書いてある通り `new Date()` の日付を整形する必要があります。`date` には色々な役に立つ関数があります：

```js
date.getFullYear()
date.getMonth() // 0からスタートしています
date.getDate() // 月の日
date.getHours()
date.getMinutes()
```

また、 `strftime` というnpmパッケージには、 Unix の `date` 関数と同じフォーマットで日付を整形可能な機能 `strftime(fmt, date)` があります。

`strftime' のドキュメントは次のURLを参照してください。：https://github.com/samsonjs/strftime
