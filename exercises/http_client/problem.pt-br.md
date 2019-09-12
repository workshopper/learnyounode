Escreva um programa que realize uma requisição HTTP GET a uma URL fornecida por você como primeiro argumento na linha de comando. Escreva o conteúdo da String de **cada** evento "data" da resposta para uma nova linha do console (stdout).

----------------------------------------------------------------------
## DICAS

Para este exercício você vai precisar usar o módulo do núcleo `http`.

Documentação do módulo `http` pode ser encontrada apontando seu navegador para:
  {rootdir:/docs-nodejs/http.html}

O método `http.get()` é um atalho para simples requisições GET, use-o para simplificar sua solução. O primeiro argumento para `http.get()` pode ser a URL que você quer fazer o GET, fornecendo um callback como segundo argumento.

Diferente de outras funções callback, esta tem a assinatura:

```js
function callback (response) { /* ... */ }
```

Onde o objeto `response` é um objeto **Stream** do Node. Você pode tratar as Streams do Node como objetos que emitem eventos, os três eventos mais interessantes são: "data", "error" e "end". Você os escuta da seguinte forma:

```js
response.on('data', function (data) { /* ... */ })
```

"data" é emitido quando um pedaço de informação está disponível e pode ser processada. O tamanho deste pedaço depende do tamanho do dado em questão.

O objeto `response` / Stream que você vai pegar de `http.get()` também tem um método `setEncoding()`. Se você chamar este método com "utf8", o evento "data" vai emitir Strings ao invés do objeto padrão `Buffer` do Node, que você tem explicitamente que converter para String.
