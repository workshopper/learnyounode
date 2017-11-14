Napisz program wysyłający żądanie HTTP GET na URL podany jako pierwszy argument wiersza poleceń. Zbierz **wszystkie** dane z serwera (nie tylko pierwsze zdarzenie "data"), a następnie wypisz dwie linie na konsolę (stdout).

The first line you write should just be an integer representing the number of characters received from the server. The second line should contain the complete String of characters sent by the server.
Pierwsza linia powinna stanowić jedynie wartość reprezentującą liczbę znaków otrzymaną z serwera. Druga linia zawierać powinna pełny ciąg znaków wysłanych z serwera.

----------------------------------------------------------------------
## WSKAZÓWKI

Możesz zastosować jedno z dwóch podejsć do tego problemu:

**1)** Zbierz dane z wielu zdarzeń "data" i połącz ich wyniki przed wypisaniem na konsolę. Wykorzystaj zdarzenie "end" by określić kiedy strumień się kończy i zarazem kiedy możesz zacząć wypisywać wyniki.

**2)** Użyj zewnętrznego mogułu aby przykryć wygodniejszą abstrakcją trudności związane ze zbieraniem całego strumieinia danych. Dwa różne pakiety udostępniają użyteczny dla rozwiązania tego problemu interfejs (najprawdopodobniej więcej niż 2!): `bl` (Buffer List) oraz `concat-stream`. Wybór należy do Ciebie!

  <https://npmjs.com/bl>
  <https://npmjs.com/concat-stream>

Aby zainstalować pakiet Node.js, użyj menadżera pakietów `npm` (ang. Node Package Manager). Wystarczy wywołać w wierszu poleceń:

```sh
$ npm install bl
```

`npm` pobierze i zainstaluje najnowszą wersję pakietu do podkatalogu o nazwie `node_modules`. Dowolny pakiet w tym podkatalogu Twojego projektu może zostać załadowany za pomocą funkcji `require` bez poprzedzania go `./`:

```js
const bl = require('bl')
```

Node.js najpierw będzie poszukiwać wśród modułów podstawowych (core modules), a następnie w katalogu `node_modules`, gdzie pakiet został pobrany.

Jeżeli brakuje Ci internetów, po prostu utwórz podkatalog `node_modules` i skopiuj cały katalog pakietu, który chcesz wykorzystać ze ścieżki gdzie zainstalowano {appname}:

  {rootdir:/node_modules/bl}
  {rootdir:/node_modules/concat-stream}

Zarówno `bl` jak i `concat-stream` umożliwa *przekazywanie (pipe)* do nich strumienia - wtedy zajmą się one zbieraniem danych dla Ciebie. Gdy strumień się skończym funkcja callback zostanie wywołana z danymi:

```js
response.pipe(bl(function (err, data) { /* ... */ }))
// or
response.pipe(concatStream(function (data) { /* ... */ }))
```

Note that you will probably need to `data.toString()` to convert from a Buffer.
Zauważ, że zapewne będzie trzeba wywołać `data.toString()` żeby przekształcić dane z obiektu `Buffer`.

Dokumentacja dla obydwu modułów jest zainstalowana wraz z {appname} na Twoim systemi i możesz ją przeczytać tutaj:

  {rootdir:/docs/bl.html}
  {rootdir:/docs/concat-stream.html}
