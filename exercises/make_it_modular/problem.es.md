Para este ejercicio, crearemos una nueva carpeta

```sh
$ cd ..
$ mkdir make_it_modular
$ cd make_it_modular
```

Este problema es similar al anterior e introduce la idea de **módulos**. Deberás crear dos archivos para resolver el ejercicio.

El programa debe imprimir el listado de archivos de un directorio filtrando por extensión. Nuevamente el primer argumento será la ruta al directorio (ej: '/ruta/al/dir/') y el segundo la extensión a filtrar, por ejemplo si recibes 'txt' deberás filtrar todos los archivos que **terminen en .txt**. **Debes** usar Async I/O.

Deberás escribir un archivo *modular* para hacer la tarea. Dicho módulo debe *exportar* una función que reciba **tres** parámetros en orden: la ruta del directorio, la extensión para filtrar y una función de callback. La idea es encapsular toda la lógica dentro del módulo.

En node.js, los callbacks suelen tener una firma convencional en sus parámetros de (error, data). Esto implica que si hay un error, el primer parámetro devuelve el error; sino el error será `null` y el segundo parámetro serán los datos. Para este ejercicio los datos a devolver es la lista de archivos en forma de Array. Si occurre un error, por ejemplo en la llamada a `fs.readdir()`, el callback debe llamarse con dicho error.

Para completar el ejercicio **no debes** imprimir desde el módulo, sólo desde el programa principal. En caso de que el módulo devuelva un error a tu programa principal, simplemente compruébalo y escribe un mensaje informativo en consola.

El módulo debe cumplir el siguiente contrato:
1. Exportar una función que reciba los parámetros mencionados.
2. Llamar al callback una única vez cuando ocurre un error o cuando va a retornar la lista de archivos pedida.
3. No debe modificar variables globales o salida estándar (stdout).
4. Capturar los posibles errores y devolverlos en el callback.

La ventaja de usar contratos es que el módulo puede ser usado por cualquiera que acepte este contrato.

----------------------------------------------------------------------
## PISTAS

Para crear un módulo basta con crear un nuevo archivo en el directorio de trabajo. Para definir una *función de export*, debes asignar la función al objeto global `module.exports`, por ejemplo:

```js
module.exports = function(args) {
  /* ... */
};
```

También puedes usar una función con nombre y asignar el nombre a exports

```js
function hi(args) {
  /* ... */
}

module.exports = hi;
```

Para llamar a esta función desde el programa debes usar `require` de la misma forma que para cargar el módulo `fs` salvo que debes agregar el prefijo './' para indicar que es un archivo ubicado en el mismo directorio que el programa. Por ejemplo si tu módulo se llama 'mymodule.js' deberás usar:

```js
var mymodule = require('./mymodule.js');
```

El '.js' es opcional y en la mayoría de los casos se omite.

Ahora ya tienes cargada la función del módulo en la variable `mymodule` y la puedes invocar.

Ten en cuenta que es buena práctica en node.js controlar errores y devolverlos al principio del código:

```js
function bar(callback) {
  foo(function(err, data) {
    if (err)
      return callback(err); // devolver el error

    // ... no hay error, continuar con los cálculos.

    // si todo termina bien, llamar el callback con `null` como parámetro de error

    callback(null, data);
  });
}
```

----------------------------------------------------------------------
