Écrivez un **serveur** HTTP qui reçoit uniquement des requêtes POST et
convertit le texte du corps de requête entrante en majuscules pour ensuite
le renvoyer au client.

Votre serveur écoutera sur un port dont le numéro vous sera fourni en premier
argument de la ligne de commande.

----------------------------------------------------------------------

## CONSEILS

Même s’il n’est pas impératif que vous vous cantonniez aux capacités orientées
flux des objets `request` et `response`, la solution sera nettement plus
facile si vous vous en servez.

On trouve bon nombre de modules tiers sur npm qui fournissent un mécanisme de
*« transformation »* des données d’un flux au fil de l’eau.  Pour cet exercice,
le module `through2-map` est probablement le plus simple d’emploi.

`through2-map` vous permet de créer un *flux de transformation* simplement à
l’aide d’une fonction qui prend un bloc de données et en renvoie un autre.
Il est conçu pour fonctionner de façon très similaire à `Array#map()`, mais
pour les flux :

```js
const map = require('through2-map')
inStream.pipe(map(function (chunk) {
  return chunk.toString().split('').reverse().join('')
})).pipe(outStream)
```

Dans l’exemple ci-dessus, les données entrantes issues de `inStream` sont
converties en `String` (si elles n’en sont pas déjà), leurs caractères sont
inversés et le résultat est transmis à `outStream`.  Nous avons donc écrit
un inverseur de blocs de caractères !  Souvenez-vous toutefois que la taille
du bloc est déterminée en amont et que vous n’avez guère de contrôle sur les
données entrantes.

Pour installer `through2-map`, tapez :

```sh
$ npm install through2-map
```

Si vous n’avez pas de connexion Internet, créez simplement un dossier
`node_modules` et copiez-y tel quel le répertoire du module que vous
souhaitez utiliser depuis le dossier d’installation de {appname} :

  {rootdir:/node_modules/through2-map}

La documentation pour `through2-map` a été installée avec le reste
de {appname} sur votre système pour que vous puissiez la consulter
avec votre navigateur à l’adresse suivante :

  {rootdir:/docs/through2-map.html}
