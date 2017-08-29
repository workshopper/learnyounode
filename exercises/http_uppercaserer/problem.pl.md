Napisz **serwer** HTTP, odpowiadający wyłącznie na żądania POST, przekształcający znaki treści żądań post na wielkie litery i zwracający je do klienta.

Twój serwer powienien nasłuchiwać na porcie o numerze przekazanym jako pierwszy argument Twojej aplikacji.

----------------------------------------------------------------------
## WSKAZÓWKI

While you're not restricted to using the streaming capabilities of the `request` and `response` objects, it will be much easier if you do.
Nie będziemy ograniczać Cię do wykorzystania funkcji strumieniowych obiektów `request` i `response`, ale znacznie ułatwią Ci one wykonanie ćwiczenia.

There are a number of different packages in npm that you can use to *"transform"* stream data as it's passing through. For this exercise the `through2-map` package offers the simplest API.
Istnieje wiele pakietów w `npm`, które możesz wykorzystać do *"transformacji"* danych strumieniowych podczas ich przepływu. Na potrzeby tego ćwiczenia polecany jest pakiet `through2-map`, gdyż oferuje najmniej skomplikowany interfejs.

`through2-map` allows you to create a *transform stream* using only a single function that takes a chunk of data and returns a chunk of data. It's designed to work much like `Array#map()` but for streams:
`through2-map` pozwala na utworzenie *strumienia transformującego* przy użyciu jednej funkcji, przyjmującej porcję danych i zwracającej porcję danych. Jest zaprojektowany tak, by działać w sposób jak najbardziej zbliżony do metody `Array#map()`, ale dla strumieni:

```js
var map = require('through2-map')
inStream.pipe(map(function (chunk) {
  return chunk.toString().split('').reverse().join('')
})).pipe(outStream)
```

W powyższym przykładzie nadchodzące dane zawarte w zmiennej `inStream` są przekształcane do ciągu znaków (jeżeli nie były nim już wcześniej), kolejność znaków jest odwrócona, a wynik przekazany do zmiennej `outStream`. Utworzyliśmy więc odwracacz kolejności porcji znaków! Pamiętaj jednak, że rozmiar porcji jest określony przez źródło danych i nie masz nań zbyt wielkiego wpływu dla danych przychodzących.

By zainstalować `through2-map` wywołaj z wiersza poleceń:

```sh
$ npm install through2-map
```

Jeżeli nie masz internetów, utwórz katalog `node_modules` i skopiuj cały katalog modułu, który chcesz wykorzystać z katalogu, gdzie zainstalowano {appname}:

  {rootdir:/node_modules/through2-map}

Dokumentacja pakietu `through2-map` została zainstalowana razem z {appname} w Twoim systemie i możesz ją przeczytać tutaj:

  {rootdir:/docs/through2-map.html}
