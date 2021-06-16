---
title: Diferença entre ForEach, Map, Filter, Find no JavaScript
description: Diferenças entre funções de iteração no JavaScript
date: 2021-06-16 10:20:23
thumbnail: assets/img/javascript-loop.jpg
category: js
background: "#D6BA32"
---
No JavaScript temos algumas funções para iterar sobre arrays. Utilizamos cada uma delas de maneiras diferentes para facilitar a iteração sobre arrays.

Abaixo está uma pequena explicação dos métodos mais usados:

Every -> Itera sobre o array até que a função retorne false

Podemos utilizar o `every` para verificar se todos os números de um array são pares, conforme abaixo.

```javascript
const a = [2, 4, 6]
function numeroPar(numero){
  return numero % 2 == 0
}
console.log(a.every(numeroPar))
```

Neste caso, o retorno que teremos será `true`, pois todos os números do array serão pares.

```javascript
const a = [2, 3, 6]
function numeroPar(numero){
  return numero % 2 == 0
}
console.log(a.every(numeroPar))
```

Caso mudemos um dos números do array para um número ou adicionemos um número impar, o retorno será `false`.

Some -> Itera sobre o array até que a função retorne true, apresentando comportamento contrário ao `Every`.

Podemos utilizar o `some` para verificar se um dos itens do array é um verdadeiro. Como exemplo, iremos verificar se um array de idades possui alguma idade maior do que 18.

```javascript
const a = [17, 18, 15]
function checarIdade(idade){
  return idade >= 18
}
console.log(a.some(checarIdade))
```

Diferente do `every`, ele retornará false somente se todos os itens forem diferentes da condição.

forEach -> Itera sobre todo o array, independente do resultado da função. Tem resultado igual ao usar um laço `for` com uma função dentro.

O método forEach é utilizado parecido ao utilizar o laço `for` com uma função dentro. Podemos imprimir facilmente os itens de um array utilizando o `forEach` e uma `Arrow Function`.

```javascript
const a = [17, 18, 15]
a.forEach((dado) => console.log(dado))
```

Podemos usar o `forEach` quando precisarmos utilizar o laço for, pois facilita bastante a leitura e a escrita.

Map -> Retorna um novo array com o resultado da função passada para o método.

Muitas vezes é confundido com o método `forEach`, mas podemos utilizar o `map` para realizar alterações no array, conforme abaixo, onde iremos colocar todos os nomes no array em letras maiúsculas.

```javascript
const a = ['luiz', 'raissa', 'joao']
const b = a.map((dado) => {
    return dado.toUpperCase()
})
console.log(b);
```

Devemos lembrar que o método `map` não faz alteração diretamente no array original, mas retorna um novo array.

Filter -> Como o `map`, também retorna um novo array, mas somente com os elementos que a função devolve true.

Utilizamos o `filter`, como o próprio já diz, para filtrar os resultados de um array. Como no exemplo abaixo, iremos filtrar um array com números e strings para ter somente números.

```javascript
const a = [12, 5, 'c', 7, 9, 'a', 34, 'b']
const b = a.filter((dado) => {
    return typeof dado === 'number'
})
console.log(b);
```

Como o `map`, o `filter` também não altera o array original, mas retorna um novo array.

Find -> Busca elemento no array, conforme uma condição desejada, e devolve o elemento caso seja encontrado.

Utilizado para encontrar um elemento no array. Conforme abaixo, podemos utilizar para encontrar o primeiro número `4` do array.

```javascript
const a = [1, 2, 3, 4, 6, 7, 4]
console.log(a.find(numero => numero == 4))
```

Neste caso, ele retornará somente o primeiro elemento que encontrar que seja igual a verificação realizada. Se nenhum elemento for encontrado, ele retornará `undefined`.

## Conclusão

Existem outro métodos de array em JavaScript, mas creio que estes são os mais utilizados ou pelo menos o que mais utilizo. São métodos que facilitam bastante o dia a dia de quem programa com JS e é sempre bom saber quando usar qual.