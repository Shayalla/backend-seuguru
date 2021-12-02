const { Coverage } = require('../database/models');

const createCoverage = async ({ insurance_id, name, factor }) => {
  await Coverage.create({ insurance_id, name, factor });
  return { result: 'Cobertura criado com sucesso', code: 201 };
};

const getCoverageById = async (id) => {
  const coverage = await Coverage.findByPk(id);
  if (!coverage) return { result: 'Cobertura não encontrada', error: true };
  return { result: coverage.dataValues };
};

const simulator = async ({ insurance_id, coverage_id, capital }) => {
  const coverage = await getCoverageById(coverage_id);
  if (coverage.error) return { result: coverage.result, code: 400 };

  const { result } = coverage;
  const { name, factor } = result;
  const premio = capital * factor;

  const resultSimulator = {
    insurance_id,
    coverages: [
      { coverage_id, name, capital, premio },
    ],
    total: premio,
  };

  return { result: resultSimulator, code: 200 };
};

module.exports = {
  createCoverage,
  getCoverageById,
  simulator,
};