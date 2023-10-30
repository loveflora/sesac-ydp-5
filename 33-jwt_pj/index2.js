const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 8000;
const SECRET = '9PBYbnIhfXEVQdeXrvPWrX6ydDAJkIqV'; // env 환경변수

const userInfo = { id: 'banana', pw: '1234', name: '홍길동', age: 29 }; // db 연결

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  try {
    const { id, pw } = req.body; // user가 입력한 정보
    const { id: realId, pw: realPw } = userInfo; // user의 정답 정보

    if (id === realId && pw === realPw) {
      //-- 로그인 성공 ! : token 생성
      //; sign: 서버측에서 JWT를 생성할 때 사용
      // 1번째 인자 payload : 암호화할 친구
      // 2번째 인자 시크릿키
      const token = jwt.sign({ id }, SECRET); // 암호화 이용해서 토큰을 만들자 !
      res.json({ result: true, token });
    } else {
      //-- 로그인 실패 : 응답
      res.json({ result: false, message: '로그인 정보가 올바르지 않음 !' });
    }
  } catch {
    console.log(error);
  }
});

app.post('/token', (req, res) => {
  console.log(req.headers);
  //\ 참고용 : req.headers
  // {
  //   host: 'localhost:8000',
  //   connection: 'keep-alive',
  //   'content-length': '0',
  //   'sec-ch-ua': '"Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"',
  //   accept: 'application/json, text/plain, */*',
  //   'sec-ch-ua-mobile': '?0',
  //   authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJhbmFuYSIsImlhdCI6MTY5ODY0Mzk3NH0.rhxs7KKjgaqbmlgY3EC6hXDC6-lDRehb99erIqA05Wc',
  //   'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
  //   'sec-ch-ua-platform': '"macOS"',
  //   origin: 'http://localhost:8000',
  //   'sec-fetch-site': 'same-origin',
  //   'sec-fetch-mode': 'cors',
  //   'sec-fetch-dest': 'empty',
  //   referer: 'http://localhost:8000/',
  //   'accept-encoding': 'gzip, deflate, br',
  //   'accept-language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
  //   cookie: 'amp_6e403e=nqsN2kBF9DFyeHyi2FQZU4...1hdv90sur.1hdvbrojp.0.0.0'
  // }

  console.log(req.headers.authorization); // Bearer token_string (앞에 있는 'Bearer'는 필요없음)

  if (req.headers.authorization) {
    const token = req.headers.authorization.split(' '); // ['Bearer', 'token_string']

    try {
      //; verify: 클라이언트나 서버에서 받은 JWT의 유효성을 검증할 때 사용
      const result = jwt.verify(token[1], SECRET);
      console.log('result >>', result);
      // result >> { id: 'banana', iat: 1698643974 }

      // token 유효 확인했음.

      //; 한 번 더 확인 (검증)
      // {헤더}.{페이로드}
      // “시크릿키”
      // ⇒ 서버에서 두 개 조합해서 결과 A를 생성
      // ⇒ 토큰 생성 : {헤더}.{페이로드}.000 를 base64 인코딩으로 바꿈

      // 토큰을 디코딩 (암호화된 것을 다시 해독)해서 평문으로 다시 바꿈
      // {헤더}.{페이로드}
      // “시크릿키”
      // ⇒ 결과 B 생성

      // A == B 가 true 라면 검증 완료 !
      if (result.id === userInfo.id) {
        res.json({ result: true, name: userInfo.name });
      }
      //\ post
      //\ http://localhost:8000/token
      // Postman에서 Authorization: Bearer token_string 입력한 뒤 결과
      // {
      //     "result": true,
      //     "name": "홍길동"
      // }
    } catch (error) {
      console.log(error);
      res.json({ result: false, message: '인증된 회원 아님' });
    }
  } else {
    res.redirect('/login');
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
