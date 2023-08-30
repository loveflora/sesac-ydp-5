// TODO: DB(mysql) 연결
// TODO: 모델 코드
const mysql = require('mysql');

// db 연결 설정
// conn : db 연결 객체
const conn = mysql.createConnection({
  host: 'localhost', // DB가 설치된 호스트 IP주소
  user: 'user', // DB 접속 유저이름
  password: '1234', // DB 접속 비번
  database: 'codingon',
});

//; model(server) => db로 쿼리 전송
exports.signup = (callback) => {
  conn.query('select * from user', (err, rows) => {
    if (err) {
      throw err;
    }

    console.log('model >>', rows);

    callback(rows);
  });
};

exports.signin = (callback) => {
  conn.query('select * from user', (err, rows) => {
    if (err) {
      throw err;
    }

    console.log('model >>', rows);

    callback(rows);
  });
};

exports.postSignup = (data, callback) => {
  // 매개변수
  // 1) data : 프론트에서 유저가 입력한 값 (req.body)
  // 2) callback : query 실행 후 호출할 함수

  const { userid, name, pw } = data;

  conn.query(
    `insert into user values (null, "${userid}", "${name}","${pw}")`,
    (err, rows) => {
      if (err) {
        throw err;
      }

      console.log('model >>', rows);
      callback(rows.insertId);
    }
  );
};

exports.postSignin = (data, callback) => {
  const { userid, pw } = data;

  console.log(data);

  //   conn.query(
  //     `select * from user userid="${userid}" AND pw = "${pw}"`,
  //     (err, rows) => {
  //       if (err) {
  //         throw err;
  //       }

  //       console.log('model >>', rows);
  //       console.log('model >>', userid);
  //       console.log('model >>', pw);

  //       callback(rows);
  //     }
  //   );
};
