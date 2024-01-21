const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});