Crie um programa que imprima uma lista de arquivos filtrados por suas extensões em um dado diretório. Você irá receber um nome de diretório como primeiro argumento para seu programa (por exemplo: 'caminho/para/diretorio/') e uma extensão de arquivo pela qual filtrar como segundo argumento.

Por exemplo, se você receber 'txt' como segundo argumento, então você precisará criar um filtro para que a lista contenha apenas arquivos que **terminem com .txt**. Note que o segundo argumento _não irá_ vir precedido por um '.' (ponto).

A lista de arquivos deve ser impressa no console, um arquivo por linha. Você **precisa**, obrigatoriamente, usar I/O assíncrono.

----------------------------------------------------------------------
## DICAS

O método `fs.readdir()` recebe o caminho de um diretório como seu primeiro argumento e um callback como seu segundo. A assinatura do callback é:

```js
function callback (err, list) { /* ... */ }
```

onde `list` é um array de Strings contendo nomes de arquivos.

Documentação relativa ao módulo `fs` pode ser encontrada apontando seu navegador para este endereço:
  {rootdir:/docs-nodejs/fs.html}

Você também pode achar o módulo `path` do node muito útil, especialmente o método `extname`.

A documentação do módulo `path` pode ser encontrada apontando seu navegador para este endereço:
  {rootdir:/docs-nodejs/path.html}
