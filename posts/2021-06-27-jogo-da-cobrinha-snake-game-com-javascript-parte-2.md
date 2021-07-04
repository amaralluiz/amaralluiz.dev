---
title: Jogo da Cobrinha (Snake Game) com JavaScript Parte 2
description: Implementando os comportamentos e regras do jogo
date: 2021-06-27 06:43:29
thumbnail: assets/img/snake.png
category: js
background: "#D6BA32"
---
No post passado terminamos até o momento que conseguimos controlar a cobrinha na tela do jogo, mas antes de adicionar outras regras, precisamos adicionar um comportamento importantíssimo no nosso jogo. Temos que fazer a nossa canvas se comportar como um grid. Mas como assim como um grid?

![](assets/img/grid.png)

Devemos fazer nossa canvas conforme essa imagem. Onde a cobrinha irá ocupar um quadradinho deste grid e a cada vez que ela se movimentar, irá para o próximo quadradinho. Para isso iremos usar uma variável que irá controlar o tamanho desse grid no contexto global. Então iremos colocar a seguinte linha logo abaixo da onde criamos a variável `s.`

```javascript
let scl = 20;
```

Estamos criando a escala do grid com tamanho 20. Com isso, podemos mudar duas linhas já no nosso código. Primeiro dentro da função `show` colocaremos o tamanho dentro do `rect` com a variável `scl` no lugar do `10` que colocamos anteriormente. Segundo mudaremos a velocidade em `update` multiplicando por `scl`. Com essas mudanças podemos ver que ela já está se movendo como se pertencesse realmente ao grid, mas numa velocidade muito alta. Para controlarmos melhor isso podemos usar uma função do `p5js` que chama `constrain` que cria um valor entre um máximo e mínimo. No nosso caso iremos colocar aqui, para o`x`, entre 0 e o `width`, que seria o tamanho da tela, menos o `scl` para ficar dentro da tela e iremos repetir isso também para o `y`, mas passando o `height`. Ficará dessa forma:

```javascript
this.x = constrain(this.x, 0, width - scl);
this.y = constrain(this.y, 0, height - scl);
```

Como o jogo também tem uma vibe meio lenta, podemos limitar a framerate dentro da função `setup` no `sketch.js`. Para isso podemos colocar o seguinte trecho lá `frameRate(10)`. Com isso já podemos ver que a movimentação está bem próxima do que encontramos nos famosos celulares Nokia de antigamente.

### Controlando a comida

Apesar da cobrinha ser o elemento principal do nosso jogo, temos outro elemento que também é importantíssimo. É a comidinha que aparece e faz a cobrinha crescer e vai criando realmente um elemento de gameplay, fazendo uma pontuação e incrementando a dificuldade conforme você progride.