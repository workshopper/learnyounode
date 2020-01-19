Questo problema è lo stesso del precedente ma introduce il concetto di **moduli**. Dovrai creare due file per risolverlo.

Scrivi un programma che stampi una lista di file in una data directory, filtrata per l'estensione dei file. Il primo argomento è il nome della directory e il secondo argomento è il filtro dell'estensione. Stampa la lista dei file (un file per riga) sulla console. **Devi** usare I/O asincrono.

Devi scrivere un file *modulo* che svolga la maggior parte del lavoro. Il modulo deve *esportare* una singola funzione che riceve **tre** argomenti: il nome della directory, la stringa dell'estensione del nome di file e una funzione callback, in quest'ordine. L'argomento dell'estensione del nome di file deve essere lo stesso passato al tuo programma. Non trasformarlo in un'espressione regolare o prefiggerlo con "." o qualunque altra cosa eccetto passarlo al tuo modulo, in cui puoi fare ciò che serve per fare funzionare il tuo filtro.

La funzione callback deve essere chiamata usando la convenzione idiomatica `node(err, data)`. Questa convenzione stipula che, a meno che si verifichi un errore, il primo argomento passato alla callback sarà nullo, e il secondo saranno i tuoi dati. In questo esercizio, i dati saranno la tua lista filtrata di file, come un Array. Se ricevi un errore, ad es. dalla tua chiamata a  `fs.readdir()`, la callback deve essere chiamata con l'errore, e soltanto l'errore, come primo argomento.

**Non devi** stampare direttamente dalla console dal tuo file modulo, solo dal tuo programma originale.

Nel caso in cui un errore ritorni al tuo file originale del programma, effettua semplicemente un controllo e stampa un messaggio informativo sulla console.

Queste quattro proposizioni sono il contratto che il tuo modulo deve ubbidire.

1. Esportare una singola funzione che riceve esattamente gli argomenti descritti.
2. Chiamare la callback esattamente una volta con un errore o dei dati come descritti.
3. Non cambiare nient'altro, come variabili globali o stdout.
4. Gestire tutti gli errori che possono verificarsi e passali alla callback.

Il beneficio di avere un contratto è che il tuo modulo può essere usato da chiunque si attenda questo contratto. Quindi il tuo modulo potrebbe essere usato da chiunque altri esegua {appname}, o il verificatore, e funzioni.

----------------------------------------------------------------------
## SUGGERIMENTI

Crea un nuovo modulo creando un nuovo file che contiene soltanto la tua funzione di lettura della directory e filtraggio. Per definire l'*esportazione* di una *singola funzione*, assegna la tua funzione all'oggetto `module.exports`, sovrascrivendo ciò che vi si trova già:

```js
module.exports = function (args) { /* ... */ }
```

Oppure puoi dichiarare una funzione con un nome e assegnarne il nome a `module.exports`.

Per usare il tuo nuovo modulo nel tuo file di programma originale, usa la chiamata `require()` nella stessa maniera in cui chiami `require('fs')` per caricare il modulo `fs`. La sola differenza è che per moduli locali devi usare il prefisso './'. Quindi, se il tuo file è chiamato mymodule.js:

```js
const mymodule = require('./mymodule.js')
```

L'estensione '.js' è opzionale e la troverai spesso omessa.

Adesso hai l'oggetto `module.exports` del tuo modulo assegnato alla variabile `mymodule`. Dal momento che stai esportando una singola funzione, `mymodule` è una funzione che puoi invocare!

Tieni anche a mente che è una forma idiomatica controllare la presenza di errori e ritornare anzitempo dalle funzioni callback:

```js
function bar (callback) {
  foo(function (err, data) {
    if (err) { return callback(err) } // ritorno anticipato

    // ... nessun errore, continua a cose interessanti con `data`

    // è andato tutto bene, invoca la callback con `null` come argomento errore

    callback(null, data)
  })
}
```
