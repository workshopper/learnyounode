Napisz **serwer czasu TCP**!

Twój serwer powinien nasłuchiwać połączeń TCP na porcie o numerze przekazanym jako pierwszy argument programu w wierszu poleceń. Dla każdego połączenia serwer musi odpowiedzieć obecną datą i czasem 24-godzinnym w formacie:

```
"YYYY-MM-DD hh:mm"
```

followed by a **newline** character. Miesiąc, dzień, godziny i minuty muszą być *dopełnione zerami od lewej* tak, by zawsze były dwucyfrowe. Na przykład:
i znakiem **nowej linii**.


```
"2013-07-06 17:42"
```

----------------------------------------------------------------------
## WSKAZÓWKI

W tym ćwiczeniu utworzysz serwer komunikujący się po czystym protokole TCP. Nie będzie tu nigdzie HTTP, trzeba więc będzie wykorzystać moduł podstawowy `net`, który udostępnia wszystkie potrzebne funkcje do obsługi sieci.

Moduł `net` udostępnia metodę `net.createServer()`, przyjmującą funkcję callback jako argument. W przeciwieństwie do większości funkcji callback w Node.js, ta dla `createServer()` wywoływana jest wielokrotnie - raz dla każdego przychodzącego połączenia. Ma ona następującą sygnaturę:

```js
function callback (socket) { /* ... */ }
```

`net.createServer()` also returns an instance of your `server`. You must call `server.listen(portNumber)` to start listening on a particular port.
Metoda `net.createServer()` zwraca instancję Twojego serwera. Aby rozpocząć nasłuchiwanie na porcie o określonym numerze, wywołaj `server.listen(portNumber)`.

Typowy serwer TCP w Node.js wygląda tak:

```js
var net = require('net')
var server = net.createServer(function (socket) {
  // logika obsługi gniazda
})
server.listen(8000)
```

Pamiętaj by użyć numeru portu przekazanego jako pierwszy argument w wierszu poleceń.

Obiekt `socket` zawiera mnóstwo metadanych na temat połączenia, ale jest również dwukierunkowym strumieniem (Node.js `Stream`). Jego dwukierunkowość polega na tym, że możesz z niego czytać zarówno jak i do niego pisać. Na potrzeby tego ćwiczenia przyda Ci się jedynie możliwość zapisu danych i zamykania gniazda.

Wywołaj `socket.write(data)` aby zapisać dane do gniazda i `socket.end()` aby je zamknąć. Metoda `end()` przyjmuje również obiekt z danymi jako argument więc możesz uprościć całość do `socket.end(data)` - zapiszesz wtedy dane do gniazda i od razu je zamkniesz.

Dokumentację modułu `net` możesz przeczytać tutaj:
  {rootdir:/node_apidoc/net.html}

Aby utworzyć datę, musisz przygotować odpowiedni format z obiektu `new Date()`. Metody, które Ci się przydadzą to:

```js
date.getFullYear()
date.getMonth()     // zaczyna się od 0
date.getDate()      // zwraca dzień miesiąca
date.getHours()
date.getMinutes()
```

Jeżeli natomiast masz ochotę na trochę przygód, skorzystaj z pakietu `strftime` dostępnego na `npm`. Funkcja `strftime(fmt, date)` przyjmuje takie same formaty dat jak unixowa komenda `date`. Możesz dowiedzieć się więcej na temat `strftime` tutaj: https://github.com/samsonjs/strftime
