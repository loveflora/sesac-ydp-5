// TODO: 컨트롤러 코드
//] Model과 연결
// (임시) DB로부터 받아온 댓글 목록
const User = require('../model/User.js');

//] View와 연결 (index.js)
//; GET /
// localhost:PORT/user
exports.main = (req, res) => {
  res.render('index');
};

// //; GET /signup
exports.signup = (req, res) => {
  User.signup((result) => {
    console.log('signup controller >>', result);
    res.render('signup', { data: result });
  });
};

// //; GET /signin
exports.signin = (req, res) => {
  User.signin((result) => {
    console.log('signin controller >>', result);
    res.render('signin', { data: result });
  });
};

//; POST /signup
exports.postSignup = (req, res) => {
  User.postSignup(req.body, (insertId) => {
    console.log('postSignup controller >>', req.body);

    const { userid, name, pw } = req.body;
    res.send({ id: insertId, userid: userid, name: name, pw: pw });
  });
};

//; POST /signin
exports.postSignin = (req, res) => {
  console.log('postSignin controller >>', req.body);
  // .postSignin = (data, cb) => {}
  User.postSignin(req.body, (result) => {
    //   console.log('postSignin controller req.body >>', req.body);
    //   console.log('postSignin controller result >>', result);
    // const { userid, pw } = req.body;
    // res.send({
    //   userid: userid,
    //   pw: pw,
    //   resultId: result.id,
    //   resultPW: result.pw,
    // });
  });
};
