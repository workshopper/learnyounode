Para este ejercicio, crearemos una nueva carpeta

```sh
$ cd ..
$ mkdir time_server
$ cd time_server
```

¡Crea un **Servidor de tiempo y hora TCP**!

TCP es un protocolo de transporte de datos. Para el alcance de este ejercicio sólo nos interesa saber que un cierto anfitrión (En nuestro caso un PC) tiene una única dirección IP, pero miles de *puertos* de recepción de datos. Las aplicaciones pueden escuchar en los puertos a diferentes conexiones que la soliciten.

El servidor debe escuchar conexiones TCP en el puerto indicado por el primer argumento de línea del programa. Para cada conexión debes escribir la fecha actual y la hora en formato 24hs del siguiente modo:

```
"AAAA-MM-DD hh:mm"
```

seguido por un carácter de salto de línea ('\n'). El mes, el día, la hora y el minuto deben tener un 0 para ocupar 2 espacios en caso de ser números menores a 10, por ejemplo:

```
"2013-07-06 17:42"
```

----------------------------------------------------------------------
## PISTAS

Para este ejercicio crearemos un servidor TCP; en lugar de usar el módulo HTTP usaremos el módulo `net` del núcleo de node.js que tiene funcionalidades de red.

El módulo `net` tiene un método `net.createServer()` que recibe un callback. A diferencia de otros callbacks en node.js, el callback de `createServer()` se llama una vez por cada conexión entrante. La firma es la siguiente:

```js
net.createServer(function(socket) {
  /* ... */
});
```

`net.createServer()` devuelve una variable instancia de `server`. Para iniciar la escucha del servicio hay que llamar a `server.listen(portNumber)`.

Un ejemplo de un servidor node.js típico es como sigue:

```js
var net = require('net');

var server = net.createServer(function(socket) {
  // manejo del socket
});

server.listen(8000);
```

Recuerda usar el puerto recibido por argumento de línea de consola.

El objeto `socket` contiene información sobre la conexión y es un Stream duplex, es decir que se puede escribir y leer a la vez.

Puedes usar `socket.write(data)` para escribir en el socket y luego `socket.end()` para cerrar el socket. Alternativamente, el método `end()` puede recibir un objeto de datos `socket.end(data)`.

La documentación del módulo `net` puede verse en:

  {rootdir:/node_apidoc/net.html}

Para calcular la fecha puedes usar `new Date()` (Por defecto, retorna la fecha actual) y luego llamar a algunos métodos específicos:

```js
date.getFullYear();
date.getMonth();     // empieza en 0
date.getDate();      // devuelve día del mes, empieza en 1
date.getHours();
date.getMinutes();
```

Otra opción más intrépida es usar el paquete `strftime` disponible en npm. La función `strftime(formato, fecha)` recibe un formato de fecha similar al `date` de UNIX, para este caso el formato sería "%Y-%m-%d %k:%M", y la fecha sería la variable retornada por `new Date()`. Más información de strftime en: https://github.com/samsonjs/strftime

----------------------------------------------------------------------
