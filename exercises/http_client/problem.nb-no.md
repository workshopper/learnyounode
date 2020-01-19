Skriv et program som utfører en HTTP GET forespørsel til en URL som gis til deg som det første kommandolinje argumentet. Skriv String innholdet fra **hver eneste** "data" event fra responsen til en ny linje i console (stdout).

----------------------------------------------------------------------
## HINT

For denne oppgaven må du bruke `http` modulen.

Dokumentasjonen til `http` modulen kan du finne her:
  {rootdir:/docs-nodejs/http.html}

`http.get()` er en hjelpemetode for å gjøre enkle GET forespørsler, bruk den i løsningen din. Det første argumentet til `http.get()` kan være URLen du ønske forespørre. Gi en callback funksjon som det andre argumentet.

Til forskjell fra andre callback funksjoner, har denne callbacken følgende signatur:

```js
function callback (response) { /* ... */ }
```

Her er `response` objektet er et Node **Stream** objekt. Du kan behandle Node Streams som objekter som sender ut eventer. De tre eventene som er mest interessante er: "data", "error" og "end". Du lytter en event på denne måten:

```js
response.on('data', function (data) { /* ... */ })
```

Data eventen sendes ut når en bit av dataen er tilgjengelig og kan behandles. Datastørrelsen avhenger av den underliggende datakilden.

`response` objektet / Stream du får fra `http.get()` har også en `setEncoding()` metode. Kaller du den metoden med "utf8" som argument, vil "data" eventene levere String istedefor et standard Node `Buffer` objekt som du selv må konvertere til en String.
