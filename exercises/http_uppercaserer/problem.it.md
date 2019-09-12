Scrivi un **server** HTTP che riceva solo richieste POST e converta i caratteri nel corpo delle richieste POST in maiuscolo e li restituisce al client.

Il tuo server deve ascoltare sulla porta fornita come primo argomento del tuo programma.

----------------------------------------------------------------------
## SUGGERIMENTI

Anche se non sei costretto ad usare le capacità di streaming degli oggetti `request` e `response`, il compito ti risulterà molto più semplice se le userai.

Esistono un numero di diversi pacchetti in npm che possono essere utilizzati per *"trasformare"* i dati degli stream al volo. Il pacchetto `through2-map` offre l'API più semplice per svolgere quest'esercizio.

`through2-map` ti permette di creare una *stream di trasformazione* usando soltanto una singola funzione che riceve un frammento di dati e restituisce un frammento di dati. È concepita per funzionare in maniera simile a `Array#map()` ma per gli stream:

```js
const map = require('through2-map')
inStream.pipe(map(function (chunk) {
  return chunk.toString().split('').reverse().join('')
})).pipe(outStream)
```

Nell'esempio precedente, i dati in arrivo da `inStream` sono convertiti in una stringa (se non lo sono già), i caratteri sono invertiti e il risultato viene passato ad `outStream`. In pratica abbiamo costruito un invertitore di blocchi di caratteri! Ricorda tuttavia che la dimensione del blocco viene determinata a monte e hai poco controllo su di esso per dati in ingresso.

Per installare `through2-map` scrivi:

```sh
$ npm install through2-map
```

Se non disponi di una connessione ad Internet, crea semplicemente una directory `node_modules` e copia al suo interno l'intero contenuto della directory del pacchetto che desideri utilizzare dentro la directory di installazione di {appname}:

  {rootdir:/node_modules/through2-map}

La documetazione di `through2-map` è stata installata assieme a {appname} sul tuo sistema e puoi leggerla puntando il tuo browser all'indirizzo:

  {rootdir:/docs/through2-map.html}
