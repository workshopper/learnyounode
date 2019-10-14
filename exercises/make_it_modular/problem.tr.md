`moduler-yap.js` ve `benimmodulum.js` isimlerine sahip iki dosya oluşturunuz.

Problemimiz bir önceki problem ile aynı ama bir tek farkla; bu problemi modül konsepti ile çözeceğiz. Bu problemi tamamlayabilemek için iki dosya oluşturmanız gerekecek.

Verilen dizinde ki dosyaları dosya uzantılarına göre filtreleyip her dosyayı bir satırda olacak şekilde listeleyen bir program yazınız. Programa birinci argüman olarak dizinin tam yolunu, ikinci argüman olarakta filtrelemekte kullanılacak dosya uzantısını veriniz.

`benimmodulum.js` isimli bir *modül* dosyası oluşturup için büyük kısmını orada yapmalısın. Modül dosyası **üç** parametre alan bir fonksiyon *dışarıya vermeli(export)*. Sırasıyla; dizin adı, dosya uzantısı ve callback fonksiyonu. Modülünü çağırmadan dosya isimlerini herhangi bir şekilde değiştirmeyin.

Callback fonksiyonu, `node(err, data)` tarzında çağrılmalı. Bu yöntem, bir hata olmadığı müddetçe, ilk parametrenin `null` ve ikinci parametrenin sizin kullanmak istediğini veri olmasını garanti eder. Bu alıştırmada veri, dizi olarak filtrelenmiş dosya listesi olacaktır. Eğer hata oluşursa, mesela `fs.readdir()` metodu çağrılırken, callback fonksiyonu, ilk ve tek parametre olarak hatayı geçilerek çağrılmalı.

Modül dosyasının için de konsola yazmak yerine ana programınızda konsola, dosya listesini yazdırmalısınız.

Ana program dosyasında hata oluştması durumuna karşın, hatayı kontrol edip konsola bilgilendirici bir mesaj yazdırın.

Aşağıdaki dört madde modülünüzün doğruluğu için olması gereken şeylerdir:

1. Tanımlanan şekilde argümanlar alan bir fonksiyon dışarı aktarılmalıdır.
2. Hata ile veya veri ile sadece bir kere callback fonksiyonu çağrılmalıdır.
3. Herhangi başka birşeyi değiştirmeyin, global değişkenleri veya stdout.
4. Oluşabilecek her hatayı ele alıp, callback fonksiyonuna geçtiğinizden emin olun.

Bu kurallara uyarak, bu kurallara dikkate alan başka kişiler içinde senin modülünün kullanımını kolay hale getirmiş oluyorsun. Yani senin modülün learnyounode kullanan ya da bizim doğrulayıcımızı kullanan herkes tarafından kolaylıkla kullanılabilir.

----------------------------------------------------------------------
## İPUÇLARI

Yeni bir modül oluşturabilmek için yeni bir dosya(`benimmodulum.js`) oluşturup, içine dizin okuma ve filtreme fonksiyonunu yerleştir. *Tek fonksiyon dışa aktarımı* için `modele.exports` objesine fonksiyonunu ata(üzerine yaz):

```js
module.exports = function (args) { /* ... */ }
```

Ayrıca isteresen, isimlendirilmiş bir fonksiyon kullanım onun adını atayabilirsin.

Yeni oluşturuduğun moddülü ana programında(`moduler-yap.js`) kullanabilmek için, `require()` methodunu çağırmalısın, `fs` modülünü kullanmak için `require('fs')`i kullanıyorduk. Aradaki tek fark yerel modüller './' ön ekiyle birlikte kullanılmalıdır. Yani,  eğer dosya adınız benimmodulum.js ise:

```js
const mymodule = require('./benimmodulum.js')
```

şeklinde kullanmalısınız. '.js' kısmı opsiyoneldir ve genellikle kullanılmaz.

Şimdi, modül dosyanızda `benimmodulum` değişkenine atanmış `module.exports` nesnesi var. Bir fonksiyon dışarı aktardığımız için `benimmodulum` çağrılabilir bir fonksiyon olur!

Ayrıca aklınızda bulundurun ki; callback fonksiyonlarında hata kontrolleri ve erken geri dönmeler(early-returns) yapmak iyi bir alışkanlıktır:

```js
function bar (callback) {
  foo(function (err, data) {
    if (err) { return callback(err) } // erken geri dönme (early return)

    // ... Hata yok, `data` ile istediğiniz şeyleri yapabilirsiniz

    // Herşey yolunda ise, callback fonksiyonunu çağırıp, error argümanı yerine null geçirin

    callback(null, data)
  })
}
```

Programın doğru olup olmadığını kontrol etmek için aşağıdaki komutu kullanın:

```sh
$ {appname} verify moduler-yap.js
```
