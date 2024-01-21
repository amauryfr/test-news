const express = require('express');
const cors = require('cors');
const router = require('./router');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', router);

module.exports = app;