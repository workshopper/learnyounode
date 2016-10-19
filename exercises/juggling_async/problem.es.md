Para este ejercicio, crearemos una nueva carpeta

```sh
$ cd ..
$ mkdir juggling_async
$ cd juggling_async
```

Este ejercicio es similar al anterior puesto que debes usar `http.get()`. Sin embargo, esta vez tu programa recibirá **tres** URLs como argumentos de línea.

Tu programa deberá imprimir el contenido de cada una de las URLs en consola en el mismo orden que fueron recibidos los argumentos. No deberás imprimir el tamaño, sólo el contenido como String, pero **debes respetar el orden** de llegada de los argumentos.

----------------------------------------------------------------------
## PISTAS

Como las llamadas a las URLs son asíncronas, es probable que no recibas las respuestas en orden, por lo que no puedes imprimirlas a medida que llegan.

Tendrás que encolar los resultados y mantener un contador global de cuántas peticiones han sido recibidas, de modo que al llegar al final puedas imprimirlos todos.

Para encolar los datos, te recomendamos usar un Array global y definir dos funciones. Una función que se encargue de leer los datos de la URL i-ésima (donde `i` será un parámetro de la función) y asignar al arreglo global en la posición `i` (digamos `arr[i]`) estos datos al ser recibidos, a la vez que aumenta el contador global; y otra función que imprima los datos de cada URL en el órden dado.

Al llegar el contador global a 3, la función encargada de leer deberá llamar a la función que imprime los datos en orden.

Ahora, llama tres veces a la función encargada de leer, cada vez con un índice diferente (0, 1 y 2).

En la vida real, hay varias librerías como [async](https://npmjs.com/async) y [after](https://npmjs.com/after) que facilitan la continuación de los callbacks. Para el alcance de este ejercicio no es necesario usar librerías externas.

----------------------------------------------------------------------
