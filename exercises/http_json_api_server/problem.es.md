Escribe un **servidor** de HTTP que sirva datos en formato JSON cuando reciba una petición GET con la ruta (endpoint) '/api/parsetime'. Asume que la petición tiene un parámetro 'iso' cuyo valor es un fecha hora en formato ISO.

Por ejemplo:

  /api/parsetime?iso=2013-08-10T12:10:15.474Z

La respuesta JSON debe contener únicamente los propiedades 'hour', 'minute' y 'second' correspondientes a la fecha recibida. Ejemplo:

```json
{
  "hour": 14,
  "minute": 23,
  "second": 15
}
```

Luego, agrega un segundo endpoint con ruta '/api/unixtime' que reciba los mismos parámetros que la anterior pero que devuelva la fecha en formato UNIX, por ejemplo:

```json
{
	"unixtime": 1376136615474
}
```

El servidor deberá escuchar en un puerto cuyo número será el primer argumento del programa.

----------------------------------------------------------------------
## PISTAS

El objeto `request` de HTTP tiene un atributo `url` que deberás usar para distinguir las *"routes"* de cada endpoint.

Puedes parsear la URL y los parámetros usando el módulo `url` de Node, `new URL(request.url)` parsea y devuelve un objeto con atributos pertinentes.

Puedes probarlo en la línea de comandos escribiendo:

```sh
$ node -pe "new URL('/test?q=1', 'http://example.com')"
```
La documentación del módulo `url` puede verse en:
  {rootdir:/docs-nodejs/url.html}

Para enviar la respuesta del servidor en formato JSON puedes usar el método `JSON.stringify()`.
Asimismo convendría que en la misma le agregaras un encabezado 'Content-Type' adecuado, por ejemplo:

```js
res.writeHead(200, { 'Content-Type': 'application/json' })
```

Por último ten en cuenta el objeto JavaScript `Date` que permite imprimir fechas en formato ISO format, por ejemplo: `new Date().toISOString()`. También parsea dicho formato cuando se lo pasa por parámetro al constructor `Date`. Revisa también el uso de `Date#getTime()`.
