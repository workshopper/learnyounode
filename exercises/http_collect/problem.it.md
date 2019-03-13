Scrivi un programma che effettui una richiesta HTTP GET ad un URL fornito come primo argomento da riga di comando. Raccogli **tutti** i dati dal server (non soltanto il primo evento "data") e successivamente scrivi due righe sulla console (stdout).

La prima riga dovrà essere un numero intero che rappresenta il numero di caratteri ricevuti dal server. La seconda riga dovrà contenere la stringa completa di caratteri inviati dal server.

----------------------------------------------------------------------
## SUGGERIMENTI

Esistono due approcci possibili per risolvere questo problema:

**1)** Raccogli i dati attraverso molteplici eventi "data" e concatena i singoli risultati prima di stampare il risultato. Usa l'evento "end" per determinare quando lo stream si è concluso e puoi scrivere il risultato.

**2)** Usa un pacchetto di terze parti per astrarre le difficoltà relative alla raccolta di un intero stream di dati. Due pacchetti diversi forniscono un'API utile per risolvere questo problema (e ve ne sono probabilmente altri ancora!): `bl` (Buffer List) e `concat-stream`; fai la tua scelta!

  <https://npmjs.com/bl>
  <https://npmjs.com/concat-stream>

Per installare un pacchetto di Node, usa il Node Package Manager `npm`. Scrivi semplicemente:

```sh
$ npm install bl
```

Ed esso scaricherà e installerà l'ultima versione del pacchetto in una sottodirectory chiamata `node_modules`. Ciascun pacchetto in questa sottodirectory sotto il tuo file principale del programma può essere caricato con la sintassi `require` senza ricorrere al prefisso './':

```js
const bl = require('bl')
```

Node cercherà anzitutto nei moduli core, e successivamente nella directory `node_modules` in cui si trova il pacchetto.

Se non disponi di una connessione ad Internet, crea semplicemente una directory `node_modules` e copia al suo interno l'intero contenuto della directory del pacchetto che desideri utilizzare dentro la directory di installazione di {appname}:

  {rootdir:/node_modules/bl}
  {rootdir:/node_modules/concat-stream}

Sia `bl` che `concat-stream` possono ricevere uno stream *tramite una pipe* e raccoglieranno i dati al posto tuo. Una volta che lo stream è terminato, verrà eseguita una callback con i dati:

```js
response.pipe(bl(function (err, data) { /* ... */ }))
// or
response.pipe(concatStream(function (data) { /* ... */ }))
```

Nota che avrai probabilmente bisogno di invocare `data.toString()` per convertire il risultato di tipo Buffer.

La documentazione per ciascuno di questi moduli è stata installata con {appname} sul tuo sistema e puoi leggerla puntando il tuo browser agli indirizzi:

  {rootdir:/docs/bl.html}
  {rootdir:/docs/concat-stream.html}
