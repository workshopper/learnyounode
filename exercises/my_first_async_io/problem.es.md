Para este ejercicio, crearemos una nueva carpeta

```sh
$ cd ..
$ mkdir my_first_async_io
$ cd my_first_async_io
```

Como dijimos en el problema anterior, una de las principales ventajas de node.js es que se ejecuta de forma **asíncrona**! Esto quiere decir que el programa no esperará a que una cierta instrucción termine para continuar ejecutándose. Entonces, cómo podemos mantener el órden del programa?

Node.js resuelve este problema por medio de *callbacks*. Cuando llamamos a una instrucción, entre sus argumentos le pasamos una función de callback, que llamará al terminar toda su ejecución.

Escribe un programa que use una operación de sistema de archivos asíncrona para leer un archivo e imprimir en consola el número de saltos de línea ('\n') que contiene.

El programa recibirá la ruta al archivo como único argumento.

----------------------------------------------------------------------
# PISTAS

La resolución es similar al problema anterior pero esta vez lo haremos **a la manera de node.js**: asíncronicamente (async).

Vamos a sustituir `fs.readFileSync()` por `fs.readFile()` y en lugar de esperar que retorne un valor, vamos a tener que procesar el resultado con una función de callback que se invoca al terminar la lectura del archivo.

La forma habitual de usar callbacks en node.js es:

```js
function callback(err, data) { /* ... */ }
```

Puedes validar si ocurrió un error controlando si el primer parámetro es `null`. Si no hay errores, 'data' será un objeto Buffer de Node.js.
Al igual que pasa con `readFileSync()`, puedes pasar 'utf8' como segundo parámetro y luego el callback como tercero de modo de que data sea un `String` y no un `Buffer`.

Puedes leer la documentación del módulo `fs` en:
  {rootdir:/node_apidoc/fs.html}

Para el caso de `fs.readFile()`, la plantilla se vería más o menos así:

```js
fs.readFile('/ruta/al/archivo', function(err, data) {
  /* ... */
});
```

----------------------------------------------------------------------
