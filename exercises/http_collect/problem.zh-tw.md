撰寫一個會對第一個參數所提供之URL（網址）發起 HTTP GET 請求（request）的程式。從伺服器收集 **所有** 的資料，並且在終端機（標準輸出，stdout）上顯示兩行以呈現這些數據。

第一行是從伺服器收到的字元（characters）數量，第二行則是伺服器回傳的完整字串（String）。

----------------------------------------------------------------------
## 提示

對於這個習題，您可以採用底下兩種方法解決習題。

**1）** 把所有「data」事件的資料都收集在一起，而不事先把資料顯示出來。當收到「end」事件的時候，就代表串流（stream）已經完成，此時就可以把輸出印到螢幕上面。

**2）** 使用第三方的套件（package） 簡化從串流中收集資料的難度。兩個不同的套件提供了有用的 API 以解決這個習題（好像還有更多！）： `bl` (Buffer List) 以及 `concat-stream` 。選一個吧！

  <https://npmjs.com/bl>
  <https://npmjs.com/concat-stream>

要安裝 Node 套件，可以使用 Node 套件管理程式 `npm` ，簡單輸入並執行：

```sh
$ npm install bl
```

接著 `npm` 就會下載並安裝最新版的套見到名為 `node_modules` 的子目錄當中。任何在這個子目錄中的套件都不用在前面預先加入「./」就可以利用 `require` 命令載入：

```js
const bl = require('bl')
```

Node 會先尋找核心模組是否有符合名稱的模組，接著會尋找 `node_modules` 目錄中是否有這個套件。

如果您沒有網路連線，可以簡單地建立一個 `node_modules` 目錄，並把 {appname} 安裝目錄下，您要用的套件目錄都複製到 `node_modules` 目錄當中。

  {rootdir:/node_modules/bl}
  {rootdir:/node_modules/concat-stream}

`bl` 和 `concat-stream` 套件都可以在串流（stream）中建立 *pipe* ，並替您收集裡面的資料。一旦串流結束，就會以收集到的資料觸發 callback 函式。

```js
response.pipe(bl(function (err, data) { /* ... */ }))
// or
response.pipe(concatStream(function (data) { /* ... */ }))
```

注意您可能需要使用 `data.toString()` 以把 Buffer 轉換成 String

要閱讀這兩個跟著 {appname} 安裝到系統上的模組文件，可以在瀏覽器中打開這個頁面：

  {rootdir:/docs/bl.html}
  {rootdir:/docs/concat-stream.html}
