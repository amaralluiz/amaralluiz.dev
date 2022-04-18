---
title: Lendo arquivos com PHP
description: Como ler arquivos utilizando PHP
date: 2022-04-18 09:53:00
thumbnail: assets/img/php.png
category: php
background: "#2596BE"
---
Dia desses precisei ler um arquivo em PHP para controlar uma chamada de senha porque era a maneira mais simples que eu poderia fazer no momento, sem precisar criar nenhum campo no banco de dados. Um exemplo também muito bom é utilizar arquivos para variáveis de ambiente, como *strings* de conexão do banco de dados.

Irei utilizar neste exemplo o um arquivo JSON simples, conforme abaixo.

```json
{
  "database": "bancodedados",
  "password": "senhabd"
}
```

Este arquivo pode ser criado como um arquivo `environment.json` no projeto para definir algumas variáveis do nosso ambiente, como estamos utilizando para salvar o nome do nosso banco de dados e a senha do mesmo. Claro que em um ambiente real podemos ter campos como host e a senha estaria criptografada, mas iremos utilizar dessa forma para ficar mais simples nos nosso exemplos.

## Mas como faço para acessar e ler esse arquivo?

Para conseguir acessar os dados que estão nesse arquivo em formato `json` é muito simples, podemos usar o método já nativo do PHP que é o `file_get_contents` e logo depois ainda utilizar o método `json_decode` para já traduzir estes dados. Abaixo o exemplo de como ficaria se pegássemos o `json` que criamos acima.

```php
$arquivo = file_get_contents("./environment.json");
$json = json_decode($arquivo, true)
```

Dessa forma na nossa variável \`$json\` já teremos os dados do arquivo num array associativo e podemos acessá-los da seguinte forma:

```php
$json['database'];
$json['password'];
```

Assim, utilizando a mesma chave utilizada no arquivos json, acessamos o valor dela.  

Podemos também atualizar os valores do arquivo, passando o valor para a variável e depois utilizar o método \`file_put_contents\`. Nesse caso então deveremos carregar uma variável com o valor atual do nosso arquivo com o \`file_get_contents\`, fazer a manipulação desejada e logo depois chamar o \`file_put_contents\` passando para o método o caminho e nome do arquivo e o novo valor.