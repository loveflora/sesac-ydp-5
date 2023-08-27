//=== Controller ===
//-- Controller은 View와 Model과 연결

//] View와 연결 (index.js)
exports.main = (req, res) => {
  res.render("index");
};

//] Model과 연결
// (임시) DB로부터 받아온 댓글 목록
const Info = require("../model/Login");

exports.getAxios = (req, res) => {
  console.log(req.query);
  res.send(req.query);
};

exports.postAxios = (req, res) => {
  const info = Info.getInfo();
  res.send({ userData: req.body, info: info });
};
