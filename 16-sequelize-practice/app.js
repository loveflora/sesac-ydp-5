const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
// app.use('/views', express.static(__dirname + '/views'));
// # 의미...?
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//] TODO: 라우팅 분리

// localhost:8000
app.get('/', (req, res) => {
  res.render('index');
});

//; 기본 주소: localhost:PORT/user <- 주의!!
const userRouter = require('./routes/user');
app.use('/user', userRouter);

//) localhost:8000
//) localhost:8000/user
// 둘 다 메인페이지 뜸

//; TODO: 404 에러 처리
// 맨 마지막 라우트로 선언 -> 나머지 코드 무시되기 때문!!
app.get('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
