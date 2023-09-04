//=== bcrypt ===

const bcrypt = require('bcrypt');

const originalPassword = '1234'; // 원본 비번
const saltRounds = 10; // salt 라운드 수를 정의

//; 1. 비밀번호 해싱 함수
function hashPassword(password) {
  return bcrypt.hashSync(password, saltRounds); // 동기함수 쓰면 비동기 처리할 필요 X...?
}

//; 2. 원본 비밀번호와 해시된 비밀번호가 일치하는지 확인하는 함수
function comparePassword(password, hashedPassword) {
  return bcrypt.compareSync(password, hashedPassword);
}

//; 사용 예제
//-- 1) 원본 비번을 해싱한 결과
const hashedPassword = hashPassword(originalPassword);
console.log(`Hashed password: ${hashedPassword}`);

//-- 2) 원본 비번이랑 해시된 비번이 일치하는지 확인
const isMatch = comparePassword(originalPassword, hashedPassword); // 같다면 true, 아니면 false
console.log(`original password === hashedPassword: ${isMatch}`); // true

const isMatch2 = comparePassword('hello world', hashedPassword); // 같다면 true, 아니면 false
console.log(`'hello world' === hashedPassword: ${isMatch2}`); // false
