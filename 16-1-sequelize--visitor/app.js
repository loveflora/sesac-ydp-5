//=== MVC refactoring ===

const express = require("express");
const app = express();
const PORT = 8000;

//>> [ 16. sequelize ]
const db = require("./models"); // ./models/index.js

//_ 기본
app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
// post 요청으로 들어오는 모든 형식의 데이터를 파싱(분해)
app.use(express.json());

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
