Skriv et program som tar imot en eller flere tall som kommandolinje argumenter og sskriver ut summer av disse til skjermen (stdout).

----------------------------------------------------------------------
## HINT

Du har tilgang til kommandolinje argumenter vi det globale objektet `process`. `process` objektet har en `argv` egenskap, en array, som inneholder hele kommandolinjen mao `process.argv`.

For å begynne, skrive et program som gjør dette:

```js
console.log(process.argv)
```

Kjør programmet med `node program.js` og noen tall som argumenter f.eks:

```sh
$ node program.js 1 2 3
```

Programmet vil skrive ut en array med tall som ser slik ut:

```js
['node', '/filsti/til/ditt/program.js', '1', '2', '3']
```

Du er nødt til å tenke gjennom hvordan gå gjennom argumentene slik at du kan skrive ut summen av dem. Det første elementet av process.argv array'et er alltid 'node', og det andre er alltid filstien til  program.js filen. Derfor må du starte med det tredje elementet (index 2) også summere hvert element helt til du når enden av array'et.

Vær oppmerksom på at alle elementer i `process.argv` er strenger og du må derfor *konvertere* dem til tall. Du kan gjøre dette med å brke `+` eller `Number()` som f.eks `+process.argv[2]` eller `Number(process.argv[2])`.

{appname} sender inn argumentene til programmet ditt når du kjører `{appname} verify program.js` så du slipper å sende dem inn. For å teste programmet uten å verifisere kan du kjøre `{appname} run program.js`. Når du bruker `run`, kjører du test miljøet som {appname} setter opp for hver oppgave.
