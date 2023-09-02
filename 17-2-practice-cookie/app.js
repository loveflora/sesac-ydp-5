const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//; TODO: cookie parser 미들웨어 등록
app.use(cookieParser(cookieParser));

// 쿠키 옵션
const myCookieConf = {
  httpOnly: true, // 웹 서버를 통해서만 쿠키 접근 가능 (FE에서 document.cookie로 접근하는 것을 차단)
  // httpOnly: false ---> document.cookie

  //-- 오늘 그만보기
  // 쿠키 수명 (단위 ms)
  // 10초
  maxAge: 10 * 1000,
  // 24시간
  // maxAge: 24 * 60 * 60 * 1000

  // expires: 만료 날짜를 GMT시간설정 (특정 기간: 며칠동안, 몇년동안)
  // path: 해당 디렉토리와 하위 디렉토리에서만 경로가 활성화되고 웹 브라우저는 해당하는 쿠키만 웹 서버에 전송
  // 즉, 쿠키가 전송될 url특정 가능(기본값: /)
  // domain: 쿠키가 전송될 도메인을 특정 가능(기본값: 현재도메인)
  // secure: 웹브라우저와 웹서버가 https로 통신하는 경우만 쿠키를 서버에 전송
  // signed: 쿠키의 암호화 결정 (req.signedCookies객체에 들어있음)
  // signed: true,
};

app.get("/", (req, res) => {
  // *다음과 같이 기능 구현하였는데, 굳이 이렇게 하지 않아도 됩니다.
  // 모달 체크박스 체크시 -> GET / ; undefined
  // 모달 체크박스 미체크시 -> GET / ; hide
  console.log("req.cookies.popup >> ", req.cookies.popup);

  //; TODO: index.ejs render할 때 두 번째 인자로 popup key 로 요청의 쿠키값 보내기
  res.render("index", { popup: req.cookies.popup });
});

app.post("/setcookie", (req, res) => {
  //; TODO: 쿠키 생성
  // 쿠키 이름: 'popup', 쿠키 값: 'hide'
  // res.cookie(쿠키 이름, 쿠키 값, 쿠키 옵션)
  res.cookie("popup", "hide", myCookieConf);
  res.send("쿠키 설정 성공!!");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// 힌트
//-- req 객체
//) req.cookies: cookie-parser 미들웨어가 만드는 요청의 쿠키를 해석한 객체
//) req.singedCookies: 서명된 쿠키들은 req.cookies 대신 여기에 담겨 있음

//-- res 객체
//) res.cookie(키, 값, 옵션): 쿠키를 '설정'하는 메서드
//) res.clearCookie(키 값, 옵션): 쿠키를 '제거'하는 메서드
