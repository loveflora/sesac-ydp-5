const express = require("express");
const app = express();
const PORT = 8000;

// TODO: multer 관련 설정
const multer = require("multer");
const path = require("path"); // 경로에 관한 내장 모듈
const upload = multer({
  dest: "uploads/", // dest: 클라이언트가 업로드한 파일을 저장할 서버측 경로
});

//-- multer 세부설정
const uploadDetail = multer({
  //) storage: 저장할 공간에 대한 정보

  //) done(null, xx) : null은 error를 의미하는 매개변수
  // error가 없으므로 'null'이라고 전달하여 콜백함수를 호출 !
  storage: multer.diskStorage({
    destination(req, file, done) {
      // destination(요청, 파일, 콜백함수)
      done(null, "uploads/"); // 파일을 업로드할 경로 설정
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname); // 파일 '확장자'를 추출
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),

  //) limits: 파일 제한 정보
  limits: { fileSize: 5 * 1024 * 1024 }, // file size 제한 : 5MB (5bytes * 1024* 1024)
});

// TODO: static 미들웨어 설정
// 1. uploads/ 폴더 접근 가능하도록
// 2. static/ 폴더 접근 가능하도록
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));

// TODO: 라우터 정의
// 1. GET /: index.ejs render
app.get("/", (req, res) => {
  console.log(req.query); // {}
  //) res.render(ejs파일경로, 데이터)
  res.render("index");
});

// 2. POST /result: result.ejs render
app.post("/result", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.file); // { req.file }
  // req.file : 파일 업로드 정보
  console.log("------");
  console.log(req.body);
  // req.body : 파일 외의 정보들
  res.render("result", { data: req.body, file: req.file.path });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
