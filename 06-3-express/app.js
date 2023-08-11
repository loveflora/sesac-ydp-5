//=== express ===

// express 모듈을 호출
const express = require('express');

//-- express() : express 모듈이 export하는 최상위 함수
//-- app 객체 : Express() 함수를 호출함으로써 만들어진 express application
const app = express();
const PORT = 8080;

//++ 템플릿 엔진
// EJS 템플릿
// - 템플릿 엔진 : 문법과 설정에 따라 파일을 html 형식으로 변환시키는 모듈

// - ejs (embedded JavaScript) : 자바스크립트가 내장되어 있는 html 파일 (.ejs 확장자)
//; express 템플릿 엔진 종류 등록
app.set('view engine', 'ejs'); // express에서 사용할 템플릿 엔진 종류(ejs) 등록
app.set('views', './views'); // 템플릿 엔진 파일을 저장할 위치 등록

//ll (임시) DB에서 가져온 회원 정보 (id, pw)
const idFromDB = 'banana';
const pwFromDB = '1234qwer';

//; app.get(경로, 해당 경로로 들어왔을 때 실행할 함수)
//-- '/' root 경로 : 서버주소의 포트번호/ (localhost:8080/)
// res.send : 응답을 보냅니다
app.get('/', (req, res) => {
  //-- response.send(x) : x를 클라이언트한테 응답
  //) res.send('<h1>Hello Express!</h1>'));
  // res.render('index');
  // } // index.ejs 파일 렌더링

  res.render('index', { userId: idFromDB, userPw: pwFromDB });
});

// '/sesac' 경로(서버주소: 포트번호/sesac)로 들어왔을 때 메세지 보이기
app.get('/sesac', (req, res) => res.send('<h1>Hello Sesac!</h1>'));

//ll 퀴즈
// 1. /login 경로로 요청이 들어오면 로그인 페이지(ejs)를 응답
app.get('/login', (req, res) => res.render('login'));

// 2. /register 경로로 요청이 들어오면 회원가입 페이지(ejs)를 응답
app.get('/register', (req, res) => res.render('register'));

//; app.listen(서버가 실행할 PORT 지정, 실행할 코드)
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
