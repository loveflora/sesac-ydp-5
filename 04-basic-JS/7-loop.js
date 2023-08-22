// 반복문

// === 1. for문 ===
for (let i = 0; i < 10; i++) {
  // i가 0~9 총10번 반복
  console.log('안녕', i);
}

for (let i = 0; i < 10; i += 2) {
  // i가 0~9 총10번 반복
  console.log('안녕', i);
}
console.log('-------------');

// 1 ~ 5
for (let i = 1; i <= 5; i++) {
  console.log('안녕', i);
}

console.log('-------------');

// 5 ~ 1
for (let i = 5; i >= 1; i--) {
  console.log('안녕', i);
}

console.log('-------------');

// 1 ~ n 까지의 합
let n = 10; // n : 어떤 숫자까지 합을 구할지
let sum = 0; // sum : 합을 저장할 변수
for (let i = 1; i <= n; i++) {
  sum = sum + i;
}

console.log(sum);

console.log('-------------');

const fruits = ['사과', '배', '포도', '망고'];
console.log(fruits.length); // 배열 원소개수 = 배열 크기(길이)

for (let f = 0; f < fruits.length; f++) {
  console.log(fruits[f]);
}

// 1 ~ 20 중에서 짝수일 때의 합
let sum2 = 0;
for (i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    sum2 = sum2 + i;
  }
}

console.log(sum2);

// === 2. while문 ===

let idx = 0;
while (idx < 10) {
  console.log('안녕', idx);
  idx += 1;
}

console.log('-------------');

let idx2 = 0;
while (1) {
  console.log('무한루프', idx2);
  idx2 += 1;

  if (idx2 === 10) {
    break;
  }
}

// continue
let sum3 = 0;
for (let i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    continue;
    // skip 할게요
  }

  sum3 += 1;
}
console.log(sum3);
