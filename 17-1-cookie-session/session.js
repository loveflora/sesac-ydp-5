//=== session ===

const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

//; 미들웨어 등록
//-- 세션 옵션 객체
// secret: 안전하게 쿠키를 전송하기 위한 쿠키 서명 값
// resave: 세션에 수정사항이 생기지 않더라도 매 요청(req)마다 세션을 다시 저장할 것인지
// saveUninitialized: 세션에 저장할 내역이 없더라도 처음부터 세션을 생성할 지 설정
// httpOnly: http 프로토콜에서도 세션 사용 가능
// maxAge: 쿠키 수명 (단위 ms)
app.use(
  session({
    secret: 'MySessionSecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      maxAge: 20 * 1000, // 20초
    },
  })
);

app.get('/', (req, res) => {
  res.render('session');
});

//; 세션 설정하기
app.get('/set', (req, res) => {
  req.session.name = '홍길동'; // { name: '홍길동'}
  res.send('세션 설정 완료 !');
});

app.get('/name', (req, res) => {
  console.log(req.session);
  //   Session {
  //     cookie: {
  //       path: '/',
  //.       _expires: 2023-09-04T04:41:17.650Z,
  //       originalMaxAge: 20000,
  //       httpOnly: true
  //     },
  //     name: '홍길동'
  //   }

  //-- 현재 세션 아이디 (req.sessionID)
  // express-session 미들웨어에 의해 암호화된 쿠키 내용
  // (개발자도구 application 탭 - cookies - http://localhost:8000 - value의 s%3A 뒷 부분~~~))
  res.send({
    id: req.sessionID,
    name: req.session.name,
  });
});

//; 세션 삭제
app.get('/destroy', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      return;
    }

    //-- res.redirect(주소) : 주소로 이동
    res.redirect('/name'); // 세션 확인
    // Session {
    //     cookie: {
    //       path: '/',
    //.       _expires: 2023-09-04T04:46:09.100Z,
    //       originalMaxAge: 20000,
    //       httpOnly: true
    //     }
    // }
  });
});
// 세션 지워지면, id와 name 지워지고
// 새로운 id 재할당 받음
//) (1) 세션 설정(삭제 전)시 id
// id: "_dSkmaXktcw7NC_Qrlsz7o3hRN4tiTVH"
//) (2) 세션 삭제 후 id
// id: "kN5i5kuy9PPM2_am6D41pNX56oXUo7Cf"
// (1), (2) 다름

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

//] 세션 정리
//; 1. 세션 설정
// req.session.키 = 값

//; 2. 세션 사용
// req.session.키

//; 3. 세션 삭제
// req.session.destroy(콜백)
