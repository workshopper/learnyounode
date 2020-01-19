Napisz program wysyłający żądanie HTTP GET na URL przekazany jako pierwszy argument wiersza poleceń. Wypisz zawartość tekstową **każdego** wydarzenia "data" odpowiedzi na nową linię konsoli (stdout).

----------------------------------------------------------------------
## WSKAZÓWKI

Do tego ćwiczenia potrzebny będzie Ci moduł `http`.

Dokumentację modułu `http` możesz znaleźć tutaj:
  {rootdir:/docs-nodejs/http.html}

Metoda `http.get()` jest użytecznym skrótem do wykonywania prostych żądań GET - wykorzystaj ją by uprościć Twoje rozwiązanie. Pierwszy argument metody `http.get()` to URL, na który chcesz wysłać żądanie. Jako drugi argument przekaż funkcję callback.

W przeciwieństwie do innych funkcji callback, ta ma nieco inną sygnaturę:

```js
function callback (response) { /* ... */ }
```

Gdzie obiekt `response` to obiekt **Strumienia (Stream)** Node.js. Możesz traktować Strumienie jako obiekty emitujące zdarzenia. Trzy zdarzenia, które najbardziej powinny Cię zainteresować to "data", "error" i "end". Nasłuchujesz zdarzeń w ten sposób:

```js
response.on('data', function (data) { /* ... */ })
```

Zdarzenie "data" jest emitowane gdy porcja danych jest dostępne i może być przetworzona. Rozmiar porcji zależy od bazowego źródła danych.

Obiekt `response` - strumień, który otrzymujesz z metody `http.get()` - posiada również metodę `setEncoding()`. Jeżeli wywołasz ją z argumentem "utf8", zdarzenia "data" emitować będą ciągi znaków zamiast standardowych dla Node.js obiektów `Buffer`, które muszą zostać jawnie przekształcone do ciągów znaków.
