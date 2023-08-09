//=== 구조분해할당 : 구조를 분해해서 '할당(=)'하겠다 ===
//; 1. '객체 {}'를 구조분해
const cookie = {
  choco: '초코맛 쿠기',
  vanilla: '바닐라맛 쿠키',
  orange: '오렌지맛 쿠키',
};

console.log(cookie.choco);
console.log(cookie.vanilla);
console.log(cookie.orange);

//-- 객체 구조분해
const { choco, vanilla, orange } = cookie;
//) 위 코드가 아래와 동일
// const { choco, vanilla, orange } = {
//     choco: '초코맛 쿠기',
//     vanilla: '바닐라맛 쿠키',
//     orange: '오렌지맛 쿠키',
//   };

//) 순서 바뀌어도 상관없음. key 매칭만 잘되면 됨.
// const { vanilla, choco, orange } = cookie;
console.log(choco);
console.log(vanilla);
console.log(orange);

//; 2. '배열 []'를 구조분해
