`http-uppercaserer.js` isimli bir dosya oluşturunuz.

Gelen POST istediğinin gövdesinde ki String'i alıp büyük harfe dönüştüren ve bu halini cevap olarak dönen bir HTTP `sunucusu` yazınız.

Sunucunuzun dinleyeceği port, programınıza verilen ilk argüman tarafından belirlenmeli.

----------------------------------------------------------------------
## İPUÇLARI

`request`(istek) ve `response`(cevap) nesnelerinin Streaming özelliklerini kullanmanız yasaklanmadığı için eğer bu yoldan yapmayı seçerseniz, işiniz çok daha kolay olur.

Stream verileri *"dönüştürebileceğiniz"* birden çok mpn paketi var. Bu alıştırma için `through2-map` paketi en kolay API'yi sunuyor.

`through2-map` sayesinde *Stream dönüştürme* işini tek bi satır fonksiyon ile yapabilrisiniz. Bu fonksiyon bir veri yığını alıp başka bir veri yığını verir. `Array#map()` metodu gibi çalışmak üzere tasarlanmıştır ama tabiki Stream'ler için:

```js
const map = require('through2-map')
inStream.pipe(map(function (chunk) {
  return chunk.toString().split('').reverse().join('')
})).pipe(outStream)
```

Yukarıda ki örnekte, Stream üzerinden gelen data yani `inStream` değişkeni, önce String'e dönüştürülüyor(ne olur ne olmaz diye). Daha sonra bütün String'in tersi alınıp cevap olarak döndürülüyor. Kısacası gelen verinin tersini alan bir program yaptık! Gelen verinin kararlı bir yığın boyutu olduğunu ve bunu üzerinde çok az bi kontrolünüzün olduğunu unutmayınız.

`through2-map` paketini yüklemek için aşağıdaki komutu veriniz:

```sh
$ npm install through2-map
```

Eğer internet bağlantınız yoksa, `node_modules` isimli bir dizin oluşturup {apname} yüklenme dizinindeki dosyaları o dizin altına taşıyabilirsiniz:

  {rootdir:/node_modules/through2-map}

`through2-map` dökümantasyonu {appname} kurulumu ile birlikte sisteminize yüklendi ve tarayıcınızdan aşağıdaki adresleri açarak erişebilirsiniz:

  {rootdir:/docs/through2-map.html}

Programın doğru olup olmadığını kontrol etmek için aşağıdaki komutu kullanın:

```sh
$ {appname} verify http-uppercaserer.js
```
