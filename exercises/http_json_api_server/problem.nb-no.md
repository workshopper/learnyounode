I denne opgpaven skal du lage en HTTP **server** som leverer ut data i JSON format når den mottar en GET request på URLen '/api/parsetime'. Requesten sin query string vil inneholde et felt 'iso' som har en ISO-formatert time som verdi.

For eksempel:

  /api/parsetime?iso=2013-08-10T12:10:15.474Z

JSON responsen bør inneholde kun 'hour', 'minute' and 'second'. For eksempel:

```json
{
  "hour": 14,
  "minute": 23,
  "second": 15
}
```

Legg deretter et nytt endepunkt som håndtere stien '/api/unixtime'. Den mottar samme query string, men verdien til 'unixtime' vil være UNIX epoch time i millisekunder (som vil si antall millisekunder siden 1 Jan 1970 00:00:00 UTC). For eksempel:

```json
{ "unixtime": 1376136615474 }
```

Serveren din må lytte på porten som sendes inn som første argument til programmet ditt.

----------------------------------------------------------------------
## HINT

`request` objektet fra en HTTP server har et `url` felt som du vil ha bruk for til å kunne *"route"* (eller dirigere) forespørsler for dine to endepunkt.

Du kan gjøre om URL med parametere om til objekter ved hjelp av Node sin 'url' modul. `new URL(request.url)` vil ta innholdet i request.url og gi tilbake et objekt med egenskaper du vil trenge.

For eksempel kan du skrive dette i en terminal:

```sh
$ node -pe "new URL('/test?q=1', 'http://example.com')"
```

Dokumentasjon for `url` modulen finnes her:
  {rootdir:/docs-nodejs/url.html}

Responsen din må være i et JSON streng format. Du kan se i metoden `JSON.stringify()` for mer informasjon.

Du kan også være en god venn å sette riktig Content-Type:

```js
res.writeHead(200, { 'Content-Type': 'application/json' })
```

JavaScript sitt `Date` objektet kan skrive ut datoer i ISO format, f.eks `new Date().toISOString()`. Det kan også gjøre om strenger på dette formatet til objekter dersom du sender en streng inn til `Date` kontruktøren. `Date#getTime()` vil du også kunne trenge.
