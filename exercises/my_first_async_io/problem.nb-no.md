Skrive et program som bruker en **asynkron** operasjon mot filesystemet for å lese en fil, og skrive ut antallet newlines (\n) den inneholder til skjermen (stdout). Tilsvarer det samme som å kjøre kommandoen  `cat file | wc -l`.

Hele filstien til filen du skal lese vil bli sendt inn som første kommandolinjeargument.

----------------------------------------------------------------------
# HINT

Løsningen på problemet er nesten identisk med løsningen på det forrige problemet. Eneste forskjellen er at du må løse problemet på **Node.js måten**: asynkront.

I stede for å bruke `fs.readFileSync()` vil du nå benytte `fs.readFile()`. Denne vil ikke returnere svaret som i forrige oppgave, men gi svaret i en callback funksjon. Callback funksjonen skal gis som det andre parameteret til `fs.readFile()`. For å lære mer om callbacks kan du lese https://github.com/maxogden/art-of-node#callbacks.

Husk at den idiomatiske Node.js måten for callbacks normalt har signaturen:

```js
function callback (err, data) { /* ... */ }
```

og du kan derfor sjekke om **err argumentet**  inneholder en feil. Hvis det ikke var noen feil burde du ha et `Buffer` objekt i **data argumentet**. På samme måte som `readFileSync()` kan du oppgi 'utf8' som det andre argumentet, callback funksjonen som det tredje argumentet og du vil få en `String` i stede for et `Buffer`.

Dokumentasjonen til `fs`s finner du her:
  {rootdir:/docs-nodejs/fs.html}
