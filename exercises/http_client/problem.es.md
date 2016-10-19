Para este ejercicio, crearemos una nueva carpeta

```sh
$ cd ..
$ mkdir http_client
$ cd http_client
```

Cada vez que escribes una dirección URL en el navegador, estás realizando una petición HTTP a algún servidor en el mundo. Existen varios tipos de peticiones HTTP, en este caso estarías realizando una petición GET, ya que le estás solicitando información al servidor (la página web deseada).

Escribe un programa que reciba como argumento una URL y realice una petición HTTP GET a la misma. Luego, deberá imprimir por consola el contenido **de cada evento** "data" de la petición, uno por línea.

----------------------------------------------------------------------
## PISTAS

Para este ejercicio necesitas el módulo `http` incluido en Node.

La documentación del módulo `http` puede verse en:
  {rootdir:/node_apidoc/http.html}

El método `http.get()` es una versión simplificada para peticiones GET y conviene que la uses para la solución. El primer parámetro de `http.get()` es la URL y el segundo es un callback.

A diferencia de otros callbacks, su firma es:

```js
function callback(response) { /* ... */ }
```

Siendo `response` un objeto **Stream** de node.js. En node.js los Streams emiten eventos, a los cuales puedes suscribir callbacks. Para este ejercicio sólo nos interesan los eventos: "data", "error" y "end". Para escuchar un evento (por ejemplo, "data") debes hacer:

```js
response.on("data", function(data) {
  /* ... */
});
```

El evento "data" se dispara cuando un conjunto de datos (o `chunk`), está disponible para procesarse. El tamaño del `chunk` depende de la implementación.

Nota: Por omisión, los objetos 'data' recibidos son `Buffers` de node.js que deben ser convertidos a Strings para luego ser escritos en consola. Sin embargo, el objeto `response` que obtienes de `http.get()` tiene un método `setEncoding()` que permite definir cómo se leen los bytes obtenidos. Si lo llamas con parámetro "utf8" recibirás Strings en los eventos emitidos.

----------------------------------------------------------------------
