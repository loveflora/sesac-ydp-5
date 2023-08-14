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
  //) res.render(ejs파일경로, 데이터)
  // - ejs 파일 경로 : views/ 폴더 내부 ejs 파일의 주소
  // - 데이터 : 뷰에 넣어줄 정보
  res.render('index', { title: '폼 전송을 연습해보자 !' });
});

app.listen(PORT, () => {
  console.log(`${PORT} is open !`);
});
