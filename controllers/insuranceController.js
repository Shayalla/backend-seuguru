const rescue = require('express-rescue');
const { createInsurance, getAllInsurances } = require('../services/insuranceService');

const newInsurance = rescue(async(req, res) => {
  const { name } = req.body;
  const insurance = await createInsurance({ name });
  return res.status(insurance.code).json(insurance.result);
});

const getInsurances = rescue(async(_req, res) => {
  const insurances = await getAllInsurances();
  res.status(insurances.code).json(insurances.result);
})

module.exports = {
  newInsurance,
  getInsurances,
};
