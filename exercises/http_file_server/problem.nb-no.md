Du skal nå skrive en HTTP **server** som for hver forespørsel returnerer en tekstfil.

Serveren skal lytte på porten som den får fra det første kommandolinje argumentet. Det andre kommandolinje argumentet vil være filstien til filen som skal serveres. Du **må** benytte `fs.createReadStream()` metoden for streame innholdet av filen til responsen.

----------------------------------------------------------------------
## HINT

Her skal du opprette en HTTP server istedet for en enkel TCP server. Du skal derfor benytte deg av `http` fra Node. På samme måte som `net` modulen har `http` også en metode kalt `http.createServer()`. Forskjellen er at denne serveren kan snakke over HTTP.

`http.createServer()` `net.createServer()` tar i mot en callback funksjon som vil bli kalt en gang per tilkobling serveren mottar. Callback funksjonen har denne signaturen:

```js
function callback (request, response) { /* ... */ }
```

Callback funksjonen returnerer to argumenter som representerer HTTP forespørselen og responsen til denne forespørselen. `request` vil inneholde meta information som headere og query-string. `response` er for å sende headere og data tilbake til den som gjorde forespørselen.

Både `request` og `response` er Node streams. Dette betyr at du kan benytte deg av metodene du finner på et stream objekt for å sende og motta data.

`http.createServer()` vil returnere et `server` objekt som du må kalle på `server.listen(portNummer)` for at serveren skal lytte på en gitt port.


Slik er et typisk oppsett for å lage en HTTP server i Node:

```js
const http = require('http')
const server = http.createServer(function (req, res) {
  // Håndter forespørselen...
})
server.listen(8000)
```

Dokumentasjonen til `http` finner du her:
  {rootdir:/docs-nodejs/http.html}


`fs` modulen i Node har noen streaming APIer for filer. Når du benytter deg av `fs.createReadStream()` vil du få et stream objekt tilbake som representerer filen du vil lese. På et stream objekt kan du kalle på `src.pipe(dst)` for å pipe dataene fra en stream til en annen (Her fra `src` til `dst`). Du kan på den måte koble filsystem streamen med HTTP response streamen.
