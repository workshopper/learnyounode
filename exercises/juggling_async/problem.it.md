Questo problema è uguale al problema precedente (HTTP COLLECT) per via dell'uso di `http.get()`. Tuttavia, stavolta ti verranno forniti **tre** URL come i primi tre argomenti da riga di comando.

Devi raccogliere il contenuto completo fornito da ciascuno degli URL e stamparlo sulla console (stdout). Non devi scrivere la lunghezza, soltanto i dati come una stringa; una riga per ciascun URL. La difficoltà è che **dovrai** scriverli nello stesso ordine in cui gli URL sono forniti come argomenti da riga di comando.

----------------------------------------------------------------------
## SUGGERIMENTI

Non ti aspettare che questi tre server collaborino! Non ti daranno risposte complete nell'ordine da te sperato, quindi non puoi ingenuamente stampare i risultati nel momento in cui li ricevi perché si troveranno nell'ordine sbagliato.

Dovrai accodare i risultati e tener traccia di quanti URL hanno già restituito il loro intero contenuto. Solo quando li avrai ottenuti tutti potrai stampare i dati sulla console.

Contare le callback è una delle maniere fondamentali di gestire il comportamento asincrono in Node. Anziché farlo da te, potresti trovare più conveniente affidarti ad una libreria di terze parti come [async](https://npmjs.com/async) o [after](https://npmjs.com/after). Tuttavia, per quest'esercizio prova a fare a meno di qualsiasi libreria esterna di supporto.
