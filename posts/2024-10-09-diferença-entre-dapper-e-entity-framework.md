---
title: Diferença entre Dapper e Entity Framework
description: Diferença entre Dapper e Entity Framework
date: 2025-09-16 09:20:33
thumbnail: assets/img/estudo.jpg
category: .NET
background: "#A82EDA"
---
Hoje resolvi fazer um post sobre uma situação que passei uma vez em um processo seletivo pra uma empresa que eu queria muito trabalhar na época. Infelizmente não consegui passar, uma das perguntas que não consegui responder muito bem foi justamente essa: Qual a diferença entre Dapper e Entity Framework?

No dia eu falei que os dois eram ferramentas de ORM, mas que as duas tinham focos diferentes. Disse na época que o Dapper ele tinha um foco maior em ser mais simples e em performance. Mais simples pois era uma configuração rápida onde você cria a query e já coloca o objeto que deve retornar e em performance pois tudo é feito com SQL puro, o que faz o próprio desenvolvedor ser responsável pela otimização da query. Também disse que o foco do Entity Framework já era abstrair mais essa parte do banco de dados, onde você trabalha diretamente com os objetos utilizando principalmente LINQ para as consultas.

Minha resposta não agradou o entrevistador, que queria somente ouvir que a diferença é que o Dapper é um Micro-ORM e o Entity Framework é um ORM completo.

Acabou que não passei nessa entrevista, justamente por causa dessa pergunta e uma outra que também irá virar um post aqui. Mas essa pergunta realmente me correu um pouco por dentro, pois sinto que eu não respondi errado, mas não respondi da forma que ele queria. Depois de um tempo, atuei mais ainda com as duas tecnologias e hoje acredito que consigo citar as principais diferenças reais das duas ferramentas além de somente que uma é um Micro-ORM e outra é um ORM completo.

## O que é o Dapper?