// TODO: DB(mysql) 연결
// TODO: 모델 코드

//~ 작동 전 꼭 확인 !!!

//! 아이맥
const mysql = require('mysql2');

//! 맥북 M1
// const mysql = require('mysql');

// db 연결 설정
// conn : db 연결 객체
const conn = mysql.createConnection({
  host: 'localhost', // DB가 설치된 호스트 IP주소
  user: 'user', // DB 접속 유저이름
  password: '1234', // DB 접속 비번
  database: 'codingon',
});

//; model(server) => db로 쿼리 전송
// exports.signup = (callback) => {
//   conn.query('select * from user', (err, rows) => {
//     if (err) {
//       throw err;
//     }

//     console.log('model >>', rows);

//     callback(rows);
//   });
// };

exports.postSignup = (data, cb) => {
  // 매개변수
  // 1) data : 프론트에서 유저가 입력한 값 (req.body)
  // 2) cb : query 실행 후 호출할 함수

  const { userid, name, pw } = data;

  conn.query(
    `insert into user values (null, "${userid}", "${name}","${pw}")`,
    (err, rows) => {
      if (err) {
        throw err;
      }

      console.log('model >>', rows);
      cb(rows.insertId);
    }
  );
};

exports.postSignin = (data, cb) => {
  const { userid, pw } = data;

  //-- id랑 pw 일치하는지 확인 !!!
  conn.query(
    // LIMIT 1 : 최소 한 자리
    `SELECT * FROM user WHERE userid='${userid}' AND pw='${pw}' LIMIT 1`,
    (err, rows) => {
      if (err) {
        throw err;
      }

      console.log(rows);
      cb(rows);
    }
  );
};

//; 로그인한 유저 한 명 가져옴 !
exports.postProfile = (userid, cb) => {
  const sql = `SELECT * FROM user WHERE userid='${userid}' LIMIT 1`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    cb(rows);
  });
};

exports.editProfile = (data, cb) => {
  const { id, userid, name, pw } = data;

  const sql = `UPDATE user SET userid='${userid}', name='${name}', pw='${pw}' WHERE id='${id}'`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    cb();
  });
};

exports.deleteProfile = (id, cb) => {
  conn.query(`DELETE FROM user WHERE id='${id}'`, (err, rows) => {
    if (err) {
      throw err;
    }

    cb();
  });
};
