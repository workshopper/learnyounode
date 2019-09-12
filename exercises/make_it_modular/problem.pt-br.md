Este problema é o mesmo que o anterior, mas introduz o conceito de **módulos**. Você precisará criar dois arquivos para resolver este problema.

Crie um programa que imprime uma lista de arquivos em um dado diretório, de modo que haja um filtro de acordo com a extensão dos arquivos. O primeiro argumento é o nome do diretório e o segundo argumento é a extensão pela qual filtrar. Imprima a lista de arquivos (um arquivo por linha) no console. Você **precisa**, obrigatoriamente, usar I/O assíncrono.

Você deve escrever um arquivo *módulo* para fazer a maior parte do trabalho. O módulo deve *exportar* uma única função que leva **três** argumentos: o nome do diretório, a extensão do arquivo em uma string e uma função de callback, nessa ordem. O argumento contendo o nome da extensão do arquivo deve ser o mesmo que aquele passado para seu programa. Por exemplo: não transforme-o em uma expressão regular ou prefixe-o com "." ou faça qualquer coisa que não seja passá-lo para o seu módulo onde você vai poder fazer tudo que for necessário para o filtro funcionar.

A função de callback deve ser chamada usando a convenção idiomática do node (err, data). Essa convenção estipula que, a não ser se houver algum erro, o primeiro argumento passado para o callback será nulo e o segundo será seu dado. Nesse caso, o dado será sua lista filtrada de arquivos em forma de Array. Se você receber um erro da sua chamada do `fs.readdir()`, por exemplo, o callback deverá ser chamado com o erro, e somente o erro, como primeiro argumento.

Você **não deve** imprimir diretamente no console do seu arquivo módulo, apenas do seu programa original.

No caso de um erro ser lançado para seu arquivo original do programa, simplesmente cheque-o e imprima uma mensagem informativa sobre o erro no console.

Estes quatro itens representam o *contrato* que seu módulo deve seguir:

1. Exportar uma única função que leva os argumentos exatamente conforme descritos
2. Chame o callback exatamente uma vez com um erro ou algum outro dado, conforme descrito
3. Não mude mais nada, como por exemplo variáveis globais ou o stdout
4. Lide com todos os erros que possam ocorrer e passe-os para o callback

O benefício de ter um contrato é que seu módulo poderá ser usado por qualquer um que conheça esse contrato. Sendo assim seu módulo pode ser usado por qualquer outra pessoa que faça o curso learnyounode, ou até pelo verificador, e funcionar corretamente.

----------------------------------------------------------------------
## DICAS

Crie um novo módulo através da criação de um novo arquivo que contém apenas suas funções de ler e filtrar o diretório. Para definir uma *exportação de uma única função* você deverá designar sua função ao objeto `module.exports`, sobrescrevendo o que já está lá:

```js
module.exports = function (args) { /* ... */ }
```

Ou você pode usar uma função nominal e atribuir, então, o nome.

Para usar seu novo módulo no seu arquivo original de programa, use a chamada `require()` da mesma maneira que você usou `require('fs')` para carregar o módulo `fs`. A única diferença é que no caso de serem módulos locais, eles devem ter './' prefixado. Então se o nome do seu arquivo é mymodule.js você teria algo como:

```js
const mymodule = require('./mymodule.js')
```

O '.js' é opcional e você frequentemente vai reparar que ele foi omitido.

Você agora tem o objeto `module.exports` no seu módulo atribuído à variável `mymodule`. Como você está exportando uma única função, `mymodule` é uma função que você pode chamar!

Também tenha em mente que é comum checar por erros e fazer returns precoces dentro de funções callback:

```js
function bar (callback) {
  foo(function (err, data) {
    if (err) { return callback(err) } // return precoce

    // ... sem erros, continue fazendo coisas legais com `data`

    // tudo foi bem, chame o callback com `null` para o argumento erro

    callback(null, data)
  })
}
```
