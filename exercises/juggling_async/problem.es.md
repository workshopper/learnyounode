Este ejercicio es similar al anterior puesto que debes usar `http.get()`. Sin embargo, esta vez tu programa recibirá **tres** URLs como argumentos.

Tu programa deberá imprimir el contenido de cada una de las URLs en consola en el mismo orden que fueron recibidos los argumentos. No deberás imprimir el largo, solo el contenido como String, pero **debes respetar el orden**.

----------------------------------------------------------------------
## PISTAS

Como las llamas a las URLs son Async es probable que no recibas las respuestas en orden por lo que no puedes imprimir las respuestas a medida que llegan.

Tendrás que encolar los resultados y mantener un contador de cuántas peticiones han sido recibidas de modo que al llegar al final puedas imprimir los resultados.

En la vida real, hay varias bibliotecas como son [async](http://npm.im/async) y [after](http://npm.im/after) que facilitan la continuación de los callbacks. Para el alcance de este ejercicio no es necesario usar bibliotecas externas.

----------------------------------------------------------------------
