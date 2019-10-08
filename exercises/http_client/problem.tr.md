`http-istemcisi.js` isimli bir dosya oluşturunuz.

İlk argüman olarak bir URL kabul eden ve verilen bu URL'e HTTP GET isteği atan bir program yazınız. Gelen cevaptaki **her** "data(veri)" olayını yeni bir satıra gelecek şekilde konsol(stdout)a yazdırınız.

----------------------------------------------------------------------
## İPUÇLARI

Bu alıştırma için `http` çekirdek kütüphanesi kullanmanız gerekmekte.

`http` modülünün dökümantasyonuna, tarayıcınızdan bu adresi açarak erişebilirsiniz:
  {rootdir:/docs-nodejs/http.html}

`http.get()` methodu GET isteği için bir kısayoldur ve çözümünüzü basitleştirmek için kullanabilirsiniz. `http.get()` metodunun ilk argümanı GET isteğini atmak istediğiniz URL'dir. İkinci argüman olarakta bir callback fonksiyonu vermelisiniz.

Diğer callback fonksiyonlarından farklı olarak, bu fonksiyonun kalıbı şu şekildedir:

```js
function callback (response) { /* ... */ }
```

Buradaki `response` nesnesi Node **Stream** türünde veri içerir. Node Streams nesnelerini olaylar gönderen bir nesne olarak görebilirsiniz. Bizim ilgileneceğim üç olay türü: "data"(veri geldiği durumda), "error"(hata durumunda) ve "end"(bitiş durumunda). Aşağıdaki şekilde olayları dinleyebilirsiniz:

```js
response.on('data', function (data) { /* ... */ })
```

"data" olayı bir kısım verinin geldiği ve işlenmeye hazır olduğu zaman oluşur. Gelen verinin büyüklüğü verinin kaynağına göre değişebilir.

`http.get()` metodundan dönen `response` nesnesi(Stream) `setEncoding()` isimli bir metoda da sahiptir. Eğer bu metodu "utf8" ile çağırırsanız, olayların gönderdiği veriler string türünde gelirler(Node `Buffer` türü yerine, eğer veri `Buffer` geliyorsa, sizin o veriyi stringe elle dönüştürmeniz gerekir.)

Programın doğru olup olmadığını kontrol etmek için aşağıdaki komutu kullanın:

```sh
$ {appname} verify http-istemcisi.js
```
