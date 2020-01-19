Scrivi un programma che stampi una lista di file in una data directory, filtrata per l'estensione dei file. Ti verrà fornito il nome di una directory come primo argomento al tuo programma (ad es. '/percorso/alla/directory/') e una estensione di file con cui filtrare come secondo argomento.

Ad esempio, se ottieni 'txt' cone secondo argomento dovrai filtrare la lista per restituire i soli file il cui nome **termina con .txt**. Nota che il secondo argomento _non verrà_ fornito con il prefisso '.'.

La lista dei file deve essere stampata sulla console, un file per riga. **Devi** usare I/O asincrono.

----------------------------------------------------------------------
## SUGGERIMENTI

Il metodo `fs.readdir()` riceve un percorso come primo argomento e una callback come secondo. La firma della callback è:

```js
function callback (err, list) { /* ... */ }
```

dove `list` è un array di stringhe di nomi di file.

La documentazione del modulo `fs` può essere ottenuta puntando il tuo browser a questo indirizzo:
  {rootdir:/docs-nodejs/fs.html}

Puoi inoltre trovare utile il modulo `path` di node, in particolare il metodo `extname`.

La documentazione del modulo `path` può essere ottenuta puntando il tuo browser a questo indirizzo:
  {rootdir:/docs-nodejs/path.html}
