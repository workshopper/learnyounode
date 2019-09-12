Écrivez un **serveur de temps TCP** !

Votre serveur devrait attendre des connexions TCP entrantes sur le port dont
le numéro vous sera fourni comme premier argument en ligne de commande.  À
chaque connexion, vous écrirez sur la socket la date et l’heure courante, en
mode 24 heures, selon le format suivant :

```
"YYYY-MM-DD hh:mm"
```

suivi d’un caractère **saut de ligne** (*newline*).  Les mois, jour, heures et
minutes doivent absolument être présentés sur 2 chiffres avec, si besoin, un
*zéro préfixe*.  Par exemple :

```
"2013-07-06 17:42"
```

----------------------------------------------------------------------

## CONSEILS

Pour cet exercice, nous allons créer un serveur TCP brut.  Il n’y a pas de
besoin HTTP sur ce coup, nous allons donc utiliser le module `net`, un autre
des modules noyaux de Node, qui fournit toutes les fonctions réseau de base.

Le module `net` fournit une méthode appelée `net.createServer()`, qui prend
une fonction de rappel.  Contrairement à la plupart des fonctions de rappel
de Node, celle utilisée par `createServer` peut être appelée plus d’une fois.
Chaque connexion reçue par votre serveur déclenche un appel à votre fonction
de rappel.  Elle a la signature suivante :

```js
function callback (socket) { /* ... */ }
```

`net.createServer()` renvoie également une instance de votre serveur. Vous
devrez appeler `server.listen(portNumber)` pour démarrer l’écoute sur un
port particulier.

Un serveur TCP Node ressemble classiquement à ceci :

```js
const net = require('net')
const server = net.createServer(function (socket) {
  // logique de gestion de la socket
})
server.listen(8000)
```

Souvenez-vous que le numéro de port vous sera fourni comme premier argument
sur la ligne de commande.

L’objet `socket` contient un tas de méta-données relatives à la connexion,
mais se comporte aussi comme un flux duplex Node, c’est-à-dire qu’on peut
lire et écrire dessus.  Pour cet exercice, vous aurez juste besoin d’y écrire
et de fermer la socket.

Utilisez `socket.write(data)` pour écrire des données sur la socket, et
`socket.end()` pour fermer la socket.  Il est aussi possible de passer un
dernier bloc de données à `.end()`, ce qui peut simplifier votre exercice
comme ceci : `socket.end(data)`.

La documentation hors-ligne pour le module noyau `net` peut être consultée
à l’adresse suivante :

  {rootdir:/docs-nodejs/net.html}

Pour créer la date, vous aurez besoin de construire un format spécial à partir
d’un objet obtenu par un appel à `new Date()`.  Les méthodes que vous pourrez
trouver utiles sont :

```js
date.getFullYear()
date.getMonth() // démarre 0 !
date.getDate() // renvoie le jour du mois
date.getHours()
date.getMinutes()
```

Si vous vous sentez d’humeur aventureuse, vous pouvez aussi utiliser le module
`strftime`, disponible via npm.  La fonction `strftime(fmt, date)` accepte les
mêmes formats de date que la commande Unix `date`.  Vous pouvez en apprendre
davantage sur `strftime` ici :

  https://github.com/samsonjs/strftime
