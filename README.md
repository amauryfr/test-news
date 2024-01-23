# test-news
Desenvolvimento de um Sistema de Gerenciamento de notícias
Siga as instruções abaixo para começar.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em seu sistema:

- [Node.js](https://nodejs.org/) (v14 ou superior)
- [Docker](https://www.docker.com/)
- [npm](https://www.npmjs.com/)

## Instalação

1. **Instale as dependências do projeto:**

  npm install

2. **Aplique as migrações do banco de dados:**

  npx prisma migrate dev

3. **Execute os scripts de seed para popular o banco de dados:**

  node backend/prisma/seeds/category.js
  node backend/prisma/seeds/news.js

4. **Inicie os serviços do Docker Compose:**

  docker-compose up -d

5. **Inicie o servidor backend:**

  npm run dev

6. **Inicie o frontend:**

  npm start

Agora, você deve ser capaz de acessar a aplicação em http://localhost:3000.