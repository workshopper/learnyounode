Ten problem jest taki sam jak poprzedni (HTTP COLLECT) w sensie potrzeby wykorzystania `http.get()`. Tym razem jednak Twój program otrzyma **trzy** URLe jako pierwsze trzy argumenty wiersza poleceń.

Musisz zebrać całą zawartość otrzymaną z każdego z URLi i wypisać ją na konsolę (stdout). Nie musisz wypisywać długości, wystarczą dane jako ciąg znaków - jedna linia na URL. Haczyk tkwi w tym, że **musisz** wypisać je w takiej samej kolejności w jakiej URLe przekazane zostały do Twojej aplikacji.

----------------------------------------------------------------------
## WSKAZÓWKI

Nie spodziewaj się, że te trzy zewnętrzne serwery będą miłe i kochane! Nie dostaniesz od nich odpowiedzi w kolejności, na którą liczysz - nie możesz zatem w naiwny sposób po prostu wypisać ich na konsolę zaraz po otrzymaniu; kolejność nie będzie wtedy prawidłowa.

Zaistnieje potrzeba zakolejkowania wyników i pamiętania ile URLi zwróciło całą odpowiedź. Dopiero gdy masz je wszystkie możesz wypisać dane na konsolę.

Zliczanie wywołań funkcji callback stanowi jeden z podstawowych sposobów radzenia sobie z asynchronicznością w Node.js. W praktyce wygodniejsze od ogarnięcia tego własnoręcznie może być poleganie na zewnętrznej bibliotece takiej jak [async](https://npmjs.com/async) lub [after](https://npmjs.com/after). Na potrzeby tego ćwiczenia spróbuj jednak osiągnąć cel własnymi siłami.
