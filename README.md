# test-news
Desenvolvimento de um Sistema de Gerenciamento de notícias
Siga as instruções abaixo para começar.

##

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em seu sistema:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [npm](https://www.npmjs.com/)

## Instalação

1. **Instale as dependências do projeto:**

```bash
npm install
```

2. **Aplique as migrações do banco de dados:**

```bash
npx prisma migrate dev
```

3. **Execute os scripts de seed para popular o banco de dados:**

```bash
node backend/prisma/seeds/category.js
node backend/prisma/seeds/news.js
```

4. **Inicie os serviços do Docker Compose:**

```bash
docker-compose up -d
```

5. **Inicie o servidor backend:**

```bash
npm run dev
```

6. **Inicie o frontend:**

```bash
npm start
```

Agora, você deve ser capaz de acessar a aplicação em http://localhost:3000.

## Observações
- A collection com as rotas do postman estão na raiz do projeto
- O projeto utiliza o prisma para gerenciar o banco de dados