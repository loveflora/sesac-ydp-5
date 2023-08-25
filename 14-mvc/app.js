//=== MVC refactoring ===

const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//.. localhost:PORT로 express 앱이 실행 !
// 외부 index 파일의
// 'const router = express.Router();' 4번줄 코드에서
// router 변수의 값을 indexRouter에 담음
const indexRouter = require('./routes/index');
//.. indexRouter에서는 localhost:PORT/ 기본 경로 설정 !
app.use('/', indexRouter);
//... app.use('/user', indexRouter);
//... 기본경로 변경 --> localhost:PORT/user/

//; 404 처리
// 반드시 맨 마지막 라우트로 선언 (아래 쪽에 써야 함)
app.get('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
