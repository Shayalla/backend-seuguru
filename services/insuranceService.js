const { Insurance } = require('../database/models');

const createInsurance = async ({ name }) => {
  await Insurance.create({ name });
  return { result: 'Seguro criado com sucesso', code: 201 };
};

module.exports = {
  createInsurance,
};