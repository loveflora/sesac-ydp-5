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

//; POST /visitor
exports.postVisitor = (req, res) => {
  console.log(req.body);
  //   data: {
  //   name: form.name.value,
  //   comment: form.comment.value,
  // },

  //.. model
  // exports.postVisitor = (data, callback) => {
  // 매개변수
  // 1) data : 프론트에서 유저가 입력한 값 (req.body)
  // 2) callback : query 실행 후 호출할 함수
  //   conn.query(
  //     `insert into visitor values (null, ${data.name}, ${data.comment})`,
  //     (err, rows) => {
  //       if (err) {
  //         throw err;
  //       }

  //       console.log('model >>', rows);
  //       callback(rows.insertId);
  //     }
  //.   );
  // };
  //.. 1) data : req.body
  //.. 2) callback : (insertId)=>{...}
  Visitor.postVisitor(req.body, (insertId) => {
    console.log('controller >>', req.body);
    // 프론트로 보낼 데이터
    // res.send({ result: true });

    const { name, comment } = req.body;
    res.send({ id: insertId, name: name, comment: comment });
  });
};

//; DELETE /visitor
exports.deleteVisitor = (req, res) => {
  console.log(req.body); // { id : xx }
  const { id } = req.body;

  Visitor.deleteVisitor(id, (result) => {
    console.log('controller >>', result); // true
    res.send(result); // res.send(true);
  });
};
