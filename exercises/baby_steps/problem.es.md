Buen trabajo!

Para este ejercicio, crearemos una nueva carpeta

```sh
$ cd ..
$ mkdir baby_steps
$ cd baby_steps
```

Algo importante que se debe saber es que los programas pueden recibir parámetros para su operación al momento ser invocados! Por ejemplo, si tenemos un código llamado `hola.js` y lo corremos así

```sh
$ node hola.js carolina juliana
```

El programa podría acceder a las cadenas de caracteres "carolina" y "juliana", y realizar operaciones con ellas! Este tipo de argumentos se conocen como argumentos de la línea de comandos.

Debes escribir un programa que reciba uno o más números como argumentos de la consola e imprima la suma de dichos números en la pantalla.

----------------------------------------------------------------------
## PISTAS

Puedes acceder a los argumentos de la línea de comandos usando el objeto global `process`, el cual tiene una propiedad `argv` que es un array con toda la información del comando, esto es `process.argv`.

Para comenzar puedes escribir un programa que contenga:

```js
console.log(process.argv);
```

Luego, para ejecutarlo desde la consola usa `node program.js` y algunos números como argumentos. Ej.:

```sh
$ node program.js 1 2 3
```

La salida estándar a consola será algo parecido a:

```js
[ 'node', '/ruta/a/program.js', '1', '2', '3' ]
```

Como es de esperar, el programa imprime un arreglo que contiene los argumentos de línea!

Para resolver este ejercicio debes iterar en la lista de argumentos de modo que sólo escribas la suma. El primer elemento de la lista siempre es 'node', el segundo es la ruta al program.js; por ende, debes comenzar a iterar en el tercer elemento (índice 2 de la lista) sumando cada elemento sucesivo hasta el final.

Ten en cuenta que todos los elementos de `process.argv` son cadenas de caracteres ('strings') por lo que debes convertirlas a números, por ejemplo: agregando el prefijo `+` o llamando a `Number()`. Ej: `+process.argv[2]` o `Number(process.argv[2])`.

Cuando ejecutes `{appname} verify program.js` no tienes que pasarle argumentos, pues {appname} se encarga de hacerlo. Para probar tu programa sin verificarlo puedes ejecutar `{appname} run program.js`, éste ejecutará en el mismo ambiente de prueba que {appname} crea para cada ejercicio.

----------------------------------------------------------------------
