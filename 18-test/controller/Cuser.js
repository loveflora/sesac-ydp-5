// TODO: User 모델 모듈 불러오기
const { User } = require('../models');
// TODO: bcrypt 패키지 불러오기
//utils 폴더에 따로 js 모듈 생성함
const { hashPw, comparePw } = require('../utils/password');

exports.index = (req, res) => {
  // index.ejs 랜더 (data 키로 session 객체의 userInfo 전달)
  res.render('index', { data: req.session.userInfo });
};

exports.getRegister = (req, res) => {
  // register.ejs 랜더
  res.render('register');
};

exports.getLogin = (req, res) => {
  // login.ejs 랜더
  res.render('login');
};

exports.getUsers = async (req, res) => {
  // 세션에 userInfo 데이터가 있다면; 전체 유저를 찾음
  if (req.session.userInfo) {
    const result = await User.findAll();
    res.render('users', { users: result, name: req.session.userInfo.name });
  }
  // 세션에 userInfo 데이터가 없다면; /login 경로로 리다이렉트
  else {
    res.redirect('/login');
  }
  // -> 즉, 해당 요청은 로그인한 사람만 전체 유저를 조회할 수 있음
};

exports.getProfile = async (req, res) => {
  // 1. userInfo 세션에 저장된 id를 이용해 현재 로그인한 유저의 id 값으로 특정 유저 정보 하나를 조회
  const result = await User.findOne({
    where: { userid: req.session.userInfo.userid },
  });
  console.log(result.data);
  // 2. profile.ejs 랜더 + data 키로 특정 유저를 찾은 결과를 넘김
  res.render('profile', { data: result });
};

exports.postRegister = async (req, res) => {
  // 회원가입 요청시 비밀번호는 암호화한 값으로 DB에 추가
  const { userid, pw, name } = req.body;
  const result = await User.create({ userid, name, pw: hashPw(pw) });
  // 응답은 {result: true}
  if (result) {
    res.send({ result: true });
  }
};

exports.postLogin = async (req, res) => {
  const { pw, userid } = req.body;

  // Step1. 아이디를 찾아서 사용자 존재 유무 체크
  const result = await User.findOne({
    where: { userid },
  });

  // Step2. 입력된 비밀번호 암호화하여 기존 데이터와 비교
  // 2-1. 유저 있음
  // 2-1-1. 비밀번호 일치;
  if (result) {
    if (comparePw(pw, result.pw)) {
      //    userInfo 키 값으로 세션 생성 (userInfo는 name키와 id 키를 갖는 "객체")
      //    응답 데이터: { result: true, data: step1에서 찾은 유저 }
      req.session.userInfo = { name: result.name, userid };
      res.send({ result: true, data: result });
    } else {
      res.send({ result: true, data: result });
    }
  } else {
    res.send({ result: false, message: '존재하는 사용자가 없습니다' });
  }
};

exports.patchProfile = async (req, res) => {
  // 사용자가 요청한 데이터를 변경
  // 응답 데이터; { result: true }
  const { id, name, pw } = req.body;
  const result = await User.update(
    { name, id, pw: hashPw(pw) },
    { where: { id: id } }
  );
  if (result) {
    res.send({ result: true });
  }
};

exports.deleteUser = async (req, res) => {
  // 1. 유저 삭제
  const { id } = req.body;
  await User.destroy({ where: { id } });
  // 2. 세션 삭제
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      return;
    }
  });
  res.send({ result: true });
};
