// const Visitor = require('../model/Visitor');
// ../model/Visitor은 DB와 연관되는 모델 부분

const { Visitor } = require('../models'); //../model/index.js

exports.main = (req, res) => {
  res.render('index');
};

exports.getVisitors = async (req, res) => {
  // [before]
  // console.log(Visitor.getVisitors())
  // Visitor.getVisitors((result) => {
  //   console.log('controller >>', result);
  //   res.render('visitor', { data: result });
  // });

  // [after]
  const result = await Visitor.findAll();
  console.log(result);
  res.render('visitor', { data: result });
};

//] CREATE
exports.postVisitor = async (req, res) => {
  // console.log(req.body); // { name: xx, comment: yy }
  const { name, comment } = req.body;

  //-- [ 15 ]
  // Visitor.postVisitor(req.body, (insertId) => {
  //   console.log('controller >> ', insertId);
  //   res.send({ id: insertId, name: name, comment: comment }); //client로
  // });

  //-- [ 16 ]
  const result = await Visitor.create({
    name,
    comment,
  });

  // console.log(result); // create메서드가 실행된 결과 (== insert 한 데이터 값)
  res.send(result);
};

//] DELETE
exports.deleteVisitor = async (req, res) => {
  console.log(req.body); // { id: xx }
  const { id } = req.body;

  //-- [ 15 ]
  // Visitor.deleteVisitor(id, (result) => {
  //   console.log('controller >>', result); // true
  // });

  //-- [ 16 ]
  const result = await Visitor.destroy({
    where: { id },
  });
  console.log('result >>>', result);
  // res.send(result); // destroy한 결과

  //'' [ERR_HTTP_INVALID_STATUS_CODE]: Invalid status code: 1
  // 프론트에 'destroy한 결과'를 넘기는 처리는 에러남

  res.send(true); // '삭제 성공(true)'을 프론트로 넘김
};

//] read one
//-- [ 수정 ] 버튼 클릭 시, 위로 올라옴
exports.getVisitor = async (req, res) => {
  // console.log(req.query); //{id: 5}
  console.log(req.params); //{id: 5}
  const { id } = req.params;

  //-- [ 15 ]
  // Visitor.getVisitor(id, (result) => {
  //   console.log('~~~~~~~~~');
  //   console.log(result);
  //   // 여기서의 result는 모델의 getVisitor callback의 인자(rows[{}])
  //   res.send(result);
  // });

  //-- [ 16 ]
  const result = await Visitor.findOne({
    where: { id: id },
  });

  console.log('result >>>', result);
  res.send(result);
};

//] update
exports.updateVisitor = async (req, res) => {
  console.log(req.body); // {id: x, name: x, comment: x}

  //-- [ 15 ]
  // Visitor.updateVisitor(req.body, () => {
  //   res.send({ isUpdated: true });
  // });

  //-- [ 16 ]
  // update(변경될 값, where절)
  await Visitor.update(
    { name: req.body.name, comment: req.body.comment },
    {
      where: { id: req.body.id },
    }
  );

  res.send({ isUpdated: true });
};
