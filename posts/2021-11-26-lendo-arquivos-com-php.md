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