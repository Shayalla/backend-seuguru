const rescue = require('express-rescue');
const { createUser, getUserById } = require('../services/userService');

const newUser = rescue(async(req, res) => {
  const { name, age, address, number, zipcode } = req.body;
  const user = await createUser({ name, age, address, number, zipcode });
  return res.status(user.code).json(user.result);
});

const getUser = rescue(async(req, res) => {
  const { id } = req.params;
  const user = await getUserById(id);
  return res.status(user.code).json(user.result);
});

module.exports = {
  newUser,
  getUser,
};
