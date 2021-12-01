const express = require('express');
const { newUser  } = require('../controllers/userController')

const apiRouter = express.Router();

apiRouter.post('/users', newUser);

module.exports = { apiRouter };
