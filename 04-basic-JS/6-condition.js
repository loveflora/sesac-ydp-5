// 조건문

// )) 1. if문
if (5 > 3) {
  console.log('얍!');
}

// let number = Number(prompt('숫자를 입력해주세요!'));
// 1. prompt() 로 사용자로부터 값을 입력받고(문자열)
// 2. Number() 문자열-> 숫자형 형변환
// 아래와 동일한 코드
// let number2 = prompt('숫자 입력해주세요!')
// number2 = Number(number2)

// let age = Number(prompt('나이는?'));

// if (age >= 20) {
//   console.log('성인');
// } else if (age >= 17) {
//   console.log('고등학생');
// } else if (age >= 14) {
//   console.log('중학생');
// } else if (age >= 8) {
//   console.log('초등학생');
// } else if (age >= 0) {
//   console.log('유아');
// }

// )) 2. 중첩 if문
let userId = 'user1';
let userPw = '1234';

// id, pw 검사하는 함수
// function loginUser() {
//   let inputId = prompt('아이디 입력');
//   let inputPw = prompt('비번 입력');

//   if (userId === inputId) {
//     if (userPw === inputPw) {
//       return '로그인 성공';
//     } else {
//       return '비번 오류! 로그인 실패';
//     }
//   } else if (inputId === '') {
//     return '아이디 입력안함';
//   } else {
//     return '아이디 오류 ! 로그인 실패';
//   }
// }

// // loginUser 함수의 반환값을 result 변수에 저장
// const result = loginUser();

// console.log(result);

// )) 3. switch문
// - default 필수는 아니지만, 쓰기 권장
// - 여러 개의 case를 묶을 수도 있음
// break : 조건 빠져나갈 때 사용하는 키워드
let a = 7;
// 검사할 변수 a 입력
switch (a) {
  // case 이거랑 일치하냐
  case 1:
  case 2:
  case 3: // if (a === 3)
    console.log('a가 1~3 이군요');
    break;
  case 4:
    console.log('a가 4이군요');
    break;
  case 5:
    console.log('a가 5이군요');
    break;
  default:
    console.log('a ??');
    break;
}

// 퀴즈. 학점계산기

let score = 100;
switch (parseInt(score / 10)) {
  case 10:
    console.log('A+');
    break;
  case 9:
    console.log('A');
    break;

  case 8:
    console.log('B');
    break;

  case 7:
    console.log('C');
    break;

  case 6:
    console.log('D');
    break;
  case 5:
  case 4:
  case 3:
  case 2:
  case 1:
  case 0:
    console.log('F');
    break;

  default:
    console.log('잘못입력되었습니다');
    break;
}

let now = new Date().getHours();

now >= 12 ? console.log('오후') : console.log('오전');
