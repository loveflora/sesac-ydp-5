// express 모듈 불러오기
const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('/views', 'views');

//; 미들웨어 등록
app.use(express.urlencoded({ extended: true })); //) post 요청으로 들어오는 모든 형식의 데이터를 파싱(분해)
app.use(express.json()); //) json 형식으로 데이터를 주고 받음
// json : object와 유사하지만, key에 큰 따옴표 존재

//; 라우팅(Routing) - 주소 설정
app.get('/', (req, res) => {
  console.log(req.query); // {}
  //) res.render(ejs파일경로, 데이터)
  res.render('dynamic');
});

app.listen(PORT, () => {
  console.log(`${PORT} is open !`);
});
