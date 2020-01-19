Écrivez un programme qui utilise une opération **synchrone** sur le système
de fichiers pour lire un fichier et afficher son nombre de fins de ligne sur
la console (stdout), un peu comme si vous faisiez `cat file | wc -l`.  (`wc`
comptera le nombre de lignes, pas les fins de lignes, donc votre résultat
devrait être supérieur de 1 (un) au sien.)

Le chemin complet du fichier à lire vous sera fourni comme premier argument
de la ligne de commande.  Il est inutile de faire votre propre fichier de test.

----------------------------------------------------------------------

## CONSEILS

Tout ce qui touche au système de fichiers se trouve dans le module noyau `fs`
(un module noyau est fourni de base par Node).  Pour charger ce type de
module, il vous suffit d’un appel comme le suivant :

```js
const fs = require('fs')
```

À présent vous avez le module `fs` entier mis à disposition dans votre
variable nommée `fs`.

Toutes les opérations synchrones (bloquantes) du système de fichier dans le
module `fs` ont un nom qui se termine par 'Sync'.  Pour lire un fichier, vous
aurez donc besoin de `fs.readFileSync('/chemin/du/fichier')`.  Cette méthode
vous *renverra* un objet `Buffer` avec l’intégralité du contenu du fichier.

La documentation du module `fs` est disponible ici, vous n’avez qu’à l’ouvrir
dans votre navigateur :

  {rootdir:/docs-nodejs/fs.html}

Les objets `Buffer` sont l’approche retenue par Node pour représenter
efficacement des tableaux de données, qu’il s’agisse de texte ASCII, de
binaire ou d’autres formats.  Les objets `Buffer` peuvent être convertis
en chaînes de caractères par un simple appel à leur méthode `toString()`,
par exemple `const str = buf.toString()`.

La documentation des `Buffer`s est disponible en ouvrant le fichier
suivant dans votre navigateur :

  {rootdir:/docs-nodejs/buffer.html}

Si vous cherchez un moyen simple de compter les sauts de lignes dans une
chaîne de caractères, souvenez-vous qu’une `String` JavaScript peut être
découpée avec `.split()` en un tableau de sous-chaînes, et que '\n' peut
y être renseigné comme délimiteur.  À ce propos, le fichier de test n’aura
pas de '\n' à la fin, donc il contiendra un élément de plus que le nombre
de fins de ligne.
