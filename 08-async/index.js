//=== 비동기 ===

//] setTimeout()
console.log(1);
setTimeout(function () {
  console.log(2);
}, 2000);

console.log(3);

//] 예시
// function goMart() {
//   console.log('마트에 가서 어떤 음료를 살지 고민한다.');
// }

// function pickDrink() {
//   // 3초 고민 (3초 기다린 후 코드 실행)
//   setTimeout(function () {
//     console.log('고민 끝 !');
//     product = '제로 콜라';
//     price = 2000;
//   }, 3000);
// }

// function pay(product, price) {
//   console.log(`상품명: ${product}, 가격: ${price}`);
// }

// let product;
// let price;
// goMart();
// pickDrink();
// pay(); // 상품명: undefined, 가격: undefined

//] 1.콜백함수를 이용한 비동기 처리
//-- 콜백함수로 순서 보장
//\ but, 콜백지옥 때문에 콜백함수로 비동기 처리할 일은 거의 없음

function goMart() {
  console.log('마트에 가서 어떤 음료를 살지 고민한다.');
}

function pickDrink(callback) {
  //) callback 매개변수 : 콜백함수를 의미
  // 3초 고민 (3초 기다린 후 코드 실행)
  setTimeout(function () {
    console.log('고민 끝 !');
    product = '제로 콜라';
    price = 2000;
    callback(product, price); //) 매개변수로 넘긴 콜백함수 실행
  }, 3000);
}

let product;
let price;
goMart();
// pickDrink(function pay(product, price) {  //\ pay 함수명 있으나 없으나 동일
pickDrink(function (product, price) {
  console.log(`상품명: ${product}, 가격: ${price}`);
});
