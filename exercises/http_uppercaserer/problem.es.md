Escribe un **servidor** HTTP que reciba sólo peticiones POST y convierta los caracteres del cuerpo de la petición a mayúsculas y lo devuelva al cliente.

El servidor deberá escuchar en un puerto cuyo número será el primer argumento del programa.

----------------------------------------------------------------------
## PISTAS

Para resolver el ejercicio es conveniente usar las capacidades de streaming de los objetos `request` y `response` pero no obligatorio.

Hay muchos paquetes en el registro de npm que permiten *"transformar"* streams. Para este ejercicio sugerimos usar `through2-map` pues su API es simple.

`through2-map` te permite crear un *transform stream* que recibe un chunk data y lo devuelve modificado. Funciona como `Array#map()` pero se aplica a streams:

```js
const map = require('through2-map')
inStream.pipe(map(function (chunk) {
  return chunk.toString().split('').reverse().join('')
})).pipe(outStream)
```

En el ejemplo `inStream` se convierte a String luego se inverten los the caracteres y el resultado se concatena al `outStream`. Básicamente es un inversor de caracteres. Recuerda que el tamaño del chunk se determina al principio (up-stream) y no hay mucho control del tamaño de los datos recibidos por el servidor.

Para instalar `through2-map` escribe en la consola:

```sh
$ npm install through2-map
```
En caso de no tener conexión a Internet, simplemente crea una carpeta `node_modules` y copia el paquete desde el directorio de instalación de {appname}, es decir:

  {rootdir:/node_modules/through2-map}

La documentación del paquete `through2-map` puede verse en:

  {rootdir:/docs/through2-map.html}
