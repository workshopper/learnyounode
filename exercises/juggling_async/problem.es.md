Este ejercicio es similar al anterior puesto que debes usar `http.get()`. Sin embargo, esta vez tu programa recibirá **tres** URLs como argumentos.

Tu programa deberá imprimir el contenido de cada una de las URLs en consola en el mismo orden que fueron recibidos los argumentos. No deberás imprimir el largo, solo el contenido como String, pero **debes respetar el orden** de llegada de los argumentos.

----------------------------------------------------------------------
## PISTAS

Como las llamadas a las URLs son asíncronas, es probable que no recibas las respuestas en orden por lo que no puedes imprimir las respuestas a medida que llegan.

Tendrás que encolar los resultados y mantener un contador de cuántas peticiones han sido recibidas de modo que al llegar al final puedas imprimir los resultados.

En la vida real, utilizar [`async`](https://www.npmjs.com/package/async) o [`run-parallel`](https://www.npmjs.com/package/run-parallel) facilitaria la continuación de los callbacks. Pero para el alcance de este ejercicio se debería realizar sin utilizarlo.
