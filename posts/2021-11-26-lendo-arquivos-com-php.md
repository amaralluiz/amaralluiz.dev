---
title: Lendo arquivos com PHP
description: Como ler arquivos utilizando PHP
date: 2021-11-25 09:20:23
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

Este tipo de configuração em arquivos é muito comum por centralizar onde ficarão salvos alguns dados do ambiente e até permitirem pessoas que não sabem de fato programação estarem modificando caso seja necessário sem correr riscos de acabar alterando algo diretamente no código e possam trazer algum problema.

## Mas como faço para acessar e ler esse arquivo?

Para conseguir acessar os dados que estão nesse aquivo em formanto `json` é muito simples, podemos usar o método já nativo do PHP que é o `file_get_contents` e logo depois ainda utilizar o método `json_decode` para já traduzir estes dados. Abaixo o exemplo de como ficaria se pegassemos o `json` que criamos acima.