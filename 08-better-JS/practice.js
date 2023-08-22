//] 실습 1
function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function back() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('back');
      resolve('back');
    }, 1000);
  });
}

function hell() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('callback hell');
    }, 1000);
  });
}

//-- 1) 콜백함수
// call('kim', function (name) {
//   console.log(name + '반가워');
//   back(function (txt) {
//     console.log(txt + '을 실행했구나');
//     hell(function (message) {
//       console.log('여기는' + message);
//     });
//   });
// });

//-- 2) promise-chaining
// call('kim')
//   .then(function (result) {
//     console.log(result + '반가워');
//     return back(result);
//   })
//   .then(function (txt) {
//     console.log(txt + '을 실행했구나');
//     return hell(txt);
//   })
//   .then(function (message) {
//     console.log('여기는' + message);
//   });

//-- 3) async-await
async function exec() {
  let user = await call('kim');
  console.log(user + '반가워');
  let txt = await back();
  console.log(txt + '을 실행했구나');
  let message = await hell();
  console.log('여기는' + message);
}

exec();
