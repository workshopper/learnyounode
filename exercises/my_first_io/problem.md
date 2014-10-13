
撰寫一個程式，以 **同步（ synchronous ）** 的檔案操作方式讀入一個檔案，並在命令列上顯示該檔案的行數。這個程式的行為類似終端機命令 `cat file | wc -l` 。

程式的第一個命令列參數將是檔案的完整路徑。

----------------------------------------------------------------------
## 提示

您將會需要 Node 核心函式庫的 `fs` 模組以進行檔案系統的操作。要載入這樣的模組，或任何全域（Global）的模組，您可以使用以下的語法：

```js
var fs = require('fs')
```

現在，您可以透過變數 `fs` 以使用 `fs` 模組的完整功能。

Now you have the full `fs` module available in a variable named `fs`.

fs 模組裡所有同步（ synchronous ，或稱為阻塞， blocking ）的功能都會以「Sync」結尾。您需要使用 `fs.readFileSync('檔案路徑')` 以讀取一個檔案。這個程式會 *返回* 一個包含完整檔案內容的 `Buffer` 物件。

要閱讀 `fs` 模組的文件，可以在瀏覽器中打開這個頁面：

Documentation on the `fs` module can be found by pointing your browser here:
  {rootdir:/node_apidoc/fs.html}

任何的大量資料，無論編碼是 ASCII、二位元或其他的格式， Node 都可以用 `Buffer` 物件有效地呈現。使用 `Buffer` 本身的 `toString()` 方法，就可以簡單的把 `Buffer` 物件轉換成字串（String）。如 `var str = buf.toString()` 。


要閱讀關於 Buffer 物件的文件，可以在瀏覽器中打開這個頁面：
  {rootdir:/node_apidoc/buffer.html}

如果您正在尋找計算字串中換行符號的數目的簡單方法，請記得Javascript的 `String` 可以用換行符號「\n」作為分隔符，被 `.split()` 方法切割成一個以其他字串組成的 Array 。注意，測試檔案的最後一行不會以換行符號「\n」結尾，所以使用這個方法得到的 array 元素數目（也就是行數）將會比換行符號多一個。

----------------------------------------------------------------------