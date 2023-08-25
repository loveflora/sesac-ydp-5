//=== Controller ===
//-- Controller은 View와 Model과 연결

//] View와 연결 (index.js)
exports.main = (req, res) => {
  res.render('index');
};

//] Model과 연결
// (임시) DB로부터 받아온 댓글 목록
const Comment = require('../model/Comment');
// const comments = [
//   {
//     id: 1,
//     userid: 'helloworld',
//     date: '2022-10-31',
//     comment: '안녕하세요^~^',
//   },
//   {
//     id: 2,
//     userid: 'happy',
//     date: '2022-11-01',
//     comment: '반가워유',
//   },
//   {
//     id: 3,
//     userid: 'lucky',
//     date: '2022-11-02',
//     comment: '오 신기하군',
//   },
//   {
//     id: 4,
//     userid: 'bestpart',
//     date: '2022-11-02',
//     comment: '첫 댓글입니당ㅎㅎ',
//   },
//. ];

//.. comments 더이상 존재하지 않음 (model에 존재)
//.. comments => Comment.getCommentAll()로 수정
exports.comments = (req, res) => {
  res.render('comments', { comments: Comment.getCommentAll() });
};

exports.comment = (req, res) => {
  const cmtId = Number(req.params.id); // 댓글의 고유 아이디

  const comments = Comment.getCommentAll();
  const cmtObj = comments[cmtId - 1];

  if (!cmtObj) {
    return res.render('404');
  }

  res.render('comment', { comment: cmtObj });
};

//^ 참고 : module 하나씩 불러오기 (from. nodejs 강의)
//) key와 value 같으면 생략가능
// module.exports = {
//     add: add,
//     E: E,
//     PI: PI,
//   };

// const subtract = (a, b) => a - b;
// const multiply = (a, b) => a * b;
// const divide = (a, b) => a / b;

//-- 1. 객체로 감싸서 내보내기
// module.exports = { add, E, PI, subtract, multiply, divide };

//-- 2. 하나씩 내보내기
// module.exports.add = add;
// module.exports.E = E;
// module.exports.PI = PI;
// module.exports.subtract = subtract;
// module.exports.multiply = multiply;
// module.exports.divide = divide;

//; 3. module은 생략 가능
// exports.add = add;
// exports.E = E;
// exports.PI = PI;
// exports.subtract = subtract;
// exports.multiply = multiply;
// exports.divide = divide;
