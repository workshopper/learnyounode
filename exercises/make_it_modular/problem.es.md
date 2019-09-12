Este problema es similar al anterior e introduce la idea de **módulos**. Deberás crear dos archivos para resolver el ejercicio.

El programa debe imprimir el listado de archivos de un directorio filtrando por extensión. Nuevamente el primer argumento será la ruta al directorio (ej: '/path/dir/') y el segundo la extensión a filtrar, por ejemplo si recibes 'txt' deberás filtrar todos los archivos que **terminen en .txt**. **Debes** usar Async I/O.

Deberás escribir un archivo *modular* para hacer la tarea. Dicho módulo debe *exportar* una función que reciba **tres** parámetros en orden: la ruta del directorio, la extensión para filtrar y una función de callback. La idea es encapsular toda la lógica dentro del módulo.

En Node, los callbacks suelen tener una firma convencional de tener (error, data). Esto implica que si hay un error el primer parámetro devuelve el error sino viene `null` y el segundo parámetro son los datos. Para este ejercicio los datos a devolver es la lista de archivos en forma de Array. Si ocurre un error, por ejemplo en la llamada a `fs.readdir()`, el callback debe llamarse con dicho error.

Para completar el ejercicio **no debes** imprimir desde el módulo, sólo desde el programa principal. En caso de que el módulo devuelva un error a tu programa principal, simplemente compruébalo y escribe un mensaje informativo en consola.

El módulo debe cumplir el siguiente contrato:
1. Exportar una función que reciba los parámetros mencionados.
2. Llamar al callback una única vez cuando ocurre un error o con la lista correspondiente.
3. No debe modificar variables globales o stdout.
4. Capturar los posibles errores y devolverlos en el callback.

La ventaja de usar contratos es que el módulo puede ser usado por cualquiera que asuma este contrato.

----------------------------------------------------------------------
## PISTAS

Para crear un módulo basta con crear un nuevo archivo en el directorio de trabajo. Para definir una *función de export*, debes asignar la función al objeto global `module.exports`, por ejemplo:

```js
module.exports = function (args) { /* ... */ }
```

También puedes usar una función con nombre y asignar el nombre a exports.

Para llamar a esta función desde el programa debes usar `require` de la misma forma que para cargar el módulo de `fs` salvo que debes agregar el prefijo './' para indicar que es un archivo del directorio actual. Por ejemplo si tu módulo se llama 'mymodule.js' deberás usar:

```js
const mymodule = require('./mymodule.js')
```

El '.js' es opcional y en la mayoría de los casos se omite.

Ahora ya tienes cargada la función del módulo en la variable `mymodule` y la puedes invocar.

Ten en cuenta que es buena práctica en Node controlar errores y devolverlos bien al principio del código:

```js
function bar (callback) {
  foo(function (err, data) {
    if (err) { return callback(err) } // devolver el error

    // ... no hay error, continuar con los cálculos.

    // si todo termina bien, llamar el callback con `null` como parámetro de error

    callback(null, data)
  })
}
```
