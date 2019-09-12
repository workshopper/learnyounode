Escreva um **servidor** HTTP que recebe apenas requisições de POST e converte os caracteres no corpo da requisição para caixa-alta e retorna-os para o cliente.

Seu servidor deve "escutar" na porta provida a você pelo primeiro argumento para seu programa.

----------------------------------------------------------------------
## DICAS

Ainda que você não esteja restrito ao uso das capacidades de streaming dos objetos `request` e `response`, será muito mais fácil se você decidir usá-las.

Existe um grande número de pacotes diferentes no npm que você pode usar para *"transformar"* um streaming de dados enquanto ele está sendo passado. Para esse exercício, o pacote `through2-map` oferece a API mais simples.

`through2-map` permite que você crie um *stream transformador* usando apenas uma única função que recebe um bloco de dados e retorna um outro bloco de dados. Ela é designada para funcionar como um `Array#map()`, só que para streams:

```js
const map = require('through2-map')
inStream.pipe(map(function (chunk) {
  return chunk.toString().split('').reverse().join('')
})).pipe(outStream)
```

No exemplo acima, a data que estamos recebendo de `inStream` é convertida para uma String (se já não estiver nesse formato), os caracteres são revertidos e o resultado é passado para o `outStream`. Sendo assim nós fizemos um reversor de caracteres! Lembre-se que o tamanho do bloco é determinado pelo fluxo e você tem muito pouco controle sobre ele para os dados que está recebendo.

Para instalar `through2-map` type:

```sh
$ npm install through2-map
```

Se você não possuir uma conexão à Internet, simplesmente crie uma pasta `node_modules` e copie o diretório inteiro para o módulo que você quiser usar de dentro do diretório de instalação do {{appname}}:

  {rootdir:/node_modules/through2-map}

A documentação do through2-map foi instalada junto com o {appname} no seu sistema e você pode lê-los apontando seu navegador para cá:

  {rootdir:/docs/through2-map.html}
