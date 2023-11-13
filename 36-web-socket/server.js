const ws = require('ws'); // ws 모듈 불러오기
const express = require('express'); // express 모듈 불러오기

const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('client');
});

const server = app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

const wsServer = new ws.Server({ server }); // 웹 소켓 서버 접속

const sockets = []; // 클라이언트를 저장할 배열

wsServer.on('connection', (socket) => {
  console.log('[ 클라이언트 연결 완료 ]');

  socket.on('close', () => {
    console.log('[ 클라이언트 연결 종료 ]');
  });
});

// ! 소켓이랑 세션 차이점 !
// 소켓 : 탭 단위
// 세션 : 브라우저 단위
