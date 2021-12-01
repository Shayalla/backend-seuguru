const express = require('express');
const { newUser, getUser  } = require('../controllers/userController')

const apiRouter = express.Router();

apiRouter.get('/users/:id', getUser);

apiRouter.post('/users', newUser);

module.exports = { apiRouter };
