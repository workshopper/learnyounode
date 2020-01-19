Ce problème est le même que le précédent, mais il introduit le concept de
**modules**.  Vous devrez créer deux fichiers distincts pour résoudre cet
exercice.

Créez un programme qui affiche une liste de fichiers au sein d’un répertoire
donné (fourni en premier argument), filtrés en fonction de leur extension
(fournie en deuxième argument).  La liste des fichiers doit être affichée
sur la console, à raison d’un fichier par ligne.  Vous **devez** utiliser
des E/S asynchrones.

Vous devez écrire un fichier de *module* pour contenir l’essentiel du boulot.
Ce module doit *exporter* une unique fonction qui prendra **trois** arguments :
le chemin du répertoire, l’extension de filtrage et une fonction de rappel,
dans cet ordre.  L’argument d’extension de filtrage devra être exactement
celui passé à votre programme.  N’en faites pas une RegExp, ne le préfixez
pas avec '.' ou quoi que ce soit d’autre, passez-le juste à votre module,
dans lequel vous placerez les opérations nécessaires pour faire fonctionner
le filtre.

La fonction de rappel devra être appelée en utilisant la convention Node.js
(erreur, données).  Cette convention stipule qu’à moins qu’une erreur
survienne, le premier argument passé devra être `null`, et le second sera
vos données.  Dans cet exercice, les données seront la liste filtrée des
fichiers, en tant que tableau.  Si vous recevez une erreur, par exemple
suite à votre appel de `fs.readdir()`, la fonction de rappel de votre
module devra être appelée avec cette erreur, et uniquement cette erreur,
comme premier argument.

Vous **devez** vous abstenir d’afficher directement sur la console depuis
votre fichier de module, et réserver ce traitement à votre programme
principal uniquement.

Dans le cas d’une erreur qui remonterait à votre programme principal,
vérifiez simplement sa présence et affichez un message d’information sur
la console.

Les 4 points suivants constituent le contrat que votre module doit
respecter :

  1. Exporter une unique fonction qui prend exactement les arguments décrits.
  2. Appeler la fonction de rappel une et une seule fois avec soit une erreur,
      soit des données, de la façon décrite.
  3. Ne rien changer d’autre, telles que les variables globales ou la sortie
      standard.
  4. Traiter toute erreur qui pourrait survenir en les passant à la fonction
      de rappel.

L’avantage d’avoir un contrat est que votre module peut être utilisé par
quiconque s’attend à ce contrat.  Donc votre module pourrait être utilisé
par n’importe qui faisant *learnyounode*, ou le vérificateur, et marcher
tel quel.

----------------------------------------------------------------------

## CONSEILS

Créez un nouveau module en créant simplement un nouveau fichier qui
contiendrait votre fonction de lecture de répertoire et de filtrage.
Pour définir un *export de fonction unique*, affectez cette fonction
à l’objet `module.exports`, en écrasant sa valeur précédente :

```js
module.exports = function filterDir (args) { /* ... */ }
```

Vous pouvez aussi déclarer la fonction d’abord et affecter sa
référence à l’objet ensuite.

Pour utiliser ce nouveau module dans votre programme principal,
utilisez un appel à `require()` comme vous le faites déjà avec
`require('fs')` pour obtenir le module `fs`.  La seule différence,
c’est que les modules locaux doivent utiliser des chemins relatifs,
ici préfixés par './'.  Donc si votre module s’appelle `mymodule.js`,
vous devriez faire :

```js
const myModule = require('./mymodule')
```

Même s’il est possible de préciser aussi l’extension du fichier
('.js'), celle-ci est optionelle et traditionnellement omise,
afin de faciliter le recours éventuel à des chargeurs alternatifs
de modules.

Vous avez désormais l’objet fourni par le `module.exports` de votre
module qui est mis à disposition dans votre variable locale
`myModule`.  Comme vous avez exporté une simple fonction, `myModule`
est une fonction que vous pouvez appeler !

Gardez aussi à l’esprit qu’il est idiomatique en Node de vérifier
si on s’est pris une erreur et de court-circuiter vers la fonction
de rappel supérieure dans ce cas :

```js
function bar (callback) {
  foo(function (err, data) {
    if (err) {
      return callback(err) // propagation et court-circuit
    }

    // … pas d’erreur, on continue à faire des trucs cool avec `data`

    // tout s’est bien passé, on appelle `callback` avec `null` pour
    // l’argument d’erreur

    callback(null, data)
  })
}
```
