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

Primeiramente iremos criar a comida como uma variável no escopo global, para futuramente refatorarmos e colocarmos ela como um objeto num arquivo separado, igual fizemos com antes. Então para começar, iremos adicionar logo após as variáveis `scale` e `s` iremos colocar a linha `let food;` para já iniciarmos uma variável que iremos usar pra controlar a comida. Também precisamos colocar dentro da função `setup` o seguinte trecho: `food = createVector(random(width), random(height));`. Só que fazendo simplesmente dessa forma, a comida ficará fora do nosso grid, o que iria atrapalhar bastante o comportamente do jogo.

Iremos então criar uma função chamada `pickLocation` e ela será responsável por controlar a localização da comida no grid.

```javascript
function pickLockation(){
  var cols = floor(width/scl);
  var rows = floor(height/scl);

  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}
```

Primeiramente, colocamos na função o número de linhas e colunas, que seria o width e o height dividimos pela escala que estámos utilizando. No fim, usamos o método `mult`, que também é do framework que estamos usando, passando o valor de `scl` para que ocupe o quadrado completo do grid.

Após isso, precisamos da função que realmente come a comida. Como é a cobrinha que come a comida, este comportamento deve ser implementado no nosso objeto `Snake`. Então iremos já na função `draw` chamar esta função que iremos criar com o nome de `eat` passando o nosso `food` como paramêtro. Podemos adicionar então a seguinte linha dentro da função `draw`: `s.eat(food)`.

Passando para nosso objeto `Snake`, podemos já criar nossa função. Para começarmos, iremos receber nela a posição que a comida está. Com a posição, poderiamos fazer de forma que se a cobrinha chegar no mesmo pixel que a comida iriamos pegá-la, mas para facilitar podemos fazer com a distância. Pegaremos então o valor de `x` e `y` tanto da cobrinha quanto da comida e veremos que se o resultado for menor que 1, a cobrinha vai conseguir comer e já iremos retornar `true`  e caso não iremos retornar `false`.

Nossa função então ficará conforme abaixo.

```javascript
this.eat = function(pos){
  var d = dist(this.x, this.y, pos.x, pos.y);
  if(d < 1){
    return true;
  } else {
    return false;
  }
}
```

Com isso, podemos voltar para o `sketch` e fazer uma pequena alteração onde chamamos a função `eat`. Como a comida deve reaparecer em outro lugar da tela toda vez que a comida é pega, devemos fazer então uma condição que o retorno dela irá chamar o `pickLocation` novamente. Então ficará igual abaixo.

```javascript
if (s.eat(food)){
  pickLockation();
}
```

### Novos compartamentos para Snake

Agora que já temos a comida e sabemos quando nossa cobrinha está pegando a comida, precisamos então criar o que define a dificuldade do jogo que é nossa cobrinha crescer quando ela pega a comida.