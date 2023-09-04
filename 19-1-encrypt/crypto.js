//=== 암호화 ===

//; crypto
// node 내장 모듈이라 따로 설치 필요 없음.
const crypto = require('crypto');

//] crypto '단방향' 암호화 구현
//; createHash()
// 지정한 해시 알고리즘으로 해시 객체를 생성하는 암호화 방식
const createHashedPassword = (password) => {
  // createHash(알고리즘).update(암호화할_값).digest(인코딩_방식)
  return crypto.createHash('sha512').update(password).digest('base64'); // base64 : 인코딩 방식
};

console.log(createHashedPassword('1234'));
console.log(createHashedPassword('1234')); // 결과 동일 ---> 같은 pw라면 같은 해쉬 값
// '1234' : 동일한 데이터에 대해서는 항상 동일한 해시 값이 생성됨
//_ 해시 함수의 한계 : 레인보우 테이블
// => 암호화된 비밀번호를 빠르게 역추적해서 원본 비밀번호를 찾아낼 수 있음.
console.log(createHashedPassword('1235'));

////////////////////
//; pbkdf2(비밀번호, 솔트, 반복횟수, 키의 길이, 알고리즘)
// - 비밀번호 기반 키 도출 함수, 주로 비밀번호 저장 시 사용
// - buffer 형식의 데이터 변환 => toString() 이용하여 문자열로 변환

//; 단방향 암호화 생성 함수
function saltAndHashPassword(password) {
  const salt = crypto.randomBytes(16).toString('base64'); // 임의의 salt 생성
  const iterations = 100; // 반복 횟수
  const keylen = 64; // 키의 길이
  const digest = 'sha512'; // 해시 알고리즘

  // hash ==> salt랑 password를 결합해서 해시(암호화된 비밀번호)를 생성
  const hash = crypto
    .pbkdf2Sync(password, salt, iterations, keylen, digest)
    // 여기까지 반환되는 값이 Buffer 형태
    .toString('base64');
  // Buffer --> string 변환

  return {
    salt,
    hash,
  };
}

//] 2. 암호 비교 함수
// inputPassword(제공된 비밀번호), salt, hash를 기반으로 새로운 해시 생성하고,
// savedHash와 비교
// => 제공된 비밀번호와 원래 비밀번호 같으면, 두 해시 값도 일치
function checkPassword(inputPassword, savedSalt, savedHash) {
  const iterations = 100; // 반복 횟수
  const keylen = 64; // 키의 길이
  const digest = 'sha512'; // 해시 알고리즘

  const hash = crypto
    .pbkdf2Sync(inputPassword, savedSalt, iterations, keylen, digest)
    .toString('base64');

  return savedHash === hash;
  // 같다면 true
  // 다르면 false
}

//; 사용 예제
//-- 1) 비밀번호 암호화
const password = '1234!';
const { salt, hash } = saltAndHashPassword(password);
// salt : salt 값
// hash : hash 값
console.log(
  `비밀번호 암호화에 쓰인 Salt: ${salt}, 비밀번호가 암호화된 결과 Hash: ${hash}`
);

//-- 2) 비밀번호 확인
const inputPassword = '1234!';
const isMatch = checkPassword(inputPassword, salt, hash); // 같다면 true, 다르면 false

console.log(`비밀번호 일치: ${isMatch}`);
