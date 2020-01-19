Napisz **serwer** HTTP, który serwuje dane w formacie JSON w odpowiedzi na żądanie GET do ścieżki `/api/parsetime`. Oczekuj, że żądanie zawierać będzie ciąg znaków zapytania 'iso' o wartości w postaci czasu w formacie ISO.

Na przykład:

  /api/parsetime?iso=2013-08-10T12:10:15.474Z

Odpowiedź w formacie JSON zawierać powinna wyłącznie właściwości 'hour', 'minute' oraz 'second'. Na przykład:

```json
{
  "hour": 14,
  "minute": 23,
  "second": 15
}
```

Dodaj drugi punkt końcowy serwera dla ścieżki '/api/unixtime', który akceptuje taki sam ciąg znaków zapytania, ale zwraca czas mierzony w milisekundach od momentu rozpoczęcia epoki UNIXowej (tzn. liczba milisekund, które upłynęły od 1. stycznia 1907 00:00:00 UTC) jako wartość właściwości 'unixtime'. Na przykład:

```json
{ "unixtime": 1376136615474 }
```

Twój serwer powinien nasłuchiwać na porcie o numerze przekazanym jako pierwszy argument Twojej aplikacji.

----------------------------------------------------------------------
## WSKAZÓWKI

Obiekt `request` serwera HTTP posiada właściwość `url`, która będzie Ci potrzebna aby *"trasować" (routing)* otrzymywane żądania do dwóch punktów końcowych.

You can parse the URL and query string using the Node core 'url' module. `new URL(request.url)` will parse content of request.url and provide you with an object with helpful properties.
Możesz sparsować URL i ciąg znaków zapytania wykorzystując moduł podstawowy `url`. Wywołanie `new URL(request.url)` dokona parsowania wartości właściwości `request.url` i zwróci obiekt z użytecznymi właściwościami.

Dla przykładu, wywołaj następujący kod w wierszu poleceń:

```sh
$ node -pe "new URL('/test?q=1', 'http://example.com')"
```

Dokumentację modułu `url` możesz przeczytać tutaj:
  {rootdir:/docs-nodejs/url.html}

Your response should be in a JSON string format. Look at `JSON.stringify()` for more information.
Twoja odpowiedź powinna być w formacie JSON. Poszukaj informacji na temat `JSON.stringify()` aby dowiedzieć się więcej.

You should also be a good web citizen and set the Content-Type properly:
Jako dobry obywatel internetów, ustaw również poprawny nagłówek `Content-Type`:

```js
res.writeHead(200, { 'Content-Type': 'application/json' })
```

JavaScriptowy obiekt `Date` może wypisywać dane w formacie ISO, np. `new Date().toISOString()`. Jest on również w stanie parsować tenże format jeżeli przekażesz odpowiedni ciąg znaków do konstruktora `Date`. Przyda Ci się również metoda `Date#getTime()`.
