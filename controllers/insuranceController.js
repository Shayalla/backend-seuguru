const rescue = require('express-rescue');
const { createInsurance, getAllInsurances } = require('../services/insuranceService');
const { simulator } = require('../services/coverageService');

const newInsurance = rescue(async (req, res) => {
  const { name } = req.body;
  const insurance = await createInsurance({ name });
  return res.status(insurance.code).json({ message: insurance.result });
});

const getInsurances = rescue(async (_req, res) => {
  const insurances = await getAllInsurances();
  res.status(insurances.code).json(insurances.result);
});

const simulatorInsurance = rescue(async (req, res) => {
  const { insurance_id, coberturas } = req.body;
  const { coverage_id, capital } = coberturas[0];
  const simulatorUser = await simulator({ insurance_id, coverage_id, capital });

  res.status(simulatorUser.code).json(simulatorUser.result);
});

module.exports = {
  newInsurance,
  getInsurances,
  simulatorInsurance,
};
