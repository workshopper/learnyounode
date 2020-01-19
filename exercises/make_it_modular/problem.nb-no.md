Denne oppgaven er lik den forrige, men introduserer konseptet **moduler*. Du må opprettet to filer for å løse oppgaven.

Skriv et program som skriver ut en liste med filenavn fra en gitt katalog filtrert på filetternavn. Programmet skal ta imot to argumenter der første argumentet er stien til katalogen ('/vei/til/katalog') og det andre argumentet er filetternavnet som skal filtreres på. Listen med filer skal skrives til konsoll, en fil per linje. Du **må* benytte asynkron I/O.

I denne oppgaven skal du opprette en **modul**, i dette tilfellet en fil, og en funksjon som vil lese opp listen med filnavn og filterer bort de som ikke har riktig filetternavn. Funksjonen skal ta imot **tre** argumenter: stien til katalogen, filetternavnet og en callback funksjon. Det er viktig at argumentene kommer i riktig rekkefølge.

En callback funksjon skal følge konvensjonen node(err, data). Denne konvensjonen sier at hvis det ikke har oppstått en feil skal det første argumentet være null og det andre argumentet dataene dine. I denne oppgaven skal dataene være din filterte liste med filnavn, der listen er av typen Array. Hvis det oppstår en feil når du kaller på `fs.readdir()`, må du kalle callbacket med den feilen som det første argumentet.

Du skal **ikke** skrive direkte til konsoll fra modul filen, men fra hovedprogrammet.

I hovedprogrammet må du sjekke om det oppstår en feil i modul filen. Hvis det oppstår en feil skal du skrive ut en informativ melding til konsoll.

Disse fire ting er kontrakten mellom modulen din og den som skal bruke den:
1. Eksporter en funksjon som tar imot argumentene som er nevnt.
2. Kall callback funksjon kun en gang med enten en feil eller dataene som er beskrevet.
3. Du skal ikke endre noe annet som for eksempel globale variabler eller stdout.
4. Håndter alle feil som kan oppstå og send de til callback funksjonen

Fordelen med en kontrakt er at modulen kan bli benyttet av alle som forventer den samme kontrakten.

----------------------------------------------------------------------
## HINT

Lag en modul ved å opprette en ny fil som inneholder funksjonen som leser filene i en katalog og filtrerer bort filnavn som ikke har riktig filetternavn. For å *eksportere* *funksjonen* må du tilordne funksjonen til `module.exports` objektet:

```js
module.exports = function (args) { /* ... */ }
```

Du kan også gi funksjonen et navn og tilordne navnet til `module.exports` objektet.

Dette kalles å eksportere eller tilgjengeliggjøre funksjonen på modulen.

For å kunne benytte den nye modulen i hovedprogrammet må du kalle på `require()` funksjonen på samme måte som når du lastet inn `fs` modulen `require('fs')`. Den eneste forskjellen er at lokale moduler må starte med './'. Hvis filen din heter minmodul.js blir require() kallet slik:

```js
const minmodul = require('./minmodul.js')
```

'.js' er valgfritt og du vil ofte se at den er utelatt.

`minmodul` variabelen skal nå være tilordnet `module.exports` objektet. Siden du eksporterte en funksjon, vil `minmodul` være en funksjon du kan kalle på!

Husk at man burde sjekke etter feil og kalle på callback funksjoner så tidlig så mulig:

```js
function bar (callback) {
  foo(function (err, data) {
    if (err) { return callback(err) } // returner tidlig

    // ... ingen feil, fortsett å gjøre kule ting med `data`

    // alt gikk bra, kall på callback funksjonen med `null` som feil argument

    callback(null, data)
  })
}
```
