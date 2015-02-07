Escreva um programa que usa uma única operação síncrona de sistema de arquivos (filesystem) para ler e imprimir o número de novas linhas que ele contém no console (stdout), algo similar à executar `cat file | wc -l`.

Todo o caminho até o arquivo à ser lido será fornecido como primeiro argumento da linha de comando.

----------------------------------------------------------------------
## DICAS

Para realizar uma operação de sistema de arquivos (filesystem), você vai precisar do módulo `fs` da library principal do Node. Para carregar esse tipo de módulo ou qualquer outro módulo "global", use o seguinte código:

```js
var fs = require('fs')
```

Agora você tem o módulo `fs` completo disponível em uma variável chamada `fs`.

Todas os métodos de sistema de arquivos síncronas (ou bloqueantes) no módulo `fs` terminam com 'Sync'. Para ler um arquivo, você vai precisar usar `fs.readFileSync('caminho/do/arquivo')`. Esse método irá retornar um objeto `Buffer` contendo o conteúdo completo do arquivo.

A documentação do módulo `fs` pode ser encontrada apontando seu navegador para esse endereço:
  {rootdir:/node_apidoc/fs.html}

Objetos `Buffer` são a maneira do Node de representar eficientemente arrays arbitrários de dados, sejam eles ascii, binários ou quaisquer outros formatos. Objetos `Buffer` podem ser convertidos em strings invocando o método `toString()` neles. Por exemplo: `var str = buf.toString()`.

A documentação sobre `Buffer`s pode ser encontrada apontando seu navegador para esse endereço:
  {rootdir:/node_apidoc/buffer.html}

Se você estiver procurando por uma maneira fácil de contar o número de novas linhas em uma string, lembre-se que uma `String` JavaScript pode ser dividida usando `.split()` em um array de substrings e que '`\n`' pode ser usado como um delimitador.

----------------------------------------------------------------------
