const { Coverage } = require('../database/models');

const createCoverage = async ({ insurance_id, name, factor }) => {
  await Coverage.create({ insurance_id, name, factor });
  return { result: 'Cobertura criado com sucesso', code: 201 };
};

module.exports = {
  createCoverage,
};