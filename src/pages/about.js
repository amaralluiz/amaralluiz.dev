  
import React from 'react'

import Layout from '../components/Layout/'
import SEO from '../components/seo'

import { MainContent } from '../components/Post/styled'

const AboutPage = () => (
  <Layout>
    <SEO
      title="Sobre mim"
      description="Saiba um pouco mais sobre o desenvolvedor por trás deste blog."
    />
    <MainContent>
      <h1>Sobre mim</h1>
      <p>
        Meu nome é Luiz Filipe Amaral, sou natural de Itaúna/MG.
      </p>
      <p>
        Trabalho há 10 anos na área de TI, já trabalhei no Suporte a Sistemas, Analista de Sistemas,
        Analista de Requisitos, e desde 2020 venho trabalhando com desenvolvimento. Como desenvolvedor
        já atuei com diversas tecnologias diferentes, como PHP, NodeJS, React, Angular, C#, Python.
        Hoje em dia trabalho com a plataforma .NET, especificamente com C#.
        Sou formado em Análise e Desenvolvimento de Sistemas pelo Centro Universitário Estácio
        de Belo Horizonte. Antes disso comecei a estudar Ciência da Computação em Itaúna, mas
        tive alguns problemas e acabei trancando o curso.
        Comecei uma pós em Análise de Dados e Big Data, mas desisti ao finalizar o primeiro período
        e hoje faço pós em Arquitetura de Software, que é o assunto que mais tenho gostado de estudar.
      </p>
      <p>
        Amo aprender e ensinar o que aprendi, tenho até alguma facilidade para isso, o que me deu a
        ideia de criar o blog. Pretendo postar aqui coisas interessantes que venho aprendendo sobre
        desenvolvimento e sobre a área de TI.
      </p>
      <h2>Contato</h2>
      <p>
        Para entrar em contato comigo bastar enviar um email para <a href="mailto:contato@amaralluiz.dev">contato@amaralluiz.dev</a>
      </p>
    </MainContent>
  </Layout>
)

export default AboutPage