const express = require('express');
const cors = require('cors');
const { apiRouter } = require('../router/index');
const error = require('../middlewares/error');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', apiRouter);

app.use(error);

module.exports = app;