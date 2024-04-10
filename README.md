# Facilita System - Sistema de Gerenciamento de Tarefas

Este é o repositório do projeto de um Sistema de Gerenciamento de Tarefas desenvolvido para o desafio prático da Facilita System. Neste documento, você encontrará todas as informações necessárias para compreender e executar o projeto.
## Link da aplicação
  https://front-end-teste-facilita-system.vercel.app/
## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- **Frontend:**
  - [React](https://reactjs.org/): Biblioteca JavaScript para construção de interfaces de usuário.
  - [Next.js](https://nextjs.org/): Framework React para renderização do lado do servidor e geração de páginas estáticas.
  - [Tailwind CSS](https://tailwindcss.com/): Framework CSS para estilização rápida e responsiva.
  - [axios](https://axios-http.com/): Cliente HTTP para realizar requisições para a API do backend.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
teste-server-front/
├── components/
│   ├── Task/
│   │   ├── Task.tsx
│   ├── TaskList/
│   │   ├── TaskList.tsx
│   ├── TaskModals/
│   │   ├── TaskCreate.tsx
├── interfaces/
│   ├── Tarefas.interface.ts
├── pages/
│   ├── index.tsx
│   ├── login.tsx
├── public/
├── styles/
│   ├── globals.css
├── package.json
├── README.md
└── ...
```

- A pasta `components/` contém os componentes React utilizados na interface do usuário, como `Task` e `TaskList`.
- A pasta `interfaces/` contém os tipos de dados TypeScript utilizados no projeto, como `Tarefas.interface.ts`.
- A pasta `pages/` contém as páginas React do projeto, incluindo a página inicial (`index.tsx`) e a página de login (`login.tsx`).
- A pasta `public/` contém arquivos estáticos, como imagens e fontes.
- A pasta `styles/` contém os estilos globais da aplicação.
- O arquivo `package.json` contém as dependências e scripts de desenvolvimento do projeto.

## Configuração e Execução

Para executar o projeto, siga estas etapas:

1. Clone este repositório para sua máquina local.
2. Certifique-se de ter o Node.js e npm instalados em sua máquina.
3. Na raiz do projeto, execute o comando `npm install` para instalar as dependências.
4. Execute o comando `npm run dev` para iniciar o servidor de desenvolvimento.
5. Acesse `http://localhost:3000` em seu navegador para visualizar a aplicação.

## Observações

- Este projeto utiliza o Tailwind CSS para estilização, portanto, as classes CSS estão diretamente nos arquivos JSX.

## Autor

Este projeto foi desenvolvido por Éverton Henrique Cadoná . Se houver alguma dúvida ou problema, entre em contato pelo email cadonaenrike@gmail.com.
