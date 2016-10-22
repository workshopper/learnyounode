Para este ejercicio, crearemos una nueva carpeta

```sh
$ cd ..
$ mkdir http_file_uppercaserer
$ cd http_file_uppercaserer
```

Ya revisamos las peticiones GET del protocolo HTTP. En este ejercicio daremos un vistazo a otro tipo de peticiones: POST. **En general**, las dos tipos de peticiones con las que se debe lidiar en las aplicaciones web son POST y GET.

Debes escribir un **servidor** HTTP que reciba sólo peticiones POST y convierta los caracteres del cuerpo de la petición a mayúsculas y lo devuelva al cliente.

El servidor deberá escuchar en un puerto cuyo número será el primer argumento del programa.

----------------------------------------------------------------------
## PISTAS

Para resolver el ejercicio es conveniente usar las capacidades de streaming de los objetos `request` y `response` pero no obligatorio.

Para empezar, puedes verificar el tipo (método) de la petición por medio del atributo `method` de la petición:

```js
if (req.method === 'POST') {
  /* ... */
}
```

Hay muchos paquetes en el registro de npm que permiten *"transformar"* streams. Para este ejercicio sugerimos usar `through2-map` pues su API es simple.

`through2-map` te permite crear un *transform stream* que recibe un chunk data y lo devuelve modificado. Funciona como el método `map()` de un Array, pero se aplica a streams:

```js
var map = require('through2-map');

inStream.pipe(map(function(chunk) {
  return chunk.toString().split('').reverse().join('');
})).pipe(outStream);
```

En el ejemplo `inStream` -que podría ser una petición HTTP- se convierte a String, luego se inverten los the caracteres y el resultado se concatena al `outStream`, -que podría ser, por ejemplo, la respuesta a la petición-. Básicamente es un inversor de caracteres. En lugar de eso podrías hacer cualquier tipo de operación con el chink convertido a String. Recuerda que el tamaño del chunk se determina al principio (up-stream) y no hay mucho control del tamaño de los datos recibidos por el servidor.

Para instalar `through2-map` escribe en la consola:

```sh
$ npm install through2-map
```

La documentación del paquete `through2-map` puede verse en:

  {rootdir:/docs/through2-map.html}

----------------------------------------------------------------------
