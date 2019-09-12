Escreva um programa que usa uma única operação assíncrona de sistema de arquivos para ler um arquivo e imprimir o número de novas linhas que ele contém no console (stdout), algo similar à executar `cat file | wc -l`.

O caminho completo até o arquivo à ser lido será fornecido como primeiro argumento da linha de comando.

----------------------------------------------------------------------
# DICAS

A solução para este problema é *quase* a mesma do problema anterior, exceto que desta vez você vai precisar fazer da **maneira Node.JS**: assíncrona.

Em vez de `fs.readFileSync()` você vai querer usar `fs.readFile()` e em vez de usar o valor de retorno desse método, você vai precisar coletar o valor de uma função de callback que você irá passar como sendo o segundo argumento.

Lembre-se que callbacks tradicionais do Node.js normalmente têm a assinatura:

```js
function callback (err, data) { /* ... */ }
```

então você pode checar se um erro ocorreu checando se o primeiro argumento é verdadeiro. Se não houver nenhum erro, você deve ter seu objeto `Buffer` como segundo argumento. Assim como `readFileSync()`, você pode fornecer 'utf8' como segundo argumento e colocar o callback como terceiro argumento, assim você terá uma `String` ao invés de um `Buffer`.

Documentação sobre o módulo `fs` pode ser encontrada apontando seu navegador para esse endereço:
  {rootdir:/docs-nodejs/fs.html}
