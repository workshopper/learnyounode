`asenkron-hokkabazi.js` isimli bir dosya oluşturunuz.

Bu problem bir önceki problem(HTTP TOPLA) ile aynı, başka bir deyişle `http.get()` kullanmanız gerekiyor. Ama bu sefer bir URL değilde ilk üç komut satırı argümanı olarak verilecek **üç** URL ile çalışacaksınız.

Bütün URL için verilen cevaplardaki bütün içeriği toplayıp konsol(stdout)a yazdırmalısınız. Verilerin uzunluklarını yazmadan, verilerin kendilerini URL başına bir satır olarak yazdırın. Dikkat etmeniz gereken şey şu; URL'lerin verilme sırasına göre cevaplarını **yazdırmalısınız**.

----------------------------------------------------------------------
## İPUÇLARI

Üç sunucununda sizinle iyi geçineceğini düşünmeyin! Sizin beklediğiniz sırayla cevap vermeyebilirler. Yani sonuç geldiğinde yazdırayım derseniz çıktınızda ki sıralama olması gerekenden farklı olur.

Bir kuyruk oluşturup, kaç URL'in size tüm cevabı verdiğini takip etmeniz gerekiyor. Hepsi tamamlandıktan sonra verileri konsola yazdırabilirsiniz.

Node da asenkron işleri yönetmek için callback fonksiyonlarını saymak temel yöntemlerden birisidir. Bu işlem elle yapmak yerine daha iyi bir yöntem olarak [`async`](https://www.npmjs.com/package/async) ve ya [`run-parallel`](https://www.npmjs.com/package/run-parallel) paketlerini kullanabilirsiniz. Ama bu alıştırma için bunları kullanmalayın.

Programın doğru olup olmadığını kontrol etmek için aşağıdaki komutu kullanın:

```sh
$ {appname} verify asenkron-hokkabazi.js
```
