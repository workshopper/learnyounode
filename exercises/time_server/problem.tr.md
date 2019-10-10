`zaman-sunucusu.js` isimli bir dosya oluşturunuz.

**TCP zaman sunucu**su yazınız!

Programınız, ilk argüman olarak kabul edeceği bir portan TCP bağlantılarını dinleyen bir sunucu olmalı. Her bağlantı için o anın zaman bilgisini 24 saatlik zaman formatında göstermelisiniz:

```
"YYYY-MM-DD hh:mm" # YIL-AY-GÜN SAAT:DAKİKA
```

ve sonuna bir adet **yeni satır** karakteri koymalısınız. Ay, gün, saat ve dakika bilgileri **sıfırlı** şekilde **2 haneli** olarak ifade edilmelidir. Örneğin:

```
"2013-07-06 17:42"
```

String geri döndükten sonra bağlantıyı kapatınız.

----------------------------------------------------------------------
## İPUÇLARI

Bu alıştırma için, yeni ham bir TCP sunucu yaratacağız. Burada HTTP ile işimiz olmayacak, o yüzden Node'un çekirdek kütüphanesindeki `net` modülünü kullanacağız. Bu modül temel ağ işlemlerini yapmamızı sağlayan bir modüldür.

`net` modülü, `net.createServer()` isimli bir metoda sahiptir ve bu method bir fonksiyon alır. Argüman olarak geçirilen bu fonksiyon bir bağlantı dinleyicisidir(connection listener) ve birden çok defa çağrılır. Sunucuya gelen her bağlantı isteğinde sunucunuz bu fonksiyonu çağırır. Bu fonksiyonun yapısı: 

```js
function listener (socket) { /* ... */ }
```

`net.createServer()` fonksiyonu `sunucu`nuzun bir örneğini(instance) geri döndürür. `sunucu.listen(portNumarasi)` şeklinde kullanarak belirli bir portu dinlemeye başlarsınız.

Tipik bir Node TCP sunucusu şuna benzer:

```js
const net = require('net')
const server = net.createServer(function (socket) {
  // soket(socket) ile ilgili işlemler
})
server.listen(8000)
```

İlk argüman olarak verilen port numarasını sunucunun dinleyeceği port numarası yapmayı unutmayınız.

`socket` nesnesi bağlantı hakkında çeşitli  meta-veriler içerir. Ayrıca Node iki yönlü Stream i de içerir. Bu Stream'den veri okuyabilir ya da bu Stream'e veri yazabilirsinz. Bu alıştırma için `socket` üzerinden bu Stream'e sadece yazma yapacağız.

`socket.write(data)` metodu kullanılarak verilerimizi sokete gönderebilir ve `socket.end()` ile soket bağlantısını kapatabiliriz. Alternatif olarak, `.end()` metodu veriyi parametre olarak olabilir, yani sadece şu şekilde de kullanabilirsiniz: `socket.end(data)`.

`net` modülünün dökümantasyonuna, tarayıcınızdan bu adresi açarak erişebilirsiniz:

  {rootdir:/docs-nodejs/net.html}

Tarihi oluşturmak için `new Date()` nesnesinden özelleştirilmiş bir biçim oluşturmalısınız. Yardımcı olabilecek metodlar:

```js
date.getFullYear() // Yıl bilgisi
date.getMonth() // Ay Bilgisi: 0(sıfır)'dan başlar
date.getDate() // Ayın hangi günü olduğunu söyler
date.getHours() // Saat Bilgisi (sadece saat kısmı)
date.getMinutes() // Saat Bilgisi (sadece dakika kısmı)
```

Ya da maceracı ruhunuzu kullanıp, npm'de ki `strftime` paketini kurup, kullanabilirsiniz. `strftime(fmt, date)` fonksiyonu unix de ki `date` komutu gibi tarih formatlarını kabul eder. strftime ile ilgili daha fazla bilgiyi şu adresten alabilirsiniz: https://github.com/samsonjs/strftime

Programın doğru olup olmadığını kontrol etmek için aşağıdaki komutu kullanın:

```sh
$ {appname} verify zaman-sunucusu.js
```
