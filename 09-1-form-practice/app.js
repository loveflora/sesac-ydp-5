const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('/views', 'views');
// 미들웨어(middleware)
// - 요청(req)과 응답(res)의 중간에서 작업하는 코드
// app.use()

// req.body 객체를 해석할 수 있도록 body-parser 미들웨어 등록
app.use(express.urlencoded({ extended: true })); // post 요청으로 들어오는 모든 형식의 데이터를 파싱
app.use(express.json()); // json 형식으로 데이터를 주고 받음

//-- 라우팅(Routing)
// 주소를 설정하는 행위
// - [ 요청 방식 (get, post, ...) + 요청 경로 ] 세트가 겹치면 안됨 !
//   - GET /hello, POST /hello --> 가능
//   - POST /bye, POST /bye --> 불가 (겹치면 안됨!, 유일한 하나의 라우터를 찾을 수 없음, 하나만 응답해야 함)

//-- 라우트(Route)
// 주소

//; GET
// '/' 경로로 요청 시 main 페이지 보여주기
//-- 라우터 1 (메인)
app.get('/home', (req, res) => {
  res.render('main');
});

// app.get('/', (req, res) => {
//   res.render('hello');
// });
//) 위아래 코드 (GET /main, GET /hello) 둘 다 동시에 쓸 수 없음

// 브라우저에서 url이 변경되었을 때 일어나는 일
// 1. 브라우저 창에서 url이 http://localhost:8001/prac1 바뀌었다?
// 2. GET /prac1 요청이 날라간 것 (클라 -> 서버)
// 3. 서버는 응답을 하기위해 GET /prac1 라우터를 찾습니다. (app.js)
// 4. GET /prac1 라우터의 응답을 함 (practice1.ejs를 브라우저에게 응답함)

//-- 라우터 2
app.get('/practice1', (req, res) => {
  //) '/practice1' : 요청주소
  res.render('practice1');
  //) '/practice1' : 파일이름
});

//-- 라우터 3
app.get('/practice2', (req, res) => {
  res.render('practice2');
});

app.get('/result1', (req, res) => {
  console.log(req.query); // get : 쿼리 문자열 담겨있으니까 !
  res.render('result', { user: req.query });
  // res.render(view이름, 데이터)
});

app.post('/result2', (req, res) => {
  console.log(req.body); // post
  res.render('result', { user: req.body });
});

app.listen(PORT, () => {
  console.log(`${PORT} is opening!`);
});
