const config = require('config');

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }

  try {
    req.user;
    next();
  } catch (e) {
    return res.status(401).json({ message: 'Auth error555' });
  }
};
