Para este ejercicio, crearemos una nueva carpeta

```sh
$ cd ..
$ mkdir http_file_server
$ cd http_file_server
```
En este ejercicio debes crear un servidor HTTP en lugar de un servidor TCP. Los servidores no necesariamente deben servir datos como streams, es posible que al realizar una petición a un servidor, este nos retorne un archivo de texto! En realidad esto sólo es un truco, que se trata de servir los caracteres del archivo como un stream.

Escribe un **servidor** HTTP que sirva un mismo archivo de texto para todas las peticiones que reciba.

El servidor deberá escuchar en un puerto cuyo número será el primer argumento del programa. Como segundo argumento recibirá la ruta con la ubicación del archivo. **Debes** usar `fs.createReadStream()` para servir como stream los contenidos del archivo en la respuesta del servicio.

----------------------------------------------------------------------
## PISTAS

Usa el módulo `http` de node.js, que tiene un método `http.createServer()` para servir peticiones HTTP.

`http.createServer()` espera de parámetro un callback a invocar cuando se reciba una petición HTTP. La firma de dicho callback es la siguiente:

```js
function callback(request, response) {
  /* ... */
}
```

Los parámetros `request`y `response` son los objetos que representan la petición y su respuesta respectivamente. La petición provee propiedades, como el encabezado y los parámetros de la misma. La respuesta permite devolverle al cliente encabezados y un cuerpo (body).

¡Ten en cuenta que ambos `request` y `response` son streams de node.js! Por lo tanto puedes usar APIs de streaming para simplificar el envío de datos.

La llamada a `http.createServer()` devuelve una instancia del `server`. Debes llamar a `server.listen(portNumber)` para comenzar la escucha en un puerto particular. Por ejemplo:

```js
var http = require('http');

var server = http.createServer(function(req, res) {
  // manejar cada petición aquí.
});

server.listen(8000);
```
La documentación del módulo `http` puede verse en:
  {rootdir:/node_apidoc/http.html}

Recuerda que el módulo `fs` tiene APIs para streaming de archivos. Debes usar `fs.createReadStream()` para crear un stream que represente el archivo de entrada. Luego puedes concatenar el stream con pipe `src.pipe(dst)` para pasar los datos del stream `src` al stream writer de salida `dst`. Es decir puedes conectar un filesystem stream a un HTTP response stream.

----------------------------------------------------------------------
