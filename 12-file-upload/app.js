// express 모듈 불러오기
const express = require("express");
const app = express();
const PORT = 8000;

//; multer(파일 업로드 위해 사용되는 미들웨어)
//-- 불러오기
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

app.set("view engine", "ejs");
app.set("/views", express.static(__dirname + "/views"));

//; 미들웨어 등록
app.use(express.urlencoded({ extended: true })); //) post 요청으로 들어오는 모든 형식의 데이터를 파싱(분해)
app.use(express.json()); //) json 형식으로 데이터를 주고 받음

//; 라우팅(Routing) - 주소 설정
app.get("/", (req, res) => {
  console.log(req.query); // {}
  //) res.render(ejs파일경로, 데이터)
  res.render("index");
});

//] 1. single() : 하나의 파일을 업로드
// upload.single('userfile')
// 클라이언트의 요청이 들어오면 multer 설정(upload 변수)에 따라 파일을 업로드 한 후, req.file 객체 생성
// single() 인자는 input 태그의 name 속성과 일치시켜야 함
// app.post("/upload", upload.single("userfile"), (req, res) => {
app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.file); // { req.file }
  // req.file : 파일 업로드 정보
  console.log("------");
  console.log(req.body);
  // req.body : 파일 외의 정보들
  res.send("파일 업로드 완료!");
});

//) req.file 객체 자세히 보기 !
// {
//   fieldname: 'userfile',  //< 폼에 정의한 name 값
//   originalname: 'pexels-sebastian-voortman-189349.jpg', //< 원본 파일명
//   encoding: '7bit',  //< 파일 인코딩 타입
//   mimetype: 'image/jpeg',  //< 파일 타입
//   destination: 'uploads/',  //< 파일 저장 경로
//   filename: '65f66f180792efbe7bc21ae3cf30fb74',  //< destination 저장된 파일명
//   path: 'uploads/65f66f180792efbe7bc21ae3cf30fb74',  //< 업로드된 파일 전체 경로
//   size: 1492104  //< 파일 크기
// }
// ------
// [Object: null prototype] { userfile: '' }

//] 2. array() : 여러 파일을 한 번에 업로드
// uploadDetail.array('userfiles'): 클라이언트 요청이 들어오면
// multer 설정(uploadDetail 변수)에 따라 파일을 업로드한 후, req.files 객체 생성
app.post("/upload/array", uploadDetail.array("userfiles"), (req, res) => {
  console.log(req.files); // [{ 파일1_정보 }, { 파일2_정보 }, ... ] : 배열 형태로 각 파일 정보를 출력
  // req.file : 파일 업로드 정보
  console.log("------");
  console.log(req.body);
  // req.body : 파일 외의 정보들

  res.send("하나의 인풋에 여러 파일 업로드 완료!");
});

//] 3. fields() : 여러 파일을 각각 인풋에 업로드
// req.files에서 파일 정보를 확인
// fields() 매개 변수로 input 태그의 name을 각각 넣기
app.post(
  "/upload/fields",
  uploadDetail.fields([{ name: "userfile1" }, { name: "userfile2" }]),
  (req, res) => {
    console.log(req.files); // { userfile1: [ {파일_정보} ], userfile2: [ {파일_정보} ]} 객체 안에 배열 형태로 각 파일 정보
    console.log(req.body);
    res.send("하나의 인풋에 여러 파일 업로드 완료!");
  },
);

//; PORT
app.listen(PORT, () => {
  console.log(`${PORT} is open !`);
});
