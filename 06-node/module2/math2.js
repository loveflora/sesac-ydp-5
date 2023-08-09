const add = (a, b) => a + b;
const E = 2.718;
const PI = 3.141592;

//; key와 value 같으면 생략가능
// module.exports = {
//     add: add,
//     E: E,
//     PI: PI,
//   };

const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

//-- 1. 객체로 감싸서 내보내기
module.exports = { add, E, PI, subtract, multiply, divide };

//-- 2. 하나씩 내보내기
// module.exports.add = add;
// module.exports.E = E;
// module.exports.PI = PI;
// module.exports.subtract = subtract;
// module.exports.multiply = multiply;
// module.exports.divide = divide;

//-- 3. 생략
// exports.add = add;
// exports.E = E;
// exports.PI = PI;
// exports.subtract = subtract;
// exports.multiply = multiply;
// exports.divide = divide;
