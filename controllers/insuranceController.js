const rescue = require('express-rescue');
const { createInsurance } = require('../services/insuranceService');

const newInsurance = rescue(async(req, res) => {
    const { name } = req.body;
    const insurance = await createInsurance({ name });
    return res.status(insurance.code).json(insurance.result);
  });

module.exports = { newInsurance };
