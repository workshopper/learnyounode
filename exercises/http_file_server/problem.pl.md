Napisz **serwer** HTTP, który serwuje ten sam plik tekstowy w odpowiedzi na każde otrzymane żądanie.

Twój serwer powinien nasłuchiwać na porcie o numerze przekazanym jako pierwszy argument Twojej aplikacji.

Jako drugi argument przekazana zostanie ścieżka pliku do serwowania. **Musisz** wykorzystać metodę `fs.createReadSteam()` w celu strumieniowania zawartości pliku do odpowiedzi.

----------------------------------------------------------------------
## WSKAZÓWKI

Ponieważ chcemy w ramach tego ćwiczenia stworzyć serwer HTTP zamiast ogólnego serwera TCP, należy wykorzystać moduł podstawowy `http`. Tak jak moduł `net`, `http` również udostępnia metodę `http.createServer()`, lecz jej implementacja tworzy serwer komunikujący się przez protokół HTTP.

`http.createServer()` przyjmuje funkcję callback, wywoływaną jednokrotnie dla każdego połączenia do Twojego serwera. Funkcja callback ma sygnaturę:

```js
function callback (request, response) { /* ... */ }
```

Gdzie argumenty są obiektami reprezentującymi żądanie HTTP i odpowiadającą mu odpowiedź. `request` służy do pobierania właściwości takich jak nagłówki i ciąg znaków zapytania (query string) z żądania, natomiast `response` pozwala na wysyłanie danych do klienta - zarówno nagłówków jak i treści.

Zarówno `request` jak i `response` są strumieniami! Oznacza to, że możesz wykorzystać strumieniowe abstrakcje w celu wysyłania i odbierania danych jeżeli odpowiadają one specyfice rozwiązywanego przez Ciebie problemu.

`http.createServer()` zwraca instancję Twojego serwera - `server`. Musisz wywołać metodę `server.listen(numerPortu)` aby rozpocząć nasłuchiwanie na określonym porcie.

Typowy serwer HTTP w Node.js wygląda mniej więcej tak:

```js
const http = require('http')
const server = http.createServer(function (req, res) {
  // logika obsługi żądania...
})
server.listen(8000)
```

Dokumentacja dla modułu `http` znajduje się tutaj:
  {rootdir:/docs-nodejs/http.html}

Moduł podstawowy `fs` również udostępnia kilka strumieniowych metod dla plików. Potrzebna będzie Ci metoda `fs.createReadSteam()` aby utworzyć strumień reprezentujący plik, którego nazwa przekazana została jako argument wiersza poleceń. Metoda ta zwraca obiekt, za pomocą którego możesz przekierować dane ze strumienia `src` do strumienia `dst`: `src.pipe(dst)`. Tym sposobem możesz połączyć strumień pochodzący z systemu plików ze strumieniem odpowiedzi HTTP.
