Napisz program wykorzystujący pojedynczą **asynchroniczną** operację na systemie plików aby wczytać plik i wypisać liczbę znaków nowej linii w nim zawartych na konsolę (stdout), podobnie do wyniku wywołania `cat file | wc -l`.

Pełna ścieżka do pliku, który należy odczytać zostanie przekazana jako pierwszy argument wiersza poleceń.

----------------------------------------------------------------------
# WSKAZÓWKI

Rozwiązanie tego problemu jest *niemalże* takie samo jak poprzednieg za wyjątkiem tego, że musisz teraz zrobić to tak jak **Node.js przykazał**: asynchronicznie.

Zamiast `fs.readFileSync()`, użyjesz teraz metody `fs.readFile()`, a zamiast korzystać z wartości zwracanej z wywołania tej metody, trzeba będzie zebrać wartość wyniku z funkcji callback, którą przekazuje się jako ostatni argument. Aby nauczyć się więcej o funkcjach callback, rzuć okiem na https://github.com/maxogden/art-of-node#callbacks.

Pamiętaj, że naturalne (idiomatyczne) dla Node.js funkcje callback mają sygnaturę:

```js
function callback (err, data) { /* ... */ }
```

dzięki czemu możesz sprawdzić czy wystąpił błąd przez sprawdzenie czy wartość pierwszego argumentu jest prawdziwa (ang. *truthy* - zwróć uwagę, że to nie to samo co wartość `true`!). Jeżeli nie wystąpił żaden błąd, wartością drugiego argumentu powinien być obiekt `Buffer`. Tak samo jak w przypadku `fs.readFileSync()`, możesz przekazać `'utf8'` jako drugi argument (funkcja callback w tym przypadku będzie na trzecim miejscu) - jako wartość `data` otrzymasz wtedy ciąg znaków (`String`) zamiast obiektu `Buffer`.

Dokumentację modułu `fs` możesz przeczytać tutaj:
  {rootdir:/docs-nodejs/fs.html}
