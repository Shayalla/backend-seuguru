const { User } = require('../database/models');

const createUser = async ({ name, age, address, number, zipcode }) => {
  await User.create({ name, age, address, number, zipcode });
  return { message: 'Usuario criado com sucesso' };
};

const getUserById = async (id) => {
  const user = await User.findByPk(id);
  const { age } = user.dataValues;
  return { id, age };
};

module.exports = {
  createUser,
  getUserById,
};
