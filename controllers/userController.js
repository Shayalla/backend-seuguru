const rescue = require('express-rescue');
const { createUser } = require('../services/userService');

const newUser = rescue(async(req, res) => {
  const { name, age, address, number, zipcode } = req.body;
  const { message } = await createUser({ name, age, address, number, zipcode });
  return res.status(201).json(message);
});

module.exports = { newUser };
