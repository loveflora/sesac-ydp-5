//=== 단축 평가 : &&, || ===
//-- A && B : 두 개의 피연산자 모두 t면 t를 반환
//-- A || B : 두 개의 피연산자 중에서 하나만 t여도 t를 반환

console.log(true && true); // true
console.log(false && true); // false

console.log(true || false); // true
console.log(true || false); // true

const a = 1;
const b = 2;

// 삼항 연산자
const result1 = a > b ? 'a가 큼' : 'b가 큼';
console.log(result1); // "b가 큼"

// 단축평가 (&&, 논리곱)
const result2 = a > b && 'a가 큼';
console.log(result2); // false

const result3 = a < b && 'b가 큼';
console.log(result3); // "b가 큼"

// 단축평가 (||, 논리합)
const result4 = a || 100;
console.log(result4); // 1

const nameEx = '홍길동';
const nameEx2 = null;
console.log(nameEx || '이름없음');
console.log(nameEx2 || '이름없음');
