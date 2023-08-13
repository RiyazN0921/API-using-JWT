const jwt = require('jsonwebtoken');

const secretKey = 'riyazn@1234';

function authenticateToken(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).send('Access denied: No token provided');
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).send('Access denied: Invalid token');
    }
    req.user = user;
    next();
  });
}

module.exports = authenticateToken;
