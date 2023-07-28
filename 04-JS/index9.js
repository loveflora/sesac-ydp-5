//$$$ pass by value $$$
//@ 원시타입은 값(value)이 복사되어 전달
let num1 = 1; //~ num ---> 1 (value)
let num2 = num1;
console.log(num1, num2); // 1 1
console.log(num1 === num2); // true

num1 = 5; // 1 -> 5
console.log(num1, num2); // 5 1
console.log(num1 === num2); // false

//$$$ pass by reference $$$
// let, const 재할당 가능 여부
const obj = { one: 1, two: 2 };
const obj2 = obj; //~ ---> add1 같은 주소를 바라봄 ---> add1 { one: 1, two: 2}
console.log(obj, obj2); // {one : 1, two : 2}
console.log(obj === obj2); // true
// obj와 obj2는 현재 같은 데이터를 가지고,
//@ 참조값(address, 주소)도 같다

const obj3 = { one: 1, two: 2 }; //~ ---> add2 ---> add2 { one: 1, two: 2}
const obj4 = { one: 1, two: 2 }; //~ ---> add3 ---> add3 { one: 1, two: 2}
//! 서로 다른 별도의 객체
console.log(obj3, obj4);
console.log(obj3 === obj4); // false
// why? obj3와 obj4는 현재 같은 데이터를 같지만, 서로 다른 별도의 객체
//@ 즉, 참조값(address, 주소)가 다르다

obj3.five = 5;
console.log(obj3, obj4);
console.log(obj3 === obj4); // false

// # primitive type ---> 값(value)
// # reference type ---> 주소(address)를 참조 ---> 객체

// • 기본 자료형
// 다른 변수에 값을 할당하거나 함수인자를 넘길 때 값을 복사해 전달
// ➡ Pass by value

// • 객체 자료형
// 값을 복사해 전달하는 것이 아닌 메모리 주소를 참조값(address)을 저장
// ➡ Pass by reference (즉, 같은 객체를 참조할 뿐)

const arr = [1, 2];
const arr2 = arr;
// 서로 같은 참조값을 가짐
console.log(arr, arr2);
console.log(arr === arr2); // true

arr.push(5);
console.log(arr, arr2);
console.log(arr === arr2); // true

const arr3 = [1, 2];
const arr4 = [1, 2];
console.log(arr3, arr4);
console.log(arr3 === arr4);

arr3.push(5);
console.log(arr3, arr4);
console.log(arr3 === arr4);

// const로 선언해서 재할당 불가 (주소 바꿀 수 없음)
// 아파트(const)는 세대 주민들(값)이 바뀌는거지, 주소가 바뀌는건 아님.
//: const obj = {1 : 1}
//: obj = { hi: 'hi' }; // error (재할당, 주소 바꾸는 행위)
//,, let obj = {1 : 1}
//,, obj = { hi: 'hi' };  // let으로 변경하면 오류 안남. (let은 재할당이 가능하기 때문)

// === 객체 리터럴 (object literal) ===
//-- key-value 쌍으로 이루어진 데이터 구조
//-- 중괄호 {...}를 이용해 객체를 선언하는 것
// typeof [] --> object, typeof {} --> object
// 이 때의 객체는 광범위한 의미의 '객체'

let user1 = new Object(); // '객체 생성자' 문법
let user2 = {}; // '객체 리터럴' 문법

// === JS 표준 내장 객체 ===
//; 1. Date 객체 : 시간, 날짜
// let now = new Date(); // 현재 일시
// console.log(now);

//-- 타임스탬프 (timestamp)
// 1970년 1월 1일 기준으로 흘러간 밀리초(ms)를 나타내는 정수
let jan_01_1970 = new Date(0); // 0초 지남
console.log(jan_01_1970);
let jan_02_1970 = new Date(24 * 3600 * 1000); // 24시간 1시간 1초 (ms)
console.log(jan_02_1970);

// new Date (date_string)
let date1 = new Date('2023-07-17');
console.log(date1);

let date2 = new Date('2023', '06', '17'); // 1월이 0부터 시작함 MM(0~11)
console.log(date2);

// 관련 메서드
console.table(date1.getFullYear());
console.table(date1.getMonth()); // 0 ~ 11 주의
console.table(date1.getDate());
console.table(date1.getHours());
console.table(date1.getMinutes());
console.table(date1.getSeconds());
console.table(date1.getMilliseconds());
console.table(date1.getDay()); // 0 일 ~ 6 토
// # table이 뭐지...?

// 퀴즈 : getDay()
// Date 객체 이용해 오늘 요일,
// if, switch 이용해 평일/주말인지

let today = new Date();
let day = today.getDay();
console.log(today);

(day === 0) | (day === 6) ? console.log('주말') : console.log('평일');
