// TODO: 라우트 설정
const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser.js');

// 기본 주소
// localhost:PORT/user

//; GET /user
// localhost:PORT/user
router.get('/', controller.main);

//; GET /user/signup
// localhost:PORT/user/signup
router.get('/signup', controller.signup);

//; GET /user/signin
// localhost:PORT/user/signin
router.get('/signin', controller.signin);

//; POST /user/signup
router.post('/signup', controller.postSignup);

//; POST /user/signin
router.post('/signin', controller.postSignin);

module.exports = router;

// router.post('/signup', controller.postSignup);
// router.post('/profile', controller.profile);
// router.post('/profile/edit', controller.editProfile);
// router.post('/profile/delete', controller.deleteUser);
