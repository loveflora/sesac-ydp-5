const mysql = require('mysql');

// db 연결 설정
// conn : db 연결 객체
const conn = mysql.createConnection({
  host: 'localhost', // DB가 설치된 호스트 IP주소
  user: 'user', // DB 접속 유저이름
  password: '1234', // DB 접속 비번
  database: 'mvc',
  charset: 'utf8mb4', // 유니코드 인코딩
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
  conn.query('select * from visitor order by id desc', (err, rows) => {
    if (err) {
      throw err;
    }

    console.log('model >>', rows);
    //:  [  RowDataPacket { id: 1, name: '김나나', comment: '안녕하세요' },
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

exports.postVisitor = (data, callback) => {
  // 매개변수
  // 1) data : 프론트에서 유저가 입력한 값 (req.body)
  // 2) callback : query 실행 후 호출할 함수

  const { name, comment } = data;

  conn.query(
    `insert into visitor values (null, "${name}", "${comment}")`,
    (err, rows) => {
      if (err) {
        throw err;
      }

      console.log('model >>', rows);
      callback(rows.insertId);
    }
  );
};

exports.deleteVisitor = (id, callback) => {
  console.log('model >>', id); // front에서 알려준 삭제할 데이터의 pk

  conn.query(`delete from visitor where id=${id}`, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log('model >>', rows);

    //_ 삭제가 성공되었다
    // (1) 불린 값 : true
    // (2) { id: id }
    callback(true); // 삭제 성공
  });
};

exports.getVisitor = (id, callback) => {
  conn.query(`select * from visitor where id=${id}`, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log('rows >>>', rows); // rows >>> [ { ... } ]
    callback(rows[0]); // result >>> { ... }
  });
};

exports.updateVisitor = (updateData, callback) => {
  const { id, name, comment } = updateData;

  const sql = `update visitor set name="${name}", comment="${comment}" where id=${id}`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log('rows >>>', rows); // rows >>> [ { ... } ]
    callback();
  });
};
