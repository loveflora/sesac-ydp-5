//=== Promise ===
//-- 비동기 함수를 동기처리하기 위해 만든 객체
//-- 미래에 실패/성공에 대한 결과 값을 "약속"한다는 의미
//-- 성공, 실패 분리해서 반환
//)  성공 실패에 대한 결과는 then, catch 메서드로 이어 받아서 처리 가능
//; 성공이든 실패든 무언가의 "최종 결과"
// resolved : 성공
// rejected : 실패

//] 1. promise 생성하는 코드
// function promise1(flag) {
//   // new Promise 생성
//   return new Promise(function (resolve, reject) {
//     if (flag) {
//       resolve(
//         `현재 프로미스 상태는 fulfilled(이행)! then 메서드로 연결.
// 이때 flag 값은 ${flag}`
//       );
//     } else {
//       reject(
//         `현재 프로미스 상태는 rejected(거절)! catch 메서드로 연결.
// 이때 flag 값은 ${flag}`
//       );
//     }
//   });
// }

//] 2. promise 사용(소비)하는 코드
// promise1(5 < 3)
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (err) {
//     console.log(err);
//     console.log('error');
//   });

// 화살표 함수로도 가능 !
// promise1(5 < 3)
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

//] 예시
// "콜백함수" 이용해 동기처리한 것을 "promise" 이용해 동기처리
function goMart() {
  console.log('마트에 가서 어떤 음료를 살지 고민한다.');
}

function pickDrink() {
  // Promise 사용하는 객체
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('고민 끝 !');
      product = '제로 콜라';
      price = 4000; // 2000 4000
      // resolve(); // 성공에 대한 값이 없이, 그냥 "성공"을 의미

      if (price <= 2000) {
        resolve();
      } else {
        reject();
      }
    }, 3000);
  });
}

function pay() {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

function nopay() {
  console.log('금액 부족');
}

let product;
let price;
goMart();
pickDrink().then(pay).catch(nopay);

//\ 아래 1), 2) 동일한 함수
//1)
//   pickDrink().then(pay);

// 2)
//   pickDrink().then(function() {
//      pay();
//   })
