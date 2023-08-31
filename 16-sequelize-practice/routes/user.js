// TODO: 라우트 설정
const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

// 기본 주소
// localhost:PORT/user

//; GET /user
// localhost:PORT/

//\ router.get('/', controller.main);  ---> 삭제
//\ app.js에서 localhost:8000 설정함
// app.get('/', (req, res) => {
//     res.render('index');
//   });

//; GET /user/signup
// localhost:PORT/user/signup
router.get("/signup", controller.signup);

//; POST /user/signup
router.post("/signup", controller.postSignup);

//; GET /user/signin
// localhost:PORT/user/signin
router.get("/signin", controller.signin);

//; POST /user/signin
router.post("/signin", controller.postSignin);

//; POST /user/profile
router.post("/profile", controller.postProfile);

//; POST /user/profile/edit
router.post("/profile/edit", controller.editProfile);

//; POST /user/profile/delete
router.post("/profile/delete", controller.deleteProfile);

module.exports = router;
