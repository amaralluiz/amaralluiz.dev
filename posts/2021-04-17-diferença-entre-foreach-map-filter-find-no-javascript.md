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

Podemos utilizar o every para verificar se todos os números de um array são pares, conforme abaixo.

```javascript
var a = [2, 4, 6]
function numeroPar(numero){
  return numero % 2 == 0
}
console.log(a.every(numeroPar))
```

Neste caso, o retorno que teremos será "true", pois todos os números do array serão pares.

```javascript
var a = [2, 3, 6]
function numeroPar(numero){
  return numero % 2 == 0
}
console.log(a.every(numeroPar))
```

Caso mudemos um dos números do array para um número ou adicionemos um número impar, o retorno será "false".

Some -> Itera sobre o array até que a função retorne true, apresentando comportamento contrário ao Every.

Podemos utilizar o some para verificar se um dos itens do array é um verdadeiro. Como exemplo, iremos verificar se um array de idades possui alguma idade maior do que 18.

```javascript
var a = [17, 18, 15]
function checarIdade(idade){
  return idade >= 18
}
console.log(a.some(checarIdade))
```

Diferente do every, ele retornará false somente se todos os itens forem diferentes da condição.

forEach -> Itera sobre todo o array, independente do resultado da função. Tem resultado igual ao usar um laço for com uma função dentro.

O método forEach é utilizado parecido ao utilizar o laço for com uma função dentro. Podemos imprimir facilmente os itens de um array utilizando o forEach e uma Arrow Function.

```javascript
var a = [17, 18, 15]
a.forEach((dado) => console.log(dado))
```

Podemos usar o forEach quando precisarmos utilizar o laço for, pois facilita bastante a leitura e a escrita.

Map -> Retorna um novo array com o resultado da função passada para o método.

Muitas vezes é confundido com o método forEach, mas podemos utilizar o map para realizar alterações no array.

Filter -> Como o map, também retorna um novo array, mas somente com os elementos que a função devolve true.

Find -> Busca elemento no array, conforme uma condição desejada, e devolve o elemento caso seja encontrado.

Fill -> Preenche o array com um valor. Tem como parâmetros o valor a ser preenchido, o índice de início e o índice final.