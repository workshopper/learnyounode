`http-dosya-sunucusu.js` isimli bir dosya oluşturunuz.

Aldığı her isteğe aynı dosyayı cevap olarak veren bir HTTP sunucu yazınız.

Sunucunuzun dinleyeceği port, programınıza verilen ilk argüman tarafından belirlenmeli.

İkinci argüman olarak sunucudan cevap olarak dönecek dosyanın yeri verilecek. `fs.createReadStream()` fonksiyonunu kullanarak dosya içeriğini cevap olarak vermeniz **gerekiyor**.

----------------------------------------------------------------------
## İPUÇLARI

Bu alıştırma da TCP sunucusu yerine HTTP sunucusu kuracağımız için Node çekirdek kütüphanesinde bulunan `http` modülünü kullanmalıyız. `net` modülüne benzer olarak, `http` modülüde `http.createServer()` isimli bir metod içermekte, ama bu metod ile başlatılan sunucu HTTP ile iletişim kurabilir.

`http.createServer()` metodu bir callback fonksiyonu alıyor ve sunucuya gelen her bağlantı istediği için bu callback fonksiyonunu çağırır. Bu callback fonksiyonun yapısı:

```js
function callback (request, response) { /* ... */ }
```

şeklindedir. Bu fonksiyonda argüman olarak gelen değerlerden `request` olanı sunucuya gelen HTTP istediği hakkında bilgiler içerirken; `response` ise bu isteğe verilecek cevap hakkında bilgileri içerir. `request` argümanı header, query-string gibi verileri alabilmek için kullanılırken, `response` cevap olarak istemciye gönderilecek header ve içeriği içerir.

`request` ve `response` argümanlarının ikiside Node Streams türünde veri içerir! Diğer bir deyişle kullanım durumunuza uygunsa veri göndermek ve almak için akış soyutlamalarını kullanabileceğiniz anlamına gelir.

`http.createServer()` metodu `sunucu`nuzun bir örneğini(instance) geri döndürür. `sunucu.listen(portNumarasi)` şeklinde kullanarak belirli bir portu dinlemeye başlarsınız.

Tipik bir Node HTTP sunucusu şuna benzer:

```js
const http = require('http')
const server = http.createServer(function (req, res) {
  // request handling logic...
})
server.listen(8000)
```

`http` modülünün dökümantasyonuna, tarayıcınızdan bu adresi açarak erişebilirsiniz:
  {rootdir:/docs-nodejs/http.html}

`fs` çekirdel modülü dosyalar için de Streaming API'leri içeriyor. `fs.createReadStream()` isimli metodu kullanarak ilk komut satırı argümanı olarak verilecek dosyası açın. Bu metod Stream nesnesi döndür. `kaynak.pipe(hedef)` diyerek `kaynak` Stream'inden `hedef` Stream'ine veriyi aktarabilirsiniz. Bu yöntemle dosya sistemi **Stream**ini HTTP `response` **Stream**ine bağlayabilirsiniz.

Programın doğru olup olmadığını kontrol etmek için aşağıdaki komutu kullanın:

```sh
$ {appname} verify http-dosya-sunucusu.js
```
