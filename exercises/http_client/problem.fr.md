Écrivez un programme qui fait une requête HTTP GET sur une URL fournie
comme premier argument de la ligne de commande.  Affichez le contenu
`String` de **chaque** événement 'data' de la réponse sur sa propre
ligne dans la console (stdout).

----------------------------------------------------------------------

## CONSEILS

Pour cet exercice, vous aurez besoin du module noyau `http`.

La documentation de ce module peut être lue hors-ligne en navigant ici :

  {rootdir:/docs-nodejs/http.html}

La méthode `http.get()` est un raccourci pour les requêtes GET simples,
vous pouvez l’utiliser pour simplifier votre solution.  Le premier argument
peut être l’URL que vous voulez récupérer ; passez une fonction de rappel
en deuxième argument.

Contrairement aux autres fonctions de rappel, celle-ci a comme signature :

```js
function callback (response) { /* ... */ }
```

…dans laquelle l’objet `response` est un objet **flux** (*stream*) Node.
Vous pouvez traiter les flux Node comme des objets émettant des événements.
Les trois événements qui nous intéressent le plus sont : 'data', 'error'
et 'end'.  Vous pouvez écouter un événement comme ceci :

```js
response.on('data', function (data) { /* ... */ })
```

L’événement 'data' est émis pour chaque bloc de données disponible et prêt
à être traité.  La taille du bloc dépend de la source de données sous-jacente.

L’objet `response` que vous obtenez suite à un `http.get()` dispose aussi
d’une méthode `setEncoding()`. Si vous l’appelez avec l’argument 'utf8',
les événements 'data' émettront des `String` au lieu des `Buffer` habituels,
qu’il vous aurait fallu convertir explicitement en `String`.
