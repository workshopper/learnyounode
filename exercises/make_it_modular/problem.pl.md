Ten problem jest identyczny z poprzednim, wprowadza jednak koncepcję **modułów**. Należy utworzyć dwa pliki aby wykonać to ćwiczenie.

Utwórz program wypisujący listę plików w danym katalogu, przefiltrowaną pod względem rozszerzenia plików. Pierwszy argument to nazwa katalogu, drugi to rozszerzenie, po którym należy filtrować. Wypisz listę plików (każda nazwa w osobnej linii) na konsolę. **Musisz** użyć asynchronicznego I/O.

Trzeba napisać plik *modułu*, który wykona większość tej pracy. Moduł ten musi *eksportować* jedną funkcję przyjmującą **trzy** argumenty w podanej kolejności: nazwę katalogu, rozszerzenie pliku w postaci ciągu znaków i funkcję callback. Wartość argumentu z rozszerzeniem pliku musi być identyczna jak to, co zostało przekazane do Twojej aplikacji w wierszu poleceń. Nie przekształcaj jej do wyrażenia regularnego (RegExp), nie dodawaj "." na początku ani nie rób niczego innego poza przekazaniem jej do Twojego modułu. To w nim zostaną wykonane wymienione działania potrzebne do tego by filtr zaczął funkcjonować.

Funkcja callback musi zostać wywołana w standardowej dla Node.js konwencji `callback(err, data)`. Konwencja ta wymaga aby pierwszy argument wywołania funkcji callback miał wartość `null` jeżeli nie wystąpił żaden błąd, a wartość drugiego argumentu stanowić będzie wynik. W tym ćwiczeniu wynik stanowić będzie przefiltrowana lista plików jako tablica (`Array` czyli `[...]`). Jeżeli wystąpi jakiś błąd np. z wywołania `fs.readdir()`, funkcja callback musi zostać wywołana z wartością tego błędu w pierwszym argumencie. Nie określaj w takim wypadku wartości drugiego argumentu.

**Nie możesz** wypisywać na konsolę bezpośrednio z Twojego pliku z modułem, wolno to robić jedynie z pierwotnego pliku programu.

W przypadku gdy błąd spropaguje się w górę do pierwotnego pliku Twojej aplikacji, dokonaj prostego sprawdzenia go i wypisz mądrą wiadomość na konsolę.

Następujące cztery rzeczy stanowią kontrakt, który Twój moduł musi spełnić.

1. Eksportuj jedna funkcję przyjmującą dokładnie takie argumenty jak opisano powyżej.
2. Wywołaj funkcję callback dokładnie jeden raz z błędem lub danymi jak opisano wyżej.
3. Nie zmieniaj nic innego (np. zmiennych globalnych albo stdout).
4. Obsłuż wszystkie błędy, które mogą wystąpić i przekaż je do wywołania funkcji callback.

Zaletą posiadania kontraktu jest to, że Twój moduł może być używany przez każdego, kto oczekuje, że będzie on spełniony. Twój moduł zatem może być użyty przez kogokolwiek realizującego `learnyounode`, albo weryfikator zadania, i będzie po prostu działał.

----------------------------------------------------------------------
## WSKAZÓWKI

Nowy moduł utworzysz przez zapisanie nowego pliku, zawierającego funkcję odczytującą katalog i filtrującą dane. Aby *wyeksportować* *pojedynczą funkcję*, przypisz ją do obiektu `module.exports`, nadpisując to, co już się tam znajduje.

```js
module.exports = function (args) { /* ... */ }
```

Or you can use a named function and assign the name.
Możesz też użyć funkcji nazwanej (`function foo (args) { /* ... */ }`) i przypisać jej nazwę (`module.exports = foo`).

Aby użyć Twojego nowego modułu w pierwotnym pliku programu, wywołaj `require()` w takim sam sposób jak `require('fs')` do wczytania modułu `fs`. Jedyna różnica tkwi w tym, że lokalne moduły muszą zostać poprzedzone `./`. Jeżeli zatem Twój plik ma nazwę `mymodule.js`:

```js
const mymodule = require('./mymodule.js')
```

Rozszerzenie '.js' nie jest obowiązkowe w tym wywołaniu i często będziesz spotykać się z przypadkami, gdzie jest ono pomijane.

W wyniku tych działań do zmiennej `mymodule` przypisany jest teraz obiekt `module.exports` z Twojego pliku modułu. Ponieważ obiekt ten stanowi pojedynczą funkcję, `mymodule` jest również funkcją, którą możesz wywołać!

Pamiętaj również o tym, że naturalne jest sprawdzanie czy istnieją błędy i wcześniejsze zwracanie kontroli z funkcji callback w takim wypadku:

```js
function bar (callback) {
  foo(function (err, data) {
    if (err) { return callback(err) } // wcześniejsze zwrócenie kontroli

    // ... brak błędów, szalej dalej z wartością argumentu `data`.

    // wszystko poszło pięknie, wywołaj funkcję callback z wartością `null` dla argumentu błędu

    callback(null, data)
  })
}
```
