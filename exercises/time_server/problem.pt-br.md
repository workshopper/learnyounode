Escreva um **Servidor de Tempo TCP**!

Seu servidor deve escutar por conexões TCP na porta fornecida pelo primeiro argumento de seu programa. Para cada conexão você deve escrever a data atual e o hora (em 24h) no formato:

```
"YYYY-MM-DD hh:mm"
```

seguido por um carácter **newline** (nova linha). Mês, dia, hora e minuto devem ser *preenchidos com zero* para terem dois inteiros. Por exemplo:

```
"2013-07-06 17:42"
```

----------------------------------------------------------------------
## DICAS

Para este exercício nós vamos criar um servidor TCP cru. Não há HTTP envolvido aqui então vamos precisar usar o módulo `net` do núcleo do Node que contém todas as funções de rede (networking) básicas.

O módulo `net` tem um método chamado `net.createServer()` que recebe uma função callback. Diferente da maiorira dos callbacks no Node, o callback usado por `createServer()` é chamado mais de uma vez. Toda conexão recebida por nosso servidor dispara outra chamada para o callback. A função callback tem a seguinte assinatura:

```js
function callback (socket) { /* ... */ }
```

`net.createServer()` também retorna uma instância do seu `server`. Você deve chamar `server.listen(portNumber)` para iniciar a escuta da porta em questão.

Um típico servidor TCP em Node se parece com isso:

```js
const net = require('net')
const server = net.createServer(function (socket) {
  // socket handling logic
})
server.listen(8000)
```

Lembre-se de usar o número da porta fornecida para você como primeiro argumento da linha de comando.

O objeto `socket` contém muitos *meta dados* em relação a conexão, mas isso é também um *Node duplex Stream*, em que isso pode ser ambos "lido de", ou "escrito em". Para este exercício nós vamos apenas escrever os dados e então fechar o socket.

Use `socket.write(data)` para escrever dados para o socket e `socket.end()` para fechar o socket. Alternativamente, o método `.end()` também pode receber um objeto *data*, então você pode simplificar da seguinte forma: `socket.end(data)`.

Documentação do módulo `net` pode ser encontrada apontando seu navegador para:

  {rootdir:/docs-nodejs/net.html}

Para criar uma data, você vai precisar de criar um formato customizado a partir do objeto `new Date()`. Os métodos que lhe serão úteis são:

```js
date.getFullYear()
date.getMonth() // começa no 0
date.getDate() // retorna o dia do mês
date.getHours()
date.getMinutes()
```

Ou, se você quiser ser aventureiro, use o pacote `strftime` do npm. A função `strftime(fmt, date)` pega o formato de data assim como o comando `date` do unix. Você pode ler mais sobre o strftime em: https://github.com/samsonjs/strftime
