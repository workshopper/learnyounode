Escreva um **servidor** HTTP que serve dados JSON quando recebe uma requisição GET no caminho `/api/parsetime`. Expere que a requisição contenha uma string de consulta com a chave 'iso' e uma data no formato ISO como valor.

Por exemplo:

  /api/parsetime?iso=2013-08-10T12:10:15.474Z

A resposta JSON deve conter somente as propriedades 'hour', 'minute' e 'second'. Por exemplo:

```json
{
  "hour": 14,
  "minute": 23,
  "second": 15
}
```

Adicione um segundo *endpoint* para o caminho `/api/unixtime` que aceita a mesma string de consulta, mas retorne um valor referente a *UNIX epoch time* (tempo de época UNIX) na propriedade 'unixtime'. Por exemplo:

```json
{ "unixtime": 1376136615474 }
```

Seu servidor deve escutar na porta fornecida pelo primeiro argumento passado para seu programa.

----------------------------------------------------------------------
## DICAS

O objeto `request` de um servidor HTTP contém a propriedade `url` que você vai precisar usar para *"rotear"* suas requisições para os dois endpoints.

Você pode *parsear* a URL e a string de consulta usando o módulo do núcleo do Node chamado 'url'. `new URL(request.url)` vai parsear o conteúdo de `request.url` e fornecer para você um objeto com propriedades úteis.

Por exemplo, no prompt de comando, digite:

```sh
$ node -pe "new URL('/test?q=1', 'http://example.com')"
```

Documentação sobre o módulo `url` pode ser encontrada apontando seu navegador aqui:
  {rootdir:/docs-nodejs/url.html}

Sua reposta deve ser uma string no formato JSON. Veja `JSON.stringify()` para mais informações.

Você deve também ser um bom cidadão da web e configurar seu `Content-Type` corretamente:

```js
res.writeHead(200, { 'Content-Type': 'application/json' })
```

O objeto `Date` do JavaScript pode imprimir datas no formato ISO, por exemplo, `new Date().toISOString()`. Ele também pode parsear este formato se você passar uma string para um construtor `Date`.

`Date.getTime()` também pode ser útil.
