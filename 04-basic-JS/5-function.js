// === 함수 ===
// : 특정 작업을 수행하기 위해 독립적으로 설계된 코드 집합
// 입력 -> 함수 -> return -> 출력
// 동일한 작업을 반복
// 1. 반복 작업 줄임
// 2. 코드 재사용성 높임
// 3. 유지보수 편리

// alert(), confirm(), prompt() -> 함수다!!
// 1. 내장 함수: 이미 언어에서 자주 쓰는 기능을 만들어 놓은 함수
// 2. 사용자 정의 함수: 개발자가 자주 쓰이는 기능을 커스터마이징하여 만든 함수

// 용어 정리
// - 함수 '정의' : 함수를 '생성'
// - 함수 '호출' : 함수를 '사용'

// )) 1. 함수 선언식 (명시적 함수 선언)
function helloWorld() {
  // return 키워드 생략가능
  console.log('Hello, World');
}

helloWorld();

function helloWorld2() {
  return 'Hello, World';
}
console.log(helloWorld2);
// return 반환값
// : 함수 내부(body, block, scope) 코드의 '최종 결과값'
// 최종 결과 값을 저장하고 보관하기 위한 키워드
// return 키워드 만나면 함수 실행 중단

// )) 2. 함수 표현식 (Function Expression)
// 함수를 변수에 저장하는 형태
const helloWorld3 = function () {
  console.log('3');
};

const helloWorld4 = function () {
  return '4';
};

helloWorld3();
console.log(helloWorld4);

// 매개변수가 있는 함수
function hello1(text) {
  return text;
}
console.log(hello1('안녕'));
const num = 8;
console.log(hello1(num));

// 매개변수 2개
function hello2(text, name) {
  return `${text} ${name}`;
}

console.log(hello2('안녕', '이름'));

// )) 3. 화살표 함수 (arrow function)
// 문법 간결
const myFunc1 = (x) => x;
/*
function myFun1(x) {
    return x;
}
*/

const mySum = (a, b) => a + b;
/*
function mySum(a. b) {
    return a + b;
}
*/

const myMulti = (a, b) => {
  let result = a + b;
  return result;
};

console.log(myMulti(3, 4));

// && 호이스팅 hoisting
// '끌어올리다'
// 함수에서는 '함수 선언문'이 호이스팅 대상이 됨
// 코드가 실행되기 전에 함수/변수 선언을 최상단으로 끌어 올리는 현상
// 참고) 변수에서는 'var' 호이스팅의 대상 (let, const 호이스팅 대상 아님)

myHello(); // 함수 '호출'을 '정의'보다 먼저 함
function myHello() {
  console.log('hello');
}

// 함수 표현식
// - 호이스팅 대상이 될 수 없음
// - 함수 선언부보다 호출부가 먼저 나올 수 없음
// myHello2(); // error
const myHello2 = function () {
  console.log('2');
};

function multiply(a, b) {
  return a * b;
}

function square(a) {
  console.log(a ** 2);
}

square(3);
