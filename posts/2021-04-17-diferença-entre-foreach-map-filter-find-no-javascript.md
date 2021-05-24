---
title: Diferença entre ForEach, Map, Filter, Find no JavaScript
description: Diferenças entre funções de iteração no JavaScript
date: 2021-04-16 10:27:10
thumbnail: assets/img/javascript-loop.jpg
category: js
background: "#D6BA32"
---
No JavaScript temos algumas funções para iterar sobre arrays.







Every -> Itera sobre o array até que a função retorne false

Some -> Itera sobre o array até que a função returne true, apresentando comportamento contrário ao Every.

forEach -> Itera sobre todo o array, independente do resultado da função. Tem resultado igual ao usar um laço for com uma função dentro.

Map -> Retorna um novo array com o resultado da função passada para o método.

Filter -> Como o map, também retorna um novo array, mas somente com os elementos que a função devolve true.

Find -> Busca elemento no array, conforme uma condição desejada, e devolve o elemento caso seja encontrado.

Fill -> Preenche o array com um valor. Tem como parametros o valor a ser preenchido, o indice de inicio e o indice final.