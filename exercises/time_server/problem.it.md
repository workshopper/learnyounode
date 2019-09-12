Scrivi un **time server TCP**!

Il tuo server deve ascoltare connessioni TCP sulla porta fornita come primo argomento al tuo programma. Per ciascuna connessione devi scrivere la data attuale e il tempo nel formato 24 ore nella forma:

```
"YYYY-MM-DD hh:mm"
```

seguito da un carattere **nuova riga**. Mese, giorno, ora e minuto devono essere *riempiti con zeri* per occupare 2 cifre. Ad esempio:

```
"2013-07-06 17:42"
```

----------------------------------------------------------------------
## SUGGERIMENTI

Per quest'esercizio creeremo un server di basso livello TCP. Non c'è alcun HTTP coinvolto qui quindi dobbiamo usare il modulo `net` di Node core che ha tutte le funzioni di base per le comunicazioni di rete.

Il modulo `net` ha un metodo chiamato `net.createServer()` che riceve una funzione callback. Diversamente da molte callback in Node, la callback usata da `createServer()` viene chiamata più di una volta. Ciascuna connessione ricevuta dal tuo server scatena un'altra chiamata alla callback. La funzione callback ha la firma:

```js
function callback (socket) { /* ... */ }
```

`net.createServer()` restituisce anche un'istanza del tuo `server`. Devi chiamare `server.listen(portNumber)` per cominciare ad ascoltare su una porta specifica.

Un tipico server TCP di Node si presenta così:

```js
const net = require('net')
const server = net.createServer(function (socket) {
  // logica per gestire la socket
})
server.listen(8000)
```

Ricorda di utilizzare il numero di porta a te fornito come primo argomento da riga di comando.

L'oggetto `socket` contiene una quantità di metadati riguardo la connessione, ma è anche uno Stream duplex di Node, cioè vi si può sia leggere che scrivere. Per questo esercizio dobbiamo soltanto scrivere dati e chiudere la socket.

Usa `socket.write(data)` per scrivere dati sulla socket e `socket.end()` per chiudere la socket. In alternativa, il metodo `.end()` riceve anche un oggetto dati quindi puoi semplificare come: `socket.end(data)`.

La documentazione sul modulo `net` può essere ottenuta puntando il tuo browser all'indirizzo:

  {rootdir:/docs-nodejs/net.html}

Per creare la data, dovrai creare un formato personalizzato da un oggetto `new Date()`. I metodi che ti saranno utili sono:

```js
date.getFullYear()
date.getMonth() // comincia da 0
date.getDate() // restituisce il giorno del mese
date.getHours()
date.getMinutes()
```

Oppure, se vuoi essere avventuroso, usa il pacchetto `strftime` di npm. La funzione `strftime(fmt, date)` riceve formati di data proprio come il comando unix `date`. Puoi leggere maggiori dettagli su `strftime` su: https://github.com/samsonjs/strftime
