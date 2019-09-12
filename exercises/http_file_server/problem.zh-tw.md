撰寫一個 HTTP **伺服器** ，可以提供它收到的 text 檔案給所有收到的請求。

第一個參數是 port ，您的伺服器應該監聽在第一個參數所給予的 port 上。

第二個參數是提供的檔案。您 **必須** 使用 `fs.createReadStream() 方法將檔案內容傳遞到回應上。

----------------------------------------------------------------------
## 提示

在這個習題中，您必須建立一個HTTP伺服器以取代原先的TCP伺服器，因此應該使用 Node 核心模組之一的 `http` 模組。就像 `net` 模組一樣， `http` 模組也有一個名為 `http.createServer()` 的方法，不過這個方法會建立一個可以用 HTTP 進行溝通的伺服器。

`http.createServer()` 會接受一個 callback 函式作為參數，每次收到連線的時候都會呼叫一次 callback 函式。這個 callback 函式有以下的語法特徵：

```js
function callback (request, response) { /* ... */ }
```

這兩個參數是代表 HTTP 請求和針對請求回應的物件。 `request` 是用來取得各種屬性，像是請求的 header 和查詢字串，而 `response` 是用來送出資料給客戶端，包含 header 和 body 。

`request` 和 `response` 當然也都是 Node 串流！這代表如果他們適合您的使用情境，您可以使用串流的抽象方法收發資料。

`http.createServer()` 也會回傳一個 `server` 的實例（instance）。要開始讓 server 監聽在特定的 port，您必須呼叫 `server.listen(portNumber)` 。

一個標準的 Node HTTP 伺服器看起來像這樣：

```js
const http = require('http')
const server = http.createServer(function (req, res) {
  // request handling logic...
})
server.listen(8000)
```

要閱讀 `http` 模組的文件，可以在瀏覽器中打開這個頁面：
  {rootdir:/docs-nodejs/http.html}

`fs` 核心模組也有一些針對檔案的串流 API 可以用。您將會需要用 `fs.createReadStream()` 把第一個參數給予的檔案建立成串流。這個方法會返回一個可以使用 `src.pipe(dst)` 方法在 `src` 和 `dst` 串流之間傳遞資料的串流物件。用這個方法就可以把檔案系統串流和 HTTP 回應串流連在一起。
