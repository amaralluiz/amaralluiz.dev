---
title: Explicando conceitos de Orientação a Objetos (PT 1)
description: Explicando os conceitos de Orientação a Objetos
date: 2024-09-17 05:42:39
thumbnail: assets/img/estudo.jpg
category: dev
background: "#637a91"
---
Depois de muito tempo sem postar nada por aqui, resolvi que agora irei voltar e usando o blog mesmo para escrever sobre coisas que ando estudando ou que gostaria de reforçar o tema. O tema que eu senti necessidade de reforçar dessa vez foi a Programação Orientada a Objetos, que é o paradigma que trabalho diariamente.Senti a necessidade de reforçar esse assunto porque é um assunto extremamente complexo, mas que a gente muitas vezes não revisa por achar que já dominamos. 

Mas o que realmente é POO (Programação Orientada a Objetos)? Bom, POO não é nada mais que um paradigma que se baseia em abstrair coisas do mundo real para o mundo digital. Mas o que diabos é paradigma? Isso foi algo que eu sempre tive dificuldade de entender porque poucas vezes a gente realmente vê alguém explicando o que é um paradigma de programação. Paradigma nada mais é do que a forma de classificar uma linguagem com base na forma que utilizamos para programar, basicamente o padrão a ser seguido.

A Orientação a Objetos utiliza de quatro principais componentes que são a Abstração, o Encapsulamento, a a Herança e o Polimorfismo.

## Beleza, mas o que é um Objeto?

O objeto é a forma que utilizamos para representar essas coisas e conceitos do mundo real que já foram citadas. Um objeto em programação pode ser resumido também como a instância de uma classe. 

## Mas e agora o que é uma Classe?

A classe é justamente o "esqueleto" que esse objeto terá. É a classe que irá definir todos os atributos e comportamentos de um objeto. Os atributos são basicamente as variáveis de uma classe, são os valores que devem ser armazenados que fazem sentido para aquele objeto. Agora os métodos são as funcionalidades e comportamos que esse objeto deve ter. Definindo os atributos e comportamentos temos o necessário para criar nossos objetos, ou como falamos, instanciarmos o objeto utilizando a classe.

## E como criamos isso no código?

Podemos usar o exemplo abaixo para mostrar como definimos uma classe em C# e depois como instanciamos esta classe.

```csharp
using System;

namespace TestePOO
{
    
    public class Sale
    {
        public int Id { get; set; }
        public List<Product> Products { get; set; }
        public SaleStatus SaleStatus { get; set; }
        public int TotalValue { get; set; }

        public bool ConfirmSale()
        {
            SaleStatus = SaleStatus.Confirmed;
            return true;
        }
    }

    public enum SaleStatus
    {
        Confirmed,
        Canceled,
        Pending
    }
    
    public class Program
    {
        static void Main(string[] args) 
        {
            var sale = new Sale();
            sale.TotalValue = 10;
            sale.ConfirmSale();
            Console.WriteLine(sale.TotalValue);
            Console.WriteLine(sale.SaleStatus);
        }
    }
}
```

Como podemos ver, primeiramente criamos uma classe chamada Sale, nela temos alguns atributos que são o Id, uma lista de Product, que é outro objeto que não incluí neste arquivo, um inteiro para o valor total da venda e um enum SaleStatus para controlar o estado dessa venda. Temos também como comportamento o ConfirmSale que é um método que somente vai alterar o status da venda para Confirmado.

Na linha 31 do nosso codigo, instaciamos finalmente o nosso objeto utilizando a palavra reservada `new` e o nome do nosso objeto `Sale()`. Logo depois nos conseguimos colocar valor nos atributos do nosso objeto e também utilizamos os métodos dele para controlarmos e fazermos ações nele.

No próximo post veremos as características da Orientação a Objetos que citei no começo.