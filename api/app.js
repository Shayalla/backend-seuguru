const express = require('express');
const cors = require('cors');
const { apiRouter } = require('../router/index');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', apiRouter);

module.exports = app;