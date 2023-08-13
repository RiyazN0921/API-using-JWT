const userService = require('../services/user');

async function createUser(req, res) {
  const { email, password } = req.body;
  await userService.createUser(email, password);
  res.status(201).send('User created successfully');
}

module.exports = {
  createUser,
};
