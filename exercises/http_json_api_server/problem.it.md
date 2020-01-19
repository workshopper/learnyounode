Scrivi un **server**  HTTP che serva dati JSON quando riceve una richiesta GET al percorso '/api/parsetime'. Aspettati una richiesta contenente una query string con una chiave 'iso' e un valore di tempo in formato ISO come valore.

Ad esempio:

  /api/parsetime?iso=2013-08-10T12:10:15.474Z

La risposta JSON deve contenere soltanto le proprietà 'hour', 'minute' e 'second'. Ad esempio:

```json
{
  "hour": 14,
  "minute": 23,
  "second": 15
}
```

Aggiungi un secondo endpoint per il percorso '/api/unixtime' che accetta la stessa query string, ma restituisce un tempo in formato UNIX epoch time in millisecondi (il numero di millisecondi dal 1 Gennaio 1970 00:00:00 UTC) sotto la proprietà 'unixtime'. Ad esempio:

```json
{ "unixtime": 1376136615474 }
```

Il tuo server deve ascoltare sulla porta fornita come primo argomento al tuo programma.

----------------------------------------------------------------------
## SUGGERIMENTI

L'oggetto `request` di un server HTTP possiede una proprietà `url` di cui avrai bisogno per  *"instradare"* le tue richieste ai due endpoint.

Puoi decodificare l'URL e la query string usando il modulo Node core 'url'. `new URL(request.url)` decodificherà il contenuto di request.url e ti restituirà un oggetto con proprietà utili.

Ad esempio, scrivi sulla riga di comando:

```sh
$ node -pe "new URL('/test?q=1', 'http://example.com')"
```

La documentazione sul modulo `url` può essere ottenuta puntando il tuo browser all'indirizzo:
  {rootdir:/docs-nodejs/url.html}

La tua risposta deve essere in formato stringa JSON. Dài un'occhiata a `JSON.stringify()` per maggiori informazioni.

Il tuo server deve anche essere un buon cittadino del web e impostare il Content-Type in modo appropriato:

```js
res.writeHead(200, { 'Content-Type': 'application/json' })
```

L'oggetto JavaScript `Date` può produrre date in formato ISO, ad es. `new Date().toISOString()`. Può anche decodificare questo formato se gli passi una stringa al costruttore `Date`. `Date#getTime()` tornerà anch'esso utile.
