const User = require('../models/usermodel');

async function createUser(email, password) {
  const user = new User({ email, password });
  await user.save();
}

module.exports = {
  createUser,
};
