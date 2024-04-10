# Frontend do Desafio React Jr
![Screenshot_6](https://github.com/cadonaenrike/teste-server-front/assets/95323804/57d6093b-0dca-489d-9ef5-10e13d33240e)

link do PROJETO:https://teste-server-front.vercel.app/

Este repositório contém a parte frontend do Desafio React Jr, uma aplicação desenvolvida com ReactJS e TailwindCSS. O objetivo deste projeto é consumir a API do backend, proporcionando uma interface para visualizar, adicionar, editar, e excluir produtos, além de visualizar detalhes específicos de cada um.

## Arquitetura e Bibliotecas Utilizadas

- **ReactJS**: Utilizado para construir a interface do usuário com componentes reutilizáveis e gerenciar o estado da aplicação.
- **TailwindCSS**: Framework CSS para estilização rápida e responsiva, adotando uma abordagem de design minimalista e elegante.
- **Axios**: Cliente HTTP baseado em Promises para realizar requisições à API do backend.
- **Next.js Image Component**: Para otimização de imagens, incluindo o logo do projeto.
- **React Hooks**: Utilizados para gerenciamento de estado e efeitos colaterais nos componentes funcionais.

## Estrutura do Projeto

A aplicação foi estruturada da seguinte maneira:

- `components`: Contém todos os componentes React utilizados na aplicação, como lista de produtos (`ProductList`), item de produto (`Product`), modais para edição (`EditProductModal`) e visualização de detalhes (`ProductDetails`).
- `interfaces`: Define as interfaces TypeScript para tipos de dados consistentes ao longo do projeto.
- `services`: Armazena a lógica para comunicação com a API do backend utilizando Axios.
- `public`: Pasta para armazenar ativos públicos, como imagens.
- `pages`: Contém as páginas da aplicação, incluindo a página inicial que lista os produtos.

## Funcionalidades

- **Listagem de Produtos**: Exibe todos os produtos com opções para editar, excluir e visualizar detalhes.
- **Adição de Produtos**: Permite inserir novos produtos através de um modal elegante e responsivo.
- **Edição de Produtos**: Habilita a modificação dos detalhes de produtos existentes.
- **Exclusão de Produtos**: Oferece a opção para remover produtos.
- **Visualização de Detalhes**: Mostra informações detalhadas sobre cada produto em um modal.

## Instruções de Uso

Para executar o frontend localmente:

1. Clone o repositório.
2. Navegue até a pasta do projeto e execute `npm install` para instalar as dependências.
3. Inicie o projeto com `npm run dev`. A aplicação estará acessível em `http://localhost:3000`.

## Repositório

Este projeto está disponível no GitHub: [teste-server-front](https://github.com/cadonaenrike/teste-server-front/tree/main)
