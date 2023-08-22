// math module 불러와 사용

//-- require('모듈경로') : 모듈 불러오기
// 하나만 내보낸 모듈은 이름이 달라져도 불러올 수 있음

//_ math.js 파일 코드
// module.exports = add;
const hello = require('./math');

console.log(hello(1, 2));
