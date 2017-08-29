I denne oppgaven skal du på samme måte som i oppgaven (HTTP COLLECT) bruke  `http.get()`. Bortsett fra at denne gangen vil du bli gitt **tre*** URL'er som de tre første kommandolinje argumentene.

Du må samle innholdet fra hver URL og skrive det ut til skjermen (stdout). Du behøver ikke skrive ut lengden. Bare dataene som en String, en linje per URL. Det du må være oppmerksom på er at du **må** skrive dem ut URLene i samme rekkefølge som de kommer inn.

----------------------------------------------------------------------
## HINT

Ikke forvent at disse tre URLene er "snille med deg"! De vil ikke gi deg svar i den rekkefølgen du håper. Derfor kan du ikke bare skrive de ut når du får svar, fordi da kommer de i feil rekkefølge.

Du blir nødt til å lage en kø av resultatene og holde kontroll på hvor mange URLer som har returnert med innhold. Når du har alt innholdet kan du skrive dem ut til skjermen.

Å telle callbacks er en av de grunnleggende måtene å håndtere asynkronitet på i Node. I stedet for å gjøre alt dette selv så kan det være enklere å støtte seg på tredjeparts biblioteker som [async](https://npmjs.com/async) eller [after](https://npmjs.com/after). For denne eoppgaven derimot må du gjøre dette uten hjelp av noe bibliotek.
