//=== MVC refactoring ===

const express = require("express");
const app = express();
const PORT = 8000;

//>> [ 16. sequelize ]
const db = require("./models"); // ./models/index.js

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//.. localhost:PORT로 express 앱이 실행 !
// 외부 index 파일의
// 'const router = express.Router();' 4번줄 코드에서
// router 변수의 값을 indexRouter에 담음

//; 라우터 분리
const indexRouter = require("./routes"); // index 생략 가능 !
// indexRouter에서는 localhost:PORT/ 기본 경로 설정 !
// const indexRouter = require('./routes/index');

app.use("/", indexRouter);
// app.use('/user', indexRouter);
// 기본경로 변경 --> localhost:PORT/user/

//; 404 처리
// 반드시 맨 마지막 라우트로 선언 (아래 쪽에 써야 함)
app.get("*", (req, res) => {
  res.render("404");
});

//>> [ 16. sequelize ]
db.sequelize.sync({ force: false }).then(() => {
  //-- force: false;
  // 실제 DB에 테이블이 존재하지 않으면,
  // 모델에 정의한대로 생성
  //-- force: true;
  // DB에 테이블 있어도 무조건 생성

  app.listen(PORT, function () {
    console.log(`http://localhost:${PORT}`);
  });
});
