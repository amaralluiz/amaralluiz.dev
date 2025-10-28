---
title: Diferença entre Dapper e Entity Framework
description: Diferença entre Dapper e Entity Framework
date: 2025-10-28 03:33:06
thumbnail: assets/img/estudo.jpg
category: .NET
background: "#A82EDA"
---
Hoje resolvi fazer um post sobre uma situação que passei uma vez em um processo seletivo pra uma empresa que eu queria muito trabalhar na época. Infelizmente não consegui passar, uma das perguntas que não consegui responder muito bem foi justamente essa: Qual a diferença entre Dapper e Entity Framework?

No dia eu falei que os dois eram ferramentas de ORM, mas que as duas tinham focos diferentes. Disse na época que o Dapper ele tinha um foco maior em ser mais simples e em performance. Mais simples pois era uma configuração rápida onde você cria a query e já coloca o objeto que deve retornar e em performance pois tudo é feito com SQL puro, o que faz o próprio desenvolvedor ser responsável pela otimização da query. Também disse que o foco do Entity Framework já era abstrair mais essa parte do banco de dados, onde você trabalha diretamente com os objetos utilizando principalmente LINQ para as consultas.

Minha resposta não agradou o entrevistador, que queria somente ouvir que a diferença é que o Dapper é um Micro-ORM e o Entity Framework é um ORM completo.

Acabou que não passei nessa entrevista, justamente por causa dessa pergunta e uma outra que também irá virar um post aqui. Mas essa pergunta realmente me corroeu um pouco por dentro, pois sinto que eu não respondi errado, mas não respondi da forma que ele queria. Depois de um tempo, atuei mais com as duas tecnologias e hoje acredito que consigo citar as principais diferenças reais das duas ferramentas além de somente que uma é um Micro-ORM e outra é um ORM completo.

## O que é o Dapper?

O Dapper nada mais é do que um Micro-ORM que facilita o mapeamento de dados de bancos de dados relacionais para objetos .NET e vice-versa. Ele é bem adotado por ser leve e performático, deixando toda a responsabilidade da performance do SQL para o desenvolvedor, o que permite ter mais controle.

### E quais as principais características do Dapper?

Ele é leve e bastante rápido. O Dapper sempre teve um foco muito grande em desempenho, então se você precisa que sua aplicação tenha consultas rápidas no banco de dados, é melhor seguir com ele.

Ele faz o mapeamento de objetos, igual qualquer ORM. Mesmo sendo um Micro-ORM, o Dapper consegue converter os dados de SQL, tanto de consulta como escrita, diretamente para objetos .NET, desde que tenham as mesmas propriedades.

Segurança e controle sobre o SQL. O Dapper te dá segurança sobre o SQL, protegendo contra SQL Injection e te dá total liberdade sobre o SQL. Precisa rodar uma query de relatório que envolve muitos dados e tabelas diferentes? Otimize ela via SQL que o Dapper dá conta do resto.

### E as desvantagens?

Por se tratar de um Micro-ORM, o Dapper não possui as mesmas funcionalidades de um ORM completo como o EF. Falta funcionalidades como migrations e rastreamento de mudanças, lazy loading, caching, pagination. Algumas coisas ainda são possíveis fazer a mão de alguma outra forma usando SQL puro ou alguma outra ferramenta, mas outras acabam precisando de processos bastante maduros de toda a equipe para que funcione de forma devida.

Outra coisa importante que deve ser vista ao utilizar Dapper é o gerenciamento dos relacionamentos. Em um ORM como o EF, este gerenciamento é feito de forma automática pela ferramenta, já no Dapper deve ser feita manualmente pelo desenvolvedor, o que envolve uma complexidade maior, tanto com .NET quanto com SQL.

## E o que é o Entity Framework ou EF?

O Entity Framework já é um ORM completo, ele não só facilita o mapeamento de dados de banco de dados relacionais para objetos .NET como o Dapper, ele abstrai completamente esse mapeamento, tornando a vida do desenvolver um pouco mais simples, não tendo que se preocupar com escrever SQL.

### E quais as principais características do EF?

Ele faz todo o mapeamento objeto-relacional, permitindo que você trabalhe com dados como se fosse objetos .NET, o que reduz a necessidade de escrever código para interagir com o banco de dados.

Outra característica é que ele oferece uma maneira mais simples de consultar dados, utilizando a sintaxe LINQ, que é totalmente integrada com C#.

Diferente do Dapper, o Entity Framwork detecta automaticamente as alteração que são feitas em objetos, o que facilita a alteração no banco de dados via as migrations, evoluindo o banco de dados junto com o código e gerando sempre o rastreamento de mudanças.

O EF também faz uma grande abstração de dados, mantendo o código focado na lógica de negócios e gerenciando a ponte entre os objetos da aplicação e as tabelas do banco de dados.

### E as desvantagens do EF?

A maior desvantagem é quando falamos de consultas complexas. O EF tem bastante dificuldade em otimizar consultas complexas, ainda mais quando existe muitas relações entre objetos, o que pode resultar em um desempenho mais lento do que utilizando SQL puro.

Outra desvantagem é a dependência do LINQ, pois toda consulta utilizando o EF é feita via LINQ, o que pode gerar um nível de complexidade maior, pois o LINQ pode ter uma curva de aprendizado mais íngreme para alguns desenvolvedores.

## Então qual devo usar no meu projeto?

Bom, como toda boa solução, isso depende muito do que seu projeto busca. O EF tem uma abstração que facilita bastante para o desenvolvedor, sem contar que o uso de migrations é excelente para controlarmos todas as mudanças do banco de dados, o que pode ser extremamente complexo caso seja feito de forma manual.

Mas o Dapper também tem suas vantagens, como a performance e simplicidade.

Também devemos lembrar que um projeto pode muito bem utilizar as duas ferramentas, onde o EF pode ser utilizado para o controle de mapeamento objeto-relacional, escrita e consulta simples e o Dapper pode ser utilizado para consultas mais complexas, principalmente em geração de relatórios que podem ter um relacionamento maior entre os objetos.