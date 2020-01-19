Skriv en **klokkeserver** som kommuniserer ved hjelp av **TCP**.

Du skal lytte på TCP tilkoblinger på porten som vil bli gitt som første argument til ditt program. For hver tilkobling skal du returnere datoen og klokka på formatet:

```
"YYYY-MM-DD hh:mm"
```

og avslutte vær linje med et **linjeskift**. Måned, dag, time og minutt skal inneholde 2 heltall. For eksempel:

```
"2013-07-06 17:42"
```

----------------------------------------------------------------------
## HINT

I denne oppgaven skal vi opprette en enkel TCP server. Siden det ikke er noe HTTP i bildet, så må vi benytte `net` modulen fra Node core. `net` modulen inneholder alle basis nettverksfunksjonene.

I `net` modulen finner man metoden `net.createServer()`. `net.createServer()` tar i mot en callback funksjon som vil bli kalt en gang per tilkobling serveren mottar. Callback funksjonen har denne signaturen:

```js
function callback (socket) { /* ... */ }
```

`net.createServer()` returnerer et server objekt. På dette server objektet må du kalle `server.listen(portnummer)` på for at serveren skal starte å lytte på en gitt port.

En typisk Node TCP server vil se slik ut:

```js
const net = require('net')
const server = net.createServer(function (socket) {
  // socket håndtering
})
server.listen(8000)
```

Husk at du må benytte portnummeret som blir gitt som første kommandolinje argument.

Et `socket` objekt vil inneholde masse metainformasjon om vær tilkobling. Dette objektet er av typen Node duplex Stream. En duplex Stream kan både leses fra og skrives til. I denne oppgaven må du gjøre begge deler og lukke tilkoblingen når du er ferdig.

Benytt `socket.write(data)` for å skrive og `socket.end()` for å lukke socketen (tilkobligen). Du kan forenkle dette litt ved å skrive `socket.end(data)`.

Dokumentasjonen til `net` finner du her:

  {rootdir:/docs-nodejs/net.html}

Etter å ha opprettet et `new Date()` object, vil disse funksjonene være til hjelp får å få riktig format:

```js
date.getFullYear()
date.getMonth() // starter på 0
date.getDate() // returnerer dagen i måneden
date.getHours()
date.getMinutes()
```

Hvis du vil ta det et steg lenger kan du benytte `strftime` modulen fra npm. `strftime(fmt, date)` funksjonen tar et dato format på samme måte som unix sin `date` kommando. Du kan lese mer om strftime på https://github.com/samsonjs/strftime
