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

Devemos fazer nossa canvas conforme essa imagem. Onde a cobrinha irá ocupar um quadradinho deste grid e a cada vez que ela se movimentar, irá para o próximo quadradinho.