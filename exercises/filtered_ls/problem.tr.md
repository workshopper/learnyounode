`filtrelenmis-ls.js` isimli bir dosya oluşturunuz.

Verilen dizinde ki dosyaları dosya uzantılarına göre filtreleyip listeleyen bir program yazınız. Programa birinci argüman olarak dizinin tam yolunu, ikinci argüman olarakta filtrelemekte kullanılacak dosya uzantısını veriniz.

Örneğin; eğer ikinci argüman olarak 'txt' alırsanız, dosya listesindeki **.txt ile biten** dosyaları listeleyeceksiniz. Unutmayın, ikinci argüman '.' eklenmemiş olarak verilecek.

Node un `process.argv` dizisindeki ilk iki elemanı sistem bilgileri için kullanmadığını aklınızda bulundurun. Başka bir değişle programın ilk argümanı `process.argv` dizisinin ilk elemanı değildir.

Dosya listesi konsola, her satırda bir dosya olarak şekilde yazılmalı. Asenkron G/Ç **kullanmalısınız**.

----------------------------------------------------------------------
## İPUÇLARI

`fs.readdir()` metodu birinci parametre olarak dizin adı, ve ikinci parametre olarakta bir callback fonksiyonu alır. Callback fonksiyonunun kalıbı şu şekildedir:

```js
function callback (err, list) { /* ... */ }
```

Burada ki `list` değişkeni dosya isimlerinden oluşan bir dizidir.

`fs` modülünün dökümantasyonuna, tarayıcınızdan bu adresi açarak erişebilirsiniz:
  { rootdir: /docs-nodejs/fs.html }

`path` modülü işinize yarayabilir, özellikle `extname` metodu.

`path` modülünün dökümantasyonuna, tarayıcınızdan bu adresi açarak erişebilirsiniz:
  {rootdir:/docs-nodejs/path.html}

Programın doğru olup olmadığını kontrol etmek için aşağıdaki komutu kullanın:

```sh
$ {appname} verify filtrelenmis-ls.js
```
