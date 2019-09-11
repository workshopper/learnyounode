Napisz program przyjmujący jedną lub więcej liczb jako argumentu linii poleceń i wypisuje ich sumę na konsolę (stdout).

----------------------------------------------------------------------
## WSKAZÓWKI

Możesz uzyskać dostęp do argumentów linii poleceń przez globalny obiekt `process`. Obiekt `process` posiada właściwość `argv` - tablicę zawierającą całą linię polecenia: `process.argv`.

Na dobry początek napisz program, który zawiera po prostu:

```js
console.log(process.argv)
```

Uruchom go za pomocą `node program.js`, podając jakieś liczby jako argumenty, np.:

```sh
$ node program.js 1 2 3
```

W takim przypadku na konsolę powinna zostać wypisana tablica wyglądająca w ten sposób:

```js
['node', '/path/to/your/program.js', '1', '2', '3']
```

Zastanów się jak przeiterować się przez argumenty liczbowe tak, by możliwe było wypisanie jedynie ich sumy. Pierwszym elementem tablicy `process.argv` jest zawsze 'node', drugim zawsze ścieżka do twojego pliku `program.js`, należałoby więc rozpocząć od trzeciego elementu (indeks 2), dodając każdy z elementów do sumy aż do momentu osiągnięcia końca tablicy.

Zwróć uwagę, że wszystkie elementy `process.argv` są ciągami znaków i może zaistnieć potrzeba *przekształcenia (koercji, ang. coerce)* ich na liczby. Możesz to zrobić dodając `+` przed właściwością lub przekazując ją do funkcji `Number()` tzn. `+process.argv[2]` lub `Number(process.argv[2])`.

{appname} poda swoje argumenty dla Twojego programu gdy uruchomisz `{appname} verify program.js`, nie musisz zatem przejmować się ich podawaniem. Aby przetestować swój program bez weryfikacji, możesz wywołać go komendą `{appname} run program.js`. Za pomocą polecenia `run` uruchamiasz środowisko testowe, które {appname} przygotowuje dla każdego ćwiczenia.
