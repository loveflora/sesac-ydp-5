//=== 모듈 !!! ===
// routes > index.js
// 이 모듈의 역할 : '경로 선언'과 관련된 내용 기술
const express = require('express');
const router = express.Router();

//\ DB와 통신
// (임시) DB로부터 받아온 댓글 목록
const comments = [
  {
    id: 1,
    userid: 'helloworld',
    date: '2022-10-31',
    comment: '안녕하세요^~^',
  },
  {
    id: 2,
    userid: 'happy',
    date: '2022-11-01',
    comment: '반가워유',
  },
  {
    id: 3,
    userid: 'lucky',
    date: '2022-11-02',
    comment: '오 신기하군',
  },
  {
    id: 4,
    userid: 'bestpart',
    date: '2022-11-02',
    comment: '첫 댓글입니당ㅎㅎ',
  },
];

//.. 이 파일의 기본 경로 ---> localhost:PORT/
//) "app" -> "router".get()로 변경
//\ router객체에 주소 추가한 다음 --> module로 내보냄
//.. GET localhost:PORT/
router.get('/', (req, res) => {
  res.render('index');
});

//.. GET localhost:PORT/comments
router.get('/comments', (req, res) => {
  res.render('comments', { comments }); // { comments: comments }
});

//.. GET localhost:PORT/comment/:id
router.get('/comment/:id', (req, res) => {
  // res.params : 라우트 매개변수에 대한 정보 담겨 있음
  console.log('req.params', req.params); // { id: '1' } --> string

  const cmtId = Number(req.params.id); // 댓글의 고유 아이디

  //\  :id 변수에 0, 7 같은 존재하지 않는 id로 접근 시, 404 페이지
  //   if (cmtId < 1 || cmtId > cmtId.length) {
  //     return res.render('404');
  //   }

  //\  :id 변수에 아니라면
  //   if (cmtId % 1 !== 0) {
  //     return res.render('404');
  //   }

  //\  :id 변수에 숫자가 아닌 문자가 온다면, 404 페이지
  //   if (isNaN(cmtId)) {
  //     return res.render('404');
  //   }

  //  const cmtId = Number(req.params.id);   // 댓글의 고유 아이디 (1, 2, 3 ...)
  const cmtObj = comments[cmtId - 1];

  //# 이렇게 하면 7은 안됨
  //\ 0은 falsy한 값 --> truthy
  //\ 7은 truthy한 값 --> falsy --> 적용 안됨 !
  //   if (!cmtId) {   //
  //     return res.render('404');
  //   }

  // : 한 번에 결과 작성
  if (!cmtObj) {
    return res.render('404');
  }

  res.render('comment', { comment: cmtObj });
});

// module.exports 구문을 통해 router을 내보내야 !
// 다른 모듈(파일)에서 router 객체 사용 가능
module.exports = router;
// 위 코드 안쓰면 error 남
