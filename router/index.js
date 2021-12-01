const express = require('express');
const { newInsurance } = require('../controllers/insuranceController');
const { newUser, getUser  } = require('../controllers/userController')

const apiRouter = express.Router();

apiRouter.get('/users/:id', getUser);

apiRouter.post('/users', newUser);

apiRouter.post('/insurance', newInsurance);

module.exports = { apiRouter };
