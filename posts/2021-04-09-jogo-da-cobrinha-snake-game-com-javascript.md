---
title: Jogo da Cobrinha (Snake Game) com JavaScript
description: Implementando o clássico jogo da cobrinha utilizando JavaScript com
  a biblioteca p5.js
date: 2021-04-09 06:34:18
thumbnail: assets/img/snake.png
category: js
background: "#D6BA32"
---
Recentemente fiz uma apresentação na empresa que trabalho onde implementei o famoso jogo da cobrinha que tinha nos celulares antigos e como o feedback lá foi legal resolvi trazer esse conteúdo aqui pro blog. Na apresentação não pude fazer completamente da forma como imaginei, mas como aqui tenho tempo, então irei tentar implementar tudo o que eu gostaria.

## Algumas explicações e intuito do projeto

Primeiramente quero explicar algumas coisas. Pra quem não sabe, o snake, como é chamado o jogo, nasceu com o nome Blockade, em 1976 em arcades. É um jogo onde basicamente você controla a cobrinha e seu objetivo é pegar a comida que aparece na tela e pra não ficar tão fácil a cada vez que você pega a comida, além dela aparecer em outro ponto da tela randomicamente, a cobrinha vai crescendo, com isso seu próprio corpo acaba se tornando um obstáculo, pois quando você tenta passar por cima do seu próprio corpo, ou encosta nas beiradas da tela você acaba perdendo.

E qual o objetivo de implementar esse jogo? Bom, meu objetivo quando implementei pela primeira vez foi para treinar mais JavaScript mesmo, segui alguns tutoriais na internet e consegui implementar na época utilizando somente JavaScript vanilla, ou puro. Foi uma ótima forma para que eu conseguisse ver que havia diversas aplicações das coisas que estamos aprendendo e não precisamos ficar somente em exemplos e implementações acadêmicas e profissionais de código. Podemos fazer algo que achamos divertido como jogos, automações de tarefas cotidianas fora do trabalho e até mesmo pequenas brincadeiras com amigos.

Como dessa vez eu precisava implementar de uma maneira mais rápida, acabei pesquisando uma forma de facilitar e não precisar ficar fazendo HTML, acessando e manipulando o DOM a todo momento. Procurei algo que fizesse isso por mim de maneira mais simples. Acabei encontrando a biblioteca [p5.js](https://p5js.org/) que como ela mesmo se descreve é uma biblioteca para codificação criativa e tenta tornar a programação mais inclusiva para artistas, designers, educadores e até principiantes.

Me baseei no tutorial da [The Coding Train](https://thecodingtrain.com/) para fazer esse projeto, mas acabei tendo o mesmo problema que tiveram: como eu precisava apresentar num tempo curto, não consegui implementar tudo o que eu gostaria. Aqui irei aproveitar que não tenho limite de tempo e irei implementar e tentarei explicar da melhor forma o que está sendo feito.

E o que irei implementar? Irei tentar fazer o projeto utilizando conceitos de Orientação a Objetos. Também tentarei utilizar o máximo possível conceitos de JavaScript moderno, como Arrow Functions, let, const e classes. Tentarei ser o mais didático possível e irei explicando alguns conceitos enquanto faço a implementação.

## Começando o jogo

Para começar o projeto, precisaremos criar o index.html e como utilizaremos o p5.js, iremos importá-lo no projeto. Este arquivo html ficará da seguinte maneira então:

```html
<!DOCTYPE html>
<html lang="">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Challenge Code: Snake Game</title>
  
  
  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/p5@1.3.1/lib/p5.min.js"></script>
  <script type="text/javascript" src="sketch.js"></script>
</head>

<body>
  <main>
  </main>
</body>

</html>
```

Como podemos ver, estamos importando na linha 10 a biblioteca p5.js e logo embaixo na linha 11 o arquivo sketch.js. Este arquivo sketch. js é um arquivo padrão da biblioteca, mas você pode nomeá-lo da forma que desejar.

Dentro do arquivo sketch.js deveremos ter o seguinte código

```javascript
function setup() {
  
}

function draw() {
  
}
```

Essas duas funções são necessárias para o p5.js funcionar e usaremos ela para "setar" e "desenhar" os objetos do nosso jogo na tela. O setup será chamado sempre que o programa iniciar e é usado para definir algumas propriedades do ambiente e já iremos colocar algo nessa função para começarmos a criar nosso jogo.

O primeiro passo é criar uma tela para o jogo, iremos fazer isso utilizando uma função da nossa biblioteca, conforme o código a seguir.

```javascript
function setup() {
  createCanvas(600, 600);
}
```

Como podemos ver, ela está recebendo dois valores. Estes dois valores são a largura e a altura em pixels, respectivamente. Ao fazer isso, teremos uma canvas de 600x600 na tela, mas como não foi definido nada além da canvas, não irá aparecer nada na sua tela para você.

Para realmente ver como esta canvas foi criada, podemos utilizar uma função para definir uma cor para ela. Então dentro da função *draw* iremos fazer a chamada da função *background*, e ficará dessa forma:

```javascript
function draw() {
  background(51);  
}
```

Dentro dela estamos passando o valor número de uma cor. O número inteiro 51 dará para nosso background um tom de cinza.

Com isso já temos a canvas do jogo, onde ele acontecerá. Claramente precisamos de mais coisas para poder chamar isso realmente de jogo. Iremos então criar o nosso objeto Snake, ele ficará por conta de controlar todos os comportamentos da cobrinha. Podemos então criar um novo arquivo, chamado snake.js e adicionar a linha abaixo no html.

`<script type="text/javascript" src="snake.js">`

Agora iremos começar a definir o objeto Snake. Precisamos que ele tenha algumas propriedades para podermos controlar onde ele está na tela e algumas funções para podermos manipulá-lo.