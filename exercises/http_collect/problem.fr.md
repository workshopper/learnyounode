Écrivez un programme qui fait une requête HTTP GET sur une URL fournie en
premier argument de la ligne de commande.  Récupérez **toutes** les données
du serveur (et pas simplement le premier événement 'data'), puis écrivez
deux lignes sur la console (stdout).

La première ligne devrait être un nombre entier représentant le nombre de
caractères reçus du serveur.  La seconde ligne devrait être la `String`
complète reçue du serveur.

----------------------------------------------------------------------

## CONSEILS

Il y a deux approches pour résoudre ce problème :

### 1) À la main

Récupérez les données au fil des multiples événements 'data' et
concaténez-les au fur et à mesure.  Utilisez l’événement 'end' pour détecter
la fin du flux et faire vos affichages à ce moment-là.

### 2) Via un module tiers

Utilisez un module tiers pour abstraire les difficultés de ce processus
d’accumulation du flux complet.  Au moins deux modules fournissent une API
utile pour résoudre ce problème : `bl` (*Buffer List*) et `concat-stream` ;
faites votre choix !

  <https://npmjs.com/bl>
  <https://npmjs.com/concat-stream>

Pour installer un module tiers, utilisez l’outil `npm` (Node Packaged Modules).
Tapez simplement :

```sh
$ npm install bl
```

Cette commande téléchargera et installera la dernière version publique du
module dans un sous-dossier nommé `node_modules`.  Tout module dans ce
sous-dossier de votre programme principal peut être chargé avec la syntaxe
`require` sans préfixe de chemin (et notamment sans './') :

```js
const bl = require('bl')
```

Node regardera d’abord dans ses modules noyau puis dans le dossier
`node_modules` où se trouve le module tiers.

Si vous n’avez pas de connexion Internet, créez simplement un dossier
`node_modules` et copiez-y tout le dossier du module tiers que vous
souhaitez utiliser depuis le répertoire d’installation de {appname} :

  {rootdir:/node_modules/bl}
  {rootdir:/node_modules/concat-stream}

Aussi bien `bl` que `concat-stream` peuvent recevoir un flux par *pipeline*,
et ils accumuleront son contenu pour vous.  Une fois que le flux a fini, une
fonction de rappel sera déclenchée avec les données :

```js
response.pipe(bl(function (err, data) { /* ... */ }))
// ou
response.pipe(concatStream(function (data) { /* ... */ }))
```

Remarquez que vous aurez probablement besoin de faire un `data.toString()`
pour convertir le `Buffer` reçu.

La documentation de ces deux modules tiers a été installée avec {appname}
sur votre système pour que vous puissiez la consulter facilement :

  {rootdir:/docs/bl.html}
  {rootdir:/docs/concat-stream.html}
