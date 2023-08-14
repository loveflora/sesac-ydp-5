//=== BE ===
// 코드 변경 시 node 서버 재실행

// express 모듈 불러오기
const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('/views', 'views');
//; 미들웨어 middleware
//-- 요청(req)과 응답(res) 중간에서 작업하는 코드
// app.use() 사용해서 등록

//_ req.body 객체를 해석할 수 있도록 body-parser 미들웨어 등록
app.use(express.urlencoded({ extended: true })); //) post 요청으로 들어오는 모든 형식의 데이터를 파싱(분해)
app.use(express.json()); //) json 형식으로 데이터를 주고 받음
// json : object와 유사하지만, key에 큰 따옴표 존재

//; 라우팅(Routing) - 주소 설정
//-- GET '/' ==> index.ejs를 보여줌
app.get('/', (req, res) => {
  console.log(req.query); // {}
  //) res.render(ejs파일경로, 데이터)
  // - ejs 파일 경로 : views/ 폴더 내부 ejs 파일의 주소
  // - 데이터 : 뷰에 넣어줄 정보
  res.render('index', { title: '폼 전송을 연습해보자 !' });
});

//] GET '/getForm' => 임의의 메세지 전송
// get 방식은 클라이언트에서 보낸 데이터가 req.query에 저장
app.get('/getForm', (req, res) => {
  console.log(req.query); // { id: 'apple', pw: '1234' }
  //   res.send('get 요청 성공!');
  res.render('result', { title: 'GET 요청', userInfo: req.query });
  //   res.render('result', { title: 'GET 요청', userInfo:  { id: 'apple', pw: '1234' } });
});

app.get('/signup', (req, res) => {
  res.render('signup', { title: 'Sign Up', userInfo: req.query });
  console.log(req.query);
});

//] POST '/postForm' => 임의의 메세지 전송
// post 방식은 클라이언트에서 보낸 데이터가 req.body에 저장
app.listen(PORT, () => {
  console.log(`${PORT} is open !`);
});

app.post('/postForm', (req, res) => {
  // 미들웨어 없으면 req.body 알 수 없음
  console.log(req.body); // { id: 'apple', pw: '1234' }
  // # send랑 render 함께 못쓰는지...?
  //_ res는 한 번만 써야 함 !
  //,, 1) response 방법 1
  //   res.send('post 요청 성공 !');
  //,, 2) response 방법 2
  res.render('result', { title: 'POST 요청', userInfo: req.body });
});

// 새로고침은 index 메인페이지에서 할 것 !
