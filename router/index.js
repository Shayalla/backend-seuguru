const express = require('express');
const { newCoverage } = require('../controllers/coverageController');
const { newUser, getUser  } = require('../controllers/userController')
const {
  newInsurance,
  getInsurances,
  simulatorInsurance
} = require('../controllers/insuranceController');

const apiRouter = express.Router();

apiRouter.get('/users/:id', getUser);

apiRouter.post('/users', newUser);

apiRouter.post('/insurance', newInsurance);

apiRouter.get('/insurance', getInsurances);

apiRouter.post('/coverage', newCoverage);

apiRouter.post('/simulator', simulatorInsurance);

module.exports = { apiRouter };
