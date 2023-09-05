//; TODO: User 모델 모듈 불러오기
const { User } = require('../models');

//-- utils 폴더 bcrypt
const { hashPassword, comparePassword } = require('../utils/bcrypt');

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
  // 세션에 userInfo 데이터가 없다면; /login 경로로 리다이렉트
  // -> 즉, 해당 요청은 로그인한 사람만 전체 유저를 조회할 수 있음
  if (req.session.userInfo) {
    // 전체 유저를 찾음 (findAll)
    const result = await User.findAll();
    console.log('result >>> ', result);
    res.render('users', { users: result, name: req.session.userInfo.name });
  } else {
    res.redirect('/login');
  }
};

exports.getProfile = async (req, res) => {
  //-- 1. userInfo 세션에 저장된 id를 이용해 현재 로그인한 유저의 id 값으로 특정 유저 정보 하나를 조회
  const result = await User.findOne({
    where: { id: req.session.userInfo.id },
  });
  //-- 2. profile.ejs 랜더 + data 키로 특정 유저를 찾은 결과를 넘김
  res.render('profile', { data: result });
};

exports.postRegister = async (req, res) => {
  // 회원가입 요청시 비밀번호는 암호화한 값으로 DB에 추가
  const { pw, name, userid } = req.body;
  const result = await User.create({
    pw: hashPassword(pw),
    name,
    userid,
  });
  // 응답은 {result: true}
  if (result) {
    res.send({ result: true });
  }
};

exports.postLogin = async (req, res) => {
  const { pw, userid } = req.body;

  //) Step1. 아이디를 찾아서 사용자 존재 유무 체크
  const result = await User.findOne({
    where: { userid },
  });

  // console.log('result.pw>>>>>>>>', result.pw);
  // console.log('pw>>>>>>>>', pw);
  // console.log(comparePassword(pw, result.pw));
  //) Step2. 입력된 비밀번호 암호화하여 기존 데이터와 비교

  // 2-1. 유저 있음
  if (result) {
    // 2-1-1. 비밀번호 일치;
    if (comparePassword(pw, result.pw)) {
      //  userInfo 키 값으로 세션 생성 (userInfo는 name키와 id 키를 갖는 "객체")
      req.session.userInfo = { name: result.name, id: result.id };
      //  응답 데이터: { result: true, data: step1에서 찾은 유저 }
      res.send({
        result: true,
        data: result,
      });
    } else {
      // 2-1-2. 비밀번호 불일치;
      //    응답 데이터; { result: false, message: '비밀번호가 틀렸습니다.'
      res.send({ result: false, message: '비밀번호가 틀렸습니다.' });
    }
  } // 2-2. 유저 없음
  // 응답 데이터; { result: false, message: '존재하는 사용자가 없습니다' }
  else res.send({ result: false, message: '존재하는 사용자가 없습니다.' });

  console.log('postSignin >>>', req.body.userid, req.body.pw);
};

exports.patchProfile = async (req, res) => {
  // 사용자가 요청한 데이터를 변경
  const { id, userid, name, pw } = req.body;
  const result = await User.update(
    { pw: hashPassword(pw), name, userid },
    { where: { id } }
  );

  // 응답 데이터; { result: true }
  if (result) {
    res.send({ result: true });
  }
};

exports.deleteUser = async (req, res) => {
  //-- 1. 유저 삭제
  const { id } = req.body;
  await User.destroy({ where: { id } });

  //-- 2. 세션 삭제
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      return;
    }
  });
  res.send({ result: true });
};
