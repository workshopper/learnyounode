`benim-ilk-io-islemim.js` isimli bir dosya oluşturunuz.

Dosya sisteminden bir dosyayı ** senkron ** şekilde okuyup, o dosyanın satır sayısını konsol(stdout)a yazan bir program yazınız. `cat file | wc -l` komutunun çıktısı ile aynı çıktıyı verecek bir program olmalı.

Okunmak istenen dosyanın tam yolu komut satırında ilk parametre olarak verilmeli. (başka bir deyişle; process.argv[2]).Kendi test dosyanızı oluşturmanız gerekmiyor.

----------------------------------------------------------------------
## İPUÇLARI

Dosya sistemiyle ilgili işlemler yapabilmeniz için Node un core kütüphanelerinden olan `fs` modülüne ihtiyacınız var.Bu tür modülleri ya da "global" diğer modülleri kullanmak için, aşağıdaki gibi bir sihir kullanmamız gerekiyor:

```js
const fs = require('fs')
```

Artık `fs` modülünü bütün özelliklerine `fs` değişkeni ile ulaşabilirsiniz.

`fs` modülü içinde ki bütün senkron (ya da blocklayan) dosya sistemi metodları 'Sync' ekiyle bitmektedir. Bir dosya okumak için `fs.readFileSync('/dosya/yolu/file')` komutunu kullanmalısınız. Bu metod size `Buffer` türünde bir nesne döner ve bu nesne dosyanın tüm içeriğini size sunar.

`fs` modülünün dökümantasyonuna, tarayıcınızdan bu adresi açarak erişebilirsiniz:
{ rootdir: /docs-nodejs/fs.html }

Node da ki `Buffer` nesneleri ardarda gelen verilerin daha verimli olarak ifade edilmesini sağlar. Bu veriler ascii, binary ya da daha farklı formatta olabilirler. `Buffer` nesneleri `toString()` metodu yardımıyla kolaylık string'e dönüştürülebilirler. Örneğin. `const str = buf.toString()`.

`Buffer` ile ilgili dökümantasyon sayfasına, tarayıcınızdan bu adresi açarak erişebiliriniz:
{ rootdir: /docs-nodejs/buffer.html }

Eğer bir string içinde ki satır sonu (yeni satır) karakterlerinin sayılarını almak için kolay bir yol bulmak istiyorsanız, JavaScript de `String` veri türü `.split()` metodu ile daha kısa stringlerden oluşan bir diziye dönüştürülebilir ve '\n' karateri yeni satır karakteridir.  Test dosyasının dosya sonunda yeni satır karakteri ('\n') içermediğini aklınızda bulundurunuz. '), yani `split('\n')` size fazladan bir elemanı olan bir dizi döndürür.

Programın doğru olup olmadığını kontrol etmek için aşağıdaki komutu kullanın:

```sh
$ {appname} verify benim-ilk-io-islemim.js
```
