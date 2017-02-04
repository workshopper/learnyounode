Este problema é igual ao anterior (HTTP COLLECT) no aspecto do que você deveria fazer, usar `http.get()`. Porém, dessa vez você vai receber **três** URLs como os primeiros três argumentos da linha de comando.

Você deve coletar o conteúdo completo fornecido por cada uma das URLs e imprimir os dados no console (stdout). Você não precisa imprimir o comprimento, apenas os dados em forma de String; uma linha por URL. A grande "sacada" aqui é que você **deve** imprimi-las na mesma ordem que as URLs foram passadas à você pela linha de comando.

----------------------------------------------------------------------
## DICAS

Não espere que estes três servidores joguem limpo! Eles não vão te dar respostas completas na ordem que você espera, então você não pode inocentemente apenas imprimir os resultados na hora que eles chegam, pois dessa forma eles estarão fora de ordem.

Você vai precisar enfileirar os resultados e manter um registro de quantas URLs já retornaram o conteúdo completo. Uma vez que você tiver todos os dados, você poderá imprimi-los no console.

Contar callbacks é uma das maneiras fundamentais de lidar com chamadas assíncronas no Node. Ao invés de fazer isso manualmente, você pode achar mais conveniente depender de uma library de terceiros como por exemplo [async](https://npmjs.com/async) ou [after](https://npmjs.com/after). Mas para esse exercício, tente fazer sem ajuda de nenhuma library externa.
