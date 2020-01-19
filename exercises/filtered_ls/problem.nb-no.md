Skriv et program som skriver ut en liste med filenavn fra en gitt katalog filtrert på filetternavn. Programmet skal ta imot to argumenter der første argumentet er stien til katalogen ('/vei/til/katalog') og det andre argumentet er filetternavnet som skal filtreres på.

For eksempel, hvis du mottar 'txt' som andre argumentet må du filtrere listen så den kun inneholder filer som **slutter på .txt**. Pass på at det andre argumentet ikke vil starte med '.'.

Listen med filer skal skrives til konsoll, en fil per linje. Du **må** benytte asynkron I/O.

----------------------------------------------------------------------
## HINT

Funksjonen `fs.readdir()` tar filsti som første argument og en callback funksjon som andre argumentet. Signaturen til callback funksjonen er:

```js
function callback (err, list) { /* ... */ }
```

der `list` er et array med filnavn stringer.

Dokumentasjonen til `fs` finner du her:
  {rootdir:/docs-nodejs/fs.html}

Det kan også være hjelpsomt å se på node's `path` modul. Spesielt funksjonen `extname`.

Dokumentasjonen til `path` finner du her:
  {rootdir:/docs-nodejs/path.html}
