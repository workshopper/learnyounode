`bebek-adimlari.js` isimli bir dosya oluşturunuz.

Komut satırından bir veya daha fazla sayıyı argüman olarak alıp, bu sayıların toplamının konsol(stdout)a yazdıran bir program yazınız.

----------------------------------------------------------------------
## İPUÇLARI

Komut satırı argümanlarına `process` global nesnesi aracılığıyla erişebilirsiniz. `process` nesnesi, `argv` isimli özelliği, komut satırını bir dizi olarak size sunar. Başka bir deyişle `process.argv`.

Başlamak için, sadece;

```js
console.log(process.argv)
```

içeren bir program yazınız.

`node bebek-adimlari.js` komutu ile birlikte bir kaç sayı verek çalıştırın. Örneğin;

```sh
$ node bebek-adimlari.js 1 2 3
```

Bu durumda şuna benzer bi çıktı göreceksiniz:

```js
['node', '/dosya/yolu/bebek-adimlari.js', '1', '2', '3']
```

Bu sayı argümanlarını döngüyle nasıl işleyeceğiniz düşünmeniz gerekiyor ki sadece toplarını çıktı olarak verebilin. `process.argv` dizisinin ilk elemanı her zaman 'node' olur, ve ikinci eleamnı da `bebek-adimlari.js` isimli dosyanızın dosya yolu olur. Bu yüzden 3. eleman(yani 2. index)dan başlayıp, dizinin sonunda gelene kadar her elemanı toplam değişkenine eklemelisiniz.

Ayrıca `process.argv` dizisinin bütün elemanlarının string olduğunu unutmayın. Demek oluyor ki bu stringleri sayıya dönüştürmek zorunda kalabilirisiniz. Bu yapmak için o özelliği önüne `+` koyabilir ya da `Number()` metoduna parametre olarak geçebilirsiniz. Örneğin; `+process.argv[2]` yada `Number(process.argv[2])`.

Programınızın doğru çalışıp çalışmadığını aşağıdaki komutla kontrol ediniz:

```sh
$ {appname} verify bebek-adimlari.js
```

{appname}, `{appname} verify bebek-adimlari.js` komutunu çalıştırdığınız da sizin programınıza farklı argümanlar vererek, sizden ekstra birşey beklemeden kodunuzu çalıştırır ve programın doğruluğunu kontrol eder. Eğer uygulamanızı kendi test etmek istiyorsanız (doğruluğunu kontrol etmeden), o zaman `{appname} run bebek-adimlari.js` komutu ile çalıştırıp, farklı girdilere verdiği çıktıları görebilirsiniz. `run` komutunu çalıştırdığınızda, {appname} tarafından her alıştırma için düzenlenmiş test ortamını çağırırsınız.
