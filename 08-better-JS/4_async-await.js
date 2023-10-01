//=== async, await ===
//; async
// 함수 앞에 붙이는 키워드
//-- 함수만 보고도 비동기 함수임을 유추하고자 함
//@ async가 붙은 함수는 항상 Promise를 반환합니다.

//; await
// 실행 다 될 때까지 기다려주세요 (순서 보장)
//-- 성공/실패로 프로미스 객체 실행이 완료되기를 기다림
//-- await 뒤에는 프로미스가 오게 됨
//@ async가 있는 함수에서만 await 키워드가 사용 가능합니다.

//; async-await 세트

//; error 처리는 'try-catch' 구문으로 !

//] 출력
async function f1() {
  //: f1 함수는 async 키워드가 붙어 있으므로, promise를 반환
  return 1;
}

async function f2() {
  return Promise.resolve(1);
}

// f1 함수는 async 키워드가 붙어 있으므로, promise를 반환
console.log("1 >>", f1()); // 1 >> Promise { <fulfilled>: 1 }

// 시간이 걸려서 나중에 출력된거임
f1().then(function (result) {
  // async 키워드가 붙은 f1 함수에서 값만 반환
  console.log("2 >>", result); // 1
});

console.log("3 >>", f2()); // Promise { <pending> }

f2().then(function (result) {
  console.log("4 >>", result); // 1
});

// 1 >> Promise { <fulfilled>: 1 }
// 3 >> Promise { <pending> }
// 2 >> 1
// 4 >> 1

//] 1초 뒤에 과일 배열을 출력하는 코드
function fetchFruits() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const fruits = ["사과", "레몬", "수박"];
      resolve(fruits); // 성공 값
      //   reject(new Error('알 수 없는 에러 발생!! 아이템을 가져올 수 없음!!'));
    }, 1000);
  });
}

//; 1) promise then() 메서드 사용
fetchFruits()
  .then(function (fruits) {
    console.log(fruits);
  })
  // 에러 처리
  .catch(function (err) {
    console.log(err);
  });

//; 2) async-await 키워드 사용 시
// 에러 처리는 'try-catch'로 !
async function printItems() {
  try {
    const fruits = await fetchFruits();
    console.log(fruits);
  } catch (err) {
    console.log(err);
  }
}
printItems();

//] 예문
function goMart() {
  console.log("마트에 가서 어떤 음료를 살지 고민한다.");
}

function pickDrink() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("고민 끝 !");
      product = "제로 콜라";
      price = 2000;
      resolve(); // 성공에 대한 값이 없이, 그냥 "성공"을 의미
    }, 3000);
  });
}

function pay() {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

async function exec() {
  goMart();
  await pickDrink();
  pay();
}

//-- promise
// pickDrink().then(pay).catch(nopay);

let product;
let price;
exec();
