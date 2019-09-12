Napisz program używający jednej **synchronicznej** operacji na systemie plików aby wczytać plik i wypisać liczbę znaków nowej linii (`\n`) w nim zawartych na konsolę (stdout), podobnie jak wywołanie `cat file | wc -l` w wierszu poleceń.

Pełna ścieżka do pliku, który należy odczytać zostanie przekazana jako pierwszy argument w wierszu poleceń. Nie musisz tworzyć swojego własnego pliku testowego.

----------------------------------------------------------------------
## WSKAZÓWKI

Aby wykonać operację na systemie plików, będzie Ci potrzebny moduł `fs` z biblioteki standardowej Node.js. Aby wczytać tego typu moduł lub jakikolwiek inny moduł "globalny", użyj następującego zaklęcia:

```js
const fs = require('fs')
```

Now you have the full `fs` module available in a variable named `fs`.
Masz teraz władzę nad całym modułem `fs`, dostępnym w zmiennej `fs`.

Wszystkie synchroniczne (blokujące) metody modułu `fs` operujące na systemie plików mają nazwę kończącą się na `Sync`. Aby odczytać plik, będzie Ci potrzebne wywołanie `fs.readFileSync('/path/to/file')`. *Zwróci* ono obiekt `Buffer` zawierający całą zawartość pliku.

Dokumentację modułu `fs` możesz przeczytać tutaj:
  {rootdir:/docs-nodejs/fs.html}

Obiekty `Buffer` służą w Node.js jako wydajna reprezentacja dowolnych tablic danych - tekstu, danych binarnych czy dowolnego innego formatu. Obiekty `Buffer` mogą zostać przekształcone do ciągów znaków (`String`) przez wywołanie ich metody `toString()` np. `const str = buf.toString()`.

Dokumentację obiektów `Buffer` możesz przeczytać tutaj:
  {rootdir:/docs-nodejs/buffer.html}

Jeżeli interesuje Cię prosty sposób na zliczenie liczby znaków nowej linii występującej w ciągu znaków, pamiętaj, że obiekty `String` w JavaScripcie posiadają metodę `split()`, która dzieli ciąg znaków na podciągi. Możesz przekazać `'\n'` jako argument do tej metody - znak nowej linii posłuży wtedy jako separator. Plik testowy nie posiada znaku nowej linii na końcu ostatniej linii, zatem wywołanie tej metody da Ci tablicę o rozmiarze większą o 1 niż liczba znaków nowej linii występujących w pliku.
