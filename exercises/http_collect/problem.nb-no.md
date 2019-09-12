Skriv et program som utfører en HTTP GET forespørsel til en URL som gis til deg som det første kommandolinje argumentet. Du skal samle opp **alle** data fra serveren (ikke bare det første "data" eventet) og skrive to linjer til skjermen (stdout).

Første linje skal være et heltall som representerer antallet tegn (characters) mottatt fra serveren. Andre linje skal inneholde hele Stringen av tegn (characters) som ble sendt fra serveren


----------------------------------------------------------------------
## HINT

Det er to mulige løsninger på dette problemet:

**1)** Du kan samle opp dataene fra flere "data" eventer og konkatenere resultatene før det skrives til console (stdout). Benytt eventen "end" for å bestemme om streamen er ferdig og resultatet kan skrives ut.

**2)** Du kan også benytte en tredjeparts modul som abstraherer bort det å hente den hele strømmen med data. Her er to moduler som løser dette (det finnes nok mange flere!): `bl` (Buffer List) og `concat-stream`.

  <https://npmjs.com/bl>
  <https://npmjs.com/concat-stream>

For å installere en Node modul må du bruke Node Package Manager `npm`. Du trenger bare å skrive:

```sh
$ npm install bl
```

Den vil da laste ned og installere siste version av modulen i katalogen `node_modules`. Alle moduler som ligger i denne kataologen kan gjøres tilgjengelig med `require`. Husk at moduler i denne mappen ikke trenger å starte med './'.

```js
const bl = require('bl')
```

Når du benytter require vil Node først lete i hoved modulene og deretter i `node_modules`.

Hvis du ikke har tilgang til internett kan du enkelt opprette en `node_modules` katalog og kopiere modulen du vil benytte inni den katalogen. Modulene ligger der {appname} ble installert.

  {rootdir:/node_modules/bl}
  {rootdir:/node_modules/concat-stream}

En stream kan *pipes* til både `bl` og `concat-stream`. De vil da samle opp alle dataene og når strømmen er ferdig vil et callback bli kalt med dataene fra serveren.

```js
response.pipe(bl(function (err, data) { /* ... */ }))
// or
response.pipe(concatStream(function (data) { /* ... */ }))
```

Du kan benytte `data.toString()` for å konvertere fra Buffer til String.

Dokumentasjonen for begge disse moduelene har blitt installert sammen med {appname} på ditt system. Du kan lese mer om disse her:

  {rootdir:/docs/bl.html}
  {rootdir:/docs/concat-stream.html}
