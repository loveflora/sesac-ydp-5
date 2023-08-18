// express 모듈 불러오기
const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

//_ 정적파일 (image, css, js) --> static/
// app.use('/public', express.static(__dirname + '/static'));
//_ '/public' : 실행이 될 주소

app.set('/views', express.static(__dirname + '/views'));

//; 미들웨어 등록
app.use(express.urlencoded({ extended: true })); //) post 요청으로 들어오는 모든 형식의 데이터를 파싱(분해)
app.use(express.json()); //) json 형식으로 데이터를 주고 받음

//; 라우팅(Routing) - 주소 설정
app.get('/', (req, res) => {
  console.log(req.query); // {}
  //) res.render(ejs파일경로, 데이터)
  res.render('dynamic');
});

//] 실습하기
// 실습1
app.get('/practice1', (req, res) => {
  res.render('practice1');
});

app.get('/practice1/axios', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

// 실습2
app.get('/practice2', (req, res) => {
  res.render('practice2');
});

app.get('/practice2/axios', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.post('/practice2/axios', (req, res) => {
  console.log(req.body);
  // res.send(req.body);

  res.send({ id: req.body.id, pw: req.body.pw, msg: '반가워 !' });
});

//] ajax
// ajax로 서버에 get 요청하면
// 서버가 응답 보냄
app.get('/ajax', (req, res) => {
  console.log(req.query);
  // 브라우저에서 확인할 수 있는 코드가 아님 !
  // 브라우저 바깥에서 실행하는 코드 (터미널에서 확인가능 - 서버)
  res.send(req.query);
});

app.post('/ajax', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

//] axios
app.get('/axios', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.post('/axios', (req, res) => {
  console.log(req.body);
  // res.send(req.body);

  res.send({ name: req.body.name, gender: req.body.gender, msg: '반가워 !' });
});

//] fetch
app.get('/fetch', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.post('/fetch', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

//-- send 는 아래와 같이 표현가능
// res.send(req.body)
// res.send("안뇽")
// res.send("<h1>안뇽</h1>");
// res.send(['apple', 'banana']);

//-- json 은 아래만 가능
// res.json(req.body)

//; PORT
app.listen(PORT, () => {
  console.log(`${PORT} is open !`);
});
