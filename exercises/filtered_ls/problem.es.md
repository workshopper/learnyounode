Para este ejercicio, crearemos una nueva carpeta

```sh
$ cd ..
$ mkdir filtered_ls
$ cd filtered_ls
```

Los nombres de los archivos *suelen* estar compuestos por (valga la redundancia) el nombre y la extensión. En sistemas operativos tipo UNIX es posible listar los archivos que terminan en una cierta extensión (Digamos txt) de un directorio por medio del comando `ls | grep '\.txt$'`.

Crea un programa que dado un directorio y una extensión, imprima una lista con los archivos dentro del directorio que tengan esta extensión. El primer argumento será la ruta al directorio (ej: '/ruta/al/dir/') y el segundo la extensión a filtrar, por ejemplo si recibes 'txt' deberás filtrar todos los archivos que **terminen en .txt**.

Nota: el segundo argumento _no incluye_ el punto '.'.

Los archivos deben ser listados uno por línea y debes utilizar Async I/O.

----------------------------------------------------------------------
## PISTAS

La función `fs.readdir()` recibe como parámetros: una cadena de caracteres con la ruta deseada y un callback. Su firma es:

```js
fs.readdir('/ruta/al/dir', function(err, list) {
  /* ... */
});
```

Donde `list` es un arreglo de nombres de archivos de tipo String.

La documentación del módulo `fs` puede verse en:
  {rootdir:/node_apidoc/fs.html}

Además, el módulo `path` puede resultar útil, especialmente la función `extname`, que retorna la extensión de un cierto archivo que le pasamos como parámetro.

La documentación del módulo `path` puede verse en:
  {rootdir:/node_apidoc/path.html}

----------------------------------------------------------------------
