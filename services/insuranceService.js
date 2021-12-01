const { Insurance } = require('../database/models');
const { Coverage } = require('../database/models');

const createInsurance = async ({ name }) => {
  await Insurance.create({ name });
  return { result: 'Seguro criado com sucesso', code: 201 };
};

const getAllInsurances = async () => {
  const insurances = await Insurance.findAll({
    include:
      { model: Coverage, as: 'coverages' },
    });
  return { result: insurances, code: 200 };
};

module.exports = {
  createInsurance,
  getAllInsurances,
};