//=== Controller ===
//-- Controller은 View와 Model과 연결

//] Model과 연결
// (임시) DB로부터 받아온 댓글 목록
const Visitor = require('../model/Visitor');

//] View와 연결 (index.js)
//; GET /
// localhost:PORT/
exports.main = (req, res) => {
  res.render('index');
};

//; GET /visitor
// localhost:PORT/visitor
exports.getVisitors = (req, res) => {
  console.log(Visitor.getVisitors());
  res.render('visitor', { data: Visitor.getVisitors() });
};

// exports.getAxios = (req, res) => {
//   console.log(req.query);
//   res.send(req.query);
// };

// exports.postAxios = (req, res) => {
//   const info = Info.getInfo();
//   res.send({ userData: req.body, info: info });
// };
