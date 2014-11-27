'/api/parsetime'への GET リクエストの時に JSON のデータをサーブする HTTP **サーバ** を書いてください。リクエストのクエリはに 'iso' と言う ISO フォーマットのタイムスタンプパラメーターがもらいます。

すなわち：

  /api/parsetime?iso=2013-08-10T12:10:15.474Z

返事はそのタイムスタンプの時間、分、病のデータを 'hour', 'minute' and 'second'のJSONプロパッティです:

```json
{
  "hour": 14,
  "minute": 23,
  "second": 15
}
```

'/api/unixtime'への GET リクエストも作ってください。あそこに同じクエリプロパッティを使って UNIX のepoch time を'unixtime'のポロッパティに返事してください：

```json
{ "unixtime": 1376136615474 }
```

サーバは最初の引数で供給されているポートをリッスンします。

----------------------------------------------------------------------
## ヒント

リクエストによって正しいエンドポイント選ぶために`request`オブジェクトの`url`プロパッティを使ってください。

クエリをURLからをパースするためにNode.jsのコアモジュール`url`が役に立ちます。`url.parse(request.url, true)` は `request.url` のコンテンツをパースして役に立つオブジェクトを返事します。

例のためにコマンドラインにこれを読んでください：

```sh
$ node -pe "require('url').parse('/test?q=1', true)"
```

`url`のモジュールドキュメントはブラウザーを使ってこのリンクにアクセスできます:
  {rootdir:/node_apidoc/url.html}
  
サーバからのリスポンスはJSONの文字列のフォーマットにしてください。`JSON.stringify()` について調べたほうがいいです。

良いインターネットのメンバになった方がいですから Content-Type のヘッダーつけてください:

```js
res.writeHead(200, { 'Content-Type': 'application/json' })
```

JavaScript `Date` オブジェクトはISOフォーマットをプリントできます。例えば：`new Date().toISOString()`を使って。`Date`のオブジェクトを作るときはISOの時間をパースできます： `new Date(isoString)`. `Date#getTime()` も役に立つと思います。

----------------------------------------------------------------------
