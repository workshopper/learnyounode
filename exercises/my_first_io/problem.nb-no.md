Skrive et program som bruker en **synkron** operasjon mot filesystemet for å lese en fil, og skrive ut antallet newlines (\n) den inneholder til skjermen (stdout). Tilsvarer det samme som å kjøre kommandoen  `cat file | wc -l`.

Hele filstien til filen du skal lese vil bli sendt inn som første kommandolinjeargument. Du behøver ikke å lage en egen testfil.

----------------------------------------------------------------------
## HINT

Du trenger `fs` modulen fra Node core biblioteket for å kjøre operasjoner mot filsystemet. For å laste inn denne typen moduler, eller andre "globale" moduler, kan du skrive dette:

```js
const fs = require('fs')
```

Nå har du hele `fs` modulen tilgjengelig i variabelen  `fs`.

Alle synkrone (eller blokkerende) metoder i `fs` modulen ender på 'Sync'. For å lese en fil vil du bruke kallet `fs.readFileSync('/path/to/file')`. Denne metoden vil *returnere* et `Buffer` objekt med innholdet av hele filen.

Dokumentasjonen til `fs` modulen kan du finne her:
  {rootdir:/docs-nodejs/fs.html}

`Buffer` objekter er Node sin måte å effektivt representere arrays med data. Uavhengig av om det er ascii, binære eller noe annet format. `Buffer` objeker can bli konvertert til strengerved å kalle metoden `toString()` på dem. F.eks `const str = buf.toString()`.

Dokumentasjonen til `Buffer`s kan du finne her:
  {rootdir:/docs-nodejs/buffer.html}

Hvis du leter etter en enkel måte å telle antallet newlines i en streng, så huske på at en streng (`String`) i JavaScript kan deles opp i en array av strenger med å kalle `.split()` og at du kan sende inn '\n' som arugment til den. Merk deg at testfilen ikke har en newline ('\n') på slutten av siste linje, så om du bruker denne metoden vil du få en array med ett element mer enn antallet newlines.
