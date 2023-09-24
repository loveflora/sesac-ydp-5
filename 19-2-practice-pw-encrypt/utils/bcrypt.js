// 비밀번호 암호화 함수 => (선택) 가능하다면 비밀번호 암호화와 관련된 별도의 모듈로 작성해보기! (utils/encrypt.js)
//; TODO: bcrypt 패키지 불러오기
const bcrypt = require('bcrypt');

const saltRounds = 10;

//; TODO: 비밀번호를 해싱하는 함수 정의 (bcryptPassword)
exports.hashPassword = (pw) => {
  return bcrypt.hashSync(pw, saltRounds);
};

//; TODO:비밀번호와 원본 비번을를 비교하는 함수 (compareFunc)
exports.comparePassword = (pw, hashedPw) => {
  return bcrypt.compareSync(pw, hashedPw);
};
