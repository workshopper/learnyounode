Écrivez un programme qui accepte un ou plusieurs nombres comme arguments de
la ligne de commande, et affiche la somme de ces nombres sur la console
(stdout).

----------------------------------------------------------------------

## CONSEILS

Vous pouvez accéder aux arguments de la ligne de commande via l’objet global
`process`.  L’objet `process` a une propriété `argv` qui est un tableau
contenant la ligne de commande complète : `process.argv`.

Pour vous lancer, écrivez un programme, dans un fichier que vous appelleriez
par exemple `program.js`, qui contient simplement :

```js
console.log(process.argv)
```

Exécutez-le en faisant `node program.js` suivi de quelques arguments, par
exemple comme ceci :

```sh
$ node program.js 1 2 3
```

Dans ce cas, l’affichage obtenu serait un tableau similaire à celui-ci :

```js
['node', '/path/to/your/program.js', '1', '2', '3']
```

Vous aurez besoin de réfléchir à une façon d’itérer à travers les arguments
numériques pour pouvoir calculer leur somme.  Le premier élément du tableau
`process.argv` est toujours 'node', et le second est toujours le chemin du
programme JS exécuté, de sorte que vous devrez démarrer à partir du troisième
élément (index 2), et ajouter chaque élément à un total jusqu'à atteindre le
bout du tableau.

Faites attention au fait que tous les éléments de `process.argv` sont des
chaînes de caractères (`String`), et que vous aurez donc à les *convertir*
en nombres.  Vous pouvez faire cela en les préfixant avec l’opérateur unaire
`+` ou en les passant en argument à `Number()`, par exemple
`+process.argv[2]` ou `Number(process.argv[2])`.

{appname} appellera votre programme avec des arguments adaptés lorsque vous
lancerez `{appname} verify program.js`, vous n’aurez donc pas à les passer
vous-mêmes.  Pour tester votre programme sans vérifier son bon résultat,
vous pouvez lancer `{appname} run program.js`. Quand vous utilisez `run`,
vous invoquez un environnement de test que {appname} met en place pour
chaque exercice.
