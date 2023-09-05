const bcrypt = require('bcrypt');

const saltRounds = 10;

exports.hashPw = (pw) => {
  return bcrypt.hashSync(pw, saltRounds);
};

exports.comparePw = (pw, hashedPw) => {
  return bcrypt.compareSync(pw, hashedPw);
};
