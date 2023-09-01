const express = require("express");
const app = express();
const PORT = 8000;

//>> [ 16. sequelize ]
const db = require("./models");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//] TODO: 라우팅 분리

// localhost:8000
app.get("/", (req, res) => {
  res.render("index");
});

//) localhost:8000/user
// 404 error

//; 기본 주소: localhost:PORT/user <- 주의!!
const userRouter = require("./routes/user");
app.use("/user", userRouter);

//; TODO: 404 에러 처리
// 맨 마지막 라우트로 선언 -> 나머지 코드 무시되기 때문!!
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

  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
