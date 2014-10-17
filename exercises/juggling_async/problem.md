這個問題和前一個問題（HTTP COLLECT）有點類似，您同樣需要使用 `http.get()` 方法。不過，這次您會從前三個命令列參數取得 **三個** URL（網址）。

This problem is the same as the previous problem (HTTP COLLECT) in that you need to use `http.get()`. However, this time you will be provided with **three** URLs as the first three command-line arguments.

您必須把每個網址的內容收集完整以後才顯示在終端機（標準輸出，stdout）上。您只要把資料以 String 的方式顯示就好，一個網址一行，不用顯示資料長度。重點是，您 **必須** 以命令列參數的順序顯示這些資料。

You must collect the complete content provided to you by each of the URLs and print it to the console (stdout). You don't need to print out the length, just the data as a String; one line per URL. The catch is that you **must** print them out in the same order as the URLs are provided to you as command-line arguments.

----------------------------------------------------------------------
## 提示

不要預期這三個伺服器都正常運作！他們給您完整的回應的順序不一定如您預期，因此您不能天真地在拿到資料的時候就印出來，因為它們的順序可能會亂掉。

Don't expect these three servers to play nicely! They are not going to give you complete responses in the order you hope, so you can't naively just print the output as you get it because they will be out of order.

您將需要持續追蹤有多少網址回應他們的完整內容，並把結果按照順序排好。一旦您全部完成了，就可以把這些資料顯示在終端機上。

You will need to queue the results and keep track of how many of the URLs have returned their entire contents. Only once you have them all, you can print the data to the console.

計算 callback 函式被呼叫的次數是 Node 中管理非同步（async）的重要方法之一。您可能會發現使用第三方函式庫像 [async](http://npm.im/async) 或是 [after](http://npm.im/after) 會比起自己做還要方便。但是在這個問題中，請您自己在沒有任何外部函式庫的幫助下自己嘗試。

Counting callbacks is one of the fundamental ways of managing async in Node. Rather than doing it yourself, you may find it more convenient to rely on a third-party library such as [async](http://npm.im/async) or [after](http://npm.im/after). But for this exercise, try and do it without any external helper library.

----------------------------------------------------------------------