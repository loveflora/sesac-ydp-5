console.log("connected!");

// 변수 선언: 변수 정의
// 변수 할당: = 연산자를 이용해 값을 넣음
// 초기화 : 변수에 처음 할당되는 순간

// ### var
// - 선언 단계와 초기화 할당 단계가 동시에 진행이 되며, 초기화에는 undefined 값이 들어간다.
// - 중복 선언이 가능하며, 예기치 못한 값을 반환할 수 있음
// - 선언 이전에 참조하면 언제나 undefined를 반환한다.

// ### const
// - 재선언이 불가능하고, 재할당이 불가능하다.
// - 초반에 선언을 할 때 반드시 **초기화**를 동시에 진행해야 한다.

// ### let
// - let 키워드로는 변수 중복 선언이 불가능하지만, 재할당이 가능하다.

// 변수 선언 키워드 1. var
var a; // 변수 선언
console.log(a); // undefined : 값 할당하지 않음
a = 2;
console.log(a); // 변수 값 출력
var a2 = 4; // 변수 선언 & 할당
console.log(a2);

// var 변수의 이상한 점
// --> 변수 선언하기 전에 값을 할당
aa = 123;

// let
let b; // 변수 선언
// console.log(b2); // ? 변수 선언만 하고 값 할당하지 않았으므로, 초기값(undefined) 출력

let b2 = 77; // 변수 선언 & 할당
console.log(b2);
// let b2 = 78; // error: let 키워드 중복 선언 불가능
b2 = 78; // 변수 값 재할당
console.log(b2);

// 변수 선언 키워드 3. const
// -> 변수 선언과 할당이 동시에!!! (반드시)
// -> 변하지 않는 값을 변수에 저장할 때 사용 (상수)
// const c; // error: const 키워드는 선언과 할당 반드시 동시에!!
const c = 3;
console.log(c);
// c = 33; // error: const 변수는 재할당 불가능!

// 변수 이름 규칙 (=> 식별자 규칙)
// 식별자: 이름을 붙일 때 사용하는 단어 (변수명, 함수명, 클래스명, ....)
// - 키워드(예약어) 사용 불가능
//      - 키워드란? 특별한 역할을 이미 하고 있는 단어
//      - ex. let, var, const, void, return, for, while, class, if, else, ....
// - 숫자 시작 x
// - 특수문자: _, $ 만 허용
// - 공백 문자(space bar) x

// (관례) 식별자에 단어 두개 이상 작성하고 싶은경우?
// camelCase -> js 관례
// ex. redApple, isWater
// snake_case
// ex. red_apple, is_water

////////////////////////////////////////////////////////////////////
// 자료형 (data types)
// : 데이터(변수)의 종류가 무엇인가?
// - Primitive(원시 타입): string, number, boolean, undefined, null, ...
// - Object(객체 타입): Primitive 타입이 아닌 나머지

// 1. string (문자열)
// : 텍스트 정보, 따옴표 감싸야 함
// : 숫자, 특수문자도 따옴표 안에 포함? --> 문자열
let text = "안녕하세요!";
let text2 = "하이!";
let gender = "남자";
console.log(text);
console.log(text2);
console.log(text + text2);
console.log(text, text2, "ㅋㅋ");

console.log(text + "저는 Sean 입니다. 저의 성별은" + gender + "입니다!");
// 템플릿 리터럴 (es6) 백틱(`)와 달러, 중괄호(${}) 조합으로 사용
// : 문자열 내에서 변수와, 상수를 간결히 표현
// 훨씬 간결해짐
console.log(`${text} 저는 Sean 입니다. 저의 성별은 ${gender}입니다!`);

// 2. number (숫자형)
// 정수, 실수
// 연산이 가능 (+, -, /(나누기), *(곱하기))
let num = 100;
let num2 = 0.12;

console.log(num, num2);
console.log(num + 1);
console.log(num - 1);
console.log(num * 2);
console.log(num / 2);

// 3. boolean (불리언)
// true, false
let isWater = true;
let hasApple = false;
console.log(isWater, hasApple);

// 4. null (빈 값)
// "값이 없음"을 의도적으로 명시
let temp = null;
console.log(temp);
temp = "Hello~";
console.log(temp);

// 5. undefined
// 값도 없고, 타입도 지정되지 않은 상태
let x; // 변수 선언만 했을 때 초기 값으로 undefined 할당
console.log(x); // undefined

// [QUIZ] 변수
// Q1. 코드 실행시 q1 변수는 어떤 값이 될까?
let q1 = 3;
q1 - 2;
// 3

// Q2. 다음 코드 실행시 q2 변수는 어떤 값이 될까?
let q2 = 10;
q2 = q2 + 5; // 15
q2 = q2 - 2; // 13
console.log(q2);

// Q3. 다음 코드 실행시 q3 변수는 어떤 값이 될까?
const q3 = 1;
// q3 = q3 + 1; // error
console.log(q3 + 1);

// 6. 배열
// 배열 크기(길이) : 원소 개수와 동일
const fruits = ["orange", "pineapple", "grape", "apple"];
console.log(fruits);
console.log(fruits[0]); // fruits 배열의 위치가 0인 원소 출력

// js에서는 배열 원소의 자료형이 달라도 됨!
const data = [1, "allie", false, null, undefined];
console.log(data);

// Array 안에 Array 들어갈 수 있음 (중첩 가능) => 2차원 배열
const korean = [
  ["가", "나", "다"],
  ["라", "마", "바"],
  ["사", "아", "자"],
];

console.log(korean);
console.log(korean[0]);
console.log(korean[1]);
console.log(korean[2]);

console.log(korean[0][2]);

// 가자 출력
console.log(korean[0][0] + korean[2][2]);

// 퀴즈 3차원 배열에서 숫자 8 출력
const nums = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, 12],
  ],
];

console.log(nums[1][0][1]);

// 7. object (key: value)
const cat = {
  name: "나비",
  age: 1,
  isCute: true,
  mew: function () {
    return "냐옹";
  },
};
console.log(cat); // object

// object의 속성(key)에 접근하는 방법
// (1) 점 표기법
console.log(cat.name);
console.log(cat.age);
console.log(cat.mew());
// (2) 대괄호 표기법
console.log(cat["name"]);
// key가 변수에 저장되어 있을 때 주로 사용
const tempVal = "name";
console.log(cat[tempVal]); // && cat.name과 동일

const me = {
  name: "세화",
  isLeader: false,
  job: "developer",
  interest: ["music", "movie", "exercise"],
};

console.log(me);

console.log(typeof null);
// JS 언어 자체의 오류

// 형 변환
// let mathScore = prompt('수학점수 입력');
// let engScore = prompt('영어점수 입력');
// let avg = (mathScore + engScore) / 2;
// console.log(typeof mathScore);
// console.log(typeof engScore);
// console.log(`수학 영어 평균점수는 ${avg}점 입니다`);
// prompt로 입력받은 값은 '문자'로 저장됨

// 1. String()
let str1 = true;
console.log(typeof String(null));
console.log(str1.toString(), typeof str1.toString());

// 2. Number()
let n1 = true;
let n3 = "123.9";

console.log(Number(n1), typeof Number(n1));
console.log(parseInt(n3, 10)); // n3 값을 10진수의 정수(int)로 바꾸겠다 --> 123
console.log(parseFloat(n3)); // n3 값을 실수로 바꾸겠다 --> 123.9

let mathScore = "77";
let engScore = "88";
let avgScore = (Number(mathScore) + Number(engScore)) / 2;

console.log(avgScore);

// +) null, undefined를 숫자로 바꾼다면?
console.log(Number(undefined), typeof Number(undefined)); // NaN, number
console.log(Number(null), typeof Number(null)); // 0, number
