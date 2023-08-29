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
    console.log('controller >>', result);
    res.render('signup', { data: result });
  });
};

// //; GET /signin
exports.signin = (req, res) => {
  User.signin((result) => {
    console.log('controller >>', result);
    res.render('signin', { data: result });
  });
};

//; POST /signin
exports.postSignin = (req, res) => {
  User.postSignin(req.body, (insertId) => {
    console.log('controller >>', req.body);

    const { id, pw } = req.body;
    res.send({ id: insertId, id: id, pw: pw });
  });
};

//; POST /signup
exports.postSignup = (req, res) => {
  User.postSignup(req.body, (insertId) => {
    console.log('controller >>', req.body);

    const { id, pw } = req.body;
    res.send({ id: insertId, id: id, pw: pw });
  });
};

// // localhost:PORT/visitor
// exports.getVisitors = (req, res) => {
//   // console.log(Visitor.getVisitors());

//   //-- [ 변경 전 ]
//   // res.render('visitor', { data: Visitor.getVisitors() });

//   //-- [ 변경 후 ]
//   Visitor.getVisitors1((result) => {
//     console.log('controller >>', result);
//     res.render('visitor', { data: result });
//   });
// };
