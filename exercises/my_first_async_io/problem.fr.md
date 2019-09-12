Écrivez un programme qui utilise une opération **asynchrone** sur le système
de fichiers pour lire un fichier et afficher son nombre de fins de ligne sur
la console (stdout), un peu comme si vous faisiez `cat file | wc -l`.

Le chemin complet du fichier à lire vous sera fourni comme premier argument
de la ligne de commande.

----------------------------------------------------------------------
# CONSEILS

La solution à ce problème est presque exactement la même que pour le précédent,
à ceci près que vous devez désormais le faire **à la façon Node.js** : en
asynchrone.

Au lieu de recourir à `fs.readFileSync()`, vous voudrez plutôt utiliser
`fs.readFile()`, et plutôt que de récupérer la valeur de retour de la
méthode, vous l’obtiendrez via la fonction de rappel que vous
allez passer comme deuxième argument.  Pour en savoir plus sur les
fonctions de rappel, jetez un œil à https://github.com/maxogden/art-of-node#callbacks.

Pour rappel, les fonctions de rappel idiomatiques en Node.js ont la signature
suivante :

```js
function callback (err, data) { /* ... */ }
```

…ainsi vous pouvez vérifier si une erreur a eu lieu en déterminant si le
premier argument est *truthy*.  S’il n’y a pas d’erreur, vous devriez
avoir un objet `Buffer` comme deuxième argument.  Tout comme avec
`readFileSync()`, vous pouvez passer 'utf8' en deuxième argument, auquel
cas vous décalerez la fonction de rappel en troisième argument, et celle-ci
recevra une `String` plutôt qu’un `Buffer`.

La documentation du module `fs` peut être consultée avec votre navigateur
à l’adresse hors-ligne suivante :

  {rootdir:/docs-nodejs/fs.html}
