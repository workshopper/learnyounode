
Skriv en HTTP **server** som kun tar imot POST forespørsler og konverterer all tekst som ligger i body på forespørselen til store bokstaver, og til slutt sender de tilbake på responsen.

Serveren din må lytte på porten som blir sendt inn som første argument til programmet ditt.

----------------------------------------------------------------------
## HINT

Du er ikke nødt til å bruke streaming-egenskapene til `request` and `response` objektene, men å gjøre det vil gjøre programmet ditt enklere.

Det er mange ulike moduler i npm som tilbyr å gjøre om stream-data. I denne oppgaven bør du bruke `through2-map`, som tilbyr et veldig enkelt prorammerings grensensnitt.

`through2-map` lar deg opprette en *transform stream* ved kun å bruk en enkel funksjon som tar en bit data og returnerer en bit data. Funksjonen er ment å virke slik som `Array#map()`, men for streams:

```js
const map = require('through2-map')
inStream.pipe(map(function (chunk) {
  return chunk.toString().split('').reverse().join('')
})).pipe(outStream)
```

I eksemplet ovenfor blir dataene som kommer fra `inStream` konvertert til en String (hvis den ikke allerede er en String), bokstravene i strengen blir reversert og resultatet sendt videre til `outStream`. Med andre ord har vi lagt en modul som reverserer bokstavene i en bit data! Du må riktignok huske på at størrelsen på data biten blir bestemt før leser strømmen, så du har liten kontroll over den når du håndterer inkommende data..

For å installere `through2-map` skriver du dette:

```sh
$ npm install through2-map
```

Hvis du ikke er tilkoblet Internett kan du lage en `node_modules` katalog også kopiere hele katalogen for modulen du vil bruke fra {appname} instalasjons katalogen:

  {rootdir:/node_modules/through2-map}

Dokumentasjon for through2-map finner du her:

  {rootdir:/docs/through2-map.html}
