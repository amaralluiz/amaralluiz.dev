---
title: Explicando conceitos de Orientação a Objetos (PT 2)
description: Explicando o que é Abstração e Encapsulamento
date: 2025-07-01 03:01:48
thumbnail: assets/img/estudo.jpg
category: dev
background: "#637a91"
---
Hoje iremos falar de dois dos quatro conceitos principais da Orientação a Objetos, que são a Abstração e o Encapsulamento.

## Abstração

A abstração tem como objetivo facilitar a compreensão de um código e reduzir a complexidade. Mas como fazemos isso? Bom, fazemos isso separando muito bem os detalhes de implementação em classes que realmente fazem sentido, deixando a responsabilidade de algo somente com quem é realmente responsável por aquilo.

Um clássico exemplo seria imaginarmos um Carro. Para utilizar um carro não precisamos saber de todos os detalhes mecânicos e eletrônicos que controlam ele e o faz andar, parar, abrir a porta, subir os vidros e esse tipo de coisa. Precisamos somente operar as "funções" que controlam essas coisas.

Abaixo podemos criar um código que exemplifica isto.

```csharp
using System;

namespace ExemploAbstracao;

public class Carro 
{
  public string Marca;
  public string Cor;
  
  public Carro (string marca, string cor)
  {
    Marca = marca;
    Cor = cor;
  }
  
  public void Ligar()
  {
    Console.WriteLine("Carro ligado");
  }
  
  public void Acelerar()
  {
    Console.WriteLine("Carro acelerando");
  }
  
  public void Frear()
  {
    Console.WriteLine("Carro freando");
  }
  
  public void Desligar()
  {
    Console.WriteLine("Carro desligado");
  }
}

public class Program
{
  public static void Main(string[] args)
  {
    var meuCarro = new Carro("Volkswagen", "Azul");
    meuCarro.Ligar();
    meuCarro.Acelerar();
    meuCarro.Frear();
    meuCarro.Desligar();
  }
}
```

Neste exemplo podemos ver que ao utilizar os métodos relacionados ao objeto Carro, não precisamos nos preocupar em como ele está sendo implementado, somente utilizamos e temos o resultado esperado.

Dessa forma, se precisarmos algum dia realizar uma manutenção no método de Acelerar, por exemplo, não precisamos reescrever todos os lugares onde o método é utilizado, somente o método Acelerar dentro da classe Carro, assim evitamos código repetitivo e deixamos a responsabilidade de acelerar somente com quem é responsável por acelerar.

## Encapsulamento

O encapsulamento basicamente é esconder os detalhes internos de um objeto e expor somente o que é realmente necessário para interagir com ele. Para isso, utilizamos algumas palavras reservadas para definir o acesso que daremos para o método ou atributo da classe.

Os modificadores de acesso no C# são:

* Public
* Protected
* Internal
* Private
* File

Vamos agora refatorar nossa classe Carro para que seja implementado um exemplo de modificador de acesso:

```csharp
using System;

namespace ExemploAbstracao;

public class Carro 
{
  public string Marca;
  public string Cor;
  private bool MotorLigado;
  private int Velocidade;
  
  public Carro (string marca, string cor)
  {
    Marca = marca;
    Cor = cor;
  }
  
  public void Ligar()
  {
    MotorLigado = true;
    Console.WriteLine("Carro ligado");
  }
  
  public void Acelerar()
  {
    if (!MotorLigado)
    {
      Console.WriteLine("Não é possível acelerar. O carro está desligado");
      return;
    }
    Velocidade += 10;
    Console.WriteLine($"Carro acelerando. Velocidade atual: {Velocidade} km/h");
  }
  
  public void Frear()
  {
    if (!MotorLigado)
    {
      Console.WriteLine($"O carro está desligado. Não é necessário frear");
      return;
    }
    if (Velocidade > 0)
    {
      Velocidade -= 10;
      Console.WriteLine($"Carro freando. Velocidade atual: {Velocidade} km/h");
    }
    else
    {
      Console.WriteLine("O carro já está parado");
    }
  }
  
  public void Desligar()
  {
    MotorLigado = false;
    Velocidade = 0;
    Console.WriteLine("Carro desligado");
  }
}

public class Program
{
  public static void Main(string[] args)
  {
    var meuCarro = new Carro("Volkswagen", "Azul");
    meuCarro.Ligar();
    meuCarro.Acelerar();
    meuCarro.Frear();
    meuCarro.Desligar();
  }
}
```

Como podemos ver agora nosso Carro possui também os atributos Velocidade e MotorLigado. Como não é interessante para nós que quem vá utilizar a classe Carro somente mude o status do motor ligando e desligando o carro e a velocidade somente acelerando e freando, colocamos estes métodos como private, dessa forma somente a classe Carro tem acesso a estes atributos. Ao tentar utilizar eles fora da classe Carro, teremos um erro de compilação. Dessa forma garantimos que a classe Carro não tenha nenhum comportamento inesperado.