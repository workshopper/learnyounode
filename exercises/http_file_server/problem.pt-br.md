Escreva um  **servidor** HTTP que entregue o mesmo arquivo de texto para cada solicitação recebida.

O servidor deve escutar na porta fornecida pelo primeiro argumento do seu programa.

Será fornecida a localização do arquivo para servir como segundo argumento da linha de comando. Você **deve** usar o método `fs.createReadStream()` para a stream do conteúdo do arquivo para resposta.

----------------------------------------------------------------------
## DICAS

Porque nós precisamos criar um servidor HTTP para este exercício em vez de criar um servidor TCP genérico, nós devemos usar o modulo `http` do núcleo do Node. Como o módulo `net`, `http` possui um método chamado `http.createServer()` mas este cria um servidor que pode transmitir HTTP.

`http.createServer()` retorna um callback que é chamado uma vez para cada conexão recebida pelo servidor. A função callback tem a seguinte assinatura:

```js
function callback (request, response) { /* ... */ }
```

Onde os dois argumentos são objetos que representam a requisição HTTP e a resposta correspondente para esta requisição. `request` é utilizado para buscar propriedades, tais como o cabeçalho e a consulta do pedido, enquanto `response` é utilizado para enviar dados para o cliente bem como o cabeçalho e o corpo.

Ambos `request` and `response` são também Node streams! O que significa que podemos usar as abstrações de streaming para enviar e receber dados que se adéquam ao seu caso de uso.

`http.createServer()` também retorna uma instância para seu `server`. Você deve chamar `server.listen(portNumber)` para iniciar uma escuta na porta específica.

Um típico Servidor HTTP Node parece com isto:

```js
const http = require('http')
const server = http.createServer(function (req, res) {
  // request handling logic...
})
server.listen(8000)
```

A documentação do modulo `http` pode ser encontrada redirecionando seu navegador para:
  {rootdir:/docs-nodejs/http.html}

O núcleo do módulo `fs` também possui algumas APIs streaming para arquivos. Você precisa usar o método `fs.createReadStream()` para criar uma stream que representa o arquivo que você passa como argumento. O método retorna um objeto de stream que você pode usar `src.pipe(dst)` para fornecer os dados de `src` stream para o `dst` stream. Desta maneira, você pode conectar um filesystem stream com uma resposta HTTP stream.
