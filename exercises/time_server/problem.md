**TCPのタイムさーば**を書いてください！

サーバは最初の引数で供給されているポートをリッスンします。それそれのコネクションに今の日付と時間（等分方法）を返事してください。

```
"YYYY-MM-DD hh:mm"
```

その後は開業です。月、日、時間や分は２文字にゼロパディングしてください。例：

```
"2013-07-06 17:42"
```

----------------------------------------------------------------------
## ヒント

この例題いのために生の TCPサーバを書いてください。HTTPとは関係がないからNode.jsの`net`モジュールが必要になります。`net`モジュールは全ての大切のネットワーキングのフィーチャーがあります。

`net`はコールバックの引数がある`net.createServer()`と言っているメソードがあります。 他のAPIと違って`createServer()`のコールバックは何回も呼ばれています。それぞれのコネクションが設立せている時コールバックが呼ばれています。署名；

```js
function callback (socket) { /* ... */ }
```

`net.createServer()` もサーバのオブジェクトを返事しています。特別のポートをリッスンするためは `server.listen(portNumber)` のように読んでください。

珍しくない　Node のTCP サーバはこのように開発されています：

```js
var net = require('net')
var server = net.createServer(function (socket) {
  // socket handling logic
})
server.listen(8000)
```

メモ：忘れないでください：ポートは最初の引数に入っています。

`socket`と言うオブジェクトに色々のmetaのデータが変えられます。ただ、その`socket`は読むと書き出すができます（`duplex`のストリームです）。今回の問題は

`socket.write(data)`を使ってデータが書き出せます。`socket.end()` はそのSocketがとじています。`.end()`は一つのオプショナル引数をつｋたって例が簡単になります。その引数はデータですので、`socket.end(data)`の例が簡単に役に立つと思います。 

`net`のモジュールドキュメントは{appname}と一緒にインストールされてブラウザーを使ってこのリンクにアクセスできます:
`net`のモユールｈ module can be found by pointing your browser here:

  {rootdir:/node_apidoc/net.html}

`new Date()`を日付のフォーマットがキャスタムなメソードがいります。`Date`の問題は色々な役に立つメソードがあります：

```js
date.getFullYear()
date.getMonth()     // 0からスタートしています
date.getDate()      // 月の日
date.getHours()
date.getMinutes()
```

`strftime(fmt, date)`と言うnpmパッケージはUnixの`date`と同じフォーマットが掻き出されています。`strftime'のドキュメントの後でします：https://github.com/samsonjs/strftime

----------------------------------------------------------------------
