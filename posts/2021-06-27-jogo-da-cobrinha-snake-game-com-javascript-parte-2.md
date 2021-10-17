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

### Novos comportamentos para Snake

Agora que já temos a comida e sabemos quando nossa cobrinha está pegando a comida, precisamos então criar o que define a dificuldade do jogo que é nossa cobrinha crescer quando ela pega a comida.

Para começar iremos criar uma nova variável em Snake para controlar este tamanho. Será criado uma linha com `this.total = 0;` somente e para manter a organização colocaremos logo após as variáveis que controlam a direção.

Para controlar as posições da cauda da cobrinha, iremos criar agora um array vazio onde toda vez que a cobrinha conseguir pegar a comida, o valor atual da cabeça irá para a cauda e também toda vez que ela andar para um lado, o valor da cabeça seja substituído pela cauda dependendo do tamanho dela, para assim a cauda sempre se mover por onde a cabeça já esteve. Então podemos colocar a linha `this.total = []` logo abaixo da linha do total.

Para fazer o controle de onde a cabeça da cobrinha esteve, precisaremos criar um *loop* que colocará toda vez a posição da cabeça no último lugar do *array* e ir passando todo o *array* para trás, conforme o tamanho. Este *loop* irá precisar estar dentro de uma estrutura de controle que verifica se o total é igual o tamanho da cobrinha e se ele for vai fazer esta mudança de posições no *array*.

```javascript
if(this.total === this.tail.length){
  for(let i = 0; i <this.total - 1; i++){
    this.tail[i] = this.tail[i +1]
  }
}
this.tail[this.total -1] = createVector(this.x, this.y);
```

Todo este trecho deverá ficar dentro da função `update` que já criamos anteriormente.

Agora para realmente conseguirmos desenhar nossa cobrinha na tela precisaremos alterar algumas coisas na nossa função `show`.

```javascript
fill(255);
for (var i = 0; i< this.total; i++){
  rect(this.tail[i].x, this.tail[i].y, scl, scl);
}
```

O último comportamento que fica faltando agora é o que define o *Game Over* do nosso joguinho, né? Então vamos lá entender algumas coisas para podermos criar nossa função que irá controlar isso. Para ficar mais simples neste momento a cobrinha só irá morrer quando ela encostar em alguma parte do seu corpo.

Para isso, iremos implementar algo próximo de como fizemos com a comida, onde iremos percorrer todas posições de `tail` para verificar a distância e caso for menor que 1, iremos resetar o jogo, zerando o total e esvaziando o *`array`* de `tail`.

Nossa função `death` então ficará assim:

```javascript
this.death = function(){
  for (var i = 0; i< this.tail.length; i++){
  var pos = this.tail[i];
  var d = dist(this.x, this.y, pos.x, pos.y)
  if (d < 1){
    this.total = 0;
    this.tail = [];
    }
  }
}
```

Após implementar a função `death` voltamos para o arquivo `sketch.js` e fazemos a chamada dela antes da chamada de `s.update()` com `s.death()`.

### Conclusão

Terminamos então o projeto básico no nosso jogo e temos tem todas as funções básicas para funcionar, mas podemos fazer algumas melhorias tanto no jogo, quanto no nosso código. Um exemplo de melhoria no código seria isolar o código do objeto `food` para um arquivo separado, conforme fizemos em `Snake`. Caso você já esteja testando, também percebemos um comportamento estranho no nosso jogo, onde a cobrinha consegue ir para trás mesmo já tendo uma cauda e isso é um bug no nosso jogo.

No próximo post dessa série iremos então realizar estas melhorias e correções, mas não prometo quando este post irá sair. Mas prometo que não ficarei tanto tempo sem postar mais, tentarei ser mais presente por aqui e postar mais coisas interessantes para vocês.

Como sempre, caso tenha gostado comente, compartilhe com os amigos, dê dicas de próximos posts. Se tiver visto algum erro no código, ou algo que eu poderia ter feito melhor também comente aqui que ficarei muito feliz de melhorar. Caso não tenha gostado, comente também para saber o que posso melhor. Um abraço.