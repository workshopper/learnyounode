Escribe un programa que, usando una llamada síncrona al sistema de archivos, lea un archivo recibido por argumento e imprima a consola la cantidad de líneas nuevas (\n) que contiene. Similar a ejecutar `cat file | wc -l`.

El programa recibirá la ruta al archivo como único argumento.

----------------------------------------------------------------------
## PISTAS

Para resolver este ejercicio usaremos el módulo `fs` del núcleo de Node. Para cargar dicho módulo o cualquier módulo es necesario hacer:

```js
var fs = require('fs')
```

De este modo, el módulo `fs` estará disponible en esa variable.

Toda operación síncrona (o de bloqueo) del sistema de archivos en el módulo `fs` tiene sufijo 'Sync'. Para leer un archivo debes usar `fs.readFileSync('/path/to/file')`. Éste *devuelve* un objeto `Buffer` con los contenidos del archivo.

Puedes leer la documentación del módulo `fs` en:
  {rootdir:/node_apidoc/fs.html}

Los objetos `Buffer` de Node son una representación eficiente de Arrays de datos en variedad de formatos como ser ASCII, binarios o UTF-8 entre otros. Los objetos `Buffer` se pueden convertir en String usando el método `toString()` por ejemplo: `var str = buf.toString()`.

Puedes leer la documentación del objeto `Buffer` en:
  {rootdir:/node_apidoc/buffer.html}

Una forma sencilla de contar los números de línea es dividir el String con la función `split`, nativa de JavaScript, usando el carácter de nueva línea ('\n'). Ten en cuenta que el archivo puede no tener '\n' al final por lo que la lista resultante puede tener 1 elemento más que líneas en el archivo.

----------------------------------------------------------------------
