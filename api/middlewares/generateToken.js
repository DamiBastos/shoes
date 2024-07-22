const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  return jwt.sign(
    {
      name: user.email,
      id: user.id,
    },
    process.env.TOKEN_SECRET,
    { expiresIn: '24h' }
  );
};

module.exports = generateToken;