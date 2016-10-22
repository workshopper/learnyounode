Para este ejercicio, crearemos una nueva carpeta

```sh
$ cd ..
$ mkdir my_first_io
$ cd my_first_io
```

Los entornos de ejecución de programas tradicionales son síncronos, esto significa que si una cierta operación está tardando demasiado, todo el programa se congelará y la esperará.

Antes de entrar a ver una de las grandes ventajas de node.js, la asincronía, veremos un ejemplo más tradicional.

En los sistemas operativos tipo UNIX (e.g. Linux, Mac OS X) podemos contar el número de saltos de línea de un archivo de texto por medio del comando `cat file | wc -l`. Escribe un programa que, usando una llamada síncrona al sistema de archivos, lea un archivo recibido por argumento de línea de consola e imprima la cantidad de saltos de línea ('\n') que contiene.

El programa recibirá la ruta al archivo como único argumento.

----------------------------------------------------------------------
## PISTAS

Para resolver este ejercicio usaremos el módulo `fs`, que viene incluído con Node.js. Para cargar dicho módulo o cualquier módulo es necesario hacer:

```js
var fs = require('fs');
```

De este modo, el módulo `fs` estará disponible en esa variable.

Toda operación síncrona (o de bloqueo) del sistema de archivos en el módulo `fs` tiene sufijo 'Sync'. Para leer un archivo debes usar `fs.readFileSync('/ruta/al/archivo')`. Éste *devuelve* un objeto `Buffer` con los contenidos del archivo.

Puedes leer la documentación del módulo `fs` en:
  {rootdir:/node_apidoc/fs.html}

Los objetos `Buffer` de Node son una representación eficiente de Arrays de datos en variedad de formatos como ASCII, binarios o UTF-8 entre otros. Los objetos `Buffer` se pueden convertir en String usando el método `toString()` por ejemplo: `var str = buf.toString()`.

Puedes leer la documentación del objeto `Buffer` en:
  {rootdir:/node_apidoc/buffer.html}

Si buscas una forma sencilla de contar el número de saltos de línea en un string, piensa que puedes convertir un `String` de Javascript en un array de substrings usando `.split()`, y que puedes usar '\n' como delimitador. Nótese que el fichero de prueba no tiene ningún salto de línea ('\n') al final de la última línea, con lo que al usar este método acabarás obteniendo un array que tiene un elemento más que el número de saltos de línea totales.

----------------------------------------------------------------------
