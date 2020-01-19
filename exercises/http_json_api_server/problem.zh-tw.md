撰寫一個 HTTP **伺服器** ，當伺服器收到路徑「/api/parsetime」的 GET 請求時，要回應 JSON 格式的資料。這個請求會包含一個 query ， key 是「iso」，值是 ISO 格式的時間。

如下例：

  /api/parsetime?iso=2013-08-10T12:10:15.474Z

回應的 JSON 應該只包含三個屬性：「hour」、「minute」及「second」。舉例來說：

```json
{
  "hour": 14,
  "minute": 23,
  "second": 15
}
```

您還要加入第二個可以接受相同 query ，但這次在「unixtime」屬性下回應 UNIX 時間格式（又稱為 epoch 或 POSIX 時間格式）的路徑「/api/unixtime」。

```json
{ "unixtime": 1376136615474 }
```

您的伺服器應該持續監聽在第一個參數提供的 port 上。

----------------------------------------------------------------------
## 提示

來自 HTTP 伺服器的 `request` 物件會擁有一個 `url` 屬性，您可以使用這個屬性判斷請求究竟是針對哪個路徑。

您可以使用 Node 核心模組 url 來解析 query 和網址。 `new URL(request.url)` 會解析 request.url 的內容，並提供您一個擁有好用屬性的物件。

舉例來說，在命令列中輸入：

```sh
$ node -pe "new URL('/test?q=1', 'http://example.com')"
```

要閱讀 `url` 模組的文件，可以在瀏覽器中打開這個頁面：

Documentation on the `url` module can be found by pointing your browser here:
  {rootdir:/docs-nodejs/url.html}

您的回應應該是 JSON 格式。要了解更多資訊，可以參考 `JSON.stringify()` 。

您也應該做個網路上的好公民，回應 Content-Type 屬性：

```js
res.writeHead(200, { 'Content-Type': 'application/json' })
```

Javascript 的 `Date` 物件可以用 ISO 格式顯示日期，如 `new Date().toISOString()` 。如果您把日期字串傳入 `Date` 物件，這個物件也可以用來解析時間格式。 `Date.getTime()` 也可以派上用場。
