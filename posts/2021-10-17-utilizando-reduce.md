---
title: Utilizando Reduce
description: Uso do método Reduce em JavaScript
date: 2021-12-07 08:38:41
thumbnail: assets/img/javascript-loop.jpg
category: js
background: "#D6BA32"
---
O JavaScript tem alguns métodos de array que facilitam bastante nossa vida e eu já até escrevi sobre alguns deles [aqui](https://www.amaralluiz.dev/diferen%C3%A7a-entre-foreach-map-filter-find-no-javascript/). Logo depois de ter escrito o post citado um amigo me questionou porque não tratei do método *Reduce* lá e eu simplesmente respondi que é porque eu não tinha utilizado tanto além dos clássico exemplos que a gente vê pela internet. Então resolvi estudar um pouco mais a fundo e trazer alguns exemplos de como utilizar esse método.

## Entendendo o Reduce

Primeiramente precisamos entender como o *Reduce* funciona, sua sintaxe e formas de implementar. [A própria definição da documentação fornecida pela Mozilla](https://coelhucas.medium.com/reduce-javascript-7f00a06b0a80) diz que o método *reduce* executa uma função *reducer* para cada elemento do array, resultando num único valor de retorno. Mas o que diabos isso quer dizer? Isso quer dizer que ele vai iterar sobre um array conforme a função passada e resultará em um único valor de qualquer tipo. E aí que está a grande sacada dele, pois este valor pode ser de qualquer tipo, não sendo obrigatoriamente numérico.

Primeiramente, para entender a sintaxe, vamos implementar o exemplo clássico de soma de um array.

```javascript
const arrayOriginal = [1, 2, 3, 4, 5];

const soma = arrayOriginal.reduce((acumulador, atual) => {
    return acumulador + atual;
});

console.log(soma);
```

Neste exemplo vemos que o método *reduce* está recebendo dois parâmetros: o acumulador e o atual. Como o nome já diz, o acumulador é a variável que vai acumular o valor da soma, iniciando em 0 e o atual é o valor que estará disponível a cada iteração no array. Desta forma em cada iteração ele somará o valor do acumulador + o valor atual da iteração, que no final resultará no total de 15.

Tirando um pouco agora do exemplo de soma de valores de um array, outra coisa bastante legal que podemos fazer utilizando o *reduce* é transformar um array de arrays em um único array, conforme abaixo.

```javascript
const arrayOriginal = [[1, 2], [3, 4], [5, 6]];

const arrayReduzido = arrayOriginal.reduce((acumulador, valorAtual) => {
  return acumulador.concat(valorAtual)
});

console.log(arrayReduzido);
```

Desta forma iremos concatenar ao acumulador o valor atual, gerando somente um array com os valores de todos os arrays.

Agora um exemplo do que podemos fazer que realmente acaba ajudando muito no dia a dia, principalmente de quem usa react para transformar um array de objetos em um único objeto, possuindo outros objetos dentro dele de forma que a leitura fica muito mais simples.

Irei usar de exemplo o código que vi [neste post](https://coelhucas.medium.com/reduce-javascript-7f00a06b0a80) do Medium do [Lucas Coelho](https://coelhucas.medium.com/) (ele também dá outros exemplos de uso do reduce e sugiro ir lá dar uma olhada).

```javascript
const components = [
  {
    name: 'Button',
    styles: {
      color: 'white',
      backgroundColor: 'black',
      borderRadius: '20px'
    }
  },
  {
    name: 'TextInput',
    styles: {
      color: 'black',
      border: '2px solid'
    }
  },
  {
    name: 'Checkbox',
    styles: {
      color: 'deeppink'
    }
  }
];

const getComponentsMetadata = () => (
  components.reduce((acc, current) => ({
    ...acc,
    [current.name]: {
      ...current.styles
    }
  }), {})
);
```

Como podemos ver, o reduce irá neste caso criar um objeto só com os objetos Button, TextInput e Checkbox dentro dele. E para cada objeto ele colocará os styles como propriedades de cada objeto. Isto facilidade bastante na hora de poder utizar estes objetos. Para ficar mais claro, o retorno é conforme o abaixo:

```javascript
{
  Button: {
    color: "white",
    borderRadius: "20px",
    backgroundColor: "black"
  },
  TextInput: { … },
  CheckBox: { … }
}
```

Como podemos ver existem várias formas que o reduce pode ser útil, substituindo melhor outros métodos de array. Agora que você já sabe como utilizar esse método, comenta aí uma forma que você vem utilizando.