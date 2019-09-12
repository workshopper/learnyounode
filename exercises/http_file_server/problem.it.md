Scrivi un **server** HTTP che restituisca lo stesso file di testo per ciascuna richiesta ricevuta.

Il tuo server deve ascoltare sulla porta fornita come primo argomento al tuo programma.

Ti verrà fornita la posizione del file da servire come il secondo argomento da riga di comando. **Devi** usare il metodo `fs.createReadStream()` per trasferire i contenuti del file alla risposta tramite uno stream.

----------------------------------------------------------------------
## SUGGERIMENTI

Dal momento che per questo esercizio dobbiamo creare un server HTTP anziché un generico server TCP, dobbiamo usare il modulo `http` di Node core. Come il modulo `net`, anche `http` possiede un metodo chiamato `http.createServer()` ma a differenza di quello, questo crea un server che può parlare in HTTP.

`http.createServer()` riceve una callback che viene chiamata una volta per ciascuna connessione ricevuta dal tuo server. La funzione callback ha la firma:

```js
function callback (request, response) { /* ... */ }
```

In cui i due argomenti sono oggetti che rappresentano la richiesta HTTP e la corrispondente risposta. `request` è usato per accedere alle proprietà, come le intestazioni e la stringa di ricerca dalla richiesta, mentre `response` è usato per inviare dati al client, sia intestazioni che il corpo.

Sia `request` che `response` sono anch'essi stream di Node! Il che significa che puoi usare le astrazioni di streaming per inviare e ricevere dati se si adattano al tuo caso d'uso.

`http.createServer()` restituisce anche un'istanza del tuo `server`. Devi chiamare `server.listen(portNumber)` per cominciare ad ascoltare su una porta specifica.

Un tipico HTTP server in Node si presenta così:

```js
const http = require('http')
const server = http.createServer(function (req, res) {
  // logica per gestire la richiesta...
})
server.listen(8000)
```

La documentazione sul modulo `http` può essere ottenuta puntando il tuo browser all'indirizzo:
  {rootdir:/docs-nodejs/http.html}

Il modulo core `fs` possiede anche delle API streaming per i file. Dovrai usare il metodo `fs.createReadStream()` per creare uno stream che rappresenta il file che ti viene passato come argomento da riga di comando. Il metodo restituisce un oggetto stream sul quale puoi usare `src.pipe(dst)` per effettuare il pipe dei dati dallo stream `src` allo stream `dst`. In questo modo puoi connettere uno stream del file system con uno stream della risposta HTTP.
