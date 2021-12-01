const express = require('express');
const { newCoverage } = require('../controllers/coverageController');
const { newInsurance } = require('../controllers/insuranceController');
const { newUser, getUser  } = require('../controllers/userController')

const apiRouter = express.Router();

apiRouter.get('/users/:id', getUser);

apiRouter.post('/users', newUser);

apiRouter.post('/insurance', newInsurance);

apiRouter.post('/coverage', newCoverage);

module.exports = { apiRouter };
