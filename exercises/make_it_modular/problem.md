這個問題和前一個問題相同，不過這個問題主要是介紹 **模組（modules）** 的內容。您將需要建立兩個檔案來解決這個問題。

This problem is the same as the previous but introduces the concept of **modules**. You will need to create two files to solve this.

撰寫一個以副檔名作為篩選條件，列出指定資料夾內檔案的程式。程式的第一個參數是目錄的路徑，第二個參數則是篩選用的副檔名。檔案列表應該要顯示在命令列上，一個檔案一列。您 **必須** 使用非同步（asynchronous）的方式讀取目錄。


Create a program that prints a list of files in a given directory, filtered by the extension of the files. The first argument is the directory name and the second argument is the extension filter. Print the list of files (one file per line) to the console. You **must** use asynchronous I/O.

您必須撰寫一個 *模組（module）* 檔案以執行大部分的工作。這個模組必須 *提供（export）* 一個單一的函式，這個函式可接受 *三個* 參數，分別是：目錄名稱，副檔名，以及一個 callback 函式。這個函式所用的副檔名必須和傳給您程式的副檔名相同。也就是說，請不要預先把傳遞給模組函式的副檔名轉換成正規表達式（）或在前面加上一個「.」還是其他的事情，就只要單純的把這個副檔名傳給您的模組。在模組中，您可以做任何您需要進行的處理以完成您的篩選工作。

You must write a *module* file to do most of the work. The module must *export* a single function that takes **three** arguments: the directory name, the filename extension string and a callback function, in that order. The filename extension argument must be the same as was passed to your program. i.e. don't turn it into a RegExp or prefix with "." or do anything else but pass it to your module where you can do what you need to make your filter work.

callback 函式必須符合一般的 node(err, data) 慣例。這個慣例規定除非出現錯誤，否則傳給 callback 函式的第一個參數一定是 null ，而第二個參數是您的資料。在這個狀況中，拿到的資料將是以 Array 呈現，篩選後的檔案列表。如果您收到任何錯誤，例如來自您呼叫的 `fs.readdir()` ，這個 callback 函式必須收到只有一個錯誤的參數。

The callback function must be called using the idiomatic node(err, data) convention. This convention stipulates that unless there's an error, the first argument passed to the callback will be null, and the second will be your data. In this case, the data will be your filtered list of files, as an Array. If you receive an error, e.g. from your call to  `fs.readdir()`, the callback must be called with the error, and only the error, as the first argument.

模組檔案 *絕對* 不能直接輸出任何內容到終端機，只有您的程式可以。 

You **must** not print directly to the console from your module file, only from your original program.

如果您原始的檔案收到任何錯誤，簡單的檢查這個錯誤並且把錯誤訊息顯示到終端機上。

In the case of an error bubbling up to your original program file, simply check for it and print an informative message to the console.

您的模組必須遵守底下四個規範：

1. 提供一個單一功能，確實使用上述的參數。
2. 確實執行一次提供的 callback 函式，並給予一個錯誤，或是上述的資料。
3. 不可以修改任何其他東西，例如全域（Global）變數或是標準輸出（stdout）。
4. 處理可能發生的所有錯誤，並且把錯誤傳遞給 callback 函式。


These four things is the contract that your module must follow.

1. Export a single function that takes exactly the arguments described.
2. Call the callback exactly once with an error or some data as described.
3. Don't change anything else, like global variables or stdout.
4. Handle all the errors that may occur and pass them to the callback.

如果確實的遵守以上的規範，您的模組就可以被其他了解這個規範的人使用。如此一來，您的模組就可以被任何其他作過 learnyounode 的人，或是其他驗證器執行。

The benefit of having a contract is that your module can be used by anyone who expects this contract. So your module could be used by anyone else who does learnyounode, or the verifier, and just work.

----------------------------------------------------------------------
## 提示

建立一個模組，包含您的目錄閱讀及篩選功能。要定義（define）出欲 *提供（export）* 的 *單一函式（single function）* ，要把您提供的函式指派給 `module.exports` 物件，並覆寫原本的內容：

Create a new module by creating a new file that just contains your directory reading and filtering function. To define a *single function* *export*, you assign your function to the `module.exports` object, overwriting what is already there:

```js
module.exports = function (args) { /* ... */ }
```

或是您可以使用一個變數來命名這個函式，並把變數指派給 `module.exports` 物件。

Or you can use a named function and assign the name.

要在您原本的程式裡使用您建立的新模組，可以用像使用 `require('fs')` 以載入 `fs` 模組的方式呼叫 `require()` 方法。唯一不同的地方是，放在此處的模組必須以「./」開頭。所以，如果您的檔案名稱是 mymodule.js ，載入模組的方法就是：

```js
var mymodule = require('./mymodule.js')
```

「.js」副檔名是選擇性加入的，您將會常常看到這個副檔名被省略

The '.js' is optional here and you will often see it omitted.

現在，模組裡的 `module.exports` 物件將會被指派到 `mymodule` 變數。因為您已經提供了一個單一功能， `mymodule` 就成了一個您可以呼叫的函式。

You now have the `module.exports` object in your module assigned to the `mymodule` variable. Since you are exporting a single function, `mymodule` is a function you can call!

當然，您還是需要謹記在心，檢查錯誤並及早回應到 callback 函式裡是慣例。

Also keep in mind that it is idiomatic to check for errors and do early-returns within callback functions:

```js
function bar (callback) {
  foo(function (err, data) {
    if (err)
      return callback(err) // early return

    // ... no error, continue doing cool things with `data`

    // all went well, call callback with `null` for the error argument

    callback(null, data)
  })
}
```

----------------------------------------------------------------------
