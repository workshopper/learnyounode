Écrivez un **serveur** HTTP qui servira le même fichier texte pour toute
requête reçue.

Votre serveur devrait écouter sur un port dont le numéro vous sera fourni en
premier argument de ligne de commande.

Vous recevrez en deuxième argument de ligne de commande le chemin complet du
fichier que vous devrez servir.  Vous **devez** utiliser la méthode
`fs.createReadStream()` pour *streamer* le contenu du fichier dans la réponse.

----------------------------------------------------------------------

## CONSEILS

Parce que nous avons besoin d’un serveur HTTP pour cet exercice, et non d’un
serveur TCP générique, nous utiliserons le module noyau `http`.  Tout comme le
module `net`, `http` fournit une méthode `http.createServer()`, mais celle-ci
crée un serveur qui comprend le protocole HTTP.

`http.createServer()` prend une fonction de rappel appelée une fois par
connexion reçue par le serveur.  La fonction de rappel a la signature :

```js
function callback (request, response) { /* ... */ }
```

Les deux arguments sont des objets représentant la requête HTTP et la
réponse correspondant à cette requête.  `request` est utilisée pour récupérer
des propriétés, telles que les en-têtes et la *query string* de la requête,
tandis que `response` sert à renvoyer des données au client, tant les en-têtes
que le corps de contenu.

`request` et `response` sont toutes les deux des flux Node !  Ce qui signifie
que vous pouvez utiliser les mécanismes de flux pour envoyer ou recevoir des
données, lorsque cela vous arrange.

`http.createServer()` renvoie une instance de votre serveur, et vous devrez
appeler `server.listen(portNumber)` pour commencer à écouter sur un port
particulier.

Un serveur HTTP Node ressemble classiquement à ceci :

```js
const http = require('http')
const server = http.createServer(function (req, res) {
  // logique de traitement de la requête…
})
server.listen(8000)
```

La documentation du module `http` peut être consultée hors-ligne à l’adresse
suivante :

  {rootdir:/docs-nodejs/http.html}

Le module noyau `fs` fournit des APIs orientées flux pour les fichiers.  Vous
aurez besoin d’utiliser la méthode `fs.createReadStream()` pour créer un flux
représentant le fichier dont le chemin vous aura été fourni en ligne de
commande.  Cette méthode renvoie un objet flux sur lequel vous pouvez appeler
`src.pipe(dest)` pour connecter les données lues sur le flux `src` à une
écriture sur le flux `dst`.  De cette façon, vous pouvez connecter un flux issu
du système de fichier à votre flux de réponse HTTP.
