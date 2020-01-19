Crea un programa que dado un directorio imprima una lista de archivos filtrados por la extensión. El primer argumento será la ruta al directorio (ej: '/path/dir/') y el segundo la extensión a filtrar, por ejemplo si recibes 'txt' deberás filtrar todos los archivos que **terminen en .txt**.

Nota: el segundo argumento _no incluye_ el punto '.'.

La lista de archivos a imprimir en consola debe hacerse un archivo por línea y debes utilizar Async I/O.

----------------------------------------------------------------------
## PISTAS

La función `fs.readdir()` recibe como parámetros: una ruta(path) y un callback. La firma del callback es:

```js
function callback (error, lista) { /* ... */ }
```

La `lista` es un arreglo de nombres de archivos de tipo String.

La documentación del módulo `fs` puede verse en:
  {rootdir:/docs-nodejs/fs.html}

Además, el módulo `path` puede resultar útil, especialmente la función `extname`.

La documentación del módulo `path` puede verse en:
  {rootdir:/docs-nodejs/path.html}
