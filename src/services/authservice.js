const jwt = require('jsonwebtoken');
const User = require('../models/usermodel');

const secretKey = 'riyazn';

function generateToken(userId) {
  return jwt.sign({ userId }, secretKey);
}

async function authenticateUser(email, password) {
  const user = await User.findOne({ email, password });
  return user;
}

module.exports = {
  generateToken,
  authenticateUser,
};
