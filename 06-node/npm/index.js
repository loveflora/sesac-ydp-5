//=== 서버 만들기 ===
// node.js를 통해 http로 서버 구축

//] http 모듈로 웹 서버 생성
// 클라이언트가 'localhost:PORT번호'로 요청을 날렸으나, 서버가 응답하고 있는 내용이 없음.
// 응답 받는 내역이 없어서 무한로딩 되는거임.
const http = require('http');

// fs : fileSystem  (파일 관련 내장 모듈)
const fs = require('fs');

//; http 모듈 서버 만들기
// Response 객체
const server = http.createServer(function (req, res) {
  //   res.writeHead(200, { 'content-type': 'text/html; charset=utf8' }); // 응답 헤더 (한글 지원)
  //   res.write('<h1>Hello, my first node server ! ㅇㄴㄹㄴㅇㄹㄴ</h1>'); // 응답 본문
  //   res.end('<p>End</p>'); // 응답 본문 작성 후, 응답 종료

  try {
    //; html 파일 불러오기
    const data = fs.readFileSync('./index2.html');
    res.writeHead(200, { 'content-type': 'text/html; charset=utf8' }); // 응답 헤더 (한글 지원)
    res.write(data); // 응답 본문
    res.end(); // 응답 본문 작성 후, 응답 종료
  } catch (error) {
    // 퀴즈 : 404.html 만들어서 해당 html을 응답으로 보내도록 코드 수정
    const err = fs.readFileSync('./404.html');

    console.log(error);
    res.writeHead(404, { 'content-type': 'text/html; charset=utf8' });
    res.write(error.message + '에러가 났어요 ㅠㅠ');
    res.write(err);
    res.end();
  }
});
const PORT = 8000;

// request 이벤트 : 클라이언트 요청
server.on('request', (req, res) => {
  console.log('request 이벤트 발생 !');
});

// connection 이벤트 : 클라이언트가 접속 (클라이언트와 서버가 연결되었을 때) 발생
server.on('connection', (req, res) => {
  console.log('connection 이벤트 발생!');
});
//# 왜 2번 찍히지...?
// pavicon 때문...?
//# 왜 connection 부터 찍히는지
// 접속 먼저 하고 - 요청
//# live server는 왜 안되는지
// index.html에서 js파일 연결한게 아니라서(html에서 출발하는게 아니라), localhost:PORT 주소 찾아서 해야 함

//; 서버 실행
// listen(port, callback) : 서버를 첫번째 매개변수의 포트로 실행한다.
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//; 10초 후 서버 종료
// setTimeout(() => {
//   console.log('10초가 지나 서버가 종료되었습니다.');
//   server.close(); // 서버종료 메서드
// }, 10000);
