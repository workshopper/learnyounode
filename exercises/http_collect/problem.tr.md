`http-topla.js` isimli bir dosya oluşturunuz.

İlk argüman olarak bir URL kabul eden ve verilen bu URL'e HTTP GET isteği atan bir program yazınız. Sunucudan gelen **bütün** verileri(sadece ilk "data" olayı değil) toplayıp konsol(stdout)a iki satır olarak yazın.

Konsola yazdığınız ilk satır, sunucudan gelen cevaptaki karater sayısını içermelidir. İkinci satır ise, sunucudan gelen cevabu string olarak içermelidir.

----------------------------------------------------------------------
## İPUÇLARI

Bu problemi iki farklı şekilde ele alabilirsiniz:

**1)** Birden çok "data" olayınından verileri toplayıp arka arkaya ekledikten sonra yazdırabilirsiniz. "end" olayını da akışın(stream) bittiğini anlamak ve konsola yazdırmak için kullabilirsiniz.

**2)** Veri akışını toplamakta çekebileceğiniz zorluklar için üçünü parti kütüphaneler kullanabilirisiniz. Bu problemi çözmek adına iki farklı paket kullanışlı API sunar (birbilerine çok benziyorlar): `bl` (Buffer List) ve `concat-stream`; birini seçin

  <https://npmjs.com/bl>
  <https://npmjs.com/concat-stream>

Node kütüphanesi(paket, package) yüklemek için Node Package Manager(Node Paket Yönetici) `npm` i kullanın. Aşağıdaki şekilde bir komutla paketi yükleyebilirsiniz:

```sh
$ npm install bl
```

Bu komut paketin en son sürümünü `node_modules` isimli bir dizinin altına indirir. Bu dizinin altında bulunan bütün paketler, ana program dosyanızın için `require` ile içeri alınıp('./' ön eki gerektirmeden) kullanılabilir:

```js
const bl = require('bl')
```

Node, paketin nerde olduğunu anlamak için, önce çekirdek modüllerine sonra da `node_modules` dizini altına bakar.

Eğer internet bağlantınız yoksa, `node_modules` isimli bir dizin oluşturup {apname} yüklenme dizinindeki dosyaları o dizin altına taşıyabilirsiniz:

  {rootdir:/node_modules/bl}
  {rootdir:/node_modules/concat-stream}

`bl` ve `concat-stream` paketleri akışları birbirine *bağlayabilir(pipe)* ve sizin için verileri toplar. Akış bittiğinde callback fonksiyonu bu toplanan veri ile çağrılır:

```js
response.pipe(bl(function (err, data) { /* ... */ }))
// or
response.pipe(concatStream(function (data) { /* ... */ }))
```

Buffer nesnelerini stringe dönüştürmek için `data.toString()` methodunu kullanmak zorunda kalacağınızı aklınızda bulundurunuz.

İki modülünün dökümantasyonu da {appname} kurulumu ile birlikte sisteminize yüklendi ve tarayıcınızdan aşağıdaki adresleri açarak erişebilirsiniz:

  {rootdir:/docs/bl.html}
  {rootdir:/docs/concat-stream.html}

Programın doğru olup olmadığını kontrol etmek için aşağıdaki komutu kullanın:

```sh
$ {appname} verify http-topla.js
```
