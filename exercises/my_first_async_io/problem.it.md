Scrivi un programma che usa una singola operazione **asincrona** sul file system per leggere un file e stampare il numero di caratteri di nuova riga che contiene sulla console (stdout), in modo simile all'esecuzione di `cat file | wc -l`.

Il percorso completo del file da leggere verrà fornito come primo argomento da riga di comando.

----------------------------------------------------------------------
# SUGGERIMENTI

La soluzione di questo problema è *quasi* la stessa del problema precedente eccetto che devi ora farlo **alla maniera di Node.js**: asincrona.

Anziché `fs.readFileSync()` vorrai usare `fs.readFile()` e anziché usare il valore di ritorno di questo metodo dovrai raccogliere il valore da una funzione callback che passi come il secondo argomento. Per maggiori informazioni sulle callback, dài un'occhiata a: https://github.com/maxogden/art-of-node#callbacks.

Ricorda che le callback idiomatiche di Node.js hanno normalmente la firma:

```js
function callback (err, data) { /* ... */ }
```

quindi puoi controllare se si è verificato un errore controllando se il primo argomento ha un valore di verità. Se non si è verificato alcun errore, dovresti ricevere il tuo oggetto `Buffer` come secondo argomento. Come per `readFileSync()`, puoi fornire 'utf8' come secondo argomento e passare la callback come terzo argomento, e otterrai un valore `String` anziché un `Buffer`.

La documentazione sul modulo `fs` può essere ottenuta puntando il tuo browser all'indirizzo:
  {rootdir:/docs-nodejs/fs.html}
