`http-json-api-sunucusu.js` isimli bir dosya oluşturunuz.

'/api/parsetime' adresi üzerinden HTTP GET isteği alan bir HTTP sunucusu yazınız. Gelen isteğin içinde 'iso' anahtarını query-string olarak bekleyin ve bu anahtarın değeri olarakta ISO formatında bir zaman bekleyin.

Öreneğin:

  /api/parsetime?iso=2013-08-10T12:10:15.474Z

Cevap olarak verilecek JSON nesnesi sadece 'saat', 'dakida' ve 'saniye' bildilerini içermeli (Lütfen anahtarları İngilizce olarak kullanınız: 'hour', 'minute', 'second'). Örneğin:

```json
{
  "hour": 14,
  "minute": 23,
  "second": 15
}
```

'/api/unixtime' adresi için ikinci bir fonksion ekleyiniz. Bu adrestebir önceki ile aynı query-string'i beklesin. Ama cevap olarak 'unixtime'(unix zamanı) anahtarı altında, UNIX devir zamanı(UNIX epoch time; 1 Ocak 1970 saat 00:00:00 dan itaberen geçen milisaniye)nı versin.  Add second endpoint for the path '/api/unixtime' which accepts the same query string but returns UNIX epoch time in milliseconds (the number of milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'. Örneğin:

```json
{ "unixtime": 1376136615474 }
```

Sunucunuzun dinleyeceği port, programınıza verilen ilk argüman tarafından belirlenmeli.

----------------------------------------------------------------------
## İPUÇLARI

HTTP sunucusundaki `request`(istek) nesnesinin `url` isminde bir özelliği vardır. Bu özelliği isteğinizi iki ayrı adrese *"yönlendirmek(route)"* için kullanmanız gerekiyor.

Node çekirdek modüllerinden 'url' modülü ile URL'leri ve query-string leri kolaylı parçalayabilirsiniz. `new URL(request.url)` ile isteğin hedef URL'ini (request.url) parçalayıp size bir nesne geri döner.

Örneğin; komut satırında aşağıdaki komutu giriniz:

```sh
$ node -pe "new URL('/test?q=1', 'http://example.com')"
```

`url` modülünün dökümantasyonuna, tarayıcınızdan bu adresi açarak erişebilirsiniz:
  {rootdir:/docs-nodejs/url.html}

Cevabını JSON String biçimine uygun olmalıdır. Daha fazla bilgi için `JSON.stringify()` metodunu inceleyiniz.

Bir web vatandaşı olarak Content-Type headerını göndermeyi ihmal etmemelisiniz:

```js
res.writeHead(200, { 'Content-Type': 'application/json' })
```

JavaScript'te ki `Date` nesnesi tarihleri ISO biçimine uygun olarak yazdırır, `new Date().toISOString()` şeklinde kullanabilirsiniz. Ayrıca bu biçimde ki String'leri ayıklayıp `Date` nesnesine dönüştürebilir(`Date` sınıfının yapıcı metodunu kullanırsanız). `Date.getTime()` metodu ayrıca kullanışlı gelebilir.

Programın doğru olup olmadığını kontrol etmek için aşağıdaki komutu kullanın:

```sh
$ {appname} verify http-json-api-sunucusu.js
```
