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

1. **Inicie os serviços com Docker Compose:**

```bash
docker-compose up
```

## Caso o PRISMA não funcione com o docker, execute os comandos dentro de backend

1. **Aplique as migrações do banco de dados:**

```bash
npx prisma migrate deploy
```

2. **Execute as seeds para popular o banco de dados:**

```bash
node prisma/seeds/category.js
node prisma/seeds/news.js
```


Agora, você deve ser capaz de acessar a aplicação em http://localhost:3000.

## Observações
- A collection com as rotas do postman estão na raiz do projeto: News.postman_collection.json
- Tem um dump do banco de testes na raiz do projeto: test-news.sql
- O projeto utiliza o prisma para gerenciar o banco de dados