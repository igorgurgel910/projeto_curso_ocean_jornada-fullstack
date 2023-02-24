## Curso Jornada FullStack

Este repositório foi criado para registrar o conteúdo e os exercícios da Jornada Fullstack. Este projeto tem como objetivo aprendizado, pois busco transição de carreira para Tecnologia da informação.

Empresa: Ocean Brasil <br>
Nome do curso: Jornada Fullstack<br>
URL: https://www.oceanbrasil.com/atividades/3058-Jornada-FullStack<br>
Conteúdo: Nessa Jornada você terá a oportunidade de aprender backend e frontend e colocar os conhecimentos em prática em um projeto completo que será desenvolvido ao longo das 8 aulas!

- 02/02/2023: Backend com NodeJs e Express (Parte 1) - 09h00 às 12h00 (Brasília)
- 03/02/2023: Backend com NodeJs e Express (Parte 2) - 09h00 às 12h00 (Brasília)
- 09/02/2023: Laboratório de Backend com Banco de Dados e MongoDB - 09h00 às 12h00 (Brasília)
- 10/02/2023: Integrando os serviços de backend na nuvem - 09h00 às 12h00 (Brasília)
- 16/02/2023: Frontend Web com ReactJS: Introdução (Parte 1) - 09h00 às 12h00 (Brasília)
- 17/02/2023: Frontend Web com ReactJS: Introdução (Parte 2) - 09h00 às 12h00 (Brasília)
- 23/02/2023: Frontend Web com ReactJS: Integração com Backend (Parte 1) - 09h00 às 12h00 (Brasília)
- 24/02/2023: Frontend Web com ReactJS: Integração com Backend (Parte 2) - 09h00 às 12h00 (Brasília)
<br>

EMENTA - BACKEND

Entenda de uma vez por todas o que é backend e quais são as tecnologias envolvidas nesse pedaço tão importante de um software, responsável pela maior parte do processamento de informações e por proteger a camada de banco de dados da aplicação. Você entenderá desde os princípios do backend, tendo uma introdução completa sobre o assunto e começará a dar os primeiros passos desenvolvendo uma aplicação em NodeJS, com a linguagem de programação JavaScript.

Tópicos:

- O que exatamente é backend?
- Evolução do Backend
- REST (Verbos de comunicação: GET, POST, PUT, DELETE)
- JSON
- Postman (Criando/fazendo requisições e organizando em collections)
- JSON Viewer
- JavaScript: do frontend para o backend
- NodeJS
- Package Json
- NPM (Node Package Manager)
- Benchmarking
- Criação do projeto
- Início do desenvolvimento da aplicação CRUD
-> Create, Read (All/Single), Update & Delete
-> Criar, Ler (Tudo ou Individual), Atualizar e Remover
- Node Express
- Body-Parser

EMENTA - FRONTEND
Aprenda a construir um site utilizando a tecnologia ReactJS, com a linguagem de programação JavaScript e combinando HTML e CSS. O React é uma biblioteca mantida pelo Facebook e Instagram, de código aberto e utilizada amplamente por diversos sites, como Netflix, Imgur, Airbnb, entre outros.
- Criando o projeto
- Configurando o VSCode
- Familiarizando com JavaScript
- Implementando o React
- Entendendo os componentes
- Criando a primeira página
- Implementando componentes interativos
- Ferramentas de desenvolvedores: Inspecionar elementos
- Qual a responsabilidade do Frontend?
- Avançando no ReactJS
- Construção de mais páginas para compor a aplicação
- Integrando com uma aplicação backend

<br>

## Links das aulas:

Repositório da aula, no GitHub
https://github.com/paulosalvatore/ocean-jornada-fullstack-fevereiro-23

Miro:
https://miro.com/app/board/uXjVPr-4uM0=/?share_link_id=152694689598

GitHub Paulo Salvatore
https://github.com/paulosalvatore

Site do Paulo Salvatore
https://paulosalvatore.com.br

Discord do Paulo Salvatore
https://discord.com/invite/BRjMwnCmfk

Playlist Backend - Canal PauloSalvatore
https://www.youtube.com/playlist?list=PLzFYWfRVHp5Jx-iNLxhUydXwnYPqmV2MU

Preparação para as trilhas
https://github.com/paulosalvatore/samsung-ocean-preparacao-trilhas

Preparação para backend
https://github.com/paulosalvatore/samsung-ocean-preparacao-trilhas/raw/main/Samsung%20Ocean%20-%20Prepara%C3%A7%C3%A3o%20(Trilha%20Backend).pdf

GitPod
https://gitpod.io/#https://github.com/paulosalvatore/nodejs-clean-template

GitPod do projeto atual
https://gitpod.io/#https://github.com/paulosalvatore/ocean-jornada-fullstack-fevereiro-23


## Avaliação do curso:<br>

Comandos GIT:
    git add .
    git commit -m "update"
    git push

Para Criar Node pacote:
    npm init

## Aula 05 - 16/02/2023

Para assionar o modo desenvolvedor:
    npm run dev

Criando 3 terminais:
    backend - cd backend
    frontend - cd frontend
    git - na pasta raiz

Backend foi criado manualmente, já o frontend é criado por apoio do VITE.

Na criação do frontend:
Dentro da pasta raiz, usando terminal Git
Para usar o VITE - criando projeto react:
    npm create vite
        √ Project name: ... frontend
        √ Select a framework: » React
        √ Select a variant: » JavaScript

Done. Now run:
    cd frontend
    npm install
    npm run dev

Criação da pasta Componentes
    Dentro criou a pasta ReadAll
        Dentro criou file ReadAll.jsx
        Arquivo que substituiu o app na tela do localhost.
        Depois Criou ReadAll.Css

Alterou arquivo /src/App.jsx

Criação da pasta Card dentro de Componentes
    Dentro criou Cardcss e Card.jsxn

## Aula 06 - 17/02/2023

Criando 3 terminais:
    backend - cd backend
    frontend - cd frontend
    git - na pasta raiz

Rodando projeto nos dois terminais
    npm run dev

## Aula 07 - 23/02/2023

MONO REPO - Estrutura de duas pastas, dois projetos, como backend e frontend no mesmo projeto.

Opção de extensão pra React:
    dsznajder.es7-react-js-snippets
    'rfce'

Estudar sobre CSS:
https://getbem.com/naming/
https://tailwindcss.com/
https://flexboxfroggy.com/

- Criar pasta components/Header
- Criar arquivo Header.jsx
- Inserir boilerplate de componente
- Inserir o Header no App
- Testar pela primeira vez
- Inserir imagem
- Inserir dois links (por enquanto indo para o caminho "#")
- Adicionar estilização no Header
- Adicionar uma classe no elemento principal
- Adicionar alguma propriedade qualquer para testar se está funcionando, geralmente uma propriedade que altera cor ou tamanho, pois fica mais visível
- Depois, ir para o DevTools para explorar a estilização
- Assim que acertar a estilização, insira as declarações no arquivo de estilo

Deu erro no nodemon
    npm install
    npm run dev

no Backend
    npm install cors

    Importou o Cors no index.js

## Aula 08 - 24/02/2023

Abrir o projeto no render.com
Conectando com Github
Conectar projeto da aula
Abrir projeto no github e apertar tecla . (ponto) para abrir VSCode online.

No render
    New Web Services
        Root Directory - backend
        Build Command - npm install
        Publish directory - npm run start

No front end coloca o link do render, no ReadAll.jsx

    New Static Site
        Root Directory - frontend
        Build Command - npm install; npm run build
        Publish directory - dist


