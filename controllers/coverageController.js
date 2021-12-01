const rescue = require('express-rescue');
const { createCoverage } = require('../services/coverageService');

const newCoverage = rescue(async (req, res) => {
  const { insurance_id, name, factor } = req.body;
  const coverage = await createCoverage({ insurance_id, name, factor });
  return res.status(coverage.code).json(coverage.result);
});

module.exports = { newCoverage };
