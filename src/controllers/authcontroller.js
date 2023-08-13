const authService = require('../services/authservice');
const userService = require('../services/user');

async function signup(req, res) {
  const { email, password } = req.body;
  await userService.createUser(email, password);
  res.status(201).send('User registered successfully');
}

async function login(req, res) {
  const { email, password } = req.body;
  const user = await authService.authenticateUser(email, password);
  
  if (!user) return res.status(401).send('Invalid credentials');

  const token = authService.generateToken(user._id);
  res.header('Authorization', token).send('Login successful');
}

module.exports = {
  signup,
  login,
};
