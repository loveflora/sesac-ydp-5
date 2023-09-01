// TODO: 컨트롤러 코드
//] Model과 연결
//>> [ 15. mvc-sql ]
// const User = require("../model/User");

//>> [ 16. sequelize ]
//) db = { sequelize, Sequelize, Visitor: 모델(테이블)}
// => 구조분해할당 사용
const { User } = require('../models');

//; GET /signup
exports.signup = (req, res) => {
  res.render('signup');
};

//; GET /signin
exports.signin = (req, res) => {
  res.render('signin');
};

//] CREATE
//; POST /signup
exports.postSignup = async (req, res) => {
  const { userid, name, pw } = req.body;

  //>> [ 15. mvc-sql ]
  // User.postSignup(req.body, (insertId) => {
  //   console.log("postSignup controller >>", req.body);
  //   const { userid, name, pw } = req.body;
  //   res.send({ id: insertId, userid: userid, name: name, pw: pw });
  // });

  //>> [ 16. sequelize ]
  const result = await User.create({
    userid,
    name,
    pw,
  });
  //_ result : create메서드가 실행된 결과 (== insert 한 데이터 값)
  res.send(result);
};

//; POST /signin
exports.postSignin = async (req, res) => {
  //.. model < User
  // exports.postSignin = (data, cb) => { ... }

  //>> [ 15. mvc-sql ]
  // User.postSignin(req.body, (result) => {
  // // 콜백인자로 rows 결과 받음 : rows --> result
  // // cb(rows);
  // // [  RowDataPacket { id: 1, name: '김나나', comment: '안녕하세요' },
  // console.log(result);
  // console.log(req.body);

  // if (result.length > 0) {
  //   res.send(true);
  // } else {
  //   res.send(false);
  // }

  // console.log("postSignin >>>", req.body.userid, req.body.pw);

  //>> [ 16. sequelize ]
  try {
    const result = await User.findOne({
      where: { userid: req.body.userid, pw: req.body.pw },
    });

    console.log('postSignin_result>>>', result);

    if (result) {
      res.send(true);
    } else res.send(false);
  } catch (err) {
    res.render('404');
  }

  console.log('postSignin >>>', req.body.userid, req.body.pw);
};

exports.postProfile = async (req, res) => {
  //>> [ 15. mvc-sql ]
  // User.postProfile(req.body.userid, (result) => {
  //   res.render("profile", { data: result[0] });
  // });

  //>> [ 16. sequelize ]
  try {
    console.log('postProfile_req.body>>', req.body);
    // { userid: 'sean' }
    //.. signin.ejs 파일에서 userid만 넘겨서 userid만 존재

    // <form name="form_info" action="/user/profile" method="POST">
    //  <input type="hidden" name="userid" />
    // </form>

    const result = await User.findOne({
      where: { userid: req.body.userid },
    });
    console.log('postProfile_result>>>', result);
    console.log('id>>', req.body.id);

    // if (result) {
    res.render('profile', { data: result });
    // }
  } catch (err) {
    res.render('404');
    console.log('postProfile_id>>>', req.body.id);
  }
};

exports.editProfile = async (req, res) => {
  //>> [ 15. mvc-sql ]
  // User.editProfile(req.body, () => {
  //   res.send(true);
  // });

  //>> [ 16. sequelize ]
  // update(변경될 값, where절)
  await User.update(
    { userid: req.body.userid, name: req.body.name, pw: req.body.pw },
    {
      where: { id: req.body.id },
    }
  );
  res.send({ isUpdated: true });
};

//] DELETE
exports.deleteProfile = async (req, res) => {
  //>> [ 15. mvc-sql ]
  // User.deleteProfile(req.body.id, () => {
  //   res.send(true);
  // });

  //>> [ 16. sequelize ]
  const result = await User.destroy({
    where: { id: req.body.id },
  });

  //_ result :  destroy한 결과
  console.log('result >>>', result);
  //'' res.send(result);
  //'' ===> [ERR_HTTP_INVALID_STATUS_CODE]: Invalid status code: 1
  // 프론트에 'destroy한 결과'를 넘기는 처리는 에러남

  res.send(true); // '삭제 성공(true)'을 프론트로 넘김
};
