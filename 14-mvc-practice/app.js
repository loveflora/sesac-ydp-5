// express 모듈 불러오기
const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

//_ 정적파일 (image, css, js) --> static/
// app.use('/public', express.static(__dirname + '/static'));
//_ '/public' : 실행이 될 주소

app.set("/views", express.static(__dirname + "/views"));

//; 미들웨어 등록
app.use(express.urlencoded({ extended: true })); //) post 요청으로 들어오는 모든 형식의 데이터를 파싱(분해)
app.use(express.json()); //) json 형식으로 데이터를 주고 받음

const indexRouter = require("./routes/index");
//.. indexRouter에서는 localhost:PORT/ 기본 경로 설정 !
app.use("/", indexRouter);

app.get("*", (req, res) => {
  res.render("404");
});

//; PORT
app.listen(PORT, () => {
  console.log(`${PORT} is open !`);
});
