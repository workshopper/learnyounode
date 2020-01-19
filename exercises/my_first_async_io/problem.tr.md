`benim-ilk-asenktron-io-islemim.js` isimli bir dosya oluşturunuz.

Dosya sisteminden bir dosyayı **asenkron** şekilde okuyup, o dosyanın satır sayısını konsol(stdout)a yazan bir program yazınız. `cat file | wc -l` komutunun çıktısı ile aynı çıktıyı verecek bir program olmalı.

Okunmak istenen dosyanın tam yolu komut satırında ilk parametre olarak verilmeli.

----------------------------------------------------------------------
# İPUÇLARI

Bu sorunun çözümü, bir önceki sorunun çözümüyle *neredeyse* aynı, farklı olarak bu soruyu **Node.js tarzıyla** çözmelisiniz: asenkron.

`fs.readFileSync()` yerine `fs.readFile()` fonksiyonunu kullanmalısınız ve bu fonksiyondan geri dönen değeri kullanmak yerine callback fonksiyonundan gelen değeri kullanmak zorundasınız. `fs.readFile()` ikinci parametre olarak callback fonksiyonu bekler. Callback fonksiyonları hakkında daha fazla bilgi almak için https://github.com/maxogden/art-of-node#callbacks adresini ziyaret ediniz.

Node.js callback fonksiyonları aşağıdaki gibi bir yapıya sahiptir:

```js
function callback (err, data) { /* ... */ }
```

yani eğer bir hata olduysa ilk argümanın değerinin olup olmadığını kontrol ederek öğrenebilirsiniz. Eğer bir hata yoksa, `Buffer` nesnesini ikinci argüman olarak alıp kullanbilirsiniz. `readFile()` fonksiyonunda, 'utf8' ifadesini ikinci parametre ve callback fonksiyonunu üçüncü argüman olarak verip, `Buffer` nesnesi yerine `String` alabilirsiniz.

`fs` modülünün dökümantasyonuna, tarayıcınızdan bu adresi açarak erişebilirsiniz:
  { rootdir: /docs-nodejs/fs.html }

Programın doğru olup olmadığını kontrol etmek için aşağıdaki komutu kullanın:

```sh
$ {appname} verify benim-ilk-asenktron-io-islemim.js
```
