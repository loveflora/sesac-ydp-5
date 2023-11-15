const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app); // express 앱으로 http 서버를 생성
const io = socketIO(server); // socket.io를 http 서버에 연결
const PORT = 8080;

// 사용자 닉네임 모음 객체
const nickObjs = {}; // { socket.id: nick1, socket.id: nick2, ... }
// [nick1, nick2, nick3]
// 배열보단 객체, 순서가 필요없기 때문

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('chat');
});

function updateList() {
  io.emit('updateNicks', nickObjs); // 전체 사용자 닉네임 모음 객체 전달
}

// io.on() : socket 관련한 통신작업 처리
io.on('connection', (socket) => {
  // connection 이벤트는 클라이언트가 접속했을 때 발생
  // 콜백 함수 인자로 socket 객체를 제공

  console.log('서버 연결 완료 ::', socket.id);
  // socket.id : socket 고유 아이디 (브라우저 탭 단위)

  //] [ 실습 3 ] 채팅방 입장 안내
  //  io.emit('notice', `${socket.id}님이 입장하셨습니다.`);

  //]  [ 실습 3-2 ]
  // emit() from server
  //; socket.emit(event_name, data) : 해당 클라이언트에게만 이벤트, 데이터를 전송
  //; io.emit(event_name, data) : 서버에 접속된 모든 클라이언트 전송
  socket.on('setNick', (nick) => {
    console.log(`닉네임 설정 완료 :: ${nick}님 입장`);

    //-- 프론트에서 입력한 nick이 nickObjs 객체에 존재하는지 검사
    if (Object.values(nick).indexOf(nick) > -1) {
      // 1) 이미 존재 : error 이벤트 + '이미 존재하는 닉네임입니다.'
      socket.emit('error', '이미 존재하는 닉네임입니다.');
    } else {
      // 2) 새 닉네임 : notice 이벤트 + ${nick} 님이 입장하셨습니다.
      nickObjs[socket.id] = nick;
      console.log('접속 유저 목록 ::', nickObjs);
      io.emit('notice', `${nick}님이 입장하셨습니다.`); // 전체 공지
      socket.emit('entrySuccess', nick); // 해당 소켓 데이터 전송
      updateList();
    }
  });

  // [ 실습 3-3 ] 클라이언트 퇴장 시
  // "notice" 이벤트로 퇴장 공지
  socket.on('disconnect', () => {
    console.log('접속 끊김 ::', `${nickObjs[socket.id]} 님이 퇴장하셨습니다.`);

    io.emit('notice', `${nickObjs[socket.id]} 님이 퇴장하셨습니다.`);
    delete nickObjs[socket.id];
    updateList();
  });

  //   socket.on('sendMessage', (data) => {
  //     // 클라이언트에서 받은 메시지를 기록합니다
  //     console.log(`${data.who} : ${data.msg}`);
  //     // 연결된 모든 클라이언트에게 메시지를 브로드캐스트합니다
  //     io.emit('receiveMessage', { who: data.who, msg: data.msg });
  //   });

  // [ 실습 1 ]
  //   socket.on('hello', (data) => {
  //     console.log(`${data.who} : ${data.msg}`);
  //     socket.emit('helloKr', { who: 'hello', msg: '안녕!!!' });
  //   });

  //   socket.on('study', (data) => {
  //     console.log(`${data.who} : ${data.msg}`);
  //     socket.emit('studyKr', { who: 'study', msg: '공부!!!' });
  //   });

  //   socket.on('bye', (data) => {
  //     console.log(`${data.who} : ${data.msg}`);
  //     socket.emit('byeKr', { who: 'bye', msg: '잘가!!!' });
  //   });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
