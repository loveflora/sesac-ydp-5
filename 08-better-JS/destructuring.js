//=== 구조분해할당 ===
//] 1. 배열 구조분해 할당

const arr1 = [1, 2, 3, 4, 5];
const arr2 = ['a', 'b', 'c'];

const [one, two, three, four, five] = arr1;

console.log(one, two, three, four, five);

//: 배열 구조분해 할당 시, '순서'가 중요
const [x, y, z, alpha] = arr2;
console.log(x, y, alpha, z);

//_ swap
let num1 = 1;
let num2 = 2;
console.log('swap 전 >', num1, num2);
[num2, num1] = [num1, num2]; // [num2, num1] = [2, 1];
console.log('swap 후 >', num1, num2);

//_ default 값 설정
const list = ['apple', 'orange'];
[f1, f2, f3 = 'default'] = list;
console.log(f1, f2, f3);

//] 2. 객체 구조분해 할당
// 'obj.key --> value'가 아닌, 'key --> value'로
// 배열과 달리, 변수를 선언하는 '순서'가 중요하지 않고
//: key 값과 변수명이 일치해야 함
let obj = {
  key1: 'one',
  key2: 'two',
  key3: 'three',
};

//; 1) 객체 구조분해 사용 유무
// 객체 구조분해 사용하지 않았을 때
console.log(obj.key1, obj.key2, obj.key3);
console.log(obj['key1'], obj['key2'], obj['key3']);

// 객체 구조분해 사용했을 경우
//-- key가 존재하지 않을 때를 대비하여 할당 연산자(=) 이용하면 default 값을 할당
const { key1, key2, key3, star = 'default' } = obj;
console.log(key1, key2, key3, star); // one two three default

//; 2) 콜론(:) 이용하면 새 변수명으로 바꿔 저장할 수 있음 (자주 사용하진 않음)
const { n1, n2, n3 } = obj;
console.log(n1, n2, n3); // undefined undefined undefined

const { key1: a1, key2: a2, key3: a3 } = obj;
console.log(a1, a2, a3); // one two three

//] 퀴즈
function getInfo(lecture) {
  // TODO: 구조 분해 할당을 사용하여 값 추출
  const { name, part, leader } = lecture;

  // TODO: 출력 문장 생성
  const output = `${name} 강의는 ${part} 개발을 공부합니다. 수업의 리더는 ${leader} 입니다.`;

  return output;
}

const lectureInfo = {
  name: 'SESAC x CODINGOn',
  part: 'WEB',
  leader: 'Sean',
};

const result = getInfo(lectureInfo);
console.log(result); // SESAC x CODINGOn 강의는 WEB 개발을 공부합니다. 수업의 리더는 Sean 입니다.

//=== spread 연산자 ===
//-- 반복가능한 객체에 대해 단일 요소로 압축을 해제하는 역할 (객체 값을 펼침)
// 호출'하는' 함수의 파라미터에 사용
//] 1. spread in array
const a = [1, 2, 3];
const b = [4, 5];

const spread = [...a, ...b]; // [1, 2, 3, 4, 5]
console.log(spread);

//] 2. spread in string
const c = [...'HELLO']; // ['H', 'E', 'L', 'L', 'O']
const d = 'WELCOME'.split(''); // ['W', 'E', 'L', 'O', 'M', 'E']
console.log(c);
console.log(d);

//] 3. spread in object
const chip = {
  base: 'chip',
  company: 'lotte',
};

const potatoChip = {
  //   base: 'chip',
  //   company: 'lotte',
  ...chip,
  flavor: 'potato',
};

const sweetChip = {
  ...chip,
  flavor: 'sweet potato',
};

console.log(potatoChip);
console.log(sweetChip);

const word1 = 'abc';
const word2 = 'xyz';

console.log([...word1, ...word2]);
// word1.concat(word2); // 'abcxyz'
// word1 + word2; // 'abcxyz'

//=== rest 파라미터 ===
// 나머지
// 호출'받는' 함수의 파라미터에 사용
// 호출하는 함수의 파라미터 순서에 맞춰 값 설정 후 남은 파라미터 값을 배열로 설정
//; 1. 함수에서 rest
const values = [10, 20, 30, 40, 50, 60];

//. ...rest는 마지막에 있어야 함
function get(a, b, ...rest) {
  // 호출 '받는' : rest (모으는, 먼저 할당 후 끌어모음)
  console.log('a >>', a); // 10
  console.log('b >>', b); // 20
  console.log('rest >>', rest); // [30, 40, 50, 60]
}

get(...values); // 호출 '하는' : spread (펼침)

//; 2. 객체에서 rest
const icecream = {
  company: 'lotte',
  flavor: 'choco',
  price: 1000,
};

const { flavor, ...rest } = icecream;

console.log(flavor); // choco
console.log(rest); // {company: 'lotte', price: 1000}

//; 3. 배열에서 rest
const num = [1, 2, 3, 4, 5, 6, 7, 8];
const [one1, two1, ...rest2] = num;
console.log(one1); // 1
console.log(two1); // 2
console.log(rest2); // [3, 4, 5, 6, 7, 8]
