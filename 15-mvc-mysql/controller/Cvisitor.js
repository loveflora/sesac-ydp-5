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
  // console.log(Visitor.getVisitors());

  //-- [ 변경 전 ]
  // res.render('visitor', { data: Visitor.getVisitors() });

  //-- [ 변경 후 ]
  Visitor.getVisitors1((result) => {
    console.log('controller >>', result);
    res.render('visitor', { data: result });
  });
};
