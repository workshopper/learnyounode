'/api/parsetime' への GET リクエスト時に JSON のデータを返す **HTTP サーバ** を書いてください。

リクエストのクエリには 'iso' と言う ISO 形式のタイムスタンプパラメータが渡されるものとします。

すなわち：

  /api/parsetime?iso=2013-08-10T12:10:15.474Z

レスポンスは、そのタイムスタンプの時間、分、秒のデータである 'hour', 'minute' と 'second' の JSON プロパティです:

```json
{
  "hour": 14,
  "minute": 23,
  "second": 15
}
```

また、'/api/unixtime' への GET リクエストも作ってください。

そこでも同じクエリパラメーターを使って UNIX の epoch time (※) を JSON の 'unixtime' というプロパティに格納して返してください：

```json
{ "unixtime": 1376136615474 }
```

※ UNIX の epoch time ： 1970/01/01 00:00:00.000 からカウントされた時間（ミリ秒単位）

サーバは、最初のコマンドライン引数で与えられたポートで 起動 します。

----------------------------------------------------------------------
## ヒント

リクエストごとに正しいエンドポイントを選択するために `request` オブジェクトの `url` プロパティを使ってください。

クエリを URL からパースするためには Node.js のコアモジュール `url` が役に立ちます。
`new URL(request.url)` は `request.url` のコンテンツを解釈して有用なオブジェクトを返します。
例としてコマンドラインで以下のコマンドを実行してみてください：

```sh
$ node -pe "new URL('/test?q=1', 'http://example.com')"
```

`url` モジュールのドキュメントは、このリンクをブラウザで見てください:

  {rootdir:/docs-nodejs/url.html}

サーバからのレスポンスは JSON 文字列の形式にしてください。`JSON.stringify()` について調べたほうがよいです。
良きインターネットの住民であるために Content-Type ヘッダ をつけてください：

```js
res.writeHead(200, { 'Content-Type': 'application/json' })
```

JavaScript の `Date` オブジェクトは ISO 形式で出力できます。

例：`new Date().toISOString()`

逆に、`Date` のオブジェクトを作るときには ISO の時間形式も解釈できます。
例えば： `new Date(isoString)` 。 `Date#getTime()` も役に立つと思います。
