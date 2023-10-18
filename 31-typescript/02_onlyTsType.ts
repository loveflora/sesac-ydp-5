//=== only TS type ===

//] 1. Tuple
// let drink: [string, string];
// drink = ['사이다', '롯데'];
// console.log(drink); // ['사이다', '롯데']

let drink: [string, string] = ['사이다', '롯데'];
drink[0] = 'cider';
drink[1] = 'lotte';
console.log(drink); // ['사이다', '롯데']

//) tuple의 한계
// drink.push('추가');   // push 사용하지 말 것 : tuple 쓰는 의미가 없어짐
// console.log(drink);  // [ 'cider', 'lotte', '추가' ]

//-- readonly : 요소 타입 순서와 길이 고정
let drink2: readonly [string, number] = ['사이다', 2200];
// drink2.push(drink);  // error 뜸 (push 방지 가능)

//-- type 별칭
type productInfo = [number, string, number]; // type 별칭으로 type 선언
// let product1: [number, string, number] = [1, '로지텍 MX maseter3', 130000];
// let product2: [number, string, number] = [2, '로지텍 K380', 50000];
let product1: productInfo = [1, '로지텍 MX maseter3', 130000];
let product2: productInfo = [2, '로지텍 K380', 50000];

//] 2. Enum
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}

enum Cafe {
  americano = '아메리카노',
  latte = '카페라떼',
}

console.log(Auth.admin); // 0
console.log(Cafe.latte); // 카페라떼

enum Cake {
  choco,
  vanilla,
  kiwi = '키위 케이크',
}

console.log(Cake.choco); // 0
// 값을 넣지 않고 선언한다면 숫자형 Enum
// 가장 위의 요소부터 0으로 할당돼서 1씩 늘어남
console.log(Cake.kiwi); // 키위 케이크

//] 3. any
//-- 명시적으로 any 타입 사용
let val: any;
val = '하이';
val = true;
val = 100;
val = { name: 'sesac' };

//-- 암묵적
let val2;
val2 = false;
val2 = '바이';

const olimpic_newgame: readonly [object, boolean] = [
  { name: '쇼트 트랙', type: '혼성 계주' },
  true,
];

// olympic_newGame[1] = false;  // error

// arrA와 arrB는 같은 결과가 출력된다.
// 차이는 ?
let arrA: any[] = [1, true, 'string'];
let arrB = [1, true, 'string'];
