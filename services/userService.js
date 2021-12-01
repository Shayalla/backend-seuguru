const { User } = require('../database/models');

const createUser = async ({ name, age, address, number, zipcode }) => {
  await User.create({ name, age, address, number, zipcode });
  return { result: 'Usuário criado com sucesso', code: 201 };
};

const getUserById = async (id) => {
  const user = await User.findByPk(id);

  if (!user) return { result: 'Usuário não encontrado', code: 400 }

  const { age } = user.dataValues;
  return { result: { id, age }, code: 200 };
};

module.exports = {
  createUser,
  getUserById,
};
