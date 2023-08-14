//=== Promise ===
//-- 비동기 함수를 동기처리하기 위해 만든 객체
//-- 미래에 실패/성공에 대한 결과 값을 "약속"한다는 의미
//-- 성공, 실패 분리해서 반환
//)  성공 실패에 대한 결과는 then, catch 메서드로 이어 받아서 처리 가능
//; 성공이든 실패든 무언가의 "최종 결과"
// resolved : 성공
// rejected : 실패

//] 1. promise 생성하는 코드
function promise1(flag) {
  // new Promise 생성
  return new Promise(function (resolve, reject) {
    if (flag) {
      resolve(
        `현재 프로미스 상태는 fulfilled(이행)! then 메서드로 연결. 
이때 flag 값은 ${flag}`
      );
    } else {
      reject(
        `현재 프로미스 상태는 rejected(거절)! catch 메서드로 연결. 
이때 flag 값은 ${flag}`
      );
    }
  });
}

//] 2. promise 사용(소비)하는 코드
// promise1(5 < 3)
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (err) {
//     console.log(err);
//     console.log('error');
//   });

promise1(5 < 3)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
