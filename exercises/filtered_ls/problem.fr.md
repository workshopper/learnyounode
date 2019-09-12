Créez un programme qui affiche une liste de fichiers au sein d’un répertoire
donné, filtrés en fonction de leur extension.  Vous recevrez le chemin du
répertoire comme premier argument de la ligne de commande (par ex.
'/chemin/du/dossier/'), et comme deuxième argument une extension de fichier
à utiliser pour le filtrage.

Par exemple, si vous recevez 'txt' comme deuxième argument, vous devrez
filtrer la liste pour ne garder que les fichiers dont le nom **se termine
par .txt**.  Remarquez bien que le deuxième argument qui vous sera fourni
*ne commencera pas* par un '.'.

La liste des fichiers devrait être affichée sur la console, à raison d’un
fichier par ligne.  Vous **devez** utiliser des E/S asynchrones.

----------------------------------------------------------------------

## CONSEILS

La méthode `fs.readdir()` prend un chemin comme premier argument et une
fonction de rappel en deuxième.  La signature de la fonction de rappel est :

```js
function callback (err, list) { /* ... */ }
```

…dans laquelle `list` est un tableau de chaînes de caractères représentant
les noms de fichiers.

La documentation du module `fs` est disponible ici, vous n’avez qu’à l’ouvrir
dans votre navigateur :

  {rootdir:/docs-nodejs/fs.html}

Vous pourrez aussi trouver le module noyau `path` bien pratique, en
particulier sa méthode `extname`.

La documentation du module `path` est disponible à l’adresse hors-ligne
suivante :

  {rootdir:/docs-nodejs/path.html}
