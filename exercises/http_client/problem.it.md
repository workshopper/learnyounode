Scrivi un programma che effettua una richiesta HTTP GET ad un URL fornito come primo argomento da riga di comando. Scrivi il contenuto di **ciascun** evento "data" della risposta come una stringa su una nuova riga della console (stdout).

----------------------------------------------------------------------
## SUGGERIMENTI

Per questo esercizio avrai bisogno di usare il modulo core `http`.

La documentazione del modulo `http` può essere ottenuta puntando il tuo browser a questo indirizzo:
  {rootdir:/node_apidoc/http.html}

Il metodo `http.get()` è una scorciatoia per semplici richieste GET, usalo per semplificare la tua soluzione. Il primo argomento di `http.get()` può essere l'URL che desideri richiedere con GET; fornisci una callback come secondo argomento.

Diversamente da altre funzioni callback, questa ha la firma:

```js
function callback (response) { /* ... */ }
```

In cui l'oggetto `response` è un oggetto **Stream** di Node. Puoi trattare gli Stream di Node come oggetti che emettono eventi. The three events that are of most interest are: "data", "error" and "end". You listen to an event like so:

```js
response.on("data", function (data) { /* ... */ })
```

L'evento "data" è emesso quando un frammento di dati è disponibile e può essere processato. La dimensione del frammento dipende dalla fonte dati sottostante.

L'oggetto `response` / Stream che ottieni da `http.get()` ha anche un metodo `setEncoding()`. Se chiami questo metodo con "utf8", gli eventi "data" emetteranno oggetti String anziché oggetti standard `Buffer` di Node che dovrai esplicitamente convertire in stringhe.

----------------------------------------------------------------------
