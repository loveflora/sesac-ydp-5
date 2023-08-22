//=== promise chaining ===
// 함수를 이용해 (4+3)*2-1 = 13을 연산해보자 !
// sub(mul(add(4, 3), 2), 1) : add -> mul -> sub

//] case 1. 콜백함수로 처리한다면 ?
// function add(n1, n2, callback) {
//   setTimeout(function () {
//     const result = n1 + n2; // 7
//     callback(result); // callback(7)
//   }, 1000);
// }

// function mul(n, callback) {
//   setTimeout(function () {
//     const result = n * 2;
//     callback(result);
//   }, 700);
// }

// function sub(n, callback) {
//   setTimeout(function () {
//     const result = n - 1;
//     callback(result); // callback(13)
//   }, 500);
// }

//-- 콜백지옥
// add(4, 3, function (x) {
//   console.log('1: ', x); // 7
//   mul(x, function (y) {
//     console.log('2: ', y); // 14
//     sub(y, function (z) {
//       console.log('3: ', z);
//     });
//   });
// });

//] case 2. 프로미스 체이닝으로 처리한다면 ?
//-- 장점 1.
//) then 메서드 연속 사용 => 순차적인 작업 가능
//) 콜백지옥에서 탈출 !

//-- 장점 2.
//) 예외처리 간편
//) 마지막 catch 구문에서 한 번에 예외처리 가능

function add(n1, n2) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const result = n1 + n2; // 14
      resolve(result); // resolve(14)
    }, 1000);
  });
}

function mul(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const result = n * 2;
      // resolve(result);
      reject(new Error('의도적으로 발생시킨 에러!')); // 에러 메세지 발생
    }, 700);
  });
}

function sub(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const result = n - 1;
      resolve(result);
    }, 500);
  });
}

add(4, 3)
  .then(function (result) {
    console.log('1: ', result); // 7
    return mul(result); // return mul(7)  //) return 꼭 써주기 !
  })
  .then(function (result) {
    console.log('2: ', result); // 14
    return sub(result); // return sub(14)
  })
  .then(function (result) {
    console.log('3: ', result); // 13
  })
  .catch(function (err) {
    console.log(err); // add - mul(reject new Error)
  });
