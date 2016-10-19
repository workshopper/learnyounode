Para este ejercicio, crearemos una nueva carpeta

```sh
$ cd ..
$ mkdir http_collect
$ cd http_collect
```

Escribe un programa que realice una petición HTTP GET a una URL provista como primer argumento de línea de consola.
Almacena **todos** los datos recibidos del servidor (no sólo el primer evento "data") y luego escribe a consola dos líneas:
- En la primera escribe la cantidad de caracteres recibidos.
- En la segunda escribe la totalidad de datos recibidos (todo el String).

----------------------------------------------------------------------
## PISTAS

Hay por lo menos dos formas de resolver este problema:

**1)** Almacenar los datos de todos los eventos "data" para luego agregarlos antes de imprimirlos por consola. Puedes usar el evento "end" para saber cuando terminas de recibir datos.

**2)** Usar un paquete de terceros para evitar los problemas de almacenar el stream completo de datos. Por ejemplo, tienes a disposición `bl` (Buffer List).

  <https://npmjs.com/bl>

Para instalar alguno de estos paquetes usa el Node Package Manager `npm` de la siguiente forma:

```sh
$ npm install bl
```

Npm descargará el paquete e instalará la última versión disponible en la carpeta `node_modules`. Todos los paquetes instalados ahí pueden cargarse desde tu programa usando `require` sin prefijo. Ejemplo:

```js
var bl = require('bl');
```

Node busca primero en su núcleo de módulos (los módulos que vienen por defecto) y si no lo encuentra busca en `node_modules`.

El paquete `bl` puede usar un stream *piped* para capturar los datos. Una vez que se acaba el stream se dispara un callback con todos los datos:

```js
response.pipe(bl(function(err, data) {
  /* ... */
}));
```

Recuerda hacer `data.toString()` para convertir al Buffer de node.js a String.

Puedes leer la documentación de `bl` en la carpeta de instalación de {appname} en:

  {rootdir:/docs/bl.html}

----------------------------------------------------------------------
