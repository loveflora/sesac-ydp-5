//=== cookie ===
// 개발자 도구 - application 확인

const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

//; 미들웨어 등록 : 중간 역할
// 요청 들어오면 (?) 서버를 싹 세팅
//-- 일반 쿠키
// app.use(cookieParser(cookieParser));

//-- 암호화 쿠키
const COOKIE_SECRET_KEY = 'This is my secret key';
app.use(cookieParser(COOKIE_SECRET_KEY));

const myCookieConf = {
  httpOnly: true, // 웹 서버를 통해서만 쿠키 접근 가능 (FE에서 document.cookie로 접근하는 것을 차단)
  maxAge: 20 * 1000, // 쿠키 수명 (단위 ms) : 20초
  // 60 * 1000 = 1분
  //) 쿠키 설정하기 - 10초 뒤에 홈페이지에서 새로고침하면 쿠키에서 사라짐

  // expires: 만료 날짜를 GMT시간설정 (특정 기간: 며칠동안, 몇년동안)
  // path: 해당 디렉토리와 하위 디렉토리에서만 경로가 활성화되고 웹 브라우저는 해당하는 쿠키만 웹 서버에 전송
  // 즉, 쿠키가 전송될 url특정 가능(기본값: /)
  // domain: 쿠키가 전송될 도메인을 특정 가능(기본값: 현재도메인)
  // secure: 웹브라우저와 웹서버가 https로 통신하는 경우만 쿠키를 서버에 전송
  // signed: 쿠키의 암호화 결정 (req.signedCookies객체에 들어있음)
  signed: true,
};

app.get('/', (req, res) => {
  res.render('cookie');
});

app.get('/setCookie', (req, res) => {
  // res.cookie(쿠키 이름, 쿠키 값, 쿠키 옵션)
  res.cookie('myCookie', 'myValue', myCookieConf); // 쿠키를 헤더에 설정 (응답 X)
  //\ res.cookie는 응답하는게 아니므로 'res.' 두 번 써도 됨
  res.send('Cookie 설정 완료!');
});

//; 쿠키 가져오기
app.get('/getCookie', (req, res) => {
  //) res.render(req.cookies);
  // 클라이언트가 가지고 있는 쿠키를 확인하기 위함

  //-- 일반 쿠키
  // res.send(req.cookies);

  //-- 암호화 쿠키
  res.send(req.signedCookies);
});

app.get('/clearCookie', (req, res) => {
  res.clearCookie('myCookie', 'myValue', myCookieConf);
  res.send('Cookie 삭제 완료!');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
