Scrivi un programma che usi una singola operazione **sincrona** sul file system per leggere un file e stampare il numero di caratteri di nuova riga (\n) che contiene sulla console (stdout), in maniera simile all'esecuzione del comando `cat file | wc -l`.

Il percorso completo al file da leggere sarà fornito come il primo argomento da riga di comando (cioè process.argv[2]). Non c'è bisogno di creare da te un file di prova.

----------------------------------------------------------------------
## SUGGERIMENTI

Per effettuare operazioni sul file system avrai bisogno del modulo `fs` dalla libreria Node core. Per caricare questo tipo di modulo, o qualsiasi altro modulo "globale", usa il seguente incantesimo:

```js
const fs = require('fs')
```

Dopodiché disporrai dell'intero modulo `fs` in una variabile chiamata `fs`.

Tutti i metodi sincroni (o bloccanti) sul file system del modulo `fs` terminano con 'Sync'. Per leggere un file, dovrai usare `fs.readFileSync('/percorso/al/file')`. Questo metodo *restituirà* un oggetto `Buffer` contenente l'intero contenuto del file.

La documentazione sul modulo `fs` può essere trovata puntando il tuo browser all'indirizzo:
  {rootdir:/docs-nodejs/fs.html}

Gli oggetti `Buffer` sono la maniera usata da Node per rappresentare efficientemente array arbitrari di dati, sia che si tratti di ascii, binari o qualunque altro formato. Gli oggetti `Buffer` possono essere convertiti in stringhe semplicemente chiamando il metodo `toString()` su di essi, ad es. `const str = buf.toString()`.

La documentazione sui `Buffer` può essere trovata puntando il tuo browser all'indirizzo:
  {rootdir:/docs-nodejs/buffer.html}

Se stai cercando una maniera semplice di contare il numero di andate a capo in una stringa, ricorda che un oggetto `String` di JavaScript possiede un metodo `.split()` che lo suddivide in un array di sottostringhe, e che '\n' può essere usato come un delimitatore. Nota che il file di prova non possiede un carattere di nuova riga ('\n') alla fine dell'ultima riga, quindi usando questo metodo otterrai un array che ha un elemento in più del numero di nuove righe.
