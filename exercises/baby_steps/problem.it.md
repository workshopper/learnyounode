Scrivi un programma che accetta uno o più numeri come argomenti da riga di comando e stampa la somma di tali numeri sulla console (stdout).

----------------------------------------------------------------------
## SUGGERIMENTI

Puoi accedere agli argomenti della riga di comando attraverso l'oggetto globale `process`. L'oggetto `process` possiede una proprietà `argv` che è un array contenente la riga di comando completa, ovvero `process.argv`.

Per cominciare, scrivi un programma che contiene semplicemente:

```js
console.log(process.argv)
```

Eseguilo con `node program.js` e dei numeri come argomenti. Ad es.:

```sh
$ node program.js 1 2 3
```

In tal caso il programma stamperebbe un array come il seguente:

```js
['node', '/path/to/your/program.js', '1', '2', '3']
```

Dovrai pensare a come iterare sugli argomenti numerici in maniera da produrne la somma. Il primo elemento dell'array `process.argv` è sempre 'node', e il secondo elemento è sempre il percorso al tuo file `program.js`, perciò dovrai cominciare dal terzo elemento (indice 2), aggiungendo ciascun elemento al totale fino a raggiungere la fine dell'array.

Tieni anche presente che tutti gli elementi di `process.argv` sono stringhe e potresti dover  *forzare* la loro conversione a numeri. Puoi fare ciò prefiggendo la proprietà con `+` o passandola a `Number()`. Ad es. `+process.argv[2]` o `Number(process.argv[2])`.

{appname} fornirà gli argomenti al tuo programma quando esegui `{appname} verify program.js` quindi non hai bisogno di fornirli da te. Per provare il tuo programma senza verificarlo, puoi invocarlo con `{appname} run program.js`. Quando usi `run`, stai invocando l'ambiente di prova che {appname} imposta per ciascun esercizio.
