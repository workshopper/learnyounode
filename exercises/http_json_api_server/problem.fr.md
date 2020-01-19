Écrivez un **serveur** HTTP qui sert des données JSON lorsqu’il reçoit une
requête GET sur le chemin '/api/parsetime'.  Vous pouvez supposer que la
requête contiendra une *query string* avec la clé 'iso' et une valeur
d’horodatage au format ISO.

Par exemple :

  /api/parsetime?iso=2013-08-10T12:10:15.474Z

La réponse JSON devrait contenir uniquement les propriétés 'hour', 'minute'
et 'second'.  Par exemple :

```json
{
  "hour": 12,
  "minute": 10,
  "second": 15
}
```

Ajoutez un second point d’accès pour le chemin '/api/unixtime', qui
accepte la même *query string* mais renvoie un horodatage UNIX basé
sur l’époque, en millisecondes (le nombre de millisecondes écoulées
depuis le 1er janvier 1970 à 00:00:00 UTC), comme valeur d’une propriété
'unixtime'.  Par exemple :

```json
{ "unixtime": 1376136615474 }
```

Votre serveur devra écouter sur un port dont le numéro vous sera fourni en
premier argument de la ligne de commande.

----------------------------------------------------------------------

## CONSEILS

L’objet `request` fourni par le serveur HTTP a une propriété `url` dont vous
aurez besoin pour *« router »* les requêtes vers le bon point d’accès.

Vous pouvez analyser l’URL et la *query string* en utilisant le module noyau
Node `url`.  Un appel `new URL(request.url)` analysera le contenu de
`request.url` et vous fournira un objet avec toutes les propriétés utiles.

Par exemple, sur votre invite de commande, tapez :

```sh
$ node -pe "new URL('/test?q=1', 'http://example.com')"
```

La documentation pour le module `url` peut être consultée hors-ligne à
l’adresse suivante :

  {rootdir:/docs-nodejs/url.html}

Votre réponse doit être un texte au format JSON.  Jetez un œil à
`JSON.stringify()` pour de plus amples informations.

Soyez également un-e bon-ne citoyen-ne du web et définissez le
`Content-Type` correctement avant d’envoyer le corps de réponse :

```js
res.writeHead(200, { 'Content-Type': 'application/json' })
```

L’objet `Date` en JavaScript peut afficher des dates au format ISO, par
exemple `new Date().toISOString()`.  Il peut aussi les analyser à partir
de ce format grâce au constructeur `Date`.  Vous trouverez aussi sûrement
`Date#getTime()` utile.
