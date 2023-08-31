//=== Controller ===
//-- Controller은 View와 Model과 연결

//] Model과 연결
//>> [ 15. mvc-sql ]
// const Visitor = require('../model/Visitor');

//>> [ 16. sequelize ]
//) db = { sequelize, Sequelize, Visitor: 모델(테이블)}
// => 구조분해할당 사용
const { Visitor } = require("../models");

//; GET /
exports.main = (req, res) => {
  res.render("index");
};

//; GET /visitor
//] read all
exports.getVisitors = async (req, res) => {
  //>> [ 14. mvc ]
  // res.render('visitor', { data: Visitor.getVisitors() });
  //>> [ 15. mvc-sql ] : sql에서 꺼내서 갖고 옴
  // Visitor.getVisitors1((result) => {
  //   console.log('controller >>', result);
  //   res.render('visitor', { data: result });
  // });

  //>> [ 16. sequelize ] : async, await 사용
  const result = await Visitor.findAll();
  console.log("result >>> ", result);
  res.render("visitor", { data: result });
};

//] CREATE
//; POST /visitor
exports.postVisitor = async (req, res) => {
  const { name, comment } = req.body;

  //>> [ 15. mvc-sql ]
  // Visitor.postVisitor(req.body, (insertId) => {
  //   res.send({ id: insertId, name: name, comment: comment });

  //>> [ 16. sequelize ]
  const result = await Visitor.create({
    name,
    comment,
  });
  //_ result : create메서드가 실행된 결과 (== insert 한 데이터 값)
  res.send(result);
};

//] DELETE
//; DELETE /visitor
exports.deleteVisitor = async (req, res) => {
  console.log(req.body); // { id : xx }
  const { id } = req.body;

  //>> [ 15. mvc-sql ]
  // Visitor.deleteVisitor(id, (result) => {
  //   console.log('controller >>', result); // true
  //   res.send(result); // res.send(true);
  // });

  //>> [ 16. sequelize ]
  const result = await Visitor.destroy({
    where: { id },
  });

  //_ result :  destroy한 결과
  console.log("result >>>", result);
  //'' res.send(result);
  //'' ===> [ERR_HTTP_INVALID_STATUS_CODE]: Invalid status code: 1
  // 프론트에 'destroy한 결과'를 넘기는 처리는 에러남

  res.send(true); // '삭제 성공(true)'을 프론트로 넘김
};

//] read one
//-- [ 수정 ] 버튼 클릭 시, input에 값 올라옴
exports.getVisitor = async (req, res) => {
  //: 쿼리스트링
  //_ GET /visitor?id=1
  // controller에서는
  // console.log("req.query >>> ", req.query);
  // {  }

  //: param
  //_ GET /visitor/:id
  // controller에서는
  console.log("req.params >>> ", req.params);
  // { id : 5 }

  const { id } = req.params; // {}

  //>> [ 15. mvc-sql ]
  // Visitor.getVisitor(id, (result) => {
  //   // result : 모델의 getVisitor callback의 인자
  //   // rows[]
  //   console.log('result >>>', result); //  { }
  //   res.send(result);
  // });

  //>> [ 16. sequelize ]
  const result = await Visitor.findOne({
    where: { id: id },
  });

  console.log("result >>>", result);
  res.send(result);
};

//] update
//; UPDATE /visitor
exports.updateVisitor = async (req, res) => {
  console.log(req.body); // { id: x, name: x, commnet: x }

  //>> [ 15. mvc-sql ]
  // Visitor.updateVisitor(req.body, (result) => {
  //   // console.log('update result >>>', result);
  //   // res.send(result);

  //   res.send({ isUpdated: true });
  // });

  //>> [ 16. sequelize ]
  // update(변경될 값, where절)
  await Visitor.update(
    { name: req.body.name, comment: req.body.comment },
    {
      where: { id: req.body.id },
    },
  );
  res.send({ isUpdated: true });
};
