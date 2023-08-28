const mysql = require('mysql');

// db 연결 설정
// conn : db 연결 객체
const conn = mysql.createConnection({
  host: 'localhost', // DB가 설치된 호스트 IP주소
  user: 'user', // DB 접속 유저이름
  password: '1234', // DB 접속 비번
  database: 'mvc',
});

// model(server) => db로 쿼리 전송
exports.getVisitors1 = (callback) => {
  //--- [ 변경 전 ]
  //   return [
  //     { id: 1, name: '홍길동', comment: '내가 왔다.' },
  //     { id: 2, name: '이찬혁', comment: '으라차차' },
  //.   ];
  // };

  //--- [ 변경 후 ]
  conn.query('select * from visitor', (err, rows) => {
    if (err) {
      throw err;
    }

    console.log('model >>', rows);
    //  [  RowDataPacket { id: 1, name: '김나나', comment: '안녕하세요' },
    //   RowDataPacket { id: 2, name: '김하하', comment: '반갑습니다' } ]

    callback(rows);
    //\ result --- rows
    //.. Cvisitor
    // Visitor.getVisitors1((result) => {
    //   console.log('controller >>', result);
    //   res.render('visitor', { data: result });
    // });
  });
};
