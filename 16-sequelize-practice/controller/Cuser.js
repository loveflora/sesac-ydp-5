// TODO: 컨트롤러 코드
//] Model과 연결
//>> [ 15. mvc-sql ]
// const User = require("../model/User");

//>> [ 16. sequelize ]
//) db = { sequelize, Sequelize, Visitor: 모델(테이블)}
// => 구조분해할당 사용
const { User } = require("../models");

//; GET /signup
exports.signup = (req, res) => {
  res.render("signup");
};

//; GET /signin
exports.signin = (req, res) => {
  res.render("signin");
};

//] CREATE
//; POST /signup
exports.postSignup = (req, res) => {
  // User.postSignup(req.body, (insertId) => {
  //   console.log("postSignup controller >>", req.body);
  //   const { userid, name, pw } = req.body;
  //   res.send({ id: insertId, userid: userid, name: name, pw: pw });
  // });
};

//; POST /signin
exports.postSignin = (req, res) => {
  //.. model < User
  // exports.postSignin = (data, cb) => { ... }

  User.postSignin(req.body, (result) => {
    //) 1) 첫 번째 인자 data : req.body
    //) 2) 두 번째 인자 cb : (result) => {}
    // 콜백인자로 rows 결과 받음 : rows --> result
    // cb(rows);
    // [  RowDataPacket { id: 1, name: '김나나', comment: '안녕하세요' },
    //: result가 있으면 !
    console.log(result);
    console.log(req.body);

    if (result.length > 0) {
      res.send(true);
    } else {
      res.send(false);
    }

    console.log("postSignin >>>", req.body.userid, req.body.pw);
  });
};

exports.postProfile = (req, res) => {
  User.postProfile(req.body.userid, (result) => {
    res.render("profile", { data: result[0] });
  });
};

exports.editProfile = (req, res) => {
  User.editProfile(req.body, () => {
    res.send(true);
  });
};

exports.deleteProfile = (req, res) => {
  User.deleteProfile(req.body.id, () => {
    res.send(true);
  });
};
